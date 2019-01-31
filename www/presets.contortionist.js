(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["presets.contortionist"],{

/***/ "./src/generic/scripts/app/utils/presets/contortionist.js":
/*!****************************************************************!*\
  !*** ./src/generic/scripts/app/utils/presets/contortionist.js ***!
  \****************************************************************/
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
  id: 'contortionist',
  "settings": {
    "config": {
      "bpm": 90
    },
    "sequences": [{
      "id": "total",
      "bars": 8,
      "beats": 4
    }, {
      "id": "CUSTOM_SEQUENCE_1",
      "description": "Guitars",
      "bars": 8,
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
        "amount": 1,
        "isTriplet": false,
        "isDotted": true
      }, {
        "id": "1",
        "name": "quarter",
        "amount": 1,
        "isTriplet": false,
        "isDotted": true
      }, {
        "id": "2",
        "name": "eighth",
        "amount": 0,
        "isTriplet": false,
        "isDotted": false
      }, {
        "id": "4",
        "name": "sixteenth",
        "amount": 0,
        "isTriplet": false,
        "isDotted": false
      }]
    }, {
      "id": "CUSTOM_SEQUENCE_2",
      "description": "Lead Guitar",
      "bars": 1,
      "beats": 6,
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
        "amount": 1,
        "isTriplet": false,
        "isDotted": false
      }, {
        "id": "1",
        "name": "quarter",
        "amount": 1,
        "isTriplet": false,
        "isDotted": true
      }, {
        "id": "2",
        "name": "eighth",
        "amount": 1,
        "isTriplet": false,
        "isDotted": false
      }, {
        "id": "4",
        "name": "sixteenth",
        "amount": 0,
        "isTriplet": false,
        "isDotted": false
      }]
    }, {
      "id": "CUSTOM_SEQUENCE_3",
      "description": "Hihat",
      "bars": 2,
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
        "amount": 9,
        "isTriplet": false,
        "isDotted": false
      }, {
        "id": "4",
        "name": "sixteenth",
        "amount": 1,
        "isTriplet": false,
        "isDotted": false
      }]
    }, {
      "id": "CUSTOM_SEQUENCE_4",
      "description": "Dotted",
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
        "amount": 1,
        "isTriplet": false,
        "isDotted": true
      }, {
        "id": "2",
        "name": "eighth",
        "amount": 0,
        "isTriplet": false,
        "isDotted": true
      }, {
        "id": "4",
        "name": "sixteenth",
        "amount": 0,
        "isTriplet": false,
        "isDotted": false
      }]
    }],
    "instruments": [{
      "id": "g",
      "sounds": [{
        "id": "sixth-0-chord",
        "amount": 1
      }, {
        "id": "sixth-5-chord",
        "amount": 1
      }, {
        "id": "sixth-7-chord",
        "amount": 1
      }],
      "repeatHitTypeForXBeat": 8
    }, {
      "id": "lg",
      "sequences": ["CUSTOM_SEQUENCE_2"],
      "sounds": [{
        "id": "gs4",
        "amount": 3
      }, {
        "id": "b5",
        "amount": 3
      }, {
        "id": "cs5",
        "amount": 1
      }, {
        "id": "e5",
        "amount": 1
      }, {
        "id": "gs5",
        "amount": 3
      }],
      "fadeOutDuration": 0.05,
      "volume": 0.7
    }, {
      "id": "k",
      "sounds": [{
        "id": "k",
        "amount": 1
      }]
    }, {
      "id": "s",
      "sequences": ["offsetWholes", "offsetHalfs"],
      "sounds": [{
        "id": "s",
        "amount": 1
      }]
    }, {
      "id": "h",
      "sequences": ["CUSTOM_SEQUENCE_3"],
      "sounds": [{
        "id": "hc",
        "amount": 1
      }],
      "volume": 0.7
    }, {
      "id": "c",
      "sequences": ["twoBars", "CUSTOM_SEQUENCE_4"],
      "sounds": [{
        "id": "crash-left",
        "amount": 1
      }, {
        "id": "crash-right",
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

  reactHotLoader.register(preset, "preset", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\utils\\presets\\contortionist.js");
  reactHotLoader.register(_default, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\utils\\presets\\contortionist.js");
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

  reactHotLoader.register(preset, "preset", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\utils\\presets\\contortionist.js");
  reactHotLoader.register(_default, "_default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\utils\\presets\\contortionist.js");
  reactHotLoader.register(_default2, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\utils\\presets\\contortionist.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2VuZXJpYy9zY3JpcHRzL2FwcC91dGlscy9wcmVzZXRzL2NvbnRvcnRpb25pc3QuanMiXSwibmFtZXMiOlsicHJlc2V0IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHO0FBQ1hDLElBQUUsRUFEUztBQUVYLGNBQVk7QUFDUixjQUFVO0FBQ04sYUFBTztBQURELEtBREY7QUFJUixpQkFBYSxDQUFDO0FBQ1YsWUFEVTtBQUVWLGNBRlU7QUFHVixlQUFTO0FBSEMsS0FBRCxFQUlWO0FBQ0MsWUFERDtBQUVDLHFCQUZEO0FBR0MsY0FIRDtBQUlDLGVBSkQ7QUFLQyxtQkFMRDtBQU1DLHdCQUFrQixDQUFDO0FBQ2YsY0FEZTtBQUVmLGdCQUZlO0FBR2Ysa0JBSGU7QUFJZixxQkFKZTtBQUtmLG9CQUFZO0FBTEcsT0FBRCxFQU1mO0FBQ0MsY0FERDtBQUVDLGdCQUZEO0FBR0Msa0JBSEQ7QUFJQyxxQkFKRDtBQUtDLG9CQUFZO0FBTGIsT0FOZSxFQVlmO0FBQ0MsY0FERDtBQUVDLGdCQUZEO0FBR0Msa0JBSEQ7QUFJQyxxQkFKRDtBQUtDLG9CQUFZO0FBTGIsT0FaZSxFQWtCZjtBQUNDLGNBREQ7QUFFQyxnQkFGRDtBQUdDLGtCQUhEO0FBSUMscUJBSkQ7QUFLQyxvQkFBWTtBQUxiLE9BbEJlLEVBd0JmO0FBQ0MsY0FERDtBQUVDLGdCQUZEO0FBR0Msa0JBSEQ7QUFJQyxxQkFKRDtBQUtDLG9CQUFZO0FBTGIsT0F4QmU7QUFObkIsS0FKVSxFQXlDVjtBQUNDLFlBREQ7QUFFQyxxQkFGRDtBQUdDLGNBSEQ7QUFJQyxlQUpEO0FBS0MsbUJBTEQ7QUFNQyx3QkFBa0IsQ0FBQztBQUNmLGNBRGU7QUFFZixnQkFGZTtBQUdmLGtCQUhlO0FBSWYscUJBSmU7QUFLZixvQkFBWTtBQUxHLE9BQUQsRUFNZjtBQUNDLGNBREQ7QUFFQyxnQkFGRDtBQUdDLGtCQUhEO0FBSUMscUJB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Y0FETztBQUVQLGtCQUFVO0FBRkgsT0FBRCxDQUhYO0FBT0MsZ0JBQVU7QUFQWCxLQS9DWSxFQXVEWjtBQUNDLFlBREQ7QUFFQyxtQkFBYSxZQUZkLG1CQUVjLENBRmQ7QUFHQyxnQkFBVSxDQUFDO0FBQ1AsY0FETztBQUVQLGtCQUFVO0FBRkgsT0FBRCxFQUdQO0FBQ0MsY0FERDtBQUVDLGtCQUFVO0FBRlgsT0FITztBQUhYLEtBdkRZO0FBN0pQO0FBRkQsQ0FBZjtlQW9PZUQsTTtnQkFBZixRO0FBQWU7Ozs7Ozs7Ozs7OzswQkFwT1RBLE07Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUFBQSxNIiwiZmlsZSI6InByZXNldHMuY29udG9ydGlvbmlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNldCA9IHtcclxuICAgIGlkOiAnY29udG9ydGlvbmlzdCcsXHJcbiAgICBcInNldHRpbmdzXCI6IHtcclxuICAgICAgICBcImNvbmZpZ1wiOiB7XHJcbiAgICAgICAgICAgIFwiYnBtXCI6IDkwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInNlcXVlbmNlc1wiOiBbe1xyXG4gICAgICAgICAgICBcImlkXCI6IFwidG90YWxcIixcclxuICAgICAgICAgICAgXCJiYXJzXCI6IDgsXHJcbiAgICAgICAgICAgIFwiYmVhdHNcIjogNFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIkNVU1RPTV9TRVFVRU5DRV8xXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHdWl0YXJzXCIsXHJcbiAgICAgICAgICAgIFwiYmFyc1wiOiA4LFxyXG4gICAgICAgICAgICBcImJlYXRzXCI6IDQsXHJcbiAgICAgICAgICAgIFwiaGl0Q2hhbmNlXCI6IDEsXHJcbiAgICAgICAgICAgIFwiYWxsb3dlZExlbmd0aHNcIjogW3tcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCIwLjI1XCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ3aG9sZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbW91bnRcIjogMCxcclxuICAgICAgICAgICAgICAgIFwiaXNUcmlwbGV0XCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJpc0RvdHRlZFwiOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiMC41XCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJoYWxmXCIsXHJcbiAgICAgICAgICAgICAgICBcImFtb3VudFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgXCJpc1RyaXBsZXRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImlzRG90dGVkXCI6IHRydWVcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIjFcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInF1YXJ0ZXJcIixcclxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXHJcbiAgICAgICAgICAgICAgICBcImlzVHJpcGxldFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwiaXNEb3R0ZWRcIjogdHJ1ZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZWlnaHRoXCIsXHJcbiAgICAgICAgICAgICAgICBcImFtb3VudFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgXCJpc1RyaXBsZXRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImlzRG90dGVkXCI6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCI0XCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzaXh0ZWVudGhcIixcclxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IDAsXHJcbiAgICAgICAgICAgICAgICBcImlzVHJpcGxldFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwiaXNEb3R0ZWRcIjogZmFsc2VcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCJDVVNUT01fU0VRVUVOQ0VfMlwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTGVhZCBHdWl0YXJcIixcclxuICAgICAgICAgICAgXCJiYXJzXCI6IDEsXHJcbiAgICAgICAgICAgIFwiYmVhdHNcIjogNixcclxuICAgICAgICAgICAgXCJoaXRDaGFuY2VcIjogMSxcclxuICAgICAgICAgICAgXCJhbGxvd2VkTGVuZ3Roc1wiOiBbe1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIjAuMjVcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIndob2xlXCIsXHJcbiAgICAgICAgICAgICAgICBcImFtb3VudFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgXCJpc1RyaXBsZXRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImlzRG90dGVkXCI6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCIwLjVcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImhhbGZcIixcclxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXHJcbiAgICAgICAgICAgICAgICBcImlzVHJpcGxldFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwiaXNEb3R0ZWRcIjogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIjFcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInF1YXJ0ZXJcIixcclxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXHJcbiAgICAgICAgICAgICAgICBcImlzVHJpcGxldFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwiaXNEb3R0ZWRcIjogdHJ1ZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZWlnaHRoXCIsXHJcbiAgICAgICAgICAgICAgICBcImFtb3VudFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgXCJpc1RyaXBsZXRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImlzRG90dGVkXCI6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCI0XCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzaXh0ZWVudGhcIixcclxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IDAsXHJcbiAgICAgICAgICAgICAgICBcImlzVHJpcGxldFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwiaXNEb3R0ZWRcIjogZmFsc2VcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCJDVVNUT01fU0VRVUVOQ0VfM1wiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSGloYXRcIixcclxuICAgICAgICAgICAgXCJiYXJzXCI6IDIsXHJcbiAgICAgICAgICAgIFwiYmVhdHNcIjogNCxcclxuICAgICAgICAgICAgXCJoaXRDaGFuY2VcIjogMSxcclxuICAgICAgICAgICAgXCJhbGxvd2VkTGVuZ3Roc1wiOiBbe1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIjAuMjVcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIndob2xlXCIsXHJcbiAgICAgICAgICAgICAgICBcImFtb3VudFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgXCJpc1RyaXBsZXRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImlzRG90dGVkXCI6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCIwLjVcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImhhbGZcIixcclxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IDAsXHJcbiAgICAgICAgICAgICAgICBcImlzVHJpcGxldFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwiaXNEb3R0ZWRcIjogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIjFcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInF1YXJ0ZXJcIixcclxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IDAsXHJcbiAgICAgICAgICAgICAgICBcImlzVHJpcGxldFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwiaXNEb3R0ZWRcIjogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIjJcIixcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImVpZ2h0aFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbW91bnRcIjogOSxcclxuICAgICAgICAgICAgICAgIFwiaXNUcmlwbGV0XCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJpc0RvdHRlZFwiOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiNFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic2l4dGVlbnRoXCIsXHJcbiAgICAgICAgICAgICAgICBcImFtb3VudFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgXCJpc1RyaXBsZXRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImlzRG90dGVkXCI6IGZhbHNlXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiQ1VTVE9NX1NFUVVFTkNFXzRcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRvdHRlZFwiLFxyXG4gICAgICAgICAgICBcImJhcnNcIjogNCxcclxuICAgICAgICAgICAgXCJiZWF0c1wiOiA0LFxyXG4gICAgICAgICAgICBcImhpdENoYW5jZVwiOiAxLFxyXG4gICAgICAgICAgICBcImFsbG93ZWRMZW5ndGhzXCI6IFt7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiMC4yNVwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwid2hvbGVcIixcclxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IDAsXHJcbiAgICAgICAgICAgICAgICBcImlzVHJpcGxldFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwiaXNEb3R0ZWRcIjogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIjAuNVwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaGFsZlwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbW91bnRcIjogMCxcclxuICAgICAgICAgICAgICAgIFwiaXNUcmlwbGV0XCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJpc0RvdHRlZFwiOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicXVhcnRlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcclxuICAgICAgICAgICAgICAgIFwiaXNUcmlwbGV0XCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJpc0RvdHRlZFwiOiB0cnVlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCIyXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJlaWdodGhcIixcclxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IDAsXHJcbiAgICAgICAgICAgICAgICBcImlzVHJpcGxldFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwiaXNEb3R0ZWRcIjogdHJ1ZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiNFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic2l4dGVlbnRoXCIsXHJcbiAgICAgICAgICAgICAgICBcImFtb3VudFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgXCJpc1RyaXBsZXRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImlzRG90dGVkXCI6IGZhbHNlXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgXCJpbnN0cnVtZW50c1wiOiBbe1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiZ1wiLFxyXG4gICAgICAgICAgICBcInNvdW5kc1wiOiBbe1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcInNpeHRoLTAtY2hvcmRcIixcclxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IDFcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcInNpeHRoLTUtY2hvcmRcIixcclxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IDFcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcInNpeHRoLTctY2hvcmRcIixcclxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IDFcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIFwicmVwZWF0SGl0VHlwZUZvclhCZWF0XCI6IDhcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCJsZ1wiLFxyXG4gICAgICAgICAgICBcInNlcXVlbmNlc1wiOiBbXCJDVVNUT01fU0VRVUVOQ0VfMlwiXSxcclxuICAgICAgICAgICAgXCJzb3VuZHNcIjogW3tcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJnczRcIixcclxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IDNcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcImI1XCIsXHJcbiAgICAgICAgICAgICAgICBcImFtb3VudFwiOiAzXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJjczVcIixcclxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IDFcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcImU1XCIsXHJcbiAgICAgICAgICAgICAgICBcImFtb3VudFwiOiAxXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJnczVcIixcclxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IDNcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIFwiZmFkZU91dER1cmF0aW9uXCI6IDAuMDUsXHJcbiAgICAgICAgICAgIFwidm9sdW1lXCI6IDAuN1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcImtcIixcclxuICAgICAgICAgICAgXCJzb3VuZHNcIjogW3tcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJrXCIsXHJcbiAgICAgICAgICAgICAgICBcImFtb3VudFwiOiAxXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwic1wiLFxyXG4gICAgICAgICAgICBcInNlcXVlbmNlc1wiOiBbXCJvZmZzZXRXaG9sZXNcIiwgXCJvZmZzZXRIYWxmc1wiXSxcclxuICAgICAgICAgICAgXCJzb3VuZHNcIjogW3tcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJzXCIsXHJcbiAgICAgICAgICAgICAgICBcImFtb3VudFwiOiAxXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiaFwiLFxyXG4gICAgICAgICAgICBcInNlcXVlbmNlc1wiOiBbXCJDVVNUT01fU0VRVUVOQ0VfM1wiXSxcclxuICAgICAgICAgICAgXCJzb3VuZHNcIjogW3tcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJoY1wiLFxyXG4gICAgICAgICAgICAgICAgXCJhbW91bnRcIjogMVxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgXCJ2b2x1bWVcIjogMC43XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiY1wiLFxyXG4gICAgICAgICAgICBcInNlcXVlbmNlc1wiOiBbXCJ0d29CYXJzXCIsIFwiQ1VTVE9NX1NFUVVFTkNFXzRcIl0sXHJcbiAgICAgICAgICAgIFwic291bmRzXCI6IFt7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiY3Jhc2gtbGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbW91bnRcIjogMVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiY3Jhc2gtcmlnaHRcIixcclxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IDFcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9XVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmVzZXRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==