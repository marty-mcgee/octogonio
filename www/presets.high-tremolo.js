(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["presets.high-tremolo"],{

/***/ "./src/generic/scripts/app/utils/presets/high-tremolo.js":
/*!***************************************************************!*\
  !*** ./src/generic/scripts/app/utils/presets/high-tremolo.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var preset = {
  "description": "High Tremolo",
  "id": "high-tremolo",
  "settings": {
    "config": {
      "bpm": 114
    },
    "sequences": [{
      "id": "total",
      "bars": 4,
      "beats": 4
    }, {
      "id": "CUSTOM_SEQUENCE_1",
      "description": "Chord Rhythm",
      "bars": 4,
      "beats": 4,
      "hitChance": 1,
      "allowedLengths": [{
        "id": "0.25",
        "name": "whole",
        "amount": 0,
        "isTriplet": false,
        "isDotted": false
      }, {
        "id": "0.5",
        "name": "half",
        "amount": 2,
        "isTriplet": false,
        "isDotted": false
      }, {
        "id": "1",
        "name": "quarter",
        "amount": 2,
        "isTriplet": false,
        "isDotted": true
      }, {
        "id": "2",
        "name": "eighth",
        "amount": 1,
        "isTriplet": false,
        "isDotted": true
      }, {
        "id": "4",
        "name": "sixteenth",
        "amount": 0,
        "isTriplet": false,
        "isDotted": false
      }]
    }, {
      "id": "CUSTOM_SEQUENCE_2",
      "description": "High Guitars",
      "bars": 4,
      "beats": 4,
      "hitChance": 1,
      "allowedLengths": [{
        "id": "0.25",
        "name": "whole",
        "amount": 0,
        "isTriplet": false,
        "isDotted": false
      }, {
        "id": "0.5",
        "name": "half",
        "amount": 0,
        "isTriplet": false,
        "isDotted": false
      }, {
        "id": "1",
        "name": "quarter",
        "amount": 0,
        "isTriplet": false,
        "isDotted": false
      }, {
        "id": "2",
        "name": "eighth",
        "amount": 0,
        "isTriplet": false,
        "isDotted": false
      }, {
        "id": "4",
        "name": "sixteenth",
        "amount": 1,
        "isTriplet": true,
        "isDotted": false
      }]
    }],
    "instruments": [{
      "id": "g",
      "sounds": [{
        "id": "sixth-0-chord",
        "amount": 1
      }, {
        "id": "sixth-3-chord",
        "amount": 1
      }, {
        "id": "sixth-8-chord",
        "amount": 1
      }],
      "volume": 0.9,
      "repeatHitTypeForXBeat": 4
    }, {
      "id": "lg",
      "sequences": ["CUSTOM_SEQUENCE_2"],
      "sounds": [{
        "id": "gs4",
        "amount": 2
      }, {
        "id": "b5",
        "amount": 2
      }, {
        "id": "cs5",
        "amount": 1
      }, {
        "id": "ds5",
        "amount": 1
      }, {
        "id": "e5",
        "amount": 2
      }, {
        "id": "fs5",
        "amount": 1
      }, {
        "id": "gs5",
        "amount": 2
      }],
      "fadeOutDuration": 0.06,
      "volume": 0.9,
      "repeatHitTypeForXBeat": 2
    }, {
      "id": "k",
      "sounds": [{
        "id": "k",
        "amount": 1
      }]
    }, {
      "id": "s",
      "sounds": [{
        "id": "s",
        "amount": 1
      }]
    }, {
      "id": "c",
      "sounds": [{
        "id": "crash-left",
        "amount": 1
      }, {
        "id": "crash-right",
        "amount": 1
      }, {
        "id": "china-left",
        "amount": 1
      }]
    }]
  }
};
var _default = preset;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(preset, "preset", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\utils\\presets\\high-tremolo.js");
  reactHotLoader.register(_default, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\utils\\presets\\high-tremolo.js");
  leaveModule(module);
})();

;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(preset, "preset", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\utils\\presets\\high-tremolo.js");
  reactHotLoader.register(_default, "_default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\utils\\presets\\high-tremolo.js");
  reactHotLoader.register(_default2, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\utils\\presets\\high-tremolo.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2VuZXJpYy9zY3JpcHRzL2FwcC91dGlscy9wcmVzZXRzL2hpZ2gtdHJlbW9sby5qcyJdLCJuYW1lcyI6WyJwcmVzZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHO0FBQ1gsaUJBRFc7QUFFWCxRQUZXO0FBR1gsY0FBWTtBQUNSLGNBQVU7QUFDTixhQUFPO0FBREQsS0FERjtBQUlSLGlCQUFhLENBQUM7QUFDVixZQURVO0FBRVYsY0FGVTtBQUdWLGVBQVM7QUFIQyxLQUFELEVBSVY7QUFDQyxZQUREO0FBRUMscUJBRkQ7QUFHQyxjQUhEO0FBSUMsZUFKRDtBQUtDLG1CQUxEO0FBTUMsd0JBQWtCLENBQUM7QUFDZixjQURlO0FBRWYsZ0JBRmU7QUFHZixrQkFIZTtBQUlmLHFCQUplO0FBS2Ysb0JBQVk7QUFMRyxPQUFELEVBTWY7QUFDQyxjQUREO0FBRUMsZ0JBRkQ7QUFHQyxrQkFIRDtBQUlDLHFCQUpEO0FBS0Msb0JBQVk7QUFMYixPQU5lLEVBWWY7QUFDQyxjQUREO0FBRUMsZ0JBRkQ7QUFHQyxrQkFIRDtBQUlDLHFCQUpEO0FBS0Msb0JBQVk7QUFMYixPQVplLEVBa0JmO0FBQ0MsY0FERDtBQUVDLGdCQUZEO0FBR0Msa0JBSEQ7QUFJQyxxQkFKRDtBQUtDLG9CQUFZO0FBTGIsT0FsQmUsRUF3QmY7QUFDQyxjQUREO0FBRUMsZ0JBRkQ7QUFHQyxrQkFIRDtBQUlDLHFCQUpEO0FBS0Msb0JBQVk7QUFMYixPQXhCZTtBQU5uQixLQUpVLEVBeUNWO0FBQ0MsWUFERDtBQUVDLHFCQUZEO0FBR0MsY0FIRDtBQUlDLGVBSkQ7QUFLQyxtQkFMRDtBQU1DLHdCQUFrQixDQUFDO0FBQ2YsY0FEZTtBQUVmLGdCQUZlO0FBR2Ysa0JBSGU7QUFJZixxQkFKZTtBQUtmLG9CQUFZO0FBTEcsT0FBRCxFQU1mO0FBQ0MsY0FERDtBQUVDLGdCQUZEO0FBR0Msa0JBSEQ7QUFJQyxxQkFKRDtBQUtDLG9CQUFZO0FBTGIsT0FOZSxFQVlmO0FBQ0MsY0FERDtBQUVDLGdCQUZEO0FBR0Msa0JBSEQ7QUFJQyxxQkFKRDtBQUtDLG9CQUFZO0FBTGIsT0FaZSxFQWtCZjtBQUNDLGNBREQ7QUFFQyxnQkFGRDtBQUdDLGtCQUhEO0FBSUMscUJBSkQ7QUFLQyxvQkFBWTtBQUxiLE9BbEJlLEVBd0JmO0FBQ0MsY0FERDtBQUVDLGdCQUZEO0FBR0Msa0JBSEQ7QUFJQyxxQkFKRDtBQUtDLG9CQUFZO0FBTGIsT0F4QmU7QUFObkIsS0F6Q1UsQ0FKTDtBQW1GUixtQkFBZSxDQUFDO0FBQ1osWUFEWTtBQUVaLGdCQUFVLENBQUM7QUFDUCxjQURPO0FBRVAsa0JBQVU7QUFGSCxPQUFELEVBR1A7QUFDQyxjQUREO0FBRUMsa0JBQVU7QUFGWCxPQUhPLEVBTVA7QUFDQyxjQUREO0FBRUMsa0JBQVU7QUFGWCxPQU5PLENBRkU7QUFZWixnQkFaWTtBQWFaLCtCQUF5QjtBQWJiLEtBQUQsRUFjWjtBQUNDLFlBREQ7QUFFQyxtQkFBYSxDQUZkLG1CQUVjLENBRmQ7QUFHQyxnQkFBVSxDQUFDO0FBQ1AsY0FETztBQUVQLGtCQUFVO0FBRkgsT0FBRCxFQUdQO0FBQ0MsY0FERDtBQUVDLGtCQUFVO0FBRlgsT0FITyxFQU1QO0FBQ0MsY0FERDtBQUVDLGtCQUFVO0FBRlgsT0FOTyxFQVNQO0FBQ0MsY0FERDtBQUVDLGtCQUFVO0FBRlgsT0FUTyxFQVlQO0FBQ0MsY0FERDtBQUVDLGtCQUFVO0FBRlgsT0FaTyxFQWVQO0FBQ0MsY0FERDtBQUVDLGtCQUFVO0FBRlgsT0FmTyxFQWtCUDtBQUNDLGNBREQ7QUFFQyxrQkFBVTtBQUZYLE9BbEJPLENBSFg7QUF5QkMseUJBekJEO0FBMEJDLGdCQTFCRDtBQTJCQywrQkFBeUI7QUEzQjFCLEtBZFksRUEwQ1o7QUFDQyxZQUREO0FBRUMsZ0JBQVUsQ0FBQztBQUNQLGNBRE87QUFFUCxrQkFBVTtBQUZILE9BQUQ7QUFGWCxLQTFDWSxFQWdEWjtBQUNDLFlBREQ7QUFFQyxnQkFBVSxDQUFDO0FBQ1AsY0FETztBQUVQLGtCQUFVO0FBRkgsT0FBRDtBQUZYLEtBaERZLEVBc0RaO0FBQ0MsWUFERDtBQUVDLGdCQUFVLENBQUM7QUFDUCxjQURPO0FBRVAsa0JBQVU7QUFGSCxPQUFELEVBR1A7QUFDQyxjQUREO0FBRUMsa0JBQVU7QUFGWCxPQUhPLEVBTVA7QUFDQyxjQUREO0FBRUMsa0JBQVU7QUFGWCxPQU5PO0FBRlgsS0F0RFk7QUFuRlA7QUFIRCxDQUFmO2VBNEplQSxNO2dCQUFmLFE7QUFBZTs7Ozs7Ozs7Ozs7OzBCQTVKVEEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQUFBLE0iLCJmaWxlIjoicHJlc2V0cy5oaWdoLXRyZW1vbG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZXQgPSB7XHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiSGlnaCBUcmVtb2xvXCIsXHJcbiAgICBcImlkXCI6IFwiaGlnaC10cmVtb2xvXCIsXHJcbiAgICBcInNldHRpbmdzXCI6IHtcclxuICAgICAgICBcImNvbmZpZ1wiOiB7XHJcbiAgICAgICAgICAgIFwiYnBtXCI6IDExNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzZXF1ZW5jZXNcIjogW3tcclxuICAgICAgICAgICAgXCJpZFwiOiBcInRvdGFsXCIsXHJcbiAgICAgICAgICAgIFwiYmFyc1wiOiA0LFxyXG4gICAgICAgICAgICBcImJlYXRzXCI6IDRcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCJDVVNUT01fU0VRVUVOQ0VfMVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ2hvcmQgUmh5dGhtXCIsXHJcbiAgICAgICAgICAgIFwiYmFyc1wiOiA0LFxyXG4gICAgICAgICAgICBcImJlYXRzXCI6IDQsXHJcbiAgICAgICAgICAgIFwiaGl0Q2hhbmNlXCI6IDEsXHJcbiAgICAgICAgICAgIFwiYWxsb3dlZExlbmd0aHNcIjogW3tcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCIwLjI1XCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ3aG9sZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbW91bnRcIjogMCxcclxuICAgICAgICAgICAgICAgIFwiaXNUcmlwbGV0XCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJpc0RvdHRlZFwiOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiMC41XCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJoYWxmXCIsXHJcbiAgICAgICAgICAgICAgICBcImFtb3VudFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgXCJpc1RyaXBsZXRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImlzRG90dGVkXCI6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCIxXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJxdWFydGVyXCIsXHJcbiAgICAgICAgICAgICAgICBcImFtb3VudFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgXCJpc1RyaXBsZXRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImlzRG90dGVkXCI6IHRydWVcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIjJcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImVpZ2h0aFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcclxuICAgICAgICAgICAgICAgIFwiaXNUcmlwbGV0XCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJpc0RvdHRlZFwiOiB0cnVlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCI0XCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzaXh0ZWVudGhcIixcclxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IDAsXHJcbiAgICAgICAgICAgICAgICBcImlzVHJpcGxldFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwiaXNEb3R0ZWRcIjogZmFsc2VcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCJDVVNUT01fU0VRVUVOQ0VfMlwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSGlnaCBHdWl0YXJzXCIsXHJcbiAgICAgICAgICAgIFwiYmFyc1wiOiA0LFxyXG4gICAgICAgICAgICBcImJlYXRzXCI6IDQsXHJcbiAgICAgICAgICAgIFwiaGl0Q2hhbmNlXCI6IDEsXHJcbiAgICAgICAgICAgIFwiYWxsb3dlZExlbmd0aHNcIjogW3tcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCIwLjI1XCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ3aG9sZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbW91bnRcIjogMCxcclxuICAgICAgICAgICAgICAgIFwiaXNUcmlwbGV0XCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJpc0RvdHRlZFwiOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiMC41XCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJoYWxmXCIsXHJcbiAgICAgICAgICAgICAgICBcImFtb3VudFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgXCJpc1RyaXBsZXRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImlzRG90dGVkXCI6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCIxXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJxdWFydGVyXCIsXHJcbiAgICAgICAgICAgICAgICBcImFtb3VudFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgXCJpc1RyaXBsZXRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImlzRG90dGVkXCI6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCIyXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJlaWdodGhcIixcclxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IDAsXHJcbiAgICAgICAgICAgICAgICBcImlzVHJpcGxldFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwiaXNEb3R0ZWRcIjogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIjRcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInNpeHRlZW50aFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcclxuICAgICAgICAgICAgICAgIFwiaXNUcmlwbGV0XCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcImlzRG90dGVkXCI6IGZhbHNlXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgXCJpbnN0cnVtZW50c1wiOiBbe1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiZ1wiLFxyXG4gICAgICAgICAgICBcInNvdW5kc1wiOiBbe1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcInNpeHRoLTAtY2hvcmRcIixcclxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IDFcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcInNpeHRoLTMtY2hvcmRcIixcclxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IDFcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcInNpeHRoLTgtY2hvcmRcIixcclxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IDFcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIFwidm9sdW1lXCI6IDAuOSxcclxuICAgICAgICAgICAgXCJyZXBlYXRIaXRUeXBlRm9yWEJlYXRcIjogNFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcImxnXCIsXHJcbiAgICAgICAgICAgIFwic2VxdWVuY2VzXCI6IFtcIkNVU1RPTV9TRVFVRU5DRV8yXCJdLFxyXG4gICAgICAgICAgICBcInNvdW5kc1wiOiBbe1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcImdzNFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbW91bnRcIjogMlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiYjVcIixcclxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IDJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcImNzNVwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbW91bnRcIjogMVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiZHM1XCIsXHJcbiAgICAgICAgICAgICAgICBcImFtb3VudFwiOiAxXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJlNVwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbW91bnRcIjogMlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiZnM1XCIsXHJcbiAgICAgICAgICAgICAgICBcImFtb3VudFwiOiAxXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJnczVcIixcclxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IDJcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIFwiZmFkZU91dER1cmF0aW9uXCI6IDAuMDYsXHJcbiAgICAgICAgICAgIFwidm9sdW1lXCI6IDAuOSxcclxuICAgICAgICAgICAgXCJyZXBlYXRIaXRUeXBlRm9yWEJlYXRcIjogMlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcImtcIixcclxuICAgICAgICAgICAgXCJzb3VuZHNcIjogW3tcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJrXCIsXHJcbiAgICAgICAgICAgICAgICBcImFtb3VudFwiOiAxXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwic1wiLFxyXG4gICAgICAgICAgICBcInNvdW5kc1wiOiBbe1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcInNcIixcclxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IDFcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCJjXCIsXHJcbiAgICAgICAgICAgIFwic291bmRzXCI6IFt7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiY3Jhc2gtbGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbW91bnRcIjogMVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiY3Jhc2gtcmlnaHRcIixcclxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IDFcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcImNoaW5hLWxlZnRcIixcclxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IDFcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9XVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmVzZXRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==