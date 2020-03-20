import fetch from 'isomorphic-unfetch'

let get = async (hlCourses = false) => {
  //pass true and get hl courses
  let courses = 'AP'
  if (hlCourses) {
    courses = 'Higher-Level'
  }
  let res = await fetch(
    'https://api.sheetson.com/v1/sheets/' +
      courses +
      '?spreadsheetId=1XRGXQT-8_FwUrnQHj3-6fBC8KBSg-ajqCk0sdgfk36s&limit=100'
  )
  return (await res.json()).results
}

export default get
