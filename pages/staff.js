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
					{two.length === 0 ? <LoadingIndicator/> : two.map(i => <Card key={i.Name} name={i.Name} position={i.Position} location={i.Location} email={i.Email} desc={i.About}/>)}
				</Box>
			</Box>
		</Layout>
	);
};

const Card = ({name, email, position, location, desc}) => {
	const [open, setOpen] = useState(false);
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
					<Text color="darkred">
						<b> {name}</b>
					</Text>
					<Flex alignItems="center" justifyContent="space-between">
						<Text>{position}</Text>
						<Button py="auto" variant="blank" onClick={() => setOpen(!open)}>
							Learn more {open ? <FaArrowUp size="0.75em"/> : <FaArrowDown size="0.75em"/>}
						</Button>
					</Flex>
				</Text>

				{open ? (
					<Box sx={{borderTop: '1px solid grey'}} p={3}>
						<Text>
							{desc}
							{email ? <Text mt={2}>Contact: {email}</Text> : null}
							{location ? <Text>{location}</Text> : null}
						</Text>
					</Box>
				) : null}
			</Text>
		</Box>
	);
};
