/* Detect browser info using ua.
 * https://github.com/liriliri/licia/blob/master/d/detectBrowser.js
 *
 * |Name                    |Type  |Desc                              |
 * |------------------------|------|----------------------------------|
 * |[ua=navigator.userAgent]|string|Browser userAgent                 |
 * |return                  |object|Object containing name and version|
 *
 * Browsers supported: ie, chrome, edge, firefox, opera, safari, ios(mobile safari), android(android browser)
 *
 * ```javascript
 * var browser = detectBrowser();
 * if (browser.name === 'ie' && browser.version < 9)
 * {
 *     // Do something about old IE...
 * }
 * ```
 */

var isBrowser = typeof window === 'object' && typeof document === 'object' && document.nodeType === 9

var keys = Object.keys || function(obj) {
  var ret = []
  var key
  for (key in obj) {
    if (has(obj, key)) ret.push(key)
  }
  return ret
}

function has(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

function toInt(val) {
  if (!val) return val === 0 ? val : 0
  val = toNum(val)
  return val - (val % 1)
}

function toNum(val) {
  if (isNum(val)) return val
  if (isObj(val)) {
    var temp = isFn(val.valueOf) ? val.valueOf() : val
    val = isObj(temp) ? temp + '' : temp
  }
  if (!isStr(val)) return val === 0 ? val : +val
  return +val
}

function isNum(val) {
  return objToStr(val) === '[object Number]'
}

function objToStr(val) {
  return Object.prototype.toString.call(val)
}

function isObj(val) {
  var type = typeof val
  return !!val && (type === 'function' || type === 'object')
}

function isFn(val) {
  var objStr = objToStr(val)
  return (
    objStr === '[object Function]' ||
      objStr === '[object GeneratorFunction]'
  )
}

function isStr(val) {
  return objToStr(val) === '[object String]'
}

var regBrowsers = {
  edge: /edge\/([0-9._]+)/,
  firefox: /firefox\/([0-9.]+)(?:\s|$)/,
  opera: /opera\/([0-9.]+)(?:\s|$)/,
  android: /android\s([0-9.]+)/,
  ios: /version\/([0-9._]+).*mobile.*safari.*/,
  safari: /version\/([0-9._]+).*safari/,
  chrome: /(?!chrom.*opr)chrom(?:e|ium)\/([0-9.]+)(:?\s|$)/
}

var regIe11 = /trident\/7\./
var browsers = keys(regBrowsers)

function getVer(ua, mark) {
  var idx = ua.indexOf(mark)
  if (idx > -1) { return toInt(ua.substring(idx + mark.length, ua.indexOf('.', idx))) }
}

function detectBrowser(ua) {
  ua = ua || (isBrowser ? navigator.userAgent : '')
  ua = ua.toLowerCase()
  var ieVer = getVer(ua, 'msie ')
  if (ieVer) {
    return {
      version: ieVer,
      name: 'ie'
    }
  }
  if (regIe11.test(ua)) {
    return {
      version: 11,
      name: 'ie'
    }
  }
  for (var i = 0, len = browsers.length; i < len; i++) {
    var name = browsers[i]
    var match = ua.match(regBrowsers[name])
    if (match == null) continue
    var version = toInt(match[1].split('.')[0])
    var fversion = match[1]
    if (name === 'opera') version = getVer(ua, 'version/') || version
    return {
      name: name,
      version: version,
      fullVersion: fversion
    }
  }
  return {
    name: 'unknown',
    version: -1
  }
}

export default detectBrowser
