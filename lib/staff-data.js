import fetch from 'isomorphic-unfetch'

export default async (type = 'administrative') => {
	const out = await fetch('/.netlify/functions/staff-' + type)
	return out.json()
}
