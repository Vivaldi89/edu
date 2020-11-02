function xhrGet(url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url);
    xhr.setRequestHeader('content-type', 'application/json')
    
    xhr.onload = () => {
      if (xhr.status == 201 || xhr.status == 200) {
        resolve(xhr.responseText)
      }
      else {
        let err = xhr.responseText
        reject(err)
      }
    }
    
    xhr.send()
  })
}

window.xhrGet = xhrGet;

export default xhrGet;
