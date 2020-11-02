function isEqual(a, b) {
  let key_a
  let key_b
  try {
    key_a = Object.keys(a)[0]
    key_b = Object.keys(b)[0]
  } catch {
    key_a = String(a)
    key_b = String(b)
  }
  if (JSON.stringify(key_a) !== JSON.stringify(key_b)) return false
  else if (String(a[key_a]) !== 'undefined' && String(b[key_b]) !== 'undefined') {
    return JSON.stringify(a) === JSON.stringify(b)
  }
  return JSON.stringify(a) === JSON.stringify(b)
}

window.isEqual = isEqual;

export default isEqual;
