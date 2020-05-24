import React, {useState, useEffect} from 'react';
import Layout from '../../components/layout';
import {Box, Flex, Text, Button, Link} from 'rebass';
import cor from '../../lib/courses';
import LoadingIndicator from '../../components/loadingIndicator';
import Popup from 'reactjs-popup';
import {MdClose} from 'react-icons/md';
import FilterCheckbox from '../../components/filterCheckbox';
import Collapse from '../../components/collapse';

const Tag = ({children}) => (
	<Box
		bg="lightgrey"
		m={1}
		p={1}
		sx={{
			borderRadius: 3
		}}
	>
		{children}
	</Box>
);

const TagList = ({c}) => {
	return (
		<Box>
			<Flex alignItems="center">
				<Text fontSize={[1, 2, 3]}>Category:</Text>
				<Tag>
					<Text fontSize={[1, 2]}>{c.Category}</Text>
				</Tag>
			</Flex>
			<Flex alignItems="center">
				<Text fontSize={[1, 2, 3]}>Subject:</Text>
				{c.Subject.map(s => (
					<Tag key={s}>
						<Text fontSize={[1, 2]}>{s}</Text>
					</Tag>
				))}
			</Flex>
		</Box>
	);
};

const categoryFilters = [
	{name: 'AP®️ Courses', filter: 'Advanced Placement'},
	{name: 'College-Level', filter: 'College-Level'},
	{name: 'College & Test Preparation', filter: 'College & Test Preparation'},
	{name: 'Misc.', filter: 'Miscellaneous'}
];

const subjectFilters = [
	{name: 'English', filter: 'English'},
	{name: 'Biology', filter: 'Biology'},
	{name: 'Chemistry', filter: 'Chemistry'},
	{name: 'Math', filter: 'Math'},
	{name: 'History', filter: 'History'},
	{name: 'Social Sciences', filter: 'Social Sciences'},
	{name: 'Computer Science', filter: 'Computer Science'},
	{name: 'Physics', filter: 'Physics'},
	{name: 'Languages', filter: 'Languages'},
	{name: 'College & Test Prep.', filter: 'College & Test Prep.'},
	{name: 'Neuropsychology', filter: 'Neuropsychology'},
	{name: 'Misc.', filter: 'Misc.'}
];

const courses = () => {
	const [courses, setCourses] = useState([]);
	const [filter, setFilter] = useState([]);

	useEffect(() => {
		const d = async () => setCourses(removeDuds(await cor()));
		d();
	}, []);

	// Removes all courses with no category or subject
	// does not work yet
	const removeDuds = c => {
		const out = [];
		c.map(i => {
			if (i.Category != null && i.Subject != null) {
				out.push(i);
			}
		});
		return out;
	};

	const update = async c => {
		// If filter is already applied, remove it
		if (filter.includes(c)) {
			filter.splice(filter.indexOf(c), 1);
		} else {
			filter.push(c);
		}

		// For the reload
		const data = courses.slice();
		setCourses([]);
		setCourses(data);
	};

	return (
		<Layout>
			<Box width={[1, 4 / 5]} mx="auto" my={3} p={3}>
				<Flex flexDirection={['column', 'row']}>
					<Box my={[1, 2, 3]} mr={[0, 2, 3]} width={[1, 1 / 3]}>
						<Box
							bg="whitesmoke"
							sx={{
								borderTopRightRadius: 5,
								borderTopLeftRadius: 5
							}}
							p={2}
						>
							<Text mb={3} fontSize={[1, 2, 3]}>
								Deadline to enroll or switch courses: January 1
							</Text>
							<Text fontSize={[1, 2, 3]}>
								You are permitted to enroll in up to 30 credits of courses.
							</Text>
							<Text my={3} fontSize={[1, 2, 3]}>
								Don't know what courses to take?
								<Text>
									Look at our <Link href="/courses/paths">course paths</Link>
								</Text>
							</Text>

							<Text mb={3} fontSize={[1, 2, 3]}>
								Note: These courses <b>DO NOT</b> provide credit. The credits
								are solely for the purposes of scheduling classes.
							</Text>
						</Box>
						<Box
							p={2}
							bg="whitesmoke"
							sx={{
								borderBottomRightRadius: 3,
								borderBottomLeftRadius: 3,
								position: 'sticky',
								top: 12
							}}
						>
							<Collapse title="Filter courses:">
								<Collapse title="Filter by course category">
									{categoryFilters.map(c => (
										<FilterCheckbox
											key={c.name}
											title={c.name}
											filter={c.filter}
											onChange={() => update(c.filter)}
										/>
									))}
								</Collapse>

								<Collapse title="Filter by course subject">
									{subjectFilters.map(c => (
										<FilterCheckbox
											key={c.name}
											title={c.name}
											filter={c.filter}
											onChange={() => update(c.filter)}
										/>
									))}
								</Collapse>
							</Collapse>
							<Text fontSize={[1, 2]}>
								Showing{' '}
								{
									// Copied from other filter
									courses.filter(c => {
										function hasAllElements(array, array2) {
											return array.every(i => array2.includes(i));
										}

										const comparison = c.Subject.slice();
										comparison.push(c.Category);
										return (
											filter.length == 0 || hasAllElements(filter, comparison)
										);
									}).length
								}{' '}
								of {courses.length} courses
							</Text>
						</Box>
					</Box>

					<Box my={2} mx={[0, 2]} width={[1, 2 / 3]}>
						{courses.length === 0 ? (
							<LoadingIndicator/>
						) : (
							courses
								.filter(c => {
									function hasAllElements(array, array2) {
										return array.every(i => array2.includes(i));
									}

									const comparison = c.Subject.slice();
									comparison.push(c.Category);
									return (
										filter.length == 0 || hasAllElements(filter, comparison)
									);
								})
								.map(c => (
									<Box
										key={c.FormattedName}
										my={2}
										py={1}
										bg="whitesmoke"
										sx={{
											border: '1px solid grey',
											borderRadius: 5,
											boxShadow: '0 0 5px snow'
										}}
									>
										<Box
											px={2}
											pb={1}
											sx={{
												borderBottom: '1px solid grey'
											}}
										>
											<Text fontSize={[1, 2, 3]} my={2} color="darkred">
												<b>{c.FormattedName}</b>
											</Text>
											{c.Description ? (
												<Text fontSize={[1, 2, 3]} color="#5c5f68">
													<Text>{c.Description}</Text>
												</Text>
											) : null}
										</Box>
										<Flex
											alignItems="center"
											justifyContent="space-between"
											p={2}
										>
											<TagList c={c}/>

											<Popup
												closeOnDocumentClick
												modal
												trigger={
													<Button bg="darkred">
														<Text
															sx={{fontFamily: 'IBM Plex Sans'}}
															fontSize={[1, 2, 3]}
														>
															Learn More
														</Text>
													</Button>
												}
											>
												{close => (
													<Box
														fontSize={[1, 2, 3]}
														p={[1, 2, 3]}
														color="#373C3F"
													>
														<Flex
															alignItems="center"
															justifyContent="space-between"
														>
															<Text color="darkred">
																<b>{c.Name}</b>
															</Text>
															<Button variant="blank" onClick={close}>
																<MdClose size="1.5em"/>
															</Button>
														</Flex>
														{c.Description ? (
															<Text mb={2}>{c.Description}</Text>
														) : null}
														{c.Notes ? <Text mb={2}>{c.Notes}</Text> : null}
														<Box mb={2}>
															<Text>
																Prerequisite(s):{' '}
																{c.Prerequisites ? c.Prerequisites : 'None'}
															</Text>

															{c.Corequisites ? (
																<Text>Corequisite(s): {c.Corequisites}</Text>
															) : null}
														</Box>
														{c.Instructors ? (
															<Text>Instructors(s): {c.Instructors}</Text>
														) : null}
														{c.Time ? (
															<Text>Estimated Completion Time: {c.Time}</Text>
														) : null}
														{c.Syllabus ? (
															<Link
																my={1}
																target="_blank"
																rel="noreferrer"
																color="#0077CC"
																sx={{textDecoration: 'none'}}
																href={c.Syllabus}
															>
																<Text>Syllabus</Text>
															</Link>
														) : null}
														<TagList c={c}/>
													</Box>
												)}
											</Popup>
										</Flex>
									</Box>
								))
						)}
					</Box>
				</Flex>
			</Box>
		</Layout>
	);
};

export default courses;
