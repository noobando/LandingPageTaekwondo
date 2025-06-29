(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) r(a);
  new MutationObserver((a) => {
    for (const l of a)
      if (l.type === "childList")
        for (const o of l.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(a) {
    const l = {};
    return (
      a.integrity && (l.integrity = a.integrity),
      a.referrerPolicy && (l.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : a.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(a) {
    if (a.ep) return;
    a.ep = !0;
    const l = t(a);
    fetch(a.href, l);
  }
})();
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) t(r);
  new MutationObserver((r) => {
    for (const a of r)
      if (a.type === "childList")
        for (const l of a.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && t(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const a = {};
    return (
      r.integrity && (a.integrity = r.integrity),
      r.referrerPolicy && (a.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function t(r) {
    if (r.ep) return;
    r.ep = !0;
    const a = n(r);
    fetch(r.href, a);
  }
})();
var Bi = { exports: {} },
  na = {},
  Vi = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yt = Symbol.for("react.element"),
  rc = Symbol.for("react.portal"),
  ac = Symbol.for("react.fragment"),
  lc = Symbol.for("react.strict_mode"),
  oc = Symbol.for("react.profiler"),
  ic = Symbol.for("react.provider"),
  sc = Symbol.for("react.context"),
  uc = Symbol.for("react.forward_ref"),
  cc = Symbol.for("react.suspense"),
  dc = Symbol.for("react.memo"),
  fc = Symbol.for("react.lazy"),
  zo = Symbol.iterator;
function pc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (zo && e[zo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Wi = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Hi = Object.assign,
  Qi = {};
function ot(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = Qi),
    (this.updater = t || Wi);
}
ot.prototype.isReactComponent = {};
ot.prototype.setState = function (e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, n, "setState");
};
ot.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function qi() {}
qi.prototype = ot.prototype;
function Fl(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = Qi),
    (this.updater = t || Wi);
}
var Il = (Fl.prototype = new qi());
Il.constructor = Fl;
Hi(Il, ot.prototype);
Il.isPureReactComponent = !0;
var Ro = Array.isArray,
  Ki = Object.prototype.hasOwnProperty,
  Al = { current: null },
  Yi = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ji(e, n, t) {
  var r,
    a = {},
    l = null,
    o = null;
  if (n != null)
    for (r in (n.ref !== void 0 && (o = n.ref),
    n.key !== void 0 && (l = "" + n.key),
    n))
      Ki.call(n, r) && !Yi.hasOwnProperty(r) && (a[r] = n[r]);
  var i = arguments.length - 2;
  if (i === 1) a.children = t;
  else if (1 < i) {
    for (var u = Array(i), d = 0; d < i; d++) u[d] = arguments[d + 2];
    a.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((i = e.defaultProps), i)) a[r] === void 0 && (a[r] = i[r]);
  return {
    $$typeof: Yt,
    type: e,
    key: l,
    ref: o,
    props: a,
    _owner: Al.current,
  };
}
function mc(e, n) {
  return {
    $$typeof: Yt,
    type: e.type,
    key: n,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ul(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Yt;
}
function hc(e) {
  var n = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (t) {
      return n[t];
    })
  );
}
var Oo = /\/+/g;
function xa(e, n) {
  return typeof e == "object" && e !== null && e.key != null
    ? hc("" + e.key)
    : n.toString(36);
}
function br(e, n, t, r, a) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (l) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Yt:
          case rc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (a = a(o)),
      (e = r === "" ? "." + xa(o, 0) : r),
      Ro(a)
        ? ((t = ""),
          e != null && (t = e.replace(Oo, "$&/") + "/"),
          br(a, n, t, "", function (d) {
            return d;
          }))
        : a != null &&
          (Ul(a) &&
            (a = mc(
              a,
              t +
                (!a.key || (o && o.key === a.key)
                  ? ""
                  : ("" + a.key).replace(Oo, "$&/") + "/") +
                e
            )),
          n.push(a)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Ro(e)))
    for (var i = 0; i < e.length; i++) {
      l = e[i];
      var u = r + xa(l, i);
      o += br(l, n, t, u, a);
    }
  else if (((u = pc(e)), typeof u == "function"))
    for (e = u.call(e), i = 0; !(l = e.next()).done; )
      (l = l.value), (u = r + xa(l, i++)), (o += br(l, n, t, u, a));
  else if (l === "object")
    throw (
      ((n = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (n === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : n) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function tr(e, n, t) {
  if (e == null) return e;
  var r = [],
    a = 0;
  return (
    br(e, r, "", "", function (l) {
      return n.call(t, l, a++);
    }),
    r
  );
}
function gc(e) {
  if (e._status === -1) {
    var n = e._result;
    (n = n()),
      n.then(
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = t));
        },
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = t));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = n));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var se = { current: null },
  xr = { transition: null },
  yc = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: xr,
    ReactCurrentOwner: Al,
  };
function Gi() {
  throw Error("act(...) is not supported in production builds of React.");
}
T.Children = {
  map: tr,
  forEach: function (e, n, t) {
    tr(
      e,
      function () {
        n.apply(this, arguments);
      },
      t
    );
  },
  count: function (e) {
    var n = 0;
    return (
      tr(e, function () {
        n++;
      }),
      n
    );
  },
  toArray: function (e) {
    return (
      tr(e, function (n) {
        return n;
      }) || []
    );
  },
  only: function (e) {
    if (!Ul(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
T.Component = ot;
T.Fragment = ac;
T.Profiler = oc;
T.PureComponent = Fl;
T.StrictMode = lc;
T.Suspense = cc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yc;
T.act = Gi;
T.cloneElement = function (e, n, t) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Hi({}, e.props),
    a = e.key,
    l = e.ref,
    o = e._owner;
  if (n != null) {
    if (
      (n.ref !== void 0 && ((l = n.ref), (o = Al.current)),
      n.key !== void 0 && (a = "" + n.key),
      e.type && e.type.defaultProps)
    )
      var i = e.type.defaultProps;
    for (u in n)
      Ki.call(n, u) &&
        !Yi.hasOwnProperty(u) &&
        (r[u] = n[u] === void 0 && i !== void 0 ? i[u] : n[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = t;
  else if (1 < u) {
    i = Array(u);
    for (var d = 0; d < u; d++) i[d] = arguments[d + 2];
    r.children = i;
  }
  return { $$typeof: Yt, type: e.type, key: a, ref: l, props: r, _owner: o };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: sc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ic, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = Ji;
T.createFactory = function (e) {
  var n = Ji.bind(null, e);
  return (n.type = e), n;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: uc, render: e };
};
T.isValidElement = Ul;
T.lazy = function (e) {
  return { $$typeof: fc, _payload: { _status: -1, _result: e }, _init: gc };
};
T.memo = function (e, n) {
  return { $$typeof: dc, type: e, compare: n === void 0 ? null : n };
};
T.startTransition = function (e) {
  var n = xr.transition;
  xr.transition = {};
  try {
    e();
  } finally {
    xr.transition = n;
  }
};
T.unstable_act = Gi;
T.useCallback = function (e, n) {
  return se.current.useCallback(e, n);
};
T.useContext = function (e) {
  return se.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return se.current.useDeferredValue(e);
};
T.useEffect = function (e, n) {
  return se.current.useEffect(e, n);
};
T.useId = function () {
  return se.current.useId();
};
T.useImperativeHandle = function (e, n, t) {
  return se.current.useImperativeHandle(e, n, t);
};
T.useInsertionEffect = function (e, n) {
  return se.current.useInsertionEffect(e, n);
};
T.useLayoutEffect = function (e, n) {
  return se.current.useLayoutEffect(e, n);
};
T.useMemo = function (e, n) {
  return se.current.useMemo(e, n);
};
T.useReducer = function (e, n, t) {
  return se.current.useReducer(e, n, t);
};
T.useRef = function (e) {
  return se.current.useRef(e);
};
T.useState = function (e) {
  return se.current.useState(e);
};
T.useSyncExternalStore = function (e, n, t) {
  return se.current.useSyncExternalStore(e, n, t);
};
T.useTransition = function () {
  return se.current.useTransition();
};
T.version = "18.3.1";
Vi.exports = T;
var ae = Vi.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vc = ae,
  bc = Symbol.for("react.element"),
  xc = Symbol.for("react.fragment"),
  wc = Object.prototype.hasOwnProperty,
  kc = vc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Sc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zi(e, n, t) {
  var r,
    a = {},
    l = null,
    o = null;
  t !== void 0 && (l = "" + t),
    n.key !== void 0 && (l = "" + n.key),
    n.ref !== void 0 && (o = n.ref);
  for (r in n) wc.call(n, r) && !Sc.hasOwnProperty(r) && (a[r] = n[r]);
  if (e && e.defaultProps)
    for (r in ((n = e.defaultProps), n)) a[r] === void 0 && (a[r] = n[r]);
  return {
    $$typeof: bc,
    type: e,
    key: l,
    ref: o,
    props: a,
    _owner: kc.current,
  };
}
na.Fragment = xc;
na.jsx = Zi;
na.jsxs = Zi;
Bi.exports = na;
var s = Bi.exports,
  Xi = { exports: {} },
  be = {},
  es = { exports: {} },
  ns = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function n(S, _) {
    var P = S.length;
    S.push(_);
    e: for (; 0 < P; ) {
      var W = (P - 1) >>> 1,
        Y = S[W];
      if (0 < a(Y, _)) (S[W] = _), (S[P] = Y), (P = W);
      else break e;
    }
  }
  function t(S) {
    return S.length === 0 ? null : S[0];
  }
  function r(S) {
    if (S.length === 0) return null;
    var _ = S[0],
      P = S.pop();
    if (P !== _) {
      S[0] = P;
      e: for (var W = 0, Y = S.length, er = Y >>> 1; W < er; ) {
        var vn = 2 * (W + 1) - 1,
          ba = S[vn],
          bn = vn + 1,
          nr = S[bn];
        if (0 > a(ba, P))
          bn < Y && 0 > a(nr, ba)
            ? ((S[W] = nr), (S[bn] = P), (W = bn))
            : ((S[W] = ba), (S[vn] = P), (W = vn));
        else if (bn < Y && 0 > a(nr, P)) (S[W] = nr), (S[bn] = P), (W = bn);
        else break e;
      }
    }
    return _;
  }
  function a(S, _) {
    var P = S.sortIndex - _.sortIndex;
    return P !== 0 ? P : S.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var o = Date,
      i = o.now();
    e.unstable_now = function () {
      return o.now() - i;
    };
  }
  var u = [],
    d = [],
    g = 1,
    h = null,
    m = 3,
    b = !1,
    x = !1,
    w = !1,
    F = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(S) {
    for (var _ = t(d); _ !== null; ) {
      if (_.callback === null) r(d);
      else if (_.startTime <= S)
        r(d), (_.sortIndex = _.expirationTime), n(u, _);
      else break;
      _ = t(d);
    }
  }
  function v(S) {
    if (((w = !1), p(S), !x))
      if (t(u) !== null) (x = !0), ya(N);
      else {
        var _ = t(d);
        _ !== null && va(v, _.startTime - S);
      }
  }
  function N(S, _) {
    (x = !1), w && ((w = !1), f(E), (E = -1)), (b = !0);
    var P = m;
    try {
      for (
        p(_), h = t(u);
        h !== null && (!(h.expirationTime > _) || (S && !_e()));

      ) {
        var W = h.callback;
        if (typeof W == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var Y = W(h.expirationTime <= _);
          (_ = e.unstable_now()),
            typeof Y == "function" ? (h.callback = Y) : h === t(u) && r(u),
            p(_);
        } else r(u);
        h = t(u);
      }
      if (h !== null) var er = !0;
      else {
        var vn = t(d);
        vn !== null && va(v, vn.startTime - _), (er = !1);
      }
      return er;
    } finally {
      (h = null), (m = P), (b = !1);
    }
  }
  var j = !1,
    C = null,
    E = -1,
    V = 5,
    M = -1;
  function _e() {
    return !(e.unstable_now() - M < V);
  }
  function ut() {
    if (C !== null) {
      var S = e.unstable_now();
      M = S;
      var _ = !0;
      try {
        _ = C(!0, S);
      } finally {
        _ ? ct() : ((j = !1), (C = null));
      }
    } else j = !1;
  }
  var ct;
  if (typeof c == "function")
    ct = function () {
      c(ut);
    };
  else if (typeof MessageChannel < "u") {
    var Lo = new MessageChannel(),
      tc = Lo.port2;
    (Lo.port1.onmessage = ut),
      (ct = function () {
        tc.postMessage(null);
      });
  } else
    ct = function () {
      F(ut, 0);
    };
  function ya(S) {
    (C = S), j || ((j = !0), ct());
  }
  function va(S, _) {
    E = F(function () {
      S(e.unstable_now());
    }, _);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (S) {
      S.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || b || ((x = !0), ya(N));
    }),
    (e.unstable_forceFrameRate = function (S) {
      0 > S || 125 < S
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (V = 0 < S ? Math.floor(1e3 / S) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return t(u);
    }),
    (e.unstable_next = function (S) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = m;
      }
      var P = m;
      m = _;
      try {
        return S();
      } finally {
        m = P;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (S, _) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var P = m;
      m = S;
      try {
        return _();
      } finally {
        m = P;
      }
    }),
    (e.unstable_scheduleCallback = function (S, _, P) {
      var W = e.unstable_now();
      switch (
        (typeof P == "object" && P !== null
          ? ((P = P.delay), (P = typeof P == "number" && 0 < P ? W + P : W))
          : (P = W),
        S)
      ) {
        case 1:
          var Y = -1;
          break;
        case 2:
          Y = 250;
          break;
        case 5:
          Y = 1073741823;
          break;
        case 4:
          Y = 1e4;
          break;
        default:
          Y = 5e3;
      }
      return (
        (Y = P + Y),
        (S = {
          id: g++,
          callback: _,
          priorityLevel: S,
          startTime: P,
          expirationTime: Y,
          sortIndex: -1,
        }),
        P > W
          ? ((S.sortIndex = P),
            n(d, S),
            t(u) === null &&
              S === t(d) &&
              (w ? (f(E), (E = -1)) : (w = !0), va(v, P - W)))
          : ((S.sortIndex = Y), n(u, S), x || b || ((x = !0), ya(N))),
        S
      );
    }),
    (e.unstable_shouldYield = _e),
    (e.unstable_wrapCallback = function (S) {
      var _ = m;
      return function () {
        var P = m;
        m = _;
        try {
          return S.apply(this, arguments);
        } finally {
          m = P;
        }
      };
    });
})(ns);
es.exports = ns;
var Nc = es.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jc = ae,
  ve = Nc;
function y(e) {
  for (
    var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1;
    t < arguments.length;
    t++
  )
    n += "&args[]=" + encodeURIComponent(arguments[t]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    n +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ts = new Set(),
  Lt = {};
function Ln(e, n) {
  Xn(e, n), Xn(e + "Capture", n);
}
function Xn(e, n) {
  for (Lt[e] = n, e = 0; e < n.length; e++) ts.add(n[e]);
}
var Qe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Qa = Object.prototype.hasOwnProperty,
  Cc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Do = {},
  Fo = {};
function Ec(e) {
  return Qa.call(Fo, e)
    ? !0
    : Qa.call(Do, e)
    ? !1
    : Cc.test(e)
    ? (Fo[e] = !0)
    : ((Do[e] = !0), !1);
}
function _c(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : t !== null
        ? !t.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Pc(e, n, t, r) {
  if (n === null || typeof n > "u" || _c(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function ue(e, n, t, r, a, l, o) {
  (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
    (this.attributeName = r),
    (this.attributeNamespace = a),
    (this.mustUseProperty = t),
    (this.propertyName = e),
    (this.type = n),
    (this.sanitizeURL = l),
    (this.removeEmptyString = o);
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new ue(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var n = e[0];
  ee[n] = new ue(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ee[e] = new ue(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ee[e] = new ue(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new ue(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ee[e] = new ue(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ee[e] = new ue(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ee[e] = new ue(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ee[e] = new ue(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var $l = /[\-:]([a-z])/g;
function Bl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace($l, Bl);
    ee[n] = new ue(n, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace($l, Bl);
    ee[n] = new ue(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var n = e.replace($l, Bl);
  ee[n] = new ue(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ee[e] = new ue(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new ue(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ee[e] = new ue(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Vl(e, n, t, r) {
  var a = ee.hasOwnProperty(n) ? ee[n] : null;
  (a !== null
    ? a.type !== 0
    : r ||
      !(2 < n.length) ||
      (n[0] !== "o" && n[0] !== "O") ||
      (n[1] !== "n" && n[1] !== "N")) &&
    (Pc(n, t, a, r) && (t = null),
    r || a === null
      ? Ec(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
      : a.mustUseProperty
      ? (e[a.propertyName] = t === null ? (a.type === 3 ? !1 : "") : t)
      : ((n = a.attributeName),
        (r = a.attributeNamespace),
        t === null
          ? e.removeAttribute(n)
          : ((a = a.type),
            (t = a === 3 || (a === 4 && t === !0) ? "" : "" + t),
            r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Je = jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  rr = Symbol.for("react.element"),
  On = Symbol.for("react.portal"),
  Dn = Symbol.for("react.fragment"),
  Wl = Symbol.for("react.strict_mode"),
  qa = Symbol.for("react.profiler"),
  rs = Symbol.for("react.provider"),
  as = Symbol.for("react.context"),
  Hl = Symbol.for("react.forward_ref"),
  Ka = Symbol.for("react.suspense"),
  Ya = Symbol.for("react.suspense_list"),
  Ql = Symbol.for("react.memo"),
  Ze = Symbol.for("react.lazy"),
  ls = Symbol.for("react.offscreen"),
  Io = Symbol.iterator;
function dt(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Io && e[Io]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var $ = Object.assign,
  wa;
function bt(e) {
  if (wa === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      wa = (n && n[1]) || "";
    }
  return (
    `
` +
    wa +
    e
  );
}
var ka = !1;
function Sa(e, n) {
  if (!e || ka) return "";
  ka = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (d) {
          r = d;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (
        var a = d.stack.split(`
`),
          l = r.stack.split(`
`),
          o = a.length - 1,
          i = l.length - 1;
        1 <= o && 0 <= i && a[o] !== l[i];

      )
        i--;
      for (; 1 <= o && 0 <= i; o--, i--)
        if (a[o] !== l[i]) {
          if (o !== 1 || i !== 1)
            do
              if ((o--, i--, 0 > i || a[o] !== l[i])) {
                var u =
                  `
` + a[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= i);
          break;
        }
    }
  } finally {
    (ka = !1), (Error.prepareStackTrace = t);
  }
  return (e = e ? e.displayName || e.name : "") ? bt(e) : "";
}
function Tc(e) {
  switch (e.tag) {
    case 5:
      return bt(e.type);
    case 16:
      return bt("Lazy");
    case 13:
      return bt("Suspense");
    case 19:
      return bt("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Sa(e.type, !1)), e;
    case 11:
      return (e = Sa(e.type.render, !1)), e;
    case 1:
      return (e = Sa(e.type, !0)), e;
    default:
      return "";
  }
}
function Ja(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Dn:
      return "Fragment";
    case On:
      return "Portal";
    case qa:
      return "Profiler";
    case Wl:
      return "StrictMode";
    case Ka:
      return "Suspense";
    case Ya:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case as:
        return (e.displayName || "Context") + ".Consumer";
      case rs:
        return (e._context.displayName || "Context") + ".Provider";
      case Hl:
        var n = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = n.displayName || n.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ql:
        return (
          (n = e.displayName || null), n !== null ? n : Ja(e.type) || "Memo"
        );
      case Ze:
        (n = e._payload), (e = e._init);
        try {
          return Ja(e(n));
        } catch {}
    }
  return null;
}
function Mc(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = n.render),
        (e = e.displayName || e.name || ""),
        n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ja(n);
    case 8:
      return n === Wl ? "StrictMode" : "Mode";
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
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
  }
  return null;
}
function pn(e) {
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
function os(e) {
  var n = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (n === "checkbox" || n === "radio")
  );
}
function Lc(e) {
  var n = os(e) ? "checked" : "value",
    t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
    r = "" + e[n];
  if (
    !e.hasOwnProperty(n) &&
    typeof t < "u" &&
    typeof t.get == "function" &&
    typeof t.set == "function"
  ) {
    var a = t.get,
      l = t.set;
    return (
      Object.defineProperty(e, n, {
        configurable: !0,
        get: function () {
          return a.call(this);
        },
        set: function (o) {
          (r = "" + o), l.call(this, o);
        },
      }),
      Object.defineProperty(e, n, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[n];
        },
      }
    );
  }
}
function ar(e) {
  e._valueTracker || (e._valueTracker = Lc(e));
}
function is(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(),
    r = "";
  return (
    e && (r = os(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== t ? (n.setValue(e), !0) : !1
  );
}
function Mr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ga(e, n) {
  var t = n.checked;
  return $({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t ?? e._wrapperState.initialChecked,
  });
}
function Ao(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue,
    r = n.checked != null ? n.checked : n.defaultChecked;
  (t = pn(n.value != null ? n.value : t)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled:
        n.type === "checkbox" || n.type === "radio"
          ? n.checked != null
          : n.value != null,
    });
}
function ss(e, n) {
  (n = n.checked), n != null && Vl(e, "checked", n, !1);
}
function Za(e, n) {
  ss(e, n);
  var t = pn(n.value),
    r = n.type;
  if (t != null)
    r === "number"
      ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
      : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value")
    ? Xa(e, n.type, t)
    : n.hasOwnProperty("defaultValue") && Xa(e, n.type, pn(n.defaultValue)),
    n.checked == null &&
      n.defaultChecked != null &&
      (e.defaultChecked = !!n.defaultChecked);
}
function Uo(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (n.value !== void 0 && n.value !== null)
      )
    )
      return;
    (n = "" + e._wrapperState.initialValue),
      t || n === e.value || (e.value = n),
      (e.defaultValue = n);
  }
  (t = e.name),
    t !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    t !== "" && (e.name = t);
}
function Xa(e, n, t) {
  (n !== "number" || Mr(e.ownerDocument) !== e) &&
    (t == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var xt = Array.isArray;
function qn(e, n, t, r) {
  if (((e = e.options), n)) {
    n = {};
    for (var a = 0; a < t.length; a++) n["$" + t[a]] = !0;
    for (t = 0; t < e.length; t++)
      (a = n.hasOwnProperty("$" + e[t].value)),
        e[t].selected !== a && (e[t].selected = a),
        a && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + pn(t), n = null, a = 0; a < e.length; a++) {
      if (e[a].value === t) {
        (e[a].selected = !0), r && (e[a].defaultSelected = !0);
        return;
      }
      n !== null || e[a].disabled || (n = e[a]);
    }
    n !== null && (n.selected = !0);
  }
}
function el(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(y(91));
  return $({}, n, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function $o(e, n) {
  var t = n.value;
  if (t == null) {
    if (((t = n.children), (n = n.defaultValue), t != null)) {
      if (n != null) throw Error(y(92));
      if (xt(t)) {
        if (1 < t.length) throw Error(y(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), (t = n);
  }
  e._wrapperState = { initialValue: pn(t) };
}
function us(e, n) {
  var t = pn(n.value),
    r = pn(n.defaultValue);
  t != null &&
    ((t = "" + t),
    t !== e.value && (e.value = t),
    n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    r != null && (e.defaultValue = "" + r);
}
function Bo(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function cs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function nl(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? cs(n)
    : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var lr,
  ds = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (n, t, r, a) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(n, t, r, a);
          });
        }
      : e;
  })(function (e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n;
    else {
      for (
        lr = lr || document.createElement("div"),
          lr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
          n = lr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
function zt(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var St = {
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
  zc = ["Webkit", "ms", "Moz", "O"];
Object.keys(St).forEach(function (e) {
  zc.forEach(function (n) {
    (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (St[n] = St[e]);
  });
});
function fs(e, n, t) {
  return n == null || typeof n == "boolean" || n === ""
    ? ""
    : t || typeof n != "number" || n === 0 || (St.hasOwnProperty(e) && St[e])
    ? ("" + n).trim()
    : n + "px";
}
function ps(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0,
        a = fs(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, a) : (e[t] = a);
    }
}
var Rc = $(
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
function tl(e, n) {
  if (n) {
    if (Rc[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(y(60));
      if (
        typeof n.dangerouslySetInnerHTML != "object" ||
        !("__html" in n.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(y(62));
  }
}
function rl(e, n) {
  if (e.indexOf("-") === -1) return typeof n.is == "string";
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
var al = null;
function ql(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ll = null,
  Kn = null,
  Yn = null;
function Vo(e) {
  if ((e = Zt(e))) {
    if (typeof ll != "function") throw Error(y(280));
    var n = e.stateNode;
    n && ((n = oa(n)), ll(e.stateNode, e.type, n));
  }
}
function ms(e) {
  Kn ? (Yn ? Yn.push(e) : (Yn = [e])) : (Kn = e);
}
function hs() {
  if (Kn) {
    var e = Kn,
      n = Yn;
    if (((Yn = Kn = null), Vo(e), n)) for (e = 0; e < n.length; e++) Vo(n[e]);
  }
}
function gs(e, n) {
  return e(n);
}
function ys() {}
var Na = !1;
function vs(e, n, t) {
  if (Na) return e(n, t);
  Na = !0;
  try {
    return gs(e, n, t);
  } finally {
    (Na = !1), (Kn !== null || Yn !== null) && (ys(), hs());
  }
}
function Rt(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = oa(t);
  if (r === null) return null;
  t = r[n];
  e: switch (n) {
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
  if (t && typeof t != "function") throw Error(y(231, n, typeof t));
  return t;
}
var ol = !1;
if (Qe)
  try {
    var ft = {};
    Object.defineProperty(ft, "passive", {
      get: function () {
        ol = !0;
      },
    }),
      window.addEventListener("test", ft, ft),
      window.removeEventListener("test", ft, ft);
  } catch {
    ol = !1;
  }
function Oc(e, n, t, r, a, l, o, i, u) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, d);
  } catch (g) {
    this.onError(g);
  }
}
var Nt = !1,
  Lr = null,
  zr = !1,
  il = null,
  Dc = {
    onError: function (e) {
      (Nt = !0), (Lr = e);
    },
  };
function Fc(e, n, t, r, a, l, o, i, u) {
  (Nt = !1), (Lr = null), Oc.apply(Dc, arguments);
}
function Ic(e, n, t, r, a, l, o, i, u) {
  if ((Fc.apply(this, arguments), Nt)) {
    if (Nt) {
      var d = Lr;
      (Nt = !1), (Lr = null);
    } else throw Error(y(198));
    zr || ((zr = !0), (il = d));
  }
}
function zn(e) {
  var n = e,
    t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function bs(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (
      (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
      n !== null)
    )
      return n.dehydrated;
  }
  return null;
}
function Wo(e) {
  if (zn(e) !== e) throw Error(y(188));
}
function Ac(e) {
  var n = e.alternate;
  if (!n) {
    if (((n = zn(e)), n === null)) throw Error(y(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var a = t.return;
    if (a === null) break;
    var l = a.alternate;
    if (l === null) {
      if (((r = a.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (a.child === l.child) {
      for (l = a.child; l; ) {
        if (l === t) return Wo(a), e;
        if (l === r) return Wo(a), n;
        l = l.sibling;
      }
      throw Error(y(188));
    }
    if (t.return !== r.return) (t = a), (r = l);
    else {
      for (var o = !1, i = a.child; i; ) {
        if (i === t) {
          (o = !0), (t = a), (r = l);
          break;
        }
        if (i === r) {
          (o = !0), (r = a), (t = l);
          break;
        }
        i = i.sibling;
      }
      if (!o) {
        for (i = l.child; i; ) {
          if (i === t) {
            (o = !0), (t = l), (r = a);
            break;
          }
          if (i === r) {
            (o = !0), (r = l), (t = a);
            break;
          }
          i = i.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (t.alternate !== r) throw Error(y(190));
  }
  if (t.tag !== 3) throw Error(y(188));
  return t.stateNode.current === t ? e : n;
}
function xs(e) {
  return (e = Ac(e)), e !== null ? ws(e) : null;
}
function ws(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = ws(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var ks = ve.unstable_scheduleCallback,
  Ho = ve.unstable_cancelCallback,
  Uc = ve.unstable_shouldYield,
  $c = ve.unstable_requestPaint,
  H = ve.unstable_now,
  Bc = ve.unstable_getCurrentPriorityLevel,
  Kl = ve.unstable_ImmediatePriority,
  Ss = ve.unstable_UserBlockingPriority,
  Rr = ve.unstable_NormalPriority,
  Vc = ve.unstable_LowPriority,
  Ns = ve.unstable_IdlePriority,
  ta = null,
  Ae = null;
function Wc(e) {
  if (Ae && typeof Ae.onCommitFiberRoot == "function")
    try {
      Ae.onCommitFiberRoot(ta, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ze = Math.clz32 ? Math.clz32 : qc,
  Hc = Math.log,
  Qc = Math.LN2;
function qc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Hc(e) / Qc) | 0)) | 0;
}
var or = 64,
  ir = 4194304;
function wt(e) {
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
function Or(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0,
    a = e.suspendedLanes,
    l = e.pingedLanes,
    o = t & 268435455;
  if (o !== 0) {
    var i = o & ~a;
    i !== 0 ? (r = wt(i)) : ((l &= o), l !== 0 && (r = wt(l)));
  } else (o = t & ~a), o !== 0 ? (r = wt(o)) : l !== 0 && (r = wt(l));
  if (r === 0) return 0;
  if (
    n !== 0 &&
    n !== r &&
    !(n & a) &&
    ((a = r & -r), (l = n & -n), a >= l || (a === 16 && (l & 4194240) !== 0))
  )
    return n;
  if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
    for (e = e.entanglements, n &= r; 0 < n; )
      (t = 31 - ze(n)), (a = 1 << t), (r |= e[t]), (n &= ~a);
  return r;
}
function Kc(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
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
      return n + 5e3;
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
function Yc(e, n) {
  for (
    var t = e.suspendedLanes,
      r = e.pingedLanes,
      a = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var o = 31 - ze(l),
      i = 1 << o,
      u = a[o];
    u === -1
      ? (!(i & t) || i & r) && (a[o] = Kc(i, n))
      : u <= n && (e.expiredLanes |= i),
      (l &= ~i);
  }
}
function sl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function js() {
  var e = or;
  return (or <<= 1), !(or & 4194240) && (or = 64), e;
}
function ja(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function Jt(e, n, t) {
  (e.pendingLanes |= n),
    n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (n = 31 - ze(n)),
    (e[n] = t);
}
function Jc(e, n) {
  var t = e.pendingLanes & ~n;
  (e.pendingLanes = n),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= n),
    (e.mutableReadLanes &= n),
    (e.entangledLanes &= n),
    (n = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var a = 31 - ze(t),
      l = 1 << a;
    (n[a] = 0), (r[a] = -1), (e[a] = -1), (t &= ~l);
  }
}
function Yl(e, n) {
  var t = (e.entangledLanes |= n);
  for (e = e.entanglements; t; ) {
    var r = 31 - ze(t),
      a = 1 << r;
    (a & n) | (e[r] & n) && (e[r] |= n), (t &= ~a);
  }
}
var z = 0;
function Cs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Es,
  Jl,
  _s,
  Ps,
  Ts,
  ul = !1,
  sr = [],
  an = null,
  ln = null,
  on = null,
  Ot = new Map(),
  Dt = new Map(),
  en = [],
  Gc =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Qo(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      an = null;
      break;
    case "dragenter":
    case "dragleave":
      ln = null;
      break;
    case "mouseover":
    case "mouseout":
      on = null;
      break;
    case "pointerover":
    case "pointerout":
      Ot.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Dt.delete(n.pointerId);
  }
}
function pt(e, n, t, r, a, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: n,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [a],
      }),
      n !== null && ((n = Zt(n)), n !== null && Jl(n)),
      e)
    : ((e.eventSystemFlags |= r),
      (n = e.targetContainers),
      a !== null && n.indexOf(a) === -1 && n.push(a),
      e);
}
function Zc(e, n, t, r, a) {
  switch (n) {
    case "focusin":
      return (an = pt(an, e, n, t, r, a)), !0;
    case "dragenter":
      return (ln = pt(ln, e, n, t, r, a)), !0;
    case "mouseover":
      return (on = pt(on, e, n, t, r, a)), !0;
    case "pointerover":
      var l = a.pointerId;
      return Ot.set(l, pt(Ot.get(l) || null, e, n, t, r, a)), !0;
    case "gotpointercapture":
      return (
        (l = a.pointerId), Dt.set(l, pt(Dt.get(l) || null, e, n, t, r, a)), !0
      );
  }
  return !1;
}
function Ms(e) {
  var n = kn(e.target);
  if (n !== null) {
    var t = zn(n);
    if (t !== null) {
      if (((n = t.tag), n === 13)) {
        if (((n = bs(t)), n !== null)) {
          (e.blockedOn = n),
            Ts(e.priority, function () {
              _s(t);
            });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function wr(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = cl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      (al = r), t.target.dispatchEvent(r), (al = null);
    } else return (n = Zt(t)), n !== null && Jl(n), (e.blockedOn = t), !1;
    n.shift();
  }
  return !0;
}
function qo(e, n, t) {
  wr(e) && t.delete(n);
}
function Xc() {
  (ul = !1),
    an !== null && wr(an) && (an = null),
    ln !== null && wr(ln) && (ln = null),
    on !== null && wr(on) && (on = null),
    Ot.forEach(qo),
    Dt.forEach(qo);
}
function mt(e, n) {
  e.blockedOn === n &&
    ((e.blockedOn = null),
    ul ||
      ((ul = !0),
      ve.unstable_scheduleCallback(ve.unstable_NormalPriority, Xc)));
}
function Ft(e) {
  function n(a) {
    return mt(a, e);
  }
  if (0 < sr.length) {
    mt(sr[0], e);
    for (var t = 1; t < sr.length; t++) {
      var r = sr[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    an !== null && mt(an, e),
      ln !== null && mt(ln, e),
      on !== null && mt(on, e),
      Ot.forEach(n),
      Dt.forEach(n),
      t = 0;
    t < en.length;
    t++
  )
    (r = en[t]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < en.length && ((t = en[0]), t.blockedOn === null); )
    Ms(t), t.blockedOn === null && en.shift();
}
var Jn = Je.ReactCurrentBatchConfig,
  Dr = !0;
function ed(e, n, t, r) {
  var a = z,
    l = Jn.transition;
  Jn.transition = null;
  try {
    (z = 1), Gl(e, n, t, r);
  } finally {
    (z = a), (Jn.transition = l);
  }
}
function nd(e, n, t, r) {
  var a = z,
    l = Jn.transition;
  Jn.transition = null;
  try {
    (z = 4), Gl(e, n, t, r);
  } finally {
    (z = a), (Jn.transition = l);
  }
}
function Gl(e, n, t, r) {
  if (Dr) {
    var a = cl(e, n, t, r);
    if (a === null) Oa(e, n, r, Fr, t), Qo(e, r);
    else if (Zc(a, e, n, t, r)) r.stopPropagation();
    else if ((Qo(e, r), n & 4 && -1 < Gc.indexOf(e))) {
      for (; a !== null; ) {
        var l = Zt(a);
        if (
          (l !== null && Es(l),
          (l = cl(e, n, t, r)),
          l === null && Oa(e, n, r, Fr, t),
          l === a)
        )
          break;
        a = l;
      }
      a !== null && r.stopPropagation();
    } else Oa(e, n, r, null, t);
  }
}
var Fr = null;
function cl(e, n, t, r) {
  if (((Fr = null), (e = ql(r)), (e = kn(e)), e !== null))
    if (((n = zn(e)), n === null)) e = null;
    else if (((t = n.tag), t === 13)) {
      if (((e = bs(n)), e !== null)) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
  return (Fr = e), null;
}
function Ls(e) {
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
      switch (Bc()) {
        case Kl:
          return 1;
        case Ss:
          return 4;
        case Rr:
        case Vc:
          return 16;
        case Ns:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tn = null,
  Zl = null,
  kr = null;
function zs() {
  if (kr) return kr;
  var e,
    n = Zl,
    t = n.length,
    r,
    a = "value" in tn ? tn.value : tn.textContent,
    l = a.length;
  for (e = 0; e < t && n[e] === a[e]; e++);
  var o = t - e;
  for (r = 1; r <= o && n[t - r] === a[l - r]; r++);
  return (kr = a.slice(e, 1 < r ? 1 - r : void 0));
}
function Sr(e) {
  var n = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
      : (e = n),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ur() {
  return !0;
}
function Ko() {
  return !1;
}
function xe(e) {
  function n(t, r, a, l, o) {
    (this._reactName = t),
      (this._targetInst = a),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = o),
      (this.currentTarget = null);
    for (var i in e)
      e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(l) : l[i]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? ur
        : Ko),
      (this.isPropagationStopped = Ko),
      this
    );
  }
  return (
    $(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue != "unknown" && (t.returnValue = !1),
          (this.isDefaultPrevented = ur));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
          (this.isPropagationStopped = ur));
      },
      persist: function () {},
      isPersistent: ur,
    }),
    n
  );
}
var it = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Xl = xe(it),
  Gt = $({}, it, { view: 0, detail: 0 }),
  td = xe(Gt),
  Ca,
  Ea,
  ht,
  ra = $({}, Gt, {
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
    getModifierState: eo,
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
        : (e !== ht &&
            (ht && e.type === "mousemove"
              ? ((Ca = e.screenX - ht.screenX), (Ea = e.screenY - ht.screenY))
              : (Ea = Ca = 0),
            (ht = e)),
          Ca);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ea;
    },
  }),
  Yo = xe(ra),
  rd = $({}, ra, { dataTransfer: 0 }),
  ad = xe(rd),
  ld = $({}, Gt, { relatedTarget: 0 }),
  _a = xe(ld),
  od = $({}, it, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  id = xe(od),
  sd = $({}, it, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ud = xe(sd),
  cd = $({}, it, { data: 0 }),
  Jo = xe(cd),
  dd = {
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
  fd = {
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
  pd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function md(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = pd[e]) ? !!n[e] : !1;
}
function eo() {
  return md;
}
var hd = $({}, Gt, {
    key: function (e) {
      if (e.key) {
        var n = dd[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress"
        ? ((e = Sr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? fd[e.keyCode] || "Unidentified"
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
    getModifierState: eo,
    charCode: function (e) {
      return e.type === "keypress" ? Sr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Sr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  gd = xe(hd),
  yd = $({}, ra, {
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
  Go = xe(yd),
  vd = $({}, Gt, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: eo,
  }),
  bd = xe(vd),
  xd = $({}, it, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  wd = xe(xd),
  kd = $({}, ra, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  Sd = xe(kd),
  Nd = [9, 13, 27, 32],
  no = Qe && "CompositionEvent" in window,
  jt = null;
Qe && "documentMode" in document && (jt = document.documentMode);
var jd = Qe && "TextEvent" in window && !jt,
  Rs = Qe && (!no || (jt && 8 < jt && 11 >= jt)),
  Zo = " ",
  Xo = !1;
function Os(e, n) {
  switch (e) {
    case "keyup":
      return Nd.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ds(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Fn = !1;
function Cd(e, n) {
  switch (e) {
    case "compositionend":
      return Ds(n);
    case "keypress":
      return n.which !== 32 ? null : ((Xo = !0), Zo);
    case "textInput":
      return (e = n.data), e === Zo && Xo ? null : e;
    default:
      return null;
  }
}
function Ed(e, n) {
  if (Fn)
    return e === "compositionend" || (!no && Os(e, n))
      ? ((e = zs()), (kr = Zl = tn = null), (Fn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return Rs && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var _d = {
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
function ei(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!_d[e.type] : n === "textarea";
}
function Fs(e, n, t, r) {
  ms(r),
    (n = Ir(n, "onChange")),
    0 < n.length &&
      ((t = new Xl("onChange", "change", null, t, r)),
      e.push({ event: t, listeners: n }));
}
var Ct = null,
  It = null;
function Pd(e) {
  Ks(e, 0);
}
function aa(e) {
  var n = Un(e);
  if (is(n)) return e;
}
function Td(e, n) {
  if (e === "change") return n;
}
var Is = !1;
if (Qe) {
  var Pa;
  if (Qe) {
    var Ta = "oninput" in document;
    if (!Ta) {
      var ni = document.createElement("div");
      ni.setAttribute("oninput", "return;"),
        (Ta = typeof ni.oninput == "function");
    }
    Pa = Ta;
  } else Pa = !1;
  Is = Pa && (!document.documentMode || 9 < document.documentMode);
}
function ti() {
  Ct && (Ct.detachEvent("onpropertychange", As), (It = Ct = null));
}
function As(e) {
  if (e.propertyName === "value" && aa(It)) {
    var n = [];
    Fs(n, It, e, ql(e)), vs(Pd, n);
  }
}
function Md(e, n, t) {
  e === "focusin"
    ? (ti(), (Ct = n), (It = t), Ct.attachEvent("onpropertychange", As))
    : e === "focusout" && ti();
}
function Ld(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return aa(It);
}
function zd(e, n) {
  if (e === "click") return aa(n);
}
function Rd(e, n) {
  if (e === "input" || e === "change") return aa(n);
}
function Od(e, n) {
  return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var Oe = typeof Object.is == "function" ? Object.is : Od;
function At(e, n) {
  if (Oe(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  var t = Object.keys(e),
    r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var a = t[r];
    if (!Qa.call(n, a) || !Oe(e[a], n[a])) return !1;
  }
  return !0;
}
function ri(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ai(e, n) {
  var t = ri(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (((r = e + t.textContent.length), e <= n && r >= n))
        return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = ri(t);
  }
}
function Us(e, n) {
  return e && n
    ? e === n
      ? !0
      : e && e.nodeType === 3
      ? !1
      : n && n.nodeType === 3
      ? Us(e, n.parentNode)
      : "contains" in e
      ? e.contains(n)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(n) & 16)
      : !1
    : !1;
}
function $s() {
  for (var e = window, n = Mr(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Mr(e.document);
  }
  return n;
}
function to(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    n &&
    ((n === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      n === "textarea" ||
      e.contentEditable === "true")
  );
}
function Dd(e) {
  var n = $s(),
    t = e.focusedElem,
    r = e.selectionRange;
  if (
    n !== t &&
    t &&
    t.ownerDocument &&
    Us(t.ownerDocument.documentElement, t)
  ) {
    if (r !== null && to(t)) {
      if (
        ((n = r.start),
        (e = r.end),
        e === void 0 && (e = n),
        "selectionStart" in t)
      )
        (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length));
      else if (
        ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var a = t.textContent.length,
          l = Math.min(r.start, a);
        (r = r.end === void 0 ? l : Math.min(r.end, a)),
          !e.extend && l > r && ((a = r), (r = l), (l = a)),
          (a = ai(t, l));
        var o = ai(t, r);
        a &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== a.node ||
            e.anchorOffset !== a.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((n = n.createRange()),
          n.setStart(a.node, a.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(n), e.extend(o.node, o.offset))
            : (n.setEnd(o.node, o.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; (e = e.parentNode); )
      e.nodeType === 1 &&
        n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
      (e = n[t]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Fd = Qe && "documentMode" in document && 11 >= document.documentMode,
  In = null,
  dl = null,
  Et = null,
  fl = !1;
function li(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  fl ||
    In == null ||
    In !== Mr(r) ||
    ((r = In),
    "selectionStart" in r && to(r)
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
    (Et && At(Et, r)) ||
      ((Et = r),
      (r = Ir(dl, "onSelect")),
      0 < r.length &&
        ((n = new Xl("onSelect", "select", null, n, t)),
        e.push({ event: n, listeners: r }),
        (n.target = In))));
}
function cr(e, n) {
  var t = {};
  return (
    (t[e.toLowerCase()] = n.toLowerCase()),
    (t["Webkit" + e] = "webkit" + n),
    (t["Moz" + e] = "moz" + n),
    t
  );
}
var An = {
    animationend: cr("Animation", "AnimationEnd"),
    animationiteration: cr("Animation", "AnimationIteration"),
    animationstart: cr("Animation", "AnimationStart"),
    transitionend: cr("Transition", "TransitionEnd"),
  },
  Ma = {},
  Bs = {};
Qe &&
  ((Bs = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete An.animationend.animation,
    delete An.animationiteration.animation,
    delete An.animationstart.animation),
  "TransitionEvent" in window || delete An.transitionend.transition);
function la(e) {
  if (Ma[e]) return Ma[e];
  if (!An[e]) return e;
  var n = An[e],
    t;
  for (t in n) if (n.hasOwnProperty(t) && t in Bs) return (Ma[e] = n[t]);
  return e;
}
var Vs = la("animationend"),
  Ws = la("animationiteration"),
  Hs = la("animationstart"),
  Qs = la("transitionend"),
  qs = new Map(),
  oi =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function hn(e, n) {
  qs.set(e, n), Ln(n, [e]);
}
for (var La = 0; La < oi.length; La++) {
  var za = oi[La],
    Id = za.toLowerCase(),
    Ad = za[0].toUpperCase() + za.slice(1);
  hn(Id, "on" + Ad);
}
hn(Vs, "onAnimationEnd");
hn(Ws, "onAnimationIteration");
hn(Hs, "onAnimationStart");
hn("dblclick", "onDoubleClick");
hn("focusin", "onFocus");
hn("focusout", "onBlur");
hn(Qs, "onTransitionEnd");
Xn("onMouseEnter", ["mouseout", "mouseover"]);
Xn("onMouseLeave", ["mouseout", "mouseover"]);
Xn("onPointerEnter", ["pointerout", "pointerover"]);
Xn("onPointerLeave", ["pointerout", "pointerover"]);
Ln(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ln(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ln("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ln(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ln(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ln(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var kt =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Ud = new Set("cancel close invalid load scroll toggle".split(" ").concat(kt));
function ii(e, n, t) {
  var r = e.type || "unknown-event";
  (e.currentTarget = t), Ic(r, n, void 0, e), (e.currentTarget = null);
}
function Ks(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t],
      a = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (n)
        for (var o = r.length - 1; 0 <= o; o--) {
          var i = r[o],
            u = i.instance,
            d = i.currentTarget;
          if (((i = i.listener), u !== l && a.isPropagationStopped())) break e;
          ii(a, i, d), (l = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((i = r[o]),
            (u = i.instance),
            (d = i.currentTarget),
            (i = i.listener),
            u !== l && a.isPropagationStopped())
          )
            break e;
          ii(a, i, d), (l = u);
        }
    }
  }
  if (zr) throw ((e = il), (zr = !1), (il = null), e);
}
function O(e, n) {
  var t = n[yl];
  t === void 0 && (t = n[yl] = new Set());
  var r = e + "__bubble";
  t.has(r) || (Ys(n, e, 2, !1), t.add(r));
}
function Ra(e, n, t) {
  var r = 0;
  n && (r |= 4), Ys(t, e, r, n);
}
var dr = "_reactListening" + Math.random().toString(36).slice(2);
function Ut(e) {
  if (!e[dr]) {
    (e[dr] = !0),
      ts.forEach(function (t) {
        t !== "selectionchange" && (Ud.has(t) || Ra(t, !1, e), Ra(t, !0, e));
      });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[dr] || ((n[dr] = !0), Ra("selectionchange", !1, n));
  }
}
function Ys(e, n, t, r) {
  switch (Ls(n)) {
    case 1:
      var a = ed;
      break;
    case 4:
      a = nd;
      break;
    default:
      a = Gl;
  }
  (t = a.bind(null, n, t, e)),
    (a = void 0),
    !ol ||
      (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
      (a = !0),
    r
      ? a !== void 0
        ? e.addEventListener(n, t, { capture: !0, passive: a })
        : e.addEventListener(n, t, !0)
      : a !== void 0
      ? e.addEventListener(n, t, { passive: a })
      : e.addEventListener(n, t, !1);
}
function Oa(e, n, t, r, a) {
  var l = r;
  if (!(n & 1) && !(n & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var i = r.stateNode.containerInfo;
        if (i === a || (i.nodeType === 8 && i.parentNode === a)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === a || (u.nodeType === 8 && u.parentNode === a))
            )
              return;
            o = o.return;
          }
        for (; i !== null; ) {
          if (((o = kn(i)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = l = o;
            continue e;
          }
          i = i.parentNode;
        }
      }
      r = r.return;
    }
  vs(function () {
    var d = l,
      g = ql(t),
      h = [];
    e: {
      var m = qs.get(e);
      if (m !== void 0) {
        var b = Xl,
          x = e;
        switch (e) {
          case "keypress":
            if (Sr(t) === 0) break e;
          case "keydown":
          case "keyup":
            b = gd;
            break;
          case "focusin":
            (x = "focus"), (b = _a);
            break;
          case "focusout":
            (x = "blur"), (b = _a);
            break;
          case "beforeblur":
          case "afterblur":
            b = _a;
            break;
          case "click":
            if (t.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            b = Yo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            b = ad;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            b = bd;
            break;
          case Vs:
          case Ws:
          case Hs:
            b = id;
            break;
          case Qs:
            b = wd;
            break;
          case "scroll":
            b = td;
            break;
          case "wheel":
            b = Sd;
            break;
          case "copy":
          case "cut":
          case "paste":
            b = ud;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            b = Go;
        }
        var w = (n & 4) !== 0,
          F = !w && e === "scroll",
          f = w ? (m !== null ? m + "Capture" : null) : m;
        w = [];
        for (var c = d, p; c !== null; ) {
          p = c;
          var v = p.stateNode;
          if (
            (p.tag === 5 &&
              v !== null &&
              ((p = v),
              f !== null && ((v = Rt(c, f)), v != null && w.push($t(c, v, p)))),
            F)
          )
            break;
          c = c.return;
        }
        0 < w.length &&
          ((m = new b(m, x, null, t, g)), h.push({ event: m, listeners: w }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (b = e === "mouseout" || e === "pointerout"),
          m &&
            t !== al &&
            (x = t.relatedTarget || t.fromElement) &&
            (kn(x) || x[qe]))
        )
          break e;
        if (
          (b || m) &&
          ((m =
            g.window === g
              ? g
              : (m = g.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          b
            ? ((x = t.relatedTarget || t.toElement),
              (b = d),
              (x = x ? kn(x) : null),
              x !== null &&
                ((F = zn(x)), x !== F || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((b = null), (x = d)),
          b !== x)
        ) {
          if (
            ((w = Yo),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Go),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (F = b == null ? m : Un(b)),
            (p = x == null ? m : Un(x)),
            (m = new w(v, c + "leave", b, t, g)),
            (m.target = F),
            (m.relatedTarget = p),
            (v = null),
            kn(g) === d &&
              ((w = new w(f, c + "enter", x, t, g)),
              (w.target = p),
              (w.relatedTarget = F),
              (v = w)),
            (F = v),
            b && x)
          )
            n: {
              for (w = b, f = x, c = 0, p = w; p; p = Rn(p)) c++;
              for (p = 0, v = f; v; v = Rn(v)) p++;
              for (; 0 < c - p; ) (w = Rn(w)), c--;
              for (; 0 < p - c; ) (f = Rn(f)), p--;
              for (; c--; ) {
                if (w === f || (f !== null && w === f.alternate)) break n;
                (w = Rn(w)), (f = Rn(f));
              }
              w = null;
            }
          else w = null;
          b !== null && si(h, m, b, w, !1),
            x !== null && F !== null && si(h, F, x, w, !0);
        }
      }
      e: {
        if (
          ((m = d ? Un(d) : window),
          (b = m.nodeName && m.nodeName.toLowerCase()),
          b === "select" || (b === "input" && m.type === "file"))
        )
          var N = Td;
        else if (ei(m))
          if (Is) N = Rd;
          else {
            N = Ld;
            var j = Md;
          }
        else
          (b = m.nodeName) &&
            b.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (N = zd);
        if (N && (N = N(e, d))) {
          Fs(h, N, t, g);
          break e;
        }
        j && j(e, m, d),
          e === "focusout" &&
            (j = m._wrapperState) &&
            j.controlled &&
            m.type === "number" &&
            Xa(m, "number", m.value);
      }
      switch (((j = d ? Un(d) : window), e)) {
        case "focusin":
          (ei(j) || j.contentEditable === "true") &&
            ((In = j), (dl = d), (Et = null));
          break;
        case "focusout":
          Et = dl = In = null;
          break;
        case "mousedown":
          fl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (fl = !1), li(h, t, g);
          break;
        case "selectionchange":
          if (Fd) break;
        case "keydown":
        case "keyup":
          li(h, t, g);
      }
      var C;
      if (no)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        Fn
          ? Os(e, t) && (E = "onCompositionEnd")
          : e === "keydown" && t.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (Rs &&
          t.locale !== "ko" &&
          (Fn || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && Fn && (C = zs())
            : ((tn = g),
              (Zl = "value" in tn ? tn.value : tn.textContent),
              (Fn = !0))),
        (j = Ir(d, E)),
        0 < j.length &&
          ((E = new Jo(E, e, null, t, g)),
          h.push({ event: E, listeners: j }),
          C ? (E.data = C) : ((C = Ds(t)), C !== null && (E.data = C)))),
        (C = jd ? Cd(e, t) : Ed(e, t)) &&
          ((d = Ir(d, "onBeforeInput")),
          0 < d.length &&
            ((g = new Jo("onBeforeInput", "beforeinput", null, t, g)),
            h.push({ event: g, listeners: d }),
            (g.data = C)));
    }
    Ks(h, n);
  });
}
function $t(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Ir(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var a = e,
      l = a.stateNode;
    a.tag === 5 &&
      l !== null &&
      ((a = l),
      (l = Rt(e, t)),
      l != null && r.unshift($t(e, l, a)),
      (l = Rt(e, n)),
      l != null && r.push($t(e, l, a))),
      (e = e.return);
  }
  return r;
}
function Rn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function si(e, n, t, r, a) {
  for (var l = n._reactName, o = []; t !== null && t !== r; ) {
    var i = t,
      u = i.alternate,
      d = i.stateNode;
    if (u !== null && u === r) break;
    i.tag === 5 &&
      d !== null &&
      ((i = d),
      a
        ? ((u = Rt(t, l)), u != null && o.unshift($t(t, u, i)))
        : a || ((u = Rt(t, l)), u != null && o.push($t(t, u, i)))),
      (t = t.return);
  }
  o.length !== 0 && e.push({ event: n, listeners: o });
}
var $d = /\r\n?/g,
  Bd = /\u0000|\uFFFD/g;
function ui(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      $d,
      `
`
    )
    .replace(Bd, "");
}
function fr(e, n, t) {
  if (((n = ui(n)), ui(e) !== n && t)) throw Error(y(425));
}
function Ar() {}
var pl = null,
  ml = null;
function hl(e, n) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof n.children == "string" ||
    typeof n.children == "number" ||
    (typeof n.dangerouslySetInnerHTML == "object" &&
      n.dangerouslySetInnerHTML !== null &&
      n.dangerouslySetInnerHTML.__html != null)
  );
}
var gl = typeof setTimeout == "function" ? setTimeout : void 0,
  Vd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ci = typeof Promise == "function" ? Promise : void 0,
  Wd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ci < "u"
      ? function (e) {
          return ci.resolve(null).then(e).catch(Hd);
        }
      : gl;
function Hd(e) {
  setTimeout(function () {
    throw e;
  });
}
function Da(e, n) {
  var t = n,
    r = 0;
  do {
    var a = t.nextSibling;
    if ((e.removeChild(t), a && a.nodeType === 8))
      if (((t = a.data), t === "/$")) {
        if (r === 0) {
          e.removeChild(a), Ft(n);
          return;
        }
        r--;
      } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
    t = a;
  } while (t);
  Ft(n);
}
function sn(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
      if (n === "/$") return null;
    }
  }
  return e;
}
function di(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0) return e;
        n--;
      } else t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var st = Math.random().toString(36).slice(2),
  Ie = "__reactFiber$" + st,
  Bt = "__reactProps$" + st,
  qe = "__reactContainer$" + st,
  yl = "__reactEvents$" + st,
  Qd = "__reactListeners$" + st,
  qd = "__reactHandles$" + st;
function kn(e) {
  var n = e[Ie];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if ((n = t[qe] || t[Ie])) {
      if (
        ((t = n.alternate),
        n.child !== null || (t !== null && t.child !== null))
      )
        for (e = di(e); e !== null; ) {
          if ((t = e[Ie])) return t;
          e = di(e);
        }
      return n;
    }
    (e = t), (t = e.parentNode);
  }
  return null;
}
function Zt(e) {
  return (
    (e = e[Ie] || e[qe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Un(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function oa(e) {
  return e[Bt] || null;
}
var vl = [],
  $n = -1;
function gn(e) {
  return { current: e };
}
function D(e) {
  0 > $n || ((e.current = vl[$n]), (vl[$n] = null), $n--);
}
function R(e, n) {
  $n++, (vl[$n] = e.current), (e.current = n);
}
var mn = {},
  le = gn(mn),
  fe = gn(!1),
  En = mn;
function et(e, n) {
  var t = e.type.contextTypes;
  if (!t) return mn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
    return r.__reactInternalMemoizedMaskedChildContext;
  var a = {},
    l;
  for (l in t) a[l] = n[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = n),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    a
  );
}
function pe(e) {
  return (e = e.childContextTypes), e != null;
}
function Ur() {
  D(fe), D(le);
}
function fi(e, n, t) {
  if (le.current !== mn) throw Error(y(168));
  R(le, n), R(fe, t);
}
function Js(e, n, t) {
  var r = e.stateNode;
  if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
    return t;
  r = r.getChildContext();
  for (var a in r) if (!(a in n)) throw Error(y(108, Mc(e) || "Unknown", a));
  return $({}, t, r);
}
function $r(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mn),
    (En = le.current),
    R(le, e),
    R(fe, fe.current),
    !0
  );
}
function pi(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  t
    ? ((e = Js(e, n, En)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      D(fe),
      D(le),
      R(le, e))
    : D(fe),
    R(fe, t);
}
var Be = null,
  ia = !1,
  Fa = !1;
function Gs(e) {
  Be === null ? (Be = [e]) : Be.push(e);
}
function Kd(e) {
  (ia = !0), Gs(e);
}
function yn() {
  if (!Fa && Be !== null) {
    Fa = !0;
    var e = 0,
      n = z;
    try {
      var t = Be;
      for (z = 1; e < t.length; e++) {
        var r = t[e];
        do r = r(!0);
        while (r !== null);
      }
      (Be = null), (ia = !1);
    } catch (a) {
      throw (Be !== null && (Be = Be.slice(e + 1)), ks(Kl, yn), a);
    } finally {
      (z = n), (Fa = !1);
    }
  }
  return null;
}
var Bn = [],
  Vn = 0,
  Br = null,
  Vr = 0,
  we = [],
  ke = 0,
  _n = null,
  Ve = 1,
  We = "";
function xn(e, n) {
  (Bn[Vn++] = Vr), (Bn[Vn++] = Br), (Br = e), (Vr = n);
}
function Zs(e, n, t) {
  (we[ke++] = Ve), (we[ke++] = We), (we[ke++] = _n), (_n = e);
  var r = Ve;
  e = We;
  var a = 32 - ze(r) - 1;
  (r &= ~(1 << a)), (t += 1);
  var l = 32 - ze(n) + a;
  if (30 < l) {
    var o = a - (a % 5);
    (l = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (a -= o),
      (Ve = (1 << (32 - ze(n) + a)) | (t << a) | r),
      (We = l + e);
  } else (Ve = (1 << l) | (t << a) | r), (We = e);
}
function ro(e) {
  e.return !== null && (xn(e, 1), Zs(e, 1, 0));
}
function ao(e) {
  for (; e === Br; )
    (Br = Bn[--Vn]), (Bn[Vn] = null), (Vr = Bn[--Vn]), (Bn[Vn] = null);
  for (; e === _n; )
    (_n = we[--ke]),
      (we[ke] = null),
      (We = we[--ke]),
      (we[ke] = null),
      (Ve = we[--ke]),
      (we[ke] = null);
}
var ye = null,
  ge = null,
  I = !1,
  Le = null;
function Xs(e, n) {
  var t = Se(5, null, null, 0);
  (t.elementType = "DELETED"),
    (t.stateNode = n),
    (t.return = e),
    (n = e.deletions),
    n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
}
function mi(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return (
        (n =
          n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
            ? null
            : n),
        n !== null
          ? ((e.stateNode = n), (ye = e), (ge = sn(n.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
        n !== null ? ((e.stateNode = n), (ye = e), (ge = null), !0) : !1
      );
    case 13:
      return (
        (n = n.nodeType !== 8 ? null : n),
        n !== null
          ? ((t = _n !== null ? { id: Ve, overflow: We } : null),
            (e.memoizedState = {
              dehydrated: n,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = Se(18, null, null, 0)),
            (t.stateNode = n),
            (t.return = e),
            (e.child = t),
            (ye = e),
            (ge = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function bl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xl(e) {
  if (I) {
    var n = ge;
    if (n) {
      var t = n;
      if (!mi(e, n)) {
        if (bl(e)) throw Error(y(418));
        n = sn(t.nextSibling);
        var r = ye;
        n && mi(e, n)
          ? Xs(r, t)
          : ((e.flags = (e.flags & -4097) | 2), (I = !1), (ye = e));
      }
    } else {
      if (bl(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (I = !1), (ye = e);
    }
  }
}
function hi(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ye = e;
}
function pr(e) {
  if (e !== ye) return !1;
  if (!I) return hi(e), (I = !0), !1;
  var n;
  if (
    ((n = e.tag !== 3) &&
      !(n = e.tag !== 5) &&
      ((n = e.type),
      (n = n !== "head" && n !== "body" && !hl(e.type, e.memoizedProps))),
    n && (n = ge))
  ) {
    if (bl(e)) throw (eu(), Error(y(418)));
    for (; n; ) Xs(e, n), (n = sn(n.nextSibling));
  }
  if ((hi(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              ge = sn(e.nextSibling);
              break e;
            }
            n--;
          } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
        }
        e = e.nextSibling;
      }
      ge = null;
    }
  } else ge = ye ? sn(e.stateNode.nextSibling) : null;
  return !0;
}
function eu() {
  for (var e = ge; e; ) e = sn(e.nextSibling);
}
function nt() {
  (ge = ye = null), (I = !1);
}
function lo(e) {
  Le === null ? (Le = [e]) : Le.push(e);
}
var Yd = Je.ReactCurrentBatchConfig;
function gt(e, n, t) {
  if (
    ((e = t.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(y(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var a = r,
        l = "" + e;
      return n !== null &&
        n.ref !== null &&
        typeof n.ref == "function" &&
        n.ref._stringRef === l
        ? n.ref
        : ((n = function (o) {
            var i = a.refs;
            o === null ? delete i[l] : (i[l] = o);
          }),
          (n._stringRef = l),
          n);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!t._owner) throw Error(y(290, e));
  }
  return e;
}
function mr(e, n) {
  throw (
    ((e = Object.prototype.toString.call(n)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(n).join(", ") + "}"
          : e
      )
    ))
  );
}
function gi(e) {
  var n = e._init;
  return n(e._payload);
}
function nu(e) {
  function n(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [c]), (f.flags |= 16)) : p.push(c);
    }
  }
  function t(f, c) {
    if (!e) return null;
    for (; c !== null; ) n(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function a(f, c) {
    return (f = fn(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function l(f, c, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((f.flags |= 2), c) : p)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, c, p, v) {
    return c === null || c.tag !== 6
      ? ((c = Wa(p, f.mode, v)), (c.return = f), c)
      : ((c = a(c, p)), (c.return = f), c);
  }
  function u(f, c, p, v) {
    var N = p.type;
    return N === Dn
      ? g(f, c, p.props.children, v, p.key)
      : c !== null &&
        (c.elementType === N ||
          (typeof N == "object" &&
            N !== null &&
            N.$$typeof === Ze &&
            gi(N) === c.type))
      ? ((v = a(c, p.props)), (v.ref = gt(f, c, p)), (v.return = f), v)
      : ((v = Tr(p.type, p.key, p.props, null, f.mode, v)),
        (v.ref = gt(f, c, p)),
        (v.return = f),
        v);
  }
  function d(f, c, p, v) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = Ha(p, f.mode, v)), (c.return = f), c)
      : ((c = a(c, p.children || [])), (c.return = f), c);
  }
  function g(f, c, p, v, N) {
    return c === null || c.tag !== 7
      ? ((c = Cn(p, f.mode, v, N)), (c.return = f), c)
      : ((c = a(c, p)), (c.return = f), c);
  }
  function h(f, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Wa("" + c, f.mode, p)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case rr:
          return (
            (p = Tr(c.type, c.key, c.props, null, f.mode, p)),
            (p.ref = gt(f, null, c)),
            (p.return = f),
            p
          );
        case On:
          return (c = Ha(c, f.mode, p)), (c.return = f), c;
        case Ze:
          var v = c._init;
          return h(f, v(c._payload), p);
      }
      if (xt(c) || dt(c))
        return (c = Cn(c, f.mode, p, null)), (c.return = f), c;
      mr(f, c);
    }
    return null;
  }
  function m(f, c, p, v) {
    var N = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return N !== null ? null : i(f, c, "" + p, v);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case rr:
          return p.key === N ? u(f, c, p, v) : null;
        case On:
          return p.key === N ? d(f, c, p, v) : null;
        case Ze:
          return (N = p._init), m(f, c, N(p._payload), v);
      }
      if (xt(p) || dt(p)) return N !== null ? null : g(f, c, p, v, null);
      mr(f, p);
    }
    return null;
  }
  function b(f, c, p, v, N) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (f = f.get(p) || null), i(c, f, "" + v, N);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case rr:
          return (f = f.get(v.key === null ? p : v.key) || null), u(c, f, v, N);
        case On:
          return (f = f.get(v.key === null ? p : v.key) || null), d(c, f, v, N);
        case Ze:
          var j = v._init;
          return b(f, c, p, j(v._payload), N);
      }
      if (xt(v) || dt(v)) return (f = f.get(p) || null), g(c, f, v, N, null);
      mr(c, v);
    }
    return null;
  }
  function x(f, c, p, v) {
    for (
      var N = null, j = null, C = c, E = (c = 0), V = null;
      C !== null && E < p.length;
      E++
    ) {
      C.index > E ? ((V = C), (C = null)) : (V = C.sibling);
      var M = m(f, C, p[E], v);
      if (M === null) {
        C === null && (C = V);
        break;
      }
      e && C && M.alternate === null && n(f, C),
        (c = l(M, c, E)),
        j === null ? (N = M) : (j.sibling = M),
        (j = M),
        (C = V);
    }
    if (E === p.length) return t(f, C), I && xn(f, E), N;
    if (C === null) {
      for (; E < p.length; E++)
        (C = h(f, p[E], v)),
          C !== null &&
            ((c = l(C, c, E)), j === null ? (N = C) : (j.sibling = C), (j = C));
      return I && xn(f, E), N;
    }
    for (C = r(f, C); E < p.length; E++)
      (V = b(C, f, E, p[E], v)),
        V !== null &&
          (e && V.alternate !== null && C.delete(V.key === null ? E : V.key),
          (c = l(V, c, E)),
          j === null ? (N = V) : (j.sibling = V),
          (j = V));
    return (
      e &&
        C.forEach(function (_e) {
          return n(f, _e);
        }),
      I && xn(f, E),
      N
    );
  }
  function w(f, c, p, v) {
    var N = dt(p);
    if (typeof N != "function") throw Error(y(150));
    if (((p = N.call(p)), p == null)) throw Error(y(151));
    for (
      var j = (N = null), C = c, E = (c = 0), V = null, M = p.next();
      C !== null && !M.done;
      E++, M = p.next()
    ) {
      C.index > E ? ((V = C), (C = null)) : (V = C.sibling);
      var _e = m(f, C, M.value, v);
      if (_e === null) {
        C === null && (C = V);
        break;
      }
      e && C && _e.alternate === null && n(f, C),
        (c = l(_e, c, E)),
        j === null ? (N = _e) : (j.sibling = _e),
        (j = _e),
        (C = V);
    }
    if (M.done) return t(f, C), I && xn(f, E), N;
    if (C === null) {
      for (; !M.done; E++, M = p.next())
        (M = h(f, M.value, v)),
          M !== null &&
            ((c = l(M, c, E)), j === null ? (N = M) : (j.sibling = M), (j = M));
      return I && xn(f, E), N;
    }
    for (C = r(f, C); !M.done; E++, M = p.next())
      (M = b(C, f, E, M.value, v)),
        M !== null &&
          (e && M.alternate !== null && C.delete(M.key === null ? E : M.key),
          (c = l(M, c, E)),
          j === null ? (N = M) : (j.sibling = M),
          (j = M));
    return (
      e &&
        C.forEach(function (ut) {
          return n(f, ut);
        }),
      I && xn(f, E),
      N
    );
  }
  function F(f, c, p, v) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Dn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case rr:
          e: {
            for (var N = p.key, j = c; j !== null; ) {
              if (j.key === N) {
                if (((N = p.type), N === Dn)) {
                  if (j.tag === 7) {
                    t(f, j.sibling),
                      (c = a(j, p.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  j.elementType === N ||
                  (typeof N == "object" &&
                    N !== null &&
                    N.$$typeof === Ze &&
                    gi(N) === j.type)
                ) {
                  t(f, j.sibling),
                    (c = a(j, p.props)),
                    (c.ref = gt(f, j, p)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                t(f, j);
                break;
              } else n(f, j);
              j = j.sibling;
            }
            p.type === Dn
              ? ((c = Cn(p.props.children, f.mode, v, p.key)),
                (c.return = f),
                (f = c))
              : ((v = Tr(p.type, p.key, p.props, null, f.mode, v)),
                (v.ref = gt(f, c, p)),
                (v.return = f),
                (f = v));
          }
          return o(f);
        case On:
          e: {
            for (j = p.key; c !== null; ) {
              if (c.key === j)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  t(f, c.sibling),
                    (c = a(c, p.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  t(f, c);
                  break;
                }
              else n(f, c);
              c = c.sibling;
            }
            (c = Ha(p, f.mode, v)), (c.return = f), (f = c);
          }
          return o(f);
        case Ze:
          return (j = p._init), F(f, c, j(p._payload), v);
      }
      if (xt(p)) return x(f, c, p, v);
      if (dt(p)) return w(f, c, p, v);
      mr(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (t(f, c.sibling), (c = a(c, p)), (c.return = f), (f = c))
          : (t(f, c), (c = Wa(p, f.mode, v)), (c.return = f), (f = c)),
        o(f))
      : t(f, c);
  }
  return F;
}
var tt = nu(!0),
  tu = nu(!1),
  Wr = gn(null),
  Hr = null,
  Wn = null,
  oo = null;
function io() {
  oo = Wn = Hr = null;
}
function so(e) {
  var n = Wr.current;
  D(Wr), (e._currentValue = n);
}
function wl(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & n) !== n
        ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
        : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
      e === t)
    )
      break;
    e = e.return;
  }
}
function Gn(e, n) {
  (Hr = e),
    (oo = Wn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & n && (de = !0), (e.firstContext = null));
}
function je(e) {
  var n = e._currentValue;
  if (oo !== e)
    if (((e = { context: e, memoizedValue: n, next: null }), Wn === null)) {
      if (Hr === null) throw Error(y(308));
      (Wn = e), (Hr.dependencies = { lanes: 0, firstContext: e });
    } else Wn = Wn.next = e;
  return n;
}
var Sn = null;
function uo(e) {
  Sn === null ? (Sn = [e]) : Sn.push(e);
}
function ru(e, n, t, r) {
  var a = n.interleaved;
  return (
    a === null ? ((t.next = t), uo(n)) : ((t.next = a.next), (a.next = t)),
    (n.interleaved = t),
    Ke(e, r)
  );
}
function Ke(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    (e.childLanes |= n),
      (t = e.alternate),
      t !== null && (t.childLanes |= n),
      (t = e),
      (e = e.return);
  return t.tag === 3 ? t.stateNode : null;
}
var Xe = !1;
function co(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function au(e, n) {
  (e = e.updateQueue),
    n.updateQueue === e &&
      (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function He(e, n) {
  return {
    eventTime: e,
    lane: n,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function un(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), L & 2)) {
    var a = r.pending;
    return (
      a === null ? (n.next = n) : ((n.next = a.next), (a.next = n)),
      (r.pending = n),
      Ke(e, t)
    );
  }
  return (
    (a = r.interleaved),
    a === null ? ((n.next = n), uo(r)) : ((n.next = a.next), (a.next = n)),
    (r.interleaved = n),
    Ke(e, t)
  );
}
function Nr(e, n, t) {
  if (
    ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
  ) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), Yl(e, t);
  }
}
function yi(e, n) {
  var t = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var a = null,
      l = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var o = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        l === null ? (a = l = o) : (l = l.next = o), (t = t.next);
      } while (t !== null);
      l === null ? (a = l = n) : (l = l.next = n);
    } else a = l = n;
    (t = {
      baseState: r.baseState,
      firstBaseUpdate: a,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = t);
    return;
  }
  (e = t.lastBaseUpdate),
    e === null ? (t.firstBaseUpdate = n) : (e.next = n),
    (t.lastBaseUpdate = n);
}
function Qr(e, n, t, r) {
  var a = e.updateQueue;
  Xe = !1;
  var l = a.firstBaseUpdate,
    o = a.lastBaseUpdate,
    i = a.shared.pending;
  if (i !== null) {
    a.shared.pending = null;
    var u = i,
      d = u.next;
    (u.next = null), o === null ? (l = d) : (o.next = d), (o = u);
    var g = e.alternate;
    g !== null &&
      ((g = g.updateQueue),
      (i = g.lastBaseUpdate),
      i !== o &&
        (i === null ? (g.firstBaseUpdate = d) : (i.next = d),
        (g.lastBaseUpdate = u)));
  }
  if (l !== null) {
    var h = a.baseState;
    (o = 0), (g = d = u = null), (i = l);
    do {
      var m = i.lane,
        b = i.eventTime;
      if ((r & m) === m) {
        g !== null &&
          (g = g.next =
            {
              eventTime: b,
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            });
        e: {
          var x = e,
            w = i;
          switch (((m = n), (b = t), w.tag)) {
            case 1:
              if (((x = w.payload), typeof x == "function")) {
                h = x.call(b, h, m);
                break e;
              }
              h = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = w.payload),
                (m = typeof x == "function" ? x.call(b, h, m) : x),
                m == null)
              )
                break e;
              h = $({}, h, m);
              break e;
            case 2:
              Xe = !0;
          }
        }
        i.callback !== null &&
          i.lane !== 0 &&
          ((e.flags |= 64),
          (m = a.effects),
          m === null ? (a.effects = [i]) : m.push(i));
      } else
        (b = {
          eventTime: b,
          lane: m,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        }),
          g === null ? ((d = g = b), (u = h)) : (g = g.next = b),
          (o |= m);
      if (((i = i.next), i === null)) {
        if (((i = a.shared.pending), i === null)) break;
        (m = i),
          (i = m.next),
          (m.next = null),
          (a.lastBaseUpdate = m),
          (a.shared.pending = null);
      }
    } while (!0);
    if (
      (g === null && (u = h),
      (a.baseState = u),
      (a.firstBaseUpdate = d),
      (a.lastBaseUpdate = g),
      (n = a.shared.interleaved),
      n !== null)
    ) {
      a = n;
      do (o |= a.lane), (a = a.next);
      while (a !== n);
    } else l === null && (a.shared.lanes = 0);
    (Tn |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function vi(e, n, t) {
  if (((e = n.effects), (n.effects = null), e !== null))
    for (n = 0; n < e.length; n++) {
      var r = e[n],
        a = r.callback;
      if (a !== null) {
        if (((r.callback = null), (r = t), typeof a != "function"))
          throw Error(y(191, a));
        a.call(r);
      }
    }
}
var Xt = {},
  Ue = gn(Xt),
  Vt = gn(Xt),
  Wt = gn(Xt);
function Nn(e) {
  if (e === Xt) throw Error(y(174));
  return e;
}
function fo(e, n) {
  switch ((R(Wt, n), R(Vt, e), R(Ue, Xt), (e = n.nodeType), e)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : nl(null, "");
      break;
    default:
      (e = e === 8 ? n.parentNode : n),
        (n = e.namespaceURI || null),
        (e = e.tagName),
        (n = nl(n, e));
  }
  D(Ue), R(Ue, n);
}
function rt() {
  D(Ue), D(Vt), D(Wt);
}
function lu(e) {
  Nn(Wt.current);
  var n = Nn(Ue.current),
    t = nl(n, e.type);
  n !== t && (R(Vt, e), R(Ue, t));
}
function po(e) {
  Vt.current === e && (D(Ue), D(Vt));
}
var A = gn(0);
function qr(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
      )
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
  return null;
}
var Ia = [];
function mo() {
  for (var e = 0; e < Ia.length; e++)
    Ia[e]._workInProgressVersionPrimary = null;
  Ia.length = 0;
}
var jr = Je.ReactCurrentDispatcher,
  Aa = Je.ReactCurrentBatchConfig,
  Pn = 0,
  U = null,
  q = null,
  J = null,
  Kr = !1,
  _t = !1,
  Ht = 0,
  Jd = 0;
function ne() {
  throw Error(y(321));
}
function ho(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!Oe(e[t], n[t])) return !1;
  return !0;
}
function go(e, n, t, r, a, l) {
  if (
    ((Pn = l),
    (U = n),
    (n.memoizedState = null),
    (n.updateQueue = null),
    (n.lanes = 0),
    (jr.current = e === null || e.memoizedState === null ? ef : nf),
    (e = t(r, a)),
    _t)
  ) {
    l = 0;
    do {
      if (((_t = !1), (Ht = 0), 25 <= l)) throw Error(y(301));
      (l += 1),
        (J = q = null),
        (n.updateQueue = null),
        (jr.current = tf),
        (e = t(r, a));
    } while (_t);
  }
  if (
    ((jr.current = Yr),
    (n = q !== null && q.next !== null),
    (Pn = 0),
    (J = q = U = null),
    (Kr = !1),
    n)
  )
    throw Error(y(300));
  return e;
}
function yo() {
  var e = Ht !== 0;
  return (Ht = 0), e;
}
function Fe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return J === null ? (U.memoizedState = J = e) : (J = J.next = e), J;
}
function Ce() {
  if (q === null) {
    var e = U.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = q.next;
  var n = J === null ? U.memoizedState : J.next;
  if (n !== null) (J = n), (q = e);
  else {
    if (e === null) throw Error(y(310));
    (q = e),
      (e = {
        memoizedState: q.memoizedState,
        baseState: q.baseState,
        baseQueue: q.baseQueue,
        queue: q.queue,
        next: null,
      }),
      J === null ? (U.memoizedState = J = e) : (J = J.next = e);
  }
  return J;
}
function Qt(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Ua(e) {
  var n = Ce(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = q,
    a = r.baseQueue,
    l = t.pending;
  if (l !== null) {
    if (a !== null) {
      var o = a.next;
      (a.next = l.next), (l.next = o);
    }
    (r.baseQueue = a = l), (t.pending = null);
  }
  if (a !== null) {
    (l = a.next), (r = r.baseState);
    var i = (o = null),
      u = null,
      d = l;
    do {
      var g = d.lane;
      if ((Pn & g) === g)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (r = d.hasEagerState ? d.eagerState : e(r, d.action));
      else {
        var h = {
          lane: g,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        u === null ? ((i = u = h), (o = r)) : (u = u.next = h),
          (U.lanes |= g),
          (Tn |= g);
      }
      d = d.next;
    } while (d !== null && d !== l);
    u === null ? (o = r) : (u.next = i),
      Oe(r, n.memoizedState) || (de = !0),
      (n.memoizedState = r),
      (n.baseState = o),
      (n.baseQueue = u),
      (t.lastRenderedState = r);
  }
  if (((e = t.interleaved), e !== null)) {
    a = e;
    do (l = a.lane), (U.lanes |= l), (Tn |= l), (a = a.next);
    while (a !== e);
  } else a === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function $a(e) {
  var n = Ce(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch,
    a = t.pending,
    l = n.memoizedState;
  if (a !== null) {
    t.pending = null;
    var o = (a = a.next);
    do (l = e(l, o.action)), (o = o.next);
    while (o !== a);
    Oe(l, n.memoizedState) || (de = !0),
      (n.memoizedState = l),
      n.baseQueue === null && (n.baseState = l),
      (t.lastRenderedState = l);
  }
  return [l, r];
}
function ou() {}
function iu(e, n) {
  var t = U,
    r = Ce(),
    a = n(),
    l = !Oe(r.memoizedState, a);
  if (
    (l && ((r.memoizedState = a), (de = !0)),
    (r = r.queue),
    vo(cu.bind(null, t, r, e), [e]),
    r.getSnapshot !== n || l || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      qt(9, uu.bind(null, t, r, a, n), void 0, null),
      G === null)
    )
      throw Error(y(349));
    Pn & 30 || su(t, n, a);
  }
  return a;
}
function su(e, n, t) {
  (e.flags |= 16384),
    (e = { getSnapshot: n, value: t }),
    (n = U.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (U.updateQueue = n),
        (n.stores = [e]))
      : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
}
function uu(e, n, t, r) {
  (n.value = t), (n.getSnapshot = r), du(n) && fu(e);
}
function cu(e, n, t) {
  return t(function () {
    du(n) && fu(e);
  });
}
function du(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Oe(e, t);
  } catch {
    return !0;
  }
}
function fu(e) {
  var n = Ke(e, 1);
  n !== null && Re(n, e, 1, -1);
}
function bi(e) {
  var n = Fe();
  return (
    typeof e == "function" && (e = e()),
    (n.memoizedState = n.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qt,
      lastRenderedState: e,
    }),
    (n.queue = e),
    (e = e.dispatch = Xd.bind(null, U, e)),
    [n.memoizedState, e]
  );
}
function qt(e, n, t, r) {
  return (
    (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
    (n = U.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (U.updateQueue = n),
        (n.lastEffect = e.next = e))
      : ((t = n.lastEffect),
        t === null
          ? (n.lastEffect = e.next = e)
          : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
    e
  );
}
function pu() {
  return Ce().memoizedState;
}
function Cr(e, n, t, r) {
  var a = Fe();
  (U.flags |= e),
    (a.memoizedState = qt(1 | n, t, void 0, r === void 0 ? null : r));
}
function sa(e, n, t, r) {
  var a = Ce();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (q !== null) {
    var o = q.memoizedState;
    if (((l = o.destroy), r !== null && ho(r, o.deps))) {
      a.memoizedState = qt(n, t, l, r);
      return;
    }
  }
  (U.flags |= e), (a.memoizedState = qt(1 | n, t, l, r));
}
function xi(e, n) {
  return Cr(8390656, 8, e, n);
}
function vo(e, n) {
  return sa(2048, 8, e, n);
}
function mu(e, n) {
  return sa(4, 2, e, n);
}
function hu(e, n) {
  return sa(4, 4, e, n);
}
function gu(e, n) {
  if (typeof n == "function")
    return (
      (e = e()),
      n(e),
      function () {
        n(null);
      }
    );
  if (n != null)
    return (
      (e = e()),
      (n.current = e),
      function () {
        n.current = null;
      }
    );
}
function yu(e, n, t) {
  return (
    (t = t != null ? t.concat([e]) : null), sa(4, 4, gu.bind(null, n, e), t)
  );
}
function bo() {}
function vu(e, n) {
  var t = Ce();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && ho(n, r[1])
    ? r[0]
    : ((t.memoizedState = [e, n]), e);
}
function bu(e, n) {
  var t = Ce();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && ho(n, r[1])
    ? r[0]
    : ((e = e()), (t.memoizedState = [e, n]), e);
}
function xu(e, n, t) {
  return Pn & 21
    ? (Oe(t, n) || ((t = js()), (U.lanes |= t), (Tn |= t), (e.baseState = !0)),
      n)
    : (e.baseState && ((e.baseState = !1), (de = !0)), (e.memoizedState = t));
}
function Gd(e, n) {
  var t = z;
  (z = t !== 0 && 4 > t ? t : 4), e(!0);
  var r = Aa.transition;
  Aa.transition = {};
  try {
    e(!1), n();
  } finally {
    (z = t), (Aa.transition = r);
  }
}
function wu() {
  return Ce().memoizedState;
}
function Zd(e, n, t) {
  var r = dn(e);
  if (
    ((t = {
      lane: r,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ku(e))
  )
    Su(n, t);
  else if (((t = ru(e, n, t, r)), t !== null)) {
    var a = ie();
    Re(t, e, r, a), Nu(t, n, r);
  }
}
function Xd(e, n, t) {
  var r = dn(e),
    a = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (ku(e)) Su(n, a);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = n.lastRenderedReducer), l !== null)
    )
      try {
        var o = n.lastRenderedState,
          i = l(o, t);
        if (((a.hasEagerState = !0), (a.eagerState = i), Oe(i, o))) {
          var u = n.interleaved;
          u === null
            ? ((a.next = a), uo(n))
            : ((a.next = u.next), (u.next = a)),
            (n.interleaved = a);
          return;
        }
      } catch {
      } finally {
      }
    (t = ru(e, n, a, r)),
      t !== null && ((a = ie()), Re(t, e, r, a), Nu(t, n, r));
  }
}
function ku(e) {
  var n = e.alternate;
  return e === U || (n !== null && n === U);
}
function Su(e, n) {
  _t = Kr = !0;
  var t = e.pending;
  t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
    (e.pending = n);
}
function Nu(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), Yl(e, t);
  }
}
var Yr = {
    readContext: je,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1,
  },
  ef = {
    readContext: je,
    useCallback: function (e, n) {
      return (Fe().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: je,
    useEffect: xi,
    useImperativeHandle: function (e, n, t) {
      return (
        (t = t != null ? t.concat([e]) : null),
        Cr(4194308, 4, gu.bind(null, n, e), t)
      );
    },
    useLayoutEffect: function (e, n) {
      return Cr(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return Cr(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var t = Fe();
      return (
        (n = n === void 0 ? null : n), (e = e()), (t.memoizedState = [e, n]), e
      );
    },
    useReducer: function (e, n, t) {
      var r = Fe();
      return (
        (n = t !== void 0 ? t(n) : n),
        (r.memoizedState = r.baseState = n),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n,
        }),
        (r.queue = e),
        (e = e.dispatch = Zd.bind(null, U, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = Fe();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: bi,
    useDebugValue: bo,
    useDeferredValue: function (e) {
      return (Fe().memoizedState = e);
    },
    useTransition: function () {
      var e = bi(!1),
        n = e[0];
      return (e = Gd.bind(null, e[1])), (Fe().memoizedState = e), [n, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, t) {
      var r = U,
        a = Fe();
      if (I) {
        if (t === void 0) throw Error(y(407));
        t = t();
      } else {
        if (((t = n()), G === null)) throw Error(y(349));
        Pn & 30 || su(r, n, t);
      }
      a.memoizedState = t;
      var l = { value: t, getSnapshot: n };
      return (
        (a.queue = l),
        xi(cu.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        qt(9, uu.bind(null, r, l, t, n), void 0, null),
        t
      );
    },
    useId: function () {
      var e = Fe(),
        n = G.identifierPrefix;
      if (I) {
        var t = We,
          r = Ve;
        (t = (r & ~(1 << (32 - ze(r) - 1))).toString(32) + t),
          (n = ":" + n + "R" + t),
          (t = Ht++),
          0 < t && (n += "H" + t.toString(32)),
          (n += ":");
      } else (t = Jd++), (n = ":" + n + "r" + t.toString(32) + ":");
      return (e.memoizedState = n);
    },
    unstable_isNewReconciler: !1,
  },
  nf = {
    readContext: je,
    useCallback: vu,
    useContext: je,
    useEffect: vo,
    useImperativeHandle: yu,
    useInsertionEffect: mu,
    useLayoutEffect: hu,
    useMemo: bu,
    useReducer: Ua,
    useRef: pu,
    useState: function () {
      return Ua(Qt);
    },
    useDebugValue: bo,
    useDeferredValue: function (e) {
      var n = Ce();
      return xu(n, q.memoizedState, e);
    },
    useTransition: function () {
      var e = Ua(Qt)[0],
        n = Ce().memoizedState;
      return [e, n];
    },
    useMutableSource: ou,
    useSyncExternalStore: iu,
    useId: wu,
    unstable_isNewReconciler: !1,
  },
  tf = {
    readContext: je,
    useCallback: vu,
    useContext: je,
    useEffect: vo,
    useImperativeHandle: yu,
    useInsertionEffect: mu,
    useLayoutEffect: hu,
    useMemo: bu,
    useReducer: $a,
    useRef: pu,
    useState: function () {
      return $a(Qt);
    },
    useDebugValue: bo,
    useDeferredValue: function (e) {
      var n = Ce();
      return q === null ? (n.memoizedState = e) : xu(n, q.memoizedState, e);
    },
    useTransition: function () {
      var e = $a(Qt)[0],
        n = Ce().memoizedState;
      return [e, n];
    },
    useMutableSource: ou,
    useSyncExternalStore: iu,
    useId: wu,
    unstable_isNewReconciler: !1,
  };
function Te(e, n) {
  if (e && e.defaultProps) {
    (n = $({}, n)), (e = e.defaultProps);
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
function kl(e, n, t, r) {
  (n = e.memoizedState),
    (t = t(r, n)),
    (t = t == null ? n : $({}, n, t)),
    (e.memoizedState = t),
    e.lanes === 0 && (e.updateQueue.baseState = t);
}
var ua = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? zn(e) === e : !1;
  },
  enqueueSetState: function (e, n, t) {
    e = e._reactInternals;
    var r = ie(),
      a = dn(e),
      l = He(r, a);
    (l.payload = n),
      t != null && (l.callback = t),
      (n = un(e, l, a)),
      n !== null && (Re(n, e, a, r), Nr(n, e, a));
  },
  enqueueReplaceState: function (e, n, t) {
    e = e._reactInternals;
    var r = ie(),
      a = dn(e),
      l = He(r, a);
    (l.tag = 1),
      (l.payload = n),
      t != null && (l.callback = t),
      (n = un(e, l, a)),
      n !== null && (Re(n, e, a, r), Nr(n, e, a));
  },
  enqueueForceUpdate: function (e, n) {
    e = e._reactInternals;
    var t = ie(),
      r = dn(e),
      a = He(t, r);
    (a.tag = 2),
      n != null && (a.callback = n),
      (n = un(e, a, r)),
      n !== null && (Re(n, e, r, t), Nr(n, e, r));
  },
};
function wi(e, n, t, r, a, l, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, o)
      : n.prototype && n.prototype.isPureReactComponent
      ? !At(t, r) || !At(a, l)
      : !0
  );
}
function ju(e, n, t) {
  var r = !1,
    a = mn,
    l = n.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = je(l))
      : ((a = pe(n) ? En : le.current),
        (r = n.contextTypes),
        (l = (r = r != null) ? et(e, a) : mn)),
    (n = new n(t, l)),
    (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = ua),
    (e.stateNode = n),
    (n._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = a),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    n
  );
}
function ki(e, n, t, r) {
  (e = n.state),
    typeof n.componentWillReceiveProps == "function" &&
      n.componentWillReceiveProps(t, r),
    typeof n.UNSAFE_componentWillReceiveProps == "function" &&
      n.UNSAFE_componentWillReceiveProps(t, r),
    n.state !== e && ua.enqueueReplaceState(n, n.state, null);
}
function Sl(e, n, t, r) {
  var a = e.stateNode;
  (a.props = t), (a.state = e.memoizedState), (a.refs = {}), co(e);
  var l = n.contextType;
  typeof l == "object" && l !== null
    ? (a.context = je(l))
    : ((l = pe(n) ? En : le.current), (a.context = et(e, l))),
    (a.state = e.memoizedState),
    (l = n.getDerivedStateFromProps),
    typeof l == "function" && (kl(e, n, l, t), (a.state = e.memoizedState)),
    typeof n.getDerivedStateFromProps == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function" ||
      (typeof a.UNSAFE_componentWillMount != "function" &&
        typeof a.componentWillMount != "function") ||
      ((n = a.state),
      typeof a.componentWillMount == "function" && a.componentWillMount(),
      typeof a.UNSAFE_componentWillMount == "function" &&
        a.UNSAFE_componentWillMount(),
      n !== a.state && ua.enqueueReplaceState(a, a.state, null),
      Qr(e, t, a, r),
      (a.state = e.memoizedState)),
    typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function at(e, n) {
  try {
    var t = "",
      r = n;
    do (t += Tc(r)), (r = r.return);
    while (r);
    var a = t;
  } catch (l) {
    a =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: n, stack: a, digest: null };
}
function Ba(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function Nl(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var rf = typeof WeakMap == "function" ? WeakMap : Map;
function Cu(e, n, t) {
  (t = He(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var r = n.value;
  return (
    (t.callback = function () {
      Gr || ((Gr = !0), (zl = r)), Nl(e, n);
    }),
    t
  );
}
function Eu(e, n, t) {
  (t = He(-1, t)), (t.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var a = n.value;
    (t.payload = function () {
      return r(a);
    }),
      (t.callback = function () {
        Nl(e, n);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (t.callback = function () {
        Nl(e, n),
          typeof r != "function" &&
            (cn === null ? (cn = new Set([this])) : cn.add(this));
        var o = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    t
  );
}
function Si(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new rf();
    var a = new Set();
    r.set(n, a);
  } else (a = r.get(n)), a === void 0 && ((a = new Set()), r.set(n, a));
  a.has(t) || (a.add(t), (e = vf.bind(null, e, n, t)), n.then(e, e));
}
function Ni(e) {
  do {
    var n;
    if (
      ((n = e.tag === 13) &&
        ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)),
      n)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ji(e, n, t, r, a) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = a), e)
    : (e === n
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((n = He(-1, 1)), (n.tag = 2), un(t, n, 1))),
          (t.lanes |= 1)),
      e);
}
var af = Je.ReactCurrentOwner,
  de = !1;
function oe(e, n, t, r) {
  n.child = e === null ? tu(n, null, t, r) : tt(n, e.child, t, r);
}
function Ci(e, n, t, r, a) {
  t = t.render;
  var l = n.ref;
  return (
    Gn(n, a),
    (r = go(e, n, t, r, l, a)),
    (t = yo()),
    e !== null && !de
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~a),
        Ye(e, n, a))
      : (I && t && ro(n), (n.flags |= 1), oe(e, n, r, a), n.child)
  );
}
function Ei(e, n, t, r, a) {
  if (e === null) {
    var l = t.type;
    return typeof l == "function" &&
      !Eo(l) &&
      l.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((n.tag = 15), (n.type = l), _u(e, n, l, r, a))
      : ((e = Tr(t.type, null, r, n, n.mode, a)),
        (e.ref = n.ref),
        (e.return = n),
        (n.child = e));
  }
  if (((l = e.child), !(e.lanes & a))) {
    var o = l.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : At), t(o, r) && e.ref === n.ref)
    )
      return Ye(e, n, a);
  }
  return (
    (n.flags |= 1),
    (e = fn(l, r)),
    (e.ref = n.ref),
    (e.return = n),
    (n.child = e)
  );
}
function _u(e, n, t, r, a) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (At(l, r) && e.ref === n.ref)
      if (((de = !1), (n.pendingProps = r = l), (e.lanes & a) !== 0))
        e.flags & 131072 && (de = !0);
      else return (n.lanes = e.lanes), Ye(e, n, a);
  }
  return jl(e, n, t, r, a);
}
function Pu(e, n, t) {
  var r = n.pendingProps,
    a = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(n.mode & 1))
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        R(Qn, he),
        (he |= t);
    else {
      if (!(t & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | t : t),
          (n.lanes = n.childLanes = 1073741824),
          (n.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (n.updateQueue = null),
          R(Qn, he),
          (he |= e),
          null
        );
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : t),
        R(Qn, he),
        (he |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | t), (n.memoizedState = null)) : (r = t),
      R(Qn, he),
      (he |= r);
  return oe(e, n, a, t), n.child;
}
function Tu(e, n) {
  var t = n.ref;
  ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
    ((n.flags |= 512), (n.flags |= 2097152));
}
function jl(e, n, t, r, a) {
  var l = pe(t) ? En : le.current;
  return (
    (l = et(n, l)),
    Gn(n, a),
    (t = go(e, n, t, r, l, a)),
    (r = yo()),
    e !== null && !de
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~a),
        Ye(e, n, a))
      : (I && r && ro(n), (n.flags |= 1), oe(e, n, t, a), n.child)
  );
}
function _i(e, n, t, r, a) {
  if (pe(t)) {
    var l = !0;
    $r(n);
  } else l = !1;
  if ((Gn(n, a), n.stateNode === null))
    Er(e, n), ju(n, t, r), Sl(n, t, r, a), (r = !0);
  else if (e === null) {
    var o = n.stateNode,
      i = n.memoizedProps;
    o.props = i;
    var u = o.context,
      d = t.contextType;
    typeof d == "object" && d !== null
      ? (d = je(d))
      : ((d = pe(t) ? En : le.current), (d = et(n, d)));
    var g = t.getDerivedStateFromProps,
      h =
        typeof g == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((i !== r || u !== d) && ki(n, o, r, d)),
      (Xe = !1);
    var m = n.memoizedState;
    (o.state = m),
      Qr(n, r, o, a),
      (u = n.memoizedState),
      i !== r || m !== u || fe.current || Xe
        ? (typeof g == "function" && (kl(n, t, g, r), (u = n.memoizedState)),
          (i = Xe || wi(n, t, i, r, m, u, d))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (n.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (n.flags |= 4194308),
              (n.memoizedProps = r),
              (n.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = d),
          (r = i))
        : (typeof o.componentDidMount == "function" && (n.flags |= 4194308),
          (r = !1));
  } else {
    (o = n.stateNode),
      au(e, n),
      (i = n.memoizedProps),
      (d = n.type === n.elementType ? i : Te(n.type, i)),
      (o.props = d),
      (h = n.pendingProps),
      (m = o.context),
      (u = t.contextType),
      typeof u == "object" && u !== null
        ? (u = je(u))
        : ((u = pe(t) ? En : le.current), (u = et(n, u)));
    var b = t.getDerivedStateFromProps;
    (g =
      typeof b == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((i !== h || m !== u) && ki(n, o, r, u)),
      (Xe = !1),
      (m = n.memoizedState),
      (o.state = m),
      Qr(n, r, o, a);
    var x = n.memoizedState;
    i !== h || m !== x || fe.current || Xe
      ? (typeof b == "function" && (kl(n, t, b, r), (x = n.memoizedState)),
        (d = Xe || wi(n, t, d, r, m, x, u) || !1)
          ? (g ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, x, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, x, u)),
            typeof o.componentDidUpdate == "function" && (n.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (i === e.memoizedProps && m === e.memoizedState) ||
              (n.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (i === e.memoizedProps && m === e.memoizedState) ||
              (n.flags |= 1024),
            (n.memoizedProps = r),
            (n.memoizedState = x)),
        (o.props = r),
        (o.state = x),
        (o.context = u),
        (r = d))
      : (typeof o.componentDidUpdate != "function" ||
          (i === e.memoizedProps && m === e.memoizedState) ||
          (n.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (i === e.memoizedProps && m === e.memoizedState) ||
          (n.flags |= 1024),
        (r = !1));
  }
  return Cl(e, n, t, r, l, a);
}
function Cl(e, n, t, r, a, l) {
  Tu(e, n);
  var o = (n.flags & 128) !== 0;
  if (!r && !o) return a && pi(n, t, !1), Ye(e, n, l);
  (r = n.stateNode), (af.current = n);
  var i =
    o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (n.flags |= 1),
    e !== null && o
      ? ((n.child = tt(n, e.child, null, l)), (n.child = tt(n, null, i, l)))
      : oe(e, n, i, l),
    (n.memoizedState = r.state),
    a && pi(n, t, !0),
    n.child
  );
}
function Mu(e) {
  var n = e.stateNode;
  n.pendingContext
    ? fi(e, n.pendingContext, n.pendingContext !== n.context)
    : n.context && fi(e, n.context, !1),
    fo(e, n.containerInfo);
}
function Pi(e, n, t, r, a) {
  return nt(), lo(a), (n.flags |= 256), oe(e, n, t, r), n.child;
}
var El = { dehydrated: null, treeContext: null, retryLane: 0 };
function _l(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Lu(e, n, t) {
  var r = n.pendingProps,
    a = A.current,
    l = !1,
    o = (n.flags & 128) !== 0,
    i;
  if (
    ((i = o) ||
      (i = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
    i
      ? ((l = !0), (n.flags &= -129))
      : (e === null || e.memoizedState !== null) && (a |= 1),
    R(A, a & 1),
    e === null)
  )
    return (
      xl(n),
      (e = n.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (n.mode & 1
            ? e.data === "$!"
              ? (n.lanes = 8)
              : (n.lanes = 1073741824)
            : (n.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          l
            ? ((r = n.mode),
              (l = n.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = o))
                : (l = fa(o, r, 0, null)),
              (e = Cn(e, r, t, null)),
              (l.return = n),
              (e.return = n),
              (l.sibling = e),
              (n.child = l),
              (n.child.memoizedState = _l(t)),
              (n.memoizedState = El),
              e)
            : xo(n, o))
    );
  if (((a = e.memoizedState), a !== null && ((i = a.dehydrated), i !== null)))
    return lf(e, n, o, r, i, a, t);
  if (l) {
    (l = r.fallback), (o = n.mode), (a = e.child), (i = a.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && n.child !== a
        ? ((r = n.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (n.deletions = null))
        : ((r = fn(a, u)), (r.subtreeFlags = a.subtreeFlags & 14680064)),
      i !== null ? (l = fn(i, l)) : ((l = Cn(l, o, t, null)), (l.flags |= 2)),
      (l.return = n),
      (r.return = n),
      (r.sibling = l),
      (n.child = r),
      (r = l),
      (l = n.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? _l(t)
          : {
              baseLanes: o.baseLanes | t,
              cachePool: null,
              transitions: o.transitions,
            }),
      (l.memoizedState = o),
      (l.childLanes = e.childLanes & ~t),
      (n.memoizedState = El),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = fn(l, { mode: "visible", children: r.children })),
    !(n.mode & 1) && (r.lanes = t),
    (r.return = n),
    (r.sibling = null),
    e !== null &&
      ((t = n.deletions),
      t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
    (n.child = r),
    (n.memoizedState = null),
    r
  );
}
function xo(e, n) {
  return (
    (n = fa({ mode: "visible", children: n }, e.mode, 0, null)),
    (n.return = e),
    (e.child = n)
  );
}
function hr(e, n, t, r) {
  return (
    r !== null && lo(r),
    tt(n, e.child, null, t),
    (e = xo(n, n.pendingProps.children)),
    (e.flags |= 2),
    (n.memoizedState = null),
    e
  );
}
function lf(e, n, t, r, a, l, o) {
  if (t)
    return n.flags & 256
      ? ((n.flags &= -257), (r = Ba(Error(y(422)))), hr(e, n, o, r))
      : n.memoizedState !== null
      ? ((n.child = e.child), (n.flags |= 128), null)
      : ((l = r.fallback),
        (a = n.mode),
        (r = fa({ mode: "visible", children: r.children }, a, 0, null)),
        (l = Cn(l, a, o, null)),
        (l.flags |= 2),
        (r.return = n),
        (l.return = n),
        (r.sibling = l),
        (n.child = r),
        n.mode & 1 && tt(n, e.child, null, o),
        (n.child.memoizedState = _l(o)),
        (n.memoizedState = El),
        l);
  if (!(n.mode & 1)) return hr(e, n, o, null);
  if (a.data === "$!") {
    if (((r = a.nextSibling && a.nextSibling.dataset), r)) var i = r.dgst;
    return (r = i), (l = Error(y(419))), (r = Ba(l, r, void 0)), hr(e, n, o, r);
  }
  if (((i = (o & e.childLanes) !== 0), de || i)) {
    if (((r = G), r !== null)) {
      switch (o & -o) {
        case 4:
          a = 2;
          break;
        case 16:
          a = 8;
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
          a = 32;
          break;
        case 536870912:
          a = 268435456;
          break;
        default:
          a = 0;
      }
      (a = a & (r.suspendedLanes | o) ? 0 : a),
        a !== 0 &&
          a !== l.retryLane &&
          ((l.retryLane = a), Ke(e, a), Re(r, e, a, -1));
    }
    return Co(), (r = Ba(Error(y(421)))), hr(e, n, o, r);
  }
  return a.data === "$?"
    ? ((n.flags |= 128),
      (n.child = e.child),
      (n = bf.bind(null, e)),
      (a._reactRetry = n),
      null)
    : ((e = l.treeContext),
      (ge = sn(a.nextSibling)),
      (ye = n),
      (I = !0),
      (Le = null),
      e !== null &&
        ((we[ke++] = Ve),
        (we[ke++] = We),
        (we[ke++] = _n),
        (Ve = e.id),
        (We = e.overflow),
        (_n = n)),
      (n = xo(n, r.children)),
      (n.flags |= 4096),
      n);
}
function Ti(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), wl(e.return, n, t);
}
function Va(e, n, t, r, a) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: a,
      })
    : ((l.isBackwards = n),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = t),
      (l.tailMode = a));
}
function zu(e, n, t) {
  var r = n.pendingProps,
    a = r.revealOrder,
    l = r.tail;
  if ((oe(e, n, r.children, t), (r = A.current), r & 2))
    (r = (r & 1) | 2), (n.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ti(e, t, n);
        else if (e.tag === 19) Ti(e, t, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((R(A, r), !(n.mode & 1))) n.memoizedState = null;
  else
    switch (a) {
      case "forwards":
        for (t = n.child, a = null; t !== null; )
          (e = t.alternate),
            e !== null && qr(e) === null && (a = t),
            (t = t.sibling);
        (t = a),
          t === null
            ? ((a = n.child), (n.child = null))
            : ((a = t.sibling), (t.sibling = null)),
          Va(n, !1, a, t, l);
        break;
      case "backwards":
        for (t = null, a = n.child, n.child = null; a !== null; ) {
          if (((e = a.alternate), e !== null && qr(e) === null)) {
            n.child = a;
            break;
          }
          (e = a.sibling), (a.sibling = t), (t = a), (a = e);
        }
        Va(n, !0, t, null, l);
        break;
      case "together":
        Va(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function Er(e, n) {
  !(n.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function Ye(e, n, t) {
  if (
    (e !== null && (n.dependencies = e.dependencies),
    (Tn |= n.lanes),
    !(t & n.childLanes))
  )
    return null;
  if (e !== null && n.child !== e.child) throw Error(y(153));
  if (n.child !== null) {
    for (
      e = n.child, t = fn(e, e.pendingProps), n.child = t, t.return = n;
      e.sibling !== null;

    )
      (e = e.sibling), (t = t.sibling = fn(e, e.pendingProps)), (t.return = n);
    t.sibling = null;
  }
  return n.child;
}
function of(e, n, t) {
  switch (n.tag) {
    case 3:
      Mu(n), nt();
      break;
    case 5:
      lu(n);
      break;
    case 1:
      pe(n.type) && $r(n);
      break;
    case 4:
      fo(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context,
        a = n.memoizedProps.value;
      R(Wr, r._currentValue), (r._currentValue = a);
      break;
    case 13:
      if (((r = n.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (R(A, A.current & 1), (n.flags |= 128), null)
          : t & n.child.childLanes
          ? Lu(e, n, t)
          : (R(A, A.current & 1),
            (e = Ye(e, n, t)),
            e !== null ? e.sibling : null);
      R(A, A.current & 1);
      break;
    case 19:
      if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
        if (r) return zu(e, n, t);
        n.flags |= 128;
      }
      if (
        ((a = n.memoizedState),
        a !== null &&
          ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
        R(A, A.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (n.lanes = 0), Pu(e, n, t);
  }
  return Ye(e, n, t);
}
var Ru, Pl, Ou, Du;
Ru = function (e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
Pl = function () {};
Ou = function (e, n, t, r) {
  var a = e.memoizedProps;
  if (a !== r) {
    (e = n.stateNode), Nn(Ue.current);
    var l = null;
    switch (t) {
      case "input":
        (a = Ga(e, a)), (r = Ga(e, r)), (l = []);
        break;
      case "select":
        (a = $({}, a, { value: void 0 })),
          (r = $({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (a = el(e, a)), (r = el(e, r)), (l = []);
        break;
      default:
        typeof a.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ar);
    }
    tl(t, r);
    var o;
    t = null;
    for (d in a)
      if (!r.hasOwnProperty(d) && a.hasOwnProperty(d) && a[d] != null)
        if (d === "style") {
          var i = a[d];
          for (o in i) i.hasOwnProperty(o) && (t || (t = {}), (t[o] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (Lt.hasOwnProperty(d)
              ? l || (l = [])
              : (l = l || []).push(d, null));
    for (d in r) {
      var u = r[d];
      if (
        ((i = a != null ? a[d] : void 0),
        r.hasOwnProperty(d) && u !== i && (u != null || i != null))
      )
        if (d === "style")
          if (i) {
            for (o in i)
              !i.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (t || (t = {}), (t[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                i[o] !== u[o] &&
                (t || (t = {}), (t[o] = u[o]));
          } else t || (l || (l = []), l.push(d, t)), (t = u);
        else
          d === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (i = i ? i.__html : void 0),
              u != null && i !== u && (l = l || []).push(d, u))
            : d === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (l = l || []).push(d, "" + u)
            : d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              (Lt.hasOwnProperty(d)
                ? (u != null && d === "onScroll" && O("scroll", e),
                  l || i === u || (l = []))
                : (l = l || []).push(d, u));
    }
    t && (l = l || []).push("style", t);
    var d = l;
    (n.updateQueue = d) && (n.flags |= 4);
  }
};
Du = function (e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function yt(e, n) {
  if (!I)
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; )
          n.alternate !== null && (t = n), (n = n.sibling);
        t === null ? (e.tail = null) : (t.sibling = null);
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null
          ? n || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function te(e) {
  var n = e.alternate !== null && e.alternate.child === e.child,
    t = 0,
    r = 0;
  if (n)
    for (var a = e.child; a !== null; )
      (t |= a.lanes | a.childLanes),
        (r |= a.subtreeFlags & 14680064),
        (r |= a.flags & 14680064),
        (a.return = e),
        (a = a.sibling);
  else
    for (a = e.child; a !== null; )
      (t |= a.lanes | a.childLanes),
        (r |= a.subtreeFlags),
        (r |= a.flags),
        (a.return = e),
        (a = a.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = t), n;
}
function sf(e, n, t) {
  var r = n.pendingProps;
  switch ((ao(n), n.tag)) {
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
      return te(n), null;
    case 1:
      return pe(n.type) && Ur(), te(n), null;
    case 3:
      return (
        (r = n.stateNode),
        rt(),
        D(fe),
        D(le),
        mo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (pr(n)
            ? (n.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
              ((n.flags |= 1024), Le !== null && (Dl(Le), (Le = null)))),
        Pl(e, n),
        te(n),
        null
      );
    case 5:
      po(n);
      var a = Nn(Wt.current);
      if (((t = n.type), e !== null && n.stateNode != null))
        Ou(e, n, t, r, a),
          e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(y(166));
          return te(n), null;
        }
        if (((e = Nn(Ue.current)), pr(n))) {
          (r = n.stateNode), (t = n.type);
          var l = n.memoizedProps;
          switch (((r[Ie] = n), (r[Bt] = l), (e = (n.mode & 1) !== 0), t)) {
            case "dialog":
              O("cancel", r), O("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              O("load", r);
              break;
            case "video":
            case "audio":
              for (a = 0; a < kt.length; a++) O(kt[a], r);
              break;
            case "source":
              O("error", r);
              break;
            case "img":
            case "image":
            case "link":
              O("error", r), O("load", r);
              break;
            case "details":
              O("toggle", r);
              break;
            case "input":
              Ao(r, l), O("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                O("invalid", r);
              break;
            case "textarea":
              $o(r, l), O("invalid", r);
          }
          tl(t, l), (a = null);
          for (var o in l)
            if (l.hasOwnProperty(o)) {
              var i = l[o];
              o === "children"
                ? typeof i == "string"
                  ? r.textContent !== i &&
                    (l.suppressHydrationWarning !== !0 &&
                      fr(r.textContent, i, e),
                    (a = ["children", i]))
                  : typeof i == "number" &&
                    r.textContent !== "" + i &&
                    (l.suppressHydrationWarning !== !0 &&
                      fr(r.textContent, i, e),
                    (a = ["children", "" + i]))
                : Lt.hasOwnProperty(o) &&
                  i != null &&
                  o === "onScroll" &&
                  O("scroll", r);
            }
          switch (t) {
            case "input":
              ar(r), Uo(r, l, !0);
              break;
            case "textarea":
              ar(r), Bo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Ar);
          }
          (r = a), (n.updateQueue = r), r !== null && (n.flags |= 4);
        } else {
          (o = a.nodeType === 9 ? a : a.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = cs(t)),
            e === "http://www.w3.org/1999/xhtml"
              ? t === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(t, { is: r.is }))
                : ((e = o.createElement(t)),
                  t === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, t)),
            (e[Ie] = n),
            (e[Bt] = r),
            Ru(e, n, !1, !1),
            (n.stateNode = e);
          e: {
            switch (((o = rl(t, r)), t)) {
              case "dialog":
                O("cancel", e), O("close", e), (a = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                O("load", e), (a = r);
                break;
              case "video":
              case "audio":
                for (a = 0; a < kt.length; a++) O(kt[a], e);
                a = r;
                break;
              case "source":
                O("error", e), (a = r);
                break;
              case "img":
              case "image":
              case "link":
                O("error", e), O("load", e), (a = r);
                break;
              case "details":
                O("toggle", e), (a = r);
                break;
              case "input":
                Ao(e, r), (a = Ga(e, r)), O("invalid", e);
                break;
              case "option":
                a = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (a = $({}, r, { value: void 0 })),
                  O("invalid", e);
                break;
              case "textarea":
                $o(e, r), (a = el(e, r)), O("invalid", e);
                break;
              default:
                a = r;
            }
            tl(t, a), (i = a);
            for (l in i)
              if (i.hasOwnProperty(l)) {
                var u = i[l];
                l === "style"
                  ? ps(e, u)
                  : l === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && ds(e, u))
                  : l === "children"
                  ? typeof u == "string"
                    ? (t !== "textarea" || u !== "") && zt(e, u)
                    : typeof u == "number" && zt(e, "" + u)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (Lt.hasOwnProperty(l)
                      ? u != null && l === "onScroll" && O("scroll", e)
                      : u != null && Vl(e, l, u, o));
              }
            switch (t) {
              case "input":
                ar(e), Uo(e, r, !1);
                break;
              case "textarea":
                ar(e), Bo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + pn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? qn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      qn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof a.onClick == "function" && (e.onclick = Ar);
            }
            switch (t) {
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
          r && (n.flags |= 4);
        }
        n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
      }
      return te(n), null;
    case 6:
      if (e && n.stateNode != null) Du(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(y(166));
        if (((t = Nn(Wt.current)), Nn(Ue.current), pr(n))) {
          if (
            ((r = n.stateNode),
            (t = n.memoizedProps),
            (r[Ie] = n),
            (l = r.nodeValue !== t) && ((e = ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                fr(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  fr(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          l && (n.flags |= 4);
        } else
          (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
            (r[Ie] = n),
            (n.stateNode = r);
      }
      return te(n), null;
    case 13:
      if (
        (D(A),
        (r = n.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (I && ge !== null && n.mode & 1 && !(n.flags & 128))
          eu(), nt(), (n.flags |= 98560), (l = !1);
        else if (((l = pr(n)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(y(318));
            if (
              ((l = n.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(y(317));
            l[Ie] = n;
          } else
            nt(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4);
          te(n), (l = !1);
        } else Le !== null && (Dl(Le), (Le = null)), (l = !0);
        if (!l) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128
        ? ((n.lanes = t), n)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((n.child.flags |= 8192),
            n.mode & 1 &&
              (e === null || A.current & 1 ? K === 0 && (K = 3) : Co())),
          n.updateQueue !== null && (n.flags |= 4),
          te(n),
          null);
    case 4:
      return (
        rt(), Pl(e, n), e === null && Ut(n.stateNode.containerInfo), te(n), null
      );
    case 10:
      return so(n.type._context), te(n), null;
    case 17:
      return pe(n.type) && Ur(), te(n), null;
    case 19:
      if ((D(A), (l = n.memoizedState), l === null)) return te(n), null;
      if (((r = (n.flags & 128) !== 0), (o = l.rendering), o === null))
        if (r) yt(l, !1);
        else {
          if (K !== 0 || (e !== null && e.flags & 128))
            for (e = n.child; e !== null; ) {
              if (((o = qr(e)), o !== null)) {
                for (
                  n.flags |= 128,
                    yt(l, !1),
                    r = o.updateQueue,
                    r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                    n.subtreeFlags = 0,
                    r = t,
                    t = n.child;
                  t !== null;

                )
                  (l = t),
                    (e = r),
                    (l.flags &= 14680066),
                    (o = l.alternate),
                    o === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = o.childLanes),
                        (l.lanes = o.lanes),
                        (l.child = o.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = o.memoizedProps),
                        (l.memoizedState = o.memoizedState),
                        (l.updateQueue = o.updateQueue),
                        (l.type = o.type),
                        (e = o.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (t = t.sibling);
                return R(A, (A.current & 1) | 2), n.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            H() > lt &&
            ((n.flags |= 128), (r = !0), yt(l, !1), (n.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = qr(o)), e !== null)) {
            if (
              ((n.flags |= 128),
              (r = !0),
              (t = e.updateQueue),
              t !== null && ((n.updateQueue = t), (n.flags |= 4)),
              yt(l, !0),
              l.tail === null && l.tailMode === "hidden" && !o.alternate && !I)
            )
              return te(n), null;
          } else
            2 * H() - l.renderingStartTime > lt &&
              t !== 1073741824 &&
              ((n.flags |= 128), (r = !0), yt(l, !1), (n.lanes = 4194304));
        l.isBackwards
          ? ((o.sibling = n.child), (n.child = o))
          : ((t = l.last),
            t !== null ? (t.sibling = o) : (n.child = o),
            (l.last = o));
      }
      return l.tail !== null
        ? ((n = l.tail),
          (l.rendering = n),
          (l.tail = n.sibling),
          (l.renderingStartTime = H()),
          (n.sibling = null),
          (t = A.current),
          R(A, r ? (t & 1) | 2 : t & 1),
          n)
        : (te(n), null);
    case 22:
    case 23:
      return (
        jo(),
        (r = n.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
        r && n.mode & 1
          ? he & 1073741824 && (te(n), n.subtreeFlags & 6 && (n.flags |= 8192))
          : te(n),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, n.tag));
}
function uf(e, n) {
  switch ((ao(n), n.tag)) {
    case 1:
      return (
        pe(n.type) && Ur(),
        (e = n.flags),
        e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 3:
      return (
        rt(),
        D(fe),
        D(le),
        mo(),
        (e = n.flags),
        e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 5:
      return po(n), null;
    case 13:
      if ((D(A), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
        if (n.alternate === null) throw Error(y(340));
        nt();
      }
      return (
        (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 19:
      return D(A), null;
    case 4:
      return rt(), null;
    case 10:
      return so(n.type._context), null;
    case 22:
    case 23:
      return jo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var gr = !1,
  re = !1,
  cf = typeof WeakSet == "function" ? WeakSet : Set,
  k = null;
function Hn(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        B(e, n, r);
      }
    else t.current = null;
}
function Fu(e, n, t) {
  try {
    t();
  } catch (r) {
    B(e, n, r);
  }
}
var Mi = !1;
function df(e, n) {
  if (((pl = Dr), (e = $s()), to(e))) {
    if ("selectionStart" in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = ((t = e.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var a = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, l.nodeType;
          } catch {
            t = null;
            break e;
          }
          var o = 0,
            i = -1,
            u = -1,
            d = 0,
            g = 0,
            h = e,
            m = null;
          n: for (;;) {
            for (
              var b;
              h !== t || (a !== 0 && h.nodeType !== 3) || (i = o + a),
                h !== l || (r !== 0 && h.nodeType !== 3) || (u = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (b = h.firstChild) !== null;

            )
              (m = h), (h = b);
            for (;;) {
              if (h === e) break n;
              if (
                (m === t && ++d === a && (i = o),
                m === l && ++g === r && (u = o),
                (b = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = b;
          }
          t = i === -1 || u === -1 ? null : { start: i, end: u };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (ml = { focusedElem: e, selectionRange: t }, Dr = !1, k = n; k !== null; )
    if (((n = k), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = n), (k = e);
    else
      for (; k !== null; ) {
        n = k;
        try {
          var x = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var w = x.memoizedProps,
                    F = x.memoizedState,
                    f = n.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      n.elementType === n.type ? w : Te(n.type, w),
                      F
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = n.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          B(n, n.return, v);
        }
        if (((e = n.sibling), e !== null)) {
          (e.return = n.return), (k = e);
          break;
        }
        k = n.return;
      }
  return (x = Mi), (Mi = !1), x;
}
function Pt(e, n, t) {
  var r = n.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var a = (r = r.next);
    do {
      if ((a.tag & e) === e) {
        var l = a.destroy;
        (a.destroy = void 0), l !== void 0 && Fu(n, t, l);
      }
      a = a.next;
    } while (a !== r);
  }
}
function ca(e, n) {
  if (
    ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
  ) {
    var t = (n = n.next);
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Tl(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : (n.current = e);
  }
}
function Iu(e) {
  var n = e.alternate;
  n !== null && ((e.alternate = null), Iu(n)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((n = e.stateNode),
      n !== null &&
        (delete n[Ie], delete n[Bt], delete n[yl], delete n[Qd], delete n[qd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Au(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Li(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Au(e.return)) return null;
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
function Ml(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      n
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(e, n)
          : t.insertBefore(e, n)
        : (t.nodeType === 8
            ? ((n = t.parentNode), n.insertBefore(e, t))
            : ((n = t), n.appendChild(e)),
          (t = t._reactRootContainer),
          t != null || n.onclick !== null || (n.onclick = Ar));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ml(e, n, t), e = e.sibling; e !== null; ) Ml(e, n, t), (e = e.sibling);
}
function Ll(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ll(e, n, t), e = e.sibling; e !== null; ) Ll(e, n, t), (e = e.sibling);
}
var Z = null,
  Me = !1;
function Ge(e, n, t) {
  for (t = t.child; t !== null; ) Uu(e, n, t), (t = t.sibling);
}
function Uu(e, n, t) {
  if (Ae && typeof Ae.onCommitFiberUnmount == "function")
    try {
      Ae.onCommitFiberUnmount(ta, t);
    } catch {}
  switch (t.tag) {
    case 5:
      re || Hn(t, n);
    case 6:
      var r = Z,
        a = Me;
      (Z = null),
        Ge(e, n, t),
        (Z = r),
        (Me = a),
        Z !== null &&
          (Me
            ? ((e = Z),
              (t = t.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t))
            : Z.removeChild(t.stateNode));
      break;
    case 18:
      Z !== null &&
        (Me
          ? ((e = Z),
            (t = t.stateNode),
            e.nodeType === 8
              ? Da(e.parentNode, t)
              : e.nodeType === 1 && Da(e, t),
            Ft(e))
          : Da(Z, t.stateNode));
      break;
    case 4:
      (r = Z),
        (a = Me),
        (Z = t.stateNode.containerInfo),
        (Me = !0),
        Ge(e, n, t),
        (Z = r),
        (Me = a);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !re &&
        ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        a = r = r.next;
        do {
          var l = a,
            o = l.destroy;
          (l = l.tag),
            o !== void 0 && (l & 2 || l & 4) && Fu(t, n, o),
            (a = a.next);
        } while (a !== r);
      }
      Ge(e, n, t);
      break;
    case 1:
      if (
        !re &&
        (Hn(t, n),
        (r = t.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = t.memoizedProps),
            (r.state = t.memoizedState),
            r.componentWillUnmount();
        } catch (i) {
          B(t, n, i);
        }
      Ge(e, n, t);
      break;
    case 21:
      Ge(e, n, t);
      break;
    case 22:
      t.mode & 1
        ? ((re = (r = re) || t.memoizedState !== null), Ge(e, n, t), (re = r))
        : Ge(e, n, t);
      break;
    default:
      Ge(e, n, t);
  }
}
function zi(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new cf()),
      n.forEach(function (r) {
        var a = xf.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(a, a));
      });
  }
}
function Pe(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var a = t[r];
      try {
        var l = e,
          o = n,
          i = o;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              (Z = i.stateNode), (Me = !1);
              break e;
            case 3:
              (Z = i.stateNode.containerInfo), (Me = !0);
              break e;
            case 4:
              (Z = i.stateNode.containerInfo), (Me = !0);
              break e;
          }
          i = i.return;
        }
        if (Z === null) throw Error(y(160));
        Uu(l, o, a), (Z = null), (Me = !1);
        var u = a.alternate;
        u !== null && (u.return = null), (a.return = null);
      } catch (d) {
        B(a, n, d);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; ) $u(n, e), (n = n.sibling);
}
function $u(e, n) {
  var t = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Pe(n, e), De(e), r & 4)) {
        try {
          Pt(3, e, e.return), ca(3, e);
        } catch (w) {
          B(e, e.return, w);
        }
        try {
          Pt(5, e, e.return);
        } catch (w) {
          B(e, e.return, w);
        }
      }
      break;
    case 1:
      Pe(n, e), De(e), r & 512 && t !== null && Hn(t, t.return);
      break;
    case 5:
      if (
        (Pe(n, e),
        De(e),
        r & 512 && t !== null && Hn(t, t.return),
        e.flags & 32)
      ) {
        var a = e.stateNode;
        try {
          zt(a, "");
        } catch (w) {
          B(e, e.return, w);
        }
      }
      if (r & 4 && ((a = e.stateNode), a != null)) {
        var l = e.memoizedProps,
          o = t !== null ? t.memoizedProps : l,
          i = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            i === "input" && l.type === "radio" && l.name != null && ss(a, l),
              rl(i, o);
            var d = rl(i, l);
            for (o = 0; o < u.length; o += 2) {
              var g = u[o],
                h = u[o + 1];
              g === "style"
                ? ps(a, h)
                : g === "dangerouslySetInnerHTML"
                ? ds(a, h)
                : g === "children"
                ? zt(a, h)
                : Vl(a, g, h, d);
            }
            switch (i) {
              case "input":
                Za(a, l);
                break;
              case "textarea":
                us(a, l);
                break;
              case "select":
                var m = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!l.multiple;
                var b = l.value;
                b != null
                  ? qn(a, !!l.multiple, b, !1)
                  : m !== !!l.multiple &&
                    (l.defaultValue != null
                      ? qn(a, !!l.multiple, l.defaultValue, !0)
                      : qn(a, !!l.multiple, l.multiple ? [] : "", !1));
            }
            a[Bt] = l;
          } catch (w) {
            B(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Pe(n, e), De(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (a = e.stateNode), (l = e.memoizedProps);
        try {
          a.nodeValue = l;
        } catch (w) {
          B(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Pe(n, e), De(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          Ft(n.containerInfo);
        } catch (w) {
          B(e, e.return, w);
        }
      break;
    case 4:
      Pe(n, e), De(e);
      break;
    case 13:
      Pe(n, e),
        De(e),
        (a = e.child),
        a.flags & 8192 &&
          ((l = a.memoizedState !== null),
          (a.stateNode.isHidden = l),
          !l ||
            (a.alternate !== null && a.alternate.memoizedState !== null) ||
            (So = H())),
        r & 4 && zi(e);
      break;
    case 22:
      if (
        ((g = t !== null && t.memoizedState !== null),
        e.mode & 1 ? ((re = (d = re) || g), Pe(n, e), (re = d)) : Pe(n, e),
        De(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !g && e.mode & 1)
        )
          for (k = e, g = e.child; g !== null; ) {
            for (h = k = g; k !== null; ) {
              switch (((m = k), (b = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pt(4, m, m.return);
                  break;
                case 1:
                  Hn(m, m.return);
                  var x = m.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = m), (t = m.return);
                    try {
                      (n = r),
                        (x.props = n.memoizedProps),
                        (x.state = n.memoizedState),
                        x.componentWillUnmount();
                    } catch (w) {
                      B(r, t, w);
                    }
                  }
                  break;
                case 5:
                  Hn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Oi(h);
                    continue;
                  }
              }
              b !== null ? ((b.return = m), (k = b)) : Oi(h);
            }
            g = g.sibling;
          }
        e: for (g = null, h = e; ; ) {
          if (h.tag === 5) {
            if (g === null) {
              g = h;
              try {
                (a = h.stateNode),
                  d
                    ? ((l = a.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((i = h.stateNode),
                      (u = h.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (i.style.display = fs("display", o)));
              } catch (w) {
                B(e, e.return, w);
              }
            }
          } else if (h.tag === 6) {
            if (g === null)
              try {
                h.stateNode.nodeValue = d ? "" : h.memoizedProps;
              } catch (w) {
                B(e, e.return, w);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            g === h && (g = null), (h = h.return);
          }
          g === h && (g = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Pe(n, e), De(e), r & 4 && zi(e);
      break;
    case 21:
      break;
    default:
      Pe(n, e), De(e);
  }
}
function De(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (Au(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var a = r.stateNode;
          r.flags & 32 && (zt(a, ""), (r.flags &= -33));
          var l = Li(e);
          Ll(e, l, a);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            i = Li(e);
          Ml(e, i, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (u) {
      B(e, e.return, u);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function ff(e, n, t) {
  (k = e), Bu(e);
}
function Bu(e, n, t) {
  for (var r = (e.mode & 1) !== 0; k !== null; ) {
    var a = k,
      l = a.child;
    if (a.tag === 22 && r) {
      var o = a.memoizedState !== null || gr;
      if (!o) {
        var i = a.alternate,
          u = (i !== null && i.memoizedState !== null) || re;
        i = gr;
        var d = re;
        if (((gr = o), (re = u) && !d))
          for (k = a; k !== null; )
            (o = k),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Di(a)
                : u !== null
                ? ((u.return = o), (k = u))
                : Di(a);
        for (; l !== null; ) (k = l), Bu(l), (l = l.sibling);
        (k = a), (gr = i), (re = d);
      }
      Ri(e);
    } else
      a.subtreeFlags & 8772 && l !== null ? ((l.return = a), (k = l)) : Ri(e);
  }
}
function Ri(e) {
  for (; k !== null; ) {
    var n = k;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              re || ca(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !re)
                if (t === null) r.componentDidMount();
                else {
                  var a =
                    n.elementType === n.type
                      ? t.memoizedProps
                      : Te(n.type, t.memoizedProps);
                  r.componentDidUpdate(
                    a,
                    t.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = n.updateQueue;
              l !== null && vi(n, l, r);
              break;
            case 3:
              var o = n.updateQueue;
              if (o !== null) {
                if (((t = null), n.child !== null))
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                vi(n, o, t);
              }
              break;
            case 5:
              var i = n.stateNode;
              if (t === null && n.flags & 4) {
                t = i;
                var u = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && t.focus();
                    break;
                  case "img":
                    u.src && (t.src = u.src);
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
              if (n.memoizedState === null) {
                var d = n.alternate;
                if (d !== null) {
                  var g = d.memoizedState;
                  if (g !== null) {
                    var h = g.dehydrated;
                    h !== null && Ft(h);
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
              throw Error(y(163));
          }
        re || (n.flags & 512 && Tl(n));
      } catch (m) {
        B(n, n.return, m);
      }
    }
    if (n === e) {
      k = null;
      break;
    }
    if (((t = n.sibling), t !== null)) {
      (t.return = n.return), (k = t);
      break;
    }
    k = n.return;
  }
}
function Oi(e) {
  for (; k !== null; ) {
    var n = k;
    if (n === e) {
      k = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      (t.return = n.return), (k = t);
      break;
    }
    k = n.return;
  }
}
function Di(e) {
  for (; k !== null; ) {
    var n = k;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            ca(4, n);
          } catch (u) {
            B(n, t, u);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var a = n.return;
            try {
              r.componentDidMount();
            } catch (u) {
              B(n, a, u);
            }
          }
          var l = n.return;
          try {
            Tl(n);
          } catch (u) {
            B(n, l, u);
          }
          break;
        case 5:
          var o = n.return;
          try {
            Tl(n);
          } catch (u) {
            B(n, o, u);
          }
      }
    } catch (u) {
      B(n, n.return, u);
    }
    if (n === e) {
      k = null;
      break;
    }
    var i = n.sibling;
    if (i !== null) {
      (i.return = n.return), (k = i);
      break;
    }
    k = n.return;
  }
}
var pf = Math.ceil,
  Jr = Je.ReactCurrentDispatcher,
  wo = Je.ReactCurrentOwner,
  Ne = Je.ReactCurrentBatchConfig,
  L = 0,
  G = null,
  Q = null,
  X = 0,
  he = 0,
  Qn = gn(0),
  K = 0,
  Kt = null,
  Tn = 0,
  da = 0,
  ko = 0,
  Tt = null,
  ce = null,
  So = 0,
  lt = 1 / 0,
  $e = null,
  Gr = !1,
  zl = null,
  cn = null,
  yr = !1,
  rn = null,
  Zr = 0,
  Mt = 0,
  Rl = null,
  _r = -1,
  Pr = 0;
function ie() {
  return L & 6 ? H() : _r !== -1 ? _r : (_r = H());
}
function dn(e) {
  return e.mode & 1
    ? L & 2 && X !== 0
      ? X & -X
      : Yd.transition !== null
      ? (Pr === 0 && (Pr = js()), Pr)
      : ((e = z),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ls(e.type))),
        e)
    : 1;
}
function Re(e, n, t, r) {
  if (50 < Mt) throw ((Mt = 0), (Rl = null), Error(y(185)));
  Jt(e, t, r),
    (!(L & 2) || e !== G) &&
      (e === G && (!(L & 2) && (da |= t), K === 4 && nn(e, X)),
      me(e, r),
      t === 1 && L === 0 && !(n.mode & 1) && ((lt = H() + 500), ia && yn()));
}
function me(e, n) {
  var t = e.callbackNode;
  Yc(e, n);
  var r = Or(e, e === G ? X : 0);
  if (r === 0)
    t !== null && Ho(t), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((n = r & -r), e.callbackPriority !== n)) {
    if ((t != null && Ho(t), n === 1))
      e.tag === 0 ? Kd(Fi.bind(null, e)) : Gs(Fi.bind(null, e)),
        Wd(function () {
          !(L & 6) && yn();
        }),
        (t = null);
    else {
      switch (Cs(r)) {
        case 1:
          t = Kl;
          break;
        case 4:
          t = Ss;
          break;
        case 16:
          t = Rr;
          break;
        case 536870912:
          t = Ns;
          break;
        default:
          t = Rr;
      }
      t = Ju(t, Vu.bind(null, e));
    }
    (e.callbackPriority = n), (e.callbackNode = t);
  }
}
function Vu(e, n) {
  if (((_r = -1), (Pr = 0), L & 6)) throw Error(y(327));
  var t = e.callbackNode;
  if (Zn() && e.callbackNode !== t) return null;
  var r = Or(e, e === G ? X : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = Xr(e, r);
  else {
    n = r;
    var a = L;
    L |= 2;
    var l = Hu();
    (G !== e || X !== n) && (($e = null), (lt = H() + 500), jn(e, n));
    do
      try {
        gf();
        break;
      } catch (i) {
        Wu(e, i);
      }
    while (!0);
    io(),
      (Jr.current = l),
      (L = a),
      Q !== null ? (n = 0) : ((G = null), (X = 0), (n = K));
  }
  if (n !== 0) {
    if (
      (n === 2 && ((a = sl(e)), a !== 0 && ((r = a), (n = Ol(e, a)))), n === 1)
    )
      throw ((t = Kt), jn(e, 0), nn(e, r), me(e, H()), t);
    if (n === 6) nn(e, r);
    else {
      if (
        ((a = e.current.alternate),
        !(r & 30) &&
          !mf(a) &&
          ((n = Xr(e, r)),
          n === 2 && ((l = sl(e)), l !== 0 && ((r = l), (n = Ol(e, l)))),
          n === 1))
      )
        throw ((t = Kt), jn(e, 0), nn(e, r), me(e, H()), t);
      switch (((e.finishedWork = a), (e.finishedLanes = r), n)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          wn(e, ce, $e);
          break;
        case 3:
          if (
            (nn(e, r), (r & 130023424) === r && ((n = So + 500 - H()), 10 < n))
          ) {
            if (Or(e, 0) !== 0) break;
            if (((a = e.suspendedLanes), (a & r) !== r)) {
              ie(), (e.pingedLanes |= e.suspendedLanes & a);
              break;
            }
            e.timeoutHandle = gl(wn.bind(null, e, ce, $e), n);
            break;
          }
          wn(e, ce, $e);
          break;
        case 4:
          if ((nn(e, r), (r & 4194240) === r)) break;
          for (n = e.eventTimes, a = -1; 0 < r; ) {
            var o = 31 - ze(r);
            (l = 1 << o), (o = n[o]), o > a && (a = o), (r &= ~l);
          }
          if (
            ((r = a),
            (r = H() - r),
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
                : 1960 * pf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = gl(wn.bind(null, e, ce, $e), r);
            break;
          }
          wn(e, ce, $e);
          break;
        case 5:
          wn(e, ce, $e);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return me(e, H()), e.callbackNode === t ? Vu.bind(null, e) : null;
}
function Ol(e, n) {
  var t = Tt;
  return (
    e.current.memoizedState.isDehydrated && (jn(e, n).flags |= 256),
    (e = Xr(e, n)),
    e !== 2 && ((n = ce), (ce = t), n !== null && Dl(n)),
    e
  );
}
function Dl(e) {
  ce === null ? (ce = e) : ce.push.apply(ce, e);
}
function mf(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var r = 0; r < t.length; r++) {
          var a = t[r],
            l = a.getSnapshot;
          a = a.value;
          try {
            if (!Oe(l(), a)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
      (t.return = n), (n = t);
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  return !0;
}
function nn(e, n) {
  for (
    n &= ~ko,
      n &= ~da,
      e.suspendedLanes |= n,
      e.pingedLanes &= ~n,
      e = e.expirationTimes;
    0 < n;

  ) {
    var t = 31 - ze(n),
      r = 1 << t;
    (e[t] = -1), (n &= ~r);
  }
}
function Fi(e) {
  if (L & 6) throw Error(y(327));
  Zn();
  var n = Or(e, 0);
  if (!(n & 1)) return me(e, H()), null;
  var t = Xr(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = sl(e);
    r !== 0 && ((n = r), (t = Ol(e, r)));
  }
  if (t === 1) throw ((t = Kt), jn(e, 0), nn(e, n), me(e, H()), t);
  if (t === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = n),
    wn(e, ce, $e),
    me(e, H()),
    null
  );
}
function No(e, n) {
  var t = L;
  L |= 1;
  try {
    return e(n);
  } finally {
    (L = t), L === 0 && ((lt = H() + 500), ia && yn());
  }
}
function Mn(e) {
  rn !== null && rn.tag === 0 && !(L & 6) && Zn();
  var n = L;
  L |= 1;
  var t = Ne.transition,
    r = z;
  try {
    if (((Ne.transition = null), (z = 1), e)) return e();
  } finally {
    (z = r), (Ne.transition = t), (L = n), !(L & 6) && yn();
  }
}
function jo() {
  (he = Qn.current), D(Qn);
}
function jn(e, n) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var t = e.timeoutHandle;
  if ((t !== -1 && ((e.timeoutHandle = -1), Vd(t)), Q !== null))
    for (t = Q.return; t !== null; ) {
      var r = t;
      switch ((ao(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ur();
          break;
        case 3:
          rt(), D(fe), D(le), mo();
          break;
        case 5:
          po(r);
          break;
        case 4:
          rt();
          break;
        case 13:
          D(A);
          break;
        case 19:
          D(A);
          break;
        case 10:
          so(r.type._context);
          break;
        case 22:
        case 23:
          jo();
      }
      t = t.return;
    }
  if (
    ((G = e),
    (Q = e = fn(e.current, null)),
    (X = he = n),
    (K = 0),
    (Kt = null),
    (ko = da = Tn = 0),
    (ce = Tt = null),
    Sn !== null)
  ) {
    for (n = 0; n < Sn.length; n++)
      if (((t = Sn[n]), (r = t.interleaved), r !== null)) {
        t.interleaved = null;
        var a = r.next,
          l = t.pending;
        if (l !== null) {
          var o = l.next;
          (l.next = a), (r.next = o);
        }
        t.pending = r;
      }
    Sn = null;
  }
  return e;
}
function Wu(e, n) {
  do {
    var t = Q;
    try {
      if ((io(), (jr.current = Yr), Kr)) {
        for (var r = U.memoizedState; r !== null; ) {
          var a = r.queue;
          a !== null && (a.pending = null), (r = r.next);
        }
        Kr = !1;
      }
      if (
        ((Pn = 0),
        (J = q = U = null),
        (_t = !1),
        (Ht = 0),
        (wo.current = null),
        t === null || t.return === null)
      ) {
        (K = 1), (Kt = n), (Q = null);
        break;
      }
      e: {
        var l = e,
          o = t.return,
          i = t,
          u = n;
        if (
          ((n = X),
          (i.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var d = u,
            g = i,
            h = g.tag;
          if (!(g.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = g.alternate;
            m
              ? ((g.updateQueue = m.updateQueue),
                (g.memoizedState = m.memoizedState),
                (g.lanes = m.lanes))
              : ((g.updateQueue = null), (g.memoizedState = null));
          }
          var b = Ni(o);
          if (b !== null) {
            (b.flags &= -257),
              ji(b, o, i, l, n),
              b.mode & 1 && Si(l, d, n),
              (n = b),
              (u = d);
            var x = n.updateQueue;
            if (x === null) {
              var w = new Set();
              w.add(u), (n.updateQueue = w);
            } else x.add(u);
            break e;
          } else {
            if (!(n & 1)) {
              Si(l, d, n), Co();
              break e;
            }
            u = Error(y(426));
          }
        } else if (I && i.mode & 1) {
          var F = Ni(o);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256),
              ji(F, o, i, l, n),
              lo(at(u, i));
            break e;
          }
        }
        (l = u = at(u, i)),
          K !== 4 && (K = 2),
          Tt === null ? (Tt = [l]) : Tt.push(l),
          (l = o);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (n &= -n), (l.lanes |= n);
              var f = Cu(l, u, n);
              yi(l, f);
              break e;
            case 1:
              i = u;
              var c = l.type,
                p = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (cn === null || !cn.has(p))))
              ) {
                (l.flags |= 65536), (n &= -n), (l.lanes |= n);
                var v = Eu(l, i, n);
                yi(l, v);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      qu(t);
    } catch (N) {
      (n = N), Q === t && t !== null && (Q = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function Hu() {
  var e = Jr.current;
  return (Jr.current = Yr), e === null ? Yr : e;
}
function Co() {
  (K === 0 || K === 3 || K === 2) && (K = 4),
    G === null || (!(Tn & 268435455) && !(da & 268435455)) || nn(G, X);
}
function Xr(e, n) {
  var t = L;
  L |= 2;
  var r = Hu();
  (G !== e || X !== n) && (($e = null), jn(e, n));
  do
    try {
      hf();
      break;
    } catch (a) {
      Wu(e, a);
    }
  while (!0);
  if ((io(), (L = t), (Jr.current = r), Q !== null)) throw Error(y(261));
  return (G = null), (X = 0), K;
}
function hf() {
  for (; Q !== null; ) Qu(Q);
}
function gf() {
  for (; Q !== null && !Uc(); ) Qu(Q);
}
function Qu(e) {
  var n = Yu(e.alternate, e, he);
  (e.memoizedProps = e.pendingProps),
    n === null ? qu(e) : (Q = n),
    (wo.current = null);
}
function qu(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (((e = n.return), n.flags & 32768)) {
      if (((t = uf(t, n)), t !== null)) {
        (t.flags &= 32767), (Q = t);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (K = 6), (Q = null);
        return;
      }
    } else if (((t = sf(t, n, he)), t !== null)) {
      Q = t;
      return;
    }
    if (((n = n.sibling), n !== null)) {
      Q = n;
      return;
    }
    Q = n = e;
  } while (n !== null);
  K === 0 && (K = 5);
}
function wn(e, n, t) {
  var r = z,
    a = Ne.transition;
  try {
    (Ne.transition = null), (z = 1), yf(e, n, t, r);
  } finally {
    (Ne.transition = a), (z = r);
  }
  return null;
}
function yf(e, n, t, r) {
  do Zn();
  while (rn !== null);
  if (L & 6) throw Error(y(327));
  t = e.finishedWork;
  var a = e.finishedLanes;
  if (t === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = t.lanes | t.childLanes;
  if (
    (Jc(e, l),
    e === G && ((Q = G = null), (X = 0)),
    (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
      yr ||
      ((yr = !0),
      Ju(Rr, function () {
        return Zn(), null;
      })),
    (l = (t.flags & 15990) !== 0),
    t.subtreeFlags & 15990 || l)
  ) {
    (l = Ne.transition), (Ne.transition = null);
    var o = z;
    z = 1;
    var i = L;
    (L |= 4),
      (wo.current = null),
      df(e, t),
      $u(t, e),
      Dd(ml),
      (Dr = !!pl),
      (ml = pl = null),
      (e.current = t),
      ff(t),
      $c(),
      (L = i),
      (z = o),
      (Ne.transition = l);
  } else e.current = t;
  if (
    (yr && ((yr = !1), (rn = e), (Zr = a)),
    (l = e.pendingLanes),
    l === 0 && (cn = null),
    Wc(t.stateNode),
    me(e, H()),
    n !== null)
  )
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      (a = n[t]), r(a.value, { componentStack: a.stack, digest: a.digest });
  if (Gr) throw ((Gr = !1), (e = zl), (zl = null), e);
  return (
    Zr & 1 && e.tag !== 0 && Zn(),
    (l = e.pendingLanes),
    l & 1 ? (e === Rl ? Mt++ : ((Mt = 0), (Rl = e))) : (Mt = 0),
    yn(),
    null
  );
}
function Zn() {
  if (rn !== null) {
    var e = Cs(Zr),
      n = Ne.transition,
      t = z;
    try {
      if (((Ne.transition = null), (z = 16 > e ? 16 : e), rn === null))
        var r = !1;
      else {
        if (((e = rn), (rn = null), (Zr = 0), L & 6)) throw Error(y(331));
        var a = L;
        for (L |= 4, k = e.current; k !== null; ) {
          var l = k,
            o = l.child;
          if (k.flags & 16) {
            var i = l.deletions;
            if (i !== null) {
              for (var u = 0; u < i.length; u++) {
                var d = i[u];
                for (k = d; k !== null; ) {
                  var g = k;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pt(8, g, l);
                  }
                  var h = g.child;
                  if (h !== null) (h.return = g), (k = h);
                  else
                    for (; k !== null; ) {
                      g = k;
                      var m = g.sibling,
                        b = g.return;
                      if ((Iu(g), g === d)) {
                        k = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = b), (k = m);
                        break;
                      }
                      k = b;
                    }
                }
              }
              var x = l.alternate;
              if (x !== null) {
                var w = x.child;
                if (w !== null) {
                  x.child = null;
                  do {
                    var F = w.sibling;
                    (w.sibling = null), (w = F);
                  } while (w !== null);
                }
              }
              k = l;
            }
          }
          if (l.subtreeFlags & 2064 && o !== null) (o.return = l), (k = o);
          else
            e: for (; k !== null; ) {
              if (((l = k), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pt(9, l, l.return);
                }
              var f = l.sibling;
              if (f !== null) {
                (f.return = l.return), (k = f);
                break e;
              }
              k = l.return;
            }
        }
        var c = e.current;
        for (k = c; k !== null; ) {
          o = k;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (k = p);
          else
            e: for (o = c; k !== null; ) {
              if (((i = k), i.flags & 2048))
                try {
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ca(9, i);
                  }
                } catch (N) {
                  B(i, i.return, N);
                }
              if (i === o) {
                k = null;
                break e;
              }
              var v = i.sibling;
              if (v !== null) {
                (v.return = i.return), (k = v);
                break e;
              }
              k = i.return;
            }
        }
        if (
          ((L = a), yn(), Ae && typeof Ae.onPostCommitFiberRoot == "function")
        )
          try {
            Ae.onPostCommitFiberRoot(ta, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (z = t), (Ne.transition = n);
    }
  }
  return !1;
}
function Ii(e, n, t) {
  (n = at(t, n)),
    (n = Cu(e, n, 1)),
    (e = un(e, n, 1)),
    (n = ie()),
    e !== null && (Jt(e, 1, n), me(e, n));
}
function B(e, n, t) {
  if (e.tag === 3) Ii(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        Ii(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (cn === null || !cn.has(r)))
        ) {
          (e = at(t, e)),
            (e = Eu(n, e, 1)),
            (n = un(n, e, 1)),
            (e = ie()),
            n !== null && (Jt(n, 1, e), me(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function vf(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n),
    (n = ie()),
    (e.pingedLanes |= e.suspendedLanes & t),
    G === e &&
      (X & t) === t &&
      (K === 4 || (K === 3 && (X & 130023424) === X && 500 > H() - So)
        ? jn(e, 0)
        : (ko |= t)),
    me(e, n);
}
function Ku(e, n) {
  n === 0 &&
    (e.mode & 1
      ? ((n = ir), (ir <<= 1), !(ir & 130023424) && (ir = 4194304))
      : (n = 1));
  var t = ie();
  (e = Ke(e, n)), e !== null && (Jt(e, n, t), me(e, t));
}
function bf(e) {
  var n = e.memoizedState,
    t = 0;
  n !== null && (t = n.retryLane), Ku(e, t);
}
function xf(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        a = e.memoizedState;
      a !== null && (t = a.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(n), Ku(e, t);
}
var Yu;
Yu = function (e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || fe.current) de = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return (de = !1), of(e, n, t);
      de = !!(e.flags & 131072);
    }
  else (de = !1), I && n.flags & 1048576 && Zs(n, Vr, n.index);
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      var r = n.type;
      Er(e, n), (e = n.pendingProps);
      var a = et(n, le.current);
      Gn(n, t), (a = go(null, n, r, e, a, t));
      var l = yo();
      return (
        (n.flags |= 1),
        typeof a == "object" &&
        a !== null &&
        typeof a.render == "function" &&
        a.$$typeof === void 0
          ? ((n.tag = 1),
            (n.memoizedState = null),
            (n.updateQueue = null),
            pe(r) ? ((l = !0), $r(n)) : (l = !1),
            (n.memoizedState =
              a.state !== null && a.state !== void 0 ? a.state : null),
            co(n),
            (a.updater = ua),
            (n.stateNode = a),
            (a._reactInternals = n),
            Sl(n, r, e, t),
            (n = Cl(null, n, r, !0, l, t)))
          : ((n.tag = 0), I && l && ro(n), oe(null, n, a, t), (n = n.child)),
        n
      );
    case 16:
      r = n.elementType;
      e: {
        switch (
          (Er(e, n),
          (e = n.pendingProps),
          (a = r._init),
          (r = a(r._payload)),
          (n.type = r),
          (a = n.tag = kf(r)),
          (e = Te(r, e)),
          a)
        ) {
          case 0:
            n = jl(null, n, r, e, t);
            break e;
          case 1:
            n = _i(null, n, r, e, t);
            break e;
          case 11:
            n = Ci(null, n, r, e, t);
            break e;
          case 14:
            n = Ei(null, n, r, Te(r.type, e), t);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return n;
    case 0:
      return (
        (r = n.type),
        (a = n.pendingProps),
        (a = n.elementType === r ? a : Te(r, a)),
        jl(e, n, r, a, t)
      );
    case 1:
      return (
        (r = n.type),
        (a = n.pendingProps),
        (a = n.elementType === r ? a : Te(r, a)),
        _i(e, n, r, a, t)
      );
    case 3:
      e: {
        if ((Mu(n), e === null)) throw Error(y(387));
        (r = n.pendingProps),
          (l = n.memoizedState),
          (a = l.element),
          au(e, n),
          Qr(n, r, null, t);
        var o = n.memoizedState;
        if (((r = o.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (n.updateQueue.baseState = l),
            (n.memoizedState = l),
            n.flags & 256)
          ) {
            (a = at(Error(y(423)), n)), (n = Pi(e, n, r, t, a));
            break e;
          } else if (r !== a) {
            (a = at(Error(y(424)), n)), (n = Pi(e, n, r, t, a));
            break e;
          } else
            for (
              ge = sn(n.stateNode.containerInfo.firstChild),
                ye = n,
                I = !0,
                Le = null,
                t = tu(n, null, r, t),
                n.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((nt(), r === a)) {
            n = Ye(e, n, t);
            break e;
          }
          oe(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return (
        lu(n),
        e === null && xl(n),
        (r = n.type),
        (a = n.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (o = a.children),
        hl(r, a) ? (o = null) : l !== null && hl(r, l) && (n.flags |= 32),
        Tu(e, n),
        oe(e, n, o, t),
        n.child
      );
    case 6:
      return e === null && xl(n), null;
    case 13:
      return Lu(e, n, t);
    case 4:
      return (
        fo(n, n.stateNode.containerInfo),
        (r = n.pendingProps),
        e === null ? (n.child = tt(n, null, r, t)) : oe(e, n, r, t),
        n.child
      );
    case 11:
      return (
        (r = n.type),
        (a = n.pendingProps),
        (a = n.elementType === r ? a : Te(r, a)),
        Ci(e, n, r, a, t)
      );
    case 7:
      return oe(e, n, n.pendingProps, t), n.child;
    case 8:
      return oe(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return oe(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (
          ((r = n.type._context),
          (a = n.pendingProps),
          (l = n.memoizedProps),
          (o = a.value),
          R(Wr, r._currentValue),
          (r._currentValue = o),
          l !== null)
        )
          if (Oe(l.value, o)) {
            if (l.children === a.children && !fe.current) {
              n = Ye(e, n, t);
              break e;
            }
          } else
            for (l = n.child, l !== null && (l.return = n); l !== null; ) {
              var i = l.dependencies;
              if (i !== null) {
                o = l.child;
                for (var u = i.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (l.tag === 1) {
                      (u = He(-1, t & -t)), (u.tag = 2);
                      var d = l.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var g = d.pending;
                        g === null
                          ? (u.next = u)
                          : ((u.next = g.next), (g.next = u)),
                          (d.pending = u);
                      }
                    }
                    (l.lanes |= t),
                      (u = l.alternate),
                      u !== null && (u.lanes |= t),
                      wl(l.return, t, n),
                      (i.lanes |= t);
                    break;
                  }
                  u = u.next;
                }
              } else if (l.tag === 10) o = l.type === n.type ? null : l.child;
              else if (l.tag === 18) {
                if (((o = l.return), o === null)) throw Error(y(341));
                (o.lanes |= t),
                  (i = o.alternate),
                  i !== null && (i.lanes |= t),
                  wl(o, t, n),
                  (o = l.sibling);
              } else o = l.child;
              if (o !== null) o.return = l;
              else
                for (o = l; o !== null; ) {
                  if (o === n) {
                    o = null;
                    break;
                  }
                  if (((l = o.sibling), l !== null)) {
                    (l.return = o.return), (o = l);
                    break;
                  }
                  o = o.return;
                }
              l = o;
            }
        oe(e, n, a.children, t), (n = n.child);
      }
      return n;
    case 9:
      return (
        (a = n.type),
        (r = n.pendingProps.children),
        Gn(n, t),
        (a = je(a)),
        (r = r(a)),
        (n.flags |= 1),
        oe(e, n, r, t),
        n.child
      );
    case 14:
      return (
        (r = n.type),
        (a = Te(r, n.pendingProps)),
        (a = Te(r.type, a)),
        Ei(e, n, r, a, t)
      );
    case 15:
      return _u(e, n, n.type, n.pendingProps, t);
    case 17:
      return (
        (r = n.type),
        (a = n.pendingProps),
        (a = n.elementType === r ? a : Te(r, a)),
        Er(e, n),
        (n.tag = 1),
        pe(r) ? ((e = !0), $r(n)) : (e = !1),
        Gn(n, t),
        ju(n, r, a),
        Sl(n, r, a, t),
        Cl(null, n, r, !0, e, t)
      );
    case 19:
      return zu(e, n, t);
    case 22:
      return Pu(e, n, t);
  }
  throw Error(y(156, n.tag));
};
function Ju(e, n) {
  return ks(e, n);
}
function wf(e, n, t, r) {
  (this.tag = e),
    (this.key = t),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = n),
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
function Se(e, n, t, r) {
  return new wf(e, n, t, r);
}
function Eo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function kf(e) {
  if (typeof e == "function") return Eo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Hl)) return 11;
    if (e === Ql) return 14;
  }
  return 2;
}
function fn(e, n) {
  var t = e.alternate;
  return (
    t === null
      ? ((t = Se(e.tag, n, e.key, e.mode)),
        (t.elementType = e.elementType),
        (t.type = e.type),
        (t.stateNode = e.stateNode),
        (t.alternate = e),
        (e.alternate = t))
      : ((t.pendingProps = n),
        (t.type = e.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = e.flags & 14680064),
    (t.childLanes = e.childLanes),
    (t.lanes = e.lanes),
    (t.child = e.child),
    (t.memoizedProps = e.memoizedProps),
    (t.memoizedState = e.memoizedState),
    (t.updateQueue = e.updateQueue),
    (n = e.dependencies),
    (t.dependencies =
      n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (t.sibling = e.sibling),
    (t.index = e.index),
    (t.ref = e.ref),
    t
  );
}
function Tr(e, n, t, r, a, l) {
  var o = 2;
  if (((r = e), typeof e == "function")) Eo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Dn:
        return Cn(t.children, a, l, n);
      case Wl:
        (o = 8), (a |= 8);
        break;
      case qa:
        return (
          (e = Se(12, t, n, a | 2)), (e.elementType = qa), (e.lanes = l), e
        );
      case Ka:
        return (e = Se(13, t, n, a)), (e.elementType = Ka), (e.lanes = l), e;
      case Ya:
        return (e = Se(19, t, n, a)), (e.elementType = Ya), (e.lanes = l), e;
      case ls:
        return fa(t, a, l, n);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case rs:
              o = 10;
              break e;
            case as:
              o = 9;
              break e;
            case Hl:
              o = 11;
              break e;
            case Ql:
              o = 14;
              break e;
            case Ze:
              (o = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (n = Se(o, t, n, a)), (n.elementType = e), (n.type = r), (n.lanes = l), n
  );
}
function Cn(e, n, t, r) {
  return (e = Se(7, e, r, n)), (e.lanes = t), e;
}
function fa(e, n, t, r) {
  return (
    (e = Se(22, e, r, n)),
    (e.elementType = ls),
    (e.lanes = t),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Wa(e, n, t) {
  return (e = Se(6, e, null, n)), (e.lanes = t), e;
}
function Ha(e, n, t) {
  return (
    (n = Se(4, e.children !== null ? e.children : [], e.key, n)),
    (n.lanes = t),
    (n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    n
  );
}
function Sf(e, n, t, r, a) {
  (this.tag = n),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ja(0)),
    (this.expirationTimes = ja(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ja(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = a),
    (this.mutableSourceEagerHydrationData = null);
}
function _o(e, n, t, r, a, l, o, i, u) {
  return (
    (e = new Sf(e, n, t, i, u)),
    n === 1 ? ((n = 1), l === !0 && (n |= 8)) : (n = 0),
    (l = Se(3, null, null, n)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    co(l),
    e
  );
}
function Nf(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: On,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: n,
    implementation: t,
  };
}
function Gu(e) {
  if (!e) return mn;
  e = e._reactInternals;
  e: {
    if (zn(e) !== e || e.tag !== 1) throw Error(y(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (pe(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (pe(t)) return Js(e, t, n);
  }
  return n;
}
function Zu(e, n, t, r, a, l, o, i, u) {
  return (
    (e = _o(t, r, !0, e, a, l, o, i, u)),
    (e.context = Gu(null)),
    (t = e.current),
    (r = ie()),
    (a = dn(t)),
    (l = He(r, a)),
    (l.callback = n ?? null),
    un(t, l, a),
    (e.current.lanes = a),
    Jt(e, a, r),
    me(e, r),
    e
  );
}
function pa(e, n, t, r) {
  var a = n.current,
    l = ie(),
    o = dn(a);
  return (
    (t = Gu(t)),
    n.context === null ? (n.context = t) : (n.pendingContext = t),
    (n = He(l, o)),
    (n.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (n.callback = r),
    (e = un(a, n, o)),
    e !== null && (Re(e, a, o, l), Nr(e, a, o)),
    o
  );
}
function ea(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ai(e, n) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Po(e, n) {
  Ai(e, n), (e = e.alternate) && Ai(e, n);
}
function jf() {
  return null;
}
var Xu =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function To(e) {
  this._internalRoot = e;
}
ma.prototype.render = To.prototype.render = function (e) {
  var n = this._internalRoot;
  if (n === null) throw Error(y(409));
  pa(e, n, null, null);
};
ma.prototype.unmount = To.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    Mn(function () {
      pa(null, e, null, null);
    }),
      (n[qe] = null);
  }
};
function ma(e) {
  this._internalRoot = e;
}
ma.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var n = Ps();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < en.length && n !== 0 && n < en[t].priority; t++);
    en.splice(t, 0, e), t === 0 && Ms(e);
  }
};
function Mo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ha(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ui() {}
function Cf(e, n, t, r, a) {
  if (a) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var d = ea(o);
        l.call(d);
      };
    }
    var o = Zu(n, r, e, 0, null, !1, !1, "", Ui);
    return (
      (e._reactRootContainer = o),
      (e[qe] = o.current),
      Ut(e.nodeType === 8 ? e.parentNode : e),
      Mn(),
      o
    );
  }
  for (; (a = e.lastChild); ) e.removeChild(a);
  if (typeof r == "function") {
    var i = r;
    r = function () {
      var d = ea(u);
      i.call(d);
    };
  }
  var u = _o(e, 0, !1, null, null, !1, !1, "", Ui);
  return (
    (e._reactRootContainer = u),
    (e[qe] = u.current),
    Ut(e.nodeType === 8 ? e.parentNode : e),
    Mn(function () {
      pa(n, u, t, r);
    }),
    u
  );
}
function ga(e, n, t, r, a) {
  var l = t._reactRootContainer;
  if (l) {
    var o = l;
    if (typeof a == "function") {
      var i = a;
      a = function () {
        var u = ea(o);
        i.call(u);
      };
    }
    pa(n, o, e, a);
  } else o = Cf(t, n, e, a, r);
  return ea(o);
}
Es = function (e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = wt(n.pendingLanes);
        t !== 0 &&
          (Yl(n, t | 1), me(n, H()), !(L & 6) && ((lt = H() + 500), yn()));
      }
      break;
    case 13:
      Mn(function () {
        var r = Ke(e, 1);
        if (r !== null) {
          var a = ie();
          Re(r, e, 1, a);
        }
      }),
        Po(e, 1);
  }
};
Jl = function (e) {
  if (e.tag === 13) {
    var n = Ke(e, 134217728);
    if (n !== null) {
      var t = ie();
      Re(n, e, 134217728, t);
    }
    Po(e, 134217728);
  }
};
_s = function (e) {
  if (e.tag === 13) {
    var n = dn(e),
      t = Ke(e, n);
    if (t !== null) {
      var r = ie();
      Re(t, e, n, r);
    }
    Po(e, n);
  }
};
Ps = function () {
  return z;
};
Ts = function (e, n) {
  var t = z;
  try {
    return (z = e), n();
  } finally {
    z = t;
  }
};
ll = function (e, n, t) {
  switch (n) {
    case "input":
      if ((Za(e, t), (n = t.name), t.type === "radio" && n != null)) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (
          t = t.querySelectorAll(
            "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
          ),
            n = 0;
          n < t.length;
          n++
        ) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var a = oa(r);
            if (!a) throw Error(y(90));
            is(r), Za(r, a);
          }
        }
      }
      break;
    case "textarea":
      us(e, t);
      break;
    case "select":
      (n = t.value), n != null && qn(e, !!t.multiple, n, !1);
  }
};
gs = No;
ys = Mn;
var Ef = { usingClientEntryPoint: !1, Events: [Zt, Un, oa, ms, hs, No] },
  vt = {
    findFiberByHostInstance: kn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  _f = {
    bundleType: vt.bundleType,
    version: vt.version,
    rendererPackageName: vt.rendererPackageName,
    rendererConfig: vt.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Je.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = xs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: vt.findFiberByHostInstance || jf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var vr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vr.isDisabled && vr.supportsFiber)
    try {
      (ta = vr.inject(_f)), (Ae = vr);
    } catch {}
}
be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ef;
be.createPortal = function (e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Mo(n)) throw Error(y(200));
  return Nf(e, n, null, t);
};
be.createRoot = function (e, n) {
  if (!Mo(e)) throw Error(y(299));
  var t = !1,
    r = "",
    a = Xu;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (t = !0),
      n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (n = _o(e, 1, !1, null, null, t, !1, r, a)),
    (e[qe] = n.current),
    Ut(e.nodeType === 8 ? e.parentNode : e),
    new To(n)
  );
};
be.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = xs(n)), (e = e === null ? null : e.stateNode), e;
};
be.flushSync = function (e) {
  return Mn(e);
};
be.hydrate = function (e, n, t) {
  if (!ha(n)) throw Error(y(200));
  return ga(null, e, n, !0, t);
};
be.hydrateRoot = function (e, n, t) {
  if (!Mo(e)) throw Error(y(405));
  var r = (t != null && t.hydratedSources) || null,
    a = !1,
    l = "",
    o = Xu;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (a = !0),
      t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (n = Zu(n, null, e, 1, t ?? null, a, !1, l, o)),
    (e[qe] = n.current),
    Ut(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (t = r[e]),
        (a = t._getVersion),
        (a = a(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, a])
          : n.mutableSourceEagerHydrationData.push(t, a);
  return new ma(n);
};
be.render = function (e, n, t) {
  if (!ha(n)) throw Error(y(200));
  return ga(null, e, n, !1, t);
};
be.unmountComponentAtNode = function (e) {
  if (!ha(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Mn(function () {
        ga(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[qe] = null);
        });
      }),
      !0)
    : !1;
};
be.unstable_batchedUpdates = No;
be.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
  if (!ha(t)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return ga(e, n, t, !1, r);
};
be.version = "18.3.1-next-f1338f8080-20240426";
function ec() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ec);
    } catch (e) {
      console.error(e);
    }
}
ec(), (Xi.exports = be);
var Pf = Xi.exports,
  nc,
  $i = Pf;
(nc = $i.createRoot), $i.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Tf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mf = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  Ee = (e, n) => {
    const t = ae.forwardRef(
      (
        {
          color: r = "currentColor",
          size: a = 24,
          strokeWidth: l = 2,
          absoluteStrokeWidth: o,
          className: i = "",
          children: u,
          ...d
        },
        g
      ) =>
        ae.createElement(
          "svg",
          {
            ref: g,
            ...Tf,
            width: a,
            height: a,
            stroke: r,
            strokeWidth: o ? (Number(l) * 24) / Number(a) : l,
            className: ["lucide", `lucide-${Mf(e)}`, i].join(" "),
            ...d,
          },
          [
            ...n.map(([h, m]) => ae.createElement(h, m)),
            ...(Array.isArray(u) ? u : [u]),
          ]
        )
    );
    return (t.displayName = `${e}`), t;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lf = Ee("Brain", [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja",
    },
  ],
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
      key: "ep3f8r",
    },
  ],
  ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" }],
  ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zf = Ee("Facebook", [
  [
    "path",
    {
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
      key: "1jg4f8",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rf = Ee("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Of = Ee("Instagram", [
  [
    "rect",
    {
      width: "20",
      height: "20",
      x: "2",
      y: "2",
      rx: "5",
      ry: "5",
      key: "2e1cvw",
    },
  ],
  [
    "path",
    { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
  ],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Df = Ee("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ff = Ee("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const If = Ee("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Af = Ee("Trophy", [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  [
    "path",
    {
      d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
      key: "1nw9bq",
    },
  ],
  [
    "path",
    {
      d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
      key: "1np0yb",
    },
  ],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uf = Ee("Twitter", [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $f = Ee("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bf = Ee("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vf = Ee("Youtube", [
    [
      "path",
      {
        d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
        key: "1q2vi4",
      },
    ],
    ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }],
  ]),
  Wf = () => {
    const [e, n] = ae.useState(!1),
      [t, r] = ae.useState(!1);
    return (
      ae.useEffect(() => {
        const a = () => {
          window.scrollY > 50 ? r(!0) : r(!1);
        };
        return (
          window.addEventListener("scroll", a),
          () => window.removeEventListener("scroll", a)
        );
      }, []),
      s.jsxs("nav", {
        className: `fixed w-full z-50 transition-all duration-300 ${
          t ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`,
        children: [
          s.jsxs("div", {
            className:
              "container mx-auto px-4 flex justify-between items-center",
            children: [
              s.jsxs("a", {
                href: "#",
                className: "text-2xl font-bold flex items-center gap-2",
                children: [
                  s.jsx("span", {
                    className: `${t ? "text-red-700" : "text-white"}`,
                    children: "Taekwondo",
                  }),
                  s.jsx("span", {
                    className: `${t ? "text-gray-800" : "text-white"}`,
                    children: "Águia",
                  }),
                ],
              }),
              s.jsx("div", {
                className: "hidden md:flex space-x-8",
                children: [
                  "Início",
                  "Classes",
                  "Sobre",
                  "HOrários",
                  "Galeria",
                  "Contato",
                ].map((a) =>
                  s.jsx(
                    "a",
                    {
                      href: `#${a.toLowerCase()}`,
                      className: `font-medium transition-colors duration-200 hover:text-red-600 ${
                        t ? "text-gray-800" : "text-white"
                      }`,
                      children: a,
                    },
                    a
                  )
                ),
              }),
              s.jsx("button", {
                className: "md:hidden",
                onClick: () => n(!e),
                "aria-label": "Toggle menu",
                children: e
                  ? s.jsx(Bf, {
                      className: `h-6 w-6 ${
                        t ? "text-gray-800" : "text-white"
                      }`,
                    })
                  : s.jsx(Df, {
                      className: `h-6 w-6 ${
                        t ? "text-gray-800" : "text-white"
                      }`,
                    }),
              }),
            ],
          }),
          e &&
            s.jsx("div", {
              className: "md:hidden bg-white",
              children: s.jsx("div", {
                className: "px-2 pt-2 pb-3 space-y-1",
                children: [
                  "Início",
                  "Classes",
                  "Sobre",
                  "Schedule",
                  "Galeria",
                  "contato",
                ].map((a) =>
                  s.jsx(
                    "a",
                    {
                      href: `#${a.toLowerCase()}`,
                      className:
                        "block px-3 py-2 text-gray-800 font-medium hover:bg-red-50 hover:text-red-700 rounded-md",
                      onClick: () => n(!1),
                      children: a,
                    },
                    a
                  )
                ),
              }),
            }),
        ],
      })
    );
  },
  Hf = () =>
    s.jsxs("section", {
      id: "Início",
      className:
        "relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat",
      style: {
        backgroundImage:
          'url("https://images.unsplash.com/photo-1579331844418-fcd67e29b3d6?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      },
      children: [
        s.jsx("div", { className: "absolute inset-0 bg-black bg-opacity-50" }),
        s.jsxs("div", {
          className: "relative z-10 text-center px-4 sm:px-8 max-w-3xl",
          children: [
            s.jsxs("h1", {
              className:
                "text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight",
              children: [
                "Descubra a Arte do ",
                s.jsx("span", {
                  className: "text-red-500",
                  children: "Taekwondo",
                }),
              ],
            }),
            s.jsx("p", {
              className: "text-xl sm:text-2xl text-white mb-8",
              children:
                "Disciplina, Respeito e Excelência. Junte-se à Academia do Mestre Riba hoje.",
            }),
            s.jsxs("div", {
              className: "flex flex-col sm:flex-row gap-4 justify-center",
              children: [
                s.jsx("a", {
                  href: "#contato",
                  className:
                    "px-8 py-3 bg-red-700 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300 transform hover:scale-105",
                  children: "Aula Experimental Grátis",
                }),
                s.jsx("a", {
                  href: "#classes",
                  className:
                    "px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-gray-900 transition duration-300",
                  children: "Explorar Classes",
                }),
              ],
            }),
          ],
        }),
        s.jsx("div", {
          className:
            "absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce",
          children: s.jsx("a", {
            href: "#classes",
            className: "text-white",
            children: s.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-10 w-10",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: s.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M19 14l-7 7m0 0l-7-7m7 7V3",
              }),
            }),
          }),
        }),
      ],
    }),
  Qf = ({ title: e, description: n, image: t, suitable: r }) =>
    s.jsxs("div", {
      className:
        "flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1",
      children: [
        s.jsx("div", {
          className: "h-48 overflow-hidden",
          children: s.jsx("img", {
            src: t,
            alt: e,
            className:
              "w-full h-full object-cover transition-transform duration-500 hover:scale-110",
          }),
        }),
        s.jsxs("div", {
          className: "flex-1 bg-white p-6 flex flex-col",
          children: [
            s.jsx("h3", {
              className: "text-xl font-bold text-gray-900 mb-2",
              children: e,
            }),
            s.jsxs("p", {
              className: "text-sm text-red-600 font-medium mb-4",
              children: ["Suitable for: ", r],
            }),
            s.jsx("p", {
              className: "text-gray-600 mb-4 flex-grow",
              children: n,
            }),
            s.jsx("a", {
              href: "#contato",
              className:
                "text-red-700 font-medium hover:text-red-500 transition duration-300",
              children: "Saiba Mais →",
            }),
          ],
        }),
      ],
    }),
  qf = () => {
    const e = [
      {
        title: "Little Tigers",
        description:
          "An exciting program designed specifically for children aged 4-7. Focuses on developing basic motor skills, discipline, and confidence through fun activities.",
        image:
          "https://images.pexels.com/photos/8612284/pexels-photo-8612284.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        suitable: "Ages 4-7",
      },
      {
        title: "Junior Program",
        description:
          "Perfect for children 8-12 years old. Develops strong foundations in Taekwondo techniques while teaching respect, focus, and self-discipline.",
        image:
          "https://images.pexels.com/photos/7045671/pexels-photo-7045671.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        suitable: "Ages 8-12",
      },
      {
        title: "Teen Program",
        description:
          "Designed for teenagers to develop advanced techniques, physical fitness, mental resilience, and leadership skills in a supportive environment.",
        image:
          "https://images.pexels.com/photos/6253298/pexels-photo-6253298.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        suitable: "Ages 13-17",
      },
      {
        title: "Adult Program",
        description:
          "Comprehensive training for adults of all fitness levels. Focus on self-defense, physical conditioning, stress reduction, and personal achievement.",
        image:
          "https://images.pexels.com/photos/7045623/pexels-photo-7045623.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        suitable: "Ages 18+",
      },
    ];
    return s.jsx("section", {
      id: "classes",
      className: "py-20 bg-gray-50",
      children: s.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          s.jsxs("div", {
            className: "text-center mb-16",
            children: [
              s.jsx("h2", {
                className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                children: "Nossas Classes",
              }),
              s.jsx("p", {
                className: "text-xl text-gray-600 max-w-2xl mx-auto",
                children:
                  "Descubra o programa de Taekwondo perfeito para sua idade e nível de habilidade",
              }),
            ],
          }),
          s.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
            children: e.map((n, t) => s.jsx(Qf, { ...n }, t)),
          }),
          s.jsx("div", {
            className: "mt-16 text-center",
            children: s.jsx("a", {
              href: "#schedule",
              className:
                "px-8 py-3 bg-red-700 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300",
              children: "View Class Schedule",
            }),
          }),
        ],
      }),
    });
  },
  Kf = () => {
    const e = [
      "Faixa Preta 5º Dan em Taekwondo",
      "Mais de 20 anos de experiência em ensino",
      "Ex-Técnico da Seleção Regional",
      "Medalista em Campeonatos Nacionais",
      "Instrutor Master Certificado",
    ];
    return s.jsx("section", {
      id: "Sobre",
      className: "py-20",
      children: s.jsx("div", {
        className: "container mx-auto px-4",
        children: s.jsxs("div", {
          className: "flex flex-col lg:flex-row items-center gap-12",
          children: [
            s.jsx("div", {
              className: "lg:w-1/2",
              children: s.jsx("img", {
                src: "https://images.pexels.com/photos/7045391/pexels-photo-7045391.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                alt: "Mestre Riba ensinando",
                className: "rounded-lg shadow-xl w-full h-[500px] object-cover",
              }),
            }),
            s.jsxs("div", {
              className: "lg:w-1/2",
              children: [
                s.jsx("h2", {
                  className:
                    "text-3xl md:text-4xl font-bold text-gray-900 mb-6",
                  children: "Sobre o Mestre Riba",
                }),
                s.jsx("p", {
                  className: "text-gray-700 mb-6 leading-relaxed",
                  children:
                    "Com mais de duas décadas de experiência em Taekwondo, Mestre Riba dedicou sua vida ao domínio e ensino desta arte marcial coreana. Sua jornada começou aos 7 anos e o levou através de competições internacionais, treinamento avançado e anos de ensino para alunos de todas as idades.",
                }),
                s.jsx("p", {
                  className: "text-gray-700 mb-6 leading-relaxed",
                  children:
                    "A filosofia de ensino do Mestre Riba concentra-se no desenvolvimento não apenas das habilidades físicas, mas também da disciplina mental, confiança e respeito. Ele acredita que o Taekwondo é um caminho para o crescimento pessoal que se estende muito além do dojang (sala de treinamento).",
                }),
                s.jsx("h3", {
                  className: "text-xl font-semibold text-gray-900 mb-4",
                  children: "Conquistas & Credenciais",
                }),
                s.jsx("ul", {
                  className: "space-y-2 mb-8",
                  children: e.map((n, t) =>
                    s.jsxs(
                      "li",
                      {
                        className: "flex items-start",
                        children: [
                          s.jsx("span", {
                            className: "text-red-600 mr-2",
                            children: "✓",
                          }),
                          s.jsx("span", {
                            className: "text-gray-700",
                            children: n,
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
                s.jsx("blockquote", {
                  className:
                    "italic border-l-4 border-red-600 pl-4 py-2 text-gray-600",
                  children:
                    '"Minha missão é ajudar cada aluno a descobrir seu potencial através dos princípios e da prática do Taekwondo, criando corpos e mentes mais fortes para um futuro melhor."',
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  Yf = ({ icon: e, title: n, description: t }) =>
    s.jsxs("div", {
      className:
        "bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-xl",
      children: [
        s.jsx("div", { className: "text-red-600 mb-4", children: e }),
        s.jsx("h3", {
          className: "text-xl font-semibold text-gray-900 mb-2",
          children: n,
        }),
        s.jsx("p", { className: "text-gray-600", children: t }),
      ],
    }),
  Jf = () => {
    const e = [
      {
        icon: s.jsx(Ff, { className: "h-10 w-10" }),
        title: "Self-Defense",
        description:
          "Learn practical and effective techniques to protect yourself and gain confidence in any situation.",
      },
      {
        icon: s.jsx(Rf, { className: "h-10 w-10" }),
        title: "Physical Fitness",
        description:
          "Improve strength, flexibility, cardio endurance, and overall health through dynamic training.",
      },
      {
        icon: s.jsx(Lf, { className: "h-10 w-10" }),
        title: "Mental Discipline",
        description:
          "Develop focus, self-control, and mental resilience that translates to success in all areas of life.",
      },
      {
        icon: s.jsx($f, { className: "h-10 w-10" }),
        title: "Community",
        description:
          "Join a supportive community that encourages personal growth and lifelong friendships.",
      },
      {
        icon: s.jsx(If, { className: "h-10 w-10" }),
        title: "Goal Setting",
        description:
          "Progress through the belt system with clear goals and achievements that build self-confidence.",
      },
      {
        icon: s.jsx(Af, { className: "h-10 w-10" }),
        title: "Competition",
        description:
          "Test your skills in a variety of competitive formats from forms to sparring at local and national levels.",
      },
    ];
    return s.jsx("section", {
      className: "py-20 bg-gray-50",
      children: s.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          s.jsxs("div", {
            className: "text-center mb-16",
            children: [
              s.jsx("h2", {
                className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                children: "Benefícios do Taekwondo",
              }),
              s.jsx("p", {
                className: "text-xl text-gray-600 max-w-2xl mx-auto",
                children:
                  "Descubra como o treinamento de Taekwondo pode transformar sua vida fisicamente, mentalmente e socialmente",
              }),
            ],
          }),
          s.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
            children: e.map((n, t) => s.jsx(Yf, { ...n }, t)),
          }),
          s.jsx("div", {
            className: "mt-16 text-center",
            children: s.jsx("a", {
              href: "#contato",
              className:
                "px-8 py-3 bg-red-700 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300 transform hover:scale-105",
              children: "Start Your Journey Today",
            }),
          }),
        ],
      }),
    });
  },
  Gf = () => {
    const e = [
        {
          name: "Sarah Johnson",
          role: "Parent of Junior Student",
          image:
            "https://images.pexels.com/photos/3763188/pexels-photo-3763188.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          quote:
            "Since my son started training with Master Kim, we've seen incredible improvements not just in his physical abilities, but also in his confidence and focus at school. The positive impact extends far beyond the dojang.",
        },
        {
          name: "David Chen",
          role: "Adult Student, 2 Years",
          image:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          quote:
            "As a busy professional, Taekwondo has become my sanctuary. Master Kim's teaching style makes every class both challenging and rewarding. I'm in the best shape of my life and have made great friends along the way.",
        },
        {
          name: "Emma Rodriguez",
          role: "Teen Student, Black Belt",
          image:
            "https://images.pexels.com/photos/774909/pexels-photo-774909.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          quote:
            "I started when I was 10 years old and now at 17, Taekwondo has shaped who I am. Master Kim has been an incredible mentor, teaching me discipline and perseverance that has helped me succeed in all areas of my life.",
        },
      ],
      [n, t] = ae.useState(0),
      r = () => {
        t((o) => (o + 1) % e.length);
      },
      a = () => {
        t((o) => (o === 0 ? e.length - 1 : o - 1));
      },
      l = e[n];
    return s.jsx("section", {
      className: "py-20 bg-gray-50",
      children: s.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          s.jsxs("div", {
            className: "text-center mb-16",
            children: [
              s.jsx("h2", {
                className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                children: "What Our Students Say",
              }),
              s.jsx("p", {
                className: "text-xl text-gray-600 max-w-2xl mx-auto",
                children:
                  "Hear from the students whose lives have been transformed through our Taekwondo programs",
              }),
            ],
          }),
          s.jsx("div", {
            className: "max-w-4xl mx-auto",
            children: s.jsxs("div", {
              className: "bg-white rounded-lg shadow-lg p-8 md:p-10",
              children: [
                s.jsxs("div", {
                  className: "flex flex-col items-center",
                  children: [
                    s.jsx("div", {
                      className:
                        "w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-red-100",
                      children: s.jsx("img", {
                        src: l.image,
                        alt: l.name,
                        className: "w-full h-full object-cover",
                      }),
                    }),
                    s.jsxs("p", {
                      className:
                        "text-gray-700 text-lg md:text-xl italic mb-8 text-center",
                      children: ['"', l.quote, '"'],
                    }),
                    s.jsxs("div", {
                      className: "text-center",
                      children: [
                        s.jsx("h4", {
                          className: "text-lg font-semibold text-gray-900",
                          children: l.name,
                        }),
                        s.jsx("p", {
                          className: "text-gray-600",
                          children: l.role,
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "flex justify-center mt-8 space-x-4",
                  children: [
                    s.jsx("button", {
                      onClick: a,
                      className:
                        "p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300",
                      "aria-label": "Previous testimonial",
                      children: s.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-6 w-6",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: s.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M15 19l-7-7 7-7",
                        }),
                      }),
                    }),
                    s.jsx("div", {
                      className: "flex space-x-2",
                      children: e.map((o, i) =>
                        s.jsx(
                          "button",
                          {
                            className: `w-3 h-3 rounded-full transition-colors duration-300 ${
                              i === n ? "bg-red-600" : "bg-gray-300"
                            }`,
                            onClick: () => t(i),
                            "aria-label": `Go to testimonial ${i + 1}`,
                          },
                          i
                        )
                      ),
                    }),
                    s.jsx("button", {
                      onClick: r,
                      className:
                        "p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300",
                      "aria-label": "Next testimonial",
                      children: s.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-6 w-6",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: s.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M9 5l7 7-7 7",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  Zf = () => {
    var e;
    const n = [
        {
          day: "Monday",
          sessions: [
            {
              time: "4:00 PM - 5:00 PM",
              className: "Little Tigers",
              level: "Ages 4-7",
            },
            {
              time: "5:15 PM - 6:15 PM",
              className: "Junior Program",
              level: "Ages 8-12",
            },
            {
              time: "6:30 PM - 7:45 PM",
              className: "Adult Program",
              level: "All Levels",
            },
          ],
        },
        {
          day: "Tuesday",
          sessions: [
            {
              time: "4:00 PM - 5:00 PM",
              className: "Little Tigers",
              level: "Ages 4-7",
            },
            {
              time: "5:15 PM - 6:15 PM",
              className: "Teen Program",
              level: "Ages 13-17",
            },
            {
              time: "6:30 PM - 7:45 PM",
              className: "Advanced Training",
              level: "Black Belt",
            },
          ],
        },
        {
          day: "Wednesday",
          sessions: [
            {
              time: "4:00 PM - 5:00 PM",
              className: "Junior Program",
              level: "Ages 8-12",
            },
            {
              time: "5:15 PM - 6:15 PM",
              className: "Little Tigers",
              level: "Ages 4-7",
            },
            {
              time: "6:30 PM - 7:45 PM",
              className: "Adult Program",
              level: "All Levels",
            },
          ],
        },
        {
          day: "Thursday",
          sessions: [
            {
              time: "4:00 PM - 5:00 PM",
              className: "Little Tigers",
              level: "Ages 4-7",
            },
            {
              time: "5:15 PM - 6:15 PM",
              className: "Junior Program",
              level: "Ages 8-12",
            },
            {
              time: "6:30 PM - 7:45 PM",
              className: "Teen Program",
              level: "Ages 13-17",
            },
          ],
        },
        {
          day: "Friday",
          sessions: [
            {
              time: "4:00 PM - 5:00 PM",
              className: "Junior Program",
              level: "Ages 8-12",
            },
            {
              time: "5:15 PM - 6:15 PM",
              className: "Teen Program",
              level: "Ages 13-17",
            },
            {
              time: "6:30 PM - 7:45 PM",
              className: "Adult Program",
              level: "All Levels",
            },
          ],
        },
        {
          day: "Saturday",
          sessions: [
            {
              time: "9:00 AM - 10:00 AM",
              className: "Little Tigers",
              level: "Ages 4-7",
            },
            {
              time: "10:15 AM - 11:30 AM",
              className: "Junior Program",
              level: "Ages 8-12",
            },
            {
              time: "11:45 AM - 1:00 PM",
              className: "Open Training",
              level: "All Levels",
            },
          ],
        },
      ],
      [t, r] = ae.useState("Monday");
    return s.jsx("section", {
      id: "schedule",
      className: "py-20",
      children: s.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          s.jsxs("div", {
            className: "text-center mb-16",
            children: [
              s.jsx("h2", {
                className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                children: "Class Schedule",
              }),
              s.jsx("p", {
                className: "text-xl text-gray-600 max-w-2xl mx-auto",
                children: "Find the perfect time for your Taekwondo journey",
              }),
            ],
          }),
          s.jsxs("div", {
            className: "max-w-4xl mx-auto",
            children: [
              s.jsx("div", {
                className: "flex flex-wrap justify-center mb-8 gap-2",
                children: n.map(({ day: a }) =>
                  s.jsx(
                    "button",
                    {
                      className: `px-4 py-2 rounded-md font-medium transition duration-200 ${
                        t === a
                          ? "bg-red-700 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`,
                      onClick: () => r(a),
                      children: a,
                    },
                    a
                  )
                ),
              }),
              s.jsx("div", {
                className: "bg-white rounded-lg shadow-lg overflow-hidden",
                children: s.jsxs("table", {
                  className: "min-w-full",
                  children: [
                    s.jsx("thead", {
                      className: "bg-gray-50 border-b",
                      children: s.jsxs("tr", {
                        children: [
                          s.jsx("th", {
                            className:
                              "py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                            children: "Time",
                          }),
                          s.jsx("th", {
                            className:
                              "py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                            children: "Class",
                          }),
                          s.jsx("th", {
                            className:
                              "py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                            children: "Level",
                          }),
                        ],
                      }),
                    }),
                    s.jsx("tbody", {
                      className: "divide-y divide-gray-200",
                      children:
                        (e = n.find((a) => a.day === t)) == null
                          ? void 0
                          : e.sessions.map((a, l) =>
                              s.jsxs(
                                "tr",
                                {
                                  className:
                                    "hover:bg-gray-50 transition duration-150",
                                  children: [
                                    s.jsx("td", {
                                      className:
                                        "py-4 px-6 text-sm font-medium text-gray-900",
                                      children: a.time,
                                    }),
                                    s.jsx("td", {
                                      className:
                                        "py-4 px-6 text-sm text-gray-700",
                                      children: a.className,
                                    }),
                                    s.jsx("td", {
                                      className:
                                        "py-4 px-6 text-sm text-gray-500",
                                      children: a.level,
                                    }),
                                  ],
                                },
                                l
                              )
                            ),
                    }),
                  ],
                }),
              }),
              s.jsxs("div", {
                className: "mt-8 text-center",
                children: [
                  s.jsx("p", {
                    className: "text-gray-600 mb-4",
                    children:
                      "Want to join our classes or have questions Sobre the schedule?",
                  }),
                  s.jsx("a", {
                    href: "#contato",
                    className:
                      "px-6 py-3 bg-red-700 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300",
                    children: "contato Us",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Xf = () => {
    const e = [
        {
          id: 1,
          src: "https://images.pexels.com/photos/7045406/pexels-photo-7045406.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Taekwondo class training",
          category: "training",
        },
        {
          id: 2,
          src: "https://images.pexels.com/photos/6253298/pexels-photo-6253298.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Taekwondo kick demonstration",
          category: "technique",
        },
        {
          id: 3,
          src: "https://images.pexels.com/photos/7045396/pexels-photo-7045396.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Students practicing forms",
          category: "training",
        },
        {
          id: 4,
          src: "https://images.pexels.com/photos/7045493/pexels-photo-7045493.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Belt promotion ceremony",
          category: "event",
        },
        {
          id: 5,
          src: "https://images.pexels.com/photos/8612288/pexels-photo-8612288.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Children's class",
          category: "training",
        },
        {
          id: 6,
          src: "https://images.pexels.com/photos/8612909/pexels-photo-8612909.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Breaking boards demonstration",
          category: "technique",
        },
        {
          id: 7,
          src: "https://images.pexels.com/photos/8612894/pexels-photo-8612894.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Competition sparring",
          category: "event",
        },
        {
          id: 8,
          src: "https://images.pexels.com/photos/7045623/pexels-photo-7045623.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Adult advanced class",
          category: "training",
        },
      ],
      n = ["all", ...new Set(e.map((d) => d.category))],
      [t, r] = ae.useState("all"),
      [a, l] = ae.useState(null),
      o = t === "all" ? e : e.filter((d) => d.category === t),
      i = (d) => {
        l(d), (document.body.style.overflow = "hidden");
      },
      u = () => {
        l(null), (document.body.style.overflow = "auto");
      };
    return s.jsxs("section", {
      id: "Galeria",
      className: "py-20 bg-gray-50",
      children: [
        s.jsxs("div", {
          className: "container mx-auto px-4",
          children: [
            s.jsxs("div", {
              className: "text-center mb-16",
              children: [
                s.jsx("h2", {
                  className:
                    "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                  children: "Photo Galeria",
                }),
                s.jsx("p", {
                  className: "text-xl text-gray-600 max-w-2xl mx-auto",
                  children: "Explore our Taekwondo academy in action",
                }),
              ],
            }),
            s.jsx("div", {
              className: "flex flex-wrap justify-center mb-10 gap-2",
              children: n.map((d) =>
                s.jsx(
                  "button",
                  {
                    className: `px-4 py-2 rounded-md font-medium capitalize transition duration-200 ${
                      t === d
                        ? "bg-red-700 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`,
                    onClick: () => r(d),
                    children: d,
                  },
                  d
                )
              ),
            }),
            s.jsx("div", {
              className:
                "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
              children: o.map((d) =>
                s.jsx(
                  "div",
                  {
                    className:
                      "overflow-hidden rounded-lg shadow-md cursor-pointer transform transition duration-300 hover:shadow-xl hover:-translate-y-1",
                    onClick: () => i(d),
                    children: s.jsxs("div", {
                      className: "aspect-w-4 aspect-h-3 relative",
                      children: [
                        s.jsx("img", {
                          src: d.src,
                          alt: d.alt,
                          className: "w-full h-64 object-cover",
                        }),
                        s.jsx("div", {
                          className:
                            "absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300",
                        }),
                      ],
                    }),
                  },
                  d.id
                )
              ),
            }),
          ],
        }),
        a &&
          s.jsx("div", {
            className:
              "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4",
            onClick: u,
            children: s.jsxs("div", {
              className: "max-w-4xl max-h-[90vh] relative",
              onClick: (d) => d.stopPropagation(),
              children: [
                s.jsx("button", {
                  onClick: u,
                  className:
                    "absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition duration-200",
                  "aria-label": "Close",
                  children: s.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-6 w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: s.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M6 18L18 6M6 6l12 12",
                    }),
                  }),
                }),
                s.jsx("img", {
                  src: a.src,
                  alt: a.alt,
                  className: "max-h-[85vh] max-w-full object-contain",
                }),
              ],
            }),
          }),
      ],
    });
  },
  ep = () =>
    s.jsxs("section", {
      className: "py-16 bg-red-700 relative overflow-hidden",
      children: [
        s.jsxs("div", {
          className: "absolute inset-0 opacity-10",
          children: [
            s.jsx("div", {
              className:
                "absolute transform rotate-12 -left-40 -top-40 h-80 w-80 rounded-full border-8 border-white",
            }),
            s.jsx("div", {
              className:
                "absolute transform -rotate-12 -right-40 -bottom-40 h-80 w-80 rounded-full border-8 border-white",
            }),
          ],
        }),
        s.jsx("div", {
          className: "container mx-auto px-4 relative z-10",
          children: s.jsxs("div", {
            className: "text-center",
            children: [
              s.jsx("h2", {
                className: "text-3xl md:text-4xl font-bold text-white mb-6",
                children: "Start Your Taekwondo Journey Today",
              }),
              s.jsx("p", {
                className:
                  "text-xl text-white opacity-90 max-w-2xl mx-auto mb-8",
                children:
                  "Join Master Kim's Taekwondo Academy and discover the transformative power of this ancient martial art.",
              }),
              s.jsxs("div", {
                className: "flex flex-col sm:flex-row justify-center gap-4",
                children: [
                  s.jsx("a", {
                    href: "#contato",
                    className:
                      "px-8 py-3 bg-white text-red-700 font-semibold rounded-md hover:bg-gray-100 transition duration-300",
                    children: "Book a Free Trial Class",
                  }),
                  s.jsx("a", {
                    href: "#classes",
                    className:
                      "px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-red-700 transition duration-300",
                    children: "View Our Programs",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  np = () => {
    const [e, n] = ae.useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        interest: "Little Tigers",
      }),
      [t, r] = ae.useState(!1),
      a = (i) => {
        const { name: u, value: d } = i.target;
        n((g) => ({ ...g, [u]: d }));
      },
      l = (i) => {
        i.preventDefault(),
          console.log("Form submitted:", e),
          r(!0),
          setTimeout(() => {
            r(!1),
              n({
                name: "",
                email: "",
                phone: "",
                message: "",
                interest: "Little Tigers",
              });
          }, 3e3);
      },
      o = () => {
        const i = "5561999999999",
          u = encodeURIComponent(
            "Olá Mestre Riba, gostaria de informações sobre as Classes de Taekwondo!"
          );
        window.open(`https://wa.me/${i}?text=${u}`, "_blank");
      };
    return s.jsx("section", {
      id: "contato",
      className: "py-20",
      children: s.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          s.jsxs("div", {
            className: "text-center mb-16",
            children: [
              s.jsx("h2", {
                className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                children: "Entre em Contato",
              }),
              s.jsx("p", {
                className: "text-xl text-gray-600 max-w-2xl mx-auto",
                children: "Comece sua jornada no Taekwondo hoje mesmo!",
              }),
            ],
          }),
          s.jsxs("div", {
            className: "flex flex-col lg:flex-row gap-12",
            children: [
              s.jsx("div", {
                className: "lg:w-1/2",
                children: s.jsxs("div", {
                  className: "bg-white rounded-lg shadow-lg p-8",
                  children: [
                    s.jsx("h3", {
                      className: "text-2xl font-bold text-gray-900 mb-6",
                      children: "Envie uma Mensagem",
                    }),
                    t
                      ? s.jsx("div", {
                          className:
                            "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4",
                          children:
                            "Obrigado pela sua mensagem! Entraremos em contato em breve.",
                        })
                      : s.jsxs("form", {
                          onSubmit: l,
                          children: [
                            s.jsxs("div", {
                              className: "mb-4",
                              children: [
                                s.jsx("label", {
                                  htmlFor: "name",
                                  className:
                                    "block text-gray-700 font-medium mb-2",
                                  children: "Nome Completo",
                                }),
                                s.jsx("input", {
                                  type: "text",
                                  id: "name",
                                  name: "name",
                                  value: e.name,
                                  onChange: a,
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                  required: !0,
                                }),
                              ],
                            }),
                            s.jsxs("div", {
                              className: "mb-4",
                              children: [
                                s.jsx("label", {
                                  htmlFor: "email",
                                  className:
                                    "block text-gray-700 font-medium mb-2",
                                  children: "Email",
                                }),
                                s.jsx("input", {
                                  type: "email",
                                  id: "email",
                                  name: "email",
                                  value: e.email,
                                  onChange: a,
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                  required: !0,
                                }),
                              ],
                            }),
                            s.jsxs("div", {
                              className: "mb-4",
                              children: [
                                s.jsx("label", {
                                  htmlFor: "phone",
                                  className:
                                    "block text-gray-700 font-medium mb-2",
                                  children: "Telefone",
                                }),
                                s.jsx("input", {
                                  type: "tel",
                                  id: "phone",
                                  name: "phone",
                                  value: e.phone,
                                  onChange: a,
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                }),
                              ],
                            }),
                            s.jsxs("div", {
                              className: "mb-4",
                              children: [
                                s.jsx("label", {
                                  htmlFor: "interest",
                                  className:
                                    "block text-gray-700 font-medium mb-2",
                                  children: "Tenho Interesse Em",
                                }),
                                s.jsxs("select", {
                                  id: "interest",
                                  name: "interest",
                                  value: e.interest,
                                  onChange: a,
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                  children: [
                                    s.jsx("option", {
                                      value: "Little Tigers",
                                      children: "Little Tigers (4-7 anos)",
                                    }),
                                    s.jsx("option", {
                                      value: "Junior Program",
                                      children: "Programa Júnior (8-12 anos)",
                                    }),
                                    s.jsx("option", {
                                      value: "Teen Program",
                                      children: "Programa Teen (13-17 anos)",
                                    }),
                                    s.jsx("option", {
                                      value: "Adult Program",
                                      children: "Programa Adulto (18+)",
                                    }),
                                    s.jsx("option", {
                                      value: "Other",
                                      children: "Outro",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            s.jsxs("div", {
                              className: "mb-6",
                              children: [
                                s.jsx("label", {
                                  htmlFor: "message",
                                  className:
                                    "block text-gray-700 font-medium mb-2",
                                  children: "Mensagem",
                                }),
                                s.jsx("textarea", {
                                  id: "message",
                                  name: "message",
                                  value: e.message,
                                  onChange: a,
                                  rows: 4,
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                  required: !0,
                                }),
                              ],
                            }),
                            s.jsxs("div", {
                              className: "flex flex-col sm:flex-row gap-4",
                              children: [
                                s.jsx("button", {
                                  type: "submit",
                                  className:
                                    "flex-1 bg-red-700 text-white font-semibold py-3 rounded-md hover:bg-red-600 transition duration-300",
                                  children: "Enviar Mensagem",
                                }),
                                s.jsx("button", {
                                  type: "button",
                                  onClick: o,
                                  className:
                                    "flex-1 bg-green-600 text-white font-semibold py-3 rounded-md hover:bg-green-500 transition duration-300",
                                  children: "Contato via WhatsApp",
                                }),
                              ],
                            }),
                          ],
                        }),
                  ],
                }),
              }),
              s.jsx("div", {
                className: "lg:w-1/2",
                children: s.jsxs("div", {
                  className:
                    "bg-white rounded-lg shadow-lg p-8 h-full flex flex-col",
                  children: [
                    s.jsx("h3", {
                      className: "text-2xl font-bold text-gray-900 mb-6",
                      children: "Visite Nosso Dojang",
                    }),
                    s.jsxs("div", {
                      className: "mb-8",
                      children: [
                        s.jsx("h4", {
                          className: "text-lg font-semibold text-gray-800 mb-3",
                          children: "Localização",
                        }),
                        s.jsx("p", {
                          className: "text-gray-700 mb-2",
                          children: "QN 7D Conjunto 1 - Riacho Fundo II",
                        }),
                        s.jsx("p", {
                          className: "text-gray-700 mb-2",
                          children: "Brasília - DF, 71880-010",
                        }),
                        s.jsx("h4", {
                          className:
                            "text-lg font-semibold text-gray-800 mt-6 mb-3",
                          children: "Informações de Contato",
                        }),
                        s.jsx("p", {
                          className: "text-gray-700 mb-2",
                          children: "Mestre Riba",
                        }),
                        s.jsx("p", {
                          className: "text-gray-700 mb-2",
                          children: "WhatsApp: (61) 99999-9999",
                        }),
                        s.jsx("p", {
                          className: "text-gray-700 mb-2",
                          children: "Email: mestre.riba@email.com",
                        }),
                        s.jsx("h4", {
                          className:
                            "text-lg font-semibold text-gray-800 mt-6 mb-3",
                          children: "Horário de Funcionamento",
                        }),
                        s.jsx("p", {
                          className: "text-gray-700 mb-2",
                          children: "Segunda a Sexta: 15:00 - 20:30",
                        }),
                        s.jsx("p", {
                          className: "text-gray-700 mb-2",
                          children: "Sábado: 09:00 - 14:00",
                        }),
                        s.jsx("p", {
                          className: "text-gray-700",
                          children: "Domingo: Fechado",
                        }),
                      ],
                    }),
                    s.jsx("div", {
                      className: "flex-grow rounded-lg overflow-hidden",
                      children: s.jsx("iframe", {
                        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.8675869205407!2d-48.0566!3d-15.9012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDU0JzA0LjMiUyA0OMKwMDMnMjMuOCJX!5e0!3m2!1spt-BR!2sbr!4v1647891234567!5m2!1spt-BR!2sbr",
                        width: "100%",
                        height: "300",
                        style: { border: 0 },
                        allowFullScreen: !0,
                        loading: "lazy",
                        referrerPolicy: "no-referrer-when-downgrade",
                        className: "rounded-lg",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  tp = () => {
    const e = new Date().getFullYear();
    return s.jsx("footer", {
      className: "bg-gray-900 text-white",
      children: s.jsxs("div", {
        className: "container mx-auto px-4 py-12",
        children: [
          s.jsxs("div", {
            className: "flex flex-col md:flex-row justify-between",
            children: [
              s.jsxs("div", {
                className: "mb-8 md:mb-0",
                children: [
                  s.jsxs("h3", {
                    className: "text-2xl font-bold mb-4",
                    children: [
                      "Master Kim's ",
                      s.jsx("span", {
                        className: "text-red-500",
                        children: "Taekwondo",
                      }),
                    ],
                  }),
                  s.jsx("p", {
                    className: "max-w-xs text-gray-400 mb-4",
                    children:
                      "Empowering lives through the ancient art of Taekwondo since 2003. Building stronger bodies and minds for a better future.",
                  }),
                  s.jsxs("div", {
                    className: "flex space-x-4",
                    children: [
                      s.jsx("a", {
                        href: "#",
                        className:
                          "text-gray-400 hover:text-white transition duration-300",
                        "aria-label": "Facebook",
                        children: s.jsx(zf, { size: 20 }),
                      }),
                      s.jsx("a", {
                        href: "#",
                        className:
                          "text-gray-400 hover:text-white transition duration-300",
                        "aria-label": "Instagram",
                        children: s.jsx(Of, { size: 20 }),
                      }),
                      s.jsx("a", {
                        href: "#",
                        className:
                          "text-gray-400 hover:text-white transition duration-300",
                        "aria-label": "YouTube",
                        children: s.jsx(Vf, { size: 20 }),
                      }),
                      s.jsx("a", {
                        href: "#",
                        className:
                          "text-gray-400 hover:text-white transition duration-300",
                        "aria-label": "Twitter",
                        children: s.jsx(Uf, { size: 20 }),
                      }),
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "grid grid-cols-2 md:grid-cols-3 gap-8",
                children: [
                  s.jsxs("div", {
                    children: [
                      s.jsx("h4", {
                        className: "text-lg font-semibold mb-4",
                        children: "Quick Links",
                      }),
                      s.jsx("ul", {
                        className: "space-y-2",
                        children: [
                          "Início",
                          "Classes",
                          "Sobre",
                          "Schedule",
                          "Galeria",
                          "contato",
                        ].map((n) =>
                          s.jsx(
                            "li",
                            {
                              children: s.jsx("a", {
                                href: `#${n.toLowerCase()}`,
                                className:
                                  "text-gray-400 hover:text-white transition duration-200",
                                children: n,
                              }),
                            },
                            n
                          )
                        ),
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("h4", {
                        className: "text-lg font-semibold mb-4",
                        children: "Programs",
                      }),
                      s.jsx("ul", {
                        className: "space-y-2",
                        children: [
                          "Little Tigers",
                          "Junior Program",
                          "Teen Program",
                          "Adult Program",
                          "Private Lessons",
                        ].map((n) =>
                          s.jsx(
                            "li",
                            {
                              children: s.jsx("a", {
                                href: "#classes",
                                className:
                                  "text-gray-400 hover:text-white transition duration-200",
                                children: n,
                              }),
                            },
                            n
                          )
                        ),
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("h4", {
                        className: "text-lg font-semibold mb-4",
                        children: "contato Us",
                      }),
                      s.jsxs("address", {
                        className: "text-gray-400 not-italic",
                        children: [
                          s.jsx("p", {
                            className: "mb-2",
                            children: "123 Martial Arts Way",
                          }),
                          s.jsx("p", {
                            className: "mb-2",
                            children: "Atlanta, GA 30303",
                          }),
                          s.jsx("p", {
                            className: "mb-2",
                            children: "Phone: (555) 123-4567",
                          }),
                          s.jsx("p", { children: "Email: info@masterkim.com" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className:
              "border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center",
            children: [
              s.jsxs("p", {
                className: "text-gray-400 text-sm",
                children: [
                  "© ",
                  e,
                  " Mestre Riba Taekwondo Academia. Todos os direitos reservados.",
                ],
              }),
              s.jsx("div", { className: "mt-4 md:mt-0" }),
            ],
          }),
        ],
      }),
    });
  };
function rp() {
  return (
    ae.useEffect(() => {
      document.title = "Academia de Taekwondo do Riba";
    }, []),
    s.jsxs("div", {
      className: "font-sans",
      children: [
        s.jsx(Wf, {}),
        s.jsx(Hf, {}),
        s.jsx(qf, {}),
        s.jsx(Kf, {}),
        s.jsx(Jf, {}),
        s.jsx(Gf, {}),
        s.jsx(Zf, {}),
        s.jsx(Xf, {}),
        s.jsx(ep, {}),
        s.jsx(np, {}),
        s.jsx(tp, {}),
      ],
    })
  );
}
nc(document.getElementById("root")).render(
  s.jsx(ae.StrictMode, { children: s.jsx(rp, {}) })
);
