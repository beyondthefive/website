import React, {Children} from 'react'
import Layout from '../../components/layout'
import {Box, Flex, Text} from 'rebass'
import Math from '../../public/svgs/paths/math.svg'
import Bio from '../../public/svgs/paths/bio.svg'
import CS from '../../public/svgs/paths/cs.svg'
import Eng from '../../public/svgs/paths/eng.svg'
import Physics from '../../public/svgs/paths/physics.svg'

const paths = [
	<Math width="100%" height="100%" />,
	<Bio width="100%" height="100%" />,
	<CS width="100%" height="100%" />,
	<Eng width="100%" height="100%" />,
	<Physics width="100%" height="100%" />
]

const Graphic = ({children}) => <Box m={1}>{children}</Box>

const courses = () => {
	return (
		<Layout>
			<Box width={[1, 4 / 5]} mx="auto" my={2} p={2}>
				<Text fontSize={[3, 4, 5]}>Course Paths</Text>
				<Box
					sx={{
						display: 'grid',
						gridGap: 1,
						gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)']
					}}
				>
					{paths.map((c) => (
						<Graphic key={c}>{c}</Graphic>
					))}
				</Box>
			</Box>
		</Layout>
	)
}

export default courses
