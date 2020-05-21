import React, {useState, useEffect} from 'react';
import {Box, Flex, Text, Button, Link} from 'rebass';
import {FaArrowDown, FaArrowUp} from 'react-icons/fa';
import Layout from '../components/layout';
import LoadingIndicator from '../components/loadingIndicator';
import fetchData from '../lib/staff-data';

export default () => {
	const [one, setAdministrativeData] = useState([]);
	const [two, setInstructorsData] = useState([]);
	useEffect(() => {
		const d = async () => {
			// SetAdministrativeData(await fetchData());
			setInstructorsData(await fetchData('instructors'));
		};

		d();
	}, []);

	return (
		<Layout>
			<Box width={[1, 4 / 5]} mx="auto" my={3} p={3}>
				{/* one.length === 0 ? (
            <LoadingIndicator />
          ) : (
            one.map((i) => (
              <Card
                key={i.Name}
                name={i.Name}
                email={i.Email}
                location={i.Location}
                desc={i.About}
              />
            ))
            ) */}

				<Text fontSize={[2, 3, 4]} mb={2}>
					Interested in becoming an instructor for Beyond The Five? Fill out a{' '}
					<Link href="/register/instructor">teacher application</Link>!
				</Text>
				<Text fontSize={[3, 4, 5]} mb={2}>
					Our Teaching Team
				</Text>
				<Box
					sx={{
						display: 'grid',
						gridGap: 1,
						gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)']
					}}
				>
					{two.length === 0 ? (
						<LoadingIndicator/>
					) : (
						two.map(i => (
							<Card
								key={i.Name}
								name={i.Name}
								role={i.Role}
								position={i.Courses}
								location={i.Location}
								email={i.Email}
								desc={i.About}
							/>
						))
					)}
				</Box>
			</Box>
		</Layout>
	);
};

const Card = ({name, email, role, position, location, desc}) => {
	const [coursesOpen, setCoursesOpen] = useState(false);
	const [bioOpen, setBioOpen] = useState(false);
	console.log(position);
	return (
		<Box
			m={1}
			py={2}
			bg="whitesmoke"
			sx={{
				border: '1px solid grey',
				borderRadius: 5
			}}
		>
			<Text fontSize={[1, 2, 3]}>
				<Text mb={2} mx={2}>
					<Flex justifyContent="space-between" mb={2}>
						<Flex color="darkred">
							<b>{name}</b>
							{/* location ? <Text color="black">{"  "} - {location}</Text> : null */}
						</Flex>
						{role}
					</Flex>
				</Text>
				<Flex justifyContent="space-between" mx={2} mb={2}>
					<Button
						p={0}
						variant="blank"
						onClick={() => setCoursesOpen(!coursesOpen)}
					>
						<Text>
							{coursesOpen ? (
								<FaArrowUp size="0.75em"/>
							) : (
								<FaArrowDown size="0.75em"/>
							)}{' '}
							Courses
						</Text>
					</Button>
					<Button p={0} variant="blank" onClick={() => setBioOpen(!bioOpen)}>
						<Text>
							{bioOpen ? (
								<FaArrowUp size="0.75em"/>
							) : (
								<FaArrowDown size="0.75em"/>
							)}{' '}
							Learn more
						</Text>
					</Button>
				</Flex>
				<Box mx={2}>
					<Box mb={2}>{coursesOpen ? position : null}</Box>
					<Box>{bioOpen ? desc : null}</Box>
				</Box>
			</Text>
		</Box>
	);
};
