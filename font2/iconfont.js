;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-gengduo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.998465 243.074108c49.504484 0 89.64367-40.137139 89.64367-89.641623s-40.139186-89.641623-89.64367-89.641623c-49.502437 0-89.6406 40.137139-89.6406 89.641623S462.495004 243.074108 511.998465 243.074108zM511.998465 422.358377c-49.502437 0-89.6406 40.138162-89.6406 89.642646s40.138162 89.641623 89.6406 89.641623c49.504484 0 89.64367-40.137139 89.64367-89.641623S561.502949 422.358377 511.998465 422.358377zM511.998465 780.924869c-49.502437 0-89.6406 40.09416-89.6406 89.642646 0 49.503461 40.138162 89.641623 89.6406 89.641623 49.504484 0 89.64367-40.138162 89.64367-89.641623C601.641111 821.019029 561.502949 780.924869 511.998465 780.924869z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfontclosesmall" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M596.722 511.999 924.94 183.781c23.299-23.299 23.299-61.422 0-84.721s-61.422-23.299-84.721 0L512.001 427.278 183.781 99.06c-23.299-23.299-61.422-23.299-84.721 0s-23.299 61.422 0 84.721L427.28 511.999 99.06 840.219c-23.299 23.299-23.299 61.422 0 84.721s61.422 23.299 84.721 0l328.219-328.219L840.219 924.94c23.299 23.299 61.422 23.299 84.721 0s23.299-61.422 0-84.721L596.722 511.999z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantou-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M300.304 490.897c-0.486 0.973-1.338 1.824-1.703 2.797-8.514 17.758-5.717 39.651 9.365 53.882l343.725 325.116c18.731 17.758 48.287 16.907 66.045-1.824 17.758-18.731 16.907-48.287-1.824-66.045l-308.453-291.79 307.236-296.047c18.609-17.881 19.096-47.436 1.216-66.045-9.122-9.487-21.407-14.351-33.57-14.352-11.676 0-23.353 4.378-32.353 13.137l-340.563 328.278c-0.608 0.608-0.851 1.581-1.581 2.189-0.487 0.487-0.973 0.851-1.581 1.338-2.797 2.797-4.135 6.203-5.959 9.365v0zM300.304 490.897z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
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

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)