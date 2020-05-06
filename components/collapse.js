import React, {useState} from 'react';
import {Collapse} from 'react-collapse';
import {FaPlus, FaMinus} from 'react-icons/fa';
import {Box, Flex, Text, Button, Link} from 'rebass';

export default ({children, title}) => {
	const [open, setOpen] = useState(false);
	return (
		<Box>
			<Button variant="blank" p={1} onClick={() => setOpen(!open)}>
				{' '}
				<Flex alignItems="center">
					{open ? (
						<Flex alignItems="center">
							<FaMinus color="darkgrey" size="0.6em"/>
						</Flex>
					) : (
						<Flex alignItems="center">
							<FaPlus color="darkred" size="0.6em"/>
						</Flex>
					)}
					<Text ml={1} fontSize={[1, 2, 3]}>
						{title}
					</Text>
				</Flex>
			</Button>

			<Box pl={[0, 1, 2]}>
				<Collapse isOpened={open}>
					<Box
						my={1}
						p={[1, 2]}
						bg="whitesmoke"
						sx={{
							border: '1px solid lightgrey',
							borderRadius: 3
						}}
					>
						{children}
					</Box>
				</Collapse>
			</Box>
		</Box>
	);
};
