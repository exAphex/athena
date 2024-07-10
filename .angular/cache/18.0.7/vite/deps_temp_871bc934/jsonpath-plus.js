import "./chunk-J4B6MK7R.js";

// node_modules/jsonpath-plus/dist/index-browser-esm.js
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct())
    return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function() {
    return !!t;
  })();
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeFunction(fn) {
  try {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  } catch (e) {
    return typeof fn === "function";
  }
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return {
        s: F,
        n: function() {
          if (i >= o.length)
            return {
              done: true
            };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function(e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return {
    s: function() {
      it = it.call(o);
    },
    n: function() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function(e) {
      didErr = true;
      err = e;
    },
    f: function() {
      try {
        if (!normalCompletion && it.return != null)
          it.return();
      } finally {
        if (didErr)
          throw err;
      }
    }
  };
}
var Hooks = function() {
  function Hooks2() {
    _classCallCheck(this, Hooks2);
  }
  return _createClass(Hooks2, [{
    key: "add",
    value: (
      /**
       * @callback HookCallback
       * @this {*|Jsep} this
       * @param {Jsep} env
       * @returns: void
       */
      /**
       * Adds the given callback to the list of callbacks for the given hook.
       *
       * The callback will be invoked when the hook it is registered for is run.
       *
       * One callback function can be registered to multiple hooks and the same hook multiple times.
       *
       * @param {string|object} name The name of the hook, or an object of callbacks keyed by name
       * @param {HookCallback|boolean} callback The callback function which is given environment variables.
       * @param {?boolean} [first=false] Will add the hook to the top of the list (defaults to the bottom)
       * @public
       */
      function add(name, callback, first) {
        if (typeof arguments[0] != "string") {
          for (var _name in arguments[0]) {
            this.add(_name, arguments[0][_name], arguments[1]);
          }
        } else {
          (Array.isArray(name) ? name : [name]).forEach(function(name2) {
            this[name2] = this[name2] || [];
            if (callback) {
              this[name2][first ? "unshift" : "push"](callback);
            }
          }, this);
        }
      }
    )
    /**
     * Runs a hook invoking all registered callbacks with the given environment variables.
     *
     * Callbacks will be invoked synchronously and in the order in which they were registered.
     *
     * @param {string} name The name of the hook.
     * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
     * @public
     */
  }, {
    key: "run",
    value: function run(name, env) {
      this[name] = this[name] || [];
      this[name].forEach(function(callback) {
        callback.call(env && env.context ? env.context : env, env);
      });
    }
  }]);
}();
var Plugins = function() {
  function Plugins2(jsep3) {
    _classCallCheck(this, Plugins2);
    this.jsep = jsep3;
    this.registered = {};
  }
  return _createClass(Plugins2, [{
    key: "register",
    value: function register() {
      var _this = this;
      for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
        plugins[_key] = arguments[_key];
      }
      plugins.forEach(function(plugin2) {
        if (_typeof(plugin2) !== "object" || !plugin2.name || !plugin2.init) {
          throw new Error("Invalid JSEP plugin format");
        }
        if (_this.registered[plugin2.name]) {
          return;
        }
        plugin2.init(_this.jsep);
        _this.registered[plugin2.name] = plugin2;
      });
    }
  }]);
}();
var Jsep = function() {
  function Jsep2(expr) {
    _classCallCheck(this, Jsep2);
    this.expr = expr;
    this.index = 0;
  }
  return _createClass(Jsep2, [{
    key: "char",
    get: (
      // ==================== END CONFIG ============================
      /**
       * @returns {string}
       */
      function get() {
        return this.expr.charAt(this.index);
      }
    )
    /**
     * @returns {number}
     */
  }, {
    key: "code",
    get: function get() {
      return this.expr.charCodeAt(this.index);
    }
  }, {
    key: "throwError",
    value: (
      /**
       * throw error at index of the expression
       * @param {string} message
       * @throws
       */
      function throwError(message) {
        var error = new Error(message + " at character " + this.index);
        error.index = this.index;
        error.description = message;
        throw error;
      }
    )
    /**
     * Run a given hook
     * @param {string} name
     * @param {jsep.Expression|false} [node]
     * @returns {?jsep.Expression}
     */
  }, {
    key: "runHook",
    value: function runHook(name, node) {
      if (Jsep2.hooks[name]) {
        var env = {
          context: this,
          node
        };
        Jsep2.hooks.run(name, env);
        return env.node;
      }
      return node;
    }
    /**
     * Runs a given hook until one returns a node
     * @param {string} name
     * @returns {?jsep.Expression}
     */
  }, {
    key: "searchHook",
    value: function searchHook(name) {
      if (Jsep2.hooks[name]) {
        var env = {
          context: this
        };
        Jsep2.hooks[name].find(function(callback) {
          callback.call(env.context, env);
          return env.node;
        });
        return env.node;
      }
    }
    /**
     * Push `index` up to the next non-space character
     */
  }, {
    key: "gobbleSpaces",
    value: function gobbleSpaces() {
      var ch = this.code;
      while (ch === Jsep2.SPACE_CODE || ch === Jsep2.TAB_CODE || ch === Jsep2.LF_CODE || ch === Jsep2.CR_CODE) {
        ch = this.expr.charCodeAt(++this.index);
      }
      this.runHook("gobble-spaces");
    }
    /**
     * Top-level method to parse all expressions and returns compound or single node
     * @returns {jsep.Expression}
     */
  }, {
    key: "parse",
    value: function parse() {
      this.runHook("before-all");
      var nodes = this.gobbleExpressions();
      var node = nodes.length === 1 ? nodes[0] : {
        type: Jsep2.COMPOUND,
        body: nodes
      };
      return this.runHook("after-all", node);
    }
    /**
     * top-level parser (but can be reused within as well)
     * @param {number} [untilICode]
     * @returns {jsep.Expression[]}
     */
  }, {
    key: "gobbleExpressions",
    value: function gobbleExpressions(untilICode) {
      var nodes = [], ch_i, node;
      while (this.index < this.expr.length) {
        ch_i = this.code;
        if (ch_i === Jsep2.SEMCOL_CODE || ch_i === Jsep2.COMMA_CODE) {
          this.index++;
        } else {
          if (node = this.gobbleExpression()) {
            nodes.push(node);
          } else if (this.index < this.expr.length) {
            if (ch_i === untilICode) {
              break;
            }
            this.throwError('Unexpected "' + this["char"] + '"');
          }
        }
      }
      return nodes;
    }
    /**
     * The main parsing function.
     * @returns {?jsep.Expression}
     */
  }, {
    key: "gobbleExpression",
    value: function gobbleExpression() {
      var node = this.searchHook("gobble-expression") || this.gobbleBinaryExpression();
      this.gobbleSpaces();
      return this.runHook("after-expression", node);
    }
    /**
     * Search for the operation portion of the string (e.g. `+`, `===`)
     * Start by taking the longest possible binary operations (3 characters: `===`, `!==`, `>>>`)
     * and move down from 3 to 2 to 1 character until a matching binary operation is found
     * then, return that binary operation
     * @returns {string|boolean}
     */
  }, {
    key: "gobbleBinaryOp",
    value: function gobbleBinaryOp() {
      this.gobbleSpaces();
      var to_check = this.expr.substr(this.index, Jsep2.max_binop_len);
      var tc_len = to_check.length;
      while (tc_len > 0) {
        if (Jsep2.binary_ops.hasOwnProperty(to_check) && (!Jsep2.isIdentifierStart(this.code) || this.index + to_check.length < this.expr.length && !Jsep2.isIdentifierPart(this.expr.charCodeAt(this.index + to_check.length)))) {
          this.index += tc_len;
          return to_check;
        }
        to_check = to_check.substr(0, --tc_len);
      }
      return false;
    }
    /**
     * This function is responsible for gobbling an individual expression,
     * e.g. `1`, `1+2`, `a+(b*2)-Math.sqrt(2)`
     * @returns {?jsep.BinaryExpression}
     */
  }, {
    key: "gobbleBinaryExpression",
    value: function gobbleBinaryExpression() {
      var node, biop, prec, stack, biop_info, left, right, i, cur_biop;
      left = this.gobbleToken();
      if (!left) {
        return left;
      }
      biop = this.gobbleBinaryOp();
      if (!biop) {
        return left;
      }
      biop_info = {
        value: biop,
        prec: Jsep2.binaryPrecedence(biop),
        right_a: Jsep2.right_associative.has(biop)
      };
      right = this.gobbleToken();
      if (!right) {
        this.throwError("Expected expression after " + biop);
      }
      stack = [left, biop_info, right];
      while (biop = this.gobbleBinaryOp()) {
        prec = Jsep2.binaryPrecedence(biop);
        if (prec === 0) {
          this.index -= biop.length;
          break;
        }
        biop_info = {
          value: biop,
          prec,
          right_a: Jsep2.right_associative.has(biop)
        };
        cur_biop = biop;
        var comparePrev = function comparePrev2(prev) {
          return biop_info.right_a && prev.right_a ? prec > prev.prec : prec <= prev.prec;
        };
        while (stack.length > 2 && comparePrev(stack[stack.length - 2])) {
          right = stack.pop();
          biop = stack.pop().value;
          left = stack.pop();
          node = {
            type: Jsep2.BINARY_EXP,
            operator: biop,
            left,
            right
          };
          stack.push(node);
        }
        node = this.gobbleToken();
        if (!node) {
          this.throwError("Expected expression after " + cur_biop);
        }
        stack.push(biop_info, node);
      }
      i = stack.length - 1;
      node = stack[i];
      while (i > 1) {
        node = {
          type: Jsep2.BINARY_EXP,
          operator: stack[i - 1].value,
          left: stack[i - 2],
          right: node
        };
        i -= 2;
      }
      return node;
    }
    /**
     * An individual part of a binary expression:
     * e.g. `foo.bar(baz)`, `1`, `"abc"`, `(a % 2)` (because it's in parenthesis)
     * @returns {boolean|jsep.Expression}
     */
  }, {
    key: "gobbleToken",
    value: function gobbleToken() {
      var ch, to_check, tc_len, node;
      this.gobbleSpaces();
      node = this.searchHook("gobble-token");
      if (node) {
        return this.runHook("after-token", node);
      }
      ch = this.code;
      if (Jsep2.isDecimalDigit(ch) || ch === Jsep2.PERIOD_CODE) {
        return this.gobbleNumericLiteral();
      }
      if (ch === Jsep2.SQUOTE_CODE || ch === Jsep2.DQUOTE_CODE) {
        node = this.gobbleStringLiteral();
      } else if (ch === Jsep2.OBRACK_CODE) {
        node = this.gobbleArray();
      } else {
        to_check = this.expr.substr(this.index, Jsep2.max_unop_len);
        tc_len = to_check.length;
        while (tc_len > 0) {
          if (Jsep2.unary_ops.hasOwnProperty(to_check) && (!Jsep2.isIdentifierStart(this.code) || this.index + to_check.length < this.expr.length && !Jsep2.isIdentifierPart(this.expr.charCodeAt(this.index + to_check.length)))) {
            this.index += tc_len;
            var argument = this.gobbleToken();
            if (!argument) {
              this.throwError("missing unaryOp argument");
            }
            return this.runHook("after-token", {
              type: Jsep2.UNARY_EXP,
              operator: to_check,
              argument,
              prefix: true
            });
          }
          to_check = to_check.substr(0, --tc_len);
        }
        if (Jsep2.isIdentifierStart(ch)) {
          node = this.gobbleIdentifier();
          if (Jsep2.literals.hasOwnProperty(node.name)) {
            node = {
              type: Jsep2.LITERAL,
              value: Jsep2.literals[node.name],
              raw: node.name
            };
          } else if (node.name === Jsep2.this_str) {
            node = {
              type: Jsep2.THIS_EXP
            };
          }
        } else if (ch === Jsep2.OPAREN_CODE) {
          node = this.gobbleGroup();
        }
      }
      if (!node) {
        return this.runHook("after-token", false);
      }
      node = this.gobbleTokenProperty(node);
      return this.runHook("after-token", node);
    }
    /**
     * Gobble properties of of identifiers/strings/arrays/groups.
     * e.g. `foo`, `bar.baz`, `foo['bar'].baz`
     * It also gobbles function calls:
     * e.g. `Math.acos(obj.angle)`
     * @param {jsep.Expression} node
     * @returns {jsep.Expression}
     */
  }, {
    key: "gobbleTokenProperty",
    value: function gobbleTokenProperty(node) {
      this.gobbleSpaces();
      var ch = this.code;
      while (ch === Jsep2.PERIOD_CODE || ch === Jsep2.OBRACK_CODE || ch === Jsep2.OPAREN_CODE || ch === Jsep2.QUMARK_CODE) {
        var optional = void 0;
        if (ch === Jsep2.QUMARK_CODE) {
          if (this.expr.charCodeAt(this.index + 1) !== Jsep2.PERIOD_CODE) {
            break;
          }
          optional = true;
          this.index += 2;
          this.gobbleSpaces();
          ch = this.code;
        }
        this.index++;
        if (ch === Jsep2.OBRACK_CODE) {
          node = {
            type: Jsep2.MEMBER_EXP,
            computed: true,
            object: node,
            property: this.gobbleExpression()
          };
          this.gobbleSpaces();
          ch = this.code;
          if (ch !== Jsep2.CBRACK_CODE) {
            this.throwError("Unclosed [");
          }
          this.index++;
        } else if (ch === Jsep2.OPAREN_CODE) {
          node = {
            type: Jsep2.CALL_EXP,
            "arguments": this.gobbleArguments(Jsep2.CPAREN_CODE),
            callee: node
          };
        } else if (ch === Jsep2.PERIOD_CODE || optional) {
          if (optional) {
            this.index--;
          }
          this.gobbleSpaces();
          node = {
            type: Jsep2.MEMBER_EXP,
            computed: false,
            object: node,
            property: this.gobbleIdentifier()
          };
        }
        if (optional) {
          node.optional = true;
        }
        this.gobbleSpaces();
        ch = this.code;
      }
      return node;
    }
    /**
     * Parse simple numeric literals: `12`, `3.4`, `.5`. Do this by using a string to
     * keep track of everything in the numeric literal and then calling `parseFloat` on that string
     * @returns {jsep.Literal}
     */
  }, {
    key: "gobbleNumericLiteral",
    value: function gobbleNumericLiteral() {
      var number = "", ch, chCode;
      while (Jsep2.isDecimalDigit(this.code)) {
        number += this.expr.charAt(this.index++);
      }
      if (this.code === Jsep2.PERIOD_CODE) {
        number += this.expr.charAt(this.index++);
        while (Jsep2.isDecimalDigit(this.code)) {
          number += this.expr.charAt(this.index++);
        }
      }
      ch = this["char"];
      if (ch === "e" || ch === "E") {
        number += this.expr.charAt(this.index++);
        ch = this["char"];
        if (ch === "+" || ch === "-") {
          number += this.expr.charAt(this.index++);
        }
        while (Jsep2.isDecimalDigit(this.code)) {
          number += this.expr.charAt(this.index++);
        }
        if (!Jsep2.isDecimalDigit(this.expr.charCodeAt(this.index - 1))) {
          this.throwError("Expected exponent (" + number + this["char"] + ")");
        }
      }
      chCode = this.code;
      if (Jsep2.isIdentifierStart(chCode)) {
        this.throwError("Variable names cannot start with a number (" + number + this["char"] + ")");
      } else if (chCode === Jsep2.PERIOD_CODE || number.length === 1 && number.charCodeAt(0) === Jsep2.PERIOD_CODE) {
        this.throwError("Unexpected period");
      }
      return {
        type: Jsep2.LITERAL,
        value: parseFloat(number),
        raw: number
      };
    }
    /**
     * Parses a string literal, staring with single or double quotes with basic support for escape codes
     * e.g. `"hello world"`, `'this is\nJSEP'`
     * @returns {jsep.Literal}
     */
  }, {
    key: "gobbleStringLiteral",
    value: function gobbleStringLiteral() {
      var str = "";
      var startIndex = this.index;
      var quote = this.expr.charAt(this.index++);
      var closed = false;
      while (this.index < this.expr.length) {
        var ch = this.expr.charAt(this.index++);
        if (ch === quote) {
          closed = true;
          break;
        } else if (ch === "\\") {
          ch = this.expr.charAt(this.index++);
          switch (ch) {
            case "n":
              str += "\n";
              break;
            case "r":
              str += "\r";
              break;
            case "t":
              str += "	";
              break;
            case "b":
              str += "\b";
              break;
            case "f":
              str += "\f";
              break;
            case "v":
              str += "\v";
              break;
            default:
              str += ch;
          }
        } else {
          str += ch;
        }
      }
      if (!closed) {
        this.throwError('Unclosed quote after "' + str + '"');
      }
      return {
        type: Jsep2.LITERAL,
        value: str,
        raw: this.expr.substring(startIndex, this.index)
      };
    }
    /**
     * Gobbles only identifiers
     * e.g.: `foo`, `_value`, `$x1`
     * Also, this function checks if that identifier is a literal:
     * (e.g. `true`, `false`, `null`) or `this`
     * @returns {jsep.Identifier}
     */
  }, {
    key: "gobbleIdentifier",
    value: function gobbleIdentifier() {
      var ch = this.code, start = this.index;
      if (Jsep2.isIdentifierStart(ch)) {
        this.index++;
      } else {
        this.throwError("Unexpected " + this["char"]);
      }
      while (this.index < this.expr.length) {
        ch = this.code;
        if (Jsep2.isIdentifierPart(ch)) {
          this.index++;
        } else {
          break;
        }
      }
      return {
        type: Jsep2.IDENTIFIER,
        name: this.expr.slice(start, this.index)
      };
    }
    /**
     * Gobbles a list of arguments within the context of a function call
     * or array literal. This function also assumes that the opening character
     * `(` or `[` has already been gobbled, and gobbles expressions and commas
     * until the terminator character `)` or `]` is encountered.
     * e.g. `foo(bar, baz)`, `my_func()`, or `[bar, baz]`
     * @param {number} termination
     * @returns {jsep.Expression[]}
     */
  }, {
    key: "gobbleArguments",
    value: function gobbleArguments(termination) {
      var args = [];
      var closed = false;
      var separator_count = 0;
      while (this.index < this.expr.length) {
        this.gobbleSpaces();
        var ch_i = this.code;
        if (ch_i === termination) {
          closed = true;
          this.index++;
          if (termination === Jsep2.CPAREN_CODE && separator_count && separator_count >= args.length) {
            this.throwError("Unexpected token " + String.fromCharCode(termination));
          }
          break;
        } else if (ch_i === Jsep2.COMMA_CODE) {
          this.index++;
          separator_count++;
          if (separator_count !== args.length) {
            if (termination === Jsep2.CPAREN_CODE) {
              this.throwError("Unexpected token ,");
            } else if (termination === Jsep2.CBRACK_CODE) {
              for (var arg = args.length; arg < separator_count; arg++) {
                args.push(null);
              }
            }
          }
        } else if (args.length !== separator_count && separator_count !== 0) {
          this.throwError("Expected comma");
        } else {
          var node = this.gobbleExpression();
          if (!node || node.type === Jsep2.COMPOUND) {
            this.throwError("Expected comma");
          }
          args.push(node);
        }
      }
      if (!closed) {
        this.throwError("Expected " + String.fromCharCode(termination));
      }
      return args;
    }
    /**
     * Responsible for parsing a group of things within parentheses `()`
     * that have no identifier in front (so not a function call)
     * This function assumes that it needs to gobble the opening parenthesis
     * and then tries to gobble everything within that parenthesis, assuming
     * that the next thing it should see is the close parenthesis. If not,
     * then the expression probably doesn't have a `)`
     * @returns {boolean|jsep.Expression}
     */
  }, {
    key: "gobbleGroup",
    value: function gobbleGroup() {
      this.index++;
      var nodes = this.gobbleExpressions(Jsep2.CPAREN_CODE);
      if (this.code === Jsep2.CPAREN_CODE) {
        this.index++;
        if (nodes.length === 1) {
          return nodes[0];
        } else if (!nodes.length) {
          return false;
        } else {
          return {
            type: Jsep2.SEQUENCE_EXP,
            expressions: nodes
          };
        }
      } else {
        this.throwError("Unclosed (");
      }
    }
    /**
     * Responsible for parsing Array literals `[1, 2, 3]`
     * This function assumes that it needs to gobble the opening bracket
     * and then tries to gobble the expressions as arguments.
     * @returns {jsep.ArrayExpression}
     */
  }, {
    key: "gobbleArray",
    value: function gobbleArray() {
      this.index++;
      return {
        type: Jsep2.ARRAY_EXP,
        elements: this.gobbleArguments(Jsep2.CBRACK_CODE)
      };
    }
  }], [{
    key: "version",
    get: (
      /**
       * @returns {string}
       */
      function get() {
        return "1.3.8";
      }
    )
    /**
     * @returns {string}
     */
  }, {
    key: "toString",
    value: function toString() {
      return "JavaScript Expression Parser (JSEP) v" + Jsep2.version;
    }
  }, {
    key: "addUnaryOp",
    value: (
      // ==================== CONFIG ================================
      /**
       * @method addUnaryOp
       * @param {string} op_name The name of the unary op to add
       * @returns {Jsep}
       */
      function addUnaryOp(op_name) {
        Jsep2.max_unop_len = Math.max(op_name.length, Jsep2.max_unop_len);
        Jsep2.unary_ops[op_name] = 1;
        return Jsep2;
      }
    )
    /**
     * @method jsep.addBinaryOp
     * @param {string} op_name The name of the binary op to add
     * @param {number} precedence The precedence of the binary op (can be a float). Higher number = higher precedence
     * @param {boolean} [isRightAssociative=false] whether operator is right-associative
     * @returns {Jsep}
     */
  }, {
    key: "addBinaryOp",
    value: function addBinaryOp(op_name, precedence, isRightAssociative) {
      Jsep2.max_binop_len = Math.max(op_name.length, Jsep2.max_binop_len);
      Jsep2.binary_ops[op_name] = precedence;
      if (isRightAssociative) {
        Jsep2.right_associative.add(op_name);
      } else {
        Jsep2.right_associative["delete"](op_name);
      }
      return Jsep2;
    }
    /**
     * @method addIdentifierChar
     * @param {string} char The additional character to treat as a valid part of an identifier
     * @returns {Jsep}
     */
  }, {
    key: "addIdentifierChar",
    value: function addIdentifierChar(_char) {
      Jsep2.additional_identifier_chars.add(_char);
      return Jsep2;
    }
    /**
     * @method addLiteral
     * @param {string} literal_name The name of the literal to add
     * @param {*} literal_value The value of the literal
     * @returns {Jsep}
     */
  }, {
    key: "addLiteral",
    value: function addLiteral(literal_name, literal_value) {
      Jsep2.literals[literal_name] = literal_value;
      return Jsep2;
    }
    /**
     * @method removeUnaryOp
     * @param {string} op_name The name of the unary op to remove
     * @returns {Jsep}
     */
  }, {
    key: "removeUnaryOp",
    value: function removeUnaryOp(op_name) {
      delete Jsep2.unary_ops[op_name];
      if (op_name.length === Jsep2.max_unop_len) {
        Jsep2.max_unop_len = Jsep2.getMaxKeyLen(Jsep2.unary_ops);
      }
      return Jsep2;
    }
    /**
     * @method removeAllUnaryOps
     * @returns {Jsep}
     */
  }, {
    key: "removeAllUnaryOps",
    value: function removeAllUnaryOps() {
      Jsep2.unary_ops = {};
      Jsep2.max_unop_len = 0;
      return Jsep2;
    }
    /**
     * @method removeIdentifierChar
     * @param {string} char The additional character to stop treating as a valid part of an identifier
     * @returns {Jsep}
     */
  }, {
    key: "removeIdentifierChar",
    value: function removeIdentifierChar(_char2) {
      Jsep2.additional_identifier_chars["delete"](_char2);
      return Jsep2;
    }
    /**
     * @method removeBinaryOp
     * @param {string} op_name The name of the binary op to remove
     * @returns {Jsep}
     */
  }, {
    key: "removeBinaryOp",
    value: function removeBinaryOp(op_name) {
      delete Jsep2.binary_ops[op_name];
      if (op_name.length === Jsep2.max_binop_len) {
        Jsep2.max_binop_len = Jsep2.getMaxKeyLen(Jsep2.binary_ops);
      }
      Jsep2.right_associative["delete"](op_name);
      return Jsep2;
    }
    /**
     * @method removeAllBinaryOps
     * @returns {Jsep}
     */
  }, {
    key: "removeAllBinaryOps",
    value: function removeAllBinaryOps() {
      Jsep2.binary_ops = {};
      Jsep2.max_binop_len = 0;
      return Jsep2;
    }
    /**
     * @method removeLiteral
     * @param {string} literal_name The name of the literal to remove
     * @returns {Jsep}
     */
  }, {
    key: "removeLiteral",
    value: function removeLiteral(literal_name) {
      delete Jsep2.literals[literal_name];
      return Jsep2;
    }
    /**
     * @method removeAllLiterals
     * @returns {Jsep}
     */
  }, {
    key: "removeAllLiterals",
    value: function removeAllLiterals() {
      Jsep2.literals = {};
      return Jsep2;
    }
  }, {
    key: "parse",
    value: function parse(expr) {
      return new Jsep2(expr).parse();
    }
    /**
     * Get the longest key length of any object
     * @param {object} obj
     * @returns {number}
     */
  }, {
    key: "getMaxKeyLen",
    value: function getMaxKeyLen(obj) {
      return Math.max.apply(Math, [0].concat(_toConsumableArray(Object.keys(obj).map(function(k) {
        return k.length;
      }))));
    }
    /**
     * `ch` is a character code in the next three functions
     * @param {number} ch
     * @returns {boolean}
     */
  }, {
    key: "isDecimalDigit",
    value: function isDecimalDigit(ch) {
      return ch >= 48 && ch <= 57;
    }
    /**
     * Returns the precedence of a binary operator or `0` if it isn't a binary operator. Can be float.
     * @param {string} op_val
     * @returns {number}
     */
  }, {
    key: "binaryPrecedence",
    value: function binaryPrecedence(op_val) {
      return Jsep2.binary_ops[op_val] || 0;
    }
    /**
     * Looks for start of identifier
     * @param {number} ch
     * @returns {boolean}
     */
  }, {
    key: "isIdentifierStart",
    value: function isIdentifierStart(ch) {
      return ch >= 65 && ch <= 90 || // A...Z
      ch >= 97 && ch <= 122 || // a...z
      ch >= 128 && !Jsep2.binary_ops[String.fromCharCode(ch)] || // any non-ASCII that is not an operator
      Jsep2.additional_identifier_chars.has(String.fromCharCode(ch));
    }
    /**
     * @param {number} ch
     * @returns {boolean}
     */
  }, {
    key: "isIdentifierPart",
    value: function isIdentifierPart(ch) {
      return Jsep2.isIdentifierStart(ch) || Jsep2.isDecimalDigit(ch);
    }
  }]);
}();
var hooks = new Hooks();
Object.assign(Jsep, {
  hooks,
  plugins: new Plugins(Jsep),
  // Node Types
  // ----------
  // This is the full set of types that any JSEP node can be.
  // Store them here to save space when minified
  COMPOUND: "Compound",
  SEQUENCE_EXP: "SequenceExpression",
  IDENTIFIER: "Identifier",
  MEMBER_EXP: "MemberExpression",
  LITERAL: "Literal",
  THIS_EXP: "ThisExpression",
  CALL_EXP: "CallExpression",
  UNARY_EXP: "UnaryExpression",
  BINARY_EXP: "BinaryExpression",
  ARRAY_EXP: "ArrayExpression",
  TAB_CODE: 9,
  LF_CODE: 10,
  CR_CODE: 13,
  SPACE_CODE: 32,
  PERIOD_CODE: 46,
  // '.'
  COMMA_CODE: 44,
  // ','
  SQUOTE_CODE: 39,
  // single quote
  DQUOTE_CODE: 34,
  // double quotes
  OPAREN_CODE: 40,
  // (
  CPAREN_CODE: 41,
  // )
  OBRACK_CODE: 91,
  // [
  CBRACK_CODE: 93,
  // ]
  QUMARK_CODE: 63,
  // ?
  SEMCOL_CODE: 59,
  // ;
  COLON_CODE: 58,
  // :
  // Operations
  // ----------
  // Use a quickly-accessible map to store all of the unary operators
  // Values are set to `1` (it really doesn't matter)
  unary_ops: {
    "-": 1,
    "!": 1,
    "~": 1,
    "+": 1
  },
  // Also use a map for the binary operations but set their values to their
  // binary precedence for quick reference (higher number = higher precedence)
  // see [Order of operations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
  binary_ops: {
    "||": 1,
    "&&": 2,
    "|": 3,
    "^": 4,
    "&": 5,
    "==": 6,
    "!=": 6,
    "===": 6,
    "!==": 6,
    "<": 7,
    ">": 7,
    "<=": 7,
    ">=": 7,
    "<<": 8,
    ">>": 8,
    ">>>": 8,
    "+": 9,
    "-": 9,
    "*": 10,
    "/": 10,
    "%": 10
  },
  // sets specific binary_ops as right-associative
  right_associative: /* @__PURE__ */ new Set(),
  // Additional valid identifier chars, apart from a-z, A-Z and 0-9 (except on the starting char)
  additional_identifier_chars: /* @__PURE__ */ new Set(["$", "_"]),
  // Literals
  // ----------
  // Store the values to return for the various literals we may encounter
  literals: {
    "true": true,
    "false": false,
    "null": null
  },
  // Except for `this`, which is special. This could be changed to something like `'self'` as well
  this_str: "this"
});
Jsep.max_unop_len = Jsep.getMaxKeyLen(Jsep.unary_ops);
Jsep.max_binop_len = Jsep.getMaxKeyLen(Jsep.binary_ops);
var jsep = function jsep2(expr) {
  return new Jsep(expr).parse();
};
var staticMethods = Object.getOwnPropertyNames(Jsep);
staticMethods.forEach(function(m) {
  if (jsep[m] === void 0 && m !== "prototype") {
    jsep[m] = Jsep[m];
  }
});
jsep.Jsep = Jsep;
var CONDITIONAL_EXP = "ConditionalExpression";
var ternary = {
  name: "ternary",
  init: function init(jsep3) {
    jsep3.hooks.add("after-expression", function gobbleTernary(env) {
      if (env.node && this.code === jsep3.QUMARK_CODE) {
        this.index++;
        var test = env.node;
        var consequent = this.gobbleExpression();
        if (!consequent) {
          this.throwError("Expected expression");
        }
        this.gobbleSpaces();
        if (this.code === jsep3.COLON_CODE) {
          this.index++;
          var alternate = this.gobbleExpression();
          if (!alternate) {
            this.throwError("Expected expression");
          }
          env.node = {
            type: CONDITIONAL_EXP,
            test,
            consequent,
            alternate
          };
          if (test.operator && jsep3.binary_ops[test.operator] <= 0.9) {
            var newTest = test;
            while (newTest.right.operator && jsep3.binary_ops[newTest.right.operator] <= 0.9) {
              newTest = newTest.right;
            }
            env.node.test = newTest.right;
            newTest.right = env.node;
            env.node = test;
          }
        } else {
          this.throwError("Expected :");
        }
      }
    });
  }
};
jsep.plugins.register(ternary);
var FSLASH_CODE = 47;
var BSLASH_CODE = 92;
var index = {
  name: "regex",
  init: function init2(jsep3) {
    jsep3.hooks.add("gobble-token", function gobbleRegexLiteral(env) {
      if (this.code === FSLASH_CODE) {
        var patternIndex = ++this.index;
        var inCharSet = false;
        while (this.index < this.expr.length) {
          if (this.code === FSLASH_CODE && !inCharSet) {
            var pattern = this.expr.slice(patternIndex, this.index);
            var flags = "";
            while (++this.index < this.expr.length) {
              var code = this.code;
              if (code >= 97 && code <= 122 || code >= 65 && code <= 90 || code >= 48 && code <= 57) {
                flags += this["char"];
              } else {
                break;
              }
            }
            var value = void 0;
            try {
              value = new RegExp(pattern, flags);
            } catch (e) {
              this.throwError(e.message);
            }
            env.node = {
              type: jsep3.LITERAL,
              value,
              raw: this.expr.slice(patternIndex - 1, this.index)
            };
            env.node = this.gobbleTokenProperty(env.node);
            return env.node;
          }
          if (this.code === jsep3.OBRACK_CODE) {
            inCharSet = true;
          } else if (inCharSet && this.code === jsep3.CBRACK_CODE) {
            inCharSet = false;
          }
          this.index += this.code === BSLASH_CODE ? 2 : 1;
        }
        this.throwError("Unclosed Regex");
      }
    });
  }
};
var PLUS_CODE = 43;
var MINUS_CODE = 45;
var plugin = {
  name: "assignment",
  assignmentOperators: /* @__PURE__ */ new Set(["=", "*=", "**=", "/=", "%=", "+=", "-=", "<<=", ">>=", ">>>=", "&=", "^=", "|="]),
  updateOperators: [PLUS_CODE, MINUS_CODE],
  assignmentPrecedence: 0.9,
  init: function init3(jsep3) {
    var updateNodeTypes = [jsep3.IDENTIFIER, jsep3.MEMBER_EXP];
    plugin.assignmentOperators.forEach(function(op) {
      return jsep3.addBinaryOp(op, plugin.assignmentPrecedence, true);
    });
    jsep3.hooks.add("gobble-token", function gobbleUpdatePrefix(env) {
      var _this = this;
      var code = this.code;
      if (plugin.updateOperators.some(function(c) {
        return c === code && c === _this.expr.charCodeAt(_this.index + 1);
      })) {
        this.index += 2;
        env.node = {
          type: "UpdateExpression",
          operator: code === PLUS_CODE ? "++" : "--",
          argument: this.gobbleTokenProperty(this.gobbleIdentifier()),
          prefix: true
        };
        if (!env.node.argument || !updateNodeTypes.includes(env.node.argument.type)) {
          this.throwError("Unexpected ".concat(env.node.operator));
        }
      }
    });
    jsep3.hooks.add("after-token", function gobbleUpdatePostfix(env) {
      var _this2 = this;
      if (env.node) {
        var code = this.code;
        if (plugin.updateOperators.some(function(c) {
          return c === code && c === _this2.expr.charCodeAt(_this2.index + 1);
        })) {
          if (!updateNodeTypes.includes(env.node.type)) {
            this.throwError("Unexpected ".concat(env.node.operator));
          }
          this.index += 2;
          env.node = {
            type: "UpdateExpression",
            operator: code === PLUS_CODE ? "++" : "--",
            argument: env.node,
            prefix: false
          };
        }
      }
    });
    jsep3.hooks.add("after-expression", function gobbleAssignment(env) {
      if (env.node) {
        updateBinariesToAssignments(env.node);
      }
    });
    function updateBinariesToAssignments(node) {
      if (plugin.assignmentOperators.has(node.operator)) {
        node.type = "AssignmentExpression";
        updateBinariesToAssignments(node.left);
        updateBinariesToAssignments(node.right);
      } else if (!node.operator) {
        Object.values(node).forEach(function(val) {
          if (val && _typeof(val) === "object") {
            updateBinariesToAssignments(val);
          }
        });
      }
    }
  }
};
var hasOwnProp = Object.prototype.hasOwnProperty;
function push(arr, item) {
  arr = arr.slice();
  arr.push(item);
  return arr;
}
function unshift(item, arr) {
  arr = arr.slice();
  arr.unshift(item);
  return arr;
}
var NewError = function(_Error) {
  function NewError2(value) {
    var _this;
    _classCallCheck(this, NewError2);
    _this = _callSuper(this, NewError2, ['JSONPath should not be called with "new" (it prevents return of (unwrapped) scalar values)']);
    _this.avoidNew = true;
    _this.value = value;
    _this.name = "NewError";
    return _this;
  }
  _inherits(NewError2, _Error);
  return _createClass(NewError2);
}(_wrapNativeSuper(Error));
function JSONPath(opts, expr, obj, callback, otherTypeCallback) {
  if (!(this instanceof JSONPath)) {
    try {
      return new JSONPath(opts, expr, obj, callback, otherTypeCallback);
    } catch (e) {
      if (!e.avoidNew) {
        throw e;
      }
      return e.value;
    }
  }
  if (typeof opts === "string") {
    otherTypeCallback = callback;
    callback = obj;
    obj = expr;
    expr = opts;
    opts = null;
  }
  var optObj = opts && _typeof(opts) === "object";
  opts = opts || {};
  this.json = opts.json || obj;
  this.path = opts.path || expr;
  this.resultType = opts.resultType || "value";
  this.flatten = opts.flatten || false;
  this.wrap = hasOwnProp.call(opts, "wrap") ? opts.wrap : true;
  this.sandbox = opts.sandbox || {};
  this.eval = opts.eval === void 0 ? "safe" : opts.eval;
  this.ignoreEvalErrors = typeof opts.ignoreEvalErrors === "undefined" ? false : opts.ignoreEvalErrors;
  this.parent = opts.parent || null;
  this.parentProperty = opts.parentProperty || null;
  this.callback = opts.callback || callback || null;
  this.otherTypeCallback = opts.otherTypeCallback || otherTypeCallback || function() {
    throw new TypeError("You must supply an otherTypeCallback callback option with the @other() operator.");
  };
  if (opts.autostart !== false) {
    var args = {
      path: optObj ? opts.path : expr
    };
    if (!optObj) {
      args.json = obj;
    } else if ("json" in opts) {
      args.json = opts.json;
    }
    var ret = this.evaluate(args);
    if (!ret || _typeof(ret) !== "object") {
      throw new NewError(ret);
    }
    return ret;
  }
}
JSONPath.prototype.evaluate = function(expr, json, callback, otherTypeCallback) {
  var _this2 = this;
  var currParent = this.parent, currParentProperty = this.parentProperty;
  var flatten = this.flatten, wrap = this.wrap;
  this.currResultType = this.resultType;
  this.currEval = this.eval;
  this.currSandbox = this.sandbox;
  callback = callback || this.callback;
  this.currOtherTypeCallback = otherTypeCallback || this.otherTypeCallback;
  json = json || this.json;
  expr = expr || this.path;
  if (expr && _typeof(expr) === "object" && !Array.isArray(expr)) {
    if (!expr.path && expr.path !== "") {
      throw new TypeError('You must supply a "path" property when providing an object argument to JSONPath.evaluate().');
    }
    if (!hasOwnProp.call(expr, "json")) {
      throw new TypeError('You must supply a "json" property when providing an object argument to JSONPath.evaluate().');
    }
    var _expr = expr;
    json = _expr.json;
    flatten = hasOwnProp.call(expr, "flatten") ? expr.flatten : flatten;
    this.currResultType = hasOwnProp.call(expr, "resultType") ? expr.resultType : this.currResultType;
    this.currSandbox = hasOwnProp.call(expr, "sandbox") ? expr.sandbox : this.currSandbox;
    wrap = hasOwnProp.call(expr, "wrap") ? expr.wrap : wrap;
    this.currEval = hasOwnProp.call(expr, "eval") ? expr.eval : this.currEval;
    callback = hasOwnProp.call(expr, "callback") ? expr.callback : callback;
    this.currOtherTypeCallback = hasOwnProp.call(expr, "otherTypeCallback") ? expr.otherTypeCallback : this.currOtherTypeCallback;
    currParent = hasOwnProp.call(expr, "parent") ? expr.parent : currParent;
    currParentProperty = hasOwnProp.call(expr, "parentProperty") ? expr.parentProperty : currParentProperty;
    expr = expr.path;
  }
  currParent = currParent || null;
  currParentProperty = currParentProperty || null;
  if (Array.isArray(expr)) {
    expr = JSONPath.toPathString(expr);
  }
  if (!expr && expr !== "" || !json) {
    return void 0;
  }
  var exprList = JSONPath.toPathArray(expr);
  if (exprList[0] === "$" && exprList.length > 1) {
    exprList.shift();
  }
  this._hasParentSelector = null;
  var result = this._trace(exprList, json, ["$"], currParent, currParentProperty, callback).filter(function(ea) {
    return ea && !ea.isParentSelector;
  });
  if (!result.length) {
    return wrap ? [] : void 0;
  }
  if (!wrap && result.length === 1 && !result[0].hasArrExpr) {
    return this._getPreferredOutput(result[0]);
  }
  return result.reduce(function(rslt, ea) {
    var valOrPath = _this2._getPreferredOutput(ea);
    if (flatten && Array.isArray(valOrPath)) {
      rslt = rslt.concat(valOrPath);
    } else {
      rslt.push(valOrPath);
    }
    return rslt;
  }, []);
};
JSONPath.prototype._getPreferredOutput = function(ea) {
  var resultType = this.currResultType;
  switch (resultType) {
    case "all": {
      var path = Array.isArray(ea.path) ? ea.path : JSONPath.toPathArray(ea.path);
      ea.pointer = JSONPath.toPointer(path);
      ea.path = typeof ea.path === "string" ? ea.path : JSONPath.toPathString(ea.path);
      return ea;
    }
    case "value":
    case "parent":
    case "parentProperty":
      return ea[resultType];
    case "path":
      return JSONPath.toPathString(ea[resultType]);
    case "pointer":
      return JSONPath.toPointer(ea.path);
    default:
      throw new TypeError("Unknown result type");
  }
};
JSONPath.prototype._handleCallback = function(fullRetObj, callback, type) {
  if (callback) {
    var preferredOutput = this._getPreferredOutput(fullRetObj);
    fullRetObj.path = typeof fullRetObj.path === "string" ? fullRetObj.path : JSONPath.toPathString(fullRetObj.path);
    callback(preferredOutput, type, fullRetObj);
  }
};
JSONPath.prototype._trace = function(expr, val, path, parent, parentPropName, callback, hasArrExpr, literalPriority) {
  var _this3 = this;
  var retObj;
  if (!expr.length) {
    retObj = {
      path,
      value: val,
      parent,
      parentProperty: parentPropName,
      hasArrExpr
    };
    this._handleCallback(retObj, callback, "value");
    return retObj;
  }
  var loc = expr[0], x = expr.slice(1);
  var ret = [];
  function addRet(elems) {
    if (Array.isArray(elems)) {
      elems.forEach(function(t2) {
        ret.push(t2);
      });
    } else {
      ret.push(elems);
    }
  }
  if ((typeof loc !== "string" || literalPriority) && val && hasOwnProp.call(val, loc)) {
    addRet(this._trace(x, val[loc], push(path, loc), val, loc, callback, hasArrExpr));
  } else if (loc === "*") {
    this._walk(val, function(m) {
      addRet(_this3._trace(x, val[m], push(path, m), val, m, callback, true, true));
    });
  } else if (loc === "..") {
    addRet(this._trace(x, val, path, parent, parentPropName, callback, hasArrExpr));
    this._walk(val, function(m) {
      if (_typeof(val[m]) === "object") {
        addRet(_this3._trace(expr.slice(), val[m], push(path, m), val, m, callback, true));
      }
    });
  } else if (loc === "^") {
    this._hasParentSelector = true;
    return {
      path: path.slice(0, -1),
      expr: x,
      isParentSelector: true
    };
  } else if (loc === "~") {
    retObj = {
      path: push(path, loc),
      value: parentPropName,
      parent,
      parentProperty: null
    };
    this._handleCallback(retObj, callback, "property");
    return retObj;
  } else if (loc === "$") {
    addRet(this._trace(x, val, path, null, null, callback, hasArrExpr));
  } else if (/^(\x2D?[0-9]*):(\x2D?[0-9]*):?([0-9]*)$/.test(loc)) {
    addRet(this._slice(loc, x, val, path, parent, parentPropName, callback));
  } else if (loc.indexOf("?(") === 0) {
    if (this.currEval === false) {
      throw new Error("Eval [?(expr)] prevented in JSONPath expression.");
    }
    var safeLoc = loc.replace(/^\?\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\)$/, "$1");
    var nested = /@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])?((?:[\0->@-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)['\[](\??\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\))(?!(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])\)\])['\]]/g.exec(safeLoc);
    if (nested) {
      this._walk(val, function(m) {
        var npath = [nested[2]];
        var nvalue = nested[1] ? val[m][nested[1]] : val[m];
        var filterResults = _this3._trace(npath, nvalue, path, parent, parentPropName, callback, true);
        if (filterResults.length > 0) {
          addRet(_this3._trace(x, val[m], push(path, m), val, m, callback, true));
        }
      });
    } else {
      this._walk(val, function(m) {
        if (_this3._eval(safeLoc, val[m], m, path, parent, parentPropName)) {
          addRet(_this3._trace(x, val[m], push(path, m), val, m, callback, true));
        }
      });
    }
  } else if (loc[0] === "(") {
    if (this.currEval === false) {
      throw new Error("Eval [(expr)] prevented in JSONPath expression.");
    }
    addRet(this._trace(unshift(this._eval(loc, val, path[path.length - 1], path.slice(0, -1), parent, parentPropName), x), val, path, parent, parentPropName, callback, hasArrExpr));
  } else if (loc[0] === "@") {
    var addType = false;
    var valueType = loc.slice(1, -2);
    switch (valueType) {
      case "scalar":
        if (!val || !["object", "function"].includes(_typeof(val))) {
          addType = true;
        }
        break;
      case "boolean":
      case "string":
      case "undefined":
      case "function":
        if (_typeof(val) === valueType) {
          addType = true;
        }
        break;
      case "integer":
        if (Number.isFinite(val) && !(val % 1)) {
          addType = true;
        }
        break;
      case "number":
        if (Number.isFinite(val)) {
          addType = true;
        }
        break;
      case "nonFinite":
        if (typeof val === "number" && !Number.isFinite(val)) {
          addType = true;
        }
        break;
      case "object":
        if (val && _typeof(val) === valueType) {
          addType = true;
        }
        break;
      case "array":
        if (Array.isArray(val)) {
          addType = true;
        }
        break;
      case "other":
        addType = this.currOtherTypeCallback(val, path, parent, parentPropName);
        break;
      case "null":
        if (val === null) {
          addType = true;
        }
        break;
      default:
        throw new TypeError("Unknown value type " + valueType);
    }
    if (addType) {
      retObj = {
        path,
        value: val,
        parent,
        parentProperty: parentPropName
      };
      this._handleCallback(retObj, callback, "value");
      return retObj;
    }
  } else if (loc[0] === "`" && val && hasOwnProp.call(val, loc.slice(1))) {
    var locProp = loc.slice(1);
    addRet(this._trace(x, val[locProp], push(path, locProp), val, locProp, callback, hasArrExpr, true));
  } else if (loc.includes(",")) {
    var parts = loc.split(",");
    var _iterator = _createForOfIteratorHelper(parts), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var part = _step.value;
        addRet(this._trace(unshift(part, x), val, path, parent, parentPropName, callback, true));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else if (!literalPriority && val && hasOwnProp.call(val, loc)) {
    addRet(this._trace(x, val[loc], push(path, loc), val, loc, callback, hasArrExpr, true));
  }
  if (this._hasParentSelector) {
    for (var t = 0; t < ret.length; t++) {
      var rett = ret[t];
      if (rett && rett.isParentSelector) {
        var tmp = this._trace(rett.expr, val, rett.path, parent, parentPropName, callback, hasArrExpr);
        if (Array.isArray(tmp)) {
          ret[t] = tmp[0];
          var tl = tmp.length;
          for (var tt = 1; tt < tl; tt++) {
            t++;
            ret.splice(t, 0, tmp[tt]);
          }
        } else {
          ret[t] = tmp;
        }
      }
    }
  }
  return ret;
};
JSONPath.prototype._walk = function(val, f) {
  if (Array.isArray(val)) {
    var n = val.length;
    for (var i = 0; i < n; i++) {
      f(i);
    }
  } else if (val && _typeof(val) === "object") {
    Object.keys(val).forEach(function(m) {
      f(m);
    });
  }
};
JSONPath.prototype._slice = function(loc, expr, val, path, parent, parentPropName, callback) {
  if (!Array.isArray(val)) {
    return void 0;
  }
  var len = val.length, parts = loc.split(":"), step = parts[2] && Number.parseInt(parts[2]) || 1;
  var start = parts[0] && Number.parseInt(parts[0]) || 0, end = parts[1] && Number.parseInt(parts[1]) || len;
  start = start < 0 ? Math.max(0, start + len) : Math.min(len, start);
  end = end < 0 ? Math.max(0, end + len) : Math.min(len, end);
  var ret = [];
  for (var i = start; i < end; i += step) {
    var tmp = this._trace(unshift(i, expr), val, path, parent, parentPropName, callback, true);
    tmp.forEach(function(t) {
      ret.push(t);
    });
  }
  return ret;
};
JSONPath.prototype._eval = function(code, _v, _vname, path, parent, parentPropName) {
  var _this4 = this;
  this.currSandbox._$_parentProperty = parentPropName;
  this.currSandbox._$_parent = parent;
  this.currSandbox._$_property = _vname;
  this.currSandbox._$_root = this.json;
  this.currSandbox._$_v = _v;
  var containsPath = code.includes("@path");
  if (containsPath) {
    this.currSandbox._$_path = JSONPath.toPathString(path.concat([_vname]));
  }
  var scriptCacheKey = this.currEval + "Script:" + code;
  if (!JSONPath.cache[scriptCacheKey]) {
    var script = code.replace(/@parentProperty/g, "_$_parentProperty").replace(/@parent/g, "_$_parent").replace(/@property/g, "_$_property").replace(/@root/g, "_$_root").replace(/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/g, "_$_v$1");
    if (containsPath) {
      script = script.replace(/@path/g, "_$_path");
    }
    if (this.currEval === "safe" || this.currEval === true || this.currEval === void 0) {
      JSONPath.cache[scriptCacheKey] = new this.safeVm.Script(script);
    } else if (this.currEval === "native") {
      JSONPath.cache[scriptCacheKey] = new this.vm.Script(script);
    } else if (typeof this.currEval === "function" && this.currEval.prototype && hasOwnProp.call(this.currEval.prototype, "runInNewContext")) {
      var CurrEval = this.currEval;
      JSONPath.cache[scriptCacheKey] = new CurrEval(script);
    } else if (typeof this.currEval === "function") {
      JSONPath.cache[scriptCacheKey] = {
        runInNewContext: function runInNewContext(context) {
          return _this4.currEval(script, context);
        }
      };
    } else {
      throw new TypeError('Unknown "eval" property "'.concat(this.currEval, '"'));
    }
  }
  try {
    return JSONPath.cache[scriptCacheKey].runInNewContext(this.currSandbox);
  } catch (e) {
    if (this.ignoreEvalErrors) {
      return false;
    }
    throw new Error("jsonPath: " + e.message + ": " + code);
  }
};
JSONPath.cache = {};
JSONPath.toPathString = function(pathArr) {
  var x = pathArr, n = x.length;
  var p = "$";
  for (var i = 1; i < n; i++) {
    if (!/^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(x[i])) {
      p += /^[\*0-9]+$/.test(x[i]) ? "[" + x[i] + "]" : "['" + x[i] + "']";
    }
  }
  return p;
};
JSONPath.toPointer = function(pointer) {
  var x = pointer, n = x.length;
  var p = "";
  for (var i = 1; i < n; i++) {
    if (!/^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(x[i])) {
      p += "/" + x[i].toString().replace(/~/g, "~0").replace(/\//g, "~1");
    }
  }
  return p;
};
JSONPath.toPathArray = function(expr) {
  var cache = JSONPath.cache;
  if (cache[expr]) {
    return cache[expr].concat();
  }
  var subx = [];
  var normalized = expr.replace(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/g, ";$&;").replace(/['\[](\??\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\))['\]](?!(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])\])/g, function($0, $1) {
    return "[#" + (subx.push($1) - 1) + "]";
  }).replace(/\[["']((?:[\0-&\(-\\\^-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)["']\]/g, function($0, prop) {
    return "['" + prop.replace(/\./g, "%@%").replace(/~/g, "%%@@%%") + "']";
  }).replace(/~/g, ";~;").replace(/["']?\.["']?(?!(?:[\0-Z\\-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*\])|\[["']?/g, ";").replace(/%@%/g, ".").replace(/%%@@%%/g, "~").replace(/(?:;)?(\^+)(?:;)?/g, function($0, ups) {
    return ";" + ups.split("").join(";") + ";";
  }).replace(/;;;|;;/g, ";..;").replace(/;$|'?\]|'$/g, "");
  var exprList = normalized.split(";").map(function(exp) {
    var match = exp.match(/#([0-9]+)/);
    return !match || !match[1] ? exp : subx[match[1]];
  });
  cache[expr] = exprList;
  return cache[expr].concat();
};
var moveToAnotherArray = function moveToAnotherArray2(source, target, conditionCb) {
  var il = source.length;
  for (var i = 0; i < il; i++) {
    var item = source[i];
    if (conditionCb(item)) {
      target.push(source.splice(i--, 1)[0]);
    }
  }
};
jsep.plugins.register(index, plugin);
var SafeEval = {
  /**
   * @param {jsep.Expression} ast
   * @param {Record<string, any>} subs
   */
  evalAst: function evalAst(ast, subs) {
    switch (ast.type) {
      case "BinaryExpression":
      case "LogicalExpression":
        return SafeEval.evalBinaryExpression(ast, subs);
      case "Compound":
        return SafeEval.evalCompound(ast, subs);
      case "ConditionalExpression":
        return SafeEval.evalConditionalExpression(ast, subs);
      case "Identifier":
        return SafeEval.evalIdentifier(ast, subs);
      case "Literal":
        return SafeEval.evalLiteral(ast, subs);
      case "MemberExpression":
        return SafeEval.evalMemberExpression(ast, subs);
      case "UnaryExpression":
        return SafeEval.evalUnaryExpression(ast, subs);
      case "ArrayExpression":
        return SafeEval.evalArrayExpression(ast, subs);
      case "CallExpression":
        return SafeEval.evalCallExpression(ast, subs);
      case "AssignmentExpression":
        return SafeEval.evalAssignmentExpression(ast, subs);
      default:
        throw SyntaxError("Unexpected expression", ast);
    }
  },
  evalBinaryExpression: function evalBinaryExpression(ast, subs) {
    var result = {
      "||": function _(a, b) {
        return a || b();
      },
      "&&": function _(a, b) {
        return a && b();
      },
      "|": function _(a, b) {
        return a | b();
      },
      "^": function _(a, b) {
        return a ^ b();
      },
      "&": function _(a, b) {
        return a & b();
      },
      // eslint-disable-next-line eqeqeq
      "==": function _(a, b) {
        return a == b();
      },
      // eslint-disable-next-line eqeqeq
      "!=": function _(a, b) {
        return a != b();
      },
      "===": function _(a, b) {
        return a === b();
      },
      "!==": function _(a, b) {
        return a !== b();
      },
      "<": function _(a, b) {
        return a < b();
      },
      ">": function _(a, b) {
        return a > b();
      },
      "<=": function _(a, b) {
        return a <= b();
      },
      ">=": function _(a, b) {
        return a >= b();
      },
      "<<": function _(a, b) {
        return a << b();
      },
      ">>": function _(a, b) {
        return a >> b();
      },
      ">>>": function _(a, b) {
        return a >>> b();
      },
      "+": function _(a, b) {
        return a + b();
      },
      "-": function _(a, b) {
        return a - b();
      },
      "*": function _(a, b) {
        return a * b();
      },
      "/": function _(a, b) {
        return a / b();
      },
      "%": function _(a, b) {
        return a % b();
      }
    }[ast.operator](SafeEval.evalAst(ast.left, subs), function() {
      return SafeEval.evalAst(ast.right, subs);
    });
    return result;
  },
  evalCompound: function evalCompound(ast, subs) {
    var last;
    for (var i = 0; i < ast.body.length; i++) {
      if (ast.body[i].type === "Identifier" && ["var", "let", "const"].includes(ast.body[i].name) && ast.body[i + 1] && ast.body[i + 1].type === "AssignmentExpression") {
        i += 1;
      }
      var expr = ast.body[i];
      last = SafeEval.evalAst(expr, subs);
    }
    return last;
  },
  evalConditionalExpression: function evalConditionalExpression(ast, subs) {
    if (SafeEval.evalAst(ast.test, subs)) {
      return SafeEval.evalAst(ast.consequent, subs);
    }
    return SafeEval.evalAst(ast.alternate, subs);
  },
  evalIdentifier: function evalIdentifier(ast, subs) {
    if (ast.name in subs) {
      return subs[ast.name];
    }
    throw ReferenceError("".concat(ast.name, " is not defined"));
  },
  evalLiteral: function evalLiteral(ast) {
    return ast.value;
  },
  evalMemberExpression: function evalMemberExpression(ast, subs) {
    var prop = ast.computed ? SafeEval.evalAst(ast.property) : ast.property.name;
    var obj = SafeEval.evalAst(ast.object, subs);
    var result = obj[prop];
    if (typeof result === "function") {
      return result.bind(obj);
    }
    return result;
  },
  evalUnaryExpression: function evalUnaryExpression(ast, subs) {
    var result = {
      "-": function _(a) {
        return -SafeEval.evalAst(a, subs);
      },
      "!": function _(a) {
        return !SafeEval.evalAst(a, subs);
      },
      "~": function _(a) {
        return ~SafeEval.evalAst(a, subs);
      },
      // eslint-disable-next-line no-implicit-coercion
      "+": function _(a) {
        return +SafeEval.evalAst(a, subs);
      }
    }[ast.operator](ast.argument);
    return result;
  },
  evalArrayExpression: function evalArrayExpression(ast, subs) {
    return ast.elements.map(function(el) {
      return SafeEval.evalAst(el, subs);
    });
  },
  evalCallExpression: function evalCallExpression(ast, subs) {
    var args = ast.arguments.map(function(arg) {
      return SafeEval.evalAst(arg, subs);
    });
    var func = SafeEval.evalAst(ast.callee, subs);
    return func.apply(void 0, _toConsumableArray(args));
  },
  evalAssignmentExpression: function evalAssignmentExpression(ast, subs) {
    if (ast.left.type !== "Identifier") {
      throw SyntaxError("Invalid left-hand side in assignment");
    }
    var id = ast.left.name;
    var value = SafeEval.evalAst(ast.right, subs);
    subs[id] = value;
    return subs[id];
  }
};
var SafeScript = function() {
  function SafeScript2(expr) {
    _classCallCheck(this, SafeScript2);
    this.code = expr;
    this.ast = jsep(this.code);
  }
  return _createClass(SafeScript2, [{
    key: "runInNewContext",
    value: function runInNewContext(context) {
      var keyMap = _objectSpread2({}, context);
      return SafeEval.evalAst(this.ast, keyMap);
    }
  }]);
}();
var Script = function() {
  function Script2(expr) {
    _classCallCheck(this, Script2);
    this.code = expr;
  }
  return _createClass(Script2, [{
    key: "runInNewContext",
    value: function runInNewContext(context) {
      var expr = this.code;
      var keys = Object.keys(context);
      var funcs = [];
      moveToAnotherArray(keys, funcs, function(key) {
        return typeof context[key] === "function";
      });
      var values = keys.map(function(vr) {
        return context[vr];
      });
      var funcString = funcs.reduce(function(s, func) {
        var fString = context[func].toString();
        if (!/function/.test(fString)) {
          fString = "function " + fString;
        }
        return "var " + func + "=" + fString + ";" + s;
      }, "");
      expr = funcString + expr;
      if (!/(["'])use strict\1/.test(expr) && !keys.includes("arguments")) {
        expr = "var arguments = undefined;" + expr;
      }
      expr = expr.replace(/;[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/, "");
      var lastStatementEnd = expr.lastIndexOf(";");
      var code = lastStatementEnd > -1 ? expr.slice(0, lastStatementEnd + 1) + " return " + expr.slice(lastStatementEnd + 1) : " return " + expr;
      return _construct(Function, keys.concat([code])).apply(void 0, _toConsumableArray(values));
    }
  }]);
}();
JSONPath.prototype.vm = {
  Script
};
JSONPath.prototype.safeVm = {
  Script: SafeScript
};
export {
  JSONPath,
  SafeScript
};
//# sourceMappingURL=jsonpath-plus.js.map
