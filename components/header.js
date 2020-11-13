import React, {useState} from 'react'
import {Flex, Box, Heading, Link, Text, Button} from 'rebass'
import RegisterButton from '../components/registerButton'
import BrowseCoursesButton from '../components/browseCoursesButton'
import Waves from './waves'
import {MdClose} from 'react-icons/md'
import Learn from '../public/svgs/undraw_researching_22gp.svg'
import Logo from '../public/logo.svg'

const links = [
	/* { href: '/#about', label: 'About' }, */
	{href: '/courses', label: 'Courses'},
	{href: '/faqs', label: 'FAQs'},
	{href: '/staff', label: 'Our Team'},
	{href: '/donate', label: 'Donate'}

	// {href: 'https://canvas.instructure.com/courses/', label: 'Login'}
]

const focusLinks = [
	/* { href: '/#about', label: 'About' }, */

	{href: '/register/instructor', label: 'Join Our Team'},
	{href: '/register', label: 'Register'}

	// {href: 'https://canvas.instructure.com/courses/', label: 'Login'}
]

const NavLinks = (props) => {
	const links = props.links
	const linkList = links.map((link) => (
		<Link
			key={link.label}
			p={[0, 1]}
			mx={2}
			py="auto"
			variant="nav"
			href={link.href}
		>
			<Text
				fontWeight="normal"
				textAlign="center"
				my="auto"
				fontSize={[1, 2, 3]}
			>
				{link.label}
			</Text>
		</Link>
	))
	return <Flex p={[0, 3]}>{linkList}</Flex>
}

const header = ({header = false, waves = false}) => {
	return (
		<Box color="white">
			<Box bg="#123456" py={[2, 1, 0]}>
				<Flex
					mx="auto"
					width={1}
					mb={[2, 1, 0]}
					px={[1, 2, 3]}
					flexDirection={['column', 'row']}
				>
					<Flex
						width={[1, 1 / 4]}
						justifyContent={['center', 'flex-start']}
						alignItems="center"
						ml={[0, 1, 2, 3]}
						pl={[0, 1, 2, 3]}
					>
						<Logo height="2.3em" width="2.3em" />
						<Link
							fontSize={[2, 3, 4]}
							href="/"
							color="white"
							sx={{textDecoration: 'none'}}
						>
							<Heading>Beyond The Five</Heading>
						</Link>
					</Flex>

					<Flex
						my={[2, 1, 0]}
						width={[1, 1 / 2]}
						alignSelf="center"
						justifyContent="center"
					>
						<NavLinks links={links} />
					</Flex>

					<Flex
						width={[1, 1 / 4]}
						alignSelf="center"
						mr={[0, 1, 2, 3]}
						justifyContent={['center', 'flex-end']}
					>
						<NavLinks links={focusLinks} />
					</Flex>
				</Flex>

				<Box>
					{header ? (
						<Box mx="auto" px={[3, 4, 5]} width={1}>
							<Flex
								justifyContent="center"
								flexDirection={['column', 'row-reverse']}
							>
								<Box mx={[0, 3, 5]}>
									<Text fontSize={[3, 4, 5]} textAlign={['center', 'right']}>
										Free, online, self-paced courses
										<Text mt={[1, 2, 3]}>
											in AP®️, SAT/ACT, and college level classes
										</Text>
									</Text>
									<Flex
										my={3}
										flexDirection={['column', 'row']}
										justifyContent={['center', 'flex-end']}
									>
										<BrowseCoursesButton />
										<Box width={10} />
										<RegisterButton />
									</Flex>
									<Text
										mt={[2, 3, 4]}
										fontSize={[1, 2, 3]}
										textAlign={['center', 'right']}
									>
										Registration for the 2020-21 school year is now open!
									</Text>
								</Box>
								<Flex justifyContent="center">
									<Learn height="16em" width="18em" />
								</Flex>
							</Flex>
						</Box>
					) : null}
				</Box>
			</Box>

			{waves ? <Waves top /> : null}
		</Box>
	)
}

export default header
