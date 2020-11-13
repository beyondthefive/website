import fetch from 'isomorphic-unfetch'

export default async () => {
	const out = await fetch('/.netlify/functions/courses')
	return out.json()
}
