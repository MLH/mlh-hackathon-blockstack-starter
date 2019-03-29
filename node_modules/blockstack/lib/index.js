'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decryptMnemonic = exports.encryptMnemonic = exports.config = exports.decodeToken = exports.network = exports.IdentityKeyPair = exports.BlockstackWallet = exports.estimateTXBytes = exports.addUTXOsToFund = exports.PubkeyHashSigner = exports.TransactionSigner = exports.safety = exports.transactions = exports.ecPairToAddress = exports.ecPairToHexString = exports.hexStringToECPair = exports.isSameOriginAbsoluteUrl = exports.isLaterVersion = exports.updateQueryStringParameter = exports.makeUUID4 = exports.nextHour = exports.nextMonth = exports.nextYear = exports.getPublicKeyFromPrivate = exports.publicKeyToAddress = exports.makeECPrivateKey = exports.getEntropy = exports.getAddressFromDID = exports.getDIDType = exports.makeDIDFromPublicKey = exports.makeDIDFromAddress = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _auth = require('./auth');

Object.keys(_auth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _auth[key];
    }
  });
});

var _profiles = require('./profiles');

Object.keys(_profiles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _profiles[key];
    }
  });
});

var _storage = require('./storage');

Object.keys(_storage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _storage[key];
    }
  });
});

var _dids = require('./dids');

Object.defineProperty(exports, 'makeDIDFromAddress', {
  enumerable: true,
  get: function get() {
    return _dids.makeDIDFromAddress;
  }
});
Object.defineProperty(exports, 'makeDIDFromPublicKey', {
  enumerable: true,
  get: function get() {
    return _dids.makeDIDFromPublicKey;
  }
});
Object.defineProperty(exports, 'getDIDType', {
  enumerable: true,
  get: function get() {
    return _dids.getDIDType;
  }
});
Object.defineProperty(exports, 'getAddressFromDID', {
  enumerable: true,
  get: function get() {
    return _dids.getAddressFromDID;
  }
});

var _keys = require('./keys');

Object.defineProperty(exports, 'getEntropy', {
  enumerable: true,
  get: function get() {
    return _keys.getEntropy;
  }
});
Object.defineProperty(exports, 'makeECPrivateKey', {
  enumerable: true,
  get: function get() {
    return _keys.makeECPrivateKey;
  }
});
Object.defineProperty(exports, 'publicKeyToAddress', {
  enumerable: true,
  get: function get() {
    return _keys.publicKeyToAddress;
  }
});
Object.defineProperty(exports, 'getPublicKeyFromPrivate', {
  enumerable: true,
  get: function get() {
    return _keys.getPublicKeyFromPrivate;
  }
});

var _utils = require('./utils');

Object.defineProperty(exports, 'nextYear', {
  enumerable: true,
  get: function get() {
    return _utils.nextYear;
  }
});
Object.defineProperty(exports, 'nextMonth', {
  enumerable: true,
  get: function get() {
    return _utils.nextMonth;
  }
});
Object.defineProperty(exports, 'nextHour', {
  enumerable: true,
  get: function get() {
    return _utils.nextHour;
  }
});
Object.defineProperty(exports, 'makeUUID4', {
  enumerable: true,
  get: function get() {
    return _utils.makeUUID4;
  }
});
Object.defineProperty(exports, 'updateQueryStringParameter', {
  enumerable: true,
  get: function get() {
    return _utils.updateQueryStringParameter;
  }
});
Object.defineProperty(exports, 'isLaterVersion', {
  enumerable: true,
  get: function get() {
    return _utils.isLaterVersion;
  }
});
Object.defineProperty(exports, 'isSameOriginAbsoluteUrl', {
  enumerable: true,
  get: function get() {
    return _utils.isSameOriginAbsoluteUrl;
  }
});
Object.defineProperty(exports, 'hexStringToECPair', {
  enumerable: true,
  get: function get() {
    return _utils.hexStringToECPair;
  }
});
Object.defineProperty(exports, 'ecPairToHexString', {
  enumerable: true,
  get: function get() {
    return _utils.ecPairToHexString;
  }
});
Object.defineProperty(exports, 'ecPairToAddress', {
  enumerable: true,
  get: function get() {
    return _utils.ecPairToAddress;
  }
});

var _operations = require('./operations');

Object.defineProperty(exports, 'transactions', {
  enumerable: true,
  get: function get() {
    return _operations.transactions;
  }
});
Object.defineProperty(exports, 'safety', {
  enumerable: true,
  get: function get() {
    return _operations.safety;
  }
});
Object.defineProperty(exports, 'TransactionSigner', {
  enumerable: true,
  get: function get() {
    return _operations.TransactionSigner;
  }
});
Object.defineProperty(exports, 'PubkeyHashSigner', {
  enumerable: true,
  get: function get() {
    return _operations.PubkeyHashSigner;
  }
});
Object.defineProperty(exports, 'addUTXOsToFund', {
  enumerable: true,
  get: function get() {
    return _operations.addUTXOsToFund;
  }
});
Object.defineProperty(exports, 'estimateTXBytes', {
  enumerable: true,
  get: function get() {
    return _operations.estimateTXBytes;
  }
});

var _wallet = require('./wallet');

Object.defineProperty(exports, 'BlockstackWallet', {
  enumerable: true,
  get: function get() {
    return _wallet.BlockstackWallet;
  }
});
Object.defineProperty(exports, 'IdentityKeyPair', {
  enumerable: true,
  get: function get() {
    return _wallet.IdentityKeyPair;
  }
});

var _network = require('./network');

Object.defineProperty(exports, 'network', {
  enumerable: true,
  get: function get() {
    return _network.network;
  }
});

var _jsontokens = require('jsontokens');

Object.defineProperty(exports, 'decodeToken', {
  enumerable: true,
  get: function get() {
    return _jsontokens.decodeToken;
  }
});

var _config = require('./config');

Object.defineProperty(exports, 'config', {
  enumerable: true,
  get: function get() {
    return _config.config;
  }
});

var _encryption = require('./encryption');

Object.defineProperty(exports, 'encryptMnemonic', {
  enumerable: true,
  get: function get() {
    return _encryption.encryptMnemonic;
  }
});
Object.defineProperty(exports, 'decryptMnemonic', {
  enumerable: true,
  get: function get() {
    return _encryption.decryptMnemonic;
  }
});

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Putting in here so it executes ASAP. There is probably a better place to put this.
// Note: This prototype is designed to work as a drop-in-replacement (non-breaking upgrade)
// for apps using blockstack.js. That requires doing this hacky global & immediate detection. 
// A more proper approach would require developers to call an additional blockstack.js method 
// for invoking this detection method.
(function protocolEchoReplyDetection() {
  // Check that the `window` APIs exist
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !window.location || !window.localStorage) {
    // Exit detection function - we are not running in a browser environment.
    return;
  }
  // Check if the location query string contains a protocol-echo reply.
  // If so, this page was only re-opened to signal back the originating 
  // tab that the protocol handler is installed. 
  var queryDict = _queryString2.default.parse(window.location.search);
  if (queryDict.echoReply) {
    // Use localStorage to notify originated tab that protocol handler is available and working.
    var echoReplyKey = 'echo-reply-' + queryDict.echoReply;
    // Set the echo-reply result in localStorage for the other window to see.
    window.localStorage.setItem(echoReplyKey, 'success');
    // Redirect back to the localhost auth url, as opposed to another protocol launch.
    // This will re-use the same tab rather than creating another useless one.
    window.setTimeout(function () {
      window.location = decodeURIComponent(queryDict.authContinuation);
    }, 10);
  }
})();