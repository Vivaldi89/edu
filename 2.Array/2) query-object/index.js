function queryToObject(query) {
  if (query === '' || query === '?') return {}
  if (query.indexOf('=') === -1) throw new Error("Can't be converted") 
  let get_query = {}
  query = query.slice(1)
  let x = query.split('&')
  for (let i = 0; i < x.length; i++) {
    let arr = x[i].split('=')
    let prop = arr[0]
    let definition = Number(arr[1]) ? Number(arr[1]) : String(arr[1])
    definition = definition === 'true' ? true : definition
    definition = definition === 'false' ? false : definition
    definition = definition === '0' ? 0 : definition
    get_query[prop] = definition
    
  }
  return get_query
};

window.queryToObject = queryToObject;

export default queryToObject;

console.log(queryToObject('?test=123'));