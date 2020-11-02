function xhrGet(url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url);
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.responseType = 'json'
    xhr.onload = () => {
      if (xhr.status == 201 || xhr.status == 200) {
        resolve(xhr.response)
      }
      else {
        let err = xhr.response
        reject(err)
      }
    }
    
    xhr.send()
  })
}

window.xhrGet = xhrGet;

export default xhrGet;
