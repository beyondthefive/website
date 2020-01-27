import React from 'react'
import { Flex, Box, Heading, Button, Text } from 'rebass'
import Link from 'next/link'
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
import Header from './header'
import Footer from './footer'
const layout = ({ children, header = false }) => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Flex
        sx={{
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <Header>
          {header ? (
            <Box>
              <Flex>
                <Box width={[1, 1 / 2]} px={2}>
                  <Text fontSize={[3, 4, 5]}>
                    We connect students studying for AP exams with instructors,
                    so you can get the resources you need.
                  </Text>
                  <Heading fontSize={[3, 4, 5]}>For free.</Heading>
                </Box>
                <Box width={[1, 1 / 2]} px={2}>
                  <Text fontSize={[3, 4, 5]}>We have</Text>
                  <Text fontSize={[3, 4, 5]}>- 16 AP Courses</Text>
                  <Text fontSize={[3, 4, 5]}>- Over 160 Students</Text>
                  <Text fontSize={[3, 4, 5]}>
                    - A <b>100% AP Test pass rate</b>
                  </Text>
                </Box>
              </Flex>

              <Flex pt={5} width={[1, 1 / 3]}>
                <Link href="/register">
                  <Button
                    mx="auto"
                    sx={{ borderRadius: 10, boxShadow: '0 0 5px skyblue' }}
                  >
                    <Text fontSize={[2, 3, 4]} p={1}>
                      Register now!
                    </Text>
                  </Button>
                </Link>
              </Flex>
            </Box>
          ) : null}
        </Header>

        <Flex
          sx={{
            flex: 1,
            flexDirection: ['column', 'row']
          }}
        >
          <Box
            sx={{
              flex: 1,
              minWidth: 0
            }}
          >
            {children}
          </Box>
          {/*
        <Box
          sx={{
            flexBasis: ["auto", 64],
            order: -1
          }}
        >
          Nav
        </Box>
        <Box
          sx={{
            flexBasis: ["auto", 64]
          }}
        >
          Ads
        </Box>*/}
        </Flex>
        <Footer />
      </Flex>
      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }
      `}</style>
    </ThemeProvider>
  </React.Fragment>
)

export default layout
