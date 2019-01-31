(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~lzutf8"],{

/***/ "./node_modules/lzutf8/build/production/lzutf8.js":
/*!********************************************************!*\
  !*** ./node_modules/lzutf8/build/production/lzutf8.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, module, global, Buffer, setImmediate) {/*!
 LZ-UTF8 v0.4.6

 Copyright (c) 2017, Rotem Dan
 Released under the MIT license.

 Build date: 2017-10-18 

 Please report any issue at https://github.com/rotemdan/lzutf8.js/issues
*/
var LZUTF8;
(function (LZUTF8) {
    LZUTF8.runningInNodeJS = function () {
        return ((typeof process === "object") && (typeof process.versions === "object") && (typeof process.versions.node === "string"));
    };
    LZUTF8.runningInMainNodeJSModule = function () {
        return LZUTF8.runningInNodeJS() && __webpack_require__.c[__webpack_require__.s] === module;
    };
    LZUTF8.commonJSAvailable = function () {
        return  true && typeof module.exports === "object";
    };
    LZUTF8.runningInWebWorker = function () {
        return typeof window === "undefined" && typeof self === "object" && typeof self.addEventListener === "function" && typeof self.close === "function";
    };
    LZUTF8.runningInNodeChildProcess = function () {
        return LZUTF8.runningInNodeJS() && typeof process.send === "function";
    };
    LZUTF8.runningInNullOrigin = function () {
        if (typeof window !== "object" || typeof window.location !== "object")
            return false;
        return document.location.protocol !== 'http:' && document.location.protocol !== 'https:';
    };
    LZUTF8.webWorkersAvailable = function () {
        if (typeof Worker !== "function" || LZUTF8.runningInNullOrigin())
            return false;
        if (LZUTF8.runningInNodeJS())
            return false;
        if (navigator && navigator.userAgent && navigator.userAgent.indexOf("Android 4.3") >= 0)
            return false;
        return true;
    };
    LZUTF8.log = function (message, appendToDocument) {
        if (appendToDocument === void 0) { appendToDocument = false; }
        if (typeof console !== "object")
            return;
        console.log(message);
        if (appendToDocument && typeof document == "object")
            document.body.innerHTML += message + "<br/>";
    };
    LZUTF8.createErrorMessage = function (exception, title) {
        if (title === void 0) { title = "Unhandled exception"; }
        if (exception == null)
            return title;
        title += ": ";
        if (typeof exception.content === "object") {
            if (LZUTF8.runningInNodeJS()) {
                return title + exception.content.stack;
            }
            else {
                var exceptionJSON = JSON.stringify(exception.content);
                if (exceptionJSON !== "{}")
                    return title + exceptionJSON;
                else
                    return title + exception.content;
            }
        }
        else if (typeof exception.content === "string") {
            return title + exception.content;
        }
        else {
            return title + exception;
        }
    };
    LZUTF8.printExceptionAndStackTraceToConsole = function (exception, title) {
        if (title === void 0) { title = "Unhandled exception"; }
        LZUTF8.log(LZUTF8.createErrorMessage(exception, title));
    };
    LZUTF8.getGlobalObject = function () {
        if (typeof global === "object")
            return global;
        else if (typeof window === "object")
            return window;
        else if (typeof self === "object")
            return self;
        else
            return {};
    };
    LZUTF8.toString = Object.prototype.toString;
    if (LZUTF8.commonJSAvailable())
        module.exports = LZUTF8;
})(LZUTF8 || (LZUTF8 = {}));
if (typeof Uint8Array === "function" && new Uint8Array(1).subarray(1).byteLength !== 0) {
    var subarray = function (start, end) {
        var clamp = function (v, min, max) { return v < min ? min : v > max ? max : v; };
        start = start | 0;
        end = end | 0;
        if (arguments.length < 1)
            start = 0;
        if (arguments.length < 2)
            end = this.length;
        if (start < 0)
            start = this.length + start;
        if (end < 0)
            end = this.length + end;
        start = clamp(start, 0, this.length);
        end = clamp(end, 0, this.length);
        var len = end - start;
        if (len < 0)
            len = 0;
        return new this.constructor(this.buffer, this.byteOffset + start * this.BYTES_PER_ELEMENT, len);
    };
    var types = ['Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array', 'Float32Array', 'Float64Array'];
    var globalObject = void 0;
    if (typeof window === "object")
        globalObject = window;
    else if (typeof self === "object")
        globalObject = self;
    if (globalObject !== undefined) {
        for (var i = 0; i < types.length; i++) {
            if (globalObject[types[i]])
                globalObject[types[i]].prototype.subarray = subarray;
        }
    }
}
var LZUTF8;
(function (LZUTF8) {
    var AsyncCompressor = (function () {
        function AsyncCompressor() {
        }
        AsyncCompressor.compressAsync = function (input, options, callback) {
            var timer = new LZUTF8.Timer();
            var compressor = new LZUTF8.Compressor();
            if (!callback)
                throw new TypeError("compressAsync: No callback argument given");
            if (typeof input === "string") {
                input = LZUTF8.encodeUTF8(input);
            }
            else if (input == null || !(input instanceof Uint8Array)) {
                callback(undefined, new TypeError("compressAsync: Invalid input argument, only 'string' and 'Uint8Array' are supported"));
                return;
            }
            var sourceBlocks = LZUTF8.ArrayTools.splitByteArray(input, options.blockSize);
            var compressedBlocks = [];
            var compressBlocksStartingAt = function (index) {
                if (index < sourceBlocks.length) {
                    var compressedBlock = void 0;
                    try {
                        compressedBlock = compressor.compressBlock(sourceBlocks[index]);
                    }
                    catch (e) {
                        callback(undefined, e);
                        return;
                    }
                    compressedBlocks.push(compressedBlock);
                    if (timer.getElapsedTime() <= 20) {
                        compressBlocksStartingAt(index + 1);
                    }
                    else {
                        LZUTF8.enqueueImmediate(function () { return compressBlocksStartingAt(index + 1); });
                        timer.restart();
                    }
                }
                else {
                    var joinedCompressedBlocks_1 = LZUTF8.ArrayTools.concatUint8Arrays(compressedBlocks);
                    LZUTF8.enqueueImmediate(function () {
                        var result;
                        try {
                            result = LZUTF8.CompressionCommon.encodeCompressedBytes(joinedCompressedBlocks_1, options.outputEncoding);
                        }
                        catch (e) {
                            callback(undefined, e);
                            return;
                        }
                        LZUTF8.enqueueImmediate(function () { return callback(result); });
                    });
                }
            };
            LZUTF8.enqueueImmediate(function () { return compressBlocksStartingAt(0); });
        };
        AsyncCompressor.createCompressionStream = function () {
            var compressor = new LZUTF8.Compressor();
            var NodeStream = __webpack_require__(/*! stream */ "./node_modules/stream-browserify/index.js");
            var compressionStream = new NodeStream.Transform({ decodeStrings: true, highWaterMark: 65536 });
            compressionStream._transform = function (data, encoding, done) {
                var buffer;
                try {
                    buffer = LZUTF8.BufferTools.uint8ArrayToBuffer(compressor.compressBlock(LZUTF8.BufferTools.bufferToUint8Array(data)));
                }
                catch (e) {
                    compressionStream.emit("error", e);
                    return;
                }
                compressionStream.push(buffer);
                done();
            };
            return compressionStream;
        };
        return AsyncCompressor;
    }());
    LZUTF8.AsyncCompressor = AsyncCompressor;
})(LZUTF8 || (LZUTF8 = {}));
var LZUTF8;
(function (LZUTF8) {
    var AsyncDecompressor = (function () {
        function AsyncDecompressor() {
        }
        AsyncDecompressor.decompressAsync = function (input, options, callback) {
            if (!callback)
                throw new TypeError("decompressAsync: No callback argument given");
            var timer = new LZUTF8.Timer();
            try {
                input = LZUTF8.CompressionCommon.decodeCompressedBytes(input, options.inputEncoding);
            }
            catch (e) {
                callback(undefined, e);
                return;
            }
            var decompressor = new LZUTF8.Decompressor();
            var sourceBlocks = LZUTF8.ArrayTools.splitByteArray(input, options.blockSize);
            var decompressedBlocks = [];
            var decompressBlocksStartingAt = function (index) {
                if (index < sourceBlocks.length) {
                    var decompressedBlock = void 0;
                    try {
                        decompressedBlock = decompressor.decompressBlock(sourceBlocks[index]);
                    }
                    catch (e) {
                        callback(undefined, e);
                        return;
                    }
                    decompressedBlocks.push(decompressedBlock);
                    if (timer.getElapsedTime() <= 20) {
                        decompressBlocksStartingAt(index + 1);
                    }
                    else {
                        LZUTF8.enqueueImmediate(function () { return decompressBlocksStartingAt(index + 1); });
                        timer.restart();
                    }
                }
                else {
                    var joinedDecompressedBlocks_1 = LZUTF8.ArrayTools.concatUint8Arrays(decompressedBlocks);
                    LZUTF8.enqueueImmediate(function () {
                        var result;
                        try {
                            result = LZUTF8.CompressionCommon.encodeDecompressedBytes(joinedDecompressedBlocks_1, options.outputEncoding);
                        }
                        catch (e) {
                            callback(undefined, e);
                            return;
                        }
                        LZUTF8.enqueueImmediate(function () { return callback(result); });
                    });
                }
            };
            LZUTF8.enqueueImmediate(function () { return decompressBlocksStartingAt(0); });
        };
        AsyncDecompressor.createDecompressionStream = function () {
            var decompressor = new LZUTF8.Decompressor();
            var NodeStream = __webpack_require__(/*! stream */ "./node_modules/stream-browserify/index.js");
            var decompressionStream = new NodeStream.Transform({ decodeStrings: true, highWaterMark: 65536 });
            decompressionStream._transform = function (data, encoding, done) {
                var buffer;
                try {
                    buffer = LZUTF8.BufferTools.uint8ArrayToBuffer(decompressor.decompressBlock(LZUTF8.BufferTools.bufferToUint8Array(data)));
                }
                catch (e) {
                    decompressionStream.emit("error", e);
                    return;
                }
                decompressionStream.push(buffer);
                done();
            };
            return decompressionStream;
        };
        return AsyncDecompressor;
    }());
    LZUTF8.AsyncDecompressor = AsyncDecompressor;
})(LZUTF8 || (LZUTF8 = {}));
var LZUTF8;
(function (LZUTF8) {
    var WebWorker;
    (function (WebWorker) {
        WebWorker.compressAsync = function (input, options, callback) {
            if (options.inputEncoding == "ByteArray") {
                if (!(input instanceof Uint8Array)) {
                    callback(undefined, new TypeError("compressAsync: input is not a Uint8Array"));
                    return;
                }
            }
            var request = {
                token: Math.random().toString(),
                type: "compress",
                data: input,
                inputEncoding: options.inputEncoding,
                outputEncoding: options.outputEncoding
            };
            var responseListener = function (e) {
                var response = e.data;
                if (!response || response.token != request.token)
                    return;
                WebWorker.globalWorker.removeEventListener("message", responseListener);
                if (response.type == "error")
                    callback(undefined, new Error(response.error));
                else
                    callback(response.data);
            };
            WebWorker.globalWorker.addEventListener("message", responseListener);
            WebWorker.globalWorker.postMessage(request, []);
        };
        WebWorker.decompressAsync = function (input, options, callback) {
            var request = {
                token: Math.random().toString(),
                type: "decompress",
                data: input,
                inputEncoding: options.inputEncoding,
                outputEncoding: options.outputEncoding
            };
            var responseListener = function (e) {
                var response = e.data;
                if (!response || response.token != request.token)
                    return;
                WebWorker.globalWorker.removeEventListener("message", responseListener);
                if (response.type == "error")
                    callback(undefined, new Error(response.error));
                else
                    callback(response.data);
            };
            WebWorker.globalWorker.addEventListener("message", responseListener);
            WebWorker.globalWorker.postMessage(request, []);
        };
        WebWorker.installWebWorkerIfNeeded = function () {
            if (typeof self == "object" && self.document === undefined && self.addEventListener != undefined) {
                self.addEventListener("message", function (e) {
                    var request = e.data;
                    if (request.type == "compress") {
                        var compressedData = void 0;
                        try {
                            compressedData = LZUTF8.compress(request.data, { outputEncoding: request.outputEncoding });
                        }
                        catch (e) {
                            self.postMessage({ token: request.token, type: "error", error: LZUTF8.createErrorMessage(e) }, []);
                            return;
                        }
                        var response = {
                            token: request.token,
                            type: "compressionResult",
                            data: compressedData,
                            encoding: request.outputEncoding,
                        };
                        if (response.data instanceof Uint8Array && navigator.appVersion.indexOf("MSIE 10") === -1)
                            self.postMessage(response, [response.data.buffer]);
                        else
                            self.postMessage(response, []);
                    }
                    else if (request.type == "decompress") {
                        var decompressedData = void 0;
                        try {
                            decompressedData = LZUTF8.decompress(request.data, { inputEncoding: request.inputEncoding, outputEncoding: request.outputEncoding });
                        }
                        catch (e) {
                            self.postMessage({ token: request.token, type: "error", error: LZUTF8.createErrorMessage(e) }, []);
                            return;
                        }
                        var response = {
                            token: request.token,
                            type: "decompressionResult",
                            data: decompressedData,
                            encoding: request.outputEncoding,
                        };
                        if (response.data instanceof Uint8Array && navigator.appVersion.indexOf("MSIE 10") === -1)
                            self.postMessage(response, [response.data.buffer]);
                        else
                            self.postMessage(response, []);
                    }
                });
                self.addEventListener("error", function (e) {
                    LZUTF8.log(LZUTF8.createErrorMessage(e.error, "Unexpected LZUTF8 WebWorker exception"));
                });
            }
        };
        WebWorker.createGlobalWorkerIfNeeded = function () {
            if (WebWorker.globalWorker)
                return true;
            if (!LZUTF8.webWorkersAvailable())
                return false;
            if (!WebWorker.scriptURI && typeof document === "object") {
                var scriptElement = document.getElementById("lzutf8");
                if (scriptElement != null)
                    WebWorker.scriptURI = scriptElement.getAttribute("src") || undefined;
            }
            if (WebWorker.scriptURI) {
                WebWorker.globalWorker = new Worker(WebWorker.scriptURI);
                return true;
            }
            else {
                return false;
            }
        };
        WebWorker.terminate = function () {
            if (WebWorker.globalWorker) {
                WebWorker.globalWorker.terminate();
                WebWorker.globalWorker = undefined;
            }
        };
    })(WebWorker = LZUTF8.WebWorker || (LZUTF8.WebWorker = {}));
    WebWorker.installWebWorkerIfNeeded();
})(LZUTF8 || (LZUTF8 = {}));
var LZUTF8;
(function (LZUTF8) {
    var ArraySegment = (function () {
        function ArraySegment(container, startPosition, length) {
            this.container = container;
            this.startPosition = startPosition;
            this.length = length;
        }
        ArraySegment.prototype.get = function (index) {
            return this.container[this.startPosition + index];
        };
        ArraySegment.prototype.getInReversedOrder = function (reverseIndex) {
            return this.container[this.startPosition + this.length - 1 - reverseIndex];
        };
        ArraySegment.prototype.set = function (index, value) {
            this.container[this.startPosition + index] = value;
        };
        return ArraySegment;
    }());
    LZUTF8.ArraySegment = ArraySegment;
})(LZUTF8 || (LZUTF8 = {}));
var LZUTF8;
(function (LZUTF8) {
    var ArrayTools;
    (function (ArrayTools) {
        ArrayTools.copyElements = function (source, sourceIndex, destination, destinationIndex, count) {
            while (count--)
                destination[destinationIndex++] = source[sourceIndex++];
        };
        ArrayTools.zeroElements = function (collection, index, count) {
            while (count--)
                collection[index++] = 0;
        };
        ArrayTools.countNonzeroValuesInArray = function (array) {
            var result = 0;
            for (var i = 0; i < array.length; i++)
                if (array[i])
                    result++;
            return result;
        };
        ArrayTools.truncateStartingElements = function (array, truncatedLength) {
            if (array.length <= truncatedLength)
                throw new RangeError("truncateStartingElements: Requested length should be smaller than array length");
            var sourcePosition = array.length - truncatedLength;
            for (var i = 0; i < truncatedLength; i++)
                array[i] = array[sourcePosition + i];
            array.length = truncatedLength;
        };
        ArrayTools.doubleByteArrayCapacity = function (array) {
            var newArray = new Uint8Array(array.length * 2);
            newArray.set(array);
            return newArray;
        };
        ArrayTools.concatUint8Arrays = function (arrays) {
            var totalLength = 0;
            for (var _i = 0, arrays_1 = arrays; _i < arrays_1.length; _i++) {
                var array = arrays_1[_i];
                totalLength += array.length;
            }
            var result = new Uint8Array(totalLength);
            var offset = 0;
            for (var _a = 0, arrays_2 = arrays; _a < arrays_2.length; _a++) {
                var array = arrays_2[_a];
                result.set(array, offset);
                offset += array.length;
            }
            return result;
        };
        ArrayTools.splitByteArray = function (byteArray, maxPartLength) {
            var result = [];
            for (var offset = 0; offset < byteArray.length;) {
                var blockLength = Math.min(maxPartLength, byteArray.length - offset);
                result.push(byteArray.subarray(offset, offset + blockLength));
                offset += blockLength;
            }
            return result;
        };
    })(ArrayTools = LZUTF8.ArrayTools || (LZUTF8.ArrayTools = {}));
})(LZUTF8 || (LZUTF8 = {}));
var LZUTF8;
(function (LZUTF8) {
    var BufferTools;
    (function (BufferTools) {
        BufferTools.convertToUint8ArrayIfNeeded = function (input) {
            if (typeof Buffer === "function" && Buffer.isBuffer(input))
                return BufferTools.bufferToUint8Array(input);
            else
                return input;
        };
        BufferTools.uint8ArrayToBuffer = function (arr) {
            if (Buffer.prototype instanceof Uint8Array) {
                var arrClone = new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
                Object["setPrototypeOf"](arrClone, Buffer.prototype);
                return arrClone;
            }
            else {
                var len = arr.length;
                var buf = new Buffer(len);
                for (var i = 0; i < len; i++)
                    buf[i] = arr[i];
                return buf;
            }
        };
        BufferTools.bufferToUint8Array = function (buf) {
            if (Buffer.prototype instanceof Uint8Array) {
                return new Uint8Array(buf["buffer"], buf["byteOffset"], buf["byteLength"]);
            }
            else {
                var len = buf.length;
                var arr = new Uint8Array(len);
                for (var i = 0; i < len; i++)
                    arr[i] = buf[i];
                return arr;
            }
        };
    })(BufferTools = LZUTF8.BufferTools || (LZUTF8.BufferTools = {}));
})(LZUTF8 || (LZUTF8 = {}));
var LZUTF8;
(function (LZUTF8) {
    var CompressionCommon;
    (function (CompressionCommon) {
        CompressionCommon.getCroppedBuffer = function (buffer, cropStartOffset, cropLength, additionalCapacity) {
            if (additionalCapacity === void 0) { additionalCapacity = 0; }
            var croppedBuffer = new Uint8Array(cropLength + additionalCapacity);
            croppedBuffer.set(buffer.subarray(cropStartOffset, cropStartOffset + cropLength));
            return croppedBuffer;
        };
        CompressionCommon.getCroppedAndAppendedByteArray = function (bytes, cropStartOffset, cropLength, byteArrayToAppend) {
            return LZUTF8.ArrayTools.concatUint8Arrays([bytes.subarray(cropStartOffset, cropStartOffset + cropLength), byteArrayToAppend]);
        };
        CompressionCommon.detectCompressionSourceEncoding = function (input) {
            if (input == null)
                throw new TypeError("detectCompressionSourceEncoding: input is null or undefined");
            if (typeof input === "string")
                return "String";
            else if (input instanceof Uint8Array || (typeof Buffer === "function" && Buffer.isBuffer(input)))
                return "ByteArray";
            else
                throw new TypeError("detectCompressionSourceEncoding: input must be of type 'string', 'Uint8Array' or 'Buffer'");
        };
        CompressionCommon.encodeCompressedBytes = function (compressedBytes, outputEncoding) {
            switch (outputEncoding) {
                case "ByteArray":
                    return compressedBytes;
                case "Buffer":
                    return LZUTF8.BufferTools.uint8ArrayToBuffer(compressedBytes);
                case "Base64":
                    return LZUTF8.encodeBase64(compressedBytes);
                case "BinaryString":
                    return LZUTF8.encodeBinaryString(compressedBytes);
                default:
                    throw new TypeError("encodeCompressedBytes: invalid output encoding requested");
            }
        };
        CompressionCommon.decodeCompressedBytes = function (compressedData, inputEncoding) {
            if (inputEncoding == null)
                throw new TypeError("decodeCompressedData: Input is null or undefined");
            switch (inputEncoding) {
                case "ByteArray":
                case "Buffer":
                    var normalizedBytes = LZUTF8.BufferTools.convertToUint8ArrayIfNeeded(compressedData);
                    if (!(normalizedBytes instanceof Uint8Array))
                        throw new TypeError("decodeCompressedData: 'ByteArray' or 'Buffer' input type was specified but input is not a Uint8Array or Buffer");
                    return normalizedBytes;
                case "Base64":
                    if (typeof compressedData !== "string")
                        throw new TypeError("decodeCompressedData: 'Base64' input type was specified but input is not a string");
                    return LZUTF8.decodeBase64(compressedData);
                case "BinaryString":
                    if (typeof compressedData !== "string")
                        throw new TypeError("decodeCompressedData: 'BinaryString' input type was specified but input is not a string");
                    return LZUTF8.decodeBinaryString(compressedData);
                default:
                    throw new TypeError("decodeCompressedData: invalid input encoding requested: '" + inputEncoding + "'");
            }
        };
        CompressionCommon.encodeDecompressedBytes = function (decompressedBytes, outputEncoding) {
            switch (outputEncoding) {
                case "String":
                    return LZUTF8.decodeUTF8(decompressedBytes);
                case "ByteArray":
                    return decompressedBytes;
                case "Buffer":
                    if (typeof Buffer !== "function")
                        throw new TypeError("encodeDecompressedBytes: a 'Buffer' type was specified but is not supported at the current envirnment");
                    return LZUTF8.BufferTools.uint8ArrayToBuffer(decompressedBytes);
                default:
                    throw new TypeError("encodeDecompressedBytes: invalid output encoding requested");
            }
        };
    })(CompressionCommon = LZUTF8.CompressionCommon || (LZUTF8.CompressionCommon = {}));
})(LZUTF8 || (LZUTF8 = {}));
var LZUTF8;
(function (LZUTF8) {
    var EventLoop;
    (function (EventLoop) {
        var queuedFunctions = [];
        var asyncFlushFunc;
        EventLoop.enqueueImmediate = function (func) {
            queuedFunctions.push(func);
            if (queuedFunctions.length === 1)
                asyncFlushFunc();
        };
        EventLoop.initializeScheduler = function () {
            var flush = function () {
                for (var _i = 0, queuedFunctions_1 = queuedFunctions; _i < queuedFunctions_1.length; _i++) {
                    var func = queuedFunctions_1[_i];
                    try {
                        func.call(undefined);
                    }
                    catch (exception) {
                        LZUTF8.printExceptionAndStackTraceToConsole(exception, "enqueueImmediate exception");
                    }
                }
                queuedFunctions.length = 0;
            };
            if (LZUTF8.runningInNodeJS()) {
                asyncFlushFunc = function () { return setImmediate(function () { return flush(); }); };
            }
            if (typeof window === "object" && typeof window.addEventListener === "function" && typeof window.postMessage === "function") {
                var token_1 = "enqueueImmediate-" + Math.random().toString();
                window.addEventListener("message", function (event) {
                    if (event.data === token_1)
                        flush();
                });
                var targetOrigin_1;
                if (LZUTF8.runningInNullOrigin())
                    targetOrigin_1 = '*';
                else
                    targetOrigin_1 = window.location.href;
                asyncFlushFunc = function () { return window.postMessage(token_1, targetOrigin_1); };
            }
            else if (typeof MessageChannel === "function" && typeof MessagePort === "function") {
                var channel_1 = new MessageChannel();
                channel_1.port1.onmessage = function () { return flush(); };
                asyncFlushFunc = function () { return channel_1.port2.postMessage(0); };
            }
            else {
                asyncFlushFunc = function () { return setTimeout(function () { return flush(); }, 0); };
            }
        };
        EventLoop.initializeScheduler();
    })(EventLoop = LZUTF8.EventLoop || (LZUTF8.EventLoop = {}));
    LZUTF8.enqueueImmediate = function (func) { return EventLoop.enqueueImmediate(func); };
})(LZUTF8 || (LZUTF8 = {}));
var LZUTF8;
(function (LZUTF8) {
    var ObjectTools;
    (function (ObjectTools) {
        ObjectTools.override = function (obj, newPropertyValues) {
            return ObjectTools.extend(obj, newPropertyValues);
        };
        ObjectTools.extend = function (obj, newProperties) {
            if (obj == null)
                throw new TypeError("obj is null or undefined");
            if (typeof obj !== "object")
                throw new TypeError("obj is not an object");
            if (newProperties == null)
                newProperties = {};
            if (typeof newProperties !== "object")
                throw new TypeError("newProperties is not an object");
            if (newProperties != null) {
                for (var property in newProperties)
                    obj[property] = newProperties[property];
            }
            return obj;
        };
    })(ObjectTools = LZUTF8.ObjectTools || (LZUTF8.ObjectTools = {}));
})(LZUTF8 || (LZUTF8 = {}));
var LZUTF8;
(function (LZUTF8) {
    LZUTF8.getRandomIntegerInRange = function (low, high) {
        return low + Math.floor(Math.random() * (high - low));
    };
    LZUTF8.getRandomUTF16StringOfLength = function (length) {
        var randomString = "";
        for (var i = 0; i < length; i++) {
            var randomCodePoint = void 0;
            do {
                randomCodePoint = LZUTF8.getRandomIntegerInRange(0, 0x10FFFF + 1);
            } while (randomCodePoint >= 0xD800 && randomCodePoint <= 0xDFFF);
            randomString += LZUTF8.Encoding.CodePoint.decodeToString(randomCodePoint);
        }
        return randomString;
    };
})(LZUTF8 || (LZUTF8 = {}));
var LZUTF8;
(function (LZUTF8) {
    var StringBuilder = (function () {
        function StringBuilder(outputBufferCapacity) {
            if (outputBufferCapacity === void 0) { outputBufferCapacity = 1024; }
            this.outputBufferCapacity = outputBufferCapacity;
            this.outputPosition = 0;
            this.outputString = "";
            this.outputBuffer = new Uint16Array(this.outputBufferCapacity);
        }
        StringBuilder.prototype.appendCharCode = function (charCode) {
            this.outputBuffer[this.outputPosition++] = charCode;
            if (this.outputPosition === this.outputBufferCapacity)
                this.flushBufferToOutputString();
        };
        StringBuilder.prototype.appendCharCodes = function (charCodes) {
            for (var i = 0, length_1 = charCodes.length; i < length_1; i++)
                this.appendCharCode(charCodes[i]);
        };
        StringBuilder.prototype.appendString = function (str) {
            for (var i = 0, length_2 = str.length; i < length_2; i++)
                this.appendCharCode(str.charCodeAt(i));
        };
        StringBuilder.prototype.appendCodePoint = function (codePoint) {
            if (codePoint <= 0xFFFF) {
                this.appendCharCode(codePoint);
            }
            else if (codePoint <= 0x10FFFF) {
                this.appendCharCode(0xD800 + ((codePoint - 0x10000) >>> 10));
                this.appendCharCode(0xDC00 + ((codePoint - 0x10000) & 1023));
            }
            else
                throw new Error("appendCodePoint: A code point of " + codePoint + " cannot be encoded in UTF-16");
        };
        StringBuilder.prototype.getOutputString = function () {
            this.flushBufferToOutputString();
            return this.outputString;
        };
        StringBuilder.prototype.flushBufferToOutputString = function () {
            if (this.outputPosition === this.outputBufferCapacity)
                this.outputString += String.fromCharCode.apply(null, this.outputBuffer);
            else
                this.outputString += String.fromCharCode.apply(null, this.outputBuffer.subarray(0, this.outputPosition));
            this.outputPosition = 0;
        };
        return StringBuilder;
    }());
    LZUTF8.StringBuilder = StringBuilder;
})(LZUTF8 || (LZUTF8 = {}));
var LZUTF8;
(function (LZUTF8) {
    var Timer = (function () {
        function Timer() {
            this.restart();
        }
        Timer.prototype.restart = function () {
            this.startTime = Timer.getTimestamp();
        };
        Timer.prototype.getElapsedTime = function () {
            return Timer.getTimestamp() - this.startTime;
        };
        Timer.prototype.getElapsedTimeAndRestart = function () {
            var elapsedTime = this.getElapsedTime();
            this.restart();
            return elapsedTime;
        };
        Timer.prototype.logAndRestart = function (title, logToDocument) {
            if (logToDocument === void 0) { logToDocument = true; }
            var elapsedTime = this.getElapsedTime();
            var message = title + ": " + elapsedTime.toFixed(3) + "ms";
            LZUTF8.log(message, logToDocument);
            this.restart();
            return elapsedTime;
        };
        Timer.getTimestamp = function () {
            if (!this.timestampFunc)
                this.createGlobalTimestampFunction();
            return this.timestampFunc();
        };
        Timer.getMicrosecondTimestamp = function () {
            return Math.floor(Timer.getTimestamp() * 1000);
        };
        Timer.createGlobalTimestampFunction = function () {
            if (typeof process === "object" && typeof process.hrtime === "function") {
                var baseTimestamp_1 = 0;
                this.timestampFunc = function () {
                    var nodeTimeStamp = process.hrtime();
                    var millisecondTime = (nodeTimeStamp[0] * 1000) + (nodeTimeStamp[1] / 1000000);
                    return baseTimestamp_1 + millisecondTime;
                };
                baseTimestamp_1 = Date.now() - this.timestampFunc();
            }
            else if (typeof chrome === "object" && chrome.Interval) {
                var baseTimestamp_2 = Date.now();
                var chromeIntervalObject_1 = new chrome.Interval();
                chromeIntervalObject_1.start();
                this.timestampFunc = function () { return baseTimestamp_2 + chromeIntervalObject_1.microseconds() / 1000; };
            }
            else if (typeof performance === "object" && performance.now) {
                var baseTimestamp_3 = Date.now() - performance.now();
                this.timestampFunc = function () { return baseTimestamp_3 + performance.now(); };
            }
            else if (Date.now) {
                this.timestampFunc = function () { return Date.now(); };
            }
            else {
                this.timestampFunc = function () { return (new Date()).getTime(); };
            }
        };
        return Timer;
    }());
    LZUTF8.Timer = Timer;
})(LZUTF8 || (LZUTF8 = {}));
var LZUTF8;
(function (LZUTF8) {
    var Compressor = (function () {
        function Compressor(useCustomHashTable) {
            if (useCustomHashTable === void 0) { useCustomHashTable = true; }
            this.MinimumSequenceLength = 4;
            this.MaximumSequenceLength = 31;
            this.MaximumMatchDistance = 32767;
            this.PrefixHashTableSize = 65537;
            this.inputBufferStreamOffset = 1;
            if (useCustomHashTable && typeof Uint32Array == "function")
                this.prefixHashTable = new LZUTF8.CompressorCustomHashTable(this.PrefixHashTableSize);
            else
                this.prefixHashTable = new LZUTF8.CompressorSimpleHashTable(this.PrefixHashTableSize);
        }
        Compressor.prototype.compressBlock = function (input) {
            if (input === undefined || input === null)
                throw new TypeError("compressBlock: undefined or null input received");
            if (typeof input == "string")
                input = LZUTF8.encodeUTF8(input);
            input = LZUTF8.BufferTools.convertToUint8ArrayIfNeeded(input);
            return this.compressUtf8Block(input);
        };
        Compressor.prototype.compressUtf8Block = function (utf8Bytes) {
            if (!utf8Bytes || utf8Bytes.length == 0)
                return new Uint8Array(0);
            var bufferStartingReadOffset = this.cropAndAddNewBytesToInputBuffer(utf8Bytes);
            var inputBuffer = this.inputBuffer;
            var inputBufferLength = this.inputBuffer.length;
            this.outputBuffer = new Uint8Array(utf8Bytes.length);
            this.outputBufferPosition = 0;
            var latestMatchEndPosition = 0;
            for (var readPosition = bufferStartingReadOffset; readPosition < inputBufferLength; readPosition++) {
                var inputValue = inputBuffer[readPosition];
                var withinAMatchedRange = readPosition < latestMatchEndPosition;
                if (readPosition > inputBufferLength - this.MinimumSequenceLength) {
                    if (!withinAMatchedRange)
                        this.outputRawByte(inputValue);
                    continue;
                }
                var targetBucketIndex = this.getBucketIndexForPrefix(readPosition);
                if (!withinAMatchedRange) {
                    var matchLocator = this.findLongestMatch(readPosition, targetBucketIndex);
                    if (matchLocator != null) {
                        this.outputPointerBytes(matchLocator.length, matchLocator.distance);
                        latestMatchEndPosition = readPosition + matchLocator.length;
                        withinAMatchedRange = true;
                    }
                }
                if (!withinAMatchedRange)
                    this.outputRawByte(inputValue);
                var inputStreamPosition = this.inputBufferStreamOffset + readPosition;
                this.prefixHashTable.addValueToBucket(targetBucketIndex, inputStreamPosition);
            }
            return this.outputBuffer.subarray(0, this.outputBufferPosition);
        };
        Compressor.prototype.findLongestMatch = function (matchedSequencePosition, bucketIndex) {
            var bucket = this.prefixHashTable.getArraySegmentForBucketIndex(bucketIndex, this.reusableArraySegmentObject);
            if (bucket == null)
                return null;
            var input = this.inputBuffer;
            var longestMatchDistance;
            var longestMatchLength = 0;
            for (var i = 0; i < bucket.length; i++) {
                var testedSequencePosition = bucket.getInReversedOrder(i) - this.inputBufferStreamOffset;
                var testedSequenceDistance = matchedSequencePosition - testedSequencePosition;
                var lengthToSurpass = void 0;
                if (longestMatchDistance === undefined)
                    lengthToSurpass = this.MinimumSequenceLength - 1;
                else if (longestMatchDistance < 128 && testedSequenceDistance >= 128)
                    lengthToSurpass = longestMatchLength + (longestMatchLength >>> 1);
                else
                    lengthToSurpass = longestMatchLength;
                if (testedSequenceDistance > this.MaximumMatchDistance ||
                    lengthToSurpass >= this.MaximumSequenceLength ||
                    matchedSequencePosition + lengthToSurpass >= input.length)
                    break;
                if (input[testedSequencePosition + lengthToSurpass] !== input[matchedSequencePosition + lengthToSurpass])
                    continue;
                for (var offset = 0;; offset++) {
                    if (matchedSequencePosition + offset === input.length ||
                        input[testedSequencePosition + offset] !== input[matchedSequencePosition + offset]) {
                        if (offset > lengthToSurpass) {
                            longestMatchDistance = testedSequenceDistance;
                            longestMatchLength = offset;
                        }
                        break;
                    }
                    else if (offset === this.MaximumSequenceLength)
                        return { distance: testedSequenceDistance, length: this.MaximumSequenceLength };
                }
            }
            if (longestMatchDistance !== undefined)
                return { distance: longestMatchDistance, length: longestMatchLength };
            else
                return null;
        };
        Compressor.prototype.getBucketIndexForPrefix = function (startPosition) {
            return (this.inputBuffer[startPosition] * 7880599 +
                this.inputBuffer[startPosition + 1] * 39601 +
                this.inputBuffer[startPosition + 2] * 199 +
                this.inputBuffer[startPosition + 3]) % this.PrefixHashTableSize;
        };
        Compressor.prototype.outputPointerBytes = function (length, distance) {
            if (distance < 128) {
                this.outputRawByte(192 | length);
                this.outputRawByte(distance);
            }
            else {
                this.outputRawByte(224 | length);
                this.outputRawByte(distance >>> 8);
                this.outputRawByte(distance & 255);
            }
        };
        Compressor.prototype.outputRawByte = function (value) {
            this.outputBuffer[this.outputBufferPosition++] = value;
        };
        Compressor.prototype.cropAndAddNewBytesToInputBuffer = function (newInput) {
            if (this.inputBuffer === undefined) {
                this.inputBuffer = newInput;
                return 0;
            }
            else {
                var cropLength = Math.min(this.inputBuffer.length, this.MaximumMatchDistance);
                var cropStartOffset = this.inputBuffer.length - cropLength;
                this.inputBuffer = LZUTF8.CompressionCommon.getCroppedAndAppendedByteArray(this.inputBuffer, cropStartOffset, cropLength, newInput);
                this.inputBufferStreamOffset += cropStartOffset;
                return cropLength;
            }
        };
        return Compressor;
    }());
    LZUTF8.Compressor = Compressor;
})(LZUTF8 || (LZUTF8 = {}));
var LZUTF8;
(function (LZUTF8) {
    var CompressorCustomHashTable = (function () {
        function CompressorCustomHashTable(bucketCount) {
            this.minimumBucketCapacity = 4;
            this.maximumBucketCapacity = 64;
            this.bucketLocators = new Uint32Array(bucketCount * 2);
            this.storage = new Uint32Array(bucketCount * 2);
            this.storageIndex = 1;
        }
        CompressorCustomHashTable.prototype.addValueToBucket = function (bucketIndex, valueToAdd) {
            bucketIndex <<= 1;
            if (this.storageIndex >= (this.storage.length >>> 1))
                this.compact();
            var startPosition = this.bucketLocators[bucketIndex];
            var length;
            if (startPosition === 0) {
                startPosition = this.storageIndex;
                length = 1;
                this.storage[this.storageIndex] = valueToAdd;
                this.storageIndex += this.minimumBucketCapacity;
            }
            else {
                length = this.bucketLocators[bucketIndex + 1];
                if (length === this.maximumBucketCapacity - 1)
                    length = this.truncateBucketToNewerElements(startPosition, length, this.maximumBucketCapacity / 2);
                var endPosition = startPosition + length;
                if (this.storage[endPosition] === 0) {
                    this.storage[endPosition] = valueToAdd;
                    if (endPosition === this.storageIndex)
                        this.storageIndex += length;
                }
                else {
                    LZUTF8.ArrayTools.copyElements(this.storage, startPosition, this.storage, this.storageIndex, length);
                    startPosition = this.storageIndex;
                    this.storageIndex += length;
                    this.storage[this.storageIndex++] = valueToAdd;
                    this.storageIndex += length;
                }
                length++;
            }
            this.bucketLocators[bucketIndex] = startPosition;
            this.bucketLocators[bucketIndex + 1] = length;
        };
        CompressorCustomHashTable.prototype.truncateBucketToNewerElements = function (startPosition, bucketLength, truncatedBucketLength) {
            var sourcePosition = startPosition + bucketLength - truncatedBucketLength;
            LZUTF8.ArrayTools.copyElements(this.storage, sourcePosition, this.storage, startPosition, truncatedBucketLength);
            LZUTF8.ArrayTools.zeroElements(this.storage, startPosition + truncatedBucketLength, bucketLength - truncatedBucketLength);
            return truncatedBucketLength;
        };
        CompressorCustomHashTable.prototype.compact = function () {
            var oldBucketLocators = this.bucketLocators;
            var oldStorage = this.storage;
            this.bucketLocators = new Uint32Array(this.bucketLocators.length);
            this.storageIndex = 1;
            for (var bucketIndex = 0; bucketIndex < oldBucketLocators.length; bucketIndex += 2) {
                var length_3 = oldBucketLocators[bucketIndex + 1];
                if (length_3 === 0)
                    continue;
                this.bucketLocators[bucketIndex] = this.storageIndex;
                this.bucketLocators[bucketIndex + 1] = length_3;
                this.storageIndex += Math.max(Math.min(length_3 * 2, this.maximumBucketCapacity), this.minimumBucketCapacity);
            }
            this.storage = new Uint32Array(this.storageIndex * 8);
            for (var bucketIndex = 0; bucketIndex < oldBucketLocators.length; bucketIndex += 2) {
                var sourcePosition = oldBucketLocators[bucketIndex];
                if (sourcePosition === 0)
                    continue;
                var destPosition = this.bucketLocators[bucketIndex];
                var length_4 = this.bucketLocators[bucketIndex + 1];
                LZUTF8.ArrayTools.copyElements(oldStorage, sourcePosition, this.storage, destPosition, length_4);
            }
        };
        CompressorCustomHashTable.prototype.getArraySegmentForBucketIndex = function (bucketIndex, outputObject) {
            bucketIndex <<= 1;
            var startPosition = this.bucketLocators[bucketIndex];
            if (startPosition === 0)
                return null;
            if (outputObject === undefined)
                outputObject = new LZUTF8.ArraySegment(this.storage, startPosition, this.bucketLocators[bucketIndex + 1]);
            return outputObject;
        };
        CompressorCustomHashTable.prototype.getUsedBucketCount = function () {
            return Math.floor(LZUTF8.ArrayTools.countNonzeroValuesInArray(this.bucketLocators) / 2);
        };
        CompressorCustomHashTable.prototype.getTotalElementCount = function () {
            var result = 0;
            for (var i = 0; i < this.bucketLocators.length; i += 2)
                result += this.bucketLocators[i + 1];
            return result;
        };
        return CompressorCustomHashTable;
    }());
    LZUTF8.CompressorCustomHashTable = CompressorCustomHashTable;
})(LZUTF8 || (LZUTF8 = {}));
var LZUTF8;
(function (LZUTF8) {
    var CompressorSimpleHashTable = (function () {
        function CompressorSimpleHashTable(size) {
            this.maximumBucketCapacity = 64;
            this.buckets = new Array(size);
        }
        CompressorSimpleHashTable.prototype.addValueToBucket = function (bucketIndex, valueToAdd) {
            var bucket = this.buckets[bucketIndex];
            if (bucket === undefined) {
                this.buckets[bucketIndex] = [valueToAdd];
            }
            else {
                if (bucket.length === this.maximumBucketCapacity - 1)
                    LZUTF8.ArrayTools.truncateStartingElements(bucket, this.maximumBucketCapacity / 2);
                bucket.push(valueToAdd);
            }
        };
        CompressorSimpleHashTable.prototype.getArraySegmentForBucketIndex = function (bucketIndex, outputObject) {
            var bucket = this.buckets[bucketIndex];
            if (bucket === undefined)
                return null;
            if (outputObject === undefined)
                outputObject = new LZUTF8.ArraySegment(bucket, 0, bucket.length);
            return outputObject;
        };
        CompressorSimpleHashTable.prototype.getUsedBucketCount = function () {
            return LZUTF8.ArrayTools.countNonzeroValuesInArray(this.buckets);
        };
        CompressorSimpleHashTable.prototype.getTotalElementCount = function () {
            var currentSum = 0;
            for (var i = 0; i < this.buckets.length; i++) {
                if (this.buckets[i] !== undefined)
                    currentSum += this.buckets[i].length;
            }
            return currentSum;
        };
        return CompressorSimpleHashTable;
    }());
    LZUTF8.CompressorSimpleHashTable = CompressorSimpleHashTable;
})(LZUTF8 || (LZUTF8 = {}));
var LZUTF8;
(function (LZUTF8) {
    var Decompressor = (function () {
        function Decompressor() {
            this.MaximumMatchDistance = 32767;
            this.outputPosition = 0;
        }
        Decompressor.prototype.decompressBlockToString = function (input) {
            input = LZUTF8.BufferTools.convertToUint8ArrayIfNeeded(input);
            return LZUTF8.decodeUTF8(this.decompressBlock(input));
        };
        Decompressor.prototype.decompressBlock = function (input) {
            if (this.inputBufferRemainder) {
                input = LZUTF8.ArrayTools.concatUint8Arrays([this.inputBufferRemainder, input]);
                this.inputBufferRemainder = undefined;
            }
            var outputStartPosition = this.cropOutputBufferToWindowAndInitialize(Math.max(input.length * 4, 1024));
            for (var readPosition = 0, inputLength = input.length; readPosition < inputLength; readPosition++) {
                var inputValue = input[readPosition];
                if (inputValue >>> 6 != 3) {
                    this.outputByte(inputValue);
                    continue;
                }
                var sequenceLengthIdentifier = inputValue >>> 5;
                if (readPosition == inputLength - 1 ||
                    (readPosition == inputLength - 2 && sequenceLengthIdentifier == 7)) {
                    this.inputBufferRemainder = input.subarray(readPosition);
                    break;
                }
                if (input[readPosition + 1] >>> 7 === 1) {
                    this.outputByte(inputValue);
                }
                else {
                    var matchLength = inputValue & 31;
                    var matchDistance = void 0;
                    if (sequenceLengthIdentifier == 6) {
                        matchDistance = input[readPosition + 1];
                        readPosition += 1;
                    }
                    else {
                        matchDistance = (input[readPosition + 1] << 8) | (input[readPosition + 2]);
                        readPosition += 2;
                    }
                    var matchPosition = this.outputPosition - matchDistance;
                    for (var offset = 0; offset < matchLength; offset++)
                        this.outputByte(this.outputBuffer[matchPosition + offset]);
                }
            }
            this.rollBackIfOutputBufferEndsWithATruncatedMultibyteSequence();
            return LZUTF8.CompressionCommon.getCroppedBuffer(this.outputBuffer, outputStartPosition, this.outputPosition - outputStartPosition);
        };
        Decompressor.prototype.outputByte = function (value) {
            if (this.outputPosition === this.outputBuffer.length)
                this.outputBuffer = LZUTF8.ArrayTools.doubleByteArrayCapacity(this.outputBuffer);
            this.outputBuffer[this.outputPosition++] = value;
        };
        Decompressor.prototype.cropOutputBufferToWindowAndInitialize = function (initialCapacity) {
            if (!this.outputBuffer) {
                this.outputBuffer = new Uint8Array(initialCapacity);
                return 0;
            }
            var cropLength = Math.min(this.outputPosition, this.MaximumMatchDistance);
            this.outputBuffer = LZUTF8.CompressionCommon.getCroppedBuffer(this.outputBuffer, this.outputPosition - cropLength, cropLength, initialCapacity);
            this.outputPosition = cropLength;
            if (this.outputBufferRemainder) {
                for (var i = 0; i < this.outputBufferRemainder.length; i++)
                    this.outputByte(this.outputBufferRemainder[i]);
                this.outputBufferRemainder = undefined;
            }
            return cropLength;
        };
        Decompressor.prototype.rollBackIfOutputBufferEndsWithATruncatedMultibyteSequence = function () {
            for (var offset = 1; offset <= 4 && this.outputPosition - offset >= 0; offset++) {
                var value = this.outputBuffer[this.outputPosition - offset];
                if ((offset < 4 && (value >>> 3) === 30) ||
                    (offset < 3 && (value >>> 4) === 14) ||
                    (offset < 2 && (value >>> 5) === 6)) {
                    this.outputBufferRemainder = this.outputBuffer.subarray(this.outputPosition - offset, this.outputPosition);
                    this.outputPosition -= offset;
                    return;
                }
            }
        };
        return Decompressor;
    }());
    LZUTF8.Decompressor = Decompressor;
})(LZUTF8 || (LZUTF8 = {}));
var LZUTF8;
(function (LZUTF8) {
    var Encoding;
    (function (Encoding) {
        var Base64;
        (function (Base64) {
            var charCodeMap = new Uint8Array([65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47]);
            var reverseCharCodeMap = new Uint8Array([255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 62, 255, 255, 255, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 255, 255, 255, 0, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 255, 255, 255, 255]);
            var paddingCharacter = "=";
            var paddingCharCode = 61;
            Base64.encode = function (inputBytes) {
                if (!inputBytes || inputBytes.length == 0)
                    return "";
                if (LZUTF8.runningInNodeJS()) {
                    return (LZUTF8.BufferTools.uint8ArrayToBuffer(inputBytes)).toString("base64");
                }
                else {
                    return Base64.encodeWithJS(inputBytes);
                }
            };
            Base64.decode = function (base64String) {
                if (!base64String)
                    return new Uint8Array(0);
                if (LZUTF8.runningInNodeJS()) {
                    return LZUTF8.BufferTools.bufferToUint8Array(new Buffer(base64String, "base64"));
                }
                else {
                    return Base64.decodeWithJS(base64String);
                }
            };
            Base64.encodeWithJS = function (inputBytes, addPadding) {
                if (addPadding === void 0) { addPadding = true; }
                if (!inputBytes || inputBytes.length == 0)
                    return "";
                var map = charCodeMap;
                var output = new LZUTF8.StringBuilder();
                var uint24;
                for (var readPosition = 0, length_5 = inputBytes.length; readPosition < length_5; readPosition += 3) {
                    if (readPosition <= length_5 - 3) {
                        uint24 = inputBytes[readPosition] << 16 | inputBytes[readPosition + 1] << 8 | inputBytes[readPosition + 2];
                        output.appendCharCode(map[(uint24 >>> 18) & 63]);
                        output.appendCharCode(map[(uint24 >>> 12) & 63]);
                        output.appendCharCode(map[(uint24 >>> 6) & 63]);
                        output.appendCharCode(map[(uint24) & 63]);
                        uint24 = 0;
                    }
                    else if (readPosition === length_5 - 2) {
                        uint24 = inputBytes[readPosition] << 16 | inputBytes[readPosition + 1] << 8;
                        output.appendCharCode(map[(uint24 >>> 18) & 63]);
                        output.appendCharCode(map[(uint24 >>> 12) & 63]);
                        output.appendCharCode(map[(uint24 >>> 6) & 63]);
                        if (addPadding)
                            output.appendCharCode(paddingCharCode);
                    }
                    else if (readPosition === length_5 - 1) {
                        uint24 = inputBytes[readPosition] << 16;
                        output.appendCharCode(map[(uint24 >>> 18) & 63]);
                        output.appendCharCode(map[(uint24 >>> 12) & 63]);
                        if (addPadding) {
                            output.appendCharCode(paddingCharCode);
                            output.appendCharCode(paddingCharCode);
                        }
                    }
                }
                return output.getOutputString();
            };
            Base64.decodeWithJS = function (base64String, outputBuffer) {
                if (!base64String || base64String.length == 0)
                    return new Uint8Array(0);
                var lengthModulo4 = base64String.length % 4;
                if (lengthModulo4 === 1)
                    throw new Error("Invalid Base64 string: length % 4 == 1");
                else if (lengthModulo4 === 2)
                    base64String += paddingCharacter + paddingCharacter;
                else if (lengthModulo4 === 3)
                    base64String += paddingCharacter;
                if (!outputBuffer)
                    outputBuffer = new Uint8Array(base64String.length);
                var outputPosition = 0;
                var length = base64String.length;
                for (var i = 0; i < length; i += 4) {
                    var uint24 = (reverseCharCodeMap[base64String.charCodeAt(i)] << 18) |
                        (reverseCharCodeMap[base64String.charCodeAt(i + 1)] << 12) |
                        (reverseCharCodeMap[base64String.charCodeAt(i + 2)] << 6) |
                        (reverseCharCodeMap[base64String.charCodeAt(i + 3)]);
                    outputBuffer[outputPosition++] = (uint24 >>> 16) & 255;
                    outputBuffer[outputPosition++] = (uint24 >>> 8) & 255;
                    outputBuffer[outputPosition++] = (uint24) & 255;
                }
                if (base64String.charCodeAt(length - 1) == paddingCharCode)
                    outputPosition--;
                if (base64String.charCodeAt(length - 2) == paddingCharCode)
                    outputPosition--;
                return outputBuffer.subarray(0, outputPosition);
            };
        })(Base64 = Encoding.Base64 || (Encoding.Base64 = {}));
    })(Encoding = LZUTF8.Encoding || (LZUTF8.Encoding = {}));
})(LZUTF8 || (LZUTF8 = {}));
var LZUTF8;
(function (LZUTF8) {
    var Encoding;
    (function (Encoding) {
        var BinaryString;
        (function (BinaryString) {
            BinaryString.encode = function (input) {
                if (input == null)
                    throw new TypeError("BinaryString.encode: undefined or null input received");
                if (input.length === 0)
                    return "";
                var inputLength = input.length;
                var outputStringBuilder = new LZUTF8.StringBuilder();
                var remainder = 0;
                var state = 1;
                for (var i = 0; i < inputLength; i += 2) {
                    var value = void 0;
                    if (i == inputLength - 1)
                        value = (input[i] << 8);
                    else
                        value = (input[i] << 8) | input[i + 1];
                    outputStringBuilder.appendCharCode((remainder << (16 - state)) | value >>> state);
                    remainder = value & ((1 << state) - 1);
                    if (state === 15) {
                        outputStringBuilder.appendCharCode(remainder);
                        remainder = 0;
                        state = 1;
                    }
                    else {
                        state += 1;
                    }
                    if (i >= inputLength - 2)
                        outputStringBuilder.appendCharCode(remainder << (16 - state));
                }
                outputStringBuilder.appendCharCode(32768 | (inputLength % 2));
                return outputStringBuilder.getOutputString();
            };
            BinaryString.decode = function (input) {
                if (typeof input !== "string")
                    throw new TypeError("BinaryString.decode: invalid input type");
                if (input == "")
                    return new Uint8Array(0);
                var output = new Uint8Array(input.length * 3);
                var outputPosition = 0;
                var appendToOutput = function (value) {
                    output[outputPosition++] = value >>> 8;
                    output[outputPosition++] = value & 255;
                };
                var remainder = 0;
                var state = 0;
                for (var i = 0; i < input.length; i++) {
                    var value = input.charCodeAt(i);
                    if (value >= 32768) {
                        if (value == (32768 | 1))
                            outputPosition--;
                        state = 0;
                        continue;
                    }
                    if (state == 0) {
                        remainder = value;
                    }
                    else {
                        appendToOutput((remainder << state) | (value >>> (15 - state)));
                        remainder = value & ((1 << (15 - state)) - 1);
                    }
                    if (state == 15)
                        state = 0;
                    else
                        state += 1;
                }
                return output.subarray(0, outputPosition);
            };
        })(BinaryString = Encoding.BinaryString || (Encoding.BinaryString = {}));
    })(Encoding = LZUTF8.Encoding || (LZUTF8.Encoding = {}));
})(LZUTF8 || (LZUTF8 = {}));
var LZUTF8;
(function (LZUTF8) {
    var Encoding;
    (function (Encoding) {
        var CodePoint;
        (function (CodePoint) {
            CodePoint.encodeFromString = function (str, position) {
                var charCode = str.charCodeAt(position);
                if (charCode < 0xD800 || charCode > 0xDBFF)
                    return charCode;
                else {
                    var nextCharCode = str.charCodeAt(position + 1);
                    if (nextCharCode >= 0xDC00 && nextCharCode <= 0xDFFF)
                        return 0x10000 + (((charCode - 0xD800) << 10) + (nextCharCode - 0xDC00));
                    else
                        throw new Error("getUnicodeCodePoint: Received a lead surrogate character, char code " + charCode + ", followed by " + nextCharCode + ", which is not a trailing surrogate character code.");
                }
            };
            CodePoint.decodeToString = function (codePoint) {
                if (codePoint <= 0xFFFF)
                    return String.fromCharCode(codePoint);
                else if (codePoint <= 0x10FFFF)
                    return String.fromCharCode(0xD800 + ((codePoint - 0x10000) >>> 10), 0xDC00 + ((codePoint - 0x10000) & 1023));
                else
                    throw new Error("getStringFromUnicodeCodePoint: A code point of " + codePoint + " cannot be encoded in UTF-16");
            };
        })(CodePoint = Encoding.CodePoint || (Encoding.CodePoint = {}));
    })(Encoding = LZUTF8.Encoding || (LZUTF8.Encoding = {}));
})(LZUTF8 || (LZUTF8 = {}));
var LZUTF8;
(function (LZUTF8) {
    var Encoding;
    (function (Encoding) {
        var DecimalString;
        (function (DecimalString) {
            var lookupTable = ["000", "001", "002", "003", "004", "005", "006", "007", "008", "009", "010", "011", "012", "013", "014", "015", "016", "017", "018", "019", "020", "021", "022", "023", "024", "025", "026", "027", "028", "029", "030", "031", "032", "033", "034", "035", "036", "037", "038", "039", "040", "041", "042", "043", "044", "045", "046", "047", "048", "049", "050", "051", "052", "053", "054", "055", "056", "057", "058", "059", "060", "061", "062", "063", "064", "065", "066", "067", "068", "069", "070", "071", "072", "073", "074", "075", "076", "077", "078", "079", "080", "081", "082", "083", "084", "085", "086", "087", "088", "089", "090", "091", "092", "093", "094", "095", "096", "097", "098", "099", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "128", "129", "130", "131", "132", "133", "134", "135", "136", "137", "138", "139", "140", "141", "142", "143", "144", "145", "146", "147", "148", "149", "150", "151", "152", "153", "154", "155", "156", "157", "158", "159", "160", "161", "162", "163", "164", "165", "166", "167", "168", "169", "170", "171", "172", "173", "174", "175", "176", "177", "178", "179", "180", "181", "182", "183", "184", "185", "186", "187", "188", "189", "190", "191", "192", "193", "194", "195", "196", "197", "198", "199", "200", "201", "202", "203", "204", "205", "206", "207", "208", "209", "210", "211", "212", "213", "214", "215", "216", "217", "218", "219", "220", "221", "222", "223", "224", "225", "226", "227", "228", "229", "230", "231", "232", "233", "234", "235", "236", "237", "238", "239", "240", "241", "242", "243", "244", "245", "246", "247", "248", "249", "250", "251", "252", "253", "254", "255"];
            DecimalString.encode = function (binaryBytes) {
                var resultArray = [];
                for (var i = 0; i < binaryBytes.length; i++)
                    resultArray.push(lookupTable[binaryBytes[i]]);
                return resultArray.join(" ");
            };
        })(DecimalString = Encoding.DecimalString || (Encoding.DecimalString = {}));
    })(Encoding = LZUTF8.Encoding || (LZUTF8.Encoding = {}));
})(LZUTF8 || (LZUTF8 = {}));
var LZUTF8;
(function (LZUTF8) {
    var Encoding;
    (function (Encoding) {
        var UTF8;
        (function (UTF8) {
            var nativeTextEncoder;
            var nativeTextDecoder;
            UTF8.encode = function (str) {
                if (!str || str.length == 0)
                    return new Uint8Array(0);
                if (LZUTF8.runningInNodeJS()) {
                    return LZUTF8.BufferTools.bufferToUint8Array(new Buffer(str, "utf8"));
                }
                else if (UTF8.createNativeTextEncoderAndDecoderIfAvailable()) {
                    return nativeTextEncoder.encode(str);
                }
                else {
                    return UTF8.encodeWithJS(str);
                }
            };
            UTF8.decode = function (utf8Bytes) {
                if (!utf8Bytes || utf8Bytes.length == 0)
                    return "";
                if (LZUTF8.runningInNodeJS()) {
                    return LZUTF8.BufferTools.uint8ArrayToBuffer(utf8Bytes).toString("utf8");
                }
                else if (UTF8.createNativeTextEncoderAndDecoderIfAvailable()) {
                    return nativeTextDecoder.decode(utf8Bytes);
                }
                else {
                    return UTF8.decodeWithJS(utf8Bytes);
                }
            };
            UTF8.encodeWithJS = function (str, outputArray) {
                if (!str || str.length == 0)
                    return new Uint8Array(0);
                if (!outputArray)
                    outputArray = new Uint8Array(str.length * 4);
                var writeIndex = 0;
                for (var readIndex = 0; readIndex < str.length; readIndex++) {
                    var charCode = Encoding.CodePoint.encodeFromString(str, readIndex);
                    if (charCode <= 0x7F) {
                        outputArray[writeIndex++] = charCode;
                    }
                    else if (charCode <= 0x7FF) {
                        outputArray[writeIndex++] = 0xC0 | (charCode >>> 6);
                        outputArray[writeIndex++] = 0x80 | (charCode & 63);
                    }
                    else if (charCode <= 0xFFFF) {
                        outputArray[writeIndex++] = 0xE0 | (charCode >>> 12);
                        outputArray[writeIndex++] = 0x80 | ((charCode >>> 6) & 63);
                        outputArray[writeIndex++] = 0x80 | (charCode & 63);
                    }
                    else if (charCode <= 0x10FFFF) {
                        outputArray[writeIndex++] = 0xF0 | (charCode >>> 18);
                        outputArray[writeIndex++] = 0x80 | ((charCode >>> 12) & 63);
                        outputArray[writeIndex++] = 0x80 | ((charCode >>> 6) & 63);
                        outputArray[writeIndex++] = 0x80 | (charCode & 63);
                        readIndex++;
                    }
                    else
                        throw new Error("Invalid UTF-16 string: Encountered a character unsupported by UTF-8/16 (RFC 3629)");
                }
                return outputArray.subarray(0, writeIndex);
            };
            UTF8.decodeWithJS = function (utf8Bytes, startOffset, endOffset) {
                if (startOffset === void 0) { startOffset = 0; }
                if (!utf8Bytes || utf8Bytes.length == 0)
                    return "";
                if (endOffset === undefined)
                    endOffset = utf8Bytes.length;
                var output = new LZUTF8.StringBuilder();
                var outputCodePoint;
                var leadByte;
                for (var readIndex = startOffset, length_6 = endOffset; readIndex < length_6;) {
                    leadByte = utf8Bytes[readIndex];
                    if ((leadByte >>> 7) === 0) {
                        outputCodePoint = leadByte;
                        readIndex += 1;
                    }
                    else if ((leadByte >>> 5) === 6) {
                        if (readIndex + 1 >= endOffset)
                            throw new Error("Invalid UTF-8 stream: Truncated codepoint sequence encountered at position " + readIndex);
                        outputCodePoint = ((leadByte & 31) << 6) | (utf8Bytes[readIndex + 1] & 63);
                        readIndex += 2;
                    }
                    else if ((leadByte >>> 4) === 14) {
                        if (readIndex + 2 >= endOffset)
                            throw new Error("Invalid UTF-8 stream: Truncated codepoint sequence encountered at position " + readIndex);
                        outputCodePoint = ((leadByte & 15) << 12) | ((utf8Bytes[readIndex + 1] & 63) << 6) | (utf8Bytes[readIndex + 2] & 63);
                        readIndex += 3;
                    }
                    else if ((leadByte >>> 3) === 30) {
                        if (readIndex + 3 >= endOffset)
                            throw new Error("Invalid UTF-8 stream: Truncated codepoint sequence encountered at position " + readIndex);
                        outputCodePoint = ((leadByte & 7) << 18) | ((utf8Bytes[readIndex + 1] & 63) << 12) | ((utf8Bytes[readIndex + 2] & 63) << 6) | (utf8Bytes[readIndex + 3] & 63);
                        readIndex += 4;
                    }
                    else
                        throw new Error("Invalid UTF-8 stream: An invalid lead byte value encountered at position " + readIndex);
                    output.appendCodePoint(outputCodePoint);
                }
                return output.getOutputString();
            };
            UTF8.createNativeTextEncoderAndDecoderIfAvailable = function () {
                if (nativeTextEncoder)
                    return true;
                if (typeof TextEncoder == "function") {
                    nativeTextEncoder = new TextEncoder("utf-8");
                    nativeTextDecoder = new TextDecoder("utf-8");
                    return true;
                }
                else
                    return false;
            };
        })(UTF8 = Encoding.UTF8 || (Encoding.UTF8 = {}));
    })(Encoding = LZUTF8.Encoding || (LZUTF8.Encoding = {}));
})(LZUTF8 || (LZUTF8 = {}));
var LZUTF8;
(function (LZUTF8) {
    function compress(input, options) {
        if (options === void 0) { options = {}; }
        if (input == null)
            throw new TypeError("compress: undefined or null input received");
        var inputEncoding = LZUTF8.CompressionCommon.detectCompressionSourceEncoding(input);
        options = LZUTF8.ObjectTools.override({ inputEncoding: inputEncoding, outputEncoding: "ByteArray" }, options);
        var compressor = new LZUTF8.Compressor();
        var compressedBytes = compressor.compressBlock(input);
        return LZUTF8.CompressionCommon.encodeCompressedBytes(compressedBytes, options.outputEncoding);
    }
    LZUTF8.compress = compress;
    function decompress(input, options) {
        if (options === void 0) { options = {}; }
        if (input == null)
            throw new TypeError("decompress: undefined or null input received");
        options = LZUTF8.ObjectTools.override({ inputEncoding: "ByteArray", outputEncoding: "String" }, options);
        var inputBytes = LZUTF8.CompressionCommon.decodeCompressedBytes(input, options.inputEncoding);
        var decompressor = new LZUTF8.Decompressor();
        var decompressedBytes = decompressor.decompressBlock(inputBytes);
        return LZUTF8.CompressionCommon.encodeDecompressedBytes(decompressedBytes, options.outputEncoding);
    }
    LZUTF8.decompress = decompress;
    function compressAsync(input, options, callback) {
        if (callback == null)
            callback = function () { };
        var inputEncoding;
        try {
            inputEncoding = LZUTF8.CompressionCommon.detectCompressionSourceEncoding(input);
        }
        catch (e) {
            callback(undefined, e);
            return;
        }
        options = LZUTF8.ObjectTools.override({
            inputEncoding: inputEncoding,
            outputEncoding: "ByteArray",
            useWebWorker: true,
            blockSize: 65536
        }, options);
        LZUTF8.enqueueImmediate(function () {
            if (options.useWebWorker && LZUTF8.WebWorker.createGlobalWorkerIfNeeded()) {
                LZUTF8.WebWorker.compressAsync(input, options, callback);
            }
            else {
                LZUTF8.AsyncCompressor.compressAsync(input, options, callback);
            }
        });
    }
    LZUTF8.compressAsync = compressAsync;
    function decompressAsync(input, options, callback) {
        if (callback == null)
            callback = function () { };
        if (input == null) {
            callback(undefined, new TypeError("decompressAsync: undefined or null input received"));
            return;
        }
        options = LZUTF8.ObjectTools.override({
            inputEncoding: "ByteArray",
            outputEncoding: "String",
            useWebWorker: true,
            blockSize: 65536
        }, options);
        var normalizedInput = LZUTF8.BufferTools.convertToUint8ArrayIfNeeded(input);
        LZUTF8.EventLoop.enqueueImmediate(function () {
            if (options.useWebWorker && LZUTF8.WebWorker.createGlobalWorkerIfNeeded()) {
                LZUTF8.WebWorker.decompressAsync(normalizedInput, options, callback);
            }
            else {
                LZUTF8.AsyncDecompressor.decompressAsync(input, options, callback);
            }
        });
    }
    LZUTF8.decompressAsync = decompressAsync;
    function createCompressionStream() {
        return LZUTF8.AsyncCompressor.createCompressionStream();
    }
    LZUTF8.createCompressionStream = createCompressionStream;
    function createDecompressionStream() {
        return LZUTF8.AsyncDecompressor.createDecompressionStream();
    }
    LZUTF8.createDecompressionStream = createDecompressionStream;
    function encodeUTF8(str) {
        return LZUTF8.Encoding.UTF8.encode(str);
    }
    LZUTF8.encodeUTF8 = encodeUTF8;
    function decodeUTF8(input) {
        return LZUTF8.Encoding.UTF8.decode(input);
    }
    LZUTF8.decodeUTF8 = decodeUTF8;
    function encodeBase64(input) {
        return LZUTF8.Encoding.Base64.encode(input);
    }
    LZUTF8.encodeBase64 = encodeBase64;
    function decodeBase64(str) {
        return LZUTF8.Encoding.Base64.decode(str);
    }
    LZUTF8.decodeBase64 = decodeBase64;
    function encodeBinaryString(input) {
        return LZUTF8.Encoding.BinaryString.encode(input);
    }
    LZUTF8.encodeBinaryString = encodeBinaryString;
    function decodeBinaryString(str) {
        return LZUTF8.Encoding.BinaryString.decode(str);
    }
    LZUTF8.decodeBinaryString = decodeBinaryString;
})(LZUTF8 || (LZUTF8 = {}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node-libs-browser/node_modules/process/browser.js */ "./node_modules/node-libs-browser/node_modules/process/browser.js"), __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer, __webpack_require__(/*! ./../../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbHp1dGY4L2J1aWxkL3Byb2R1Y3Rpb24vbHp1dGY4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDRDQUFZO0FBQ3ZEO0FBQ0E7QUFDQSxlQUFlLEtBQTBCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDBCQUEwQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwrQkFBK0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLCtCQUErQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHdCQUF3QjtBQUN6QjtBQUNBO0FBQ0EsNENBQTRDLDBDQUEwQztBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtQkFBbUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDLHdCQUF3QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx3Q0FBd0M7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUMsd0JBQXdCIiwiZmlsZSI6InZlbmRvcnN+bHp1dGY4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXHJcbiBMWi1VVEY4IHYwLjQuNlxyXG5cclxuIENvcHlyaWdodCAoYykgMjAxNywgUm90ZW0gRGFuXHJcbiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcblxyXG4gQnVpbGQgZGF0ZTogMjAxNy0xMC0xOCBcclxuXHJcbiBQbGVhc2UgcmVwb3J0IGFueSBpc3N1ZSBhdCBodHRwczovL2dpdGh1Yi5jb20vcm90ZW1kYW4vbHp1dGY4LmpzL2lzc3Vlc1xyXG4qL1xyXG52YXIgTFpVVEY4O1xuKGZ1bmN0aW9uIChMWlVURjgpIHtcbiAgICBMWlVURjgucnVubmluZ0luTm9kZUpTID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKCh0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIikgJiYgKHR5cGVvZiBwcm9jZXNzLnZlcnNpb25zID09PSBcIm9iamVjdFwiKSAmJiAodHlwZW9mIHByb2Nlc3MudmVyc2lvbnMubm9kZSA9PT0gXCJzdHJpbmdcIikpO1xuICAgIH07XG4gICAgTFpVVEY4LnJ1bm5pbmdJbk1haW5Ob2RlSlNNb2R1bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBMWlVURjgucnVubmluZ0luTm9kZUpTKCkgJiYgcmVxdWlyZS5tYWluID09PSBtb2R1bGU7XG4gICAgfTtcbiAgICBMWlVURjguY29tbW9uSlNBdmFpbGFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJvYmplY3RcIjtcbiAgICB9O1xuICAgIExaVVRGOC5ydW5uaW5nSW5XZWJXb3JrZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBzZWxmLmFkZEV2ZW50TGlzdGVuZXIgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2Ygc2VsZi5jbG9zZSA9PT0gXCJmdW5jdGlvblwiO1xuICAgIH07XG4gICAgTFpVVEY4LnJ1bm5pbmdJbk5vZGVDaGlsZFByb2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBMWlVURjgucnVubmluZ0luTm9kZUpTKCkgJiYgdHlwZW9mIHByb2Nlc3Muc2VuZCA9PT0gXCJmdW5jdGlvblwiO1xuICAgIH07XG4gICAgTFpVVEY4LnJ1bm5pbmdJbk51bGxPcmlnaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiB3aW5kb3cubG9jYXRpb24gIT09IFwib2JqZWN0XCIpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCAhPT0gJ2h0dHBzOic7XG4gICAgfTtcbiAgICBMWlVURjgud2ViV29ya2Vyc0F2YWlsYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBXb3JrZXIgIT09IFwiZnVuY3Rpb25cIiB8fCBMWlVURjgucnVubmluZ0luTnVsbE9yaWdpbigpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoTFpVVEY4LnJ1bm5pbmdJbk5vZGVKUygpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAobmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQW5kcm9pZCA0LjNcIikgPj0gMClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBMWlVURjgubG9nID0gZnVuY3Rpb24gKG1lc3NhZ2UsIGFwcGVuZFRvRG9jdW1lbnQpIHtcbiAgICAgICAgaWYgKGFwcGVuZFRvRG9jdW1lbnQgPT09IHZvaWQgMCkgeyBhcHBlbmRUb0RvY3VtZW50ID0gZmFsc2U7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSBcIm9iamVjdFwiKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgICAgaWYgKGFwcGVuZFRvRG9jdW1lbnQgJiYgdHlwZW9mIGRvY3VtZW50ID09IFwib2JqZWN0XCIpXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCArPSBtZXNzYWdlICsgXCI8YnIvPlwiO1xuICAgIH07XG4gICAgTFpVVEY4LmNyZWF0ZUVycm9yTWVzc2FnZSA9IGZ1bmN0aW9uIChleGNlcHRpb24sIHRpdGxlKSB7XG4gICAgICAgIGlmICh0aXRsZSA9PT0gdm9pZCAwKSB7IHRpdGxlID0gXCJVbmhhbmRsZWQgZXhjZXB0aW9uXCI7IH1cbiAgICAgICAgaWYgKGV4Y2VwdGlvbiA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRpdGxlO1xuICAgICAgICB0aXRsZSArPSBcIjogXCI7XG4gICAgICAgIGlmICh0eXBlb2YgZXhjZXB0aW9uLmNvbnRlbnQgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlmIChMWlVURjgucnVubmluZ0luTm9kZUpTKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGl0bGUgKyBleGNlcHRpb24uY29udGVudC5zdGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBleGNlcHRpb25KU09OID0gSlNPTi5zdHJpbmdpZnkoZXhjZXB0aW9uLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGlmIChleGNlcHRpb25KU09OICE9PSBcInt9XCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aXRsZSArIGV4Y2VwdGlvbkpTT047XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGl0bGUgKyBleGNlcHRpb24uY29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZXhjZXB0aW9uLmNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aXRsZSArIGV4Y2VwdGlvbi5jb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRpdGxlICsgZXhjZXB0aW9uO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBMWlVURjgucHJpbnRFeGNlcHRpb25BbmRTdGFja1RyYWNlVG9Db25zb2xlID0gZnVuY3Rpb24gKGV4Y2VwdGlvbiwgdGl0bGUpIHtcbiAgICAgICAgaWYgKHRpdGxlID09PSB2b2lkIDApIHsgdGl0bGUgPSBcIlVuaGFuZGxlZCBleGNlcHRpb25cIjsgfVxuICAgICAgICBMWlVURjgubG9nKExaVVRGOC5jcmVhdGVFcnJvck1lc3NhZ2UoZXhjZXB0aW9uLCB0aXRsZSkpO1xuICAgIH07XG4gICAgTFpVVEY4LmdldEdsb2JhbE9iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIpXG4gICAgICAgICAgICByZXR1cm4gZ2xvYmFsO1xuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIpXG4gICAgICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgIH07XG4gICAgTFpVVEY4LnRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbiAgICBpZiAoTFpVVEY4LmNvbW1vbkpTQXZhaWxhYmxlKCkpXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gTFpVVEY4O1xufSkoTFpVVEY4IHx8IChMWlVURjggPSB7fSkpO1xuaWYgKHR5cGVvZiBVaW50OEFycmF5ID09PSBcImZ1bmN0aW9uXCIgJiYgbmV3IFVpbnQ4QXJyYXkoMSkuc3ViYXJyYXkoMSkuYnl0ZUxlbmd0aCAhPT0gMCkge1xuICAgIHZhciBzdWJhcnJheSA9IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gICAgICAgIHZhciBjbGFtcCA9IGZ1bmN0aW9uICh2LCBtaW4sIG1heCkgeyByZXR1cm4gdiA8IG1pbiA/IG1pbiA6IHYgPiBtYXggPyBtYXggOiB2OyB9O1xuICAgICAgICBzdGFydCA9IHN0YXJ0IHwgMDtcbiAgICAgICAgZW5kID0gZW5kIHwgMDtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAxKVxuICAgICAgICAgICAgc3RhcnQgPSAwO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpXG4gICAgICAgICAgICBlbmQgPSB0aGlzLmxlbmd0aDtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMClcbiAgICAgICAgICAgIHN0YXJ0ID0gdGhpcy5sZW5ndGggKyBzdGFydDtcbiAgICAgICAgaWYgKGVuZCA8IDApXG4gICAgICAgICAgICBlbmQgPSB0aGlzLmxlbmd0aCArIGVuZDtcbiAgICAgICAgc3RhcnQgPSBjbGFtcChzdGFydCwgMCwgdGhpcy5sZW5ndGgpO1xuICAgICAgICBlbmQgPSBjbGFtcChlbmQsIDAsIHRoaXMubGVuZ3RoKTtcbiAgICAgICAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0O1xuICAgICAgICBpZiAobGVuIDwgMClcbiAgICAgICAgICAgIGxlbiA9IDA7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzLmJ1ZmZlciwgdGhpcy5ieXRlT2Zmc2V0ICsgc3RhcnQgKiB0aGlzLkJZVEVTX1BFUl9FTEVNRU5ULCBsZW4pO1xuICAgIH07XG4gICAgdmFyIHR5cGVzID0gWydJbnQ4QXJyYXknLCAnVWludDhBcnJheScsICdVaW50OENsYW1wZWRBcnJheScsICdJbnQxNkFycmF5JywgJ1VpbnQxNkFycmF5JywgJ0ludDMyQXJyYXknLCAnVWludDMyQXJyYXknLCAnRmxvYXQzMkFycmF5JywgJ0Zsb2F0NjRBcnJheSddO1xuICAgIHZhciBnbG9iYWxPYmplY3QgPSB2b2lkIDA7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXG4gICAgICAgIGdsb2JhbE9iamVjdCA9IHdpbmRvdztcbiAgICBlbHNlIGlmICh0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIilcbiAgICAgICAgZ2xvYmFsT2JqZWN0ID0gc2VsZjtcbiAgICBpZiAoZ2xvYmFsT2JqZWN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGdsb2JhbE9iamVjdFt0eXBlc1tpXV0pXG4gICAgICAgICAgICAgICAgZ2xvYmFsT2JqZWN0W3R5cGVzW2ldXS5wcm90b3R5cGUuc3ViYXJyYXkgPSBzdWJhcnJheTtcbiAgICAgICAgfVxuICAgIH1cbn1cbnZhciBMWlVURjg7XG4oZnVuY3Rpb24gKExaVVRGOCkge1xuICAgIHZhciBBc3luY0NvbXByZXNzb3IgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBBc3luY0NvbXByZXNzb3IoKSB7XG4gICAgICAgIH1cbiAgICAgICAgQXN5bmNDb21wcmVzc29yLmNvbXByZXNzQXN5bmMgPSBmdW5jdGlvbiAoaW5wdXQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgdGltZXIgPSBuZXcgTFpVVEY4LlRpbWVyKCk7XG4gICAgICAgICAgICB2YXIgY29tcHJlc3NvciA9IG5ldyBMWlVURjguQ29tcHJlc3NvcigpO1xuICAgICAgICAgICAgaWYgKCFjYWxsYmFjaylcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiY29tcHJlc3NBc3luYzogTm8gY2FsbGJhY2sgYXJndW1lbnQgZ2l2ZW5cIik7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGlucHV0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBMWlVURjguZW5jb2RlVVRGOChpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpbnB1dCA9PSBudWxsIHx8ICEoaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5KSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVuZGVmaW5lZCwgbmV3IFR5cGVFcnJvcihcImNvbXByZXNzQXN5bmM6IEludmFsaWQgaW5wdXQgYXJndW1lbnQsIG9ubHkgJ3N0cmluZycgYW5kICdVaW50OEFycmF5JyBhcmUgc3VwcG9ydGVkXCIpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc291cmNlQmxvY2tzID0gTFpVVEY4LkFycmF5VG9vbHMuc3BsaXRCeXRlQXJyYXkoaW5wdXQsIG9wdGlvbnMuYmxvY2tTaXplKTtcbiAgICAgICAgICAgIHZhciBjb21wcmVzc2VkQmxvY2tzID0gW107XG4gICAgICAgICAgICB2YXIgY29tcHJlc3NCbG9ja3NTdGFydGluZ0F0ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgc291cmNlQmxvY2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29tcHJlc3NlZEJsb2NrID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJlc3NlZEJsb2NrID0gY29tcHJlc3Nvci5jb21wcmVzc0Jsb2NrKHNvdXJjZUJsb2Nrc1tpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh1bmRlZmluZWQsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbXByZXNzZWRCbG9ja3MucHVzaChjb21wcmVzc2VkQmxvY2spO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGltZXIuZ2V0RWxhcHNlZFRpbWUoKSA8PSAyMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJlc3NCbG9ja3NTdGFydGluZ0F0KGluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMWlVURjguZW5xdWV1ZUltbWVkaWF0ZShmdW5jdGlvbiAoKSB7IHJldHVybiBjb21wcmVzc0Jsb2Nrc1N0YXJ0aW5nQXQoaW5kZXggKyAxKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lci5yZXN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBqb2luZWRDb21wcmVzc2VkQmxvY2tzXzEgPSBMWlVURjguQXJyYXlUb29scy5jb25jYXRVaW50OEFycmF5cyhjb21wcmVzc2VkQmxvY2tzKTtcbiAgICAgICAgICAgICAgICAgICAgTFpVVEY4LmVucXVldWVJbW1lZGlhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gTFpVVEY4LkNvbXByZXNzaW9uQ29tbW9uLmVuY29kZUNvbXByZXNzZWRCeXRlcyhqb2luZWRDb21wcmVzc2VkQmxvY2tzXzEsIG9wdGlvbnMub3V0cHV0RW5jb2RpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh1bmRlZmluZWQsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIExaVVRGOC5lbnF1ZXVlSW1tZWRpYXRlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNhbGxiYWNrKHJlc3VsdCk7IH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgTFpVVEY4LmVucXVldWVJbW1lZGlhdGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gY29tcHJlc3NCbG9ja3NTdGFydGluZ0F0KDApOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgQXN5bmNDb21wcmVzc29yLmNyZWF0ZUNvbXByZXNzaW9uU3RyZWFtID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbXByZXNzb3IgPSBuZXcgTFpVVEY4LkNvbXByZXNzb3IoKTtcbiAgICAgICAgICAgIHZhciBOb2RlU3RyZWFtID0gcmVxdWlyZShcInN0cmVhbVwiKTtcbiAgICAgICAgICAgIHZhciBjb21wcmVzc2lvblN0cmVhbSA9IG5ldyBOb2RlU3RyZWFtLlRyYW5zZm9ybSh7IGRlY29kZVN0cmluZ3M6IHRydWUsIGhpZ2hXYXRlck1hcms6IDY1NTM2IH0pO1xuICAgICAgICAgICAgY29tcHJlc3Npb25TdHJlYW0uX3RyYW5zZm9ybSA9IGZ1bmN0aW9uIChkYXRhLCBlbmNvZGluZywgZG9uZSkge1xuICAgICAgICAgICAgICAgIHZhciBidWZmZXI7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyID0gTFpVVEY4LkJ1ZmZlclRvb2xzLnVpbnQ4QXJyYXlUb0J1ZmZlcihjb21wcmVzc29yLmNvbXByZXNzQmxvY2soTFpVVEY4LkJ1ZmZlclRvb2xzLmJ1ZmZlclRvVWludDhBcnJheShkYXRhKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wcmVzc2lvblN0cmVhbS5lbWl0KFwiZXJyb3JcIiwgZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tcHJlc3Npb25TdHJlYW0ucHVzaChidWZmZXIpO1xuICAgICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gY29tcHJlc3Npb25TdHJlYW07XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBBc3luY0NvbXByZXNzb3I7XG4gICAgfSgpKTtcbiAgICBMWlVURjguQXN5bmNDb21wcmVzc29yID0gQXN5bmNDb21wcmVzc29yO1xufSkoTFpVVEY4IHx8IChMWlVURjggPSB7fSkpO1xudmFyIExaVVRGODtcbihmdW5jdGlvbiAoTFpVVEY4KSB7XG4gICAgdmFyIEFzeW5jRGVjb21wcmVzc29yID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gQXN5bmNEZWNvbXByZXNzb3IoKSB7XG4gICAgICAgIH1cbiAgICAgICAgQXN5bmNEZWNvbXByZXNzb3IuZGVjb21wcmVzc0FzeW5jID0gZnVuY3Rpb24gKGlucHV0LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKCFjYWxsYmFjaylcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiZGVjb21wcmVzc0FzeW5jOiBObyBjYWxsYmFjayBhcmd1bWVudCBnaXZlblwiKTtcbiAgICAgICAgICAgIHZhciB0aW1lciA9IG5ldyBMWlVURjguVGltZXIoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBMWlVURjguQ29tcHJlc3Npb25Db21tb24uZGVjb2RlQ29tcHJlc3NlZEJ5dGVzKGlucHV0LCBvcHRpb25zLmlucHV0RW5jb2RpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh1bmRlZmluZWQsIGUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBkZWNvbXByZXNzb3IgPSBuZXcgTFpVVEY4LkRlY29tcHJlc3NvcigpO1xuICAgICAgICAgICAgdmFyIHNvdXJjZUJsb2NrcyA9IExaVVRGOC5BcnJheVRvb2xzLnNwbGl0Qnl0ZUFycmF5KGlucHV0LCBvcHRpb25zLmJsb2NrU2l6ZSk7XG4gICAgICAgICAgICB2YXIgZGVjb21wcmVzc2VkQmxvY2tzID0gW107XG4gICAgICAgICAgICB2YXIgZGVjb21wcmVzc0Jsb2Nrc1N0YXJ0aW5nQXQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCBzb3VyY2VCbG9ja3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWNvbXByZXNzZWRCbG9jayA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY29tcHJlc3NlZEJsb2NrID0gZGVjb21wcmVzc29yLmRlY29tcHJlc3NCbG9jayhzb3VyY2VCbG9ja3NbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodW5kZWZpbmVkLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkZWNvbXByZXNzZWRCbG9ja3MucHVzaChkZWNvbXByZXNzZWRCbG9jayk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aW1lci5nZXRFbGFwc2VkVGltZSgpIDw9IDIwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNvbXByZXNzQmxvY2tzU3RhcnRpbmdBdChpbmRleCArIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgTFpVVEY4LmVucXVldWVJbW1lZGlhdGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gZGVjb21wcmVzc0Jsb2Nrc1N0YXJ0aW5nQXQoaW5kZXggKyAxKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lci5yZXN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBqb2luZWREZWNvbXByZXNzZWRCbG9ja3NfMSA9IExaVVRGOC5BcnJheVRvb2xzLmNvbmNhdFVpbnQ4QXJyYXlzKGRlY29tcHJlc3NlZEJsb2Nrcyk7XG4gICAgICAgICAgICAgICAgICAgIExaVVRGOC5lbnF1ZXVlSW1tZWRpYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IExaVVRGOC5Db21wcmVzc2lvbkNvbW1vbi5lbmNvZGVEZWNvbXByZXNzZWRCeXRlcyhqb2luZWREZWNvbXByZXNzZWRCbG9ja3NfMSwgb3B0aW9ucy5vdXRwdXRFbmNvZGluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVuZGVmaW5lZCwgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgTFpVVEY4LmVucXVldWVJbW1lZGlhdGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gY2FsbGJhY2socmVzdWx0KTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBMWlVURjguZW5xdWV1ZUltbWVkaWF0ZShmdW5jdGlvbiAoKSB7IHJldHVybiBkZWNvbXByZXNzQmxvY2tzU3RhcnRpbmdBdCgwKTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIEFzeW5jRGVjb21wcmVzc29yLmNyZWF0ZURlY29tcHJlc3Npb25TdHJlYW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGVjb21wcmVzc29yID0gbmV3IExaVVRGOC5EZWNvbXByZXNzb3IoKTtcbiAgICAgICAgICAgIHZhciBOb2RlU3RyZWFtID0gcmVxdWlyZShcInN0cmVhbVwiKTtcbiAgICAgICAgICAgIHZhciBkZWNvbXByZXNzaW9uU3RyZWFtID0gbmV3IE5vZGVTdHJlYW0uVHJhbnNmb3JtKHsgZGVjb2RlU3RyaW5nczogdHJ1ZSwgaGlnaFdhdGVyTWFyazogNjU1MzYgfSk7XG4gICAgICAgICAgICBkZWNvbXByZXNzaW9uU3RyZWFtLl90cmFuc2Zvcm0gPSBmdW5jdGlvbiAoZGF0YSwgZW5jb2RpbmcsIGRvbmUpIHtcbiAgICAgICAgICAgICAgICB2YXIgYnVmZmVyO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlciA9IExaVVRGOC5CdWZmZXJUb29scy51aW50OEFycmF5VG9CdWZmZXIoZGVjb21wcmVzc29yLmRlY29tcHJlc3NCbG9jayhMWlVURjguQnVmZmVyVG9vbHMuYnVmZmVyVG9VaW50OEFycmF5KGRhdGEpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlY29tcHJlc3Npb25TdHJlYW0uZW1pdChcImVycm9yXCIsIGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlY29tcHJlc3Npb25TdHJlYW0ucHVzaChidWZmZXIpO1xuICAgICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gZGVjb21wcmVzc2lvblN0cmVhbTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEFzeW5jRGVjb21wcmVzc29yO1xuICAgIH0oKSk7XG4gICAgTFpVVEY4LkFzeW5jRGVjb21wcmVzc29yID0gQXN5bmNEZWNvbXByZXNzb3I7XG59KShMWlVURjggfHwgKExaVVRGOCA9IHt9KSk7XG52YXIgTFpVVEY4O1xuKGZ1bmN0aW9uIChMWlVURjgpIHtcbiAgICB2YXIgV2ViV29ya2VyO1xuICAgIChmdW5jdGlvbiAoV2ViV29ya2VyKSB7XG4gICAgICAgIFdlYldvcmtlci5jb21wcmVzc0FzeW5jID0gZnVuY3Rpb24gKGlucHV0LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaW5wdXRFbmNvZGluZyA9PSBcIkJ5dGVBcnJheVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5KSkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh1bmRlZmluZWQsIG5ldyBUeXBlRXJyb3IoXCJjb21wcmVzc0FzeW5jOiBpbnB1dCBpcyBub3QgYSBVaW50OEFycmF5XCIpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgICAgIHRva2VuOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgdHlwZTogXCJjb21wcmVzc1wiLFxuICAgICAgICAgICAgICAgIGRhdGE6IGlucHV0LFxuICAgICAgICAgICAgICAgIGlucHV0RW5jb2Rpbmc6IG9wdGlvbnMuaW5wdXRFbmNvZGluZyxcbiAgICAgICAgICAgICAgICBvdXRwdXRFbmNvZGluZzogb3B0aW9ucy5vdXRwdXRFbmNvZGluZ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciByZXNwb25zZUxpc3RlbmVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBlLmRhdGE7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZSB8fCByZXNwb25zZS50b2tlbiAhPSByZXF1ZXN0LnRva2VuKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgV2ViV29ya2VyLmdsb2JhbFdvcmtlci5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCByZXNwb25zZUxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UudHlwZSA9PSBcImVycm9yXCIpXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVuZGVmaW5lZCwgbmV3IEVycm9yKHJlc3BvbnNlLmVycm9yKSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBXZWJXb3JrZXIuZ2xvYmFsV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHJlc3BvbnNlTGlzdGVuZXIpO1xuICAgICAgICAgICAgV2ViV29ya2VyLmdsb2JhbFdvcmtlci5wb3N0TWVzc2FnZShyZXF1ZXN0LCBbXSk7XG4gICAgICAgIH07XG4gICAgICAgIFdlYldvcmtlci5kZWNvbXByZXNzQXN5bmMgPSBmdW5jdGlvbiAoaW5wdXQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgICAgICB0b2tlbjogTWF0aC5yYW5kb20oKS50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVjb21wcmVzc1wiLFxuICAgICAgICAgICAgICAgIGRhdGE6IGlucHV0LFxuICAgICAgICAgICAgICAgIGlucHV0RW5jb2Rpbmc6IG9wdGlvbnMuaW5wdXRFbmNvZGluZyxcbiAgICAgICAgICAgICAgICBvdXRwdXRFbmNvZGluZzogb3B0aW9ucy5vdXRwdXRFbmNvZGluZ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciByZXNwb25zZUxpc3RlbmVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBlLmRhdGE7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZSB8fCByZXNwb25zZS50b2tlbiAhPSByZXF1ZXN0LnRva2VuKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgV2ViV29ya2VyLmdsb2JhbFdvcmtlci5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCByZXNwb25zZUxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UudHlwZSA9PSBcImVycm9yXCIpXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVuZGVmaW5lZCwgbmV3IEVycm9yKHJlc3BvbnNlLmVycm9yKSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBXZWJXb3JrZXIuZ2xvYmFsV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHJlc3BvbnNlTGlzdGVuZXIpO1xuICAgICAgICAgICAgV2ViV29ya2VyLmdsb2JhbFdvcmtlci5wb3N0TWVzc2FnZShyZXF1ZXN0LCBbXSk7XG4gICAgICAgIH07XG4gICAgICAgIFdlYldvcmtlci5pbnN0YWxsV2ViV29ya2VySWZOZWVkZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNlbGYgPT0gXCJvYmplY3RcIiAmJiBzZWxmLmRvY3VtZW50ID09PSB1bmRlZmluZWQgJiYgc2VsZi5hZGRFdmVudExpc3RlbmVyICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBlLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LnR5cGUgPT0gXCJjb21wcmVzc1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29tcHJlc3NlZERhdGEgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByZXNzZWREYXRhID0gTFpVVEY4LmNvbXByZXNzKHJlcXVlc3QuZGF0YSwgeyBvdXRwdXRFbmNvZGluZzogcmVxdWVzdC5vdXRwdXRFbmNvZGluZyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7IHRva2VuOiByZXF1ZXN0LnRva2VuLCB0eXBlOiBcImVycm9yXCIsIGVycm9yOiBMWlVURjguY3JlYXRlRXJyb3JNZXNzYWdlKGUpIH0sIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IHJlcXVlc3QudG9rZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJjb21wcmVzc2lvblJlc3VsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGNvbXByZXNzZWREYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuY29kaW5nOiByZXF1ZXN0Lm91dHB1dEVuY29kaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhIGluc3RhbmNlb2YgVWludDhBcnJheSAmJiBuYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKFwiTVNJRSAxMFwiKSA9PT0gLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wb3N0TWVzc2FnZShyZXNwb25zZSwgW3Jlc3BvbnNlLmRhdGEuYnVmZmVyXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wb3N0TWVzc2FnZShyZXNwb25zZSwgW10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlcXVlc3QudHlwZSA9PSBcImRlY29tcHJlc3NcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlY29tcHJlc3NlZERhdGEgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29tcHJlc3NlZERhdGEgPSBMWlVURjguZGVjb21wcmVzcyhyZXF1ZXN0LmRhdGEsIHsgaW5wdXRFbmNvZGluZzogcmVxdWVzdC5pbnB1dEVuY29kaW5nLCBvdXRwdXRFbmNvZGluZzogcmVxdWVzdC5vdXRwdXRFbmNvZGluZyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7IHRva2VuOiByZXF1ZXN0LnRva2VuLCB0eXBlOiBcImVycm9yXCIsIGVycm9yOiBMWlVURjguY3JlYXRlRXJyb3JNZXNzYWdlKGUpIH0sIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IHJlcXVlc3QudG9rZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkZWNvbXByZXNzaW9uUmVzdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGVjb21wcmVzc2VkRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmNvZGluZzogcmVxdWVzdC5vdXRwdXRFbmNvZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgJiYgbmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZihcIk1TSUUgMTBcIikgPT09IC0xKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucG9zdE1lc3NhZ2UocmVzcG9uc2UsIFtyZXNwb25zZS5kYXRhLmJ1ZmZlcl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucG9zdE1lc3NhZ2UocmVzcG9uc2UsIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIExaVVRGOC5sb2coTFpVVEY4LmNyZWF0ZUVycm9yTWVzc2FnZShlLmVycm9yLCBcIlVuZXhwZWN0ZWQgTFpVVEY4IFdlYldvcmtlciBleGNlcHRpb25cIikpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBXZWJXb3JrZXIuY3JlYXRlR2xvYmFsV29ya2VySWZOZWVkZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoV2ViV29ya2VyLmdsb2JhbFdvcmtlcilcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGlmICghTFpVVEY4LndlYldvcmtlcnNBdmFpbGFibGUoKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAoIVdlYldvcmtlci5zY3JpcHRVUkkgJiYgdHlwZW9mIGRvY3VtZW50ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImx6dXRmOFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoc2NyaXB0RWxlbWVudCAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBXZWJXb3JrZXIuc2NyaXB0VVJJID0gc2NyaXB0RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFdlYldvcmtlci5zY3JpcHRVUkkpIHtcbiAgICAgICAgICAgICAgICBXZWJXb3JrZXIuZ2xvYmFsV29ya2VyID0gbmV3IFdvcmtlcihXZWJXb3JrZXIuc2NyaXB0VVJJKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgV2ViV29ya2VyLnRlcm1pbmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChXZWJXb3JrZXIuZ2xvYmFsV29ya2VyKSB7XG4gICAgICAgICAgICAgICAgV2ViV29ya2VyLmdsb2JhbFdvcmtlci50ZXJtaW5hdGUoKTtcbiAgICAgICAgICAgICAgICBXZWJXb3JrZXIuZ2xvYmFsV29ya2VyID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0pKFdlYldvcmtlciA9IExaVVRGOC5XZWJXb3JrZXIgfHwgKExaVVRGOC5XZWJXb3JrZXIgPSB7fSkpO1xuICAgIFdlYldvcmtlci5pbnN0YWxsV2ViV29ya2VySWZOZWVkZWQoKTtcbn0pKExaVVRGOCB8fCAoTFpVVEY4ID0ge30pKTtcbnZhciBMWlVURjg7XG4oZnVuY3Rpb24gKExaVVRGOCkge1xuICAgIHZhciBBcnJheVNlZ21lbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBBcnJheVNlZ21lbnQoY29udGFpbmVyLCBzdGFydFBvc2l0aW9uLCBsZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICAgICAgdGhpcy5zdGFydFBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbjtcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIEFycmF5U2VnbWVudC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXJbdGhpcy5zdGFydFBvc2l0aW9uICsgaW5kZXhdO1xuICAgICAgICB9O1xuICAgICAgICBBcnJheVNlZ21lbnQucHJvdG90eXBlLmdldEluUmV2ZXJzZWRPcmRlciA9IGZ1bmN0aW9uIChyZXZlcnNlSW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lclt0aGlzLnN0YXJ0UG9zaXRpb24gKyB0aGlzLmxlbmd0aCAtIDEgLSByZXZlcnNlSW5kZXhdO1xuICAgICAgICB9O1xuICAgICAgICBBcnJheVNlZ21lbnQucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyW3RoaXMuc3RhcnRQb3NpdGlvbiArIGluZGV4XSA9IHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gQXJyYXlTZWdtZW50O1xuICAgIH0oKSk7XG4gICAgTFpVVEY4LkFycmF5U2VnbWVudCA9IEFycmF5U2VnbWVudDtcbn0pKExaVVRGOCB8fCAoTFpVVEY4ID0ge30pKTtcbnZhciBMWlVURjg7XG4oZnVuY3Rpb24gKExaVVRGOCkge1xuICAgIHZhciBBcnJheVRvb2xzO1xuICAgIChmdW5jdGlvbiAoQXJyYXlUb29scykge1xuICAgICAgICBBcnJheVRvb2xzLmNvcHlFbGVtZW50cyA9IGZ1bmN0aW9uIChzb3VyY2UsIHNvdXJjZUluZGV4LCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb25JbmRleCwgY291bnQpIHtcbiAgICAgICAgICAgIHdoaWxlIChjb3VudC0tKVxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uW2Rlc3RpbmF0aW9uSW5kZXgrK10gPSBzb3VyY2Vbc291cmNlSW5kZXgrK107XG4gICAgICAgIH07XG4gICAgICAgIEFycmF5VG9vbHMuemVyb0VsZW1lbnRzID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGluZGV4LCBjb3VudCkge1xuICAgICAgICAgICAgd2hpbGUgKGNvdW50LS0pXG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbltpbmRleCsrXSA9IDA7XG4gICAgICAgIH07XG4gICAgICAgIEFycmF5VG9vbHMuY291bnROb256ZXJvVmFsdWVzSW5BcnJheSA9IGZ1bmN0aW9uIChhcnJheSkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIGlmIChhcnJheVtpXSlcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Kys7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuICAgICAgICBBcnJheVRvb2xzLnRydW5jYXRlU3RhcnRpbmdFbGVtZW50cyA9IGZ1bmN0aW9uIChhcnJheSwgdHJ1bmNhdGVkTGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoYXJyYXkubGVuZ3RoIDw9IHRydW5jYXRlZExlbmd0aClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcInRydW5jYXRlU3RhcnRpbmdFbGVtZW50czogUmVxdWVzdGVkIGxlbmd0aCBzaG91bGQgYmUgc21hbGxlciB0aGFuIGFycmF5IGxlbmd0aFwiKTtcbiAgICAgICAgICAgIHZhciBzb3VyY2VQb3NpdGlvbiA9IGFycmF5Lmxlbmd0aCAtIHRydW5jYXRlZExlbmd0aDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJ1bmNhdGVkTGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgYXJyYXlbaV0gPSBhcnJheVtzb3VyY2VQb3NpdGlvbiArIGldO1xuICAgICAgICAgICAgYXJyYXkubGVuZ3RoID0gdHJ1bmNhdGVkTGVuZ3RoO1xuICAgICAgICB9O1xuICAgICAgICBBcnJheVRvb2xzLmRvdWJsZUJ5dGVBcnJheUNhcGFjaXR5ID0gZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICAgICAgICB2YXIgbmV3QXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheS5sZW5ndGggKiAyKTtcbiAgICAgICAgICAgIG5ld0FycmF5LnNldChhcnJheSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgICAgIH07XG4gICAgICAgIEFycmF5VG9vbHMuY29uY2F0VWludDhBcnJheXMgPSBmdW5jdGlvbiAoYXJyYXlzKSB7XG4gICAgICAgICAgICB2YXIgdG90YWxMZW5ndGggPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBhcnJheXNfMSA9IGFycmF5czsgX2kgPCBhcnJheXNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJyYXkgPSBhcnJheXNfMVtfaV07XG4gICAgICAgICAgICAgICAgdG90YWxMZW5ndGggKz0gYXJyYXkubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KHRvdGFsTGVuZ3RoKTtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgX2EgPSAwLCBhcnJheXNfMiA9IGFycmF5czsgX2EgPCBhcnJheXNfMi5sZW5ndGg7IF9hKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJyYXkgPSBhcnJheXNfMltfYV07XG4gICAgICAgICAgICAgICAgcmVzdWx0LnNldChhcnJheSwgb2Zmc2V0KTtcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gYXJyYXkubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfTtcbiAgICAgICAgQXJyYXlUb29scy5zcGxpdEJ5dGVBcnJheSA9IGZ1bmN0aW9uIChieXRlQXJyYXksIG1heFBhcnRMZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIG9mZnNldCA9IDA7IG9mZnNldCA8IGJ5dGVBcnJheS5sZW5ndGg7KSB7XG4gICAgICAgICAgICAgICAgdmFyIGJsb2NrTGVuZ3RoID0gTWF0aC5taW4obWF4UGFydExlbmd0aCwgYnl0ZUFycmF5Lmxlbmd0aCAtIG9mZnNldCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYnl0ZUFycmF5LnN1YmFycmF5KG9mZnNldCwgb2Zmc2V0ICsgYmxvY2tMZW5ndGgpKTtcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gYmxvY2tMZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuICAgIH0pKEFycmF5VG9vbHMgPSBMWlVURjguQXJyYXlUb29scyB8fCAoTFpVVEY4LkFycmF5VG9vbHMgPSB7fSkpO1xufSkoTFpVVEY4IHx8IChMWlVURjggPSB7fSkpO1xudmFyIExaVVRGODtcbihmdW5jdGlvbiAoTFpVVEY4KSB7XG4gICAgdmFyIEJ1ZmZlclRvb2xzO1xuICAgIChmdW5jdGlvbiAoQnVmZmVyVG9vbHMpIHtcbiAgICAgICAgQnVmZmVyVG9vbHMuY29udmVydFRvVWludDhBcnJheUlmTmVlZGVkID0gZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIEJ1ZmZlciA9PT0gXCJmdW5jdGlvblwiICYmIEJ1ZmZlci5pc0J1ZmZlcihpbnB1dCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIEJ1ZmZlclRvb2xzLmJ1ZmZlclRvVWludDhBcnJheShpbnB1dCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgICAgICB9O1xuICAgICAgICBCdWZmZXJUb29scy51aW50OEFycmF5VG9CdWZmZXIgPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgICAgICAgICBpZiAoQnVmZmVyLnByb3RvdHlwZSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJyQ2xvbmUgPSBuZXcgVWludDhBcnJheShhcnIuYnVmZmVyLCBhcnIuYnl0ZU9mZnNldCwgYXJyLmJ5dGVMZW5ndGgpO1xuICAgICAgICAgICAgICAgIE9iamVjdFtcInNldFByb3RvdHlwZU9mXCJdKGFyckNsb25lLCBCdWZmZXIucHJvdG90eXBlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyQ2xvbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgYnVmID0gbmV3IEJ1ZmZlcihsZW4pO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICAgICAgICAgICAgICAgIGJ1ZltpXSA9IGFycltpXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBCdWZmZXJUb29scy5idWZmZXJUb1VpbnQ4QXJyYXkgPSBmdW5jdGlvbiAoYnVmKSB7XG4gICAgICAgICAgICBpZiAoQnVmZmVyLnByb3RvdHlwZSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYnVmW1wiYnVmZmVyXCJdLCBidWZbXCJieXRlT2Zmc2V0XCJdLCBidWZbXCJieXRlTGVuZ3RoXCJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBsZW4gPSBidWYubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheShsZW4pO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICAgICAgICAgICAgICAgIGFycltpXSA9IGJ1ZltpXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0pKEJ1ZmZlclRvb2xzID0gTFpVVEY4LkJ1ZmZlclRvb2xzIHx8IChMWlVURjguQnVmZmVyVG9vbHMgPSB7fSkpO1xufSkoTFpVVEY4IHx8IChMWlVURjggPSB7fSkpO1xudmFyIExaVVRGODtcbihmdW5jdGlvbiAoTFpVVEY4KSB7XG4gICAgdmFyIENvbXByZXNzaW9uQ29tbW9uO1xuICAgIChmdW5jdGlvbiAoQ29tcHJlc3Npb25Db21tb24pIHtcbiAgICAgICAgQ29tcHJlc3Npb25Db21tb24uZ2V0Q3JvcHBlZEJ1ZmZlciA9IGZ1bmN0aW9uIChidWZmZXIsIGNyb3BTdGFydE9mZnNldCwgY3JvcExlbmd0aCwgYWRkaXRpb25hbENhcGFjaXR5KSB7XG4gICAgICAgICAgICBpZiAoYWRkaXRpb25hbENhcGFjaXR5ID09PSB2b2lkIDApIHsgYWRkaXRpb25hbENhcGFjaXR5ID0gMDsgfVxuICAgICAgICAgICAgdmFyIGNyb3BwZWRCdWZmZXIgPSBuZXcgVWludDhBcnJheShjcm9wTGVuZ3RoICsgYWRkaXRpb25hbENhcGFjaXR5KTtcbiAgICAgICAgICAgIGNyb3BwZWRCdWZmZXIuc2V0KGJ1ZmZlci5zdWJhcnJheShjcm9wU3RhcnRPZmZzZXQsIGNyb3BTdGFydE9mZnNldCArIGNyb3BMZW5ndGgpKTtcbiAgICAgICAgICAgIHJldHVybiBjcm9wcGVkQnVmZmVyO1xuICAgICAgICB9O1xuICAgICAgICBDb21wcmVzc2lvbkNvbW1vbi5nZXRDcm9wcGVkQW5kQXBwZW5kZWRCeXRlQXJyYXkgPSBmdW5jdGlvbiAoYnl0ZXMsIGNyb3BTdGFydE9mZnNldCwgY3JvcExlbmd0aCwgYnl0ZUFycmF5VG9BcHBlbmQpIHtcbiAgICAgICAgICAgIHJldHVybiBMWlVURjguQXJyYXlUb29scy5jb25jYXRVaW50OEFycmF5cyhbYnl0ZXMuc3ViYXJyYXkoY3JvcFN0YXJ0T2Zmc2V0LCBjcm9wU3RhcnRPZmZzZXQgKyBjcm9wTGVuZ3RoKSwgYnl0ZUFycmF5VG9BcHBlbmRdKTtcbiAgICAgICAgfTtcbiAgICAgICAgQ29tcHJlc3Npb25Db21tb24uZGV0ZWN0Q29tcHJlc3Npb25Tb3VyY2VFbmNvZGluZyA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICAgICAgaWYgKGlucHV0ID09IG51bGwpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImRldGVjdENvbXByZXNzaW9uU291cmNlRW5jb2Rpbmc6IGlucHV0IGlzIG51bGwgb3IgdW5kZWZpbmVkXCIpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdHJpbmdcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSB8fCAodHlwZW9mIEJ1ZmZlciA9PT0gXCJmdW5jdGlvblwiICYmIEJ1ZmZlci5pc0J1ZmZlcihpbnB1dCkpKVxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJ5dGVBcnJheVwiO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJkZXRlY3RDb21wcmVzc2lvblNvdXJjZUVuY29kaW5nOiBpbnB1dCBtdXN0IGJlIG9mIHR5cGUgJ3N0cmluZycsICdVaW50OEFycmF5JyBvciAnQnVmZmVyJ1wiKTtcbiAgICAgICAgfTtcbiAgICAgICAgQ29tcHJlc3Npb25Db21tb24uZW5jb2RlQ29tcHJlc3NlZEJ5dGVzID0gZnVuY3Rpb24gKGNvbXByZXNzZWRCeXRlcywgb3V0cHV0RW5jb2RpbmcpIHtcbiAgICAgICAgICAgIHN3aXRjaCAob3V0cHV0RW5jb2RpbmcpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiQnl0ZUFycmF5XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb21wcmVzc2VkQnl0ZXM7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkJ1ZmZlclwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTFpVVEY4LkJ1ZmZlclRvb2xzLnVpbnQ4QXJyYXlUb0J1ZmZlcihjb21wcmVzc2VkQnl0ZXMpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJCYXNlNjRcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIExaVVRGOC5lbmNvZGVCYXNlNjQoY29tcHJlc3NlZEJ5dGVzKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwiQmluYXJ5U3RyaW5nXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBMWlVURjguZW5jb2RlQmluYXJ5U3RyaW5nKGNvbXByZXNzZWRCeXRlcyk7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImVuY29kZUNvbXByZXNzZWRCeXRlczogaW52YWxpZCBvdXRwdXQgZW5jb2RpbmcgcmVxdWVzdGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBDb21wcmVzc2lvbkNvbW1vbi5kZWNvZGVDb21wcmVzc2VkQnl0ZXMgPSBmdW5jdGlvbiAoY29tcHJlc3NlZERhdGEsIGlucHV0RW5jb2RpbmcpIHtcbiAgICAgICAgICAgIGlmIChpbnB1dEVuY29kaW5nID09IG51bGwpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImRlY29kZUNvbXByZXNzZWREYXRhOiBJbnB1dCBpcyBudWxsIG9yIHVuZGVmaW5lZFwiKTtcbiAgICAgICAgICAgIHN3aXRjaCAoaW5wdXRFbmNvZGluZykge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJCeXRlQXJyYXlcIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwiQnVmZmVyXCI6XG4gICAgICAgICAgICAgICAgICAgIHZhciBub3JtYWxpemVkQnl0ZXMgPSBMWlVURjguQnVmZmVyVG9vbHMuY29udmVydFRvVWludDhBcnJheUlmTmVlZGVkKGNvbXByZXNzZWREYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEobm9ybWFsaXplZEJ5dGVzIGluc3RhbmNlb2YgVWludDhBcnJheSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiZGVjb2RlQ29tcHJlc3NlZERhdGE6ICdCeXRlQXJyYXknIG9yICdCdWZmZXInIGlucHV0IHR5cGUgd2FzIHNwZWNpZmllZCBidXQgaW5wdXQgaXMgbm90IGEgVWludDhBcnJheSBvciBCdWZmZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBub3JtYWxpemVkQnl0ZXM7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkJhc2U2NFwiOlxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXByZXNzZWREYXRhICE9PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImRlY29kZUNvbXByZXNzZWREYXRhOiAnQmFzZTY0JyBpbnB1dCB0eXBlIHdhcyBzcGVjaWZpZWQgYnV0IGlucHV0IGlzIG5vdCBhIHN0cmluZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIExaVVRGOC5kZWNvZGVCYXNlNjQoY29tcHJlc3NlZERhdGEpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJCaW5hcnlTdHJpbmdcIjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wcmVzc2VkRGF0YSAhPT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJkZWNvZGVDb21wcmVzc2VkRGF0YTogJ0JpbmFyeVN0cmluZycgaW5wdXQgdHlwZSB3YXMgc3BlY2lmaWVkIGJ1dCBpbnB1dCBpcyBub3QgYSBzdHJpbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBMWlVURjguZGVjb2RlQmluYXJ5U3RyaW5nKGNvbXByZXNzZWREYXRhKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiZGVjb2RlQ29tcHJlc3NlZERhdGE6IGludmFsaWQgaW5wdXQgZW5jb2RpbmcgcmVxdWVzdGVkOiAnXCIgKyBpbnB1dEVuY29kaW5nICsgXCInXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBDb21wcmVzc2lvbkNvbW1vbi5lbmNvZGVEZWNvbXByZXNzZWRCeXRlcyA9IGZ1bmN0aW9uIChkZWNvbXByZXNzZWRCeXRlcywgb3V0cHV0RW5jb2RpbmcpIHtcbiAgICAgICAgICAgIHN3aXRjaCAob3V0cHV0RW5jb2RpbmcpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiU3RyaW5nXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBMWlVURjguZGVjb2RlVVRGOChkZWNvbXByZXNzZWRCeXRlcyk7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkJ5dGVBcnJheVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb21wcmVzc2VkQnl0ZXM7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkJ1ZmZlclwiOlxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIEJ1ZmZlciAhPT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImVuY29kZURlY29tcHJlc3NlZEJ5dGVzOiBhICdCdWZmZXInIHR5cGUgd2FzIHNwZWNpZmllZCBidXQgaXMgbm90IHN1cHBvcnRlZCBhdCB0aGUgY3VycmVudCBlbnZpcm5tZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTFpVVEY4LkJ1ZmZlclRvb2xzLnVpbnQ4QXJyYXlUb0J1ZmZlcihkZWNvbXByZXNzZWRCeXRlcyk7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImVuY29kZURlY29tcHJlc3NlZEJ5dGVzOiBpbnZhbGlkIG91dHB1dCBlbmNvZGluZyByZXF1ZXN0ZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSkoQ29tcHJlc3Npb25Db21tb24gPSBMWlVURjguQ29tcHJlc3Npb25Db21tb24gfHwgKExaVVRGOC5Db21wcmVzc2lvbkNvbW1vbiA9IHt9KSk7XG59KShMWlVURjggfHwgKExaVVRGOCA9IHt9KSk7XG52YXIgTFpVVEY4O1xuKGZ1bmN0aW9uIChMWlVURjgpIHtcbiAgICB2YXIgRXZlbnRMb29wO1xuICAgIChmdW5jdGlvbiAoRXZlbnRMb29wKSB7XG4gICAgICAgIHZhciBxdWV1ZWRGdW5jdGlvbnMgPSBbXTtcbiAgICAgICAgdmFyIGFzeW5jRmx1c2hGdW5jO1xuICAgICAgICBFdmVudExvb3AuZW5xdWV1ZUltbWVkaWF0ZSA9IGZ1bmN0aW9uIChmdW5jKSB7XG4gICAgICAgICAgICBxdWV1ZWRGdW5jdGlvbnMucHVzaChmdW5jKTtcbiAgICAgICAgICAgIGlmIChxdWV1ZWRGdW5jdGlvbnMubGVuZ3RoID09PSAxKVxuICAgICAgICAgICAgICAgIGFzeW5jRmx1c2hGdW5jKCk7XG4gICAgICAgIH07XG4gICAgICAgIEV2ZW50TG9vcC5pbml0aWFsaXplU2NoZWR1bGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgcXVldWVkRnVuY3Rpb25zXzEgPSBxdWV1ZWRGdW5jdGlvbnM7IF9pIDwgcXVldWVkRnVuY3Rpb25zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmdW5jID0gcXVldWVkRnVuY3Rpb25zXzFbX2ldO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVuYy5jYWxsKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgTFpVVEY4LnByaW50RXhjZXB0aW9uQW5kU3RhY2tUcmFjZVRvQ29uc29sZShleGNlcHRpb24sIFwiZW5xdWV1ZUltbWVkaWF0ZSBleGNlcHRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcXVldWVkRnVuY3Rpb25zLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKExaVVRGOC5ydW5uaW5nSW5Ob2RlSlMoKSkge1xuICAgICAgICAgICAgICAgIGFzeW5jRmx1c2hGdW5jID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0SW1tZWRpYXRlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZsdXNoKCk7IH0pOyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHdpbmRvdy5wb3N0TWVzc2FnZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRva2VuXzEgPSBcImVucXVldWVJbW1lZGlhdGUtXCIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSA9PT0gdG9rZW5fMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsdXNoKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldE9yaWdpbl8xO1xuICAgICAgICAgICAgICAgIGlmIChMWlVURjgucnVubmluZ0luTnVsbE9yaWdpbigpKVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRPcmlnaW5fMSA9ICcqJztcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldE9yaWdpbl8xID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgICAgICAgICAgYXN5bmNGbHVzaEZ1bmMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cucG9zdE1lc3NhZ2UodG9rZW5fMSwgdGFyZ2V0T3JpZ2luXzEpOyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIE1lc3NhZ2VDaGFubmVsID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIE1lc3NhZ2VQb3J0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hhbm5lbF8xID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgICAgICAgICAgY2hhbm5lbF8xLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZsdXNoKCk7IH07XG4gICAgICAgICAgICAgICAgYXN5bmNGbHVzaEZ1bmMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBjaGFubmVsXzEucG9ydDIucG9zdE1lc3NhZ2UoMCk7IH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhc3luY0ZsdXNoRnVuYyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gZmx1c2goKTsgfSwgMCk7IH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEV2ZW50TG9vcC5pbml0aWFsaXplU2NoZWR1bGVyKCk7XG4gICAgfSkoRXZlbnRMb29wID0gTFpVVEY4LkV2ZW50TG9vcCB8fCAoTFpVVEY4LkV2ZW50TG9vcCA9IHt9KSk7XG4gICAgTFpVVEY4LmVucXVldWVJbW1lZGlhdGUgPSBmdW5jdGlvbiAoZnVuYykgeyByZXR1cm4gRXZlbnRMb29wLmVucXVldWVJbW1lZGlhdGUoZnVuYyk7IH07XG59KShMWlVURjggfHwgKExaVVRGOCA9IHt9KSk7XG52YXIgTFpVVEY4O1xuKGZ1bmN0aW9uIChMWlVURjgpIHtcbiAgICB2YXIgT2JqZWN0VG9vbHM7XG4gICAgKGZ1bmN0aW9uIChPYmplY3RUb29scykge1xuICAgICAgICBPYmplY3RUb29scy5vdmVycmlkZSA9IGZ1bmN0aW9uIChvYmosIG5ld1Byb3BlcnR5VmFsdWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0VG9vbHMuZXh0ZW5kKG9iaiwgbmV3UHJvcGVydHlWYWx1ZXMpO1xuICAgICAgICB9O1xuICAgICAgICBPYmplY3RUb29scy5leHRlbmQgPSBmdW5jdGlvbiAob2JqLCBuZXdQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBpZiAob2JqID09IG51bGwpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIm9iaiBpcyBudWxsIG9yIHVuZGVmaW5lZFwiKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJvYmogaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgICAgICAgIGlmIChuZXdQcm9wZXJ0aWVzID09IG51bGwpXG4gICAgICAgICAgICAgICAgbmV3UHJvcGVydGllcyA9IHt9O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXdQcm9wZXJ0aWVzICE9PSBcIm9iamVjdFwiKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJuZXdQcm9wZXJ0aWVzIGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICAgICAgICBpZiAobmV3UHJvcGVydGllcyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gbmV3UHJvcGVydGllcylcbiAgICAgICAgICAgICAgICAgICAgb2JqW3Byb3BlcnR5XSA9IG5ld1Byb3BlcnRpZXNbcHJvcGVydHldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfTtcbiAgICB9KShPYmplY3RUb29scyA9IExaVVRGOC5PYmplY3RUb29scyB8fCAoTFpVVEY4Lk9iamVjdFRvb2xzID0ge30pKTtcbn0pKExaVVRGOCB8fCAoTFpVVEY4ID0ge30pKTtcbnZhciBMWlVURjg7XG4oZnVuY3Rpb24gKExaVVRGOCkge1xuICAgIExaVVRGOC5nZXRSYW5kb21JbnRlZ2VySW5SYW5nZSA9IGZ1bmN0aW9uIChsb3csIGhpZ2gpIHtcbiAgICAgICAgcmV0dXJuIGxvdyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChoaWdoIC0gbG93KSk7XG4gICAgfTtcbiAgICBMWlVURjguZ2V0UmFuZG9tVVRGMTZTdHJpbmdPZkxlbmd0aCA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcbiAgICAgICAgdmFyIHJhbmRvbVN0cmluZyA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciByYW5kb21Db2RlUG9pbnQgPSB2b2lkIDA7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgcmFuZG9tQ29kZVBvaW50ID0gTFpVVEY4LmdldFJhbmRvbUludGVnZXJJblJhbmdlKDAsIDB4MTBGRkZGICsgMSk7XG4gICAgICAgICAgICB9IHdoaWxlIChyYW5kb21Db2RlUG9pbnQgPj0gMHhEODAwICYmIHJhbmRvbUNvZGVQb2ludCA8PSAweERGRkYpO1xuICAgICAgICAgICAgcmFuZG9tU3RyaW5nICs9IExaVVRGOC5FbmNvZGluZy5Db2RlUG9pbnQuZGVjb2RlVG9TdHJpbmcocmFuZG9tQ29kZVBvaW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmFuZG9tU3RyaW5nO1xuICAgIH07XG59KShMWlVURjggfHwgKExaVVRGOCA9IHt9KSk7XG52YXIgTFpVVEY4O1xuKGZ1bmN0aW9uIChMWlVURjgpIHtcbiAgICB2YXIgU3RyaW5nQnVpbGRlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFN0cmluZ0J1aWxkZXIob3V0cHV0QnVmZmVyQ2FwYWNpdHkpIHtcbiAgICAgICAgICAgIGlmIChvdXRwdXRCdWZmZXJDYXBhY2l0eSA9PT0gdm9pZCAwKSB7IG91dHB1dEJ1ZmZlckNhcGFjaXR5ID0gMTAyNDsgfVxuICAgICAgICAgICAgdGhpcy5vdXRwdXRCdWZmZXJDYXBhY2l0eSA9IG91dHB1dEJ1ZmZlckNhcGFjaXR5O1xuICAgICAgICAgICAgdGhpcy5vdXRwdXRQb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICB0aGlzLm91dHB1dFN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLm91dHB1dEJ1ZmZlciA9IG5ldyBVaW50MTZBcnJheSh0aGlzLm91dHB1dEJ1ZmZlckNhcGFjaXR5KTtcbiAgICAgICAgfVxuICAgICAgICBTdHJpbmdCdWlsZGVyLnByb3RvdHlwZS5hcHBlbmRDaGFyQ29kZSA9IGZ1bmN0aW9uIChjaGFyQ29kZSkge1xuICAgICAgICAgICAgdGhpcy5vdXRwdXRCdWZmZXJbdGhpcy5vdXRwdXRQb3NpdGlvbisrXSA9IGNoYXJDb2RlO1xuICAgICAgICAgICAgaWYgKHRoaXMub3V0cHV0UG9zaXRpb24gPT09IHRoaXMub3V0cHV0QnVmZmVyQ2FwYWNpdHkpXG4gICAgICAgICAgICAgICAgdGhpcy5mbHVzaEJ1ZmZlclRvT3V0cHV0U3RyaW5nKCk7XG4gICAgICAgIH07XG4gICAgICAgIFN0cmluZ0J1aWxkZXIucHJvdG90eXBlLmFwcGVuZENoYXJDb2RlcyA9IGZ1bmN0aW9uIChjaGFyQ29kZXMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGhfMSA9IGNoYXJDb2Rlcy5sZW5ndGg7IGkgPCBsZW5ndGhfMTsgaSsrKVxuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hhckNvZGUoY2hhckNvZGVzW2ldKTtcbiAgICAgICAgfTtcbiAgICAgICAgU3RyaW5nQnVpbGRlci5wcm90b3R5cGUuYXBwZW5kU3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aF8yID0gc3RyLmxlbmd0aDsgaSA8IGxlbmd0aF8yOyBpKyspXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGFyQ29kZShzdHIuY2hhckNvZGVBdChpKSk7XG4gICAgICAgIH07XG4gICAgICAgIFN0cmluZ0J1aWxkZXIucHJvdG90eXBlLmFwcGVuZENvZGVQb2ludCA9IGZ1bmN0aW9uIChjb2RlUG9pbnQpIHtcbiAgICAgICAgICAgIGlmIChjb2RlUG9pbnQgPD0gMHhGRkZGKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGFyQ29kZShjb2RlUG9pbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29kZVBvaW50IDw9IDB4MTBGRkZGKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGFyQ29kZSgweEQ4MDAgKyAoKGNvZGVQb2ludCAtIDB4MTAwMDApID4+PiAxMCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hhckNvZGUoMHhEQzAwICsgKChjb2RlUG9pbnQgLSAweDEwMDAwKSAmIDEwMjMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhcHBlbmRDb2RlUG9pbnQ6IEEgY29kZSBwb2ludCBvZiBcIiArIGNvZGVQb2ludCArIFwiIGNhbm5vdCBiZSBlbmNvZGVkIGluIFVURi0xNlwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgU3RyaW5nQnVpbGRlci5wcm90b3R5cGUuZ2V0T3V0cHV0U3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5mbHVzaEJ1ZmZlclRvT3V0cHV0U3RyaW5nKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vdXRwdXRTdHJpbmc7XG4gICAgICAgIH07XG4gICAgICAgIFN0cmluZ0J1aWxkZXIucHJvdG90eXBlLmZsdXNoQnVmZmVyVG9PdXRwdXRTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vdXRwdXRQb3NpdGlvbiA9PT0gdGhpcy5vdXRwdXRCdWZmZXJDYXBhY2l0eSlcbiAgICAgICAgICAgICAgICB0aGlzLm91dHB1dFN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIHRoaXMub3V0cHV0QnVmZmVyKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLm91dHB1dFN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIHRoaXMub3V0cHV0QnVmZmVyLnN1YmFycmF5KDAsIHRoaXMub3V0cHV0UG9zaXRpb24pKTtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0UG9zaXRpb24gPSAwO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gU3RyaW5nQnVpbGRlcjtcbiAgICB9KCkpO1xuICAgIExaVVRGOC5TdHJpbmdCdWlsZGVyID0gU3RyaW5nQnVpbGRlcjtcbn0pKExaVVRGOCB8fCAoTFpVVEY4ID0ge30pKTtcbnZhciBMWlVURjg7XG4oZnVuY3Rpb24gKExaVVRGOCkge1xuICAgIHZhciBUaW1lciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFRpbWVyKCkge1xuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgVGltZXIucHJvdG90eXBlLnJlc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IFRpbWVyLmdldFRpbWVzdGFtcCgpO1xuICAgICAgICB9O1xuICAgICAgICBUaW1lci5wcm90b3R5cGUuZ2V0RWxhcHNlZFRpbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gVGltZXIuZ2V0VGltZXN0YW1wKCkgLSB0aGlzLnN0YXJ0VGltZTtcbiAgICAgICAgfTtcbiAgICAgICAgVGltZXIucHJvdG90eXBlLmdldEVsYXBzZWRUaW1lQW5kUmVzdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlbGFwc2VkVGltZSA9IHRoaXMuZ2V0RWxhcHNlZFRpbWUoKTtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xuICAgICAgICAgICAgcmV0dXJuIGVsYXBzZWRUaW1lO1xuICAgICAgICB9O1xuICAgICAgICBUaW1lci5wcm90b3R5cGUubG9nQW5kUmVzdGFydCA9IGZ1bmN0aW9uICh0aXRsZSwgbG9nVG9Eb2N1bWVudCkge1xuICAgICAgICAgICAgaWYgKGxvZ1RvRG9jdW1lbnQgPT09IHZvaWQgMCkgeyBsb2dUb0RvY3VtZW50ID0gdHJ1ZTsgfVxuICAgICAgICAgICAgdmFyIGVsYXBzZWRUaW1lID0gdGhpcy5nZXRFbGFwc2VkVGltZSgpO1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSB0aXRsZSArIFwiOiBcIiArIGVsYXBzZWRUaW1lLnRvRml4ZWQoMykgKyBcIm1zXCI7XG4gICAgICAgICAgICBMWlVURjgubG9nKG1lc3NhZ2UsIGxvZ1RvRG9jdW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgICAgICAgICByZXR1cm4gZWxhcHNlZFRpbWU7XG4gICAgICAgIH07XG4gICAgICAgIFRpbWVyLmdldFRpbWVzdGFtcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy50aW1lc3RhbXBGdW5jKVxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlR2xvYmFsVGltZXN0YW1wRnVuY3Rpb24oKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbWVzdGFtcEZ1bmMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgVGltZXIuZ2V0TWljcm9zZWNvbmRUaW1lc3RhbXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihUaW1lci5nZXRUaW1lc3RhbXAoKSAqIDEwMDApO1xuICAgICAgICB9O1xuICAgICAgICBUaW1lci5jcmVhdGVHbG9iYWxUaW1lc3RhbXBGdW5jdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcHJvY2Vzcy5ocnRpbWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHZhciBiYXNlVGltZXN0YW1wXzEgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMudGltZXN0YW1wRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGVUaW1lU3RhbXAgPSBwcm9jZXNzLmhydGltZSgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWlsbGlzZWNvbmRUaW1lID0gKG5vZGVUaW1lU3RhbXBbMF0gKiAxMDAwKSArIChub2RlVGltZVN0YW1wWzFdIC8gMTAwMDAwMCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiYXNlVGltZXN0YW1wXzEgKyBtaWxsaXNlY29uZFRpbWU7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBiYXNlVGltZXN0YW1wXzEgPSBEYXRlLm5vdygpIC0gdGhpcy50aW1lc3RhbXBGdW5jKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hyb21lID09PSBcIm9iamVjdFwiICYmIGNocm9tZS5JbnRlcnZhbCkge1xuICAgICAgICAgICAgICAgIHZhciBiYXNlVGltZXN0YW1wXzIgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHZhciBjaHJvbWVJbnRlcnZhbE9iamVjdF8xID0gbmV3IGNocm9tZS5JbnRlcnZhbCgpO1xuICAgICAgICAgICAgICAgIGNocm9tZUludGVydmFsT2JqZWN0XzEuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVzdGFtcEZ1bmMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBiYXNlVGltZXN0YW1wXzIgKyBjaHJvbWVJbnRlcnZhbE9iamVjdF8xLm1pY3Jvc2Vjb25kcygpIC8gMTAwMDsgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwZXJmb3JtYW5jZSA9PT0gXCJvYmplY3RcIiAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICAgICAgICAgICAgICB2YXIgYmFzZVRpbWVzdGFtcF8zID0gRGF0ZS5ub3coKSAtIHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgICAgIHRoaXMudGltZXN0YW1wRnVuYyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJhc2VUaW1lc3RhbXBfMyArIHBlcmZvcm1hbmNlLm5vdygpOyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoRGF0ZS5ub3cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVzdGFtcEZ1bmMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBEYXRlLm5vdygpOyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lc3RhbXBGdW5jID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTsgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFRpbWVyO1xuICAgIH0oKSk7XG4gICAgTFpVVEY4LlRpbWVyID0gVGltZXI7XG59KShMWlVURjggfHwgKExaVVRGOCA9IHt9KSk7XG52YXIgTFpVVEY4O1xuKGZ1bmN0aW9uIChMWlVURjgpIHtcbiAgICB2YXIgQ29tcHJlc3NvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIENvbXByZXNzb3IodXNlQ3VzdG9tSGFzaFRhYmxlKSB7XG4gICAgICAgICAgICBpZiAodXNlQ3VzdG9tSGFzaFRhYmxlID09PSB2b2lkIDApIHsgdXNlQ3VzdG9tSGFzaFRhYmxlID0gdHJ1ZTsgfVxuICAgICAgICAgICAgdGhpcy5NaW5pbXVtU2VxdWVuY2VMZW5ndGggPSA0O1xuICAgICAgICAgICAgdGhpcy5NYXhpbXVtU2VxdWVuY2VMZW5ndGggPSAzMTtcbiAgICAgICAgICAgIHRoaXMuTWF4aW11bU1hdGNoRGlzdGFuY2UgPSAzMjc2NztcbiAgICAgICAgICAgIHRoaXMuUHJlZml4SGFzaFRhYmxlU2l6ZSA9IDY1NTM3O1xuICAgICAgICAgICAgdGhpcy5pbnB1dEJ1ZmZlclN0cmVhbU9mZnNldCA9IDE7XG4gICAgICAgICAgICBpZiAodXNlQ3VzdG9tSGFzaFRhYmxlICYmIHR5cGVvZiBVaW50MzJBcnJheSA9PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVmaXhIYXNoVGFibGUgPSBuZXcgTFpVVEY4LkNvbXByZXNzb3JDdXN0b21IYXNoVGFibGUodGhpcy5QcmVmaXhIYXNoVGFibGVTaXplKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLnByZWZpeEhhc2hUYWJsZSA9IG5ldyBMWlVURjguQ29tcHJlc3NvclNpbXBsZUhhc2hUYWJsZSh0aGlzLlByZWZpeEhhc2hUYWJsZVNpemUpO1xuICAgICAgICB9XG4gICAgICAgIENvbXByZXNzb3IucHJvdG90eXBlLmNvbXByZXNzQmxvY2sgPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgICAgIGlmIChpbnB1dCA9PT0gdW5kZWZpbmVkIHx8IGlucHV0ID09PSBudWxsKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJjb21wcmVzc0Jsb2NrOiB1bmRlZmluZWQgb3IgbnVsbCBpbnB1dCByZWNlaXZlZFwiKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5wdXQgPT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICBpbnB1dCA9IExaVVRGOC5lbmNvZGVVVEY4KGlucHV0KTtcbiAgICAgICAgICAgIGlucHV0ID0gTFpVVEY4LkJ1ZmZlclRvb2xzLmNvbnZlcnRUb1VpbnQ4QXJyYXlJZk5lZWRlZChpbnB1dCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wcmVzc1V0ZjhCbG9jayhpbnB1dCk7XG4gICAgICAgIH07XG4gICAgICAgIENvbXByZXNzb3IucHJvdG90eXBlLmNvbXByZXNzVXRmOEJsb2NrID0gZnVuY3Rpb24gKHV0ZjhCeXRlcykge1xuICAgICAgICAgICAgaWYgKCF1dGY4Qnl0ZXMgfHwgdXRmOEJ5dGVzLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSgwKTtcbiAgICAgICAgICAgIHZhciBidWZmZXJTdGFydGluZ1JlYWRPZmZzZXQgPSB0aGlzLmNyb3BBbmRBZGROZXdCeXRlc1RvSW5wdXRCdWZmZXIodXRmOEJ5dGVzKTtcbiAgICAgICAgICAgIHZhciBpbnB1dEJ1ZmZlciA9IHRoaXMuaW5wdXRCdWZmZXI7XG4gICAgICAgICAgICB2YXIgaW5wdXRCdWZmZXJMZW5ndGggPSB0aGlzLmlucHV0QnVmZmVyLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0QnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkodXRmOEJ5dGVzLmxlbmd0aCk7XG4gICAgICAgICAgICB0aGlzLm91dHB1dEJ1ZmZlclBvc2l0aW9uID0gMDtcbiAgICAgICAgICAgIHZhciBsYXRlc3RNYXRjaEVuZFBvc2l0aW9uID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIHJlYWRQb3NpdGlvbiA9IGJ1ZmZlclN0YXJ0aW5nUmVhZE9mZnNldDsgcmVhZFBvc2l0aW9uIDwgaW5wdXRCdWZmZXJMZW5ndGg7IHJlYWRQb3NpdGlvbisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0VmFsdWUgPSBpbnB1dEJ1ZmZlcltyZWFkUG9zaXRpb25dO1xuICAgICAgICAgICAgICAgIHZhciB3aXRoaW5BTWF0Y2hlZFJhbmdlID0gcmVhZFBvc2l0aW9uIDwgbGF0ZXN0TWF0Y2hFbmRQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBpZiAocmVhZFBvc2l0aW9uID4gaW5wdXRCdWZmZXJMZW5ndGggLSB0aGlzLk1pbmltdW1TZXF1ZW5jZUxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXdpdGhpbkFNYXRjaGVkUmFuZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHB1dFJhd0J5dGUoaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0QnVja2V0SW5kZXggPSB0aGlzLmdldEJ1Y2tldEluZGV4Rm9yUHJlZml4KHJlYWRQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKCF3aXRoaW5BTWF0Y2hlZFJhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaExvY2F0b3IgPSB0aGlzLmZpbmRMb25nZXN0TWF0Y2gocmVhZFBvc2l0aW9uLCB0YXJnZXRCdWNrZXRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaExvY2F0b3IgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRwdXRQb2ludGVyQnl0ZXMobWF0Y2hMb2NhdG9yLmxlbmd0aCwgbWF0Y2hMb2NhdG9yLmRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVzdE1hdGNoRW5kUG9zaXRpb24gPSByZWFkUG9zaXRpb24gKyBtYXRjaExvY2F0b3IubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aGluQU1hdGNoZWRSYW5nZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCF3aXRoaW5BTWF0Y2hlZFJhbmdlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHB1dFJhd0J5dGUoaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0U3RyZWFtUG9zaXRpb24gPSB0aGlzLmlucHV0QnVmZmVyU3RyZWFtT2Zmc2V0ICsgcmVhZFBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHRoaXMucHJlZml4SGFzaFRhYmxlLmFkZFZhbHVlVG9CdWNrZXQodGFyZ2V0QnVja2V0SW5kZXgsIGlucHV0U3RyZWFtUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3V0cHV0QnVmZmVyLnN1YmFycmF5KDAsIHRoaXMub3V0cHV0QnVmZmVyUG9zaXRpb24pO1xuICAgICAgICB9O1xuICAgICAgICBDb21wcmVzc29yLnByb3RvdHlwZS5maW5kTG9uZ2VzdE1hdGNoID0gZnVuY3Rpb24gKG1hdGNoZWRTZXF1ZW5jZVBvc2l0aW9uLCBidWNrZXRJbmRleCkge1xuICAgICAgICAgICAgdmFyIGJ1Y2tldCA9IHRoaXMucHJlZml4SGFzaFRhYmxlLmdldEFycmF5U2VnbWVudEZvckJ1Y2tldEluZGV4KGJ1Y2tldEluZGV4LCB0aGlzLnJldXNhYmxlQXJyYXlTZWdtZW50T2JqZWN0KTtcbiAgICAgICAgICAgIGlmIChidWNrZXQgPT0gbnVsbClcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IHRoaXMuaW5wdXRCdWZmZXI7XG4gICAgICAgICAgICB2YXIgbG9uZ2VzdE1hdGNoRGlzdGFuY2U7XG4gICAgICAgICAgICB2YXIgbG9uZ2VzdE1hdGNoTGVuZ3RoID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnVja2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlc3RlZFNlcXVlbmNlUG9zaXRpb24gPSBidWNrZXQuZ2V0SW5SZXZlcnNlZE9yZGVyKGkpIC0gdGhpcy5pbnB1dEJ1ZmZlclN0cmVhbU9mZnNldDtcbiAgICAgICAgICAgICAgICB2YXIgdGVzdGVkU2VxdWVuY2VEaXN0YW5jZSA9IG1hdGNoZWRTZXF1ZW5jZVBvc2l0aW9uIC0gdGVzdGVkU2VxdWVuY2VQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoVG9TdXJwYXNzID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIGlmIChsb25nZXN0TWF0Y2hEaXN0YW5jZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICBsZW5ndGhUb1N1cnBhc3MgPSB0aGlzLk1pbmltdW1TZXF1ZW5jZUxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobG9uZ2VzdE1hdGNoRGlzdGFuY2UgPCAxMjggJiYgdGVzdGVkU2VxdWVuY2VEaXN0YW5jZSA+PSAxMjgpXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aFRvU3VycGFzcyA9IGxvbmdlc3RNYXRjaExlbmd0aCArIChsb25nZXN0TWF0Y2hMZW5ndGggPj4+IDEpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoVG9TdXJwYXNzID0gbG9uZ2VzdE1hdGNoTGVuZ3RoO1xuICAgICAgICAgICAgICAgIGlmICh0ZXN0ZWRTZXF1ZW5jZURpc3RhbmNlID4gdGhpcy5NYXhpbXVtTWF0Y2hEaXN0YW5jZSB8fFxuICAgICAgICAgICAgICAgICAgICBsZW5ndGhUb1N1cnBhc3MgPj0gdGhpcy5NYXhpbXVtU2VxdWVuY2VMZW5ndGggfHxcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZFNlcXVlbmNlUG9zaXRpb24gKyBsZW5ndGhUb1N1cnBhc3MgPj0gaW5wdXQubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXRbdGVzdGVkU2VxdWVuY2VQb3NpdGlvbiArIGxlbmd0aFRvU3VycGFzc10gIT09IGlucHV0W21hdGNoZWRTZXF1ZW5jZVBvc2l0aW9uICsgbGVuZ3RoVG9TdXJwYXNzXSlcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgb2Zmc2V0ID0gMDs7IG9mZnNldCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVkU2VxdWVuY2VQb3NpdGlvbiArIG9mZnNldCA9PT0gaW5wdXQubGVuZ3RoIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFt0ZXN0ZWRTZXF1ZW5jZVBvc2l0aW9uICsgb2Zmc2V0XSAhPT0gaW5wdXRbbWF0Y2hlZFNlcXVlbmNlUG9zaXRpb24gKyBvZmZzZXRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ID4gbGVuZ3RoVG9TdXJwYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9uZ2VzdE1hdGNoRGlzdGFuY2UgPSB0ZXN0ZWRTZXF1ZW5jZURpc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvbmdlc3RNYXRjaExlbmd0aCA9IG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9mZnNldCA9PT0gdGhpcy5NYXhpbXVtU2VxdWVuY2VMZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBkaXN0YW5jZTogdGVzdGVkU2VxdWVuY2VEaXN0YW5jZSwgbGVuZ3RoOiB0aGlzLk1heGltdW1TZXF1ZW5jZUxlbmd0aCB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsb25nZXN0TWF0Y2hEaXN0YW5jZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiB7IGRpc3RhbmNlOiBsb25nZXN0TWF0Y2hEaXN0YW5jZSwgbGVuZ3RoOiBsb25nZXN0TWF0Y2hMZW5ndGggfTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgQ29tcHJlc3Nvci5wcm90b3R5cGUuZ2V0QnVja2V0SW5kZXhGb3JQcmVmaXggPSBmdW5jdGlvbiAoc3RhcnRQb3NpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmlucHV0QnVmZmVyW3N0YXJ0UG9zaXRpb25dICogNzg4MDU5OSArXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dEJ1ZmZlcltzdGFydFBvc2l0aW9uICsgMV0gKiAzOTYwMSArXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dEJ1ZmZlcltzdGFydFBvc2l0aW9uICsgMl0gKiAxOTkgK1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRCdWZmZXJbc3RhcnRQb3NpdGlvbiArIDNdKSAlIHRoaXMuUHJlZml4SGFzaFRhYmxlU2l6ZTtcbiAgICAgICAgfTtcbiAgICAgICAgQ29tcHJlc3Nvci5wcm90b3R5cGUub3V0cHV0UG9pbnRlckJ5dGVzID0gZnVuY3Rpb24gKGxlbmd0aCwgZGlzdGFuY2UpIHtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDEyOCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0UmF3Qnl0ZSgxOTIgfCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0UmF3Qnl0ZShkaXN0YW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm91dHB1dFJhd0J5dGUoMjI0IHwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm91dHB1dFJhd0J5dGUoZGlzdGFuY2UgPj4+IDgpO1xuICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0UmF3Qnl0ZShkaXN0YW5jZSAmIDI1NSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIENvbXByZXNzb3IucHJvdG90eXBlLm91dHB1dFJhd0J5dGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0QnVmZmVyW3RoaXMub3V0cHV0QnVmZmVyUG9zaXRpb24rK10gPSB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgQ29tcHJlc3Nvci5wcm90b3R5cGUuY3JvcEFuZEFkZE5ld0J5dGVzVG9JbnB1dEJ1ZmZlciA9IGZ1bmN0aW9uIChuZXdJbnB1dCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRCdWZmZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRCdWZmZXIgPSBuZXdJbnB1dDtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBjcm9wTGVuZ3RoID0gTWF0aC5taW4odGhpcy5pbnB1dEJ1ZmZlci5sZW5ndGgsIHRoaXMuTWF4aW11bU1hdGNoRGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIHZhciBjcm9wU3RhcnRPZmZzZXQgPSB0aGlzLmlucHV0QnVmZmVyLmxlbmd0aCAtIGNyb3BMZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dEJ1ZmZlciA9IExaVVRGOC5Db21wcmVzc2lvbkNvbW1vbi5nZXRDcm9wcGVkQW5kQXBwZW5kZWRCeXRlQXJyYXkodGhpcy5pbnB1dEJ1ZmZlciwgY3JvcFN0YXJ0T2Zmc2V0LCBjcm9wTGVuZ3RoLCBuZXdJbnB1dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dEJ1ZmZlclN0cmVhbU9mZnNldCArPSBjcm9wU3RhcnRPZmZzZXQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyb3BMZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBDb21wcmVzc29yO1xuICAgIH0oKSk7XG4gICAgTFpVVEY4LkNvbXByZXNzb3IgPSBDb21wcmVzc29yO1xufSkoTFpVVEY4IHx8IChMWlVURjggPSB7fSkpO1xudmFyIExaVVRGODtcbihmdW5jdGlvbiAoTFpVVEY4KSB7XG4gICAgdmFyIENvbXByZXNzb3JDdXN0b21IYXNoVGFibGUgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBDb21wcmVzc29yQ3VzdG9tSGFzaFRhYmxlKGJ1Y2tldENvdW50KSB7XG4gICAgICAgICAgICB0aGlzLm1pbmltdW1CdWNrZXRDYXBhY2l0eSA9IDQ7XG4gICAgICAgICAgICB0aGlzLm1heGltdW1CdWNrZXRDYXBhY2l0eSA9IDY0O1xuICAgICAgICAgICAgdGhpcy5idWNrZXRMb2NhdG9ycyA9IG5ldyBVaW50MzJBcnJheShidWNrZXRDb3VudCAqIDIpO1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlID0gbmV3IFVpbnQzMkFycmF5KGJ1Y2tldENvdW50ICogMik7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2VJbmRleCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgQ29tcHJlc3NvckN1c3RvbUhhc2hUYWJsZS5wcm90b3R5cGUuYWRkVmFsdWVUb0J1Y2tldCA9IGZ1bmN0aW9uIChidWNrZXRJbmRleCwgdmFsdWVUb0FkZCkge1xuICAgICAgICAgICAgYnVja2V0SW5kZXggPDw9IDE7XG4gICAgICAgICAgICBpZiAodGhpcy5zdG9yYWdlSW5kZXggPj0gKHRoaXMuc3RvcmFnZS5sZW5ndGggPj4+IDEpKVxuICAgICAgICAgICAgICAgIHRoaXMuY29tcGFjdCgpO1xuICAgICAgICAgICAgdmFyIHN0YXJ0UG9zaXRpb24gPSB0aGlzLmJ1Y2tldExvY2F0b3JzW2J1Y2tldEluZGV4XTtcbiAgICAgICAgICAgIHZhciBsZW5ndGg7XG4gICAgICAgICAgICBpZiAoc3RhcnRQb3NpdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0UG9zaXRpb24gPSB0aGlzLnN0b3JhZ2VJbmRleDtcbiAgICAgICAgICAgICAgICBsZW5ndGggPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZVt0aGlzLnN0b3JhZ2VJbmRleF0gPSB2YWx1ZVRvQWRkO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZUluZGV4ICs9IHRoaXMubWluaW11bUJ1Y2tldENhcGFjaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gdGhpcy5idWNrZXRMb2NhdG9yc1tidWNrZXRJbmRleCArIDFdO1xuICAgICAgICAgICAgICAgIGlmIChsZW5ndGggPT09IHRoaXMubWF4aW11bUJ1Y2tldENhcGFjaXR5IC0gMSlcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gdGhpcy50cnVuY2F0ZUJ1Y2tldFRvTmV3ZXJFbGVtZW50cyhzdGFydFBvc2l0aW9uLCBsZW5ndGgsIHRoaXMubWF4aW11bUJ1Y2tldENhcGFjaXR5IC8gMik7XG4gICAgICAgICAgICAgICAgdmFyIGVuZFBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbiArIGxlbmd0aDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdG9yYWdlW2VuZFBvc2l0aW9uXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2VbZW5kUG9zaXRpb25dID0gdmFsdWVUb0FkZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVuZFBvc2l0aW9uID09PSB0aGlzLnN0b3JhZ2VJbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZUluZGV4ICs9IGxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIExaVVRGOC5BcnJheVRvb2xzLmNvcHlFbGVtZW50cyh0aGlzLnN0b3JhZ2UsIHN0YXJ0UG9zaXRpb24sIHRoaXMuc3RvcmFnZSwgdGhpcy5zdG9yYWdlSW5kZXgsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0UG9zaXRpb24gPSB0aGlzLnN0b3JhZ2VJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlSW5kZXggKz0gbGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2VbdGhpcy5zdG9yYWdlSW5kZXgrK10gPSB2YWx1ZVRvQWRkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2VJbmRleCArPSBsZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxlbmd0aCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5idWNrZXRMb2NhdG9yc1tidWNrZXRJbmRleF0gPSBzdGFydFBvc2l0aW9uO1xuICAgICAgICAgICAgdGhpcy5idWNrZXRMb2NhdG9yc1tidWNrZXRJbmRleCArIDFdID0gbGVuZ3RoO1xuICAgICAgICB9O1xuICAgICAgICBDb21wcmVzc29yQ3VzdG9tSGFzaFRhYmxlLnByb3RvdHlwZS50cnVuY2F0ZUJ1Y2tldFRvTmV3ZXJFbGVtZW50cyA9IGZ1bmN0aW9uIChzdGFydFBvc2l0aW9uLCBidWNrZXRMZW5ndGgsIHRydW5jYXRlZEJ1Y2tldExlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHNvdXJjZVBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbiArIGJ1Y2tldExlbmd0aCAtIHRydW5jYXRlZEJ1Y2tldExlbmd0aDtcbiAgICAgICAgICAgIExaVVRGOC5BcnJheVRvb2xzLmNvcHlFbGVtZW50cyh0aGlzLnN0b3JhZ2UsIHNvdXJjZVBvc2l0aW9uLCB0aGlzLnN0b3JhZ2UsIHN0YXJ0UG9zaXRpb24sIHRydW5jYXRlZEJ1Y2tldExlbmd0aCk7XG4gICAgICAgICAgICBMWlVURjguQXJyYXlUb29scy56ZXJvRWxlbWVudHModGhpcy5zdG9yYWdlLCBzdGFydFBvc2l0aW9uICsgdHJ1bmNhdGVkQnVja2V0TGVuZ3RoLCBidWNrZXRMZW5ndGggLSB0cnVuY2F0ZWRCdWNrZXRMZW5ndGgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydW5jYXRlZEJ1Y2tldExlbmd0aDtcbiAgICAgICAgfTtcbiAgICAgICAgQ29tcHJlc3NvckN1c3RvbUhhc2hUYWJsZS5wcm90b3R5cGUuY29tcGFjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvbGRCdWNrZXRMb2NhdG9ycyA9IHRoaXMuYnVja2V0TG9jYXRvcnM7XG4gICAgICAgICAgICB2YXIgb2xkU3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcbiAgICAgICAgICAgIHRoaXMuYnVja2V0TG9jYXRvcnMgPSBuZXcgVWludDMyQXJyYXkodGhpcy5idWNrZXRMb2NhdG9ycy5sZW5ndGgpO1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlSW5kZXggPSAxO1xuICAgICAgICAgICAgZm9yICh2YXIgYnVja2V0SW5kZXggPSAwOyBidWNrZXRJbmRleCA8IG9sZEJ1Y2tldExvY2F0b3JzLmxlbmd0aDsgYnVja2V0SW5kZXggKz0gMikge1xuICAgICAgICAgICAgICAgIHZhciBsZW5ndGhfMyA9IG9sZEJ1Y2tldExvY2F0b3JzW2J1Y2tldEluZGV4ICsgMV07XG4gICAgICAgICAgICAgICAgaWYgKGxlbmd0aF8zID09PSAwKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1Y2tldExvY2F0b3JzW2J1Y2tldEluZGV4XSA9IHRoaXMuc3RvcmFnZUluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMuYnVja2V0TG9jYXRvcnNbYnVja2V0SW5kZXggKyAxXSA9IGxlbmd0aF8zO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZUluZGV4ICs9IE1hdGgubWF4KE1hdGgubWluKGxlbmd0aF8zICogMiwgdGhpcy5tYXhpbXVtQnVja2V0Q2FwYWNpdHkpLCB0aGlzLm1pbmltdW1CdWNrZXRDYXBhY2l0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgVWludDMyQXJyYXkodGhpcy5zdG9yYWdlSW5kZXggKiA4KTtcbiAgICAgICAgICAgIGZvciAodmFyIGJ1Y2tldEluZGV4ID0gMDsgYnVja2V0SW5kZXggPCBvbGRCdWNrZXRMb2NhdG9ycy5sZW5ndGg7IGJ1Y2tldEluZGV4ICs9IDIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc291cmNlUG9zaXRpb24gPSBvbGRCdWNrZXRMb2NhdG9yc1tidWNrZXRJbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZVBvc2l0aW9uID09PSAwKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB2YXIgZGVzdFBvc2l0aW9uID0gdGhpcy5idWNrZXRMb2NhdG9yc1tidWNrZXRJbmRleF07XG4gICAgICAgICAgICAgICAgdmFyIGxlbmd0aF80ID0gdGhpcy5idWNrZXRMb2NhdG9yc1tidWNrZXRJbmRleCArIDFdO1xuICAgICAgICAgICAgICAgIExaVVRGOC5BcnJheVRvb2xzLmNvcHlFbGVtZW50cyhvbGRTdG9yYWdlLCBzb3VyY2VQb3NpdGlvbiwgdGhpcy5zdG9yYWdlLCBkZXN0UG9zaXRpb24sIGxlbmd0aF80KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQ29tcHJlc3NvckN1c3RvbUhhc2hUYWJsZS5wcm90b3R5cGUuZ2V0QXJyYXlTZWdtZW50Rm9yQnVja2V0SW5kZXggPSBmdW5jdGlvbiAoYnVja2V0SW5kZXgsIG91dHB1dE9iamVjdCkge1xuICAgICAgICAgICAgYnVja2V0SW5kZXggPDw9IDE7XG4gICAgICAgICAgICB2YXIgc3RhcnRQb3NpdGlvbiA9IHRoaXMuYnVja2V0TG9jYXRvcnNbYnVja2V0SW5kZXhdO1xuICAgICAgICAgICAgaWYgKHN0YXJ0UG9zaXRpb24gPT09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBpZiAob3V0cHV0T2JqZWN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgb3V0cHV0T2JqZWN0ID0gbmV3IExaVVRGOC5BcnJheVNlZ21lbnQodGhpcy5zdG9yYWdlLCBzdGFydFBvc2l0aW9uLCB0aGlzLmJ1Y2tldExvY2F0b3JzW2J1Y2tldEluZGV4ICsgMV0pO1xuICAgICAgICAgICAgcmV0dXJuIG91dHB1dE9iamVjdDtcbiAgICAgICAgfTtcbiAgICAgICAgQ29tcHJlc3NvckN1c3RvbUhhc2hUYWJsZS5wcm90b3R5cGUuZ2V0VXNlZEJ1Y2tldENvdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTFpVVEY4LkFycmF5VG9vbHMuY291bnROb256ZXJvVmFsdWVzSW5BcnJheSh0aGlzLmJ1Y2tldExvY2F0b3JzKSAvIDIpO1xuICAgICAgICB9O1xuICAgICAgICBDb21wcmVzc29yQ3VzdG9tSGFzaFRhYmxlLnByb3RvdHlwZS5nZXRUb3RhbEVsZW1lbnRDb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJ1Y2tldExvY2F0b3JzLmxlbmd0aDsgaSArPSAyKVxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSB0aGlzLmJ1Y2tldExvY2F0b3JzW2kgKyAxXTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBDb21wcmVzc29yQ3VzdG9tSGFzaFRhYmxlO1xuICAgIH0oKSk7XG4gICAgTFpVVEY4LkNvbXByZXNzb3JDdXN0b21IYXNoVGFibGUgPSBDb21wcmVzc29yQ3VzdG9tSGFzaFRhYmxlO1xufSkoTFpVVEY4IHx8IChMWlVURjggPSB7fSkpO1xudmFyIExaVVRGODtcbihmdW5jdGlvbiAoTFpVVEY4KSB7XG4gICAgdmFyIENvbXByZXNzb3JTaW1wbGVIYXNoVGFibGUgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBDb21wcmVzc29yU2ltcGxlSGFzaFRhYmxlKHNpemUpIHtcbiAgICAgICAgICAgIHRoaXMubWF4aW11bUJ1Y2tldENhcGFjaXR5ID0gNjQ7XG4gICAgICAgICAgICB0aGlzLmJ1Y2tldHMgPSBuZXcgQXJyYXkoc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgQ29tcHJlc3NvclNpbXBsZUhhc2hUYWJsZS5wcm90b3R5cGUuYWRkVmFsdWVUb0J1Y2tldCA9IGZ1bmN0aW9uIChidWNrZXRJbmRleCwgdmFsdWVUb0FkZCkge1xuICAgICAgICAgICAgdmFyIGJ1Y2tldCA9IHRoaXMuYnVja2V0c1tidWNrZXRJbmRleF07XG4gICAgICAgICAgICBpZiAoYnVja2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1Y2tldHNbYnVja2V0SW5kZXhdID0gW3ZhbHVlVG9BZGRdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGJ1Y2tldC5sZW5ndGggPT09IHRoaXMubWF4aW11bUJ1Y2tldENhcGFjaXR5IC0gMSlcbiAgICAgICAgICAgICAgICAgICAgTFpVVEY4LkFycmF5VG9vbHMudHJ1bmNhdGVTdGFydGluZ0VsZW1lbnRzKGJ1Y2tldCwgdGhpcy5tYXhpbXVtQnVja2V0Q2FwYWNpdHkgLyAyKTtcbiAgICAgICAgICAgICAgICBidWNrZXQucHVzaCh2YWx1ZVRvQWRkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQ29tcHJlc3NvclNpbXBsZUhhc2hUYWJsZS5wcm90b3R5cGUuZ2V0QXJyYXlTZWdtZW50Rm9yQnVja2V0SW5kZXggPSBmdW5jdGlvbiAoYnVja2V0SW5kZXgsIG91dHB1dE9iamVjdCkge1xuICAgICAgICAgICAgdmFyIGJ1Y2tldCA9IHRoaXMuYnVja2V0c1tidWNrZXRJbmRleF07XG4gICAgICAgICAgICBpZiAoYnVja2V0ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBpZiAob3V0cHV0T2JqZWN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgb3V0cHV0T2JqZWN0ID0gbmV3IExaVVRGOC5BcnJheVNlZ21lbnQoYnVja2V0LCAwLCBidWNrZXQubGVuZ3RoKTtcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXRPYmplY3Q7XG4gICAgICAgIH07XG4gICAgICAgIENvbXByZXNzb3JTaW1wbGVIYXNoVGFibGUucHJvdG90eXBlLmdldFVzZWRCdWNrZXRDb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBMWlVURjguQXJyYXlUb29scy5jb3VudE5vbnplcm9WYWx1ZXNJbkFycmF5KHRoaXMuYnVja2V0cyk7XG4gICAgICAgIH07XG4gICAgICAgIENvbXByZXNzb3JTaW1wbGVIYXNoVGFibGUucHJvdG90eXBlLmdldFRvdGFsRWxlbWVudENvdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRTdW0gPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJ1Y2tldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5idWNrZXRzW2ldICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdW0gKz0gdGhpcy5idWNrZXRzW2ldLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50U3VtO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gQ29tcHJlc3NvclNpbXBsZUhhc2hUYWJsZTtcbiAgICB9KCkpO1xuICAgIExaVVRGOC5Db21wcmVzc29yU2ltcGxlSGFzaFRhYmxlID0gQ29tcHJlc3NvclNpbXBsZUhhc2hUYWJsZTtcbn0pKExaVVRGOCB8fCAoTFpVVEY4ID0ge30pKTtcbnZhciBMWlVURjg7XG4oZnVuY3Rpb24gKExaVVRGOCkge1xuICAgIHZhciBEZWNvbXByZXNzb3IgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBEZWNvbXByZXNzb3IoKSB7XG4gICAgICAgICAgICB0aGlzLk1heGltdW1NYXRjaERpc3RhbmNlID0gMzI3Njc7XG4gICAgICAgICAgICB0aGlzLm91dHB1dFBvc2l0aW9uID0gMDtcbiAgICAgICAgfVxuICAgICAgICBEZWNvbXByZXNzb3IucHJvdG90eXBlLmRlY29tcHJlc3NCbG9ja1RvU3RyaW5nID0gZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgICAgICBpbnB1dCA9IExaVVRGOC5CdWZmZXJUb29scy5jb252ZXJ0VG9VaW50OEFycmF5SWZOZWVkZWQoaW5wdXQpO1xuICAgICAgICAgICAgcmV0dXJuIExaVVRGOC5kZWNvZGVVVEY4KHRoaXMuZGVjb21wcmVzc0Jsb2NrKGlucHV0KSk7XG4gICAgICAgIH07XG4gICAgICAgIERlY29tcHJlc3Nvci5wcm90b3R5cGUuZGVjb21wcmVzc0Jsb2NrID0gZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dEJ1ZmZlclJlbWFpbmRlcikge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gTFpVVEY4LkFycmF5VG9vbHMuY29uY2F0VWludDhBcnJheXMoW3RoaXMuaW5wdXRCdWZmZXJSZW1haW5kZXIsIGlucHV0XSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dEJ1ZmZlclJlbWFpbmRlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvdXRwdXRTdGFydFBvc2l0aW9uID0gdGhpcy5jcm9wT3V0cHV0QnVmZmVyVG9XaW5kb3dBbmRJbml0aWFsaXplKE1hdGgubWF4KGlucHV0Lmxlbmd0aCAqIDQsIDEwMjQpKTtcbiAgICAgICAgICAgIGZvciAodmFyIHJlYWRQb3NpdGlvbiA9IDAsIGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoOyByZWFkUG9zaXRpb24gPCBpbnB1dExlbmd0aDsgcmVhZFBvc2l0aW9uKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXRWYWx1ZSA9IGlucHV0W3JlYWRQb3NpdGlvbl07XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0VmFsdWUgPj4+IDYgIT0gMykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHB1dEJ5dGUoaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgc2VxdWVuY2VMZW5ndGhJZGVudGlmaWVyID0gaW5wdXRWYWx1ZSA+Pj4gNTtcbiAgICAgICAgICAgICAgICBpZiAocmVhZFBvc2l0aW9uID09IGlucHV0TGVuZ3RoIC0gMSB8fFxuICAgICAgICAgICAgICAgICAgICAocmVhZFBvc2l0aW9uID09IGlucHV0TGVuZ3RoIC0gMiAmJiBzZXF1ZW5jZUxlbmd0aElkZW50aWZpZXIgPT0gNykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dEJ1ZmZlclJlbWFpbmRlciA9IGlucHV0LnN1YmFycmF5KHJlYWRQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaW5wdXRbcmVhZFBvc2l0aW9uICsgMV0gPj4+IDcgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRwdXRCeXRlKGlucHV0VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoTGVuZ3RoID0gaW5wdXRWYWx1ZSAmIDMxO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2hEaXN0YW5jZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlcXVlbmNlTGVuZ3RoSWRlbnRpZmllciA9PSA2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaERpc3RhbmNlID0gaW5wdXRbcmVhZFBvc2l0aW9uICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkUG9zaXRpb24gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoRGlzdGFuY2UgPSAoaW5wdXRbcmVhZFBvc2l0aW9uICsgMV0gPDwgOCkgfCAoaW5wdXRbcmVhZFBvc2l0aW9uICsgMl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZFBvc2l0aW9uICs9IDI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoUG9zaXRpb24gPSB0aGlzLm91dHB1dFBvc2l0aW9uIC0gbWF0Y2hEaXN0YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgbWF0Y2hMZW5ndGg7IG9mZnNldCsrKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRwdXRCeXRlKHRoaXMub3V0cHV0QnVmZmVyW21hdGNoUG9zaXRpb24gKyBvZmZzZXRdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJvbGxCYWNrSWZPdXRwdXRCdWZmZXJFbmRzV2l0aEFUcnVuY2F0ZWRNdWx0aWJ5dGVTZXF1ZW5jZSgpO1xuICAgICAgICAgICAgcmV0dXJuIExaVVRGOC5Db21wcmVzc2lvbkNvbW1vbi5nZXRDcm9wcGVkQnVmZmVyKHRoaXMub3V0cHV0QnVmZmVyLCBvdXRwdXRTdGFydFBvc2l0aW9uLCB0aGlzLm91dHB1dFBvc2l0aW9uIC0gb3V0cHV0U3RhcnRQb3NpdGlvbik7XG4gICAgICAgIH07XG4gICAgICAgIERlY29tcHJlc3Nvci5wcm90b3R5cGUub3V0cHV0Qnl0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3V0cHV0UG9zaXRpb24gPT09IHRoaXMub3V0cHV0QnVmZmVyLmxlbmd0aClcbiAgICAgICAgICAgICAgICB0aGlzLm91dHB1dEJ1ZmZlciA9IExaVVRGOC5BcnJheVRvb2xzLmRvdWJsZUJ5dGVBcnJheUNhcGFjaXR5KHRoaXMub3V0cHV0QnVmZmVyKTtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0QnVmZmVyW3RoaXMub3V0cHV0UG9zaXRpb24rK10gPSB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgRGVjb21wcmVzc29yLnByb3RvdHlwZS5jcm9wT3V0cHV0QnVmZmVyVG9XaW5kb3dBbmRJbml0aWFsaXplID0gZnVuY3Rpb24gKGluaXRpYWxDYXBhY2l0eSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm91dHB1dEJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0QnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoaW5pdGlhbENhcGFjaXR5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjcm9wTGVuZ3RoID0gTWF0aC5taW4odGhpcy5vdXRwdXRQb3NpdGlvbiwgdGhpcy5NYXhpbXVtTWF0Y2hEaXN0YW5jZSk7XG4gICAgICAgICAgICB0aGlzLm91dHB1dEJ1ZmZlciA9IExaVVRGOC5Db21wcmVzc2lvbkNvbW1vbi5nZXRDcm9wcGVkQnVmZmVyKHRoaXMub3V0cHV0QnVmZmVyLCB0aGlzLm91dHB1dFBvc2l0aW9uIC0gY3JvcExlbmd0aCwgY3JvcExlbmd0aCwgaW5pdGlhbENhcGFjaXR5KTtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0UG9zaXRpb24gPSBjcm9wTGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHRoaXMub3V0cHV0QnVmZmVyUmVtYWluZGVyKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm91dHB1dEJ1ZmZlclJlbWFpbmRlci5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRwdXRCeXRlKHRoaXMub3V0cHV0QnVmZmVyUmVtYWluZGVyW2ldKTtcbiAgICAgICAgICAgICAgICB0aGlzLm91dHB1dEJ1ZmZlclJlbWFpbmRlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjcm9wTGVuZ3RoO1xuICAgICAgICB9O1xuICAgICAgICBEZWNvbXByZXNzb3IucHJvdG90eXBlLnJvbGxCYWNrSWZPdXRwdXRCdWZmZXJFbmRzV2l0aEFUcnVuY2F0ZWRNdWx0aWJ5dGVTZXF1ZW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIG9mZnNldCA9IDE7IG9mZnNldCA8PSA0ICYmIHRoaXMub3V0cHV0UG9zaXRpb24gLSBvZmZzZXQgPj0gMDsgb2Zmc2V0KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLm91dHB1dEJ1ZmZlclt0aGlzLm91dHB1dFBvc2l0aW9uIC0gb2Zmc2V0XTtcbiAgICAgICAgICAgICAgICBpZiAoKG9mZnNldCA8IDQgJiYgKHZhbHVlID4+PiAzKSA9PT0gMzApIHx8XG4gICAgICAgICAgICAgICAgICAgIChvZmZzZXQgPCAzICYmICh2YWx1ZSA+Pj4gNCkgPT09IDE0KSB8fFxuICAgICAgICAgICAgICAgICAgICAob2Zmc2V0IDwgMiAmJiAodmFsdWUgPj4+IDUpID09PSA2KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHB1dEJ1ZmZlclJlbWFpbmRlciA9IHRoaXMub3V0cHV0QnVmZmVyLnN1YmFycmF5KHRoaXMub3V0cHV0UG9zaXRpb24gLSBvZmZzZXQsIHRoaXMub3V0cHV0UG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHB1dFBvc2l0aW9uIC09IG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIERlY29tcHJlc3NvcjtcbiAgICB9KCkpO1xuICAgIExaVVRGOC5EZWNvbXByZXNzb3IgPSBEZWNvbXByZXNzb3I7XG59KShMWlVURjggfHwgKExaVVRGOCA9IHt9KSk7XG52YXIgTFpVVEY4O1xuKGZ1bmN0aW9uIChMWlVURjgpIHtcbiAgICB2YXIgRW5jb2Rpbmc7XG4gICAgKGZ1bmN0aW9uIChFbmNvZGluZykge1xuICAgICAgICB2YXIgQmFzZTY0O1xuICAgICAgICAoZnVuY3Rpb24gKEJhc2U2NCkge1xuICAgICAgICAgICAgdmFyIGNoYXJDb2RlTWFwID0gbmV3IFVpbnQ4QXJyYXkoWzY1LCA2NiwgNjcsIDY4LCA2OSwgNzAsIDcxLCA3MiwgNzMsIDc0LCA3NSwgNzYsIDc3LCA3OCwgNzksIDgwLCA4MSwgODIsIDgzLCA4NCwgODUsIDg2LCA4NywgODgsIDg5LCA5MCwgOTcsIDk4LCA5OSwgMTAwLCAxMDEsIDEwMiwgMTAzLCAxMDQsIDEwNSwgMTA2LCAxMDcsIDEwOCwgMTA5LCAxMTAsIDExMSwgMTEyLCAxMTMsIDExNCwgMTE1LCAxMTYsIDExNywgMTE4LCAxMTksIDEyMCwgMTIxLCAxMjIsIDQ4LCA0OSwgNTAsIDUxLCA1MiwgNTMsIDU0LCA1NSwgNTYsIDU3LCA0MywgNDddKTtcbiAgICAgICAgICAgIHZhciByZXZlcnNlQ2hhckNvZGVNYXAgPSBuZXcgVWludDhBcnJheShbMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCA2MiwgMjU1LCAyNTUsIDI1NSwgNjMsIDUyLCA1MywgNTQsIDU1LCA1NiwgNTcsIDU4LCA1OSwgNjAsIDYxLCAyNTUsIDI1NSwgMjU1LCAwLCAyNTUsIDI1NSwgMjU1LCAwLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjAsIDIxLCAyMiwgMjMsIDI0LCAyNSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjYsIDI3LCAyOCwgMjksIDMwLCAzMSwgMzIsIDMzLCAzNCwgMzUsIDM2LCAzNywgMzgsIDM5LCA0MCwgNDEsIDQyLCA0MywgNDQsIDQ1LCA0NiwgNDcsIDQ4LCA0OSwgNTAsIDUxLCAyNTUsIDI1NSwgMjU1LCAyNTVdKTtcbiAgICAgICAgICAgIHZhciBwYWRkaW5nQ2hhcmFjdGVyID0gXCI9XCI7XG4gICAgICAgICAgICB2YXIgcGFkZGluZ0NoYXJDb2RlID0gNjE7XG4gICAgICAgICAgICBCYXNlNjQuZW5jb2RlID0gZnVuY3Rpb24gKGlucHV0Qnl0ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0Qnl0ZXMgfHwgaW5wdXRCeXRlcy5sZW5ndGggPT0gMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgaWYgKExaVVRGOC5ydW5uaW5nSW5Ob2RlSlMoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKExaVVRGOC5CdWZmZXJUb29scy51aW50OEFycmF5VG9CdWZmZXIoaW5wdXRCeXRlcykpLnRvU3RyaW5nKFwiYmFzZTY0XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEJhc2U2NC5lbmNvZGVXaXRoSlMoaW5wdXRCeXRlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIEJhc2U2NC5kZWNvZGUgPSBmdW5jdGlvbiAoYmFzZTY0U3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFiYXNlNjRTdHJpbmcpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSgwKTtcbiAgICAgICAgICAgICAgICBpZiAoTFpVVEY4LnJ1bm5pbmdJbk5vZGVKUygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBMWlVURjguQnVmZmVyVG9vbHMuYnVmZmVyVG9VaW50OEFycmF5KG5ldyBCdWZmZXIoYmFzZTY0U3RyaW5nLCBcImJhc2U2NFwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQmFzZTY0LmRlY29kZVdpdGhKUyhiYXNlNjRTdHJpbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBCYXNlNjQuZW5jb2RlV2l0aEpTID0gZnVuY3Rpb24gKGlucHV0Qnl0ZXMsIGFkZFBhZGRpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWRkUGFkZGluZyA9PT0gdm9pZCAwKSB7IGFkZFBhZGRpbmcgPSB0cnVlOyB9XG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dEJ5dGVzIHx8IGlucHV0Qnl0ZXMubGVuZ3RoID09IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgICAgIHZhciBtYXAgPSBjaGFyQ29kZU1hcDtcbiAgICAgICAgICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IExaVVRGOC5TdHJpbmdCdWlsZGVyKCk7XG4gICAgICAgICAgICAgICAgdmFyIHVpbnQyNDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciByZWFkUG9zaXRpb24gPSAwLCBsZW5ndGhfNSA9IGlucHV0Qnl0ZXMubGVuZ3RoOyByZWFkUG9zaXRpb24gPCBsZW5ndGhfNTsgcmVhZFBvc2l0aW9uICs9IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlYWRQb3NpdGlvbiA8PSBsZW5ndGhfNSAtIDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVpbnQyNCA9IGlucHV0Qnl0ZXNbcmVhZFBvc2l0aW9uXSA8PCAxNiB8IGlucHV0Qnl0ZXNbcmVhZFBvc2l0aW9uICsgMV0gPDwgOCB8IGlucHV0Qnl0ZXNbcmVhZFBvc2l0aW9uICsgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQuYXBwZW5kQ2hhckNvZGUobWFwWyh1aW50MjQgPj4+IDE4KSAmIDYzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQuYXBwZW5kQ2hhckNvZGUobWFwWyh1aW50MjQgPj4+IDEyKSAmIDYzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQuYXBwZW5kQ2hhckNvZGUobWFwWyh1aW50MjQgPj4+IDYpICYgNjNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dC5hcHBlbmRDaGFyQ29kZShtYXBbKHVpbnQyNCkgJiA2M10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdWludDI0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChyZWFkUG9zaXRpb24gPT09IGxlbmd0aF81IC0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdWludDI0ID0gaW5wdXRCeXRlc1tyZWFkUG9zaXRpb25dIDw8IDE2IHwgaW5wdXRCeXRlc1tyZWFkUG9zaXRpb24gKyAxXSA8PCA4O1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LmFwcGVuZENoYXJDb2RlKG1hcFsodWludDI0ID4+PiAxOCkgJiA2M10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LmFwcGVuZENoYXJDb2RlKG1hcFsodWludDI0ID4+PiAxMikgJiA2M10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LmFwcGVuZENoYXJDb2RlKG1hcFsodWludDI0ID4+PiA2KSAmIDYzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWRkUGFkZGluZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQuYXBwZW5kQ2hhckNvZGUocGFkZGluZ0NoYXJDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChyZWFkUG9zaXRpb24gPT09IGxlbmd0aF81IC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdWludDI0ID0gaW5wdXRCeXRlc1tyZWFkUG9zaXRpb25dIDw8IDE2O1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LmFwcGVuZENoYXJDb2RlKG1hcFsodWludDI0ID4+PiAxOCkgJiA2M10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LmFwcGVuZENoYXJDb2RlKG1hcFsodWludDI0ID4+PiAxMikgJiA2M10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkZFBhZGRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQuYXBwZW5kQ2hhckNvZGUocGFkZGluZ0NoYXJDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQuYXBwZW5kQ2hhckNvZGUocGFkZGluZ0NoYXJDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0LmdldE91dHB1dFN0cmluZygpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIEJhc2U2NC5kZWNvZGVXaXRoSlMgPSBmdW5jdGlvbiAoYmFzZTY0U3RyaW5nLCBvdXRwdXRCdWZmZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWJhc2U2NFN0cmluZyB8fCBiYXNlNjRTdHJpbmcubGVuZ3RoID09IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSgwKTtcbiAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoTW9kdWxvNCA9IGJhc2U2NFN0cmluZy5sZW5ndGggJSA0O1xuICAgICAgICAgICAgICAgIGlmIChsZW5ndGhNb2R1bG80ID09PSAxKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIEJhc2U2NCBzdHJpbmc6IGxlbmd0aCAlIDQgPT0gMVwiKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsZW5ndGhNb2R1bG80ID09PSAyKVxuICAgICAgICAgICAgICAgICAgICBiYXNlNjRTdHJpbmcgKz0gcGFkZGluZ0NoYXJhY3RlciArIHBhZGRpbmdDaGFyYWN0ZXI7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobGVuZ3RoTW9kdWxvNCA9PT0gMylcbiAgICAgICAgICAgICAgICAgICAgYmFzZTY0U3RyaW5nICs9IHBhZGRpbmdDaGFyYWN0ZXI7XG4gICAgICAgICAgICAgICAgaWYgKCFvdXRwdXRCdWZmZXIpXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dEJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGJhc2U2NFN0cmluZy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIHZhciBvdXRwdXRQb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgdmFyIGxlbmd0aCA9IGJhc2U2NFN0cmluZy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gNCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdWludDI0ID0gKHJldmVyc2VDaGFyQ29kZU1hcFtiYXNlNjRTdHJpbmcuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXZlcnNlQ2hhckNvZGVNYXBbYmFzZTY0U3RyaW5nLmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgICAgICAgICAgICAgICAgICAgKHJldmVyc2VDaGFyQ29kZU1hcFtiYXNlNjRTdHJpbmcuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXZlcnNlQ2hhckNvZGVNYXBbYmFzZTY0U3RyaW5nLmNoYXJDb2RlQXQoaSArIDMpXSk7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dEJ1ZmZlcltvdXRwdXRQb3NpdGlvbisrXSA9ICh1aW50MjQgPj4+IDE2KSAmIDI1NTtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0QnVmZmVyW291dHB1dFBvc2l0aW9uKytdID0gKHVpbnQyNCA+Pj4gOCkgJiAyNTU7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dEJ1ZmZlcltvdXRwdXRQb3NpdGlvbisrXSA9ICh1aW50MjQpICYgMjU1O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYmFzZTY0U3RyaW5nLmNoYXJDb2RlQXQobGVuZ3RoIC0gMSkgPT0gcGFkZGluZ0NoYXJDb2RlKVxuICAgICAgICAgICAgICAgICAgICBvdXRwdXRQb3NpdGlvbi0tO1xuICAgICAgICAgICAgICAgIGlmIChiYXNlNjRTdHJpbmcuY2hhckNvZGVBdChsZW5ndGggLSAyKSA9PSBwYWRkaW5nQ2hhckNvZGUpXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFBvc2l0aW9uLS07XG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dEJ1ZmZlci5zdWJhcnJheSgwLCBvdXRwdXRQb3NpdGlvbik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KShCYXNlNjQgPSBFbmNvZGluZy5CYXNlNjQgfHwgKEVuY29kaW5nLkJhc2U2NCA9IHt9KSk7XG4gICAgfSkoRW5jb2RpbmcgPSBMWlVURjguRW5jb2RpbmcgfHwgKExaVVRGOC5FbmNvZGluZyA9IHt9KSk7XG59KShMWlVURjggfHwgKExaVVRGOCA9IHt9KSk7XG52YXIgTFpVVEY4O1xuKGZ1bmN0aW9uIChMWlVURjgpIHtcbiAgICB2YXIgRW5jb2Rpbmc7XG4gICAgKGZ1bmN0aW9uIChFbmNvZGluZykge1xuICAgICAgICB2YXIgQmluYXJ5U3RyaW5nO1xuICAgICAgICAoZnVuY3Rpb24gKEJpbmFyeVN0cmluZykge1xuICAgICAgICAgICAgQmluYXJ5U3RyaW5nLmVuY29kZSA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dCA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQmluYXJ5U3RyaW5nLmVuY29kZTogdW5kZWZpbmVkIG9yIG51bGwgaW5wdXQgcmVjZWl2ZWRcIik7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciBvdXRwdXRTdHJpbmdCdWlsZGVyID0gbmV3IExaVVRGOC5TdHJpbmdCdWlsZGVyKCk7XG4gICAgICAgICAgICAgICAgdmFyIHJlbWFpbmRlciA9IDA7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gMTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0TGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSBpbnB1dExlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IChpbnB1dFtpXSA8PCA4KTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAoaW5wdXRbaV0gPDwgOCkgfCBpbnB1dFtpICsgMV07XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFN0cmluZ0J1aWxkZXIuYXBwZW5kQ2hhckNvZGUoKHJlbWFpbmRlciA8PCAoMTYgLSBzdGF0ZSkpIHwgdmFsdWUgPj4+IHN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluZGVyID0gdmFsdWUgJiAoKDEgPDwgc3RhdGUpIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gMTUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFN0cmluZ0J1aWxkZXIuYXBwZW5kQ2hhckNvZGUocmVtYWluZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbWFpbmRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSArPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID49IGlucHV0TGVuZ3RoIC0gMilcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFN0cmluZ0J1aWxkZXIuYXBwZW5kQ2hhckNvZGUocmVtYWluZGVyIDw8ICgxNiAtIHN0YXRlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG91dHB1dFN0cmluZ0J1aWxkZXIuYXBwZW5kQ2hhckNvZGUoMzI3NjggfCAoaW5wdXRMZW5ndGggJSAyKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dFN0cmluZ0J1aWxkZXIuZ2V0T3V0cHV0U3RyaW5nKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgQmluYXJ5U3RyaW5nLmRlY29kZSA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJCaW5hcnlTdHJpbmcuZGVjb2RlOiBpbnZhbGlkIGlucHV0IHR5cGVcIik7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0ID09IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSgwKTtcbiAgICAgICAgICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFVpbnQ4QXJyYXkoaW5wdXQubGVuZ3RoICogMyk7XG4gICAgICAgICAgICAgICAgdmFyIG91dHB1dFBvc2l0aW9uID0gMDtcbiAgICAgICAgICAgICAgICB2YXIgYXBwZW5kVG9PdXRwdXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0W291dHB1dFBvc2l0aW9uKytdID0gdmFsdWUgPj4+IDg7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFtvdXRwdXRQb3NpdGlvbisrXSA9IHZhbHVlICYgMjU1O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIHJlbWFpbmRlciA9IDA7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGlucHV0LmNoYXJDb2RlQXQoaSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA+PSAzMjc2OCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09ICgzMjc2OCB8IDEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFBvc2l0aW9uLS07XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtYWluZGVyID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRUb091dHB1dCgocmVtYWluZGVyIDw8IHN0YXRlKSB8ICh2YWx1ZSA+Pj4gKDE1IC0gc3RhdGUpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1haW5kZXIgPSB2YWx1ZSAmICgoMSA8PCAoMTUgLSBzdGF0ZSkpIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlID09IDE1KVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSAwO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0LnN1YmFycmF5KDAsIG91dHB1dFBvc2l0aW9uKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pKEJpbmFyeVN0cmluZyA9IEVuY29kaW5nLkJpbmFyeVN0cmluZyB8fCAoRW5jb2RpbmcuQmluYXJ5U3RyaW5nID0ge30pKTtcbiAgICB9KShFbmNvZGluZyA9IExaVVRGOC5FbmNvZGluZyB8fCAoTFpVVEY4LkVuY29kaW5nID0ge30pKTtcbn0pKExaVVRGOCB8fCAoTFpVVEY4ID0ge30pKTtcbnZhciBMWlVURjg7XG4oZnVuY3Rpb24gKExaVVRGOCkge1xuICAgIHZhciBFbmNvZGluZztcbiAgICAoZnVuY3Rpb24gKEVuY29kaW5nKSB7XG4gICAgICAgIHZhciBDb2RlUG9pbnQ7XG4gICAgICAgIChmdW5jdGlvbiAoQ29kZVBvaW50KSB7XG4gICAgICAgICAgICBDb2RlUG9pbnQuZW5jb2RlRnJvbVN0cmluZyA9IGZ1bmN0aW9uIChzdHIsIHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoYXJDb2RlID0gc3RyLmNoYXJDb2RlQXQocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGlmIChjaGFyQ29kZSA8IDB4RDgwMCB8fCBjaGFyQ29kZSA+IDB4REJGRilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoYXJDb2RlO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dENoYXJDb2RlID0gc3RyLmNoYXJDb2RlQXQocG9zaXRpb24gKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRDaGFyQ29kZSA+PSAweERDMDAgJiYgbmV4dENoYXJDb2RlIDw9IDB4REZGRilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAweDEwMDAwICsgKCgoY2hhckNvZGUgLSAweEQ4MDApIDw8IDEwKSArIChuZXh0Q2hhckNvZGUgLSAweERDMDApKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZ2V0VW5pY29kZUNvZGVQb2ludDogUmVjZWl2ZWQgYSBsZWFkIHN1cnJvZ2F0ZSBjaGFyYWN0ZXIsIGNoYXIgY29kZSBcIiArIGNoYXJDb2RlICsgXCIsIGZvbGxvd2VkIGJ5IFwiICsgbmV4dENoYXJDb2RlICsgXCIsIHdoaWNoIGlzIG5vdCBhIHRyYWlsaW5nIHN1cnJvZ2F0ZSBjaGFyYWN0ZXIgY29kZS5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIENvZGVQb2ludC5kZWNvZGVUb1N0cmluZyA9IGZ1bmN0aW9uIChjb2RlUG9pbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29kZVBvaW50IDw9IDB4RkZGRilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50KTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb2RlUG9pbnQgPD0gMHgxMEZGRkYpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RDgwMCArICgoY29kZVBvaW50IC0gMHgxMDAwMCkgPj4+IDEwKSwgMHhEQzAwICsgKChjb2RlUG9pbnQgLSAweDEwMDAwKSAmIDEwMjMpKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImdldFN0cmluZ0Zyb21Vbmljb2RlQ29kZVBvaW50OiBBIGNvZGUgcG9pbnQgb2YgXCIgKyBjb2RlUG9pbnQgKyBcIiBjYW5ub3QgYmUgZW5jb2RlZCBpbiBVVEYtMTZcIik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KShDb2RlUG9pbnQgPSBFbmNvZGluZy5Db2RlUG9pbnQgfHwgKEVuY29kaW5nLkNvZGVQb2ludCA9IHt9KSk7XG4gICAgfSkoRW5jb2RpbmcgPSBMWlVURjguRW5jb2RpbmcgfHwgKExaVVRGOC5FbmNvZGluZyA9IHt9KSk7XG59KShMWlVURjggfHwgKExaVVRGOCA9IHt9KSk7XG52YXIgTFpVVEY4O1xuKGZ1bmN0aW9uIChMWlVURjgpIHtcbiAgICB2YXIgRW5jb2Rpbmc7XG4gICAgKGZ1bmN0aW9uIChFbmNvZGluZykge1xuICAgICAgICB2YXIgRGVjaW1hbFN0cmluZztcbiAgICAgICAgKGZ1bmN0aW9uIChEZWNpbWFsU3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgbG9va3VwVGFibGUgPSBbXCIwMDBcIiwgXCIwMDFcIiwgXCIwMDJcIiwgXCIwMDNcIiwgXCIwMDRcIiwgXCIwMDVcIiwgXCIwMDZcIiwgXCIwMDdcIiwgXCIwMDhcIiwgXCIwMDlcIiwgXCIwMTBcIiwgXCIwMTFcIiwgXCIwMTJcIiwgXCIwMTNcIiwgXCIwMTRcIiwgXCIwMTVcIiwgXCIwMTZcIiwgXCIwMTdcIiwgXCIwMThcIiwgXCIwMTlcIiwgXCIwMjBcIiwgXCIwMjFcIiwgXCIwMjJcIiwgXCIwMjNcIiwgXCIwMjRcIiwgXCIwMjVcIiwgXCIwMjZcIiwgXCIwMjdcIiwgXCIwMjhcIiwgXCIwMjlcIiwgXCIwMzBcIiwgXCIwMzFcIiwgXCIwMzJcIiwgXCIwMzNcIiwgXCIwMzRcIiwgXCIwMzVcIiwgXCIwMzZcIiwgXCIwMzdcIiwgXCIwMzhcIiwgXCIwMzlcIiwgXCIwNDBcIiwgXCIwNDFcIiwgXCIwNDJcIiwgXCIwNDNcIiwgXCIwNDRcIiwgXCIwNDVcIiwgXCIwNDZcIiwgXCIwNDdcIiwgXCIwNDhcIiwgXCIwNDlcIiwgXCIwNTBcIiwgXCIwNTFcIiwgXCIwNTJcIiwgXCIwNTNcIiwgXCIwNTRcIiwgXCIwNTVcIiwgXCIwNTZcIiwgXCIwNTdcIiwgXCIwNThcIiwgXCIwNTlcIiwgXCIwNjBcIiwgXCIwNjFcIiwgXCIwNjJcIiwgXCIwNjNcIiwgXCIwNjRcIiwgXCIwNjVcIiwgXCIwNjZcIiwgXCIwNjdcIiwgXCIwNjhcIiwgXCIwNjlcIiwgXCIwNzBcIiwgXCIwNzFcIiwgXCIwNzJcIiwgXCIwNzNcIiwgXCIwNzRcIiwgXCIwNzVcIiwgXCIwNzZcIiwgXCIwNzdcIiwgXCIwNzhcIiwgXCIwNzlcIiwgXCIwODBcIiwgXCIwODFcIiwgXCIwODJcIiwgXCIwODNcIiwgXCIwODRcIiwgXCIwODVcIiwgXCIwODZcIiwgXCIwODdcIiwgXCIwODhcIiwgXCIwODlcIiwgXCIwOTBcIiwgXCIwOTFcIiwgXCIwOTJcIiwgXCIwOTNcIiwgXCIwOTRcIiwgXCIwOTVcIiwgXCIwOTZcIiwgXCIwOTdcIiwgXCIwOThcIiwgXCIwOTlcIiwgXCIxMDBcIiwgXCIxMDFcIiwgXCIxMDJcIiwgXCIxMDNcIiwgXCIxMDRcIiwgXCIxMDVcIiwgXCIxMDZcIiwgXCIxMDdcIiwgXCIxMDhcIiwgXCIxMDlcIiwgXCIxMTBcIiwgXCIxMTFcIiwgXCIxMTJcIiwgXCIxMTNcIiwgXCIxMTRcIiwgXCIxMTVcIiwgXCIxMTZcIiwgXCIxMTdcIiwgXCIxMThcIiwgXCIxMTlcIiwgXCIxMjBcIiwgXCIxMjFcIiwgXCIxMjJcIiwgXCIxMjNcIiwgXCIxMjRcIiwgXCIxMjVcIiwgXCIxMjZcIiwgXCIxMjdcIiwgXCIxMjhcIiwgXCIxMjlcIiwgXCIxMzBcIiwgXCIxMzFcIiwgXCIxMzJcIiwgXCIxMzNcIiwgXCIxMzRcIiwgXCIxMzVcIiwgXCIxMzZcIiwgXCIxMzdcIiwgXCIxMzhcIiwgXCIxMzlcIiwgXCIxNDBcIiwgXCIxNDFcIiwgXCIxNDJcIiwgXCIxNDNcIiwgXCIxNDRcIiwgXCIxNDVcIiwgXCIxNDZcIiwgXCIxNDdcIiwgXCIxNDhcIiwgXCIxNDlcIiwgXCIxNTBcIiwgXCIxNTFcIiwgXCIxNTJcIiwgXCIxNTNcIiwgXCIxNTRcIiwgXCIxNTVcIiwgXCIxNTZcIiwgXCIxNTdcIiwgXCIxNThcIiwgXCIxNTlcIiwgXCIxNjBcIiwgXCIxNjFcIiwgXCIxNjJcIiwgXCIxNjNcIiwgXCIxNjRcIiwgXCIxNjVcIiwgXCIxNjZcIiwgXCIxNjdcIiwgXCIxNjhcIiwgXCIxNjlcIiwgXCIxNzBcIiwgXCIxNzFcIiwgXCIxNzJcIiwgXCIxNzNcIiwgXCIxNzRcIiwgXCIxNzVcIiwgXCIxNzZcIiwgXCIxNzdcIiwgXCIxNzhcIiwgXCIxNzlcIiwgXCIxODBcIiwgXCIxODFcIiwgXCIxODJcIiwgXCIxODNcIiwgXCIxODRcIiwgXCIxODVcIiwgXCIxODZcIiwgXCIxODdcIiwgXCIxODhcIiwgXCIxODlcIiwgXCIxOTBcIiwgXCIxOTFcIiwgXCIxOTJcIiwgXCIxOTNcIiwgXCIxOTRcIiwgXCIxOTVcIiwgXCIxOTZcIiwgXCIxOTdcIiwgXCIxOThcIiwgXCIxOTlcIiwgXCIyMDBcIiwgXCIyMDFcIiwgXCIyMDJcIiwgXCIyMDNcIiwgXCIyMDRcIiwgXCIyMDVcIiwgXCIyMDZcIiwgXCIyMDdcIiwgXCIyMDhcIiwgXCIyMDlcIiwgXCIyMTBcIiwgXCIyMTFcIiwgXCIyMTJcIiwgXCIyMTNcIiwgXCIyMTRcIiwgXCIyMTVcIiwgXCIyMTZcIiwgXCIyMTdcIiwgXCIyMThcIiwgXCIyMTlcIiwgXCIyMjBcIiwgXCIyMjFcIiwgXCIyMjJcIiwgXCIyMjNcIiwgXCIyMjRcIiwgXCIyMjVcIiwgXCIyMjZcIiwgXCIyMjdcIiwgXCIyMjhcIiwgXCIyMjlcIiwgXCIyMzBcIiwgXCIyMzFcIiwgXCIyMzJcIiwgXCIyMzNcIiwgXCIyMzRcIiwgXCIyMzVcIiwgXCIyMzZcIiwgXCIyMzdcIiwgXCIyMzhcIiwgXCIyMzlcIiwgXCIyNDBcIiwgXCIyNDFcIiwgXCIyNDJcIiwgXCIyNDNcIiwgXCIyNDRcIiwgXCIyNDVcIiwgXCIyNDZcIiwgXCIyNDdcIiwgXCIyNDhcIiwgXCIyNDlcIiwgXCIyNTBcIiwgXCIyNTFcIiwgXCIyNTJcIiwgXCIyNTNcIiwgXCIyNTRcIiwgXCIyNTVcIl07XG4gICAgICAgICAgICBEZWNpbWFsU3RyaW5nLmVuY29kZSA9IGZ1bmN0aW9uIChiaW5hcnlCeXRlcykge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHRBcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmluYXJ5Qnl0ZXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdEFycmF5LnB1c2gobG9va3VwVGFibGVbYmluYXJ5Qnl0ZXNbaV1dKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0QXJyYXkuam9pbihcIiBcIik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KShEZWNpbWFsU3RyaW5nID0gRW5jb2RpbmcuRGVjaW1hbFN0cmluZyB8fCAoRW5jb2RpbmcuRGVjaW1hbFN0cmluZyA9IHt9KSk7XG4gICAgfSkoRW5jb2RpbmcgPSBMWlVURjguRW5jb2RpbmcgfHwgKExaVVRGOC5FbmNvZGluZyA9IHt9KSk7XG59KShMWlVURjggfHwgKExaVVRGOCA9IHt9KSk7XG52YXIgTFpVVEY4O1xuKGZ1bmN0aW9uIChMWlVURjgpIHtcbiAgICB2YXIgRW5jb2Rpbmc7XG4gICAgKGZ1bmN0aW9uIChFbmNvZGluZykge1xuICAgICAgICB2YXIgVVRGODtcbiAgICAgICAgKGZ1bmN0aW9uIChVVEY4KSB7XG4gICAgICAgICAgICB2YXIgbmF0aXZlVGV4dEVuY29kZXI7XG4gICAgICAgICAgICB2YXIgbmF0aXZlVGV4dERlY29kZXI7XG4gICAgICAgICAgICBVVEY4LmVuY29kZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXN0ciB8fCBzdHIubGVuZ3RoID09IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSgwKTtcbiAgICAgICAgICAgICAgICBpZiAoTFpVVEY4LnJ1bm5pbmdJbk5vZGVKUygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBMWlVURjguQnVmZmVyVG9vbHMuYnVmZmVyVG9VaW50OEFycmF5KG5ldyBCdWZmZXIoc3RyLCBcInV0ZjhcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChVVEY4LmNyZWF0ZU5hdGl2ZVRleHRFbmNvZGVyQW5kRGVjb2RlcklmQXZhaWxhYmxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZVRleHRFbmNvZGVyLmVuY29kZShzdHIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFVURjguZW5jb2RlV2l0aEpTKHN0cik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFVURjguZGVjb2RlID0gZnVuY3Rpb24gKHV0ZjhCeXRlcykge1xuICAgICAgICAgICAgICAgIGlmICghdXRmOEJ5dGVzIHx8IHV0ZjhCeXRlcy5sZW5ndGggPT0gMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgaWYgKExaVVRGOC5ydW5uaW5nSW5Ob2RlSlMoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTFpVVEY4LkJ1ZmZlclRvb2xzLnVpbnQ4QXJyYXlUb0J1ZmZlcih1dGY4Qnl0ZXMpLnRvU3RyaW5nKFwidXRmOFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoVVRGOC5jcmVhdGVOYXRpdmVUZXh0RW5jb2RlckFuZERlY29kZXJJZkF2YWlsYWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuYXRpdmVUZXh0RGVjb2Rlci5kZWNvZGUodXRmOEJ5dGVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBVVEY4LmRlY29kZVdpdGhKUyh1dGY4Qnl0ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBVVEY4LmVuY29kZVdpdGhKUyA9IGZ1bmN0aW9uIChzdHIsIG91dHB1dEFycmF5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzdHIgfHwgc3RyLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoMCk7XG4gICAgICAgICAgICAgICAgaWYgKCFvdXRwdXRBcnJheSlcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0QXJyYXkgPSBuZXcgVWludDhBcnJheShzdHIubGVuZ3RoICogNCk7XG4gICAgICAgICAgICAgICAgdmFyIHdyaXRlSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHJlYWRJbmRleCA9IDA7IHJlYWRJbmRleCA8IHN0ci5sZW5ndGg7IHJlYWRJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGFyQ29kZSA9IEVuY29kaW5nLkNvZGVQb2ludC5lbmNvZGVGcm9tU3RyaW5nKHN0ciwgcmVhZEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXJDb2RlIDw9IDB4N0YpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dEFycmF5W3dyaXRlSW5kZXgrK10gPSBjaGFyQ29kZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFyQ29kZSA8PSAweDdGRikge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0QXJyYXlbd3JpdGVJbmRleCsrXSA9IDB4QzAgfCAoY2hhckNvZGUgPj4+IDYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0QXJyYXlbd3JpdGVJbmRleCsrXSA9IDB4ODAgfCAoY2hhckNvZGUgJiA2Myk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hhckNvZGUgPD0gMHhGRkZGKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRBcnJheVt3cml0ZUluZGV4KytdID0gMHhFMCB8IChjaGFyQ29kZSA+Pj4gMTIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0QXJyYXlbd3JpdGVJbmRleCsrXSA9IDB4ODAgfCAoKGNoYXJDb2RlID4+PiA2KSAmIDYzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dEFycmF5W3dyaXRlSW5kZXgrK10gPSAweDgwIHwgKGNoYXJDb2RlICYgNjMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYXJDb2RlIDw9IDB4MTBGRkZGKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRBcnJheVt3cml0ZUluZGV4KytdID0gMHhGMCB8IChjaGFyQ29kZSA+Pj4gMTgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0QXJyYXlbd3JpdGVJbmRleCsrXSA9IDB4ODAgfCAoKGNoYXJDb2RlID4+PiAxMikgJiA2Myk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRBcnJheVt3cml0ZUluZGV4KytdID0gMHg4MCB8ICgoY2hhckNvZGUgPj4+IDYpICYgNjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0QXJyYXlbd3JpdGVJbmRleCsrXSA9IDB4ODAgfCAoY2hhckNvZGUgJiA2Myk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIFVURi0xNiBzdHJpbmc6IEVuY291bnRlcmVkIGEgY2hhcmFjdGVyIHVuc3VwcG9ydGVkIGJ5IFVURi04LzE2IChSRkMgMzYyOSlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXRBcnJheS5zdWJhcnJheSgwLCB3cml0ZUluZGV4KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBVVEY4LmRlY29kZVdpdGhKUyA9IGZ1bmN0aW9uICh1dGY4Qnl0ZXMsIHN0YXJ0T2Zmc2V0LCBlbmRPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRPZmZzZXQgPT09IHZvaWQgMCkgeyBzdGFydE9mZnNldCA9IDA7IH1cbiAgICAgICAgICAgICAgICBpZiAoIXV0ZjhCeXRlcyB8fCB1dGY4Qnl0ZXMubGVuZ3RoID09IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgICAgIGlmIChlbmRPZmZzZXQgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgZW5kT2Zmc2V0ID0gdXRmOEJ5dGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IExaVVRGOC5TdHJpbmdCdWlsZGVyKCk7XG4gICAgICAgICAgICAgICAgdmFyIG91dHB1dENvZGVQb2ludDtcbiAgICAgICAgICAgICAgICB2YXIgbGVhZEJ5dGU7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcmVhZEluZGV4ID0gc3RhcnRPZmZzZXQsIGxlbmd0aF82ID0gZW5kT2Zmc2V0OyByZWFkSW5kZXggPCBsZW5ndGhfNjspIHtcbiAgICAgICAgICAgICAgICAgICAgbGVhZEJ5dGUgPSB1dGY4Qnl0ZXNbcmVhZEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChsZWFkQnl0ZSA+Pj4gNykgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dENvZGVQb2ludCA9IGxlYWRCeXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZEluZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKGxlYWRCeXRlID4+PiA1KSA9PT0gNikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlYWRJbmRleCArIDEgPj0gZW5kT2Zmc2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgVVRGLTggc3RyZWFtOiBUcnVuY2F0ZWQgY29kZXBvaW50IHNlcXVlbmNlIGVuY291bnRlcmVkIGF0IHBvc2l0aW9uIFwiICsgcmVhZEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dENvZGVQb2ludCA9ICgobGVhZEJ5dGUgJiAzMSkgPDwgNikgfCAodXRmOEJ5dGVzW3JlYWRJbmRleCArIDFdICYgNjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKGxlYWRCeXRlID4+PiA0KSA9PT0gMTQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWFkSW5kZXggKyAyID49IGVuZE9mZnNldClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIFVURi04IHN0cmVhbTogVHJ1bmNhdGVkIGNvZGVwb2ludCBzZXF1ZW5jZSBlbmNvdW50ZXJlZCBhdCBwb3NpdGlvbiBcIiArIHJlYWRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRDb2RlUG9pbnQgPSAoKGxlYWRCeXRlICYgMTUpIDw8IDEyKSB8ICgodXRmOEJ5dGVzW3JlYWRJbmRleCArIDFdICYgNjMpIDw8IDYpIHwgKHV0ZjhCeXRlc1tyZWFkSW5kZXggKyAyXSAmIDYzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRJbmRleCArPSAzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChsZWFkQnl0ZSA+Pj4gMykgPT09IDMwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVhZEluZGV4ICsgMyA+PSBlbmRPZmZzZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBVVEYtOCBzdHJlYW06IFRydW5jYXRlZCBjb2RlcG9pbnQgc2VxdWVuY2UgZW5jb3VudGVyZWQgYXQgcG9zaXRpb24gXCIgKyByZWFkSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0Q29kZVBvaW50ID0gKChsZWFkQnl0ZSAmIDcpIDw8IDE4KSB8ICgodXRmOEJ5dGVzW3JlYWRJbmRleCArIDFdICYgNjMpIDw8IDEyKSB8ICgodXRmOEJ5dGVzW3JlYWRJbmRleCArIDJdICYgNjMpIDw8IDYpIHwgKHV0ZjhCeXRlc1tyZWFkSW5kZXggKyAzXSAmIDYzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRJbmRleCArPSA0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgVVRGLTggc3RyZWFtOiBBbiBpbnZhbGlkIGxlYWQgYnl0ZSB2YWx1ZSBlbmNvdW50ZXJlZCBhdCBwb3NpdGlvbiBcIiArIHJlYWRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5hcHBlbmRDb2RlUG9pbnQob3V0cHV0Q29kZVBvaW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dC5nZXRPdXRwdXRTdHJpbmcoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBVVEY4LmNyZWF0ZU5hdGl2ZVRleHRFbmNvZGVyQW5kRGVjb2RlcklmQXZhaWxhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChuYXRpdmVUZXh0RW5jb2RlcilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBUZXh0RW5jb2RlciA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlVGV4dEVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoXCJ1dGYtOFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlVGV4dERlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoXCJ1dGYtOFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkoVVRGOCA9IEVuY29kaW5nLlVURjggfHwgKEVuY29kaW5nLlVURjggPSB7fSkpO1xuICAgIH0pKEVuY29kaW5nID0gTFpVVEY4LkVuY29kaW5nIHx8IChMWlVURjguRW5jb2RpbmcgPSB7fSkpO1xufSkoTFpVVEY4IHx8IChMWlVURjggPSB7fSkpO1xudmFyIExaVVRGODtcbihmdW5jdGlvbiAoTFpVVEY4KSB7XG4gICAgZnVuY3Rpb24gY29tcHJlc3MoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgaWYgKGlucHV0ID09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiY29tcHJlc3M6IHVuZGVmaW5lZCBvciBudWxsIGlucHV0IHJlY2VpdmVkXCIpO1xuICAgICAgICB2YXIgaW5wdXRFbmNvZGluZyA9IExaVVRGOC5Db21wcmVzc2lvbkNvbW1vbi5kZXRlY3RDb21wcmVzc2lvblNvdXJjZUVuY29kaW5nKGlucHV0KTtcbiAgICAgICAgb3B0aW9ucyA9IExaVVRGOC5PYmplY3RUb29scy5vdmVycmlkZSh7IGlucHV0RW5jb2Rpbmc6IGlucHV0RW5jb2RpbmcsIG91dHB1dEVuY29kaW5nOiBcIkJ5dGVBcnJheVwiIH0sIG9wdGlvbnMpO1xuICAgICAgICB2YXIgY29tcHJlc3NvciA9IG5ldyBMWlVURjguQ29tcHJlc3NvcigpO1xuICAgICAgICB2YXIgY29tcHJlc3NlZEJ5dGVzID0gY29tcHJlc3Nvci5jb21wcmVzc0Jsb2NrKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIExaVVRGOC5Db21wcmVzc2lvbkNvbW1vbi5lbmNvZGVDb21wcmVzc2VkQnl0ZXMoY29tcHJlc3NlZEJ5dGVzLCBvcHRpb25zLm91dHB1dEVuY29kaW5nKTtcbiAgICB9XG4gICAgTFpVVEY4LmNvbXByZXNzID0gY29tcHJlc3M7XG4gICAgZnVuY3Rpb24gZGVjb21wcmVzcyhpbnB1dCwgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICBpZiAoaW5wdXQgPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJkZWNvbXByZXNzOiB1bmRlZmluZWQgb3IgbnVsbCBpbnB1dCByZWNlaXZlZFwiKTtcbiAgICAgICAgb3B0aW9ucyA9IExaVVRGOC5PYmplY3RUb29scy5vdmVycmlkZSh7IGlucHV0RW5jb2Rpbmc6IFwiQnl0ZUFycmF5XCIsIG91dHB1dEVuY29kaW5nOiBcIlN0cmluZ1wiIH0sIG9wdGlvbnMpO1xuICAgICAgICB2YXIgaW5wdXRCeXRlcyA9IExaVVRGOC5Db21wcmVzc2lvbkNvbW1vbi5kZWNvZGVDb21wcmVzc2VkQnl0ZXMoaW5wdXQsIG9wdGlvbnMuaW5wdXRFbmNvZGluZyk7XG4gICAgICAgIHZhciBkZWNvbXByZXNzb3IgPSBuZXcgTFpVVEY4LkRlY29tcHJlc3NvcigpO1xuICAgICAgICB2YXIgZGVjb21wcmVzc2VkQnl0ZXMgPSBkZWNvbXByZXNzb3IuZGVjb21wcmVzc0Jsb2NrKGlucHV0Qnl0ZXMpO1xuICAgICAgICByZXR1cm4gTFpVVEY4LkNvbXByZXNzaW9uQ29tbW9uLmVuY29kZURlY29tcHJlc3NlZEJ5dGVzKGRlY29tcHJlc3NlZEJ5dGVzLCBvcHRpb25zLm91dHB1dEVuY29kaW5nKTtcbiAgICB9XG4gICAgTFpVVEY4LmRlY29tcHJlc3MgPSBkZWNvbXByZXNzO1xuICAgIGZ1bmN0aW9uIGNvbXByZXNzQXN5bmMoaW5wdXQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChjYWxsYmFjayA9PSBudWxsKVxuICAgICAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgIHZhciBpbnB1dEVuY29kaW5nO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaW5wdXRFbmNvZGluZyA9IExaVVRGOC5Db21wcmVzc2lvbkNvbW1vbi5kZXRlY3RDb21wcmVzc2lvblNvdXJjZUVuY29kaW5nKGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY2FsbGJhY2sodW5kZWZpbmVkLCBlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zID0gTFpVVEY4Lk9iamVjdFRvb2xzLm92ZXJyaWRlKHtcbiAgICAgICAgICAgIGlucHV0RW5jb2Rpbmc6IGlucHV0RW5jb2RpbmcsXG4gICAgICAgICAgICBvdXRwdXRFbmNvZGluZzogXCJCeXRlQXJyYXlcIixcbiAgICAgICAgICAgIHVzZVdlYldvcmtlcjogdHJ1ZSxcbiAgICAgICAgICAgIGJsb2NrU2l6ZTogNjU1MzZcbiAgICAgICAgfSwgb3B0aW9ucyk7XG4gICAgICAgIExaVVRGOC5lbnF1ZXVlSW1tZWRpYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnVzZVdlYldvcmtlciAmJiBMWlVURjguV2ViV29ya2VyLmNyZWF0ZUdsb2JhbFdvcmtlcklmTmVlZGVkKCkpIHtcbiAgICAgICAgICAgICAgICBMWlVURjguV2ViV29ya2VyLmNvbXByZXNzQXN5bmMoaW5wdXQsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIExaVVRGOC5Bc3luY0NvbXByZXNzb3IuY29tcHJlc3NBc3luYyhpbnB1dCwgb3B0aW9ucywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgTFpVVEY4LmNvbXByZXNzQXN5bmMgPSBjb21wcmVzc0FzeW5jO1xuICAgIGZ1bmN0aW9uIGRlY29tcHJlc3NBc3luYyhpbnB1dCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrID09IG51bGwpXG4gICAgICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgaWYgKGlucHV0ID09IG51bGwpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKHVuZGVmaW5lZCwgbmV3IFR5cGVFcnJvcihcImRlY29tcHJlc3NBc3luYzogdW5kZWZpbmVkIG9yIG51bGwgaW5wdXQgcmVjZWl2ZWRcIikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMgPSBMWlVURjguT2JqZWN0VG9vbHMub3ZlcnJpZGUoe1xuICAgICAgICAgICAgaW5wdXRFbmNvZGluZzogXCJCeXRlQXJyYXlcIixcbiAgICAgICAgICAgIG91dHB1dEVuY29kaW5nOiBcIlN0cmluZ1wiLFxuICAgICAgICAgICAgdXNlV2ViV29ya2VyOiB0cnVlLFxuICAgICAgICAgICAgYmxvY2tTaXplOiA2NTUzNlxuICAgICAgICB9LCBvcHRpb25zKTtcbiAgICAgICAgdmFyIG5vcm1hbGl6ZWRJbnB1dCA9IExaVVRGOC5CdWZmZXJUb29scy5jb252ZXJ0VG9VaW50OEFycmF5SWZOZWVkZWQoaW5wdXQpO1xuICAgICAgICBMWlVURjguRXZlbnRMb29wLmVucXVldWVJbW1lZGlhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMudXNlV2ViV29ya2VyICYmIExaVVRGOC5XZWJXb3JrZXIuY3JlYXRlR2xvYmFsV29ya2VySWZOZWVkZWQoKSkge1xuICAgICAgICAgICAgICAgIExaVVRGOC5XZWJXb3JrZXIuZGVjb21wcmVzc0FzeW5jKG5vcm1hbGl6ZWRJbnB1dCwgb3B0aW9ucywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgTFpVVEY4LkFzeW5jRGVjb21wcmVzc29yLmRlY29tcHJlc3NBc3luYyhpbnB1dCwgb3B0aW9ucywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgTFpVVEY4LmRlY29tcHJlc3NBc3luYyA9IGRlY29tcHJlc3NBc3luYztcbiAgICBmdW5jdGlvbiBjcmVhdGVDb21wcmVzc2lvblN0cmVhbSgpIHtcbiAgICAgICAgcmV0dXJuIExaVVRGOC5Bc3luY0NvbXByZXNzb3IuY3JlYXRlQ29tcHJlc3Npb25TdHJlYW0oKTtcbiAgICB9XG4gICAgTFpVVEY4LmNyZWF0ZUNvbXByZXNzaW9uU3RyZWFtID0gY3JlYXRlQ29tcHJlc3Npb25TdHJlYW07XG4gICAgZnVuY3Rpb24gY3JlYXRlRGVjb21wcmVzc2lvblN0cmVhbSgpIHtcbiAgICAgICAgcmV0dXJuIExaVVRGOC5Bc3luY0RlY29tcHJlc3Nvci5jcmVhdGVEZWNvbXByZXNzaW9uU3RyZWFtKCk7XG4gICAgfVxuICAgIExaVVRGOC5jcmVhdGVEZWNvbXByZXNzaW9uU3RyZWFtID0gY3JlYXRlRGVjb21wcmVzc2lvblN0cmVhbTtcbiAgICBmdW5jdGlvbiBlbmNvZGVVVEY4KHN0cikge1xuICAgICAgICByZXR1cm4gTFpVVEY4LkVuY29kaW5nLlVURjguZW5jb2RlKHN0cik7XG4gICAgfVxuICAgIExaVVRGOC5lbmNvZGVVVEY4ID0gZW5jb2RlVVRGODtcbiAgICBmdW5jdGlvbiBkZWNvZGVVVEY4KGlucHV0KSB7XG4gICAgICAgIHJldHVybiBMWlVURjguRW5jb2RpbmcuVVRGOC5kZWNvZGUoaW5wdXQpO1xuICAgIH1cbiAgICBMWlVURjguZGVjb2RlVVRGOCA9IGRlY29kZVVURjg7XG4gICAgZnVuY3Rpb24gZW5jb2RlQmFzZTY0KGlucHV0KSB7XG4gICAgICAgIHJldHVybiBMWlVURjguRW5jb2RpbmcuQmFzZTY0LmVuY29kZShpbnB1dCk7XG4gICAgfVxuICAgIExaVVRGOC5lbmNvZGVCYXNlNjQgPSBlbmNvZGVCYXNlNjQ7XG4gICAgZnVuY3Rpb24gZGVjb2RlQmFzZTY0KHN0cikge1xuICAgICAgICByZXR1cm4gTFpVVEY4LkVuY29kaW5nLkJhc2U2NC5kZWNvZGUoc3RyKTtcbiAgICB9XG4gICAgTFpVVEY4LmRlY29kZUJhc2U2NCA9IGRlY29kZUJhc2U2NDtcbiAgICBmdW5jdGlvbiBlbmNvZGVCaW5hcnlTdHJpbmcoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIExaVVRGOC5FbmNvZGluZy5CaW5hcnlTdHJpbmcuZW5jb2RlKGlucHV0KTtcbiAgICB9XG4gICAgTFpVVEY4LmVuY29kZUJpbmFyeVN0cmluZyA9IGVuY29kZUJpbmFyeVN0cmluZztcbiAgICBmdW5jdGlvbiBkZWNvZGVCaW5hcnlTdHJpbmcoc3RyKSB7XG4gICAgICAgIHJldHVybiBMWlVURjguRW5jb2RpbmcuQmluYXJ5U3RyaW5nLmRlY29kZShzdHIpO1xuICAgIH1cbiAgICBMWlVURjguZGVjb2RlQmluYXJ5U3RyaW5nID0gZGVjb2RlQmluYXJ5U3RyaW5nO1xufSkoTFpVVEY4IHx8IChMWlVURjggPSB7fSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==