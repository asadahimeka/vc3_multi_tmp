import http from './http'

/**
 * @export
 * @param {string} op
 * @param {{}} paras
 * @returns
 */
export function _get(op, paras) {
  return http.get('/service/ServiceHandler.ashx', {
    params: {
      op,
      ...paras
    }
  })
}

/**
 *
 * @param {string} scode
 */
export function getGoodsShelves(scode) {
  return _get('WH_Huojia', { scode })
}

/**
 *
 * @param {string} scode
 */
export function getGoodsAllocation(scode) {
  return _get('WH_Huowei', { scode })
}
