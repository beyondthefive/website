import React, {useState, useEffect} from 'react'
import Layout from '../components/layout'
import {Text, Box, Flex, Link, Button, Image} from 'rebass'
import RegisterButton from '../components/registerButton'
import Testimonials from '../components/testimonials'
import get from '../lib/stats'
import Study from '../public/svgs/undraw_studying_s3l7.svg'
import Knowledge from '../public/svgs/undraw_knowledge_g5gf.svg'
import Prof from '../public/svgs/undraw_professor_8lrt.svg'
import Comparison from '../public/svgs/comparison.svg'
import BrowseCoursesButton from '../components/browseCoursesButton'

const Item = ({num, text}) => (
	<Box mx={[1, 2, 3]} textAlign="center">
		<Text fontSize={[4, 6, 7]}>
			<b>{num}</b>
		</Text>
		<Text fontSize={[1, 2, 3]}> {text}</Text>
	</Box>
)

const Tick = () => <Box width="1px" bg="lightgrey" />

const desc2 = [
	'Our classes have lectures, homework, and other things you would expect from a classroom-type learning environment.',
	'They are not for students who just want extra resources.'
]

const index = () => {
	const [stats, setStats] = useState('')

	useEffect(async () => {
		const d = async () => setStats(await get())
		d()
	}, [])
	return (
		<Layout waves header>
			<Box width={[1, 2 / 3]} mx="auto">
				<Flex flexDirection={['column', 'row']} my={3} pb={[2, 1, 0]}>
					<Flex justifyContent="center" width={[1, 2 / 3]} pt={[0, 4]}>
						<a name="about" />
						<Box textAlign="center">
							<Text textAlign="left" mb={3} fontSize={[2, 3, 4]} mx={[3, 1, 0]}>
								Beyond The Five is an online platform and community that
								provides <b>free</b> instruction in AP®️, SAT/ACT preparation,
								and college level courses.
							</Text>
							<Button bg="bt5blue" m={1} px={2} py={0} sx={{borderRadius: 5}}>
								<Link variant="nav" href="#learn-more">
									<Text
										sx={{fontFamily: 'IBM Plex Sans'}}
										fontWeight="normal"
										fontSize={[1, 2, 3]}
									>
										Learn More
									</Text>
								</Link>
							</Button>
						</Box>
					</Flex>
					<Flex justifyContent="center" width={[1, 1 / 2]}>
						<Study width="16em" height="13em" />
					</Flex>
				</Flex>
			</Box>
			<Flex
				pb={4}
				flexDirection="column"
				alignItems="center"
				width={1}
				bg="whitesmoke"
			>
				<a name="learn-more" />

				<Prof width="20em" height="16em" />
				{stats ? (
					<Flex mt={2}>
						<Item
							num={stats.categories.AdvancedPlacement}
							text="AP®️ Courses"
						/>
						<Tick />
						<Item
							num={stats.categories.CollegeLevel}
							text="College-Level Courses"
						/>
						<Tick />
						<Item num={stats.categories.Miscellaneous} text="Misc. Courses" />
						<Tick />
						<Item
							num={stats.categories.CollegeTestPreparation}
							text="College & Test Prep Courses"
						/>
					</Flex>
				) : null}

				<Text my={2} fontSize={[3, 4, 5]} textAlign="center">
					<b>850+</b> students from <b>50+</b> countries
				</Text>
				<BrowseCoursesButton
					bold
					my={[1, 2, 3]}
					bg="#E9E9E9"
					fontSize={[3, 4, 5]}
				/>
				<Text fontSize={[3, 4, 5]} textAlign="center">
					<b>100%</b> of our students pass their AP®️ exams!
				</Text>
			</Flex>
			<Box
				width={[1, 2 / 3, 1 / 2]}
				mx="auto"
				my={[3, 4, 5]}
				pb={[3, 4, 5]}
				px={2}
				sx={{
					borderBottom: '1px solid lightgrey'
				}}
			>
				<Comparison height="98%" width="98%" />
			</Box>

			<Box width={[1, 2 / 3]} mx="auto" my={[3, 4, 5]} px={2}>
				<Text fontSize={[3, 4, 5]} color="bt5blue" textAlign="center">
					<b>Our Instructors Have Been Accepted To</b>
				</Text>
				<Image
					height="98%"
					width="98%"
					src="/showcase.jpg"
					alt="university showcase"
				/>
				<Text fontSize={[2, 3, 4]} color="bt5blue" textAlign="center">
					...and many more prestigious universities!
				</Text>
				<Text fontSize={[1, 2]} textAlign="center" my={1}>
					Beyond The Five is neither owned nor endorsed by any of these
					universities.
				</Text>
				<Flex justifyContent="center">
					<Button
						bg="#123456"
						color="white"
						p={2}
						mt={2}
						py={0}
						sx={{
							borderRadius: 5,
							boxShadow: '-3px 3px 3px rgba(0, 0, 0, 0.25)'
						}}
					>
						<Link variant="nav" href="/staff#instructors">
							<Text sx={{fontFamily: 'IBM Plex Sans'}} fontSize={[2, 3, 4]}>
								Browse Instructors
							</Text>
						</Link>
					</Button>
				</Flex>
			</Box>
			<Box width={1} bg="whitesmoke">
				<Text pt={3} fontSize={[3, 4, 5]} textAlign="center" color="bt5blue">
					<b> What Our Students Have To Say</b>
				</Text>
				<Flex width={[1, 3 / 4]} mx="auto">
					<Testimonials />
				</Flex>
			</Box>

			<Box my={5} textAlign="center" fontSize={[3, 4, 5]}>
				<Text>
					Beyond The Five currently offers {stats.totalCourses} courses!
				</Text>
				<Text>
					Learn more about them on{' '}
					<Link href="/courses">our course catalog</Link>.
				</Text>
			</Box>
			<Text textAlign="center" fontSize={[3, 4, 5]}>
				Ready to learn with us?
			</Text>
			<Flex justifyContent="center">
				<RegisterButton />
			</Flex>
		</Layout>
	)
}

export default index
