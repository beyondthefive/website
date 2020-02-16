import Link from 'next/link'
import { Button, Text } from 'rebass'

const button = () => (
  <Link href="/register">
    <Button
      m={4}
      bg="#1c7ed6"
      mx="auto"
      sx={{ borderRadius: 10, boxShadow: '0 0 5px skyblue' }}
    >
      <Text fontWeight="normal" fontSize={[2, 3, 4]} mx={2} my={1}>
        Register now!
      </Text>
    </Button>
  </Link>
)

export default button
