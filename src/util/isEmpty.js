// Built by eustia.
(function(root, factory) {
  if (typeof define === 'function' && define.amd) { // eslint-disable-line no-undef
    define([], factory) // eslint-disable-line no-undef
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory()
  } else { root._ = factory() }
}(this, function () {
  var _ = {}

  /* ------------------------------ has ------------------------------ */

  var has = _.has = (function () {
    /* Checks if key is a direct property.
       *
       * |Name  |Type   |Desc                            |
       * |------|-------|--------------------------------|
       * |obj   |object |Object to query                 |
       * |key   |string |Path to check                   |
       * |return|boolean|True if key is a direct property|
       *
       * ```javascript
       * has({one: 1}, 'one'); // -> true
       * ```
       */

    /* module
       * env: all
       * test: all
       */

    var hasOwnProp = Object.prototype.hasOwnProperty

    function exports(obj, key) {
      return hasOwnProp.call(obj, key)
    }

    return exports
  })()

  /* ------------------------------ objToStr ------------------------------ */

  var objToStr = _.objToStr = (function () {
    /* Alias of Object.prototype.toString.
       *
       * |Name  |Type  |Desc                                |
       * |------|------|------------------------------------|
       * |value |*     |Source value                        |
       * |return|string|String representation of given value|
       *
       * ```javascript
       * objToStr(5); // -> '[object Number]'
       * ```
       */

    /* module
       * env: all
       * test: all
       */

    var ObjToStr = Object.prototype.toString

    function exports(val) {
      return ObjToStr.call(val)
    }

    return exports
  })()

  /* ------------------------------ isArgs ------------------------------ */

  var isArgs = _.isArgs = (function () {
    /* Check if value is classified as an arguments object.
       *
       * |Name  |Type   |Desc                                |
       * |------|-------|------------------------------------|
       * |val   |*      |Value to check                      |
       * |return|boolean|True if value is an arguments object|
       *
       * ```javascript
       * (function () {
       *     isArgs(arguments); // -> true
       * })();
       * ```
       */

    /* module
       * env: all
       * test: all
       */

    /* dependencies
       * objToStr
       */

    function exports(val) {
      return objToStr(val) === '[object Arguments]'
    }

    return exports
  })()

  /* ------------------------------ isArr ------------------------------ */

  var isArr = _.isArr = (function (exports) {
    /* Check if value is an `Array` object.
       *
       * |Name  |Type   |Desc                              |
       * |------|-------|----------------------------------|
       * |val   |*      |Value to check                    |
       * |return|boolean|True if value is an `Array` object|
       *
       * ```javascript
       * isArr([]); // -> true
       * isArr({}); // -> false
       * ```
       */

    /* module
       * env: all
       * test: all
       */

    /* dependencies
       * objToStr
       */

    exports =
          Array.isArray ||
          function(val) {
            return objToStr(val) === '[object Array]'
          }

    return exports
  })({})

  /* ------------------------------ isNum ------------------------------ */

  var isNum = _.isNum = (function () {
    /* Check if value is classified as a Number primitive or object.
       *
       * |Name  |Type   |Desc                                 |
       * |------|-------|-------------------------------------|
       * |val   |*      |Value to check                       |
       * |return|boolean|True if value is correctly classified|
       *
       * ```javascript
       * isNum(5); // -> true
       * isNum(5.1); // -> true
       * isNum({}); // -> false
       * ```
       */

    /* module
       * env: all
       * test: all
       */

    /* dependencies
       * objToStr
       */

    function exports(val) {
      return objToStr(val) === '[object Number]'
    }

    return exports
  })()

  /* ------------------------------ isFn ------------------------------ */

  var isFn = _.isFn = (function () {
    /* Check if value is a function.
       *
       * |Name  |Type   |Desc                       |
       * |------|-------|---------------------------|
       * |val   |*      |Value to check             |
       * |return|boolean|True if value is a function|
       *
       * Generator function is also classified as true.
       *
       * ```javascript
       * isFn(function() {}); // -> true
       * isFn(function*() {}); // -> true
       * ```
       */

    /* module
       * env: all
       * test: all
       */

    /* dependencies
       * objToStr
       */

    function exports(val) {
      var objStr = objToStr(val)

      return (
        objStr === '[object Function]' ||
              objStr === '[object GeneratorFunction]'
      )
    }

    return exports
  })()

  /* ------------------------------ isArrLike ------------------------------ */

  var isArrLike = _.isArrLike = (function () {
    /* Check if value is array-like.
       *
       * |Name  |Type   |Desc                       |
       * |------|-------|---------------------------|
       * |val   |*      |Value to check             |
       * |return|boolean|True if value is array like|
       *
       * > Function returns false.
       *
       * ```javascript
       * isArrLike('test'); // -> true
       * isArrLike(document.body.children); // -> true;
       * isArrLike([1, 2, 3]); // -> true
       * ```
       */

    /* module
       * env: all
       * test: all
       */

    /* dependencies
       * isNum isFn
       */

    var MAX_ARR_IDX = Math.pow(2, 53) - 1

    function exports(val) {
      if (!val) return false

      var len = val.length

      return isNum(len) && len >= 0 && len <= MAX_ARR_IDX && !isFn(val)
    }

    return exports
  })()

  /* ------------------------------ isBrowser ------------------------------ */

  var isBrowser = _.isBrowser = (function (exports) {
    /* Check if running in a browser.
       *
       * ```javascript
       * console.log(isBrowser); // -> true if running in a browser
       * ```
       */

    /* module
       * env: all
       * test: all
       */

    exports =
          typeof window === 'object' &&
          typeof document === 'object' &&
          document.nodeType === 9

    return exports
  })({})

  /* ------------------------------ root ------------------------------ */

  var root = _.root = (function (exports) {
    /* Root object reference, `global` in nodeJs, `window` in browser. */

    /* module
       * env: all
       * test: all
       */

    /* dependencies
       * isBrowser
       */

    exports = isBrowser ? window : global

    return exports
  })({})

  /* ------------------------------ detectMocha ------------------------------ */

  var detectMocha = _.detectMocha = (function () {
    /* Detect if mocha is running.
       *
       * ```javascript
       * detectMocha(); // -> True if mocha is running.
       * ```
       */

    /* module
       * env: all
       * test: all
       */

    /* dependencies
       * root
       */

    function exports() {
      for (var i = 0, len = methods.length; i < len; i++) {
        var method = methods[i]

        if (typeof root[method] !== 'function') return false
      }

      return true
    }

    var methods = ['afterEach', 'after', 'beforeEach', 'before', 'describe', 'it']

    return exports
  })()

  /* ------------------------------ isStr ------------------------------ */

  var isStr = _.isStr = (function () {
    /* Check if value is a string primitive.
       *
       * |Name  |Type   |Desc                               |
       * |------|-------|-----------------------------------|
       * |val   |*      |Value to check                     |
       * |return|boolean|True if value is a string primitive|
       *
       * ```javascript
       * isStr('licia'); // -> true
       * ```
       */

    /* module
       * env: all
       * test: all
       */

    /* dependencies
       * objToStr
       */

    function exports(val) {
      return objToStr(val) === '[object String]'
    }

    return exports
  })()

  /* ------------------------------ keys ------------------------------ */

  var keys = _.keys = (function (exports) {
    /* Create an array of the own enumerable property names of object.
       *
       * |Name  |Type  |Desc                   |
       * |------|------|-----------------------|
       * |obj   |object|Object to query        |
       * |return|array |Array of property names|
       *
       * ```javascript
       * keys({a: 1}); // -> ['a']
       * ```
       */

    /* module
       * env: all
       * test: all
       */

    /* dependencies
       * has detectMocha
       */

    if (Object.keys && !detectMocha()) {
      exports = Object.keys
    } else {
      exports = function(obj) {
        var ret = []
        var key

        for (key in obj) {
          if (has(obj, key)) ret.push(key)
        }

        return ret
      }
    }

    return exports
  })({})

  /* ------------------------------ isEmpty ------------------------------ */

  _.isEmpty = (function () {
    /* Check if value is an empty object or array.
       *
       * |Name  |Type   |Desc                  |
       * |------|-------|----------------------|
       * |val   |*      |Value to check        |
       * |return|boolean|True if value is empty|
       *
       * ```javascript
       * isEmpty([]); // -> true
       * isEmpty({}); // -> true
       * isEmpty(''); // -> true
       * ```
       */

    /* module
       * env: all
       * test: all
       */

    /* dependencies
       * isArrLike isArr isStr isArgs keys
       */

    function exports(val) {
      if (val == null) return true

      if (isArrLike(val) && (isArr(val) || isStr(val) || isArgs(val))) {
        return val.length === 0
      }

      return keys(val).length === 0
    }

    return exports
  })()

  return _
}))
