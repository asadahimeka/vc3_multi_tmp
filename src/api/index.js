import http from './http'

/**
 * @export
 * @param {string} op
 * @param {{}} paras
 * @returns
 */
export function _req(op, paras) {
  return http.get('/service', {
    params: {
      op,
      ...paras
    }
  })
}
