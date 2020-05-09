import React, {useState} from 'react';
import {Flex, Box, Heading, Link, Text, Button} from 'rebass';
import RegisterButton from '../components/registerButton';
import Waves from './waves';
import {MdClose} from 'react-icons/md';
import Learn from '../public/svgs/undraw_researching_22gp.svg';
import Logo from '../public/logo.svg';

const links = [
	/* { href: '/#about', label: 'About' }, */
	{href: '/courses', label: 'Courses'},
	{href: '/staff', label: 'Our Team'},
	{href: '/register/instructor', label: 'Join The Team'},
	{href: '/register', label: 'Register'}

	// {href: 'https://canvas.instructure.com/courses/', label: 'Login'}
];

const NavLinks = props => {
	const links = props.links;
	const linkList = links.map(link => (
		<Link key={link.label} p={[0, 1]} mx={2} py="auto" variant="nav" href={link.href}>
			<Text fontWeight="normal" textAlign="center" my="auto" fontSize={[2, 3, 4]}>
				{link.label}
			</Text>
		</Link>
	));
	return <Flex p={[0, 3]}>{linkList}</Flex>;
};

const header = ({header = false, waves = false}) => {
	const [annoucementOpen, setOpen] = useState(true);
	return (
		<Box color="white">
			<Box bg="#561B25" pt={[2, 1, 0]}>
				<Flex mx="auto" width={[1, 4 / 5]} px={3} flexDirection={['column', 'row']}>
					<Flex width={[1, 1 / 3]}>
						<Flex justifyContent={['center', 'flex-start']} my="auto">
							<Logo height="6%" width="6%"/>
							<Heading fontSize={[3, 4, 5]} my="auto" mx={3} mb={[2, 1, 0]}>
								<Link href="/" color="white" sx={{textDecoration: 'none'}}>
									Beyond The Five
								</Link>
							</Heading>
						</Flex>
					</Flex>
					<Box width={[1, 2 / 3]} alignSelf="center">
						<Flex justifyContent={['center', 'flex-end']}>
							<NavLinks links={links}/>
						</Flex>
					</Box>
				</Flex>

				<Box bg="#561B25" color="white">
					{header ? (
						<Box mx="auto" px={[3, 4, 5]} width={1}>
							<Flex flexDirection={['column', 'row']}>
								<Box width={[1, 1 / 2]} ml={[0, 5]} p={1}>
									<Text fontSize={[4, 5, 6]} textAlign={['center', 'left']}>
										<b>Free</b>, online, self-paced courses in AP®️, SAT/ACT, and college level classes
									</Text>
									<Flex>
										<RegisterButton mx={['auto', 0]}/>
									</Flex>
								</Box>

								<Flex pt={2} justifyContent={['center']} width={[1, 1 / 2]}>
									<Learn height="80%" width="80%"/>
								</Flex>
							</Flex>
						</Box>
					) : null}
				</Box>
				{header && annoucementOpen ? (
					<Flex py={[3, 2, 1]} px={[3, 4, 5]}>
						<Flex mx="auto" sx={{borderRadius: 5, boxShadow: '0 0 3px black'}} py={2} px={2} width={[4 / 5, 3 / 4, 2 / 3]}>
							<Text mx="auto" fontSize={[1, 2, 3]}>
								Registration for the 2020-21 school year is now open!
							</Text>

							<Flex ml={2} p={1} alignItems="center">
								<MdClose size="1em" onClick={() => setOpen(false)}/>
							</Flex>
						</Flex>
					</Flex>
				) : null}
			</Box>

			{waves ? <Waves top/> : null}
		</Box>
	);
};

export default header;
