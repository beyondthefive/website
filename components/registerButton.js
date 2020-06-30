import {Button, Text, Link} from 'rebass';

export default () => {
	return (
		<Button
			bg="bt5red"
			m={1}
			p={2}
			py={0}
			sx={{borderRadius: 5, boxShadow: '-3px 3px 3px rgba(0, 0, 0, 0.25)'}}
		>
			<Link variant="nav" href="/register" width={1}>
				<Text
					sx={{fontFamily: 'IBM Plex Sans'}}
					color="white"
					fontWeight="normal"
					fontSize={[2, 3, 4]}
				>
					<b>Register</b>
				</Text>
			</Link>
		</Button>
	);
};
