const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const withFonts = require('next-fonts')
module.exports = withFonts(withCSS(withImages()))
