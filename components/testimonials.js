import React, {useState} from 'react'
import {Text, Box, Flex, Button} from 'rebass'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'

const data = [
	{
		name: 'Emini',
		quote:
      'My experience with Beyond The Five is unlike anything I had ever imagined it to be. I\'ve always wanted to speed by school and to learn online, but many of the online learning platforms available required just too much. I did not want to keep creating accounts, to watch lecture videos that ended up being worthless, and to have questions that I would never get the answers to. But when I found Beyond the Five, I knew it was for me. The organization provides exceptional learning courses, along with fun and understandable instructors and TA\'s. I am eternally grateful that I found Beyond the Five. If it had not been for this organization, I probably would have given up on online instructional learning.'
	},
	{
		name: 'David',
		quote:
      'I would like to thank Beyond the Five for everything that the organization has taught me. They transcend past the curricula tested on the AP Exam, and I feel that I am more than prepared to do well on the exams. The instructors have a deep understanding of the material tested on the exam, and they have done extraordinary things for the organization. I cannot thank the organization enough for everything they have taught me.'
	},
	{
		name: 'Trenton',
		quote:
      'Beyond the Five has not only transformed my knowledge on the subjects I signed up for, it completely reshaped how I envision my future. The team at Beyond the Five is composed of some of the kindest, smartest people I\'ll ever meet, and I know that they truly care about both the program and the students. Whenever I have trouble with school, would like to discuss my high school plans, or just want to talk to some friends, I love being able to consult with the people at Beyond the Five. Joining Beyond the Five has honestly turned me onto a much higher path in life, and I strongly recommend all ambitious, driven students join.'
	}
]

const Item = ({name, contents}) => (
	<Box
		bg="whitesmoke"
		sx={{borderRadius: 5, boxShadow: '0 0 1px grey'}}
		p={[2, 3, 4]}
	>
		<Text fontSize={[2, 3, 4]}>{contents}</Text>
		<Text fontSize={[2, 3, 4]} m={2} textAlign="right">
			- {name}
		</Text>
	</Box>
)

const Testimonials = () => {
	const [swiper, setSwiper] = useState(null)

	const goNext = () => {
		if (swiper !== null) {
			swiper.slideNext()
		}
	}

	const goPrevious = () => {
		if (swiper !== null) {
			swiper.slidePrev()
		}
	}

	return (
		<Box width={1} m={[1, 2]} p={[2, 4]}>
			<Text fontSize={[3, 4, 5]} mb={[2, 3, 4]} textAlign={['center', 'left']}>
				What our students have to say:
			</Text>
			<Flex>
				<Swiper
					{...{
						navigation: {
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev'
						},
						pagination: {
							el: '.swiper-pagination',
							clickable: true
						}
					}}
					getSwiper={setSwiper}
				>
					{data.map(t => (
						<Box key={t.name} px={5} py={1}>
							<Item name={t.name} contents={t.quote}/>
						</Box>
					))}
				</Swiper>
			</Flex>
		</Box>
	)
}

export default Testimonials
