import fetch from 'isomorphic-unfetch'

let get = async (category = 1) => {
  //pass true and get hl courses
  let courses = 'AP'
  if (category==2) {
    courses = 'College-Level'
  } else if(category==3){
    courses = 'TestPrep&misc'
  }
  let res = await fetch(
    'https://api.sheetson.com/v1/sheets/' +
      courses +
      '?spreadsheetId=1XRGXQT-8_FwUrnQHj3-6fBC8KBSg-ajqCk0sdgfk36s&limit=100'
  )
  return (await res.json()).results
}

export default get
