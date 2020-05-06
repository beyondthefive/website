const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/
});
module.exports = withFonts(
	withCSS(
		withImages(
			withMDX({
				pageExtensions: ['js', 'jsx', 'md', 'mdx']
			})
		)
	)
);
