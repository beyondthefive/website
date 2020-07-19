import React from 'react';
import {Text, Box, Flex, Button} from 'rebass';

const data = [
	{
		name: 'Salah',
		quote:
      'Beyond The Five is not only one of the best programs for students who are hoping to expand their vast knowledge, but it also offers an inclusive community for students. I love reaching out and having conversations with students from all around the world who are all eager to learn and challenge themselves to their limits.'
	},
	{
		name: 'Paris',
		quote:
      'Beyond The Five is a wonderful group of people. The fact that they’re providing free education to further one\'s knowledge and ability to pass the class and especially exams is amazing. My favorite part about Beyond The Five is the wide selection of classes they offer. The instructors at Beyond the Five are super nice as well and are available whenever you have questions. I am glad to be a part of such a wonderful community!'
	},
	{
		name: 'Adam',
		quote:
      'As someone who was completely unfamiliar with Beyond the Five before being suddenly thrust into the server, BT5\'s community was ridiculously welcoming and easy to talk with. From reading out Andy\'s messages in a falsetto voice to doing an impression of Dr. Seuss\' Cat in the Hat, I\'ve had a ridiculous amount of fun and I am looking forward to pushing myself to academic success with the BT5 team by my side.'
	},
	{
		name: 'Helen',
		quote:
      'BT5 is a wonderful community because they offer a wide varieties of classes, from AP to IGCSE prep. My favorite part about BT5 is that you\'re not the only one who is taking these classes. There will be other students for you to interact with, whether it\'s asking questions about the class or just having fun in general. The instructors are online and ready to support you if you are confused about something.'
	}
];

const Testimonials = () => {
	return (
		<Box
			width={1}
			whiteSpace="nowrap"
			sx={{overflowX: 'auto'}}
			p={[1, 2, 3]}
			sx={{
				display: 'grid',
				gridGap: 1,
				gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)']
			}}
		>
			{data.map(t => (
				<Flex
					key={t.name}
					flexDirection="column"
					justifyContent="space-between"
					bg="white"
					px={4}
					sx={{
						borderRadius: 5,
						boxShadow: '-1px 1px 1px rgba(0, 0, 0, 0.25)'
					}}
					p={[2, 3]}
					m={[1, 2]}
					fontSize={[1, 2, 3]}
				>
					<Text>"{t.quote}"</Text>
					<Text textAlign="right">- {t.name}</Text>
				</Flex>
			))}
		</Box>
	);
};

export default Testimonials;
