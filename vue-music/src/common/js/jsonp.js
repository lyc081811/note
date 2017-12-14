import originJSONP from 'jsonp'
export default function jsonp(url, data, option) {
    url += (url.indexOf('?') < 0 ? '?' : '&') + parma(data)
    return new Promise((resolve, reject) => {
        originJSONP(url, option,(err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}

function param(data) {
    let url = ''
    for(let i in data) {
        let value = data[i] !== underfined ? data[i] : ''
        url += `${i}=${encodeURLComponent(value)}`
    }
    return url ? url.substring(1) : ''
}