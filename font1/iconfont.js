;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-wode" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M955.923532 922.936233c1.231037 4.084015 2.091638 8.329712 2.091638 12.81691 0 24.64019-19.951401 44.602847-44.570101 44.602847-24.615631 0-44.567032-19.962657-44.567032-44.602847 0-0.049119 0.013303-0.094144 0.013303-0.143263l-1.166569 0c-11.606339-186.693006-166.216649-334.626243-355.781052-334.626243-189.568497 0-344.178807 147.933237-355.785146 334.626243l-1.055029 0c0.002047 0.049119 0.01535 0.094144 0.01535 0.143263 0 24.64019-19.952424 44.602847-44.570101 44.602847-24.615631 0-44.567032-19.962657-44.567032-44.602847 0-4.226255 0.775666-8.234545 1.873674-12.110829C80.799234 754.241137 187.807387 611.205443 337.194742 547.482119c-69.481468-50.685379-114.818025-132.506896-114.818025-225.116107 0-153.925718 124.738979-278.723026 278.622742-278.723026 153.874553 0 278.620695 124.796284 278.620695 278.723026 0 89.328491-42.174542 168.638815-107.507526 219.645512C828.733735 602.420359 942.290023 748.498342 955.923532 922.936233zM690.305989 322.366012c0-104.572684-84.903715-189.338253-189.632965-189.338253-104.737436 0-189.637058 84.765569-189.637058 189.338253 0 104.563474 84.899622 189.336206 189.637058 189.336206C605.402273 511.702218 690.305989 426.929486 690.305989 322.366012z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-fangdajing" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M938.702823 949.442934c-12.637832 12.472056-33.090653 12.472056-45.708018 0L686.589852 745.571686c17.168008-13.011338 33.340339-27.187199 48.263214-42.611493L938.702823 904.294664C951.320189 916.765697 951.320189 936.990321 938.702823 949.442934zM431.377286 767.604492c-196.365296 0-355.544669-157.267836-355.544669-351.200734 0-193.974853 159.180396-351.200734 355.544669-351.200734 196.34483 0 355.526249 157.225881 355.526249 351.200734C786.902512 610.337679 627.722116 767.604492 431.377286 767.604492zM431.377286 129.057331c-160.653957 0-290.899346 128.624473-290.899346 287.346427 0 158.681022 130.24539 287.34745 290.899346 287.34745 160.657027 0 290.880927-128.665405 290.880927-287.34745C722.258213 257.681804 592.034313 129.057331 431.377286 129.057331z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
