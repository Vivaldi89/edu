function searchString(obj) {
  let obj_len = Object.keys(obj).length
  if (obj_len === 0) {
    return ""
  } else {
    let query = ""
    for (let i = 0; i < obj_len; i++) {
      let name = Object.keys(obj)[i]
      let last = obj_len - 1
      let str_objname = String(obj[name])
      switch (i) {
        case 0:
          if (obj[name]||str_objname==='0') query = query+'?'+String(name)+'='+str_objname
          break;
        case last:
          if (obj[name]||str_objname==='0') query = query+'&'+String(name)+'='+str_objname
          break;
        default:
          if (obj[name]||str_objname==='0') query = query+'&'+String(name)+'='+str_objname
          break;
      }
    };
    return query
  }
}

window.searchString = searchString;

export default searchString;
