import React, {useState, useEffect} from 'react';
import Layout from '../components/layout';
import {Text, Box, Flex, Link} from 'rebass';
import RegisterButton from '../components/registerButton';
import Testimonials from '../components/testimonials';
import get from '../lib/stats';
import Study from '../public/svgs/undraw_studying_s3l7.svg';
import Knowlege from '../public/svgs/undraw_knowledge_g5gf.svg';

const Item = ({num, text}) => (
	<Text
		fontSize={[3, 4, 5]}
		m={1}
		mx={[2, 1]}
		p={1}
		textAlign="center"
		bg="whitesmoke"
		sx={{borderRadius: 5, boxShadow: '0 0 1px grey'}}
	>
		<b>{num}</b>
		<Text> {text}</Text>
	</Text>
);

const desc2 = [
	'Our classes have lectures, homework, and other things you would expect from a classroom-type learning environment.',
	'They are not for students who just want extra resources.'
];

const index = () => {
	const [stats, setStats] = useState('');

	useEffect(async () => {
		const d = async () => setStats(await get());
		d();
	}, []);
	return (
		<Layout waves header>
			<Box width={[1, 1 / 2, 2 / 3]} m={1} p={2} mx="auto">
				<Flex
					my={3}
					flexDirection={['column', 'row-reverse']}
					my={4}
					pb={[2, 1, 0]}
					sx={{
						borderBottom: '1px solid #EAEAEA'
					}}
				>
					<Flex justifyContent="center" width={[1, 1 / 2]} pt={[0, 4]}>
						<a name="about"/>
						<Text mb={3} fontSize={[3, 4, 5]} mx={[3, 0]}>
							Beyond The Five is an online platform and community that provides
							free instruction in AP®️, SAT/ACT preparation, and college level
							courses.
						</Text>
					</Flex>
					<Flex justifyContent="center" width={[1, 1 / 2]}>
						<Study width="90%" height="90%"/>
					</Flex>
				</Flex>
				<Box
					pb={[2, 1, 0]}
					sx={{
						borderBottom: '1px solid #EAEAEA'
					}}
				>
					<Text mb={2} fontSize={[3, 4, 5]} textAlign="center">
						We currently offer, self paced, online instruction, in:
					</Text>
					{stats != '' ? (
						<Box
							mx="auto"
							flexDirection={['column', 'row']}
							sx={{
								display: 'grid',
								gridGap: 1,
								gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)']
							}}
						>
							<Item
								num={stats.categories.AdvancedPlacement}
								text="AP®️ Courses"
							/>
							<Item
								num={stats.categories.CollegeLevel}
								text="College-Level Courses"
							/>
							<Item
								num={stats.categories.CollegeTestPreparation}
								text="College & Test Prep Courses"
							/>
							<Item num={stats.categories.Miscellaneous} text="Misc. Courses"/>
						</Box>
					) : null}

					<Text my={2} fontSize={[3, 4, 5]} textAlign="center">
						to over 160 students, from 10+ countries
					</Text>

					<Text my={5} fontSize={[3, 4, 5]} textAlign="center">
						<b>100%</b> of our students pass their AP®️ tests!
					</Text>
				</Box>
				<Testimonials/>
				<Flex my={3} flexDirection={['column', 'row']} my={4}>
					<Flex justifyContent="center" width={[1, 1 / 2]} pt={[0, 4]}>
						<Text mb={3} fontSize={[3, 4, 5]} mx={[3, 0]}>
							Our courses are intended for:
							<Text>- self-studying & low access students</Text>
							<Text>- students that need extra assistance</Text>
						</Text>
					</Flex>
					<Flex justifyContent="center" width={[1, 1 / 2]}>
						<Knowlege width="90%" height="90%"/>
					</Flex>
				</Flex>
				<Box my={4}>
					{desc2.map(d => (
						<Text key={d} textAlign="center" fontSize={[3, 4, 5]}>
							{d}
						</Text>
					))}
				</Box>
			</Box>
			<Box mt={3} mb={6}>
				<Text textAlign="center" fontSize={[3, 4, 5]}>
					Beyond The Five currently offers {stats.totalCourses} courses.
				</Text>
				<Text textAlign="center" fontSize={[3, 4, 5]}>
					Learn more about them on{' '}
					<Link href="/courses">our course catalog</Link>.
				</Text>
			</Box>
			<Text textAlign="center" fontSize={[3, 4, 5]}>
				Ready to learn with us?
			</Text>
			<Flex alignItems="center">
				<RegisterButton/>
			</Flex>
		</Layout>
	);
};

export default index;
