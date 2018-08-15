import qs from '../lib/qs'
// import MobileDetect from 'mobile-detect'
import detectBrowser from './detectBrowser'

/**
 *
 * @param {any} value
 * @param {string} typeString
 */
export function isType(value, typeString) {
  return typeString === Object.prototype.toString.call(value).replace(/^\[object\s|\]$/g, '')
}

export function currDate() {
  var d = new Date()
  var dt = d.getFullYear() +
    '-' +
    (d.getMonth() + 1) +
    '-' +
    d.getDate() +
    ' ' +
    d.getHours() +
    ':' +
    d.getMinutes() +
    ':' +
    d.getSeconds()
  return dt.replace(/([-:\s])(\d{1})(?!\d)/g, '$10$2')
}

/**
 * Format Time
 * @param {Date} date the date obj to be formatted
 */
export const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

/**
 * @param {number} n
 * @returns {string}
 */
export const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 *
 * @param {string} prop
 * @returns {string}
 */
export function search(prop) {
  return qs.parse(window.location.search)[prop]
}

// /**
//  * @export
//  * @param {string|number} needle
//  * @param {[]} arr
//  * @returns
//  */
// export function contains (needle, arr) {
//   for (let i in arr) {
//     if (arr[i].indexOf(needle) > 0) { return i }
//   }
//   return -1
// }

// https://blog.csdn.net/szs860806/article/details/70316556
/*
export function fromSystem() {
  let ua = navigator.userAgent
  let md = new MobileDetect(ua)
  let os = md.os()
  // let model = ''
  if (os == 'iOS') {
    os += md.version('iPhone')
    // model = md.mobile()
  } else if (os == 'AndroidOS') {
    os = 'Android'
    os += md.version('Android')
    // let sss = ua.split(';')
    // let i = contains('Build/', sss)
    // if (i > -1) {
    //   model = sss[i].substring(0, sss[i].indexOf('Build/'))
    // }
  }
  return os
}
*/

export function fromSystem() {
  let md = detectBrowser()
  return md.name + (md.fullVersion || md.version)
}

/* -----------------------------localStorage------------------------------------ */
/*
 * set localStorage
 */
export function setStorage(name, content) {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * get localStorage
 */
export function getStorage(name) {
  if (!name) return
  let content = window.localStorage.getItem(name)
  return JSON.parse(content)
}

/**
 * delete localStorage
 */
export function removeStorage(name) {
  if (!name) return
  window.localStorage.removeItem(name)
}
