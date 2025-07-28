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
function fd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Ma = { exports: {} },
  _l = {},
  Da = { exports: {} },
  M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var or = Symbol.for('react.element'),
  hd = Symbol.for('react.portal'),
  md = Symbol.for('react.fragment'),
  vd = Symbol.for('react.strict_mode'),
  yd = Symbol.for('react.profiler'),
  gd = Symbol.for('react.provider'),
  wd = Symbol.for('react.context'),
  xd = Symbol.for('react.forward_ref'),
  kd = Symbol.for('react.suspense'),
  Sd = Symbol.for('react.memo'),
  _d = Symbol.for('react.lazy'),
  vs = Symbol.iterator;
function Ed(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (vs && e[vs]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Ba = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Fa = Object.assign,
  Oa = {};
function fn(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Oa),
    (this.updater = n || Ba));
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
function Ia() {}
Ia.prototype = fn.prototype;
function vo(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Oa),
    (this.updater = n || Ba));
}
var yo = (vo.prototype = new Ia());
yo.constructor = vo;
Fa(yo, fn.prototype);
yo.isPureReactComponent = !0;
var ys = Array.isArray,
  $a = Object.prototype.hasOwnProperty,
  go = { current: null },
  Aa = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ua(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      $a.call(t, r) && !Aa.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: or,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: go.current,
  };
}
function Cd(e, t) {
  return {
    $$typeof: or,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function wo(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === or;
}
function Nd(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var gs = /\/+/g;
function Wl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Nd('' + e.key)
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
          case or:
          case hd:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === '' ? '.' + Wl(o, 0) : r),
      ys(l)
        ? ((n = ''),
          e != null && (n = e.replace(gs, '$&/') + '/'),
          Br(l, t, n, '', function (u) {
            return u;
          }))
        : l != null &&
          (wo(l) &&
            (l = Cd(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ''
                  : ('' + l.key).replace(gs, '$&/') + '/') +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === '' ? '.' : r + ':'), ys(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var a = r + Wl(i, s);
      o += Br(i, t, n, a, l);
    }
  else if (((a = Ed(e)), typeof a == 'function'))
    for (e = a.call(e), s = 0; !(i = e.next()).done; )
      ((i = i.value), (a = r + Wl(i, s++)), (o += Br(i, t, n, a, l)));
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
function vr(e, t, n) {
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
function Td(e) {
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
  Fr = { transition: null },
  Pd = {
    ReactCurrentDispatcher: ce,
    ReactCurrentBatchConfig: Fr,
    ReactCurrentOwner: go,
  };
function Za() {
  throw Error('act(...) is not supported in production builds of React.');
}
M.Children = {
  map: vr,
  forEach: function (e, t, n) {
    vr(
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
      vr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      vr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!wo(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
M.Component = fn;
M.Fragment = md;
M.Profiler = yd;
M.PureComponent = vo;
M.StrictMode = vd;
M.Suspense = kd;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pd;
M.act = Za;
M.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Fa({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = go.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      $a.call(t, a) &&
        !Aa.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: or, type: e.type, key: l, ref: i, props: r, _owner: o };
};
M.createContext = function (e) {
  return (
    (e = {
      $$typeof: wd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: gd, _context: e }),
    (e.Consumer = e)
  );
};
M.createElement = Ua;
M.createFactory = function (e) {
  var t = Ua.bind(null, e);
  return ((t.type = e), t);
};
M.createRef = function () {
  return { current: null };
};
M.forwardRef = function (e) {
  return { $$typeof: xd, render: e };
};
M.isValidElement = wo;
M.lazy = function (e) {
  return { $$typeof: _d, _payload: { _status: -1, _result: e }, _init: Td };
};
M.memo = function (e, t) {
  return { $$typeof: Sd, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function (e) {
  var t = Fr.transition;
  Fr.transition = {};
  try {
    e();
  } finally {
    Fr.transition = t;
  }
};
M.unstable_act = Za;
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
Da.exports = M;
var y = Da.exports;
const jd = fd(y);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rd = y,
  Ld = Symbol.for('react.element'),
  zd = Symbol.for('react.fragment'),
  Md = Object.prototype.hasOwnProperty,
  Dd = Rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Bd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ha(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  (n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (r in t) Md.call(t, r) && !Bd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Ld,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Dd.current,
  };
}
_l.Fragment = zd;
_l.jsx = Ha;
_l.jsxs = Ha;
Ma.exports = _l;
var h = Ma.exports,
  Wa = { exports: {} },
  Se = {},
  Va = { exports: {} },
  Ya = {};
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
      var Y = (z - 1) >>> 1,
        q = N[Y];
      if (0 < l(q, L)) ((N[Y] = L), (N[z] = q), (z = Y));
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
      e: for (var Y = 0, q = N.length, hr = q >>> 1; Y < hr; ) {
        var _t = 2 * (Y + 1) - 1,
          Hl = N[_t],
          Et = _t + 1,
          mr = N[Et];
        if (0 > l(Hl, z))
          Et < q && 0 > l(mr, Hl)
            ? ((N[Y] = mr), (N[Et] = z), (Y = Et))
            : ((N[Y] = Hl), (N[_t] = z), (Y = _t));
        else if (Et < q && 0 > l(mr, z)) ((N[Y] = mr), (N[Et] = z), (Y = Et));
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
      s = o.now();
    e.unstable_now = function () {
      return o.now() - s;
    };
  }
  var a = [],
    u = [],
    m = 1,
    f = null,
    v = 3,
    w = !1,
    g = !1,
    x = !1,
    E = typeof setTimeout == 'function' ? setTimeout : null,
    d = typeof clearTimeout == 'function' ? clearTimeout : null,
    c = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(N) {
    for (var L = n(u); L !== null; ) {
      if (L.callback === null) r(u);
      else if (L.startTime <= N)
        (r(u), (L.sortIndex = L.expirationTime), t(a, L));
      else break;
      L = n(u);
    }
  }
  function k(N) {
    if (((x = !1), p(N), !g))
      if (n(a) !== null) ((g = !0), Ul(_));
      else {
        var L = n(u);
        L !== null && Zl(k, L.startTime - N);
      }
  }
  function _(N, L) {
    ((g = !1), x && ((x = !1), d(j), (j = -1)), (w = !0));
    var z = v;
    try {
      for (
        p(L), f = n(a);
        f !== null && (!(f.expirationTime > L) || (N && !pe()));

      ) {
        var Y = f.callback;
        if (typeof Y == 'function') {
          ((f.callback = null), (v = f.priorityLevel));
          var q = Y(f.expirationTime <= L);
          ((L = e.unstable_now()),
            typeof q == 'function' ? (f.callback = q) : f === n(a) && r(a),
            p(L));
        } else r(a);
        f = n(a);
      }
      if (f !== null) var hr = !0;
      else {
        var _t = n(u);
        (_t !== null && Zl(k, _t.startTime - L), (hr = !1));
      }
      return hr;
    } finally {
      ((f = null), (v = z), (w = !1));
    }
  }
  var P = !1,
    T = null,
    j = -1,
    D = 5,
    R = -1;
  function pe() {
    return !(e.unstable_now() - R < D);
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
    var ms = new MessageChannel(),
      pd = ms.port2;
    ((ms.port1.onmessage = gn),
      (wn = function () {
        pd.postMessage(null);
      }));
  } else
    wn = function () {
      E(gn, 0);
    };
  function Ul(N) {
    ((T = N), P || ((P = !0), wn()));
  }
  function Zl(N, L) {
    j = E(function () {
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
      g || w || ((g = !0), Ul(_));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (D = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
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
      var Y = e.unstable_now();
      switch (
        (typeof z == 'object' && z !== null
          ? ((z = z.delay), (z = typeof z == 'number' && 0 < z ? Y + z : Y))
          : (z = Y),
        N)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = z + q),
        (N = {
          id: m++,
          callback: L,
          priorityLevel: N,
          startTime: z,
          expirationTime: q,
          sortIndex: -1,
        }),
        z > Y
          ? ((N.sortIndex = z),
            t(u, N),
            n(a) === null &&
              N === n(u) &&
              (x ? (d(j), (j = -1)) : (x = !0), Zl(k, z - Y)))
          : ((N.sortIndex = q), t(a, N), g || w || ((g = !0), Ul(_))),
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
})(Ya);
Va.exports = Ya;
var Fd = Va.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Od = y,
  ke = Fd;
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
var Qa = new Set(),
  Zn = {};
function Ot(e, t) {
  (on(e, t), on(e + 'Capture', t));
}
function on(e, t) {
  for (Zn[e] = t, e = 0; e < t.length; e++) Qa.add(t[e]);
}
var Xe = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  wi = Object.prototype.hasOwnProperty,
  Id =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ws = {},
  xs = {};
function $d(e) {
  return wi.call(xs, e)
    ? !0
    : wi.call(ws, e)
      ? !1
      : Id.test(e)
        ? (xs[e] = !0)
        : ((ws[e] = !0), !1);
}
function Ad(e, t, n, r) {
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
function Ud(e, t, n, r) {
  if (t === null || typeof t > 'u' || Ad(e, t, n, r)) return !0;
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
var xo = /[\-:]([a-z])/g;
function ko(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(xo, ko);
    re[t] = new de(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(xo, ko);
    re[t] = new de(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(xo, ko);
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
function So(e, t, n, r) {
  var l = re.hasOwnProperty(t) ? re[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Ud(t, n, l, r) && (n = null),
    r || l === null
      ? $d(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var tt = Od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  yr = Symbol.for('react.element'),
  Ut = Symbol.for('react.portal'),
  Zt = Symbol.for('react.fragment'),
  _o = Symbol.for('react.strict_mode'),
  xi = Symbol.for('react.profiler'),
  Ka = Symbol.for('react.provider'),
  Ga = Symbol.for('react.context'),
  Eo = Symbol.for('react.forward_ref'),
  ki = Symbol.for('react.suspense'),
  Si = Symbol.for('react.suspense_list'),
  Co = Symbol.for('react.memo'),
  lt = Symbol.for('react.lazy'),
  Xa = Symbol.for('react.offscreen'),
  ks = Symbol.iterator;
function xn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (ks && e[ks]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var W = Object.assign,
  Vl;
function jn(e) {
  if (Vl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Vl = (t && t[1]) || '';
    }
  return (
    `
` +
    Vl +
    e
  );
}
var Yl = !1;
function Ql(e, t) {
  if (!e || Yl) return '';
  Yl = !0;
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
          s = i.length - 1;
        1 <= o && 0 <= s && l[o] !== i[s];

      )
        s--;
      for (; 1 <= o && 0 <= s; o--, s--)
        if (l[o] !== i[s]) {
          if (o !== 1 || s !== 1)
            do
              if ((o--, s--, 0 > s || l[o] !== i[s])) {
                var a =
                  `
` + l[o].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= s);
          break;
        }
    }
  } finally {
    ((Yl = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : '') ? jn(e) : '';
}
function Zd(e) {
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
      return ((e = Ql(e.type, !1)), e);
    case 11:
      return ((e = Ql(e.type.render, !1)), e);
    case 1:
      return ((e = Ql(e.type, !0)), e);
    default:
      return '';
  }
}
function _i(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Zt:
      return 'Fragment';
    case Ut:
      return 'Portal';
    case xi:
      return 'Profiler';
    case _o:
      return 'StrictMode';
    case ki:
      return 'Suspense';
    case Si:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Ga:
        return (e.displayName || 'Context') + '.Consumer';
      case Ka:
        return (e._context.displayName || 'Context') + '.Provider';
      case Eo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Co:
        return (
          (t = e.displayName || null),
          t !== null ? t : _i(e.type) || 'Memo'
        );
      case lt:
        ((t = e._payload), (e = e._init));
        try {
          return _i(e(t));
        } catch {}
    }
  return null;
}
function Hd(e) {
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
      return _i(t);
    case 8:
      return t === _o ? 'StrictMode' : 'Mode';
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
function Ja(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Wd(e) {
  var t = Ja(e) ? 'checked' : 'value',
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
function gr(e) {
  e._valueTracker || (e._valueTracker = Wd(e));
}
function qa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Ja(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Jr(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ei(e, t) {
  var n = t.checked;
  return W({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ss(e, t) {
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
function ba(e, t) {
  ((t = t.checked), t != null && So(e, 'checked', t, !1));
}
function Ci(e, t) {
  ba(e, t);
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
    ? Ni(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Ni(e, t.type, gt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function _s(e, t, n) {
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
function Ni(e, t, n) {
  (t !== 'number' || Jr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Rn = Array.isArray;
function bt(e, t, n, r) {
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
function Ti(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return W({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Es(e, t) {
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
function eu(e, t) {
  var n = gt(t.value),
    r = gt(t.defaultValue);
  (n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r));
}
function Cs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function tu(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Pi(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? tu(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var wr,
  nu = (function (e) {
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
        wr = wr || document.createElement('div'),
          wr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = wr.firstChild;
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
  Vd = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Mn).forEach(function (e) {
  Vd.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mn[t] = Mn[e]));
  });
});
function ru(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Mn.hasOwnProperty(e) && Mn[e])
      ? ('' + t).trim()
      : t + 'px';
}
function lu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = ru(n, t[n], r);
      (n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l));
    }
}
var Yd = W(
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
function ji(e, t) {
  if (t) {
    if (Yd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Ri(e, t) {
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
var Li = null;
function No(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var zi = null,
  en = null,
  tn = null;
function Ns(e) {
  if ((e = ur(e))) {
    if (typeof zi != 'function') throw Error(S(280));
    var t = e.stateNode;
    t && ((t = Pl(t)), zi(e.stateNode, e.type, t));
  }
}
function iu(e) {
  en ? (tn ? tn.push(e) : (tn = [e])) : (en = e);
}
function ou() {
  if (en) {
    var e = en,
      t = tn;
    if (((tn = en = null), Ns(e), t)) for (e = 0; e < t.length; e++) Ns(t[e]);
  }
}
function su(e, t) {
  return e(t);
}
function au() {}
var Kl = !1;
function uu(e, t, n) {
  if (Kl) return e(t, n);
  Kl = !0;
  try {
    return su(e, t, n);
  } finally {
    ((Kl = !1), (en !== null || tn !== null) && (au(), ou()));
  }
}
function Wn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Pl(n);
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
var Mi = !1;
if (Xe)
  try {
    var kn = {};
    (Object.defineProperty(kn, 'passive', {
      get: function () {
        Mi = !0;
      },
    }),
      window.addEventListener('test', kn, kn),
      window.removeEventListener('test', kn, kn));
  } catch {
    Mi = !1;
  }
function Qd(e, t, n, r, l, i, o, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (m) {
    this.onError(m);
  }
}
var Dn = !1,
  qr = null,
  br = !1,
  Di = null,
  Kd = {
    onError: function (e) {
      ((Dn = !0), (qr = e));
    },
  };
function Gd(e, t, n, r, l, i, o, s, a) {
  ((Dn = !1), (qr = null), Qd.apply(Kd, arguments));
}
function Xd(e, t, n, r, l, i, o, s, a) {
  if ((Gd.apply(this, arguments), Dn)) {
    if (Dn) {
      var u = qr;
      ((Dn = !1), (qr = null));
    } else throw Error(S(198));
    br || ((br = !0), (Di = u));
  }
}
function It(e) {
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
function cu(e) {
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
function Ts(e) {
  if (It(e) !== e) throw Error(S(188));
}
function Jd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = It(e)), t === null)) throw Error(S(188));
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
        if (i === n) return (Ts(l), e);
        if (i === r) return (Ts(l), t);
        i = i.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) ((n = l), (r = i));
    else {
      for (var o = !1, s = l.child; s; ) {
        if (s === n) {
          ((o = !0), (n = l), (r = i));
          break;
        }
        if (s === r) {
          ((o = !0), (r = l), (n = i));
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = i.child; s; ) {
          if (s === n) {
            ((o = !0), (n = i), (r = l));
            break;
          }
          if (s === r) {
            ((o = !0), (r = i), (n = l));
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function du(e) {
  return ((e = Jd(e)), e !== null ? pu(e) : null);
}
function pu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = pu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var fu = ke.unstable_scheduleCallback,
  Ps = ke.unstable_cancelCallback,
  qd = ke.unstable_shouldYield,
  bd = ke.unstable_requestPaint,
  Q = ke.unstable_now,
  ep = ke.unstable_getCurrentPriorityLevel,
  To = ke.unstable_ImmediatePriority,
  hu = ke.unstable_UserBlockingPriority,
  el = ke.unstable_NormalPriority,
  tp = ke.unstable_LowPriority,
  mu = ke.unstable_IdlePriority,
  El = null,
  Ae = null;
function np(e) {
  if (Ae && typeof Ae.onCommitFiberRoot == 'function')
    try {
      Ae.onCommitFiberRoot(El, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var De = Math.clz32 ? Math.clz32 : ip,
  rp = Math.log,
  lp = Math.LN2;
function ip(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((rp(e) / lp) | 0)) | 0);
}
var xr = 64,
  kr = 4194304;
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
function tl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var s = o & ~l;
    s !== 0 ? (r = Ln(s)) : ((i &= o), i !== 0 && (r = Ln(i)));
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
      ((n = 31 - De(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
  return r;
}
function op(e, t) {
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
function sp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - De(i),
      s = 1 << o,
      a = l[o];
    (a === -1
      ? (!(s & n) || s & r) && (l[o] = op(s, t))
      : a <= t && (e.expiredLanes |= s),
      (i &= ~s));
  }
}
function Bi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function vu() {
  var e = xr;
  return ((xr <<= 1), !(xr & 4194240) && (xr = 64), e);
}
function Gl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function sr(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - De(t)),
    (e[t] = n));
}
function ap(e, t) {
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
    var l = 31 - De(n),
      i = 1 << l;
    ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i));
  }
}
function Po(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - De(n),
      l = 1 << r;
    ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
  }
}
var F = 0;
function yu(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var gu,
  jo,
  wu,
  xu,
  ku,
  Fi = !1,
  Sr = [],
  ct = null,
  dt = null,
  pt = null,
  Vn = new Map(),
  Yn = new Map(),
  ot = [],
  up =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function js(e, t) {
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
      t !== null && ((t = ur(t)), t !== null && jo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function cp(e, t, n, r, l) {
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
function Su(e) {
  var t = Tt(e.target);
  if (t !== null) {
    var n = It(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = cu(n)), t !== null)) {
          ((e.blockedOn = t),
            ku(e.priority, function () {
              wu(n);
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
function Or(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Oi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Li = r), n.target.dispatchEvent(r), (Li = null));
    } else return ((t = ur(n)), t !== null && jo(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Rs(e, t, n) {
  Or(e) && n.delete(t);
}
function dp() {
  ((Fi = !1),
    ct !== null && Or(ct) && (ct = null),
    dt !== null && Or(dt) && (dt = null),
    pt !== null && Or(pt) && (pt = null),
    Vn.forEach(Rs),
    Yn.forEach(Rs));
}
function _n(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Fi ||
      ((Fi = !0),
      ke.unstable_scheduleCallback(ke.unstable_NormalPriority, dp)));
}
function Qn(e) {
  function t(l) {
    return _n(l, e);
  }
  if (0 < Sr.length) {
    _n(Sr[0], e);
    for (var n = 1; n < Sr.length; n++) {
      var r = Sr[n];
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
    (Su(n), n.blockedOn === null && ot.shift());
}
var nn = tt.ReactCurrentBatchConfig,
  nl = !0;
function pp(e, t, n, r) {
  var l = F,
    i = nn.transition;
  nn.transition = null;
  try {
    ((F = 1), Ro(e, t, n, r));
  } finally {
    ((F = l), (nn.transition = i));
  }
}
function fp(e, t, n, r) {
  var l = F,
    i = nn.transition;
  nn.transition = null;
  try {
    ((F = 4), Ro(e, t, n, r));
  } finally {
    ((F = l), (nn.transition = i));
  }
}
function Ro(e, t, n, r) {
  if (nl) {
    var l = Oi(e, t, n, r);
    if (l === null) (ii(e, t, r, rl, n), js(e, r));
    else if (cp(l, e, t, n, r)) r.stopPropagation();
    else if ((js(e, r), t & 4 && -1 < up.indexOf(e))) {
      for (; l !== null; ) {
        var i = ur(l);
        if (
          (i !== null && gu(i),
          (i = Oi(e, t, n, r)),
          i === null && ii(e, t, r, rl, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else ii(e, t, r, null, n);
  }
}
var rl = null;
function Oi(e, t, n, r) {
  if (((rl = null), (e = No(r)), (e = Tt(e)), e !== null))
    if (((t = It(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = cu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((rl = e), null);
}
function _u(e) {
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
      switch (ep()) {
        case To:
          return 1;
        case hu:
          return 4;
        case el:
        case tp:
          return 16;
        case mu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var at = null,
  Lo = null,
  Ir = null;
function Eu() {
  if (Ir) return Ir;
  var e,
    t = Lo,
    n = t.length,
    r,
    l = 'value' in at ? at.value : at.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Ir = l.slice(e, 1 < r ? 1 - r : void 0));
}
function $r(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function _r() {
  return !0;
}
function Ls() {
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
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? _r
        : Ls),
      (this.isPropagationStopped = Ls),
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
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = _r));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = _r));
      },
      persist: function () {},
      isPersistent: _r,
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
  zo = _e(hn),
  ar = W({}, hn, { view: 0, detail: 0 }),
  hp = _e(ar),
  Xl,
  Jl,
  En,
  Cl = W({}, ar, {
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
    getModifierState: Mo,
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
        : (e !== En &&
            (En && e.type === 'mousemove'
              ? ((Xl = e.screenX - En.screenX), (Jl = e.screenY - En.screenY))
              : (Jl = Xl = 0),
            (En = e)),
          Xl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Jl;
    },
  }),
  zs = _e(Cl),
  mp = W({}, Cl, { dataTransfer: 0 }),
  vp = _e(mp),
  yp = W({}, ar, { relatedTarget: 0 }),
  ql = _e(yp),
  gp = W({}, hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  wp = _e(gp),
  xp = W({}, hn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  kp = _e(xp),
  Sp = W({}, hn, { data: 0 }),
  Ms = _e(Sp),
  _p = {
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
  Ep = {
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
  Cp = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Np(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Cp[e]) ? !!t[e] : !1;
}
function Mo() {
  return Np;
}
var Tp = W({}, ar, {
    key: function (e) {
      if (e.key) {
        var t = _p[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = $r(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? Ep[e.keyCode] || 'Unidentified'
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
    getModifierState: Mo,
    charCode: function (e) {
      return e.type === 'keypress' ? $r(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? $r(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  Pp = _e(Tp),
  jp = W({}, Cl, {
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
  Ds = _e(jp),
  Rp = W({}, ar, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Mo,
  }),
  Lp = _e(Rp),
  zp = W({}, hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Mp = _e(zp),
  Dp = W({}, Cl, {
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
  Bp = _e(Dp),
  Fp = [9, 13, 27, 32],
  Do = Xe && 'CompositionEvent' in window,
  Bn = null;
Xe && 'documentMode' in document && (Bn = document.documentMode);
var Op = Xe && 'TextEvent' in window && !Bn,
  Cu = Xe && (!Do || (Bn && 8 < Bn && 11 >= Bn)),
  Bs = ' ',
  Fs = !1;
function Nu(e, t) {
  switch (e) {
    case 'keyup':
      return Fp.indexOf(t.keyCode) !== -1;
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
function Tu(e) {
  return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
}
var Ht = !1;
function Ip(e, t) {
  switch (e) {
    case 'compositionend':
      return Tu(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Fs = !0), Bs);
    case 'textInput':
      return ((e = t.data), e === Bs && Fs ? null : e);
    default:
      return null;
  }
}
function $p(e, t) {
  if (Ht)
    return e === 'compositionend' || (!Do && Nu(e, t))
      ? ((e = Eu()), (Ir = Lo = at = null), (Ht = !1), e)
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
      return Cu && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Ap = {
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
function Os(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Ap[e.type] : t === 'textarea';
}
function Pu(e, t, n, r) {
  (iu(r),
    (t = ll(t, 'onChange')),
    0 < t.length &&
      ((n = new zo('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Fn = null,
  Kn = null;
function Up(e) {
  $u(e, 0);
}
function Nl(e) {
  var t = Yt(e);
  if (qa(t)) return e;
}
function Zp(e, t) {
  if (e === 'change') return t;
}
var ju = !1;
if (Xe) {
  var bl;
  if (Xe) {
    var ei = 'oninput' in document;
    if (!ei) {
      var Is = document.createElement('div');
      (Is.setAttribute('oninput', 'return;'),
        (ei = typeof Is.oninput == 'function'));
    }
    bl = ei;
  } else bl = !1;
  ju = bl && (!document.documentMode || 9 < document.documentMode);
}
function $s() {
  Fn && (Fn.detachEvent('onpropertychange', Ru), (Kn = Fn = null));
}
function Ru(e) {
  if (e.propertyName === 'value' && Nl(Kn)) {
    var t = [];
    (Pu(t, Kn, e, No(e)), uu(Up, t));
  }
}
function Hp(e, t, n) {
  e === 'focusin'
    ? ($s(), (Fn = t), (Kn = n), Fn.attachEvent('onpropertychange', Ru))
    : e === 'focusout' && $s();
}
function Wp(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Nl(Kn);
}
function Vp(e, t) {
  if (e === 'click') return Nl(t);
}
function Yp(e, t) {
  if (e === 'input' || e === 'change') return Nl(t);
}
function Qp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Fe = typeof Object.is == 'function' ? Object.is : Qp;
function Gn(e, t) {
  if (Fe(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!wi.call(t, l) || !Fe(e[l], t[l])) return !1;
  }
  return !0;
}
function As(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Us(e, t) {
  var n = As(e);
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
    n = As(n);
  }
}
function Lu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Lu(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function zu() {
  for (var e = window, t = Jr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Jr(e.document);
  }
  return t;
}
function Bo(e) {
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
function Kp(e) {
  var t = zu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Lu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Bo(n)) {
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
          (l = Us(n, i)));
        var o = Us(n, r);
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
var Gp = Xe && 'documentMode' in document && 11 >= document.documentMode,
  Wt = null,
  Ii = null,
  On = null,
  $i = !1;
function Zs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  $i ||
    Wt == null ||
    Wt !== Jr(r) ||
    ((r = Wt),
    'selectionStart' in r && Bo(r)
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
      (r = ll(Ii, 'onSelect')),
      0 < r.length &&
        ((t = new zo('onSelect', 'select', null, t, n)),
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
  ti = {},
  Mu = {};
Xe &&
  ((Mu = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Vt.animationend.animation,
    delete Vt.animationiteration.animation,
    delete Vt.animationstart.animation),
  'TransitionEvent' in window || delete Vt.transitionend.transition);
function Tl(e) {
  if (ti[e]) return ti[e];
  if (!Vt[e]) return e;
  var t = Vt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Mu) return (ti[e] = t[n]);
  return e;
}
var Du = Tl('animationend'),
  Bu = Tl('animationiteration'),
  Fu = Tl('animationstart'),
  Ou = Tl('transitionend'),
  Iu = new Map(),
  Hs =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function xt(e, t) {
  (Iu.set(e, t), Ot(t, [e]));
}
for (var ni = 0; ni < Hs.length; ni++) {
  var ri = Hs[ni],
    Xp = ri.toLowerCase(),
    Jp = ri[0].toUpperCase() + ri.slice(1);
  xt(Xp, 'on' + Jp);
}
xt(Du, 'onAnimationEnd');
xt(Bu, 'onAnimationIteration');
xt(Fu, 'onAnimationStart');
xt('dblclick', 'onDoubleClick');
xt('focusin', 'onFocus');
xt('focusout', 'onBlur');
xt(Ou, 'onTransitionEnd');
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
  qp = new Set('cancel close invalid load scroll toggle'.split(' ').concat(zn));
function Ws(e, t, n) {
  var r = e.type || 'unknown-event';
  ((e.currentTarget = n), Xd(r, t, void 0, e), (e.currentTarget = null));
}
function $u(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== i && l.isPropagationStopped())) break e;
          (Ws(l, s, u), (i = a));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((s = r[o]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== i && l.isPropagationStopped())
          )
            break e;
          (Ws(l, s, u), (i = a));
        }
    }
  }
  if (br) throw ((e = Di), (br = !1), (Di = null), e);
}
function I(e, t) {
  var n = t[Wi];
  n === void 0 && (n = t[Wi] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Au(t, e, 2, !1), n.add(r));
}
function li(e, t, n) {
  var r = 0;
  (t && (r |= 4), Au(n, e, r, t));
}
var Cr = '_reactListening' + Math.random().toString(36).slice(2);
function Xn(e) {
  if (!e[Cr]) {
    ((e[Cr] = !0),
      Qa.forEach(function (n) {
        n !== 'selectionchange' && (qp.has(n) || li(n, !1, e), li(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Cr] || ((t[Cr] = !0), li('selectionchange', !1, t));
  }
}
function Au(e, t, n, r) {
  switch (_u(t)) {
    case 1:
      var l = pp;
      break;
    case 4:
      l = fp;
      break;
    default:
      l = Ro;
  }
  ((n = l.bind(null, t, n, e)),
    (l = void 0),
    !Mi ||
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
function ii(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; s !== null; ) {
          if (((o = Tt(s)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = i = o;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  uu(function () {
    var u = i,
      m = No(n),
      f = [];
    e: {
      var v = Iu.get(e);
      if (v !== void 0) {
        var w = zo,
          g = e;
        switch (e) {
          case 'keypress':
            if ($r(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            w = Pp;
            break;
          case 'focusin':
            ((g = 'focus'), (w = ql));
            break;
          case 'focusout':
            ((g = 'blur'), (w = ql));
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
            w = zs;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            w = vp;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            w = Lp;
            break;
          case Du:
          case Bu:
          case Fu:
            w = wp;
            break;
          case Ou:
            w = Mp;
            break;
          case 'scroll':
            w = hp;
            break;
          case 'wheel':
            w = Bp;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            w = kp;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            w = Ds;
        }
        var x = (t & 4) !== 0,
          E = !x && e === 'scroll',
          d = x ? (v !== null ? v + 'Capture' : null) : v;
        x = [];
        for (var c = u, p; c !== null; ) {
          p = c;
          var k = p.stateNode;
          if (
            (p.tag === 5 &&
              k !== null &&
              ((p = k),
              d !== null && ((k = Wn(c, d)), k != null && x.push(Jn(c, k, p)))),
            E)
          )
            break;
          c = c.return;
        }
        0 < x.length &&
          ((v = new w(v, g, null, n, m)), f.push({ event: v, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === 'mouseover' || e === 'pointerover'),
          (w = e === 'mouseout' || e === 'pointerout'),
          v &&
            n !== Li &&
            (g = n.relatedTarget || n.fromElement) &&
            (Tt(g) || g[Je]))
        )
          break e;
        if (
          (w || v) &&
          ((v =
            m.window === m
              ? m
              : (v = m.ownerDocument)
                ? v.defaultView || v.parentWindow
                : window),
          w
            ? ((g = n.relatedTarget || n.toElement),
              (w = u),
              (g = g ? Tt(g) : null),
              g !== null &&
                ((E = It(g)), g !== E || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((w = null), (g = u)),
          w !== g)
        ) {
          if (
            ((x = zs),
            (k = 'onMouseLeave'),
            (d = 'onMouseEnter'),
            (c = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((x = Ds),
              (k = 'onPointerLeave'),
              (d = 'onPointerEnter'),
              (c = 'pointer')),
            (E = w == null ? v : Yt(w)),
            (p = g == null ? v : Yt(g)),
            (v = new x(k, c + 'leave', w, n, m)),
            (v.target = E),
            (v.relatedTarget = p),
            (k = null),
            Tt(m) === u &&
              ((x = new x(d, c + 'enter', g, n, m)),
              (x.target = p),
              (x.relatedTarget = E),
              (k = x)),
            (E = k),
            w && g)
          )
            t: {
              for (x = w, d = g, c = 0, p = x; p; p = At(p)) c++;
              for (p = 0, k = d; k; k = At(k)) p++;
              for (; 0 < c - p; ) ((x = At(x)), c--);
              for (; 0 < p - c; ) ((d = At(d)), p--);
              for (; c--; ) {
                if (x === d || (d !== null && x === d.alternate)) break t;
                ((x = At(x)), (d = At(d)));
              }
              x = null;
            }
          else x = null;
          (w !== null && Vs(f, v, w, x, !1),
            g !== null && E !== null && Vs(f, E, g, x, !0));
        }
      }
      e: {
        if (
          ((v = u ? Yt(u) : window),
          (w = v.nodeName && v.nodeName.toLowerCase()),
          w === 'select' || (w === 'input' && v.type === 'file'))
        )
          var _ = Zp;
        else if (Os(v))
          if (ju) _ = Yp;
          else {
            _ = Wp;
            var P = Hp;
          }
        else
          (w = v.nodeName) &&
            w.toLowerCase() === 'input' &&
            (v.type === 'checkbox' || v.type === 'radio') &&
            (_ = Vp);
        if (_ && (_ = _(e, u))) {
          Pu(f, _, n, m);
          break e;
        }
        (P && P(e, v, u),
          e === 'focusout' &&
            (P = v._wrapperState) &&
            P.controlled &&
            v.type === 'number' &&
            Ni(v, 'number', v.value));
      }
      switch (((P = u ? Yt(u) : window), e)) {
        case 'focusin':
          (Os(P) || P.contentEditable === 'true') &&
            ((Wt = P), (Ii = u), (On = null));
          break;
        case 'focusout':
          On = Ii = Wt = null;
          break;
        case 'mousedown':
          $i = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (($i = !1), Zs(f, n, m));
          break;
        case 'selectionchange':
          if (Gp) break;
        case 'keydown':
        case 'keyup':
          Zs(f, n, m);
      }
      var T;
      if (Do)
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
          ? Nu(e, n) && (j = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (j = 'onCompositionStart');
      (j &&
        (Cu &&
          n.locale !== 'ko' &&
          (Ht || j !== 'onCompositionStart'
            ? j === 'onCompositionEnd' && Ht && (T = Eu())
            : ((at = m),
              (Lo = 'value' in at ? at.value : at.textContent),
              (Ht = !0))),
        (P = ll(u, j)),
        0 < P.length &&
          ((j = new Ms(j, e, null, n, m)),
          f.push({ event: j, listeners: P }),
          T ? (j.data = T) : ((T = Tu(n)), T !== null && (j.data = T)))),
        (T = Op ? Ip(e, n) : $p(e, n)) &&
          ((u = ll(u, 'onBeforeInput')),
          0 < u.length &&
            ((m = new Ms('onBeforeInput', 'beforeinput', null, n, m)),
            f.push({ event: m, listeners: u }),
            (m.data = T))));
    }
    $u(f, t);
  });
}
function Jn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ll(e, t) {
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
function Vs(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    (s.tag === 5 &&
      u !== null &&
      ((s = u),
      l
        ? ((a = Wn(n, i)), a != null && o.unshift(Jn(n, a, s)))
        : l || ((a = Wn(n, i)), a != null && o.push(Jn(n, a, s)))),
      (n = n.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var bp = /\r\n?/g,
  ef = /\u0000|\uFFFD/g;
function Ys(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      bp,
      `
`
    )
    .replace(ef, '');
}
function Nr(e, t, n) {
  if (((t = Ys(t)), Ys(e) !== t && n)) throw Error(S(425));
}
function il() {}
var Ai = null,
  Ui = null;
function Zi(e, t) {
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
var Hi = typeof setTimeout == 'function' ? setTimeout : void 0,
  tf = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Qs = typeof Promise == 'function' ? Promise : void 0,
  nf =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Qs < 'u'
        ? function (e) {
            return Qs.resolve(null).then(e).catch(rf);
          }
        : Hi;
function rf(e) {
  setTimeout(function () {
    throw e;
  });
}
function oi(e, t) {
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
function Ks(e) {
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
  qn = '__reactProps$' + mn,
  Je = '__reactContainer$' + mn,
  Wi = '__reactEvents$' + mn,
  lf = '__reactListeners$' + mn,
  of = '__reactHandles$' + mn;
function Tt(e) {
  var t = e[$e];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Je] || n[$e])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ks(e); e !== null; ) {
          if ((n = e[$e])) return n;
          e = Ks(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function ur(e) {
  return (
    (e = e[$e] || e[Je]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Yt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Pl(e) {
  return e[qn] || null;
}
var Vi = [],
  Qt = -1;
function kt(e) {
  return { current: e };
}
function $(e) {
  0 > Qt || ((e.current = Vi[Qt]), (Vi[Qt] = null), Qt--);
}
function O(e, t) {
  (Qt++, (Vi[Qt] = e.current), (e.current = t));
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
function ol() {
  ($(me), $(se));
}
function Gs(e, t, n) {
  if (se.current !== wt) throw Error(S(168));
  (O(se, t), O(me, n));
}
function Uu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, Hd(e) || 'Unknown', l));
  return W({}, n, r);
}
function sl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || wt),
    (zt = se.current),
    O(se, e),
    O(me, me.current),
    !0
  );
}
function Xs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  (n
    ? ((e = Uu(e, t, zt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      $(me),
      $(se),
      O(se, e))
    : $(me),
    O(me, n));
}
var Ve = null,
  jl = !1,
  si = !1;
function Zu(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
function sf(e) {
  ((jl = !0), Zu(e));
}
function St() {
  if (!si && Ve !== null) {
    si = !0;
    var e = 0,
      t = F;
    try {
      var n = Ve;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Ve = null), (jl = !1));
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), fu(To, St), l);
    } finally {
      ((F = t), (si = !1));
    }
  }
  return null;
}
var Kt = [],
  Gt = 0,
  al = null,
  ul = 0,
  Ee = [],
  Ce = 0,
  Mt = null,
  Ye = 1,
  Qe = '';
function Ct(e, t) {
  ((Kt[Gt++] = ul), (Kt[Gt++] = al), (al = e), (ul = t));
}
function Hu(e, t, n) {
  ((Ee[Ce++] = Ye), (Ee[Ce++] = Qe), (Ee[Ce++] = Mt), (Mt = e));
  var r = Ye;
  e = Qe;
  var l = 32 - De(r) - 1;
  ((r &= ~(1 << l)), (n += 1));
  var i = 32 - De(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    ((i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Ye = (1 << (32 - De(t) + l)) | (n << l) | r),
      (Qe = i + e));
  } else ((Ye = (1 << i) | (n << l) | r), (Qe = e));
}
function Fo(e) {
  e.return !== null && (Ct(e, 1), Hu(e, 1, 0));
}
function Oo(e) {
  for (; e === al; )
    ((al = Kt[--Gt]), (Kt[Gt] = null), (ul = Kt[--Gt]), (Kt[Gt] = null));
  for (; e === Mt; )
    ((Mt = Ee[--Ce]),
      (Ee[Ce] = null),
      (Qe = Ee[--Ce]),
      (Ee[Ce] = null),
      (Ye = Ee[--Ce]),
      (Ee[Ce] = null));
}
var xe = null,
  we = null,
  A = !1,
  Me = null;
function Wu(e, t) {
  var n = Ne(5, null, null, 0);
  ((n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Js(e, t) {
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
function Yi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Qi(e) {
  if (A) {
    var t = we;
    if (t) {
      var n = t;
      if (!Js(e, t)) {
        if (Yi(e)) throw Error(S(418));
        t = ft(n.nextSibling);
        var r = xe;
        t && Js(e, t)
          ? Wu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (A = !1), (xe = e));
      }
    } else {
      if (Yi(e)) throw Error(S(418));
      ((e.flags = (e.flags & -4097) | 2), (A = !1), (xe = e));
    }
  }
}
function qs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  xe = e;
}
function Tr(e) {
  if (e !== xe) return !1;
  if (!A) return (qs(e), (A = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Zi(e.type, e.memoizedProps))),
    t && (t = we))
  ) {
    if (Yi(e)) throw (Vu(), Error(S(418)));
    for (; t; ) (Wu(e, t), (t = ft(t.nextSibling)));
  }
  if ((qs(e), e.tag === 13)) {
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
function Vu() {
  for (var e = we; e; ) e = ft(e.nextSibling);
}
function an() {
  ((we = xe = null), (A = !1));
}
function Io(e) {
  Me === null ? (Me = [e]) : Me.push(e);
}
var af = tt.ReactCurrentBatchConfig;
function Cn(e, t, n) {
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
            var s = l.refs;
            o === null ? delete s[i] : (s[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function Pr(e, t) {
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
function bs(e) {
  var t = e._init;
  return t(e._payload);
}
function Yu(e) {
  function t(d, c) {
    if (e) {
      var p = d.deletions;
      p === null ? ((d.deletions = [c]), (d.flags |= 16)) : p.push(c);
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
  function i(d, c, p) {
    return (
      (d.index = p),
      e
        ? ((p = d.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((d.flags |= 2), c) : p)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function o(d) {
    return (e && d.alternate === null && (d.flags |= 2), d);
  }
  function s(d, c, p, k) {
    return c === null || c.tag !== 6
      ? ((c = hi(p, d.mode, k)), (c.return = d), c)
      : ((c = l(c, p)), (c.return = d), c);
  }
  function a(d, c, p, k) {
    var _ = p.type;
    return _ === Zt
      ? m(d, c, p.props.children, k, p.key)
      : c !== null &&
          (c.elementType === _ ||
            (typeof _ == 'object' &&
              _ !== null &&
              _.$$typeof === lt &&
              bs(_) === c.type))
        ? ((k = l(c, p.props)), (k.ref = Cn(d, c, p)), (k.return = d), k)
        : ((k = Yr(p.type, p.key, p.props, null, d.mode, k)),
          (k.ref = Cn(d, c, p)),
          (k.return = d),
          k);
  }
  function u(d, c, p, k) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = mi(p, d.mode, k)), (c.return = d), c)
      : ((c = l(c, p.children || [])), (c.return = d), c);
  }
  function m(d, c, p, k, _) {
    return c === null || c.tag !== 7
      ? ((c = Lt(p, d.mode, k, _)), (c.return = d), c)
      : ((c = l(c, p)), (c.return = d), c);
  }
  function f(d, c, p) {
    if ((typeof c == 'string' && c !== '') || typeof c == 'number')
      return ((c = hi('' + c, d.mode, p)), (c.return = d), c);
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case yr:
          return (
            (p = Yr(c.type, c.key, c.props, null, d.mode, p)),
            (p.ref = Cn(d, null, c)),
            (p.return = d),
            p
          );
        case Ut:
          return ((c = mi(c, d.mode, p)), (c.return = d), c);
        case lt:
          var k = c._init;
          return f(d, k(c._payload), p);
      }
      if (Rn(c) || xn(c))
        return ((c = Lt(c, d.mode, p, null)), (c.return = d), c);
      Pr(d, c);
    }
    return null;
  }
  function v(d, c, p, k) {
    var _ = c !== null ? c.key : null;
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return _ !== null ? null : s(d, c, '' + p, k);
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case yr:
          return p.key === _ ? a(d, c, p, k) : null;
        case Ut:
          return p.key === _ ? u(d, c, p, k) : null;
        case lt:
          return ((_ = p._init), v(d, c, _(p._payload), k));
      }
      if (Rn(p) || xn(p)) return _ !== null ? null : m(d, c, p, k, null);
      Pr(d, p);
    }
    return null;
  }
  function w(d, c, p, k, _) {
    if ((typeof k == 'string' && k !== '') || typeof k == 'number')
      return ((d = d.get(p) || null), s(c, d, '' + k, _));
    if (typeof k == 'object' && k !== null) {
      switch (k.$$typeof) {
        case yr:
          return (
            (d = d.get(k.key === null ? p : k.key) || null),
            a(c, d, k, _)
          );
        case Ut:
          return (
            (d = d.get(k.key === null ? p : k.key) || null),
            u(c, d, k, _)
          );
        case lt:
          var P = k._init;
          return w(d, c, p, P(k._payload), _);
      }
      if (Rn(k) || xn(k)) return ((d = d.get(p) || null), m(c, d, k, _, null));
      Pr(c, k);
    }
    return null;
  }
  function g(d, c, p, k) {
    for (
      var _ = null, P = null, T = c, j = (c = 0), D = null;
      T !== null && j < p.length;
      j++
    ) {
      T.index > j ? ((D = T), (T = null)) : (D = T.sibling);
      var R = v(d, T, p[j], k);
      if (R === null) {
        T === null && (T = D);
        break;
      }
      (e && T && R.alternate === null && t(d, T),
        (c = i(R, c, j)),
        P === null ? (_ = R) : (P.sibling = R),
        (P = R),
        (T = D));
    }
    if (j === p.length) return (n(d, T), A && Ct(d, j), _);
    if (T === null) {
      for (; j < p.length; j++)
        ((T = f(d, p[j], k)),
          T !== null &&
            ((c = i(T, c, j)),
            P === null ? (_ = T) : (P.sibling = T),
            (P = T)));
      return (A && Ct(d, j), _);
    }
    for (T = r(d, T); j < p.length; j++)
      ((D = w(T, d, j, p[j], k)),
        D !== null &&
          (e && D.alternate !== null && T.delete(D.key === null ? j : D.key),
          (c = i(D, c, j)),
          P === null ? (_ = D) : (P.sibling = D),
          (P = D)));
    return (
      e &&
        T.forEach(function (pe) {
          return t(d, pe);
        }),
      A && Ct(d, j),
      _
    );
  }
  function x(d, c, p, k) {
    var _ = xn(p);
    if (typeof _ != 'function') throw Error(S(150));
    if (((p = _.call(p)), p == null)) throw Error(S(151));
    for (
      var P = (_ = null), T = c, j = (c = 0), D = null, R = p.next();
      T !== null && !R.done;
      j++, R = p.next()
    ) {
      T.index > j ? ((D = T), (T = null)) : (D = T.sibling);
      var pe = v(d, T, R.value, k);
      if (pe === null) {
        T === null && (T = D);
        break;
      }
      (e && T && pe.alternate === null && t(d, T),
        (c = i(pe, c, j)),
        P === null ? (_ = pe) : (P.sibling = pe),
        (P = pe),
        (T = D));
    }
    if (R.done) return (n(d, T), A && Ct(d, j), _);
    if (T === null) {
      for (; !R.done; j++, R = p.next())
        ((R = f(d, R.value, k)),
          R !== null &&
            ((c = i(R, c, j)),
            P === null ? (_ = R) : (P.sibling = R),
            (P = R)));
      return (A && Ct(d, j), _);
    }
    for (T = r(d, T); !R.done; j++, R = p.next())
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
      A && Ct(d, j),
      _
    );
  }
  function E(d, c, p, k) {
    if (
      (typeof p == 'object' &&
        p !== null &&
        p.type === Zt &&
        p.key === null &&
        (p = p.props.children),
      typeof p == 'object' && p !== null)
    ) {
      switch (p.$$typeof) {
        case yr:
          e: {
            for (var _ = p.key, P = c; P !== null; ) {
              if (P.key === _) {
                if (((_ = p.type), _ === Zt)) {
                  if (P.tag === 7) {
                    (n(d, P.sibling),
                      (c = l(P, p.props.children)),
                      (c.return = d),
                      (d = c));
                    break e;
                  }
                } else if (
                  P.elementType === _ ||
                  (typeof _ == 'object' &&
                    _ !== null &&
                    _.$$typeof === lt &&
                    bs(_) === P.type)
                ) {
                  (n(d, P.sibling),
                    (c = l(P, p.props)),
                    (c.ref = Cn(d, P, p)),
                    (c.return = d),
                    (d = c));
                  break e;
                }
                n(d, P);
                break;
              } else t(d, P);
              P = P.sibling;
            }
            p.type === Zt
              ? ((c = Lt(p.props.children, d.mode, k, p.key)),
                (c.return = d),
                (d = c))
              : ((k = Yr(p.type, p.key, p.props, null, d.mode, k)),
                (k.ref = Cn(d, c, p)),
                (k.return = d),
                (d = k));
          }
          return o(d);
        case Ut:
          e: {
            for (P = p.key; c !== null; ) {
              if (c.key === P)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  (n(d, c.sibling),
                    (c = l(c, p.children || [])),
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
            ((c = mi(p, d.mode, k)), (c.return = d), (d = c));
          }
          return o(d);
        case lt:
          return ((P = p._init), E(d, c, P(p._payload), k));
      }
      if (Rn(p)) return g(d, c, p, k);
      if (xn(p)) return x(d, c, p, k);
      Pr(d, p);
    }
    return (typeof p == 'string' && p !== '') || typeof p == 'number'
      ? ((p = '' + p),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = l(c, p)), (c.return = d), (d = c))
          : (n(d, c), (c = hi(p, d.mode, k)), (c.return = d), (d = c)),
        o(d))
      : n(d, c);
  }
  return E;
}
var un = Yu(!0),
  Qu = Yu(!1),
  cl = kt(null),
  dl = null,
  Xt = null,
  $o = null;
function Ao() {
  $o = Xt = dl = null;
}
function Uo(e) {
  var t = cl.current;
  ($(cl), (e._currentValue = t));
}
function Ki(e, t, n) {
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
  ((dl = e),
    ($o = Xt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (he = !0), (e.firstContext = null)));
}
function Pe(e) {
  var t = e._currentValue;
  if ($o !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Xt === null)) {
      if (dl === null) throw Error(S(308));
      ((Xt = e), (dl.dependencies = { lanes: 0, firstContext: e }));
    } else Xt = Xt.next = e;
  return t;
}
var Pt = null;
function Zo(e) {
  Pt === null ? (Pt = [e]) : Pt.push(e);
}
function Ku(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Zo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    qe(e, r)
  );
}
function qe(e, t) {
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
function Ho(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Gu(e, t) {
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
  if (((r = r.shared), B & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      qe(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Zo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    qe(e, n)
  );
}
function Ar(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Po(e, n));
  }
}
function ea(e, t) {
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
function pl(e, t, n, r) {
  var l = e.updateQueue;
  it = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var a = s,
      u = a.next;
    ((a.next = null), o === null ? (i = u) : (o.next = u), (o = a));
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (s = m.lastBaseUpdate),
      s !== o &&
        (s === null ? (m.firstBaseUpdate = u) : (s.next = u),
        (m.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var f = l.baseState;
    ((o = 0), (m = u = a = null), (s = i));
    do {
      var v = s.lane,
        w = s.eventTime;
      if ((r & v) === v) {
        m !== null &&
          (m = m.next =
            {
              eventTime: w,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var g = e,
            x = s;
          switch (((v = t), (w = n), x.tag)) {
            case 1:
              if (((g = x.payload), typeof g == 'function')) {
                f = g.call(w, f, v);
                break e;
              }
              f = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = x.payload),
                (v = typeof g == 'function' ? g.call(w, f, v) : g),
                v == null)
              )
                break e;
              f = W({}, f, v);
              break e;
            case 2:
              it = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (v = l.effects),
          v === null ? (l.effects = [s]) : v.push(s));
      } else
        ((w = {
          eventTime: w,
          lane: v,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          m === null ? ((u = m = w), (a = f)) : (m = m.next = w),
          (o |= v));
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        ((v = s),
          (s = v.next),
          (v.next = null),
          (l.lastBaseUpdate = v),
          (l.shared.pending = null));
      }
    } while (!0);
    if (
      (m === null && (a = f),
      (l.baseState = a),
      (l.firstBaseUpdate = u),
      (l.lastBaseUpdate = m),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do ((o |= l.lane), (l = l.next));
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    ((Bt |= o), (e.lanes = o), (e.memoizedState = f));
  }
}
function ta(e, t, n) {
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
var cr = {},
  Ue = kt(cr),
  bn = kt(cr),
  er = kt(cr);
function jt(e) {
  if (e === cr) throw Error(S(174));
  return e;
}
function Wo(e, t) {
  switch ((O(er, t), O(bn, e), O(Ue, cr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Pi(null, '');
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Pi(t, e)));
  }
  ($(Ue), O(Ue, t));
}
function cn() {
  ($(Ue), $(bn), $(er));
}
function Xu(e) {
  jt(er.current);
  var t = jt(Ue.current),
    n = Pi(t, e.type);
  t !== n && (O(bn, e), O(Ue, n));
}
function Vo(e) {
  bn.current === e && ($(Ue), $(bn));
}
var U = kt(0);
function fl(e) {
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
var ai = [];
function Yo() {
  for (var e = 0; e < ai.length; e++)
    ai[e]._workInProgressVersionPrimary = null;
  ai.length = 0;
}
var Ur = tt.ReactCurrentDispatcher,
  ui = tt.ReactCurrentBatchConfig,
  Dt = 0,
  Z = null,
  X = null,
  b = null,
  hl = !1,
  In = !1,
  tr = 0,
  uf = 0;
function le() {
  throw Error(S(321));
}
function Qo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Fe(e[n], t[n])) return !1;
  return !0;
}
function Ko(e, t, n, r, l, i) {
  if (
    ((Dt = i),
    (Z = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ur.current = e === null || e.memoizedState === null ? ff : hf),
    (e = n(r, l)),
    In)
  ) {
    i = 0;
    do {
      if (((In = !1), (tr = 0), 25 <= i)) throw Error(S(301));
      ((i += 1),
        (b = X = null),
        (t.updateQueue = null),
        (Ur.current = mf),
        (e = n(r, l)));
    } while (In);
  }
  if (
    ((Ur.current = ml),
    (t = X !== null && X.next !== null),
    (Dt = 0),
    (b = X = Z = null),
    (hl = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function Go() {
  var e = tr !== 0;
  return ((tr = 0), e);
}
function Ie() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (b === null ? (Z.memoizedState = b = e) : (b = b.next = e), b);
}
function je() {
  if (X === null) {
    var e = Z.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = b === null ? Z.memoizedState : b.next;
  if (t !== null) ((b = t), (X = e));
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
      b === null ? (Z.memoizedState = b = e) : (b = b.next = e));
  }
  return b;
}
function nr(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function ci(e) {
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
    var s = (o = null),
      a = null,
      u = i;
    do {
      var m = u.lane;
      if ((Dt & m) === m)
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
        var f = {
          lane: m,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (a === null ? ((s = a = f), (o = r)) : (a = a.next = f),
          (Z.lanes |= m),
          (Bt |= m));
      }
      u = u.next;
    } while (u !== null && u !== i);
    (a === null ? (o = r) : (a.next = s),
      Fe(r, t.memoizedState) || (he = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do ((i = l.lane), (Z.lanes |= i), (Bt |= i), (l = l.next));
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function di(e) {
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
    (Fe(i, t.memoizedState) || (he = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function Ju() {}
function qu(e, t) {
  var n = Z,
    r = je(),
    l = t(),
    i = !Fe(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (he = !0)),
    (r = r.queue),
    Xo(tc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (b !== null && b.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      rr(9, ec.bind(null, n, r, l, t), void 0, null),
      ee === null)
    )
      throw Error(S(349));
    Dt & 30 || bu(n, t, l);
  }
  return l;
}
function bu(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function ec(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), nc(t) && rc(e));
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
    return !Fe(e, n);
  } catch {
    return !0;
  }
}
function rc(e) {
  var t = qe(e, 1);
  t !== null && Be(t, e, 1, -1);
}
function na(e) {
  var t = Ie();
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
    (e = e.dispatch = pf.bind(null, Z, e)),
    [t.memoizedState, e]
  );
}
function rr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function lc() {
  return je().memoizedState;
}
function Zr(e, t, n, r) {
  var l = Ie();
  ((Z.flags |= e),
    (l.memoizedState = rr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Rl(e, t, n, r) {
  var l = je();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (X !== null) {
    var o = X.memoizedState;
    if (((i = o.destroy), r !== null && Qo(r, o.deps))) {
      l.memoizedState = rr(t, n, i, r);
      return;
    }
  }
  ((Z.flags |= e), (l.memoizedState = rr(1 | t, n, i, r)));
}
function ra(e, t) {
  return Zr(8390656, 8, e, t);
}
function Xo(e, t) {
  return Rl(2048, 8, e, t);
}
function ic(e, t) {
  return Rl(4, 2, e, t);
}
function oc(e, t) {
  return Rl(4, 4, e, t);
}
function sc(e, t) {
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
function ac(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Rl(4, 4, sc.bind(null, t, e), n)
  );
}
function Jo() {}
function uc(e, t) {
  var n = je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function cc(e, t) {
  var n = je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function dc(e, t, n) {
  return Dt & 21
    ? (Fe(n, t) || ((n = vu()), (Z.lanes |= n), (Bt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (he = !0)), (e.memoizedState = n));
}
function cf(e, t) {
  var n = F;
  ((F = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = ui.transition;
  ui.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((F = n), (ui.transition = r));
  }
}
function pc() {
  return je().memoizedState;
}
function df(e, t, n) {
  var r = vt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    fc(e))
  )
    hc(t, n);
  else if (((n = Ku(e, t, n, r)), n !== null)) {
    var l = ue();
    (Be(n, e, r, l), mc(n, t, r));
  }
}
function pf(e, t, n) {
  var r = vt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (fc(e)) hc(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          s = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = s), Fe(s, o))) {
          var a = t.interleaved;
          (a === null
            ? ((l.next = l), Zo(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Ku(e, t, l, r)),
      n !== null && ((l = ue()), Be(n, e, r, l), mc(n, t, r)));
  }
}
function fc(e) {
  var t = e.alternate;
  return e === Z || (t !== null && t === Z);
}
function hc(e, t) {
  In = hl = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function mc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Po(e, n));
  }
}
var ml = {
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
  ff = {
    readContext: Pe,
    useCallback: function (e, t) {
      return ((Ie().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Pe,
    useEffect: ra,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Zr(4194308, 4, sc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Zr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Zr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ie();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ie();
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
        (e = e.dispatch = df.bind(null, Z, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ie();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: na,
    useDebugValue: Jo,
    useDeferredValue: function (e) {
      return (Ie().memoizedState = e);
    },
    useTransition: function () {
      var e = na(!1),
        t = e[0];
      return ((e = cf.bind(null, e[1])), (Ie().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Z,
        l = Ie();
      if (A) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), ee === null)) throw Error(S(349));
        Dt & 30 || bu(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        ra(tc.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        rr(9, ec.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ie(),
        t = ee.identifierPrefix;
      if (A) {
        var n = Qe,
          r = Ye;
        ((n = (r & ~(1 << (32 - De(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = tr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':'));
      } else ((n = uf++), (t = ':' + t + 'r' + n.toString(32) + ':'));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  hf = {
    readContext: Pe,
    useCallback: uc,
    useContext: Pe,
    useEffect: Xo,
    useImperativeHandle: ac,
    useInsertionEffect: ic,
    useLayoutEffect: oc,
    useMemo: cc,
    useReducer: ci,
    useRef: lc,
    useState: function () {
      return ci(nr);
    },
    useDebugValue: Jo,
    useDeferredValue: function (e) {
      var t = je();
      return dc(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = ci(nr)[0],
        t = je().memoizedState;
      return [e, t];
    },
    useMutableSource: Ju,
    useSyncExternalStore: qu,
    useId: pc,
    unstable_isNewReconciler: !1,
  },
  mf = {
    readContext: Pe,
    useCallback: uc,
    useContext: Pe,
    useEffect: Xo,
    useImperativeHandle: ac,
    useInsertionEffect: ic,
    useLayoutEffect: oc,
    useMemo: cc,
    useReducer: di,
    useRef: lc,
    useState: function () {
      return di(nr);
    },
    useDebugValue: Jo,
    useDeferredValue: function (e) {
      var t = je();
      return X === null ? (t.memoizedState = e) : dc(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = di(nr)[0],
        t = je().memoizedState;
      return [e, t];
    },
    useMutableSource: Ju,
    useSyncExternalStore: qu,
    useId: pc,
    unstable_isNewReconciler: !1,
  };
function Le(e, t) {
  if (e && e.defaultProps) {
    ((t = W({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Gi(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : W({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Ll = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? It(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = vt(e),
      i = Ke(r, l);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = ht(e, i, l)),
      t !== null && (Be(t, e, l, r), Ar(t, e, l)));
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
      t !== null && (Be(t, e, l, r), Ar(t, e, l)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ue(),
      r = vt(e),
      l = Ke(n, r);
    ((l.tag = 2),
      t != null && (l.callback = t),
      (t = ht(e, l, r)),
      t !== null && (Be(t, e, r, n), Ar(t, e, r)));
  },
};
function la(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Gn(n, r) || !Gn(l, i)
        : !0
  );
}
function vc(e, t, n) {
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
    (t.updater = Ll),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ia(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ll.enqueueReplaceState(t, t.state, null));
}
function Xi(e, t, n, r) {
  var l = e.stateNode;
  ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ho(e));
  var i = t.contextType;
  (typeof i == 'object' && i !== null
    ? (l.context = Pe(i))
    : ((i = ve(t) ? zt : se.current), (l.context = sn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Gi(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ll.enqueueReplaceState(l, l.state, null),
      pl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308));
}
function dn(e, t) {
  try {
    var n = '',
      r = t;
    do ((n += Zd(r)), (r = r.return));
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
function pi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ji(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var vf = typeof WeakMap == 'function' ? WeakMap : Map;
function yc(e, t, n) {
  ((n = Ke(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (yl || ((yl = !0), (so = r)), Ji(e, t));
    }),
    n
  );
}
function gc(e, t, n) {
  ((n = Ke(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    ((n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ji(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        (Ji(e, t),
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
function oa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new vf();
    var l = new Set();
    r.set(t, l);
  } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
  l.has(n) || (l.add(n), (e = Rf.bind(null, e, t, n)), t.then(e, e));
}
function sa(e) {
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
function aa(e, t, n, r, l) {
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
var yf = tt.ReactCurrentOwner,
  he = !1;
function ae(e, t, n, r) {
  t.child = e === null ? Qu(t, null, n, r) : un(t, e.child, n, r);
}
function ua(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    rn(t, l),
    (r = Ko(e, t, n, r, i, l)),
    (n = Go()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        be(e, t, l))
      : (A && n && Fo(t), (t.flags |= 1), ae(e, t, r, l), t.child)
  );
}
function ca(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !is(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), wc(e, t, i, r, l))
      : ((e = Yr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Gn), n(o, r) && e.ref === t.ref)
    )
      return be(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = yt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function wc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Gn(i, r) && e.ref === t.ref)
      if (((he = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (he = !0);
      else return ((t.lanes = e.lanes), be(e, t, l));
  }
  return qi(e, t, n, r, l);
}
function xc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        O(qt, ge),
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
          O(qt, ge),
          (ge |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        O(qt, ge),
        (ge |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      O(qt, ge),
      (ge |= r));
  return (ae(e, t, l, n), t.child);
}
function kc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function qi(e, t, n, r, l) {
  var i = ve(n) ? zt : se.current;
  return (
    (i = sn(t, i)),
    rn(t, l),
    (n = Ko(e, t, n, r, i, l)),
    (r = Go()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        be(e, t, l))
      : (A && r && Fo(t), (t.flags |= 1), ae(e, t, n, l), t.child)
  );
}
function da(e, t, n, r, l) {
  if (ve(n)) {
    var i = !0;
    sl(t);
  } else i = !1;
  if ((rn(t, l), t.stateNode === null))
    (Hr(e, t), vc(t, n, r), Xi(t, n, r, l), (r = !0));
  else if (e === null) {
    var o = t.stateNode,
      s = t.memoizedProps;
    o.props = s;
    var a = o.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = Pe(u))
      : ((u = ve(n) ? zt : se.current), (u = sn(t, u)));
    var m = n.getDerivedStateFromProps,
      f =
        typeof m == 'function' ||
        typeof o.getSnapshotBeforeUpdate == 'function';
    (f ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((s !== r || a !== u) && ia(t, o, r, u)),
      (it = !1));
    var v = t.memoizedState;
    ((o.state = v),
      pl(t, r, o, l),
      (a = t.memoizedState),
      s !== r || v !== a || me.current || it
        ? (typeof m == 'function' && (Gi(t, n, m, r), (a = t.memoizedState)),
          (s = it || la(t, n, s, r, v, a, u))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = u),
          (r = s))
        : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((o = t.stateNode),
      Gu(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Le(t.type, s)),
      (o.props = u),
      (f = t.pendingProps),
      (v = o.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = Pe(a))
        : ((a = ve(n) ? zt : se.current), (a = sn(t, a))));
    var w = n.getDerivedStateFromProps;
    ((m =
      typeof w == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((s !== f || v !== a) && ia(t, o, r, a)),
      (it = !1),
      (v = t.memoizedState),
      (o.state = v),
      pl(t, r, o, l));
    var g = t.memoizedState;
    s !== f || v !== g || me.current || it
      ? (typeof w == 'function' && (Gi(t, n, w, r), (g = t.memoizedState)),
        (u = it || la(t, n, u, r, v, g, a) || !1)
          ? (m ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' &&
                o.componentWillUpdate(r, g, a),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, g, a)),
            typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (o.props = r),
        (o.state = g),
        (o.context = a),
        (r = u))
      : (typeof o.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return bi(e, t, n, r, i, l);
}
function bi(e, t, n, r, l, i) {
  kc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return (l && Xs(t, n, !1), be(e, t, i));
  ((r = t.stateNode), (yf.current = t));
  var s =
    o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = un(t, e.child, null, i)), (t.child = un(t, null, s, i)))
      : ae(e, t, s, i),
    (t.memoizedState = r.state),
    l && Xs(t, n, !0),
    t.child
  );
}
function Sc(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Gs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Gs(e, t.context, !1),
    Wo(e, t.containerInfo));
}
function pa(e, t, n, r, l) {
  return (an(), Io(l), (t.flags |= 256), ae(e, t, n, r), t.child);
}
var eo = { dehydrated: null, treeContext: null, retryLane: 0 };
function to(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function _c(e, t, n) {
  var r = t.pendingProps,
    l = U.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    s;
  if (
    ((s = o) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    O(U, l & 1),
    e === null)
  )
    return (
      Qi(t),
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
              (t.child.memoizedState = to(n)),
              (t.memoizedState = eo),
              e)
            : qo(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return gf(e, t, o, r, s, l, n);
  if (i) {
    ((i = r.fallback), (o = t.mode), (l = e.child), (s = l.sibling));
    var a = { mode: 'hidden', children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = yt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (i = yt(s, i)) : ((i = Lt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? to(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = eo),
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
function qo(e, t) {
  return (
    (t = Dl({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function jr(e, t, n, r) {
  return (
    r !== null && Io(r),
    un(t, e.child, null, n),
    (e = qo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function gf(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = pi(Error(S(422)))), jr(e, t, o, r))
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
          (t.child.memoizedState = to(o)),
          (t.memoizedState = eo),
          i);
  if (!(t.mode & 1)) return jr(e, t, o, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (
      (r = s),
      (i = Error(S(419))),
      (r = pi(i, r, void 0)),
      jr(e, t, o, r)
    );
  }
  if (((s = (o & e.childLanes) !== 0), he || s)) {
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
          ((i.retryLane = l), qe(e, l), Be(r, e, l, -1)));
    }
    return (ls(), (r = pi(Error(S(421)))), jr(e, t, o, r));
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Lf.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (we = ft(l.nextSibling)),
      (xe = t),
      (A = !0),
      (Me = null),
      e !== null &&
        ((Ee[Ce++] = Ye),
        (Ee[Ce++] = Qe),
        (Ee[Ce++] = Mt),
        (Ye = e.id),
        (Qe = e.overflow),
        (Mt = t)),
      (t = qo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function fa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Ki(e.return, t, n));
}
function fi(e, t, n, r, l) {
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
function Ec(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ae(e, t, r.children, n), (r = U.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && fa(e, n, t);
        else if (e.tag === 19) fa(e, n, t);
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
  if ((O(U, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          ((e = n.alternate),
            e !== null && fl(e) === null && (l = n),
            (n = n.sibling));
        ((n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          fi(t, !1, l, n, i));
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && fl(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        fi(t, !0, n, null, i);
        break;
      case 'together':
        fi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Hr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function be(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Bt |= t.lanes),
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
function wf(e, t, n) {
  switch (t.tag) {
    case 3:
      (Sc(t), an());
      break;
    case 5:
      Xu(t);
      break;
    case 1:
      ve(t.type) && sl(t);
      break;
    case 4:
      Wo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      (O(cl, r._currentValue), (r._currentValue = l));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (O(U, U.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? _c(e, t, n)
            : (O(U, U.current & 1),
              (e = be(e, t, n)),
              e !== null ? e.sibling : null);
      O(U, U.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ec(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        O(U, U.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), xc(e, t, n));
  }
  return be(e, t, n);
}
var Cc, no, Nc, Tc;
Cc = function (e, t) {
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
no = function () {};
Nc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    ((e = t.stateNode), jt(Ue.current));
    var i = null;
    switch (n) {
      case 'input':
        ((l = Ei(e, l)), (r = Ei(e, r)), (i = []));
        break;
      case 'select':
        ((l = W({}, l, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (i = []));
        break;
      case 'textarea':
        ((l = Ti(e, l)), (r = Ti(e, r)), (i = []));
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = il);
    }
    ji(n, r);
    var o;
    n = null;
    for (u in l)
      if (!r.hasOwnProperty(u) && l.hasOwnProperty(u) && l[u] != null)
        if (u === 'style') {
          var s = l[u];
          for (o in s) s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
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
      var a = r[u];
      if (
        ((s = l != null ? l[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === 'style')
          if (s) {
            for (o in s)
              !s.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ''));
            for (o in a)
              a.hasOwnProperty(o) &&
                s[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else (n || (i || (i = []), i.push(u, n)), (n = a));
        else
          u === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (i = i || []).push(u, a))
            : u === 'children'
              ? (typeof a != 'string' && typeof a != 'number') ||
                (i = i || []).push(u, '' + a)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (Zn.hasOwnProperty(u)
                  ? (a != null && u === 'onScroll' && I('scroll', e),
                    i || s === a || (i = []))
                  : (i = i || []).push(u, a));
    }
    n && (i = i || []).push('style', n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Tc = function (e, t, n, r) {
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
function xf(e, t, n) {
  var r = t.pendingProps;
  switch ((Oo(t), t.tag)) {
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
      return (ve(t.type) && ol(), ie(t), null);
    case 3:
      return (
        (r = t.stateNode),
        cn(),
        $(me),
        $(se),
        Yo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Tr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Me !== null && (co(Me), (Me = null)))),
        no(e, t),
        ie(t),
        null
      );
    case 5:
      Vo(t);
      var l = jt(er.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Nc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return (ie(t), null);
        }
        if (((e = jt(Ue.current)), Tr(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[$e] = t), (r[qn] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              (I('cancel', r), I('close', r));
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              I('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < zn.length; l++) I(zn[l], r);
              break;
            case 'source':
              I('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              (I('error', r), I('load', r));
              break;
            case 'details':
              I('toggle', r);
              break;
            case 'input':
              (Ss(r, i), I('invalid', r));
              break;
            case 'select':
              ((r._wrapperState = { wasMultiple: !!i.multiple }),
                I('invalid', r));
              break;
            case 'textarea':
              (Es(r, i), I('invalid', r));
          }
          (ji(n, i), (l = null));
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var s = i[o];
              o === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Nr(r.textContent, s, e),
                    (l = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Nr(r.textContent, s, e),
                    (l = ['children', '' + s]))
                : Zn.hasOwnProperty(o) &&
                  s != null &&
                  o === 'onScroll' &&
                  I('scroll', r);
            }
          switch (n) {
            case 'input':
              (gr(r), _s(r, i, !0));
              break;
            case 'textarea':
              (gr(r), Cs(r));
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = il);
          }
          ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((o = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = tu(n)),
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
            (e[qn] = r),
            Cc(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = Ri(n, r)), n)) {
              case 'dialog':
                (I('cancel', e), I('close', e), (l = r));
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                (I('load', e), (l = r));
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < zn.length; l++) I(zn[l], e);
                l = r;
                break;
              case 'source':
                (I('error', e), (l = r));
                break;
              case 'img':
              case 'image':
              case 'link':
                (I('error', e), I('load', e), (l = r));
                break;
              case 'details':
                (I('toggle', e), (l = r));
                break;
              case 'input':
                (Ss(e, r), (l = Ei(e, r)), I('invalid', e));
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = W({}, r, { value: void 0 })),
                  I('invalid', e));
                break;
              case 'textarea':
                (Es(e, r), (l = Ti(e, r)), I('invalid', e));
                break;
              default:
                l = r;
            }
            (ji(n, l), (s = l));
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === 'style'
                  ? lu(e, a)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((a = a ? a.__html : void 0), a != null && nu(e, a))
                    : i === 'children'
                      ? typeof a == 'string'
                        ? (n !== 'textarea' || a !== '') && Hn(e, a)
                        : typeof a == 'number' && Hn(e, '' + a)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (Zn.hasOwnProperty(i)
                          ? a != null && i === 'onScroll' && I('scroll', e)
                          : a != null && So(e, i, a, o));
              }
            switch (n) {
              case 'input':
                (gr(e), _s(e, r, !1));
                break;
              case 'textarea':
                (gr(e), Cs(e));
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + gt(r.value));
                break;
              case 'select':
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? bt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      bt(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = il);
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
      if (e && t.stateNode != null) Tc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(S(166));
        if (((n = jt(er.current)), jt(Ue.current), Tr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[$e] = t),
            (i = r.nodeValue !== n) && ((e = xe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Nr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Nr(r.nodeValue, n, (e.mode & 1) !== 0);
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
        ($(U),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (A && we !== null && t.mode & 1 && !(t.flags & 128))
          (Vu(), an(), (t.flags |= 98560), (i = !1));
        else if (((i = Tr(t)), r !== null && r.dehydrated !== null)) {
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
        } else (Me !== null && (co(Me), (Me = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || U.current & 1 ? J === 0 && (J = 3) : ls())),
          t.updateQueue !== null && (t.flags |= 4),
          ie(t),
          null);
    case 4:
      return (
        cn(),
        no(e, t),
        e === null && Xn(t.stateNode.containerInfo),
        ie(t),
        null
      );
    case 10:
      return (Uo(t.type._context), ie(t), null);
    case 17:
      return (ve(t.type) && ol(), ie(t), null);
    case 19:
      if (($(U), (i = t.memoizedState), i === null)) return (ie(t), null);
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Nn(i, !1);
        else {
          if (J !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = fl(e)), o !== null)) {
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
                return (O(U, (U.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Q() > pn &&
            ((t.flags |= 128), (r = !0), Nn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = fl(o)), e !== null)) {
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
            2 * Q() - i.renderingStartTime > pn &&
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
          (i.renderingStartTime = Q()),
          (t.sibling = null),
          (n = U.current),
          O(U, r ? (n & 1) | 2 : n & 1),
          t)
        : (ie(t), null);
    case 22:
    case 23:
      return (
        rs(),
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
function kf(e, t) {
  switch ((Oo(t), t.tag)) {
    case 1:
      return (
        ve(t.type) && ol(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        cn(),
        $(me),
        $(se),
        Yo(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Vo(t), null);
    case 13:
      if (($(U), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        an();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ($(U), null);
    case 4:
      return (cn(), null);
    case 10:
      return (Uo(t.type._context), null);
    case 22:
    case 23:
      return (rs(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Rr = !1,
  oe = !1,
  Sf = typeof WeakSet == 'function' ? WeakSet : Set,
  C = null;
function Jt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        V(e, t, r);
      }
    else n.current = null;
}
function ro(e, t, n) {
  try {
    n();
  } catch (r) {
    V(e, t, r);
  }
}
var ha = !1;
function _f(e, t) {
  if (((Ai = nl), (e = zu()), Bo(e))) {
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
            s = -1,
            a = -1,
            u = 0,
            m = 0,
            f = e,
            v = null;
          t: for (;;) {
            for (
              var w;
              f !== n || (l !== 0 && f.nodeType !== 3) || (s = o + l),
                f !== i || (r !== 0 && f.nodeType !== 3) || (a = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (w = f.firstChild) !== null;

            )
              ((v = f), (f = w));
            for (;;) {
              if (f === e) break t;
              if (
                (v === n && ++u === l && (s = o),
                v === i && ++m === r && (a = o),
                (w = f.nextSibling) !== null)
              )
                break;
              ((f = v), (v = f.parentNode));
            }
            f = w;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ui = { focusedElem: e, selectionRange: n }, nl = !1, C = t; C !== null; )
    if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (C = e));
    else
      for (; C !== null; ) {
        t = C;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var x = g.memoizedProps,
                    E = g.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Le(t.type, x),
                      E
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = '')
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
                throw Error(S(163));
            }
        } catch (k) {
          V(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (C = e));
          break;
        }
        C = t.return;
      }
  return ((g = ha), (ha = !1), g);
}
function $n(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        ((l.destroy = void 0), i !== void 0 && ro(t, n, i));
      }
      l = l.next;
    } while (l !== r);
  }
}
function zl(e, t) {
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
function lo(e) {
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
function Pc(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Pc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[$e], delete t[qn], delete t[Wi], delete t[lf], delete t[of])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function jc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ma(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || jc(e.return)) return null;
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
function io(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = il)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (io(e, t, n), e = e.sibling; e !== null; )
      (io(e, t, n), (e = e.sibling));
}
function oo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (oo(e, t, n), e = e.sibling; e !== null; )
      (oo(e, t, n), (e = e.sibling));
}
var te = null,
  ze = !1;
function rt(e, t, n) {
  for (n = n.child; n !== null; ) (Rc(e, t, n), (n = n.sibling));
}
function Rc(e, t, n) {
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
              ? oi(e.parentNode, n)
              : e.nodeType === 1 && oi(e, n),
            Qn(e))
          : oi(te, n.stateNode));
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
            o !== void 0 && (i & 2 || i & 4) && ro(n, t, o),
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
        } catch (s) {
          V(n, t, s);
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
function va(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Sf()),
      t.forEach(function (r) {
        var l = zf.bind(null, e, r);
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
          s = o;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              ((te = s.stateNode), (ze = !1));
              break e;
            case 3:
              ((te = s.stateNode.containerInfo), (ze = !0));
              break e;
            case 4:
              ((te = s.stateNode.containerInfo), (ze = !0));
              break e;
          }
          s = s.return;
        }
        if (te === null) throw Error(S(160));
        (Rc(i, o, l), (te = null), (ze = !1));
        var a = l.alternate;
        (a !== null && (a.return = null), (l.return = null));
      } catch (u) {
        V(l, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Lc(t, e), (t = t.sibling));
}
function Lc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Re(t, e), Oe(e), r & 4)) {
        try {
          ($n(3, e, e.return), zl(3, e));
        } catch (x) {
          V(e, e.return, x);
        }
        try {
          $n(5, e, e.return);
        } catch (x) {
          V(e, e.return, x);
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
        } catch (x) {
          V(e, e.return, x);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            (s === 'input' && i.type === 'radio' && i.name != null && ba(l, i),
              Ri(s, o));
            var u = Ri(s, i);
            for (o = 0; o < a.length; o += 2) {
              var m = a[o],
                f = a[o + 1];
              m === 'style'
                ? lu(l, f)
                : m === 'dangerouslySetInnerHTML'
                  ? nu(l, f)
                  : m === 'children'
                    ? Hn(l, f)
                    : So(l, m, f, u);
            }
            switch (s) {
              case 'input':
                Ci(l, i);
                break;
              case 'textarea':
                eu(l, i);
                break;
              case 'select':
                var v = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? bt(l, !!i.multiple, w, !1)
                  : v !== !!i.multiple &&
                    (i.defaultValue != null
                      ? bt(l, !!i.multiple, i.defaultValue, !0)
                      : bt(l, !!i.multiple, i.multiple ? [] : '', !1));
            }
            l[qn] = i;
          } catch (x) {
            V(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Re(t, e), Oe(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        ((l = e.stateNode), (i = e.memoizedProps));
        try {
          l.nodeValue = i;
        } catch (x) {
          V(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Re(t, e), Oe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Qn(t.containerInfo);
        } catch (x) {
          V(e, e.return, x);
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
            (ts = Q())),
        r & 4 && va(e));
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((oe = (u = oe) || m), Re(t, e), (oe = u)) : Re(t, e),
        Oe(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !m && e.mode & 1)
        )
          for (C = e, m = e.child; m !== null; ) {
            for (f = C = m; C !== null; ) {
              switch (((v = C), (w = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  $n(4, v, v.return);
                  break;
                case 1:
                  Jt(v, v.return);
                  var g = v.stateNode;
                  if (typeof g.componentWillUnmount == 'function') {
                    ((r = v), (n = v.return));
                    try {
                      ((t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount());
                    } catch (x) {
                      V(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Jt(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    ga(f);
                    continue;
                  }
              }
              w !== null ? ((w.return = v), (C = w)) : ga(f);
            }
            m = m.sibling;
          }
        e: for (m = null, f = e; ; ) {
          if (f.tag === 5) {
            if (m === null) {
              m = f;
              try {
                ((l = f.stateNode),
                  u
                    ? ((i = l.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((s = f.stateNode),
                      (a = f.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty('display')
                          ? a.display
                          : null),
                      (s.style.display = ru('display', o))));
              } catch (x) {
                V(e, e.return, x);
              }
            }
          } else if (f.tag === 6) {
            if (m === null)
              try {
                f.stateNode.nodeValue = u ? '' : f.memoizedProps;
              } catch (x) {
                V(e, e.return, x);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            (m === f && (m = null), (f = f.return));
          }
          (m === f && (m = null),
            (f.sibling.return = f.return),
            (f = f.sibling));
        }
      }
      break;
    case 19:
      (Re(t, e), Oe(e), r & 4 && va(e));
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
          if (jc(n)) {
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
          var i = ma(e);
          oo(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            s = ma(e);
          io(e, s, o);
          break;
        default:
          throw Error(S(161));
      }
    } catch (a) {
      V(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ef(e, t, n) {
  ((C = e), zc(e));
}
function zc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Rr;
      if (!o) {
        var s = l.alternate,
          a = (s !== null && s.memoizedState !== null) || oe;
        s = Rr;
        var u = oe;
        if (((Rr = o), (oe = a) && !u))
          for (C = l; C !== null; )
            ((o = C),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? wa(l)
                : a !== null
                  ? ((a.return = o), (C = a))
                  : wa(l));
        for (; i !== null; ) ((C = i), zc(i), (i = i.sibling));
        ((C = l), (Rr = s), (oe = u));
      }
      ya(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (C = i)) : ya(e);
  }
}
function ya(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              oe || zl(5, t);
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
              i !== null && ta(t, i, r);
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
                ta(t, o, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
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
                    var f = m.dehydrated;
                    f !== null && Qn(f);
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
        oe || (t.flags & 512 && lo(t));
      } catch (v) {
        V(t, t.return, v);
      }
    }
    if (t === e) {
      C = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (C = n));
      break;
    }
    C = t.return;
  }
}
function ga(e) {
  for (; C !== null; ) {
    var t = C;
    if (t === e) {
      C = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (C = n));
      break;
    }
    C = t.return;
  }
}
function wa(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            zl(4, t);
          } catch (a) {
            V(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              V(t, l, a);
            }
          }
          var i = t.return;
          try {
            lo(t);
          } catch (a) {
            V(t, i, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            lo(t);
          } catch (a) {
            V(t, o, a);
          }
      }
    } catch (a) {
      V(t, t.return, a);
    }
    if (t === e) {
      C = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      ((s.return = t.return), (C = s));
      break;
    }
    C = t.return;
  }
}
var Cf = Math.ceil,
  vl = tt.ReactCurrentDispatcher,
  bo = tt.ReactCurrentOwner,
  Te = tt.ReactCurrentBatchConfig,
  B = 0,
  ee = null,
  G = null,
  ne = 0,
  ge = 0,
  qt = kt(0),
  J = 0,
  lr = null,
  Bt = 0,
  Ml = 0,
  es = 0,
  An = null,
  fe = null,
  ts = 0,
  pn = 1 / 0,
  We = null,
  yl = !1,
  so = null,
  mt = null,
  Lr = !1,
  ut = null,
  gl = 0,
  Un = 0,
  ao = null,
  Wr = -1,
  Vr = 0;
function ue() {
  return B & 6 ? Q() : Wr !== -1 ? Wr : (Wr = Q());
}
function vt(e) {
  return e.mode & 1
    ? B & 2 && ne !== 0
      ? ne & -ne
      : af.transition !== null
        ? (Vr === 0 && (Vr = vu()), Vr)
        : ((e = F),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : _u(e.type))),
          e)
    : 1;
}
function Be(e, t, n, r) {
  if (50 < Un) throw ((Un = 0), (ao = null), Error(S(185)));
  (sr(e, n, r),
    (!(B & 2) || e !== ee) &&
      (e === ee && (!(B & 2) && (Ml |= n), J === 4 && st(e, ne)),
      ye(e, r),
      n === 1 && B === 0 && !(t.mode & 1) && ((pn = Q() + 500), jl && St())));
}
function ye(e, t) {
  var n = e.callbackNode;
  sp(e, t);
  var r = tl(e, e === ee ? ne : 0);
  if (r === 0)
    (n !== null && Ps(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ps(n), t === 1))
      (e.tag === 0 ? sf(xa.bind(null, e)) : Zu(xa.bind(null, e)),
        nf(function () {
          !(B & 6) && St();
        }),
        (n = null));
    else {
      switch (yu(r)) {
        case 1:
          n = To;
          break;
        case 4:
          n = hu;
          break;
        case 16:
          n = el;
          break;
        case 536870912:
          n = mu;
          break;
        default:
          n = el;
      }
      n = Ac(n, Mc.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Mc(e, t) {
  if (((Wr = -1), (Vr = 0), B & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (ln() && e.callbackNode !== n) return null;
  var r = tl(e, e === ee ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = wl(e, r);
  else {
    t = r;
    var l = B;
    B |= 2;
    var i = Bc();
    (ee !== e || ne !== t) && ((We = null), (pn = Q() + 500), Rt(e, t));
    do
      try {
        Pf();
        break;
      } catch (s) {
        Dc(e, s);
      }
    while (!0);
    (Ao(),
      (vl.current = i),
      (B = l),
      G !== null ? (t = 0) : ((ee = null), (ne = 0), (t = J)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Bi(e)), l !== 0 && ((r = l), (t = uo(e, l)))), t === 1)
    )
      throw ((n = lr), Rt(e, 0), st(e, r), ye(e, Q()), n);
    if (t === 6) st(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Nf(l) &&
          ((t = wl(e, r)),
          t === 2 && ((i = Bi(e)), i !== 0 && ((r = i), (t = uo(e, i)))),
          t === 1))
      )
        throw ((n = lr), Rt(e, 0), st(e, r), ye(e, Q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Nt(e, fe, We);
          break;
        case 3:
          if (
            (st(e, r), (r & 130023424) === r && ((t = ts + 500 - Q()), 10 < t))
          ) {
            if (tl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              (ue(), (e.pingedLanes |= e.suspendedLanes & l));
              break;
            }
            e.timeoutHandle = Hi(Nt.bind(null, e, fe, We), t);
            break;
          }
          Nt(e, fe, We);
          break;
        case 4:
          if ((st(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - De(r);
            ((i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i));
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
                          : 1960 * Cf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Hi(Nt.bind(null, e, fe, We), r);
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
  return (ye(e, Q()), e.callbackNode === n ? Mc.bind(null, e) : null);
}
function uo(e, t) {
  var n = An;
  return (
    e.current.memoizedState.isDehydrated && (Rt(e, t).flags |= 256),
    (e = wl(e, t)),
    e !== 2 && ((t = fe), (fe = n), t !== null && co(t)),
    e
  );
}
function co(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function Nf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Fe(i(), l)) return !1;
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
    t &= ~es,
      t &= ~Ml,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - De(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function xa(e) {
  if (B & 6) throw Error(S(327));
  ln();
  var t = tl(e, 0);
  if (!(t & 1)) return (ye(e, Q()), null);
  var n = wl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Bi(e);
    r !== 0 && ((t = r), (n = uo(e, r)));
  }
  if (n === 1) throw ((n = lr), Rt(e, 0), st(e, t), ye(e, Q()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Nt(e, fe, We),
    ye(e, Q()),
    null
  );
}
function ns(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    ((B = n), B === 0 && ((pn = Q() + 500), jl && St()));
  }
}
function Ft(e) {
  ut !== null && ut.tag === 0 && !(B & 6) && ln();
  var t = B;
  B |= 1;
  var n = Te.transition,
    r = F;
  try {
    if (((Te.transition = null), (F = 1), e)) return e();
  } finally {
    ((F = r), (Te.transition = n), (B = t), !(B & 6) && St());
  }
}
function rs() {
  ((ge = qt.current), $(qt));
}
function Rt(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), tf(n)), G !== null))
    for (n = G.return; n !== null; ) {
      var r = n;
      switch ((Oo(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && ol());
          break;
        case 3:
          (cn(), $(me), $(se), Yo());
          break;
        case 5:
          Vo(r);
          break;
        case 4:
          cn();
          break;
        case 13:
          $(U);
          break;
        case 19:
          $(U);
          break;
        case 10:
          Uo(r.type._context);
          break;
        case 22:
        case 23:
          rs();
      }
      n = n.return;
    }
  if (
    ((ee = e),
    (G = e = yt(e.current, null)),
    (ne = ge = t),
    (J = 0),
    (lr = null),
    (es = Ml = Bt = 0),
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
function Dc(e, t) {
  do {
    var n = G;
    try {
      if ((Ao(), (Ur.current = ml), hl)) {
        for (var r = Z.memoizedState; r !== null; ) {
          var l = r.queue;
          (l !== null && (l.pending = null), (r = r.next));
        }
        hl = !1;
      }
      if (
        ((Dt = 0),
        (b = X = Z = null),
        (In = !1),
        (tr = 0),
        (bo.current = null),
        n === null || n.return === null)
      ) {
        ((J = 1), (lr = t), (G = null));
        break;
      }
      e: {
        var i = e,
          o = n.return,
          s = n,
          a = t;
        if (
          ((t = ne),
          (s.flags |= 32768),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var u = a,
            m = s,
            f = m.tag;
          if (!(m.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var v = m.alternate;
            v
              ? ((m.updateQueue = v.updateQueue),
                (m.memoizedState = v.memoizedState),
                (m.lanes = v.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var w = sa(o);
          if (w !== null) {
            ((w.flags &= -257),
              aa(w, o, s, i, t),
              w.mode & 1 && oa(i, u, t),
              (t = w),
              (a = u));
            var g = t.updateQueue;
            if (g === null) {
              var x = new Set();
              (x.add(a), (t.updateQueue = x));
            } else g.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              (oa(i, u, t), ls());
              break e;
            }
            a = Error(S(426));
          }
        } else if (A && s.mode & 1) {
          var E = sa(o);
          if (E !== null) {
            (!(E.flags & 65536) && (E.flags |= 256),
              aa(E, o, s, i, t),
              Io(dn(a, s)));
            break e;
          }
        }
        ((i = a = dn(a, s)),
          J !== 4 && (J = 2),
          An === null ? (An = [i]) : An.push(i),
          (i = o));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var d = yc(i, a, t);
              ea(i, d);
              break e;
            case 1:
              s = a;
              var c = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == 'function' ||
                  (p !== null &&
                    typeof p.componentDidCatch == 'function' &&
                    (mt === null || !mt.has(p))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var k = gc(i, s, t);
                ea(i, k);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Oc(n);
    } catch (_) {
      ((t = _), G === n && n !== null && (G = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Bc() {
  var e = vl.current;
  return ((vl.current = ml), e === null ? ml : e);
}
function ls() {
  ((J === 0 || J === 3 || J === 2) && (J = 4),
    ee === null || (!(Bt & 268435455) && !(Ml & 268435455)) || st(ee, ne));
}
function wl(e, t) {
  var n = B;
  B |= 2;
  var r = Bc();
  (ee !== e || ne !== t) && ((We = null), Rt(e, t));
  do
    try {
      Tf();
      break;
    } catch (l) {
      Dc(e, l);
    }
  while (!0);
  if ((Ao(), (B = n), (vl.current = r), G !== null)) throw Error(S(261));
  return ((ee = null), (ne = 0), J);
}
function Tf() {
  for (; G !== null; ) Fc(G);
}
function Pf() {
  for (; G !== null && !qd(); ) Fc(G);
}
function Fc(e) {
  var t = $c(e.alternate, e, ge);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Oc(e) : (G = t),
    (bo.current = null));
}
function Oc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = kf(n, t)), n !== null)) {
        ((n.flags &= 32767), (G = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((J = 6), (G = null));
        return;
      }
    } else if (((n = xf(n, t, ge)), n !== null)) {
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
  var r = F,
    l = Te.transition;
  try {
    ((Te.transition = null), (F = 1), jf(e, t, n, r));
  } finally {
    ((Te.transition = l), (F = r));
  }
  return null;
}
function jf(e, t, n, r) {
  do ln();
  while (ut !== null);
  if (B & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (ap(e, i),
    e === ee && ((G = ee = null), (ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Lr ||
      ((Lr = !0),
      Ac(el, function () {
        return (ln(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = Te.transition), (Te.transition = null));
    var o = F;
    F = 1;
    var s = B;
    ((B |= 4),
      (bo.current = null),
      _f(e, n),
      Lc(n, e),
      Kp(Ui),
      (nl = !!Ai),
      (Ui = Ai = null),
      (e.current = n),
      Ef(n),
      bd(),
      (B = s),
      (F = o),
      (Te.transition = i));
  } else e.current = n;
  if (
    (Lr && ((Lr = !1), (ut = e), (gl = l)),
    (i = e.pendingLanes),
    i === 0 && (mt = null),
    np(n.stateNode),
    ye(e, Q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
  if (yl) throw ((yl = !1), (e = so), (so = null), e);
  return (
    gl & 1 && e.tag !== 0 && ln(),
    (i = e.pendingLanes),
    i & 1 ? (e === ao ? Un++ : ((Un = 0), (ao = e))) : (Un = 0),
    St(),
    null
  );
}
function ln() {
  if (ut !== null) {
    var e = yu(gl),
      t = Te.transition,
      n = F;
    try {
      if (((Te.transition = null), (F = 16 > e ? 16 : e), ut === null))
        var r = !1;
      else {
        if (((e = ut), (ut = null), (gl = 0), B & 6)) throw Error(S(331));
        var l = B;
        for (B |= 4, C = e.current; C !== null; ) {
          var i = C,
            o = i.child;
          if (C.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (C = u; C !== null; ) {
                  var m = C;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $n(8, m, i);
                  }
                  var f = m.child;
                  if (f !== null) ((f.return = m), (C = f));
                  else
                    for (; C !== null; ) {
                      m = C;
                      var v = m.sibling,
                        w = m.return;
                      if ((Pc(m), m === u)) {
                        C = null;
                        break;
                      }
                      if (v !== null) {
                        ((v.return = w), (C = v));
                        break;
                      }
                      C = w;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var x = g.child;
                if (x !== null) {
                  g.child = null;
                  do {
                    var E = x.sibling;
                    ((x.sibling = null), (x = E));
                  } while (x !== null);
                }
              }
              C = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) ((o.return = i), (C = o));
          else
            e: for (; C !== null; ) {
              if (((i = C), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    $n(9, i, i.return);
                }
              var d = i.sibling;
              if (d !== null) {
                ((d.return = i.return), (C = d));
                break e;
              }
              C = i.return;
            }
        }
        var c = e.current;
        for (C = c; C !== null; ) {
          o = C;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) ((p.return = o), (C = p));
          else
            e: for (o = c; C !== null; ) {
              if (((s = C), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zl(9, s);
                  }
                } catch (_) {
                  V(s, s.return, _);
                }
              if (s === o) {
                C = null;
                break e;
              }
              var k = s.sibling;
              if (k !== null) {
                ((k.return = s.return), (C = k));
                break e;
              }
              C = s.return;
            }
        }
        if (
          ((B = l), St(), Ae && typeof Ae.onPostCommitFiberRoot == 'function')
        )
          try {
            Ae.onPostCommitFiberRoot(El, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((F = n), (Te.transition = t));
    }
  }
  return !1;
}
function ka(e, t, n) {
  ((t = dn(n, t)),
    (t = yc(e, t, 1)),
    (e = ht(e, t, 1)),
    (t = ue()),
    e !== null && (sr(e, 1, t), ye(e, t)));
}
function V(e, t, n) {
  if (e.tag === 3) ka(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ka(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (mt === null || !mt.has(r)))
        ) {
          ((e = dn(n, e)),
            (e = gc(t, e, 1)),
            (t = ht(t, e, 1)),
            (e = ue()),
            t !== null && (sr(t, 1, e), ye(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Rf(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ee === e &&
      (ne & n) === n &&
      (J === 4 || (J === 3 && (ne & 130023424) === ne && 500 > Q() - ts)
        ? Rt(e, 0)
        : (es |= n)),
    ye(e, t));
}
function Ic(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = kr), (kr <<= 1), !(kr & 130023424) && (kr = 4194304))
      : (t = 1));
  var n = ue();
  ((e = qe(e, t)), e !== null && (sr(e, t, n), ye(e, n)));
}
function Lf(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Ic(e, n));
}
function zf(e, t) {
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
  (r !== null && r.delete(t), Ic(e, n));
}
var $c;
$c = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || me.current) he = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((he = !1), wf(e, t, n));
      he = !!(e.flags & 131072);
    }
  else ((he = !1), A && t.flags & 1048576 && Hu(t, ul, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Hr(e, t), (e = t.pendingProps));
      var l = sn(t, se.current);
      (rn(t, n), (l = Ko(null, t, r, e, l, n)));
      var i = Go();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ve(r) ? ((i = !0), sl(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ho(t),
            (l.updater = Ll),
            (t.stateNode = l),
            (l._reactInternals = t),
            Xi(t, r, e, n),
            (t = bi(null, t, r, !0, i, n)))
          : ((t.tag = 0), A && i && Fo(t), ae(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Hr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Df(r)),
          (e = Le(r, e)),
          l)
        ) {
          case 0:
            t = qi(null, t, r, e, n);
            break e;
          case 1:
            t = da(null, t, r, e, n);
            break e;
          case 11:
            t = ua(null, t, r, e, n);
            break e;
          case 14:
            t = ca(null, t, r, Le(r.type, e), n);
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
        qi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        da(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Sc(t), e === null)) throw Error(S(387));
        ((r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Gu(e, t),
          pl(t, r, null, n));
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
            ((l = dn(Error(S(423)), t)), (t = pa(e, t, r, n, l)));
            break e;
          } else if (r !== l) {
            ((l = dn(Error(S(424)), t)), (t = pa(e, t, r, n, l)));
            break e;
          } else
            for (
              we = ft(t.stateNode.containerInfo.firstChild),
                xe = t,
                A = !0,
                Me = null,
                n = Qu(t, null, r, n),
                t.child = n;
              n;

            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((an(), r === l)) {
            t = be(e, t, n);
            break e;
          }
          ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Xu(t),
        e === null && Qi(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Zi(r, l) ? (o = null) : i !== null && Zi(r, i) && (t.flags |= 32),
        kc(e, t),
        ae(e, t, o, n),
        t.child
      );
    case 6:
      return (e === null && Qi(t), null);
    case 13:
      return _c(e, t, n);
    case 4:
      return (
        Wo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = un(t, null, r, n)) : ae(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        ua(e, t, r, l, n)
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
          O(cl, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Fe(i.value, o)) {
            if (i.children === l.children && !me.current) {
              t = be(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                o = i.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      ((a = Ke(-1, n & -n)), (a.tag = 2));
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
                      Ki(i.return, n, t),
                      (s.lanes |= n));
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(S(341));
                ((o.lanes |= n),
                  (s = o.alternate),
                  s !== null && (s.lanes |= n),
                  Ki(o, n, t),
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
        ca(e, t, r, l, n)
      );
    case 15:
      return wc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Hr(e, t),
        (t.tag = 1),
        ve(r) ? ((e = !0), sl(t)) : (e = !1),
        rn(t, n),
        vc(t, r, l),
        Xi(t, r, l, n),
        bi(null, t, r, !0, e, n)
      );
    case 19:
      return Ec(e, t, n);
    case 22:
      return xc(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function Ac(e, t) {
  return fu(e, t);
}
function Mf(e, t, n, r) {
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
  return new Mf(e, t, n, r);
}
function is(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Df(e) {
  if (typeof e == 'function') return is(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Eo)) return 11;
    if (e === Co) return 14;
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
function Yr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == 'function')) is(e) && (o = 1);
  else if (typeof e == 'string') o = 5;
  else
    e: switch (e) {
      case Zt:
        return Lt(n.children, l, i, t);
      case _o:
        ((o = 8), (l |= 8));
        break;
      case xi:
        return (
          (e = Ne(12, n, t, l | 2)),
          (e.elementType = xi),
          (e.lanes = i),
          e
        );
      case ki:
        return ((e = Ne(13, n, t, l)), (e.elementType = ki), (e.lanes = i), e);
      case Si:
        return ((e = Ne(19, n, t, l)), (e.elementType = Si), (e.lanes = i), e);
      case Xa:
        return Dl(n, l, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Ka:
              o = 10;
              break e;
            case Ga:
              o = 9;
              break e;
            case Eo:
              o = 11;
              break e;
            case Co:
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
    (e.elementType = Xa),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function hi(e, t, n) {
  return ((e = Ne(6, e, null, t)), (e.lanes = n), e);
}
function mi(e, t, n) {
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
function Bf(e, t, n, r, l) {
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
    (this.eventTimes = Gl(0)),
    (this.expirationTimes = Gl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Gl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null));
}
function os(e, t, n, r, l, i, o, s, a) {
  return (
    (e = new Bf(e, t, n, s, a)),
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
    Ho(i),
    e
  );
}
function Ff(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ut,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Uc(e) {
  if (!e) return wt;
  e = e._reactInternals;
  e: {
    if (It(e) !== e || e.tag !== 1) throw Error(S(170));
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
    if (ve(n)) return Uu(e, n, t);
  }
  return t;
}
function Zc(e, t, n, r, l, i, o, s, a) {
  return (
    (e = os(n, r, !0, e, l, i, o, s, a)),
    (e.context = Uc(null)),
    (n = e.current),
    (r = ue()),
    (l = vt(n)),
    (i = Ke(r, l)),
    (i.callback = t ?? null),
    ht(n, i, l),
    (e.current.lanes = l),
    sr(e, l, r),
    ye(e, r),
    e
  );
}
function Bl(e, t, n, r) {
  var l = t.current,
    i = ue(),
    o = vt(l);
  return (
    (n = Uc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ke(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ht(l, t, o)),
    e !== null && (Be(e, l, o, i), Ar(e, l, o)),
    o
  );
}
function xl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Sa(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ss(e, t) {
  (Sa(e, t), (e = e.alternate) && Sa(e, t));
}
function Of() {
  return null;
}
var Hc =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function as(e) {
  this._internalRoot = e;
}
Fl.prototype.render = as.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Bl(e, t, null, null);
};
Fl.prototype.unmount = as.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Ft(function () {
      Bl(null, e, null, null);
    }),
      (t[Je] = null));
  }
};
function Fl(e) {
  this._internalRoot = e;
}
Fl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = xu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ot.length && t !== 0 && t < ot[n].priority; n++);
    (ot.splice(n, 0, e), n === 0 && Su(e));
  }
};
function us(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ol(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function _a() {}
function If(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var u = xl(o);
        i.call(u);
      };
    }
    var o = Zc(t, r, e, 0, null, !1, !1, '', _a);
    return (
      (e._reactRootContainer = o),
      (e[Je] = o.current),
      Xn(e.nodeType === 8 ? e.parentNode : e),
      Ft(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var s = r;
    r = function () {
      var u = xl(a);
      s.call(u);
    };
  }
  var a = os(e, 0, !1, null, null, !1, !1, '', _a);
  return (
    (e._reactRootContainer = a),
    (e[Je] = a.current),
    Xn(e.nodeType === 8 ? e.parentNode : e),
    Ft(function () {
      Bl(t, a, n, r);
    }),
    a
  );
}
function Il(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == 'function') {
      var s = l;
      l = function () {
        var a = xl(o);
        s.call(a);
      };
    }
    Bl(t, o, e, l);
  } else o = If(n, t, e, l, r);
  return xl(o);
}
gu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ln(t.pendingLanes);
        n !== 0 &&
          (Po(t, n | 1), ye(t, Q()), !(B & 6) && ((pn = Q() + 500), St()));
      }
      break;
    case 13:
      (Ft(function () {
        var r = qe(e, 1);
        if (r !== null) {
          var l = ue();
          Be(r, e, 1, l);
        }
      }),
        ss(e, 1));
  }
};
jo = function (e) {
  if (e.tag === 13) {
    var t = qe(e, 134217728);
    if (t !== null) {
      var n = ue();
      Be(t, e, 134217728, n);
    }
    ss(e, 134217728);
  }
};
wu = function (e) {
  if (e.tag === 13) {
    var t = vt(e),
      n = qe(e, t);
    if (n !== null) {
      var r = ue();
      Be(n, e, t, r);
    }
    ss(e, t);
  }
};
xu = function () {
  return F;
};
ku = function (e, t) {
  var n = F;
  try {
    return ((F = e), t());
  } finally {
    F = n;
  }
};
zi = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Ci(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
            var l = Pl(r);
            if (!l) throw Error(S(90));
            (qa(r), Ci(r, l));
          }
        }
      }
      break;
    case 'textarea':
      eu(e, n);
      break;
    case 'select':
      ((t = n.value), t != null && bt(e, !!n.multiple, t, !1));
  }
};
su = ns;
au = Ft;
var $f = { usingClientEntryPoint: !1, Events: [ur, Yt, Pl, iu, ou, ns] },
  Tn = {
    findFiberByHostInstance: Tt,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  Af = {
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
      return ((e = du(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Tn.findFiberByHostInstance || Of,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zr.isDisabled && zr.supportsFiber)
    try {
      ((El = zr.inject(Af)), (Ae = zr));
    } catch {}
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $f;
Se.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!us(t)) throw Error(S(200));
  return Ff(e, t, null, n);
};
Se.createRoot = function (e, t) {
  if (!us(e)) throw Error(S(299));
  var n = !1,
    r = '',
    l = Hc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = os(e, 1, !1, null, null, n, !1, r, l)),
    (e[Je] = t.current),
    Xn(e.nodeType === 8 ? e.parentNode : e),
    new as(t)
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
  return ((e = du(t)), (e = e === null ? null : e.stateNode), e);
};
Se.flushSync = function (e) {
  return Ft(e);
};
Se.hydrate = function (e, t, n) {
  if (!Ol(t)) throw Error(S(200));
  return Il(null, e, t, !0, n);
};
Se.hydrateRoot = function (e, t, n) {
  if (!us(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = '',
    o = Hc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Zc(t, null, e, 1, n ?? null, l, !1, i, o)),
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
  return new Fl(t);
};
Se.render = function (e, t, n) {
  if (!Ol(t)) throw Error(S(200));
  return Il(null, e, t, !1, n);
};
Se.unmountComponentAtNode = function (e) {
  if (!Ol(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (Ft(function () {
        Il(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Je] = null));
        });
      }),
      !0)
    : !1;
};
Se.unstable_batchedUpdates = ns;
Se.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ol(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Il(e, t, n, !1, r);
};
Se.version = '18.3.1-next-f1338f8080-20240426';
function Wc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wc);
    } catch (e) {
      console.error(e);
    }
}
(Wc(), (Wa.exports = Se));
var Uf = Wa.exports,
  Vc,
  Ea = Uf;
((Vc = Ea.createRoot), Ea.hydrateRoot);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Zf = {
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
 */ const Hf = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase()
      .trim(),
  K = (e, t) => {
    const n = y.forwardRef(
      (
        {
          color: r = 'currentColor',
          size: l = 24,
          strokeWidth: i = 2,
          absoluteStrokeWidth: o,
          className: s = '',
          children: a,
          ...u
        },
        m
      ) =>
        y.createElement(
          'svg',
          {
            ref: m,
            ...Zf,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: o ? (Number(i) * 24) / Number(l) : i,
            className: ['lucide', `lucide-${Hf(e)}`, s].join(' '),
            ...u,
          },
          [
            ...t.map(([f, v]) => y.createElement(f, v)),
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
 */ const Wf = K('AlertCircle', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['line', { x1: '12', x2: '12', y1: '8', y2: '12', key: '1pkeuh' }],
  ['line', { x1: '12', x2: '12.01', y1: '16', y2: '16', key: '4dfq90' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vf = K('AlertTriangle', [
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
 */ const Yc = K('Calendar', [
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
 */ const Yf = K('Car', [
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
 */ const Qf = K('ChevronLeft', [
  ['path', { d: 'm15 18-6-6 6-6', key: '1wnfg3' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kf = K('ChevronRight', [
  ['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gf = K('ChevronsLeft', [
  ['path', { d: 'm11 17-5-5 5-5', key: '13zhaf' }],
  ['path', { d: 'm18 17-5-5 5-5', key: 'h8a8et' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xf = K('ChevronsRight', [
  ['path', { d: 'm6 17 5-5-5-5', key: 'xnjwq' }],
  ['path', { d: 'm13 17 5-5-5-5', key: '17xmmf' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jf = K('ExternalLink', [
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
 */ const qf = K('Film', [
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
 */ const bf = K('Heart', [
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
 */ const eh = K('Home', [
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
 */ const th = K('Loader2', [
  ['path', { d: 'M21 12a9 9 0 1 1-6.219-8.56', key: '13zald' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nh = K('MapPin', [
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
 */ const rh = K('RefreshCw', [
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
 */ const lh = K('Rocket', [
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
 */ const Qc = K('Ruler', [
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
 */ const Kc = K('Search', [
  ['circle', { cx: '11', cy: '11', r: '8', key: '4ej97u' }],
  ['path', { d: 'm21 21-4.3-4.3', key: '1qie3q' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qr = K('User', [
  ['path', { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2', key: '975kel' }],
  ['circle', { cx: '12', cy: '7', r: '4', key: '17ys0d' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gc = K('Weight', [
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
 */ const ih = K('X', [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ]),
  oh = 'starwars-search-term',
  sh = 1e3,
  ah = (e, t) => {
    const [n, r] = y.useState(() => {
      try {
        const i = window.localStorage.getItem(e);
        return i || t;
      } catch (i) {
        return (console.error(i), t);
      }
    });
    return [
      n,
      (i) => {
        try {
          (r(i), window.localStorage.setItem(e, i));
        } catch (o) {
          console.error(o);
        }
      },
    ];
  },
  uh = (e, t) => {
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
  ch = ({ onSearch: e, isLoading: t }) => {
    const [n, r] = ah(oh, ''),
      l = uh(n, sh),
      [i, o] = y.useState(!0),
      s = (f) => f.trim();
    (y.useEffect(() => {
      if (i) {
        const f = s(l);
        f && e(f, 1);
      }
    }, [l, e, i]),
      y.useEffect(() => {
        const f = s(n);
        f && e(f, 1);
      }, []));
    const a = (f) => {
        (r(f.target.value), o(!0));
      },
      u = y.useCallback(() => {
        const f = s(n);
        f && (o(!1), e(f, 1));
      }, [e, n]);
    y.useEffect(() => {
      !t && !i && o(!0);
    }, [t, i]);
    const m = (f) => {
      f.key === 'Enter' && u();
    };
    return h.jsx('div', {
      className: 'bg-white shadow-sm border-b border-gray-200 p-6',
      children: h.jsxs('div', {
        className: 'max-w-4xl mx-auto',
        children: [
          h.jsx('h1', {
            className: 'text-3xl font-bold text-gray-900 mb-6 text-center',
            children: 'Star Wars Character Search',
          }),
          h.jsxs('div', {
            className:
              'flex flex-col sm:flex-row gap-4 items-stretch sm:items-center',
            children: [
              h.jsxs('div', {
                className: 'flex-1 relative',
                children: [
                  h.jsx(Kc, {
                    className:
                      'absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400',
                  }),
                  h.jsx('input', {
                    'data-testid': 'search-box',
                    type: 'text',
                    value: n,
                    onChange: a,
                    onKeyPress: m,
                    placeholder: 'Search for Star Wars characters...',
                    disabled: t,
                    className:
                      'w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed',
                  }),
                ],
              }),
              h.jsx('button', {
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
  dh = (e) => {
    const t = [];
    return (
      e.gender !== 'unknown' && t.push(e.gender),
      e.birth_year !== 'unknown' && t.push(`Born ${e.birth_year}`),
      e.height !== 'unknown' && t.push(`${e.height}cm tall`),
      e.mass !== 'unknown' && t.push(`${e.mass}kg`),
      t.join(' • ')
    );
  },
  ph = ({ character: e, onClick: t }) => {
    const n = dh(e),
      r = () => {
        t && t(e);
      };
    return h.jsx('div', {
      className:
        'bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 p-6 border border-gray-200 cursor-pointer hover:border-blue-300 hover:scale-[1.02]',
      onClick: r,
      children: h.jsxs('div', {
        className: 'flex items-start space-x-4',
        children: [
          h.jsx('div', {
            className: 'flex-shrink-0',
            children: h.jsx('div', {
              className:
                'w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center',
              children: h.jsx(Qr, {
                'data-testid': 'avatar',
                className: 'w-6 h-6 text-white',
              }),
            }),
          }),
          h.jsxs('div', {
            className: 'flex-1 min-w-0',
            children: [
              h.jsx('h3', {
                className: 'text-lg font-semibold text-gray-900 mb-2',
                children: e.name,
              }),
              n &&
                h.jsx('p', {
                  className: 'text-gray-600 text-sm mb-3',
                  children: n,
                }),
              h.jsxs('div', {
                className: 'flex flex-wrap gap-4 text-xs text-gray-500',
                children: [
                  e.height !== 'unknown' &&
                    h.jsxs('div', {
                      className: 'flex items-center space-x-1',
                      children: [
                        h.jsx(Qc, { className: 'w-3 h-3' }),
                        h.jsxs('span', { children: [e.height, 'cm'] }),
                      ],
                    }),
                  e.mass !== 'unknown' &&
                    h.jsxs('div', {
                      className: 'flex items-center space-x-1',
                      children: [
                        h.jsx(Gc, { className: 'w-3 h-3' }),
                        h.jsxs('span', { children: [e.mass, 'kg'] }),
                      ],
                    }),
                  e.birth_year !== 'unknown' &&
                    h.jsxs('div', {
                      className: 'flex items-center space-x-1',
                      children: [
                        h.jsx(Yc, { className: 'w-3 h-3' }),
                        h.jsx('span', { children: e.birth_year }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  fh = () =>
    h.jsxs('div', {
      className: 'flex flex-col items-center justify-center py-12',
      children: [
        h.jsx(th, {
          'data-testid': 'spinner',
          className: 'w-8 h-8 text-blue-600 animate-spin mb-4',
        }),
        h.jsx('p', {
          className: 'text-gray-600',
          children: 'Searching the galaxy...',
        }),
      ],
    }),
  hh = ({ message: e, onRetry: t }) =>
    h.jsx('div', {
      className: 'flex flex-col items-center justify-center py-12',
      children: h.jsxs('div', {
        className:
          'bg-red-50 border border-red-200 rounded-lg p-6 max-w-md w-full',
        children: [
          h.jsxs('div', {
            className: 'flex items-center mb-4',
            children: [
              h.jsx(Wf, {
                'data-testid': 'error-icon',
                className: 'w-6 h-6 text-red-600 mr-3',
              }),
              h.jsx('h3', {
                className: 'text-lg font-semibold text-red-800',
                children: 'Error',
              }),
            ],
          }),
          h.jsx('p', { className: 'text-red-700 mb-4', children: e }),
          h.jsxs('button', {
            onClick: t,
            className:
              'flex items-center justify-center w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors',
            children: [h.jsx(rh, { className: 'w-4 h-4 mr-2' }), 'Try Again'],
          }),
        ],
      }),
    }),
  mh = ({ pagination: e, onPageChange: t, isLoading: n }) => {
    const {
      currentPage: r,
      totalPages: l,
      totalCount: i,
      hasNext: o,
      hasPrevious: s,
    } = e;
    if (l <= 1) return null;
    const u = (() => {
      const f = [],
        v = [];
      for (let w = Math.max(2, r - 2); w <= Math.min(l - 1, r + 2); w++)
        f.push(w);
      return (
        r - 2 > 2 ? v.push(1, '...') : v.push(1),
        v.push(...f),
        r + 2 < l - 1 ? v.push('...', l) : l > 1 && v.push(l),
        v
      );
    })();
    return h.jsxs('div', {
      className: 'flex flex-col items-center space-y-4 py-6',
      children: [
        h.jsxs('div', {
          className: 'text-sm text-gray-600',
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
        h.jsxs('div', {
          className: 'flex items-center space-x-1',
          children: [
            h.jsx('button', {
              onClick: () => t(1),
              disabled: !s || n,
              className:
                'p-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors',
              title: 'First page',
              children: h.jsx(Gf, { className: 'w-4 h-4' }),
            }),
            h.jsx('button', {
              onClick: () => t(r - 1),
              disabled: !s || n,
              className:
                'p-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors',
              title: 'Previous page',
              children: h.jsx(Qf, { className: 'w-4 h-4' }),
            }),
            h.jsx('div', {
              className: 'flex items-center space-x-1',
              children: u.map((m, f) =>
                h.jsx(
                  jd.Fragment,
                  {
                    children:
                      m === '...'
                        ? h.jsx('span', {
                            className: 'px-3 py-2 text-gray-500',
                            children: '...',
                          })
                        : h.jsx('button', {
                            onClick: () => t(m),
                            disabled: n,
                            className: `px-3 py-2 rounded-md border transition-colors ${m === r ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'} disabled:opacity-50 disabled:cursor-not-allowed`,
                            children: m,
                          }),
                  },
                  f
                )
              ),
            }),
            h.jsx('button', {
              onClick: () => t(r + 1),
              disabled: !o || n,
              className:
                'p-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors',
              title: 'Next page',
              children: h.jsx(Kf, { className: 'w-4 h-4' }),
            }),
            h.jsx('button', {
              onClick: () => t(l),
              disabled: !o || n,
              className:
                'p-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors',
              title: 'Last page',
              children: h.jsx(Xf, { className: 'w-4 h-4' }),
            }),
          ],
        }),
      ],
    });
  },
  vh = ({
    characters: e,
    pagination: t,
    isLoading: n,
    error: r,
    onRetry: l,
    onPageChange: i,
    onCharacterClick: o,
  }) =>
    h.jsx('div', {
      className: 'flex-1 p-6 bg-gray-50 transition-all duration-300',
      children: h.jsxs('div', {
        className: 'max-w-4xl mx-auto',
        children: [
          n && h.jsx(fh, {}),
          r && h.jsx(hh, { message: r, onRetry: l }),
          !n &&
            !r &&
            e.length === 0 &&
            h.jsx('div', {
              className: 'text-center py-12',
              children: h.jsx('p', {
                className: 'text-gray-500 text-lg',
                children: 'No characters found. Try a different search term.',
              }),
            }),
          !n &&
            !r &&
            e.length > 0 &&
            h.jsxs('div', {
              children: [
                h.jsx('div', {
                  className: 'mb-6',
                  children: h.jsxs('h2', {
                    className: 'text-xl font-semibold text-gray-900',
                    children: [
                      'Search Results',
                      t &&
                        h.jsxs('span', {
                          className: 'text-gray-600 font-normal',
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
                h.jsx('div', {
                  className: 'grid gap-4 md:grid-cols-2 lg:grid-cols-1',
                  children: e.map((s, a) =>
                    h.jsx(ph, { character: s, onClick: o }, `${s.url}-${a}`)
                  ),
                }),
                t &&
                  h.jsx(mh, { pagination: t, onPageChange: i, isLoading: n }),
              ],
            }),
        ],
      }),
    }),
  yh = ({ character: e, isOpen: t, onClose: n }) => {
    if (!t || !e) return null;
    const r = (i, o) =>
        !i || i.length === 0
          ? null
          : h.jsxs('div', {
              className: 'mb-4',
              children: [
                h.jsx('h4', {
                  className: 'font-semibold text-gray-900 mb-2',
                  children: o,
                }),
                h.jsxs('p', {
                  className: 'text-gray-600 text-sm',
                  children: [i.length, ' ', o.toLowerCase()],
                }),
              ],
            }),
      l = (i, o = 'Unknown') => (i && i !== 'unknown' && i !== 'n/a' ? i : o);
    return h.jsxs(h.Fragment, {
      children: [
        h.jsx('div', {
          className: 'fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden',
          onClick: n,
        }),
        h.jsx('div', {
          className: `fixed top-0 right-0 h-full w-full lg:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${t ? 'translate-x-0' : 'translate-x-full'}`,
          children: h.jsxs('div', {
            className: 'flex flex-col h-full',
            children: [
              h.jsxs('div', {
                className:
                  'flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-500 to-purple-600',
                children: [
                  h.jsx('h2', {
                    className: 'text-xl font-bold text-white truncate pr-4',
                    children: e.name,
                  }),
                  h.jsx('button', {
                    onClick: n,
                    className:
                      'p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors flex-shrink-0',
                    'aria-label': 'Close details panel',
                    children: h.jsx(ih, { className: 'w-5 h-5 text-white' }),
                  }),
                ],
              }),
              h.jsxs('div', {
                className: 'flex-1 overflow-y-auto p-6',
                children: [
                  h.jsx('div', {
                    className: 'flex justify-center mb-6',
                    children: h.jsx('div', {
                      className:
                        'w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center',
                      children: h.jsx(Qr, {
                        className: 'w-10 h-10 text-white',
                      }),
                    }),
                  }),
                  h.jsxs('div', {
                    className: 'space-y-4 mb-6',
                    children: [
                      h.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2',
                        children: 'Basic Information',
                      }),
                      h.jsxs('div', {
                        className: 'grid grid-cols-2 gap-4',
                        children: [
                          h.jsxs('div', {
                            className: 'flex items-center space-x-2',
                            children: [
                              h.jsx(Qr, { className: 'w-4 h-4 text-gray-500' }),
                              h.jsxs('div', {
                                children: [
                                  h.jsx('p', {
                                    className:
                                      'text-xs text-gray-500 uppercase tracking-wide',
                                    children: 'Gender',
                                  }),
                                  h.jsx('p', {
                                    className:
                                      'text-sm font-medium text-gray-900',
                                    children: l(e.gender),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          h.jsxs('div', {
                            className: 'flex items-center space-x-2',
                            children: [
                              h.jsx(Yc, { className: 'w-4 h-4 text-gray-500' }),
                              h.jsxs('div', {
                                children: [
                                  h.jsx('p', {
                                    className:
                                      'text-xs text-gray-500 uppercase tracking-wide',
                                    children: 'Birth Year',
                                  }),
                                  h.jsx('p', {
                                    className:
                                      'text-sm font-medium text-gray-900',
                                    children: l(e.birth_year),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          h.jsxs('div', {
                            className: 'flex items-center space-x-2',
                            children: [
                              h.jsx(Qc, { className: 'w-4 h-4 text-gray-500' }),
                              h.jsxs('div', {
                                children: [
                                  h.jsx('p', {
                                    className:
                                      'text-xs text-gray-500 uppercase tracking-wide',
                                    children: 'Height',
                                  }),
                                  h.jsxs('p', {
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
                          h.jsxs('div', {
                            className: 'flex items-center space-x-2',
                            children: [
                              h.jsx(Gc, { className: 'w-4 h-4 text-gray-500' }),
                              h.jsxs('div', {
                                children: [
                                  h.jsx('p', {
                                    className:
                                      'text-xs text-gray-500 uppercase tracking-wide',
                                    children: 'Mass',
                                  }),
                                  h.jsxs('p', {
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
                  h.jsxs('div', {
                    className: 'space-y-4 mb-6',
                    children: [
                      h.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2',
                        children: 'Physical Appearance',
                      }),
                      h.jsxs('div', {
                        className: 'space-y-3',
                        children: [
                          h.jsxs('div', {
                            children: [
                              h.jsx('p', {
                                className:
                                  'text-xs text-gray-500 uppercase tracking-wide mb-1',
                                children: 'Hair Color',
                              }),
                              h.jsx('p', {
                                className: 'text-sm text-gray-900',
                                children: l(e.hair_color),
                              }),
                            ],
                          }),
                          h.jsxs('div', {
                            children: [
                              h.jsx('p', {
                                className:
                                  'text-xs text-gray-500 uppercase tracking-wide mb-1',
                                children: 'Skin Color',
                              }),
                              h.jsx('p', {
                                className: 'text-sm text-gray-900',
                                children: l(e.skin_color),
                              }),
                            ],
                          }),
                          h.jsxs('div', {
                            children: [
                              h.jsx('p', {
                                className:
                                  'text-xs text-gray-500 uppercase tracking-wide mb-1',
                                children: 'Eye Color',
                              }),
                              h.jsx('p', {
                                className: 'text-sm text-gray-900',
                                children: l(e.eye_color),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  h.jsxs('div', {
                    className: 'space-y-4 mb-6',
                    children: [
                      h.jsx('h3', {
                        className:
                          'text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2',
                        children: 'Associations',
                      }),
                      h.jsxs('div', {
                        className: 'space-y-4',
                        children: [
                          h.jsxs('div', {
                            className: 'flex items-center space-x-2',
                            children: [
                              h.jsx(nh, { className: 'w-4 h-4 text-gray-500' }),
                              h.jsxs('div', {
                                children: [
                                  h.jsx('p', {
                                    className:
                                      'text-xs text-gray-500 uppercase tracking-wide',
                                    children: 'Homeworld',
                                  }),
                                  h.jsx('p', {
                                    className: 'text-sm text-gray-900',
                                    children: e.homeworld ? 'Known' : 'Unknown',
                                  }),
                                ],
                              }),
                            ],
                          }),
                          r(e.films, 'Films') &&
                            h.jsxs('div', {
                              className: 'flex items-center space-x-2',
                              children: [
                                h.jsx(qf, {
                                  className: 'w-4 h-4 text-gray-500',
                                }),
                                h.jsxs('div', {
                                  children: [
                                    h.jsx('p', {
                                      className:
                                        'text-xs text-gray-500 uppercase tracking-wide',
                                      children: 'Films',
                                    }),
                                    h.jsxs('p', {
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
                            h.jsxs('div', {
                              className: 'flex items-center space-x-2',
                              children: [
                                h.jsx(Qr, {
                                  className: 'w-4 h-4 text-gray-500',
                                }),
                                h.jsxs('div', {
                                  children: [
                                    h.jsx('p', {
                                      className:
                                        'text-xs text-gray-500 uppercase tracking-wide',
                                      children: 'Species',
                                    }),
                                    h.jsxs('p', {
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
                            h.jsxs('div', {
                              className: 'flex items-center space-x-2',
                              children: [
                                h.jsx(lh, {
                                  className: 'w-4 h-4 text-gray-500',
                                }),
                                h.jsxs('div', {
                                  children: [
                                    h.jsx('p', {
                                      className:
                                        'text-xs text-gray-500 uppercase tracking-wide',
                                      children: 'Starships',
                                    }),
                                    h.jsxs('p', {
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
                            h.jsxs('div', {
                              className: 'flex items-center space-x-2',
                              children: [
                                h.jsx(Yf, {
                                  className: 'w-4 h-4 text-gray-500',
                                }),
                                h.jsxs('div', {
                                  children: [
                                    h.jsx('p', {
                                      className:
                                        'text-xs text-gray-500 uppercase tracking-wide',
                                      children: 'Vehicles',
                                    }),
                                    h.jsxs('p', {
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
                  h.jsxs('div', {
                    className: 'space-y-4 pt-4 border-t border-gray-200',
                    children: [
                      h.jsx('h3', {
                        className: 'text-lg font-semibold text-gray-900',
                        children: 'Record Information',
                      }),
                      h.jsxs('div', {
                        className: 'space-y-2 text-xs text-gray-500',
                        children: [
                          h.jsxs('p', {
                            children: [
                              'Created: ',
                              new Date(e.created).toLocaleDateString(),
                            ],
                          }),
                          h.jsxs('p', {
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
  Ca = [
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
  po = 'https://swapi.py4e.com/api/',
  Mr = 2,
  Na = 1e3,
  Kr = 10,
  vi = (e = '', t = 1) => {
    const n = e
        ? Ca.filter((s) => s.name.toLowerCase().includes(e.toLowerCase()))
        : Ca,
      r = (t - 1) * Kr,
      l = r + Kr,
      i = n.slice(r, l),
      o = Math.ceil(n.length / Kr);
    return {
      count: n.length,
      next: t < o ? `${po}/people/?page=${t + 1}` : null,
      previous: t > 1 ? `${po}/people/?page=${t - 1}` : null,
      results: i,
    };
  },
  Ta = (e) => new Promise((t) => setTimeout(t, e)),
  gh = (e, t) => {
    const n = Math.ceil(e.count / Kr);
    return {
      currentPage: t,
      totalPages: n,
      totalCount: e.count,
      hasNext: e.next !== null,
      hasPrevious: e.previous !== null,
    };
  };
class wh {
  static async searchCharacters(t = '', n = 1, r = 0) {
    try {
      let l = `${po}/people/`;
      const i = new URLSearchParams();
      if (
        (t && i.append('search', t),
        i.append('page', n.toString()),
        i.toString())
      ) {
        const m = l + `?${i.toString()}`;
        l = encodeURI(m);
      }
      const o = new AbortController(),
        s = setTimeout(() => o.abort(), 1e4),
        a = await fetch(l, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          signal: o.signal,
        });
      if ((clearTimeout(s), !a.ok))
        throw a.status >= 400 && a.status < 500
          ? new Error(
              `Client error (${a.status}): ${a.statusText}. Please check your request and try again.`
            )
          : a.status >= 500
            ? new Error(
                `Server error (${a.status}): ${a.statusText}. The service is temporarily unavailable.`
              )
            : new Error(
                `Request failed with status ${a.status}: ${a.statusText}`
              );
      return await a.json();
    } catch (l) {
      if (l instanceof Error) {
        if (l.name === 'AbortError')
          return r < Mr
            ? (console.log(`Request timed out, retrying... (${r + 1}/${Mr})`),
              await Ta(Na * (r + 1)),
              this.searchCharacters(t, n, r + 1))
            : (console.warn(
                'Request timed out after multiple attempts. Using enhanced mock data as fallback.'
              ),
              vi(t, n));
        if (
          l.message.includes('Failed to fetch') ||
          l.message.includes('NetworkError')
        )
          return r < Mr
            ? (console.log(`Network error, retrying... (${r + 1}/${Mr})`),
              await Ta(Na * (r + 1)),
              this.searchCharacters(t, n, r + 1))
            : (console.warn(
                'Network error: Unable to connect to the Star Wars API. Using enhanced mock data as fallback.'
              ),
              vi(t, n));
        if (l.message.includes('CORS'))
          return (
            console.warn(
              'CORS error: Unable to access the Star Wars API. Using enhanced mock data as fallback.'
            ),
            vi(t, n)
          );
        throw l;
      }
      throw new Error('An unexpected error occurred while fetching data.');
    }
  }
}
const xh = () => {
  const e = new Date().getFullYear();
  return h.jsx('div', {
    className: 'bg-white border-t border-gray-200 py-8',
    children: h.jsx('div', {
      className: 'max-w-4xl mx-auto px-6',
      children: h.jsxs('div', {
        className: 'text-center space-y-4',
        children: [
          h.jsxs('div', {
            className: 'flex items-center justify-center space-x-2',
            children: [
              h.jsx(bf, {
                'data-testid': 'heart-icon',
                className: 'w-5 h-5 text-red-500',
              }),
              h.jsx('p', {
                className: 'text-gray-600',
                children: 'Created by yours truly',
              }),
            ],
          }),
          h.jsxs('p', {
            className: 'text-sm text-gray-500',
            children: ['© ', e],
          }),
          h.jsx('div', {
            className: 'flex items-center justify-center space-x-2',
            children: h.jsxs('a', {
              href: 'https://rs.school/courses/reactjs',
              target: '_blank',
              rel: 'noopener noreferrer',
              className:
                'inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors',
              children: [
                h.jsx('span', { children: 'RS School React Course' }),
                h.jsx(Jf, { className: 'w-4 h-4' }),
              ],
            }),
          }),
        ],
      }),
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
 */ var Pa = 'popstate';
function kh(e = {}) {
  function t(r, l) {
    let { pathname: i, search: o, hash: s } = r.location;
    return fo(
      '',
      { pathname: i, search: o, hash: s },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default'
    );
  }
  function n(r, l) {
    return typeof l == 'string' ? l : ir(l);
  }
  return _h(t, n, null, e);
}
function H(e, t) {
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
function Sh() {
  return Math.random().toString(36).substring(2, 10);
}
function ja(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function fo(e, t, n = null, r) {
  return {
    pathname: typeof e == 'string' ? e : e.pathname,
    search: '',
    hash: '',
    ...(typeof t == 'string' ? vn(t) : t),
    state: n,
    key: (t && t.key) || r || Sh(),
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
function _h(e, t, n, r = {}) {
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    s = 'POP',
    a = null,
    u = m();
  u == null && ((u = 0), o.replaceState({ ...o.state, idx: u }, ''));
  function m() {
    return (o.state || { idx: null }).idx;
  }
  function f() {
    s = 'POP';
    let E = m(),
      d = E == null ? null : E - u;
    ((u = E), a && a({ action: s, location: x.location, delta: d }));
  }
  function v(E, d) {
    s = 'PUSH';
    let c = fo(x.location, E, d);
    u = m() + 1;
    let p = ja(c, u),
      k = x.createHref(c);
    try {
      o.pushState(p, '', k);
    } catch (_) {
      if (_ instanceof DOMException && _.name === 'DataCloneError') throw _;
      l.location.assign(k);
    }
    i && a && a({ action: s, location: x.location, delta: 1 });
  }
  function w(E, d) {
    s = 'REPLACE';
    let c = fo(x.location, E, d);
    u = m();
    let p = ja(c, u),
      k = x.createHref(c);
    (o.replaceState(p, '', k),
      i && a && a({ action: s, location: x.location, delta: 0 }));
  }
  function g(E) {
    return Eh(E);
  }
  let x = {
    get action() {
      return s;
    },
    get location() {
      return e(l, o);
    },
    listen(E) {
      if (a) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(Pa, f),
        (a = E),
        () => {
          (l.removeEventListener(Pa, f), (a = null));
        }
      );
    },
    createHref(E) {
      return t(l, E);
    },
    createURL: g,
    encodeLocation(E) {
      let d = g(E);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: v,
    replace: w,
    go(E) {
      return o.go(E);
    },
  };
  return x;
}
function Eh(e, t = !1) {
  let n = 'http://localhost';
  (typeof window < 'u' &&
    (n =
      window.location.origin !== 'null'
        ? window.location.origin
        : window.location.href),
    H(n, 'No window.location.(origin|href) available to create URL'));
  let r = typeof e == 'string' ? e : ir(e);
  return (
    (r = r.replace(/ $/, '%20')),
    !t && r.startsWith('//') && (r = n + r),
    new URL(r, n)
  );
}
function Xc(e, t, n = '/') {
  return Ch(e, t, n, !1);
}
function Ch(e, t, n, r) {
  let l = typeof t == 'string' ? vn(t) : t,
    i = et(l.pathname || '/', n);
  if (i == null) return null;
  let o = Jc(e);
  Nh(o);
  let s = null;
  for (let a = 0; s == null && a < o.length; ++a) {
    let u = Oh(i);
    s = Bh(o[a], u, r);
  }
  return s;
}
function Jc(e, t = [], n = [], r = '') {
  let l = (i, o, s) => {
    let a = {
      relativePath: s === void 0 ? i.path || '' : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    a.relativePath.startsWith('/') &&
      (H(
        a.relativePath.startsWith(r),
        `Absolute route path "${a.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = Ge([r, a.relativePath]),
      m = n.concat(a);
    (i.children &&
      i.children.length > 0 &&
      (H(
        i.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${u}".`
      ),
      Jc(i.children, t, m, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: Mh(u, i.index), routesMeta: m }));
  };
  return (
    e.forEach((i, o) => {
      var s;
      if (i.path === '' || !((s = i.path) != null && s.includes('?'))) l(i, o);
      else for (let a of qc(i.path)) l(i, o, a);
    }),
    t
  );
}
function qc(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (r.length === 0) return l ? [i, ''] : [i];
  let o = qc(r.join('/')),
    s = [];
  return (
    s.push(...o.map((a) => (a === '' ? i : [i, a].join('/')))),
    l && s.push(...o),
    s.map((a) => (e.startsWith('/') && a === '' ? '/' : a))
  );
}
function Nh(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Dh(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
var Th = /^:[\w-]+$/,
  Ph = 3,
  jh = 2,
  Rh = 1,
  Lh = 10,
  zh = -2,
  Ra = (e) => e === '*';
function Mh(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(Ra) && (r += zh),
    t && (r += jh),
    n
      .filter((l) => !Ra(l))
      .reduce((l, i) => l + (Th.test(i) ? Ph : i === '' ? Rh : Lh), r)
  );
}
function Dh(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Bh(e, t, n = !1) {
  let { routesMeta: r } = e,
    l = {},
    i = '/',
    o = [];
  for (let s = 0; s < r.length; ++s) {
    let a = r[s],
      u = s === r.length - 1,
      m = i === '/' ? t : t.slice(i.length) || '/',
      f = kl(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        m
      ),
      v = a.route;
    if (
      (!f &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (f = kl(
          { path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 },
          m
        )),
      !f)
    )
      return null;
    (Object.assign(l, f.params),
      o.push({
        params: l,
        pathname: Ge([i, f.pathname]),
        pathnameBase: Uh(Ge([i, f.pathnameBase])),
        route: v,
      }),
      f.pathnameBase !== '/' && (i = Ge([i, f.pathnameBase])));
  }
  return o;
}
function kl(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Fh(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, '$1'),
    s = l.slice(1);
  return {
    params: r.reduce((u, { paramName: m, isOptional: f }, v) => {
      if (m === '*') {
        let g = s[v] || '';
        o = i.slice(0, i.length - g.length).replace(/(.)\/+$/, '$1');
      }
      const w = s[v];
      return (
        f && !w ? (u[m] = void 0) : (u[m] = (w || '').replace(/%2F/g, '/')),
        u
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function Fh(e, t = !1, n = !0) {
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
          (o, s, a) => (
            r.push({ paramName: s, isOptional: a != null }),
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
function Oh(e) {
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
function Ih(e, t = '/') {
  let {
    pathname: n,
    search: r = '',
    hash: l = '',
  } = typeof e == 'string' ? vn(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : $h(n, t)) : t,
    search: Zh(r),
    hash: Hh(l),
  };
}
function $h(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((l) => {
      l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function yi(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Ah(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function bc(e) {
  let t = Ah(e);
  return t.map((n, r) => (r === t.length - 1 ? n.pathname : n.pathnameBase));
}
function ed(e, t, n, r = !1) {
  let l;
  typeof e == 'string'
    ? (l = vn(e))
    : ((l = { ...e }),
      H(
        !l.pathname || !l.pathname.includes('?'),
        yi('?', 'pathname', 'search', l)
      ),
      H(
        !l.pathname || !l.pathname.includes('#'),
        yi('#', 'pathname', 'hash', l)
      ),
      H(!l.search || !l.search.includes('#'), yi('#', 'search', 'hash', l)));
  let i = e === '' || l.pathname === '',
    o = i ? '/' : l.pathname,
    s;
  if (o == null) s = n;
  else {
    let f = t.length - 1;
    if (!r && o.startsWith('..')) {
      let v = o.split('/');
      for (; v[0] === '..'; ) (v.shift(), (f -= 1));
      l.pathname = v.join('/');
    }
    s = f >= 0 ? t[f] : '/';
  }
  let a = Ih(l, s),
    u = o && o !== '/' && o.endsWith('/'),
    m = (i || o === '.') && n.endsWith('/');
  return (!a.pathname.endsWith('/') && (u || m) && (a.pathname += '/'), a);
}
var Ge = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Uh = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Zh = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Hh = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function Wh(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
var td = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(td);
var Vh = ['GET', ...td];
new Set(Vh);
var yn = y.createContext(null);
yn.displayName = 'DataRouter';
var $l = y.createContext(null);
$l.displayName = 'DataRouterState';
y.createContext(!1);
var nd = y.createContext({ isTransitioning: !1 });
nd.displayName = 'ViewTransition';
var Yh = y.createContext(new Map());
Yh.displayName = 'Fetchers';
var Qh = y.createContext(null);
Qh.displayName = 'Await';
var He = y.createContext(null);
He.displayName = 'Navigation';
var dr = y.createContext(null);
dr.displayName = 'Location';
var nt = y.createContext({ outlet: null, matches: [], isDataRoute: !1 });
nt.displayName = 'Route';
var cs = y.createContext(null);
cs.displayName = 'RouteError';
function Kh(e, { relative: t } = {}) {
  H(pr(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: n, navigator: r } = y.useContext(He),
    { hash: l, pathname: i, search: o } = fr(e, { relative: t }),
    s = i;
  return (
    n !== '/' && (s = i === '/' ? n : Ge([n, i])),
    r.createHref({ pathname: s, search: o, hash: l })
  );
}
function pr() {
  return y.useContext(dr) != null;
}
function $t() {
  return (
    H(
      pr(),
      'useLocation() may be used only in the context of a <Router> component.'
    ),
    y.useContext(dr).location
  );
}
var rd =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function ld(e) {
  y.useContext(He).static || y.useLayoutEffect(e);
}
function Gh() {
  let { isDataRoute: e } = y.useContext(nt);
  return e ? a0() : Xh();
}
function Xh() {
  H(
    pr(),
    'useNavigate() may be used only in the context of a <Router> component.'
  );
  let e = y.useContext(yn),
    { basename: t, navigator: n } = y.useContext(He),
    { matches: r } = y.useContext(nt),
    { pathname: l } = $t(),
    i = JSON.stringify(bc(r)),
    o = y.useRef(!1);
  return (
    ld(() => {
      o.current = !0;
    }),
    y.useCallback(
      (a, u = {}) => {
        if ((Ze(o.current, rd), !o.current)) return;
        if (typeof a == 'number') {
          n.go(a);
          return;
        }
        let m = ed(a, JSON.parse(i), l, u.relative === 'path');
        (e == null &&
          t !== '/' &&
          (m.pathname = m.pathname === '/' ? t : Ge([t, m.pathname])),
          (u.replace ? n.replace : n.push)(m, u.state, u));
      },
      [t, n, i, l, e]
    )
  );
}
y.createContext(null);
function fr(e, { relative: t } = {}) {
  let { matches: n } = y.useContext(nt),
    { pathname: r } = $t(),
    l = JSON.stringify(bc(n));
  return y.useMemo(() => ed(e, JSON.parse(l), r, t === 'path'), [e, l, r, t]);
}
function Jh(e, t) {
  return id(e, t);
}
function id(e, t, n, r) {
  var d;
  H(
    pr(),
    'useRoutes() may be used only in the context of a <Router> component.'
  );
  let { navigator: l } = y.useContext(He),
    { matches: i } = y.useContext(nt),
    o = i[i.length - 1],
    s = o ? o.params : {},
    a = o ? o.pathname : '/',
    u = o ? o.pathnameBase : '/',
    m = o && o.route;
  {
    let c = (m && m.path) || '';
    od(
      a,
      !m || c.endsWith('*') || c.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${a}" (under <Route path="${c}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${c}"> to <Route path="${c === '/' ? '*' : `${c}/*`}">.`
    );
  }
  let f = $t(),
    v;
  if (t) {
    let c = typeof t == 'string' ? vn(t) : t;
    (H(
      u === '/' || ((d = c.pathname) == null ? void 0 : d.startsWith(u)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${c.pathname}" was given in the \`location\` prop.`
    ),
      (v = c));
  } else v = f;
  let w = v.pathname || '/',
    g = w;
  if (u !== '/') {
    let c = u.replace(/^\//, '').split('/');
    g = '/' + w.replace(/^\//, '').split('/').slice(c.length).join('/');
  }
  let x = Xc(e, { pathname: g });
  (Ze(
    m || x != null,
    `No routes matched location "${v.pathname}${v.search}${v.hash}" `
  ),
    Ze(
      x == null ||
        x[x.length - 1].route.element !== void 0 ||
        x[x.length - 1].route.Component !== void 0 ||
        x[x.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ));
  let E = n0(
    x &&
      x.map((c) =>
        Object.assign({}, c, {
          params: Object.assign({}, s, c.params),
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
  return t && E
    ? y.createElement(
        dr.Provider,
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
        E
      )
    : E;
}
function qh() {
  let e = s0(),
    t = Wh(e)
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
var bh = y.createElement(qh, null),
  e0 = class extends y.Component {
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
            y.createElement(cs.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function t0({ routeContext: e, match: t, children: n }) {
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
function n0(e, t = [], n = null, r = null) {
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
    (H(
      a >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(i).join(',')}`
    ),
      (l = l.slice(0, Math.min(l.length, a + 1))));
  }
  let o = !1,
    s = -1;
  if (n)
    for (let a = 0; a < l.length; a++) {
      let u = l[a];
      if (
        ((u.route.HydrateFallback || u.route.hydrateFallbackElement) && (s = a),
        u.route.id)
      ) {
        let { loaderData: m, errors: f } = n,
          v =
            u.route.loader &&
            !m.hasOwnProperty(u.route.id) &&
            (!f || f[u.route.id] === void 0);
        if (u.route.lazy || v) {
          ((o = !0), s >= 0 ? (l = l.slice(0, s + 1)) : (l = [l[0]]));
          break;
        }
      }
    }
  return l.reduceRight((a, u, m) => {
    let f,
      v = !1,
      w = null,
      g = null;
    n &&
      ((f = i && u.route.id ? i[u.route.id] : void 0),
      (w = u.route.errorElement || bh),
      o &&
        (s < 0 && m === 0
          ? (od(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (v = !0),
            (g = null))
          : s === m &&
            ((v = !0), (g = u.route.hydrateFallbackElement || null))));
    let x = t.concat(l.slice(0, m + 1)),
      E = () => {
        let d;
        return (
          f
            ? (d = w)
            : v
              ? (d = g)
              : u.route.Component
                ? (d = y.createElement(u.route.Component, null))
                : u.route.element
                  ? (d = u.route.element)
                  : (d = a),
          y.createElement(t0, {
            match: u,
            routeContext: { outlet: a, matches: x, isDataRoute: n != null },
            children: d,
          })
        );
      };
    return n && (u.route.ErrorBoundary || u.route.errorElement || m === 0)
      ? y.createElement(e0, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: f,
          children: E(),
          routeContext: { outlet: null, matches: x, isDataRoute: !0 },
        })
      : E();
  }, null);
}
function ds(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function r0(e) {
  let t = y.useContext(yn);
  return (H(t, ds(e)), t);
}
function l0(e) {
  let t = y.useContext($l);
  return (H(t, ds(e)), t);
}
function i0(e) {
  let t = y.useContext(nt);
  return (H(t, ds(e)), t);
}
function ps(e) {
  let t = i0(e),
    n = t.matches[t.matches.length - 1];
  return (
    H(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
  );
}
function o0() {
  return ps('useRouteId');
}
function s0() {
  var r;
  let e = y.useContext(cs),
    t = l0('useRouteError'),
    n = ps('useRouteError');
  return e !== void 0 ? e : (r = t.errors) == null ? void 0 : r[n];
}
function a0() {
  let { router: e } = r0('useNavigate'),
    t = ps('useNavigate'),
    n = y.useRef(!1);
  return (
    ld(() => {
      n.current = !0;
    }),
    y.useCallback(
      async (l, i = {}) => {
        (Ze(n.current, rd),
          n.current &&
            (typeof l == 'number'
              ? e.navigate(l)
              : await e.navigate(l, { fromRouteId: t, ...i })));
      },
      [e, t]
    )
  );
}
var La = {};
function od(e, t, n) {
  !t && !La[e] && ((La[e] = !0), Ze(!1, n));
}
y.memo(u0);
function u0({ routes: e, future: t, state: n }) {
  return id(e, void 0, n, t);
}
function ho(e) {
  H(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function c0({
  basename: e = '/',
  children: t = null,
  location: n,
  navigationType: r = 'POP',
  navigator: l,
  static: i = !1,
}) {
  H(
    !pr(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let o = e.replace(/^\/*/, '/'),
    s = y.useMemo(
      () => ({ basename: o, navigator: l, static: i, future: {} }),
      [o, l, i]
    );
  typeof n == 'string' && (n = vn(n));
  let {
      pathname: a = '/',
      search: u = '',
      hash: m = '',
      state: f = null,
      key: v = 'default',
    } = n,
    w = y.useMemo(() => {
      let g = et(a, o);
      return g == null
        ? null
        : {
            location: { pathname: g, search: u, hash: m, state: f, key: v },
            navigationType: r,
          };
    }, [o, a, u, m, f, v, r]);
  return (
    Ze(
      w != null,
      `<Router basename="${o}"> is not able to match the URL "${a}${u}${m}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    w == null
      ? null
      : y.createElement(
          He.Provider,
          { value: s },
          y.createElement(dr.Provider, { children: t, value: w })
        )
  );
}
function d0({ children: e, location: t }) {
  return Jh(mo(e), t);
}
function mo(e, t = []) {
  let n = [];
  return (
    y.Children.forEach(e, (r, l) => {
      if (!y.isValidElement(r)) return;
      let i = [...t, l];
      if (r.type === y.Fragment) {
        n.push.apply(n, mo(r.props.children, i));
        return;
      }
      (H(
        r.type === ho,
        `[${typeof r.type == 'string' ? r.type : r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        H(
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
      (r.props.children && (o.children = mo(r.props.children, i)), n.push(o));
    }),
    n
  );
}
var Gr = 'get',
  Xr = 'application/x-www-form-urlencoded';
function Al(e) {
  return e != null && typeof e.tagName == 'string';
}
function p0(e) {
  return Al(e) && e.tagName.toLowerCase() === 'button';
}
function f0(e) {
  return Al(e) && e.tagName.toLowerCase() === 'form';
}
function h0(e) {
  return Al(e) && e.tagName.toLowerCase() === 'input';
}
function m0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function v0(e, t) {
  return e.button === 0 && (!t || t === '_self') && !m0(e);
}
var Dr = null;
function y0() {
  if (Dr === null)
    try {
      (new FormData(document.createElement('form'), 0), (Dr = !1));
    } catch {
      Dr = !0;
    }
  return Dr;
}
var g0 = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function gi(e) {
  return e != null && !g0.has(e)
    ? (Ze(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xr}"`
      ),
      null)
    : e;
}
function w0(e, t) {
  let n, r, l, i, o;
  if (f0(e)) {
    let s = e.getAttribute('action');
    ((r = s ? et(s, t) : null),
      (n = e.getAttribute('method') || Gr),
      (l = gi(e.getAttribute('enctype')) || Xr),
      (i = new FormData(e)));
  } else if (p0(e) || (h0(e) && (e.type === 'submit' || e.type === 'image'))) {
    let s = e.form;
    if (s == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let a = e.getAttribute('formaction') || s.getAttribute('action');
    if (
      ((r = a ? et(a, t) : null),
      (n = e.getAttribute('formmethod') || s.getAttribute('method') || Gr),
      (l =
        gi(e.getAttribute('formenctype')) ||
        gi(s.getAttribute('enctype')) ||
        Xr),
      (i = new FormData(s, e)),
      !y0())
    ) {
      let { name: u, type: m, value: f } = e;
      if (m === 'image') {
        let v = u ? `${u}.` : '';
        (i.append(`${v}x`, '0'), i.append(`${v}y`, '0'));
      } else u && i.append(u, f);
    }
  } else {
    if (Al(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((n = Gr), (r = null), (l = Xr), (o = e));
  }
  return (
    i && l === 'text/plain' && ((o = i), (i = void 0)),
    { action: r, method: n.toLowerCase(), encType: l, formData: i, body: o }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function fs(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function x0(e, t, n) {
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
async function k0(e, t) {
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
function S0(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === 'preload' &&
        typeof e.imageSrcSet == 'string' &&
        typeof e.imageSizes == 'string'
      : typeof e.rel == 'string' && typeof e.href == 'string';
}
async function _0(e, t, n) {
  let r = await Promise.all(
    e.map(async (l) => {
      let i = t.routes[l.route.id];
      if (i) {
        let o = await k0(i, n);
        return o.links ? o.links() : [];
      }
      return [];
    })
  );
  return T0(
    r
      .flat(1)
      .filter(S0)
      .filter((l) => l.rel === 'stylesheet' || l.rel === 'preload')
      .map((l) =>
        l.rel === 'stylesheet'
          ? { ...l, rel: 'prefetch', as: 'style' }
          : { ...l, rel: 'prefetch' }
      )
  );
}
function za(e, t, n, r, l, i) {
  let o = (a, u) => (n[u] ? a.route.id !== n[u].route.id : !0),
    s = (a, u) => {
      var m;
      return (
        n[u].pathname !== a.pathname ||
        (((m = n[u].route.path) == null ? void 0 : m.endsWith('*')) &&
          n[u].params['*'] !== a.params['*'])
      );
    };
  return i === 'assets'
    ? t.filter((a, u) => o(a, u) || s(a, u))
    : i === 'data'
      ? t.filter((a, u) => {
          var f;
          let m = r.routes[a.route.id];
          if (!m || !m.hasLoader) return !1;
          if (o(a, u) || s(a, u)) return !0;
          if (a.route.shouldRevalidate) {
            let v = a.route.shouldRevalidate({
              currentUrl: new URL(
                l.pathname + l.search + l.hash,
                window.origin
              ),
              currentParams: ((f = n[0]) == null ? void 0 : f.params) || {},
              nextUrl: new URL(e, window.origin),
              nextParams: a.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof v == 'boolean') return v;
          }
          return !0;
        })
      : [];
}
function E0(e, t, { includeHydrateFallback: n } = {}) {
  return C0(
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
function C0(e) {
  return [...new Set(e)];
}
function N0(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function T0(e, t) {
  let n = new Set();
  return (
    new Set(t),
    e.reduce((r, l) => {
      let i = JSON.stringify(N0(l));
      return (n.has(i) || (n.add(i), r.push({ key: i, link: l })), r);
    }, [])
  );
}
function sd() {
  let e = y.useContext(yn);
  return (
    fs(
      e,
      'You must render this element inside a <DataRouterContext.Provider> element'
    ),
    e
  );
}
function P0() {
  let e = y.useContext($l);
  return (
    fs(
      e,
      'You must render this element inside a <DataRouterStateContext.Provider> element'
    ),
    e
  );
}
var hs = y.createContext(void 0);
hs.displayName = 'FrameworkContext';
function ad() {
  let e = y.useContext(hs);
  return (
    fs(e, 'You must render this element inside a <HydratedRouter> element'),
    e
  );
}
function j0(e, t) {
  let n = y.useContext(hs),
    [r, l] = y.useState(!1),
    [i, o] = y.useState(!1),
    {
      onFocus: s,
      onBlur: a,
      onMouseEnter: u,
      onMouseLeave: m,
      onTouchStart: f,
    } = t,
    v = y.useRef(null);
  (y.useEffect(() => {
    if ((e === 'render' && o(!0), e === 'viewport')) {
      let x = (d) => {
          d.forEach((c) => {
            o(c.isIntersecting);
          });
        },
        E = new IntersectionObserver(x, { threshold: 0.5 });
      return (
        v.current && E.observe(v.current),
        () => {
          E.disconnect();
        }
      );
    }
  }, [e]),
    y.useEffect(() => {
      if (r) {
        let x = setTimeout(() => {
          o(!0);
        }, 100);
        return () => {
          clearTimeout(x);
        };
      }
    }, [r]));
  let w = () => {
      l(!0);
    },
    g = () => {
      (l(!1), o(!1));
    };
  return n
    ? e !== 'intent'
      ? [i, v, {}]
      : [
          i,
          v,
          {
            onFocus: Pn(s, w),
            onBlur: Pn(a, g),
            onMouseEnter: Pn(u, w),
            onMouseLeave: Pn(m, g),
            onTouchStart: Pn(f, w),
          },
        ]
    : [!1, v, {}];
}
function Pn(e, t) {
  return (n) => {
    (e && e(n), n.defaultPrevented || t(n));
  };
}
function R0({ page: e, ...t }) {
  let { router: n } = sd(),
    r = y.useMemo(() => Xc(n.routes, e, n.basename), [n.routes, e, n.basename]);
  return r ? y.createElement(z0, { page: e, matches: r, ...t }) : null;
}
function L0(e) {
  let { manifest: t, routeModules: n } = ad(),
    [r, l] = y.useState([]);
  return (
    y.useEffect(() => {
      let i = !1;
      return (
        _0(e, t, n).then((o) => {
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
function z0({ page: e, matches: t, ...n }) {
  let r = $t(),
    { manifest: l, routeModules: i } = ad(),
    { basename: o } = sd(),
    { loaderData: s, matches: a } = P0(),
    u = y.useMemo(() => za(e, t, a, l, r, 'data'), [e, t, a, l, r]),
    m = y.useMemo(() => za(e, t, a, l, r, 'assets'), [e, t, a, l, r]),
    f = y.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let g = new Set(),
        x = !1;
      if (
        (t.forEach((d) => {
          var p;
          let c = l.routes[d.route.id];
          !c ||
            !c.hasLoader ||
            ((!u.some((k) => k.route.id === d.route.id) &&
              d.route.id in s &&
              (p = i[d.route.id]) != null &&
              p.shouldRevalidate) ||
            c.hasClientLoader
              ? (x = !0)
              : g.add(d.route.id));
        }),
        g.size === 0)
      )
        return [];
      let E = x0(e, o, 'data');
      return (
        x &&
          g.size > 0 &&
          E.searchParams.set(
            '_routes',
            t
              .filter((d) => g.has(d.route.id))
              .map((d) => d.route.id)
              .join(',')
          ),
        [E.pathname + E.search]
      );
    }, [o, s, r, l, u, t, e, i]),
    v = y.useMemo(() => E0(m, l), [m, l]),
    w = L0(m);
  return y.createElement(
    y.Fragment,
    null,
    f.map((g) =>
      y.createElement('link', {
        key: g,
        rel: 'prefetch',
        as: 'fetch',
        href: g,
        ...n,
      })
    ),
    v.map((g) =>
      y.createElement('link', { key: g, rel: 'modulepreload', href: g, ...n })
    ),
    w.map(({ key: g, link: x }) => y.createElement('link', { key: g, ...x }))
  );
}
function M0(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == 'function' ? n(t) : n != null && (n.current = t);
    });
  };
}
var ud =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  ud && (window.__reactRouterVersion = '7.7.1');
} catch {}
function D0({ basename: e, children: t, window: n }) {
  let r = y.useRef();
  r.current == null && (r.current = kh({ window: n, v5Compat: !0 }));
  let l = r.current,
    [i, o] = y.useState({ action: l.action, location: l.location }),
    s = y.useCallback(
      (a) => {
        y.startTransition(() => o(a));
      },
      [o]
    );
  return (
    y.useLayoutEffect(() => l.listen(s), [l, s]),
    y.createElement(c0, {
      basename: e,
      children: t,
      location: i.location,
      navigationType: i.action,
      navigator: l,
    })
  );
}
var cd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Sl = y.forwardRef(function (
    {
      onClick: t,
      discover: n = 'render',
      prefetch: r = 'none',
      relative: l,
      reloadDocument: i,
      replace: o,
      state: s,
      target: a,
      to: u,
      preventScrollReset: m,
      viewTransition: f,
      ...v
    },
    w
  ) {
    let { basename: g } = y.useContext(He),
      x = typeof u == 'string' && cd.test(u),
      E,
      d = !1;
    if (typeof u == 'string' && x && ((E = u), ud))
      try {
        let D = new URL(window.location.href),
          R = u.startsWith('//') ? new URL(D.protocol + u) : new URL(u),
          pe = et(R.pathname, g);
        R.origin === D.origin && pe != null
          ? (u = pe + R.search + R.hash)
          : (d = !0);
      } catch {
        Ze(
          !1,
          `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let c = Kh(u, { relative: l }),
      [p, k, _] = j0(r, v),
      P = I0(u, {
        replace: o,
        state: s,
        target: a,
        preventScrollReset: m,
        relative: l,
        viewTransition: f,
      });
    function T(D) {
      (t && t(D), D.defaultPrevented || P(D));
    }
    let j = y.createElement('a', {
      ...v,
      ..._,
      href: E || c,
      onClick: d || i ? t : T,
      ref: M0(w, k),
      target: a,
      'data-discover': !x && n === 'render' ? 'true' : void 0,
    });
    return p && !x
      ? y.createElement(y.Fragment, null, j, y.createElement(R0, { page: c }))
      : j;
  });
Sl.displayName = 'Link';
var B0 = y.forwardRef(function (
  {
    'aria-current': t = 'page',
    caseSensitive: n = !1,
    className: r = '',
    end: l = !1,
    style: i,
    to: o,
    viewTransition: s,
    children: a,
    ...u
  },
  m
) {
  let f = fr(o, { relative: u.relative }),
    v = $t(),
    w = y.useContext($l),
    { navigator: g, basename: x } = y.useContext(He),
    E = w != null && H0(f) && s === !0,
    d = g.encodeLocation ? g.encodeLocation(f).pathname : f.pathname,
    c = v.pathname,
    p =
      w && w.navigation && w.navigation.location
        ? w.navigation.location.pathname
        : null;
  (n ||
    ((c = c.toLowerCase()),
    (p = p ? p.toLowerCase() : null),
    (d = d.toLowerCase())),
    p && x && (p = et(p, x) || p));
  const k = d !== '/' && d.endsWith('/') ? d.length - 1 : d.length;
  let _ = c === d || (!l && c.startsWith(d) && c.charAt(k) === '/'),
    P =
      p != null &&
      (p === d || (!l && p.startsWith(d) && p.charAt(d.length) === '/')),
    T = { isActive: _, isPending: P, isTransitioning: E },
    j = _ ? t : void 0,
    D;
  typeof r == 'function'
    ? (D = r(T))
    : (D = [
        r,
        _ ? 'active' : null,
        P ? 'pending' : null,
        E ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
  let R = typeof i == 'function' ? i(T) : i;
  return y.createElement(
    Sl,
    {
      ...u,
      'aria-current': j,
      className: D,
      ref: m,
      style: R,
      to: o,
      viewTransition: s,
    },
    typeof a == 'function' ? a(T) : a
  );
});
B0.displayName = 'NavLink';
var F0 = y.forwardRef(
  (
    {
      discover: e = 'render',
      fetcherKey: t,
      navigate: n,
      reloadDocument: r,
      replace: l,
      state: i,
      method: o = Gr,
      action: s,
      onSubmit: a,
      relative: u,
      preventScrollReset: m,
      viewTransition: f,
      ...v
    },
    w
  ) => {
    let g = U0(),
      x = Z0(s, { relative: u }),
      E = o.toLowerCase() === 'get' ? 'get' : 'post',
      d = typeof s == 'string' && cd.test(s),
      c = (p) => {
        if ((a && a(p), p.defaultPrevented)) return;
        p.preventDefault();
        let k = p.nativeEvent.submitter,
          _ = (k == null ? void 0 : k.getAttribute('formmethod')) || o;
        g(k || p.currentTarget, {
          fetcherKey: t,
          method: _,
          navigate: n,
          replace: l,
          state: i,
          relative: u,
          preventScrollReset: m,
          viewTransition: f,
        });
      };
    return y.createElement('form', {
      ref: w,
      method: E,
      action: x,
      onSubmit: r ? a : c,
      ...v,
      'data-discover': !d && e === 'render' ? 'true' : void 0,
    });
  }
);
F0.displayName = 'Form';
function O0(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function dd(e) {
  let t = y.useContext(yn);
  return (H(t, O0(e)), t);
}
function I0(
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
  let s = Gh(),
    a = $t(),
    u = fr(e, { relative: i });
  return y.useCallback(
    (m) => {
      if (v0(m, t)) {
        m.preventDefault();
        let f = n !== void 0 ? n : ir(a) === ir(u);
        s(e, {
          replace: f,
          state: r,
          preventScrollReset: l,
          relative: i,
          viewTransition: o,
        });
      }
    },
    [a, s, u, n, r, t, e, l, i, o]
  );
}
var $0 = 0,
  A0 = () => `__${String(++$0)}__`;
function U0() {
  let { router: e } = dd('useSubmit'),
    { basename: t } = y.useContext(He),
    n = o0();
  return y.useCallback(
    async (r, l = {}) => {
      let { action: i, method: o, encType: s, formData: a, body: u } = w0(r, t);
      if (l.navigate === !1) {
        let m = l.fetcherKey || A0();
        await e.fetch(m, n, l.action || i, {
          preventScrollReset: l.preventScrollReset,
          formData: a,
          body: u,
          formMethod: l.method || o,
          formEncType: l.encType || s,
          flushSync: l.flushSync,
        });
      } else
        await e.navigate(l.action || i, {
          preventScrollReset: l.preventScrollReset,
          formData: a,
          body: u,
          formMethod: l.method || o,
          formEncType: l.encType || s,
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
function Z0(e, { relative: t } = {}) {
  let { basename: n } = y.useContext(He),
    r = y.useContext(nt);
  H(r, 'useFormAction must be used inside a RouteContext');
  let [l] = r.matches.slice(-1),
    i = { ...fr(e || '.', { relative: t }) },
    o = $t();
  if (e == null) {
    i.search = o.search;
    let s = new URLSearchParams(i.search),
      a = s.getAll('index');
    if (a.some((m) => m === '')) {
      (s.delete('index'),
        a.filter((f) => f).forEach((f) => s.append('index', f)));
      let m = s.toString();
      i.search = m ? `?${m}` : '';
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
function H0(e, { relative: t } = {}) {
  let n = y.useContext(nd);
  H(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: r } = dd('useViewTransitionState'),
    l = fr(e, { relative: t });
  if (!n.isTransitioning) return !1;
  let i = et(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = et(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return kl(l.pathname, o) != null || kl(l.pathname, i) != null;
}
const W0 = () =>
    h.jsx('div', {
      className:
        'min-h-screen bg-gray-50 flex items-center justify-center px-4',
      children: h.jsxs('div', {
        className: 'max-w-md w-full text-center',
        children: [
          h.jsxs('div', {
            className: 'mb-8',
            children: [
              h.jsx('div', {
                className:
                  'inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6',
                children: h.jsx(Vf, { className: 'w-10 h-10 text-red-600' }),
              }),
              h.jsx('h1', {
                className: 'text-6xl font-bold text-gray-900 mb-4',
                children: '404',
              }),
              h.jsx('h2', {
                className: 'text-2xl font-semibold text-gray-700 mb-4',
                children: 'Page Not Found',
              }),
              h.jsx('p', {
                className: 'text-gray-600 mb-8',
                children:
                  "The page you're looking for doesn't exist in this galaxy. Perhaps the archives are incomplete?",
              }),
            ],
          }),
          h.jsxs('div', {
            className: 'space-y-4',
            children: [
              h.jsxs(Sl, {
                to: '/',
                className:
                  'inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium',
                children: [
                  h.jsx(eh, { className: 'w-5 h-5 mr-2' }),
                  'Return to Home',
                ],
              }),
              h.jsxs(Sl, {
                to: '/',
                className:
                  'inline-flex items-center justify-center w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium',
                children: [
                  h.jsx(Kc, { className: 'w-5 h-5 mr-2' }),
                  'Search Characters',
                ],
              }),
            ],
          }),
          h.jsx('div', {
            className: 'mt-8 text-sm text-gray-500',
            children: h.jsx('p', {
              children: 'May the Force be with you on your way back!',
            }),
          }),
        ],
      }),
    }),
  V0 = () => {
    const [e, t] = y.useState([]),
      [n, r] = y.useState(null),
      [l, i] = y.useState(!1),
      [o, s] = y.useState(null),
      [a, u] = y.useState(''),
      [m, f] = y.useState(null),
      [v, w] = y.useState(!1),
      g = y.useCallback(async (p, k = 1) => {
        (i(!0), s(null), u(p));
        try {
          const _ = await wh.searchCharacters(p, k);
          (t(_.results), r(gh(_, k)));
        } catch (_) {
          (console.error('Search error:', _),
            s(_ instanceof Error ? _.message : 'An unexpected error occurred'),
            t([]),
            r(null));
        } finally {
          i(!1);
        }
      }, []),
      x = y.useCallback(
        (p) => {
          g(a, p);
        },
        [a, g]
      ),
      E = () => {
        const p = (n == null ? void 0 : n.currentPage) || 1;
        g(a, p);
      },
      d = (p) => {
        (f(p), w(!0));
      },
      c = () => {
        (w(!1), f(null));
      };
    return h.jsx(D0, {
      children: h.jsxs(d0, {
        children: [
          h.jsx(ho, {
            path: '/',
            element: h.jsxs('div', {
              className: 'min-h-screen bg-gray-50 flex flex-col relative',
              children: [
                h.jsx(ch, { onSearch: g, isLoading: l }),
                h.jsx(vh, {
                  characters: e,
                  pagination: n,
                  isLoading: l,
                  error: o,
                  onRetry: E,
                  onPageChange: x,
                  onCharacterClick: d,
                }),
                h.jsx(xh, {}),
                h.jsx(yh, { character: m, isOpen: v, onClose: c }),
              ],
            }),
          }),
          h.jsx(ho, { path: '*', element: h.jsx(W0, {}) }),
        ],
      }),
    });
  };
Vc(document.getElementById('root')).render(
  h.jsx(y.StrictMode, { children: h.jsx(V0, {}) })
);
