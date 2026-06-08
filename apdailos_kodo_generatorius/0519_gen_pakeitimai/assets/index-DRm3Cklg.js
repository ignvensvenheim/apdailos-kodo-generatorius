(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) s(f);
  new MutationObserver((f) => {
    for (const c of f)
      if (c.type === "childList")
        for (const d of c.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && s(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(f) {
    const c = {};
    return (
      f.integrity && (c.integrity = f.integrity),
      f.referrerPolicy && (c.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : f.crossOrigin === "anonymous"
          ? (c.credentials = "omit")
          : (c.credentials = "same-origin"),
      c
    );
  }
  function s(f) {
    if (f.ep) return;
    f.ep = !0;
    const c = r(f);
    fetch(f.href, c);
  }
})();
function kl(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default")
    ? o.default
    : o;
}
var Xs = { exports: {} },
  _i = {},
  qs = { exports: {} },
  Ne = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pf;
function Dh() {
  if (pf) return Ne;
  pf = 1;
  var o = Symbol.for("react.element"),
    i = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    c = Symbol.for("react.provider"),
    d = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    w = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    k = Symbol.iterator;
  function x(E) {
    return E === null || typeof E != "object"
      ? null
      : ((E = (k && E[k]) || E["@@iterator"]),
        typeof E == "function" ? E : null);
  }
  var D = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    A = Object.assign,
    O = {};
  function L(E, B, Se) {
    ((this.props = E),
      (this.context = B),
      (this.refs = O),
      (this.updater = Se || D));
  }
  ((L.prototype.isReactComponent = {}),
    (L.prototype.setState = function (E, B) {
      if (typeof E != "object" && typeof E != "function" && E != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, E, B, "setState");
    }),
    (L.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, "forceUpdate");
    }));
  function I() {}
  I.prototype = L.prototype;
  function R(E, B, Se) {
    ((this.props = E),
      (this.context = B),
      (this.refs = O),
      (this.updater = Se || D));
  }
  var z = (R.prototype = new I());
  ((z.constructor = R), A(z, L.prototype), (z.isPureReactComponent = !0));
  var j = Array.isArray,
    $ = Object.prototype.hasOwnProperty,
    H = { current: null },
    W = { key: !0, ref: !0, __self: !0, __source: !0 };
  function q(E, B, Se) {
    var Ee,
      ge = {},
      Ce = null,
      Le = null;
    if (B != null)
      for (Ee in (B.ref !== void 0 && (Le = B.ref),
      B.key !== void 0 && (Ce = "" + B.key),
      B))
        $.call(B, Ee) && !W.hasOwnProperty(Ee) && (ge[Ee] = B[Ee]);
    var Fe = arguments.length - 2;
    if (Fe === 1) ge.children = Se;
    else if (1 < Fe) {
      for (var be = Array(Fe), ht = 0; ht < Fe; ht++)
        be[ht] = arguments[ht + 2];
      ge.children = be;
    }
    if (E && E.defaultProps)
      for (Ee in ((Fe = E.defaultProps), Fe))
        ge[Ee] === void 0 && (ge[Ee] = Fe[Ee]);
    return {
      $$typeof: o,
      type: E,
      key: Ce,
      ref: Le,
      props: ge,
      _owner: H.current,
    };
  }
  function ae(E, B) {
    return {
      $$typeof: o,
      type: E.type,
      key: B,
      ref: E.ref,
      props: E.props,
      _owner: E._owner,
    };
  }
  function de(E) {
    return typeof E == "object" && E !== null && E.$$typeof === o;
  }
  function pe(E) {
    var B = { "=": "=0", ":": "=2" };
    return (
      "$" +
      E.replace(/[=:]/g, function (Se) {
        return B[Se];
      })
    );
  }
  var G = /\/+/g;
  function ie(E, B) {
    return typeof E == "object" && E !== null && E.key != null
      ? pe("" + E.key)
      : B.toString(36);
  }
  function he(E, B, Se, Ee, ge) {
    var Ce = typeof E;
    (Ce === "undefined" || Ce === "boolean") && (E = null);
    var Le = !1;
    if (E === null) Le = !0;
    else
      switch (Ce) {
        case "string":
        case "number":
          Le = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case o:
            case i:
              Le = !0;
          }
      }
    if (Le)
      return (
        (Le = E),
        (ge = ge(Le)),
        (E = Ee === "" ? "." + ie(Le, 0) : Ee),
        j(ge)
          ? ((Se = ""),
            E != null && (Se = E.replace(G, "$&/") + "/"),
            he(ge, B, Se, "", function (ht) {
              return ht;
            }))
          : ge != null &&
            (de(ge) &&
              (ge = ae(
                ge,
                Se +
                  (!ge.key || (Le && Le.key === ge.key)
                    ? ""
                    : ("" + ge.key).replace(G, "$&/") + "/") +
                  E,
              )),
            B.push(ge)),
        1
      );
    if (((Le = 0), (Ee = Ee === "" ? "." : Ee + ":"), j(E)))
      for (var Fe = 0; Fe < E.length; Fe++) {
        Ce = E[Fe];
        var be = Ee + ie(Ce, Fe);
        Le += he(Ce, B, Se, be, ge);
      }
    else if (((be = x(E)), typeof be == "function"))
      for (E = be.call(E), Fe = 0; !(Ce = E.next()).done; )
        ((Ce = Ce.value),
          (be = Ee + ie(Ce, Fe++)),
          (Le += he(Ce, B, Se, be, ge)));
    else if (Ce === "object")
      throw (
        (B = String(E)),
        Error(
          "Objects are not valid as a React child (found: " +
            (B === "[object Object]"
              ? "object with keys {" + Object.keys(E).join(", ") + "}"
              : B) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return Le;
  }
  function _e(E, B, Se) {
    if (E == null) return E;
    var Ee = [],
      ge = 0;
    return (
      he(E, Ee, "", "", function (Ce) {
        return B.call(Se, Ce, ge++);
      }),
      Ee
    );
  }
  function Te(E) {
    if (E._status === -1) {
      var B = E._result;
      ((B = B()),
        B.then(
          function (Se) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 1), (E._result = Se));
          },
          function (Se) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 2), (E._result = Se));
          },
        ),
        E._status === -1 && ((E._status = 0), (E._result = B)));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var ce = { current: null },
    V = { transition: null },
    te = {
      ReactCurrentDispatcher: ce,
      ReactCurrentBatchConfig: V,
      ReactCurrentOwner: H,
    };
  function Z() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (Ne.Children = {
      map: _e,
      forEach: function (E, B, Se) {
        _e(
          E,
          function () {
            B.apply(this, arguments);
          },
          Se,
        );
      },
      count: function (E) {
        var B = 0;
        return (
          _e(E, function () {
            B++;
          }),
          B
        );
      },
      toArray: function (E) {
        return (
          _e(E, function (B) {
            return B;
          }) || []
        );
      },
      only: function (E) {
        if (!de(E))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return E;
      },
    }),
    (Ne.Component = L),
    (Ne.Fragment = r),
    (Ne.Profiler = f),
    (Ne.PureComponent = R),
    (Ne.StrictMode = s),
    (Ne.Suspense = g),
    (Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = te),
    (Ne.act = Z),
    (Ne.cloneElement = function (E, B, Se) {
      if (E == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            E +
            ".",
        );
      var Ee = A({}, E.props),
        ge = E.key,
        Ce = E.ref,
        Le = E._owner;
      if (B != null) {
        if (
          (B.ref !== void 0 && ((Ce = B.ref), (Le = H.current)),
          B.key !== void 0 && (ge = "" + B.key),
          E.type && E.type.defaultProps)
        )
          var Fe = E.type.defaultProps;
        for (be in B)
          $.call(B, be) &&
            !W.hasOwnProperty(be) &&
            (Ee[be] = B[be] === void 0 && Fe !== void 0 ? Fe[be] : B[be]);
      }
      var be = arguments.length - 2;
      if (be === 1) Ee.children = Se;
      else if (1 < be) {
        Fe = Array(be);
        for (var ht = 0; ht < be; ht++) Fe[ht] = arguments[ht + 2];
        Ee.children = Fe;
      }
      return {
        $$typeof: o,
        type: E.type,
        key: ge,
        ref: Ce,
        props: Ee,
        _owner: Le,
      };
    }),
    (Ne.createContext = function (E) {
      return (
        (E = {
          $$typeof: d,
          _currentValue: E,
          _currentValue2: E,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (E.Provider = { $$typeof: c, _context: E }),
        (E.Consumer = E)
      );
    }),
    (Ne.createElement = q),
    (Ne.createFactory = function (E) {
      var B = q.bind(null, E);
      return ((B.type = E), B);
    }),
    (Ne.createRef = function () {
      return { current: null };
    }),
    (Ne.forwardRef = function (E) {
      return { $$typeof: h, render: E };
    }),
    (Ne.isValidElement = de),
    (Ne.lazy = function (E) {
      return { $$typeof: v, _payload: { _status: -1, _result: E }, _init: Te };
    }),
    (Ne.memo = function (E, B) {
      return { $$typeof: w, type: E, compare: B === void 0 ? null : B };
    }),
    (Ne.startTransition = function (E) {
      var B = V.transition;
      V.transition = {};
      try {
        E();
      } finally {
        V.transition = B;
      }
    }),
    (Ne.unstable_act = Z),
    (Ne.useCallback = function (E, B) {
      return ce.current.useCallback(E, B);
    }),
    (Ne.useContext = function (E) {
      return ce.current.useContext(E);
    }),
    (Ne.useDebugValue = function () {}),
    (Ne.useDeferredValue = function (E) {
      return ce.current.useDeferredValue(E);
    }),
    (Ne.useEffect = function (E, B) {
      return ce.current.useEffect(E, B);
    }),
    (Ne.useId = function () {
      return ce.current.useId();
    }),
    (Ne.useImperativeHandle = function (E, B, Se) {
      return ce.current.useImperativeHandle(E, B, Se);
    }),
    (Ne.useInsertionEffect = function (E, B) {
      return ce.current.useInsertionEffect(E, B);
    }),
    (Ne.useLayoutEffect = function (E, B) {
      return ce.current.useLayoutEffect(E, B);
    }),
    (Ne.useMemo = function (E, B) {
      return ce.current.useMemo(E, B);
    }),
    (Ne.useReducer = function (E, B, Se) {
      return ce.current.useReducer(E, B, Se);
    }),
    (Ne.useRef = function (E) {
      return ce.current.useRef(E);
    }),
    (Ne.useState = function (E) {
      return ce.current.useState(E);
    }),
    (Ne.useSyncExternalStore = function (E, B, Se) {
      return ce.current.useSyncExternalStore(E, B, Se);
    }),
    (Ne.useTransition = function () {
      return ce.current.useTransition();
    }),
    (Ne.version = "18.3.1"),
    Ne
  );
}
var hf;
function Sl() {
  return (hf || ((hf = 1), (qs.exports = Dh())), qs.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gf;
function Ah() {
  if (gf) return _i;
  gf = 1;
  var o = Sl(),
    i = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    s = Object.prototype.hasOwnProperty,
    f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(h, g, w) {
    var v,
      k = {},
      x = null,
      D = null;
    (w !== void 0 && (x = "" + w),
      g.key !== void 0 && (x = "" + g.key),
      g.ref !== void 0 && (D = g.ref));
    for (v in g) s.call(g, v) && !c.hasOwnProperty(v) && (k[v] = g[v]);
    if (h && h.defaultProps)
      for (v in ((g = h.defaultProps), g)) k[v] === void 0 && (k[v] = g[v]);
    return {
      $$typeof: i,
      type: h,
      key: x,
      ref: D,
      props: k,
      _owner: f.current,
    };
  }
  return ((_i.Fragment = r), (_i.jsx = d), (_i.jsxs = d), _i);
}
var mf;
function bh() {
  return (mf || ((mf = 1), (Xs.exports = Ah())), Xs.exports);
}
var b = bh(),
  le = Sl();
const ke = kl(le);
var Qo = {},
  Js = { exports: {} },
  Et = {},
  Zs = { exports: {} },
  el = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yf;
function Ih() {
  return (
    yf ||
      ((yf = 1),
      (function (o) {
        function i(V, te) {
          var Z = V.length;
          V.push(te);
          e: for (; 0 < Z; ) {
            var E = (Z - 1) >>> 1,
              B = V[E];
            if (0 < f(B, te)) ((V[E] = te), (V[Z] = B), (Z = E));
            else break e;
          }
        }
        function r(V) {
          return V.length === 0 ? null : V[0];
        }
        function s(V) {
          if (V.length === 0) return null;
          var te = V[0],
            Z = V.pop();
          if (Z !== te) {
            V[0] = Z;
            e: for (var E = 0, B = V.length, Se = B >>> 1; E < Se; ) {
              var Ee = 2 * (E + 1) - 1,
                ge = V[Ee],
                Ce = Ee + 1,
                Le = V[Ce];
              if (0 > f(ge, Z))
                Ce < B && 0 > f(Le, ge)
                  ? ((V[E] = Le), (V[Ce] = Z), (E = Ce))
                  : ((V[E] = ge), (V[Ee] = Z), (E = Ee));
              else if (Ce < B && 0 > f(Le, Z))
                ((V[E] = Le), (V[Ce] = Z), (E = Ce));
              else break e;
            }
          }
          return te;
        }
        function f(V, te) {
          var Z = V.sortIndex - te.sortIndex;
          return Z !== 0 ? Z : V.id - te.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var c = performance;
          o.unstable_now = function () {
            return c.now();
          };
        } else {
          var d = Date,
            h = d.now();
          o.unstable_now = function () {
            return d.now() - h;
          };
        }
        var g = [],
          w = [],
          v = 1,
          k = null,
          x = 3,
          D = !1,
          A = !1,
          O = !1,
          L = typeof setTimeout == "function" ? setTimeout : null,
          I = typeof clearTimeout == "function" ? clearTimeout : null,
          R = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function z(V) {
          for (var te = r(w); te !== null; ) {
            if (te.callback === null) s(w);
            else if (te.startTime <= V)
              (s(w), (te.sortIndex = te.expirationTime), i(g, te));
            else break;
            te = r(w);
          }
        }
        function j(V) {
          if (((O = !1), z(V), !A))
            if (r(g) !== null) ((A = !0), Te($));
            else {
              var te = r(w);
              te !== null && ce(j, te.startTime - V);
            }
        }
        function $(V, te) {
          ((A = !1), O && ((O = !1), I(q), (q = -1)), (D = !0));
          var Z = x;
          try {
            for (
              z(te), k = r(g);
              k !== null && (!(k.expirationTime > te) || (V && !pe()));
            ) {
              var E = k.callback;
              if (typeof E == "function") {
                ((k.callback = null), (x = k.priorityLevel));
                var B = E(k.expirationTime <= te);
                ((te = o.unstable_now()),
                  typeof B == "function"
                    ? (k.callback = B)
                    : k === r(g) && s(g),
                  z(te));
              } else s(g);
              k = r(g);
            }
            if (k !== null) var Se = !0;
            else {
              var Ee = r(w);
              (Ee !== null && ce(j, Ee.startTime - te), (Se = !1));
            }
            return Se;
          } finally {
            ((k = null), (x = Z), (D = !1));
          }
        }
        var H = !1,
          W = null,
          q = -1,
          ae = 5,
          de = -1;
        function pe() {
          return !(o.unstable_now() - de < ae);
        }
        function G() {
          if (W !== null) {
            var V = o.unstable_now();
            de = V;
            var te = !0;
            try {
              te = W(!0, V);
            } finally {
              te ? ie() : ((H = !1), (W = null));
            }
          } else H = !1;
        }
        var ie;
        if (typeof R == "function")
          ie = function () {
            R(G);
          };
        else if (typeof MessageChannel < "u") {
          var he = new MessageChannel(),
            _e = he.port2;
          ((he.port1.onmessage = G),
            (ie = function () {
              _e.postMessage(null);
            }));
        } else
          ie = function () {
            L(G, 0);
          };
        function Te(V) {
          ((W = V), H || ((H = !0), ie()));
        }
        function ce(V, te) {
          q = L(function () {
            V(o.unstable_now());
          }, te);
        }
        ((o.unstable_IdlePriority = 5),
          (o.unstable_ImmediatePriority = 1),
          (o.unstable_LowPriority = 4),
          (o.unstable_NormalPriority = 3),
          (o.unstable_Profiling = null),
          (o.unstable_UserBlockingPriority = 2),
          (o.unstable_cancelCallback = function (V) {
            V.callback = null;
          }),
          (o.unstable_continueExecution = function () {
            A || D || ((A = !0), Te($));
          }),
          (o.unstable_forceFrameRate = function (V) {
            0 > V || 125 < V
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (ae = 0 < V ? Math.floor(1e3 / V) : 5);
          }),
          (o.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (o.unstable_getFirstCallbackNode = function () {
            return r(g);
          }),
          (o.unstable_next = function (V) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var te = 3;
                break;
              default:
                te = x;
            }
            var Z = x;
            x = te;
            try {
              return V();
            } finally {
              x = Z;
            }
          }),
          (o.unstable_pauseExecution = function () {}),
          (o.unstable_requestPaint = function () {}),
          (o.unstable_runWithPriority = function (V, te) {
            switch (V) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                V = 3;
            }
            var Z = x;
            x = V;
            try {
              return te();
            } finally {
              x = Z;
            }
          }),
          (o.unstable_scheduleCallback = function (V, te, Z) {
            var E = o.unstable_now();
            switch (
              (typeof Z == "object" && Z !== null
                ? ((Z = Z.delay),
                  (Z = typeof Z == "number" && 0 < Z ? E + Z : E))
                : (Z = E),
              V)
            ) {
              case 1:
                var B = -1;
                break;
              case 2:
                B = 250;
                break;
              case 5:
                B = 1073741823;
                break;
              case 4:
                B = 1e4;
                break;
              default:
                B = 5e3;
            }
            return (
              (B = Z + B),
              (V = {
                id: v++,
                callback: te,
                priorityLevel: V,
                startTime: Z,
                expirationTime: B,
                sortIndex: -1,
              }),
              Z > E
                ? ((V.sortIndex = Z),
                  i(w, V),
                  r(g) === null &&
                    V === r(w) &&
                    (O ? (I(q), (q = -1)) : (O = !0), ce(j, Z - E)))
                : ((V.sortIndex = B), i(g, V), A || D || ((A = !0), Te($))),
              V
            );
          }),
          (o.unstable_shouldYield = pe),
          (o.unstable_wrapCallback = function (V) {
            var te = x;
            return function () {
              var Z = x;
              x = te;
              try {
                return V.apply(this, arguments);
              } finally {
                x = Z;
              }
            };
          }));
      })(el)),
    el
  );
}
var vf;
function jh() {
  return (vf || ((vf = 1), (Zs.exports = Ih())), Zs.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wf;
function Bh() {
  if (wf) return Et;
  wf = 1;
  var o = Sl(),
    i = jh();
  function r(e) {
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
  var s = new Set(),
    f = {};
  function c(e, t) {
    (d(e, t), d(e + "Capture", t));
  }
  function d(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
  }
  var h = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    g = Object.prototype.hasOwnProperty,
    w =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    v = {},
    k = {};
  function x(e) {
    return g.call(k, e)
      ? !0
      : g.call(v, e)
        ? !1
        : w.test(e)
          ? (k[e] = !0)
          : ((v[e] = !0), !1);
  }
  function D(e, t, n, a) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return a
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function A(e, t, n, a) {
    if (t === null || typeof t > "u" || D(e, t, n, a)) return !0;
    if (a) return !1;
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
  function O(e, t, n, a, l, u, p) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = a),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = u),
      (this.removeEmptyString = p));
  }
  var L = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      L[e] = new O(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      L[t] = new O(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        L[e] = new O(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      L[e] = new O(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        L[e] = new O(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      L[e] = new O(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      L[e] = new O(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      L[e] = new O(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      L[e] = new O(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var I = /[\-:]([a-z])/g;
  function R(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(I, R);
      L[t] = new O(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(I, R);
        L[t] = new O(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(I, R);
      L[t] = new O(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      L[e] = new O(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (L.xlinkHref = new O(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      L[e] = new O(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function z(e, t, n, a) {
    var l = L.hasOwnProperty(t) ? L[t] : null;
    (l !== null
      ? l.type !== 0
      : a ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (A(t, n, l, a) && (n = null),
      a || l === null
        ? x(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
          : ((t = l.attributeName),
            (a = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                a ? e.setAttributeNS(a, t, n) : e.setAttribute(t, n))));
  }
  var j = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    $ = Symbol.for("react.element"),
    H = Symbol.for("react.portal"),
    W = Symbol.for("react.fragment"),
    q = Symbol.for("react.strict_mode"),
    ae = Symbol.for("react.profiler"),
    de = Symbol.for("react.provider"),
    pe = Symbol.for("react.context"),
    G = Symbol.for("react.forward_ref"),
    ie = Symbol.for("react.suspense"),
    he = Symbol.for("react.suspense_list"),
    _e = Symbol.for("react.memo"),
    Te = Symbol.for("react.lazy"),
    ce = Symbol.for("react.offscreen"),
    V = Symbol.iterator;
  function te(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (V && e[V]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Z = Object.assign,
    E;
  function B(e) {
    if (E === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        E = (t && t[1]) || "";
      }
    return (
      `
` +
      E +
      e
    );
  }
  var Se = !1;
  function Ee(e, t) {
    if (!e || Se) return "";
    Se = !0;
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
          } catch (F) {
            var a = F;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (F) {
            a = F;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (F) {
          a = F;
        }
        e();
      }
    } catch (F) {
      if (F && a && typeof F.stack == "string") {
        for (
          var l = F.stack.split(`
`),
            u = a.stack.split(`
`),
            p = l.length - 1,
            m = u.length - 1;
          1 <= p && 0 <= m && l[p] !== u[m];
        )
          m--;
        for (; 1 <= p && 0 <= m; p--, m--)
          if (l[p] !== u[m]) {
            if (p !== 1 || m !== 1)
              do
                if ((p--, m--, 0 > m || l[p] !== u[m])) {
                  var S =
                    `
` + l[p].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      S.includes("<anonymous>") &&
                      (S = S.replace("<anonymous>", e.displayName)),
                    S
                  );
                }
              while (1 <= p && 0 <= m);
            break;
          }
      }
    } finally {
      ((Se = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? B(e) : "";
  }
  function ge(e) {
    switch (e.tag) {
      case 5:
        return B(e.type);
      case 16:
        return B("Lazy");
      case 13:
        return B("Suspense");
      case 19:
        return B("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = Ee(e.type, !1)), e);
      case 11:
        return ((e = Ee(e.type.render, !1)), e);
      case 1:
        return ((e = Ee(e.type, !0)), e);
      default:
        return "";
    }
  }
  function Ce(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case W:
        return "Fragment";
      case H:
        return "Portal";
      case ae:
        return "Profiler";
      case q:
        return "StrictMode";
      case ie:
        return "Suspense";
      case he:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case pe:
          return (e.displayName || "Context") + ".Consumer";
        case de:
          return (e._context.displayName || "Context") + ".Provider";
        case G:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case _e:
          return (
            (t = e.displayName || null),
            t !== null ? t : Ce(e.type) || "Memo"
          );
        case Te:
          ((t = e._payload), (e = e._init));
          try {
            return Ce(e(t));
          } catch {}
      }
    return null;
  }
  function Le(e) {
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
        return Ce(t);
      case 8:
        return t === q ? "StrictMode" : "Mode";
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
  function Fe(e) {
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
  function be(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function ht(e) {
    var t = be(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      a = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        u = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (p) {
            ((a = "" + p), u.call(this, p));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (p) {
            a = "" + p;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function hn(e) {
    e._valueTracker || (e._valueTracker = ht(e));
  }
  function Ar(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      a = "";
    return (
      e && (a = be(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function gn(e) {
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
  function jn(e, t) {
    var n = t.checked;
    return Z({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function zi(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      a = t.checked != null ? t.checked : t.defaultChecked;
    ((n = Fe(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: a,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      }));
  }
  function br(e, t) {
    ((t = t.checked), t != null && z(e, "checked", t, !1));
  }
  function Ir(e, t) {
    br(e, t);
    var n = Fe(t.value),
      a = t.type;
    if (n != null)
      a === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (a === "submit" || a === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? or(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && or(e, t.type, Fe(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function jr(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var a = t.type;
      if (
        !(
          (a !== "submit" && a !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n));
  }
  function or(e, t, n) {
    (t !== "number" || gn(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Bn = Array.isArray;
  function mn(e, t, n, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && a && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + Fe(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), a && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Mi(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(r(91));
    return Z({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Br(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(r(92));
        if (Bn(n)) {
          if (1 < n.length) throw Error(r(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: Fe(n) };
  }
  function y(e, t) {
    var n = Fe(t.value),
      a = Fe(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      a != null && (e.defaultValue = "" + a));
  }
  function C(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function P(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function J(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? P(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var X,
    Q = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, a, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, a, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          X = X || document.createElement("div"),
            X.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = X.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function ee(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var ve = {
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
    Re = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ve).forEach(function (e) {
    Re.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ve[t] = ve[e]));
    });
  });
  function et(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (ve.hasOwnProperty(e) && ve[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Ct(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var a = n.indexOf("--") === 0,
          l = et(n, t[n], a);
        (n === "float" && (n = "cssFloat"),
          a ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var st = Z(
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
    },
  );
  function zr(e, t) {
    if (t) {
      if (st[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(r(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(r(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(r(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(r(62));
    }
  }
  function zn(e, t) {
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
  var Mn = null;
  function Mr(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ar = null,
    yn = null,
    rn = null;
  function Rl(e) {
    if ((e = li(e))) {
      if (typeof ar != "function") throw Error(r(280));
      var t = e.stateNode;
      t && ((t = uo(t)), ar(e.stateNode, e.type, t));
    }
  }
  function Ol(e) {
    yn ? (rn ? rn.push(e) : (rn = [e])) : (yn = e);
  }
  function Pl() {
    if (yn) {
      var e = yn,
        t = rn;
      if (((rn = yn = null), Rl(e), t)) for (e = 0; e < t.length; e++) Rl(t[e]);
    }
  }
  function Fl(e, t) {
    return e(t);
  }
  function Dl() {}
  var pa = !1;
  function Al(e, t, n) {
    if (pa) return e(t, n);
    pa = !0;
    try {
      return Fl(e, t, n);
    } finally {
      ((pa = !1), (yn !== null || rn !== null) && (Dl(), Pl()));
    }
  }
  function Vr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = uo(n);
    if (a === null) return null;
    n = a[t];
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
        ((a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !a));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(r(231, t, typeof n));
    return n;
  }
  var ha = !1;
  if (h)
    try {
      var Kr = {};
      (Object.defineProperty(Kr, "passive", {
        get: function () {
          ha = !0;
        },
      }),
        window.addEventListener("test", Kr, Kr),
        window.removeEventListener("test", Kr, Kr));
    } catch {
      ha = !1;
    }
  function Md(e, t, n, a, l, u, p, m, S) {
    var F = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, F);
    } catch (K) {
      this.onError(K);
    }
  }
  var $r = !1,
    Vi = null,
    Ki = !1,
    ga = null,
    Vd = {
      onError: function (e) {
        (($r = !0), (Vi = e));
      },
    };
  function Kd(e, t, n, a, l, u, p, m, S) {
    (($r = !1), (Vi = null), Md.apply(Vd, arguments));
  }
  function $d(e, t, n, a, l, u, p, m, S) {
    if ((Kd.apply(this, arguments), $r)) {
      if ($r) {
        var F = Vi;
        (($r = !1), (Vi = null));
      } else throw Error(r(198));
      Ki || ((Ki = !0), (ga = F));
    }
  }
  function Vn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function bl(e) {
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
  function Il(e) {
    if (Vn(e) !== e) throw Error(r(188));
  }
  function Ud(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Vn(e)), t === null)) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var n = e, a = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (((a = l.return), a !== null)) {
          n = a;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === n) return (Il(l), e);
          if (u === a) return (Il(l), t);
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== a.return) ((n = l), (a = u));
      else {
        for (var p = !1, m = l.child; m; ) {
          if (m === n) {
            ((p = !0), (n = l), (a = u));
            break;
          }
          if (m === a) {
            ((p = !0), (a = l), (n = u));
            break;
          }
          m = m.sibling;
        }
        if (!p) {
          for (m = u.child; m; ) {
            if (m === n) {
              ((p = !0), (n = u), (a = l));
              break;
            }
            if (m === a) {
              ((p = !0), (a = u), (n = l));
              break;
            }
            m = m.sibling;
          }
          if (!p) throw Error(r(189));
        }
      }
      if (n.alternate !== a) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? e : t;
  }
  function jl(e) {
    return ((e = Ud(e)), e !== null ? Bl(e) : null);
  }
  function Bl(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Bl(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var zl = i.unstable_scheduleCallback,
    Ml = i.unstable_cancelCallback,
    Hd = i.unstable_shouldYield,
    Wd = i.unstable_requestPaint,
    We = i.unstable_now,
    Yd = i.unstable_getCurrentPriorityLevel,
    ma = i.unstable_ImmediatePriority,
    Vl = i.unstable_UserBlockingPriority,
    $i = i.unstable_NormalPriority,
    Gd = i.unstable_LowPriority,
    Kl = i.unstable_IdlePriority,
    Ui = null,
    Gt = null;
  function Qd(e) {
    if (Gt && typeof Gt.onCommitFiberRoot == "function")
      try {
        Gt.onCommitFiberRoot(Ui, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Bt = Math.clz32 ? Math.clz32 : Jd,
    Xd = Math.log,
    qd = Math.LN2;
  function Jd(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Xd(e) / qd) | 0)) | 0);
  }
  var Hi = 64,
    Wi = 4194304;
  function Ur(e) {
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
  function Yi(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var a = 0,
      l = e.suspendedLanes,
      u = e.pingedLanes,
      p = n & 268435455;
    if (p !== 0) {
      var m = p & ~l;
      m !== 0 ? (a = Ur(m)) : ((u &= p), u !== 0 && (a = Ur(u)));
    } else ((p = n & ~l), p !== 0 ? (a = Ur(p)) : u !== 0 && (a = Ur(u)));
    if (a === 0) return 0;
    if (
      t !== 0 &&
      t !== a &&
      !(t & l) &&
      ((l = a & -a), (u = t & -t), l >= u || (l === 16 && (u & 4194240) !== 0))
    )
      return t;
    if ((a & 4 && (a |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= a; 0 < t; )
        ((n = 31 - Bt(t)), (l = 1 << n), (a |= e[n]), (t &= ~l));
    return a;
  }
  function Zd(e, t) {
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
  function ep(e, t) {
    for (
      var n = e.suspendedLanes,
        a = e.pingedLanes,
        l = e.expirationTimes,
        u = e.pendingLanes;
      0 < u;
    ) {
      var p = 31 - Bt(u),
        m = 1 << p,
        S = l[p];
      (S === -1
        ? (!(m & n) || m & a) && (l[p] = Zd(m, t))
        : S <= t && (e.expiredLanes |= m),
        (u &= ~m));
    }
  }
  function ya(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function $l() {
    var e = Hi;
    return ((Hi <<= 1), !(Hi & 4194240) && (Hi = 64), e);
  }
  function va(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Hr(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Bt(t)),
      (e[t] = n));
  }
  function tp(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var a = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Bt(n),
        u = 1 << l;
      ((t[l] = 0), (a[l] = -1), (e[l] = -1), (n &= ~u));
    }
  }
  function wa(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var a = 31 - Bt(n),
        l = 1 << a;
      ((l & t) | (e[a] & t) && (e[a] |= t), (n &= ~l));
    }
  }
  var De = 0;
  function Ul(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Hl,
    ka,
    Wl,
    Yl,
    Gl,
    Sa = !1,
    Gi = [],
    vn = null,
    wn = null,
    kn = null,
    Wr = new Map(),
    Yr = new Map(),
    Sn = [],
    np =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Ql(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        vn = null;
        break;
      case "dragenter":
      case "dragleave":
        wn = null;
        break;
      case "mouseover":
      case "mouseout":
        kn = null;
        break;
      case "pointerover":
      case "pointerout":
        Wr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Yr.delete(t.pointerId);
    }
  }
  function Gr(e, t, n, a, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [l],
        }),
        t !== null && ((t = li(t)), t !== null && ka(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function rp(e, t, n, a, l) {
    switch (t) {
      case "focusin":
        return ((vn = Gr(vn, e, t, n, a, l)), !0);
      case "dragenter":
        return ((wn = Gr(wn, e, t, n, a, l)), !0);
      case "mouseover":
        return ((kn = Gr(kn, e, t, n, a, l)), !0);
      case "pointerover":
        var u = l.pointerId;
        return (Wr.set(u, Gr(Wr.get(u) || null, e, t, n, a, l)), !0);
      case "gotpointercapture":
        return (
          (u = l.pointerId),
          Yr.set(u, Gr(Yr.get(u) || null, e, t, n, a, l)),
          !0
        );
    }
    return !1;
  }
  function Xl(e) {
    var t = Kn(e.target);
    if (t !== null) {
      var n = Vn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = bl(n)), t !== null)) {
            ((e.blockedOn = t),
              Gl(e.priority, function () {
                Wl(n);
              }));
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
  function Qi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = _a(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(n.type, n);
        ((Mn = a), n.target.dispatchEvent(a), (Mn = null));
      } else return ((t = li(n)), t !== null && ka(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function ql(e, t, n) {
    Qi(e) && n.delete(t);
  }
  function ip() {
    ((Sa = !1),
      vn !== null && Qi(vn) && (vn = null),
      wn !== null && Qi(wn) && (wn = null),
      kn !== null && Qi(kn) && (kn = null),
      Wr.forEach(ql),
      Yr.forEach(ql));
  }
  function Qr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Sa ||
        ((Sa = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, ip)));
  }
  function Xr(e) {
    function t(l) {
      return Qr(l, e);
    }
    if (0 < Gi.length) {
      Qr(Gi[0], e);
      for (var n = 1; n < Gi.length; n++) {
        var a = Gi[n];
        a.blockedOn === e && (a.blockedOn = null);
      }
    }
    for (
      vn !== null && Qr(vn, e),
        wn !== null && Qr(wn, e),
        kn !== null && Qr(kn, e),
        Wr.forEach(t),
        Yr.forEach(t),
        n = 0;
      n < Sn.length;
      n++
    )
      ((a = Sn[n]), a.blockedOn === e && (a.blockedOn = null));
    for (; 0 < Sn.length && ((n = Sn[0]), n.blockedOn === null); )
      (Xl(n), n.blockedOn === null && Sn.shift());
  }
  var sr = j.ReactCurrentBatchConfig,
    Xi = !0;
  function op(e, t, n, a) {
    var l = De,
      u = sr.transition;
    sr.transition = null;
    try {
      ((De = 1), xa(e, t, n, a));
    } finally {
      ((De = l), (sr.transition = u));
    }
  }
  function ap(e, t, n, a) {
    var l = De,
      u = sr.transition;
    sr.transition = null;
    try {
      ((De = 4), xa(e, t, n, a));
    } finally {
      ((De = l), (sr.transition = u));
    }
  }
  function xa(e, t, n, a) {
    if (Xi) {
      var l = _a(e, t, n, a);
      if (l === null) (Ma(e, t, a, qi, n), Ql(e, a));
      else if (rp(l, e, t, n, a)) a.stopPropagation();
      else if ((Ql(e, a), t & 4 && -1 < np.indexOf(e))) {
        for (; l !== null; ) {
          var u = li(l);
          if (
            (u !== null && Hl(u),
            (u = _a(e, t, n, a)),
            u === null && Ma(e, t, a, qi, n),
            u === l)
          )
            break;
          l = u;
        }
        l !== null && a.stopPropagation();
      } else Ma(e, t, a, null, n);
    }
  }
  var qi = null;
  function _a(e, t, n, a) {
    if (((qi = null), (e = Mr(a)), (e = Kn(e)), e !== null))
      if (((t = Vn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = bl(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((qi = e), null);
  }
  function Jl(e) {
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
        switch (Yd()) {
          case ma:
            return 1;
          case Vl:
            return 4;
          case $i:
          case Gd:
            return 16;
          case Kl:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var xn = null,
    Ea = null,
    Ji = null;
  function Zl() {
    if (Ji) return Ji;
    var e,
      t = Ea,
      n = t.length,
      a,
      l = "value" in xn ? xn.value : xn.textContent,
      u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var p = n - e;
    for (a = 1; a <= p && t[n - a] === l[u - a]; a++);
    return (Ji = l.slice(e, 1 < a ? 1 - a : void 0));
  }
  function Zi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function eo() {
    return !0;
  }
  function eu() {
    return !1;
  }
  function Tt(e) {
    function t(n, a, l, u, p) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = p),
        (this.currentTarget = null));
      for (var m in e)
        e.hasOwnProperty(m) && ((n = e[m]), (this[m] = n ? n(u) : u[m]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? eo
          : eu),
        (this.isPropagationStopped = eu),
        this
      );
    }
    return (
      Z(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = eo));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = eo));
        },
        persist: function () {},
        isPersistent: eo,
      }),
      t
    );
  }
  var lr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ca = Tt(lr),
    qr = Z({}, lr, { view: 0, detail: 0 }),
    sp = Tt(qr),
    Ta,
    Na,
    Jr,
    to = Z({}, qr, {
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
      getModifierState: Ra,
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
          : (e !== Jr &&
              (Jr && e.type === "mousemove"
                ? ((Ta = e.screenX - Jr.screenX), (Na = e.screenY - Jr.screenY))
                : (Na = Ta = 0),
              (Jr = e)),
            Ta);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Na;
      },
    }),
    tu = Tt(to),
    lp = Z({}, to, { dataTransfer: 0 }),
    up = Tt(lp),
    cp = Z({}, qr, { relatedTarget: 0 }),
    La = Tt(cp),
    fp = Z({}, lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    dp = Tt(fp),
    pp = Z({}, lr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    hp = Tt(pp),
    gp = Z({}, lr, { data: 0 }),
    nu = Tt(gp),
    mp = {
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
    yp = {
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
    vp = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function wp(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = vp[e])
        ? !!t[e]
        : !1;
  }
  function Ra() {
    return wp;
  }
  var kp = Z({}, qr, {
      key: function (e) {
        if (e.key) {
          var t = mp[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Zi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? yp[e.keyCode] || "Unidentified"
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
      getModifierState: Ra,
      charCode: function (e) {
        return e.type === "keypress" ? Zi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Zi(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Sp = Tt(kp),
    xp = Z({}, to, {
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
    ru = Tt(xp),
    _p = Z({}, qr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ra,
    }),
    Ep = Tt(_p),
    Cp = Z({}, lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Tp = Tt(Cp),
    Np = Z({}, to, {
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
    Lp = Tt(Np),
    Rp = [9, 13, 27, 32],
    Oa = h && "CompositionEvent" in window,
    Zr = null;
  h && "documentMode" in document && (Zr = document.documentMode);
  var Op = h && "TextEvent" in window && !Zr,
    iu = h && (!Oa || (Zr && 8 < Zr && 11 >= Zr)),
    ou = " ",
    au = !1;
  function su(e, t) {
    switch (e) {
      case "keyup":
        return Rp.indexOf(t.keyCode) !== -1;
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
  function lu(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var ur = !1;
  function Pp(e, t) {
    switch (e) {
      case "compositionend":
        return lu(t);
      case "keypress":
        return t.which !== 32 ? null : ((au = !0), ou);
      case "textInput":
        return ((e = t.data), e === ou && au ? null : e);
      default:
        return null;
    }
  }
  function Fp(e, t) {
    if (ur)
      return e === "compositionend" || (!Oa && su(e, t))
        ? ((e = Zl()), (Ji = Ea = xn = null), (ur = !1), e)
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
        return iu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Dp = {
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
  function uu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Dp[e.type] : t === "textarea";
  }
  function cu(e, t, n, a) {
    (Ol(a),
      (t = ao(t, "onChange")),
      0 < t.length &&
        ((n = new Ca("onChange", "change", null, n, a)),
        e.push({ event: n, listeners: t })));
  }
  var ei = null,
    ti = null;
  function Ap(e) {
    Lu(e, 0);
  }
  function no(e) {
    var t = hr(e);
    if (Ar(t)) return e;
  }
  function bp(e, t) {
    if (e === "change") return t;
  }
  var fu = !1;
  if (h) {
    var Pa;
    if (h) {
      var Fa = "oninput" in document;
      if (!Fa) {
        var du = document.createElement("div");
        (du.setAttribute("oninput", "return;"),
          (Fa = typeof du.oninput == "function"));
      }
      Pa = Fa;
    } else Pa = !1;
    fu = Pa && (!document.documentMode || 9 < document.documentMode);
  }
  function pu() {
    ei && (ei.detachEvent("onpropertychange", hu), (ti = ei = null));
  }
  function hu(e) {
    if (e.propertyName === "value" && no(ti)) {
      var t = [];
      (cu(t, ti, e, Mr(e)), Al(Ap, t));
    }
  }
  function Ip(e, t, n) {
    e === "focusin"
      ? (pu(), (ei = t), (ti = n), ei.attachEvent("onpropertychange", hu))
      : e === "focusout" && pu();
  }
  function jp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return no(ti);
  }
  function Bp(e, t) {
    if (e === "click") return no(t);
  }
  function zp(e, t) {
    if (e === "input" || e === "change") return no(t);
  }
  function Mp(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var zt = typeof Object.is == "function" ? Object.is : Mp;
  function ni(e, t) {
    if (zt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var l = n[a];
      if (!g.call(t, l) || !zt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function gu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function mu(e, t) {
    var n = gu(e);
    e = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (((a = e + n.textContent.length), e <= t && a >= t))
          return { node: n, offset: t - e };
        e = a;
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
      n = gu(n);
    }
  }
  function yu(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? yu(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function vu() {
    for (var e = window, t = gn(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = gn(e.document);
    }
    return t;
  }
  function Da(e) {
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
  function Vp(e) {
    var t = vu(),
      n = e.focusedElem,
      a = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      yu(n.ownerDocument.documentElement, n)
    ) {
      if (a !== null && Da(n)) {
        if (
          ((t = a.start),
          (e = a.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            u = Math.min(a.start, l);
          ((a = a.end === void 0 ? u : Math.min(a.end, l)),
            !e.extend && u > a && ((l = a), (a = u), (u = l)),
            (l = mu(n, u)));
          var p = mu(n, a);
          l &&
            p &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== p.node ||
              e.focusOffset !== p.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            u > a
              ? (e.addRange(t), e.extend(p.node, p.offset))
              : (t.setEnd(p.node, p.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var Kp = h && "documentMode" in document && 11 >= document.documentMode,
    cr = null,
    Aa = null,
    ri = null,
    ba = !1;
  function wu(e, t, n) {
    var a =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ba ||
      cr == null ||
      cr !== gn(a) ||
      ((a = cr),
      "selectionStart" in a && Da(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (ri && ni(ri, a)) ||
        ((ri = a),
        (a = ao(Aa, "onSelect")),
        0 < a.length &&
          ((t = new Ca("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: a }),
          (t.target = cr))));
  }
  function ro(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var fr = {
      animationend: ro("Animation", "AnimationEnd"),
      animationiteration: ro("Animation", "AnimationIteration"),
      animationstart: ro("Animation", "AnimationStart"),
      transitionend: ro("Transition", "TransitionEnd"),
    },
    Ia = {},
    ku = {};
  h &&
    ((ku = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete fr.animationend.animation,
      delete fr.animationiteration.animation,
      delete fr.animationstart.animation),
    "TransitionEvent" in window || delete fr.transitionend.transition);
  function io(e) {
    if (Ia[e]) return Ia[e];
    if (!fr[e]) return e;
    var t = fr[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in ku) return (Ia[e] = t[n]);
    return e;
  }
  var Su = io("animationend"),
    xu = io("animationiteration"),
    _u = io("animationstart"),
    Eu = io("transitionend"),
    Cu = new Map(),
    Tu =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function _n(e, t) {
    (Cu.set(e, t), c(t, [e]));
  }
  for (var ja = 0; ja < Tu.length; ja++) {
    var Ba = Tu[ja],
      $p = Ba.toLowerCase(),
      Up = Ba[0].toUpperCase() + Ba.slice(1);
    _n($p, "on" + Up);
  }
  (_n(Su, "onAnimationEnd"),
    _n(xu, "onAnimationIteration"),
    _n(_u, "onAnimationStart"),
    _n("dblclick", "onDoubleClick"),
    _n("focusin", "onFocus"),
    _n("focusout", "onBlur"),
    _n(Eu, "onTransitionEnd"),
    d("onMouseEnter", ["mouseout", "mouseover"]),
    d("onMouseLeave", ["mouseout", "mouseover"]),
    d("onPointerEnter", ["pointerout", "pointerover"]),
    d("onPointerLeave", ["pointerout", "pointerover"]),
    c(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    c(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    c(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    c(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    c(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var ii =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Hp = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(ii),
    );
  function Nu(e, t, n) {
    var a = e.type || "unknown-event";
    ((e.currentTarget = n), $d(a, t, void 0, e), (e.currentTarget = null));
  }
  function Lu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n],
        l = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var p = a.length - 1; 0 <= p; p--) {
            var m = a[p],
              S = m.instance,
              F = m.currentTarget;
            if (((m = m.listener), S !== u && l.isPropagationStopped()))
              break e;
            (Nu(l, m, F), (u = S));
          }
        else
          for (p = 0; p < a.length; p++) {
            if (
              ((m = a[p]),
              (S = m.instance),
              (F = m.currentTarget),
              (m = m.listener),
              S !== u && l.isPropagationStopped())
            )
              break e;
            (Nu(l, m, F), (u = S));
          }
      }
    }
    if (Ki) throw ((e = ga), (Ki = !1), (ga = null), e);
  }
  function je(e, t) {
    var n = t[Wa];
    n === void 0 && (n = t[Wa] = new Set());
    var a = e + "__bubble";
    n.has(a) || (Ru(t, e, 2, !1), n.add(a));
  }
  function za(e, t, n) {
    var a = 0;
    (t && (a |= 4), Ru(n, e, a, t));
  }
  var oo = "_reactListening" + Math.random().toString(36).slice(2);
  function oi(e) {
    if (!e[oo]) {
      ((e[oo] = !0),
        s.forEach(function (n) {
          n !== "selectionchange" && (Hp.has(n) || za(n, !1, e), za(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[oo] || ((t[oo] = !0), za("selectionchange", !1, t));
    }
  }
  function Ru(e, t, n, a) {
    switch (Jl(t)) {
      case 1:
        var l = op;
        break;
      case 4:
        l = ap;
        break;
      default:
        l = xa;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !ha ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      a
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function Ma(e, t, n, a, l) {
    var u = a;
    if (!(t & 1) && !(t & 2) && a !== null)
      e: for (;;) {
        if (a === null) return;
        var p = a.tag;
        if (p === 3 || p === 4) {
          var m = a.stateNode.containerInfo;
          if (m === l || (m.nodeType === 8 && m.parentNode === l)) break;
          if (p === 4)
            for (p = a.return; p !== null; ) {
              var S = p.tag;
              if (
                (S === 3 || S === 4) &&
                ((S = p.stateNode.containerInfo),
                S === l || (S.nodeType === 8 && S.parentNode === l))
              )
                return;
              p = p.return;
            }
          for (; m !== null; ) {
            if (((p = Kn(m)), p === null)) return;
            if (((S = p.tag), S === 5 || S === 6)) {
              a = u = p;
              continue e;
            }
            m = m.parentNode;
          }
        }
        a = a.return;
      }
    Al(function () {
      var F = u,
        K = Mr(n),
        U = [];
      e: {
        var M = Cu.get(e);
        if (M !== void 0) {
          var ne = Ca,
            oe = e;
          switch (e) {
            case "keypress":
              if (Zi(n) === 0) break e;
            case "keydown":
            case "keyup":
              ne = Sp;
              break;
            case "focusin":
              ((oe = "focus"), (ne = La));
              break;
            case "focusout":
              ((oe = "blur"), (ne = La));
              break;
            case "beforeblur":
            case "afterblur":
              ne = La;
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
              ne = tu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ne = up;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ne = Ep;
              break;
            case Su:
            case xu:
            case _u:
              ne = dp;
              break;
            case Eu:
              ne = Tp;
              break;
            case "scroll":
              ne = sp;
              break;
            case "wheel":
              ne = Lp;
              break;
            case "copy":
            case "cut":
            case "paste":
              ne = hp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ne = ru;
          }
          var ue = (t & 4) !== 0,
            Ye = !ue && e === "scroll",
            T = ue ? (M !== null ? M + "Capture" : null) : M;
          ue = [];
          for (var _ = F, N; _ !== null; ) {
            N = _;
            var Y = N.stateNode;
            if (
              (N.tag === 5 &&
                Y !== null &&
                ((N = Y),
                T !== null &&
                  ((Y = Vr(_, T)), Y != null && ue.push(ai(_, Y, N)))),
              Ye)
            )
              break;
            _ = _.return;
          }
          0 < ue.length &&
            ((M = new ne(M, oe, null, n, K)),
            U.push({ event: M, listeners: ue }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((M = e === "mouseover" || e === "pointerover"),
            (ne = e === "mouseout" || e === "pointerout"),
            M &&
              n !== Mn &&
              (oe = n.relatedTarget || n.fromElement) &&
              (Kn(oe) || oe[on]))
          )
            break e;
          if (
            (ne || M) &&
            ((M =
              K.window === K
                ? K
                : (M = K.ownerDocument)
                  ? M.defaultView || M.parentWindow
                  : window),
            ne
              ? ((oe = n.relatedTarget || n.toElement),
                (ne = F),
                (oe = oe ? Kn(oe) : null),
                oe !== null &&
                  ((Ye = Vn(oe)),
                  oe !== Ye || (oe.tag !== 5 && oe.tag !== 6)) &&
                  (oe = null))
              : ((ne = null), (oe = F)),
            ne !== oe)
          ) {
            if (
              ((ue = tu),
              (Y = "onMouseLeave"),
              (T = "onMouseEnter"),
              (_ = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ue = ru),
                (Y = "onPointerLeave"),
                (T = "onPointerEnter"),
                (_ = "pointer")),
              (Ye = ne == null ? M : hr(ne)),
              (N = oe == null ? M : hr(oe)),
              (M = new ue(Y, _ + "leave", ne, n, K)),
              (M.target = Ye),
              (M.relatedTarget = N),
              (Y = null),
              Kn(K) === F &&
                ((ue = new ue(T, _ + "enter", oe, n, K)),
                (ue.target = N),
                (ue.relatedTarget = Ye),
                (Y = ue)),
              (Ye = Y),
              ne && oe)
            )
              t: {
                for (ue = ne, T = oe, _ = 0, N = ue; N; N = dr(N)) _++;
                for (N = 0, Y = T; Y; Y = dr(Y)) N++;
                for (; 0 < _ - N; ) ((ue = dr(ue)), _--);
                for (; 0 < N - _; ) ((T = dr(T)), N--);
                for (; _--; ) {
                  if (ue === T || (T !== null && ue === T.alternate)) break t;
                  ((ue = dr(ue)), (T = dr(T)));
                }
                ue = null;
              }
            else ue = null;
            (ne !== null && Ou(U, M, ne, ue, !1),
              oe !== null && Ye !== null && Ou(U, Ye, oe, ue, !0));
          }
        }
        e: {
          if (
            ((M = F ? hr(F) : window),
            (ne = M.nodeName && M.nodeName.toLowerCase()),
            ne === "select" || (ne === "input" && M.type === "file"))
          )
            var fe = bp;
          else if (uu(M))
            if (fu) fe = zp;
            else {
              fe = jp;
              var me = Ip;
            }
          else
            (ne = M.nodeName) &&
              ne.toLowerCase() === "input" &&
              (M.type === "checkbox" || M.type === "radio") &&
              (fe = Bp);
          if (fe && (fe = fe(e, F))) {
            cu(U, fe, n, K);
            break e;
          }
          (me && me(e, M, F),
            e === "focusout" &&
              (me = M._wrapperState) &&
              me.controlled &&
              M.type === "number" &&
              or(M, "number", M.value));
        }
        switch (((me = F ? hr(F) : window), e)) {
          case "focusin":
            (uu(me) || me.contentEditable === "true") &&
              ((cr = me), (Aa = F), (ri = null));
            break;
          case "focusout":
            ri = Aa = cr = null;
            break;
          case "mousedown":
            ba = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((ba = !1), wu(U, n, K));
            break;
          case "selectionchange":
            if (Kp) break;
          case "keydown":
          case "keyup":
            wu(U, n, K);
        }
        var ye;
        if (Oa)
          e: {
            switch (e) {
              case "compositionstart":
                var we = "onCompositionStart";
                break e;
              case "compositionend":
                we = "onCompositionEnd";
                break e;
              case "compositionupdate":
                we = "onCompositionUpdate";
                break e;
            }
            we = void 0;
          }
        else
          ur
            ? su(e, n) && (we = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (we = "onCompositionStart");
        (we &&
          (iu &&
            n.locale !== "ko" &&
            (ur || we !== "onCompositionStart"
              ? we === "onCompositionEnd" && ur && (ye = Zl())
              : ((xn = K),
                (Ea = "value" in xn ? xn.value : xn.textContent),
                (ur = !0))),
          (me = ao(F, we)),
          0 < me.length &&
            ((we = new nu(we, e, null, n, K)),
            U.push({ event: we, listeners: me }),
            ye
              ? (we.data = ye)
              : ((ye = lu(n)), ye !== null && (we.data = ye)))),
          (ye = Op ? Pp(e, n) : Fp(e, n)) &&
            ((F = ao(F, "onBeforeInput")),
            0 < F.length &&
              ((K = new nu("onBeforeInput", "beforeinput", null, n, K)),
              U.push({ event: K, listeners: F }),
              (K.data = ye))));
      }
      Lu(U, t);
    });
  }
  function ai(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ao(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var l = e,
        u = l.stateNode;
      (l.tag === 5 &&
        u !== null &&
        ((l = u),
        (u = Vr(e, n)),
        u != null && a.unshift(ai(e, u, l)),
        (u = Vr(e, t)),
        u != null && a.push(ai(e, u, l))),
        (e = e.return));
    }
    return a;
  }
  function dr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ou(e, t, n, a, l) {
    for (var u = t._reactName, p = []; n !== null && n !== a; ) {
      var m = n,
        S = m.alternate,
        F = m.stateNode;
      if (S !== null && S === a) break;
      (m.tag === 5 &&
        F !== null &&
        ((m = F),
        l
          ? ((S = Vr(n, u)), S != null && p.unshift(ai(n, S, m)))
          : l || ((S = Vr(n, u)), S != null && p.push(ai(n, S, m)))),
        (n = n.return));
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var Wp = /\r\n?/g,
    Yp = /\u0000|\uFFFD/g;
  function Pu(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Wp,
        `
`,
      )
      .replace(Yp, "");
  }
  function so(e, t, n) {
    if (((t = Pu(t)), Pu(e) !== t && n)) throw Error(r(425));
  }
  function lo() {}
  var Va = null,
    Ka = null;
  function $a(e, t) {
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
  var Ua = typeof setTimeout == "function" ? setTimeout : void 0,
    Gp = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Fu = typeof Promise == "function" ? Promise : void 0,
    Qp =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Fu < "u"
          ? function (e) {
              return Fu.resolve(null).then(e).catch(Xp);
            }
          : Ua;
  function Xp(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ha(e, t) {
    var n = t,
      a = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (a === 0) {
            (e.removeChild(l), Xr(t));
            return;
          }
          a--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || a++;
      n = l;
    } while (n);
    Xr(t);
  }
  function En(e) {
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
  function Du(e) {
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
  var pr = Math.random().toString(36).slice(2),
    Qt = "__reactFiber$" + pr,
    si = "__reactProps$" + pr,
    on = "__reactContainer$" + pr,
    Wa = "__reactEvents$" + pr,
    qp = "__reactListeners$" + pr,
    Jp = "__reactHandles$" + pr;
  function Kn(e) {
    var t = e[Qt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[on] || n[Qt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Du(e); e !== null; ) {
            if ((n = e[Qt])) return n;
            e = Du(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function li(e) {
    return (
      (e = e[Qt] || e[on]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function hr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(r(33));
  }
  function uo(e) {
    return e[si] || null;
  }
  var Ya = [],
    gr = -1;
  function Cn(e) {
    return { current: e };
  }
  function Be(e) {
    0 > gr || ((e.current = Ya[gr]), (Ya[gr] = null), gr--);
  }
  function Ie(e, t) {
    (gr++, (Ya[gr] = e.current), (e.current = t));
  }
  var Tn = {},
    lt = Cn(Tn),
    wt = Cn(!1),
    $n = Tn;
  function mr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Tn;
    var a = e.stateNode;
    if (a && a.__reactInternalMemoizedUnmaskedChildContext === t)
      return a.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      u;
    for (u in n) l[u] = t[u];
    return (
      a &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function kt(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function co() {
    (Be(wt), Be(lt));
  }
  function Au(e, t, n) {
    if (lt.current !== Tn) throw Error(r(168));
    (Ie(lt, t), Ie(wt, n));
  }
  function bu(e, t, n) {
    var a = e.stateNode;
    if (((t = t.childContextTypes), typeof a.getChildContext != "function"))
      return n;
    a = a.getChildContext();
    for (var l in a) if (!(l in t)) throw Error(r(108, Le(e) || "Unknown", l));
    return Z({}, n, a);
  }
  function fo(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Tn),
      ($n = lt.current),
      Ie(lt, e),
      Ie(wt, wt.current),
      !0
    );
  }
  function Iu(e, t, n) {
    var a = e.stateNode;
    if (!a) throw Error(r(169));
    (n
      ? ((e = bu(e, t, $n)),
        (a.__reactInternalMemoizedMergedChildContext = e),
        Be(wt),
        Be(lt),
        Ie(lt, e))
      : Be(wt),
      Ie(wt, n));
  }
  var an = null,
    po = !1,
    Ga = !1;
  function ju(e) {
    an === null ? (an = [e]) : an.push(e);
  }
  function Zp(e) {
    ((po = !0), ju(e));
  }
  function Nn() {
    if (!Ga && an !== null) {
      Ga = !0;
      var e = 0,
        t = De;
      try {
        var n = an;
        for (De = 1; e < n.length; e++) {
          var a = n[e];
          do a = a(!0);
          while (a !== null);
        }
        ((an = null), (po = !1));
      } catch (l) {
        throw (an !== null && (an = an.slice(e + 1)), zl(ma, Nn), l);
      } finally {
        ((De = t), (Ga = !1));
      }
    }
    return null;
  }
  var yr = [],
    vr = 0,
    ho = null,
    go = 0,
    Ot = [],
    Pt = 0,
    Un = null,
    sn = 1,
    ln = "";
  function Hn(e, t) {
    ((yr[vr++] = go), (yr[vr++] = ho), (ho = e), (go = t));
  }
  function Bu(e, t, n) {
    ((Ot[Pt++] = sn), (Ot[Pt++] = ln), (Ot[Pt++] = Un), (Un = e));
    var a = sn;
    e = ln;
    var l = 32 - Bt(a) - 1;
    ((a &= ~(1 << l)), (n += 1));
    var u = 32 - Bt(t) + l;
    if (30 < u) {
      var p = l - (l % 5);
      ((u = (a & ((1 << p) - 1)).toString(32)),
        (a >>= p),
        (l -= p),
        (sn = (1 << (32 - Bt(t) + l)) | (n << l) | a),
        (ln = u + e));
    } else ((sn = (1 << u) | (n << l) | a), (ln = e));
  }
  function Qa(e) {
    e.return !== null && (Hn(e, 1), Bu(e, 1, 0));
  }
  function Xa(e) {
    for (; e === ho; )
      ((ho = yr[--vr]), (yr[vr] = null), (go = yr[--vr]), (yr[vr] = null));
    for (; e === Un; )
      ((Un = Ot[--Pt]),
        (Ot[Pt] = null),
        (ln = Ot[--Pt]),
        (Ot[Pt] = null),
        (sn = Ot[--Pt]),
        (Ot[Pt] = null));
  }
  var Nt = null,
    Lt = null,
    ze = !1,
    Mt = null;
  function zu(e, t) {
    var n = bt(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function Mu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Nt = e), (Lt = En(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Nt = e), (Lt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Un !== null ? { id: sn, overflow: ln } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = bt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Nt = e),
              (Lt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function qa(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ja(e) {
    if (ze) {
      var t = Lt;
      if (t) {
        var n = t;
        if (!Mu(e, t)) {
          if (qa(e)) throw Error(r(418));
          t = En(n.nextSibling);
          var a = Nt;
          t && Mu(e, t)
            ? zu(a, n)
            : ((e.flags = (e.flags & -4097) | 2), (ze = !1), (Nt = e));
        }
      } else {
        if (qa(e)) throw Error(r(418));
        ((e.flags = (e.flags & -4097) | 2), (ze = !1), (Nt = e));
      }
    }
  }
  function Vu(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
    )
      e = e.return;
    Nt = e;
  }
  function mo(e) {
    if (e !== Nt) return !1;
    if (!ze) return (Vu(e), (ze = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !$a(e.type, e.memoizedProps))),
      t && (t = Lt))
    ) {
      if (qa(e)) throw (Ku(), Error(r(418)));
      for (; t; ) (zu(e, t), (t = En(t.nextSibling)));
    }
    if ((Vu(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(r(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Lt = En(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Lt = null;
      }
    } else Lt = Nt ? En(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ku() {
    for (var e = Lt; e; ) e = En(e.nextSibling);
  }
  function wr() {
    ((Lt = Nt = null), (ze = !1));
  }
  function Za(e) {
    Mt === null ? (Mt = [e]) : Mt.push(e);
  }
  var eh = j.ReactCurrentBatchConfig;
  function ui(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(r(309));
          var a = n.stateNode;
        }
        if (!a) throw Error(r(147, e));
        var l = a,
          u = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === u
          ? t.ref
          : ((t = function (p) {
              var m = l.refs;
              p === null ? delete m[u] : (m[u] = p);
            }),
            (t._stringRef = u),
            t);
      }
      if (typeof e != "string") throw Error(r(284));
      if (!n._owner) throw Error(r(290, e));
    }
    return e;
  }
  function yo(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        r(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function $u(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Uu(e) {
    function t(T, _) {
      if (e) {
        var N = T.deletions;
        N === null ? ((T.deletions = [_]), (T.flags |= 16)) : N.push(_);
      }
    }
    function n(T, _) {
      if (!e) return null;
      for (; _ !== null; ) (t(T, _), (_ = _.sibling));
      return null;
    }
    function a(T, _) {
      for (T = new Map(); _ !== null; )
        (_.key !== null ? T.set(_.key, _) : T.set(_.index, _), (_ = _.sibling));
      return T;
    }
    function l(T, _) {
      return ((T = bn(T, _)), (T.index = 0), (T.sibling = null), T);
    }
    function u(T, _, N) {
      return (
        (T.index = N),
        e
          ? ((N = T.alternate),
            N !== null
              ? ((N = N.index), N < _ ? ((T.flags |= 2), _) : N)
              : ((T.flags |= 2), _))
          : ((T.flags |= 1048576), _)
      );
    }
    function p(T) {
      return (e && T.alternate === null && (T.flags |= 2), T);
    }
    function m(T, _, N, Y) {
      return _ === null || _.tag !== 6
        ? ((_ = Us(N, T.mode, Y)), (_.return = T), _)
        : ((_ = l(_, N)), (_.return = T), _);
    }
    function S(T, _, N, Y) {
      var fe = N.type;
      return fe === W
        ? K(T, _, N.props.children, Y, N.key)
        : _ !== null &&
            (_.elementType === fe ||
              (typeof fe == "object" &&
                fe !== null &&
                fe.$$typeof === Te &&
                $u(fe) === _.type))
          ? ((Y = l(_, N.props)), (Y.ref = ui(T, _, N)), (Y.return = T), Y)
          : ((Y = Vo(N.type, N.key, N.props, null, T.mode, Y)),
            (Y.ref = ui(T, _, N)),
            (Y.return = T),
            Y);
    }
    function F(T, _, N, Y) {
      return _ === null ||
        _.tag !== 4 ||
        _.stateNode.containerInfo !== N.containerInfo ||
        _.stateNode.implementation !== N.implementation
        ? ((_ = Hs(N, T.mode, Y)), (_.return = T), _)
        : ((_ = l(_, N.children || [])), (_.return = T), _);
    }
    function K(T, _, N, Y, fe) {
      return _ === null || _.tag !== 7
        ? ((_ = Zn(N, T.mode, Y, fe)), (_.return = T), _)
        : ((_ = l(_, N)), (_.return = T), _);
    }
    function U(T, _, N) {
      if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
        return ((_ = Us("" + _, T.mode, N)), (_.return = T), _);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case $:
            return (
              (N = Vo(_.type, _.key, _.props, null, T.mode, N)),
              (N.ref = ui(T, null, _)),
              (N.return = T),
              N
            );
          case H:
            return ((_ = Hs(_, T.mode, N)), (_.return = T), _);
          case Te:
            var Y = _._init;
            return U(T, Y(_._payload), N);
        }
        if (Bn(_) || te(_))
          return ((_ = Zn(_, T.mode, N, null)), (_.return = T), _);
        yo(T, _);
      }
      return null;
    }
    function M(T, _, N, Y) {
      var fe = _ !== null ? _.key : null;
      if ((typeof N == "string" && N !== "") || typeof N == "number")
        return fe !== null ? null : m(T, _, "" + N, Y);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case $:
            return N.key === fe ? S(T, _, N, Y) : null;
          case H:
            return N.key === fe ? F(T, _, N, Y) : null;
          case Te:
            return ((fe = N._init), M(T, _, fe(N._payload), Y));
        }
        if (Bn(N) || te(N)) return fe !== null ? null : K(T, _, N, Y, null);
        yo(T, N);
      }
      return null;
    }
    function ne(T, _, N, Y, fe) {
      if ((typeof Y == "string" && Y !== "") || typeof Y == "number")
        return ((T = T.get(N) || null), m(_, T, "" + Y, fe));
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case $:
            return (
              (T = T.get(Y.key === null ? N : Y.key) || null),
              S(_, T, Y, fe)
            );
          case H:
            return (
              (T = T.get(Y.key === null ? N : Y.key) || null),
              F(_, T, Y, fe)
            );
          case Te:
            var me = Y._init;
            return ne(T, _, N, me(Y._payload), fe);
        }
        if (Bn(Y) || te(Y))
          return ((T = T.get(N) || null), K(_, T, Y, fe, null));
        yo(_, Y);
      }
      return null;
    }
    function oe(T, _, N, Y) {
      for (
        var fe = null, me = null, ye = _, we = (_ = 0), rt = null;
        ye !== null && we < N.length;
        we++
      ) {
        ye.index > we ? ((rt = ye), (ye = null)) : (rt = ye.sibling);
        var Pe = M(T, ye, N[we], Y);
        if (Pe === null) {
          ye === null && (ye = rt);
          break;
        }
        (e && ye && Pe.alternate === null && t(T, ye),
          (_ = u(Pe, _, we)),
          me === null ? (fe = Pe) : (me.sibling = Pe),
          (me = Pe),
          (ye = rt));
      }
      if (we === N.length) return (n(T, ye), ze && Hn(T, we), fe);
      if (ye === null) {
        for (; we < N.length; we++)
          ((ye = U(T, N[we], Y)),
            ye !== null &&
              ((_ = u(ye, _, we)),
              me === null ? (fe = ye) : (me.sibling = ye),
              (me = ye)));
        return (ze && Hn(T, we), fe);
      }
      for (ye = a(T, ye); we < N.length; we++)
        ((rt = ne(ye, T, we, N[we], Y)),
          rt !== null &&
            (e &&
              rt.alternate !== null &&
              ye.delete(rt.key === null ? we : rt.key),
            (_ = u(rt, _, we)),
            me === null ? (fe = rt) : (me.sibling = rt),
            (me = rt)));
      return (
        e &&
          ye.forEach(function (In) {
            return t(T, In);
          }),
        ze && Hn(T, we),
        fe
      );
    }
    function ue(T, _, N, Y) {
      var fe = te(N);
      if (typeof fe != "function") throw Error(r(150));
      if (((N = fe.call(N)), N == null)) throw Error(r(151));
      for (
        var me = (fe = null), ye = _, we = (_ = 0), rt = null, Pe = N.next();
        ye !== null && !Pe.done;
        we++, Pe = N.next()
      ) {
        ye.index > we ? ((rt = ye), (ye = null)) : (rt = ye.sibling);
        var In = M(T, ye, Pe.value, Y);
        if (In === null) {
          ye === null && (ye = rt);
          break;
        }
        (e && ye && In.alternate === null && t(T, ye),
          (_ = u(In, _, we)),
          me === null ? (fe = In) : (me.sibling = In),
          (me = In),
          (ye = rt));
      }
      if (Pe.done) return (n(T, ye), ze && Hn(T, we), fe);
      if (ye === null) {
        for (; !Pe.done; we++, Pe = N.next())
          ((Pe = U(T, Pe.value, Y)),
            Pe !== null &&
              ((_ = u(Pe, _, we)),
              me === null ? (fe = Pe) : (me.sibling = Pe),
              (me = Pe)));
        return (ze && Hn(T, we), fe);
      }
      for (ye = a(T, ye); !Pe.done; we++, Pe = N.next())
        ((Pe = ne(ye, T, we, Pe.value, Y)),
          Pe !== null &&
            (e &&
              Pe.alternate !== null &&
              ye.delete(Pe.key === null ? we : Pe.key),
            (_ = u(Pe, _, we)),
            me === null ? (fe = Pe) : (me.sibling = Pe),
            (me = Pe)));
      return (
        e &&
          ye.forEach(function (Fh) {
            return t(T, Fh);
          }),
        ze && Hn(T, we),
        fe
      );
    }
    function Ye(T, _, N, Y) {
      if (
        (typeof N == "object" &&
          N !== null &&
          N.type === W &&
          N.key === null &&
          (N = N.props.children),
        typeof N == "object" && N !== null)
      ) {
        switch (N.$$typeof) {
          case $:
            e: {
              for (var fe = N.key, me = _; me !== null; ) {
                if (me.key === fe) {
                  if (((fe = N.type), fe === W)) {
                    if (me.tag === 7) {
                      (n(T, me.sibling),
                        (_ = l(me, N.props.children)),
                        (_.return = T),
                        (T = _));
                      break e;
                    }
                  } else if (
                    me.elementType === fe ||
                    (typeof fe == "object" &&
                      fe !== null &&
                      fe.$$typeof === Te &&
                      $u(fe) === me.type)
                  ) {
                    (n(T, me.sibling),
                      (_ = l(me, N.props)),
                      (_.ref = ui(T, me, N)),
                      (_.return = T),
                      (T = _));
                    break e;
                  }
                  n(T, me);
                  break;
                } else t(T, me);
                me = me.sibling;
              }
              N.type === W
                ? ((_ = Zn(N.props.children, T.mode, Y, N.key)),
                  (_.return = T),
                  (T = _))
                : ((Y = Vo(N.type, N.key, N.props, null, T.mode, Y)),
                  (Y.ref = ui(T, _, N)),
                  (Y.return = T),
                  (T = Y));
            }
            return p(T);
          case H:
            e: {
              for (me = N.key; _ !== null; ) {
                if (_.key === me)
                  if (
                    _.tag === 4 &&
                    _.stateNode.containerInfo === N.containerInfo &&
                    _.stateNode.implementation === N.implementation
                  ) {
                    (n(T, _.sibling),
                      (_ = l(_, N.children || [])),
                      (_.return = T),
                      (T = _));
                    break e;
                  } else {
                    n(T, _);
                    break;
                  }
                else t(T, _);
                _ = _.sibling;
              }
              ((_ = Hs(N, T.mode, Y)), (_.return = T), (T = _));
            }
            return p(T);
          case Te:
            return ((me = N._init), Ye(T, _, me(N._payload), Y));
        }
        if (Bn(N)) return oe(T, _, N, Y);
        if (te(N)) return ue(T, _, N, Y);
        yo(T, N);
      }
      return (typeof N == "string" && N !== "") || typeof N == "number"
        ? ((N = "" + N),
          _ !== null && _.tag === 6
            ? (n(T, _.sibling), (_ = l(_, N)), (_.return = T), (T = _))
            : (n(T, _), (_ = Us(N, T.mode, Y)), (_.return = T), (T = _)),
          p(T))
        : n(T, _);
    }
    return Ye;
  }
  var kr = Uu(!0),
    Hu = Uu(!1),
    vo = Cn(null),
    wo = null,
    Sr = null,
    es = null;
  function ts() {
    es = Sr = wo = null;
  }
  function ns(e) {
    var t = vo.current;
    (Be(vo), (e._currentValue = t));
  }
  function rs(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function xr(e, t) {
    ((wo = e),
      (es = Sr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (St = !0), (e.firstContext = null)));
  }
  function Ft(e) {
    var t = e._currentValue;
    if (es !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Sr === null)) {
        if (wo === null) throw Error(r(308));
        ((Sr = e), (wo.dependencies = { lanes: 0, firstContext: e }));
      } else Sr = Sr.next = e;
    return t;
  }
  var Wn = null;
  function is(e) {
    Wn === null ? (Wn = [e]) : Wn.push(e);
  }
  function Wu(e, t, n, a) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), is(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      un(e, a)
    );
  }
  function un(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var Ln = !1;
  function os(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Yu(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function cn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Rn(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), Oe & 2)) {
      var l = a.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (a.pending = t),
        un(e, n)
      );
    }
    return (
      (l = a.interleaved),
      l === null ? ((t.next = t), is(a)) : ((t.next = l.next), (l.next = t)),
      (a.interleaved = t),
      un(e, n)
    );
  }
  function ko(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), wa(e, n));
    }
  }
  function Gu(e, t) {
    var n = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), n === a)) {
      var l = null,
        u = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var p = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (u === null ? (l = u = p) : (u = u.next = p), (n = n.next));
        } while (n !== null);
        u === null ? (l = u = t) : (u = u.next = t);
      } else l = u = t;
      ((n = {
        baseState: a.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: u,
        shared: a.shared,
        effects: a.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function So(e, t, n, a) {
    var l = e.updateQueue;
    Ln = !1;
    var u = l.firstBaseUpdate,
      p = l.lastBaseUpdate,
      m = l.shared.pending;
    if (m !== null) {
      l.shared.pending = null;
      var S = m,
        F = S.next;
      ((S.next = null), p === null ? (u = F) : (p.next = F), (p = S));
      var K = e.alternate;
      K !== null &&
        ((K = K.updateQueue),
        (m = K.lastBaseUpdate),
        m !== p &&
          (m === null ? (K.firstBaseUpdate = F) : (m.next = F),
          (K.lastBaseUpdate = S)));
    }
    if (u !== null) {
      var U = l.baseState;
      ((p = 0), (K = F = S = null), (m = u));
      do {
        var M = m.lane,
          ne = m.eventTime;
        if ((a & M) === M) {
          K !== null &&
            (K = K.next =
              {
                eventTime: ne,
                lane: 0,
                tag: m.tag,
                payload: m.payload,
                callback: m.callback,
                next: null,
              });
          e: {
            var oe = e,
              ue = m;
            switch (((M = t), (ne = n), ue.tag)) {
              case 1:
                if (((oe = ue.payload), typeof oe == "function")) {
                  U = oe.call(ne, U, M);
                  break e;
                }
                U = oe;
                break e;
              case 3:
                oe.flags = (oe.flags & -65537) | 128;
              case 0:
                if (
                  ((oe = ue.payload),
                  (M = typeof oe == "function" ? oe.call(ne, U, M) : oe),
                  M == null)
                )
                  break e;
                U = Z({}, U, M);
                break e;
              case 2:
                Ln = !0;
            }
          }
          m.callback !== null &&
            m.lane !== 0 &&
            ((e.flags |= 64),
            (M = l.effects),
            M === null ? (l.effects = [m]) : M.push(m));
        } else
          ((ne = {
            eventTime: ne,
            lane: M,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null,
          }),
            K === null ? ((F = K = ne), (S = U)) : (K = K.next = ne),
            (p |= M));
        if (((m = m.next), m === null)) {
          if (((m = l.shared.pending), m === null)) break;
          ((M = m),
            (m = M.next),
            (M.next = null),
            (l.lastBaseUpdate = M),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (K === null && (S = U),
        (l.baseState = S),
        (l.firstBaseUpdate = F),
        (l.lastBaseUpdate = K),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((p |= l.lane), (l = l.next));
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      ((Qn |= p), (e.lanes = p), (e.memoizedState = U));
    }
  }
  function Qu(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var a = e[t],
          l = a.callback;
        if (l !== null) {
          if (((a.callback = null), (a = n), typeof l != "function"))
            throw Error(r(191, l));
          l.call(a);
        }
      }
  }
  var ci = {},
    Xt = Cn(ci),
    fi = Cn(ci),
    di = Cn(ci);
  function Yn(e) {
    if (e === ci) throw Error(r(174));
    return e;
  }
  function as(e, t) {
    switch ((Ie(di, t), Ie(fi, e), Ie(Xt, ci), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : J(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = J(t, e)));
    }
    (Be(Xt), Ie(Xt, t));
  }
  function _r() {
    (Be(Xt), Be(fi), Be(di));
  }
  function Xu(e) {
    Yn(di.current);
    var t = Yn(Xt.current),
      n = J(t, e.type);
    t !== n && (Ie(fi, e), Ie(Xt, n));
  }
  function ss(e) {
    fi.current === e && (Be(Xt), Be(fi));
  }
  var Ke = Cn(0);
  function xo(e) {
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
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var ls = [];
  function us() {
    for (var e = 0; e < ls.length; e++)
      ls[e]._workInProgressVersionPrimary = null;
    ls.length = 0;
  }
  var _o = j.ReactCurrentDispatcher,
    cs = j.ReactCurrentBatchConfig,
    Gn = 0,
    $e = null,
    qe = null,
    tt = null,
    Eo = !1,
    pi = !1,
    hi = 0,
    th = 0;
  function ut() {
    throw Error(r(321));
  }
  function fs(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!zt(e[n], t[n])) return !1;
    return !0;
  }
  function ds(e, t, n, a, l, u) {
    if (
      ((Gn = u),
      ($e = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (_o.current = e === null || e.memoizedState === null ? oh : ah),
      (e = n(a, l)),
      pi)
    ) {
      u = 0;
      do {
        if (((pi = !1), (hi = 0), 25 <= u)) throw Error(r(301));
        ((u += 1),
          (tt = qe = null),
          (t.updateQueue = null),
          (_o.current = sh),
          (e = n(a, l)));
      } while (pi);
    }
    if (
      ((_o.current = No),
      (t = qe !== null && qe.next !== null),
      (Gn = 0),
      (tt = qe = $e = null),
      (Eo = !1),
      t)
    )
      throw Error(r(300));
    return e;
  }
  function ps() {
    var e = hi !== 0;
    return ((hi = 0), e);
  }
  function qt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (tt === null ? ($e.memoizedState = tt = e) : (tt = tt.next = e), tt);
  }
  function Dt() {
    if (qe === null) {
      var e = $e.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = qe.next;
    var t = tt === null ? $e.memoizedState : tt.next;
    if (t !== null) ((tt = t), (qe = e));
    else {
      if (e === null) throw Error(r(310));
      ((qe = e),
        (e = {
          memoizedState: qe.memoizedState,
          baseState: qe.baseState,
          baseQueue: qe.baseQueue,
          queue: qe.queue,
          next: null,
        }),
        tt === null ? ($e.memoizedState = tt = e) : (tt = tt.next = e));
    }
    return tt;
  }
  function gi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function hs(e) {
    var t = Dt(),
      n = t.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = e;
    var a = qe,
      l = a.baseQueue,
      u = n.pending;
    if (u !== null) {
      if (l !== null) {
        var p = l.next;
        ((l.next = u.next), (u.next = p));
      }
      ((a.baseQueue = l = u), (n.pending = null));
    }
    if (l !== null) {
      ((u = l.next), (a = a.baseState));
      var m = (p = null),
        S = null,
        F = u;
      do {
        var K = F.lane;
        if ((Gn & K) === K)
          (S !== null &&
            (S = S.next =
              {
                lane: 0,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null,
              }),
            (a = F.hasEagerState ? F.eagerState : e(a, F.action)));
        else {
          var U = {
            lane: K,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null,
          };
          (S === null ? ((m = S = U), (p = a)) : (S = S.next = U),
            ($e.lanes |= K),
            (Qn |= K));
        }
        F = F.next;
      } while (F !== null && F !== u);
      (S === null ? (p = a) : (S.next = m),
        zt(a, t.memoizedState) || (St = !0),
        (t.memoizedState = a),
        (t.baseState = p),
        (t.baseQueue = S),
        (n.lastRenderedState = a));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((u = l.lane), ($e.lanes |= u), (Qn |= u), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function gs(e) {
    var t = Dt(),
      n = t.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch,
      l = n.pending,
      u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var p = (l = l.next);
      do ((u = e(u, p.action)), (p = p.next));
      while (p !== l);
      (zt(u, t.memoizedState) || (St = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u));
    }
    return [u, a];
  }
  function qu() {}
  function Ju(e, t) {
    var n = $e,
      a = Dt(),
      l = t(),
      u = !zt(a.memoizedState, l);
    if (
      (u && ((a.memoizedState = l), (St = !0)),
      (a = a.queue),
      ms(tc.bind(null, n, a, e), [e]),
      a.getSnapshot !== t || u || (tt !== null && tt.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        mi(9, ec.bind(null, n, a, l, t), void 0, null),
        nt === null)
      )
        throw Error(r(349));
      Gn & 30 || Zu(n, t, l);
    }
    return l;
  }
  function Zu(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = $e.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          ($e.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function ec(e, t, n, a) {
    ((t.value = n), (t.getSnapshot = a), nc(t) && rc(e));
  }
  function tc(e, t, n) {
    return n(function () {
      nc(t) && rc(e);
    });
  }
  function nc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !zt(e, n);
    } catch {
      return !0;
    }
  }
  function rc(e) {
    var t = un(e, 1);
    t !== null && Ut(t, e, 1, -1);
  }
  function ic(e) {
    var t = qt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: gi,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = ih.bind(null, $e, e)),
      [t.memoizedState, e]
    );
  }
  function mi(e, t, n, a) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: a, next: null }),
      (t = $e.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          ($e.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e))),
      e
    );
  }
  function oc() {
    return Dt().memoizedState;
  }
  function Co(e, t, n, a) {
    var l = qt();
    (($e.flags |= e),
      (l.memoizedState = mi(1 | t, n, void 0, a === void 0 ? null : a)));
  }
  function To(e, t, n, a) {
    var l = Dt();
    a = a === void 0 ? null : a;
    var u = void 0;
    if (qe !== null) {
      var p = qe.memoizedState;
      if (((u = p.destroy), a !== null && fs(a, p.deps))) {
        l.memoizedState = mi(t, n, u, a);
        return;
      }
    }
    (($e.flags |= e), (l.memoizedState = mi(1 | t, n, u, a)));
  }
  function ac(e, t) {
    return Co(8390656, 8, e, t);
  }
  function ms(e, t) {
    return To(2048, 8, e, t);
  }
  function sc(e, t) {
    return To(4, 2, e, t);
  }
  function lc(e, t) {
    return To(4, 4, e, t);
  }
  function uc(e, t) {
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
  function cc(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null),
      To(4, 4, uc.bind(null, t, e), n)
    );
  }
  function ys() {}
  function fc(e, t) {
    var n = Dt();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return a !== null && t !== null && fs(t, a[1])
      ? a[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function dc(e, t) {
    var n = Dt();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return a !== null && t !== null && fs(t, a[1])
      ? a[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function pc(e, t, n) {
    return Gn & 21
      ? (zt(n, t) ||
          ((n = $l()), ($e.lanes |= n), (Qn |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (St = !0)), (e.memoizedState = n));
  }
  function nh(e, t) {
    var n = De;
    ((De = n !== 0 && 4 > n ? n : 4), e(!0));
    var a = cs.transition;
    cs.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((De = n), (cs.transition = a));
    }
  }
  function hc() {
    return Dt().memoizedState;
  }
  function rh(e, t, n) {
    var a = Dn(e);
    if (
      ((n = {
        lane: a,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      gc(e))
    )
      mc(t, n);
    else if (((n = Wu(e, t, n, a)), n !== null)) {
      var l = mt();
      (Ut(n, e, a, l), yc(n, t, a));
    }
  }
  function ih(e, t, n) {
    var a = Dn(e),
      l = {
        lane: a,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (gc(e)) mc(t, l);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var p = t.lastRenderedState,
            m = u(p, n);
          if (((l.hasEagerState = !0), (l.eagerState = m), zt(m, p))) {
            var S = t.interleaved;
            (S === null
              ? ((l.next = l), is(t))
              : ((l.next = S.next), (S.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = Wu(e, t, l, a)),
        n !== null && ((l = mt()), Ut(n, e, a, l), yc(n, t, a)));
    }
  }
  function gc(e) {
    var t = e.alternate;
    return e === $e || (t !== null && t === $e);
  }
  function mc(e, t) {
    pi = Eo = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function yc(e, t, n) {
    if (n & 4194240) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), wa(e, n));
    }
  }
  var No = {
      readContext: Ft,
      useCallback: ut,
      useContext: ut,
      useEffect: ut,
      useImperativeHandle: ut,
      useInsertionEffect: ut,
      useLayoutEffect: ut,
      useMemo: ut,
      useReducer: ut,
      useRef: ut,
      useState: ut,
      useDebugValue: ut,
      useDeferredValue: ut,
      useTransition: ut,
      useMutableSource: ut,
      useSyncExternalStore: ut,
      useId: ut,
      unstable_isNewReconciler: !1,
    },
    oh = {
      readContext: Ft,
      useCallback: function (e, t) {
        return ((qt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Ft,
      useEffect: ac,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Co(4194308, 4, uc.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Co(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Co(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = qt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var a = qt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (a.memoizedState = a.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (a.queue = e),
          (e = e.dispatch = rh.bind(null, $e, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = qt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: ic,
      useDebugValue: ys,
      useDeferredValue: function (e) {
        return (qt().memoizedState = e);
      },
      useTransition: function () {
        var e = ic(!1),
          t = e[0];
        return ((e = nh.bind(null, e[1])), (qt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var a = $e,
          l = qt();
        if (ze) {
          if (n === void 0) throw Error(r(407));
          n = n();
        } else {
          if (((n = t()), nt === null)) throw Error(r(349));
          Gn & 30 || Zu(a, t, n);
        }
        l.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (l.queue = u),
          ac(tc.bind(null, a, u, e), [e]),
          (a.flags |= 2048),
          mi(9, ec.bind(null, a, u, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = qt(),
          t = nt.identifierPrefix;
        if (ze) {
          var n = ln,
            a = sn;
          ((n = (a & ~(1 << (32 - Bt(a) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = hi++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = th++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    ah = {
      readContext: Ft,
      useCallback: fc,
      useContext: Ft,
      useEffect: ms,
      useImperativeHandle: cc,
      useInsertionEffect: sc,
      useLayoutEffect: lc,
      useMemo: dc,
      useReducer: hs,
      useRef: oc,
      useState: function () {
        return hs(gi);
      },
      useDebugValue: ys,
      useDeferredValue: function (e) {
        var t = Dt();
        return pc(t, qe.memoizedState, e);
      },
      useTransition: function () {
        var e = hs(gi)[0],
          t = Dt().memoizedState;
        return [e, t];
      },
      useMutableSource: qu,
      useSyncExternalStore: Ju,
      useId: hc,
      unstable_isNewReconciler: !1,
    },
    sh = {
      readContext: Ft,
      useCallback: fc,
      useContext: Ft,
      useEffect: ms,
      useImperativeHandle: cc,
      useInsertionEffect: sc,
      useLayoutEffect: lc,
      useMemo: dc,
      useReducer: gs,
      useRef: oc,
      useState: function () {
        return gs(gi);
      },
      useDebugValue: ys,
      useDeferredValue: function (e) {
        var t = Dt();
        return qe === null ? (t.memoizedState = e) : pc(t, qe.memoizedState, e);
      },
      useTransition: function () {
        var e = gs(gi)[0],
          t = Dt().memoizedState;
        return [e, t];
      },
      useMutableSource: qu,
      useSyncExternalStore: Ju,
      useId: hc,
      unstable_isNewReconciler: !1,
    };
  function Vt(e, t) {
    if (e && e.defaultProps) {
      ((t = Z({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function vs(e, t, n, a) {
    ((t = e.memoizedState),
      (n = n(a, t)),
      (n = n == null ? t : Z({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Lo = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Vn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var a = mt(),
        l = Dn(e),
        u = cn(a, l);
      ((u.payload = t),
        n != null && (u.callback = n),
        (t = Rn(e, u, l)),
        t !== null && (Ut(t, e, l, a), ko(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var a = mt(),
        l = Dn(e),
        u = cn(a, l);
      ((u.tag = 1),
        (u.payload = t),
        n != null && (u.callback = n),
        (t = Rn(e, u, l)),
        t !== null && (Ut(t, e, l, a), ko(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = mt(),
        a = Dn(e),
        l = cn(n, a);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Rn(e, l, a)),
        t !== null && (Ut(t, e, a, n), ko(t, e, a)));
    },
  };
  function vc(e, t, n, a, l, u, p) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, u, p)
        : t.prototype && t.prototype.isPureReactComponent
          ? !ni(n, a) || !ni(l, u)
          : !0
    );
  }
  function wc(e, t, n) {
    var a = !1,
      l = Tn,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = Ft(u))
        : ((l = kt(t) ? $n : lt.current),
          (a = t.contextTypes),
          (u = (a = a != null) ? mr(e, l) : Tn)),
      (t = new t(n, u)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Lo),
      (e.stateNode = t),
      (t._reactInternals = e),
      a &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      t
    );
  }
  function kc(e, t, n, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, a),
      t.state !== e && Lo.enqueueReplaceState(t, t.state, null));
  }
  function ws(e, t, n, a) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), os(e));
    var u = t.contextType;
    (typeof u == "object" && u !== null
      ? (l.context = Ft(u))
      : ((u = kt(t) ? $n : lt.current), (l.context = mr(e, u))),
      (l.state = e.memoizedState),
      (u = t.getDerivedStateFromProps),
      typeof u == "function" && (vs(e, t, u, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && Lo.enqueueReplaceState(l, l.state, null),
        So(e, n, l, a),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function Er(e, t) {
    try {
      var n = "",
        a = t;
      do ((n += ge(a)), (a = a.return));
      while (a);
      var l = n;
    } catch (u) {
      l =
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function ks(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ss(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var lh = typeof WeakMap == "function" ? WeakMap : Map;
  function Sc(e, t, n) {
    ((n = cn(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var a = t.value;
    return (
      (n.callback = function () {
        (bo || ((bo = !0), (Is = a)), Ss(e, t));
      }),
      n
    );
  }
  function xc(e, t, n) {
    ((n = cn(-1, n)), (n.tag = 3));
    var a = e.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var l = t.value;
      ((n.payload = function () {
        return a(l);
      }),
        (n.callback = function () {
          Ss(e, t);
        }));
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (n.callback = function () {
          (Ss(e, t),
            typeof a != "function" &&
              (Pn === null ? (Pn = new Set([this])) : Pn.add(this)));
          var p = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: p !== null ? p : "",
          });
        }),
      n
    );
  }
  function _c(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new lh();
      var l = new Set();
      a.set(t, l);
    } else ((l = a.get(t)), l === void 0 && ((l = new Set()), a.set(t, l)));
    l.has(n) || (l.add(n), (e = xh.bind(null, e, t, n)), t.then(e, e));
  }
  function Ec(e) {
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
  function Cc(e, t, n, a, l) {
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
                : ((t = cn(-1, 1)), (t.tag = 2), Rn(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var uh = j.ReactCurrentOwner,
    St = !1;
  function gt(e, t, n, a) {
    t.child = e === null ? Hu(t, null, n, a) : kr(t, e.child, n, a);
  }
  function Tc(e, t, n, a, l) {
    n = n.render;
    var u = t.ref;
    return (
      xr(t, l),
      (a = ds(e, t, n, a, u, l)),
      (n = ps()),
      e !== null && !St
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          fn(e, t, l))
        : (ze && n && Qa(t), (t.flags |= 1), gt(e, t, a, l), t.child)
    );
  }
  function Nc(e, t, n, a, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" &&
        !$s(u) &&
        u.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), Lc(e, t, u, a, l))
        : ((e = Vo(n.type, null, a, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), !(e.lanes & l))) {
      var p = u.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : ni), n(p, a) && e.ref === t.ref)
      )
        return fn(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = bn(u, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Lc(e, t, n, a, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (ni(u, a) && e.ref === t.ref)
        if (((St = !1), (t.pendingProps = a = u), (e.lanes & l) !== 0))
          e.flags & 131072 && (St = !0);
        else return ((t.lanes = e.lanes), fn(e, t, l));
    }
    return xs(e, t, n, a, l);
  }
  function Rc(e, t, n) {
    var a = t.pendingProps,
      l = a.children,
      u = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden")
      if (!(t.mode & 1))
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Ie(Tr, Rt),
          (Rt |= n));
      else {
        if (!(n & 1073741824))
          return (
            (e = u !== null ? u.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Ie(Tr, Rt),
            (Rt |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (a = u !== null ? u.baseLanes : n),
          Ie(Tr, Rt),
          (Rt |= a));
      }
    else
      (u !== null ? ((a = u.baseLanes | n), (t.memoizedState = null)) : (a = n),
        Ie(Tr, Rt),
        (Rt |= a));
    return (gt(e, t, l, n), t.child);
  }
  function Oc(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function xs(e, t, n, a, l) {
    var u = kt(n) ? $n : lt.current;
    return (
      (u = mr(t, u)),
      xr(t, l),
      (n = ds(e, t, n, a, u, l)),
      (a = ps()),
      e !== null && !St
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          fn(e, t, l))
        : (ze && a && Qa(t), (t.flags |= 1), gt(e, t, n, l), t.child)
    );
  }
  function Pc(e, t, n, a, l) {
    if (kt(n)) {
      var u = !0;
      fo(t);
    } else u = !1;
    if ((xr(t, l), t.stateNode === null))
      (Oo(e, t), wc(t, n, a), ws(t, n, a, l), (a = !0));
    else if (e === null) {
      var p = t.stateNode,
        m = t.memoizedProps;
      p.props = m;
      var S = p.context,
        F = n.contextType;
      typeof F == "object" && F !== null
        ? (F = Ft(F))
        : ((F = kt(n) ? $n : lt.current), (F = mr(t, F)));
      var K = n.getDerivedStateFromProps,
        U =
          typeof K == "function" ||
          typeof p.getSnapshotBeforeUpdate == "function";
      (U ||
        (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
          typeof p.componentWillReceiveProps != "function") ||
        ((m !== a || S !== F) && kc(t, p, a, F)),
        (Ln = !1));
      var M = t.memoizedState;
      ((p.state = M),
        So(t, a, p, l),
        (S = t.memoizedState),
        m !== a || M !== S || wt.current || Ln
          ? (typeof K == "function" && (vs(t, n, K, a), (S = t.memoizedState)),
            (m = Ln || vc(t, n, m, a, M, S, F))
              ? (U ||
                  (typeof p.UNSAFE_componentWillMount != "function" &&
                    typeof p.componentWillMount != "function") ||
                  (typeof p.componentWillMount == "function" &&
                    p.componentWillMount(),
                  typeof p.UNSAFE_componentWillMount == "function" &&
                    p.UNSAFE_componentWillMount()),
                typeof p.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof p.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = S)),
            (p.props = a),
            (p.state = S),
            (p.context = F),
            (a = m))
          : (typeof p.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1)));
    } else {
      ((p = t.stateNode),
        Yu(e, t),
        (m = t.memoizedProps),
        (F = t.type === t.elementType ? m : Vt(t.type, m)),
        (p.props = F),
        (U = t.pendingProps),
        (M = p.context),
        (S = n.contextType),
        typeof S == "object" && S !== null
          ? (S = Ft(S))
          : ((S = kt(n) ? $n : lt.current), (S = mr(t, S))));
      var ne = n.getDerivedStateFromProps;
      ((K =
        typeof ne == "function" ||
        typeof p.getSnapshotBeforeUpdate == "function") ||
        (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
          typeof p.componentWillReceiveProps != "function") ||
        ((m !== U || M !== S) && kc(t, p, a, S)),
        (Ln = !1),
        (M = t.memoizedState),
        (p.state = M),
        So(t, a, p, l));
      var oe = t.memoizedState;
      m !== U || M !== oe || wt.current || Ln
        ? (typeof ne == "function" && (vs(t, n, ne, a), (oe = t.memoizedState)),
          (F = Ln || vc(t, n, F, a, M, oe, S) || !1)
            ? (K ||
                (typeof p.UNSAFE_componentWillUpdate != "function" &&
                  typeof p.componentWillUpdate != "function") ||
                (typeof p.componentWillUpdate == "function" &&
                  p.componentWillUpdate(a, oe, S),
                typeof p.UNSAFE_componentWillUpdate == "function" &&
                  p.UNSAFE_componentWillUpdate(a, oe, S)),
              typeof p.componentDidUpdate == "function" && (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof p.componentDidUpdate != "function" ||
                (m === e.memoizedProps && M === e.memoizedState) ||
                (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate != "function" ||
                (m === e.memoizedProps && M === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = oe)),
          (p.props = a),
          (p.state = oe),
          (p.context = S),
          (a = F))
        : (typeof p.componentDidUpdate != "function" ||
            (m === e.memoizedProps && M === e.memoizedState) ||
            (t.flags |= 4),
          typeof p.getSnapshotBeforeUpdate != "function" ||
            (m === e.memoizedProps && M === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return _s(e, t, n, a, u, l);
  }
  function _s(e, t, n, a, l, u) {
    Oc(e, t);
    var p = (t.flags & 128) !== 0;
    if (!a && !p) return (l && Iu(t, n, !1), fn(e, t, u));
    ((a = t.stateNode), (uh.current = t));
    var m =
      p && typeof n.getDerivedStateFromError != "function" ? null : a.render();
    return (
      (t.flags |= 1),
      e !== null && p
        ? ((t.child = kr(t, e.child, null, u)), (t.child = kr(t, null, m, u)))
        : gt(e, t, m, u),
      (t.memoizedState = a.state),
      l && Iu(t, n, !0),
      t.child
    );
  }
  function Fc(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Au(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Au(e, t.context, !1),
      as(e, t.containerInfo));
  }
  function Dc(e, t, n, a, l) {
    return (wr(), Za(l), (t.flags |= 256), gt(e, t, n, a), t.child);
  }
  var Es = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Cs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ac(e, t, n) {
    var a = t.pendingProps,
      l = Ke.current,
      u = !1,
      p = (t.flags & 128) !== 0,
      m;
    if (
      ((m = p) ||
        (m = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      m
        ? ((u = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      Ie(Ke, l & 1),
      e === null)
    )
      return (
        Ja(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((p = a.children),
            (e = a.fallback),
            u
              ? ((a = t.mode),
                (u = t.child),
                (p = { mode: "hidden", children: p }),
                !(a & 1) && u !== null
                  ? ((u.childLanes = 0), (u.pendingProps = p))
                  : (u = Ko(p, a, 0, null)),
                (e = Zn(e, a, n, null)),
                (u.return = t),
                (e.return = t),
                (u.sibling = e),
                (t.child = u),
                (t.child.memoizedState = Cs(n)),
                (t.memoizedState = Es),
                e)
              : Ts(t, p))
      );
    if (((l = e.memoizedState), l !== null && ((m = l.dehydrated), m !== null)))
      return ch(e, t, p, a, m, l, n);
    if (u) {
      ((u = a.fallback), (p = t.mode), (l = e.child), (m = l.sibling));
      var S = { mode: "hidden", children: a.children };
      return (
        !(p & 1) && t.child !== l
          ? ((a = t.child),
            (a.childLanes = 0),
            (a.pendingProps = S),
            (t.deletions = null))
          : ((a = bn(l, S)), (a.subtreeFlags = l.subtreeFlags & 14680064)),
        m !== null ? (u = bn(m, u)) : ((u = Zn(u, p, n, null)), (u.flags |= 2)),
        (u.return = t),
        (a.return = t),
        (a.sibling = u),
        (t.child = a),
        (a = u),
        (u = t.child),
        (p = e.child.memoizedState),
        (p =
          p === null
            ? Cs(n)
            : {
                baseLanes: p.baseLanes | n,
                cachePool: null,
                transitions: p.transitions,
              }),
        (u.memoizedState = p),
        (u.childLanes = e.childLanes & ~n),
        (t.memoizedState = Es),
        a
      );
    }
    return (
      (u = e.child),
      (e = u.sibling),
      (a = bn(u, { mode: "visible", children: a.children })),
      !(t.mode & 1) && (a.lanes = n),
      (a.return = t),
      (a.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = a),
      (t.memoizedState = null),
      a
    );
  }
  function Ts(e, t) {
    return (
      (t = Ko({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Ro(e, t, n, a) {
    return (
      a !== null && Za(a),
      kr(t, e.child, null, n),
      (e = Ts(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function ch(e, t, n, a, l, u, p) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (a = ks(Error(r(422)))), Ro(e, t, p, a))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((u = a.fallback),
            (l = t.mode),
            (a = Ko({ mode: "visible", children: a.children }, l, 0, null)),
            (u = Zn(u, l, p, null)),
            (u.flags |= 2),
            (a.return = t),
            (u.return = t),
            (a.sibling = u),
            (t.child = a),
            t.mode & 1 && kr(t, e.child, null, p),
            (t.child.memoizedState = Cs(p)),
            (t.memoizedState = Es),
            u);
    if (!(t.mode & 1)) return Ro(e, t, p, null);
    if (l.data === "$!") {
      if (((a = l.nextSibling && l.nextSibling.dataset), a)) var m = a.dgst;
      return (
        (a = m),
        (u = Error(r(419))),
        (a = ks(u, a, void 0)),
        Ro(e, t, p, a)
      );
    }
    if (((m = (p & e.childLanes) !== 0), St || m)) {
      if (((a = nt), a !== null)) {
        switch (p & -p) {
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
        ((l = l & (a.suspendedLanes | p) ? 0 : l),
          l !== 0 &&
            l !== u.retryLane &&
            ((u.retryLane = l), un(e, l), Ut(a, e, l, -1)));
      }
      return (Ks(), (a = ks(Error(r(421)))), Ro(e, t, p, a));
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = _h.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = u.treeContext),
        (Lt = En(l.nextSibling)),
        (Nt = t),
        (ze = !0),
        (Mt = null),
        e !== null &&
          ((Ot[Pt++] = sn),
          (Ot[Pt++] = ln),
          (Ot[Pt++] = Un),
          (sn = e.id),
          (ln = e.overflow),
          (Un = t)),
        (t = Ts(t, a.children)),
        (t.flags |= 4096),
        t);
  }
  function bc(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), rs(e.return, t, n));
  }
  function Ns(e, t, n, a, l) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: l,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = a),
        (u.tail = n),
        (u.tailMode = l));
  }
  function Ic(e, t, n) {
    var a = t.pendingProps,
      l = a.revealOrder,
      u = a.tail;
    if ((gt(e, t, a.children, n), (a = Ke.current), a & 2))
      ((a = (a & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && bc(e, n, t);
          else if (e.tag === 19) bc(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      a &= 1;
    }
    if ((Ie(Ke, a), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate),
              e !== null && xo(e) === null && (l = n),
              (n = n.sibling));
          ((n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            Ns(t, !1, l, n, u));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && xo(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          Ns(t, !0, n, null, u);
          break;
        case "together":
          Ns(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Oo(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function fn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Qn |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(r(153));
    if (t.child !== null) {
      for (
        e = t.child, n = bn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = bn(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function fh(e, t, n) {
    switch (t.tag) {
      case 3:
        (Fc(t), wr());
        break;
      case 5:
        Xu(t);
        break;
      case 1:
        kt(t.type) && fo(t);
        break;
      case 4:
        as(t, t.stateNode.containerInfo);
        break;
      case 10:
        var a = t.type._context,
          l = t.memoizedProps.value;
        (Ie(vo, a._currentValue), (a._currentValue = l));
        break;
      case 13:
        if (((a = t.memoizedState), a !== null))
          return a.dehydrated !== null
            ? (Ie(Ke, Ke.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
              ? Ac(e, t, n)
              : (Ie(Ke, Ke.current & 1),
                (e = fn(e, t, n)),
                e !== null ? e.sibling : null);
        Ie(Ke, Ke.current & 1);
        break;
      case 19:
        if (((a = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (a) return Ic(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          Ie(Ke, Ke.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Rc(e, t, n));
    }
    return fn(e, t, n);
  }
  var jc, Ls, Bc, zc;
  ((jc = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }),
    (Ls = function () {}),
    (Bc = function (e, t, n, a) {
      var l = e.memoizedProps;
      if (l !== a) {
        ((e = t.stateNode), Yn(Xt.current));
        var u = null;
        switch (n) {
          case "input":
            ((l = jn(e, l)), (a = jn(e, a)), (u = []));
            break;
          case "select":
            ((l = Z({}, l, { value: void 0 })),
              (a = Z({}, a, { value: void 0 })),
              (u = []));
            break;
          case "textarea":
            ((l = Mi(e, l)), (a = Mi(e, a)), (u = []));
            break;
          default:
            typeof l.onClick != "function" &&
              typeof a.onClick == "function" &&
              (e.onclick = lo);
        }
        zr(n, a);
        var p;
        n = null;
        for (F in l)
          if (!a.hasOwnProperty(F) && l.hasOwnProperty(F) && l[F] != null)
            if (F === "style") {
              var m = l[F];
              for (p in m) m.hasOwnProperty(p) && (n || (n = {}), (n[p] = ""));
            } else
              F !== "dangerouslySetInnerHTML" &&
                F !== "children" &&
                F !== "suppressContentEditableWarning" &&
                F !== "suppressHydrationWarning" &&
                F !== "autoFocus" &&
                (f.hasOwnProperty(F)
                  ? u || (u = [])
                  : (u = u || []).push(F, null));
        for (F in a) {
          var S = a[F];
          if (
            ((m = l != null ? l[F] : void 0),
            a.hasOwnProperty(F) && S !== m && (S != null || m != null))
          )
            if (F === "style")
              if (m) {
                for (p in m)
                  !m.hasOwnProperty(p) ||
                    (S && S.hasOwnProperty(p)) ||
                    (n || (n = {}), (n[p] = ""));
                for (p in S)
                  S.hasOwnProperty(p) &&
                    m[p] !== S[p] &&
                    (n || (n = {}), (n[p] = S[p]));
              } else (n || (u || (u = []), u.push(F, n)), (n = S));
            else
              F === "dangerouslySetInnerHTML"
                ? ((S = S ? S.__html : void 0),
                  (m = m ? m.__html : void 0),
                  S != null && m !== S && (u = u || []).push(F, S))
                : F === "children"
                  ? (typeof S != "string" && typeof S != "number") ||
                    (u = u || []).push(F, "" + S)
                  : F !== "suppressContentEditableWarning" &&
                    F !== "suppressHydrationWarning" &&
                    (f.hasOwnProperty(F)
                      ? (S != null && F === "onScroll" && je("scroll", e),
                        u || m === S || (u = []))
                      : (u = u || []).push(F, S));
        }
        n && (u = u || []).push("style", n);
        var F = u;
        (t.updateQueue = F) && (t.flags |= 4);
      }
    }),
    (zc = function (e, t, n, a) {
      n !== a && (t.flags |= 4);
    }));
  function yi(e, t) {
    if (!ze)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var a = null; n !== null; )
            (n.alternate !== null && (a = n), (n = n.sibling));
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function ct(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      a = 0;
    if (t)
      for (var l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (a |= l.subtreeFlags & 14680064),
          (a |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (a |= l.subtreeFlags),
          (a |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= a), (e.childLanes = n), t);
  }
  function dh(e, t, n) {
    var a = t.pendingProps;
    switch ((Xa(t), t.tag)) {
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
        return (ct(t), null);
      case 1:
        return (kt(t.type) && co(), ct(t), null);
      case 3:
        return (
          (a = t.stateNode),
          _r(),
          Be(wt),
          Be(lt),
          us(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (mo(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Mt !== null && (zs(Mt), (Mt = null)))),
          Ls(e, t),
          ct(t),
          null
        );
      case 5:
        ss(t);
        var l = Yn(di.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Bc(e, t, n, a, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(r(166));
            return (ct(t), null);
          }
          if (((e = Yn(Xt.current)), mo(t))) {
            ((a = t.stateNode), (n = t.type));
            var u = t.memoizedProps;
            switch (((a[Qt] = t), (a[si] = u), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (je("cancel", a), je("close", a));
                break;
              case "iframe":
              case "object":
              case "embed":
                je("load", a);
                break;
              case "video":
              case "audio":
                for (l = 0; l < ii.length; l++) je(ii[l], a);
                break;
              case "source":
                je("error", a);
                break;
              case "img":
              case "image":
              case "link":
                (je("error", a), je("load", a));
                break;
              case "details":
                je("toggle", a);
                break;
              case "input":
                (zi(a, u), je("invalid", a));
                break;
              case "select":
                ((a._wrapperState = { wasMultiple: !!u.multiple }),
                  je("invalid", a));
                break;
              case "textarea":
                (Br(a, u), je("invalid", a));
            }
            (zr(n, u), (l = null));
            for (var p in u)
              if (u.hasOwnProperty(p)) {
                var m = u[p];
                p === "children"
                  ? typeof m == "string"
                    ? a.textContent !== m &&
                      (u.suppressHydrationWarning !== !0 &&
                        so(a.textContent, m, e),
                      (l = ["children", m]))
                    : typeof m == "number" &&
                      a.textContent !== "" + m &&
                      (u.suppressHydrationWarning !== !0 &&
                        so(a.textContent, m, e),
                      (l = ["children", "" + m]))
                  : f.hasOwnProperty(p) &&
                    m != null &&
                    p === "onScroll" &&
                    je("scroll", a);
              }
            switch (n) {
              case "input":
                (hn(a), jr(a, u, !0));
                break;
              case "textarea":
                (hn(a), C(a));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (a.onclick = lo);
            }
            ((a = l), (t.updateQueue = a), a !== null && (t.flags |= 4));
          } else {
            ((p = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = P(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = p.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof a.is == "string"
                    ? (e = p.createElement(n, { is: a.is }))
                    : ((e = p.createElement(n)),
                      n === "select" &&
                        ((p = e),
                        a.multiple
                          ? (p.multiple = !0)
                          : a.size && (p.size = a.size)))
                : (e = p.createElementNS(e, n)),
              (e[Qt] = t),
              (e[si] = a),
              jc(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((p = zn(n, a)), n)) {
                case "dialog":
                  (je("cancel", e), je("close", e), (l = a));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (je("load", e), (l = a));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < ii.length; l++) je(ii[l], e);
                  l = a;
                  break;
                case "source":
                  (je("error", e), (l = a));
                  break;
                case "img":
                case "image":
                case "link":
                  (je("error", e), je("load", e), (l = a));
                  break;
                case "details":
                  (je("toggle", e), (l = a));
                  break;
                case "input":
                  (zi(e, a), (l = jn(e, a)), je("invalid", e));
                  break;
                case "option":
                  l = a;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!a.multiple }),
                    (l = Z({}, a, { value: void 0 })),
                    je("invalid", e));
                  break;
                case "textarea":
                  (Br(e, a), (l = Mi(e, a)), je("invalid", e));
                  break;
                default:
                  l = a;
              }
              (zr(n, l), (m = l));
              for (u in m)
                if (m.hasOwnProperty(u)) {
                  var S = m[u];
                  u === "style"
                    ? Ct(e, S)
                    : u === "dangerouslySetInnerHTML"
                      ? ((S = S ? S.__html : void 0), S != null && Q(e, S))
                      : u === "children"
                        ? typeof S == "string"
                          ? (n !== "textarea" || S !== "") && ee(e, S)
                          : typeof S == "number" && ee(e, "" + S)
                        : u !== "suppressContentEditableWarning" &&
                          u !== "suppressHydrationWarning" &&
                          u !== "autoFocus" &&
                          (f.hasOwnProperty(u)
                            ? S != null && u === "onScroll" && je("scroll", e)
                            : S != null && z(e, u, S, p));
                }
              switch (n) {
                case "input":
                  (hn(e), jr(e, a, !1));
                  break;
                case "textarea":
                  (hn(e), C(e));
                  break;
                case "option":
                  a.value != null && e.setAttribute("value", "" + Fe(a.value));
                  break;
                case "select":
                  ((e.multiple = !!a.multiple),
                    (u = a.value),
                    u != null
                      ? mn(e, !!a.multiple, u, !1)
                      : a.defaultValue != null &&
                        mn(e, !!a.multiple, a.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = lo);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a = !!a.autoFocus;
                  break e;
                case "img":
                  a = !0;
                  break e;
                default:
                  a = !1;
              }
            }
            a && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (ct(t), null);
      case 6:
        if (e && t.stateNode != null) zc(e, t, e.memoizedProps, a);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(r(166));
          if (((n = Yn(di.current)), Yn(Xt.current), mo(t))) {
            if (
              ((a = t.stateNode),
              (n = t.memoizedProps),
              (a[Qt] = t),
              (u = a.nodeValue !== n) && ((e = Nt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  so(a.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    so(a.nodeValue, n, (e.mode & 1) !== 0);
              }
            u && (t.flags |= 4);
          } else
            ((a = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(a)),
              (a[Qt] = t),
              (t.stateNode = a));
        }
        return (ct(t), null);
      case 13:
        if (
          (Be(Ke),
          (a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ze && Lt !== null && t.mode & 1 && !(t.flags & 128))
            (Ku(), wr(), (t.flags |= 98560), (u = !1));
          else if (((u = mo(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(r(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(r(317));
              u[Qt] = t;
            } else
              (wr(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4));
            (ct(t), (u = !1));
          } else (Mt !== null && (zs(Mt), (Mt = null)), (u = !0));
          if (!u) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((a = a !== null),
            a !== (e !== null && e.memoizedState !== null) &&
              a &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || Ke.current & 1 ? Je === 0 && (Je = 3) : Ks())),
            t.updateQueue !== null && (t.flags |= 4),
            ct(t),
            null);
      case 4:
        return (
          _r(),
          Ls(e, t),
          e === null && oi(t.stateNode.containerInfo),
          ct(t),
          null
        );
      case 10:
        return (ns(t.type._context), ct(t), null);
      case 17:
        return (kt(t.type) && co(), ct(t), null);
      case 19:
        if ((Be(Ke), (u = t.memoizedState), u === null)) return (ct(t), null);
        if (((a = (t.flags & 128) !== 0), (p = u.rendering), p === null))
          if (a) yi(u, !1);
          else {
            if (Je !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((p = xo(e)), p !== null)) {
                  for (
                    t.flags |= 128,
                      yi(u, !1),
                      a = p.updateQueue,
                      a !== null && ((t.updateQueue = a), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      a = n,
                      n = t.child;
                    n !== null;
                  )
                    ((u = n),
                      (e = a),
                      (u.flags &= 14680066),
                      (p = u.alternate),
                      p === null
                        ? ((u.childLanes = 0),
                          (u.lanes = e),
                          (u.child = null),
                          (u.subtreeFlags = 0),
                          (u.memoizedProps = null),
                          (u.memoizedState = null),
                          (u.updateQueue = null),
                          (u.dependencies = null),
                          (u.stateNode = null))
                        : ((u.childLanes = p.childLanes),
                          (u.lanes = p.lanes),
                          (u.child = p.child),
                          (u.subtreeFlags = 0),
                          (u.deletions = null),
                          (u.memoizedProps = p.memoizedProps),
                          (u.memoizedState = p.memoizedState),
                          (u.updateQueue = p.updateQueue),
                          (u.type = p.type),
                          (e = p.dependencies),
                          (u.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling));
                  return (Ie(Ke, (Ke.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            u.tail !== null &&
              We() > Nr &&
              ((t.flags |= 128), (a = !0), yi(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = xo(p)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                yi(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !p.alternate &&
                  !ze)
              )
                return (ct(t), null);
            } else
              2 * We() - u.renderingStartTime > Nr &&
                n !== 1073741824 &&
                ((t.flags |= 128), (a = !0), yi(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((p.sibling = t.child), (t.child = p))
            : ((n = u.last),
              n !== null ? (n.sibling = p) : (t.child = p),
              (u.last = p));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = We()),
            (t.sibling = null),
            (n = Ke.current),
            Ie(Ke, a ? (n & 1) | 2 : n & 1),
            t)
          : (ct(t), null);
      case 22:
      case 23:
        return (
          Vs(),
          (a = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== a && (t.flags |= 8192),
          a && t.mode & 1
            ? Rt & 1073741824 &&
              (ct(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ct(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function ph(e, t) {
    switch ((Xa(t), t.tag)) {
      case 1:
        return (
          kt(t.type) && co(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          _r(),
          Be(wt),
          Be(lt),
          us(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (ss(t), null);
      case 13:
        if (
          (Be(Ke), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(r(340));
          wr();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (Be(Ke), null);
      case 4:
        return (_r(), null);
      case 10:
        return (ns(t.type._context), null);
      case 22:
      case 23:
        return (Vs(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Po = !1,
    ft = !1,
    hh = typeof WeakSet == "function" ? WeakSet : Set,
    re = null;
  function Cr(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (a) {
          Ue(e, t, a);
        }
      else n.current = null;
  }
  function Rs(e, t, n) {
    try {
      n();
    } catch (a) {
      Ue(e, t, a);
    }
  }
  var Mc = !1;
  function gh(e, t) {
    if (((Va = Xi), (e = vu()), Da(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var l = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              (n.nodeType, u.nodeType);
            } catch {
              n = null;
              break e;
            }
            var p = 0,
              m = -1,
              S = -1,
              F = 0,
              K = 0,
              U = e,
              M = null;
            t: for (;;) {
              for (
                var ne;
                U !== n || (l !== 0 && U.nodeType !== 3) || (m = p + l),
                  U !== u || (a !== 0 && U.nodeType !== 3) || (S = p + a),
                  U.nodeType === 3 && (p += U.nodeValue.length),
                  (ne = U.firstChild) !== null;
              )
                ((M = U), (U = ne));
              for (;;) {
                if (U === e) break t;
                if (
                  (M === n && ++F === l && (m = p),
                  M === u && ++K === a && (S = p),
                  (ne = U.nextSibling) !== null)
                )
                  break;
                ((U = M), (M = U.parentNode));
              }
              U = ne;
            }
            n = m === -1 || S === -1 ? null : { start: m, end: S };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Ka = { focusedElem: e, selectionRange: n }, Xi = !1, re = t;
      re !== null;
    )
      if (
        ((t = re), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (re = e));
      else
        for (; re !== null; ) {
          t = re;
          try {
            var oe = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (oe !== null) {
                    var ue = oe.memoizedProps,
                      Ye = oe.memoizedState,
                      T = t.stateNode,
                      _ = T.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? ue : Vt(t.type, ue),
                        Ye,
                      );
                    T.__reactInternalSnapshotBeforeUpdate = _;
                  }
                  break;
                case 3:
                  var N = t.stateNode.containerInfo;
                  N.nodeType === 1
                    ? (N.textContent = "")
                    : N.nodeType === 9 &&
                      N.documentElement &&
                      N.removeChild(N.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(r(163));
              }
          } catch (Y) {
            Ue(t, t.return, Y);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (re = e));
            break;
          }
          re = t.return;
        }
    return ((oe = Mc), (Mc = !1), oe);
  }
  function vi(e, t, n) {
    var a = t.updateQueue;
    if (((a = a !== null ? a.lastEffect : null), a !== null)) {
      var l = (a = a.next);
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          ((l.destroy = void 0), u !== void 0 && Rs(t, n, u));
        }
        l = l.next;
      } while (l !== a);
    }
  }
  function Fo(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var a = n.create;
          n.destroy = a();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Os(e) {
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
  function Vc(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Vc(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Qt],
          delete t[si],
          delete t[Wa],
          delete t[qp],
          delete t[Jp])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Kc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function $c(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Kc(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ps(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = lo)));
    else if (a !== 4 && ((e = e.child), e !== null))
      for (Ps(e, t, n), e = e.sibling; e !== null; )
        (Ps(e, t, n), (e = e.sibling));
  }
  function Fs(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (a !== 4 && ((e = e.child), e !== null))
      for (Fs(e, t, n), e = e.sibling; e !== null; )
        (Fs(e, t, n), (e = e.sibling));
  }
  var it = null,
    Kt = !1;
  function On(e, t, n) {
    for (n = n.child; n !== null; ) (Uc(e, t, n), (n = n.sibling));
  }
  function Uc(e, t, n) {
    if (Gt && typeof Gt.onCommitFiberUnmount == "function")
      try {
        Gt.onCommitFiberUnmount(Ui, n);
      } catch {}
    switch (n.tag) {
      case 5:
        ft || Cr(n, t);
      case 6:
        var a = it,
          l = Kt;
        ((it = null),
          On(e, t, n),
          (it = a),
          (Kt = l),
          it !== null &&
            (Kt
              ? ((e = it),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : it.removeChild(n.stateNode)));
        break;
      case 18:
        it !== null &&
          (Kt
            ? ((e = it),
              (n = n.stateNode),
              e.nodeType === 8
                ? Ha(e.parentNode, n)
                : e.nodeType === 1 && Ha(e, n),
              Xr(e))
            : Ha(it, n.stateNode));
        break;
      case 4:
        ((a = it),
          (l = Kt),
          (it = n.stateNode.containerInfo),
          (Kt = !0),
          On(e, t, n),
          (it = a),
          (Kt = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !ft &&
          ((a = n.updateQueue), a !== null && ((a = a.lastEffect), a !== null))
        ) {
          l = a = a.next;
          do {
            var u = l,
              p = u.destroy;
            ((u = u.tag),
              p !== void 0 && (u & 2 || u & 4) && Rs(n, t, p),
              (l = l.next));
          } while (l !== a);
        }
        On(e, t, n);
        break;
      case 1:
        if (
          !ft &&
          (Cr(n, t),
          (a = n.stateNode),
          typeof a.componentWillUnmount == "function")
        )
          try {
            ((a.props = n.memoizedProps),
              (a.state = n.memoizedState),
              a.componentWillUnmount());
          } catch (m) {
            Ue(n, t, m);
          }
        On(e, t, n);
        break;
      case 21:
        On(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((ft = (a = ft) || n.memoizedState !== null), On(e, t, n), (ft = a))
          : On(e, t, n);
        break;
      default:
        On(e, t, n);
    }
  }
  function Hc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new hh()),
        t.forEach(function (a) {
          var l = Eh.bind(null, e, a);
          n.has(a) || (n.add(a), a.then(l, l));
        }));
    }
  }
  function $t(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var l = n[a];
        try {
          var u = e,
            p = t,
            m = p;
          e: for (; m !== null; ) {
            switch (m.tag) {
              case 5:
                ((it = m.stateNode), (Kt = !1));
                break e;
              case 3:
                ((it = m.stateNode.containerInfo), (Kt = !0));
                break e;
              case 4:
                ((it = m.stateNode.containerInfo), (Kt = !0));
                break e;
            }
            m = m.return;
          }
          if (it === null) throw Error(r(160));
          (Uc(u, p, l), (it = null), (Kt = !1));
          var S = l.alternate;
          (S !== null && (S.return = null), (l.return = null));
        } catch (F) {
          Ue(l, t, F);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) (Wc(t, e), (t = t.sibling));
  }
  function Wc(e, t) {
    var n = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (($t(t, e), Jt(e), a & 4)) {
          try {
            (vi(3, e, e.return), Fo(3, e));
          } catch (ue) {
            Ue(e, e.return, ue);
          }
          try {
            vi(5, e, e.return);
          } catch (ue) {
            Ue(e, e.return, ue);
          }
        }
        break;
      case 1:
        ($t(t, e), Jt(e), a & 512 && n !== null && Cr(n, n.return));
        break;
      case 5:
        if (
          ($t(t, e),
          Jt(e),
          a & 512 && n !== null && Cr(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            ee(l, "");
          } catch (ue) {
            Ue(e, e.return, ue);
          }
        }
        if (a & 4 && ((l = e.stateNode), l != null)) {
          var u = e.memoizedProps,
            p = n !== null ? n.memoizedProps : u,
            m = e.type,
            S = e.updateQueue;
          if (((e.updateQueue = null), S !== null))
            try {
              (m === "input" &&
                u.type === "radio" &&
                u.name != null &&
                br(l, u),
                zn(m, p));
              var F = zn(m, u);
              for (p = 0; p < S.length; p += 2) {
                var K = S[p],
                  U = S[p + 1];
                K === "style"
                  ? Ct(l, U)
                  : K === "dangerouslySetInnerHTML"
                    ? Q(l, U)
                    : K === "children"
                      ? ee(l, U)
                      : z(l, K, U, F);
              }
              switch (m) {
                case "input":
                  Ir(l, u);
                  break;
                case "textarea":
                  y(l, u);
                  break;
                case "select":
                  var M = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var ne = u.value;
                  ne != null
                    ? mn(l, !!u.multiple, ne, !1)
                    : M !== !!u.multiple &&
                      (u.defaultValue != null
                        ? mn(l, !!u.multiple, u.defaultValue, !0)
                        : mn(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[si] = u;
            } catch (ue) {
              Ue(e, e.return, ue);
            }
        }
        break;
      case 6:
        if (($t(t, e), Jt(e), a & 4)) {
          if (e.stateNode === null) throw Error(r(162));
          ((l = e.stateNode), (u = e.memoizedProps));
          try {
            l.nodeValue = u;
          } catch (ue) {
            Ue(e, e.return, ue);
          }
        }
        break;
      case 3:
        if (
          ($t(t, e), Jt(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Xr(t.containerInfo);
          } catch (ue) {
            Ue(e, e.return, ue);
          }
        break;
      case 4:
        ($t(t, e), Jt(e));
        break;
      case 13:
        ($t(t, e),
          Jt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((u = l.memoizedState !== null),
            (l.stateNode.isHidden = u),
            !u ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (bs = We())),
          a & 4 && Hc(e));
        break;
      case 22:
        if (
          ((K = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((ft = (F = ft) || K), $t(t, e), (ft = F)) : $t(t, e),
          Jt(e),
          a & 8192)
        ) {
          if (
            ((F = e.memoizedState !== null),
            (e.stateNode.isHidden = F) && !K && e.mode & 1)
          )
            for (re = e, K = e.child; K !== null; ) {
              for (U = re = K; re !== null; ) {
                switch (((M = re), (ne = M.child), M.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    vi(4, M, M.return);
                    break;
                  case 1:
                    Cr(M, M.return);
                    var oe = M.stateNode;
                    if (typeof oe.componentWillUnmount == "function") {
                      ((a = M), (n = M.return));
                      try {
                        ((t = a),
                          (oe.props = t.memoizedProps),
                          (oe.state = t.memoizedState),
                          oe.componentWillUnmount());
                      } catch (ue) {
                        Ue(a, n, ue);
                      }
                    }
                    break;
                  case 5:
                    Cr(M, M.return);
                    break;
                  case 22:
                    if (M.memoizedState !== null) {
                      Qc(U);
                      continue;
                    }
                }
                ne !== null ? ((ne.return = M), (re = ne)) : Qc(U);
              }
              K = K.sibling;
            }
          e: for (K = null, U = e; ; ) {
            if (U.tag === 5) {
              if (K === null) {
                K = U;
                try {
                  ((l = U.stateNode),
                    F
                      ? ((u = l.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((m = U.stateNode),
                        (S = U.memoizedProps.style),
                        (p =
                          S != null && S.hasOwnProperty("display")
                            ? S.display
                            : null),
                        (m.style.display = et("display", p))));
                } catch (ue) {
                  Ue(e, e.return, ue);
                }
              }
            } else if (U.tag === 6) {
              if (K === null)
                try {
                  U.stateNode.nodeValue = F ? "" : U.memoizedProps;
                } catch (ue) {
                  Ue(e, e.return, ue);
                }
            } else if (
              ((U.tag !== 22 && U.tag !== 23) ||
                U.memoizedState === null ||
                U === e) &&
              U.child !== null
            ) {
              ((U.child.return = U), (U = U.child));
              continue;
            }
            if (U === e) break e;
            for (; U.sibling === null; ) {
              if (U.return === null || U.return === e) break e;
              (K === U && (K = null), (U = U.return));
            }
            (K === U && (K = null),
              (U.sibling.return = U.return),
              (U = U.sibling));
          }
        }
        break;
      case 19:
        ($t(t, e), Jt(e), a & 4 && Hc(e));
        break;
      case 21:
        break;
      default:
        ($t(t, e), Jt(e));
    }
  }
  function Jt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Kc(n)) {
              var a = n;
              break e;
            }
            n = n.return;
          }
          throw Error(r(160));
        }
        switch (a.tag) {
          case 5:
            var l = a.stateNode;
            a.flags & 32 && (ee(l, ""), (a.flags &= -33));
            var u = $c(e);
            Fs(e, u, l);
            break;
          case 3:
          case 4:
            var p = a.stateNode.containerInfo,
              m = $c(e);
            Ps(e, m, p);
            break;
          default:
            throw Error(r(161));
        }
      } catch (S) {
        Ue(e, e.return, S);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function mh(e, t, n) {
    ((re = e), Yc(e));
  }
  function Yc(e, t, n) {
    for (var a = (e.mode & 1) !== 0; re !== null; ) {
      var l = re,
        u = l.child;
      if (l.tag === 22 && a) {
        var p = l.memoizedState !== null || Po;
        if (!p) {
          var m = l.alternate,
            S = (m !== null && m.memoizedState !== null) || ft;
          m = Po;
          var F = ft;
          if (((Po = p), (ft = S) && !F))
            for (re = l; re !== null; )
              ((p = re),
                (S = p.child),
                p.tag === 22 && p.memoizedState !== null
                  ? Xc(l)
                  : S !== null
                    ? ((S.return = p), (re = S))
                    : Xc(l));
          for (; u !== null; ) ((re = u), Yc(u), (u = u.sibling));
          ((re = l), (Po = m), (ft = F));
        }
        Gc(e);
      } else
        l.subtreeFlags & 8772 && u !== null
          ? ((u.return = l), (re = u))
          : Gc(e);
    }
  }
  function Gc(e) {
    for (; re !== null; ) {
      var t = re;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                ft || Fo(5, t);
                break;
              case 1:
                var a = t.stateNode;
                if (t.flags & 4 && !ft)
                  if (n === null) a.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : Vt(t.type, n.memoizedProps);
                    a.componentDidUpdate(
                      l,
                      n.memoizedState,
                      a.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var u = t.updateQueue;
                u !== null && Qu(t, u, a);
                break;
              case 3:
                var p = t.updateQueue;
                if (p !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Qu(t, p, n);
                }
                break;
              case 5:
                var m = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = m;
                  var S = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      S.autoFocus && n.focus();
                      break;
                    case "img":
                      S.src && (n.src = S.src);
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
                  var F = t.alternate;
                  if (F !== null) {
                    var K = F.memoizedState;
                    if (K !== null) {
                      var U = K.dehydrated;
                      U !== null && Xr(U);
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
                throw Error(r(163));
            }
          ft || (t.flags & 512 && Os(t));
        } catch (M) {
          Ue(t, t.return, M);
        }
      }
      if (t === e) {
        re = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (re = n));
        break;
      }
      re = t.return;
    }
  }
  function Qc(e) {
    for (; re !== null; ) {
      var t = re;
      if (t === e) {
        re = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (re = n));
        break;
      }
      re = t.return;
    }
  }
  function Xc(e) {
    for (; re !== null; ) {
      var t = re;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Fo(4, t);
            } catch (S) {
              Ue(t, n, S);
            }
            break;
          case 1:
            var a = t.stateNode;
            if (typeof a.componentDidMount == "function") {
              var l = t.return;
              try {
                a.componentDidMount();
              } catch (S) {
                Ue(t, l, S);
              }
            }
            var u = t.return;
            try {
              Os(t);
            } catch (S) {
              Ue(t, u, S);
            }
            break;
          case 5:
            var p = t.return;
            try {
              Os(t);
            } catch (S) {
              Ue(t, p, S);
            }
        }
      } catch (S) {
        Ue(t, t.return, S);
      }
      if (t === e) {
        re = null;
        break;
      }
      var m = t.sibling;
      if (m !== null) {
        ((m.return = t.return), (re = m));
        break;
      }
      re = t.return;
    }
  }
  var yh = Math.ceil,
    Do = j.ReactCurrentDispatcher,
    Ds = j.ReactCurrentOwner,
    At = j.ReactCurrentBatchConfig,
    Oe = 0,
    nt = null,
    Ge = null,
    ot = 0,
    Rt = 0,
    Tr = Cn(0),
    Je = 0,
    wi = null,
    Qn = 0,
    Ao = 0,
    As = 0,
    ki = null,
    xt = null,
    bs = 0,
    Nr = 1 / 0,
    dn = null,
    bo = !1,
    Is = null,
    Pn = null,
    Io = !1,
    Fn = null,
    jo = 0,
    Si = 0,
    js = null,
    Bo = -1,
    zo = 0;
  function mt() {
    return Oe & 6 ? We() : Bo !== -1 ? Bo : (Bo = We());
  }
  function Dn(e) {
    return e.mode & 1
      ? Oe & 2 && ot !== 0
        ? ot & -ot
        : eh.transition !== null
          ? (zo === 0 && (zo = $l()), zo)
          : ((e = De),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : Jl(e.type))),
            e)
      : 1;
  }
  function Ut(e, t, n, a) {
    if (50 < Si) throw ((Si = 0), (js = null), Error(r(185)));
    (Hr(e, n, a),
      (!(Oe & 2) || e !== nt) &&
        (e === nt && (!(Oe & 2) && (Ao |= n), Je === 4 && An(e, ot)),
        _t(e, a),
        n === 1 &&
          Oe === 0 &&
          !(t.mode & 1) &&
          ((Nr = We() + 500), po && Nn())));
  }
  function _t(e, t) {
    var n = e.callbackNode;
    ep(e, t);
    var a = Yi(e, e === nt ? ot : 0);
    if (a === 0)
      (n !== null && Ml(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = a & -a), e.callbackPriority !== t)) {
      if ((n != null && Ml(n), t === 1))
        (e.tag === 0 ? Zp(Jc.bind(null, e)) : ju(Jc.bind(null, e)),
          Qp(function () {
            !(Oe & 6) && Nn();
          }),
          (n = null));
      else {
        switch (Ul(a)) {
          case 1:
            n = ma;
            break;
          case 4:
            n = Vl;
            break;
          case 16:
            n = $i;
            break;
          case 536870912:
            n = Kl;
            break;
          default:
            n = $i;
        }
        n = sf(n, qc.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function qc(e, t) {
    if (((Bo = -1), (zo = 0), Oe & 6)) throw Error(r(327));
    var n = e.callbackNode;
    if (Lr() && e.callbackNode !== n) return null;
    var a = Yi(e, e === nt ? ot : 0);
    if (a === 0) return null;
    if (a & 30 || a & e.expiredLanes || t) t = Mo(e, a);
    else {
      t = a;
      var l = Oe;
      Oe |= 2;
      var u = ef();
      (nt !== e || ot !== t) && ((dn = null), (Nr = We() + 500), qn(e, t));
      do
        try {
          kh();
          break;
        } catch (m) {
          Zc(e, m);
        }
      while (!0);
      (ts(),
        (Do.current = u),
        (Oe = l),
        Ge !== null ? (t = 0) : ((nt = null), (ot = 0), (t = Je)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = ya(e)), l !== 0 && ((a = l), (t = Bs(e, l)))),
        t === 1)
      )
        throw ((n = wi), qn(e, 0), An(e, a), _t(e, We()), n);
      if (t === 6) An(e, a);
      else {
        if (
          ((l = e.current.alternate),
          !(a & 30) &&
            !vh(l) &&
            ((t = Mo(e, a)),
            t === 2 && ((u = ya(e)), u !== 0 && ((a = u), (t = Bs(e, u)))),
            t === 1))
        )
          throw ((n = wi), qn(e, 0), An(e, a), _t(e, We()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = a), t)) {
          case 0:
          case 1:
            throw Error(r(345));
          case 2:
            Jn(e, xt, dn);
            break;
          case 3:
            if (
              (An(e, a),
              (a & 130023424) === a && ((t = bs + 500 - We()), 10 < t))
            ) {
              if (Yi(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & a) !== a)) {
                (mt(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = Ua(Jn.bind(null, e, xt, dn), t);
              break;
            }
            Jn(e, xt, dn);
            break;
          case 4:
            if ((An(e, a), (a & 4194240) === a)) break;
            for (t = e.eventTimes, l = -1; 0 < a; ) {
              var p = 31 - Bt(a);
              ((u = 1 << p), (p = t[p]), p > l && (l = p), (a &= ~u));
            }
            if (
              ((a = l),
              (a = We() - a),
              (a =
                (120 > a
                  ? 120
                  : 480 > a
                    ? 480
                    : 1080 > a
                      ? 1080
                      : 1920 > a
                        ? 1920
                        : 3e3 > a
                          ? 3e3
                          : 4320 > a
                            ? 4320
                            : 1960 * yh(a / 1960)) - a),
              10 < a)
            ) {
              e.timeoutHandle = Ua(Jn.bind(null, e, xt, dn), a);
              break;
            }
            Jn(e, xt, dn);
            break;
          case 5:
            Jn(e, xt, dn);
            break;
          default:
            throw Error(r(329));
        }
      }
    }
    return (_t(e, We()), e.callbackNode === n ? qc.bind(null, e) : null);
  }
  function Bs(e, t) {
    var n = ki;
    return (
      e.current.memoizedState.isDehydrated && (qn(e, t).flags |= 256),
      (e = Mo(e, t)),
      e !== 2 && ((t = xt), (xt = n), t !== null && zs(t)),
      e
    );
  }
  function zs(e) {
    xt === null ? (xt = e) : xt.push.apply(xt, e);
  }
  function vh(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var a = 0; a < n.length; a++) {
            var l = n[a],
              u = l.getSnapshot;
            l = l.value;
            try {
              if (!zt(u(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function An(e, t) {
    for (
      t &= ~As,
        t &= ~Ao,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - Bt(t),
        a = 1 << n;
      ((e[n] = -1), (t &= ~a));
    }
  }
  function Jc(e) {
    if (Oe & 6) throw Error(r(327));
    Lr();
    var t = Yi(e, 0);
    if (!(t & 1)) return (_t(e, We()), null);
    var n = Mo(e, t);
    if (e.tag !== 0 && n === 2) {
      var a = ya(e);
      a !== 0 && ((t = a), (n = Bs(e, a)));
    }
    if (n === 1) throw ((n = wi), qn(e, 0), An(e, t), _t(e, We()), n);
    if (n === 6) throw Error(r(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Jn(e, xt, dn),
      _t(e, We()),
      null
    );
  }
  function Ms(e, t) {
    var n = Oe;
    Oe |= 1;
    try {
      return e(t);
    } finally {
      ((Oe = n), Oe === 0 && ((Nr = We() + 500), po && Nn()));
    }
  }
  function Xn(e) {
    Fn !== null && Fn.tag === 0 && !(Oe & 6) && Lr();
    var t = Oe;
    Oe |= 1;
    var n = At.transition,
      a = De;
    try {
      if (((At.transition = null), (De = 1), e)) return e();
    } finally {
      ((De = a), (At.transition = n), (Oe = t), !(Oe & 6) && Nn());
    }
  }
  function Vs() {
    ((Rt = Tr.current), Be(Tr));
  }
  function qn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Gp(n)), Ge !== null))
      for (n = Ge.return; n !== null; ) {
        var a = n;
        switch ((Xa(a), a.tag)) {
          case 1:
            ((a = a.type.childContextTypes), a != null && co());
            break;
          case 3:
            (_r(), Be(wt), Be(lt), us());
            break;
          case 5:
            ss(a);
            break;
          case 4:
            _r();
            break;
          case 13:
            Be(Ke);
            break;
          case 19:
            Be(Ke);
            break;
          case 10:
            ns(a.type._context);
            break;
          case 22:
          case 23:
            Vs();
        }
        n = n.return;
      }
    if (
      ((nt = e),
      (Ge = e = bn(e.current, null)),
      (ot = Rt = t),
      (Je = 0),
      (wi = null),
      (As = Ao = Qn = 0),
      (xt = ki = null),
      Wn !== null)
    ) {
      for (t = 0; t < Wn.length; t++)
        if (((n = Wn[t]), (a = n.interleaved), a !== null)) {
          n.interleaved = null;
          var l = a.next,
            u = n.pending;
          if (u !== null) {
            var p = u.next;
            ((u.next = l), (a.next = p));
          }
          n.pending = a;
        }
      Wn = null;
    }
    return e;
  }
  function Zc(e, t) {
    do {
      var n = Ge;
      try {
        if ((ts(), (_o.current = No), Eo)) {
          for (var a = $e.memoizedState; a !== null; ) {
            var l = a.queue;
            (l !== null && (l.pending = null), (a = a.next));
          }
          Eo = !1;
        }
        if (
          ((Gn = 0),
          (tt = qe = $e = null),
          (pi = !1),
          (hi = 0),
          (Ds.current = null),
          n === null || n.return === null)
        ) {
          ((Je = 1), (wi = t), (Ge = null));
          break;
        }
        e: {
          var u = e,
            p = n.return,
            m = n,
            S = t;
          if (
            ((t = ot),
            (m.flags |= 32768),
            S !== null && typeof S == "object" && typeof S.then == "function")
          ) {
            var F = S,
              K = m,
              U = K.tag;
            if (!(K.mode & 1) && (U === 0 || U === 11 || U === 15)) {
              var M = K.alternate;
              M
                ? ((K.updateQueue = M.updateQueue),
                  (K.memoizedState = M.memoizedState),
                  (K.lanes = M.lanes))
                : ((K.updateQueue = null), (K.memoizedState = null));
            }
            var ne = Ec(p);
            if (ne !== null) {
              ((ne.flags &= -257),
                Cc(ne, p, m, u, t),
                ne.mode & 1 && _c(u, F, t),
                (t = ne),
                (S = F));
              var oe = t.updateQueue;
              if (oe === null) {
                var ue = new Set();
                (ue.add(S), (t.updateQueue = ue));
              } else oe.add(S);
              break e;
            } else {
              if (!(t & 1)) {
                (_c(u, F, t), Ks());
                break e;
              }
              S = Error(r(426));
            }
          } else if (ze && m.mode & 1) {
            var Ye = Ec(p);
            if (Ye !== null) {
              (!(Ye.flags & 65536) && (Ye.flags |= 256),
                Cc(Ye, p, m, u, t),
                Za(Er(S, m)));
              break e;
            }
          }
          ((u = S = Er(S, m)),
            Je !== 4 && (Je = 2),
            ki === null ? (ki = [u]) : ki.push(u),
            (u = p));
          do {
            switch (u.tag) {
              case 3:
                ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                var T = Sc(u, S, t);
                Gu(u, T);
                break e;
              case 1:
                m = S;
                var _ = u.type,
                  N = u.stateNode;
                if (
                  !(u.flags & 128) &&
                  (typeof _.getDerivedStateFromError == "function" ||
                    (N !== null &&
                      typeof N.componentDidCatch == "function" &&
                      (Pn === null || !Pn.has(N))))
                ) {
                  ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                  var Y = xc(u, m, t);
                  Gu(u, Y);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        nf(n);
      } catch (fe) {
        ((t = fe), Ge === n && n !== null && (Ge = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function ef() {
    var e = Do.current;
    return ((Do.current = No), e === null ? No : e);
  }
  function Ks() {
    ((Je === 0 || Je === 3 || Je === 2) && (Je = 4),
      nt === null || (!(Qn & 268435455) && !(Ao & 268435455)) || An(nt, ot));
  }
  function Mo(e, t) {
    var n = Oe;
    Oe |= 2;
    var a = ef();
    (nt !== e || ot !== t) && ((dn = null), qn(e, t));
    do
      try {
        wh();
        break;
      } catch (l) {
        Zc(e, l);
      }
    while (!0);
    if ((ts(), (Oe = n), (Do.current = a), Ge !== null)) throw Error(r(261));
    return ((nt = null), (ot = 0), Je);
  }
  function wh() {
    for (; Ge !== null; ) tf(Ge);
  }
  function kh() {
    for (; Ge !== null && !Hd(); ) tf(Ge);
  }
  function tf(e) {
    var t = af(e.alternate, e, Rt);
    ((e.memoizedProps = e.pendingProps),
      t === null ? nf(e) : (Ge = t),
      (Ds.current = null));
  }
  function nf(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = ph(n, t)), n !== null)) {
          ((n.flags &= 32767), (Ge = n));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Je = 6), (Ge = null));
          return;
        }
      } else if (((n = dh(n, t, Rt)), n !== null)) {
        Ge = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ge = t;
        return;
      }
      Ge = t = e;
    } while (t !== null);
    Je === 0 && (Je = 5);
  }
  function Jn(e, t, n) {
    var a = De,
      l = At.transition;
    try {
      ((At.transition = null), (De = 1), Sh(e, t, n, a));
    } finally {
      ((At.transition = l), (De = a));
    }
    return null;
  }
  function Sh(e, t, n, a) {
    do Lr();
    while (Fn !== null);
    if (Oe & 6) throw Error(r(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(r(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var u = n.lanes | n.childLanes;
    if (
      (tp(e, u),
      e === nt && ((Ge = nt = null), (ot = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        Io ||
        ((Io = !0),
        sf($i, function () {
          return (Lr(), null);
        })),
      (u = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || u)
    ) {
      ((u = At.transition), (At.transition = null));
      var p = De;
      De = 1;
      var m = Oe;
      ((Oe |= 4),
        (Ds.current = null),
        gh(e, n),
        Wc(n, e),
        Vp(Ka),
        (Xi = !!Va),
        (Ka = Va = null),
        (e.current = n),
        mh(n),
        Wd(),
        (Oe = m),
        (De = p),
        (At.transition = u));
    } else e.current = n;
    if (
      (Io && ((Io = !1), (Fn = e), (jo = l)),
      (u = e.pendingLanes),
      u === 0 && (Pn = null),
      Qd(n.stateNode),
      _t(e, We()),
      t !== null)
    )
      for (a = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), a(l.value, { componentStack: l.stack, digest: l.digest }));
    if (bo) throw ((bo = !1), (e = Is), (Is = null), e);
    return (
      jo & 1 && e.tag !== 0 && Lr(),
      (u = e.pendingLanes),
      u & 1 ? (e === js ? Si++ : ((Si = 0), (js = e))) : (Si = 0),
      Nn(),
      null
    );
  }
  function Lr() {
    if (Fn !== null) {
      var e = Ul(jo),
        t = At.transition,
        n = De;
      try {
        if (((At.transition = null), (De = 16 > e ? 16 : e), Fn === null))
          var a = !1;
        else {
          if (((e = Fn), (Fn = null), (jo = 0), Oe & 6)) throw Error(r(331));
          var l = Oe;
          for (Oe |= 4, re = e.current; re !== null; ) {
            var u = re,
              p = u.child;
            if (re.flags & 16) {
              var m = u.deletions;
              if (m !== null) {
                for (var S = 0; S < m.length; S++) {
                  var F = m[S];
                  for (re = F; re !== null; ) {
                    var K = re;
                    switch (K.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vi(8, K, u);
                    }
                    var U = K.child;
                    if (U !== null) ((U.return = K), (re = U));
                    else
                      for (; re !== null; ) {
                        K = re;
                        var M = K.sibling,
                          ne = K.return;
                        if ((Vc(K), K === F)) {
                          re = null;
                          break;
                        }
                        if (M !== null) {
                          ((M.return = ne), (re = M));
                          break;
                        }
                        re = ne;
                      }
                  }
                }
                var oe = u.alternate;
                if (oe !== null) {
                  var ue = oe.child;
                  if (ue !== null) {
                    oe.child = null;
                    do {
                      var Ye = ue.sibling;
                      ((ue.sibling = null), (ue = Ye));
                    } while (ue !== null);
                  }
                }
                re = u;
              }
            }
            if (u.subtreeFlags & 2064 && p !== null) ((p.return = u), (re = p));
            else
              e: for (; re !== null; ) {
                if (((u = re), u.flags & 2048))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vi(9, u, u.return);
                  }
                var T = u.sibling;
                if (T !== null) {
                  ((T.return = u.return), (re = T));
                  break e;
                }
                re = u.return;
              }
          }
          var _ = e.current;
          for (re = _; re !== null; ) {
            p = re;
            var N = p.child;
            if (p.subtreeFlags & 2064 && N !== null) ((N.return = p), (re = N));
            else
              e: for (p = _; re !== null; ) {
                if (((m = re), m.flags & 2048))
                  try {
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Fo(9, m);
                    }
                  } catch (fe) {
                    Ue(m, m.return, fe);
                  }
                if (m === p) {
                  re = null;
                  break e;
                }
                var Y = m.sibling;
                if (Y !== null) {
                  ((Y.return = m.return), (re = Y));
                  break e;
                }
                re = m.return;
              }
          }
          if (
            ((Oe = l),
            Nn(),
            Gt && typeof Gt.onPostCommitFiberRoot == "function")
          )
            try {
              Gt.onPostCommitFiberRoot(Ui, e);
            } catch {}
          a = !0;
        }
        return a;
      } finally {
        ((De = n), (At.transition = t));
      }
    }
    return !1;
  }
  function rf(e, t, n) {
    ((t = Er(n, t)),
      (t = Sc(e, t, 1)),
      (e = Rn(e, t, 1)),
      (t = mt()),
      e !== null && (Hr(e, 1, t), _t(e, t)));
  }
  function Ue(e, t, n) {
    if (e.tag === 3) rf(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          rf(t, e, n);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Pn === null || !Pn.has(a)))
          ) {
            ((e = Er(n, e)),
              (e = xc(t, e, 1)),
              (t = Rn(t, e, 1)),
              (e = mt()),
              t !== null && (Hr(t, 1, e), _t(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function xh(e, t, n) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (t = mt()),
      (e.pingedLanes |= e.suspendedLanes & n),
      nt === e &&
        (ot & n) === n &&
        (Je === 4 || (Je === 3 && (ot & 130023424) === ot && 500 > We() - bs)
          ? qn(e, 0)
          : (As |= n)),
      _t(e, t));
  }
  function of(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Wi), (Wi <<= 1), !(Wi & 130023424) && (Wi = 4194304))
        : (t = 1));
    var n = mt();
    ((e = un(e, t)), e !== null && (Hr(e, t, n), _t(e, n)));
  }
  function _h(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), of(e, n));
  }
  function Eh(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      default:
        throw Error(r(314));
    }
    (a !== null && a.delete(t), of(e, n));
  }
  var af;
  af = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || wt.current) St = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return ((St = !1), fh(e, t, n));
        St = !!(e.flags & 131072);
      }
    else ((St = !1), ze && t.flags & 1048576 && Bu(t, go, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var a = t.type;
        (Oo(e, t), (e = t.pendingProps));
        var l = mr(t, lt.current);
        (xr(t, n), (l = ds(null, t, a, e, l, n)));
        var u = ps();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              kt(a) ? ((u = !0), fo(t)) : (u = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              os(t),
              (l.updater = Lo),
              (t.stateNode = l),
              (l._reactInternals = t),
              ws(t, a, e, n),
              (t = _s(null, t, a, !0, u, n)))
            : ((t.tag = 0), ze && u && Qa(t), gt(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        a = t.elementType;
        e: {
          switch (
            (Oo(e, t),
            (e = t.pendingProps),
            (l = a._init),
            (a = l(a._payload)),
            (t.type = a),
            (l = t.tag = Th(a)),
            (e = Vt(a, e)),
            l)
          ) {
            case 0:
              t = xs(null, t, a, e, n);
              break e;
            case 1:
              t = Pc(null, t, a, e, n);
              break e;
            case 11:
              t = Tc(null, t, a, e, n);
              break e;
            case 14:
              t = Nc(null, t, a, Vt(a.type, e), n);
              break e;
          }
          throw Error(r(306, a, ""));
        }
        return t;
      case 0:
        return (
          (a = t.type),
          (l = t.pendingProps),
          (l = t.elementType === a ? l : Vt(a, l)),
          xs(e, t, a, l, n)
        );
      case 1:
        return (
          (a = t.type),
          (l = t.pendingProps),
          (l = t.elementType === a ? l : Vt(a, l)),
          Pc(e, t, a, l, n)
        );
      case 3:
        e: {
          if ((Fc(t), e === null)) throw Error(r(387));
          ((a = t.pendingProps),
            (u = t.memoizedState),
            (l = u.element),
            Yu(e, t),
            So(t, a, null, n));
          var p = t.memoizedState;
          if (((a = p.element), u.isDehydrated))
            if (
              ((u = {
                element: a,
                isDehydrated: !1,
                cache: p.cache,
                pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
                transitions: p.transitions,
              }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              ((l = Er(Error(r(423)), t)), (t = Dc(e, t, a, n, l)));
              break e;
            } else if (a !== l) {
              ((l = Er(Error(r(424)), t)), (t = Dc(e, t, a, n, l)));
              break e;
            } else
              for (
                Lt = En(t.stateNode.containerInfo.firstChild),
                  Nt = t,
                  ze = !0,
                  Mt = null,
                  n = Hu(t, null, a, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((wr(), a === l)) {
              t = fn(e, t, n);
              break e;
            }
            gt(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Xu(t),
          e === null && Ja(t),
          (a = t.type),
          (l = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (p = l.children),
          $a(a, l) ? (p = null) : u !== null && $a(a, u) && (t.flags |= 32),
          Oc(e, t),
          gt(e, t, p, n),
          t.child
        );
      case 6:
        return (e === null && Ja(t), null);
      case 13:
        return Ac(e, t, n);
      case 4:
        return (
          as(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = kr(t, null, a, n)) : gt(e, t, a, n),
          t.child
        );
      case 11:
        return (
          (a = t.type),
          (l = t.pendingProps),
          (l = t.elementType === a ? l : Vt(a, l)),
          Tc(e, t, a, l, n)
        );
      case 7:
        return (gt(e, t, t.pendingProps, n), t.child);
      case 8:
        return (gt(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (gt(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((a = t.type._context),
            (l = t.pendingProps),
            (u = t.memoizedProps),
            (p = l.value),
            Ie(vo, a._currentValue),
            (a._currentValue = p),
            u !== null)
          )
            if (zt(u.value, p)) {
              if (u.children === l.children && !wt.current) {
                t = fn(e, t, n);
                break e;
              }
            } else
              for (u = t.child, u !== null && (u.return = t); u !== null; ) {
                var m = u.dependencies;
                if (m !== null) {
                  p = u.child;
                  for (var S = m.firstContext; S !== null; ) {
                    if (S.context === a) {
                      if (u.tag === 1) {
                        ((S = cn(-1, n & -n)), (S.tag = 2));
                        var F = u.updateQueue;
                        if (F !== null) {
                          F = F.shared;
                          var K = F.pending;
                          (K === null
                            ? (S.next = S)
                            : ((S.next = K.next), (K.next = S)),
                            (F.pending = S));
                        }
                      }
                      ((u.lanes |= n),
                        (S = u.alternate),
                        S !== null && (S.lanes |= n),
                        rs(u.return, n, t),
                        (m.lanes |= n));
                      break;
                    }
                    S = S.next;
                  }
                } else if (u.tag === 10) p = u.type === t.type ? null : u.child;
                else if (u.tag === 18) {
                  if (((p = u.return), p === null)) throw Error(r(341));
                  ((p.lanes |= n),
                    (m = p.alternate),
                    m !== null && (m.lanes |= n),
                    rs(p, n, t),
                    (p = u.sibling));
                } else p = u.child;
                if (p !== null) p.return = u;
                else
                  for (p = u; p !== null; ) {
                    if (p === t) {
                      p = null;
                      break;
                    }
                    if (((u = p.sibling), u !== null)) {
                      ((u.return = p.return), (p = u));
                      break;
                    }
                    p = p.return;
                  }
                u = p;
              }
          (gt(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (a = t.pendingProps.children),
          xr(t, n),
          (l = Ft(l)),
          (a = a(l)),
          (t.flags |= 1),
          gt(e, t, a, n),
          t.child
        );
      case 14:
        return (
          (a = t.type),
          (l = Vt(a, t.pendingProps)),
          (l = Vt(a.type, l)),
          Nc(e, t, a, l, n)
        );
      case 15:
        return Lc(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (a = t.type),
          (l = t.pendingProps),
          (l = t.elementType === a ? l : Vt(a, l)),
          Oo(e, t),
          (t.tag = 1),
          kt(a) ? ((e = !0), fo(t)) : (e = !1),
          xr(t, n),
          wc(t, a, l),
          ws(t, a, l, n),
          _s(null, t, a, !0, e, n)
        );
      case 19:
        return Ic(e, t, n);
      case 22:
        return Rc(e, t, n);
    }
    throw Error(r(156, t.tag));
  };
  function sf(e, t) {
    return zl(e, t);
  }
  function Ch(e, t, n, a) {
    ((this.tag = e),
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
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function bt(e, t, n, a) {
    return new Ch(e, t, n, a);
  }
  function $s(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Th(e) {
    if (typeof e == "function") return $s(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === G)) return 11;
      if (e === _e) return 14;
    }
    return 2;
  }
  function bn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = bt(e.tag, t, e.key, e.mode)),
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
  function Vo(e, t, n, a, l, u) {
    var p = 2;
    if (((a = e), typeof e == "function")) $s(e) && (p = 1);
    else if (typeof e == "string") p = 5;
    else
      e: switch (e) {
        case W:
          return Zn(n.children, l, u, t);
        case q:
          ((p = 8), (l |= 8));
          break;
        case ae:
          return (
            (e = bt(12, n, t, l | 2)),
            (e.elementType = ae),
            (e.lanes = u),
            e
          );
        case ie:
          return (
            (e = bt(13, n, t, l)),
            (e.elementType = ie),
            (e.lanes = u),
            e
          );
        case he:
          return (
            (e = bt(19, n, t, l)),
            (e.elementType = he),
            (e.lanes = u),
            e
          );
        case ce:
          return Ko(n, l, u, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case de:
                p = 10;
                break e;
              case pe:
                p = 9;
                break e;
              case G:
                p = 11;
                break e;
              case _e:
                p = 14;
                break e;
              case Te:
                ((p = 16), (a = null));
                break e;
            }
          throw Error(r(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = bt(p, n, t, l)),
      (t.elementType = e),
      (t.type = a),
      (t.lanes = u),
      t
    );
  }
  function Zn(e, t, n, a) {
    return ((e = bt(7, e, a, t)), (e.lanes = n), e);
  }
  function Ko(e, t, n, a) {
    return (
      (e = bt(22, e, a, t)),
      (e.elementType = ce),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Us(e, t, n) {
    return ((e = bt(6, e, null, t)), (e.lanes = n), e);
  }
  function Hs(e, t, n) {
    return (
      (t = bt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Nh(e, t, n, a, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = va(0)),
      (this.expirationTimes = va(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = va(0)),
      (this.identifierPrefix = a),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Ws(e, t, n, a, l, u, p, m, S) {
    return (
      (e = new Nh(e, t, n, m, S)),
      t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
      (u = bt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (u.memoizedState = {
        element: a,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      os(u),
      e
    );
  }
  function Lh(e, t, n) {
    var a =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: H,
      key: a == null ? null : "" + a,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function lf(e) {
    if (!e) return Tn;
    e = e._reactInternals;
    e: {
      if (Vn(e) !== e || e.tag !== 1) throw Error(r(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (kt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(r(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (kt(n)) return bu(e, n, t);
    }
    return t;
  }
  function uf(e, t, n, a, l, u, p, m, S) {
    return (
      (e = Ws(n, a, !0, e, l, u, p, m, S)),
      (e.context = lf(null)),
      (n = e.current),
      (a = mt()),
      (l = Dn(n)),
      (u = cn(a, l)),
      (u.callback = t ?? null),
      Rn(n, u, l),
      (e.current.lanes = l),
      Hr(e, l, a),
      _t(e, a),
      e
    );
  }
  function $o(e, t, n, a) {
    var l = t.current,
      u = mt(),
      p = Dn(l);
    return (
      (n = lf(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = cn(u, p)),
      (t.payload = { element: e }),
      (a = a === void 0 ? null : a),
      a !== null && (t.callback = a),
      (e = Rn(l, t, p)),
      e !== null && (Ut(e, l, p, u), ko(e, l, p)),
      p
    );
  }
  function Uo(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function cf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ys(e, t) {
    (cf(e, t), (e = e.alternate) && cf(e, t));
  }
  var ff =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Gs(e) {
    this._internalRoot = e;
  }
  ((Ho.prototype.render = Gs.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(r(409));
      $o(e, t, null, null);
    }),
    (Ho.prototype.unmount = Gs.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Xn(function () {
            $o(null, e, null, null);
          }),
            (t[on] = null));
        }
      }));
  function Ho(e) {
    this._internalRoot = e;
  }
  Ho.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Yl();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Sn.length && t !== 0 && t < Sn[n].priority; n++);
      (Sn.splice(n, 0, e), n === 0 && Xl(e));
    }
  };
  function Qs(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Wo(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function df() {}
  function Rh(e, t, n, a, l) {
    if (l) {
      if (typeof a == "function") {
        var u = a;
        a = function () {
          var F = Uo(p);
          u.call(F);
        };
      }
      var p = uf(t, a, e, 0, null, !1, !1, "", df);
      return (
        (e._reactRootContainer = p),
        (e[on] = p.current),
        oi(e.nodeType === 8 ? e.parentNode : e),
        Xn(),
        p
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof a == "function") {
      var m = a;
      a = function () {
        var F = Uo(S);
        m.call(F);
      };
    }
    var S = Ws(e, 0, !1, null, null, !1, !1, "", df);
    return (
      (e._reactRootContainer = S),
      (e[on] = S.current),
      oi(e.nodeType === 8 ? e.parentNode : e),
      Xn(function () {
        $o(t, S, n, a);
      }),
      S
    );
  }
  function Yo(e, t, n, a, l) {
    var u = n._reactRootContainer;
    if (u) {
      var p = u;
      if (typeof l == "function") {
        var m = l;
        l = function () {
          var S = Uo(p);
          m.call(S);
        };
      }
      $o(t, p, e, l);
    } else p = Rh(n, t, e, l, a);
    return Uo(p);
  }
  ((Hl = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Ur(t.pendingLanes);
          n !== 0 &&
            (wa(t, n | 1), _t(t, We()), !(Oe & 6) && ((Nr = We() + 500), Nn()));
        }
        break;
      case 13:
        (Xn(function () {
          var a = un(e, 1);
          if (a !== null) {
            var l = mt();
            Ut(a, e, 1, l);
          }
        }),
          Ys(e, 1));
    }
  }),
    (ka = function (e) {
      if (e.tag === 13) {
        var t = un(e, 134217728);
        if (t !== null) {
          var n = mt();
          Ut(t, e, 134217728, n);
        }
        Ys(e, 134217728);
      }
    }),
    (Wl = function (e) {
      if (e.tag === 13) {
        var t = Dn(e),
          n = un(e, t);
        if (n !== null) {
          var a = mt();
          Ut(n, e, t, a);
        }
        Ys(e, t);
      }
    }),
    (Yl = function () {
      return De;
    }),
    (Gl = function (e, t) {
      var n = De;
      try {
        return ((De = e), t());
      } finally {
        De = n;
      }
    }),
    (ar = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Ir(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var l = uo(a);
                if (!l) throw Error(r(90));
                (Ar(a), Ir(a, l));
              }
            }
          }
          break;
        case "textarea":
          y(e, n);
          break;
        case "select":
          ((t = n.value), t != null && mn(e, !!n.multiple, t, !1));
      }
    }),
    (Fl = Ms),
    (Dl = Xn));
  var Oh = { usingClientEntryPoint: !1, Events: [li, hr, uo, Ol, Pl, Ms] },
    xi = {
      findFiberByHostInstance: Kn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Ph = {
      bundleType: xi.bundleType,
      version: xi.version,
      rendererPackageName: xi.rendererPackageName,
      rendererConfig: xi.rendererConfig,
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
        return ((e = jl(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: xi.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Go = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Go.isDisabled && Go.supportsFiber)
      try {
        ((Ui = Go.inject(Ph)), (Gt = Go));
      } catch {}
  }
  return (
    (Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oh),
    (Et.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Qs(t)) throw Error(r(200));
      return Lh(e, t, null, n);
    }),
    (Et.createRoot = function (e, t) {
      if (!Qs(e)) throw Error(r(299));
      var n = !1,
        a = "",
        l = ff;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Ws(e, 1, !1, null, null, n, !1, a, l)),
        (e[on] = t.current),
        oi(e.nodeType === 8 ? e.parentNode : e),
        new Gs(t)
      );
    }),
    (Et.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(r(188))
          : ((e = Object.keys(e).join(",")), Error(r(268, e)));
      return ((e = jl(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (Et.flushSync = function (e) {
      return Xn(e);
    }),
    (Et.hydrate = function (e, t, n) {
      if (!Wo(t)) throw Error(r(200));
      return Yo(null, e, t, !0, n);
    }),
    (Et.hydrateRoot = function (e, t, n) {
      if (!Qs(e)) throw Error(r(405));
      var a = (n != null && n.hydratedSources) || null,
        l = !1,
        u = "",
        p = ff;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (p = n.onRecoverableError)),
        (t = uf(t, null, e, 1, n ?? null, l, !1, u, p)),
        (e[on] = t.current),
        oi(e),
        a)
      )
        for (e = 0; e < a.length; e++)
          ((n = a[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new Ho(t);
    }),
    (Et.render = function (e, t, n) {
      if (!Wo(t)) throw Error(r(200));
      return Yo(null, e, t, !1, n);
    }),
    (Et.unmountComponentAtNode = function (e) {
      if (!Wo(e)) throw Error(r(40));
      return e._reactRootContainer
        ? (Xn(function () {
            Yo(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[on] = null));
            });
          }),
          !0)
        : !1;
    }),
    (Et.unstable_batchedUpdates = Ms),
    (Et.unstable_renderSubtreeIntoContainer = function (e, t, n, a) {
      if (!Wo(n)) throw Error(r(200));
      if (e == null || e._reactInternals === void 0) throw Error(r(38));
      return Yo(e, t, n, !1, a);
    }),
    (Et.version = "18.3.1-next-f1338f8080-20240426"),
    Et
  );
}
var kf;
function zh() {
  if (kf) return Js.exports;
  kf = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (i) {
        console.error(i);
      }
  }
  return (o(), (Js.exports = Bh()), Js.exports);
}
var Sf;
function Mh() {
  if (Sf) return Qo;
  Sf = 1;
  var o = zh();
  return ((Qo.createRoot = o.createRoot), (Qo.hydrateRoot = o.hydrateRoot), Qo);
}
var Vh = Mh();
const xe = (o) => typeof o == "string",
  Ei = () => {
    let o, i;
    const r = new Promise((s, f) => {
      ((o = s), (i = f));
    });
    return ((r.resolve = o), (r.reject = i), r);
  },
  xf = (o) => (o == null ? "" : "" + o),
  Kh = (o, i, r) => {
    o.forEach((s) => {
      i[s] && (r[s] = i[s]);
    });
  },
  $h = /###/g,
  _f = (o) => (o && o.indexOf("###") > -1 ? o.replace($h, ".") : o),
  Ef = (o) => !o || xe(o),
  Ri = (o, i, r) => {
    const s = xe(i) ? i.split(".") : i;
    let f = 0;
    for (; f < s.length - 1; ) {
      if (Ef(o)) return {};
      const c = _f(s[f]);
      (!o[c] && r && (o[c] = new r()),
        Object.prototype.hasOwnProperty.call(o, c) ? (o = o[c]) : (o = {}),
        ++f);
    }
    return Ef(o) ? {} : { obj: o, k: _f(s[f]) };
  },
  Cf = (o, i, r) => {
    const { obj: s, k: f } = Ri(o, i, Object);
    if (s !== void 0 || i.length === 1) {
      s[f] = r;
      return;
    }
    let c = i[i.length - 1],
      d = i.slice(0, i.length - 1),
      h = Ri(o, d, Object);
    for (; h.obj === void 0 && d.length; )
      ((c = `${d[d.length - 1]}.${c}`),
        (d = d.slice(0, d.length - 1)),
        (h = Ri(o, d, Object)),
        h != null &&
          h.obj &&
          typeof h.obj[`${h.k}.${c}`] < "u" &&
          (h.obj = void 0));
    h.obj[`${h.k}.${c}`] = r;
  },
  Uh = (o, i, r, s) => {
    const { obj: f, k: c } = Ri(o, i, Object);
    ((f[c] = f[c] || []), f[c].push(r));
  },
  Zo = (o, i) => {
    const { obj: r, k: s } = Ri(o, i);
    if (r && Object.prototype.hasOwnProperty.call(r, s)) return r[s];
  },
  Hh = (o, i, r) => {
    const s = Zo(o, r);
    return s !== void 0 ? s : Zo(i, r);
  },
  id = (o, i, r) => {
    for (const s in i)
      s !== "__proto__" &&
        s !== "constructor" &&
        (s in o
          ? xe(o[s]) ||
            o[s] instanceof String ||
            xe(i[s]) ||
            i[s] instanceof String
            ? r && (o[s] = i[s])
            : id(o[s], i[s], r)
          : (o[s] = i[s]));
    return o;
  },
  Rr = (o) => o.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Wh = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
const Yh = (o) => (xe(o) ? o.replace(/[&<>"'\/]/g, (i) => Wh[i]) : o);
class Gh {
  constructor(i) {
    ((this.capacity = i),
      (this.regExpMap = new Map()),
      (this.regExpQueue = []));
  }
  getRegExp(i) {
    const r = this.regExpMap.get(i);
    if (r !== void 0) return r;
    const s = new RegExp(i);
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(i, s),
      this.regExpQueue.push(i),
      s
    );
  }
}
const Qh = [" ", ",", "?", "!", ";"],
  Xh = new Gh(20),
  qh = (o, i, r) => {
    ((i = i || ""), (r = r || ""));
    const s = Qh.filter((d) => i.indexOf(d) < 0 && r.indexOf(d) < 0);
    if (s.length === 0) return !0;
    const f = Xh.getRegExp(
      `(${s.map((d) => (d === "?" ? "\\?" : d)).join("|")})`,
    );
    let c = !f.test(o);
    if (!c) {
      const d = o.indexOf(r);
      d > 0 && !f.test(o.substring(0, d)) && (c = !0);
    }
    return c;
  },
  cl = function (o, i) {
    let r =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
    if (!o) return;
    if (o[i]) return Object.prototype.hasOwnProperty.call(o, i) ? o[i] : void 0;
    const s = i.split(r);
    let f = o;
    for (let c = 0; c < s.length; ) {
      if (!f || typeof f != "object") return;
      let d,
        h = "";
      for (let g = c; g < s.length; ++g)
        if ((g !== c && (h += r), (h += s[g]), (d = f[h]), d !== void 0)) {
          if (
            ["string", "number", "boolean"].indexOf(typeof d) > -1 &&
            g < s.length - 1
          )
            continue;
          c += g - c + 1;
          break;
        }
      f = d;
    }
    return f;
  },
  ea = (o) => (o == null ? void 0 : o.replace("_", "-")),
  Jh = {
    type: "logger",
    log(o) {
      this.output("log", o);
    },
    warn(o) {
      this.output("warn", o);
    },
    error(o) {
      this.output("error", o);
    },
    output(o, i) {
      var r, s;
      (s =
        (r = console == null ? void 0 : console[o]) == null
          ? void 0
          : r.apply) == null || s.call(r, console, i);
    },
  };
class ta {
  constructor(i) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(i, r);
  }
  init(i) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ((this.prefix = r.prefix || "i18next:"),
      (this.logger = i || Jh),
      (this.options = r),
      (this.debug = r.debug));
  }
  log() {
    for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++)
      r[s] = arguments[s];
    return this.forward(r, "log", "", !0);
  }
  warn() {
    for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++)
      r[s] = arguments[s];
    return this.forward(r, "warn", "", !0);
  }
  error() {
    for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++)
      r[s] = arguments[s];
    return this.forward(r, "error", "");
  }
  deprecate() {
    for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++)
      r[s] = arguments[s];
    return this.forward(r, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(i, r, s, f) {
    return f && !this.debug
      ? null
      : (xe(i[0]) && (i[0] = `${s}${this.prefix} ${i[0]}`), this.logger[r](i));
  }
  create(i) {
    return new ta(this.logger, {
      prefix: `${this.prefix}:${i}:`,
      ...this.options,
    });
  }
  clone(i) {
    return (
      (i = i || this.options),
      (i.prefix = i.prefix || this.prefix),
      new ta(this.logger, i)
    );
  }
}
var nn = new ta();
class sa {
  constructor() {
    this.observers = {};
  }
  on(i, r) {
    return (
      i.split(" ").forEach((s) => {
        this.observers[s] || (this.observers[s] = new Map());
        const f = this.observers[s].get(r) || 0;
        this.observers[s].set(r, f + 1);
      }),
      this
    );
  }
  off(i, r) {
    if (this.observers[i]) {
      if (!r) {
        delete this.observers[i];
        return;
      }
      this.observers[i].delete(r);
    }
  }
  emit(i) {
    for (
      var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), f = 1;
      f < r;
      f++
    )
      s[f - 1] = arguments[f];
    (this.observers[i] &&
      Array.from(this.observers[i].entries()).forEach((d) => {
        let [h, g] = d;
        for (let w = 0; w < g; w++) h(...s);
      }),
      this.observers["*"] &&
        Array.from(this.observers["*"].entries()).forEach((d) => {
          let [h, g] = d;
          for (let w = 0; w < g; w++) h.apply(h, [i, ...s]);
        }));
  }
}
class Tf extends sa {
  constructor(i) {
    let r =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ["translation"], defaultNS: "translation" };
    (super(),
      (this.data = i || {}),
      (this.options = r),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0));
  }
  addNamespaces(i) {
    this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
  }
  removeNamespaces(i) {
    const r = this.options.ns.indexOf(i);
    r > -1 && this.options.ns.splice(r, 1);
  }
  getResource(i, r, s) {
    var w, v;
    let f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const c =
        f.keySeparator !== void 0 ? f.keySeparator : this.options.keySeparator,
      d =
        f.ignoreJSONStructure !== void 0
          ? f.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let h;
    i.indexOf(".") > -1
      ? (h = i.split("."))
      : ((h = [i, r]),
        s &&
          (Array.isArray(s)
            ? h.push(...s)
            : xe(s) && c
              ? h.push(...s.split(c))
              : h.push(s)));
    const g = Zo(this.data, h);
    return (
      !g &&
        !r &&
        !s &&
        i.indexOf(".") > -1 &&
        ((i = h[0]), (r = h[1]), (s = h.slice(2).join("."))),
      g || !d || !xe(s)
        ? g
        : cl(
            (v = (w = this.data) == null ? void 0 : w[i]) == null
              ? void 0
              : v[r],
            s,
            c,
          )
    );
  }
  addResource(i, r, s, f) {
    let c =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 };
    const d =
      c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator;
    let h = [i, r];
    (s && (h = h.concat(d ? s.split(d) : s)),
      i.indexOf(".") > -1 && ((h = i.split(".")), (f = r), (r = h[1])),
      this.addNamespaces(r),
      Cf(this.data, h, f),
      c.silent || this.emit("added", i, r, s, f));
  }
  addResources(i, r, s) {
    let f =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 };
    for (const c in s)
      (xe(s[c]) || Array.isArray(s[c])) &&
        this.addResource(i, r, c, s[c], { silent: !0 });
    f.silent || this.emit("added", i, r, s);
  }
  addResourceBundle(i, r, s, f, c) {
    let d =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      h = [i, r];
    (i.indexOf(".") > -1 && ((h = i.split(".")), (f = s), (s = r), (r = h[1])),
      this.addNamespaces(r));
    let g = Zo(this.data, h) || {};
    (d.skipCopy || (s = JSON.parse(JSON.stringify(s))),
      f ? id(g, s, c) : (g = { ...g, ...s }),
      Cf(this.data, h, g),
      d.silent || this.emit("added", i, r, s));
  }
  removeResourceBundle(i, r) {
    (this.hasResourceBundle(i, r) && delete this.data[i][r],
      this.removeNamespaces(r),
      this.emit("removed", i, r));
  }
  hasResourceBundle(i, r) {
    return this.getResource(i, r) !== void 0;
  }
  getResourceBundle(i, r) {
    return (r || (r = this.options.defaultNS), this.getResource(i, r));
  }
  getDataByLanguage(i) {
    return this.data[i];
  }
  hasLanguageSomeTranslations(i) {
    const r = this.getDataByLanguage(i);
    return !!((r && Object.keys(r)) || []).find(
      (f) => r[f] && Object.keys(r[f]).length > 0,
    );
  }
  toJSON() {
    return this.data;
  }
}
var od = {
  processors: {},
  addPostProcessor(o) {
    this.processors[o.name] = o;
  },
  handle(o, i, r, s, f) {
    return (
      o.forEach((c) => {
        var d;
        i =
          ((d = this.processors[c]) == null ? void 0 : d.process(i, r, s, f)) ??
          i;
      }),
      i
    );
  },
};
const Nf = {};
class na extends sa {
  constructor(i) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (super(),
      Kh(
        [
          "resourceStore",
          "languageUtils",
          "pluralResolver",
          "interpolator",
          "backendConnector",
          "i18nFormat",
          "utils",
        ],
        i,
        this,
      ),
      (this.options = r),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      (this.logger = nn.create("translator")));
  }
  changeLanguage(i) {
    i && (this.language = i);
  }
  exists(i) {
    let r =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    if (i == null) return !1;
    const s = this.resolve(i, r);
    return (s == null ? void 0 : s.res) !== void 0;
  }
  extractFromKey(i, r) {
    let s = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
    s === void 0 && (s = ":");
    const f =
      r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
    let c = r.ns || this.options.defaultNS || [];
    const d = s && i.indexOf(s) > -1,
      h =
        !this.options.userDefinedKeySeparator &&
        !r.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !r.nsSeparator &&
        !qh(i, s, f);
    if (d && !h) {
      const g = i.match(this.interpolator.nestingRegexp);
      if (g && g.length > 0) return { key: i, namespaces: xe(c) ? [c] : c };
      const w = i.split(s);
      ((s !== f || (s === f && this.options.ns.indexOf(w[0]) > -1)) &&
        (c = w.shift()),
        (i = w.join(f)));
    }
    return { key: i, namespaces: xe(c) ? [c] : c };
  }
  translate(i, r, s) {
    if (
      (typeof r != "object" &&
        this.options.overloadTranslationOptionHandler &&
        (r = this.options.overloadTranslationOptionHandler(arguments)),
      typeof r == "object" && (r = { ...r }),
      r || (r = {}),
      i == null)
    )
      return "";
    Array.isArray(i) || (i = [String(i)]);
    const f =
        r.returnDetails !== void 0
          ? r.returnDetails
          : this.options.returnDetails,
      c =
        r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator,
      { key: d, namespaces: h } = this.extractFromKey(i[i.length - 1], r),
      g = h[h.length - 1],
      w = r.lng || this.language,
      v = r.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((w == null ? void 0 : w.toLowerCase()) === "cimode") {
      if (v) {
        const j = r.nsSeparator || this.options.nsSeparator;
        return f
          ? {
              res: `${g}${j}${d}`,
              usedKey: d,
              exactUsedKey: d,
              usedLng: w,
              usedNS: g,
              usedParams: this.getUsedParamsDetails(r),
            }
          : `${g}${j}${d}`;
      }
      return f
        ? {
            res: d,
            usedKey: d,
            exactUsedKey: d,
            usedLng: w,
            usedNS: g,
            usedParams: this.getUsedParamsDetails(r),
          }
        : d;
    }
    const k = this.resolve(i, r);
    let x = k == null ? void 0 : k.res;
    const D = (k == null ? void 0 : k.usedKey) || d,
      A = (k == null ? void 0 : k.exactUsedKey) || d,
      O = Object.prototype.toString.apply(x),
      L = ["[object Number]", "[object Function]", "[object RegExp]"],
      I = r.joinArrays !== void 0 ? r.joinArrays : this.options.joinArrays,
      R = !this.i18nFormat || this.i18nFormat.handleAsObject,
      z = !xe(x) && typeof x != "boolean" && typeof x != "number";
    if (R && x && z && L.indexOf(O) < 0 && !(xe(I) && Array.isArray(x))) {
      if (!r.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            "accessing an object - but returnObjects options is not enabled!",
          );
        const j = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(D, x, { ...r, ns: h })
          : `key '${d} (${this.language})' returned an object instead of string.`;
        return f
          ? ((k.res = j), (k.usedParams = this.getUsedParamsDetails(r)), k)
          : j;
      }
      if (c) {
        const j = Array.isArray(x),
          $ = j ? [] : {},
          H = j ? A : D;
        for (const W in x)
          if (Object.prototype.hasOwnProperty.call(x, W)) {
            const q = `${H}${c}${W}`;
            (($[W] = this.translate(q, { ...r, joinArrays: !1, ns: h })),
              $[W] === q && ($[W] = x[W]));
          }
        x = $;
      }
    } else if (R && xe(I) && Array.isArray(x))
      ((x = x.join(I)), x && (x = this.extendTranslation(x, i, r, s)));
    else {
      let j = !1,
        $ = !1;
      const H = r.count !== void 0 && !xe(r.count),
        W = na.hasDefaultValue(r),
        q = H ? this.pluralResolver.getSuffix(w, r.count, r) : "",
        ae =
          r.ordinal && H
            ? this.pluralResolver.getSuffix(w, r.count, { ordinal: !1 })
            : "",
        de = H && !r.ordinal && r.count === 0,
        pe =
          (de && r[`defaultValue${this.options.pluralSeparator}zero`]) ||
          r[`defaultValue${q}`] ||
          r[`defaultValue${ae}`] ||
          r.defaultValue;
      (!this.isValidLookup(x) && W && ((j = !0), (x = pe)),
        this.isValidLookup(x) || (($ = !0), (x = d)));
      const ie =
          (r.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          $
            ? void 0
            : x,
        he = W && pe !== x && this.options.updateMissing;
      if ($ || j || he) {
        if (
          (this.logger.log(
            he ? "updateKey" : "missingKey",
            w,
            g,
            d,
            he ? pe : x,
          ),
          c)
        ) {
          const V = this.resolve(d, { ...r, keySeparator: !1 });
          V &&
            V.res &&
            this.logger.warn(
              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.",
            );
        }
        let _e = [];
        const Te = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          r.lng || this.language,
        );
        if (this.options.saveMissingTo === "fallback" && Te && Te[0])
          for (let V = 0; V < Te.length; V++) _e.push(Te[V]);
        else
          this.options.saveMissingTo === "all"
            ? (_e = this.languageUtils.toResolveHierarchy(
                r.lng || this.language,
              ))
            : _e.push(r.lng || this.language);
        const ce = (V, te, Z) => {
          var B;
          const E = W && Z !== x ? Z : ie;
          (this.options.missingKeyHandler
            ? this.options.missingKeyHandler(V, g, te, E, he, r)
            : (B = this.backendConnector) != null &&
              B.saveMissing &&
              this.backendConnector.saveMissing(V, g, te, E, he, r),
            this.emit("missingKey", V, g, te, x));
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && H
            ? _e.forEach((V) => {
                const te = this.pluralResolver.getSuffixes(V, r);
                (de &&
                  r[`defaultValue${this.options.pluralSeparator}zero`] &&
                  te.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  te.push(`${this.options.pluralSeparator}zero`),
                  te.forEach((Z) => {
                    ce([V], d + Z, r[`defaultValue${Z}`] || pe);
                  }));
              })
            : ce(_e, d, pe));
      }
      ((x = this.extendTranslation(x, i, r, k, s)),
        $ &&
          x === d &&
          this.options.appendNamespaceToMissingKey &&
          (x = `${g}:${d}`),
        ($ || j) &&
          this.options.parseMissingKeyHandler &&
          (x = this.options.parseMissingKeyHandler(
            this.options.appendNamespaceToMissingKey ? `${g}:${d}` : d,
            j ? x : void 0,
          )));
    }
    return f
      ? ((k.res = x), (k.usedParams = this.getUsedParamsDetails(r)), k)
      : x;
  }
  extendTranslation(i, r, s, f, c) {
    var w, v;
    var d = this;
    if ((w = this.i18nFormat) != null && w.parse)
      i = this.i18nFormat.parse(
        i,
        { ...this.options.interpolation.defaultVariables, ...s },
        s.lng || this.language || f.usedLng,
        f.usedNS,
        f.usedKey,
        { resolved: f },
      );
    else if (!s.skipInterpolation) {
      s.interpolation &&
        this.interpolator.init({
          ...s,
          interpolation: { ...this.options.interpolation, ...s.interpolation },
        });
      const k =
        xe(i) &&
        (((v = s == null ? void 0 : s.interpolation) == null
          ? void 0
          : v.skipOnVariables) !== void 0
          ? s.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let x;
      if (k) {
        const A = i.match(this.interpolator.nestingRegexp);
        x = A && A.length;
      }
      let D = s.replace && !xe(s.replace) ? s.replace : s;
      if (
        (this.options.interpolation.defaultVariables &&
          (D = { ...this.options.interpolation.defaultVariables, ...D }),
        (i = this.interpolator.interpolate(
          i,
          D,
          s.lng || this.language || f.usedLng,
          s,
        )),
        k)
      ) {
        const A = i.match(this.interpolator.nestingRegexp),
          O = A && A.length;
        x < O && (s.nest = !1);
      }
      (!s.lng && f && f.res && (s.lng = this.language || f.usedLng),
        s.nest !== !1 &&
          (i = this.interpolator.nest(
            i,
            function () {
              for (
                var A = arguments.length, O = new Array(A), L = 0;
                L < A;
                L++
              )
                O[L] = arguments[L];
              return (c == null ? void 0 : c[0]) === O[0] && !s.context
                ? (d.logger.warn(
                    `It seems you are nesting recursively key: ${O[0]} in key: ${r[0]}`,
                  ),
                  null)
                : d.translate(...O, r);
            },
            s,
          )),
        s.interpolation && this.interpolator.reset());
    }
    const h = s.postProcess || this.options.postProcess,
      g = xe(h) ? [h] : h;
    return (
      i != null &&
        g != null &&
        g.length &&
        s.applyPostProcessor !== !1 &&
        (i = od.handle(
          g,
          i,
          r,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...f,
                  usedParams: this.getUsedParamsDetails(s),
                },
                ...s,
              }
            : s,
          this,
        )),
      i
    );
  }
  resolve(i) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      s,
      f,
      c,
      d,
      h;
    return (
      xe(i) && (i = [i]),
      i.forEach((g) => {
        if (this.isValidLookup(s)) return;
        const w = this.extractFromKey(g, r),
          v = w.key;
        f = v;
        let k = w.namespaces;
        this.options.fallbackNS && (k = k.concat(this.options.fallbackNS));
        const x = r.count !== void 0 && !xe(r.count),
          D = x && !r.ordinal && r.count === 0,
          A =
            r.context !== void 0 &&
            (xe(r.context) || typeof r.context == "number") &&
            r.context !== "",
          O = r.lngs
            ? r.lngs
            : this.languageUtils.toResolveHierarchy(
                r.lng || this.language,
                r.fallbackLng,
              );
        k.forEach((L) => {
          var I, R;
          this.isValidLookup(s) ||
            ((h = L),
            !Nf[`${O[0]}-${L}`] &&
              (I = this.utils) != null &&
              I.hasLoadedNamespace &&
              !((R = this.utils) != null && R.hasLoadedNamespace(h)) &&
              ((Nf[`${O[0]}-${L}`] = !0),
              this.logger.warn(
                `key "${f}" for languages "${O.join(", ")}" won't get resolved as namespace "${h}" was not yet loaded`,
                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
              )),
            O.forEach((z) => {
              var H;
              if (this.isValidLookup(s)) return;
              d = z;
              const j = [v];
              if ((H = this.i18nFormat) != null && H.addLookupKeys)
                this.i18nFormat.addLookupKeys(j, v, z, L, r);
              else {
                let W;
                x && (W = this.pluralResolver.getSuffix(z, r.count, r));
                const q = `${this.options.pluralSeparator}zero`,
                  ae = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (x &&
                    (j.push(v + W),
                    r.ordinal &&
                      W.indexOf(ae) === 0 &&
                      j.push(v + W.replace(ae, this.options.pluralSeparator)),
                    D && j.push(v + q)),
                  A)
                ) {
                  const de = `${v}${this.options.contextSeparator}${r.context}`;
                  (j.push(de),
                    x &&
                      (j.push(de + W),
                      r.ordinal &&
                        W.indexOf(ae) === 0 &&
                        j.push(
                          de + W.replace(ae, this.options.pluralSeparator),
                        ),
                      D && j.push(de + q)));
                }
              }
              let $;
              for (; ($ = j.pop()); )
                this.isValidLookup(s) ||
                  ((c = $), (s = this.getResource(z, L, $, r)));
            }));
        });
      }),
      { res: s, usedKey: f, exactUsedKey: c, usedLng: d, usedNS: h }
    );
  }
  isValidLookup(i) {
    return (
      i !== void 0 &&
      !(!this.options.returnNull && i === null) &&
      !(!this.options.returnEmptyString && i === "")
    );
  }
  getResource(i, r, s) {
    var c;
    let f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return (c = this.i18nFormat) != null && c.getResource
      ? this.i18nFormat.getResource(i, r, s, f)
      : this.resourceStore.getResource(i, r, s, f);
  }
  getUsedParamsDetails() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const r = [
        "defaultValue",
        "ordinal",
        "context",
        "replace",
        "lng",
        "lngs",
        "fallbackLng",
        "ns",
        "keySeparator",
        "nsSeparator",
        "returnObjects",
        "returnDetails",
        "joinArrays",
        "postProcess",
        "interpolation",
      ],
      s = i.replace && !xe(i.replace);
    let f = s ? i.replace : i;
    if (
      (s && typeof i.count < "u" && (f.count = i.count),
      this.options.interpolation.defaultVariables &&
        (f = { ...this.options.interpolation.defaultVariables, ...f }),
      !s)
    ) {
      f = { ...f };
      for (const c of r) delete f[c];
    }
    return f;
  }
  static hasDefaultValue(i) {
    const r = "defaultValue";
    for (const s in i)
      if (
        Object.prototype.hasOwnProperty.call(i, s) &&
        r === s.substring(0, r.length) &&
        i[s] !== void 0
      )
        return !0;
    return !1;
  }
}
class Lf {
  constructor(i) {
    ((this.options = i),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = nn.create("languageUtils")));
  }
  getScriptPartFromCode(i) {
    if (((i = ea(i)), !i || i.indexOf("-") < 0)) return null;
    const r = i.split("-");
    return r.length === 2 || (r.pop(), r[r.length - 1].toLowerCase() === "x")
      ? null
      : this.formatLanguageCode(r.join("-"));
  }
  getLanguagePartFromCode(i) {
    if (((i = ea(i)), !i || i.indexOf("-") < 0)) return i;
    const r = i.split("-");
    return this.formatLanguageCode(r[0]);
  }
  formatLanguageCode(i) {
    if (xe(i) && i.indexOf("-") > -1) {
      let r;
      try {
        r = Intl.getCanonicalLocales(i)[0];
      } catch {}
      return (
        r && this.options.lowerCaseLng && (r = r.toLowerCase()),
        r || (this.options.lowerCaseLng ? i.toLowerCase() : i)
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? i.toLowerCase()
      : i;
  }
  isSupportedCode(i) {
    return (
      (this.options.load === "languageOnly" ||
        this.options.nonExplicitSupportedLngs) &&
        (i = this.getLanguagePartFromCode(i)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(i) > -1
    );
  }
  getBestMatchFromCodes(i) {
    if (!i) return null;
    let r;
    return (
      i.forEach((s) => {
        if (r) return;
        const f = this.formatLanguageCode(s);
        (!this.options.supportedLngs || this.isSupportedCode(f)) && (r = f);
      }),
      !r &&
        this.options.supportedLngs &&
        i.forEach((s) => {
          if (r) return;
          const f = this.getLanguagePartFromCode(s);
          if (this.isSupportedCode(f)) return (r = f);
          r = this.options.supportedLngs.find((c) => {
            if (c === f) return c;
            if (
              !(c.indexOf("-") < 0 && f.indexOf("-") < 0) &&
              ((c.indexOf("-") > 0 &&
                f.indexOf("-") < 0 &&
                c.substring(0, c.indexOf("-")) === f) ||
                (c.indexOf(f) === 0 && f.length > 1))
            )
              return c;
          });
        }),
      r || (r = this.getFallbackCodes(this.options.fallbackLng)[0]),
      r
    );
  }
  getFallbackCodes(i, r) {
    if (!i) return [];
    if (
      (typeof i == "function" && (i = i(r)),
      xe(i) && (i = [i]),
      Array.isArray(i))
    )
      return i;
    if (!r) return i.default || [];
    let s = i[r];
    return (
      s || (s = i[this.getScriptPartFromCode(r)]),
      s || (s = i[this.formatLanguageCode(r)]),
      s || (s = i[this.getLanguagePartFromCode(r)]),
      s || (s = i.default),
      s || []
    );
  }
  toResolveHierarchy(i, r) {
    const s = this.getFallbackCodes(r || this.options.fallbackLng || [], i),
      f = [],
      c = (d) => {
        d &&
          (this.isSupportedCode(d)
            ? f.push(d)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${d}`,
              ));
      };
    return (
      xe(i) && (i.indexOf("-") > -1 || i.indexOf("_") > -1)
        ? (this.options.load !== "languageOnly" &&
            c(this.formatLanguageCode(i)),
          this.options.load !== "languageOnly" &&
            this.options.load !== "currentOnly" &&
            c(this.getScriptPartFromCode(i)),
          this.options.load !== "currentOnly" &&
            c(this.getLanguagePartFromCode(i)))
        : xe(i) && c(this.formatLanguageCode(i)),
      s.forEach((d) => {
        f.indexOf(d) < 0 && c(this.formatLanguageCode(d));
      }),
      f
    );
  }
}
const Rf = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  Of = {
    select: (o) => (o === 1 ? "one" : "other"),
    resolvedOptions: () => ({ pluralCategories: ["one", "other"] }),
  };
class Zh {
  constructor(i) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ((this.languageUtils = i),
      (this.options = r),
      (this.logger = nn.create("pluralResolver")),
      (this.pluralRulesCache = {}));
  }
  addRule(i, r) {
    this.rules[i] = r;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(i) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = ea(i === "dev" ? "en" : i),
      f = r.ordinal ? "ordinal" : "cardinal",
      c = JSON.stringify({ cleanedCode: s, type: f });
    if (c in this.pluralRulesCache) return this.pluralRulesCache[c];
    let d;
    try {
      d = new Intl.PluralRules(s, { type: f });
    } catch {
      if (!Intl)
        return (
          this.logger.error("No Intl support, please use an Intl polyfill!"),
          Of
        );
      if (!i.match(/-|_/)) return Of;
      const g = this.languageUtils.getLanguagePartFromCode(i);
      d = this.getRule(g, r);
    }
    return ((this.pluralRulesCache[c] = d), d);
  }
  needsPlural(i) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      s = this.getRule(i, r);
    return (
      s || (s = this.getRule("dev", r)),
      (s == null ? void 0 : s.resolvedOptions().pluralCategories.length) > 1
    );
  }
  getPluralFormsOfKey(i, r) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(i, s).map((f) => `${r}${f}`);
  }
  getSuffixes(i) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      s = this.getRule(i, r);
    return (
      s || (s = this.getRule("dev", r)),
      s
        ? s
            .resolvedOptions()
            .pluralCategories.sort((f, c) => Rf[f] - Rf[c])
            .map(
              (f) =>
                `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${f}`,
            )
        : []
    );
  }
  getSuffix(i, r) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const f = this.getRule(i, s);
    return f
      ? `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${f.select(r)}`
      : (this.logger.warn(`no plural rule found for: ${i}`),
        this.getSuffix("dev", r, s));
  }
}
const Pf = function (o, i, r) {
    let s =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
      f = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      c = Hh(o, i, r);
    return (
      !c &&
        f &&
        xe(r) &&
        ((c = cl(o, r, s)), c === void 0 && (c = cl(i, r, s))),
      c
    );
  },
  tl = (o) => o.replace(/\$/g, "$$$$");
class eg {
  constructor() {
    var r;
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ((this.logger = nn.create("interpolator")),
      (this.options = i),
      (this.format =
        ((r = i == null ? void 0 : i.interpolation) == null
          ? void 0
          : r.format) || ((s) => s)),
      this.init(i));
  }
  init() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    i.interpolation || (i.interpolation = { escapeValue: !0 });
    const {
      escape: r,
      escapeValue: s,
      useRawValueToEscape: f,
      prefix: c,
      prefixEscaped: d,
      suffix: h,
      suffixEscaped: g,
      formatSeparator: w,
      unescapeSuffix: v,
      unescapePrefix: k,
      nestingPrefix: x,
      nestingPrefixEscaped: D,
      nestingSuffix: A,
      nestingSuffixEscaped: O,
      nestingOptionsSeparator: L,
      maxReplaces: I,
      alwaysFormat: R,
    } = i.interpolation;
    ((this.escape = r !== void 0 ? r : Yh),
      (this.escapeValue = s !== void 0 ? s : !0),
      (this.useRawValueToEscape = f !== void 0 ? f : !1),
      (this.prefix = c ? Rr(c) : d || "{{"),
      (this.suffix = h ? Rr(h) : g || "}}"),
      (this.formatSeparator = w || ","),
      (this.unescapePrefix = v ? "" : k || "-"),
      (this.unescapeSuffix = this.unescapePrefix ? "" : v || ""),
      (this.nestingPrefix = x ? Rr(x) : D || Rr("$t(")),
      (this.nestingSuffix = A ? Rr(A) : O || Rr(")")),
      (this.nestingOptionsSeparator = L || ","),
      (this.maxReplaces = I || 1e3),
      (this.alwaysFormat = R !== void 0 ? R : !1),
      this.resetRegExp());
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const i = (r, s) =>
      (r == null ? void 0 : r.source) === s
        ? ((r.lastIndex = 0), r)
        : new RegExp(s, "g");
    ((this.regexp = i(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = i(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`,
      )),
      (this.nestingRegexp = i(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`,
      )));
  }
  interpolate(i, r, s, f) {
    var D;
    let c, d, h;
    const g =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      w = (A) => {
        if (A.indexOf(this.formatSeparator) < 0) {
          const R = Pf(
            r,
            g,
            A,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          );
          return this.alwaysFormat
            ? this.format(R, void 0, s, { ...f, ...r, interpolationkey: A })
            : R;
        }
        const O = A.split(this.formatSeparator),
          L = O.shift().trim(),
          I = O.join(this.formatSeparator).trim();
        return this.format(
          Pf(
            r,
            g,
            L,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          ),
          I,
          s,
          { ...f, ...r, interpolationkey: L },
        );
      };
    this.resetRegExp();
    const v =
        (f == null ? void 0 : f.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      k =
        ((D = f == null ? void 0 : f.interpolation) == null
          ? void 0
          : D.skipOnVariables) !== void 0
          ? f.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (A) => tl(A) },
        {
          regex: this.regexp,
          safeValue: (A) => (this.escapeValue ? tl(this.escape(A)) : tl(A)),
        },
      ].forEach((A) => {
        for (h = 0; (c = A.regex.exec(i)); ) {
          const O = c[1].trim();
          if (((d = w(O)), d === void 0))
            if (typeof v == "function") {
              const I = v(i, c, f);
              d = xe(I) ? I : "";
            } else if (f && Object.prototype.hasOwnProperty.call(f, O)) d = "";
            else if (k) {
              d = c[0];
              continue;
            } else
              (this.logger.warn(
                `missed to pass in variable ${O} for interpolating ${i}`,
              ),
                (d = ""));
          else !xe(d) && !this.useRawValueToEscape && (d = xf(d));
          const L = A.safeValue(d);
          if (
            ((i = i.replace(c[0], L)),
            k
              ? ((A.regex.lastIndex += d.length),
                (A.regex.lastIndex -= c[0].length))
              : (A.regex.lastIndex = 0),
            h++,
            h >= this.maxReplaces)
          )
            break;
        }
      }),
      i
    );
  }
  nest(i, r) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      f,
      c,
      d;
    const h = (g, w) => {
      const v = this.nestingOptionsSeparator;
      if (g.indexOf(v) < 0) return g;
      const k = g.split(new RegExp(`${v}[ ]*{`));
      let x = `{${k[1]}`;
      ((g = k[0]), (x = this.interpolate(x, d)));
      const D = x.match(/'/g),
        A = x.match(/"/g);
      ((((D == null ? void 0 : D.length) ?? 0) % 2 === 0 && !A) ||
        A.length % 2 !== 0) &&
        (x = x.replace(/'/g, '"'));
      try {
        ((d = JSON.parse(x)), w && (d = { ...w, ...d }));
      } catch (O) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${g}`,
            O,
          ),
          `${g}${v}${x}`
        );
      }
      return (
        d.defaultValue &&
          d.defaultValue.indexOf(this.prefix) > -1 &&
          delete d.defaultValue,
        g
      );
    };
    for (; (f = this.nestingRegexp.exec(i)); ) {
      let g = [];
      ((d = { ...s }),
        (d = d.replace && !xe(d.replace) ? d.replace : d),
        (d.applyPostProcessor = !1),
        delete d.defaultValue);
      let w = !1;
      if (f[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(f[1])) {
        const v = f[1].split(this.formatSeparator).map((k) => k.trim());
        ((f[1] = v.shift()), (g = v), (w = !0));
      }
      if (((c = r(h.call(this, f[1].trim(), d), d)), c && f[0] === i && !xe(c)))
        return c;
      (xe(c) || (c = xf(c)),
        c ||
          (this.logger.warn(`missed to resolve ${f[1]} for nesting ${i}`),
          (c = "")),
        w &&
          (c = g.reduce(
            (v, k) =>
              this.format(v, k, s.lng, { ...s, interpolationkey: f[1].trim() }),
            c.trim(),
          )),
        (i = i.replace(f[0], c)),
        (this.regexp.lastIndex = 0));
    }
    return i;
  }
}
const tg = (o) => {
    let i = o.toLowerCase().trim();
    const r = {};
    if (o.indexOf("(") > -1) {
      const s = o.split("(");
      i = s[0].toLowerCase().trim();
      const f = s[1].substring(0, s[1].length - 1);
      i === "currency" && f.indexOf(":") < 0
        ? r.currency || (r.currency = f.trim())
        : i === "relativetime" && f.indexOf(":") < 0
          ? r.range || (r.range = f.trim())
          : f.split(";").forEach((d) => {
              if (d) {
                const [h, ...g] = d.split(":"),
                  w = g
                    .join(":")
                    .trim()
                    .replace(/^'+|'+$/g, ""),
                  v = h.trim();
                (r[v] || (r[v] = w),
                  w === "false" && (r[v] = !1),
                  w === "true" && (r[v] = !0),
                  isNaN(w) || (r[v] = parseInt(w, 10)));
              }
            });
    }
    return { formatName: i, formatOptions: r };
  },
  Or = (o) => {
    const i = {};
    return (r, s, f) => {
      let c = f;
      f &&
        f.interpolationkey &&
        f.formatParams &&
        f.formatParams[f.interpolationkey] &&
        f[f.interpolationkey] &&
        (c = { ...c, [f.interpolationkey]: void 0 });
      const d = s + JSON.stringify(c);
      let h = i[d];
      return (h || ((h = o(ea(s), f)), (i[d] = h)), h(r));
    };
  };
class ng {
  constructor() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ((this.logger = nn.create("formatter")),
      (this.options = i),
      (this.formats = {
        number: Or((r, s) => {
          const f = new Intl.NumberFormat(r, { ...s });
          return (c) => f.format(c);
        }),
        currency: Or((r, s) => {
          const f = new Intl.NumberFormat(r, { ...s, style: "currency" });
          return (c) => f.format(c);
        }),
        datetime: Or((r, s) => {
          const f = new Intl.DateTimeFormat(r, { ...s });
          return (c) => f.format(c);
        }),
        relativetime: Or((r, s) => {
          const f = new Intl.RelativeTimeFormat(r, { ...s });
          return (c) => f.format(c, s.range || "day");
        }),
        list: Or((r, s) => {
          const f = new Intl.ListFormat(r, { ...s });
          return (c) => f.format(c);
        }),
      }),
      this.init(i));
  }
  init(i) {
    let r =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    this.formatSeparator = r.interpolation.formatSeparator || ",";
  }
  add(i, r) {
    this.formats[i.toLowerCase().trim()] = r;
  }
  addCached(i, r) {
    this.formats[i.toLowerCase().trim()] = Or(r);
  }
  format(i, r, s) {
    let f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const c = r.split(this.formatSeparator);
    if (
      c.length > 1 &&
      c[0].indexOf("(") > 1 &&
      c[0].indexOf(")") < 0 &&
      c.find((h) => h.indexOf(")") > -1)
    ) {
      const h = c.findIndex((g) => g.indexOf(")") > -1);
      c[0] = [c[0], ...c.splice(1, h)].join(this.formatSeparator);
    }
    return c.reduce((h, g) => {
      var k;
      const { formatName: w, formatOptions: v } = tg(g);
      if (this.formats[w]) {
        let x = h;
        try {
          const D =
              ((k = f == null ? void 0 : f.formatParams) == null
                ? void 0
                : k[f.interpolationkey]) || {},
            A = D.locale || D.lng || f.locale || f.lng || s;
          x = this.formats[w](h, A, { ...v, ...f, ...D });
        } catch (D) {
          this.logger.warn(D);
        }
        return x;
      } else this.logger.warn(`there was no format function for ${w}`);
      return h;
    }, i);
  }
}
const rg = (o, i) => {
  o.pending[i] !== void 0 && (delete o.pending[i], o.pendingCount--);
};
class ig extends sa {
  constructor(i, r, s) {
    var c, d;
    let f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    (super(),
      (this.backend = i),
      (this.store = r),
      (this.services = s),
      (this.languageUtils = s.languageUtils),
      (this.options = f),
      (this.logger = nn.create("backendConnector")),
      (this.waitingReads = []),
      (this.maxParallelReads = f.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = f.maxRetries >= 0 ? f.maxRetries : 5),
      (this.retryTimeout = f.retryTimeout >= 1 ? f.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      (d = (c = this.backend) == null ? void 0 : c.init) == null ||
        d.call(c, s, f.backend, f));
  }
  queueLoad(i, r, s, f) {
    const c = {},
      d = {},
      h = {},
      g = {};
    return (
      i.forEach((w) => {
        let v = !0;
        (r.forEach((k) => {
          const x = `${w}|${k}`;
          !s.reload && this.store.hasResourceBundle(w, k)
            ? (this.state[x] = 2)
            : this.state[x] < 0 ||
              (this.state[x] === 1
                ? d[x] === void 0 && (d[x] = !0)
                : ((this.state[x] = 1),
                  (v = !1),
                  d[x] === void 0 && (d[x] = !0),
                  c[x] === void 0 && (c[x] = !0),
                  g[k] === void 0 && (g[k] = !0)));
        }),
          v || (h[w] = !0));
      }),
      (Object.keys(c).length || Object.keys(d).length) &&
        this.queue.push({
          pending: d,
          pendingCount: Object.keys(d).length,
          loaded: {},
          errors: [],
          callback: f,
        }),
      {
        toLoad: Object.keys(c),
        pending: Object.keys(d),
        toLoadLanguages: Object.keys(h),
        toLoadNamespaces: Object.keys(g),
      }
    );
  }
  loaded(i, r, s) {
    const f = i.split("|"),
      c = f[0],
      d = f[1];
    (r && this.emit("failedLoading", c, d, r),
      !r &&
        s &&
        this.store.addResourceBundle(c, d, s, void 0, void 0, { skipCopy: !0 }),
      (this.state[i] = r ? -1 : 2),
      r && s && (this.state[i] = 0));
    const h = {};
    (this.queue.forEach((g) => {
      (Uh(g.loaded, [c], d),
        rg(g, i),
        r && g.errors.push(r),
        g.pendingCount === 0 &&
          !g.done &&
          (Object.keys(g.loaded).forEach((w) => {
            h[w] || (h[w] = {});
            const v = g.loaded[w];
            v.length &&
              v.forEach((k) => {
                h[w][k] === void 0 && (h[w][k] = !0);
              });
          }),
          (g.done = !0),
          g.errors.length ? g.callback(g.errors) : g.callback()));
    }),
      this.emit("loaded", h),
      (this.queue = this.queue.filter((g) => !g.done)));
  }
  read(i, r, s) {
    let f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      c =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      d = arguments.length > 5 ? arguments[5] : void 0;
    if (!i.length) return d(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: i,
        ns: r,
        fcName: s,
        tried: f,
        wait: c,
        callback: d,
      });
      return;
    }
    this.readingCalls++;
    const h = (w, v) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const k = this.waitingReads.shift();
          this.read(k.lng, k.ns, k.fcName, k.tried, k.wait, k.callback);
        }
        if (w && v && f < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, i, r, s, f + 1, c * 2, d);
          }, c);
          return;
        }
        d(w, v);
      },
      g = this.backend[s].bind(this.backend);
    if (g.length === 2) {
      try {
        const w = g(i, r);
        w && typeof w.then == "function"
          ? w.then((v) => h(null, v)).catch(h)
          : h(null, w);
      } catch (w) {
        h(w);
      }
      return;
    }
    return g(i, r, h);
  }
  prepareLoading(i, r) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      f = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn(
          "No backend was added via i18next.use. Will not load resources.",
        ),
        f && f()
      );
    (xe(i) && (i = this.languageUtils.toResolveHierarchy(i)),
      xe(r) && (r = [r]));
    const c = this.queueLoad(i, r, s, f);
    if (!c.toLoad.length) return (c.pending.length || f(), null);
    c.toLoad.forEach((d) => {
      this.loadOne(d);
    });
  }
  load(i, r, s) {
    this.prepareLoading(i, r, {}, s);
  }
  reload(i, r, s) {
    this.prepareLoading(i, r, { reload: !0 }, s);
  }
  loadOne(i) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const s = i.split("|"),
      f = s[0],
      c = s[1];
    this.read(f, c, "read", void 0, void 0, (d, h) => {
      (d &&
        this.logger.warn(
          `${r}loading namespace ${c} for language ${f} failed`,
          d,
        ),
        !d &&
          h &&
          this.logger.log(`${r}loaded namespace ${c} for language ${f}`, h),
        this.loaded(i, d, h));
    });
  }
  saveMissing(i, r, s, f, c) {
    var g, w, v, k, x;
    let d = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      h =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : () => {};
    if (
      (w = (g = this.services) == null ? void 0 : g.utils) != null &&
      w.hasLoadedNamespace &&
      !(
        (k = (v = this.services) == null ? void 0 : v.utils) != null &&
        k.hasLoadedNamespace(r)
      )
    ) {
      this.logger.warn(
        `did not save key "${s}" as the namespace "${r}" was not yet loaded`,
        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
      );
      return;
    }
    if (!(s == null || s === "")) {
      if ((x = this.backend) != null && x.create) {
        const D = { ...d, isUpdate: c },
          A = this.backend.create.bind(this.backend);
        if (A.length < 6)
          try {
            let O;
            (A.length === 5 ? (O = A(i, r, s, f, D)) : (O = A(i, r, s, f)),
              O && typeof O.then == "function"
                ? O.then((L) => h(null, L)).catch(h)
                : h(null, O));
          } catch (O) {
            h(O);
          }
        else A(i, r, s, f, h, D);
      }
      !i || !i[0] || this.store.addResource(i[0], r, s, f);
    }
  }
}
const Ff = () => ({
    debug: !1,
    initAsync: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (o) => {
      let i = {};
      if (
        (typeof o[1] == "object" && (i = o[1]),
        xe(o[1]) && (i.defaultValue = o[1]),
        xe(o[2]) && (i.tDescription = o[2]),
        typeof o[2] == "object" || typeof o[3] == "object")
      ) {
        const r = o[3] || o[2];
        Object.keys(r).forEach((s) => {
          i[s] = r[s];
        });
      }
      return i;
    },
    interpolation: {
      escapeValue: !0,
      format: (o) => o,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  }),
  Df = (o) => {
    var i, r;
    return (
      xe(o.ns) && (o.ns = [o.ns]),
      xe(o.fallbackLng) && (o.fallbackLng = [o.fallbackLng]),
      xe(o.fallbackNS) && (o.fallbackNS = [o.fallbackNS]),
      ((r = (i = o.supportedLngs) == null ? void 0 : i.indexOf) == null
        ? void 0
        : r.call(i, "cimode")) < 0 &&
        (o.supportedLngs = o.supportedLngs.concat(["cimode"])),
      typeof o.initImmediate == "boolean" && (o.initAsync = o.initImmediate),
      o
    );
  },
  Xo = () => {},
  og = (o) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(o)).forEach((r) => {
      typeof o[r] == "function" && (o[r] = o[r].bind(o));
    });
  };
class Fi extends sa {
  constructor() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = Df(i)),
      (this.services = {}),
      (this.logger = nn),
      (this.modules = { external: [] }),
      og(this),
      r && !this.isInitialized && !i.isClone)
    ) {
      if (!this.options.initAsync) return (this.init(i, r), this);
      setTimeout(() => {
        this.init(i, r);
      }, 0);
    }
  }
  init() {
    var i = this;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      s = arguments.length > 1 ? arguments[1] : void 0;
    ((this.isInitializing = !0),
      typeof r == "function" && ((s = r), (r = {})),
      r.defaultNS == null &&
        r.ns &&
        (xe(r.ns)
          ? (r.defaultNS = r.ns)
          : r.ns.indexOf("translation") < 0 && (r.defaultNS = r.ns[0])));
    const f = Ff();
    ((this.options = { ...f, ...this.options, ...Df(r) }),
      (this.options.interpolation = {
        ...f.interpolation,
        ...this.options.interpolation,
      }),
      r.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = r.keySeparator),
      r.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = r.nsSeparator));
    const c = (v) => (v ? (typeof v == "function" ? new v() : v) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? nn.init(c(this.modules.logger), this.options)
        : nn.init(null, this.options);
      let v;
      this.modules.formatter ? (v = this.modules.formatter) : (v = ng);
      const k = new Lf(this.options);
      this.store = new Tf(this.options.resources, this.options);
      const x = this.services;
      ((x.logger = nn),
        (x.resourceStore = this.store),
        (x.languageUtils = k),
        (x.pluralResolver = new Zh(k, {
          prepend: this.options.pluralSeparator,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        v &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === f.interpolation.format) &&
          ((x.formatter = c(v)),
          x.formatter.init(x, this.options),
          (this.options.interpolation.format = x.formatter.format.bind(
            x.formatter,
          ))),
        (x.interpolator = new eg(this.options)),
        (x.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (x.backendConnector = new ig(
          c(this.modules.backend),
          x.resourceStore,
          x,
          this.options,
        )),
        x.backendConnector.on("*", function (D) {
          for (
            var A = arguments.length, O = new Array(A > 1 ? A - 1 : 0), L = 1;
            L < A;
            L++
          )
            O[L - 1] = arguments[L];
          i.emit(D, ...O);
        }),
        this.modules.languageDetector &&
          ((x.languageDetector = c(this.modules.languageDetector)),
          x.languageDetector.init &&
            x.languageDetector.init(x, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((x.i18nFormat = c(this.modules.i18nFormat)),
          x.i18nFormat.init && x.i18nFormat.init(this)),
        (this.translator = new na(this.services, this.options)),
        this.translator.on("*", function (D) {
          for (
            var A = arguments.length, O = new Array(A > 1 ? A - 1 : 0), L = 1;
            L < A;
            L++
          )
            O[L - 1] = arguments[L];
          i.emit(D, ...O);
        }),
        this.modules.external.forEach((D) => {
          D.init && D.init(this);
        }));
    }
    if (
      ((this.format = this.options.interpolation.format),
      s || (s = Xo),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const v = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng,
      );
      v.length > 0 && v[0] !== "dev" && (this.options.lng = v[0]);
    }
    (!this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        "init: no languageDetector is used and no lng is defined",
      ),
      [
        "getResource",
        "hasResourceBundle",
        "getResourceBundle",
        "getDataByLanguage",
      ].forEach((v) => {
        this[v] = function () {
          return i.store[v](...arguments);
        };
      }),
      [
        "addResource",
        "addResources",
        "addResourceBundle",
        "removeResourceBundle",
      ].forEach((v) => {
        this[v] = function () {
          return (i.store[v](...arguments), i);
        };
      }));
    const g = Ei(),
      w = () => {
        const v = (k, x) => {
          ((this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                "init: i18next is already initialized. You should call init just once!",
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log("initialized", this.options),
            this.emit("initialized", this.options),
            g.resolve(x),
            s(k, x));
        };
        if (this.languages && !this.isInitialized)
          return v(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, v);
      };
    return (
      this.options.resources || !this.options.initAsync
        ? w()
        : setTimeout(w, 0),
      g
    );
  }
  loadResources(i) {
    var c, d;
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xo;
    const f = xe(i) ? i : this.language;
    if (
      (typeof i == "function" && (s = i),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        (f == null ? void 0 : f.toLowerCase()) === "cimode" &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return s();
      const h = [],
        g = (w) => {
          if (!w || w === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(w).forEach((k) => {
            k !== "cimode" && h.indexOf(k) < 0 && h.push(k);
          });
        };
      (f
        ? g(f)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((v) => g(v)),
        (d = (c = this.options.preload) == null ? void 0 : c.forEach) == null ||
          d.call(c, (w) => g(w)),
        this.services.backendConnector.load(h, this.options.ns, (w) => {
          (!w &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            s(w));
        }));
    } else s(null);
  }
  reloadResources(i, r, s) {
    const f = Ei();
    return (
      typeof i == "function" && ((s = i), (i = void 0)),
      typeof r == "function" && ((s = r), (r = void 0)),
      i || (i = this.languages),
      r || (r = this.options.ns),
      s || (s = Xo),
      this.services.backendConnector.reload(i, r, (c) => {
        (f.resolve(), s(c));
      }),
      f
    );
  }
  use(i) {
    if (!i)
      throw new Error(
        "You are passing an undefined module! Please check the object you are passing to i18next.use()",
      );
    if (!i.type)
      throw new Error(
        "You are passing a wrong module! Please check the object you are passing to i18next.use()",
      );
    return (
      i.type === "backend" && (this.modules.backend = i),
      (i.type === "logger" || (i.log && i.warn && i.error)) &&
        (this.modules.logger = i),
      i.type === "languageDetector" && (this.modules.languageDetector = i),
      i.type === "i18nFormat" && (this.modules.i18nFormat = i),
      i.type === "postProcessor" && od.addPostProcessor(i),
      i.type === "formatter" && (this.modules.formatter = i),
      i.type === "3rdParty" && this.modules.external.push(i),
      this
    );
  }
  setResolvedLanguage(i) {
    if (!(!i || !this.languages) && !(["cimode", "dev"].indexOf(i) > -1))
      for (let r = 0; r < this.languages.length; r++) {
        const s = this.languages[r];
        if (
          !(["cimode", "dev"].indexOf(s) > -1) &&
          this.store.hasLanguageSomeTranslations(s)
        ) {
          this.resolvedLanguage = s;
          break;
        }
      }
  }
  changeLanguage(i, r) {
    var s = this;
    this.isLanguageChangingTo = i;
    const f = Ei();
    this.emit("languageChanging", i);
    const c = (g) => {
        ((this.language = g),
          (this.languages = this.services.languageUtils.toResolveHierarchy(g)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(g));
      },
      d = (g, w) => {
        (w
          ? (c(w),
            this.translator.changeLanguage(w),
            (this.isLanguageChangingTo = void 0),
            this.emit("languageChanged", w),
            this.logger.log("languageChanged", w))
          : (this.isLanguageChangingTo = void 0),
          f.resolve(function () {
            return s.t(...arguments);
          }),
          r &&
            r(g, function () {
              return s.t(...arguments);
            }));
      },
      h = (g) => {
        var v, k;
        !i && !g && this.services.languageDetector && (g = []);
        const w = xe(g)
          ? g
          : this.services.languageUtils.getBestMatchFromCodes(g);
        (w &&
          (this.language || c(w),
          this.translator.language || this.translator.changeLanguage(w),
          (k =
            (v = this.services.languageDetector) == null
              ? void 0
              : v.cacheUserLanguage) == null || k.call(v, w)),
          this.loadResources(w, (x) => {
            d(x, w);
          }));
      };
    return (
      !i &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? h(this.services.languageDetector.detect())
        : !i &&
            this.services.languageDetector &&
            this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(h)
            : this.services.languageDetector.detect(h)
          : h(i),
      f
    );
  }
  getFixedT(i, r, s) {
    var f = this;
    const c = function (d, h) {
      let g;
      if (typeof h != "object") {
        for (
          var w = arguments.length, v = new Array(w > 2 ? w - 2 : 0), k = 2;
          k < w;
          k++
        )
          v[k - 2] = arguments[k];
        g = f.options.overloadTranslationOptionHandler([d, h].concat(v));
      } else g = { ...h };
      ((g.lng = g.lng || c.lng),
        (g.lngs = g.lngs || c.lngs),
        (g.ns = g.ns || c.ns),
        g.keyPrefix !== "" && (g.keyPrefix = g.keyPrefix || s || c.keyPrefix));
      const x = f.options.keySeparator || ".";
      let D;
      return (
        g.keyPrefix && Array.isArray(d)
          ? (D = d.map((A) => `${g.keyPrefix}${x}${A}`))
          : (D = g.keyPrefix ? `${g.keyPrefix}${x}${d}` : d),
        f.t(D, g)
      );
    };
    return (
      xe(i) ? (c.lng = i) : (c.lngs = i),
      (c.ns = r),
      (c.keyPrefix = s),
      c
    );
  }
  t() {
    var f;
    for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++)
      r[s] = arguments[s];
    return (f = this.translator) == null ? void 0 : f.translate(...r);
  }
  exists() {
    var f;
    for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++)
      r[s] = arguments[s];
    return (f = this.translator) == null ? void 0 : f.exists(...r);
  }
  setDefaultNamespace(i) {
    this.options.defaultNS = i;
  }
  hasLoadedNamespace(i) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18next was not initialized",
          this.languages,
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18n.languages were undefined or empty",
          this.languages,
        ),
        !1
      );
    const s = r.lng || this.resolvedLanguage || this.languages[0],
      f = this.options ? this.options.fallbackLng : !1,
      c = this.languages[this.languages.length - 1];
    if (s.toLowerCase() === "cimode") return !0;
    const d = (h, g) => {
      const w = this.services.backendConnector.state[`${h}|${g}`];
      return w === -1 || w === 0 || w === 2;
    };
    if (r.precheck) {
      const h = r.precheck(this, d);
      if (h !== void 0) return h;
    }
    return !!(
      this.hasResourceBundle(s, i) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (d(s, i) && (!f || d(c, i)))
    );
  }
  loadNamespaces(i, r) {
    const s = Ei();
    return this.options.ns
      ? (xe(i) && (i = [i]),
        i.forEach((f) => {
          this.options.ns.indexOf(f) < 0 && this.options.ns.push(f);
        }),
        this.loadResources((f) => {
          (s.resolve(), r && r(f));
        }),
        s)
      : (r && r(), Promise.resolve());
  }
  loadLanguages(i, r) {
    const s = Ei();
    xe(i) && (i = [i]);
    const f = this.options.preload || [],
      c = i.filter(
        (d) =>
          f.indexOf(d) < 0 && this.services.languageUtils.isSupportedCode(d),
      );
    return c.length
      ? ((this.options.preload = f.concat(c)),
        this.loadResources((d) => {
          (s.resolve(), r && r(d));
        }),
        s)
      : (r && r(), Promise.resolve());
  }
  dir(i) {
    var f, c;
    if (
      (i ||
        (i =
          this.resolvedLanguage ||
          (((f = this.languages) == null ? void 0 : f.length) > 0
            ? this.languages[0]
            : this.language)),
      !i)
    )
      return "rtl";
    const r = [
        "ar",
        "shu",
        "sqr",
        "ssh",
        "xaa",
        "yhd",
        "yud",
        "aao",
        "abh",
        "abv",
        "acm",
        "acq",
        "acw",
        "acx",
        "acy",
        "adf",
        "ads",
        "aeb",
        "aec",
        "afb",
        "ajp",
        "apc",
        "apd",
        "arb",
        "arq",
        "ars",
        "ary",
        "arz",
        "auz",
        "avl",
        "ayh",
        "ayl",
        "ayn",
        "ayp",
        "bbz",
        "pga",
        "he",
        "iw",
        "ps",
        "pbt",
        "pbu",
        "pst",
        "prp",
        "prd",
        "ug",
        "ur",
        "ydd",
        "yds",
        "yih",
        "ji",
        "yi",
        "hbo",
        "men",
        "xmn",
        "fa",
        "jpr",
        "peo",
        "pes",
        "prs",
        "dv",
        "sam",
        "ckb",
      ],
      s =
        ((c = this.services) == null ? void 0 : c.languageUtils) ||
        new Lf(Ff());
    return r.indexOf(s.getLanguagePartFromCode(i)) > -1 ||
      i.toLowerCase().indexOf("-arab") > 1
      ? "rtl"
      : "ltr";
  }
  static createInstance() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    return new Fi(i, r);
  }
  cloneInstance() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xo;
    const s = i.forkResourceStore;
    s && delete i.forkResourceStore;
    const f = { ...this.options, ...i, isClone: !0 },
      c = new Fi(f);
    if (
      ((i.debug !== void 0 || i.prefix !== void 0) &&
        (c.logger = c.logger.clone(i)),
      ["store", "services", "language"].forEach((h) => {
        c[h] = this[h];
      }),
      (c.services = { ...this.services }),
      (c.services.utils = { hasLoadedNamespace: c.hasLoadedNamespace.bind(c) }),
      s)
    ) {
      const h = Object.keys(this.store.data).reduce(
        (g, w) => (
          (g[w] = { ...this.store.data[w] }),
          Object.keys(g[w]).reduce((v, k) => ((v[k] = { ...g[w][k] }), v), {})
        ),
        {},
      );
      ((c.store = new Tf(h, f)), (c.services.resourceStore = c.store));
    }
    return (
      (c.translator = new na(c.services, f)),
      c.translator.on("*", function (h) {
        for (
          var g = arguments.length, w = new Array(g > 1 ? g - 1 : 0), v = 1;
          v < g;
          v++
        )
          w[v - 1] = arguments[v];
        c.emit(h, ...w);
      }),
      c.init(f, r),
      (c.translator.options = f),
      (c.translator.backendConnector.services.utils = {
        hasLoadedNamespace: c.hasLoadedNamespace.bind(c),
      }),
      c
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const Ze = Fi.createInstance();
Ze.createInstance = Fi.createInstance;
Ze.createInstance;
Ze.dir;
Ze.init;
Ze.loadResources;
Ze.reloadResources;
Ze.use;
Ze.changeLanguage;
Ze.getFixedT;
Ze.t;
Ze.exists;
Ze.setDefaultNamespace;
Ze.hasLoadedNamespace;
Ze.loadNamespaces;
Ze.loadLanguages;
const { slice: ag, forEach: sg } = [];
function lg(o) {
  return (
    sg.call(ag.call(arguments, 1), (i) => {
      if (i) for (const r in i) o[r] === void 0 && (o[r] = i[r]);
    }),
    o
  );
}
const Af = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  ug = function (o, i) {
    const s =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : { path: "/" },
      f = encodeURIComponent(i);
    let c = `${o}=${f}`;
    if (s.maxAge > 0) {
      const d = s.maxAge - 0;
      if (Number.isNaN(d)) throw new Error("maxAge should be a Number");
      c += `; Max-Age=${Math.floor(d)}`;
    }
    if (s.domain) {
      if (!Af.test(s.domain)) throw new TypeError("option domain is invalid");
      c += `; Domain=${s.domain}`;
    }
    if (s.path) {
      if (!Af.test(s.path)) throw new TypeError("option path is invalid");
      c += `; Path=${s.path}`;
    }
    if (s.expires) {
      if (typeof s.expires.toUTCString != "function")
        throw new TypeError("option expires is invalid");
      c += `; Expires=${s.expires.toUTCString()}`;
    }
    if (
      (s.httpOnly && (c += "; HttpOnly"),
      s.secure && (c += "; Secure"),
      s.sameSite)
    )
      switch (
        typeof s.sameSite == "string" ? s.sameSite.toLowerCase() : s.sameSite
      ) {
        case !0:
          c += "; SameSite=Strict";
          break;
        case "lax":
          c += "; SameSite=Lax";
          break;
        case "strict":
          c += "; SameSite=Strict";
          break;
        case "none":
          c += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    return c;
  },
  bf = {
    create(o, i, r, s) {
      let f =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: "/", sameSite: "strict" };
      (r &&
        ((f.expires = new Date()),
        f.expires.setTime(f.expires.getTime() + r * 60 * 1e3)),
        s && (f.domain = s),
        (document.cookie = ug(o, encodeURIComponent(i), f)));
    },
    read(o) {
      const i = `${o}=`,
        r = document.cookie.split(";");
      for (let s = 0; s < r.length; s++) {
        let f = r[s];
        for (; f.charAt(0) === " "; ) f = f.substring(1, f.length);
        if (f.indexOf(i) === 0) return f.substring(i.length, f.length);
      }
      return null;
    },
    remove(o) {
      this.create(o, "", -1);
    },
  };
var cg = {
    name: "cookie",
    lookup(o) {
      let { lookupCookie: i } = o;
      if (i && typeof document < "u") return bf.read(i) || void 0;
    },
    cacheUserLanguage(o, i) {
      let {
        lookupCookie: r,
        cookieMinutes: s,
        cookieDomain: f,
        cookieOptions: c,
      } = i;
      r && typeof document < "u" && bf.create(r, o, s, f, c);
    },
  },
  fg = {
    name: "querystring",
    lookup(o) {
      var s;
      let { lookupQuerystring: i } = o,
        r;
      if (typeof window < "u") {
        let { search: f } = window.location;
        !window.location.search &&
          ((s = window.location.hash) == null ? void 0 : s.indexOf("?")) > -1 &&
          (f = window.location.hash.substring(
            window.location.hash.indexOf("?"),
          ));
        const d = f.substring(1).split("&");
        for (let h = 0; h < d.length; h++) {
          const g = d[h].indexOf("=");
          g > 0 && d[h].substring(0, g) === i && (r = d[h].substring(g + 1));
        }
      }
      return r;
    },
  };
let Ci = null;
const If = () => {
  if (Ci !== null) return Ci;
  try {
    Ci = window !== "undefined" && window.localStorage !== null;
    const o = "i18next.translate.boo";
    (window.localStorage.setItem(o, "foo"), window.localStorage.removeItem(o));
  } catch {
    Ci = !1;
  }
  return Ci;
};
var dg = {
  name: "localStorage",
  lookup(o) {
    let { lookupLocalStorage: i } = o;
    if (i && If()) return window.localStorage.getItem(i) || void 0;
  },
  cacheUserLanguage(o, i) {
    let { lookupLocalStorage: r } = i;
    r && If() && window.localStorage.setItem(r, o);
  },
};
let Ti = null;
const jf = () => {
  if (Ti !== null) return Ti;
  try {
    Ti = window !== "undefined" && window.sessionStorage !== null;
    const o = "i18next.translate.boo";
    (window.sessionStorage.setItem(o, "foo"),
      window.sessionStorage.removeItem(o));
  } catch {
    Ti = !1;
  }
  return Ti;
};
var pg = {
    name: "sessionStorage",
    lookup(o) {
      let { lookupSessionStorage: i } = o;
      if (i && jf()) return window.sessionStorage.getItem(i) || void 0;
    },
    cacheUserLanguage(o, i) {
      let { lookupSessionStorage: r } = i;
      r && jf() && window.sessionStorage.setItem(r, o);
    },
  },
  hg = {
    name: "navigator",
    lookup(o) {
      const i = [];
      if (typeof navigator < "u") {
        const { languages: r, userLanguage: s, language: f } = navigator;
        if (r) for (let c = 0; c < r.length; c++) i.push(r[c]);
        (s && i.push(s), f && i.push(f));
      }
      return i.length > 0 ? i : void 0;
    },
  },
  gg = {
    name: "htmlTag",
    lookup(o) {
      let { htmlTag: i } = o,
        r;
      const s = i || (typeof document < "u" ? document.documentElement : null);
      return (
        s &&
          typeof s.getAttribute == "function" &&
          (r = s.getAttribute("lang")),
        r
      );
    },
  },
  mg = {
    name: "path",
    lookup(o) {
      var f;
      let { lookupFromPathIndex: i } = o;
      if (typeof window > "u") return;
      const r = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      return Array.isArray(r)
        ? (f = r[typeof i == "number" ? i : 0]) == null
          ? void 0
          : f.replace("/", "")
        : void 0;
    },
  },
  yg = {
    name: "subdomain",
    lookup(o) {
      var f, c;
      let { lookupFromSubdomainIndex: i } = o;
      const r = typeof i == "number" ? i + 1 : 1,
        s =
          typeof window < "u" &&
          ((c = (f = window.location) == null ? void 0 : f.hostname) == null
            ? void 0
            : c.match(
                /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i,
              ));
      if (s) return s[r];
    },
  };
let ad = !1;
try {
  (document.cookie, (ad = !0));
} catch {}
const sd = [
  "querystring",
  "cookie",
  "localStorage",
  "sessionStorage",
  "navigator",
  "htmlTag",
];
ad || sd.splice(1, 1);
const vg = () => ({
  order: sd,
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
  caches: ["localStorage"],
  excludeCacheFor: ["cimode"],
  convertDetectedLanguage: (o) => o,
});
class ld {
  constructor(i) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ((this.type = "languageDetector"), (this.detectors = {}), this.init(i, r));
  }
  init() {
    let i =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : { languageUtils: {} },
      r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    ((this.services = i),
      (this.options = lg(r, this.options || {}, vg())),
      typeof this.options.convertDetectedLanguage == "string" &&
        this.options.convertDetectedLanguage.indexOf("15897") > -1 &&
        (this.options.convertDetectedLanguage = (f) => f.replace("-", "_")),
      this.options.lookupFromUrlIndex &&
        (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
      (this.i18nOptions = s),
      this.addDetector(cg),
      this.addDetector(fg),
      this.addDetector(dg),
      this.addDetector(pg),
      this.addDetector(hg),
      this.addDetector(gg),
      this.addDetector(mg),
      this.addDetector(yg));
  }
  addDetector(i) {
    return ((this.detectors[i.name] = i), this);
  }
  detect() {
    let i =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : this.options.order,
      r = [];
    return (
      i.forEach((s) => {
        if (this.detectors[s]) {
          let f = this.detectors[s].lookup(this.options);
          (f && typeof f == "string" && (f = [f]), f && (r = r.concat(f)));
        }
      }),
      (r = r.map((s) => this.options.convertDetectedLanguage(s))),
      this.services &&
      this.services.languageUtils &&
      this.services.languageUtils.getBestMatchFromCodes
        ? r
        : r.length > 0
          ? r[0]
          : null
    );
  }
  cacheUserLanguage(i) {
    let r =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : this.options.caches;
    r &&
      ((this.options.excludeCacheFor &&
        this.options.excludeCacheFor.indexOf(i) > -1) ||
        r.forEach((s) => {
          this.detectors[s] &&
            this.detectors[s].cacheUserLanguage(i, this.options);
        }));
  }
}
ld.type = "languageDetector";
var nl, Bf;
function wg() {
  return (
    Bf ||
      ((Bf = 1),
      (nl = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      })),
    nl
  );
}
var kg = wg();
const Sg = kl(kg);
var xg = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function zf(o) {
  var i = { type: "tag", name: "", voidElement: !1, attrs: {}, children: [] },
    r = o.match(/<\/?([^\s]+?)[/\s>]/);
  if (
    r &&
    ((i.name = r[1]),
    (Sg[r[1]] || o.charAt(o.length - 2) === "/") && (i.voidElement = !0),
    i.name.startsWith("!--"))
  ) {
    var s = o.indexOf("-->");
    return { type: "comment", comment: s !== -1 ? o.slice(4, s) : "" };
  }
  for (var f = new RegExp(xg), c = null; (c = f.exec(o)) !== null; )
    if (c[0].trim())
      if (c[1]) {
        var d = c[1].trim(),
          h = [d, ""];
        (d.indexOf("=") > -1 && (h = d.split("=")),
          (i.attrs[h[0]] = h[1]),
          f.lastIndex--);
      } else
        c[2] && (i.attrs[c[2]] = c[3].trim().substring(1, c[3].length - 1));
  return i;
}
var _g = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
  Eg = /^\s*$/,
  Cg = Object.create(null);
function ud(o, i) {
  switch (i.type) {
    case "text":
      return o + i.content;
    case "tag":
      return (
        (o +=
          "<" +
          i.name +
          (i.attrs
            ? (function (r) {
                var s = [];
                for (var f in r) s.push(f + '="' + r[f] + '"');
                return s.length ? " " + s.join(" ") : "";
              })(i.attrs)
            : "") +
          (i.voidElement ? "/>" : ">")),
        i.voidElement ? o : o + i.children.reduce(ud, "") + "</" + i.name + ">"
      );
    case "comment":
      return o + "<!--" + i.comment + "-->";
  }
}
var Tg = {
  parse: function (o, i) {
    (i || (i = {}), i.components || (i.components = Cg));
    var r,
      s = [],
      f = [],
      c = -1,
      d = !1;
    if (o.indexOf("<") !== 0) {
      var h = o.indexOf("<");
      s.push({ type: "text", content: h === -1 ? o : o.substring(0, h) });
    }
    return (
      o.replace(_g, function (g, w) {
        if (d) {
          if (g !== "</" + r.name + ">") return;
          d = !1;
        }
        var v,
          k = g.charAt(1) !== "/",
          x = g.startsWith("<!--"),
          D = w + g.length,
          A = o.charAt(D);
        if (x) {
          var O = zf(g);
          return c < 0 ? (s.push(O), s) : ((v = f[c]).children.push(O), s);
        }
        if (
          (k &&
            (c++,
            (r = zf(g)).type === "tag" &&
              i.components[r.name] &&
              ((r.type = "component"), (d = !0)),
            r.voidElement ||
              d ||
              !A ||
              A === "<" ||
              r.children.push({
                type: "text",
                content: o.slice(D, o.indexOf("<", D)),
              }),
            c === 0 && s.push(r),
            (v = f[c - 1]) && v.children.push(r),
            (f[c] = r)),
          (!k || r.voidElement) &&
            (c > -1 &&
              (r.voidElement || r.name === g.slice(2, -1)) &&
              (c--, (r = c === -1 ? s : f[c])),
            !d && A !== "<" && A))
        ) {
          v = c === -1 ? s : f[c].children;
          var L = o.indexOf("<", D),
            I = o.slice(D, L === -1 ? void 0 : L);
          (Eg.test(I) && (I = " "),
            ((L > -1 && c + v.length >= 0) || I !== " ") &&
              v.push({ type: "text", content: I }));
        }
      }),
      s
    );
  },
  stringify: function (o) {
    return o.reduce(function (i, r) {
      return i + ud("", r);
    }, "");
  },
};
const qo = (o, i, r, s) => {
    var c, d, h, g;
    const f = [r, { code: i, ...(s || {}) }];
    if (
      (d = (c = o == null ? void 0 : o.services) == null ? void 0 : c.logger) !=
        null &&
      d.forward
    )
      return o.services.logger.forward(f, "warn", "react-i18next::", !0);
    (jt(f[0]) && (f[0] = `react-i18next:: ${f[0]}`),
      (g = (h = o == null ? void 0 : o.services) == null ? void 0 : h.logger) !=
        null && g.warn
        ? o.services.logger.warn(...f)
        : console != null && console.warn && console.warn(...f));
  },
  Mf = {},
  Di = (o, i, r, s) => {
    (jt(r) && Mf[r]) || (jt(r) && (Mf[r] = new Date()), qo(o, i, r, s));
  },
  cd = (o, i) => () => {
    if (o.isInitialized) i();
    else {
      const r = () => {
        (setTimeout(() => {
          o.off("initialized", r);
        }, 0),
          i());
      };
      o.on("initialized", r);
    }
  },
  fl = (o, i, r) => {
    o.loadNamespaces(i, cd(o, r));
  },
  Vf = (o, i, r, s) => {
    if (
      (jt(r) && (r = [r]),
      o.options.preload && o.options.preload.indexOf(i) > -1)
    )
      return fl(o, r, s);
    (r.forEach((f) => {
      o.options.ns.indexOf(f) < 0 && o.options.ns.push(f);
    }),
      o.loadLanguages(i, cd(o, s)));
  },
  Ng = (o, i, r = {}) =>
    !i.languages || !i.languages.length
      ? (Di(i, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
          languages: i.languages,
        }),
        !0)
      : i.hasLoadedNamespace(o, {
          lng: r.lng,
          precheck: (s, f) => {
            var c;
            if (
              ((c = r.bindI18n) == null
                ? void 0
                : c.indexOf("languageChanging")) > -1 &&
              s.services.backendConnector.backend &&
              s.isLanguageChangingTo &&
              !f(s.isLanguageChangingTo, o)
            )
              return !1;
          },
        }),
  jt = (o) => typeof o == "string",
  tr = (o) => typeof o == "object" && o !== null,
  Lg =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  Rg = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/",
  },
  Og = (o) => Rg[o],
  Pg = (o) => o.replace(Lg, Og);
let dl = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Pg,
};
const Fg = (o = {}) => {
    dl = { ...dl, ...o };
  },
  fd = () => dl;
let dd;
const Dg = (o) => {
    dd = o;
  },
  xl = () => dd,
  rl = (o, i) => {
    var s;
    if (!o) return !1;
    const r = ((s = o.props) == null ? void 0 : s.children) ?? o.children;
    return i ? r.length > 0 : !!r;
  },
  il = (o) => {
    var r, s;
    if (!o) return [];
    const i = ((r = o.props) == null ? void 0 : r.children) ?? o.children;
    return (s = o.props) != null && s.i18nIsDynamicList ? Dr(i) : i;
  },
  Ag = (o) => Array.isArray(o) && o.every(le.isValidElement),
  Dr = (o) => (Array.isArray(o) ? o : [o]),
  bg = (o, i) => {
    const r = { ...i };
    return ((r.props = Object.assign(o.props, i.props)), r);
  },
  pd = (o, i, r, s) => {
    if (!o) return "";
    let f = "";
    const c = Dr(o),
      d =
        i != null && i.transSupportBasicHtmlNodes
          ? (i.transKeepBasicHtmlNodesFor ?? [])
          : [];
    return (
      c.forEach((h, g) => {
        if (jt(h)) {
          f += `${h}`;
          return;
        }
        if (le.isValidElement(h)) {
          const { props: w, type: v } = h,
            k = Object.keys(w).length,
            x = d.indexOf(v) > -1,
            D = w.children;
          if (!D && x && !k) {
            f += `<${v}/>`;
            return;
          }
          if ((!D && (!x || k)) || w.i18nIsDynamicList) {
            f += `<${g}></${g}>`;
            return;
          }
          if (x && k === 1 && jt(D)) {
            f += `<${v}>${D}</${v}>`;
            return;
          }
          const A = pd(D, i, r, s);
          f += `<${g}>${A}</${g}>`;
          return;
        }
        if (h === null) {
          qo(r, "TRANS_NULL_VALUE", "Passed in a null value as child", {
            i18nKey: s,
          });
          return;
        }
        if (tr(h)) {
          const { format: w, ...v } = h,
            k = Object.keys(v);
          if (k.length === 1) {
            const x = w ? `${k[0]}, ${w}` : k[0];
            f += `{{${x}}}`;
            return;
          }
          qo(
            r,
            "TRANS_INVALID_OBJ",
            "Invalid child - Object should only have keys {{ value, format }} (format is optional).",
            { i18nKey: s, child: h },
          );
          return;
        }
        qo(
          r,
          "TRANS_INVALID_VAR",
          "Passed in a variable like {number} - pass variables for interpolation as full objects like {{number}}.",
          { i18nKey: s, child: h },
        );
      }),
      f
    );
  },
  Ig = (o, i, r, s, f, c) => {
    if (i === "") return [];
    const d = s.transKeepBasicHtmlNodesFor || [],
      h = i && new RegExp(d.map((L) => `<${L}`).join("|")).test(i);
    if (!o && !h && !c) return [i];
    const g = {},
      w = (L) => {
        Dr(L).forEach((R) => {
          jt(R) ||
            (rl(R)
              ? w(il(R))
              : tr(R) && !le.isValidElement(R) && Object.assign(g, R));
        });
      };
    w(o);
    const v = Tg.parse(`<0>${i}</0>`),
      k = { ...g, ...f },
      x = (L, I, R) => {
        var $;
        const z = il(L),
          j = A(z, I.children, R);
        return (Ag(z) && j.length === 0) ||
          (($ = L.props) != null && $.i18nIsDynamicList)
          ? z
          : j;
      },
      D = (L, I, R, z, j) => {
        L.dummy
          ? ((L.children = I),
            R.push(le.cloneElement(L, { key: z }, j ? void 0 : I)))
          : R.push(
              ...le.Children.map([L], ($) => {
                const H = { ...$.props };
                return (
                  delete H.i18nIsDynamicList,
                  le.createElement(
                    $.type,
                    { ...H, key: z, ref: $.ref },
                    j ? null : I,
                  )
                );
              }),
            );
      },
      A = (L, I, R) => {
        const z = Dr(L);
        return Dr(I).reduce(($, H, W) => {
          var ae, de;
          const q =
            ((de = (ae = H.children) == null ? void 0 : ae[0]) == null
              ? void 0
              : de.content) &&
            r.services.interpolator.interpolate(
              H.children[0].content,
              k,
              r.language,
            );
          if (H.type === "tag") {
            let pe = z[parseInt(H.name, 10)];
            (R.length === 1 && !pe && (pe = R[0][H.name]), pe || (pe = {}));
            const G =
                Object.keys(H.attrs).length !== 0
                  ? bg({ props: H.attrs }, pe)
                  : pe,
              ie = le.isValidElement(G),
              he = ie && rl(H, !0) && !H.voidElement,
              _e = h && tr(G) && G.dummy && !ie,
              Te = tr(o) && Object.hasOwnProperty.call(o, H.name);
            if (jt(G)) {
              const ce = r.services.interpolator.interpolate(G, k, r.language);
              $.push(ce);
            } else if (rl(G) || he) {
              const ce = x(G, H, R);
              D(G, ce, $, W);
            } else if (_e) {
              const ce = A(z, H.children, R);
              D(G, ce, $, W);
            } else if (Number.isNaN(parseFloat(H.name)))
              if (Te) {
                const ce = x(G, H, R);
                D(G, ce, $, W, H.voidElement);
              } else if (s.transSupportBasicHtmlNodes && d.indexOf(H.name) > -1)
                if (H.voidElement)
                  $.push(le.createElement(H.name, { key: `${H.name}-${W}` }));
                else {
                  const ce = A(z, H.children, R);
                  $.push(
                    le.createElement(H.name, { key: `${H.name}-${W}` }, ce),
                  );
                }
              else if (H.voidElement) $.push(`<${H.name} />`);
              else {
                const ce = A(z, H.children, R);
                $.push(`<${H.name}>${ce}</${H.name}>`);
              }
            else if (tr(G) && !ie) {
              const ce = H.children[0] ? q : null;
              ce && $.push(ce);
            } else D(G, q, $, W, H.children.length !== 1 || !q);
          } else if (H.type === "text") {
            const pe = s.transWrapTextNodes,
              G = c
                ? s.unescape(
                    r.services.interpolator.interpolate(
                      H.content,
                      k,
                      r.language,
                    ),
                  )
                : r.services.interpolator.interpolate(H.content, k, r.language);
            pe
              ? $.push(le.createElement(pe, { key: `${H.name}-${W}` }, G))
              : $.push(G);
          }
          return $;
        }, []);
      },
      O = A([{ dummy: !0, children: o || [] }], v, Dr(o || []));
    return il(O[0]);
  },
  hd = (o, i, r) => {
    const s = o.key || i,
      f = le.cloneElement(o, { key: s });
    if (
      !f.props ||
      !f.props.children ||
      (r.indexOf(`${i}/>`) < 0 && r.indexOf(`${i} />`) < 0)
    )
      return f;
    function c() {
      return le.createElement(le.Fragment, null, f);
    }
    return le.createElement(c);
  },
  jg = (o, i) => o.map((r, s) => hd(r, s, i)),
  Bg = (o, i) => {
    const r = {};
    return (
      Object.keys(o).forEach((s) => {
        Object.assign(r, { [s]: hd(o[s], s, i) });
      }),
      r
    );
  },
  zg = (o, i, r, s) =>
    o
      ? Array.isArray(o)
        ? jg(o, i)
        : tr(o)
          ? Bg(o, i)
          : (Di(
              r,
              "TRANS_INVALID_COMPONENTS",
              '<Trans /> "components" prop expects an object or array',
              { i18nKey: s },
            ),
            null)
      : null;
function Mg({
  children: o,
  count: i,
  parent: r,
  i18nKey: s,
  context: f,
  tOptions: c = {},
  values: d,
  defaults: h,
  components: g,
  ns: w,
  i18n: v,
  t: k,
  shouldUnescape: x,
  ...D
}) {
  var G, ie, he, _e, Te, ce;
  const A = v || xl();
  if (!A)
    return (
      Di(
        A,
        "NO_I18NEXT_INSTANCE",
        "Trans: You need to pass in an i18next instance using i18nextReactModule",
        { i18nKey: s },
      ),
      o
    );
  const O = k || A.t.bind(A) || ((V) => V),
    L = { ...fd(), ...((G = A.options) == null ? void 0 : G.react) };
  let I = w || O.ns || ((ie = A.options) == null ? void 0 : ie.defaultNS);
  I = jt(I) ? [I] : I || ["translation"];
  const R = pd(o, L, A, s),
    z = h || R || L.transEmptyNodeValue || s,
    { hashTransKey: j } = L,
    $ = s || (j ? j(R || z) : R || z);
  (_e = (he = A.options) == null ? void 0 : he.interpolation) != null &&
    _e.defaultVariables &&
    (d =
      d && Object.keys(d).length > 0
        ? { ...d, ...A.options.interpolation.defaultVariables }
        : { ...A.options.interpolation.defaultVariables });
  const H =
      d ||
      (i !== void 0 &&
        !(
          (ce = (Te = A.options) == null ? void 0 : Te.interpolation) != null &&
          ce.alwaysFormat
        )) ||
      !o
        ? c.interpolation
        : {
            interpolation: { ...c.interpolation, prefix: "#$?", suffix: "?$#" },
          },
    W = {
      ...c,
      context: f || c.context,
      count: i,
      ...d,
      ...H,
      defaultValue: z,
      ns: I,
    },
    q = $ ? O($, W) : z,
    ae = zg(g, q, A, s),
    de = Ig(ae || o, q, A, L, W, x),
    pe = r ?? L.defaultTransParent;
  return pe ? le.createElement(pe, D, de) : de;
}
const Vg = {
    type: "3rdParty",
    init(o) {
      (Fg(o.options.react), Dg(o));
    },
  },
  gd = le.createContext();
class Kg {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(i) {
    i.forEach((r) => {
      this.usedNamespaces[r] || (this.usedNamespaces[r] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
function $g({
  children: o,
  count: i,
  parent: r,
  i18nKey: s,
  context: f,
  tOptions: c = {},
  values: d,
  defaults: h,
  components: g,
  ns: w,
  i18n: v,
  t: k,
  shouldUnescape: x,
  ...D
}) {
  var R;
  const { i18n: A, defaultNS: O } = le.useContext(gd) || {},
    L = v || A || xl(),
    I = k || (L == null ? void 0 : L.t.bind(L));
  return Mg({
    children: o,
    count: i,
    parent: r,
    i18nKey: s,
    context: f,
    tOptions: c,
    values: d,
    defaults: h,
    components: g,
    ns:
      w ||
      (I == null ? void 0 : I.ns) ||
      O ||
      ((R = L == null ? void 0 : L.options) == null ? void 0 : R.defaultNS),
    i18n: L,
    t: k,
    shouldUnescape: x,
    ...D,
  });
}
const Ug = (o, i) => {
    const r = le.useRef();
    return (
      le.useEffect(() => {
        r.current = o;
      }, [o, i]),
      r.current
    );
  },
  md = (o, i, r, s) => o.getFixedT(i, r, s),
  Hg = (o, i, r, s) => le.useCallback(md(o, i, r, s), [o, i, r, s]),
  bi = (o, i = {}) => {
    var j, $, H, W;
    const { i18n: r } = i,
      { i18n: s, defaultNS: f } = le.useContext(gd) || {},
      c = r || s || xl();
    if ((c && !c.reportNamespaces && (c.reportNamespaces = new Kg()), !c)) {
      Di(
        c,
        "NO_I18NEXT_INSTANCE",
        "useTranslation: You will need to pass in an i18next instance by using initReactI18next",
      );
      const q = (de, pe) =>
          jt(pe)
            ? pe
            : tr(pe) && jt(pe.defaultValue)
              ? pe.defaultValue
              : Array.isArray(de)
                ? de[de.length - 1]
                : de,
        ae = [q, {}, !1];
      return ((ae.t = q), (ae.i18n = {}), (ae.ready = !1), ae);
    }
    (j = c.options.react) != null &&
      j.wait &&
      Di(
        c,
        "DEPRECATED_OPTION",
        "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.",
      );
    const d = { ...fd(), ...c.options.react, ...i },
      { useSuspense: h, keyPrefix: g } = d;
    let w = f || (($ = c.options) == null ? void 0 : $.defaultNS);
    ((w = jt(w) ? [w] : w || ["translation"]),
      (W = (H = c.reportNamespaces).addUsedNamespaces) == null || W.call(H, w));
    const v =
        (c.isInitialized || c.initializedStoreOnce) &&
        w.every((q) => Ng(q, c, d)),
      k = Hg(c, i.lng || null, d.nsMode === "fallback" ? w : w[0], g),
      x = () => k,
      D = () => md(c, i.lng || null, d.nsMode === "fallback" ? w : w[0], g),
      [A, O] = le.useState(x);
    let L = w.join();
    i.lng && (L = `${i.lng}${L}`);
    const I = Ug(L),
      R = le.useRef(!0);
    (le.useEffect(() => {
      const { bindI18n: q, bindI18nStore: ae } = d;
      ((R.current = !0),
        !v &&
          !h &&
          (i.lng
            ? Vf(c, i.lng, w, () => {
                R.current && O(D);
              })
            : fl(c, w, () => {
                R.current && O(D);
              })),
        v && I && I !== L && R.current && O(D));
      const de = () => {
        R.current && O(D);
      };
      return (
        q && (c == null || c.on(q, de)),
        ae && (c == null || c.store.on(ae, de)),
        () => {
          ((R.current = !1),
            c && (q == null || q.split(" ").forEach((pe) => c.off(pe, de))),
            ae && c && ae.split(" ").forEach((pe) => c.store.off(pe, de)));
        }
      );
    }, [c, L]),
      le.useEffect(() => {
        R.current && v && O(x);
      }, [c, g, v]));
    const z = [A, c, v];
    if (((z.t = A), (z.i18n = c), (z.ready = v), v || (!v && !h))) return z;
    throw new Promise((q) => {
      i.lng ? Vf(c, i.lng, w, () => q()) : fl(c, w, () => q());
    });
  },
  Wg = {
    lt: {
      translation: {
        app: { title: "Apdailos generatoriai" },
        language: { label: "Kalba", english: "EN", lithuanian: "LT" },
        forms: {
          standardDecor: "STANDARTINĖS APDAILOS",
          paint: "DAŽYMAS",
          hus: "HUSEBY / FOSS",
        },
        fields: {
          surface: "Paviršiai",
          decor: "Apdaila",
          wood: "Mediena",
          glossiness: "Blizgumas",
          standardDecor: "Standartinė apdaila",
          useCustomColorCode: "Naudoti nestandartinį apdailos kodą",
          topSurface: "Viršutinis paviršius",
          bottomSurface: "Apatinis paviršius",
          edges: "Briaunos",
          customColorCode: "Nestandartinis apdailos kodas",
        },
        form: {
          husNote:
            "* pagal nurodytą apdailą, jei nenurodyta, tada apdaila gl.5",
          standardPaintGloss: "Standartinis dažų blizgumas - 30",
        },
        actions: {
          generateDecorCode: "Generuoti apdailos kodą",
          copyDecorCode: "Kopijuoti kodą",
          downloadImage: "Atsisiųsti paveikslėlį",
        },
        decorCode: {
          regenerate: "Spauskite 'Generuoti apdailos kodą'",
          selectProperties: "Pasirinkite savybes",
        },
        toast: { codeCopied: "Kodas nukopijuotas" },
        preview: {
          noImageAvailable: "Paveikslėlio nėra.",
          woodColorDisclaimer: "Skirtinguose ekranuose atspalvis gali skirtis.",
        },
        rules: {
          abbreviations: "Sutrumpinimai etiketėse",
          husStructure: "Huseby/Foss kodo struktūra",
          decorStructure: "Apdailos kodo struktūra",
        },
        standardSurfaceWarning: {
          label: "Svarbu",
          intro: "*Standartiškai <strong>neapdailinami</strong> paviršiai:",
          paper: "Popierius",
          hpl: "HPL/CPL",
          linoleum: "Linoleumas",
          absEdge: "ABS briauna",
          holes: "Ertmės ir išfrezavimai",
        },
      },
    },
    en: {
      translation: {
        app: { title: "Decor generators" },
        language: { label: "Language", english: "EN", lithuanian: "LT" },
        forms: {
          standardDecor: "STANDARD DECOR",
          paint: "PAINT",
          hus: "HUSEBY / FOSS",
        },
        fields: {
          surface: "Surface",
          decor: "Decor",
          wood: "Wood",
          glossiness: "Glossiness",
          standardDecor: "Standard decor",
          useCustomColorCode: "Use custom color code",
          topSurface: "Top surface",
          bottomSurface: "Bottom surface",
          edges: "Edges",
          customColorCode: "Custom color code",
        },
        form: {
          husNote:
            "* according to decor selected, if not selected then decor is gl.5",
          standardPaintGloss: "Standard paint gloss - 30",
        },
        actions: {
          generateDecorCode: "Generate decor code",
          copyDecorCode: "Copy decor code",
          downloadImage: "Download image",
        },
        decorCode: {
          regenerate: "Press 'Generate decor code'",
          selectProperties: "Select properties",
        },
        toast: { codeCopied: "Code copied" },
        preview: {
          noImageAvailable: "No preview image.",
          woodColorDisclaimer: "Shade may vary across different screens.",
        },
        rules: {
          abbreviations: "Abbreviations in labels",
          husStructure: "Huseby/Foss code structure",
          decorStructure: "Decor code structure",
        },
        standardSurfaceWarning: {
          label: "Important",
          intro: "*Standard <strong>unfinished</strong> surfaces:",
          paper: "Paper",
          hpl: "HPL/CPL",
          linoleum: "Linoleum",
          absEdge: "ABS edge",
          holes: "Holes and routings",
        },
      },
    },
  },
  yd = (o) => {
    typeof document > "u" || (document.documentElement.lang = o);
  };
Ze.use(ld)
  .use(Vg)
  .init({
    resources: Wg,
    fallbackLng: "lt",
    supportedLngs: ["lt", "en"],
    detection: {
      order: ["localStorage", "htmlTag", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: !1 },
  })
  .then(() => {
    yd(Ze.resolvedLanguage ?? Ze.language);
  });
Ze.on("languageChanged", (o) => {
  yd(o);
});
var Ii = (o) => o.type === "checkbox",
  nr = (o) => o instanceof Date,
  yt = (o) => o == null;
const vd = (o) => typeof o == "object";
var He = (o) => !yt(o) && !Array.isArray(o) && vd(o) && !nr(o),
  Yg = (o) =>
    He(o) && o.target ? (Ii(o.target) ? o.target.checked : o.target.value) : o,
  Gg = (o, i) =>
    i
      .split(".")
      .some((r, s, f) => !isNaN(Number(r)) && o.has(f.slice(0, s).join("."))),
  Qg = (o) => {
    const i = o.constructor && o.constructor.prototype;
    return He(i) && i.hasOwnProperty("isPrototypeOf");
  },
  _l =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function Qe(o) {
  if (o instanceof Date) return new Date(o);
  const i = typeof FileList < "u" && o instanceof FileList;
  if (_l && (o instanceof Blob || i)) return o;
  const r = Array.isArray(o);
  if (!r && !(He(o) && Qg(o))) return o;
  const s = r ? [] : Object.create(Object.getPrototypeOf(o));
  for (const f in o)
    Object.prototype.hasOwnProperty.call(o, f) && (s[f] = Qe(o[f]));
  return s;
}
var la = (o) => /^\w*$/.test(o),
  Ve = (o) => o === void 0,
  El = (o) => (Array.isArray(o) ? o.filter(Boolean) : []),
  Cl = (o) => El(o.replace(/["|']|\]/g, "").split(/\.|\[/)),
  se = (o, i, r) => {
    if (!i || !He(o)) return r;
    const f = (la(i) ? [i] : Cl(i)).reduce(
      (c, d) => (yt(c) ? void 0 : c[d]),
      o,
    );
    return Ve(f) || f === o ? (Ve(o[i]) ? r : o[i]) : f;
  },
  Zt = (o) => typeof o == "boolean",
  It = (o) => typeof o == "function",
  Me = (o, i, r) => {
    let s = -1;
    const f = la(i) ? [i] : Cl(i),
      c = f.length,
      d = c - 1;
    for (; ++s < c; ) {
      const h = f[s];
      let g = r;
      if (s !== d) {
        const w = o[h];
        g = He(w) || Array.isArray(w) ? w : isNaN(+f[s + 1]) ? {} : [];
      }
      if (h === "__proto__" || h === "constructor" || h === "prototype") return;
      ((o[h] = g), (o = o[h]));
    }
  };
const Pr = {
    BLUR: "blur",
    FOCUS_OUT: "focusout",
    CHANGE: "change",
    SUBMIT: "submit",
    TRIGGER: "trigger",
    VALID: "valid",
  },
  Wt = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  Ht = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  ol = "form",
  wd = "root",
  Xg = ke.createContext(null);
Xg.displayName = "HookFormControlContext";
var qg = (o, i, r, s = !0) => {
  const f = {};
  for (const c in o)
    Object.defineProperty(f, c, {
      get: () => {
        const d = c;
        return (
          i._proxyFormState[d] !== Wt.all &&
            (i._proxyFormState[d] = !s || Wt.all),
          o[d]
        );
      },
    });
  return f;
};
const Jg = typeof window < "u" ? ke.useLayoutEffect : ke.useEffect;
var pt = (o) => typeof o == "string",
  Zg = (o, i, r, s, f) =>
    pt(o)
      ? (s && i.watch.add(o), se(r, o, f))
      : Array.isArray(o)
        ? o.map((c) => (s && i.watch.add(c), se(r, c)))
        : (s && (i.watchAll = !0), r),
  pl = (o) => yt(o) || !vd(o);
function en(o, i, r = new WeakSet()) {
  if (o === i) return !0;
  if (pl(o) || pl(i)) return Object.is(o, i);
  if (nr(o) && nr(i)) return Object.is(o.getTime(), i.getTime());
  const s = Object.keys(o),
    f = Object.keys(i);
  if (s.length !== f.length) return !1;
  if (r.has(o) || r.has(i)) return !0;
  (r.add(o), r.add(i));
  for (const c of s) {
    const d = o[c];
    if (!(c in i)) return !1;
    if (c !== "ref") {
      const h = i[c];
      if (
        (nr(d) && nr(h)) ||
        ((He(d) || Array.isArray(d)) && (He(h) || Array.isArray(h)))
          ? !en(d, h, r)
          : !Object.is(d, h)
      )
        return !1;
    }
  }
  return !0;
}
const em = ke.createContext(null);
em.displayName = "HookFormContext";
var tm = (o, i, r, s, f) =>
    i
      ? {
          ...r[o],
          types: { ...(r[o] && r[o].types ? r[o].types : {}), [s]: f || !0 },
        }
      : {},
  Oi = (o) => (Array.isArray(o) ? o : [o]),
  Kf = () => {
    let o = [];
    return {
      get observers() {
        return o;
      },
      next: (f) => {
        for (const c of o) c.next && c.next(f);
      },
      subscribe: (f) => (
        o.push(f),
        {
          unsubscribe: () => {
            o = o.filter((c) => c !== f);
          },
        }
      ),
      unsubscribe: () => {
        o = [];
      },
    };
  };
function kd(o, i) {
  const r = {};
  for (const s in o)
    if (o.hasOwnProperty(s)) {
      const f = o[s],
        c = i[s];
      if (f && He(f) && c) {
        const d = kd(f, c);
        He(d) && (r[s] = d);
      } else o[s] && (r[s] = c);
    }
  return r;
}
var dt = (o) => He(o) && !Object.keys(o).length,
  Tl = (o) => o.type === "file",
  ra = (o) => {
    if (!_l) return !1;
    const i = o ? o.ownerDocument : 0;
    return (
      o instanceof
      (i && i.defaultView ? i.defaultView.HTMLElement : HTMLElement)
    );
  },
  Sd = (o) => o.type === "select-multiple",
  Nl = (o) => o.type === "radio",
  nm = (o) => Nl(o) || Ii(o),
  al = (o) => ra(o) && o.isConnected;
function rm(o, i) {
  const r = i.slice(0, -1).length;
  let s = 0;
  for (; s < r; ) {
    if (yt(o)) {
      o = void 0;
      break;
    }
    ((o = o[i[s]]), s++);
  }
  return o;
}
function im(o) {
  for (const i in o) if (o.hasOwnProperty(i) && !Ve(o[i])) return !1;
  return !0;
}
function Xe(o, i) {
  if (pt(i) && Object.prototype.hasOwnProperty.call(o, i))
    return (delete o[i], o);
  const r = Array.isArray(i) ? i : la(i) ? [i] : Cl(i),
    s = r.length === 1 ? o : rm(o, r),
    f = r.length - 1,
    c = r[f];
  return (
    s && delete s[c],
    f !== 0 &&
      ((He(s) && dt(s)) || (Array.isArray(s) && im(s))) &&
      Xe(o, r.slice(0, -1)),
    o
  );
}
var om = (o) => {
  for (const i in o) if (It(o[i])) return !0;
  return !1;
};
function xd(o) {
  return Array.isArray(o) || (He(o) && !om(o));
}
function hl(o, i = {}) {
  for (const r in o) {
    const s = o[r];
    xd(s)
      ? ((i[r] = Array.isArray(s) ? [] : {}), hl(s, i[r]))
      : Ve(s) || (i[r] = !0);
  }
  return i;
}
function gl(o) {
  if (o !== !1) {
    if (o === !0) return !0;
    if (Array.isArray(o)) {
      const i = o.map((r) => gl(r));
      return i.some((r) => r !== void 0) ? i : void 0;
    }
    if (He(o)) {
      const i = {};
      for (const r in o) {
        const s = gl(o[r]);
        Ve(s) || (i[r] = s);
      }
      return Object.keys(i).length ? i : void 0;
    }
  }
}
function Li(o, i, r) {
  r || (r = hl(i));
  for (const s in o) {
    const f = o[s];
    if (xd(f))
      Ve(i) || pl(r[s])
        ? (r[s] = hl(f, Array.isArray(f) ? [] : {}))
        : Li(f, yt(i) ? {} : i[s], r[s]);
    else {
      const c = i[s];
      r[s] = !en(f, c);
    }
  }
  return gl(r) || {};
}
const $f = { value: !1, isValid: !1 },
  Uf = { value: !0, isValid: !0 };
var _d = (o) => {
    if (Array.isArray(o)) {
      if (o.length > 1) {
        const i = o
          .filter((r) => r && r.checked && !r.disabled)
          .map((r) => r.value);
        return { value: i, isValid: !!i.length };
      }
      return o[0].checked && !o[0].disabled
        ? o[0].attributes && !Ve(o[0].attributes.value)
          ? Ve(o[0].value) || o[0].value === ""
            ? Uf
            : { value: o[0].value, isValid: !0 }
          : Uf
        : $f;
    }
    return $f;
  },
  Ed = (o, { valueAsNumber: i, valueAsDate: r, setValueAs: s }) =>
    Ve(o)
      ? o
      : i
        ? o === ""
          ? NaN
          : o && +o
        : r && pt(o)
          ? new Date(o)
          : s
            ? s(o)
            : o;
const Hf = { isValid: !1, value: null };
var Cd = (o) =>
  Array.isArray(o)
    ? o.reduce(
        (i, r) =>
          r && r.checked && !r.disabled ? { isValid: !0, value: r.value } : i,
        Hf,
      )
    : Hf;
function Wf(o) {
  const i = o.ref;
  return Tl(i)
    ? i.files
    : Nl(i)
      ? Cd(o.refs).value
      : Sd(i)
        ? [...i.selectedOptions].map(({ value: r }) => r)
        : Ii(i)
          ? _d(o.refs).value
          : Ed(Ve(i.value) ? o.ref.value : i.value, o);
}
var am = (o, i, r, s) => {
    const f = {};
    for (const c of o) {
      const d = se(i, c);
      d && Me(f, c, d._f);
    }
    return {
      criteriaMode: r,
      names: [...o],
      fields: f,
      shouldUseNativeValidation: s,
    };
  },
  ia = (o) => o instanceof RegExp,
  Ni = (o) =>
    Ve(o)
      ? o
      : ia(o)
        ? o.source
        : He(o)
          ? ia(o.value)
            ? o.value.source
            : o.value
          : o,
  Yf = (o) => ({
    isOnSubmit: !o || o === Wt.onSubmit,
    isOnBlur: o === Wt.onBlur,
    isOnChange: o === Wt.onChange,
    isOnAll: o === Wt.all,
    isOnTouch: o === Wt.onTouched,
  });
const Gf = "AsyncFunction";
var sm = (o) =>
    !!o &&
    !!o.validate &&
    !!(
      (It(o.validate) && o.validate.constructor.name === Gf) ||
      (He(o.validate) &&
        Object.values(o.validate).find((i) => i.constructor.name === Gf))
    ),
  lm = (o) =>
    o.mount &&
    (o.required ||
      o.min ||
      o.max ||
      o.maxLength ||
      o.minLength ||
      o.pattern ||
      o.validate),
  Qf = (o, i, r) =>
    !r &&
    (i.watchAll ||
      i.watch.has(o) ||
      [...i.watch].some(
        (s) => o.startsWith(s) && /^\.\w+/.test(o.slice(s.length)),
      ));
const Pi = (o, i, r, s) => {
  for (const f of r || Object.keys(o)) {
    const c = se(o, f);
    if (c) {
      const { _f: d, ...h } = c;
      if (d) {
        if (d.refs && d.refs[0] && i(d.refs[0], f) && !s) return !0;
        if (d.ref && i(d.ref, d.name) && !s) return !0;
        if (Pi(h, i)) break;
      } else if (He(h) && Pi(h, i)) break;
    }
  }
};
function Xf(o, i, r) {
  const s = se(o, r);
  if (s || la(r)) return { error: s, name: r };
  const f = r.split(".");
  for (; f.length; ) {
    const c = f.join("."),
      d = se(i, c),
      h = se(o, c);
    if (d && !Array.isArray(d) && r !== c) return { name: r };
    if (h && h.type) return { name: c, error: h };
    if (h && h.root && h.root.type) return { name: `${c}.root`, error: h.root };
    f.pop();
  }
  return { name: r };
}
var um = (o, i, r, s) => {
    r(o);
    const { name: f, ...c } = o;
    return (
      dt(c) ||
      (s && Object.keys(c).length >= Object.keys(i).length) ||
      Object.keys(c).find((d) => i[d] === (!s || Wt.all))
    );
  },
  cm = (o, i, r) =>
    !o ||
    !i ||
    o === i ||
    Oi(o).some((s) => s && (r ? s === i : s.startsWith(i) || i.startsWith(s))),
  fm = (o, i, r, s, f) =>
    f.isOnAll
      ? !1
      : !r && f.isOnTouch
        ? !(i || o)
        : (r ? s.isOnBlur : f.isOnBlur)
          ? !o
          : (r ? s.isOnChange : f.isOnChange)
            ? o
            : !0,
  dm = (o, i) => !El(se(o, i)).length && Xe(o, i),
  pm = (o, i, r) => {
    const s = Oi(se(o, r));
    return (Me(s, wd, i[r]), Me(o, r, s), o);
  };
function qf(o, i, r = "validate") {
  if (pt(o) || (Array.isArray(o) && o.every(pt)) || (Zt(o) && !o))
    return { type: r, message: pt(o) ? o : "", ref: i };
}
var Fr = (o) => (He(o) && !ia(o) ? o : { value: o, message: "" }),
  Jf = async (o, i, r, s, f, c) => {
    const {
        ref: d,
        refs: h,
        required: g,
        maxLength: w,
        minLength: v,
        min: k,
        max: x,
        pattern: D,
        validate: A,
        name: O,
        valueAsNumber: L,
        mount: I,
      } = o._f,
      R = se(r, O);
    if (!I || i.has(O)) return {};
    const z = h ? h[0] : d,
      j = (G) => {
        f &&
          z.reportValidity &&
          (z.setCustomValidity(Zt(G) ? "" : G || ""), z.reportValidity());
      },
      $ = {},
      H = Nl(d),
      W = Ii(d),
      q = H || W,
      ae =
        ((L || Tl(d)) && Ve(d.value) && Ve(R)) ||
        (ra(d) && d.value === "") ||
        R === "" ||
        (Array.isArray(R) && !R.length) ||
        (L && typeof R == "number" && isNaN(R)),
      de = tm.bind(null, O, s, $),
      pe = (G, ie, he, _e = Ht.maxLength, Te = Ht.minLength) => {
        const ce = G ? ie : he;
        $[O] = {
          type: G ? _e : Te,
          message: ce,
          ref: d,
          ...de(G ? _e : Te, ce),
        };
      };
    if (
      c
        ? !Array.isArray(R) || !R.length
        : g &&
          ((!q && (ae || yt(R))) ||
            (Zt(R) && !R) ||
            (W && !_d(h).isValid) ||
            (H && !Cd(h).isValid))
    ) {
      const { value: G, message: ie } = pt(g)
        ? { value: !!g, message: g }
        : Fr(g);
      if (
        G &&
        (($[O] = {
          type: Ht.required,
          message: ie,
          ref: z,
          ...de(Ht.required, ie),
        }),
        !s)
      )
        return (j(ie), $);
    }
    if (!ae && (!yt(k) || !yt(x))) {
      let G, ie;
      const he = Fr(x),
        _e = Fr(k);
      if (!yt(R) && !isNaN(R)) {
        const Te = d.valueAsNumber || (R && +R);
        (yt(he.value) || (G = Te > he.value),
          yt(_e.value) || (ie = Te < _e.value));
      } else {
        const Te = d.valueAsDate || new Date(R),
          ce = (Z) => new Date(new Date().toDateString() + " " + Z),
          V = d.type == "time",
          te = d.type == "week";
        (pt(he.value) &&
          R &&
          (G = V
            ? ce(R) > ce(he.value)
            : te
              ? R > he.value
              : Te > new Date(he.value)),
          pt(_e.value) &&
            R &&
            (ie = V
              ? ce(R) < ce(_e.value)
              : te
                ? R < _e.value
                : Te < new Date(_e.value)));
      }
      if ((G || ie) && (pe(!!G, he.message, _e.message, Ht.max, Ht.min), !s))
        return (j($[O].message), $);
    }
    if ((w || v) && !ae && (pt(R) || (c && Array.isArray(R)))) {
      const G = Fr(w),
        ie = Fr(v),
        he = !yt(G.value) && R.length > +G.value,
        _e = !yt(ie.value) && R.length < +ie.value;
      if ((he || _e) && (pe(he, G.message, ie.message), !s))
        return (j($[O].message), $);
    }
    if (D && !ae && pt(R)) {
      const { value: G, message: ie } = Fr(D);
      if (
        ia(G) &&
        !R.match(G) &&
        (($[O] = {
          type: Ht.pattern,
          message: ie,
          ref: d,
          ...de(Ht.pattern, ie),
        }),
        !s)
      )
        return (j(ie), $);
    }
    if (A) {
      if (It(A)) {
        const G = await A(R, r),
          ie = qf(G, z);
        if (ie && (($[O] = { ...ie, ...de(Ht.validate, ie.message) }), !s))
          return (j(ie.message), $);
      } else if (He(A)) {
        let G = {};
        for (const ie in A) {
          if (!dt(G) && !s) break;
          const he = qf(await A[ie](R, r), z, ie);
          he &&
            ((G = { ...he, ...de(ie, he.message) }),
            j(he.message),
            s && ($[O] = G));
        }
        if (!dt(G) && (($[O] = { ref: z, ...G }), !s)) return $;
      }
    }
    return (j(!0), $);
  };
const hm = {
    mode: Wt.onSubmit,
    reValidateMode: Wt.onChange,
    shouldFocusError: !0,
  },
  Td = {
    submitCount: 0,
    isDirty: !1,
    isReady: !1,
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
  };
function gm(o = {}) {
  let i = { ...hm, ...o },
    r = {
      ...Qe(Td),
      isLoading: It(i.defaultValues),
      errors: i.errors || {},
      disabled: i.disabled || !1,
    },
    s = {},
    f =
      He(i.defaultValues) || He(i.values)
        ? Qe(i.defaultValues || i.values) || {}
        : {},
    c = i.shouldUnregister ? {} : Qe(f),
    d = { action: !1, mount: !1, watch: !1, keepIsValid: !1 },
    h = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
      registerName: new Set(),
    },
    g,
    w = 0;
  const v = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    k = { ...v };
  let x = { ...k };
  const D = { array: Kf(), state: Kf() },
    A = i.criteriaMode === Wt.all,
    O = (y) => (C) => {
      (clearTimeout(w), (w = setTimeout(y, C)));
    },
    L = async (y) => {
      if (!d.keepIsValid && !i.disabled && (k.isValid || x.isValid || y)) {
        let C;
        (i.resolver
          ? ((C = dt((await ae()).errors)), I())
          : (C = await G({
              fields: s,
              onlyCheckValid: !0,
              eventType: Pr.VALID,
            })),
          C !== r.isValid && D.state.next({ isValid: C }));
      }
    },
    I = (y, C) => {
      !i.disabled &&
        (k.isValidating ||
          k.validatingFields ||
          x.isValidating ||
          x.validatingFields) &&
        ((y || Array.from(h.mount)).forEach((P) => {
          P && (C ? Me(r.validatingFields, P, C) : Xe(r.validatingFields, P));
        }),
        D.state.next({
          validatingFields: r.validatingFields,
          isValidating: !dt(r.validatingFields),
        }));
    },
    R = () => {
      r.dirtyFields = Li(f, c);
    },
    z = (y, C = [], P, J, X = !0, Q = !0) => {
      if (J && P && !i.disabled) {
        if (((d.action = !0), Q && Array.isArray(se(s, y)))) {
          const ee = P(se(s, y), J.argA, J.argB);
          X && Me(s, y, ee);
        }
        if (Q && Array.isArray(se(r.errors, y))) {
          const ee = P(se(r.errors, y), J.argA, J.argB);
          (X && Me(r.errors, y, ee), dm(r.errors, y));
        }
        if (
          (k.touchedFields || x.touchedFields) &&
          Q &&
          Array.isArray(se(r.touchedFields, y))
        ) {
          const ee = P(se(r.touchedFields, y), J.argA, J.argB);
          X && Me(r.touchedFields, y, ee);
        }
        ((k.dirtyFields || x.dirtyFields) && R(),
          D.state.next({
            name: y,
            isDirty: he(y, C),
            dirtyFields: r.dirtyFields,
            errors: r.errors,
            isValid: r.isValid,
          }));
      } else Me(c, y, C);
    },
    j = (y, C) => {
      (Me(r.errors, y, C), D.state.next({ errors: r.errors }));
    },
    $ = (y) => {
      ((r.errors = y), D.state.next({ errors: r.errors, isValid: !1 }));
    },
    H = (y, C, P, J) => {
      const X = se(s, y);
      if (X) {
        const Q = Ve(se(c, y)),
          ee = se(c, y, Ve(P) ? se(f, y) : P);
        (Ve(ee) || (J && J.defaultChecked) || C
          ? Me(c, y, C ? ee : Wf(X._f))
          : ce(y, ee),
          d.mount &&
            !d.action &&
            (L(),
            Q &&
              r.isDirty &&
              (k.isDirty || x.isDirty) &&
              (he() || ((r.isDirty = !1), D.state.next({ ...r })))));
      }
    },
    W = (y, C, P, J, X) => {
      let Q = !1,
        ee = !1;
      const ve = { name: y };
      if (!i.disabled) {
        if (!P || J) {
          (k.isDirty || x.isDirty) &&
            ((ee = r.isDirty),
            (r.isDirty = ve.isDirty = he()),
            (Q = ee !== ve.isDirty));
          const Re = en(se(f, y), C);
          ((ee = !!se(r.dirtyFields, y)),
            Re ? Xe(r.dirtyFields, y) : Me(r.dirtyFields, y, !0),
            (ve.dirtyFields = r.dirtyFields),
            (Q = Q || ((k.dirtyFields || x.dirtyFields) && ee !== !Re)));
        }
        if (P) {
          const Re = se(r.touchedFields, y);
          Re ||
            (Me(r.touchedFields, y, P),
            (ve.touchedFields = r.touchedFields),
            (Q = Q || ((k.touchedFields || x.touchedFields) && Re !== P)));
        }
        Q && X && D.state.next(ve);
      }
      return Q ? ve : {};
    },
    q = (y, C, P, J) => {
      const X = se(r.errors, y),
        Q = (k.isValid || x.isValid) && Zt(C) && r.isValid !== C;
      if (
        (i.delayError && P
          ? ((g = O(() => j(y, P))), g(i.delayError))
          : (clearTimeout(w),
            (g = null),
            P ? Me(r.errors, y, P) : Xe(r.errors, y)),
        (P ? !en(X, P) : X) || !dt(J) || Q)
      ) {
        const ee = {
          ...J,
          ...(Q && Zt(C) ? { isValid: C } : {}),
          errors: r.errors,
          name: y,
        };
        ((r = { ...r, ...ee }), D.state.next(ee));
      }
    },
    ae = async (y) => (
      I(y, !0),
      await i.resolver(
        c,
        i.context,
        am(y || h.mount, s, i.criteriaMode, i.shouldUseNativeValidation),
      )
    ),
    de = async (y) => {
      const { errors: C } = await ae(y);
      if ((I(y), y))
        for (const P of y) {
          const J = se(C, P);
          J ? Me(r.errors, P, J) : Xe(r.errors, P);
        }
      else r.errors = C;
      return C;
    },
    pe = async ({ name: y, eventType: C }) => {
      if (o.validate) {
        const P = await o.validate({
          formValues: c,
          formState: r,
          name: y,
          eventType: C,
        });
        if (He(P))
          for (const J in P)
            P[J] &&
              Le(`${ol}.${J}`, {
                message: pt(P.message) ? P.message : "",
                type: Ht.validate,
              });
        else
          pt(P) || !P
            ? Le(ol, { message: P || "", type: Ht.validate })
            : Ce(ol);
        return P;
      }
      return !0;
    },
    G = async ({
      fields: y,
      onlyCheckValid: C,
      name: P,
      eventType: J,
      context: X = { valid: !0, runRootValidation: !1 },
    }) => {
      if (
        o.validate &&
        ((X.runRootValidation = !0),
        !(await pe({ name: P, eventType: J })) && ((X.valid = !1), C))
      )
        return X.valid;
      for (const Q in y) {
        const ee = y[Q];
        if (ee) {
          const { _f: ve, ...Re } = ee;
          if (ve) {
            const et = h.array.has(ve.name),
              Ct = ee._f && sm(ee._f);
            Ct && k.validatingFields && I([ve.name], !0);
            const st = await Jf(
              ee,
              h.disabled,
              c,
              A,
              i.shouldUseNativeValidation && !C,
              et,
            );
            if (
              (Ct && k.validatingFields && I([ve.name]),
              (st[ve.name] && ((X.valid = !1), C)) ||
                (!C &&
                  (se(st, ve.name)
                    ? et
                      ? pm(r.errors, st, ve.name)
                      : Me(r.errors, ve.name, st[ve.name])
                    : Xe(r.errors, ve.name)),
                o.shouldUseNativeValidation && st[ve.name]))
            )
              break;
          }
          !dt(Re) &&
            (await G({
              context: X,
              onlyCheckValid: C,
              fields: Re,
              name: Q,
              eventType: J,
            }));
        }
      }
      return X.valid;
    },
    ie = () => {
      for (const y of h.unMount) {
        const C = se(s, y);
        C &&
          (C._f.refs ? C._f.refs.every((P) => !al(P)) : !al(C._f.ref)) &&
          hn(y);
      }
      h.unMount = new Set();
    },
    he = (y, C) => !i.disabled && (y && C && Me(c, y, C), !en(Ee(), f)),
    _e = (y, C, P) =>
      Zg(y, h, { ...(d.mount ? c : Ve(C) ? f : pt(y) ? { [y]: C } : C) }, P, C),
    Te = (y) =>
      El(se(d.mount ? c : f, y, i.shouldUnregister ? se(f, y, []) : [])),
    ce = (y, C, P = {}) => {
      const J = se(s, y);
      let X = C;
      if (J) {
        const Q = J._f;
        Q &&
          (!Q.disabled && Me(c, y, Ed(C, Q)),
          (X = ra(Q.ref) && yt(C) ? "" : C),
          Sd(Q.ref)
            ? [...Q.ref.options].forEach(
                (ee) => (ee.selected = X.includes(ee.value)),
              )
            : Q.refs
              ? Ii(Q.ref)
                ? Q.refs.forEach((ee) => {
                    (!ee.defaultChecked || !ee.disabled) &&
                      (Array.isArray(X)
                        ? (ee.checked = !!X.find((ve) => ve === ee.value))
                        : (ee.checked = X === ee.value || !!X));
                  })
                : Q.refs.forEach((ee) => (ee.checked = ee.value === X))
              : Tl(Q.ref)
                ? (Q.ref.value = "")
                : ((Q.ref.value = X),
                  Q.ref.type || D.state.next({ name: y, values: Qe(c) })));
      }
      ((P.shouldDirty || P.shouldTouch) &&
        W(y, X, P.shouldTouch, P.shouldDirty, !0),
        P.shouldValidate && Se(y));
    },
    V = (y, C, P) => {
      for (const J in C) {
        if (!C.hasOwnProperty(J)) return;
        const X = C[J],
          Q = y + "." + J,
          ee = se(s, Q);
        (h.array.has(y) || He(X) || (ee && !ee._f)) && !nr(X)
          ? V(Q, X, P)
          : ce(Q, X, P);
      }
    },
    te = (y, C, P = {}) => {
      const J = se(s, y),
        X = h.array.has(y),
        Q = Qe(C),
        ee = se(c, y),
        ve = en(ee, Q);
      if ((Me(c, y, Q), X))
        (D.array.next({ name: y, values: Qe(c) }),
          (k.isDirty || k.dirtyFields || x.isDirty || x.dirtyFields) &&
            P.shouldDirty &&
            (R(),
            D.state.next({
              name: y,
              dirtyFields: r.dirtyFields,
              isDirty: he(y, Q),
            })));
      else {
        const Re = (Array.isArray(Q) && !Q.length) || dt(Q);
        !J || J._f || yt(Q) || Re ? ce(y, Q, P) : V(y, Q, P);
      }
      if (!ve) {
        const Re = Qf(y, h);
        D.state.next({
          ...(Re && r),
          name: d.mount || Re ? y : void 0,
          values: Qe(c),
        });
      }
    },
    Z = (y) => {
      const C = It(y) ? y(c) : y;
      en(c, C) || ((c = { ...c, ...C }), D.state.next({ ...r, values: c }));
    },
    E = async (y) => {
      d.mount = !0;
      const C = y.target;
      let P = C.name,
        J = !0;
      const X = se(s, P),
        Q = (Re) => {
          J =
            Number.isNaN(Re) ||
            (nr(Re) && isNaN(Re.getTime())) ||
            en(Re, se(c, P, Re));
        },
        ee = Yf(i.mode),
        ve = Yf(i.reValidateMode);
      if (X) {
        let Re, et;
        const Ct = C.type ? Wf(X._f) : Yg(y),
          st = y.type === Pr.BLUR || y.type === Pr.FOCUS_OUT,
          zr =
            (!lm(X._f) &&
              !o.validate &&
              !i.resolver &&
              !se(r.errors, P) &&
              !X._f.deps) ||
            fm(st, se(r.touchedFields, P), r.isSubmitted, ve, ee),
          zn = Qf(P, h, st);
        (Me(c, P, Ct),
          st
            ? (!C || !C.readOnly) && (X._f.onBlur && X._f.onBlur(y), g && g(0))
            : X._f.onChange && X._f.onChange(y));
        const Mn = W(P, Ct, st),
          Mr = !dt(Mn) || zn;
        if ((!st && D.state.next({ name: P, type: y.type, values: Qe(c) }), zr))
          return (
            (k.isValid || x.isValid) &&
              (i.mode === "onBlur" ? st && L() : st || L()),
            Mr && D.state.next({ name: P, ...(zn ? {} : Mn) })
          );
        if (
          (!i.resolver &&
            o.validate &&
            (await pe({ name: P, eventType: y.type })),
          !st && zn && D.state.next({ ...r }),
          i.resolver)
        ) {
          const { errors: ar } = await ae([P]);
          if ((I([P]), Q(Ct), J)) {
            const yn = Xf(r.errors, s, P),
              rn = Xf(ar, s, yn.name || P);
            ((Re = rn.error), (P = rn.name), (et = dt(ar)));
          }
        } else
          (I([P], !0),
            (Re = (await Jf(X, h.disabled, c, A, i.shouldUseNativeValidation))[
              P
            ]),
            I([P]),
            Q(Ct),
            J &&
              (Re
                ? (et = !1)
                : (k.isValid || x.isValid) &&
                  (et = await G({
                    fields: s,
                    onlyCheckValid: !0,
                    name: P,
                    eventType: y.type,
                  }))));
        J &&
          (X._f.deps &&
            (!Array.isArray(X._f.deps) || X._f.deps.length > 0) &&
            Se(X._f.deps),
          q(P, et, Re, Mn));
      }
    },
    B = (y, C) => {
      if (se(r.errors, C) && y.focus) return (y.focus(), 1);
    },
    Se = async (y, C = {}) => {
      let P, J;
      const X = Oi(y);
      if (i.resolver) {
        const Q = await de(Ve(y) ? y : X);
        ((P = dt(Q)), (J = y ? !X.some((ee) => se(Q, ee)) : P));
      } else
        y
          ? ((J = (
              await Promise.all(
                X.map(async (Q) => {
                  const ee = se(s, Q);
                  return await G({
                    fields: ee && ee._f ? { [Q]: ee } : ee,
                    eventType: Pr.TRIGGER,
                  });
                }),
              )
            ).every(Boolean)),
            !(!J && !r.isValid) && L())
          : (J = P = await G({ fields: s, name: y, eventType: Pr.TRIGGER }));
      return (
        D.state.next({
          ...(!pt(y) || ((k.isValid || x.isValid) && P !== r.isValid)
            ? {}
            : { name: y }),
          ...(i.resolver || !y ? { isValid: P } : {}),
          errors: r.errors,
        }),
        C.shouldFocus && !J && Pi(s, B, y ? X : h.mount),
        J
      );
    },
    Ee = (y, C) => {
      let P = { ...(d.mount ? c : f) };
      return (
        C && (P = kd(C.dirtyFields ? r.dirtyFields : r.touchedFields, P)),
        Ve(y) ? P : pt(y) ? se(P, y) : y.map((J) => se(P, J))
      );
    },
    ge = (y, C) => ({
      invalid: !!se((C || r).errors, y),
      isDirty: !!se((C || r).dirtyFields, y),
      error: se((C || r).errors, y),
      isValidating: !!se(r.validatingFields, y),
      isTouched: !!se((C || r).touchedFields, y),
    }),
    Ce = (y) => {
      const C = y ? Oi(y) : void 0;
      (C == null || C.forEach((P) => Xe(r.errors, P)),
        C
          ? C.forEach((P) => {
              D.state.next({ name: P, errors: r.errors });
            })
          : D.state.next({ errors: {} }));
    },
    Le = (y, C, P) => {
      const J = (se(s, y, { _f: {} })._f || {}).ref,
        X = se(r.errors, y) || {},
        { ref: Q, message: ee, type: ve, ...Re } = X;
      (Me(r.errors, y, { ...Re, ...C, ref: J }),
        D.state.next({ name: y, errors: r.errors, isValid: !1 }),
        P && P.shouldFocus && J && J.focus && J.focus());
    },
    Fe = (y, C) =>
      It(y)
        ? D.state.subscribe({
            next: (P) => "values" in P && y(P.values || _e(void 0, C), P),
          })
        : _e(y, C, !0),
    be = (y) =>
      D.state.subscribe({
        next: (C) => {
          if (
            cm(y.name, C.name, y.exact) &&
            um(C, y.formState || k, mn, y.reRenderRoot)
          ) {
            const P = { ...c };
            y.callback({ values: P, ...r, ...C, defaultValues: f });
          }
        },
      }).unsubscribe,
    ht = (y) => (
      (d.mount = !0),
      (x = { ...x, ...y.formState }),
      be({ ...y, formState: { ...v, ...y.formState } })
    ),
    hn = (y, C = {}) => {
      for (const P of y ? Oi(y) : h.mount)
        (h.mount.delete(P),
          h.array.delete(P),
          C.keepValue || (Xe(s, P), Xe(c, P)),
          !C.keepError && Xe(r.errors, P),
          !C.keepDirty && Xe(r.dirtyFields, P),
          !C.keepTouched && Xe(r.touchedFields, P),
          !C.keepIsValidating && Xe(r.validatingFields, P),
          !i.shouldUnregister && !C.keepDefaultValue && Xe(f, P));
      (D.state.next({ values: Qe(c) }),
        D.state.next({ ...r, ...(C.keepDirty ? { isDirty: he() } : {}) }),
        !C.keepIsValid && L());
    },
    Ar = ({ disabled: y, name: C }) => {
      if ((Zt(y) && d.mount) || y || h.disabled.has(C)) {
        const X = h.disabled.has(C) !== !!y;
        (y ? h.disabled.add(C) : h.disabled.delete(C),
          X && d.mount && !d.action && L());
      }
    },
    gn = (y, C = {}) => {
      let P = se(s, y);
      const J = Zt(C.disabled) || Zt(i.disabled),
        X = !h.registerName.has(y) && P && P._f && !P._f.mount;
      return (
        Me(s, y, {
          ...(P || {}),
          _f: {
            ...(P && P._f ? P._f : { ref: { name: y } }),
            name: y,
            mount: !0,
            ...C,
          },
        }),
        h.mount.add(y),
        P && !X
          ? Ar({ disabled: Zt(C.disabled) ? C.disabled : i.disabled, name: y })
          : H(y, !0, C.value),
        {
          ...(J ? { disabled: C.disabled || i.disabled } : {}),
          ...(i.progressive
            ? {
                required: !!C.required,
                min: Ni(C.min),
                max: Ni(C.max),
                minLength: Ni(C.minLength),
                maxLength: Ni(C.maxLength),
                pattern: Ni(C.pattern),
              }
            : {}),
          name: y,
          onChange: E,
          onBlur: E,
          ref: (Q) => {
            if (Q) {
              (h.registerName.add(y),
                gn(y, C),
                h.registerName.delete(y),
                (P = se(s, y)));
              const ee =
                  (Ve(Q.value) &&
                    Q.querySelectorAll &&
                    Q.querySelectorAll("input,select,textarea")[0]) ||
                  Q,
                ve = nm(ee),
                Re = P._f.refs || [];
              if (ve ? Re.find((et) => et === ee) : ee === P._f.ref) return;
              (Me(s, y, {
                _f: {
                  ...P._f,
                  ...(ve
                    ? {
                        refs: [
                          ...Re.filter(al),
                          ee,
                          ...(Array.isArray(se(f, y)) ? [{}] : []),
                        ],
                        ref: { type: ee.type, name: y },
                      }
                    : { ref: ee }),
                },
              }),
                H(y, !1, void 0, ee));
            } else
              ((P = se(s, y, {})),
                P._f && (P._f.mount = !1),
                (i.shouldUnregister || C.shouldUnregister) &&
                  !(Gg(h.array, y) && d.action) &&
                  h.unMount.add(y));
          },
        }
      );
    },
    jn = () => i.shouldFocusError && Pi(s, B, h.mount),
    zi = (y) => {
      Zt(y) &&
        (D.state.next({ disabled: y }),
        Pi(
          s,
          (C, P) => {
            const J = se(s, P);
            J &&
              ((C.disabled = J._f.disabled || y),
              Array.isArray(J._f.refs) &&
                J._f.refs.forEach((X) => {
                  X.disabled = J._f.disabled || y;
                }));
          },
          0,
          !1,
        ));
    },
    br = (y, C) => async (P) => {
      let J;
      P && (P.preventDefault && P.preventDefault(), P.persist && P.persist());
      let X = Qe(c);
      if ((D.state.next({ isSubmitting: !0 }), i.resolver)) {
        const { errors: Q, values: ee } = await ae();
        (I(), (r.errors = Q), (X = Qe(ee)));
      } else await G({ fields: s, eventType: Pr.SUBMIT });
      if (h.disabled.size) for (const Q of h.disabled) Xe(X, Q);
      if ((Xe(r.errors, wd), dt(r.errors))) {
        D.state.next({ errors: {} });
        try {
          await y(X, P);
        } catch (Q) {
          J = Q;
        }
      } else (C && (await C({ ...r.errors }, P)), jn(), setTimeout(jn));
      if (
        (D.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: dt(r.errors) && !J,
          submitCount: r.submitCount + 1,
          errors: r.errors,
        }),
        J)
      )
        throw J;
    },
    Ir = (y, C = {}) => {
      se(s, y) &&
        (Ve(C.defaultValue)
          ? te(y, Qe(se(f, y)))
          : (te(y, C.defaultValue), Me(f, y, Qe(C.defaultValue))),
        C.keepTouched || Xe(r.touchedFields, y),
        C.keepDirty ||
          (Xe(r.dirtyFields, y),
          (r.isDirty = C.defaultValue ? he(y, Qe(se(f, y))) : he())),
        C.keepError || (Xe(r.errors, y), k.isValid && L()),
        D.state.next({ ...r }));
    },
    jr = (y, C = {}) => {
      const P = y ? Qe(y) : f,
        J = Qe(P),
        X = dt(y),
        Q = X ? f : J;
      if ((C.keepDefaultValues || (f = P), !C.keepValues)) {
        if (C.keepDirtyValues) {
          const ee = new Set([...h.mount, ...Object.keys(Li(f, c))]);
          for (const ve of Array.from(ee)) {
            const Re = se(r.dirtyFields, ve),
              et = se(c, ve),
              Ct = se(Q, ve);
            Re && !Ve(et) ? Me(Q, ve, et) : !Re && !Ve(Ct) && te(ve, Ct);
          }
        } else {
          if (_l && Ve(y))
            for (const ee of h.mount) {
              const ve = se(s, ee);
              if (ve && ve._f) {
                const Re = Array.isArray(ve._f.refs)
                  ? ve._f.refs[0]
                  : ve._f.ref;
                if (ra(Re)) {
                  const et = Re.closest("form");
                  if (et) {
                    et.reset();
                    break;
                  }
                }
              }
            }
          if (C.keepFieldsRef) for (const ee of h.mount) te(ee, se(Q, ee));
          else s = {};
        }
        ((c = i.shouldUnregister ? (C.keepDefaultValues ? Qe(f) : {}) : Qe(Q)),
          D.array.next({ values: { ...Q } }),
          D.state.next({ values: { ...Q } }));
      }
      ((h = {
        mount: C.keepDirtyValues ? h.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        registerName: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (d.mount =
          !k.isValid ||
          !!C.keepIsValid ||
          !!C.keepDirtyValues ||
          (!i.shouldUnregister && !dt(Q))),
        (d.watch = !!i.shouldUnregister),
        (d.keepIsValid = !!C.keepIsValid),
        (d.action = !1),
        C.keepErrors || (r.errors = {}),
        D.state.next({
          submitCount: C.keepSubmitCount ? r.submitCount : 0,
          isDirty: X
            ? !1
            : C.keepDirty
              ? r.isDirty
              : !!(C.keepDefaultValues && !en(y, f)),
          isSubmitted: C.keepIsSubmitted ? r.isSubmitted : !1,
          dirtyFields: X
            ? {}
            : C.keepDirtyValues
              ? C.keepDefaultValues && c
                ? Li(f, c)
                : r.dirtyFields
              : C.keepDefaultValues && y
                ? Li(f, y)
                : C.keepDirty
                  ? r.dirtyFields
                  : {},
          touchedFields: C.keepTouched ? r.touchedFields : {},
          errors: C.keepErrors ? r.errors : {},
          isSubmitSuccessful: C.keepIsSubmitSuccessful
            ? r.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
          defaultValues: f,
        }));
    },
    or = (y, C) => jr(It(y) ? y(c) : y, { ...i.resetOptions, ...C }),
    Bn = (y, C = {}) => {
      const P = se(s, y),
        J = P && P._f;
      if (J) {
        const X = J.refs ? J.refs[0] : J.ref;
        X.focus &&
          setTimeout(() => {
            (X.focus(), C.shouldSelect && It(X.select) && X.select());
          });
      }
    },
    mn = (y) => {
      r = { ...r, ...y };
    },
    Br = {
      control: {
        register: gn,
        unregister: hn,
        getFieldState: ge,
        handleSubmit: br,
        setError: Le,
        _subscribe: be,
        _runSchema: ae,
        _updateIsValidating: I,
        _focusError: jn,
        _getWatch: _e,
        _getDirty: he,
        _setValid: L,
        _setFieldArray: z,
        _setDisabledField: Ar,
        _setErrors: $,
        _getFieldArray: Te,
        _reset: jr,
        _resetDefaultValues: () =>
          It(i.defaultValues) &&
          i.defaultValues().then((y) => {
            (or(y, i.resetOptions), D.state.next({ isLoading: !1 }));
          }),
        _removeUnmounted: ie,
        _disableForm: zi,
        _subjects: D,
        _proxyFormState: k,
        get _fields() {
          return s;
        },
        get _formValues() {
          return c;
        },
        get _state() {
          return d;
        },
        set _state(y) {
          d = y;
        },
        get _defaultValues() {
          return f;
        },
        get _names() {
          return h;
        },
        set _names(y) {
          h = y;
        },
        get _formState() {
          return r;
        },
        get _options() {
          return i;
        },
        set _options(y) {
          i = { ...i, ...y };
        },
      },
      subscribe: ht,
      trigger: Se,
      register: gn,
      handleSubmit: br,
      watch: Fe,
      setValue: te,
      setValues: Z,
      getValues: Ee,
      reset: or,
      resetField: Ir,
      clearErrors: Ce,
      unregister: hn,
      setError: Le,
      setFocus: Bn,
      getFieldState: ge,
    };
  return { ...Br, formControl: Br };
}
function mm(o = {}) {
  const i = ke.useRef(void 0),
    r = ke.useRef(void 0),
    [s, f] = ke.useState(() => ({
      ...Qe(Td),
      isLoading: It(o.defaultValues),
      errors: o.errors || {},
      disabled: o.disabled || !1,
      defaultValues: It(o.defaultValues) ? void 0 : o.defaultValues,
    }));
  if (!i.current)
    if (o.formControl)
      ((i.current = { ...o.formControl, formState: s }),
        o.defaultValues &&
          !It(o.defaultValues) &&
          o.formControl.reset(o.defaultValues, o.resetOptions));
    else {
      const { formControl: d, ...h } = gm(o);
      i.current = { ...h, formState: s };
    }
  const c = i.current.control;
  return (
    (c._options = o),
    Jg(() => {
      const d = c._subscribe({
        formState: c._proxyFormState,
        callback: () => f({ ...c._formState }),
        reRenderRoot: !0,
      });
      return (
        f((h) => ({ ...h, isReady: !0 })),
        (c._formState.isReady = !0),
        d
      );
    }, [c]),
    ke.useEffect(() => c._disableForm(o.disabled), [c, o.disabled]),
    ke.useEffect(() => {
      (o.mode && (c._options.mode = o.mode),
        o.reValidateMode && (c._options.reValidateMode = o.reValidateMode));
    }, [c, o.mode, o.reValidateMode]),
    ke.useEffect(() => {
      o.errors && (c._setErrors(o.errors), c._focusError());
    }, [c, o.errors]),
    ke.useEffect(() => {
      o.shouldUnregister && c._subjects.state.next({ values: c._getWatch() });
    }, [c, o.shouldUnregister]),
    ke.useEffect(() => {
      if (c._proxyFormState.isDirty) {
        const d = c._getDirty();
        d !== s.isDirty && c._subjects.state.next({ isDirty: d });
      }
    }, [c, s.isDirty]),
    ke.useEffect(() => {
      var d;
      o.values && !en(o.values, r.current)
        ? (c._reset(o.values, {
            keepFieldsRef: !0,
            ...c._options.resetOptions,
          }),
          (!((d = c._options.resetOptions) === null || d === void 0) &&
            d.keepIsValid) ||
            c._setValid(),
          (r.current = o.values),
          f((h) => ({ ...h })))
        : c._resetDefaultValues();
    }, [c, o.values]),
    ke.useEffect(() => {
      (c._state.mount || (c._setValid(), (c._state.mount = !0)),
        c._state.watch &&
          ((c._state.watch = !1), c._subjects.state.next({ ...c._formState })),
        c._removeUnmounted());
    }),
    (i.current.formState = ke.useMemo(() => qg(s, c), [c, s])),
    i.current
  );
}
function Nd(o) {
  var i,
    r,
    s = "";
  if (typeof o == "string" || typeof o == "number") s += o;
  else if (typeof o == "object")
    if (Array.isArray(o)) {
      var f = o.length;
      for (i = 0; i < f; i++)
        o[i] && (r = Nd(o[i])) && (s && (s += " "), (s += r));
    } else for (r in o) o[r] && (s && (s += " "), (s += r));
  return s;
}
function rr() {
  for (var o, i, r = 0, s = "", f = arguments.length; r < f; r++)
    (o = arguments[r]) && (i = Nd(o)) && (s && (s += " "), (s += i));
  return s;
}
function ym(o) {
  if (typeof document > "u") return;
  let i = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  ((r.type = "text/css"),
    i.firstChild ? i.insertBefore(r, i.firstChild) : i.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = o)
      : r.appendChild(document.createTextNode(o)));
}
ym(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
var ji = (o) => typeof o == "number" && !isNaN(o),
  ir = (o) => typeof o == "string",
  pn = (o) => typeof o == "function",
  vm = (o) => ir(o) || ji(o),
  ml = (o) => (ir(o) || pn(o) ? o : null),
  wm = (o, i) => (o === !1 || (ji(o) && o > 0) ? o : i),
  yl = (o) => le.isValidElement(o) || ir(o) || pn(o) || ji(o);
function km(o, i, r = 300) {
  let { scrollHeight: s, style: f } = o;
  requestAnimationFrame(() => {
    ((f.minHeight = "initial"),
      (f.height = s + "px"),
      (f.transition = `all ${r}ms`),
      requestAnimationFrame(() => {
        ((f.height = "0"),
          (f.padding = "0"),
          (f.margin = "0"),
          setTimeout(i, r));
      }));
  });
}
function Sm({
  enter: o,
  exit: i,
  appendPosition: r = !1,
  collapse: s = !0,
  collapseDuration: f = 300,
}) {
  return function ({
    children: c,
    position: d,
    preventExitTransition: h,
    done: g,
    nodeRef: w,
    isIn: v,
    playToast: k,
  }) {
    let x = r ? `${o}--${d}` : o,
      D = r ? `${i}--${d}` : i,
      A = le.useRef(0);
    return (
      le.useLayoutEffect(() => {
        let O = w.current,
          L = x.split(" "),
          I = (R) => {
            R.target === w.current &&
              (k(),
              O.removeEventListener("animationend", I),
              O.removeEventListener("animationcancel", I),
              A.current === 0 &&
                R.type !== "animationcancel" &&
                O.classList.remove(...L));
          };
        (O.classList.add(...L),
          O.addEventListener("animationend", I),
          O.addEventListener("animationcancel", I));
      }, []),
      le.useEffect(() => {
        let O = w.current,
          L = () => {
            (O.removeEventListener("animationend", L), s ? km(O, g, f) : g());
          };
        v ||
          (h
            ? L()
            : ((A.current = 1),
              (O.className += ` ${D}`),
              O.addEventListener("animationend", L)));
      }, [v]),
      ke.createElement(ke.Fragment, null, c)
    );
  };
}
function Zf(o, i) {
  return {
    content: Ld(o.content, o.props),
    containerId: o.props.containerId,
    id: o.props.toastId,
    theme: o.props.theme,
    type: o.props.type,
    data: o.props.data || {},
    isLoading: o.props.isLoading,
    icon: o.props.icon,
    reason: o.removalReason,
    status: i,
  };
}
function Ld(o, i, r = !1) {
  return le.isValidElement(o) && !ir(o.type)
    ? le.cloneElement(o, {
        closeToast: i.closeToast,
        toastProps: i,
        data: i.data,
        isPaused: r,
      })
    : pn(o)
      ? o({
          closeToast: i.closeToast,
          toastProps: i,
          data: i.data,
          isPaused: r,
        })
      : o;
}
function xm({ closeToast: o, theme: i, ariaLabel: r = "close" }) {
  return ke.createElement(
    "button",
    {
      className: `Toastify__close-button Toastify__close-button--${i}`,
      type: "button",
      onClick: (s) => {
        (s.stopPropagation(), o(!0));
      },
      "aria-label": r,
    },
    ke.createElement(
      "svg",
      { "aria-hidden": "true", viewBox: "0 0 14 16" },
      ke.createElement("path", {
        fillRule: "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
      }),
    ),
  );
}
function _m({
  delay: o,
  isRunning: i,
  closeToast: r,
  type: s = "default",
  hide: f,
  className: c,
  controlledProgress: d,
  progress: h,
  rtl: g,
  isIn: w,
  theme: v,
}) {
  let k = f || (d && h === 0),
    x = {
      animationDuration: `${o}ms`,
      animationPlayState: i ? "running" : "paused",
    };
  d && (x.transform = `scaleX(${h})`);
  let D = rr(
      "Toastify__progress-bar",
      d
        ? "Toastify__progress-bar--controlled"
        : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${v}`,
      `Toastify__progress-bar--${s}`,
      { "Toastify__progress-bar--rtl": g },
    ),
    A = pn(c) ? c({ rtl: g, type: s, defaultClassName: D }) : rr(D, c),
    O = {
      [d && h >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
        d && h < 1
          ? null
          : () => {
              w && r();
            },
    };
  return ke.createElement(
    "div",
    { className: "Toastify__progress-bar--wrp", "data-hidden": k },
    ke.createElement("div", {
      className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${v} Toastify__progress-bar--${s}`,
    }),
    ke.createElement("div", {
      role: "progressbar",
      "aria-hidden": k ? "true" : "false",
      "aria-label": "notification timer",
      className: A,
      style: x,
      ...O,
    }),
  );
}
var Em = 1,
  Rd = () => `${Em++}`;
function Cm(o, i, r) {
  let s = 1,
    f = 0,
    c = [],
    d = [],
    h = i,
    g = new Map(),
    w = new Set(),
    v = (R) => (w.add(R), () => w.delete(R)),
    k = () => {
      ((d = Array.from(g.values())), w.forEach((R) => R()));
    },
    x = ({ containerId: R, toastId: z, updateId: j }) => {
      let $ = R ? R !== o : o !== 1,
        H = g.has(z) && j == null;
      return $ || H;
    },
    D = (R, z) => {
      g.forEach((j) => {
        var $;
        (z == null || z === j.props.toastId) &&
          (($ = j.toggle) == null || $.call(j, R));
      });
    },
    A = (R) => {
      var z, j;
      ((j = (z = R.props) == null ? void 0 : z.onClose) == null ||
        j.call(z, R.removalReason),
        (R.isActive = !1));
    },
    O = (R) => {
      if (R == null) g.forEach(A);
      else {
        let z = g.get(R);
        z && A(z);
      }
      k();
    },
    L = () => {
      ((f -= c.length), (c = []));
    },
    I = (R) => {
      var z, j;
      let { toastId: $, updateId: H } = R.props,
        W = H == null;
      (R.staleId && g.delete(R.staleId),
        (R.isActive = !0),
        g.set($, R),
        k(),
        r(Zf(R, W ? "added" : "updated")),
        W && ((j = (z = R.props).onOpen) == null || j.call(z)));
    };
  return {
    id: o,
    props: h,
    observe: v,
    toggle: D,
    removeToast: O,
    toasts: g,
    clearQueue: L,
    buildToast: (R, z) => {
      if (x(z)) return;
      let { toastId: j, updateId: $, data: H, staleId: W, delay: q } = z,
        ae = $ == null;
      ae && f++;
      let de = {
        ...h,
        style: h.toastStyle,
        key: s++,
        ...Object.fromEntries(
          Object.entries(z).filter(([G, ie]) => ie != null),
        ),
        toastId: j,
        updateId: $,
        data: H,
        isIn: !1,
        className: ml(z.className || h.toastClassName),
        progressClassName: ml(z.progressClassName || h.progressClassName),
        autoClose: z.isLoading ? !1 : wm(z.autoClose, h.autoClose),
        closeToast(G) {
          ((g.get(j).removalReason = G), O(j));
        },
        deleteToast() {
          let G = g.get(j);
          if (G != null) {
            if (
              (r(Zf(G, "removed")),
              g.delete(j),
              f--,
              f < 0 && (f = 0),
              c.length > 0)
            ) {
              I(c.shift());
              return;
            }
            k();
          }
        },
      };
      ((de.closeButton = h.closeButton),
        z.closeButton === !1 || yl(z.closeButton)
          ? (de.closeButton = z.closeButton)
          : z.closeButton === !0 &&
            (de.closeButton = yl(h.closeButton) ? h.closeButton : !0));
      let pe = { content: R, props: de, staleId: W };
      h.limit && h.limit > 0 && f > h.limit && ae
        ? c.push(pe)
        : ji(q)
          ? setTimeout(() => {
              I(pe);
            }, q)
          : I(pe);
    },
    setProps(R) {
      h = R;
    },
    setToggle: (R, z) => {
      let j = g.get(R);
      j && (j.toggle = z);
    },
    isToastActive: (R) => {
      var z;
      return (z = g.get(R)) == null ? void 0 : z.isActive;
    },
    getSnapshot: () => d,
  };
}
var vt = new Map(),
  Ai = [],
  vl = new Set(),
  Tm = (o) => vl.forEach((i) => i(o)),
  Od = () => vt.size > 0;
function Nm() {
  (Ai.forEach((o) => Fd(o.content, o.options)), (Ai = []));
}
var Lm = (o, { containerId: i }) => {
  var r;
  return (r = vt.get(i || 1)) == null ? void 0 : r.toasts.get(o);
};
function Pd(o, i) {
  var r;
  if (i) return !!((r = vt.get(i)) != null && r.isToastActive(o));
  let s = !1;
  return (
    vt.forEach((f) => {
      f.isToastActive(o) && (s = !0);
    }),
    s
  );
}
function Rm(o) {
  if (!Od()) {
    Ai = Ai.filter((i) => o != null && i.options.toastId !== o);
    return;
  }
  if (o == null || vm(o))
    vt.forEach((i) => {
      i.removeToast(o);
    });
  else if (o && ("containerId" in o || "id" in o)) {
    let i = vt.get(o.containerId);
    i
      ? i.removeToast(o.id)
      : vt.forEach((r) => {
          r.removeToast(o.id);
        });
  }
}
var Om = (o = {}) => {
  vt.forEach((i) => {
    i.props.limit &&
      (!o.containerId || i.id === o.containerId) &&
      i.clearQueue();
  });
};
function Fd(o, i) {
  yl(o) &&
    (Od() || Ai.push({ content: o, options: i }),
    vt.forEach((r) => {
      r.buildToast(o, i);
    }));
}
function Pm(o) {
  var i;
  (i = vt.get(o.containerId || 1)) == null || i.setToggle(o.id, o.fn);
}
function Dd(o, i) {
  vt.forEach((r) => {
    (i == null ||
      !(i != null && i.containerId) ||
      (i == null ? void 0 : i.containerId) === r.id) &&
      r.toggle(o, i == null ? void 0 : i.id);
  });
}
function Fm(o) {
  let i = o.containerId || 1;
  return {
    subscribe(r) {
      let s = Cm(i, o, Tm);
      vt.set(i, s);
      let f = s.observe(r);
      return (
        Nm(),
        () => {
          (f(), vt.delete(i));
        }
      );
    },
    setProps(r) {
      var s;
      (s = vt.get(i)) == null || s.setProps(r);
    },
    getSnapshot() {
      var r;
      return (r = vt.get(i)) == null ? void 0 : r.getSnapshot();
    },
  };
}
function Dm(o) {
  return (
    vl.add(o),
    () => {
      vl.delete(o);
    }
  );
}
function Am(o) {
  return o && (ir(o.toastId) || ji(o.toastId)) ? o.toastId : Rd();
}
function Bi(o, i) {
  return (Fd(o, i), i.toastId);
}
function ua(o, i) {
  return { ...i, type: (i && i.type) || o, toastId: Am(i) };
}
function ca(o) {
  return (i, r) => Bi(i, ua(o, r));
}
function Ae(o, i) {
  return Bi(o, ua("default", i));
}
Ae.loading = (o, i) =>
  Bi(
    o,
    ua("default", {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...i,
    }),
  );
function bm(o, { pending: i, error: r, success: s }, f) {
  let c;
  i && (c = ir(i) ? Ae.loading(i, f) : Ae.loading(i.render, { ...f, ...i }));
  let d = {
      isLoading: null,
      autoClose: null,
      closeOnClick: null,
      closeButton: null,
      draggable: null,
    },
    h = (w, v, k) => {
      if (v == null) {
        Ae.dismiss(c);
        return;
      }
      let x = { type: w, ...d, ...f, data: k },
        D = ir(v) ? { render: v } : v;
      return (
        c ? Ae.update(c, { ...x, ...D }) : Ae(D.render, { ...x, ...D }),
        k
      );
    },
    g = pn(o) ? o() : o;
  return (g.then((w) => h("success", s, w)).catch((w) => h("error", r, w)), g);
}
Ae.promise = bm;
Ae.success = ca("success");
Ae.info = ca("info");
Ae.error = ca("error");
Ae.warning = ca("warning");
Ae.warn = Ae.warning;
Ae.dark = (o, i) => Bi(o, ua("default", { theme: "dark", ...i }));
function Im(o) {
  Rm(o);
}
Ae.dismiss = Im;
Ae.clearWaitingQueue = Om;
Ae.isActive = Pd;
Ae.update = (o, i = {}) => {
  let r = Lm(o, i);
  if (r) {
    let { props: s, content: f } = r,
      c = { delay: 100, ...s, ...i, toastId: i.toastId || o, updateId: Rd() };
    c.toastId !== o && (c.staleId = o);
    let d = c.render || f;
    (delete c.render, Bi(d, c));
  }
};
Ae.done = (o) => {
  Ae.update(o, { progress: 1 });
};
Ae.onChange = Dm;
Ae.play = (o) => Dd(!0, o);
Ae.pause = (o) => Dd(!1, o);
function jm(o) {
  var i;
  let { subscribe: r, getSnapshot: s, setProps: f } = le.useRef(Fm(o)).current;
  f(o);
  let c = (i = le.useSyncExternalStore(r, s, s)) == null ? void 0 : i.slice();
  function d(h) {
    if (!c) return [];
    let g = new Map();
    return (
      o.newestOnTop && c.reverse(),
      c.forEach((w) => {
        let { position: v } = w.props;
        (g.has(v) || g.set(v, []), g.get(v).push(w));
      }),
      Array.from(g, (w) => h(w[0], w[1]))
    );
  }
  return {
    getToastToRender: d,
    isToastActive: Pd,
    count: c == null ? void 0 : c.length,
  };
}
function Bm(o) {
  let [i, r] = le.useState(!1),
    [s, f] = le.useState(!1),
    c = le.useRef(null),
    d = le.useRef({
      start: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      didMove: !1,
    }).current,
    {
      autoClose: h,
      pauseOnHover: g,
      closeToast: w,
      onClick: v,
      closeOnClick: k,
    } = o;
  (Pm({ id: o.toastId, containerId: o.containerId, fn: r }),
    le.useEffect(() => {
      if (o.pauseOnFocusLoss)
        return (
          x(),
          () => {
            D();
          }
        );
    }, [o.pauseOnFocusLoss]));
  function x() {
    (document.hasFocus() || I(),
      window.addEventListener("focus", L),
      window.addEventListener("blur", I));
  }
  function D() {
    (window.removeEventListener("focus", L),
      window.removeEventListener("blur", I));
  }
  function A(W) {
    if (o.draggable === !0 || o.draggable === W.pointerType) {
      R();
      let q = c.current;
      ((d.canCloseOnClick = !0),
        (d.canDrag = !0),
        (q.style.transition = "none"),
        o.draggableDirection === "x"
          ? ((d.start = W.clientX),
            (d.removalDistance = q.offsetWidth * (o.draggablePercent / 100)))
          : ((d.start = W.clientY),
            (d.removalDistance =
              (q.offsetHeight *
                (o.draggablePercent === 80
                  ? o.draggablePercent * 1.5
                  : o.draggablePercent)) /
              100)));
    }
  }
  function O(W) {
    let {
      top: q,
      bottom: ae,
      left: de,
      right: pe,
    } = c.current.getBoundingClientRect();
    W.nativeEvent.type !== "touchend" &&
    o.pauseOnHover &&
    W.clientX >= de &&
    W.clientX <= pe &&
    W.clientY >= q &&
    W.clientY <= ae
      ? I()
      : L();
  }
  function L() {
    r(!0);
  }
  function I() {
    r(!1);
  }
  function R() {
    ((d.didMove = !1),
      document.addEventListener("pointermove", j),
      document.addEventListener("pointerup", $));
  }
  function z() {
    (document.removeEventListener("pointermove", j),
      document.removeEventListener("pointerup", $));
  }
  function j(W) {
    let q = c.current;
    if (d.canDrag && q) {
      ((d.didMove = !0),
        i && I(),
        o.draggableDirection === "x"
          ? (d.delta = W.clientX - d.start)
          : (d.delta = W.clientY - d.start),
        d.start !== W.clientX && (d.canCloseOnClick = !1));
      let ae =
        o.draggableDirection === "x"
          ? `${d.delta}px, var(--y)`
          : `0, calc(${d.delta}px + var(--y))`;
      ((q.style.transform = `translate3d(${ae},0)`),
        (q.style.opacity = `${1 - Math.abs(d.delta / d.removalDistance)}`));
    }
  }
  function $() {
    z();
    let W = c.current;
    if (d.canDrag && d.didMove && W) {
      if (((d.canDrag = !1), Math.abs(d.delta) > d.removalDistance)) {
        (f(!0), o.closeToast(!0), o.collapseAll());
        return;
      }
      ((W.style.transition = "transform 0.2s, opacity 0.2s"),
        W.style.removeProperty("transform"),
        W.style.removeProperty("opacity"));
    }
  }
  let H = { onPointerDown: A, onPointerUp: O };
  return (
    h && g && ((H.onMouseEnter = I), o.stacked || (H.onMouseLeave = L)),
    k &&
      (H.onClick = (W) => {
        (v && v(W), d.canCloseOnClick && w(!0));
      }),
    {
      playToast: L,
      pauseToast: I,
      isRunning: i,
      preventExitTransition: s,
      toastRef: c,
      eventHandlers: H,
    }
  );
}
var zm = typeof window < "u" ? le.useLayoutEffect : le.useEffect,
  fa = ({ theme: o, type: i, isLoading: r, ...s }) =>
    ke.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill:
        o === "colored" ? "currentColor" : `var(--toastify-icon-color-${i})`,
      ...s,
    });
function Mm(o) {
  return ke.createElement(
    fa,
    { ...o },
    ke.createElement("path", {
      d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
    }),
  );
}
function Vm(o) {
  return ke.createElement(
    fa,
    { ...o },
    ke.createElement("path", {
      d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
    }),
  );
}
function Km(o) {
  return ke.createElement(
    fa,
    { ...o },
    ke.createElement("path", {
      d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
    }),
  );
}
function $m(o) {
  return ke.createElement(
    fa,
    { ...o },
    ke.createElement("path", {
      d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
    }),
  );
}
function Um() {
  return ke.createElement("div", { className: "Toastify__spinner" });
}
var wl = { info: Vm, warning: Mm, success: Km, error: $m, spinner: Um },
  Hm = (o) => o in wl;
function Wm({ theme: o, type: i, isLoading: r, icon: s }) {
  let f = null,
    c = { theme: o, type: i };
  return (
    s === !1 ||
      (pn(s)
        ? (f = s({ ...c, isLoading: r }))
        : le.isValidElement(s)
          ? (f = le.cloneElement(s, c))
          : r
            ? (f = wl.spinner())
            : Hm(i) && (f = wl[i](c))),
    f
  );
}
var Ym = (o) => {
    let {
        isRunning: i,
        preventExitTransition: r,
        toastRef: s,
        eventHandlers: f,
        playToast: c,
      } = Bm(o),
      {
        closeButton: d,
        children: h,
        autoClose: g,
        onClick: w,
        type: v,
        hideProgressBar: k,
        closeToast: x,
        transition: D,
        position: A,
        className: O,
        style: L,
        progressClassName: I,
        updateId: R,
        role: z,
        progress: j,
        rtl: $,
        toastId: H,
        deleteToast: W,
        isIn: q,
        isLoading: ae,
        closeOnClick: de,
        theme: pe,
        ariaLabel: G,
      } = o,
      ie = rr(
        "Toastify__toast",
        `Toastify__toast-theme--${pe}`,
        `Toastify__toast--${v}`,
        { "Toastify__toast--rtl": $ },
        { "Toastify__toast--close-on-click": de },
      ),
      he = pn(O)
        ? O({ rtl: $, position: A, type: v, defaultClassName: ie })
        : rr(ie, O),
      _e = Wm(o),
      Te = !!j || !g,
      ce = { closeToast: x, type: v, theme: pe },
      V = null;
    return (
      d === !1 ||
        (pn(d)
          ? (V = d(ce))
          : le.isValidElement(d)
            ? (V = le.cloneElement(d, ce))
            : (V = xm(ce))),
      ke.createElement(
        D,
        {
          isIn: q,
          done: W,
          position: A,
          preventExitTransition: r,
          nodeRef: s,
          playToast: c,
        },
        ke.createElement(
          "div",
          {
            id: H,
            tabIndex: 0,
            onClick: w,
            "data-in": q,
            className: he,
            ...f,
            style: L,
            ref: s,
            ...(q && { role: z, "aria-label": G }),
          },
          _e != null &&
            ke.createElement(
              "div",
              {
                className: rr("Toastify__toast-icon", {
                  "Toastify--animate-icon Toastify__zoom-enter": !ae,
                }),
              },
              _e,
            ),
          Ld(h, o, !i),
          V,
          !o.customProgressBar &&
            ke.createElement(_m, {
              ...(R && !Te ? { key: `p-${R}` } : {}),
              rtl: $,
              theme: pe,
              delay: g,
              isRunning: i,
              isIn: q,
              closeToast: x,
              hide: k,
              type: v,
              className: I,
              controlledProgress: Te,
              progress: j || 0,
            }),
        ),
      )
    );
  },
  Gm = (o, i = !1) => ({
    enter: `Toastify--animate Toastify__${o}-enter`,
    exit: `Toastify--animate Toastify__${o}-exit`,
    appendPosition: i,
  }),
  Ad = Sm(Gm("bounce", !0)),
  Qm = {
    position: "top-right",
    transition: Ad,
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
    hotKeys: (o) => o.altKey && o.code === "KeyT",
  };
function Xm(o) {
  let i = { ...Qm, ...o },
    r = o.stacked,
    [s, f] = le.useState(!0),
    c = le.useRef(null),
    { getToastToRender: d, isToastActive: h, count: g } = jm(i),
    { className: w, style: v, rtl: k, containerId: x, hotKeys: D } = i;
  function A(L) {
    let I = rr("Toastify__toast-container", `Toastify__toast-container--${L}`, {
      "Toastify__toast-container--rtl": k,
    });
    return pn(w)
      ? w({ position: L, rtl: k, defaultClassName: I })
      : rr(I, ml(w));
  }
  function O() {
    r && (f(!0), Ae.play());
  }
  return (
    zm(() => {
      var L;
      if (r) {
        let I = c.current.querySelectorAll('[data-in="true"]'),
          R = 12,
          z = (L = i.position) == null ? void 0 : L.includes("top"),
          j = 0,
          $ = 0;
        Array.from(I)
          .reverse()
          .forEach((H, W) => {
            let q = H;
            (q.classList.add("Toastify__toast--stacked"),
              W > 0 && (q.dataset.collapsed = `${s}`),
              q.dataset.pos || (q.dataset.pos = z ? "top" : "bot"));
            let ae = j * (s ? 0.2 : 1) + (s ? 0 : R * W);
            (q.style.setProperty("--y", `${z ? ae : ae * -1}px`),
              q.style.setProperty("--g", `${R}`),
              q.style.setProperty("--s", `${1 - (s ? $ : 0)}`),
              (j += q.offsetHeight),
              ($ += 0.025));
          });
      }
    }, [s, g, r]),
    le.useEffect(() => {
      function L(I) {
        var R;
        let z = c.current;
        (D(I) &&
          ((R = z.querySelector('[tabIndex="0"]')) == null || R.focus(),
          f(!1),
          Ae.pause()),
          I.key === "Escape" &&
            (document.activeElement === z ||
              (z != null && z.contains(document.activeElement))) &&
            (f(!0), Ae.play()));
      }
      return (
        document.addEventListener("keydown", L),
        () => {
          document.removeEventListener("keydown", L);
        }
      );
    }, [D]),
    ke.createElement(
      "section",
      {
        ref: c,
        className: "Toastify",
        id: x,
        onMouseEnter: () => {
          r && (f(!1), Ae.pause());
        },
        onMouseLeave: O,
        "aria-live": "polite",
        "aria-atomic": "false",
        "aria-relevant": "additions text",
        "aria-label": i["aria-label"],
      },
      d((L, I) => {
        let R = I.length ? { ...v } : { ...v, pointerEvents: "none" };
        return ke.createElement(
          "div",
          {
            tabIndex: -1,
            className: A(L),
            "data-stacked": r,
            style: R,
            key: `c-${L}`,
          },
          I.map(({ content: z, props: j }) =>
            ke.createElement(
              Ym,
              {
                ...j,
                stacked: r,
                collapseAll: O,
                isIn: h(j.toastId, j.containerId),
                key: `t-${j.key}`,
              },
              z,
            ),
          ),
        );
      }),
    )
  );
}
const qm = [
    { key: "", value: { lt: "Skaidri apdaila", en: "Clear lacquering" } },
    {
      key: "3% 10.07.17 - 3% balinimas",
      value: {
        lt: "3% 10.07.17 - 3% balinimas (std)",
        en: "3% 10.07.17 - 3% Whitened  (std)",
      },
      bg: "grey",
    },
    {
      key: "6% 11.07.17 - 6% balinimas",
      value: {
        lt: "6% 11.07.17 - 6% balinimas",
        en: "6% 11.07.17 - 6% Whitened",
      },
    },
    {
      key: "10% 12.07.17 - 10% balinimas",
      value: {
        lt: "10% 12.07.17 - 10% balinimas",
        en: "10% 12.07.17 - 10% Whitened",
      },
    },
    {
      key: "1,5% 14.09.21 - 1,5% balinimas",
      value: {
        lt: "1,5% 14.09.21 - 1,5% balinimas",
        en: "1,5% 14.09.21 - 1,5% Whitened",
      },
    },
    {
      key: "19.11.19 - Juoda",
      value: { lt: "19.11.19 - Juoda (std)", en: "19.11.19 - Black (std)" },
      bg: "grey",
    },
    {
      key: "09.05.22 - Ruda",
      value: {
        lt: "09.05.22 - Ruda (nr. 21)",
        en: "09.05.22 - Brown (no. 21)",
      },
    },
    {
      key: "20.11.19 - Ruda",
      value: {
        lt: "20.11.19 - Ruda (nr. 22)",
        en: "20.11.19 - Brown (no. 22)",
      },
    },
    {
      key: "02.01.20 - Ruda",
      value: {
        lt: "02.01.20 - Ruda (nr. 23)",
        en: "02.01.20 - Brown (no. 23)",
      },
    },
    {
      key: "02.06.10 - Ruda",
      value: {
        lt: "02.06.10 - Ruda (nr. 24)",
        en: "02.06.10 - Brown (no. 24)",
      },
    },
    {
      key: "01.06.12 - Balinta",
      value: { lt: "01.06.12 - Balinta", en: "01.06.12 - Whitened" },
    },
    {
      key: "01.27.16 - Balinta",
      value: { lt: "01.27.16 - Balinta", en: "01.27.16 - Whitened" },
    },
    {
      key: "31.01.17 - Balinta",
      value: { lt: "31.01.17 - Balinta", en: "31.01.17 - Whitened" },
    },
    {
      key: "25.04.17 - Balinta",
      value: { lt: "25.04.17 - Balinta", en: "25.04.17 - Whitened" },
    },
    {
      key: "26.04.17 - Balinta",
      value: { lt: "26.04.17 - Balinta", en: "26.04.17 - Whitened" },
    },
    {
      key: "27.04.17 - S2000 - N",
      value: { lt: "27.04.17 - S2000-N", en: "27.04.17 - S2000-N" },
    },
    {
      key: "03.05.17 - S0500 - N",
      value: { lt: "03.05.17 - S0500-N", en: "03.05.17 - S0500-N" },
    },
    {
      key: "05.06.17 - Oak Auster (stone)",
      value: {
        lt: "05.06.17 - Oak Auster (stone)",
        en: "05.06.17 - Oak Auster (stone)",
      },
    },
    {
      key: "23.11.17 - S2040 - Y",
      value: { lt: "23.11.17 - S2040-Y", en: "23.11.17 - S2040-Y" },
    },
    {
      key: "10.10.18 - Ruda",
      value: { lt: "10.10.18 - Ruda", en: "10.10.18 - Brown" },
    },
    {
      key: "11.10.18 - Ruda",
      value: { lt: "11.10.18 - Ruda", en: "11.10.18 - Brown" },
    },
    {
      key: "12.10.18 - Balinta",
      value: { lt: "12.10.18 - Balinta", en: "12.10.18 - Whitened" },
    },
    {
      key: "24.04.19 - Ruda",
      value: { lt: "24.04.19 - Ruda", en: "24.04.19 - Brown" },
    },
    {
      key: "27.08.19 - Balinta",
      value: { lt: "27.08.19 - Balinta", en: "27.08.19 - Whitened" },
    },
    {
      key: "08.11.19 - Ruda",
      value: { lt: "08.11.19 - Ruda", en: "08.11.19 - Brown" },
    },
    {
      key: "21.11.19 - Balinta",
      value: { lt: "21.11.19 - Balinta", en: "21.11.19 - Whitened" },
    },
    {
      key: "22.11.19 - Balinta",
      value: { lt: "22.11.19 - Balinta", en: "22.11.19 - Whitened" },
    },
    {
      key: "12.02.20 - S5040 - Y90R",
      value: { lt: "12.02.20 - S5040-Y90R", en: "12.02.20 - S5040-Y90R" },
    },
    {
      key: "07.04.20 - S2000 - N",
      value: { lt: "07.04.20 - S2000-N", en: "07.04.20 - S2000-N" },
    },
    {
      key: "07.05.20 - Vintage",
      value: { lt: "07.05.20 - Vintage", en: "07.05.20 - Vintage" },
    },
    {
      key: "12.08.20 - Balinta",
      value: { lt: "12.08.20 - Balinta", en: "12.08.20 - Whitened" },
    },
    {
      key: "30.10.20 - Balinta",
      value: { lt: "30.10.20 - Balinta", en: "30.10.20 - Whitened" },
    },
    {
      key: "23.11.20 - Balinta",
      value: { lt: "23.11.20 - Balinta", en: "23.11.20 - Whitened" },
    },
    {
      key: "20.01.21 - Pilka",
      value: { lt: "20.01.21 - Pilka", en: "20.01.21 - Grey" },
    },
    {
      key: "02.03.21 - Vintage",
      value: { lt: "02.03.21 - Vintage", en: "02.03.21 - Vintage" },
    },
    {
      key: "03.03.21 - Ruda",
      value: { lt: "03.03.21 - Ruda", en: "03.03.21 - Brown" },
    },
    {
      key: "01.07.21 - Gratonet",
      value: { lt: "01.07.21 - Gratonet", en: "01.07.21 - Gratonet" },
    },
    {
      key: "28.09.21 - Nero Natur",
      value: { lt: "28.09.21 - Nero Natur", en: "28.09.21 - Nero Natur" },
    },
    {
      key: "18.03.22 - Pilka",
      value: { lt: "18.03.22 - Pilka", en: "18.03.22 - Grey" },
    },
    {
      key: "25.04.22 - Balinta",
      value: { lt: "25.04.22 - Balinta", en: "25.04.22 - Whitened" },
    },
    {
      key: "23.09.22 - Ruda",
      value: { lt: "23.09.22 - Ruda", en: "23.09.22 - Brown" },
    },
    {
      key: "25.11.22 - Pilka Smoked oak",
      value: {
        lt: "25.11.22 - Pilka Smoked oak",
        en: "25.11.22 - Grey Smoked oak",
      },
    },
    {
      key: "09.12.22 - Žalia",
      value: { lt: "09.12.22 - Žalia", en: "09.12.22 - Green" },
    },
    {
      key: "23.01.23 - Ruda Teak",
      value: { lt: "23.01.23 - Ruda Teak", en: "23.01.23 - Brown Teak" },
    },
    {
      key: "30.01.23 - Ruda F5872 Refined Walnut",
      value: {
        lt: "30.01.23 - Ruda F5872 Refined Walnut",
        en: "30.01.23 - Brown F5872 Refined Walnut",
      },
    },
    {
      key: "27.04.23 - S7010 - R90B",
      value: { lt: "27.04.23 - S7010-R90B", en: "27.04.23 - S7010-R90B" },
    },
    {
      key: "25.05.23 - S3005 - G20Y",
      value: { lt: "25.05.23 - S3005-G20Y", en: "25.05.23 - S3005-G20Y" },
    },
    {
      key: "01.12.23 - S1515 - R",
      value: { lt: "01.12.23 - S1515-R", en: "01.12.23 - S1515-R" },
    },
    {
      key: "03.04.24 - Pilka",
      value: { lt: "03.04.24 - Pilka", en: "03.04.24 - Grey" },
    },
    {
      key: "08.04.24 - S6020 - B10G",
      value: { lt: "08.04.24 - S6020-B10G", en: "08.04.24 - S6020-B10G" },
    },
    {
      key: "09.04.24 - S7010 - B90G",
      value: { lt: "09.04.24 - S7010-B90G", en: "09.04.24 - S7010-B90G" },
    },
    {
      key: "22.04.24 - S5010 - G50Y",
      value: { lt: "22.04.24 - S5010-G50Y", en: "22.04.24 - S5010-G50Y" },
    },
    {
      key: "03.09.24 - Ruda",
      value: { lt: "03.09.24 - Ruda", en: "03.09.24 - Brown" },
    },
    {
      key: "04.09.24 - Tamsiai pilka / Juoda",
      value: {
        lt: "04.09.24 - Tamsiai pilka / Juoda",
        en: "04.09.24 - Dark Grey / Juoda",
      },
    },
    {
      key: "08.10.24 - Ruda",
      value: { lt: "08.10.24 - Ruda", en: "08.10.24 - Brown" },
    },
    {
      key: "28.10.24 - Ruda",
      value: { lt: "28.10.24 - Ruda", en: "28.10.24 - Brown" },
    },
  ],
  Jm = [
    { key: "gl.5", value: { lt: "gl.5", en: "gl.5" } },
    { key: "gl.10", value: { lt: "gl.10", en: "gl.10" } },
    { key: "gl.15", value: { lt: "gl.15", en: "gl.15" } },
    { key: "gl.25", value: { lt: "gl.25", en: "gl.25" } },
  ],
  Zm = [
    { key: "null", value: { lt: "Visi paviršiai", en: "All surfaces" } },
    { key: "3% 10.07.17", value: { lt: "3% 10.07.17", en: "3% 10.07.17" } },
    { key: "6% 11.07.17", value: { lt: "6% 11.07.17", en: "6% 11.07.17" } },
    { key: "10% 12.07.17", value: { lt: "10% 12.07.17", en: "10% 12.07.17" } },
  ],
  e0 = [
    { key: "KL", value: { lt: "KL - Lakuota*", en: "KL - Varnished*" } },
    { key: "GR", value: { lt: "GR - Gruntuota", en: "GR - Primed" } },
    { key: "PUSS", value: { lt: "PUSS - Šlifuota", en: "PUSS - Sanded" } },
    {
      key: "UBH",
      value: { lt: "UBH - Neapdailinta", en: "UBH - Raw/Undecorated" },
    },
  ],
  t0 = [
    { key: "ash", value: { lt: "Uosis", en: "Ash" } },
    { key: "birch", value: { lt: "Beržas", en: "Birch" } },
    { key: "beech", value: { lt: "Bukas", en: "Beech" } },
    { key: "oak", value: { lt: "Ąžuolas", en: "Oak" } },
    { key: "sycamore", value: { lt: "Klevas", en: "Sycamore" } },
    { key: "pine", value: { lt: "Pušis", en: "Pine" } },
    { key: "walnut", value: { lt: "Riešutmedis", en: "Walnut" } },
  ],
  ed = JSON.parse(
    '[{"decorKey":"","woodKey":"ash","image":"ash/Foto-0127 Ash2-gl.5.webp"},{"decorKey":"","woodKey":"birch","image":"birch/Foto-0123 Birch-gl.5.webp"},{"decorKey":"","woodKey":"beech","image":"beech/Foto-0287 Beech-gl.5.webp"},{"decorKey":"","woodKey":"pine","image":"pine/Foto-0113 Pine-gl.5.webp"},{"decorKey":"","woodKey":"oak","image":"oak/Foto-0149 Oak2-gl.5.webp"},{"decorKey":"","woodKey":"sycamore","image":"sycamore/Foto-0115 Sycamore-gl.5.webp"},{"decorKey":"","woodKey":"walnut","image":"walnut/Foto-0119 Walnut2-gl.5.webp"},{"decorKey":"3% 10.07.17 - 3% balinimas","woodKey":"ash","image":"ash/Foto-0045 Ash2-10.07.17.webp"},{"decorKey":"3% 10.07.17 - 3% balinimas","woodKey":"birch","image":"birch/Foto-0051 Birch-10.07.17.webp"},{"decorKey":"3% 10.07.17 - 3% balinimas","woodKey":"beech","image":"beech/Foto-0053 Beech-10.07.17.webp"},{"decorKey":"3% 10.07.17 - 3% balinimas","woodKey":"pine","image":"pine/Foto-0055 Pine-10.07.17.webp"},{"decorKey":"3% 10.07.17 - 3% balinimas","woodKey":"oak","image":"oak/Foto-0185 Oak2-10.07.17.webp"},{"decorKey":"6% 11.07.17 - 6% balinimas","woodKey":"ash","image":"ash/Foto-0243 Ash2-11.07.17.webp"},{"decorKey":"6% 11.07.17 - 6% balinimas","woodKey":"birch","image":"birch/Foto-0249 Birch-11.07.17.webp"},{"decorKey":"6% 11.07.17 - 6% balinimas","woodKey":"beech","image":"beech/Foto-0251 Beech-11.07.17.webp"},{"decorKey":"6% 11.07.17 - 6% balinimas","woodKey":"pine","image":"pine/Foto-0253 Pine-11.07.17.webp"},{"decorKey":"6% 11.07.17 - 6% balinimas","woodKey":"oak","image":"oak/Foto-0237 Oak2-11.07.17.webp"},{"decorKey":"10% 12.07.17 - 10% balinimas","woodKey":"ash","image":"ash/Foto-0217 Ash2-12.07.17.webp"},{"decorKey":"10% 12.07.17 - 10% balinimas","woodKey":"birch","image":"birch/Foto-0223 Birch-12.07.17.webp"},{"decorKey":"10% 12.07.17 - 10% balinimas","woodKey":"beech","image":"beech/Foto-0225 Beech-12.07.17.webp"},{"decorKey":"10% 12.07.17 - 10% balinimas","woodKey":"pine","image":"pine/Foto-0227 Pine-12.07.17.webp"},{"decorKey":"10% 12.07.17 - 10% balinimas","woodKey":"oak","image":"oak/Foto-0231 Oak2-12.07.17.webp"},{"decorKey":"1,5% 14.09.21 - 1,5% balinimas","woodKey":"ash","image":"ash/Foto-0205 Ash-14.09.21.webp"},{"decorKey":"1,5% 14.09.21 - 1,5% balinimas","woodKey":"oak","image":"oak/Foto-0207 Oak-14.09.21.webp"},{"decorKey":"19.11.19 - Juoda","woodKey":"ash","image":"ash/Foto-0105 Ash-19.11.19.webp"},{"decorKey":"19.11.19 - Juoda","woodKey":"oak","image":"oak/Foto-0107 Eur.Oak-19.11.19.webp"},{"decorKey":"09.05.22 - Ruda","woodKey":"ash","image":"ash/Foto-0263 Ash-09.05.22.webp"},{"decorKey":"09.05.22 - Ruda","woodKey":"oak","image":"oak/Foto-0261 Oak-09.05.22.webp"},{"decorKey":"20.11.19 - Ruda","woodKey":"ash","image":"ash/Foto-0101 Ash-20.11.19.webp"},{"decorKey":"20.11.19 - Ruda","woodKey":"walnut","image":"walnut/Foto-0109 Walnut2-20.11.19.webp"},{"decorKey":"20.11.19 - Ruda","woodKey":"oak","image":"oak/Foto-0103 Oak-20.11.19.webp"},{"decorKey":"02.01.20 - Ruda","woodKey":"ash","image":"ash/Foto-0097 Ash-02.01.20.webp"},{"decorKey":"02.01.20 - Ruda","woodKey":"oak","image":"oak/Foto-0099 Oak-02.01.20.webp"},{"decorKey":"02.06.10 - Ruda","woodKey":"ash","image":"ash/Foto-0155 Ash2-02.06.10.webp"},{"decorKey":"02.06.10 - Ruda","woodKey":"oak","image":"oak/Foto-0163 Oak2-02.06.10.webp"},{"decorKey":"01.06.12 - Balinta","woodKey":"beech","image":"beech/Foto-0131 Beech-01.06.12.webp"},{"decorKey":"01.06.12 - Balinta","woodKey":"sycamore","image":"sycamore/Foto-0137 Sycamore-01.06.12.webp"},{"decorKey":"01.06.12 - Balinta","woodKey":"oak","image":"oak/Foto-0133 Oak-01.06.12.webp"},{"decorKey":"10.10.18 - Ruda","woodKey":"ash","image":"ash/Foto-0171 Ash-10.10.18.webp"},{"decorKey":"10.10.18 - Ruda","woodKey":"oak","image":"oak/Foto-0173 Oak-10.10.18.webp"},{"decorKey":"11.10.18 - Ruda","woodKey":"ash","image":"ash/Foto-0169 Ash-11.10.18.webp"},{"decorKey":"11.10.18 - Ruda","woodKey":"oak","image":"oak/Foto-0167 Oak-11.10.18.webp"},{"decorKey":"24.04.19 - Ruda","woodKey":"ash","image":"ash/Foto-0175 Ash-24.04.19.webp"},{"decorKey":"24.04.19 - Ruda","woodKey":"oak","image":"oak/Foto-0177 Oak-24.04.19.webp"},{"decorKey":"08.11.19 - Ruda","woodKey":"ash","image":"ash/Foto-0181 Ash-08.11.19.webp"},{"decorKey":"08.11.19 - Ruda","woodKey":"oak","image":"oak/Foto-0179 Oak-08.11.19.webp"},{"decorKey":"21.11.19 - Balinta","woodKey":"ash","image":"ash/Foto-0030 Ash-21.11.19.webp"},{"decorKey":"21.11.19 - Balinta","woodKey":"oak","image":"oak/Foto-0023 Oak2-21.11.19.webp"},{"decorKey":"22.11.19 - Balinta","woodKey":"ash","image":"ash/Foto-0031 Ash-22.11.19.webp"},{"decorKey":"22.11.19 - Balinta","woodKey":"oak","image":"oak/Foto-0009 Oak2 22.11.19.webp"},{"decorKey":"12.02.20 - S5040 - Y90R","woodKey":"oak","image":"oak/Foto-0095 Oak-12.02.20.webp"},{"decorKey":"07.04.20 - S2000 - N","woodKey":"ash","image":"ash/Foto-0091 Ash-07.04.20.webp"},{"decorKey":"07.04.20 - S2000 - N","woodKey":"oak","image":"oak/Foto-0093 Oak-07.04.20.webp"},{"decorKey":"20.01.21 - Pilka","woodKey":"ash","image":"ash/Foto-0087 Ash-20.01.21.webp"},{"decorKey":"20.01.21 - Pilka","woodKey":"oak","image":"oak/Foto-0089 Oak-20.01.21.webp"},{"decorKey":"03.03.21 - Ruda","woodKey":"ash","image":"ash/Foto-0085 Ash-03.03.21.webp"},{"decorKey":"03.03.21 - Ruda","woodKey":"oak","image":"oak/Foto-0083 Oak-03.03.21.webp"},{"decorKey":"18.03.22 - Pilka","woodKey":"ash","image":"ash/Foto-0257 Ash-18.03.22.webp"},{"decorKey":"18.03.22 - Pilka","woodKey":"birch","image":"birch/Foto-0259 Birch-18.03.22.webp"},{"decorKey":"18.03.22 - Pilka","woodKey":"oak","image":"oak/Foto-0255 Oak-18.03.22.webp"},{"decorKey":"25.04.22 - Balinta","woodKey":"ash","image":"ash/Foto-0273 Ash-25.04.22.webp"},{"decorKey":"25.04.22 - Balinta","woodKey":"oak","image":"oak/Foto-0271 Oak-25.04.22.webp"},{"decorKey":"23.09.22 - Ruda","woodKey":"ash","image":"ash/Foto-0267 Ash-23.09.22.webp"},{"decorKey":"23.09.22 - Ruda","woodKey":"oak","image":"oak/Foto-0265 Oak-23.09.22.webp"},{"decorKey":"25.11.22 - Pilka Smoked oak","woodKey":"oak","image":"oak/Foto-0269 Eur.Oak-25.11.22.webp"},{"decorKey":"09.12.22 - Žalia","woodKey":"ash","image":"ash/Foto-0281 Ash-09.12.22.webp"},{"decorKey":"09.12.22 - Žalia","woodKey":"oak","image":"oak/Foto-0279 Oak-09.12.22.webp"},{"decorKey":"23.01.23 - Ruda Teak","woodKey":"ash","image":"ash/Foto-0039 Ash-23.01.23.webp"},{"decorKey":"23.01.23 - Ruda Teak","woodKey":"oak","image":"oak/Foto-0041 Oak-23.01.23.webp"},{"decorKey":"30.01.23 - Ruda F5872 Refined Walnut","woodKey":"ash","image":"ash/Foto-0033 Ash-30.01.23.webp"},{"decorKey":"30.01.23 - Ruda F5872 Refined Walnut","woodKey":"oak","image":"oak/Foto-0035 Oak-30.01.23.webp"},{"decorKey":"27.04.23 - S7010 - R90B","woodKey":"ash","image":"ash/Foto-0003 Ash-27.04.23.webp"},{"decorKey":"27.04.23 - S7010 - R90B","woodKey":"oak","image":"oak/Foto-0001 Oak-27.04.23.webp"},{"decorKey":"25.05.23 - S3005 - G20Y","woodKey":"ash","image":"ash/Foto-0037 Ash-25.05.23.webp"},{"decorKey":"25.05.23 - S3005 - G20Y","woodKey":"oak","image":"oak/Foto-0027 Oak-25.05.23.webp"},{"decorKey":"01.12.23 - S1515 - R","woodKey":"ash","image":"ash/Foto-0191 Ash-01.12.23.webp"},{"decorKey":"01.12.23 - S1515 - R","woodKey":"oak","image":"oak/Foto-0189 Oak-01.12.23.webp"},{"decorKey":"03.04.24 - Pilka","woodKey":"ash","image":"ash/Foto-0275 Ash-03.04.24.webp"},{"decorKey":"03.04.24 - Pilka","woodKey":"oak","image":"oak/Foto-0277 Oak-03.04.24.webp"},{"decorKey":"08.04.24 - S6020 - B10G","woodKey":"ash","image":"ash/Foto-0283 Ash-08.04.24.webp"},{"decorKey":"08.04.24 - S6020 - B10G","woodKey":"oak","image":"oak/Foto-0285 Oak-08.04.24.webp"},{"decorKey":"09.04.24 - S7010 - B90G","woodKey":"ash","image":"ash/Foto-0195 Ash-09.04.24.webp"},{"decorKey":"09.04.24 - S7010 - B90G","woodKey":"oak","image":"oak/Foto-0193 Oak-09.04.24.webp"},{"decorKey":"22.04.24 - S5010 - G50Y","woodKey":"ash","image":"ash/Foto-0057 Ash-22.04.24.webp"},{"decorKey":"22.04.24 - S5010 - G50Y","woodKey":"oak","image":"oak/Foto-0075 Oak-22.04.24.webp"},{"decorKey":"03.09.24 - Ruda","woodKey":"ash","image":"ash/Foto-0071 Ash-03.09.24.webp"},{"decorKey":"03.09.24 - Ruda","woodKey":"oak","image":"oak/Foto-0073 Oak-03.09.24.webp"},{"decorKey":"08.10.24 - Ruda","woodKey":"ash","image":"ash/Foto-0017 Ash-08.10.24.webp"},{"decorKey":"08.10.24 - Ruda","woodKey":"oak","image":"oak/Foto-0019 Oak-08.10.24.webp"},{"decorKey":"28.10.24 - Ruda","woodKey":"ash","image":"ash/Foto-0013 Ash-28.10.24.webp"},{"decorKey":"28.10.24 - Ruda","woodKey":"oak","image":"oak/Foto-0015 Oak-28.10.24.webp"}]',
  ),
  n0 = [
    {
      key: "",
      value: { lt: "Spalva pagal RAL paletę:", en: "RAL color selection:" },
      bold: 700,
    },
    { key: "Ral1036", value: { lt: "Ral1036", en: "Ral1036" } },
    {
      key: "",
      value: { lt: "Spalva pagal NCS paletę:", en: "NCS color selection:" },
      bold: 700,
    },
    {
      key: "S0502-G50Y",
      value: { lt: "S0502-G50Y (std baltas)", en: "S0502-G50Y (std white)" },
    },
    {
      key: "S2000-N",
      value: { lt: "S2000-N (std šviesiai pilkas)", en: "S2000-N (std grey)" },
    },
    {
      key: "S7502-G",
      value: { lt: "S7502-G (std antracitas)", en: "S7502-G (std anthracite)" },
    },
    {
      key: "S8502-B",
      value: {
        lt: "S8502-B (std juodas, DT4023 Nero, DT4166 Charcoal)",
        en: "S8502-B (std Black, DT4023 Nero, DT4166 Charcoal)",
      },
    },
    { key: "S9000-N", value: { lt: "S9000-N", en: "S9000-N" } },
    { key: "S0500-N", value: { lt: "S0500-N", en: "S0500-N" } },
    {
      key: "S2002-Y",
      value: {
        lt: "S2002-Y (DT4176 Mushroom)",
        en: "S2002-Y (DT4176 Mushroom)",
      },
    },
    {
      key: "S3502-Y",
      value: { lt: "S3502-Y (DT4175 Pebble)", en: "S3502-Y (DT4175 Pebble)" },
    },
    {
      key: "S2005-G10Y",
      value: {
        lt: "S2005-G10Y (DT4177 Varpour)",
        en: "S2005-G10Y (DT4177 Varpour)",
      },
    },
    {
      key: "S5502-G",
      value: { lt: "S5502-G (DT4132 Ash)", en: "S5502-G (DT4132 Ash)" },
    },
    {
      key: "S7005-B20G",
      value: {
        lt: "S7005-B20G (DT4155 Pewter)",
        en: "S7005-B20G (DT4155 Pewter)",
      },
    },
    {
      key: "S7010-R90B",
      value: {
        lt: "S7010-R90B (DT4179 Smokey Blue)",
        en: "S7010-R90B (DT4179 Smokey Blue)",
      },
    },
    {
      key: "S7005-Y80R",
      value: {
        lt: "S7005-Y80R (DT4172 Mauve)",
        en: "S7005-Y80R (DT4172 Mauve)",
      },
    },
    {
      key: "S8010-B90G",
      value: {
        lt: "S8010-B90G (DT4174 Conifer)",
        en: "S8010-B90G (DT4174 Conifer)",
      },
    },
    {
      key: "S7010-R10B",
      value: {
        lt: "S7010-R10B (DT4154 Burgundy)",
        en: "S7010-R10B (DT4154 Burgundy)",
      },
    },
    {
      key: "S2010-G30Y",
      value: {
        lt: "S2010-G30Y (DT4183 Pistachio)",
        en: "S2010-G30Y (DT4183 Pistachio)",
      },
    },
    {
      key: "S5010-G50Y",
      value: {
        lt: "S5010-G50Y (DT4184 Olive)",
        en: "S5010-G50Y (DT4184 Olive)",
      },
    },
    {
      key: "S4020-Y40R",
      value: {
        lt: "S4020-Y40R (DT4003 Walnut)",
        en: "S4020-Y40R (DT4003 Walnut)",
      },
    },
    {
      key: "S3030-Y30R",
      value: {
        lt: "S3030-Y30R (DT4002 Leather)",
        en: "S3030-Y30R (DT4002 Leather)",
      },
    },
    {
      key: "S2020-Y20R",
      value: { lt: "S2020-Y20R (DT4001 Clay)", en: "S2020-Y20R (DT4001 Clay)" },
    },
    {
      key: "S2010-Y20R",
      value: {
        lt: "S2010-Y20R DT4007 Macadamia",
        en: "S2010-Y20R DT4007 Macadamia",
      },
    },
    {
      key: "S3010-B70G ",
      value: {
        lt: "S3010-B70G DT4004 Blue haze",
        en: "S3010-B70G DT4004 Blue haze",
      },
    },
    {
      key: "S3010-R10B ",
      value: {
        lt: "S3010-R10B DT4010 Soft lilac",
        en: "S3010-R10B DT4010 Soft lilac",
      },
    },
    {
      key: "S6020-B",
      value: { lt: "S6020-B DT4005 Denim", en: "S6020-B DT4005 Denim" },
    },
    {
      key: "S5005-Y20R",
      value: { lt: "S5005-Y20R DT4011 Taupe", en: "S5005-Y20R DT4011 Taupe" },
    },
    {
      key: "S5030-Y70R",
      value: { lt: "S5030-Y70R DT4008 Brick", en: "S5030-Y70R DT4008 Brick" },
    },
    {
      key: "S7010-Y70R",
      value: {
        lt: "S7010-Y70R DT4009 Espresso",
        en: "S7010-Y70R DT4009 Espresso",
      },
    },
    {
      key: "S7502-B",
      value: { lt: "S7502-B DT4012 Basalt", en: "S7502-B DT4012 Basalt" },
    },
  ],
  r0 = [
    {
      key: "A",
      value: {
        lt: "A - Visi paviršiai, išskyrus standartiškai neapdailinamus*",
        en: "A - All surfaces except those that are not finished as standard*",
      },
    },
    {
      key: "A+H",
      value: {
        lt: "A+H - Visi paviršiai* + Ertmės ir išfrezavimai",
        en: "A+H - All surfaces* + Holes and routings",
      },
    },
    {
      key: "T - Top",
      value: { lt: "T - Viršutinis paviršius", en: "T - Top surface" },
    },
    {
      key: "B - Bottom",
      value: { lt: "B - Apatinis paviršius", en: "B - Bottom surface" },
    },
    { key: "E - Edge", value: { lt: "E - Briauna", en: "E - Edge" } },
    {
      key: "H - Hole",
      value: { lt: "H - Ertmės ir išfrezavimai", en: "H - Holes and routings" },
    },
    {
      key: "T+E - Top + Edge",
      value: {
        lt: "T+E - Viršutinis paviršius + Briauna",
        en: "T+E - Top surface + Edge",
      },
    },
    {
      key: "B+H - Bottom + Hole",
      value: {
        lt: "B+H - Apatinis paviršius + Ertmės ir išfrezavimai",
        en: "B+H - Bottom surface + Holes and routings",
      },
    },
    {
      key: "B+E - Bottom + Edge",
      value: {
        lt: "B+E - Apatinis paviršius + Briauna",
        en: "B+E - Bottom surface + Edge",
      },
    },
    {
      key: "E+H - Edge + Hole",
      value: {
        lt: "E+H - Briauna + Ertmės ir išfrezavimai",
        en: "E+H - Edge + Holes and routings",
      },
    },
  ],
  er = (o, i) => o.map((r) => ({ ...r, value: r.value[i] })),
  sl = (o, i) => o.map((r) => ({ key: r.key[i], value: r.value[i] })),
  i0 = (o) => {
    o && navigator.clipboard.writeText(o);
  },
  o0 = "/CCG/mediena-images/",
  a0 = /^https?:\/\//i;
function s0(o) {
  const r = o.trim().replace(/\\/g, "/").replace(/^\/+/, "");
  return r === "" || r.includes("..") || r.toLowerCase().startsWith("file:/")
    ? ""
    : r.startsWith("mediena-images/")
      ? `/${r}`
      : `${o0}${r}`;
}
function l0(o) {
  if (!o) return "";
  const i = o.trim();
  return a0.test(i) ? i : s0(i);
}
const u0 = (o) => {
    const i =
        o.Pavirsiai && o.Pavirsiai !== "null"
          ? o.Pavirsiai.split(" - ")[0]
          : "",
      r = o.Apdaila && o.Apdaila !== "null" ? o.Apdaila.split(" - ")[0] : "",
      s = o.Blizgumas && o.Blizgumas !== "null" ? o.Blizgumas : "";
    let f = "";
    return (
      i && r
        ? ((f = `${i}=${r}`), s && (f += ` ${s}`))
        : r
          ? ((f = r), s && (f += ` ${s}`))
          : i && s
            ? (f = `${i}=${s}`)
            : s && (f = s),
      f
    );
  },
  c0 = (o) => {
    const i = o.Apdaila && o.Apdaila !== "null" ? o.Apdaila : "",
      r = i || "",
      s = o.Top.split(" - ")[0],
      f = o.Bottom.split(" - ")[0],
      c = o.Briaunos.split(" - ")[0];
    return `${r} ${s}/${f}/${c}`;
  },
  f0 = (o) => {
    const i =
        o.Pavirsiai && o.Pavirsiai !== "null"
          ? o.Pavirsiai.split(" - ")[0]
          : "",
      r = o.Apdaila && o.Apdaila !== "null" ? o.Apdaila.split(" - ")[0] : "",
      s = o.custom && o.custom !== "null" ? o.custom : "";
    return s ? (i ? `${i}=${s}` : s) : r ? (i ? `${i}=${r}` : r) : "";
  },
  d0 = (o, i) => {
    let r;
    return (
      o === "standard"
        ? (r = u0({
            Pavirsiai: i.Pavirsiai || "",
            Apdaila: i.Apdaila || "",
            Blizgumas: i.Blizgumas || "",
          }))
        : o === "hus"
          ? (r = c0({
              Apdaila: i.Apdaila || "",
              Top: i.Top || "",
              Bottom: i.Bottom || "",
              Briaunos: i.Briaunos || "",
            }))
          : o === "paint" &&
            (r = f0({
              Pavirsiai: i.Pavirsiai || "",
              Apdaila: i.Apdaila || "",
              custom: i.custom || "",
            })),
      r
    );
  },
  bd = le.createContext(void 0),
  Ll = () => {
    const o = le.useContext(bd);
    if (!o) throw new Error("Context must be used within a ContextProvider");
    return o;
  },
  p0 = ({ children: o }) => {
    const [i, r] = le.useState(""),
      [s, f] = le.useState(""),
      [c, d] = le.useState(!1);
    return b.jsx(bd.Provider, {
      value: {
        stdImage: i,
        setStdImage: r,
        selectName: s,
        setSelectName: f,
        showStdSurfWarning: c,
        setShowStdSurfWarning: d,
      },
      children: o,
    });
  },
  Yt = ({
    id: o,
    label: i,
    labelNote: r,
    options: s,
    disabled: f = !1,
    currentValue: c,
    registerOptions: d,
    customColorInput: h,
    onSelectChange: g,
  }) => {
    const { t: w } = bi();
    return b.jsx(b.Fragment, {
      children: h
        ? b.jsxs(b.Fragment, {
            children: [
              b.jsx("label", {
                htmlFor: "custom",
                children: w("fields.customColorCode"),
              }),
              b.jsx("input", {
                id: "custom",
                type: "text",
                ...d,
                value: c ?? "",
                maxLength: 10,
                onChange: (v) => {
                  (d == null || d.onChange(v), g && o && g(o, v.target.value));
                },
              }),
            ],
          })
        : b.jsxs(b.Fragment, {
            children: [
              b.jsxs("label", {
                htmlFor: o,
                className: r ? "formSelectLabel formSelectLabel--inline" : "",
                children: [
                  b.jsx("span", { children: i }),
                  r
                    ? b.jsx("span", {
                        className: "formSelectLabel__note",
                        children: r,
                      })
                    : null,
                ],
              }),
              b.jsxs("select", {
                id: o,
                disabled: f,
                ...d,
                value: c ?? "default",
                onChange: (v) => {
                  (d == null || d.onChange(v), g && o && g(o, v.target.value));
                },
                children: [
                  b.jsx("option", {
                    value: "default",
                    disabled: !0,
                    children: "-",
                  }),
                  s.map((v, k) =>
                    b.jsx(
                      "option",
                      {
                        className: v.bg,
                        value: v.key,
                        style: { fontWeight: v.bold },
                        children: v.value,
                      },
                      k,
                    ),
                  ),
                ],
              }),
            ],
          }),
    });
  };
function h0({
  onSelectChange: o,
  register: i,
  selectedValues: r,
  localizedHusApdaila: s,
  localizedHusPavirsiai: f,
  decorLabel: c,
  topSurfaceLabel: d,
  bottomSurfaceLabel: h,
  edgesLabel: g,
  husNoteLabel: w,
}) {
  return b.jsxs("section", {
    children: [
      b.jsx(Yt, {
        onSelectChange: o,
        id: "apdaila",
        label: c,
        options: s,
        currentValue: r.apdaila,
        registerOptions: i("Apdaila", { required: !0 }),
      }),
      b.jsx(Yt, {
        onSelectChange: o,
        id: "top",
        label: d,
        options: f,
        currentValue: r.top,
        registerOptions: i("Top", { required: !0 }),
      }),
      b.jsx(Yt, {
        onSelectChange: o,
        id: "bottom",
        label: h,
        options: f,
        currentValue: r.bottom,
        registerOptions: i("Bottom", { required: !0 }),
      }),
      b.jsx(Yt, {
        onSelectChange: o,
        id: "briaunos",
        label: g,
        options: f,
        currentValue: r.briaunos,
        registerOptions: i("Briaunos", { required: !0 }),
      }),
      b.jsx("p", { className: "formNote", children: w }),
    ],
  });
}
var Jo = { exports: {} },
  g0 = Jo.exports,
  td;
function m0() {
  return (
    td ||
      ((td = 1),
      (function (o, i) {
        (function (r, s) {
          o.exports = s();
        })(g0, function () {
          var r =
            /^(?:NCS|NCS\sS)\s(\d{2})(\d{2})-(N|R|G|B|Y)(\d{2})?(R|G|B|Y)?$/;
          function s(h) {
            if (((h = h.trim().toUpperCase().match(r)), h === null)) return !1;
            var g = parseInt(h[1], 10),
              w = parseInt(h[2], 10),
              v = h[3],
              k = parseInt(h[4], 10) || 0;
            if (v !== "N") {
              var x = 1.05 * g - 5.25,
                D = w,
                A,
                O,
                L,
                I,
                R,
                z,
                j,
                $,
                H,
                W,
                q,
                ae,
                de,
                pe,
                G;
              return (
                v === "Y" && k <= 60
                  ? (A = 1)
                  : (v === "Y" && k > 60) || (v === "R" && k <= 80)
                    ? (v === "Y" ? (O = k - 60) : (O = k + 40),
                      (A = (Math.sqrt(14884 - Math.pow(O, 2)) - 22) / 100))
                    : (v === "R" && k > 80) || v === "B"
                      ? (A = 0)
                      : v === "G" &&
                        ((O = k - 170),
                        (A = (Math.sqrt(33800 - Math.pow(O, 2)) - 70) / 100)),
                v === "Y" && k <= 80
                  ? (L = 0)
                  : (v === "Y" && k > 80) || (v === "R" && k <= 60)
                    ? (v === "Y" ? (I = k - 80 + 20.5) : (I = k + 20 + 20.5),
                      (L = (104 - Math.sqrt(11236 - Math.pow(I, 2))) / 100))
                    : (v === "R" && k > 60) || (v === "B" && k <= 80)
                      ? (v === "R" ? (R = k - 60 - 60) : (R = k + 40 - 60),
                        (L = (Math.sqrt(1e4 - Math.pow(R, 2)) - 10) / 100))
                      : (v === "B" && k > 80) || (v === "G" && k <= 40)
                        ? (v === "B" ? (z = k - 80 - 131) : (z = k + 20 - 131),
                          (L = (122 - Math.sqrt(19881 - Math.pow(z, 2))) / 100))
                        : v === "G" && k > 40 && (L = 0),
                v === "Y"
                  ? (j = (85 - (17 / 20) * k) / 100)
                  : v === "R" && k <= 60
                    ? (j = 0)
                    : v === "R" && k > 60
                      ? (($ = k - 60 + 35),
                        (j = (67.5 - Math.sqrt(5776 - Math.pow($, 2))) / 100))
                      : v === "B" && k <= 60
                        ? ((W = 1 * k - 68.5),
                          (j =
                            (6.5 + Math.sqrt(7044.5 - Math.pow(W, 2))) / 100))
                        : (v === "B" && k > 60) || (v === "G" && k <= 60)
                          ? (j = 0.9)
                          : v === "G" &&
                            k > 60 &&
                            ((H = k - 60), (j = (90 - (1 / 8) * H) / 100)),
                (I = (A + j + L) / 3),
                (q = ((I - A) * (100 - D)) / 100 + A),
                (ae = ((I - j) * (100 - D)) / 100 + j),
                (de = ((I - L) * (100 - D)) / 100 + L),
                (pe = Math.max(q, ae, de)),
                (G = 1 / pe),
                {
                  R: parseInt(((q * G * (100 - x)) / 100) * 255, 10),
                  G: parseInt(((ae * G * (100 - x)) / 100) * 255, 10),
                  B: parseInt(((de * G * (100 - x)) / 100) * 255, 10),
                }
              );
            } else {
              var ie = parseInt((1 - g / 100) * 255, 10);
              return { R: ie, G: ie, B: ie };
            }
          }
          function f(h) {
            return h.toString(16).length > 1
              ? h.toString(16)
              : "0" + h.toString(16);
          }
          function c(h) {
            return ["#", f(h.R), f(h.G), f(h.B)].join("");
          }
          function d(h) {
            return "rgb(" + [h.R, h.G, h.B].join(",") + ")";
          }
          return {
            hex: function (h) {
              return h && s(h) ? c(s(h)) : null;
            },
            rgb: function (h) {
              return h && s(h) ? d(s(h)) : null;
            },
          };
        });
      })(Jo)),
    Jo.exports
  );
}
var y0 = m0();
const v0 = kl(y0),
  Id = "#FFFFFF",
  w0 = [
    { keywords: ["juoda", "black"], color: "#2f3136" },
    {
      keywords: ["balinta", "whitened", "balinimas", "skaidriai", "clear"],
      color: "#f2ede2",
    },
    { keywords: ["pilka", "grey"], color: "#8f949b" },
    { keywords: ["žalia", "zalia", "green"], color: "#7e9f8c" },
    { keywords: ["ruda", "brown", "walnut", "teak"], color: "#7b5a46" },
    { keywords: ["vintage"], color: "#8a735d" },
    { keywords: ["nero"], color: "#4c4c46" },
    { keywords: ["oak auster", "stone"], color: "#a89b8a" },
    { keywords: ["gratonet"], color: "#6f6257" },
  ],
  k0 = (o) => {
    const i = o.match(/S\s?\d{4}-[A-Z]\d{0,2}[A-Z]?/i);
    if (!i) return null;
    const r = i[0].toUpperCase();
    return (r.startsWith("NCS ") ? r : `NCS ${r}`).replace(/S(?! )/g, "S ");
  },
  S0 = (o) => {
    const i = o.toLowerCase(),
      r = w0.find((s) => s.keywords.some((f) => i.includes(f)));
    return (r == null ? void 0 : r.color) ?? Id;
  },
  x0 = (o, i = !0) => {
    if (!i || !o) return Id;
    const r = k0(o);
    if (r)
      try {
        return v0.hex(r);
      } catch (s) {
        console.error(`Error converting code ${r}:`, s);
      }
    return S0(o);
  },
  _0 = (o) => {
    const [i, r] = le.useState({ isLoading: !1, loadedImageUrl: void 0 });
    return (
      le.useEffect(() => {
        if (!o) {
          r({ isLoading: !1, loadedImageUrl: void 0 });
          return;
        }
        r({ isLoading: !0, loadedImageUrl: void 0 });
        const s = new Image();
        ((s.src = o),
          (s.onload = () => {
            r({ isLoading: !1, loadedImageUrl: o });
          }),
          (s.onerror = () => {
            r({ isLoading: !1, loadedImageUrl: void 0 });
          }));
      }, [o]),
      i
    );
  };
function jd({
  colorCode: o,
  imageUrl: i,
  showColorFallback: r = !0,
  noImageMessage: s,
}) {
  const { isLoading: f, loadedImageUrl: c } = _0(i),
    d = x0(o, r),
    h = !f && !c && !!s;
  return b.jsxs("div", {
    className: "colorBox",
    style: { backgroundColor: d },
    children: [
      c
        ? b.jsxs(b.Fragment, {
            children: [
              b.jsx("img", {
                className: "colorBoxImage",
                src: c,
                alt: "",
                "aria-hidden": "true",
              }),
              b.jsx("div", { className: "colorBoxOverlay" }),
            ],
          })
        : null,
      f
        ? b.jsx("div", {
            className: "colorBoxLoader",
            "aria-hidden": "true",
            children: b.jsx("span", { className: "colorBoxSpinner" }),
          })
        : null,
      h ? b.jsx("div", { className: "colorBoxEmptyState", children: s }) : null,
    ],
  });
}
function E0({
  onSelectChange: o,
  register: i,
  selectedValues: r,
  localizedPavirsiai: s,
  localizedNcsApdaila: f,
  useCustomColorCode: c,
  onCustomColorCodeToggle: d,
  paintPreviewCode: h,
  surfaceLabel: g,
  standardDecorLabel: w,
  useCustomColorCodeLabel: v,
  standardPaintGlossLabel: k,
}) {
  return b.jsxs("section", {
    children: [
      b.jsxs("section", {
        className: "formRow formRow--double",
        children: [
          b.jsx("div", {
            className: "formField",
            children: b.jsx(Yt, {
              onSelectChange: o,
              id: "pavirsiai",
              label: g,
              options: s,
              currentValue: r.pavirsiai,
              registerOptions: i("Pavirsiai"),
            }),
          }),
          b.jsx("div", {
            className: "formField",
            children: b.jsx(Yt, {
              onSelectChange: o,
              id: "apdaila",
              label: w,
              labelNote: k,
              options: f,
              disabled: c,
              currentValue: r.apdaila,
              registerOptions: i("Apdaila"),
            }),
          }),
        ],
      }),
      b.jsxs("label", {
        className: "formCheckbox",
        children: [
          b.jsx("input", { type: "checkbox", checked: c, onChange: d }),
          b.jsx("span", { children: v }),
        ],
      }),
      c
        ? b.jsx(Yt, {
            id: "custom",
            onSelectChange: o,
            currentValue: r.custom,
            registerOptions: i("custom"),
            customColorInput: "customColorInput",
            options: [],
          })
        : null,
      b.jsx(jd, { colorCode: h }),
    ],
  });
}
function C0({
  onSelectChange: o,
  register: i,
  selectedValues: r,
  localizedPavirsiai: s,
  localizedApdaila: f,
  localizedBlizgumas: c,
  filteredLocalizedMediena: d,
  woodSelectDisabled: h,
  surfaceLabel: g,
  decorLabel: w,
  glossinessLabel: v,
  woodLabel: k,
  standardPreviewCode: x,
  standardPreviewImage: D,
  showMissingStandardPreview: A,
  noImageMessage: O,
  previewDisclaimer: L,
  standardPreviewFileName: I,
  downloadImageLabel: R,
}) {
  return b.jsxs("section", {
    children: [
      b.jsxs("section", {
        className: "formRow",
        children: [
          b.jsx("div", {
            className: "formField",
            children: b.jsx(Yt, {
              onSelectChange: o,
              id: "pavirsiai",
              label: g,
              options: s,
              currentValue: r.pavirsiai,
              registerOptions: i("Pavirsiai", { required: !1 }),
            }),
          }),
          b.jsx("div", {
            className: "formField",
            children: b.jsx(Yt, {
              onSelectChange: o,
              id: "apdaila",
              label: w,
              options: f,
              currentValue: r.apdaila,
              registerOptions: i("Apdaila", { required: !1 }),
            }),
          }),
        ],
      }),
      b.jsxs("section", {
        className: "formRow formRow--split",
        children: [
          b.jsx("div", {
            className: "formField",
            children: b.jsx(Yt, {
              onSelectChange: o,
              id: "blizgumas",
              label: v,
              options: c,
              currentValue: r.blizgumas,
              registerOptions: i("Blizgumas", { required: !1 }),
            }),
          }),
          b.jsx("div", {
            className: "formField",
            children: b.jsx(Yt, {
              onSelectChange: o,
              id: "mediena",
              label: k,
              options: d,
              disabled: h,
              currentValue: r.mediena,
              registerOptions: i("Mediena", { required: !1 }),
            }),
          }),
        ],
      }),
      b.jsx(jd, {
        colorCode: x,
        imageUrl: D,
        showColorFallback: !1,
        noImageMessage: A ? O : void 0,
      }),
      D
        ? b.jsx("p", { className: "formPreviewDisclaimer", children: L })
        : null,
      D
        ? b.jsx("a", {
            className: "formDownloadLink btnCopyActive",
            href: D,
            download: I,
            children: R,
          })
        : null,
    ],
  });
}
const tn = "default",
  T0 = {
    apdaila: tn,
    pavirsiai: tn,
    blizgumas: tn,
    top: tn,
    bottom: tn,
    briaunos: tn,
    mediena: tn,
    custom: "",
  },
  at = (o) => o !== tn,
  N0 = (o, i, r) => {
    if (o === "standard")
      return at(i.apdaila) && at(i.pavirsiai) && at(i.blizgumas);
    if (o === "hus")
      return at(i.apdaila) && at(i.top) && at(i.bottom) && at(i.briaunos);
    const s = r && i.custom.trim() !== "";
    return r ? at(i.pavirsiai) && s : at(i.pavirsiai) && at(i.apdaila);
  },
  L0 = (o, i, r, s) => o || (i ? r : s);
function ll({ title: o, formType: i }) {
  var Ee;
  const { register: r, handleSubmit: s, setValue: f } = mm(),
    { t: c, i18n: d } = bi(),
    { setStdImage: h, setShowStdSurfWarning: g } = Ll(),
    [w, v] = le.useState(null),
    [k, x] = le.useState(!1),
    [D, A] = le.useState(!1),
    [O, L] = le.useState(T0),
    I = (d.resolvedLanguage ?? d.language).startsWith("lt") ? "lt" : "en",
    R = er(r0, I),
    z = er(qm, I),
    j = er(Jm, I),
    $ = er(Zm, I),
    H = er(e0, I),
    W = er(t0, I),
    q = er(n0, I),
    ae = at(O.apdaila)
      ? new Set(
          ed.filter((ge) => ge.decorKey === O.apdaila).map((ge) => ge.woodKey),
        )
      : null,
    de = ae === null ? W : W.filter((ge) => ae.has(ge.key)),
    pe = at(O.apdaila) && de.length === 0,
    G = ed.find((ge) => ge.woodKey === O.mediena && ge.decorKey === O.apdaila),
    ie = l0(G == null ? void 0 : G.image),
    he =
      (Ee = G == null ? void 0 : G.image) == null
        ? void 0
        : Ee.split("/").pop(),
    _e = at(O.apdaila) ? O.apdaila : void 0,
    Te = at(O.apdaila) && at(O.mediena) && !G,
    ce =
      k && O.custom.trim() !== ""
        ? O.custom
        : at(O.apdaila)
          ? O.apdaila
          : void 0,
    V = N0(i, O, k),
    te = () => {
      w !== null && (v(null), A(!0));
    };
  (le.useEffect(() => {
    h(ie ?? "");
  }, [ie, h]),
    le.useEffect(() => {
      i !== "standard" ||
        !at(O.mediena) ||
        ae === null ||
        ae.has(O.mediena) ||
        (L((ge) => ({ ...ge, mediena: tn })), te());
    }, [ae, w, i, O.mediena]));
  const Z = (ge) => {
      const Ce = d0(i, ge);
      v(Ce || "");
    },
    E = (ge, Ce) => {
      (L((Le) => ({ ...Le, [ge]: Ce })),
        te(),
        ge === "pavirsiai" && g(Ce === "A"));
    },
    B = (ge) => {
      const Ce = ge.target.checked;
      (x(Ce),
        Ce
          ? (L((Le) => ({ ...Le, apdaila: tn })), f("Apdaila", ""))
          : (L((Le) => ({ ...Le, custom: "" })), f("custom", "")),
        te());
    },
    Se = L0(w, D, c("decorCode.regenerate"), c("decorCode.selectProperties"));
  return b.jsxs("div", {
    className: `formContainer formContainer--${i}`,
    children: [
      b.jsxs("form", {
        onSubmit: s(Z),
        children: [
          b.jsx("h3", { className: "page__title", children: o }),
          i === "standard"
            ? b.jsx(C0, {
                onSelectChange: E,
                register: r,
                selectedValues: O,
                localizedPavirsiai: R,
                localizedApdaila: z,
                localizedBlizgumas: j,
                filteredLocalizedMediena: de,
                woodSelectDisabled: pe,
                surfaceLabel: c("fields.surface"),
                decorLabel: c("fields.decor"),
                glossinessLabel: c("fields.glossiness"),
                woodLabel: c("fields.wood"),
                standardPreviewCode: _e,
                standardPreviewImage: ie,
                showMissingStandardPreview: Te,
                noImageMessage: c("preview.noImageAvailable"),
                previewDisclaimer: c("preview.woodColorDisclaimer"),
                standardPreviewFileName: he,
                downloadImageLabel: c("actions.downloadImage"),
              })
            : null,
          i === "paint"
            ? b.jsx(E0, {
                onSelectChange: E,
                register: r,
                selectedValues: O,
                localizedPavirsiai: R,
                localizedNcsApdaila: q,
                useCustomColorCode: k,
                onCustomColorCodeToggle: B,
                paintPreviewCode: ce,
                surfaceLabel: c("fields.surface"),
                standardDecorLabel: c("fields.standardDecor"),
                useCustomColorCodeLabel: c("fields.useCustomColorCode"),
                standardPaintGlossLabel: c("form.standardPaintGloss"),
              })
            : null,
          i === "hus"
            ? b.jsx(h0, {
                onSelectChange: E,
                register: r,
                selectedValues: O,
                localizedHusApdaila: $,
                localizedHusPavirsiai: H,
                decorLabel: c("fields.decor"),
                topSurfaceLabel: c("fields.topSurface"),
                bottomSurfaceLabel: c("fields.bottomSurface"),
                edgesLabel: c("fields.edges"),
                husNoteLabel: c("form.husNote"),
              })
            : null,
          b.jsxs("section", {
            className: "copyGenerateButtons",
            children: [
              b.jsx("input", {
                className: V ? "btnCopyActive" : "btnCopyDisabled",
                type: "submit",
                value: c("actions.generateDecorCode"),
              }),
              b.jsx("button", {
                className: w ? "btnCopyActive" : "btnCopyDisabled",
                type: "button",
                onClick: () => {
                  (i0(w || ""), Ae(c("toast.codeCopied")));
                },
                children: c("actions.copyDecorCode"),
              }),
            ],
          }),
        ],
      }),
      b.jsx("p", { className: "decorCode", children: Se }),
    ],
  });
}
function R0() {
  return b.jsx("img", {
    src: "/CCG/logo.svg",
    alt: "Svenheim",
    onClick: () => window.location.reload(),
  });
}
const O0 = [
    {
      key: { lt: "A", en: "A" },
      value: {
        lt: "Visi paviršiai, išskyrus standartiškai neapdailinamus*",
        en: "All surfaces except those that are not finished as standard*",
      },
    },
    {
      key: { lt: "T", en: "T" },
      value: { lt: "Viršutinis paviršius", en: "Surface Top" },
    },
    {
      key: { lt: "B", en: "B" },
      value: { lt: "Apatinis paviršius", en: "Surface Bottom" },
    },
    { key: { lt: "E", en: "E" }, value: { lt: "Briauna", en: "Edge" } },
    {
      key: { lt: "H", en: "H" },
      value: { lt: "Ertmės ir išfrezavimai", en: "Holes and routings" },
    },
    {
      key: { lt: "PU", en: "PU" },
      value: { lt: "Poliuretaninis lakas", en: "Polyurethane varnish" },
    },
    {
      key: { lt: "Monell", en: "Monell" },
      value: { lt: "Monell", en: "Monell" },
    },
    { key: { lt: "KL", en: "KL" }, value: { lt: "Lakuota", en: "Varnished" } },
    { key: { lt: "GR", en: "GR" }, value: { lt: "Gruntuota", en: "Primed" } },
    {
      key: { lt: "PUSS", en: "PUSS" },
      value: { lt: "Šlifuota", en: "Sanded" },
    },
    {
      key: { lt: "UBH", en: "UBH" },
      value: { lt: "Neapdailinta", en: "Raw/Undecorated" },
    },
  ],
  P0 = [
    {
      key: {
        lt: "Dubliuojasi info, naudojamas tik sutrumpinimas. (Edge E=gl.5)",
        en: "Information is duplicated, only abbreviation is used. (Edge E=gl.5)",
      },
      value: { lt: "E=gl.5", en: "E=gl.5" },
    },
    {
      key: {
        lt: "NCS kode nenaudojamas apatinis brūkšnys. (S9000_N)",
        en: "The NCS code does not use an underscore. (S9000_N)",
      },
      value: { lt: "S9000-N", en: "S9000-N" },
    },
    {
      key: {
        lt: "Tarp sutrumpinimų naudojamas '+' simbolis. (E&B S8000-N)",
        en: "The '+' symbol is used between abbreviations. (E&B S8000-N)",
      },
      value: { lt: "E+B=S8000-N", en: "E+B=S8000-N" },
    },
    {
      key: {
        lt: "Po sutrumpinimų dedamas lygybės ženklas. (E+ST S7502-G)",
        en: "Abbreviations are followed by an equal sign. (E+ST S7502-G)",
      },
      value: { lt: "E+B=S7502-G", en: "E+B=S7502-G" },
    },
    {
      key: {
        lt: "Rašant spalvos kodą, 'NCS' raidės nėra rašomos, išskyrus atvejus, kai naudojamos kitos spalvų paletes, pvz., RAL.",
        en: "When writing the color code, the letters 'NCS' are not needed, except when using other color palettes, such as RAL.",
      },
      value: { lt: "S1002-Y", en: "S1002-Y" },
    },
    {
      key: {
        lt: "Po 'S' raidės nededamas tarpas arba brūkšnys. (S_2505-G19Y)",
        en: "No space or dash is needed after the letter 'S'. (S_2505-G19Y)",
      },
      value: { lt: "S2505-G19Y", en: "S2505-G19Y" },
    },
    {
      key: {
        lt: "Rašant blizgumą nereikalingas tarpas tarp raidžių ir skaičiaus. (gl. 5)",
        en: "A space between letters and numbers is not required when writing glossiness. (gl. 5)",
      },
      value: { lt: "gl.5", en: "gl.5" },
    },
    {
      key: {
        lt: "Tarp apdailos kodo ir blizgumo nereikalingas apatinis brūkšnys. (02.01.20_gl.5)",
        en: "An underscore is not required between the finish code and the glossiness code. (02.01.20_gl.5)",
      },
      value: { lt: "02.01.20 gl.5", en: "02.01.20 gl.5" },
    },
    {
      key: {
        lt: "Nereikalingas papildomas taškas tarp 0 ir 2. (0.2.01.20 gl.5)",
        en: "An extra dot between 0 and 2 is unnecessary. (0.2.01.20 gl.5)",
      },
      value: { lt: "02.01.20 gl.5", en: "02.01.20 gl.5" },
    },
    {
      key: {
        lt: "Žodis 'lakas' nėra būtinas apdailos kode. (E=gl.5 PU lakas)",
        en: "The word 'lacquer' is not necessary. (E=gl.5 PU lacquer)",
      },
      value: { lt: "E=gl.5 PU", en: "E=gl.5 PU" },
    },
    {
      key: {
        lt: "Žodis 'Walnut' nereikalingas apdailos kode. (20.11.19 gl.10 Walnut)",
        en: "The word 'Walnut' is not necessary. (20.11.19 gl.10 Walnut)",
      },
      value: { lt: "20.11.19 gl.10", en: "20.11.19 gl.10" },
    },
    {
      key: {
        lt: "Jei apdaila daroma briaunoms ir plokštumoms, užtenka parašyti tik apdailos kodą (E+T+B=gl.5)",
        en: "If decor is done for edges and surfaces, only glossiness code is enough (E+T+B=gl.5)",
      },
      value: { lt: "gl.5", en: "gl.5" },
    },
  ];
var Bd = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  nd = ke.createContext && ke.createContext(Bd),
  F0 = ["attr", "size", "title"];
function D0(o, i) {
  if (o == null) return {};
  var r = A0(o, i),
    s,
    f;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(o);
    for (f = 0; f < c.length; f++)
      ((s = c[f]),
        !(i.indexOf(s) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(o, s) &&
          (r[s] = o[s]));
  }
  return r;
}
function A0(o, i) {
  if (o == null) return {};
  var r = {};
  for (var s in o)
    if (Object.prototype.hasOwnProperty.call(o, s)) {
      if (i.indexOf(s) >= 0) continue;
      r[s] = o[s];
    }
  return r;
}
function oa() {
  return (
    (oa = Object.assign
      ? Object.assign.bind()
      : function (o) {
          for (var i = 1; i < arguments.length; i++) {
            var r = arguments[i];
            for (var s in r)
              Object.prototype.hasOwnProperty.call(r, s) && (o[s] = r[s]);
          }
          return o;
        }),
    oa.apply(this, arguments)
  );
}
function rd(o, i) {
  var r = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(o);
    (i &&
      (s = s.filter(function (f) {
        return Object.getOwnPropertyDescriptor(o, f).enumerable;
      })),
      r.push.apply(r, s));
  }
  return r;
}
function aa(o) {
  for (var i = 1; i < arguments.length; i++) {
    var r = arguments[i] != null ? arguments[i] : {};
    i % 2
      ? rd(Object(r), !0).forEach(function (s) {
          b0(o, s, r[s]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r))
        : rd(Object(r)).forEach(function (s) {
            Object.defineProperty(o, s, Object.getOwnPropertyDescriptor(r, s));
          });
  }
  return o;
}
function b0(o, i, r) {
  return (
    (i = I0(i)),
    i in o
      ? Object.defineProperty(o, i, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (o[i] = r),
    o
  );
}
function I0(o) {
  var i = j0(o, "string");
  return typeof i == "symbol" ? i : i + "";
}
function j0(o, i) {
  if (typeof o != "object" || !o) return o;
  var r = o[Symbol.toPrimitive];
  if (r !== void 0) {
    var s = r.call(o, i || "default");
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(o);
}
function zd(o) {
  return (
    o &&
    o.map((i, r) =>
      ke.createElement(i.tag, aa({ key: r }, i.attr), zd(i.child)),
    )
  );
}
function da(o) {
  return (i) =>
    ke.createElement(B0, oa({ attr: aa({}, o.attr) }, i), zd(o.child));
}
function B0(o) {
  var i = (r) => {
    var { attr: s, size: f, title: c } = o,
      d = D0(o, F0),
      h = f || r.size || "1em",
      g;
    return (
      r.className && (g = r.className),
      o.className && (g = (g ? g + " " : "") + o.className),
      ke.createElement(
        "svg",
        oa(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          r.attr,
          s,
          d,
          {
            className: g,
            style: aa(aa({ color: o.color || r.color }, r.style), o.style),
            height: h,
            width: h,
            xmlns: "http://www.w3.org/2000/svg",
          },
        ),
        c && ke.createElement("title", null, c),
        o.children,
      )
    );
  };
  return nd !== void 0
    ? ke.createElement(nd.Consumer, null, (r) => i(r))
    : i(Bd);
}
function z0(o) {
  return da({
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
  })(o);
}
function M0(o) {
  return da({
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
  })(o);
}
const ul = ({ title: o, arrayToMap: i }) => {
    const [r, s] = le.useState(!1);
    return b.jsxs("div", {
      className: "singleRuleContainer",
      children: [
        b.jsxs("button", {
          type: "button",
          className: "ruleTitle",
          onClick: () => s(!r),
          "aria-expanded": r,
          children: [
            b.jsx("span", { className: "ruleTitleText", children: o }),
            b.jsx("span", {
              className: "ruleIcon",
              "aria-hidden": "true",
              children: r ? b.jsx(z0, { size: 24 }) : b.jsx(M0, { size: 24 }),
            }),
          ],
        }),
        b.jsx("div", {
          children:
            r &&
            b.jsx("div", {
              className: "pContainer",
              children: i.map((f, c) =>
                b.jsxs(
                  "p",
                  {
                    children: [
                      f.key,
                      " -",
                      b.jsx("span", { children: f.value }),
                    ],
                  },
                  c,
                ),
              ),
            }),
        }),
      ],
    });
  },
  V0 = [
    {
      key: { lt: "10.07.17 gl.5 GR/UBH/KL", en: "10.07.17 gl.5 GR/UBH/KL" },
      value: { lt: "pavyzdys", en: "Example" },
    },
    {
      key: { lt: "10.07.17", en: "10.07.17" },
      value: { lt: "apdailos kodas", en: "Decor code" },
    },
    {
      key: { lt: "gl.5", en: "gl.5" },
      value: { lt: "apdailos blizgumas", en: "Decor  glossiness" },
    },
    {
      key: { lt: "GR", en: "GR" },
      value: { lt: "viršutinės plokštumos apdaila", en: "Top surface decor" },
    },
    {
      key: { lt: "UBH", en: "UBH" },
      value: { lt: "apatinės plokštumos apdaila", en: "Bottom surface decor" },
    },
    {
      key: { lt: "KL", en: "KL" },
      value: { lt: "briaunų apdaila", en: "Edges decor" },
    },
  ];
function K0() {
  const { t: o, i18n: i } = bi(),
    r = (i.resolvedLanguage ?? i.language).startsWith("lt") ? "lt" : "en";
  return b.jsxs("div", {
    className: "rulesContainer",
    children: [
      b.jsx(ul, { title: o("rules.abbreviations"), arrayToMap: sl(O0, r) }),
      b.jsx(ul, { title: o("rules.husStructure"), arrayToMap: sl(V0, r) }),
      b.jsx(ul, { title: o("rules.decorStructure"), arrayToMap: sl(P0, r) }),
    ],
  });
}
function $0(o) {
  return da({
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
  })(o);
}
function U0(o) {
  return da({
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
  })(o);
}
function H0() {
  const { setShowStdSurfWarning: o } = Ll(),
    { t: i } = bi();
  return b.jsxs("aside", {
    className: "stdSurfaceInfoBox",
    "aria-live": "polite",
    children: [
      b.jsxs("div", {
        className: "stdSurfaceInfoBox__header",
        children: [
          b.jsxs("div", {
            className: "stdSurfaceInfoBox__heading",
            children: [
              b.jsx($0, { className: "stdSurfaceInfoBox__icon", size: 18 }),
              b.jsx("span", {
                className: "stdSurfaceInfoBox__label",
                children: i("standardSurfaceWarning.label"),
              }),
            ],
          }),
          b.jsx(U0, {
            className: "stdSurfaceInfoBox__close",
            size: 20,
            onClick: () => o(!1),
          }),
        ],
      }),
      b.jsx("p", {
        className: "stdSurfaceInfoBox__intro",
        children: b.jsx($g, {
          i18nKey: "standardSurfaceWarning.intro",
          components: { strong: b.jsx("b", {}) },
        }),
      }),
      b.jsxs("ul", {
        className: "stdSurfaceInfoBox__list",
        children: [
          b.jsx("li", { children: i("standardSurfaceWarning.paper") }),
          b.jsx("li", { children: i("standardSurfaceWarning.hpl") }),
          b.jsx("li", { children: i("standardSurfaceWarning.linoleum") }),
          b.jsx("li", { children: i("standardSurfaceWarning.absEdge") }),
          b.jsx("li", { children: i("standardSurfaceWarning.holes") }),
        ],
      }),
    ],
  });
}
function W0() {
  const { showStdSurfWarning: o } = Ll(),
    { t: i, i18n: r } = bi(),
    s = (r.resolvedLanguage ?? r.language).startsWith("lt") ? "lt" : "en",
    f = (c) => {
      r.changeLanguage(c);
    };
  return b.jsxs(b.Fragment, {
    children: [
      b.jsx("header", {
        children: b.jsxs("div", {
          className: "headerInner",
          children: [
            b.jsx(R0, {}),
            b.jsxs("div", {
              className: "lang-toggle",
              "aria-label": i("language.label"),
              children: [
                b.jsx("button", {
                  type: "button",
                  className: s === "en" ? "lang-btn active" : "lang-btn",
                  "aria-pressed": s === "en",
                  onClick: () => f("en"),
                  children: i("language.english"),
                }),
                b.jsx("button", {
                  type: "button",
                  className: s === "lt" ? "lang-btn active" : "lang-btn",
                  "aria-pressed": s === "lt",
                  onClick: () => f("lt"),
                  children: i("language.lithuanian"),
                }),
              ],
            }),
          ],
        }),
      }),
      b.jsxs("main", {
        className: "page page--home",
        children: [
          b.jsxs("div", {
            className: "formsContainer",
            children: [
              b.jsx(ll, {
                title: i("forms.standardDecor"),
                formType: "standard",
              }),
              b.jsx(ll, { title: i("forms.paint"), formType: "paint" }),
              b.jsx(ll, { title: i("forms.hus"), formType: "hus" }),
            ],
          }),
          o ? b.jsx(H0, {}) : "",
          b.jsx(K0, {}),
          b.jsx("footer", {
            style: { marginTop: "3rem" },
            children: "© Svenheim 2025",
          }),
        ],
      }),
      b.jsx(Xm, {
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
        transition: Ad,
      }),
    ],
  });
}
Vh.createRoot(document.getElementById("root")).render(
  b.jsx(p0, { children: b.jsx(le.StrictMode, { children: b.jsx(W0, {}) }) }),
);
