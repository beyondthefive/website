import React from 'react'
import { UnmountClosed } from 'react-collapse'
import { Box, Button, Text, Flex } from 'rebass'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
let Icon = ({ opened }) => {
  if (opened) {
    return <FaCaretUp />
  }
  return <FaCaretDown />
}

const CourseTitleBox = ({ children, size = [1 / 2], paddingRight = 1 }) => (
  <Box width={size} bg="whitesmoke" pr={paddingRight}>
    <Box width={300} bg="white" height="100%" p={2}>
      {children}
    </Box>
  </Box>
)
class CourseBlock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { opened: false }
  }

  render() {
    let bottomBorder = '0px'
    if (this.props.last) {
      bottomBorder = '1px black solid'
    }
    return (
      <Box>
        <Flex>
          <Flex
            sx={{ border: '1px black solid', borderBottom: bottomBorder }}
            width={1 / 2}
            p={1}
          >
            <Box>
              <Flex>
                <Text my="auto" fontSize={[1, 2, 3]}>
                  {this.props.name}
                </Text>
                {this.props.notes != null ? (
                  <Flex>
                    <Button
                      bg="transparent"
                      color="black"
                      onClick={() =>
                        this.setState({ opened: !this.state.opened })
                      }
                    >
                      <Icon opened={this.state.opened} />
                    </Button>
                  </Flex>
                ) : null}
              </Flex>
              {this.props.notes != null ? (
                <Flex>
                  <UnmountClosed isOpened={this.state.opened}>
                    <Box>
                      <Text px={3} py={1} fontSize={[1, 2]}>
                        {this.props.notes}
                      </Text>
                    </Box>
                  </UnmountClosed>
                </Flex>
              ) : null}
            </Box>
          </Flex>
          <Flex
            width={1 / 20}
            justifyContent="space-between"
            sx={{
              borderTop: '1px black solid',
              borderRight: '1px black solid',
              borderBottom: bottomBorder
            }}
          >
            <Text m="auto" fontSize={[1, 2, 3]}>
              {this.props.credits}
            </Text>
          </Flex>
          <Flex
            pl={2}
            width={9 / 20}
            justifyContent="space-between"
            sx={{
              borderTop: '1px black solid',
              borderRight: '1px black solid',
              borderBottom: bottomBorder
            }}
          >
            <Text my="auto" fontSize={[1, 2, 3]}>
              {this.props.prerequisites}
            </Text>
          </Flex>
        </Flex>
      </Box>
    )
  }
}

export default CourseBlock
