import React from 'react'
import Head from 'next/head'
import { Flex, Box } from 'rebass'
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
import Header from './header'
import Footer from './footer'
const layout = ({ children, header = false }) => (
  <React.Fragment>
     <Head>
         
          <link rel="icon" type="image/x-icon" href="../public/favicon.ico" />
        </Head>
    <ThemeProvider theme={theme}>
      <Flex
        sx={{
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <Header header={header}></Header>

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
