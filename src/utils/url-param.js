// 去除空的 URL query string 
export const trimEmptyURLParams = (params) => {
  let keysForDel = [];
  params.forEach((value, key) => {
    if (!value) {
      keysForDel.push(key);
    }
  })
  keysForDel.forEach(key => {
    params.delete(key);
  })
  return params;
}