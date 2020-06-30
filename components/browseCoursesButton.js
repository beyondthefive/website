import {Button, Text, Link} from 'rebass';

export default ({
	color = 'bt5blue',
	bg = 'whitesmoke',
	fontSize = [2, 3, 4],
	my = 0,
	bold = false
}) => {
	return (
		<Button
			bg={bg}
			my={my}
			m={1}
			px={2}
			py={0}
			sx={{borderRadius: 5, boxShadow: '-3px 3px 3px rgba(0, 0, 0, 0.25)'}}
		>
			<Link href="/courses" variant="nav" width={1}>
				<Text
					sx={{fontFamily: 'IBM Plex Sans'}}
					color={color}
					fontWeight={bold ? 'bold' : 'normal'}
					fontSize={fontSize}
				>
					Browse Courses
				</Text>
			</Link>
		</Button>
	);
};
