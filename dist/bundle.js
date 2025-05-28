/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/react-dom/cjs/react-dom.development.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom.development.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


 true &&
  (function () {
    function noop() {}
    function testStringCoercion(value) {
      return "" + value;
    }
    function createPortal$1(children, containerInfo, implementation) {
      var key =
        3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      try {
        testStringCoercion(key);
        var JSCompiler_inline_result = !1;
      } catch (e) {
        JSCompiler_inline_result = !0;
      }
      JSCompiler_inline_result &&
        (console.error(
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ("function" === typeof Symbol &&
            Symbol.toStringTag &&
            key[Symbol.toStringTag]) ||
            key.constructor.name ||
            "Object"
        ),
        testStringCoercion(key));
      return {
        $$typeof: REACT_PORTAL_TYPE,
        key: null == key ? null : "" + key,
        children: children,
        containerInfo: containerInfo,
        implementation: implementation
      };
    }
    function getCrossOriginStringAs(as, input) {
      if ("font" === as) return "";
      if ("string" === typeof input)
        return "use-credentials" === input ? input : "";
    }
    function getValueDescriptorExpectingObjectForWarning(thing) {
      return null === thing
        ? "`null`"
        : void 0 === thing
          ? "`undefined`"
          : "" === thing
            ? "an empty string"
            : 'something with type "' + typeof thing + '"';
    }
    function getValueDescriptorExpectingEnumForWarning(thing) {
      return null === thing
        ? "`null`"
        : void 0 === thing
          ? "`undefined`"
          : "" === thing
            ? "an empty string"
            : "string" === typeof thing
              ? JSON.stringify(thing)
              : "number" === typeof thing
                ? "`" + thing + "`"
                : 'something with type "' + typeof thing + '"';
    }
    function resolveDispatcher() {
      var dispatcher = ReactSharedInternals.H;
      null === dispatcher &&
        console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
      return dispatcher;
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      "function" ===
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __webpack_require__(/*! react */ "./node_modules/react/index.js"),
      Internals = {
        d: {
          f: noop,
          r: function () {
            throw Error(
              "Invalid form element. requestFormReset must be passed a form that was rendered by React."
            );
          },
          D: noop,
          C: noop,
          L: noop,
          m: noop,
          X: noop,
          S: noop,
          M: noop
        },
        p: 0,
        findDOMNode: null
      },
      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
      ReactSharedInternals =
        React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    ("function" === typeof Map &&
      null != Map.prototype &&
      "function" === typeof Map.prototype.forEach &&
      "function" === typeof Set &&
      null != Set.prototype &&
      "function" === typeof Set.prototype.clear &&
      "function" === typeof Set.prototype.forEach) ||
      console.error(
        "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
      );
    exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
      Internals;
    exports.createPortal = function (children, container) {
      var key =
        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (
        !container ||
        (1 !== container.nodeType &&
          9 !== container.nodeType &&
          11 !== container.nodeType)
      )
        throw Error("Target container is not a DOM element.");
      return createPortal$1(children, container, null, key);
    };
    exports.flushSync = function (fn) {
      var previousTransition = ReactSharedInternals.T,
        previousUpdatePriority = Internals.p;
      try {
        if (((ReactSharedInternals.T = null), (Internals.p = 2), fn))
          return fn();
      } finally {
        (ReactSharedInternals.T = previousTransition),
          (Internals.p = previousUpdatePriority),
          Internals.d.f() &&
            console.error(
              "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
            );
      }
    };
    exports.preconnect = function (href, options) {
      "string" === typeof href && href
        ? null != options && "object" !== typeof options
          ? console.error(
              "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
              getValueDescriptorExpectingEnumForWarning(options)
            )
          : null != options &&
            "string" !== typeof options.crossOrigin &&
            console.error(
              "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
              getValueDescriptorExpectingObjectForWarning(options.crossOrigin)
            )
        : console.error(
            "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
            getValueDescriptorExpectingObjectForWarning(href)
          );
      "string" === typeof href &&
        (options
          ? ((options = options.crossOrigin),
            (options =
              "string" === typeof options
                ? "use-credentials" === options
                  ? options
                  : ""
                : void 0))
          : (options = null),
        Internals.d.C(href, options));
    };
    exports.prefetchDNS = function (href) {
      if ("string" !== typeof href || !href)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          getValueDescriptorExpectingObjectForWarning(href)
        );
      else if (1 < arguments.length) {
        var options = arguments[1];
        "object" === typeof options && options.hasOwnProperty("crossOrigin")
          ? console.error(
              "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
              getValueDescriptorExpectingEnumForWarning(options)
            )
          : console.error(
              "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
              getValueDescriptorExpectingEnumForWarning(options)
            );
      }
      "string" === typeof href && Internals.d.D(href);
    };
    exports.preinit = function (href, options) {
      "string" === typeof href && href
        ? null == options || "object" !== typeof options
          ? console.error(
              "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
              getValueDescriptorExpectingEnumForWarning(options)
            )
          : "style" !== options.as &&
            "script" !== options.as &&
            console.error(
              'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
              getValueDescriptorExpectingEnumForWarning(options.as)
            )
        : console.error(
            "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
            getValueDescriptorExpectingObjectForWarning(href)
          );
      if (
        "string" === typeof href &&
        options &&
        "string" === typeof options.as
      ) {
        var as = options.as,
          crossOrigin = getCrossOriginStringAs(as, options.crossOrigin),
          integrity =
            "string" === typeof options.integrity ? options.integrity : void 0,
          fetchPriority =
            "string" === typeof options.fetchPriority
              ? options.fetchPriority
              : void 0;
        "style" === as
          ? Internals.d.S(
              href,
              "string" === typeof options.precedence
                ? options.precedence
                : void 0,
              {
                crossOrigin: crossOrigin,
                integrity: integrity,
                fetchPriority: fetchPriority
              }
            )
          : "script" === as &&
            Internals.d.X(href, {
              crossOrigin: crossOrigin,
              integrity: integrity,
              fetchPriority: fetchPriority,
              nonce: "string" === typeof options.nonce ? options.nonce : void 0
            });
      }
    };
    exports.preinitModule = function (href, options) {
      var encountered = "";
      ("string" === typeof href && href) ||
        (encountered +=
          " The `href` argument encountered was " +
          getValueDescriptorExpectingObjectForWarning(href) +
          ".");
      void 0 !== options && "object" !== typeof options
        ? (encountered +=
            " The `options` argument encountered was " +
            getValueDescriptorExpectingObjectForWarning(options) +
            ".")
        : options &&
          "as" in options &&
          "script" !== options.as &&
          (encountered +=
            " The `as` option encountered was " +
            getValueDescriptorExpectingEnumForWarning(options.as) +
            ".");
      if (encountered)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          encountered
        );
      else
        switch (
          ((encountered =
            options && "string" === typeof options.as ? options.as : "script"),
          encountered)
        ) {
          case "script":
            break;
          default:
            (encountered =
              getValueDescriptorExpectingEnumForWarning(encountered)),
              console.error(
                'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
                encountered,
                href
              );
        }
      if ("string" === typeof href)
        if ("object" === typeof options && null !== options) {
          if (null == options.as || "script" === options.as)
            (encountered = getCrossOriginStringAs(
              options.as,
              options.crossOrigin
            )),
              Internals.d.M(href, {
                crossOrigin: encountered,
                integrity:
                  "string" === typeof options.integrity
                    ? options.integrity
                    : void 0,
                nonce:
                  "string" === typeof options.nonce ? options.nonce : void 0
              });
        } else null == options && Internals.d.M(href);
    };
    exports.preload = function (href, options) {
      var encountered = "";
      ("string" === typeof href && href) ||
        (encountered +=
          " The `href` argument encountered was " +
          getValueDescriptorExpectingObjectForWarning(href) +
          ".");
      null == options || "object" !== typeof options
        ? (encountered +=
            " The `options` argument encountered was " +
            getValueDescriptorExpectingObjectForWarning(options) +
            ".")
        : ("string" === typeof options.as && options.as) ||
          (encountered +=
            " The `as` option encountered was " +
            getValueDescriptorExpectingObjectForWarning(options.as) +
            ".");
      encountered &&
        console.error(
          'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
          encountered
        );
      if (
        "string" === typeof href &&
        "object" === typeof options &&
        null !== options &&
        "string" === typeof options.as
      ) {
        encountered = options.as;
        var crossOrigin = getCrossOriginStringAs(
          encountered,
          options.crossOrigin
        );
        Internals.d.L(href, encountered, {
          crossOrigin: crossOrigin,
          integrity:
            "string" === typeof options.integrity ? options.integrity : void 0,
          nonce: "string" === typeof options.nonce ? options.nonce : void 0,
          type: "string" === typeof options.type ? options.type : void 0,
          fetchPriority:
            "string" === typeof options.fetchPriority
              ? options.fetchPriority
              : void 0,
          referrerPolicy:
            "string" === typeof options.referrerPolicy
              ? options.referrerPolicy
              : void 0,
          imageSrcSet:
            "string" === typeof options.imageSrcSet
              ? options.imageSrcSet
              : void 0,
          imageSizes:
            "string" === typeof options.imageSizes
              ? options.imageSizes
              : void 0,
          media: "string" === typeof options.media ? options.media : void 0
        });
      }
    };
    exports.preloadModule = function (href, options) {
      var encountered = "";
      ("string" === typeof href && href) ||
        (encountered +=
          " The `href` argument encountered was " +
          getValueDescriptorExpectingObjectForWarning(href) +
          ".");
      void 0 !== options && "object" !== typeof options
        ? (encountered +=
            " The `options` argument encountered was " +
            getValueDescriptorExpectingObjectForWarning(options) +
            ".")
        : options &&
          "as" in options &&
          "string" !== typeof options.as &&
          (encountered +=
            " The `as` option encountered was " +
            getValueDescriptorExpectingObjectForWarning(options.as) +
            ".");
      encountered &&
        console.error(
          'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
          encountered
        );
      "string" === typeof href &&
        (options
          ? ((encountered = getCrossOriginStringAs(
              options.as,
              options.crossOrigin
            )),
            Internals.d.m(href, {
              as:
                "string" === typeof options.as && "script" !== options.as
                  ? options.as
                  : void 0,
              crossOrigin: encountered,
              integrity:
                "string" === typeof options.integrity
                  ? options.integrity
                  : void 0
            }))
          : Internals.d.m(href));
    };
    exports.requestFormReset = function (form) {
      Internals.d.r(form);
    };
    exports.unstable_batchedUpdates = function (fn, a) {
      return fn(a);
    };
    exports.useFormState = function (action, initialState, permalink) {
      return resolveDispatcher().useFormState(action, initialState, permalink);
    };
    exports.useFormStatus = function () {
      return resolveDispatcher().useHostTransitionStatus();
    };
    exports.version = "19.1.0";
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      "function" ===
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (true) {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  // removed by dead control flow
{}
}

if (false) // removed by dead control flow
{} else {
  module.exports = __webpack_require__(/*! ./cjs/react-dom.development.js */ "./node_modules/react-dom/cjs/react-dom.development.js");
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


 true &&
  (function () {
    function defineDeprecationWarning(methodName, info) {
      Object.defineProperty(Component.prototype, methodName, {
        get: function () {
          console.warn(
            "%s(...) is deprecated in plain JavaScript React classes. %s",
            info[0],
            info[1]
          );
        }
      });
    }
    function getIteratorFn(maybeIterable) {
      if (null === maybeIterable || "object" !== typeof maybeIterable)
        return null;
      maybeIterable =
        (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
        maybeIterable["@@iterator"];
      return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    function warnNoop(publicInstance, callerName) {
      publicInstance =
        ((publicInstance = publicInstance.constructor) &&
          (publicInstance.displayName || publicInstance.name)) ||
        "ReactClass";
      var warningKey = publicInstance + "." + callerName;
      didWarnStateUpdateForUnmountedComponent[warningKey] ||
        (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          callerName,
          publicInstance
        ),
        (didWarnStateUpdateForUnmountedComponent[warningKey] = !0));
    }
    function Component(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    function ComponentDummy() {}
    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = !1;
      } catch (e) {
        JSCompiler_inline_result = !0;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 =
          ("function" === typeof Symbol &&
            Symbol.toStringTag &&
            value[Symbol.toStringTag]) ||
          value.constructor.name ||
          "Object";
        JSCompiler_temp_const.call(
          JSCompiler_inline_result,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          JSCompiler_inline_result$jscomp$0
        );
        return testStringCoercion(value);
      }
    }
    function getComponentNameFromType(type) {
      if (null == type) return null;
      if ("function" === typeof type)
        return type.$$typeof === REACT_CLIENT_REFERENCE
          ? null
          : type.displayName || type.name || null;
      if ("string" === typeof type) return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
        case REACT_ACTIVITY_TYPE:
          return "Activity";
      }
      if ("object" === typeof type)
        switch (
          ("number" === typeof type.tag &&
            console.error(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
            ),
          type.$$typeof)
        ) {
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_CONTEXT_TYPE:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type ||
              ((type = innerType.displayName || innerType.name || ""),
              (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
            return type;
          case REACT_MEMO_TYPE:
            return (
              (innerType = type.displayName || null),
              null !== innerType
                ? innerType
                : getComponentNameFromType(type.type) || "Memo"
            );
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {}
        }
      return null;
    }
    function getTaskName(type) {
      if (type === REACT_FRAGMENT_TYPE) return "<>";
      if (
        "object" === typeof type &&
        null !== type &&
        type.$$typeof === REACT_LAZY_TYPE
      )
        return "<...>";
      try {
        var name = getComponentNameFromType(type);
        return name ? "<" + name + ">" : "<...>";
      } catch (x) {
        return "<...>";
      }
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
      return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning) return !1;
      }
      return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown ||
          ((specialPropKeyWarningShown = !0),
          console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
      }
      warnAboutAccessingKey.isReactWarning = !0;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: !0
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] ||
        ((didWarnAboutElementRef[componentName] = !0),
        console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
      componentName = this.props.ref;
      return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(
      type,
      key,
      self,
      source,
      owner,
      props,
      debugStack,
      debugTask
    ) {
      self = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key,
        props: props,
        _owner: owner
      };
      null !== (void 0 !== self ? self : null)
        ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
          })
        : Object.defineProperty(type, "ref", { enumerable: !1, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      });
      Object.defineProperty(type, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: debugStack
      });
      Object.defineProperty(type, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: debugTask
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function cloneAndReplaceKey(oldElement, newKey) {
      newKey = ReactElement(
        oldElement.type,
        newKey,
        void 0,
        void 0,
        oldElement._owner,
        oldElement.props,
        oldElement._debugStack,
        oldElement._debugTask
      );
      oldElement._store &&
        (newKey._store.validated = oldElement._store.validated);
      return newKey;
    }
    function isValidElement(object) {
      return (
        "object" === typeof object &&
        null !== object &&
        object.$$typeof === REACT_ELEMENT_TYPE
      );
    }
    function escape(key) {
      var escaperLookup = { "=": "=0", ":": "=2" };
      return (
        "$" +
        key.replace(/[=:]/g, function (match) {
          return escaperLookup[match];
        })
      );
    }
    function getElementKey(element, index) {
      return "object" === typeof element &&
        null !== element &&
        null != element.key
        ? (checkKeyStringCoercion(element.key), escape("" + element.key))
        : index.toString(36);
    }
    function noop$1() {}
    function resolveThenable(thenable) {
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
        default:
          switch (
            ("string" === typeof thenable.status
              ? thenable.then(noop$1, noop$1)
              : ((thenable.status = "pending"),
                thenable.then(
                  function (fulfilledValue) {
                    "pending" === thenable.status &&
                      ((thenable.status = "fulfilled"),
                      (thenable.value = fulfilledValue));
                  },
                  function (error) {
                    "pending" === thenable.status &&
                      ((thenable.status = "rejected"),
                      (thenable.reason = error));
                  }
                )),
            thenable.status)
          ) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
          }
      }
      throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = typeof children;
      if ("undefined" === type || "boolean" === type) children = null;
      var invokeCallback = !1;
      if (null === children) invokeCallback = !0;
      else
        switch (type) {
          case "bigint":
          case "string":
          case "number":
            invokeCallback = !0;
            break;
          case "object":
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = !0;
                break;
              case REACT_LAZY_TYPE:
                return (
                  (invokeCallback = children._init),
                  mapIntoArray(
                    invokeCallback(children._payload),
                    array,
                    escapedPrefix,
                    nameSoFar,
                    callback
                  )
                );
            }
        }
      if (invokeCallback) {
        invokeCallback = children;
        callback = callback(invokeCallback);
        var childKey =
          "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
        isArrayImpl(callback)
          ? ((escapedPrefix = ""),
            null != childKey &&
              (escapedPrefix =
                childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"),
            mapIntoArray(callback, array, escapedPrefix, "", function (c) {
              return c;
            }))
          : null != callback &&
            (isValidElement(callback) &&
              (null != callback.key &&
                ((invokeCallback && invokeCallback.key === callback.key) ||
                  checkKeyStringCoercion(callback.key)),
              (escapedPrefix = cloneAndReplaceKey(
                callback,
                escapedPrefix +
                  (null == callback.key ||
                  (invokeCallback && invokeCallback.key === callback.key)
                    ? ""
                    : ("" + callback.key).replace(
                        userProvidedKeyEscapeRegex,
                        "$&/"
                      ) + "/") +
                  childKey
              )),
              "" !== nameSoFar &&
                null != invokeCallback &&
                isValidElement(invokeCallback) &&
                null == invokeCallback.key &&
                invokeCallback._store &&
                !invokeCallback._store.validated &&
                (escapedPrefix._store.validated = 2),
              (callback = escapedPrefix)),
            array.push(callback));
        return 1;
      }
      invokeCallback = 0;
      childKey = "" === nameSoFar ? "." : nameSoFar + ":";
      if (isArrayImpl(children))
        for (var i = 0; i < children.length; i++)
          (nameSoFar = children[i]),
            (type = childKey + getElementKey(nameSoFar, i)),
            (invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            ));
      else if (((i = getIteratorFn(children)), "function" === typeof i))
        for (
          i === children.entries &&
            (didWarnAboutMaps ||
              console.warn(
                "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
              ),
            (didWarnAboutMaps = !0)),
            children = i.call(children),
            i = 0;
          !(nameSoFar = children.next()).done;

        )
          (nameSoFar = nameSoFar.value),
            (type = childKey + getElementKey(nameSoFar, i++)),
            (invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            ));
      else if ("object" === type) {
        if ("function" === typeof children.then)
          return mapIntoArray(
            resolveThenable(children),
            array,
            escapedPrefix,
            nameSoFar,
            callback
          );
        array = String(children);
        throw Error(
          "Objects are not valid as a React child (found: " +
            ("[object Object]" === array
              ? "object with keys {" + Object.keys(children).join(", ") + "}"
              : array) +
            "). If you meant to render a collection of children, use an array instead."
        );
      }
      return invokeCallback;
    }
    function mapChildren(children, func, context) {
      if (null == children) return children;
      var result = [],
        count = 0;
      mapIntoArray(children, result, "", "", function (child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    function lazyInitializer(payload) {
      if (-1 === payload._status) {
        var ctor = payload._result;
        ctor = ctor();
        ctor.then(
          function (moduleObject) {
            if (0 === payload._status || -1 === payload._status)
              (payload._status = 1), (payload._result = moduleObject);
          },
          function (error) {
            if (0 === payload._status || -1 === payload._status)
              (payload._status = 2), (payload._result = error);
          }
        );
        -1 === payload._status &&
          ((payload._status = 0), (payload._result = ctor));
      }
      if (1 === payload._status)
        return (
          (ctor = payload._result),
          void 0 === ctor &&
            console.error(
              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
              ctor
            ),
          "default" in ctor ||
            console.error(
              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
              ctor
            ),
          ctor.default
        );
      throw payload._result;
    }
    function resolveDispatcher() {
      var dispatcher = ReactSharedInternals.H;
      null === dispatcher &&
        console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
      return dispatcher;
    }
    function noop() {}
    function enqueueTask(task) {
      if (null === enqueueTaskImpl)
        try {
          var requireString = ("require" + Math.random()).slice(0, 7);
          enqueueTaskImpl = (module && module[requireString]).call(
            module,
            "timers"
          ).setImmediate;
        } catch (_err) {
          enqueueTaskImpl = function (callback) {
            !1 === didWarnAboutMessageChannel &&
              ((didWarnAboutMessageChannel = !0),
              "undefined" === typeof MessageChannel &&
                console.error(
                  "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
                ));
            var channel = new MessageChannel();
            channel.port1.onmessage = callback;
            channel.port2.postMessage(void 0);
          };
        }
      return enqueueTaskImpl(task);
    }
    function aggregateErrors(errors) {
      return 1 < errors.length && "function" === typeof AggregateError
        ? new AggregateError(errors)
        : errors[0];
    }
    function popActScope(prevActQueue, prevActScopeDepth) {
      prevActScopeDepth !== actScopeDepth - 1 &&
        console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        );
      actScopeDepth = prevActScopeDepth;
    }
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
      var queue = ReactSharedInternals.actQueue;
      if (null !== queue)
        if (0 !== queue.length)
          try {
            flushActQueue(queue);
            enqueueTask(function () {
              return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            });
            return;
          } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
          }
        else ReactSharedInternals.actQueue = null;
      0 < ReactSharedInternals.thrownErrors.length
        ? ((queue = aggregateErrors(ReactSharedInternals.thrownErrors)),
          (ReactSharedInternals.thrownErrors.length = 0),
          reject(queue))
        : resolve(returnValue);
    }
    function flushActQueue(queue) {
      if (!isFlushing) {
        isFlushing = !0;
        var i = 0;
        try {
          for (; i < queue.length; i++) {
            var callback = queue[i];
            do {
              ReactSharedInternals.didUsePromise = !1;
              var continuation = callback(!1);
              if (null !== continuation) {
                if (ReactSharedInternals.didUsePromise) {
                  queue[i] = callback;
                  queue.splice(0, i);
                  return;
                }
                callback = continuation;
              } else break;
            } while (1);
          }
          queue.length = 0;
        } catch (error) {
          queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
        } finally {
          isFlushing = !1;
        }
      }
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      "function" ===
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
      REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
      REACT_MEMO_TYPE = Symbol.for("react.memo"),
      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
      REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
      MAYBE_ITERATOR_SYMBOL = Symbol.iterator,
      didWarnStateUpdateForUnmountedComponent = {},
      ReactNoopUpdateQueue = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function (publicInstance) {
          warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function (publicInstance) {
          warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function (publicInstance) {
          warnNoop(publicInstance, "setState");
        }
      },
      assign = Object.assign,
      emptyObject = {};
    Object.freeze(emptyObject);
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function (partialState, callback) {
      if (
        "object" !== typeof partialState &&
        "function" !== typeof partialState &&
        null != partialState
      )
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function (callback) {
      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    var deprecatedAPIs = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      },
      fnName;
    for (fnName in deprecatedAPIs)
      deprecatedAPIs.hasOwnProperty(fnName) &&
        defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    ComponentDummy.prototype = Component.prototype;
    deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
    deprecatedAPIs.constructor = PureComponent;
    assign(deprecatedAPIs, Component.prototype);
    deprecatedAPIs.isPureReactComponent = !0;
    var isArrayImpl = Array.isArray,
      REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
      ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      },
      hasOwnProperty = Object.prototype.hasOwnProperty,
      createTask = console.createTask
        ? console.createTask
        : function () {
            return null;
          };
    deprecatedAPIs = {
      "react-stack-bottom-frame": function (callStackForError) {
        return callStackForError();
      }
    };
    var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = deprecatedAPIs[
      "react-stack-bottom-frame"
    ].bind(deprecatedAPIs, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutMaps = !1,
      userProvidedKeyEscapeRegex = /\/+/g,
      reportGlobalError =
        "function" === typeof reportError
          ? reportError
          : function (error) {
              if (
                "object" === typeof window &&
                "function" === typeof window.ErrorEvent
              ) {
                var event = new window.ErrorEvent("error", {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    "object" === typeof error &&
                    null !== error &&
                    "string" === typeof error.message
                      ? String(error.message)
                      : String(error),
                  error: error
                });
                if (!window.dispatchEvent(event)) return;
              } else if (
                "object" === typeof process &&
                "function" === typeof process.emit
              ) {
                process.emit("uncaughtException", error);
                return;
              }
              console.error(error);
            },
      didWarnAboutMessageChannel = !1,
      enqueueTaskImpl = null,
      actScopeDepth = 0,
      didWarnNoAwaitAct = !1,
      isFlushing = !1,
      queueSeveralMicrotasks =
        "function" === typeof queueMicrotask
          ? function (callback) {
              queueMicrotask(function () {
                return queueMicrotask(callback);
              });
            }
          : enqueueTask;
    deprecatedAPIs = Object.freeze({
      __proto__: null,
      c: function (size) {
        return resolveDispatcher().useMemoCache(size);
      }
    });
    exports.Children = {
      map: mapChildren,
      forEach: function (children, forEachFunc, forEachContext) {
        mapChildren(
          children,
          function () {
            forEachFunc.apply(this, arguments);
          },
          forEachContext
        );
      },
      count: function (children) {
        var n = 0;
        mapChildren(children, function () {
          n++;
        });
        return n;
      },
      toArray: function (children) {
        return (
          mapChildren(children, function (child) {
            return child;
          }) || []
        );
      },
      only: function (children) {
        if (!isValidElement(children))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return children;
      }
    };
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
      ReactSharedInternals;
    exports.__COMPILER_RUNTIME = deprecatedAPIs;
    exports.act = function (callback) {
      var prevActQueue = ReactSharedInternals.actQueue,
        prevActScopeDepth = actScopeDepth;
      actScopeDepth++;
      var queue = (ReactSharedInternals.actQueue =
          null !== prevActQueue ? prevActQueue : []),
        didAwaitActCall = !1;
      try {
        var result = callback();
      } catch (error) {
        ReactSharedInternals.thrownErrors.push(error);
      }
      if (0 < ReactSharedInternals.thrownErrors.length)
        throw (
          (popActScope(prevActQueue, prevActScopeDepth),
          (callback = aggregateErrors(ReactSharedInternals.thrownErrors)),
          (ReactSharedInternals.thrownErrors.length = 0),
          callback)
        );
      if (
        null !== result &&
        "object" === typeof result &&
        "function" === typeof result.then
      ) {
        var thenable = result;
        queueSeveralMicrotasks(function () {
          didAwaitActCall ||
            didWarnNoAwaitAct ||
            ((didWarnNoAwaitAct = !0),
            console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
        });
        return {
          then: function (resolve, reject) {
            didAwaitActCall = !0;
            thenable.then(
              function (returnValue) {
                popActScope(prevActQueue, prevActScopeDepth);
                if (0 === prevActScopeDepth) {
                  try {
                    flushActQueue(queue),
                      enqueueTask(function () {
                        return recursivelyFlushAsyncActWork(
                          returnValue,
                          resolve,
                          reject
                        );
                      });
                  } catch (error$0) {
                    ReactSharedInternals.thrownErrors.push(error$0);
                  }
                  if (0 < ReactSharedInternals.thrownErrors.length) {
                    var _thrownError = aggregateErrors(
                      ReactSharedInternals.thrownErrors
                    );
                    ReactSharedInternals.thrownErrors.length = 0;
                    reject(_thrownError);
                  }
                } else resolve(returnValue);
              },
              function (error) {
                popActScope(prevActQueue, prevActScopeDepth);
                0 < ReactSharedInternals.thrownErrors.length
                  ? ((error = aggregateErrors(
                      ReactSharedInternals.thrownErrors
                    )),
                    (ReactSharedInternals.thrownErrors.length = 0),
                    reject(error))
                  : reject(error);
              }
            );
          }
        };
      }
      var returnValue$jscomp$0 = result;
      popActScope(prevActQueue, prevActScopeDepth);
      0 === prevActScopeDepth &&
        (flushActQueue(queue),
        0 !== queue.length &&
          queueSeveralMicrotasks(function () {
            didAwaitActCall ||
              didWarnNoAwaitAct ||
              ((didWarnNoAwaitAct = !0),
              console.error(
                "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
              ));
          }),
        (ReactSharedInternals.actQueue = null));
      if (0 < ReactSharedInternals.thrownErrors.length)
        throw (
          ((callback = aggregateErrors(ReactSharedInternals.thrownErrors)),
          (ReactSharedInternals.thrownErrors.length = 0),
          callback)
        );
      return {
        then: function (resolve, reject) {
          didAwaitActCall = !0;
          0 === prevActScopeDepth
            ? ((ReactSharedInternals.actQueue = queue),
              enqueueTask(function () {
                return recursivelyFlushAsyncActWork(
                  returnValue$jscomp$0,
                  resolve,
                  reject
                );
              }))
            : resolve(returnValue$jscomp$0);
        }
      };
    };
    exports.cache = function (fn) {
      return function () {
        return fn.apply(null, arguments);
      };
    };
    exports.captureOwnerStack = function () {
      var getCurrentStack = ReactSharedInternals.getCurrentStack;
      return null === getCurrentStack ? null : getCurrentStack();
    };
    exports.cloneElement = function (element, config, children) {
      if (null === element || void 0 === element)
        throw Error(
          "The argument must be a React element, but you passed " +
            element +
            "."
        );
      var props = assign({}, element.props),
        key = element.key,
        owner = element._owner;
      if (null != config) {
        var JSCompiler_inline_result;
        a: {
          if (
            hasOwnProperty.call(config, "ref") &&
            (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
              config,
              "ref"
            ).get) &&
            JSCompiler_inline_result.isReactWarning
          ) {
            JSCompiler_inline_result = !1;
            break a;
          }
          JSCompiler_inline_result = void 0 !== config.ref;
        }
        JSCompiler_inline_result && (owner = getOwner());
        hasValidKey(config) &&
          (checkKeyStringCoercion(config.key), (key = "" + config.key));
        for (propName in config)
          !hasOwnProperty.call(config, propName) ||
            "key" === propName ||
            "__self" === propName ||
            "__source" === propName ||
            ("ref" === propName && void 0 === config.ref) ||
            (props[propName] = config[propName]);
      }
      var propName = arguments.length - 2;
      if (1 === propName) props.children = children;
      else if (1 < propName) {
        JSCompiler_inline_result = Array(propName);
        for (var i = 0; i < propName; i++)
          JSCompiler_inline_result[i] = arguments[i + 2];
        props.children = JSCompiler_inline_result;
      }
      props = ReactElement(
        element.type,
        key,
        void 0,
        void 0,
        owner,
        props,
        element._debugStack,
        element._debugTask
      );
      for (key = 2; key < arguments.length; key++)
        (owner = arguments[key]),
          isValidElement(owner) && owner._store && (owner._store.validated = 1);
      return props;
    };
    exports.createContext = function (defaultValue) {
      defaultValue = {
        $$typeof: REACT_CONTEXT_TYPE,
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      defaultValue.Provider = defaultValue;
      defaultValue.Consumer = {
        $$typeof: REACT_CONSUMER_TYPE,
        _context: defaultValue
      };
      defaultValue._currentRenderer = null;
      defaultValue._currentRenderer2 = null;
      return defaultValue;
    };
    exports.createElement = function (type, config, children) {
      for (var i = 2; i < arguments.length; i++) {
        var node = arguments[i];
        isValidElement(node) && node._store && (node._store.validated = 1);
      }
      i = {};
      node = null;
      if (null != config)
        for (propName in (didWarnAboutOldJSXRuntime ||
          !("__self" in config) ||
          "key" in config ||
          ((didWarnAboutOldJSXRuntime = !0),
          console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )),
        hasValidKey(config) &&
          (checkKeyStringCoercion(config.key), (node = "" + config.key)),
        config))
          hasOwnProperty.call(config, propName) &&
            "key" !== propName &&
            "__self" !== propName &&
            "__source" !== propName &&
            (i[propName] = config[propName]);
      var childrenLength = arguments.length - 2;
      if (1 === childrenLength) i.children = children;
      else if (1 < childrenLength) {
        for (
          var childArray = Array(childrenLength), _i = 0;
          _i < childrenLength;
          _i++
        )
          childArray[_i] = arguments[_i + 2];
        Object.freeze && Object.freeze(childArray);
        i.children = childArray;
      }
      if (type && type.defaultProps)
        for (propName in ((childrenLength = type.defaultProps), childrenLength))
          void 0 === i[propName] && (i[propName] = childrenLength[propName]);
      node &&
        defineKeyPropWarningGetter(
          i,
          "function" === typeof type
            ? type.displayName || type.name || "Unknown"
            : type
        );
      var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
      return ReactElement(
        type,
        node,
        void 0,
        void 0,
        getOwner(),
        i,
        propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
        propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask
      );
    };
    exports.createRef = function () {
      var refObject = { current: null };
      Object.seal(refObject);
      return refObject;
    };
    exports.forwardRef = function (render) {
      null != render && render.$$typeof === REACT_MEMO_TYPE
        ? console.error(
            "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
          )
        : "function" !== typeof render
          ? console.error(
              "forwardRef requires a render function but was given %s.",
              null === render ? "null" : typeof render
            )
          : 0 !== render.length &&
            2 !== render.length &&
            console.error(
              "forwardRef render functions accept exactly two parameters: props and ref. %s",
              1 === render.length
                ? "Did you forget to use the ref parameter?"
                : "Any additional parameter will be undefined."
            );
      null != render &&
        null != render.defaultProps &&
        console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
      var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render: render },
        ownName;
      Object.defineProperty(elementType, "displayName", {
        enumerable: !1,
        configurable: !0,
        get: function () {
          return ownName;
        },
        set: function (name) {
          ownName = name;
          render.name ||
            render.displayName ||
            (Object.defineProperty(render, "name", { value: name }),
            (render.displayName = name));
        }
      });
      return elementType;
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function (ctor) {
      return {
        $$typeof: REACT_LAZY_TYPE,
        _payload: { _status: -1, _result: ctor },
        _init: lazyInitializer
      };
    };
    exports.memo = function (type, compare) {
      null == type &&
        console.error(
          "memo: The first argument must be a component. Instead received: %s",
          null === type ? "null" : typeof type
        );
      compare = {
        $$typeof: REACT_MEMO_TYPE,
        type: type,
        compare: void 0 === compare ? null : compare
      };
      var ownName;
      Object.defineProperty(compare, "displayName", {
        enumerable: !1,
        configurable: !0,
        get: function () {
          return ownName;
        },
        set: function (name) {
          ownName = name;
          type.name ||
            type.displayName ||
            (Object.defineProperty(type, "name", { value: name }),
            (type.displayName = name));
        }
      });
      return compare;
    };
    exports.startTransition = function (scope) {
      var prevTransition = ReactSharedInternals.T,
        currentTransition = {};
      ReactSharedInternals.T = currentTransition;
      currentTransition._updatedFibers = new Set();
      try {
        var returnValue = scope(),
          onStartTransitionFinish = ReactSharedInternals.S;
        null !== onStartTransitionFinish &&
          onStartTransitionFinish(currentTransition, returnValue);
        "object" === typeof returnValue &&
          null !== returnValue &&
          "function" === typeof returnValue.then &&
          returnValue.then(noop, reportGlobalError);
      } catch (error) {
        reportGlobalError(error);
      } finally {
        null === prevTransition &&
          currentTransition._updatedFibers &&
          ((scope = currentTransition._updatedFibers.size),
          currentTransition._updatedFibers.clear(),
          10 < scope &&
            console.warn(
              "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
            )),
          (ReactSharedInternals.T = prevTransition);
      }
    };
    exports.unstable_useCacheRefresh = function () {
      return resolveDispatcher().useCacheRefresh();
    };
    exports.use = function (usable) {
      return resolveDispatcher().use(usable);
    };
    exports.useActionState = function (action, initialState, permalink) {
      return resolveDispatcher().useActionState(
        action,
        initialState,
        permalink
      );
    };
    exports.useCallback = function (callback, deps) {
      return resolveDispatcher().useCallback(callback, deps);
    };
    exports.useContext = function (Context) {
      var dispatcher = resolveDispatcher();
      Context.$$typeof === REACT_CONSUMER_TYPE &&
        console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        );
      return dispatcher.useContext(Context);
    };
    exports.useDebugValue = function (value, formatterFn) {
      return resolveDispatcher().useDebugValue(value, formatterFn);
    };
    exports.useDeferredValue = function (value, initialValue) {
      return resolveDispatcher().useDeferredValue(value, initialValue);
    };
    exports.useEffect = function (create, createDeps, update) {
      null == create &&
        console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
      var dispatcher = resolveDispatcher();
      if ("function" === typeof update)
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return dispatcher.useEffect(create, createDeps);
    };
    exports.useId = function () {
      return resolveDispatcher().useId();
    };
    exports.useImperativeHandle = function (ref, create, deps) {
      return resolveDispatcher().useImperativeHandle(ref, create, deps);
    };
    exports.useInsertionEffect = function (create, deps) {
      null == create &&
        console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
      return resolveDispatcher().useInsertionEffect(create, deps);
    };
    exports.useLayoutEffect = function (create, deps) {
      null == create &&
        console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
      return resolveDispatcher().useLayoutEffect(create, deps);
    };
    exports.useMemo = function (create, deps) {
      return resolveDispatcher().useMemo(create, deps);
    };
    exports.useOptimistic = function (passthrough, reducer) {
      return resolveDispatcher().useOptimistic(passthrough, reducer);
    };
    exports.useReducer = function (reducer, initialArg, init) {
      return resolveDispatcher().useReducer(reducer, initialArg, init);
    };
    exports.useRef = function (initialValue) {
      return resolveDispatcher().useRef(initialValue);
    };
    exports.useState = function (initialState) {
      return resolveDispatcher().useState(initialState);
    };
    exports.useSyncExternalStore = function (
      subscribe,
      getSnapshot,
      getServerSnapshot
    ) {
      return resolveDispatcher().useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot
      );
    };
    exports.useTransition = function () {
      return resolveDispatcher().useTransition();
    };
    exports.version = "19.1.0";
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      "function" ===
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (false) // removed by dead control flow
{} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
var App = function () {
    return react_1.default.createElement("h1", null, "Hello, React with TypeScript!");
};
react_dom_1.default.render(react_1.default.createElement(App, null), document.getElementById('root'));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.tsx");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7QUFDYixLQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbUJBQU8sQ0FBQyw0Q0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvRUFBb0U7QUFDeEU7QUFDQSxJQUFJLG9CQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpQkFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrQkFBa0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1CQUFtQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxJQUFJLHFCQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixVQUFVO0FBQ1Y7QUFDQSxJQUFJLGVBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLElBQUkscUJBQXFCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsSUFBSSx3QkFBd0I7QUFDNUI7QUFDQTtBQUNBLElBQUksK0JBQStCO0FBQ25DO0FBQ0E7QUFDQSxJQUFJLG9CQUFvQjtBQUN4QjtBQUNBO0FBQ0EsSUFBSSxxQkFBcUI7QUFDekI7QUFDQTtBQUNBLElBQUksZUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7Ozs7Ozs7Ozs7O0FDdmFVOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFBQSxFQU9DO0FBQ0g7O0FBRUEsSUFBSSxLQUFxQyxFQUFFO0FBQUEsRUFLMUMsQ0FBQztBQUNGLEVBQUUsbUlBQTBEO0FBQzVEOzs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhO0FBQ2IsS0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9NQUFvTTtBQUNwTTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsK0NBQStDLDZCQUE2QjtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx5Q0FBeUM7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGNBQWM7QUFDZDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLGdCQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpQkFBaUI7QUFDckIsSUFBSSxnQkFBZ0I7QUFDcEIsSUFBSSxnQkFBZ0I7QUFDcEIsSUFBSSxxQkFBcUI7QUFDekIsSUFBSSxrQkFBa0I7QUFDdEIsSUFBSSxnQkFBZ0I7QUFDcEIsSUFBSSx1RUFBdUU7QUFDM0U7QUFDQSxJQUFJLDBCQUEwQjtBQUM5QixJQUFJLFdBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnTkFBZ047QUFDaE47QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5QkFBeUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvQkFBb0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixjQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscUJBQXFCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFCQUFxQjtBQUN6QixzQkFBc0Isc0JBQXNCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpQkFBaUI7QUFDckIsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLElBQUksa0JBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGtEQUFrRDtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsYUFBYTtBQUNsRTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxJQUFJLHNCQUFzQjtBQUMxQixJQUFJLFlBQVk7QUFDaEI7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxZQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGFBQWE7QUFDaEU7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsSUFBSSx1QkFBdUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0NBQWdDO0FBQ3BDO0FBQ0E7QUFDQSxJQUFJLFdBQVc7QUFDZjtBQUNBO0FBQ0EsSUFBSSxzQkFBc0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtQkFBbUI7QUFDdkI7QUFDQTtBQUNBLElBQUksa0JBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxQkFBcUI7QUFDekI7QUFDQTtBQUNBLElBQUksd0JBQXdCO0FBQzVCO0FBQ0E7QUFDQSxJQUFJLGlCQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhO0FBQ2pCO0FBQ0E7QUFDQSxJQUFJLDJCQUEyQjtBQUMvQjtBQUNBO0FBQ0EsSUFBSSwwQkFBMEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1QkFBdUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxlQUFlO0FBQ25CO0FBQ0E7QUFDQSxJQUFJLHFCQUFxQjtBQUN6QjtBQUNBO0FBQ0EsSUFBSSxrQkFBa0I7QUFDdEI7QUFDQTtBQUNBLElBQUksY0FBYztBQUNsQjtBQUNBO0FBQ0EsSUFBSSxnQkFBZ0I7QUFDcEI7QUFDQTtBQUNBLElBQUksNEJBQTRCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxQkFBcUI7QUFDekI7QUFDQTtBQUNBLElBQUksZUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7Ozs7Ozs7Ozs7O0FDenRDVTs7QUFFYixJQUFJLEtBQXFDLEVBQUU7QUFBQSxFQUUxQyxDQUFDO0FBQ0YsRUFBRSx1SEFBc0Q7QUFDeEQ7Ozs7Ozs7Ozs7O0FDTmE7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw4QkFBOEIsbUJBQU8sQ0FBQyw0Q0FBTztBQUM3QyxrQ0FBa0MsbUJBQU8sQ0FBQyxvREFBVztBQUNyRDtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ1ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVKQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpc3Qtb2YtZXZlbnRzLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9janMvcmVhY3QtZG9tLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL2xpc3Qtb2YtZXZlbnRzLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9saXN0LW9mLWV2ZW50cy8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vbGlzdC1vZi1ldmVudHMvLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGlzdC1vZi1ldmVudHMvLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovL2xpc3Qtb2YtZXZlbnRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xpc3Qtb2YtZXZlbnRzL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vbGlzdC1vZi1ldmVudHMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9saXN0LW9mLWV2ZW50cy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbGlzdC1vZi1ldmVudHMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LWRvbS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgTWV0YSBQbGF0Zm9ybXMsIEluYy4gYW5kIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiZcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBub29wKCkge31cbiAgICBmdW5jdGlvbiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiBcIlwiICsgdmFsdWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVBvcnRhbCQxKGNoaWxkcmVuLCBjb250YWluZXJJbmZvLCBpbXBsZW1lbnRhdGlvbikge1xuICAgICAgdmFyIGtleSA9XG4gICAgICAgIDMgPCBhcmd1bWVudHMubGVuZ3RoICYmIHZvaWQgMCAhPT0gYXJndW1lbnRzWzNdID8gYXJndW1lbnRzWzNdIDogbnVsbDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRlc3RTdHJpbmdDb2VyY2lvbihrZXkpO1xuICAgICAgICB2YXIgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0ID0gITE7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdCA9ICEwO1xuICAgICAgfVxuICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0ICYmXG4gICAgICAgIChjb25zb2xlLmVycm9yKFxuICAgICAgICAgIFwiVGhlIHByb3ZpZGVkIGtleSBpcyBhbiB1bnN1cHBvcnRlZCB0eXBlICVzLiBUaGlzIHZhbHVlIG11c3QgYmUgY29lcmNlZCB0byBhIHN0cmluZyBiZWZvcmUgdXNpbmcgaXQgaGVyZS5cIixcbiAgICAgICAgICAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgU3ltYm9sICYmXG4gICAgICAgICAgICBTeW1ib2wudG9TdHJpbmdUYWcgJiZcbiAgICAgICAgICAgIGtleVtTeW1ib2wudG9TdHJpbmdUYWddKSB8fFxuICAgICAgICAgICAga2V5LmNvbnN0cnVjdG9yLm5hbWUgfHxcbiAgICAgICAgICAgIFwiT2JqZWN0XCJcbiAgICAgICAgKSxcbiAgICAgICAgdGVzdFN0cmluZ0NvZXJjaW9uKGtleSkpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJCR0eXBlb2Y6IFJFQUNUX1BPUlRBTF9UWVBFLFxuICAgICAgICBrZXk6IG51bGwgPT0ga2V5ID8gbnVsbCA6IFwiXCIgKyBrZXksXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICAgICAgY29udGFpbmVySW5mbzogY29udGFpbmVySW5mbyxcbiAgICAgICAgaW1wbGVtZW50YXRpb246IGltcGxlbWVudGF0aW9uXG4gICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRDcm9zc09yaWdpblN0cmluZ0FzKGFzLCBpbnB1dCkge1xuICAgICAgaWYgKFwiZm9udFwiID09PSBhcykgcmV0dXJuIFwiXCI7XG4gICAgICBpZiAoXCJzdHJpbmdcIiA9PT0gdHlwZW9mIGlucHV0KVxuICAgICAgICByZXR1cm4gXCJ1c2UtY3JlZGVudGlhbHNcIiA9PT0gaW5wdXQgPyBpbnB1dCA6IFwiXCI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFZhbHVlRGVzY3JpcHRvckV4cGVjdGluZ09iamVjdEZvcldhcm5pbmcodGhpbmcpIHtcbiAgICAgIHJldHVybiBudWxsID09PSB0aGluZ1xuICAgICAgICA/IFwiYG51bGxgXCJcbiAgICAgICAgOiB2b2lkIDAgPT09IHRoaW5nXG4gICAgICAgICAgPyBcImB1bmRlZmluZWRgXCJcbiAgICAgICAgICA6IFwiXCIgPT09IHRoaW5nXG4gICAgICAgICAgICA/IFwiYW4gZW1wdHkgc3RyaW5nXCJcbiAgICAgICAgICAgIDogJ3NvbWV0aGluZyB3aXRoIHR5cGUgXCInICsgdHlwZW9mIHRoaW5nICsgJ1wiJztcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0VmFsdWVEZXNjcmlwdG9yRXhwZWN0aW5nRW51bUZvcldhcm5pbmcodGhpbmcpIHtcbiAgICAgIHJldHVybiBudWxsID09PSB0aGluZ1xuICAgICAgICA/IFwiYG51bGxgXCJcbiAgICAgICAgOiB2b2lkIDAgPT09IHRoaW5nXG4gICAgICAgICAgPyBcImB1bmRlZmluZWRgXCJcbiAgICAgICAgICA6IFwiXCIgPT09IHRoaW5nXG4gICAgICAgICAgICA/IFwiYW4gZW1wdHkgc3RyaW5nXCJcbiAgICAgICAgICAgIDogXCJzdHJpbmdcIiA9PT0gdHlwZW9mIHRoaW5nXG4gICAgICAgICAgICAgID8gSlNPTi5zdHJpbmdpZnkodGhpbmcpXG4gICAgICAgICAgICAgIDogXCJudW1iZXJcIiA9PT0gdHlwZW9mIHRoaW5nXG4gICAgICAgICAgICAgICAgPyBcImBcIiArIHRoaW5nICsgXCJgXCJcbiAgICAgICAgICAgICAgICA6ICdzb21ldGhpbmcgd2l0aCB0eXBlIFwiJyArIHR5cGVvZiB0aGluZyArICdcIic7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICAgICAgdmFyIGRpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5IO1xuICAgICAgbnVsbCA9PT0gZGlzcGF0Y2hlciAmJlxuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIFwiSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvciBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbjEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbjIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4zLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuU2VlIGh0dHBzOi8vcmVhY3QuZGV2L2xpbmsvaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiXG4gICAgICAgICk7XG4gICAgICByZXR1cm4gZGlzcGF0Y2hlcjtcbiAgICB9XG4gICAgXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAmJlxuICAgICAgXCJmdW5jdGlvblwiID09PVxuICAgICAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydCAmJlxuICAgICAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydChFcnJvcigpKTtcbiAgICB2YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIiksXG4gICAgICBJbnRlcm5hbHMgPSB7XG4gICAgICAgIGQ6IHtcbiAgICAgICAgICBmOiBub29wLFxuICAgICAgICAgIHI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgICBcIkludmFsaWQgZm9ybSBlbGVtZW50LiByZXF1ZXN0Rm9ybVJlc2V0IG11c3QgYmUgcGFzc2VkIGEgZm9ybSB0aGF0IHdhcyByZW5kZXJlZCBieSBSZWFjdC5cIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIEQ6IG5vb3AsXG4gICAgICAgICAgQzogbm9vcCxcbiAgICAgICAgICBMOiBub29wLFxuICAgICAgICAgIG06IG5vb3AsXG4gICAgICAgICAgWDogbm9vcCxcbiAgICAgICAgICBTOiBub29wLFxuICAgICAgICAgIE06IG5vb3BcbiAgICAgICAgfSxcbiAgICAgICAgcDogMCxcbiAgICAgICAgZmluZERPTU5vZGU6IG51bGxcbiAgICAgIH0sXG4gICAgICBSRUFDVF9QT1JUQUxfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIiksXG4gICAgICBSZWFjdFNoYXJlZEludGVybmFscyA9XG4gICAgICAgIFJlYWN0Ll9fQ0xJRU5UX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1dBUk5fVVNFUlNfVEhFWV9DQU5OT1RfVVBHUkFERTtcbiAgICAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgTWFwICYmXG4gICAgICBudWxsICE9IE1hcC5wcm90b3R5cGUgJiZcbiAgICAgIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIE1hcC5wcm90b3R5cGUuZm9yRWFjaCAmJlxuICAgICAgXCJmdW5jdGlvblwiID09PSB0eXBlb2YgU2V0ICYmXG4gICAgICBudWxsICE9IFNldC5wcm90b3R5cGUgJiZcbiAgICAgIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIFNldC5wcm90b3R5cGUuY2xlYXIgJiZcbiAgICAgIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIFNldC5wcm90b3R5cGUuZm9yRWFjaCkgfHxcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIFwiUmVhY3QgZGVwZW5kcyBvbiBNYXAgYW5kIFNldCBidWlsdC1pbiB0eXBlcy4gTWFrZSBzdXJlIHRoYXQgeW91IGxvYWQgYSBwb2x5ZmlsbCBpbiBvbGRlciBicm93c2Vycy4gaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3JlYWN0LXBvbHlmaWxsc1wiXG4gICAgICApO1xuICAgIGV4cG9ydHMuX19ET01fSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfV0FSTl9VU0VSU19USEVZX0NBTk5PVF9VUEdSQURFID1cbiAgICAgIEludGVybmFscztcbiAgICBleHBvcnRzLmNyZWF0ZVBvcnRhbCA9IGZ1bmN0aW9uIChjaGlsZHJlbiwgY29udGFpbmVyKSB7XG4gICAgICB2YXIga2V5ID1cbiAgICAgICAgMiA8IGFyZ3VtZW50cy5sZW5ndGggJiYgdm9pZCAwICE9PSBhcmd1bWVudHNbMl0gPyBhcmd1bWVudHNbMl0gOiBudWxsO1xuICAgICAgaWYgKFxuICAgICAgICAhY29udGFpbmVyIHx8XG4gICAgICAgICgxICE9PSBjb250YWluZXIubm9kZVR5cGUgJiZcbiAgICAgICAgICA5ICE9PSBjb250YWluZXIubm9kZVR5cGUgJiZcbiAgICAgICAgICAxMSAhPT0gY29udGFpbmVyLm5vZGVUeXBlKVxuICAgICAgKVxuICAgICAgICB0aHJvdyBFcnJvcihcIlRhcmdldCBjb250YWluZXIgaXMgbm90IGEgRE9NIGVsZW1lbnQuXCIpO1xuICAgICAgcmV0dXJuIGNyZWF0ZVBvcnRhbCQxKGNoaWxkcmVuLCBjb250YWluZXIsIG51bGwsIGtleSk7XG4gICAgfTtcbiAgICBleHBvcnRzLmZsdXNoU3luYyA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgdmFyIHByZXZpb3VzVHJhbnNpdGlvbiA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlQsXG4gICAgICAgIHByZXZpb3VzVXBkYXRlUHJpb3JpdHkgPSBJbnRlcm5hbHMucDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICgoKFJlYWN0U2hhcmVkSW50ZXJuYWxzLlQgPSBudWxsKSwgKEludGVybmFscy5wID0gMiksIGZuKSlcbiAgICAgICAgICByZXR1cm4gZm4oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIChSZWFjdFNoYXJlZEludGVybmFscy5UID0gcHJldmlvdXNUcmFuc2l0aW9uKSxcbiAgICAgICAgICAoSW50ZXJuYWxzLnAgPSBwcmV2aW91c1VwZGF0ZVByaW9yaXR5KSxcbiAgICAgICAgICBJbnRlcm5hbHMuZC5mKCkgJiZcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIFwiZmx1c2hTeW5jIHdhcyBjYWxsZWQgZnJvbSBpbnNpZGUgYSBsaWZlY3ljbGUgbWV0aG9kLiBSZWFjdCBjYW5ub3QgZmx1c2ggd2hlbiBSZWFjdCBpcyBhbHJlYWR5IHJlbmRlcmluZy4gQ29uc2lkZXIgbW92aW5nIHRoaXMgY2FsbCB0byBhIHNjaGVkdWxlciB0YXNrIG9yIG1pY3JvIHRhc2suXCJcbiAgICAgICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcbiAgICBleHBvcnRzLnByZWNvbm5lY3QgPSBmdW5jdGlvbiAoaHJlZiwgb3B0aW9ucykge1xuICAgICAgXCJzdHJpbmdcIiA9PT0gdHlwZW9mIGhyZWYgJiYgaHJlZlxuICAgICAgICA/IG51bGwgIT0gb3B0aW9ucyAmJiBcIm9iamVjdFwiICE9PSB0eXBlb2Ygb3B0aW9uc1xuICAgICAgICAgID8gY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgXCJSZWFjdERPTS5wcmVjb25uZWN0KCk6IEV4cGVjdGVkIHRoZSBgb3B0aW9uc2AgYXJndW1lbnQgKHNlY29uZCkgdG8gYmUgYW4gb2JqZWN0IGJ1dCBlbmNvdW50ZXJlZCAlcyBpbnN0ZWFkLiBUaGUgb25seSBzdXBwb3J0ZWQgb3B0aW9uIGF0IHRoaXMgdGltZSBpcyBgY3Jvc3NPcmlnaW5gIHdoaWNoIGFjY2VwdHMgYSBzdHJpbmcuXCIsXG4gICAgICAgICAgICAgIGdldFZhbHVlRGVzY3JpcHRvckV4cGVjdGluZ0VudW1Gb3JXYXJuaW5nKG9wdGlvbnMpXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBudWxsICE9IG9wdGlvbnMgJiZcbiAgICAgICAgICAgIFwic3RyaW5nXCIgIT09IHR5cGVvZiBvcHRpb25zLmNyb3NzT3JpZ2luICYmXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICBcIlJlYWN0RE9NLnByZWNvbm5lY3QoKTogRXhwZWN0ZWQgdGhlIGBjcm9zc09yaWdpbmAgb3B0aW9uIChzZWNvbmQgYXJndW1lbnQpIHRvIGJlIGEgc3RyaW5nIGJ1dCBlbmNvdW50ZXJlZCAlcyBpbnN0ZWFkLiBUcnkgcmVtb3ZpbmcgdGhpcyBvcHRpb24gb3IgcGFzc2luZyBhIHN0cmluZyB2YWx1ZSBpbnN0ZWFkLlwiLFxuICAgICAgICAgICAgICBnZXRWYWx1ZURlc2NyaXB0b3JFeHBlY3RpbmdPYmplY3RGb3JXYXJuaW5nKG9wdGlvbnMuY3Jvc3NPcmlnaW4pXG4gICAgICAgICAgICApXG4gICAgICAgIDogY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIFwiUmVhY3RET00ucHJlY29ubmVjdCgpOiBFeHBlY3RlZCB0aGUgYGhyZWZgIGFyZ3VtZW50IChmaXJzdCkgdG8gYmUgYSBub24tZW1wdHkgc3RyaW5nIGJ1dCBlbmNvdW50ZXJlZCAlcyBpbnN0ZWFkLlwiLFxuICAgICAgICAgICAgZ2V0VmFsdWVEZXNjcmlwdG9yRXhwZWN0aW5nT2JqZWN0Rm9yV2FybmluZyhocmVmKVxuICAgICAgICAgICk7XG4gICAgICBcInN0cmluZ1wiID09PSB0eXBlb2YgaHJlZiAmJlxuICAgICAgICAob3B0aW9uc1xuICAgICAgICAgID8gKChvcHRpb25zID0gb3B0aW9ucy5jcm9zc09yaWdpbiksXG4gICAgICAgICAgICAob3B0aW9ucyA9XG4gICAgICAgICAgICAgIFwic3RyaW5nXCIgPT09IHR5cGVvZiBvcHRpb25zXG4gICAgICAgICAgICAgICAgPyBcInVzZS1jcmVkZW50aWFsc1wiID09PSBvcHRpb25zXG4gICAgICAgICAgICAgICAgICA/IG9wdGlvbnNcbiAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgIDogdm9pZCAwKSlcbiAgICAgICAgICA6IChvcHRpb25zID0gbnVsbCksXG4gICAgICAgIEludGVybmFscy5kLkMoaHJlZiwgb3B0aW9ucykpO1xuICAgIH07XG4gICAgZXhwb3J0cy5wcmVmZXRjaEROUyA9IGZ1bmN0aW9uIChocmVmKSB7XG4gICAgICBpZiAoXCJzdHJpbmdcIiAhPT0gdHlwZW9mIGhyZWYgfHwgIWhyZWYpXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgXCJSZWFjdERPTS5wcmVmZXRjaEROUygpOiBFeHBlY3RlZCB0aGUgYGhyZWZgIGFyZ3VtZW50IChmaXJzdCkgdG8gYmUgYSBub24tZW1wdHkgc3RyaW5nIGJ1dCBlbmNvdW50ZXJlZCAlcyBpbnN0ZWFkLlwiLFxuICAgICAgICAgIGdldFZhbHVlRGVzY3JpcHRvckV4cGVjdGluZ09iamVjdEZvcldhcm5pbmcoaHJlZilcbiAgICAgICAgKTtcbiAgICAgIGVsc2UgaWYgKDEgPCBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzWzFdO1xuICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2Ygb3B0aW9ucyAmJiBvcHRpb25zLmhhc093blByb3BlcnR5KFwiY3Jvc3NPcmlnaW5cIilcbiAgICAgICAgICA/IGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIFwiUmVhY3RET00ucHJlZmV0Y2hETlMoKTogRXhwZWN0ZWQgb25seSBvbmUgYXJndW1lbnQsIGBocmVmYCwgYnV0IGVuY291bnRlcmVkICVzIGFzIGEgc2Vjb25kIGFyZ3VtZW50IGluc3RlYWQuIFRoaXMgYXJndW1lbnQgaXMgcmVzZXJ2ZWQgZm9yIGZ1dHVyZSBvcHRpb25zIGFuZCBpcyBjdXJyZW50bHkgZGlzYWxsb3dlZC4gSXQgbG9va3MgbGlrZSB0aGUgeW91IGFyZSBhdHRlbXB0aW5nIHRvIHNldCBhIGNyb3NzT3JpZ2luIHByb3BlcnR5IGZvciB0aGlzIEROUyBsb29rdXAgaGludC4gQnJvd3NlcnMgZG8gbm90IHBlcmZvcm0gRE5TIHF1ZXJpZXMgdXNpbmcgQ09SUyBhbmQgc2V0dGluZyB0aGlzIGF0dHJpYnV0ZSBvbiB0aGUgcmVzb3VyY2UgaGludCBoYXMgbm8gZWZmZWN0LiBUcnkgY2FsbGluZyBSZWFjdERPTS5wcmVmZXRjaEROUygpIHdpdGgganVzdCBhIHNpbmdsZSBzdHJpbmcgYXJndW1lbnQsIGBocmVmYC5cIixcbiAgICAgICAgICAgICAgZ2V0VmFsdWVEZXNjcmlwdG9yRXhwZWN0aW5nRW51bUZvcldhcm5pbmcob3B0aW9ucylcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIFwiUmVhY3RET00ucHJlZmV0Y2hETlMoKTogRXhwZWN0ZWQgb25seSBvbmUgYXJndW1lbnQsIGBocmVmYCwgYnV0IGVuY291bnRlcmVkICVzIGFzIGEgc2Vjb25kIGFyZ3VtZW50IGluc3RlYWQuIFRoaXMgYXJndW1lbnQgaXMgcmVzZXJ2ZWQgZm9yIGZ1dHVyZSBvcHRpb25zIGFuZCBpcyBjdXJyZW50bHkgZGlzYWxsb3dlZC4gVHJ5IGNhbGxpbmcgUmVhY3RET00ucHJlZmV0Y2hETlMoKSB3aXRoIGp1c3QgYSBzaW5nbGUgc3RyaW5nIGFyZ3VtZW50LCBgaHJlZmAuXCIsXG4gICAgICAgICAgICAgIGdldFZhbHVlRGVzY3JpcHRvckV4cGVjdGluZ0VudW1Gb3JXYXJuaW5nKG9wdGlvbnMpXG4gICAgICAgICAgICApO1xuICAgICAgfVxuICAgICAgXCJzdHJpbmdcIiA9PT0gdHlwZW9mIGhyZWYgJiYgSW50ZXJuYWxzLmQuRChocmVmKTtcbiAgICB9O1xuICAgIGV4cG9ydHMucHJlaW5pdCA9IGZ1bmN0aW9uIChocmVmLCBvcHRpb25zKSB7XG4gICAgICBcInN0cmluZ1wiID09PSB0eXBlb2YgaHJlZiAmJiBocmVmXG4gICAgICAgID8gbnVsbCA9PSBvcHRpb25zIHx8IFwib2JqZWN0XCIgIT09IHR5cGVvZiBvcHRpb25zXG4gICAgICAgICAgPyBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICBcIlJlYWN0RE9NLnByZWluaXQoKTogRXhwZWN0ZWQgdGhlIGBvcHRpb25zYCBhcmd1bWVudCAoc2Vjb25kKSB0byBiZSBhbiBvYmplY3Qgd2l0aCBhbiBgYXNgIHByb3BlcnR5IGRlc2NyaWJpbmcgdGhlIHR5cGUgb2YgcmVzb3VyY2UgdG8gYmUgcHJlaW5pdGlhbGl6ZWQgYnV0IGVuY291bnRlcmVkICVzIGluc3RlYWQuXCIsXG4gICAgICAgICAgICAgIGdldFZhbHVlRGVzY3JpcHRvckV4cGVjdGluZ0VudW1Gb3JXYXJuaW5nKG9wdGlvbnMpXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBcInN0eWxlXCIgIT09IG9wdGlvbnMuYXMgJiZcbiAgICAgICAgICAgIFwic2NyaXB0XCIgIT09IG9wdGlvbnMuYXMgJiZcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICdSZWFjdERPTS5wcmVpbml0KCk6IEV4cGVjdGVkIHRoZSBgYXNgIHByb3BlcnR5IGluIHRoZSBgb3B0aW9uc2AgYXJndW1lbnQgKHNlY29uZCkgdG8gY29udGFpbiBhIHZhbGlkIHZhbHVlIGRlc2NyaWJpbmcgdGhlIHR5cGUgb2YgcmVzb3VyY2UgdG8gYmUgcHJlaW5pdGlhbGl6ZWQgYnV0IGVuY291bnRlcmVkICVzIGluc3RlYWQuIFZhbGlkIHZhbHVlcyBmb3IgYGFzYCBhcmUgXCJzdHlsZVwiIGFuZCBcInNjcmlwdFwiLicsXG4gICAgICAgICAgICAgIGdldFZhbHVlRGVzY3JpcHRvckV4cGVjdGluZ0VudW1Gb3JXYXJuaW5nKG9wdGlvbnMuYXMpXG4gICAgICAgICAgICApXG4gICAgICAgIDogY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIFwiUmVhY3RET00ucHJlaW5pdCgpOiBFeHBlY3RlZCB0aGUgYGhyZWZgIGFyZ3VtZW50IChmaXJzdCkgdG8gYmUgYSBub24tZW1wdHkgc3RyaW5nIGJ1dCBlbmNvdW50ZXJlZCAlcyBpbnN0ZWFkLlwiLFxuICAgICAgICAgICAgZ2V0VmFsdWVEZXNjcmlwdG9yRXhwZWN0aW5nT2JqZWN0Rm9yV2FybmluZyhocmVmKVxuICAgICAgICAgICk7XG4gICAgICBpZiAoXG4gICAgICAgIFwic3RyaW5nXCIgPT09IHR5cGVvZiBocmVmICYmXG4gICAgICAgIG9wdGlvbnMgJiZcbiAgICAgICAgXCJzdHJpbmdcIiA9PT0gdHlwZW9mIG9wdGlvbnMuYXNcbiAgICAgICkge1xuICAgICAgICB2YXIgYXMgPSBvcHRpb25zLmFzLFxuICAgICAgICAgIGNyb3NzT3JpZ2luID0gZ2V0Q3Jvc3NPcmlnaW5TdHJpbmdBcyhhcywgb3B0aW9ucy5jcm9zc09yaWdpbiksXG4gICAgICAgICAgaW50ZWdyaXR5ID1cbiAgICAgICAgICAgIFwic3RyaW5nXCIgPT09IHR5cGVvZiBvcHRpb25zLmludGVncml0eSA/IG9wdGlvbnMuaW50ZWdyaXR5IDogdm9pZCAwLFxuICAgICAgICAgIGZldGNoUHJpb3JpdHkgPVxuICAgICAgICAgICAgXCJzdHJpbmdcIiA9PT0gdHlwZW9mIG9wdGlvbnMuZmV0Y2hQcmlvcml0eVxuICAgICAgICAgICAgICA/IG9wdGlvbnMuZmV0Y2hQcmlvcml0eVxuICAgICAgICAgICAgICA6IHZvaWQgMDtcbiAgICAgICAgXCJzdHlsZVwiID09PSBhc1xuICAgICAgICAgID8gSW50ZXJuYWxzLmQuUyhcbiAgICAgICAgICAgICAgaHJlZixcbiAgICAgICAgICAgICAgXCJzdHJpbmdcIiA9PT0gdHlwZW9mIG9wdGlvbnMucHJlY2VkZW5jZVxuICAgICAgICAgICAgICAgID8gb3B0aW9ucy5wcmVjZWRlbmNlXG4gICAgICAgICAgICAgICAgOiB2b2lkIDAsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjcm9zc09yaWdpbjogY3Jvc3NPcmlnaW4sXG4gICAgICAgICAgICAgICAgaW50ZWdyaXR5OiBpbnRlZ3JpdHksXG4gICAgICAgICAgICAgICAgZmV0Y2hQcmlvcml0eTogZmV0Y2hQcmlvcml0eVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBcInNjcmlwdFwiID09PSBhcyAmJlxuICAgICAgICAgICAgSW50ZXJuYWxzLmQuWChocmVmLCB7XG4gICAgICAgICAgICAgIGNyb3NzT3JpZ2luOiBjcm9zc09yaWdpbixcbiAgICAgICAgICAgICAgaW50ZWdyaXR5OiBpbnRlZ3JpdHksXG4gICAgICAgICAgICAgIGZldGNoUHJpb3JpdHk6IGZldGNoUHJpb3JpdHksXG4gICAgICAgICAgICAgIG5vbmNlOiBcInN0cmluZ1wiID09PSB0eXBlb2Ygb3B0aW9ucy5ub25jZSA/IG9wdGlvbnMubm9uY2UgOiB2b2lkIDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgZXhwb3J0cy5wcmVpbml0TW9kdWxlID0gZnVuY3Rpb24gKGhyZWYsIG9wdGlvbnMpIHtcbiAgICAgIHZhciBlbmNvdW50ZXJlZCA9IFwiXCI7XG4gICAgICAoXCJzdHJpbmdcIiA9PT0gdHlwZW9mIGhyZWYgJiYgaHJlZikgfHxcbiAgICAgICAgKGVuY291bnRlcmVkICs9XG4gICAgICAgICAgXCIgVGhlIGBocmVmYCBhcmd1bWVudCBlbmNvdW50ZXJlZCB3YXMgXCIgK1xuICAgICAgICAgIGdldFZhbHVlRGVzY3JpcHRvckV4cGVjdGluZ09iamVjdEZvcldhcm5pbmcoaHJlZikgK1xuICAgICAgICAgIFwiLlwiKTtcbiAgICAgIHZvaWQgMCAhPT0gb3B0aW9ucyAmJiBcIm9iamVjdFwiICE9PSB0eXBlb2Ygb3B0aW9uc1xuICAgICAgICA/IChlbmNvdW50ZXJlZCArPVxuICAgICAgICAgICAgXCIgVGhlIGBvcHRpb25zYCBhcmd1bWVudCBlbmNvdW50ZXJlZCB3YXMgXCIgK1xuICAgICAgICAgICAgZ2V0VmFsdWVEZXNjcmlwdG9yRXhwZWN0aW5nT2JqZWN0Rm9yV2FybmluZyhvcHRpb25zKSArXG4gICAgICAgICAgICBcIi5cIilcbiAgICAgICAgOiBvcHRpb25zICYmXG4gICAgICAgICAgXCJhc1wiIGluIG9wdGlvbnMgJiZcbiAgICAgICAgICBcInNjcmlwdFwiICE9PSBvcHRpb25zLmFzICYmXG4gICAgICAgICAgKGVuY291bnRlcmVkICs9XG4gICAgICAgICAgICBcIiBUaGUgYGFzYCBvcHRpb24gZW5jb3VudGVyZWQgd2FzIFwiICtcbiAgICAgICAgICAgIGdldFZhbHVlRGVzY3JpcHRvckV4cGVjdGluZ0VudW1Gb3JXYXJuaW5nKG9wdGlvbnMuYXMpICtcbiAgICAgICAgICAgIFwiLlwiKTtcbiAgICAgIGlmIChlbmNvdW50ZXJlZClcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcIlJlYWN0RE9NLnByZWluaXRNb2R1bGUoKTogRXhwZWN0ZWQgdXAgdG8gdHdvIGFyZ3VtZW50cywgYSBub24tZW1wdHkgYGhyZWZgIHN0cmluZyBhbmQsIG9wdGlvbmFsbHksIGFuIGBvcHRpb25zYCBvYmplY3Qgd2l0aCBhIHZhbGlkIGBhc2AgcHJvcGVydHkuJXNcIixcbiAgICAgICAgICBlbmNvdW50ZXJlZFxuICAgICAgICApO1xuICAgICAgZWxzZVxuICAgICAgICBzd2l0Y2ggKFxuICAgICAgICAgICgoZW5jb3VudGVyZWQgPVxuICAgICAgICAgICAgb3B0aW9ucyAmJiBcInN0cmluZ1wiID09PSB0eXBlb2Ygb3B0aW9ucy5hcyA/IG9wdGlvbnMuYXMgOiBcInNjcmlwdFwiKSxcbiAgICAgICAgICBlbmNvdW50ZXJlZClcbiAgICAgICAgKSB7XG4gICAgICAgICAgY2FzZSBcInNjcmlwdFwiOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIChlbmNvdW50ZXJlZCA9XG4gICAgICAgICAgICAgIGdldFZhbHVlRGVzY3JpcHRvckV4cGVjdGluZ0VudW1Gb3JXYXJuaW5nKGVuY291bnRlcmVkKSksXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgJ1JlYWN0RE9NLnByZWluaXRNb2R1bGUoKTogQ3VycmVudGx5IHRoZSBvbmx5IHN1cHBvcnRlZCBcImFzXCIgdHlwZSBmb3IgdGhpcyBmdW5jdGlvbiBpcyBcInNjcmlwdFwiIGJ1dCByZWNlaXZlZCBcIiVzXCIgaW5zdGVhZC4gVGhpcyB3YXJuaW5nIHdhcyBnZW5lcmF0ZWQgZm9yIGBocmVmYCBcIiVzXCIuIEluIHRoZSBmdXR1cmUgb3RoZXIgbW9kdWxlIHR5cGVzIHdpbGwgYmUgc3VwcG9ydGVkLCBhbGlnbmluZyB3aXRoIHRoZSBpbXBvcnQtYXR0cmlidXRlcyBwcm9wb3NhbC4gTGVhcm4gbW9yZSBoZXJlOiAoaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtaW1wb3J0LWF0dHJpYnV0ZXMpJyxcbiAgICAgICAgICAgICAgICBlbmNvdW50ZXJlZCxcbiAgICAgICAgICAgICAgICBocmVmXG4gICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIGlmIChcInN0cmluZ1wiID09PSB0eXBlb2YgaHJlZilcbiAgICAgICAgaWYgKFwib2JqZWN0XCIgPT09IHR5cGVvZiBvcHRpb25zICYmIG51bGwgIT09IG9wdGlvbnMpIHtcbiAgICAgICAgICBpZiAobnVsbCA9PSBvcHRpb25zLmFzIHx8IFwic2NyaXB0XCIgPT09IG9wdGlvbnMuYXMpXG4gICAgICAgICAgICAoZW5jb3VudGVyZWQgPSBnZXRDcm9zc09yaWdpblN0cmluZ0FzKFxuICAgICAgICAgICAgICBvcHRpb25zLmFzLFxuICAgICAgICAgICAgICBvcHRpb25zLmNyb3NzT3JpZ2luXG4gICAgICAgICAgICApKSxcbiAgICAgICAgICAgICAgSW50ZXJuYWxzLmQuTShocmVmLCB7XG4gICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46IGVuY291bnRlcmVkLFxuICAgICAgICAgICAgICAgIGludGVncml0eTpcbiAgICAgICAgICAgICAgICAgIFwic3RyaW5nXCIgPT09IHR5cGVvZiBvcHRpb25zLmludGVncml0eVxuICAgICAgICAgICAgICAgICAgICA/IG9wdGlvbnMuaW50ZWdyaXR5XG4gICAgICAgICAgICAgICAgICAgIDogdm9pZCAwLFxuICAgICAgICAgICAgICAgIG5vbmNlOlxuICAgICAgICAgICAgICAgICAgXCJzdHJpbmdcIiA9PT0gdHlwZW9mIG9wdGlvbnMubm9uY2UgPyBvcHRpb25zLm5vbmNlIDogdm9pZCAwXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgbnVsbCA9PSBvcHRpb25zICYmIEludGVybmFscy5kLk0oaHJlZik7XG4gICAgfTtcbiAgICBleHBvcnRzLnByZWxvYWQgPSBmdW5jdGlvbiAoaHJlZiwgb3B0aW9ucykge1xuICAgICAgdmFyIGVuY291bnRlcmVkID0gXCJcIjtcbiAgICAgIChcInN0cmluZ1wiID09PSB0eXBlb2YgaHJlZiAmJiBocmVmKSB8fFxuICAgICAgICAoZW5jb3VudGVyZWQgKz1cbiAgICAgICAgICBcIiBUaGUgYGhyZWZgIGFyZ3VtZW50IGVuY291bnRlcmVkIHdhcyBcIiArXG4gICAgICAgICAgZ2V0VmFsdWVEZXNjcmlwdG9yRXhwZWN0aW5nT2JqZWN0Rm9yV2FybmluZyhocmVmKSArXG4gICAgICAgICAgXCIuXCIpO1xuICAgICAgbnVsbCA9PSBvcHRpb25zIHx8IFwib2JqZWN0XCIgIT09IHR5cGVvZiBvcHRpb25zXG4gICAgICAgID8gKGVuY291bnRlcmVkICs9XG4gICAgICAgICAgICBcIiBUaGUgYG9wdGlvbnNgIGFyZ3VtZW50IGVuY291bnRlcmVkIHdhcyBcIiArXG4gICAgICAgICAgICBnZXRWYWx1ZURlc2NyaXB0b3JFeHBlY3RpbmdPYmplY3RGb3JXYXJuaW5nKG9wdGlvbnMpICtcbiAgICAgICAgICAgIFwiLlwiKVxuICAgICAgICA6IChcInN0cmluZ1wiID09PSB0eXBlb2Ygb3B0aW9ucy5hcyAmJiBvcHRpb25zLmFzKSB8fFxuICAgICAgICAgIChlbmNvdW50ZXJlZCArPVxuICAgICAgICAgICAgXCIgVGhlIGBhc2Agb3B0aW9uIGVuY291bnRlcmVkIHdhcyBcIiArXG4gICAgICAgICAgICBnZXRWYWx1ZURlc2NyaXB0b3JFeHBlY3RpbmdPYmplY3RGb3JXYXJuaW5nKG9wdGlvbnMuYXMpICtcbiAgICAgICAgICAgIFwiLlwiKTtcbiAgICAgIGVuY291bnRlcmVkICYmXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgJ1JlYWN0RE9NLnByZWxvYWQoKTogRXhwZWN0ZWQgdHdvIGFyZ3VtZW50cywgYSBub24tZW1wdHkgYGhyZWZgIHN0cmluZyBhbmQgYW4gYG9wdGlvbnNgIG9iamVjdCB3aXRoIGFuIGBhc2AgcHJvcGVydHkgdmFsaWQgZm9yIGEgYDxsaW5rIHJlbD1cInByZWxvYWRcIiBhcz1cIi4uLlwiIC8+YCB0YWcuJXMnLFxuICAgICAgICAgIGVuY291bnRlcmVkXG4gICAgICAgICk7XG4gICAgICBpZiAoXG4gICAgICAgIFwic3RyaW5nXCIgPT09IHR5cGVvZiBocmVmICYmXG4gICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBvcHRpb25zICYmXG4gICAgICAgIG51bGwgIT09IG9wdGlvbnMgJiZcbiAgICAgICAgXCJzdHJpbmdcIiA9PT0gdHlwZW9mIG9wdGlvbnMuYXNcbiAgICAgICkge1xuICAgICAgICBlbmNvdW50ZXJlZCA9IG9wdGlvbnMuYXM7XG4gICAgICAgIHZhciBjcm9zc09yaWdpbiA9IGdldENyb3NzT3JpZ2luU3RyaW5nQXMoXG4gICAgICAgICAgZW5jb3VudGVyZWQsXG4gICAgICAgICAgb3B0aW9ucy5jcm9zc09yaWdpblxuICAgICAgICApO1xuICAgICAgICBJbnRlcm5hbHMuZC5MKGhyZWYsIGVuY291bnRlcmVkLCB7XG4gICAgICAgICAgY3Jvc3NPcmlnaW46IGNyb3NzT3JpZ2luLFxuICAgICAgICAgIGludGVncml0eTpcbiAgICAgICAgICAgIFwic3RyaW5nXCIgPT09IHR5cGVvZiBvcHRpb25zLmludGVncml0eSA/IG9wdGlvbnMuaW50ZWdyaXR5IDogdm9pZCAwLFxuICAgICAgICAgIG5vbmNlOiBcInN0cmluZ1wiID09PSB0eXBlb2Ygb3B0aW9ucy5ub25jZSA/IG9wdGlvbnMubm9uY2UgOiB2b2lkIDAsXG4gICAgICAgICAgdHlwZTogXCJzdHJpbmdcIiA9PT0gdHlwZW9mIG9wdGlvbnMudHlwZSA/IG9wdGlvbnMudHlwZSA6IHZvaWQgMCxcbiAgICAgICAgICBmZXRjaFByaW9yaXR5OlxuICAgICAgICAgICAgXCJzdHJpbmdcIiA9PT0gdHlwZW9mIG9wdGlvbnMuZmV0Y2hQcmlvcml0eVxuICAgICAgICAgICAgICA/IG9wdGlvbnMuZmV0Y2hQcmlvcml0eVxuICAgICAgICAgICAgICA6IHZvaWQgMCxcbiAgICAgICAgICByZWZlcnJlclBvbGljeTpcbiAgICAgICAgICAgIFwic3RyaW5nXCIgPT09IHR5cGVvZiBvcHRpb25zLnJlZmVycmVyUG9saWN5XG4gICAgICAgICAgICAgID8gb3B0aW9ucy5yZWZlcnJlclBvbGljeVxuICAgICAgICAgICAgICA6IHZvaWQgMCxcbiAgICAgICAgICBpbWFnZVNyY1NldDpcbiAgICAgICAgICAgIFwic3RyaW5nXCIgPT09IHR5cGVvZiBvcHRpb25zLmltYWdlU3JjU2V0XG4gICAgICAgICAgICAgID8gb3B0aW9ucy5pbWFnZVNyY1NldFxuICAgICAgICAgICAgICA6IHZvaWQgMCxcbiAgICAgICAgICBpbWFnZVNpemVzOlxuICAgICAgICAgICAgXCJzdHJpbmdcIiA9PT0gdHlwZW9mIG9wdGlvbnMuaW1hZ2VTaXplc1xuICAgICAgICAgICAgICA/IG9wdGlvbnMuaW1hZ2VTaXplc1xuICAgICAgICAgICAgICA6IHZvaWQgMCxcbiAgICAgICAgICBtZWRpYTogXCJzdHJpbmdcIiA9PT0gdHlwZW9mIG9wdGlvbnMubWVkaWEgPyBvcHRpb25zLm1lZGlhIDogdm9pZCAwXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgZXhwb3J0cy5wcmVsb2FkTW9kdWxlID0gZnVuY3Rpb24gKGhyZWYsIG9wdGlvbnMpIHtcbiAgICAgIHZhciBlbmNvdW50ZXJlZCA9IFwiXCI7XG4gICAgICAoXCJzdHJpbmdcIiA9PT0gdHlwZW9mIGhyZWYgJiYgaHJlZikgfHxcbiAgICAgICAgKGVuY291bnRlcmVkICs9XG4gICAgICAgICAgXCIgVGhlIGBocmVmYCBhcmd1bWVudCBlbmNvdW50ZXJlZCB3YXMgXCIgK1xuICAgICAgICAgIGdldFZhbHVlRGVzY3JpcHRvckV4cGVjdGluZ09iamVjdEZvcldhcm5pbmcoaHJlZikgK1xuICAgICAgICAgIFwiLlwiKTtcbiAgICAgIHZvaWQgMCAhPT0gb3B0aW9ucyAmJiBcIm9iamVjdFwiICE9PSB0eXBlb2Ygb3B0aW9uc1xuICAgICAgICA/IChlbmNvdW50ZXJlZCArPVxuICAgICAgICAgICAgXCIgVGhlIGBvcHRpb25zYCBhcmd1bWVudCBlbmNvdW50ZXJlZCB3YXMgXCIgK1xuICAgICAgICAgICAgZ2V0VmFsdWVEZXNjcmlwdG9yRXhwZWN0aW5nT2JqZWN0Rm9yV2FybmluZyhvcHRpb25zKSArXG4gICAgICAgICAgICBcIi5cIilcbiAgICAgICAgOiBvcHRpb25zICYmXG4gICAgICAgICAgXCJhc1wiIGluIG9wdGlvbnMgJiZcbiAgICAgICAgICBcInN0cmluZ1wiICE9PSB0eXBlb2Ygb3B0aW9ucy5hcyAmJlxuICAgICAgICAgIChlbmNvdW50ZXJlZCArPVxuICAgICAgICAgICAgXCIgVGhlIGBhc2Agb3B0aW9uIGVuY291bnRlcmVkIHdhcyBcIiArXG4gICAgICAgICAgICBnZXRWYWx1ZURlc2NyaXB0b3JFeHBlY3RpbmdPYmplY3RGb3JXYXJuaW5nKG9wdGlvbnMuYXMpICtcbiAgICAgICAgICAgIFwiLlwiKTtcbiAgICAgIGVuY291bnRlcmVkICYmXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgJ1JlYWN0RE9NLnByZWxvYWRNb2R1bGUoKTogRXhwZWN0ZWQgdHdvIGFyZ3VtZW50cywgYSBub24tZW1wdHkgYGhyZWZgIHN0cmluZyBhbmQsIG9wdGlvbmFsbHksIGFuIGBvcHRpb25zYCBvYmplY3Qgd2l0aCBhbiBgYXNgIHByb3BlcnR5IHZhbGlkIGZvciBhIGA8bGluayByZWw9XCJtb2R1bGVwcmVsb2FkXCIgYXM9XCIuLi5cIiAvPmAgdGFnLiVzJyxcbiAgICAgICAgICBlbmNvdW50ZXJlZFxuICAgICAgICApO1xuICAgICAgXCJzdHJpbmdcIiA9PT0gdHlwZW9mIGhyZWYgJiZcbiAgICAgICAgKG9wdGlvbnNcbiAgICAgICAgICA/ICgoZW5jb3VudGVyZWQgPSBnZXRDcm9zc09yaWdpblN0cmluZ0FzKFxuICAgICAgICAgICAgICBvcHRpb25zLmFzLFxuICAgICAgICAgICAgICBvcHRpb25zLmNyb3NzT3JpZ2luXG4gICAgICAgICAgICApKSxcbiAgICAgICAgICAgIEludGVybmFscy5kLm0oaHJlZiwge1xuICAgICAgICAgICAgICBhczpcbiAgICAgICAgICAgICAgICBcInN0cmluZ1wiID09PSB0eXBlb2Ygb3B0aW9ucy5hcyAmJiBcInNjcmlwdFwiICE9PSBvcHRpb25zLmFzXG4gICAgICAgICAgICAgICAgICA/IG9wdGlvbnMuYXNcbiAgICAgICAgICAgICAgICAgIDogdm9pZCAwLFxuICAgICAgICAgICAgICBjcm9zc09yaWdpbjogZW5jb3VudGVyZWQsXG4gICAgICAgICAgICAgIGludGVncml0eTpcbiAgICAgICAgICAgICAgICBcInN0cmluZ1wiID09PSB0eXBlb2Ygb3B0aW9ucy5pbnRlZ3JpdHlcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5pbnRlZ3JpdHlcbiAgICAgICAgICAgICAgICAgIDogdm9pZCAwXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICA6IEludGVybmFscy5kLm0oaHJlZikpO1xuICAgIH07XG4gICAgZXhwb3J0cy5yZXF1ZXN0Rm9ybVJlc2V0ID0gZnVuY3Rpb24gKGZvcm0pIHtcbiAgICAgIEludGVybmFscy5kLnIoZm9ybSk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzID0gZnVuY3Rpb24gKGZuLCBhKSB7XG4gICAgICByZXR1cm4gZm4oYSk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZUZvcm1TdGF0ZSA9IGZ1bmN0aW9uIChhY3Rpb24sIGluaXRpYWxTdGF0ZSwgcGVybWFsaW5rKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VGb3JtU3RhdGUoYWN0aW9uLCBpbml0aWFsU3RhdGUsIHBlcm1hbGluayk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZUZvcm1TdGF0dXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VIb3N0VHJhbnNpdGlvblN0YXR1cygpO1xuICAgIH07XG4gICAgZXhwb3J0cy52ZXJzaW9uID0gXCIxOS4xLjBcIjtcbiAgICBcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICYmXG4gICAgICBcImZ1bmN0aW9uXCIgPT09XG4gICAgICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AgJiZcbiAgICAgIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcChFcnJvcigpKTtcbiAgfSkoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY2hlY2tEQ0UoKSB7XG4gIC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbiAgaWYgKFxuICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gPT09ICd1bmRlZmluZWQnIHx8XG4gICAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5jaGVja0RDRSAhPT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBUaGlzIGJyYW5jaCBpcyB1bnJlYWNoYWJsZSBiZWNhdXNlIHRoaXMgZnVuY3Rpb24gaXMgb25seSBjYWxsZWRcbiAgICAvLyBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGNvbmRpdGlvbiBpcyB0cnVlIG9ubHkgaW4gZGV2ZWxvcG1lbnQuXG4gICAgLy8gVGhlcmVmb3JlIGlmIHRoZSBicmFuY2ggaXMgc3RpbGwgaGVyZSwgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdhc24ndFxuICAgIC8vIHByb3Blcmx5IGFwcGxpZWQuXG4gICAgLy8gRG9uJ3QgY2hhbmdlIHRoZSBtZXNzYWdlLiBSZWFjdCBEZXZUb29scyByZWxpZXMgb24gaXQuIEFsc28gbWFrZSBzdXJlXG4gICAgLy8gdGhpcyBtZXNzYWdlIGRvZXNuJ3Qgb2NjdXIgZWxzZXdoZXJlIGluIHRoaXMgZnVuY3Rpb24sIG9yIGl0IHdpbGwgY2F1c2VcbiAgICAvLyBhIGZhbHNlIHBvc2l0aXZlLlxuICAgIHRocm93IG5ldyBFcnJvcignXl9eJyk7XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBWZXJpZnkgdGhhdCB0aGUgY29kZSBhYm92ZSBoYXMgYmVlbiBkZWFkIGNvZGUgZWxpbWluYXRlZCAoRENFJ2QpLlxuICAgIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5jaGVja0RDRShjaGVja0RDRSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIERldlRvb2xzIHNob3VsZG4ndCBjcmFzaCBSZWFjdCwgbm8gbWF0dGVyIHdoYXQuXG4gICAgLy8gV2Ugc2hvdWxkIHN0aWxsIHJlcG9ydCBpbiBjYXNlIHdlIGJyZWFrIHRoaXMgY29kZS5cbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgLy8gRENFIGNoZWNrIHNob3VsZCBoYXBwZW4gYmVmb3JlIFJlYWN0RE9NIGJ1bmRsZSBleGVjdXRlcyBzbyB0aGF0XG4gIC8vIERldlRvb2xzIGNhbiByZXBvcnQgYmFkIG1pbmlmaWNhdGlvbiBkdXJpbmcgaW5qZWN0aW9uLlxuICBjaGVja0RDRSgpO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWRvbS5wcm9kdWN0aW9uLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWRvbS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIE1ldGEgUGxhdGZvcm1zLCBJbmMuIGFuZCBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIFwiJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXNcIixcbiAgICAgICAgICAgIGluZm9bMF0sXG4gICAgICAgICAgICBpbmZvWzFdXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgICAgaWYgKG51bGwgPT09IG1heWJlSXRlcmFibGUgfHwgXCJvYmplY3RcIiAhPT0gdHlwZW9mIG1heWJlSXRlcmFibGUpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgbWF5YmVJdGVyYWJsZSA9XG4gICAgICAgIChNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdKSB8fFxuICAgICAgICBtYXliZUl0ZXJhYmxlW1wiQEBpdGVyYXRvclwiXTtcbiAgICAgIHJldHVybiBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBtYXliZUl0ZXJhYmxlID8gbWF5YmVJdGVyYWJsZSA6IG51bGw7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gICAgICBwdWJsaWNJbnN0YW5jZSA9XG4gICAgICAgICgocHVibGljSW5zdGFuY2UgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcikgJiZcbiAgICAgICAgICAocHVibGljSW5zdGFuY2UuZGlzcGxheU5hbWUgfHwgcHVibGljSW5zdGFuY2UubmFtZSkpIHx8XG4gICAgICAgIFwiUmVhY3RDbGFzc1wiO1xuICAgICAgdmFyIHdhcm5pbmdLZXkgPSBwdWJsaWNJbnN0YW5jZSArIFwiLlwiICsgY2FsbGVyTmFtZTtcbiAgICAgIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSB8fFxuICAgICAgICAoY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFRoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uIEluc3RlYWQsIGFzc2lnbiB0byBgdGhpcy5zdGF0ZWAgZGlyZWN0bHkgb3IgZGVmaW5lIGEgYHN0YXRlID0ge307YCBjbGFzcyBwcm9wZXJ0eSB3aXRoIHRoZSBkZXNpcmVkIHN0YXRlIGluIHRoZSAlcyBjb21wb25lbnQuXCIsXG4gICAgICAgICAgY2FsbGVyTmFtZSxcbiAgICAgICAgICBwdWJsaWNJbnN0YW5jZVxuICAgICAgICApLFxuICAgICAgICAoZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gITApKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gICAgICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG4gICAgZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICAgICAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gXCJcIiArIHZhbHVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja0tleVN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpO1xuICAgICAgICB2YXIgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0ID0gITE7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdCA9ICEwO1xuICAgICAgfVxuICAgICAgaWYgKEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdCkge1xuICAgICAgICBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQgPSBjb25zb2xlO1xuICAgICAgICB2YXIgSlNDb21waWxlcl90ZW1wX2NvbnN0ID0gSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0LmVycm9yO1xuICAgICAgICB2YXIgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0JGpzY29tcCQwID1cbiAgICAgICAgICAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgU3ltYm9sICYmXG4gICAgICAgICAgICBTeW1ib2wudG9TdHJpbmdUYWcgJiZcbiAgICAgICAgICAgIHZhbHVlW1N5bWJvbC50b1N0cmluZ1RhZ10pIHx8XG4gICAgICAgICAgdmFsdWUuY29uc3RydWN0b3IubmFtZSB8fFxuICAgICAgICAgIFwiT2JqZWN0XCI7XG4gICAgICAgIEpTQ29tcGlsZXJfdGVtcF9jb25zdC5jYWxsKFxuICAgICAgICAgIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdCxcbiAgICAgICAgICBcIlRoZSBwcm92aWRlZCBrZXkgaXMgYW4gdW5zdXBwb3J0ZWQgdHlwZSAlcy4gVGhpcyB2YWx1ZSBtdXN0IGJlIGNvZXJjZWQgdG8gYSBzdHJpbmcgYmVmb3JlIHVzaW5nIGl0IGhlcmUuXCIsXG4gICAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0JGpzY29tcCQwXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSkge1xuICAgICAgaWYgKG51bGwgPT0gdHlwZSkgcmV0dXJuIG51bGw7XG4gICAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgdHlwZSlcbiAgICAgICAgcmV0dXJuIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NMSUVOVF9SRUZFUkVOQ0VcbiAgICAgICAgICA/IG51bGxcbiAgICAgICAgICA6IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gICAgICBpZiAoXCJzdHJpbmdcIiA9PT0gdHlwZW9mIHR5cGUpIHJldHVybiB0eXBlO1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICByZXR1cm4gXCJGcmFnbWVudFwiO1xuICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgcmV0dXJuIFwiUHJvZmlsZXJcIjtcbiAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIHJldHVybiBcIlN0cmljdE1vZGVcIjtcbiAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgIHJldHVybiBcIlN1c3BlbnNlXCI7XG4gICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgICAgIHJldHVybiBcIlN1c3BlbnNlTGlzdFwiO1xuICAgICAgICBjYXNlIFJFQUNUX0FDVElWSVRZX1RZUEU6XG4gICAgICAgICAgcmV0dXJuIFwiQWN0aXZpdHlcIjtcbiAgICAgIH1cbiAgICAgIGlmIChcIm9iamVjdFwiID09PSB0eXBlb2YgdHlwZSlcbiAgICAgICAgc3dpdGNoIChcbiAgICAgICAgICAoXCJudW1iZXJcIiA9PT0gdHlwZW9mIHR5cGUudGFnICYmXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICBcIlJlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSgpLiBUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuXCJcbiAgICAgICAgICAgICksXG4gICAgICAgICAgdHlwZS4kJHR5cGVvZilcbiAgICAgICAgKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiBcIlBvcnRhbFwiO1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuICh0eXBlLmRpc3BsYXlOYW1lIHx8IFwiQ29udGV4dFwiKSArIFwiLlByb3ZpZGVyXCI7XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05TVU1FUl9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuICh0eXBlLl9jb250ZXh0LmRpc3BsYXlOYW1lIHx8IFwiQ29udGV4dFwiKSArIFwiLkNvbnN1bWVyXCI7XG4gICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgdmFyIGlubmVyVHlwZSA9IHR5cGUucmVuZGVyO1xuICAgICAgICAgICAgdHlwZSA9IHR5cGUuZGlzcGxheU5hbWU7XG4gICAgICAgICAgICB0eXBlIHx8XG4gICAgICAgICAgICAgICgodHlwZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCBcIlwiKSxcbiAgICAgICAgICAgICAgKHR5cGUgPSBcIlwiICE9PSB0eXBlID8gXCJGb3J3YXJkUmVmKFwiICsgdHlwZSArIFwiKVwiIDogXCJGb3J3YXJkUmVmXCIpKTtcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgKGlubmVyVHlwZSA9IHR5cGUuZGlzcGxheU5hbWUgfHwgbnVsbCksXG4gICAgICAgICAgICAgIG51bGwgIT09IGlubmVyVHlwZVxuICAgICAgICAgICAgICAgID8gaW5uZXJUeXBlXG4gICAgICAgICAgICAgICAgOiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCBcIk1lbW9cIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgIGlubmVyVHlwZSA9IHR5cGUuX3BheWxvYWQ7XG4gICAgICAgICAgICB0eXBlID0gdHlwZS5faW5pdDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZShpbm5lclR5cGUpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRUYXNrTmFtZSh0eXBlKSB7XG4gICAgICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkgcmV0dXJuIFwiPD5cIjtcbiAgICAgIGlmIChcbiAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIHR5cGUgJiZcbiAgICAgICAgbnVsbCAhPT0gdHlwZSAmJlxuICAgICAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEVcbiAgICAgIClcbiAgICAgICAgcmV0dXJuIFwiPC4uLj5cIjtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgICByZXR1cm4gbmFtZSA/IFwiPFwiICsgbmFtZSArIFwiPlwiIDogXCI8Li4uPlwiO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICByZXR1cm4gXCI8Li4uPlwiO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRPd25lcigpIHtcbiAgICAgIHZhciBkaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuQTtcbiAgICAgIHJldHVybiBudWxsID09PSBkaXNwYXRjaGVyID8gbnVsbCA6IGRpc3BhdGNoZXIuZ2V0T3duZXIoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gVW5rbm93bk93bmVyKCkge1xuICAgICAgcmV0dXJuIEVycm9yKFwicmVhY3Qtc3RhY2stdG9wLWZyYW1lXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgXCJrZXlcIikpIHtcbiAgICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCBcImtleVwiKS5nZXQ7XG4gICAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSByZXR1cm4gITE7XG4gICAgICB9XG4gICAgICByZXR1cm4gdm9pZCAwICE9PSBjb25maWcua2V5O1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgICAgIGZ1bmN0aW9uIHdhcm5BYm91dEFjY2Vzc2luZ0tleSgpIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gfHxcbiAgICAgICAgICAoKHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gITApLFxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBcIiVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0IGluIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgdmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCBwcm9wLiAoaHR0cHM6Ly9yZWFjdC5kZXYvbGluay9zcGVjaWFsLXByb3BzKVwiLFxuICAgICAgICAgICAgZGlzcGxheU5hbWVcbiAgICAgICAgICApKTtcbiAgICAgIH1cbiAgICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9ICEwO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCBcImtleVwiLCB7XG4gICAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZWxlbWVudFJlZkdldHRlcldpdGhEZXByZWNhdGlvbldhcm5pbmcoKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0aGlzLnR5cGUpO1xuICAgICAgZGlkV2FybkFib3V0RWxlbWVudFJlZltjb21wb25lbnROYW1lXSB8fFxuICAgICAgICAoKGRpZFdhcm5BYm91dEVsZW1lbnRSZWZbY29tcG9uZW50TmFtZV0gPSAhMCksXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgXCJBY2Nlc3NpbmcgZWxlbWVudC5yZWYgd2FzIHJlbW92ZWQgaW4gUmVhY3QgMTkuIHJlZiBpcyBub3cgYSByZWd1bGFyIHByb3AuIEl0IHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBKU1ggRWxlbWVudCB0eXBlIGluIGEgZnV0dXJlIHJlbGVhc2UuXCJcbiAgICAgICAgKSk7XG4gICAgICBjb21wb25lbnROYW1lID0gdGhpcy5wcm9wcy5yZWY7XG4gICAgICByZXR1cm4gdm9pZCAwICE9PSBjb21wb25lbnROYW1lID8gY29tcG9uZW50TmFtZSA6IG51bGw7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFJlYWN0RWxlbWVudChcbiAgICAgIHR5cGUsXG4gICAgICBrZXksXG4gICAgICBzZWxmLFxuICAgICAgc291cmNlLFxuICAgICAgb3duZXIsXG4gICAgICBwcm9wcyxcbiAgICAgIGRlYnVnU3RhY2ssXG4gICAgICBkZWJ1Z1Rhc2tcbiAgICApIHtcbiAgICAgIHNlbGYgPSBwcm9wcy5yZWY7XG4gICAgICB0eXBlID0ge1xuICAgICAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgcHJvcHM6IHByb3BzLFxuICAgICAgICBfb3duZXI6IG93bmVyXG4gICAgICB9O1xuICAgICAgbnVsbCAhPT0gKHZvaWQgMCAhPT0gc2VsZiA/IHNlbGYgOiBudWxsKVxuICAgICAgICA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0eXBlLCBcInJlZlwiLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgICAgICAgIGdldDogZWxlbWVudFJlZkdldHRlcldpdGhEZXByZWNhdGlvbldhcm5pbmdcbiAgICAgICAgICB9KVxuICAgICAgICA6IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0eXBlLCBcInJlZlwiLCB7IGVudW1lcmFibGU6ICExLCB2YWx1ZTogbnVsbCB9KTtcbiAgICAgIHR5cGUuX3N0b3JlID0ge307XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodHlwZS5fc3RvcmUsIFwidmFsaWRhdGVkXCIsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMSxcbiAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgIHdyaXRhYmxlOiAhMCxcbiAgICAgICAgdmFsdWU6IDBcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHR5cGUsIFwiX2RlYnVnSW5mb1wiLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITEsXG4gICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICB3cml0YWJsZTogITAsXG4gICAgICAgIHZhbHVlOiBudWxsXG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0eXBlLCBcIl9kZWJ1Z1N0YWNrXCIsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMSxcbiAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgIHdyaXRhYmxlOiAhMCxcbiAgICAgICAgdmFsdWU6IGRlYnVnU3RhY2tcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHR5cGUsIFwiX2RlYnVnVGFza1wiLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITEsXG4gICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICB3cml0YWJsZTogITAsXG4gICAgICAgIHZhbHVlOiBkZWJ1Z1Rhc2tcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmZyZWV6ZSAmJiAoT2JqZWN0LmZyZWV6ZSh0eXBlLnByb3BzKSwgT2JqZWN0LmZyZWV6ZSh0eXBlKSk7XG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICAgICAgbmV3S2V5ID0gUmVhY3RFbGVtZW50KFxuICAgICAgICBvbGRFbGVtZW50LnR5cGUsXG4gICAgICAgIG5ld0tleSxcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIG9sZEVsZW1lbnQuX293bmVyLFxuICAgICAgICBvbGRFbGVtZW50LnByb3BzLFxuICAgICAgICBvbGRFbGVtZW50Ll9kZWJ1Z1N0YWNrLFxuICAgICAgICBvbGRFbGVtZW50Ll9kZWJ1Z1Rhc2tcbiAgICAgICk7XG4gICAgICBvbGRFbGVtZW50Ll9zdG9yZSAmJlxuICAgICAgICAobmV3S2V5Ll9zdG9yZS52YWxpZGF0ZWQgPSBvbGRFbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQpO1xuICAgICAgcmV0dXJuIG5ld0tleTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2Ygb2JqZWN0ICYmXG4gICAgICAgIG51bGwgIT09IG9iamVjdCAmJlxuICAgICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRVxuICAgICAgKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICAgICAgdmFyIGVzY2FwZXJMb29rdXAgPSB7IFwiPVwiOiBcIj0wXCIsIFwiOlwiOiBcIj0yXCIgfTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIFwiJFwiICtcbiAgICAgICAga2V5LnJlcGxhY2UoL1s9Ol0vZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0RWxlbWVudEtleShlbGVtZW50LCBpbmRleCkge1xuICAgICAgcmV0dXJuIFwib2JqZWN0XCIgPT09IHR5cGVvZiBlbGVtZW50ICYmXG4gICAgICAgIG51bGwgIT09IGVsZW1lbnQgJiZcbiAgICAgICAgbnVsbCAhPSBlbGVtZW50LmtleVxuICAgICAgICA/IChjaGVja0tleVN0cmluZ0NvZXJjaW9uKGVsZW1lbnQua2V5KSwgZXNjYXBlKFwiXCIgKyBlbGVtZW50LmtleSkpXG4gICAgICAgIDogaW5kZXgudG9TdHJpbmcoMzYpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBub29wJDEoKSB7fVxuICAgIGZ1bmN0aW9uIHJlc29sdmVUaGVuYWJsZSh0aGVuYWJsZSkge1xuICAgICAgc3dpdGNoICh0aGVuYWJsZS5zdGF0dXMpIHtcbiAgICAgICAgY2FzZSBcImZ1bGZpbGxlZFwiOlxuICAgICAgICAgIHJldHVybiB0aGVuYWJsZS52YWx1ZTtcbiAgICAgICAgY2FzZSBcInJlamVjdGVkXCI6XG4gICAgICAgICAgdGhyb3cgdGhlbmFibGUucmVhc29uO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHN3aXRjaCAoXG4gICAgICAgICAgICAoXCJzdHJpbmdcIiA9PT0gdHlwZW9mIHRoZW5hYmxlLnN0YXR1c1xuICAgICAgICAgICAgICA/IHRoZW5hYmxlLnRoZW4obm9vcCQxLCBub29wJDEpXG4gICAgICAgICAgICAgIDogKCh0aGVuYWJsZS5zdGF0dXMgPSBcInBlbmRpbmdcIiksXG4gICAgICAgICAgICAgICAgdGhlbmFibGUudGhlbihcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChmdWxmaWxsZWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBcInBlbmRpbmdcIiA9PT0gdGhlbmFibGUuc3RhdHVzICYmXG4gICAgICAgICAgICAgICAgICAgICAgKCh0aGVuYWJsZS5zdGF0dXMgPSBcImZ1bGZpbGxlZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAodGhlbmFibGUudmFsdWUgPSBmdWxmaWxsZWRWYWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBcInBlbmRpbmdcIiA9PT0gdGhlbmFibGUuc3RhdHVzICYmXG4gICAgICAgICAgICAgICAgICAgICAgKCh0aGVuYWJsZS5zdGF0dXMgPSBcInJlamVjdGVkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICh0aGVuYWJsZS5yZWFzb24gPSBlcnJvcikpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICkpLFxuICAgICAgICAgICAgdGhlbmFibGUuc3RhdHVzKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY2FzZSBcImZ1bGZpbGxlZFwiOlxuICAgICAgICAgICAgICByZXR1cm4gdGhlbmFibGUudmFsdWU7XG4gICAgICAgICAgICBjYXNlIFwicmVqZWN0ZWRcIjpcbiAgICAgICAgICAgICAgdGhyb3cgdGhlbmFibGUucmVhc29uO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRocm93IHRoZW5hYmxlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuYW1lU29GYXIsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcbiAgICAgIGlmIChcInVuZGVmaW5lZFwiID09PSB0eXBlIHx8IFwiYm9vbGVhblwiID09PSB0eXBlKSBjaGlsZHJlbiA9IG51bGw7XG4gICAgICB2YXIgaW52b2tlQ2FsbGJhY2sgPSAhMTtcbiAgICAgIGlmIChudWxsID09PSBjaGlsZHJlbikgaW52b2tlQ2FsbGJhY2sgPSAhMDtcbiAgICAgIGVsc2VcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBcImJpZ2ludFwiOlxuICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICBpbnZva2VDYWxsYmFjayA9ICEwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgICAgICAgc3dpdGNoIChjaGlsZHJlbi4kJHR5cGVvZikge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgICAgICBpbnZva2VDYWxsYmFjayA9ICEwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgKGludm9rZUNhbGxiYWNrID0gY2hpbGRyZW4uX2luaXQpLFxuICAgICAgICAgICAgICAgICAgbWFwSW50b0FycmF5KFxuICAgICAgICAgICAgICAgICAgICBpbnZva2VDYWxsYmFjayhjaGlsZHJlbi5fcGF5bG9hZCksXG4gICAgICAgICAgICAgICAgICAgIGFycmF5LFxuICAgICAgICAgICAgICAgICAgICBlc2NhcGVkUHJlZml4LFxuICAgICAgICAgICAgICAgICAgICBuYW1lU29GYXIsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gY2hpbGRyZW47XG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2soaW52b2tlQ2FsbGJhY2spO1xuICAgICAgICB2YXIgY2hpbGRLZXkgPVxuICAgICAgICAgIFwiXCIgPT09IG5hbWVTb0ZhciA/IFwiLlwiICsgZ2V0RWxlbWVudEtleShpbnZva2VDYWxsYmFjaywgMCkgOiBuYW1lU29GYXI7XG4gICAgICAgIGlzQXJyYXlJbXBsKGNhbGxiYWNrKVxuICAgICAgICAgID8gKChlc2NhcGVkUHJlZml4ID0gXCJcIiksXG4gICAgICAgICAgICBudWxsICE9IGNoaWxkS2V5ICYmXG4gICAgICAgICAgICAgIChlc2NhcGVkUHJlZml4ID1cbiAgICAgICAgICAgICAgICBjaGlsZEtleS5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCBcIiQmL1wiKSArIFwiL1wiKSxcbiAgICAgICAgICAgIG1hcEludG9BcnJheShjYWxsYmFjaywgYXJyYXksIGVzY2FwZWRQcmVmaXgsIFwiXCIsIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgOiBudWxsICE9IGNhbGxiYWNrICYmXG4gICAgICAgICAgICAoaXNWYWxpZEVsZW1lbnQoY2FsbGJhY2spICYmXG4gICAgICAgICAgICAgIChudWxsICE9IGNhbGxiYWNrLmtleSAmJlxuICAgICAgICAgICAgICAgICgoaW52b2tlQ2FsbGJhY2sgJiYgaW52b2tlQ2FsbGJhY2sua2V5ID09PSBjYWxsYmFjay5rZXkpIHx8XG4gICAgICAgICAgICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNhbGxiYWNrLmtleSkpLFxuICAgICAgICAgICAgICAoZXNjYXBlZFByZWZpeCA9IGNsb25lQW5kUmVwbGFjZUtleShcbiAgICAgICAgICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgICAgICAgICBlc2NhcGVkUHJlZml4ICtcbiAgICAgICAgICAgICAgICAgIChudWxsID09IGNhbGxiYWNrLmtleSB8fFxuICAgICAgICAgICAgICAgICAgKGludm9rZUNhbGxiYWNrICYmIGludm9rZUNhbGxiYWNrLmtleSA9PT0gY2FsbGJhY2sua2V5KVxuICAgICAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgOiAoXCJcIiArIGNhbGxiYWNrLmtleSkucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIkJi9cIlxuICAgICAgICAgICAgICAgICAgICAgICkgKyBcIi9cIikgK1xuICAgICAgICAgICAgICAgICAgY2hpbGRLZXlcbiAgICAgICAgICAgICAgKSksXG4gICAgICAgICAgICAgIFwiXCIgIT09IG5hbWVTb0ZhciAmJlxuICAgICAgICAgICAgICAgIG51bGwgIT0gaW52b2tlQ2FsbGJhY2sgJiZcbiAgICAgICAgICAgICAgICBpc1ZhbGlkRWxlbWVudChpbnZva2VDYWxsYmFjaykgJiZcbiAgICAgICAgICAgICAgICBudWxsID09IGludm9rZUNhbGxiYWNrLmtleSAmJlxuICAgICAgICAgICAgICAgIGludm9rZUNhbGxiYWNrLl9zdG9yZSAmJlxuICAgICAgICAgICAgICAgICFpbnZva2VDYWxsYmFjay5fc3RvcmUudmFsaWRhdGVkICYmXG4gICAgICAgICAgICAgICAgKGVzY2FwZWRQcmVmaXguX3N0b3JlLnZhbGlkYXRlZCA9IDIpLFxuICAgICAgICAgICAgICAoY2FsbGJhY2sgPSBlc2NhcGVkUHJlZml4KSksXG4gICAgICAgICAgICBhcnJheS5wdXNoKGNhbGxiYWNrKSk7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgaW52b2tlQ2FsbGJhY2sgPSAwO1xuICAgICAgY2hpbGRLZXkgPSBcIlwiID09PSBuYW1lU29GYXIgPyBcIi5cIiA6IG5hbWVTb0ZhciArIFwiOlwiO1xuICAgICAgaWYgKGlzQXJyYXlJbXBsKGNoaWxkcmVuKSlcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKylcbiAgICAgICAgICAobmFtZVNvRmFyID0gY2hpbGRyZW5baV0pLFxuICAgICAgICAgICAgKHR5cGUgPSBjaGlsZEtleSArIGdldEVsZW1lbnRLZXkobmFtZVNvRmFyLCBpKSksXG4gICAgICAgICAgICAoaW52b2tlQ2FsbGJhY2sgKz0gbWFwSW50b0FycmF5KFxuICAgICAgICAgICAgICBuYW1lU29GYXIsXG4gICAgICAgICAgICAgIGFycmF5LFxuICAgICAgICAgICAgICBlc2NhcGVkUHJlZml4LFxuICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICBjYWxsYmFja1xuICAgICAgICAgICAgKSk7XG4gICAgICBlbHNlIGlmICgoKGkgPSBnZXRJdGVyYXRvckZuKGNoaWxkcmVuKSksIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGkpKVxuICAgICAgICBmb3IgKFxuICAgICAgICAgIGkgPT09IGNoaWxkcmVuLmVudHJpZXMgJiZcbiAgICAgICAgICAgIChkaWRXYXJuQWJvdXRNYXBzIHx8XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBcIlVzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgbm90IHN1cHBvcnRlZC4gVXNlIGFuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC5cIlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgKGRpZFdhcm5BYm91dE1hcHMgPSAhMCkpLFxuICAgICAgICAgICAgY2hpbGRyZW4gPSBpLmNhbGwoY2hpbGRyZW4pLFxuICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgIShuYW1lU29GYXIgPSBjaGlsZHJlbi5uZXh0KCkpLmRvbmU7XG5cbiAgICAgICAgKVxuICAgICAgICAgIChuYW1lU29GYXIgPSBuYW1lU29GYXIudmFsdWUpLFxuICAgICAgICAgICAgKHR5cGUgPSBjaGlsZEtleSArIGdldEVsZW1lbnRLZXkobmFtZVNvRmFyLCBpKyspKSxcbiAgICAgICAgICAgIChpbnZva2VDYWxsYmFjayArPSBtYXBJbnRvQXJyYXkoXG4gICAgICAgICAgICAgIG5hbWVTb0ZhcixcbiAgICAgICAgICAgICAgYXJyYXksXG4gICAgICAgICAgICAgIGVzY2FwZWRQcmVmaXgsXG4gICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrXG4gICAgICAgICAgICApKTtcbiAgICAgIGVsc2UgaWYgKFwib2JqZWN0XCIgPT09IHR5cGUpIHtcbiAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGNoaWxkcmVuLnRoZW4pXG4gICAgICAgICAgcmV0dXJuIG1hcEludG9BcnJheShcbiAgICAgICAgICAgIHJlc29sdmVUaGVuYWJsZShjaGlsZHJlbiksXG4gICAgICAgICAgICBhcnJheSxcbiAgICAgICAgICAgIGVzY2FwZWRQcmVmaXgsXG4gICAgICAgICAgICBuYW1lU29GYXIsXG4gICAgICAgICAgICBjYWxsYmFja1xuICAgICAgICAgICk7XG4gICAgICAgIGFycmF5ID0gU3RyaW5nKGNoaWxkcmVuKTtcbiAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgXCJPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6IFwiICtcbiAgICAgICAgICAgIChcIltvYmplY3QgT2JqZWN0XVwiID09PSBhcnJheVxuICAgICAgICAgICAgICA/IFwib2JqZWN0IHdpdGgga2V5cyB7XCIgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbihcIiwgXCIpICsgXCJ9XCJcbiAgICAgICAgICAgICAgOiBhcnJheSkgK1xuICAgICAgICAgICAgXCIpLiBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5IGluc3RlYWQuXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbnZva2VDYWxsYmFjaztcbiAgICB9XG4gICAgZnVuY3Rpb24gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgICAgIGlmIChudWxsID09IGNoaWxkcmVuKSByZXR1cm4gY2hpbGRyZW47XG4gICAgICB2YXIgcmVzdWx0ID0gW10sXG4gICAgICAgIGNvdW50ID0gMDtcbiAgICAgIG1hcEludG9BcnJheShjaGlsZHJlbiwgcmVzdWx0LCBcIlwiLCBcIlwiLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgY291bnQrKyk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxhenlJbml0aWFsaXplcihwYXlsb2FkKSB7XG4gICAgICBpZiAoLTEgPT09IHBheWxvYWQuX3N0YXR1cykge1xuICAgICAgICB2YXIgY3RvciA9IHBheWxvYWQuX3Jlc3VsdDtcbiAgICAgICAgY3RvciA9IGN0b3IoKTtcbiAgICAgICAgY3Rvci50aGVuKFxuICAgICAgICAgIGZ1bmN0aW9uIChtb2R1bGVPYmplY3QpIHtcbiAgICAgICAgICAgIGlmICgwID09PSBwYXlsb2FkLl9zdGF0dXMgfHwgLTEgPT09IHBheWxvYWQuX3N0YXR1cylcbiAgICAgICAgICAgICAgKHBheWxvYWQuX3N0YXR1cyA9IDEpLCAocGF5bG9hZC5fcmVzdWx0ID0gbW9kdWxlT2JqZWN0KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKDAgPT09IHBheWxvYWQuX3N0YXR1cyB8fCAtMSA9PT0gcGF5bG9hZC5fc3RhdHVzKVxuICAgICAgICAgICAgICAocGF5bG9hZC5fc3RhdHVzID0gMiksIChwYXlsb2FkLl9yZXN1bHQgPSBlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICAtMSA9PT0gcGF5bG9hZC5fc3RhdHVzICYmXG4gICAgICAgICAgKChwYXlsb2FkLl9zdGF0dXMgPSAwKSwgKHBheWxvYWQuX3Jlc3VsdCA9IGN0b3IpKTtcbiAgICAgIH1cbiAgICAgIGlmICgxID09PSBwYXlsb2FkLl9zdGF0dXMpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgKGN0b3IgPSBwYXlsb2FkLl9yZXN1bHQpLFxuICAgICAgICAgIHZvaWQgMCA9PT0gY3RvciAmJlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgXCJsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXBvcnQoKSBjYWxsLiBJbnN0ZWFkIHJlY2VpdmVkOiAlc1xcblxcbllvdXIgY29kZSBzaG91bGQgbG9vayBsaWtlOiBcXG4gIGNvbnN0IE15Q29tcG9uZW50ID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vTXlDb21wb25lbnQnKSlcXG5cXG5EaWQgeW91IGFjY2lkZW50YWxseSBwdXQgY3VybHkgYnJhY2VzIGFyb3VuZCB0aGUgaW1wb3J0P1wiLFxuICAgICAgICAgICAgICBjdG9yXG4gICAgICAgICAgICApLFxuICAgICAgICAgIFwiZGVmYXVsdFwiIGluIGN0b3IgfHxcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIFwibGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wb3J0KCkgY2FsbC4gSW5zdGVhZCByZWNlaXZlZDogJXNcXG5cXG5Zb3VyIGNvZGUgc2hvdWxkIGxvb2sgbGlrZTogXFxuICBjb25zdCBNeUNvbXBvbmVudCA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL015Q29tcG9uZW50JykpXCIsXG4gICAgICAgICAgICAgIGN0b3JcbiAgICAgICAgICAgICksXG4gICAgICAgICAgY3Rvci5kZWZhdWx0XG4gICAgICAgICk7XG4gICAgICB0aHJvdyBwYXlsb2FkLl9yZXN1bHQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICAgICAgdmFyIGRpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5IO1xuICAgICAgbnVsbCA9PT0gZGlzcGF0Y2hlciAmJlxuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIFwiSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvciBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbjEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbjIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4zLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuU2VlIGh0dHBzOi8vcmVhY3QuZGV2L2xpbmsvaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiXG4gICAgICAgICk7XG4gICAgICByZXR1cm4gZGlzcGF0Y2hlcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gbm9vcCgpIHt9XG4gICAgZnVuY3Rpb24gZW5xdWV1ZVRhc2sodGFzaykge1xuICAgICAgaWYgKG51bGwgPT09IGVucXVldWVUYXNrSW1wbClcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgcmVxdWlyZVN0cmluZyA9IChcInJlcXVpcmVcIiArIE1hdGgucmFuZG9tKCkpLnNsaWNlKDAsIDcpO1xuICAgICAgICAgIGVucXVldWVUYXNrSW1wbCA9IChtb2R1bGUgJiYgbW9kdWxlW3JlcXVpcmVTdHJpbmddKS5jYWxsKFxuICAgICAgICAgICAgbW9kdWxlLFxuICAgICAgICAgICAgXCJ0aW1lcnNcIlxuICAgICAgICAgICkuc2V0SW1tZWRpYXRlO1xuICAgICAgICB9IGNhdGNoIChfZXJyKSB7XG4gICAgICAgICAgZW5xdWV1ZVRhc2tJbXBsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAhMSA9PT0gZGlkV2FybkFib3V0TWVzc2FnZUNoYW5uZWwgJiZcbiAgICAgICAgICAgICAgKChkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCA9ICEwKSxcbiAgICAgICAgICAgICAgXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIE1lc3NhZ2VDaGFubmVsICYmXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgIFwiVGhpcyBicm93c2VyIGRvZXMgbm90IGhhdmUgYSBNZXNzYWdlQ2hhbm5lbCBpbXBsZW1lbnRhdGlvbiwgc28gZW5xdWV1aW5nIHRhc2tzIHZpYSBhd2FpdCBhY3QoYXN5bmMgKCkgPT4gLi4uKSB3aWxsIGZhaWwuIFBsZWFzZSBmaWxlIGFuIGlzc3VlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMgaWYgeW91IGVuY291bnRlciB0aGlzIHdhcm5pbmcuXCJcbiAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSh2b2lkIDApO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIHJldHVybiBlbnF1ZXVlVGFza0ltcGwodGFzayk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFnZ3JlZ2F0ZUVycm9ycyhlcnJvcnMpIHtcbiAgICAgIHJldHVybiAxIDwgZXJyb3JzLmxlbmd0aCAmJiBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBBZ2dyZWdhdGVFcnJvclxuICAgICAgICA/IG5ldyBBZ2dyZWdhdGVFcnJvcihlcnJvcnMpXG4gICAgICAgIDogZXJyb3JzWzBdO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwb3BBY3RTY29wZShwcmV2QWN0UXVldWUsIHByZXZBY3RTY29wZURlcHRoKSB7XG4gICAgICBwcmV2QWN0U2NvcGVEZXB0aCAhPT0gYWN0U2NvcGVEZXB0aCAtIDEgJiZcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcIllvdSBzZWVtIHRvIGhhdmUgb3ZlcmxhcHBpbmcgYWN0KCkgY2FsbHMsIHRoaXMgaXMgbm90IHN1cHBvcnRlZC4gQmUgc3VyZSB0byBhd2FpdCBwcmV2aW91cyBhY3QoKSBjYWxscyBiZWZvcmUgbWFraW5nIGEgbmV3IG9uZS4gXCJcbiAgICAgICAgKTtcbiAgICAgIGFjdFNjb3BlRGVwdGggPSBwcmV2QWN0U2NvcGVEZXB0aDtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhyZXR1cm5WYWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcXVldWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5hY3RRdWV1ZTtcbiAgICAgIGlmIChudWxsICE9PSBxdWV1ZSlcbiAgICAgICAgaWYgKDAgIT09IHF1ZXVlLmxlbmd0aClcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZmx1c2hBY3RRdWV1ZShxdWV1ZSk7XG4gICAgICAgICAgICBlbnF1ZXVlVGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIGVsc2UgUmVhY3RTaGFyZWRJbnRlcm5hbHMuYWN0UXVldWUgPSBudWxsO1xuICAgICAgMCA8IFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5sZW5ndGhcbiAgICAgICAgPyAoKHF1ZXVlID0gYWdncmVnYXRlRXJyb3JzKFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycykpLFxuICAgICAgICAgIChSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMubGVuZ3RoID0gMCksXG4gICAgICAgICAgcmVqZWN0KHF1ZXVlKSlcbiAgICAgICAgOiByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmx1c2hBY3RRdWV1ZShxdWV1ZSkge1xuICAgICAgaWYgKCFpc0ZsdXNoaW5nKSB7XG4gICAgICAgIGlzRmx1c2hpbmcgPSAhMDtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAoOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IHF1ZXVlW2ldO1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBSZWFjdFNoYXJlZEludGVybmFscy5kaWRVc2VQcm9taXNlID0gITE7XG4gICAgICAgICAgICAgIHZhciBjb250aW51YXRpb24gPSBjYWxsYmFjayghMSk7XG4gICAgICAgICAgICAgIGlmIChudWxsICE9PSBjb250aW51YXRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoUmVhY3RTaGFyZWRJbnRlcm5hbHMuZGlkVXNlUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgcXVldWVbaV0gPSBjYWxsYmFjaztcbiAgICAgICAgICAgICAgICAgIHF1ZXVlLnNwbGljZSgwLCBpKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBjb250aW51YXRpb247XG4gICAgICAgICAgICAgIH0gZWxzZSBicmVhaztcbiAgICAgICAgICAgIH0gd2hpbGUgKDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBxdWV1ZS5sZW5ndGggPSAwO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHF1ZXVlLnNwbGljZSgwLCBpICsgMSksIFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpc0ZsdXNoaW5nID0gITE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAmJlxuICAgICAgXCJmdW5jdGlvblwiID09PVxuICAgICAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydCAmJlxuICAgICAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydChFcnJvcigpKTtcbiAgICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnRyYW5zaXRpb25hbC5lbGVtZW50XCIpLFxuICAgICAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpLFxuICAgICAgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKSxcbiAgICAgIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIiksXG4gICAgICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpO1xuICAgIFN5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKTtcbiAgICB2YXIgUkVBQ1RfQ09OU1VNRVJfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5jb25zdW1lclwiKSxcbiAgICAgIFJFQUNUX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpLFxuICAgICAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxcbiAgICAgIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIiksXG4gICAgICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VfbGlzdFwiKSxcbiAgICAgIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLFxuICAgICAgUkVBQ1RfTEFaWV9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmxhenlcIiksXG4gICAgICBSRUFDVF9BQ1RJVklUWV9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmFjdGl2aXR5XCIpLFxuICAgICAgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gU3ltYm9sLml0ZXJhdG9yLFxuICAgICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge30sXG4gICAgICBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgICAgICAgaXNNb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICB9LFxuICAgICAgICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgICAgICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBcImZvcmNlVXBkYXRlXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICAgICAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgXCJyZXBsYWNlU3RhdGVcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgICAgICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIFwic2V0U3RhdGVcIik7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhc3NpZ24gPSBPYmplY3QuYXNzaWduLFxuICAgICAgZW1wdHlPYmplY3QgPSB7fTtcbiAgICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbiAgICBDb21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcbiAgICBDb21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgICAgIGlmIChcbiAgICAgICAgXCJvYmplY3RcIiAhPT0gdHlwZW9mIHBhcnRpYWxTdGF0ZSAmJlxuICAgICAgICBcImZ1bmN0aW9uXCIgIT09IHR5cGVvZiBwYXJ0aWFsU3RhdGUgJiZcbiAgICAgICAgbnVsbCAhPSBwYXJ0aWFsU3RhdGVcbiAgICAgIClcbiAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgXCJ0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy5cIlxuICAgICAgICApO1xuICAgICAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBcInNldFN0YXRlXCIpO1xuICAgIH07XG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLCBjYWxsYmFjaywgXCJmb3JjZVVwZGF0ZVwiKTtcbiAgICB9O1xuICAgIHZhciBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICAgICAgaXNNb3VudGVkOiBbXG4gICAgICAgICAgXCJpc01vdW50ZWRcIixcbiAgICAgICAgICBcIkluc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluIGNvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLlwiXG4gICAgICAgIF0sXG4gICAgICAgIHJlcGxhY2VTdGF0ZTogW1xuICAgICAgICAgIFwicmVwbGFjZVN0YXRlXCIsXG4gICAgICAgICAgXCJSZWZhY3RvciB5b3VyIGNvZGUgdG8gdXNlIHNldFN0YXRlIGluc3RlYWQgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLlwiXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBmbk5hbWU7XG4gICAgZm9yIChmbk5hbWUgaW4gZGVwcmVjYXRlZEFQSXMpXG4gICAgICBkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpICYmXG4gICAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIENvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gICAgZGVwcmVjYXRlZEFQSXMgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xuICAgIGRlcHJlY2F0ZWRBUElzLmNvbnN0cnVjdG9yID0gUHVyZUNvbXBvbmVudDtcbiAgICBhc3NpZ24oZGVwcmVjYXRlZEFQSXMsIENvbXBvbmVudC5wcm90b3R5cGUpO1xuICAgIGRlcHJlY2F0ZWRBUElzLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gITA7XG4gICAgdmFyIGlzQXJyYXlJbXBsID0gQXJyYXkuaXNBcnJheSxcbiAgICAgIFJFQUNUX0NMSUVOVF9SRUZFUkVOQ0UgPSBTeW1ib2wuZm9yKFwicmVhY3QuY2xpZW50LnJlZmVyZW5jZVwiKSxcbiAgICAgIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0ge1xuICAgICAgICBIOiBudWxsLFxuICAgICAgICBBOiBudWxsLFxuICAgICAgICBUOiBudWxsLFxuICAgICAgICBTOiBudWxsLFxuICAgICAgICBWOiBudWxsLFxuICAgICAgICBhY3RRdWV1ZTogbnVsbCxcbiAgICAgICAgaXNCYXRjaGluZ0xlZ2FjeTogITEsXG4gICAgICAgIGRpZFNjaGVkdWxlTGVnYWN5VXBkYXRlOiAhMSxcbiAgICAgICAgZGlkVXNlUHJvbWlzZTogITEsXG4gICAgICAgIHRocm93bkVycm9yczogW10sXG4gICAgICAgIGdldEN1cnJlbnRTdGFjazogbnVsbCxcbiAgICAgICAgcmVjZW50bHlDcmVhdGVkT3duZXJTdGFja3M6IDBcbiAgICAgIH0sXG4gICAgICBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksXG4gICAgICBjcmVhdGVUYXNrID0gY29uc29sZS5jcmVhdGVUYXNrXG4gICAgICAgID8gY29uc29sZS5jcmVhdGVUYXNrXG4gICAgICAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfTtcbiAgICBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICAgIFwicmVhY3Qtc3RhY2stYm90dG9tLWZyYW1lXCI6IGZ1bmN0aW9uIChjYWxsU3RhY2tGb3JFcnJvcikge1xuICAgICAgICByZXR1cm4gY2FsbFN0YWNrRm9yRXJyb3IoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgZGlkV2FybkFib3V0T2xkSlNYUnVudGltZTtcbiAgICB2YXIgZGlkV2FybkFib3V0RWxlbWVudFJlZiA9IHt9O1xuICAgIHZhciB1bmtub3duT3duZXJEZWJ1Z1N0YWNrID0gZGVwcmVjYXRlZEFQSXNbXG4gICAgICBcInJlYWN0LXN0YWNrLWJvdHRvbS1mcmFtZVwiXG4gICAgXS5iaW5kKGRlcHJlY2F0ZWRBUElzLCBVbmtub3duT3duZXIpKCk7XG4gICAgdmFyIHVua25vd25Pd25lckRlYnVnVGFzayA9IGNyZWF0ZVRhc2soZ2V0VGFza05hbWUoVW5rbm93bk93bmVyKSk7XG4gICAgdmFyIGRpZFdhcm5BYm91dE1hcHMgPSAhMSxcbiAgICAgIHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4ID0gL1xcLysvZyxcbiAgICAgIHJlcG9ydEdsb2JhbEVycm9yID1cbiAgICAgICAgXCJmdW5jdGlvblwiID09PSB0eXBlb2YgcmVwb3J0RXJyb3JcbiAgICAgICAgICA/IHJlcG9ydEVycm9yXG4gICAgICAgICAgOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiB3aW5kb3cgJiZcbiAgICAgICAgICAgICAgICBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiB3aW5kb3cuRXJyb3JFdmVudFxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgd2luZG93LkVycm9yRXZlbnQoXCJlcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICBidWJibGVzOiAhMCxcbiAgICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6ICEwLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICAgICAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIGVycm9yICYmXG4gICAgICAgICAgICAgICAgICAgIG51bGwgIT09IGVycm9yICYmXG4gICAgICAgICAgICAgICAgICAgIFwic3RyaW5nXCIgPT09IHR5cGVvZiBlcnJvci5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgPyBTdHJpbmcoZXJyb3IubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgICA6IFN0cmluZyhlcnJvciksXG4gICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIXdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KSkgcmV0dXJuO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBwcm9jZXNzICYmXG4gICAgICAgICAgICAgICAgXCJmdW5jdGlvblwiID09PSB0eXBlb2YgcHJvY2Vzcy5lbWl0XG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHByb2Nlc3MuZW1pdChcInVuY2F1Z2h0RXhjZXB0aW9uXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9LFxuICAgICAgZGlkV2FybkFib3V0TWVzc2FnZUNoYW5uZWwgPSAhMSxcbiAgICAgIGVucXVldWVUYXNrSW1wbCA9IG51bGwsXG4gICAgICBhY3RTY29wZURlcHRoID0gMCxcbiAgICAgIGRpZFdhcm5Ob0F3YWl0QWN0ID0gITEsXG4gICAgICBpc0ZsdXNoaW5nID0gITEsXG4gICAgICBxdWV1ZVNldmVyYWxNaWNyb3Rhc2tzID1cbiAgICAgICAgXCJmdW5jdGlvblwiID09PSB0eXBlb2YgcXVldWVNaWNyb3Rhc2tcbiAgICAgICAgICA/IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICBxdWV1ZU1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXVlTWljcm90YXNrKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiBlbnF1ZXVlVGFzaztcbiAgICBkZXByZWNhdGVkQVBJcyA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgX19wcm90b19fOiBudWxsLFxuICAgICAgYzogZnVuY3Rpb24gKHNpemUpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlTWVtb0NhY2hlKHNpemUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGV4cG9ydHMuQ2hpbGRyZW4gPSB7XG4gICAgICBtYXA6IG1hcENoaWxkcmVuLFxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgICAgICAgbWFwQ2hpbGRyZW4oXG4gICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yRWFjaEZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZvckVhY2hDb250ZXh0XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgY291bnQ6IGZ1bmN0aW9uIChjaGlsZHJlbikge1xuICAgICAgICB2YXIgbiA9IDA7XG4gICAgICAgIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbisrO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG47XG4gICAgICB9LFxuICAgICAgdG9BcnJheTogZnVuY3Rpb24gKGNoaWxkcmVuKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgIH0pIHx8IFtdXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgb25seTogZnVuY3Rpb24gKGNoaWxkcmVuKSB7XG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKVxuICAgICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgXCJSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC5cIlxuICAgICAgICAgICk7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgIH1cbiAgICB9O1xuICAgIGV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuICAgIGV4cG9ydHMuRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xuICAgIGV4cG9ydHMuUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xuICAgIGV4cG9ydHMuUHVyZUNvbXBvbmVudCA9IFB1cmVDb21wb25lbnQ7XG4gICAgZXhwb3J0cy5TdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbiAgICBleHBvcnRzLlN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbiAgICBleHBvcnRzLl9fQ0xJRU5UX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1dBUk5fVVNFUlNfVEhFWV9DQU5OT1RfVVBHUkFERSA9XG4gICAgICBSZWFjdFNoYXJlZEludGVybmFscztcbiAgICBleHBvcnRzLl9fQ09NUElMRVJfUlVOVElNRSA9IGRlcHJlY2F0ZWRBUElzO1xuICAgIGV4cG9ydHMuYWN0ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgcHJldkFjdFF1ZXVlID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuYWN0UXVldWUsXG4gICAgICAgIHByZXZBY3RTY29wZURlcHRoID0gYWN0U2NvcGVEZXB0aDtcbiAgICAgIGFjdFNjb3BlRGVwdGgrKztcbiAgICAgIHZhciBxdWV1ZSA9IChSZWFjdFNoYXJlZEludGVybmFscy5hY3RRdWV1ZSA9XG4gICAgICAgICAgbnVsbCAhPT0gcHJldkFjdFF1ZXVlID8gcHJldkFjdFF1ZXVlIDogW10pLFxuICAgICAgICBkaWRBd2FpdEFjdENhbGwgPSAhMTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBjYWxsYmFjaygpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgfVxuICAgICAgaWYgKDAgPCBSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMubGVuZ3RoKVxuICAgICAgICB0aHJvdyAoXG4gICAgICAgICAgKHBvcEFjdFNjb3BlKHByZXZBY3RRdWV1ZSwgcHJldkFjdFNjb3BlRGVwdGgpLFxuICAgICAgICAgIChjYWxsYmFjayA9IGFnZ3JlZ2F0ZUVycm9ycyhSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMpKSxcbiAgICAgICAgICAoUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLmxlbmd0aCA9IDApLFxuICAgICAgICAgIGNhbGxiYWNrKVxuICAgICAgICApO1xuICAgICAgaWYgKFxuICAgICAgICBudWxsICE9PSByZXN1bHQgJiZcbiAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIHJlc3VsdCAmJlxuICAgICAgICBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiByZXN1bHQudGhlblxuICAgICAgKSB7XG4gICAgICAgIHZhciB0aGVuYWJsZSA9IHJlc3VsdDtcbiAgICAgICAgcXVldWVTZXZlcmFsTWljcm90YXNrcyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZGlkQXdhaXRBY3RDYWxsIHx8XG4gICAgICAgICAgICBkaWRXYXJuTm9Bd2FpdEFjdCB8fFxuICAgICAgICAgICAgKChkaWRXYXJuTm9Bd2FpdEFjdCA9ICEwKSxcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIFwiWW91IGNhbGxlZCBhY3QoYXN5bmMgKCkgPT4gLi4uKSB3aXRob3V0IGF3YWl0LiBUaGlzIGNvdWxkIGxlYWQgdG8gdW5leHBlY3RlZCB0ZXN0aW5nIGJlaGF2aW91ciwgaW50ZXJsZWF2aW5nIG11bHRpcGxlIGFjdCBjYWxscyBhbmQgbWl4aW5nIHRoZWlyIHNjb3Blcy4gWW91IHNob3VsZCAtIGF3YWl0IGFjdChhc3luYyAoKSA9PiAuLi4pO1wiXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGhlbjogZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgZGlkQXdhaXRBY3RDYWxsID0gITA7XG4gICAgICAgICAgICB0aGVuYWJsZS50aGVuKFxuICAgICAgICAgICAgICBmdW5jdGlvbiAocmV0dXJuVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBwb3BBY3RTY29wZShwcmV2QWN0UXVldWUsIHByZXZBY3RTY29wZURlcHRoKTtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PT0gcHJldkFjdFNjb3BlRGVwdGgpIHtcbiAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZsdXNoQWN0UXVldWUocXVldWUpLFxuICAgICAgICAgICAgICAgICAgICAgIGVucXVldWVUYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IkMCkge1xuICAgICAgICAgICAgICAgICAgICBSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMucHVzaChlcnJvciQwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmICgwIDwgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3Rocm93bkVycm9yID0gYWdncmVnYXRlRXJyb3JzKFxuICAgICAgICAgICAgICAgICAgICAgIFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9yc1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KF90aHJvd25FcnJvcik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBwb3BBY3RTY29wZShwcmV2QWN0UXVldWUsIHByZXZBY3RTY29wZURlcHRoKTtcbiAgICAgICAgICAgICAgICAwIDwgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgPyAoKGVycm9yID0gYWdncmVnYXRlRXJyb3JzKFxuICAgICAgICAgICAgICAgICAgICAgIFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9yc1xuICAgICAgICAgICAgICAgICAgICApKSxcbiAgICAgICAgICAgICAgICAgICAgKFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5sZW5ndGggPSAwKSxcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKSlcbiAgICAgICAgICAgICAgICAgIDogcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB2YXIgcmV0dXJuVmFsdWUkanNjb21wJDAgPSByZXN1bHQ7XG4gICAgICBwb3BBY3RTY29wZShwcmV2QWN0UXVldWUsIHByZXZBY3RTY29wZURlcHRoKTtcbiAgICAgIDAgPT09IHByZXZBY3RTY29wZURlcHRoICYmXG4gICAgICAgIChmbHVzaEFjdFF1ZXVlKHF1ZXVlKSxcbiAgICAgICAgMCAhPT0gcXVldWUubGVuZ3RoICYmXG4gICAgICAgICAgcXVldWVTZXZlcmFsTWljcm90YXNrcyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkaWRBd2FpdEFjdENhbGwgfHxcbiAgICAgICAgICAgICAgZGlkV2Fybk5vQXdhaXRBY3QgfHxcbiAgICAgICAgICAgICAgKChkaWRXYXJuTm9Bd2FpdEFjdCA9ICEwKSxcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICBcIkEgY29tcG9uZW50IHN1c3BlbmRlZCBpbnNpZGUgYW4gYGFjdGAgc2NvcGUsIGJ1dCB0aGUgYGFjdGAgY2FsbCB3YXMgbm90IGF3YWl0ZWQuIFdoZW4gdGVzdGluZyBSZWFjdCBjb21wb25lbnRzIHRoYXQgZGVwZW5kIG9uIGFzeW5jaHJvbm91cyBkYXRhLCB5b3UgbXVzdCBhd2FpdCB0aGUgcmVzdWx0OlxcblxcbmF3YWl0IGFjdCgoKSA9PiAuLi4pXCJcbiAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgfSksXG4gICAgICAgIChSZWFjdFNoYXJlZEludGVybmFscy5hY3RRdWV1ZSA9IG51bGwpKTtcbiAgICAgIGlmICgwIDwgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLmxlbmd0aClcbiAgICAgICAgdGhyb3cgKFxuICAgICAgICAgICgoY2FsbGJhY2sgPSBhZ2dyZWdhdGVFcnJvcnMoUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzKSksXG4gICAgICAgICAgKFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5sZW5ndGggPSAwKSxcbiAgICAgICAgICBjYWxsYmFjaylcbiAgICAgICAgKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBkaWRBd2FpdEFjdENhbGwgPSAhMDtcbiAgICAgICAgICAwID09PSBwcmV2QWN0U2NvcGVEZXB0aFxuICAgICAgICAgICAgPyAoKFJlYWN0U2hhcmVkSW50ZXJuYWxzLmFjdFF1ZXVlID0gcXVldWUpLFxuICAgICAgICAgICAgICBlbnF1ZXVlVGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsoXG4gICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSRqc2NvbXAkMCxcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIDogcmVzb2x2ZShyZXR1cm5WYWx1ZSRqc2NvbXAkMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgICBleHBvcnRzLmNhY2hlID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfTtcbiAgICBleHBvcnRzLmNhcHR1cmVPd25lclN0YWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGdldEN1cnJlbnRTdGFjayA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLmdldEN1cnJlbnRTdGFjaztcbiAgICAgIHJldHVybiBudWxsID09PSBnZXRDdXJyZW50U3RhY2sgPyBudWxsIDogZ2V0Q3VycmVudFN0YWNrKCk7XG4gICAgfTtcbiAgICBleHBvcnRzLmNsb25lRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gICAgICBpZiAobnVsbCA9PT0gZWxlbWVudCB8fCB2b2lkIDAgPT09IGVsZW1lbnQpXG4gICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgIFwiVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCBcIiArXG4gICAgICAgICAgICBlbGVtZW50ICtcbiAgICAgICAgICAgIFwiLlwiXG4gICAgICAgICk7XG4gICAgICB2YXIgcHJvcHMgPSBhc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpLFxuICAgICAgICBrZXkgPSBlbGVtZW50LmtleSxcbiAgICAgICAgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIGlmIChudWxsICE9IGNvbmZpZykge1xuICAgICAgICB2YXIgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0O1xuICAgICAgICBhOiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIFwicmVmXCIpICYmXG4gICAgICAgICAgICAoSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihcbiAgICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgICAgICBcInJlZlwiXG4gICAgICAgICAgICApLmdldCkgJiZcbiAgICAgICAgICAgIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdC5pc1JlYWN0V2FybmluZ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0ID0gITE7XG4gICAgICAgICAgICBicmVhayBhO1xuICAgICAgICAgIH1cbiAgICAgICAgICBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQgPSB2b2lkIDAgIT09IGNvbmZpZy5yZWY7XG4gICAgICAgIH1cbiAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0ICYmIChvd25lciA9IGdldE93bmVyKCkpO1xuICAgICAgICBoYXNWYWxpZEtleShjb25maWcpICYmXG4gICAgICAgICAgKGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSksIChrZXkgPSBcIlwiICsgY29uZmlnLmtleSkpO1xuICAgICAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZylcbiAgICAgICAgICAhaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSB8fFxuICAgICAgICAgICAgXCJrZXlcIiA9PT0gcHJvcE5hbWUgfHxcbiAgICAgICAgICAgIFwiX19zZWxmXCIgPT09IHByb3BOYW1lIHx8XG4gICAgICAgICAgICBcIl9fc291cmNlXCIgPT09IHByb3BOYW1lIHx8XG4gICAgICAgICAgICAoXCJyZWZcIiA9PT0gcHJvcE5hbWUgJiYgdm9pZCAwID09PSBjb25maWcucmVmKSB8fFxuICAgICAgICAgICAgKHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV0pO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BOYW1lID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gICAgICBpZiAoMSA9PT0gcHJvcE5hbWUpIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICBlbHNlIGlmICgxIDwgcHJvcE5hbWUpIHtcbiAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0ID0gQXJyYXkocHJvcE5hbWUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BOYW1lOyBpKyspXG4gICAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICAgICAgcHJvcHMuY2hpbGRyZW4gPSBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQ7XG4gICAgICB9XG4gICAgICBwcm9wcyA9IFJlYWN0RWxlbWVudChcbiAgICAgICAgZWxlbWVudC50eXBlLFxuICAgICAgICBrZXksXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICBvd25lcixcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIGVsZW1lbnQuX2RlYnVnU3RhY2ssXG4gICAgICAgIGVsZW1lbnQuX2RlYnVnVGFza1xuICAgICAgKTtcbiAgICAgIGZvciAoa2V5ID0gMjsga2V5IDwgYXJndW1lbnRzLmxlbmd0aDsga2V5KyspXG4gICAgICAgIChvd25lciA9IGFyZ3VtZW50c1trZXldKSxcbiAgICAgICAgICBpc1ZhbGlkRWxlbWVudChvd25lcikgJiYgb3duZXIuX3N0b3JlICYmIChvd25lci5fc3RvcmUudmFsaWRhdGVkID0gMSk7XG4gICAgICByZXR1cm4gcHJvcHM7XG4gICAgfTtcbiAgICBleHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBmdW5jdGlvbiAoZGVmYXVsdFZhbHVlKSB7XG4gICAgICBkZWZhdWx0VmFsdWUgPSB7XG4gICAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICAgIF9jdXJyZW50VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICAgICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAgICAgX3RocmVhZENvdW50OiAwLFxuICAgICAgICBQcm92aWRlcjogbnVsbCxcbiAgICAgICAgQ29uc3VtZXI6IG51bGxcbiAgICAgIH07XG4gICAgICBkZWZhdWx0VmFsdWUuUHJvdmlkZXIgPSBkZWZhdWx0VmFsdWU7XG4gICAgICBkZWZhdWx0VmFsdWUuQ29uc3VtZXIgPSB7XG4gICAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05TVU1FUl9UWVBFLFxuICAgICAgICBfY29udGV4dDogZGVmYXVsdFZhbHVlXG4gICAgICB9O1xuICAgICAgZGVmYXVsdFZhbHVlLl9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgICAgZGVmYXVsdFZhbHVlLl9jdXJyZW50UmVuZGVyZXIyID0gbnVsbDtcbiAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfTtcbiAgICBleHBvcnRzLmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICAgICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG5vZGUgPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGlzVmFsaWRFbGVtZW50KG5vZGUpICYmIG5vZGUuX3N0b3JlICYmIChub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSAxKTtcbiAgICAgIH1cbiAgICAgIGkgPSB7fTtcbiAgICAgIG5vZGUgPSBudWxsO1xuICAgICAgaWYgKG51bGwgIT0gY29uZmlnKVxuICAgICAgICBmb3IgKHByb3BOYW1lIGluIChkaWRXYXJuQWJvdXRPbGRKU1hSdW50aW1lIHx8XG4gICAgICAgICAgIShcIl9fc2VsZlwiIGluIGNvbmZpZykgfHxcbiAgICAgICAgICBcImtleVwiIGluIGNvbmZpZyB8fFxuICAgICAgICAgICgoZGlkV2FybkFib3V0T2xkSlNYUnVudGltZSA9ICEwKSxcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBcIllvdXIgYXBwIChvciBvbmUgb2YgaXRzIGRlcGVuZGVuY2llcykgaXMgdXNpbmcgYW4gb3V0ZGF0ZWQgSlNYIHRyYW5zZm9ybS4gVXBkYXRlIHRvIHRoZSBtb2Rlcm4gSlNYIHRyYW5zZm9ybSBmb3IgZmFzdGVyIHBlcmZvcm1hbmNlOiBodHRwczovL3JlYWN0LmRldi9saW5rL25ldy1qc3gtdHJhbnNmb3JtXCJcbiAgICAgICAgICApKSxcbiAgICAgICAgaGFzVmFsaWRLZXkoY29uZmlnKSAmJlxuICAgICAgICAgIChjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNvbmZpZy5rZXkpLCAobm9kZSA9IFwiXCIgKyBjb25maWcua2V5KSksXG4gICAgICAgIGNvbmZpZykpXG4gICAgICAgICAgaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJlxuICAgICAgICAgICAgXCJrZXlcIiAhPT0gcHJvcE5hbWUgJiZcbiAgICAgICAgICAgIFwiX19zZWxmXCIgIT09IHByb3BOYW1lICYmXG4gICAgICAgICAgICBcIl9fc291cmNlXCIgIT09IHByb3BOYW1lICYmXG4gICAgICAgICAgICAoaVtwcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdKTtcbiAgICAgIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuICAgICAgaWYgKDEgPT09IGNoaWxkcmVuTGVuZ3RoKSBpLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICBlbHNlIGlmICgxIDwgY2hpbGRyZW5MZW5ndGgpIHtcbiAgICAgICAgZm9yIChcbiAgICAgICAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKSwgX2kgPSAwO1xuICAgICAgICAgIF9pIDwgY2hpbGRyZW5MZW5ndGg7XG4gICAgICAgICAgX2krK1xuICAgICAgICApXG4gICAgICAgICAgY2hpbGRBcnJheVtfaV0gPSBhcmd1bWVudHNbX2kgKyAyXTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSAmJiBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgICBpLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKVxuICAgICAgICBmb3IgKHByb3BOYW1lIGluICgoY2hpbGRyZW5MZW5ndGggPSB0eXBlLmRlZmF1bHRQcm9wcyksIGNoaWxkcmVuTGVuZ3RoKSlcbiAgICAgICAgICB2b2lkIDAgPT09IGlbcHJvcE5hbWVdICYmIChpW3Byb3BOYW1lXSA9IGNoaWxkcmVuTGVuZ3RoW3Byb3BOYW1lXSk7XG4gICAgICBub2RlICYmXG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKFxuICAgICAgICAgIGksXG4gICAgICAgICAgXCJmdW5jdGlvblwiID09PSB0eXBlb2YgdHlwZVxuICAgICAgICAgICAgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBcIlVua25vd25cIlxuICAgICAgICAgICAgOiB0eXBlXG4gICAgICAgICk7XG4gICAgICB2YXIgcHJvcE5hbWUgPSAxZTQgPiBSZWFjdFNoYXJlZEludGVybmFscy5yZWNlbnRseUNyZWF0ZWRPd25lclN0YWNrcysrO1xuICAgICAgcmV0dXJuIFJlYWN0RWxlbWVudChcbiAgICAgICAgdHlwZSxcbiAgICAgICAgbm9kZSxcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIGdldE93bmVyKCksXG4gICAgICAgIGksXG4gICAgICAgIHByb3BOYW1lID8gRXJyb3IoXCJyZWFjdC1zdGFjay10b3AtZnJhbWVcIikgOiB1bmtub3duT3duZXJEZWJ1Z1N0YWNrLFxuICAgICAgICBwcm9wTmFtZSA/IGNyZWF0ZVRhc2soZ2V0VGFza05hbWUodHlwZSkpIDogdW5rbm93bk93bmVyRGVidWdUYXNrXG4gICAgICApO1xuICAgIH07XG4gICAgZXhwb3J0cy5jcmVhdGVSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcmVmT2JqZWN0ID0geyBjdXJyZW50OiBudWxsIH07XG4gICAgICBPYmplY3Quc2VhbChyZWZPYmplY3QpO1xuICAgICAgcmV0dXJuIHJlZk9iamVjdDtcbiAgICB9O1xuICAgIGV4cG9ydHMuZm9yd2FyZFJlZiA9IGZ1bmN0aW9uIChyZW5kZXIpIHtcbiAgICAgIG51bGwgIT0gcmVuZGVyICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFXG4gICAgICAgID8gY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIFwiZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlIG1lbW8oZm9yd2FyZFJlZiguLi4pKS5cIlxuICAgICAgICAgIClcbiAgICAgICAgOiBcImZ1bmN0aW9uXCIgIT09IHR5cGVvZiByZW5kZXJcbiAgICAgICAgICA/IGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIFwiZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLlwiLFxuICAgICAgICAgICAgICBudWxsID09PSByZW5kZXIgPyBcIm51bGxcIiA6IHR5cGVvZiByZW5kZXJcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IDAgIT09IHJlbmRlci5sZW5ndGggJiZcbiAgICAgICAgICAgIDIgIT09IHJlbmRlci5sZW5ndGggJiZcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIFwiZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGFjY2VwdCBleGFjdGx5IHR3byBwYXJhbWV0ZXJzOiBwcm9wcyBhbmQgcmVmLiAlc1wiLFxuICAgICAgICAgICAgICAxID09PSByZW5kZXIubGVuZ3RoXG4gICAgICAgICAgICAgICAgPyBcIkRpZCB5b3UgZm9yZ2V0IHRvIHVzZSB0aGUgcmVmIHBhcmFtZXRlcj9cIlxuICAgICAgICAgICAgICAgIDogXCJBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuXCJcbiAgICAgICAgICAgICk7XG4gICAgICBudWxsICE9IHJlbmRlciAmJlxuICAgICAgICBudWxsICE9IHJlbmRlci5kZWZhdWx0UHJvcHMgJiZcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcImZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBkbyBub3Qgc3VwcG9ydCBkZWZhdWx0UHJvcHMuIERpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBSZWFjdCBjb21wb25lbnQ/XCJcbiAgICAgICAgKTtcbiAgICAgIHZhciBlbGVtZW50VHlwZSA9IHsgJCR0eXBlb2Y6IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsIHJlbmRlcjogcmVuZGVyIH0sXG4gICAgICAgIG93bk5hbWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsIFwiZGlzcGxheU5hbWVcIiwge1xuICAgICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICBvd25OYW1lID0gbmFtZTtcbiAgICAgICAgICByZW5kZXIubmFtZSB8fFxuICAgICAgICAgICAgcmVuZGVyLmRpc3BsYXlOYW1lIHx8XG4gICAgICAgICAgICAoT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlbmRlciwgXCJuYW1lXCIsIHsgdmFsdWU6IG5hbWUgfSksXG4gICAgICAgICAgICAocmVuZGVyLmRpc3BsYXlOYW1lID0gbmFtZSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBlbGVtZW50VHlwZTtcbiAgICB9O1xuICAgIGV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbiAgICBleHBvcnRzLmxhenkgPSBmdW5jdGlvbiAoY3Rvcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICAgICAgX3BheWxvYWQ6IHsgX3N0YXR1czogLTEsIF9yZXN1bHQ6IGN0b3IgfSxcbiAgICAgICAgX2luaXQ6IGxhenlJbml0aWFsaXplclxuICAgICAgfTtcbiAgICB9O1xuICAgIGV4cG9ydHMubWVtbyA9IGZ1bmN0aW9uICh0eXBlLCBjb21wYXJlKSB7XG4gICAgICBudWxsID09IHR5cGUgJiZcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcIm1lbW86IFRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgY29tcG9uZW50LiBJbnN0ZWFkIHJlY2VpdmVkOiAlc1wiLFxuICAgICAgICAgIG51bGwgPT09IHR5cGUgPyBcIm51bGxcIiA6IHR5cGVvZiB0eXBlXG4gICAgICAgICk7XG4gICAgICBjb21wYXJlID0ge1xuICAgICAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBjb21wYXJlOiB2b2lkIDAgPT09IGNvbXBhcmUgPyBudWxsIDogY29tcGFyZVxuICAgICAgfTtcbiAgICAgIHZhciBvd25OYW1lO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbXBhcmUsIFwiZGlzcGxheU5hbWVcIiwge1xuICAgICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICBvd25OYW1lID0gbmFtZTtcbiAgICAgICAgICB0eXBlLm5hbWUgfHxcbiAgICAgICAgICAgIHR5cGUuZGlzcGxheU5hbWUgfHxcbiAgICAgICAgICAgIChPYmplY3QuZGVmaW5lUHJvcGVydHkodHlwZSwgXCJuYW1lXCIsIHsgdmFsdWU6IG5hbWUgfSksXG4gICAgICAgICAgICAodHlwZS5kaXNwbGF5TmFtZSA9IG5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gY29tcGFyZTtcbiAgICB9O1xuICAgIGV4cG9ydHMuc3RhcnRUcmFuc2l0aW9uID0gZnVuY3Rpb24gKHNjb3BlKSB7XG4gICAgICB2YXIgcHJldlRyYW5zaXRpb24gPSBSZWFjdFNoYXJlZEludGVybmFscy5ULFxuICAgICAgICBjdXJyZW50VHJhbnNpdGlvbiA9IHt9O1xuICAgICAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuVCA9IGN1cnJlbnRUcmFuc2l0aW9uO1xuICAgICAgY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMgPSBuZXcgU2V0KCk7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmV0dXJuVmFsdWUgPSBzY29wZSgpLFxuICAgICAgICAgIG9uU3RhcnRUcmFuc2l0aW9uRmluaXNoID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUztcbiAgICAgICAgbnVsbCAhPT0gb25TdGFydFRyYW5zaXRpb25GaW5pc2ggJiZcbiAgICAgICAgICBvblN0YXJ0VHJhbnNpdGlvbkZpbmlzaChjdXJyZW50VHJhbnNpdGlvbiwgcmV0dXJuVmFsdWUpO1xuICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgcmV0dXJuVmFsdWUgJiZcbiAgICAgICAgICBudWxsICE9PSByZXR1cm5WYWx1ZSAmJlxuICAgICAgICAgIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIHJldHVyblZhbHVlLnRoZW4gJiZcbiAgICAgICAgICByZXR1cm5WYWx1ZS50aGVuKG5vb3AsIHJlcG9ydEdsb2JhbEVycm9yKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlcG9ydEdsb2JhbEVycm9yKGVycm9yKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIG51bGwgPT09IHByZXZUcmFuc2l0aW9uICYmXG4gICAgICAgICAgY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMgJiZcbiAgICAgICAgICAoKHNjb3BlID0gY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMuc2l6ZSksXG4gICAgICAgICAgY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMuY2xlYXIoKSxcbiAgICAgICAgICAxMCA8IHNjb3BlICYmXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIFwiRGV0ZWN0ZWQgYSBsYXJnZSBudW1iZXIgb2YgdXBkYXRlcyBpbnNpZGUgc3RhcnRUcmFuc2l0aW9uLiBJZiB0aGlzIGlzIGR1ZSB0byBhIHN1YnNjcmlwdGlvbiBwbGVhc2UgcmUtd3JpdGUgaXQgdG8gdXNlIFJlYWN0IHByb3ZpZGVkIGhvb2tzLiBPdGhlcndpc2UgY29uY3VycmVudCBtb2RlIGd1YXJhbnRlZXMgYXJlIG9mZiB0aGUgdGFibGUuXCJcbiAgICAgICAgICAgICkpLFxuICAgICAgICAgIChSZWFjdFNoYXJlZEludGVybmFscy5UID0gcHJldlRyYW5zaXRpb24pO1xuICAgICAgfVxuICAgIH07XG4gICAgZXhwb3J0cy51bnN0YWJsZV91c2VDYWNoZVJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VDYWNoZVJlZnJlc2goKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlID0gZnVuY3Rpb24gKHVzYWJsZSkge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlKHVzYWJsZSk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZUFjdGlvblN0YXRlID0gZnVuY3Rpb24gKGFjdGlvbiwgaW5pdGlhbFN0YXRlLCBwZXJtYWxpbmspIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZUFjdGlvblN0YXRlKFxuICAgICAgICBhY3Rpb24sXG4gICAgICAgIGluaXRpYWxTdGF0ZSxcbiAgICAgICAgcGVybWFsaW5rXG4gICAgICApO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VDYWxsYmFjayA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZGVwcykge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VDb250ZXh0ID0gZnVuY3Rpb24gKENvbnRleHQpIHtcbiAgICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICAgIENvbnRleHQuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlNVTUVSX1RZUEUgJiZcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcIkNhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LkNvbnN1bWVyKSBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGNhdXNlIGJ1Z3MuIERpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD9cIlxuICAgICAgICApO1xuICAgICAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0KTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlRGVmZXJyZWRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgaW5pdGlhbFZhbHVlKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VEZWZlcnJlZFZhbHVlKHZhbHVlLCBpbml0aWFsVmFsdWUpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VFZmZlY3QgPSBmdW5jdGlvbiAoY3JlYXRlLCBjcmVhdGVEZXBzLCB1cGRhdGUpIHtcbiAgICAgIG51bGwgPT0gY3JlYXRlICYmXG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBcIlJlYWN0IEhvb2sgdXNlRWZmZWN0IHJlcXVpcmVzIGFuIGVmZmVjdCBjYWxsYmFjay4gRGlkIHlvdSBmb3JnZXQgdG8gcGFzcyBhIGNhbGxiYWNrIHRvIHRoZSBob29rP1wiXG4gICAgICAgICk7XG4gICAgICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gICAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgdXBkYXRlKVxuICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICBcInVzZUVmZmVjdCBDUlVEIG92ZXJsb2FkIGlzIG5vdCBlbmFibGVkIGluIHRoaXMgYnVpbGQgb2YgUmVhY3QuXCJcbiAgICAgICAgKTtcbiAgICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZUVmZmVjdChjcmVhdGUsIGNyZWF0ZURlcHMpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VJZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZUlkKCk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZUltcGVyYXRpdmVIYW5kbGUgPSBmdW5jdGlvbiAocmVmLCBjcmVhdGUsIGRlcHMpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VJbnNlcnRpb25FZmZlY3QgPSBmdW5jdGlvbiAoY3JlYXRlLCBkZXBzKSB7XG4gICAgICBudWxsID09IGNyZWF0ZSAmJlxuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgXCJSZWFjdCBIb29rIHVzZUluc2VydGlvbkVmZmVjdCByZXF1aXJlcyBhbiBlZmZlY3QgY2FsbGJhY2suIERpZCB5b3UgZm9yZ2V0IHRvIHBhc3MgYSBjYWxsYmFjayB0byB0aGUgaG9vaz9cIlxuICAgICAgICApO1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlSW5zZXJ0aW9uRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IGZ1bmN0aW9uIChjcmVhdGUsIGRlcHMpIHtcbiAgICAgIG51bGwgPT0gY3JlYXRlICYmXG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBcIlJlYWN0IEhvb2sgdXNlTGF5b3V0RWZmZWN0IHJlcXVpcmVzIGFuIGVmZmVjdCBjYWxsYmFjay4gRGlkIHlvdSBmb3JnZXQgdG8gcGFzcyBhIGNhbGxiYWNrIHRvIHRoZSBob29rP1wiXG4gICAgICAgICk7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlTWVtbyA9IGZ1bmN0aW9uIChjcmVhdGUsIGRlcHMpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZU1lbW8oY3JlYXRlLCBkZXBzKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlT3B0aW1pc3RpYyA9IGZ1bmN0aW9uIChwYXNzdGhyb3VnaCwgcmVkdWNlcikge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlT3B0aW1pc3RpYyhwYXNzdGhyb3VnaCwgcmVkdWNlcik7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZVJlZHVjZXIgPSBmdW5jdGlvbiAocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlUmVmID0gZnVuY3Rpb24gKGluaXRpYWxWYWx1ZSkge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZVN0YXRlID0gZnVuY3Rpb24gKGluaXRpYWxTdGF0ZSkge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlU3luY0V4dGVybmFsU3RvcmUgPSBmdW5jdGlvbiAoXG4gICAgICBzdWJzY3JpYmUsXG4gICAgICBnZXRTbmFwc2hvdCxcbiAgICAgIGdldFNlcnZlclNuYXBzaG90XG4gICAgKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VTeW5jRXh0ZXJuYWxTdG9yZShcbiAgICAgICAgc3Vic2NyaWJlLFxuICAgICAgICBnZXRTbmFwc2hvdCxcbiAgICAgICAgZ2V0U2VydmVyU25hcHNob3RcbiAgICAgICk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZVRyYW5zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VUcmFuc2l0aW9uKCk7XG4gICAgfTtcbiAgICBleHBvcnRzLnZlcnNpb24gPSBcIjE5LjEuMFwiO1xuICAgIFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gJiZcbiAgICAgIFwiZnVuY3Rpb25cIiA9PT1cbiAgICAgICAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcCAmJlxuICAgICAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wKEVycm9yKCkpO1xuICB9KSgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZWFjdF9kb21fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcbnZhciBBcHAgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgbnVsbCwgXCJIZWxsbywgUmVhY3Qgd2l0aCBUeXBlU2NyaXB0IVwiKTtcbn07XG5yZWFjdF9kb21fMS5kZWZhdWx0LnJlbmRlcihyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChBcHAsIG51bGwpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c3hcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=