/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Add your JavaScript code here
var VinylPluginJS = /*#__PURE__*/function () {
  function VinylPluginJS() {
    _classCallCheck(this, VinylPluginJS);
    this.init();
  }
  return _createClass(VinylPluginJS, [{
    key: "init",
    value: function init() {
      // wait until DOM is ready
      document.addEventListener('DOMContentLoaded', function () {
        // function updateSvgColor() {
        //     const header = document.querySelector('.wp-block-kadence-header');
        //     const svg = header.querySelector('svg');
        //     const bgColor = getComputedStyle(document.elementFromPoint(
        //         svg.getBoundingClientRect().left + 10,
        //         svg.getBoundingClientRect().top + 10
        //     )).backgroundColor;

        //     console.log(bgColor);

        //     // Convert background color to grayscale value
        //     const rgb = bgColor.match(/\d+/g);
        //     const brightness = (parseInt(rgb[0]) * 0.299 + parseInt(rgb[1]) * 0.587 + parseInt(rgb[2]) * 0.114) / 255;

        //     // Set SVG color based on background brightness
        //     if (brightness > 0.5) {
        //       // Dark SVG for light backgrounds
        //       svg.querySelectorAll('path').forEach(path => path.style.fill = '#000000');
        //     } else {
        //       // Light SVG for dark backgrounds
        //       svg.querySelectorAll('path').forEach(path => path.style.fill = '#FFFFFF');
        //     }
        // }

        //const modalElement = document.getElementById('#videomodal'); // Replace with your modal's actual ID

        function addClassNameListener(elemId, callback) {
          var elem = document.getElementById(elemId);
          var lastClassName = elem.className;
          window.setInterval(function () {
            var className = elem.className;
            if (className !== lastClassName) {
              callback();
              lastClassName = className;
            }
          }, 10);
        }
        if (document.querySelectorAll('#videomodal').length > 0) {
          // get #videomodal's inner HTML
          var modalContent = document.getElementById('videomodal').innerHTML;
          addClassNameListener('videomodal', function () {
            var modalElement = document.getElementById('videomodal');
            var modalVideo = modalElement.querySelector('video');
            if (modalElement.classList.contains('is-open')) {
              modalElement.innerHTML = modalContent;
              //console.log('video modal is open');
            } else {
              modalElement.innerHTML = '';
              //console.log('video modal is not open');
            }
          });
        }
        var pixelDensity = window.devicePixelRatio;
        console.log("Pixel density:", pixelDensity);
        if (pixelDensity > 1) {
          document.querySelector('body').classList.add('high-dpi');
        }
        var loco = document.querySelectorAll('.locomotive');
        if (loco.length > 0) {
          // const logo = document.querySelector('.svg-logo-dark').innerHTML;
          //              document.querySelector('.svg-logo-dark').innerHTML = '';

          // let header =  document.querySelector('.wp-block-kadence-header-desktop');
          // // add logo to header at end of header
          // header.insertAdjacentHTML('beforeend', logo);
          // header.classList.add('has-logo');

          // Prevent hashtag links from scrolling and updating URL
          document.addEventListener('click', function (event) {
            // Check if clicked element is a link with a hash
            var target = event.target.closest('a');
            if (target && target.hash && target.hash.length > 1) {
              // Prevent default anchor behavior
              event.preventDefault();

              // If you still want the link to do something else, you can add custom code here
              // For example, trigger a function or toggle content visibility

              console.log('Hashtag link clicked, but scroll prevented:', target.hash);
            }
          });
          var sections = document.querySelectorAll('.entry-content > .wp-block-kadence-rowlayout');
          sections.forEach(function (section, index) {
            section.setAttribute('data-scroll-section', '');
          });
          document.getElementById('colophon').setAttribute('data-scroll-section', '');
          //document.querySelector('header').setAttribute('data-scroll-section', '');

          var scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            lerp: 0.15,
            // Start with a moderately responsive lerp
            multiplier: 0.8,
            // Multiplier for scroll speed
            scrollFromAnywhere: true
          });
          var caseStudyOverlay = document.getElementById('caseStudyOverlay');
          var caseStudyHero = document.getElementById('caseStudyHero');
          //console.log(caseStudyOverlay.length);

          if (caseStudyOverlay) {
            // // set all svgs in header to white
            // const headerSvgs = document.querySelectorAll('svg path');
            // console.log(headerSvgs);
            // headerSvgs.forEach((svg) => {
            //     svg.setAttribute('fill', '#ECE8E2');
            // });

            scroll.on('scroll', function (obj) {
              //
              var scrollY = obj.scroll.y;
              if (scrollY > 32) {
                // console.log(obj.scroll.y);
                if (!caseStudyOverlay.classList.contains('active')) {
                  caseStudyOverlay.classList.add('active');
                  caseStudyHero.classList.add('active');
                  // headerSvgs.forEach((svg) => {
                  //     svg.setAttribute('fill', '#333333');
                  // });
                }
              } else {
                if (caseStudyOverlay.classList.contains('active')) {
                  caseStudyOverlay.classList.remove('active');
                  caseStudyHero.classList.remove('active');
                  // headerSvgs.forEach((svg) => {
                  //     svg.setAttribute('fill', '#ECE8E2');
                  // });
                }
              }
            });
          }
        }

        // const no_follow = document.querySelectorAll('.no-follow');
        // console.log(no_follow);

        // if( no_follow.length == 0 ) {

        //     const follow = new Follow({
        //         //debug: true,
        //         factor: 1,
        //         //attribute: 'follow',
        //         initiate: false
        //     });

        //     setTimeout(() => {
        //         follow.initiate();
        //     }, 200);

        //     // Track Changes in Document Height to keep element attached to cursor
        //     let previousHeight = document.documentElement.scrollHeight;
        //     const heightCheckInterval = setInterval(() => {
        //         const currentHeight = document.documentElement.scrollHeight;
        //         if (currentHeight !== previousHeight) {
        //             // Document height has changed
        //             console.log('Document height changed from', previousHeight, 'to', currentHeight);
        //             previousHeight = currentHeight;
        //             follow.destroy();

        //             setTimeout(() => {
        //                 follow.initiate();
        //             }, 200);
        //         }
        //     }, 500); // Check every 500 milliseconds

        // }

        // Work Navigation Feature

        var workNav = document.getElementById('work_navigation_feature');
        if (workNav) {
          var workNavItems = workNav.querySelectorAll('.kb-advanced-heading-link');
          workNavItems.forEach(function (item) {
            item.addEventListener('mouseenter', function () {
              var bg_target = '#' + this.getAttribute('data-bg-target');
              console.log(bg_target);
              var bg_target = document.querySelector(bg_target);
              console.log(bg_target);
              var bg_targets = document.querySelectorAll('.work-nav-bg');
              bg_targets.forEach(function (el) {
                el.classList.remove('active');
              });
              bg_target.classList.add('active');
            });
          });
        }

        // // Run on scroll and page load
        // window.addEventListener('scroll', updateSvgColor);
        // window.addEventListener('load', updateSvgColor);
      });
    }
  }]);
}();
new VinylPluginJS();
})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=main.js.map