import React, {useState, useEffect} from 'react'
import {Box, Flex, Text, Button} from 'rebass'
import {Input, Label} from '@rebass/forms'
import {FaChevronDown, FaChevronUp} from 'react-icons/fa'
import Layout from '../components/layout'
import LoadingIndicator from '../components/loadingIndicator'
import fetchData from '../lib/faqs'

const newsletter = () => {
	return (
		<Layout>
			<Box width={1} bg="bt5blue" p={[1, 2]}>
				<Text color="white" fontSize={[3, 4, 5]} mb={2} textAlign="center">
					Beyond The Five Newsletter
				</Text>
			</Box>
			<Flex
				align="center"
				justifyContent="center"
				flexDirection={['column', 'row']}
				width={[1, 4 / 5]}
				mx="auto"
				my={2}
				p={3}
			>
				<Box width={[1, 2 / 3]} m={[1, 2, 3]} p={[1, 2, 3]}>
					<Text fontSize={[2, 3, 4]}>
						<Text>
							Interested in learning about different resources and opportunities
							you can take advantage of?
						</Text>
						<Text>
							Want to gain access to exclusive articles that aim to help you
							succeed in your academic journey?
						</Text>
						<Box height={[7, 8, 9]} />
						<b>Sign up for the Beyond The Five monthly newsletter!</b>
						<Text>In our newsletter, you will find</Text>
						<Text>
							+ resources and opportunities hand-picked for our students
						</Text>
						<Text>+ exclusive BT5 blogs</Text>
						<Text>+ a look inside what's happening in education</Text>
						<Text>+ Beyond The Five internal updates</Text>
						... and so much more!
					</Text>
				</Box>
				<Box width={[1, 1 / 3]} m={[1, 2, 3]} p={[1, 2, 3]}>
					<script src="https://www.google.com/recaptcha/api.js"></script>
					<form
						action="https://postal.hackclub.com/subscribe"
						method="POST"
						accept-charset="utf-8"
					>
						<Label for="name">Name</Label>

						<Input type="text" name="name" id="name" />

						<Label for="email">Email</Label>

						<Input type="email" name="email" id="email" />

						<p
							className="g-recaptcha"
							data-sitekey="6Lf-kNEZAAAAAKFZenXrP7hCnv2dlg_NJBmV0SKy"
						></p>
						<div style={{display: 'none'}}>
							<Label for="hp">HP</Label>
							<Input type="text" name="hp" id="hp" />
						</div>
						<Input
							type="hidden"
							name="list"
							value="GBm892R9kHm5763vj3gDE8924xuA"
						/>
						<Input type="hidden" name="subform" value="yes" />
						<Button type="submit" name="submit" id="submit" bg="bt5blue">
							<Text fontSize={[1, 2]}>Sign Up!</Text>
						</Button>
					</form>
				</Box>
			</Flex>
		</Layout>
	)
}

export default newsletter
