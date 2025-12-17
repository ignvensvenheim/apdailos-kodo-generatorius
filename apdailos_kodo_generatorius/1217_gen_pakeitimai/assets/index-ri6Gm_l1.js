(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const p of document.querySelectorAll('link[rel="modulepreload"]')) c(p);
  new MutationObserver((p) => {
    for (const m of p)
      if (m.type === "childList")
        for (const _ of m.addedNodes)
          _.tagName === "LINK" && _.rel === "modulepreload" && c(_);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(p) {
    const m = {};
    return (
      p.integrity && (m.integrity = p.integrity),
      p.referrerPolicy && (m.referrerPolicy = p.referrerPolicy),
      p.crossOrigin === "use-credentials"
        ? (m.credentials = "include")
        : p.crossOrigin === "anonymous"
        ? (m.credentials = "omit")
        : (m.credentials = "same-origin"),
      m
    );
  }
  function c(p) {
    if (p.ep) return;
    p.ep = !0;
    const m = a(p);
    fetch(p.href, m);
  }
})();
function lf(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
var Ca = { exports: {} },
  el = {},
  Na = { exports: {} },
  ge = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zc;
function hp() {
  if (zc) return ge;
  zc = 1;
  var i = Symbol.for("react.element"),
    s = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    c = Symbol.for("react.strict_mode"),
    p = Symbol.for("react.profiler"),
    m = Symbol.for("react.provider"),
    _ = Symbol.for("react.context"),
    w = Symbol.for("react.forward_ref"),
    z = Symbol.for("react.suspense"),
    Z = Symbol.for("react.memo"),
    D = Symbol.for("react.lazy"),
    T = Symbol.iterator;
  function Q(h) {
    return h === null || typeof h != "object"
      ? null
      : ((h = (T && h[T]) || h["@@iterator"]),
        typeof h == "function" ? h : null);
  }
  var de = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    H = Object.assign,
    $ = {};
  function V(h, N, pe) {
    (this.props = h),
      (this.context = N),
      (this.refs = $),
      (this.updater = pe || de);
  }
  (V.prototype.isReactComponent = {}),
    (V.prototype.setState = function (h, N) {
      if (typeof h != "object" && typeof h != "function" && h != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, h, N, "setState");
    }),
    (V.prototype.forceUpdate = function (h) {
      this.updater.enqueueForceUpdate(this, h, "forceUpdate");
    });
  function te() {}
  te.prototype = V.prototype;
  function C(h, N, pe) {
    (this.props = h),
      (this.context = N),
      (this.refs = $),
      (this.updater = pe || de);
  }
  var O = (C.prototype = new te());
  (O.constructor = C), H(O, V.prototype), (O.isPureReactComponent = !0);
  var j = Array.isArray,
    J = Object.prototype.hasOwnProperty,
    ce = { current: null },
    ne = { key: !0, ref: !0, __self: !0, __source: !0 };
  function se(h, N, pe) {
    var me,
      _e = {},
      ke = null,
      Re = null;
    if (N != null)
      for (me in (N.ref !== void 0 && (Re = N.ref),
      N.key !== void 0 && (ke = "" + N.key),
      N))
        J.call(N, me) && !ne.hasOwnProperty(me) && (_e[me] = N[me]);
    var xe = arguments.length - 2;
    if (xe === 1) _e.children = pe;
    else if (1 < xe) {
      for (var Be = Array(xe), at = 0; at < xe; at++)
        Be[at] = arguments[at + 2];
      _e.children = Be;
    }
    if (h && h.defaultProps)
      for (me in ((xe = h.defaultProps), xe))
        _e[me] === void 0 && (_e[me] = xe[me]);
    return {
      $$typeof: i,
      type: h,
      key: ke,
      ref: Re,
      props: _e,
      _owner: ce.current,
    };
  }
  function Ce(h, N) {
    return {
      $$typeof: i,
      type: h.type,
      key: N,
      ref: h.ref,
      props: h.props,
      _owner: h._owner,
    };
  }
  function Se(h) {
    return typeof h == "object" && h !== null && h.$$typeof === i;
  }
  function Ae(h) {
    var N = { "=": "=0", ":": "=2" };
    return (
      "$" +
      h.replace(/[=:]/g, function (pe) {
        return N[pe];
      })
    );
  }
  var b = /\/+/g;
  function ie(h, N) {
    return typeof h == "object" && h !== null && h.key != null
      ? Ae("" + h.key)
      : N.toString(36);
  }
  function we(h, N, pe, me, _e) {
    var ke = typeof h;
    (ke === "undefined" || ke === "boolean") && (h = null);
    var Re = !1;
    if (h === null) Re = !0;
    else
      switch (ke) {
        case "string":
        case "number":
          Re = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case i:
            case s:
              Re = !0;
          }
      }
    if (Re)
      return (
        (Re = h),
        (_e = _e(Re)),
        (h = me === "" ? "." + ie(Re, 0) : me),
        j(_e)
          ? ((pe = ""),
            h != null && (pe = h.replace(b, "$&/") + "/"),
            we(_e, N, pe, "", function (at) {
              return at;
            }))
          : _e != null &&
            (Se(_e) &&
              (_e = Ce(
                _e,
                pe +
                  (!_e.key || (Re && Re.key === _e.key)
                    ? ""
                    : ("" + _e.key).replace(b, "$&/") + "/") +
                  h
              )),
            N.push(_e)),
        1
      );
    if (((Re = 0), (me = me === "" ? "." : me + ":"), j(h)))
      for (var xe = 0; xe < h.length; xe++) {
        ke = h[xe];
        var Be = me + ie(ke, xe);
        Re += we(ke, N, pe, Be, _e);
      }
    else if (((Be = Q(h)), typeof Be == "function"))
      for (h = Be.call(h), xe = 0; !(ke = h.next()).done; )
        (ke = ke.value),
          (Be = me + ie(ke, xe++)),
          (Re += we(ke, N, pe, Be, _e));
    else if (ke === "object")
      throw (
        ((N = String(h)),
        Error(
          "Objects are not valid as a React child (found: " +
            (N === "[object Object]"
              ? "object with keys {" + Object.keys(h).join(", ") + "}"
              : N) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return Re;
  }
  function Ne(h, N, pe) {
    if (h == null) return h;
    var me = [],
      _e = 0;
    return (
      we(h, me, "", "", function (ke) {
        return N.call(pe, ke, _e++);
      }),
      me
    );
  }
  function Pe(h) {
    if (h._status === -1) {
      var N = h._result;
      (N = N()),
        N.then(
          function (pe) {
            (h._status === 0 || h._status === -1) &&
              ((h._status = 1), (h._result = pe));
          },
          function (pe) {
            (h._status === 0 || h._status === -1) &&
              ((h._status = 2), (h._result = pe));
          }
        ),
        h._status === -1 && ((h._status = 0), (h._result = N));
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var ve = { current: null },
    I = { transition: null },
    re = {
      ReactCurrentDispatcher: ve,
      ReactCurrentBatchConfig: I,
      ReactCurrentOwner: ce,
    };
  function W() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (ge.Children = {
      map: Ne,
      forEach: function (h, N, pe) {
        Ne(
          h,
          function () {
            N.apply(this, arguments);
          },
          pe
        );
      },
      count: function (h) {
        var N = 0;
        return (
          Ne(h, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (h) {
        return (
          Ne(h, function (N) {
            return N;
          }) || []
        );
      },
      only: function (h) {
        if (!Se(h))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return h;
      },
    }),
    (ge.Component = V),
    (ge.Fragment = a),
    (ge.Profiler = p),
    (ge.PureComponent = C),
    (ge.StrictMode = c),
    (ge.Suspense = z),
    (ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = re),
    (ge.act = W),
    (ge.cloneElement = function (h, N, pe) {
      if (h == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            h +
            "."
        );
      var me = H({}, h.props),
        _e = h.key,
        ke = h.ref,
        Re = h._owner;
      if (N != null) {
        if (
          (N.ref !== void 0 && ((ke = N.ref), (Re = ce.current)),
          N.key !== void 0 && (_e = "" + N.key),
          h.type && h.type.defaultProps)
        )
          var xe = h.type.defaultProps;
        for (Be in N)
          J.call(N, Be) &&
            !ne.hasOwnProperty(Be) &&
            (me[Be] = N[Be] === void 0 && xe !== void 0 ? xe[Be] : N[Be]);
      }
      var Be = arguments.length - 2;
      if (Be === 1) me.children = pe;
      else if (1 < Be) {
        xe = Array(Be);
        for (var at = 0; at < Be; at++) xe[at] = arguments[at + 2];
        me.children = xe;
      }
      return {
        $$typeof: i,
        type: h.type,
        key: _e,
        ref: ke,
        props: me,
        _owner: Re,
      };
    }),
    (ge.createContext = function (h) {
      return (
        (h = {
          $$typeof: _,
          _currentValue: h,
          _currentValue2: h,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (h.Provider = { $$typeof: m, _context: h }),
        (h.Consumer = h)
      );
    }),
    (ge.createElement = se),
    (ge.createFactory = function (h) {
      var N = se.bind(null, h);
      return (N.type = h), N;
    }),
    (ge.createRef = function () {
      return { current: null };
    }),
    (ge.forwardRef = function (h) {
      return { $$typeof: w, render: h };
    }),
    (ge.isValidElement = Se),
    (ge.lazy = function (h) {
      return { $$typeof: D, _payload: { _status: -1, _result: h }, _init: Pe };
    }),
    (ge.memo = function (h, N) {
      return { $$typeof: Z, type: h, compare: N === void 0 ? null : N };
    }),
    (ge.startTransition = function (h) {
      var N = I.transition;
      I.transition = {};
      try {
        h();
      } finally {
        I.transition = N;
      }
    }),
    (ge.unstable_act = W),
    (ge.useCallback = function (h, N) {
      return ve.current.useCallback(h, N);
    }),
    (ge.useContext = function (h) {
      return ve.current.useContext(h);
    }),
    (ge.useDebugValue = function () {}),
    (ge.useDeferredValue = function (h) {
      return ve.current.useDeferredValue(h);
    }),
    (ge.useEffect = function (h, N) {
      return ve.current.useEffect(h, N);
    }),
    (ge.useId = function () {
      return ve.current.useId();
    }),
    (ge.useImperativeHandle = function (h, N, pe) {
      return ve.current.useImperativeHandle(h, N, pe);
    }),
    (ge.useInsertionEffect = function (h, N) {
      return ve.current.useInsertionEffect(h, N);
    }),
    (ge.useLayoutEffect = function (h, N) {
      return ve.current.useLayoutEffect(h, N);
    }),
    (ge.useMemo = function (h, N) {
      return ve.current.useMemo(h, N);
    }),
    (ge.useReducer = function (h, N, pe) {
      return ve.current.useReducer(h, N, pe);
    }),
    (ge.useRef = function (h) {
      return ve.current.useRef(h);
    }),
    (ge.useState = function (h) {
      return ve.current.useState(h);
    }),
    (ge.useSyncExternalStore = function (h, N, pe) {
      return ve.current.useSyncExternalStore(h, N, pe);
    }),
    (ge.useTransition = function () {
      return ve.current.useTransition();
    }),
    (ge.version = "18.3.1"),
    ge
  );
}
var Ac;
function $a() {
  return Ac || ((Ac = 1), (Na.exports = hp())), Na.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oc;
function gp() {
  if (Oc) return el;
  Oc = 1;
  var i = $a(),
    s = Symbol.for("react.element"),
    a = Symbol.for("react.fragment"),
    c = Object.prototype.hasOwnProperty,
    p = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(w, z, Z) {
    var D,
      T = {},
      Q = null,
      de = null;
    Z !== void 0 && (Q = "" + Z),
      z.key !== void 0 && (Q = "" + z.key),
      z.ref !== void 0 && (de = z.ref);
    for (D in z) c.call(z, D) && !m.hasOwnProperty(D) && (T[D] = z[D]);
    if (w && w.defaultProps)
      for (D in ((z = w.defaultProps), z)) T[D] === void 0 && (T[D] = z[D]);
    return {
      $$typeof: s,
      type: w,
      key: Q,
      ref: de,
      props: T,
      _owner: p.current,
    };
  }
  return (el.Fragment = a), (el.jsx = _), (el.jsxs = _), el;
}
var Fc;
function kp() {
  return Fc || ((Fc = 1), (Ca.exports = gp())), Ca.exports;
}
var B = kp(),
  he = $a();
const fe = lf(he);
var Si = {},
  Pa = { exports: {} },
  ht = {},
  Ra = { exports: {} },
  Da = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ic;
function Sp() {
  return (
    Ic ||
      ((Ic = 1),
      (function (i) {
        function s(I, re) {
          var W = I.length;
          I.push(re);
          e: for (; 0 < W; ) {
            var h = (W - 1) >>> 1,
              N = I[h];
            if (0 < p(N, re)) (I[h] = re), (I[W] = N), (W = h);
            else break e;
          }
        }
        function a(I) {
          return I.length === 0 ? null : I[0];
        }
        function c(I) {
          if (I.length === 0) return null;
          var re = I[0],
            W = I.pop();
          if (W !== re) {
            I[0] = W;
            e: for (var h = 0, N = I.length, pe = N >>> 1; h < pe; ) {
              var me = 2 * (h + 1) - 1,
                _e = I[me],
                ke = me + 1,
                Re = I[ke];
              if (0 > p(_e, W))
                ke < N && 0 > p(Re, _e)
                  ? ((I[h] = Re), (I[ke] = W), (h = ke))
                  : ((I[h] = _e), (I[me] = W), (h = me));
              else if (ke < N && 0 > p(Re, W))
                (I[h] = Re), (I[ke] = W), (h = ke);
              else break e;
            }
          }
          return re;
        }
        function p(I, re) {
          var W = I.sortIndex - re.sortIndex;
          return W !== 0 ? W : I.id - re.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var m = performance;
          i.unstable_now = function () {
            return m.now();
          };
        } else {
          var _ = Date,
            w = _.now();
          i.unstable_now = function () {
            return _.now() - w;
          };
        }
        var z = [],
          Z = [],
          D = 1,
          T = null,
          Q = 3,
          de = !1,
          H = !1,
          $ = !1,
          V = typeof setTimeout == "function" ? setTimeout : null,
          te = typeof clearTimeout == "function" ? clearTimeout : null,
          C = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function O(I) {
          for (var re = a(Z); re !== null; ) {
            if (re.callback === null) c(Z);
            else if (re.startTime <= I)
              c(Z), (re.sortIndex = re.expirationTime), s(z, re);
            else break;
            re = a(Z);
          }
        }
        function j(I) {
          if ((($ = !1), O(I), !H))
            if (a(z) !== null) (H = !0), Pe(J);
            else {
              var re = a(Z);
              re !== null && ve(j, re.startTime - I);
            }
        }
        function J(I, re) {
          (H = !1), $ && (($ = !1), te(se), (se = -1)), (de = !0);
          var W = Q;
          try {
            for (
              O(re), T = a(z);
              T !== null && (!(T.expirationTime > re) || (I && !Ae()));

            ) {
              var h = T.callback;
              if (typeof h == "function") {
                (T.callback = null), (Q = T.priorityLevel);
                var N = h(T.expirationTime <= re);
                (re = i.unstable_now()),
                  typeof N == "function"
                    ? (T.callback = N)
                    : T === a(z) && c(z),
                  O(re);
              } else c(z);
              T = a(z);
            }
            if (T !== null) var pe = !0;
            else {
              var me = a(Z);
              me !== null && ve(j, me.startTime - re), (pe = !1);
            }
            return pe;
          } finally {
            (T = null), (Q = W), (de = !1);
          }
        }
        var ce = !1,
          ne = null,
          se = -1,
          Ce = 5,
          Se = -1;
        function Ae() {
          return !(i.unstable_now() - Se < Ce);
        }
        function b() {
          if (ne !== null) {
            var I = i.unstable_now();
            Se = I;
            var re = !0;
            try {
              re = ne(!0, I);
            } finally {
              re ? ie() : ((ce = !1), (ne = null));
            }
          } else ce = !1;
        }
        var ie;
        if (typeof C == "function")
          ie = function () {
            C(b);
          };
        else if (typeof MessageChannel < "u") {
          var we = new MessageChannel(),
            Ne = we.port2;
          (we.port1.onmessage = b),
            (ie = function () {
              Ne.postMessage(null);
            });
        } else
          ie = function () {
            V(b, 0);
          };
        function Pe(I) {
          (ne = I), ce || ((ce = !0), ie());
        }
        function ve(I, re) {
          se = V(function () {
            I(i.unstable_now());
          }, re);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (I) {
            I.callback = null;
          }),
          (i.unstable_continueExecution = function () {
            H || de || ((H = !0), Pe(J));
          }),
          (i.unstable_forceFrameRate = function (I) {
            0 > I || 125 < I
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Ce = 0 < I ? Math.floor(1e3 / I) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return Q;
          }),
          (i.unstable_getFirstCallbackNode = function () {
            return a(z);
          }),
          (i.unstable_next = function (I) {
            switch (Q) {
              case 1:
              case 2:
              case 3:
                var re = 3;
                break;
              default:
                re = Q;
            }
            var W = Q;
            Q = re;
            try {
              return I();
            } finally {
              Q = W;
            }
          }),
          (i.unstable_pauseExecution = function () {}),
          (i.unstable_requestPaint = function () {}),
          (i.unstable_runWithPriority = function (I, re) {
            switch (I) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                I = 3;
            }
            var W = Q;
            Q = I;
            try {
              return re();
            } finally {
              Q = W;
            }
          }),
          (i.unstable_scheduleCallback = function (I, re, W) {
            var h = i.unstable_now();
            switch (
              (typeof W == "object" && W !== null
                ? ((W = W.delay),
                  (W = typeof W == "number" && 0 < W ? h + W : h))
                : (W = h),
              I)
            ) {
              case 1:
                var N = -1;
                break;
              case 2:
                N = 250;
                break;
              case 5:
                N = 1073741823;
                break;
              case 4:
                N = 1e4;
                break;
              default:
                N = 5e3;
            }
            return (
              (N = W + N),
              (I = {
                id: D++,
                callback: re,
                priorityLevel: I,
                startTime: W,
                expirationTime: N,
                sortIndex: -1,
              }),
              W > h
                ? ((I.sortIndex = W),
                  s(Z, I),
                  a(z) === null &&
                    I === a(Z) &&
                    ($ ? (te(se), (se = -1)) : ($ = !0), ve(j, W - h)))
                : ((I.sortIndex = N), s(z, I), H || de || ((H = !0), Pe(J))),
              I
            );
          }),
          (i.unstable_shouldYield = Ae),
          (i.unstable_wrapCallback = function (I) {
            var re = Q;
            return function () {
              var W = Q;
              Q = re;
              try {
                return I.apply(this, arguments);
              } finally {
                Q = W;
              }
            };
          });
      })(Da)),
    Da
  );
}
var jc;
function _p() {
  return jc || ((jc = 1), (Ra.exports = Sp())), Ra.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mc;
function wp() {
  if (Mc) return ht;
  Mc = 1;
  var i = $a(),
    s = _p();
  function a(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var c = new Set(),
    p = {};
  function m(e, t) {
    _(e, t), _(e + "Capture", t);
  }
  function _(e, t) {
    for (p[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var w = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    z = Object.prototype.hasOwnProperty,
    Z =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    D = {},
    T = {};
  function Q(e) {
    return z.call(T, e)
      ? !0
      : z.call(D, e)
      ? !1
      : Z.test(e)
      ? (T[e] = !0)
      : ((D[e] = !0), !1);
  }
  function de(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function H(e, t, n, r) {
    if (t === null || typeof t > "u" || de(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function $(e, t, n, r, l, o, u) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = u);
  }
  var V = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      V[e] = new $(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      V[t] = new $(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      V[e] = new $(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      V[e] = new $(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        V[e] = new $(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      V[e] = new $(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      V[e] = new $(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      V[e] = new $(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      V[e] = new $(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var te = /[\-:]([a-z])/g;
  function C(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(te, C);
      V[t] = new $(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(te, C);
        V[t] = new $(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(te, C);
      V[t] = new $(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      V[e] = new $(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (V.xlinkHref = new $(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      V[e] = new $(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function O(e, t, n, r) {
    var l = V.hasOwnProperty(t) ? V[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (H(t, n, l, r) && (n = null),
      r || l === null
        ? Q(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var j = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    J = Symbol.for("react.element"),
    ce = Symbol.for("react.portal"),
    ne = Symbol.for("react.fragment"),
    se = Symbol.for("react.strict_mode"),
    Ce = Symbol.for("react.profiler"),
    Se = Symbol.for("react.provider"),
    Ae = Symbol.for("react.context"),
    b = Symbol.for("react.forward_ref"),
    ie = Symbol.for("react.suspense"),
    we = Symbol.for("react.suspense_list"),
    Ne = Symbol.for("react.memo"),
    Pe = Symbol.for("react.lazy"),
    ve = Symbol.for("react.offscreen"),
    I = Symbol.iterator;
  function re(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (I && e[I]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var W = Object.assign,
    h;
  function N(e) {
    if (h === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        h = (t && t[1]) || "";
      }
    return (
      `
` +
      h +
      e
    );
  }
  var pe = !1;
  function me(e, t) {
    if (!e || pe) return "";
    pe = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (x) {
            var r = x;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (x) {
            r = x;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (x) {
          r = x;
        }
        e();
      }
    } catch (x) {
      if (x && r && typeof x.stack == "string") {
        for (
          var l = x.stack.split(`
`),
            o = r.stack.split(`
`),
            u = l.length - 1,
            f = o.length - 1;
          1 <= u && 0 <= f && l[u] !== o[f];

        )
          f--;
        for (; 1 <= u && 0 <= f; u--, f--)
          if (l[u] !== o[f]) {
            if (u !== 1 || f !== 1)
              do
                if ((u--, f--, 0 > f || l[u] !== o[f])) {
                  var d =
                    `
` + l[u].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      d.includes("<anonymous>") &&
                      (d = d.replace("<anonymous>", e.displayName)),
                    d
                  );
                }
              while (1 <= u && 0 <= f);
            break;
          }
      }
    } finally {
      (pe = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? N(e) : "";
  }
  function _e(e) {
    switch (e.tag) {
      case 5:
        return N(e.type);
      case 16:
        return N("Lazy");
      case 13:
        return N("Suspense");
      case 19:
        return N("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = me(e.type, !1)), e;
      case 11:
        return (e = me(e.type.render, !1)), e;
      case 1:
        return (e = me(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ke(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ne:
        return "Fragment";
      case ce:
        return "Portal";
      case Ce:
        return "Profiler";
      case se:
        return "StrictMode";
      case ie:
        return "Suspense";
      case we:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ae:
          return (e.displayName || "Context") + ".Consumer";
        case Se:
          return (e._context.displayName || "Context") + ".Provider";
        case b:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Ne:
          return (
            (t = e.displayName || null), t !== null ? t : ke(e.type) || "Memo"
          );
        case Pe:
          (t = e._payload), (e = e._init);
          try {
            return ke(e(t));
          } catch {}
      }
    return null;
  }
  function Re(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ke(t);
      case 8:
        return t === se ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function xe(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Be(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function at(e) {
    var t = Be(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (u) {
            (r = "" + u), o.call(this, u);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (u) {
            r = "" + u;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Nn(e) {
    e._valueTracker || (e._valueTracker = at(e));
  }
  function sl(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = Be(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Pn(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Yn(e, t) {
    var n = t.checked;
    return W({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Ai(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = xe(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Oi(e, t) {
    (t = t.checked), t != null && O(e, "checked", t, !1);
  }
  function ul(e, t) {
    Oi(e, t);
    var n = xe(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? S(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && S(e, t.type, xe(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function y(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function S(e, t, n) {
    (t !== "number" || Pn(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var E = Array.isArray;
  function U(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + xe(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function M(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return W({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function F(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(a(92));
        if (E(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: xe(n) };
  }
  function le(e, t) {
    var n = xe(t.value),
      r = xe(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function ye(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function $e(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ue(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? $e(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var kt,
    cl = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          kt = kt || document.createElement("div"),
            kt.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = kt.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Kt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Xt = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Fi = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Xt).forEach(function (e) {
    Fi.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Xt[t] = Xt[e]);
    });
  });
  function hr(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Xt.hasOwnProperty(e) && Xt[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function fl(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = hr(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var dl = W(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Ii(e, t) {
    if (t) {
      if (dl[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(a(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(a(62));
    }
  }
  function ji(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Mi = null;
  function Vi(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ui = null,
    Gn = null,
    Qn = null;
  function qa(e) {
    if ((e = Mr(e))) {
      if (typeof Ui != "function") throw Error(a(280));
      var t = e.stateNode;
      t && ((t = Ol(t)), Ui(e.stateNode, e.type, t));
    }
  }
  function Za(e) {
    Gn ? (Qn ? Qn.push(e) : (Qn = [e])) : (Gn = e);
  }
  function Ja() {
    if (Gn) {
      var e = Gn,
        t = Qn;
      if (((Qn = Gn = null), qa(e), t)) for (e = 0; e < t.length; e++) qa(t[e]);
    }
  }
  function ba(e, t) {
    return e(t);
  }
  function es() {}
  var Hi = !1;
  function ts(e, t, n) {
    if (Hi) return e(t, n);
    Hi = !0;
    try {
      return ba(e, t, n);
    } finally {
      (Hi = !1), (Gn !== null || Qn !== null) && (es(), Ja());
    }
  }
  function gr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ol(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(a(231, t, typeof n));
    return n;
  }
  var $i = !1;
  if (w)
    try {
      var kr = {};
      Object.defineProperty(kr, "passive", {
        get: function () {
          $i = !0;
        },
      }),
        window.addEventListener("test", kr, kr),
        window.removeEventListener("test", kr, kr);
    } catch {
      $i = !1;
    }
  function Ef(e, t, n, r, l, o, u, f, d) {
    var x = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, x);
    } catch (R) {
      this.onError(R);
    }
  }
  var Sr = !1,
    pl = null,
    yl = !1,
    Wi = null,
    Tf = {
      onError: function (e) {
        (Sr = !0), (pl = e);
      },
    };
  function Cf(e, t, n, r, l, o, u, f, d) {
    (Sr = !1), (pl = null), Ef.apply(Tf, arguments);
  }
  function Nf(e, t, n, r, l, o, u, f, d) {
    if ((Cf.apply(this, arguments), Sr)) {
      if (Sr) {
        var x = pl;
        (Sr = !1), (pl = null);
      } else throw Error(a(198));
      yl || ((yl = !0), (Wi = x));
    }
  }
  function Rn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function ns(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function rs(e) {
    if (Rn(e) !== e) throw Error(a(188));
  }
  function Pf(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Rn(e)), t === null)) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return rs(l), e;
          if (o === r) return rs(l), t;
          o = o.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== r.return) (n = l), (r = o);
      else {
        for (var u = !1, f = l.child; f; ) {
          if (f === n) {
            (u = !0), (n = l), (r = o);
            break;
          }
          if (f === r) {
            (u = !0), (r = l), (n = o);
            break;
          }
          f = f.sibling;
        }
        if (!u) {
          for (f = o.child; f; ) {
            if (f === n) {
              (u = !0), (n = o), (r = l);
              break;
            }
            if (f === r) {
              (u = !0), (r = o), (n = l);
              break;
            }
            f = f.sibling;
          }
          if (!u) throw Error(a(189));
        }
      }
      if (n.alternate !== r) throw Error(a(190));
    }
    if (n.tag !== 3) throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function ls(e) {
    return (e = Pf(e)), e !== null ? is(e) : null;
  }
  function is(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = is(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var os = s.unstable_scheduleCallback,
    as = s.unstable_cancelCallback,
    Rf = s.unstable_shouldYield,
    Df = s.unstable_requestPaint,
    We = s.unstable_now,
    Lf = s.unstable_getCurrentPriorityLevel,
    Yi = s.unstable_ImmediatePriority,
    ss = s.unstable_UserBlockingPriority,
    ml = s.unstable_NormalPriority,
    Bf = s.unstable_LowPriority,
    us = s.unstable_IdlePriority,
    vl = null,
    Mt = null;
  function zf(e) {
    if (Mt && typeof Mt.onCommitFiberRoot == "function")
      try {
        Mt.onCommitFiberRoot(vl, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Lt = Math.clz32 ? Math.clz32 : Ff,
    Af = Math.log,
    Of = Math.LN2;
  function Ff(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Af(e) / Of) | 0)) | 0;
  }
  var hl = 64,
    gl = 4194304;
  function _r(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function kl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      u = n & 268435455;
    if (u !== 0) {
      var f = u & ~l;
      f !== 0 ? (r = _r(f)) : ((o &= u), o !== 0 && (r = _r(o)));
    } else (u = n & ~l), u !== 0 ? (r = _r(u)) : o !== 0 && (r = _r(o));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & l) &&
      ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - Lt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function If(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function jf(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var u = 31 - Lt(o),
        f = 1 << u,
        d = l[u];
      d === -1
        ? (!(f & n) || f & r) && (l[u] = If(f, t))
        : d <= t && (e.expiredLanes |= f),
        (o &= ~f);
    }
  }
  function Gi(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function cs() {
    var e = hl;
    return (hl <<= 1), !(hl & 4194240) && (hl = 64), e;
  }
  function Qi(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function wr(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Lt(t)),
      (e[t] = n);
  }
  function Mf(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Lt(n),
        o = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
    }
  }
  function Ki(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - Lt(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var De = 0;
  function fs(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var ds,
    Xi,
    ps,
    ys,
    ms,
    qi = !1,
    Sl = [],
    an = null,
    sn = null,
    un = null,
    xr = new Map(),
    Er = new Map(),
    cn = [],
    Vf =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function vs(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        an = null;
        break;
      case "dragenter":
      case "dragleave":
        sn = null;
        break;
      case "mouseover":
      case "mouseout":
        un = null;
        break;
      case "pointerover":
      case "pointerout":
        xr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Er.delete(t.pointerId);
    }
  }
  function Tr(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = Mr(t)), t !== null && Xi(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Uf(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return (an = Tr(an, e, t, n, r, l)), !0;
      case "dragenter":
        return (sn = Tr(sn, e, t, n, r, l)), !0;
      case "mouseover":
        return (un = Tr(un, e, t, n, r, l)), !0;
      case "pointerover":
        var o = l.pointerId;
        return xr.set(o, Tr(xr.get(o) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (o = l.pointerId), Er.set(o, Tr(Er.get(o) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function hs(e) {
    var t = Dn(e.target);
    if (t !== null) {
      var n = Rn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = ns(n)), t !== null)) {
            (e.blockedOn = t),
              ms(e.priority, function () {
                ps(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function _l(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ji(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Mi = r), n.target.dispatchEvent(r), (Mi = null);
      } else return (t = Mr(n)), t !== null && Xi(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function gs(e, t, n) {
    _l(e) && n.delete(t);
  }
  function Hf() {
    (qi = !1),
      an !== null && _l(an) && (an = null),
      sn !== null && _l(sn) && (sn = null),
      un !== null && _l(un) && (un = null),
      xr.forEach(gs),
      Er.forEach(gs);
  }
  function Cr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      qi ||
        ((qi = !0),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, Hf)));
  }
  function Nr(e) {
    function t(l) {
      return Cr(l, e);
    }
    if (0 < Sl.length) {
      Cr(Sl[0], e);
      for (var n = 1; n < Sl.length; n++) {
        var r = Sl[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      an !== null && Cr(an, e),
        sn !== null && Cr(sn, e),
        un !== null && Cr(un, e),
        xr.forEach(t),
        Er.forEach(t),
        n = 0;
      n < cn.length;
      n++
    )
      (r = cn[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < cn.length && ((n = cn[0]), n.blockedOn === null); )
      hs(n), n.blockedOn === null && cn.shift();
  }
  var Kn = j.ReactCurrentBatchConfig,
    wl = !0;
  function $f(e, t, n, r) {
    var l = De,
      o = Kn.transition;
    Kn.transition = null;
    try {
      (De = 1), Zi(e, t, n, r);
    } finally {
      (De = l), (Kn.transition = o);
    }
  }
  function Wf(e, t, n, r) {
    var l = De,
      o = Kn.transition;
    Kn.transition = null;
    try {
      (De = 4), Zi(e, t, n, r);
    } finally {
      (De = l), (Kn.transition = o);
    }
  }
  function Zi(e, t, n, r) {
    if (wl) {
      var l = Ji(e, t, n, r);
      if (l === null) vo(e, t, r, xl, n), vs(e, r);
      else if (Uf(l, e, t, n, r)) r.stopPropagation();
      else if ((vs(e, r), t & 4 && -1 < Vf.indexOf(e))) {
        for (; l !== null; ) {
          var o = Mr(l);
          if (
            (o !== null && ds(o),
            (o = Ji(e, t, n, r)),
            o === null && vo(e, t, r, xl, n),
            o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else vo(e, t, r, null, n);
    }
  }
  var xl = null;
  function Ji(e, t, n, r) {
    if (((xl = null), (e = Vi(r)), (e = Dn(e)), e !== null))
      if (((t = Rn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = ns(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (xl = e), null;
  }
  function ks(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Lf()) {
          case Yi:
            return 1;
          case ss:
            return 4;
          case ml:
          case Bf:
            return 16;
          case us:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var fn = null,
    bi = null,
    El = null;
  function Ss() {
    if (El) return El;
    var e,
      t = bi,
      n = t.length,
      r,
      l = "value" in fn ? fn.value : fn.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === l[o - r]; r++);
    return (El = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Tl(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Cl() {
    return !0;
  }
  function _s() {
    return !1;
  }
  function St(e) {
    function t(n, r, l, o, u) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = u),
        (this.currentTarget = null);
      for (var f in e)
        e.hasOwnProperty(f) && ((n = e[f]), (this[f] = n ? n(o) : o[f]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Cl
          : _s),
        (this.isPropagationStopped = _s),
        this
      );
    }
    return (
      W(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Cl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Cl));
        },
        persist: function () {},
        isPersistent: Cl,
      }),
      t
    );
  }
  var Xn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    eo = St(Xn),
    Pr = W({}, Xn, { view: 0, detail: 0 }),
    Yf = St(Pr),
    to,
    no,
    Rr,
    Nl = W({}, Pr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: lo,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Rr &&
              (Rr && e.type === "mousemove"
                ? ((to = e.screenX - Rr.screenX), (no = e.screenY - Rr.screenY))
                : (no = to = 0),
              (Rr = e)),
            to);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : no;
      },
    }),
    ws = St(Nl),
    Gf = W({}, Nl, { dataTransfer: 0 }),
    Qf = St(Gf),
    Kf = W({}, Pr, { relatedTarget: 0 }),
    ro = St(Kf),
    Xf = W({}, Xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    qf = St(Xf),
    Zf = W({}, Xn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Jf = St(Zf),
    bf = W({}, Xn, { data: 0 }),
    xs = St(bf),
    ed = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    td = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    nd = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function rd(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = nd[e])
      ? !!t[e]
      : !1;
  }
  function lo() {
    return rd;
  }
  var ld = W({}, Pr, {
      key: function (e) {
        if (e.key) {
          var t = ed[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Tl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? td[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: lo,
      charCode: function (e) {
        return e.type === "keypress" ? Tl(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Tl(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    id = St(ld),
    od = W({}, Nl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Es = St(od),
    ad = W({}, Pr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: lo,
    }),
    sd = St(ad),
    ud = W({}, Xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    cd = St(ud),
    fd = W({}, Nl, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    dd = St(fd),
    pd = [9, 13, 27, 32],
    io = w && "CompositionEvent" in window,
    Dr = null;
  w && "documentMode" in document && (Dr = document.documentMode);
  var yd = w && "TextEvent" in window && !Dr,
    Ts = w && (!io || (Dr && 8 < Dr && 11 >= Dr)),
    Cs = " ",
    Ns = !1;
  function Ps(e, t) {
    switch (e) {
      case "keyup":
        return pd.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Rs(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var qn = !1;
  function md(e, t) {
    switch (e) {
      case "compositionend":
        return Rs(t);
      case "keypress":
        return t.which !== 32 ? null : ((Ns = !0), Cs);
      case "textInput":
        return (e = t.data), e === Cs && Ns ? null : e;
      default:
        return null;
    }
  }
  function vd(e, t) {
    if (qn)
      return e === "compositionend" || (!io && Ps(e, t))
        ? ((e = Ss()), (El = bi = fn = null), (qn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Ts && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var hd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ds(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!hd[e.type] : t === "textarea";
  }
  function Ls(e, t, n, r) {
    Za(r),
      (t = Bl(t, "onChange")),
      0 < t.length &&
        ((n = new eo("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var Lr = null,
    Br = null;
  function gd(e) {
    Xs(e, 0);
  }
  function Pl(e) {
    var t = tr(e);
    if (sl(t)) return e;
  }
  function kd(e, t) {
    if (e === "change") return t;
  }
  var Bs = !1;
  if (w) {
    var oo;
    if (w) {
      var ao = "oninput" in document;
      if (!ao) {
        var zs = document.createElement("div");
        zs.setAttribute("oninput", "return;"),
          (ao = typeof zs.oninput == "function");
      }
      oo = ao;
    } else oo = !1;
    Bs = oo && (!document.documentMode || 9 < document.documentMode);
  }
  function As() {
    Lr && (Lr.detachEvent("onpropertychange", Os), (Br = Lr = null));
  }
  function Os(e) {
    if (e.propertyName === "value" && Pl(Br)) {
      var t = [];
      Ls(t, Br, e, Vi(e)), ts(gd, t);
    }
  }
  function Sd(e, t, n) {
    e === "focusin"
      ? (As(), (Lr = t), (Br = n), Lr.attachEvent("onpropertychange", Os))
      : e === "focusout" && As();
  }
  function _d(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Pl(Br);
  }
  function wd(e, t) {
    if (e === "click") return Pl(t);
  }
  function xd(e, t) {
    if (e === "input" || e === "change") return Pl(t);
  }
  function Ed(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Bt = typeof Object.is == "function" ? Object.is : Ed;
  function zr(e, t) {
    if (Bt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!z.call(t, l) || !Bt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Fs(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Is(e, t) {
    var n = Fs(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Fs(n);
    }
  }
  function js(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? js(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Ms() {
    for (var e = window, t = Pn(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Pn(e.document);
    }
    return t;
  }
  function so(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Td(e) {
    var t = Ms(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      js(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && so(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            o = Math.min(r.start, l);
          (r = r.end === void 0 ? o : Math.min(r.end, l)),
            !e.extend && o > r && ((l = r), (r = o), (o = l)),
            (l = Is(n, o));
          var u = Is(n, r);
          l &&
            u &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== u.node ||
              e.focusOffset !== u.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(u.node, u.offset))
              : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Cd = w && "documentMode" in document && 11 >= document.documentMode,
    Zn = null,
    uo = null,
    Ar = null,
    co = !1;
  function Vs(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    co ||
      Zn == null ||
      Zn !== Pn(r) ||
      ((r = Zn),
      "selectionStart" in r && so(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Ar && zr(Ar, r)) ||
        ((Ar = r),
        (r = Bl(uo, "onSelect")),
        0 < r.length &&
          ((t = new eo("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Zn))));
  }
  function Rl(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Jn = {
      animationend: Rl("Animation", "AnimationEnd"),
      animationiteration: Rl("Animation", "AnimationIteration"),
      animationstart: Rl("Animation", "AnimationStart"),
      transitionend: Rl("Transition", "TransitionEnd"),
    },
    fo = {},
    Us = {};
  w &&
    ((Us = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Jn.animationend.animation,
      delete Jn.animationiteration.animation,
      delete Jn.animationstart.animation),
    "TransitionEvent" in window || delete Jn.transitionend.transition);
  function Dl(e) {
    if (fo[e]) return fo[e];
    if (!Jn[e]) return e;
    var t = Jn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Us) return (fo[e] = t[n]);
    return e;
  }
  var Hs = Dl("animationend"),
    $s = Dl("animationiteration"),
    Ws = Dl("animationstart"),
    Ys = Dl("transitionend"),
    Gs = new Map(),
    Qs =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function dn(e, t) {
    Gs.set(e, t), m(t, [e]);
  }
  for (var po = 0; po < Qs.length; po++) {
    var yo = Qs[po],
      Nd = yo.toLowerCase(),
      Pd = yo[0].toUpperCase() + yo.slice(1);
    dn(Nd, "on" + Pd);
  }
  dn(Hs, "onAnimationEnd"),
    dn($s, "onAnimationIteration"),
    dn(Ws, "onAnimationStart"),
    dn("dblclick", "onDoubleClick"),
    dn("focusin", "onFocus"),
    dn("focusout", "onBlur"),
    dn(Ys, "onTransitionEnd"),
    _("onMouseEnter", ["mouseout", "mouseover"]),
    _("onMouseLeave", ["mouseout", "mouseover"]),
    _("onPointerEnter", ["pointerout", "pointerover"]),
    _("onPointerLeave", ["pointerout", "pointerover"]),
    m(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    m(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    m(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    m(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    m(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Or =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Rd = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Or)
    );
  function Ks(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Nf(r, t, void 0, e), (e.currentTarget = null);
  }
  function Xs(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var u = r.length - 1; 0 <= u; u--) {
            var f = r[u],
              d = f.instance,
              x = f.currentTarget;
            if (((f = f.listener), d !== o && l.isPropagationStopped()))
              break e;
            Ks(l, f, x), (o = d);
          }
        else
          for (u = 0; u < r.length; u++) {
            if (
              ((f = r[u]),
              (d = f.instance),
              (x = f.currentTarget),
              (f = f.listener),
              d !== o && l.isPropagationStopped())
            )
              break e;
            Ks(l, f, x), (o = d);
          }
      }
    }
    if (yl) throw ((e = Wi), (yl = !1), (Wi = null), e);
  }
  function Oe(e, t) {
    var n = t[wo];
    n === void 0 && (n = t[wo] = new Set());
    var r = e + "__bubble";
    n.has(r) || (qs(t, e, 2, !1), n.add(r));
  }
  function mo(e, t, n) {
    var r = 0;
    t && (r |= 4), qs(n, e, r, t);
  }
  var Ll = "_reactListening" + Math.random().toString(36).slice(2);
  function Fr(e) {
    if (!e[Ll]) {
      (e[Ll] = !0),
        c.forEach(function (n) {
          n !== "selectionchange" && (Rd.has(n) || mo(n, !1, e), mo(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ll] || ((t[Ll] = !0), mo("selectionchange", !1, t));
    }
  }
  function qs(e, t, n, r) {
    switch (ks(t)) {
      case 1:
        var l = $f;
        break;
      case 4:
        l = Wf;
        break;
      default:
        l = Zi;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !$i ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
  }
  function vo(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var u = r.tag;
        if (u === 3 || u === 4) {
          var f = r.stateNode.containerInfo;
          if (f === l || (f.nodeType === 8 && f.parentNode === l)) break;
          if (u === 4)
            for (u = r.return; u !== null; ) {
              var d = u.tag;
              if (
                (d === 3 || d === 4) &&
                ((d = u.stateNode.containerInfo),
                d === l || (d.nodeType === 8 && d.parentNode === l))
              )
                return;
              u = u.return;
            }
          for (; f !== null; ) {
            if (((u = Dn(f)), u === null)) return;
            if (((d = u.tag), d === 5 || d === 6)) {
              r = o = u;
              continue e;
            }
            f = f.parentNode;
          }
        }
        r = r.return;
      }
    ts(function () {
      var x = o,
        R = Vi(n),
        L = [];
      e: {
        var P = Gs.get(e);
        if (P !== void 0) {
          var Y = eo,
            K = e;
          switch (e) {
            case "keypress":
              if (Tl(n) === 0) break e;
            case "keydown":
            case "keyup":
              Y = id;
              break;
            case "focusin":
              (K = "focus"), (Y = ro);
              break;
            case "focusout":
              (K = "blur"), (Y = ro);
              break;
            case "beforeblur":
            case "afterblur":
              Y = ro;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Y = ws;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Y = Qf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Y = sd;
              break;
            case Hs:
            case $s:
            case Ws:
              Y = qf;
              break;
            case Ys:
              Y = cd;
              break;
            case "scroll":
              Y = Yf;
              break;
            case "wheel":
              Y = dd;
              break;
            case "copy":
            case "cut":
            case "paste":
              Y = Jf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Y = Es;
          }
          var q = (t & 4) !== 0,
            Ye = !q && e === "scroll",
            g = q ? (P !== null ? P + "Capture" : null) : P;
          q = [];
          for (var v = x, k; v !== null; ) {
            k = v;
            var A = k.stateNode;
            if (
              (k.tag === 5 &&
                A !== null &&
                ((k = A),
                g !== null &&
                  ((A = gr(v, g)), A != null && q.push(Ir(v, A, k)))),
              Ye)
            )
              break;
            v = v.return;
          }
          0 < q.length &&
            ((P = new Y(P, K, null, n, R)), L.push({ event: P, listeners: q }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((P = e === "mouseover" || e === "pointerover"),
            (Y = e === "mouseout" || e === "pointerout"),
            P &&
              n !== Mi &&
              (K = n.relatedTarget || n.fromElement) &&
              (Dn(K) || K[qt]))
          )
            break e;
          if (
            (Y || P) &&
            ((P =
              R.window === R
                ? R
                : (P = R.ownerDocument)
                ? P.defaultView || P.parentWindow
                : window),
            Y
              ? ((K = n.relatedTarget || n.toElement),
                (Y = x),
                (K = K ? Dn(K) : null),
                K !== null &&
                  ((Ye = Rn(K)), K !== Ye || (K.tag !== 5 && K.tag !== 6)) &&
                  (K = null))
              : ((Y = null), (K = x)),
            Y !== K)
          ) {
            if (
              ((q = ws),
              (A = "onMouseLeave"),
              (g = "onMouseEnter"),
              (v = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((q = Es),
                (A = "onPointerLeave"),
                (g = "onPointerEnter"),
                (v = "pointer")),
              (Ye = Y == null ? P : tr(Y)),
              (k = K == null ? P : tr(K)),
              (P = new q(A, v + "leave", Y, n, R)),
              (P.target = Ye),
              (P.relatedTarget = k),
              (A = null),
              Dn(R) === x &&
                ((q = new q(g, v + "enter", K, n, R)),
                (q.target = k),
                (q.relatedTarget = Ye),
                (A = q)),
              (Ye = A),
              Y && K)
            )
              t: {
                for (q = Y, g = K, v = 0, k = q; k; k = bn(k)) v++;
                for (k = 0, A = g; A; A = bn(A)) k++;
                for (; 0 < v - k; ) (q = bn(q)), v--;
                for (; 0 < k - v; ) (g = bn(g)), k--;
                for (; v--; ) {
                  if (q === g || (g !== null && q === g.alternate)) break t;
                  (q = bn(q)), (g = bn(g));
                }
                q = null;
              }
            else q = null;
            Y !== null && Zs(L, P, Y, q, !1),
              K !== null && Ye !== null && Zs(L, Ye, K, q, !0);
          }
        }
        e: {
          if (
            ((P = x ? tr(x) : window),
            (Y = P.nodeName && P.nodeName.toLowerCase()),
            Y === "select" || (Y === "input" && P.type === "file"))
          )
            var ee = kd;
          else if (Ds(P))
            if (Bs) ee = xd;
            else {
              ee = _d;
              var oe = Sd;
            }
          else
            (Y = P.nodeName) &&
              Y.toLowerCase() === "input" &&
              (P.type === "checkbox" || P.type === "radio") &&
              (ee = wd);
          if (ee && (ee = ee(e, x))) {
            Ls(L, ee, n, R);
            break e;
          }
          oe && oe(e, P, x),
            e === "focusout" &&
              (oe = P._wrapperState) &&
              oe.controlled &&
              P.type === "number" &&
              S(P, "number", P.value);
        }
        switch (((oe = x ? tr(x) : window), e)) {
          case "focusin":
            (Ds(oe) || oe.contentEditable === "true") &&
              ((Zn = oe), (uo = x), (Ar = null));
            break;
          case "focusout":
            Ar = uo = Zn = null;
            break;
          case "mousedown":
            co = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (co = !1), Vs(L, n, R);
            break;
          case "selectionchange":
            if (Cd) break;
          case "keydown":
          case "keyup":
            Vs(L, n, R);
        }
        var ae;
        if (io)
          e: {
            switch (e) {
              case "compositionstart":
                var ue = "onCompositionStart";
                break e;
              case "compositionend":
                ue = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ue = "onCompositionUpdate";
                break e;
            }
            ue = void 0;
          }
        else
          qn
            ? Ps(e, n) && (ue = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (ue = "onCompositionStart");
        ue &&
          (Ts &&
            n.locale !== "ko" &&
            (qn || ue !== "onCompositionStart"
              ? ue === "onCompositionEnd" && qn && (ae = Ss())
              : ((fn = R),
                (bi = "value" in fn ? fn.value : fn.textContent),
                (qn = !0))),
          (oe = Bl(x, ue)),
          0 < oe.length &&
            ((ue = new xs(ue, e, null, n, R)),
            L.push({ event: ue, listeners: oe }),
            ae
              ? (ue.data = ae)
              : ((ae = Rs(n)), ae !== null && (ue.data = ae)))),
          (ae = yd ? md(e, n) : vd(e, n)) &&
            ((x = Bl(x, "onBeforeInput")),
            0 < x.length &&
              ((R = new xs("onBeforeInput", "beforeinput", null, n, R)),
              L.push({ event: R, listeners: x }),
              (R.data = ae)));
      }
      Xs(L, t);
    });
  }
  function Ir(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Bl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = gr(e, n)),
        o != null && r.unshift(Ir(e, o, l)),
        (o = gr(e, t)),
        o != null && r.push(Ir(e, o, l))),
        (e = e.return);
    }
    return r;
  }
  function bn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Zs(e, t, n, r, l) {
    for (var o = t._reactName, u = []; n !== null && n !== r; ) {
      var f = n,
        d = f.alternate,
        x = f.stateNode;
      if (d !== null && d === r) break;
      f.tag === 5 &&
        x !== null &&
        ((f = x),
        l
          ? ((d = gr(n, o)), d != null && u.unshift(Ir(n, d, f)))
          : l || ((d = gr(n, o)), d != null && u.push(Ir(n, d, f)))),
        (n = n.return);
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var Dd = /\r\n?/g,
    Ld = /\u0000|\uFFFD/g;
  function Js(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Dd,
        `
`
      )
      .replace(Ld, "");
  }
  function zl(e, t, n) {
    if (((t = Js(t)), Js(e) !== t && n)) throw Error(a(425));
  }
  function Al() {}
  var ho = null,
    go = null;
  function ko(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var So = typeof setTimeout == "function" ? setTimeout : void 0,
    Bd = typeof clearTimeout == "function" ? clearTimeout : void 0,
    bs = typeof Promise == "function" ? Promise : void 0,
    zd =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof bs < "u"
        ? function (e) {
            return bs.resolve(null).then(e).catch(Ad);
          }
        : So;
  function Ad(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function _o(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), Nr(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    Nr(t);
  }
  function pn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function eu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var er = Math.random().toString(36).slice(2),
    Vt = "__reactFiber$" + er,
    jr = "__reactProps$" + er,
    qt = "__reactContainer$" + er,
    wo = "__reactEvents$" + er,
    Od = "__reactListeners$" + er,
    Fd = "__reactHandles$" + er;
  function Dn(e) {
    var t = e[Vt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[qt] || n[Vt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = eu(e); e !== null; ) {
            if ((n = e[Vt])) return n;
            e = eu(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function Mr(e) {
    return (
      (e = e[Vt] || e[qt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function tr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function Ol(e) {
    return e[jr] || null;
  }
  var xo = [],
    nr = -1;
  function yn(e) {
    return { current: e };
  }
  function Fe(e) {
    0 > nr || ((e.current = xo[nr]), (xo[nr] = null), nr--);
  }
  function ze(e, t) {
    nr++, (xo[nr] = e.current), (e.current = t);
  }
  var mn = {},
    rt = yn(mn),
    dt = yn(!1),
    Ln = mn;
  function rr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return mn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      o;
    for (o in n) l[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function pt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Fl() {
    Fe(dt), Fe(rt);
  }
  function tu(e, t, n) {
    if (rt.current !== mn) throw Error(a(168));
    ze(rt, t), ze(dt, n);
  }
  function nu(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(a(108, Re(e) || "Unknown", l));
    return W({}, n, r);
  }
  function Il(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        mn),
      (Ln = rt.current),
      ze(rt, e),
      ze(dt, dt.current),
      !0
    );
  }
  function ru(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(a(169));
    n
      ? ((e = nu(e, t, Ln)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        Fe(dt),
        Fe(rt),
        ze(rt, e))
      : Fe(dt),
      ze(dt, n);
  }
  var Zt = null,
    jl = !1,
    Eo = !1;
  function lu(e) {
    Zt === null ? (Zt = [e]) : Zt.push(e);
  }
  function Id(e) {
    (jl = !0), lu(e);
  }
  function vn() {
    if (!Eo && Zt !== null) {
      Eo = !0;
      var e = 0,
        t = De;
      try {
        var n = Zt;
        for (De = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Zt = null), (jl = !1);
      } catch (l) {
        throw (Zt !== null && (Zt = Zt.slice(e + 1)), os(Yi, vn), l);
      } finally {
        (De = t), (Eo = !1);
      }
    }
    return null;
  }
  var lr = [],
    ir = 0,
    Ml = null,
    Vl = 0,
    Et = [],
    Tt = 0,
    Bn = null,
    Jt = 1,
    bt = "";
  function zn(e, t) {
    (lr[ir++] = Vl), (lr[ir++] = Ml), (Ml = e), (Vl = t);
  }
  function iu(e, t, n) {
    (Et[Tt++] = Jt), (Et[Tt++] = bt), (Et[Tt++] = Bn), (Bn = e);
    var r = Jt;
    e = bt;
    var l = 32 - Lt(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var o = 32 - Lt(t) + l;
    if (30 < o) {
      var u = l - (l % 5);
      (o = (r & ((1 << u) - 1)).toString(32)),
        (r >>= u),
        (l -= u),
        (Jt = (1 << (32 - Lt(t) + l)) | (n << l) | r),
        (bt = o + e);
    } else (Jt = (1 << o) | (n << l) | r), (bt = e);
  }
  function To(e) {
    e.return !== null && (zn(e, 1), iu(e, 1, 0));
  }
  function Co(e) {
    for (; e === Ml; )
      (Ml = lr[--ir]), (lr[ir] = null), (Vl = lr[--ir]), (lr[ir] = null);
    for (; e === Bn; )
      (Bn = Et[--Tt]),
        (Et[Tt] = null),
        (bt = Et[--Tt]),
        (Et[Tt] = null),
        (Jt = Et[--Tt]),
        (Et[Tt] = null);
  }
  var _t = null,
    wt = null,
    je = !1,
    zt = null;
  function ou(e, t) {
    var n = Rt(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function au(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (_t = e), (wt = pn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (_t = e), (wt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Bn !== null ? { id: Jt, overflow: bt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Rt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (_t = e),
              (wt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function No(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Po(e) {
    if (je) {
      var t = wt;
      if (t) {
        var n = t;
        if (!au(e, t)) {
          if (No(e)) throw Error(a(418));
          t = pn(n.nextSibling);
          var r = _t;
          t && au(e, t)
            ? ou(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (je = !1), (_t = e));
        }
      } else {
        if (No(e)) throw Error(a(418));
        (e.flags = (e.flags & -4097) | 2), (je = !1), (_t = e);
      }
    }
  }
  function su(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    _t = e;
  }
  function Ul(e) {
    if (e !== _t) return !1;
    if (!je) return su(e), (je = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !ko(e.type, e.memoizedProps))),
      t && (t = wt))
    ) {
      if (No(e)) throw (uu(), Error(a(418)));
      for (; t; ) ou(e, t), (t = pn(t.nextSibling));
    }
    if ((su(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                wt = pn(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        wt = null;
      }
    } else wt = _t ? pn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function uu() {
    for (var e = wt; e; ) e = pn(e.nextSibling);
  }
  function or() {
    (wt = _t = null), (je = !1);
  }
  function Ro(e) {
    zt === null ? (zt = [e]) : zt.push(e);
  }
  var jd = j.ReactCurrentBatchConfig;
  function Vr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(a(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(a(147, e));
        var l = r,
          o = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (u) {
              var f = l.refs;
              u === null ? delete f[o] : (f[o] = u);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error(a(284));
      if (!n._owner) throw Error(a(290, e));
    }
    return e;
  }
  function Hl(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        a(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function cu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function fu(e) {
    function t(g, v) {
      if (e) {
        var k = g.deletions;
        k === null ? ((g.deletions = [v]), (g.flags |= 16)) : k.push(v);
      }
    }
    function n(g, v) {
      if (!e) return null;
      for (; v !== null; ) t(g, v), (v = v.sibling);
      return null;
    }
    function r(g, v) {
      for (g = new Map(); v !== null; )
        v.key !== null ? g.set(v.key, v) : g.set(v.index, v), (v = v.sibling);
      return g;
    }
    function l(g, v) {
      return (g = En(g, v)), (g.index = 0), (g.sibling = null), g;
    }
    function o(g, v, k) {
      return (
        (g.index = k),
        e
          ? ((k = g.alternate),
            k !== null
              ? ((k = k.index), k < v ? ((g.flags |= 2), v) : k)
              : ((g.flags |= 2), v))
          : ((g.flags |= 1048576), v)
      );
    }
    function u(g) {
      return e && g.alternate === null && (g.flags |= 2), g;
    }
    function f(g, v, k, A) {
      return v === null || v.tag !== 6
        ? ((v = Sa(k, g.mode, A)), (v.return = g), v)
        : ((v = l(v, k)), (v.return = g), v);
    }
    function d(g, v, k, A) {
      var ee = k.type;
      return ee === ne
        ? R(g, v, k.props.children, A, k.key)
        : v !== null &&
          (v.elementType === ee ||
            (typeof ee == "object" &&
              ee !== null &&
              ee.$$typeof === Pe &&
              cu(ee) === v.type))
        ? ((A = l(v, k.props)), (A.ref = Vr(g, v, k)), (A.return = g), A)
        : ((A = di(k.type, k.key, k.props, null, g.mode, A)),
          (A.ref = Vr(g, v, k)),
          (A.return = g),
          A);
    }
    function x(g, v, k, A) {
      return v === null ||
        v.tag !== 4 ||
        v.stateNode.containerInfo !== k.containerInfo ||
        v.stateNode.implementation !== k.implementation
        ? ((v = _a(k, g.mode, A)), (v.return = g), v)
        : ((v = l(v, k.children || [])), (v.return = g), v);
    }
    function R(g, v, k, A, ee) {
      return v === null || v.tag !== 7
        ? ((v = Un(k, g.mode, A, ee)), (v.return = g), v)
        : ((v = l(v, k)), (v.return = g), v);
    }
    function L(g, v, k) {
      if ((typeof v == "string" && v !== "") || typeof v == "number")
        return (v = Sa("" + v, g.mode, k)), (v.return = g), v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case J:
            return (
              (k = di(v.type, v.key, v.props, null, g.mode, k)),
              (k.ref = Vr(g, null, v)),
              (k.return = g),
              k
            );
          case ce:
            return (v = _a(v, g.mode, k)), (v.return = g), v;
          case Pe:
            var A = v._init;
            return L(g, A(v._payload), k);
        }
        if (E(v) || re(v))
          return (v = Un(v, g.mode, k, null)), (v.return = g), v;
        Hl(g, v);
      }
      return null;
    }
    function P(g, v, k, A) {
      var ee = v !== null ? v.key : null;
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return ee !== null ? null : f(g, v, "" + k, A);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case J:
            return k.key === ee ? d(g, v, k, A) : null;
          case ce:
            return k.key === ee ? x(g, v, k, A) : null;
          case Pe:
            return (ee = k._init), P(g, v, ee(k._payload), A);
        }
        if (E(k) || re(k)) return ee !== null ? null : R(g, v, k, A, null);
        Hl(g, k);
      }
      return null;
    }
    function Y(g, v, k, A, ee) {
      if ((typeof A == "string" && A !== "") || typeof A == "number")
        return (g = g.get(k) || null), f(v, g, "" + A, ee);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case J:
            return (
              (g = g.get(A.key === null ? k : A.key) || null), d(v, g, A, ee)
            );
          case ce:
            return (
              (g = g.get(A.key === null ? k : A.key) || null), x(v, g, A, ee)
            );
          case Pe:
            var oe = A._init;
            return Y(g, v, k, oe(A._payload), ee);
        }
        if (E(A) || re(A)) return (g = g.get(k) || null), R(v, g, A, ee, null);
        Hl(v, A);
      }
      return null;
    }
    function K(g, v, k, A) {
      for (
        var ee = null, oe = null, ae = v, ue = (v = 0), et = null;
        ae !== null && ue < k.length;
        ue++
      ) {
        ae.index > ue ? ((et = ae), (ae = null)) : (et = ae.sibling);
        var Te = P(g, ae, k[ue], A);
        if (Te === null) {
          ae === null && (ae = et);
          break;
        }
        e && ae && Te.alternate === null && t(g, ae),
          (v = o(Te, v, ue)),
          oe === null ? (ee = Te) : (oe.sibling = Te),
          (oe = Te),
          (ae = et);
      }
      if (ue === k.length) return n(g, ae), je && zn(g, ue), ee;
      if (ae === null) {
        for (; ue < k.length; ue++)
          (ae = L(g, k[ue], A)),
            ae !== null &&
              ((v = o(ae, v, ue)),
              oe === null ? (ee = ae) : (oe.sibling = ae),
              (oe = ae));
        return je && zn(g, ue), ee;
      }
      for (ae = r(g, ae); ue < k.length; ue++)
        (et = Y(ae, g, ue, k[ue], A)),
          et !== null &&
            (e &&
              et.alternate !== null &&
              ae.delete(et.key === null ? ue : et.key),
            (v = o(et, v, ue)),
            oe === null ? (ee = et) : (oe.sibling = et),
            (oe = et));
      return (
        e &&
          ae.forEach(function (Tn) {
            return t(g, Tn);
          }),
        je && zn(g, ue),
        ee
      );
    }
    function q(g, v, k, A) {
      var ee = re(k);
      if (typeof ee != "function") throw Error(a(150));
      if (((k = ee.call(k)), k == null)) throw Error(a(151));
      for (
        var oe = (ee = null), ae = v, ue = (v = 0), et = null, Te = k.next();
        ae !== null && !Te.done;
        ue++, Te = k.next()
      ) {
        ae.index > ue ? ((et = ae), (ae = null)) : (et = ae.sibling);
        var Tn = P(g, ae, Te.value, A);
        if (Tn === null) {
          ae === null && (ae = et);
          break;
        }
        e && ae && Tn.alternate === null && t(g, ae),
          (v = o(Tn, v, ue)),
          oe === null ? (ee = Tn) : (oe.sibling = Tn),
          (oe = Tn),
          (ae = et);
      }
      if (Te.done) return n(g, ae), je && zn(g, ue), ee;
      if (ae === null) {
        for (; !Te.done; ue++, Te = k.next())
          (Te = L(g, Te.value, A)),
            Te !== null &&
              ((v = o(Te, v, ue)),
              oe === null ? (ee = Te) : (oe.sibling = Te),
              (oe = Te));
        return je && zn(g, ue), ee;
      }
      for (ae = r(g, ae); !Te.done; ue++, Te = k.next())
        (Te = Y(ae, g, ue, Te.value, A)),
          Te !== null &&
            (e &&
              Te.alternate !== null &&
              ae.delete(Te.key === null ? ue : Te.key),
            (v = o(Te, v, ue)),
            oe === null ? (ee = Te) : (oe.sibling = Te),
            (oe = Te));
      return (
        e &&
          ae.forEach(function (vp) {
            return t(g, vp);
          }),
        je && zn(g, ue),
        ee
      );
    }
    function Ye(g, v, k, A) {
      if (
        (typeof k == "object" &&
          k !== null &&
          k.type === ne &&
          k.key === null &&
          (k = k.props.children),
        typeof k == "object" && k !== null)
      ) {
        switch (k.$$typeof) {
          case J:
            e: {
              for (var ee = k.key, oe = v; oe !== null; ) {
                if (oe.key === ee) {
                  if (((ee = k.type), ee === ne)) {
                    if (oe.tag === 7) {
                      n(g, oe.sibling),
                        (v = l(oe, k.props.children)),
                        (v.return = g),
                        (g = v);
                      break e;
                    }
                  } else if (
                    oe.elementType === ee ||
                    (typeof ee == "object" &&
                      ee !== null &&
                      ee.$$typeof === Pe &&
                      cu(ee) === oe.type)
                  ) {
                    n(g, oe.sibling),
                      (v = l(oe, k.props)),
                      (v.ref = Vr(g, oe, k)),
                      (v.return = g),
                      (g = v);
                    break e;
                  }
                  n(g, oe);
                  break;
                } else t(g, oe);
                oe = oe.sibling;
              }
              k.type === ne
                ? ((v = Un(k.props.children, g.mode, A, k.key)),
                  (v.return = g),
                  (g = v))
                : ((A = di(k.type, k.key, k.props, null, g.mode, A)),
                  (A.ref = Vr(g, v, k)),
                  (A.return = g),
                  (g = A));
            }
            return u(g);
          case ce:
            e: {
              for (oe = k.key; v !== null; ) {
                if (v.key === oe)
                  if (
                    v.tag === 4 &&
                    v.stateNode.containerInfo === k.containerInfo &&
                    v.stateNode.implementation === k.implementation
                  ) {
                    n(g, v.sibling),
                      (v = l(v, k.children || [])),
                      (v.return = g),
                      (g = v);
                    break e;
                  } else {
                    n(g, v);
                    break;
                  }
                else t(g, v);
                v = v.sibling;
              }
              (v = _a(k, g.mode, A)), (v.return = g), (g = v);
            }
            return u(g);
          case Pe:
            return (oe = k._init), Ye(g, v, oe(k._payload), A);
        }
        if (E(k)) return K(g, v, k, A);
        if (re(k)) return q(g, v, k, A);
        Hl(g, k);
      }
      return (typeof k == "string" && k !== "") || typeof k == "number"
        ? ((k = "" + k),
          v !== null && v.tag === 6
            ? (n(g, v.sibling), (v = l(v, k)), (v.return = g), (g = v))
            : (n(g, v), (v = Sa(k, g.mode, A)), (v.return = g), (g = v)),
          u(g))
        : n(g, v);
    }
    return Ye;
  }
  var ar = fu(!0),
    du = fu(!1),
    $l = yn(null),
    Wl = null,
    sr = null,
    Do = null;
  function Lo() {
    Do = sr = Wl = null;
  }
  function Bo(e) {
    var t = $l.current;
    Fe($l), (e._currentValue = t);
  }
  function zo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function ur(e, t) {
    (Wl = e),
      (Do = sr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (yt = !0), (e.firstContext = null));
  }
  function Ct(e) {
    var t = e._currentValue;
    if (Do !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), sr === null)) {
        if (Wl === null) throw Error(a(308));
        (sr = e), (Wl.dependencies = { lanes: 0, firstContext: e });
      } else sr = sr.next = e;
    return t;
  }
  var An = null;
  function Ao(e) {
    An === null ? (An = [e]) : An.push(e);
  }
  function pu(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Ao(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      en(e, r)
    );
  }
  function en(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var hn = !1;
  function Oo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function yu(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function tn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function gn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), Ee & 2)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        en(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Ao(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      en(e, n)
    );
  }
  function Yl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ki(e, n);
    }
  }
  function mu(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var u = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          o === null ? (l = o = u) : (o = o.next = u), (n = n.next);
        } while (n !== null);
        o === null ? (l = o = t) : (o = o.next = t);
      } else l = o = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function Gl(e, t, n, r) {
    var l = e.updateQueue;
    hn = !1;
    var o = l.firstBaseUpdate,
      u = l.lastBaseUpdate,
      f = l.shared.pending;
    if (f !== null) {
      l.shared.pending = null;
      var d = f,
        x = d.next;
      (d.next = null), u === null ? (o = x) : (u.next = x), (u = d);
      var R = e.alternate;
      R !== null &&
        ((R = R.updateQueue),
        (f = R.lastBaseUpdate),
        f !== u &&
          (f === null ? (R.firstBaseUpdate = x) : (f.next = x),
          (R.lastBaseUpdate = d)));
    }
    if (o !== null) {
      var L = l.baseState;
      (u = 0), (R = x = d = null), (f = o);
      do {
        var P = f.lane,
          Y = f.eventTime;
        if ((r & P) === P) {
          R !== null &&
            (R = R.next =
              {
                eventTime: Y,
                lane: 0,
                tag: f.tag,
                payload: f.payload,
                callback: f.callback,
                next: null,
              });
          e: {
            var K = e,
              q = f;
            switch (((P = t), (Y = n), q.tag)) {
              case 1:
                if (((K = q.payload), typeof K == "function")) {
                  L = K.call(Y, L, P);
                  break e;
                }
                L = K;
                break e;
              case 3:
                K.flags = (K.flags & -65537) | 128;
              case 0:
                if (
                  ((K = q.payload),
                  (P = typeof K == "function" ? K.call(Y, L, P) : K),
                  P == null)
                )
                  break e;
                L = W({}, L, P);
                break e;
              case 2:
                hn = !0;
            }
          }
          f.callback !== null &&
            f.lane !== 0 &&
            ((e.flags |= 64),
            (P = l.effects),
            P === null ? (l.effects = [f]) : P.push(f));
        } else
          (Y = {
            eventTime: Y,
            lane: P,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            R === null ? ((x = R = Y), (d = L)) : (R = R.next = Y),
            (u |= P);
        if (((f = f.next), f === null)) {
          if (((f = l.shared.pending), f === null)) break;
          (P = f),
            (f = P.next),
            (P.next = null),
            (l.lastBaseUpdate = P),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (R === null && (d = L),
        (l.baseState = d),
        (l.firstBaseUpdate = x),
        (l.lastBaseUpdate = R),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (u |= l.lane), (l = l.next);
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      (In |= u), (e.lanes = u), (e.memoizedState = L);
    }
  }
  function vu(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(a(191, l));
          l.call(r);
        }
      }
  }
  var Ur = {},
    Ut = yn(Ur),
    Hr = yn(Ur),
    $r = yn(Ur);
  function On(e) {
    if (e === Ur) throw Error(a(174));
    return e;
  }
  function Fo(e, t) {
    switch ((ze($r, t), ze(Hr, e), ze(Ut, Ur), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ue(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Ue(t, e));
    }
    Fe(Ut), ze(Ut, t);
  }
  function cr() {
    Fe(Ut), Fe(Hr), Fe($r);
  }
  function hu(e) {
    On($r.current);
    var t = On(Ut.current),
      n = Ue(t, e.type);
    t !== n && (ze(Hr, e), ze(Ut, n));
  }
  function Io(e) {
    Hr.current === e && (Fe(Ut), Fe(Hr));
  }
  var Me = yn(0);
  function Ql(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var jo = [];
  function Mo() {
    for (var e = 0; e < jo.length; e++)
      jo[e]._workInProgressVersionPrimary = null;
    jo.length = 0;
  }
  var Kl = j.ReactCurrentDispatcher,
    Vo = j.ReactCurrentBatchConfig,
    Fn = 0,
    Ve = null,
    Xe = null,
    Je = null,
    Xl = !1,
    Wr = !1,
    Yr = 0,
    Md = 0;
  function lt() {
    throw Error(a(321));
  }
  function Uo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Bt(e[n], t[n])) return !1;
    return !0;
  }
  function Ho(e, t, n, r, l, o) {
    if (
      ((Fn = o),
      (Ve = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Kl.current = e === null || e.memoizedState === null ? $d : Wd),
      (e = n(r, l)),
      Wr)
    ) {
      o = 0;
      do {
        if (((Wr = !1), (Yr = 0), 25 <= o)) throw Error(a(301));
        (o += 1),
          (Je = Xe = null),
          (t.updateQueue = null),
          (Kl.current = Yd),
          (e = n(r, l));
      } while (Wr);
    }
    if (
      ((Kl.current = Jl),
      (t = Xe !== null && Xe.next !== null),
      (Fn = 0),
      (Je = Xe = Ve = null),
      (Xl = !1),
      t)
    )
      throw Error(a(300));
    return e;
  }
  function $o() {
    var e = Yr !== 0;
    return (Yr = 0), e;
  }
  function Ht() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Je === null ? (Ve.memoizedState = Je = e) : (Je = Je.next = e), Je;
  }
  function Nt() {
    if (Xe === null) {
      var e = Ve.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Xe.next;
    var t = Je === null ? Ve.memoizedState : Je.next;
    if (t !== null) (Je = t), (Xe = e);
    else {
      if (e === null) throw Error(a(310));
      (Xe = e),
        (e = {
          memoizedState: Xe.memoizedState,
          baseState: Xe.baseState,
          baseQueue: Xe.baseQueue,
          queue: Xe.queue,
          next: null,
        }),
        Je === null ? (Ve.memoizedState = Je = e) : (Je = Je.next = e);
    }
    return Je;
  }
  function Gr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Wo(e) {
    var t = Nt(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = Xe,
      l = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var u = l.next;
        (l.next = o.next), (o.next = u);
      }
      (r.baseQueue = l = o), (n.pending = null);
    }
    if (l !== null) {
      (o = l.next), (r = r.baseState);
      var f = (u = null),
        d = null,
        x = o;
      do {
        var R = x.lane;
        if ((Fn & R) === R)
          d !== null &&
            (d = d.next =
              {
                lane: 0,
                action: x.action,
                hasEagerState: x.hasEagerState,
                eagerState: x.eagerState,
                next: null,
              }),
            (r = x.hasEagerState ? x.eagerState : e(r, x.action));
        else {
          var L = {
            lane: R,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null,
          };
          d === null ? ((f = d = L), (u = r)) : (d = d.next = L),
            (Ve.lanes |= R),
            (In |= R);
        }
        x = x.next;
      } while (x !== null && x !== o);
      d === null ? (u = r) : (d.next = f),
        Bt(r, t.memoizedState) || (yt = !0),
        (t.memoizedState = r),
        (t.baseState = u),
        (t.baseQueue = d),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (o = l.lane), (Ve.lanes |= o), (In |= o), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Yo(e) {
    var t = Nt(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = (l = l.next);
      do (o = e(o, u.action)), (u = u.next);
      while (u !== l);
      Bt(o, t.memoizedState) || (yt = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, r];
  }
  function gu() {}
  function ku(e, t) {
    var n = Ve,
      r = Nt(),
      l = t(),
      o = !Bt(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (yt = !0)),
      (r = r.queue),
      Go(wu.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Je !== null && Je.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Qr(9, _u.bind(null, n, r, l, t), void 0, null),
        be === null)
      )
        throw Error(a(349));
      Fn & 30 || Su(n, t, l);
    }
    return l;
  }
  function Su(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ve.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ve.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function _u(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), xu(t) && Eu(e);
  }
  function wu(e, t, n) {
    return n(function () {
      xu(t) && Eu(e);
    });
  }
  function xu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Bt(e, n);
    } catch {
      return !0;
    }
  }
  function Eu(e) {
    var t = en(e, 1);
    t !== null && It(t, e, 1, -1);
  }
  function Tu(e) {
    var t = Ht();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Hd.bind(null, Ve, e)),
      [t.memoizedState, e]
    );
  }
  function Qr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Ve.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ve.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Cu() {
    return Nt().memoizedState;
  }
  function ql(e, t, n, r) {
    var l = Ht();
    (Ve.flags |= e),
      (l.memoizedState = Qr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function Zl(e, t, n, r) {
    var l = Nt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Xe !== null) {
      var u = Xe.memoizedState;
      if (((o = u.destroy), r !== null && Uo(r, u.deps))) {
        l.memoizedState = Qr(t, n, o, r);
        return;
      }
    }
    (Ve.flags |= e), (l.memoizedState = Qr(1 | t, n, o, r));
  }
  function Nu(e, t) {
    return ql(8390656, 8, e, t);
  }
  function Go(e, t) {
    return Zl(2048, 8, e, t);
  }
  function Pu(e, t) {
    return Zl(4, 2, e, t);
  }
  function Ru(e, t) {
    return Zl(4, 4, e, t);
  }
  function Du(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Lu(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Zl(4, 4, Du.bind(null, t, e), n)
    );
  }
  function Qo() {}
  function Bu(e, t) {
    var n = Nt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Uo(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function zu(e, t) {
    var n = Nt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Uo(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Au(e, t, n) {
    return Fn & 21
      ? (Bt(n, t) ||
          ((n = cs()), (Ve.lanes |= n), (In |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (yt = !0)), (e.memoizedState = n));
  }
  function Vd(e, t) {
    var n = De;
    (De = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Vo.transition;
    Vo.transition = {};
    try {
      e(!1), t();
    } finally {
      (De = n), (Vo.transition = r);
    }
  }
  function Ou() {
    return Nt().memoizedState;
  }
  function Ud(e, t, n) {
    var r = wn(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Fu(e))
    )
      Iu(t, n);
    else if (((n = pu(e, t, n, r)), n !== null)) {
      var l = ut();
      It(n, e, r, l), ju(n, t, r);
    }
  }
  function Hd(e, t, n) {
    var r = wn(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Fu(e)) Iu(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var u = t.lastRenderedState,
            f = o(u, n);
          if (((l.hasEagerState = !0), (l.eagerState = f), Bt(f, u))) {
            var d = t.interleaved;
            d === null
              ? ((l.next = l), Ao(t))
              : ((l.next = d.next), (d.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = pu(e, t, l, r)),
        n !== null && ((l = ut()), It(n, e, r, l), ju(n, t, r));
    }
  }
  function Fu(e) {
    var t = e.alternate;
    return e === Ve || (t !== null && t === Ve);
  }
  function Iu(e, t) {
    Wr = Xl = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function ju(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ki(e, n);
    }
  }
  var Jl = {
      readContext: Ct,
      useCallback: lt,
      useContext: lt,
      useEffect: lt,
      useImperativeHandle: lt,
      useInsertionEffect: lt,
      useLayoutEffect: lt,
      useMemo: lt,
      useReducer: lt,
      useRef: lt,
      useState: lt,
      useDebugValue: lt,
      useDeferredValue: lt,
      useTransition: lt,
      useMutableSource: lt,
      useSyncExternalStore: lt,
      useId: lt,
      unstable_isNewReconciler: !1,
    },
    $d = {
      readContext: Ct,
      useCallback: function (e, t) {
        return (Ht().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Ct,
      useEffect: Nu,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          ql(4194308, 4, Du.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return ql(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ql(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Ht();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Ht();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = Ud.bind(null, Ve, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ht();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Tu,
      useDebugValue: Qo,
      useDeferredValue: function (e) {
        return (Ht().memoizedState = e);
      },
      useTransition: function () {
        var e = Tu(!1),
          t = e[0];
        return (e = Vd.bind(null, e[1])), (Ht().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Ve,
          l = Ht();
        if (je) {
          if (n === void 0) throw Error(a(407));
          n = n();
        } else {
          if (((n = t()), be === null)) throw Error(a(349));
          Fn & 30 || Su(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          Nu(wu.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          Qr(9, _u.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Ht(),
          t = be.identifierPrefix;
        if (je) {
          var n = bt,
            r = Jt;
          (n = (r & ~(1 << (32 - Lt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Yr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = Md++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Wd = {
      readContext: Ct,
      useCallback: Bu,
      useContext: Ct,
      useEffect: Go,
      useImperativeHandle: Lu,
      useInsertionEffect: Pu,
      useLayoutEffect: Ru,
      useMemo: zu,
      useReducer: Wo,
      useRef: Cu,
      useState: function () {
        return Wo(Gr);
      },
      useDebugValue: Qo,
      useDeferredValue: function (e) {
        var t = Nt();
        return Au(t, Xe.memoizedState, e);
      },
      useTransition: function () {
        var e = Wo(Gr)[0],
          t = Nt().memoizedState;
        return [e, t];
      },
      useMutableSource: gu,
      useSyncExternalStore: ku,
      useId: Ou,
      unstable_isNewReconciler: !1,
    },
    Yd = {
      readContext: Ct,
      useCallback: Bu,
      useContext: Ct,
      useEffect: Go,
      useImperativeHandle: Lu,
      useInsertionEffect: Pu,
      useLayoutEffect: Ru,
      useMemo: zu,
      useReducer: Yo,
      useRef: Cu,
      useState: function () {
        return Yo(Gr);
      },
      useDebugValue: Qo,
      useDeferredValue: function (e) {
        var t = Nt();
        return Xe === null ? (t.memoizedState = e) : Au(t, Xe.memoizedState, e);
      },
      useTransition: function () {
        var e = Yo(Gr)[0],
          t = Nt().memoizedState;
        return [e, t];
      },
      useMutableSource: gu,
      useSyncExternalStore: ku,
      useId: Ou,
      unstable_isNewReconciler: !1,
    };
  function At(e, t) {
    if (e && e.defaultProps) {
      (t = W({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ko(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : W({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var bl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Rn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = ut(),
        l = wn(e),
        o = tn(r, l);
      (o.payload = t),
        n != null && (o.callback = n),
        (t = gn(e, o, l)),
        t !== null && (It(t, e, l, r), Yl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = ut(),
        l = wn(e),
        o = tn(r, l);
      (o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = gn(e, o, l)),
        t !== null && (It(t, e, l, r), Yl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = ut(),
        r = wn(e),
        l = tn(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = gn(e, l, r)),
        t !== null && (It(t, e, r, n), Yl(t, e, r));
    },
  };
  function Mu(e, t, n, r, l, o, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, u)
        : t.prototype && t.prototype.isPureReactComponent
        ? !zr(n, r) || !zr(l, o)
        : !0
    );
  }
  function Vu(e, t, n) {
    var r = !1,
      l = mn,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = Ct(o))
        : ((l = pt(t) ? Ln : rt.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? rr(e, l) : mn)),
      (t = new t(n, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = bl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function Uu(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && bl.enqueueReplaceState(t, t.state, null);
  }
  function Xo(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Oo(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
      ? (l.context = Ct(o))
      : ((o = pt(t) ? Ln : rt.current), (l.context = rr(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (Ko(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && bl.enqueueReplaceState(l, l.state, null),
        Gl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function fr(e, t) {
    try {
      var n = "",
        r = t;
      do (n += _e(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (o) {
      l =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function qo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Zo(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Gd = typeof WeakMap == "function" ? WeakMap : Map;
  function Hu(e, t, n) {
    (n = tn(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        oi || ((oi = !0), (da = r)), Zo(e, t);
      }),
      n
    );
  }
  function $u(e, t, n) {
    (n = tn(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Zo(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (n.callback = function () {
          Zo(e, t),
            typeof r != "function" &&
              (Sn === null ? (Sn = new Set([this])) : Sn.add(this));
          var u = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: u !== null ? u : "",
          });
        }),
      n
    );
  }
  function Wu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Gd();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = op.bind(null, e, t, n)), t.then(e, e));
  }
  function Yu(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Gu(e, t, n, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = tn(-1, 1)), (t.tag = 2), gn(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var Qd = j.ReactCurrentOwner,
    yt = !1;
  function st(e, t, n, r) {
    t.child = e === null ? du(t, null, n, r) : ar(t, e.child, n, r);
  }
  function Qu(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      ur(t, l),
      (r = Ho(e, t, n, r, o, l)),
      (n = $o()),
      e !== null && !yt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          nn(e, t, l))
        : (je && n && To(t), (t.flags |= 1), st(e, t, r, l), t.child)
    );
  }
  function Ku(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !ka(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), Xu(e, t, o, r, l))
        : ((e = di(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), !(e.lanes & l))) {
      var u = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : zr), n(u, r) && e.ref === t.ref)
      )
        return nn(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = En(o, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Xu(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (zr(o, r) && e.ref === t.ref)
        if (((yt = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          e.flags & 131072 && (yt = !0);
        else return (t.lanes = e.lanes), nn(e, t, l);
    }
    return Jo(e, t, n, r, l);
  }
  function qu(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ze(pr, xt),
          (xt |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ze(pr, xt),
            (xt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = o !== null ? o.baseLanes : n),
          ze(pr, xt),
          (xt |= r);
      }
    else
      o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ze(pr, xt),
        (xt |= r);
    return st(e, t, l, n), t.child;
  }
  function Zu(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Jo(e, t, n, r, l) {
    var o = pt(n) ? Ln : rt.current;
    return (
      (o = rr(t, o)),
      ur(t, l),
      (n = Ho(e, t, n, r, o, l)),
      (r = $o()),
      e !== null && !yt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          nn(e, t, l))
        : (je && r && To(t), (t.flags |= 1), st(e, t, n, l), t.child)
    );
  }
  function Ju(e, t, n, r, l) {
    if (pt(n)) {
      var o = !0;
      Il(t);
    } else o = !1;
    if ((ur(t, l), t.stateNode === null))
      ti(e, t), Vu(t, n, r), Xo(t, n, r, l), (r = !0);
    else if (e === null) {
      var u = t.stateNode,
        f = t.memoizedProps;
      u.props = f;
      var d = u.context,
        x = n.contextType;
      typeof x == "object" && x !== null
        ? (x = Ct(x))
        : ((x = pt(n) ? Ln : rt.current), (x = rr(t, x)));
      var R = n.getDerivedStateFromProps,
        L =
          typeof R == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function";
      L ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((f !== r || d !== x) && Uu(t, u, r, x)),
        (hn = !1);
      var P = t.memoizedState;
      (u.state = P),
        Gl(t, r, u, l),
        (d = t.memoizedState),
        f !== r || P !== d || dt.current || hn
          ? (typeof R == "function" && (Ko(t, n, R, r), (d = t.memoizedState)),
            (f = hn || Mu(t, n, f, r, P, d, x))
              ? (L ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = d)),
            (u.props = r),
            (u.state = d),
            (u.context = x),
            (r = f))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (u = t.stateNode),
        yu(e, t),
        (f = t.memoizedProps),
        (x = t.type === t.elementType ? f : At(t.type, f)),
        (u.props = x),
        (L = t.pendingProps),
        (P = u.context),
        (d = n.contextType),
        typeof d == "object" && d !== null
          ? (d = Ct(d))
          : ((d = pt(n) ? Ln : rt.current), (d = rr(t, d)));
      var Y = n.getDerivedStateFromProps;
      (R =
        typeof Y == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function") ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((f !== L || P !== d) && Uu(t, u, r, d)),
        (hn = !1),
        (P = t.memoizedState),
        (u.state = P),
        Gl(t, r, u, l);
      var K = t.memoizedState;
      f !== L || P !== K || dt.current || hn
        ? (typeof Y == "function" && (Ko(t, n, Y, r), (K = t.memoizedState)),
          (x = hn || Mu(t, n, x, r, P, K, d) || !1)
            ? (R ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(r, K, d),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(r, K, d)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (f === e.memoizedProps && P === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (f === e.memoizedProps && P === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = K)),
          (u.props = r),
          (u.state = K),
          (u.context = d),
          (r = x))
        : (typeof u.componentDidUpdate != "function" ||
            (f === e.memoizedProps && P === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (f === e.memoizedProps && P === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return bo(e, t, n, r, o, l);
  }
  function bo(e, t, n, r, l, o) {
    Zu(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return l && ru(t, n, !1), nn(e, t, o);
    (r = t.stateNode), (Qd.current = t);
    var f =
      u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && u
        ? ((t.child = ar(t, e.child, null, o)), (t.child = ar(t, null, f, o)))
        : st(e, t, f, o),
      (t.memoizedState = r.state),
      l && ru(t, n, !0),
      t.child
    );
  }
  function bu(e) {
    var t = e.stateNode;
    t.pendingContext
      ? tu(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && tu(e, t.context, !1),
      Fo(e, t.containerInfo);
  }
  function ec(e, t, n, r, l) {
    return or(), Ro(l), (t.flags |= 256), st(e, t, n, r), t.child;
  }
  var ea = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ta(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function tc(e, t, n) {
    var r = t.pendingProps,
      l = Me.current,
      o = !1,
      u = (t.flags & 128) !== 0,
      f;
    if (
      ((f = u) ||
        (f = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      f
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      ze(Me, l & 1),
      e === null)
    )
      return (
        Po(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((u = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (u = { mode: "hidden", children: u }),
                !(r & 1) && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = u))
                  : (o = pi(u, r, 0, null)),
                (e = Un(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = ta(n)),
                (t.memoizedState = ea),
                e)
              : na(t, u))
      );
    if (((l = e.memoizedState), l !== null && ((f = l.dehydrated), f !== null)))
      return Kd(e, t, u, r, f, l, n);
    if (o) {
      (o = r.fallback), (u = t.mode), (l = e.child), (f = l.sibling);
      var d = { mode: "hidden", children: r.children };
      return (
        !(u & 1) && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = d),
            (t.deletions = null))
          : ((r = En(l, d)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        f !== null ? (o = En(f, o)) : ((o = Un(o, u, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (u = e.child.memoizedState),
        (u =
          u === null
            ? ta(n)
            : {
                baseLanes: u.baseLanes | n,
                cachePool: null,
                transitions: u.transitions,
              }),
        (o.memoizedState = u),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = ea),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = En(o, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function na(e, t) {
    return (
      (t = pi({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function ei(e, t, n, r) {
    return (
      r !== null && Ro(r),
      ar(t, e.child, null, n),
      (e = na(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Kd(e, t, n, r, l, o, u) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = qo(Error(a(422)))), ei(e, t, u, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = pi({ mode: "visible", children: r.children }, l, 0, null)),
          (o = Un(o, l, u, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && ar(t, e.child, null, u),
          (t.child.memoizedState = ta(u)),
          (t.memoizedState = ea),
          o);
    if (!(t.mode & 1)) return ei(e, t, u, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var f = r.dgst;
      return (
        (r = f), (o = Error(a(419))), (r = qo(o, r, void 0)), ei(e, t, u, r)
      );
    }
    if (((f = (u & e.childLanes) !== 0), yt || f)) {
      if (((r = be), r !== null)) {
        switch (u & -u) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | u) ? 0 : l),
          l !== 0 &&
            l !== o.retryLane &&
            ((o.retryLane = l), en(e, l), It(r, e, l, -1));
      }
      return ga(), (r = qo(Error(a(421)))), ei(e, t, u, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = ap.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (wt = pn(l.nextSibling)),
        (_t = t),
        (je = !0),
        (zt = null),
        e !== null &&
          ((Et[Tt++] = Jt),
          (Et[Tt++] = bt),
          (Et[Tt++] = Bn),
          (Jt = e.id),
          (bt = e.overflow),
          (Bn = t)),
        (t = na(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function nc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), zo(e.return, t, n);
  }
  function ra(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = l));
  }
  function rc(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((st(e, t, r.children, n), (r = Me.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && nc(e, n, t);
          else if (e.tag === 19) nc(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((ze(Me, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && Ql(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            ra(t, !1, l, n, o);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && Ql(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          ra(t, !0, n, null, o);
          break;
        case "together":
          ra(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function ti(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function nn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (In |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (
        e = t.child, n = En(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = En(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Xd(e, t, n) {
    switch (t.tag) {
      case 3:
        bu(t), or();
        break;
      case 5:
        hu(t);
        break;
      case 1:
        pt(t.type) && Il(t);
        break;
      case 4:
        Fo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        ze($l, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ze(Me, Me.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? tc(e, t, n)
            : (ze(Me, Me.current & 1),
              (e = nn(e, t, n)),
              e !== null ? e.sibling : null);
        ze(Me, Me.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return rc(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ze(Me, Me.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), qu(e, t, n);
    }
    return nn(e, t, n);
  }
  var lc, la, ic, oc;
  (lc = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (la = function () {}),
    (ic = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), On(Ut.current);
        var o = null;
        switch (n) {
          case "input":
            (l = Yn(e, l)), (r = Yn(e, r)), (o = []);
            break;
          case "select":
            (l = W({}, l, { value: void 0 })),
              (r = W({}, r, { value: void 0 })),
              (o = []);
            break;
          case "textarea":
            (l = M(e, l)), (r = M(e, r)), (o = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = Al);
        }
        Ii(n, r);
        var u;
        n = null;
        for (x in l)
          if (!r.hasOwnProperty(x) && l.hasOwnProperty(x) && l[x] != null)
            if (x === "style") {
              var f = l[x];
              for (u in f) f.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
            } else
              x !== "dangerouslySetInnerHTML" &&
                x !== "children" &&
                x !== "suppressContentEditableWarning" &&
                x !== "suppressHydrationWarning" &&
                x !== "autoFocus" &&
                (p.hasOwnProperty(x)
                  ? o || (o = [])
                  : (o = o || []).push(x, null));
        for (x in r) {
          var d = r[x];
          if (
            ((f = l != null ? l[x] : void 0),
            r.hasOwnProperty(x) && d !== f && (d != null || f != null))
          )
            if (x === "style")
              if (f) {
                for (u in f)
                  !f.hasOwnProperty(u) ||
                    (d && d.hasOwnProperty(u)) ||
                    (n || (n = {}), (n[u] = ""));
                for (u in d)
                  d.hasOwnProperty(u) &&
                    f[u] !== d[u] &&
                    (n || (n = {}), (n[u] = d[u]));
              } else n || (o || (o = []), o.push(x, n)), (n = d);
            else
              x === "dangerouslySetInnerHTML"
                ? ((d = d ? d.__html : void 0),
                  (f = f ? f.__html : void 0),
                  d != null && f !== d && (o = o || []).push(x, d))
                : x === "children"
                ? (typeof d != "string" && typeof d != "number") ||
                  (o = o || []).push(x, "" + d)
                : x !== "suppressContentEditableWarning" &&
                  x !== "suppressHydrationWarning" &&
                  (p.hasOwnProperty(x)
                    ? (d != null && x === "onScroll" && Oe("scroll", e),
                      o || f === d || (o = []))
                    : (o = o || []).push(x, d));
        }
        n && (o = o || []).push("style", n);
        var x = o;
        (t.updateQueue = x) && (t.flags |= 4);
      }
    }),
    (oc = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function Kr(e, t) {
    if (!je)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function it(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function qd(e, t, n) {
    var r = t.pendingProps;
    switch ((Co(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return it(t), null;
      case 1:
        return pt(t.type) && Fl(), it(t), null;
      case 3:
        return (
          (r = t.stateNode),
          cr(),
          Fe(dt),
          Fe(rt),
          Mo(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ul(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), zt !== null && (ma(zt), (zt = null)))),
          la(e, t),
          it(t),
          null
        );
      case 5:
        Io(t);
        var l = On($r.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          ic(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(a(166));
            return it(t), null;
          }
          if (((e = On(Ut.current)), Ul(t))) {
            (r = t.stateNode), (n = t.type);
            var o = t.memoizedProps;
            switch (((r[Vt] = t), (r[jr] = o), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                Oe("cancel", r), Oe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Oe("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Or.length; l++) Oe(Or[l], r);
                break;
              case "source":
                Oe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Oe("error", r), Oe("load", r);
                break;
              case "details":
                Oe("toggle", r);
                break;
              case "input":
                Ai(r, o), Oe("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!o.multiple }),
                  Oe("invalid", r);
                break;
              case "textarea":
                F(r, o), Oe("invalid", r);
            }
            Ii(n, o), (l = null);
            for (var u in o)
              if (o.hasOwnProperty(u)) {
                var f = o[u];
                u === "children"
                  ? typeof f == "string"
                    ? r.textContent !== f &&
                      (o.suppressHydrationWarning !== !0 &&
                        zl(r.textContent, f, e),
                      (l = ["children", f]))
                    : typeof f == "number" &&
                      r.textContent !== "" + f &&
                      (o.suppressHydrationWarning !== !0 &&
                        zl(r.textContent, f, e),
                      (l = ["children", "" + f]))
                  : p.hasOwnProperty(u) &&
                    f != null &&
                    u === "onScroll" &&
                    Oe("scroll", r);
              }
            switch (n) {
              case "input":
                Nn(r), y(r, o, !0);
                break;
              case "textarea":
                Nn(r), ye(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Al);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (u = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = $e(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = u.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = u.createElement(n, { is: r.is }))
                  : ((e = u.createElement(n)),
                    n === "select" &&
                      ((u = e),
                      r.multiple
                        ? (u.multiple = !0)
                        : r.size && (u.size = r.size)))
                : (e = u.createElementNS(e, n)),
              (e[Vt] = t),
              (e[jr] = r),
              lc(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((u = ji(n, r)), n)) {
                case "dialog":
                  Oe("cancel", e), Oe("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Oe("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Or.length; l++) Oe(Or[l], e);
                  l = r;
                  break;
                case "source":
                  Oe("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  Oe("error", e), Oe("load", e), (l = r);
                  break;
                case "details":
                  Oe("toggle", e), (l = r);
                  break;
                case "input":
                  Ai(e, r), (l = Yn(e, r)), Oe("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = W({}, r, { value: void 0 })),
                    Oe("invalid", e);
                  break;
                case "textarea":
                  F(e, r), (l = M(e, r)), Oe("invalid", e);
                  break;
                default:
                  l = r;
              }
              Ii(n, l), (f = l);
              for (o in f)
                if (f.hasOwnProperty(o)) {
                  var d = f[o];
                  o === "style"
                    ? fl(e, d)
                    : o === "dangerouslySetInnerHTML"
                    ? ((d = d ? d.__html : void 0), d != null && cl(e, d))
                    : o === "children"
                    ? typeof d == "string"
                      ? (n !== "textarea" || d !== "") && Kt(e, d)
                      : typeof d == "number" && Kt(e, "" + d)
                    : o !== "suppressContentEditableWarning" &&
                      o !== "suppressHydrationWarning" &&
                      o !== "autoFocus" &&
                      (p.hasOwnProperty(o)
                        ? d != null && o === "onScroll" && Oe("scroll", e)
                        : d != null && O(e, o, d, u));
                }
              switch (n) {
                case "input":
                  Nn(e), y(e, r, !1);
                  break;
                case "textarea":
                  Nn(e), ye(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + xe(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? U(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        U(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Al);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return it(t), null;
      case 6:
        if (e && t.stateNode != null) oc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(a(166));
          if (((n = On($r.current)), On(Ut.current), Ul(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Vt] = t),
              (o = r.nodeValue !== n) && ((e = _t), e !== null))
            )
              switch (e.tag) {
                case 3:
                  zl(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    zl(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Vt] = t),
              (t.stateNode = r);
        }
        return it(t), null;
      case 13:
        if (
          (Fe(Me),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (je && wt !== null && t.mode & 1 && !(t.flags & 128))
            uu(), or(), (t.flags |= 98560), (o = !1);
          else if (((o = Ul(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(a(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(a(317));
              o[Vt] = t;
            } else
              or(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            it(t), (o = !1);
          } else zt !== null && (ma(zt), (zt = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || Me.current & 1 ? qe === 0 && (qe = 3) : ga())),
            t.updateQueue !== null && (t.flags |= 4),
            it(t),
            null);
      case 4:
        return (
          cr(),
          la(e, t),
          e === null && Fr(t.stateNode.containerInfo),
          it(t),
          null
        );
      case 10:
        return Bo(t.type._context), it(t), null;
      case 17:
        return pt(t.type) && Fl(), it(t), null;
      case 19:
        if ((Fe(Me), (o = t.memoizedState), o === null)) return it(t), null;
        if (((r = (t.flags & 128) !== 0), (u = o.rendering), u === null))
          if (r) Kr(o, !1);
          else {
            if (qe !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((u = Ql(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      Kr(o, !1),
                      r = u.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (u = o.alternate),
                      u === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = u.childLanes),
                          (o.lanes = u.lanes),
                          (o.child = u.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = u.memoizedProps),
                          (o.memoizedState = u.memoizedState),
                          (o.updateQueue = u.updateQueue),
                          (o.type = u.type),
                          (e = u.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return ze(Me, (Me.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              We() > yr &&
              ((t.flags |= 128), (r = !0), Kr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Ql(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Kr(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !u.alternate &&
                  !je)
              )
                return it(t), null;
            } else
              2 * We() - o.renderingStartTime > yr &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Kr(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((n = o.last),
              n !== null ? (n.sibling = u) : (t.child = u),
              (o.last = u));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = We()),
            (t.sibling = null),
            (n = Me.current),
            ze(Me, r ? (n & 1) | 2 : n & 1),
            t)
          : (it(t), null);
      case 22:
      case 23:
        return (
          ha(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? xt & 1073741824 &&
              (it(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : it(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function Zd(e, t) {
    switch ((Co(t), t.tag)) {
      case 1:
        return (
          pt(t.type) && Fl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          cr(),
          Fe(dt),
          Fe(rt),
          Mo(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Io(t), null;
      case 13:
        if (
          (Fe(Me), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(a(340));
          or();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Fe(Me), null;
      case 4:
        return cr(), null;
      case 10:
        return Bo(t.type._context), null;
      case 22:
      case 23:
        return ha(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ni = !1,
    ot = !1,
    Jd = typeof WeakSet == "function" ? WeakSet : Set,
    G = null;
  function dr(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          He(e, t, r);
        }
      else n.current = null;
  }
  function ia(e, t, n) {
    try {
      n();
    } catch (r) {
      He(e, t, r);
    }
  }
  var ac = !1;
  function bd(e, t) {
    if (((ho = wl), (e = Ms()), so(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break e;
            }
            var u = 0,
              f = -1,
              d = -1,
              x = 0,
              R = 0,
              L = e,
              P = null;
            t: for (;;) {
              for (
                var Y;
                L !== n || (l !== 0 && L.nodeType !== 3) || (f = u + l),
                  L !== o || (r !== 0 && L.nodeType !== 3) || (d = u + r),
                  L.nodeType === 3 && (u += L.nodeValue.length),
                  (Y = L.firstChild) !== null;

              )
                (P = L), (L = Y);
              for (;;) {
                if (L === e) break t;
                if (
                  (P === n && ++x === l && (f = u),
                  P === o && ++R === r && (d = u),
                  (Y = L.nextSibling) !== null)
                )
                  break;
                (L = P), (P = L.parentNode);
              }
              L = Y;
            }
            n = f === -1 || d === -1 ? null : { start: f, end: d };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      go = { focusedElem: e, selectionRange: n }, wl = !1, G = t;
      G !== null;

    )
      if (((t = G), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (G = e);
      else
        for (; G !== null; ) {
          t = G;
          try {
            var K = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (K !== null) {
                    var q = K.memoizedProps,
                      Ye = K.memoizedState,
                      g = t.stateNode,
                      v = g.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? q : At(t.type, q),
                        Ye
                      );
                    g.__reactInternalSnapshotBeforeUpdate = v;
                  }
                  break;
                case 3:
                  var k = t.stateNode.containerInfo;
                  k.nodeType === 1
                    ? (k.textContent = "")
                    : k.nodeType === 9 &&
                      k.documentElement &&
                      k.removeChild(k.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(a(163));
              }
          } catch (A) {
            He(t, t.return, A);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (G = e);
            break;
          }
          G = t.return;
        }
    return (K = ac), (ac = !1), K;
  }
  function Xr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          (l.destroy = void 0), o !== void 0 && ia(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function ri(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function oa(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function sc(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), sc(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Vt],
          delete t[jr],
          delete t[wo],
          delete t[Od],
          delete t[Fd])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function uc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function cc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || uc(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function aa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Al));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (aa(e, t, n), e = e.sibling; e !== null; )
        aa(e, t, n), (e = e.sibling);
  }
  function sa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (sa(e, t, n), e = e.sibling; e !== null; )
        sa(e, t, n), (e = e.sibling);
  }
  var tt = null,
    Ot = !1;
  function kn(e, t, n) {
    for (n = n.child; n !== null; ) fc(e, t, n), (n = n.sibling);
  }
  function fc(e, t, n) {
    if (Mt && typeof Mt.onCommitFiberUnmount == "function")
      try {
        Mt.onCommitFiberUnmount(vl, n);
      } catch {}
    switch (n.tag) {
      case 5:
        ot || dr(n, t);
      case 6:
        var r = tt,
          l = Ot;
        (tt = null),
          kn(e, t, n),
          (tt = r),
          (Ot = l),
          tt !== null &&
            (Ot
              ? ((e = tt),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : tt.removeChild(n.stateNode));
        break;
      case 18:
        tt !== null &&
          (Ot
            ? ((e = tt),
              (n = n.stateNode),
              e.nodeType === 8
                ? _o(e.parentNode, n)
                : e.nodeType === 1 && _o(e, n),
              Nr(e))
            : _o(tt, n.stateNode));
        break;
      case 4:
        (r = tt),
          (l = Ot),
          (tt = n.stateNode.containerInfo),
          (Ot = !0),
          kn(e, t, n),
          (tt = r),
          (Ot = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !ot &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var o = l,
              u = o.destroy;
            (o = o.tag),
              u !== void 0 && (o & 2 || o & 4) && ia(n, t, u),
              (l = l.next);
          } while (l !== r);
        }
        kn(e, t, n);
        break;
      case 1:
        if (
          !ot &&
          (dr(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (f) {
            He(n, t, f);
          }
        kn(e, t, n);
        break;
      case 21:
        kn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((ot = (r = ot) || n.memoizedState !== null), kn(e, t, n), (ot = r))
          : kn(e, t, n);
        break;
      default:
        kn(e, t, n);
    }
  }
  function dc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Jd()),
        t.forEach(function (r) {
          var l = sp.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function Ft(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var o = e,
            u = t,
            f = u;
          e: for (; f !== null; ) {
            switch (f.tag) {
              case 5:
                (tt = f.stateNode), (Ot = !1);
                break e;
              case 3:
                (tt = f.stateNode.containerInfo), (Ot = !0);
                break e;
              case 4:
                (tt = f.stateNode.containerInfo), (Ot = !0);
                break e;
            }
            f = f.return;
          }
          if (tt === null) throw Error(a(160));
          fc(o, u, l), (tt = null), (Ot = !1);
          var d = l.alternate;
          d !== null && (d.return = null), (l.return = null);
        } catch (x) {
          He(l, t, x);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) pc(t, e), (t = t.sibling);
  }
  function pc(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Ft(t, e), $t(e), r & 4)) {
          try {
            Xr(3, e, e.return), ri(3, e);
          } catch (q) {
            He(e, e.return, q);
          }
          try {
            Xr(5, e, e.return);
          } catch (q) {
            He(e, e.return, q);
          }
        }
        break;
      case 1:
        Ft(t, e), $t(e), r & 512 && n !== null && dr(n, n.return);
        break;
      case 5:
        if (
          (Ft(t, e),
          $t(e),
          r & 512 && n !== null && dr(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Kt(l, "");
          } catch (q) {
            He(e, e.return, q);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            u = n !== null ? n.memoizedProps : o,
            f = e.type,
            d = e.updateQueue;
          if (((e.updateQueue = null), d !== null))
            try {
              f === "input" && o.type === "radio" && o.name != null && Oi(l, o),
                ji(f, u);
              var x = ji(f, o);
              for (u = 0; u < d.length; u += 2) {
                var R = d[u],
                  L = d[u + 1];
                R === "style"
                  ? fl(l, L)
                  : R === "dangerouslySetInnerHTML"
                  ? cl(l, L)
                  : R === "children"
                  ? Kt(l, L)
                  : O(l, R, L, x);
              }
              switch (f) {
                case "input":
                  ul(l, o);
                  break;
                case "textarea":
                  le(l, o);
                  break;
                case "select":
                  var P = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var Y = o.value;
                  Y != null
                    ? U(l, !!o.multiple, Y, !1)
                    : P !== !!o.multiple &&
                      (o.defaultValue != null
                        ? U(l, !!o.multiple, o.defaultValue, !0)
                        : U(l, !!o.multiple, o.multiple ? [] : "", !1));
              }
              l[jr] = o;
            } catch (q) {
              He(e, e.return, q);
            }
        }
        break;
      case 6:
        if ((Ft(t, e), $t(e), r & 4)) {
          if (e.stateNode === null) throw Error(a(162));
          (l = e.stateNode), (o = e.memoizedProps);
          try {
            l.nodeValue = o;
          } catch (q) {
            He(e, e.return, q);
          }
        }
        break;
      case 3:
        if (
          (Ft(t, e), $t(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Nr(t.containerInfo);
          } catch (q) {
            He(e, e.return, q);
          }
        break;
      case 4:
        Ft(t, e), $t(e);
        break;
      case 13:
        Ft(t, e),
          $t(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (fa = We())),
          r & 4 && dc(e);
        break;
      case 22:
        if (
          ((R = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((ot = (x = ot) || R), Ft(t, e), (ot = x)) : Ft(t, e),
          $t(e),
          r & 8192)
        ) {
          if (
            ((x = e.memoizedState !== null),
            (e.stateNode.isHidden = x) && !R && e.mode & 1)
          )
            for (G = e, R = e.child; R !== null; ) {
              for (L = G = R; G !== null; ) {
                switch (((P = G), (Y = P.child), P.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Xr(4, P, P.return);
                    break;
                  case 1:
                    dr(P, P.return);
                    var K = P.stateNode;
                    if (typeof K.componentWillUnmount == "function") {
                      (r = P), (n = P.return);
                      try {
                        (t = r),
                          (K.props = t.memoizedProps),
                          (K.state = t.memoizedState),
                          K.componentWillUnmount();
                      } catch (q) {
                        He(r, n, q);
                      }
                    }
                    break;
                  case 5:
                    dr(P, P.return);
                    break;
                  case 22:
                    if (P.memoizedState !== null) {
                      vc(L);
                      continue;
                    }
                }
                Y !== null ? ((Y.return = P), (G = Y)) : vc(L);
              }
              R = R.sibling;
            }
          e: for (R = null, L = e; ; ) {
            if (L.tag === 5) {
              if (R === null) {
                R = L;
                try {
                  (l = L.stateNode),
                    x
                      ? ((o = l.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((f = L.stateNode),
                        (d = L.memoizedProps.style),
                        (u =
                          d != null && d.hasOwnProperty("display")
                            ? d.display
                            : null),
                        (f.style.display = hr("display", u)));
                } catch (q) {
                  He(e, e.return, q);
                }
              }
            } else if (L.tag === 6) {
              if (R === null)
                try {
                  L.stateNode.nodeValue = x ? "" : L.memoizedProps;
                } catch (q) {
                  He(e, e.return, q);
                }
            } else if (
              ((L.tag !== 22 && L.tag !== 23) ||
                L.memoizedState === null ||
                L === e) &&
              L.child !== null
            ) {
              (L.child.return = L), (L = L.child);
              continue;
            }
            if (L === e) break e;
            for (; L.sibling === null; ) {
              if (L.return === null || L.return === e) break e;
              R === L && (R = null), (L = L.return);
            }
            R === L && (R = null),
              (L.sibling.return = L.return),
              (L = L.sibling);
          }
        }
        break;
      case 19:
        Ft(t, e), $t(e), r & 4 && dc(e);
        break;
      case 21:
        break;
      default:
        Ft(t, e), $t(e);
    }
  }
  function $t(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (uc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(a(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Kt(l, ""), (r.flags &= -33));
            var o = cc(e);
            sa(e, o, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo,
              f = cc(e);
            aa(e, f, u);
            break;
          default:
            throw Error(a(161));
        }
      } catch (d) {
        He(e, e.return, d);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function ep(e, t, n) {
    (G = e), yc(e);
  }
  function yc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; G !== null; ) {
      var l = G,
        o = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || ni;
        if (!u) {
          var f = l.alternate,
            d = (f !== null && f.memoizedState !== null) || ot;
          f = ni;
          var x = ot;
          if (((ni = u), (ot = d) && !x))
            for (G = l; G !== null; )
              (u = G),
                (d = u.child),
                u.tag === 22 && u.memoizedState !== null
                  ? hc(l)
                  : d !== null
                  ? ((d.return = u), (G = d))
                  : hc(l);
          for (; o !== null; ) (G = o), yc(o), (o = o.sibling);
          (G = l), (ni = f), (ot = x);
        }
        mc(e);
      } else
        l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (G = o)) : mc(e);
    }
  }
  function mc(e) {
    for (; G !== null; ) {
      var t = G;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                ot || ri(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !ot)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : At(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var o = t.updateQueue;
                o !== null && vu(t, o, r);
                break;
              case 3:
                var u = t.updateQueue;
                if (u !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  vu(t, u, n);
                }
                break;
              case 5:
                var f = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = f;
                  var d = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d.autoFocus && n.focus();
                      break;
                    case "img":
                      d.src && (n.src = d.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var x = t.alternate;
                  if (x !== null) {
                    var R = x.memoizedState;
                    if (R !== null) {
                      var L = R.dehydrated;
                      L !== null && Nr(L);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(a(163));
            }
          ot || (t.flags & 512 && oa(t));
        } catch (P) {
          He(t, t.return, P);
        }
      }
      if (t === e) {
        G = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (G = n);
        break;
      }
      G = t.return;
    }
  }
  function vc(e) {
    for (; G !== null; ) {
      var t = G;
      if (t === e) {
        G = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (G = n);
        break;
      }
      G = t.return;
    }
  }
  function hc(e) {
    for (; G !== null; ) {
      var t = G;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ri(4, t);
            } catch (d) {
              He(t, n, d);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (d) {
                He(t, l, d);
              }
            }
            var o = t.return;
            try {
              oa(t);
            } catch (d) {
              He(t, o, d);
            }
            break;
          case 5:
            var u = t.return;
            try {
              oa(t);
            } catch (d) {
              He(t, u, d);
            }
        }
      } catch (d) {
        He(t, t.return, d);
      }
      if (t === e) {
        G = null;
        break;
      }
      var f = t.sibling;
      if (f !== null) {
        (f.return = t.return), (G = f);
        break;
      }
      G = t.return;
    }
  }
  var tp = Math.ceil,
    li = j.ReactCurrentDispatcher,
    ua = j.ReactCurrentOwner,
    Pt = j.ReactCurrentBatchConfig,
    Ee = 0,
    be = null,
    Qe = null,
    nt = 0,
    xt = 0,
    pr = yn(0),
    qe = 0,
    qr = null,
    In = 0,
    ii = 0,
    ca = 0,
    Zr = null,
    mt = null,
    fa = 0,
    yr = 1 / 0,
    rn = null,
    oi = !1,
    da = null,
    Sn = null,
    ai = !1,
    _n = null,
    si = 0,
    Jr = 0,
    pa = null,
    ui = -1,
    ci = 0;
  function ut() {
    return Ee & 6 ? We() : ui !== -1 ? ui : (ui = We());
  }
  function wn(e) {
    return e.mode & 1
      ? Ee & 2 && nt !== 0
        ? nt & -nt
        : jd.transition !== null
        ? (ci === 0 && (ci = cs()), ci)
        : ((e = De),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ks(e.type))),
          e)
      : 1;
  }
  function It(e, t, n, r) {
    if (50 < Jr) throw ((Jr = 0), (pa = null), Error(a(185)));
    wr(e, n, r),
      (!(Ee & 2) || e !== be) &&
        (e === be && (!(Ee & 2) && (ii |= n), qe === 4 && xn(e, nt)),
        vt(e, r),
        n === 1 &&
          Ee === 0 &&
          !(t.mode & 1) &&
          ((yr = We() + 500), jl && vn()));
  }
  function vt(e, t) {
    var n = e.callbackNode;
    jf(e, t);
    var r = kl(e, e === be ? nt : 0);
    if (r === 0)
      n !== null && as(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && as(n), t === 1))
        e.tag === 0 ? Id(kc.bind(null, e)) : lu(kc.bind(null, e)),
          zd(function () {
            !(Ee & 6) && vn();
          }),
          (n = null);
      else {
        switch (fs(r)) {
          case 1:
            n = Yi;
            break;
          case 4:
            n = ss;
            break;
          case 16:
            n = ml;
            break;
          case 536870912:
            n = us;
            break;
          default:
            n = ml;
        }
        n = Nc(n, gc.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function gc(e, t) {
    if (((ui = -1), (ci = 0), Ee & 6)) throw Error(a(327));
    var n = e.callbackNode;
    if (mr() && e.callbackNode !== n) return null;
    var r = kl(e, e === be ? nt : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = fi(e, r);
    else {
      t = r;
      var l = Ee;
      Ee |= 2;
      var o = _c();
      (be !== e || nt !== t) && ((rn = null), (yr = We() + 500), Mn(e, t));
      do
        try {
          lp();
          break;
        } catch (f) {
          Sc(e, f);
        }
      while (!0);
      Lo(),
        (li.current = o),
        (Ee = l),
        Qe !== null ? (t = 0) : ((be = null), (nt = 0), (t = qe));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = Gi(e)), l !== 0 && ((r = l), (t = ya(e, l)))),
        t === 1)
      )
        throw ((n = qr), Mn(e, 0), xn(e, r), vt(e, We()), n);
      if (t === 6) xn(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !np(l) &&
            ((t = fi(e, r)),
            t === 2 && ((o = Gi(e)), o !== 0 && ((r = o), (t = ya(e, o)))),
            t === 1))
        )
          throw ((n = qr), Mn(e, 0), xn(e, r), vt(e, We()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            Vn(e, mt, rn);
            break;
          case 3:
            if (
              (xn(e, r),
              (r & 130023424) === r && ((t = fa + 500 - We()), 10 < t))
            ) {
              if (kl(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                ut(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = So(Vn.bind(null, e, mt, rn), t);
              break;
            }
            Vn(e, mt, rn);
            break;
          case 4:
            if ((xn(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var u = 31 - Lt(r);
              (o = 1 << u), (u = t[u]), u > l && (l = u), (r &= ~o);
            }
            if (
              ((r = l),
              (r = We() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * tp(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = So(Vn.bind(null, e, mt, rn), r);
              break;
            }
            Vn(e, mt, rn);
            break;
          case 5:
            Vn(e, mt, rn);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return vt(e, We()), e.callbackNode === n ? gc.bind(null, e) : null;
  }
  function ya(e, t) {
    var n = Zr;
    return (
      e.current.memoizedState.isDehydrated && (Mn(e, t).flags |= 256),
      (e = fi(e, t)),
      e !== 2 && ((t = mt), (mt = n), t !== null && ma(t)),
      e
    );
  }
  function ma(e) {
    mt === null ? (mt = e) : mt.push.apply(mt, e);
  }
  function np(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!Bt(o(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function xn(e, t) {
    for (
      t &= ~ca,
        t &= ~ii,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - Lt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function kc(e) {
    if (Ee & 6) throw Error(a(327));
    mr();
    var t = kl(e, 0);
    if (!(t & 1)) return vt(e, We()), null;
    var n = fi(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Gi(e);
      r !== 0 && ((t = r), (n = ya(e, r)));
    }
    if (n === 1) throw ((n = qr), Mn(e, 0), xn(e, t), vt(e, We()), n);
    if (n === 6) throw Error(a(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Vn(e, mt, rn),
      vt(e, We()),
      null
    );
  }
  function va(e, t) {
    var n = Ee;
    Ee |= 1;
    try {
      return e(t);
    } finally {
      (Ee = n), Ee === 0 && ((yr = We() + 500), jl && vn());
    }
  }
  function jn(e) {
    _n !== null && _n.tag === 0 && !(Ee & 6) && mr();
    var t = Ee;
    Ee |= 1;
    var n = Pt.transition,
      r = De;
    try {
      if (((Pt.transition = null), (De = 1), e)) return e();
    } finally {
      (De = r), (Pt.transition = n), (Ee = t), !(Ee & 6) && vn();
    }
  }
  function ha() {
    (xt = pr.current), Fe(pr);
  }
  function Mn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Bd(n)), Qe !== null))
      for (n = Qe.return; n !== null; ) {
        var r = n;
        switch ((Co(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Fl();
            break;
          case 3:
            cr(), Fe(dt), Fe(rt), Mo();
            break;
          case 5:
            Io(r);
            break;
          case 4:
            cr();
            break;
          case 13:
            Fe(Me);
            break;
          case 19:
            Fe(Me);
            break;
          case 10:
            Bo(r.type._context);
            break;
          case 22:
          case 23:
            ha();
        }
        n = n.return;
      }
    if (
      ((be = e),
      (Qe = e = En(e.current, null)),
      (nt = xt = t),
      (qe = 0),
      (qr = null),
      (ca = ii = In = 0),
      (mt = Zr = null),
      An !== null)
    ) {
      for (t = 0; t < An.length; t++)
        if (((n = An[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var u = o.next;
            (o.next = l), (r.next = u);
          }
          n.pending = r;
        }
      An = null;
    }
    return e;
  }
  function Sc(e, t) {
    do {
      var n = Qe;
      try {
        if ((Lo(), (Kl.current = Jl), Xl)) {
          for (var r = Ve.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          Xl = !1;
        }
        if (
          ((Fn = 0),
          (Je = Xe = Ve = null),
          (Wr = !1),
          (Yr = 0),
          (ua.current = null),
          n === null || n.return === null)
        ) {
          (qe = 1), (qr = t), (Qe = null);
          break;
        }
        e: {
          var o = e,
            u = n.return,
            f = n,
            d = t;
          if (
            ((t = nt),
            (f.flags |= 32768),
            d !== null && typeof d == "object" && typeof d.then == "function")
          ) {
            var x = d,
              R = f,
              L = R.tag;
            if (!(R.mode & 1) && (L === 0 || L === 11 || L === 15)) {
              var P = R.alternate;
              P
                ? ((R.updateQueue = P.updateQueue),
                  (R.memoizedState = P.memoizedState),
                  (R.lanes = P.lanes))
                : ((R.updateQueue = null), (R.memoizedState = null));
            }
            var Y = Yu(u);
            if (Y !== null) {
              (Y.flags &= -257),
                Gu(Y, u, f, o, t),
                Y.mode & 1 && Wu(o, x, t),
                (t = Y),
                (d = x);
              var K = t.updateQueue;
              if (K === null) {
                var q = new Set();
                q.add(d), (t.updateQueue = q);
              } else K.add(d);
              break e;
            } else {
              if (!(t & 1)) {
                Wu(o, x, t), ga();
                break e;
              }
              d = Error(a(426));
            }
          } else if (je && f.mode & 1) {
            var Ye = Yu(u);
            if (Ye !== null) {
              !(Ye.flags & 65536) && (Ye.flags |= 256),
                Gu(Ye, u, f, o, t),
                Ro(fr(d, f));
              break e;
            }
          }
          (o = d = fr(d, f)),
            qe !== 4 && (qe = 2),
            Zr === null ? (Zr = [o]) : Zr.push(o),
            (o = u);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var g = Hu(o, d, t);
                mu(o, g);
                break e;
              case 1:
                f = d;
                var v = o.type,
                  k = o.stateNode;
                if (
                  !(o.flags & 128) &&
                  (typeof v.getDerivedStateFromError == "function" ||
                    (k !== null &&
                      typeof k.componentDidCatch == "function" &&
                      (Sn === null || !Sn.has(k))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var A = $u(o, f, t);
                  mu(o, A);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        xc(n);
      } catch (ee) {
        (t = ee), Qe === n && n !== null && (Qe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function _c() {
    var e = li.current;
    return (li.current = Jl), e === null ? Jl : e;
  }
  function ga() {
    (qe === 0 || qe === 3 || qe === 2) && (qe = 4),
      be === null || (!(In & 268435455) && !(ii & 268435455)) || xn(be, nt);
  }
  function fi(e, t) {
    var n = Ee;
    Ee |= 2;
    var r = _c();
    (be !== e || nt !== t) && ((rn = null), Mn(e, t));
    do
      try {
        rp();
        break;
      } catch (l) {
        Sc(e, l);
      }
    while (!0);
    if ((Lo(), (Ee = n), (li.current = r), Qe !== null)) throw Error(a(261));
    return (be = null), (nt = 0), qe;
  }
  function rp() {
    for (; Qe !== null; ) wc(Qe);
  }
  function lp() {
    for (; Qe !== null && !Rf(); ) wc(Qe);
  }
  function wc(e) {
    var t = Cc(e.alternate, e, xt);
    (e.memoizedProps = e.pendingProps),
      t === null ? xc(e) : (Qe = t),
      (ua.current = null);
  }
  function xc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = Zd(n, t)), n !== null)) {
          (n.flags &= 32767), (Qe = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (qe = 6), (Qe = null);
          return;
        }
      } else if (((n = qd(n, t, xt)), n !== null)) {
        Qe = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Qe = t;
        return;
      }
      Qe = t = e;
    } while (t !== null);
    qe === 0 && (qe = 5);
  }
  function Vn(e, t, n) {
    var r = De,
      l = Pt.transition;
    try {
      (Pt.transition = null), (De = 1), ip(e, t, n, r);
    } finally {
      (Pt.transition = l), (De = r);
    }
    return null;
  }
  function ip(e, t, n, r) {
    do mr();
    while (_n !== null);
    if (Ee & 6) throw Error(a(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(a(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
      (Mf(e, o),
      e === be && ((Qe = be = null), (nt = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        ai ||
        ((ai = !0),
        Nc(ml, function () {
          return mr(), null;
        })),
      (o = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || o)
    ) {
      (o = Pt.transition), (Pt.transition = null);
      var u = De;
      De = 1;
      var f = Ee;
      (Ee |= 4),
        (ua.current = null),
        bd(e, n),
        pc(n, e),
        Td(go),
        (wl = !!ho),
        (go = ho = null),
        (e.current = n),
        ep(n),
        Df(),
        (Ee = f),
        (De = u),
        (Pt.transition = o);
    } else e.current = n;
    if (
      (ai && ((ai = !1), (_n = e), (si = l)),
      (o = e.pendingLanes),
      o === 0 && (Sn = null),
      zf(n.stateNode),
      vt(e, We()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (oi) throw ((oi = !1), (e = da), (da = null), e);
    return (
      si & 1 && e.tag !== 0 && mr(),
      (o = e.pendingLanes),
      o & 1 ? (e === pa ? Jr++ : ((Jr = 0), (pa = e))) : (Jr = 0),
      vn(),
      null
    );
  }
  function mr() {
    if (_n !== null) {
      var e = fs(si),
        t = Pt.transition,
        n = De;
      try {
        if (((Pt.transition = null), (De = 16 > e ? 16 : e), _n === null))
          var r = !1;
        else {
          if (((e = _n), (_n = null), (si = 0), Ee & 6)) throw Error(a(331));
          var l = Ee;
          for (Ee |= 4, G = e.current; G !== null; ) {
            var o = G,
              u = o.child;
            if (G.flags & 16) {
              var f = o.deletions;
              if (f !== null) {
                for (var d = 0; d < f.length; d++) {
                  var x = f[d];
                  for (G = x; G !== null; ) {
                    var R = G;
                    switch (R.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Xr(8, R, o);
                    }
                    var L = R.child;
                    if (L !== null) (L.return = R), (G = L);
                    else
                      for (; G !== null; ) {
                        R = G;
                        var P = R.sibling,
                          Y = R.return;
                        if ((sc(R), R === x)) {
                          G = null;
                          break;
                        }
                        if (P !== null) {
                          (P.return = Y), (G = P);
                          break;
                        }
                        G = Y;
                      }
                  }
                }
                var K = o.alternate;
                if (K !== null) {
                  var q = K.child;
                  if (q !== null) {
                    K.child = null;
                    do {
                      var Ye = q.sibling;
                      (q.sibling = null), (q = Ye);
                    } while (q !== null);
                  }
                }
                G = o;
              }
            }
            if (o.subtreeFlags & 2064 && u !== null) (u.return = o), (G = u);
            else
              e: for (; G !== null; ) {
                if (((o = G), o.flags & 2048))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xr(9, o, o.return);
                  }
                var g = o.sibling;
                if (g !== null) {
                  (g.return = o.return), (G = g);
                  break e;
                }
                G = o.return;
              }
          }
          var v = e.current;
          for (G = v; G !== null; ) {
            u = G;
            var k = u.child;
            if (u.subtreeFlags & 2064 && k !== null) (k.return = u), (G = k);
            else
              e: for (u = v; G !== null; ) {
                if (((f = G), f.flags & 2048))
                  try {
                    switch (f.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ri(9, f);
                    }
                  } catch (ee) {
                    He(f, f.return, ee);
                  }
                if (f === u) {
                  G = null;
                  break e;
                }
                var A = f.sibling;
                if (A !== null) {
                  (A.return = f.return), (G = A);
                  break e;
                }
                G = f.return;
              }
          }
          if (
            ((Ee = l),
            vn(),
            Mt && typeof Mt.onPostCommitFiberRoot == "function")
          )
            try {
              Mt.onPostCommitFiberRoot(vl, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (De = n), (Pt.transition = t);
      }
    }
    return !1;
  }
  function Ec(e, t, n) {
    (t = fr(n, t)),
      (t = Hu(e, t, 1)),
      (e = gn(e, t, 1)),
      (t = ut()),
      e !== null && (wr(e, 1, t), vt(e, t));
  }
  function He(e, t, n) {
    if (e.tag === 3) Ec(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ec(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Sn === null || !Sn.has(r)))
          ) {
            (e = fr(n, e)),
              (e = $u(t, e, 1)),
              (t = gn(t, e, 1)),
              (e = ut()),
              t !== null && (wr(t, 1, e), vt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function op(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = ut()),
      (e.pingedLanes |= e.suspendedLanes & n),
      be === e &&
        (nt & n) === n &&
        (qe === 4 || (qe === 3 && (nt & 130023424) === nt && 500 > We() - fa)
          ? Mn(e, 0)
          : (ca |= n)),
      vt(e, t);
  }
  function Tc(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = gl), (gl <<= 1), !(gl & 130023424) && (gl = 4194304))
        : (t = 1));
    var n = ut();
    (e = en(e, t)), e !== null && (wr(e, t, n), vt(e, n));
  }
  function ap(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Tc(e, n);
  }
  function sp(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    r !== null && r.delete(t), Tc(e, n);
  }
  var Cc;
  Cc = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || dt.current) yt = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (yt = !1), Xd(e, t, n);
        yt = !!(e.flags & 131072);
      }
    else (yt = !1), je && t.flags & 1048576 && iu(t, Vl, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        ti(e, t), (e = t.pendingProps);
        var l = rr(t, rt.current);
        ur(t, n), (l = Ho(null, t, r, e, l, n));
        var o = $o();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              pt(r) ? ((o = !0), Il(t)) : (o = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Oo(t),
              (l.updater = bl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Xo(t, r, e, n),
              (t = bo(null, t, r, !0, o, n)))
            : ((t.tag = 0), je && o && To(t), st(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (ti(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = cp(r)),
            (e = At(r, e)),
            l)
          ) {
            case 0:
              t = Jo(null, t, r, e, n);
              break e;
            case 1:
              t = Ju(null, t, r, e, n);
              break e;
            case 11:
              t = Qu(null, t, r, e, n);
              break e;
            case 14:
              t = Ku(null, t, r, At(r.type, e), n);
              break e;
          }
          throw Error(a(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : At(r, l)),
          Jo(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : At(r, l)),
          Ju(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((bu(t), e === null)) throw Error(a(387));
          (r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            yu(e, t),
            Gl(t, r, null, n);
          var u = t.memoizedState;
          if (((r = u.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: u.cache,
                pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                transitions: u.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              (l = fr(Error(a(423)), t)), (t = ec(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = fr(Error(a(424)), t)), (t = ec(e, t, r, n, l));
              break e;
            } else
              for (
                wt = pn(t.stateNode.containerInfo.firstChild),
                  _t = t,
                  je = !0,
                  zt = null,
                  n = du(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((or(), r === l)) {
              t = nn(e, t, n);
              break e;
            }
            st(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          hu(t),
          e === null && Po(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (u = l.children),
          ko(r, l) ? (u = null) : o !== null && ko(r, o) && (t.flags |= 32),
          Zu(e, t),
          st(e, t, u, n),
          t.child
        );
      case 6:
        return e === null && Po(t), null;
      case 13:
        return tc(e, t, n);
      case 4:
        return (
          Fo(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = ar(t, null, r, n)) : st(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : At(r, l)),
          Qu(e, t, r, l, n)
        );
      case 7:
        return st(e, t, t.pendingProps, n), t.child;
      case 8:
        return st(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return st(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (u = l.value),
            ze($l, r._currentValue),
            (r._currentValue = u),
            o !== null)
          )
            if (Bt(o.value, u)) {
              if (o.children === l.children && !dt.current) {
                t = nn(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var f = o.dependencies;
                if (f !== null) {
                  u = o.child;
                  for (var d = f.firstContext; d !== null; ) {
                    if (d.context === r) {
                      if (o.tag === 1) {
                        (d = tn(-1, n & -n)), (d.tag = 2);
                        var x = o.updateQueue;
                        if (x !== null) {
                          x = x.shared;
                          var R = x.pending;
                          R === null
                            ? (d.next = d)
                            : ((d.next = R.next), (R.next = d)),
                            (x.pending = d);
                        }
                      }
                      (o.lanes |= n),
                        (d = o.alternate),
                        d !== null && (d.lanes |= n),
                        zo(o.return, n, t),
                        (f.lanes |= n);
                      break;
                    }
                    d = d.next;
                  }
                } else if (o.tag === 10) u = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((u = o.return), u === null)) throw Error(a(341));
                  (u.lanes |= n),
                    (f = u.alternate),
                    f !== null && (f.lanes |= n),
                    zo(u, n, t),
                    (u = o.sibling);
                } else u = o.child;
                if (u !== null) u.return = o;
                else
                  for (u = o; u !== null; ) {
                    if (u === t) {
                      u = null;
                      break;
                    }
                    if (((o = u.sibling), o !== null)) {
                      (o.return = u.return), (u = o);
                      break;
                    }
                    u = u.return;
                  }
                o = u;
              }
          st(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          ur(t, n),
          (l = Ct(l)),
          (r = r(l)),
          (t.flags |= 1),
          st(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = At(r, t.pendingProps)),
          (l = At(r.type, l)),
          Ku(e, t, r, l, n)
        );
      case 15:
        return Xu(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : At(r, l)),
          ti(e, t),
          (t.tag = 1),
          pt(r) ? ((e = !0), Il(t)) : (e = !1),
          ur(t, n),
          Vu(t, r, l),
          Xo(t, r, l, n),
          bo(null, t, r, !0, e, n)
        );
      case 19:
        return rc(e, t, n);
      case 22:
        return qu(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function Nc(e, t) {
    return os(e, t);
  }
  function up(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Rt(e, t, n, r) {
    return new up(e, t, n, r);
  }
  function ka(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function cp(e) {
    if (typeof e == "function") return ka(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === b)) return 11;
      if (e === Ne) return 14;
    }
    return 2;
  }
  function En(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Rt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function di(e, t, n, r, l, o) {
    var u = 2;
    if (((r = e), typeof e == "function")) ka(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else
      e: switch (e) {
        case ne:
          return Un(n.children, l, o, t);
        case se:
          (u = 8), (l |= 8);
          break;
        case Ce:
          return (
            (e = Rt(12, n, t, l | 2)), (e.elementType = Ce), (e.lanes = o), e
          );
        case ie:
          return (e = Rt(13, n, t, l)), (e.elementType = ie), (e.lanes = o), e;
        case we:
          return (e = Rt(19, n, t, l)), (e.elementType = we), (e.lanes = o), e;
        case ve:
          return pi(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Se:
                u = 10;
                break e;
              case Ae:
                u = 9;
                break e;
              case b:
                u = 11;
                break e;
              case Ne:
                u = 14;
                break e;
              case Pe:
                (u = 16), (r = null);
                break e;
            }
          throw Error(a(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = Rt(u, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
    );
  }
  function Un(e, t, n, r) {
    return (e = Rt(7, e, r, t)), (e.lanes = n), e;
  }
  function pi(e, t, n, r) {
    return (
      (e = Rt(22, e, r, t)),
      (e.elementType = ve),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Sa(e, t, n) {
    return (e = Rt(6, e, null, t)), (e.lanes = n), e;
  }
  function _a(e, t, n) {
    return (
      (t = Rt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function fp(e, t, n, r, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Qi(0)),
      (this.expirationTimes = Qi(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Qi(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function wa(e, t, n, r, l, o, u, f, d) {
    return (
      (e = new fp(e, t, n, f, d)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = Rt(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Oo(o),
      e
    );
  }
  function dp(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ce,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Pc(e) {
    if (!e) return mn;
    e = e._reactInternals;
    e: {
      if (Rn(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (pt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (pt(n)) return nu(e, n, t);
    }
    return t;
  }
  function Rc(e, t, n, r, l, o, u, f, d) {
    return (
      (e = wa(n, r, !0, e, l, o, u, f, d)),
      (e.context = Pc(null)),
      (n = e.current),
      (r = ut()),
      (l = wn(n)),
      (o = tn(r, l)),
      (o.callback = t ?? null),
      gn(n, o, l),
      (e.current.lanes = l),
      wr(e, l, r),
      vt(e, r),
      e
    );
  }
  function yi(e, t, n, r) {
    var l = t.current,
      o = ut(),
      u = wn(l);
    return (
      (n = Pc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = tn(o, u)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = gn(l, t, u)),
      e !== null && (It(e, l, u, o), Yl(e, l, u)),
      u
    );
  }
  function mi(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Dc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function xa(e, t) {
    Dc(e, t), (e = e.alternate) && Dc(e, t);
  }
  var Lc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Ea(e) {
    this._internalRoot = e;
  }
  (vi.prototype.render = Ea.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(a(409));
      yi(e, t, null, null);
    }),
    (vi.prototype.unmount = Ea.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          jn(function () {
            yi(null, e, null, null);
          }),
            (t[qt] = null);
        }
      });
  function vi(e) {
    this._internalRoot = e;
  }
  vi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ys();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < cn.length && t !== 0 && t < cn[n].priority; n++);
      cn.splice(n, 0, e), n === 0 && hs(e);
    }
  };
  function Ta(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function hi(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Bc() {}
  function pp(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var x = mi(u);
          o.call(x);
        };
      }
      var u = Rc(t, r, e, 0, null, !1, !1, "", Bc);
      return (
        (e._reactRootContainer = u),
        (e[qt] = u.current),
        Fr(e.nodeType === 8 ? e.parentNode : e),
        jn(),
        u
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var f = r;
      r = function () {
        var x = mi(d);
        f.call(x);
      };
    }
    var d = wa(e, 0, !1, null, null, !1, !1, "", Bc);
    return (
      (e._reactRootContainer = d),
      (e[qt] = d.current),
      Fr(e.nodeType === 8 ? e.parentNode : e),
      jn(function () {
        yi(t, d, n, r);
      }),
      d
    );
  }
  function gi(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var u = o;
      if (typeof l == "function") {
        var f = l;
        l = function () {
          var d = mi(u);
          f.call(d);
        };
      }
      yi(t, u, e, l);
    } else u = pp(n, t, e, l, r);
    return mi(u);
  }
  (ds = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = _r(t.pendingLanes);
          n !== 0 &&
            (Ki(t, n | 1), vt(t, We()), !(Ee & 6) && ((yr = We() + 500), vn()));
        }
        break;
      case 13:
        jn(function () {
          var r = en(e, 1);
          if (r !== null) {
            var l = ut();
            It(r, e, 1, l);
          }
        }),
          xa(e, 1);
    }
  }),
    (Xi = function (e) {
      if (e.tag === 13) {
        var t = en(e, 134217728);
        if (t !== null) {
          var n = ut();
          It(t, e, 134217728, n);
        }
        xa(e, 134217728);
      }
    }),
    (ps = function (e) {
      if (e.tag === 13) {
        var t = wn(e),
          n = en(e, t);
        if (n !== null) {
          var r = ut();
          It(n, e, t, r);
        }
        xa(e, t);
      }
    }),
    (ys = function () {
      return De;
    }),
    (ms = function (e, t) {
      var n = De;
      try {
        return (De = e), t();
      } finally {
        De = n;
      }
    }),
    (Ui = function (e, t, n) {
      switch (t) {
        case "input":
          if ((ul(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Ol(r);
                if (!l) throw Error(a(90));
                sl(r), ul(r, l);
              }
            }
          }
          break;
        case "textarea":
          le(e, n);
          break;
        case "select":
          (t = n.value), t != null && U(e, !!n.multiple, t, !1);
      }
    }),
    (ba = va),
    (es = jn);
  var yp = { usingClientEntryPoint: !1, Events: [Mr, tr, Ol, Za, Ja, va] },
    br = {
      findFiberByHostInstance: Dn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    mp = {
      bundleType: br.bundleType,
      version: br.version,
      rendererPackageName: br.rendererPackageName,
      rendererConfig: br.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: j.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = ls(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: br.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ki = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ki.isDisabled && ki.supportsFiber)
      try {
        (vl = ki.inject(mp)), (Mt = ki);
      } catch {}
  }
  return (
    (ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yp),
    (ht.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ta(t)) throw Error(a(200));
      return dp(e, t, null, n);
    }),
    (ht.createRoot = function (e, t) {
      if (!Ta(e)) throw Error(a(299));
      var n = !1,
        r = "",
        l = Lc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = wa(e, 1, !1, null, null, n, !1, r, l)),
        (e[qt] = t.current),
        Fr(e.nodeType === 8 ? e.parentNode : e),
        new Ea(t)
      );
    }),
    (ht.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(a(188))
          : ((e = Object.keys(e).join(",")), Error(a(268, e)));
      return (e = ls(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (ht.flushSync = function (e) {
      return jn(e);
    }),
    (ht.hydrate = function (e, t, n) {
      if (!hi(t)) throw Error(a(200));
      return gi(null, e, t, !0, n);
    }),
    (ht.hydrateRoot = function (e, t, n) {
      if (!Ta(e)) throw Error(a(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = "",
        u = Lc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
        (t = Rc(t, null, e, 1, n ?? null, l, !1, o, u)),
        (e[qt] = t.current),
        Fr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new vi(t);
    }),
    (ht.render = function (e, t, n) {
      if (!hi(t)) throw Error(a(200));
      return gi(null, e, t, !1, n);
    }),
    (ht.unmountComponentAtNode = function (e) {
      if (!hi(e)) throw Error(a(40));
      return e._reactRootContainer
        ? (jn(function () {
            gi(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[qt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (ht.unstable_batchedUpdates = va),
    (ht.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!hi(n)) throw Error(a(200));
      if (e == null || e._reactInternals === void 0) throw Error(a(38));
      return gi(e, t, n, !1, r);
    }),
    (ht.version = "18.3.1-next-f1338f8080-20240426"),
    ht
  );
}
var Vc;
function xp() {
  if (Vc) return Pa.exports;
  Vc = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (s) {
        console.error(s);
      }
  }
  return i(), (Pa.exports = wp()), Pa.exports;
}
var Uc;
function Ep() {
  if (Uc) return Si;
  Uc = 1;
  var i = xp();
  return (Si.createRoot = i.createRoot), (Si.hydrateRoot = i.hydrateRoot), Si;
}
var Tp = Ep(),
  il = (i) => i.type === "checkbox",
  Hn = (i) => i instanceof Date,
  ct = (i) => i == null;
const of = (i) => typeof i == "object";
var Ge = (i) => !ct(i) && !Array.isArray(i) && of(i) && !Hn(i),
  Cp = (i) =>
    Ge(i) && i.target ? (il(i.target) ? i.target.checked : i.target.value) : i,
  Np = (i) => i.substring(0, i.search(/\.\d+(\.|$)/)) || i,
  Pp = (i, s) => i.has(Np(s)),
  Rp = (i) => {
    const s = i.constructor && i.constructor.prototype;
    return Ge(s) && s.hasOwnProperty("isPrototypeOf");
  },
  Wa =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function Dt(i) {
  let s;
  const a = Array.isArray(i),
    c = typeof FileList < "u" ? i instanceof FileList : !1;
  if (i instanceof Date) s = new Date(i);
  else if (i instanceof Set) s = new Set(i);
  else if (!(Wa && (i instanceof Blob || c)) && (a || Ge(i)))
    if (((s = a ? [] : {}), !a && !Rp(i))) s = i;
    else for (const p in i) i.hasOwnProperty(p) && (s[p] = Dt(i[p]));
  else return i;
  return s;
}
var Ri = (i) => (Array.isArray(i) ? i.filter(Boolean) : []),
  Ke = (i) => i === void 0,
  X = (i, s, a) => {
    if (!s || !Ge(i)) return a;
    const c = Ri(s.split(/[,[\].]+?/)).reduce((p, m) => (ct(p) ? p : p[m]), i);
    return Ke(c) || c === i ? (Ke(i[s]) ? a : i[s]) : c;
  },
  Yt = (i) => typeof i == "boolean",
  Ya = (i) => /^\w*$/.test(i),
  af = (i) => Ri(i.replace(/["|']|\]/g, "").split(/\.|\[/)),
  Ie = (i, s, a) => {
    let c = -1;
    const p = Ya(s) ? [s] : af(s),
      m = p.length,
      _ = m - 1;
    for (; ++c < m; ) {
      const w = p[c];
      let z = a;
      if (c !== _) {
        const Z = i[w];
        z = Ge(Z) || Array.isArray(Z) ? Z : isNaN(+p[c + 1]) ? {} : [];
      }
      if (w === "__proto__" || w === "constructor" || w === "prototype") return;
      (i[w] = z), (i = i[w]);
    }
    return i;
  };
const Hc = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  jt = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  ln = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  };
fe.createContext(null);
var Dp = (i, s, a, c = !0) => {
    const p = { defaultValues: s._defaultValues };
    for (const m in i)
      Object.defineProperty(p, m, {
        get: () => {
          const _ = m;
          return (
            s._proxyFormState[_] !== jt.all &&
              (s._proxyFormState[_] = !c || jt.all),
            i[_]
          );
        },
      });
    return p;
  },
  gt = (i) => Ge(i) && !Object.keys(i).length,
  Lp = (i, s, a, c) => {
    a(i);
    const { name: p, ...m } = i;
    return (
      gt(m) ||
      Object.keys(m).length >= Object.keys(s).length ||
      Object.keys(m).find((_) => s[_] === jt.all)
    );
  },
  _i = (i) => (Array.isArray(i) ? i : [i]);
function Bp(i) {
  const s = fe.useRef(i);
  (s.current = i),
    fe.useEffect(() => {
      const a =
        !i.disabled &&
        s.current.subject &&
        s.current.subject.subscribe({ next: s.current.next });
      return () => {
        a && a.unsubscribe();
      };
    }, [i.disabled]);
}
var Qt = (i) => typeof i == "string",
  zp = (i, s, a, c, p) =>
    Qt(i)
      ? (c && s.watch.add(i), X(a, i, p))
      : Array.isArray(i)
      ? i.map((m) => (c && s.watch.add(m), X(a, m)))
      : (c && (s.watchAll = !0), a),
  Ap = (i, s, a, c, p) =>
    s
      ? {
          ...a[i],
          types: { ...(a[i] && a[i].types ? a[i].types : {}), [c]: p || !0 },
        }
      : {},
  $c = (i) => ({
    isOnSubmit: !i || i === jt.onSubmit,
    isOnBlur: i === jt.onBlur,
    isOnChange: i === jt.onChange,
    isOnAll: i === jt.all,
    isOnTouch: i === jt.onTouched,
  }),
  Wc = (i, s, a) =>
    !a &&
    (s.watchAll ||
      s.watch.has(i) ||
      [...s.watch].some(
        (c) => i.startsWith(c) && /^\.\w+/.test(i.slice(c.length))
      ));
const rl = (i, s, a, c) => {
  for (const p of a || Object.keys(i)) {
    const m = X(i, p);
    if (m) {
      const { _f: _, ...w } = m;
      if (_) {
        if (_.refs && _.refs[0] && s(_.refs[0], p) && !c) return !0;
        if (_.ref && s(_.ref, _.name) && !c) return !0;
        if (rl(w, s)) break;
      } else if (Ge(w) && rl(w, s)) break;
    }
  }
};
var Op = (i, s, a) => {
    const c = _i(X(i, a));
    return Ie(c, "root", s[a]), Ie(i, a, c), i;
  },
  Ga = (i) => i.type === "file",
  Gt = (i) => typeof i == "function",
  Ei = (i) => {
    if (!Wa) return !1;
    const s = i ? i.ownerDocument : 0;
    return (
      i instanceof
      (s && s.defaultView ? s.defaultView.HTMLElement : HTMLElement)
    );
  },
  wi = (i) => Qt(i),
  Qa = (i) => i.type === "radio",
  Ti = (i) => i instanceof RegExp;
const Yc = { value: !1, isValid: !1 },
  Gc = { value: !0, isValid: !0 };
var sf = (i) => {
  if (Array.isArray(i)) {
    if (i.length > 1) {
      const s = i
        .filter((a) => a && a.checked && !a.disabled)
        .map((a) => a.value);
      return { value: s, isValid: !!s.length };
    }
    return i[0].checked && !i[0].disabled
      ? i[0].attributes && !Ke(i[0].attributes.value)
        ? Ke(i[0].value) || i[0].value === ""
          ? Gc
          : { value: i[0].value, isValid: !0 }
        : Gc
      : Yc;
  }
  return Yc;
};
const Qc = { isValid: !1, value: null };
var uf = (i) =>
  Array.isArray(i)
    ? i.reduce(
        (s, a) =>
          a && a.checked && !a.disabled ? { isValid: !0, value: a.value } : s,
        Qc
      )
    : Qc;
function Kc(i, s, a = "validate") {
  if (wi(i) || (Array.isArray(i) && i.every(wi)) || (Yt(i) && !i))
    return { type: a, message: wi(i) ? i : "", ref: s };
}
var vr = (i) => (Ge(i) && !Ti(i) ? i : { value: i, message: "" }),
  Xc = async (i, s, a, c, p, m) => {
    const {
        ref: _,
        refs: w,
        required: z,
        maxLength: Z,
        minLength: D,
        min: T,
        max: Q,
        pattern: de,
        validate: H,
        name: $,
        valueAsNumber: V,
        mount: te,
      } = i._f,
      C = X(a, $);
    if (!te || s.has($)) return {};
    const O = w ? w[0] : _,
      j = (b) => {
        p &&
          O.reportValidity &&
          (O.setCustomValidity(Yt(b) ? "" : b || ""), O.reportValidity());
      },
      J = {},
      ce = Qa(_),
      ne = il(_),
      se = ce || ne,
      Ce =
        ((V || Ga(_)) && Ke(_.value) && Ke(C)) ||
        (Ei(_) && _.value === "") ||
        C === "" ||
        (Array.isArray(C) && !C.length),
      Se = Ap.bind(null, $, c, J),
      Ae = (b, ie, we, Ne = ln.maxLength, Pe = ln.minLength) => {
        const ve = b ? ie : we;
        J[$] = {
          type: b ? Ne : Pe,
          message: ve,
          ref: _,
          ...Se(b ? Ne : Pe, ve),
        };
      };
    if (
      m
        ? !Array.isArray(C) || !C.length
        : z &&
          ((!se && (Ce || ct(C))) ||
            (Yt(C) && !C) ||
            (ne && !sf(w).isValid) ||
            (ce && !uf(w).isValid))
    ) {
      const { value: b, message: ie } = wi(z)
        ? { value: !!z, message: z }
        : vr(z);
      if (
        b &&
        ((J[$] = {
          type: ln.required,
          message: ie,
          ref: O,
          ...Se(ln.required, ie),
        }),
        !c)
      )
        return j(ie), J;
    }
    if (!Ce && (!ct(T) || !ct(Q))) {
      let b, ie;
      const we = vr(Q),
        Ne = vr(T);
      if (!ct(C) && !isNaN(C)) {
        const Pe = _.valueAsNumber || (C && +C);
        ct(we.value) || (b = Pe > we.value),
          ct(Ne.value) || (ie = Pe < Ne.value);
      } else {
        const Pe = _.valueAsDate || new Date(C),
          ve = (W) => new Date(new Date().toDateString() + " " + W),
          I = _.type == "time",
          re = _.type == "week";
        Qt(we.value) &&
          C &&
          (b = I
            ? ve(C) > ve(we.value)
            : re
            ? C > we.value
            : Pe > new Date(we.value)),
          Qt(Ne.value) &&
            C &&
            (ie = I
              ? ve(C) < ve(Ne.value)
              : re
              ? C < Ne.value
              : Pe < new Date(Ne.value));
      }
      if ((b || ie) && (Ae(!!b, we.message, Ne.message, ln.max, ln.min), !c))
        return j(J[$].message), J;
    }
    if ((Z || D) && !Ce && (Qt(C) || (m && Array.isArray(C)))) {
      const b = vr(Z),
        ie = vr(D),
        we = !ct(b.value) && C.length > +b.value,
        Ne = !ct(ie.value) && C.length < +ie.value;
      if ((we || Ne) && (Ae(we, b.message, ie.message), !c))
        return j(J[$].message), J;
    }
    if (de && !Ce && Qt(C)) {
      const { value: b, message: ie } = vr(de);
      if (
        Ti(b) &&
        !C.match(b) &&
        ((J[$] = {
          type: ln.pattern,
          message: ie,
          ref: _,
          ...Se(ln.pattern, ie),
        }),
        !c)
      )
        return j(ie), J;
    }
    if (H) {
      if (Gt(H)) {
        const b = await H(C, a),
          ie = Kc(b, O);
        if (ie && ((J[$] = { ...ie, ...Se(ln.validate, ie.message) }), !c))
          return j(ie.message), J;
      } else if (Ge(H)) {
        let b = {};
        for (const ie in H) {
          if (!gt(b) && !c) break;
          const we = Kc(await H[ie](C, a), O, ie);
          we &&
            ((b = { ...we, ...Se(ie, we.message) }),
            j(we.message),
            c && (J[$] = b));
        }
        if (!gt(b) && ((J[$] = { ref: O, ...b }), !c)) return J;
      }
    }
    return j(!0), J;
  };
function Fp(i, s) {
  const a = s.slice(0, -1).length;
  let c = 0;
  for (; c < a; ) i = Ke(i) ? c++ : i[s[c++]];
  return i;
}
function Ip(i) {
  for (const s in i) if (i.hasOwnProperty(s) && !Ke(i[s])) return !1;
  return !0;
}
function Ze(i, s) {
  const a = Array.isArray(s) ? s : Ya(s) ? [s] : af(s),
    c = a.length === 1 ? i : Fp(i, a),
    p = a.length - 1,
    m = a[p];
  return (
    c && delete c[m],
    p !== 0 &&
      ((Ge(c) && gt(c)) || (Array.isArray(c) && Ip(c))) &&
      Ze(i, a.slice(0, -1)),
    i
  );
}
var La = () => {
    let i = [];
    return {
      get observers() {
        return i;
      },
      next: (p) => {
        for (const m of i) m.next && m.next(p);
      },
      subscribe: (p) => (
        i.push(p),
        {
          unsubscribe: () => {
            i = i.filter((m) => m !== p);
          },
        }
      ),
      unsubscribe: () => {
        i = [];
      },
    };
  },
  ja = (i) => ct(i) || !of(i);
function Cn(i, s) {
  if (ja(i) || ja(s)) return i === s;
  if (Hn(i) && Hn(s)) return i.getTime() === s.getTime();
  const a = Object.keys(i),
    c = Object.keys(s);
  if (a.length !== c.length) return !1;
  for (const p of a) {
    const m = i[p];
    if (!c.includes(p)) return !1;
    if (p !== "ref") {
      const _ = s[p];
      if (
        (Hn(m) && Hn(_)) ||
        (Ge(m) && Ge(_)) ||
        (Array.isArray(m) && Array.isArray(_))
          ? !Cn(m, _)
          : m !== _
      )
        return !1;
    }
  }
  return !0;
}
var cf = (i) => i.type === "select-multiple",
  jp = (i) => Qa(i) || il(i),
  Ba = (i) => Ei(i) && i.isConnected,
  ff = (i) => {
    for (const s in i) if (Gt(i[s])) return !0;
    return !1;
  };
function Ci(i, s = {}) {
  const a = Array.isArray(i);
  if (Ge(i) || a)
    for (const c in i)
      Array.isArray(i[c]) || (Ge(i[c]) && !ff(i[c]))
        ? ((s[c] = Array.isArray(i[c]) ? [] : {}), Ci(i[c], s[c]))
        : ct(i[c]) || (s[c] = !0);
  return s;
}
function df(i, s, a) {
  const c = Array.isArray(i);
  if (Ge(i) || c)
    for (const p in i)
      Array.isArray(i[p]) || (Ge(i[p]) && !ff(i[p]))
        ? Ke(s) || ja(a[p])
          ? (a[p] = Array.isArray(i[p]) ? Ci(i[p], []) : { ...Ci(i[p]) })
          : df(i[p], ct(s) ? {} : s[p], a[p])
        : (a[p] = !Cn(i[p], s[p]));
  return a;
}
var tl = (i, s) => df(i, s, Ci(s)),
  pf = (i, { valueAsNumber: s, valueAsDate: a, setValueAs: c }) =>
    Ke(i)
      ? i
      : s
      ? i === ""
        ? NaN
        : i && +i
      : a && Qt(i)
      ? new Date(i)
      : c
      ? c(i)
      : i;
function za(i) {
  const s = i.ref;
  return Ga(s)
    ? s.files
    : Qa(s)
    ? uf(i.refs).value
    : cf(s)
    ? [...s.selectedOptions].map(({ value: a }) => a)
    : il(s)
    ? sf(i.refs).value
    : pf(Ke(s.value) ? i.ref.value : s.value, i);
}
var Mp = (i, s, a, c) => {
    const p = {};
    for (const m of i) {
      const _ = X(s, m);
      _ && Ie(p, m, _._f);
    }
    return {
      criteriaMode: a,
      names: [...i],
      fields: p,
      shouldUseNativeValidation: c,
    };
  },
  nl = (i) =>
    Ke(i)
      ? i
      : Ti(i)
      ? i.source
      : Ge(i)
      ? Ti(i.value)
        ? i.value.source
        : i.value
      : i;
const qc = "AsyncFunction";
var Vp = (i) =>
    !!i &&
    !!i.validate &&
    !!(
      (Gt(i.validate) && i.validate.constructor.name === qc) ||
      (Ge(i.validate) &&
        Object.values(i.validate).find((s) => s.constructor.name === qc))
    ),
  Up = (i) =>
    i.mount &&
    (i.required ||
      i.min ||
      i.max ||
      i.maxLength ||
      i.minLength ||
      i.pattern ||
      i.validate);
function Zc(i, s, a) {
  const c = X(i, a);
  if (c || Ya(a)) return { error: c, name: a };
  const p = a.split(".");
  for (; p.length; ) {
    const m = p.join("."),
      _ = X(s, m),
      w = X(i, m);
    if (_ && !Array.isArray(_) && a !== m) return { name: a };
    if (w && w.type) return { name: m, error: w };
    p.pop();
  }
  return { name: a };
}
var Hp = (i, s, a, c, p) =>
    p.isOnAll
      ? !1
      : !a && p.isOnTouch
      ? !(s || i)
      : (a ? c.isOnBlur : p.isOnBlur)
      ? !i
      : (a ? c.isOnChange : p.isOnChange)
      ? i
      : !0,
  $p = (i, s) => !Ri(X(i, s)).length && Ze(i, s);
const Wp = {
  mode: jt.onSubmit,
  reValidateMode: jt.onChange,
  shouldFocusError: !0,
};
function Yp(i = {}) {
  let s = { ...Wp, ...i },
    a = {
      submitCount: 0,
      isDirty: !1,
      isLoading: Gt(s.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: s.errors || {},
      disabled: s.disabled || !1,
    },
    c = {},
    p =
      Ge(s.defaultValues) || Ge(s.values)
        ? Dt(s.defaultValues || s.values) || {}
        : {},
    m = s.shouldUnregister ? {} : Dt(p),
    _ = { action: !1, mount: !1, watch: !1 },
    w = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    z,
    Z = 0;
  const D = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    T = { values: La(), array: La(), state: La() },
    Q = $c(s.mode),
    de = $c(s.reValidateMode),
    H = s.criteriaMode === jt.all,
    $ = (y) => (S) => {
      clearTimeout(Z), (Z = setTimeout(y, S));
    },
    V = async (y) => {
      if (!s.disabled && (D.isValid || y)) {
        const S = s.resolver ? gt((await se()).errors) : await Se(c, !0);
        S !== a.isValid && T.state.next({ isValid: S });
      }
    },
    te = (y, S) => {
      !s.disabled &&
        (D.isValidating || D.validatingFields) &&
        ((y || Array.from(w.mount)).forEach((E) => {
          E && (S ? Ie(a.validatingFields, E, S) : Ze(a.validatingFields, E));
        }),
        T.state.next({
          validatingFields: a.validatingFields,
          isValidating: !gt(a.validatingFields),
        }));
    },
    C = (y, S = [], E, U, M = !0, F = !0) => {
      if (U && E && !s.disabled) {
        if (((_.action = !0), F && Array.isArray(X(c, y)))) {
          const le = E(X(c, y), U.argA, U.argB);
          M && Ie(c, y, le);
        }
        if (F && Array.isArray(X(a.errors, y))) {
          const le = E(X(a.errors, y), U.argA, U.argB);
          M && Ie(a.errors, y, le), $p(a.errors, y);
        }
        if (D.touchedFields && F && Array.isArray(X(a.touchedFields, y))) {
          const le = E(X(a.touchedFields, y), U.argA, U.argB);
          M && Ie(a.touchedFields, y, le);
        }
        D.dirtyFields && (a.dirtyFields = tl(p, m)),
          T.state.next({
            name: y,
            isDirty: b(y, S),
            dirtyFields: a.dirtyFields,
            errors: a.errors,
            isValid: a.isValid,
          });
      } else Ie(m, y, S);
    },
    O = (y, S) => {
      Ie(a.errors, y, S), T.state.next({ errors: a.errors });
    },
    j = (y) => {
      (a.errors = y), T.state.next({ errors: a.errors, isValid: !1 });
    },
    J = (y, S, E, U) => {
      const M = X(c, y);
      if (M) {
        const F = X(m, y, Ke(E) ? X(p, y) : E);
        Ke(F) || (U && U.defaultChecked) || S
          ? Ie(m, y, S ? F : za(M._f))
          : Ne(y, F),
          _.mount && V();
      }
    },
    ce = (y, S, E, U, M) => {
      let F = !1,
        le = !1;
      const ye = { name: y };
      if (!s.disabled) {
        const $e = !!(X(c, y) && X(c, y)._f && X(c, y)._f.disabled);
        if (!E || U) {
          D.isDirty &&
            ((le = a.isDirty),
            (a.isDirty = ye.isDirty = b()),
            (F = le !== ye.isDirty));
          const Ue = $e || Cn(X(p, y), S);
          (le = !!(!$e && X(a.dirtyFields, y))),
            Ue || $e ? Ze(a.dirtyFields, y) : Ie(a.dirtyFields, y, !0),
            (ye.dirtyFields = a.dirtyFields),
            (F = F || (D.dirtyFields && le !== !Ue));
        }
        if (E) {
          const Ue = X(a.touchedFields, y);
          Ue ||
            (Ie(a.touchedFields, y, E),
            (ye.touchedFields = a.touchedFields),
            (F = F || (D.touchedFields && Ue !== E)));
        }
        F && M && T.state.next(ye);
      }
      return F ? ye : {};
    },
    ne = (y, S, E, U) => {
      const M = X(a.errors, y),
        F = D.isValid && Yt(S) && a.isValid !== S;
      if (
        (s.delayError && E
          ? ((z = $(() => O(y, E))), z(s.delayError))
          : (clearTimeout(Z),
            (z = null),
            E ? Ie(a.errors, y, E) : Ze(a.errors, y)),
        (E ? !Cn(M, E) : M) || !gt(U) || F)
      ) {
        const le = {
          ...U,
          ...(F && Yt(S) ? { isValid: S } : {}),
          errors: a.errors,
          name: y,
        };
        (a = { ...a, ...le }), T.state.next(le);
      }
    },
    se = async (y) => {
      te(y, !0);
      const S = await s.resolver(
        m,
        s.context,
        Mp(y || w.mount, c, s.criteriaMode, s.shouldUseNativeValidation)
      );
      return te(y), S;
    },
    Ce = async (y) => {
      const { errors: S } = await se(y);
      if (y)
        for (const E of y) {
          const U = X(S, E);
          U ? Ie(a.errors, E, U) : Ze(a.errors, E);
        }
      else a.errors = S;
      return S;
    },
    Se = async (y, S, E = { valid: !0 }) => {
      for (const U in y) {
        const M = y[U];
        if (M) {
          const { _f: F, ...le } = M;
          if (F) {
            const ye = w.array.has(F.name),
              $e = M._f && Vp(M._f);
            $e && D.validatingFields && te([U], !0);
            const Ue = await Xc(
              M,
              w.disabled,
              m,
              H,
              s.shouldUseNativeValidation && !S,
              ye
            );
            if (
              ($e && D.validatingFields && te([U]),
              Ue[F.name] && ((E.valid = !1), S))
            )
              break;
            !S &&
              (X(Ue, F.name)
                ? ye
                  ? Op(a.errors, Ue, F.name)
                  : Ie(a.errors, F.name, Ue[F.name])
                : Ze(a.errors, F.name));
          }
          !gt(le) && (await Se(le, S, E));
        }
      }
      return E.valid;
    },
    Ae = () => {
      for (const y of w.unMount) {
        const S = X(c, y);
        S &&
          (S._f.refs ? S._f.refs.every((E) => !Ba(E)) : !Ba(S._f.ref)) &&
          ke(y);
      }
      w.unMount = new Set();
    },
    b = (y, S) => !s.disabled && (y && S && Ie(m, y, S), !Cn(h(), p)),
    ie = (y, S, E) =>
      zp(y, w, { ...(_.mount ? m : Ke(S) ? p : Qt(y) ? { [y]: S } : S) }, E, S),
    we = (y) =>
      Ri(X(_.mount ? m : p, y, s.shouldUnregister ? X(p, y, []) : [])),
    Ne = (y, S, E = {}) => {
      const U = X(c, y);
      let M = S;
      if (U) {
        const F = U._f;
        F &&
          (!F.disabled && Ie(m, y, pf(S, F)),
          (M = Ei(F.ref) && ct(S) ? "" : S),
          cf(F.ref)
            ? [...F.ref.options].forEach(
                (le) => (le.selected = M.includes(le.value))
              )
            : F.refs
            ? il(F.ref)
              ? F.refs.length > 1
                ? F.refs.forEach(
                    (le) =>
                      (!le.defaultChecked || !le.disabled) &&
                      (le.checked = Array.isArray(M)
                        ? !!M.find((ye) => ye === le.value)
                        : M === le.value)
                  )
                : F.refs[0] && (F.refs[0].checked = !!M)
              : F.refs.forEach((le) => (le.checked = le.value === M))
            : Ga(F.ref)
            ? (F.ref.value = "")
            : ((F.ref.value = M),
              F.ref.type || T.values.next({ name: y, values: { ...m } })));
      }
      (E.shouldDirty || E.shouldTouch) &&
        ce(y, M, E.shouldTouch, E.shouldDirty, !0),
        E.shouldValidate && W(y);
    },
    Pe = (y, S, E) => {
      for (const U in S) {
        const M = S[U],
          F = `${y}.${U}`,
          le = X(c, F);
        (w.array.has(y) || Ge(M) || (le && !le._f)) && !Hn(M)
          ? Pe(F, M, E)
          : Ne(F, M, E);
      }
    },
    ve = (y, S, E = {}) => {
      const U = X(c, y),
        M = w.array.has(y),
        F = Dt(S);
      Ie(m, y, F),
        M
          ? (T.array.next({ name: y, values: { ...m } }),
            (D.isDirty || D.dirtyFields) &&
              E.shouldDirty &&
              T.state.next({
                name: y,
                dirtyFields: tl(p, m),
                isDirty: b(y, F),
              }))
          : U && !U._f && !ct(F)
          ? Pe(y, F, E)
          : Ne(y, F, E),
        Wc(y, w) && T.state.next({ ...a }),
        T.values.next({ name: _.mount ? y : void 0, values: { ...m } });
    },
    I = async (y) => {
      _.mount = !0;
      const S = y.target;
      let E = S.name,
        U = !0;
      const M = X(c, E),
        F = () => (S.type ? za(M._f) : Cp(y)),
        le = (ye) => {
          U =
            Number.isNaN(ye) ||
            (Hn(ye) && isNaN(ye.getTime())) ||
            Cn(ye, X(m, E, ye));
        };
      if (M) {
        let ye, $e;
        const Ue = F(),
          kt = y.type === Hc.BLUR || y.type === Hc.FOCUS_OUT,
          cl =
            (!Up(M._f) && !s.resolver && !X(a.errors, E) && !M._f.deps) ||
            Hp(kt, X(a.touchedFields, E), a.isSubmitted, de, Q),
          Kt = Wc(E, w, kt);
        Ie(m, E, Ue),
          kt
            ? (M._f.onBlur && M._f.onBlur(y), z && z(0))
            : M._f.onChange && M._f.onChange(y);
        const Xt = ce(E, Ue, kt, !1),
          Fi = !gt(Xt) || Kt;
        if (
          (!kt && T.values.next({ name: E, type: y.type, values: { ...m } }),
          cl)
        )
          return (
            D.isValid && (s.mode === "onBlur" && kt ? V() : kt || V()),
            Fi && T.state.next({ name: E, ...(Kt ? {} : Xt) })
          );
        if ((!kt && Kt && T.state.next({ ...a }), s.resolver)) {
          const { errors: hr } = await se([E]);
          if ((le(Ue), U)) {
            const fl = Zc(a.errors, c, E),
              dl = Zc(hr, c, fl.name || E);
            (ye = dl.error), (E = dl.name), ($e = gt(hr));
          }
        } else
          te([E], !0),
            (ye = (await Xc(M, w.disabled, m, H, s.shouldUseNativeValidation))[
              E
            ]),
            te([E]),
            le(Ue),
            U && (ye ? ($e = !1) : D.isValid && ($e = await Se(c, !0)));
        U && (M._f.deps && W(M._f.deps), ne(E, $e, ye, Xt));
      }
    },
    re = (y, S) => {
      if (X(a.errors, S) && y.focus) return y.focus(), 1;
    },
    W = async (y, S = {}) => {
      let E, U;
      const M = _i(y);
      if (s.resolver) {
        const F = await Ce(Ke(y) ? y : M);
        (E = gt(F)), (U = y ? !M.some((le) => X(F, le)) : E);
      } else
        y
          ? ((U = (
              await Promise.all(
                M.map(async (F) => {
                  const le = X(c, F);
                  return await Se(le && le._f ? { [F]: le } : le);
                })
              )
            ).every(Boolean)),
            !(!U && !a.isValid) && V())
          : (U = E = await Se(c));
      return (
        T.state.next({
          ...(!Qt(y) || (D.isValid && E !== a.isValid) ? {} : { name: y }),
          ...(s.resolver || !y ? { isValid: E } : {}),
          errors: a.errors,
        }),
        S.shouldFocus && !U && rl(c, re, y ? M : w.mount),
        U
      );
    },
    h = (y) => {
      const S = { ...(_.mount ? m : p) };
      return Ke(y) ? S : Qt(y) ? X(S, y) : y.map((E) => X(S, E));
    },
    N = (y, S) => ({
      invalid: !!X((S || a).errors, y),
      isDirty: !!X((S || a).dirtyFields, y),
      error: X((S || a).errors, y),
      isValidating: !!X(a.validatingFields, y),
      isTouched: !!X((S || a).touchedFields, y),
    }),
    pe = (y) => {
      y && _i(y).forEach((S) => Ze(a.errors, S)),
        T.state.next({ errors: y ? a.errors : {} });
    },
    me = (y, S, E) => {
      const U = (X(c, y, { _f: {} })._f || {}).ref,
        M = X(a.errors, y) || {},
        { ref: F, message: le, type: ye, ...$e } = M;
      Ie(a.errors, y, { ...$e, ...S, ref: U }),
        T.state.next({ name: y, errors: a.errors, isValid: !1 }),
        E && E.shouldFocus && U && U.focus && U.focus();
    },
    _e = (y, S) =>
      Gt(y)
        ? T.values.subscribe({ next: (E) => y(ie(void 0, S), E) })
        : ie(y, S, !0),
    ke = (y, S = {}) => {
      for (const E of y ? _i(y) : w.mount)
        w.mount.delete(E),
          w.array.delete(E),
          S.keepValue || (Ze(c, E), Ze(m, E)),
          !S.keepError && Ze(a.errors, E),
          !S.keepDirty && Ze(a.dirtyFields, E),
          !S.keepTouched && Ze(a.touchedFields, E),
          !S.keepIsValidating && Ze(a.validatingFields, E),
          !s.shouldUnregister && !S.keepDefaultValue && Ze(p, E);
      T.values.next({ values: { ...m } }),
        T.state.next({ ...a, ...(S.keepDirty ? { isDirty: b() } : {}) }),
        !S.keepIsValid && V();
    },
    Re = ({ disabled: y, name: S, field: E, fields: U }) => {
      ((Yt(y) && _.mount) || y || w.disabled.has(S)) &&
        (y ? w.disabled.add(S) : w.disabled.delete(S),
        ce(S, za(E ? E._f : X(U, S)._f), !1, !1, !0));
    },
    xe = (y, S = {}) => {
      let E = X(c, y);
      const U = Yt(S.disabled) || Yt(s.disabled);
      return (
        Ie(c, y, {
          ...(E || {}),
          _f: {
            ...(E && E._f ? E._f : { ref: { name: y } }),
            name: y,
            mount: !0,
            ...S,
          },
        }),
        w.mount.add(y),
        E
          ? Re({
              field: E,
              disabled: Yt(S.disabled) ? S.disabled : s.disabled,
              name: y,
            })
          : J(y, !0, S.value),
        {
          ...(U ? { disabled: S.disabled || s.disabled } : {}),
          ...(s.progressive
            ? {
                required: !!S.required,
                min: nl(S.min),
                max: nl(S.max),
                minLength: nl(S.minLength),
                maxLength: nl(S.maxLength),
                pattern: nl(S.pattern),
              }
            : {}),
          name: y,
          onChange: I,
          onBlur: I,
          ref: (M) => {
            if (M) {
              xe(y, S), (E = X(c, y));
              const F =
                  (Ke(M.value) &&
                    M.querySelectorAll &&
                    M.querySelectorAll("input,select,textarea")[0]) ||
                  M,
                le = jp(F),
                ye = E._f.refs || [];
              if (le ? ye.find(($e) => $e === F) : F === E._f.ref) return;
              Ie(c, y, {
                _f: {
                  ...E._f,
                  ...(le
                    ? {
                        refs: [
                          ...ye.filter(Ba),
                          F,
                          ...(Array.isArray(X(p, y)) ? [{}] : []),
                        ],
                        ref: { type: F.type, name: y },
                      }
                    : { ref: F }),
                },
              }),
                J(y, !1, void 0, F);
            } else
              (E = X(c, y, {})),
                E._f && (E._f.mount = !1),
                (s.shouldUnregister || S.shouldUnregister) &&
                  !(Pp(w.array, y) && _.action) &&
                  w.unMount.add(y);
          },
        }
      );
    },
    Be = () => s.shouldFocusError && rl(c, re, w.mount),
    at = (y) => {
      Yt(y) &&
        (T.state.next({ disabled: y }),
        rl(
          c,
          (S, E) => {
            const U = X(c, E);
            U &&
              ((S.disabled = U._f.disabled || y),
              Array.isArray(U._f.refs) &&
                U._f.refs.forEach((M) => {
                  M.disabled = U._f.disabled || y;
                }));
          },
          0,
          !1
        ));
    },
    Nn = (y, S) => async (E) => {
      let U;
      E && (E.preventDefault && E.preventDefault(), E.persist && E.persist());
      let M = Dt(m);
      if (w.disabled.size) for (const F of w.disabled) Ie(M, F, void 0);
      if ((T.state.next({ isSubmitting: !0 }), s.resolver)) {
        const { errors: F, values: le } = await se();
        (a.errors = F), (M = le);
      } else await Se(c);
      if ((Ze(a.errors, "root"), gt(a.errors))) {
        T.state.next({ errors: {} });
        try {
          await y(M, E);
        } catch (F) {
          U = F;
        }
      } else S && (await S({ ...a.errors }, E)), Be(), setTimeout(Be);
      if (
        (T.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: gt(a.errors) && !U,
          submitCount: a.submitCount + 1,
          errors: a.errors,
        }),
        U)
      )
        throw U;
    },
    sl = (y, S = {}) => {
      X(c, y) &&
        (Ke(S.defaultValue)
          ? ve(y, Dt(X(p, y)))
          : (ve(y, S.defaultValue), Ie(p, y, Dt(S.defaultValue))),
        S.keepTouched || Ze(a.touchedFields, y),
        S.keepDirty ||
          (Ze(a.dirtyFields, y),
          (a.isDirty = S.defaultValue ? b(y, Dt(X(p, y))) : b())),
        S.keepError || (Ze(a.errors, y), D.isValid && V()),
        T.state.next({ ...a }));
    },
    Pn = (y, S = {}) => {
      const E = y ? Dt(y) : p,
        U = Dt(E),
        M = gt(y),
        F = M ? p : U;
      if ((S.keepDefaultValues || (p = E), !S.keepValues)) {
        if (S.keepDirtyValues) {
          const le = new Set([...w.mount, ...Object.keys(tl(p, m))]);
          for (const ye of Array.from(le))
            X(a.dirtyFields, ye) ? Ie(F, ye, X(m, ye)) : ve(ye, X(F, ye));
        } else {
          if (Wa && Ke(y))
            for (const le of w.mount) {
              const ye = X(c, le);
              if (ye && ye._f) {
                const $e = Array.isArray(ye._f.refs)
                  ? ye._f.refs[0]
                  : ye._f.ref;
                if (Ei($e)) {
                  const Ue = $e.closest("form");
                  if (Ue) {
                    Ue.reset();
                    break;
                  }
                }
              }
            }
          c = {};
        }
        (m = s.shouldUnregister ? (S.keepDefaultValues ? Dt(p) : {}) : Dt(F)),
          T.array.next({ values: { ...F } }),
          T.values.next({ values: { ...F } });
      }
      (w = {
        mount: S.keepDirtyValues ? w.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (_.mount = !D.isValid || !!S.keepIsValid || !!S.keepDirtyValues),
        (_.watch = !!s.shouldUnregister),
        T.state.next({
          submitCount: S.keepSubmitCount ? a.submitCount : 0,
          isDirty: M
            ? !1
            : S.keepDirty
            ? a.isDirty
            : !!(S.keepDefaultValues && !Cn(y, p)),
          isSubmitted: S.keepIsSubmitted ? a.isSubmitted : !1,
          dirtyFields: M
            ? {}
            : S.keepDirtyValues
            ? S.keepDefaultValues && m
              ? tl(p, m)
              : a.dirtyFields
            : S.keepDefaultValues && y
            ? tl(p, y)
            : S.keepDirty
            ? a.dirtyFields
            : {},
          touchedFields: S.keepTouched ? a.touchedFields : {},
          errors: S.keepErrors ? a.errors : {},
          isSubmitSuccessful: S.keepIsSubmitSuccessful
            ? a.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    Yn = (y, S) => Pn(Gt(y) ? y(m) : y, S);
  return {
    control: {
      register: xe,
      unregister: ke,
      getFieldState: N,
      handleSubmit: Nn,
      setError: me,
      _executeSchema: se,
      _getWatch: ie,
      _getDirty: b,
      _updateValid: V,
      _removeUnmounted: Ae,
      _updateFieldArray: C,
      _updateDisabledField: Re,
      _getFieldArray: we,
      _reset: Pn,
      _resetDefaultValues: () =>
        Gt(s.defaultValues) &&
        s.defaultValues().then((y) => {
          Yn(y, s.resetOptions), T.state.next({ isLoading: !1 });
        }),
      _updateFormState: (y) => {
        a = { ...a, ...y };
      },
      _disableForm: at,
      _subjects: T,
      _proxyFormState: D,
      _setErrors: j,
      get _fields() {
        return c;
      },
      get _formValues() {
        return m;
      },
      get _state() {
        return _;
      },
      set _state(y) {
        _ = y;
      },
      get _defaultValues() {
        return p;
      },
      get _names() {
        return w;
      },
      set _names(y) {
        w = y;
      },
      get _formState() {
        return a;
      },
      set _formState(y) {
        a = y;
      },
      get _options() {
        return s;
      },
      set _options(y) {
        s = { ...s, ...y };
      },
    },
    trigger: W,
    register: xe,
    handleSubmit: Nn,
    watch: _e,
    setValue: ve,
    getValues: h,
    reset: Yn,
    resetField: sl,
    clearErrors: pe,
    unregister: ke,
    setError: me,
    setFocus: (y, S = {}) => {
      const E = X(c, y),
        U = E && E._f;
      if (U) {
        const M = U.refs ? U.refs[0] : U.ref;
        M.focus && (M.focus(), S.shouldSelect && Gt(M.select) && M.select());
      }
    },
    getFieldState: N,
  };
}
function Gp(i = {}) {
  const s = fe.useRef(void 0),
    a = fe.useRef(void 0),
    [c, p] = fe.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: Gt(i.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: i.errors || {},
      disabled: i.disabled || !1,
      defaultValues: Gt(i.defaultValues) ? void 0 : i.defaultValues,
    });
  s.current || (s.current = { ...Yp(i), formState: c });
  const m = s.current.control;
  return (
    (m._options = i),
    Bp({
      subject: m._subjects.state,
      next: (_) => {
        Lp(_, m._proxyFormState, m._updateFormState) && p({ ...m._formState });
      },
    }),
    fe.useEffect(() => m._disableForm(i.disabled), [m, i.disabled]),
    fe.useEffect(() => {
      if (m._proxyFormState.isDirty) {
        const _ = m._getDirty();
        _ !== c.isDirty && m._subjects.state.next({ isDirty: _ });
      }
    }, [m, c.isDirty]),
    fe.useEffect(() => {
      i.values && !Cn(i.values, a.current)
        ? (m._reset(i.values, m._options.resetOptions),
          (a.current = i.values),
          p((_) => ({ ..._ })))
        : m._resetDefaultValues();
    }, [i.values, m]),
    fe.useEffect(() => {
      i.errors && m._setErrors(i.errors);
    }, [i.errors, m]),
    fe.useEffect(() => {
      m._state.mount || (m._updateValid(), (m._state.mount = !0)),
        m._state.watch &&
          ((m._state.watch = !1), m._subjects.state.next({ ...m._formState })),
        m._removeUnmounted();
    }),
    fe.useEffect(() => {
      i.shouldUnregister && m._subjects.values.next({ values: m._getWatch() });
    }, [i.shouldUnregister, m]),
    (s.current.formState = Dp(c, m)),
    s.current
  );
}
const Wt = ({
    id: i,
    label: s,
    options: a,
    registerOptions: c,
    customColorInput: p,
    lang: m,
    onSelectChange: _,
  }) =>
    B.jsx(B.Fragment, {
      children: p
        ? B.jsxs(B.Fragment, {
            children: [
              B.jsx("label", {
                htmlFor: "custom",
                children:
                  m === "lt"
                    ? "Nestandartinis apdailos kodas"
                    : "Custom color code",
              }),
              B.jsx("input", {
                id: "custom",
                type: "text",
                ...c,
                maxLength: 10,
                onChange: (w) => {
                  _ && i && _(i, w.target.value);
                },
              }),
            ],
          })
        : B.jsxs(B.Fragment, {
            children: [
              B.jsx("label", { htmlFor: i, children: s }),
              B.jsxs("select", {
                defaultValue: "default",
                id: i,
                ...c,
                onChange: (w) => {
                  _ && i && _(i, w.target.value);
                },
                children: [
                  B.jsx("option", {
                    value: "default",
                    disabled: !0,
                    children: "-",
                  }),
                  a.map((w, z) =>
                    B.jsx(
                      "option",
                      {
                        className: w.bg,
                        value: w.key,
                        style: { fontWeight: w.bold },
                        children: w.value,
                      },
                      z
                    )
                  ),
                ],
              }),
            ],
          }),
    }),
  Qp = [
    { key: "", value: "Skaidriai apdailai" },
    {
      key: "3% 10.07.17 - 3% balinimas",
      value: "3% 10.07.17 - 3% balinimas (std)",
      bg: "grey",
    },
    { key: "6% 11.07.17 - 6% balinimas", value: "6% 11.07.17 - 6% balinimas" },
    {
      key: "10% 12.07.17 - 10% balinimas",
      value: "10% 12.07.17 - 10% balinimas",
    },
    {
      key: "1,5% 14.09.21 - 1,5% balinimas",
      value: "1,5% 14.09.21 - 1,5% balinimas",
    },
    { key: "19.11.19 - Juoda", value: "19.11.19 - Juoda (std)", bg: "grey" },
    { key: "09.05.22 - Ruda", value: "09.05.22 - Ruda (nr. 21)" },
    { key: "20.11.19 - Ruda", value: "20.11.19 - Ruda (nr. 22)" },
    { key: "02.01.20 - Ruda", value: "02.01.20 - Ruda (nr. 23)" },
    { key: "02.06.10 - Ruda", value: "02.06.10 - Ruda (nr. 24)" },
    { key: "01.06.12 - Balinta", value: "01.06.12 - Balinta" },
    { key: "01.27.16 - Balinta", value: "01.27.16 - Balinta" },
    { key: "31.01.17 - Balinta", value: "31.01.17 - Balinta" },
    { key: "25.04.17 - Balinta", value: "25.04.17 - Balinta" },
    { key: "26.04.17 - Balinta", value: "26.04.17 - Balinta" },
    { key: "27.04.17 - S2000 - N", value: "27.04.17 - S2000-N" },
    { key: "03.05.17 - S0500 - N", value: "03.05.17 - S0500-N" },
    {
      key: "05.06.17 - Oak Auster (stone)",
      value: "05.06.17 - Oak Auster (stone)",
    },
    { key: "23.11.17 - S2040 - Y", value: "23.11.17 - S2040-Y" },
    { key: "10.10.18 - Ruda", value: "10.10.18 - Ruda" },
    { key: "11.10.18 - Ruda", value: "11.10.18 - Ruda" },
    { key: "12.10.18 - Balinta", value: "12.10.18 - Balinta" },
    { key: "24.04.19 - Ruda", value: "24.04.19 - Ruda" },
    { key: "27.08.19 - Balinta", value: "27.08.19 - Balinta" },
    { key: "08.11.19 - Ruda", value: "08.11.19 - Ruda" },
    { key: "21.11.19 - Balinta", value: "21.11.19 - Balinta" },
    { key: "22.11.19 - Balinta", value: "22.11.19 - Balinta" },
    { key: "12.02.20 - S5040 - Y90R", value: "12.02.20 - S5040-Y90R" },
    { key: "07.04.20 - S2000 - N", value: "07.04.20 - S2000-N" },
    { key: "07.05.20 - Vintage", value: "07.05.20 - Vintage" },
    { key: "12.08.20 - Balinta", value: "12.08.20 - Balinta" },
    { key: "30.10.20 - Balinta", value: "30.10.20 - Balinta" },
    { key: "23.11.20 - Balinta", value: "23.11.20 - Balinta" },
    { key: "20.01.21 - Pilka", value: "20.01.21 - Pilka" },
    { key: "02.03.21 - Vintage", value: "02.03.21 - Vintage" },
    { key: "03.03.21 - Ruda", value: "03.03.21 - Ruda" },
    { key: "01.07.21 - Gratonet", value: "01.07.21 - Gratonet" },
    { key: "28.09.21 - Nero Natur", value: "28.09.21 - Nero Natur" },
    { key: "18.03.22 - Pilka", value: "18.03.22 - Pilka" },
    { key: "25.04.22 - Balinta", value: "25.04.22 - Balinta" },
    { key: "23.09.22 - Ruda", value: "23.09.22 - Ruda" },
    {
      key: "25.11.22 - Pilka Smoked oak",
      value: "25.11.22 - Pilka Smoked oak",
    },
    { key: "09.12.22 - Žalia", value: "09.12.22 - Žalia" },
    { key: "23.01.23 - Ruda Teak", value: "23.01.23 - Ruda Teak" },
    {
      key: "30.01.23 - Ruda F5872 Refined Walnut",
      value: "30.01.23 - Ruda F5872 Refined Walnut",
    },
    { key: "27.04.23 - S7010 - R90B", value: "27.04.23 - S7010-R90B" },
    { key: "25.05.23 - S3005 - G20Y", value: "25.05.23 - S3005-G20Y" },
    { key: "01.12.23 - S1515 - R", value: "01.12.23 - S1515-R" },
    { key: "03.04.24 - Pilka", value: "03.04.24 - Pilka" },
    { key: "08.04.24 - S6020 - B10G", value: "08.04.24 - S6020-B10G" },
    { key: "09.04.24 - S7010 - B90G", value: "09.04.24 - S7010-B90G" },
    { key: "22.04.24 - S5010 - G50Y", value: "22.04.24 - S5010-G50Y" },
    { key: "03.09.24 - Ruda", value: "03.09.24 - Ruda" },
    {
      key: "04.09.24 - Tamsiai pilka / Juoda",
      value: "04.09.24 - Tamsiai pilka / Juoda",
    },
    { key: "08.10.24 - Ruda", value: "08.10.24 - Ruda" },
    { key: "28.10.24 - Ruda", value: "28.10.24 - Ruda" },
  ],
  Jc = [
    {
      key: "A",
      value: "A - Visi paviršiai, išskyrus standartiškai neapdailinamus*",
    },
    { key: "A+H", value: "A+H - Visi paviršiai* + Ertmės ir išfrezavimai" },
    { key: "T - Top", value: "T - Viršutinis paviršius" },
    { key: "B - Bottom", value: "B - Apatinis paviršius" },
    { key: "E - Edge", value: "E - Briauna" },
    { key: "H - Hole", value: "H - Ertmės ir išfrezavimai" },
    { key: "T+E - Top + Edge", value: "T+E - Viršutinis paviršius + Briauna" },
    {
      key: "B+H - Bottom + Hole",
      value: "B+H - Apatinis paviršius + Ertmės ir išfrezavimai",
    },
    { key: "B+E - Bottom + Edge", value: "B+E - Apatinis paviršius + Briauna" },
    {
      key: "E+H - Edge + Hole",
      value: "E+H - Briauna + Ertmės ir išfrezavimai",
    },
  ],
  Kp = [
    { key: "gl.5", value: "gl.5" },
    { key: "gl.10", value: "gl.10" },
    { key: "gl.15", value: "gl.15" },
    { key: "gl.25", value: "gl.25" },
  ],
  Aa = [
    { key: "KL", value: "KL - Lakuota*" },
    { key: "GR", value: "GR - Gruntuota" },
    { key: "PUSS", value: "PUSS - Šlifuota" },
    { key: "UBH", value: "UBH - Neapdailinta" },
  ],
  Xp = [
    { key: "null", value: "Visi paviršiai" },
    { key: "3% 10.07.17", value: "3% 10.07.17" },
    { key: "6% 11.07.17", value: "6% 11.07.17" },
    { key: "10% 12.07.17", value: "10% 12.07.17" },
  ],
  qp = [
    { key: "", value: "Spalva pagal RAL paletę:", bold: 700 },
    { key: "Ral1036", value: "Ral1036" },
    { key: "", value: "Spalva pagal NCS paletę:", bold: 700 },
    { key: "S0502-G50Y", value: "S0502-G50Y (std baltas)" },
    { key: "S2000-N", value: "S2000-N (std pilkas)" },
    { key: "S9000-N", value: "S9000-N (std tamsiai pilkas)" },
    { key: "S0500-N", value: "S0500-N (std pilka)" },
    { key: "S7502-G", value: "S7502-G (std antracitas)" },
    {
      key: "S8502-B",
      value: "S8502-B (std juodas, DT4023 Nero, DT4166 Charcoal)",
    },
    { key: "S2002-Y", value: "S2002-Y (DT4176 Mushroom)" },
    { key: "S3502-Y", value: "S3502-Y (DT4175 Pebble)" },
    { key: "S2005-G10Y", value: "S2005-G10Y (DT4177 Varpour)" },
    { key: "S5502-G", value: "S5502-G (DT4132 Ash)" },
    { key: "S7005-B20G", value: "S7005-B20G (DT4155 Pewter)" },
    { key: "S7010-R90B", value: "S7010-R90B (DT4179 Smokey Blue)" },
    { key: "S7005-Y80R", value: "S7005-Y80R (DT4172 Mauve)" },
    { key: "S8010-B90G", value: "S8010-B90G (DT4174 Conifer)" },
    { key: "S7010-R10B", value: "S7010-R10B (DT4154 Burgundy)" },
    { key: "S2010-G30Y", value: "S2010-G30Y (DT4183 Pistachio)" },
    { key: "S5010-G50Y", value: "S5010-G50Y (DT4184 Olive)" },
    { key: "S4020-Y40R", value: "S4020-Y40R (DT4003 Walnut)" },
    { key: "S3030-Y30R", value: "S3030-Y30R (DT4002 Leather)" },
    { key: "S2020-Y20R", value: "S2020-Y20R (DT4001 Clay)" },
    { key: "S2010-Y20R", value: "S2010-Y20R DT4007 Macadamia" },
    { key: "S3010-B70G ", value: "S3010-B70G DT4004 Blue haze" },
    { key: "S3010-R10B ", value: "S3010-R10B DT4010 Soft lilac" },
    { key: "S6020-B", value: "S6020-B DT4005 Denim" },
    { key: "S5005-Y20R", value: "S5005-Y20R DT4011 Taupe" },
    { key: "S5030-Y70R", value: "S5030-Y70R DT4008 Brick" },
    { key: "S7010-Y70R", value: "S7010-Y70R DT4009 Espresso" },
    { key: "S7502-B", value: "S7502-B DT4012 Basalt" },
  ],
  Zp = [
    {
      key: "3% 10.07.17 - 3% balinimas",
      value: "Uosis",
      image:
        "https://plus.unsplash.com/premium_photo-1675264382294-350cead0d427?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      key: "6% 11.07.17 - 6% balinimas",
      value: "Uosis",
      image:
        "https://plus.unsplash.com/premium_photo-1675370610192-3b9b9570391a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      key: "25.04.17 - Balinta",
      value: "Beržas",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP6nr-44OKM2pEcRvk_5TAmm5kwF4ZCyS5mQ&s",
    },
  ],
  bc = [
    {
      key: "A",
      value: "A - All surfaces except those that are not finished as standard*",
    },
    { key: "A+H", value: "A+H - All surfaces* + Holes and routings" },
    { key: "T - Top", value: "T - Top surface" },
    { key: "B - Bottom", value: "B - Bottom surface" },
    { key: "E - Edge", value: "E - Edge" },
    { key: "H - Hole", value: "H - Holes and routings" },
    { key: "T+E - Top + Edge", value: "T+E - Top surface + Edge" },
    {
      key: "B+H - Bottom + Holes and routings",
      value: "B+H - Bottom surface + Holes and routings",
    },
    { key: "B+E - Bottom + Edge", value: "B+E - Bottom surface + Edge" },
    { key: "E+H - Edge + Hole", value: "E+H - Edge + Holes and routings" },
  ],
  Jp = [
    { key: "", value: "Clear lacquering" },
    {
      key: "3% 10.07.17 - 3% balinimas",
      value: "3% 10.07.17 - 3% Whitened  (std)",
      bg: "grey",
    },
    { key: "6% 11.07.17 - 6% balinimas", value: "6% 11.07.17 - 6% Whitened" },
    {
      key: "10% 12.07.17 - 10% balinimas",
      value: "10% 12.07.17 - 10% Whitened",
    },
    {
      key: "1,5% 14.09.21 - 1,5% Balinta",
      value: "1,5% 14.09.21 - 1,5% Whitened",
    },
    { key: "19.11.19 - Juoda", value: "19.11.19 - Black (std)", bg: "grey" },
    { key: "09.05.22 - Ruda", value: "09.05.22 - Brown (no. 21)" },
    { key: "20.11.19 - Ruda", value: "20.11.19 - Brown (no. 22)" },
    { key: "02.01.20 - Ruda", value: "02.01.20 - Brown (no. 23)" },
    { key: "02.06.10 - Ruda", value: "02.06.10 - Brown (no. 24)" },
    { key: "01.06.12 - Balinta", value: "01.06.12 - Whitened" },
    { key: "01.27.16 - Balinta", value: "01.27.16 - Whitened" },
    { key: "31.01.17 - Balinta", value: "31.01.17 - Whitened" },
    { key: "25.04.17 - Balinta", value: "25.04.17 - Whitened" },
    { key: "26.04.17 - Balinta", value: "26.04.17 - Whitened" },
    { key: "27.04.17 - S2000 - N", value: "27.04.17 - S2000-N" },
    { key: "03.05.17 - S0500 - N", value: "03.05.17 - S0500-N" },
    {
      key: "05.06.17 - Oak Auster (stone)",
      value: "05.06.17 - Oak Auster (stone)",
    },
    { key: "23.11.17 - S2040 - Y", value: "23.11.17 - S2040-Y" },
    { key: "10.10.18 - Ruda", value: "10.10.18 - Brown" },
    { key: "11.10.18 - Ruda", value: "11.10.18 - Brown" },
    { key: "12.10.18 - Balinta", value: "12.10.18 - Whitened" },
    { key: "24.04.19 - Ruda", value: "24.04.19 - Brown" },
    { key: "27.08.19 - Balinta", value: "27.08.19 - Whitened" },
    { key: "08.11.19 - Ruda", value: "08.11.19 - Brown" },
    { key: "21.11.19 - Balinta", value: "21.11.19 - Whitened" },
    { key: "22.11.19 - Balinta", value: "22.11.19 - Whitened" },
    { key: "12.02.20 - S5040 - Y90R", value: "12.02.20 - S5040-Y90R" },
    { key: "07.04.20 - S2000 - N", value: "07.04.20 - S2000-N" },
    { key: "07.05.20 - Vintage", value: "07.05.20 - Vintage" },
    { key: "12.08.20 - Balinta", value: "12.08.20 - Whitened" },
    { key: "30.10.20 - Balinta", value: "30.10.20 - Whitened" },
    { key: "23.11.20 - Balinta", value: "23.11.20 - Whitened" },
    { key: "20.01.21 - Pilka", value: "20.01.21 - Grey" },
    { key: "02.03.21 - Vintage", value: "02.03.21 - Vintage" },
    { key: "03.03.21 - Ruda", value: "03.03.21 - Brown" },
    { key: "01.07.21 - Gratonet", value: "01.07.21 - Gratonet" },
    { key: "28.09.21 - Nero Natur", value: "28.09.21 - Nero Natur" },
    { key: "18.03.22 - Pilka", value: "18.03.22 - Grey" },
    { key: "25.04.22 - Balinta", value: "25.04.22 - Whitened" },
    { key: "23.09.22 - Ruda", value: "23.09.22 - Brown" },
    { key: "25.11.22 - Pilka Smoked oak", value: "25.11.22 - Grey Smoked oak" },
    { key: "09.12.22 - Žalia", value: "09.12.22 - Green" },
    { key: "23.01.23 - Ruda Teak", value: "23.01.23 - Brown Teak" },
    {
      key: "30.01.23 - Ruda F5872 Refined Walnut",
      value: "30.01.23 - Brown F5872 Refined Walnut",
    },
    { key: "27.04.23 - S7010 - R90B", value: "27.04.23 - S7010-R90B" },
    { key: "25.05.23 - S3005 - G20Y", value: "25.05.23 - S3005-G20Y" },
    { key: "01.12.23 - S1515 - R", value: "01.12.23 - S1515-R" },
    { key: "03.04.24 - Pilka", value: "03.04.24 - Grey" },
    { key: "08.04.24 - S6020 - B10G", value: "08.04.24 - S6020-B10G" },
    { key: "09.04.24 - S7010 - B90G", value: "09.04.24 - S7010-B90G" },
    { key: "22.04.24 - S5010 - G50Y", value: "22.04.24 - S5010-G50Y" },
    { key: "03.09.24 - Ruda", value: "03.09.24 - Brown" },
    {
      key: "04.09.24 - Tamsiai pilka / Juoda",
      value: "04.09.24 - Dark Grey / Juoda",
    },
    { key: "08.10.24 - Ruda", value: "08.10.24 - Brown" },
    { key: "28.10.24 - Ruda", value: "28.10.24 - Brown" },
  ],
  bp = [
    { key: "null", value: "All surfaces" },
    { key: "3% 10.07.17", value: "3% 10.07.17" },
    { key: "6% 11.07.17", value: "6% 11.07.17" },
    { key: "10% 12.07.17", value: "10% 12.07.17" },
  ],
  Oa = [
    { key: "KL", value: "KL - Varnished*" },
    { key: "GR", value: "GR - Primed" },
    { key: "PUSS", value: "PUSS - Sanded" },
    { key: "UBH", value: "UBH - Raw/Undecorated" },
  ],
  e0 = [
    { key: "", value: "RAL color selection:", bold: 700 },
    { key: "Ral1036", value: "Ral1036" },
    { key: "", value: "NCS color selection:", bold: 700 },
    { key: "S0502-G50Y", value: "S0502-G50Y (std white)" },
    { key: "S2000-N", value: "S2000-N (std grey)" },
    { key: "S0500-N", value: "S0500-N (std grey)" },
    { key: "S9000-N", value: "S9000-N (std dark grey)" },
    { key: "S7502-G", value: "S7502-G (std anthracite)" },
    {
      key: "S8502-B",
      value: "S8502-B (std Black, DT4023 Nero, DT4166 Charcoal)",
    },
    { key: "S2002-Y", value: "S2002-Y (DT4176 Mushroom)" },
    { key: "S3502-Y", value: "S3502-Y (DT4175 Pebble)" },
    { key: "S2005-G10Y", value: "S2005-G10Y (DT4177 Varpour)" },
    { key: "S5502-G", value: "S5502-G (DT4132 Ash)" },
    { key: "S7005-B20G", value: "S7005-B20G (DT4155 Pewter)" },
    { key: "S7010-R90B", value: "S7010-R90B (DT4179 Smokey Blue)" },
    { key: "S7005-Y80R", value: "S7005-Y80R (DT4172 Mauve)" },
    { key: "S8010-B90G", value: "S8010-B90G (DT4174 Conifer)" },
    { key: "S7010-R10B", value: "S7010-R10B (DT4154 Burgundy)" },
    { key: "S2010-G30Y", value: "S2010-G30Y (DT4183 Pistachio)" },
    { key: "S5010-G50Y", value: "S5010-G50Y (DT4184 Olive)" },
    { key: "S4020-Y40R", value: "S4020-Y40R (DT4003 Walnut)" },
    { key: "S3030-Y30R", value: "S3030-Y30R (DT4002 Leather)" },
    { key: "S2020-Y20R", value: "S2020-Y20R (DT4001 Clay)" },
    { key: "S2010-Y20R", value: "S2010-Y20R DT4007 Macadamia" },
    { key: "S3010-B70G ", value: "S3010-B70G DT4004 Blue haze" },
    { key: "S3010-R10B ", value: "S3010-R10B DT4010 Soft lilac" },
    { key: "S6020-B", value: "S6020-B DT4005 Denim" },
    { key: "S5005-Y20R", value: "S5005-Y20R DT4011 Taupe" },
    { key: "S5030-Y70R", value: "S5030-Y70R DT4008 Brick" },
    { key: "S7010-Y70R", value: "S7010-Y70R DT4009 Espresso" },
    { key: "S7502-B", value: "S7502-B DT4012 Basalt" },
  ],
  t0 = (i) => {
    i && navigator.clipboard.writeText(i);
  };
function yf(i) {
  var s,
    a,
    c = "";
  if (typeof i == "string" || typeof i == "number") c += i;
  else if (typeof i == "object")
    if (Array.isArray(i)) {
      var p = i.length;
      for (s = 0; s < p; s++)
        i[s] && (a = yf(i[s])) && (c && (c += " "), (c += a));
    } else for (a in i) i[a] && (c && (c += " "), (c += a));
  return c;
}
function $n() {
  for (var i, s, a = 0, c = "", p = arguments.length; a < p; a++)
    (i = arguments[a]) && (s = yf(i)) && (c && (c += " "), (c += s));
  return c;
}
function n0(i) {
  if (typeof document > "u") return;
  let s = document.head || document.getElementsByTagName("head")[0],
    a = document.createElement("style");
  (a.type = "text/css"),
    s.firstChild ? s.insertBefore(a, s.firstChild) : s.appendChild(a),
    a.styleSheet
      ? (a.styleSheet.cssText = i)
      : a.appendChild(document.createTextNode(i));
}
n0(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
var ol = (i) => typeof i == "number" && !isNaN(i),
  Wn = (i) => typeof i == "string",
  on = (i) => typeof i == "function",
  r0 = (i) => Wn(i) || ol(i),
  Ma = (i) => (Wn(i) || on(i) ? i : null),
  l0 = (i, s) => (i === !1 || (ol(i) && i > 0) ? i : s),
  Va = (i) => he.isValidElement(i) || Wn(i) || on(i) || ol(i);
function i0(i, s, a = 300) {
  let { scrollHeight: c, style: p } = i;
  requestAnimationFrame(() => {
    (p.minHeight = "initial"),
      (p.height = c + "px"),
      (p.transition = `all ${a}ms`),
      requestAnimationFrame(() => {
        (p.height = "0"), (p.padding = "0"), (p.margin = "0"), setTimeout(s, a);
      });
  });
}
function o0({
  enter: i,
  exit: s,
  appendPosition: a = !1,
  collapse: c = !0,
  collapseDuration: p = 300,
}) {
  return function ({
    children: m,
    position: _,
    preventExitTransition: w,
    done: z,
    nodeRef: Z,
    isIn: D,
    playToast: T,
  }) {
    let Q = a ? `${i}--${_}` : i,
      de = a ? `${s}--${_}` : s,
      H = he.useRef(0);
    return (
      he.useLayoutEffect(() => {
        let $ = Z.current,
          V = Q.split(" "),
          te = (C) => {
            C.target === Z.current &&
              (T(),
              $.removeEventListener("animationend", te),
              $.removeEventListener("animationcancel", te),
              H.current === 0 &&
                C.type !== "animationcancel" &&
                $.classList.remove(...V));
          };
        $.classList.add(...V),
          $.addEventListener("animationend", te),
          $.addEventListener("animationcancel", te);
      }, []),
      he.useEffect(() => {
        let $ = Z.current,
          V = () => {
            $.removeEventListener("animationend", V), c ? i0($, z, p) : z();
          };
        D ||
          (w
            ? V()
            : ((H.current = 1),
              ($.className += ` ${de}`),
              $.addEventListener("animationend", V)));
      }, [D]),
      fe.createElement(fe.Fragment, null, m)
    );
  };
}
function ef(i, s) {
  return {
    content: mf(i.content, i.props),
    containerId: i.props.containerId,
    id: i.props.toastId,
    theme: i.props.theme,
    type: i.props.type,
    data: i.props.data || {},
    isLoading: i.props.isLoading,
    icon: i.props.icon,
    reason: i.removalReason,
    status: s,
  };
}
function mf(i, s, a = !1) {
  return he.isValidElement(i) && !Wn(i.type)
    ? he.cloneElement(i, {
        closeToast: s.closeToast,
        toastProps: s,
        data: s.data,
        isPaused: a,
      })
    : on(i)
    ? i({ closeToast: s.closeToast, toastProps: s, data: s.data, isPaused: a })
    : i;
}
function a0({ closeToast: i, theme: s, ariaLabel: a = "close" }) {
  return fe.createElement(
    "button",
    {
      className: `Toastify__close-button Toastify__close-button--${s}`,
      type: "button",
      onClick: (c) => {
        c.stopPropagation(), i(!0);
      },
      "aria-label": a,
    },
    fe.createElement(
      "svg",
      { "aria-hidden": "true", viewBox: "0 0 14 16" },
      fe.createElement("path", {
        fillRule: "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
      })
    )
  );
}
function s0({
  delay: i,
  isRunning: s,
  closeToast: a,
  type: c = "default",
  hide: p,
  className: m,
  controlledProgress: _,
  progress: w,
  rtl: z,
  isIn: Z,
  theme: D,
}) {
  let T = p || (_ && w === 0),
    Q = {
      animationDuration: `${i}ms`,
      animationPlayState: s ? "running" : "paused",
    };
  _ && (Q.transform = `scaleX(${w})`);
  let de = $n(
      "Toastify__progress-bar",
      _
        ? "Toastify__progress-bar--controlled"
        : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${D}`,
      `Toastify__progress-bar--${c}`,
      { "Toastify__progress-bar--rtl": z }
    ),
    H = on(m) ? m({ rtl: z, type: c, defaultClassName: de }) : $n(de, m),
    $ = {
      [_ && w >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
        _ && w < 1
          ? null
          : () => {
              Z && a();
            },
    };
  return fe.createElement(
    "div",
    { className: "Toastify__progress-bar--wrp", "data-hidden": T },
    fe.createElement("div", {
      className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${D} Toastify__progress-bar--${c}`,
    }),
    fe.createElement("div", {
      role: "progressbar",
      "aria-hidden": T ? "true" : "false",
      "aria-label": "notification timer",
      className: H,
      style: Q,
      ...$,
    })
  );
}
var u0 = 1,
  vf = () => `${u0++}`;
function c0(i, s, a) {
  let c = 1,
    p = 0,
    m = [],
    _ = [],
    w = s,
    z = new Map(),
    Z = new Set(),
    D = (C) => (Z.add(C), () => Z.delete(C)),
    T = () => {
      (_ = Array.from(z.values())), Z.forEach((C) => C());
    },
    Q = ({ containerId: C, toastId: O, updateId: j }) => {
      let J = C ? C !== i : i !== 1,
        ce = z.has(O) && j == null;
      return J || ce;
    },
    de = (C, O) => {
      z.forEach((j) => {
        var J;
        (O == null || O === j.props.toastId) &&
          ((J = j.toggle) == null || J.call(j, C));
      });
    },
    H = (C) => {
      var O, j;
      (j = (O = C.props) == null ? void 0 : O.onClose) == null ||
        j.call(O, C.removalReason),
        (C.isActive = !1);
    },
    $ = (C) => {
      if (C == null) z.forEach(H);
      else {
        let O = z.get(C);
        O && H(O);
      }
      T();
    },
    V = () => {
      (p -= m.length), (m = []);
    },
    te = (C) => {
      var O, j;
      let { toastId: J, updateId: ce } = C.props,
        ne = ce == null;
      C.staleId && z.delete(C.staleId),
        (C.isActive = !0),
        z.set(J, C),
        T(),
        a(ef(C, ne ? "added" : "updated")),
        ne && ((j = (O = C.props).onOpen) == null || j.call(O));
    };
  return {
    id: i,
    props: w,
    observe: D,
    toggle: de,
    removeToast: $,
    toasts: z,
    clearQueue: V,
    buildToast: (C, O) => {
      if (Q(O)) return;
      let { toastId: j, updateId: J, data: ce, staleId: ne, delay: se } = O,
        Ce = J == null;
      Ce && p++;
      let Se = {
        ...w,
        style: w.toastStyle,
        key: c++,
        ...Object.fromEntries(
          Object.entries(O).filter(([b, ie]) => ie != null)
        ),
        toastId: j,
        updateId: J,
        data: ce,
        isIn: !1,
        className: Ma(O.className || w.toastClassName),
        progressClassName: Ma(O.progressClassName || w.progressClassName),
        autoClose: O.isLoading ? !1 : l0(O.autoClose, w.autoClose),
        closeToast(b) {
          (z.get(j).removalReason = b), $(j);
        },
        deleteToast() {
          let b = z.get(j);
          if (b != null) {
            if (
              (a(ef(b, "removed")),
              z.delete(j),
              p--,
              p < 0 && (p = 0),
              m.length > 0)
            ) {
              te(m.shift());
              return;
            }
            T();
          }
        },
      };
      (Se.closeButton = w.closeButton),
        O.closeButton === !1 || Va(O.closeButton)
          ? (Se.closeButton = O.closeButton)
          : O.closeButton === !0 &&
            (Se.closeButton = Va(w.closeButton) ? w.closeButton : !0);
      let Ae = { content: C, props: Se, staleId: ne };
      w.limit && w.limit > 0 && p > w.limit && Ce
        ? m.push(Ae)
        : ol(se)
        ? setTimeout(() => {
            te(Ae);
          }, se)
        : te(Ae);
    },
    setProps(C) {
      w = C;
    },
    setToggle: (C, O) => {
      let j = z.get(C);
      j && (j.toggle = O);
    },
    isToastActive: (C) => {
      var O;
      return (O = z.get(C)) == null ? void 0 : O.isActive;
    },
    getSnapshot: () => _,
  };
}
var ft = new Map(),
  ll = [],
  Ua = new Set(),
  f0 = (i) => Ua.forEach((s) => s(i)),
  hf = () => ft.size > 0;
function d0() {
  ll.forEach((i) => kf(i.content, i.options)), (ll = []);
}
var p0 = (i, { containerId: s }) => {
  var a;
  return (a = ft.get(s || 1)) == null ? void 0 : a.toasts.get(i);
};
function gf(i, s) {
  var a;
  if (s) return !!((a = ft.get(s)) != null && a.isToastActive(i));
  let c = !1;
  return (
    ft.forEach((p) => {
      p.isToastActive(i) && (c = !0);
    }),
    c
  );
}
function y0(i) {
  if (!hf()) {
    ll = ll.filter((s) => i != null && s.options.toastId !== i);
    return;
  }
  if (i == null || r0(i))
    ft.forEach((s) => {
      s.removeToast(i);
    });
  else if (i && ("containerId" in i || "id" in i)) {
    let s = ft.get(i.containerId);
    s
      ? s.removeToast(i.id)
      : ft.forEach((a) => {
          a.removeToast(i.id);
        });
  }
}
var m0 = (i = {}) => {
  ft.forEach((s) => {
    s.props.limit &&
      (!i.containerId || s.id === i.containerId) &&
      s.clearQueue();
  });
};
function kf(i, s) {
  Va(i) &&
    (hf() || ll.push({ content: i, options: s }),
    ft.forEach((a) => {
      a.buildToast(i, s);
    }));
}
function v0(i) {
  var s;
  (s = ft.get(i.containerId || 1)) == null || s.setToggle(i.id, i.fn);
}
function Sf(i, s) {
  ft.forEach((a) => {
    (s == null ||
      !(s != null && s.containerId) ||
      (s == null ? void 0 : s.containerId) === a.id) &&
      a.toggle(i, s == null ? void 0 : s.id);
  });
}
function h0(i) {
  let s = i.containerId || 1;
  return {
    subscribe(a) {
      let c = c0(s, i, f0);
      ft.set(s, c);
      let p = c.observe(a);
      return (
        d0(),
        () => {
          p(), ft.delete(s);
        }
      );
    },
    setProps(a) {
      var c;
      (c = ft.get(s)) == null || c.setProps(a);
    },
    getSnapshot() {
      var a;
      return (a = ft.get(s)) == null ? void 0 : a.getSnapshot();
    },
  };
}
function g0(i) {
  return (
    Ua.add(i),
    () => {
      Ua.delete(i);
    }
  );
}
function k0(i) {
  return i && (Wn(i.toastId) || ol(i.toastId)) ? i.toastId : vf();
}
function al(i, s) {
  return kf(i, s), s.toastId;
}
function Di(i, s) {
  return { ...s, type: (s && s.type) || i, toastId: k0(s) };
}
function Li(i) {
  return (s, a) => al(s, Di(i, a));
}
function Le(i, s) {
  return al(i, Di("default", s));
}
Le.loading = (i, s) =>
  al(
    i,
    Di("default", {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...s,
    })
  );
function S0(i, { pending: s, error: a, success: c }, p) {
  let m;
  s && (m = Wn(s) ? Le.loading(s, p) : Le.loading(s.render, { ...p, ...s }));
  let _ = {
      isLoading: null,
      autoClose: null,
      closeOnClick: null,
      closeButton: null,
      draggable: null,
    },
    w = (Z, D, T) => {
      if (D == null) {
        Le.dismiss(m);
        return;
      }
      let Q = { type: Z, ..._, ...p, data: T },
        de = Wn(D) ? { render: D } : D;
      return (
        m ? Le.update(m, { ...Q, ...de }) : Le(de.render, { ...Q, ...de }), T
      );
    },
    z = on(i) ? i() : i;
  return z.then((Z) => w("success", c, Z)).catch((Z) => w("error", a, Z)), z;
}
Le.promise = S0;
Le.success = Li("success");
Le.info = Li("info");
Le.error = Li("error");
Le.warning = Li("warning");
Le.warn = Le.warning;
Le.dark = (i, s) => al(i, Di("default", { theme: "dark", ...s }));
function _0(i) {
  y0(i);
}
Le.dismiss = _0;
Le.clearWaitingQueue = m0;
Le.isActive = gf;
Le.update = (i, s = {}) => {
  let a = p0(i, s);
  if (a) {
    let { props: c, content: p } = a,
      m = { delay: 100, ...c, ...s, toastId: s.toastId || i, updateId: vf() };
    m.toastId !== i && (m.staleId = i);
    let _ = m.render || p;
    delete m.render, al(_, m);
  }
};
Le.done = (i) => {
  Le.update(i, { progress: 1 });
};
Le.onChange = g0;
Le.play = (i) => Sf(!0, i);
Le.pause = (i) => Sf(!1, i);
function w0(i) {
  var s;
  let { subscribe: a, getSnapshot: c, setProps: p } = he.useRef(h0(i)).current;
  p(i);
  let m = (s = he.useSyncExternalStore(a, c, c)) == null ? void 0 : s.slice();
  function _(w) {
    if (!m) return [];
    let z = new Map();
    return (
      i.newestOnTop && m.reverse(),
      m.forEach((Z) => {
        let { position: D } = Z.props;
        z.has(D) || z.set(D, []), z.get(D).push(Z);
      }),
      Array.from(z, (Z) => w(Z[0], Z[1]))
    );
  }
  return {
    getToastToRender: _,
    isToastActive: gf,
    count: m == null ? void 0 : m.length,
  };
}
function x0(i) {
  let [s, a] = he.useState(!1),
    [c, p] = he.useState(!1),
    m = he.useRef(null),
    _ = he.useRef({
      start: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      didMove: !1,
    }).current,
    {
      autoClose: w,
      pauseOnHover: z,
      closeToast: Z,
      onClick: D,
      closeOnClick: T,
    } = i;
  v0({ id: i.toastId, containerId: i.containerId, fn: a }),
    he.useEffect(() => {
      if (i.pauseOnFocusLoss)
        return (
          Q(),
          () => {
            de();
          }
        );
    }, [i.pauseOnFocusLoss]);
  function Q() {
    document.hasFocus() || te(),
      window.addEventListener("focus", V),
      window.addEventListener("blur", te);
  }
  function de() {
    window.removeEventListener("focus", V),
      window.removeEventListener("blur", te);
  }
  function H(ne) {
    if (i.draggable === !0 || i.draggable === ne.pointerType) {
      C();
      let se = m.current;
      (_.canCloseOnClick = !0),
        (_.canDrag = !0),
        (se.style.transition = "none"),
        i.draggableDirection === "x"
          ? ((_.start = ne.clientX),
            (_.removalDistance = se.offsetWidth * (i.draggablePercent / 100)))
          : ((_.start = ne.clientY),
            (_.removalDistance =
              (se.offsetHeight *
                (i.draggablePercent === 80
                  ? i.draggablePercent * 1.5
                  : i.draggablePercent)) /
              100));
    }
  }
  function $(ne) {
    let {
      top: se,
      bottom: Ce,
      left: Se,
      right: Ae,
    } = m.current.getBoundingClientRect();
    ne.nativeEvent.type !== "touchend" &&
    i.pauseOnHover &&
    ne.clientX >= Se &&
    ne.clientX <= Ae &&
    ne.clientY >= se &&
    ne.clientY <= Ce
      ? te()
      : V();
  }
  function V() {
    a(!0);
  }
  function te() {
    a(!1);
  }
  function C() {
    (_.didMove = !1),
      document.addEventListener("pointermove", j),
      document.addEventListener("pointerup", J);
  }
  function O() {
    document.removeEventListener("pointermove", j),
      document.removeEventListener("pointerup", J);
  }
  function j(ne) {
    let se = m.current;
    if (_.canDrag && se) {
      (_.didMove = !0),
        s && te(),
        i.draggableDirection === "x"
          ? (_.delta = ne.clientX - _.start)
          : (_.delta = ne.clientY - _.start),
        _.start !== ne.clientX && (_.canCloseOnClick = !1);
      let Ce =
        i.draggableDirection === "x"
          ? `${_.delta}px, var(--y)`
          : `0, calc(${_.delta}px + var(--y))`;
      (se.style.transform = `translate3d(${Ce},0)`),
        (se.style.opacity = `${1 - Math.abs(_.delta / _.removalDistance)}`);
    }
  }
  function J() {
    O();
    let ne = m.current;
    if (_.canDrag && _.didMove && ne) {
      if (((_.canDrag = !1), Math.abs(_.delta) > _.removalDistance)) {
        p(!0), i.closeToast(!0), i.collapseAll();
        return;
      }
      (ne.style.transition = "transform 0.2s, opacity 0.2s"),
        ne.style.removeProperty("transform"),
        ne.style.removeProperty("opacity");
    }
  }
  let ce = { onPointerDown: H, onPointerUp: $ };
  return (
    w && z && ((ce.onMouseEnter = te), i.stacked || (ce.onMouseLeave = V)),
    T &&
      (ce.onClick = (ne) => {
        D && D(ne), _.canCloseOnClick && Z(!0);
      }),
    {
      playToast: V,
      pauseToast: te,
      isRunning: s,
      preventExitTransition: c,
      toastRef: m,
      eventHandlers: ce,
    }
  );
}
var E0 = typeof window < "u" ? he.useLayoutEffect : he.useEffect,
  Bi = ({ theme: i, type: s, isLoading: a, ...c }) =>
    fe.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill:
        i === "colored" ? "currentColor" : `var(--toastify-icon-color-${s})`,
      ...c,
    });
function T0(i) {
  return fe.createElement(
    Bi,
    { ...i },
    fe.createElement("path", {
      d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
    })
  );
}
function C0(i) {
  return fe.createElement(
    Bi,
    { ...i },
    fe.createElement("path", {
      d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
    })
  );
}
function N0(i) {
  return fe.createElement(
    Bi,
    { ...i },
    fe.createElement("path", {
      d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
    })
  );
}
function P0(i) {
  return fe.createElement(
    Bi,
    { ...i },
    fe.createElement("path", {
      d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
    })
  );
}
function R0() {
  return fe.createElement("div", { className: "Toastify__spinner" });
}
var Ha = { info: C0, warning: T0, success: N0, error: P0, spinner: R0 },
  D0 = (i) => i in Ha;
function L0({ theme: i, type: s, isLoading: a, icon: c }) {
  let p = null,
    m = { theme: i, type: s };
  return (
    c === !1 ||
      (on(c)
        ? (p = c({ ...m, isLoading: a }))
        : he.isValidElement(c)
        ? (p = he.cloneElement(c, m))
        : a
        ? (p = Ha.spinner())
        : D0(s) && (p = Ha[s](m))),
    p
  );
}
var B0 = (i) => {
    let {
        isRunning: s,
        preventExitTransition: a,
        toastRef: c,
        eventHandlers: p,
        playToast: m,
      } = x0(i),
      {
        closeButton: _,
        children: w,
        autoClose: z,
        onClick: Z,
        type: D,
        hideProgressBar: T,
        closeToast: Q,
        transition: de,
        position: H,
        className: $,
        style: V,
        progressClassName: te,
        updateId: C,
        role: O,
        progress: j,
        rtl: J,
        toastId: ce,
        deleteToast: ne,
        isIn: se,
        isLoading: Ce,
        closeOnClick: Se,
        theme: Ae,
        ariaLabel: b,
      } = i,
      ie = $n(
        "Toastify__toast",
        `Toastify__toast-theme--${Ae}`,
        `Toastify__toast--${D}`,
        { "Toastify__toast--rtl": J },
        { "Toastify__toast--close-on-click": Se }
      ),
      we = on($)
        ? $({ rtl: J, position: H, type: D, defaultClassName: ie })
        : $n(ie, $),
      Ne = L0(i),
      Pe = !!j || !z,
      ve = { closeToast: Q, type: D, theme: Ae },
      I = null;
    return (
      _ === !1 ||
        (on(_)
          ? (I = _(ve))
          : he.isValidElement(_)
          ? (I = he.cloneElement(_, ve))
          : (I = a0(ve))),
      fe.createElement(
        de,
        {
          isIn: se,
          done: ne,
          position: H,
          preventExitTransition: a,
          nodeRef: c,
          playToast: m,
        },
        fe.createElement(
          "div",
          {
            id: ce,
            tabIndex: 0,
            onClick: Z,
            "data-in": se,
            className: we,
            ...p,
            style: V,
            ref: c,
            ...(se && { role: O, "aria-label": b }),
          },
          Ne != null &&
            fe.createElement(
              "div",
              {
                className: $n("Toastify__toast-icon", {
                  "Toastify--animate-icon Toastify__zoom-enter": !Ce,
                }),
              },
              Ne
            ),
          mf(w, i, !s),
          I,
          !i.customProgressBar &&
            fe.createElement(s0, {
              ...(C && !Pe ? { key: `p-${C}` } : {}),
              rtl: J,
              theme: Ae,
              delay: z,
              isRunning: s,
              isIn: se,
              closeToast: Q,
              hide: T,
              type: D,
              className: te,
              controlledProgress: Pe,
              progress: j || 0,
            })
        )
      )
    );
  },
  z0 = (i, s = !1) => ({
    enter: `Toastify--animate Toastify__${i}-enter`,
    exit: `Toastify--animate Toastify__${i}-exit`,
    appendPosition: s,
  }),
  _f = o0(z0("bounce", !0)),
  A0 = {
    position: "top-right",
    transition: _f,
    autoClose: 5e3,
    closeButton: !0,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    draggable: "touch",
    draggablePercent: 80,
    draggableDirection: "x",
    role: "alert",
    theme: "light",
    "aria-label": "Notifications Alt+T",
    hotKeys: (i) => i.altKey && i.code === "KeyT",
  };
function O0(i) {
  let s = { ...A0, ...i },
    a = i.stacked,
    [c, p] = he.useState(!0),
    m = he.useRef(null),
    { getToastToRender: _, isToastActive: w, count: z } = w0(s),
    { className: Z, style: D, rtl: T, containerId: Q, hotKeys: de } = s;
  function H(V) {
    let te = $n(
      "Toastify__toast-container",
      `Toastify__toast-container--${V}`,
      { "Toastify__toast-container--rtl": T }
    );
    return on(Z)
      ? Z({ position: V, rtl: T, defaultClassName: te })
      : $n(te, Ma(Z));
  }
  function $() {
    a && (p(!0), Le.play());
  }
  return (
    E0(() => {
      var V;
      if (a) {
        let te = m.current.querySelectorAll('[data-in="true"]'),
          C = 12,
          O = (V = s.position) == null ? void 0 : V.includes("top"),
          j = 0,
          J = 0;
        Array.from(te)
          .reverse()
          .forEach((ce, ne) => {
            let se = ce;
            se.classList.add("Toastify__toast--stacked"),
              ne > 0 && (se.dataset.collapsed = `${c}`),
              se.dataset.pos || (se.dataset.pos = O ? "top" : "bot");
            let Ce = j * (c ? 0.2 : 1) + (c ? 0 : C * ne);
            se.style.setProperty("--y", `${O ? Ce : Ce * -1}px`),
              se.style.setProperty("--g", `${C}`),
              se.style.setProperty("--s", `${1 - (c ? J : 0)}`),
              (j += se.offsetHeight),
              (J += 0.025);
          });
      }
    }, [c, z, a]),
    he.useEffect(() => {
      function V(te) {
        var C;
        let O = m.current;
        de(te) &&
          ((C = O.querySelector('[tabIndex="0"]')) == null || C.focus(),
          p(!1),
          Le.pause()),
          te.key === "Escape" &&
            (document.activeElement === O ||
              (O != null && O.contains(document.activeElement))) &&
            (p(!0), Le.play());
      }
      return (
        document.addEventListener("keydown", V),
        () => {
          document.removeEventListener("keydown", V);
        }
      );
    }, [de]),
    fe.createElement(
      "section",
      {
        ref: m,
        className: "Toastify",
        id: Q,
        onMouseEnter: () => {
          a && (p(!1), Le.pause());
        },
        onMouseLeave: $,
        "aria-live": "polite",
        "aria-atomic": "false",
        "aria-relevant": "additions text",
        "aria-label": s["aria-label"],
      },
      _((V, te) => {
        let C = te.length ? { ...D } : { ...D, pointerEvents: "none" };
        return fe.createElement(
          "div",
          {
            tabIndex: -1,
            className: H(V),
            "data-stacked": a,
            style: C,
            key: `c-${V}`,
          },
          te.map(({ content: O, props: j }) =>
            fe.createElement(
              B0,
              {
                ...j,
                stacked: a,
                collapseAll: $,
                isIn: w(j.toastId, j.containerId),
                key: `t-${j.key}`,
              },
              O
            )
          )
        );
      })
    )
  );
}
const F0 = (i) => {
    const s =
        i.Pavirsiai && i.Pavirsiai !== "null"
          ? i.Pavirsiai.split(" - ")[0]
          : "",
      a = i.Apdaila && i.Apdaila !== "null" ? i.Apdaila.split(" - ")[0] : "",
      c = i.Blizgumas && i.Blizgumas !== "null" ? i.Blizgumas : "";
    let p = "";
    return (
      s && a
        ? ((p = `${s}=${a}`), c && (p += ` ${c}`))
        : a
        ? ((p = a), c && (p += ` ${c}`))
        : s && c
        ? (p = `${s}=${c}`)
        : c && (p = c),
      p
    );
  },
  I0 = (i) => {
    const s = i.Apdaila && i.Apdaila !== "null" ? i.Apdaila : "",
      a = s || "",
      c = i.Top.split(" - ")[0],
      p = i.Bottom.split(" - ")[0],
      m = i.Briaunos.split(" - ")[0];
    return `${a} ${c}/${p}/${m}`;
  },
  j0 = (i) => {
    const s =
        i.Pavirsiai && i.Pavirsiai !== "null"
          ? i.Pavirsiai.split(" - ")[0]
          : "",
      a = i.Apdaila && i.Apdaila !== "null" ? i.Apdaila.split(" - ")[0] : "",
      c = i.custom && i.custom !== "null" ? i.custom : "";
    return c ? (s ? `${s}=${c}` : c) : a ? (s ? `${s}=${a}` : a) : "";
  },
  M0 = (i, s) => {
    let a;
    return (
      i === "standard"
        ? (a = F0({
            Pavirsiai: s.Pavirsiai || "",
            Apdaila: s.Apdaila || "",
            Blizgumas: s.Blizgumas || "",
          }))
        : i === "hus"
        ? (a = I0({
            Apdaila: s.Apdaila || "",
            Top: s.Top || "",
            Bottom: s.Bottom || "",
            Briaunos: s.Briaunos || "",
          }))
        : i === "paint" &&
          (a = j0({
            Pavirsiai: s.Pavirsiai || "",
            Apdaila: s.Apdaila || "",
            custom: s.custom || "",
          })),
      a
    );
  };
var xi = { exports: {} },
  V0 = xi.exports,
  tf;
function U0() {
  return (
    tf ||
      ((tf = 1),
      (function (i, s) {
        (function (a, c) {
          i.exports = c();
        })(V0, function () {
          var a =
            /^(?:NCS|NCS\sS)\s(\d{2})(\d{2})-(N|R|G|B|Y)(\d{2})?(R|G|B|Y)?$/;
          function c(w) {
            if (((w = w.trim().toUpperCase().match(a)), w === null)) return !1;
            var z = parseInt(w[1], 10),
              Z = parseInt(w[2], 10),
              D = w[3],
              T = parseInt(w[4], 10) || 0;
            if (D !== "N") {
              var Q = 1.05 * z - 5.25,
                de = Z,
                H,
                $,
                V,
                te,
                C,
                O,
                j,
                J,
                ce,
                ne,
                se,
                Ce,
                Se,
                Ae,
                b;
              return (
                D === "Y" && T <= 60
                  ? (H = 1)
                  : (D === "Y" && T > 60) || (D === "R" && T <= 80)
                  ? (D === "Y" ? ($ = T - 60) : ($ = T + 40),
                    (H = (Math.sqrt(14884 - Math.pow($, 2)) - 22) / 100))
                  : (D === "R" && T > 80) || D === "B"
                  ? (H = 0)
                  : D === "G" &&
                    (($ = T - 170),
                    (H = (Math.sqrt(33800 - Math.pow($, 2)) - 70) / 100)),
                D === "Y" && T <= 80
                  ? (V = 0)
                  : (D === "Y" && T > 80) || (D === "R" && T <= 60)
                  ? (D === "Y" ? (te = T - 80 + 20.5) : (te = T + 20 + 20.5),
                    (V = (104 - Math.sqrt(11236 - Math.pow(te, 2))) / 100))
                  : (D === "R" && T > 60) || (D === "B" && T <= 80)
                  ? (D === "R" ? (C = T - 60 - 60) : (C = T + 40 - 60),
                    (V = (Math.sqrt(1e4 - Math.pow(C, 2)) - 10) / 100))
                  : (D === "B" && T > 80) || (D === "G" && T <= 40)
                  ? (D === "B" ? (O = T - 80 - 131) : (O = T + 20 - 131),
                    (V = (122 - Math.sqrt(19881 - Math.pow(O, 2))) / 100))
                  : D === "G" && T > 40 && (V = 0),
                D === "Y"
                  ? (j = (85 - (17 / 20) * T) / 100)
                  : D === "R" && T <= 60
                  ? (j = 0)
                  : D === "R" && T > 60
                  ? ((J = T - 60 + 35),
                    (j = (67.5 - Math.sqrt(5776 - Math.pow(J, 2))) / 100))
                  : D === "B" && T <= 60
                  ? ((ne = 1 * T - 68.5),
                    (j = (6.5 + Math.sqrt(7044.5 - Math.pow(ne, 2))) / 100))
                  : (D === "B" && T > 60) || (D === "G" && T <= 60)
                  ? (j = 0.9)
                  : D === "G" &&
                    T > 60 &&
                    ((ce = T - 60), (j = (90 - (1 / 8) * ce) / 100)),
                (te = (H + j + V) / 3),
                (se = ((te - H) * (100 - de)) / 100 + H),
                (Ce = ((te - j) * (100 - de)) / 100 + j),
                (Se = ((te - V) * (100 - de)) / 100 + V),
                (Ae = Math.max(se, Ce, Se)),
                (b = 1 / Ae),
                {
                  R: parseInt(((se * b * (100 - Q)) / 100) * 255, 10),
                  G: parseInt(((Ce * b * (100 - Q)) / 100) * 255, 10),
                  B: parseInt(((Se * b * (100 - Q)) / 100) * 255, 10),
                }
              );
            } else {
              var ie = parseInt((1 - z / 100) * 255, 10);
              return { R: ie, G: ie, B: ie };
            }
          }
          function p(w) {
            return w.toString(16).length > 1
              ? w.toString(16)
              : "0" + w.toString(16);
          }
          function m(w) {
            return ["#", p(w.R), p(w.G), p(w.B)].join("");
          }
          function _(w) {
            return "rgb(" + [w.R, w.G, w.B].join(",") + ")";
          }
          return {
            hex: function (w) {
              return w && c(w) ? m(c(w)) : null;
            },
            rgb: function (w) {
              return w && c(w) ? _(c(w)) : null;
            },
          };
        });
      })(xi)),
    xi.exports
  );
}
var H0 = U0();
const $0 = lf(H0);
function W0(i) {
  return i.startsWith("NCS ") || (i = `NCS ${i}`), i.replace(/S(?! )/g, "S ");
}
function Y0({ ncsCode: i }) {
  const s = i ? W0(i) : null;
  let a = "#FFFFFF";
  if (s)
    try {
      a = $0.hex(s);
    } catch (c) {
      console.error(`Error converting code ${s}:`, c);
    }
  return B.jsx("div", {
    style: {
      marginTop: "0.7rem",
      marginBottom: "-12.5rem",
      alignSelf: "flex-end",
      width: "50%",
      height: "200px",
      backgroundColor: a,
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
  });
}
const Ka = he.createContext(void 0),
  Xa = () => {
    const i = he.useContext(Ka);
    if (!i) throw new Error("Context must be used within a ContextProvider");
    return i;
  },
  G0 = ({ children: i }) => {
    const [s, a] = he.useState("lt"),
      [c, p] = he.useState(""),
      [m, _] = he.useState(""),
      [w, z] = he.useState(!1);
    return B.jsx(Ka.Provider, {
      value: {
        lang: s,
        setLang: a,
        stdImage: c,
        setStdImage: p,
        selectName: m,
        setSelectName: _,
        showStdSurfWarning: w,
        setShowStdSurfWarning: z,
      },
      children: i,
    });
  },
  Fa = ({ title: i, formType: s }) => {
    const { register: a, handleSubmit: c } = Gp(),
      [p, m] = he.useState(null),
      [_, w] = he.useState(!1),
      [z, Z] = he.useState(),
      [D, T] = he.useState(!0),
      [Q, de] = he.useState({
        apdaila: "null",
        pavirsiai: "null",
        blizgumas: "null",
        top: "null",
        bottom: "null",
        briaunos: "null",
        mediena: "null",
        custom: "",
      }),
      { lang: H, setStdImage: $, setShowStdSurfWarning: V } = Xa();
    he.useEffect(() => {
      const O = Zp.find((J) => J.value === Q.mediena && J.key === Q.apdaila),
        j = O == null ? void 0 : O.image;
      j && $(j);
    }, [Q, H]);
    const te = (O) => {
        O.custom ? Z(O.custom) : Z(O.Apdaila);
        const j = M0(s, O);
        m(j || "");
      },
      C = (O, j) => {
        de((J) => {
          const ce = { ...J, [O]: j };
          return p !== null && (m(null), w(!0)), ce;
        }),
          j === "A" && V(!0);
      };
    return (
      he.useEffect(() => {
        var j;
        let O = !1;
        if (s === "standard")
          O =
            Q.apdaila !== "null" &&
            Q.pavirsiai !== "null" &&
            Q.blizgumas !== "null";
        else if (s === "hus")
          O =
            !!Q.apdaila &&
            Q.top !== "null" &&
            Q.bottom !== "null" &&
            Q.briaunos !== "null";
        else if (s === "paint") {
          const J = Q.pavirsiai !== "null",
            ce = Q.apdaila !== "null",
            ne = ((j = Q.custom) == null ? void 0 : j.trim()) !== "";
          O = J && (ce || ne);
        }
        T(!O);
      }, [Q, s]),
      B.jsxs("div", {
        className: "formContainer",
        children: [
          B.jsxs("form", {
            onSubmit: c(te),
            children: [
              B.jsx("h3", { children: i }),
              s === "standard" &&
                B.jsxs("section", {
                  children: [
                    B.jsx(Wt, {
                      onSelectChange: C,
                      setDecorCode: m,
                      id: "pavirsiai",
                      label: H === "lt" ? "Paviršiai" : "Surface",
                      options: H === "lt" ? Jc : bc,
                      registerOptions: a("Pavirsiai", { required: !1 }),
                    }),
                    B.jsx("section", {
                      className: "decorWoodContainer",
                      children: B.jsxs("div", {
                        children: [
                          B.jsx(Wt, {
                            onSelectChange: C,
                            id: "apdaila",
                            label: H === "lt" ? "Apdaila" : "Decor",
                            options: H === "lt" ? Qp : Jp,
                            registerOptions: a("Apdaila", { required: !1 }),
                          }),
                          " ",
                        ],
                      }),
                    }),
                    B.jsx(Wt, {
                      onSelectChange: C,
                      id: "blizgumas",
                      label: H === "lt" ? "Blizgumas" : "Glossiness",
                      options: Kp,
                      registerOptions: a("Blizgumas", { required: !1 }),
                    }),
                  ],
                }),
              s === "paint" &&
                B.jsxs("section", {
                  children: [
                    B.jsx(Wt, {
                      onSelectChange: C,
                      setDecorCode: m,
                      id: "pavirsiai",
                      label: H === "lt" ? "Paviršiai" : "Surface",
                      options: H === "lt" ? Jc : bc,
                      registerOptions: a("Pavirsiai"),
                    }),
                    B.jsx(Wt, {
                      onSelectChange: C,
                      id: "apdaila",
                      label:
                        H === "lt" ? "Standartinė apdaila" : "Standard decor",
                      options: H === "lt" ? qp : e0,
                      registerOptions: a("Apdaila"),
                    }),
                    B.jsx(Wt, {
                      id: "custom",
                      onSelectChange: C,
                      registerOptions: a("custom"),
                      customColorInput: "customColorInput",
                      options: [],
                      lang: H,
                    }),
                    B.jsx(Y0, { ncsCode: z }),
                  ],
                }),
              s === "hus" &&
                B.jsxs("section", {
                  children: [
                    B.jsx(Wt, {
                      onSelectChange: C,
                      id: "apdaila",
                      label: H === "lt" ? "Apdaila" : "Decor",
                      options: H === "lt" ? Xp : bp,
                      registerOptions: a("Apdaila", { required: !0 }),
                    }),
                    B.jsx(Wt, {
                      onSelectChange: C,
                      id: "top",
                      label:
                        H === "lt" ? "Viršutinis paviršius" : "Top surface",
                      options: H === "lt" ? Aa : Oa,
                      registerOptions: a("Top", { required: !0 }),
                    }),
                    B.jsx(Wt, {
                      onSelectChange: C,
                      id: "bottom",
                      label:
                        H === "lt" ? "Apatinis paviršius" : "Bottom surface",
                      options: H === "lt" ? Aa : Oa,
                      registerOptions: a("Bottom", { required: !0 }),
                    }),
                    B.jsx(Wt, {
                      onSelectChange: C,
                      id: "briaunos",
                      label: H === "lt" ? "Briaunos" : "Edges",
                      options: H === "lt" ? Aa : Oa,
                      registerOptions: a("Briaunos", { required: !0 }),
                    }),
                    B.jsx("p", {
                      children:
                        H === "lt"
                          ? "* pagal nurodyta apdailą, jei nenurodyta tada apdaila gl.5"
                          : "* according to decor selected, if not selected then decor is gl.5",
                    }),
                  ],
                }),
              B.jsxs("section", {
                className: "copyGenerateButtons",
                children: [
                  B.jsx("input", {
                    className: D ? "btnCopyDisabled" : "btnCopyActive",
                    type: "submit",
                    value:
                      H === "lt"
                        ? "Generuoti apdailos kodą"
                        : "Generate decor code",
                  }),
                  B.jsx("button", {
                    className: p ? "btnCopyActive" : "btnCopyDisabled",
                    type: "button",
                    onClick: () => {
                      t0(p || ""),
                        H === "lt" && Le("Kodas nukopijuotas"),
                        H === "en" && Le("Code copied");
                    },
                    children: H === "lt" ? "Kopijuoti kodą" : "Copy decor code",
                  }),
                ],
              }),
            ],
          }),
          s === "paint" &&
            B.jsx("p", {
              className: "paintGloss",
              children:
                H === "lt"
                  ? "Standartinis dažų blizgumas - 30"
                  : "Standard paint gloss - 30",
            }),
          p
            ? B.jsx("p", { className: "decorCode", children: p })
            : _
            ? B.jsx("p", {
                className: "decorCode",
                children:
                  H === "lt"
                    ? "Spauskite 'Generuoti apdailos kodą'"
                    : "Press 'Generate decor code'",
              })
            : B.jsx("p", {
                className: "decorCode",
                children:
                  H === "lt" ? "Pasirinkite savybes" : "Select properties",
              }),
          B.jsx(O0, {
            position: "bottom-center",
            autoClose: 2e3,
            hideProgressBar: !0,
            newestOnTop: !1,
            closeOnClick: !1,
            rtl: !1,
            pauseOnFocusLoss: !0,
            draggable: !0,
            pauseOnHover: !0,
            theme: "light",
            transition: _f,
          }),
        ],
      })
    );
  },
  Q0 = "/CCG/assets/Svenheim_logo_rgb-B8bgMjls.webp";
function K0() {
  return B.jsx("img", {
    src: Q0,
    alt: "svenheim logo",
    onClick: () => window.location.reload(),
  });
}
const X0 = [
    {
      key: "A",
      value: "Visi paviršiai, išskyrus standartiškai neapdailinamus*",
    },
    { key: "T", value: "Viršutinis paviršius" },
    { key: "B", value: "Apatinis paviršius" },
    { key: "E", value: "Briauna" },
    { key: "H", value: "Ertmės ir išfrezavimai" },
    { key: "PU", value: "Poliuretaninis lakas" },
    { key: "Monell", value: "Monell" },
    { key: "KL", value: "Lakuota" },
    { key: "GR", value: "Gruntuota" },
    { key: "PUSS", value: "Šlifuota" },
    { key: "UBH", value: "Neapdailinta" },
  ],
  q0 = [
    {
      key: "Dubliuojasi info, naudojamas tik sutrumpinimas. (Edge E=gl.5)",
      value: "E=gl.5",
    },
    {
      key: "NCS kode nenaudojamas apatinis brūkšnys. (S9000_N)",
      value: "S9000-N",
    },
    {
      key: "Tarp sutrumpinimų naudojamas '+' simbolis. (E&B S8000-N)",
      value: "E+B=S8000-N",
    },
    {
      key: "Po sutrumpinimų dedamas lygybės ženklas. (E+ST S7502-G)",
      value: "E+B=S7502-G",
    },
    {
      key: "Rašant spalvos kodą, 'NCS' raidės nėra rašomos, išskyrus atvejus, kai naudojamos kitos spalvų paletes, pvz., RAL.",
      value: "S1002-Y",
    },
    {
      key: "Po 'S' raidės nededamas tarpas arba brūkšnys. (S_2505-G19Y)",
      value: "S2505-G19Y",
    },
    {
      key: "Rašant blizgumą nereikalingas tarpas tarp raidžių ir skaičiaus. (gl. 5)",
      value: "gl.5",
    },
    {
      key: "Tarp apdailos kodo ir blizgumo nereikalingas apatinis brūkšnys. (02.01.20_gl.5)",
      value: "02.01.20 gl.5",
    },
    {
      key: "Nereikalingas papildomas taškas tarp 0 ir 2. (0.2.01.20 gl.5)",
      value: "02.01.20 gl.5",
    },
    {
      key: "Žodis 'lakas' nėra būtinas apdailos kode. (E=gl.5 PU lakas)",
      value: "E=gl.5 PU",
    },
    {
      key: "Žodis 'Walnut' nereikalingas apdailos kode. (20.11.19 gl.10 Walnut)",
      value: "20.11.19 gl.10",
    },
    {
      key: "Jei apdaila daroma briaunoms ir plokštumoms, užtenka parašyti tik apdailos kodą (E+T+B=gl.5)",
      value: "gl.5",
    },
  ];
var wf = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  nf = fe.createContext && fe.createContext(wf),
  Z0 = ["attr", "size", "title"];
function J0(i, s) {
  if (i == null) return {};
  var a = b0(i, s),
    c,
    p;
  if (Object.getOwnPropertySymbols) {
    var m = Object.getOwnPropertySymbols(i);
    for (p = 0; p < m.length; p++)
      (c = m[p]),
        !(s.indexOf(c) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(i, c) &&
          (a[c] = i[c]);
  }
  return a;
}
function b0(i, s) {
  if (i == null) return {};
  var a = {};
  for (var c in i)
    if (Object.prototype.hasOwnProperty.call(i, c)) {
      if (s.indexOf(c) >= 0) continue;
      a[c] = i[c];
    }
  return a;
}
function Ni() {
  return (
    (Ni = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var s = 1; s < arguments.length; s++) {
            var a = arguments[s];
            for (var c in a)
              Object.prototype.hasOwnProperty.call(a, c) && (i[c] = a[c]);
          }
          return i;
        }),
    Ni.apply(this, arguments)
  );
}
function rf(i, s) {
  var a = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(i);
    s &&
      (c = c.filter(function (p) {
        return Object.getOwnPropertyDescriptor(i, p).enumerable;
      })),
      a.push.apply(a, c);
  }
  return a;
}
function Pi(i) {
  for (var s = 1; s < arguments.length; s++) {
    var a = arguments[s] != null ? arguments[s] : {};
    s % 2
      ? rf(Object(a), !0).forEach(function (c) {
          ey(i, c, a[c]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
      : rf(Object(a)).forEach(function (c) {
          Object.defineProperty(i, c, Object.getOwnPropertyDescriptor(a, c));
        });
  }
  return i;
}
function ey(i, s, a) {
  return (
    (s = ty(s)),
    s in i
      ? Object.defineProperty(i, s, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (i[s] = a),
    i
  );
}
function ty(i) {
  var s = ny(i, "string");
  return typeof s == "symbol" ? s : s + "";
}
function ny(i, s) {
  if (typeof i != "object" || !i) return i;
  var a = i[Symbol.toPrimitive];
  if (a !== void 0) {
    var c = a.call(i, s || "default");
    if (typeof c != "object") return c;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (s === "string" ? String : Number)(i);
}
function xf(i) {
  return (
    i &&
    i.map((s, a) =>
      fe.createElement(s.tag, Pi({ key: a }, s.attr), xf(s.child))
    )
  );
}
function zi(i) {
  return (s) =>
    fe.createElement(ry, Ni({ attr: Pi({}, i.attr) }, s), xf(i.child));
}
function ry(i) {
  var s = (a) => {
    var { attr: c, size: p, title: m } = i,
      _ = J0(i, Z0),
      w = p || a.size || "1em",
      z;
    return (
      a.className && (z = a.className),
      i.className && (z = (z ? z + " " : "") + i.className),
      fe.createElement(
        "svg",
        Ni(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          a.attr,
          c,
          _,
          {
            className: z,
            style: Pi(Pi({ color: i.color || a.color }, a.style), i.style),
            height: w,
            width: w,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        m && fe.createElement("title", null, m),
        i.children
      )
    );
  };
  return nf !== void 0
    ? fe.createElement(nf.Consumer, null, (a) => s(a))
    : s(wf);
}
function ly(i) {
  return zi({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "g",
        attr: { id: "Square_Minus" },
        child: [
          {
            tag: "g",
            attr: {},
            child: [
              {
                tag: "path",
                attr: {
                  d: "M18.438,20.938H5.564a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H18.438a2.5,2.5,0,0,1,2.5,2.5V18.438A2.5,2.5,0,0,1,18.438,20.938ZM5.564,4.064a1.5,1.5,0,0,0-1.5,1.5V18.438a1.5,1.5,0,0,0,1.5,1.5H18.438a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z",
                },
                child: [],
              },
              {
                tag: "path",
                attr: { d: "M9,12.5a.5.5,0,0,1,0-1h6a.5.5,0,0,1,0,1Z" },
                child: [],
              },
            ],
          },
        ],
      },
    ],
  })(i);
}
function iy(i) {
  return zi({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "g",
        attr: { id: "Square_Plus" },
        child: [
          {
            tag: "g",
            attr: {},
            child: [
              {
                tag: "path",
                attr: {
                  d: "M18.438,20.938H5.563a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H18.438a2.5,2.5,0,0,1,2.5,2.5V18.438A2.5,2.5,0,0,1,18.438,20.938ZM5.563,4.064a1.5,1.5,0,0,0-1.5,1.5V18.438a1.5,1.5,0,0,0,1.5,1.5H18.438a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z",
                },
                child: [],
              },
              {
                tag: "path",
                attr: {
                  d: "M15,12.5H12.5V15a.5.5,0,0,1-1,0V12.5H9a.5.5,0,0,1,0-1h2.5V9a.5.5,0,0,1,1,0v2.5H15A.5.5,0,0,1,15,12.5Z",
                },
                child: [],
              },
            ],
          },
        ],
      },
    ],
  })(i);
}
const Ia = ({ title: i, arrayToMap: s }) => {
    const [a, c] = he.useState(!1);
    return B.jsxs("div", {
      className: "singleRuleContainer",
      children: [
        B.jsxs("h2", {
          className: "ruleTitle",
          onClick: () => c(!a),
          children: [
            i,
            B.jsx("span", {
              children: a ? B.jsx(ly, { size: 30 }) : B.jsx(iy, { size: 30 }),
            }),
          ],
        }),
        B.jsx("div", {
          children:
            a &&
            B.jsx("div", {
              className: "pContainer",
              children: s.map((p, m) =>
                B.jsxs(
                  "p",
                  {
                    children: [
                      p.key,
                      " -",
                      B.jsx("span", { children: p.value }),
                    ],
                  },
                  m
                )
              ),
            }),
        }),
      ],
    });
  },
  oy = [
    { key: "10.07.17 gl.5 GR/UBH/KL", value: "pavyzdys" },
    { key: "10.07.17", value: "apdailos kodas" },
    { key: "gl.5", value: "apdailos blizgumas" },
    { key: "GR", value: "viršutinės plokštumos apdaila" },
    { key: "UBH", value: "apatinės plokštumos apdaila" },
    { key: "KL", value: "briaunų apdaila" },
  ],
  ay = [
    { key: "10.07.17 gl.5 GR/UBH/KL", value: "Example" },
    { key: "10.07.17", value: "Decor code" },
    { key: "gl.5", value: "Decor  glossiness" },
    { key: "GR", value: "Top surface decor" },
    { key: "UBH", value: "Bottom surface decor" },
    { key: "KL", value: "Edges decor" },
  ],
  sy = [
    {
      key: "A",
      value: "All surfaces except those that are not finished as standard*",
    },
    { key: "T", value: "Surface Top" },
    { key: "B", value: "Surface Bottom" },
    { key: "E", value: "Edge" },
    { key: "H", value: "Holes and routings" },
    { key: "PU", value: "Polyurethane varnish" },
    { key: "Monell", value: "Monell" },
    { key: "KL", value: "Varnished" },
    { key: "GR", value: "Primed" },
    { key: "PUSS", value: "Sanded" },
    { key: "UBH", value: "Raw/Undecorated" },
  ],
  uy = [
    {
      key: "Information is duplicated, only abbreviation is used. (Edge E=gl.5)",
      value: "E=gl.5",
    },
    {
      key: "The NCS code does not use an underscore. (S9000_N)",
      value: "S9000-N",
    },
    {
      key: "The '+' symbol is used between abbreviations. (E&B S8000-N)",
      value: "E+B=S8000-N",
    },
    {
      key: "Abbreviations are followed by an equal sign. (E+ST S7502-G)",
      value: "E+B=S7502-G",
    },
    {
      key: "When writing the color code, the letters 'NCS' are not needed, except when using other color palettes, such as RAL.",
      value: "S1002-Y",
    },
    {
      key: "No space or dash is needed after the letter 'S'. (S_2505-G19Y)",
      value: "S2505-G19Y",
    },
    {
      key: "A space between letters and numbers is not required when writing glossiness. (gl. 5)",
      value: "gl.5",
    },
    {
      key: "An underscore is not required between the finish code and the glossiness code. (02.01.20_gl.5)",
      value: "02.01.20 gl.5",
    },
    {
      key: "An extra dot between 0 and 2 is unnecessary. (0.2.01.20 gl.5)",
      value: "02.01.20 gl.5",
    },
    {
      key: "The word 'lacquer' is not necessary. (E=gl.5 PU lacquer)",
      value: "E=gl.5 PU",
    },
    {
      key: "The word 'Walnut' is not necessary. (20.11.19 gl.10 Walnut)",
      value: "20.11.19 gl.10",
    },
    {
      key: "If decor is done for edges and surfaces, only glossiness code is enough (E+T+B=gl.5)",
      value: "gl.5",
    },
  ];
function cy() {
  const i = he.useContext(Ka);
  if (!i) throw new Error("LangContext must be used within a LangProvider");
  const { lang: s } = i;
  return B.jsxs("div", {
    className: "rulesContainer",
    children: [
      B.jsx(Ia, {
        title:
          s === "lt" ? "Sutrumpinimai etiketėse" : "Abbreviations in labels",
        arrayToMap: s === "lt" ? X0 : sy,
      }),
      B.jsx(Ia, {
        title:
          s === "lt"
            ? "Huseby/Foss kodo struktūra"
            : "Huseby/Foss code structure",
        arrayToMap: s === "lt" ? oy : ay,
      }),
      B.jsx(Ia, {
        title: s === "lt" ? "Apdailos kodo struktūra" : "Decor code structure",
        arrayToMap: s === "lt" ? q0 : uy,
      }),
    ],
  });
}
function fy(i) {
  return zi({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",
        },
        child: [],
      },
    ],
  })(i);
}
function dy(i) {
  return zi({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708",
        },
        child: [],
      },
    ],
  })(i);
}
function py() {
  const { setShowStdSurfWarning: i, lang: s } = Xa();
  return B.jsxs("ul", {
    children: [
      B.jsx(fy, { className: "infoIcon", size: 20 }),
      B.jsx(dy, { className: "closeIcon", size: 20, onClick: () => i(!1) }),
      s === "lt"
        ? B.jsxs(B.Fragment, {
            children: [
              B.jsxs("li", {
                children: [
                  "*Standartiškai ",
                  B.jsx("b", { children: "neapdailinami" }),
                  " paviršiai:",
                ],
              }),
              B.jsx("li", { children: "Popierius" }),
              B.jsx("li", { children: "HPL/CPL" }),
              B.jsx("li", { children: "Linoleumas" }),
              B.jsx("li", { children: "ABS briauna" }),
              B.jsx("li", { children: "Ertmės ir išfrezavimai" }),
            ],
          })
        : B.jsxs(B.Fragment, {
            children: [
              B.jsxs("li", {
                children: [
                  "*Standard ",
                  B.jsx("b", { children: "unfinished " }),
                  " surfaces:",
                ],
              }),
              B.jsx("li", { children: "Paper" }),
              B.jsx("li", { children: "HPL/CPL" }),
              B.jsx("li", { children: "Linoleum" }),
              B.jsx("li", { children: "ABS edge" }),
              B.jsx("li", { children: "Holes and routings" }),
            ],
          }),
    ],
  });
}
function yy() {
  const { lang: i, setLang: s, showStdSurfWarning: a } = Xa();
  return B.jsxs("div", {
    className: "appContainer",
    children: [
      B.jsxs("header", {
        children: [
          B.jsx(K0, {}),
          B.jsxs("div", {
            className: "langBtnContainer",
            children: [
              B.jsx("button", { onClick: () => s("en"), children: "en" }),
              B.jsx("button", { onClick: () => s("lt"), children: "lt" }),
            ],
          }),
        ],
      }),
      B.jsxs("div", {
        className: "formsContainer",
        children: [
          B.jsx(Fa, {
            title: i === "lt" ? "STANDARTINĖS APDAILOS" : "STANDARD DECOR",
            formType: "standard",
          }),
          B.jsx(Fa, {
            title: i === "lt" ? "DAŽYMAS" : "PAINT",
            formType: "paint",
          }),
          B.jsx(Fa, { title: "HUSEBY / FOSS", formType: "hus" }),
        ],
      }),
      a ? B.jsx(py, {}) : "",
      B.jsx(cy, {}),
      B.jsx("footer", {
        style: { marginTop: "3rem" },
        children: "© Svenheim 2025",
      }),
    ],
  });
}
Tp.createRoot(document.getElementById("root")).render(
  B.jsx(G0, { children: B.jsx(he.StrictMode, { children: B.jsx(yy, {}) }) })
);
