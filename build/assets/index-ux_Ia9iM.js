var Ja = (e) => {
  throw TypeError(e);
};
var is = (e, t, n) => t.has(e) || Ja('Cannot ' + n);
var v = (e, t, n) => (
    is(e, t, 'read from private field'),
    n ? n.call(e) : t.get(e)
  ),
  F = (e, t, n) =>
    t.has(e)
      ? Ja('Cannot add the same private member more than once')
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  T = (e, t, n, r) => (
    is(e, t, 'write to private field'),
    r ? r.call(e, n) : t.set(e, n),
    n
  ),
  $ = (e, t, n) => (is(e, t, 'access private method'), n);
var Rl = (e, t, n, r) => ({
  set _(l) {
    T(e, t, l, n);
  },
  get _() {
    return v(e, t, r);
  },
});
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === 'childList')
        for (const s of i.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s);
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
function Hh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Ac = { exports: {} },
  zi = {},
  Hc = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vl = Symbol.for('react.element'),
  Qh = Symbol.for('react.portal'),
  Bh = Symbol.for('react.fragment'),
  Wh = Symbol.for('react.strict_mode'),
  Vh = Symbol.for('react.profiler'),
  Kh = Symbol.for('react.provider'),
  bh = Symbol.for('react.context'),
  qh = Symbol.for('react.forward_ref'),
  Gh = Symbol.for('react.suspense'),
  Yh = Symbol.for('react.memo'),
  Xh = Symbol.for('react.lazy'),
  eu = Symbol.iterator;
function Zh(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (eu && e[eu]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Qc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Bc = Object.assign,
  Wc = {};
function vr(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Wc),
    (this.updater = n || Qc));
}
vr.prototype.isReactComponent = {};
vr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
vr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Vc() {}
Vc.prototype = vr.prototype;
function bo(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Wc),
    (this.updater = n || Qc));
}
var qo = (bo.prototype = new Vc());
qo.constructor = bo;
Bc(qo, vr.prototype);
qo.isPureReactComponent = !0;
var tu = Array.isArray,
  Kc = Object.prototype.hasOwnProperty,
  Go = { current: null },
  bc = { key: !0, ref: !0, __self: !0, __source: !0 };
function qc(e, t, n) {
  var r,
    l = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      Kc.call(t, r) && !bc.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var a = Array(o), u = 0; u < o; u++) a[u] = arguments[u + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((o = e.defaultProps), o)) l[r] === void 0 && (l[r] = o[r]);
  return {
    $$typeof: vl,
    type: e,
    key: i,
    ref: s,
    props: l,
    _owner: Go.current,
  };
}
function Jh(e, t) {
  return {
    $$typeof: vl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Yo(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === vl;
}
function ep(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var nu = /\/+/g;
function ss(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? ep('' + e.key)
    : t.toString(36);
}
function ql(e, t, n, r, l) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        s = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case vl:
          case Qh:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (l = l(s)),
      (e = r === '' ? '.' + ss(s, 0) : r),
      tu(l)
        ? ((n = ''),
          e != null && (n = e.replace(nu, '$&/') + '/'),
          ql(l, t, n, '', function (u) {
            return u;
          }))
        : l != null &&
          (Yo(l) &&
            (l = Jh(
              l,
              n +
                (!l.key || (s && s.key === l.key)
                  ? ''
                  : ('' + l.key).replace(nu, '$&/') + '/') +
                e
            )),
          t.push(l)),
      1
    );
  if (((s = 0), (r = r === '' ? '.' : r + ':'), tu(e)))
    for (var o = 0; o < e.length; o++) {
      i = e[o];
      var a = r + ss(i, o);
      s += ql(i, t, n, a, l);
    }
  else if (((a = Zh(e)), typeof a == 'function'))
    for (e = a.call(e), o = 0; !(i = e.next()).done; )
      ((i = i.value), (a = r + ss(i, o++)), (s += ql(i, t, n, a, l)));
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
  return s;
}
function _l(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    ql(e, r, '', '', function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function tp(e) {
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
var Se = { current: null },
  Gl = { transition: null },
  np = {
    ReactCurrentDispatcher: Se,
    ReactCurrentBatchConfig: Gl,
    ReactCurrentOwner: Go,
  };
function Gc() {
  throw Error('act(...) is not supported in production builds of React.');
}
z.Children = {
  map: _l,
  forEach: function (e, t, n) {
    _l(
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
      _l(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      _l(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Yo(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
z.Component = vr;
z.Fragment = Bh;
z.Profiler = Vh;
z.PureComponent = bo;
z.StrictMode = Wh;
z.Suspense = Gh;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = np;
z.act = Gc;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Bc({}, e.props),
    l = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Go.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (a in t)
      Kc.call(t, a) &&
        !bc.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && o !== void 0 ? o[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    o = Array(a);
    for (var u = 0; u < a; u++) o[u] = arguments[u + 2];
    r.children = o;
  }
  return { $$typeof: vl, type: e.type, key: l, ref: i, props: r, _owner: s };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: bh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Kh, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = qc;
z.createFactory = function (e) {
  var t = qc.bind(null, e);
  return ((t.type = e), t);
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: qh, render: e };
};
z.isValidElement = Yo;
z.lazy = function (e) {
  return { $$typeof: Xh, _payload: { _status: -1, _result: e }, _init: tp };
};
z.memo = function (e, t) {
  return { $$typeof: Yh, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = Gl.transition;
  Gl.transition = {};
  try {
    e();
  } finally {
    Gl.transition = t;
  }
};
z.unstable_act = Gc;
z.useCallback = function (e, t) {
  return Se.current.useCallback(e, t);
};
z.useContext = function (e) {
  return Se.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return Se.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return Se.current.useEffect(e, t);
};
z.useId = function () {
  return Se.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return Se.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return Se.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return Se.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return Se.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return Se.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return Se.current.useRef(e);
};
z.useState = function (e) {
  return Se.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return Se.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return Se.current.useTransition();
};
z.version = '18.3.1';
Hc.exports = z;
var S = Hc.exports;
const Mn = Hh(S);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rp = S,
  lp = Symbol.for('react.element'),
  ip = Symbol.for('react.fragment'),
  sp = Object.prototype.hasOwnProperty,
  op = rp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ap = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yc(e, t, n) {
  var r,
    l = {},
    i = null,
    s = null;
  (n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (s = t.ref));
  for (r in t) sp.call(t, r) && !ap.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: lp,
    type: e,
    key: i,
    ref: s,
    props: l,
    _owner: op.current,
  };
}
zi.Fragment = ip;
zi.jsx = Yc;
zi.jsxs = Yc;
Ac.exports = zi;
var y = Ac.exports,
  Ds = {},
  Xc = { exports: {} },
  Ie = {},
  Zc = { exports: {} },
  Jc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, I) {
    var D = L.length;
    L.push(I);
    e: for (; 0 < D; ) {
      var te = (D - 1) >>> 1,
        se = L[te];
      if (0 < l(se, I)) ((L[te] = I), (L[D] = se), (D = te));
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var I = L[0],
      D = L.pop();
    if (D !== I) {
      L[0] = D;
      e: for (var te = 0, se = L.length, Nl = se >>> 1; te < Nl; ) {
        var rn = 2 * (te + 1) - 1,
          ls = L[rn],
          ln = rn + 1,
          jl = L[ln];
        if (0 > l(ls, D))
          ln < se && 0 > l(jl, ls)
            ? ((L[te] = jl), (L[ln] = D), (te = ln))
            : ((L[te] = ls), (L[rn] = D), (te = rn));
        else if (ln < se && 0 > l(jl, D))
          ((L[te] = jl), (L[ln] = D), (te = ln));
        else break e;
      }
    }
    return I;
  }
  function l(L, I) {
    var D = L.sortIndex - I.sortIndex;
    return D !== 0 ? D : L.id - I.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      o = s.now();
    e.unstable_now = function () {
      return s.now() - o;
    };
  }
  var a = [],
    u = [],
    m = 1,
    p = null,
    d = 3,
    x = !1,
    w = !1,
    g = !1,
    C = typeof setTimeout == 'function' ? setTimeout : null,
    f = typeof clearTimeout == 'function' ? clearTimeout : null,
    c = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(L) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= L)
        (r(u), (I.sortIndex = I.expirationTime), t(a, I));
      else break;
      I = n(u);
    }
  }
  function k(L) {
    if (((g = !1), h(L), !w))
      if (n(a) !== null) ((w = !0), ns(E));
      else {
        var I = n(u);
        I !== null && rs(k, I.startTime - L);
      }
  }
  function E(L, I) {
    ((w = !1), g && ((g = !1), f(j), (j = -1)), (x = !0));
    var D = d;
    try {
      for (
        h(I), p = n(a);
        p !== null && (!(p.expirationTime > I) || (L && !X()));

      ) {
        var te = p.callback;
        if (typeof te == 'function') {
          ((p.callback = null), (d = p.priorityLevel));
          var se = te(p.expirationTime <= I);
          ((I = e.unstable_now()),
            typeof se == 'function' ? (p.callback = se) : p === n(a) && r(a),
            h(I));
        } else r(a);
        p = n(a);
      }
      if (p !== null) var Nl = !0;
      else {
        var rn = n(u);
        (rn !== null && rs(k, rn.startTime - I), (Nl = !1));
      }
      return Nl;
    } finally {
      ((p = null), (d = D), (x = !1));
    }
  }
  var P = !1,
    R = null,
    j = -1,
    M = 5,
    O = -1;
  function X() {
    return !(e.unstable_now() - O < M);
  }
  function ze() {
    if (R !== null) {
      var L = e.unstable_now();
      O = L;
      var I = !0;
      try {
        I = R(!0, L);
      } finally {
        I ? tt() : ((P = !1), (R = null));
      }
    } else P = !1;
  }
  var tt;
  if (typeof c == 'function')
    tt = function () {
      c(ze);
    };
  else if (typeof MessageChannel < 'u') {
    var Za = new MessageChannel(),
      Ah = Za.port2;
    ((Za.port1.onmessage = ze),
      (tt = function () {
        Ah.postMessage(null);
      }));
  } else
    tt = function () {
      C(ze, 0);
    };
  function ns(L) {
    ((R = L), P || ((P = !0), tt()));
  }
  function rs(L, I) {
    j = C(function () {
      L(e.unstable_now());
    }, I);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || x || ((w = !0), ns(E));
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (M = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (L) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = d;
      }
      var D = d;
      d = I;
      try {
        return L();
      } finally {
        d = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, I) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var D = d;
      d = L;
      try {
        return I();
      } finally {
        d = D;
      }
    }),
    (e.unstable_scheduleCallback = function (L, I, D) {
      var te = e.unstable_now();
      switch (
        (typeof D == 'object' && D !== null
          ? ((D = D.delay), (D = typeof D == 'number' && 0 < D ? te + D : te))
          : (D = te),
        L)
      ) {
        case 1:
          var se = -1;
          break;
        case 2:
          se = 250;
          break;
        case 5:
          se = 1073741823;
          break;
        case 4:
          se = 1e4;
          break;
        default:
          se = 5e3;
      }
      return (
        (se = D + se),
        (L = {
          id: m++,
          callback: I,
          priorityLevel: L,
          startTime: D,
          expirationTime: se,
          sortIndex: -1,
        }),
        D > te
          ? ((L.sortIndex = D),
            t(u, L),
            n(a) === null &&
              L === n(u) &&
              (g ? (f(j), (j = -1)) : (g = !0), rs(k, D - te)))
          : ((L.sortIndex = se), t(a, L), w || x || ((w = !0), ns(E))),
        L
      );
    }),
    (e.unstable_shouldYield = X),
    (e.unstable_wrapCallback = function (L) {
      var I = d;
      return function () {
        var D = d;
        d = I;
        try {
          return L.apply(this, arguments);
        } finally {
          d = D;
        }
      };
    }));
})(Jc);
Zc.exports = Jc;
var up = Zc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cp = S,
  Fe = up;
function N(e) {
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
var ef = new Set(),
  Kr = {};
function _n(e, t) {
  (cr(e, t), cr(e + 'Capture', t));
}
function cr(e, t) {
  for (Kr[e] = t, e = 0; e < t.length; e++) ef.add(t[e]);
}
var wt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  zs = Object.prototype.hasOwnProperty,
  fp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ru = {},
  lu = {};
function dp(e) {
  return zs.call(lu, e)
    ? !0
    : zs.call(ru, e)
      ? !1
      : fp.test(e)
        ? (lu[e] = !0)
        : ((ru[e] = !0), !1);
}
function hp(e, t, n, r) {
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
function pp(e, t, n, r) {
  if (t === null || typeof t > 'u' || hp(e, t, n, r)) return !0;
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
function Ce(e, t, n, r, l, i, s) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s));
}
var de = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    de[e] = new Ce(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  de[t] = new Ce(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  de[e] = new Ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  de[e] = new Ce(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    de[e] = new Ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  de[e] = new Ce(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  de[e] = new Ce(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  de[e] = new Ce(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  de[e] = new Ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Xo = /[\-:]([a-z])/g;
function Zo(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Xo, Zo);
    de[t] = new Ce(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Xo, Zo);
    de[t] = new Ce(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Xo, Zo);
  de[t] = new Ce(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  de[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new Ce(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  de[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Jo(e, t, n, r) {
  var l = de.hasOwnProperty(t) ? de[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (pp(t, n, l, r) && (n = null),
    r || l === null
      ? dp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var Pt = cp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Tl = Symbol.for('react.element'),
  Fn = Symbol.for('react.portal'),
  In = Symbol.for('react.fragment'),
  ea = Symbol.for('react.strict_mode'),
  $s = Symbol.for('react.profiler'),
  tf = Symbol.for('react.provider'),
  nf = Symbol.for('react.context'),
  ta = Symbol.for('react.forward_ref'),
  Us = Symbol.for('react.suspense'),
  As = Symbol.for('react.suspense_list'),
  na = Symbol.for('react.memo'),
  _t = Symbol.for('react.lazy'),
  rf = Symbol.for('react.offscreen'),
  iu = Symbol.iterator;
function Sr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (iu && e[iu]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Y = Object.assign,
  os;
function Or(e) {
  if (os === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      os = (t && t[1]) || '';
    }
  return (
    `
` +
    os +
    e
  );
}
var as = !1;
function us(e, t) {
  if (!e || as) return '';
  as = !0;
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
          s = l.length - 1,
          o = i.length - 1;
        1 <= s && 0 <= o && l[s] !== i[o];

      )
        o--;
      for (; 1 <= s && 0 <= o; s--, o--)
        if (l[s] !== i[o]) {
          if (s !== 1 || o !== 1)
            do
              if ((s--, o--, 0 > o || l[s] !== i[o])) {
                var a =
                  `
` + l[s].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= o);
          break;
        }
    }
  } finally {
    ((as = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : '') ? Or(e) : '';
}
function mp(e) {
  switch (e.tag) {
    case 5:
      return Or(e.type);
    case 16:
      return Or('Lazy');
    case 13:
      return Or('Suspense');
    case 19:
      return Or('SuspenseList');
    case 0:
    case 2:
    case 15:
      return ((e = us(e.type, !1)), e);
    case 11:
      return ((e = us(e.type.render, !1)), e);
    case 1:
      return ((e = us(e.type, !0)), e);
    default:
      return '';
  }
}
function Hs(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case In:
      return 'Fragment';
    case Fn:
      return 'Portal';
    case $s:
      return 'Profiler';
    case ea:
      return 'StrictMode';
    case Us:
      return 'Suspense';
    case As:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case nf:
        return (e.displayName || 'Context') + '.Consumer';
      case tf:
        return (e._context.displayName || 'Context') + '.Provider';
      case ta:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case na:
        return (
          (t = e.displayName || null),
          t !== null ? t : Hs(e.type) || 'Memo'
        );
      case _t:
        ((t = e._payload), (e = e._init));
        try {
          return Hs(e(t));
        } catch {}
    }
  return null;
}
function yp(e) {
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
      return Hs(t);
    case 8:
      return t === ea ? 'StrictMode' : 'Mode';
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
function Zt(e) {
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
function lf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function vp(e) {
  var t = lf(e) ? 'checked' : 'value',
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
        set: function (s) {
          ((r = '' + s), i.call(this, s));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = '' + s;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Ll(e) {
  e._valueTracker || (e._valueTracker = vp(e));
}
function sf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = lf(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ci(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Qs(e, t) {
  var n = t.checked;
  return Y({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function su(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Zt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    }));
}
function of(e, t) {
  ((t = t.checked), t != null && Jo(e, 'checked', t, !1));
}
function Bs(e, t) {
  of(e, t);
  var n = Zt(t.value),
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
    ? Ws(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Ws(e, t.type, Zt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function ou(e, t, n) {
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
function Ws(e, t, n) {
  (t !== 'number' || ci(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Mr = Array.isArray;
function Kn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      ((l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0));
  } else {
    for (n = '' + Zt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Vs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return Y({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function au(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Mr(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ''), (n = t));
  }
  e._wrapperState = { initialValue: Zt(n) };
}
function af(e, t) {
  var n = Zt(t.value),
    r = Zt(t.defaultValue);
  (n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r));
}
function uu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function uf(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Ks(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? uf(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var Ol,
  cf = (function (e) {
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
        Ol = Ol || document.createElement('div'),
          Ol.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Ol.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function br(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var zr = {
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
  gp = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(zr).forEach(function (e) {
  gp.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (zr[t] = zr[e]));
  });
});
function ff(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (zr.hasOwnProperty(e) && zr[e])
      ? ('' + t).trim()
      : t + 'px';
}
function df(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = ff(n, t[n], r);
      (n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l));
    }
}
var xp = Y(
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
function bs(e, t) {
  if (t) {
    if (xp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(N(62));
  }
}
function qs(e, t) {
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
var Gs = null;
function ra(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ys = null,
  bn = null,
  qn = null;
function cu(e) {
  if ((e = wl(e))) {
    if (typeof Ys != 'function') throw Error(N(280));
    var t = e.stateNode;
    t && ((t = Qi(t)), Ys(e.stateNode, e.type, t));
  }
}
function hf(e) {
  bn ? (qn ? qn.push(e) : (qn = [e])) : (bn = e);
}
function pf() {
  if (bn) {
    var e = bn,
      t = qn;
    if (((qn = bn = null), cu(e), t)) for (e = 0; e < t.length; e++) cu(t[e]);
  }
}
function mf(e, t) {
  return e(t);
}
function yf() {}
var cs = !1;
function vf(e, t, n) {
  if (cs) return e(t, n);
  cs = !0;
  try {
    return mf(e, t, n);
  } finally {
    ((cs = !1), (bn !== null || qn !== null) && (yf(), pf()));
  }
}
function qr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Qi(n);
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
  if (n && typeof n != 'function') throw Error(N(231, t, typeof n));
  return n;
}
var Xs = !1;
if (wt)
  try {
    var Cr = {};
    (Object.defineProperty(Cr, 'passive', {
      get: function () {
        Xs = !0;
      },
    }),
      window.addEventListener('test', Cr, Cr),
      window.removeEventListener('test', Cr, Cr));
  } catch {
    Xs = !1;
  }
function wp(e, t, n, r, l, i, s, o, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (m) {
    this.onError(m);
  }
}
var $r = !1,
  fi = null,
  di = !1,
  Zs = null,
  kp = {
    onError: function (e) {
      (($r = !0), (fi = e));
    },
  };
function Sp(e, t, n, r, l, i, s, o, a) {
  (($r = !1), (fi = null), wp.apply(kp, arguments));
}
function Cp(e, t, n, r, l, i, s, o, a) {
  if ((Sp.apply(this, arguments), $r)) {
    if ($r) {
      var u = fi;
      (($r = !1), (fi = null));
    } else throw Error(N(198));
    di || ((di = !0), (Zs = u));
  }
}
function Tn(e) {
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
function gf(e) {
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
function fu(e) {
  if (Tn(e) !== e) throw Error(N(188));
}
function Ep(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Tn(e)), t === null)) throw Error(N(188));
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
        if (i === n) return (fu(l), e);
        if (i === r) return (fu(l), t);
        i = i.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) ((n = l), (r = i));
    else {
      for (var s = !1, o = l.child; o; ) {
        if (o === n) {
          ((s = !0), (n = l), (r = i));
          break;
        }
        if (o === r) {
          ((s = !0), (r = l), (n = i));
          break;
        }
        o = o.sibling;
      }
      if (!s) {
        for (o = i.child; o; ) {
          if (o === n) {
            ((s = !0), (n = i), (r = l));
            break;
          }
          if (o === r) {
            ((s = !0), (r = i), (n = l));
            break;
          }
          o = o.sibling;
        }
        if (!s) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function xf(e) {
  return ((e = Ep(e)), e !== null ? wf(e) : null);
}
function wf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = wf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var kf = Fe.unstable_scheduleCallback,
  du = Fe.unstable_cancelCallback,
  Pp = Fe.unstable_shouldYield,
  Np = Fe.unstable_requestPaint,
  ne = Fe.unstable_now,
  jp = Fe.unstable_getCurrentPriorityLevel,
  la = Fe.unstable_ImmediatePriority,
  Sf = Fe.unstable_UserBlockingPriority,
  hi = Fe.unstable_NormalPriority,
  Rp = Fe.unstable_LowPriority,
  Cf = Fe.unstable_IdlePriority,
  $i = null,
  at = null;
function _p(e) {
  if (at && typeof at.onCommitFiberRoot == 'function')
    try {
      at.onCommitFiberRoot($i, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ze = Math.clz32 ? Math.clz32 : Op,
  Tp = Math.log,
  Lp = Math.LN2;
function Op(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Tp(e) / Lp) | 0)) | 0);
}
var Ml = 64,
  Fl = 4194304;
function Fr(e) {
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
function pi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var o = s & ~l;
    o !== 0 ? (r = Fr(o)) : ((i &= s), i !== 0 && (r = Fr(i)));
  } else ((s = n & ~l), s !== 0 ? (r = Fr(s)) : i !== 0 && (r = Fr(i)));
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
      ((n = 31 - Ze(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
  return r;
}
function Mp(e, t) {
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
function Fp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - Ze(i),
      o = 1 << s,
      a = l[s];
    (a === -1
      ? (!(o & n) || o & r) && (l[s] = Mp(o, t))
      : a <= t && (e.expiredLanes |= o),
      (i &= ~o));
  }
}
function Js(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ef() {
  var e = Ml;
  return ((Ml <<= 1), !(Ml & 4194240) && (Ml = 64), e);
}
function fs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function gl(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ze(t)),
    (e[t] = n));
}
function Ip(e, t) {
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
    var l = 31 - Ze(n),
      i = 1 << l;
    ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i));
  }
}
function ia(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ze(n),
      l = 1 << r;
    ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
  }
}
var Q = 0;
function Pf(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Nf,
  sa,
  jf,
  Rf,
  _f,
  eo = !1,
  Il = [],
  Bt = null,
  Wt = null,
  Vt = null,
  Gr = new Map(),
  Yr = new Map(),
  Lt = [],
  Dp =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function hu(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Bt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Wt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Vt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Gr.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Yr.delete(t.pointerId);
  }
}
function Er(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = wl(t)), t !== null && sa(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function zp(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return ((Bt = Er(Bt, e, t, n, r, l)), !0);
    case 'dragenter':
      return ((Wt = Er(Wt, e, t, n, r, l)), !0);
    case 'mouseover':
      return ((Vt = Er(Vt, e, t, n, r, l)), !0);
    case 'pointerover':
      var i = l.pointerId;
      return (Gr.set(i, Er(Gr.get(i) || null, e, t, n, r, l)), !0);
    case 'gotpointercapture':
      return (
        (i = l.pointerId),
        Yr.set(i, Er(Yr.get(i) || null, e, t, n, r, l)),
        !0
      );
  }
  return !1;
}
function Tf(e) {
  var t = an(e.target);
  if (t !== null) {
    var n = Tn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = gf(n)), t !== null)) {
          ((e.blockedOn = t),
            _f(e.priority, function () {
              jf(n);
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
function Yl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = to(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Gs = r), n.target.dispatchEvent(r), (Gs = null));
    } else return ((t = wl(n)), t !== null && sa(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function pu(e, t, n) {
  Yl(e) && n.delete(t);
}
function $p() {
  ((eo = !1),
    Bt !== null && Yl(Bt) && (Bt = null),
    Wt !== null && Yl(Wt) && (Wt = null),
    Vt !== null && Yl(Vt) && (Vt = null),
    Gr.forEach(pu),
    Yr.forEach(pu));
}
function Pr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    eo ||
      ((eo = !0),
      Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority, $p)));
}
function Xr(e) {
  function t(l) {
    return Pr(l, e);
  }
  if (0 < Il.length) {
    Pr(Il[0], e);
    for (var n = 1; n < Il.length; n++) {
      var r = Il[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Bt !== null && Pr(Bt, e),
      Wt !== null && Pr(Wt, e),
      Vt !== null && Pr(Vt, e),
      Gr.forEach(t),
      Yr.forEach(t),
      n = 0;
    n < Lt.length;
    n++
  )
    ((r = Lt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Lt.length && ((n = Lt[0]), n.blockedOn === null); )
    (Tf(n), n.blockedOn === null && Lt.shift());
}
var Gn = Pt.ReactCurrentBatchConfig,
  mi = !0;
function Up(e, t, n, r) {
  var l = Q,
    i = Gn.transition;
  Gn.transition = null;
  try {
    ((Q = 1), oa(e, t, n, r));
  } finally {
    ((Q = l), (Gn.transition = i));
  }
}
function Ap(e, t, n, r) {
  var l = Q,
    i = Gn.transition;
  Gn.transition = null;
  try {
    ((Q = 4), oa(e, t, n, r));
  } finally {
    ((Q = l), (Gn.transition = i));
  }
}
function oa(e, t, n, r) {
  if (mi) {
    var l = to(e, t, n, r);
    if (l === null) (ks(e, t, r, yi, n), hu(e, r));
    else if (zp(l, e, t, n, r)) r.stopPropagation();
    else if ((hu(e, r), t & 4 && -1 < Dp.indexOf(e))) {
      for (; l !== null; ) {
        var i = wl(l);
        if (
          (i !== null && Nf(i),
          (i = to(e, t, n, r)),
          i === null && ks(e, t, r, yi, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else ks(e, t, r, null, n);
  }
}
var yi = null;
function to(e, t, n, r) {
  if (((yi = null), (e = ra(r)), (e = an(e)), e !== null))
    if (((t = Tn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = gf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((yi = e), null);
}
function Lf(e) {
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
      switch (jp()) {
        case la:
          return 1;
        case Sf:
          return 4;
        case hi:
        case Rp:
          return 16;
        case Cf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ht = null,
  aa = null,
  Xl = null;
function Of() {
  if (Xl) return Xl;
  var e,
    t = aa,
    n = t.length,
    r,
    l = 'value' in Ht ? Ht.value : Ht.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === l[i - r]; r++);
  return (Xl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Zl(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Dl() {
  return !0;
}
function mu() {
  return !1;
}
function De(e) {
  function t(n, r, l, i, s) {
    ((this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null));
    for (var o in e)
      e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(i) : i[o]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Dl
        : mu),
      (this.isPropagationStopped = mu),
      this
    );
  }
  return (
    Y(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Dl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Dl));
      },
      persist: function () {},
      isPersistent: Dl,
    }),
    t
  );
}
var gr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ua = De(gr),
  xl = Y({}, gr, { view: 0, detail: 0 }),
  Hp = De(xl),
  ds,
  hs,
  Nr,
  Ui = Y({}, xl, {
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
    getModifierState: ca,
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
        : (e !== Nr &&
            (Nr && e.type === 'mousemove'
              ? ((ds = e.screenX - Nr.screenX), (hs = e.screenY - Nr.screenY))
              : (hs = ds = 0),
            (Nr = e)),
          ds);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : hs;
    },
  }),
  yu = De(Ui),
  Qp = Y({}, Ui, { dataTransfer: 0 }),
  Bp = De(Qp),
  Wp = Y({}, xl, { relatedTarget: 0 }),
  ps = De(Wp),
  Vp = Y({}, gr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Kp = De(Vp),
  bp = Y({}, gr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  qp = De(bp),
  Gp = Y({}, gr, { data: 0 }),
  vu = De(Gp),
  Yp = {
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
  Xp = {
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
  Zp = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Jp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Zp[e]) ? !!t[e] : !1;
}
function ca() {
  return Jp;
}
var em = Y({}, xl, {
    key: function (e) {
      if (e.key) {
        var t = Yp[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Zl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? Xp[e.keyCode] || 'Unidentified'
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
    getModifierState: ca,
    charCode: function (e) {
      return e.type === 'keypress' ? Zl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Zl(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  tm = De(em),
  nm = Y({}, Ui, {
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
  gu = De(nm),
  rm = Y({}, xl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ca,
  }),
  lm = De(rm),
  im = Y({}, gr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sm = De(im),
  om = Y({}, Ui, {
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
  am = De(om),
  um = [9, 13, 27, 32],
  fa = wt && 'CompositionEvent' in window,
  Ur = null;
wt && 'documentMode' in document && (Ur = document.documentMode);
var cm = wt && 'TextEvent' in window && !Ur,
  Mf = wt && (!fa || (Ur && 8 < Ur && 11 >= Ur)),
  xu = ' ',
  wu = !1;
function Ff(e, t) {
  switch (e) {
    case 'keyup':
      return um.indexOf(t.keyCode) !== -1;
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
function If(e) {
  return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
}
var Dn = !1;
function fm(e, t) {
  switch (e) {
    case 'compositionend':
      return If(t);
    case 'keypress':
      return t.which !== 32 ? null : ((wu = !0), xu);
    case 'textInput':
      return ((e = t.data), e === xu && wu ? null : e);
    default:
      return null;
  }
}
function dm(e, t) {
  if (Dn)
    return e === 'compositionend' || (!fa && Ff(e, t))
      ? ((e = Of()), (Xl = aa = Ht = null), (Dn = !1), e)
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
      return Mf && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var hm = {
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
function ku(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!hm[e.type] : t === 'textarea';
}
function Df(e, t, n, r) {
  (hf(r),
    (t = vi(t, 'onChange')),
    0 < t.length &&
      ((n = new ua('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Ar = null,
  Zr = null;
function pm(e) {
  bf(e, 0);
}
function Ai(e) {
  var t = Un(e);
  if (sf(t)) return e;
}
function mm(e, t) {
  if (e === 'change') return t;
}
var zf = !1;
if (wt) {
  var ms;
  if (wt) {
    var ys = 'oninput' in document;
    if (!ys) {
      var Su = document.createElement('div');
      (Su.setAttribute('oninput', 'return;'),
        (ys = typeof Su.oninput == 'function'));
    }
    ms = ys;
  } else ms = !1;
  zf = ms && (!document.documentMode || 9 < document.documentMode);
}
function Cu() {
  Ar && (Ar.detachEvent('onpropertychange', $f), (Zr = Ar = null));
}
function $f(e) {
  if (e.propertyName === 'value' && Ai(Zr)) {
    var t = [];
    (Df(t, Zr, e, ra(e)), vf(pm, t));
  }
}
function ym(e, t, n) {
  e === 'focusin'
    ? (Cu(), (Ar = t), (Zr = n), Ar.attachEvent('onpropertychange', $f))
    : e === 'focusout' && Cu();
}
function vm(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Ai(Zr);
}
function gm(e, t) {
  if (e === 'click') return Ai(t);
}
function xm(e, t) {
  if (e === 'input' || e === 'change') return Ai(t);
}
function wm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var et = typeof Object.is == 'function' ? Object.is : wm;
function Jr(e, t) {
  if (et(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!zs.call(t, l) || !et(e[l], t[l])) return !1;
  }
  return !0;
}
function Eu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Pu(e, t) {
  var n = Eu(e);
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
    n = Eu(n);
  }
}
function Uf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Uf(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Af() {
  for (var e = window, t = ci(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ci(e.document);
  }
  return t;
}
function da(e) {
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
function km(e) {
  var t = Af(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Uf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && da(n)) {
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
          (l = Pu(n, i)));
        var s = Pu(n, r);
        l &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
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
var Sm = wt && 'documentMode' in document && 11 >= document.documentMode,
  zn = null,
  no = null,
  Hr = null,
  ro = !1;
function Nu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ro ||
    zn == null ||
    zn !== ci(r) ||
    ((r = zn),
    'selectionStart' in r && da(r)
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
    (Hr && Jr(Hr, r)) ||
      ((Hr = r),
      (r = vi(no, 'onSelect')),
      0 < r.length &&
        ((t = new ua('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = zn))));
}
function zl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var $n = {
    animationend: zl('Animation', 'AnimationEnd'),
    animationiteration: zl('Animation', 'AnimationIteration'),
    animationstart: zl('Animation', 'AnimationStart'),
    transitionend: zl('Transition', 'TransitionEnd'),
  },
  vs = {},
  Hf = {};
wt &&
  ((Hf = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete $n.animationend.animation,
    delete $n.animationiteration.animation,
    delete $n.animationstart.animation),
  'TransitionEvent' in window || delete $n.transitionend.transition);
function Hi(e) {
  if (vs[e]) return vs[e];
  if (!$n[e]) return e;
  var t = $n[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Hf) return (vs[e] = t[n]);
  return e;
}
var Qf = Hi('animationend'),
  Bf = Hi('animationiteration'),
  Wf = Hi('animationstart'),
  Vf = Hi('transitionend'),
  Kf = new Map(),
  ju =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function en(e, t) {
  (Kf.set(e, t), _n(t, [e]));
}
for (var gs = 0; gs < ju.length; gs++) {
  var xs = ju[gs],
    Cm = xs.toLowerCase(),
    Em = xs[0].toUpperCase() + xs.slice(1);
  en(Cm, 'on' + Em);
}
en(Qf, 'onAnimationEnd');
en(Bf, 'onAnimationIteration');
en(Wf, 'onAnimationStart');
en('dblclick', 'onDoubleClick');
en('focusin', 'onFocus');
en('focusout', 'onBlur');
en(Vf, 'onTransitionEnd');
cr('onMouseEnter', ['mouseout', 'mouseover']);
cr('onMouseLeave', ['mouseout', 'mouseover']);
cr('onPointerEnter', ['pointerout', 'pointerover']);
cr('onPointerLeave', ['pointerout', 'pointerover']);
_n(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
_n(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
_n('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
_n(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
_n(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
_n(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Ir =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Pm = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Ir));
function Ru(e, t, n) {
  var r = e.type || 'unknown-event';
  ((e.currentTarget = n), Cp(r, t, void 0, e), (e.currentTarget = null));
}
function bf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var o = r[s],
            a = o.instance,
            u = o.currentTarget;
          if (((o = o.listener), a !== i && l.isPropagationStopped())) break e;
          (Ru(l, o, u), (i = a));
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((o = r[s]),
            (a = o.instance),
            (u = o.currentTarget),
            (o = o.listener),
            a !== i && l.isPropagationStopped())
          )
            break e;
          (Ru(l, o, u), (i = a));
        }
    }
  }
  if (di) throw ((e = Zs), (di = !1), (Zs = null), e);
}
function W(e, t) {
  var n = t[ao];
  n === void 0 && (n = t[ao] = new Set());
  var r = e + '__bubble';
  n.has(r) || (qf(t, e, 2, !1), n.add(r));
}
function ws(e, t, n) {
  var r = 0;
  (t && (r |= 4), qf(n, e, r, t));
}
var $l = '_reactListening' + Math.random().toString(36).slice(2);
function el(e) {
  if (!e[$l]) {
    ((e[$l] = !0),
      ef.forEach(function (n) {
        n !== 'selectionchange' && (Pm.has(n) || ws(n, !1, e), ws(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[$l] || ((t[$l] = !0), ws('selectionchange', !1, t));
  }
}
function qf(e, t, n, r) {
  switch (Lf(t)) {
    case 1:
      var l = Up;
      break;
    case 4:
      l = Ap;
      break;
    default:
      l = oa;
  }
  ((n = l.bind(null, t, n, e)),
    (l = void 0),
    !Xs ||
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
function ks(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var o = r.stateNode.containerInfo;
        if (o === l || (o.nodeType === 8 && o.parentNode === l)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            s = s.return;
          }
        for (; o !== null; ) {
          if (((s = an(o)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  vf(function () {
    var u = i,
      m = ra(n),
      p = [];
    e: {
      var d = Kf.get(e);
      if (d !== void 0) {
        var x = ua,
          w = e;
        switch (e) {
          case 'keypress':
            if (Zl(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            x = tm;
            break;
          case 'focusin':
            ((w = 'focus'), (x = ps));
            break;
          case 'focusout':
            ((w = 'blur'), (x = ps));
            break;
          case 'beforeblur':
          case 'afterblur':
            x = ps;
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
            x = yu;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            x = Bp;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            x = lm;
            break;
          case Qf:
          case Bf:
          case Wf:
            x = Kp;
            break;
          case Vf:
            x = sm;
            break;
          case 'scroll':
            x = Hp;
            break;
          case 'wheel':
            x = am;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            x = qp;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            x = gu;
        }
        var g = (t & 4) !== 0,
          C = !g && e === 'scroll',
          f = g ? (d !== null ? d + 'Capture' : null) : d;
        g = [];
        for (var c = u, h; c !== null; ) {
          h = c;
          var k = h.stateNode;
          if (
            (h.tag === 5 &&
              k !== null &&
              ((h = k),
              f !== null && ((k = qr(c, f)), k != null && g.push(tl(c, k, h)))),
            C)
          )
            break;
          c = c.return;
        }
        0 < g.length &&
          ((d = new x(d, w, null, n, m)), p.push({ event: d, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (x = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== Gs &&
            (w = n.relatedTarget || n.fromElement) &&
            (an(w) || w[kt]))
        )
          break e;
        if (
          (x || d) &&
          ((d =
            m.window === m
              ? m
              : (d = m.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          x
            ? ((w = n.relatedTarget || n.toElement),
              (x = u),
              (w = w ? an(w) : null),
              w !== null &&
                ((C = Tn(w)), w !== C || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((x = null), (w = u)),
          x !== w)
        ) {
          if (
            ((g = yu),
            (k = 'onMouseLeave'),
            (f = 'onMouseEnter'),
            (c = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((g = gu),
              (k = 'onPointerLeave'),
              (f = 'onPointerEnter'),
              (c = 'pointer')),
            (C = x == null ? d : Un(x)),
            (h = w == null ? d : Un(w)),
            (d = new g(k, c + 'leave', x, n, m)),
            (d.target = C),
            (d.relatedTarget = h),
            (k = null),
            an(m) === u &&
              ((g = new g(f, c + 'enter', w, n, m)),
              (g.target = h),
              (g.relatedTarget = C),
              (k = g)),
            (C = k),
            x && w)
          )
            t: {
              for (g = x, f = w, c = 0, h = g; h; h = On(h)) c++;
              for (h = 0, k = f; k; k = On(k)) h++;
              for (; 0 < c - h; ) ((g = On(g)), c--);
              for (; 0 < h - c; ) ((f = On(f)), h--);
              for (; c--; ) {
                if (g === f || (f !== null && g === f.alternate)) break t;
                ((g = On(g)), (f = On(f)));
              }
              g = null;
            }
          else g = null;
          (x !== null && _u(p, d, x, g, !1),
            w !== null && C !== null && _u(p, C, w, g, !0));
        }
      }
      e: {
        if (
          ((d = u ? Un(u) : window),
          (x = d.nodeName && d.nodeName.toLowerCase()),
          x === 'select' || (x === 'input' && d.type === 'file'))
        )
          var E = mm;
        else if (ku(d))
          if (zf) E = xm;
          else {
            E = vm;
            var P = ym;
          }
        else
          (x = d.nodeName) &&
            x.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (E = gm);
        if (E && (E = E(e, u))) {
          Df(p, E, n, m);
          break e;
        }
        (P && P(e, d, u),
          e === 'focusout' &&
            (P = d._wrapperState) &&
            P.controlled &&
            d.type === 'number' &&
            Ws(d, 'number', d.value));
      }
      switch (((P = u ? Un(u) : window), e)) {
        case 'focusin':
          (ku(P) || P.contentEditable === 'true') &&
            ((zn = P), (no = u), (Hr = null));
          break;
        case 'focusout':
          Hr = no = zn = null;
          break;
        case 'mousedown':
          ro = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ((ro = !1), Nu(p, n, m));
          break;
        case 'selectionchange':
          if (Sm) break;
        case 'keydown':
        case 'keyup':
          Nu(p, n, m);
      }
      var R;
      if (fa)
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
        Dn
          ? Ff(e, n) && (j = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (j = 'onCompositionStart');
      (j &&
        (Mf &&
          n.locale !== 'ko' &&
          (Dn || j !== 'onCompositionStart'
            ? j === 'onCompositionEnd' && Dn && (R = Of())
            : ((Ht = m),
              (aa = 'value' in Ht ? Ht.value : Ht.textContent),
              (Dn = !0))),
        (P = vi(u, j)),
        0 < P.length &&
          ((j = new vu(j, e, null, n, m)),
          p.push({ event: j, listeners: P }),
          R ? (j.data = R) : ((R = If(n)), R !== null && (j.data = R)))),
        (R = cm ? fm(e, n) : dm(e, n)) &&
          ((u = vi(u, 'onBeforeInput')),
          0 < u.length &&
            ((m = new vu('onBeforeInput', 'beforeinput', null, n, m)),
            p.push({ event: m, listeners: u }),
            (m.data = R))));
    }
    bf(p, t);
  });
}
function tl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function vi(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    (l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = qr(e, n)),
      i != null && r.unshift(tl(e, i, l)),
      (i = qr(e, t)),
      i != null && r.push(tl(e, i, l))),
      (e = e.return));
  }
  return r;
}
function On(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function _u(e, t, n, r, l) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var o = n,
      a = o.alternate,
      u = o.stateNode;
    if (a !== null && a === r) break;
    (o.tag === 5 &&
      u !== null &&
      ((o = u),
      l
        ? ((a = qr(n, i)), a != null && s.unshift(tl(n, a, o)))
        : l || ((a = qr(n, i)), a != null && s.push(tl(n, a, o)))),
      (n = n.return));
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Nm = /\r\n?/g,
  jm = /\u0000|\uFFFD/g;
function Tu(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Nm,
      `
`
    )
    .replace(jm, '');
}
function Ul(e, t, n) {
  if (((t = Tu(t)), Tu(e) !== t && n)) throw Error(N(425));
}
function gi() {}
var lo = null,
  io = null;
function so(e, t) {
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
var oo = typeof setTimeout == 'function' ? setTimeout : void 0,
  Rm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Lu = typeof Promise == 'function' ? Promise : void 0,
  _m =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Lu < 'u'
        ? function (e) {
            return Lu.resolve(null).then(e).catch(Tm);
          }
        : oo;
function Tm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ss(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          (e.removeChild(l), Xr(t));
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  Xr(t);
}
function Kt(e) {
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
function Ou(e) {
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
var xr = Math.random().toString(36).slice(2),
  ot = '__reactFiber$' + xr,
  nl = '__reactProps$' + xr,
  kt = '__reactContainer$' + xr,
  ao = '__reactEvents$' + xr,
  Lm = '__reactListeners$' + xr,
  Om = '__reactHandles$' + xr;
function an(e) {
  var t = e[ot];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[kt] || n[ot])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ou(e); e !== null; ) {
          if ((n = e[ot])) return n;
          e = Ou(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function wl(e) {
  return (
    (e = e[ot] || e[kt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Un(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Qi(e) {
  return e[nl] || null;
}
var uo = [],
  An = -1;
function tn(e) {
  return { current: e };
}
function V(e) {
  0 > An || ((e.current = uo[An]), (uo[An] = null), An--);
}
function B(e, t) {
  (An++, (uo[An] = e.current), (e.current = t));
}
var Jt = {},
  ve = tn(Jt),
  Re = tn(!1),
  Cn = Jt;
function fr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Jt;
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
function _e(e) {
  return ((e = e.childContextTypes), e != null);
}
function xi() {
  (V(Re), V(ve));
}
function Mu(e, t, n) {
  if (ve.current !== Jt) throw Error(N(168));
  (B(ve, t), B(Re, n));
}
function Gf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(N(108, yp(e) || 'Unknown', l));
  return Y({}, n, r);
}
function wi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Jt),
    (Cn = ve.current),
    B(ve, e),
    B(Re, Re.current),
    !0
  );
}
function Fu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  (n
    ? ((e = Gf(e, t, Cn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      V(Re),
      V(ve),
      B(ve, e))
    : V(Re),
    B(Re, n));
}
var pt = null,
  Bi = !1,
  Cs = !1;
function Yf(e) {
  pt === null ? (pt = [e]) : pt.push(e);
}
function Mm(e) {
  ((Bi = !0), Yf(e));
}
function nn() {
  if (!Cs && pt !== null) {
    Cs = !0;
    var e = 0,
      t = Q;
    try {
      var n = pt;
      for (Q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((pt = null), (Bi = !1));
    } catch (l) {
      throw (pt !== null && (pt = pt.slice(e + 1)), kf(la, nn), l);
    } finally {
      ((Q = t), (Cs = !1));
    }
  }
  return null;
}
var Hn = [],
  Qn = 0,
  ki = null,
  Si = 0,
  Ae = [],
  He = 0,
  En = null,
  yt = 1,
  vt = '';
function sn(e, t) {
  ((Hn[Qn++] = Si), (Hn[Qn++] = ki), (ki = e), (Si = t));
}
function Xf(e, t, n) {
  ((Ae[He++] = yt), (Ae[He++] = vt), (Ae[He++] = En), (En = e));
  var r = yt;
  e = vt;
  var l = 32 - Ze(r) - 1;
  ((r &= ~(1 << l)), (n += 1));
  var i = 32 - Ze(t) + l;
  if (30 < i) {
    var s = l - (l % 5);
    ((i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (l -= s),
      (yt = (1 << (32 - Ze(t) + l)) | (n << l) | r),
      (vt = i + e));
  } else ((yt = (1 << i) | (n << l) | r), (vt = e));
}
function ha(e) {
  e.return !== null && (sn(e, 1), Xf(e, 1, 0));
}
function pa(e) {
  for (; e === ki; )
    ((ki = Hn[--Qn]), (Hn[Qn] = null), (Si = Hn[--Qn]), (Hn[Qn] = null));
  for (; e === En; )
    ((En = Ae[--He]),
      (Ae[He] = null),
      (vt = Ae[--He]),
      (Ae[He] = null),
      (yt = Ae[--He]),
      (Ae[He] = null));
}
var Me = null,
  Oe = null,
  K = !1,
  Xe = null;
function Zf(e, t) {
  var n = Qe(5, null, null, 0);
  ((n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Iu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Me = e), (Oe = Kt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Me = e), (Oe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = En !== null ? { id: yt, overflow: vt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Qe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Me = e),
            (Oe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function co(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function fo(e) {
  if (K) {
    var t = Oe;
    if (t) {
      var n = t;
      if (!Iu(e, t)) {
        if (co(e)) throw Error(N(418));
        t = Kt(n.nextSibling);
        var r = Me;
        t && Iu(e, t)
          ? Zf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (K = !1), (Me = e));
      }
    } else {
      if (co(e)) throw Error(N(418));
      ((e.flags = (e.flags & -4097) | 2), (K = !1), (Me = e));
    }
  }
}
function Du(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Me = e;
}
function Al(e) {
  if (e !== Me) return !1;
  if (!K) return (Du(e), (K = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !so(e.type, e.memoizedProps))),
    t && (t = Oe))
  ) {
    if (co(e)) throw (Jf(), Error(N(418)));
    for (; t; ) (Zf(e, t), (t = Kt(t.nextSibling)));
  }
  if ((Du(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Oe = Kt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Oe = null;
    }
  } else Oe = Me ? Kt(e.stateNode.nextSibling) : null;
  return !0;
}
function Jf() {
  for (var e = Oe; e; ) e = Kt(e.nextSibling);
}
function dr() {
  ((Oe = Me = null), (K = !1));
}
function ma(e) {
  Xe === null ? (Xe = [e]) : Xe.push(e);
}
var Fm = Pt.ReactCurrentBatchConfig;
function jr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var l = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var o = l.refs;
            s === null ? delete o[i] : (o[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Hl(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    )
  );
}
function zu(e) {
  var t = e._init;
  return t(e._payload);
}
function ed(e) {
  function t(f, c) {
    if (e) {
      var h = f.deletions;
      h === null ? ((f.deletions = [c]), (f.flags |= 16)) : h.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) (t(f, c), (c = c.sibling));
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      (c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling));
    return f;
  }
  function l(f, c) {
    return ((f = Yt(f, c)), (f.index = 0), (f.sibling = null), f);
  }
  function i(f, c, h) {
    return (
      (f.index = h),
      e
        ? ((h = f.alternate),
          h !== null
            ? ((h = h.index), h < c ? ((f.flags |= 2), c) : h)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function s(f) {
    return (e && f.alternate === null && (f.flags |= 2), f);
  }
  function o(f, c, h, k) {
    return c === null || c.tag !== 6
      ? ((c = Ts(h, f.mode, k)), (c.return = f), c)
      : ((c = l(c, h)), (c.return = f), c);
  }
  function a(f, c, h, k) {
    var E = h.type;
    return E === In
      ? m(f, c, h.props.children, k, h.key)
      : c !== null &&
          (c.elementType === E ||
            (typeof E == 'object' &&
              E !== null &&
              E.$$typeof === _t &&
              zu(E) === c.type))
        ? ((k = l(c, h.props)), (k.ref = jr(f, c, h)), (k.return = f), k)
        : ((k = ii(h.type, h.key, h.props, null, f.mode, k)),
          (k.ref = jr(f, c, h)),
          (k.return = f),
          k);
  }
  function u(f, c, h, k) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== h.containerInfo ||
      c.stateNode.implementation !== h.implementation
      ? ((c = Ls(h, f.mode, k)), (c.return = f), c)
      : ((c = l(c, h.children || [])), (c.return = f), c);
  }
  function m(f, c, h, k, E) {
    return c === null || c.tag !== 7
      ? ((c = Sn(h, f.mode, k, E)), (c.return = f), c)
      : ((c = l(c, h)), (c.return = f), c);
  }
  function p(f, c, h) {
    if ((typeof c == 'string' && c !== '') || typeof c == 'number')
      return ((c = Ts('' + c, f.mode, h)), (c.return = f), c);
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case Tl:
          return (
            (h = ii(c.type, c.key, c.props, null, f.mode, h)),
            (h.ref = jr(f, null, c)),
            (h.return = f),
            h
          );
        case Fn:
          return ((c = Ls(c, f.mode, h)), (c.return = f), c);
        case _t:
          var k = c._init;
          return p(f, k(c._payload), h);
      }
      if (Mr(c) || Sr(c))
        return ((c = Sn(c, f.mode, h, null)), (c.return = f), c);
      Hl(f, c);
    }
    return null;
  }
  function d(f, c, h, k) {
    var E = c !== null ? c.key : null;
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return E !== null ? null : o(f, c, '' + h, k);
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case Tl:
          return h.key === E ? a(f, c, h, k) : null;
        case Fn:
          return h.key === E ? u(f, c, h, k) : null;
        case _t:
          return ((E = h._init), d(f, c, E(h._payload), k));
      }
      if (Mr(h) || Sr(h)) return E !== null ? null : m(f, c, h, k, null);
      Hl(f, h);
    }
    return null;
  }
  function x(f, c, h, k, E) {
    if ((typeof k == 'string' && k !== '') || typeof k == 'number')
      return ((f = f.get(h) || null), o(c, f, '' + k, E));
    if (typeof k == 'object' && k !== null) {
      switch (k.$$typeof) {
        case Tl:
          return (
            (f = f.get(k.key === null ? h : k.key) || null),
            a(c, f, k, E)
          );
        case Fn:
          return (
            (f = f.get(k.key === null ? h : k.key) || null),
            u(c, f, k, E)
          );
        case _t:
          var P = k._init;
          return x(f, c, h, P(k._payload), E);
      }
      if (Mr(k) || Sr(k)) return ((f = f.get(h) || null), m(c, f, k, E, null));
      Hl(c, k);
    }
    return null;
  }
  function w(f, c, h, k) {
    for (
      var E = null, P = null, R = c, j = (c = 0), M = null;
      R !== null && j < h.length;
      j++
    ) {
      R.index > j ? ((M = R), (R = null)) : (M = R.sibling);
      var O = d(f, R, h[j], k);
      if (O === null) {
        R === null && (R = M);
        break;
      }
      (e && R && O.alternate === null && t(f, R),
        (c = i(O, c, j)),
        P === null ? (E = O) : (P.sibling = O),
        (P = O),
        (R = M));
    }
    if (j === h.length) return (n(f, R), K && sn(f, j), E);
    if (R === null) {
      for (; j < h.length; j++)
        ((R = p(f, h[j], k)),
          R !== null &&
            ((c = i(R, c, j)),
            P === null ? (E = R) : (P.sibling = R),
            (P = R)));
      return (K && sn(f, j), E);
    }
    for (R = r(f, R); j < h.length; j++)
      ((M = x(R, f, j, h[j], k)),
        M !== null &&
          (e && M.alternate !== null && R.delete(M.key === null ? j : M.key),
          (c = i(M, c, j)),
          P === null ? (E = M) : (P.sibling = M),
          (P = M)));
    return (
      e &&
        R.forEach(function (X) {
          return t(f, X);
        }),
      K && sn(f, j),
      E
    );
  }
  function g(f, c, h, k) {
    var E = Sr(h);
    if (typeof E != 'function') throw Error(N(150));
    if (((h = E.call(h)), h == null)) throw Error(N(151));
    for (
      var P = (E = null), R = c, j = (c = 0), M = null, O = h.next();
      R !== null && !O.done;
      j++, O = h.next()
    ) {
      R.index > j ? ((M = R), (R = null)) : (M = R.sibling);
      var X = d(f, R, O.value, k);
      if (X === null) {
        R === null && (R = M);
        break;
      }
      (e && R && X.alternate === null && t(f, R),
        (c = i(X, c, j)),
        P === null ? (E = X) : (P.sibling = X),
        (P = X),
        (R = M));
    }
    if (O.done) return (n(f, R), K && sn(f, j), E);
    if (R === null) {
      for (; !O.done; j++, O = h.next())
        ((O = p(f, O.value, k)),
          O !== null &&
            ((c = i(O, c, j)),
            P === null ? (E = O) : (P.sibling = O),
            (P = O)));
      return (K && sn(f, j), E);
    }
    for (R = r(f, R); !O.done; j++, O = h.next())
      ((O = x(R, f, j, O.value, k)),
        O !== null &&
          (e && O.alternate !== null && R.delete(O.key === null ? j : O.key),
          (c = i(O, c, j)),
          P === null ? (E = O) : (P.sibling = O),
          (P = O)));
    return (
      e &&
        R.forEach(function (ze) {
          return t(f, ze);
        }),
      K && sn(f, j),
      E
    );
  }
  function C(f, c, h, k) {
    if (
      (typeof h == 'object' &&
        h !== null &&
        h.type === In &&
        h.key === null &&
        (h = h.props.children),
      typeof h == 'object' && h !== null)
    ) {
      switch (h.$$typeof) {
        case Tl:
          e: {
            for (var E = h.key, P = c; P !== null; ) {
              if (P.key === E) {
                if (((E = h.type), E === In)) {
                  if (P.tag === 7) {
                    (n(f, P.sibling),
                      (c = l(P, h.props.children)),
                      (c.return = f),
                      (f = c));
                    break e;
                  }
                } else if (
                  P.elementType === E ||
                  (typeof E == 'object' &&
                    E !== null &&
                    E.$$typeof === _t &&
                    zu(E) === P.type)
                ) {
                  (n(f, P.sibling),
                    (c = l(P, h.props)),
                    (c.ref = jr(f, P, h)),
                    (c.return = f),
                    (f = c));
                  break e;
                }
                n(f, P);
                break;
              } else t(f, P);
              P = P.sibling;
            }
            h.type === In
              ? ((c = Sn(h.props.children, f.mode, k, h.key)),
                (c.return = f),
                (f = c))
              : ((k = ii(h.type, h.key, h.props, null, f.mode, k)),
                (k.ref = jr(f, c, h)),
                (k.return = f),
                (f = k));
          }
          return s(f);
        case Fn:
          e: {
            for (P = h.key; c !== null; ) {
              if (c.key === P)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === h.containerInfo &&
                  c.stateNode.implementation === h.implementation
                ) {
                  (n(f, c.sibling),
                    (c = l(c, h.children || [])),
                    (c.return = f),
                    (f = c));
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            ((c = Ls(h, f.mode, k)), (c.return = f), (f = c));
          }
          return s(f);
        case _t:
          return ((P = h._init), C(f, c, P(h._payload), k));
      }
      if (Mr(h)) return w(f, c, h, k);
      if (Sr(h)) return g(f, c, h, k);
      Hl(f, h);
    }
    return (typeof h == 'string' && h !== '') || typeof h == 'number'
      ? ((h = '' + h),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, h)), (c.return = f), (f = c))
          : (n(f, c), (c = Ts(h, f.mode, k)), (c.return = f), (f = c)),
        s(f))
      : n(f, c);
  }
  return C;
}
var hr = ed(!0),
  td = ed(!1),
  Ci = tn(null),
  Ei = null,
  Bn = null,
  ya = null;
function va() {
  ya = Bn = Ei = null;
}
function ga(e) {
  var t = Ci.current;
  (V(Ci), (e._currentValue = t));
}
function ho(e, t, n) {
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
function Yn(e, t) {
  ((Ei = e),
    (ya = Bn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (je = !0), (e.firstContext = null)));
}
function We(e) {
  var t = e._currentValue;
  if (ya !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Bn === null)) {
      if (Ei === null) throw Error(N(308));
      ((Bn = e), (Ei.dependencies = { lanes: 0, firstContext: e }));
    } else Bn = Bn.next = e;
  return t;
}
var un = null;
function xa(e) {
  un === null ? (un = [e]) : un.push(e);
}
function nd(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), xa(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    St(e, r)
  );
}
function St(e, t) {
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
var Tt = !1;
function wa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function rd(e, t) {
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
function gt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function bt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), A & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      St(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), xa(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    St(e, n)
  );
}
function Jl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ia(e, n));
  }
}
function $u(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (l = i = s) : (i = i.next = s), (n = n.next));
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
function Pi(e, t, n, r) {
  var l = e.updateQueue;
  Tt = !1;
  var i = l.firstBaseUpdate,
    s = l.lastBaseUpdate,
    o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var a = o,
      u = a.next;
    ((a.next = null), s === null ? (i = u) : (s.next = u), (s = a));
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (o = m.lastBaseUpdate),
      o !== s &&
        (o === null ? (m.firstBaseUpdate = u) : (o.next = u),
        (m.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var p = l.baseState;
    ((s = 0), (m = u = a = null), (o = i));
    do {
      var d = o.lane,
        x = o.eventTime;
      if ((r & d) === d) {
        m !== null &&
          (m = m.next =
            {
              eventTime: x,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var w = e,
            g = o;
          switch (((d = t), (x = n), g.tag)) {
            case 1:
              if (((w = g.payload), typeof w == 'function')) {
                p = w.call(x, p, d);
                break e;
              }
              p = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = g.payload),
                (d = typeof w == 'function' ? w.call(x, p, d) : w),
                d == null)
              )
                break e;
              p = Y({}, p, d);
              break e;
            case 2:
              Tt = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (d = l.effects),
          d === null ? (l.effects = [o]) : d.push(o));
      } else
        ((x = {
          eventTime: x,
          lane: d,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          m === null ? ((u = m = x), (a = p)) : (m = m.next = x),
          (s |= d));
      if (((o = o.next), o === null)) {
        if (((o = l.shared.pending), o === null)) break;
        ((d = o),
          (o = d.next),
          (d.next = null),
          (l.lastBaseUpdate = d),
          (l.shared.pending = null));
      }
    } while (!0);
    if (
      (m === null && (a = p),
      (l.baseState = a),
      (l.firstBaseUpdate = u),
      (l.lastBaseUpdate = m),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do ((s |= l.lane), (l = l.next));
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    ((Nn |= s), (e.lanes = s), (e.memoizedState = p));
  }
}
function Uu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(N(191, l));
        l.call(r);
      }
    }
}
var kl = {},
  ut = tn(kl),
  rl = tn(kl),
  ll = tn(kl);
function cn(e) {
  if (e === kl) throw Error(N(174));
  return e;
}
function ka(e, t) {
  switch ((B(ll, t), B(rl, e), B(ut, kl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ks(null, '');
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ks(t, e)));
  }
  (V(ut), B(ut, t));
}
function pr() {
  (V(ut), V(rl), V(ll));
}
function ld(e) {
  cn(ll.current);
  var t = cn(ut.current),
    n = Ks(t, e.type);
  t !== n && (B(rl, e), B(ut, n));
}
function Sa(e) {
  rl.current === e && (V(ut), V(rl));
}
var b = tn(0);
function Ni(e) {
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
var Es = [];
function Ca() {
  for (var e = 0; e < Es.length; e++)
    Es[e]._workInProgressVersionPrimary = null;
  Es.length = 0;
}
var ei = Pt.ReactCurrentDispatcher,
  Ps = Pt.ReactCurrentBatchConfig,
  Pn = 0,
  q = null,
  le = null,
  oe = null,
  ji = !1,
  Qr = !1,
  il = 0,
  Im = 0;
function he() {
  throw Error(N(321));
}
function Ea(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!et(e[n], t[n])) return !1;
  return !0;
}
function Pa(e, t, n, r, l, i) {
  if (
    ((Pn = i),
    (q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ei.current = e === null || e.memoizedState === null ? Um : Am),
    (e = n(r, l)),
    Qr)
  ) {
    i = 0;
    do {
      if (((Qr = !1), (il = 0), 25 <= i)) throw Error(N(301));
      ((i += 1),
        (oe = le = null),
        (t.updateQueue = null),
        (ei.current = Hm),
        (e = n(r, l)));
    } while (Qr);
  }
  if (
    ((ei.current = Ri),
    (t = le !== null && le.next !== null),
    (Pn = 0),
    (oe = le = q = null),
    (ji = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Na() {
  var e = il !== 0;
  return ((il = 0), e);
}
function rt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (oe === null ? (q.memoizedState = oe = e) : (oe = oe.next = e), oe);
}
function Ve() {
  if (le === null) {
    var e = q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = le.next;
  var t = oe === null ? q.memoizedState : oe.next;
  if (t !== null) ((oe = t), (le = e));
  else {
    if (e === null) throw Error(N(310));
    ((le = e),
      (e = {
        memoizedState: le.memoizedState,
        baseState: le.baseState,
        baseQueue: le.baseQueue,
        queue: le.queue,
        next: null,
      }),
      oe === null ? (q.memoizedState = oe = e) : (oe = oe.next = e));
  }
  return oe;
}
function sl(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Ns(e) {
  var t = Ve(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = le,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var s = l.next;
      ((l.next = i.next), (i.next = s));
    }
    ((r.baseQueue = l = i), (n.pending = null));
  }
  if (l !== null) {
    ((i = l.next), (r = r.baseState));
    var o = (s = null),
      a = null,
      u = i;
    do {
      var m = u.lane;
      if ((Pn & m) === m)
        (a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var p = {
          lane: m,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (a === null ? ((o = a = p), (s = r)) : (a = a.next = p),
          (q.lanes |= m),
          (Nn |= m));
      }
      u = u.next;
    } while (u !== null && u !== i);
    (a === null ? (s = r) : (a.next = o),
      et(r, t.memoizedState) || (je = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do ((i = l.lane), (q.lanes |= i), (Nn |= i), (l = l.next));
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function js(e) {
  var t = Ve(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var s = (l = l.next);
    do ((i = e(i, s.action)), (s = s.next));
    while (s !== l);
    (et(i, t.memoizedState) || (je = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function id() {}
function sd(e, t) {
  var n = q,
    r = Ve(),
    l = t(),
    i = !et(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (je = !0)),
    (r = r.queue),
    ja(ud.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (oe !== null && oe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ol(9, ad.bind(null, n, r, l, t), void 0, null),
      ae === null)
    )
      throw Error(N(349));
    Pn & 30 || od(n, t, l);
  }
  return l;
}
function od(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function ad(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), cd(t) && fd(e));
}
function ud(e, t, n) {
  return n(function () {
    cd(t) && fd(e);
  });
}
function cd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !et(e, n);
  } catch {
    return !0;
  }
}
function fd(e) {
  var t = St(e, 1);
  t !== null && Je(t, e, 1, -1);
}
function Au(e) {
  var t = rt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: sl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = $m.bind(null, q, e)),
    [t.memoizedState, e]
  );
}
function ol(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function dd() {
  return Ve().memoizedState;
}
function ti(e, t, n, r) {
  var l = rt();
  ((q.flags |= e),
    (l.memoizedState = ol(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Wi(e, t, n, r) {
  var l = Ve();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (le !== null) {
    var s = le.memoizedState;
    if (((i = s.destroy), r !== null && Ea(r, s.deps))) {
      l.memoizedState = ol(t, n, i, r);
      return;
    }
  }
  ((q.flags |= e), (l.memoizedState = ol(1 | t, n, i, r)));
}
function Hu(e, t) {
  return ti(8390656, 8, e, t);
}
function ja(e, t) {
  return Wi(2048, 8, e, t);
}
function hd(e, t) {
  return Wi(4, 2, e, t);
}
function pd(e, t) {
  return Wi(4, 4, e, t);
}
function md(e, t) {
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
function yd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Wi(4, 4, md.bind(null, t, e), n)
  );
}
function Ra() {}
function vd(e, t) {
  var n = Ve();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ea(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function gd(e, t) {
  var n = Ve();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ea(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function xd(e, t, n) {
  return Pn & 21
    ? (et(n, t) || ((n = Ef()), (q.lanes |= n), (Nn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (je = !0)), (e.memoizedState = n));
}
function Dm(e, t) {
  var n = Q;
  ((Q = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Ps.transition;
  Ps.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((Q = n), (Ps.transition = r));
  }
}
function wd() {
  return Ve().memoizedState;
}
function zm(e, t, n) {
  var r = Gt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    kd(e))
  )
    Sd(t, n);
  else if (((n = nd(e, t, n, r)), n !== null)) {
    var l = ke();
    (Je(n, e, r, l), Cd(n, t, r));
  }
}
function $m(e, t, n) {
  var r = Gt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (kd(e)) Sd(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          o = i(s, n);
        if (((l.hasEagerState = !0), (l.eagerState = o), et(o, s))) {
          var a = t.interleaved;
          (a === null
            ? ((l.next = l), xa(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l));
          return;
        }
      } catch {
      } finally {
      }
    ((n = nd(e, t, l, r)),
      n !== null && ((l = ke()), Je(n, e, r, l), Cd(n, t, r)));
  }
}
function kd(e) {
  var t = e.alternate;
  return e === q || (t !== null && t === q);
}
function Sd(e, t) {
  Qr = ji = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Cd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ia(e, n));
  }
}
var Ri = {
    readContext: We,
    useCallback: he,
    useContext: he,
    useEffect: he,
    useImperativeHandle: he,
    useInsertionEffect: he,
    useLayoutEffect: he,
    useMemo: he,
    useReducer: he,
    useRef: he,
    useState: he,
    useDebugValue: he,
    useDeferredValue: he,
    useTransition: he,
    useMutableSource: he,
    useSyncExternalStore: he,
    useId: he,
    unstable_isNewReconciler: !1,
  },
  Um = {
    readContext: We,
    useCallback: function (e, t) {
      return ((rt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: We,
    useEffect: Hu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ti(4194308, 4, md.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ti(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ti(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = rt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = rt();
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
        (e = e.dispatch = zm.bind(null, q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = rt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Au,
    useDebugValue: Ra,
    useDeferredValue: function (e) {
      return (rt().memoizedState = e);
    },
    useTransition: function () {
      var e = Au(!1),
        t = e[0];
      return ((e = Dm.bind(null, e[1])), (rt().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = q,
        l = rt();
      if (K) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), ae === null)) throw Error(N(349));
        Pn & 30 || od(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Hu(ud.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ol(9, ad.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = rt(),
        t = ae.identifierPrefix;
      if (K) {
        var n = vt,
          r = yt;
        ((n = (r & ~(1 << (32 - Ze(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = il++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':'));
      } else ((n = Im++), (t = ':' + t + 'r' + n.toString(32) + ':'));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Am = {
    readContext: We,
    useCallback: vd,
    useContext: We,
    useEffect: ja,
    useImperativeHandle: yd,
    useInsertionEffect: hd,
    useLayoutEffect: pd,
    useMemo: gd,
    useReducer: Ns,
    useRef: dd,
    useState: function () {
      return Ns(sl);
    },
    useDebugValue: Ra,
    useDeferredValue: function (e) {
      var t = Ve();
      return xd(t, le.memoizedState, e);
    },
    useTransition: function () {
      var e = Ns(sl)[0],
        t = Ve().memoizedState;
      return [e, t];
    },
    useMutableSource: id,
    useSyncExternalStore: sd,
    useId: wd,
    unstable_isNewReconciler: !1,
  },
  Hm = {
    readContext: We,
    useCallback: vd,
    useContext: We,
    useEffect: ja,
    useImperativeHandle: yd,
    useInsertionEffect: hd,
    useLayoutEffect: pd,
    useMemo: gd,
    useReducer: js,
    useRef: dd,
    useState: function () {
      return js(sl);
    },
    useDebugValue: Ra,
    useDeferredValue: function (e) {
      var t = Ve();
      return le === null ? (t.memoizedState = e) : xd(t, le.memoizedState, e);
    },
    useTransition: function () {
      var e = js(sl)[0],
        t = Ve().memoizedState;
      return [e, t];
    },
    useMutableSource: id,
    useSyncExternalStore: sd,
    useId: wd,
    unstable_isNewReconciler: !1,
  };
function be(e, t) {
  if (e && e.defaultProps) {
    ((t = Y({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function po(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Y({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Vi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      l = Gt(e),
      i = gt(r, l);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = bt(e, i, l)),
      t !== null && (Je(t, e, l, r), Jl(t, e, l)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      l = Gt(e),
      i = gt(r, l);
    ((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = bt(e, i, l)),
      t !== null && (Je(t, e, l, r), Jl(t, e, l)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ke(),
      r = Gt(e),
      l = gt(n, r);
    ((l.tag = 2),
      t != null && (l.callback = t),
      (t = bt(e, l, r)),
      t !== null && (Je(t, e, r, n), Jl(t, e, r)));
  },
};
function Qu(e, t, n, r, l, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Jr(n, r) || !Jr(l, i)
        : !0
  );
}
function Ed(e, t, n) {
  var r = !1,
    l = Jt,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = We(i))
      : ((l = _e(t) ? Cn : ve.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? fr(e, l) : Jt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Vi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Bu(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Vi.enqueueReplaceState(t, t.state, null));
}
function mo(e, t, n, r) {
  var l = e.stateNode;
  ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), wa(e));
  var i = t.contextType;
  (typeof i == 'object' && i !== null
    ? (l.context = We(i))
    : ((i = _e(t) ? Cn : ve.current), (l.context = fr(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (po(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Vi.enqueueReplaceState(l, l.state, null),
      Pi(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308));
}
function mr(e, t) {
  try {
    var n = '',
      r = t;
    do ((n += mp(r)), (r = r.return));
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
function Rs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function yo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Qm = typeof WeakMap == 'function' ? WeakMap : Map;
function Pd(e, t, n) {
  ((n = gt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Ti || ((Ti = !0), (No = r)), yo(e, t));
    }),
    n
  );
}
function Nd(e, t, n) {
  ((n = gt(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    ((n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        yo(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        (yo(e, t),
          typeof r != 'function' &&
            (qt === null ? (qt = new Set([this])) : qt.add(this)));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : '',
        });
      }),
    n
  );
}
function Wu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Qm();
    var l = new Set();
    r.set(t, l);
  } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
  l.has(n) || (l.add(n), (e = ny.bind(null, e, t, n)), t.then(e, e));
}
function Vu(e) {
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
function Ku(e, t, n, r, l) {
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
              : ((t = gt(-1, 1)), (t.tag = 2), bt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Bm = Pt.ReactCurrentOwner,
  je = !1;
function we(e, t, n, r) {
  t.child = e === null ? td(t, null, n, r) : hr(t, e.child, n, r);
}
function bu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    Yn(t, l),
    (r = Pa(e, t, n, r, i, l)),
    (n = Na()),
    e !== null && !je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ct(e, t, l))
      : (K && n && ha(t), (t.flags |= 1), we(e, t, r, l), t.child)
  );
}
function qu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Da(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), jd(e, t, i, r, l))
      : ((e = ii(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Jr), n(s, r) && e.ref === t.ref)
    )
      return Ct(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Yt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function jd(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Jr(i, r) && e.ref === t.ref)
      if (((je = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (je = !0);
      else return ((t.lanes = e.lanes), Ct(e, t, l));
  }
  return vo(e, t, n, r, l);
}
function Rd(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        B(Vn, Le),
        (Le |= n));
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
          B(Vn, Le),
          (Le |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        B(Vn, Le),
        (Le |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      B(Vn, Le),
      (Le |= r));
  return (we(e, t, l, n), t.child);
}
function _d(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function vo(e, t, n, r, l) {
  var i = _e(n) ? Cn : ve.current;
  return (
    (i = fr(t, i)),
    Yn(t, l),
    (n = Pa(e, t, n, r, i, l)),
    (r = Na()),
    e !== null && !je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ct(e, t, l))
      : (K && r && ha(t), (t.flags |= 1), we(e, t, n, l), t.child)
  );
}
function Gu(e, t, n, r, l) {
  if (_e(n)) {
    var i = !0;
    wi(t);
  } else i = !1;
  if ((Yn(t, l), t.stateNode === null))
    (ni(e, t), Ed(t, n, r), mo(t, n, r, l), (r = !0));
  else if (e === null) {
    var s = t.stateNode,
      o = t.memoizedProps;
    s.props = o;
    var a = s.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = We(u))
      : ((u = _e(n) ? Cn : ve.current), (u = fr(t, u)));
    var m = n.getDerivedStateFromProps,
      p =
        typeof m == 'function' ||
        typeof s.getSnapshotBeforeUpdate == 'function';
    (p ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((o !== r || a !== u) && Bu(t, s, r, u)),
      (Tt = !1));
    var d = t.memoizedState;
    ((s.state = d),
      Pi(t, r, s, l),
      (a = t.memoizedState),
      o !== r || d !== a || Re.current || Tt
        ? (typeof m == 'function' && (po(t, n, m, r), (a = t.memoizedState)),
          (o = Tt || Qu(t, n, o, r, d, a, u))
            ? (p ||
                (typeof s.UNSAFE_componentWillMount != 'function' &&
                  typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = o))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((s = t.stateNode),
      rd(e, t),
      (o = t.memoizedProps),
      (u = t.type === t.elementType ? o : be(t.type, o)),
      (s.props = u),
      (p = t.pendingProps),
      (d = s.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = We(a))
        : ((a = _e(n) ? Cn : ve.current), (a = fr(t, a))));
    var x = n.getDerivedStateFromProps;
    ((m =
      typeof x == 'function' ||
      typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((o !== p || d !== a) && Bu(t, s, r, a)),
      (Tt = !1),
      (d = t.memoizedState),
      (s.state = d),
      Pi(t, r, s, l));
    var w = t.memoizedState;
    o !== p || d !== w || Re.current || Tt
      ? (typeof x == 'function' && (po(t, n, x, r), (w = t.memoizedState)),
        (u = Tt || Qu(t, n, u, r, d, w, a) || !1)
          ? (m ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' &&
                s.componentWillUpdate(r, w, a),
              typeof s.UNSAFE_componentWillUpdate == 'function' &&
                s.UNSAFE_componentWillUpdate(r, w, a)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (o === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (o === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (s.props = r),
        (s.state = w),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != 'function' ||
          (o === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (o === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return go(e, t, n, r, i, l);
}
function go(e, t, n, r, l, i) {
  _d(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return (l && Fu(t, n, !1), Ct(e, t, i));
  ((r = t.stateNode), (Bm.current = t));
  var o =
    s && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = hr(t, e.child, null, i)), (t.child = hr(t, null, o, i)))
      : we(e, t, o, i),
    (t.memoizedState = r.state),
    l && Fu(t, n, !0),
    t.child
  );
}
function Td(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Mu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Mu(e, t.context, !1),
    ka(e, t.containerInfo));
}
function Yu(e, t, n, r, l) {
  return (dr(), ma(l), (t.flags |= 256), we(e, t, n, r), t.child);
}
var xo = { dehydrated: null, treeContext: null, retryLane: 0 };
function wo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ld(e, t, n) {
  var r = t.pendingProps,
    l = b.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    o;
  if (
    ((o = s) ||
      (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    o
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    B(b, l & 1),
    e === null)
  )
    return (
      fo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: 'hidden', children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = qi(s, r, 0, null)),
              (e = Sn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = wo(n)),
              (t.memoizedState = xo),
              e)
            : _a(t, s))
    );
  if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
    return Wm(e, t, s, r, o, l, n);
  if (i) {
    ((i = r.fallback), (s = t.mode), (l = e.child), (o = l.sibling));
    var a = { mode: 'hidden', children: r.children };
    return (
      !(s & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Yt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      o !== null ? (i = Yt(o, i)) : ((i = Sn(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? wo(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = xo),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Yt(i, { mode: 'visible', children: r.children })),
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
function _a(e, t) {
  return (
    (t = qi({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ql(e, t, n, r) {
  return (
    r !== null && ma(r),
    hr(t, e.child, null, n),
    (e = _a(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Wm(e, t, n, r, l, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Rs(Error(N(422)))), Ql(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = qi({ mode: 'visible', children: r.children }, l, 0, null)),
          (i = Sn(i, l, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && hr(t, e.child, null, s),
          (t.child.memoizedState = wo(s)),
          (t.memoizedState = xo),
          i);
  if (!(t.mode & 1)) return Ql(e, t, s, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
    return (
      (r = o),
      (i = Error(N(419))),
      (r = Rs(i, r, void 0)),
      Ql(e, t, s, r)
    );
  }
  if (((o = (s & e.childLanes) !== 0), je || o)) {
    if (((r = ae), r !== null)) {
      switch (s & -s) {
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
      ((l = l & (r.suspendedLanes | s) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), St(e, l), Je(r, e, l, -1)));
    }
    return (Ia(), (r = Rs(Error(N(421)))), Ql(e, t, s, r));
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ry.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Oe = Kt(l.nextSibling)),
      (Me = t),
      (K = !0),
      (Xe = null),
      e !== null &&
        ((Ae[He++] = yt),
        (Ae[He++] = vt),
        (Ae[He++] = En),
        (yt = e.id),
        (vt = e.overflow),
        (En = t)),
      (t = _a(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Xu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), ho(e.return, t, n));
}
function _s(e, t, n, r, l) {
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
function Od(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((we(e, t, r.children, n), (r = b.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Xu(e, n, t);
        else if (e.tag === 19) Xu(e, n, t);
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
  if ((B(b, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          ((e = n.alternate),
            e !== null && Ni(e) === null && (l = n),
            (n = n.sibling));
        ((n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          _s(t, !1, l, n, i));
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Ni(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        _s(t, !0, n, null, i);
        break;
      case 'together':
        _s(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ni(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ct(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Nn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Yt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      ((e = e.sibling),
        (n = n.sibling = Yt(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Vm(e, t, n) {
  switch (t.tag) {
    case 3:
      (Td(t), dr());
      break;
    case 5:
      ld(t);
      break;
    case 1:
      _e(t.type) && wi(t);
      break;
    case 4:
      ka(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      (B(Ci, r._currentValue), (r._currentValue = l));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (B(b, b.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Ld(e, t, n)
            : (B(b, b.current & 1),
              (e = Ct(e, t, n)),
              e !== null ? e.sibling : null);
      B(b, b.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Od(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        B(b, b.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Rd(e, t, n));
  }
  return Ct(e, t, n);
}
var Md, ko, Fd, Id;
Md = function (e, t) {
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
ko = function () {};
Fd = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    ((e = t.stateNode), cn(ut.current));
    var i = null;
    switch (n) {
      case 'input':
        ((l = Qs(e, l)), (r = Qs(e, r)), (i = []));
        break;
      case 'select':
        ((l = Y({}, l, { value: void 0 })),
          (r = Y({}, r, { value: void 0 })),
          (i = []));
        break;
      case 'textarea':
        ((l = Vs(e, l)), (r = Vs(e, r)), (i = []));
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = gi);
    }
    bs(n, r);
    var s;
    n = null;
    for (u in l)
      if (!r.hasOwnProperty(u) && l.hasOwnProperty(u) && l[u] != null)
        if (u === 'style') {
          var o = l[u];
          for (s in o) o.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Kr.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((o = l != null ? l[u] : void 0),
        r.hasOwnProperty(u) && a !== o && (a != null || o != null))
      )
        if (u === 'style')
          if (o) {
            for (s in o)
              !o.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ''));
            for (s in a)
              a.hasOwnProperty(s) &&
                o[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else (n || (i || (i = []), i.push(u, n)), (n = a));
        else
          u === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (o = o ? o.__html : void 0),
              a != null && o !== a && (i = i || []).push(u, a))
            : u === 'children'
              ? (typeof a != 'string' && typeof a != 'number') ||
                (i = i || []).push(u, '' + a)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (Kr.hasOwnProperty(u)
                  ? (a != null && u === 'onScroll' && W('scroll', e),
                    i || o === a || (i = []))
                  : (i = i || []).push(u, a));
    }
    n && (i = i || []).push('style', n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Id = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Rr(e, t) {
  if (!K)
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
function pe(e) {
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
function Km(e, t, n) {
  var r = t.pendingProps;
  switch ((pa(t), t.tag)) {
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
      return (pe(t), null);
    case 1:
      return (_e(t.type) && xi(), pe(t), null);
    case 3:
      return (
        (r = t.stateNode),
        pr(),
        V(Re),
        V(ve),
        Ca(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Al(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Xe !== null && (_o(Xe), (Xe = null)))),
        ko(e, t),
        pe(t),
        null
      );
    case 5:
      Sa(t);
      var l = cn(ll.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Fd(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return (pe(t), null);
        }
        if (((e = cn(ut.current)), Al(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[ot] = t), (r[nl] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              (W('cancel', r), W('close', r));
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              W('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < Ir.length; l++) W(Ir[l], r);
              break;
            case 'source':
              W('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              (W('error', r), W('load', r));
              break;
            case 'details':
              W('toggle', r);
              break;
            case 'input':
              (su(r, i), W('invalid', r));
              break;
            case 'select':
              ((r._wrapperState = { wasMultiple: !!i.multiple }),
                W('invalid', r));
              break;
            case 'textarea':
              (au(r, i), W('invalid', r));
          }
          (bs(n, i), (l = null));
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var o = i[s];
              s === 'children'
                ? typeof o == 'string'
                  ? r.textContent !== o &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ul(r.textContent, o, e),
                    (l = ['children', o]))
                  : typeof o == 'number' &&
                    r.textContent !== '' + o &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ul(r.textContent, o, e),
                    (l = ['children', '' + o]))
                : Kr.hasOwnProperty(s) &&
                  o != null &&
                  s === 'onScroll' &&
                  W('scroll', r);
            }
          switch (n) {
            case 'input':
              (Ll(r), ou(r, i, !0));
              break;
            case 'textarea':
              (Ll(r), uu(r));
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = gi);
          }
          ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((s = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = uf(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = s.createElement('div')),
                  (e.innerHTML = '<script><\/script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === 'select' &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[ot] = t),
            (e[nl] = r),
            Md(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((s = qs(n, r)), n)) {
              case 'dialog':
                (W('cancel', e), W('close', e), (l = r));
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                (W('load', e), (l = r));
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < Ir.length; l++) W(Ir[l], e);
                l = r;
                break;
              case 'source':
                (W('error', e), (l = r));
                break;
              case 'img':
              case 'image':
              case 'link':
                (W('error', e), W('load', e), (l = r));
                break;
              case 'details':
                (W('toggle', e), (l = r));
                break;
              case 'input':
                (su(e, r), (l = Qs(e, r)), W('invalid', e));
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = Y({}, r, { value: void 0 })),
                  W('invalid', e));
                break;
              case 'textarea':
                (au(e, r), (l = Vs(e, r)), W('invalid', e));
                break;
              default:
                l = r;
            }
            (bs(n, l), (o = l));
            for (i in o)
              if (o.hasOwnProperty(i)) {
                var a = o[i];
                i === 'style'
                  ? df(e, a)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((a = a ? a.__html : void 0), a != null && cf(e, a))
                    : i === 'children'
                      ? typeof a == 'string'
                        ? (n !== 'textarea' || a !== '') && br(e, a)
                        : typeof a == 'number' && br(e, '' + a)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (Kr.hasOwnProperty(i)
                          ? a != null && i === 'onScroll' && W('scroll', e)
                          : a != null && Jo(e, i, a, s));
              }
            switch (n) {
              case 'input':
                (Ll(e), ou(e, r, !1));
                break;
              case 'textarea':
                (Ll(e), uu(e));
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Zt(r.value));
                break;
              case 'select':
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Kn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Kn(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = gi);
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
      return (pe(t), null);
    case 6:
      if (e && t.stateNode != null) Id(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(N(166));
        if (((n = cn(ll.current)), cn(ut.current), Al(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ot] = t),
            (i = r.nodeValue !== n) && ((e = Me), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ul(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ul(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ot] = t),
            (t.stateNode = r));
      }
      return (pe(t), null);
    case 13:
      if (
        (V(b),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (K && Oe !== null && t.mode & 1 && !(t.flags & 128))
          (Jf(), dr(), (t.flags |= 98560), (i = !1));
        else if (((i = Al(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(N(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(N(317));
            i[ot] = t;
          } else
            (dr(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (pe(t), (i = !1));
        } else (Xe !== null && (_o(Xe), (Xe = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || b.current & 1 ? ie === 0 && (ie = 3) : Ia())),
          t.updateQueue !== null && (t.flags |= 4),
          pe(t),
          null);
    case 4:
      return (
        pr(),
        ko(e, t),
        e === null && el(t.stateNode.containerInfo),
        pe(t),
        null
      );
    case 10:
      return (ga(t.type._context), pe(t), null);
    case 17:
      return (_e(t.type) && xi(), pe(t), null);
    case 19:
      if ((V(b), (i = t.memoizedState), i === null)) return (pe(t), null);
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Rr(i, !1);
        else {
          if (ie !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Ni(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Rr(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  ((i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (B(b, (b.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ne() > yr &&
            ((t.flags |= 128), (r = !0), Rr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ni(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Rr(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !s.alternate && !K)
            )
              return (pe(t), null);
          } else
            2 * ne() - i.renderingStartTime > yr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Rr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ne()),
          (t.sibling = null),
          (n = b.current),
          B(b, r ? (n & 1) | 2 : n & 1),
          t)
        : (pe(t), null);
    case 22:
    case 23:
      return (
        Fa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Le & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function bm(e, t) {
  switch ((pa(t), t.tag)) {
    case 1:
      return (
        _e(t.type) && xi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        pr(),
        V(Re),
        V(ve),
        Ca(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Sa(t), null);
    case 13:
      if ((V(b), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(N(340));
        dr();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (V(b), null);
    case 4:
      return (pr(), null);
    case 10:
      return (ga(t.type._context), null);
    case 22:
    case 23:
      return (Fa(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Bl = !1,
  ye = !1,
  qm = typeof WeakSet == 'function' ? WeakSet : Set,
  _ = null;
function Wn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        J(e, t, r);
      }
    else n.current = null;
}
function So(e, t, n) {
  try {
    n();
  } catch (r) {
    J(e, t, r);
  }
}
var Zu = !1;
function Gm(e, t) {
  if (((lo = mi), (e = Af()), da(e))) {
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
          var s = 0,
            o = -1,
            a = -1,
            u = 0,
            m = 0,
            p = e,
            d = null;
          t: for (;;) {
            for (
              var x;
              p !== n || (l !== 0 && p.nodeType !== 3) || (o = s + l),
                p !== i || (r !== 0 && p.nodeType !== 3) || (a = s + r),
                p.nodeType === 3 && (s += p.nodeValue.length),
                (x = p.firstChild) !== null;

            )
              ((d = p), (p = x));
            for (;;) {
              if (p === e) break t;
              if (
                (d === n && ++u === l && (o = s),
                d === i && ++m === r && (a = s),
                (x = p.nextSibling) !== null)
              )
                break;
              ((p = d), (d = p.parentNode));
            }
            p = x;
          }
          n = o === -1 || a === -1 ? null : { start: o, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (io = { focusedElem: e, selectionRange: n }, mi = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (_ = e));
    else
      for (; _ !== null; ) {
        t = _;
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
                  var g = w.memoizedProps,
                    C = w.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : be(t.type, g),
                      C
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
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
                throw Error(N(163));
            }
        } catch (k) {
          J(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (_ = e));
          break;
        }
        _ = t.return;
      }
  return ((w = Zu), (Zu = !1), w);
}
function Br(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        ((l.destroy = void 0), i !== void 0 && So(t, n, i));
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ki(e, t) {
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
function Co(e) {
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
function Dd(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Dd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ot], delete t[nl], delete t[ao], delete t[Lm], delete t[Om])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function zd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ju(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || zd(e.return)) return null;
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
function Eo(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = gi)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Eo(e, t, n), e = e.sibling; e !== null; )
      (Eo(e, t, n), (e = e.sibling));
}
function Po(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Po(e, t, n), e = e.sibling; e !== null; )
      (Po(e, t, n), (e = e.sibling));
}
var ue = null,
  Ye = !1;
function jt(e, t, n) {
  for (n = n.child; n !== null; ) ($d(e, t, n), (n = n.sibling));
}
function $d(e, t, n) {
  if (at && typeof at.onCommitFiberUnmount == 'function')
    try {
      at.onCommitFiberUnmount($i, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ye || Wn(n, t);
    case 6:
      var r = ue,
        l = Ye;
      ((ue = null),
        jt(e, t, n),
        (ue = r),
        (Ye = l),
        ue !== null &&
          (Ye
            ? ((e = ue),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ue.removeChild(n.stateNode)));
      break;
    case 18:
      ue !== null &&
        (Ye
          ? ((e = ue),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ss(e.parentNode, n)
              : e.nodeType === 1 && Ss(e, n),
            Xr(e))
          : Ss(ue, n.stateNode));
      break;
    case 4:
      ((r = ue),
        (l = Ye),
        (ue = n.stateNode.containerInfo),
        (Ye = !0),
        jt(e, t, n),
        (ue = r),
        (Ye = l));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ye &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            s = i.destroy;
          ((i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && So(n, t, s),
            (l = l.next));
        } while (l !== r);
      }
      jt(e, t, n);
      break;
    case 1:
      if (
        !ye &&
        (Wn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (o) {
          J(n, t, o);
        }
      jt(e, t, n);
      break;
    case 21:
      jt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ye = (r = ye) || n.memoizedState !== null), jt(e, t, n), (ye = r))
        : jt(e, t, n);
      break;
    default:
      jt(e, t, n);
  }
}
function ec(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new qm()),
      t.forEach(function (r) {
        var l = ly.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      }));
  }
}
function Ke(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          s = t,
          o = s;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              ((ue = o.stateNode), (Ye = !1));
              break e;
            case 3:
              ((ue = o.stateNode.containerInfo), (Ye = !0));
              break e;
            case 4:
              ((ue = o.stateNode.containerInfo), (Ye = !0));
              break e;
          }
          o = o.return;
        }
        if (ue === null) throw Error(N(160));
        ($d(i, s, l), (ue = null), (Ye = !1));
        var a = l.alternate;
        (a !== null && (a.return = null), (l.return = null));
      } catch (u) {
        J(l, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Ud(t, e), (t = t.sibling));
}
function Ud(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ke(t, e), nt(e), r & 4)) {
        try {
          (Br(3, e, e.return), Ki(3, e));
        } catch (g) {
          J(e, e.return, g);
        }
        try {
          Br(5, e, e.return);
        } catch (g) {
          J(e, e.return, g);
        }
      }
      break;
    case 1:
      (Ke(t, e), nt(e), r & 512 && n !== null && Wn(n, n.return));
      break;
    case 5:
      if (
        (Ke(t, e),
        nt(e),
        r & 512 && n !== null && Wn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          br(l, '');
        } catch (g) {
          J(e, e.return, g);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          o = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            (o === 'input' && i.type === 'radio' && i.name != null && of(l, i),
              qs(o, s));
            var u = qs(o, i);
            for (s = 0; s < a.length; s += 2) {
              var m = a[s],
                p = a[s + 1];
              m === 'style'
                ? df(l, p)
                : m === 'dangerouslySetInnerHTML'
                  ? cf(l, p)
                  : m === 'children'
                    ? br(l, p)
                    : Jo(l, m, p, u);
            }
            switch (o) {
              case 'input':
                Bs(l, i);
                break;
              case 'textarea':
                af(l, i);
                break;
              case 'select':
                var d = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var x = i.value;
                x != null
                  ? Kn(l, !!i.multiple, x, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Kn(l, !!i.multiple, i.defaultValue, !0)
                      : Kn(l, !!i.multiple, i.multiple ? [] : '', !1));
            }
            l[nl] = i;
          } catch (g) {
            J(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Ke(t, e), nt(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        ((l = e.stateNode), (i = e.memoizedProps));
        try {
          l.nodeValue = i;
        } catch (g) {
          J(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Ke(t, e), nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Xr(t.containerInfo);
        } catch (g) {
          J(e, e.return, g);
        }
      break;
    case 4:
      (Ke(t, e), nt(e));
      break;
    case 13:
      (Ke(t, e),
        nt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Oa = ne())),
        r & 4 && ec(e));
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ye = (u = ye) || m), Ke(t, e), (ye = u)) : Ke(t, e),
        nt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !m && e.mode & 1)
        )
          for (_ = e, m = e.child; m !== null; ) {
            for (p = _ = m; _ !== null; ) {
              switch (((d = _), (x = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Br(4, d, d.return);
                  break;
                case 1:
                  Wn(d, d.return);
                  var w = d.stateNode;
                  if (typeof w.componentWillUnmount == 'function') {
                    ((r = d), (n = d.return));
                    try {
                      ((t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount());
                    } catch (g) {
                      J(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Wn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    nc(p);
                    continue;
                  }
              }
              x !== null ? ((x.return = d), (_ = x)) : nc(p);
            }
            m = m.sibling;
          }
        e: for (m = null, p = e; ; ) {
          if (p.tag === 5) {
            if (m === null) {
              m = p;
              try {
                ((l = p.stateNode),
                  u
                    ? ((i = l.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((o = p.stateNode),
                      (a = p.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty('display')
                          ? a.display
                          : null),
                      (o.style.display = ff('display', s))));
              } catch (g) {
                J(e, e.return, g);
              }
            }
          } else if (p.tag === 6) {
            if (m === null)
              try {
                p.stateNode.nodeValue = u ? '' : p.memoizedProps;
              } catch (g) {
                J(e, e.return, g);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            ((p.child.return = p), (p = p.child));
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            (m === p && (m = null), (p = p.return));
          }
          (m === p && (m = null),
            (p.sibling.return = p.return),
            (p = p.sibling));
        }
      }
      break;
    case 19:
      (Ke(t, e), nt(e), r & 4 && ec(e));
      break;
    case 21:
      break;
    default:
      (Ke(t, e), nt(e));
  }
}
function nt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (zd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (br(l, ''), (r.flags &= -33));
          var i = Ju(e);
          Po(e, i, l);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            o = Ju(e);
          Eo(e, o, s);
          break;
        default:
          throw Error(N(161));
      }
    } catch (a) {
      J(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ym(e, t, n) {
  ((_ = e), Ad(e));
}
function Ad(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _,
      i = l.child;
    if (l.tag === 22 && r) {
      var s = l.memoizedState !== null || Bl;
      if (!s) {
        var o = l.alternate,
          a = (o !== null && o.memoizedState !== null) || ye;
        o = Bl;
        var u = ye;
        if (((Bl = s), (ye = a) && !u))
          for (_ = l; _ !== null; )
            ((s = _),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? rc(l)
                : a !== null
                  ? ((a.return = s), (_ = a))
                  : rc(l));
        for (; i !== null; ) ((_ = i), Ad(i), (i = i.sibling));
        ((_ = l), (Bl = o), (ye = u));
      }
      tc(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (_ = i)) : tc(e);
  }
}
function tc(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ye || Ki(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ye)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : be(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Uu(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Uu(t, s, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
                var a = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && n.focus();
                    break;
                  case 'img':
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
                var u = t.alternate;
                if (u !== null) {
                  var m = u.memoizedState;
                  if (m !== null) {
                    var p = m.dehydrated;
                    p !== null && Xr(p);
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
              throw Error(N(163));
          }
        ye || (t.flags & 512 && Co(t));
      } catch (d) {
        J(t, t.return, d);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (_ = n));
      break;
    }
    _ = t.return;
  }
}
function nc(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (_ = n));
      break;
    }
    _ = t.return;
  }
}
function rc(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ki(4, t);
          } catch (a) {
            J(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              J(t, l, a);
            }
          }
          var i = t.return;
          try {
            Co(t);
          } catch (a) {
            J(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Co(t);
          } catch (a) {
            J(t, s, a);
          }
      }
    } catch (a) {
      J(t, t.return, a);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      ((o.return = t.return), (_ = o));
      break;
    }
    _ = t.return;
  }
}
var Xm = Math.ceil,
  _i = Pt.ReactCurrentDispatcher,
  Ta = Pt.ReactCurrentOwner,
  Be = Pt.ReactCurrentBatchConfig,
  A = 0,
  ae = null,
  re = null,
  fe = 0,
  Le = 0,
  Vn = tn(0),
  ie = 0,
  al = null,
  Nn = 0,
  bi = 0,
  La = 0,
  Wr = null,
  Ne = null,
  Oa = 0,
  yr = 1 / 0,
  ht = null,
  Ti = !1,
  No = null,
  qt = null,
  Wl = !1,
  Qt = null,
  Li = 0,
  Vr = 0,
  jo = null,
  ri = -1,
  li = 0;
function ke() {
  return A & 6 ? ne() : ri !== -1 ? ri : (ri = ne());
}
function Gt(e) {
  return e.mode & 1
    ? A & 2 && fe !== 0
      ? fe & -fe
      : Fm.transition !== null
        ? (li === 0 && (li = Ef()), li)
        : ((e = Q),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Lf(e.type))),
          e)
    : 1;
}
function Je(e, t, n, r) {
  if (50 < Vr) throw ((Vr = 0), (jo = null), Error(N(185)));
  (gl(e, n, r),
    (!(A & 2) || e !== ae) &&
      (e === ae && (!(A & 2) && (bi |= n), ie === 4 && Ot(e, fe)),
      Te(e, r),
      n === 1 && A === 0 && !(t.mode & 1) && ((yr = ne() + 500), Bi && nn())));
}
function Te(e, t) {
  var n = e.callbackNode;
  Fp(e, t);
  var r = pi(e, e === ae ? fe : 0);
  if (r === 0)
    (n !== null && du(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && du(n), t === 1))
      (e.tag === 0 ? Mm(lc.bind(null, e)) : Yf(lc.bind(null, e)),
        _m(function () {
          !(A & 6) && nn();
        }),
        (n = null));
    else {
      switch (Pf(r)) {
        case 1:
          n = la;
          break;
        case 4:
          n = Sf;
          break;
        case 16:
          n = hi;
          break;
        case 536870912:
          n = Cf;
          break;
        default:
          n = hi;
      }
      n = qd(n, Hd.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Hd(e, t) {
  if (((ri = -1), (li = 0), A & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (Xn() && e.callbackNode !== n) return null;
  var r = pi(e, e === ae ? fe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Oi(e, r);
  else {
    t = r;
    var l = A;
    A |= 2;
    var i = Bd();
    (ae !== e || fe !== t) && ((ht = null), (yr = ne() + 500), kn(e, t));
    do
      try {
        ey();
        break;
      } catch (o) {
        Qd(e, o);
      }
    while (!0);
    (va(),
      (_i.current = i),
      (A = l),
      re !== null ? (t = 0) : ((ae = null), (fe = 0), (t = ie)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Js(e)), l !== 0 && ((r = l), (t = Ro(e, l)))), t === 1)
    )
      throw ((n = al), kn(e, 0), Ot(e, r), Te(e, ne()), n);
    if (t === 6) Ot(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Zm(l) &&
          ((t = Oi(e, r)),
          t === 2 && ((i = Js(e)), i !== 0 && ((r = i), (t = Ro(e, i)))),
          t === 1))
      )
        throw ((n = al), kn(e, 0), Ot(e, r), Te(e, ne()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          on(e, Ne, ht);
          break;
        case 3:
          if (
            (Ot(e, r), (r & 130023424) === r && ((t = Oa + 500 - ne()), 10 < t))
          ) {
            if (pi(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              (ke(), (e.pingedLanes |= e.suspendedLanes & l));
              break;
            }
            e.timeoutHandle = oo(on.bind(null, e, Ne, ht), t);
            break;
          }
          on(e, Ne, ht);
          break;
        case 4:
          if ((Ot(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var s = 31 - Ze(r);
            ((i = 1 << s), (s = t[s]), s > l && (l = s), (r &= ~i));
          }
          if (
            ((r = l),
            (r = ne() - r),
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
                          : 1960 * Xm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = oo(on.bind(null, e, Ne, ht), r);
            break;
          }
          on(e, Ne, ht);
          break;
        case 5:
          on(e, Ne, ht);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return (Te(e, ne()), e.callbackNode === n ? Hd.bind(null, e) : null);
}
function Ro(e, t) {
  var n = Wr;
  return (
    e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256),
    (e = Oi(e, t)),
    e !== 2 && ((t = Ne), (Ne = n), t !== null && _o(t)),
    e
  );
}
function _o(e) {
  Ne === null ? (Ne = e) : Ne.push.apply(Ne, e);
}
function Zm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!et(i(), l)) return !1;
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
function Ot(e, t) {
  for (
    t &= ~La,
      t &= ~bi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ze(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function lc(e) {
  if (A & 6) throw Error(N(327));
  Xn();
  var t = pi(e, 0);
  if (!(t & 1)) return (Te(e, ne()), null);
  var n = Oi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Js(e);
    r !== 0 && ((t = r), (n = Ro(e, r)));
  }
  if (n === 1) throw ((n = al), kn(e, 0), Ot(e, t), Te(e, ne()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    on(e, Ne, ht),
    Te(e, ne()),
    null
  );
}
function Ma(e, t) {
  var n = A;
  A |= 1;
  try {
    return e(t);
  } finally {
    ((A = n), A === 0 && ((yr = ne() + 500), Bi && nn()));
  }
}
function jn(e) {
  Qt !== null && Qt.tag === 0 && !(A & 6) && Xn();
  var t = A;
  A |= 1;
  var n = Be.transition,
    r = Q;
  try {
    if (((Be.transition = null), (Q = 1), e)) return e();
  } finally {
    ((Q = r), (Be.transition = n), (A = t), !(A & 6) && nn());
  }
}
function Fa() {
  ((Le = Vn.current), V(Vn));
}
function kn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Rm(n)), re !== null))
    for (n = re.return; n !== null; ) {
      var r = n;
      switch ((pa(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && xi());
          break;
        case 3:
          (pr(), V(Re), V(ve), Ca());
          break;
        case 5:
          Sa(r);
          break;
        case 4:
          pr();
          break;
        case 13:
          V(b);
          break;
        case 19:
          V(b);
          break;
        case 10:
          ga(r.type._context);
          break;
        case 22:
        case 23:
          Fa();
      }
      n = n.return;
    }
  if (
    ((ae = e),
    (re = e = Yt(e.current, null)),
    (fe = Le = t),
    (ie = 0),
    (al = null),
    (La = bi = Nn = 0),
    (Ne = Wr = null),
    un !== null)
  ) {
    for (t = 0; t < un.length; t++)
      if (((n = un[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          ((i.next = l), (r.next = s));
        }
        n.pending = r;
      }
    un = null;
  }
  return e;
}
function Qd(e, t) {
  do {
    var n = re;
    try {
      if ((va(), (ei.current = Ri), ji)) {
        for (var r = q.memoizedState; r !== null; ) {
          var l = r.queue;
          (l !== null && (l.pending = null), (r = r.next));
        }
        ji = !1;
      }
      if (
        ((Pn = 0),
        (oe = le = q = null),
        (Qr = !1),
        (il = 0),
        (Ta.current = null),
        n === null || n.return === null)
      ) {
        ((ie = 1), (al = t), (re = null));
        break;
      }
      e: {
        var i = e,
          s = n.return,
          o = n,
          a = t;
        if (
          ((t = fe),
          (o.flags |= 32768),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var u = a,
            m = o,
            p = m.tag;
          if (!(m.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var d = m.alternate;
            d
              ? ((m.updateQueue = d.updateQueue),
                (m.memoizedState = d.memoizedState),
                (m.lanes = d.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var x = Vu(s);
          if (x !== null) {
            ((x.flags &= -257),
              Ku(x, s, o, i, t),
              x.mode & 1 && Wu(i, u, t),
              (t = x),
              (a = u));
            var w = t.updateQueue;
            if (w === null) {
              var g = new Set();
              (g.add(a), (t.updateQueue = g));
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              (Wu(i, u, t), Ia());
              break e;
            }
            a = Error(N(426));
          }
        } else if (K && o.mode & 1) {
          var C = Vu(s);
          if (C !== null) {
            (!(C.flags & 65536) && (C.flags |= 256),
              Ku(C, s, o, i, t),
              ma(mr(a, o)));
            break e;
          }
        }
        ((i = a = mr(a, o)),
          ie !== 4 && (ie = 2),
          Wr === null ? (Wr = [i]) : Wr.push(i),
          (i = s));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var f = Pd(i, a, t);
              $u(i, f);
              break e;
            case 1:
              o = a;
              var c = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == 'function' ||
                  (h !== null &&
                    typeof h.componentDidCatch == 'function' &&
                    (qt === null || !qt.has(h))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var k = Nd(i, o, t);
                $u(i, k);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Vd(n);
    } catch (E) {
      ((t = E), re === n && n !== null && (re = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Bd() {
  var e = _i.current;
  return ((_i.current = Ri), e === null ? Ri : e);
}
function Ia() {
  ((ie === 0 || ie === 3 || ie === 2) && (ie = 4),
    ae === null || (!(Nn & 268435455) && !(bi & 268435455)) || Ot(ae, fe));
}
function Oi(e, t) {
  var n = A;
  A |= 2;
  var r = Bd();
  (ae !== e || fe !== t) && ((ht = null), kn(e, t));
  do
    try {
      Jm();
      break;
    } catch (l) {
      Qd(e, l);
    }
  while (!0);
  if ((va(), (A = n), (_i.current = r), re !== null)) throw Error(N(261));
  return ((ae = null), (fe = 0), ie);
}
function Jm() {
  for (; re !== null; ) Wd(re);
}
function ey() {
  for (; re !== null && !Pp(); ) Wd(re);
}
function Wd(e) {
  var t = bd(e.alternate, e, Le);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Vd(e) : (re = t),
    (Ta.current = null));
}
function Vd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = bm(n, t)), n !== null)) {
        ((n.flags &= 32767), (re = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ie = 6), (re = null));
        return;
      }
    } else if (((n = Km(n, t, Le)), n !== null)) {
      re = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      re = t;
      return;
    }
    re = t = e;
  } while (t !== null);
  ie === 0 && (ie = 5);
}
function on(e, t, n) {
  var r = Q,
    l = Be.transition;
  try {
    ((Be.transition = null), (Q = 1), ty(e, t, n, r));
  } finally {
    ((Be.transition = l), (Q = r));
  }
  return null;
}
function ty(e, t, n, r) {
  do Xn();
  while (Qt !== null);
  if (A & 6) throw Error(N(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (Ip(e, i),
    e === ae && ((re = ae = null), (fe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Wl ||
      ((Wl = !0),
      qd(hi, function () {
        return (Xn(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = Be.transition), (Be.transition = null));
    var s = Q;
    Q = 1;
    var o = A;
    ((A |= 4),
      (Ta.current = null),
      Gm(e, n),
      Ud(n, e),
      km(io),
      (mi = !!lo),
      (io = lo = null),
      (e.current = n),
      Ym(n),
      Np(),
      (A = o),
      (Q = s),
      (Be.transition = i));
  } else e.current = n;
  if (
    (Wl && ((Wl = !1), (Qt = e), (Li = l)),
    (i = e.pendingLanes),
    i === 0 && (qt = null),
    _p(n.stateNode),
    Te(e, ne()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
  if (Ti) throw ((Ti = !1), (e = No), (No = null), e);
  return (
    Li & 1 && e.tag !== 0 && Xn(),
    (i = e.pendingLanes),
    i & 1 ? (e === jo ? Vr++ : ((Vr = 0), (jo = e))) : (Vr = 0),
    nn(),
    null
  );
}
function Xn() {
  if (Qt !== null) {
    var e = Pf(Li),
      t = Be.transition,
      n = Q;
    try {
      if (((Be.transition = null), (Q = 16 > e ? 16 : e), Qt === null))
        var r = !1;
      else {
        if (((e = Qt), (Qt = null), (Li = 0), A & 6)) throw Error(N(331));
        var l = A;
        for (A |= 4, _ = e.current; _ !== null; ) {
          var i = _,
            s = i.child;
          if (_.flags & 16) {
            var o = i.deletions;
            if (o !== null) {
              for (var a = 0; a < o.length; a++) {
                var u = o[a];
                for (_ = u; _ !== null; ) {
                  var m = _;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Br(8, m, i);
                  }
                  var p = m.child;
                  if (p !== null) ((p.return = m), (_ = p));
                  else
                    for (; _ !== null; ) {
                      m = _;
                      var d = m.sibling,
                        x = m.return;
                      if ((Dd(m), m === u)) {
                        _ = null;
                        break;
                      }
                      if (d !== null) {
                        ((d.return = x), (_ = d));
                        break;
                      }
                      _ = x;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var g = w.child;
                if (g !== null) {
                  w.child = null;
                  do {
                    var C = g.sibling;
                    ((g.sibling = null), (g = C));
                  } while (g !== null);
                }
              }
              _ = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) ((s.return = i), (_ = s));
          else
            e: for (; _ !== null; ) {
              if (((i = _), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Br(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                ((f.return = i.return), (_ = f));
                break e;
              }
              _ = i.return;
            }
        }
        var c = e.current;
        for (_ = c; _ !== null; ) {
          s = _;
          var h = s.child;
          if (s.subtreeFlags & 2064 && h !== null) ((h.return = s), (_ = h));
          else
            e: for (s = c; _ !== null; ) {
              if (((o = _), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ki(9, o);
                  }
                } catch (E) {
                  J(o, o.return, E);
                }
              if (o === s) {
                _ = null;
                break e;
              }
              var k = o.sibling;
              if (k !== null) {
                ((k.return = o.return), (_ = k));
                break e;
              }
              _ = o.return;
            }
        }
        if (
          ((A = l), nn(), at && typeof at.onPostCommitFiberRoot == 'function')
        )
          try {
            at.onPostCommitFiberRoot($i, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((Q = n), (Be.transition = t));
    }
  }
  return !1;
}
function ic(e, t, n) {
  ((t = mr(n, t)),
    (t = Pd(e, t, 1)),
    (e = bt(e, t, 1)),
    (t = ke()),
    e !== null && (gl(e, 1, t), Te(e, t)));
}
function J(e, t, n) {
  if (e.tag === 3) ic(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ic(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (qt === null || !qt.has(r)))
        ) {
          ((e = mr(n, e)),
            (e = Nd(t, e, 1)),
            (t = bt(t, e, 1)),
            (e = ke()),
            t !== null && (gl(t, 1, e), Te(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function ny(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = ke()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ae === e &&
      (fe & n) === n &&
      (ie === 4 || (ie === 3 && (fe & 130023424) === fe && 500 > ne() - Oa)
        ? kn(e, 0)
        : (La |= n)),
    Te(e, t));
}
function Kd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Fl), (Fl <<= 1), !(Fl & 130023424) && (Fl = 4194304))
      : (t = 1));
  var n = ke();
  ((e = St(e, t)), e !== null && (gl(e, t, n), Te(e, n)));
}
function ry(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Kd(e, n));
}
function ly(e, t) {
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
      throw Error(N(314));
  }
  (r !== null && r.delete(t), Kd(e, n));
}
var bd;
bd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Re.current) je = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((je = !1), Vm(e, t, n));
      je = !!(e.flags & 131072);
    }
  else ((je = !1), K && t.flags & 1048576 && Xf(t, Si, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (ni(e, t), (e = t.pendingProps));
      var l = fr(t, ve.current);
      (Yn(t, n), (l = Pa(null, t, r, e, l, n)));
      var i = Na();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            _e(r) ? ((i = !0), wi(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            wa(t),
            (l.updater = Vi),
            (t.stateNode = l),
            (l._reactInternals = t),
            mo(t, r, e, n),
            (t = go(null, t, r, !0, i, n)))
          : ((t.tag = 0), K && i && ha(t), we(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ni(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = sy(r)),
          (e = be(r, e)),
          l)
        ) {
          case 0:
            t = vo(null, t, r, e, n);
            break e;
          case 1:
            t = Gu(null, t, r, e, n);
            break e;
          case 11:
            t = bu(null, t, r, e, n);
            break e;
          case 14:
            t = qu(null, t, r, be(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : be(r, l)),
        vo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : be(r, l)),
        Gu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Td(t), e === null)) throw Error(N(387));
        ((r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          rd(e, t),
          Pi(t, r, null, n));
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ((l = mr(Error(N(423)), t)), (t = Yu(e, t, r, n, l)));
            break e;
          } else if (r !== l) {
            ((l = mr(Error(N(424)), t)), (t = Yu(e, t, r, n, l)));
            break e;
          } else
            for (
              Oe = Kt(t.stateNode.containerInfo.firstChild),
                Me = t,
                K = !0,
                Xe = null,
                n = td(t, null, r, n),
                t.child = n;
              n;

            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((dr(), r === l)) {
            t = Ct(e, t, n);
            break e;
          }
          we(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ld(t),
        e === null && fo(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = l.children),
        so(r, l) ? (s = null) : i !== null && so(r, i) && (t.flags |= 32),
        _d(e, t),
        we(e, t, s, n),
        t.child
      );
    case 6:
      return (e === null && fo(t), null);
    case 13:
      return Ld(e, t, n);
    case 4:
      return (
        ka(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = hr(t, null, r, n)) : we(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : be(r, l)),
        bu(e, t, r, l, n)
      );
    case 7:
      return (we(e, t, t.pendingProps, n), t.child);
    case 8:
      return (we(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (we(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (s = l.value),
          B(Ci, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (et(i.value, s)) {
            if (i.children === l.children && !Re.current) {
              t = Ct(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var o = i.dependencies;
              if (o !== null) {
                s = i.child;
                for (var a = o.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      ((a = gt(-1, n & -n)), (a.tag = 2));
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var m = u.pending;
                        (m === null
                          ? (a.next = a)
                          : ((a.next = m.next), (m.next = a)),
                          (u.pending = a));
                      }
                    }
                    ((i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      ho(i.return, n, t),
                      (o.lanes |= n));
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(N(341));
                ((s.lanes |= n),
                  (o = s.alternate),
                  o !== null && (o.lanes |= n),
                  ho(s, n, t),
                  (s = i.sibling));
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    ((i.return = s.return), (s = i));
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        (we(e, t, l.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Yn(t, n),
        (l = We(l)),
        (r = r(l)),
        (t.flags |= 1),
        we(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = be(r, t.pendingProps)),
        (l = be(r.type, l)),
        qu(e, t, r, l, n)
      );
    case 15:
      return jd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : be(r, l)),
        ni(e, t),
        (t.tag = 1),
        _e(r) ? ((e = !0), wi(t)) : (e = !1),
        Yn(t, n),
        Ed(t, r, l),
        mo(t, r, l, n),
        go(null, t, r, !0, e, n)
      );
    case 19:
      return Od(e, t, n);
    case 22:
      return Rd(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function qd(e, t) {
  return kf(e, t);
}
function iy(e, t, n, r) {
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
function Qe(e, t, n, r) {
  return new iy(e, t, n, r);
}
function Da(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function sy(e) {
  if (typeof e == 'function') return Da(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ta)) return 11;
    if (e === na) return 14;
  }
  return 2;
}
function Yt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Qe(e.tag, t, e.key, e.mode)),
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
function ii(e, t, n, r, l, i) {
  var s = 2;
  if (((r = e), typeof e == 'function')) Da(e) && (s = 1);
  else if (typeof e == 'string') s = 5;
  else
    e: switch (e) {
      case In:
        return Sn(n.children, l, i, t);
      case ea:
        ((s = 8), (l |= 8));
        break;
      case $s:
        return (
          (e = Qe(12, n, t, l | 2)),
          (e.elementType = $s),
          (e.lanes = i),
          e
        );
      case Us:
        return ((e = Qe(13, n, t, l)), (e.elementType = Us), (e.lanes = i), e);
      case As:
        return ((e = Qe(19, n, t, l)), (e.elementType = As), (e.lanes = i), e);
      case rf:
        return qi(n, l, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case tf:
              s = 10;
              break e;
            case nf:
              s = 9;
              break e;
            case ta:
              s = 11;
              break e;
            case na:
              s = 14;
              break e;
            case _t:
              ((s = 16), (r = null));
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Qe(s, n, t, l)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = i),
    t
  );
}
function Sn(e, t, n, r) {
  return ((e = Qe(7, e, r, t)), (e.lanes = n), e);
}
function qi(e, t, n, r) {
  return (
    (e = Qe(22, e, r, t)),
    (e.elementType = rf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ts(e, t, n) {
  return ((e = Qe(6, e, null, t)), (e.lanes = n), e);
}
function Ls(e, t, n) {
  return (
    (t = Qe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function oy(e, t, n, r, l) {
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
    (this.eventTimes = fs(0)),
    (this.expirationTimes = fs(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = fs(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null));
}
function za(e, t, n, r, l, i, s, o, a) {
  return (
    (e = new oy(e, t, n, o, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Qe(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    wa(i),
    e
  );
}
function ay(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Fn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Gd(e) {
  if (!e) return Jt;
  e = e._reactInternals;
  e: {
    if (Tn(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (_e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (_e(n)) return Gf(e, n, t);
  }
  return t;
}
function Yd(e, t, n, r, l, i, s, o, a) {
  return (
    (e = za(n, r, !0, e, l, i, s, o, a)),
    (e.context = Gd(null)),
    (n = e.current),
    (r = ke()),
    (l = Gt(n)),
    (i = gt(r, l)),
    (i.callback = t ?? null),
    bt(n, i, l),
    (e.current.lanes = l),
    gl(e, l, r),
    Te(e, r),
    e
  );
}
function Gi(e, t, n, r) {
  var l = t.current,
    i = ke(),
    s = Gt(l);
  return (
    (n = Gd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = gt(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = bt(l, t, s)),
    e !== null && (Je(e, l, s, i), Jl(e, l, s)),
    s
  );
}
function Mi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function sc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function $a(e, t) {
  (sc(e, t), (e = e.alternate) && sc(e, t));
}
function uy() {
  return null;
}
var Xd =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ua(e) {
  this._internalRoot = e;
}
Yi.prototype.render = Ua.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  Gi(e, t, null, null);
};
Yi.prototype.unmount = Ua.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (jn(function () {
      Gi(null, e, null, null);
    }),
      (t[kt] = null));
  }
};
function Yi(e) {
  this._internalRoot = e;
}
Yi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Rf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Lt.length && t !== 0 && t < Lt[n].priority; n++);
    (Lt.splice(n, 0, e), n === 0 && Tf(e));
  }
};
function Aa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Xi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function oc() {}
function cy(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var u = Mi(s);
        i.call(u);
      };
    }
    var s = Yd(t, r, e, 0, null, !1, !1, '', oc);
    return (
      (e._reactRootContainer = s),
      (e[kt] = s.current),
      el(e.nodeType === 8 ? e.parentNode : e),
      jn(),
      s
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var o = r;
    r = function () {
      var u = Mi(a);
      o.call(u);
    };
  }
  var a = za(e, 0, !1, null, null, !1, !1, '', oc);
  return (
    (e._reactRootContainer = a),
    (e[kt] = a.current),
    el(e.nodeType === 8 ? e.parentNode : e),
    jn(function () {
      Gi(t, a, n, r);
    }),
    a
  );
}
function Zi(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof l == 'function') {
      var o = l;
      l = function () {
        var a = Mi(s);
        o.call(a);
      };
    }
    Gi(t, s, e, l);
  } else s = cy(n, t, e, l, r);
  return Mi(s);
}
Nf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Fr(t.pendingLanes);
        n !== 0 &&
          (ia(t, n | 1), Te(t, ne()), !(A & 6) && ((yr = ne() + 500), nn()));
      }
      break;
    case 13:
      (jn(function () {
        var r = St(e, 1);
        if (r !== null) {
          var l = ke();
          Je(r, e, 1, l);
        }
      }),
        $a(e, 1));
  }
};
sa = function (e) {
  if (e.tag === 13) {
    var t = St(e, 134217728);
    if (t !== null) {
      var n = ke();
      Je(t, e, 134217728, n);
    }
    $a(e, 134217728);
  }
};
jf = function (e) {
  if (e.tag === 13) {
    var t = Gt(e),
      n = St(e, t);
    if (n !== null) {
      var r = ke();
      Je(n, e, t, r);
    }
    $a(e, t);
  }
};
Rf = function () {
  return Q;
};
_f = function (e, t) {
  var n = Q;
  try {
    return ((Q = e), t());
  } finally {
    Q = n;
  }
};
Ys = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Bs(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
            var l = Qi(r);
            if (!l) throw Error(N(90));
            (sf(r), Bs(r, l));
          }
        }
      }
      break;
    case 'textarea':
      af(e, n);
      break;
    case 'select':
      ((t = n.value), t != null && Kn(e, !!n.multiple, t, !1));
  }
};
mf = Ma;
yf = jn;
var fy = { usingClientEntryPoint: !1, Events: [wl, Un, Qi, hf, pf, Ma] },
  _r = {
    findFiberByHostInstance: an,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  dy = {
    bundleType: _r.bundleType,
    version: _r.version,
    rendererPackageName: _r.rendererPackageName,
    rendererConfig: _r.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Pt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = xf(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: _r.findFiberByHostInstance || uy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Vl.isDisabled && Vl.supportsFiber)
    try {
      (($i = Vl.inject(dy)), (at = Vl));
    } catch {}
}
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fy;
Ie.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Aa(t)) throw Error(N(200));
  return ay(e, t, null, n);
};
Ie.createRoot = function (e, t) {
  if (!Aa(e)) throw Error(N(299));
  var n = !1,
    r = '',
    l = Xd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = za(e, 1, !1, null, null, n, !1, r, l)),
    (e[kt] = t.current),
    el(e.nodeType === 8 ? e.parentNode : e),
    new Ua(t)
  );
};
Ie.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(N(188))
      : ((e = Object.keys(e).join(',')), Error(N(268, e)));
  return ((e = xf(t)), (e = e === null ? null : e.stateNode), e);
};
Ie.flushSync = function (e) {
  return jn(e);
};
Ie.hydrate = function (e, t, n) {
  if (!Xi(t)) throw Error(N(200));
  return Zi(null, e, t, !0, n);
};
Ie.hydrateRoot = function (e, t, n) {
  if (!Aa(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = '',
    s = Xd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Yd(t, null, e, 1, n ?? null, l, !1, i, s)),
    (e[kt] = t.current),
    el(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l));
  return new Yi(t);
};
Ie.render = function (e, t, n) {
  if (!Xi(t)) throw Error(N(200));
  return Zi(null, e, t, !1, n);
};
Ie.unmountComponentAtNode = function (e) {
  if (!Xi(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (jn(function () {
        Zi(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[kt] = null));
        });
      }),
      !0)
    : !1;
};
Ie.unstable_batchedUpdates = Ma;
Ie.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Xi(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return Zi(e, t, n, !1, r);
};
Ie.version = '18.3.1-next-f1338f8080-20240426';
function Zd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zd);
    } catch (e) {
      console.error(e);
    }
}
(Zd(), (Xc.exports = Ie));
var hy = Xc.exports,
  ac = hy;
((Ds.createRoot = ac.createRoot), (Ds.hydrateRoot = ac.hydrateRoot));
/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var uc = 'popstate';
function py(e = {}) {
  function t(r, l) {
    let { pathname: i, search: s, hash: o } = r.location;
    return To(
      '',
      { pathname: i, search: s, hash: o },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default'
    );
  }
  function n(r, l) {
    return typeof l == 'string' ? l : ul(l);
  }
  return yy(t, n, null, e);
}
function G(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function ct(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function my() {
  return Math.random().toString(36).substring(2, 10);
}
function cc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function To(e, t, n = null, r) {
  return {
    pathname: typeof e == 'string' ? e : e.pathname,
    search: '',
    hash: '',
    ...(typeof t == 'string' ? wr(t) : t),
    state: n,
    key: (t && t.key) || r || my(),
  };
}
function ul({ pathname: e = '/', search: t = '', hash: n = '' }) {
  return (
    t && t !== '?' && (e += t.charAt(0) === '?' ? t : '?' + t),
    n && n !== '#' && (e += n.charAt(0) === '#' ? n : '#' + n),
    e
  );
}
function wr(e) {
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
function yy(e, t, n, r = {}) {
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    s = l.history,
    o = 'POP',
    a = null,
    u = m();
  u == null && ((u = 0), s.replaceState({ ...s.state, idx: u }, ''));
  function m() {
    return (s.state || { idx: null }).idx;
  }
  function p() {
    o = 'POP';
    let C = m(),
      f = C == null ? null : C - u;
    ((u = C), a && a({ action: o, location: g.location, delta: f }));
  }
  function d(C, f) {
    o = 'PUSH';
    let c = To(g.location, C, f);
    u = m() + 1;
    let h = cc(c, u),
      k = g.createHref(c);
    try {
      s.pushState(h, '', k);
    } catch (E) {
      if (E instanceof DOMException && E.name === 'DataCloneError') throw E;
      l.location.assign(k);
    }
    i && a && a({ action: o, location: g.location, delta: 1 });
  }
  function x(C, f) {
    o = 'REPLACE';
    let c = To(g.location, C, f);
    u = m();
    let h = cc(c, u),
      k = g.createHref(c);
    (s.replaceState(h, '', k),
      i && a && a({ action: o, location: g.location, delta: 0 }));
  }
  function w(C) {
    return vy(C);
  }
  let g = {
    get action() {
      return o;
    },
    get location() {
      return e(l, s);
    },
    listen(C) {
      if (a) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(uc, p),
        (a = C),
        () => {
          (l.removeEventListener(uc, p), (a = null));
        }
      );
    },
    createHref(C) {
      return t(l, C);
    },
    createURL: w,
    encodeLocation(C) {
      let f = w(C);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: d,
    replace: x,
    go(C) {
      return s.go(C);
    },
  };
  return g;
}
function vy(e, t = !1) {
  let n = 'http://localhost';
  (typeof window < 'u' &&
    (n =
      window.location.origin !== 'null'
        ? window.location.origin
        : window.location.href),
    G(n, 'No window.location.(origin|href) available to create URL'));
  let r = typeof e == 'string' ? e : ul(e);
  return (
    (r = r.replace(/ $/, '%20')),
    !t && r.startsWith('//') && (r = n + r),
    new URL(r, n)
  );
}
function Jd(e, t, n = '/') {
  return gy(e, t, n, !1);
}
function gy(e, t, n, r) {
  let l = typeof t == 'string' ? wr(t) : t,
    i = Et(l.pathname || '/', n);
  if (i == null) return null;
  let s = eh(e);
  xy(s);
  let o = null;
  for (let a = 0; o == null && a < s.length; ++a) {
    let u = Ty(i);
    o = Ry(s[a], u, r);
  }
  return o;
}
function eh(e, t = [], n = [], r = '') {
  let l = (i, s, o) => {
    let a = {
      relativePath: o === void 0 ? i.path || '' : o,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    a.relativePath.startsWith('/') &&
      (G(
        a.relativePath.startsWith(r),
        `Absolute route path "${a.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = xt([r, a.relativePath]),
      m = n.concat(a);
    (i.children &&
      i.children.length > 0 &&
      (G(
        i.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${u}".`
      ),
      eh(i.children, t, m, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: Ny(u, i.index), routesMeta: m }));
  };
  return (
    e.forEach((i, s) => {
      var o;
      if (i.path === '' || !((o = i.path) != null && o.includes('?'))) l(i, s);
      else for (let a of th(i.path)) l(i, s, a);
    }),
    t
  );
}
function th(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (r.length === 0) return l ? [i, ''] : [i];
  let s = th(r.join('/')),
    o = [];
  return (
    o.push(...s.map((a) => (a === '' ? i : [i, a].join('/')))),
    l && o.push(...s),
    o.map((a) => (e.startsWith('/') && a === '' ? '/' : a))
  );
}
function xy(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : jy(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
var wy = /^:[\w-]+$/,
  ky = 3,
  Sy = 2,
  Cy = 1,
  Ey = 10,
  Py = -2,
  fc = (e) => e === '*';
function Ny(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(fc) && (r += Py),
    t && (r += Sy),
    n
      .filter((l) => !fc(l))
      .reduce((l, i) => l + (wy.test(i) ? ky : i === '' ? Cy : Ey), r)
  );
}
function jy(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ry(e, t, n = !1) {
  let { routesMeta: r } = e,
    l = {},
    i = '/',
    s = [];
  for (let o = 0; o < r.length; ++o) {
    let a = r[o],
      u = o === r.length - 1,
      m = i === '/' ? t : t.slice(i.length) || '/',
      p = Fi(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        m
      ),
      d = a.route;
    if (
      (!p &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (p = Fi(
          { path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 },
          m
        )),
      !p)
    )
      return null;
    (Object.assign(l, p.params),
      s.push({
        params: l,
        pathname: xt([i, p.pathname]),
        pathnameBase: Fy(xt([i, p.pathnameBase])),
        route: d,
      }),
      p.pathnameBase !== '/' && (i = xt([i, p.pathnameBase])));
  }
  return s;
}
function Fi(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = _y(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    s = i.replace(/(.)\/+$/, '$1'),
    o = l.slice(1);
  return {
    params: r.reduce((u, { paramName: m, isOptional: p }, d) => {
      if (m === '*') {
        let w = o[d] || '';
        s = i.slice(0, i.length - w.length).replace(/(.)\/+$/, '$1');
      }
      const x = o[d];
      return (
        p && !x ? (u[m] = void 0) : (u[m] = (x || '').replace(/%2F/g, '/')),
        u
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function _y(e, t = !1, n = !0) {
  ct(
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
          (s, o, a) => (
            r.push({ paramName: o, isOptional: a != null }),
            a ? '/?([^\\/]+)?' : '/([^\\/]+)'
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
function Ty(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      ct(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
      ),
      e
    );
  }
}
function Et(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function Ly(e, t = '/') {
  let {
    pathname: n,
    search: r = '',
    hash: l = '',
  } = typeof e == 'string' ? wr(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : Oy(n, t)) : t,
    search: Iy(r),
    hash: Dy(l),
  };
}
function Oy(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((l) => {
      l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function Os(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function My(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function nh(e) {
  let t = My(e);
  return t.map((n, r) => (r === t.length - 1 ? n.pathname : n.pathnameBase));
}
function rh(e, t, n, r = !1) {
  let l;
  typeof e == 'string'
    ? (l = wr(e))
    : ((l = { ...e }),
      G(
        !l.pathname || !l.pathname.includes('?'),
        Os('?', 'pathname', 'search', l)
      ),
      G(
        !l.pathname || !l.pathname.includes('#'),
        Os('#', 'pathname', 'hash', l)
      ),
      G(!l.search || !l.search.includes('#'), Os('#', 'search', 'hash', l)));
  let i = e === '' || l.pathname === '',
    s = i ? '/' : l.pathname,
    o;
  if (s == null) o = n;
  else {
    let p = t.length - 1;
    if (!r && s.startsWith('..')) {
      let d = s.split('/');
      for (; d[0] === '..'; ) (d.shift(), (p -= 1));
      l.pathname = d.join('/');
    }
    o = p >= 0 ? t[p] : '/';
  }
  let a = Ly(l, o),
    u = s && s !== '/' && s.endsWith('/'),
    m = (i || s === '.') && n.endsWith('/');
  return (!a.pathname.endsWith('/') && (u || m) && (a.pathname += '/'), a);
}
var xt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Fy = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Iy = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Dy = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function zy(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
var lh = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(lh);
var $y = ['GET', ...lh];
new Set($y);
var kr = S.createContext(null);
kr.displayName = 'DataRouter';
var Ji = S.createContext(null);
Ji.displayName = 'DataRouterState';
S.createContext(!1);
var ih = S.createContext({ isTransitioning: !1 });
ih.displayName = 'ViewTransition';
var Uy = S.createContext(new Map());
Uy.displayName = 'Fetchers';
var Ay = S.createContext(null);
Ay.displayName = 'Await';
var ft = S.createContext(null);
ft.displayName = 'Navigation';
var Sl = S.createContext(null);
Sl.displayName = 'Location';
var Nt = S.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Nt.displayName = 'Route';
var Ha = S.createContext(null);
Ha.displayName = 'RouteError';
function Hy(e, { relative: t } = {}) {
  G(Cl(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: n, navigator: r } = S.useContext(ft),
    { hash: l, pathname: i, search: s } = El(e, { relative: t }),
    o = i;
  return (
    n !== '/' && (o = i === '/' ? n : xt([n, i])),
    r.createHref({ pathname: o, search: s, hash: l })
  );
}
function Cl() {
  return S.useContext(Sl) != null;
}
function Ln() {
  return (
    G(
      Cl(),
      'useLocation() may be used only in the context of a <Router> component.'
    ),
    S.useContext(Sl).location
  );
}
var sh =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function oh(e) {
  S.useContext(ft).static || S.useLayoutEffect(e);
}
function Qy() {
  let { isDataRoute: e } = S.useContext(Nt);
  return e ? tv() : By();
}
function By() {
  G(
    Cl(),
    'useNavigate() may be used only in the context of a <Router> component.'
  );
  let e = S.useContext(kr),
    { basename: t, navigator: n } = S.useContext(ft),
    { matches: r } = S.useContext(Nt),
    { pathname: l } = Ln(),
    i = JSON.stringify(nh(r)),
    s = S.useRef(!1);
  return (
    oh(() => {
      s.current = !0;
    }),
    S.useCallback(
      (a, u = {}) => {
        if ((ct(s.current, sh), !s.current)) return;
        if (typeof a == 'number') {
          n.go(a);
          return;
        }
        let m = rh(a, JSON.parse(i), l, u.relative === 'path');
        (e == null &&
          t !== '/' &&
          (m.pathname = m.pathname === '/' ? t : xt([t, m.pathname])),
          (u.replace ? n.replace : n.push)(m, u.state, u));
      },
      [t, n, i, l, e]
    )
  );
}
S.createContext(null);
function El(e, { relative: t } = {}) {
  let { matches: n } = S.useContext(Nt),
    { pathname: r } = Ln(),
    l = JSON.stringify(nh(n));
  return S.useMemo(() => rh(e, JSON.parse(l), r, t === 'path'), [e, l, r, t]);
}
function Wy(e, t) {
  return ah(e, t);
}
function ah(e, t, n, r) {
  var f;
  G(
    Cl(),
    'useRoutes() may be used only in the context of a <Router> component.'
  );
  let { navigator: l } = S.useContext(ft),
    { matches: i } = S.useContext(Nt),
    s = i[i.length - 1],
    o = s ? s.params : {},
    a = s ? s.pathname : '/',
    u = s ? s.pathnameBase : '/',
    m = s && s.route;
  {
    let c = (m && m.path) || '';
    uh(
      a,
      !m || c.endsWith('*') || c.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${a}" (under <Route path="${c}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${c}"> to <Route path="${c === '/' ? '*' : `${c}/*`}">.`
    );
  }
  let p = Ln(),
    d;
  if (t) {
    let c = typeof t == 'string' ? wr(t) : t;
    (G(
      u === '/' || ((f = c.pathname) == null ? void 0 : f.startsWith(u)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${c.pathname}" was given in the \`location\` prop.`
    ),
      (d = c));
  } else d = p;
  let x = d.pathname || '/',
    w = x;
  if (u !== '/') {
    let c = u.replace(/^\//, '').split('/');
    w = '/' + x.replace(/^\//, '').split('/').slice(c.length).join('/');
  }
  let g = Jd(e, { pathname: w });
  (ct(
    m || g != null,
    `No routes matched location "${d.pathname}${d.search}${d.hash}" `
  ),
    ct(
      g == null ||
        g[g.length - 1].route.element !== void 0 ||
        g[g.length - 1].route.Component !== void 0 ||
        g[g.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ));
  let C = Gy(
    g &&
      g.map((c) =>
        Object.assign({}, c, {
          params: Object.assign({}, o, c.params),
          pathname: xt([
            u,
            l.encodeLocation
              ? l.encodeLocation(c.pathname).pathname
              : c.pathname,
          ]),
          pathnameBase:
            c.pathnameBase === '/'
              ? u
              : xt([
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
    ? S.createElement(
        Sl.Provider,
        {
          value: {
            location: {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
              ...d,
            },
            navigationType: 'POP',
          },
        },
        C
      )
    : C;
}
function Vy() {
  let e = ev(),
    t = zy(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = 'rgba(200,200,200, 0.5)',
    l = { padding: '0.5rem', backgroundColor: r },
    i = { padding: '2px 4px', backgroundColor: r },
    s = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', e),
    (s = S.createElement(
      S.Fragment,
      null,
      S.createElement('p', null, '💿 Hey developer 👋'),
      S.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        S.createElement('code', { style: i }, 'ErrorBoundary'),
        ' or',
        ' ',
        S.createElement('code', { style: i }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    S.createElement(
      S.Fragment,
      null,
      S.createElement('h2', null, 'Unexpected Application Error!'),
      S.createElement('h3', { style: { fontStyle: 'italic' } }, t),
      n ? S.createElement('pre', { style: l }, n) : null,
      s
    )
  );
}
var Ky = S.createElement(Vy, null),
  by = class extends S.Component {
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
        ? S.createElement(
            Nt.Provider,
            { value: this.props.routeContext },
            S.createElement(Ha.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function qy({ routeContext: e, match: t, children: n }) {
  let r = S.useContext(kr);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    S.createElement(Nt.Provider, { value: e }, n)
  );
}
function Gy(e, t = [], n = null, r = null) {
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
    let a = l.findIndex(
      (u) => u.route.id && (i == null ? void 0 : i[u.route.id]) !== void 0
    );
    (G(
      a >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(i).join(',')}`
    ),
      (l = l.slice(0, Math.min(l.length, a + 1))));
  }
  let s = !1,
    o = -1;
  if (n)
    for (let a = 0; a < l.length; a++) {
      let u = l[a];
      if (
        ((u.route.HydrateFallback || u.route.hydrateFallbackElement) && (o = a),
        u.route.id)
      ) {
        let { loaderData: m, errors: p } = n,
          d =
            u.route.loader &&
            !m.hasOwnProperty(u.route.id) &&
            (!p || p[u.route.id] === void 0);
        if (u.route.lazy || d) {
          ((s = !0), o >= 0 ? (l = l.slice(0, o + 1)) : (l = [l[0]]));
          break;
        }
      }
    }
  return l.reduceRight((a, u, m) => {
    let p,
      d = !1,
      x = null,
      w = null;
    n &&
      ((p = i && u.route.id ? i[u.route.id] : void 0),
      (x = u.route.errorElement || Ky),
      s &&
        (o < 0 && m === 0
          ? (uh(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (d = !0),
            (w = null))
          : o === m &&
            ((d = !0), (w = u.route.hydrateFallbackElement || null))));
    let g = t.concat(l.slice(0, m + 1)),
      C = () => {
        let f;
        return (
          p
            ? (f = x)
            : d
              ? (f = w)
              : u.route.Component
                ? (f = S.createElement(u.route.Component, null))
                : u.route.element
                  ? (f = u.route.element)
                  : (f = a),
          S.createElement(qy, {
            match: u,
            routeContext: { outlet: a, matches: g, isDataRoute: n != null },
            children: f,
          })
        );
      };
    return n && (u.route.ErrorBoundary || u.route.errorElement || m === 0)
      ? S.createElement(by, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: p,
          children: C(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : C();
  }, null);
}
function Qa(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Yy(e) {
  let t = S.useContext(kr);
  return (G(t, Qa(e)), t);
}
function Xy(e) {
  let t = S.useContext(Ji);
  return (G(t, Qa(e)), t);
}
function Zy(e) {
  let t = S.useContext(Nt);
  return (G(t, Qa(e)), t);
}
function Ba(e) {
  let t = Zy(e),
    n = t.matches[t.matches.length - 1];
  return (
    G(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
  );
}
function Jy() {
  return Ba('useRouteId');
}
function ev() {
  var r;
  let e = S.useContext(Ha),
    t = Xy('useRouteError'),
    n = Ba('useRouteError');
  return e !== void 0 ? e : (r = t.errors) == null ? void 0 : r[n];
}
function tv() {
  let { router: e } = Yy('useNavigate'),
    t = Ba('useNavigate'),
    n = S.useRef(!1);
  return (
    oh(() => {
      n.current = !0;
    }),
    S.useCallback(
      async (l, i = {}) => {
        (ct(n.current, sh),
          n.current &&
            (typeof l == 'number'
              ? e.navigate(l)
              : await e.navigate(l, { fromRouteId: t, ...i })));
      },
      [e, t]
    )
  );
}
var dc = {};
function uh(e, t, n) {
  !t && !dc[e] && ((dc[e] = !0), ct(!1, n));
}
S.memo(nv);
function nv({ routes: e, future: t, state: n }) {
  return ah(e, void 0, n, t);
}
function si(e) {
  G(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function rv({
  basename: e = '/',
  children: t = null,
  location: n,
  navigationType: r = 'POP',
  navigator: l,
  static: i = !1,
}) {
  G(
    !Cl(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let s = e.replace(/^\/*/, '/'),
    o = S.useMemo(
      () => ({ basename: s, navigator: l, static: i, future: {} }),
      [s, l, i]
    );
  typeof n == 'string' && (n = wr(n));
  let {
      pathname: a = '/',
      search: u = '',
      hash: m = '',
      state: p = null,
      key: d = 'default',
    } = n,
    x = S.useMemo(() => {
      let w = Et(a, s);
      return w == null
        ? null
        : {
            location: { pathname: w, search: u, hash: m, state: p, key: d },
            navigationType: r,
          };
    }, [s, a, u, m, p, d, r]);
  return (
    ct(
      x != null,
      `<Router basename="${s}"> is not able to match the URL "${a}${u}${m}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    x == null
      ? null
      : S.createElement(
          ft.Provider,
          { value: o },
          S.createElement(Sl.Provider, { children: t, value: x })
        )
  );
}
function lv({ children: e, location: t }) {
  return Wy(Lo(e), t);
}
function Lo(e, t = []) {
  let n = [];
  return (
    S.Children.forEach(e, (r, l) => {
      if (!S.isValidElement(r)) return;
      let i = [...t, l];
      if (r.type === S.Fragment) {
        n.push.apply(n, Lo(r.props.children, i));
        return;
      }
      (G(
        r.type === si,
        `[${typeof r.type == 'string' ? r.type : r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        G(
          !r.props.index || !r.props.children,
          'An index route cannot have child routes.'
        ));
      let s = {
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
      (r.props.children && (s.children = Lo(r.props.children, i)), n.push(s));
    }),
    n
  );
}
var oi = 'get',
  ai = 'application/x-www-form-urlencoded';
function es(e) {
  return e != null && typeof e.tagName == 'string';
}
function iv(e) {
  return es(e) && e.tagName.toLowerCase() === 'button';
}
function sv(e) {
  return es(e) && e.tagName.toLowerCase() === 'form';
}
function ov(e) {
  return es(e) && e.tagName.toLowerCase() === 'input';
}
function av(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function uv(e, t) {
  return e.button === 0 && (!t || t === '_self') && !av(e);
}
var Kl = null;
function cv() {
  if (Kl === null)
    try {
      (new FormData(document.createElement('form'), 0), (Kl = !1));
    } catch {
      Kl = !0;
    }
  return Kl;
}
var fv = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function Ms(e) {
  return e != null && !fv.has(e)
    ? (ct(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ai}"`
      ),
      null)
    : e;
}
function dv(e, t) {
  let n, r, l, i, s;
  if (sv(e)) {
    let o = e.getAttribute('action');
    ((r = o ? Et(o, t) : null),
      (n = e.getAttribute('method') || oi),
      (l = Ms(e.getAttribute('enctype')) || ai),
      (i = new FormData(e)));
  } else if (iv(e) || (ov(e) && (e.type === 'submit' || e.type === 'image'))) {
    let o = e.form;
    if (o == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let a = e.getAttribute('formaction') || o.getAttribute('action');
    if (
      ((r = a ? Et(a, t) : null),
      (n = e.getAttribute('formmethod') || o.getAttribute('method') || oi),
      (l =
        Ms(e.getAttribute('formenctype')) ||
        Ms(o.getAttribute('enctype')) ||
        ai),
      (i = new FormData(o, e)),
      !cv())
    ) {
      let { name: u, type: m, value: p } = e;
      if (m === 'image') {
        let d = u ? `${u}.` : '';
        (i.append(`${d}x`, '0'), i.append(`${d}y`, '0'));
      } else u && i.append(u, p);
    }
  } else {
    if (es(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((n = oi), (r = null), (l = ai), (s = e));
  }
  return (
    i && l === 'text/plain' && ((s = i), (i = void 0)),
    { action: r, method: n.toLowerCase(), encType: l, formData: i, body: s }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function Wa(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function hv(e, t, n) {
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
      : t && Et(r.pathname, t) === '/'
        ? (r.pathname = `${t.replace(/\/$/, '')}/_root.${n}`)
        : (r.pathname = `${r.pathname.replace(/\/$/, '')}.${n}`),
    r
  );
}
async function pv(e, t) {
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
function mv(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === 'preload' &&
        typeof e.imageSrcSet == 'string' &&
        typeof e.imageSizes == 'string'
      : typeof e.rel == 'string' && typeof e.href == 'string';
}
async function yv(e, t, n) {
  let r = await Promise.all(
    e.map(async (l) => {
      let i = t.routes[l.route.id];
      if (i) {
        let s = await pv(i, n);
        return s.links ? s.links() : [];
      }
      return [];
    })
  );
  return wv(
    r
      .flat(1)
      .filter(mv)
      .filter((l) => l.rel === 'stylesheet' || l.rel === 'preload')
      .map((l) =>
        l.rel === 'stylesheet'
          ? { ...l, rel: 'prefetch', as: 'style' }
          : { ...l, rel: 'prefetch' }
      )
  );
}
function hc(e, t, n, r, l, i) {
  let s = (a, u) => (n[u] ? a.route.id !== n[u].route.id : !0),
    o = (a, u) => {
      var m;
      return (
        n[u].pathname !== a.pathname ||
        (((m = n[u].route.path) == null ? void 0 : m.endsWith('*')) &&
          n[u].params['*'] !== a.params['*'])
      );
    };
  return i === 'assets'
    ? t.filter((a, u) => s(a, u) || o(a, u))
    : i === 'data'
      ? t.filter((a, u) => {
          var p;
          let m = r.routes[a.route.id];
          if (!m || !m.hasLoader) return !1;
          if (s(a, u) || o(a, u)) return !0;
          if (a.route.shouldRevalidate) {
            let d = a.route.shouldRevalidate({
              currentUrl: new URL(
                l.pathname + l.search + l.hash,
                window.origin
              ),
              currentParams: ((p = n[0]) == null ? void 0 : p.params) || {},
              nextUrl: new URL(e, window.origin),
              nextParams: a.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof d == 'boolean') return d;
          }
          return !0;
        })
      : [];
}
function vv(e, t, { includeHydrateFallback: n } = {}) {
  return gv(
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
function gv(e) {
  return [...new Set(e)];
}
function xv(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function wv(e, t) {
  let n = new Set();
  return (
    new Set(t),
    e.reduce((r, l) => {
      let i = JSON.stringify(xv(l));
      return (n.has(i) || (n.add(i), r.push({ key: i, link: l })), r);
    }, [])
  );
}
function ch() {
  let e = S.useContext(kr);
  return (
    Wa(
      e,
      'You must render this element inside a <DataRouterContext.Provider> element'
    ),
    e
  );
}
function kv() {
  let e = S.useContext(Ji);
  return (
    Wa(
      e,
      'You must render this element inside a <DataRouterStateContext.Provider> element'
    ),
    e
  );
}
var Va = S.createContext(void 0);
Va.displayName = 'FrameworkContext';
function fh() {
  let e = S.useContext(Va);
  return (
    Wa(e, 'You must render this element inside a <HydratedRouter> element'),
    e
  );
}
function Sv(e, t) {
  let n = S.useContext(Va),
    [r, l] = S.useState(!1),
    [i, s] = S.useState(!1),
    {
      onFocus: o,
      onBlur: a,
      onMouseEnter: u,
      onMouseLeave: m,
      onTouchStart: p,
    } = t,
    d = S.useRef(null);
  (S.useEffect(() => {
    if ((e === 'render' && s(!0), e === 'viewport')) {
      let g = (f) => {
          f.forEach((c) => {
            s(c.isIntersecting);
          });
        },
        C = new IntersectionObserver(g, { threshold: 0.5 });
      return (
        d.current && C.observe(d.current),
        () => {
          C.disconnect();
        }
      );
    }
  }, [e]),
    S.useEffect(() => {
      if (r) {
        let g = setTimeout(() => {
          s(!0);
        }, 100);
        return () => {
          clearTimeout(g);
        };
      }
    }, [r]));
  let x = () => {
      l(!0);
    },
    w = () => {
      (l(!1), s(!1));
    };
  return n
    ? e !== 'intent'
      ? [i, d, {}]
      : [
          i,
          d,
          {
            onFocus: Tr(o, x),
            onBlur: Tr(a, w),
            onMouseEnter: Tr(u, x),
            onMouseLeave: Tr(m, w),
            onTouchStart: Tr(p, x),
          },
        ]
    : [!1, d, {}];
}
function Tr(e, t) {
  return (n) => {
    (e && e(n), n.defaultPrevented || t(n));
  };
}
function Cv({ page: e, ...t }) {
  let { router: n } = ch(),
    r = S.useMemo(() => Jd(n.routes, e, n.basename), [n.routes, e, n.basename]);
  return r ? S.createElement(Pv, { page: e, matches: r, ...t }) : null;
}
function Ev(e) {
  let { manifest: t, routeModules: n } = fh(),
    [r, l] = S.useState([]);
  return (
    S.useEffect(() => {
      let i = !1;
      return (
        yv(e, t, n).then((s) => {
          i || l(s);
        }),
        () => {
          i = !0;
        }
      );
    }, [e, t, n]),
    r
  );
}
function Pv({ page: e, matches: t, ...n }) {
  let r = Ln(),
    { manifest: l, routeModules: i } = fh(),
    { basename: s } = ch(),
    { loaderData: o, matches: a } = kv(),
    u = S.useMemo(() => hc(e, t, a, l, r, 'data'), [e, t, a, l, r]),
    m = S.useMemo(() => hc(e, t, a, l, r, 'assets'), [e, t, a, l, r]),
    p = S.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let w = new Set(),
        g = !1;
      if (
        (t.forEach((f) => {
          var h;
          let c = l.routes[f.route.id];
          !c ||
            !c.hasLoader ||
            ((!u.some((k) => k.route.id === f.route.id) &&
              f.route.id in o &&
              (h = i[f.route.id]) != null &&
              h.shouldRevalidate) ||
            c.hasClientLoader
              ? (g = !0)
              : w.add(f.route.id));
        }),
        w.size === 0)
      )
        return [];
      let C = hv(e, s, 'data');
      return (
        g &&
          w.size > 0 &&
          C.searchParams.set(
            '_routes',
            t
              .filter((f) => w.has(f.route.id))
              .map((f) => f.route.id)
              .join(',')
          ),
        [C.pathname + C.search]
      );
    }, [s, o, r, l, u, t, e, i]),
    d = S.useMemo(() => vv(m, l), [m, l]),
    x = Ev(m);
  return S.createElement(
    S.Fragment,
    null,
    p.map((w) =>
      S.createElement('link', {
        key: w,
        rel: 'prefetch',
        as: 'fetch',
        href: w,
        ...n,
      })
    ),
    d.map((w) =>
      S.createElement('link', { key: w, rel: 'modulepreload', href: w, ...n })
    ),
    x.map(({ key: w, link: g }) => S.createElement('link', { key: w, ...g }))
  );
}
function Nv(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == 'function' ? n(t) : n != null && (n.current = t);
    });
  };
}
var dh =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  dh && (window.__reactRouterVersion = '7.7.1');
} catch {}
function jv({ basename: e, children: t, window: n }) {
  let r = S.useRef();
  r.current == null && (r.current = py({ window: n, v5Compat: !0 }));
  let l = r.current,
    [i, s] = S.useState({ action: l.action, location: l.location }),
    o = S.useCallback(
      (a) => {
        S.startTransition(() => s(a));
      },
      [s]
    );
  return (
    S.useLayoutEffect(() => l.listen(o), [l, o]),
    S.createElement(rv, {
      basename: e,
      children: t,
      location: i.location,
      navigationType: i.action,
      navigator: l,
    })
  );
}
var hh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  cl = S.forwardRef(function (
    {
      onClick: t,
      discover: n = 'render',
      prefetch: r = 'none',
      relative: l,
      reloadDocument: i,
      replace: s,
      state: o,
      target: a,
      to: u,
      preventScrollReset: m,
      viewTransition: p,
      ...d
    },
    x
  ) {
    let { basename: w } = S.useContext(ft),
      g = typeof u == 'string' && hh.test(u),
      C,
      f = !1;
    if (typeof u == 'string' && g && ((C = u), dh))
      try {
        let M = new URL(window.location.href),
          O = u.startsWith('//') ? new URL(M.protocol + u) : new URL(u),
          X = Et(O.pathname, w);
        O.origin === M.origin && X != null
          ? (u = X + O.search + O.hash)
          : (f = !0);
      } catch {
        ct(
          !1,
          `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let c = Hy(u, { relative: l }),
      [h, k, E] = Sv(r, d),
      P = Lv(u, {
        replace: s,
        state: o,
        target: a,
        preventScrollReset: m,
        relative: l,
        viewTransition: p,
      });
    function R(M) {
      (t && t(M), M.defaultPrevented || P(M));
    }
    let j = S.createElement('a', {
      ...d,
      ...E,
      href: C || c,
      onClick: f || i ? t : R,
      ref: Nv(x, k),
      target: a,
      'data-discover': !g && n === 'render' ? 'true' : void 0,
    });
    return h && !g
      ? S.createElement(S.Fragment, null, j, S.createElement(Cv, { page: c }))
      : j;
  });
cl.displayName = 'Link';
var Rv = S.forwardRef(function (
  {
    'aria-current': t = 'page',
    caseSensitive: n = !1,
    className: r = '',
    end: l = !1,
    style: i,
    to: s,
    viewTransition: o,
    children: a,
    ...u
  },
  m
) {
  let p = El(s, { relative: u.relative }),
    d = Ln(),
    x = S.useContext(Ji),
    { navigator: w, basename: g } = S.useContext(ft),
    C = x != null && Dv(p) && o === !0,
    f = w.encodeLocation ? w.encodeLocation(p).pathname : p.pathname,
    c = d.pathname,
    h =
      x && x.navigation && x.navigation.location
        ? x.navigation.location.pathname
        : null;
  (n ||
    ((c = c.toLowerCase()),
    (h = h ? h.toLowerCase() : null),
    (f = f.toLowerCase())),
    h && g && (h = Et(h, g) || h));
  const k = f !== '/' && f.endsWith('/') ? f.length - 1 : f.length;
  let E = c === f || (!l && c.startsWith(f) && c.charAt(k) === '/'),
    P =
      h != null &&
      (h === f || (!l && h.startsWith(f) && h.charAt(f.length) === '/')),
    R = { isActive: E, isPending: P, isTransitioning: C },
    j = E ? t : void 0,
    M;
  typeof r == 'function'
    ? (M = r(R))
    : (M = [
        r,
        E ? 'active' : null,
        P ? 'pending' : null,
        C ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
  let O = typeof i == 'function' ? i(R) : i;
  return S.createElement(
    cl,
    {
      ...u,
      'aria-current': j,
      className: M,
      ref: m,
      style: O,
      to: s,
      viewTransition: o,
    },
    typeof a == 'function' ? a(R) : a
  );
});
Rv.displayName = 'NavLink';
var _v = S.forwardRef(
  (
    {
      discover: e = 'render',
      fetcherKey: t,
      navigate: n,
      reloadDocument: r,
      replace: l,
      state: i,
      method: s = oi,
      action: o,
      onSubmit: a,
      relative: u,
      preventScrollReset: m,
      viewTransition: p,
      ...d
    },
    x
  ) => {
    let w = Fv(),
      g = Iv(o, { relative: u }),
      C = s.toLowerCase() === 'get' ? 'get' : 'post',
      f = typeof o == 'string' && hh.test(o),
      c = (h) => {
        if ((a && a(h), h.defaultPrevented)) return;
        h.preventDefault();
        let k = h.nativeEvent.submitter,
          E = (k == null ? void 0 : k.getAttribute('formmethod')) || s;
        w(k || h.currentTarget, {
          fetcherKey: t,
          method: E,
          navigate: n,
          replace: l,
          state: i,
          relative: u,
          preventScrollReset: m,
          viewTransition: p,
        });
      };
    return S.createElement('form', {
      ref: x,
      method: C,
      action: g,
      onSubmit: r ? a : c,
      ...d,
      'data-discover': !f && e === 'render' ? 'true' : void 0,
    });
  }
);
_v.displayName = 'Form';
function Tv(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function ph(e) {
  let t = S.useContext(kr);
  return (G(t, Tv(e)), t);
}
function Lv(
  e,
  {
    target: t,
    replace: n,
    state: r,
    preventScrollReset: l,
    relative: i,
    viewTransition: s,
  } = {}
) {
  let o = Qy(),
    a = Ln(),
    u = El(e, { relative: i });
  return S.useCallback(
    (m) => {
      if (uv(m, t)) {
        m.preventDefault();
        let p = n !== void 0 ? n : ul(a) === ul(u);
        o(e, {
          replace: p,
          state: r,
          preventScrollReset: l,
          relative: i,
          viewTransition: s,
        });
      }
    },
    [a, o, u, n, r, t, e, l, i, s]
  );
}
var Ov = 0,
  Mv = () => `__${String(++Ov)}__`;
function Fv() {
  let { router: e } = ph('useSubmit'),
    { basename: t } = S.useContext(ft),
    n = Jy();
  return S.useCallback(
    async (r, l = {}) => {
      let { action: i, method: s, encType: o, formData: a, body: u } = dv(r, t);
      if (l.navigate === !1) {
        let m = l.fetcherKey || Mv();
        await e.fetch(m, n, l.action || i, {
          preventScrollReset: l.preventScrollReset,
          formData: a,
          body: u,
          formMethod: l.method || s,
          formEncType: l.encType || o,
          flushSync: l.flushSync,
        });
      } else
        await e.navigate(l.action || i, {
          preventScrollReset: l.preventScrollReset,
          formData: a,
          body: u,
          formMethod: l.method || s,
          formEncType: l.encType || o,
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
function Iv(e, { relative: t } = {}) {
  let { basename: n } = S.useContext(ft),
    r = S.useContext(Nt);
  G(r, 'useFormAction must be used inside a RouteContext');
  let [l] = r.matches.slice(-1),
    i = { ...El(e || '.', { relative: t }) },
    s = Ln();
  if (e == null) {
    i.search = s.search;
    let o = new URLSearchParams(i.search),
      a = o.getAll('index');
    if (a.some((m) => m === '')) {
      (o.delete('index'),
        a.filter((p) => p).forEach((p) => o.append('index', p)));
      let m = o.toString();
      i.search = m ? `?${m}` : '';
    }
  }
  return (
    (!e || e === '.') &&
      l.route.index &&
      (i.search = i.search ? i.search.replace(/^\?/, '?index&') : '?index'),
    n !== '/' && (i.pathname = i.pathname === '/' ? n : xt([n, i.pathname])),
    ul(i)
  );
}
function Dv(e, { relative: t } = {}) {
  let n = S.useContext(ih);
  G(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: r } = ph('useViewTransitionState'),
    l = El(e, { relative: t });
  if (!n.isTransitioning) return !1;
  let i = Et(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    s = Et(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Fi(l.pathname, s) != null || Fi(l.pathname, i) != null;
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var zv = {
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
 */ const $v = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase()
      .trim(),
  ee = (e, t) => {
    const n = S.forwardRef(
      (
        {
          color: r = 'currentColor',
          size: l = 24,
          strokeWidth: i = 2,
          absoluteStrokeWidth: s,
          className: o = '',
          children: a,
          ...u
        },
        m
      ) =>
        S.createElement(
          'svg',
          {
            ref: m,
            ...zv,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: s ? (Number(i) * 24) / Number(l) : i,
            className: ['lucide', `lucide-${$v(e)}`, o].join(' '),
            ...u,
          },
          [
            ...t.map(([p, d]) => S.createElement(p, d)),
            ...(Array.isArray(a) ? a : [a]),
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
 */ const Uv = ee('AlertCircle', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['line', { x1: '12', x2: '12', y1: '8', y2: '12', key: '1pkeuh' }],
  ['line', { x1: '12', x2: '12.01', y1: '16', y2: '16', key: '4dfq90' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Av = ee('AlertTriangle', [
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
 */ const mh = ee('Calendar', [
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
 */ const Hv = ee('Car', [
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
 */ const Qv = ee('ChevronLeft', [
  ['path', { d: 'm15 18-6-6 6-6', key: '1wnfg3' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bv = ee('ChevronRight', [
  ['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wv = ee('Download', [
  ['path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' }],
  ['polyline', { points: '7 10 12 15 17 10', key: '2ggqvy' }],
  ['line', { x1: '12', x2: '12', y1: '15', y2: '3', key: '1vk2je' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vv = ee('ExternalLink', [
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
 */ const Kv = ee('Film', [
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
 */ const bv = ee('Heart', [
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
 */ const qv = ee('Home', [
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
 */ const Gv = ee('Loader2', [
  ['path', { d: 'M21 12a9 9 0 1 1-6.219-8.56', key: '13zald' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yv = ee('MapPin', [
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
 */ const Xv = ee('Moon', [
  ['path', { d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z', key: 'a7tn18' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zv = ee('RefreshCw', [
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
 */ const Jv = ee('Rocket', [
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
 */ const yh = ee('Ruler', [
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
 */ const vh = ee('Search', [
  ['circle', { cx: '11', cy: '11', r: '8', key: '4ej97u' }],
  ['path', { d: 'm21 21-4.3-4.3', key: '1qie3q' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eg = ee('Sun', [
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
 */ const ui = ee('User', [
  ['path', { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2', key: '975kel' }],
  ['circle', { cx: '12', cy: '7', r: '4', key: '17ys0d' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gh = ee('Weight', [
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
 */ const xh = ee('X', [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ]),
  wh = S.createContext(void 0),
  tg = () => {
    const e = S.useContext(wh);
    if (e === void 0)
      throw new Error('useTheme must be used within a ThemeProvider');
    return e;
  },
  ng = () => {
    const { theme: e, toggleTheme: t } = tg();
    return y.jsx('button', {
      onClick: t,
      className:
        'p-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors',
      'aria-label': `Switch to ${e === 'light' ? 'dark' : 'light'} theme`,
      title: `Switch to ${e === 'light' ? 'dark' : 'light'} theme`,
      children:
        e === 'light'
          ? y.jsx(Xv, { className: 'w-5 h-5 text-gray-700 dark:text-gray-300' })
          : y.jsx(eg, {
              className: 'w-5 h-5 text-gray-700 dark:text-gray-300',
            }),
    });
  },
  pc = (e) => {
    let t;
    const n = new Set(),
      r = (u, m) => {
        const p = typeof u == 'function' ? u(t) : u;
        if (!Object.is(p, t)) {
          const d = t;
          ((t =
            (m ?? (typeof p != 'object' || p === null))
              ? p
              : Object.assign({}, t, p)),
            n.forEach((x) => x(t, d)));
        }
      },
      l = () => t,
      o = {
        setState: r,
        getState: l,
        getInitialState: () => a,
        subscribe: (u) => (n.add(u), () => n.delete(u)),
      },
      a = (t = e(r, l, o));
    return o;
  },
  rg = (e) => (e ? pc(e) : pc),
  lg = (e) => e;
function ig(e, t = lg) {
  const n = Mn.useSyncExternalStore(
    e.subscribe,
    Mn.useCallback(() => t(e.getState()), [e, t]),
    Mn.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return (Mn.useDebugValue(n), n);
}
const mc = (e) => {
    const t = rg(e),
      n = (r) => ig(t, r);
    return (Object.assign(n, t), n);
  },
  ts = (e) => (e ? mc(e) : mc);
var sg =
    typeof global == 'object' && global && global.Object === Object && global,
  og = typeof self == 'object' && self && self.Object === Object && self,
  kh = sg || og || Function('return this')(),
  Ii = kh.Symbol,
  Sh = Object.prototype,
  ag = Sh.hasOwnProperty,
  ug = Sh.toString,
  Lr = Ii ? Ii.toStringTag : void 0;
function cg(e) {
  var t = ag.call(e, Lr),
    n = e[Lr];
  try {
    e[Lr] = void 0;
    var r = !0;
  } catch {}
  var l = ug.call(e);
  return (r && (t ? (e[Lr] = n) : delete e[Lr]), l);
}
var fg = Object.prototype,
  dg = fg.toString;
function hg(e) {
  return dg.call(e);
}
var pg = '[object Null]',
  mg = '[object Undefined]',
  yc = Ii ? Ii.toStringTag : void 0;
function yg(e) {
  return e == null
    ? e === void 0
      ? mg
      : pg
    : yc && yc in Object(e)
      ? cg(e)
      : hg(e);
}
function vg(e) {
  return e != null && typeof e == 'object';
}
var gg = '[object Symbol]';
function xg(e) {
  return typeof e == 'symbol' || (vg(e) && yg(e) == gg);
}
var wg = /\s/;
function kg(e) {
  for (var t = e.length; t-- && wg.test(e.charAt(t)); );
  return t;
}
var Sg = /^\s+/;
function Cg(e) {
  return e && e.slice(0, kg(e) + 1).replace(Sg, '');
}
function Oo(e) {
  var t = typeof e;
  return e != null && (t == 'object' || t == 'function');
}
var vc = NaN,
  Eg = /^[-+]0x[0-9a-f]+$/i,
  Pg = /^0b[01]+$/i,
  Ng = /^0o[0-7]+$/i,
  jg = parseInt;
function gc(e) {
  if (typeof e == 'number') return e;
  if (xg(e)) return vc;
  if (Oo(e)) {
    var t = typeof e.valueOf == 'function' ? e.valueOf() : e;
    e = Oo(t) ? t + '' : t;
  }
  if (typeof e != 'string') return e === 0 ? e : +e;
  e = Cg(e);
  var n = Pg.test(e);
  return n || Ng.test(e) ? jg(e.slice(2), n ? 2 : 8) : Eg.test(e) ? vc : +e;
}
var Fs = function () {
    return kh.Date.now();
  },
  Rg = 'Expected a function',
  _g = Math.max,
  Tg = Math.min;
function Lg(e, t, n) {
  var r,
    l,
    i,
    s,
    o,
    a,
    u = 0,
    m = !1,
    p = !1,
    d = !0;
  if (typeof e != 'function') throw new TypeError(Rg);
  ((t = gc(t) || 0),
    Oo(n) &&
      ((m = !!n.leading),
      (p = 'maxWait' in n),
      (i = p ? _g(gc(n.maxWait) || 0, t) : i),
      (d = 'trailing' in n ? !!n.trailing : d)));
  function x(P) {
    var R = r,
      j = l;
    return ((r = l = void 0), (u = P), (s = e.apply(j, R)), s);
  }
  function w(P) {
    return ((u = P), (o = setTimeout(f, t)), m ? x(P) : s);
  }
  function g(P) {
    var R = P - a,
      j = P - u,
      M = t - R;
    return p ? Tg(M, i - j) : M;
  }
  function C(P) {
    var R = P - a,
      j = P - u;
    return a === void 0 || R >= t || R < 0 || (p && j >= i);
  }
  function f() {
    var P = Fs();
    if (C(P)) return c(P);
    o = setTimeout(f, g(P));
  }
  function c(P) {
    return ((o = void 0), d && r ? x(P) : ((r = l = void 0), s));
  }
  function h() {
    (o !== void 0 && clearTimeout(o), (u = 0), (r = a = l = o = void 0));
  }
  function k() {
    return o === void 0 ? s : c(Fs());
  }
  function E() {
    var P = Fs(),
      R = C(P);
    if (((r = arguments), (l = this), (a = P), R)) {
      if (o === void 0) return w(a);
      if (p) return (clearTimeout(o), (o = setTimeout(f, t)), x(a));
    }
    return (o === void 0 && (o = setTimeout(f, t)), s);
  }
  return ((E.cancel = h), (E.flush = k), E);
}
const Ka = ts((e) => ({
    searchTerm: '',
    submittedTerm: '',
    shouldFetch: !1,
    actions: {
      setSearchTerm: Lg((t) => {
        e({ searchTerm: t });
      }, 0),
      submitSearch: () => {
        e((t) => ({ submittedTerm: t.searchTerm, shouldFetch: !0 }));
      },
      clearSearch: () => {
        e({ searchTerm: '', submittedTerm: '' });
      },
    },
  })),
  Ch = () => Ka((e) => e.searchTerm),
  Og = () => Ka((e) => e.actions),
  Mg = () => {
    const e = Ch(),
      { setSearchTerm: t, submitSearch: n } = Og(),
      r = (l) => {
        (l.preventDefault(), n());
      };
    return y.jsx('div', {
      className:
        'bg-white shadow-sm border-b border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700 transition-colors',
      children: y.jsxs('div', {
        className: 'max-w-4xl mx-auto',
        children: [
          y.jsx('h1', {
            className:
              'text-3xl font-bold text-gray-900 mb-6 text-center dark:text-white',
            children: 'Star Wars Character Search',
          }),
          y.jsxs('form', {
            onSubmit: r,
            className:
              'flex flex-col sm:flex-row gap-4 items-stretch sm:items-center',
            children: [
              y.jsx(ng, {}),
              y.jsxs('div', {
                className: 'flex-1 relative',
                children: [
                  y.jsx(vh, {
                    className:
                      'absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400',
                  }),
                  y.jsx('input', {
                    'data-testid': 'search-box',
                    type: 'text',
                    value: e,
                    onChange: (l) => t(l.target.value),
                    placeholder: 'Search for Star Wars characters...',
                    className:
                      'w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed dark:bg-gray-300',
                  }),
                ],
              }),
              y.jsx('button', {
                'data-testid': 'search-button',
                type: 'submit',
                onClick: (l) => {
                  (l.stopPropagation(),
                    console.log('The search button has been clicked.'));
                },
                className:
                  'px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors font-medium',
                children: 'Search',
              }),
            ],
          }),
        ],
      }),
    });
  };
function Fg(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (l) => {
      var i;
      const s = (a) => (a === null ? null : JSON.parse(a, void 0)),
        o = (i = n.getItem(l)) != null ? i : null;
      return o instanceof Promise ? o.then(s) : s(o);
    },
    setItem: (l, i) => n.setItem(l, JSON.stringify(i, void 0)),
    removeItem: (l) => n.removeItem(l),
  };
}
const Mo = (e) => (t) => {
    try {
      const n = e(t);
      return n instanceof Promise
        ? n
        : {
            then(r) {
              return Mo(r)(n);
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
          return Mo(r)(n);
        },
      };
    }
  },
  Ig = (e, t) => (n, r, l) => {
    let i = {
        storage: Fg(() => localStorage),
        partialize: (g) => g,
        version: 0,
        merge: (g, C) => ({ ...C, ...g }),
        ...t,
      },
      s = !1;
    const o = new Set(),
      a = new Set();
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
    const m = () => {
        const g = i.partialize({ ...r() });
        return u.setItem(i.name, { state: g, version: i.version });
      },
      p = l.setState;
    l.setState = (g, C) => {
      (p(g, C), m());
    };
    const d = e(
      (...g) => {
        (n(...g), m());
      },
      r,
      l
    );
    l.getInitialState = () => d;
    let x;
    const w = () => {
      var g, C;
      if (!u) return;
      ((s = !1),
        o.forEach((c) => {
          var h;
          return c((h = r()) != null ? h : d);
        }));
      const f =
        ((C = i.onRehydrateStorage) == null
          ? void 0
          : C.call(i, (g = r()) != null ? g : d)) || void 0;
      return Mo(u.getItem.bind(u))(i.name)
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
          const [k, E] = c;
          if (((x = i.merge(E, (h = r()) != null ? h : d)), n(x, !0), k))
            return m();
        })
        .then(() => {
          (f == null || f(x, void 0),
            (x = r()),
            (s = !0),
            a.forEach((c) => c(x)));
        })
        .catch((c) => {
          f == null || f(void 0, c);
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
        rehydrate: () => w(),
        hasHydrated: () => s,
        onHydrate: (g) => (
          o.add(g),
          () => {
            o.delete(g);
          }
        ),
        onFinishHydration: (g) => (
          a.add(g),
          () => {
            a.delete(g);
          }
        ),
      }),
      i.skipHydration || w(),
      x || d
    );
  },
  Dg = Ig,
  Eh = ts()(
    Dg(
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
  fn = (e) => e.toLowerCase() !== 'unknown',
  zg = (e) =>
    S.useMemo(() => {
      const t = [];
      return (
        fn(e.gender) && t.push(e.gender),
        fn(e.birth_year) && t.push(`Born ${e.birth_year}`),
        fn(e.height) && t.push(`${e.height}cm tall`),
        fn(e.mass) && t.push(`${e.mass}kg`),
        t.join(' • ')
      );
    }, [e]),
  $g = ({ character: e, onClick: t }) => {
    const n = zg(e),
      { isSelected: r, addItem: l, removeItem: i } = Eh(),
      s = r(e.url),
      o = (u) => {
        (u.stopPropagation(), u.target.checked ? l(e) : i(e.url));
      },
      a = () => {
        t == null || t(e);
      };
    return y.jsxs('div', {
      className: `bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 p-6 border cursor-pointer hover:border-blue-300 hover:scale-[1.02] ${s ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-400' : 'border-gray-200 dark:border-gray-700'} dark:bg-gray-800 `,
      onClick: a,
      children: [
        y.jsx('div', {
          className: 'flex items-start justify-between mb-4',
          children: y.jsx('input', {
            type: 'checkbox',
            checked: s,
            onChange: o,
            onClick: (u) => u.stopPropagation(),
            className:
              'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 dark:bg-gray-700 ',
          }),
        }),
        y.jsxs('div', {
          className: 'flex items-start space-x-4',
          children: [
            y.jsx('div', {
              className: 'flex-shrink-0',
              children: y.jsx('div', {
                className:
                  'w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center',
                children: y.jsx(ui, {
                  'data-testid': 'avatar',
                  className: 'w-6 h-6 text-white',
                }),
              }),
            }),
            y.jsxs('div', {
              className: 'flex-1 min-w-0',
              children: [
                y.jsx('h3', {
                  className:
                    'text-lg font-semibold text-gray-900 mb-2 dark:text-white',
                  children: e.name,
                }),
                n &&
                  y.jsx('p', {
                    className: 'text-gray-600 text-sm mb-3 dark:text-gray-300 ',
                    children: n,
                  }),
                y.jsxs('div', {
                  className:
                    'flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400 ',
                  children: [
                    fn(e.height) &&
                      y.jsxs('div', {
                        className: 'flex items-center space-x-1',
                        children: [
                          y.jsx(yh, { className: 'w-3 h-3' }),
                          y.jsxs('span', { children: [e.height, 'cm'] }),
                        ],
                      }),
                    fn(e.mass) &&
                      y.jsxs('div', {
                        className: 'flex items-center space-x-1',
                        children: [
                          y.jsx(gh, { className: 'w-3 h-3' }),
                          y.jsxs('span', { children: [e.mass, 'kg'] }),
                        ],
                      }),
                    fn(e.birth_year) &&
                      y.jsxs('div', {
                        className: 'flex items-center space-x-1',
                        children: [
                          y.jsx(mh, { className: 'w-3 h-3' }),
                          y.jsx('span', { children: e.birth_year }),
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
  Ug = () =>
    y.jsxs('div', {
      className: 'flex flex-col items-center justify-center py-12',
      children: [
        y.jsx(Gv, {
          'data-testid': 'spinner',
          className:
            'w-8 h-8 text-blue-600 animate-spin mb-4 dark:text-blue-400 ',
        }),
        y.jsx('p', {
          className: 'text-gray-600 dark:text-gray-300',
          children: 'Searching the galaxy...',
        }),
      ],
    }),
  Ag = ({ message: e, onRetry: t }) =>
    y.jsx('div', {
      className: 'flex flex-col items-center justify-center py-12',
      children: y.jsxs('div', {
        className:
          'bg-red-50 border border-red-200 rounded-lg p-6 max-w-md w-full',
        children: [
          y.jsxs('div', {
            className: 'flex items-center mb-4',
            children: [
              y.jsx(Uv, {
                'data-testid': 'error-icon',
                className: 'w-6 h-6 text-red-600 mr-3',
              }),
              y.jsx('h3', {
                className: 'text-lg font-semibold text-red-800',
                children: 'Error',
              }),
            ],
          }),
          y.jsx('p', { className: 'text-red-700 mb-4', children: e }),
          y.jsxs('button', {
            onClick: t,
            className:
              'flex items-center justify-center w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors',
            children: [y.jsx(Zv, { className: 'w-4 h-4 mr-2' }), 'Try Again'],
          }),
        ],
      }),
    }),
  xc = (e) => Symbol.iterator in e,
  wc = (e) => 'entries' in e,
  kc = (e, t) => {
    const n = e instanceof Map ? e : new Map(e.entries()),
      r = t instanceof Map ? t : new Map(t.entries());
    if (n.size !== r.size) return !1;
    for (const [l, i] of n) if (!Object.is(i, r.get(l))) return !1;
    return !0;
  },
  Hg = (e, t) => {
    const n = e[Symbol.iterator](),
      r = t[Symbol.iterator]();
    let l = n.next(),
      i = r.next();
    for (; !l.done && !i.done; ) {
      if (!Object.is(l.value, i.value)) return !1;
      ((l = n.next()), (i = r.next()));
    }
    return !!l.done && !!i.done;
  };
function Qg(e, t) {
  return Object.is(e, t)
    ? !0
    : typeof e != 'object' ||
        e === null ||
        typeof t != 'object' ||
        t === null ||
        Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)
      ? !1
      : xc(e) && xc(t)
        ? wc(e) && wc(t)
          ? kc(e, t)
          : Hg(e, t)
        : kc(
            { entries: () => Object.entries(e) },
            { entries: () => Object.entries(t) }
          );
}
function Ph(e) {
  const t = Mn.useRef(void 0);
  return (n) => {
    const r = e(n);
    return Qg(t.current, r) ? t.current : (t.current = r);
  };
}
const ba = ts((e) => ({
    currentPage: 1,
    searchTerm: '',
    totalPages: 1,
    totalCount: 0,
    actions: {
      setCurrentPage: (t) =>
        e((n) => (n.currentPage === t ? {} : { currentPage: t })),
      setSearchTerm: (t) =>
        e((n) => (n.searchTerm === t ? {} : { searchTerm: t, currentPage: 1 })),
      resetPagination: () => e({ currentPage: 1, searchTerm: '' }),
      updatePaginationData: (t) =>
        e((n) => ({
          ...n,
          totalPages: t.totalPages,
          totalCount: t.totalCount,
        })),
    },
  })),
  Nh = () => ba(Ph((e) => e.currentPage)),
  Bg = () =>
    ba(Ph((e) => ({ totalPages: e.totalPages, totalCount: e.totalCount }))),
  jh = () => ba((e) => e.actions),
  Wg = () => {
    const e = Nh(),
      { setCurrentPage: t } = jh(),
      { totalPages: n } = Bg();
    if (n <= 1) return null;
    const r = () => {
      const i = [],
        s = [];
      for (let o = Math.max(2, e - 2); o <= Math.min(n - 1, e + 2); o++)
        i.push(o);
      return (
        e - 2 > 2 ? s.push(1, '...') : s.push(1),
        s.push(...i),
        e + 2 < n - 1 ? s.push('...', n) : s.push(n),
        s
      );
    };
    return y.jsxs('div', {
      className: 'flex justify-center items-center mt-8 gap-2',
      children: [
        y.jsxs('button', {
          onClick: () => t(e - 1),
          disabled: e === 1,
          className:
            'inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors',
          children: [y.jsx(Qv, { className: 'w-4 h-4' }), 'Previous'],
        }),
        y.jsx('div', {
          className: 'flex items-center gap-1',
          children: r().map((l, i) =>
            y.jsx(
              'button',
              {
                onClick: () => typeof l == 'number' && t(l),
                disabled: l === '...',
                className: `px-3 py-2 text-sm font-medium rounded-lg transition-colors ${l === e ? 'bg-blue-600 text-white' : l === '...' ? 'text-gray-400 cursor-default' : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-700'} disabled:cursor-not-allowed`,
                children: l,
              },
              i
            )
          ),
        }),
        y.jsxs('button', {
          'data-testid': 'next',
          onClick: () => t(e + 1),
          disabled: e === n,
          className:
            'inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors',
          children: ['Next', y.jsx(Bv, { className: 'w-4 h-4' })],
        }),
      ],
    });
  };
var Pl = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Rn = typeof window > 'u' || 'Deno' in globalThis;
function Pe() {}
function Vg(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function Fo(e) {
  return typeof e == 'number' && e >= 0 && e !== 1 / 0;
}
function Rh(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Xt(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function Ue(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function Sc(e, t) {
  const {
    type: n = 'all',
    exact: r,
    fetchStatus: l,
    predicate: i,
    queryKey: s,
    stale: o,
  } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== qa(s, t.options)) return !1;
    } else if (!dl(t.queryKey, s)) return !1;
  }
  if (n !== 'all') {
    const a = t.isActive();
    if ((n === 'active' && !a) || (n === 'inactive' && a)) return !1;
  }
  return !(
    (typeof o == 'boolean' && t.isStale() !== o) ||
    (l && l !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function Cc(e, t) {
  const { exact: n, status: r, predicate: l, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (fl(t.options.mutationKey) !== fl(i)) return !1;
    } else if (!dl(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (l && !l(t)));
}
function qa(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || fl)(e);
}
function fl(e) {
  return JSON.stringify(e, (t, n) =>
    Do(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, l) => ((r[l] = n[l]), r), {})
      : n
  );
}
function dl(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == 'object' && typeof t == 'object'
        ? Object.keys(t).every((n) => dl(e[n], t[n]))
        : !1;
}
function _h(e, t) {
  if (e === t) return e;
  const n = Ec(e) && Ec(t);
  if (n || (Do(e) && Do(t))) {
    const r = n ? e : Object.keys(e),
      l = r.length,
      i = n ? t : Object.keys(t),
      s = i.length,
      o = n ? [] : {},
      a = new Set(r);
    let u = 0;
    for (let m = 0; m < s; m++) {
      const p = n ? m : i[m];
      ((!n && a.has(p)) || n) && e[p] === void 0 && t[p] === void 0
        ? ((o[p] = void 0), u++)
        : ((o[p] = _h(e[p], t[p])), o[p] === e[p] && e[p] !== void 0 && u++);
    }
    return l === s && u === l ? e : o;
  }
  return t;
}
function Io(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function Ec(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Do(e) {
  if (!Pc(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !Pc(n) ||
    !n.hasOwnProperty('isPrototypeOf') ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Pc(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function Kg(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function zo(e, t, n) {
  return typeof n.structuralSharing == 'function'
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
      ? _h(e, t)
      : t;
}
function bg(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function qg(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Ga = Symbol();
function Th(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Ga
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function Gg(e, t) {
  return typeof e == 'function' ? e(...t) : !!e;
}
var dn,
  Mt,
  Zn,
  Lc,
  Yg =
    ((Lc = class extends Pl {
      constructor() {
        super();
        F(this, dn);
        F(this, Mt);
        F(this, Zn);
        T(this, Zn, (t) => {
          if (!Rn && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener('visibilitychange', n, !1),
              () => {
                window.removeEventListener('visibilitychange', n);
              }
            );
          }
        });
      }
      onSubscribe() {
        v(this, Mt) || this.setEventListener(v(this, Zn));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = v(this, Mt)) == null || t.call(this), T(this, Mt, void 0));
      }
      setEventListener(t) {
        var n;
        (T(this, Zn, t),
          (n = v(this, Mt)) == null || n.call(this),
          T(
            this,
            Mt,
            t((r) => {
              typeof r == 'boolean' ? this.setFocused(r) : this.onFocus();
            })
          ));
      }
      setFocused(t) {
        v(this, dn) !== t && (T(this, dn, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof v(this, dn) == 'boolean'
          ? v(this, dn)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              'hidden';
      }
    }),
    (dn = new WeakMap()),
    (Mt = new WeakMap()),
    (Zn = new WeakMap()),
    Lc),
  Ya = new Yg(),
  Jn,
  Ft,
  er,
  Oc,
  Xg =
    ((Oc = class extends Pl {
      constructor() {
        super();
        F(this, Jn, !0);
        F(this, Ft);
        F(this, er);
        T(this, er, (t) => {
          if (!Rn && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener('online', n, !1),
              window.addEventListener('offline', r, !1),
              () => {
                (window.removeEventListener('online', n),
                  window.removeEventListener('offline', r));
              }
            );
          }
        });
      }
      onSubscribe() {
        v(this, Ft) || this.setEventListener(v(this, er));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = v(this, Ft)) == null || t.call(this), T(this, Ft, void 0));
      }
      setEventListener(t) {
        var n;
        (T(this, er, t),
          (n = v(this, Ft)) == null || n.call(this),
          T(this, Ft, t(this.setOnline.bind(this))));
      }
      setOnline(t) {
        v(this, Jn) !== t &&
          (T(this, Jn, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return v(this, Jn);
      }
    }),
    (Jn = new WeakMap()),
    (Ft = new WeakMap()),
    (er = new WeakMap()),
    Oc),
  Di = new Xg();
function $o() {
  let e, t;
  const n = new Promise((l, i) => {
    ((e = l), (t = i));
  });
  ((n.status = 'pending'), n.catch(() => {}));
  function r(l) {
    (Object.assign(n, l), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (l) => {
      (r({ status: 'fulfilled', value: l }), e(l));
    }),
    (n.reject = (l) => {
      (r({ status: 'rejected', reason: l }), t(l));
    }),
    n
  );
}
function Zg(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Lh(e) {
  return (e ?? 'online') === 'online' ? Di.isOnline() : !0;
}
var Oh = class extends Error {
  constructor(e) {
    (super('CancelledError'),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent));
  }
};
function Is(e) {
  return e instanceof Oh;
}
function Mh(e) {
  let t = !1,
    n = 0,
    r = !1,
    l;
  const i = $o(),
    s = (g) => {
      var C;
      r || (d(new Oh(g)), (C = e.abort) == null || C.call(e));
    },
    o = () => {
      t = !0;
    },
    a = () => {
      t = !1;
    },
    u = () =>
      Ya.isFocused() &&
      (e.networkMode === 'always' || Di.isOnline()) &&
      e.canRun(),
    m = () => Lh(e.networkMode) && e.canRun(),
    p = (g) => {
      var C;
      r ||
        ((r = !0),
        (C = e.onSuccess) == null || C.call(e, g),
        l == null || l(),
        i.resolve(g));
    },
    d = (g) => {
      var C;
      r ||
        ((r = !0),
        (C = e.onError) == null || C.call(e, g),
        l == null || l(),
        i.reject(g));
    },
    x = () =>
      new Promise((g) => {
        var C;
        ((l = (f) => {
          (r || u()) && g(f);
        }),
          (C = e.onPause) == null || C.call(e));
      }).then(() => {
        var g;
        ((l = void 0), r || (g = e.onContinue) == null || g.call(e));
      }),
    w = () => {
      if (r) return;
      let g;
      const C = n === 0 ? e.initialPromise : void 0;
      try {
        g = C ?? e.fn();
      } catch (f) {
        g = Promise.reject(f);
      }
      Promise.resolve(g)
        .then(p)
        .catch((f) => {
          var P;
          if (r) return;
          const c = e.retry ?? (Rn ? 0 : 3),
            h = e.retryDelay ?? Zg,
            k = typeof h == 'function' ? h(n, f) : h,
            E =
              c === !0 ||
              (typeof c == 'number' && n < c) ||
              (typeof c == 'function' && c(n, f));
          if (t || !E) {
            d(f);
            return;
          }
          (n++,
            (P = e.onFail) == null || P.call(e, n, f),
            Kg(k)
              .then(() => (u() ? void 0 : x()))
              .then(() => {
                t ? d(f) : w();
              }));
        });
    };
  return {
    promise: i,
    cancel: s,
    continue: () => (l == null || l(), i),
    cancelRetry: o,
    continueRetry: a,
    canStart: m,
    start: () => (m() ? w() : x().then(w), i),
  };
}
var Jg = (e) => setTimeout(e, 0);
function e0() {
  let e = [],
    t = 0,
    n = (o) => {
      o();
    },
    r = (o) => {
      o();
    },
    l = Jg;
  const i = (o) => {
      t
        ? e.push(o)
        : l(() => {
            n(o);
          });
    },
    s = () => {
      const o = e;
      ((e = []),
        o.length &&
          l(() => {
            r(() => {
              o.forEach((a) => {
                n(a);
              });
            });
          }));
    };
  return {
    batch: (o) => {
      let a;
      t++;
      try {
        a = o();
      } finally {
        (t--, t || s());
      }
      return a;
    },
    batchCalls:
      (o) =>
      (...a) => {
        i(() => {
          o(...a);
        });
      },
    schedule: i,
    setNotifyFunction: (o) => {
      n = o;
    },
    setBatchNotifyFunction: (o) => {
      r = o;
    },
    setScheduler: (o) => {
      l = o;
    },
  };
}
var ce = e0(),
  hn,
  Mc,
  Fh =
    ((Mc = class {
      constructor() {
        F(this, hn);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        (this.clearGcTimeout(),
          Fo(this.gcTime) &&
            T(
              this,
              hn,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            ));
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (Rn ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        v(this, hn) && (clearTimeout(v(this, hn)), T(this, hn, void 0));
      }
    }),
    (hn = new WeakMap()),
    Mc),
  tr,
  pn,
  $e,
  mn,
  me,
  hl,
  yn,
  qe,
  dt,
  Fc,
  t0 =
    ((Fc = class extends Fh {
      constructor(t) {
        super();
        F(this, qe);
        F(this, tr);
        F(this, pn);
        F(this, $e);
        F(this, mn);
        F(this, me);
        F(this, hl);
        F(this, yn);
        (T(this, yn, !1),
          T(this, hl, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          T(this, mn, t.client),
          T(this, $e, v(this, mn).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          T(this, tr, n0(this.options)),
          (this.state = t.state ?? v(this, tr)),
          this.scheduleGc());
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = v(this, me)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        ((this.options = { ...v(this, hl), ...t }),
          this.updateGcTime(this.options.gcTime));
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === 'idle' &&
          v(this, $e).remove(this);
      }
      setData(t, n) {
        const r = zo(this.state.data, t, this.options);
        return (
          $(this, qe, dt).call(this, {
            data: r,
            type: 'success',
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        $(this, qe, dt).call(this, {
          type: 'setState',
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, l;
        const n = (r = v(this, me)) == null ? void 0 : r.promise;
        return (
          (l = v(this, me)) == null || l.cancel(t),
          n ? n.then(Pe).catch(Pe) : Promise.resolve()
        );
      }
      destroy() {
        (super.destroy(), this.cancel({ silent: !0 }));
      }
      reset() {
        (this.destroy(), this.setState(v(this, tr)));
      }
      isActive() {
        return this.observers.some((t) => Ue(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Ga ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => Xt(t.options.staleTime, this) === 'static'
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === 'static'
            ? !1
            : this.state.isInvalidated
              ? !0
              : !Rh(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = v(this, me)) == null || n.continue());
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = v(this, me)) == null || n.continue());
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          v(this, $e).notify({
            type: 'observerAdded',
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (v(this, me) &&
              (v(this, yn)
                ? v(this, me).cancel({ revert: !0 })
                : v(this, me).cancelRetry()),
            this.scheduleGc()),
          v(this, $e).notify({
            type: 'observerRemoved',
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          $(this, qe, dt).call(this, { type: 'invalidate' });
      }
      fetch(t, n) {
        var u, m, p;
        if (this.state.fetchStatus !== 'idle') {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (v(this, me))
            return (v(this, me).continueRetry(), v(this, me).promise);
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const d = this.observers.find((x) => x.options.queryFn);
          d && this.setOptions(d.options);
        }
        const r = new AbortController(),
          l = (d) => {
            Object.defineProperty(d, 'signal', {
              enumerable: !0,
              get: () => (T(this, yn, !0), r.signal),
            });
          },
          i = () => {
            const d = Th(this.options, n),
              w = (() => {
                const g = {
                  client: v(this, mn),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return (l(g), g);
              })();
            return (
              T(this, yn, !1),
              this.options.persister ? this.options.persister(d, w, this) : d(w)
            );
          },
          o = (() => {
            const d = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: v(this, mn),
              state: this.state,
              fetchFn: i,
            };
            return (l(d), d);
          })();
        ((u = this.options.behavior) == null || u.onFetch(o, this),
          T(this, pn, this.state),
          (this.state.fetchStatus === 'idle' ||
            this.state.fetchMeta !==
              ((m = o.fetchOptions) == null ? void 0 : m.meta)) &&
            $(this, qe, dt).call(this, {
              type: 'fetch',
              meta: (p = o.fetchOptions) == null ? void 0 : p.meta,
            }));
        const a = (d) => {
          var x, w, g, C;
          ((Is(d) && d.silent) ||
            $(this, qe, dt).call(this, { type: 'error', error: d }),
            Is(d) ||
              ((w = (x = v(this, $e).config).onError) == null ||
                w.call(x, d, this),
              (C = (g = v(this, $e).config).onSettled) == null ||
                C.call(g, this.state.data, d, this)),
            this.scheduleGc());
        };
        return (
          T(
            this,
            me,
            Mh({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: o.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (d) => {
                var x, w, g, C;
                if (d === void 0) {
                  a(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(d);
                } catch (f) {
                  a(f);
                  return;
                }
                ((w = (x = v(this, $e).config).onSuccess) == null ||
                  w.call(x, d, this),
                  (C = (g = v(this, $e).config).onSettled) == null ||
                    C.call(g, d, this.state.error, this),
                  this.scheduleGc());
              },
              onError: a,
              onFail: (d, x) => {
                $(this, qe, dt).call(this, {
                  type: 'failed',
                  failureCount: d,
                  error: x,
                });
              },
              onPause: () => {
                $(this, qe, dt).call(this, { type: 'pause' });
              },
              onContinue: () => {
                $(this, qe, dt).call(this, { type: 'continue' });
              },
              retry: o.options.retry,
              retryDelay: o.options.retryDelay,
              networkMode: o.options.networkMode,
              canRun: () => !0,
            })
          ),
          v(this, me).start()
        );
      }
    }),
    (tr = new WeakMap()),
    (pn = new WeakMap()),
    ($e = new WeakMap()),
    (mn = new WeakMap()),
    (me = new WeakMap()),
    (hl = new WeakMap()),
    (yn = new WeakMap()),
    (qe = new WeakSet()),
    (dt = function (t) {
      const n = (r) => {
        switch (t.type) {
          case 'failed':
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case 'pause':
            return { ...r, fetchStatus: 'paused' };
          case 'continue':
            return { ...r, fetchStatus: 'fetching' };
          case 'fetch':
            return {
              ...r,
              ...Ih(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case 'success':
            return (
              T(this, pn, void 0),
              {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: 'success',
                ...(!t.manual && {
                  fetchStatus: 'idle',
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case 'error':
            const l = t.error;
            return Is(l) && l.revert && v(this, pn)
              ? { ...v(this, pn), fetchStatus: 'idle' }
              : {
                  ...r,
                  error: l,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: l,
                  fetchStatus: 'idle',
                  status: 'error',
                };
          case 'invalidate':
            return { ...r, isInvalidated: !0 };
          case 'setState':
            return { ...r, ...t.state };
        }
      };
      ((this.state = n(this.state)),
        ce.batch(() => {
          (this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            v(this, $e).notify({ query: this, type: 'updated', action: t }));
        }));
    }),
    Fc);
function Ih(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Lh(t.networkMode) ? 'fetching' : 'paused',
    ...(e === void 0 && { error: null, status: 'pending' }),
  };
}
function n0(e) {
  const t =
      typeof e.initialData == 'function' ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == 'function'
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? 'success' : 'pending',
    fetchStatus: 'idle',
  };
}
var lt,
  Ic,
  r0 =
    ((Ic = class extends Pl {
      constructor(t = {}) {
        super();
        F(this, lt);
        ((this.config = t), T(this, lt, new Map()));
      }
      build(t, n, r) {
        const l = n.queryKey,
          i = n.queryHash ?? qa(l, n);
        let s = this.get(i);
        return (
          s ||
            ((s = new t0({
              client: t,
              queryKey: l,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(l),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        v(this, lt).has(t.queryHash) ||
          (v(this, lt).set(t.queryHash, t),
          this.notify({ type: 'added', query: t }));
      }
      remove(t) {
        const n = v(this, lt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && v(this, lt).delete(t.queryHash),
          this.notify({ type: 'removed', query: t }));
      }
      clear() {
        ce.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return v(this, lt).get(t);
      }
      getAll() {
        return [...v(this, lt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Sc(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => Sc(t, r)) : n;
      }
      notify(t) {
        ce.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        ce.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        ce.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (lt = new WeakMap()),
    Ic),
  it,
  ge,
  vn,
  st,
  Rt,
  Dc,
  l0 =
    ((Dc = class extends Fh {
      constructor(t) {
        super();
        F(this, st);
        F(this, it);
        F(this, ge);
        F(this, vn);
        ((this.mutationId = t.mutationId),
          T(this, ge, t.mutationCache),
          T(this, it, []),
          (this.state = t.state || i0()),
          this.setOptions(t.options),
          this.scheduleGc());
      }
      setOptions(t) {
        ((this.options = t), this.updateGcTime(this.options.gcTime));
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        v(this, it).includes(t) ||
          (v(this, it).push(t),
          this.clearGcTimeout(),
          v(this, ge).notify({
            type: 'observerAdded',
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        (T(
          this,
          it,
          v(this, it).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          v(this, ge).notify({
            type: 'observerRemoved',
            mutation: this,
            observer: t,
          }));
      }
      optionalRemove() {
        v(this, it).length ||
          (this.state.status === 'pending'
            ? this.scheduleGc()
            : v(this, ge).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = v(this, vn)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var i, s, o, a, u, m, p, d, x, w, g, C, f, c, h, k, E, P, R, j;
        const n = () => {
          $(this, st, Rt).call(this, { type: 'continue' });
        };
        T(
          this,
          vn,
          Mh({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error('No mutationFn found')),
            onFail: (M, O) => {
              $(this, st, Rt).call(this, {
                type: 'failed',
                failureCount: M,
                error: O,
              });
            },
            onPause: () => {
              $(this, st, Rt).call(this, { type: 'pause' });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => v(this, ge).canRun(this),
          })
        );
        const r = this.state.status === 'pending',
          l = !v(this, vn).canStart();
        try {
          if (r) n();
          else {
            ($(this, st, Rt).call(this, {
              type: 'pending',
              variables: t,
              isPaused: l,
            }),
              await ((s = (i = v(this, ge).config).onMutate) == null
                ? void 0
                : s.call(i, t, this)));
            const O = await ((a = (o = this.options).onMutate) == null
              ? void 0
              : a.call(o, t));
            O !== this.state.context &&
              $(this, st, Rt).call(this, {
                type: 'pending',
                context: O,
                variables: t,
                isPaused: l,
              });
          }
          const M = await v(this, vn).start();
          return (
            await ((m = (u = v(this, ge).config).onSuccess) == null
              ? void 0
              : m.call(u, M, t, this.state.context, this)),
            await ((d = (p = this.options).onSuccess) == null
              ? void 0
              : d.call(p, M, t, this.state.context)),
            await ((w = (x = v(this, ge).config).onSettled) == null
              ? void 0
              : w.call(
                  x,
                  M,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((C = (g = this.options).onSettled) == null
              ? void 0
              : C.call(g, M, null, t, this.state.context)),
            $(this, st, Rt).call(this, { type: 'success', data: M }),
            M
          );
        } catch (M) {
          try {
            throw (
              await ((c = (f = v(this, ge).config).onError) == null
                ? void 0
                : c.call(f, M, t, this.state.context, this)),
              await ((k = (h = this.options).onError) == null
                ? void 0
                : k.call(h, M, t, this.state.context)),
              await ((P = (E = v(this, ge).config).onSettled) == null
                ? void 0
                : P.call(
                    E,
                    void 0,
                    M,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((j = (R = this.options).onSettled) == null
                ? void 0
                : j.call(R, void 0, M, t, this.state.context)),
              M
            );
          } finally {
            $(this, st, Rt).call(this, { type: 'error', error: M });
          }
        } finally {
          v(this, ge).runNext(this);
        }
      }
    }),
    (it = new WeakMap()),
    (ge = new WeakMap()),
    (vn = new WeakMap()),
    (st = new WeakSet()),
    (Rt = function (t) {
      const n = (r) => {
        switch (t.type) {
          case 'failed':
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case 'pause':
            return { ...r, isPaused: !0 };
          case 'continue':
            return { ...r, isPaused: !1 };
          case 'pending':
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: 'pending',
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case 'success':
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: 'success',
              isPaused: !1,
            };
          case 'error':
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: 'error',
            };
        }
      };
      ((this.state = n(this.state)),
        ce.batch(() => {
          (v(this, it).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            v(this, ge).notify({ mutation: this, type: 'updated', action: t }));
        }));
    }),
    Dc);
function i0() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: 'idle',
    variables: void 0,
    submittedAt: 0,
  };
}
var mt,
  Ge,
  pl,
  zc,
  s0 =
    ((zc = class extends Pl {
      constructor(t = {}) {
        super();
        F(this, mt);
        F(this, Ge);
        F(this, pl);
        ((this.config = t),
          T(this, mt, new Set()),
          T(this, Ge, new Map()),
          T(this, pl, 0));
      }
      build(t, n, r) {
        const l = new l0({
          mutationCache: this,
          mutationId: ++Rl(this, pl)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return (this.add(l), l);
      }
      add(t) {
        v(this, mt).add(t);
        const n = bl(t);
        if (typeof n == 'string') {
          const r = v(this, Ge).get(n);
          r ? r.push(t) : v(this, Ge).set(n, [t]);
        }
        this.notify({ type: 'added', mutation: t });
      }
      remove(t) {
        if (v(this, mt).delete(t)) {
          const n = bl(t);
          if (typeof n == 'string') {
            const r = v(this, Ge).get(n);
            if (r)
              if (r.length > 1) {
                const l = r.indexOf(t);
                l !== -1 && r.splice(l, 1);
              } else r[0] === t && v(this, Ge).delete(n);
          }
        }
        this.notify({ type: 'removed', mutation: t });
      }
      canRun(t) {
        const n = bl(t);
        if (typeof n == 'string') {
          const r = v(this, Ge).get(n),
            l =
              r == null ? void 0 : r.find((i) => i.state.status === 'pending');
          return !l || l === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = bl(t);
        if (typeof n == 'string') {
          const l =
            (r = v(this, Ge).get(n)) == null
              ? void 0
              : r.find((i) => i !== t && i.state.isPaused);
          return (l == null ? void 0 : l.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        ce.batch(() => {
          (v(this, mt).forEach((t) => {
            this.notify({ type: 'removed', mutation: t });
          }),
            v(this, mt).clear(),
            v(this, Ge).clear());
        });
      }
      getAll() {
        return Array.from(v(this, mt));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Cc(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Cc(t, n));
      }
      notify(t) {
        ce.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return ce.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(Pe)))
        );
      }
    }),
    (mt = new WeakMap()),
    (Ge = new WeakMap()),
    (pl = new WeakMap()),
    zc);
function bl(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function Nc(e) {
  return {
    onFetch: (t, n) => {
      var m, p, d, x, w;
      const r = t.options,
        l =
          (d =
            (p = (m = t.fetchOptions) == null ? void 0 : m.meta) == null
              ? void 0
              : p.fetchMore) == null
            ? void 0
            : d.direction,
        i = ((x = t.state.data) == null ? void 0 : x.pages) || [],
        s = ((w = t.state.data) == null ? void 0 : w.pageParams) || [];
      let o = { pages: [], pageParams: [] },
        a = 0;
      const u = async () => {
        let g = !1;
        const C = (h) => {
            Object.defineProperty(h, 'signal', {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (g = !0)
                  : t.signal.addEventListener('abort', () => {
                      g = !0;
                    }),
                t.signal
              ),
            });
          },
          f = Th(t.options, t.fetchOptions),
          c = async (h, k, E) => {
            if (g) return Promise.reject();
            if (k == null && h.pages.length) return Promise.resolve(h);
            const R = (() => {
                const X = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: k,
                  direction: E ? 'backward' : 'forward',
                  meta: t.options.meta,
                };
                return (C(X), X);
              })(),
              j = await f(R),
              { maxPages: M } = t.options,
              O = E ? qg : bg;
            return {
              pages: O(h.pages, j, M),
              pageParams: O(h.pageParams, k, M),
            };
          };
        if (l && i.length) {
          const h = l === 'backward',
            k = h ? o0 : jc,
            E = { pages: i, pageParams: s },
            P = k(r, E);
          o = await c(E, P, h);
        } else {
          const h = e ?? i.length;
          do {
            const k = a === 0 ? (s[0] ?? r.initialPageParam) : jc(r, o);
            if (a > 0 && k == null) break;
            ((o = await c(o, k)), a++);
          } while (a < h);
        }
        return o;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var g, C;
            return (C = (g = t.options).persister) == null
              ? void 0
              : C.call(
                  g,
                  u,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function jc(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function o0(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var Z,
  It,
  Dt,
  nr,
  rr,
  zt,
  lr,
  ir,
  $c,
  a0 =
    (($c = class {
      constructor(e = {}) {
        F(this, Z);
        F(this, It);
        F(this, Dt);
        F(this, nr);
        F(this, rr);
        F(this, zt);
        F(this, lr);
        F(this, ir);
        (T(this, Z, e.queryCache || new r0()),
          T(this, It, e.mutationCache || new s0()),
          T(this, Dt, e.defaultOptions || {}),
          T(this, nr, new Map()),
          T(this, rr, new Map()),
          T(this, zt, 0));
      }
      mount() {
        (Rl(this, zt)._++,
          v(this, zt) === 1 &&
            (T(
              this,
              lr,
              Ya.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), v(this, Z).onFocus());
              })
            ),
            T(
              this,
              ir,
              Di.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), v(this, Z).onOnline());
              })
            )));
      }
      unmount() {
        var e, t;
        (Rl(this, zt)._--,
          v(this, zt) === 0 &&
            ((e = v(this, lr)) == null || e.call(this),
            T(this, lr, void 0),
            (t = v(this, ir)) == null || t.call(this),
            T(this, ir, void 0)));
      }
      isFetching(e) {
        return v(this, Z).findAll({ ...e, fetchStatus: 'fetching' }).length;
      }
      isMutating(e) {
        return v(this, It).findAll({ ...e, status: 'pending' }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = v(this, Z).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = v(this, Z).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(Xt(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return v(this, Z)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          l = v(this, Z).get(r.queryHash),
          i = l == null ? void 0 : l.state.data,
          s = Vg(t, i);
        if (s !== void 0)
          return v(this, Z)
            .build(this, r)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return ce.batch(() =>
          v(this, Z)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = v(this, Z).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = v(this, Z);
        ce.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = v(this, Z);
        return ce.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: 'active', ...e }, t)
          )
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = ce.batch(() =>
            v(this, Z)
              .findAll(e)
              .map((l) => l.cancel(n))
          );
        return Promise.all(r).then(Pe).catch(Pe);
      }
      invalidateQueries(e, t = {}) {
        return ce.batch(
          () => (
            v(this, Z)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === 'none'
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      'active',
                  },
                  t
                )
          )
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = ce.batch(() =>
            v(this, Z)
              .findAll(e)
              .filter((l) => !l.isDisabled() && !l.isStatic())
              .map((l) => {
                let i = l.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(Pe)),
                  l.state.fetchStatus === 'paused' ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(r).then(Pe);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = v(this, Z).build(this, t);
        return n.isStaleByTime(Xt(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(Pe).catch(Pe);
      }
      fetchInfiniteQuery(e) {
        return ((e.behavior = Nc(e.pages)), this.fetchQuery(e));
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Pe).catch(Pe);
      }
      ensureInfiniteQueryData(e) {
        return ((e.behavior = Nc(e.pages)), this.ensureQueryData(e));
      }
      resumePausedMutations() {
        return Di.isOnline()
          ? v(this, It).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return v(this, Z);
      }
      getMutationCache() {
        return v(this, It);
      }
      getDefaultOptions() {
        return v(this, Dt);
      }
      setDefaultOptions(e) {
        T(this, Dt, e);
      }
      setQueryDefaults(e, t) {
        v(this, nr).set(fl(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...v(this, nr).values()],
          n = {};
        return (
          t.forEach((r) => {
            dl(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        v(this, rr).set(fl(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...v(this, rr).values()],
          n = {};
        return (
          t.forEach((r) => {
            dl(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...v(this, Dt).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = qa(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== 'always'),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = 'offlineFirst'),
          t.queryFn === Ga && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...v(this, Dt).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        (v(this, Z).clear(), v(this, It).clear());
      }
    }),
    (Z = new WeakMap()),
    (It = new WeakMap()),
    (Dt = new WeakMap()),
    (nr = new WeakMap()),
    (rr = new WeakMap()),
    (zt = new WeakMap()),
    (lr = new WeakMap()),
    (ir = new WeakMap()),
    $c),
  Ee,
  U,
  ml,
  xe,
  gn,
  sr,
  $t,
  Ut,
  yl,
  or,
  ar,
  xn,
  wn,
  At,
  ur,
  H,
  Dr,
  Uo,
  Ao,
  Ho,
  Qo,
  Bo,
  Wo,
  Vo,
  Dh,
  Uc,
  u0 =
    ((Uc = class extends Pl {
      constructor(t, n) {
        super();
        F(this, H);
        F(this, Ee);
        F(this, U);
        F(this, ml);
        F(this, xe);
        F(this, gn);
        F(this, sr);
        F(this, $t);
        F(this, Ut);
        F(this, yl);
        F(this, or);
        F(this, ar);
        F(this, xn);
        F(this, wn);
        F(this, At);
        F(this, ur, new Set());
        ((this.options = n),
          T(this, Ee, t),
          T(this, Ut, null),
          T(this, $t, $o()),
          this.options.experimental_prefetchInRender ||
            v(this, $t).reject(
              new Error(
                'experimental_prefetchInRender feature flag is not enabled'
              )
            ),
          this.bindMethods(),
          this.setOptions(n));
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (v(this, U).addObserver(this),
          Rc(v(this, U), this.options)
            ? $(this, H, Dr).call(this)
            : this.updateResult(),
          $(this, H, Qo).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return Ko(v(this, U), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return Ko(v(this, U), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        ((this.listeners = new Set()),
          $(this, H, Bo).call(this),
          $(this, H, Wo).call(this),
          v(this, U).removeObserver(this));
      }
      setOptions(t) {
        const n = this.options,
          r = v(this, U);
        if (
          ((this.options = v(this, Ee).defaultQueryOptions(t)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != 'boolean' &&
            typeof this.options.enabled != 'function' &&
            typeof Ue(this.options.enabled, v(this, U)) != 'boolean')
        )
          throw new Error(
            'Expected enabled to be a boolean or a callback that returns a boolean'
          );
        ($(this, H, Vo).call(this),
          v(this, U).setOptions(this.options),
          n._defaulted &&
            !Io(this.options, n) &&
            v(this, Ee)
              .getQueryCache()
              .notify({
                type: 'observerOptionsUpdated',
                query: v(this, U),
                observer: this,
              }));
        const l = this.hasListeners();
        (l && _c(v(this, U), r, this.options, n) && $(this, H, Dr).call(this),
          this.updateResult(),
          l &&
            (v(this, U) !== r ||
              Ue(this.options.enabled, v(this, U)) !==
                Ue(n.enabled, v(this, U)) ||
              Xt(this.options.staleTime, v(this, U)) !==
                Xt(n.staleTime, v(this, U))) &&
            $(this, H, Uo).call(this));
        const i = $(this, H, Ao).call(this);
        l &&
          (v(this, U) !== r ||
            Ue(this.options.enabled, v(this, U)) !==
              Ue(n.enabled, v(this, U)) ||
            i !== v(this, At)) &&
          $(this, H, Ho).call(this, i);
      }
      getOptimisticResult(t) {
        const n = v(this, Ee).getQueryCache().build(v(this, Ee), t),
          r = this.createResult(n, t);
        return (
          f0(this, r) &&
            (T(this, xe, r),
            T(this, sr, this.options),
            T(this, gn, v(this, U).state)),
          r
        );
      }
      getCurrentResult() {
        return v(this, xe);
      }
      trackResult(t, n) {
        return new Proxy(t, {
          get: (r, l) => (
            this.trackProp(l),
            n == null || n(l),
            Reflect.get(r, l)
          ),
        });
      }
      trackProp(t) {
        v(this, ur).add(t);
      }
      getCurrentQuery() {
        return v(this, U);
      }
      refetch({ ...t } = {}) {
        return this.fetch({ ...t });
      }
      fetchOptimistic(t) {
        const n = v(this, Ee).defaultQueryOptions(t),
          r = v(this, Ee).getQueryCache().build(v(this, Ee), n);
        return r.fetch().then(() => this.createResult(r, n));
      }
      fetch(t) {
        return $(this, H, Dr)
          .call(this, { ...t, cancelRefetch: t.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), v(this, xe)));
      }
      createResult(t, n) {
        var M;
        const r = v(this, U),
          l = this.options,
          i = v(this, xe),
          s = v(this, gn),
          o = v(this, sr),
          u = t !== r ? t.state : v(this, ml),
          { state: m } = t;
        let p = { ...m },
          d = !1,
          x;
        if (n._optimisticResults) {
          const O = this.hasListeners(),
            X = !O && Rc(t, n),
            ze = O && _c(t, r, n, l);
          ((X || ze) && (p = { ...p, ...Ih(m.data, t.options) }),
            n._optimisticResults === 'isRestoring' && (p.fetchStatus = 'idle'));
        }
        let { error: w, errorUpdatedAt: g, status: C } = p;
        x = p.data;
        let f = !1;
        if (n.placeholderData !== void 0 && x === void 0 && C === 'pending') {
          let O;
          (i != null &&
          i.isPlaceholderData &&
          n.placeholderData === (o == null ? void 0 : o.placeholderData)
            ? ((O = i.data), (f = !0))
            : (O =
                typeof n.placeholderData == 'function'
                  ? n.placeholderData(
                      (M = v(this, ar)) == null ? void 0 : M.state.data,
                      v(this, ar)
                    )
                  : n.placeholderData),
            O !== void 0 &&
              ((C = 'success'),
              (x = zo(i == null ? void 0 : i.data, O, n)),
              (d = !0)));
        }
        if (n.select && x !== void 0 && !f)
          if (
            i &&
            x === (s == null ? void 0 : s.data) &&
            n.select === v(this, yl)
          )
            x = v(this, or);
          else
            try {
              (T(this, yl, n.select),
                (x = n.select(x)),
                (x = zo(i == null ? void 0 : i.data, x, n)),
                T(this, or, x),
                T(this, Ut, null));
            } catch (O) {
              T(this, Ut, O);
            }
        v(this, Ut) &&
          ((w = v(this, Ut)),
          (x = v(this, or)),
          (g = Date.now()),
          (C = 'error'));
        const c = p.fetchStatus === 'fetching',
          h = C === 'pending',
          k = C === 'error',
          E = h && c,
          P = x !== void 0,
          j = {
            status: C,
            fetchStatus: p.fetchStatus,
            isPending: h,
            isSuccess: C === 'success',
            isError: k,
            isInitialLoading: E,
            isLoading: E,
            data: x,
            dataUpdatedAt: p.dataUpdatedAt,
            error: w,
            errorUpdatedAt: g,
            failureCount: p.fetchFailureCount,
            failureReason: p.fetchFailureReason,
            errorUpdateCount: p.errorUpdateCount,
            isFetched: p.dataUpdateCount > 0 || p.errorUpdateCount > 0,
            isFetchedAfterMount:
              p.dataUpdateCount > u.dataUpdateCount ||
              p.errorUpdateCount > u.errorUpdateCount,
            isFetching: c,
            isRefetching: c && !h,
            isLoadingError: k && !P,
            isPaused: p.fetchStatus === 'paused',
            isPlaceholderData: d,
            isRefetchError: k && P,
            isStale: Xa(t, n),
            refetch: this.refetch,
            promise: v(this, $t),
            isEnabled: Ue(n.enabled, t) !== !1,
          };
        if (this.options.experimental_prefetchInRender) {
          const O = (tt) => {
              j.status === 'error'
                ? tt.reject(j.error)
                : j.data !== void 0 && tt.resolve(j.data);
            },
            X = () => {
              const tt = T(this, $t, (j.promise = $o()));
              O(tt);
            },
            ze = v(this, $t);
          switch (ze.status) {
            case 'pending':
              t.queryHash === r.queryHash && O(ze);
              break;
            case 'fulfilled':
              (j.status === 'error' || j.data !== ze.value) && X();
              break;
            case 'rejected':
              (j.status !== 'error' || j.error !== ze.reason) && X();
              break;
          }
        }
        return j;
      }
      updateResult() {
        const t = v(this, xe),
          n = this.createResult(v(this, U), this.options);
        if (
          (T(this, gn, v(this, U).state),
          T(this, sr, this.options),
          v(this, gn).data !== void 0 && T(this, ar, v(this, U)),
          Io(n, t))
        )
          return;
        T(this, xe, n);
        const r = () => {
          if (!t) return !0;
          const { notifyOnChangeProps: l } = this.options,
            i = typeof l == 'function' ? l() : l;
          if (i === 'all' || (!i && !v(this, ur).size)) return !0;
          const s = new Set(i ?? v(this, ur));
          return (
            this.options.throwOnError && s.add('error'),
            Object.keys(v(this, xe)).some((o) => {
              const a = o;
              return v(this, xe)[a] !== t[a] && s.has(a);
            })
          );
        };
        $(this, H, Dh).call(this, { listeners: r() });
      }
      onQueryUpdate() {
        (this.updateResult(), this.hasListeners() && $(this, H, Qo).call(this));
      }
    }),
    (Ee = new WeakMap()),
    (U = new WeakMap()),
    (ml = new WeakMap()),
    (xe = new WeakMap()),
    (gn = new WeakMap()),
    (sr = new WeakMap()),
    ($t = new WeakMap()),
    (Ut = new WeakMap()),
    (yl = new WeakMap()),
    (or = new WeakMap()),
    (ar = new WeakMap()),
    (xn = new WeakMap()),
    (wn = new WeakMap()),
    (At = new WeakMap()),
    (ur = new WeakMap()),
    (H = new WeakSet()),
    (Dr = function (t) {
      $(this, H, Vo).call(this);
      let n = v(this, U).fetch(this.options, t);
      return ((t != null && t.throwOnError) || (n = n.catch(Pe)), n);
    }),
    (Uo = function () {
      $(this, H, Bo).call(this);
      const t = Xt(this.options.staleTime, v(this, U));
      if (Rn || v(this, xe).isStale || !Fo(t)) return;
      const r = Rh(v(this, xe).dataUpdatedAt, t) + 1;
      T(
        this,
        xn,
        setTimeout(() => {
          v(this, xe).isStale || this.updateResult();
        }, r)
      );
    }),
    (Ao = function () {
      return (
        (typeof this.options.refetchInterval == 'function'
          ? this.options.refetchInterval(v(this, U))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (Ho = function (t) {
      ($(this, H, Wo).call(this),
        T(this, At, t),
        !(
          Rn ||
          Ue(this.options.enabled, v(this, U)) === !1 ||
          !Fo(v(this, At)) ||
          v(this, At) === 0
        ) &&
          T(
            this,
            wn,
            setInterval(
              () => {
                (this.options.refetchIntervalInBackground || Ya.isFocused()) &&
                  $(this, H, Dr).call(this);
              },
              v(this, At)
            )
          ));
    }),
    (Qo = function () {
      ($(this, H, Uo).call(this),
        $(this, H, Ho).call(this, $(this, H, Ao).call(this)));
    }),
    (Bo = function () {
      v(this, xn) && (clearTimeout(v(this, xn)), T(this, xn, void 0));
    }),
    (Wo = function () {
      v(this, wn) && (clearInterval(v(this, wn)), T(this, wn, void 0));
    }),
    (Vo = function () {
      const t = v(this, Ee).getQueryCache().build(v(this, Ee), this.options);
      if (t === v(this, U)) return;
      const n = v(this, U);
      (T(this, U, t),
        T(this, ml, t.state),
        this.hasListeners() &&
          (n == null || n.removeObserver(this), t.addObserver(this)));
    }),
    (Dh = function (t) {
      ce.batch(() => {
        (t.listeners &&
          this.listeners.forEach((n) => {
            n(v(this, xe));
          }),
          v(this, Ee)
            .getQueryCache()
            .notify({ query: v(this, U), type: 'observerResultsUpdated' }));
      });
    }),
    Uc);
function c0(e, t) {
  return (
    Ue(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === 'error' && t.retryOnMount === !1)
  );
}
function Rc(e, t) {
  return c0(e, t) || (e.state.data !== void 0 && Ko(e, t, t.refetchOnMount));
}
function Ko(e, t, n) {
  if (Ue(t.enabled, e) !== !1 && Xt(t.staleTime, e) !== 'static') {
    const r = typeof n == 'function' ? n(e) : n;
    return r === 'always' || (r !== !1 && Xa(e, t));
  }
  return !1;
}
function _c(e, t, n, r) {
  return (
    (e !== t || Ue(r.enabled, e) === !1) &&
    (!n.suspense || e.state.status !== 'error') &&
    Xa(e, n)
  );
}
function Xa(e, t) {
  return Ue(t.enabled, e) !== !1 && e.isStaleByTime(Xt(t.staleTime, e));
}
function f0(e, t) {
  return !Io(e.getCurrentResult(), t);
}
var zh = S.createContext(void 0),
  d0 = (e) => {
    const t = S.useContext(zh);
    if (!t)
      throw new Error('No QueryClient set, use QueryClientProvider to set one');
    return t;
  },
  h0 = ({ client: e, children: t }) => (
    S.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    y.jsx(zh.Provider, { value: e, children: t })
  ),
  $h = S.createContext(!1),
  p0 = () => S.useContext($h);
$h.Provider;
function m0() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
var y0 = S.createContext(m0()),
  v0 = () => S.useContext(y0),
  g0 = (e, t) => {
    (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  x0 = (e) => {
    S.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  w0 = ({
    result: e,
    errorResetBoundary: t,
    throwOnError: n,
    query: r,
    suspense: l,
  }) =>
    e.isError &&
    !t.isReset() &&
    !e.isFetching &&
    r &&
    ((l && e.data === void 0) || Gg(n, [e.error, r])),
  k0 = (e) => {
    if (e.suspense) {
      const t = (r) => (r === 'static' ? r : Math.max(r ?? 1e3, 1e3)),
        n = e.staleTime;
      ((e.staleTime = typeof n == 'function' ? (...r) => t(n(...r)) : t(n)),
        typeof e.gcTime == 'number' && (e.gcTime = Math.max(e.gcTime, 1e3)));
    }
  },
  S0 = (e, t) => e.isLoading && e.isFetching && !t,
  C0 = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending,
  Tc = (e, t, n) =>
    t.fetchOptimistic(e).catch(() => {
      n.clearReset();
    });
function E0(e, t, n) {
  var p, d, x, w, g;
  const r = p0(),
    l = v0(),
    i = d0(),
    s = i.defaultQueryOptions(e);
  ((d =
    (p = i.getDefaultOptions().queries) == null
      ? void 0
      : p._experimental_beforeQuery) == null || d.call(p, s),
    (s._optimisticResults = r ? 'isRestoring' : 'optimistic'),
    k0(s),
    g0(s, l),
    x0(l));
  const o = !i.getQueryCache().get(s.queryHash),
    [a] = S.useState(() => new t(i, s)),
    u = a.getOptimisticResult(s),
    m = !r && e.subscribed !== !1;
  if (
    (S.useSyncExternalStore(
      S.useCallback(
        (C) => {
          const f = m ? a.subscribe(ce.batchCalls(C)) : Pe;
          return (a.updateResult(), f);
        },
        [a, m]
      ),
      () => a.getCurrentResult(),
      () => a.getCurrentResult()
    ),
    S.useEffect(() => {
      a.setOptions(s);
    }, [s, a]),
    C0(s, u))
  )
    throw Tc(s, a, l);
  if (
    w0({
      result: u,
      errorResetBoundary: l,
      throwOnError: s.throwOnError,
      query: i.getQueryCache().get(s.queryHash),
      suspense: s.suspense,
    })
  )
    throw u.error;
  if (
    ((w =
      (x = i.getDefaultOptions().queries) == null
        ? void 0
        : x._experimental_afterQuery) == null || w.call(x, s, u),
    s.experimental_prefetchInRender && !Rn && S0(u, r))
  ) {
    const C = o
      ? Tc(s, a, l)
      : (g = i.getQueryCache().get(s.queryHash)) == null
        ? void 0
        : g.promise;
    C == null ||
      C.catch(Pe).finally(() => {
        a.updateResult();
      });
  }
  return s.notifyOnChangeProps ? u : a.trackResult(u);
}
function P0(e, t) {
  return E0(e, u0);
}
const N0 = { characters: (e, t = 1) => ['characters', e, t] },
  j0 = 'https://swapi.py4e.com/api/people',
  R0 = async (e, t = 1) => {
    const n = `${j0}/?page=${t}${e ? `&search=${encodeURIComponent(e)}` : ''}`,
      r = await fetch(n);
    if (!r.ok) {
      const l = await _0(r);
      throw r.status >= 400 && r.status < 500
        ? new Error(`Client error (${r.status}): ${l}`)
        : r.status >= 500
          ? new Error(`Server error (${r.status}): ${l}`)
          : new Error(`Unexpected error (${r.status})`);
    }
    return r.json();
  },
  _0 = async (e) => {
    try {
      const t = await e.json();
      return typeof t == 'object' && t !== null && 'detail' in t
        ? String(t.detail)
        : JSON.stringify(t);
    } catch {
      return e.statusText || 'Unknown error';
    }
  },
  T0 = (e, t = 1) => {
    const { shouldFetch: n } = Ka();
    return P0({
      queryKey: N0.characters(e, t),
      queryFn: () => R0(e, t),
      enabled: n,
      retry: 1,
      staleTime: 60 * 1e3,
    });
  },
  Uh = ts((e) => ({
    character: null,
    isOpen: !1,
    openPanel: (t) => e({ character: t, isOpen: !0 }),
    closePanel: () => e({ character: null, isOpen: !1 }),
  })),
  L0 = () => {
    const { character: e, isOpen: t, closePanel: n } = Uh();
    if (!t || !e) return null;
    const r = (i, s) =>
        !i || i.length === 0
          ? null
          : y.jsxs('div', {
              className: 'mb-4',
              children: [
                y.jsx('h4', {
                  className: 'font-semibold text-gray-900 mb-2',
                  children: s,
                }),
                y.jsxs('p', {
                  className: 'text-gray-600 text-sm',
                  children: [i.length, ' ', s.toLowerCase()],
                }),
              ],
            }),
      l = (i, s = 'Unknown') => (i && i !== 'unknown' && i !== 'n/a' ? i : s);
    return y.jsxs(y.Fragment, {
      children: [
        y.jsx('div', {
          className: 'fixed inset-0 bg-black bg-opacity-50 z-40 ',
          onClick: n,
        }),
        y.jsx('div', {
          className: `fixed top-0 right-0 h-full w-full lg:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${t ? 'translate-x-0' : 'translate-x-full'}`,
          onClick: (i) => i.stopPropagation(),
          children: y.jsxs('div', {
            className: 'flex flex-col h-full',
            children: [
              y.jsxs('div', {
                className:
                  'flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-500 to-purple-600',
                children: [
                  y.jsx('h2', {
                    className: 'text-xl font-bold text-white truncate pr-4',
                    children: e.name,
                  }),
                  y.jsx('button', {
                    onClick: n,
                    className:
                      'p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors flex-shrink-0',
                    'aria-label': 'Close details panel',
                    children: y.jsx(xh, { className: 'w-5 h-5 text-white' }),
                  }),
                ],
              }),
              y.jsxs('div', {
                className: 'flex-1 overflow-y-auto p-6',
                children: [
                  y.jsx('div', {
                    className: 'flex justify-center mb-6',
                    children: y.jsx('div', {
                      className:
                        'w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center',
                      children: y.jsx(ui, {
                        className: 'w-10 h-10 text-white',
                      }),
                    }),
                  }),
                  y.jsxs('div', {
                    className: 'space-y-4 mb-6',
                    children: [
                      y.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2',
                        children: 'Basic Information',
                      }),
                      y.jsxs('div', {
                        className: 'grid grid-cols-2 gap-4',
                        children: [
                          y.jsxs('div', {
                            className: 'flex items-center space-x-2',
                            children: [
                              y.jsx(ui, { className: 'w-4 h-4 text-gray-500' }),
                              y.jsxs('div', {
                                children: [
                                  y.jsx('p', {
                                    className:
                                      'text-xs text-gray-500 uppercase tracking-wide',
                                    children: 'Gender',
                                  }),
                                  y.jsx('p', {
                                    className:
                                      'text-sm font-medium text-gray-900',
                                    children: l(e.gender),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          y.jsxs('div', {
                            className: 'flex items-center space-x-2',
                            children: [
                              y.jsx(mh, { className: 'w-4 h-4 text-gray-500' }),
                              y.jsxs('div', {
                                children: [
                                  y.jsx('p', {
                                    className:
                                      'text-xs text-gray-500 uppercase tracking-wide',
                                    children: 'Birth Year',
                                  }),
                                  y.jsx('p', {
                                    className:
                                      'text-sm font-medium text-gray-900',
                                    children: l(e.birth_year),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          y.jsxs('div', {
                            className: 'flex items-center space-x-2',
                            children: [
                              y.jsx(yh, { className: 'w-4 h-4 text-gray-500' }),
                              y.jsxs('div', {
                                children: [
                                  y.jsx('p', {
                                    className:
                                      'text-xs text-gray-500 uppercase tracking-wide',
                                    children: 'Height',
                                  }),
                                  y.jsxs('p', {
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
                          y.jsxs('div', {
                            className: 'flex items-center space-x-2',
                            children: [
                              y.jsx(gh, { className: 'w-4 h-4 text-gray-500' }),
                              y.jsxs('div', {
                                children: [
                                  y.jsx('p', {
                                    className:
                                      'text-xs text-gray-500 uppercase tracking-wide',
                                    children: 'Mass',
                                  }),
                                  y.jsxs('p', {
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
                  y.jsxs('div', {
                    className: 'space-y-4 mb-6',
                    children: [
                      y.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2',
                        children: 'Physical Appearance',
                      }),
                      y.jsxs('div', {
                        className: 'space-y-3',
                        children: [
                          y.jsxs('div', {
                            children: [
                              y.jsx('p', {
                                className:
                                  'text-xs text-gray-500 uppercase tracking-wide mb-1',
                                children: 'Hair Color',
                              }),
                              y.jsx('p', {
                                className: 'text-sm text-gray-900',
                                children: l(e.hair_color),
                              }),
                            ],
                          }),
                          y.jsxs('div', {
                            children: [
                              y.jsx('p', {
                                className:
                                  'text-xs text-gray-500 uppercase tracking-wide mb-1',
                                children: 'Skin Color',
                              }),
                              y.jsx('p', {
                                className: 'text-sm text-gray-900',
                                children: l(e.skin_color),
                              }),
                            ],
                          }),
                          y.jsxs('div', {
                            children: [
                              y.jsx('p', {
                                className:
                                  'text-xs text-gray-500 uppercase tracking-wide mb-1',
                                children: 'Eye Color',
                              }),
                              y.jsx('p', {
                                className: 'text-sm text-gray-900',
                                children: l(e.eye_color),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  y.jsxs('div', {
                    className: 'space-y-4 mb-6',
                    children: [
                      y.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2',
                        children: 'Associations',
                      }),
                      y.jsxs('div', {
                        className: 'space-y-4',
                        children: [
                          y.jsxs('div', {
                            className: 'flex items-center space-x-2',
                            children: [
                              y.jsx(Yv, { className: 'w-4 h-4 text-gray-500' }),
                              y.jsxs('div', {
                                children: [
                                  y.jsx('p', {
                                    className:
                                      'text-xs text-gray-500 uppercase tracking-wide',
                                    children: 'Homeworld',
                                  }),
                                  y.jsx('p', {
                                    className: 'text-sm text-gray-900',
                                    children: e.homeworld ? 'Known' : 'Unknown',
                                  }),
                                ],
                              }),
                            ],
                          }),
                          r(e.films, 'Films') &&
                            y.jsxs('div', {
                              className: 'flex items-center space-x-2',
                              children: [
                                y.jsx(Kv, {
                                  className: 'w-4 h-4 text-gray-500',
                                }),
                                y.jsxs('div', {
                                  children: [
                                    y.jsx('p', {
                                      className:
                                        'text-xs text-gray-500 uppercase tracking-wide',
                                      children: 'Films',
                                    }),
                                    y.jsxs('p', {
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
                            y.jsxs('div', {
                              className: 'flex items-center space-x-2',
                              children: [
                                y.jsx(ui, {
                                  className: 'w-4 h-4 text-gray-500',
                                }),
                                y.jsxs('div', {
                                  children: [
                                    y.jsx('p', {
                                      className:
                                        'text-xs text-gray-500 uppercase tracking-wide',
                                      children: 'Species',
                                    }),
                                    y.jsxs('p', {
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
                            y.jsxs('div', {
                              className: 'flex items-center space-x-2',
                              children: [
                                y.jsx(Jv, {
                                  className: 'w-4 h-4 text-gray-500',
                                }),
                                y.jsxs('div', {
                                  children: [
                                    y.jsx('p', {
                                      className:
                                        'text-xs text-gray-500 uppercase tracking-wide',
                                      children: 'Starships',
                                    }),
                                    y.jsxs('p', {
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
                            y.jsxs('div', {
                              'data-testid': 'vehicle-test',
                              className: 'flex items-center space-x-2',
                              children: [
                                y.jsx(Hv, {
                                  className: 'w-4 h-4 text-gray-500',
                                }),
                                y.jsxs('div', {
                                  children: [
                                    y.jsx('p', {
                                      className:
                                        'text-xs text-gray-500 uppercase tracking-wide',
                                      children: 'Vehicles',
                                    }),
                                    y.jsxs('p', {
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
                  y.jsxs('div', {
                    className: 'space-y-4 pt-4 border-t border-gray-200',
                    children: [
                      y.jsx('h3', {
                        className: 'text-lg font-semibold text-gray-900',
                        children: 'Record Information',
                      }),
                      y.jsxs('div', {
                        className: 'space-y-2 text-xs text-gray-500',
                        children: [
                          y.jsxs('p', {
                            children: [
                              'Created: ',
                              new Date(e.created).toLocaleDateString(),
                            ],
                          }),
                          y.jsxs('p', {
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
  O0 = () => {
    const e = Ch(),
      t = Nh(),
      { updatePaginationData: n } = jh(),
      { openPanel: r } = Uh(),
      { data: l, isLoading: i, isError: s, refetch: o } = T0(e, t);
    return (
      S.useEffect(() => {
        if ((l == null ? void 0 : l.count) != null) {
          const a = Math.ceil(l.count / 10);
          n({ totalPages: a, totalCount: l.count });
        }
      }, [l == null ? void 0 : l.count, n]),
      y.jsx('div', {
        className:
          'flex-1 p-6 bg-gray-50 dark:bg-gray-900 transition-all duration-300',
        children: y.jsxs('div', {
          className: 'max-w-4xl mx-auto',
          children: [
            i && y.jsx(Ug, {}),
            s &&
              y.jsx(Ag, {
                message: 'An error occurred while fetching results.',
                onRetry: o,
              }),
            !i &&
              !s &&
              (l == null ? void 0 : l.count) === 0 &&
              y.jsx('div', {
                className: 'text-center py-12',
                children: y.jsx('p', {
                  className: 'text-gray-500 text-lg dark:text-gray-400',
                  children: 'No characters found. Try a different search term.',
                }),
              }),
            !i &&
              !s &&
              l &&
              (l == null ? void 0 : l.count) > 0 &&
              y.jsxs('div', {
                children: [
                  y.jsx('div', {
                    className: 'mb-6',
                    children: y.jsxs('h2', {
                      className:
                        'text-xl font-semibold text-gray-900 dark:text-white',
                      children: [
                        'Search Results',
                        l.count > 10 &&
                          y.jsxs('span', {
                            className:
                              'text-gray-600 font-normal dark:text-gray-400',
                            children: [
                              ' ',
                              '(',
                              l.count,
                              ' character',
                              l.count !== 1 ? 's' : '',
                              ' found)',
                            ],
                          }),
                      ],
                    }),
                  }),
                  y.jsx('div', {
                    className: 'grid gap-4 md:grid-cols-2 lg:grid-cols-1',
                    children: l.results.map((a) =>
                      y.jsx($g, { character: a, onClick: () => r(a) }, a.url)
                    ),
                  }),
                  y.jsx(L0, {}),
                  y.jsx(Wg, {}),
                ],
              }),
          ],
        }),
      })
    );
  },
  M0 = () => {
    const { selectedItems: e, clearAll: t, getSelectedCount: n } = Eh(),
      r = n();
    if (r === 0) return null;
    const l = () => {
      const s = [
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
          ...e.map((m) =>
            [
              `"${m.name}"`,
              `"${m.height}"`,
              `"${m.mass}"`,
              `"${m.hair_color}"`,
              `"${m.skin_color}"`,
              `"${m.eye_color}"`,
              `"${m.birth_year}"`,
              `"${m.gender}"`,
              `"${m.homeworld}"`,
              m.films.length,
              m.species.length,
              m.vehicles.length,
              m.starships.length,
              `"${m.url}"`,
            ].join(',')
          ),
        ].join(`
`),
        o = new Blob([s], { type: 'text/csv;charset=utf-8;' }),
        a = document.createElement('a'),
        u = URL.createObjectURL(o);
      (a.setAttribute('href', u),
        a.setAttribute('download', `${r}_items.csv`),
        (a.style.visibility = 'hidden'),
        document.body.appendChild(a),
        a.click(),
        document.body.removeChild(a));
    };
    return y.jsx('div', {
      className:
        'fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-30',
      children: y.jsx('div', {
        className: 'max-w-4xl mx-auto px-6 py-4',
        children: y.jsxs('div', {
          className: 'flex items-center justify-between',
          children: [
            y.jsx('div', {
              className: 'flex items-center space-x-4',
              children: y.jsxs('span', {
                className: 'text-sm font-medium text-gray-900',
                children: [r, ' item', r !== 1 ? 's' : '', ' selected'],
              }),
            }),
            y.jsxs('div', {
              className: 'flex items-center space-x-3',
              children: [
                y.jsxs('button', {
                  onClick: t,
                  className:
                    'flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors',
                  children: [
                    y.jsx(xh, { className: 'w-4 h-4' }),
                    y.jsx('span', { children: 'Unselect all' }),
                  ],
                }),
                y.jsxs('button', {
                  onClick: l,
                  className:
                    'flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors',
                  children: [
                    y.jsx(Wv, { className: 'w-4 h-4' }),
                    y.jsx('span', { children: 'Download' }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  F0 = () => {
    const e = new Date().getFullYear();
    return y.jsx('div', {
      'data-testid': 'about',
      className:
        'min-h-screen bg-white dark:bg-gray-800 text-center px-6 py-16 dark:text-gray-200 transition-colors',
      children: y.jsxs('div', {
        'data-testid': 'created-by',
        className: 'max-w-2xl mx-auto space-y-6',
        children: [
          y.jsxs('div', {
            className: 'flex items-center justify-center space-x-2',
            children: [
              y.jsx(bv, {
                'data-testid': 'heart-icon',
                className: 'w-5 h-5 text-red-500',
              }),
              y.jsx('p', {
                className: 'text-gray-600 dark:text-gray-300',
                children: 'Created by yours truly',
              }),
            ],
          }),
          y.jsxs('p', {
            className: 'text-sm text-gray-500 dark:text-gray-400',
            children: ['© ', e],
          }),
          y.jsx('div', {
            className: 'flex items-center justify-center space-x-2',
            children: y.jsxs('a', {
              href: 'https://rs.school/courses/reactjs',
              target: '_blank',
              rel: 'noopener noreferrer',
              className:
                'inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors',
              children: [
                y.jsx('span', { children: 'RS School React Course' }),
                y.jsx(Vv, { className: 'w-4 h-4' }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  I0 = () =>
    y.jsx('div', {
      'data-testid': 'not-found-container',
      className:
        'min-h-screen bg-gray-50 flex items-center justify-center px-4',
      children: y.jsxs('div', {
        className: 'max-w-md w-full text-center',
        children: [
          y.jsxs('div', {
            className: 'mb-8',
            children: [
              y.jsx('div', {
                'data-testid': 'error-icon-container',
                className:
                  'inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6',
                children: y.jsx(Av, {
                  'data-testid': 'error-icon',
                  className: 'w-10 h-10 text-red-600',
                }),
              }),
              y.jsx('h1', {
                className: 'text-6xl font-bold text-gray-900 mb-4',
                children: '404',
              }),
              y.jsx('h2', {
                className: 'text-2xl font-semibold text-gray-700 mb-4',
                children: 'Page Not Found',
              }),
              y.jsx('p', {
                className: 'text-gray-600 mb-8',
                children:
                  "The page you're looking for doesn't exist in this galaxy. Perhaps the archives are incomplete?",
              }),
            ],
          }),
          y.jsxs('div', {
            className: 'space-y-4',
            children: [
              y.jsxs(cl, {
                to: '/',
                className:
                  'inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium',
                children: [
                  y.jsx(qv, {
                    'data-testid': 'home-icon',
                    className: 'w-5 h-5 mr-2',
                  }),
                  'Return to Home',
                ],
              }),
              y.jsxs(cl, {
                to: '/',
                className:
                  'inline-flex items-center justify-center w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium',
                children: [
                  y.jsx(vh, {
                    'data-testid': 'search-icon',
                    className: 'w-5 h-5 mr-2',
                  }),
                  'Search Characters',
                ],
              }),
            ],
          }),
          y.jsx('div', {
            className: 'mt-8 text-sm text-gray-500',
            children: y.jsx('p', {
              children: 'May the Force be with you on your way back!',
            }),
          }),
        ],
      }),
    }),
  D0 = () =>
    y.jsxs(lv, {
      children: [
        y.jsx(si, {
          path: '/',
          element: y.jsxs('div', {
            'data-testid': 'homepage',
            className: 'min-h-screen ...',
            children: [
              y.jsx(Mg, {}),
              y.jsx(O0, {}),
              y.jsx('div', {
                className: 'mt-8 text-center',
                children: y.jsx(cl, {
                  to: '/about',
                  className: '...',
                  children: 'About This Project',
                }),
              }),
              y.jsx(M0, {}),
            ],
          }),
        }),
        y.jsx(si, { path: '/about', element: y.jsx(F0, {}) }),
        y.jsx(si, { path: '*', element: y.jsx(I0, {}) }),
      ],
    }),
  z0 = () => y.jsx(jv, { children: y.jsx(D0, {}) }),
  $0 = ({ children: e }) => {
    const [t, n] = S.useState(() => {
      const l = localStorage.getItem('theme');
      return (
        l ||
        (window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light')
      );
    });
    S.useEffect(() => {
      (localStorage.setItem('theme', t),
        t === 'dark'
          ? document.documentElement.classList.add('dark')
          : document.documentElement.classList.remove('dark'));
    }, [t]);
    const r = () => {
      n((l) => (l === 'light' ? 'dark' : 'light'));
    };
    return y.jsx(wh.Provider, {
      value: { theme: t, toggleTheme: r },
      children: e,
    });
  },
  U0 = new a0();
Ds.createRoot(document.getElementById('root')).render(
  y.jsx(Mn.StrictMode, {
    children: y.jsx(h0, {
      client: U0,
      children: y.jsx($0, { children: y.jsx(z0, {}) }),
    }),
  })
);
