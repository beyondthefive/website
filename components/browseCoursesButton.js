import {Button, Text, Link} from 'rebass';

export default () => {
	return (
		<Button
			bg="whitesmoke"
			m={1}
			p={2}
			py={0}
			sx={{borderRadius: 5}}
		>
			<Link variant="nav" href="/courses">
				<Text sx={{fontFamily: 'IBM Plex Sans'}} color="bt5blue" fontWeight="normal" fontSize={[2, 3, 4]}>
					Browse Courses
				</Text>
			</Link>
		</Button>
	);
};
