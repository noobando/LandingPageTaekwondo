(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
var Ws = { exports: {} },
  tl = {},
  Qs = { exports: {} },
  M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gn = Symbol.for("react.element"),
  lc = Symbol.for("react.portal"),
  oc = Symbol.for("react.fragment"),
  ic = Symbol.for("react.strict_mode"),
  sc = Symbol.for("react.profiler"),
  uc = Symbol.for("react.provider"),
  ac = Symbol.for("react.context"),
  cc = Symbol.for("react.forward_ref"),
  dc = Symbol.for("react.suspense"),
  fc = Symbol.for("react.memo"),
  pc = Symbol.for("react.lazy"),
  Ii = Symbol.iterator;
function mc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ii && e[Ii]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ks = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ys = Object.assign,
  Xs = {};
function on(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Xs),
    (this.updater = n || Ks);
}
on.prototype.isReactComponent = {};
on.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
on.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Gs() {}
Gs.prototype = on.prototype;
function Uo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Xs),
    (this.updater = n || Ks);
}
var $o = (Uo.prototype = new Gs());
$o.constructor = Uo;
Ys($o, on.prototype);
$o.isPureReactComponent = !0;
var Di = Array.isArray,
  Js = Object.prototype.hasOwnProperty,
  Bo = { current: null },
  Zs = { key: !0, ref: !0, __self: !0, __source: !0 };
function qs(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Js.call(t, r) && !Zs.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var a = Array(s), d = 0; d < s; d++) a[d] = arguments[d + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: Gn,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Bo.current,
  };
}
function hc(e, t) {
  return {
    $$typeof: Gn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Vo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gn;
}
function vc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Oi = /\/+/g;
function wl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? vc("" + e.key)
    : t.toString(36);
}
function xr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Gn:
          case lc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + wl(i, 0) : r),
      Di(l)
        ? ((n = ""),
          e != null && (n = e.replace(Oi, "$&/") + "/"),
          xr(l, t, n, "", function (d) {
            return d;
          }))
        : l != null &&
          (Vo(l) &&
            (l = hc(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Oi, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Di(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var a = r + wl(o, s);
      i += xr(o, t, n, a, l);
    }
  else if (((a = mc(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + wl(o, s++)), (i += xr(o, t, n, a, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function nr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    xr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function gc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null },
  wr = { transition: null },
  yc = {
    ReactCurrentDispatcher: ue,
    ReactCurrentBatchConfig: wr,
    ReactCurrentOwner: Bo,
  };
function bs() {
  throw Error("act(...) is not supported in production builds of React.");
}
M.Children = {
  map: nr,
  forEach: function (e, t, n) {
    nr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      nr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      nr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Vo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
M.Component = on;
M.Fragment = oc;
M.Profiler = sc;
M.PureComponent = Uo;
M.StrictMode = ic;
M.Suspense = dc;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yc;
M.act = bs;
M.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ys({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Bo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      Js.call(t, a) &&
        !Zs.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var d = 0; d < a; d++) s[d] = arguments[d + 2];
    r.children = s;
  }
  return { $$typeof: Gn, type: e.type, key: l, ref: o, props: r, _owner: i };
};
M.createContext = function (e) {
  return (
    (e = {
      $$typeof: ac,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: uc, _context: e }),
    (e.Consumer = e)
  );
};
M.createElement = qs;
M.createFactory = function (e) {
  var t = qs.bind(null, e);
  return (t.type = e), t;
};
M.createRef = function () {
  return { current: null };
};
M.forwardRef = function (e) {
  return { $$typeof: cc, render: e };
};
M.isValidElement = Vo;
M.lazy = function (e) {
  return { $$typeof: pc, _payload: { _status: -1, _result: e }, _init: gc };
};
M.memo = function (e, t) {
  return { $$typeof: fc, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function (e) {
  var t = wr.transition;
  wr.transition = {};
  try {
    e();
  } finally {
    wr.transition = t;
  }
};
M.unstable_act = bs;
M.useCallback = function (e, t) {
  return ue.current.useCallback(e, t);
};
M.useContext = function (e) {
  return ue.current.useContext(e);
};
M.useDebugValue = function () {};
M.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
M.useEffect = function (e, t) {
  return ue.current.useEffect(e, t);
};
M.useId = function () {
  return ue.current.useId();
};
M.useImperativeHandle = function (e, t, n) {
  return ue.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function (e, t) {
  return ue.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function (e, t) {
  return ue.current.useLayoutEffect(e, t);
};
M.useMemo = function (e, t) {
  return ue.current.useMemo(e, t);
};
M.useReducer = function (e, t, n) {
  return ue.current.useReducer(e, t, n);
};
M.useRef = function (e) {
  return ue.current.useRef(e);
};
M.useState = function (e) {
  return ue.current.useState(e);
};
M.useSyncExternalStore = function (e, t, n) {
  return ue.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function () {
  return ue.current.useTransition();
};
M.version = "18.3.1";
Qs.exports = M;
var Z = Qs.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xc = Z,
  wc = Symbol.for("react.element"),
  kc = Symbol.for("react.fragment"),
  Sc = Object.prototype.hasOwnProperty,
  Nc = xc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  jc = { key: !0, ref: !0, __self: !0, __source: !0 };
function eu(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Sc.call(t, r) && !jc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: wc,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Nc.current,
  };
}
tl.Fragment = kc;
tl.jsx = eu;
tl.jsxs = eu;
Ws.exports = tl;
var u = Ws.exports,
  tu = { exports: {} },
  xe = {},
  nu = { exports: {} },
  ru = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, _) {
    var T = j.length;
    j.push(_);
    e: for (; 0 < T; ) {
      var W = (T - 1) >>> 1,
        G = j[W];
      if (0 < l(G, _)) (j[W] = _), (j[T] = G), (T = W);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var _ = j[0],
      T = j.pop();
    if (T !== _) {
      j[0] = T;
      e: for (var W = 0, G = j.length, er = G >>> 1; W < er; ) {
        var gt = 2 * (W + 1) - 1,
          xl = j[gt],
          yt = gt + 1,
          tr = j[yt];
        if (0 > l(xl, T))
          yt < G && 0 > l(tr, xl)
            ? ((j[W] = tr), (j[yt] = T), (W = yt))
            : ((j[W] = xl), (j[gt] = T), (W = gt));
        else if (yt < G && 0 > l(tr, T)) (j[W] = tr), (j[yt] = T), (W = yt);
        else break e;
      }
    }
    return _;
  }
  function l(j, _) {
    var T = j.sortIndex - _.sortIndex;
    return T !== 0 ? T : j.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      s = i.now();
    e.unstable_now = function () {
      return i.now() - s;
    };
  }
  var a = [],
    d = [],
    v = 1,
    h = null,
    m = 3,
    x = !1,
    w = !1,
    k = !1,
    F = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(j) {
    for (var _ = n(d); _ !== null; ) {
      if (_.callback === null) r(d);
      else if (_.startTime <= j)
        r(d), (_.sortIndex = _.expirationTime), t(a, _);
      else break;
      _ = n(d);
    }
  }
  function g(j) {
    if (((k = !1), p(j), !w))
      if (n(a) !== null) (w = !0), gl(N);
      else {
        var _ = n(d);
        _ !== null && yl(g, _.startTime - j);
      }
  }
  function N(j, _) {
    (w = !1), k && ((k = !1), f(P), (P = -1)), (x = !0);
    var T = m;
    try {
      for (
        p(_), h = n(a);
        h !== null && (!(h.expirationTime > _) || (j && !_e()));

      ) {
        var W = h.callback;
        if (typeof W == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var G = W(h.expirationTime <= _);
          (_ = e.unstable_now()),
            typeof G == "function" ? (h.callback = G) : h === n(a) && r(a),
            p(_);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var er = !0;
      else {
        var gt = n(d);
        gt !== null && yl(g, gt.startTime - _), (er = !1);
      }
      return er;
    } finally {
      (h = null), (m = T), (x = !1);
    }
  }
  var C = !1,
    E = null,
    P = -1,
    H = 5,
    z = -1;
  function _e() {
    return !(e.unstable_now() - z < H);
  }
  function an() {
    if (E !== null) {
      var j = e.unstable_now();
      z = j;
      var _ = !0;
      try {
        _ = E(!0, j);
      } finally {
        _ ? cn() : ((C = !1), (E = null));
      }
    } else C = !1;
  }
  var cn;
  if (typeof c == "function")
    cn = function () {
      c(an);
    };
  else if (typeof MessageChannel < "u") {
    var Ri = new MessageChannel(),
      rc = Ri.port2;
    (Ri.port1.onmessage = an),
      (cn = function () {
        rc.postMessage(null);
      });
  } else
    cn = function () {
      F(an, 0);
    };
  function gl(j) {
    (E = j), C || ((C = !0), cn());
  }
  function yl(j, _) {
    P = F(function () {
      j(e.unstable_now());
    }, _);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || x || ((w = !0), gl(N));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (j) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = m;
      }
      var T = m;
      m = _;
      try {
        return j();
      } finally {
        m = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, _) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var T = m;
      m = j;
      try {
        return _();
      } finally {
        m = T;
      }
    }),
    (e.unstable_scheduleCallback = function (j, _, T) {
      var W = e.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? W + T : W))
          : (T = W),
        j)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = T + G),
        (j = {
          id: v++,
          callback: _,
          priorityLevel: j,
          startTime: T,
          expirationTime: G,
          sortIndex: -1,
        }),
        T > W
          ? ((j.sortIndex = T),
            t(d, j),
            n(a) === null &&
              j === n(d) &&
              (k ? (f(P), (P = -1)) : (k = !0), yl(g, T - W)))
          : ((j.sortIndex = G), t(a, j), w || x || ((w = !0), gl(N))),
        j
      );
    }),
    (e.unstable_shouldYield = _e),
    (e.unstable_wrapCallback = function (j) {
      var _ = m;
      return function () {
        var T = m;
        m = _;
        try {
          return j.apply(this, arguments);
        } finally {
          m = T;
        }
      };
    });
})(ru);
nu.exports = ru;
var Cc = nu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ec = Z,
  ye = Cc;
function y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
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
var lu = new Set(),
  Ln = {};
function zt(e, t) {
  qt(e, t), qt(e + "Capture", t);
}
function qt(e, t) {
  for (Ln[e] = t, e = 0; e < t.length; e++) lu.add(t[e]);
}
var Ke = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Kl = Object.prototype.hasOwnProperty,
  Pc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Fi = {},
  Ai = {};
function _c(e) {
  return Kl.call(Ai, e)
    ? !0
    : Kl.call(Fi, e)
    ? !1
    : Pc.test(e)
    ? (Ai[e] = !0)
    : ((Fi[e] = !0), !1);
}
function Tc(e, t, n, r) {
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
function Mc(e, t, n, r) {
  if (t === null || typeof t > "u" || Tc(e, t, n, r)) return !0;
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
function ae(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  te[t] = new ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  te[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  te[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  te[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  te[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ho = /[\-:]([a-z])/g;
function Wo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ho, Wo);
    te[t] = new ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ho, Wo);
    te[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ho, Wo);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Qo(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Mc(t, n, l, r) && (n = null),
    r || l === null
      ? _c(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Je = Ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  rr = Symbol.for("react.element"),
  It = Symbol.for("react.portal"),
  Dt = Symbol.for("react.fragment"),
  Ko = Symbol.for("react.strict_mode"),
  Yl = Symbol.for("react.profiler"),
  ou = Symbol.for("react.provider"),
  iu = Symbol.for("react.context"),
  Yo = Symbol.for("react.forward_ref"),
  Xl = Symbol.for("react.suspense"),
  Gl = Symbol.for("react.suspense_list"),
  Xo = Symbol.for("react.memo"),
  qe = Symbol.for("react.lazy"),
  su = Symbol.for("react.offscreen"),
  Ui = Symbol.iterator;
function dn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ui && e[Ui]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var B = Object.assign,
  kl;
function xn(e) {
  if (kl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      kl = (t && t[1]) || "";
    }
  return (
    `
` +
    kl +
    e
  );
}
var Sl = !1;
function Nl(e, t) {
  if (!e || Sl) return "";
  Sl = !0;
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
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (d) {
          r = d;
        }
        e.call(t.prototype);
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
        var l = d.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          s = o.length - 1;
        1 <= i && 0 <= s && l[i] !== o[s];

      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (l[i] !== o[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || l[i] !== o[s])) {
                var a =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    (Sl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? xn(e) : "";
}
function zc(e) {
  switch (e.tag) {
    case 5:
      return xn(e.type);
    case 16:
      return xn("Lazy");
    case 13:
      return xn("Suspense");
    case 19:
      return xn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Nl(e.type, !1)), e;
    case 11:
      return (e = Nl(e.type.render, !1)), e;
    case 1:
      return (e = Nl(e.type, !0)), e;
    default:
      return "";
  }
}
function Jl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Dt:
      return "Fragment";
    case It:
      return "Portal";
    case Yl:
      return "Profiler";
    case Ko:
      return "StrictMode";
    case Xl:
      return "Suspense";
    case Gl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case iu:
        return (e.displayName || "Context") + ".Consumer";
      case ou:
        return (e._context.displayName || "Context") + ".Provider";
      case Yo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Xo:
        return (
          (t = e.displayName || null), t !== null ? t : Jl(e.type) || "Memo"
        );
      case qe:
        (t = e._payload), (e = e._init);
        try {
          return Jl(e(t));
        } catch {}
    }
  return null;
}
function Lc(e) {
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
      return Jl(t);
    case 8:
      return t === Ko ? "StrictMode" : "Mode";
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
function ft(e) {
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
function uu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Rc(e) {
  var t = uu(e) ? "checked" : "value",
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
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function lr(e) {
  e._valueTracker || (e._valueTracker = Rc(e));
}
function au(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = uu(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function zr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Zl(e, t) {
  var n = t.checked;
  return B({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function $i(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ft(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function cu(e, t) {
  (t = t.checked), t != null && Qo(e, "checked", t, !1);
}
function ql(e, t) {
  cu(e, t);
  var n = ft(t.value),
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
    ? bl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && bl(e, t.type, ft(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Bi(e, t, n) {
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
function bl(e, t, n) {
  (t !== "number" || zr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var wn = Array.isArray;
function Kt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ft(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function eo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return B({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Vi(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (wn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ft(n) };
}
function du(e, t) {
  var n = ft(t.value),
    r = ft(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Hi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function fu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function to(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? fu(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var or,
  pu = (function (e) {
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
        or = or || document.createElement("div"),
          or.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = or.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Rn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Nn = {
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
  Ic = ["Webkit", "ms", "Moz", "O"];
Object.keys(Nn).forEach(function (e) {
  Ic.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Nn[t] = Nn[e]);
  });
});
function mu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Nn.hasOwnProperty(e) && Nn[e])
    ? ("" + t).trim()
    : t + "px";
}
function hu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = mu(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Dc = B(
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
function no(e, t) {
  if (t) {
    if (Dc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function ro(e, t) {
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
var lo = null;
function Go(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var oo = null,
  Yt = null,
  Xt = null;
function Wi(e) {
  if ((e = qn(e))) {
    if (typeof oo != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = il(t)), oo(e.stateNode, e.type, t));
  }
}
function vu(e) {
  Yt ? (Xt ? Xt.push(e) : (Xt = [e])) : (Yt = e);
}
function gu() {
  if (Yt) {
    var e = Yt,
      t = Xt;
    if (((Xt = Yt = null), Wi(e), t)) for (e = 0; e < t.length; e++) Wi(t[e]);
  }
}
function yu(e, t) {
  return e(t);
}
function xu() {}
var jl = !1;
function wu(e, t, n) {
  if (jl) return e(t, n);
  jl = !0;
  try {
    return yu(e, t, n);
  } finally {
    (jl = !1), (Yt !== null || Xt !== null) && (xu(), gu());
  }
}
function In(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = il(n);
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
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var io = !1;
if (Ke)
  try {
    var fn = {};
    Object.defineProperty(fn, "passive", {
      get: function () {
        io = !0;
      },
    }),
      window.addEventListener("test", fn, fn),
      window.removeEventListener("test", fn, fn);
  } catch {
    io = !1;
  }
function Oc(e, t, n, r, l, o, i, s, a) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (v) {
    this.onError(v);
  }
}
var jn = !1,
  Lr = null,
  Rr = !1,
  so = null,
  Fc = {
    onError: function (e) {
      (jn = !0), (Lr = e);
    },
  };
function Ac(e, t, n, r, l, o, i, s, a) {
  (jn = !1), (Lr = null), Oc.apply(Fc, arguments);
}
function Uc(e, t, n, r, l, o, i, s, a) {
  if ((Ac.apply(this, arguments), jn)) {
    if (jn) {
      var d = Lr;
      (jn = !1), (Lr = null);
    } else throw Error(y(198));
    Rr || ((Rr = !0), (so = d));
  }
}
function Lt(e) {
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
function ku(e) {
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
function Qi(e) {
  if (Lt(e) !== e) throw Error(y(188));
}
function $c(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Lt(e)), t === null)) throw Error(y(188));
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
        if (o === n) return Qi(l), e;
        if (o === r) return Qi(l), t;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, s = l.child; s; ) {
        if (s === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (s === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = o.child; s; ) {
          if (s === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (s === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Su(e) {
  return (e = $c(e)), e !== null ? Nu(e) : null;
}
function Nu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Nu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ju = ye.unstable_scheduleCallback,
  Ki = ye.unstable_cancelCallback,
  Bc = ye.unstable_shouldYield,
  Vc = ye.unstable_requestPaint,
  Q = ye.unstable_now,
  Hc = ye.unstable_getCurrentPriorityLevel,
  Jo = ye.unstable_ImmediatePriority,
  Cu = ye.unstable_UserBlockingPriority,
  Ir = ye.unstable_NormalPriority,
  Wc = ye.unstable_LowPriority,
  Eu = ye.unstable_IdlePriority,
  nl = null,
  Ue = null;
function Qc(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function")
    try {
      Ue.onCommitFiberRoot(nl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Re = Math.clz32 ? Math.clz32 : Xc,
  Kc = Math.log,
  Yc = Math.LN2;
function Xc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Kc(e) / Yc) | 0)) | 0;
}
var ir = 64,
  sr = 4194304;
function kn(e) {
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
function Dr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~l;
    s !== 0 ? (r = kn(s)) : ((o &= i), o !== 0 && (r = kn(o)));
  } else (i = n & ~l), i !== 0 ? (r = kn(i)) : o !== 0 && (r = kn(o));
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
      (n = 31 - Re(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Gc(e, t) {
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
function Jc(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Re(o),
      s = 1 << i,
      a = l[i];
    a === -1
      ? (!(s & n) || s & r) && (l[i] = Gc(s, t))
      : a <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function uo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Pu() {
  var e = ir;
  return (ir <<= 1), !(ir & 4194240) && (ir = 64), e;
}
function Cl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Jn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Re(t)),
    (e[t] = n);
}
function Zc(e, t) {
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
    var l = 31 - Re(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Zo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Re(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var R = 0;
function _u(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Tu,
  qo,
  Mu,
  zu,
  Lu,
  ao = !1,
  ur = [],
  lt = null,
  ot = null,
  it = null,
  Dn = new Map(),
  On = new Map(),
  et = [],
  qc =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Yi(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      lt = null;
      break;
    case "dragenter":
    case "dragleave":
      ot = null;
      break;
    case "mouseover":
    case "mouseout":
      it = null;
      break;
    case "pointerover":
    case "pointerout":
      Dn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      On.delete(t.pointerId);
  }
}
function pn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = qn(t)), t !== null && qo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function bc(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (lt = pn(lt, e, t, n, r, l)), !0;
    case "dragenter":
      return (ot = pn(ot, e, t, n, r, l)), !0;
    case "mouseover":
      return (it = pn(it, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Dn.set(o, pn(Dn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), On.set(o, pn(On.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Ru(e) {
  var t = kt(e.target);
  if (t !== null) {
    var n = Lt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ku(n)), t !== null)) {
          (e.blockedOn = t),
            Lu(e.priority, function () {
              Mu(n);
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
function kr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = co(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (lo = r), n.target.dispatchEvent(r), (lo = null);
    } else return (t = qn(n)), t !== null && qo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Xi(e, t, n) {
  kr(e) && n.delete(t);
}
function ed() {
  (ao = !1),
    lt !== null && kr(lt) && (lt = null),
    ot !== null && kr(ot) && (ot = null),
    it !== null && kr(it) && (it = null),
    Dn.forEach(Xi),
    On.forEach(Xi);
}
function mn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ao ||
      ((ao = !0),
      ye.unstable_scheduleCallback(ye.unstable_NormalPriority, ed)));
}
function Fn(e) {
  function t(l) {
    return mn(l, e);
  }
  if (0 < ur.length) {
    mn(ur[0], e);
    for (var n = 1; n < ur.length; n++) {
      var r = ur[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    lt !== null && mn(lt, e),
      ot !== null && mn(ot, e),
      it !== null && mn(it, e),
      Dn.forEach(t),
      On.forEach(t),
      n = 0;
    n < et.length;
    n++
  )
    (r = et[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < et.length && ((n = et[0]), n.blockedOn === null); )
    Ru(n), n.blockedOn === null && et.shift();
}
var Gt = Je.ReactCurrentBatchConfig,
  Or = !0;
function td(e, t, n, r) {
  var l = R,
    o = Gt.transition;
  Gt.transition = null;
  try {
    (R = 1), bo(e, t, n, r);
  } finally {
    (R = l), (Gt.transition = o);
  }
}
function nd(e, t, n, r) {
  var l = R,
    o = Gt.transition;
  Gt.transition = null;
  try {
    (R = 4), bo(e, t, n, r);
  } finally {
    (R = l), (Gt.transition = o);
  }
}
function bo(e, t, n, r) {
  if (Or) {
    var l = co(e, t, n, r);
    if (l === null) Dl(e, t, r, Fr, n), Yi(e, r);
    else if (bc(l, e, t, n, r)) r.stopPropagation();
    else if ((Yi(e, r), t & 4 && -1 < qc.indexOf(e))) {
      for (; l !== null; ) {
        var o = qn(l);
        if (
          (o !== null && Tu(o),
          (o = co(e, t, n, r)),
          o === null && Dl(e, t, r, Fr, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Dl(e, t, r, null, n);
  }
}
var Fr = null;
function co(e, t, n, r) {
  if (((Fr = null), (e = Go(r)), (e = kt(e)), e !== null))
    if (((t = Lt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ku(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Fr = e), null;
}
function Iu(e) {
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
      switch (Hc()) {
        case Jo:
          return 1;
        case Cu:
          return 4;
        case Ir:
        case Wc:
          return 16;
        case Eu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nt = null,
  ei = null,
  Sr = null;
function Du() {
  if (Sr) return Sr;
  var e,
    t = ei,
    n = t.length,
    r,
    l = "value" in nt ? nt.value : nt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Sr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Nr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ar() {
  return !0;
}
function Gi() {
  return !1;
}
function we(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? ar
        : Gi),
      (this.isPropagationStopped = Gi),
      this
    );
  }
  return (
    B(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ar));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ar));
      },
      persist: function () {},
      isPersistent: ar,
    }),
    t
  );
}
var sn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ti = we(sn),
  Zn = B({}, sn, { view: 0, detail: 0 }),
  rd = we(Zn),
  El,
  Pl,
  hn,
  rl = B({}, Zn, {
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
    getModifierState: ni,
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
        : (e !== hn &&
            (hn && e.type === "mousemove"
              ? ((El = e.screenX - hn.screenX), (Pl = e.screenY - hn.screenY))
              : (Pl = El = 0),
            (hn = e)),
          El);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Pl;
    },
  }),
  Ji = we(rl),
  ld = B({}, rl, { dataTransfer: 0 }),
  od = we(ld),
  id = B({}, Zn, { relatedTarget: 0 }),
  _l = we(id),
  sd = B({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ud = we(sd),
  ad = B({}, sn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  cd = we(ad),
  dd = B({}, sn, { data: 0 }),
  Zi = we(dd),
  fd = {
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
  pd = {
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
  md = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function hd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = md[e]) ? !!t[e] : !1;
}
function ni() {
  return hd;
}
var vd = B({}, Zn, {
    key: function (e) {
      if (e.key) {
        var t = fd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Nr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? pd[e.keyCode] || "Unidentified"
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
    getModifierState: ni,
    charCode: function (e) {
      return e.type === "keypress" ? Nr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Nr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  gd = we(vd),
  yd = B({}, rl, {
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
  qi = we(yd),
  xd = B({}, Zn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ni,
  }),
  wd = we(xd),
  kd = B({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sd = we(kd),
  Nd = B({}, rl, {
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
  jd = we(Nd),
  Cd = [9, 13, 27, 32],
  ri = Ke && "CompositionEvent" in window,
  Cn = null;
Ke && "documentMode" in document && (Cn = document.documentMode);
var Ed = Ke && "TextEvent" in window && !Cn,
  Ou = Ke && (!ri || (Cn && 8 < Cn && 11 >= Cn)),
  bi = " ",
  es = !1;
function Fu(e, t) {
  switch (e) {
    case "keyup":
      return Cd.indexOf(t.keyCode) !== -1;
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
function Au(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ot = !1;
function Pd(e, t) {
  switch (e) {
    case "compositionend":
      return Au(t);
    case "keypress":
      return t.which !== 32 ? null : ((es = !0), bi);
    case "textInput":
      return (e = t.data), e === bi && es ? null : e;
    default:
      return null;
  }
}
function _d(e, t) {
  if (Ot)
    return e === "compositionend" || (!ri && Fu(e, t))
      ? ((e = Du()), (Sr = ei = nt = null), (Ot = !1), e)
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
      return Ou && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Td = {
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
function ts(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Td[e.type] : t === "textarea";
}
function Uu(e, t, n, r) {
  vu(r),
    (t = Ar(t, "onChange")),
    0 < t.length &&
      ((n = new ti("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var En = null,
  An = null;
function Md(e) {
  Ju(e, 0);
}
function ll(e) {
  var t = Ut(e);
  if (au(t)) return e;
}
function zd(e, t) {
  if (e === "change") return t;
}
var $u = !1;
if (Ke) {
  var Tl;
  if (Ke) {
    var Ml = "oninput" in document;
    if (!Ml) {
      var ns = document.createElement("div");
      ns.setAttribute("oninput", "return;"),
        (Ml = typeof ns.oninput == "function");
    }
    Tl = Ml;
  } else Tl = !1;
  $u = Tl && (!document.documentMode || 9 < document.documentMode);
}
function rs() {
  En && (En.detachEvent("onpropertychange", Bu), (An = En = null));
}
function Bu(e) {
  if (e.propertyName === "value" && ll(An)) {
    var t = [];
    Uu(t, An, e, Go(e)), wu(Md, t);
  }
}
function Ld(e, t, n) {
  e === "focusin"
    ? (rs(), (En = t), (An = n), En.attachEvent("onpropertychange", Bu))
    : e === "focusout" && rs();
}
function Rd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ll(An);
}
function Id(e, t) {
  if (e === "click") return ll(t);
}
function Dd(e, t) {
  if (e === "input" || e === "change") return ll(t);
}
function Od(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var De = typeof Object.is == "function" ? Object.is : Od;
function Un(e, t) {
  if (De(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Kl.call(t, l) || !De(e[l], t[l])) return !1;
  }
  return !0;
}
function ls(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function os(e, t) {
  var n = ls(e);
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
    n = ls(n);
  }
}
function Vu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Vu(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Hu() {
  for (var e = window, t = zr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = zr(e.document);
  }
  return t;
}
function li(e) {
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
function Fd(e) {
  var t = Hu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Vu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && li(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = os(n, o));
        var i = os(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
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
var Ad = Ke && "documentMode" in document && 11 >= document.documentMode,
  Ft = null,
  fo = null,
  Pn = null,
  po = !1;
function is(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  po ||
    Ft == null ||
    Ft !== zr(r) ||
    ((r = Ft),
    "selectionStart" in r && li(r)
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
    (Pn && Un(Pn, r)) ||
      ((Pn = r),
      (r = Ar(fo, "onSelect")),
      0 < r.length &&
        ((t = new ti("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ft))));
}
function cr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var At = {
    animationend: cr("Animation", "AnimationEnd"),
    animationiteration: cr("Animation", "AnimationIteration"),
    animationstart: cr("Animation", "AnimationStart"),
    transitionend: cr("Transition", "TransitionEnd"),
  },
  zl = {},
  Wu = {};
Ke &&
  ((Wu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete At.animationend.animation,
    delete At.animationiteration.animation,
    delete At.animationstart.animation),
  "TransitionEvent" in window || delete At.transitionend.transition);
function ol(e) {
  if (zl[e]) return zl[e];
  if (!At[e]) return e;
  var t = At[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Wu) return (zl[e] = t[n]);
  return e;
}
var Qu = ol("animationend"),
  Ku = ol("animationiteration"),
  Yu = ol("animationstart"),
  Xu = ol("transitionend"),
  Gu = new Map(),
  ss =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function mt(e, t) {
  Gu.set(e, t), zt(t, [e]);
}
for (var Ll = 0; Ll < ss.length; Ll++) {
  var Rl = ss[Ll],
    Ud = Rl.toLowerCase(),
    $d = Rl[0].toUpperCase() + Rl.slice(1);
  mt(Ud, "on" + $d);
}
mt(Qu, "onAnimationEnd");
mt(Ku, "onAnimationIteration");
mt(Yu, "onAnimationStart");
mt("dblclick", "onDoubleClick");
mt("focusin", "onFocus");
mt("focusout", "onBlur");
mt(Xu, "onTransitionEnd");
qt("onMouseEnter", ["mouseout", "mouseover"]);
qt("onMouseLeave", ["mouseout", "mouseover"]);
qt("onPointerEnter", ["pointerout", "pointerover"]);
qt("onPointerLeave", ["pointerout", "pointerover"]);
zt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
zt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
zt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
zt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
zt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
zt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Sn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Bd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));
function us(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Uc(r, t, void 0, e), (e.currentTarget = null);
}
function Ju(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            a = s.instance,
            d = s.currentTarget;
          if (((s = s.listener), a !== o && l.isPropagationStopped())) break e;
          us(l, s, d), (o = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (a = s.instance),
            (d = s.currentTarget),
            (s = s.listener),
            a !== o && l.isPropagationStopped())
          )
            break e;
          us(l, s, d), (o = a);
        }
    }
  }
  if (Rr) throw ((e = so), (Rr = !1), (so = null), e);
}
function D(e, t) {
  var n = t[yo];
  n === void 0 && (n = t[yo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Zu(t, e, 2, !1), n.add(r));
}
function Il(e, t, n) {
  var r = 0;
  t && (r |= 4), Zu(n, e, r, t);
}
var dr = "_reactListening" + Math.random().toString(36).slice(2);
function $n(e) {
  if (!e[dr]) {
    (e[dr] = !0),
      lu.forEach(function (n) {
        n !== "selectionchange" && (Bd.has(n) || Il(n, !1, e), Il(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[dr] || ((t[dr] = !0), Il("selectionchange", !1, t));
  }
}
function Zu(e, t, n, r) {
  switch (Iu(t)) {
    case 1:
      var l = td;
      break;
    case 4:
      l = nd;
      break;
    default:
      l = bo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !io ||
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
function Dl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = kt(s)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  wu(function () {
    var d = o,
      v = Go(n),
      h = [];
    e: {
      var m = Gu.get(e);
      if (m !== void 0) {
        var x = ti,
          w = e;
        switch (e) {
          case "keypress":
            if (Nr(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = gd;
            break;
          case "focusin":
            (w = "focus"), (x = _l);
            break;
          case "focusout":
            (w = "blur"), (x = _l);
            break;
          case "beforeblur":
          case "afterblur":
            x = _l;
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
            x = Ji;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = od;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = wd;
            break;
          case Qu:
          case Ku:
          case Yu:
            x = ud;
            break;
          case Xu:
            x = Sd;
            break;
          case "scroll":
            x = rd;
            break;
          case "wheel":
            x = jd;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = cd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = qi;
        }
        var k = (t & 4) !== 0,
          F = !k && e === "scroll",
          f = k ? (m !== null ? m + "Capture" : null) : m;
        k = [];
        for (var c = d, p; c !== null; ) {
          p = c;
          var g = p.stateNode;
          if (
            (p.tag === 5 &&
              g !== null &&
              ((p = g),
              f !== null && ((g = In(c, f)), g != null && k.push(Bn(c, g, p)))),
            F)
          )
            break;
          c = c.return;
        }
        0 < k.length &&
          ((m = new x(m, w, null, n, v)), h.push({ event: m, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          m &&
            n !== lo &&
            (w = n.relatedTarget || n.fromElement) &&
            (kt(w) || w[Ye]))
        )
          break e;
        if (
          (x || m) &&
          ((m =
            v.window === v
              ? v
              : (m = v.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          x
            ? ((w = n.relatedTarget || n.toElement),
              (x = d),
              (w = w ? kt(w) : null),
              w !== null &&
                ((F = Lt(w)), w !== F || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((x = null), (w = d)),
          x !== w)
        ) {
          if (
            ((k = Ji),
            (g = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = qi),
              (g = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (F = x == null ? m : Ut(x)),
            (p = w == null ? m : Ut(w)),
            (m = new k(g, c + "leave", x, n, v)),
            (m.target = F),
            (m.relatedTarget = p),
            (g = null),
            kt(v) === d &&
              ((k = new k(f, c + "enter", w, n, v)),
              (k.target = p),
              (k.relatedTarget = F),
              (g = k)),
            (F = g),
            x && w)
          )
            t: {
              for (k = x, f = w, c = 0, p = k; p; p = Rt(p)) c++;
              for (p = 0, g = f; g; g = Rt(g)) p++;
              for (; 0 < c - p; ) (k = Rt(k)), c--;
              for (; 0 < p - c; ) (f = Rt(f)), p--;
              for (; c--; ) {
                if (k === f || (f !== null && k === f.alternate)) break t;
                (k = Rt(k)), (f = Rt(f));
              }
              k = null;
            }
          else k = null;
          x !== null && as(h, m, x, k, !1),
            w !== null && F !== null && as(h, F, w, k, !0);
        }
      }
      e: {
        if (
          ((m = d ? Ut(d) : window),
          (x = m.nodeName && m.nodeName.toLowerCase()),
          x === "select" || (x === "input" && m.type === "file"))
        )
          var N = zd;
        else if (ts(m))
          if ($u) N = Dd;
          else {
            N = Rd;
            var C = Ld;
          }
        else
          (x = m.nodeName) &&
            x.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (N = Id);
        if (N && (N = N(e, d))) {
          Uu(h, N, n, v);
          break e;
        }
        C && C(e, m, d),
          e === "focusout" &&
            (C = m._wrapperState) &&
            C.controlled &&
            m.type === "number" &&
            bl(m, "number", m.value);
      }
      switch (((C = d ? Ut(d) : window), e)) {
        case "focusin":
          (ts(C) || C.contentEditable === "true") &&
            ((Ft = C), (fo = d), (Pn = null));
          break;
        case "focusout":
          Pn = fo = Ft = null;
          break;
        case "mousedown":
          po = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (po = !1), is(h, n, v);
          break;
        case "selectionchange":
          if (Ad) break;
        case "keydown":
        case "keyup":
          is(h, n, v);
      }
      var E;
      if (ri)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Ot
          ? Fu(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Ou &&
          n.locale !== "ko" &&
          (Ot || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Ot && (E = Du())
            : ((nt = v),
              (ei = "value" in nt ? nt.value : nt.textContent),
              (Ot = !0))),
        (C = Ar(d, P)),
        0 < C.length &&
          ((P = new Zi(P, e, null, n, v)),
          h.push({ event: P, listeners: C }),
          E ? (P.data = E) : ((E = Au(n)), E !== null && (P.data = E)))),
        (E = Ed ? Pd(e, n) : _d(e, n)) &&
          ((d = Ar(d, "onBeforeInput")),
          0 < d.length &&
            ((v = new Zi("onBeforeInput", "beforeinput", null, n, v)),
            h.push({ event: v, listeners: d }),
            (v.data = E)));
    }
    Ju(h, t);
  });
}
function Bn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ar(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = In(e, n)),
      o != null && r.unshift(Bn(e, o, l)),
      (o = In(e, t)),
      o != null && r.push(Bn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Rt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function as(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      d = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      d !== null &&
      ((s = d),
      l
        ? ((a = In(n, o)), a != null && i.unshift(Bn(n, a, s)))
        : l || ((a = In(n, o)), a != null && i.push(Bn(n, a, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Vd = /\r\n?/g,
  Hd = /\u0000|\uFFFD/g;
function cs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Vd,
      `
`
    )
    .replace(Hd, "");
}
function fr(e, t, n) {
  if (((t = cs(t)), cs(e) !== t && n)) throw Error(y(425));
}
function Ur() {}
var mo = null,
  ho = null;
function vo(e, t) {
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
var go = typeof setTimeout == "function" ? setTimeout : void 0,
  Wd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ds = typeof Promise == "function" ? Promise : void 0,
  Qd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ds < "u"
      ? function (e) {
          return ds.resolve(null).then(e).catch(Kd);
        }
      : go;
function Kd(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ol(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Fn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Fn(t);
}
function st(e) {
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
function fs(e) {
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
var un = Math.random().toString(36).slice(2),
  Ae = "__reactFiber$" + un,
  Vn = "__reactProps$" + un,
  Ye = "__reactContainer$" + un,
  yo = "__reactEvents$" + un,
  Yd = "__reactListeners$" + un,
  Xd = "__reactHandles$" + un;
function kt(e) {
  var t = e[Ae];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ye] || n[Ae])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = fs(e); e !== null; ) {
          if ((n = e[Ae])) return n;
          e = fs(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function qn(e) {
  return (
    (e = e[Ae] || e[Ye]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ut(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function il(e) {
  return e[Vn] || null;
}
var xo = [],
  $t = -1;
function ht(e) {
  return { current: e };
}
function O(e) {
  0 > $t || ((e.current = xo[$t]), (xo[$t] = null), $t--);
}
function I(e, t) {
  $t++, (xo[$t] = e.current), (e.current = t);
}
var pt = {},
  oe = ht(pt),
  fe = ht(!1),
  Et = pt;
function bt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return pt;
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
function pe(e) {
  return (e = e.childContextTypes), e != null;
}
function $r() {
  O(fe), O(oe);
}
function ps(e, t, n) {
  if (oe.current !== pt) throw Error(y(168));
  I(oe, t), I(fe, n);
}
function qu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Lc(e) || "Unknown", l));
  return B({}, n, r);
}
function Br(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || pt),
    (Et = oe.current),
    I(oe, e),
    I(fe, fe.current),
    !0
  );
}
function ms(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = qu(e, t, Et)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      O(fe),
      O(oe),
      I(oe, e))
    : O(fe),
    I(fe, n);
}
var Ve = null,
  sl = !1,
  Fl = !1;
function bu(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
function Gd(e) {
  (sl = !0), bu(e);
}
function vt() {
  if (!Fl && Ve !== null) {
    Fl = !0;
    var e = 0,
      t = R;
    try {
      var n = Ve;
      for (R = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ve = null), (sl = !1);
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), ju(Jo, vt), l);
    } finally {
      (R = t), (Fl = !1);
    }
  }
  return null;
}
var Bt = [],
  Vt = 0,
  Vr = null,
  Hr = 0,
  ke = [],
  Se = 0,
  Pt = null,
  He = 1,
  We = "";
function xt(e, t) {
  (Bt[Vt++] = Hr), (Bt[Vt++] = Vr), (Vr = e), (Hr = t);
}
function ea(e, t, n) {
  (ke[Se++] = He), (ke[Se++] = We), (ke[Se++] = Pt), (Pt = e);
  var r = He;
  e = We;
  var l = 32 - Re(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Re(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (He = (1 << (32 - Re(t) + l)) | (n << l) | r),
      (We = o + e);
  } else (He = (1 << o) | (n << l) | r), (We = e);
}
function oi(e) {
  e.return !== null && (xt(e, 1), ea(e, 1, 0));
}
function ii(e) {
  for (; e === Vr; )
    (Vr = Bt[--Vt]), (Bt[Vt] = null), (Hr = Bt[--Vt]), (Bt[Vt] = null);
  for (; e === Pt; )
    (Pt = ke[--Se]),
      (ke[Se] = null),
      (We = ke[--Se]),
      (ke[Se] = null),
      (He = ke[--Se]),
      (ke[Se] = null);
}
var ge = null,
  ve = null,
  A = !1,
  Le = null;
function ta(e, t) {
  var n = Ne(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function hs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ge = e), (ve = st(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ge = e), (ve = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Pt !== null ? { id: He, overflow: We } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ne(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ge = e),
            (ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function wo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ko(e) {
  if (A) {
    var t = ve;
    if (t) {
      var n = t;
      if (!hs(e, t)) {
        if (wo(e)) throw Error(y(418));
        t = st(n.nextSibling);
        var r = ge;
        t && hs(e, t)
          ? ta(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (A = !1), (ge = e));
      }
    } else {
      if (wo(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (A = !1), (ge = e);
    }
  }
}
function vs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ge = e;
}
function pr(e) {
  if (e !== ge) return !1;
  if (!A) return vs(e), (A = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !vo(e.type, e.memoizedProps))),
    t && (t = ve))
  ) {
    if (wo(e)) throw (na(), Error(y(418)));
    for (; t; ) ta(e, t), (t = st(t.nextSibling));
  }
  if ((vs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ve = st(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = ge ? st(e.stateNode.nextSibling) : null;
  return !0;
}
function na() {
  for (var e = ve; e; ) e = st(e.nextSibling);
}
function en() {
  (ve = ge = null), (A = !1);
}
function si(e) {
  Le === null ? (Le = [e]) : Le.push(e);
}
var Jd = Je.ReactCurrentBatchConfig;
function vn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var s = l.refs;
            i === null ? delete s[o] : (s[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function mr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function gs(e) {
  var t = e._init;
  return t(e._payload);
}
function ra(e) {
  function t(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [c]), (f.flags |= 16)) : p.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = dt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, c, p) {
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
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, c, p, g) {
    return c === null || c.tag !== 6
      ? ((c = Wl(p, f.mode, g)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function a(f, c, p, g) {
    var N = p.type;
    return N === Dt
      ? v(f, c, p.props.children, g, p.key)
      : c !== null &&
        (c.elementType === N ||
          (typeof N == "object" &&
            N !== null &&
            N.$$typeof === qe &&
            gs(N) === c.type))
      ? ((g = l(c, p.props)), (g.ref = vn(f, c, p)), (g.return = f), g)
      : ((g = Mr(p.type, p.key, p.props, null, f.mode, g)),
        (g.ref = vn(f, c, p)),
        (g.return = f),
        g);
  }
  function d(f, c, p, g) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = Ql(p, f.mode, g)), (c.return = f), c)
      : ((c = l(c, p.children || [])), (c.return = f), c);
  }
  function v(f, c, p, g, N) {
    return c === null || c.tag !== 7
      ? ((c = Ct(p, f.mode, g, N)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function h(f, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Wl("" + c, f.mode, p)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case rr:
          return (
            (p = Mr(c.type, c.key, c.props, null, f.mode, p)),
            (p.ref = vn(f, null, c)),
            (p.return = f),
            p
          );
        case It:
          return (c = Ql(c, f.mode, p)), (c.return = f), c;
        case qe:
          var g = c._init;
          return h(f, g(c._payload), p);
      }
      if (wn(c) || dn(c))
        return (c = Ct(c, f.mode, p, null)), (c.return = f), c;
      mr(f, c);
    }
    return null;
  }
  function m(f, c, p, g) {
    var N = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return N !== null ? null : s(f, c, "" + p, g);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case rr:
          return p.key === N ? a(f, c, p, g) : null;
        case It:
          return p.key === N ? d(f, c, p, g) : null;
        case qe:
          return (N = p._init), m(f, c, N(p._payload), g);
      }
      if (wn(p) || dn(p)) return N !== null ? null : v(f, c, p, g, null);
      mr(f, p);
    }
    return null;
  }
  function x(f, c, p, g, N) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (f = f.get(p) || null), s(c, f, "" + g, N);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case rr:
          return (f = f.get(g.key === null ? p : g.key) || null), a(c, f, g, N);
        case It:
          return (f = f.get(g.key === null ? p : g.key) || null), d(c, f, g, N);
        case qe:
          var C = g._init;
          return x(f, c, p, C(g._payload), N);
      }
      if (wn(g) || dn(g)) return (f = f.get(p) || null), v(c, f, g, N, null);
      mr(c, g);
    }
    return null;
  }
  function w(f, c, p, g) {
    for (
      var N = null, C = null, E = c, P = (c = 0), H = null;
      E !== null && P < p.length;
      P++
    ) {
      E.index > P ? ((H = E), (E = null)) : (H = E.sibling);
      var z = m(f, E, p[P], g);
      if (z === null) {
        E === null && (E = H);
        break;
      }
      e && E && z.alternate === null && t(f, E),
        (c = o(z, c, P)),
        C === null ? (N = z) : (C.sibling = z),
        (C = z),
        (E = H);
    }
    if (P === p.length) return n(f, E), A && xt(f, P), N;
    if (E === null) {
      for (; P < p.length; P++)
        (E = h(f, p[P], g)),
          E !== null &&
            ((c = o(E, c, P)), C === null ? (N = E) : (C.sibling = E), (C = E));
      return A && xt(f, P), N;
    }
    for (E = r(f, E); P < p.length; P++)
      (H = x(E, f, P, p[P], g)),
        H !== null &&
          (e && H.alternate !== null && E.delete(H.key === null ? P : H.key),
          (c = o(H, c, P)),
          C === null ? (N = H) : (C.sibling = H),
          (C = H));
    return (
      e &&
        E.forEach(function (_e) {
          return t(f, _e);
        }),
      A && xt(f, P),
      N
    );
  }
  function k(f, c, p, g) {
    var N = dn(p);
    if (typeof N != "function") throw Error(y(150));
    if (((p = N.call(p)), p == null)) throw Error(y(151));
    for (
      var C = (N = null), E = c, P = (c = 0), H = null, z = p.next();
      E !== null && !z.done;
      P++, z = p.next()
    ) {
      E.index > P ? ((H = E), (E = null)) : (H = E.sibling);
      var _e = m(f, E, z.value, g);
      if (_e === null) {
        E === null && (E = H);
        break;
      }
      e && E && _e.alternate === null && t(f, E),
        (c = o(_e, c, P)),
        C === null ? (N = _e) : (C.sibling = _e),
        (C = _e),
        (E = H);
    }
    if (z.done) return n(f, E), A && xt(f, P), N;
    if (E === null) {
      for (; !z.done; P++, z = p.next())
        (z = h(f, z.value, g)),
          z !== null &&
            ((c = o(z, c, P)), C === null ? (N = z) : (C.sibling = z), (C = z));
      return A && xt(f, P), N;
    }
    for (E = r(f, E); !z.done; P++, z = p.next())
      (z = x(E, f, P, z.value, g)),
        z !== null &&
          (e && z.alternate !== null && E.delete(z.key === null ? P : z.key),
          (c = o(z, c, P)),
          C === null ? (N = z) : (C.sibling = z),
          (C = z));
    return (
      e &&
        E.forEach(function (an) {
          return t(f, an);
        }),
      A && xt(f, P),
      N
    );
  }
  function F(f, c, p, g) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Dt &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case rr:
          e: {
            for (var N = p.key, C = c; C !== null; ) {
              if (C.key === N) {
                if (((N = p.type), N === Dt)) {
                  if (C.tag === 7) {
                    n(f, C.sibling),
                      (c = l(C, p.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  C.elementType === N ||
                  (typeof N == "object" &&
                    N !== null &&
                    N.$$typeof === qe &&
                    gs(N) === C.type)
                ) {
                  n(f, C.sibling),
                    (c = l(C, p.props)),
                    (c.ref = vn(f, C, p)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, C);
                break;
              } else t(f, C);
              C = C.sibling;
            }
            p.type === Dt
              ? ((c = Ct(p.props.children, f.mode, g, p.key)),
                (c.return = f),
                (f = c))
              : ((g = Mr(p.type, p.key, p.props, null, f.mode, g)),
                (g.ref = vn(f, c, p)),
                (g.return = f),
                (f = g));
          }
          return i(f);
        case It:
          e: {
            for (C = p.key; c !== null; ) {
              if (c.key === C)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, p.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = Ql(p, f.mode, g)), (c.return = f), (f = c);
          }
          return i(f);
        case qe:
          return (C = p._init), F(f, c, C(p._payload), g);
      }
      if (wn(p)) return w(f, c, p, g);
      if (dn(p)) return k(f, c, p, g);
      mr(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, p)), (c.return = f), (f = c))
          : (n(f, c), (c = Wl(p, f.mode, g)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return F;
}
var tn = ra(!0),
  la = ra(!1),
  Wr = ht(null),
  Qr = null,
  Ht = null,
  ui = null;
function ai() {
  ui = Ht = Qr = null;
}
function ci(e) {
  var t = Wr.current;
  O(Wr), (e._currentValue = t);
}
function So(e, t, n) {
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
function Jt(e, t) {
  (Qr = e),
    (ui = Ht = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (de = !0), (e.firstContext = null));
}
function Ce(e) {
  var t = e._currentValue;
  if (ui !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ht === null)) {
      if (Qr === null) throw Error(y(308));
      (Ht = e), (Qr.dependencies = { lanes: 0, firstContext: e });
    } else Ht = Ht.next = e;
  return t;
}
var St = null;
function di(e) {
  St === null ? (St = [e]) : St.push(e);
}
function oa(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), di(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Xe(e, r)
  );
}
function Xe(e, t) {
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
var be = !1;
function fi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ia(e, t) {
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
function Qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ut(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), L & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Xe(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), di(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Xe(e, n)
  );
}
function jr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Zo(e, n);
  }
}
function ys(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
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
function Kr(e, t, n, r) {
  var l = e.updateQueue;
  be = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var a = s,
      d = a.next;
    (a.next = null), i === null ? (o = d) : (i.next = d), (i = a);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (s = v.lastBaseUpdate),
      s !== i &&
        (s === null ? (v.firstBaseUpdate = d) : (s.next = d),
        (v.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var h = l.baseState;
    (i = 0), (v = d = a = null), (s = o);
    do {
      var m = s.lane,
        x = s.eventTime;
      if ((r & m) === m) {
        v !== null &&
          (v = v.next =
            {
              eventTime: x,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var w = e,
            k = s;
          switch (((m = t), (x = n), k.tag)) {
            case 1:
              if (((w = k.payload), typeof w == "function")) {
                h = w.call(x, h, m);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = k.payload),
                (m = typeof w == "function" ? w.call(x, h, m) : w),
                m == null)
              )
                break e;
              h = B({}, h, m);
              break e;
            case 2:
              be = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [s]) : m.push(s));
      } else
        (x = {
          eventTime: x,
          lane: m,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          v === null ? ((d = v = x), (a = h)) : (v = v.next = x),
          (i |= m);
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        (m = s),
          (s = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (v === null && (a = h),
      (l.baseState = a),
      (l.firstBaseUpdate = d),
      (l.lastBaseUpdate = v),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Tt |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function xs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var bn = {},
  $e = ht(bn),
  Hn = ht(bn),
  Wn = ht(bn);
function Nt(e) {
  if (e === bn) throw Error(y(174));
  return e;
}
function pi(e, t) {
  switch ((I(Wn, t), I(Hn, e), I($e, bn), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : to(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = to(t, e));
  }
  O($e), I($e, t);
}
function nn() {
  O($e), O(Hn), O(Wn);
}
function sa(e) {
  Nt(Wn.current);
  var t = Nt($e.current),
    n = to(t, e.type);
  t !== n && (I(Hn, e), I($e, n));
}
function mi(e) {
  Hn.current === e && (O($e), O(Hn));
}
var U = ht(0);
function Yr(e) {
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
var Al = [];
function hi() {
  for (var e = 0; e < Al.length; e++)
    Al[e]._workInProgressVersionPrimary = null;
  Al.length = 0;
}
var Cr = Je.ReactCurrentDispatcher,
  Ul = Je.ReactCurrentBatchConfig,
  _t = 0,
  $ = null,
  Y = null,
  J = null,
  Xr = !1,
  _n = !1,
  Qn = 0,
  Zd = 0;
function ne() {
  throw Error(y(321));
}
function vi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!De(e[n], t[n])) return !1;
  return !0;
}
function gi(e, t, n, r, l, o) {
  if (
    ((_t = o),
    ($ = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Cr.current = e === null || e.memoizedState === null ? tf : nf),
    (e = n(r, l)),
    _n)
  ) {
    o = 0;
    do {
      if (((_n = !1), (Qn = 0), 25 <= o)) throw Error(y(301));
      (o += 1),
        (J = Y = null),
        (t.updateQueue = null),
        (Cr.current = rf),
        (e = n(r, l));
    } while (_n);
  }
  if (
    ((Cr.current = Gr),
    (t = Y !== null && Y.next !== null),
    (_t = 0),
    (J = Y = $ = null),
    (Xr = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function yi() {
  var e = Qn !== 0;
  return (Qn = 0), e;
}
function Fe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return J === null ? ($.memoizedState = J = e) : (J = J.next = e), J;
}
function Ee() {
  if (Y === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var t = J === null ? $.memoizedState : J.next;
  if (t !== null) (J = t), (Y = e);
  else {
    if (e === null) throw Error(y(310));
    (Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      J === null ? ($.memoizedState = J = e) : (J = J.next = e);
  }
  return J;
}
function Kn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function $l(e) {
  var t = Ee(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = Y,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var s = (i = null),
      a = null,
      d = o;
    do {
      var v = d.lane;
      if ((_t & v) === v)
        a !== null &&
          (a = a.next =
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
          lane: v,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        a === null ? ((s = a = h), (i = r)) : (a = a.next = h),
          ($.lanes |= v),
          (Tt |= v);
      }
      d = d.next;
    } while (d !== null && d !== o);
    a === null ? (i = r) : (a.next = s),
      De(r, t.memoizedState) || (de = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), ($.lanes |= o), (Tt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Bl(e) {
  var t = Ee(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    De(o, t.memoizedState) || (de = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function ua() {}
function aa(e, t) {
  var n = $,
    r = Ee(),
    l = t(),
    o = !De(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (de = !0)),
    (r = r.queue),
    xi(fa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Yn(9, da.bind(null, n, r, l, t), void 0, null),
      q === null)
    )
      throw Error(y(349));
    _t & 30 || ca(n, t, l);
  }
  return l;
}
function ca(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = $.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        ($.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function da(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), pa(t) && ma(e);
}
function fa(e, t, n) {
  return n(function () {
    pa(t) && ma(e);
  });
}
function pa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !De(e, n);
  } catch {
    return !0;
  }
}
function ma(e) {
  var t = Xe(e, 1);
  t !== null && Ie(t, e, 1, -1);
}
function ws(e) {
  var t = Fe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Kn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ef.bind(null, $, e)),
    [t.memoizedState, e]
  );
}
function Yn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = $.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        ($.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ha() {
  return Ee().memoizedState;
}
function Er(e, t, n, r) {
  var l = Fe();
  ($.flags |= e),
    (l.memoizedState = Yn(1 | t, n, void 0, r === void 0 ? null : r));
}
function ul(e, t, n, r) {
  var l = Ee();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Y !== null) {
    var i = Y.memoizedState;
    if (((o = i.destroy), r !== null && vi(r, i.deps))) {
      l.memoizedState = Yn(t, n, o, r);
      return;
    }
  }
  ($.flags |= e), (l.memoizedState = Yn(1 | t, n, o, r));
}
function ks(e, t) {
  return Er(8390656, 8, e, t);
}
function xi(e, t) {
  return ul(2048, 8, e, t);
}
function va(e, t) {
  return ul(4, 2, e, t);
}
function ga(e, t) {
  return ul(4, 4, e, t);
}
function ya(e, t) {
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
function xa(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ul(4, 4, ya.bind(null, t, e), n)
  );
}
function wi() {}
function wa(e, t) {
  var n = Ee();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ka(e, t) {
  var n = Ee();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Sa(e, t, n) {
  return _t & 21
    ? (De(n, t) || ((n = Pu()), ($.lanes |= n), (Tt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (de = !0)), (e.memoizedState = n));
}
function qd(e, t) {
  var n = R;
  (R = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ul.transition;
  Ul.transition = {};
  try {
    e(!1), t();
  } finally {
    (R = n), (Ul.transition = r);
  }
}
function Na() {
  return Ee().memoizedState;
}
function bd(e, t, n) {
  var r = ct(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ja(e))
  )
    Ca(t, n);
  else if (((n = oa(e, t, n, r)), n !== null)) {
    var l = se();
    Ie(n, e, r, l), Ea(n, t, r);
  }
}
function ef(e, t, n) {
  var r = ct(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ja(e)) Ca(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = s), De(s, i))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), di(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = oa(e, t, l, r)),
      n !== null && ((l = se()), Ie(n, e, r, l), Ea(n, t, r));
  }
}
function ja(e) {
  var t = e.alternate;
  return e === $ || (t !== null && t === $);
}
function Ca(e, t) {
  _n = Xr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ea(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Zo(e, n);
  }
}
var Gr = {
    readContext: Ce,
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
  tf = {
    readContext: Ce,
    useCallback: function (e, t) {
      return (Fe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ce,
    useEffect: ks,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Er(4194308, 4, ya.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Er(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Er(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Fe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Fe();
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
        (e = e.dispatch = bd.bind(null, $, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Fe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ws,
    useDebugValue: wi,
    useDeferredValue: function (e) {
      return (Fe().memoizedState = e);
    },
    useTransition: function () {
      var e = ws(!1),
        t = e[0];
      return (e = qd.bind(null, e[1])), (Fe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = $,
        l = Fe();
      if (A) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), q === null)) throw Error(y(349));
        _t & 30 || ca(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        ks(fa.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Yn(9, da.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Fe(),
        t = q.identifierPrefix;
      if (A) {
        var n = We,
          r = He;
        (n = (r & ~(1 << (32 - Re(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Qn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Zd++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  nf = {
    readContext: Ce,
    useCallback: wa,
    useContext: Ce,
    useEffect: xi,
    useImperativeHandle: xa,
    useInsertionEffect: va,
    useLayoutEffect: ga,
    useMemo: ka,
    useReducer: $l,
    useRef: ha,
    useState: function () {
      return $l(Kn);
    },
    useDebugValue: wi,
    useDeferredValue: function (e) {
      var t = Ee();
      return Sa(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = $l(Kn)[0],
        t = Ee().memoizedState;
      return [e, t];
    },
    useMutableSource: ua,
    useSyncExternalStore: aa,
    useId: Na,
    unstable_isNewReconciler: !1,
  },
  rf = {
    readContext: Ce,
    useCallback: wa,
    useContext: Ce,
    useEffect: xi,
    useImperativeHandle: xa,
    useInsertionEffect: va,
    useLayoutEffect: ga,
    useMemo: ka,
    useReducer: Bl,
    useRef: ha,
    useState: function () {
      return Bl(Kn);
    },
    useDebugValue: wi,
    useDeferredValue: function (e) {
      var t = Ee();
      return Y === null ? (t.memoizedState = e) : Sa(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Bl(Kn)[0],
        t = Ee().memoizedState;
      return [e, t];
    },
    useMutableSource: ua,
    useSyncExternalStore: aa,
    useId: Na,
    unstable_isNewReconciler: !1,
  };
function Me(e, t) {
  if (e && e.defaultProps) {
    (t = B({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function No(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : B({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var al = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Lt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = ct(e),
      o = Qe(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = ut(e, o, l)),
      t !== null && (Ie(t, e, l, r), jr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = ct(e),
      o = Qe(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = ut(e, o, l)),
      t !== null && (Ie(t, e, l, r), jr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = se(),
      r = ct(e),
      l = Qe(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ut(e, l, r)),
      t !== null && (Ie(t, e, r, n), jr(t, e, r));
  },
};
function Ss(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Un(n, r) || !Un(l, o)
      : !0
  );
}
function Pa(e, t, n) {
  var r = !1,
    l = pt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ce(o))
      : ((l = pe(t) ? Et : oe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? bt(e, l) : pt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = al),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ns(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && al.enqueueReplaceState(t, t.state, null);
}
function jo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), fi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Ce(o))
    : ((o = pe(t) ? Et : oe.current), (l.context = bt(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (No(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && al.enqueueReplaceState(l, l.state, null),
      Kr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function rn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += zc(r)), (r = r.return);
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
function Vl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Co(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var lf = typeof WeakMap == "function" ? WeakMap : Map;
function _a(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Zr || ((Zr = !0), (Do = r)), Co(e, t);
    }),
    n
  );
}
function Ta(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Co(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Co(e, t),
          typeof r != "function" &&
            (at === null ? (at = new Set([this])) : at.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function js(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new lf();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = xf.bind(null, e, t, n)), t.then(e, e));
}
function Cs(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Es(e, t, n, r, l) {
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
              : ((t = Qe(-1, 1)), (t.tag = 2), ut(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var of = Je.ReactCurrentOwner,
  de = !1;
function ie(e, t, n, r) {
  t.child = e === null ? la(t, null, n, r) : tn(t, e.child, n, r);
}
function Ps(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Jt(t, l),
    (r = gi(e, t, n, r, o, l)),
    (n = yi()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : (A && n && oi(t), (t.flags |= 1), ie(e, t, r, l), t.child)
  );
}
function _s(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !_i(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Ma(e, t, o, r, l))
      : ((e = Mr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Un), n(i, r) && e.ref === t.ref)
    )
      return Ge(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = dt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ma(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Un(o, r) && e.ref === t.ref)
      if (((de = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (de = !0);
      else return (t.lanes = e.lanes), Ge(e, t, l);
  }
  return Eo(e, t, n, r, l);
}
function za(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        I(Qt, he),
        (he |= n);
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
          I(Qt, he),
          (he |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        I(Qt, he),
        (he |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      I(Qt, he),
      (he |= r);
  return ie(e, t, l, n), t.child;
}
function La(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Eo(e, t, n, r, l) {
  var o = pe(n) ? Et : oe.current;
  return (
    (o = bt(t, o)),
    Jt(t, l),
    (n = gi(e, t, n, r, o, l)),
    (r = yi()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : (A && r && oi(t), (t.flags |= 1), ie(e, t, n, l), t.child)
  );
}
function Ts(e, t, n, r, l) {
  if (pe(n)) {
    var o = !0;
    Br(t);
  } else o = !1;
  if ((Jt(t, l), t.stateNode === null))
    Pr(e, t), Pa(t, n, r), jo(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var a = i.context,
      d = n.contextType;
    typeof d == "object" && d !== null
      ? (d = Ce(d))
      : ((d = pe(n) ? Et : oe.current), (d = bt(t, d)));
    var v = n.getDerivedStateFromProps,
      h =
        typeof v == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || a !== d) && Ns(t, i, r, d)),
      (be = !1);
    var m = t.memoizedState;
    (i.state = m),
      Kr(t, r, i, l),
      (a = t.memoizedState),
      s !== r || m !== a || fe.current || be
        ? (typeof v == "function" && (No(t, n, v, r), (a = t.memoizedState)),
          (s = be || Ss(t, n, s, r, m, a, d))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = d),
          (r = s))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      ia(e, t),
      (s = t.memoizedProps),
      (d = t.type === t.elementType ? s : Me(t.type, s)),
      (i.props = d),
      (h = t.pendingProps),
      (m = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ce(a))
        : ((a = pe(n) ? Et : oe.current), (a = bt(t, a)));
    var x = n.getDerivedStateFromProps;
    (v =
      typeof x == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== h || m !== a) && Ns(t, i, r, a)),
      (be = !1),
      (m = t.memoizedState),
      (i.state = m),
      Kr(t, r, i, l);
    var w = t.memoizedState;
    s !== h || m !== w || fe.current || be
      ? (typeof x == "function" && (No(t, n, x, r), (w = t.memoizedState)),
        (d = be || Ss(t, n, d, r, m, w, a) || !1)
          ? (v ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = a),
        (r = d))
      : (typeof i.componentDidUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Po(e, t, n, r, o, l);
}
function Po(e, t, n, r, l, o) {
  La(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && ms(t, n, !1), Ge(e, t, o);
  (r = t.stateNode), (of.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = tn(t, e.child, null, o)), (t.child = tn(t, null, s, o)))
      : ie(e, t, s, o),
    (t.memoizedState = r.state),
    l && ms(t, n, !0),
    t.child
  );
}
function Ra(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ps(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ps(e, t.context, !1),
    pi(e, t.containerInfo);
}
function Ms(e, t, n, r, l) {
  return en(), si(l), (t.flags |= 256), ie(e, t, n, r), t.child;
}
var _o = { dehydrated: null, treeContext: null, retryLane: 0 };
function To(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ia(e, t, n) {
  var r = t.pendingProps,
    l = U.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    I(U, l & 1),
    e === null)
  )
    return (
      ko(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = fl(i, r, 0, null)),
              (e = Ct(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = To(n)),
              (t.memoizedState = _o),
              e)
            : ki(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return sf(e, t, i, r, s, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (s = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = dt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (o = dt(s, o)) : ((o = Ct(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? To(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = _o),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = dt(o, { mode: "visible", children: r.children })),
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
function ki(e, t) {
  return (
    (t = fl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function hr(e, t, n, r) {
  return (
    r !== null && si(r),
    tn(t, e.child, null, n),
    (e = ki(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function sf(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Vl(Error(y(422)))), hr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = fl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Ct(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && tn(t, e.child, null, i),
        (t.child.memoizedState = To(i)),
        (t.memoizedState = _o),
        o);
  if (!(t.mode & 1)) return hr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(y(419))), (r = Vl(o, r, void 0)), hr(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), de || s)) {
    if (((r = q), r !== null)) {
      switch (i & -i) {
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
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Xe(e, l), Ie(r, e, l, -1));
    }
    return Pi(), (r = Vl(Error(y(421)))), hr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = wf.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ve = st(l.nextSibling)),
      (ge = t),
      (A = !0),
      (Le = null),
      e !== null &&
        ((ke[Se++] = He),
        (ke[Se++] = We),
        (ke[Se++] = Pt),
        (He = e.id),
        (We = e.overflow),
        (Pt = t)),
      (t = ki(t, r.children)),
      (t.flags |= 4096),
      t);
}
function zs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), So(e.return, t, n);
}
function Hl(e, t, n, r, l) {
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
function Da(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ie(e, t, r.children, n), (r = U.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && zs(e, n, t);
        else if (e.tag === 19) zs(e, n, t);
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
  if ((I(U, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Yr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Hl(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Yr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Hl(t, !0, n, null, o);
        break;
      case "together":
        Hl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Pr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ge(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Tt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = dt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function uf(e, t, n) {
  switch (t.tag) {
    case 3:
      Ra(t), en();
      break;
    case 5:
      sa(t);
      break;
    case 1:
      pe(t.type) && Br(t);
      break;
    case 4:
      pi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      I(Wr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (I(U, U.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ia(e, t, n)
          : (I(U, U.current & 1),
            (e = Ge(e, t, n)),
            e !== null ? e.sibling : null);
      I(U, U.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Da(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        I(U, U.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), za(e, t, n);
  }
  return Ge(e, t, n);
}
var Oa, Mo, Fa, Aa;
Oa = function (e, t) {
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
};
Mo = function () {};
Fa = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Nt($e.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Zl(e, l)), (r = Zl(e, r)), (o = []);
        break;
      case "select":
        (l = B({}, l, { value: void 0 })),
          (r = B({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = eo(e, l)), (r = eo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ur);
    }
    no(n, r);
    var i;
    n = null;
    for (d in l)
      if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
        if (d === "style") {
          var s = l[d];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (Ln.hasOwnProperty(d)
              ? o || (o = [])
              : (o = o || []).push(d, null));
    for (d in r) {
      var a = r[d];
      if (
        ((s = l != null ? l[d] : void 0),
        r.hasOwnProperty(d) && a !== s && (a != null || s != null))
      )
        if (d === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                s[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (o || (o = []), o.push(d, n)), (n = a);
        else
          d === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (o = o || []).push(d, a))
            : d === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(d, "" + a)
            : d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              (Ln.hasOwnProperty(d)
                ? (a != null && d === "onScroll" && D("scroll", e),
                  o || s === a || (o = []))
                : (o = o || []).push(d, a));
    }
    n && (o = o || []).push("style", n);
    var d = o;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Aa = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function gn(e, t) {
  if (!A)
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
function re(e) {
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
function af(e, t, n) {
  var r = t.pendingProps;
  switch ((ii(t), t.tag)) {
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
      return re(t), null;
    case 1:
      return pe(t.type) && $r(), re(t), null;
    case 3:
      return (
        (r = t.stateNode),
        nn(),
        O(fe),
        O(oe),
        hi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (pr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Le !== null && (Ao(Le), (Le = null)))),
        Mo(e, t),
        re(t),
        null
      );
    case 5:
      mi(t);
      var l = Nt(Wn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Fa(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return re(t), null;
        }
        if (((e = Nt($e.current)), pr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ae] = t), (r[Vn] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Sn.length; l++) D(Sn[l], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D("error", r), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              $i(r, o), D("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                D("invalid", r);
              break;
            case "textarea":
              Vi(r, o), D("invalid", r);
          }
          no(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var s = o[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      fr(r.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      fr(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : Ln.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  D("scroll", r);
            }
          switch (n) {
            case "input":
              lr(r), Bi(r, o, !0);
              break;
            case "textarea":
              lr(r), Hi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ur);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = fu(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ae] = t),
            (e[Vn] = r),
            Oa(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = ro(n, r)), n)) {
              case "dialog":
                D("cancel", e), D("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Sn.length; l++) D(Sn[l], e);
                l = r;
                break;
              case "source":
                D("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                D("error", e), D("load", e), (l = r);
                break;
              case "details":
                D("toggle", e), (l = r);
                break;
              case "input":
                $i(e, r), (l = Zl(e, r)), D("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = B({}, r, { value: void 0 })),
                  D("invalid", e);
                break;
              case "textarea":
                Vi(e, r), (l = eo(e, r)), D("invalid", e);
                break;
              default:
                l = r;
            }
            no(n, l), (s = l);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o];
                o === "style"
                  ? hu(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && pu(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Rn(e, a)
                    : typeof a == "number" && Rn(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Ln.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && D("scroll", e)
                      : a != null && Qo(e, o, a, i));
              }
            switch (n) {
              case "input":
                lr(e), Bi(e, r, !1);
                break;
              case "textarea":
                lr(e), Hi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ft(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Kt(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Kt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ur);
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
      return re(t), null;
    case 6:
      if (e && t.stateNode != null) Aa(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = Nt(Wn.current)), Nt($e.current), pr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ae] = t),
            (o = r.nodeValue !== n) && ((e = ge), e !== null))
          )
            switch (e.tag) {
              case 3:
                fr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  fr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ae] = t),
            (t.stateNode = r);
      }
      return re(t), null;
    case 13:
      if (
        (O(U),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (A && ve !== null && t.mode & 1 && !(t.flags & 128))
          na(), en(), (t.flags |= 98560), (o = !1);
        else if (((o = pr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(y(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(y(317));
            o[Ae] = t;
          } else
            en(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          re(t), (o = !1);
        } else Le !== null && (Ao(Le), (Le = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || U.current & 1 ? X === 0 && (X = 3) : Pi())),
          t.updateQueue !== null && (t.flags |= 4),
          re(t),
          null);
    case 4:
      return (
        nn(), Mo(e, t), e === null && $n(t.stateNode.containerInfo), re(t), null
      );
    case 10:
      return ci(t.type._context), re(t), null;
    case 17:
      return pe(t.type) && $r(), re(t), null;
    case 19:
      if ((O(U), (o = t.memoizedState), o === null)) return re(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) gn(o, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Yr(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    gn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return I(U, (U.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Q() > ln &&
            ((t.flags |= 128), (r = !0), gn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Yr(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              gn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !A)
            )
              return re(t), null;
          } else
            2 * Q() - o.renderingStartTime > ln &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), gn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Q()),
          (t.sibling = null),
          (n = U.current),
          I(U, r ? (n & 1) | 2 : n & 1),
          t)
        : (re(t), null);
    case 22:
    case 23:
      return (
        Ei(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? he & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : re(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function cf(e, t) {
  switch ((ii(t), t.tag)) {
    case 1:
      return (
        pe(t.type) && $r(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        nn(),
        O(fe),
        O(oe),
        hi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return mi(t), null;
    case 13:
      if ((O(U), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        en();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return O(U), null;
    case 4:
      return nn(), null;
    case 10:
      return ci(t.type._context), null;
    case 22:
    case 23:
      return Ei(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vr = !1,
  le = !1,
  df = typeof WeakSet == "function" ? WeakSet : Set,
  S = null;
function Wt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        V(e, t, r);
      }
    else n.current = null;
}
function zo(e, t, n) {
  try {
    n();
  } catch (r) {
    V(e, t, r);
  }
}
var Ls = !1;
function ff(e, t) {
  if (((mo = Or), (e = Hu()), li(e))) {
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
          var i = 0,
            s = -1,
            a = -1,
            d = 0,
            v = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var x;
              h !== n || (l !== 0 && h.nodeType !== 3) || (s = i + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (a = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (x = h.firstChild) !== null;

            )
              (m = h), (h = x);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++d === l && (s = i),
                m === o && ++v === r && (a = i),
                (x = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = x;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ho = { focusedElem: e, selectionRange: n }, Or = !1, S = t; S !== null; )
    if (((t = S), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (S = e);
    else
      for (; S !== null; ) {
        t = S;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var k = w.memoizedProps,
                    F = w.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : Me(t.type, k),
                      F
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
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
        } catch (g) {
          V(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (S = e);
          break;
        }
        S = t.return;
      }
  return (w = Ls), (Ls = !1), w;
}
function Tn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && zo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function cl(e, t) {
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
function Lo(e) {
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
function Ua(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ua(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ae], delete t[Vn], delete t[yo], delete t[Yd], delete t[Xd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function $a(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Rs(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || $a(e.return)) return null;
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
function Ro(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Ur));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ro(e, t, n), e = e.sibling; e !== null; ) Ro(e, t, n), (e = e.sibling);
}
function Io(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Io(e, t, n), e = e.sibling; e !== null; ) Io(e, t, n), (e = e.sibling);
}
var b = null,
  ze = !1;
function Ze(e, t, n) {
  for (n = n.child; n !== null; ) Ba(e, t, n), (n = n.sibling);
}
function Ba(e, t, n) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function")
    try {
      Ue.onCommitFiberUnmount(nl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      le || Wt(n, t);
    case 6:
      var r = b,
        l = ze;
      (b = null),
        Ze(e, t, n),
        (b = r),
        (ze = l),
        b !== null &&
          (ze
            ? ((e = b),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null &&
        (ze
          ? ((e = b),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ol(e.parentNode, n)
              : e.nodeType === 1 && Ol(e, n),
            Fn(e))
          : Ol(b, n.stateNode));
      break;
    case 4:
      (r = b),
        (l = ze),
        (b = n.stateNode.containerInfo),
        (ze = !0),
        Ze(e, t, n),
        (b = r),
        (ze = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && zo(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Ze(e, t, n);
      break;
    case 1:
      if (
        !le &&
        (Wt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          V(n, t, s);
        }
      Ze(e, t, n);
      break;
    case 21:
      Ze(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((le = (r = le) || n.memoizedState !== null), Ze(e, t, n), (le = r))
        : Ze(e, t, n);
      break;
    default:
      Ze(e, t, n);
  }
}
function Is(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new df()),
      t.forEach(function (r) {
        var l = kf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Te(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (b = s.stateNode), (ze = !1);
              break e;
            case 3:
              (b = s.stateNode.containerInfo), (ze = !0);
              break e;
            case 4:
              (b = s.stateNode.containerInfo), (ze = !0);
              break e;
          }
          s = s.return;
        }
        if (b === null) throw Error(y(160));
        Ba(o, i, l), (b = null), (ze = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (d) {
        V(l, t, d);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Va(t, e), (t = t.sibling);
}
function Va(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Te(t, e), Oe(e), r & 4)) {
        try {
          Tn(3, e, e.return), cl(3, e);
        } catch (k) {
          V(e, e.return, k);
        }
        try {
          Tn(5, e, e.return);
        } catch (k) {
          V(e, e.return, k);
        }
      }
      break;
    case 1:
      Te(t, e), Oe(e), r & 512 && n !== null && Wt(n, n.return);
      break;
    case 5:
      if (
        (Te(t, e),
        Oe(e),
        r & 512 && n !== null && Wt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Rn(l, "");
        } catch (k) {
          V(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && cu(l, o),
              ro(s, i);
            var d = ro(s, o);
            for (i = 0; i < a.length; i += 2) {
              var v = a[i],
                h = a[i + 1];
              v === "style"
                ? hu(l, h)
                : v === "dangerouslySetInnerHTML"
                ? pu(l, h)
                : v === "children"
                ? Rn(l, h)
                : Qo(l, v, h, d);
            }
            switch (s) {
              case "input":
                ql(l, o);
                break;
              case "textarea":
                du(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var x = o.value;
                x != null
                  ? Kt(l, !!o.multiple, x, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Kt(l, !!o.multiple, o.defaultValue, !0)
                      : Kt(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Vn] = o;
          } catch (k) {
            V(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((Te(t, e), Oe(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (k) {
          V(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (Te(t, e), Oe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Fn(t.containerInfo);
        } catch (k) {
          V(e, e.return, k);
        }
      break;
    case 4:
      Te(t, e), Oe(e);
      break;
    case 13:
      Te(t, e),
        Oe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (ji = Q())),
        r & 4 && Is(e);
      break;
    case 22:
      if (
        ((v = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((le = (d = le) || v), Te(t, e), (le = d)) : Te(t, e),
        Oe(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !v && e.mode & 1)
        )
          for (S = e, v = e.child; v !== null; ) {
            for (h = S = v; S !== null; ) {
              switch (((m = S), (x = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tn(4, m, m.return);
                  break;
                case 1:
                  Wt(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (k) {
                      V(r, n, k);
                    }
                  }
                  break;
                case 5:
                  Wt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Os(h);
                    continue;
                  }
              }
              x !== null ? ((x.return = m), (S = x)) : Os(h);
            }
            v = v.sibling;
          }
        e: for (v = null, h = e; ; ) {
          if (h.tag === 5) {
            if (v === null) {
              v = h;
              try {
                (l = h.stateNode),
                  d
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = h.stateNode),
                      (a = h.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = mu("display", i)));
              } catch (k) {
                V(e, e.return, k);
              }
            }
          } else if (h.tag === 6) {
            if (v === null)
              try {
                h.stateNode.nodeValue = d ? "" : h.memoizedProps;
              } catch (k) {
                V(e, e.return, k);
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
            v === h && (v = null), (h = h.return);
          }
          v === h && (v = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Te(t, e), Oe(e), r & 4 && Is(e);
      break;
    case 21:
      break;
    default:
      Te(t, e), Oe(e);
  }
}
function Oe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if ($a(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Rn(l, ""), (r.flags &= -33));
          var o = Rs(e);
          Io(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = Rs(e);
          Ro(e, s, i);
          break;
        default:
          throw Error(y(161));
      }
    } catch (a) {
      V(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function pf(e, t, n) {
  (S = e), Ha(e);
}
function Ha(e, t, n) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || vr;
      if (!i) {
        var s = l.alternate,
          a = (s !== null && s.memoizedState !== null) || le;
        s = vr;
        var d = le;
        if (((vr = i), (le = a) && !d))
          for (S = l; S !== null; )
            (i = S),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Fs(l)
                : a !== null
                ? ((a.return = i), (S = a))
                : Fs(l);
        for (; o !== null; ) (S = o), Ha(o), (o = o.sibling);
        (S = l), (vr = s), (le = d);
      }
      Ds(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (S = o)) : Ds(e);
  }
}
function Ds(e) {
  for (; S !== null; ) {
    var t = S;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || cl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !le)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Me(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && xs(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                xs(t, i, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
                var d = t.alternate;
                if (d !== null) {
                  var v = d.memoizedState;
                  if (v !== null) {
                    var h = v.dehydrated;
                    h !== null && Fn(h);
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
        le || (t.flags & 512 && Lo(t));
      } catch (m) {
        V(t, t.return, m);
      }
    }
    if (t === e) {
      S = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function Os(e) {
  for (; S !== null; ) {
    var t = S;
    if (t === e) {
      S = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function Fs(e) {
  for (; S !== null; ) {
    var t = S;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            cl(4, t);
          } catch (a) {
            V(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              V(t, l, a);
            }
          }
          var o = t.return;
          try {
            Lo(t);
          } catch (a) {
            V(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Lo(t);
          } catch (a) {
            V(t, i, a);
          }
      }
    } catch (a) {
      V(t, t.return, a);
    }
    if (t === e) {
      S = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (S = s);
      break;
    }
    S = t.return;
  }
}
var mf = Math.ceil,
  Jr = Je.ReactCurrentDispatcher,
  Si = Je.ReactCurrentOwner,
  je = Je.ReactCurrentBatchConfig,
  L = 0,
  q = null,
  K = null,
  ee = 0,
  he = 0,
  Qt = ht(0),
  X = 0,
  Xn = null,
  Tt = 0,
  dl = 0,
  Ni = 0,
  Mn = null,
  ce = null,
  ji = 0,
  ln = 1 / 0,
  Be = null,
  Zr = !1,
  Do = null,
  at = null,
  gr = !1,
  rt = null,
  qr = 0,
  zn = 0,
  Oo = null,
  _r = -1,
  Tr = 0;
function se() {
  return L & 6 ? Q() : _r !== -1 ? _r : (_r = Q());
}
function ct(e) {
  return e.mode & 1
    ? L & 2 && ee !== 0
      ? ee & -ee
      : Jd.transition !== null
      ? (Tr === 0 && (Tr = Pu()), Tr)
      : ((e = R),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Iu(e.type))),
        e)
    : 1;
}
function Ie(e, t, n, r) {
  if (50 < zn) throw ((zn = 0), (Oo = null), Error(y(185)));
  Jn(e, n, r),
    (!(L & 2) || e !== q) &&
      (e === q && (!(L & 2) && (dl |= n), X === 4 && tt(e, ee)),
      me(e, r),
      n === 1 && L === 0 && !(t.mode & 1) && ((ln = Q() + 500), sl && vt()));
}
function me(e, t) {
  var n = e.callbackNode;
  Jc(e, t);
  var r = Dr(e, e === q ? ee : 0);
  if (r === 0)
    n !== null && Ki(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ki(n), t === 1))
      e.tag === 0 ? Gd(As.bind(null, e)) : bu(As.bind(null, e)),
        Qd(function () {
          !(L & 6) && vt();
        }),
        (n = null);
    else {
      switch (_u(r)) {
        case 1:
          n = Jo;
          break;
        case 4:
          n = Cu;
          break;
        case 16:
          n = Ir;
          break;
        case 536870912:
          n = Eu;
          break;
        default:
          n = Ir;
      }
      n = Za(n, Wa.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Wa(e, t) {
  if (((_r = -1), (Tr = 0), L & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (Zt() && e.callbackNode !== n) return null;
  var r = Dr(e, e === q ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = br(e, r);
  else {
    t = r;
    var l = L;
    L |= 2;
    var o = Ka();
    (q !== e || ee !== t) && ((Be = null), (ln = Q() + 500), jt(e, t));
    do
      try {
        gf();
        break;
      } catch (s) {
        Qa(e, s);
      }
    while (!0);
    ai(),
      (Jr.current = o),
      (L = l),
      K !== null ? (t = 0) : ((q = null), (ee = 0), (t = X));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = uo(e)), l !== 0 && ((r = l), (t = Fo(e, l)))), t === 1)
    )
      throw ((n = Xn), jt(e, 0), tt(e, r), me(e, Q()), n);
    if (t === 6) tt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !hf(l) &&
          ((t = br(e, r)),
          t === 2 && ((o = uo(e)), o !== 0 && ((r = o), (t = Fo(e, o)))),
          t === 1))
      )
        throw ((n = Xn), jt(e, 0), tt(e, r), me(e, Q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          wt(e, ce, Be);
          break;
        case 3:
          if (
            (tt(e, r), (r & 130023424) === r && ((t = ji + 500 - Q()), 10 < t))
          ) {
            if (Dr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              se(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = go(wt.bind(null, e, ce, Be), t);
            break;
          }
          wt(e, ce, Be);
          break;
        case 4:
          if ((tt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Re(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = Q() - r),
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
                : 1960 * mf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = go(wt.bind(null, e, ce, Be), r);
            break;
          }
          wt(e, ce, Be);
          break;
        case 5:
          wt(e, ce, Be);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return me(e, Q()), e.callbackNode === n ? Wa.bind(null, e) : null;
}
function Fo(e, t) {
  var n = Mn;
  return (
    e.current.memoizedState.isDehydrated && (jt(e, t).flags |= 256),
    (e = br(e, t)),
    e !== 2 && ((t = ce), (ce = n), t !== null && Ao(t)),
    e
  );
}
function Ao(e) {
  ce === null ? (ce = e) : ce.push.apply(ce, e);
}
function hf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!De(o(), l)) return !1;
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
function tt(e, t) {
  for (
    t &= ~Ni,
      t &= ~dl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Re(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function As(e) {
  if (L & 6) throw Error(y(327));
  Zt();
  var t = Dr(e, 0);
  if (!(t & 1)) return me(e, Q()), null;
  var n = br(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = uo(e);
    r !== 0 && ((t = r), (n = Fo(e, r)));
  }
  if (n === 1) throw ((n = Xn), jt(e, 0), tt(e, t), me(e, Q()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    wt(e, ce, Be),
    me(e, Q()),
    null
  );
}
function Ci(e, t) {
  var n = L;
  L |= 1;
  try {
    return e(t);
  } finally {
    (L = n), L === 0 && ((ln = Q() + 500), sl && vt());
  }
}
function Mt(e) {
  rt !== null && rt.tag === 0 && !(L & 6) && Zt();
  var t = L;
  L |= 1;
  var n = je.transition,
    r = R;
  try {
    if (((je.transition = null), (R = 1), e)) return e();
  } finally {
    (R = r), (je.transition = n), (L = t), !(L & 6) && vt();
  }
}
function Ei() {
  (he = Qt.current), O(Qt);
}
function jt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Wd(n)), K !== null))
    for (n = K.return; n !== null; ) {
      var r = n;
      switch ((ii(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && $r();
          break;
        case 3:
          nn(), O(fe), O(oe), hi();
          break;
        case 5:
          mi(r);
          break;
        case 4:
          nn();
          break;
        case 13:
          O(U);
          break;
        case 19:
          O(U);
          break;
        case 10:
          ci(r.type._context);
          break;
        case 22:
        case 23:
          Ei();
      }
      n = n.return;
    }
  if (
    ((q = e),
    (K = e = dt(e.current, null)),
    (ee = he = t),
    (X = 0),
    (Xn = null),
    (Ni = dl = Tt = 0),
    (ce = Mn = null),
    St !== null)
  ) {
    for (t = 0; t < St.length; t++)
      if (((n = St[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    St = null;
  }
  return e;
}
function Qa(e, t) {
  do {
    var n = K;
    try {
      if ((ai(), (Cr.current = Gr), Xr)) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Xr = !1;
      }
      if (
        ((_t = 0),
        (J = Y = $ = null),
        (_n = !1),
        (Qn = 0),
        (Si.current = null),
        n === null || n.return === null)
      ) {
        (X = 1), (Xn = t), (K = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          s = n,
          a = t;
        if (
          ((t = ee),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var d = a,
            v = s,
            h = v.tag;
          if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = v.alternate;
            m
              ? ((v.updateQueue = m.updateQueue),
                (v.memoizedState = m.memoizedState),
                (v.lanes = m.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var x = Cs(i);
          if (x !== null) {
            (x.flags &= -257),
              Es(x, i, s, o, t),
              x.mode & 1 && js(o, d, t),
              (t = x),
              (a = d);
            var w = t.updateQueue;
            if (w === null) {
              var k = new Set();
              k.add(a), (t.updateQueue = k);
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              js(o, d, t), Pi();
              break e;
            }
            a = Error(y(426));
          }
        } else if (A && s.mode & 1) {
          var F = Cs(i);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256),
              Es(F, i, s, o, t),
              si(rn(a, s));
            break e;
          }
        }
        (o = a = rn(a, s)),
          X !== 4 && (X = 2),
          Mn === null ? (Mn = [o]) : Mn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = _a(o, a, t);
              ys(o, f);
              break e;
            case 1:
              s = a;
              var c = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (at === null || !at.has(p))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var g = Ta(o, s, t);
                ys(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Xa(n);
    } catch (N) {
      (t = N), K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ka() {
  var e = Jr.current;
  return (Jr.current = Gr), e === null ? Gr : e;
}
function Pi() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    q === null || (!(Tt & 268435455) && !(dl & 268435455)) || tt(q, ee);
}
function br(e, t) {
  var n = L;
  L |= 2;
  var r = Ka();
  (q !== e || ee !== t) && ((Be = null), jt(e, t));
  do
    try {
      vf();
      break;
    } catch (l) {
      Qa(e, l);
    }
  while (!0);
  if ((ai(), (L = n), (Jr.current = r), K !== null)) throw Error(y(261));
  return (q = null), (ee = 0), X;
}
function vf() {
  for (; K !== null; ) Ya(K);
}
function gf() {
  for (; K !== null && !Bc(); ) Ya(K);
}
function Ya(e) {
  var t = Ja(e.alternate, e, he);
  (e.memoizedProps = e.pendingProps),
    t === null ? Xa(e) : (K = t),
    (Si.current = null);
}
function Xa(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = cf(n, t)), n !== null)) {
        (n.flags &= 32767), (K = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (K = null);
        return;
      }
    } else if (((n = af(n, t, he)), n !== null)) {
      K = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function wt(e, t, n) {
  var r = R,
    l = je.transition;
  try {
    (je.transition = null), (R = 1), yf(e, t, n, r);
  } finally {
    (je.transition = l), (R = r);
  }
  return null;
}
function yf(e, t, n, r) {
  do Zt();
  while (rt !== null);
  if (L & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Zc(e, o),
    e === q && ((K = q = null), (ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      gr ||
      ((gr = !0),
      Za(Ir, function () {
        return Zt(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = je.transition), (je.transition = null);
    var i = R;
    R = 1;
    var s = L;
    (L |= 4),
      (Si.current = null),
      ff(e, n),
      Va(n, e),
      Fd(ho),
      (Or = !!mo),
      (ho = mo = null),
      (e.current = n),
      pf(n),
      Vc(),
      (L = s),
      (R = i),
      (je.transition = o);
  } else e.current = n;
  if (
    (gr && ((gr = !1), (rt = e), (qr = l)),
    (o = e.pendingLanes),
    o === 0 && (at = null),
    Qc(n.stateNode),
    me(e, Q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Zr) throw ((Zr = !1), (e = Do), (Do = null), e);
  return (
    qr & 1 && e.tag !== 0 && Zt(),
    (o = e.pendingLanes),
    o & 1 ? (e === Oo ? zn++ : ((zn = 0), (Oo = e))) : (zn = 0),
    vt(),
    null
  );
}
function Zt() {
  if (rt !== null) {
    var e = _u(qr),
      t = je.transition,
      n = R;
    try {
      if (((je.transition = null), (R = 16 > e ? 16 : e), rt === null))
        var r = !1;
      else {
        if (((e = rt), (rt = null), (qr = 0), L & 6)) throw Error(y(331));
        var l = L;
        for (L |= 4, S = e.current; S !== null; ) {
          var o = S,
            i = o.child;
          if (S.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var d = s[a];
                for (S = d; S !== null; ) {
                  var v = S;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tn(8, v, o);
                  }
                  var h = v.child;
                  if (h !== null) (h.return = v), (S = h);
                  else
                    for (; S !== null; ) {
                      v = S;
                      var m = v.sibling,
                        x = v.return;
                      if ((Ua(v), v === d)) {
                        S = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = x), (S = m);
                        break;
                      }
                      S = x;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var F = k.sibling;
                    (k.sibling = null), (k = F);
                  } while (k !== null);
                }
              }
              S = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (S = i);
          else
            e: for (; S !== null; ) {
              if (((o = S), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Tn(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (S = f);
                break e;
              }
              S = o.return;
            }
        }
        var c = e.current;
        for (S = c; S !== null; ) {
          i = S;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) (p.return = i), (S = p);
          else
            e: for (i = c; S !== null; ) {
              if (((s = S), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      cl(9, s);
                  }
                } catch (N) {
                  V(s, s.return, N);
                }
              if (s === i) {
                S = null;
                break e;
              }
              var g = s.sibling;
              if (g !== null) {
                (g.return = s.return), (S = g);
                break e;
              }
              S = s.return;
            }
        }
        if (
          ((L = l), vt(), Ue && typeof Ue.onPostCommitFiberRoot == "function")
        )
          try {
            Ue.onPostCommitFiberRoot(nl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (R = n), (je.transition = t);
    }
  }
  return !1;
}
function Us(e, t, n) {
  (t = rn(n, t)),
    (t = _a(e, t, 1)),
    (e = ut(e, t, 1)),
    (t = se()),
    e !== null && (Jn(e, 1, t), me(e, t));
}
function V(e, t, n) {
  if (e.tag === 3) Us(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Us(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (at === null || !at.has(r)))
        ) {
          (e = rn(n, e)),
            (e = Ta(t, e, 1)),
            (t = ut(t, e, 1)),
            (e = se()),
            t !== null && (Jn(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function xf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    q === e &&
      (ee & n) === n &&
      (X === 4 || (X === 3 && (ee & 130023424) === ee && 500 > Q() - ji)
        ? jt(e, 0)
        : (Ni |= n)),
    me(e, t);
}
function Ga(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = sr), (sr <<= 1), !(sr & 130023424) && (sr = 4194304))
      : (t = 1));
  var n = se();
  (e = Xe(e, t)), e !== null && (Jn(e, t, n), me(e, n));
}
function wf(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ga(e, n);
}
function kf(e, t) {
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
      throw Error(y(314));
  }
  r !== null && r.delete(t), Ga(e, n);
}
var Ja;
Ja = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || fe.current) de = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (de = !1), uf(e, t, n);
      de = !!(e.flags & 131072);
    }
  else (de = !1), A && t.flags & 1048576 && ea(t, Hr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Pr(e, t), (e = t.pendingProps);
      var l = bt(t, oe.current);
      Jt(t, n), (l = gi(null, t, r, e, l, n));
      var o = yi();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            pe(r) ? ((o = !0), Br(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            fi(t),
            (l.updater = al),
            (t.stateNode = l),
            (l._reactInternals = t),
            jo(t, r, e, n),
            (t = Po(null, t, r, !0, o, n)))
          : ((t.tag = 0), A && o && oi(t), ie(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Pr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Nf(r)),
          (e = Me(r, e)),
          l)
        ) {
          case 0:
            t = Eo(null, t, r, e, n);
            break e;
          case 1:
            t = Ts(null, t, r, e, n);
            break e;
          case 11:
            t = Ps(null, t, r, e, n);
            break e;
          case 14:
            t = _s(null, t, r, Me(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        Eo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        Ts(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ra(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          ia(e, t),
          Kr(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = rn(Error(y(423)), t)), (t = Ms(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = rn(Error(y(424)), t)), (t = Ms(e, t, r, n, l));
            break e;
          } else
            for (
              ve = st(t.stateNode.containerInfo.firstChild),
                ge = t,
                A = !0,
                Le = null,
                n = la(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((en(), r === l)) {
            t = Ge(e, t, n);
            break e;
          }
          ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        sa(t),
        e === null && ko(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        vo(r, l) ? (i = null) : o !== null && vo(r, o) && (t.flags |= 32),
        La(e, t),
        ie(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && ko(t), null;
    case 13:
      return Ia(e, t, n);
    case 4:
      return (
        pi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = tn(t, null, r, n)) : ie(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        Ps(e, t, r, l, n)
      );
    case 7:
      return ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          I(Wr, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (De(o.value, i)) {
            if (o.children === l.children && !fe.current) {
              t = Ge(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                i = o.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = Qe(-1, n & -n)), (a.tag = 2);
                      var d = o.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var v = d.pending;
                        v === null
                          ? (a.next = a)
                          : ((a.next = v.next), (v.next = a)),
                          (d.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      So(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(y(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  So(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ie(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Jt(t, n),
        (l = Ce(l)),
        (r = r(l)),
        (t.flags |= 1),
        ie(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Me(r, t.pendingProps)),
        (l = Me(r.type, l)),
        _s(e, t, r, l, n)
      );
    case 15:
      return Ma(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        Pr(e, t),
        (t.tag = 1),
        pe(r) ? ((e = !0), Br(t)) : (e = !1),
        Jt(t, n),
        Pa(t, r, l),
        jo(t, r, l, n),
        Po(null, t, r, !0, e, n)
      );
    case 19:
      return Da(e, t, n);
    case 22:
      return za(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function Za(e, t) {
  return ju(e, t);
}
function Sf(e, t, n, r) {
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
function Ne(e, t, n, r) {
  return new Sf(e, t, n, r);
}
function _i(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Nf(e) {
  if (typeof e == "function") return _i(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Yo)) return 11;
    if (e === Xo) return 14;
  }
  return 2;
}
function dt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ne(e.tag, t, e.key, e.mode)),
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
function Mr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) _i(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Dt:
        return Ct(n.children, l, o, t);
      case Ko:
        (i = 8), (l |= 8);
        break;
      case Yl:
        return (
          (e = Ne(12, n, t, l | 2)), (e.elementType = Yl), (e.lanes = o), e
        );
      case Xl:
        return (e = Ne(13, n, t, l)), (e.elementType = Xl), (e.lanes = o), e;
      case Gl:
        return (e = Ne(19, n, t, l)), (e.elementType = Gl), (e.lanes = o), e;
      case su:
        return fl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ou:
              i = 10;
              break e;
            case iu:
              i = 9;
              break e;
            case Yo:
              i = 11;
              break e;
            case Xo:
              i = 14;
              break e;
            case qe:
              (i = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ne(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Ct(e, t, n, r) {
  return (e = Ne(7, e, r, t)), (e.lanes = n), e;
}
function fl(e, t, n, r) {
  return (
    (e = Ne(22, e, r, t)),
    (e.elementType = su),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Wl(e, t, n) {
  return (e = Ne(6, e, null, t)), (e.lanes = n), e;
}
function Ql(e, t, n) {
  return (
    (t = Ne(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function jf(e, t, n, r, l) {
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
    (this.eventTimes = Cl(0)),
    (this.expirationTimes = Cl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Cl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Ti(e, t, n, r, l, o, i, s, a) {
  return (
    (e = new jf(e, t, n, s, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ne(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    fi(o),
    e
  );
}
function Cf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: It,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function qa(e) {
  if (!e) return pt;
  e = e._reactInternals;
  e: {
    if (Lt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (pe(n)) return qu(e, n, t);
  }
  return t;
}
function ba(e, t, n, r, l, o, i, s, a) {
  return (
    (e = Ti(n, r, !0, e, l, o, i, s, a)),
    (e.context = qa(null)),
    (n = e.current),
    (r = se()),
    (l = ct(n)),
    (o = Qe(r, l)),
    (o.callback = t ?? null),
    ut(n, o, l),
    (e.current.lanes = l),
    Jn(e, l, r),
    me(e, r),
    e
  );
}
function pl(e, t, n, r) {
  var l = t.current,
    o = se(),
    i = ct(l);
  return (
    (n = qa(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Qe(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ut(l, t, i)),
    e !== null && (Ie(e, l, i, o), jr(e, l, i)),
    i
  );
}
function el(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function $s(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Mi(e, t) {
  $s(e, t), (e = e.alternate) && $s(e, t);
}
function Ef() {
  return null;
}
var ec =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function zi(e) {
  this._internalRoot = e;
}
ml.prototype.render = zi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  pl(e, t, null, null);
};
ml.prototype.unmount = zi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Mt(function () {
      pl(null, e, null, null);
    }),
      (t[Ye] = null);
  }
};
function ml(e) {
  this._internalRoot = e;
}
ml.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = zu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++);
    et.splice(n, 0, e), n === 0 && Ru(e);
  }
};
function Li(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function hl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Bs() {}
function Pf(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var d = el(i);
        o.call(d);
      };
    }
    var i = ba(t, r, e, 0, null, !1, !1, "", Bs);
    return (
      (e._reactRootContainer = i),
      (e[Ye] = i.current),
      $n(e.nodeType === 8 ? e.parentNode : e),
      Mt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var d = el(a);
      s.call(d);
    };
  }
  var a = Ti(e, 0, !1, null, null, !1, !1, "", Bs);
  return (
    (e._reactRootContainer = a),
    (e[Ye] = a.current),
    $n(e.nodeType === 8 ? e.parentNode : e),
    Mt(function () {
      pl(t, a, n, r);
    }),
    a
  );
}
function vl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var a = el(i);
        s.call(a);
      };
    }
    pl(t, i, e, l);
  } else i = Pf(n, t, e, l, r);
  return el(i);
}
Tu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = kn(t.pendingLanes);
        n !== 0 &&
          (Zo(t, n | 1), me(t, Q()), !(L & 6) && ((ln = Q() + 500), vt()));
      }
      break;
    case 13:
      Mt(function () {
        var r = Xe(e, 1);
        if (r !== null) {
          var l = se();
          Ie(r, e, 1, l);
        }
      }),
        Mi(e, 1);
  }
};
qo = function (e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = se();
      Ie(t, e, 134217728, n);
    }
    Mi(e, 134217728);
  }
};
Mu = function (e) {
  if (e.tag === 13) {
    var t = ct(e),
      n = Xe(e, t);
    if (n !== null) {
      var r = se();
      Ie(n, e, t, r);
    }
    Mi(e, t);
  }
};
zu = function () {
  return R;
};
Lu = function (e, t) {
  var n = R;
  try {
    return (R = e), t();
  } finally {
    R = n;
  }
};
oo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ql(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = il(r);
            if (!l) throw Error(y(90));
            au(r), ql(r, l);
          }
        }
      }
      break;
    case "textarea":
      du(e, n);
      break;
    case "select":
      (t = n.value), t != null && Kt(e, !!n.multiple, t, !1);
  }
};
yu = Ci;
xu = Mt;
var _f = { usingClientEntryPoint: !1, Events: [qn, Ut, il, vu, gu, Ci] },
  yn = {
    findFiberByHostInstance: kt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Tf = {
    bundleType: yn.bundleType,
    version: yn.version,
    rendererPackageName: yn.rendererPackageName,
    rendererConfig: yn.rendererConfig,
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
      return (e = Su(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: yn.findFiberByHostInstance || Ef,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var yr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yr.isDisabled && yr.supportsFiber)
    try {
      (nl = yr.inject(Tf)), (Ue = yr);
    } catch {}
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _f;
xe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Li(t)) throw Error(y(200));
  return Cf(e, t, null, n);
};
xe.createRoot = function (e, t) {
  if (!Li(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = ec;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Ti(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ye] = t.current),
    $n(e.nodeType === 8 ? e.parentNode : e),
    new zi(t)
  );
};
xe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = Su(t)), (e = e === null ? null : e.stateNode), e;
};
xe.flushSync = function (e) {
  return Mt(e);
};
xe.hydrate = function (e, t, n) {
  if (!hl(t)) throw Error(y(200));
  return vl(null, e, t, !0, n);
};
xe.hydrateRoot = function (e, t, n) {
  if (!Li(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = ec;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = ba(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ye] = t.current),
    $n(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new ml(t);
};
xe.render = function (e, t, n) {
  if (!hl(t)) throw Error(y(200));
  return vl(null, e, t, !1, n);
};
xe.unmountComponentAtNode = function (e) {
  if (!hl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Mt(function () {
        vl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
xe.unstable_batchedUpdates = Ci;
xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!hl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return vl(e, t, n, !1, r);
};
xe.version = "18.3.1-next-f1338f8080-20240426";
function tc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tc);
    } catch (e) {
      console.error(e);
    }
}
tc(), (tu.exports = xe);
var Mf = tu.exports,
  nc,
  Vs = Mf;
(nc = Vs.createRoot), Vs.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var zf = {
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
 */ const Lf = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  Pe = (e, t) => {
    const n = Z.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: i,
          className: s = "",
          children: a,
          ...d
        },
        v
      ) =>
        Z.createElement(
          "svg",
          {
            ref: v,
            ...zf,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: i ? (Number(o) * 24) / Number(l) : o,
            className: ["lucide", `lucide-${Lf(e)}`, s].join(" "),
            ...d,
          },
          [
            ...t.map(([h, m]) => Z.createElement(h, m)),
            ...(Array.isArray(a) ? a : [a]),
          ]
        )
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rf = Pe("Brain", [
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
 */ const If = Pe("Facebook", [
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
 */ const Df = Pe("Heart", [
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
 */ const Of = Pe("Instagram", [
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
 */ const Ff = Pe("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Af = Pe("Shield", [
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
 */ const Uf = Pe("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $f = Pe("Trophy", [
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
 */ const Bf = Pe("Twitter", [
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
 */ const Vf = Pe("Users", [
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
 */ const Hf = Pe("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wf = Pe("Youtube", [
    [
      "path",
      {
        d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
        key: "1q2vi4",
      },
    ],
    ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }],
  ]),
  Qf = () => {
    const [e, t] = Z.useState(!1),
      [n, r] = Z.useState(!1);
    return (
      Z.useEffect(() => {
        const l = () => {
          window.scrollY > 50 ? r(!0) : r(!1);
        };
        return (
          window.addEventListener("scroll", l),
          () => window.removeEventListener("scroll", l)
        );
      }, []),
      u.jsxs("nav", {
        className: `fixed w-full z-50 transition-all duration-300 ${
          n ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`,
        children: [
          u.jsxs("div", {
            className:
              "container mx-auto px-4 flex justify-between items-center",
            children: [
              u.jsxs("a", {
                href: "#",
                className: "text-2xl font-bold flex items-center gap-2",
                children: [
                  u.jsx("span", {
                    className: `${n ? "text-red-700" : "text-white"}`,
                    children: "Taekwondo",
                  }),
                  u.jsx("span", {
                    className: `${n ? "text-gray-800" : "text-white"}`,
                    children: "Águia",
                  }),
                ],
              }),
              u.jsx("div", {
                className: "hidden md:flex space-x-8",
                children: [
                  "Início",
                  "Classes",
                  "Sobre",
                  "Horários",
                  "Galeria",
                  "Contato",
                ].map((l) =>
                  u.jsx(
                    "a",
                    {
                      href: `#${l.toLowerCase()}`,
                      className: `font-medium transition-colors duration-200 hover:text-red-600 ${
                        n ? "text-gray-800" : "text-white"
                      }`,
                      children: l,
                    },
                    l
                  )
                ),
              }),
              u.jsx("button", {
                className: "md:hidden",
                onClick: () => t(!e),
                "aria-label": "Toggle menu",
                children: e
                  ? u.jsx(Hf, {
                      className: `h-6 w-6 ${
                        n ? "text-gray-800" : "text-white"
                      }`,
                    })
                  : u.jsx(Ff, {
                      className: `h-6 w-6 ${
                        n ? "text-gray-800" : "text-white"
                      }`,
                    }),
              }),
            ],
          }),
          e &&
            u.jsx("div", {
              className: "md:hidden bg-white",
              children: u.jsx("div", {
                className: "px-2 pt-2 pb-3 space-y-1",
                children: [
                  "Início",
                  "Classes",
                  "Sobre",
                  "Schedule",
                  "Gallery",
                  "Contact",
                ].map((l) =>
                  u.jsx(
                    "a",
                    {
                      href: `#${l.toLowerCase()}`,
                      className:
                        "block px-3 py-2 text-gray-800 font-medium hover:bg-red-50 hover:text-red-700 rounded-md",
                      onClick: () => t(!1),
                      children: l,
                    },
                    l
                  )
                ),
              }),
            }),
        ],
      })
    );
  },
  Kf = "/assets/capa1-XFmwbN81.jpg",
  Yf = "/assets/capa2-BlT4UBL3.jpg",
  Xf = "/assets/capa3-BUV7a48V.jpeg",
  Gf = "/assets/selfie_riba1-Bk4Izd1p.jpg",
  Hs = [
    { src: Kf, position: "40% center" },
    { src: Yf, position: "86% 20%" },
    { src: Xf, position: "53% center" },
    { src: Gf, position: "55% center" },
  ],
  Jf = () => {
    const [e, t] = Z.useState(0);
    return (
      Z.useEffect(() => {
        const n = setInterval(() => {
          t((r) => (r === Hs.length - 1 ? 0 : r + 1));
        }, 5e3);
        return () => clearInterval(n);
      }, []),
      u.jsxs("section", {
        id: "Início",
        className:
          "relative h-screen flex items-center justify-center overflow-hidden",
        children: [
          Hs.map((n, r) =>
            u.jsx(
              "div",
              {
                className: `absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 ${
                  r === e ? "opacity-100" : "opacity-0"
                }`,
                style: {
                  backgroundImage: `url(${n.src})`,
                  backgroundPosition: n.position,
                },
              },
              r
            )
          ),
          u.jsx("div", {
            className: "absolute inset-0 bg-black bg-opacity-50",
          }),
          u.jsxs("div", {
            className: "relative z-10 text-center px-4 sm:px-8 max-w-3xl",
            children: [
              u.jsxs("h1", {
                className:
                  "text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight",
                children: [
                  "Descubra a Arte do ",
                  u.jsx("span", {
                    className: "text-red-500",
                    children: "Taekwondo",
                  }),
                ],
              }),
              u.jsx("p", {
                className: "text-xl sm:text-2xl text-white mb-8",
                children:
                  "Disciplina, Respeito e Excelência. Junte-se à Academia do Mestre Riba hoje.",
              }),
              u.jsxs("div", {
                className: "flex flex-col sm:flex-row gap-4 justify-center",
                children: [
                  u.jsx("a", {
                    href: "#contact",
                    className:
                      "px-8 py-3 bg-red-700 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300 transform hover:scale-105",
                    children: "Aula Experimental Grátis",
                  }),
                  u.jsx("a", {
                    href: "#classes",
                    className:
                      "px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-gray-900 transition duration-300",
                    children: "Explorar Classes",
                  }),
                ],
              }),
            ],
          }),
          u.jsx("div", {
            className:
              "absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center w-full",
            children: u.jsx("a", {
              href: "#classes",
              className: "text-white",
              children: u.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-10 w-10",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: u.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M19 14l-7 7m0 0l-7-7m7 7V3",
                }),
              }),
            }),
          }),
        ],
      })
    );
  },
  Zf = ({ title: e, description: t, image: n, suitable: r }) =>
    u.jsxs("div", {
      className:
        "flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1",
      children: [
        u.jsx("div", {
          className: "h-48 overflow-hidden",
          children: u.jsx("img", {
            src: n,
            alt: e,
            className:
              "w-full h-full object-cover transition-transform duration-500 hover:scale-110",
          }),
        }),
        u.jsxs("div", {
          className: "flex-1 bg-white p-6 flex flex-col",
          children: [
            u.jsx("h3", {
              className: "text-xl font-bold text-gray-900 mb-2",
              children: e,
            }),
            u.jsxs("p", {
              className: "text-sm text-red-600 font-medium mb-4",
              children: ["Suitable for: ", r],
            }),
            u.jsx("p", {
              className: "text-gray-600 mb-4 flex-grow",
              children: t,
            }),
            u.jsx("a", {
              href: "#contact",
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
          "https://images.pexels.com/photos/8612284/pexels-photo-8612284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        suitable: "Ages 4-7",
      },
      {
        title: "Junior Program",
        description:
          "Perfect for children 8-12 years old. Develops strong foundations in Taekwondo techniques while teaching respect, focus, and self-discipline.",
        image:
          "https://images.pexels.com/photos/7045671/pexels-photo-7045671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        suitable: "Ages 8-12",
      },
      {
        title: "Teen Program",
        description:
          "Designed for teenagers to develop advanced techniques, physical fitness, mental resilience, and leadership skills in a supportive environment.",
        image:
          "https://images.pexels.com/photos/6253298/pexels-photo-6253298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        suitable: "Ages 13-17",
      },
      {
        title: "Adult Program",
        description:
          "Comprehensive training for adults of all fitness levels. Focus on self-defense, physical conditioning, stress reduction, and personal achievement.",
        image:
          "https://images.pexels.com/photos/7045623/pexels-photo-7045623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        suitable: "Ages 18+",
      },
    ];
    return u.jsx("section", {
      id: "classes",
      className: "py-20 bg-gray-50",
      children: u.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          u.jsxs("div", {
            className: "text-center mb-16",
            children: [
              u.jsx("h2", {
                className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                children: "Nossas Turmas",
              }),
              u.jsx("p", {
                className: "text-xl text-gray-600 max-w-2xl mx-auto",
                children:
                  "Descubra o programa de Taekwondo perfeito para sua idade e nível de habilidade",
              }),
            ],
          }),
          u.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
            children: e.map((t, n) => u.jsx(Zf, { ...t }, n)),
          }),
          u.jsx("div", {
            className: "mt-16 text-center",
            children: u.jsx("a", {
              href: "#schedule",
              className:
                "px-8 py-3 bg-red-700 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300",
              children: "Veja Horários das Aulas",
            }),
          }),
        ],
      }),
    });
  },
  bf = "/assets/selfie_riba-CI7FxQJB.jpg",
  ep = () => {
    const e = [
      "Faixa Preta 8º Dan em Taekwondo",
      "Mais de 20 anos de experiência em ensino",
      "Ex-Técnico da Seleção Regional",
      "Medalista em Campeonatos Nacionais",
      "Instrutor Master Certificado",
    ];
    return u.jsx("section", {
      id: "Sobre",
      className: "py-20",
      children: u.jsx("div", {
        className: "container mx-auto px-4",
        children: u.jsxs("div", {
          className: "flex flex-col lg:flex-row items-center gap-12",
          children: [
            u.jsx("div", {
              className: "lg:w-1/2",
              children: u.jsx("img", {
                src: bf,
                alt: "Mestre Riba ensinando",
                className: "rounded-lg shadow-xl w-full h-[700px] object-cover",
                style: { objectPosition: "50% 40%" },
              }),
            }),
            u.jsxs("div", {
              className: "lg:w-1/2",
              children: [
                u.jsx("h2", {
                  className:
                    "text-3xl md:text-4xl font-bold text-gray-900 mb-6",
                  children: "Sobre o Mestre Riba",
                }),
                u.jsx("p", {
                  className: "text-gray-700 mb-6 leading-relaxed",
                  children:
                    "Com mais de duas décadas de experiência em Taekwondo, Mestre Riba dedicou sua vida ao domínio e ensino desta arte marcial coreana. Sua jornada começou aos 7 anos e o levou através de competições internacionais, treinamento avançado e anos de ensino para alunos de todas as idades.",
                }),
                u.jsx("p", {
                  className: "text-gray-700 mb-6 leading-relaxed",
                  children:
                    "A filosofia de ensino do Mestre Riba concentra-se no desenvolvimento não apenas das habilidades físicas, mas também da disciplina mental, confiança e respeito. Ele acredita que o Taekwondo é um caminho para o crescimento pessoal que se estende muito além do dojang (sala de treinamento).",
                }),
                u.jsx("h3", {
                  className: "text-xl font-semibold text-gray-900 mb-4",
                  children: "Conquistas & Credenciais",
                }),
                u.jsx("ul", {
                  className: "space-y-2 mb-8",
                  children: e.map((t, n) =>
                    u.jsxs(
                      "li",
                      {
                        className: "flex items-start",
                        children: [
                          u.jsx("span", {
                            className: "text-red-600 mr-2",
                            children: "✓",
                          }),
                          u.jsx("span", {
                            className: "text-gray-700",
                            children: t,
                          }),
                        ],
                      },
                      n
                    )
                  ),
                }),
                u.jsx("blockquote", {
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
  tp = ({ icon: e, title: t, description: n }) =>
    u.jsxs("div", {
      className:
        "bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-xl",
      children: [
        u.jsx("div", { className: "text-red-600 mb-4", children: e }),
        u.jsx("h3", {
          className: "text-xl font-semibold text-gray-900 mb-2",
          children: t,
        }),
        u.jsx("p", { className: "text-gray-600", children: n }),
      ],
    }),
  np = () => {
    const e = [
      {
        icon: u.jsx(Af, { className: "h-10 w-10" }),
        title: "Autodefesa",
        description:
          "Aprenda técnicas práticas e eficazes para se proteger e ganhar confiança em qualquer situação.",
      },
      {
        icon: u.jsx(Df, { className: "h-10 w-10" }),
        title: "Aptidão Física",
        description:
          "Melhore força, flexibilidade, resistência cardiovascular e saúde geral por meio de treinamento dinâmico.",
      },
      {
        icon: u.jsx(Rf, { className: "h-10 w-10" }),
        title: "Disciplina Mental",
        description:
          "Desenvolva foco, autocontrole e resiliência mental que se traduz em sucesso em todas as áreas da vida.",
      },
      {
        icon: u.jsx(Vf, { className: "h-10 w-10" }),
        title: "Comunidade",
        description:
          "Junte-se a uma comunidade solidária que incentiva o crescimento pessoal e amizades duradouras.",
      },
      {
        icon: u.jsx(Uf, { className: "h-10 w-10" }),
        title: "Definição de Metas",
        description:
          "Progrida no sistema de faixas com metas claras e conquistas que fortalecem a autoconfiança.",
      },
      {
        icon: u.jsx($f, { className: "h-10 w-10" }),
        title: "Competição",
        description:
          "Teste suas habilidades em diversos formatos competitivos, desde formas até sparring em níveis locais e nacionais.",
      },
    ];
    return u.jsx("section", {
      className: "py-20 bg-gray-50",
      children: u.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          u.jsxs("div", {
            className: "text-center mb-16",
            children: [
              u.jsx("h2", {
                className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                children: "Benefícios do Taekwondo",
              }),
              u.jsx("p", {
                className: "text-xl text-gray-600 max-w-2xl mx-auto",
                children:
                  "Descubra como o treinamento de Taekwondo pode transformar sua vida fisicamente, mentalmente e socialmente",
              }),
            ],
          }),
          u.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
            children: e.map((t, n) => u.jsx(tp, { ...t }, n)),
          }),
          u.jsx("div", {
            className: "mt-16 text-center",
            children: u.jsx("a", {
              href: "#contact",
              className:
                "px-8 py-3 bg-red-700 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300 transform hover:scale-105",
              children: "Inicie sua jornada hoje",
            }),
          }),
        ],
      }),
    });
  },
  rp = "/assets/flavis_riba-Qob0LZK0.jpg",
  lp = () => {
    const e = [
        {
          name: "Flávia de Andrade",
          role: "Faixa Preta",
          image: rp,
          quote:
            "Como um profissional ocupado, o Taekwondo se tornou meu santuário. O estilo de ensino do Mestre Riba torna cada aula desafiadora e gratificante. Estou na melhor forma da minha vida e fiz grandes amigos ao longo do caminho.",
        },
        {
          name: "David Chen",
          role: "Adult Student, 2 Years",
          image:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          quote:
            "Como um profissional ocupado, o Taekwondo se tornou meu santuário. O estilo de ensino do Mestre Riba torna cada aula desafiadora e gratificante. Estou na melhor forma da minha vida e fiz grandes amigos ao longo do caminho.",
        },
        {
          name: "Emma Rodriguez",
          role: "Teen Student, Black Belt",
          image:
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          quote:
            "I started when I was 10 years old and now at 17, Taekwondo has shaped who I am. Master Kim has been an incredible mentor, teaching me discipline and perseverance that has helped me succeed in all areas of my life.",
        },
      ],
      [t, n] = Z.useState(0),
      r = () => {
        n((i) => (i + 1) % e.length);
      },
      l = () => {
        n((i) => (i === 0 ? e.length - 1 : i - 1));
      },
      o = e[t];
    return u.jsx("section", {
      className: "py-20 bg-gray-50",
      children: u.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          u.jsxs("div", {
            className: "text-center mb-16",
            children: [
              u.jsx("h2", {
                className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                children: "O que nossos estudantes acham",
              }),
              u.jsx("p", {
                className: "text-xl text-gray-600 max-w-2xl mx-auto",
                children:
                  "Ouça os alunos cujas vidas foram transformadas através de nossos programas de Taekwondo.",
              }),
            ],
          }),
          u.jsx("div", {
            className: "max-w-4xl mx-auto",
            children: u.jsxs("div", {
              className: "bg-white rounded-lg shadow-lg p-8 md:p-10",
              children: [
                u.jsxs("div", {
                  className: "flex flex-col items-center",
                  children: [
                    u.jsx("div", {
                      className:
                        "w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-red-100",
                      children: u.jsx("img", {
                        src: o.image,
                        alt: o.name,
                        className: "w-full h-full object-cover",
                      }),
                    }),
                    u.jsxs("p", {
                      className:
                        "text-gray-700 text-lg md:text-xl italic mb-8 text-center",
                      children: ['"', o.quote, '"'],
                    }),
                    u.jsxs("div", {
                      className: "text-center",
                      children: [
                        u.jsx("h4", {
                          className: "text-lg font-semibold text-gray-900",
                          children: o.name,
                        }),
                        u.jsx("p", {
                          className: "text-gray-600",
                          children: o.role,
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "flex justify-center mt-8 space-x-4",
                  children: [
                    u.jsx("button", {
                      onClick: l,
                      className:
                        "p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300",
                      "aria-label": "Previous testimonial",
                      children: u.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-6 w-6",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: u.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M15 19l-7-7 7-7",
                        }),
                      }),
                    }),
                    u.jsx("div", {
                      className: "flex space-x-2",
                      children: e.map((i, s) =>
                        u.jsx(
                          "button",
                          {
                            className: `w-3 h-3 rounded-full transition-colors duration-300 ${
                              s === t ? "bg-red-600" : "bg-gray-300"
                            }`,
                            onClick: () => n(s),
                            "aria-label": `Go to testimonial ${s + 1}`,
                          },
                          s
                        )
                      ),
                    }),
                    u.jsx("button", {
                      onClick: r,
                      className:
                        "p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300",
                      "aria-label": "Next testimonial",
                      children: u.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-6 w-6",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: u.jsx("path", {
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
  op = () => {
    var r;
    const e = [
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
      [t, n] = Z.useState("Monday");
    return u.jsx("section", {
      id: "schedule",
      className: "py-20",
      children: u.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          u.jsxs("div", {
            className: "text-center mb-16",
            children: [
              u.jsx("h2", {
                className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                children: "Horário das Aulas",
              }),
              u.jsx("p", {
                className: "text-xl text-gray-600 max-w-2xl mx-auto",
                children:
                  "Encontre o momento perfeito para a sua jornada no Taekwondo",
              }),
            ],
          }),
          u.jsxs("div", {
            className: "max-w-4xl mx-auto",
            children: [
              u.jsx("div", {
                className: "flex flex-wrap justify-center mb-8 gap-2",
                children: e.map(({ day: l }) =>
                  u.jsx(
                    "button",
                    {
                      className: `px-4 py-2 rounded-md font-medium transition duration-200 ${
                        t === l
                          ? "bg-red-700 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`,
                      onClick: () => n(l),
                      children: l,
                    },
                    l
                  )
                ),
              }),
              u.jsx("div", {
                className: "bg-white rounded-lg shadow-lg overflow-hidden",
                children: u.jsxs("table", {
                  className: "min-w-full",
                  children: [
                    u.jsx("thead", {
                      className: "bg-gray-50 border-b",
                      children: u.jsxs("tr", {
                        children: [
                          u.jsx("th", {
                            className:
                              "py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                            children: "Time",
                          }),
                          u.jsx("th", {
                            className:
                              "py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                            children: "Class",
                          }),
                          u.jsx("th", {
                            className:
                              "py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                            children: "Level",
                          }),
                        ],
                      }),
                    }),
                    u.jsx("tbody", {
                      className: "divide-y divide-gray-200",
                      children:
                        (r = e.find((l) => l.day === t)) == null
                          ? void 0
                          : r.sessions.map((l, o) =>
                              u.jsxs(
                                "tr",
                                {
                                  className:
                                    "hover:bg-gray-50 transition duration-150",
                                  children: [
                                    u.jsx("td", {
                                      className:
                                        "py-4 px-6 text-sm font-medium text-gray-900",
                                      children: l.time,
                                    }),
                                    u.jsx("td", {
                                      className:
                                        "py-4 px-6 text-sm text-gray-700",
                                      children: l.className,
                                    }),
                                    u.jsx("td", {
                                      className:
                                        "py-4 px-6 text-sm text-gray-500",
                                      children: l.level,
                                    }),
                                  ],
                                },
                                o
                              )
                            ),
                    }),
                  ],
                }),
              }),
              u.jsxs("div", {
                className: "mt-8 text-center",
                children: [
                  u.jsx("p", {
                    className: "text-gray-600 mb-4",
                    children:
                      "Want to join our classes or have questions Sobre the schedule?",
                  }),
                  u.jsx("a", {
                    href: "#contact",
                    className:
                      "px-6 py-3 bg-red-700 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300",
                    children: "Contact Us",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  ip = () => {
    const e = [
        {
          id: 1,
          src: "https://images.pexels.com/photos/7045406/pexels-photo-7045406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Taekwondo class training",
          category: "training",
        },
        {
          id: 2,
          src: "https://images.pexels.com/photos/6253298/pexels-photo-6253298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Taekwondo kick demonstration",
          category: "technique",
        },
        {
          id: 3,
          src: "https://images.pexels.com/photos/7045396/pexels-photo-7045396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Students practicing forms",
          category: "training",
        },
        {
          id: 4,
          src: "https://images.pexels.com/photos/7045493/pexels-photo-7045493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Belt promotion ceremony",
          category: "event",
        },
        {
          id: 5,
          src: "https://images.pexels.com/photos/8612288/pexels-photo-8612288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Children's class",
          category: "training",
        },
        {
          id: 6,
          src: "https://images.pexels.com/photos/8612909/pexels-photo-8612909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Breaking boards demonstration",
          category: "technique",
        },
        {
          id: 7,
          src: "https://images.pexels.com/photos/8612894/pexels-photo-8612894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Competition sparring",
          category: "event",
        },
        {
          id: 8,
          src: "https://images.pexels.com/photos/7045623/pexels-photo-7045623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Adult advanced class",
          category: "training",
        },
      ],
      t = ["all", ...new Set(e.map((d) => d.category))],
      [n, r] = Z.useState("all"),
      [l, o] = Z.useState(null),
      i = n === "all" ? e : e.filter((d) => d.category === n),
      s = (d) => {
        o(d), (document.body.style.overflow = "hidden");
      },
      a = () => {
        o(null), (document.body.style.overflow = "auto");
      };
    return u.jsxs("section", {
      id: "gallery",
      className: "py-20 bg-gray-50",
      children: [
        u.jsxs("div", {
          className: "container mx-auto px-4",
          children: [
            u.jsxs("div", {
              className: "text-center mb-16",
              children: [
                u.jsx("h2", {
                  className:
                    "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                  children: "Photo Gallery",
                }),
                u.jsx("p", {
                  className: "text-xl text-gray-600 max-w-2xl mx-auto",
                  children: "Explore our Taekwondo academy in action",
                }),
              ],
            }),
            u.jsx("div", {
              className: "flex flex-wrap justify-center mb-10 gap-2",
              children: t.map((d) =>
                u.jsx(
                  "button",
                  {
                    className: `px-4 py-2 rounded-md font-medium capitalize transition duration-200 ${
                      n === d
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
            u.jsx("div", {
              className:
                "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
              children: i.map((d) =>
                u.jsx(
                  "div",
                  {
                    className:
                      "overflow-hidden rounded-lg shadow-md cursor-pointer transform transition duration-300 hover:shadow-xl hover:-translate-y-1",
                    onClick: () => s(d),
                    children: u.jsxs("div", {
                      className: "aspect-w-4 aspect-h-3 relative",
                      children: [
                        u.jsx("img", {
                          src: d.src,
                          alt: d.alt,
                          className: "w-full h-64 object-cover",
                        }),
                        u.jsx("div", {
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
        l &&
          u.jsx("div", {
            className:
              "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4",
            onClick: a,
            children: u.jsxs("div", {
              className: "max-w-4xl max-h-[90vh] relative",
              onClick: (d) => d.stopPropagation(),
              children: [
                u.jsx("button", {
                  onClick: a,
                  className:
                    "absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition duration-200",
                  "aria-label": "Close",
                  children: u.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-6 w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: u.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M6 18L18 6M6 6l12 12",
                    }),
                  }),
                }),
                u.jsx("img", {
                  src: l.src,
                  alt: l.alt,
                  className: "max-h-[85vh] max-w-full object-contain",
                }),
              ],
            }),
          }),
      ],
    });
  },
  sp = () =>
    u.jsxs("section", {
      className: "py-16 bg-red-700 relative overflow-hidden",
      children: [
        u.jsxs("div", {
          className: "absolute inset-0 opacity-10",
          children: [
            u.jsx("div", {
              className:
                "absolute transform rotate-12 -left-40 -top-40 h-80 w-80 rounded-full border-8 border-white",
            }),
            u.jsx("div", {
              className:
                "absolute transform -rotate-12 -right-40 -bottom-40 h-80 w-80 rounded-full border-8 border-white",
            }),
          ],
        }),
        u.jsx("div", {
          className: "container mx-auto px-4 relative z-10",
          children: u.jsxs("div", {
            className: "text-center",
            children: [
              u.jsx("h2", {
                className: "text-3xl md:text-4xl font-bold text-white mb-6",
                children: "Comece Sua Jornada no Taekwondo Hoje",
              }),
              u.jsx("p", {
                className:
                  "text-xl text-white opacity-90 max-w-2xl mx-auto mb-8",
                children:
                  "Junte-se à Academia de Taekwondo do Mestre Riba e descubra o poder transformador desta antiga arte marcial.",
              }),
              u.jsxs("div", {
                className: "flex flex-col sm:flex-row justify-center gap-4",
                children: [
                  u.jsx("a", {
                    href: "#contact",
                    className:
                      "px-8 py-3 bg-white text-red-700 font-semibold rounded-md hover:bg-gray-100 transition duration-300",
                    children: "Agende uma Aula Experimental Gratuita",
                  }),
                  u.jsx("a", {
                    href: "#classes",
                    className:
                      "px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-red-700 transition duration-300",
                    children: "Veja Nossos Programas",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  up = () => {
    const [e, t] = Z.useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        interest: "Little Tigers",
      }),
      [n, r] = Z.useState(!1),
      l = (s) => {
        const { name: a, value: d } = s.target;
        t((v) => ({ ...v, [a]: d }));
      },
      o = (s) => {
        s.preventDefault(),
          console.log("Form submitted:", e),
          r(!0),
          setTimeout(() => {
            r(!1),
              t({
                name: "",
                email: "",
                phone: "",
                message: "",
                interest: "Little Tigers",
              });
          }, 3e3);
      },
      i = () => {
        const s = "5561999999999",
          a = encodeURIComponent(
            "Olá Mestre Riba, gostaria de informações sobre as Classes de Taekwondo!"
          );
        window.open(`https://wa.me/${s}?text=${a}`, "_blank");
      };
    return u.jsx("section", {
      id: "contact",
      className: "py-20",
      children: u.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          u.jsxs("div", {
            className: "text-center mb-16",
            children: [
              u.jsx("h2", {
                className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                children: "Entre em Contato",
              }),
              u.jsx("p", {
                className: "text-xl text-gray-600 max-w-2xl mx-auto",
                children: "Comece sua jornada no Taekwondo hoje mesmo!",
              }),
            ],
          }),
          u.jsxs("div", {
            className: "flex flex-col lg:flex-row gap-12",
            children: [
              u.jsx("div", {
                className: "lg:w-1/2",
                children: u.jsxs("div", {
                  className: "bg-white rounded-lg shadow-lg p-8",
                  children: [
                    u.jsx("h3", {
                      className: "text-2xl font-bold text-gray-900 mb-6",
                      children: "Envie uma Mensagem",
                    }),
                    n
                      ? u.jsx("div", {
                          className:
                            "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4",
                          children:
                            "Obrigado pela sua mensagem! Entraremos em contato em breve.",
                        })
                      : u.jsxs("form", {
                          onSubmit: o,
                          children: [
                            u.jsxs("div", {
                              className: "mb-4",
                              children: [
                                u.jsx("label", {
                                  htmlFor: "name",
                                  className:
                                    "block text-gray-700 font-medium mb-2",
                                  children: "Nome Completo",
                                }),
                                u.jsx("input", {
                                  type: "text",
                                  id: "name",
                                  name: "name",
                                  value: e.name,
                                  onChange: l,
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                  required: !0,
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              className: "mb-4",
                              children: [
                                u.jsx("label", {
                                  htmlFor: "email",
                                  className:
                                    "block text-gray-700 font-medium mb-2",
                                  children: "Email",
                                }),
                                u.jsx("input", {
                                  type: "email",
                                  id: "email",
                                  name: "email",
                                  value: e.email,
                                  onChange: l,
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                  required: !0,
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              className: "mb-4",
                              children: [
                                u.jsx("label", {
                                  htmlFor: "phone",
                                  className:
                                    "block text-gray-700 font-medium mb-2",
                                  children: "Telefone",
                                }),
                                u.jsx("input", {
                                  type: "tel",
                                  id: "phone",
                                  name: "phone",
                                  value: e.phone,
                                  onChange: l,
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              className: "mb-4",
                              children: [
                                u.jsx("label", {
                                  htmlFor: "interest",
                                  className:
                                    "block text-gray-700 font-medium mb-2",
                                  children: "Tenho Interesse Em",
                                }),
                                u.jsxs("select", {
                                  id: "interest",
                                  name: "interest",
                                  value: e.interest,
                                  onChange: l,
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                  children: [
                                    u.jsx("option", {
                                      value: "Little Tigers",
                                      children: "Little Tigers (4-7 anos)",
                                    }),
                                    u.jsx("option", {
                                      value: "Junior Program",
                                      children: "Programa Júnior (8-12 anos)",
                                    }),
                                    u.jsx("option", {
                                      value: "Teen Program",
                                      children: "Programa Teen (13-17 anos)",
                                    }),
                                    u.jsx("option", {
                                      value: "Adult Program",
                                      children: "Programa Adulto (18+)",
                                    }),
                                    u.jsx("option", {
                                      value: "Other",
                                      children: "Outro",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              className: "mb-6",
                              children: [
                                u.jsx("label", {
                                  htmlFor: "message",
                                  className:
                                    "block text-gray-700 font-medium mb-2",
                                  children: "Mensagem",
                                }),
                                u.jsx("textarea", {
                                  id: "message",
                                  name: "message",
                                  value: e.message,
                                  onChange: l,
                                  rows: 4,
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                  required: !0,
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              className: "flex flex-col sm:flex-row gap-4",
                              children: [
                                u.jsx("button", {
                                  type: "submit",
                                  className:
                                    "flex-1 bg-red-700 text-white font-semibold py-3 rounded-md hover:bg-red-600 transition duration-300",
                                  children: "Enviar Mensagem",
                                }),
                                u.jsx("button", {
                                  type: "button",
                                  onClick: i,
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
              u.jsx("div", {
                className: "lg:w-1/2",
                children: u.jsxs("div", {
                  className:
                    "bg-white rounded-lg shadow-lg p-8 h-full flex flex-col",
                  children: [
                    u.jsx("h3", {
                      className: "text-2xl font-bold text-gray-900 mb-6",
                      children: "Visite Nosso Dojang",
                    }),
                    u.jsxs("div", {
                      className: "mb-8",
                      children: [
                        u.jsx("h4", {
                          className: "text-lg font-semibold text-gray-800 mb-3",
                          children: "Localização",
                        }),
                        u.jsx("p", {
                          className: "text-gray-700 mb-2",
                          children: "QN 7D Conjunto 1 - Riacho Fundo II",
                        }),
                        u.jsx("p", {
                          className: "text-gray-700 mb-2",
                          children: "Brasília - DF, 71880-010",
                        }),
                        u.jsx("h4", {
                          className:
                            "text-lg font-semibold text-gray-800 mt-6 mb-3",
                          children: "Informações de Contato",
                        }),
                        u.jsx("p", {
                          className: "text-gray-700 mb-2",
                          children: "Mestre Riba",
                        }),
                        u.jsx("p", {
                          className: "text-gray-700 mb-2",
                          children: "WhatsApp: (61) 99999-9999",
                        }),
                        u.jsx("p", {
                          className: "text-gray-700 mb-2",
                          children: "Email: mestre.riba@email.com",
                        }),
                        u.jsx("h4", {
                          className:
                            "text-lg font-semibold text-gray-800 mt-6 mb-3",
                          children: "Horário de Funcionamento",
                        }),
                        u.jsx("p", {
                          className: "text-gray-700 mb-2",
                          children: "Segunda a Sexta: 15:00 - 20:30",
                        }),
                        u.jsx("p", {
                          className: "text-gray-700 mb-2",
                          children: "Sábado: 09:00 - 14:00",
                        }),
                        u.jsx("p", {
                          className: "text-gray-700",
                          children: "Domingo: Fechado",
                        }),
                      ],
                    }),
                    u.jsx("div", {
                      className: "flex-grow rounded-lg overflow-hidden",
                      children: u.jsx("iframe", {
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
  ap = () => {
    const e = new Date().getFullYear();
    return u.jsx("footer", {
      className: "bg-gray-900 text-white",
      children: u.jsxs("div", {
        className: "container mx-auto px-4 py-12",
        children: [
          u.jsxs("div", {
            className: "flex flex-col md:flex-row justify-between",
            children: [
              u.jsxs("div", {
                className: "mb-8 md:mb-0",
                children: [
                  u.jsxs("h3", {
                    className: "text-2xl font-bold mb-4",
                    children: [
                      "Master Riba ",
                      u.jsx("span", {
                        className: "text-red-500",
                        children: "Taekwondo",
                      }),
                    ],
                  }),
                  u.jsx("p", {
                    className: "max-w-xs text-gray-400 mb-4",
                    children:
                      "Empowering lives through the ancient art of Taekwondo since 2003. Building stronger bodies and minds for a better future.",
                  }),
                  u.jsxs("div", {
                    className: "flex space-x-4",
                    children: [
                      u.jsx("a", {
                        href: "#",
                        className:
                          "text-gray-400 hover:text-white transition duration-300",
                        "aria-label": "Facebook",
                        children: u.jsx(If, { size: 20 }),
                      }),
                      u.jsx("a", {
                        href: "#",
                        className:
                          "text-gray-400 hover:text-white transition duration-300",
                        "aria-label": "Instagram",
                        children: u.jsx(Of, { size: 20 }),
                      }),
                      u.jsx("a", {
                        href: "#",
                        className:
                          "text-gray-400 hover:text-white transition duration-300",
                        "aria-label": "YouTube",
                        children: u.jsx(Wf, { size: 20 }),
                      }),
                      u.jsx("a", {
                        href: "#",
                        className:
                          "text-gray-400 hover:text-white transition duration-300",
                        "aria-label": "Twitter",
                        children: u.jsx(Bf, { size: 20 }),
                      }),
                    ],
                  }),
                ],
              }),
              u.jsxs("div", {
                className: "grid grid-cols-2 md:grid-cols-3 gap-8",
                children: [
                  u.jsxs("div", {
                    children: [
                      u.jsx("h4", {
                        className: "text-lg font-semibold mb-4",
                        children: "Quick Links",
                      }),
                      u.jsx("ul", {
                        className: "space-y-2",
                        children: [
                          "Início",
                          "Classes",
                          "Sobre",
                          "Schedule",
                          "Gallery",
                          "Contact",
                        ].map((t) =>
                          u.jsx(
                            "li",
                            {
                              children: u.jsx("a", {
                                href: `#${t.toLowerCase()}`,
                                className:
                                  "text-gray-400 hover:text-white transition duration-200",
                                children: t,
                              }),
                            },
                            t
                          )
                        ),
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("h4", {
                        className: "text-lg font-semibold mb-4",
                        children: "Programs",
                      }),
                      u.jsx("ul", {
                        className: "space-y-2",
                        children: [
                          "Little Tigers",
                          "Junior Program",
                          "Teen Program",
                          "Adult Program",
                          "Private Lessons",
                        ].map((t) =>
                          u.jsx(
                            "li",
                            {
                              children: u.jsx("a", {
                                href: "#classes",
                                className:
                                  "text-gray-400 hover:text-white transition duration-200",
                                children: t,
                              }),
                            },
                            t
                          )
                        ),
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("h4", {
                        className: "text-lg font-semibold mb-4",
                        children: "Contact Us",
                      }),
                      u.jsxs("address", {
                        className: "text-gray-400 not-italic",
                        children: [
                          u.jsx("p", {
                            className: "mb-2",
                            children: "123 Martial Arts Way",
                          }),
                          u.jsx("p", {
                            className: "mb-2",
                            children: "Atlanta, GA 30303",
                          }),
                          u.jsx("p", {
                            className: "mb-2",
                            children: "Phone: (555) 123-4567",
                          }),
                          u.jsx("p", { children: "Email: info@masterkim.com" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          u.jsxs("div", {
            className:
              "border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center",
            children: [
              u.jsxs("p", {
                className: "text-gray-400 text-sm",
                children: [
                  "© ",
                  e,
                  " Mestre Riba Taekwondo Academia. Todos os direitos reservados.",
                ],
              }),
              u.jsx("div", { className: "mt-4 md:mt-0" }),
            ],
          }),
        ],
      }),
    });
  };
function cp() {
  return (
    Z.useEffect(() => {
      document.title = "Academia de Taekwondo do Riba";
    }, []),
    u.jsxs("div", {
      className: "font-sans",
      children: [
        u.jsx(Qf, {}),
        u.jsx(Jf, {}),
        u.jsx(qf, {}),
        u.jsx(ep, {}),
        u.jsx(np, {}),
        u.jsx(lp, {}),
        u.jsx(op, {}),
        u.jsx(ip, {}),
        u.jsx(sp, {}),
        u.jsx(up, {}),
        u.jsx(ap, {}),
      ],
    })
  );
}
nc(document.getElementById("root")).render(
  u.jsx(Z.StrictMode, { children: u.jsx(cp, {}) })
);
