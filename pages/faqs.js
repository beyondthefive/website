import React, {useState, useEffect} from 'react'
import {Box, Flex, Text, Button} from 'rebass'
import {Input} from '@rebass/forms'
import {FaChevronDown, FaChevronUp} from 'react-icons/fa.js'
import Layout from '../components/layout.js'
import LoadingIndicator from '../components/loadingIndicator.js'
import fetchData from '../lib/faqs.js'

export default () => {
	const [data, setData] = useState([])
	const [query, setQuery] = useState('')
	useEffect(() => {
		const d = async () => {
			// SetAdministrativeData(await fetchData());
			setData(await fetchData())
		}

		d()
	}, [])

	const updateFilter = (e) => {
		setQuery(e.target.value)
	}

	const searchFilter = (i) => {
		if (
			i.Question.toLowerCase().includes(query.toLowerCase()) ||
			i.Answer.toLowerCase().includes(query.toLowerCase())
		) {
			return i
		}
	}

	return (
		<Layout>
			<Box width={1} bg="bt5blue" p={[1, 2]}>
				<Text color="white" fontSize={[3, 4, 5]} mb={2} textAlign="center">
					Frequently Asked Questions
				</Text>
			</Box>
			<Box width={[1, 4 / 5]} mx="auto" my={2} p={3}>
				<Flex
					justifyContent="center"
					flexDirection={['column', 'row']}
					mb={[3, 2]}
				>
					<Box width={[1, 1 / 2, 3 / 4]}>
						<Input
							placeholder="Search"
							value={query}
							onChange={(e) => updateFilter(e)}
						/>
					</Box>
				</Flex>
				<Box
					sx={{
						display: 'grid',
						gridGap: 1,
						gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)']
					}}
				>
					{data.length === 0 ? (
						<LoadingIndicator />
					) : (
						data
							.filter((i) => searchFilter(i))
							.map((i) => <Card question={i.Question} answer={i.Answer} />)
					)}
				</Box>
				<Text textAlign="right">
					Displaying {data.filter((i) => searchFilter(i)).length} of{' '}
					{data.length} FAQs
				</Text>
				<Text mt={3} fontSize={[2, 3, 4]} textAlign="center">
					Still have questions? Shoot an email to{' '}
					<a href="mailto:team@beyondthefive.org">team@beyondthefive.org</a>
				</Text>
			</Box>
		</Layout>
	)
}

const Card = ({question, answer}) => {
	const [open, setOpen] = useState(false)
	return (
		<Box
			m={1}
			py={2}
			bg="whitesmoke"
			sx={{
				border: '1px solid grey',
				borderRadius: 5
			}}
			fontSize={[1, 2, 3]}
			onClick={() => setOpen(!open)}
		>
			<Button
				sx={{fontFamily: 'IBM Plex Sans'}}
				p={0}
				width={1}
				variant="blank"
			>
				<Flex mb={2} mx={2} justifyContent="space-between" color="bt5blue">
					<Text textAlign="left">{question}</Text>

					{open ? <FaChevronUp size="1.2em" /> : <FaChevronDown size="1.2em" />}
				</Flex>
			</Button>
			{open ? (
				<Box sx={{borderTop: '1px solid grey'}} p={3}>
					<Text textAlign="left">{answer}</Text>
				</Box>
			) : null}
		</Box>
	)
}
