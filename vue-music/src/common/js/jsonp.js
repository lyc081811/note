import originJsonp from 'jsonp'
export default function jsonp (url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}
function param (data) {
  let url = ''
  for (let i in data) {
    let value = data[i] !== undefined ? data[i] : ''
    url += '&' + i + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}
export function getList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg';
}
