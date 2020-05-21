import React, {useState, useEffect} from 'react';
import {Box, Flex, Text, Button} from 'rebass';
import {FaArrowDown, FaArrowUp} from 'react-icons/fa';
import Layout from '../components/layout';
import LoadingIndicator from '../components/loadingIndicator';
import fetchData from '../lib/faqs';

export default () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const d = async () => {
			// SetAdministrativeData(await fetchData());
			setData(await fetchData());
		};

		d();
	}, []);

	return (
		<Layout>
			<Box width={[1, 4 / 5]} mx="auto" my={3} p={3}>
				<Text fontSize={[3, 4, 5]} mb={2}>
					Frequently Asked Questions
				</Text>
				<Box
					sx={{
						display: 'grid',
						gridGap: 1,
						gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)']
					}}
				>
					{data.length === 0 ? (
						<LoadingIndicator/>
					) : (
						data.map(i => <Card question={i.Question} answer={i.Answer}/>)
					)}
				</Box>
			</Box>
		</Layout>
	);
};

const Card = ({question, answer}) => {
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
					<Text color="darkred">{question}</Text>
					<Flex alignItems="center" justifyContent="space-between">
						<Button p={0} variant="blank" onClick={() => setOpen(!open)}>
							See Answer{' '}
							{open ? (
								<FaArrowUp size="0.75em"/>
							) : (
								<FaArrowDown size="0.75em"/>
							)}
						</Button>
					</Flex>
				</Text>

				{open ? (
					<Box sx={{borderTop: '1px solid grey'}} p={3}>
						<Text>{answer}</Text>
					</Box>
				) : null}
			</Text>
		</Box>
	);
};
