(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === 'childList')
        for (const o of i.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : l.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function wd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Ba = { exports: {} },
  Cl = {},
  Oa = { exports: {} },
  M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sr = Symbol.for('react.element'),
  xd = Symbol.for('react.portal'),
  kd = Symbol.for('react.fragment'),
  Sd = Symbol.for('react.strict_mode'),
  _d = Symbol.for('react.profiler'),
  Cd = Symbol.for('react.provider'),
  Ed = Symbol.for('react.context'),
  Nd = Symbol.for('react.forward_ref'),
  Td = Symbol.for('react.suspense'),
  Pd = Symbol.for('react.memo'),
  jd = Symbol.for('react.lazy'),
  gs = Symbol.iterator;
function Rd(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (gs && e[gs]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Fa = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  $a = Object.assign,
  Aa = {};
function fn(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Aa),
    (this.updater = n || Fa));
}
fn.prototype.isReactComponent = {};
fn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
fn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Ua() {}
Ua.prototype = fn.prototype;
function go(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Aa),
    (this.updater = n || Fa));
}
var wo = (go.prototype = new Ua());
wo.constructor = go;
$a(wo, fn.prototype);
wo.isPureReactComponent = !0;
var ws = Array.isArray,
  Za = Object.prototype.hasOwnProperty,
  xo = { current: null },
  Ha = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wa(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      Za.call(t, r) && !Ha.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: sr,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: xo.current,
  };
}
function Ld(e, t) {
  return {
    $$typeof: sr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ko(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === sr;
}
function zd(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var xs = /\/+/g;
function Vl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? zd('' + e.key)
    : t.toString(36);
}
function Br(e, t, n, r, l) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        o = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case sr:
          case xd:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === '' ? '.' + Vl(o, 0) : r),
      ws(l)
        ? ((n = ''),
          e != null && (n = e.replace(xs, '$&/') + '/'),
          Br(l, t, n, '', function (u) {
            return u;
          }))
        : l != null &&
          (ko(l) &&
            (l = Ld(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ''
                  : ('' + l.key).replace(xs, '$&/') + '/') +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === '' ? '.' : r + ':'), ws(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var s = r + Vl(i, a);
      o += Br(i, t, n, s, l);
    }
  else if (((s = Rd(e)), typeof s == 'function'))
    for (e = s.call(e), a = 0; !(i = e.next()).done; )
      ((i = i.value), (s = r + Vl(i, a++)), (o += Br(i, t, n, s, l)));
  else if (i === 'object')
    throw (
      (t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      )
    );
  return o;
}
function yr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Br(e, r, '', '', function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Md(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
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
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ce = { current: null },
  Or = { transition: null },
  Id = {
    ReactCurrentDispatcher: ce,
    ReactCurrentBatchConfig: Or,
    ReactCurrentOwner: xo,
  };
function Va() {
  throw Error('act(...) is not supported in production builds of React.');
}
M.Children = {
  map: yr,
  forEach: function (e, t, n) {
    yr(
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
      yr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      yr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ko(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
M.Component = fn;
M.Fragment = kd;
M.Profiler = _d;
M.PureComponent = go;
M.StrictMode = Sd;
M.Suspense = Td;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Id;
M.act = Va;
M.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = $a({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = xo.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      Za.call(t, s) &&
        !Ha.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: sr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
M.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ed,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Cd, _context: e }),
    (e.Consumer = e)
  );
};
M.createElement = Wa;
M.createFactory = function (e) {
  var t = Wa.bind(null, e);
  return ((t.type = e), t);
};
M.createRef = function () {
  return { current: null };
};
M.forwardRef = function (e) {
  return { $$typeof: Nd, render: e };
};
M.isValidElement = ko;
M.lazy = function (e) {
  return { $$typeof: jd, _payload: { _status: -1, _result: e }, _init: Md };
};
M.memo = function (e, t) {
  return { $$typeof: Pd, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function (e) {
  var t = Or.transition;
  Or.transition = {};
  try {
    e();
  } finally {
    Or.transition = t;
  }
};
M.unstable_act = Va;
M.useCallback = function (e, t) {
  return ce.current.useCallback(e, t);
};
M.useContext = function (e) {
  return ce.current.useContext(e);
};
M.useDebugValue = function () {};
M.useDeferredValue = function (e) {
  return ce.current.useDeferredValue(e);
};
M.useEffect = function (e, t) {
  return ce.current.useEffect(e, t);
};
M.useId = function () {
  return ce.current.useId();
};
M.useImperativeHandle = function (e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function (e, t) {
  return ce.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function (e, t) {
  return ce.current.useLayoutEffect(e, t);
};
M.useMemo = function (e, t) {
  return ce.current.useMemo(e, t);
};
M.useReducer = function (e, t, n) {
  return ce.current.useReducer(e, t, n);
};
M.useRef = function (e) {
  return ce.current.useRef(e);
};
M.useState = function (e) {
  return ce.current.useState(e);
};
M.useSyncExternalStore = function (e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function () {
  return ce.current.useTransition();
};
M.version = '18.3.1';
Oa.exports = M;
var y = Oa.exports;
const xi = wd(y);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dd = y,
  Bd = Symbol.for('react.element'),
  Od = Symbol.for('react.fragment'),
  Fd = Object.prototype.hasOwnProperty,
  $d = Dd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ad = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ya(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  (n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (r in t) Fd.call(t, r) && !Ad.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Bd,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: $d.current,
  };
}
Cl.Fragment = Od;
Cl.jsx = Ya;
Cl.jsxs = Ya;
Ba.exports = Cl;
var p = Ba.exports,
  Qa = { exports: {} },
  Se = {},
  Ka = { exports: {} },
  Ga = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, L) {
    var z = N.length;
    N.push(L);
    e: for (; 0 < z; ) {
      var Q = (z - 1) >>> 1,
        b = N[Q];
      if (0 < l(b, L)) ((N[Q] = L), (N[z] = b), (z = Q));
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var L = N[0],
      z = N.pop();
    if (z !== L) {
      N[0] = z;
      e: for (var Q = 0, b = N.length, mr = b >>> 1; Q < mr; ) {
        var _t = 2 * (Q + 1) - 1,
          Wl = N[_t],
          Ct = _t + 1,
          vr = N[Ct];
        if (0 > l(Wl, z))
          Ct < b && 0 > l(vr, Wl)
            ? ((N[Q] = vr), (N[Ct] = z), (Q = Ct))
            : ((N[Q] = Wl), (N[_t] = z), (Q = _t));
        else if (Ct < b && 0 > l(vr, z)) ((N[Q] = vr), (N[Ct] = z), (Q = Ct));
        else break e;
      }
    }
    return L;
  }
  function l(N, L) {
    var z = N.sortIndex - L.sortIndex;
    return z !== 0 ? z : N.id - L.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var s = [],
    u = [],
    f = 1,
    m = null,
    v = 3,
    w = !1,
    x = !1,
    g = !1,
    C = typeof setTimeout == 'function' ? setTimeout : null,
    d = typeof clearTimeout == 'function' ? clearTimeout : null,
    c = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(N) {
    for (var L = n(u); L !== null; ) {
      if (L.callback === null) r(u);
      else if (L.startTime <= N)
        (r(u), (L.sortIndex = L.expirationTime), t(s, L));
      else break;
      L = n(u);
    }
  }
  function k(N) {
    if (((g = !1), h(N), !x))
      if (n(s) !== null) ((x = !0), Zl(_));
      else {
        var L = n(u);
        L !== null && Hl(k, L.startTime - N);
      }
  }
  function _(N, L) {
    ((x = !1), g && ((g = !1), d(j), (j = -1)), (w = !0));
    var z = v;
    try {
      for (
        h(L), m = n(s);
        m !== null && (!(m.expirationTime > L) || (N && !pe()));

      ) {
        var Q = m.callback;
        if (typeof Q == 'function') {
          ((m.callback = null), (v = m.priorityLevel));
          var b = Q(m.expirationTime <= L);
          ((L = e.unstable_now()),
            typeof b == 'function' ? (m.callback = b) : m === n(s) && r(s),
            h(L));
        } else r(s);
        m = n(s);
      }
      if (m !== null) var mr = !0;
      else {
        var _t = n(u);
        (_t !== null && Hl(k, _t.startTime - L), (mr = !1));
      }
      return mr;
    } finally {
      ((m = null), (v = z), (w = !1));
    }
  }
  var P = !1,
    T = null,
    j = -1,
    I = 5,
    R = -1;
  function pe() {
    return !(e.unstable_now() - R < I);
  }
  function gn() {
    if (T !== null) {
      var N = e.unstable_now();
      R = N;
      var L = !0;
      try {
        L = T(!0, N);
      } finally {
        L ? wn() : ((P = !1), (T = null));
      }
    } else P = !1;
  }
  var wn;
  if (typeof c == 'function')
    wn = function () {
      c(gn);
    };
  else if (typeof MessageChannel < 'u') {
    var ys = new MessageChannel(),
      gd = ys.port2;
    ((ys.port1.onmessage = gn),
      (wn = function () {
        gd.postMessage(null);
      }));
  } else
    wn = function () {
      C(gn, 0);
    };
  function Zl(N) {
    ((T = N), P || ((P = !0), wn()));
  }
  function Hl(N, L) {
    j = C(function () {
      N(e.unstable_now());
    }, L);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || w || ((x = !0), Zl(_));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (I = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (N) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = v;
      }
      var z = v;
      v = L;
      try {
        return N();
      } finally {
        v = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, L) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var z = v;
      v = N;
      try {
        return L();
      } finally {
        v = z;
      }
    }),
    (e.unstable_scheduleCallback = function (N, L, z) {
      var Q = e.unstable_now();
      switch (
        (typeof z == 'object' && z !== null
          ? ((z = z.delay), (z = typeof z == 'number' && 0 < z ? Q + z : Q))
          : (z = Q),
        N)
      ) {
        case 1:
          var b = -1;
          break;
        case 2:
          b = 250;
          break;
        case 5:
          b = 1073741823;
          break;
        case 4:
          b = 1e4;
          break;
        default:
          b = 5e3;
      }
      return (
        (b = z + b),
        (N = {
          id: f++,
          callback: L,
          priorityLevel: N,
          startTime: z,
          expirationTime: b,
          sortIndex: -1,
        }),
        z > Q
          ? ((N.sortIndex = z),
            t(u, N),
            n(s) === null &&
              N === n(u) &&
              (g ? (d(j), (j = -1)) : (g = !0), Hl(k, z - Q)))
          : ((N.sortIndex = b), t(s, N), x || w || ((x = !0), Zl(_))),
        N
      );
    }),
    (e.unstable_shouldYield = pe),
    (e.unstable_wrapCallback = function (N) {
      var L = v;
      return function () {
        var z = v;
        v = L;
        try {
          return N.apply(this, arguments);
        } finally {
          v = z;
        }
      };
    }));
})(Ga);
Ka.exports = Ga;
var Ud = Ka.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zd = y,
  ke = Ud;
function S(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Xa = new Set(),
  Zn = {};
function Ot(e, t) {
  (on(e, t), on(e + 'Capture', t));
}
function on(e, t) {
  for (Zn[e] = t, e = 0; e < t.length; e++) Xa.add(t[e]);
}
var Xe = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  ki = Object.prototype.hasOwnProperty,
  Hd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ks = {},
  Ss = {};
function Wd(e) {
  return ki.call(Ss, e)
    ? !0
    : ki.call(ks, e)
      ? !1
      : Hd.test(e)
        ? (Ss[e] = !0)
        : ((ks[e] = !0), !1);
}
function Vd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Yd(e, t, n, r) {
  if (t === null || typeof t > 'u' || Vd(e, t, n, r)) return !0;
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
function de(e, t, n, r, l, i, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o));
}
var re = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    re[e] = new de(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  re[t] = new de(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  re[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  re[e] = new de(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    re[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  re[e] = new de(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  re[e] = new de(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  re[e] = new de(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  re[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var So = /[\-:]([a-z])/g;
function _o(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(So, _o);
    re[t] = new de(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(So, _o);
    re[t] = new de(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(So, _o);
  re[t] = new de(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  re[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new de(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  re[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Co(e, t, n, r) {
  var l = re.hasOwnProperty(t) ? re[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Yd(t, n, l, r) && (n = null),
    r || l === null
      ? Wd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var tt = Zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  gr = Symbol.for('react.element'),
  Ut = Symbol.for('react.portal'),
  Zt = Symbol.for('react.fragment'),
  Eo = Symbol.for('react.strict_mode'),
  Si = Symbol.for('react.profiler'),
  Ja = Symbol.for('react.provider'),
  ba = Symbol.for('react.context'),
  No = Symbol.for('react.forward_ref'),
  _i = Symbol.for('react.suspense'),
  Ci = Symbol.for('react.suspense_list'),
  To = Symbol.for('react.memo'),
  lt = Symbol.for('react.lazy'),
  qa = Symbol.for('react.offscreen'),
  _s = Symbol.iterator;
function xn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (_s && e[_s]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var V = Object.assign,
  Yl;
function jn(e) {
  if (Yl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Yl = (t && t[1]) || '';
    }
  return (
    `
` +
    Yl +
    e
  );
}
var Ql = !1;
function Kl(e, t) {
  if (!e || Ql) return '';
  Ql = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var l = u.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && l[o] !== i[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (l[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || l[o] !== i[a])) {
                var s =
                  `
` + l[o].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    ((Ql = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : '') ? jn(e) : '';
}
function Qd(e) {
  switch (e.tag) {
    case 5:
      return jn(e.type);
    case 16:
      return jn('Lazy');
    case 13:
      return jn('Suspense');
    case 19:
      return jn('SuspenseList');
    case 0:
    case 2:
    case 15:
      return ((e = Kl(e.type, !1)), e);
    case 11:
      return ((e = Kl(e.type.render, !1)), e);
    case 1:
      return ((e = Kl(e.type, !0)), e);
    default:
      return '';
  }
}
function Ei(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Zt:
      return 'Fragment';
    case Ut:
      return 'Portal';
    case Si:
      return 'Profiler';
    case Eo:
      return 'StrictMode';
    case _i:
      return 'Suspense';
    case Ci:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case ba:
        return (e.displayName || 'Context') + '.Consumer';
      case Ja:
        return (e._context.displayName || 'Context') + '.Provider';
      case No:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case To:
        return (
          (t = e.displayName || null),
          t !== null ? t : Ei(e.type) || 'Memo'
        );
      case lt:
        ((t = e._payload), (e = e._init));
        try {
          return Ei(e(t));
        } catch {}
    }
  return null;
}
function Kd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Ei(t);
    case 8:
      return t === Eo ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function gt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function eu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Gd(e) {
  var t = eu(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          ((r = '' + o), i.call(this, o));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = '' + o;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function wr(e) {
  e._valueTracker || (e._valueTracker = Gd(e));
}
function tu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = eu(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function qr(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ni(e, t) {
  var n = t.checked;
  return V({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Cs(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = gt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    }));
}
function nu(e, t) {
  ((t = t.checked), t != null && Co(e, 'checked', t, !1));
}
function Ti(e, t) {
  nu(e, t);
  var n = gt(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  (t.hasOwnProperty('value')
    ? Pi(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Pi(e, t.type, gt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Es(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n));
}
function Pi(e, t, n) {
  (t !== 'number' || qr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Rn = Array.isArray;
function qt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      ((l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0));
  } else {
    for (n = '' + gt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ji(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return V({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Ns(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (Rn(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ''), (n = t));
  }
  e._wrapperState = { initialValue: gt(n) };
}
function ru(e, t) {
  var n = gt(t.value),
    r = gt(t.defaultValue);
  (n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r));
}
function Ts(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function lu(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Ri(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? lu(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var xr,
  iu = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        xr = xr || document.createElement('div'),
          xr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = xr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Hn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Mn = {
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
  Xd = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Mn).forEach(function (e) {
  Xd.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mn[t] = Mn[e]));
  });
});
function ou(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Mn.hasOwnProperty(e) && Mn[e])
      ? ('' + t).trim()
      : t + 'px';
}
function su(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = ou(n, t[n], r);
      (n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l));
    }
}
var Jd = V(
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
function Li(e, t) {
  if (t) {
    if (Jd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(S(62));
  }
}
function zi(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Mi = null;
function Po(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ii = null,
  en = null,
  tn = null;
function Ps(e) {
  if ((e = cr(e))) {
    if (typeof Ii != 'function') throw Error(S(280));
    var t = e.stateNode;
    t && ((t = jl(t)), Ii(e.stateNode, e.type, t));
  }
}
function au(e) {
  en ? (tn ? tn.push(e) : (tn = [e])) : (en = e);
}
function uu() {
  if (en) {
    var e = en,
      t = tn;
    if (((tn = en = null), Ps(e), t)) for (e = 0; e < t.length; e++) Ps(t[e]);
  }
}
function cu(e, t) {
  return e(t);
}
function du() {}
var Gl = !1;
function pu(e, t, n) {
  if (Gl) return e(t, n);
  Gl = !0;
  try {
    return cu(e, t, n);
  } finally {
    ((Gl = !1), (en !== null || tn !== null) && (du(), uu()));
  }
}
function Wn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = jl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(S(231, t, typeof n));
  return n;
}
var Di = !1;
if (Xe)
  try {
    var kn = {};
    (Object.defineProperty(kn, 'passive', {
      get: function () {
        Di = !0;
      },
    }),
      window.addEventListener('test', kn, kn),
      window.removeEventListener('test', kn, kn));
  } catch {
    Di = !1;
  }
function bd(e, t, n, r, l, i, o, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var In = !1,
  el = null,
  tl = !1,
  Bi = null,
  qd = {
    onError: function (e) {
      ((In = !0), (el = e));
    },
  };
function ep(e, t, n, r, l, i, o, a, s) {
  ((In = !1), (el = null), bd.apply(qd, arguments));
}
function tp(e, t, n, r, l, i, o, a, s) {
  if ((ep.apply(this, arguments), In)) {
    if (In) {
      var u = el;
      ((In = !1), (el = null));
    } else throw Error(S(198));
    tl || ((tl = !0), (Bi = u));
  }
}
function Ft(e) {
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
function fu(e) {
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
function js(e) {
  if (Ft(e) !== e) throw Error(S(188));
}
function np(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ft(e)), t === null)) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return (js(l), e);
        if (i === r) return (js(l), t);
        i = i.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) ((n = l), (r = i));
    else {
      for (var o = !1, a = l.child; a; ) {
        if (a === n) {
          ((o = !0), (n = l), (r = i));
          break;
        }
        if (a === r) {
          ((o = !0), (r = l), (n = i));
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            ((o = !0), (n = i), (r = l));
            break;
          }
          if (a === r) {
            ((o = !0), (r = i), (n = l));
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function hu(e) {
  return ((e = np(e)), e !== null ? mu(e) : null);
}
function mu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = mu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var vu = ke.unstable_scheduleCallback,
  Rs = ke.unstable_cancelCallback,
  rp = ke.unstable_shouldYield,
  lp = ke.unstable_requestPaint,
  K = ke.unstable_now,
  ip = ke.unstable_getCurrentPriorityLevel,
  jo = ke.unstable_ImmediatePriority,
  yu = ke.unstable_UserBlockingPriority,
  nl = ke.unstable_NormalPriority,
  op = ke.unstable_LowPriority,
  gu = ke.unstable_IdlePriority,
  El = null,
  Ae = null;
function sp(e) {
  if (Ae && typeof Ae.onCommitFiberRoot == 'function')
    try {
      Ae.onCommitFiberRoot(El, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ie = Math.clz32 ? Math.clz32 : cp,
  ap = Math.log,
  up = Math.LN2;
function cp(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((ap(e) / up) | 0)) | 0);
}
var kr = 64,
  Sr = 4194304;
function Ln(e) {
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
function rl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~l;
    a !== 0 ? (r = Ln(a)) : ((i &= o), i !== 0 && (r = Ln(i)));
  } else ((o = n & ~l), o !== 0 ? (r = Ln(o)) : i !== 0 && (r = Ln(i)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Ie(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
  return r;
}
function dp(e, t) {
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
function pp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Ie(i),
      a = 1 << o,
      s = l[o];
    (s === -1
      ? (!(a & n) || a & r) && (l[o] = dp(a, t))
      : s <= t && (e.expiredLanes |= a),
      (i &= ~a));
  }
}
function Oi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function wu() {
  var e = kr;
  return ((kr <<= 1), !(kr & 4194240) && (kr = 64), e);
}
function Xl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ar(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ie(t)),
    (e[t] = n));
}
function fp(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ie(n),
      i = 1 << l;
    ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i));
  }
}
function Ro(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ie(n),
      l = 1 << r;
    ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
  }
}
var B = 0;
function xu(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var ku,
  Lo,
  Su,
  _u,
  Cu,
  Fi = !1,
  _r = [],
  ct = null,
  dt = null,
  pt = null,
  Vn = new Map(),
  Yn = new Map(),
  ot = [],
  hp =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Ls(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      ct = null;
      break;
    case 'dragenter':
    case 'dragleave':
      dt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      pt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Vn.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Yn.delete(t.pointerId);
  }
}
function Sn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = cr(t)), t !== null && Lo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function mp(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return ((ct = Sn(ct, e, t, n, r, l)), !0);
    case 'dragenter':
      return ((dt = Sn(dt, e, t, n, r, l)), !0);
    case 'mouseover':
      return ((pt = Sn(pt, e, t, n, r, l)), !0);
    case 'pointerover':
      var i = l.pointerId;
      return (Vn.set(i, Sn(Vn.get(i) || null, e, t, n, r, l)), !0);
    case 'gotpointercapture':
      return (
        (i = l.pointerId),
        Yn.set(i, Sn(Yn.get(i) || null, e, t, n, r, l)),
        !0
      );
  }
  return !1;
}
function Eu(e) {
  var t = Tt(e.target);
  if (t !== null) {
    var n = Ft(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = fu(n)), t !== null)) {
          ((e.blockedOn = t),
            Cu(e.priority, function () {
              Su(n);
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
function Fr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = $i(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Mi = r), n.target.dispatchEvent(r), (Mi = null));
    } else return ((t = cr(n)), t !== null && Lo(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function zs(e, t, n) {
  Fr(e) && n.delete(t);
}
function vp() {
  ((Fi = !1),
    ct !== null && Fr(ct) && (ct = null),
    dt !== null && Fr(dt) && (dt = null),
    pt !== null && Fr(pt) && (pt = null),
    Vn.forEach(zs),
    Yn.forEach(zs));
}
function _n(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Fi ||
      ((Fi = !0),
      ke.unstable_scheduleCallback(ke.unstable_NormalPriority, vp)));
}
function Qn(e) {
  function t(l) {
    return _n(l, e);
  }
  if (0 < _r.length) {
    _n(_r[0], e);
    for (var n = 1; n < _r.length; n++) {
      var r = _r[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ct !== null && _n(ct, e),
      dt !== null && _n(dt, e),
      pt !== null && _n(pt, e),
      Vn.forEach(t),
      Yn.forEach(t),
      n = 0;
    n < ot.length;
    n++
  )
    ((r = ot[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < ot.length && ((n = ot[0]), n.blockedOn === null); )
    (Eu(n), n.blockedOn === null && ot.shift());
}
var nn = tt.ReactCurrentBatchConfig,
  ll = !0;
function yp(e, t, n, r) {
  var l = B,
    i = nn.transition;
  nn.transition = null;
  try {
    ((B = 1), zo(e, t, n, r));
  } finally {
    ((B = l), (nn.transition = i));
  }
}
function gp(e, t, n, r) {
  var l = B,
    i = nn.transition;
  nn.transition = null;
  try {
    ((B = 4), zo(e, t, n, r));
  } finally {
    ((B = l), (nn.transition = i));
  }
}
function zo(e, t, n, r) {
  if (ll) {
    var l = $i(e, t, n, r);
    if (l === null) (oi(e, t, r, il, n), Ls(e, r));
    else if (mp(l, e, t, n, r)) r.stopPropagation();
    else if ((Ls(e, r), t & 4 && -1 < hp.indexOf(e))) {
      for (; l !== null; ) {
        var i = cr(l);
        if (
          (i !== null && ku(i),
          (i = $i(e, t, n, r)),
          i === null && oi(e, t, r, il, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else oi(e, t, r, null, n);
  }
}
var il = null;
function $i(e, t, n, r) {
  if (((il = null), (e = Po(r)), (e = Tt(e)), e !== null))
    if (((t = Ft(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = fu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((il = e), null);
}
function Nu(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (ip()) {
        case jo:
          return 1;
        case yu:
          return 4;
        case nl:
        case op:
          return 16;
        case gu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var at = null,
  Mo = null,
  $r = null;
function Tu() {
  if ($r) return $r;
  var e,
    t = Mo,
    n = t.length,
    r,
    l = 'value' in at ? at.value : at.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return ($r = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ar(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Cr() {
  return !0;
}
function Ms() {
  return !1;
}
function _e(e) {
  function t(n, r, l, i, o) {
    ((this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Cr
        : Ms),
      (this.isPropagationStopped = Ms),
      this
    );
  }
  return (
    V(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Cr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Cr));
      },
      persist: function () {},
      isPersistent: Cr,
    }),
    t
  );
}
var hn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Io = _e(hn),
  ur = V({}, hn, { view: 0, detail: 0 }),
  wp = _e(ur),
  Jl,
  bl,
  Cn,
  Nl = V({}, ur, {
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
    getModifierState: Do,
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
      return 'movementX' in e
        ? e.movementX
        : (e !== Cn &&
            (Cn && e.type === 'mousemove'
              ? ((Jl = e.screenX - Cn.screenX), (bl = e.screenY - Cn.screenY))
              : (bl = Jl = 0),
            (Cn = e)),
          Jl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : bl;
    },
  }),
  Is = _e(Nl),
  xp = V({}, Nl, { dataTransfer: 0 }),
  kp = _e(xp),
  Sp = V({}, ur, { relatedTarget: 0 }),
  ql = _e(Sp),
  _p = V({}, hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Cp = _e(_p),
  Ep = V({}, hn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Np = _e(Ep),
  Tp = V({}, hn, { data: 0 }),
  Ds = _e(Tp),
  Pp = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  jp = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Rp = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Lp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Rp[e]) ? !!t[e] : !1;
}
function Do() {
  return Lp;
}
var zp = V({}, ur, {
    key: function (e) {
      if (e.key) {
        var t = Pp[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Ar(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? jp[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Do,
    charCode: function (e) {
      return e.type === 'keypress' ? Ar(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Ar(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  Mp = _e(zp),
  Ip = V({}, Nl, {
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
  Bs = _e(Ip),
  Dp = V({}, ur, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Do,
  }),
  Bp = _e(Dp),
  Op = V({}, hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Fp = _e(Op),
  $p = V({}, Nl, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Ap = _e($p),
  Up = [9, 13, 27, 32],
  Bo = Xe && 'CompositionEvent' in window,
  Dn = null;
Xe && 'documentMode' in document && (Dn = document.documentMode);
var Zp = Xe && 'TextEvent' in window && !Dn,
  Pu = Xe && (!Bo || (Dn && 8 < Dn && 11 >= Dn)),
  Os = ' ',
  Fs = !1;
function ju(e, t) {
  switch (e) {
    case 'keyup':
      return Up.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Ru(e) {
  return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
}
var Ht = !1;
function Hp(e, t) {
  switch (e) {
    case 'compositionend':
      return Ru(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Fs = !0), Os);
    case 'textInput':
      return ((e = t.data), e === Os && Fs ? null : e);
    default:
      return null;
  }
}
function Wp(e, t) {
  if (Ht)
    return e === 'compositionend' || (!Bo && ju(e, t))
      ? ((e = Tu()), ($r = Mo = at = null), (Ht = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Pu && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Vp = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
function $s(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Vp[e.type] : t === 'textarea';
}
function Lu(e, t, n, r) {
  (au(r),
    (t = ol(t, 'onChange')),
    0 < t.length &&
      ((n = new Io('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Bn = null,
  Kn = null;
function Yp(e) {
  Zu(e, 0);
}
function Tl(e) {
  var t = Yt(e);
  if (tu(t)) return e;
}
function Qp(e, t) {
  if (e === 'change') return t;
}
var zu = !1;
if (Xe) {
  var ei;
  if (Xe) {
    var ti = 'oninput' in document;
    if (!ti) {
      var As = document.createElement('div');
      (As.setAttribute('oninput', 'return;'),
        (ti = typeof As.oninput == 'function'));
    }
    ei = ti;
  } else ei = !1;
  zu = ei && (!document.documentMode || 9 < document.documentMode);
}
function Us() {
  Bn && (Bn.detachEvent('onpropertychange', Mu), (Kn = Bn = null));
}
function Mu(e) {
  if (e.propertyName === 'value' && Tl(Kn)) {
    var t = [];
    (Lu(t, Kn, e, Po(e)), pu(Yp, t));
  }
}
function Kp(e, t, n) {
  e === 'focusin'
    ? (Us(), (Bn = t), (Kn = n), Bn.attachEvent('onpropertychange', Mu))
    : e === 'focusout' && Us();
}
function Gp(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Tl(Kn);
}
function Xp(e, t) {
  if (e === 'click') return Tl(t);
}
function Jp(e, t) {
  if (e === 'input' || e === 'change') return Tl(t);
}
function bp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Be = typeof Object.is == 'function' ? Object.is : bp;
function Gn(e, t) {
  if (Be(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ki.call(t, l) || !Be(e[l], t[l])) return !1;
  }
  return !0;
}
function Zs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Hs(e, t) {
  var n = Zs(e);
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
    n = Zs(n);
  }
}
function Iu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Iu(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Du() {
  for (var e = window, t = qr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = qr(e.document);
  }
  return t;
}
function Oo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function qp(e) {
  var t = Du(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Iu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Oo(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        ((r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Hs(n, i)));
        var o = Hs(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var ef = Xe && 'documentMode' in document && 11 >= document.documentMode,
  Wt = null,
  Ai = null,
  On = null,
  Ui = !1;
function Ws(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ui ||
    Wt == null ||
    Wt !== qr(r) ||
    ((r = Wt),
    'selectionStart' in r && Oo(r)
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
    (On && Gn(On, r)) ||
      ((On = r),
      (r = ol(Ai, 'onSelect')),
      0 < r.length &&
        ((t = new Io('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Wt))));
}
function Er(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Vt = {
    animationend: Er('Animation', 'AnimationEnd'),
    animationiteration: Er('Animation', 'AnimationIteration'),
    animationstart: Er('Animation', 'AnimationStart'),
    transitionend: Er('Transition', 'TransitionEnd'),
  },
  ni = {},
  Bu = {};
Xe &&
  ((Bu = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Vt.animationend.animation,
    delete Vt.animationiteration.animation,
    delete Vt.animationstart.animation),
  'TransitionEvent' in window || delete Vt.transitionend.transition);
function Pl(e) {
  if (ni[e]) return ni[e];
  if (!Vt[e]) return e;
  var t = Vt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Bu) return (ni[e] = t[n]);
  return e;
}
var Ou = Pl('animationend'),
  Fu = Pl('animationiteration'),
  $u = Pl('animationstart'),
  Au = Pl('transitionend'),
  Uu = new Map(),
  Vs =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function xt(e, t) {
  (Uu.set(e, t), Ot(t, [e]));
}
for (var ri = 0; ri < Vs.length; ri++) {
  var li = Vs[ri],
    tf = li.toLowerCase(),
    nf = li[0].toUpperCase() + li.slice(1);
  xt(tf, 'on' + nf);
}
xt(Ou, 'onAnimationEnd');
xt(Fu, 'onAnimationIteration');
xt($u, 'onAnimationStart');
xt('dblclick', 'onDoubleClick');
xt('focusin', 'onFocus');
xt('focusout', 'onBlur');
xt(Au, 'onTransitionEnd');
on('onMouseEnter', ['mouseout', 'mouseover']);
on('onMouseLeave', ['mouseout', 'mouseover']);
on('onPointerEnter', ['pointerout', 'pointerover']);
on('onPointerLeave', ['pointerout', 'pointerover']);
Ot(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Ot(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
Ot('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Ot(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Ot(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Ot(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var zn =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  rf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(zn));
function Ys(e, t, n) {
  var r = e.type || 'unknown-event';
  ((e.currentTarget = n), tp(r, t, void 0, e), (e.currentTarget = null));
}
function Zu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            s = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), s !== i && l.isPropagationStopped())) break e;
          (Ys(l, a, u), (i = s));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (s = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          (Ys(l, a, u), (i = s));
        }
    }
  }
  if (tl) throw ((e = Bi), (tl = !1), (Bi = null), e);
}
function F(e, t) {
  var n = t[Yi];
  n === void 0 && (n = t[Yi] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Hu(t, e, 2, !1), n.add(r));
}
function ii(e, t, n) {
  var r = 0;
  (t && (r |= 4), Hu(n, e, r, t));
}
var Nr = '_reactListening' + Math.random().toString(36).slice(2);
function Xn(e) {
  if (!e[Nr]) {
    ((e[Nr] = !0),
      Xa.forEach(function (n) {
        n !== 'selectionchange' && (rf.has(n) || ii(n, !1, e), ii(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Nr] || ((t[Nr] = !0), ii('selectionchange', !1, t));
  }
}
function Hu(e, t, n, r) {
  switch (Nu(t)) {
    case 1:
      var l = yp;
      break;
    case 4:
      l = gp;
      break;
    default:
      l = zo;
  }
  ((n = l.bind(null, t, n, e)),
    (l = void 0),
    !Di ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1));
}
function oi(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Tt(a)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  pu(function () {
    var u = i,
      f = Po(n),
      m = [];
    e: {
      var v = Uu.get(e);
      if (v !== void 0) {
        var w = Io,
          x = e;
        switch (e) {
          case 'keypress':
            if (Ar(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            w = Mp;
            break;
          case 'focusin':
            ((x = 'focus'), (w = ql));
            break;
          case 'focusout':
            ((x = 'blur'), (w = ql));
            break;
          case 'beforeblur':
          case 'afterblur':
            w = ql;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            w = Is;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            w = kp;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            w = Bp;
            break;
          case Ou:
          case Fu:
          case $u:
            w = Cp;
            break;
          case Au:
            w = Fp;
            break;
          case 'scroll':
            w = wp;
            break;
          case 'wheel':
            w = Ap;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            w = Np;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            w = Bs;
        }
        var g = (t & 4) !== 0,
          C = !g && e === 'scroll',
          d = g ? (v !== null ? v + 'Capture' : null) : v;
        g = [];
        for (var c = u, h; c !== null; ) {
          h = c;
          var k = h.stateNode;
          if (
            (h.tag === 5 &&
              k !== null &&
              ((h = k),
              d !== null && ((k = Wn(c, d)), k != null && g.push(Jn(c, k, h)))),
            C)
          )
            break;
          c = c.return;
        }
        0 < g.length &&
          ((v = new w(v, x, null, n, f)), m.push({ event: v, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === 'mouseover' || e === 'pointerover'),
          (w = e === 'mouseout' || e === 'pointerout'),
          v &&
            n !== Mi &&
            (x = n.relatedTarget || n.fromElement) &&
            (Tt(x) || x[Je]))
        )
          break e;
        if (
          (w || v) &&
          ((v =
            f.window === f
              ? f
              : (v = f.ownerDocument)
                ? v.defaultView || v.parentWindow
                : window),
          w
            ? ((x = n.relatedTarget || n.toElement),
              (w = u),
              (x = x ? Tt(x) : null),
              x !== null &&
                ((C = Ft(x)), x !== C || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((w = null), (x = u)),
          w !== x)
        ) {
          if (
            ((g = Is),
            (k = 'onMouseLeave'),
            (d = 'onMouseEnter'),
            (c = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((g = Bs),
              (k = 'onPointerLeave'),
              (d = 'onPointerEnter'),
              (c = 'pointer')),
            (C = w == null ? v : Yt(w)),
            (h = x == null ? v : Yt(x)),
            (v = new g(k, c + 'leave', w, n, f)),
            (v.target = C),
            (v.relatedTarget = h),
            (k = null),
            Tt(f) === u &&
              ((g = new g(d, c + 'enter', x, n, f)),
              (g.target = h),
              (g.relatedTarget = C),
              (k = g)),
            (C = k),
            w && x)
          )
            t: {
              for (g = w, d = x, c = 0, h = g; h; h = At(h)) c++;
              for (h = 0, k = d; k; k = At(k)) h++;
              for (; 0 < c - h; ) ((g = At(g)), c--);
              for (; 0 < h - c; ) ((d = At(d)), h--);
              for (; c--; ) {
                if (g === d || (d !== null && g === d.alternate)) break t;
                ((g = At(g)), (d = At(d)));
              }
              g = null;
            }
          else g = null;
          (w !== null && Qs(m, v, w, g, !1),
            x !== null && C !== null && Qs(m, C, x, g, !0));
        }
      }
      e: {
        if (
          ((v = u ? Yt(u) : window),
          (w = v.nodeName && v.nodeName.toLowerCase()),
          w === 'select' || (w === 'input' && v.type === 'file'))
        )
          var _ = Qp;
        else if ($s(v))
          if (zu) _ = Jp;
          else {
            _ = Gp;
            var P = Kp;
          }
        else
          (w = v.nodeName) &&
            w.toLowerCase() === 'input' &&
            (v.type === 'checkbox' || v.type === 'radio') &&
            (_ = Xp);
        if (_ && (_ = _(e, u))) {
          Lu(m, _, n, f);
          break e;
        }
        (P && P(e, v, u),
          e === 'focusout' &&
            (P = v._wrapperState) &&
            P.controlled &&
            v.type === 'number' &&
            Pi(v, 'number', v.value));
      }
      switch (((P = u ? Yt(u) : window), e)) {
        case 'focusin':
          ($s(P) || P.contentEditable === 'true') &&
            ((Wt = P), (Ai = u), (On = null));
          break;
        case 'focusout':
          On = Ai = Wt = null;
          break;
        case 'mousedown':
          Ui = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ((Ui = !1), Ws(m, n, f));
          break;
        case 'selectionchange':
          if (ef) break;
        case 'keydown':
        case 'keyup':
          Ws(m, n, f);
      }
      var T;
      if (Bo)
        e: {
          switch (e) {
            case 'compositionstart':
              var j = 'onCompositionStart';
              break e;
            case 'compositionend':
              j = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              j = 'onCompositionUpdate';
              break e;
          }
          j = void 0;
        }
      else
        Ht
          ? ju(e, n) && (j = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (j = 'onCompositionStart');
      (j &&
        (Pu &&
          n.locale !== 'ko' &&
          (Ht || j !== 'onCompositionStart'
            ? j === 'onCompositionEnd' && Ht && (T = Tu())
            : ((at = f),
              (Mo = 'value' in at ? at.value : at.textContent),
              (Ht = !0))),
        (P = ol(u, j)),
        0 < P.length &&
          ((j = new Ds(j, e, null, n, f)),
          m.push({ event: j, listeners: P }),
          T ? (j.data = T) : ((T = Ru(n)), T !== null && (j.data = T)))),
        (T = Zp ? Hp(e, n) : Wp(e, n)) &&
          ((u = ol(u, 'onBeforeInput')),
          0 < u.length &&
            ((f = new Ds('onBeforeInput', 'beforeinput', null, n, f)),
            m.push({ event: f, listeners: u }),
            (f.data = T))));
    }
    Zu(m, t);
  });
}
function Jn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ol(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    (l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Wn(e, n)),
      i != null && r.unshift(Jn(e, i, l)),
      (i = Wn(e, t)),
      i != null && r.push(Jn(e, i, l))),
      (e = e.return));
  }
  return r;
}
function At(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Qs(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === r) break;
    (a.tag === 5 &&
      u !== null &&
      ((a = u),
      l
        ? ((s = Wn(n, i)), s != null && o.unshift(Jn(n, s, a)))
        : l || ((s = Wn(n, i)), s != null && o.push(Jn(n, s, a)))),
      (n = n.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var lf = /\r\n?/g,
  of = /\u0000|\uFFFD/g;
function Ks(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      lf,
      `
`
    )
    .replace(of, '');
}
function Tr(e, t, n) {
  if (((t = Ks(t)), Ks(e) !== t && n)) throw Error(S(425));
}
function sl() {}
var Zi = null,
  Hi = null;
function Wi(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Vi = typeof setTimeout == 'function' ? setTimeout : void 0,
  sf = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Gs = typeof Promise == 'function' ? Promise : void 0,
  af =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Gs < 'u'
        ? function (e) {
            return Gs.resolve(null).then(e).catch(uf);
          }
        : Vi;
function uf(e) {
  setTimeout(function () {
    throw e;
  });
}
function si(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          (e.removeChild(l), Qn(t));
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  Qn(t);
}
function ft(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Xs(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var mn = Math.random().toString(36).slice(2),
  $e = '__reactFiber$' + mn,
  bn = '__reactProps$' + mn,
  Je = '__reactContainer$' + mn,
  Yi = '__reactEvents$' + mn,
  cf = '__reactListeners$' + mn,
  df = '__reactHandles$' + mn;
function Tt(e) {
  var t = e[$e];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Je] || n[$e])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Xs(e); e !== null; ) {
          if ((n = e[$e])) return n;
          e = Xs(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function cr(e) {
  return (
    (e = e[$e] || e[Je]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Yt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function jl(e) {
  return e[bn] || null;
}
var Qi = [],
  Qt = -1;
function kt(e) {
  return { current: e };
}
function $(e) {
  0 > Qt || ((e.current = Qi[Qt]), (Qi[Qt] = null), Qt--);
}
function O(e, t) {
  (Qt++, (Qi[Qt] = e.current), (e.current = t));
}
var wt = {},
  se = kt(wt),
  me = kt(!1),
  zt = wt;
function sn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return wt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ve(e) {
  return ((e = e.childContextTypes), e != null);
}
function al() {
  ($(me), $(se));
}
function Js(e, t, n) {
  if (se.current !== wt) throw Error(S(168));
  (O(se, t), O(me, n));
}
function Wu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, Kd(e) || 'Unknown', l));
  return V({}, n, r);
}
function ul(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || wt),
    (zt = se.current),
    O(se, e),
    O(me, me.current),
    !0
  );
}
function bs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  (n
    ? ((e = Wu(e, t, zt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      $(me),
      $(se),
      O(se, e))
    : $(me),
    O(me, n));
}
var Ve = null,
  Rl = !1,
  ai = !1;
function Vu(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
function pf(e) {
  ((Rl = !0), Vu(e));
}
function St() {
  if (!ai && Ve !== null) {
    ai = !0;
    var e = 0,
      t = B;
    try {
      var n = Ve;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Ve = null), (Rl = !1));
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), vu(jo, St), l);
    } finally {
      ((B = t), (ai = !1));
    }
  }
  return null;
}
var Kt = [],
  Gt = 0,
  cl = null,
  dl = 0,
  Ce = [],
  Ee = 0,
  Mt = null,
  Ye = 1,
  Qe = '';
function Et(e, t) {
  ((Kt[Gt++] = dl), (Kt[Gt++] = cl), (cl = e), (dl = t));
}
function Yu(e, t, n) {
  ((Ce[Ee++] = Ye), (Ce[Ee++] = Qe), (Ce[Ee++] = Mt), (Mt = e));
  var r = Ye;
  e = Qe;
  var l = 32 - Ie(r) - 1;
  ((r &= ~(1 << l)), (n += 1));
  var i = 32 - Ie(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    ((i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Ye = (1 << (32 - Ie(t) + l)) | (n << l) | r),
      (Qe = i + e));
  } else ((Ye = (1 << i) | (n << l) | r), (Qe = e));
}
function Fo(e) {
  e.return !== null && (Et(e, 1), Yu(e, 1, 0));
}
function $o(e) {
  for (; e === cl; )
    ((cl = Kt[--Gt]), (Kt[Gt] = null), (dl = Kt[--Gt]), (Kt[Gt] = null));
  for (; e === Mt; )
    ((Mt = Ce[--Ee]),
      (Ce[Ee] = null),
      (Qe = Ce[--Ee]),
      (Ce[Ee] = null),
      (Ye = Ce[--Ee]),
      (Ce[Ee] = null));
}
var xe = null,
  we = null,
  A = !1,
  Me = null;
function Qu(e, t) {
  var n = Ne(5, null, null, 0);
  ((n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function qs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (xe = e), (we = ft(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (xe = e), (we = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Mt !== null ? { id: Ye, overflow: Qe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ne(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (xe = e),
            (we = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ki(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Gi(e) {
  if (A) {
    var t = we;
    if (t) {
      var n = t;
      if (!qs(e, t)) {
        if (Ki(e)) throw Error(S(418));
        t = ft(n.nextSibling);
        var r = xe;
        t && qs(e, t)
          ? Qu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (A = !1), (xe = e));
      }
    } else {
      if (Ki(e)) throw Error(S(418));
      ((e.flags = (e.flags & -4097) | 2), (A = !1), (xe = e));
    }
  }
}
function ea(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  xe = e;
}
function Pr(e) {
  if (e !== xe) return !1;
  if (!A) return (ea(e), (A = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Wi(e.type, e.memoizedProps))),
    t && (t = we))
  ) {
    if (Ki(e)) throw (Ku(), Error(S(418)));
    for (; t; ) (Qu(e, t), (t = ft(t.nextSibling)));
  }
  if ((ea(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              we = ft(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      we = null;
    }
  } else we = xe ? ft(e.stateNode.nextSibling) : null;
  return !0;
}
function Ku() {
  for (var e = we; e; ) e = ft(e.nextSibling);
}
function an() {
  ((we = xe = null), (A = !1));
}
function Ao(e) {
  Me === null ? (Me = [e]) : Me.push(e);
}
var ff = tt.ReactCurrentBatchConfig;
function En(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = l.refs;
            o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function jr(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    )
  );
}
function ta(e) {
  var t = e._init;
  return t(e._payload);
}
function Gu(e) {
  function t(d, c) {
    if (e) {
      var h = d.deletions;
      h === null ? ((d.deletions = [c]), (d.flags |= 16)) : h.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) (t(d, c), (c = c.sibling));
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      (c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling));
    return d;
  }
  function l(d, c) {
    return ((d = yt(d, c)), (d.index = 0), (d.sibling = null), d);
  }
  function i(d, c, h) {
    return (
      (d.index = h),
      e
        ? ((h = d.alternate),
          h !== null
            ? ((h = h.index), h < c ? ((d.flags |= 2), c) : h)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function o(d) {
    return (e && d.alternate === null && (d.flags |= 2), d);
  }
  function a(d, c, h, k) {
    return c === null || c.tag !== 6
      ? ((c = mi(h, d.mode, k)), (c.return = d), c)
      : ((c = l(c, h)), (c.return = d), c);
  }
  function s(d, c, h, k) {
    var _ = h.type;
    return _ === Zt
      ? f(d, c, h.props.children, k, h.key)
      : c !== null &&
          (c.elementType === _ ||
            (typeof _ == 'object' &&
              _ !== null &&
              _.$$typeof === lt &&
              ta(_) === c.type))
        ? ((k = l(c, h.props)), (k.ref = En(d, c, h)), (k.return = d), k)
        : ((k = Qr(h.type, h.key, h.props, null, d.mode, k)),
          (k.ref = En(d, c, h)),
          (k.return = d),
          k);
  }
  function u(d, c, h, k) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== h.containerInfo ||
      c.stateNode.implementation !== h.implementation
      ? ((c = vi(h, d.mode, k)), (c.return = d), c)
      : ((c = l(c, h.children || [])), (c.return = d), c);
  }
  function f(d, c, h, k, _) {
    return c === null || c.tag !== 7
      ? ((c = Lt(h, d.mode, k, _)), (c.return = d), c)
      : ((c = l(c, h)), (c.return = d), c);
  }
  function m(d, c, h) {
    if ((typeof c == 'string' && c !== '') || typeof c == 'number')
      return ((c = mi('' + c, d.mode, h)), (c.return = d), c);
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case gr:
          return (
            (h = Qr(c.type, c.key, c.props, null, d.mode, h)),
            (h.ref = En(d, null, c)),
            (h.return = d),
            h
          );
        case Ut:
          return ((c = vi(c, d.mode, h)), (c.return = d), c);
        case lt:
          var k = c._init;
          return m(d, k(c._payload), h);
      }
      if (Rn(c) || xn(c))
        return ((c = Lt(c, d.mode, h, null)), (c.return = d), c);
      jr(d, c);
    }
    return null;
  }
  function v(d, c, h, k) {
    var _ = c !== null ? c.key : null;
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return _ !== null ? null : a(d, c, '' + h, k);
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case gr:
          return h.key === _ ? s(d, c, h, k) : null;
        case Ut:
          return h.key === _ ? u(d, c, h, k) : null;
        case lt:
          return ((_ = h._init), v(d, c, _(h._payload), k));
      }
      if (Rn(h) || xn(h)) return _ !== null ? null : f(d, c, h, k, null);
      jr(d, h);
    }
    return null;
  }
  function w(d, c, h, k, _) {
    if ((typeof k == 'string' && k !== '') || typeof k == 'number')
      return ((d = d.get(h) || null), a(c, d, '' + k, _));
    if (typeof k == 'object' && k !== null) {
      switch (k.$$typeof) {
        case gr:
          return (
            (d = d.get(k.key === null ? h : k.key) || null),
            s(c, d, k, _)
          );
        case Ut:
          return (
            (d = d.get(k.key === null ? h : k.key) || null),
            u(c, d, k, _)
          );
        case lt:
          var P = k._init;
          return w(d, c, h, P(k._payload), _);
      }
      if (Rn(k) || xn(k)) return ((d = d.get(h) || null), f(c, d, k, _, null));
      jr(c, k);
    }
    return null;
  }
  function x(d, c, h, k) {
    for (
      var _ = null, P = null, T = c, j = (c = 0), I = null;
      T !== null && j < h.length;
      j++
    ) {
      T.index > j ? ((I = T), (T = null)) : (I = T.sibling);
      var R = v(d, T, h[j], k);
      if (R === null) {
        T === null && (T = I);
        break;
      }
      (e && T && R.alternate === null && t(d, T),
        (c = i(R, c, j)),
        P === null ? (_ = R) : (P.sibling = R),
        (P = R),
        (T = I));
    }
    if (j === h.length) return (n(d, T), A && Et(d, j), _);
    if (T === null) {
      for (; j < h.length; j++)
        ((T = m(d, h[j], k)),
          T !== null &&
            ((c = i(T, c, j)),
            P === null ? (_ = T) : (P.sibling = T),
            (P = T)));
      return (A && Et(d, j), _);
    }
    for (T = r(d, T); j < h.length; j++)
      ((I = w(T, d, j, h[j], k)),
        I !== null &&
          (e && I.alternate !== null && T.delete(I.key === null ? j : I.key),
          (c = i(I, c, j)),
          P === null ? (_ = I) : (P.sibling = I),
          (P = I)));
    return (
      e &&
        T.forEach(function (pe) {
          return t(d, pe);
        }),
      A && Et(d, j),
      _
    );
  }
  function g(d, c, h, k) {
    var _ = xn(h);
    if (typeof _ != 'function') throw Error(S(150));
    if (((h = _.call(h)), h == null)) throw Error(S(151));
    for (
      var P = (_ = null), T = c, j = (c = 0), I = null, R = h.next();
      T !== null && !R.done;
      j++, R = h.next()
    ) {
      T.index > j ? ((I = T), (T = null)) : (I = T.sibling);
      var pe = v(d, T, R.value, k);
      if (pe === null) {
        T === null && (T = I);
        break;
      }
      (e && T && pe.alternate === null && t(d, T),
        (c = i(pe, c, j)),
        P === null ? (_ = pe) : (P.sibling = pe),
        (P = pe),
        (T = I));
    }
    if (R.done) return (n(d, T), A && Et(d, j), _);
    if (T === null) {
      for (; !R.done; j++, R = h.next())
        ((R = m(d, R.value, k)),
          R !== null &&
            ((c = i(R, c, j)),
            P === null ? (_ = R) : (P.sibling = R),
            (P = R)));
      return (A && Et(d, j), _);
    }
    for (T = r(d, T); !R.done; j++, R = h.next())
      ((R = w(T, d, j, R.value, k)),
        R !== null &&
          (e && R.alternate !== null && T.delete(R.key === null ? j : R.key),
          (c = i(R, c, j)),
          P === null ? (_ = R) : (P.sibling = R),
          (P = R)));
    return (
      e &&
        T.forEach(function (gn) {
          return t(d, gn);
        }),
      A && Et(d, j),
      _
    );
  }
  function C(d, c, h, k) {
    if (
      (typeof h == 'object' &&
        h !== null &&
        h.type === Zt &&
        h.key === null &&
        (h = h.props.children),
      typeof h == 'object' && h !== null)
    ) {
      switch (h.$$typeof) {
        case gr:
          e: {
            for (var _ = h.key, P = c; P !== null; ) {
              if (P.key === _) {
                if (((_ = h.type), _ === Zt)) {
                  if (P.tag === 7) {
                    (n(d, P.sibling),
                      (c = l(P, h.props.children)),
                      (c.return = d),
                      (d = c));
                    break e;
                  }
                } else if (
                  P.elementType === _ ||
                  (typeof _ == 'object' &&
                    _ !== null &&
                    _.$$typeof === lt &&
                    ta(_) === P.type)
                ) {
                  (n(d, P.sibling),
                    (c = l(P, h.props)),
                    (c.ref = En(d, P, h)),
                    (c.return = d),
                    (d = c));
                  break e;
                }
                n(d, P);
                break;
              } else t(d, P);
              P = P.sibling;
            }
            h.type === Zt
              ? ((c = Lt(h.props.children, d.mode, k, h.key)),
                (c.return = d),
                (d = c))
              : ((k = Qr(h.type, h.key, h.props, null, d.mode, k)),
                (k.ref = En(d, c, h)),
                (k.return = d),
                (d = k));
          }
          return o(d);
        case Ut:
          e: {
            for (P = h.key; c !== null; ) {
              if (c.key === P)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === h.containerInfo &&
                  c.stateNode.implementation === h.implementation
                ) {
                  (n(d, c.sibling),
                    (c = l(c, h.children || [])),
                    (c.return = d),
                    (d = c));
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            ((c = vi(h, d.mode, k)), (c.return = d), (d = c));
          }
          return o(d);
        case lt:
          return ((P = h._init), C(d, c, P(h._payload), k));
      }
      if (Rn(h)) return x(d, c, h, k);
      if (xn(h)) return g(d, c, h, k);
      jr(d, h);
    }
    return (typeof h == 'string' && h !== '') || typeof h == 'number'
      ? ((h = '' + h),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = l(c, h)), (c.return = d), (d = c))
          : (n(d, c), (c = mi(h, d.mode, k)), (c.return = d), (d = c)),
        o(d))
      : n(d, c);
  }
  return C;
}
var un = Gu(!0),
  Xu = Gu(!1),
  pl = kt(null),
  fl = null,
  Xt = null,
  Uo = null;
function Zo() {
  Uo = Xt = fl = null;
}
function Ho(e) {
  var t = pl.current;
  ($(pl), (e._currentValue = t));
}
function Xi(e, t, n) {
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
function rn(e, t) {
  ((fl = e),
    (Uo = Xt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (he = !0), (e.firstContext = null)));
}
function Pe(e) {
  var t = e._currentValue;
  if (Uo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Xt === null)) {
      if (fl === null) throw Error(S(308));
      ((Xt = e), (fl.dependencies = { lanes: 0, firstContext: e }));
    } else Xt = Xt.next = e;
  return t;
}
var Pt = null;
function Wo(e) {
  Pt === null ? (Pt = [e]) : Pt.push(e);
}
function Ju(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Wo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    be(e, r)
  );
}
function be(e, t) {
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
var it = !1;
function Vo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function bu(e, t) {
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
function Ke(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ht(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), D & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      be(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Wo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    be(e, n)
  );
}
function Ur(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ro(e, n));
  }
}
function na(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (l = i = o) : (i = i.next = o), (n = n.next));
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function hl(e, t, n, r) {
  var l = e.updateQueue;
  it = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var s = a,
      u = s.next;
    ((s.next = null), o === null ? (i = u) : (o.next = u), (o = s));
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== o &&
        (a === null ? (f.firstBaseUpdate = u) : (a.next = u),
        (f.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var m = l.baseState;
    ((o = 0), (f = u = s = null), (a = i));
    do {
      var v = a.lane,
        w = a.eventTime;
      if ((r & v) === v) {
        f !== null &&
          (f = f.next =
            {
              eventTime: w,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = e,
            g = a;
          switch (((v = t), (w = n), g.tag)) {
            case 1:
              if (((x = g.payload), typeof x == 'function')) {
                m = x.call(w, m, v);
                break e;
              }
              m = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = g.payload),
                (v = typeof x == 'function' ? x.call(w, m, v) : x),
                v == null)
              )
                break e;
              m = V({}, m, v);
              break e;
            case 2:
              it = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (v = l.effects),
          v === null ? (l.effects = [a]) : v.push(a));
      } else
        ((w = {
          eventTime: w,
          lane: v,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((u = f = w), (s = m)) : (f = f.next = w),
          (o |= v));
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        ((v = a),
          (a = v.next),
          (v.next = null),
          (l.lastBaseUpdate = v),
          (l.shared.pending = null));
      }
    } while (!0);
    if (
      (f === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = u),
      (l.lastBaseUpdate = f),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do ((o |= l.lane), (l = l.next));
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    ((Dt |= o), (e.lanes = o), (e.memoizedState = m));
  }
}
function ra(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(S(191, l));
        l.call(r);
      }
    }
}
var dr = {},
  Ue = kt(dr),
  qn = kt(dr),
  er = kt(dr);
function jt(e) {
  if (e === dr) throw Error(S(174));
  return e;
}
function Yo(e, t) {
  switch ((O(er, t), O(qn, e), O(Ue, dr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ri(null, '');
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ri(t, e)));
  }
  ($(Ue), O(Ue, t));
}
function cn() {
  ($(Ue), $(qn), $(er));
}
function qu(e) {
  jt(er.current);
  var t = jt(Ue.current),
    n = Ri(t, e.type);
  t !== n && (O(qn, e), O(Ue, n));
}
function Qo(e) {
  qn.current === e && ($(Ue), $(qn));
}
var Z = kt(0);
function ml(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
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
var ui = [];
function Ko() {
  for (var e = 0; e < ui.length; e++)
    ui[e]._workInProgressVersionPrimary = null;
  ui.length = 0;
}
var Zr = tt.ReactCurrentDispatcher,
  ci = tt.ReactCurrentBatchConfig,
  It = 0,
  H = null,
  X = null,
  q = null,
  vl = !1,
  Fn = !1,
  tr = 0,
  hf = 0;
function le() {
  throw Error(S(321));
}
function Go(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Be(e[n], t[n])) return !1;
  return !0;
}
function Xo(e, t, n, r, l, i) {
  if (
    ((It = i),
    (H = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Zr.current = e === null || e.memoizedState === null ? gf : wf),
    (e = n(r, l)),
    Fn)
  ) {
    i = 0;
    do {
      if (((Fn = !1), (tr = 0), 25 <= i)) throw Error(S(301));
      ((i += 1),
        (q = X = null),
        (t.updateQueue = null),
        (Zr.current = xf),
        (e = n(r, l)));
    } while (Fn);
  }
  if (
    ((Zr.current = yl),
    (t = X !== null && X.next !== null),
    (It = 0),
    (q = X = H = null),
    (vl = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function Jo() {
  var e = tr !== 0;
  return ((tr = 0), e);
}
function Fe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (q === null ? (H.memoizedState = q = e) : (q = q.next = e), q);
}
function je() {
  if (X === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = q === null ? H.memoizedState : q.next;
  if (t !== null) ((q = t), (X = e));
  else {
    if (e === null) throw Error(S(310));
    ((X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      q === null ? (H.memoizedState = q = e) : (q = q.next = e));
  }
  return q;
}
function nr(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function di(e) {
  var t = je(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = X,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      ((l.next = i.next), (i.next = o));
    }
    ((r.baseQueue = l = i), (n.pending = null));
  }
  if (l !== null) {
    ((i = l.next), (r = r.baseState));
    var a = (o = null),
      s = null,
      u = i;
    do {
      var f = u.lane;
      if ((It & f) === f)
        (s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var m = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (s === null ? ((a = s = m), (o = r)) : (s = s.next = m),
          (H.lanes |= f),
          (Dt |= f));
      }
      u = u.next;
    } while (u !== null && u !== i);
    (s === null ? (o = r) : (s.next = a),
      Be(r, t.memoizedState) || (he = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do ((i = l.lane), (H.lanes |= i), (Dt |= i), (l = l.next));
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function pi(e) {
  var t = je(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do ((i = e(i, o.action)), (o = o.next));
    while (o !== l);
    (Be(i, t.memoizedState) || (he = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function ec() {}
function tc(e, t) {
  var n = H,
    r = je(),
    l = t(),
    i = !Be(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (he = !0)),
    (r = r.queue),
    bo(lc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (q !== null && q.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      rr(9, rc.bind(null, n, r, l, t), void 0, null),
      ee === null)
    )
      throw Error(S(349));
    It & 30 || nc(n, t, l);
  }
  return l;
}
function nc(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function rc(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), ic(t) && oc(e));
}
function lc(e, t, n) {
  return n(function () {
    ic(t) && oc(e);
  });
}
function ic(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Be(e, n);
  } catch {
    return !0;
  }
}
function oc(e) {
  var t = be(e, 1);
  t !== null && De(t, e, 1, -1);
}
function la(e) {
  var t = Fe();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: nr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = yf.bind(null, H, e)),
    [t.memoizedState, e]
  );
}
function rr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function sc() {
  return je().memoizedState;
}
function Hr(e, t, n, r) {
  var l = Fe();
  ((H.flags |= e),
    (l.memoizedState = rr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Ll(e, t, n, r) {
  var l = je();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (X !== null) {
    var o = X.memoizedState;
    if (((i = o.destroy), r !== null && Go(r, o.deps))) {
      l.memoizedState = rr(t, n, i, r);
      return;
    }
  }
  ((H.flags |= e), (l.memoizedState = rr(1 | t, n, i, r)));
}
function ia(e, t) {
  return Hr(8390656, 8, e, t);
}
function bo(e, t) {
  return Ll(2048, 8, e, t);
}
function ac(e, t) {
  return Ll(4, 2, e, t);
}
function uc(e, t) {
  return Ll(4, 4, e, t);
}
function cc(e, t) {
  if (typeof t == 'function')
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
function dc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Ll(4, 4, cc.bind(null, t, e), n)
  );
}
function qo() {}
function pc(e, t) {
  var n = je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Go(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function fc(e, t) {
  var n = je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Go(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function hc(e, t, n) {
  return It & 21
    ? (Be(n, t) || ((n = wu()), (H.lanes |= n), (Dt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (he = !0)), (e.memoizedState = n));
}
function mf(e, t) {
  var n = B;
  ((B = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = ci.transition;
  ci.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((B = n), (ci.transition = r));
  }
}
function mc() {
  return je().memoizedState;
}
function vf(e, t, n) {
  var r = vt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    vc(e))
  )
    yc(t, n);
  else if (((n = Ju(e, t, n, r)), n !== null)) {
    var l = ue();
    (De(n, e, r, l), gc(n, t, r));
  }
}
function yf(e, t, n) {
  var r = vt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (vc(e)) yc(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), Be(a, o))) {
          var s = t.interleaved;
          (s === null
            ? ((l.next = l), Wo(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Ju(e, t, l, r)),
      n !== null && ((l = ue()), De(n, e, r, l), gc(n, t, r)));
  }
}
function vc(e) {
  var t = e.alternate;
  return e === H || (t !== null && t === H);
}
function yc(e, t) {
  Fn = vl = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function gc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ro(e, n));
  }
}
var yl = {
    readContext: Pe,
    useCallback: le,
    useContext: le,
    useEffect: le,
    useImperativeHandle: le,
    useInsertionEffect: le,
    useLayoutEffect: le,
    useMemo: le,
    useReducer: le,
    useRef: le,
    useState: le,
    useDebugValue: le,
    useDeferredValue: le,
    useTransition: le,
    useMutableSource: le,
    useSyncExternalStore: le,
    useId: le,
    unstable_isNewReconciler: !1,
  },
  gf = {
    readContext: Pe,
    useCallback: function (e, t) {
      return ((Fe().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Pe,
    useEffect: ia,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Hr(4194308, 4, cc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Hr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Hr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Fe();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
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
        (e = e.dispatch = vf.bind(null, H, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Fe();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: la,
    useDebugValue: qo,
    useDeferredValue: function (e) {
      return (Fe().memoizedState = e);
    },
    useTransition: function () {
      var e = la(!1),
        t = e[0];
      return ((e = mf.bind(null, e[1])), (Fe().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = H,
        l = Fe();
      if (A) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), ee === null)) throw Error(S(349));
        It & 30 || nc(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        ia(lc.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        rr(9, rc.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Fe(),
        t = ee.identifierPrefix;
      if (A) {
        var n = Qe,
          r = Ye;
        ((n = (r & ~(1 << (32 - Ie(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = tr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':'));
      } else ((n = hf++), (t = ':' + t + 'r' + n.toString(32) + ':'));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  wf = {
    readContext: Pe,
    useCallback: pc,
    useContext: Pe,
    useEffect: bo,
    useImperativeHandle: dc,
    useInsertionEffect: ac,
    useLayoutEffect: uc,
    useMemo: fc,
    useReducer: di,
    useRef: sc,
    useState: function () {
      return di(nr);
    },
    useDebugValue: qo,
    useDeferredValue: function (e) {
      var t = je();
      return hc(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = di(nr)[0],
        t = je().memoizedState;
      return [e, t];
    },
    useMutableSource: ec,
    useSyncExternalStore: tc,
    useId: mc,
    unstable_isNewReconciler: !1,
  },
  xf = {
    readContext: Pe,
    useCallback: pc,
    useContext: Pe,
    useEffect: bo,
    useImperativeHandle: dc,
    useInsertionEffect: ac,
    useLayoutEffect: uc,
    useMemo: fc,
    useReducer: pi,
    useRef: sc,
    useState: function () {
      return pi(nr);
    },
    useDebugValue: qo,
    useDeferredValue: function (e) {
      var t = je();
      return X === null ? (t.memoizedState = e) : hc(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = pi(nr)[0],
        t = je().memoizedState;
      return [e, t];
    },
    useMutableSource: ec,
    useSyncExternalStore: tc,
    useId: mc,
    unstable_isNewReconciler: !1,
  };
function Le(e, t) {
  if (e && e.defaultProps) {
    ((t = V({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ji(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : V({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var zl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ft(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = vt(e),
      i = Ke(r, l);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = ht(e, i, l)),
      t !== null && (De(t, e, l, r), Ur(t, e, l)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = vt(e),
      i = Ke(r, l);
    ((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = ht(e, i, l)),
      t !== null && (De(t, e, l, r), Ur(t, e, l)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ue(),
      r = vt(e),
      l = Ke(n, r);
    ((l.tag = 2),
      t != null && (l.callback = t),
      (t = ht(e, l, r)),
      t !== null && (De(t, e, r, n), Ur(t, e, r)));
  },
};
function oa(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Gn(n, r) || !Gn(l, i)
        : !0
  );
}
function wc(e, t, n) {
  var r = !1,
    l = wt,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = Pe(i))
      : ((l = ve(t) ? zt : se.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? sn(e, l) : wt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = zl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function sa(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && zl.enqueueReplaceState(t, t.state, null));
}
function bi(e, t, n, r) {
  var l = e.stateNode;
  ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Vo(e));
  var i = t.contextType;
  (typeof i == 'object' && i !== null
    ? (l.context = Pe(i))
    : ((i = ve(t) ? zt : se.current), (l.context = sn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Ji(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && zl.enqueueReplaceState(l, l.state, null),
      hl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308));
}
function dn(e, t) {
  try {
    var n = '',
      r = t;
    do ((n += Qd(r)), (r = r.return));
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function fi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function qi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var kf = typeof WeakMap == 'function' ? WeakMap : Map;
function xc(e, t, n) {
  ((n = Ke(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (wl || ((wl = !0), (uo = r)), qi(e, t));
    }),
    n
  );
}
function kc(e, t, n) {
  ((n = Ke(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    ((n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        qi(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        (qi(e, t),
          typeof r != 'function' &&
            (mt === null ? (mt = new Set([this])) : mt.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : '',
        });
      }),
    n
  );
}
function aa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new kf();
    var l = new Set();
    r.set(t, l);
  } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
  l.has(n) || (l.add(n), (e = Df.bind(null, e, t, n)), t.then(e, e));
}
function ua(e) {
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
function ca(e, t, n, r, l) {
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
              : ((t = Ke(-1, 1)), (t.tag = 2), ht(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Sf = tt.ReactCurrentOwner,
  he = !1;
function ae(e, t, n, r) {
  t.child = e === null ? Xu(t, null, n, r) : un(t, e.child, n, r);
}
function da(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    rn(t, l),
    (r = Xo(e, t, n, r, i, l)),
    (n = Jo()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        qe(e, t, l))
      : (A && n && Fo(t), (t.flags |= 1), ae(e, t, r, l), t.child)
  );
}
function pa(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !ss(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Sc(e, t, i, r, l))
      : ((e = Qr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Gn), n(o, r) && e.ref === t.ref)
    )
      return qe(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = yt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Sc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Gn(i, r) && e.ref === t.ref)
      if (((he = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (he = !0);
      else return ((t.lanes = e.lanes), qe(e, t, l));
  }
  return eo(e, t, n, r, l);
}
function _c(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        O(bt, ge),
        (ge |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          O(bt, ge),
          (ge |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        O(bt, ge),
        (ge |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      O(bt, ge),
      (ge |= r));
  return (ae(e, t, l, n), t.child);
}
function Cc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function eo(e, t, n, r, l) {
  var i = ve(n) ? zt : se.current;
  return (
    (i = sn(t, i)),
    rn(t, l),
    (n = Xo(e, t, n, r, i, l)),
    (r = Jo()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        qe(e, t, l))
      : (A && r && Fo(t), (t.flags |= 1), ae(e, t, n, l), t.child)
  );
}
function fa(e, t, n, r, l) {
  if (ve(n)) {
    var i = !0;
    ul(t);
  } else i = !1;
  if ((rn(t, l), t.stateNode === null))
    (Wr(e, t), wc(t, n, r), bi(t, n, r, l), (r = !0));
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var s = o.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = Pe(u))
      : ((u = ve(n) ? zt : se.current), (u = sn(t, u)));
    var f = n.getDerivedStateFromProps,
      m =
        typeof f == 'function' ||
        typeof o.getSnapshotBeforeUpdate == 'function';
    (m ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== r || s !== u) && sa(t, o, r, u)),
      (it = !1));
    var v = t.memoizedState;
    ((o.state = v),
      hl(t, r, o, l),
      (s = t.memoizedState),
      a !== r || v !== s || me.current || it
        ? (typeof f == 'function' && (Ji(t, n, f, r), (s = t.memoizedState)),
          (a = it || oa(t, n, a, r, v, s, u))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((o = t.stateNode),
      bu(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Le(t.type, a)),
      (o.props = u),
      (m = t.pendingProps),
      (v = o.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = Pe(s))
        : ((s = ve(n) ? zt : se.current), (s = sn(t, s))));
    var w = n.getDerivedStateFromProps;
    ((f =
      typeof w == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== m || v !== s) && sa(t, o, r, s)),
      (it = !1),
      (v = t.memoizedState),
      (o.state = v),
      hl(t, r, o, l));
    var x = t.memoizedState;
    a !== m || v !== x || me.current || it
      ? (typeof w == 'function' && (Ji(t, n, w, r), (x = t.memoizedState)),
        (u = it || oa(t, n, u, r, v, x, s) || !1)
          ? (f ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' &&
                o.componentWillUpdate(r, x, s),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, x, s)),
            typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (o.props = r),
        (o.state = x),
        (o.context = s),
        (r = u))
      : (typeof o.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return to(e, t, n, r, i, l);
}
function to(e, t, n, r, l, i) {
  Cc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return (l && bs(t, n, !1), qe(e, t, i));
  ((r = t.stateNode), (Sf.current = t));
  var a =
    o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = un(t, e.child, null, i)), (t.child = un(t, null, a, i)))
      : ae(e, t, a, i),
    (t.memoizedState = r.state),
    l && bs(t, n, !0),
    t.child
  );
}
function Ec(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Js(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Js(e, t.context, !1),
    Yo(e, t.containerInfo));
}
function ha(e, t, n, r, l) {
  return (an(), Ao(l), (t.flags |= 256), ae(e, t, n, r), t.child);
}
var no = { dehydrated: null, treeContext: null, retryLane: 0 };
function ro(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Nc(e, t, n) {
  var r = t.pendingProps,
    l = Z.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    O(Z, l & 1),
    e === null)
  )
    return (
      Gi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Dl(o, r, 0, null)),
              (e = Lt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ro(n)),
              (t.memoizedState = no),
              e)
            : es(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return _f(e, t, o, r, a, l, n);
  if (i) {
    ((i = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling));
    var s = { mode: 'hidden', children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = yt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (i = yt(a, i)) : ((i = Lt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? ro(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = no),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = yt(i, { mode: 'visible', children: r.children })),
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
function es(e, t) {
  return (
    (t = Dl({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Rr(e, t, n, r) {
  return (
    r !== null && Ao(r),
    un(t, e.child, null, n),
    (e = es(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function _f(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = fi(Error(S(422)))), Rr(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = Dl({ mode: 'visible', children: r.children }, l, 0, null)),
          (i = Lt(i, l, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && un(t, e.child, null, o),
          (t.child.memoizedState = ro(o)),
          (t.memoizedState = no),
          i);
  if (!(t.mode & 1)) return Rr(e, t, o, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (i = Error(S(419))),
      (r = fi(i, r, void 0)),
      Rr(e, t, o, r)
    );
  }
  if (((a = (o & e.childLanes) !== 0), he || a)) {
    if (((r = ee), r !== null)) {
      switch (o & -o) {
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
      ((l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), be(e, l), De(r, e, l, -1)));
    }
    return (os(), (r = fi(Error(S(421)))), Rr(e, t, o, r));
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Bf.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (we = ft(l.nextSibling)),
      (xe = t),
      (A = !0),
      (Me = null),
      e !== null &&
        ((Ce[Ee++] = Ye),
        (Ce[Ee++] = Qe),
        (Ce[Ee++] = Mt),
        (Ye = e.id),
        (Qe = e.overflow),
        (Mt = t)),
      (t = es(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ma(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Xi(e.return, t, n));
}
function hi(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Tc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ae(e, t, r.children, n), (r = Z.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ma(e, n, t);
        else if (e.tag === 19) ma(e, n, t);
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
    r &= 1;
  }
  if ((O(Z, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          ((e = n.alternate),
            e !== null && ml(e) === null && (l = n),
            (n = n.sibling));
        ((n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          hi(t, !1, l, n, i));
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ml(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        hi(t, !0, n, null, i);
        break;
      case 'together':
        hi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Wr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function qe(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Dt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = yt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      ((e = e.sibling),
        (n = n.sibling = yt(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Cf(e, t, n) {
  switch (t.tag) {
    case 3:
      (Ec(t), an());
      break;
    case 5:
      qu(t);
      break;
    case 1:
      ve(t.type) && ul(t);
      break;
    case 4:
      Yo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      (O(pl, r._currentValue), (r._currentValue = l));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (O(Z, Z.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Nc(e, t, n)
            : (O(Z, Z.current & 1),
              (e = qe(e, t, n)),
              e !== null ? e.sibling : null);
      O(Z, Z.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Tc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        O(Z, Z.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), _c(e, t, n));
  }
  return qe(e, t, n);
}
var Pc, lo, jc, Rc;
Pc = function (e, t) {
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
};
lo = function () {};
jc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    ((e = t.stateNode), jt(Ue.current));
    var i = null;
    switch (n) {
      case 'input':
        ((l = Ni(e, l)), (r = Ni(e, r)), (i = []));
        break;
      case 'select':
        ((l = V({}, l, { value: void 0 })),
          (r = V({}, r, { value: void 0 })),
          (i = []));
        break;
      case 'textarea':
        ((l = ji(e, l)), (r = ji(e, r)), (i = []));
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = sl);
    }
    Li(n, r);
    var o;
    n = null;
    for (u in l)
      if (!r.hasOwnProperty(u) && l.hasOwnProperty(u) && l[u] != null)
        if (u === 'style') {
          var a = l[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Zn.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((a = l != null ? l[u] : void 0),
        r.hasOwnProperty(u) && s !== a && (s != null || a != null))
      )
        if (u === 'style')
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ''));
            for (o in s)
              s.hasOwnProperty(o) &&
                a[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else (n || (i || (i = []), i.push(u, n)), (n = s));
        else
          u === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (i = i || []).push(u, s))
            : u === 'children'
              ? (typeof s != 'string' && typeof s != 'number') ||
                (i = i || []).push(u, '' + s)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (Zn.hasOwnProperty(u)
                  ? (s != null && u === 'onScroll' && F('scroll', e),
                    i || a === s || (i = []))
                  : (i = i || []).push(u, s));
    }
    n && (i = i || []).push('style', n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Rc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Nn(e, t) {
  if (!A)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      ((n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling));
  else
    for (l = e.child; l !== null; )
      ((n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function Ef(e, t, n) {
  var r = t.pendingProps;
  switch (($o(t), t.tag)) {
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
      return (ie(t), null);
    case 1:
      return (ve(t.type) && al(), ie(t), null);
    case 3:
      return (
        (r = t.stateNode),
        cn(),
        $(me),
        $(se),
        Ko(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Pr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Me !== null && (fo(Me), (Me = null)))),
        lo(e, t),
        ie(t),
        null
      );
    case 5:
      Qo(t);
      var l = jt(er.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (jc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return (ie(t), null);
        }
        if (((e = jt(Ue.current)), Pr(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[$e] = t), (r[bn] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              (F('cancel', r), F('close', r));
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              F('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < zn.length; l++) F(zn[l], r);
              break;
            case 'source':
              F('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              (F('error', r), F('load', r));
              break;
            case 'details':
              F('toggle', r);
              break;
            case 'input':
              (Cs(r, i), F('invalid', r));
              break;
            case 'select':
              ((r._wrapperState = { wasMultiple: !!i.multiple }),
                F('invalid', r));
              break;
            case 'textarea':
              (Ns(r, i), F('invalid', r));
          }
          (Li(n, i), (l = null));
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Tr(r.textContent, a, e),
                    (l = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Tr(r.textContent, a, e),
                    (l = ['children', '' + a]))
                : Zn.hasOwnProperty(o) &&
                  a != null &&
                  o === 'onScroll' &&
                  F('scroll', r);
            }
          switch (n) {
            case 'input':
              (wr(r), Es(r, i, !0));
              break;
            case 'textarea':
              (wr(r), Ts(r));
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = sl);
          }
          ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((o = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = lu(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = o.createElement('div')),
                  (e.innerHTML = '<script><\/script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === 'select' &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[$e] = t),
            (e[bn] = r),
            Pc(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = zi(n, r)), n)) {
              case 'dialog':
                (F('cancel', e), F('close', e), (l = r));
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                (F('load', e), (l = r));
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < zn.length; l++) F(zn[l], e);
                l = r;
                break;
              case 'source':
                (F('error', e), (l = r));
                break;
              case 'img':
              case 'image':
              case 'link':
                (F('error', e), F('load', e), (l = r));
                break;
              case 'details':
                (F('toggle', e), (l = r));
                break;
              case 'input':
                (Cs(e, r), (l = Ni(e, r)), F('invalid', e));
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = V({}, r, { value: void 0 })),
                  F('invalid', e));
                break;
              case 'textarea':
                (Ns(e, r), (l = ji(e, r)), F('invalid', e));
                break;
              default:
                l = r;
            }
            (Li(n, l), (a = l));
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var s = a[i];
                i === 'style'
                  ? su(e, s)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((s = s ? s.__html : void 0), s != null && iu(e, s))
                    : i === 'children'
                      ? typeof s == 'string'
                        ? (n !== 'textarea' || s !== '') && Hn(e, s)
                        : typeof s == 'number' && Hn(e, '' + s)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (Zn.hasOwnProperty(i)
                          ? s != null && i === 'onScroll' && F('scroll', e)
                          : s != null && Co(e, i, s, o));
              }
            switch (n) {
              case 'input':
                (wr(e), Es(e, r, !1));
                break;
              case 'textarea':
                (wr(e), Ts(e));
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + gt(r.value));
                break;
              case 'select':
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? qt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      qt(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = sl);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
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
      return (ie(t), null);
    case 6:
      if (e && t.stateNode != null) Rc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(S(166));
        if (((n = jt(er.current)), jt(Ue.current), Pr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[$e] = t),
            (i = r.nodeValue !== n) && ((e = xe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Tr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Tr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[$e] = t),
            (t.stateNode = r));
      }
      return (ie(t), null);
    case 13:
      if (
        ($(Z),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (A && we !== null && t.mode & 1 && !(t.flags & 128))
          (Ku(), an(), (t.flags |= 98560), (i = !1));
        else if (((i = Pr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(S(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(S(317));
            i[$e] = t;
          } else
            (an(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (ie(t), (i = !1));
        } else (Me !== null && (fo(Me), (Me = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Z.current & 1 ? J === 0 && (J = 3) : os())),
          t.updateQueue !== null && (t.flags |= 4),
          ie(t),
          null);
    case 4:
      return (
        cn(),
        lo(e, t),
        e === null && Xn(t.stateNode.containerInfo),
        ie(t),
        null
      );
    case 10:
      return (Ho(t.type._context), ie(t), null);
    case 17:
      return (ve(t.type) && al(), ie(t), null);
    case 19:
      if (($(Z), (i = t.memoizedState), i === null)) return (ie(t), null);
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Nn(i, !1);
        else {
          if (J !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = ml(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Nn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  ((i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (O(Z, (Z.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            K() > pn &&
            ((t.flags |= 128), (r = !0), Nn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ml(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Nn(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !o.alternate && !A)
            )
              return (ie(t), null);
          } else
            2 * K() - i.renderingStartTime > pn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Nn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = K()),
          (t.sibling = null),
          (n = Z.current),
          O(Z, r ? (n & 1) | 2 : n & 1),
          t)
        : (ie(t), null);
    case 22:
    case 23:
      return (
        is(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ge & 1073741824 && (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ie(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function Nf(e, t) {
  switch (($o(t), t.tag)) {
    case 1:
      return (
        ve(t.type) && al(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        cn(),
        $(me),
        $(se),
        Ko(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Qo(t), null);
    case 13:
      if (($(Z), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        an();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ($(Z), null);
    case 4:
      return (cn(), null);
    case 10:
      return (Ho(t.type._context), null);
    case 22:
    case 23:
      return (is(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Lr = !1,
  oe = !1,
  Tf = typeof WeakSet == 'function' ? WeakSet : Set,
  E = null;
function Jt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        Y(e, t, r);
      }
    else n.current = null;
}
function io(e, t, n) {
  try {
    n();
  } catch (r) {
    Y(e, t, r);
  }
}
var va = !1;
function Pf(e, t) {
  if (((Zi = ll), (e = Du()), Oo(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, i.nodeType);
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            s = -1,
            u = 0,
            f = 0,
            m = e,
            v = null;
          t: for (;;) {
            for (
              var w;
              m !== n || (l !== 0 && m.nodeType !== 3) || (a = o + l),
                m !== i || (r !== 0 && m.nodeType !== 3) || (s = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (w = m.firstChild) !== null;

            )
              ((v = m), (m = w));
            for (;;) {
              if (m === e) break t;
              if (
                (v === n && ++u === l && (a = o),
                v === i && ++f === r && (s = o),
                (w = m.nextSibling) !== null)
              )
                break;
              ((m = v), (v = m.parentNode));
            }
            m = w;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Hi = { focusedElem: e, selectionRange: n }, ll = !1, E = t; E !== null; )
    if (((t = E), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (E = e));
    else
      for (; E !== null; ) {
        t = E;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var g = x.memoizedProps,
                    C = x.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Le(t.type, g),
                      C
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = '')
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (k) {
          Y(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (E = e));
          break;
        }
        E = t.return;
      }
  return ((x = va), (va = !1), x);
}
function $n(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        ((l.destroy = void 0), i !== void 0 && io(t, n, i));
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ml(e, t) {
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
function oo(e) {
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
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Lc(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Lc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[$e], delete t[bn], delete t[Yi], delete t[cf], delete t[df])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function zc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ya(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || zc(e.return)) return null;
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
function so(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = sl)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (so(e, t, n), e = e.sibling; e !== null; )
      (so(e, t, n), (e = e.sibling));
}
function ao(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ao(e, t, n), e = e.sibling; e !== null; )
      (ao(e, t, n), (e = e.sibling));
}
var te = null,
  ze = !1;
function rt(e, t, n) {
  for (n = n.child; n !== null; ) (Mc(e, t, n), (n = n.sibling));
}
function Mc(e, t, n) {
  if (Ae && typeof Ae.onCommitFiberUnmount == 'function')
    try {
      Ae.onCommitFiberUnmount(El, n);
    } catch {}
  switch (n.tag) {
    case 5:
      oe || Jt(n, t);
    case 6:
      var r = te,
        l = ze;
      ((te = null),
        rt(e, t, n),
        (te = r),
        (ze = l),
        te !== null &&
          (ze
            ? ((e = te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : te.removeChild(n.stateNode)));
      break;
    case 18:
      te !== null &&
        (ze
          ? ((e = te),
            (n = n.stateNode),
            e.nodeType === 8
              ? si(e.parentNode, n)
              : e.nodeType === 1 && si(e, n),
            Qn(e))
          : si(te, n.stateNode));
      break;
    case 4:
      ((r = te),
        (l = ze),
        (te = n.stateNode.containerInfo),
        (ze = !0),
        rt(e, t, n),
        (te = r),
        (ze = l));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !oe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          ((i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && io(n, t, o),
            (l = l.next));
        } while (l !== r);
      }
      rt(e, t, n);
      break;
    case 1:
      if (
        !oe &&
        (Jt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          Y(n, t, a);
        }
      rt(e, t, n);
      break;
    case 21:
      rt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((oe = (r = oe) || n.memoizedState !== null), rt(e, t, n), (oe = r))
        : rt(e, t, n);
      break;
    default:
      rt(e, t, n);
  }
}
function ga(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Tf()),
      t.forEach(function (r) {
        var l = Of.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      }));
  }
}
function Re(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((te = a.stateNode), (ze = !1));
              break e;
            case 3:
              ((te = a.stateNode.containerInfo), (ze = !0));
              break e;
            case 4:
              ((te = a.stateNode.containerInfo), (ze = !0));
              break e;
          }
          a = a.return;
        }
        if (te === null) throw Error(S(160));
        (Mc(i, o, l), (te = null), (ze = !1));
        var s = l.alternate;
        (s !== null && (s.return = null), (l.return = null));
      } catch (u) {
        Y(l, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Ic(t, e), (t = t.sibling));
}
function Ic(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Re(t, e), Oe(e), r & 4)) {
        try {
          ($n(3, e, e.return), Ml(3, e));
        } catch (g) {
          Y(e, e.return, g);
        }
        try {
          $n(5, e, e.return);
        } catch (g) {
          Y(e, e.return, g);
        }
      }
      break;
    case 1:
      (Re(t, e), Oe(e), r & 512 && n !== null && Jt(n, n.return));
      break;
    case 5:
      if (
        (Re(t, e),
        Oe(e),
        r & 512 && n !== null && Jt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Hn(l, '');
        } catch (g) {
          Y(e, e.return, g);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            (a === 'input' && i.type === 'radio' && i.name != null && nu(l, i),
              zi(a, o));
            var u = zi(a, i);
            for (o = 0; o < s.length; o += 2) {
              var f = s[o],
                m = s[o + 1];
              f === 'style'
                ? su(l, m)
                : f === 'dangerouslySetInnerHTML'
                  ? iu(l, m)
                  : f === 'children'
                    ? Hn(l, m)
                    : Co(l, f, m, u);
            }
            switch (a) {
              case 'input':
                Ti(l, i);
                break;
              case 'textarea':
                ru(l, i);
                break;
              case 'select':
                var v = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? qt(l, !!i.multiple, w, !1)
                  : v !== !!i.multiple &&
                    (i.defaultValue != null
                      ? qt(l, !!i.multiple, i.defaultValue, !0)
                      : qt(l, !!i.multiple, i.multiple ? [] : '', !1));
            }
            l[bn] = i;
          } catch (g) {
            Y(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Re(t, e), Oe(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        ((l = e.stateNode), (i = e.memoizedProps));
        try {
          l.nodeValue = i;
        } catch (g) {
          Y(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Re(t, e), Oe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Qn(t.containerInfo);
        } catch (g) {
          Y(e, e.return, g);
        }
      break;
    case 4:
      (Re(t, e), Oe(e));
      break;
    case 13:
      (Re(t, e),
        Oe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (rs = K())),
        r & 4 && ga(e));
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((oe = (u = oe) || f), Re(t, e), (oe = u)) : Re(t, e),
        Oe(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (E = e, f = e.child; f !== null; ) {
            for (m = E = f; E !== null; ) {
              switch (((v = E), (w = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  $n(4, v, v.return);
                  break;
                case 1:
                  Jt(v, v.return);
                  var x = v.stateNode;
                  if (typeof x.componentWillUnmount == 'function') {
                    ((r = v), (n = v.return));
                    try {
                      ((t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount());
                    } catch (g) {
                      Y(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Jt(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    xa(m);
                    continue;
                  }
              }
              w !== null ? ((w.return = v), (E = w)) : xa(m);
            }
            f = f.sibling;
          }
        e: for (f = null, m = e; ; ) {
          if (m.tag === 5) {
            if (f === null) {
              f = m;
              try {
                ((l = m.stateNode),
                  u
                    ? ((i = l.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((a = m.stateNode),
                      (s = m.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (a.style.display = ou('display', o))));
              } catch (g) {
                Y(e, e.return, g);
              }
            }
          } else if (m.tag === 6) {
            if (f === null)
              try {
                m.stateNode.nodeValue = u ? '' : m.memoizedProps;
              } catch (g) {
                Y(e, e.return, g);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            ((m.child.return = m), (m = m.child));
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            (f === m && (f = null), (m = m.return));
          }
          (f === m && (f = null),
            (m.sibling.return = m.return),
            (m = m.sibling));
        }
      }
      break;
    case 19:
      (Re(t, e), Oe(e), r & 4 && ga(e));
      break;
    case 21:
      break;
    default:
      (Re(t, e), Oe(e));
  }
}
function Oe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (zc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Hn(l, ''), (r.flags &= -33));
          var i = ya(e);
          ao(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = ya(e);
          so(e, a, o);
          break;
        default:
          throw Error(S(161));
      }
    } catch (s) {
      Y(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function jf(e, t, n) {
  ((E = e), Dc(e));
}
function Dc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var l = E,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Lr;
      if (!o) {
        var a = l.alternate,
          s = (a !== null && a.memoizedState !== null) || oe;
        a = Lr;
        var u = oe;
        if (((Lr = o), (oe = s) && !u))
          for (E = l; E !== null; )
            ((o = E),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? ka(l)
                : s !== null
                  ? ((s.return = o), (E = s))
                  : ka(l));
        for (; i !== null; ) ((E = i), Dc(i), (i = i.sibling));
        ((E = l), (Lr = a), (oe = u));
      }
      wa(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (E = i)) : wa(e);
  }
}
function wa(e) {
  for (; E !== null; ) {
    var t = E;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              oe || Ml(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !oe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Le(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && ra(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ra(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus();
                    break;
                  case 'img':
                    s.src && (n.src = s.src);
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
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var m = f.dehydrated;
                    m !== null && Qn(m);
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
              throw Error(S(163));
          }
        oe || (t.flags & 512 && oo(t));
      } catch (v) {
        Y(t, t.return, v);
      }
    }
    if (t === e) {
      E = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (E = n));
      break;
    }
    E = t.return;
  }
}
function xa(e) {
  for (; E !== null; ) {
    var t = E;
    if (t === e) {
      E = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (E = n));
      break;
    }
    E = t.return;
  }
}
function ka(e) {
  for (; E !== null; ) {
    var t = E;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ml(4, t);
          } catch (s) {
            Y(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Y(t, l, s);
            }
          }
          var i = t.return;
          try {
            oo(t);
          } catch (s) {
            Y(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            oo(t);
          } catch (s) {
            Y(t, o, s);
          }
      }
    } catch (s) {
      Y(t, t.return, s);
    }
    if (t === e) {
      E = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (E = a));
      break;
    }
    E = t.return;
  }
}
var Rf = Math.ceil,
  gl = tt.ReactCurrentDispatcher,
  ts = tt.ReactCurrentOwner,
  Te = tt.ReactCurrentBatchConfig,
  D = 0,
  ee = null,
  G = null,
  ne = 0,
  ge = 0,
  bt = kt(0),
  J = 0,
  lr = null,
  Dt = 0,
  Il = 0,
  ns = 0,
  An = null,
  fe = null,
  rs = 0,
  pn = 1 / 0,
  We = null,
  wl = !1,
  uo = null,
  mt = null,
  zr = !1,
  ut = null,
  xl = 0,
  Un = 0,
  co = null,
  Vr = -1,
  Yr = 0;
function ue() {
  return D & 6 ? K() : Vr !== -1 ? Vr : (Vr = K());
}
function vt(e) {
  return e.mode & 1
    ? D & 2 && ne !== 0
      ? ne & -ne
      : ff.transition !== null
        ? (Yr === 0 && (Yr = wu()), Yr)
        : ((e = B),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Nu(e.type))),
          e)
    : 1;
}
function De(e, t, n, r) {
  if (50 < Un) throw ((Un = 0), (co = null), Error(S(185)));
  (ar(e, n, r),
    (!(D & 2) || e !== ee) &&
      (e === ee && (!(D & 2) && (Il |= n), J === 4 && st(e, ne)),
      ye(e, r),
      n === 1 && D === 0 && !(t.mode & 1) && ((pn = K() + 500), Rl && St())));
}
function ye(e, t) {
  var n = e.callbackNode;
  pp(e, t);
  var r = rl(e, e === ee ? ne : 0);
  if (r === 0)
    (n !== null && Rs(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Rs(n), t === 1))
      (e.tag === 0 ? pf(Sa.bind(null, e)) : Vu(Sa.bind(null, e)),
        af(function () {
          !(D & 6) && St();
        }),
        (n = null));
    else {
      switch (xu(r)) {
        case 1:
          n = jo;
          break;
        case 4:
          n = yu;
          break;
        case 16:
          n = nl;
          break;
        case 536870912:
          n = gu;
          break;
        default:
          n = nl;
      }
      n = Hc(n, Bc.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Bc(e, t) {
  if (((Vr = -1), (Yr = 0), D & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (ln() && e.callbackNode !== n) return null;
  var r = rl(e, e === ee ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = kl(e, r);
  else {
    t = r;
    var l = D;
    D |= 2;
    var i = Fc();
    (ee !== e || ne !== t) && ((We = null), (pn = K() + 500), Rt(e, t));
    do
      try {
        Mf();
        break;
      } catch (a) {
        Oc(e, a);
      }
    while (!0);
    (Zo(),
      (gl.current = i),
      (D = l),
      G !== null ? (t = 0) : ((ee = null), (ne = 0), (t = J)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Oi(e)), l !== 0 && ((r = l), (t = po(e, l)))), t === 1)
    )
      throw ((n = lr), Rt(e, 0), st(e, r), ye(e, K()), n);
    if (t === 6) st(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Lf(l) &&
          ((t = kl(e, r)),
          t === 2 && ((i = Oi(e)), i !== 0 && ((r = i), (t = po(e, i)))),
          t === 1))
      )
        throw ((n = lr), Rt(e, 0), st(e, r), ye(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Nt(e, fe, We);
          break;
        case 3:
          if (
            (st(e, r), (r & 130023424) === r && ((t = rs + 500 - K()), 10 < t))
          ) {
            if (rl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              (ue(), (e.pingedLanes |= e.suspendedLanes & l));
              break;
            }
            e.timeoutHandle = Vi(Nt.bind(null, e, fe, We), t);
            break;
          }
          Nt(e, fe, We);
          break;
        case 4:
          if ((st(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Ie(r);
            ((i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i));
          }
          if (
            ((r = l),
            (r = K() - r),
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
                          : 1960 * Rf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Vi(Nt.bind(null, e, fe, We), r);
            break;
          }
          Nt(e, fe, We);
          break;
        case 5:
          Nt(e, fe, We);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return (ye(e, K()), e.callbackNode === n ? Bc.bind(null, e) : null);
}
function po(e, t) {
  var n = An;
  return (
    e.current.memoizedState.isDehydrated && (Rt(e, t).flags |= 256),
    (e = kl(e, t)),
    e !== 2 && ((t = fe), (fe = n), t !== null && fo(t)),
    e
  );
}
function fo(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function Lf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Be(i(), l)) return !1;
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
function st(e, t) {
  for (
    t &= ~ns,
      t &= ~Il,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ie(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Sa(e) {
  if (D & 6) throw Error(S(327));
  ln();
  var t = rl(e, 0);
  if (!(t & 1)) return (ye(e, K()), null);
  var n = kl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Oi(e);
    r !== 0 && ((t = r), (n = po(e, r)));
  }
  if (n === 1) throw ((n = lr), Rt(e, 0), st(e, t), ye(e, K()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Nt(e, fe, We),
    ye(e, K()),
    null
  );
}
function ls(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    ((D = n), D === 0 && ((pn = K() + 500), Rl && St()));
  }
}
function Bt(e) {
  ut !== null && ut.tag === 0 && !(D & 6) && ln();
  var t = D;
  D |= 1;
  var n = Te.transition,
    r = B;
  try {
    if (((Te.transition = null), (B = 1), e)) return e();
  } finally {
    ((B = r), (Te.transition = n), (D = t), !(D & 6) && St());
  }
}
function is() {
  ((ge = bt.current), $(bt));
}
function Rt(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), sf(n)), G !== null))
    for (n = G.return; n !== null; ) {
      var r = n;
      switch (($o(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && al());
          break;
        case 3:
          (cn(), $(me), $(se), Ko());
          break;
        case 5:
          Qo(r);
          break;
        case 4:
          cn();
          break;
        case 13:
          $(Z);
          break;
        case 19:
          $(Z);
          break;
        case 10:
          Ho(r.type._context);
          break;
        case 22:
        case 23:
          is();
      }
      n = n.return;
    }
  if (
    ((ee = e),
    (G = e = yt(e.current, null)),
    (ne = ge = t),
    (J = 0),
    (lr = null),
    (ns = Il = Dt = 0),
    (fe = An = null),
    Pt !== null)
  ) {
    for (t = 0; t < Pt.length; t++)
      if (((n = Pt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          ((i.next = l), (r.next = o));
        }
        n.pending = r;
      }
    Pt = null;
  }
  return e;
}
function Oc(e, t) {
  do {
    var n = G;
    try {
      if ((Zo(), (Zr.current = yl), vl)) {
        for (var r = H.memoizedState; r !== null; ) {
          var l = r.queue;
          (l !== null && (l.pending = null), (r = r.next));
        }
        vl = !1;
      }
      if (
        ((It = 0),
        (q = X = H = null),
        (Fn = !1),
        (tr = 0),
        (ts.current = null),
        n === null || n.return === null)
      ) {
        ((J = 1), (lr = t), (G = null));
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          s = t;
        if (
          ((t = ne),
          (a.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var u = s,
            f = a,
            m = f.tag;
          if (!(f.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var v = f.alternate;
            v
              ? ((f.updateQueue = v.updateQueue),
                (f.memoizedState = v.memoizedState),
                (f.lanes = v.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var w = ua(o);
          if (w !== null) {
            ((w.flags &= -257),
              ca(w, o, a, i, t),
              w.mode & 1 && aa(i, u, t),
              (t = w),
              (s = u));
            var x = t.updateQueue;
            if (x === null) {
              var g = new Set();
              (g.add(s), (t.updateQueue = g));
            } else x.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              (aa(i, u, t), os());
              break e;
            }
            s = Error(S(426));
          }
        } else if (A && a.mode & 1) {
          var C = ua(o);
          if (C !== null) {
            (!(C.flags & 65536) && (C.flags |= 256),
              ca(C, o, a, i, t),
              Ao(dn(s, a)));
            break e;
          }
        }
        ((i = s = dn(s, a)),
          J !== 4 && (J = 2),
          An === null ? (An = [i]) : An.push(i),
          (i = o));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var d = xc(i, s, t);
              na(i, d);
              break e;
            case 1:
              a = s;
              var c = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == 'function' ||
                  (h !== null &&
                    typeof h.componentDidCatch == 'function' &&
                    (mt === null || !mt.has(h))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var k = kc(i, a, t);
                na(i, k);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ac(n);
    } catch (_) {
      ((t = _), G === n && n !== null && (G = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Fc() {
  var e = gl.current;
  return ((gl.current = yl), e === null ? yl : e);
}
function os() {
  ((J === 0 || J === 3 || J === 2) && (J = 4),
    ee === null || (!(Dt & 268435455) && !(Il & 268435455)) || st(ee, ne));
}
function kl(e, t) {
  var n = D;
  D |= 2;
  var r = Fc();
  (ee !== e || ne !== t) && ((We = null), Rt(e, t));
  do
    try {
      zf();
      break;
    } catch (l) {
      Oc(e, l);
    }
  while (!0);
  if ((Zo(), (D = n), (gl.current = r), G !== null)) throw Error(S(261));
  return ((ee = null), (ne = 0), J);
}
function zf() {
  for (; G !== null; ) $c(G);
}
function Mf() {
  for (; G !== null && !rp(); ) $c(G);
}
function $c(e) {
  var t = Zc(e.alternate, e, ge);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Ac(e) : (G = t),
    (ts.current = null));
}
function Ac(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Nf(n, t)), n !== null)) {
        ((n.flags &= 32767), (G = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((J = 6), (G = null));
        return;
      }
    } else if (((n = Ef(n, t, ge)), n !== null)) {
      G = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      G = t;
      return;
    }
    G = t = e;
  } while (t !== null);
  J === 0 && (J = 5);
}
function Nt(e, t, n) {
  var r = B,
    l = Te.transition;
  try {
    ((Te.transition = null), (B = 1), If(e, t, n, r));
  } finally {
    ((Te.transition = l), (B = r));
  }
  return null;
}
function If(e, t, n, r) {
  do ln();
  while (ut !== null);
  if (D & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (fp(e, i),
    e === ee && ((G = ee = null), (ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      zr ||
      ((zr = !0),
      Hc(nl, function () {
        return (ln(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = Te.transition), (Te.transition = null));
    var o = B;
    B = 1;
    var a = D;
    ((D |= 4),
      (ts.current = null),
      Pf(e, n),
      Ic(n, e),
      qp(Hi),
      (ll = !!Zi),
      (Hi = Zi = null),
      (e.current = n),
      jf(n),
      lp(),
      (D = a),
      (B = o),
      (Te.transition = i));
  } else e.current = n;
  if (
    (zr && ((zr = !1), (ut = e), (xl = l)),
    (i = e.pendingLanes),
    i === 0 && (mt = null),
    sp(n.stateNode),
    ye(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
  if (wl) throw ((wl = !1), (e = uo), (uo = null), e);
  return (
    xl & 1 && e.tag !== 0 && ln(),
    (i = e.pendingLanes),
    i & 1 ? (e === co ? Un++ : ((Un = 0), (co = e))) : (Un = 0),
    St(),
    null
  );
}
function ln() {
  if (ut !== null) {
    var e = xu(xl),
      t = Te.transition,
      n = B;
    try {
      if (((Te.transition = null), (B = 16 > e ? 16 : e), ut === null))
        var r = !1;
      else {
        if (((e = ut), (ut = null), (xl = 0), D & 6)) throw Error(S(331));
        var l = D;
        for (D |= 4, E = e.current; E !== null; ) {
          var i = E,
            o = i.child;
          if (E.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (E = u; E !== null; ) {
                  var f = E;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $n(8, f, i);
                  }
                  var m = f.child;
                  if (m !== null) ((m.return = f), (E = m));
                  else
                    for (; E !== null; ) {
                      f = E;
                      var v = f.sibling,
                        w = f.return;
                      if ((Lc(f), f === u)) {
                        E = null;
                        break;
                      }
                      if (v !== null) {
                        ((v.return = w), (E = v));
                        break;
                      }
                      E = w;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var g = x.child;
                if (g !== null) {
                  x.child = null;
                  do {
                    var C = g.sibling;
                    ((g.sibling = null), (g = C));
                  } while (g !== null);
                }
              }
              E = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) ((o.return = i), (E = o));
          else
            e: for (; E !== null; ) {
              if (((i = E), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    $n(9, i, i.return);
                }
              var d = i.sibling;
              if (d !== null) {
                ((d.return = i.return), (E = d));
                break e;
              }
              E = i.return;
            }
        }
        var c = e.current;
        for (E = c; E !== null; ) {
          o = E;
          var h = o.child;
          if (o.subtreeFlags & 2064 && h !== null) ((h.return = o), (E = h));
          else
            e: for (o = c; E !== null; ) {
              if (((a = E), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ml(9, a);
                  }
                } catch (_) {
                  Y(a, a.return, _);
                }
              if (a === o) {
                E = null;
                break e;
              }
              var k = a.sibling;
              if (k !== null) {
                ((k.return = a.return), (E = k));
                break e;
              }
              E = a.return;
            }
        }
        if (
          ((D = l), St(), Ae && typeof Ae.onPostCommitFiberRoot == 'function')
        )
          try {
            Ae.onPostCommitFiberRoot(El, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((B = n), (Te.transition = t));
    }
  }
  return !1;
}
function _a(e, t, n) {
  ((t = dn(n, t)),
    (t = xc(e, t, 1)),
    (e = ht(e, t, 1)),
    (t = ue()),
    e !== null && (ar(e, 1, t), ye(e, t)));
}
function Y(e, t, n) {
  if (e.tag === 3) _a(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        _a(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (mt === null || !mt.has(r)))
        ) {
          ((e = dn(n, e)),
            (e = kc(t, e, 1)),
            (t = ht(t, e, 1)),
            (e = ue()),
            t !== null && (ar(t, 1, e), ye(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Df(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ee === e &&
      (ne & n) === n &&
      (J === 4 || (J === 3 && (ne & 130023424) === ne && 500 > K() - rs)
        ? Rt(e, 0)
        : (ns |= n)),
    ye(e, t));
}
function Uc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Sr), (Sr <<= 1), !(Sr & 130023424) && (Sr = 4194304))
      : (t = 1));
  var n = ue();
  ((e = be(e, t)), e !== null && (ar(e, t, n), ye(e, n)));
}
function Bf(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Uc(e, n));
}
function Of(e, t) {
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
      throw Error(S(314));
  }
  (r !== null && r.delete(t), Uc(e, n));
}
var Zc;
Zc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || me.current) he = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((he = !1), Cf(e, t, n));
      he = !!(e.flags & 131072);
    }
  else ((he = !1), A && t.flags & 1048576 && Yu(t, dl, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Wr(e, t), (e = t.pendingProps));
      var l = sn(t, se.current);
      (rn(t, n), (l = Xo(null, t, r, e, l, n)));
      var i = Jo();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ve(r) ? ((i = !0), ul(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Vo(t),
            (l.updater = zl),
            (t.stateNode = l),
            (l._reactInternals = t),
            bi(t, r, e, n),
            (t = to(null, t, r, !0, i, n)))
          : ((t.tag = 0), A && i && Fo(t), ae(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Wr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = $f(r)),
          (e = Le(r, e)),
          l)
        ) {
          case 0:
            t = eo(null, t, r, e, n);
            break e;
          case 1:
            t = fa(null, t, r, e, n);
            break e;
          case 11:
            t = da(null, t, r, e, n);
            break e;
          case 14:
            t = pa(null, t, r, Le(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        eo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        fa(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ec(t), e === null)) throw Error(S(387));
        ((r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          bu(e, t),
          hl(t, r, null, n));
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ((l = dn(Error(S(423)), t)), (t = ha(e, t, r, n, l)));
            break e;
          } else if (r !== l) {
            ((l = dn(Error(S(424)), t)), (t = ha(e, t, r, n, l)));
            break e;
          } else
            for (
              we = ft(t.stateNode.containerInfo.firstChild),
                xe = t,
                A = !0,
                Me = null,
                n = Xu(t, null, r, n),
                t.child = n;
              n;

            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((an(), r === l)) {
            t = qe(e, t, n);
            break e;
          }
          ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        qu(t),
        e === null && Gi(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Wi(r, l) ? (o = null) : i !== null && Wi(r, i) && (t.flags |= 32),
        Cc(e, t),
        ae(e, t, o, n),
        t.child
      );
    case 6:
      return (e === null && Gi(t), null);
    case 13:
      return Nc(e, t, n);
    case 4:
      return (
        Yo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = un(t, null, r, n)) : ae(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        da(e, t, r, l, n)
      );
    case 7:
      return (ae(e, t, t.pendingProps, n), t.child);
    case 8:
      return (ae(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (ae(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          O(pl, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Be(i.value, o)) {
            if (i.children === l.children && !me.current) {
              t = qe(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      ((s = Ke(-1, n & -n)), (s.tag = 2));
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        (f === null
                          ? (s.next = s)
                          : ((s.next = f.next), (f.next = s)),
                          (u.pending = s));
                      }
                    }
                    ((i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Xi(i.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(S(341));
                ((o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Xi(o, n, t),
                  (o = i.sibling));
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    ((i.return = o.return), (o = i));
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        (ae(e, t, l.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        rn(t, n),
        (l = Pe(l)),
        (r = r(l)),
        (t.flags |= 1),
        ae(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Le(r, t.pendingProps)),
        (l = Le(r.type, l)),
        pa(e, t, r, l, n)
      );
    case 15:
      return Sc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Wr(e, t),
        (t.tag = 1),
        ve(r) ? ((e = !0), ul(t)) : (e = !1),
        rn(t, n),
        wc(t, r, l),
        bi(t, r, l, n),
        to(null, t, r, !0, e, n)
      );
    case 19:
      return Tc(e, t, n);
    case 22:
      return _c(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function Hc(e, t) {
  return vu(e, t);
}
function Ff(e, t, n, r) {
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
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Ne(e, t, n, r) {
  return new Ff(e, t, n, r);
}
function ss(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function $f(e) {
  if (typeof e == 'function') return ss(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === No)) return 11;
    if (e === To) return 14;
  }
  return 2;
}
function yt(e, t) {
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
function Qr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == 'function')) ss(e) && (o = 1);
  else if (typeof e == 'string') o = 5;
  else
    e: switch (e) {
      case Zt:
        return Lt(n.children, l, i, t);
      case Eo:
        ((o = 8), (l |= 8));
        break;
      case Si:
        return (
          (e = Ne(12, n, t, l | 2)),
          (e.elementType = Si),
          (e.lanes = i),
          e
        );
      case _i:
        return ((e = Ne(13, n, t, l)), (e.elementType = _i), (e.lanes = i), e);
      case Ci:
        return ((e = Ne(19, n, t, l)), (e.elementType = Ci), (e.lanes = i), e);
      case qa:
        return Dl(n, l, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Ja:
              o = 10;
              break e;
            case ba:
              o = 9;
              break e;
            case No:
              o = 11;
              break e;
            case To:
              o = 14;
              break e;
            case lt:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Ne(o, n, t, l)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = i),
    t
  );
}
function Lt(e, t, n, r) {
  return ((e = Ne(7, e, r, t)), (e.lanes = n), e);
}
function Dl(e, t, n, r) {
  return (
    (e = Ne(22, e, r, t)),
    (e.elementType = qa),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function mi(e, t, n) {
  return ((e = Ne(6, e, null, t)), (e.lanes = n), e);
}
function vi(e, t, n) {
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
function Af(e, t, n, r, l) {
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
    (this.eventTimes = Xl(0)),
    (this.expirationTimes = Xl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Xl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null));
}
function as(e, t, n, r, l, i, o, a, s) {
  return (
    (e = new Af(e, t, n, a, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ne(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Vo(i),
    e
  );
}
function Uf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ut,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Wc(e) {
  if (!e) return wt;
  e = e._reactInternals;
  e: {
    if (Ft(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ve(n)) return Wu(e, n, t);
  }
  return t;
}
function Vc(e, t, n, r, l, i, o, a, s) {
  return (
    (e = as(n, r, !0, e, l, i, o, a, s)),
    (e.context = Wc(null)),
    (n = e.current),
    (r = ue()),
    (l = vt(n)),
    (i = Ke(r, l)),
    (i.callback = t ?? null),
    ht(n, i, l),
    (e.current.lanes = l),
    ar(e, l, r),
    ye(e, r),
    e
  );
}
function Bl(e, t, n, r) {
  var l = t.current,
    i = ue(),
    o = vt(l);
  return (
    (n = Wc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ke(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ht(l, t, o)),
    e !== null && (De(e, l, o, i), Ur(e, l, o)),
    o
  );
}
function Sl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ca(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function us(e, t) {
  (Ca(e, t), (e = e.alternate) && Ca(e, t));
}
function Zf() {
  return null;
}
var Yc =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function cs(e) {
  this._internalRoot = e;
}
Ol.prototype.render = cs.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Bl(e, t, null, null);
};
Ol.prototype.unmount = cs.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Bt(function () {
      Bl(null, e, null, null);
    }),
      (t[Je] = null));
  }
};
function Ol(e) {
  this._internalRoot = e;
}
Ol.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = _u();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ot.length && t !== 0 && t < ot[n].priority; n++);
    (ot.splice(n, 0, e), n === 0 && Eu(e));
  }
};
function ds(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Fl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Ea() {}
function Hf(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var u = Sl(o);
        i.call(u);
      };
    }
    var o = Vc(t, r, e, 0, null, !1, !1, '', Ea);
    return (
      (e._reactRootContainer = o),
      (e[Je] = o.current),
      Xn(e.nodeType === 8 ? e.parentNode : e),
      Bt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var u = Sl(s);
      a.call(u);
    };
  }
  var s = as(e, 0, !1, null, null, !1, !1, '', Ea);
  return (
    (e._reactRootContainer = s),
    (e[Je] = s.current),
    Xn(e.nodeType === 8 ? e.parentNode : e),
    Bt(function () {
      Bl(t, s, n, r);
    }),
    s
  );
}
function $l(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == 'function') {
      var a = l;
      l = function () {
        var s = Sl(o);
        a.call(s);
      };
    }
    Bl(t, o, e, l);
  } else o = Hf(n, t, e, l, r);
  return Sl(o);
}
ku = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ln(t.pendingLanes);
        n !== 0 &&
          (Ro(t, n | 1), ye(t, K()), !(D & 6) && ((pn = K() + 500), St()));
      }
      break;
    case 13:
      (Bt(function () {
        var r = be(e, 1);
        if (r !== null) {
          var l = ue();
          De(r, e, 1, l);
        }
      }),
        us(e, 1));
  }
};
Lo = function (e) {
  if (e.tag === 13) {
    var t = be(e, 134217728);
    if (t !== null) {
      var n = ue();
      De(t, e, 134217728, n);
    }
    us(e, 134217728);
  }
};
Su = function (e) {
  if (e.tag === 13) {
    var t = vt(e),
      n = be(e, t);
    if (n !== null) {
      var r = ue();
      De(n, e, t, r);
    }
    us(e, t);
  }
};
_u = function () {
  return B;
};
Cu = function (e, t) {
  var n = B;
  try {
    return ((B = e), t());
  } finally {
    B = n;
  }
};
Ii = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Ti(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = jl(r);
            if (!l) throw Error(S(90));
            (tu(r), Ti(r, l));
          }
        }
      }
      break;
    case 'textarea':
      ru(e, n);
      break;
    case 'select':
      ((t = n.value), t != null && qt(e, !!n.multiple, t, !1));
  }
};
cu = ls;
du = Bt;
var Wf = { usingClientEntryPoint: !1, Events: [cr, Yt, jl, au, uu, ls] },
  Tn = {
    findFiberByHostInstance: Tt,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  Vf = {
    bundleType: Tn.bundleType,
    version: Tn.version,
    rendererPackageName: Tn.rendererPackageName,
    rendererConfig: Tn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: tt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = hu(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Tn.findFiberByHostInstance || Zf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Mr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Mr.isDisabled && Mr.supportsFiber)
    try {
      ((El = Mr.inject(Vf)), (Ae = Mr));
    } catch {}
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wf;
Se.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ds(t)) throw Error(S(200));
  return Uf(e, t, null, n);
};
Se.createRoot = function (e, t) {
  if (!ds(e)) throw Error(S(299));
  var n = !1,
    r = '',
    l = Yc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = as(e, 1, !1, null, null, n, !1, r, l)),
    (e[Je] = t.current),
    Xn(e.nodeType === 8 ? e.parentNode : e),
    new cs(t)
  );
};
Se.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(S(188))
      : ((e = Object.keys(e).join(',')), Error(S(268, e)));
  return ((e = hu(t)), (e = e === null ? null : e.stateNode), e);
};
Se.flushSync = function (e) {
  return Bt(e);
};
Se.hydrate = function (e, t, n) {
  if (!Fl(t)) throw Error(S(200));
  return $l(null, e, t, !0, n);
};
Se.hydrateRoot = function (e, t, n) {
  if (!ds(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = '',
    o = Yc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Vc(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Je] = t.current),
    Xn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l));
  return new Ol(t);
};
Se.render = function (e, t, n) {
  if (!Fl(t)) throw Error(S(200));
  return $l(null, e, t, !1, n);
};
Se.unmountComponentAtNode = function (e) {
  if (!Fl(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (Bt(function () {
        $l(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Je] = null));
        });
      }),
      !0)
    : !1;
};
Se.unstable_batchedUpdates = ls;
Se.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Fl(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return $l(e, t, n, !1, r);
};
Se.version = '18.3.1-next-f1338f8080-20240426';
function Qc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qc);
    } catch (e) {
      console.error(e);
    }
}
(Qc(), (Qa.exports = Se));
var Yf = Qa.exports,
  Kc,
  Na = Yf;
((Kc = Na.createRoot), Na.hydrateRoot);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Qf = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kf = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase()
      .trim(),
  U = (e, t) => {
    const n = y.forwardRef(
      (
        {
          color: r = 'currentColor',
          size: l = 24,
          strokeWidth: i = 2,
          absoluteStrokeWidth: o,
          className: a = '',
          children: s,
          ...u
        },
        f
      ) =>
        y.createElement(
          'svg',
          {
            ref: f,
            ...Qf,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: o ? (Number(i) * 24) / Number(l) : i,
            className: ['lucide', `lucide-${Kf(e)}`, a].join(' '),
            ...u,
          },
          [
            ...t.map(([m, v]) => y.createElement(m, v)),
            ...(Array.isArray(s) ? s : [s]),
          ]
        )
    );
    return ((n.displayName = `${e}`), n);
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gf = U('AlertCircle', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['line', { x1: '12', x2: '12', y1: '8', y2: '12', key: '1pkeuh' }],
  ['line', { x1: '12', x2: '12.01', y1: '16', y2: '16', key: '4dfq90' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xf = U('AlertTriangle', [
  [
    'path',
    {
      d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z',
      key: 'c3ski4',
    },
  ],
  ['path', { d: 'M12 9v4', key: 'juzpu7' }],
  ['path', { d: 'M12 17h.01', key: 'p32p05' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gc = U('Calendar', [
  ['path', { d: 'M8 2v4', key: '1cmpym' }],
  ['path', { d: 'M16 2v4', key: '4m81vk' }],
  [
    'rect',
    { width: '18', height: '18', x: '3', y: '4', rx: '2', key: '1hopcy' },
  ],
  ['path', { d: 'M3 10h18', key: '8toen8' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jf = U('Car', [
  [
    'path',
    {
      d: 'M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2',
      key: '5owen',
    },
  ],
  ['circle', { cx: '7', cy: '17', r: '2', key: 'u2ysq9' }],
  ['path', { d: 'M9 17h6', key: 'r8uit2' }],
  ['circle', { cx: '17', cy: '17', r: '2', key: 'axvx0g' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bf = U('ChevronLeft', [
  ['path', { d: 'm15 18-6-6 6-6', key: '1wnfg3' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qf = U('ChevronRight', [
  ['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eh = U('ChevronsLeft', [
  ['path', { d: 'm11 17-5-5 5-5', key: '13zhaf' }],
  ['path', { d: 'm18 17-5-5 5-5', key: 'h8a8et' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const th = U('ChevronsRight', [
  ['path', { d: 'm6 17 5-5-5-5', key: 'xnjwq' }],
  ['path', { d: 'm13 17 5-5-5-5', key: '17xmmf' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nh = U('Download', [
  ['path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' }],
  ['polyline', { points: '7 10 12 15 17 10', key: '2ggqvy' }],
  ['line', { x1: '12', x2: '12', y1: '15', y2: '3', key: '1vk2je' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rh = U('ExternalLink', [
  ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
  ['path', { d: 'M10 14 21 3', key: 'gplh6r' }],
  [
    'path',
    {
      d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6',
      key: 'a6xqqp',
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lh = U('Film', [
  [
    'rect',
    { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' },
  ],
  ['path', { d: 'M7 3v18', key: 'bbkbws' }],
  ['path', { d: 'M3 7.5h4', key: 'zfgn84' }],
  ['path', { d: 'M3 12h18', key: '1i2n21' }],
  ['path', { d: 'M3 16.5h4', key: '1230mu' }],
  ['path', { d: 'M17 3v18', key: 'in4fa5' }],
  ['path', { d: 'M17 7.5h4', key: 'myr1c1' }],
  ['path', { d: 'M17 16.5h4', key: 'go4c1d' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ih = U('Heart', [
  [
    'path',
    {
      d: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z',
      key: 'c3ymky',
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oh = U('Home', [
  [
    'path',
    { d: 'm3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', key: 'y5dka4' },
  ],
  ['polyline', { points: '9 22 9 12 15 12 15 22', key: 'e2us08' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sh = U('Loader2', [
  ['path', { d: 'M21 12a9 9 0 1 1-6.219-8.56', key: '13zald' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ah = U('MapPin', [
  [
    'path',
    { d: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z', key: '2oe9fu' },
  ],
  ['circle', { cx: '12', cy: '10', r: '3', key: 'ilqhr7' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uh = U('Moon', [
  ['path', { d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z', key: 'a7tn18' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ch = U('RefreshCw', [
  [
    'path',
    { d: 'M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8', key: 'v9h5vc' },
  ],
  ['path', { d: 'M21 3v5h-5', key: '1q7to0' }],
  [
    'path',
    { d: 'M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16', key: '3uifl3' },
  ],
  ['path', { d: 'M8 16H3v5', key: '1cv678' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dh = U('Rocket', [
  [
    'path',
    {
      d: 'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z',
      key: 'm3kijz',
    },
  ],
  [
    'path',
    {
      d: 'm12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z',
      key: '1fmvmk',
    },
  ],
  ['path', { d: 'M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0', key: '1f8sc4' }],
  ['path', { d: 'M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5', key: 'qeys4' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xc = U('Ruler', [
  [
    'path',
    {
      d: 'M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z',
      key: 'icamh8',
    },
  ],
  ['path', { d: 'm14.5 12.5 2-2', key: 'inckbg' }],
  ['path', { d: 'm11.5 9.5 2-2', key: 'fmmyf7' }],
  ['path', { d: 'm8.5 6.5 2-2', key: 'vc6u1g' }],
  ['path', { d: 'm17.5 15.5 2-2', key: 'wo5hmg' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jc = U('Search', [
  ['circle', { cx: '11', cy: '11', r: '8', key: '4ej97u' }],
  ['path', { d: 'm21 21-4.3-4.3', key: '1qie3q' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ph = U('Sun', [
  ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
  ['path', { d: 'M12 2v2', key: 'tus03m' }],
  ['path', { d: 'M12 20v2', key: '1lh1kg' }],
  ['path', { d: 'm4.93 4.93 1.41 1.41', key: '149t6j' }],
  ['path', { d: 'm17.66 17.66 1.41 1.41', key: 'ptbguv' }],
  ['path', { d: 'M2 12h2', key: '1t8f8n' }],
  ['path', { d: 'M20 12h2', key: '1q8mjw' }],
  ['path', { d: 'm6.34 17.66-1.41 1.41', key: '1m8zz5' }],
  ['path', { d: 'm19.07 4.93-1.41 1.41', key: '1shlcs' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kr = U('User', [
  ['path', { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2', key: '975kel' }],
  ['circle', { cx: '12', cy: '7', r: '4', key: '17ys0d' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bc = U('Weight', [
  ['circle', { cx: '12', cy: '5', r: '3', key: 'rqqgnr' }],
  [
    'path',
    {
      d: 'M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z',
      key: '56o5sh',
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qc = U('X', [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ]),
  ed = y.createContext(void 0),
  fh = ({ children: e }) => {
    const [t, n] = y.useState(() => {
      const l = localStorage.getItem('theme');
      return (
        l ||
        (window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light')
      );
    });
    y.useEffect(() => {
      (localStorage.setItem('theme', t),
        t === 'dark'
          ? document.documentElement.classList.add('dark')
          : document.documentElement.classList.remove('dark'));
    }, [t]);
    const r = () => {
      n((l) => (l === 'light' ? 'dark' : 'light'));
    };
    return p.jsx(ed.Provider, {
      value: { theme: t, toggleTheme: r },
      children: e,
    });
  },
  hh = () => {
    const e = y.useContext(ed);
    if (e === void 0)
      throw new Error('useTheme must be used within a ThemeProvider');
    return e;
  },
  mh = () => {
    const { theme: e, toggleTheme: t } = hh();
    return p.jsx('button', {
      onClick: t,
      className:
        'p-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors',
      'aria-label': `Switch to ${e === 'light' ? 'dark' : 'light'} theme`,
      title: `Switch to ${e === 'light' ? 'dark' : 'light'} theme`,
      children:
        e === 'light'
          ? p.jsx(uh, { className: 'w-5 h-5 text-gray-700 dark:text-gray-300' })
          : p.jsx(ph, {
              className: 'w-5 h-5 text-gray-700 dark:text-gray-300',
            }),
    });
  };
function vh(e, t) {
  const [n, r] = y.useState(() => {
      try {
        return localStorage.getItem(e) ?? t;
      } catch (i) {
        return (
          console.error(`Error accessing localStorage key "${e}":`, i),
          t
        );
      }
    }),
    l = (i) => {
      try {
        (localStorage.setItem(e, i), r(i));
      } catch (o) {
        console.error(`Error writing to localStorage key "${e}":`, o);
      }
    };
  return (
    y.useEffect(() => {
      try {
        const i = (o) => {
          o.key === e && o.newValue !== null && r(o.newValue);
        };
        return (
          window.addEventListener('storage', i),
          () => window.removeEventListener('storage', i)
        );
      } catch {}
    }, [e]),
    [n, l]
  );
}
const yh = 'starwars-search-term',
  gh = 1e3,
  wh = (e, t) => {
    const [n, r] = y.useState(e);
    return (
      y.useEffect(() => {
        const l = setTimeout(() => {
          r(e);
        }, t);
        return () => {
          clearTimeout(l);
        };
      }, [e, t]),
      n
    );
  },
  xh = ({ onSearch: e, isLoading: t }) => {
    const [n, r] = vh(yh, ''),
      l = wh(n, gh),
      [i, o] = y.useState(!0),
      a = (m) => m.trim();
    (y.useEffect(() => {
      if (i) {
        const m = a(l);
        m && e(m, 1);
      }
    }, [l, e, i]),
      y.useEffect(() => {
        const m = a(n);
        m && e(m, 1);
      }, []));
    const s = (m) => {
        (r(m.target.value), o(!0));
      },
      u = y.useCallback(() => {
        const m = a(n);
        m && (o(!1), e(m, 1));
      }, [e, n]);
    y.useEffect(() => {
      !t && !i && o(!0);
    }, [t, i]);
    const f = (m) => {
      m.key === 'Enter' && u();
    };
    return p.jsx('div', {
      className:
        'bg-white shadow-sm border-b border-gray-200 p-6 dark:bg-gray-800  dark:border-gray-700 transition-colors',
      children: p.jsxs('div', {
        className: 'max-w-4xl mx-auto',
        children: [
          p.jsx('h1', {
            className:
              'text-3xl font-bold text-gray-900 mb-6 text-center dark:text-white',
            children: 'Star Wars Character Search',
          }),
          p.jsxs('div', {
            className:
              'flex flex-col sm:flex-row gap-4 items-stretch sm:items-center',
            children: [
              p.jsx(mh, {}),
              p.jsxs('div', {
                className: 'flex-1 relative',
                children: [
                  p.jsx(Jc, {
                    className:
                      'absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400',
                  }),
                  p.jsx('input', {
                    'data-testid': 'search-box',
                    type: 'text',
                    value: n,
                    onChange: s,
                    onKeyPress: f,
                    placeholder: 'Search for Star Wars characters...',
                    disabled: t,
                    className:
                      'w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed dark:bg-gray-300',
                  }),
                ],
              }),
              p.jsx('button', {
                'data-testid': 'search-button',
                onClick: u,
                disabled: t,
                className:
                  'px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors font-medium',
                children: t ? 'Searching...' : 'Search',
              }),
            ],
          }),
        ],
      }),
    });
  },
  Ta = (e) => {
    let t;
    const n = new Set(),
      r = (u, f) => {
        const m = typeof u == 'function' ? u(t) : u;
        if (!Object.is(m, t)) {
          const v = t;
          ((t =
            (f ?? (typeof m != 'object' || m === null))
              ? m
              : Object.assign({}, t, m)),
            n.forEach((w) => w(t, v)));
        }
      },
      l = () => t,
      a = {
        setState: r,
        getState: l,
        getInitialState: () => s,
        subscribe: (u) => (n.add(u), () => n.delete(u)),
      },
      s = (t = e(r, l, a));
    return a;
  },
  kh = (e) => (e ? Ta(e) : Ta),
  Sh = (e) => e;
function _h(e, t = Sh) {
  const n = xi.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState())
  );
  return (xi.useDebugValue(n), n);
}
const Ch = (e) => {
    const t = kh(e),
      n = (r) => _h(t, r);
    return (Object.assign(n, t), n);
  },
  Eh = (e) => Ch;
function Nh(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (l) => {
      var i;
      const o = (s) => (s === null ? null : JSON.parse(s, void 0)),
        a = (i = n.getItem(l)) != null ? i : null;
      return a instanceof Promise ? a.then(o) : o(a);
    },
    setItem: (l, i) => n.setItem(l, JSON.stringify(i, void 0)),
    removeItem: (l) => n.removeItem(l),
  };
}
const ho = (e) => (t) => {
    try {
      const n = e(t);
      return n instanceof Promise
        ? n
        : {
            then(r) {
              return ho(r)(n);
            },
            catch(r) {
              return this;
            },
          };
    } catch (n) {
      return {
        then(r) {
          return this;
        },
        catch(r) {
          return ho(r)(n);
        },
      };
    }
  },
  Th = (e, t) => (n, r, l) => {
    let i = {
        storage: Nh(() => localStorage),
        partialize: (g) => g,
        version: 0,
        merge: (g, C) => ({ ...C, ...g }),
        ...t,
      },
      o = !1;
    const a = new Set(),
      s = new Set();
    let u = i.storage;
    if (!u)
      return e(
        (...g) => {
          (console.warn(
            `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
          ),
            n(...g));
        },
        r,
        l
      );
    const f = () => {
        const g = i.partialize({ ...r() });
        return u.setItem(i.name, { state: g, version: i.version });
      },
      m = l.setState;
    l.setState = (g, C) => {
      (m(g, C), f());
    };
    const v = e(
      (...g) => {
        (n(...g), f());
      },
      r,
      l
    );
    l.getInitialState = () => v;
    let w;
    const x = () => {
      var g, C;
      if (!u) return;
      ((o = !1),
        a.forEach((c) => {
          var h;
          return c((h = r()) != null ? h : v);
        }));
      const d =
        ((C = i.onRehydrateStorage) == null
          ? void 0
          : C.call(i, (g = r()) != null ? g : v)) || void 0;
      return ho(u.getItem.bind(u))(i.name)
        .then((c) => {
          if (c)
            if (typeof c.version == 'number' && c.version !== i.version) {
              if (i.migrate) {
                const h = i.migrate(c.state, c.version);
                return h instanceof Promise ? h.then((k) => [!0, k]) : [!0, h];
              }
              console.error(
                "State loaded from storage couldn't be migrated since no migrate function was provided"
              );
            } else return [!1, c.state];
          return [!1, void 0];
        })
        .then((c) => {
          var h;
          const [k, _] = c;
          if (((w = i.merge(_, (h = r()) != null ? h : v)), n(w, !0), k))
            return f();
        })
        .then(() => {
          (d == null || d(w, void 0),
            (w = r()),
            (o = !0),
            s.forEach((c) => c(w)));
        })
        .catch((c) => {
          d == null || d(void 0, c);
        });
    };
    return (
      (l.persist = {
        setOptions: (g) => {
          ((i = { ...i, ...g }), g.storage && (u = g.storage));
        },
        clearStorage: () => {
          u == null || u.removeItem(i.name);
        },
        getOptions: () => i,
        rehydrate: () => x(),
        hasHydrated: () => o,
        onHydrate: (g) => (
          a.add(g),
          () => {
            a.delete(g);
          }
        ),
        onFinishHydration: (g) => (
          s.add(g),
          () => {
            s.delete(g);
          }
        ),
      }),
      i.skipHydration || x(),
      w || v
    );
  },
  Ph = Th,
  td = Eh()(
    Ph(
      (e, t) => ({
        selectedItems: [],
        addItem: (n) => {
          const { selectedItems: r } = t();
          r.find((l) => l.url === n.url) || e({ selectedItems: [...r, n] });
        },
        removeItem: (n) => {
          const { selectedItems: r } = t();
          e({ selectedItems: r.filter((l) => l.url !== n) });
        },
        isSelected: (n) => {
          const { selectedItems: r } = t();
          return r.some((l) => l.url === n);
        },
        clearAll: () => {
          e({ selectedItems: [] });
        },
        getSelectedCount: () => {
          const { selectedItems: n } = t();
          return n.length;
        },
      }),
      { name: 'selected-items-storage' }
    )
  ),
  jh = (e) => {
    const t = [];
    return (
      e.gender !== 'unknown' && t.push(e.gender),
      e.birth_year !== 'unknown' && t.push(`Born ${e.birth_year}`),
      e.height !== 'unknown' && t.push(`${e.height}cm tall`),
      e.mass !== 'unknown' && t.push(`${e.mass}kg`),
      t.join(' • ')
    );
  },
  Rh = ({ character: e, onClick: t }) => {
    const n = jh(e),
      { isSelected: r, addItem: l, removeItem: i } = td(),
      o = r(e.url),
      a = (u) => {
        (u.stopPropagation(), u.target.checked ? l(e) : i(e.url));
      },
      s = () => {
        t && t(e);
      };
    return p.jsxs('div', {
      className: `bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 p-6 border cursor-pointer hover:border-blue-300 hover:scale-[1.02] ${o ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-400' : 'border-gray-200 dark:border-gray-700'} dark:bg-gray-800 `,
      onClick: s,
      children: [
        p.jsx('div', {
          className: 'flex items-start justify-between mb-4',
          children: p.jsx('input', {
            type: 'checkbox',
            checked: o,
            onChange: a,
            className:
              'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 dark:bg-gray-700 ',
            onClick: (u) => u.stopPropagation(),
          }),
        }),
        p.jsxs('div', {
          className: 'flex items-start space-x-4',
          children: [
            p.jsx('div', {
              className: 'flex-shrink-0',
              children: p.jsx('div', {
                className:
                  'w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center',
                children: p.jsx(Kr, {
                  'data-testid': 'avatar',
                  className: 'w-6 h-6 text-white',
                }),
              }),
            }),
            p.jsxs('div', {
              className: 'flex-1 min-w-0',
              children: [
                p.jsx('h3', {
                  className:
                    'text-lg font-semibold text-gray-900 mb-2 dark:text-white',
                  children: e.name,
                }),
                n &&
                  p.jsx('p', {
                    className: 'text-gray-600 text-sm mb-3 dark:text-gray-300 ',
                    children: n,
                  }),
                p.jsxs('div', {
                  className:
                    'flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400 ',
                  children: [
                    e.height !== 'unknown' &&
                      p.jsxs('div', {
                        className: 'flex items-center space-x-1',
                        children: [
                          p.jsx(Xc, { className: 'w-3 h-3' }),
                          p.jsxs('span', { children: [e.height, 'cm'] }),
                        ],
                      }),
                    e.mass !== 'unknown' &&
                      p.jsxs('div', {
                        className: 'flex items-center space-x-1',
                        children: [
                          p.jsx(bc, { className: 'w-3 h-3' }),
                          p.jsxs('span', { children: [e.mass, 'kg'] }),
                        ],
                      }),
                    e.birth_year !== 'unknown' &&
                      p.jsxs('div', {
                        className: 'flex items-center space-x-1',
                        children: [
                          p.jsx(Gc, { className: 'w-3 h-3' }),
                          p.jsx('span', { children: e.birth_year }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Lh = () =>
    p.jsxs('div', {
      className: 'flex flex-col items-center justify-center py-12',
      children: [
        p.jsx(sh, {
          'data-testid': 'spinner',
          className:
            'w-8 h-8 text-blue-600 animate-spin mb-4 dark:text-blue-400 ',
        }),
        p.jsx('p', {
          className: 'text-gray-600 dark:text-gray-300',
          children: 'Searching the galaxy...',
        }),
      ],
    }),
  zh = ({ message: e, onRetry: t }) =>
    p.jsx('div', {
      className: 'flex flex-col items-center justify-center py-12',
      children: p.jsxs('div', {
        className:
          'bg-red-50 border border-red-200 rounded-lg p-6 max-w-md w-full',
        children: [
          p.jsxs('div', {
            className: 'flex items-center mb-4',
            children: [
              p.jsx(Gf, {
                'data-testid': 'error-icon',
                className: 'w-6 h-6 text-red-600 mr-3',
              }),
              p.jsx('h3', {
                className: 'text-lg font-semibold text-red-800',
                children: 'Error',
              }),
            ],
          }),
          p.jsx('p', { className: 'text-red-700 mb-4', children: e }),
          p.jsxs('button', {
            onClick: t,
            className:
              'flex items-center justify-center w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors',
            children: [p.jsx(ch, { className: 'w-4 h-4 mr-2' }), 'Try Again'],
          }),
        ],
      }),
    }),
  Mh = ({ pagination: e, onPageChange: t, isLoading: n }) => {
    const {
      currentPage: r,
      totalPages: l,
      totalCount: i,
      hasNext: o,
      hasPrevious: a,
    } = e;
    if (l <= 1) return null;
    const u = (() => {
      const m = [],
        v = [];
      for (let w = Math.max(2, r - 2); w <= Math.min(l - 1, r + 2); w++)
        m.push(w);
      return (
        r - 2 > 2 ? v.push(1, '...') : v.push(1),
        v.push(...m),
        r + 2 < l - 1 ? v.push('...', l) : l > 1 && v.push(l),
        v
      );
    })();
    return p.jsxs('div', {
      className: 'flex flex-col items-center space-y-4 py-6',
      children: [
        p.jsxs('div', {
          className: 'text-sm text-gray-600 dark:text-gray-400',
          children: [
            'Showing page ',
            r,
            ' of ',
            l,
            ' (',
            i,
            ' total characters)',
          ],
        }),
        p.jsxs('div', {
          className: 'flex items-center space-x-1',
          children: [
            p.jsx('button', {
              onClick: () => t(1),
              disabled: !a || n,
              className:
                'p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors',
              title: 'First page',
              children: p.jsx(eh, { className: 'w-4 h-4' }),
            }),
            p.jsx('button', {
              onClick: () => t(r - 1),
              disabled: !a || n,
              className:
                'p-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors',
              title: 'Previous page',
              children: p.jsx(bf, { className: 'w-4 h-4' }),
            }),
            p.jsx('div', {
              className: 'flex items-center space-x-1',
              children: u.map((f, m) =>
                p.jsx(
                  xi.Fragment,
                  {
                    children:
                      f === '...'
                        ? p.jsx('span', {
                            className: 'px-3 py-2 text-gray-500',
                            children: '...',
                          })
                        : p.jsx('button', {
                            onClick: () => t(f),
                            disabled: n,
                            className: `px-3 py-2 rounded-md border transition-colors ${f === r ? 'bg-blue-600 text-white border-blue-600 dark:bg-blue-500 dark:border-blue-500' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'} disabled:opacity-50 disabled:cursor-not-allowed`,
                            children: f,
                          }),
                  },
                  m
                )
              ),
            }),
            p.jsx('button', {
              onClick: () => t(r + 1),
              disabled: !o || n,
              className:
                'p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors',
              title: 'Next page',
              children: p.jsx(qf, { className: 'w-4 h-4' }),
            }),
            p.jsx('button', {
              onClick: () => t(l),
              disabled: !o || n,
              className:
                'p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors',
              title: 'Last page',
              children: p.jsx(th, { className: 'w-4 h-4' }),
            }),
          ],
        }),
      ],
    });
  },
  Ih = ({
    characters: e,
    pagination: t,
    isLoading: n,
    error: r,
    onRetry: l,
    onPageChange: i,
    onCharacterClick: o,
  }) =>
    p.jsx('div', {
      className:
        'flex-1 p-6 bg-gray-50 transition-all duration-300 dark:bg-gray-900 transition-all duration-300',
      children: p.jsxs('div', {
        className: 'max-w-4xl mx-auto',
        children: [
          n && p.jsx(Lh, {}),
          r && p.jsx(zh, { message: r, onRetry: l }),
          !n &&
            !r &&
            e.length === 0 &&
            p.jsx('div', {
              className: 'text-center py-12',
              children: p.jsx('p', {
                className: 'text-gray-500 text-lg dark:text-gray-400',
                children: 'No characters found. Try a different search term.',
              }),
            }),
          !n &&
            !r &&
            e.length > 0 &&
            p.jsxs('div', {
              children: [
                p.jsx('div', {
                  className: 'mb-6',
                  children: p.jsxs('h2', {
                    className:
                      'text-xl font-semibold text-gray-900 dark:text-white',
                    children: [
                      'Search Results',
                      t &&
                        p.jsxs('span', {
                          className:
                            'text-gray-600 font-normal dark:text-gray-400',
                          children: [
                            ' ',
                            '(',
                            t.totalCount,
                            ' character',
                            t.totalCount !== 1 ? 's' : '',
                            ' found)',
                          ],
                        }),
                    ],
                  }),
                }),
                p.jsx('div', {
                  className: 'grid gap-4 md:grid-cols-2 lg:grid-cols-1',
                  children: e.map((a, s) =>
                    p.jsx(Rh, { character: a, onClick: o }, `${a.url}-${s}`)
                  ),
                }),
                t &&
                  p.jsx(Mh, { pagination: t, onPageChange: i, isLoading: n }),
              ],
            }),
        ],
      }),
    }),
  Dh = ({ character: e, isOpen: t, onClose: n }) => {
    if (!t || !e) return null;
    const r = (i, o) =>
        !i || i.length === 0
          ? null
          : p.jsxs('div', {
              className: 'mb-4',
              children: [
                p.jsx('h4', {
                  className: 'font-semibold text-gray-900 mb-2',
                  children: o,
                }),
                p.jsxs('p', {
                  className: 'text-gray-600 text-sm',
                  children: [i.length, ' ', o.toLowerCase()],
                }),
              ],
            }),
      l = (i, o = 'Unknown') => (i && i !== 'unknown' && i !== 'n/a' ? i : o);
    return p.jsxs(p.Fragment, {
      children: [
        p.jsx('div', {
          className: 'fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden',
          onClick: n,
        }),
        p.jsx('div', {
          className: `fixed top-0 right-0 h-full w-full lg:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${t ? 'translate-x-0' : 'translate-x-full'}`,
          children: p.jsxs('div', {
            className: 'flex flex-col h-full',
            children: [
              p.jsxs('div', {
                className:
                  'flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-500 to-purple-600',
                children: [
                  p.jsx('h2', {
                    className: 'text-xl font-bold text-white truncate pr-4',
                    children: e.name,
                  }),
                  p.jsx('button', {
                    onClick: n,
                    className:
                      'p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors flex-shrink-0',
                    'aria-label': 'Close details panel',
                    children: p.jsx(qc, { className: 'w-5 h-5 text-white' }),
                  }),
                ],
              }),
              p.jsxs('div', {
                className: 'flex-1 overflow-y-auto p-6',
                children: [
                  p.jsx('div', {
                    className: 'flex justify-center mb-6',
                    children: p.jsx('div', {
                      className:
                        'w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center',
                      children: p.jsx(Kr, {
                        className: 'w-10 h-10 text-white',
                      }),
                    }),
                  }),
                  p.jsxs('div', {
                    className: 'space-y-4 mb-6',
                    children: [
                      p.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2',
                        children: 'Basic Information',
                      }),
                      p.jsxs('div', {
                        className: 'grid grid-cols-2 gap-4',
                        children: [
                          p.jsxs('div', {
                            className: 'flex items-center space-x-2',
                            children: [
                              p.jsx(Kr, { className: 'w-4 h-4 text-gray-500' }),
                              p.jsxs('div', {
                                children: [
                                  p.jsx('p', {
                                    className:
                                      'text-xs text-gray-500 uppercase tracking-wide',
                                    children: 'Gender',
                                  }),
                                  p.jsx('p', {
                                    className:
                                      'text-sm font-medium text-gray-900',
                                    children: l(e.gender),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          p.jsxs('div', {
                            className: 'flex items-center space-x-2',
                            children: [
                              p.jsx(Gc, { className: 'w-4 h-4 text-gray-500' }),
                              p.jsxs('div', {
                                children: [
                                  p.jsx('p', {
                                    className:
                                      'text-xs text-gray-500 uppercase tracking-wide',
                                    children: 'Birth Year',
                                  }),
                                  p.jsx('p', {
                                    className:
                                      'text-sm font-medium text-gray-900',
                                    children: l(e.birth_year),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          p.jsxs('div', {
                            className: 'flex items-center space-x-2',
                            children: [
                              p.jsx(Xc, { className: 'w-4 h-4 text-gray-500' }),
                              p.jsxs('div', {
                                children: [
                                  p.jsx('p', {
                                    className:
                                      'text-xs text-gray-500 uppercase tracking-wide',
                                    children: 'Height',
                                  }),
                                  p.jsxs('p', {
                                    className:
                                      'text-sm font-medium text-gray-900',
                                    children: [
                                      l(e.height, 'Unknown'),
                                      e.height !== 'unknown' &&
                                        e.height !== 'n/a' &&
                                        ' cm',
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          p.jsxs('div', {
                            className: 'flex items-center space-x-2',
                            children: [
                              p.jsx(bc, { className: 'w-4 h-4 text-gray-500' }),
                              p.jsxs('div', {
                                children: [
                                  p.jsx('p', {
                                    className:
                                      'text-xs text-gray-500 uppercase tracking-wide',
                                    children: 'Mass',
                                  }),
                                  p.jsxs('p', {
                                    className:
                                      'text-sm font-medium text-gray-900',
                                    children: [
                                      l(e.mass, 'Unknown'),
                                      e.mass !== 'unknown' &&
                                        e.mass !== 'n/a' &&
                                        ' kg',
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  p.jsxs('div', {
                    className: 'space-y-4 mb-6',
                    children: [
                      p.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2',
                        children: 'Physical Appearance',
                      }),
                      p.jsxs('div', {
                        className: 'space-y-3',
                        children: [
                          p.jsxs('div', {
                            children: [
                              p.jsx('p', {
                                className:
                                  'text-xs text-gray-500 uppercase tracking-wide mb-1',
                                children: 'Hair Color',
                              }),
                              p.jsx('p', {
                                className: 'text-sm text-gray-900',
                                children: l(e.hair_color),
                              }),
                            ],
                          }),
                          p.jsxs('div', {
                            children: [
                              p.jsx('p', {
                                className:
                                  'text-xs text-gray-500 uppercase tracking-wide mb-1',
                                children: 'Skin Color',
                              }),
                              p.jsx('p', {
                                className: 'text-sm text-gray-900',
                                children: l(e.skin_color),
                              }),
                            ],
                          }),
                          p.jsxs('div', {
                            children: [
                              p.jsx('p', {
                                className:
                                  'text-xs text-gray-500 uppercase tracking-wide mb-1',
                                children: 'Eye Color',
                              }),
                              p.jsx('p', {
                                className: 'text-sm text-gray-900',
                                children: l(e.eye_color),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  p.jsxs('div', {
                    className: 'space-y-4 mb-6',
                    children: [
                      p.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2',
                        children: 'Associations',
                      }),
                      p.jsxs('div', {
                        className: 'space-y-4',
                        children: [
                          p.jsxs('div', {
                            className: 'flex items-center space-x-2',
                            children: [
                              p.jsx(ah, { className: 'w-4 h-4 text-gray-500' }),
                              p.jsxs('div', {
                                children: [
                                  p.jsx('p', {
                                    className:
                                      'text-xs text-gray-500 uppercase tracking-wide',
                                    children: 'Homeworld',
                                  }),
                                  p.jsx('p', {
                                    className: 'text-sm text-gray-900',
                                    children: e.homeworld ? 'Known' : 'Unknown',
                                  }),
                                ],
                              }),
                            ],
                          }),
                          r(e.films, 'Films') &&
                            p.jsxs('div', {
                              className: 'flex items-center space-x-2',
                              children: [
                                p.jsx(lh, {
                                  className: 'w-4 h-4 text-gray-500',
                                }),
                                p.jsxs('div', {
                                  children: [
                                    p.jsx('p', {
                                      className:
                                        'text-xs text-gray-500 uppercase tracking-wide',
                                      children: 'Films',
                                    }),
                                    p.jsxs('p', {
                                      className: 'text-sm text-gray-900',
                                      children: [
                                        'Appeared in ',
                                        e.films.length,
                                        ' film',
                                        e.films.length !== 1 ? 's' : '',
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          e.species.length > 0 &&
                            p.jsxs('div', {
                              className: 'flex items-center space-x-2',
                              children: [
                                p.jsx(Kr, {
                                  className: 'w-4 h-4 text-gray-500',
                                }),
                                p.jsxs('div', {
                                  children: [
                                    p.jsx('p', {
                                      className:
                                        'text-xs text-gray-500 uppercase tracking-wide',
                                      children: 'Species',
                                    }),
                                    p.jsxs('p', {
                                      className: 'text-sm text-gray-900',
                                      children: [
                                        e.species.length,
                                        ' species association',
                                        e.species.length !== 1 ? 's' : '',
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          e.starships.length > 0 &&
                            p.jsxs('div', {
                              className: 'flex items-center space-x-2',
                              children: [
                                p.jsx(dh, {
                                  className: 'w-4 h-4 text-gray-500',
                                }),
                                p.jsxs('div', {
                                  children: [
                                    p.jsx('p', {
                                      className:
                                        'text-xs text-gray-500 uppercase tracking-wide',
                                      children: 'Starships',
                                    }),
                                    p.jsxs('p', {
                                      className: 'text-sm text-gray-900',
                                      children: [
                                        'Piloted ',
                                        e.starships.length,
                                        ' starship',
                                        e.starships.length !== 1 ? 's' : '',
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          e.vehicles.length > 0 &&
                            p.jsxs('div', {
                              className: 'flex items-center space-x-2',
                              children: [
                                p.jsx(Jf, {
                                  className: 'w-4 h-4 text-gray-500',
                                }),
                                p.jsxs('div', {
                                  children: [
                                    p.jsx('p', {
                                      className:
                                        'text-xs text-gray-500 uppercase tracking-wide',
                                      children: 'Vehicles',
                                    }),
                                    p.jsxs('p', {
                                      className: 'text-sm text-gray-900',
                                      children: [
                                        'Used ',
                                        e.vehicles.length,
                                        ' vehicle',
                                        e.vehicles.length !== 1 ? 's' : '',
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  p.jsxs('div', {
                    className: 'space-y-4 pt-4 border-t border-gray-200',
                    children: [
                      p.jsx('h3', {
                        className: 'text-lg font-semibold text-gray-900',
                        children: 'Record Information',
                      }),
                      p.jsxs('div', {
                        className: 'space-y-2 text-xs text-gray-500',
                        children: [
                          p.jsxs('p', {
                            children: [
                              'Created: ',
                              new Date(e.created).toLocaleDateString(),
                            ],
                          }),
                          p.jsxs('p', {
                            children: [
                              'Last edited: ',
                              new Date(e.edited).toLocaleDateString(),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  Pa = [
    {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/1/',
      films: ['https://swapi.dev/api/films/1/'],
      species: [],
      vehicles: ['https://swapi.dev/api/vehicles/14/'],
      starships: ['https://swapi.dev/api/starships/12/'],
      created: '2014-12-09T13:50:51.644000Z',
      edited: '2014-12-20T21:17:56.891000Z',
      url: 'https://swapi.dev/api/people/1/',
    },
    {
      name: 'Darth Vader',
      height: '202',
      mass: '136',
      hair_color: 'none',
      skin_color: 'white',
      eye_color: 'yellow',
      birth_year: '41.9BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/1/',
      films: ['https://swapi.dev/api/films/1/'],
      species: [],
      vehicles: [],
      starships: ['https://swapi.dev/api/starships/13/'],
      created: '2014-12-10T15:18:20.704000Z',
      edited: '2014-12-20T21:17:50.313000Z',
      url: 'https://swapi.dev/api/people/4/',
    },
    {
      name: 'Leia Organa',
      height: '150',
      mass: '49',
      hair_color: 'brown',
      skin_color: 'light',
      eye_color: 'brown',
      birth_year: '19BBY',
      gender: 'female',
      homeworld: 'https://swapi.dev/api/planets/2/',
      films: ['https://swapi.dev/api/films/1/'],
      species: [],
      vehicles: ['https://swapi.dev/api/vehicles/30/'],
      starships: [],
      created: '2014-12-10T15:20:09.791000Z',
      edited: '2014-12-20T21:17:50.315000Z',
      url: 'https://swapi.dev/api/people/5/',
    },
    {
      name: 'Han Solo',
      height: '180',
      mass: '80',
      hair_color: 'brown',
      skin_color: 'fair',
      eye_color: 'brown',
      birth_year: '29BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/22/',
      films: ['https://swapi.dev/api/films/1/'],
      species: [],
      vehicles: [],
      starships: ['https://swapi.dev/api/starships/10/'],
      created: '2014-12-10T16:49:14.582000Z',
      edited: '2014-12-20T21:17:50.334000Z',
      url: 'https://swapi.dev/api/people/14/',
    },
    {
      name: 'Chewbacca',
      height: '228',
      mass: '112',
      hair_color: 'brown',
      skin_color: 'unknown',
      eye_color: 'blue',
      birth_year: '200BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/14/',
      films: ['https://swapi.dev/api/films/1/'],
      species: ['https://swapi.dev/api/species/3/'],
      vehicles: ['https://swapi.dev/api/vehicles/19/'],
      starships: ['https://swapi.dev/api/starships/10/'],
      created: '2014-12-10T16:42:45.066000Z',
      edited: '2014-12-20T21:17:50.332000Z',
      url: 'https://swapi.dev/api/people/13/',
    },
    {
      name: 'Obi-Wan Kenobi',
      height: '182',
      mass: '77',
      hair_color: 'auburn, white',
      skin_color: 'fair',
      eye_color: 'blue-gray',
      birth_year: '57BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/20/',
      films: ['https://swapi.dev/api/films/1/'],
      species: [],
      vehicles: ['https://swapi.dev/api/vehicles/38/'],
      starships: ['https://swapi.dev/api/starships/48/'],
      created: '2014-12-10T16:16:29.192000Z',
      edited: '2014-12-20T21:17:50.325000Z',
      url: 'https://swapi.dev/api/people/10/',
    },
    {
      name: 'C-3PO',
      height: '167',
      mass: '75',
      hair_color: 'n/a',
      skin_color: 'gold',
      eye_color: 'yellow',
      birth_year: '112BBY',
      gender: 'n/a',
      homeworld: 'https://swapi.dev/api/planets/1/',
      films: ['https://swapi.dev/api/films/1/'],
      species: ['https://swapi.dev/api/species/2/'],
      vehicles: [],
      starships: [],
      created: '2014-12-10T15:10:51.357000Z',
      edited: '2014-12-20T21:17:50.309000Z',
      url: 'https://swapi.dev/api/people/2/',
    },
    {
      name: 'R2-D2',
      height: '96',
      mass: '32',
      hair_color: 'n/a',
      skin_color: 'white, blue',
      eye_color: 'red',
      birth_year: '33BBY',
      gender: 'n/a',
      homeworld: 'https://swapi.dev/api/planets/8/',
      films: ['https://swapi.dev/api/films/1/'],
      species: ['https://swapi.dev/api/species/2/'],
      vehicles: [],
      starships: [],
      created: '2014-12-10T15:11:50.376000Z',
      edited: '2014-12-20T21:17:50.311000Z',
      url: 'https://swapi.dev/api/people/3/',
    },
    {
      name: 'Anakin Skywalker',
      height: '188',
      mass: '84',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '41.9BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/1/',
      films: ['https://swapi.dev/api/films/4/'],
      species: [],
      vehicles: ['https://swapi.dev/api/vehicles/44/'],
      starships: ['https://swapi.dev/api/starships/39/'],
      created: '2014-12-10T16:20:44.310000Z',
      edited: '2014-12-20T21:17:50.327000Z',
      url: 'https://swapi.dev/api/people/11/',
    },
    {
      name: 'Padmé Amidala',
      height: '185',
      mass: '45',
      hair_color: 'brown',
      skin_color: 'light',
      eye_color: 'brown',
      birth_year: '46BBY',
      gender: 'female',
      homeworld: 'https://swapi.dev/api/planets/8/',
      films: ['https://swapi.dev/api/films/4/'],
      species: [],
      vehicles: [],
      starships: ['https://swapi.dev/api/starships/39/'],
      created: '2014-12-19T17:28:26.926000Z',
      edited: '2014-12-20T21:17:50.401000Z',
      url: 'https://swapi.dev/api/people/27/',
    },
    {
      name: 'Yoda',
      height: '66',
      mass: '17',
      hair_color: 'white',
      skin_color: 'green',
      eye_color: 'brown',
      birth_year: '896BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/28/',
      films: ['https://swapi.dev/api/films/2/'],
      species: ['https://swapi.dev/api/species/6/'],
      vehicles: [],
      starships: [],
      created: '2014-12-15T12:26:01.042000Z',
      edited: '2014-12-20T21:17:50.345000Z',
      url: 'https://swapi.dev/api/people/20/',
    },
    {
      name: 'Mace Windu',
      height: '188',
      mass: '84',
      hair_color: 'none',
      skin_color: 'dark',
      eye_color: 'brown',
      birth_year: '72BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/22/',
      films: ['https://swapi.dev/api/films/4/'],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-20T21:17:50.375000Z',
      edited: '2014-12-20T21:17:50.375000Z',
      url: 'https://swapi.dev/api/people/51/',
    },
    {
      name: 'Qui-Gon Jinn',
      height: '193',
      mass: '89',
      hair_color: 'brown',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '92BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/28/',
      films: ['https://swapi.dev/api/films/4/'],
      species: [],
      vehicles: ['https://swapi.dev/api/vehicles/38/'],
      starships: [],
      created: '2014-12-19T16:54:53.618000Z',
      edited: '2014-12-20T21:17:50.375000Z',
      url: 'https://swapi.dev/api/people/32/',
    },
    {
      name: 'Palpatine',
      height: '170',
      mass: '75',
      hair_color: 'grey',
      skin_color: 'pale',
      eye_color: 'yellow',
      birth_year: '82BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/8/',
      films: ['https://swapi.dev/api/films/4/'],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-15T12:48:05.971000Z',
      edited: '2014-12-20T21:17:50.347000Z',
      url: 'https://swapi.dev/api/people/21/',
    },
    {
      name: 'Count Dooku',
      height: '193',
      mass: '80',
      hair_color: 'white',
      skin_color: 'fair',
      eye_color: 'brown',
      birth_year: '102BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/7/',
      films: ['https://swapi.dev/api/films/5/'],
      species: [],
      vehicles: ['https://swapi.dev/api/vehicles/55/'],
      starships: [],
      created: '2014-12-20T21:17:50.408000Z',
      edited: '2014-12-20T21:17:50.408000Z',
      url: 'https://swapi.dev/api/people/67/',
    },
    {
      name: 'Jar Jar Binks',
      height: '196',
      mass: '66',
      hair_color: 'none',
      skin_color: 'orange',
      eye_color: 'orange',
      birth_year: '52BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/8/',
      films: ['https://swapi.dev/api/films/4/'],
      species: ['https://swapi.dev/api/species/12/'],
      vehicles: [],
      starships: [],
      created: '2014-12-19T17:29:32.489000Z',
      edited: '2014-12-20T21:17:50.383000Z',
      url: 'https://swapi.dev/api/people/36/',
    },
    {
      name: 'General Grievous',
      height: '216',
      mass: '159',
      hair_color: 'none',
      skin_color: 'brown, white',
      eye_color: 'green, yellow',
      birth_year: 'unknown',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/23/',
      films: ['https://swapi.dev/api/films/6/'],
      species: ['https://swapi.dev/api/species/28/'],
      vehicles: ['https://swapi.dev/api/vehicles/60/'],
      starships: ['https://swapi.dev/api/starships/74/'],
      created: '2014-12-20T21:17:50.395000Z',
      edited: '2014-12-20T21:17:50.395000Z',
      url: 'https://swapi.dev/api/people/79/',
    },
    {
      name: 'Boba Fett',
      height: '183',
      mass: '78.2',
      hair_color: 'black',
      skin_color: 'fair',
      eye_color: 'brown',
      birth_year: '31.5BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/10/',
      films: ['https://swapi.dev/api/films/2/'],
      species: [],
      vehicles: [],
      starships: ['https://swapi.dev/api/starships/21/'],
      created: '2014-12-15T12:49:32.457000Z',
      edited: '2014-12-20T21:17:50.349000Z',
      url: 'https://swapi.dev/api/people/22/',
    },
    {
      name: 'Jango Fett',
      height: '183',
      mass: '79',
      hair_color: 'black',
      skin_color: 'tan',
      eye_color: 'brown',
      birth_year: '66BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/53/',
      films: ['https://swapi.dev/api/films/5/'],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-20T21:17:50.383000Z',
      edited: '2014-12-20T21:17:50.383000Z',
      url: 'https://swapi.dev/api/people/79/',
    },
    {
      name: 'Lando Calrissian',
      height: '177',
      mass: '79',
      hair_color: 'black',
      skin_color: 'dark',
      eye_color: 'brown',
      birth_year: '31BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/30/',
      films: ['https://swapi.dev/api/films/2/'],
      species: [],
      vehicles: [],
      starships: ['https://swapi.dev/api/starships/10/'],
      created: '2014-12-15T12:56:32.683000Z',
      edited: '2014-12-20T21:17:50.357000Z',
      url: 'https://swapi.dev/api/people/25/',
    },
    {
      name: 'Ahsoka Tano',
      height: '166',
      mass: '46',
      hair_color: 'none',
      skin_color: 'blue',
      eye_color: 'blue',
      birth_year: '36BBY',
      gender: 'female',
      homeworld: 'https://swapi.dev/api/planets/47/',
      films: [],
      species: ['https://swapi.dev/api/species/18/'],
      vehicles: [],
      starships: [],
      created: '2014-12-20T21:17:50.400000Z',
      edited: '2014-12-20T21:17:50.400000Z',
      url: 'https://swapi.dev/api/people/80/',
    },
    {
      name: 'Captain Rex',
      height: '183',
      mass: '78',
      hair_color: 'black',
      skin_color: 'tan',
      eye_color: 'brown',
      birth_year: '32BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/10/',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-20T21:17:50.401000Z',
      edited: '2014-12-20T21:17:50.401000Z',
      url: 'https://swapi.dev/api/people/81/',
    },
    {
      name: 'Commander Cody',
      height: '183',
      mass: '78',
      hair_color: 'black',
      skin_color: 'tan',
      eye_color: 'brown',
      birth_year: '32BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/10/',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-20T21:17:50.402000Z',
      edited: '2014-12-20T21:17:50.402000Z',
      url: 'https://swapi.dev/api/people/82/',
    },
    {
      name: 'Kanan Jarrus',
      height: '191',
      mass: '77',
      hair_color: 'brown',
      skin_color: 'light',
      eye_color: 'green',
      birth_year: '33BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/5/',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-20T21:17:50.403000Z',
      edited: '2014-12-20T21:17:50.403000Z',
      url: 'https://swapi.dev/api/people/83/',
    },
    {
      name: 'Ezra Bridger',
      height: '165',
      mass: '56',
      hair_color: 'black',
      skin_color: 'light',
      eye_color: 'blue',
      birth_year: '19BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/22/',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-20T21:17:50.404000Z',
      edited: '2014-12-20T21:17:50.404000Z',
      url: 'https://swapi.dev/api/people/84/',
    },
    {
      name: 'Hera Syndulla',
      height: '175',
      mass: '50',
      hair_color: 'none',
      skin_color: 'green',
      eye_color: 'green',
      birth_year: '29BBY',
      gender: 'female',
      homeworld: 'https://swapi.dev/api/planets/37/',
      films: [],
      species: ['https://swapi.dev/api/species/15/'],
      vehicles: [],
      starships: [],
      created: '2014-12-20T21:17:50.405000Z',
      edited: '2014-12-20T21:17:50.405000Z',
      url: 'https://swapi.dev/api/people/85/',
    },
    {
      name: 'Sabine Wren',
      height: '166',
      mass: '45',
      hair_color: 'black',
      skin_color: 'light',
      eye_color: 'brown',
      birth_year: '21BBY',
      gender: 'female',
      homeworld: 'https://swapi.dev/api/planets/56/',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-20T21:17:50.406000Z',
      edited: '2014-12-20T21:17:50.406000Z',
      url: 'https://swapi.dev/api/people/86/',
    },
    {
      name: 'Zeb Orrelios',
      height: '190',
      mass: '75',
      hair_color: 'none',
      skin_color: 'purple',
      eye_color: 'green',
      birth_year: '28BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/58/',
      films: [],
      species: ['https://swapi.dev/api/species/35/'],
      vehicles: [],
      starships: [],
      created: '2014-12-20T21:17:50.407000Z',
      edited: '2014-12-20T21:17:50.407000Z',
      url: 'https://swapi.dev/api/people/87/',
    },
    {
      name: 'Rey',
      height: '170',
      mass: '54',
      hair_color: 'brown',
      skin_color: 'light',
      eye_color: 'hazel',
      birth_year: '15ABY',
      gender: 'female',
      homeworld: 'https://swapi.dev/api/planets/60/',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-20T21:17:50.408000Z',
      edited: '2014-12-20T21:17:50.408000Z',
      url: 'https://swapi.dev/api/people/88/',
    },
    {
      name: 'Finn',
      height: '178',
      mass: '73',
      hair_color: 'black',
      skin_color: 'dark',
      eye_color: 'dark',
      birth_year: '11ABY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/28/',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-20T21:17:50.409000Z',
      edited: '2014-12-20T21:17:50.409000Z',
      url: 'https://swapi.dev/api/people/89/',
    },
    {
      name: 'Poe Dameron',
      height: '172',
      mass: '80',
      hair_color: 'brown',
      skin_color: 'light',
      eye_color: 'brown',
      birth_year: '2ABY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/28/',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-20T21:17:50.410000Z',
      edited: '2014-12-20T21:17:50.410000Z',
      url: 'https://swapi.dev/api/people/90/',
    },
    {
      name: 'Kylo Ren',
      height: '189',
      mass: '89',
      hair_color: 'black',
      skin_color: 'light',
      eye_color: 'brown',
      birth_year: '5ABY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/28/',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-20T21:17:50.411000Z',
      edited: '2014-12-20T21:17:50.411000Z',
      url: 'https://swapi.dev/api/people/91/',
    },
    {
      name: 'Supreme Leader Snoke',
      height: '200',
      mass: 'unknown',
      hair_color: 'none',
      skin_color: 'pale',
      eye_color: 'blue',
      birth_year: 'unknown',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/28/',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-20T21:17:50.412000Z',
      edited: '2014-12-20T21:17:50.412000Z',
      url: 'https://swapi.dev/api/people/92/',
    },
    {
      name: 'Captain Phasma',
      height: '200',
      mass: 'unknown',
      hair_color: 'unknown',
      skin_color: 'unknown',
      eye_color: 'unknown',
      birth_year: 'unknown',
      gender: 'female',
      homeworld: 'https://swapi.dev/api/planets/28/',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-20T21:17:50.413000Z',
      edited: '2014-12-20T21:17:50.413000Z',
      url: 'https://swapi.dev/api/people/93/',
    },
    {
      name: 'Din Djarin',
      height: '183',
      mass: '80',
      hair_color: 'brown',
      skin_color: 'light',
      eye_color: 'brown',
      birth_year: '30BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/58/',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-20T21:17:50.414000Z',
      edited: '2014-12-20T21:17:50.414000Z',
      url: 'https://swapi.dev/api/people/94/',
    },
    {
      name: 'Grogu',
      height: '66',
      mass: '6.5',
      hair_color: 'none',
      skin_color: 'green',
      eye_color: 'brown',
      birth_year: '41BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/28/',
      films: [],
      species: ['https://swapi.dev/api/species/6/'],
      vehicles: [],
      starships: [],
      created: '2014-12-20T21:17:50.415000Z',
      edited: '2014-12-20T21:17:50.415000Z',
      url: 'https://swapi.dev/api/people/95/',
    },
    {
      name: 'Cara Dune',
      height: '173',
      mass: '70',
      hair_color: 'black',
      skin_color: 'light',
      eye_color: 'brown',
      birth_year: '21BBY',
      gender: 'female',
      homeworld: 'https://swapi.dev/api/planets/2/',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-20T21:17:50.416000Z',
      edited: '2014-12-20T21:17:50.416000Z',
      url: 'https://swapi.dev/api/people/96/',
    },
    {
      name: 'Greef Karga',
      height: '175',
      mass: '79',
      hair_color: 'black',
      skin_color: 'dark',
      eye_color: 'brown',
      birth_year: '52BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/58/',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-20T21:17:50.417000Z',
      edited: '2014-12-20T21:17:50.417000Z',
      url: 'https://swapi.dev/api/people/97/',
    },
    {
      name: 'Moff Gideon',
      height: '183',
      mass: '90',
      hair_color: 'black',
      skin_color: 'dark',
      eye_color: 'brown',
      birth_year: '31BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/28/',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-20T21:17:50.418000Z',
      edited: '2014-12-20T21:17:50.418000Z',
      url: 'https://swapi.dev/api/people/98/',
    },
    {
      name: 'Grand Admiral Thrawn',
      height: '191',
      mass: '77',
      hair_color: 'none',
      skin_color: 'blue',
      eye_color: 'red',
      birth_year: '59BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/60/',
      films: [],
      species: ['https://swapi.dev/api/species/15/'],
      vehicles: [],
      starships: [],
      created: '2014-12-20T21:17:50.419000Z',
      edited: '2014-12-20T21:17:50.419000Z',
      url: 'https://swapi.dev/api/people/99/',
    },
    {
      name: 'Bo-Katan Kryze',
      height: '175',
      mass: '57',
      hair_color: 'blonde',
      skin_color: 'light',
      eye_color: 'green',
      birth_year: '67BBY',
      gender: 'female',
      homeworld: 'https://swapi.dev/api/planets/56/',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-20T21:17:50.420000Z',
      edited: '2014-12-20T21:17:50.420000Z',
      url: 'https://swapi.dev/api/people/100/',
    },
    {
      name: 'Fennec Shand',
      height: '166',
      mass: '50',
      hair_color: 'black',
      skin_color: 'light',
      eye_color: 'brown',
      birth_year: '31BBY',
      gender: 'female',
      homeworld: 'https://swapi.dev/api/planets/1/',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-20T21:17:50.421000Z',
      edited: '2014-12-20T21:17:50.421000Z',
      url: 'https://swapi.dev/api/people/101/',
    },
    {
      name: 'Cad Bane',
      height: '185',
      mass: '75',
      hair_color: 'none',
      skin_color: 'blue',
      eye_color: 'red',
      birth_year: '62BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/40/',
      films: [],
      species: ['https://swapi.dev/api/species/25/'],
      vehicles: [],
      starships: [],
      created: '2014-12-20T21:17:50.422000Z',
      edited: '2014-12-20T21:17:50.422000Z',
      url: 'https://swapi.dev/api/people/102/',
    },
    {
      name: 'Asajj Ventress',
      height: '179',
      mass: '50',
      hair_color: 'none',
      skin_color: 'pale',
      eye_color: 'blue',
      birth_year: '50BBY',
      gender: 'female',
      homeworld: 'https://swapi.dev/api/planets/43/',
      films: [],
      species: ['https://swapi.dev/api/species/30/'],
      vehicles: [],
      starships: [],
      created: '2014-12-20T21:17:50.423000Z',
      edited: '2014-12-20T21:17:50.423000Z',
      url: 'https://swapi.dev/api/people/103/',
    },
    {
      name: 'Savage Opress',
      height: '218',
      mass: '88',
      hair_color: 'none',
      skin_color: 'yellow',
      eye_color: 'yellow',
      birth_year: '54BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/43/',
      films: [],
      species: ['https://swapi.dev/api/species/22/'],
      vehicles: [],
      starships: [],
      created: '2014-12-20T21:17:50.424000Z',
      edited: '2014-12-20T21:17:50.424000Z',
      url: 'https://swapi.dev/api/people/104/',
    },
    {
      name: 'Darth Maul',
      height: '175',
      mass: '80',
      hair_color: 'none',
      skin_color: 'red',
      eye_color: 'yellow',
      birth_year: '54BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/43/',
      films: ['https://swapi.dev/api/films/4/'],
      species: ['https://swapi.dev/api/species/22/'],
      vehicles: ['https://swapi.dev/api/vehicles/42/'],
      starships: ['https://swapi.dev/api/starships/41/'],
      created: '2014-12-19T16:57:31.319000Z',
      edited: '2014-12-20T21:17:50.375000Z',
      url: 'https://swapi.dev/api/people/44/',
    },
    {
      name: 'IG-88',
      height: '200',
      mass: '140',
      hair_color: 'none',
      skin_color: 'metal',
      eye_color: 'red',
      birth_year: 'unknown',
      gender: 'none',
      homeworld: 'https://swapi.dev/api/planets/28/',
      films: ['https://swapi.dev/api/films/2/'],
      species: ['https://swapi.dev/api/species/2/'],
      vehicles: [],
      starships: [],
      created: '2014-12-15T12:51:10.076000Z',
      edited: '2014-12-20T21:17:50.351000Z',
      url: 'https://swapi.dev/api/people/23/',
    },
    {
      name: 'Bossk',
      height: '190',
      mass: '113',
      hair_color: 'none',
      skin_color: 'green',
      eye_color: 'red',
      birth_year: '53BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/29/',
      films: ['https://swapi.dev/api/films/2/'],
      species: ['https://swapi.dev/api/species/7/'],
      vehicles: [],
      starships: [],
      created: '2014-12-15T12:53:49.297000Z',
      edited: '2014-12-20T21:17:50.355000Z',
      url: 'https://swapi.dev/api/people/24/',
    },
    {
      name: 'Dengar',
      height: '183',
      mass: '78',
      hair_color: 'brown',
      skin_color: 'light',
      eye_color: 'brown',
      birth_year: 'unknown',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/28/',
      films: ['https://swapi.dev/api/films/2/'],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-15T12:56:32.683000Z',
      edited: '2014-12-20T21:17:50.357000Z',
      url: 'https://swapi.dev/api/people/69/',
    },
    {
      name: 'Grand Moff Tarkin',
      height: '180',
      mass: 'unknown',
      hair_color: 'auburn, grey',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '64BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/21/',
      films: ['https://swapi.dev/api/films/1/'],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-10T16:26:56.138000Z',
      edited: '2014-12-20T21:17:50.330000Z',
      url: 'https://swapi.dev/api/people/12/',
    },
    {
      name: 'Admiral Ozzel',
      height: '180',
      mass: '85',
      hair_color: 'brown',
      skin_color: 'light',
      eye_color: 'brown',
      birth_year: 'unknown',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/28/',
      films: ['https://swapi.dev/api/films/2/'],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-15T12:49:32.457000Z',
      edited: '2014-12-20T21:17:50.349000Z',
      url: 'https://swapi.dev/api/people/105/',
    },
    {
      name: 'Admiral Piett',
      height: '175',
      mass: '80',
      hair_color: 'brown',
      skin_color: 'light',
      eye_color: 'brown',
      birth_year: 'unknown',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/28/',
      films: ['https://swapi.dev/api/films/2/'],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-15T12:49:32.457000Z',
      edited: '2014-12-20T21:17:50.349000Z',
      url: 'https://swapi.dev/api/people/106/',
    },
    {
      name: 'Wicket W. Warrick',
      height: '88',
      mass: '20',
      hair_color: 'brown',
      skin_color: 'brown',
      eye_color: 'brown',
      birth_year: '8BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/7/',
      films: ['https://swapi.dev/api/films/3/'],
      species: ['https://swapi.dev/api/species/9/'],
      vehicles: [],
      starships: [],
      created: '2014-12-18T11:21:58.954000Z',
      edited: '2014-12-20T21:17:50.332000Z',
      url: 'https://swapi.dev/api/people/30/',
    },
    {
      name: 'Logray',
      height: '88',
      mass: '20',
      hair_color: 'grey',
      skin_color: 'brown',
      eye_color: 'brown',
      birth_year: 'unknown',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/7/',
      films: ['https://swapi.dev/api/films/3/'],
      species: ['https://swapi.dev/api/species/9/'],
      vehicles: [],
      starships: [],
      created: '2014-12-18T11:26:29.426000Z',
      edited: '2014-12-20T21:17:50.334000Z',
      url: 'https://swapi.dev/api/people/31/',
    },
    {
      name: 'Jawa',
      height: '165',
      mass: 'unknown',
      hair_color: 'n/a',
      skin_color: 'brown',
      eye_color: 'orange',
      birth_year: 'unknown',
      gender: 'n/a',
      homeworld: 'https://swapi.dev/api/planets/1/',
      films: ['https://swapi.dev/api/films/1/'],
      species: ['https://swapi.dev/api/species/5/'],
      vehicles: ['https://swapi.dev/api/vehicles/36/'],
      starships: [],
      created: '2014-12-10T15:52:14.024000Z',
      edited: '2014-12-20T21:17:50.317000Z',
      url: 'https://swapi.dev/api/people/8/',
    },
    {
      name: 'Tusken Raider',
      height: '180',
      mass: '30',
      hair_color: 'n/a',
      skin_color: 'grey',
      eye_color: 'unknown',
      birth_year: 'unknown',
      gender: 'n/a',
      homeworld: 'https://swapi.dev/api/planets/1/',
      films: ['https://swapi.dev/api/films/1/'],
      species: ['https://swapi.dev/api/species/4/'],
      vehicles: ['https://swapi.dev/api/vehicles/20/'],
      starships: [],
      created: '2014-12-10T15:53:32.628000Z',
      edited: '2014-12-20T21:17:50.323000Z',
      url: 'https://swapi.dev/api/people/19/',
    },
    {
      name: 'Watto',
      height: '137',
      mass: 'unknown',
      hair_color: 'black',
      skin_color: 'blue, grey',
      eye_color: 'yellow',
      birth_year: 'unknown',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/34/',
      films: ['https://swapi.dev/api/films/4/'],
      species: ['https://swapi.dev/api/species/20/'],
      vehicles: [],
      starships: [],
      created: '2014-12-19T17:48:54.647000Z',
      edited: '2014-12-20T21:17:50.395000Z',
      url: 'https://swapi.dev/api/people/40/',
    },
    {
      name: 'Sebulba',
      height: '112',
      mass: '40',
      hair_color: 'none',
      skin_color: 'grey, red',
      eye_color: 'orange',
      birth_year: 'unknown',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/33/',
      films: ['https://swapi.dev/api/films/4/'],
      species: ['https://swapi.dev/api/species/12/'],
      vehicles: ['https://swapi.dev/api/vehicles/46/'],
      starships: [],
      created: '2014-12-19T17:43:53.348000Z',
      edited: '2014-12-20T21:17:50.393000Z',
      url: 'https://swapi.dev/api/people/41/',
    },
    {
      name: 'Nute Gunray',
      height: '191',
      mass: '90',
      hair_color: 'none',
      skin_color: 'mottled green',
      eye_color: 'red',
      birth_year: 'unknown',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/18/',
      films: ['https://swapi.dev/api/films/4/'],
      species: ['https://swapi.dev/api/species/18/'],
      vehicles: [],
      starships: [],
      created: '2014-12-19T17:05:57.357000Z',
      edited: '2014-12-20T21:17:50.377000Z',
      url: 'https://swapi.dev/api/people/33/',
    },
    {
      name: 'Rune Haako',
      height: '196',
      mass: '85',
      hair_color: 'none',
      skin_color: 'grey',
      eye_color: 'orange',
      birth_year: 'unknown',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/18/',
      films: ['https://swapi.dev/api/films/4/'],
      species: ['https://swapi.dev/api/species/18/'],
      vehicles: [],
      starships: [],
      created: '2014-12-19T17:07:35.696000Z',
      edited: '2014-12-20T21:17:50.379000Z',
      url: 'https://swapi.dev/api/people/34/',
    },
  ],
  mo = 'https://swapi.py4e.com/api/',
  Ir = 2,
  ja = 1e3,
  Gr = 10,
  yi = (e = '', t = 1) => {
    const n = e
        ? Pa.filter((a) => a.name.toLowerCase().includes(e.toLowerCase()))
        : Pa,
      r = (t - 1) * Gr,
      l = r + Gr,
      i = n.slice(r, l),
      o = Math.ceil(n.length / Gr);
    return {
      count: n.length,
      next: t < o ? `${mo}/people/?page=${t + 1}` : null,
      previous: t > 1 ? `${mo}/people/?page=${t - 1}` : null,
      results: i,
    };
  },
  Ra = (e) => new Promise((t) => setTimeout(t, e)),
  Bh = (e, t) => {
    const n = Math.ceil(e.count / Gr);
    return {
      currentPage: t,
      totalPages: n,
      totalCount: e.count,
      hasNext: e.next !== null,
      hasPrevious: e.previous !== null,
    };
  };
class Oh {
  static async searchCharacters(t = '', n = 1, r = 0) {
    try {
      let l = `${mo}/people/`;
      const i = new URLSearchParams();
      if (
        (t && i.append('search', t),
        i.append('page', n.toString()),
        i.toString())
      ) {
        const f = l + `?${i.toString()}`;
        l = encodeURI(f);
      }
      const o = new AbortController(),
        a = setTimeout(() => o.abort(), 1e4),
        s = await fetch(l, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          signal: o.signal,
        });
      if ((clearTimeout(a), !s.ok))
        throw s.status >= 400 && s.status < 500
          ? new Error(
              `Client error (${s.status}): ${s.statusText}. Please check your request and try again.`
            )
          : s.status >= 500
            ? new Error(
                `Server error (${s.status}): ${s.statusText}. The service is temporarily unavailable.`
              )
            : new Error(
                `Request failed with status ${s.status}: ${s.statusText}`
              );
      return await s.json();
    } catch (l) {
      if (l instanceof Error) {
        if (l.name === 'AbortError')
          return r < Ir
            ? (console.log(`Request timed out, retrying... (${r + 1}/${Ir})`),
              await Ra(ja * (r + 1)),
              this.searchCharacters(t, n, r + 1))
            : (console.warn(
                'Request timed out after multiple attempts. Using enhanced mock data as fallback.'
              ),
              yi(t, n));
        if (
          l.message.includes('Failed to fetch') ||
          l.message.includes('NetworkError')
        )
          return r < Ir
            ? (console.log(`Network error, retrying... (${r + 1}/${Ir})`),
              await Ra(ja * (r + 1)),
              this.searchCharacters(t, n, r + 1))
            : (console.warn(
                'Network error: Unable to connect to the Star Wars API. Using enhanced mock data as fallback.'
              ),
              yi(t, n));
        if (l.message.includes('CORS'))
          return (
            console.warn(
              'CORS error: Unable to access the Star Wars API. Using enhanced mock data as fallback.'
            ),
            yi(t, n)
          );
        throw l;
      }
      throw new Error('An unexpected error occurred while fetching data.');
    }
  }
}
const Fh = () => {
  const e = new Date().getFullYear();
  return p.jsx('div', {
    className:
      'min-h-screen bg-white dark:bg-gray-800 text-center px-6 py-16 dark:text-gray-200 transition-colors',
    children: p.jsxs('div', {
      className: 'max-w-2xl mx-auto space-y-6',
      children: [
        p.jsxs('div', {
          className: 'flex items-center justify-center space-x-2',
          children: [
            p.jsx(ih, {
              'data-testid': 'heart-icon',
              className: 'w-5 h-5 text-red-500',
            }),
            p.jsx('p', {
              className: 'text-gray-600 dark:text-gray-300',
              children: 'Created by yours truly',
            }),
          ],
        }),
        p.jsxs('p', {
          className: 'text-sm text-gray-500 dark:text-gray-400',
          children: ['© ', e],
        }),
        p.jsx('div', {
          className: 'flex items-center justify-center space-x-2',
          children: p.jsxs('a', {
            href: 'https://rs.school/courses/reactjs',
            target: '_blank',
            rel: 'noopener noreferrer',
            className:
              'inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors',
            children: [
              p.jsx('span', { children: 'RS School React Course' }),
              p.jsx(rh, { className: 'w-4 h-4' }),
            ],
          }),
        }),
      ],
    }),
  });
};
/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var La = 'popstate';
function $h(e = {}) {
  function t(r, l) {
    let { pathname: i, search: o, hash: a } = r.location;
    return vo(
      '',
      { pathname: i, search: o, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default'
    );
  }
  function n(r, l) {
    return typeof l == 'string' ? l : ir(l);
  }
  return Uh(t, n, null, e);
}
function W(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Ze(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Ah() {
  return Math.random().toString(36).substring(2, 10);
}
function za(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function vo(e, t, n = null, r) {
  return {
    pathname: typeof e == 'string' ? e : e.pathname,
    search: '',
    hash: '',
    ...(typeof t == 'string' ? vn(t) : t),
    state: n,
    key: (t && t.key) || r || Ah(),
  };
}
function ir({ pathname: e = '/', search: t = '', hash: n = '' }) {
  return (
    t && t !== '?' && (e += t.charAt(0) === '?' ? t : '?' + t),
    n && n !== '#' && (e += n.charAt(0) === '#' ? n : '#' + n),
    e
  );
}
function vn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
    let r = e.indexOf('?');
    (r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function Uh(e, t, n, r = {}) {
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    a = 'POP',
    s = null,
    u = f();
  u == null && ((u = 0), o.replaceState({ ...o.state, idx: u }, ''));
  function f() {
    return (o.state || { idx: null }).idx;
  }
  function m() {
    a = 'POP';
    let C = f(),
      d = C == null ? null : C - u;
    ((u = C), s && s({ action: a, location: g.location, delta: d }));
  }
  function v(C, d) {
    a = 'PUSH';
    let c = vo(g.location, C, d);
    u = f() + 1;
    let h = za(c, u),
      k = g.createHref(c);
    try {
      o.pushState(h, '', k);
    } catch (_) {
      if (_ instanceof DOMException && _.name === 'DataCloneError') throw _;
      l.location.assign(k);
    }
    i && s && s({ action: a, location: g.location, delta: 1 });
  }
  function w(C, d) {
    a = 'REPLACE';
    let c = vo(g.location, C, d);
    u = f();
    let h = za(c, u),
      k = g.createHref(c);
    (o.replaceState(h, '', k),
      i && s && s({ action: a, location: g.location, delta: 0 }));
  }
  function x(C) {
    return Zh(C);
  }
  let g = {
    get action() {
      return a;
    },
    get location() {
      return e(l, o);
    },
    listen(C) {
      if (s) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(La, m),
        (s = C),
        () => {
          (l.removeEventListener(La, m), (s = null));
        }
      );
    },
    createHref(C) {
      return t(l, C);
    },
    createURL: x,
    encodeLocation(C) {
      let d = x(C);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: v,
    replace: w,
    go(C) {
      return o.go(C);
    },
  };
  return g;
}
function Zh(e, t = !1) {
  let n = 'http://localhost';
  (typeof window < 'u' &&
    (n =
      window.location.origin !== 'null'
        ? window.location.origin
        : window.location.href),
    W(n, 'No window.location.(origin|href) available to create URL'));
  let r = typeof e == 'string' ? e : ir(e);
  return (
    (r = r.replace(/ $/, '%20')),
    !t && r.startsWith('//') && (r = n + r),
    new URL(r, n)
  );
}
function nd(e, t, n = '/') {
  return Hh(e, t, n, !1);
}
function Hh(e, t, n, r) {
  let l = typeof t == 'string' ? vn(t) : t,
    i = et(l.pathname || '/', n);
  if (i == null) return null;
  let o = rd(e);
  Wh(o);
  let a = null;
  for (let s = 0; a == null && s < o.length; ++s) {
    let u = t0(i);
    a = qh(o[s], u, r);
  }
  return a;
}
function rd(e, t = [], n = [], r = '') {
  let l = (i, o, a) => {
    let s = {
      relativePath: a === void 0 ? i.path || '' : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    s.relativePath.startsWith('/') &&
      (W(
        s.relativePath.startsWith(r),
        `Absolute route path "${s.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = Ge([r, s.relativePath]),
      f = n.concat(s);
    (i.children &&
      i.children.length > 0 &&
      (W(
        i.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${u}".`
      ),
      rd(i.children, t, f, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: Jh(u, i.index), routesMeta: f }));
  };
  return (
    e.forEach((i, o) => {
      var a;
      if (i.path === '' || !((a = i.path) != null && a.includes('?'))) l(i, o);
      else for (let s of ld(i.path)) l(i, o, s);
    }),
    t
  );
}
function ld(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (r.length === 0) return l ? [i, ''] : [i];
  let o = ld(r.join('/')),
    a = [];
  return (
    a.push(...o.map((s) => (s === '' ? i : [i, s].join('/')))),
    l && a.push(...o),
    a.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
  );
}
function Wh(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : bh(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
var Vh = /^:[\w-]+$/,
  Yh = 3,
  Qh = 2,
  Kh = 1,
  Gh = 10,
  Xh = -2,
  Ma = (e) => e === '*';
function Jh(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(Ma) && (r += Xh),
    t && (r += Qh),
    n
      .filter((l) => !Ma(l))
      .reduce((l, i) => l + (Vh.test(i) ? Yh : i === '' ? Kh : Gh), r)
  );
}
function bh(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function qh(e, t, n = !1) {
  let { routesMeta: r } = e,
    l = {},
    i = '/',
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let s = r[a],
      u = a === r.length - 1,
      f = i === '/' ? t : t.slice(i.length) || '/',
      m = _l(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: u },
        f
      ),
      v = s.route;
    if (
      (!m &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (m = _l(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          f
        )),
      !m)
    )
      return null;
    (Object.assign(l, m.params),
      o.push({
        params: l,
        pathname: Ge([i, m.pathname]),
        pathnameBase: i0(Ge([i, m.pathnameBase])),
        route: v,
      }),
      m.pathnameBase !== '/' && (i = Ge([i, m.pathnameBase])));
  }
  return o;
}
function _l(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = e0(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, '$1'),
    a = l.slice(1);
  return {
    params: r.reduce((u, { paramName: f, isOptional: m }, v) => {
      if (f === '*') {
        let x = a[v] || '';
        o = i.slice(0, i.length - x.length).replace(/(.)\/+$/, '$1');
      }
      const w = a[v];
      return (
        m && !w ? (u[f] = void 0) : (u[f] = (w || '').replace(/%2F/g, '/')),
        u
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function e0(e, t = !1, n = !0) {
  Ze(
    e === '*' || !e.endsWith('*') || e.endsWith('/*'),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, '/*')}".`
  );
  let r = [],
    l =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, s) => (
            r.push({ paramName: a, isOptional: s != null }),
            s ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (l += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (l += '\\/*$')
        : e !== '' && e !== '/' && (l += '(?:(?=\\/|$))'),
    [new RegExp(l, t ? void 0 : 'i'), r]
  );
}
function t0(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      Ze(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
      ),
      e
    );
  }
}
function et(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function n0(e, t = '/') {
  let {
    pathname: n,
    search: r = '',
    hash: l = '',
  } = typeof e == 'string' ? vn(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : r0(n, t)) : t,
    search: o0(r),
    hash: s0(l),
  };
}
function r0(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((l) => {
      l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function gi(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function l0(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function id(e) {
  let t = l0(e);
  return t.map((n, r) => (r === t.length - 1 ? n.pathname : n.pathnameBase));
}
function od(e, t, n, r = !1) {
  let l;
  typeof e == 'string'
    ? (l = vn(e))
    : ((l = { ...e }),
      W(
        !l.pathname || !l.pathname.includes('?'),
        gi('?', 'pathname', 'search', l)
      ),
      W(
        !l.pathname || !l.pathname.includes('#'),
        gi('#', 'pathname', 'hash', l)
      ),
      W(!l.search || !l.search.includes('#'), gi('#', 'search', 'hash', l)));
  let i = e === '' || l.pathname === '',
    o = i ? '/' : l.pathname,
    a;
  if (o == null) a = n;
  else {
    let m = t.length - 1;
    if (!r && o.startsWith('..')) {
      let v = o.split('/');
      for (; v[0] === '..'; ) (v.shift(), (m -= 1));
      l.pathname = v.join('/');
    }
    a = m >= 0 ? t[m] : '/';
  }
  let s = n0(l, a),
    u = o && o !== '/' && o.endsWith('/'),
    f = (i || o === '.') && n.endsWith('/');
  return (!s.pathname.endsWith('/') && (u || f) && (s.pathname += '/'), s);
}
var Ge = (e) => e.join('/').replace(/\/\/+/g, '/'),
  i0 = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  o0 = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  s0 = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function a0(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
var sd = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(sd);
var u0 = ['GET', ...sd];
new Set(u0);
var yn = y.createContext(null);
yn.displayName = 'DataRouter';
var Al = y.createContext(null);
Al.displayName = 'DataRouterState';
y.createContext(!1);
var ad = y.createContext({ isTransitioning: !1 });
ad.displayName = 'ViewTransition';
var c0 = y.createContext(new Map());
c0.displayName = 'Fetchers';
var d0 = y.createContext(null);
d0.displayName = 'Await';
var He = y.createContext(null);
He.displayName = 'Navigation';
var pr = y.createContext(null);
pr.displayName = 'Location';
var nt = y.createContext({ outlet: null, matches: [], isDataRoute: !1 });
nt.displayName = 'Route';
var ps = y.createContext(null);
ps.displayName = 'RouteError';
function p0(e, { relative: t } = {}) {
  W(fr(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: n, navigator: r } = y.useContext(He),
    { hash: l, pathname: i, search: o } = hr(e, { relative: t }),
    a = i;
  return (
    n !== '/' && (a = i === '/' ? n : Ge([n, i])),
    r.createHref({ pathname: a, search: o, hash: l })
  );
}
function fr() {
  return y.useContext(pr) != null;
}
function $t() {
  return (
    W(
      fr(),
      'useLocation() may be used only in the context of a <Router> component.'
    ),
    y.useContext(pr).location
  );
}
var ud =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function cd(e) {
  y.useContext(He).static || y.useLayoutEffect(e);
}
function f0() {
  let { isDataRoute: e } = y.useContext(nt);
  return e ? N0() : h0();
}
function h0() {
  W(
    fr(),
    'useNavigate() may be used only in the context of a <Router> component.'
  );
  let e = y.useContext(yn),
    { basename: t, navigator: n } = y.useContext(He),
    { matches: r } = y.useContext(nt),
    { pathname: l } = $t(),
    i = JSON.stringify(id(r)),
    o = y.useRef(!1);
  return (
    cd(() => {
      o.current = !0;
    }),
    y.useCallback(
      (s, u = {}) => {
        if ((Ze(o.current, ud), !o.current)) return;
        if (typeof s == 'number') {
          n.go(s);
          return;
        }
        let f = od(s, JSON.parse(i), l, u.relative === 'path');
        (e == null &&
          t !== '/' &&
          (f.pathname = f.pathname === '/' ? t : Ge([t, f.pathname])),
          (u.replace ? n.replace : n.push)(f, u.state, u));
      },
      [t, n, i, l, e]
    )
  );
}
y.createContext(null);
function hr(e, { relative: t } = {}) {
  let { matches: n } = y.useContext(nt),
    { pathname: r } = $t(),
    l = JSON.stringify(id(n));
  return y.useMemo(() => od(e, JSON.parse(l), r, t === 'path'), [e, l, r, t]);
}
function m0(e, t) {
  return dd(e, t);
}
function dd(e, t, n, r) {
  var d;
  W(
    fr(),
    'useRoutes() may be used only in the context of a <Router> component.'
  );
  let { navigator: l } = y.useContext(He),
    { matches: i } = y.useContext(nt),
    o = i[i.length - 1],
    a = o ? o.params : {},
    s = o ? o.pathname : '/',
    u = o ? o.pathnameBase : '/',
    f = o && o.route;
  {
    let c = (f && f.path) || '';
    pd(
      s,
      !f || c.endsWith('*') || c.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${c}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${c}"> to <Route path="${c === '/' ? '*' : `${c}/*`}">.`
    );
  }
  let m = $t(),
    v;
  if (t) {
    let c = typeof t == 'string' ? vn(t) : t;
    (W(
      u === '/' || ((d = c.pathname) == null ? void 0 : d.startsWith(u)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${c.pathname}" was given in the \`location\` prop.`
    ),
      (v = c));
  } else v = m;
  let w = v.pathname || '/',
    x = w;
  if (u !== '/') {
    let c = u.replace(/^\//, '').split('/');
    x = '/' + w.replace(/^\//, '').split('/').slice(c.length).join('/');
  }
  let g = nd(e, { pathname: x });
  (Ze(
    f || g != null,
    `No routes matched location "${v.pathname}${v.search}${v.hash}" `
  ),
    Ze(
      g == null ||
        g[g.length - 1].route.element !== void 0 ||
        g[g.length - 1].route.Component !== void 0 ||
        g[g.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ));
  let C = x0(
    g &&
      g.map((c) =>
        Object.assign({}, c, {
          params: Object.assign({}, a, c.params),
          pathname: Ge([
            u,
            l.encodeLocation
              ? l.encodeLocation(c.pathname).pathname
              : c.pathname,
          ]),
          pathnameBase:
            c.pathnameBase === '/'
              ? u
              : Ge([
                  u,
                  l.encodeLocation
                    ? l.encodeLocation(c.pathnameBase).pathname
                    : c.pathnameBase,
                ]),
        })
      ),
    i,
    n,
    r
  );
  return t && C
    ? y.createElement(
        pr.Provider,
        {
          value: {
            location: {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
              ...v,
            },
            navigationType: 'POP',
          },
        },
        C
      )
    : C;
}
function v0() {
  let e = E0(),
    t = a0(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = 'rgba(200,200,200, 0.5)',
    l = { padding: '0.5rem', backgroundColor: r },
    i = { padding: '2px 4px', backgroundColor: r },
    o = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', e),
    (o = y.createElement(
      y.Fragment,
      null,
      y.createElement('p', null, '💿 Hey developer 👋'),
      y.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        y.createElement('code', { style: i }, 'ErrorBoundary'),
        ' or',
        ' ',
        y.createElement('code', { style: i }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    y.createElement(
      y.Fragment,
      null,
      y.createElement('h2', null, 'Unexpected Application Error!'),
      y.createElement('h3', { style: { fontStyle: 'italic' } }, t),
      n ? y.createElement('pre', { style: l }, n) : null,
      o
    )
  );
}
var y0 = y.createElement(v0, null),
  g0 = class extends y.Component {
    constructor(e) {
      (super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        }));
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== 'idle' && e.revalidation === 'idle')
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        'React Router caught the following error during render',
        e,
        t
      );
    }
    render() {
      return this.state.error !== void 0
        ? y.createElement(
            nt.Provider,
            { value: this.props.routeContext },
            y.createElement(ps.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function w0({ routeContext: e, match: t, children: n }) {
  let r = y.useContext(yn);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    y.createElement(nt.Provider, { value: e }, n)
  );
}
function x0(e, t = [], n = null, r = null) {
  if (e == null) {
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else return null;
  }
  let l = e,
    i = n == null ? void 0 : n.errors;
  if (i != null) {
    let s = l.findIndex(
      (u) => u.route.id && (i == null ? void 0 : i[u.route.id]) !== void 0
    );
    (W(
      s >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(i).join(',')}`
    ),
      (l = l.slice(0, Math.min(l.length, s + 1))));
  }
  let o = !1,
    a = -1;
  if (n)
    for (let s = 0; s < l.length; s++) {
      let u = l[s];
      if (
        ((u.route.HydrateFallback || u.route.hydrateFallbackElement) && (a = s),
        u.route.id)
      ) {
        let { loaderData: f, errors: m } = n,
          v =
            u.route.loader &&
            !f.hasOwnProperty(u.route.id) &&
            (!m || m[u.route.id] === void 0);
        if (u.route.lazy || v) {
          ((o = !0), a >= 0 ? (l = l.slice(0, a + 1)) : (l = [l[0]]));
          break;
        }
      }
    }
  return l.reduceRight((s, u, f) => {
    let m,
      v = !1,
      w = null,
      x = null;
    n &&
      ((m = i && u.route.id ? i[u.route.id] : void 0),
      (w = u.route.errorElement || y0),
      o &&
        (a < 0 && f === 0
          ? (pd(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (v = !0),
            (x = null))
          : a === f &&
            ((v = !0), (x = u.route.hydrateFallbackElement || null))));
    let g = t.concat(l.slice(0, f + 1)),
      C = () => {
        let d;
        return (
          m
            ? (d = w)
            : v
              ? (d = x)
              : u.route.Component
                ? (d = y.createElement(u.route.Component, null))
                : u.route.element
                  ? (d = u.route.element)
                  : (d = s),
          y.createElement(w0, {
            match: u,
            routeContext: { outlet: s, matches: g, isDataRoute: n != null },
            children: d,
          })
        );
      };
    return n && (u.route.ErrorBoundary || u.route.errorElement || f === 0)
      ? y.createElement(g0, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: m,
          children: C(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : C();
  }, null);
}
function fs(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function k0(e) {
  let t = y.useContext(yn);
  return (W(t, fs(e)), t);
}
function S0(e) {
  let t = y.useContext(Al);
  return (W(t, fs(e)), t);
}
function _0(e) {
  let t = y.useContext(nt);
  return (W(t, fs(e)), t);
}
function hs(e) {
  let t = _0(e),
    n = t.matches[t.matches.length - 1];
  return (
    W(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
  );
}
function C0() {
  return hs('useRouteId');
}
function E0() {
  var r;
  let e = y.useContext(ps),
    t = S0('useRouteError'),
    n = hs('useRouteError');
  return e !== void 0 ? e : (r = t.errors) == null ? void 0 : r[n];
}
function N0() {
  let { router: e } = k0('useNavigate'),
    t = hs('useNavigate'),
    n = y.useRef(!1);
  return (
    cd(() => {
      n.current = !0;
    }),
    y.useCallback(
      async (l, i = {}) => {
        (Ze(n.current, ud),
          n.current &&
            (typeof l == 'number'
              ? e.navigate(l)
              : await e.navigate(l, { fromRouteId: t, ...i })));
      },
      [e, t]
    )
  );
}
var Ia = {};
function pd(e, t, n) {
  !t && !Ia[e] && ((Ia[e] = !0), Ze(!1, n));
}
y.memo(T0);
function T0({ routes: e, future: t, state: n }) {
  return dd(e, void 0, n, t);
}
function Xr(e) {
  W(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function P0({
  basename: e = '/',
  children: t = null,
  location: n,
  navigationType: r = 'POP',
  navigator: l,
  static: i = !1,
}) {
  W(
    !fr(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let o = e.replace(/^\/*/, '/'),
    a = y.useMemo(
      () => ({ basename: o, navigator: l, static: i, future: {} }),
      [o, l, i]
    );
  typeof n == 'string' && (n = vn(n));
  let {
      pathname: s = '/',
      search: u = '',
      hash: f = '',
      state: m = null,
      key: v = 'default',
    } = n,
    w = y.useMemo(() => {
      let x = et(s, o);
      return x == null
        ? null
        : {
            location: { pathname: x, search: u, hash: f, state: m, key: v },
            navigationType: r,
          };
    }, [o, s, u, f, m, v, r]);
  return (
    Ze(
      w != null,
      `<Router basename="${o}"> is not able to match the URL "${s}${u}${f}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    w == null
      ? null
      : y.createElement(
          He.Provider,
          { value: a },
          y.createElement(pr.Provider, { children: t, value: w })
        )
  );
}
function j0({ children: e, location: t }) {
  return m0(yo(e), t);
}
function yo(e, t = []) {
  let n = [];
  return (
    y.Children.forEach(e, (r, l) => {
      if (!y.isValidElement(r)) return;
      let i = [...t, l];
      if (r.type === y.Fragment) {
        n.push.apply(n, yo(r.props.children, i));
        return;
      }
      (W(
        r.type === Xr,
        `[${typeof r.type == 'string' ? r.type : r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        W(
          !r.props.index || !r.props.children,
          'An index route cannot have child routes.'
        ));
      let o = {
        id: r.props.id || i.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        hydrateFallbackElement: r.props.hydrateFallbackElement,
        HydrateFallback: r.props.HydrateFallback,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.hasErrorBoundary === !0 ||
          r.props.ErrorBoundary != null ||
          r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (o.children = yo(r.props.children, i)), n.push(o));
    }),
    n
  );
}
var Jr = 'get',
  br = 'application/x-www-form-urlencoded';
function Ul(e) {
  return e != null && typeof e.tagName == 'string';
}
function R0(e) {
  return Ul(e) && e.tagName.toLowerCase() === 'button';
}
function L0(e) {
  return Ul(e) && e.tagName.toLowerCase() === 'form';
}
function z0(e) {
  return Ul(e) && e.tagName.toLowerCase() === 'input';
}
function M0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function I0(e, t) {
  return e.button === 0 && (!t || t === '_self') && !M0(e);
}
var Dr = null;
function D0() {
  if (Dr === null)
    try {
      (new FormData(document.createElement('form'), 0), (Dr = !1));
    } catch {
      Dr = !0;
    }
  return Dr;
}
var B0 = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function wi(e) {
  return e != null && !B0.has(e)
    ? (Ze(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${br}"`
      ),
      null)
    : e;
}
function O0(e, t) {
  let n, r, l, i, o;
  if (L0(e)) {
    let a = e.getAttribute('action');
    ((r = a ? et(a, t) : null),
      (n = e.getAttribute('method') || Jr),
      (l = wi(e.getAttribute('enctype')) || br),
      (i = new FormData(e)));
  } else if (R0(e) || (z0(e) && (e.type === 'submit' || e.type === 'image'))) {
    let a = e.form;
    if (a == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let s = e.getAttribute('formaction') || a.getAttribute('action');
    if (
      ((r = s ? et(s, t) : null),
      (n = e.getAttribute('formmethod') || a.getAttribute('method') || Jr),
      (l =
        wi(e.getAttribute('formenctype')) ||
        wi(a.getAttribute('enctype')) ||
        br),
      (i = new FormData(a, e)),
      !D0())
    ) {
      let { name: u, type: f, value: m } = e;
      if (f === 'image') {
        let v = u ? `${u}.` : '';
        (i.append(`${v}x`, '0'), i.append(`${v}y`, '0'));
      } else u && i.append(u, m);
    }
  } else {
    if (Ul(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((n = Jr), (r = null), (l = br), (o = e));
  }
  return (
    i && l === 'text/plain' && ((o = i), (i = void 0)),
    { action: r, method: n.toLowerCase(), encType: l, formData: i, body: o }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function ms(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function F0(e, t, n) {
  let r =
    typeof e == 'string'
      ? new URL(
          e,
          typeof window > 'u' ? 'server://singlefetch/' : window.location.origin
        )
      : e;
  return (
    r.pathname === '/'
      ? (r.pathname = `_root.${n}`)
      : t && et(r.pathname, t) === '/'
        ? (r.pathname = `${t.replace(/\/$/, '')}/_root.${n}`)
        : (r.pathname = `${r.pathname.replace(/\/$/, '')}.${n}`),
    r
  );
}
async function $0(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await import(e.module);
    return ((t[e.id] = n), n);
  } catch (n) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`
      ),
      console.error(n),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function A0(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === 'preload' &&
        typeof e.imageSrcSet == 'string' &&
        typeof e.imageSizes == 'string'
      : typeof e.rel == 'string' && typeof e.href == 'string';
}
async function U0(e, t, n) {
  let r = await Promise.all(
    e.map(async (l) => {
      let i = t.routes[l.route.id];
      if (i) {
        let o = await $0(i, n);
        return o.links ? o.links() : [];
      }
      return [];
    })
  );
  return V0(
    r
      .flat(1)
      .filter(A0)
      .filter((l) => l.rel === 'stylesheet' || l.rel === 'preload')
      .map((l) =>
        l.rel === 'stylesheet'
          ? { ...l, rel: 'prefetch', as: 'style' }
          : { ...l, rel: 'prefetch' }
      )
  );
}
function Da(e, t, n, r, l, i) {
  let o = (s, u) => (n[u] ? s.route.id !== n[u].route.id : !0),
    a = (s, u) => {
      var f;
      return (
        n[u].pathname !== s.pathname ||
        (((f = n[u].route.path) == null ? void 0 : f.endsWith('*')) &&
          n[u].params['*'] !== s.params['*'])
      );
    };
  return i === 'assets'
    ? t.filter((s, u) => o(s, u) || a(s, u))
    : i === 'data'
      ? t.filter((s, u) => {
          var m;
          let f = r.routes[s.route.id];
          if (!f || !f.hasLoader) return !1;
          if (o(s, u) || a(s, u)) return !0;
          if (s.route.shouldRevalidate) {
            let v = s.route.shouldRevalidate({
              currentUrl: new URL(
                l.pathname + l.search + l.hash,
                window.origin
              ),
              currentParams: ((m = n[0]) == null ? void 0 : m.params) || {},
              nextUrl: new URL(e, window.origin),
              nextParams: s.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof v == 'boolean') return v;
          }
          return !0;
        })
      : [];
}
function Z0(e, t, { includeHydrateFallback: n } = {}) {
  return H0(
    e
      .map((r) => {
        let l = t.routes[r.route.id];
        if (!l) return [];
        let i = [l.module];
        return (
          l.clientActionModule && (i = i.concat(l.clientActionModule)),
          l.clientLoaderModule && (i = i.concat(l.clientLoaderModule)),
          n &&
            l.hydrateFallbackModule &&
            (i = i.concat(l.hydrateFallbackModule)),
          l.imports && (i = i.concat(l.imports)),
          i
        );
      })
      .flat(1)
  );
}
function H0(e) {
  return [...new Set(e)];
}
function W0(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function V0(e, t) {
  let n = new Set();
  return (
    new Set(t),
    e.reduce((r, l) => {
      let i = JSON.stringify(W0(l));
      return (n.has(i) || (n.add(i), r.push({ key: i, link: l })), r);
    }, [])
  );
}
function fd() {
  let e = y.useContext(yn);
  return (
    ms(
      e,
      'You must render this element inside a <DataRouterContext.Provider> element'
    ),
    e
  );
}
function Y0() {
  let e = y.useContext(Al);
  return (
    ms(
      e,
      'You must render this element inside a <DataRouterStateContext.Provider> element'
    ),
    e
  );
}
var vs = y.createContext(void 0);
vs.displayName = 'FrameworkContext';
function hd() {
  let e = y.useContext(vs);
  return (
    ms(e, 'You must render this element inside a <HydratedRouter> element'),
    e
  );
}
function Q0(e, t) {
  let n = y.useContext(vs),
    [r, l] = y.useState(!1),
    [i, o] = y.useState(!1),
    {
      onFocus: a,
      onBlur: s,
      onMouseEnter: u,
      onMouseLeave: f,
      onTouchStart: m,
    } = t,
    v = y.useRef(null);
  (y.useEffect(() => {
    if ((e === 'render' && o(!0), e === 'viewport')) {
      let g = (d) => {
          d.forEach((c) => {
            o(c.isIntersecting);
          });
        },
        C = new IntersectionObserver(g, { threshold: 0.5 });
      return (
        v.current && C.observe(v.current),
        () => {
          C.disconnect();
        }
      );
    }
  }, [e]),
    y.useEffect(() => {
      if (r) {
        let g = setTimeout(() => {
          o(!0);
        }, 100);
        return () => {
          clearTimeout(g);
        };
      }
    }, [r]));
  let w = () => {
      l(!0);
    },
    x = () => {
      (l(!1), o(!1));
    };
  return n
    ? e !== 'intent'
      ? [i, v, {}]
      : [
          i,
          v,
          {
            onFocus: Pn(a, w),
            onBlur: Pn(s, x),
            onMouseEnter: Pn(u, w),
            onMouseLeave: Pn(f, x),
            onTouchStart: Pn(m, w),
          },
        ]
    : [!1, v, {}];
}
function Pn(e, t) {
  return (n) => {
    (e && e(n), n.defaultPrevented || t(n));
  };
}
function K0({ page: e, ...t }) {
  let { router: n } = fd(),
    r = y.useMemo(() => nd(n.routes, e, n.basename), [n.routes, e, n.basename]);
  return r ? y.createElement(X0, { page: e, matches: r, ...t }) : null;
}
function G0(e) {
  let { manifest: t, routeModules: n } = hd(),
    [r, l] = y.useState([]);
  return (
    y.useEffect(() => {
      let i = !1;
      return (
        U0(e, t, n).then((o) => {
          i || l(o);
        }),
        () => {
          i = !0;
        }
      );
    }, [e, t, n]),
    r
  );
}
function X0({ page: e, matches: t, ...n }) {
  let r = $t(),
    { manifest: l, routeModules: i } = hd(),
    { basename: o } = fd(),
    { loaderData: a, matches: s } = Y0(),
    u = y.useMemo(() => Da(e, t, s, l, r, 'data'), [e, t, s, l, r]),
    f = y.useMemo(() => Da(e, t, s, l, r, 'assets'), [e, t, s, l, r]),
    m = y.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let x = new Set(),
        g = !1;
      if (
        (t.forEach((d) => {
          var h;
          let c = l.routes[d.route.id];
          !c ||
            !c.hasLoader ||
            ((!u.some((k) => k.route.id === d.route.id) &&
              d.route.id in a &&
              (h = i[d.route.id]) != null &&
              h.shouldRevalidate) ||
            c.hasClientLoader
              ? (g = !0)
              : x.add(d.route.id));
        }),
        x.size === 0)
      )
        return [];
      let C = F0(e, o, 'data');
      return (
        g &&
          x.size > 0 &&
          C.searchParams.set(
            '_routes',
            t
              .filter((d) => x.has(d.route.id))
              .map((d) => d.route.id)
              .join(',')
          ),
        [C.pathname + C.search]
      );
    }, [o, a, r, l, u, t, e, i]),
    v = y.useMemo(() => Z0(f, l), [f, l]),
    w = G0(f);
  return y.createElement(
    y.Fragment,
    null,
    m.map((x) =>
      y.createElement('link', {
        key: x,
        rel: 'prefetch',
        as: 'fetch',
        href: x,
        ...n,
      })
    ),
    v.map((x) =>
      y.createElement('link', { key: x, rel: 'modulepreload', href: x, ...n })
    ),
    w.map(({ key: x, link: g }) => y.createElement('link', { key: x, ...g }))
  );
}
function J0(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == 'function' ? n(t) : n != null && (n.current = t);
    });
  };
}
var md =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  md && (window.__reactRouterVersion = '7.7.1');
} catch {}
function b0({ basename: e, children: t, window: n }) {
  let r = y.useRef();
  r.current == null && (r.current = $h({ window: n, v5Compat: !0 }));
  let l = r.current,
    [i, o] = y.useState({ action: l.action, location: l.location }),
    a = y.useCallback(
      (s) => {
        y.startTransition(() => o(s));
      },
      [o]
    );
  return (
    y.useLayoutEffect(() => l.listen(a), [l, a]),
    y.createElement(P0, {
      basename: e,
      children: t,
      location: i.location,
      navigationType: i.action,
      navigator: l,
    })
  );
}
var vd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  or = y.forwardRef(function (
    {
      onClick: t,
      discover: n = 'render',
      prefetch: r = 'none',
      relative: l,
      reloadDocument: i,
      replace: o,
      state: a,
      target: s,
      to: u,
      preventScrollReset: f,
      viewTransition: m,
      ...v
    },
    w
  ) {
    let { basename: x } = y.useContext(He),
      g = typeof u == 'string' && vd.test(u),
      C,
      d = !1;
    if (typeof u == 'string' && g && ((C = u), md))
      try {
        let I = new URL(window.location.href),
          R = u.startsWith('//') ? new URL(I.protocol + u) : new URL(u),
          pe = et(R.pathname, x);
        R.origin === I.origin && pe != null
          ? (u = pe + R.search + R.hash)
          : (d = !0);
      } catch {
        Ze(
          !1,
          `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let c = p0(u, { relative: l }),
      [h, k, _] = Q0(r, v),
      P = nm(u, {
        replace: o,
        state: a,
        target: s,
        preventScrollReset: f,
        relative: l,
        viewTransition: m,
      });
    function T(I) {
      (t && t(I), I.defaultPrevented || P(I));
    }
    let j = y.createElement('a', {
      ...v,
      ..._,
      href: C || c,
      onClick: d || i ? t : T,
      ref: J0(w, k),
      target: s,
      'data-discover': !g && n === 'render' ? 'true' : void 0,
    });
    return h && !g
      ? y.createElement(y.Fragment, null, j, y.createElement(K0, { page: c }))
      : j;
  });
or.displayName = 'Link';
var q0 = y.forwardRef(function (
  {
    'aria-current': t = 'page',
    caseSensitive: n = !1,
    className: r = '',
    end: l = !1,
    style: i,
    to: o,
    viewTransition: a,
    children: s,
    ...u
  },
  f
) {
  let m = hr(o, { relative: u.relative }),
    v = $t(),
    w = y.useContext(Al),
    { navigator: x, basename: g } = y.useContext(He),
    C = w != null && sm(m) && a === !0,
    d = x.encodeLocation ? x.encodeLocation(m).pathname : m.pathname,
    c = v.pathname,
    h =
      w && w.navigation && w.navigation.location
        ? w.navigation.location.pathname
        : null;
  (n ||
    ((c = c.toLowerCase()),
    (h = h ? h.toLowerCase() : null),
    (d = d.toLowerCase())),
    h && g && (h = et(h, g) || h));
  const k = d !== '/' && d.endsWith('/') ? d.length - 1 : d.length;
  let _ = c === d || (!l && c.startsWith(d) && c.charAt(k) === '/'),
    P =
      h != null &&
      (h === d || (!l && h.startsWith(d) && h.charAt(d.length) === '/')),
    T = { isActive: _, isPending: P, isTransitioning: C },
    j = _ ? t : void 0,
    I;
  typeof r == 'function'
    ? (I = r(T))
    : (I = [
        r,
        _ ? 'active' : null,
        P ? 'pending' : null,
        C ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
  let R = typeof i == 'function' ? i(T) : i;
  return y.createElement(
    or,
    {
      ...u,
      'aria-current': j,
      className: I,
      ref: f,
      style: R,
      to: o,
      viewTransition: a,
    },
    typeof s == 'function' ? s(T) : s
  );
});
q0.displayName = 'NavLink';
var em = y.forwardRef(
  (
    {
      discover: e = 'render',
      fetcherKey: t,
      navigate: n,
      reloadDocument: r,
      replace: l,
      state: i,
      method: o = Jr,
      action: a,
      onSubmit: s,
      relative: u,
      preventScrollReset: f,
      viewTransition: m,
      ...v
    },
    w
  ) => {
    let x = im(),
      g = om(a, { relative: u }),
      C = o.toLowerCase() === 'get' ? 'get' : 'post',
      d = typeof a == 'string' && vd.test(a),
      c = (h) => {
        if ((s && s(h), h.defaultPrevented)) return;
        h.preventDefault();
        let k = h.nativeEvent.submitter,
          _ = (k == null ? void 0 : k.getAttribute('formmethod')) || o;
        x(k || h.currentTarget, {
          fetcherKey: t,
          method: _,
          navigate: n,
          replace: l,
          state: i,
          relative: u,
          preventScrollReset: f,
          viewTransition: m,
        });
      };
    return y.createElement('form', {
      ref: w,
      method: C,
      action: g,
      onSubmit: r ? s : c,
      ...v,
      'data-discover': !d && e === 'render' ? 'true' : void 0,
    });
  }
);
em.displayName = 'Form';
function tm(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function yd(e) {
  let t = y.useContext(yn);
  return (W(t, tm(e)), t);
}
function nm(
  e,
  {
    target: t,
    replace: n,
    state: r,
    preventScrollReset: l,
    relative: i,
    viewTransition: o,
  } = {}
) {
  let a = f0(),
    s = $t(),
    u = hr(e, { relative: i });
  return y.useCallback(
    (f) => {
      if (I0(f, t)) {
        f.preventDefault();
        let m = n !== void 0 ? n : ir(s) === ir(u);
        a(e, {
          replace: m,
          state: r,
          preventScrollReset: l,
          relative: i,
          viewTransition: o,
        });
      }
    },
    [s, a, u, n, r, t, e, l, i, o]
  );
}
var rm = 0,
  lm = () => `__${String(++rm)}__`;
function im() {
  let { router: e } = yd('useSubmit'),
    { basename: t } = y.useContext(He),
    n = C0();
  return y.useCallback(
    async (r, l = {}) => {
      let { action: i, method: o, encType: a, formData: s, body: u } = O0(r, t);
      if (l.navigate === !1) {
        let f = l.fetcherKey || lm();
        await e.fetch(f, n, l.action || i, {
          preventScrollReset: l.preventScrollReset,
          formData: s,
          body: u,
          formMethod: l.method || o,
          formEncType: l.encType || a,
          flushSync: l.flushSync,
        });
      } else
        await e.navigate(l.action || i, {
          preventScrollReset: l.preventScrollReset,
          formData: s,
          body: u,
          formMethod: l.method || o,
          formEncType: l.encType || a,
          replace: l.replace,
          state: l.state,
          fromRouteId: n,
          flushSync: l.flushSync,
          viewTransition: l.viewTransition,
        });
    },
    [e, t, n]
  );
}
function om(e, { relative: t } = {}) {
  let { basename: n } = y.useContext(He),
    r = y.useContext(nt);
  W(r, 'useFormAction must be used inside a RouteContext');
  let [l] = r.matches.slice(-1),
    i = { ...hr(e || '.', { relative: t }) },
    o = $t();
  if (e == null) {
    i.search = o.search;
    let a = new URLSearchParams(i.search),
      s = a.getAll('index');
    if (s.some((f) => f === '')) {
      (a.delete('index'),
        s.filter((m) => m).forEach((m) => a.append('index', m)));
      let f = a.toString();
      i.search = f ? `?${f}` : '';
    }
  }
  return (
    (!e || e === '.') &&
      l.route.index &&
      (i.search = i.search ? i.search.replace(/^\?/, '?index&') : '?index'),
    n !== '/' && (i.pathname = i.pathname === '/' ? n : Ge([n, i.pathname])),
    ir(i)
  );
}
function sm(e, { relative: t } = {}) {
  let n = y.useContext(ad);
  W(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: r } = yd('useViewTransitionState'),
    l = hr(e, { relative: t });
  if (!n.isTransitioning) return !1;
  let i = et(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = et(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return _l(l.pathname, o) != null || _l(l.pathname, i) != null;
}
const am = () =>
    p.jsx('div', {
      'data-testid': 'not-found-container',
      className:
        'min-h-screen bg-gray-50 flex items-center justify-center px-4',
      children: p.jsxs('div', {
        className: 'max-w-md w-full text-center',
        children: [
          p.jsxs('div', {
            className: 'mb-8',
            children: [
              p.jsx('div', {
                'data-testid': 'error-icon-container',
                className:
                  'inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6',
                children: p.jsx(Xf, {
                  'data-testid': 'error-icon',
                  className: 'w-10 h-10 text-red-600',
                }),
              }),
              p.jsx('h1', {
                className: 'text-6xl font-bold text-gray-900 mb-4',
                children: '404',
              }),
              p.jsx('h2', {
                className: 'text-2xl font-semibold text-gray-700 mb-4',
                children: 'Page Not Found',
              }),
              p.jsx('p', {
                className: 'text-gray-600 mb-8',
                children:
                  "The page you're looking for doesn't exist in this galaxy. Perhaps the archives are incomplete?",
              }),
            ],
          }),
          p.jsxs('div', {
            className: 'space-y-4',
            children: [
              p.jsxs(or, {
                to: '/',
                className:
                  'inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium',
                children: [
                  p.jsx(oh, {
                    'data-testid': 'home-icon',
                    className: 'w-5 h-5 mr-2',
                  }),
                  'Return to Home',
                ],
              }),
              p.jsxs(or, {
                to: '/',
                className:
                  'inline-flex items-center justify-center w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium',
                children: [
                  p.jsx(Jc, {
                    'data-testid': 'search-icon',
                    className: 'w-5 h-5 mr-2',
                  }),
                  'Search Characters',
                ],
              }),
            ],
          }),
          p.jsx('div', {
            className: 'mt-8 text-sm text-gray-500',
            children: p.jsx('p', {
              children: 'May the Force be with you on your way back!',
            }),
          }),
        ],
      }),
    }),
  um = () => {
    const { selectedItems: e, clearAll: t, getSelectedCount: n } = td(),
      r = n();
    if (r === 0) return null;
    const l = () => {
      const o = [
          [
            'Name',
            'Height',
            'Mass',
            'Hair Color',
            'Skin Color',
            'Eye Color',
            'Birth Year',
            'Gender',
            'Homeworld URL',
            'Films Count',
            'Species Count',
            'Vehicles Count',
            'Starships Count',
            'Details URL',
          ].join(','),
          ...e.map((f) =>
            [
              `"${f.name}"`,
              `"${f.height}"`,
              `"${f.mass}"`,
              `"${f.hair_color}"`,
              `"${f.skin_color}"`,
              `"${f.eye_color}"`,
              `"${f.birth_year}"`,
              `"${f.gender}"`,
              `"${f.homeworld}"`,
              f.films.length,
              f.species.length,
              f.vehicles.length,
              f.starships.length,
              `"${f.url}"`,
            ].join(',')
          ),
        ].join(`
`),
        a = new Blob([o], { type: 'text/csv;charset=utf-8;' }),
        s = document.createElement('a'),
        u = URL.createObjectURL(a);
      (s.setAttribute('href', u),
        s.setAttribute('download', `${r}_items.csv`),
        (s.style.visibility = 'hidden'),
        document.body.appendChild(s),
        s.click(),
        document.body.removeChild(s));
    };
    return p.jsx('div', {
      className:
        'fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-30',
      children: p.jsx('div', {
        className: 'max-w-4xl mx-auto px-6 py-4',
        children: p.jsxs('div', {
          className: 'flex items-center justify-between',
          children: [
            p.jsx('div', {
              className: 'flex items-center space-x-4',
              children: p.jsxs('span', {
                className: 'text-sm font-medium text-gray-900',
                children: [r, ' item', r !== 1 ? 's' : '', ' selected'],
              }),
            }),
            p.jsxs('div', {
              className: 'flex items-center space-x-3',
              children: [
                p.jsxs('button', {
                  onClick: t,
                  className:
                    'flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors',
                  children: [
                    p.jsx(qc, { className: 'w-4 h-4' }),
                    p.jsx('span', { children: 'Unselect all' }),
                  ],
                }),
                p.jsxs('button', {
                  onClick: l,
                  className:
                    'flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors',
                  children: [
                    p.jsx(nh, { className: 'w-4 h-4' }),
                    p.jsx('span', { children: 'Download' }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  cm = () => {
    const [e, t] = y.useState([]),
      [n, r] = y.useState(null),
      [l, i] = y.useState(!1),
      [o, a] = y.useState(null),
      [s, u] = y.useState(''),
      [f, m] = y.useState(null),
      [v, w] = y.useState(!1),
      x = y.useCallback(async (h, k = 1) => {
        (i(!0), a(null), u(h));
        try {
          const _ = await Oh.searchCharacters(h, k);
          (t(_.results), r(Bh(_, k)));
        } catch (_) {
          (console.error('Search error:', _),
            a(_ instanceof Error ? _.message : 'An unexpected error occurred'),
            t([]),
            r(null));
        } finally {
          i(!1);
        }
      }, []),
      g = y.useCallback(
        (h) => {
          x(s, h);
        },
        [s, x]
      ),
      C = () => {
        const h = (n == null ? void 0 : n.currentPage) || 1;
        x(s, h);
      },
      d = (h) => {
        (m(h), w(!0));
      },
      c = () => {
        (w(!1), m(null));
      };
    return p.jsx(fh, {
      children: p.jsx(b0, {
        children: p.jsxs(j0, {
          children: [
            p.jsx(Xr, {
              path: '/',
              element: p.jsxs('div', {
                className:
                  'min-h-screen bg-gray-50 flex flex-col relative dark:bg-gray-900 transition-colors',
                children: [
                  p.jsx(xh, { onSearch: x, isLoading: l }),
                  p.jsx(Ih, {
                    characters: e,
                    pagination: n,
                    isLoading: l,
                    error: o,
                    onRetry: C,
                    onPageChange: g,
                    onCharacterClick: d,
                  }),
                  p.jsx('div', {
                    className: 'mt-8 text-center',
                    children: p.jsx(or, {
                      to: '/about',
                      className:
                        'inline-block text-base font-medium text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-200 transition-colors border border-blue-600 dark:border-blue-400 px-4 py-2 rounded-lg',
                      children: 'About This Project',
                    }),
                  }),
                  p.jsx(Dh, { character: f, isOpen: v, onClose: c }),
                  p.jsx(um, {}),
                ],
              }),
            }),
            p.jsx(Xr, { path: '/about', element: p.jsx(Fh, {}) }),
            p.jsx(Xr, { path: '*', element: p.jsx(am, {}) }),
          ],
        }),
      }),
    });
  };
Kc(document.getElementById('root')).render(
  p.jsx(y.StrictMode, { children: p.jsx(cm, {}) })
);
