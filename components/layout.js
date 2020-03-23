import React from 'react'
import { Flex, Box } from 'rebass'
import Header from './header'
import Footer from './footer'
import css from 'styled-jsx/css'
import IBMPlexSans from '../public/fonts/IBMPlexSans-Regular.ttf'

const globalStyle = css.global`
  @font-face {
    font-family: "IBM Plex Sans";
    src: url(${IBMPlexSans}) format("truetype");
    font-weight: 400;
    font-display: fallback;
  }
  :global(body) {
    font-family: "IBM Plex Sans", "Helvetica Neue", Arial, sans-serif;
    margin: 0;
  }
`

const layout = ({
  children,
  header = false,
  waves = false,
  instructorAd = true
}) => {
  return (
    <React.Fragment>
      <Flex
        sx={{
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <Header waves={waves} header={header}></Header>

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
            bg="#ffffff"
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
        <Footer instructorAd={instructorAd} waves={waves} />
      </Flex>
      <style jsx global>
        {globalStyle}
      </style>
    </React.Fragment>
  )
}

export default layout
