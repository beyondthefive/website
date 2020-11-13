import fetch from 'isomorphic-unfetch'

export default async () => {
	const res = await fetch('/.netlify/functions/faqs')
	return res.json()
}
