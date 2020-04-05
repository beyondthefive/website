import fetch from 'isomorphic-unfetch'

let get = async (category = 1) => {
  //1 for ap, 2 for college level, 3 for test prep and misc.
  let res = await fetch('/.netlify/functions/courses?category=' + category)
  return (await res.json()).results
}

export default get
