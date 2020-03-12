import { Button, Text, Link } from 'rebass'

const button = () => (
  <Button
    m={4}
    bg="#1c7ed6"
    mx="auto"
    sx={{ borderRadius: 10, boxShadow: '0 0 5px skyblue' }}
  >
    <Link variant="nav" href="/register">
      <Text color="white" fontWeight="normal" fontSize={[3, 4, 5]}>
        <b>Register now!</b>
      </Text>
    </Link>
  </Button>
)

export default button
