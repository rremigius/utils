(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function () {
    var isNode = typeof module !== 'undefined' && typeof module.exports !== 'undefined';

    var Utils = require('./src/utils-core').Utils;

    var loaded = [];
    loaded.push(require('./src/utils/string').String);
    loaded.push(require('./src/utils/validation').Validation);
    loaded.push(require('./src/utils/error').Error);
    loaded.push(require('./src/utils/dom').DOM);

    for (var i = 0; i < loaded.length; i++) {
        Utils.extendUtils(loaded[i]);
    }

    module.exports.Utils = Utils;
    window.Utils = Utils;
})();

},{"./src/utils-core":3,"./src/utils/dom":4,"./src/utils/error":5,"./src/utils/string":6,"./src/utils/validation":7}],2:[function(require,module,exports){
(function (global){
/**
 * @license
 * lodash lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 */
;(function () {
	function t(t, n) {
		return t.set(n[0], n[1]), t;
	}function n(t, n) {
		return t.add(n), t;
	}function r(t, n, r) {
		switch (r.length) {case 0:
				return t.call(n);case 1:
				return t.call(n, r[0]);case 2:
				return t.call(n, r[0], r[1]);case 3:
				return t.call(n, r[0], r[1], r[2]);}return t.apply(n, r);
	}function e(t, n, r, e) {
		for (var u = -1, o = t ? t.length : 0; ++u < o;) {
			var i = t[u];n(e, i, r(i), t);
		}return e;
	}function u(t, n) {
		for (var r = -1, e = t ? t.length : 0; ++r < e && false !== n(t[r], r, t););return t;
	}function o(t, n) {
		for (var r = t ? t.length : 0; r-- && false !== n(t[r], r, t););
		return t;
	}function i(t, n) {
		for (var r = -1, e = t ? t.length : 0; ++r < e;) if (!n(t[r], r, t)) return false;return true;
	}function f(t, n) {
		for (var r = -1, e = t ? t.length : 0, u = 0, o = []; ++r < e;) {
			var i = t[r];n(i, r, t) && (o[u++] = i);
		}return o;
	}function c(t, n) {
		return !(!t || !t.length) && -1 < d(t, n, 0);
	}function a(t, n, r) {
		for (var e = -1, u = t ? t.length : 0; ++e < u;) if (r(n, t[e])) return true;return false;
	}function l(t, n) {
		for (var r = -1, e = t ? t.length : 0, u = Array(e); ++r < e;) u[r] = n(t[r], r, t);return u;
	}function s(t, n) {
		for (var r = -1, e = n.length, u = t.length; ++r < e;) t[u + r] = n[r];return t;
	}function h(t, n, r, e) {
		var u = -1,
		    o = t ? t.length : 0;for (e && o && (r = t[++u]); ++u < o;) r = n(r, t[u], u, t);return r;
	}function p(t, n, r, e) {
		var u = t ? t.length : 0;for (e && u && (r = t[--u]); u--;) r = n(r, t[u], u, t);return r;
	}function _(t, n) {
		for (var r = -1, e = t ? t.length : 0; ++r < e;) if (n(t[r], r, t)) return true;return false;
	}function v(t, n, r) {
		var e;return r(t, function (t, r, u) {
			return n(t, r, u) ? (e = r, false) : void 0;
		}), e;
	}function g(t, n, r, e) {
		var u = t.length;for (r += e ? 1 : -1; e ? r-- : ++r < u;) if (n(t[r], r, t)) return r;return -1;
	}function d(t, n, r) {
		if (n !== n) return M(t, r);--r;for (var e = t.length; ++r < e;) if (t[r] === n) return r;
		return -1;
	}function y(t, n, r, e) {
		--r;for (var u = t.length; ++r < u;) if (e(t[r], n)) return r;return -1;
	}function b(t, n) {
		var r = t ? t.length : 0;return r ? w(t, n) / r : V;
	}function x(t, n, r, e, u) {
		return u(t, function (t, u, o) {
			r = e ? (e = false, t) : n(r, t, u, o);
		}), r;
	}function j(t, n) {
		var r = t.length;for (t.sort(n); r--;) t[r] = t[r].c;return t;
	}function w(t, n) {
		for (var r, e = -1, u = t.length; ++e < u;) {
			var o = n(t[e]);o !== T && (r = r === T ? o : r + o);
		}return r;
	}function m(t, n) {
		for (var r = -1, e = Array(t); ++r < t;) e[r] = n(r);return e;
	}function A(t, n) {
		return l(n, function (n) {
			return [n, t[n]];
		});
	}function O(t) {
		return function (n) {
			return t(n);
		};
	}function k(t, n) {
		return l(n, function (n) {
			return t[n];
		});
	}function E(t, n) {
		return t.has(n);
	}function S(t, n) {
		for (var r = -1, e = t.length; ++r < e && -1 < d(n, t[r], 0););return r;
	}function I(t, n) {
		for (var r = t.length; r-- && -1 < d(n, t[r], 0););return r;
	}function R(t) {
		return t && t.Object === Object ? t : null;
	}function W(t) {
		return zt[t];
	}function B(t) {
		return Ut[t];
	}function L(t) {
		return "\\" + Dt[t];
	}function M(t, n, r) {
		var e = t.length;for (n += r ? 1 : -1; r ? n-- : ++n < e;) {
			var u = t[n];if (u !== u) return n;
		}return -1;
	}function C(t) {
		var n = false;if (null != t && typeof t.toString != "function") try {
			n = !!(t + "");
		} catch (r) {}return n;
	}function z(t) {
		for (var n, r = []; !(n = t.next()).done;) r.push(n.value);return r;
	}function U(t) {
		var n = -1,
		    r = Array(t.size);return t.forEach(function (t, e) {
			r[++n] = [e, t];
		}), r;
	}function $(t, n) {
		for (var r = -1, e = t.length, u = 0, o = []; ++r < e;) {
			var i = t[r];i !== n && "__lodash_placeholder__" !== i || (t[r] = "__lodash_placeholder__", o[u++] = r);
		}return o;
	}function D(t) {
		var n = -1,
		    r = Array(t.size);return t.forEach(function (t) {
			r[++n] = t;
		}), r;
	}function F(t) {
		var n = -1,
		    r = Array(t.size);return t.forEach(function (t) {
			r[++n] = [t, t];
		}), r;
	}function N(t) {
		if (!t || !Wt.test(t)) return t.length;for (var n = It.lastIndex = 0; It.test(t);) n++;return n;
	}function P(t) {
		return $t[t];
	}function Z(R) {
		function At(t, n) {
			return R.setTimeout.call(Kt, t, n);
		}function Ot(t) {
			if (Te(t) && !yi(t) && !(t instanceof Ut)) {
				if (t instanceof zt) return t;if (Wu.call(t, "__wrapped__")) return ae(t);
			}return new zt(t);
		}function kt() {}function zt(t, n) {
			this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = T;
		}function Ut(t) {
			this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = [];
		}function $t(t) {
			var n = -1,
			    r = t ? t.length : 0;for (this.clear(); ++n < r;) {
				var e = t[n];this.set(e[0], e[1]);
			}
		}function Dt(t) {
			var n = -1,
			    r = t ? t.length : 0;for (this.clear(); ++n < r;) {
				var e = t[n];this.set(e[0], e[1]);
			}
		}function Pt(t) {
			var n = -1,
			    r = t ? t.length : 0;for (this.clear(); ++n < r;) {
				var e = t[n];this.set(e[0], e[1]);
			}
		}function Zt(t) {
			var n = -1,
			    r = t ? t.length : 0;
			for (this.__data__ = new Pt(); ++n < r;) this.add(t[n]);
		}function qt(t) {
			this.__data__ = new Dt(t);
		}function Vt(t, n, r, e) {
			return t === T || Ce(t, ku[r]) && !Wu.call(e, r) ? n : t;
		}function Jt(t, n, r) {
			(r === T || Ce(t[n], r)) && (typeof n != "number" || r !== T || n in t) || (t[n] = r);
		}function Yt(t, n, r) {
			var e = t[n];Wu.call(t, n) && Ce(e, r) && (r !== T || n in t) || (t[n] = r);
		}function Ht(t, n) {
			for (var r = t.length; r--;) if (Ce(t[r][0], n)) return r;return -1;
		}function Qt(t, n, r, e) {
			return Ao(t, function (t, u, o) {
				n(e, t, r(t), o);
			}), e;
		}function Xt(t, n) {
			return t && sr(n, iu(n), t);
		}
		function tn(t, n) {
			for (var r = -1, e = null == t, u = n.length, o = Array(u); ++r < u;) o[r] = e ? T : uu(t, n[r]);return o;
		}function nn(t, n, r) {
			return t === t && (r !== T && (t = r >= t ? t : r), n !== T && (t = t >= n ? t : n)), t;
		}function rn(t, n, r, e, o, i, f) {
			var c;if (e && (c = i ? e(t, o, i, f) : e(t)), c !== T) return c;if (!Ze(t)) return t;if (o = yi(t)) {
				if (c = Kr(t), !n) return lr(t, c);
			} else {
				var a = qr(t),
				    l = "[object Function]" == a || "[object GeneratorFunction]" == a;if (bi(t)) return or(t, n);if ("[object Object]" == a || "[object Arguments]" == a || l && !i) {
					if (C(t)) return i ? t : {};if (c = Gr(l ? {} : t), !n) return hr(t, Xt(c, t));
				} else {
					if (!Ct[a]) return i ? t : {};c = Jr(t, a, rn, n);
				}
			}if (f || (f = new qt()), i = f.get(t)) return i;if (f.set(t, c), !o) var s = r ? gn(t, iu, Tr) : iu(t);return u(s || t, function (u, o) {
				s && (o = u, u = t[o]), Yt(c, o, rn(u, n, r, e, o, t, f));
			}), c;
		}function en(t) {
			var n = iu(t),
			    r = n.length;return function (e) {
				if (null == e) return !r;for (var u = r; u--;) {
					var o = n[u],
					    i = t[o],
					    f = e[o];if (f === T && !(o in Object(e)) || !i(f)) return false;
				}return true;
			};
		}function un(t) {
			return Ze(t) ? Tu(t) : {};
		}function on(t, n, r) {
			if (typeof t != "function") throw new Au("Expected a function");
			return At(function () {
				t.apply(T, r);
			}, n);
		}function fn(t, n, r, e) {
			var u = -1,
			    o = c,
			    i = true,
			    f = t.length,
			    s = [],
			    h = n.length;if (!f) return s;r && (n = l(n, O(r))), e ? (o = a, i = false) : n.length >= 200 && (o = E, i = false, n = new Zt(n));t: for (; ++u < f;) {
				var p = t[u],
				    _ = r ? r(p) : p,
				    p = e || 0 !== p ? p : 0;if (i && _ === _) {
					for (var v = h; v--;) if (n[v] === _) continue t;s.push(p);
				} else o(n, _, e) || s.push(p);
			}return s;
		}function cn(t, n) {
			var r = true;return Ao(t, function (t, e, u) {
				return r = !!n(t, e, u);
			}), r;
		}function an(t, n, r) {
			for (var e = -1, u = t.length; ++e < u;) {
				var o = t[e],
				    i = n(o);if (null != i && (f === T ? i === i && !Je(i) : r(i, f))) var f = i,
				    c = o;
			}return c;
		}function ln(t, n) {
			var r = [];return Ao(t, function (t, e, u) {
				n(t, e, u) && r.push(t);
			}), r;
		}function sn(t, n, r, e, u) {
			var o = -1,
			    i = t.length;for (r || (r = Hr), u || (u = []); ++o < i;) {
				var f = t[o];n > 0 && r(f) ? n > 1 ? sn(f, n - 1, r, e, u) : s(u, f) : e || (u[u.length] = f);
			}return u;
		}function hn(t, n) {
			return t && ko(t, n, iu);
		}function pn(t, n) {
			return t && Eo(t, n, iu);
		}function _n(t, n) {
			return f(n, function (n) {
				return Fe(t[n]);
			});
		}function vn(t, n) {
			n = ne(n, t) ? [n] : er(n);for (var r = 0, e = n.length; null != t && e > r;) t = t[fe(n[r++])];return r && r == e ? t : T;
		}function gn(t, n, r) {
			return n = n(t), yi(t) ? n : s(n, r(t));
		}function dn(t, n) {
			return t > n;
		}function yn(t, n) {
			return null != t && (Wu.call(t, n) || typeof t == "object" && n in t && null === Ju(Object(t)));
		}function bn(t, n) {
			return null != t && n in Object(t);
		}function xn(t, n, r) {
			for (var e = r ? a : c, u = t[0].length, o = t.length, i = o, f = Array(o), s = 1 / 0, h = []; i--;) {
				var p = t[i];i && n && (p = l(p, O(n))), s = to(p.length, s), f[i] = !r && (n || u >= 120 && p.length >= 120) ? new Zt(i && p) : T;
			}var p = t[0],
			    _ = -1,
			    v = f[0];t: for (; ++_ < u && s > h.length;) {
				var g = p[_],
				    d = n ? n(g) : g,
				    g = r || 0 !== g ? g : 0;if (v ? !E(v, d) : !e(h, d, r)) {
					for (i = o; --i;) {
						var y = f[i];if (y ? !E(y, d) : !e(t[i], d, r)) continue t;
					}v && v.push(d), h.push(g);
				}
			}return h;
		}function jn(t, n, r) {
			var e = {};return hn(t, function (t, u, o) {
				n(e, r(t), u, o);
			}), e;
		}function wn(t, n, e) {
			return ne(n, t) || (n = er(n), t = ie(t, n), n = ve(n)), n = null == t ? t : t[fe(n)], null == n ? T : r(n, t, e);
		}function mn(t, n, r, e, u) {
			if (t === n) n = true;else if (null == t || null == n || !Ze(t) && !Te(n)) n = t !== t && n !== n;else t: {
				var o = yi(t),
				    i = yi(n),
				    f = "[object Array]",
				    c = "[object Array]";o || (f = qr(t), f = "[object Arguments]" == f ? "[object Object]" : f), i || (c = qr(n), c = "[object Arguments]" == c ? "[object Object]" : c);var a = "[object Object]" == f && !C(t),
				    i = "[object Object]" == c && !C(n);if ((c = f == c) && !a) u || (u = new qt()), n = o || Ye(t) ? zr(t, n, mn, r, e, u) : Ur(t, n, f, mn, r, e, u);else {
					if (!(2 & e) && (o = a && Wu.call(t, "__wrapped__"), f = i && Wu.call(n, "__wrapped__"), o || f)) {
						t = o ? t.value() : t, n = f ? n.value() : n, u || (u = new qt()), n = mn(t, n, r, e, u);break t;
					}if (c) {
						n: if (u || (u = new qt()), o = 2 & e, f = iu(t), i = f.length, c = iu(n).length, i == c || o) {
							for (a = i; a--;) {
								var l = f[a];if (!(o ? l in n : yn(n, l))) {
									n = false;break n;
								}
							}if (c = u.get(t)) n = c == n;else {
								c = true, u.set(t, n);for (var s = o; ++a < i;) {
									var l = f[a],
									    h = t[l],
									    p = n[l];if (r) var _ = o ? r(p, h, l, n, t, u) : r(h, p, l, t, n, u);if (_ === T ? h !== p && !mn(h, p, r, e, u) : !_) {
										c = false;break;
									}s || (s = "constructor" == l);
								}c && !s && (r = t.constructor, e = n.constructor, r != e && "constructor" in t && "constructor" in n && !(typeof r == "function" && r instanceof r && typeof e == "function" && e instanceof e) && (c = false)), u["delete"](t), n = c;
							}
						} else n = false;
					} else n = false;
				}
			}return n;
		}function An(t, n, r, e) {
			var u = r.length,
			    o = u,
			    i = !e;if (null == t) return !o;for (t = Object(t); u--;) {
				var f = r[u];if (i && f[2] ? f[1] !== t[f[0]] : !(f[0] in t)) return false;
			}for (; ++u < o;) {
				var f = r[u],
				    c = f[0],
				    a = t[c],
				    l = f[1];if (i && f[2]) {
					if (a === T && !(c in t)) return false;
				} else {
					if (f = new qt(), e) var s = e(a, l, c, t, n, f);if (s === T ? !mn(l, a, e, 3, f) : !s) return false;
				}
			}return true;
		}function On(t) {
			return !Ze(t) || Iu && Iu in t ? false : (Fe(t) || C(t) ? zu : yt).test(ce(t));
		}function kn(t) {
			return typeof t == "function" ? t : null == t ? pu : typeof t == "object" ? yi(t) ? Wn(t[0], t[1]) : Rn(t) : du(t);
		}function En(t) {
			t = null == t ? t : Object(t);var n,
			    r = [];for (n in t) r.push(n);return r;
		}function Sn(t, n) {
			return n > t;
		}function In(t, n) {
			var r = -1,
			    e = Ue(t) ? Array(t.length) : [];
			return Ao(t, function (t, u, o) {
				e[++r] = n(t, u, o);
			}), e;
		}function Rn(t) {
			var n = Pr(t);return 1 == n.length && n[0][2] ? ue(n[0][0], n[0][1]) : function (r) {
				return r === t || An(r, t, n);
			};
		}function Wn(t, n) {
			return ne(t) && n === n && !Ze(n) ? ue(fe(t), n) : function (r) {
				var e = uu(r, t);return e === T && e === n ? ou(r, t) : mn(n, e, T, 3);
			};
		}function Bn(t, n, r, e, o) {
			if (t !== n) {
				if (!yi(n) && !Ye(n)) var i = fu(n);u(i || n, function (u, f) {
					if (i && (f = u, u = n[f]), Ze(u)) {
						o || (o = new qt());var c = f,
						    a = o,
						    l = t[c],
						    s = n[c],
						    h = a.get(s);if (h) Jt(t, c, h);else {
							var h = e ? e(l, s, c + "", t, n, a) : T,
							    p = h === T;p && (h = s, yi(s) || Ye(s) ? yi(l) ? h = l : $e(l) ? h = lr(l) : (p = false, h = rn(s, true)) : Ve(s) || ze(s) ? ze(l) ? h = ru(l) : !Ze(l) || r && Fe(l) ? (p = false, h = rn(s, true)) : h = l : p = false), a.set(s, h), p && Bn(h, s, r, e, a), a["delete"](s), Jt(t, c, h);
						}
					} else c = e ? e(t[f], u, f + "", t, n, o) : T, c === T && (c = u), Jt(t, f, c);
				});
			}
		}function Ln(t, n) {
			var r = t.length;return r ? (n += 0 > n ? r : 0, Xr(n, r) ? t[n] : T) : void 0;
		}function Mn(t, n, r) {
			var e = -1;return n = l(n.length ? n : [pu], O(Fr())), t = In(t, function (t) {
				return { a: l(n, function (n) {
						return n(t);
					}), b: ++e, c: t };
			}), j(t, function (t, n) {
				var e;t: {
					e = -1;for (var u = t.a, o = n.a, i = u.length, f = r.length; ++e < i;) {
						var c = fr(u[e], o[e]);if (c) {
							e = e >= f ? c : c * ("desc" == r[e] ? -1 : 1);break t;
						}
					}e = t.b - n.b;
				}return e;
			});
		}function Cn(t, n) {
			return t = Object(t), h(n, function (n, r) {
				return r in t && (n[r] = t[r]), n;
			}, {});
		}function zn(t, n) {
			for (var r = -1, e = gn(t, fu, Bo), u = e.length, o = {}; ++r < u;) {
				var i = e[r],
				    f = t[i];n(f, i) && (o[i] = f);
			}return o;
		}function Un(t) {
			return function (n) {
				return null == n ? T : n[t];
			};
		}function $n(t) {
			return function (n) {
				return vn(n, t);
			};
		}function Dn(t, n, r, e) {
			var u = e ? y : d,
			    o = -1,
			    i = n.length,
			    f = t;for (t === n && (n = lr(n)), r && (f = l(t, O(r))); ++o < i;) for (var c = 0, a = n[o], a = r ? r(a) : a; -1 < (c = u(f, a, c, e));) f !== t && Vu.call(f, c, 1), Vu.call(t, c, 1);return t;
		}function Fn(t, n) {
			for (var r = t ? n.length : 0, e = r - 1; r--;) {
				var u = n[r];if (r == e || u !== o) {
					var o = u;if (Xr(u)) Vu.call(t, u, 1);else if (ne(u, t)) delete t[fe(u)];else {
						var u = er(u),
						    i = ie(t, u);null != i && delete i[fe(ve(u))];
					}
				}
			}
		}function Nn(t, n) {
			return t + Gu(ro() * (n - t + 1));
		}function Pn(t, n) {
			var r = "";if (!t || 1 > n || n > 9007199254740991) return r;do n % 2 && (r += t), (n = Gu(n / 2)) && (t += t); while (n);return r;
		}function Zn(t, n, r, e) {
			n = ne(n, t) ? [n] : er(n);for (var u = -1, o = n.length, i = o - 1, f = t; null != f && ++u < o;) {
				var c = fe(n[u]);if (Ze(f)) {
					var a = r;if (u != i) {
						var l = f[c],
						    a = e ? e(l, c, f) : T;a === T && (a = null == l ? Xr(n[u + 1]) ? [] : {} : l);
					}Yt(f, c, a);
				}f = f[c];
			}return t;
		}function Tn(t, n, r) {
			var e = -1,
			    u = t.length;for (0 > n && (n = -n > u ? 0 : u + n), r = r > u ? u : r, 0 > r && (r += u), u = n > r ? 0 : r - n >>> 0, n >>>= 0, r = Array(u); ++e < u;) r[e] = t[e + n];return r;
		}function qn(t, n) {
			var r;return Ao(t, function (t, e, u) {
				return r = n(t, e, u), !r;
			}), !!r;
		}function Vn(t, n, r) {
			var e = 0,
			    u = t ? t.length : e;if (typeof n == "number" && n === n && 2147483647 >= u) {
				for (; u > e;) {
					var o = e + u >>> 1,
					    i = t[o];null !== i && !Je(i) && (r ? n >= i : n > i) ? e = o + 1 : u = o;
				}return u;
			}
			return Kn(t, n, pu, r);
		}function Kn(t, n, r, e) {
			n = r(n);for (var u = 0, o = t ? t.length : 0, i = n !== n, f = null === n, c = Je(n), a = n === T; o > u;) {
				var l = Gu((u + o) / 2),
				    s = r(t[l]),
				    h = s !== T,
				    p = null === s,
				    _ = s === s,
				    v = Je(s);(i ? e || _ : a ? _ && (e || h) : f ? _ && h && (e || !p) : c ? _ && h && !p && (e || !v) : p || v ? 0 : e ? n >= s : n > s) ? u = l + 1 : o = l;
			}return to(o, 4294967294);
		}function Gn(t, n) {
			for (var r = -1, e = t.length, u = 0, o = []; ++r < e;) {
				var i = t[r],
				    f = n ? n(i) : i;if (!r || !Ce(f, c)) {
					var c = f;o[u++] = 0 === i ? 0 : i;
				}
			}return o;
		}function Jn(t) {
			return typeof t == "number" ? t : Je(t) ? V : +t;
		}function Yn(t) {
			if (typeof t == "string") return t;
			if (Je(t)) return mo ? mo.call(t) : "";var n = t + "";return "0" == n && 1 / t == -q ? "-0" : n;
		}function Hn(t, n, r) {
			var e = -1,
			    u = c,
			    o = t.length,
			    i = true,
			    f = [],
			    l = f;if (r) i = false, u = a;else if (o >= 200) {
				if (u = n ? null : Io(t)) return D(u);i = false, u = E, l = new Zt();
			} else l = n ? [] : f;t: for (; ++e < o;) {
				var s = t[e],
				    h = n ? n(s) : s,
				    s = r || 0 !== s ? s : 0;if (i && h === h) {
					for (var p = l.length; p--;) if (l[p] === h) continue t;n && l.push(h), f.push(s);
				} else u(l, h, r) || (l !== f && l.push(h), f.push(s));
			}return f;
		}function Qn(t, n, r, e) {
			for (var u = t.length, o = e ? u : -1; (e ? o-- : ++o < u) && n(t[o], o, t););return r ? Tn(t, e ? 0 : o, e ? o + 1 : u) : Tn(t, e ? o + 1 : 0, e ? u : o);
		}function Xn(t, n) {
			var r = t;return r instanceof Ut && (r = r.value()), h(n, function (t, n) {
				return n.func.apply(n.thisArg, s([t], n.args));
			}, r);
		}function tr(t, n, r) {
			for (var e = -1, u = t.length; ++e < u;) var o = o ? s(fn(o, t[e], n, r), fn(t[e], o, n, r)) : t[e];return o && o.length ? Hn(o, n, r) : [];
		}function nr(t, n, r) {
			for (var e = -1, u = t.length, o = n.length, i = {}; ++e < u;) r(i, t[e], o > e ? n[e] : T);return i;
		}function rr(t) {
			return $e(t) ? t : [];
		}function er(t) {
			return yi(t) ? t : Co(t);
		}function ur(t, n, r) {
			var e = t.length;return r = r === T ? e : r, !n && r >= e ? t : Tn(t, n, r);
		}function or(t, n) {
			if (n) return t.slice();var r = new t.constructor(t.length);return t.copy(r), r;
		}function ir(t) {
			var n = new t.constructor(t.byteLength);return new Fu(n).set(new Fu(t)), n;
		}function fr(t, n) {
			if (t !== n) {
				var r = t !== T,
				    e = null === t,
				    u = t === t,
				    o = Je(t),
				    i = n !== T,
				    f = null === n,
				    c = n === n,
				    a = Je(n);if (!f && !a && !o && t > n || o && i && c && !f && !a || e && i && c || !r && c || !u) return 1;if (!e && !o && !a && n > t || a && r && u && !e && !o || f && r && u || !i && u || !c) return -1;
			}return 0;
		}function cr(t, n, r, e) {
			var u = -1,
			    o = t.length,
			    i = r.length,
			    f = -1,
			    c = n.length,
			    a = Xu(o - i, 0),
			    l = Array(c + a);for (e = !e; ++f < c;) l[f] = n[f];
			for (; ++u < i;) (e || o > u) && (l[r[u]] = t[u]);for (; a--;) l[f++] = t[u++];return l;
		}function ar(t, n, r, e) {
			var u = -1,
			    o = t.length,
			    i = -1,
			    f = r.length,
			    c = -1,
			    a = n.length,
			    l = Xu(o - f, 0),
			    s = Array(l + a);for (e = !e; ++u < l;) s[u] = t[u];for (l = u; ++c < a;) s[l + c] = n[c];for (; ++i < f;) (e || o > u) && (s[l + r[i]] = t[u++]);return s;
		}function lr(t, n) {
			var r = -1,
			    e = t.length;for (n || (n = Array(e)); ++r < e;) n[r] = t[r];return n;
		}function sr(t, n, r, e) {
			r || (r = {});for (var u = -1, o = n.length; ++u < o;) {
				var i = n[u],
				    f = e ? e(r[i], t[i], i, r, t) : t[i];Yt(r, i, f);
			}return r;
		}function hr(t, n) {
			return sr(t, Tr(t), n);
		}function pr(t, n) {
			return function (r, u) {
				var o = yi(r) ? e : Qt,
				    i = n ? n() : {};return o(r, t, Fr(u), i);
			};
		}function _r(t) {
			return Me(function (n, r) {
				var e = -1,
				    u = r.length,
				    o = u > 1 ? r[u - 1] : T,
				    i = u > 2 ? r[2] : T,
				    o = t.length > 3 && typeof o == "function" ? (u--, o) : T;for (i && te(r[0], r[1], i) && (o = 3 > u ? T : o, u = 1), n = Object(n); ++e < u;) (i = r[e]) && t(n, i, e, o);return n;
			});
		}function vr(t, n) {
			return function (r, e) {
				if (null == r) return r;if (!Ue(r)) return t(r, e);for (var u = r.length, o = n ? u : -1, i = Object(r); (n ? o-- : ++o < u) && false !== e(i[o], o, i););return r;
			};
		}function gr(t) {
			return function (n, r, e) {
				var u = -1,
				    o = Object(n);e = e(n);for (var i = e.length; i--;) {
					var f = e[t ? i : ++u];if (false === r(o[f], f, o)) break;
				}return n;
			};
		}function dr(t, n, r) {
			function e() {
				return (this && this !== Kt && this instanceof e ? o : t).apply(u ? r : this, arguments);
			}var u = 1 & n,
			    o = xr(t);return e;
		}function yr(t) {
			return function (n) {
				n = eu(n);var r = Wt.test(n) ? n.match(It) : T,
				    e = r ? r[0] : n.charAt(0);return n = r ? ur(r, 1).join("") : n.slice(1), e[t]() + n;
			};
		}function br(t) {
			return function (n) {
				return h(su(lu(n).replace(Et, "")), t, "");
			};
		}function xr(t) {
			return function () {
				var n = arguments;
				switch (n.length) {case 0:
						return new t();case 1:
						return new t(n[0]);case 2:
						return new t(n[0], n[1]);case 3:
						return new t(n[0], n[1], n[2]);case 4:
						return new t(n[0], n[1], n[2], n[3]);case 5:
						return new t(n[0], n[1], n[2], n[3], n[4]);case 6:
						return new t(n[0], n[1], n[2], n[3], n[4], n[5]);case 7:
						return new t(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);}var r = un(t.prototype),
				    n = t.apply(r, n);return Ze(n) ? n : r;
			};
		}function jr(t, n, e) {
			function u() {
				for (var i = arguments.length, f = Array(i), c = i, a = Dr(u); c--;) f[c] = arguments[c];return c = 3 > i && f[0] !== a && f[i - 1] !== a ? [] : $(f, a), i -= c.length, e > i ? Br(t, n, Ar, u.placeholder, T, f, c, T, T, e - i) : r(this && this !== Kt && this instanceof u ? o : t, this, f);
			}var o = xr(t);return u;
		}function wr(t) {
			return function (n, r, e) {
				var u = Object(n);if (r = Fr(r, 3), !Ue(n)) var o = iu(n);return e = t(o || n, function (t, n) {
					return o && (n = t, t = u[n]), r(t, n, u);
				}, e), e > -1 ? n[o ? o[e] : e] : T;
			};
		}function mr(t) {
			return Me(function (n) {
				n = sn(n, 1);var r = n.length,
				    e = r,
				    u = zt.prototype.thru;for (t && n.reverse(); e--;) {
					var o = n[e];if (typeof o != "function") throw new Au("Expected a function");if (u && !i && "wrapper" == $r(o)) var i = new zt([], true);
				}for (e = i ? e : r; ++e < r;) var o = n[e], u = $r(o), f = "wrapper" == u ? Ro(o) : T, i = f && re(f[0]) && 424 == f[1] && !f[4].length && 1 == f[9] ? i[$r(f[0])].apply(i, f[3]) : 1 == o.length && re(o) ? i[u]() : i.thru(o);return function () {
					var t = arguments,
					    e = t[0];if (i && 1 == t.length && yi(e) && e.length >= 200) return i.plant(e).value();for (var u = 0, t = r ? n[u].apply(this, t) : e; ++u < r;) t = n[u].call(this, t);return t;
				};
			});
		}function Ar(t, n, r, e, u, o, i, f, c, a) {
			function l() {
				for (var d = arguments.length, y = Array(d), b = d; b--;) y[b] = arguments[b];if (_) {
					var x,
					    j = Dr(l),
					    b = y.length;for (x = 0; b--;) y[b] === j && x++;
				}if (e && (y = cr(y, e, u, _)), o && (y = ar(y, o, i, _)), d -= x, _ && a > d) return j = $(y, j), Br(t, n, Ar, l.placeholder, r, y, j, f, c, a - d);if (j = h ? r : this, b = p ? j[t] : t, d = y.length, f) {
					x = y.length;for (var w = to(f.length, x), m = lr(y); w--;) {
						var A = f[w];y[w] = Xr(A, x) ? m[A] : T;
					}
				} else v && d > 1 && y.reverse();return s && d > c && (y.length = c), this && this !== Kt && this instanceof l && (b = g || xr(b)), b.apply(j, y);
			}var s = 128 & n,
			    h = 1 & n,
			    p = 2 & n,
			    _ = 24 & n,
			    v = 512 & n,
			    g = p ? T : xr(t);return l;
		}function Or(t, n) {
			return function (r, e) {
				return jn(r, t, n(e));
			};
		}function kr(t) {
			return function (n, r) {
				var e;
				if (n === T && r === T) return 0;if (n !== T && (e = n), r !== T) {
					if (e === T) return r;typeof n == "string" || typeof r == "string" ? (n = Yn(n), r = Yn(r)) : (n = Jn(n), r = Jn(r)), e = t(n, r);
				}return e;
			};
		}function Er(t) {
			return Me(function (n) {
				return n = 1 == n.length && yi(n[0]) ? l(n[0], O(Fr())) : l(sn(n, 1, Qr), O(Fr())), Me(function (e) {
					var u = this;return t(n, function (t) {
						return r(t, u, e);
					});
				});
			});
		}function Sr(t, n) {
			n = n === T ? " " : Yn(n);var r = n.length;return 2 > r ? r ? Pn(n, t) : n : (r = Pn(n, Ku(t / N(n))), Wt.test(n) ? ur(r.match(It), 0, t).join("") : r.slice(0, t));
		}function Ir(t, n, e, u) {
			function o() {
				for (var n = -1, c = arguments.length, a = -1, l = u.length, s = Array(l + c), h = this && this !== Kt && this instanceof o ? f : t; ++a < l;) s[a] = u[a];for (; c--;) s[a++] = arguments[++n];return r(h, i ? e : this, s);
			}var i = 1 & n,
			    f = xr(t);return o;
		}function Rr(t) {
			return function (n, r, e) {
				e && typeof e != "number" && te(n, r, e) && (r = e = T), n = nu(n), n = n === n ? n : 0, r === T ? (r = n, n = 0) : r = nu(r) || 0, e = e === T ? r > n ? 1 : -1 : nu(e) || 0;var u = -1;r = Xu(Ku((r - n) / (e || 1)), 0);for (var o = Array(r); r--;) o[t ? r : ++u] = n, n += e;return o;
			};
		}function Wr(t) {
			return function (n, r) {
				return typeof n == "string" && typeof r == "string" || (n = nu(n), r = nu(r)), t(n, r);
			};
		}function Br(t, n, r, e, u, o, i, f, c, a) {
			var l = 8 & n,
			    s = l ? i : T;i = l ? T : i;var h = l ? o : T;return o = l ? T : o, n = (n | (l ? 32 : 64)) & ~(l ? 64 : 32), 4 & n || (n &= -4), n = [t, n, u, h, s, o, i, f, c, a], r = r.apply(T, n), re(t) && Mo(r, n), r.placeholder = e, r;
		}function Lr(t) {
			var n = wu[t];return function (t, r) {
				if (t = nu(t), r = to(Xe(r), 292)) {
					var e = (eu(t) + "e").split("e"),
					    e = n(e[0] + "e" + (+e[1] + r)),
					    e = (eu(e) + "e").split("e");return +(e[0] + "e" + (+e[1] - r));
				}return n(t);
			};
		}function Mr(t) {
			return function (n) {
				var r = qr(n);return "[object Map]" == r ? U(n) : "[object Set]" == r ? F(n) : A(n, t(n));
			};
		}function Cr(t, n, r, e, u, o, i, f) {
			var c = 2 & n;if (!c && typeof t != "function") throw new Au("Expected a function");var a = e ? e.length : 0;if (a || (n &= -97, e = u = T), i = i === T ? i : Xu(Xe(i), 0), f = f === T ? f : Xe(f), a -= u ? u.length : 0, 64 & n) {
				var l = e,
				    s = u;e = u = T;
			}var h = c ? T : Ro(t);return o = [t, n, r, e, u, l, s, o, i, f], h && (r = o[1], t = h[1], n = r | t, e = 128 == t && 8 == r || 128 == t && 256 == r && h[8] >= o[7].length || 384 == t && h[8] >= h[7].length && 8 == r, 131 > n || e) && (1 & t && (o[2] = h[2], n |= 1 & r ? 0 : 4), (r = h[3]) && (e = o[3], o[3] = e ? cr(e, r, h[4]) : r, o[4] = e ? $(o[3], "__lodash_placeholder__") : h[4]), (r = h[5]) && (e = o[5], o[5] = e ? ar(e, r, h[6]) : r, o[6] = e ? $(o[5], "__lodash_placeholder__") : h[6]), (r = h[7]) && (o[7] = r), 128 & t && (o[8] = null == o[8] ? h[8] : to(o[8], h[8])), null == o[9] && (o[9] = h[9]), o[0] = h[0], o[1] = n), t = o[0], n = o[1], r = o[2], e = o[3], u = o[4], f = o[9] = null == o[9] ? c ? 0 : t.length : Xu(o[9] - a, 0), !f && 24 & n && (n &= -25), (h ? So : Mo)(n && 1 != n ? 8 == n || 16 == n ? jr(t, n, f) : 32 != n && 33 != n || u.length ? Ar.apply(T, o) : Ir(t, n, r, e) : dr(t, n, r), o);
		}function zr(t, n, r, e, u, o) {
			var i = 2 & u,
			    f = t.length,
			    c = n.length;if (f != c && !(i && c > f)) return false;if (c = o.get(t)) return c == n;
			var c = -1,
			    a = true,
			    l = 1 & u ? new Zt() : T;for (o.set(t, n); ++c < f;) {
				var s = t[c],
				    h = n[c];if (e) var p = i ? e(h, s, c, n, t, o) : e(s, h, c, t, n, o);if (p !== T) {
					if (p) continue;a = false;break;
				}if (l) {
					if (!_(n, function (t, n) {
						return l.has(n) || s !== t && !r(s, t, e, u, o) ? void 0 : l.add(n);
					})) {
						a = false;break;
					}
				} else if (s !== h && !r(s, h, e, u, o)) {
					a = false;break;
				}
			}return o["delete"](t), a;
		}function Ur(t, n, r, e, u, o, i) {
			switch (r) {case "[object DataView]":
					if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset) break;t = t.buffer, n = n.buffer;case "[object ArrayBuffer]":
					if (t.byteLength != n.byteLength || !e(new Fu(t), new Fu(n))) break;
					return true;case "[object Boolean]":case "[object Date]":
					return +t == +n;case "[object Error]":
					return t.name == n.name && t.message == n.message;case "[object Number]":
					return t != +t ? n != +n : t == +n;case "[object RegExp]":case "[object String]":
					return t == n + "";case "[object Map]":
					var f = U;case "[object Set]":
					if (f || (f = D), t.size != n.size && !(2 & o)) break;return (r = i.get(t)) ? r == n : (o |= 1, i.set(t, n), zr(f(t), f(n), e, u, o, i));case "[object Symbol]":
					if (wo) return wo.call(t) == wo.call(n);}return false;
		}function $r(t) {
			for (var n = t.name + "", r = _o[n], e = Wu.call(_o, n) ? r.length : 0; e--;) {
				var u = r[e],
				    o = u.func;if (null == o || o == t) return u.name;
			}return n;
		}function Dr(t) {
			return (Wu.call(Ot, "placeholder") ? Ot : t).placeholder;
		}function Fr() {
			var t = Ot.iteratee || _u,
			    t = t === _u ? kn : t;return arguments.length ? t(arguments[0], arguments[1]) : t;
		}function Nr(t, n) {
			var r = t.__data__,
			    e = typeof n;return ("string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== n : null === n) ? r[typeof n == "string" ? "string" : "hash"] : r.map;
		}function Pr(t) {
			for (var n = iu(t), r = n.length; r--;) {
				var e = n[r],
				    u = t[e];n[r] = [e, u, u === u && !Ze(u)];
			}return n;
		}function Zr(t, n) {
			var r = null == t ? T : t[n];return On(r) ? r : T;
		}function Tr(t) {
			return Pu(Object(t));
		}function qr(t) {
			return Mu.call(t);
		}function Vr(t, n, r) {
			n = ne(n, t) ? [n] : er(n);for (var e, u = -1, o = n.length; ++u < o;) {
				var i = fe(n[u]);if (!(e = null != t && r(t, i))) break;t = t[i];
			}return e ? e : (o = t ? t.length : 0, !!o && Pe(o) && Xr(i, o) && (yi(t) || Ge(t) || ze(t)));
		}function Kr(t) {
			var n = t.length,
			    r = t.constructor(n);return n && "string" == typeof t[0] && Wu.call(t, "index") && (r.index = t.index, r.input = t.input), r;
		}function Gr(t) {
			return typeof t.constructor != "function" || ee(t) ? {} : un(Ju(Object(t)));
		}function Jr(r, e, u, o) {
			var i = r.constructor;switch (e) {case "[object ArrayBuffer]":
					return ir(r);case "[object Boolean]":case "[object Date]":
					return new i(+r);case "[object DataView]":
					return e = o ? ir(r.buffer) : r.buffer, new r.constructor(e, r.byteOffset, r.byteLength);case "[object Float32Array]":case "[object Float64Array]":case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":
					return e = o ? ir(r.buffer) : r.buffer, new r.constructor(e, r.byteOffset, r.length);case "[object Map]":
					return e = o ? u(U(r), true) : U(r), h(e, t, new r.constructor());case "[object Number]":case "[object String]":
					return new i(r);case "[object RegExp]":
					return e = new r.constructor(r.source, _t.exec(r)), e.lastIndex = r.lastIndex, e;case "[object Set]":
					return e = o ? u(D(r), true) : D(r), h(e, n, new r.constructor());case "[object Symbol]":
					return wo ? Object(wo.call(r)) : {};}
		}function Yr(t) {
			var n = t ? t.length : T;return Pe(n) && (yi(t) || Ge(t) || ze(t)) ? m(n, String) : null;
		}function Hr(t) {
			return yi(t) || ze(t);
		}function Qr(t) {
			return yi(t) && !(2 == t.length && !Fe(t[0]));
		}function Xr(t, n) {
			return n = null == n ? 9007199254740991 : n, !!n && (typeof t == "number" || xt.test(t)) && t > -1 && 0 == t % 1 && n > t;
		}function te(t, n, r) {
			if (!Ze(r)) return false;var e = typeof n;return ("number" == e ? Ue(r) && Xr(n, r.length) : "string" == e && n in r) ? Ce(r[n], t) : false;
		}function ne(t, n) {
			if (yi(t)) return false;var r = typeof t;return "number" == r || "symbol" == r || "boolean" == r || null == t || Je(t) ? true : ut.test(t) || !et.test(t) || null != n && t in Object(n);
		}function re(t) {
			var n = $r(t),
			    r = Ot[n];return typeof r == "function" && n in Ut.prototype ? t === r ? true : (n = Ro(r), !!n && t === n[0]) : false;
		}function ee(t) {
			var n = t && t.constructor;return t === (typeof n == "function" && n.prototype || ku);
		}function ue(t, n) {
			return function (r) {
				return null == r ? false : r[t] === n && (n !== T || t in Object(r));
			};
		}function oe(t, n, r, e, u, o) {
			return Ze(t) && Ze(n) && Bn(t, n, T, oe, o.set(n, t)), t;
		}function ie(t, n) {
			return 1 == n.length ? t : vn(t, Tn(n, 0, -1));
		}function fe(t) {
			if (typeof t == "string" || Je(t)) return t;var n = t + "";return "0" == n && 1 / t == -q ? "-0" : n;
		}function ce(t) {
			if (null != t) {
				try {
					return Ru.call(t);
				} catch (n) {}return t + "";
			}return "";
		}function ae(t) {
			if (t instanceof Ut) return t.clone();var n = new zt(t.__wrapped__, t.__chain__);return n.__actions__ = lr(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
		}function le(t, n, r) {
			var e = t ? t.length : 0;return e ? (n = r || n === T ? 1 : Xe(n), Tn(t, 0 > n ? 0 : n, e)) : [];
		}function se(t, n, r) {
			var e = t ? t.length : 0;return e ? (n = r || n === T ? 1 : Xe(n), n = e - n, Tn(t, 0, 0 > n ? 0 : n)) : [];
		}function he(t, n, r) {
			var e = t ? t.length : 0;return e ? (r = null == r ? 0 : Xe(r), 0 > r && (r = Xu(e + r, 0)), g(t, Fr(n, 3), r)) : -1;
		}function pe(t, n, r) {
			var e = t ? t.length : 0;if (!e) return -1;var u = e - 1;return r !== T && (u = Xe(r), u = 0 > r ? Xu(e + u, 0) : to(u, e - 1)), g(t, Fr(n, 3), u, true);
		}function _e(t) {
			return t && t.length ? t[0] : T;
		}function ve(t) {
			var n = t ? t.length : 0;return n ? t[n - 1] : T;
		}function ge(t, n) {
			return t && t.length && n && n.length ? Dn(t, n) : t;
		}function de(t) {
			return t ? uo.call(t) : t;
		}function ye(t) {
			if (!t || !t.length) return [];var n = 0;return t = f(t, function (t) {
				return $e(t) ? (n = Xu(t.length, n), true) : void 0;
			}), m(n, function (n) {
				return l(t, Un(n));
			});
		}function be(t, n) {
			if (!t || !t.length) return [];var e = ye(t);return null == n ? e : l(e, function (t) {
				return r(n, T, t);
			});
		}function xe(t) {
			return t = Ot(t), t.__chain__ = true, t;
		}function je(t, n) {
			return n(t);
		}function we() {
			return this;
		}function me(t, n) {
			return (yi(t) ? u : Ao)(t, Fr(n, 3));
		}function Ae(t, n) {
			return (yi(t) ? o : Oo)(t, Fr(n, 3));
		}function Oe(t, n) {
			return (yi(t) ? l : In)(t, Fr(n, 3));
		}function ke(t, n, r) {
			var e = -1,
			    u = He(t),
			    o = u.length,
			    i = o - 1;for (n = (r ? te(t, n, r) : n === T) ? 1 : nn(Xe(n), 0, o); ++e < n;) t = Nn(e, i), r = u[t], u[t] = u[e], u[e] = r;return u.length = n, u;
		}function Ee() {
			return xu.now();
		}function Se(t, n, r) {
			return n = r ? T : n, n = t && null == n ? t.length : n, Cr(t, 128, T, T, T, T, n);
		}function Ie(t, n) {
			var r;if (typeof n != "function") throw new Au("Expected a function");return t = Xe(t), function () {
				return 0 < --t && (r = n.apply(this, arguments)), 1 >= t && (n = T), r;
			};
		}function Re(t, n, r) {
			return n = r ? T : n, t = Cr(t, 8, T, T, T, T, T, n), t.placeholder = Re.placeholder, t;
		}function We(t, n, r) {
			return n = r ? T : n, t = Cr(t, 16, T, T, T, T, T, n), t.placeholder = We.placeholder, t;
		}function Be(t, n, r) {
			function e(n) {
				var r = c,
				    e = a;return c = a = T, _ = n, s = t.apply(e, r);
			}function u(t) {
				var r = t - p;return t -= _, p === T || r >= n || 0 > r || g && t >= l;
			}function o() {
				var t = Ee();if (u(t)) return i(t);var r;r = t - _, t = n - (t - p), r = g ? to(t, l - r) : t, h = At(o, r);
			}function i(t) {
				return h = T, d && c ? e(t) : (c = a = T, s);
			}function f() {
				var t = Ee(),
				    r = u(t);if (c = arguments, a = this, p = t, r) {
					if (h === T) return _ = t = p, h = At(o, n), v ? e(t) : s;if (g) return h = At(o, n), e(p);
				}return h === T && (h = At(o, n)), s;
			}var c,
			    a,
			    l,
			    s,
			    h,
			    p,
			    _ = 0,
			    v = false,
			    g = false,
			    d = true;if (typeof t != "function") throw new Au("Expected a function");return n = nu(n) || 0, Ze(r) && (v = !!r.leading, l = (g = "maxWait" in r) ? Xu(nu(r.maxWait) || 0, n) : l, d = "trailing" in r ? !!r.trailing : d), f.cancel = function () {
				_ = 0, c = p = a = h = T;
			}, f.flush = function () {
				return h === T ? s : i(Ee());
			}, f;
		}function Le(t, n) {
			function r() {
				var e = arguments,
				    u = n ? n.apply(this, e) : e[0],
				    o = r.cache;return o.has(u) ? o.get(u) : (e = t.apply(this, e), r.cache = o.set(u, e), e);
			}if (typeof t != "function" || n && typeof n != "function") throw new Au("Expected a function");return r.cache = new (Le.Cache || Pt)(), r;
		}function Me(t, n) {
			if (typeof t != "function") throw new Au("Expected a function");return n = Xu(n === T ? t.length - 1 : Xe(n), 0), function () {
				for (var e = arguments, u = -1, o = Xu(e.length - n, 0), i = Array(o); ++u < o;) i[u] = e[n + u];switch (n) {case 0:
						return t.call(this, i);case 1:
						return t.call(this, e[0], i);case 2:
						return t.call(this, e[0], e[1], i);}for (o = Array(n + 1), u = -1; ++u < n;) o[u] = e[u];return o[n] = i, r(t, this, o);
			};
		}function Ce(t, n) {
			return t === n || t !== t && n !== n;
		}function ze(t) {
			return $e(t) && Wu.call(t, "callee") && (!qu.call(t, "callee") || "[object Arguments]" == Mu.call(t));
		}function Ue(t) {
			return null != t && Pe(Wo(t)) && !Fe(t);
		}function $e(t) {
			return Te(t) && Ue(t);
		}function De(t) {
			return Te(t) ? "[object Error]" == Mu.call(t) || typeof t.message == "string" && typeof t.name == "string" : false;
		}function Fe(t) {
			return t = Ze(t) ? Mu.call(t) : "", "[object Function]" == t || "[object GeneratorFunction]" == t;
		}function Ne(t) {
			return typeof t == "number" && t == Xe(t);
		}function Pe(t) {
			return typeof t == "number" && t > -1 && 0 == t % 1 && 9007199254740991 >= t;
		}function Ze(t) {
			var n = typeof t;return !!t && ("object" == n || "function" == n);
		}function Te(t) {
			return !!t && typeof t == "object";
		}function qe(t) {
			return typeof t == "number" || Te(t) && "[object Number]" == Mu.call(t);
		}function Ve(t) {
			return !Te(t) || "[object Object]" != Mu.call(t) || C(t) ? false : (t = Ju(Object(t)), null === t ? true : (t = Wu.call(t, "constructor") && t.constructor, typeof t == "function" && t instanceof t && Ru.call(t) == Lu));
		}function Ke(t) {
			return Ze(t) && "[object RegExp]" == Mu.call(t);
		}function Ge(t) {
			return typeof t == "string" || !yi(t) && Te(t) && "[object String]" == Mu.call(t);
		}function Je(t) {
			return typeof t == "symbol" || Te(t) && "[object Symbol]" == Mu.call(t);
		}function Ye(t) {
			return Te(t) && Pe(t.length) && !!Mt[Mu.call(t)];
		}function He(t) {
			if (!t) return [];
			if (Ue(t)) return Ge(t) ? t.match(It) : lr(t);if (Zu && t[Zu]) return z(t[Zu]());var n = qr(t);return ("[object Map]" == n ? U : "[object Set]" == n ? D : cu)(t);
		}function Qe(t) {
			return t ? (t = nu(t), t === q || t === -q ? 1.7976931348623157e308 * (0 > t ? -1 : 1) : t === t ? t : 0) : 0 === t ? t : 0;
		}function Xe(t) {
			t = Qe(t);var n = t % 1;return t === t ? n ? t - n : t : 0;
		}function tu(t) {
			return t ? nn(Xe(t), 0, 4294967295) : 0;
		}function nu(t) {
			if (typeof t == "number") return t;if (Je(t)) return V;if (Ze(t) && (t = Fe(t.valueOf) ? t.valueOf() : t, t = Ze(t) ? t + "" : t), typeof t != "string") return 0 === t ? t : +t;
			t = t.replace(ct, "");var n = dt.test(t);return n || bt.test(t) ? Nt(t.slice(2), n ? 2 : 8) : gt.test(t) ? V : +t;
		}function ru(t) {
			return sr(t, fu(t));
		}function eu(t) {
			return null == t ? "" : Yn(t);
		}function uu(t, n, r) {
			return t = null == t ? T : vn(t, n), t === T ? r : t;
		}function ou(t, n) {
			return null != t && Vr(t, n, bn);
		}function iu(t) {
			var n = ee(t);if (!n && !Ue(t)) return Qu(Object(t));var r,
			    e = Yr(t),
			    u = !!e,
			    e = e || [],
			    o = e.length;for (r in t) !yn(t, r) || u && ("length" == r || Xr(r, o)) || n && "constructor" == r || e.push(r);return e;
		}function fu(t) {
			for (var n = -1, r = ee(t), e = En(t), u = e.length, o = Yr(t), i = !!o, o = o || [], f = o.length; ++n < u;) {
				var c = e[n];i && ("length" == c || Xr(c, f)) || "constructor" == c && (r || !Wu.call(t, c)) || o.push(c);
			}return o;
		}function cu(t) {
			return t ? k(t, iu(t)) : [];
		}function au(t) {
			return qi(eu(t).toLowerCase());
		}function lu(t) {
			return (t = eu(t)) && t.replace(jt, W).replace(St, "");
		}function su(t, n, r) {
			return t = eu(t), n = r ? T : n, n === T && (n = Bt.test(t) ? Rt : st), t.match(n) || [];
		}function hu(t) {
			return function () {
				return t;
			};
		}function pu(t) {
			return t;
		}function _u(t) {
			return kn(typeof t == "function" ? t : rn(t, true));
		}function vu(t, n, r) {
			var e = iu(n),
			    o = _n(n, e);null != r || Ze(n) && (o.length || !e.length) || (r = n, n = t, t = this, o = _n(n, iu(n)));var i = !(Ze(r) && "chain" in r && !r.chain),
			    f = Fe(t);return u(o, function (r) {
				var e = n[r];t[r] = e, f && (t.prototype[r] = function () {
					var n = this.__chain__;if (i || n) {
						var r = t(this.__wrapped__);return (r.__actions__ = lr(this.__actions__)).push({ func: e, args: arguments, thisArg: t }), r.__chain__ = n, r;
					}return e.apply(t, s([this.value()], arguments));
				});
			}), t;
		}function gu() {}function du(t) {
			return ne(t) ? Un(fe(t)) : $n(t);
		}function yu() {
			return [];
		}function bu() {
			return false;
		}R = R ? Gt.defaults({}, R, Gt.pick(Kt, Lt)) : Kt;var xu = R.Date,
		    ju = R.Error,
		    wu = R.Math,
		    mu = R.RegExp,
		    Au = R.TypeError,
		    Ou = R.Array.prototype,
		    ku = R.Object.prototype,
		    Eu = R.String.prototype,
		    Su = R["__core-js_shared__"],
		    Iu = function () {
			var t = /[^.]+$/.exec(Su && Su.keys && Su.keys.IE_PROTO || "");return t ? "Symbol(src)_1." + t : "";
		}(),
		    Ru = R.Function.prototype.toString,
		    Wu = ku.hasOwnProperty,
		    Bu = 0,
		    Lu = Ru.call(Object),
		    Mu = ku.toString,
		    Cu = Kt._,
		    zu = mu("^" + Ru.call(Wu).replace(it, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
		    Uu = Tt ? R.Buffer : T,
		    $u = R.Reflect,
		    Du = R.Symbol,
		    Fu = R.Uint8Array,
		    Nu = $u ? $u.f : T,
		    Pu = Object.getOwnPropertySymbols,
		    Zu = typeof (Zu = Du && Du.iterator) == "symbol" ? Zu : T,
		    Tu = Object.create,
		    qu = ku.propertyIsEnumerable,
		    Vu = Ou.splice,
		    Ku = wu.ceil,
		    Gu = wu.floor,
		    Ju = Object.getPrototypeOf,
		    Yu = R.isFinite,
		    Hu = Ou.join,
		    Qu = Object.keys,
		    Xu = wu.max,
		    to = wu.min,
		    no = R.parseInt,
		    ro = wu.random,
		    eo = Eu.replace,
		    uo = Ou.reverse,
		    oo = Eu.split,
		    io = Zr(R, "DataView"),
		    fo = Zr(R, "Map"),
		    co = Zr(R, "Promise"),
		    ao = Zr(R, "Set"),
		    lo = Zr(R, "WeakMap"),
		    so = Zr(Object, "create"),
		    ho = lo && new lo(),
		    po = !qu.call({
			valueOf: 1 }, "valueOf"),
		    _o = {},
		    vo = ce(io),
		    go = ce(fo),
		    yo = ce(co),
		    bo = ce(ao),
		    xo = ce(lo),
		    jo = Du ? Du.prototype : T,
		    wo = jo ? jo.valueOf : T,
		    mo = jo ? jo.toString : T;Ot.templateSettings = { escape: tt, evaluate: nt, interpolate: rt, variable: "", imports: { _: Ot } }, Ot.prototype = kt.prototype, Ot.prototype.constructor = Ot, zt.prototype = un(kt.prototype), zt.prototype.constructor = zt, Ut.prototype = un(kt.prototype), Ut.prototype.constructor = Ut, $t.prototype.clear = function () {
			this.__data__ = so ? so(null) : {};
		}, $t.prototype["delete"] = function (t) {
			return this.has(t) && delete this.__data__[t];
		}, $t.prototype.get = function (t) {
			var n = this.__data__;return so ? (t = n[t], "__lodash_hash_undefined__" === t ? T : t) : Wu.call(n, t) ? n[t] : T;
		}, $t.prototype.has = function (t) {
			var n = this.__data__;return so ? n[t] !== T : Wu.call(n, t);
		}, $t.prototype.set = function (t, n) {
			return this.__data__[t] = so && n === T ? "__lodash_hash_undefined__" : n, this;
		}, Dt.prototype.clear = function () {
			this.__data__ = [];
		}, Dt.prototype["delete"] = function (t) {
			var n = this.__data__;return t = Ht(n, t), 0 > t ? false : (t == n.length - 1 ? n.pop() : Vu.call(n, t, 1), true);
		}, Dt.prototype.get = function (t) {
			var n = this.__data__;return t = Ht(n, t), 0 > t ? T : n[t][1];
		}, Dt.prototype.has = function (t) {
			return -1 < Ht(this.__data__, t);
		}, Dt.prototype.set = function (t, n) {
			var r = this.__data__,
			    e = Ht(r, t);return 0 > e ? r.push([t, n]) : r[e][1] = n, this;
		}, Pt.prototype.clear = function () {
			this.__data__ = { hash: new $t(), map: new (fo || Dt)(), string: new $t() };
		}, Pt.prototype["delete"] = function (t) {
			return Nr(this, t)["delete"](t);
		}, Pt.prototype.get = function (t) {
			return Nr(this, t).get(t);
		}, Pt.prototype.has = function (t) {
			return Nr(this, t).has(t);
		}, Pt.prototype.set = function (t, n) {
			return Nr(this, t).set(t, n), this;
		}, Zt.prototype.add = Zt.prototype.push = function (t) {
			return this.__data__.set(t, "__lodash_hash_undefined__"), this;
		}, Zt.prototype.has = function (t) {
			return this.__data__.has(t);
		}, qt.prototype.clear = function () {
			this.__data__ = new Dt();
		}, qt.prototype["delete"] = function (t) {
			return this.__data__["delete"](t);
		}, qt.prototype.get = function (t) {
			return this.__data__.get(t);
		}, qt.prototype.has = function (t) {
			return this.__data__.has(t);
		}, qt.prototype.set = function (t, n) {
			var r = this.__data__;return r instanceof Dt && 200 == r.__data__.length && (r = this.__data__ = new Pt(r.__data__)), r.set(t, n), this;
		};var Ao = vr(hn),
		    Oo = vr(pn, true),
		    ko = gr(),
		    Eo = gr(true);Nu && !qu.call({ valueOf: 1 }, "valueOf") && (En = function (t) {
			return z(Nu(t));
		});var So = ho ? function (t, n) {
			return ho.set(t, n), t;
		} : pu,
		    Io = ao && 1 / D(new ao([, -0]))[1] == q ? function (t) {
			return new ao(t);
		} : gu,
		    Ro = ho ? function (t) {
			return ho.get(t);
		} : gu,
		    Wo = Un("length");Pu || (Tr = yu);var Bo = Pu ? function (t) {
			for (var n = []; t;) s(n, Tr(t)), t = Ju(Object(t));return n;
		} : Tr;(io && "[object DataView]" != qr(new io(new ArrayBuffer(1))) || fo && "[object Map]" != qr(new fo()) || co && "[object Promise]" != qr(co.resolve()) || ao && "[object Set]" != qr(new ao()) || lo && "[object WeakMap]" != qr(new lo())) && (qr = function (t) {
			var n = Mu.call(t);if (t = (t = "[object Object]" == n ? t.constructor : T) ? ce(t) : T) switch (t) {case vo:
					return "[object DataView]";case go:
					return "[object Map]";case yo:
					return "[object Promise]";case bo:
					return "[object Set]";case xo:
					return "[object WeakMap]";}return n;
		});var Lo = Su ? Fe : bu,
		    Mo = function () {
			var t = 0,
			    n = 0;return function (r, e) {
				var u = Ee(),
				    o = 16 - (u - n);if (n = u, o > 0) {
					if (150 <= ++t) return r;
				} else t = 0;return So(r, e);
			};
		}(),
		    Co = Le(function (t) {
			var n = [];return eu(t).replace(ot, function (t, r, e, u) {
				n.push(e ? u.replace(ht, "$1") : r || t);
			}), n;
		}),
		    zo = Me(function (t, n) {
			return $e(t) ? fn(t, sn(n, 1, $e, true)) : [];
		}),
		    Uo = Me(function (t, n) {
			var r = ve(n);return $e(r) && (r = T), $e(t) ? fn(t, sn(n, 1, $e, true), Fr(r)) : [];
		}),
		    $o = Me(function (t, n) {
			var r = ve(n);return $e(r) && (r = T), $e(t) ? fn(t, sn(n, 1, $e, true), T, r) : [];
		}),
		    Do = Me(function (t) {
			var n = l(t, rr);return n.length && n[0] === t[0] ? xn(n) : [];
		}),
		    Fo = Me(function (t) {
			var n = ve(t),
			    r = l(t, rr);return n === ve(r) ? n = T : r.pop(), r.length && r[0] === t[0] ? xn(r, Fr(n)) : [];
		}),
		    No = Me(function (t) {
			var n = ve(t),
			    r = l(t, rr);return n === ve(r) ? n = T : r.pop(), r.length && r[0] === t[0] ? xn(r, T, n) : [];
		}),
		    Po = Me(ge),
		    Zo = Me(function (t, n) {
			n = sn(n, 1);var r = t ? t.length : 0,
			    e = tn(t, n);return Fn(t, l(n, function (t) {
				return Xr(t, r) ? +t : t;
			}).sort(fr)), e;
		}),
		    To = Me(function (t) {
			return Hn(sn(t, 1, $e, true));
		}),
		    qo = Me(function (t) {
			var n = ve(t);return $e(n) && (n = T), Hn(sn(t, 1, $e, true), Fr(n));
		}),
		    Vo = Me(function (t) {
			var n = ve(t);return $e(n) && (n = T), Hn(sn(t, 1, $e, true), T, n);
		}),
		    Ko = Me(function (t, n) {
			return $e(t) ? fn(t, n) : [];
		}),
		    Go = Me(function (t) {
			return tr(f(t, $e));
		}),
		    Jo = Me(function (t) {
			var n = ve(t);return $e(n) && (n = T), tr(f(t, $e), Fr(n));
		}),
		    Yo = Me(function (t) {
			var n = ve(t);return $e(n) && (n = T), tr(f(t, $e), T, n);
		}),
		    Ho = Me(ye),
		    Qo = Me(function (t) {
			var n = t.length,
			    n = n > 1 ? t[n - 1] : T,
			    n = typeof n == "function" ? (t.pop(), n) : T;return be(t, n);
		}),
		    Xo = Me(function (t) {
			function n(n) {
				return tn(n, t);
			}t = sn(t, 1);var r = t.length,
			    e = r ? t[0] : 0,
			    u = this.__wrapped__;return !(r > 1 || this.__actions__.length) && u instanceof Ut && Xr(e) ? (u = u.slice(e, +e + (r ? 1 : 0)), u.__actions__.push({ func: je, args: [n], thisArg: T }), new zt(u, this.__chain__).thru(function (t) {
				return r && !t.length && t.push(T), t;
			})) : this.thru(n);
		}),
		    ti = pr(function (t, n, r) {
			Wu.call(t, r) ? ++t[r] : t[r] = 1;
		}),
		    ni = wr(he),
		    ri = wr(pe),
		    ei = pr(function (t, n, r) {
			Wu.call(t, r) ? t[r].push(n) : t[r] = [n];
		}),
		    ui = Me(function (t, n, e) {
			var u = -1,
			    o = typeof n == "function",
			    i = ne(n),
			    f = Ue(t) ? Array(t.length) : [];return Ao(t, function (t) {
				var c = o ? n : i && null != t ? t[n] : T;f[++u] = c ? r(c, t, e) : wn(t, n, e);
			}), f;
		}),
		    oi = pr(function (t, n, r) {
			t[r] = n;
		}),
		    ii = pr(function (t, n, r) {
			t[r ? 0 : 1].push(n);
		}, function () {
			return [[], []];
		}),
		    fi = Me(function (t, n) {
			if (null == t) return [];var r = n.length;return r > 1 && te(t, n[0], n[1]) ? n = [] : r > 2 && te(n[0], n[1], n[2]) && (n = [n[0]]), n = 1 == n.length && yi(n[0]) ? n[0] : sn(n, 1, Qr), Mn(t, n, []);
		}),
		    ci = Me(function (t, n, r) {
			var e = 1;if (r.length) var u = $(r, Dr(ci)),
			    e = 32 | e;return Cr(t, e, n, r, u);
		}),
		    ai = Me(function (t, n, r) {
			var e = 3;if (r.length) var u = $(r, Dr(ai)),
			    e = 32 | e;return Cr(n, e, t, r, u);
		}),
		    li = Me(function (t, n) {
			return on(t, 1, n);
		}),
		    si = Me(function (t, n, r) {
			return on(t, nu(n) || 0, r);
		});Le.Cache = Pt;var hi = Me(function (t, n) {
			n = 1 == n.length && yi(n[0]) ? l(n[0], O(Fr())) : l(sn(n, 1, Qr), O(Fr()));var e = n.length;return Me(function (u) {
				for (var o = -1, i = to(u.length, e); ++o < i;) u[o] = n[o].call(this, u[o]);
				return r(t, this, u);
			});
		}),
		    pi = Me(function (t, n) {
			var r = $(n, Dr(pi));return Cr(t, 32, T, n, r);
		}),
		    _i = Me(function (t, n) {
			var r = $(n, Dr(_i));return Cr(t, 64, T, n, r);
		}),
		    vi = Me(function (t, n) {
			return Cr(t, 256, T, T, T, sn(n, 1));
		}),
		    gi = Wr(dn),
		    di = Wr(function (t, n) {
			return t >= n;
		}),
		    yi = Array.isArray,
		    bi = Uu ? function (t) {
			return t instanceof Uu;
		} : bu,
		    xi = Wr(Sn),
		    ji = Wr(function (t, n) {
			return n >= t;
		}),
		    wi = _r(function (t, n) {
			if (po || ee(n) || Ue(n)) sr(n, iu(n), t);else for (var r in n) Wu.call(n, r) && Yt(t, r, n[r]);
		}),
		    mi = _r(function (t, n) {
			if (po || ee(n) || Ue(n)) sr(n, fu(n), t);else for (var r in n) Yt(t, r, n[r]);
		}),
		    Ai = _r(function (t, n, r, e) {
			sr(n, fu(n), t, e);
		}),
		    Oi = _r(function (t, n, r, e) {
			sr(n, iu(n), t, e);
		}),
		    ki = Me(function (t, n) {
			return tn(t, sn(n, 1));
		}),
		    Ei = Me(function (t) {
			return t.push(T, Vt), r(Ai, T, t);
		}),
		    Si = Me(function (t) {
			return t.push(T, oe), r(Li, T, t);
		}),
		    Ii = Or(function (t, n, r) {
			t[n] = r;
		}, hu(pu)),
		    Ri = Or(function (t, n, r) {
			Wu.call(t, n) ? t[n].push(r) : t[n] = [r];
		}, Fr),
		    Wi = Me(wn),
		    Bi = _r(function (t, n, r) {
			Bn(t, n, r);
		}),
		    Li = _r(function (t, n, r, e) {
			Bn(t, n, r, e);
		}),
		    Mi = Me(function (t, n) {
			return null == t ? {} : (n = l(sn(n, 1), fe), Cn(t, fn(gn(t, fu, Bo), n)));
		}),
		    Ci = Me(function (t, n) {
			return null == t ? {} : Cn(t, l(sn(n, 1), fe));
		}),
		    zi = Mr(iu),
		    Ui = Mr(fu),
		    $i = br(function (t, n, r) {
			return n = n.toLowerCase(), t + (r ? au(n) : n);
		}),
		    Di = br(function (t, n, r) {
			return t + (r ? "-" : "") + n.toLowerCase();
		}),
		    Fi = br(function (t, n, r) {
			return t + (r ? " " : "") + n.toLowerCase();
		}),
		    Ni = yr("toLowerCase"),
		    Pi = br(function (t, n, r) {
			return t + (r ? "_" : "") + n.toLowerCase();
		}),
		    Zi = br(function (t, n, r) {
			return t + (r ? " " : "") + qi(n);
		}),
		    Ti = br(function (t, n, r) {
			return t + (r ? " " : "") + n.toUpperCase();
		}),
		    qi = yr("toUpperCase"),
		    Vi = Me(function (t, n) {
			try {
				return r(t, T, n);
			} catch (e) {
				return De(e) ? e : new ju(e);
			}
		}),
		    Ki = Me(function (t, n) {
			return u(sn(n, 1), function (n) {
				n = fe(n), t[n] = ci(t[n], t);
			}), t;
		}),
		    Gi = mr(),
		    Ji = mr(true),
		    Yi = Me(function (t, n) {
			return function (r) {
				return wn(r, t, n);
			};
		}),
		    Hi = Me(function (t, n) {
			return function (r) {
				return wn(t, r, n);
			};
		}),
		    Qi = Er(l),
		    Xi = Er(i),
		    tf = Er(_),
		    nf = Rr(),
		    rf = Rr(true),
		    ef = kr(function (t, n) {
			return t + n;
		}),
		    uf = Lr("ceil"),
		    of = kr(function (t, n) {
			return t / n;
		}),
		    ff = Lr("floor"),
		    cf = kr(function (t, n) {
			return t * n;
		}),
		    af = Lr("round"),
		    lf = kr(function (t, n) {
			return t - n;
		});return Ot.after = function (t, n) {
			if (typeof n != "function") throw new Au("Expected a function");
			return t = Xe(t), function () {
				return 1 > --t ? n.apply(this, arguments) : void 0;
			};
		}, Ot.ary = Se, Ot.assign = wi, Ot.assignIn = mi, Ot.assignInWith = Ai, Ot.assignWith = Oi, Ot.at = ki, Ot.before = Ie, Ot.bind = ci, Ot.bindAll = Ki, Ot.bindKey = ai, Ot.castArray = function () {
			if (!arguments.length) return [];var t = arguments[0];return yi(t) ? t : [t];
		}, Ot.chain = xe, Ot.chunk = function (t, n, r) {
			if (n = (r ? te(t, n, r) : n === T) ? 1 : Xu(Xe(n), 0), r = t ? t.length : 0, !r || 1 > n) return [];for (var e = 0, u = 0, o = Array(Ku(r / n)); r > e;) o[u++] = Tn(t, e, e += n);return o;
		}, Ot.compact = function (t) {
			for (var n = -1, r = t ? t.length : 0, e = 0, u = []; ++n < r;) {
				var o = t[n];o && (u[e++] = o);
			}return u;
		}, Ot.concat = function () {
			for (var t = arguments.length, n = Array(t ? t - 1 : 0), r = arguments[0], e = t; e--;) n[e - 1] = arguments[e];return t ? s(yi(r) ? lr(r) : [r], sn(n, 1)) : [];
		}, Ot.cond = function (t) {
			var n = t ? t.length : 0,
			    e = Fr();return t = n ? l(t, function (t) {
				if ("function" != typeof t[1]) throw new Au("Expected a function");return [e(t[0]), t[1]];
			}) : [], Me(function (e) {
				for (var u = -1; ++u < n;) {
					var o = t[u];if (r(o[0], this, e)) return r(o[1], this, e);
				}
			});
		}, Ot.conforms = function (t) {
			return en(rn(t, true));
		}, Ot.constant = hu, Ot.countBy = ti, Ot.create = function (t, n) {
			var r = un(t);return n ? Xt(r, n) : r;
		}, Ot.curry = Re, Ot.curryRight = We, Ot.debounce = Be, Ot.defaults = Ei, Ot.defaultsDeep = Si, Ot.defer = li, Ot.delay = si, Ot.difference = zo, Ot.differenceBy = Uo, Ot.differenceWith = $o, Ot.drop = le, Ot.dropRight = se, Ot.dropRightWhile = function (t, n) {
			return t && t.length ? Qn(t, Fr(n, 3), true, true) : [];
		}, Ot.dropWhile = function (t, n) {
			return t && t.length ? Qn(t, Fr(n, 3), true) : [];
		}, Ot.fill = function (t, n, r, e) {
			var u = t ? t.length : 0;if (!u) return [];for (r && typeof r != "number" && te(t, n, r) && (r = 0, e = u), u = t.length, r = Xe(r), 0 > r && (r = -r > u ? 0 : u + r), e = e === T || e > u ? u : Xe(e), 0 > e && (e += u), e = r > e ? 0 : tu(e); e > r;) t[r++] = n;return t;
		}, Ot.filter = function (t, n) {
			return (yi(t) ? f : ln)(t, Fr(n, 3));
		}, Ot.flatMap = function (t, n) {
			return sn(Oe(t, n), 1);
		}, Ot.flatMapDeep = function (t, n) {
			return sn(Oe(t, n), q);
		}, Ot.flatMapDepth = function (t, n, r) {
			return r = r === T ? 1 : Xe(r), sn(Oe(t, n), r);
		}, Ot.flatten = function (t) {
			return t && t.length ? sn(t, 1) : [];
		}, Ot.flattenDeep = function (t) {
			return t && t.length ? sn(t, q) : [];
		}, Ot.flattenDepth = function (t, n) {
			return t && t.length ? (n = n === T ? 1 : Xe(n), sn(t, n)) : [];
		}, Ot.flip = function (t) {
			return Cr(t, 512);
		}, Ot.flow = Gi, Ot.flowRight = Ji, Ot.fromPairs = function (t) {
			for (var n = -1, r = t ? t.length : 0, e = {}; ++n < r;) {
				var u = t[n];e[u[0]] = u[1];
			}return e;
		}, Ot.functions = function (t) {
			return null == t ? [] : _n(t, iu(t));
		}, Ot.functionsIn = function (t) {
			return null == t ? [] : _n(t, fu(t));
		}, Ot.groupBy = ei, Ot.initial = function (t) {
			return se(t, 1);
		}, Ot.intersection = Do, Ot.intersectionBy = Fo, Ot.intersectionWith = No, Ot.invert = Ii, Ot.invertBy = Ri, Ot.invokeMap = ui, Ot.iteratee = _u, Ot.keyBy = oi, Ot.keys = iu, Ot.keysIn = fu, Ot.map = Oe, Ot.mapKeys = function (t, n) {
			var r = {};return n = Fr(n, 3), hn(t, function (t, e, u) {
				r[n(t, e, u)] = t;
			}), r;
		}, Ot.mapValues = function (t, n) {
			var r = {};return n = Fr(n, 3), hn(t, function (t, e, u) {
				r[e] = n(t, e, u);
			}), r;
		}, Ot.matches = function (t) {
			return Rn(rn(t, true));
		}, Ot.matchesProperty = function (t, n) {
			return Wn(t, rn(n, true));
		}, Ot.memoize = Le, Ot.merge = Bi, Ot.mergeWith = Li, Ot.method = Yi, Ot.methodOf = Hi, Ot.mixin = vu, Ot.negate = function (t) {
			if (typeof t != "function") throw new Au("Expected a function");return function () {
				return !t.apply(this, arguments);
			};
		}, Ot.nthArg = function (t) {
			return t = Xe(t), Me(function (n) {
				return Ln(n, t);
			});
		}, Ot.omit = Mi, Ot.omitBy = function (t, n) {
			return n = Fr(n), zn(t, function (t, r) {
				return !n(t, r);
			});
		}, Ot.once = function (t) {
			return Ie(2, t);
		}, Ot.orderBy = function (t, n, r, e) {
			return null == t ? [] : (yi(n) || (n = null == n ? [] : [n]), r = e ? T : r, yi(r) || (r = null == r ? [] : [r]), Mn(t, n, r));
		}, Ot.over = Qi, Ot.overArgs = hi, Ot.overEvery = Xi, Ot.overSome = tf, Ot.partial = pi, Ot.partialRight = _i, Ot.partition = ii, Ot.pick = Ci, Ot.pickBy = function (t, n) {
			return null == t ? {} : zn(t, Fr(n));
		}, Ot.property = du, Ot.propertyOf = function (t) {
			return function (n) {
				return null == t ? T : vn(t, n);
			};
		}, Ot.pull = Po, Ot.pullAll = ge, Ot.pullAllBy = function (t, n, r) {
			return t && t.length && n && n.length ? Dn(t, n, Fr(r)) : t;
		}, Ot.pullAllWith = function (t, n, r) {
			return t && t.length && n && n.length ? Dn(t, n, T, r) : t;
		}, Ot.pullAt = Zo, Ot.range = nf, Ot.rangeRight = rf, Ot.rearg = vi, Ot.reject = function (t, n) {
			var r = yi(t) ? f : ln;return n = Fr(n, 3), r(t, function (t, r, e) {
				return !n(t, r, e);
			});
		}, Ot.remove = function (t, n) {
			var r = [];if (!t || !t.length) return r;var e = -1,
			    u = [],
			    o = t.length;for (n = Fr(n, 3); ++e < o;) {
				var i = t[e];n(i, e, t) && (r.push(i), u.push(e));
			}return Fn(t, u), r;
		}, Ot.rest = Me, Ot.reverse = de, Ot.sampleSize = ke, Ot.set = function (t, n, r) {
			return null == t ? t : Zn(t, n, r);
		}, Ot.setWith = function (t, n, r, e) {
			return e = typeof e == "function" ? e : T, null == t ? t : Zn(t, n, r, e);
		}, Ot.shuffle = function (t) {
			return ke(t, 4294967295);
		}, Ot.slice = function (t, n, r) {
			var e = t ? t.length : 0;return e ? (r && typeof r != "number" && te(t, n, r) ? (n = 0, r = e) : (n = null == n ? 0 : Xe(n), r = r === T ? e : Xe(r)), Tn(t, n, r)) : [];
		}, Ot.sortBy = fi, Ot.sortedUniq = function (t) {
			return t && t.length ? Gn(t) : [];
		}, Ot.sortedUniqBy = function (t, n) {
			return t && t.length ? Gn(t, Fr(n)) : [];
		}, Ot.split = function (t, n, r) {
			return r && typeof r != "number" && te(t, n, r) && (n = r = T), r = r === T ? 4294967295 : r >>> 0, r ? (t = eu(t)) && (typeof n == "string" || null != n && !Ke(n)) && (n = Yn(n), "" == n && Wt.test(t)) ? ur(t.match(It), 0, r) : oo.call(t, n, r) : [];
		}, Ot.spread = function (t, n) {
			if (typeof t != "function") throw new Au("Expected a function");return n = n === T ? 0 : Xu(Xe(n), 0), Me(function (e) {
				var u = e[n];return e = ur(e, 0, n), u && s(e, u), r(t, this, e);
			});
		}, Ot.tail = function (t) {
			return le(t, 1);
		}, Ot.take = function (t, n, r) {
			return t && t.length ? (n = r || n === T ? 1 : Xe(n), Tn(t, 0, 0 > n ? 0 : n)) : [];
		}, Ot.takeRight = function (t, n, r) {
			var e = t ? t.length : 0;return e ? (n = r || n === T ? 1 : Xe(n), n = e - n, Tn(t, 0 > n ? 0 : n, e)) : [];
		}, Ot.takeRightWhile = function (t, n) {
			return t && t.length ? Qn(t, Fr(n, 3), false, true) : [];
		}, Ot.takeWhile = function (t, n) {
			return t && t.length ? Qn(t, Fr(n, 3)) : [];
		}, Ot.tap = function (t, n) {
			return n(t), t;
		}, Ot.throttle = function (t, n, r) {
			var e = true,
			    u = true;if (typeof t != "function") throw new Au("Expected a function");return Ze(r) && (e = "leading" in r ? !!r.leading : e, u = "trailing" in r ? !!r.trailing : u), Be(t, n, { leading: e, maxWait: n,
				trailing: u });
		}, Ot.thru = je, Ot.toArray = He, Ot.toPairs = zi, Ot.toPairsIn = Ui, Ot.toPath = function (t) {
			return yi(t) ? l(t, fe) : Je(t) ? [t] : lr(Co(t));
		}, Ot.toPlainObject = ru, Ot.transform = function (t, n, r) {
			var e = yi(t) || Ye(t);if (n = Fr(n, 4), null == r) if (e || Ze(t)) {
				var o = t.constructor;r = e ? yi(t) ? new o() : [] : Fe(o) ? un(Ju(Object(t))) : {};
			} else r = {};return (e ? u : hn)(t, function (t, e, u) {
				return n(r, t, e, u);
			}), r;
		}, Ot.unary = function (t) {
			return Se(t, 1);
		}, Ot.union = To, Ot.unionBy = qo, Ot.unionWith = Vo, Ot.uniq = function (t) {
			return t && t.length ? Hn(t) : [];
		}, Ot.uniqBy = function (t, n) {
			return t && t.length ? Hn(t, Fr(n)) : [];
		}, Ot.uniqWith = function (t, n) {
			return t && t.length ? Hn(t, T, n) : [];
		}, Ot.unset = function (t, n) {
			var r;if (null == t) r = true;else {
				r = t;var e = n,
				    e = ne(e, r) ? [e] : er(e);r = ie(r, e), e = fe(ve(e)), r = !(null != r && yn(r, e)) || delete r[e];
			}return r;
		}, Ot.unzip = ye, Ot.unzipWith = be, Ot.update = function (t, n, r) {
			return null == t ? t : Zn(t, n, (typeof r == "function" ? r : pu)(vn(t, n)), void 0);
		}, Ot.updateWith = function (t, n, r, e) {
			return e = typeof e == "function" ? e : T, null != t && (t = Zn(t, n, (typeof r == "function" ? r : pu)(vn(t, n)), e)), t;
		}, Ot.values = cu, Ot.valuesIn = function (t) {
			return null == t ? [] : k(t, fu(t));
		}, Ot.without = Ko, Ot.words = su, Ot.wrap = function (t, n) {
			return n = null == n ? pu : n, pi(n, t);
		}, Ot.xor = Go, Ot.xorBy = Jo, Ot.xorWith = Yo, Ot.zip = Ho, Ot.zipObject = function (t, n) {
			return nr(t || [], n || [], Yt);
		}, Ot.zipObjectDeep = function (t, n) {
			return nr(t || [], n || [], Zn);
		}, Ot.zipWith = Qo, Ot.entries = zi, Ot.entriesIn = Ui, Ot.extend = mi, Ot.extendWith = Ai, vu(Ot, Ot), Ot.add = ef, Ot.attempt = Vi, Ot.camelCase = $i, Ot.capitalize = au, Ot.ceil = uf, Ot.clamp = function (t, n, r) {
			return r === T && (r = n, n = T), r !== T && (r = nu(r), r = r === r ? r : 0), n !== T && (n = nu(n), n = n === n ? n : 0), nn(nu(t), n, r);
		}, Ot.clone = function (t) {
			return rn(t, false, true);
		}, Ot.cloneDeep = function (t) {
			return rn(t, true, true);
		}, Ot.cloneDeepWith = function (t, n) {
			return rn(t, true, true, n);
		}, Ot.cloneWith = function (t, n) {
			return rn(t, false, true, n);
		}, Ot.deburr = lu, Ot.divide = of, Ot.endsWith = function (t, n, r) {
			t = eu(t), n = Yn(n);var e = t.length;return r = r === T ? e : nn(Xe(r), 0, e), r -= n.length, r >= 0 && t.indexOf(n, r) == r;
		}, Ot.eq = Ce, Ot.escape = function (t) {
			return (t = eu(t)) && X.test(t) ? t.replace(H, B) : t;
		}, Ot.escapeRegExp = function (t) {
			return (t = eu(t)) && ft.test(t) ? t.replace(it, "\\$&") : t;
		}, Ot.every = function (t, n, r) {
			var e = yi(t) ? i : cn;return r && te(t, n, r) && (n = T), e(t, Fr(n, 3));
		}, Ot.find = ni, Ot.findIndex = he, Ot.findKey = function (t, n) {
			return v(t, Fr(n, 3), hn);
		}, Ot.findLast = ri, Ot.findLastIndex = pe, Ot.findLastKey = function (t, n) {
			return v(t, Fr(n, 3), pn);
		}, Ot.floor = ff, Ot.forEach = me, Ot.forEachRight = Ae, Ot.forIn = function (t, n) {
			return null == t ? t : ko(t, Fr(n, 3), fu);
		}, Ot.forInRight = function (t, n) {
			return null == t ? t : Eo(t, Fr(n, 3), fu);
		}, Ot.forOwn = function (t, n) {
			return t && hn(t, Fr(n, 3));
		}, Ot.forOwnRight = function (t, n) {
			return t && pn(t, Fr(n, 3));
		}, Ot.get = uu, Ot.gt = gi, Ot.gte = di, Ot.has = function (t, n) {
			return null != t && Vr(t, n, yn);
		}, Ot.hasIn = ou, Ot.head = _e, Ot.identity = pu, Ot.includes = function (t, n, r, e) {
			return t = Ue(t) ? t : cu(t), r = r && !e ? Xe(r) : 0, e = t.length, 0 > r && (r = Xu(e + r, 0)), Ge(t) ? e >= r && -1 < t.indexOf(n, r) : !!e && -1 < d(t, n, r);
		}, Ot.indexOf = function (t, n, r) {
			var e = t ? t.length : 0;return e ? (r = null == r ? 0 : Xe(r), 0 > r && (r = Xu(e + r, 0)), d(t, n, r)) : -1;
		}, Ot.inRange = function (t, n, r) {
			return n = nu(n) || 0, r === T ? (r = n, n = 0) : r = nu(r) || 0, t = nu(t), t >= to(n, r) && t < Xu(n, r);
		}, Ot.invoke = Wi, Ot.isArguments = ze, Ot.isArray = yi, Ot.isArrayBuffer = function (t) {
			return Te(t) && "[object ArrayBuffer]" == Mu.call(t);
		}, Ot.isArrayLike = Ue, Ot.isArrayLikeObject = $e, Ot.isBoolean = function (t) {
			return true === t || false === t || Te(t) && "[object Boolean]" == Mu.call(t);
		}, Ot.isBuffer = bi, Ot.isDate = function (t) {
			return Te(t) && "[object Date]" == Mu.call(t);
		}, Ot.isElement = function (t) {
			return !!t && 1 === t.nodeType && Te(t) && !Ve(t);
		}, Ot.isEmpty = function (t) {
			if (Ue(t) && (yi(t) || Ge(t) || Fe(t.splice) || ze(t) || bi(t))) return !t.length;
			if (Te(t)) {
				var n = qr(t);if ("[object Map]" == n || "[object Set]" == n) return !t.size;
			}for (var r in t) if (Wu.call(t, r)) return false;return !(po && iu(t).length);
		}, Ot.isEqual = function (t, n) {
			return mn(t, n);
		}, Ot.isEqualWith = function (t, n, r) {
			var e = (r = typeof r == "function" ? r : T) ? r(t, n) : T;return e === T ? mn(t, n, r) : !!e;
		}, Ot.isError = De, Ot.isFinite = function (t) {
			return typeof t == "number" && Yu(t);
		}, Ot.isFunction = Fe, Ot.isInteger = Ne, Ot.isLength = Pe, Ot.isMap = function (t) {
			return Te(t) && "[object Map]" == qr(t);
		}, Ot.isMatch = function (t, n) {
			return t === n || An(t, n, Pr(n));
		}, Ot.isMatchWith = function (t, n, r) {
			return r = typeof r == "function" ? r : T, An(t, n, Pr(n), r);
		}, Ot.isNaN = function (t) {
			return qe(t) && t != +t;
		}, Ot.isNative = function (t) {
			if (Lo(t)) throw new ju("This method is not supported with `core-js`. Try https://github.com/es-shims.");return On(t);
		}, Ot.isNil = function (t) {
			return null == t;
		}, Ot.isNull = function (t) {
			return null === t;
		}, Ot.isNumber = qe, Ot.isObject = Ze, Ot.isObjectLike = Te, Ot.isPlainObject = Ve, Ot.isRegExp = Ke, Ot.isSafeInteger = function (t) {
			return Ne(t) && t >= -9007199254740991 && 9007199254740991 >= t;
		}, Ot.isSet = function (t) {
			return Te(t) && "[object Set]" == qr(t);
		}, Ot.isString = Ge, Ot.isSymbol = Je, Ot.isTypedArray = Ye, Ot.isUndefined = function (t) {
			return t === T;
		}, Ot.isWeakMap = function (t) {
			return Te(t) && "[object WeakMap]" == qr(t);
		}, Ot.isWeakSet = function (t) {
			return Te(t) && "[object WeakSet]" == Mu.call(t);
		}, Ot.join = function (t, n) {
			return t ? Hu.call(t, n) : "";
		}, Ot.kebabCase = Di, Ot.last = ve, Ot.lastIndexOf = function (t, n, r) {
			var e = t ? t.length : 0;if (!e) return -1;var u = e;if (r !== T && (u = Xe(r), u = (0 > u ? Xu(e + u, 0) : to(u, e - 1)) + 1), n !== n) return M(t, u - 1, true);
			for (; u--;) if (t[u] === n) return u;return -1;
		}, Ot.lowerCase = Fi, Ot.lowerFirst = Ni, Ot.lt = xi, Ot.lte = ji, Ot.max = function (t) {
			return t && t.length ? an(t, pu, dn) : T;
		}, Ot.maxBy = function (t, n) {
			return t && t.length ? an(t, Fr(n), dn) : T;
		}, Ot.mean = function (t) {
			return b(t, pu);
		}, Ot.meanBy = function (t, n) {
			return b(t, Fr(n));
		}, Ot.min = function (t) {
			return t && t.length ? an(t, pu, Sn) : T;
		}, Ot.minBy = function (t, n) {
			return t && t.length ? an(t, Fr(n), Sn) : T;
		}, Ot.stubArray = yu, Ot.stubFalse = bu, Ot.stubObject = function () {
			return {};
		}, Ot.stubString = function () {
			return "";
		}, Ot.stubTrue = function () {
			return true;
		}, Ot.multiply = cf, Ot.nth = function (t, n) {
			return t && t.length ? Ln(t, Xe(n)) : T;
		}, Ot.noConflict = function () {
			return Kt._ === this && (Kt._ = Cu), this;
		}, Ot.noop = gu, Ot.now = Ee, Ot.pad = function (t, n, r) {
			t = eu(t);var e = (n = Xe(n)) ? N(t) : 0;return !n || e >= n ? t : (n = (n - e) / 2, Sr(Gu(n), r) + t + Sr(Ku(n), r));
		}, Ot.padEnd = function (t, n, r) {
			t = eu(t);var e = (n = Xe(n)) ? N(t) : 0;return n && n > e ? t + Sr(n - e, r) : t;
		}, Ot.padStart = function (t, n, r) {
			t = eu(t);var e = (n = Xe(n)) ? N(t) : 0;return n && n > e ? Sr(n - e, r) + t : t;
		}, Ot.parseInt = function (t, n, r) {
			return r || null == n ? n = 0 : n && (n = +n), t = eu(t).replace(ct, ""), no(t, n || (vt.test(t) ? 16 : 10));
		}, Ot.random = function (t, n, r) {
			if (r && typeof r != "boolean" && te(t, n, r) && (n = r = T), r === T && (typeof n == "boolean" ? (r = n, n = T) : typeof t == "boolean" && (r = t, t = T)), t === T && n === T ? (t = 0, n = 1) : (t = nu(t) || 0, n === T ? (n = t, t = 0) : n = nu(n) || 0), t > n) {
				var e = t;t = n, n = e;
			}return r || t % 1 || n % 1 ? (r = ro(), to(t + r * (n - t + Ft("1e-" + ((r + "").length - 1))), n)) : Nn(t, n);
		}, Ot.reduce = function (t, n, r) {
			var e = yi(t) ? h : x,
			    u = 3 > arguments.length;return e(t, Fr(n, 4), r, u, Ao);
		}, Ot.reduceRight = function (t, n, r) {
			var e = yi(t) ? p : x,
			    u = 3 > arguments.length;
			return e(t, Fr(n, 4), r, u, Oo);
		}, Ot.repeat = function (t, n, r) {
			return n = (r ? te(t, n, r) : n === T) ? 1 : Xe(n), Pn(eu(t), n);
		}, Ot.replace = function () {
			var t = arguments,
			    n = eu(t[0]);return 3 > t.length ? n : eo.call(n, t[1], t[2]);
		}, Ot.result = function (t, n, r) {
			n = ne(n, t) ? [n] : er(n);var e = -1,
			    u = n.length;for (u || (t = T, u = 1); ++e < u;) {
				var o = null == t ? T : t[fe(n[e])];o === T && (e = u, o = r), t = Fe(o) ? o.call(t) : o;
			}return t;
		}, Ot.round = af, Ot.runInContext = Z, Ot.sample = function (t) {
			t = Ue(t) ? t : cu(t);var n = t.length;return n > 0 ? t[Nn(0, n - 1)] : T;
		}, Ot.size = function (t) {
			if (null == t) return 0;
			if (Ue(t)) {
				var n = t.length;return n && Ge(t) ? N(t) : n;
			}return Te(t) && (n = qr(t), "[object Map]" == n || "[object Set]" == n) ? t.size : iu(t).length;
		}, Ot.snakeCase = Pi, Ot.some = function (t, n, r) {
			var e = yi(t) ? _ : qn;return r && te(t, n, r) && (n = T), e(t, Fr(n, 3));
		}, Ot.sortedIndex = function (t, n) {
			return Vn(t, n);
		}, Ot.sortedIndexBy = function (t, n, r) {
			return Kn(t, n, Fr(r));
		}, Ot.sortedIndexOf = function (t, n) {
			var r = t ? t.length : 0;if (r) {
				var e = Vn(t, n);if (r > e && Ce(t[e], n)) return e;
			}return -1;
		}, Ot.sortedLastIndex = function (t, n) {
			return Vn(t, n, true);
		}, Ot.sortedLastIndexBy = function (t, n, r) {
			return Kn(t, n, Fr(r), true);
		}, Ot.sortedLastIndexOf = function (t, n) {
			if (t && t.length) {
				var r = Vn(t, n, true) - 1;if (Ce(t[r], n)) return r;
			}return -1;
		}, Ot.startCase = Zi, Ot.startsWith = function (t, n, r) {
			return t = eu(t), r = nn(Xe(r), 0, t.length), t.lastIndexOf(Yn(n), r) == r;
		}, Ot.subtract = lf, Ot.sum = function (t) {
			return t && t.length ? w(t, pu) : 0;
		}, Ot.sumBy = function (t, n) {
			return t && t.length ? w(t, Fr(n)) : 0;
		}, Ot.template = function (t, n, r) {
			var e = Ot.templateSettings;r && te(t, n, r) && (n = T), t = eu(t), n = Ai({}, n, e, Vt), r = Ai({}, n.imports, e.imports, Vt);var u,
			    o,
			    i = iu(r),
			    f = k(r, i),
			    c = 0;
			r = n.interpolate || wt;var a = "__p+='";r = mu((n.escape || wt).source + "|" + r.source + "|" + (r === rt ? pt : wt).source + "|" + (n.evaluate || wt).source + "|$", "g");var l = "sourceURL" in n ? "//# sourceURL=" + n.sourceURL + "\n" : "";if (t.replace(r, function (n, r, e, i, f, l) {
				return e || (e = i), a += t.slice(c, l).replace(mt, L), r && (u = true, a += "'+__e(" + r + ")+'"), f && (o = true, a += "';" + f + ";\n__p+='"), e && (a += "'+((__t=(" + e + "))==null?'':__t)+'"), c = l + n.length, n;
			}), a += "';", (n = n.variable) || (a = "with(obj){" + a + "}"), a = (o ? a.replace(K, "") : a).replace(G, "$1").replace(J, "$1;"), a = "function(" + (n || "obj") + "){" + (n ? "" : "obj||(obj={});") + "var __t,__p=''" + (u ? ",__e=_.escape" : "") + (o ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + a + "return __p}", n = Vi(function () {
				return Function(i, l + "return " + a).apply(T, f);
			}), n.source = a, De(n)) throw n;return n;
		}, Ot.times = function (t, n) {
			if (t = Xe(t), 1 > t || t > 9007199254740991) return [];var r = 4294967295,
			    e = to(t, 4294967295);for (n = Fr(n), t -= 4294967295, e = m(e, n); ++r < t;) n(r);return e;
		}, Ot.toFinite = Qe, Ot.toInteger = Xe, Ot.toLength = tu, Ot.toLower = function (t) {
			return eu(t).toLowerCase();
		}, Ot.toNumber = nu, Ot.toSafeInteger = function (t) {
			return nn(Xe(t), -9007199254740991, 9007199254740991);
		}, Ot.toString = eu, Ot.toUpper = function (t) {
			return eu(t).toUpperCase();
		}, Ot.trim = function (t, n, r) {
			return (t = eu(t)) && (r || n === T) ? t.replace(ct, "") : t && (n = Yn(n)) ? (t = t.match(It), n = n.match(It), ur(t, S(t, n), I(t, n) + 1).join("")) : t;
		}, Ot.trimEnd = function (t, n, r) {
			return (t = eu(t)) && (r || n === T) ? t.replace(lt, "") : t && (n = Yn(n)) ? (t = t.match(It), n = I(t, n.match(It)) + 1, ur(t, 0, n).join("")) : t;
		}, Ot.trimStart = function (t, n, r) {
			return (t = eu(t)) && (r || n === T) ? t.replace(at, "") : t && (n = Yn(n)) ? (t = t.match(It), n = S(t, n.match(It)), ur(t, n).join("")) : t;
		}, Ot.truncate = function (t, n) {
			var r = 30,
			    e = "...";if (Ze(n)) var u = "separator" in n ? n.separator : u,
			    r = "length" in n ? Xe(n.length) : r,
			    e = "omission" in n ? Yn(n.omission) : e;t = eu(t);var o = t.length;if (Wt.test(t)) var i = t.match(It),
			    o = i.length;if (r >= o) return t;if (o = r - N(e), 1 > o) return e;if (r = i ? ur(i, 0, o).join("") : t.slice(0, o), u === T) return r + e;if (i && (o += r.length - o), Ke(u)) {
				if (t.slice(o).search(u)) {
					var f = r;for (u.global || (u = mu(u.source, eu(_t.exec(u)) + "g")), u.lastIndex = 0; i = u.exec(f);) var c = i.index;r = r.slice(0, c === T ? o : c);
				}
			} else t.indexOf(Yn(u), o) != o && (u = r.lastIndexOf(u), u > -1 && (r = r.slice(0, u)));return r + e;
		}, Ot.unescape = function (t) {
			return (t = eu(t)) && Q.test(t) ? t.replace(Y, P) : t;
		}, Ot.uniqueId = function (t) {
			var n = ++Bu;return eu(t) + n;
		}, Ot.upperCase = Ti, Ot.upperFirst = qi, Ot.each = me, Ot.eachRight = Ae, Ot.first = _e, vu(Ot, function () {
			var t = {};return hn(Ot, function (n, r) {
				Wu.call(Ot.prototype, r) || (t[r] = n);
			}), t;
		}(), { chain: false }), Ot.VERSION = "4.13.1", u("bind bindKey curry curryRight partial partialRight".split(" "), function (t) {
			Ot[t].placeholder = Ot;
		}), u(["drop", "take"], function (t, n) {
			Ut.prototype[t] = function (r) {
				var e = this.__filtered__;if (e && !n) return new Ut(this);r = r === T ? 1 : Xu(Xe(r), 0);var u = this.clone();return e ? u.__takeCount__ = to(r, u.__takeCount__) : u.__views__.push({ size: to(r, 4294967295), type: t + (0 > u.__dir__ ? "Right" : "") }), u;
			}, Ut.prototype[t + "Right"] = function (n) {
				return this.reverse()[t](n).reverse();
			};
		}), u(["filter", "map", "takeWhile"], function (t, n) {
			var r = n + 1,
			    e = 1 == r || 3 == r;Ut.prototype[t] = function (t) {
				var n = this.clone();return n.__iteratees__.push({
					iteratee: Fr(t, 3), type: r }), n.__filtered__ = n.__filtered__ || e, n;
			};
		}), u(["head", "last"], function (t, n) {
			var r = "take" + (n ? "Right" : "");Ut.prototype[t] = function () {
				return this[r](1).value()[0];
			};
		}), u(["initial", "tail"], function (t, n) {
			var r = "drop" + (n ? "" : "Right");Ut.prototype[t] = function () {
				return this.__filtered__ ? new Ut(this) : this[r](1);
			};
		}), Ut.prototype.compact = function () {
			return this.filter(pu);
		}, Ut.prototype.find = function (t) {
			return this.filter(t).head();
		}, Ut.prototype.findLast = function (t) {
			return this.reverse().find(t);
		}, Ut.prototype.invokeMap = Me(function (t, n) {
			return typeof t == "function" ? new Ut(this) : this.map(function (r) {
				return wn(r, t, n);
			});
		}), Ut.prototype.reject = function (t) {
			return t = Fr(t, 3), this.filter(function (n) {
				return !t(n);
			});
		}, Ut.prototype.slice = function (t, n) {
			t = Xe(t);var r = this;return r.__filtered__ && (t > 0 || 0 > n) ? new Ut(r) : (0 > t ? r = r.takeRight(-t) : t && (r = r.drop(t)), n !== T && (n = Xe(n), r = 0 > n ? r.dropRight(-n) : r.take(n - t)), r);
		}, Ut.prototype.takeRightWhile = function (t) {
			return this.reverse().takeWhile(t).reverse();
		}, Ut.prototype.toArray = function () {
			return this.take(4294967295);
		}, hn(Ut.prototype, function (t, n) {
			var r = /^(?:filter|find|map|reject)|While$/.test(n),
			    e = /^(?:head|last)$/.test(n),
			    u = Ot[e ? "take" + ("last" == n ? "Right" : "") : n],
			    o = e || /^find/.test(n);u && (Ot.prototype[n] = function () {
				function n(t) {
					return t = u.apply(Ot, s([t], f)), e && h ? t[0] : t;
				}var i = this.__wrapped__,
				    f = e ? [1] : arguments,
				    c = i instanceof Ut,
				    a = f[0],
				    l = c || yi(i);l && r && typeof a == "function" && 1 != a.length && (c = l = false);var h = this.__chain__,
				    p = !!this.__actions__.length,
				    a = o && !h,
				    c = c && !p;return !o && l ? (i = c ? i : new Ut(this), i = t.apply(i, f), i.__actions__.push({ func: je, args: [n], thisArg: T }), new zt(i, h)) : a && c ? t.apply(this, f) : (i = this.thru(n), a ? e ? i.value()[0] : i.value() : i);
			});
		}), u("pop push shift sort splice unshift".split(" "), function (t) {
			var n = Ou[t],
			    r = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
			    e = /^(?:pop|shift)$/.test(t);Ot.prototype[t] = function () {
				var t = arguments;if (e && !this.__chain__) {
					var u = this.value();return n.apply(yi(u) ? u : [], t);
				}return this[r](function (r) {
					return n.apply(yi(r) ? r : [], t);
				});
			};
		}), hn(Ut.prototype, function (t, n) {
			var r = Ot[n];if (r) {
				var e = r.name + "";(_o[e] || (_o[e] = [])).push({ name: n, func: r });
			}
		}), _o[Ar(T, 2).name] = [{ name: "wrapper", func: T }], Ut.prototype.clone = function () {
			var t = new Ut(this.__wrapped__);return t.__actions__ = lr(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = lr(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = lr(this.__views__), t;
		}, Ut.prototype.reverse = function () {
			if (this.__filtered__) {
				var t = new Ut(this);t.__dir__ = -1, t.__filtered__ = true;
			} else t = this.clone(), t.__dir__ *= -1;return t;
		}, Ut.prototype.value = function () {
			var t,
			    n = this.__wrapped__.value(),
			    r = this.__dir__,
			    e = yi(n),
			    u = 0 > r,
			    o = e ? n.length : 0;t = o;for (var i = this.__views__, f = 0, c = -1, a = i.length; ++c < a;) {
				var l = i[c],
				    s = l.size;switch (l.type) {case "drop":
						f += s;break;case "dropRight":
						t -= s;break;case "take":
						t = to(t, f + s);break;case "takeRight":
						f = Xu(f, t - s);}
			}if (t = { start: f, end: t }, i = t.start, f = t.end, t = f - i, u = u ? f : i - 1, i = this.__iteratees__, f = i.length, c = 0, a = to(t, this.__takeCount__), !e || 200 > o || o == t && a == t) return Xn(n, this.__actions__);e = [];
			t: for (; t-- && a > c;) {
				for (u += r, o = -1, l = n[u]; ++o < f;) {
					var h = i[o],
					    s = h.type,
					    h = (0, h.iteratee)(l);if (2 == s) l = h;else if (!h) {
						if (1 == s) continue t;break t;
					}
				}e[c++] = l;
			}return e;
		}, Ot.prototype.at = Xo, Ot.prototype.chain = function () {
			return xe(this);
		}, Ot.prototype.commit = function () {
			return new zt(this.value(), this.__chain__);
		}, Ot.prototype.next = function () {
			this.__values__ === T && (this.__values__ = He(this.value()));var t = this.__index__ >= this.__values__.length,
			    n = t ? T : this.__values__[this.__index__++];return { done: t, value: n };
		}, Ot.prototype.plant = function (t) {
			for (var n, r = this; r instanceof kt;) {
				var e = ae(r);e.__index__ = 0, e.__values__ = T, n ? u.__wrapped__ = e : n = e;var u = e,
				    r = r.__wrapped__;
			}return u.__wrapped__ = t, n;
		}, Ot.prototype.reverse = function () {
			var t = this.__wrapped__;return t instanceof Ut ? (this.__actions__.length && (t = new Ut(this)), t = t.reverse(), t.__actions__.push({ func: je, args: [de], thisArg: T }), new zt(t, this.__chain__)) : this.thru(de);
		}, Ot.prototype.toJSON = Ot.prototype.valueOf = Ot.prototype.value = function () {
			return Xn(this.__wrapped__, this.__actions__);
		}, Zu && (Ot.prototype[Zu] = we), Ot;
	}var T,
	    q = 1 / 0,
	    V = NaN,
	    K = /\b__p\+='';/g,
	    G = /\b(__p\+=)''\+/g,
	    J = /(__e\(.*?\)|\b__t\))\+'';/g,
	    Y = /&(?:amp|lt|gt|quot|#39|#96);/g,
	    H = /[&<>"'`]/g,
	    Q = RegExp(Y.source),
	    X = RegExp(H.source),
	    tt = /<%-([\s\S]+?)%>/g,
	    nt = /<%([\s\S]+?)%>/g,
	    rt = /<%=([\s\S]+?)%>/g,
	    et = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    ut = /^\w*$/,
	    ot = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(\.|\[\])(?:\4|$))/g,
	    it = /[\\^$.*+?()[\]{}|]/g,
	    ft = RegExp(it.source),
	    ct = /^\s+|\s+$/g,
	    at = /^\s+/,
	    lt = /\s+$/,
	    st = /[a-zA-Z0-9]+/g,
	    ht = /\\(\\)?/g,
	    pt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
	    _t = /\w*$/,
	    vt = /^0x/i,
	    gt = /^[-+]0x[0-9a-f]+$/i,
	    dt = /^0b[01]+$/i,
	    yt = /^\[object .+?Constructor\]$/,
	    bt = /^0o[0-7]+$/i,
	    xt = /^(?:0|[1-9]\d*)$/,
	    jt = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
	    wt = /($^)/,
	    mt = /['\n\r\u2028\u2029\\]/g,
	    At = "[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?)*",
	    Ot = "(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])" + At,
	    kt = "(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]?|[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",
	    Et = RegExp("['\u2019]", "g"),
	    St = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]", "g"),
	    It = RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|" + kt + At, "g"),
	    Rt = RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?|\\d+", Ot].join("|"), "g"),
	    Wt = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),
	    Bt = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
	    Lt = "Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise Reflect RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ isFinite parseInt setTimeout".split(" "),
	    Mt = {};
	Mt["[object Float32Array]"] = Mt["[object Float64Array]"] = Mt["[object Int8Array]"] = Mt["[object Int16Array]"] = Mt["[object Int32Array]"] = Mt["[object Uint8Array]"] = Mt["[object Uint8ClampedArray]"] = Mt["[object Uint16Array]"] = Mt["[object Uint32Array]"] = true, Mt["[object Arguments]"] = Mt["[object Array]"] = Mt["[object ArrayBuffer]"] = Mt["[object Boolean]"] = Mt["[object DataView]"] = Mt["[object Date]"] = Mt["[object Error]"] = Mt["[object Function]"] = Mt["[object Map]"] = Mt["[object Number]"] = Mt["[object Object]"] = Mt["[object RegExp]"] = Mt["[object Set]"] = Mt["[object String]"] = Mt["[object WeakMap]"] = false;
	var Ct = {};Ct["[object Arguments]"] = Ct["[object Array]"] = Ct["[object ArrayBuffer]"] = Ct["[object DataView]"] = Ct["[object Boolean]"] = Ct["[object Date]"] = Ct["[object Float32Array]"] = Ct["[object Float64Array]"] = Ct["[object Int8Array]"] = Ct["[object Int16Array]"] = Ct["[object Int32Array]"] = Ct["[object Map]"] = Ct["[object Number]"] = Ct["[object Object]"] = Ct["[object RegExp]"] = Ct["[object Set]"] = Ct["[object String]"] = Ct["[object Symbol]"] = Ct["[object Uint8Array]"] = Ct["[object Uint8ClampedArray]"] = Ct["[object Uint16Array]"] = Ct["[object Uint32Array]"] = true, Ct["[object Error]"] = Ct["[object Function]"] = Ct["[object WeakMap]"] = false;var zt = { "\xc0": "A", "\xc1": "A", "\xc2": "A", "\xc3": "A", "\xc4": "A", "\xc5": "A", "\xe0": "a", "\xe1": "a", "\xe2": "a", "\xe3": "a", "\xe4": "a", "\xe5": "a", "\xc7": "C", "\xe7": "c", "\xd0": "D", "\xf0": "d", "\xc8": "E", "\xc9": "E", "\xca": "E", "\xcb": "E", "\xe8": "e", "\xe9": "e", "\xea": "e", "\xeb": "e", "\xcc": "I", "\xcd": "I", "\xce": "I", "\xcf": "I", "\xec": "i", "\xed": "i", "\xee": "i", "\xef": "i", "\xd1": "N", "\xf1": "n", "\xd2": "O", "\xd3": "O", "\xd4": "O", "\xd5": "O", "\xd6": "O",
		"\xd8": "O", "\xf2": "o", "\xf3": "o", "\xf4": "o", "\xf5": "o", "\xf6": "o", "\xf8": "o", "\xd9": "U", "\xda": "U", "\xdb": "U", "\xdc": "U", "\xf9": "u", "\xfa": "u", "\xfb": "u", "\xfc": "u", "\xdd": "Y", "\xfd": "y", "\xff": "y", "\xc6": "Ae", "\xe6": "ae", "\xde": "Th", "\xfe": "th", "\xdf": "ss" },
	    Ut = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "`": "&#96;" },
	    $t = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&#96;": "`" },
	    Dt = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" },
	    Ft = parseFloat,
	    Nt = parseInt,
	    Pt = typeof exports == "object" && exports,
	    Zt = Pt && typeof module == "object" && module,
	    Tt = Zt && Zt.exports === Pt,
	    qt = R(typeof self == "object" && self),
	    Vt = R(typeof this == "object" && this),
	    Kt = R(typeof global == "object" && global) || qt || Vt || Function("return this")(),
	    Gt = Z();
	(qt || {})._ = Gt, typeof define == "function" && typeof define.amd == "object" && define.amd ? define(function () {
		return Gt;
	}) : Zt ? ((Zt.exports = Gt)._ = Gt, Pt._ = Gt) : Kt._ = Gt;
}).call(this);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],3:[function(require,module,exports){
(function () {
	var isNode = typeof module !== 'undefined' && typeof module.exports !== 'undefined';

	var _ = require('./lib/lodash.min')._;

	var Utils = {};

	Utils.Log = console;

	Utils._utilFiles = {};
	Utils.modules = {};

	Utils.runsOnNode = function () {
		return typeof module !== 'undefined' && typeof module.exports !== 'undefined';
	};

	Utils.extendUtils = function (extend, overwrite, ignore) {
		if (typeof extend !== 'object' && typeof extend !== 'function') {
			Utils.Log.error("Could not extend utils. Extension must be object or function.");
			return false;
		}
		if (!Array.isArray(overwrite)) {
			overwrite = [];
		}
		if (!Array.isArray(ignore)) {
			ignore = [];
		}

		for (var i in extend) {
			if (ignore.indexOf(i) >= 0) {
				continue;
			}
			if (i in Utils && overwrite.indexOf(i) < 0) {
				console.error("'" + i + "' already defined in Utils.");
				continue;
			}
			Utils[i] = extend[i];
		}
	};

	// Standard extension of lodash/underscore
	if (typeof window._ === 'function') {
		Utils.extendUtils(window._, ['toString']);
	}

	Utils.setLogger = function (logger) {
		Utils.Log = logger;
	};

	/**
  * Exports the given value either to the browser window object or to the node.js module object.
  * @param name
  * @param value
  */
	Utils.export = function (name, value) {
		Utils.modules[name] = value;
	};

	// Export Utils
	if (isNode) {
		module.exports.Utils = Utils;
	} else {
		if (typeof define === 'function' && define.amd) {
			define([], function () {
				return Utils;
			});
		} else {
			window.Utils = Utils;
		}
	}
})();

},{"./lib/lodash.min":2}],4:[function(require,module,exports){
(function () {
	var isNode = typeof module !== 'undefined' && typeof module.exports !== 'undefined';
	var Utils = isNode ? require('../utils-core').Utils : window.Utils;
	if (!Utils) {
		console.error("UtilsCore not loaded.");
		return false;
	}

	var DOM = {};

	DOM.getSelectedText = function () {
		var txt = '';
		if (window.getSelection) {
			txt = "" + window.getSelection();
		} else if (document.getSelection) {
			txt = "" + document.getSelection();
		} else if (document.selection) {
			txt = "" + document.selection.createRange().text;
		} else return;

		return txt.length > 0 ? txt : undefined;
	};

	module.exports.DOM = DOM;
})();

},{"../utils-core":3}],5:[function(require,module,exports){
(function () {
	var isNode = typeof module !== 'undefined' && typeof module.exports !== 'undefined';
	var Utils = isNode ? require('../utils-core').Utils : window.Utils;
	if (!Utils) {
		console.error("UtilsCore not loaded.");
		return false;
	}

	/**
  * @param {object|string} specs			 Error message or specs.
  * @param {Utils.Error} [originalError]	 Original error message (only if first argument was string).
  * @constructor
  */
	Utils.Error = function (specs, originalError) {
		if (Utils.isString(specs)) {
			specs = {
				message: specs
			};
			if (originalError instanceof Utils.Error) {
				specs.originalError = originalError;
			}
		}
		specs = specs || {};

		this.message = specs.message;
		this.originalError = specs.originalError;
		this.errorMap = specs.errorMap;
		this.code = specs.code;
		this.data = specs.data;
		//this.origin		 = Utils.Utils.getCaller(2);
		//this.stack		  = Utils.Utils.getStackTrace(1, 10);
		this.public = specs.public || true;
	};

	Utils.Error.prototype.log = Utils.Log;

	Utils.Error.prototype.message = 'An error occurred.';
	Utils.Error.prototype.originalError = undefined;
	Utils.Error.prototype.errorMap = undefined;
	Utils.Error.prototype.code = undefined;
	Utils.Error.prototype.data = undefined;
	Utils.Error.prototype.origin = undefined;
	Utils.Error.prototype.stack = undefined;

	Utils.Error.prototype.toString = function () {
		return this.message;
	};
	Utils.Error.prototype.getMessage = function () {
		return this.message;
	};

	module.exports.Error = Utils.Error;
})();

},{"../utils-core":3}],6:[function(require,module,exports){
(function () {
	var isNode = typeof module !== 'undefined' && typeof module.exports !== 'undefined';
	var Utils = isNode ? require('../utils-core').Utils : window.Utils;
	if (!Utils) {
		console.error("UtilsCore not loaded.");
		return false;
	}

	var Str = {};

	Str.plural = function (string) {
		if (!Utils.isString(string)) {
			return "things";
		}

		// Covers some irregular plurals
		if (string.slice(-1) === 's' || string.slice(-2) === 'sh') {
			return string + 'es';
		}

		return string + 's';
	};

	Str.capitaliseFirst = function (s) {
		if (!Utils.isString(s)) {
			return null;
		}

		return s.charAt(0).toUpperCase() + s.slice(1);
	};

	Str.dotString = function (number) {
		if (!Utils.isNumber(number)) {
			return "";
		}
		var str = "";
		for (var i = 0; i < number; i++) {
			str += '.';
		}
		return str;
	};

	Str.truncateString = function (str, maxLength) {
		if (!Utils.isString(str)) {
			return str;
		}

		if (str.length > 3 && str.length > maxLength - 3) {
			return str.substring(0, maxLength - 3) + '...';
		}
		return str;
	};

	Str.objectToString = function (value, maxLength) {
		if (maxLength <= 0) {
			return '';
		}
		if (maxLength === 1) {
			return '{';
		}
		if (maxLength <= 5) {
			if (Object.keys(value).length === 0) {
				return '{}';
			}
			return '{' + Utils.dotString(maxLength - 2) + '}';
		}
		var str = "{";
		var keys = Object.keys(value);
		var lastKey = keys[keys.length - 1];
		var keyCount = 0;
		for (var i in value) {
			var commaCount = str.length === 1 ? 0 : 1;
			var dotCount = i === lastKey ? 0 : 4;
			var keyValue = Utils.valueToString(value[i], 7);
			if (str.length + commaCount + i.length + 1 + keyValue.length + dotCount < maxLength) {
				if (str.length > 1) {
					str += ',';
				}
				str += i + ":" + keyValue;
				keyCount++;
			} else {
				break;
			}
		}
		if (keyCount < keys.length) {
			if (str.length > 1) {
				str += ',';
			}
			str += Utils.dotString(Math.min(3, maxLength - str.length - 1));
		}
		str += "}";
		return str;
	};

	Str.arrayToString = function (value, maxLength) {
		if (maxLength <= 0) {
			return '';
		}
		if (maxLength === 1) {
			return '[';
		}
		var countCount = 2 + ("" + value.length).length;
		if (maxLength <= 5 + countCount) {
			if (value.length === 0) return '[]';
			return '[' + Utils.dotString(Math.min(3, maxLength - 2)) + ']';
		}
		var str = '[';
		var keyCount = 0;
		for (var i = 0; i < value.length; i++) {
			var itemValue = Utils.valueToString(value[i], 7);
			var dotCount = i < value.length - 1 ? 4 : 0;
			var commaCount = i === 0 ? 0 : 1;
			if (str.length + commaCount + itemValue.length + dotCount + countCount < maxLength) {
				if (i !== 0) {
					str += ',';
				}
				str += itemValue;
				keyCount++;
				if (keyCount >= 2) {
					break;
				}
			} else {
				break;
			}
		}
		if (keyCount < value.length) {
			if (str.length > 1) {
				str += ',';
			}
			str += Utils.dotString(Math.min(3, maxLength - str.length - 1));
		}
		str += ']' + '(' + value.length + ')';
		return str;
	};

	Str.numberToString = function (value, maxLength) {
		if (maxLength <= 0) {
			return '';
		}
		var strValue = "" + value;
		if (strValue.length <= maxLength) {
			return strValue;
		}
		if (maxLength < 5) {
			return Utils.dotString(Math.min(3, maxLength));
		}
		return value.toExponential(Math.max(0, maxLength - 5));
	};

	Str.valueToString = function (value, maxLength) {
		if (maxLength <= 0) {
			return "";
		}
		if (Utils.isString(value)) {
			if (maxLength === 1) {
				return '"';
			}
			if (value.length <= maxLength - 2) {
				return '"' + value + '"';
			}
			if (maxLength <= 5) {
				return '"' + Utils.dotString(maxLength - 2) + '"';
			}
			return '"' + Utils.truncateString(value, maxLength - 2) + '"';
		}
		if (Utils.isNumber(value)) {
			return Utils.numberToString(value, maxLength);
		}
		if (Utils.isBoolean(value)) {
			if (maxLength < 5) {
				return value ? 't' : 'f';
			}
			return value ? 'true' : 'false';
		}
		if (Utils.isArray(value)) {
			return Utils.arrayToString(value, maxLength);
		}
		if (Utils.isObject(value)) {
			return Utils.objectToString(value, maxLength);
		}

		return Utils.truncateString("" + value, maxLength);
	};

	module.exports.String = Str;
})();

},{"../utils-core":3}],7:[function(require,module,exports){
(function () {
	var isNode = typeof module !== 'undefined' && typeof module.exports !== 'undefined';
	var Utils = isNode ? require('../utils-core').Utils : window.Utils;
	if (!Utils) {
		console.error("UtilsCore not loaded.");
		return false;
	}

	var Validation = {};

	Validation.Validity = function (name, input, valid, message) {
		if (arguments.length === 1 && Utils.isObject(name)) {
			var settings = name;
			this.setName(settings.name);
			this.setValid(settings.valid);
			this.setMessage(settings.message);
			this.setInput(settings.input);
			if ('corrected' in settings) {
				this.setCorrectedValue(settings.corrected);
			}
			this.setValidityMap(settings.validityMap);
			this.setInfo(settings.info);
			this.setType(settings.type);
		} else {
			this._name = name;
			this._input = input;
			this._valid = valid;
			this._message = message;
		}
	};
	Validation.Validity.prototype._type = 'value';
	Validation.Validity.prototype._name = undefined;
	Validation.Validity.prototype._input = undefined;
	Validation.Validity.prototype._valid = true;
	Validation.Validity.prototype._validityMap = undefined;
	Validation.Validity.prototype._corrected = undefined;
	Validation.Validity.prototype._isCorrected = false;
	Validation.Validity.prototype._info = undefined;

	Validation.Validity.prototype.setType = function (type) {
		this._type = type;
	};
	Validation.Validity.prototype.getType = function () {
		return this._type;
	};
	Validation.Validity.prototype.setName = function (name) {
		this._name = name;
	};
	Validation.Validity.prototype.getName = function () {
		return this._name;
	};
	Validation.Validity.prototype.setInfo = function (info) {
		this._info = info;
	};
	Validation.Validity.prototype.getInfo = function () {
		return this._info;
	};
	Validation.Validity.prototype.getInput = function () {
		return this._input;
	};
	Validation.Validity.prototype.setInput = function (input) {
		this._input = input;
	};
	Validation.Validity.prototype.setValid = function (valid) {
		this._valid = valid !== false;
	};
	Validation.Validity.prototype.isValid = function () {
		return this._valid;
	};
	Validation.Validity.prototype.getValue = function () {
		if (!this.isValid()) return undefined;
		if (this._isCorrected) return this._corrected;
		return this._input;
	};
	Validation.Validity.prototype.setMessage = function (message) {
		this._message = message;
	};
	Validation.Validity.prototype.getMessage = function () {
		return this._message;
	};
	Validation.Validity.prototype.isCorrected = function () {
		return this._isCorrected;
	};
	Validation.Validity.prototype.getCorrectedValue = function () {
		return this._corrected;
	};
	Validation.Validity.prototype.setCorrectedValue = function (value) {
		this._isCorrected = true;
		this._corrected = value;
	};
	Validation.Validity.prototype.getValidityMap = function () {
		return this._validityMap;
	};
	Validation.Validity.prototype.setValidityMap = function (map) {
		this._validityMap = map;
	};
	Validation.Validity.prototype.createBadValueMessage = function (returnAsArray) {
		var why = this.getMessage();
		if (why === undefined) {
			return undefined;
		}

		var name = this.getName();
		var defaultTo = this.getCorrectedValue();
		var value = this.getInput();
		if (!returnAsArray) {
			value = Utils.valueToString(value, 30);
		}

		// If reason does not end with full stop, add one.
		if (!/\.\s*?/.exec(why)) {
			why += '.';
		}

		var messages = [];
		messages.push(why);
		messages.push("Value: ");
		messages.push(value);
		if (this.isValid() && this.isCorrected()) {
			messages.push(". Using default:");
			messages.push(Utils.valueToString(defaultTo));
		}

		if (returnAsArray === true) {
			return messages;
		} else {
			return messages.join(' ');
		}
	};

	/**
  * Creates an Error object.
  * @returns {Utils.Error}
  */
	Validation.Validity.prototype.createError = function (includeErrorMap) {
		var message = this.getMessage();
		if (message === undefined) {
			return null;
		}

		var code = 'validation-' + this.getType();
		var error = new Utils.Error({
			data: this.getInput(),
			message: this.createBadValueMessage(),
			code: code
		});
		if (includeErrorMap !== false) {
			var validityMap = this.getValidityMap();
			if (_.isObject(validityMap)) {
				var errorMap = {};
				for (var i in validityMap) {
					var subError = validityMap[i].createError();
					if (subError instanceof Utils.Error) {
						errorMap[i] = subError;
					}
				}
				error.errorMap = errorMap;
			}
		}

		return error;
	};

	Validation._validationMessages = {
		isArguments: "Must be arguments.",
		isArray: "Must be array.",
		isBoolean: "Must be boolean.",
		isDate: "Must be date.",
		isElement: "Must be element.",
		isEmpty: "Must be empty.",
		isError: "Must be error.",
		isFinite: "Must be finite.",
		isFunction: "Must be function.",
		isMatch: "Must be match",
		isNaN: "Must be NaN.",
		isNative: "Must be native.",
		isNull: "Must be null.",
		isNumber: "Must be number.",
		isObject: "Must be object.",
		isPlainObject: "Must be plain object.",
		isRegExp: "Must be RegExp.",
		isString: "Must be string.",
		isTypedArray: "Must be typed array.",
		isUndefined: "Must be undefined.",
		isStringOrNumber: "Must be string or number."
	};

	/**
  *
  * @param {Validation.Validity} validity
  * @returns {boolean}   Whether or not the validity was logged.
  */
	Validation.logValidity = function (validity) {
		if (!(validity instanceof Validation.Validity)) {
			Utils.Log.error("Could not log validity.", validity);
			return false;
		}

		if (validity.isValid() && validity.getMessage() === undefined) {
			return false;
		}

		var error = validity.createError();
		var message = validity.createBadValueMessage(true);
		message.push(". Error: ");
		message.push(error);
		if (!validity.isValid()) {
			Utils.Log.error.apply(Utils.Log, message);
		} else if (validity.isCorrected()) {
			Utils.Log.warn.apply(Utils.Log, message);
		}

		return true;
	};

	Validation.setValidationMessage = function (method, message) {
		if (typeof method !== 'string') {
			Utils.Log.error("Validation method argument must be string.");
			return false;
		}
		if (typeof message !== 'string') {
			Utils.Log.error("Validation method message argument must be string.");
			return false;
		}
		Validation._validationMessages[method] = message;
	};

	Validation.getValidationMessage = function (method) {
		if (typeof method !== 'string') {
			return undefined;
		}
		return Validation._validationMessages[method];
	};

	/**
  *
  * Validates a value, based on the given parameters
  *
  * Example usage: Validation.validateOne("myVariable", "apple", "isString", "Must be a string", {default: "banana", warn: false});
  *
  * @param {string} name					 The name of the variable to check.
  * @param value							 The value of the variable to check.
  * @param method	 Boolean check for validity, or name of util for validation.
  * @param {string} [message]				[Optional] The message to display when variable is not valid.
  * @param {object} options				  An object of extra option.
  * @param [options.default]				 A default value if given value is invalid. If not provided, validation will fail if invalid value.
  * @param {boolean} [options.warn]		  If false, no warning will be given if default is chosen. Defaults to true.
  *
  * @return {Validation.Validity}
  */
	Validation.validateOne = function (name, value, method, message, options) {
		/** @type {Validation.Validity|boolean} */
		var valid = undefined;
		if (Utils.isPlainObject(message)) {
			// message was omitted
			options = message;
			message = undefined;
		}

		// Get method from utils, if method is string
		if (Utils.isString(method)) {
			// Get function from utils
			var utilMethod = Utils[method];

			// If no message is provided, try to find one from validationMessages
			if (!Utils.isString(message)) {
				message = Validation.getValidationMessage(method);
				if (message === undefined) {
					message = "Must be " + method + ".";
				}
			}
			if (!Utils.isFunction(utilMethod)) {
				message = "Don't know how to validate '" + method + "'";
				method = new Validation.Validity(name, value, false, message);
			} else {
				method = utilMethod;
			}
		}

		// Apply validation method
		if (Utils.isFunction(method)) {
			valid = method.apply(Validation, [value]);
			// Validity object
		} else if (method instanceof Validation.Validity) {
			valid = method;
			// validateArray
		} else if (Utils.isArray(method)) {
			valid = Validation.validateArray(name, value, method, undefined, _.get(options, 'array'), false);
			// validateObject
		} else if (Utils.isObject(method)) {
			valid = Validation.validateObject(name, value, method, undefined, false);
			// Boolean validation
		} else {
			valid = method === true;
		}

		if (!(valid instanceof Validation.Validity)) {
			valid = new Validation.Validity(name, value, valid);
		}

		// Feedback
		var __setMessage = function (valid, message) {
			if (_.isFunction(message)) {
				message = message(value);
			}
			valid.setMessage(message);
		};

		if (!valid.isValid()) {
			if (message === undefined) {
				message = 'Invalid.';
			}
			if (Utils.isObject(options) && 'default' in options) {
				if (Utils.isFunction(options.default)) {
					var def = options.default.apply(Validation, [value]);
					valid.setCorrectedValue(def);
				} else {
					valid.setCorrectedValue(options.default);
				}

				var warn = Utils.get(options, 'warn');
				var __warn = Utils.isFunction(warn) ? warn : function () {
					return warn !== false;
				};
				if (__warn(value) !== false) {
					if (valid.getMessage() === undefined) {
						__setMessage(valid, message);
					}
				} else {
					__setMessage(valid, undefined);
				}
				valid.setValid(true);
			} else {
				valid.setValid(false);
				if (valid.getMessage() === undefined) {
					__setMessage(valid, message);
				}
			}
		} else if (!valid.isCorrected()) {
			__setMessage(valid, undefined);
		}

		return valid;
	};

	/**
  * Validates a set of values, based on the given parameters.
  *
  * Example usage: Validation.validate("myValidation", {a: ["apple", "isString"]}, "Validation failed.");
  *
  * @param {string} name			 The name by which to identify this validation.
  * @param {object} checks		   An object of checks. Where the keys are the names of the variables and the
  *								  values arrays of parameters that are passed to {@link Validation.validateOne}, prepended by
  *								  <me> and <checks>.
  * @param {string} [consequence]	[optional] A message to be given if validation fails.
  * @param {function} [callback]	 [optional] Callback instead of direct error messages. Callback is called with a Validity object as argument.
  *
  * @returns {Validation.Validity}		If validation was passed, an object will be returned containing a the keys
  *								  of the given checks object, with their validated values.
  *								  If any of the validations failed, FALSE will be returned.
  */
	Validation.validate = function (name, checks, consequence, callback) {
		var defaultValidationName = 'Validation';

		// Can also be called without a name
		if (Utils.isObject(name)) {
			callback = consequence;
			consequence = checks;
			checks = name;
			name = defaultValidationName;
		}

		var validityMap = {};
		var inputMap = {};
		callback = Validation.ensure(callback, Utils.isFunction, callback === false ? function () {} : Validation.logValidity);

		if (consequence === undefined) {
			consequence = '';
		}

		if (Utils.isObject(checks)) {
			for (var i in checks) {
				checks[i].unshift(i);
				validityMap[i] = Validation.validateOne.apply(Validation, checks[i]);
				inputMap[i] = checks[i][1];
			}
		} else {
			var invalidChecksMessage = "Parameter 'checks' must be object. " + consequence;
			callback(new Validation.Validity(name, checks, invalidChecksMessage));
			return false;
		}

		// Go through results
		var isValid = true;
		for (var i in validityMap) {
			var validity = validityMap[i];
			if (!validity.isValid()) {
				isValid = false;
			}
		}

		// Create Validity object
		var valid = new Validation.Validity({
			type: 'multiple',
			name: name,
			input: inputMap,
			valid: isValid,
			validityMap: validityMap
		});
		if (!isValid) {
			if (name === defaultValidationName) {
				valid.setMessage("Validation failed.");
			} else {
				valid.setMessage("Validation failed for '" + name + "'.");
			}
		}
		callback(valid);
		return valid;
	};

	/**
  * Validates an object, the same way .validate validates isolated values.
  *
  * Example usage: Validation.validateObject('myObject', {a: 'apple'}, {a: ['isString']}).
  *
  * @param {string} name			 	The name of the validation.
  * @param {object} obj			  	The object to check.
  * @param {object} checks		   	An object with for each key to check an array of arguments [method, message, options]
  *								  	to pass to the validateOne function.
  * @param {string} [message]		Message to add to ValidityObject in case of invalid object.
  * @param {function} [callback]	 	A function that takes a Validity object as argument.
  *
  * @return {Validation.Validity}
  */
	Validation.validateObject = function (name, obj, checks, message, callback) {
		if (Utils.isObject(name)) {
			callback = message;
			message = checks;
			checks = obj;
			obj = name;
			name = 'Object';
		}
		callback = Validation.ensure(callback, Utils.isFunction, callback === false ? function () {} : Validation.logValidity);

		if (!Utils.isObject(checks)) {
			var invalid = new Validation.Validity(name, checks, false, "Invalid 'checks' parameter. Must be object.");
			callback(invalid);
			return invalid;
		}

		if (!Utils.isObject(obj)) {
			var invalid = new Validation.Validity(name, checks, false, "Invalid object.");
			callback(invalid);
			return invalid;
		}

		var validityMap = {};
		for (var prop in checks) {
			var args = Utils.clone(checks[prop]);
			var isArray = Utils.isArray(args);

			// Lazy, single-parameter validation (string, boolean or function)
			if (Utils.isString(args) || Utils.isBoolean(args) || Utils.isFunction(args)) {
				args = [args];
				// Invalid validation
			} else if (!isArray) {
				args = [false, "Invalid validation definition."];
			}

			args.unshift(obj[prop]);
			args.unshift(prop);

			validityMap[prop] = Validation.validateOne.apply(Validation, args);
		}

		var __setMessage = function (valid, message) {
			if (_.isFunction(message)) {
				message = message(obj);
			}
			valid.setMessage(message);
		};

		var valid = new Validation.Validity({
			name: name,
			input: obj,
			validityMap: validityMap
		});
		var corrected = undefined;
		if (message === undefined) {
			message = "Invalid object for '" + name + "'.";
		}
		var hasMessage = false;
		for (var prop in validityMap) {
			if (!validityMap[prop].isValid()) {
				valid.setValid(false);
				__setMessage(valid, message);
			}
			if (validityMap[prop].isCorrected()) {
				if (corrected === undefined) {
					corrected = Utils.clone(obj);
					valid.setCorrectedValue(corrected);
				}
				corrected[prop] = validityMap[prop].getValue();
			}
			if (validityMap[prop].getMessage() !== undefined) {
				hasMessage = true;
			}
		}
		if (hasMessage) {
			__setMessage(valid, message);
		}
		valid.setType('object');

		callback(valid);
		return valid;
	};

	/**
  * Validates an array of values, using the given validation function.
  *
  * Example usage: Validation.validateArray("myArray", ['apple', 'banana', 123], ["isString", {default: 'fruit'}]);
  *
  * @param {string} name
  * @param {Array} array				 					The array to validate.
  * @param {Array|string|function} itemValidation		The validation arguments [method, message, options]
  * @param {number} [options.minLength=0]				[optional] The minimum length of the array.
  * @param {number} [options.maxLength=Infinity] 		[optional] The maximum length of the array.
  * @param {string} [options.itemType='Item']			[optional] What to call an item.
  * @param {function} [callback]		 					[optional] Callback instead of direct error messages. Callback is called with a Validity object as argument.
  */
	Validation.validateArray = function (name, array, itemValidation, message, options, callback) {
		if (Utils.isArray(name)) {
			callback = options;
			options = message;
			message = itemValidation;
			itemValidation = array;
			array = name;
			name = 'Array';
		}
		if (Utils.isPlainObject(message)) {
			callback = options;
			options = message;
		}
		var minLength = _.get(options, 'minLength');
		var maxLength = _.get(options, 'maxLength');
		var itemType = _.get(options, 'itemType');

		callback = Validation.ensure(callback, Utils.isFunction, callback === false ? function () {} : Validation.logValidity);

		if (!Utils.isArray(array)) {
			var invalid = new Validation.Validity({ name: name, input: array, valid: false, message: "Must be an array", type: 'array' });
			callback(invalid);
			return invalid;
		}
		if (!Utils.isArray(itemValidation)) {
			itemValidation = [itemValidation];
		}
		var valid = new Validation.Validity(name, array, true);

		if (!Utils.isNumber(minLength)) minLength = 0;
		if (!Utils.isNumber(maxLength)) maxLength = Infinity;
		if (!Utils.isString(itemType)) itemType = 'Item';

		var itemPlural = Utils.plural(itemType);

		if (array.length < minLength) {
			var invalid2 = new Validation.Validity({
				name: name,
				input: array,
				valid: false,
				type: 'array',
				message: name + " must contain at least " + minLength + " " + itemPlural.toLowerCase()
			});
			callback(invalid2);
			return invalid2;
		}
		if (array.length > maxLength) {
			var invalid3 = new Validation.Validity({
				name: name,
				input: array,
				valid: false,
				type: 'array',
				message: name + " may contain at most " + maxLength + " " + itemPlural.toLowerCase()
			});
			callback(invalid3);
			return invalid3;
		}

		var item = null,
		    itemName = null,
		    validationArgs = null,
		    validityMap = {};
		for (var i = 0; i < array.length; i++) {
			item = array[i];
			itemName = Utils.isString(item) ? item : i;

			validationArgs = Utils.clone(itemValidation);
			validationArgs.unshift(item);
			validationArgs.unshift(itemName);

			validityMap[i] = Validation.validateOne.apply(Validation, validationArgs);
		}

		var corrected = undefined;
		var invalidMessage = "Invalid " + itemPlural.toLowerCase() + " in " + name + " array.";
		var hasMessage = false;
		for (var i in validityMap) {
			if (!validityMap[i].isValid()) {
				valid.setValid(false);
				valid.setMessage(invalidMessage);
			}
			if (validityMap[i].isCorrected()) {
				if (corrected === undefined) {
					corrected = Utils.clone(array);
					valid.setCorrectedValue(corrected);
				}
				corrected[i] = validityMap[i].getValue();
			}
			if (validityMap[i].getMessage() !== undefined) {
				hasMessage = true;
			}
		}
		if (hasMessage) {
			valid.setMessage(invalidMessage);
		}

		valid.setValidityMap(validityMap);
		valid.setType('array');

		callback(valid);
		return valid;
	};

	/**
  * Checks whether the given argument is an instance of the given class.
  * @param {function} checkClass	 The class the second argument should be an instance of.
  * @param {object} [arg]			The argument to check. If not provided, the function will return a function
  *								  that requires a single argument to check if that is an instance of the given class.
  * @returns {*}
  */
	Validation.instanceof = function (checkClass, arg) {
		if (arguments.length < 2) {
			return function (futureArg) {
				return Validation.instanceof(checkClass, futureArg);
			};
		} else {
			return Utils.isObject(checkClass) && arg instanceof checkClass;
		}
	};

	/**
  * Checks whether the given argument is defined, and not null.
  * @param v
  * @returns {boolean}
  */
	Validation.def = function (v) {
		return v !== null && v !== undefined;
	};

	Validation.ensure = function (variable, evalFunc, defaultValue, message) {
		var sure = variable;
		if (!evalFunc(variable)) {
			sure = defaultValue;
			if (Validation.def(message)) {
				Utils.Log.error("Validation::ensure", message, variable);
			}
		}

		return sure;
	};

	Validation.ensurePath = function (variable, path, evalFunc, defaultValue, message) {
		if (!_.isObject(variable)) {
			variable = {};
		}
		if (_.isArray(path)) {
			_.forEach(path, function (p) {
				variable = Validation.ensurePath(variable, p, evalFunc, defaultValue, p + ": " + message);
			});
			return variable;
		}

		var check = _.get(variable, path);
		if (!evalFunc(check)) {
			_.set(variable, path, defaultValue);
			if (Validation.def(message)) {
				Validation.Log.error(message, variable);
			}
		}

		return variable;
	};

	Validation.isStringOrNumber = function (variable) {
		return !isNaN(parseFloat(variable)) || _.isString(variable);
	};

	module.exports.Validation = Validation;
})();

},{"../utils-core":3}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsInNyYy9saWIvbG9kYXNoLm1pbi5qcyIsInNyYy91dGlscy1jb3JlLmpzIiwic3JjL3V0aWxzL2RvbS5qcyIsInNyYy91dGlscy9lcnJvci5qcyIsInNyYy91dGlscy9zdHJpbmcuanMiLCJzcmMvdXRpbHMvdmFsaWRhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLENBQUMsWUFBVTtBQUNQLFFBQUksU0FBUyxPQUFPLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsT0FBTyxPQUFPLE9BQWQsS0FBMEIsV0FBeEU7O0FBRUEsUUFBSSxRQUFRLFFBQVEsa0JBQVIsRUFBNEIsS0FBeEM7O0FBRUEsUUFBSSxTQUFTLEVBQWI7QUFDQSxXQUFPLElBQVAsQ0FBWSxRQUFRLG9CQUFSLEVBQThCLE1BQTFDO0FBQ0EsV0FBTyxJQUFQLENBQVksUUFBUSx3QkFBUixFQUFrQyxVQUE5QztBQUNBLFdBQU8sSUFBUCxDQUFZLFFBQVEsbUJBQVIsRUFBNkIsS0FBekM7QUFDSCxXQUFPLElBQVAsQ0FBWSxRQUFRLGlCQUFSLEVBQTJCLEdBQXZDOztBQUVHLFNBQUksSUFBSSxJQUFFLENBQVYsRUFBYSxJQUFFLE9BQU8sTUFBdEIsRUFBOEIsR0FBOUIsRUFBbUM7QUFDL0IsY0FBTSxXQUFOLENBQWtCLE9BQU8sQ0FBUCxDQUFsQjtBQUNIOztBQUVELFdBQU8sT0FBUCxDQUFlLEtBQWYsR0FBdUIsS0FBdkI7QUFDQSxXQUFPLEtBQVAsR0FBZSxLQUFmO0FBQ0gsQ0FqQkQ7Ozs7QUNBQTs7OztBQUlBLENBQUMsQ0FBQyxZQUFVO0FBQUMsVUFBUyxDQUFULENBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFNBQU8sRUFBRSxHQUFGLENBQU0sRUFBRSxDQUFGLENBQU4sRUFBVyxFQUFFLENBQUYsQ0FBWCxHQUFpQixDQUF4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TUFBOUIsR0FBdUMsU0FBdkM7QUFDQSxZQUFXLFFBQVgsQ0FBb0IsU0FBcEIsQ0FBOEIsTUFBOUIsR0FBdUMsSUFBdkM7QUFDQSxZQUFXLFFBQVgsQ0FBb0IsU0FBcEIsQ0FBOEIsWUFBOUIsR0FBNkMsU0FBN0M7QUFDQSxZQUFXLFFBQVgsQ0FBb0IsU0FBcEIsQ0FBOEIsVUFBOUIsR0FBMkMsU0FBM0M7QUFDQSxZQUFXLFFBQVgsQ0FBb0IsU0FBcEIsQ0FBOEIsWUFBOUIsR0FBNkMsS0FBN0M7QUFDQSxZQUFXLFFBQVgsQ0FBb0IsU0FBcEIsQ0FBOEIsS0FBOUIsR0FBc0MsU0FBdEM7O0FBRUEsWUFBVyxRQUFYLENBQW9CLFNBQXBCLENBQThCLE9BQTlCLEdBQXdDLFVBQVMsSUFBVCxFQUFlO0FBQ3RELE9BQUssS0FBTCxHQUFhLElBQWI7QUFDQSxFQUZEO0FBR0EsWUFBVyxRQUFYLENBQW9CLFNBQXBCLENBQThCLE9BQTlCLEdBQXdDLFlBQVc7QUFDbEQsU0FBTyxLQUFLLEtBQVo7QUFDQSxFQUZEO0FBR0EsWUFBVyxRQUFYLENBQW9CLFNBQXBCLENBQThCLE9BQTlCLEdBQXdDLFVBQVMsSUFBVCxFQUFlO0FBQ3RELE9BQUssS0FBTCxHQUFhLElBQWI7QUFDQSxFQUZEO0FBR0EsWUFBVyxRQUFYLENBQW9CLFNBQXBCLENBQThCLE9BQTlCLEdBQXdDLFlBQVc7QUFDbEQsU0FBTyxLQUFLLEtBQVo7QUFDQSxFQUZEO0FBR0EsWUFBVyxRQUFYLENBQW9CLFNBQXBCLENBQThCLE9BQTlCLEdBQXdDLFVBQVMsSUFBVCxFQUFlO0FBQ3RELE9BQUssS0FBTCxHQUFhLElBQWI7QUFDQSxFQUZEO0FBR0EsWUFBVyxRQUFYLENBQW9CLFNBQXBCLENBQThCLE9BQTlCLEdBQXdDLFlBQVc7QUFDbEQsU0FBTyxLQUFLLEtBQVo7QUFDQSxFQUZEO0FBR0EsWUFBVyxRQUFYLENBQW9CLFNBQXBCLENBQThCLFFBQTlCLEdBQXlDLFlBQVc7QUFDbkQsU0FBTyxLQUFLLE1BQVo7QUFDQSxFQUZEO0FBR0EsWUFBVyxRQUFY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QUFnQixJQUFoQixDQUFaO0FBQ0EsTUFBSSxDQUFDLFNBQVMsS0FBVCxDQUFMLEVBQXNCO0FBQ3JCLEtBQUUsR0FBRixDQUFNLFFBQU4sRUFBZ0IsSUFBaEIsRUFBc0IsWUFBdEI7QUFDQSxPQUFJLFdBQVcsR0FBWCxDQUFlLE9BQWYsQ0FBSixFQUE2QjtBQUM1QixlQUFXLEdBQVgsQ0FBZSxLQUFmLENBQXFCLE9BQXJCLEVBQThCLFFBQTlCO0FBQ0E7QUFDRDs7QUFFRCxTQUFPLFFBQVA7QUFDQSxFQXBCRDs7QUFzQkEsWUFBVyxnQkFBWCxHQUE4QixVQUFTLFFBQVQsRUFBbUI7QUFDaEQsU0FBTyxDQUFDLE1BQU0sV0FBVyxRQUFYLENBQU4sQ0FBRCxJQUFnQyxFQUFFLFFBQUYsQ0FBVyxRQUFYLENBQXZDO0FBQ0EsRUFGRDs7QUFJQSxRQUFPLE9BQVAsQ0FBZSxVQUFmLEdBQTRCLFVBQTVCO0FBQ0EsQ0FuckJEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbigpe1xuICAgIHZhciBpc05vZGUgPSB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT09ICd1bmRlZmluZWQnO1xuXG4gICAgdmFyIFV0aWxzID0gcmVxdWlyZSgnLi9zcmMvdXRpbHMtY29yZScpLlV0aWxzO1xuXG4gICAgdmFyIGxvYWRlZCA9IFtdO1xuICAgIGxvYWRlZC5wdXNoKHJlcXVpcmUoJy4vc3JjL3V0aWxzL3N0cmluZycpLlN0cmluZyk7XG4gICAgbG9hZGVkLnB1c2gocmVxdWlyZSgnLi9zcmMvdXRpbHMvdmFsaWRhdGlvbicpLlZhbGlkYXRpb24pO1xuICAgIGxvYWRlZC5wdXNoKHJlcXVpcmUoJy4vc3JjL3V0aWxzL2Vycm9yJykuRXJyb3IpO1xuXHRsb2FkZWQucHVzaChyZXF1aXJlKCcuL3NyYy91dGlscy9kb20nKS5ET00pO1xuXG4gICAgZm9yKHZhciBpPTA7IGk8bG9hZGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIFV0aWxzLmV4dGVuZFV0aWxzKGxvYWRlZFtpXSk7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMuVXRpbHMgPSBVdGlscztcbiAgICB3aW5kb3cuVXRpbHMgPSBVdGlscztcbn0pKCk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBsb2Rhc2ggbG9kYXNoLmNvbS9saWNlbnNlIHwgVW5kZXJzY29yZS5qcyAxLjguMyB1bmRlcnNjb3JlanMub3JnL0xJQ0VOU0VcbiAqL1xuOyhmdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxuKXtyZXR1cm4gdC5zZXQoblswXSxuWzFdKSx0fWZ1bmN0aW9uIG4odCxuKXtyZXR1cm4gdC5hZGQobiksdH1mdW5jdGlvbiByKHQsbixyKXtzd2l0Y2goci5sZW5ndGgpe2Nhc2UgMDpyZXR1cm4gdC5jYWxsKG4pO2Nhc2UgMTpyZXR1cm4gdC5jYWxsKG4sclswXSk7Y2FzZSAyOnJldHVybiB0LmNhbGwobixyWzBdLHJbMV0pO2Nhc2UgMzpyZXR1cm4gdC5jYWxsKG4sclswXSxyWzFdLHJbMl0pfXJldHVybiB0LmFwcGx5KG4scil9ZnVuY3Rpb24gZSh0LG4scixlKXtmb3IodmFyIHU9LTEsbz10P3QubGVuZ3RoOjA7Kyt1PG87KXt2YXIgaT10W3VdO24oZSxpLHIoaSksdCl9cmV0dXJuIGV9ZnVuY3Rpb24gdSh0LG4pe2Zvcih2YXIgcj0tMSxlPXQ/dC5sZW5ndGg6MDsrK3I8ZSYmZmFsc2UhPT1uKHRbcl0scix0KTspO3JldHVybiB0fWZ1bmN0aW9uIG8odCxuKXtmb3IodmFyIHI9dD90Lmxlbmd0aDowO3ItLSYmZmFsc2UhPT1uKHRbcl0scix0KTspO1xuXHRyZXR1cm4gdH1mdW5jdGlvbiBpKHQsbil7Zm9yKHZhciByPS0xLGU9dD90Lmxlbmd0aDowOysrcjxlOylpZighbih0W3JdLHIsdCkpcmV0dXJuIGZhbHNlO3JldHVybiB0cnVlfWZ1bmN0aW9uIGYodCxuKXtmb3IodmFyIHI9LTEsZT10P3QubGVuZ3RoOjAsdT0wLG89W107KytyPGU7KXt2YXIgaT10W3JdO24oaSxyLHQpJiYob1t1KytdPWkpfXJldHVybiBvfWZ1bmN0aW9uIGModCxuKXtyZXR1cm4hKCF0fHwhdC5sZW5ndGgpJiYtMTxkKHQsbiwwKX1mdW5jdGlvbiBhKHQsbixyKXtmb3IodmFyIGU9LTEsdT10P3QubGVuZ3RoOjA7KytlPHU7KWlmKHIobix0W2VdKSlyZXR1cm4gdHJ1ZTtyZXR1cm4gZmFsc2V9ZnVuY3Rpb24gbCh0LG4pe2Zvcih2YXIgcj0tMSxlPXQ/dC5sZW5ndGg6MCx1PUFycmF5KGUpOysrcjxlOyl1W3JdPW4odFtyXSxyLHQpO3JldHVybiB1fWZ1bmN0aW9uIHModCxuKXtmb3IodmFyIHI9LTEsZT1uLmxlbmd0aCx1PXQubGVuZ3RoOysrcjxlOyl0W3Urcl09bltyXTtyZXR1cm4gdH1mdW5jdGlvbiBoKHQsbixyLGUpe1xuXHR2YXIgdT0tMSxvPXQ/dC5sZW5ndGg6MDtmb3IoZSYmbyYmKHI9dFsrK3VdKTsrK3U8bzspcj1uKHIsdFt1XSx1LHQpO3JldHVybiByfWZ1bmN0aW9uIHAodCxuLHIsZSl7dmFyIHU9dD90Lmxlbmd0aDowO2ZvcihlJiZ1JiYocj10Wy0tdV0pO3UtLTspcj1uKHIsdFt1XSx1LHQpO3JldHVybiByfWZ1bmN0aW9uIF8odCxuKXtmb3IodmFyIHI9LTEsZT10P3QubGVuZ3RoOjA7KytyPGU7KWlmKG4odFtyXSxyLHQpKXJldHVybiB0cnVlO3JldHVybiBmYWxzZX1mdW5jdGlvbiB2KHQsbixyKXt2YXIgZTtyZXR1cm4gcih0LGZ1bmN0aW9uKHQscix1KXtyZXR1cm4gbih0LHIsdSk/KGU9cixmYWxzZSk6dm9pZCAwfSksZX1mdW5jdGlvbiBnKHQsbixyLGUpe3ZhciB1PXQubGVuZ3RoO2ZvcihyKz1lPzE6LTE7ZT9yLS06KytyPHU7KWlmKG4odFtyXSxyLHQpKXJldHVybiByO3JldHVybi0xfWZ1bmN0aW9uIGQodCxuLHIpe2lmKG4hPT1uKXJldHVybiBNKHQscik7LS1yO2Zvcih2YXIgZT10Lmxlbmd0aDsrK3I8ZTspaWYodFtyXT09PW4pcmV0dXJuIHI7XG5cdHJldHVybi0xfWZ1bmN0aW9uIHkodCxuLHIsZSl7LS1yO2Zvcih2YXIgdT10Lmxlbmd0aDsrK3I8dTspaWYoZSh0W3JdLG4pKXJldHVybiByO3JldHVybi0xfWZ1bmN0aW9uIGIodCxuKXt2YXIgcj10P3QubGVuZ3RoOjA7cmV0dXJuIHI/dyh0LG4pL3I6Vn1mdW5jdGlvbiB4KHQsbixyLGUsdSl7cmV0dXJuIHUodCxmdW5jdGlvbih0LHUsbyl7cj1lPyhlPWZhbHNlLHQpOm4ocix0LHUsbyl9KSxyfWZ1bmN0aW9uIGoodCxuKXt2YXIgcj10Lmxlbmd0aDtmb3IodC5zb3J0KG4pO3ItLTspdFtyXT10W3JdLmM7cmV0dXJuIHR9ZnVuY3Rpb24gdyh0LG4pe2Zvcih2YXIgcixlPS0xLHU9dC5sZW5ndGg7KytlPHU7KXt2YXIgbz1uKHRbZV0pO28hPT1UJiYocj1yPT09VD9vOnIrbyl9cmV0dXJuIHJ9ZnVuY3Rpb24gbSh0LG4pe2Zvcih2YXIgcj0tMSxlPUFycmF5KHQpOysrcjx0OyllW3JdPW4ocik7cmV0dXJuIGV9ZnVuY3Rpb24gQSh0LG4pe3JldHVybiBsKG4sZnVuY3Rpb24obil7cmV0dXJuW24sdFtuXV07XG59KX1mdW5jdGlvbiBPKHQpe3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gdChuKX19ZnVuY3Rpb24gayh0LG4pe3JldHVybiBsKG4sZnVuY3Rpb24obil7cmV0dXJuIHRbbl19KX1mdW5jdGlvbiBFKHQsbil7cmV0dXJuIHQuaGFzKG4pfWZ1bmN0aW9uIFModCxuKXtmb3IodmFyIHI9LTEsZT10Lmxlbmd0aDsrK3I8ZSYmLTE8ZChuLHRbcl0sMCk7KTtyZXR1cm4gcn1mdW5jdGlvbiBJKHQsbil7Zm9yKHZhciByPXQubGVuZ3RoO3ItLSYmLTE8ZChuLHRbcl0sMCk7KTtyZXR1cm4gcn1mdW5jdGlvbiBSKHQpe3JldHVybiB0JiZ0Lk9iamVjdD09PU9iamVjdD90Om51bGx9ZnVuY3Rpb24gVyh0KXtyZXR1cm4genRbdF19ZnVuY3Rpb24gQih0KXtyZXR1cm4gVXRbdF19ZnVuY3Rpb24gTCh0KXtyZXR1cm5cIlxcXFxcIitEdFt0XX1mdW5jdGlvbiBNKHQsbixyKXt2YXIgZT10Lmxlbmd0aDtmb3Iobis9cj8xOi0xO3I/bi0tOisrbjxlOyl7dmFyIHU9dFtuXTtpZih1IT09dSlyZXR1cm4gbn1yZXR1cm4tMTtcbn1mdW5jdGlvbiBDKHQpe3ZhciBuPWZhbHNlO2lmKG51bGwhPXQmJnR5cGVvZiB0LnRvU3RyaW5nIT1cImZ1bmN0aW9uXCIpdHJ5e249ISEodCtcIlwiKX1jYXRjaChyKXt9cmV0dXJuIG59ZnVuY3Rpb24geih0KXtmb3IodmFyIG4scj1bXTshKG49dC5uZXh0KCkpLmRvbmU7KXIucHVzaChuLnZhbHVlKTtyZXR1cm4gcn1mdW5jdGlvbiBVKHQpe3ZhciBuPS0xLHI9QXJyYXkodC5zaXplKTtyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7clsrK25dPVtlLHRdfSkscn1mdW5jdGlvbiAkKHQsbil7Zm9yKHZhciByPS0xLGU9dC5sZW5ndGgsdT0wLG89W107KytyPGU7KXt2YXIgaT10W3JdO2khPT1uJiZcIl9fbG9kYXNoX3BsYWNlaG9sZGVyX19cIiE9PWl8fCh0W3JdPVwiX19sb2Rhc2hfcGxhY2Vob2xkZXJfX1wiLG9bdSsrXT1yKX1yZXR1cm4gb31mdW5jdGlvbiBEKHQpe3ZhciBuPS0xLHI9QXJyYXkodC5zaXplKTtyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JbKytuXT10fSkscn1mdW5jdGlvbiBGKHQpe1xuXHR2YXIgbj0tMSxyPUFycmF5KHQuc2l6ZSk7cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbih0KXtyWysrbl09W3QsdF19KSxyfWZ1bmN0aW9uIE4odCl7aWYoIXR8fCFXdC50ZXN0KHQpKXJldHVybiB0Lmxlbmd0aDtmb3IodmFyIG49SXQubGFzdEluZGV4PTA7SXQudGVzdCh0KTspbisrO3JldHVybiBufWZ1bmN0aW9uIFAodCl7cmV0dXJuICR0W3RdfWZ1bmN0aW9uIFooUil7ZnVuY3Rpb24gQXQodCxuKXtyZXR1cm4gUi5zZXRUaW1lb3V0LmNhbGwoS3QsdCxuKX1mdW5jdGlvbiBPdCh0KXtpZihUZSh0KSYmIXlpKHQpJiYhKHQgaW5zdGFuY2VvZiBVdCkpe2lmKHQgaW5zdGFuY2VvZiB6dClyZXR1cm4gdDtpZihXdS5jYWxsKHQsXCJfX3dyYXBwZWRfX1wiKSlyZXR1cm4gYWUodCl9cmV0dXJuIG5ldyB6dCh0KX1mdW5jdGlvbiBrdCgpe31mdW5jdGlvbiB6dCh0LG4pe3RoaXMuX193cmFwcGVkX189dCx0aGlzLl9fYWN0aW9uc19fPVtdLHRoaXMuX19jaGFpbl9fPSEhbix0aGlzLl9faW5kZXhfXz0wLFxuXHR0aGlzLl9fdmFsdWVzX189VH1mdW5jdGlvbiBVdCh0KXt0aGlzLl9fd3JhcHBlZF9fPXQsdGhpcy5fX2FjdGlvbnNfXz1bXSx0aGlzLl9fZGlyX189MSx0aGlzLl9fZmlsdGVyZWRfXz1mYWxzZSx0aGlzLl9faXRlcmF0ZWVzX189W10sdGhpcy5fX3Rha2VDb3VudF9fPTQyOTQ5NjcyOTUsdGhpcy5fX3ZpZXdzX189W119ZnVuY3Rpb24gJHQodCl7dmFyIG49LTEscj10P3QubGVuZ3RoOjA7Zm9yKHRoaXMuY2xlYXIoKTsrK248cjspe3ZhciBlPXRbbl07dGhpcy5zZXQoZVswXSxlWzFdKX19ZnVuY3Rpb24gRHQodCl7dmFyIG49LTEscj10P3QubGVuZ3RoOjA7Zm9yKHRoaXMuY2xlYXIoKTsrK248cjspe3ZhciBlPXRbbl07dGhpcy5zZXQoZVswXSxlWzFdKX19ZnVuY3Rpb24gUHQodCl7dmFyIG49LTEscj10P3QubGVuZ3RoOjA7Zm9yKHRoaXMuY2xlYXIoKTsrK248cjspe3ZhciBlPXRbbl07dGhpcy5zZXQoZVswXSxlWzFdKX19ZnVuY3Rpb24gWnQodCl7dmFyIG49LTEscj10P3QubGVuZ3RoOjA7XG5cdGZvcih0aGlzLl9fZGF0YV9fPW5ldyBQdDsrK248cjspdGhpcy5hZGQodFtuXSl9ZnVuY3Rpb24gcXQodCl7dGhpcy5fX2RhdGFfXz1uZXcgRHQodCl9ZnVuY3Rpb24gVnQodCxuLHIsZSl7cmV0dXJuIHQ9PT1UfHxDZSh0LGt1W3JdKSYmIVd1LmNhbGwoZSxyKT9uOnR9ZnVuY3Rpb24gSnQodCxuLHIpeyhyPT09VHx8Q2UodFtuXSxyKSkmJih0eXBlb2YgbiE9XCJudW1iZXJcInx8ciE9PVR8fG4gaW4gdCl8fCh0W25dPXIpfWZ1bmN0aW9uIFl0KHQsbixyKXt2YXIgZT10W25dO1d1LmNhbGwodCxuKSYmQ2UoZSxyKSYmKHIhPT1UfHxuIGluIHQpfHwodFtuXT1yKX1mdW5jdGlvbiBIdCh0LG4pe2Zvcih2YXIgcj10Lmxlbmd0aDtyLS07KWlmKENlKHRbcl1bMF0sbikpcmV0dXJuIHI7cmV0dXJuLTF9ZnVuY3Rpb24gUXQodCxuLHIsZSl7cmV0dXJuIEFvKHQsZnVuY3Rpb24odCx1LG8pe24oZSx0LHIodCksbyl9KSxlfWZ1bmN0aW9uIFh0KHQsbil7cmV0dXJuIHQmJnNyKG4saXUobiksdCl9XG5cdGZ1bmN0aW9uIHRuKHQsbil7Zm9yKHZhciByPS0xLGU9bnVsbD09dCx1PW4ubGVuZ3RoLG89QXJyYXkodSk7KytyPHU7KW9bcl09ZT9UOnV1KHQsbltyXSk7cmV0dXJuIG99ZnVuY3Rpb24gbm4odCxuLHIpe3JldHVybiB0PT09dCYmKHIhPT1UJiYodD1yPj10P3Q6ciksbiE9PVQmJih0PXQ+PW4/dDpuKSksdH1mdW5jdGlvbiBybih0LG4scixlLG8saSxmKXt2YXIgYztpZihlJiYoYz1pP2UodCxvLGksZik6ZSh0KSksYyE9PVQpcmV0dXJuIGM7aWYoIVplKHQpKXJldHVybiB0O2lmKG89eWkodCkpe2lmKGM9S3IodCksIW4pcmV0dXJuIGxyKHQsYyl9ZWxzZXt2YXIgYT1xcih0KSxsPVwiW29iamVjdCBGdW5jdGlvbl1cIj09YXx8XCJbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXVwiPT1hO2lmKGJpKHQpKXJldHVybiBvcih0LG4pO2lmKFwiW29iamVjdCBPYmplY3RdXCI9PWF8fFwiW29iamVjdCBBcmd1bWVudHNdXCI9PWF8fGwmJiFpKXtpZihDKHQpKXJldHVybiBpP3Q6e307aWYoYz1HcihsP3t9OnQpLFxuXHRcdFx0IW4pcmV0dXJuIGhyKHQsWHQoYyx0KSl9ZWxzZXtpZighQ3RbYV0pcmV0dXJuIGk/dDp7fTtjPUpyKHQsYSxybixuKX19aWYoZnx8KGY9bmV3IHF0KSxpPWYuZ2V0KHQpKXJldHVybiBpO2lmKGYuc2V0KHQsYyksIW8pdmFyIHM9cj9nbih0LGl1LFRyKTppdSh0KTtyZXR1cm4gdShzfHx0LGZ1bmN0aW9uKHUsbyl7cyYmKG89dSx1PXRbb10pLFl0KGMsbyxybih1LG4scixlLG8sdCxmKSl9KSxjfWZ1bmN0aW9uIGVuKHQpe3ZhciBuPWl1KHQpLHI9bi5sZW5ndGg7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKG51bGw9PWUpcmV0dXJuIXI7Zm9yKHZhciB1PXI7dS0tOyl7dmFyIG89blt1XSxpPXRbb10sZj1lW29dO2lmKGY9PT1UJiYhKG8gaW4gT2JqZWN0KGUpKXx8IWkoZikpcmV0dXJuIGZhbHNlfXJldHVybiB0cnVlfX1mdW5jdGlvbiB1bih0KXtyZXR1cm4gWmUodCk/VHUodCk6e319ZnVuY3Rpb24gb24odCxuLHIpe2lmKHR5cGVvZiB0IT1cImZ1bmN0aW9uXCIpdGhyb3cgbmV3IEF1KFwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiKTtcblx0XHRyZXR1cm4gQXQoZnVuY3Rpb24oKXt0LmFwcGx5KFQscil9LG4pfWZ1bmN0aW9uIGZuKHQsbixyLGUpe3ZhciB1PS0xLG89YyxpPXRydWUsZj10Lmxlbmd0aCxzPVtdLGg9bi5sZW5ndGg7aWYoIWYpcmV0dXJuIHM7ciYmKG49bChuLE8ocikpKSxlPyhvPWEsaT1mYWxzZSk6bi5sZW5ndGg+PTIwMCYmKG89RSxpPWZhbHNlLG49bmV3IFp0KG4pKTt0OmZvcig7Kyt1PGY7KXt2YXIgcD10W3VdLF89cj9yKHApOnAscD1lfHwwIT09cD9wOjA7aWYoaSYmXz09PV8pe2Zvcih2YXIgdj1oO3YtLTspaWYoblt2XT09PV8pY29udGludWUgdDtzLnB1c2gocCl9ZWxzZSBvKG4sXyxlKXx8cy5wdXNoKHApfXJldHVybiBzfWZ1bmN0aW9uIGNuKHQsbil7dmFyIHI9dHJ1ZTtyZXR1cm4gQW8odCxmdW5jdGlvbih0LGUsdSl7cmV0dXJuIHI9ISFuKHQsZSx1KX0pLHJ9ZnVuY3Rpb24gYW4odCxuLHIpe2Zvcih2YXIgZT0tMSx1PXQubGVuZ3RoOysrZTx1Oyl7dmFyIG89dFtlXSxpPW4obyk7aWYobnVsbCE9aSYmKGY9PT1UP2k9PT1pJiYhSmUoaSk6cihpLGYpKSl2YXIgZj1pLGM9bztcblx0fXJldHVybiBjfWZ1bmN0aW9uIGxuKHQsbil7dmFyIHI9W107cmV0dXJuIEFvKHQsZnVuY3Rpb24odCxlLHUpe24odCxlLHUpJiZyLnB1c2godCl9KSxyfWZ1bmN0aW9uIHNuKHQsbixyLGUsdSl7dmFyIG89LTEsaT10Lmxlbmd0aDtmb3Iocnx8KHI9SHIpLHV8fCh1PVtdKTsrK288aTspe3ZhciBmPXRbb107bj4wJiZyKGYpP24+MT9zbihmLG4tMSxyLGUsdSk6cyh1LGYpOmV8fCh1W3UubGVuZ3RoXT1mKX1yZXR1cm4gdX1mdW5jdGlvbiBobih0LG4pe3JldHVybiB0JiZrbyh0LG4saXUpfWZ1bmN0aW9uIHBuKHQsbil7cmV0dXJuIHQmJkVvKHQsbixpdSl9ZnVuY3Rpb24gX24odCxuKXtyZXR1cm4gZihuLGZ1bmN0aW9uKG4pe3JldHVybiBGZSh0W25dKX0pfWZ1bmN0aW9uIHZuKHQsbil7bj1uZShuLHQpP1tuXTplcihuKTtmb3IodmFyIHI9MCxlPW4ubGVuZ3RoO251bGwhPXQmJmU+cjspdD10W2ZlKG5bcisrXSldO3JldHVybiByJiZyPT1lP3Q6VH1mdW5jdGlvbiBnbih0LG4scil7XG5cdFx0cmV0dXJuIG49bih0KSx5aSh0KT9uOnMobixyKHQpKX1mdW5jdGlvbiBkbih0LG4pe3JldHVybiB0Pm59ZnVuY3Rpb24geW4odCxuKXtyZXR1cm4gbnVsbCE9dCYmKFd1LmNhbGwodCxuKXx8dHlwZW9mIHQ9PVwib2JqZWN0XCImJm4gaW4gdCYmbnVsbD09PUp1KE9iamVjdCh0KSkpfWZ1bmN0aW9uIGJuKHQsbil7cmV0dXJuIG51bGwhPXQmJm4gaW4gT2JqZWN0KHQpfWZ1bmN0aW9uIHhuKHQsbixyKXtmb3IodmFyIGU9cj9hOmMsdT10WzBdLmxlbmd0aCxvPXQubGVuZ3RoLGk9byxmPUFycmF5KG8pLHM9MS8wLGg9W107aS0tOyl7dmFyIHA9dFtpXTtpJiZuJiYocD1sKHAsTyhuKSkpLHM9dG8ocC5sZW5ndGgscyksZltpXT0hciYmKG58fHU+PTEyMCYmcC5sZW5ndGg+PTEyMCk/bmV3IFp0KGkmJnApOlR9dmFyIHA9dFswXSxfPS0xLHY9ZlswXTt0OmZvcig7KytfPHUmJnM+aC5sZW5ndGg7KXt2YXIgZz1wW19dLGQ9bj9uKGcpOmcsZz1yfHwwIT09Zz9nOjA7aWYodj8hRSh2LGQpOiFlKGgsZCxyKSl7XG5cdFx0Zm9yKGk9bzstLWk7KXt2YXIgeT1mW2ldO2lmKHk/IUUoeSxkKTohZSh0W2ldLGQscikpY29udGludWUgdH12JiZ2LnB1c2goZCksaC5wdXNoKGcpfX1yZXR1cm4gaH1mdW5jdGlvbiBqbih0LG4scil7dmFyIGU9e307cmV0dXJuIGhuKHQsZnVuY3Rpb24odCx1LG8pe24oZSxyKHQpLHUsbyl9KSxlfWZ1bmN0aW9uIHduKHQsbixlKXtyZXR1cm4gbmUobix0KXx8KG49ZXIobiksdD1pZSh0LG4pLG49dmUobikpLG49bnVsbD09dD90OnRbZmUobildLG51bGw9PW4/VDpyKG4sdCxlKX1mdW5jdGlvbiBtbih0LG4scixlLHUpe2lmKHQ9PT1uKW49dHJ1ZTtlbHNlIGlmKG51bGw9PXR8fG51bGw9PW58fCFaZSh0KSYmIVRlKG4pKW49dCE9PXQmJm4hPT1uO2Vsc2UgdDp7dmFyIG89eWkodCksaT15aShuKSxmPVwiW29iamVjdCBBcnJheV1cIixjPVwiW29iamVjdCBBcnJheV1cIjtvfHwoZj1xcih0KSxmPVwiW29iamVjdCBBcmd1bWVudHNdXCI9PWY/XCJbb2JqZWN0IE9iamVjdF1cIjpmKSxpfHwoYz1xcihuKSxcblx0XHRjPVwiW29iamVjdCBBcmd1bWVudHNdXCI9PWM/XCJbb2JqZWN0IE9iamVjdF1cIjpjKTt2YXIgYT1cIltvYmplY3QgT2JqZWN0XVwiPT1mJiYhQyh0KSxpPVwiW29iamVjdCBPYmplY3RdXCI9PWMmJiFDKG4pO2lmKChjPWY9PWMpJiYhYSl1fHwodT1uZXcgcXQpLG49b3x8WWUodCk/enIodCxuLG1uLHIsZSx1KTpVcih0LG4sZixtbixyLGUsdSk7ZWxzZXtpZighKDImZSkmJihvPWEmJld1LmNhbGwodCxcIl9fd3JhcHBlZF9fXCIpLGY9aSYmV3UuY2FsbChuLFwiX193cmFwcGVkX19cIiksb3x8Zikpe3Q9bz90LnZhbHVlKCk6dCxuPWY/bi52YWx1ZSgpOm4sdXx8KHU9bmV3IHF0KSxuPW1uKHQsbixyLGUsdSk7YnJlYWsgdH1pZihjKW46aWYodXx8KHU9bmV3IHF0KSxvPTImZSxmPWl1KHQpLGk9Zi5sZW5ndGgsYz1pdShuKS5sZW5ndGgsaT09Y3x8byl7Zm9yKGE9aTthLS07KXt2YXIgbD1mW2FdO2lmKCEobz9sIGluIG46eW4obixsKSkpe249ZmFsc2U7YnJlYWsgbn19aWYoYz11LmdldCh0KSluPWM9PW47ZWxzZXtcblx0XHRjPXRydWUsdS5zZXQodCxuKTtmb3IodmFyIHM9bzsrK2E8aTspe3ZhciBsPWZbYV0saD10W2xdLHA9bltsXTtpZihyKXZhciBfPW8/cihwLGgsbCxuLHQsdSk6cihoLHAsbCx0LG4sdSk7aWYoXz09PVQ/aCE9PXAmJiFtbihoLHAscixlLHUpOiFfKXtjPWZhbHNlO2JyZWFrfXN8fChzPVwiY29uc3RydWN0b3JcIj09bCl9YyYmIXMmJihyPXQuY29uc3RydWN0b3IsZT1uLmNvbnN0cnVjdG9yLHIhPWUmJlwiY29uc3RydWN0b3JcImluIHQmJlwiY29uc3RydWN0b3JcImluIG4mJiEodHlwZW9mIHI9PVwiZnVuY3Rpb25cIiYmciBpbnN0YW5jZW9mIHImJnR5cGVvZiBlPT1cImZ1bmN0aW9uXCImJmUgaW5zdGFuY2VvZiBlKSYmKGM9ZmFsc2UpKSx1W1wiZGVsZXRlXCJdKHQpLG49Y319ZWxzZSBuPWZhbHNlO2Vsc2Ugbj1mYWxzZX19cmV0dXJuIG59ZnVuY3Rpb24gQW4odCxuLHIsZSl7dmFyIHU9ci5sZW5ndGgsbz11LGk9IWU7aWYobnVsbD09dClyZXR1cm4hbztmb3IodD1PYmplY3QodCk7dS0tOyl7dmFyIGY9clt1XTtpZihpJiZmWzJdP2ZbMV0hPT10W2ZbMF1dOiEoZlswXWluIHQpKXJldHVybiBmYWxzZTtcblx0fWZvcig7Kyt1PG87KXt2YXIgZj1yW3VdLGM9ZlswXSxhPXRbY10sbD1mWzFdO2lmKGkmJmZbMl0pe2lmKGE9PT1UJiYhKGMgaW4gdCkpcmV0dXJuIGZhbHNlfWVsc2V7aWYoZj1uZXcgcXQsZSl2YXIgcz1lKGEsbCxjLHQsbixmKTtpZihzPT09VD8hbW4obCxhLGUsMyxmKTohcylyZXR1cm4gZmFsc2V9fXJldHVybiB0cnVlfWZ1bmN0aW9uIE9uKHQpe3JldHVybiFaZSh0KXx8SXUmJkl1IGluIHQ/ZmFsc2U6KEZlKHQpfHxDKHQpP3p1Onl0KS50ZXN0KGNlKHQpKX1mdW5jdGlvbiBrbih0KXtyZXR1cm4gdHlwZW9mIHQ9PVwiZnVuY3Rpb25cIj90Om51bGw9PXQ/cHU6dHlwZW9mIHQ9PVwib2JqZWN0XCI/eWkodCk/V24odFswXSx0WzFdKTpSbih0KTpkdSh0KX1mdW5jdGlvbiBFbih0KXt0PW51bGw9PXQ/dDpPYmplY3QodCk7dmFyIG4scj1bXTtmb3IobiBpbiB0KXIucHVzaChuKTtyZXR1cm4gcn1mdW5jdGlvbiBTbih0LG4pe3JldHVybiBuPnR9ZnVuY3Rpb24gSW4odCxuKXt2YXIgcj0tMSxlPVVlKHQpP0FycmF5KHQubGVuZ3RoKTpbXTtcblx0XHRyZXR1cm4gQW8odCxmdW5jdGlvbih0LHUsbyl7ZVsrK3JdPW4odCx1LG8pfSksZX1mdW5jdGlvbiBSbih0KXt2YXIgbj1Qcih0KTtyZXR1cm4gMT09bi5sZW5ndGgmJm5bMF1bMl0/dWUoblswXVswXSxuWzBdWzFdKTpmdW5jdGlvbihyKXtyZXR1cm4gcj09PXR8fEFuKHIsdCxuKX19ZnVuY3Rpb24gV24odCxuKXtyZXR1cm4gbmUodCkmJm49PT1uJiYhWmUobik/dWUoZmUodCksbik6ZnVuY3Rpb24ocil7dmFyIGU9dXUocix0KTtyZXR1cm4gZT09PVQmJmU9PT1uP291KHIsdCk6bW4obixlLFQsMyl9fWZ1bmN0aW9uIEJuKHQsbixyLGUsbyl7aWYodCE9PW4pe2lmKCF5aShuKSYmIVllKG4pKXZhciBpPWZ1KG4pO3UoaXx8bixmdW5jdGlvbih1LGYpe2lmKGkmJihmPXUsdT1uW2ZdKSxaZSh1KSl7b3x8KG89bmV3IHF0KTt2YXIgYz1mLGE9byxsPXRbY10scz1uW2NdLGg9YS5nZXQocyk7aWYoaClKdCh0LGMsaCk7ZWxzZXt2YXIgaD1lP2UobCxzLGMrXCJcIix0LG4sYSk6VCxwPWg9PT1UO3AmJihoPXMsXG5cdFx0eWkocyl8fFllKHMpP3lpKGwpP2g9bDokZShsKT9oPWxyKGwpOihwPWZhbHNlLGg9cm4ocyx0cnVlKSk6VmUocyl8fHplKHMpP3plKGwpP2g9cnUobCk6IVplKGwpfHxyJiZGZShsKT8ocD1mYWxzZSxoPXJuKHMsdHJ1ZSkpOmg9bDpwPWZhbHNlKSxhLnNldChzLGgpLHAmJkJuKGgscyxyLGUsYSksYVtcImRlbGV0ZVwiXShzKSxKdCh0LGMsaCl9fWVsc2UgYz1lP2UodFtmXSx1LGYrXCJcIix0LG4sbyk6VCxjPT09VCYmKGM9dSksSnQodCxmLGMpfSl9fWZ1bmN0aW9uIExuKHQsbil7dmFyIHI9dC5sZW5ndGg7cmV0dXJuIHI/KG4rPTA+bj9yOjAsWHIobixyKT90W25dOlQpOnZvaWQgMH1mdW5jdGlvbiBNbih0LG4scil7dmFyIGU9LTE7cmV0dXJuIG49bChuLmxlbmd0aD9uOltwdV0sTyhGcigpKSksdD1Jbih0LGZ1bmN0aW9uKHQpe3JldHVybnthOmwobixmdW5jdGlvbihuKXtyZXR1cm4gbih0KX0pLGI6KytlLGM6dH19KSxqKHQsZnVuY3Rpb24odCxuKXt2YXIgZTt0OntlPS0xO2Zvcih2YXIgdT10LmEsbz1uLmEsaT11Lmxlbmd0aCxmPXIubGVuZ3RoOysrZTxpOyl7XG5cdFx0dmFyIGM9ZnIodVtlXSxvW2VdKTtpZihjKXtlPWU+PWY/YzpjKihcImRlc2NcIj09cltlXT8tMToxKTticmVhayB0fX1lPXQuYi1uLmJ9cmV0dXJuIGV9KX1mdW5jdGlvbiBDbih0LG4pe3JldHVybiB0PU9iamVjdCh0KSxoKG4sZnVuY3Rpb24obixyKXtyZXR1cm4gciBpbiB0JiYobltyXT10W3JdKSxufSx7fSl9ZnVuY3Rpb24gem4odCxuKXtmb3IodmFyIHI9LTEsZT1nbih0LGZ1LEJvKSx1PWUubGVuZ3RoLG89e307KytyPHU7KXt2YXIgaT1lW3JdLGY9dFtpXTtuKGYsaSkmJihvW2ldPWYpfXJldHVybiBvfWZ1bmN0aW9uIFVuKHQpe3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gbnVsbD09bj9UOm5bdF19fWZ1bmN0aW9uICRuKHQpe3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gdm4obix0KX19ZnVuY3Rpb24gRG4odCxuLHIsZSl7dmFyIHU9ZT95OmQsbz0tMSxpPW4ubGVuZ3RoLGY9dDtmb3IodD09PW4mJihuPWxyKG4pKSxyJiYoZj1sKHQsTyhyKSkpOysrbzxpOylmb3IodmFyIGM9MCxhPW5bb10sYT1yP3IoYSk6YTstMTwoYz11KGYsYSxjLGUpKTspZiE9PXQmJlZ1LmNhbGwoZixjLDEpLFxuXHRcdFZ1LmNhbGwodCxjLDEpO3JldHVybiB0fWZ1bmN0aW9uIEZuKHQsbil7Zm9yKHZhciByPXQ/bi5sZW5ndGg6MCxlPXItMTtyLS07KXt2YXIgdT1uW3JdO2lmKHI9PWV8fHUhPT1vKXt2YXIgbz11O2lmKFhyKHUpKVZ1LmNhbGwodCx1LDEpO2Vsc2UgaWYobmUodSx0KSlkZWxldGUgdFtmZSh1KV07ZWxzZXt2YXIgdT1lcih1KSxpPWllKHQsdSk7bnVsbCE9aSYmZGVsZXRlIGlbZmUodmUodSkpXX19fX1mdW5jdGlvbiBObih0LG4pe3JldHVybiB0K0d1KHJvKCkqKG4tdCsxKSl9ZnVuY3Rpb24gUG4odCxuKXt2YXIgcj1cIlwiO2lmKCF0fHwxPm58fG4+OTAwNzE5OTI1NDc0MDk5MSlyZXR1cm4gcjtkbyBuJTImJihyKz10KSwobj1HdShuLzIpKSYmKHQrPXQpO3doaWxlKG4pO3JldHVybiByfWZ1bmN0aW9uIFpuKHQsbixyLGUpe249bmUobix0KT9bbl06ZXIobik7Zm9yKHZhciB1PS0xLG89bi5sZW5ndGgsaT1vLTEsZj10O251bGwhPWYmJisrdTxvOyl7dmFyIGM9ZmUoblt1XSk7aWYoWmUoZikpe1xuXHRcdHZhciBhPXI7aWYodSE9aSl7dmFyIGw9ZltjXSxhPWU/ZShsLGMsZik6VDthPT09VCYmKGE9bnVsbD09bD9YcihuW3UrMV0pP1tdOnt9OmwpfVl0KGYsYyxhKX1mPWZbY119cmV0dXJuIHR9ZnVuY3Rpb24gVG4odCxuLHIpe3ZhciBlPS0xLHU9dC5sZW5ndGg7Zm9yKDA+biYmKG49LW4+dT8wOnUrbikscj1yPnU/dTpyLDA+ciYmKHIrPXUpLHU9bj5yPzA6ci1uPj4+MCxuPj4+PTAscj1BcnJheSh1KTsrK2U8dTspcltlXT10W2Urbl07cmV0dXJuIHJ9ZnVuY3Rpb24gcW4odCxuKXt2YXIgcjtyZXR1cm4gQW8odCxmdW5jdGlvbih0LGUsdSl7cmV0dXJuIHI9bih0LGUsdSksIXJ9KSwhIXJ9ZnVuY3Rpb24gVm4odCxuLHIpe3ZhciBlPTAsdT10P3QubGVuZ3RoOmU7aWYodHlwZW9mIG49PVwibnVtYmVyXCImJm49PT1uJiYyMTQ3NDgzNjQ3Pj11KXtmb3IoO3U+ZTspe3ZhciBvPWUrdT4+PjEsaT10W29dO251bGwhPT1pJiYhSmUoaSkmJihyP24+PWk6bj5pKT9lPW8rMTp1PW99cmV0dXJuIHV9XG5cdFx0cmV0dXJuIEtuKHQsbixwdSxyKX1mdW5jdGlvbiBLbih0LG4scixlKXtuPXIobik7Zm9yKHZhciB1PTAsbz10P3QubGVuZ3RoOjAsaT1uIT09bixmPW51bGw9PT1uLGM9SmUobiksYT1uPT09VDtvPnU7KXt2YXIgbD1HdSgodStvKS8yKSxzPXIodFtsXSksaD1zIT09VCxwPW51bGw9PT1zLF89cz09PXMsdj1KZShzKTsoaT9lfHxfOmE/XyYmKGV8fGgpOmY/XyYmaCYmKGV8fCFwKTpjP18mJmgmJiFwJiYoZXx8IXYpOnB8fHY/MDplP24+PXM6bj5zKT91PWwrMTpvPWx9cmV0dXJuIHRvKG8sNDI5NDk2NzI5NCl9ZnVuY3Rpb24gR24odCxuKXtmb3IodmFyIHI9LTEsZT10Lmxlbmd0aCx1PTAsbz1bXTsrK3I8ZTspe3ZhciBpPXRbcl0sZj1uP24oaSk6aTtpZighcnx8IUNlKGYsYykpe3ZhciBjPWY7b1t1KytdPTA9PT1pPzA6aX19cmV0dXJuIG99ZnVuY3Rpb24gSm4odCl7cmV0dXJuIHR5cGVvZiB0PT1cIm51bWJlclwiP3Q6SmUodCk/VjordH1mdW5jdGlvbiBZbih0KXtpZih0eXBlb2YgdD09XCJzdHJpbmdcIilyZXR1cm4gdDtcblx0XHRpZihKZSh0KSlyZXR1cm4gbW8/bW8uY2FsbCh0KTpcIlwiO3ZhciBuPXQrXCJcIjtyZXR1cm5cIjBcIj09biYmMS90PT0tcT9cIi0wXCI6bn1mdW5jdGlvbiBIbih0LG4scil7dmFyIGU9LTEsdT1jLG89dC5sZW5ndGgsaT10cnVlLGY9W10sbD1mO2lmKHIpaT1mYWxzZSx1PWE7ZWxzZSBpZihvPj0yMDApe2lmKHU9bj9udWxsOklvKHQpKXJldHVybiBEKHUpO2k9ZmFsc2UsdT1FLGw9bmV3IFp0fWVsc2UgbD1uP1tdOmY7dDpmb3IoOysrZTxvOyl7dmFyIHM9dFtlXSxoPW4/bihzKTpzLHM9cnx8MCE9PXM/czowO2lmKGkmJmg9PT1oKXtmb3IodmFyIHA9bC5sZW5ndGg7cC0tOylpZihsW3BdPT09aCljb250aW51ZSB0O24mJmwucHVzaChoKSxmLnB1c2gocyl9ZWxzZSB1KGwsaCxyKXx8KGwhPT1mJiZsLnB1c2goaCksZi5wdXNoKHMpKX1yZXR1cm4gZn1mdW5jdGlvbiBRbih0LG4scixlKXtmb3IodmFyIHU9dC5sZW5ndGgsbz1lP3U6LTE7KGU/by0tOisrbzx1KSYmbih0W29dLG8sdCk7KTtyZXR1cm4gcj9Ubih0LGU/MDpvLGU/bysxOnUpOlRuKHQsZT9vKzE6MCxlP3U6byk7XG5cdH1mdW5jdGlvbiBYbih0LG4pe3ZhciByPXQ7cmV0dXJuIHIgaW5zdGFuY2VvZiBVdCYmKHI9ci52YWx1ZSgpKSxoKG4sZnVuY3Rpb24odCxuKXtyZXR1cm4gbi5mdW5jLmFwcGx5KG4udGhpc0FyZyxzKFt0XSxuLmFyZ3MpKX0scil9ZnVuY3Rpb24gdHIodCxuLHIpe2Zvcih2YXIgZT0tMSx1PXQubGVuZ3RoOysrZTx1Oyl2YXIgbz1vP3MoZm4obyx0W2VdLG4sciksZm4odFtlXSxvLG4scikpOnRbZV07cmV0dXJuIG8mJm8ubGVuZ3RoP0huKG8sbixyKTpbXX1mdW5jdGlvbiBucih0LG4scil7Zm9yKHZhciBlPS0xLHU9dC5sZW5ndGgsbz1uLmxlbmd0aCxpPXt9OysrZTx1OylyKGksdFtlXSxvPmU/bltlXTpUKTtyZXR1cm4gaX1mdW5jdGlvbiBycih0KXtyZXR1cm4gJGUodCk/dDpbXX1mdW5jdGlvbiBlcih0KXtyZXR1cm4geWkodCk/dDpDbyh0KX1mdW5jdGlvbiB1cih0LG4scil7dmFyIGU9dC5sZW5ndGg7cmV0dXJuIHI9cj09PVQ/ZTpyLCFuJiZyPj1lP3Q6VG4odCxuLHIpfWZ1bmN0aW9uIG9yKHQsbil7XG5cdFx0aWYobilyZXR1cm4gdC5zbGljZSgpO3ZhciByPW5ldyB0LmNvbnN0cnVjdG9yKHQubGVuZ3RoKTtyZXR1cm4gdC5jb3B5KHIpLHJ9ZnVuY3Rpb24gaXIodCl7dmFyIG49bmV3IHQuY29uc3RydWN0b3IodC5ieXRlTGVuZ3RoKTtyZXR1cm4gbmV3IEZ1KG4pLnNldChuZXcgRnUodCkpLG59ZnVuY3Rpb24gZnIodCxuKXtpZih0IT09bil7dmFyIHI9dCE9PVQsZT1udWxsPT09dCx1PXQ9PT10LG89SmUodCksaT1uIT09VCxmPW51bGw9PT1uLGM9bj09PW4sYT1KZShuKTtpZighZiYmIWEmJiFvJiZ0Pm58fG8mJmkmJmMmJiFmJiYhYXx8ZSYmaSYmY3x8IXImJmN8fCF1KXJldHVybiAxO2lmKCFlJiYhbyYmIWEmJm4+dHx8YSYmciYmdSYmIWUmJiFvfHxmJiZyJiZ1fHwhaSYmdXx8IWMpcmV0dXJuLTF9cmV0dXJuIDB9ZnVuY3Rpb24gY3IodCxuLHIsZSl7dmFyIHU9LTEsbz10Lmxlbmd0aCxpPXIubGVuZ3RoLGY9LTEsYz1uLmxlbmd0aCxhPVh1KG8taSwwKSxsPUFycmF5KGMrYSk7Zm9yKGU9IWU7KytmPGM7KWxbZl09bltmXTtcblx0XHRmb3IoOysrdTxpOykoZXx8bz51KSYmKGxbclt1XV09dFt1XSk7Zm9yKDthLS07KWxbZisrXT10W3UrK107cmV0dXJuIGx9ZnVuY3Rpb24gYXIodCxuLHIsZSl7dmFyIHU9LTEsbz10Lmxlbmd0aCxpPS0xLGY9ci5sZW5ndGgsYz0tMSxhPW4ubGVuZ3RoLGw9WHUoby1mLDApLHM9QXJyYXkobCthKTtmb3IoZT0hZTsrK3U8bDspc1t1XT10W3VdO2ZvcihsPXU7KytjPGE7KXNbbCtjXT1uW2NdO2Zvcig7KytpPGY7KShlfHxvPnUpJiYoc1tsK3JbaV1dPXRbdSsrXSk7cmV0dXJuIHN9ZnVuY3Rpb24gbHIodCxuKXt2YXIgcj0tMSxlPXQubGVuZ3RoO2ZvcihufHwobj1BcnJheShlKSk7KytyPGU7KW5bcl09dFtyXTtyZXR1cm4gbn1mdW5jdGlvbiBzcih0LG4scixlKXtyfHwocj17fSk7Zm9yKHZhciB1PS0xLG89bi5sZW5ndGg7Kyt1PG87KXt2YXIgaT1uW3VdLGY9ZT9lKHJbaV0sdFtpXSxpLHIsdCk6dFtpXTtZdChyLGksZil9cmV0dXJuIHJ9ZnVuY3Rpb24gaHIodCxuKXtyZXR1cm4gc3IodCxUcih0KSxuKTtcblx0fWZ1bmN0aW9uIHByKHQsbil7cmV0dXJuIGZ1bmN0aW9uKHIsdSl7dmFyIG89eWkocik/ZTpRdCxpPW4/bigpOnt9O3JldHVybiBvKHIsdCxGcih1KSxpKX19ZnVuY3Rpb24gX3IodCl7cmV0dXJuIE1lKGZ1bmN0aW9uKG4scil7dmFyIGU9LTEsdT1yLmxlbmd0aCxvPXU+MT9yW3UtMV06VCxpPXU+Mj9yWzJdOlQsbz10Lmxlbmd0aD4zJiZ0eXBlb2Ygbz09XCJmdW5jdGlvblwiPyh1LS0sbyk6VDtmb3IoaSYmdGUoclswXSxyWzFdLGkpJiYobz0zPnU/VDpvLHU9MSksbj1PYmplY3Qobik7KytlPHU7KShpPXJbZV0pJiZ0KG4saSxlLG8pO3JldHVybiBufSl9ZnVuY3Rpb24gdnIodCxuKXtyZXR1cm4gZnVuY3Rpb24ocixlKXtpZihudWxsPT1yKXJldHVybiByO2lmKCFVZShyKSlyZXR1cm4gdChyLGUpO2Zvcih2YXIgdT1yLmxlbmd0aCxvPW4/dTotMSxpPU9iamVjdChyKTsobj9vLS06KytvPHUpJiZmYWxzZSE9PWUoaVtvXSxvLGkpOyk7cmV0dXJuIHJ9fWZ1bmN0aW9uIGdyKHQpe3JldHVybiBmdW5jdGlvbihuLHIsZSl7XG5cdFx0dmFyIHU9LTEsbz1PYmplY3Qobik7ZT1lKG4pO2Zvcih2YXIgaT1lLmxlbmd0aDtpLS07KXt2YXIgZj1lW3Q/aTorK3VdO2lmKGZhbHNlPT09cihvW2ZdLGYsbykpYnJlYWt9cmV0dXJuIG59fWZ1bmN0aW9uIGRyKHQsbixyKXtmdW5jdGlvbiBlKCl7cmV0dXJuKHRoaXMmJnRoaXMhPT1LdCYmdGhpcyBpbnN0YW5jZW9mIGU/bzp0KS5hcHBseSh1P3I6dGhpcyxhcmd1bWVudHMpfXZhciB1PTEmbixvPXhyKHQpO3JldHVybiBlfWZ1bmN0aW9uIHlyKHQpe3JldHVybiBmdW5jdGlvbihuKXtuPWV1KG4pO3ZhciByPVd0LnRlc3Qobik/bi5tYXRjaChJdCk6VCxlPXI/clswXTpuLmNoYXJBdCgwKTtyZXR1cm4gbj1yP3VyKHIsMSkuam9pbihcIlwiKTpuLnNsaWNlKDEpLGVbdF0oKStufX1mdW5jdGlvbiBicih0KXtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIGgoc3UobHUobikucmVwbGFjZShFdCxcIlwiKSksdCxcIlwiKX19ZnVuY3Rpb24geHIodCl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49YXJndW1lbnRzO1xuXHRcdHN3aXRjaChuLmxlbmd0aCl7Y2FzZSAwOnJldHVybiBuZXcgdDtjYXNlIDE6cmV0dXJuIG5ldyB0KG5bMF0pO2Nhc2UgMjpyZXR1cm4gbmV3IHQoblswXSxuWzFdKTtjYXNlIDM6cmV0dXJuIG5ldyB0KG5bMF0sblsxXSxuWzJdKTtjYXNlIDQ6cmV0dXJuIG5ldyB0KG5bMF0sblsxXSxuWzJdLG5bM10pO2Nhc2UgNTpyZXR1cm4gbmV3IHQoblswXSxuWzFdLG5bMl0sblszXSxuWzRdKTtjYXNlIDY6cmV0dXJuIG5ldyB0KG5bMF0sblsxXSxuWzJdLG5bM10sbls0XSxuWzVdKTtjYXNlIDc6cmV0dXJuIG5ldyB0KG5bMF0sblsxXSxuWzJdLG5bM10sbls0XSxuWzVdLG5bNl0pfXZhciByPXVuKHQucHJvdG90eXBlKSxuPXQuYXBwbHkocixuKTtyZXR1cm4gWmUobik/bjpyfX1mdW5jdGlvbiBqcih0LG4sZSl7ZnVuY3Rpb24gdSgpe2Zvcih2YXIgaT1hcmd1bWVudHMubGVuZ3RoLGY9QXJyYXkoaSksYz1pLGE9RHIodSk7Yy0tOylmW2NdPWFyZ3VtZW50c1tjXTtyZXR1cm4gYz0zPmkmJmZbMF0hPT1hJiZmW2ktMV0hPT1hP1tdOiQoZixhKSxcblx0XHRpLT1jLmxlbmd0aCxlPmk/QnIodCxuLEFyLHUucGxhY2Vob2xkZXIsVCxmLGMsVCxULGUtaSk6cih0aGlzJiZ0aGlzIT09S3QmJnRoaXMgaW5zdGFuY2VvZiB1P286dCx0aGlzLGYpfXZhciBvPXhyKHQpO3JldHVybiB1fWZ1bmN0aW9uIHdyKHQpe3JldHVybiBmdW5jdGlvbihuLHIsZSl7dmFyIHU9T2JqZWN0KG4pO2lmKHI9RnIociwzKSwhVWUobikpdmFyIG89aXUobik7cmV0dXJuIGU9dChvfHxuLGZ1bmN0aW9uKHQsbil7cmV0dXJuIG8mJihuPXQsdD11W25dKSxyKHQsbix1KX0sZSksZT4tMT9uW28/b1tlXTplXTpUfX1mdW5jdGlvbiBtcih0KXtyZXR1cm4gTWUoZnVuY3Rpb24obil7bj1zbihuLDEpO3ZhciByPW4ubGVuZ3RoLGU9cix1PXp0LnByb3RvdHlwZS50aHJ1O2Zvcih0JiZuLnJldmVyc2UoKTtlLS07KXt2YXIgbz1uW2VdO2lmKHR5cGVvZiBvIT1cImZ1bmN0aW9uXCIpdGhyb3cgbmV3IEF1KFwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiKTtpZih1JiYhaSYmXCJ3cmFwcGVyXCI9PSRyKG8pKXZhciBpPW5ldyB6dChbXSx0cnVlKTtcblx0fWZvcihlPWk/ZTpyOysrZTxyOyl2YXIgbz1uW2VdLHU9JHIobyksZj1cIndyYXBwZXJcIj09dT9SbyhvKTpULGk9ZiYmcmUoZlswXSkmJjQyND09ZlsxXSYmIWZbNF0ubGVuZ3RoJiYxPT1mWzldP2lbJHIoZlswXSldLmFwcGx5KGksZlszXSk6MT09by5sZW5ndGgmJnJlKG8pP2lbdV0oKTppLnRocnUobyk7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLGU9dFswXTtpZihpJiYxPT10Lmxlbmd0aCYmeWkoZSkmJmUubGVuZ3RoPj0yMDApcmV0dXJuIGkucGxhbnQoZSkudmFsdWUoKTtmb3IodmFyIHU9MCx0PXI/blt1XS5hcHBseSh0aGlzLHQpOmU7Kyt1PHI7KXQ9blt1XS5jYWxsKHRoaXMsdCk7cmV0dXJuIHR9fSl9ZnVuY3Rpb24gQXIodCxuLHIsZSx1LG8saSxmLGMsYSl7ZnVuY3Rpb24gbCgpe2Zvcih2YXIgZD1hcmd1bWVudHMubGVuZ3RoLHk9QXJyYXkoZCksYj1kO2ItLTspeVtiXT1hcmd1bWVudHNbYl07aWYoXyl7dmFyIHgsaj1EcihsKSxiPXkubGVuZ3RoO2Zvcih4PTA7Yi0tOyl5W2JdPT09aiYmeCsrO1xuXHR9aWYoZSYmKHk9Y3IoeSxlLHUsXykpLG8mJih5PWFyKHksbyxpLF8pKSxkLT14LF8mJmE+ZClyZXR1cm4gaj0kKHksaiksQnIodCxuLEFyLGwucGxhY2Vob2xkZXIscix5LGosZixjLGEtZCk7aWYoaj1oP3I6dGhpcyxiPXA/alt0XTp0LGQ9eS5sZW5ndGgsZil7eD15Lmxlbmd0aDtmb3IodmFyIHc9dG8oZi5sZW5ndGgseCksbT1scih5KTt3LS07KXt2YXIgQT1mW3ddO3lbd109WHIoQSx4KT9tW0FdOlR9fWVsc2UgdiYmZD4xJiZ5LnJldmVyc2UoKTtyZXR1cm4gcyYmZD5jJiYoeS5sZW5ndGg9YyksdGhpcyYmdGhpcyE9PUt0JiZ0aGlzIGluc3RhbmNlb2YgbCYmKGI9Z3x8eHIoYikpLGIuYXBwbHkoaix5KX12YXIgcz0xMjgmbixoPTEmbixwPTImbixfPTI0Jm4sdj01MTImbixnPXA/VDp4cih0KTtyZXR1cm4gbH1mdW5jdGlvbiBPcih0LG4pe3JldHVybiBmdW5jdGlvbihyLGUpe3JldHVybiBqbihyLHQsbihlKSl9fWZ1bmN0aW9uIGtyKHQpe3JldHVybiBmdW5jdGlvbihuLHIpe3ZhciBlO1xuXHRcdGlmKG49PT1UJiZyPT09VClyZXR1cm4gMDtpZihuIT09VCYmKGU9biksciE9PVQpe2lmKGU9PT1UKXJldHVybiByO3R5cGVvZiBuPT1cInN0cmluZ1wifHx0eXBlb2Ygcj09XCJzdHJpbmdcIj8obj1ZbihuKSxyPVluKHIpKToobj1KbihuKSxyPUpuKHIpKSxlPXQobixyKX1yZXR1cm4gZX19ZnVuY3Rpb24gRXIodCl7cmV0dXJuIE1lKGZ1bmN0aW9uKG4pe3JldHVybiBuPTE9PW4ubGVuZ3RoJiZ5aShuWzBdKT9sKG5bMF0sTyhGcigpKSk6bChzbihuLDEsUXIpLE8oRnIoKSkpLE1lKGZ1bmN0aW9uKGUpe3ZhciB1PXRoaXM7cmV0dXJuIHQobixmdW5jdGlvbih0KXtyZXR1cm4gcih0LHUsZSl9KX0pfSl9ZnVuY3Rpb24gU3IodCxuKXtuPW49PT1UP1wiIFwiOlluKG4pO3ZhciByPW4ubGVuZ3RoO3JldHVybiAyPnI/cj9QbihuLHQpOm46KHI9UG4obixLdSh0L04obikpKSxXdC50ZXN0KG4pP3VyKHIubWF0Y2goSXQpLDAsdCkuam9pbihcIlwiKTpyLnNsaWNlKDAsdCkpfWZ1bmN0aW9uIElyKHQsbixlLHUpe1xuXHRcdGZ1bmN0aW9uIG8oKXtmb3IodmFyIG49LTEsYz1hcmd1bWVudHMubGVuZ3RoLGE9LTEsbD11Lmxlbmd0aCxzPUFycmF5KGwrYyksaD10aGlzJiZ0aGlzIT09S3QmJnRoaXMgaW5zdGFuY2VvZiBvP2Y6dDsrK2E8bDspc1thXT11W2FdO2Zvcig7Yy0tOylzW2ErK109YXJndW1lbnRzWysrbl07cmV0dXJuIHIoaCxpP2U6dGhpcyxzKX12YXIgaT0xJm4sZj14cih0KTtyZXR1cm4gb31mdW5jdGlvbiBScih0KXtyZXR1cm4gZnVuY3Rpb24obixyLGUpe2UmJnR5cGVvZiBlIT1cIm51bWJlclwiJiZ0ZShuLHIsZSkmJihyPWU9VCksbj1udShuKSxuPW49PT1uP246MCxyPT09VD8ocj1uLG49MCk6cj1udShyKXx8MCxlPWU9PT1UP3I+bj8xOi0xOm51KGUpfHwwO3ZhciB1PS0xO3I9WHUoS3UoKHItbikvKGV8fDEpKSwwKTtmb3IodmFyIG89QXJyYXkocik7ci0tOylvW3Q/cjorK3VdPW4sbis9ZTtyZXR1cm4gb319ZnVuY3Rpb24gV3IodCl7cmV0dXJuIGZ1bmN0aW9uKG4scil7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiZ0eXBlb2Ygcj09XCJzdHJpbmdcInx8KG49bnUobiksXG5cdFx0cj1udShyKSksdChuLHIpfX1mdW5jdGlvbiBCcih0LG4scixlLHUsbyxpLGYsYyxhKXt2YXIgbD04Jm4scz1sP2k6VDtpPWw/VDppO3ZhciBoPWw/bzpUO3JldHVybiBvPWw/VDpvLG49KG58KGw/MzI6NjQpKSZ+KGw/NjQ6MzIpLDQmbnx8KG4mPS00KSxuPVt0LG4sdSxoLHMsbyxpLGYsYyxhXSxyPXIuYXBwbHkoVCxuKSxyZSh0KSYmTW8ocixuKSxyLnBsYWNlaG9sZGVyPWUscn1mdW5jdGlvbiBMcih0KXt2YXIgbj13dVt0XTtyZXR1cm4gZnVuY3Rpb24odCxyKXtpZih0PW51KHQpLHI9dG8oWGUociksMjkyKSl7dmFyIGU9KGV1KHQpK1wiZVwiKS5zcGxpdChcImVcIiksZT1uKGVbMF0rXCJlXCIrKCtlWzFdK3IpKSxlPShldShlKStcImVcIikuc3BsaXQoXCJlXCIpO3JldHVybisoZVswXStcImVcIisoK2VbMV0tcikpfXJldHVybiBuKHQpfX1mdW5jdGlvbiBNcih0KXtyZXR1cm4gZnVuY3Rpb24obil7dmFyIHI9cXIobik7cmV0dXJuXCJbb2JqZWN0IE1hcF1cIj09cj9VKG4pOlwiW29iamVjdCBTZXRdXCI9PXI/RihuKTpBKG4sdChuKSk7XG5cdH19ZnVuY3Rpb24gQ3IodCxuLHIsZSx1LG8saSxmKXt2YXIgYz0yJm47aWYoIWMmJnR5cGVvZiB0IT1cImZ1bmN0aW9uXCIpdGhyb3cgbmV3IEF1KFwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiKTt2YXIgYT1lP2UubGVuZ3RoOjA7aWYoYXx8KG4mPS05NyxlPXU9VCksaT1pPT09VD9pOlh1KFhlKGkpLDApLGY9Zj09PVQ/ZjpYZShmKSxhLT11P3UubGVuZ3RoOjAsNjQmbil7dmFyIGw9ZSxzPXU7ZT11PVR9dmFyIGg9Yz9UOlJvKHQpO3JldHVybiBvPVt0LG4scixlLHUsbCxzLG8saSxmXSxoJiYocj1vWzFdLHQ9aFsxXSxuPXJ8dCxlPTEyOD09dCYmOD09cnx8MTI4PT10JiYyNTY9PXImJmhbOF0+PW9bN10ubGVuZ3RofHwzODQ9PXQmJmhbOF0+PWhbN10ubGVuZ3RoJiY4PT1yLDEzMT5ufHxlKSYmKDEmdCYmKG9bMl09aFsyXSxufD0xJnI/MDo0KSwocj1oWzNdKSYmKGU9b1szXSxvWzNdPWU/Y3IoZSxyLGhbNF0pOnIsb1s0XT1lPyQob1szXSxcIl9fbG9kYXNoX3BsYWNlaG9sZGVyX19cIik6aFs0XSksXG5cdChyPWhbNV0pJiYoZT1vWzVdLG9bNV09ZT9hcihlLHIsaFs2XSk6cixvWzZdPWU/JChvWzVdLFwiX19sb2Rhc2hfcGxhY2Vob2xkZXJfX1wiKTpoWzZdKSwocj1oWzddKSYmKG9bN109ciksMTI4JnQmJihvWzhdPW51bGw9PW9bOF0/aFs4XTp0byhvWzhdLGhbOF0pKSxudWxsPT1vWzldJiYob1s5XT1oWzldKSxvWzBdPWhbMF0sb1sxXT1uKSx0PW9bMF0sbj1vWzFdLHI9b1syXSxlPW9bM10sdT1vWzRdLGY9b1s5XT1udWxsPT1vWzldP2M/MDp0Lmxlbmd0aDpYdShvWzldLWEsMCksIWYmJjI0Jm4mJihuJj0tMjUpLChoP1NvOk1vKShuJiYxIT1uPzg9PW58fDE2PT1uP2pyKHQsbixmKTozMiE9biYmMzMhPW58fHUubGVuZ3RoP0FyLmFwcGx5KFQsbyk6SXIodCxuLHIsZSk6ZHIodCxuLHIpLG8pfWZ1bmN0aW9uIHpyKHQsbixyLGUsdSxvKXt2YXIgaT0yJnUsZj10Lmxlbmd0aCxjPW4ubGVuZ3RoO2lmKGYhPWMmJiEoaSYmYz5mKSlyZXR1cm4gZmFsc2U7aWYoYz1vLmdldCh0KSlyZXR1cm4gYz09bjtcblx0XHR2YXIgYz0tMSxhPXRydWUsbD0xJnU/bmV3IFp0OlQ7Zm9yKG8uc2V0KHQsbik7KytjPGY7KXt2YXIgcz10W2NdLGg9bltjXTtpZihlKXZhciBwPWk/ZShoLHMsYyxuLHQsbyk6ZShzLGgsYyx0LG4sbyk7aWYocCE9PVQpe2lmKHApY29udGludWU7YT1mYWxzZTticmVha31pZihsKXtpZighXyhuLGZ1bmN0aW9uKHQsbil7cmV0dXJuIGwuaGFzKG4pfHxzIT09dCYmIXIocyx0LGUsdSxvKT92b2lkIDA6bC5hZGQobil9KSl7YT1mYWxzZTticmVha319ZWxzZSBpZihzIT09aCYmIXIocyxoLGUsdSxvKSl7YT1mYWxzZTticmVha319cmV0dXJuIG9bXCJkZWxldGVcIl0odCksYX1mdW5jdGlvbiBVcih0LG4scixlLHUsbyxpKXtzd2l0Y2gocil7Y2FzZVwiW29iamVjdCBEYXRhVmlld11cIjppZih0LmJ5dGVMZW5ndGghPW4uYnl0ZUxlbmd0aHx8dC5ieXRlT2Zmc2V0IT1uLmJ5dGVPZmZzZXQpYnJlYWs7dD10LmJ1ZmZlcixuPW4uYnVmZmVyO2Nhc2VcIltvYmplY3QgQXJyYXlCdWZmZXJdXCI6aWYodC5ieXRlTGVuZ3RoIT1uLmJ5dGVMZW5ndGh8fCFlKG5ldyBGdSh0KSxuZXcgRnUobikpKWJyZWFrO1xuXHRcdHJldHVybiB0cnVlO2Nhc2VcIltvYmplY3QgQm9vbGVhbl1cIjpjYXNlXCJbb2JqZWN0IERhdGVdXCI6cmV0dXJuK3Q9PStuO2Nhc2VcIltvYmplY3QgRXJyb3JdXCI6cmV0dXJuIHQubmFtZT09bi5uYW1lJiZ0Lm1lc3NhZ2U9PW4ubWVzc2FnZTtjYXNlXCJbb2JqZWN0IE51bWJlcl1cIjpyZXR1cm4gdCE9K3Q/biE9K246dD09K247Y2FzZVwiW29iamVjdCBSZWdFeHBdXCI6Y2FzZVwiW29iamVjdCBTdHJpbmddXCI6cmV0dXJuIHQ9PW4rXCJcIjtjYXNlXCJbb2JqZWN0IE1hcF1cIjp2YXIgZj1VO2Nhc2VcIltvYmplY3QgU2V0XVwiOmlmKGZ8fChmPUQpLHQuc2l6ZSE9bi5zaXplJiYhKDImbykpYnJlYWs7cmV0dXJuKHI9aS5nZXQodCkpP3I9PW46KG98PTEsaS5zZXQodCxuKSx6cihmKHQpLGYobiksZSx1LG8saSkpO2Nhc2VcIltvYmplY3QgU3ltYm9sXVwiOmlmKHdvKXJldHVybiB3by5jYWxsKHQpPT13by5jYWxsKG4pfXJldHVybiBmYWxzZX1mdW5jdGlvbiAkcih0KXtmb3IodmFyIG49dC5uYW1lK1wiXCIscj1fb1tuXSxlPVd1LmNhbGwoX28sbik/ci5sZW5ndGg6MDtlLS07KXtcblx0XHR2YXIgdT1yW2VdLG89dS5mdW5jO2lmKG51bGw9PW98fG89PXQpcmV0dXJuIHUubmFtZX1yZXR1cm4gbn1mdW5jdGlvbiBEcih0KXtyZXR1cm4oV3UuY2FsbChPdCxcInBsYWNlaG9sZGVyXCIpP090OnQpLnBsYWNlaG9sZGVyfWZ1bmN0aW9uIEZyKCl7dmFyIHQ9T3QuaXRlcmF0ZWV8fF91LHQ9dD09PV91P2tuOnQ7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/dChhcmd1bWVudHNbMF0sYXJndW1lbnRzWzFdKTp0fWZ1bmN0aW9uIE5yKHQsbil7dmFyIHI9dC5fX2RhdGFfXyxlPXR5cGVvZiBuO3JldHVybihcInN0cmluZ1wiPT1lfHxcIm51bWJlclwiPT1lfHxcInN5bWJvbFwiPT1lfHxcImJvb2xlYW5cIj09ZT9cIl9fcHJvdG9fX1wiIT09bjpudWxsPT09bik/clt0eXBlb2Ygbj09XCJzdHJpbmdcIj9cInN0cmluZ1wiOlwiaGFzaFwiXTpyLm1hcH1mdW5jdGlvbiBQcih0KXtmb3IodmFyIG49aXUodCkscj1uLmxlbmd0aDtyLS07KXt2YXIgZT1uW3JdLHU9dFtlXTtuW3JdPVtlLHUsdT09PXUmJiFaZSh1KV19cmV0dXJuIG47XG5cdH1mdW5jdGlvbiBacih0LG4pe3ZhciByPW51bGw9PXQ/VDp0W25dO3JldHVybiBPbihyKT9yOlR9ZnVuY3Rpb24gVHIodCl7cmV0dXJuIFB1KE9iamVjdCh0KSl9ZnVuY3Rpb24gcXIodCl7cmV0dXJuIE11LmNhbGwodCl9ZnVuY3Rpb24gVnIodCxuLHIpe249bmUobix0KT9bbl06ZXIobik7Zm9yKHZhciBlLHU9LTEsbz1uLmxlbmd0aDsrK3U8bzspe3ZhciBpPWZlKG5bdV0pO2lmKCEoZT1udWxsIT10JiZyKHQsaSkpKWJyZWFrO3Q9dFtpXX1yZXR1cm4gZT9lOihvPXQ/dC5sZW5ndGg6MCwhIW8mJlBlKG8pJiZYcihpLG8pJiYoeWkodCl8fEdlKHQpfHx6ZSh0KSkpfWZ1bmN0aW9uIEtyKHQpe3ZhciBuPXQubGVuZ3RoLHI9dC5jb25zdHJ1Y3RvcihuKTtyZXR1cm4gbiYmXCJzdHJpbmdcIj09dHlwZW9mIHRbMF0mJld1LmNhbGwodCxcImluZGV4XCIpJiYoci5pbmRleD10LmluZGV4LHIuaW5wdXQ9dC5pbnB1dCkscn1mdW5jdGlvbiBHcih0KXtyZXR1cm4gdHlwZW9mIHQuY29uc3RydWN0b3IhPVwiZnVuY3Rpb25cInx8ZWUodCk/e306dW4oSnUoT2JqZWN0KHQpKSk7XG5cdH1mdW5jdGlvbiBKcihyLGUsdSxvKXt2YXIgaT1yLmNvbnN0cnVjdG9yO3N3aXRjaChlKXtjYXNlXCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiOnJldHVybiBpcihyKTtjYXNlXCJbb2JqZWN0IEJvb2xlYW5dXCI6Y2FzZVwiW29iamVjdCBEYXRlXVwiOnJldHVybiBuZXcgaSgrcik7Y2FzZVwiW29iamVjdCBEYXRhVmlld11cIjpyZXR1cm4gZT1vP2lyKHIuYnVmZmVyKTpyLmJ1ZmZlcixuZXcgci5jb25zdHJ1Y3RvcihlLHIuYnl0ZU9mZnNldCxyLmJ5dGVMZW5ndGgpO2Nhc2VcIltvYmplY3QgRmxvYXQzMkFycmF5XVwiOmNhc2VcIltvYmplY3QgRmxvYXQ2NEFycmF5XVwiOmNhc2VcIltvYmplY3QgSW50OEFycmF5XVwiOmNhc2VcIltvYmplY3QgSW50MTZBcnJheV1cIjpjYXNlXCJbb2JqZWN0IEludDMyQXJyYXldXCI6Y2FzZVwiW29iamVjdCBVaW50OEFycmF5XVwiOmNhc2VcIltvYmplY3QgVWludDhDbGFtcGVkQXJyYXldXCI6Y2FzZVwiW29iamVjdCBVaW50MTZBcnJheV1cIjpjYXNlXCJbb2JqZWN0IFVpbnQzMkFycmF5XVwiOlxuXHRcdHJldHVybiBlPW8/aXIoci5idWZmZXIpOnIuYnVmZmVyLG5ldyByLmNvbnN0cnVjdG9yKGUsci5ieXRlT2Zmc2V0LHIubGVuZ3RoKTtjYXNlXCJbb2JqZWN0IE1hcF1cIjpyZXR1cm4gZT1vP3UoVShyKSx0cnVlKTpVKHIpLGgoZSx0LG5ldyByLmNvbnN0cnVjdG9yKTtjYXNlXCJbb2JqZWN0IE51bWJlcl1cIjpjYXNlXCJbb2JqZWN0IFN0cmluZ11cIjpyZXR1cm4gbmV3IGkocik7Y2FzZVwiW29iamVjdCBSZWdFeHBdXCI6cmV0dXJuIGU9bmV3IHIuY29uc3RydWN0b3Ioci5zb3VyY2UsX3QuZXhlYyhyKSksZS5sYXN0SW5kZXg9ci5sYXN0SW5kZXgsZTtjYXNlXCJbb2JqZWN0IFNldF1cIjpyZXR1cm4gZT1vP3UoRChyKSx0cnVlKTpEKHIpLGgoZSxuLG5ldyByLmNvbnN0cnVjdG9yKTtjYXNlXCJbb2JqZWN0IFN5bWJvbF1cIjpyZXR1cm4gd28/T2JqZWN0KHdvLmNhbGwocikpOnt9fX1mdW5jdGlvbiBZcih0KXt2YXIgbj10P3QubGVuZ3RoOlQ7cmV0dXJuIFBlKG4pJiYoeWkodCl8fEdlKHQpfHx6ZSh0KSk/bShuLFN0cmluZyk6bnVsbDtcblx0fWZ1bmN0aW9uIEhyKHQpe3JldHVybiB5aSh0KXx8emUodCl9ZnVuY3Rpb24gUXIodCl7cmV0dXJuIHlpKHQpJiYhKDI9PXQubGVuZ3RoJiYhRmUodFswXSkpfWZ1bmN0aW9uIFhyKHQsbil7cmV0dXJuIG49bnVsbD09bj85MDA3MTk5MjU0NzQwOTkxOm4sISFuJiYodHlwZW9mIHQ9PVwibnVtYmVyXCJ8fHh0LnRlc3QodCkpJiZ0Pi0xJiYwPT10JTEmJm4+dH1mdW5jdGlvbiB0ZSh0LG4scil7aWYoIVplKHIpKXJldHVybiBmYWxzZTt2YXIgZT10eXBlb2YgbjtyZXR1cm4oXCJudW1iZXJcIj09ZT9VZShyKSYmWHIobixyLmxlbmd0aCk6XCJzdHJpbmdcIj09ZSYmbiBpbiByKT9DZShyW25dLHQpOmZhbHNlfWZ1bmN0aW9uIG5lKHQsbil7aWYoeWkodCkpcmV0dXJuIGZhbHNlO3ZhciByPXR5cGVvZiB0O3JldHVyblwibnVtYmVyXCI9PXJ8fFwic3ltYm9sXCI9PXJ8fFwiYm9vbGVhblwiPT1yfHxudWxsPT10fHxKZSh0KT90cnVlOnV0LnRlc3QodCl8fCFldC50ZXN0KHQpfHxudWxsIT1uJiZ0IGluIE9iamVjdChuKX1mdW5jdGlvbiByZSh0KXtcblx0XHR2YXIgbj0kcih0KSxyPU90W25dO3JldHVybiB0eXBlb2Ygcj09XCJmdW5jdGlvblwiJiZuIGluIFV0LnByb3RvdHlwZT90PT09cj90cnVlOihuPVJvKHIpLCEhbiYmdD09PW5bMF0pOmZhbHNlfWZ1bmN0aW9uIGVlKHQpe3ZhciBuPXQmJnQuY29uc3RydWN0b3I7cmV0dXJuIHQ9PT0odHlwZW9mIG49PVwiZnVuY3Rpb25cIiYmbi5wcm90b3R5cGV8fGt1KX1mdW5jdGlvbiB1ZSh0LG4pe3JldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gbnVsbD09cj9mYWxzZTpyW3RdPT09biYmKG4hPT1UfHx0IGluIE9iamVjdChyKSl9fWZ1bmN0aW9uIG9lKHQsbixyLGUsdSxvKXtyZXR1cm4gWmUodCkmJlplKG4pJiZCbih0LG4sVCxvZSxvLnNldChuLHQpKSx0fWZ1bmN0aW9uIGllKHQsbil7cmV0dXJuIDE9PW4ubGVuZ3RoP3Q6dm4odCxUbihuLDAsLTEpKX1mdW5jdGlvbiBmZSh0KXtpZih0eXBlb2YgdD09XCJzdHJpbmdcInx8SmUodCkpcmV0dXJuIHQ7dmFyIG49dCtcIlwiO3JldHVyblwiMFwiPT1uJiYxL3Q9PS1xP1wiLTBcIjpufWZ1bmN0aW9uIGNlKHQpe1xuXHRcdGlmKG51bGwhPXQpe3RyeXtyZXR1cm4gUnUuY2FsbCh0KX1jYXRjaChuKXt9cmV0dXJuIHQrXCJcIn1yZXR1cm5cIlwifWZ1bmN0aW9uIGFlKHQpe2lmKHQgaW5zdGFuY2VvZiBVdClyZXR1cm4gdC5jbG9uZSgpO3ZhciBuPW5ldyB6dCh0Ll9fd3JhcHBlZF9fLHQuX19jaGFpbl9fKTtyZXR1cm4gbi5fX2FjdGlvbnNfXz1scih0Ll9fYWN0aW9uc19fKSxuLl9faW5kZXhfXz10Ll9faW5kZXhfXyxuLl9fdmFsdWVzX189dC5fX3ZhbHVlc19fLG59ZnVuY3Rpb24gbGUodCxuLHIpe3ZhciBlPXQ/dC5sZW5ndGg6MDtyZXR1cm4gZT8obj1yfHxuPT09VD8xOlhlKG4pLFRuKHQsMD5uPzA6bixlKSk6W119ZnVuY3Rpb24gc2UodCxuLHIpe3ZhciBlPXQ/dC5sZW5ndGg6MDtyZXR1cm4gZT8obj1yfHxuPT09VD8xOlhlKG4pLG49ZS1uLFRuKHQsMCwwPm4/MDpuKSk6W119ZnVuY3Rpb24gaGUodCxuLHIpe3ZhciBlPXQ/dC5sZW5ndGg6MDtyZXR1cm4gZT8ocj1udWxsPT1yPzA6WGUociksMD5yJiYocj1YdShlK3IsMCkpLFxuXHRcdGcodCxGcihuLDMpLHIpKTotMX1mdW5jdGlvbiBwZSh0LG4scil7dmFyIGU9dD90Lmxlbmd0aDowO2lmKCFlKXJldHVybi0xO3ZhciB1PWUtMTtyZXR1cm4gciE9PVQmJih1PVhlKHIpLHU9MD5yP1h1KGUrdSwwKTp0byh1LGUtMSkpLGcodCxGcihuLDMpLHUsdHJ1ZSl9ZnVuY3Rpb24gX2UodCl7cmV0dXJuIHQmJnQubGVuZ3RoP3RbMF06VH1mdW5jdGlvbiB2ZSh0KXt2YXIgbj10P3QubGVuZ3RoOjA7cmV0dXJuIG4/dFtuLTFdOlR9ZnVuY3Rpb24gZ2UodCxuKXtyZXR1cm4gdCYmdC5sZW5ndGgmJm4mJm4ubGVuZ3RoP0RuKHQsbik6dH1mdW5jdGlvbiBkZSh0KXtyZXR1cm4gdD91by5jYWxsKHQpOnR9ZnVuY3Rpb24geWUodCl7aWYoIXR8fCF0Lmxlbmd0aClyZXR1cm5bXTt2YXIgbj0wO3JldHVybiB0PWYodCxmdW5jdGlvbih0KXtyZXR1cm4gJGUodCk/KG49WHUodC5sZW5ndGgsbiksdHJ1ZSk6dm9pZCAwfSksbShuLGZ1bmN0aW9uKG4pe3JldHVybiBsKHQsVW4obikpfSl9ZnVuY3Rpb24gYmUodCxuKXtcblx0XHRpZighdHx8IXQubGVuZ3RoKXJldHVybltdO3ZhciBlPXllKHQpO3JldHVybiBudWxsPT1uP2U6bChlLGZ1bmN0aW9uKHQpe3JldHVybiByKG4sVCx0KX0pfWZ1bmN0aW9uIHhlKHQpe3JldHVybiB0PU90KHQpLHQuX19jaGFpbl9fPXRydWUsdH1mdW5jdGlvbiBqZSh0LG4pe3JldHVybiBuKHQpfWZ1bmN0aW9uIHdlKCl7cmV0dXJuIHRoaXN9ZnVuY3Rpb24gbWUodCxuKXtyZXR1cm4oeWkodCk/dTpBbykodCxGcihuLDMpKX1mdW5jdGlvbiBBZSh0LG4pe3JldHVybih5aSh0KT9vOk9vKSh0LEZyKG4sMykpfWZ1bmN0aW9uIE9lKHQsbil7cmV0dXJuKHlpKHQpP2w6SW4pKHQsRnIobiwzKSl9ZnVuY3Rpb24ga2UodCxuLHIpe3ZhciBlPS0xLHU9SGUodCksbz11Lmxlbmd0aCxpPW8tMTtmb3Iobj0ocj90ZSh0LG4scik6bj09PVQpPzE6bm4oWGUobiksMCxvKTsrK2U8bjspdD1ObihlLGkpLHI9dVt0XSx1W3RdPXVbZV0sdVtlXT1yO3JldHVybiB1Lmxlbmd0aD1uLHV9ZnVuY3Rpb24gRWUoKXtcblx0XHRyZXR1cm4geHUubm93KCl9ZnVuY3Rpb24gU2UodCxuLHIpe3JldHVybiBuPXI/VDpuLG49dCYmbnVsbD09bj90Lmxlbmd0aDpuLENyKHQsMTI4LFQsVCxULFQsbil9ZnVuY3Rpb24gSWUodCxuKXt2YXIgcjtpZih0eXBlb2YgbiE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBBdShcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7cmV0dXJuIHQ9WGUodCksZnVuY3Rpb24oKXtyZXR1cm4gMDwtLXQmJihyPW4uYXBwbHkodGhpcyxhcmd1bWVudHMpKSwxPj10JiYobj1UKSxyfX1mdW5jdGlvbiBSZSh0LG4scil7cmV0dXJuIG49cj9UOm4sdD1Dcih0LDgsVCxULFQsVCxULG4pLHQucGxhY2Vob2xkZXI9UmUucGxhY2Vob2xkZXIsdH1mdW5jdGlvbiBXZSh0LG4scil7cmV0dXJuIG49cj9UOm4sdD1Dcih0LDE2LFQsVCxULFQsVCxuKSx0LnBsYWNlaG9sZGVyPVdlLnBsYWNlaG9sZGVyLHR9ZnVuY3Rpb24gQmUodCxuLHIpe2Z1bmN0aW9uIGUobil7dmFyIHI9YyxlPWE7cmV0dXJuIGM9YT1ULF89bixzPXQuYXBwbHkoZSxyKTtcblx0fWZ1bmN0aW9uIHUodCl7dmFyIHI9dC1wO3JldHVybiB0LT1fLHA9PT1UfHxyPj1ufHwwPnJ8fGcmJnQ+PWx9ZnVuY3Rpb24gbygpe3ZhciB0PUVlKCk7aWYodSh0KSlyZXR1cm4gaSh0KTt2YXIgcjtyPXQtXyx0PW4tKHQtcCkscj1nP3RvKHQsbC1yKTp0LGg9QXQobyxyKX1mdW5jdGlvbiBpKHQpe3JldHVybiBoPVQsZCYmYz9lKHQpOihjPWE9VCxzKX1mdW5jdGlvbiBmKCl7dmFyIHQ9RWUoKSxyPXUodCk7aWYoYz1hcmd1bWVudHMsYT10aGlzLHA9dCxyKXtpZihoPT09VClyZXR1cm4gXz10PXAsaD1BdChvLG4pLHY/ZSh0KTpzO2lmKGcpcmV0dXJuIGg9QXQobyxuKSxlKHApfXJldHVybiBoPT09VCYmKGg9QXQobyxuKSksc312YXIgYyxhLGwscyxoLHAsXz0wLHY9ZmFsc2UsZz1mYWxzZSxkPXRydWU7aWYodHlwZW9mIHQhPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgQXUoXCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIpO3JldHVybiBuPW51KG4pfHwwLFplKHIpJiYodj0hIXIubGVhZGluZyxsPShnPVwibWF4V2FpdFwiaW4gcik/WHUobnUoci5tYXhXYWl0KXx8MCxuKTpsLFxuXHRcdGQ9XCJ0cmFpbGluZ1wiaW4gcj8hIXIudHJhaWxpbmc6ZCksZi5jYW5jZWw9ZnVuY3Rpb24oKXtfPTAsYz1wPWE9aD1UfSxmLmZsdXNoPWZ1bmN0aW9uKCl7cmV0dXJuIGg9PT1UP3M6aShFZSgpKX0sZn1mdW5jdGlvbiBMZSh0LG4pe2Z1bmN0aW9uIHIoKXt2YXIgZT1hcmd1bWVudHMsdT1uP24uYXBwbHkodGhpcyxlKTplWzBdLG89ci5jYWNoZTtyZXR1cm4gby5oYXModSk/by5nZXQodSk6KGU9dC5hcHBseSh0aGlzLGUpLHIuY2FjaGU9by5zZXQodSxlKSxlKX1pZih0eXBlb2YgdCE9XCJmdW5jdGlvblwifHxuJiZ0eXBlb2YgbiE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBBdShcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7cmV0dXJuIHIuY2FjaGU9bmV3KExlLkNhY2hlfHxQdCkscn1mdW5jdGlvbiBNZSh0LG4pe2lmKHR5cGVvZiB0IT1cImZ1bmN0aW9uXCIpdGhyb3cgbmV3IEF1KFwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiKTtyZXR1cm4gbj1YdShuPT09VD90Lmxlbmd0aC0xOlhlKG4pLDApLGZ1bmN0aW9uKCl7XG5cdFx0Zm9yKHZhciBlPWFyZ3VtZW50cyx1PS0xLG89WHUoZS5sZW5ndGgtbiwwKSxpPUFycmF5KG8pOysrdTxvOylpW3VdPWVbbit1XTtzd2l0Y2gobil7Y2FzZSAwOnJldHVybiB0LmNhbGwodGhpcyxpKTtjYXNlIDE6cmV0dXJuIHQuY2FsbCh0aGlzLGVbMF0saSk7Y2FzZSAyOnJldHVybiB0LmNhbGwodGhpcyxlWzBdLGVbMV0saSl9Zm9yKG89QXJyYXkobisxKSx1PS0xOysrdTxuOylvW3VdPWVbdV07cmV0dXJuIG9bbl09aSxyKHQsdGhpcyxvKX19ZnVuY3Rpb24gQ2UodCxuKXtyZXR1cm4gdD09PW58fHQhPT10JiZuIT09bn1mdW5jdGlvbiB6ZSh0KXtyZXR1cm4gJGUodCkmJld1LmNhbGwodCxcImNhbGxlZVwiKSYmKCFxdS5jYWxsKHQsXCJjYWxsZWVcIil8fFwiW29iamVjdCBBcmd1bWVudHNdXCI9PU11LmNhbGwodCkpfWZ1bmN0aW9uIFVlKHQpe3JldHVybiBudWxsIT10JiZQZShXbyh0KSkmJiFGZSh0KX1mdW5jdGlvbiAkZSh0KXtyZXR1cm4gVGUodCkmJlVlKHQpfWZ1bmN0aW9uIERlKHQpe1xuXHRcdHJldHVybiBUZSh0KT9cIltvYmplY3QgRXJyb3JdXCI9PU11LmNhbGwodCl8fHR5cGVvZiB0Lm1lc3NhZ2U9PVwic3RyaW5nXCImJnR5cGVvZiB0Lm5hbWU9PVwic3RyaW5nXCI6ZmFsc2V9ZnVuY3Rpb24gRmUodCl7cmV0dXJuIHQ9WmUodCk/TXUuY2FsbCh0KTpcIlwiLFwiW29iamVjdCBGdW5jdGlvbl1cIj09dHx8XCJbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXVwiPT10fWZ1bmN0aW9uIE5lKHQpe3JldHVybiB0eXBlb2YgdD09XCJudW1iZXJcIiYmdD09WGUodCl9ZnVuY3Rpb24gUGUodCl7cmV0dXJuIHR5cGVvZiB0PT1cIm51bWJlclwiJiZ0Pi0xJiYwPT10JTEmJjkwMDcxOTkyNTQ3NDA5OTE+PXR9ZnVuY3Rpb24gWmUodCl7dmFyIG49dHlwZW9mIHQ7cmV0dXJuISF0JiYoXCJvYmplY3RcIj09bnx8XCJmdW5jdGlvblwiPT1uKX1mdW5jdGlvbiBUZSh0KXtyZXR1cm4hIXQmJnR5cGVvZiB0PT1cIm9iamVjdFwifWZ1bmN0aW9uIHFlKHQpe3JldHVybiB0eXBlb2YgdD09XCJudW1iZXJcInx8VGUodCkmJlwiW29iamVjdCBOdW1iZXJdXCI9PU11LmNhbGwodCk7XG5cdH1mdW5jdGlvbiBWZSh0KXtyZXR1cm4hVGUodCl8fFwiW29iamVjdCBPYmplY3RdXCIhPU11LmNhbGwodCl8fEModCk/ZmFsc2U6KHQ9SnUoT2JqZWN0KHQpKSxudWxsPT09dD90cnVlOih0PVd1LmNhbGwodCxcImNvbnN0cnVjdG9yXCIpJiZ0LmNvbnN0cnVjdG9yLHR5cGVvZiB0PT1cImZ1bmN0aW9uXCImJnQgaW5zdGFuY2VvZiB0JiZSdS5jYWxsKHQpPT1MdSkpfWZ1bmN0aW9uIEtlKHQpe3JldHVybiBaZSh0KSYmXCJbb2JqZWN0IFJlZ0V4cF1cIj09TXUuY2FsbCh0KX1mdW5jdGlvbiBHZSh0KXtyZXR1cm4gdHlwZW9mIHQ9PVwic3RyaW5nXCJ8fCF5aSh0KSYmVGUodCkmJlwiW29iamVjdCBTdHJpbmddXCI9PU11LmNhbGwodCl9ZnVuY3Rpb24gSmUodCl7cmV0dXJuIHR5cGVvZiB0PT1cInN5bWJvbFwifHxUZSh0KSYmXCJbb2JqZWN0IFN5bWJvbF1cIj09TXUuY2FsbCh0KX1mdW5jdGlvbiBZZSh0KXtyZXR1cm4gVGUodCkmJlBlKHQubGVuZ3RoKSYmISFNdFtNdS5jYWxsKHQpXX1mdW5jdGlvbiBIZSh0KXtpZighdClyZXR1cm5bXTtcblx0XHRpZihVZSh0KSlyZXR1cm4gR2UodCk/dC5tYXRjaChJdCk6bHIodCk7aWYoWnUmJnRbWnVdKXJldHVybiB6KHRbWnVdKCkpO3ZhciBuPXFyKHQpO3JldHVybihcIltvYmplY3QgTWFwXVwiPT1uP1U6XCJbb2JqZWN0IFNldF1cIj09bj9EOmN1KSh0KX1mdW5jdGlvbiBRZSh0KXtyZXR1cm4gdD8odD1udSh0KSx0PT09cXx8dD09PS1xPzEuNzk3NjkzMTM0ODYyMzE1N2UzMDgqKDA+dD8tMToxKTp0PT09dD90OjApOjA9PT10P3Q6MH1mdW5jdGlvbiBYZSh0KXt0PVFlKHQpO3ZhciBuPXQlMTtyZXR1cm4gdD09PXQ/bj90LW46dDowfWZ1bmN0aW9uIHR1KHQpe3JldHVybiB0P25uKFhlKHQpLDAsNDI5NDk2NzI5NSk6MH1mdW5jdGlvbiBudSh0KXtpZih0eXBlb2YgdD09XCJudW1iZXJcIilyZXR1cm4gdDtpZihKZSh0KSlyZXR1cm4gVjtpZihaZSh0KSYmKHQ9RmUodC52YWx1ZU9mKT90LnZhbHVlT2YoKTp0LHQ9WmUodCk/dCtcIlwiOnQpLHR5cGVvZiB0IT1cInN0cmluZ1wiKXJldHVybiAwPT09dD90Oit0O1xuXHRcdHQ9dC5yZXBsYWNlKGN0LFwiXCIpO3ZhciBuPWR0LnRlc3QodCk7cmV0dXJuIG58fGJ0LnRlc3QodCk/TnQodC5zbGljZSgyKSxuPzI6OCk6Z3QudGVzdCh0KT9WOit0fWZ1bmN0aW9uIHJ1KHQpe3JldHVybiBzcih0LGZ1KHQpKX1mdW5jdGlvbiBldSh0KXtyZXR1cm4gbnVsbD09dD9cIlwiOlluKHQpfWZ1bmN0aW9uIHV1KHQsbixyKXtyZXR1cm4gdD1udWxsPT10P1Q6dm4odCxuKSx0PT09VD9yOnR9ZnVuY3Rpb24gb3UodCxuKXtyZXR1cm4gbnVsbCE9dCYmVnIodCxuLGJuKX1mdW5jdGlvbiBpdSh0KXt2YXIgbj1lZSh0KTtpZighbiYmIVVlKHQpKXJldHVybiBRdShPYmplY3QodCkpO3ZhciByLGU9WXIodCksdT0hIWUsZT1lfHxbXSxvPWUubGVuZ3RoO2ZvcihyIGluIHQpIXluKHQscil8fHUmJihcImxlbmd0aFwiPT1yfHxYcihyLG8pKXx8biYmXCJjb25zdHJ1Y3RvclwiPT1yfHxlLnB1c2gocik7cmV0dXJuIGV9ZnVuY3Rpb24gZnUodCl7Zm9yKHZhciBuPS0xLHI9ZWUodCksZT1Fbih0KSx1PWUubGVuZ3RoLG89WXIodCksaT0hIW8sbz1vfHxbXSxmPW8ubGVuZ3RoOysrbjx1Oyl7XG5cdFx0dmFyIGM9ZVtuXTtpJiYoXCJsZW5ndGhcIj09Y3x8WHIoYyxmKSl8fFwiY29uc3RydWN0b3JcIj09YyYmKHJ8fCFXdS5jYWxsKHQsYykpfHxvLnB1c2goYyl9cmV0dXJuIG99ZnVuY3Rpb24gY3UodCl7cmV0dXJuIHQ/ayh0LGl1KHQpKTpbXX1mdW5jdGlvbiBhdSh0KXtyZXR1cm4gcWkoZXUodCkudG9Mb3dlckNhc2UoKSl9ZnVuY3Rpb24gbHUodCl7cmV0dXJuKHQ9ZXUodCkpJiZ0LnJlcGxhY2UoanQsVykucmVwbGFjZShTdCxcIlwiKX1mdW5jdGlvbiBzdSh0LG4scil7cmV0dXJuIHQ9ZXUodCksbj1yP1Q6bixuPT09VCYmKG49QnQudGVzdCh0KT9SdDpzdCksdC5tYXRjaChuKXx8W119ZnVuY3Rpb24gaHUodCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHR9fWZ1bmN0aW9uIHB1KHQpe3JldHVybiB0fWZ1bmN0aW9uIF91KHQpe3JldHVybiBrbih0eXBlb2YgdD09XCJmdW5jdGlvblwiP3Q6cm4odCx0cnVlKSl9ZnVuY3Rpb24gdnUodCxuLHIpe3ZhciBlPWl1KG4pLG89X24obixlKTtudWxsIT1yfHxaZShuKSYmKG8ubGVuZ3RofHwhZS5sZW5ndGgpfHwocj1uLFxuXHRcdG49dCx0PXRoaXMsbz1fbihuLGl1KG4pKSk7dmFyIGk9IShaZShyKSYmXCJjaGFpblwiaW4gciYmIXIuY2hhaW4pLGY9RmUodCk7cmV0dXJuIHUobyxmdW5jdGlvbihyKXt2YXIgZT1uW3JdO3Rbcl09ZSxmJiYodC5wcm90b3R5cGVbcl09ZnVuY3Rpb24oKXt2YXIgbj10aGlzLl9fY2hhaW5fXztpZihpfHxuKXt2YXIgcj10KHRoaXMuX193cmFwcGVkX18pO3JldHVybihyLl9fYWN0aW9uc19fPWxyKHRoaXMuX19hY3Rpb25zX18pKS5wdXNoKHtmdW5jOmUsYXJnczphcmd1bWVudHMsdGhpc0FyZzp0fSksci5fX2NoYWluX189bixyfXJldHVybiBlLmFwcGx5KHQscyhbdGhpcy52YWx1ZSgpXSxhcmd1bWVudHMpKX0pfSksdH1mdW5jdGlvbiBndSgpe31mdW5jdGlvbiBkdSh0KXtyZXR1cm4gbmUodCk/VW4oZmUodCkpOiRuKHQpfWZ1bmN0aW9uIHl1KCl7cmV0dXJuW119ZnVuY3Rpb24gYnUoKXtyZXR1cm4gZmFsc2V9Uj1SP0d0LmRlZmF1bHRzKHt9LFIsR3QucGljayhLdCxMdCkpOkt0O3ZhciB4dT1SLkRhdGUsanU9Ui5FcnJvcix3dT1SLk1hdGgsbXU9Ui5SZWdFeHAsQXU9Ui5UeXBlRXJyb3IsT3U9Ui5BcnJheS5wcm90b3R5cGUsa3U9Ui5PYmplY3QucHJvdG90eXBlLEV1PVIuU3RyaW5nLnByb3RvdHlwZSxTdT1SW1wiX19jb3JlLWpzX3NoYXJlZF9fXCJdLEl1PWZ1bmN0aW9uKCl7XG5cdFx0dmFyIHQ9L1teLl0rJC8uZXhlYyhTdSYmU3Uua2V5cyYmU3Uua2V5cy5JRV9QUk9UT3x8XCJcIik7cmV0dXJuIHQ/XCJTeW1ib2woc3JjKV8xLlwiK3Q6XCJcIn0oKSxSdT1SLkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyxXdT1rdS5oYXNPd25Qcm9wZXJ0eSxCdT0wLEx1PVJ1LmNhbGwoT2JqZWN0KSxNdT1rdS50b1N0cmluZyxDdT1LdC5fLHp1PW11KFwiXlwiK1J1LmNhbGwoV3UpLnJlcGxhY2UoaXQsXCJcXFxcJCZcIikucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZyxcIiQxLio/XCIpK1wiJFwiKSxVdT1UdD9SLkJ1ZmZlcjpULCR1PVIuUmVmbGVjdCxEdT1SLlN5bWJvbCxGdT1SLlVpbnQ4QXJyYXksTnU9JHU/JHUuZjpULFB1PU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsWnU9dHlwZW9mKFp1PUR1JiZEdS5pdGVyYXRvcik9PVwic3ltYm9sXCI/WnU6VCxUdT1PYmplY3QuY3JlYXRlLHF1PWt1LnByb3BlcnR5SXNFbnVtZXJhYmxlLFZ1PU91LnNwbGljZSxLdT13dS5jZWlsLEd1PXd1LmZsb29yLEp1PU9iamVjdC5nZXRQcm90b3R5cGVPZixZdT1SLmlzRmluaXRlLEh1PU91LmpvaW4sUXU9T2JqZWN0LmtleXMsWHU9d3UubWF4LHRvPXd1Lm1pbixubz1SLnBhcnNlSW50LHJvPXd1LnJhbmRvbSxlbz1FdS5yZXBsYWNlLHVvPU91LnJldmVyc2Usb289RXUuc3BsaXQsaW89WnIoUixcIkRhdGFWaWV3XCIpLGZvPVpyKFIsXCJNYXBcIiksY289WnIoUixcIlByb21pc2VcIiksYW89WnIoUixcIlNldFwiKSxsbz1acihSLFwiV2Vha01hcFwiKSxzbz1acihPYmplY3QsXCJjcmVhdGVcIiksaG89bG8mJm5ldyBsbyxwbz0hcXUuY2FsbCh7XG5cdFx0dmFsdWVPZjoxfSxcInZhbHVlT2ZcIiksX289e30sdm89Y2UoaW8pLGdvPWNlKGZvKSx5bz1jZShjbyksYm89Y2UoYW8pLHhvPWNlKGxvKSxqbz1EdT9EdS5wcm90b3R5cGU6VCx3bz1qbz9qby52YWx1ZU9mOlQsbW89am8/am8udG9TdHJpbmc6VDtPdC50ZW1wbGF0ZVNldHRpbmdzPXtlc2NhcGU6dHQsZXZhbHVhdGU6bnQsaW50ZXJwb2xhdGU6cnQsdmFyaWFibGU6XCJcIixpbXBvcnRzOntfOk90fX0sT3QucHJvdG90eXBlPWt0LnByb3RvdHlwZSxPdC5wcm90b3R5cGUuY29uc3RydWN0b3I9T3QsenQucHJvdG90eXBlPXVuKGt0LnByb3RvdHlwZSksenQucHJvdG90eXBlLmNvbnN0cnVjdG9yPXp0LFV0LnByb3RvdHlwZT11bihrdC5wcm90b3R5cGUpLFV0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1VdCwkdC5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9fZGF0YV9fPXNvP3NvKG51bGwpOnt9fSwkdC5wcm90b3R5cGVbXCJkZWxldGVcIl09ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuaGFzKHQpJiZkZWxldGUgdGhpcy5fX2RhdGFfX1t0XTtcblx0fSwkdC5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKHQpe3ZhciBuPXRoaXMuX19kYXRhX187cmV0dXJuIHNvPyh0PW5bdF0sXCJfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fXCI9PT10P1Q6dCk6V3UuY2FsbChuLHQpP25bdF06VH0sJHQucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXt2YXIgbj10aGlzLl9fZGF0YV9fO3JldHVybiBzbz9uW3RdIT09VDpXdS5jYWxsKG4sdCl9LCR0LnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdGhpcy5fX2RhdGFfX1t0XT1zbyYmbj09PVQ/XCJfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fXCI6bix0aGlzfSxEdC5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9fZGF0YV9fPVtdfSxEdC5wcm90b3R5cGVbXCJkZWxldGVcIl09ZnVuY3Rpb24odCl7dmFyIG49dGhpcy5fX2RhdGFfXztyZXR1cm4gdD1IdChuLHQpLDA+dD9mYWxzZToodD09bi5sZW5ndGgtMT9uLnBvcCgpOlZ1LmNhbGwobix0LDEpLHRydWUpfSxEdC5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKHQpe1xuXHRcdHZhciBuPXRoaXMuX19kYXRhX187cmV0dXJuIHQ9SHQobix0KSwwPnQ/VDpuW3RdWzFdfSxEdC5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHQpe3JldHVybi0xPEh0KHRoaXMuX19kYXRhX18sdCl9LER0LnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24odCxuKXt2YXIgcj10aGlzLl9fZGF0YV9fLGU9SHQocix0KTtyZXR1cm4gMD5lP3IucHVzaChbdCxuXSk6cltlXVsxXT1uLHRoaXN9LFB0LnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX19kYXRhX189e2hhc2g6bmV3ICR0LG1hcDpuZXcoZm98fER0KSxzdHJpbmc6bmV3ICR0fX0sUHQucHJvdG90eXBlW1wiZGVsZXRlXCJdPWZ1bmN0aW9uKHQpe3JldHVybiBOcih0aGlzLHQpW1wiZGVsZXRlXCJdKHQpfSxQdC5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiBOcih0aGlzLHQpLmdldCh0KX0sUHQucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXtyZXR1cm4gTnIodGhpcyx0KS5oYXModCl9LFB0LnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24odCxuKXtcblx0XHRyZXR1cm4gTnIodGhpcyx0KS5zZXQodCxuKSx0aGlzfSxadC5wcm90b3R5cGUuYWRkPVp0LnByb3RvdHlwZS5wdXNoPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9fZGF0YV9fLnNldCh0LFwiX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfX1wiKSx0aGlzfSxadC5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh0KX0scXQucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fX2RhdGFfXz1uZXcgRHR9LHF0LnByb3RvdHlwZVtcImRlbGV0ZVwiXT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fX2RhdGFfX1tcImRlbGV0ZVwiXSh0KX0scXQucHJvdG90eXBlLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQodCl9LHF0LnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHQpfSxxdC5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKHQsbil7dmFyIHI9dGhpcy5fX2RhdGFfXztyZXR1cm4gciBpbnN0YW5jZW9mIER0JiYyMDA9PXIuX19kYXRhX18ubGVuZ3RoJiYocj10aGlzLl9fZGF0YV9fPW5ldyBQdChyLl9fZGF0YV9fKSksXG5cdFx0ci5zZXQodCxuKSx0aGlzfTt2YXIgQW89dnIoaG4pLE9vPXZyKHBuLHRydWUpLGtvPWdyKCksRW89Z3IodHJ1ZSk7TnUmJiFxdS5jYWxsKHt2YWx1ZU9mOjF9LFwidmFsdWVPZlwiKSYmKEVuPWZ1bmN0aW9uKHQpe3JldHVybiB6KE51KHQpKX0pO3ZhciBTbz1obz9mdW5jdGlvbih0LG4pe3JldHVybiBoby5zZXQodCxuKSx0fTpwdSxJbz1hbyYmMS9EKG5ldyBhbyhbLC0wXSkpWzFdPT1xP2Z1bmN0aW9uKHQpe3JldHVybiBuZXcgYW8odCl9Omd1LFJvPWhvP2Z1bmN0aW9uKHQpe3JldHVybiBoby5nZXQodCl9Omd1LFdvPVVuKFwibGVuZ3RoXCIpO1B1fHwoVHI9eXUpO3ZhciBCbz1QdT9mdW5jdGlvbih0KXtmb3IodmFyIG49W107dDspcyhuLFRyKHQpKSx0PUp1KE9iamVjdCh0KSk7cmV0dXJuIG59OlRyOyhpbyYmXCJbb2JqZWN0IERhdGFWaWV3XVwiIT1xcihuZXcgaW8obmV3IEFycmF5QnVmZmVyKDEpKSl8fGZvJiZcIltvYmplY3QgTWFwXVwiIT1xcihuZXcgZm8pfHxjbyYmXCJbb2JqZWN0IFByb21pc2VdXCIhPXFyKGNvLnJlc29sdmUoKSl8fGFvJiZcIltvYmplY3QgU2V0XVwiIT1xcihuZXcgYW8pfHxsbyYmXCJbb2JqZWN0IFdlYWtNYXBdXCIhPXFyKG5ldyBsbykpJiYocXI9ZnVuY3Rpb24odCl7XG5cdFx0dmFyIG49TXUuY2FsbCh0KTtpZih0PSh0PVwiW29iamVjdCBPYmplY3RdXCI9PW4/dC5jb25zdHJ1Y3RvcjpUKT9jZSh0KTpUKXN3aXRjaCh0KXtjYXNlIHZvOnJldHVyblwiW29iamVjdCBEYXRhVmlld11cIjtjYXNlIGdvOnJldHVyblwiW29iamVjdCBNYXBdXCI7Y2FzZSB5bzpyZXR1cm5cIltvYmplY3QgUHJvbWlzZV1cIjtjYXNlIGJvOnJldHVyblwiW29iamVjdCBTZXRdXCI7Y2FzZSB4bzpyZXR1cm5cIltvYmplY3QgV2Vha01hcF1cIn1yZXR1cm4gbn0pO3ZhciBMbz1TdT9GZTpidSxNbz1mdW5jdGlvbigpe3ZhciB0PTAsbj0wO3JldHVybiBmdW5jdGlvbihyLGUpe3ZhciB1PUVlKCksbz0xNi0odS1uKTtpZihuPXUsbz4wKXtpZigxNTA8PSsrdClyZXR1cm4gcn1lbHNlIHQ9MDtyZXR1cm4gU28ocixlKX19KCksQ289TGUoZnVuY3Rpb24odCl7dmFyIG49W107cmV0dXJuIGV1KHQpLnJlcGxhY2Uob3QsZnVuY3Rpb24odCxyLGUsdSl7bi5wdXNoKGU/dS5yZXBsYWNlKGh0LFwiJDFcIik6cnx8dCl9KSxcblx0XHRufSksem89TWUoZnVuY3Rpb24odCxuKXtyZXR1cm4gJGUodCk/Zm4odCxzbihuLDEsJGUsdHJ1ZSkpOltdfSksVW89TWUoZnVuY3Rpb24odCxuKXt2YXIgcj12ZShuKTtyZXR1cm4gJGUocikmJihyPVQpLCRlKHQpP2ZuKHQsc24obiwxLCRlLHRydWUpLEZyKHIpKTpbXX0pLCRvPU1lKGZ1bmN0aW9uKHQsbil7dmFyIHI9dmUobik7cmV0dXJuICRlKHIpJiYocj1UKSwkZSh0KT9mbih0LHNuKG4sMSwkZSx0cnVlKSxULHIpOltdfSksRG89TWUoZnVuY3Rpb24odCl7dmFyIG49bCh0LHJyKTtyZXR1cm4gbi5sZW5ndGgmJm5bMF09PT10WzBdP3huKG4pOltdfSksRm89TWUoZnVuY3Rpb24odCl7dmFyIG49dmUodCkscj1sKHQscnIpO3JldHVybiBuPT09dmUocik/bj1UOnIucG9wKCksci5sZW5ndGgmJnJbMF09PT10WzBdP3huKHIsRnIobikpOltdfSksTm89TWUoZnVuY3Rpb24odCl7dmFyIG49dmUodCkscj1sKHQscnIpO3JldHVybiBuPT09dmUocik/bj1UOnIucG9wKCksci5sZW5ndGgmJnJbMF09PT10WzBdP3huKHIsVCxuKTpbXTtcblx0fSksUG89TWUoZ2UpLFpvPU1lKGZ1bmN0aW9uKHQsbil7bj1zbihuLDEpO3ZhciByPXQ/dC5sZW5ndGg6MCxlPXRuKHQsbik7cmV0dXJuIEZuKHQsbChuLGZ1bmN0aW9uKHQpe3JldHVybiBYcih0LHIpPyt0OnR9KS5zb3J0KGZyKSksZX0pLFRvPU1lKGZ1bmN0aW9uKHQpe3JldHVybiBIbihzbih0LDEsJGUsdHJ1ZSkpfSkscW89TWUoZnVuY3Rpb24odCl7dmFyIG49dmUodCk7cmV0dXJuICRlKG4pJiYobj1UKSxIbihzbih0LDEsJGUsdHJ1ZSksRnIobikpfSksVm89TWUoZnVuY3Rpb24odCl7dmFyIG49dmUodCk7cmV0dXJuICRlKG4pJiYobj1UKSxIbihzbih0LDEsJGUsdHJ1ZSksVCxuKX0pLEtvPU1lKGZ1bmN0aW9uKHQsbil7cmV0dXJuICRlKHQpP2ZuKHQsbik6W119KSxHbz1NZShmdW5jdGlvbih0KXtyZXR1cm4gdHIoZih0LCRlKSl9KSxKbz1NZShmdW5jdGlvbih0KXt2YXIgbj12ZSh0KTtyZXR1cm4gJGUobikmJihuPVQpLHRyKGYodCwkZSksRnIobikpfSksWW89TWUoZnVuY3Rpb24odCl7XG5cdFx0dmFyIG49dmUodCk7cmV0dXJuICRlKG4pJiYobj1UKSx0cihmKHQsJGUpLFQsbil9KSxIbz1NZSh5ZSksUW89TWUoZnVuY3Rpb24odCl7dmFyIG49dC5sZW5ndGgsbj1uPjE/dFtuLTFdOlQsbj10eXBlb2Ygbj09XCJmdW5jdGlvblwiPyh0LnBvcCgpLG4pOlQ7cmV0dXJuIGJlKHQsbil9KSxYbz1NZShmdW5jdGlvbih0KXtmdW5jdGlvbiBuKG4pe3JldHVybiB0bihuLHQpfXQ9c24odCwxKTt2YXIgcj10Lmxlbmd0aCxlPXI/dFswXTowLHU9dGhpcy5fX3dyYXBwZWRfXztyZXR1cm4hKHI+MXx8dGhpcy5fX2FjdGlvbnNfXy5sZW5ndGgpJiZ1IGluc3RhbmNlb2YgVXQmJlhyKGUpPyh1PXUuc2xpY2UoZSwrZSsocj8xOjApKSx1Ll9fYWN0aW9uc19fLnB1c2goe2Z1bmM6amUsYXJnczpbbl0sdGhpc0FyZzpUfSksbmV3IHp0KHUsdGhpcy5fX2NoYWluX18pLnRocnUoZnVuY3Rpb24odCl7cmV0dXJuIHImJiF0Lmxlbmd0aCYmdC5wdXNoKFQpLHR9KSk6dGhpcy50aHJ1KG4pfSksdGk9cHIoZnVuY3Rpb24odCxuLHIpe1xuXHRcdFd1LmNhbGwodCxyKT8rK3Rbcl06dFtyXT0xfSksbmk9d3IoaGUpLHJpPXdyKHBlKSxlaT1wcihmdW5jdGlvbih0LG4scil7V3UuY2FsbCh0LHIpP3Rbcl0ucHVzaChuKTp0W3JdPVtuXX0pLHVpPU1lKGZ1bmN0aW9uKHQsbixlKXt2YXIgdT0tMSxvPXR5cGVvZiBuPT1cImZ1bmN0aW9uXCIsaT1uZShuKSxmPVVlKHQpP0FycmF5KHQubGVuZ3RoKTpbXTtyZXR1cm4gQW8odCxmdW5jdGlvbih0KXt2YXIgYz1vP246aSYmbnVsbCE9dD90W25dOlQ7ZlsrK3VdPWM/cihjLHQsZSk6d24odCxuLGUpfSksZn0pLG9pPXByKGZ1bmN0aW9uKHQsbixyKXt0W3JdPW59KSxpaT1wcihmdW5jdGlvbih0LG4scil7dFtyPzA6MV0ucHVzaChuKX0sZnVuY3Rpb24oKXtyZXR1cm5bW10sW11dfSksZmk9TWUoZnVuY3Rpb24odCxuKXtpZihudWxsPT10KXJldHVybltdO3ZhciByPW4ubGVuZ3RoO3JldHVybiByPjEmJnRlKHQsblswXSxuWzFdKT9uPVtdOnI+MiYmdGUoblswXSxuWzFdLG5bMl0pJiYobj1bblswXV0pLFxuXHRcdG49MT09bi5sZW5ndGgmJnlpKG5bMF0pP25bMF06c24obiwxLFFyKSxNbih0LG4sW10pfSksY2k9TWUoZnVuY3Rpb24odCxuLHIpe3ZhciBlPTE7aWYoci5sZW5ndGgpdmFyIHU9JChyLERyKGNpKSksZT0zMnxlO3JldHVybiBDcih0LGUsbixyLHUpfSksYWk9TWUoZnVuY3Rpb24odCxuLHIpe3ZhciBlPTM7aWYoci5sZW5ndGgpdmFyIHU9JChyLERyKGFpKSksZT0zMnxlO3JldHVybiBDcihuLGUsdCxyLHUpfSksbGk9TWUoZnVuY3Rpb24odCxuKXtyZXR1cm4gb24odCwxLG4pfSksc2k9TWUoZnVuY3Rpb24odCxuLHIpe3JldHVybiBvbih0LG51KG4pfHwwLHIpfSk7TGUuQ2FjaGU9UHQ7dmFyIGhpPU1lKGZ1bmN0aW9uKHQsbil7bj0xPT1uLmxlbmd0aCYmeWkoblswXSk/bChuWzBdLE8oRnIoKSkpOmwoc24obiwxLFFyKSxPKEZyKCkpKTt2YXIgZT1uLmxlbmd0aDtyZXR1cm4gTWUoZnVuY3Rpb24odSl7Zm9yKHZhciBvPS0xLGk9dG8odS5sZW5ndGgsZSk7KytvPGk7KXVbb109bltvXS5jYWxsKHRoaXMsdVtvXSk7XG5cdFx0cmV0dXJuIHIodCx0aGlzLHUpfSl9KSxwaT1NZShmdW5jdGlvbih0LG4pe3ZhciByPSQobixEcihwaSkpO3JldHVybiBDcih0LDMyLFQsbixyKX0pLF9pPU1lKGZ1bmN0aW9uKHQsbil7dmFyIHI9JChuLERyKF9pKSk7cmV0dXJuIENyKHQsNjQsVCxuLHIpfSksdmk9TWUoZnVuY3Rpb24odCxuKXtyZXR1cm4gQ3IodCwyNTYsVCxULFQsc24obiwxKSl9KSxnaT1XcihkbiksZGk9V3IoZnVuY3Rpb24odCxuKXtyZXR1cm4gdD49bn0pLHlpPUFycmF5LmlzQXJyYXksYmk9VXU/ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBVdX06YnUseGk9V3IoU24pLGppPVdyKGZ1bmN0aW9uKHQsbil7cmV0dXJuIG4+PXR9KSx3aT1fcihmdW5jdGlvbih0LG4pe2lmKHBvfHxlZShuKXx8VWUobikpc3IobixpdShuKSx0KTtlbHNlIGZvcih2YXIgciBpbiBuKVd1LmNhbGwobixyKSYmWXQodCxyLG5bcl0pfSksbWk9X3IoZnVuY3Rpb24odCxuKXtpZihwb3x8ZWUobil8fFVlKG4pKXNyKG4sZnUobiksdCk7ZWxzZSBmb3IodmFyIHIgaW4gbilZdCh0LHIsbltyXSk7XG5cdH0pLEFpPV9yKGZ1bmN0aW9uKHQsbixyLGUpe3NyKG4sZnUobiksdCxlKX0pLE9pPV9yKGZ1bmN0aW9uKHQsbixyLGUpe3NyKG4saXUobiksdCxlKX0pLGtpPU1lKGZ1bmN0aW9uKHQsbil7cmV0dXJuIHRuKHQsc24obiwxKSl9KSxFaT1NZShmdW5jdGlvbih0KXtyZXR1cm4gdC5wdXNoKFQsVnQpLHIoQWksVCx0KX0pLFNpPU1lKGZ1bmN0aW9uKHQpe3JldHVybiB0LnB1c2goVCxvZSkscihMaSxULHQpfSksSWk9T3IoZnVuY3Rpb24odCxuLHIpe3Rbbl09cn0saHUocHUpKSxSaT1PcihmdW5jdGlvbih0LG4scil7V3UuY2FsbCh0LG4pP3Rbbl0ucHVzaChyKTp0W25dPVtyXX0sRnIpLFdpPU1lKHduKSxCaT1fcihmdW5jdGlvbih0LG4scil7Qm4odCxuLHIpfSksTGk9X3IoZnVuY3Rpb24odCxuLHIsZSl7Qm4odCxuLHIsZSl9KSxNaT1NZShmdW5jdGlvbih0LG4pe3JldHVybiBudWxsPT10P3t9OihuPWwoc24obiwxKSxmZSksQ24odCxmbihnbih0LGZ1LEJvKSxuKSkpfSksQ2k9TWUoZnVuY3Rpb24odCxuKXtcblx0XHRyZXR1cm4gbnVsbD09dD97fTpDbih0LGwoc24obiwxKSxmZSkpfSksemk9TXIoaXUpLFVpPU1yKGZ1KSwkaT1icihmdW5jdGlvbih0LG4scil7cmV0dXJuIG49bi50b0xvd2VyQ2FzZSgpLHQrKHI/YXUobik6bil9KSxEaT1icihmdW5jdGlvbih0LG4scil7cmV0dXJuIHQrKHI/XCItXCI6XCJcIikrbi50b0xvd2VyQ2FzZSgpfSksRmk9YnIoZnVuY3Rpb24odCxuLHIpe3JldHVybiB0KyhyP1wiIFwiOlwiXCIpK24udG9Mb3dlckNhc2UoKX0pLE5pPXlyKFwidG9Mb3dlckNhc2VcIiksUGk9YnIoZnVuY3Rpb24odCxuLHIpe3JldHVybiB0KyhyP1wiX1wiOlwiXCIpK24udG9Mb3dlckNhc2UoKX0pLFppPWJyKGZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gdCsocj9cIiBcIjpcIlwiKStxaShuKX0pLFRpPWJyKGZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gdCsocj9cIiBcIjpcIlwiKStuLnRvVXBwZXJDYXNlKCl9KSxxaT15cihcInRvVXBwZXJDYXNlXCIpLFZpPU1lKGZ1bmN0aW9uKHQsbil7dHJ5e3JldHVybiByKHQsVCxuKX1jYXRjaChlKXtcblx0XHRyZXR1cm4gRGUoZSk/ZTpuZXcganUoZSl9fSksS2k9TWUoZnVuY3Rpb24odCxuKXtyZXR1cm4gdShzbihuLDEpLGZ1bmN0aW9uKG4pe249ZmUobiksdFtuXT1jaSh0W25dLHQpfSksdH0pLEdpPW1yKCksSmk9bXIodHJ1ZSksWWk9TWUoZnVuY3Rpb24odCxuKXtyZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIHduKHIsdCxuKX19KSxIaT1NZShmdW5jdGlvbih0LG4pe3JldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gd24odCxyLG4pfX0pLFFpPUVyKGwpLFhpPUVyKGkpLHRmPUVyKF8pLG5mPVJyKCkscmY9UnIodHJ1ZSksZWY9a3IoZnVuY3Rpb24odCxuKXtyZXR1cm4gdCtufSksdWY9THIoXCJjZWlsXCIpLG9mPWtyKGZ1bmN0aW9uKHQsbil7cmV0dXJuIHQvbn0pLGZmPUxyKFwiZmxvb3JcIiksY2Y9a3IoZnVuY3Rpb24odCxuKXtyZXR1cm4gdCpufSksYWY9THIoXCJyb3VuZFwiKSxsZj1rcihmdW5jdGlvbih0LG4pe3JldHVybiB0LW59KTtyZXR1cm4gT3QuYWZ0ZXI9ZnVuY3Rpb24odCxuKXtpZih0eXBlb2YgbiE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBBdShcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7XG5cdFx0cmV0dXJuIHQ9WGUodCksZnVuY3Rpb24oKXtyZXR1cm4gMT4tLXQ/bi5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dm9pZCAwfX0sT3QuYXJ5PVNlLE90LmFzc2lnbj13aSxPdC5hc3NpZ25Jbj1taSxPdC5hc3NpZ25JbldpdGg9QWksT3QuYXNzaWduV2l0aD1PaSxPdC5hdD1raSxPdC5iZWZvcmU9SWUsT3QuYmluZD1jaSxPdC5iaW5kQWxsPUtpLE90LmJpbmRLZXk9YWksT3QuY2FzdEFycmF5PWZ1bmN0aW9uKCl7aWYoIWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuW107dmFyIHQ9YXJndW1lbnRzWzBdO3JldHVybiB5aSh0KT90Olt0XX0sT3QuY2hhaW49eGUsT3QuY2h1bms9ZnVuY3Rpb24odCxuLHIpe2lmKG49KHI/dGUodCxuLHIpOm49PT1UKT8xOlh1KFhlKG4pLDApLHI9dD90Lmxlbmd0aDowLCFyfHwxPm4pcmV0dXJuW107Zm9yKHZhciBlPTAsdT0wLG89QXJyYXkoS3Uoci9uKSk7cj5lOylvW3UrK109VG4odCxlLGUrPW4pO3JldHVybiBvfSxPdC5jb21wYWN0PWZ1bmN0aW9uKHQpe2Zvcih2YXIgbj0tMSxyPXQ/dC5sZW5ndGg6MCxlPTAsdT1bXTsrK248cjspe1xuXHRcdHZhciBvPXRbbl07byYmKHVbZSsrXT1vKX1yZXR1cm4gdX0sT3QuY29uY2F0PWZ1bmN0aW9uKCl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1BcnJheSh0P3QtMTowKSxyPWFyZ3VtZW50c1swXSxlPXQ7ZS0tOyluW2UtMV09YXJndW1lbnRzW2VdO3JldHVybiB0P3MoeWkocik/bHIocik6W3JdLHNuKG4sMSkpOltdfSxPdC5jb25kPWZ1bmN0aW9uKHQpe3ZhciBuPXQ/dC5sZW5ndGg6MCxlPUZyKCk7cmV0dXJuIHQ9bj9sKHQsZnVuY3Rpb24odCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdFsxXSl0aHJvdyBuZXcgQXUoXCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIpO3JldHVybltlKHRbMF0pLHRbMV1dfSk6W10sTWUoZnVuY3Rpb24oZSl7Zm9yKHZhciB1PS0xOysrdTxuOyl7dmFyIG89dFt1XTtpZihyKG9bMF0sdGhpcyxlKSlyZXR1cm4gcihvWzFdLHRoaXMsZSl9fSl9LE90LmNvbmZvcm1zPWZ1bmN0aW9uKHQpe3JldHVybiBlbihybih0LHRydWUpKX0sT3QuY29uc3RhbnQ9aHUsT3QuY291bnRCeT10aSxcblx0XHRPdC5jcmVhdGU9ZnVuY3Rpb24odCxuKXt2YXIgcj11bih0KTtyZXR1cm4gbj9YdChyLG4pOnJ9LE90LmN1cnJ5PVJlLE90LmN1cnJ5UmlnaHQ9V2UsT3QuZGVib3VuY2U9QmUsT3QuZGVmYXVsdHM9RWksT3QuZGVmYXVsdHNEZWVwPVNpLE90LmRlZmVyPWxpLE90LmRlbGF5PXNpLE90LmRpZmZlcmVuY2U9em8sT3QuZGlmZmVyZW5jZUJ5PVVvLE90LmRpZmZlcmVuY2VXaXRoPSRvLE90LmRyb3A9bGUsT3QuZHJvcFJpZ2h0PXNlLE90LmRyb3BSaWdodFdoaWxlPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQmJnQubGVuZ3RoP1FuKHQsRnIobiwzKSx0cnVlLHRydWUpOltdfSxPdC5kcm9wV2hpbGU9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdCYmdC5sZW5ndGg/UW4odCxGcihuLDMpLHRydWUpOltdfSxPdC5maWxsPWZ1bmN0aW9uKHQsbixyLGUpe3ZhciB1PXQ/dC5sZW5ndGg6MDtpZighdSlyZXR1cm5bXTtmb3IociYmdHlwZW9mIHIhPVwibnVtYmVyXCImJnRlKHQsbixyKSYmKHI9MCxlPXUpLHU9dC5sZW5ndGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICByPVhlKHIpLDA+ciYmKHI9LXI+dT8wOnUrciksZT1lPT09VHx8ZT51P3U6WGUoZSksMD5lJiYoZSs9dSksZT1yPmU/MDp0dShlKTtlPnI7KXRbcisrXT1uO3JldHVybiB0fSxPdC5maWx0ZXI9ZnVuY3Rpb24odCxuKXtyZXR1cm4oeWkodCk/ZjpsbikodCxGcihuLDMpKX0sT3QuZmxhdE1hcD1mdW5jdGlvbih0LG4pe3JldHVybiBzbihPZSh0LG4pLDEpfSxPdC5mbGF0TWFwRGVlcD1mdW5jdGlvbih0LG4pe3JldHVybiBzbihPZSh0LG4pLHEpfSxPdC5mbGF0TWFwRGVwdGg9ZnVuY3Rpb24odCxuLHIpe3JldHVybiByPXI9PT1UPzE6WGUociksc24oT2UodCxuKSxyKX0sT3QuZmxhdHRlbj1mdW5jdGlvbih0KXtyZXR1cm4gdCYmdC5sZW5ndGg/c24odCwxKTpbXX0sT3QuZmxhdHRlbkRlZXA9ZnVuY3Rpb24odCl7cmV0dXJuIHQmJnQubGVuZ3RoP3NuKHQscSk6W119LE90LmZsYXR0ZW5EZXB0aD1mdW5jdGlvbih0LG4pe3JldHVybiB0JiZ0Lmxlbmd0aD8obj1uPT09VD8xOlhlKG4pLHNuKHQsbikpOltdO1xuXHR9LE90LmZsaXA9ZnVuY3Rpb24odCl7cmV0dXJuIENyKHQsNTEyKX0sT3QuZmxvdz1HaSxPdC5mbG93UmlnaHQ9SmksT3QuZnJvbVBhaXJzPWZ1bmN0aW9uKHQpe2Zvcih2YXIgbj0tMSxyPXQ/dC5sZW5ndGg6MCxlPXt9OysrbjxyOyl7dmFyIHU9dFtuXTtlW3VbMF1dPXVbMV19cmV0dXJuIGV9LE90LmZ1bmN0aW9ucz1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbD09dD9bXTpfbih0LGl1KHQpKX0sT3QuZnVuY3Rpb25zSW49ZnVuY3Rpb24odCl7cmV0dXJuIG51bGw9PXQ/W106X24odCxmdSh0KSl9LE90Lmdyb3VwQnk9ZWksT3QuaW5pdGlhbD1mdW5jdGlvbih0KXtyZXR1cm4gc2UodCwxKX0sT3QuaW50ZXJzZWN0aW9uPURvLE90LmludGVyc2VjdGlvbkJ5PUZvLE90LmludGVyc2VjdGlvbldpdGg9Tm8sT3QuaW52ZXJ0PUlpLE90LmludmVydEJ5PVJpLE90Lmludm9rZU1hcD11aSxPdC5pdGVyYXRlZT1fdSxPdC5rZXlCeT1vaSxPdC5rZXlzPWl1LE90LmtleXNJbj1mdSxPdC5tYXA9T2UsXG5cdFx0T3QubWFwS2V5cz1mdW5jdGlvbih0LG4pe3ZhciByPXt9O3JldHVybiBuPUZyKG4sMyksaG4odCxmdW5jdGlvbih0LGUsdSl7cltuKHQsZSx1KV09dH0pLHJ9LE90Lm1hcFZhbHVlcz1mdW5jdGlvbih0LG4pe3ZhciByPXt9O3JldHVybiBuPUZyKG4sMyksaG4odCxmdW5jdGlvbih0LGUsdSl7cltlXT1uKHQsZSx1KX0pLHJ9LE90Lm1hdGNoZXM9ZnVuY3Rpb24odCl7cmV0dXJuIFJuKHJuKHQsdHJ1ZSkpfSxPdC5tYXRjaGVzUHJvcGVydHk9ZnVuY3Rpb24odCxuKXtyZXR1cm4gV24odCxybihuLHRydWUpKX0sT3QubWVtb2l6ZT1MZSxPdC5tZXJnZT1CaSxPdC5tZXJnZVdpdGg9TGksT3QubWV0aG9kPVlpLE90Lm1ldGhvZE9mPUhpLE90Lm1peGluPXZ1LE90Lm5lZ2F0ZT1mdW5jdGlvbih0KXtpZih0eXBlb2YgdCE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBBdShcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIXQuYXBwbHkodGhpcyxhcmd1bWVudHMpfX0sT3QubnRoQXJnPWZ1bmN0aW9uKHQpe1xuXHRcdHJldHVybiB0PVhlKHQpLE1lKGZ1bmN0aW9uKG4pe3JldHVybiBMbihuLHQpfSl9LE90Lm9taXQ9TWksT3Qub21pdEJ5PWZ1bmN0aW9uKHQsbil7cmV0dXJuIG49RnIobiksem4odCxmdW5jdGlvbih0LHIpe3JldHVybiFuKHQscil9KX0sT3Qub25jZT1mdW5jdGlvbih0KXtyZXR1cm4gSWUoMix0KX0sT3Qub3JkZXJCeT1mdW5jdGlvbih0LG4scixlKXtyZXR1cm4gbnVsbD09dD9bXTooeWkobil8fChuPW51bGw9PW4/W106W25dKSxyPWU/VDpyLHlpKHIpfHwocj1udWxsPT1yP1tdOltyXSksTW4odCxuLHIpKX0sT3Qub3Zlcj1RaSxPdC5vdmVyQXJncz1oaSxPdC5vdmVyRXZlcnk9WGksT3Qub3ZlclNvbWU9dGYsT3QucGFydGlhbD1waSxPdC5wYXJ0aWFsUmlnaHQ9X2ksT3QucGFydGl0aW9uPWlpLE90LnBpY2s9Q2ksT3QucGlja0J5PWZ1bmN0aW9uKHQsbil7cmV0dXJuIG51bGw9PXQ/e306em4odCxGcihuKSl9LE90LnByb3BlcnR5PWR1LE90LnByb3BlcnR5T2Y9ZnVuY3Rpb24odCl7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiBudWxsPT10P1Q6dm4odCxuKX19LE90LnB1bGw9UG8sT3QucHVsbEFsbD1nZSxPdC5wdWxsQWxsQnk9ZnVuY3Rpb24odCxuLHIpe3JldHVybiB0JiZ0Lmxlbmd0aCYmbiYmbi5sZW5ndGg/RG4odCxuLEZyKHIpKTp0fSxPdC5wdWxsQWxsV2l0aD1mdW5jdGlvbih0LG4scil7cmV0dXJuIHQmJnQubGVuZ3RoJiZuJiZuLmxlbmd0aD9Ebih0LG4sVCxyKTp0fSxPdC5wdWxsQXQ9Wm8sT3QucmFuZ2U9bmYsT3QucmFuZ2VSaWdodD1yZixPdC5yZWFyZz12aSxPdC5yZWplY3Q9ZnVuY3Rpb24odCxuKXt2YXIgcj15aSh0KT9mOmxuO3JldHVybiBuPUZyKG4sMykscih0LGZ1bmN0aW9uKHQscixlKXtyZXR1cm4hbih0LHIsZSl9KX0sT3QucmVtb3ZlPWZ1bmN0aW9uKHQsbil7dmFyIHI9W107aWYoIXR8fCF0Lmxlbmd0aClyZXR1cm4gcjt2YXIgZT0tMSx1PVtdLG89dC5sZW5ndGg7Zm9yKG49RnIobiwzKTsrK2U8bzspe3ZhciBpPXRbZV07bihpLGUsdCkmJihyLnB1c2goaSksXG5cdFx0dS5wdXNoKGUpKX1yZXR1cm4gRm4odCx1KSxyfSxPdC5yZXN0PU1lLE90LnJldmVyc2U9ZGUsT3Quc2FtcGxlU2l6ZT1rZSxPdC5zZXQ9ZnVuY3Rpb24odCxuLHIpe3JldHVybiBudWxsPT10P3Q6Wm4odCxuLHIpfSxPdC5zZXRXaXRoPWZ1bmN0aW9uKHQsbixyLGUpe3JldHVybiBlPXR5cGVvZiBlPT1cImZ1bmN0aW9uXCI/ZTpULG51bGw9PXQ/dDpabih0LG4scixlKX0sT3Quc2h1ZmZsZT1mdW5jdGlvbih0KXtyZXR1cm4ga2UodCw0Mjk0OTY3Mjk1KX0sT3Quc2xpY2U9ZnVuY3Rpb24odCxuLHIpe3ZhciBlPXQ/dC5sZW5ndGg6MDtyZXR1cm4gZT8ociYmdHlwZW9mIHIhPVwibnVtYmVyXCImJnRlKHQsbixyKT8obj0wLHI9ZSk6KG49bnVsbD09bj8wOlhlKG4pLHI9cj09PVQ/ZTpYZShyKSksVG4odCxuLHIpKTpbXX0sT3Quc29ydEJ5PWZpLE90LnNvcnRlZFVuaXE9ZnVuY3Rpb24odCl7cmV0dXJuIHQmJnQubGVuZ3RoP0duKHQpOltdfSxPdC5zb3J0ZWRVbmlxQnk9ZnVuY3Rpb24odCxuKXtcblx0XHRyZXR1cm4gdCYmdC5sZW5ndGg/R24odCxGcihuKSk6W119LE90LnNwbGl0PWZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gciYmdHlwZW9mIHIhPVwibnVtYmVyXCImJnRlKHQsbixyKSYmKG49cj1UKSxyPXI9PT1UPzQyOTQ5NjcyOTU6cj4+PjAscj8odD1ldSh0KSkmJih0eXBlb2Ygbj09XCJzdHJpbmdcInx8bnVsbCE9biYmIUtlKG4pKSYmKG49WW4obiksXCJcIj09biYmV3QudGVzdCh0KSk/dXIodC5tYXRjaChJdCksMCxyKTpvby5jYWxsKHQsbixyKTpbXX0sT3Quc3ByZWFkPWZ1bmN0aW9uKHQsbil7aWYodHlwZW9mIHQhPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgQXUoXCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIpO3JldHVybiBuPW49PT1UPzA6WHUoWGUobiksMCksTWUoZnVuY3Rpb24oZSl7dmFyIHU9ZVtuXTtyZXR1cm4gZT11cihlLDAsbiksdSYmcyhlLHUpLHIodCx0aGlzLGUpfSl9LE90LnRhaWw9ZnVuY3Rpb24odCl7cmV0dXJuIGxlKHQsMSl9LE90LnRha2U9ZnVuY3Rpb24odCxuLHIpe3JldHVybiB0JiZ0Lmxlbmd0aD8obj1yfHxuPT09VD8xOlhlKG4pLFxuXHRcdFRuKHQsMCwwPm4/MDpuKSk6W119LE90LnRha2VSaWdodD1mdW5jdGlvbih0LG4scil7dmFyIGU9dD90Lmxlbmd0aDowO3JldHVybiBlPyhuPXJ8fG49PT1UPzE6WGUobiksbj1lLW4sVG4odCwwPm4/MDpuLGUpKTpbXX0sT3QudGFrZVJpZ2h0V2hpbGU9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdCYmdC5sZW5ndGg/UW4odCxGcihuLDMpLGZhbHNlLHRydWUpOltdfSxPdC50YWtlV2hpbGU9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdCYmdC5sZW5ndGg/UW4odCxGcihuLDMpKTpbXX0sT3QudGFwPWZ1bmN0aW9uKHQsbil7cmV0dXJuIG4odCksdH0sT3QudGhyb3R0bGU9ZnVuY3Rpb24odCxuLHIpe3ZhciBlPXRydWUsdT10cnVlO2lmKHR5cGVvZiB0IT1cImZ1bmN0aW9uXCIpdGhyb3cgbmV3IEF1KFwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiKTtyZXR1cm4gWmUocikmJihlPVwibGVhZGluZ1wiaW4gcj8hIXIubGVhZGluZzplLHU9XCJ0cmFpbGluZ1wiaW4gcj8hIXIudHJhaWxpbmc6dSksQmUodCxuLHtsZWFkaW5nOmUsbWF4V2FpdDpuLFxuXHRcdHRyYWlsaW5nOnV9KX0sT3QudGhydT1qZSxPdC50b0FycmF5PUhlLE90LnRvUGFpcnM9emksT3QudG9QYWlyc0luPVVpLE90LnRvUGF0aD1mdW5jdGlvbih0KXtyZXR1cm4geWkodCk/bCh0LGZlKTpKZSh0KT9bdF06bHIoQ28odCkpfSxPdC50b1BsYWluT2JqZWN0PXJ1LE90LnRyYW5zZm9ybT1mdW5jdGlvbih0LG4scil7dmFyIGU9eWkodCl8fFllKHQpO2lmKG49RnIobiw0KSxudWxsPT1yKWlmKGV8fFplKHQpKXt2YXIgbz10LmNvbnN0cnVjdG9yO3I9ZT95aSh0KT9uZXcgbzpbXTpGZShvKT91bihKdShPYmplY3QodCkpKTp7fX1lbHNlIHI9e307cmV0dXJuKGU/dTpobikodCxmdW5jdGlvbih0LGUsdSl7cmV0dXJuIG4ocix0LGUsdSl9KSxyfSxPdC51bmFyeT1mdW5jdGlvbih0KXtyZXR1cm4gU2UodCwxKX0sT3QudW5pb249VG8sT3QudW5pb25CeT1xbyxPdC51bmlvbldpdGg9Vm8sT3QudW5pcT1mdW5jdGlvbih0KXtyZXR1cm4gdCYmdC5sZW5ndGg/SG4odCk6W119LE90LnVuaXFCeT1mdW5jdGlvbih0LG4pe1xuXHRcdHJldHVybiB0JiZ0Lmxlbmd0aD9Ibih0LEZyKG4pKTpbXX0sT3QudW5pcVdpdGg9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdCYmdC5sZW5ndGg/SG4odCxULG4pOltdfSxPdC51bnNldD1mdW5jdGlvbih0LG4pe3ZhciByO2lmKG51bGw9PXQpcj10cnVlO2Vsc2V7cj10O3ZhciBlPW4sZT1uZShlLHIpP1tlXTplcihlKTtyPWllKHIsZSksZT1mZSh2ZShlKSkscj0hKG51bGwhPXImJnluKHIsZSkpfHxkZWxldGUgcltlXX1yZXR1cm4gcn0sT3QudW56aXA9eWUsT3QudW56aXBXaXRoPWJlLE90LnVwZGF0ZT1mdW5jdGlvbih0LG4scil7cmV0dXJuIG51bGw9PXQ/dDpabih0LG4sKHR5cGVvZiByPT1cImZ1bmN0aW9uXCI/cjpwdSkodm4odCxuKSksdm9pZCAwKX0sT3QudXBkYXRlV2l0aD1mdW5jdGlvbih0LG4scixlKXtyZXR1cm4gZT10eXBlb2YgZT09XCJmdW5jdGlvblwiP2U6VCxudWxsIT10JiYodD1abih0LG4sKHR5cGVvZiByPT1cImZ1bmN0aW9uXCI/cjpwdSkodm4odCxuKSksZSkpLHR9LE90LnZhbHVlcz1jdSxcblx0XHRPdC52YWx1ZXNJbj1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbD09dD9bXTprKHQsZnUodCkpfSxPdC53aXRob3V0PUtvLE90LndvcmRzPXN1LE90LndyYXA9ZnVuY3Rpb24odCxuKXtyZXR1cm4gbj1udWxsPT1uP3B1Om4scGkobix0KX0sT3QueG9yPUdvLE90LnhvckJ5PUpvLE90LnhvcldpdGg9WW8sT3QuemlwPUhvLE90LnppcE9iamVjdD1mdW5jdGlvbih0LG4pe3JldHVybiBucih0fHxbXSxufHxbXSxZdCl9LE90LnppcE9iamVjdERlZXA9ZnVuY3Rpb24odCxuKXtyZXR1cm4gbnIodHx8W10sbnx8W10sWm4pfSxPdC56aXBXaXRoPVFvLE90LmVudHJpZXM9emksT3QuZW50cmllc0luPVVpLE90LmV4dGVuZD1taSxPdC5leHRlbmRXaXRoPUFpLHZ1KE90LE90KSxPdC5hZGQ9ZWYsT3QuYXR0ZW1wdD1WaSxPdC5jYW1lbENhc2U9JGksT3QuY2FwaXRhbGl6ZT1hdSxPdC5jZWlsPXVmLE90LmNsYW1wPWZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gcj09PVQmJihyPW4sbj1UKSxyIT09VCYmKHI9bnUociksXG5cdFx0XHRyPXI9PT1yP3I6MCksbiE9PVQmJihuPW51KG4pLG49bj09PW4/bjowKSxubihudSh0KSxuLHIpfSxPdC5jbG9uZT1mdW5jdGlvbih0KXtyZXR1cm4gcm4odCxmYWxzZSx0cnVlKX0sT3QuY2xvbmVEZWVwPWZ1bmN0aW9uKHQpe3JldHVybiBybih0LHRydWUsdHJ1ZSl9LE90LmNsb25lRGVlcFdpdGg9ZnVuY3Rpb24odCxuKXtyZXR1cm4gcm4odCx0cnVlLHRydWUsbil9LE90LmNsb25lV2l0aD1mdW5jdGlvbih0LG4pe3JldHVybiBybih0LGZhbHNlLHRydWUsbil9LE90LmRlYnVycj1sdSxPdC5kaXZpZGU9b2YsT3QuZW5kc1dpdGg9ZnVuY3Rpb24odCxuLHIpe3Q9ZXUodCksbj1ZbihuKTt2YXIgZT10Lmxlbmd0aDtyZXR1cm4gcj1yPT09VD9lOm5uKFhlKHIpLDAsZSksci09bi5sZW5ndGgscj49MCYmdC5pbmRleE9mKG4scik9PXJ9LE90LmVxPUNlLE90LmVzY2FwZT1mdW5jdGlvbih0KXtyZXR1cm4odD1ldSh0KSkmJlgudGVzdCh0KT90LnJlcGxhY2UoSCxCKTp0fSxPdC5lc2NhcGVSZWdFeHA9ZnVuY3Rpb24odCl7XG5cdFx0XHRyZXR1cm4odD1ldSh0KSkmJmZ0LnRlc3QodCk/dC5yZXBsYWNlKGl0LFwiXFxcXCQmXCIpOnR9LE90LmV2ZXJ5PWZ1bmN0aW9uKHQsbixyKXt2YXIgZT15aSh0KT9pOmNuO3JldHVybiByJiZ0ZSh0LG4scikmJihuPVQpLGUodCxGcihuLDMpKX0sT3QuZmluZD1uaSxPdC5maW5kSW5kZXg9aGUsT3QuZmluZEtleT1mdW5jdGlvbih0LG4pe3JldHVybiB2KHQsRnIobiwzKSxobil9LE90LmZpbmRMYXN0PXJpLE90LmZpbmRMYXN0SW5kZXg9cGUsT3QuZmluZExhc3RLZXk9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdih0LEZyKG4sMykscG4pfSxPdC5mbG9vcj1mZixPdC5mb3JFYWNoPW1lLE90LmZvckVhY2hSaWdodD1BZSxPdC5mb3JJbj1mdW5jdGlvbih0LG4pe3JldHVybiBudWxsPT10P3Q6a28odCxGcihuLDMpLGZ1KX0sT3QuZm9ySW5SaWdodD1mdW5jdGlvbih0LG4pe3JldHVybiBudWxsPT10P3Q6RW8odCxGcihuLDMpLGZ1KX0sT3QuZm9yT3duPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQmJmhuKHQsRnIobiwzKSk7XG5cdFx0fSxPdC5mb3JPd25SaWdodD1mdW5jdGlvbih0LG4pe3JldHVybiB0JiZwbih0LEZyKG4sMykpfSxPdC5nZXQ9dXUsT3QuZ3Q9Z2ksT3QuZ3RlPWRpLE90Lmhhcz1mdW5jdGlvbih0LG4pe3JldHVybiBudWxsIT10JiZWcih0LG4seW4pfSxPdC5oYXNJbj1vdSxPdC5oZWFkPV9lLE90LmlkZW50aXR5PXB1LE90LmluY2x1ZGVzPWZ1bmN0aW9uKHQsbixyLGUpe3JldHVybiB0PVVlKHQpP3Q6Y3UodCkscj1yJiYhZT9YZShyKTowLGU9dC5sZW5ndGgsMD5yJiYocj1YdShlK3IsMCkpLEdlKHQpP2U+PXImJi0xPHQuaW5kZXhPZihuLHIpOiEhZSYmLTE8ZCh0LG4scil9LE90LmluZGV4T2Y9ZnVuY3Rpb24odCxuLHIpe3ZhciBlPXQ/dC5sZW5ndGg6MDtyZXR1cm4gZT8ocj1udWxsPT1yPzA6WGUociksMD5yJiYocj1YdShlK3IsMCkpLGQodCxuLHIpKTotMX0sT3QuaW5SYW5nZT1mdW5jdGlvbih0LG4scil7cmV0dXJuIG49bnUobil8fDAscj09PVQ/KHI9bixuPTApOnI9bnUocil8fDAsdD1udSh0KSxcblx0XHR0Pj10byhuLHIpJiZ0PFh1KG4scil9LE90Lmludm9rZT1XaSxPdC5pc0FyZ3VtZW50cz16ZSxPdC5pc0FycmF5PXlpLE90LmlzQXJyYXlCdWZmZXI9ZnVuY3Rpb24odCl7cmV0dXJuIFRlKHQpJiZcIltvYmplY3QgQXJyYXlCdWZmZXJdXCI9PU11LmNhbGwodCl9LE90LmlzQXJyYXlMaWtlPVVlLE90LmlzQXJyYXlMaWtlT2JqZWN0PSRlLE90LmlzQm9vbGVhbj1mdW5jdGlvbih0KXtyZXR1cm4gdHJ1ZT09PXR8fGZhbHNlPT09dHx8VGUodCkmJlwiW29iamVjdCBCb29sZWFuXVwiPT1NdS5jYWxsKHQpfSxPdC5pc0J1ZmZlcj1iaSxPdC5pc0RhdGU9ZnVuY3Rpb24odCl7cmV0dXJuIFRlKHQpJiZcIltvYmplY3QgRGF0ZV1cIj09TXUuY2FsbCh0KX0sT3QuaXNFbGVtZW50PWZ1bmN0aW9uKHQpe3JldHVybiEhdCYmMT09PXQubm9kZVR5cGUmJlRlKHQpJiYhVmUodCl9LE90LmlzRW1wdHk9ZnVuY3Rpb24odCl7aWYoVWUodCkmJih5aSh0KXx8R2UodCl8fEZlKHQuc3BsaWNlKXx8emUodCl8fGJpKHQpKSlyZXR1cm4hdC5sZW5ndGg7XG5cdFx0XHRpZihUZSh0KSl7dmFyIG49cXIodCk7aWYoXCJbb2JqZWN0IE1hcF1cIj09bnx8XCJbb2JqZWN0IFNldF1cIj09bilyZXR1cm4hdC5zaXplfWZvcih2YXIgciBpbiB0KWlmKFd1LmNhbGwodCxyKSlyZXR1cm4gZmFsc2U7cmV0dXJuIShwbyYmaXUodCkubGVuZ3RoKX0sT3QuaXNFcXVhbD1mdW5jdGlvbih0LG4pe3JldHVybiBtbih0LG4pfSxPdC5pc0VxdWFsV2l0aD1mdW5jdGlvbih0LG4scil7dmFyIGU9KHI9dHlwZW9mIHI9PVwiZnVuY3Rpb25cIj9yOlQpP3IodCxuKTpUO3JldHVybiBlPT09VD9tbih0LG4scik6ISFlfSxPdC5pc0Vycm9yPURlLE90LmlzRmluaXRlPWZ1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdD09XCJudW1iZXJcIiYmWXUodCl9LE90LmlzRnVuY3Rpb249RmUsT3QuaXNJbnRlZ2VyPU5lLE90LmlzTGVuZ3RoPVBlLE90LmlzTWFwPWZ1bmN0aW9uKHQpe3JldHVybiBUZSh0KSYmXCJbb2JqZWN0IE1hcF1cIj09cXIodCl9LE90LmlzTWF0Y2g9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdD09PW58fEFuKHQsbixQcihuKSk7XG5cdFx0fSxPdC5pc01hdGNoV2l0aD1mdW5jdGlvbih0LG4scil7cmV0dXJuIHI9dHlwZW9mIHI9PVwiZnVuY3Rpb25cIj9yOlQsQW4odCxuLFByKG4pLHIpfSxPdC5pc05hTj1mdW5jdGlvbih0KXtyZXR1cm4gcWUodCkmJnQhPSt0fSxPdC5pc05hdGl2ZT1mdW5jdGlvbih0KXtpZihMbyh0KSl0aHJvdyBuZXcganUoXCJUaGlzIG1ldGhvZCBpcyBub3Qgc3VwcG9ydGVkIHdpdGggYGNvcmUtanNgLiBUcnkgaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zLlwiKTtyZXR1cm4gT24odCl9LE90LmlzTmlsPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsPT10fSxPdC5pc051bGw9ZnVuY3Rpb24odCl7cmV0dXJuIG51bGw9PT10fSxPdC5pc051bWJlcj1xZSxPdC5pc09iamVjdD1aZSxPdC5pc09iamVjdExpa2U9VGUsT3QuaXNQbGFpbk9iamVjdD1WZSxPdC5pc1JlZ0V4cD1LZSxPdC5pc1NhZmVJbnRlZ2VyPWZ1bmN0aW9uKHQpe3JldHVybiBOZSh0KSYmdD49LTkwMDcxOTkyNTQ3NDA5OTEmJjkwMDcxOTkyNTQ3NDA5OTE+PXQ7XG5cdFx0fSxPdC5pc1NldD1mdW5jdGlvbih0KXtyZXR1cm4gVGUodCkmJlwiW29iamVjdCBTZXRdXCI9PXFyKHQpfSxPdC5pc1N0cmluZz1HZSxPdC5pc1N5bWJvbD1KZSxPdC5pc1R5cGVkQXJyYXk9WWUsT3QuaXNVbmRlZmluZWQ9ZnVuY3Rpb24odCl7cmV0dXJuIHQ9PT1UfSxPdC5pc1dlYWtNYXA9ZnVuY3Rpb24odCl7cmV0dXJuIFRlKHQpJiZcIltvYmplY3QgV2Vha01hcF1cIj09cXIodCl9LE90LmlzV2Vha1NldD1mdW5jdGlvbih0KXtyZXR1cm4gVGUodCkmJlwiW29iamVjdCBXZWFrU2V0XVwiPT1NdS5jYWxsKHQpfSxPdC5qb2luPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQ/SHUuY2FsbCh0LG4pOlwiXCJ9LE90LmtlYmFiQ2FzZT1EaSxPdC5sYXN0PXZlLE90Lmxhc3RJbmRleE9mPWZ1bmN0aW9uKHQsbixyKXt2YXIgZT10P3QubGVuZ3RoOjA7aWYoIWUpcmV0dXJuLTE7dmFyIHU9ZTtpZihyIT09VCYmKHU9WGUociksdT0oMD51P1h1KGUrdSwwKTp0byh1LGUtMSkpKzEpLG4hPT1uKXJldHVybiBNKHQsdS0xLHRydWUpO1xuXHRcdFx0Zm9yKDt1LS07KWlmKHRbdV09PT1uKXJldHVybiB1O3JldHVybi0xfSxPdC5sb3dlckNhc2U9RmksT3QubG93ZXJGaXJzdD1OaSxPdC5sdD14aSxPdC5sdGU9amksT3QubWF4PWZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0Lmxlbmd0aD9hbih0LHB1LGRuKTpUfSxPdC5tYXhCeT1mdW5jdGlvbih0LG4pe3JldHVybiB0JiZ0Lmxlbmd0aD9hbih0LEZyKG4pLGRuKTpUfSxPdC5tZWFuPWZ1bmN0aW9uKHQpe3JldHVybiBiKHQscHUpfSxPdC5tZWFuQnk9ZnVuY3Rpb24odCxuKXtyZXR1cm4gYih0LEZyKG4pKX0sT3QubWluPWZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0Lmxlbmd0aD9hbih0LHB1LFNuKTpUfSxPdC5taW5CeT1mdW5jdGlvbih0LG4pe3JldHVybiB0JiZ0Lmxlbmd0aD9hbih0LEZyKG4pLFNuKTpUfSxPdC5zdHViQXJyYXk9eXUsT3Quc3R1YkZhbHNlPWJ1LE90LnN0dWJPYmplY3Q9ZnVuY3Rpb24oKXtyZXR1cm57fX0sT3Quc3R1YlN0cmluZz1mdW5jdGlvbigpe3JldHVyblwiXCJ9LE90LnN0dWJUcnVlPWZ1bmN0aW9uKCl7XG5cdFx0XHRyZXR1cm4gdHJ1ZX0sT3QubXVsdGlwbHk9Y2YsT3QubnRoPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQmJnQubGVuZ3RoP0xuKHQsWGUobikpOlR9LE90Lm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gS3QuXz09PXRoaXMmJihLdC5fPUN1KSx0aGlzfSxPdC5ub29wPWd1LE90Lm5vdz1FZSxPdC5wYWQ9ZnVuY3Rpb24odCxuLHIpe3Q9ZXUodCk7dmFyIGU9KG49WGUobikpP04odCk6MDtyZXR1cm4hbnx8ZT49bj90OihuPShuLWUpLzIsU3IoR3UobikscikrdCtTcihLdShuKSxyKSl9LE90LnBhZEVuZD1mdW5jdGlvbih0LG4scil7dD1ldSh0KTt2YXIgZT0obj1YZShuKSk/Tih0KTowO3JldHVybiBuJiZuPmU/dCtTcihuLWUscik6dH0sT3QucGFkU3RhcnQ9ZnVuY3Rpb24odCxuLHIpe3Q9ZXUodCk7dmFyIGU9KG49WGUobikpP04odCk6MDtyZXR1cm4gbiYmbj5lP1NyKG4tZSxyKSt0OnR9LE90LnBhcnNlSW50PWZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gcnx8bnVsbD09bj9uPTA6biYmKG49K24pLFxuXHRcdFx0dD1ldSh0KS5yZXBsYWNlKGN0LFwiXCIpLG5vKHQsbnx8KHZ0LnRlc3QodCk/MTY6MTApKX0sT3QucmFuZG9tPWZ1bmN0aW9uKHQsbixyKXtpZihyJiZ0eXBlb2YgciE9XCJib29sZWFuXCImJnRlKHQsbixyKSYmKG49cj1UKSxyPT09VCYmKHR5cGVvZiBuPT1cImJvb2xlYW5cIj8ocj1uLG49VCk6dHlwZW9mIHQ9PVwiYm9vbGVhblwiJiYocj10LHQ9VCkpLHQ9PT1UJiZuPT09VD8odD0wLG49MSk6KHQ9bnUodCl8fDAsbj09PVQ/KG49dCx0PTApOm49bnUobil8fDApLHQ+bil7dmFyIGU9dDt0PW4sbj1lfXJldHVybiByfHx0JTF8fG4lMT8ocj1ybygpLHRvKHQrcioobi10K0Z0KFwiMWUtXCIrKChyK1wiXCIpLmxlbmd0aC0xKSkpLG4pKTpObih0LG4pfSxPdC5yZWR1Y2U9ZnVuY3Rpb24odCxuLHIpe3ZhciBlPXlpKHQpP2g6eCx1PTM+YXJndW1lbnRzLmxlbmd0aDtyZXR1cm4gZSh0LEZyKG4sNCkscix1LEFvKX0sT3QucmVkdWNlUmlnaHQ9ZnVuY3Rpb24odCxuLHIpe3ZhciBlPXlpKHQpP3A6eCx1PTM+YXJndW1lbnRzLmxlbmd0aDtcblx0XHRcdHJldHVybiBlKHQsRnIobiw0KSxyLHUsT28pfSxPdC5yZXBlYXQ9ZnVuY3Rpb24odCxuLHIpe3JldHVybiBuPShyP3RlKHQsbixyKTpuPT09VCk/MTpYZShuKSxQbihldSh0KSxuKX0sT3QucmVwbGFjZT1mdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cyxuPWV1KHRbMF0pO3JldHVybiAzPnQubGVuZ3RoP246ZW8uY2FsbChuLHRbMV0sdFsyXSl9LE90LnJlc3VsdD1mdW5jdGlvbih0LG4scil7bj1uZShuLHQpP1tuXTplcihuKTt2YXIgZT0tMSx1PW4ubGVuZ3RoO2Zvcih1fHwodD1ULHU9MSk7KytlPHU7KXt2YXIgbz1udWxsPT10P1Q6dFtmZShuW2VdKV07bz09PVQmJihlPXUsbz1yKSx0PUZlKG8pP28uY2FsbCh0KTpvfXJldHVybiB0fSxPdC5yb3VuZD1hZixPdC5ydW5JbkNvbnRleHQ9WixPdC5zYW1wbGU9ZnVuY3Rpb24odCl7dD1VZSh0KT90OmN1KHQpO3ZhciBuPXQubGVuZ3RoO3JldHVybiBuPjA/dFtObigwLG4tMSldOlR9LE90LnNpemU9ZnVuY3Rpb24odCl7aWYobnVsbD09dClyZXR1cm4gMDtcblx0XHRcdGlmKFVlKHQpKXt2YXIgbj10Lmxlbmd0aDtyZXR1cm4gbiYmR2UodCk/Tih0KTpufXJldHVybiBUZSh0KSYmKG49cXIodCksXCJbb2JqZWN0IE1hcF1cIj09bnx8XCJbb2JqZWN0IFNldF1cIj09bik/dC5zaXplOml1KHQpLmxlbmd0aH0sT3Quc25ha2VDYXNlPVBpLE90LnNvbWU9ZnVuY3Rpb24odCxuLHIpe3ZhciBlPXlpKHQpP186cW47cmV0dXJuIHImJnRlKHQsbixyKSYmKG49VCksZSh0LEZyKG4sMykpfSxPdC5zb3J0ZWRJbmRleD1mdW5jdGlvbih0LG4pe3JldHVybiBWbih0LG4pfSxPdC5zb3J0ZWRJbmRleEJ5PWZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gS24odCxuLEZyKHIpKX0sT3Quc29ydGVkSW5kZXhPZj1mdW5jdGlvbih0LG4pe3ZhciByPXQ/dC5sZW5ndGg6MDtpZihyKXt2YXIgZT1Wbih0LG4pO2lmKHI+ZSYmQ2UodFtlXSxuKSlyZXR1cm4gZX1yZXR1cm4tMX0sT3Quc29ydGVkTGFzdEluZGV4PWZ1bmN0aW9uKHQsbil7cmV0dXJuIFZuKHQsbix0cnVlKX0sT3Quc29ydGVkTGFzdEluZGV4Qnk9ZnVuY3Rpb24odCxuLHIpe1xuXHRcdFx0cmV0dXJuIEtuKHQsbixGcihyKSx0cnVlKX0sT3Quc29ydGVkTGFzdEluZGV4T2Y9ZnVuY3Rpb24odCxuKXtpZih0JiZ0Lmxlbmd0aCl7dmFyIHI9Vm4odCxuLHRydWUpLTE7aWYoQ2UodFtyXSxuKSlyZXR1cm4gcn1yZXR1cm4tMX0sT3Quc3RhcnRDYXNlPVppLE90LnN0YXJ0c1dpdGg9ZnVuY3Rpb24odCxuLHIpe3JldHVybiB0PWV1KHQpLHI9bm4oWGUociksMCx0Lmxlbmd0aCksdC5sYXN0SW5kZXhPZihZbihuKSxyKT09cn0sT3Quc3VidHJhY3Q9bGYsT3Quc3VtPWZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0Lmxlbmd0aD93KHQscHUpOjB9LE90LnN1bUJ5PWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQmJnQubGVuZ3RoP3codCxGcihuKSk6MH0sT3QudGVtcGxhdGU9ZnVuY3Rpb24odCxuLHIpe3ZhciBlPU90LnRlbXBsYXRlU2V0dGluZ3M7ciYmdGUodCxuLHIpJiYobj1UKSx0PWV1KHQpLG49QWkoe30sbixlLFZ0KSxyPUFpKHt9LG4uaW1wb3J0cyxlLmltcG9ydHMsVnQpO3ZhciB1LG8saT1pdShyKSxmPWsocixpKSxjPTA7XG5cdFx0XHRyPW4uaW50ZXJwb2xhdGV8fHd0O3ZhciBhPVwiX19wKz0nXCI7cj1tdSgobi5lc2NhcGV8fHd0KS5zb3VyY2UrXCJ8XCIrci5zb3VyY2UrXCJ8XCIrKHI9PT1ydD9wdDp3dCkuc291cmNlK1wifFwiKyhuLmV2YWx1YXRlfHx3dCkuc291cmNlK1wifCRcIixcImdcIik7dmFyIGw9XCJzb3VyY2VVUkxcImluIG4/XCIvLyMgc291cmNlVVJMPVwiK24uc291cmNlVVJMK1wiXFxuXCI6XCJcIjtpZih0LnJlcGxhY2UocixmdW5jdGlvbihuLHIsZSxpLGYsbCl7cmV0dXJuIGV8fChlPWkpLGErPXQuc2xpY2UoYyxsKS5yZXBsYWNlKG10LEwpLHImJih1PXRydWUsYSs9XCInK19fZShcIityK1wiKSsnXCIpLGYmJihvPXRydWUsYSs9XCInO1wiK2YrXCI7XFxuX19wKz0nXCIpLGUmJihhKz1cIicrKChfX3Q9KFwiK2UrXCIpKT09bnVsbD8nJzpfX3QpKydcIiksYz1sK24ubGVuZ3RoLG59KSxhKz1cIic7XCIsKG49bi52YXJpYWJsZSl8fChhPVwid2l0aChvYmope1wiK2ErXCJ9XCIpLGE9KG8/YS5yZXBsYWNlKEssXCJcIik6YSkucmVwbGFjZShHLFwiJDFcIikucmVwbGFjZShKLFwiJDE7XCIpLFxuXHRcdFx0XHRcdGE9XCJmdW5jdGlvbihcIisobnx8XCJvYmpcIikrXCIpe1wiKyhuP1wiXCI6XCJvYmp8fChvYmo9e30pO1wiKStcInZhciBfX3QsX19wPScnXCIrKHU/XCIsX19lPV8uZXNjYXBlXCI6XCJcIikrKG8/XCIsX19qPUFycmF5LnByb3RvdHlwZS5qb2luO2Z1bmN0aW9uIHByaW50KCl7X19wKz1fX2ouY2FsbChhcmd1bWVudHMsJycpfVwiOlwiO1wiKSthK1wicmV0dXJuIF9fcH1cIixuPVZpKGZ1bmN0aW9uKCl7cmV0dXJuIEZ1bmN0aW9uKGksbCtcInJldHVybiBcIithKS5hcHBseShULGYpfSksbi5zb3VyY2U9YSxEZShuKSl0aHJvdyBuO3JldHVybiBufSxPdC50aW1lcz1mdW5jdGlvbih0LG4pe2lmKHQ9WGUodCksMT50fHx0PjkwMDcxOTkyNTQ3NDA5OTEpcmV0dXJuW107dmFyIHI9NDI5NDk2NzI5NSxlPXRvKHQsNDI5NDk2NzI5NSk7Zm9yKG49RnIobiksdC09NDI5NDk2NzI5NSxlPW0oZSxuKTsrK3I8dDspbihyKTtyZXR1cm4gZX0sT3QudG9GaW5pdGU9UWUsT3QudG9JbnRlZ2VyPVhlLE90LnRvTGVuZ3RoPXR1LE90LnRvTG93ZXI9ZnVuY3Rpb24odCl7XG5cdFx0XHRyZXR1cm4gZXUodCkudG9Mb3dlckNhc2UoKX0sT3QudG9OdW1iZXI9bnUsT3QudG9TYWZlSW50ZWdlcj1mdW5jdGlvbih0KXtyZXR1cm4gbm4oWGUodCksLTkwMDcxOTkyNTQ3NDA5OTEsOTAwNzE5OTI1NDc0MDk5MSl9LE90LnRvU3RyaW5nPWV1LE90LnRvVXBwZXI9ZnVuY3Rpb24odCl7cmV0dXJuIGV1KHQpLnRvVXBwZXJDYXNlKCl9LE90LnRyaW09ZnVuY3Rpb24odCxuLHIpe3JldHVybih0PWV1KHQpKSYmKHJ8fG49PT1UKT90LnJlcGxhY2UoY3QsXCJcIik6dCYmKG49WW4obikpPyh0PXQubWF0Y2goSXQpLG49bi5tYXRjaChJdCksdXIodCxTKHQsbiksSSh0LG4pKzEpLmpvaW4oXCJcIikpOnR9LE90LnRyaW1FbmQ9ZnVuY3Rpb24odCxuLHIpe3JldHVybih0PWV1KHQpKSYmKHJ8fG49PT1UKT90LnJlcGxhY2UobHQsXCJcIik6dCYmKG49WW4obikpPyh0PXQubWF0Y2goSXQpLG49SSh0LG4ubWF0Y2goSXQpKSsxLHVyKHQsMCxuKS5qb2luKFwiXCIpKTp0fSxPdC50cmltU3RhcnQ9ZnVuY3Rpb24odCxuLHIpe1xuXHRcdFx0cmV0dXJuKHQ9ZXUodCkpJiYocnx8bj09PVQpP3QucmVwbGFjZShhdCxcIlwiKTp0JiYobj1ZbihuKSk/KHQ9dC5tYXRjaChJdCksbj1TKHQsbi5tYXRjaChJdCkpLHVyKHQsbikuam9pbihcIlwiKSk6dH0sT3QudHJ1bmNhdGU9ZnVuY3Rpb24odCxuKXt2YXIgcj0zMCxlPVwiLi4uXCI7aWYoWmUobikpdmFyIHU9XCJzZXBhcmF0b3JcImluIG4/bi5zZXBhcmF0b3I6dSxyPVwibGVuZ3RoXCJpbiBuP1hlKG4ubGVuZ3RoKTpyLGU9XCJvbWlzc2lvblwiaW4gbj9ZbihuLm9taXNzaW9uKTplO3Q9ZXUodCk7dmFyIG89dC5sZW5ndGg7aWYoV3QudGVzdCh0KSl2YXIgaT10Lm1hdGNoKEl0KSxvPWkubGVuZ3RoO2lmKHI+PW8pcmV0dXJuIHQ7aWYobz1yLU4oZSksMT5vKXJldHVybiBlO2lmKHI9aT91cihpLDAsbykuam9pbihcIlwiKTp0LnNsaWNlKDAsbyksdT09PVQpcmV0dXJuIHIrZTtpZihpJiYobys9ci5sZW5ndGgtbyksS2UodSkpe2lmKHQuc2xpY2Uobykuc2VhcmNoKHUpKXt2YXIgZj1yO2Zvcih1Lmdsb2JhbHx8KHU9bXUodS5zb3VyY2UsZXUoX3QuZXhlYyh1KSkrXCJnXCIpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgdS5sYXN0SW5kZXg9MDtpPXUuZXhlYyhmKTspdmFyIGM9aS5pbmRleDtyPXIuc2xpY2UoMCxjPT09VD9vOmMpfX1lbHNlIHQuaW5kZXhPZihZbih1KSxvKSE9byYmKHU9ci5sYXN0SW5kZXhPZih1KSx1Pi0xJiYocj1yLnNsaWNlKDAsdSkpKTtyZXR1cm4gcitlfSxPdC51bmVzY2FwZT1mdW5jdGlvbih0KXtyZXR1cm4odD1ldSh0KSkmJlEudGVzdCh0KT90LnJlcGxhY2UoWSxQKTp0fSxPdC51bmlxdWVJZD1mdW5jdGlvbih0KXt2YXIgbj0rK0J1O3JldHVybiBldSh0KStufSxPdC51cHBlckNhc2U9VGksT3QudXBwZXJGaXJzdD1xaSxPdC5lYWNoPW1lLE90LmVhY2hSaWdodD1BZSxPdC5maXJzdD1fZSx2dShPdCxmdW5jdGlvbigpe3ZhciB0PXt9O3JldHVybiBobihPdCxmdW5jdGlvbihuLHIpe1d1LmNhbGwoT3QucHJvdG90eXBlLHIpfHwodFtyXT1uKX0pLHR9KCkse2NoYWluOmZhbHNlfSksT3QuVkVSU0lPTj1cIjQuMTMuMVwiLHUoXCJiaW5kIGJpbmRLZXkgY3VycnkgY3VycnlSaWdodCBwYXJ0aWFsIHBhcnRpYWxSaWdodFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbih0KXtcblx0XHRcdE90W3RdLnBsYWNlaG9sZGVyPU90fSksdShbXCJkcm9wXCIsXCJ0YWtlXCJdLGZ1bmN0aW9uKHQsbil7VXQucHJvdG90eXBlW3RdPWZ1bmN0aW9uKHIpe3ZhciBlPXRoaXMuX19maWx0ZXJlZF9fO2lmKGUmJiFuKXJldHVybiBuZXcgVXQodGhpcyk7cj1yPT09VD8xOlh1KFhlKHIpLDApO3ZhciB1PXRoaXMuY2xvbmUoKTtyZXR1cm4gZT91Ll9fdGFrZUNvdW50X189dG8ocix1Ll9fdGFrZUNvdW50X18pOnUuX192aWV3c19fLnB1c2goe3NpemU6dG8ociw0Mjk0OTY3Mjk1KSx0eXBlOnQrKDA+dS5fX2Rpcl9fP1wiUmlnaHRcIjpcIlwiKX0pLHV9LFV0LnByb3RvdHlwZVt0K1wiUmlnaHRcIl09ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMucmV2ZXJzZSgpW3RdKG4pLnJldmVyc2UoKX19KSx1KFtcImZpbHRlclwiLFwibWFwXCIsXCJ0YWtlV2hpbGVcIl0sZnVuY3Rpb24odCxuKXt2YXIgcj1uKzEsZT0xPT1yfHwzPT1yO1V0LnByb3RvdHlwZVt0XT1mdW5jdGlvbih0KXt2YXIgbj10aGlzLmNsb25lKCk7cmV0dXJuIG4uX19pdGVyYXRlZXNfXy5wdXNoKHtcblx0XHRcdGl0ZXJhdGVlOkZyKHQsMyksdHlwZTpyfSksbi5fX2ZpbHRlcmVkX189bi5fX2ZpbHRlcmVkX198fGUsbn19KSx1KFtcImhlYWRcIixcImxhc3RcIl0sZnVuY3Rpb24odCxuKXt2YXIgcj1cInRha2VcIisobj9cIlJpZ2h0XCI6XCJcIik7VXQucHJvdG90eXBlW3RdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbcl0oMSkudmFsdWUoKVswXX19KSx1KFtcImluaXRpYWxcIixcInRhaWxcIl0sZnVuY3Rpb24odCxuKXt2YXIgcj1cImRyb3BcIisobj9cIlwiOlwiUmlnaHRcIik7VXQucHJvdG90eXBlW3RdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX19maWx0ZXJlZF9fP25ldyBVdCh0aGlzKTp0aGlzW3JdKDEpfX0pLFV0LnByb3RvdHlwZS5jb21wYWN0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZmlsdGVyKHB1KX0sVXQucHJvdG90eXBlLmZpbmQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuZmlsdGVyKHQpLmhlYWQoKX0sVXQucHJvdG90eXBlLmZpbmRMYXN0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnJldmVyc2UoKS5maW5kKHQpO1xuXHRcdH0sVXQucHJvdG90eXBlLmludm9rZU1hcD1NZShmdW5jdGlvbih0LG4pe3JldHVybiB0eXBlb2YgdD09XCJmdW5jdGlvblwiP25ldyBVdCh0aGlzKTp0aGlzLm1hcChmdW5jdGlvbihyKXtyZXR1cm4gd24ocix0LG4pfSl9KSxVdC5wcm90b3R5cGUucmVqZWN0PWZ1bmN0aW9uKHQpe3JldHVybiB0PUZyKHQsMyksdGhpcy5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIXQobil9KX0sVXQucHJvdG90eXBlLnNsaWNlPWZ1bmN0aW9uKHQsbil7dD1YZSh0KTt2YXIgcj10aGlzO3JldHVybiByLl9fZmlsdGVyZWRfXyYmKHQ+MHx8MD5uKT9uZXcgVXQocik6KDA+dD9yPXIudGFrZVJpZ2h0KC10KTp0JiYocj1yLmRyb3AodCkpLG4hPT1UJiYobj1YZShuKSxyPTA+bj9yLmRyb3BSaWdodCgtbik6ci50YWtlKG4tdCkpLHIpfSxVdC5wcm90b3R5cGUudGFrZVJpZ2h0V2hpbGU9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMucmV2ZXJzZSgpLnRha2VXaGlsZSh0KS5yZXZlcnNlKCl9LFV0LnByb3RvdHlwZS50b0FycmF5PWZ1bmN0aW9uKCl7XG5cdFx0XHRyZXR1cm4gdGhpcy50YWtlKDQyOTQ5NjcyOTUpfSxobihVdC5wcm90b3R5cGUsZnVuY3Rpb24odCxuKXt2YXIgcj0vXig/OmZpbHRlcnxmaW5kfG1hcHxyZWplY3QpfFdoaWxlJC8udGVzdChuKSxlPS9eKD86aGVhZHxsYXN0KSQvLnRlc3QobiksdT1PdFtlP1widGFrZVwiKyhcImxhc3RcIj09bj9cIlJpZ2h0XCI6XCJcIik6bl0sbz1lfHwvXmZpbmQvLnRlc3Qobik7dSYmKE90LnByb3RvdHlwZVtuXT1mdW5jdGlvbigpe2Z1bmN0aW9uIG4odCl7cmV0dXJuIHQ9dS5hcHBseShPdCxzKFt0XSxmKSksZSYmaD90WzBdOnR9dmFyIGk9dGhpcy5fX3dyYXBwZWRfXyxmPWU/WzFdOmFyZ3VtZW50cyxjPWkgaW5zdGFuY2VvZiBVdCxhPWZbMF0sbD1jfHx5aShpKTtsJiZyJiZ0eXBlb2YgYT09XCJmdW5jdGlvblwiJiYxIT1hLmxlbmd0aCYmKGM9bD1mYWxzZSk7dmFyIGg9dGhpcy5fX2NoYWluX18scD0hIXRoaXMuX19hY3Rpb25zX18ubGVuZ3RoLGE9byYmIWgsYz1jJiYhcDtyZXR1cm4hbyYmbD8oaT1jP2k6bmV3IFV0KHRoaXMpLFxuXHRcdFx0aT10LmFwcGx5KGksZiksaS5fX2FjdGlvbnNfXy5wdXNoKHtmdW5jOmplLGFyZ3M6W25dLHRoaXNBcmc6VH0pLG5ldyB6dChpLGgpKTphJiZjP3QuYXBwbHkodGhpcyxmKTooaT10aGlzLnRocnUobiksYT9lP2kudmFsdWUoKVswXTppLnZhbHVlKCk6aSl9KX0pLHUoXCJwb3AgcHVzaCBzaGlmdCBzb3J0IHNwbGljZSB1bnNoaWZ0XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKHQpe3ZhciBuPU91W3RdLHI9L14oPzpwdXNofHNvcnR8dW5zaGlmdCkkLy50ZXN0KHQpP1widGFwXCI6XCJ0aHJ1XCIsZT0vXig/OnBvcHxzaGlmdCkkLy50ZXN0KHQpO090LnByb3RvdHlwZVt0XT1mdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cztpZihlJiYhdGhpcy5fX2NoYWluX18pe3ZhciB1PXRoaXMudmFsdWUoKTtyZXR1cm4gbi5hcHBseSh5aSh1KT91OltdLHQpfXJldHVybiB0aGlzW3JdKGZ1bmN0aW9uKHIpe3JldHVybiBuLmFwcGx5KHlpKHIpP3I6W10sdCl9KX19KSxobihVdC5wcm90b3R5cGUsZnVuY3Rpb24odCxuKXtcblx0XHRcdHZhciByPU90W25dO2lmKHIpe3ZhciBlPXIubmFtZStcIlwiOyhfb1tlXXx8KF9vW2VdPVtdKSkucHVzaCh7bmFtZTpuLGZ1bmM6cn0pfX0pLF9vW0FyKFQsMikubmFtZV09W3tuYW1lOlwid3JhcHBlclwiLGZ1bmM6VH1dLFV0LnByb3RvdHlwZS5jbG9uZT1mdW5jdGlvbigpe3ZhciB0PW5ldyBVdCh0aGlzLl9fd3JhcHBlZF9fKTtyZXR1cm4gdC5fX2FjdGlvbnNfXz1scih0aGlzLl9fYWN0aW9uc19fKSx0Ll9fZGlyX189dGhpcy5fX2Rpcl9fLHQuX19maWx0ZXJlZF9fPXRoaXMuX19maWx0ZXJlZF9fLHQuX19pdGVyYXRlZXNfXz1scih0aGlzLl9faXRlcmF0ZWVzX18pLHQuX190YWtlQ291bnRfXz10aGlzLl9fdGFrZUNvdW50X18sdC5fX3ZpZXdzX189bHIodGhpcy5fX3ZpZXdzX18pLHR9LFV0LnByb3RvdHlwZS5yZXZlcnNlPWZ1bmN0aW9uKCl7aWYodGhpcy5fX2ZpbHRlcmVkX18pe3ZhciB0PW5ldyBVdCh0aGlzKTt0Ll9fZGlyX189LTEsdC5fX2ZpbHRlcmVkX189dHJ1ZX1lbHNlIHQ9dGhpcy5jbG9uZSgpLFxuXHRcdFx0dC5fX2Rpcl9fKj0tMTtyZXR1cm4gdH0sVXQucHJvdG90eXBlLnZhbHVlPWZ1bmN0aW9uKCl7dmFyIHQsbj10aGlzLl9fd3JhcHBlZF9fLnZhbHVlKCkscj10aGlzLl9fZGlyX18sZT15aShuKSx1PTA+cixvPWU/bi5sZW5ndGg6MDt0PW87Zm9yKHZhciBpPXRoaXMuX192aWV3c19fLGY9MCxjPS0xLGE9aS5sZW5ndGg7KytjPGE7KXt2YXIgbD1pW2NdLHM9bC5zaXplO3N3aXRjaChsLnR5cGUpe2Nhc2VcImRyb3BcIjpmKz1zO2JyZWFrO2Nhc2VcImRyb3BSaWdodFwiOnQtPXM7YnJlYWs7Y2FzZVwidGFrZVwiOnQ9dG8odCxmK3MpO2JyZWFrO2Nhc2VcInRha2VSaWdodFwiOmY9WHUoZix0LXMpfX1pZih0PXtzdGFydDpmLGVuZDp0fSxpPXQuc3RhcnQsZj10LmVuZCx0PWYtaSx1PXU/ZjppLTEsaT10aGlzLl9faXRlcmF0ZWVzX18sZj1pLmxlbmd0aCxjPTAsYT10byh0LHRoaXMuX190YWtlQ291bnRfXyksIWV8fDIwMD5vfHxvPT10JiZhPT10KXJldHVybiBYbihuLHRoaXMuX19hY3Rpb25zX18pO2U9W107XG5cdFx0XHR0OmZvcig7dC0tJiZhPmM7KXtmb3IodSs9cixvPS0xLGw9blt1XTsrK288Zjspe3ZhciBoPWlbb10scz1oLnR5cGUsaD0oMCxoLml0ZXJhdGVlKShsKTtpZigyPT1zKWw9aDtlbHNlIGlmKCFoKXtpZigxPT1zKWNvbnRpbnVlIHQ7YnJlYWsgdH19ZVtjKytdPWx9cmV0dXJuIGV9LE90LnByb3RvdHlwZS5hdD1YbyxPdC5wcm90b3R5cGUuY2hhaW49ZnVuY3Rpb24oKXtyZXR1cm4geGUodGhpcyl9LE90LnByb3RvdHlwZS5jb21taXQ9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHp0KHRoaXMudmFsdWUoKSx0aGlzLl9fY2hhaW5fXyl9LE90LnByb3RvdHlwZS5uZXh0PWZ1bmN0aW9uKCl7dGhpcy5fX3ZhbHVlc19fPT09VCYmKHRoaXMuX192YWx1ZXNfXz1IZSh0aGlzLnZhbHVlKCkpKTt2YXIgdD10aGlzLl9faW5kZXhfXz49dGhpcy5fX3ZhbHVlc19fLmxlbmd0aCxuPXQ/VDp0aGlzLl9fdmFsdWVzX19bdGhpcy5fX2luZGV4X18rK107cmV0dXJue2RvbmU6dCx2YWx1ZTpufX0sT3QucHJvdG90eXBlLnBsYW50PWZ1bmN0aW9uKHQpe1xuXHRcdFx0Zm9yKHZhciBuLHI9dGhpcztyIGluc3RhbmNlb2Yga3Q7KXt2YXIgZT1hZShyKTtlLl9faW5kZXhfXz0wLGUuX192YWx1ZXNfXz1ULG4/dS5fX3dyYXBwZWRfXz1lOm49ZTt2YXIgdT1lLHI9ci5fX3dyYXBwZWRfX31yZXR1cm4gdS5fX3dyYXBwZWRfXz10LG59LE90LnByb3RvdHlwZS5yZXZlcnNlPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fX3dyYXBwZWRfXztyZXR1cm4gdCBpbnN0YW5jZW9mIFV0Pyh0aGlzLl9fYWN0aW9uc19fLmxlbmd0aCYmKHQ9bmV3IFV0KHRoaXMpKSx0PXQucmV2ZXJzZSgpLHQuX19hY3Rpb25zX18ucHVzaCh7ZnVuYzpqZSxhcmdzOltkZV0sdGhpc0FyZzpUfSksbmV3IHp0KHQsdGhpcy5fX2NoYWluX18pKTp0aGlzLnRocnUoZGUpfSxPdC5wcm90b3R5cGUudG9KU09OPU90LnByb3RvdHlwZS52YWx1ZU9mPU90LnByb3RvdHlwZS52YWx1ZT1mdW5jdGlvbigpe3JldHVybiBYbih0aGlzLl9fd3JhcHBlZF9fLHRoaXMuX19hY3Rpb25zX18pfSxadSYmKE90LnByb3RvdHlwZVtadV09d2UpLFxuXHRcdE90fXZhciBULHE9MS8wLFY9TmFOLEs9L1xcYl9fcFxcKz0nJzsvZyxHPS9cXGIoX19wXFwrPSknJ1xcKy9nLEo9LyhfX2VcXCguKj9cXCl8XFxiX190XFwpKVxcKycnOy9nLFk9LyYoPzphbXB8bHR8Z3R8cXVvdHwjMzl8Izk2KTsvZyxIPS9bJjw+XCInYF0vZyxRPVJlZ0V4cChZLnNvdXJjZSksWD1SZWdFeHAoSC5zb3VyY2UpLHR0PS88JS0oW1xcc1xcU10rPyklPi9nLG50PS88JShbXFxzXFxTXSs/KSU+L2cscnQ9LzwlPShbXFxzXFxTXSs/KSU+L2csZXQ9L1xcLnxcXFsoPzpbXltcXF1dKnwoW1wiJ10pKD86KD8hXFwxKVteXFxcXF18XFxcXC4pKj9cXDEpXFxdLyx1dD0vXlxcdyokLyxvdD0vW14uW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxcXF18XFxcXC4pKj8pXFwyKVxcXXwoPz0oXFwufFxcW1xcXSkoPzpcXDR8JCkpL2csaXQ9L1tcXFxcXiQuKis/KClbXFxde318XS9nLGZ0PVJlZ0V4cChpdC5zb3VyY2UpLGN0PS9eXFxzK3xcXHMrJC9nLGF0PS9eXFxzKy8sbHQ9L1xccyskLyxzdD0vW2EtekEtWjAtOV0rL2csaHQ9L1xcXFwoXFxcXCk/L2cscHQ9L1xcJFxceyhbXlxcXFx9XSooPzpcXFxcLlteXFxcXH1dKikqKVxcfS9nLF90PS9cXHcqJC8sdnQ9L14weC9pLGd0PS9eWy0rXTB4WzAtOWEtZl0rJC9pLGR0PS9eMGJbMDFdKyQvaSx5dD0vXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvLGJ0PS9eMG9bMC03XSskL2kseHQ9L14oPzowfFsxLTldXFxkKikkLyxqdD0vW1xceGMwLVxceGQ2XFx4ZDgtXFx4ZGVcXHhkZi1cXHhmNlxceGY4LVxceGZmXS9nLHd0PS8oJF4pLyxtdD0vWydcXG5cXHJcXHUyMDI4XFx1MjAyOVxcXFxdL2csQXQ9XCJbXFxcXHVmZTBlXFxcXHVmZTBmXT8oPzpbXFxcXHUwMzAwLVxcXFx1MDM2ZlxcXFx1ZmUyMC1cXFxcdWZlMjNcXFxcdTIwZDAtXFxcXHUyMGYwXXxcXFxcdWQ4M2NbXFxcXHVkZmZiLVxcXFx1ZGZmZl0pPyg/OlxcXFx1MjAwZCg/OlteXFxcXHVkODAwLVxcXFx1ZGZmZl18KD86XFxcXHVkODNjW1xcXFx1ZGRlNi1cXFxcdWRkZmZdKXsyfXxbXFxcXHVkODAwLVxcXFx1ZGJmZl1bXFxcXHVkYzAwLVxcXFx1ZGZmZl0pW1xcXFx1ZmUwZVxcXFx1ZmUwZl0/KD86W1xcXFx1MDMwMC1cXFxcdTAzNmZcXFxcdWZlMjAtXFxcXHVmZTIzXFxcXHUyMGQwLVxcXFx1MjBmMF18XFxcXHVkODNjW1xcXFx1ZGZmYi1cXFxcdWRmZmZdKT8pKlwiLE90PVwiKD86W1xcXFx1MjcwMC1cXFxcdTI3YmZdfCg/OlxcXFx1ZDgzY1tcXFxcdWRkZTYtXFxcXHVkZGZmXSl7Mn18W1xcXFx1ZDgwMC1cXFxcdWRiZmZdW1xcXFx1ZGMwMC1cXFxcdWRmZmZdKVwiK0F0LGt0PVwiKD86W15cXFxcdWQ4MDAtXFxcXHVkZmZmXVtcXFxcdTAzMDAtXFxcXHUwMzZmXFxcXHVmZTIwLVxcXFx1ZmUyM1xcXFx1MjBkMC1cXFxcdTIwZjBdP3xbXFxcXHUwMzAwLVxcXFx1MDM2ZlxcXFx1ZmUyMC1cXFxcdWZlMjNcXFxcdTIwZDAtXFxcXHUyMGYwXXwoPzpcXFxcdWQ4M2NbXFxcXHVkZGU2LVxcXFx1ZGRmZl0pezJ9fFtcXFxcdWQ4MDAtXFxcXHVkYmZmXVtcXFxcdWRjMDAtXFxcXHVkZmZmXXxbXFxcXHVkODAwLVxcXFx1ZGZmZl0pXCIsRXQ9UmVnRXhwKFwiWydcXHUyMDE5XVwiLFwiZ1wiKSxTdD1SZWdFeHAoXCJbXFxcXHUwMzAwLVxcXFx1MDM2ZlxcXFx1ZmUyMC1cXFxcdWZlMjNcXFxcdTIwZDAtXFxcXHUyMGYwXVwiLFwiZ1wiKSxJdD1SZWdFeHAoXCJcXFxcdWQ4M2NbXFxcXHVkZmZiLVxcXFx1ZGZmZl0oPz1cXFxcdWQ4M2NbXFxcXHVkZmZiLVxcXFx1ZGZmZl0pfFwiK2t0K0F0LFwiZ1wiKSxSdD1SZWdFeHAoW1wiW0EtWlxcXFx4YzAtXFxcXHhkNlxcXFx4ZDgtXFxcXHhkZV0/W2EtelxcXFx4ZGYtXFxcXHhmNlxcXFx4ZjgtXFxcXHhmZl0rKD86WydcXHUyMDE5XSg/OmR8bGx8bXxyZXxzfHR8dmUpKT8oPz1bXFxcXHhhY1xcXFx4YjFcXFxceGQ3XFxcXHhmN1xcXFx4MDAtXFxcXHgyZlxcXFx4M2EtXFxcXHg0MFxcXFx4NWItXFxcXHg2MFxcXFx4N2ItXFxcXHhiZlxcXFx1MjAwMC1cXFxcdTIwNmYgXFxcXHRcXFxceDBiXFxcXGZcXFxceGEwXFxcXHVmZWZmXFxcXG5cXFxcclxcXFx1MjAyOFxcXFx1MjAyOVxcXFx1MTY4MFxcXFx1MTgwZVxcXFx1MjAwMFxcXFx1MjAwMVxcXFx1MjAwMlxcXFx1MjAwM1xcXFx1MjAwNFxcXFx1MjAwNVxcXFx1MjAwNlxcXFx1MjAwN1xcXFx1MjAwOFxcXFx1MjAwOVxcXFx1MjAwYVxcXFx1MjAyZlxcXFx1MjA1ZlxcXFx1MzAwMF18W0EtWlxcXFx4YzAtXFxcXHhkNlxcXFx4ZDgtXFxcXHhkZV18JCl8KD86W0EtWlxcXFx4YzAtXFxcXHhkNlxcXFx4ZDgtXFxcXHhkZV18W15cXFxcdWQ4MDAtXFxcXHVkZmZmXFxcXHhhY1xcXFx4YjFcXFxceGQ3XFxcXHhmN1xcXFx4MDAtXFxcXHgyZlxcXFx4M2EtXFxcXHg0MFxcXFx4NWItXFxcXHg2MFxcXFx4N2ItXFxcXHhiZlxcXFx1MjAwMC1cXFxcdTIwNmYgXFxcXHRcXFxceDBiXFxcXGZcXFxceGEwXFxcXHVmZWZmXFxcXG5cXFxcclxcXFx1MjAyOFxcXFx1MjAyOVxcXFx1MTY4MFxcXFx1MTgwZVxcXFx1MjAwMFxcXFx1MjAwMVxcXFx1MjAwMlxcXFx1MjAwM1xcXFx1MjAwNFxcXFx1MjAwNVxcXFx1MjAwNlxcXFx1MjAwN1xcXFx1MjAwOFxcXFx1MjAwOVxcXFx1MjAwYVxcXFx1MjAyZlxcXFx1MjA1ZlxcXFx1MzAwMFxcXFxkK1xcXFx1MjcwMC1cXFxcdTI3YmZhLXpcXFxceGRmLVxcXFx4ZjZcXFxceGY4LVxcXFx4ZmZBLVpcXFxceGMwLVxcXFx4ZDZcXFxceGQ4LVxcXFx4ZGVdKSsoPzpbJ1xcdTIwMTldKD86RHxMTHxNfFJFfFN8VHxWRSkpPyg/PVtcXFxceGFjXFxcXHhiMVxcXFx4ZDdcXFxceGY3XFxcXHgwMC1cXFxceDJmXFxcXHgzYS1cXFxceDQwXFxcXHg1Yi1cXFxceDYwXFxcXHg3Yi1cXFxceGJmXFxcXHUyMDAwLVxcXFx1MjA2ZiBcXFxcdFxcXFx4MGJcXFxcZlxcXFx4YTBcXFxcdWZlZmZcXFxcblxcXFxyXFxcXHUyMDI4XFxcXHUyMDI5XFxcXHUxNjgwXFxcXHUxODBlXFxcXHUyMDAwXFxcXHUyMDAxXFxcXHUyMDAyXFxcXHUyMDAzXFxcXHUyMDA0XFxcXHUyMDA1XFxcXHUyMDA2XFxcXHUyMDA3XFxcXHUyMDA4XFxcXHUyMDA5XFxcXHUyMDBhXFxcXHUyMDJmXFxcXHUyMDVmXFxcXHUzMDAwXXxbQS1aXFxcXHhjMC1cXFxceGQ2XFxcXHhkOC1cXFxceGRlXSg/OlthLXpcXFxceGRmLVxcXFx4ZjZcXFxceGY4LVxcXFx4ZmZdfFteXFxcXHVkODAwLVxcXFx1ZGZmZlxcXFx4YWNcXFxceGIxXFxcXHhkN1xcXFx4ZjdcXFxceDAwLVxcXFx4MmZcXFxceDNhLVxcXFx4NDBcXFxceDViLVxcXFx4NjBcXFxceDdiLVxcXFx4YmZcXFxcdTIwMDAtXFxcXHUyMDZmIFxcXFx0XFxcXHgwYlxcXFxmXFxcXHhhMFxcXFx1ZmVmZlxcXFxuXFxcXHJcXFxcdTIwMjhcXFxcdTIwMjlcXFxcdTE2ODBcXFxcdTE4MGVcXFxcdTIwMDBcXFxcdTIwMDFcXFxcdTIwMDJcXFxcdTIwMDNcXFxcdTIwMDRcXFxcdTIwMDVcXFxcdTIwMDZcXFxcdTIwMDdcXFxcdTIwMDhcXFxcdTIwMDlcXFxcdTIwMGFcXFxcdTIwMmZcXFxcdTIwNWZcXFxcdTMwMDBcXFxcZCtcXFxcdTI3MDAtXFxcXHUyN2JmYS16XFxcXHhkZi1cXFxceGY2XFxcXHhmOC1cXFxceGZmQS1aXFxcXHhjMC1cXFxceGQ2XFxcXHhkOC1cXFxceGRlXSl8JCl8W0EtWlxcXFx4YzAtXFxcXHhkNlxcXFx4ZDgtXFxcXHhkZV0/KD86W2EtelxcXFx4ZGYtXFxcXHhmNlxcXFx4ZjgtXFxcXHhmZl18W15cXFxcdWQ4MDAtXFxcXHVkZmZmXFxcXHhhY1xcXFx4YjFcXFxceGQ3XFxcXHhmN1xcXFx4MDAtXFxcXHgyZlxcXFx4M2EtXFxcXHg0MFxcXFx4NWItXFxcXHg2MFxcXFx4N2ItXFxcXHhiZlxcXFx1MjAwMC1cXFxcdTIwNmYgXFxcXHRcXFxceDBiXFxcXGZcXFxceGEwXFxcXHVmZWZmXFxcXG5cXFxcclxcXFx1MjAyOFxcXFx1MjAyOVxcXFx1MTY4MFxcXFx1MTgwZVxcXFx1MjAwMFxcXFx1MjAwMVxcXFx1MjAwMlxcXFx1MjAwM1xcXFx1MjAwNFxcXFx1MjAwNVxcXFx1MjAwNlxcXFx1MjAwN1xcXFx1MjAwOFxcXFx1MjAwOVxcXFx1MjAwYVxcXFx1MjAyZlxcXFx1MjA1ZlxcXFx1MzAwMFxcXFxkK1xcXFx1MjcwMC1cXFxcdTI3YmZhLXpcXFxceGRmLVxcXFx4ZjZcXFxceGY4LVxcXFx4ZmZBLVpcXFxceGMwLVxcXFx4ZDZcXFxceGQ4LVxcXFx4ZGVdKSsoPzpbJ1xcdTIwMTldKD86ZHxsbHxtfHJlfHN8dHx2ZSkpP3xbQS1aXFxcXHhjMC1cXFxceGQ2XFxcXHhkOC1cXFxceGRlXSsoPzpbJ1xcdTIwMTldKD86RHxMTHxNfFJFfFN8VHxWRSkpP3xcXFxcZCtcIixPdF0uam9pbihcInxcIiksXCJnXCIpLFd0PVJlZ0V4cChcIltcXFxcdTIwMGRcXFxcdWQ4MDAtXFxcXHVkZmZmXFxcXHUwMzAwLVxcXFx1MDM2ZlxcXFx1ZmUyMC1cXFxcdWZlMjNcXFxcdTIwZDAtXFxcXHUyMGYwXFxcXHVmZTBlXFxcXHVmZTBmXVwiKSxCdD0vW2Etel1bQS1aXXxbQS1aXXsyLH1bYS16XXxbMC05XVthLXpBLVpdfFthLXpBLVpdWzAtOV18W15hLXpBLVowLTkgXS8sTHQ9XCJBcnJheSBCdWZmZXIgRGF0YVZpZXcgRGF0ZSBFcnJvciBGbG9hdDMyQXJyYXkgRmxvYXQ2NEFycmF5IEZ1bmN0aW9uIEludDhBcnJheSBJbnQxNkFycmF5IEludDMyQXJyYXkgTWFwIE1hdGggT2JqZWN0IFByb21pc2UgUmVmbGVjdCBSZWdFeHAgU2V0IFN0cmluZyBTeW1ib2wgVHlwZUVycm9yIFVpbnQ4QXJyYXkgVWludDhDbGFtcGVkQXJyYXkgVWludDE2QXJyYXkgVWludDMyQXJyYXkgV2Vha01hcCBfIGlzRmluaXRlIHBhcnNlSW50IHNldFRpbWVvdXRcIi5zcGxpdChcIiBcIiksTXQ9e307XG5cdE10W1wiW29iamVjdCBGbG9hdDMyQXJyYXldXCJdPU10W1wiW29iamVjdCBGbG9hdDY0QXJyYXldXCJdPU10W1wiW29iamVjdCBJbnQ4QXJyYXldXCJdPU10W1wiW29iamVjdCBJbnQxNkFycmF5XVwiXT1NdFtcIltvYmplY3QgSW50MzJBcnJheV1cIl09TXRbXCJbb2JqZWN0IFVpbnQ4QXJyYXldXCJdPU10W1wiW29iamVjdCBVaW50OENsYW1wZWRBcnJheV1cIl09TXRbXCJbb2JqZWN0IFVpbnQxNkFycmF5XVwiXT1NdFtcIltvYmplY3QgVWludDMyQXJyYXldXCJdPXRydWUsTXRbXCJbb2JqZWN0IEFyZ3VtZW50c11cIl09TXRbXCJbb2JqZWN0IEFycmF5XVwiXT1NdFtcIltvYmplY3QgQXJyYXlCdWZmZXJdXCJdPU10W1wiW29iamVjdCBCb29sZWFuXVwiXT1NdFtcIltvYmplY3QgRGF0YVZpZXddXCJdPU10W1wiW29iamVjdCBEYXRlXVwiXT1NdFtcIltvYmplY3QgRXJyb3JdXCJdPU10W1wiW29iamVjdCBGdW5jdGlvbl1cIl09TXRbXCJbb2JqZWN0IE1hcF1cIl09TXRbXCJbb2JqZWN0IE51bWJlcl1cIl09TXRbXCJbb2JqZWN0IE9iamVjdF1cIl09TXRbXCJbb2JqZWN0IFJlZ0V4cF1cIl09TXRbXCJbb2JqZWN0IFNldF1cIl09TXRbXCJbb2JqZWN0IFN0cmluZ11cIl09TXRbXCJbb2JqZWN0IFdlYWtNYXBdXCJdPWZhbHNlO1xuXHR2YXIgQ3Q9e307Q3RbXCJbb2JqZWN0IEFyZ3VtZW50c11cIl09Q3RbXCJbb2JqZWN0IEFycmF5XVwiXT1DdFtcIltvYmplY3QgQXJyYXlCdWZmZXJdXCJdPUN0W1wiW29iamVjdCBEYXRhVmlld11cIl09Q3RbXCJbb2JqZWN0IEJvb2xlYW5dXCJdPUN0W1wiW29iamVjdCBEYXRlXVwiXT1DdFtcIltvYmplY3QgRmxvYXQzMkFycmF5XVwiXT1DdFtcIltvYmplY3QgRmxvYXQ2NEFycmF5XVwiXT1DdFtcIltvYmplY3QgSW50OEFycmF5XVwiXT1DdFtcIltvYmplY3QgSW50MTZBcnJheV1cIl09Q3RbXCJbb2JqZWN0IEludDMyQXJyYXldXCJdPUN0W1wiW29iamVjdCBNYXBdXCJdPUN0W1wiW29iamVjdCBOdW1iZXJdXCJdPUN0W1wiW29iamVjdCBPYmplY3RdXCJdPUN0W1wiW29iamVjdCBSZWdFeHBdXCJdPUN0W1wiW29iamVjdCBTZXRdXCJdPUN0W1wiW29iamVjdCBTdHJpbmddXCJdPUN0W1wiW29iamVjdCBTeW1ib2xdXCJdPUN0W1wiW29iamVjdCBVaW50OEFycmF5XVwiXT1DdFtcIltvYmplY3QgVWludDhDbGFtcGVkQXJyYXldXCJdPUN0W1wiW29iamVjdCBVaW50MTZBcnJheV1cIl09Q3RbXCJbb2JqZWN0IFVpbnQzMkFycmF5XVwiXT10cnVlLFxuXHRcdEN0W1wiW29iamVjdCBFcnJvcl1cIl09Q3RbXCJbb2JqZWN0IEZ1bmN0aW9uXVwiXT1DdFtcIltvYmplY3QgV2Vha01hcF1cIl09ZmFsc2U7dmFyIHp0PXtcIlxceGMwXCI6XCJBXCIsXCJcXHhjMVwiOlwiQVwiLFwiXFx4YzJcIjpcIkFcIixcIlxceGMzXCI6XCJBXCIsXCJcXHhjNFwiOlwiQVwiLFwiXFx4YzVcIjpcIkFcIixcIlxceGUwXCI6XCJhXCIsXCJcXHhlMVwiOlwiYVwiLFwiXFx4ZTJcIjpcImFcIixcIlxceGUzXCI6XCJhXCIsXCJcXHhlNFwiOlwiYVwiLFwiXFx4ZTVcIjpcImFcIixcIlxceGM3XCI6XCJDXCIsXCJcXHhlN1wiOlwiY1wiLFwiXFx4ZDBcIjpcIkRcIixcIlxceGYwXCI6XCJkXCIsXCJcXHhjOFwiOlwiRVwiLFwiXFx4YzlcIjpcIkVcIixcIlxceGNhXCI6XCJFXCIsXCJcXHhjYlwiOlwiRVwiLFwiXFx4ZThcIjpcImVcIixcIlxceGU5XCI6XCJlXCIsXCJcXHhlYVwiOlwiZVwiLFwiXFx4ZWJcIjpcImVcIixcIlxceGNjXCI6XCJJXCIsXCJcXHhjZFwiOlwiSVwiLFwiXFx4Y2VcIjpcIklcIixcIlxceGNmXCI6XCJJXCIsXCJcXHhlY1wiOlwiaVwiLFwiXFx4ZWRcIjpcImlcIixcIlxceGVlXCI6XCJpXCIsXCJcXHhlZlwiOlwiaVwiLFwiXFx4ZDFcIjpcIk5cIixcIlxceGYxXCI6XCJuXCIsXCJcXHhkMlwiOlwiT1wiLFwiXFx4ZDNcIjpcIk9cIixcIlxceGQ0XCI6XCJPXCIsXCJcXHhkNVwiOlwiT1wiLFwiXFx4ZDZcIjpcIk9cIixcblx0XHRcIlxceGQ4XCI6XCJPXCIsXCJcXHhmMlwiOlwib1wiLFwiXFx4ZjNcIjpcIm9cIixcIlxceGY0XCI6XCJvXCIsXCJcXHhmNVwiOlwib1wiLFwiXFx4ZjZcIjpcIm9cIixcIlxceGY4XCI6XCJvXCIsXCJcXHhkOVwiOlwiVVwiLFwiXFx4ZGFcIjpcIlVcIixcIlxceGRiXCI6XCJVXCIsXCJcXHhkY1wiOlwiVVwiLFwiXFx4ZjlcIjpcInVcIixcIlxceGZhXCI6XCJ1XCIsXCJcXHhmYlwiOlwidVwiLFwiXFx4ZmNcIjpcInVcIixcIlxceGRkXCI6XCJZXCIsXCJcXHhmZFwiOlwieVwiLFwiXFx4ZmZcIjpcInlcIixcIlxceGM2XCI6XCJBZVwiLFwiXFx4ZTZcIjpcImFlXCIsXCJcXHhkZVwiOlwiVGhcIixcIlxceGZlXCI6XCJ0aFwiLFwiXFx4ZGZcIjpcInNzXCJ9LFV0PXtcIiZcIjpcIiZhbXA7XCIsXCI8XCI6XCImbHQ7XCIsXCI+XCI6XCImZ3Q7XCIsJ1wiJzpcIiZxdW90O1wiLFwiJ1wiOlwiJiMzOTtcIixcImBcIjpcIiYjOTY7XCJ9LCR0PXtcIiZhbXA7XCI6XCImXCIsXCImbHQ7XCI6XCI8XCIsXCImZ3Q7XCI6XCI+XCIsXCImcXVvdDtcIjonXCInLFwiJiMzOTtcIjpcIidcIixcIiYjOTY7XCI6XCJgXCJ9LER0PXtcIlxcXFxcIjpcIlxcXFxcIixcIidcIjpcIidcIixcIlxcblwiOlwiblwiLFwiXFxyXCI6XCJyXCIsXCJcXHUyMDI4XCI6XCJ1MjAyOFwiLFwiXFx1MjAyOVwiOlwidTIwMjlcIn0sRnQ9cGFyc2VGbG9hdCxOdD1wYXJzZUludCxQdD10eXBlb2YgZXhwb3J0cz09XCJvYmplY3RcIiYmZXhwb3J0cyxadD1QdCYmdHlwZW9mIG1vZHVsZT09XCJvYmplY3RcIiYmbW9kdWxlLFR0PVp0JiZadC5leHBvcnRzPT09UHQscXQ9Uih0eXBlb2Ygc2VsZj09XCJvYmplY3RcIiYmc2VsZiksVnQ9Uih0eXBlb2YgdGhpcz09XCJvYmplY3RcIiYmdGhpcyksS3Q9Uih0eXBlb2YgZ2xvYmFsPT1cIm9iamVjdFwiJiZnbG9iYWwpfHxxdHx8VnR8fEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSxHdD1aKCk7XG5cdChxdHx8e30pLl89R3QsdHlwZW9mIGRlZmluZT09XCJmdW5jdGlvblwiJiZ0eXBlb2YgZGVmaW5lLmFtZD09XCJvYmplY3RcIiYmZGVmaW5lLmFtZD8gZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIEd0fSk6WnQ/KChadC5leHBvcnRzPUd0KS5fPUd0LFB0Ll89R3QpOkt0Ll89R3R9KS5jYWxsKHRoaXMpOyIsIihmdW5jdGlvbigpIHtcblx0dmFyIGlzTm9kZSA9IHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCc7XG5cblx0dmFyIF8gPSByZXF1aXJlKCcuL2xpYi9sb2Rhc2gubWluJykuXztcblxuXHR2YXIgVXRpbHMgPSB7fTtcblxuXHRVdGlscy5Mb2cgPSBjb25zb2xlO1xuXG5cdFV0aWxzLl91dGlsRmlsZXMgPSB7fTtcblx0VXRpbHMubW9kdWxlcyA9IHt9O1xuXG5cdFV0aWxzLnJ1bnNPbk5vZGUgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzICE9PSAndW5kZWZpbmVkJztcblx0fTtcblxuXHRVdGlscy5leHRlbmRVdGlscyA9IGZ1bmN0aW9uIChleHRlbmQsIG92ZXJ3cml0ZSwgaWdub3JlKSB7XG5cdFx0aWYgKHR5cGVvZihleHRlbmQpICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YoZXh0ZW5kKSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0VXRpbHMuTG9nLmVycm9yKFwiQ291bGQgbm90IGV4dGVuZCB1dGlscy4gRXh0ZW5zaW9uIG11c3QgYmUgb2JqZWN0IG9yIGZ1bmN0aW9uLlwiKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KG92ZXJ3cml0ZSkpIHtcblx0XHRcdG92ZXJ3cml0ZSA9IFtdO1xuXHRcdH1cblx0XHRpZiAoIUFycmF5LmlzQXJyYXkoaWdub3JlKSkge1xuXHRcdFx0aWdub3JlID0gW107XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSBpbiBleHRlbmQpIHtcblx0XHRcdGlmIChpZ25vcmUuaW5kZXhPZihpKSA+PSAwKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGkgaW4gVXRpbHMgJiYgb3ZlcndyaXRlLmluZGV4T2YoaSkgPCAwKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCInXCIgKyBpICsgXCInIGFscmVhZHkgZGVmaW5lZCBpbiBVdGlscy5cIik7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0VXRpbHNbaV0gPSBleHRlbmRbaV07XG5cdFx0fVxuXHR9O1xuXG5cdC8vIFN0YW5kYXJkIGV4dGVuc2lvbiBvZiBsb2Rhc2gvdW5kZXJzY29yZVxuXHRpZiAodHlwZW9mKHdpbmRvdy5fKSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFV0aWxzLmV4dGVuZFV0aWxzKHdpbmRvdy5fLCBbJ3RvU3RyaW5nJ10pO1xuXHR9XG5cblx0VXRpbHMuc2V0TG9nZ2VyID0gZnVuY3Rpb24gKGxvZ2dlcikge1xuXHRcdFV0aWxzLkxvZyA9IGxvZ2dlcjtcblx0fTtcblxuXHQvKipcblx0ICogRXhwb3J0cyB0aGUgZ2l2ZW4gdmFsdWUgZWl0aGVyIHRvIHRoZSBicm93c2VyIHdpbmRvdyBvYmplY3Qgb3IgdG8gdGhlIG5vZGUuanMgbW9kdWxlIG9iamVjdC5cblx0ICogQHBhcmFtIG5hbWVcblx0ICogQHBhcmFtIHZhbHVlXG5cdCAqL1xuXHRVdGlscy5leHBvcnQgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcblx0XHRVdGlscy5tb2R1bGVzW25hbWVdID0gdmFsdWU7XG5cdH07XG5cblxuXHQvLyBFeHBvcnQgVXRpbHNcblx0aWYgKGlzTm9kZSkge1xuXHRcdG1vZHVsZS5leHBvcnRzLlV0aWxzID0gVXRpbHM7XG5cdH1cblx0ZWxzZSB7XG5cdFx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdFx0ZGVmaW5lKFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiBVdGlscztcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHdpbmRvdy5VdGlscyA9IFV0aWxzO1xuXHRcdH1cblx0fVxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG5cdHZhciBpc05vZGUgPSB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT09ICd1bmRlZmluZWQnO1xuXHR2YXIgVXRpbHMgPSBpc05vZGUgPyByZXF1aXJlKCcuLi91dGlscy1jb3JlJykuVXRpbHMgOiB3aW5kb3cuVXRpbHM7XG5cdGlmKCFVdGlscykge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJVdGlsc0NvcmUgbm90IGxvYWRlZC5cIik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0dmFyIERPTSA9IHt9O1xuXG5cdERPTS5nZXRTZWxlY3RlZFRleHQgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgdHh0ID0gJyc7XG5cdFx0aWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pXG5cdFx0e1xuXHRcdFx0dHh0ID0gXCJcIit3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKGRvY3VtZW50LmdldFNlbGVjdGlvbilcblx0XHR7XG5cdFx0XHR0eHQgPSBcIlwiK2RvY3VtZW50LmdldFNlbGVjdGlvbigpO1xuXHRcdH1cblx0XHRlbHNlIGlmIChkb2N1bWVudC5zZWxlY3Rpb24pXG5cdFx0e1xuXHRcdFx0dHh0ID0gXCJcIitkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKS50ZXh0O1xuXHRcdH1cblx0XHRlbHNlIHJldHVybjtcblxuXHRcdHJldHVybiB0eHQubGVuZ3RoID4gMCA/IHR4dCA6IHVuZGVmaW5lZDtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cy5ET00gPSBET007XG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuXHR2YXIgaXNOb2RlID0gdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzICE9PSAndW5kZWZpbmVkJztcblx0dmFyIFV0aWxzID0gaXNOb2RlID8gcmVxdWlyZSgnLi4vdXRpbHMtY29yZScpLlV0aWxzIDogd2luZG93LlV0aWxzO1xuXHRpZighVXRpbHMpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiVXRpbHNDb3JlIG5vdCBsb2FkZWQuXCIpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge29iamVjdHxzdHJpbmd9IHNwZWNzXHRcdFx0IEVycm9yIG1lc3NhZ2Ugb3Igc3BlY3MuXG5cdCAqIEBwYXJhbSB7VXRpbHMuRXJyb3J9IFtvcmlnaW5hbEVycm9yXVx0IE9yaWdpbmFsIGVycm9yIG1lc3NhZ2UgKG9ubHkgaWYgZmlyc3QgYXJndW1lbnQgd2FzIHN0cmluZykuXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0VXRpbHMuRXJyb3IgPSBmdW5jdGlvbihzcGVjcywgb3JpZ2luYWxFcnJvcikge1xuXHRcdGlmKFV0aWxzLmlzU3RyaW5nKHNwZWNzKSkge1xuXHRcdFx0c3BlY3MgPSB7XG5cdFx0XHRcdG1lc3NhZ2U6IHNwZWNzXG5cdFx0XHR9O1xuXHRcdFx0aWYob3JpZ2luYWxFcnJvciBpbnN0YW5jZW9mIFV0aWxzLkVycm9yKSB7XG5cdFx0XHRcdHNwZWNzLm9yaWdpbmFsRXJyb3IgPSBvcmlnaW5hbEVycm9yO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRzcGVjcyA9IHNwZWNzIHx8IHt9O1xuXG5cdFx0dGhpcy5tZXNzYWdlXHRcdD0gc3BlY3MubWVzc2FnZTtcblx0XHR0aGlzLm9yaWdpbmFsRXJyb3IgID0gc3BlY3Mub3JpZ2luYWxFcnJvcjtcblx0XHR0aGlzLmVycm9yTWFwXHQgICA9IHNwZWNzLmVycm9yTWFwO1xuXHRcdHRoaXMuY29kZVx0XHQgICA9IHNwZWNzLmNvZGU7XG5cdFx0dGhpcy5kYXRhXHRcdCAgID0gc3BlY3MuZGF0YTtcblx0XHQvL3RoaXMub3JpZ2luXHRcdCA9IFV0aWxzLlV0aWxzLmdldENhbGxlcigyKTtcblx0XHQvL3RoaXMuc3RhY2tcdFx0ICA9IFV0aWxzLlV0aWxzLmdldFN0YWNrVHJhY2UoMSwgMTApO1xuXHRcdHRoaXMucHVibGljXHRcdFx0PSBzcGVjcy5wdWJsaWMgfHwgdHJ1ZTtcblx0fTtcblxuXHRVdGlscy5FcnJvci5wcm90b3R5cGUubG9nID0gVXRpbHMuTG9nO1xuXG5cdFV0aWxzLkVycm9yLnByb3RvdHlwZS5tZXNzYWdlID0gJ0FuIGVycm9yIG9jY3VycmVkLic7XG5cdFV0aWxzLkVycm9yLnByb3RvdHlwZS5vcmlnaW5hbEVycm9yID0gdW5kZWZpbmVkO1xuXHRVdGlscy5FcnJvci5wcm90b3R5cGUuZXJyb3JNYXAgPSB1bmRlZmluZWQ7XG5cdFV0aWxzLkVycm9yLnByb3RvdHlwZS5jb2RlID0gdW5kZWZpbmVkO1xuXHRVdGlscy5FcnJvci5wcm90b3R5cGUuZGF0YSA9IHVuZGVmaW5lZDtcblx0VXRpbHMuRXJyb3IucHJvdG90eXBlLm9yaWdpbiA9IHVuZGVmaW5lZDtcblx0VXRpbHMuRXJyb3IucHJvdG90eXBlLnN0YWNrID0gdW5kZWZpbmVkO1xuXG5cdFV0aWxzLkVycm9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLm1lc3NhZ2U7XG5cdH07XG5cdFV0aWxzLkVycm9yLnByb3RvdHlwZS5nZXRNZXNzYWdlID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVzc2FnZTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cy5FcnJvciA9IFV0aWxzLkVycm9yO1xufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcblx0dmFyIGlzTm9kZSA9IHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCc7XG5cdHZhciBVdGlscyA9IGlzTm9kZSA/IHJlcXVpcmUoJy4uL3V0aWxzLWNvcmUnKS5VdGlscyA6IHdpbmRvdy5VdGlscztcblx0aWYoIVV0aWxzKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIlV0aWxzQ29yZSBub3QgbG9hZGVkLlwiKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR2YXIgU3RyID0ge307XG5cblx0U3RyLnBsdXJhbCA9IGZ1bmN0aW9uKHN0cmluZykge1xuXHRcdGlmKCFVdGlscy5pc1N0cmluZyhzdHJpbmcpKSB7XG5cdFx0XHRyZXR1cm4gXCJ0aGluZ3NcIjtcblx0XHR9XG5cblx0XHQvLyBDb3ZlcnMgc29tZSBpcnJlZ3VsYXIgcGx1cmFsc1xuXHRcdGlmKHN0cmluZy5zbGljZSgtMSkgPT09ICdzJyB8fCBzdHJpbmcuc2xpY2UoLTIpID09PSAnc2gnKSB7XG5cdFx0XHRyZXR1cm4gc3RyaW5nICsgJ2VzJztcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RyaW5nICsgJ3MnO1xuXHR9O1xuXG5cdFN0ci5jYXBpdGFsaXNlRmlyc3QgPSBmdW5jdGlvbiAocykge1xuXHRcdGlmICghVXRpbHMuaXNTdHJpbmcocykpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcy5zbGljZSgxKTtcblx0fTtcblxuXHRTdHIuZG90U3RyaW5nID0gZnVuY3Rpb24obnVtYmVyKSB7XG5cdFx0aWYoIVV0aWxzLmlzTnVtYmVyKG51bWJlcikpIHtcblx0XHRcdHJldHVybiBcIlwiO1xuXHRcdH1cblx0XHR2YXIgc3RyID0gXCJcIjtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbnVtYmVyOyBpKyspIHtcblx0XHRcdHN0ciArPSAnLic7XG5cdFx0fVxuXHRcdHJldHVybiBzdHI7XG5cdH07XG5cblx0U3RyLnRydW5jYXRlU3RyaW5nID0gZnVuY3Rpb24oc3RyLCBtYXhMZW5ndGgpIHtcblx0XHRpZiAoIVV0aWxzLmlzU3RyaW5nKHN0cikpIHtcblx0XHRcdHJldHVybiBzdHI7XG5cdFx0fVxuXG5cdFx0aWYoc3RyLmxlbmd0aCA+IDMgJiYgc3RyLmxlbmd0aCA+IG1heExlbmd0aC0zKSB7XG5cdFx0XHRyZXR1cm4gc3RyLnN1YnN0cmluZygwLCBtYXhMZW5ndGgtMykgKyAnLi4uJztcblx0XHR9XG5cdFx0cmV0dXJuIHN0cjtcblx0fTtcblxuXHRTdHIub2JqZWN0VG9TdHJpbmcgPSBmdW5jdGlvbih2YWx1ZSwgbWF4TGVuZ3RoKSB7XG5cdFx0aWYobWF4TGVuZ3RoIDw9IDApIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0aWYobWF4TGVuZ3RoID09PSAxKSB7XG5cdFx0XHRyZXR1cm4gJ3snXG5cdFx0fVxuXHRcdGlmKG1heExlbmd0aCA8PSA1KSB7XG5cdFx0XHRpZihPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiAne30nO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICd7JyArIFV0aWxzLmRvdFN0cmluZyhtYXhMZW5ndGgtMikgKyAnfSc7XG5cdFx0fVxuXHRcdHZhciBzdHIgPSBcIntcIjtcblx0XHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblx0XHR2YXIgbGFzdEtleSA9IGtleXNba2V5cy5sZW5ndGgtMV07XG5cdFx0dmFyIGtleUNvdW50ID0gMDtcblx0XHRmb3IodmFyIGkgaW4gdmFsdWUpIHtcblx0XHRcdHZhciBjb21tYUNvdW50ID0gc3RyLmxlbmd0aCA9PT0gMSA/IDAgOiAxO1xuXHRcdFx0dmFyIGRvdENvdW50ID0gaSA9PT0gbGFzdEtleSA/IDAgOiA0O1xuXHRcdFx0dmFyIGtleVZhbHVlID0gVXRpbHMudmFsdWVUb1N0cmluZyh2YWx1ZVtpXSwgNyk7XG5cdFx0XHRpZihzdHIubGVuZ3RoICsgY29tbWFDb3VudCArIGkubGVuZ3RoICsgMSArIGtleVZhbHVlLmxlbmd0aCArIGRvdENvdW50IDwgbWF4TGVuZ3RoKSB7XG5cdFx0XHRcdGlmKHN0ci5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0c3RyICs9ICcsJztcblx0XHRcdFx0fVxuXHRcdFx0XHRzdHIgKz0gaSArIFwiOlwiICsga2V5VmFsdWU7XG5cdFx0XHRcdGtleUNvdW50Kys7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoa2V5Q291bnQgPCBrZXlzLmxlbmd0aCkge1xuXHRcdFx0aWYoc3RyLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0c3RyICs9ICcsJztcblx0XHRcdH1cblx0XHRcdHN0ciArPSBVdGlscy5kb3RTdHJpbmcoTWF0aC5taW4oMywgbWF4TGVuZ3RoIC0gc3RyLmxlbmd0aCAtIDEpKTtcblx0XHR9XG5cdFx0c3RyICs9IFwifVwiO1xuXHRcdHJldHVybiBzdHI7XG5cdH07XG5cblx0U3RyLmFycmF5VG9TdHJpbmcgPSBmdW5jdGlvbih2YWx1ZSwgbWF4TGVuZ3RoKSB7XG5cdFx0aWYobWF4TGVuZ3RoIDw9IDApIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0aWYobWF4TGVuZ3RoID09PSAxKSB7XG5cdFx0XHRyZXR1cm4gJ1snO1xuXHRcdH1cblx0XHR2YXIgY291bnRDb3VudCA9IDIgKyAoXCJcIit2YWx1ZS5sZW5ndGgpLmxlbmd0aDtcblx0XHRpZihtYXhMZW5ndGggPD0gNSArIGNvdW50Q291bnQpIHtcblx0XHRcdGlmKHZhbHVlLmxlbmd0aCA9PT0gMCkgcmV0dXJuICdbXSc7XG5cdFx0XHRyZXR1cm4gJ1snICsgVXRpbHMuZG90U3RyaW5nKE1hdGgubWluKDMsIG1heExlbmd0aC0yKSkgKyAnXSdcblx0XHR9XG5cdFx0dmFyIHN0ciA9ICdbJztcblx0XHR2YXIga2V5Q291bnQgPSAwO1xuXHRcdGZvcih2YXIgaSA9IDA7IGk8dmFsdWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtVmFsdWUgPSBVdGlscy52YWx1ZVRvU3RyaW5nKHZhbHVlW2ldLCA3KTtcblx0XHRcdHZhciBkb3RDb3VudCA9IGkgPCB2YWx1ZS5sZW5ndGgtMSA/IDQgOiAwO1xuXHRcdFx0dmFyIGNvbW1hQ291bnQgPSBpID09PSAwID8gMCA6IDE7XG5cdFx0XHRpZihzdHIubGVuZ3RoICsgY29tbWFDb3VudCArIGl0ZW1WYWx1ZS5sZW5ndGggKyBkb3RDb3VudCArIGNvdW50Q291bnQgPCBtYXhMZW5ndGgpIHtcblx0XHRcdFx0aWYoaSAhPT0gMCkge1xuXHRcdFx0XHRcdHN0ciArPSAnLCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RyICs9IGl0ZW1WYWx1ZTtcblx0XHRcdFx0a2V5Q291bnQrKztcblx0XHRcdFx0aWYoa2V5Q291bnQgPj0gMikge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoa2V5Q291bnQgPCB2YWx1ZS5sZW5ndGgpIHtcblx0XHRcdGlmKHN0ci5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdHN0ciArPSAnLCc7XG5cdFx0XHR9XG5cdFx0XHRzdHIgKz0gVXRpbHMuZG90U3RyaW5nKE1hdGgubWluKDMsIG1heExlbmd0aCAtIHN0ci5sZW5ndGggLSAxKSk7XG5cdFx0fVxuXHRcdHN0ciArPSAnXScgKyAnKCcgKyB2YWx1ZS5sZW5ndGggKycpJztcblx0XHRyZXR1cm4gc3RyO1xuXHR9O1xuXG5cdFN0ci5udW1iZXJUb1N0cmluZyA9IGZ1bmN0aW9uKHZhbHVlLCBtYXhMZW5ndGgpIHtcblx0XHRpZihtYXhMZW5ndGggPD0gMCkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0XHR2YXIgc3RyVmFsdWUgPSBcIlwiK3ZhbHVlO1xuXHRcdGlmKHN0clZhbHVlLmxlbmd0aCA8PSBtYXhMZW5ndGgpIHtcblx0XHRcdHJldHVybiBzdHJWYWx1ZTtcblx0XHR9XG5cdFx0aWYobWF4TGVuZ3RoIDwgNSkge1xuXHRcdFx0cmV0dXJuIFV0aWxzLmRvdFN0cmluZyhNYXRoLm1pbigzLCBtYXhMZW5ndGgpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbHVlLnRvRXhwb25lbnRpYWwoTWF0aC5tYXgoMCwgbWF4TGVuZ3RoLTUpKTtcblx0fTtcblxuXHRTdHIudmFsdWVUb1N0cmluZyA9IGZ1bmN0aW9uKHZhbHVlLCBtYXhMZW5ndGgpIHtcblx0XHRpZihtYXhMZW5ndGggPD0gMCkge1xuXHRcdFx0cmV0dXJuIFwiXCI7XG5cdFx0fVxuXHRcdGlmKFV0aWxzLmlzU3RyaW5nKHZhbHVlKSkge1xuXHRcdFx0aWYobWF4TGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdHJldHVybiAnXCInO1xuXHRcdFx0fVxuXHRcdFx0aWYodmFsdWUubGVuZ3RoIDw9IG1heExlbmd0aC0yKSB7XG5cdFx0XHRcdHJldHVybiAnXCInICsgdmFsdWUgKyAnXCInO1xuXHRcdFx0fVxuXHRcdFx0aWYobWF4TGVuZ3RoIDw9IDUpIHtcblx0XHRcdFx0cmV0dXJuICdcIicgKyBVdGlscy5kb3RTdHJpbmcobWF4TGVuZ3RoLTIpICsgJ1wiJztcblx0XHRcdH1cblx0XHRcdHJldHVybiAnXCInICsgVXRpbHMudHJ1bmNhdGVTdHJpbmcodmFsdWUsIG1heExlbmd0aC0yKSArICdcIic7XG5cdFx0fVxuXHRcdGlmKFV0aWxzLmlzTnVtYmVyKHZhbHVlKSkge1xuXHRcdFx0cmV0dXJuIFV0aWxzLm51bWJlclRvU3RyaW5nKHZhbHVlLCBtYXhMZW5ndGgpO1xuXHRcdH1cblx0XHRpZihVdGlscy5pc0Jvb2xlYW4odmFsdWUpKSB7XG5cdFx0XHRpZihtYXhMZW5ndGggPCA1KSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZSA/ICd0JyA6ICdmJztcblx0XHRcdH1cblx0XHRcdHJldHVybiB2YWx1ZSA/ICd0cnVlJyA6ICdmYWxzZSc7XG5cdFx0fVxuXHRcdGlmKFV0aWxzLmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHRyZXR1cm4gVXRpbHMuYXJyYXlUb1N0cmluZyh2YWx1ZSwgbWF4TGVuZ3RoKTtcblx0XHR9XG5cdFx0aWYoVXRpbHMuaXNPYmplY3QodmFsdWUpKSB7XG5cdFx0XHRyZXR1cm4gVXRpbHMub2JqZWN0VG9TdHJpbmcodmFsdWUsIG1heExlbmd0aCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFV0aWxzLnRydW5jYXRlU3RyaW5nKFwiXCIrdmFsdWUsIG1heExlbmd0aCk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMuU3RyaW5nID0gU3RyO1xufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG5cdHZhciBpc05vZGUgPSB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT09ICd1bmRlZmluZWQnO1xuXHR2YXIgVXRpbHMgPSBpc05vZGUgPyByZXF1aXJlKCcuLi91dGlscy1jb3JlJykuVXRpbHMgOiB3aW5kb3cuVXRpbHM7XG5cdGlmKCFVdGlscykge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJVdGlsc0NvcmUgbm90IGxvYWRlZC5cIik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0dmFyIFZhbGlkYXRpb24gPSB7fTtcblxuXHRWYWxpZGF0aW9uLlZhbGlkaXR5ID0gZnVuY3Rpb24gKG5hbWUsIGlucHV0LCB2YWxpZCwgbWVzc2FnZSkge1xuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgVXRpbHMuaXNPYmplY3QobmFtZSkpIHtcblx0XHRcdHZhciBzZXR0aW5ncyA9IG5hbWU7XG5cdFx0XHR0aGlzLnNldE5hbWUoc2V0dGluZ3MubmFtZSk7XG5cdFx0XHR0aGlzLnNldFZhbGlkKHNldHRpbmdzLnZhbGlkKTtcblx0XHRcdHRoaXMuc2V0TWVzc2FnZShzZXR0aW5ncy5tZXNzYWdlKTtcblx0XHRcdHRoaXMuc2V0SW5wdXQoc2V0dGluZ3MuaW5wdXQpO1xuXHRcdFx0aWYoJ2NvcnJlY3RlZCcgaW4gc2V0dGluZ3MpIHtcblx0XHRcdFx0dGhpcy5zZXRDb3JyZWN0ZWRWYWx1ZShzZXR0aW5ncy5jb3JyZWN0ZWQpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRWYWxpZGl0eU1hcChzZXR0aW5ncy52YWxpZGl0eU1hcCk7XG5cdFx0XHR0aGlzLnNldEluZm8oc2V0dGluZ3MuaW5mbyk7XG5cdFx0XHR0aGlzLnNldFR5cGUoc2V0dGluZ3MudHlwZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX25hbWUgPSBuYW1lO1xuXHRcdFx0dGhpcy5faW5wdXQgPSBpbnB1dDtcblx0XHRcdHRoaXMuX3ZhbGlkID0gdmFsaWQ7XG5cdFx0XHR0aGlzLl9tZXNzYWdlID0gbWVzc2FnZTtcblx0XHR9XG5cdH07XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLl90eXBlID0gJ3ZhbHVlJztcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuX25hbWUgPSB1bmRlZmluZWQ7XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLl9pbnB1dCA9IHVuZGVmaW5lZDtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuX3ZhbGlkID0gdHJ1ZTtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuX3ZhbGlkaXR5TWFwID0gdW5kZWZpbmVkO1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5fY29ycmVjdGVkID0gdW5kZWZpbmVkO1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5faXNDb3JyZWN0ZWQgPSBmYWxzZTtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuX2luZm8gPSB1bmRlZmluZWQ7XG5cblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuc2V0VHlwZSA9IGZ1bmN0aW9uKHR5cGUpIHtcblx0XHR0aGlzLl90eXBlID0gdHlwZTtcblx0fTtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuZ2V0VHlwZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLl90eXBlO1xuXHR9O1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5zZXROYW1lID0gZnVuY3Rpb24obmFtZSkge1xuXHRcdHRoaXMuX25hbWUgPSBuYW1lO1xuXHR9O1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5nZXROYW1lID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX25hbWU7XG5cdH07XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLnNldEluZm8gPSBmdW5jdGlvbihpbmZvKSB7XG5cdFx0dGhpcy5faW5mbyA9IGluZm87XG5cdH07XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLmdldEluZm8gPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5faW5mbztcblx0fTtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuZ2V0SW5wdXQgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5faW5wdXQ7XG5cdH07XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLnNldElucHV0ID0gZnVuY3Rpb24oaW5wdXQpIHtcblx0XHR0aGlzLl9pbnB1dCA9IGlucHV0O1xuXHR9O1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5zZXRWYWxpZCA9IGZ1bmN0aW9uKHZhbGlkKSB7XG5cdFx0dGhpcy5fdmFsaWQgPSB2YWxpZCAhPT0gZmFsc2U7XG5cdH07XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLmlzVmFsaWQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX3ZhbGlkOyB9O1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmKCF0aGlzLmlzVmFsaWQoKSkgcmV0dXJuIHVuZGVmaW5lZDtcblx0XHRpZih0aGlzLl9pc0NvcnJlY3RlZCkgcmV0dXJuIHRoaXMuX2NvcnJlY3RlZDtcblx0XHRyZXR1cm4gdGhpcy5faW5wdXQ7XG5cdH07XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLnNldE1lc3NhZ2UgPSBmdW5jdGlvbihtZXNzYWdlKSB7XG5cdFx0dGhpcy5fbWVzc2FnZSA9IG1lc3NhZ2U7XG5cdH07XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLmdldE1lc3NhZ2UgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX21lc3NhZ2U7IH07XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLmlzQ29ycmVjdGVkID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLl9pc0NvcnJlY3RlZDtcblx0fTtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuZ2V0Q29ycmVjdGVkVmFsdWUgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5fY29ycmVjdGVkO1xuXHR9O1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5zZXRDb3JyZWN0ZWRWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0dGhpcy5faXNDb3JyZWN0ZWQgPSB0cnVlO1xuXHRcdHRoaXMuX2NvcnJlY3RlZCA9IHZhbHVlO1xuXHR9O1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5nZXRWYWxpZGl0eU1hcCA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLl92YWxpZGl0eU1hcDtcblx0fTtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuc2V0VmFsaWRpdHlNYXAgPSBmdW5jdGlvbihtYXApIHtcblx0XHR0aGlzLl92YWxpZGl0eU1hcCA9IG1hcDtcblx0fTtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuY3JlYXRlQmFkVmFsdWVNZXNzYWdlID0gZnVuY3Rpb24ocmV0dXJuQXNBcnJheSkge1xuXHRcdHZhciB3aHkgPSB0aGlzLmdldE1lc3NhZ2UoKTtcblx0XHRpZih3aHkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHR2YXIgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpO1xuXHRcdHZhciBkZWZhdWx0VG8gPSB0aGlzLmdldENvcnJlY3RlZFZhbHVlKCk7XG5cdFx0dmFyIHZhbHVlID0gdGhpcy5nZXRJbnB1dCgpO1xuXHRcdGlmKCFyZXR1cm5Bc0FycmF5KSB7XG5cdFx0XHR2YWx1ZSA9IFV0aWxzLnZhbHVlVG9TdHJpbmcodmFsdWUsIDMwKTtcblx0XHR9XG5cblx0XHQvLyBJZiByZWFzb24gZG9lcyBub3QgZW5kIHdpdGggZnVsbCBzdG9wLCBhZGQgb25lLlxuXHRcdGlmKCEvXFwuXFxzKj8vLmV4ZWMod2h5KSkge1xuXHRcdFx0d2h5ICs9ICcuJztcblx0XHR9XG5cblx0XHR2YXIgbWVzc2FnZXMgPSBbXTtcblx0XHRtZXNzYWdlcy5wdXNoKHdoeSk7XG5cdFx0bWVzc2FnZXMucHVzaChcIlZhbHVlOiBcIik7XG5cdFx0bWVzc2FnZXMucHVzaCh2YWx1ZSk7XG5cdFx0aWYodGhpcy5pc1ZhbGlkKCkgJiYgdGhpcy5pc0NvcnJlY3RlZCgpKSB7XG5cdFx0XHRtZXNzYWdlcy5wdXNoKFwiLiBVc2luZyBkZWZhdWx0OlwiKTtcblx0XHRcdG1lc3NhZ2VzLnB1c2goVXRpbHMudmFsdWVUb1N0cmluZyhkZWZhdWx0VG8pKTtcblx0XHR9XG5cblx0XHRpZihyZXR1cm5Bc0FycmF5ID09PSB0cnVlKSB7XG5cdFx0XHRyZXR1cm4gbWVzc2FnZXM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBtZXNzYWdlcy5qb2luKCcgJyk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIEVycm9yIG9iamVjdC5cblx0ICogQHJldHVybnMge1V0aWxzLkVycm9yfVxuXHQgKi9cblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuY3JlYXRlRXJyb3IgPSBmdW5jdGlvbihpbmNsdWRlRXJyb3JNYXApIHtcblx0XHR2YXIgbWVzc2FnZSA9IHRoaXMuZ2V0TWVzc2FnZSgpO1xuXHRcdGlmKG1lc3NhZ2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0dmFyIGNvZGUgPSAndmFsaWRhdGlvbi0nICsgdGhpcy5nZXRUeXBlKCk7XG5cdFx0dmFyIGVycm9yID0gbmV3IFV0aWxzLkVycm9yKHtcblx0XHRcdGRhdGFcdDogdGhpcy5nZXRJbnB1dCgpLFxuXHRcdFx0bWVzc2FnZVx0OiB0aGlzLmNyZWF0ZUJhZFZhbHVlTWVzc2FnZSgpLFxuXHRcdFx0Y29kZVx0OiBjb2RlXG5cdFx0fSk7XG5cdFx0aWYoaW5jbHVkZUVycm9yTWFwICE9PSBmYWxzZSkge1xuXHRcdFx0dmFyIHZhbGlkaXR5TWFwID0gdGhpcy5nZXRWYWxpZGl0eU1hcCgpO1xuXHRcdFx0aWYoXy5pc09iamVjdCh2YWxpZGl0eU1hcCkpIHtcblx0XHRcdFx0dmFyIGVycm9yTWFwID0ge307XG5cdFx0XHRcdGZvcih2YXIgaSBpbiB2YWxpZGl0eU1hcCkge1xuXHRcdFx0XHRcdHZhciBzdWJFcnJvciA9IHZhbGlkaXR5TWFwW2ldLmNyZWF0ZUVycm9yKCk7XG5cdFx0XHRcdFx0aWYoc3ViRXJyb3IgaW5zdGFuY2VvZiBVdGlscy5FcnJvcikge1xuXHRcdFx0XHRcdFx0ZXJyb3JNYXBbaV0gPSBzdWJFcnJvcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0ZXJyb3IuZXJyb3JNYXAgPSBlcnJvck1hcDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZXJyb3I7XG5cdH07XG5cblx0VmFsaWRhdGlvbi5fdmFsaWRhdGlvbk1lc3NhZ2VzID0ge1xuXHRcdGlzQXJndW1lbnRzOiBcIk11c3QgYmUgYXJndW1lbnRzLlwiLFxuXHRcdGlzQXJyYXk6IFwiTXVzdCBiZSBhcnJheS5cIixcblx0XHRpc0Jvb2xlYW46IFwiTXVzdCBiZSBib29sZWFuLlwiLFxuXHRcdGlzRGF0ZTogXCJNdXN0IGJlIGRhdGUuXCIsXG5cdFx0aXNFbGVtZW50OiBcIk11c3QgYmUgZWxlbWVudC5cIixcblx0XHRpc0VtcHR5OiBcIk11c3QgYmUgZW1wdHkuXCIsXG5cdFx0aXNFcnJvcjogXCJNdXN0IGJlIGVycm9yLlwiLFxuXHRcdGlzRmluaXRlOiBcIk11c3QgYmUgZmluaXRlLlwiLFxuXHRcdGlzRnVuY3Rpb246IFwiTXVzdCBiZSBmdW5jdGlvbi5cIixcblx0XHRpc01hdGNoOiBcIk11c3QgYmUgbWF0Y2hcIixcblx0XHRpc05hTjogXCJNdXN0IGJlIE5hTi5cIixcblx0XHRpc05hdGl2ZTogXCJNdXN0IGJlIG5hdGl2ZS5cIixcblx0XHRpc051bGw6IFwiTXVzdCBiZSBudWxsLlwiLFxuXHRcdGlzTnVtYmVyOiBcIk11c3QgYmUgbnVtYmVyLlwiLFxuXHRcdGlzT2JqZWN0OiBcIk11c3QgYmUgb2JqZWN0LlwiLFxuXHRcdGlzUGxhaW5PYmplY3Q6IFwiTXVzdCBiZSBwbGFpbiBvYmplY3QuXCIsXG5cdFx0aXNSZWdFeHA6IFwiTXVzdCBiZSBSZWdFeHAuXCIsXG5cdFx0aXNTdHJpbmc6IFwiTXVzdCBiZSBzdHJpbmcuXCIsXG5cdFx0aXNUeXBlZEFycmF5OiBcIk11c3QgYmUgdHlwZWQgYXJyYXkuXCIsXG5cdFx0aXNVbmRlZmluZWQ6IFwiTXVzdCBiZSB1bmRlZmluZWQuXCIsXG5cdFx0aXNTdHJpbmdPck51bWJlcjogXCJNdXN0IGJlIHN0cmluZyBvciBudW1iZXIuXCJcblx0fTtcblxuXHQvKipcblx0ICpcblx0ICogQHBhcmFtIHtWYWxpZGF0aW9uLlZhbGlkaXR5fSB2YWxpZGl0eVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gICBXaGV0aGVyIG9yIG5vdCB0aGUgdmFsaWRpdHkgd2FzIGxvZ2dlZC5cblx0ICovXG5cdFZhbGlkYXRpb24ubG9nVmFsaWRpdHkgPSBmdW5jdGlvbih2YWxpZGl0eSkge1xuXHRcdGlmKCEodmFsaWRpdHkgaW5zdGFuY2VvZiBWYWxpZGF0aW9uLlZhbGlkaXR5KSkge1xuXHRcdFx0VXRpbHMuTG9nLmVycm9yKFwiQ291bGQgbm90IGxvZyB2YWxpZGl0eS5cIiwgdmFsaWRpdHkpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmKHZhbGlkaXR5LmlzVmFsaWQoKSAmJiB2YWxpZGl0eS5nZXRNZXNzYWdlKCkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHZhciBlcnJvciA9IHZhbGlkaXR5LmNyZWF0ZUVycm9yKCk7XG5cdFx0dmFyIG1lc3NhZ2UgPSB2YWxpZGl0eS5jcmVhdGVCYWRWYWx1ZU1lc3NhZ2UodHJ1ZSk7XG5cdFx0bWVzc2FnZS5wdXNoKFwiLiBFcnJvcjogXCIpO1xuXHRcdG1lc3NhZ2UucHVzaChlcnJvcik7XG5cdFx0aWYoIXZhbGlkaXR5LmlzVmFsaWQoKSkge1xuXHRcdFx0VXRpbHMuTG9nLmVycm9yLmFwcGx5KFV0aWxzLkxvZywgbWVzc2FnZSk7XG5cdFx0fSBlbHNlIGlmICh2YWxpZGl0eS5pc0NvcnJlY3RlZCgpKSB7XG5cdFx0XHRVdGlscy5Mb2cud2Fybi5hcHBseShVdGlscy5Mb2csIG1lc3NhZ2UpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cdFZhbGlkYXRpb24uc2V0VmFsaWRhdGlvbk1lc3NhZ2UgPSBmdW5jdGlvbihtZXRob2QsIG1lc3NhZ2UpIHtcblx0XHRpZih0eXBlb2YobWV0aG9kKSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFV0aWxzLkxvZy5lcnJvcihcIlZhbGlkYXRpb24gbWV0aG9kIGFyZ3VtZW50IG11c3QgYmUgc3RyaW5nLlwiKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYodHlwZW9mKG1lc3NhZ2UpICE9PSAnc3RyaW5nJykge1xuXHRcdFx0VXRpbHMuTG9nLmVycm9yKFwiVmFsaWRhdGlvbiBtZXRob2QgbWVzc2FnZSBhcmd1bWVudCBtdXN0IGJlIHN0cmluZy5cIik7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdFZhbGlkYXRpb24uX3ZhbGlkYXRpb25NZXNzYWdlc1ttZXRob2RdID0gbWVzc2FnZTtcblx0fTtcblxuXHRWYWxpZGF0aW9uLmdldFZhbGlkYXRpb25NZXNzYWdlID0gZnVuY3Rpb24obWV0aG9kKSB7XG5cdFx0aWYodHlwZW9mKG1ldGhvZCkgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdH1cblx0XHRyZXR1cm4gVmFsaWRhdGlvbi5fdmFsaWRhdGlvbk1lc3NhZ2VzW21ldGhvZF07XG5cdH07XG5cblx0LyoqXG5cdCAqXG5cdCAqIFZhbGlkYXRlcyBhIHZhbHVlLCBiYXNlZCBvbiB0aGUgZ2l2ZW4gcGFyYW1ldGVyc1xuXHQgKlxuXHQgKiBFeGFtcGxlIHVzYWdlOiBWYWxpZGF0aW9uLnZhbGlkYXRlT25lKFwibXlWYXJpYWJsZVwiLCBcImFwcGxlXCIsIFwiaXNTdHJpbmdcIiwgXCJNdXN0IGJlIGEgc3RyaW5nXCIsIHtkZWZhdWx0OiBcImJhbmFuYVwiLCB3YXJuOiBmYWxzZX0pO1xuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVx0XHRcdFx0XHQgVGhlIG5hbWUgb2YgdGhlIHZhcmlhYmxlIHRvIGNoZWNrLlxuXHQgKiBAcGFyYW0gdmFsdWVcdFx0XHRcdFx0XHRcdCBUaGUgdmFsdWUgb2YgdGhlIHZhcmlhYmxlIHRvIGNoZWNrLlxuXHQgKiBAcGFyYW0gbWV0aG9kXHQgQm9vbGVhbiBjaGVjayBmb3IgdmFsaWRpdHksIG9yIG5hbWUgb2YgdXRpbCBmb3IgdmFsaWRhdGlvbi5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFttZXNzYWdlXVx0XHRcdFx0W09wdGlvbmFsXSBUaGUgbWVzc2FnZSB0byBkaXNwbGF5IHdoZW4gdmFyaWFibGUgaXMgbm90IHZhbGlkLlxuXHQgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1x0XHRcdFx0ICBBbiBvYmplY3Qgb2YgZXh0cmEgb3B0aW9uLlxuXHQgKiBAcGFyYW0gW29wdGlvbnMuZGVmYXVsdF1cdFx0XHRcdCBBIGRlZmF1bHQgdmFsdWUgaWYgZ2l2ZW4gdmFsdWUgaXMgaW52YWxpZC4gSWYgbm90IHByb3ZpZGVkLCB2YWxpZGF0aW9uIHdpbGwgZmFpbCBpZiBpbnZhbGlkIHZhbHVlLlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLndhcm5dXHRcdCAgSWYgZmFsc2UsIG5vIHdhcm5pbmcgd2lsbCBiZSBnaXZlbiBpZiBkZWZhdWx0IGlzIGNob3Nlbi4gRGVmYXVsdHMgdG8gdHJ1ZS5cblx0ICpcblx0ICogQHJldHVybiB7VmFsaWRhdGlvbi5WYWxpZGl0eX1cblx0ICovXG5cdFZhbGlkYXRpb24udmFsaWRhdGVPbmUgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgbWV0aG9kLCBtZXNzYWdlLCBvcHRpb25zKSB7XG5cdFx0LyoqIEB0eXBlIHtWYWxpZGF0aW9uLlZhbGlkaXR5fGJvb2xlYW59ICovXG5cdFx0dmFyIHZhbGlkID0gdW5kZWZpbmVkO1xuXHRcdGlmKFV0aWxzLmlzUGxhaW5PYmplY3QobWVzc2FnZSkpIHsgLy8gbWVzc2FnZSB3YXMgb21pdHRlZFxuXHRcdFx0b3B0aW9ucyA9IG1lc3NhZ2U7XG5cdFx0XHRtZXNzYWdlID0gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdC8vIEdldCBtZXRob2QgZnJvbSB1dGlscywgaWYgbWV0aG9kIGlzIHN0cmluZ1xuXHRcdGlmKFV0aWxzLmlzU3RyaW5nKG1ldGhvZCkpIHtcblx0XHRcdC8vIEdldCBmdW5jdGlvbiBmcm9tIHV0aWxzXG5cdFx0XHR2YXIgdXRpbE1ldGhvZCA9IFV0aWxzW21ldGhvZF07XG5cblx0XHRcdC8vIElmIG5vIG1lc3NhZ2UgaXMgcHJvdmlkZWQsIHRyeSB0byBmaW5kIG9uZSBmcm9tIHZhbGlkYXRpb25NZXNzYWdlc1xuXHRcdFx0aWYgKCFVdGlscy5pc1N0cmluZyhtZXNzYWdlKSkge1xuXHRcdFx0XHRtZXNzYWdlID0gVmFsaWRhdGlvbi5nZXRWYWxpZGF0aW9uTWVzc2FnZShtZXRob2QpO1xuXHRcdFx0XHRpZihtZXNzYWdlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRtZXNzYWdlID0gXCJNdXN0IGJlIFwiICsgbWV0aG9kICsgXCIuXCI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmKCFVdGlscy5pc0Z1bmN0aW9uKHV0aWxNZXRob2QpKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIkRvbid0IGtub3cgaG93IHRvIHZhbGlkYXRlICdcIittZXRob2QrXCInXCI7XG5cdFx0XHRcdG1ldGhvZCA9IG5ldyBWYWxpZGF0aW9uLlZhbGlkaXR5KG5hbWUsIHZhbHVlLCBmYWxzZSwgbWVzc2FnZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtZXRob2QgPSB1dGlsTWV0aG9kO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEFwcGx5IHZhbGlkYXRpb24gbWV0aG9kXG5cdFx0aWYoVXRpbHMuaXNGdW5jdGlvbihtZXRob2QpKSB7XG5cdFx0XHR2YWxpZCA9IG1ldGhvZC5hcHBseShWYWxpZGF0aW9uLCBbdmFsdWVdKTtcblx0XHQvLyBWYWxpZGl0eSBvYmplY3Rcblx0XHR9IGVsc2UgaWYgKG1ldGhvZCBpbnN0YW5jZW9mIFZhbGlkYXRpb24uVmFsaWRpdHkpIHtcblx0XHRcdHZhbGlkID0gbWV0aG9kO1xuXHRcdC8vIHZhbGlkYXRlQXJyYXlcblx0XHR9IGVsc2UgaWYgKFV0aWxzLmlzQXJyYXkobWV0aG9kKSkge1xuXHRcdFx0dmFsaWQgPSBWYWxpZGF0aW9uLnZhbGlkYXRlQXJyYXkobmFtZSwgdmFsdWUsIG1ldGhvZCwgdW5kZWZpbmVkLCBfLmdldChvcHRpb25zLCAnYXJyYXknKSwgZmFsc2UpO1xuXHRcdC8vIHZhbGlkYXRlT2JqZWN0XG5cdFx0fSBlbHNlIGlmIChVdGlscy5pc09iamVjdChtZXRob2QpKSB7XG5cdFx0XHR2YWxpZCA9IFZhbGlkYXRpb24udmFsaWRhdGVPYmplY3QobmFtZSwgdmFsdWUsIG1ldGhvZCwgdW5kZWZpbmVkLCBmYWxzZSk7XG5cdFx0Ly8gQm9vbGVhbiB2YWxpZGF0aW9uXG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbGlkID0gbWV0aG9kID09PSB0cnVlO1xuXHRcdH1cblxuXHRcdGlmKCEodmFsaWQgaW5zdGFuY2VvZiBWYWxpZGF0aW9uLlZhbGlkaXR5KSkge1xuXHRcdFx0dmFsaWQgPSBuZXcgVmFsaWRhdGlvbi5WYWxpZGl0eShuYW1lLCB2YWx1ZSwgdmFsaWQpO1xuXHRcdH1cblxuXHRcdC8vIEZlZWRiYWNrXG5cdFx0dmFyIF9fc2V0TWVzc2FnZSA9IGZ1bmN0aW9uKHZhbGlkLCBtZXNzYWdlKSB7XG5cdFx0XHRpZihfLmlzRnVuY3Rpb24obWVzc2FnZSkpIHtcblx0XHRcdFx0bWVzc2FnZSA9IG1lc3NhZ2UodmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dmFsaWQuc2V0TWVzc2FnZShtZXNzYWdlKTtcblx0XHR9O1xuXG5cdFx0aWYoIXZhbGlkLmlzVmFsaWQoKSkge1xuXHRcdFx0aWYobWVzc2FnZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSAnSW52YWxpZC4nO1xuXHRcdFx0fVxuXHRcdFx0aWYoVXRpbHMuaXNPYmplY3Qob3B0aW9ucykgJiYgJ2RlZmF1bHQnIGluIG9wdGlvbnMpIHtcblx0XHRcdFx0aWYoVXRpbHMuaXNGdW5jdGlvbihvcHRpb25zLmRlZmF1bHQpKSB7XG5cdFx0XHRcdFx0dmFyIGRlZiA9IG9wdGlvbnMuZGVmYXVsdC5hcHBseShWYWxpZGF0aW9uLCBbdmFsdWVdKTtcblx0XHRcdFx0XHR2YWxpZC5zZXRDb3JyZWN0ZWRWYWx1ZShkZWYpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhbGlkLnNldENvcnJlY3RlZFZhbHVlKG9wdGlvbnMuZGVmYXVsdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgd2FybiA9IFV0aWxzLmdldChvcHRpb25zLCAnd2FybicpO1xuXHRcdFx0XHR2YXIgX193YXJuID0gVXRpbHMuaXNGdW5jdGlvbih3YXJuKSA/IHdhcm4gOiBmdW5jdGlvbigpIHsgcmV0dXJuIHdhcm4gIT09IGZhbHNlOyB9O1xuXHRcdFx0XHRpZihfX3dhcm4odmFsdWUpICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdGlmKHZhbGlkLmdldE1lc3NhZ2UoKSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRfX3NldE1lc3NhZ2UodmFsaWQsIG1lc3NhZ2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfX3NldE1lc3NhZ2UodmFsaWQsIHVuZGVmaW5lZCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFsaWQuc2V0VmFsaWQodHJ1ZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YWxpZC5zZXRWYWxpZChmYWxzZSk7XG5cdFx0XHRcdGlmKHZhbGlkLmdldE1lc3NhZ2UoKSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0X19zZXRNZXNzYWdlKHZhbGlkLCBtZXNzYWdlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZighdmFsaWQuaXNDb3JyZWN0ZWQoKSkge1xuXHRcdFx0X19zZXRNZXNzYWdlKHZhbGlkLCB1bmRlZmluZWQpO1xuXHRcdH1cblxuXHRcdHJldHVybiB2YWxpZDtcblx0fTtcblxuXHQvKipcblx0ICogVmFsaWRhdGVzIGEgc2V0IG9mIHZhbHVlcywgYmFzZWQgb24gdGhlIGdpdmVuIHBhcmFtZXRlcnMuXG5cdCAqXG5cdCAqIEV4YW1wbGUgdXNhZ2U6IFZhbGlkYXRpb24udmFsaWRhdGUoXCJteVZhbGlkYXRpb25cIiwge2E6IFtcImFwcGxlXCIsIFwiaXNTdHJpbmdcIl19LCBcIlZhbGlkYXRpb24gZmFpbGVkLlwiKTtcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcdFx0XHQgVGhlIG5hbWUgYnkgd2hpY2ggdG8gaWRlbnRpZnkgdGhpcyB2YWxpZGF0aW9uLlxuXHQgKiBAcGFyYW0ge29iamVjdH0gY2hlY2tzXHRcdCAgIEFuIG9iamVjdCBvZiBjaGVja3MuIFdoZXJlIHRoZSBrZXlzIGFyZSB0aGUgbmFtZXMgb2YgdGhlIHZhcmlhYmxlcyBhbmQgdGhlXG5cdCAqXHRcdFx0XHRcdFx0XHRcdCAgdmFsdWVzIGFycmF5cyBvZiBwYXJhbWV0ZXJzIHRoYXQgYXJlIHBhc3NlZCB0byB7QGxpbmsgVmFsaWRhdGlvbi52YWxpZGF0ZU9uZX0sIHByZXBlbmRlZCBieVxuXHQgKlx0XHRcdFx0XHRcdFx0XHQgIDxtZT4gYW5kIDxjaGVja3M+LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2NvbnNlcXVlbmNlXVx0W29wdGlvbmFsXSBBIG1lc3NhZ2UgdG8gYmUgZ2l2ZW4gaWYgdmFsaWRhdGlvbiBmYWlscy5cblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gW2NhbGxiYWNrXVx0IFtvcHRpb25hbF0gQ2FsbGJhY2sgaW5zdGVhZCBvZiBkaXJlY3QgZXJyb3IgbWVzc2FnZXMuIENhbGxiYWNrIGlzIGNhbGxlZCB3aXRoIGEgVmFsaWRpdHkgb2JqZWN0IGFzIGFyZ3VtZW50LlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7VmFsaWRhdGlvbi5WYWxpZGl0eX1cdFx0SWYgdmFsaWRhdGlvbiB3YXMgcGFzc2VkLCBhbiBvYmplY3Qgd2lsbCBiZSByZXR1cm5lZCBjb250YWluaW5nIGEgdGhlIGtleXNcblx0ICpcdFx0XHRcdFx0XHRcdFx0ICBvZiB0aGUgZ2l2ZW4gY2hlY2tzIG9iamVjdCwgd2l0aCB0aGVpciB2YWxpZGF0ZWQgdmFsdWVzLlxuXHQgKlx0XHRcdFx0XHRcdFx0XHQgIElmIGFueSBvZiB0aGUgdmFsaWRhdGlvbnMgZmFpbGVkLCBGQUxTRSB3aWxsIGJlIHJldHVybmVkLlxuXHQgKi9cblx0VmFsaWRhdGlvbi52YWxpZGF0ZSA9IGZ1bmN0aW9uKG5hbWUsIGNoZWNrcywgY29uc2VxdWVuY2UsIGNhbGxiYWNrKSB7XG5cdFx0dmFyIGRlZmF1bHRWYWxpZGF0aW9uTmFtZSA9ICdWYWxpZGF0aW9uJztcblxuXHRcdC8vIENhbiBhbHNvIGJlIGNhbGxlZCB3aXRob3V0IGEgbmFtZVxuXHRcdGlmKFV0aWxzLmlzT2JqZWN0KG5hbWUpKSB7XG5cdFx0XHRjYWxsYmFjayA9IGNvbnNlcXVlbmNlO1xuXHRcdFx0Y29uc2VxdWVuY2UgPSBjaGVja3M7XG5cdFx0XHRjaGVja3MgPSBuYW1lO1xuXHRcdFx0bmFtZSA9IGRlZmF1bHRWYWxpZGF0aW9uTmFtZTtcblx0XHR9XG5cblx0XHR2YXIgdmFsaWRpdHlNYXAgPSB7fTtcblx0XHR2YXIgaW5wdXRNYXAgPSB7fTtcblx0XHRjYWxsYmFjayA9IFZhbGlkYXRpb24uZW5zdXJlKGNhbGxiYWNrLCBVdGlscy5pc0Z1bmN0aW9uLCBjYWxsYmFjayA9PT0gZmFsc2UgPyBmdW5jdGlvbigpe30gOiBWYWxpZGF0aW9uLmxvZ1ZhbGlkaXR5KTtcblxuXHRcdGlmKGNvbnNlcXVlbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbnNlcXVlbmNlID0gJyc7XG5cdFx0fVxuXG5cdFx0aWYoVXRpbHMuaXNPYmplY3QoY2hlY2tzKSkge1xuXHRcdFx0Zm9yKHZhciBpIGluIGNoZWNrcykge1xuXHRcdFx0XHRjaGVja3NbaV0udW5zaGlmdChpKTtcblx0XHRcdFx0dmFsaWRpdHlNYXBbaV0gPSBWYWxpZGF0aW9uLnZhbGlkYXRlT25lLmFwcGx5KFZhbGlkYXRpb24sIGNoZWNrc1tpXSk7XG5cdFx0XHRcdGlucHV0TWFwW2ldID0gY2hlY2tzW2ldWzFdO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgaW52YWxpZENoZWNrc01lc3NhZ2UgPSBcIlBhcmFtZXRlciAnY2hlY2tzJyBtdXN0IGJlIG9iamVjdC4gXCIgKyBjb25zZXF1ZW5jZTtcblx0XHRcdGNhbGxiYWNrKG5ldyBWYWxpZGF0aW9uLlZhbGlkaXR5KG5hbWUsIGNoZWNrcywgaW52YWxpZENoZWNrc01lc3NhZ2UpKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBHbyB0aHJvdWdoIHJlc3VsdHNcblx0XHR2YXIgaXNWYWxpZCA9IHRydWU7XG5cdFx0Zm9yKHZhciBpIGluIHZhbGlkaXR5TWFwKSB7XG5cdFx0XHR2YXIgdmFsaWRpdHkgPSB2YWxpZGl0eU1hcFtpXTtcblx0XHRcdGlmICghdmFsaWRpdHkuaXNWYWxpZCgpKSB7XG5cdFx0XHRcdGlzVmFsaWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDcmVhdGUgVmFsaWRpdHkgb2JqZWN0XG5cdFx0dmFyIHZhbGlkID0gbmV3IFZhbGlkYXRpb24uVmFsaWRpdHkoe1xuXHRcdFx0dHlwZTogJ211bHRpcGxlJyxcblx0XHRcdG5hbWU6IG5hbWUsXG5cdFx0XHRpbnB1dDogaW5wdXRNYXAsXG5cdFx0XHR2YWxpZDogaXNWYWxpZCxcblx0XHRcdHZhbGlkaXR5TWFwOiB2YWxpZGl0eU1hcFxuXHRcdH0pO1xuXHRcdGlmKCFpc1ZhbGlkKSB7XG5cdFx0XHRpZihuYW1lID09PSBkZWZhdWx0VmFsaWRhdGlvbk5hbWUpIHtcblx0XHRcdFx0dmFsaWQuc2V0TWVzc2FnZShcIlZhbGlkYXRpb24gZmFpbGVkLlwiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbGlkLnNldE1lc3NhZ2UoXCJWYWxpZGF0aW9uIGZhaWxlZCBmb3IgJ1wiICsgbmFtZSArIFwiJy5cIik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhbGxiYWNrKHZhbGlkKTtcblx0XHRyZXR1cm4gdmFsaWQ7XG5cdH07XG5cblx0LyoqXG5cdCAqIFZhbGlkYXRlcyBhbiBvYmplY3QsIHRoZSBzYW1lIHdheSAudmFsaWRhdGUgdmFsaWRhdGVzIGlzb2xhdGVkIHZhbHVlcy5cblx0ICpcblx0ICogRXhhbXBsZSB1c2FnZTogVmFsaWRhdGlvbi52YWxpZGF0ZU9iamVjdCgnbXlPYmplY3QnLCB7YTogJ2FwcGxlJ30sIHthOiBbJ2lzU3RyaW5nJ119KS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcdFx0XHQgXHRUaGUgbmFtZSBvZiB0aGUgdmFsaWRhdGlvbi5cblx0ICogQHBhcmFtIHtvYmplY3R9IG9ialx0XHRcdCAgXHRUaGUgb2JqZWN0IHRvIGNoZWNrLlxuXHQgKiBAcGFyYW0ge29iamVjdH0gY2hlY2tzXHRcdCAgIFx0QW4gb2JqZWN0IHdpdGggZm9yIGVhY2gga2V5IHRvIGNoZWNrIGFuIGFycmF5IG9mIGFyZ3VtZW50cyBbbWV0aG9kLCBtZXNzYWdlLCBvcHRpb25zXVxuXHQgKlx0XHRcdFx0XHRcdFx0XHQgIFx0dG8gcGFzcyB0byB0aGUgdmFsaWRhdGVPbmUgZnVuY3Rpb24uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbbWVzc2FnZV1cdFx0TWVzc2FnZSB0byBhZGQgdG8gVmFsaWRpdHlPYmplY3QgaW4gY2FzZSBvZiBpbnZhbGlkIG9iamVjdC5cblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gW2NhbGxiYWNrXVx0IFx0QSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgVmFsaWRpdHkgb2JqZWN0IGFzIGFyZ3VtZW50LlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtWYWxpZGF0aW9uLlZhbGlkaXR5fVxuXHQgKi9cblx0VmFsaWRhdGlvbi52YWxpZGF0ZU9iamVjdCA9IGZ1bmN0aW9uKG5hbWUsIG9iaiwgY2hlY2tzLCBtZXNzYWdlLCBjYWxsYmFjaykge1xuXHRcdGlmKFV0aWxzLmlzT2JqZWN0KG5hbWUpKSB7XG5cdFx0XHRjYWxsYmFjayA9IG1lc3NhZ2U7XG5cdFx0XHRtZXNzYWdlID0gY2hlY2tzO1xuXHRcdFx0Y2hlY2tzID0gb2JqO1xuXHRcdFx0b2JqID0gbmFtZTtcblx0XHRcdG5hbWUgPSAnT2JqZWN0Jztcblx0XHR9XG5cdFx0Y2FsbGJhY2sgPSBWYWxpZGF0aW9uLmVuc3VyZShjYWxsYmFjaywgVXRpbHMuaXNGdW5jdGlvbiwgY2FsbGJhY2sgPT09IGZhbHNlID8gZnVuY3Rpb24oKXt9IDogVmFsaWRhdGlvbi5sb2dWYWxpZGl0eSk7XG5cblx0XHRpZighVXRpbHMuaXNPYmplY3QoY2hlY2tzKSkge1xuXHRcdFx0dmFyIGludmFsaWQgPSBuZXcgVmFsaWRhdGlvbi5WYWxpZGl0eShuYW1lLCBjaGVja3MsIGZhbHNlLCBcIkludmFsaWQgJ2NoZWNrcycgcGFyYW1ldGVyLiBNdXN0IGJlIG9iamVjdC5cIik7XG5cdFx0XHRjYWxsYmFjayhpbnZhbGlkKTtcblx0XHRcdHJldHVybiBpbnZhbGlkO1xuXHRcdH1cblxuXHRcdGlmKCFVdGlscy5pc09iamVjdChvYmopKSB7XG5cdFx0XHR2YXIgaW52YWxpZCA9IG5ldyBWYWxpZGF0aW9uLlZhbGlkaXR5KG5hbWUsIGNoZWNrcywgZmFsc2UsIFwiSW52YWxpZCBvYmplY3QuXCIpO1xuXHRcdFx0Y2FsbGJhY2soaW52YWxpZCk7XG5cdFx0XHRyZXR1cm4gaW52YWxpZDtcblx0XHR9XG5cblx0XHR2YXIgdmFsaWRpdHlNYXAgPSB7fTtcblx0XHRmb3IodmFyIHByb3AgaW4gY2hlY2tzKSB7XG5cdFx0XHR2YXIgYXJncyA9IFV0aWxzLmNsb25lKGNoZWNrc1twcm9wXSk7XG5cdFx0XHR2YXIgaXNBcnJheSA9IFV0aWxzLmlzQXJyYXkoYXJncyk7XG5cblx0XHRcdC8vIExhenksIHNpbmdsZS1wYXJhbWV0ZXIgdmFsaWRhdGlvbiAoc3RyaW5nLCBib29sZWFuIG9yIGZ1bmN0aW9uKVxuXHRcdFx0aWYoVXRpbHMuaXNTdHJpbmcoYXJncykgfHwgVXRpbHMuaXNCb29sZWFuKGFyZ3MpIHx8IFV0aWxzLmlzRnVuY3Rpb24oYXJncykpIHtcblx0XHRcdFx0YXJncyA9IFthcmdzXTtcblx0XHRcdC8vIEludmFsaWQgdmFsaWRhdGlvblxuXHRcdFx0fSBlbHNlIGlmICghaXNBcnJheSkge1xuXHRcdFx0XHRhcmdzID0gW2ZhbHNlLCBcIkludmFsaWQgdmFsaWRhdGlvbiBkZWZpbml0aW9uLlwiXVxuXHRcdFx0fVxuXG5cdFx0XHRhcmdzLnVuc2hpZnQob2JqW3Byb3BdKTtcblx0XHRcdGFyZ3MudW5zaGlmdChwcm9wKTtcblxuXHRcdFx0dmFsaWRpdHlNYXBbcHJvcF0gPSBWYWxpZGF0aW9uLnZhbGlkYXRlT25lLmFwcGx5KFZhbGlkYXRpb24sIGFyZ3MpO1xuXHRcdH1cblxuXHRcdHZhciBfX3NldE1lc3NhZ2UgPSBmdW5jdGlvbih2YWxpZCwgbWVzc2FnZSkge1xuXHRcdFx0aWYoXy5pc0Z1bmN0aW9uKG1lc3NhZ2UpKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBtZXNzYWdlKG9iaik7XG5cdFx0XHR9XG5cdFx0XHR2YWxpZC5zZXRNZXNzYWdlKG1lc3NhZ2UpO1xuXHRcdH07XG5cblx0XHR2YXIgdmFsaWQgPSBuZXcgVmFsaWRhdGlvbi5WYWxpZGl0eSh7XG5cdFx0XHRuYW1lOiBuYW1lLFxuXHRcdFx0aW5wdXQ6IG9iaixcblx0XHRcdHZhbGlkaXR5TWFwOiB2YWxpZGl0eU1hcFxuXHRcdH0pO1xuXHRcdHZhciBjb3JyZWN0ZWQgPSB1bmRlZmluZWQ7XG5cdFx0aWYobWVzc2FnZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRtZXNzYWdlID0gXCJJbnZhbGlkIG9iamVjdCBmb3IgJ1wiICsgbmFtZSArIFwiJy5cIjtcblx0XHR9XG5cdFx0dmFyIGhhc01lc3NhZ2UgPSBmYWxzZTtcblx0XHRmb3IodmFyIHByb3AgaW4gdmFsaWRpdHlNYXApIHtcblx0XHRcdGlmKCF2YWxpZGl0eU1hcFtwcm9wXS5pc1ZhbGlkKCkpIHtcblx0XHRcdFx0dmFsaWQuc2V0VmFsaWQoZmFsc2UpO1xuXHRcdFx0XHRfX3NldE1lc3NhZ2UodmFsaWQsIG1lc3NhZ2UpO1xuXHRcdFx0fVxuXHRcdFx0aWYodmFsaWRpdHlNYXBbcHJvcF0uaXNDb3JyZWN0ZWQoKSkge1xuXHRcdFx0XHRpZihjb3JyZWN0ZWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGNvcnJlY3RlZCA9IFV0aWxzLmNsb25lKG9iaik7XG5cdFx0XHRcdFx0dmFsaWQuc2V0Q29ycmVjdGVkVmFsdWUoY29ycmVjdGVkKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb3JyZWN0ZWRbcHJvcF0gPSB2YWxpZGl0eU1hcFtwcm9wXS5nZXRWYWx1ZSgpO1xuXHRcdFx0fVxuXHRcdFx0aWYodmFsaWRpdHlNYXBbcHJvcF0uZ2V0TWVzc2FnZSgpICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0aGFzTWVzc2FnZSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGhhc01lc3NhZ2UpIHtcblx0XHRcdF9fc2V0TWVzc2FnZSh2YWxpZCwgbWVzc2FnZSk7XG5cdFx0fVxuXHRcdHZhbGlkLnNldFR5cGUoJ29iamVjdCcpO1xuXG5cdFx0Y2FsbGJhY2sodmFsaWQpO1xuXHRcdHJldHVybiB2YWxpZDtcblx0fTtcblxuXHQvKipcblx0ICogVmFsaWRhdGVzIGFuIGFycmF5IG9mIHZhbHVlcywgdXNpbmcgdGhlIGdpdmVuIHZhbGlkYXRpb24gZnVuY3Rpb24uXG5cdCAqXG5cdCAqIEV4YW1wbGUgdXNhZ2U6IFZhbGlkYXRpb24udmFsaWRhdGVBcnJheShcIm15QXJyYXlcIiwgWydhcHBsZScsICdiYW5hbmEnLCAxMjNdLCBbXCJpc1N0cmluZ1wiLCB7ZGVmYXVsdDogJ2ZydWl0J31dKTtcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcblx0ICogQHBhcmFtIHtBcnJheX0gYXJyYXlcdFx0XHRcdCBcdFx0XHRcdFx0VGhlIGFycmF5IHRvIHZhbGlkYXRlLlxuXHQgKiBAcGFyYW0ge0FycmF5fHN0cmluZ3xmdW5jdGlvbn0gaXRlbVZhbGlkYXRpb25cdFx0VGhlIHZhbGlkYXRpb24gYXJndW1lbnRzIFttZXRob2QsIG1lc3NhZ2UsIG9wdGlvbnNdXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5taW5MZW5ndGg9MF1cdFx0XHRcdFtvcHRpb25hbF0gVGhlIG1pbmltdW0gbGVuZ3RoIG9mIHRoZSBhcnJheS5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heExlbmd0aD1JbmZpbml0eV0gXHRcdFtvcHRpb25hbF0gVGhlIG1heGltdW0gbGVuZ3RoIG9mIHRoZSBhcnJheS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLml0ZW1UeXBlPSdJdGVtJ11cdFx0XHRbb3B0aW9uYWxdIFdoYXQgdG8gY2FsbCBhbiBpdGVtLlxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdXHRcdCBcdFx0XHRcdFx0W29wdGlvbmFsXSBDYWxsYmFjayBpbnN0ZWFkIG9mIGRpcmVjdCBlcnJvciBtZXNzYWdlcy4gQ2FsbGJhY2sgaXMgY2FsbGVkIHdpdGggYSBWYWxpZGl0eSBvYmplY3QgYXMgYXJndW1lbnQuXG5cdCAqL1xuXHRWYWxpZGF0aW9uLnZhbGlkYXRlQXJyYXkgPSBmdW5jdGlvbihuYW1lLCBhcnJheSwgaXRlbVZhbGlkYXRpb24sIG1lc3NhZ2UsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG5cdFx0aWYoVXRpbHMuaXNBcnJheShuYW1lKSkge1xuXHRcdFx0Y2FsbGJhY2sgPSBvcHRpb25zO1xuXHRcdFx0b3B0aW9ucyA9IG1lc3NhZ2U7XG5cdFx0XHRtZXNzYWdlID0gaXRlbVZhbGlkYXRpb247XG5cdFx0XHRpdGVtVmFsaWRhdGlvbiA9IGFycmF5O1xuXHRcdFx0YXJyYXkgPSBuYW1lO1xuXHRcdFx0bmFtZSA9ICdBcnJheSc7XG5cdFx0fVxuXHRcdGlmKFV0aWxzLmlzUGxhaW5PYmplY3QobWVzc2FnZSkpe1xuXHRcdFx0Y2FsbGJhY2sgPSBvcHRpb25zO1xuXHRcdFx0b3B0aW9ucyA9IG1lc3NhZ2U7XG5cdFx0fVxuXHRcdHZhciBtaW5MZW5ndGggPSBfLmdldChvcHRpb25zLCAnbWluTGVuZ3RoJyk7XG5cdFx0dmFyIG1heExlbmd0aCA9IF8uZ2V0KG9wdGlvbnMsICdtYXhMZW5ndGgnKTtcblx0XHR2YXIgaXRlbVR5cGUgPSBfLmdldChvcHRpb25zLCAnaXRlbVR5cGUnKTtcblxuXHRcdGNhbGxiYWNrID0gVmFsaWRhdGlvbi5lbnN1cmUoY2FsbGJhY2ssIFV0aWxzLmlzRnVuY3Rpb24sIGNhbGxiYWNrID09PSBmYWxzZSA/IGZ1bmN0aW9uKCl7fSA6IFZhbGlkYXRpb24ubG9nVmFsaWRpdHkpO1xuXG5cdFx0aWYoIVV0aWxzLmlzQXJyYXkoYXJyYXkpKSB7XG5cdFx0XHR2YXIgaW52YWxpZCA9IG5ldyBWYWxpZGF0aW9uLlZhbGlkaXR5KHtuYW1lOiBuYW1lLCBpbnB1dDogYXJyYXksIHZhbGlkOiBmYWxzZSwgbWVzc2FnZTogXCJNdXN0IGJlIGFuIGFycmF5XCIsIHR5cGU6ICdhcnJheSd9KTtcblx0XHRcdGNhbGxiYWNrKGludmFsaWQpO1xuXHRcdFx0cmV0dXJuIGludmFsaWQ7XG5cdFx0fVxuXHRcdGlmKCFVdGlscy5pc0FycmF5KGl0ZW1WYWxpZGF0aW9uKSkge1xuXHRcdFx0aXRlbVZhbGlkYXRpb24gPSBbaXRlbVZhbGlkYXRpb25dO1xuXHRcdH1cblx0XHR2YXIgdmFsaWQgPSBuZXcgVmFsaWRhdGlvbi5WYWxpZGl0eShuYW1lLCBhcnJheSwgdHJ1ZSk7XG5cblx0XHRpZighVXRpbHMuaXNOdW1iZXIobWluTGVuZ3RoKSkgbWluTGVuZ3RoID0gMDtcblx0XHRpZighVXRpbHMuaXNOdW1iZXIobWF4TGVuZ3RoKSkgbWF4TGVuZ3RoID0gSW5maW5pdHk7XG5cdFx0aWYoIVV0aWxzLmlzU3RyaW5nKGl0ZW1UeXBlKSkgaXRlbVR5cGUgPSAnSXRlbSc7XG5cblx0XHR2YXIgaXRlbVBsdXJhbCA9IFV0aWxzLnBsdXJhbChpdGVtVHlwZSk7XG5cblx0XHRpZihhcnJheS5sZW5ndGggPCBtaW5MZW5ndGgpIHtcblx0XHRcdHZhciBpbnZhbGlkMiA9IG5ldyBWYWxpZGF0aW9uLlZhbGlkaXR5KHtcblx0XHRcdFx0bmFtZTogbmFtZSxcblx0XHRcdFx0aW5wdXQ6IGFycmF5LFxuXHRcdFx0XHR2YWxpZDogZmFsc2UsXG5cdFx0XHRcdHR5cGU6ICdhcnJheScsXG5cdFx0XHRcdG1lc3NhZ2U6IG5hbWUgKyBcIiBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgXCIgKyBtaW5MZW5ndGggKyBcIiBcIitpdGVtUGx1cmFsLnRvTG93ZXJDYXNlKClcblx0XHRcdH0pO1xuXHRcdFx0Y2FsbGJhY2soaW52YWxpZDIpO1xuXHRcdFx0cmV0dXJuIGludmFsaWQyO1xuXHRcdH1cblx0XHRpZihhcnJheS5sZW5ndGggPiBtYXhMZW5ndGgpIHtcblx0XHRcdHZhciBpbnZhbGlkMyA9IG5ldyBWYWxpZGF0aW9uLlZhbGlkaXR5KHtcblx0XHRcdFx0bmFtZTogbmFtZSxcblx0XHRcdFx0aW5wdXQ6IGFycmF5LFxuXHRcdFx0XHR2YWxpZDogZmFsc2UsXG5cdFx0XHRcdHR5cGU6ICdhcnJheScsXG5cdFx0XHRcdG1lc3NhZ2U6IG5hbWUgKyBcIiBtYXkgY29udGFpbiBhdCBtb3N0IFwiICsgbWF4TGVuZ3RoICsgXCIgXCIraXRlbVBsdXJhbC50b0xvd2VyQ2FzZSgpXG5cdFx0XHR9KTtcblx0XHRcdGNhbGxiYWNrKGludmFsaWQzKTtcblx0XHRcdHJldHVybiBpbnZhbGlkMztcblx0XHR9XG5cblx0XHR2YXIgaXRlbSA9IG51bGwsXG5cdFx0XHRpdGVtTmFtZSA9IG51bGwsXG5cdFx0XHR2YWxpZGF0aW9uQXJncyA9IG51bGwsXG5cdFx0XHR2YWxpZGl0eU1hcCA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aXRlbSA9IGFycmF5W2ldO1xuXHRcdFx0aXRlbU5hbWUgPSBVdGlscy5pc1N0cmluZyhpdGVtKSA/IGl0ZW0gOiBpO1xuXG5cdFx0XHR2YWxpZGF0aW9uQXJncyA9IFV0aWxzLmNsb25lKGl0ZW1WYWxpZGF0aW9uKTtcblx0XHRcdHZhbGlkYXRpb25BcmdzLnVuc2hpZnQoaXRlbSk7XG5cdFx0XHR2YWxpZGF0aW9uQXJncy51bnNoaWZ0KGl0ZW1OYW1lKTtcblxuXHRcdFx0dmFsaWRpdHlNYXBbaV0gPSBWYWxpZGF0aW9uLnZhbGlkYXRlT25lLmFwcGx5KFZhbGlkYXRpb24sIHZhbGlkYXRpb25BcmdzKTtcblx0XHR9XG5cblx0XHR2YXIgY29ycmVjdGVkID0gdW5kZWZpbmVkO1xuXHRcdHZhciBpbnZhbGlkTWVzc2FnZSA9IFwiSW52YWxpZCBcIiArIGl0ZW1QbHVyYWwudG9Mb3dlckNhc2UoKSArIFwiIGluIFwiICsgbmFtZSArIFwiIGFycmF5LlwiO1xuXHRcdHZhciBoYXNNZXNzYWdlID0gZmFsc2U7XG5cdFx0Zm9yKHZhciBpIGluIHZhbGlkaXR5TWFwKSB7XG5cdFx0XHRpZighdmFsaWRpdHlNYXBbaV0uaXNWYWxpZCgpKSB7XG5cdFx0XHRcdHZhbGlkLnNldFZhbGlkKGZhbHNlKTtcblx0XHRcdFx0dmFsaWQuc2V0TWVzc2FnZShpbnZhbGlkTWVzc2FnZSk7XG5cdFx0XHR9XG5cdFx0XHRpZih2YWxpZGl0eU1hcFtpXS5pc0NvcnJlY3RlZCgpKSB7XG5cdFx0XHRcdGlmKGNvcnJlY3RlZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0Y29ycmVjdGVkID0gVXRpbHMuY2xvbmUoYXJyYXkpO1xuXHRcdFx0XHRcdHZhbGlkLnNldENvcnJlY3RlZFZhbHVlKGNvcnJlY3RlZCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29ycmVjdGVkW2ldID0gdmFsaWRpdHlNYXBbaV0uZ2V0VmFsdWUoKTtcblx0XHRcdH1cblx0XHRcdGlmKHZhbGlkaXR5TWFwW2ldLmdldE1lc3NhZ2UoKSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGhhc01lc3NhZ2UgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihoYXNNZXNzYWdlKSB7XG5cdFx0XHR2YWxpZC5zZXRNZXNzYWdlKGludmFsaWRNZXNzYWdlKTtcblx0XHR9XG5cblx0XHR2YWxpZC5zZXRWYWxpZGl0eU1hcCh2YWxpZGl0eU1hcCk7XG5cdFx0dmFsaWQuc2V0VHlwZSgnYXJyYXknKTtcblxuXHRcdGNhbGxiYWNrKHZhbGlkKTtcblx0XHRyZXR1cm4gdmFsaWQ7XG5cdH07XG5cblx0LyoqXG5cdCAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiB0aGUgZ2l2ZW4gY2xhc3MuXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNoZWNrQ2xhc3NcdCBUaGUgY2xhc3MgdGhlIHNlY29uZCBhcmd1bWVudCBzaG91bGQgYmUgYW4gaW5zdGFuY2Ugb2YuXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbYXJnXVx0XHRcdFRoZSBhcmd1bWVudCB0byBjaGVjay4gSWYgbm90IHByb3ZpZGVkLCB0aGUgZnVuY3Rpb24gd2lsbCByZXR1cm4gYSBmdW5jdGlvblxuXHQgKlx0XHRcdFx0XHRcdFx0XHQgIHRoYXQgcmVxdWlyZXMgYSBzaW5nbGUgYXJndW1lbnQgdG8gY2hlY2sgaWYgdGhhdCBpcyBhbiBpbnN0YW5jZSBvZiB0aGUgZ2l2ZW4gY2xhc3MuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0VmFsaWRhdGlvbi5pbnN0YW5jZW9mID0gZnVuY3Rpb24oY2hlY2tDbGFzcywgYXJnKSB7XG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbihmdXR1cmVBcmcpIHtcblx0XHRcdFx0cmV0dXJuIFZhbGlkYXRpb24uaW5zdGFuY2VvZihjaGVja0NsYXNzLCBmdXR1cmVBcmcpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gVXRpbHMuaXNPYmplY3QoY2hlY2tDbGFzcykgJiYgYXJnIGluc3RhbmNlb2YgY2hlY2tDbGFzcztcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBhcmd1bWVudCBpcyBkZWZpbmVkLCBhbmQgbm90IG51bGwuXG5cdCAqIEBwYXJhbSB2XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0VmFsaWRhdGlvbi5kZWYgPSBmdW5jdGlvbiAodikge1xuXHRcdHJldHVybiAoKHYgIT09IG51bGwpICYmICh2ICE9PSB1bmRlZmluZWQpKTtcblx0fTtcblxuXHRWYWxpZGF0aW9uLmVuc3VyZSA9IGZ1bmN0aW9uICh2YXJpYWJsZSwgZXZhbEZ1bmMsIGRlZmF1bHRWYWx1ZSwgbWVzc2FnZSkge1xuXHRcdHZhciBzdXJlID0gdmFyaWFibGU7XG5cdFx0aWYgKCFldmFsRnVuYyh2YXJpYWJsZSkpIHtcblx0XHRcdHN1cmUgPSBkZWZhdWx0VmFsdWU7XG5cdFx0XHRpZiAoVmFsaWRhdGlvbi5kZWYobWVzc2FnZSkpIHtcblx0XHRcdFx0VXRpbHMuTG9nLmVycm9yKFwiVmFsaWRhdGlvbjo6ZW5zdXJlXCIsIG1lc3NhZ2UsIHZhcmlhYmxlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gc3VyZTtcblx0fTtcblxuXHRWYWxpZGF0aW9uLmVuc3VyZVBhdGggPSBmdW5jdGlvbih2YXJpYWJsZSwgcGF0aCwgZXZhbEZ1bmMsIGRlZmF1bHRWYWx1ZSwgbWVzc2FnZSkge1xuXHRcdGlmKCFfLmlzT2JqZWN0KHZhcmlhYmxlKSkge1xuXHRcdFx0dmFyaWFibGUgPSB7fTtcblx0XHR9XG5cdFx0aWYoXy5pc0FycmF5KHBhdGgpKSB7XG5cdFx0XHRfLmZvckVhY2gocGF0aCwgZnVuY3Rpb24ocCkge1xuXHRcdFx0XHR2YXJpYWJsZSA9IFZhbGlkYXRpb24uZW5zdXJlUGF0aCh2YXJpYWJsZSwgcCwgZXZhbEZ1bmMsIGRlZmF1bHRWYWx1ZSwgcCArIFwiOiBcIiArIG1lc3NhZ2UpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gdmFyaWFibGU7XG5cdFx0fVxuXG5cdFx0dmFyIGNoZWNrID0gXy5nZXQodmFyaWFibGUsIHBhdGgpO1xuXHRcdGlmICghZXZhbEZ1bmMoY2hlY2spKSB7XG5cdFx0XHRfLnNldCh2YXJpYWJsZSwgcGF0aCwgZGVmYXVsdFZhbHVlKTtcblx0XHRcdGlmIChWYWxpZGF0aW9uLmRlZihtZXNzYWdlKSkge1xuXHRcdFx0XHRWYWxpZGF0aW9uLkxvZy5lcnJvcihtZXNzYWdlLCB2YXJpYWJsZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhcmlhYmxlO1xuXHR9O1xuXG5cdFZhbGlkYXRpb24uaXNTdHJpbmdPck51bWJlciA9IGZ1bmN0aW9uKHZhcmlhYmxlKSB7XG5cdFx0cmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhcmlhYmxlKSkgfHwgXy5pc1N0cmluZyh2YXJpYWJsZSk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMuVmFsaWRhdGlvbiA9IFZhbGlkYXRpb247XG59KSgpO1xuIl19
