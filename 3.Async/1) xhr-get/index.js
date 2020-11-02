function xhrGet(url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url);
    xhr.setRequestHeader('content-type', 'application/json')
    
    xhr.onload = () => {
      if (this.status == 201 || this.status == 200) {
        resolve(this.responseText)
      }
      else {
        let err = this.responseText
        reject(err)
      }
    }
    
    xhr.send()
  })
}

window.xhrGet = xhrGet;

export default xhrGet;
