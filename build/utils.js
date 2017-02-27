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
			txt = window.getSelection();
		} else if (document.getSelection) {
			txt = document.getSelection();
		} else if (document.selection) {
			txt = document.selection.createRange().text;
		} else return;
		document.aform.selectedtext.value = txt;
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
	Validation.LogValidity = function (validity) {
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
		if (Utils.isObject(message)) {
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
						valid.setMessage(message);
					}
				} else {
					valid.setMessage(undefined);
				}
				valid.setValid(true);
			} else {
				valid.setValid(false);
				if (valid.getMessage() === undefined) {
					valid.setMessage(message);
				}
			}
		} else if (!valid.isCorrected()) {
			valid.setMessage(undefined);
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
		// Can also be called without a name
		if (Utils.isObject(name)) {
			callback = consequence;
			consequence = checks;
			checks = name;
			name = 'Validation';
		}

		var validityMap = {};
		var inputMap = {};
		callback = Validation.ensure(callback, Utils.isFunction, callback === false ? function () {} : Validation.LogValidity);

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
			valid.setMessage("Validation failed for '" + name + "'.");
		}
		callback(valid);
		return valid;
	};

	/**
  * Validates an object, the same way .validate validates isolated values.
  *
  * Example usage: Validation.validateObject('myObject', {a: 'apple'}, {a: ['isString']}).
  *
  * @param {string} name			 The name of the validation.
  * @param {object} obj			  The object to check.
  * @param {object} checks		   An object with for each key to check an array of arguments [method, message, options]
  *								  to pass to the validateOne function.
  * @param {string} [message]			Message to add to ValidityObject in case of invalid object.
  * @param {function} [callback]	 A function that takes a Validity object as argument.
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
		if (Utils.isFunction(message)) {
			callback = message;
			message = undefined;
		}
		callback = Validation.ensure(callback, Utils.isFunction, callback === false ? function () {} : Validation.LogValidity);

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
				valid.setMessage(message);
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
			valid.setMessage(message);
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
  * @param {Array} array				 The array to validate.
  * @param {Array|string|function} itemValidation		The validation arguments [method, message, options]
  * @param {number} [options.minLength=0]		[optional] The minimum length of the array.
  * @param {number} [options.maxLength=Infinity] [optional] The maximum length of the array.
  * @param {string} [options.itemType='Item']	[optional] What to call an item.
  * @param {function} [callback]		 [optional] Callback instead of direct error messages. Callback is called with a Validity object as argument.
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
		if (Utils.isObject(message)) {
			callback = options;
			options = message;
		}
		var minLength = _.get(options, 'minLength');
		var maxLength = _.get(options, 'maxLength');
		var itemType = _.get(options, 'itemType');

		callback = Validation.ensure(callback, Utils.isFunction, callback === false ? function () {} : Validation.LogValidity);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsInNyYy9saWIvbG9kYXNoLm1pbi5qcyIsInNyYy91dGlscy1jb3JlLmpzIiwic3JjL3V0aWxzL2RvbS5qcyIsInNyYy91dGlscy9lcnJvci5qcyIsInNyYy91dGlscy9zdHJpbmcuanMiLCJzcmMvdXRpbHMvdmFsaWRhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLENBQUMsWUFBVTtBQUNQLFFBQUksU0FBUyxPQUFPLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsT0FBTyxPQUFPLE9BQWQsS0FBMEIsV0FBeEU7O0FBRUEsUUFBSSxRQUFRLFFBQVEsa0JBQVIsRUFBNEIsS0FBeEM7O0FBRUEsUUFBSSxTQUFTLEVBQWI7QUFDQSxXQUFPLElBQVAsQ0FBWSxRQUFRLG9CQUFSLEVBQThCLE1BQTFDO0FBQ0EsV0FBTyxJQUFQLENBQVksUUFBUSx3QkFBUixFQUFrQyxVQUE5QztBQUNBLFdBQU8sSUFBUCxDQUFZLFFBQVEsbUJBQVIsRUFBNkIsS0FBekM7QUFDSCxXQUFPLElBQVAsQ0FBWSxRQUFRLGlCQUFSLEVBQTJCLEdBQXZDOztBQUVHLFNBQUksSUFBSSxJQUFFLENBQVYsRUFBYSxJQUFFLE9BQU8sTUFBdEIsRUFBOEIsR0FBOUIsRUFBbUM7QUFDL0IsY0FBTSxXQUFOLENBQWtCLE9BQU8sQ0FBUCxDQUFsQjtBQUNIOztBQUVELFdBQU8sT0FBUCxDQUFlLEtBQWYsR0FBdUIsS0FBdkI7QUFDQSxXQUFPLEtBQVAsR0FBZSxLQUFmO0FBQ0gsQ0FqQkQ7Ozs7QUNBQTs7OztBQUlBLENBQUMsQ0FBQyxZQUFVO0FBQUMsVUFBUyxDQUFULENBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFNBQU8sRUFBRSxHQUFGLENBQU0sRUFBRSxDQUFGLENBQU4sRUFBVyxFQUFFLENBQUYsQ0FBWCxHQUFpQixDQUF4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QSxZQUFXLFFBQVgsQ0FBb0IsU0FBcEIsQ0FBOEIsTUFBOUIsR0FBdUMsSUFBdkM7QUFDQSxZQUFXLFFBQVgsQ0FBb0IsU0FBcEIsQ0FBOEIsWUFBOUIsR0FBNkMsU0FBN0M7QUFDQSxZQUFXLFFBQVgsQ0FBb0IsU0FBcEIsQ0FBOEIsVUFBOUIsR0FBMkMsU0FBM0M7QUFDQSxZQUFXLFFBQVgsQ0FBb0IsU0FBcEIsQ0FBOEIsWUFBOUIsR0FBNkMsS0FBN0M7QUFDQSxZQUFXLFFBQVgsQ0FBb0IsU0FBcEIsQ0FBOEIsS0FBOUIsR0FBc0MsU0FBdEM7O0FBRUEsWUFBVyxRQUFYLENBQW9CLFNBQXBCLENBQThCLE9BQTlCLEdBQXdDLFVBQVMsSUFBVCxFQUFlO0FBQ3RELE9BQUssS0FBTCxHQUFhLElBQWI7QUFDQSxFQUZEO0FBR0EsWUFBVyxRQUFYLENBQW9CLFNBQXBCLENBQThCLE9BQTlCLEdBQXdDLFlBQVc7QUFDbEQsU0FBTyxLQUFLLEtBQVo7QUFDQSxFQUZEO0FBR0EsWUFBVyxRQUFYLENBQW9CLFNBQXBCLENBQThCLE9BQTlCLEdBQXdDLFVBQVMsSUFBVCxFQUFlO0FBQ3RELE9BQUssS0FBTCxHQUFhLElBQWI7QUFDQSxFQUZEO0FBR0EsWUFBVyxRQUFYLENBQW9CLFNBQXBCLENBQThCLE9BQTlCLEdBQXdDLFlBQVc7QUFDbEQsU0FBTyxLQUFLLEtBQVo7QUFDQSxFQUZEO0FBR0EsWUFBVyxRQUFYLENBQW9CLFNBQXBCLENBQThCLE9BQTlCLEdBQXdDLFVBQVMsSUFBVCxFQUFlO0FBQ3RELE9BQUssS0FBTCxHQUFhLElBQWI7QUFDQSxFQUZEO0FBR0EsWUFBVyxRQUFYLENBQW9CLFNBQXBCLENBQThCLE9BQTlCLEdBQXdDLFlBQVc7QUFDbEQsU0FBTyxLQUFLLEtBQVo7QUFDQSxFQUZEO0FBR0EsWUFBVyxRQUFYLENBQW9CLFNBQXBCLENBQThCLFFBQTlCLEdBQXlDLFlBQVc7QUFDbkQsU0FBTyxLQUFLLE1BQVo7QUFDQSxFQUZEO0FBR0EsWUFBVyxRQUFYLENBQW9CLFNBQXBCLENBQThCLFFB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QU8sT0FBUCxDQUFlLFVBQWYsR0FBNEIsVUFBNUI7QUFDQSxDQW5xQkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uKCl7XG4gICAgdmFyIGlzTm9kZSA9IHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCc7XG5cbiAgICB2YXIgVXRpbHMgPSByZXF1aXJlKCcuL3NyYy91dGlscy1jb3JlJykuVXRpbHM7XG5cbiAgICB2YXIgbG9hZGVkID0gW107XG4gICAgbG9hZGVkLnB1c2gocmVxdWlyZSgnLi9zcmMvdXRpbHMvc3RyaW5nJykuU3RyaW5nKTtcbiAgICBsb2FkZWQucHVzaChyZXF1aXJlKCcuL3NyYy91dGlscy92YWxpZGF0aW9uJykuVmFsaWRhdGlvbik7XG4gICAgbG9hZGVkLnB1c2gocmVxdWlyZSgnLi9zcmMvdXRpbHMvZXJyb3InKS5FcnJvcik7XG5cdGxvYWRlZC5wdXNoKHJlcXVpcmUoJy4vc3JjL3V0aWxzL2RvbScpLkRPTSk7XG5cbiAgICBmb3IodmFyIGk9MDsgaTxsb2FkZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgVXRpbHMuZXh0ZW5kVXRpbHMobG9hZGVkW2ldKTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cy5VdGlscyA9IFV0aWxzO1xuICAgIHdpbmRvdy5VdGlscyA9IFV0aWxzO1xufSkoKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIGxvZGFzaCBsb2Rhc2guY29tL2xpY2Vuc2UgfCBVbmRlcnNjb3JlLmpzIDEuOC4zIHVuZGVyc2NvcmVqcy5vcmcvTElDRU5TRVxuICovXG47KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LG4pe3JldHVybiB0LnNldChuWzBdLG5bMV0pLHR9ZnVuY3Rpb24gbih0LG4pe3JldHVybiB0LmFkZChuKSx0fWZ1bmN0aW9uIHIodCxuLHIpe3N3aXRjaChyLmxlbmd0aCl7Y2FzZSAwOnJldHVybiB0LmNhbGwobik7Y2FzZSAxOnJldHVybiB0LmNhbGwobixyWzBdKTtjYXNlIDI6cmV0dXJuIHQuY2FsbChuLHJbMF0sclsxXSk7Y2FzZSAzOnJldHVybiB0LmNhbGwobixyWzBdLHJbMV0sclsyXSl9cmV0dXJuIHQuYXBwbHkobixyKX1mdW5jdGlvbiBlKHQsbixyLGUpe2Zvcih2YXIgdT0tMSxvPXQ/dC5sZW5ndGg6MDsrK3U8bzspe3ZhciBpPXRbdV07bihlLGkscihpKSx0KX1yZXR1cm4gZX1mdW5jdGlvbiB1KHQsbil7Zm9yKHZhciByPS0xLGU9dD90Lmxlbmd0aDowOysrcjxlJiZmYWxzZSE9PW4odFtyXSxyLHQpOyk7cmV0dXJuIHR9ZnVuY3Rpb24gbyh0LG4pe2Zvcih2YXIgcj10P3QubGVuZ3RoOjA7ci0tJiZmYWxzZSE9PW4odFtyXSxyLHQpOyk7XG5cdHJldHVybiB0fWZ1bmN0aW9uIGkodCxuKXtmb3IodmFyIHI9LTEsZT10P3QubGVuZ3RoOjA7KytyPGU7KWlmKCFuKHRbcl0scix0KSlyZXR1cm4gZmFsc2U7cmV0dXJuIHRydWV9ZnVuY3Rpb24gZih0LG4pe2Zvcih2YXIgcj0tMSxlPXQ/dC5sZW5ndGg6MCx1PTAsbz1bXTsrK3I8ZTspe3ZhciBpPXRbcl07bihpLHIsdCkmJihvW3UrK109aSl9cmV0dXJuIG99ZnVuY3Rpb24gYyh0LG4pe3JldHVybiEoIXR8fCF0Lmxlbmd0aCkmJi0xPGQodCxuLDApfWZ1bmN0aW9uIGEodCxuLHIpe2Zvcih2YXIgZT0tMSx1PXQ/dC5sZW5ndGg6MDsrK2U8dTspaWYocihuLHRbZV0pKXJldHVybiB0cnVlO3JldHVybiBmYWxzZX1mdW5jdGlvbiBsKHQsbil7Zm9yKHZhciByPS0xLGU9dD90Lmxlbmd0aDowLHU9QXJyYXkoZSk7KytyPGU7KXVbcl09bih0W3JdLHIsdCk7cmV0dXJuIHV9ZnVuY3Rpb24gcyh0LG4pe2Zvcih2YXIgcj0tMSxlPW4ubGVuZ3RoLHU9dC5sZW5ndGg7KytyPGU7KXRbdStyXT1uW3JdO3JldHVybiB0fWZ1bmN0aW9uIGgodCxuLHIsZSl7XG5cdHZhciB1PS0xLG89dD90Lmxlbmd0aDowO2ZvcihlJiZvJiYocj10WysrdV0pOysrdTxvOylyPW4ocix0W3VdLHUsdCk7cmV0dXJuIHJ9ZnVuY3Rpb24gcCh0LG4scixlKXt2YXIgdT10P3QubGVuZ3RoOjA7Zm9yKGUmJnUmJihyPXRbLS11XSk7dS0tOylyPW4ocix0W3VdLHUsdCk7cmV0dXJuIHJ9ZnVuY3Rpb24gXyh0LG4pe2Zvcih2YXIgcj0tMSxlPXQ/dC5sZW5ndGg6MDsrK3I8ZTspaWYobih0W3JdLHIsdCkpcmV0dXJuIHRydWU7cmV0dXJuIGZhbHNlfWZ1bmN0aW9uIHYodCxuLHIpe3ZhciBlO3JldHVybiByKHQsZnVuY3Rpb24odCxyLHUpe3JldHVybiBuKHQscix1KT8oZT1yLGZhbHNlKTp2b2lkIDB9KSxlfWZ1bmN0aW9uIGcodCxuLHIsZSl7dmFyIHU9dC5sZW5ndGg7Zm9yKHIrPWU/MTotMTtlP3ItLTorK3I8dTspaWYobih0W3JdLHIsdCkpcmV0dXJuIHI7cmV0dXJuLTF9ZnVuY3Rpb24gZCh0LG4scil7aWYobiE9PW4pcmV0dXJuIE0odCxyKTstLXI7Zm9yKHZhciBlPXQubGVuZ3RoOysrcjxlOylpZih0W3JdPT09bilyZXR1cm4gcjtcblx0cmV0dXJuLTF9ZnVuY3Rpb24geSh0LG4scixlKXstLXI7Zm9yKHZhciB1PXQubGVuZ3RoOysrcjx1OylpZihlKHRbcl0sbikpcmV0dXJuIHI7cmV0dXJuLTF9ZnVuY3Rpb24gYih0LG4pe3ZhciByPXQ/dC5sZW5ndGg6MDtyZXR1cm4gcj93KHQsbikvcjpWfWZ1bmN0aW9uIHgodCxuLHIsZSx1KXtyZXR1cm4gdSh0LGZ1bmN0aW9uKHQsdSxvKXtyPWU/KGU9ZmFsc2UsdCk6bihyLHQsdSxvKX0pLHJ9ZnVuY3Rpb24gaih0LG4pe3ZhciByPXQubGVuZ3RoO2Zvcih0LnNvcnQobik7ci0tOyl0W3JdPXRbcl0uYztyZXR1cm4gdH1mdW5jdGlvbiB3KHQsbil7Zm9yKHZhciByLGU9LTEsdT10Lmxlbmd0aDsrK2U8dTspe3ZhciBvPW4odFtlXSk7byE9PVQmJihyPXI9PT1UP286citvKX1yZXR1cm4gcn1mdW5jdGlvbiBtKHQsbil7Zm9yKHZhciByPS0xLGU9QXJyYXkodCk7KytyPHQ7KWVbcl09bihyKTtyZXR1cm4gZX1mdW5jdGlvbiBBKHQsbil7cmV0dXJuIGwobixmdW5jdGlvbihuKXtyZXR1cm5bbix0W25dXTtcbn0pfWZ1bmN0aW9uIE8odCl7cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiB0KG4pfX1mdW5jdGlvbiBrKHQsbil7cmV0dXJuIGwobixmdW5jdGlvbihuKXtyZXR1cm4gdFtuXX0pfWZ1bmN0aW9uIEUodCxuKXtyZXR1cm4gdC5oYXMobil9ZnVuY3Rpb24gUyh0LG4pe2Zvcih2YXIgcj0tMSxlPXQubGVuZ3RoOysrcjxlJiYtMTxkKG4sdFtyXSwwKTspO3JldHVybiByfWZ1bmN0aW9uIEkodCxuKXtmb3IodmFyIHI9dC5sZW5ndGg7ci0tJiYtMTxkKG4sdFtyXSwwKTspO3JldHVybiByfWZ1bmN0aW9uIFIodCl7cmV0dXJuIHQmJnQuT2JqZWN0PT09T2JqZWN0P3Q6bnVsbH1mdW5jdGlvbiBXKHQpe3JldHVybiB6dFt0XX1mdW5jdGlvbiBCKHQpe3JldHVybiBVdFt0XX1mdW5jdGlvbiBMKHQpe3JldHVyblwiXFxcXFwiK0R0W3RdfWZ1bmN0aW9uIE0odCxuLHIpe3ZhciBlPXQubGVuZ3RoO2ZvcihuKz1yPzE6LTE7cj9uLS06KytuPGU7KXt2YXIgdT10W25dO2lmKHUhPT11KXJldHVybiBufXJldHVybi0xO1xufWZ1bmN0aW9uIEModCl7dmFyIG49ZmFsc2U7aWYobnVsbCE9dCYmdHlwZW9mIHQudG9TdHJpbmchPVwiZnVuY3Rpb25cIil0cnl7bj0hISh0K1wiXCIpfWNhdGNoKHIpe31yZXR1cm4gbn1mdW5jdGlvbiB6KHQpe2Zvcih2YXIgbixyPVtdOyEobj10Lm5leHQoKSkuZG9uZTspci5wdXNoKG4udmFsdWUpO3JldHVybiByfWZ1bmN0aW9uIFUodCl7dmFyIG49LTEscj1BcnJheSh0LnNpemUpO3JldHVybiB0LmZvckVhY2goZnVuY3Rpb24odCxlKXtyWysrbl09W2UsdF19KSxyfWZ1bmN0aW9uICQodCxuKXtmb3IodmFyIHI9LTEsZT10Lmxlbmd0aCx1PTAsbz1bXTsrK3I8ZTspe3ZhciBpPXRbcl07aSE9PW4mJlwiX19sb2Rhc2hfcGxhY2Vob2xkZXJfX1wiIT09aXx8KHRbcl09XCJfX2xvZGFzaF9wbGFjZWhvbGRlcl9fXCIsb1t1KytdPXIpfXJldHVybiBvfWZ1bmN0aW9uIEQodCl7dmFyIG49LTEscj1BcnJheSh0LnNpemUpO3JldHVybiB0LmZvckVhY2goZnVuY3Rpb24odCl7clsrK25dPXR9KSxyfWZ1bmN0aW9uIEYodCl7XG5cdHZhciBuPS0xLHI9QXJyYXkodC5zaXplKTtyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JbKytuXT1bdCx0XX0pLHJ9ZnVuY3Rpb24gTih0KXtpZighdHx8IVd0LnRlc3QodCkpcmV0dXJuIHQubGVuZ3RoO2Zvcih2YXIgbj1JdC5sYXN0SW5kZXg9MDtJdC50ZXN0KHQpOyluKys7cmV0dXJuIG59ZnVuY3Rpb24gUCh0KXtyZXR1cm4gJHRbdF19ZnVuY3Rpb24gWihSKXtmdW5jdGlvbiBBdCh0LG4pe3JldHVybiBSLnNldFRpbWVvdXQuY2FsbChLdCx0LG4pfWZ1bmN0aW9uIE90KHQpe2lmKFRlKHQpJiYheWkodCkmJiEodCBpbnN0YW5jZW9mIFV0KSl7aWYodCBpbnN0YW5jZW9mIHp0KXJldHVybiB0O2lmKFd1LmNhbGwodCxcIl9fd3JhcHBlZF9fXCIpKXJldHVybiBhZSh0KX1yZXR1cm4gbmV3IHp0KHQpfWZ1bmN0aW9uIGt0KCl7fWZ1bmN0aW9uIHp0KHQsbil7dGhpcy5fX3dyYXBwZWRfXz10LHRoaXMuX19hY3Rpb25zX189W10sdGhpcy5fX2NoYWluX189ISFuLHRoaXMuX19pbmRleF9fPTAsXG5cdHRoaXMuX192YWx1ZXNfXz1UfWZ1bmN0aW9uIFV0KHQpe3RoaXMuX193cmFwcGVkX189dCx0aGlzLl9fYWN0aW9uc19fPVtdLHRoaXMuX19kaXJfXz0xLHRoaXMuX19maWx0ZXJlZF9fPWZhbHNlLHRoaXMuX19pdGVyYXRlZXNfXz1bXSx0aGlzLl9fdGFrZUNvdW50X189NDI5NDk2NzI5NSx0aGlzLl9fdmlld3NfXz1bXX1mdW5jdGlvbiAkdCh0KXt2YXIgbj0tMSxyPXQ/dC5sZW5ndGg6MDtmb3IodGhpcy5jbGVhcigpOysrbjxyOyl7dmFyIGU9dFtuXTt0aGlzLnNldChlWzBdLGVbMV0pfX1mdW5jdGlvbiBEdCh0KXt2YXIgbj0tMSxyPXQ/dC5sZW5ndGg6MDtmb3IodGhpcy5jbGVhcigpOysrbjxyOyl7dmFyIGU9dFtuXTt0aGlzLnNldChlWzBdLGVbMV0pfX1mdW5jdGlvbiBQdCh0KXt2YXIgbj0tMSxyPXQ/dC5sZW5ndGg6MDtmb3IodGhpcy5jbGVhcigpOysrbjxyOyl7dmFyIGU9dFtuXTt0aGlzLnNldChlWzBdLGVbMV0pfX1mdW5jdGlvbiBadCh0KXt2YXIgbj0tMSxyPXQ/dC5sZW5ndGg6MDtcblx0Zm9yKHRoaXMuX19kYXRhX189bmV3IFB0OysrbjxyOyl0aGlzLmFkZCh0W25dKX1mdW5jdGlvbiBxdCh0KXt0aGlzLl9fZGF0YV9fPW5ldyBEdCh0KX1mdW5jdGlvbiBWdCh0LG4scixlKXtyZXR1cm4gdD09PVR8fENlKHQsa3Vbcl0pJiYhV3UuY2FsbChlLHIpP246dH1mdW5jdGlvbiBKdCh0LG4scil7KHI9PT1UfHxDZSh0W25dLHIpKSYmKHR5cGVvZiBuIT1cIm51bWJlclwifHxyIT09VHx8biBpbiB0KXx8KHRbbl09cil9ZnVuY3Rpb24gWXQodCxuLHIpe3ZhciBlPXRbbl07V3UuY2FsbCh0LG4pJiZDZShlLHIpJiYociE9PVR8fG4gaW4gdCl8fCh0W25dPXIpfWZ1bmN0aW9uIEh0KHQsbil7Zm9yKHZhciByPXQubGVuZ3RoO3ItLTspaWYoQ2UodFtyXVswXSxuKSlyZXR1cm4gcjtyZXR1cm4tMX1mdW5jdGlvbiBRdCh0LG4scixlKXtyZXR1cm4gQW8odCxmdW5jdGlvbih0LHUsbyl7bihlLHQscih0KSxvKX0pLGV9ZnVuY3Rpb24gWHQodCxuKXtyZXR1cm4gdCYmc3IobixpdShuKSx0KX1cblx0ZnVuY3Rpb24gdG4odCxuKXtmb3IodmFyIHI9LTEsZT1udWxsPT10LHU9bi5sZW5ndGgsbz1BcnJheSh1KTsrK3I8dTspb1tyXT1lP1Q6dXUodCxuW3JdKTtyZXR1cm4gb31mdW5jdGlvbiBubih0LG4scil7cmV0dXJuIHQ9PT10JiYociE9PVQmJih0PXI+PXQ/dDpyKSxuIT09VCYmKHQ9dD49bj90Om4pKSx0fWZ1bmN0aW9uIHJuKHQsbixyLGUsbyxpLGYpe3ZhciBjO2lmKGUmJihjPWk/ZSh0LG8saSxmKTplKHQpKSxjIT09VClyZXR1cm4gYztpZighWmUodCkpcmV0dXJuIHQ7aWYobz15aSh0KSl7aWYoYz1Lcih0KSwhbilyZXR1cm4gbHIodCxjKX1lbHNle3ZhciBhPXFyKHQpLGw9XCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT1hfHxcIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCI9PWE7aWYoYmkodCkpcmV0dXJuIG9yKHQsbik7aWYoXCJbb2JqZWN0IE9iamVjdF1cIj09YXx8XCJbb2JqZWN0IEFyZ3VtZW50c11cIj09YXx8bCYmIWkpe2lmKEModCkpcmV0dXJuIGk/dDp7fTtpZihjPUdyKGw/e306dCksXG5cdFx0XHQhbilyZXR1cm4gaHIodCxYdChjLHQpKX1lbHNle2lmKCFDdFthXSlyZXR1cm4gaT90Ont9O2M9SnIodCxhLHJuLG4pfX1pZihmfHwoZj1uZXcgcXQpLGk9Zi5nZXQodCkpcmV0dXJuIGk7aWYoZi5zZXQodCxjKSwhbyl2YXIgcz1yP2duKHQsaXUsVHIpOml1KHQpO3JldHVybiB1KHN8fHQsZnVuY3Rpb24odSxvKXtzJiYobz11LHU9dFtvXSksWXQoYyxvLHJuKHUsbixyLGUsbyx0LGYpKX0pLGN9ZnVuY3Rpb24gZW4odCl7dmFyIG49aXUodCkscj1uLmxlbmd0aDtyZXR1cm4gZnVuY3Rpb24oZSl7aWYobnVsbD09ZSlyZXR1cm4hcjtmb3IodmFyIHU9cjt1LS07KXt2YXIgbz1uW3VdLGk9dFtvXSxmPWVbb107aWYoZj09PVQmJiEobyBpbiBPYmplY3QoZSkpfHwhaShmKSlyZXR1cm4gZmFsc2V9cmV0dXJuIHRydWV9fWZ1bmN0aW9uIHVuKHQpe3JldHVybiBaZSh0KT9UdSh0KTp7fX1mdW5jdGlvbiBvbih0LG4scil7aWYodHlwZW9mIHQhPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgQXUoXCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIpO1xuXHRcdHJldHVybiBBdChmdW5jdGlvbigpe3QuYXBwbHkoVCxyKX0sbil9ZnVuY3Rpb24gZm4odCxuLHIsZSl7dmFyIHU9LTEsbz1jLGk9dHJ1ZSxmPXQubGVuZ3RoLHM9W10saD1uLmxlbmd0aDtpZighZilyZXR1cm4gcztyJiYobj1sKG4sTyhyKSkpLGU/KG89YSxpPWZhbHNlKTpuLmxlbmd0aD49MjAwJiYobz1FLGk9ZmFsc2Usbj1uZXcgWnQobikpO3Q6Zm9yKDsrK3U8Zjspe3ZhciBwPXRbdV0sXz1yP3IocCk6cCxwPWV8fDAhPT1wP3A6MDtpZihpJiZfPT09Xyl7Zm9yKHZhciB2PWg7di0tOylpZihuW3ZdPT09Xyljb250aW51ZSB0O3MucHVzaChwKX1lbHNlIG8obixfLGUpfHxzLnB1c2gocCl9cmV0dXJuIHN9ZnVuY3Rpb24gY24odCxuKXt2YXIgcj10cnVlO3JldHVybiBBbyh0LGZ1bmN0aW9uKHQsZSx1KXtyZXR1cm4gcj0hIW4odCxlLHUpfSkscn1mdW5jdGlvbiBhbih0LG4scil7Zm9yKHZhciBlPS0xLHU9dC5sZW5ndGg7KytlPHU7KXt2YXIgbz10W2VdLGk9bihvKTtpZihudWxsIT1pJiYoZj09PVQ/aT09PWkmJiFKZShpKTpyKGksZikpKXZhciBmPWksYz1vO1xuXHR9cmV0dXJuIGN9ZnVuY3Rpb24gbG4odCxuKXt2YXIgcj1bXTtyZXR1cm4gQW8odCxmdW5jdGlvbih0LGUsdSl7bih0LGUsdSkmJnIucHVzaCh0KX0pLHJ9ZnVuY3Rpb24gc24odCxuLHIsZSx1KXt2YXIgbz0tMSxpPXQubGVuZ3RoO2ZvcihyfHwocj1IciksdXx8KHU9W10pOysrbzxpOyl7dmFyIGY9dFtvXTtuPjAmJnIoZik/bj4xP3NuKGYsbi0xLHIsZSx1KTpzKHUsZik6ZXx8KHVbdS5sZW5ndGhdPWYpfXJldHVybiB1fWZ1bmN0aW9uIGhuKHQsbil7cmV0dXJuIHQmJmtvKHQsbixpdSl9ZnVuY3Rpb24gcG4odCxuKXtyZXR1cm4gdCYmRW8odCxuLGl1KX1mdW5jdGlvbiBfbih0LG4pe3JldHVybiBmKG4sZnVuY3Rpb24obil7cmV0dXJuIEZlKHRbbl0pfSl9ZnVuY3Rpb24gdm4odCxuKXtuPW5lKG4sdCk/W25dOmVyKG4pO2Zvcih2YXIgcj0wLGU9bi5sZW5ndGg7bnVsbCE9dCYmZT5yOyl0PXRbZmUobltyKytdKV07cmV0dXJuIHImJnI9PWU/dDpUfWZ1bmN0aW9uIGduKHQsbixyKXtcblx0XHRyZXR1cm4gbj1uKHQpLHlpKHQpP246cyhuLHIodCkpfWZ1bmN0aW9uIGRuKHQsbil7cmV0dXJuIHQ+bn1mdW5jdGlvbiB5bih0LG4pe3JldHVybiBudWxsIT10JiYoV3UuY2FsbCh0LG4pfHx0eXBlb2YgdD09XCJvYmplY3RcIiYmbiBpbiB0JiZudWxsPT09SnUoT2JqZWN0KHQpKSl9ZnVuY3Rpb24gYm4odCxuKXtyZXR1cm4gbnVsbCE9dCYmbiBpbiBPYmplY3QodCl9ZnVuY3Rpb24geG4odCxuLHIpe2Zvcih2YXIgZT1yP2E6Yyx1PXRbMF0ubGVuZ3RoLG89dC5sZW5ndGgsaT1vLGY9QXJyYXkobykscz0xLzAsaD1bXTtpLS07KXt2YXIgcD10W2ldO2kmJm4mJihwPWwocCxPKG4pKSkscz10byhwLmxlbmd0aCxzKSxmW2ldPSFyJiYobnx8dT49MTIwJiZwLmxlbmd0aD49MTIwKT9uZXcgWnQoaSYmcCk6VH12YXIgcD10WzBdLF89LTEsdj1mWzBdO3Q6Zm9yKDsrK188dSYmcz5oLmxlbmd0aDspe3ZhciBnPXBbX10sZD1uP24oZyk6ZyxnPXJ8fDAhPT1nP2c6MDtpZih2PyFFKHYsZCk6IWUoaCxkLHIpKXtcblx0XHRmb3IoaT1vOy0taTspe3ZhciB5PWZbaV07aWYoeT8hRSh5LGQpOiFlKHRbaV0sZCxyKSljb250aW51ZSB0fXYmJnYucHVzaChkKSxoLnB1c2goZyl9fXJldHVybiBofWZ1bmN0aW9uIGpuKHQsbixyKXt2YXIgZT17fTtyZXR1cm4gaG4odCxmdW5jdGlvbih0LHUsbyl7bihlLHIodCksdSxvKX0pLGV9ZnVuY3Rpb24gd24odCxuLGUpe3JldHVybiBuZShuLHQpfHwobj1lcihuKSx0PWllKHQsbiksbj12ZShuKSksbj1udWxsPT10P3Q6dFtmZShuKV0sbnVsbD09bj9UOnIobix0LGUpfWZ1bmN0aW9uIG1uKHQsbixyLGUsdSl7aWYodD09PW4pbj10cnVlO2Vsc2UgaWYobnVsbD09dHx8bnVsbD09bnx8IVplKHQpJiYhVGUobikpbj10IT09dCYmbiE9PW47ZWxzZSB0Ont2YXIgbz15aSh0KSxpPXlpKG4pLGY9XCJbb2JqZWN0IEFycmF5XVwiLGM9XCJbb2JqZWN0IEFycmF5XVwiO298fChmPXFyKHQpLGY9XCJbb2JqZWN0IEFyZ3VtZW50c11cIj09Zj9cIltvYmplY3QgT2JqZWN0XVwiOmYpLGl8fChjPXFyKG4pLFxuXHRcdGM9XCJbb2JqZWN0IEFyZ3VtZW50c11cIj09Yz9cIltvYmplY3QgT2JqZWN0XVwiOmMpO3ZhciBhPVwiW29iamVjdCBPYmplY3RdXCI9PWYmJiFDKHQpLGk9XCJbb2JqZWN0IE9iamVjdF1cIj09YyYmIUMobik7aWYoKGM9Zj09YykmJiFhKXV8fCh1PW5ldyBxdCksbj1vfHxZZSh0KT96cih0LG4sbW4scixlLHUpOlVyKHQsbixmLG1uLHIsZSx1KTtlbHNle2lmKCEoMiZlKSYmKG89YSYmV3UuY2FsbCh0LFwiX193cmFwcGVkX19cIiksZj1pJiZXdS5jYWxsKG4sXCJfX3dyYXBwZWRfX1wiKSxvfHxmKSl7dD1vP3QudmFsdWUoKTp0LG49Zj9uLnZhbHVlKCk6bix1fHwodT1uZXcgcXQpLG49bW4odCxuLHIsZSx1KTticmVhayB0fWlmKGMpbjppZih1fHwodT1uZXcgcXQpLG89MiZlLGY9aXUodCksaT1mLmxlbmd0aCxjPWl1KG4pLmxlbmd0aCxpPT1jfHxvKXtmb3IoYT1pO2EtLTspe3ZhciBsPWZbYV07aWYoIShvP2wgaW4gbjp5bihuLGwpKSl7bj1mYWxzZTticmVhayBufX1pZihjPXUuZ2V0KHQpKW49Yz09bjtlbHNle1xuXHRcdGM9dHJ1ZSx1LnNldCh0LG4pO2Zvcih2YXIgcz1vOysrYTxpOyl7dmFyIGw9ZlthXSxoPXRbbF0scD1uW2xdO2lmKHIpdmFyIF89bz9yKHAsaCxsLG4sdCx1KTpyKGgscCxsLHQsbix1KTtpZihfPT09VD9oIT09cCYmIW1uKGgscCxyLGUsdSk6IV8pe2M9ZmFsc2U7YnJlYWt9c3x8KHM9XCJjb25zdHJ1Y3RvclwiPT1sKX1jJiYhcyYmKHI9dC5jb25zdHJ1Y3RvcixlPW4uY29uc3RydWN0b3IsciE9ZSYmXCJjb25zdHJ1Y3RvclwiaW4gdCYmXCJjb25zdHJ1Y3RvclwiaW4gbiYmISh0eXBlb2Ygcj09XCJmdW5jdGlvblwiJiZyIGluc3RhbmNlb2YgciYmdHlwZW9mIGU9PVwiZnVuY3Rpb25cIiYmZSBpbnN0YW5jZW9mIGUpJiYoYz1mYWxzZSkpLHVbXCJkZWxldGVcIl0odCksbj1jfX1lbHNlIG49ZmFsc2U7ZWxzZSBuPWZhbHNlfX1yZXR1cm4gbn1mdW5jdGlvbiBBbih0LG4scixlKXt2YXIgdT1yLmxlbmd0aCxvPXUsaT0hZTtpZihudWxsPT10KXJldHVybiFvO2Zvcih0PU9iamVjdCh0KTt1LS07KXt2YXIgZj1yW3VdO2lmKGkmJmZbMl0/ZlsxXSE9PXRbZlswXV06IShmWzBdaW4gdCkpcmV0dXJuIGZhbHNlO1xuXHR9Zm9yKDsrK3U8bzspe3ZhciBmPXJbdV0sYz1mWzBdLGE9dFtjXSxsPWZbMV07aWYoaSYmZlsyXSl7aWYoYT09PVQmJiEoYyBpbiB0KSlyZXR1cm4gZmFsc2V9ZWxzZXtpZihmPW5ldyBxdCxlKXZhciBzPWUoYSxsLGMsdCxuLGYpO2lmKHM9PT1UPyFtbihsLGEsZSwzLGYpOiFzKXJldHVybiBmYWxzZX19cmV0dXJuIHRydWV9ZnVuY3Rpb24gT24odCl7cmV0dXJuIVplKHQpfHxJdSYmSXUgaW4gdD9mYWxzZTooRmUodCl8fEModCk/enU6eXQpLnRlc3QoY2UodCkpfWZ1bmN0aW9uIGtuKHQpe3JldHVybiB0eXBlb2YgdD09XCJmdW5jdGlvblwiP3Q6bnVsbD09dD9wdTp0eXBlb2YgdD09XCJvYmplY3RcIj95aSh0KT9Xbih0WzBdLHRbMV0pOlJuKHQpOmR1KHQpfWZ1bmN0aW9uIEVuKHQpe3Q9bnVsbD09dD90Ok9iamVjdCh0KTt2YXIgbixyPVtdO2ZvcihuIGluIHQpci5wdXNoKG4pO3JldHVybiByfWZ1bmN0aW9uIFNuKHQsbil7cmV0dXJuIG4+dH1mdW5jdGlvbiBJbih0LG4pe3ZhciByPS0xLGU9VWUodCk/QXJyYXkodC5sZW5ndGgpOltdO1xuXHRcdHJldHVybiBBbyh0LGZ1bmN0aW9uKHQsdSxvKXtlWysrcl09bih0LHUsbyl9KSxlfWZ1bmN0aW9uIFJuKHQpe3ZhciBuPVByKHQpO3JldHVybiAxPT1uLmxlbmd0aCYmblswXVsyXT91ZShuWzBdWzBdLG5bMF1bMV0pOmZ1bmN0aW9uKHIpe3JldHVybiByPT09dHx8QW4ocix0LG4pfX1mdW5jdGlvbiBXbih0LG4pe3JldHVybiBuZSh0KSYmbj09PW4mJiFaZShuKT91ZShmZSh0KSxuKTpmdW5jdGlvbihyKXt2YXIgZT11dShyLHQpO3JldHVybiBlPT09VCYmZT09PW4/b3Uocix0KTptbihuLGUsVCwzKX19ZnVuY3Rpb24gQm4odCxuLHIsZSxvKXtpZih0IT09bil7aWYoIXlpKG4pJiYhWWUobikpdmFyIGk9ZnUobik7dShpfHxuLGZ1bmN0aW9uKHUsZil7aWYoaSYmKGY9dSx1PW5bZl0pLFplKHUpKXtvfHwobz1uZXcgcXQpO3ZhciBjPWYsYT1vLGw9dFtjXSxzPW5bY10saD1hLmdldChzKTtpZihoKUp0KHQsYyxoKTtlbHNle3ZhciBoPWU/ZShsLHMsYytcIlwiLHQsbixhKTpULHA9aD09PVQ7cCYmKGg9cyxcblx0XHR5aShzKXx8WWUocyk/eWkobCk/aD1sOiRlKGwpP2g9bHIobCk6KHA9ZmFsc2UsaD1ybihzLHRydWUpKTpWZShzKXx8emUocyk/emUobCk/aD1ydShsKTohWmUobCl8fHImJkZlKGwpPyhwPWZhbHNlLGg9cm4ocyx0cnVlKSk6aD1sOnA9ZmFsc2UpLGEuc2V0KHMsaCkscCYmQm4oaCxzLHIsZSxhKSxhW1wiZGVsZXRlXCJdKHMpLEp0KHQsYyxoKX19ZWxzZSBjPWU/ZSh0W2ZdLHUsZitcIlwiLHQsbixvKTpULGM9PT1UJiYoYz11KSxKdCh0LGYsYyl9KX19ZnVuY3Rpb24gTG4odCxuKXt2YXIgcj10Lmxlbmd0aDtyZXR1cm4gcj8obis9MD5uP3I6MCxYcihuLHIpP3Rbbl06VCk6dm9pZCAwfWZ1bmN0aW9uIE1uKHQsbixyKXt2YXIgZT0tMTtyZXR1cm4gbj1sKG4ubGVuZ3RoP246W3B1XSxPKEZyKCkpKSx0PUluKHQsZnVuY3Rpb24odCl7cmV0dXJue2E6bChuLGZ1bmN0aW9uKG4pe3JldHVybiBuKHQpfSksYjorK2UsYzp0fX0pLGoodCxmdW5jdGlvbih0LG4pe3ZhciBlO3Q6e2U9LTE7Zm9yKHZhciB1PXQuYSxvPW4uYSxpPXUubGVuZ3RoLGY9ci5sZW5ndGg7KytlPGk7KXtcblx0XHR2YXIgYz1mcih1W2VdLG9bZV0pO2lmKGMpe2U9ZT49Zj9jOmMqKFwiZGVzY1wiPT1yW2VdPy0xOjEpO2JyZWFrIHR9fWU9dC5iLW4uYn1yZXR1cm4gZX0pfWZ1bmN0aW9uIENuKHQsbil7cmV0dXJuIHQ9T2JqZWN0KHQpLGgobixmdW5jdGlvbihuLHIpe3JldHVybiByIGluIHQmJihuW3JdPXRbcl0pLG59LHt9KX1mdW5jdGlvbiB6bih0LG4pe2Zvcih2YXIgcj0tMSxlPWduKHQsZnUsQm8pLHU9ZS5sZW5ndGgsbz17fTsrK3I8dTspe3ZhciBpPWVbcl0sZj10W2ldO24oZixpKSYmKG9baV09Zil9cmV0dXJuIG99ZnVuY3Rpb24gVW4odCl7cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiBudWxsPT1uP1Q6blt0XX19ZnVuY3Rpb24gJG4odCl7cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiB2bihuLHQpfX1mdW5jdGlvbiBEbih0LG4scixlKXt2YXIgdT1lP3k6ZCxvPS0xLGk9bi5sZW5ndGgsZj10O2Zvcih0PT09biYmKG49bHIobikpLHImJihmPWwodCxPKHIpKSk7KytvPGk7KWZvcih2YXIgYz0wLGE9bltvXSxhPXI/cihhKTphOy0xPChjPXUoZixhLGMsZSkpOylmIT09dCYmVnUuY2FsbChmLGMsMSksXG5cdFx0VnUuY2FsbCh0LGMsMSk7cmV0dXJuIHR9ZnVuY3Rpb24gRm4odCxuKXtmb3IodmFyIHI9dD9uLmxlbmd0aDowLGU9ci0xO3ItLTspe3ZhciB1PW5bcl07aWYocj09ZXx8dSE9PW8pe3ZhciBvPXU7aWYoWHIodSkpVnUuY2FsbCh0LHUsMSk7ZWxzZSBpZihuZSh1LHQpKWRlbGV0ZSB0W2ZlKHUpXTtlbHNle3ZhciB1PWVyKHUpLGk9aWUodCx1KTtudWxsIT1pJiZkZWxldGUgaVtmZSh2ZSh1KSldfX19fWZ1bmN0aW9uIE5uKHQsbil7cmV0dXJuIHQrR3Uocm8oKSoobi10KzEpKX1mdW5jdGlvbiBQbih0LG4pe3ZhciByPVwiXCI7aWYoIXR8fDE+bnx8bj45MDA3MTk5MjU0NzQwOTkxKXJldHVybiByO2RvIG4lMiYmKHIrPXQpLChuPUd1KG4vMikpJiYodCs9dCk7d2hpbGUobik7cmV0dXJuIHJ9ZnVuY3Rpb24gWm4odCxuLHIsZSl7bj1uZShuLHQpP1tuXTplcihuKTtmb3IodmFyIHU9LTEsbz1uLmxlbmd0aCxpPW8tMSxmPXQ7bnVsbCE9ZiYmKyt1PG87KXt2YXIgYz1mZShuW3VdKTtpZihaZShmKSl7XG5cdFx0dmFyIGE9cjtpZih1IT1pKXt2YXIgbD1mW2NdLGE9ZT9lKGwsYyxmKTpUO2E9PT1UJiYoYT1udWxsPT1sP1hyKG5bdSsxXSk/W106e306bCl9WXQoZixjLGEpfWY9ZltjXX1yZXR1cm4gdH1mdW5jdGlvbiBUbih0LG4scil7dmFyIGU9LTEsdT10Lmxlbmd0aDtmb3IoMD5uJiYobj0tbj51PzA6dStuKSxyPXI+dT91OnIsMD5yJiYocis9dSksdT1uPnI/MDpyLW4+Pj4wLG4+Pj49MCxyPUFycmF5KHUpOysrZTx1OylyW2VdPXRbZStuXTtyZXR1cm4gcn1mdW5jdGlvbiBxbih0LG4pe3ZhciByO3JldHVybiBBbyh0LGZ1bmN0aW9uKHQsZSx1KXtyZXR1cm4gcj1uKHQsZSx1KSwhcn0pLCEhcn1mdW5jdGlvbiBWbih0LG4scil7dmFyIGU9MCx1PXQ/dC5sZW5ndGg6ZTtpZih0eXBlb2Ygbj09XCJudW1iZXJcIiYmbj09PW4mJjIxNDc0ODM2NDc+PXUpe2Zvcig7dT5lOyl7dmFyIG89ZSt1Pj4+MSxpPXRbb107bnVsbCE9PWkmJiFKZShpKSYmKHI/bj49aTpuPmkpP2U9bysxOnU9b31yZXR1cm4gdX1cblx0XHRyZXR1cm4gS24odCxuLHB1LHIpfWZ1bmN0aW9uIEtuKHQsbixyLGUpe249cihuKTtmb3IodmFyIHU9MCxvPXQ/dC5sZW5ndGg6MCxpPW4hPT1uLGY9bnVsbD09PW4sYz1KZShuKSxhPW49PT1UO28+dTspe3ZhciBsPUd1KCh1K28pLzIpLHM9cih0W2xdKSxoPXMhPT1ULHA9bnVsbD09PXMsXz1zPT09cyx2PUplKHMpOyhpP2V8fF86YT9fJiYoZXx8aCk6Zj9fJiZoJiYoZXx8IXApOmM/XyYmaCYmIXAmJihlfHwhdik6cHx8dj8wOmU/bj49czpuPnMpP3U9bCsxOm89bH1yZXR1cm4gdG8obyw0Mjk0OTY3Mjk0KX1mdW5jdGlvbiBHbih0LG4pe2Zvcih2YXIgcj0tMSxlPXQubGVuZ3RoLHU9MCxvPVtdOysrcjxlOyl7dmFyIGk9dFtyXSxmPW4/bihpKTppO2lmKCFyfHwhQ2UoZixjKSl7dmFyIGM9ZjtvW3UrK109MD09PWk/MDppfX1yZXR1cm4gb31mdW5jdGlvbiBKbih0KXtyZXR1cm4gdHlwZW9mIHQ9PVwibnVtYmVyXCI/dDpKZSh0KT9WOit0fWZ1bmN0aW9uIFluKHQpe2lmKHR5cGVvZiB0PT1cInN0cmluZ1wiKXJldHVybiB0O1xuXHRcdGlmKEplKHQpKXJldHVybiBtbz9tby5jYWxsKHQpOlwiXCI7dmFyIG49dCtcIlwiO3JldHVyblwiMFwiPT1uJiYxL3Q9PS1xP1wiLTBcIjpufWZ1bmN0aW9uIEhuKHQsbixyKXt2YXIgZT0tMSx1PWMsbz10Lmxlbmd0aCxpPXRydWUsZj1bXSxsPWY7aWYocilpPWZhbHNlLHU9YTtlbHNlIGlmKG8+PTIwMCl7aWYodT1uP251bGw6SW8odCkpcmV0dXJuIEQodSk7aT1mYWxzZSx1PUUsbD1uZXcgWnR9ZWxzZSBsPW4/W106Zjt0OmZvcig7KytlPG87KXt2YXIgcz10W2VdLGg9bj9uKHMpOnMscz1yfHwwIT09cz9zOjA7aWYoaSYmaD09PWgpe2Zvcih2YXIgcD1sLmxlbmd0aDtwLS07KWlmKGxbcF09PT1oKWNvbnRpbnVlIHQ7biYmbC5wdXNoKGgpLGYucHVzaChzKX1lbHNlIHUobCxoLHIpfHwobCE9PWYmJmwucHVzaChoKSxmLnB1c2gocykpfXJldHVybiBmfWZ1bmN0aW9uIFFuKHQsbixyLGUpe2Zvcih2YXIgdT10Lmxlbmd0aCxvPWU/dTotMTsoZT9vLS06KytvPHUpJiZuKHRbb10sbyx0KTspO3JldHVybiByP1RuKHQsZT8wOm8sZT9vKzE6dSk6VG4odCxlP28rMTowLGU/dTpvKTtcblx0fWZ1bmN0aW9uIFhuKHQsbil7dmFyIHI9dDtyZXR1cm4gciBpbnN0YW5jZW9mIFV0JiYocj1yLnZhbHVlKCkpLGgobixmdW5jdGlvbih0LG4pe3JldHVybiBuLmZ1bmMuYXBwbHkobi50aGlzQXJnLHMoW3RdLG4uYXJncykpfSxyKX1mdW5jdGlvbiB0cih0LG4scil7Zm9yKHZhciBlPS0xLHU9dC5sZW5ndGg7KytlPHU7KXZhciBvPW8/cyhmbihvLHRbZV0sbixyKSxmbih0W2VdLG8sbixyKSk6dFtlXTtyZXR1cm4gbyYmby5sZW5ndGg/SG4obyxuLHIpOltdfWZ1bmN0aW9uIG5yKHQsbixyKXtmb3IodmFyIGU9LTEsdT10Lmxlbmd0aCxvPW4ubGVuZ3RoLGk9e307KytlPHU7KXIoaSx0W2VdLG8+ZT9uW2VdOlQpO3JldHVybiBpfWZ1bmN0aW9uIHJyKHQpe3JldHVybiAkZSh0KT90OltdfWZ1bmN0aW9uIGVyKHQpe3JldHVybiB5aSh0KT90OkNvKHQpfWZ1bmN0aW9uIHVyKHQsbixyKXt2YXIgZT10Lmxlbmd0aDtyZXR1cm4gcj1yPT09VD9lOnIsIW4mJnI+PWU/dDpUbih0LG4scil9ZnVuY3Rpb24gb3IodCxuKXtcblx0XHRpZihuKXJldHVybiB0LnNsaWNlKCk7dmFyIHI9bmV3IHQuY29uc3RydWN0b3IodC5sZW5ndGgpO3JldHVybiB0LmNvcHkocikscn1mdW5jdGlvbiBpcih0KXt2YXIgbj1uZXcgdC5jb25zdHJ1Y3Rvcih0LmJ5dGVMZW5ndGgpO3JldHVybiBuZXcgRnUobikuc2V0KG5ldyBGdSh0KSksbn1mdW5jdGlvbiBmcih0LG4pe2lmKHQhPT1uKXt2YXIgcj10IT09VCxlPW51bGw9PT10LHU9dD09PXQsbz1KZSh0KSxpPW4hPT1ULGY9bnVsbD09PW4sYz1uPT09bixhPUplKG4pO2lmKCFmJiYhYSYmIW8mJnQ+bnx8byYmaSYmYyYmIWYmJiFhfHxlJiZpJiZjfHwhciYmY3x8IXUpcmV0dXJuIDE7aWYoIWUmJiFvJiYhYSYmbj50fHxhJiZyJiZ1JiYhZSYmIW98fGYmJnImJnV8fCFpJiZ1fHwhYylyZXR1cm4tMX1yZXR1cm4gMH1mdW5jdGlvbiBjcih0LG4scixlKXt2YXIgdT0tMSxvPXQubGVuZ3RoLGk9ci5sZW5ndGgsZj0tMSxjPW4ubGVuZ3RoLGE9WHUoby1pLDApLGw9QXJyYXkoYythKTtmb3IoZT0hZTsrK2Y8YzspbFtmXT1uW2ZdO1xuXHRcdGZvcig7Kyt1PGk7KShlfHxvPnUpJiYobFtyW3VdXT10W3VdKTtmb3IoO2EtLTspbFtmKytdPXRbdSsrXTtyZXR1cm4gbH1mdW5jdGlvbiBhcih0LG4scixlKXt2YXIgdT0tMSxvPXQubGVuZ3RoLGk9LTEsZj1yLmxlbmd0aCxjPS0xLGE9bi5sZW5ndGgsbD1YdShvLWYsMCkscz1BcnJheShsK2EpO2ZvcihlPSFlOysrdTxsOylzW3VdPXRbdV07Zm9yKGw9dTsrK2M8YTspc1tsK2NdPW5bY107Zm9yKDsrK2k8ZjspKGV8fG8+dSkmJihzW2wrcltpXV09dFt1KytdKTtyZXR1cm4gc31mdW5jdGlvbiBscih0LG4pe3ZhciByPS0xLGU9dC5sZW5ndGg7Zm9yKG58fChuPUFycmF5KGUpKTsrK3I8ZTspbltyXT10W3JdO3JldHVybiBufWZ1bmN0aW9uIHNyKHQsbixyLGUpe3J8fChyPXt9KTtmb3IodmFyIHU9LTEsbz1uLmxlbmd0aDsrK3U8bzspe3ZhciBpPW5bdV0sZj1lP2UocltpXSx0W2ldLGkscix0KTp0W2ldO1l0KHIsaSxmKX1yZXR1cm4gcn1mdW5jdGlvbiBocih0LG4pe3JldHVybiBzcih0LFRyKHQpLG4pO1xuXHR9ZnVuY3Rpb24gcHIodCxuKXtyZXR1cm4gZnVuY3Rpb24ocix1KXt2YXIgbz15aShyKT9lOlF0LGk9bj9uKCk6e307cmV0dXJuIG8ocix0LEZyKHUpLGkpfX1mdW5jdGlvbiBfcih0KXtyZXR1cm4gTWUoZnVuY3Rpb24obixyKXt2YXIgZT0tMSx1PXIubGVuZ3RoLG89dT4xP3JbdS0xXTpULGk9dT4yP3JbMl06VCxvPXQubGVuZ3RoPjMmJnR5cGVvZiBvPT1cImZ1bmN0aW9uXCI/KHUtLSxvKTpUO2ZvcihpJiZ0ZShyWzBdLHJbMV0saSkmJihvPTM+dT9UOm8sdT0xKSxuPU9iamVjdChuKTsrK2U8dTspKGk9cltlXSkmJnQobixpLGUsbyk7cmV0dXJuIG59KX1mdW5jdGlvbiB2cih0LG4pe3JldHVybiBmdW5jdGlvbihyLGUpe2lmKG51bGw9PXIpcmV0dXJuIHI7aWYoIVVlKHIpKXJldHVybiB0KHIsZSk7Zm9yKHZhciB1PXIubGVuZ3RoLG89bj91Oi0xLGk9T2JqZWN0KHIpOyhuP28tLTorK288dSkmJmZhbHNlIT09ZShpW29dLG8saSk7KTtyZXR1cm4gcn19ZnVuY3Rpb24gZ3IodCl7cmV0dXJuIGZ1bmN0aW9uKG4scixlKXtcblx0XHR2YXIgdT0tMSxvPU9iamVjdChuKTtlPWUobik7Zm9yKHZhciBpPWUubGVuZ3RoO2ktLTspe3ZhciBmPWVbdD9pOisrdV07aWYoZmFsc2U9PT1yKG9bZl0sZixvKSlicmVha31yZXR1cm4gbn19ZnVuY3Rpb24gZHIodCxuLHIpe2Z1bmN0aW9uIGUoKXtyZXR1cm4odGhpcyYmdGhpcyE9PUt0JiZ0aGlzIGluc3RhbmNlb2YgZT9vOnQpLmFwcGx5KHU/cjp0aGlzLGFyZ3VtZW50cyl9dmFyIHU9MSZuLG89eHIodCk7cmV0dXJuIGV9ZnVuY3Rpb24geXIodCl7cmV0dXJuIGZ1bmN0aW9uKG4pe249ZXUobik7dmFyIHI9V3QudGVzdChuKT9uLm1hdGNoKEl0KTpULGU9cj9yWzBdOm4uY2hhckF0KDApO3JldHVybiBuPXI/dXIociwxKS5qb2luKFwiXCIpOm4uc2xpY2UoMSksZVt0XSgpK259fWZ1bmN0aW9uIGJyKHQpe3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gaChzdShsdShuKS5yZXBsYWNlKEV0LFwiXCIpKSx0LFwiXCIpfX1mdW5jdGlvbiB4cih0KXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgbj1hcmd1bWVudHM7XG5cdFx0c3dpdGNoKG4ubGVuZ3RoKXtjYXNlIDA6cmV0dXJuIG5ldyB0O2Nhc2UgMTpyZXR1cm4gbmV3IHQoblswXSk7Y2FzZSAyOnJldHVybiBuZXcgdChuWzBdLG5bMV0pO2Nhc2UgMzpyZXR1cm4gbmV3IHQoblswXSxuWzFdLG5bMl0pO2Nhc2UgNDpyZXR1cm4gbmV3IHQoblswXSxuWzFdLG5bMl0sblszXSk7Y2FzZSA1OnJldHVybiBuZXcgdChuWzBdLG5bMV0sblsyXSxuWzNdLG5bNF0pO2Nhc2UgNjpyZXR1cm4gbmV3IHQoblswXSxuWzFdLG5bMl0sblszXSxuWzRdLG5bNV0pO2Nhc2UgNzpyZXR1cm4gbmV3IHQoblswXSxuWzFdLG5bMl0sblszXSxuWzRdLG5bNV0sbls2XSl9dmFyIHI9dW4odC5wcm90b3R5cGUpLG49dC5hcHBseShyLG4pO3JldHVybiBaZShuKT9uOnJ9fWZ1bmN0aW9uIGpyKHQsbixlKXtmdW5jdGlvbiB1KCl7Zm9yKHZhciBpPWFyZ3VtZW50cy5sZW5ndGgsZj1BcnJheShpKSxjPWksYT1Ecih1KTtjLS07KWZbY109YXJndW1lbnRzW2NdO3JldHVybiBjPTM+aSYmZlswXSE9PWEmJmZbaS0xXSE9PWE/W106JChmLGEpLFxuXHRcdGktPWMubGVuZ3RoLGU+aT9Ccih0LG4sQXIsdS5wbGFjZWhvbGRlcixULGYsYyxULFQsZS1pKTpyKHRoaXMmJnRoaXMhPT1LdCYmdGhpcyBpbnN0YW5jZW9mIHU/bzp0LHRoaXMsZil9dmFyIG89eHIodCk7cmV0dXJuIHV9ZnVuY3Rpb24gd3IodCl7cmV0dXJuIGZ1bmN0aW9uKG4scixlKXt2YXIgdT1PYmplY3Qobik7aWYocj1GcihyLDMpLCFVZShuKSl2YXIgbz1pdShuKTtyZXR1cm4gZT10KG98fG4sZnVuY3Rpb24odCxuKXtyZXR1cm4gbyYmKG49dCx0PXVbbl0pLHIodCxuLHUpfSxlKSxlPi0xP25bbz9vW2VdOmVdOlR9fWZ1bmN0aW9uIG1yKHQpe3JldHVybiBNZShmdW5jdGlvbihuKXtuPXNuKG4sMSk7dmFyIHI9bi5sZW5ndGgsZT1yLHU9enQucHJvdG90eXBlLnRocnU7Zm9yKHQmJm4ucmV2ZXJzZSgpO2UtLTspe3ZhciBvPW5bZV07aWYodHlwZW9mIG8hPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgQXUoXCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIpO2lmKHUmJiFpJiZcIndyYXBwZXJcIj09JHIobykpdmFyIGk9bmV3IHp0KFtdLHRydWUpO1xuXHR9Zm9yKGU9aT9lOnI7KytlPHI7KXZhciBvPW5bZV0sdT0kcihvKSxmPVwid3JhcHBlclwiPT11P1JvKG8pOlQsaT1mJiZyZShmWzBdKSYmNDI0PT1mWzFdJiYhZls0XS5sZW5ndGgmJjE9PWZbOV0/aVskcihmWzBdKV0uYXBwbHkoaSxmWzNdKToxPT1vLmxlbmd0aCYmcmUobyk/aVt1XSgpOmkudGhydShvKTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMsZT10WzBdO2lmKGkmJjE9PXQubGVuZ3RoJiZ5aShlKSYmZS5sZW5ndGg+PTIwMClyZXR1cm4gaS5wbGFudChlKS52YWx1ZSgpO2Zvcih2YXIgdT0wLHQ9cj9uW3VdLmFwcGx5KHRoaXMsdCk6ZTsrK3U8cjspdD1uW3VdLmNhbGwodGhpcyx0KTtyZXR1cm4gdH19KX1mdW5jdGlvbiBBcih0LG4scixlLHUsbyxpLGYsYyxhKXtmdW5jdGlvbiBsKCl7Zm9yKHZhciBkPWFyZ3VtZW50cy5sZW5ndGgseT1BcnJheShkKSxiPWQ7Yi0tOyl5W2JdPWFyZ3VtZW50c1tiXTtpZihfKXt2YXIgeCxqPURyKGwpLGI9eS5sZW5ndGg7Zm9yKHg9MDtiLS07KXlbYl09PT1qJiZ4Kys7XG5cdH1pZihlJiYoeT1jcih5LGUsdSxfKSksbyYmKHk9YXIoeSxvLGksXykpLGQtPXgsXyYmYT5kKXJldHVybiBqPSQoeSxqKSxCcih0LG4sQXIsbC5wbGFjZWhvbGRlcixyLHksaixmLGMsYS1kKTtpZihqPWg/cjp0aGlzLGI9cD9qW3RdOnQsZD15Lmxlbmd0aCxmKXt4PXkubGVuZ3RoO2Zvcih2YXIgdz10byhmLmxlbmd0aCx4KSxtPWxyKHkpO3ctLTspe3ZhciBBPWZbd107eVt3XT1YcihBLHgpP21bQV06VH19ZWxzZSB2JiZkPjEmJnkucmV2ZXJzZSgpO3JldHVybiBzJiZkPmMmJih5Lmxlbmd0aD1jKSx0aGlzJiZ0aGlzIT09S3QmJnRoaXMgaW5zdGFuY2VvZiBsJiYoYj1nfHx4cihiKSksYi5hcHBseShqLHkpfXZhciBzPTEyOCZuLGg9MSZuLHA9MiZuLF89MjQmbix2PTUxMiZuLGc9cD9UOnhyKHQpO3JldHVybiBsfWZ1bmN0aW9uIE9yKHQsbil7cmV0dXJuIGZ1bmN0aW9uKHIsZSl7cmV0dXJuIGpuKHIsdCxuKGUpKX19ZnVuY3Rpb24ga3IodCl7cmV0dXJuIGZ1bmN0aW9uKG4scil7dmFyIGU7XG5cdFx0aWYobj09PVQmJnI9PT1UKXJldHVybiAwO2lmKG4hPT1UJiYoZT1uKSxyIT09VCl7aWYoZT09PVQpcmV0dXJuIHI7dHlwZW9mIG49PVwic3RyaW5nXCJ8fHR5cGVvZiByPT1cInN0cmluZ1wiPyhuPVluKG4pLHI9WW4ocikpOihuPUpuKG4pLHI9Sm4ocikpLGU9dChuLHIpfXJldHVybiBlfX1mdW5jdGlvbiBFcih0KXtyZXR1cm4gTWUoZnVuY3Rpb24obil7cmV0dXJuIG49MT09bi5sZW5ndGgmJnlpKG5bMF0pP2woblswXSxPKEZyKCkpKTpsKHNuKG4sMSxRciksTyhGcigpKSksTWUoZnVuY3Rpb24oZSl7dmFyIHU9dGhpcztyZXR1cm4gdChuLGZ1bmN0aW9uKHQpe3JldHVybiByKHQsdSxlKX0pfSl9KX1mdW5jdGlvbiBTcih0LG4pe249bj09PVQ/XCIgXCI6WW4obik7dmFyIHI9bi5sZW5ndGg7cmV0dXJuIDI+cj9yP1BuKG4sdCk6bjoocj1QbihuLEt1KHQvTihuKSkpLFd0LnRlc3Qobik/dXIoci5tYXRjaChJdCksMCx0KS5qb2luKFwiXCIpOnIuc2xpY2UoMCx0KSl9ZnVuY3Rpb24gSXIodCxuLGUsdSl7XG5cdFx0ZnVuY3Rpb24gbygpe2Zvcih2YXIgbj0tMSxjPWFyZ3VtZW50cy5sZW5ndGgsYT0tMSxsPXUubGVuZ3RoLHM9QXJyYXkobCtjKSxoPXRoaXMmJnRoaXMhPT1LdCYmdGhpcyBpbnN0YW5jZW9mIG8/Zjp0OysrYTxsOylzW2FdPXVbYV07Zm9yKDtjLS07KXNbYSsrXT1hcmd1bWVudHNbKytuXTtyZXR1cm4gcihoLGk/ZTp0aGlzLHMpfXZhciBpPTEmbixmPXhyKHQpO3JldHVybiBvfWZ1bmN0aW9uIFJyKHQpe3JldHVybiBmdW5jdGlvbihuLHIsZSl7ZSYmdHlwZW9mIGUhPVwibnVtYmVyXCImJnRlKG4scixlKSYmKHI9ZT1UKSxuPW51KG4pLG49bj09PW4/bjowLHI9PT1UPyhyPW4sbj0wKTpyPW51KHIpfHwwLGU9ZT09PVQ/cj5uPzE6LTE6bnUoZSl8fDA7dmFyIHU9LTE7cj1YdShLdSgoci1uKS8oZXx8MSkpLDApO2Zvcih2YXIgbz1BcnJheShyKTtyLS07KW9bdD9yOisrdV09bixuKz1lO3JldHVybiBvfX1mdW5jdGlvbiBXcih0KXtyZXR1cm4gZnVuY3Rpb24obixyKXtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJnR5cGVvZiByPT1cInN0cmluZ1wifHwobj1udShuKSxcblx0XHRyPW51KHIpKSx0KG4scil9fWZ1bmN0aW9uIEJyKHQsbixyLGUsdSxvLGksZixjLGEpe3ZhciBsPTgmbixzPWw/aTpUO2k9bD9UOmk7dmFyIGg9bD9vOlQ7cmV0dXJuIG89bD9UOm8sbj0obnwobD8zMjo2NCkpJn4obD82NDozMiksNCZufHwobiY9LTQpLG49W3Qsbix1LGgscyxvLGksZixjLGFdLHI9ci5hcHBseShULG4pLHJlKHQpJiZNbyhyLG4pLHIucGxhY2Vob2xkZXI9ZSxyfWZ1bmN0aW9uIExyKHQpe3ZhciBuPXd1W3RdO3JldHVybiBmdW5jdGlvbih0LHIpe2lmKHQ9bnUodCkscj10byhYZShyKSwyOTIpKXt2YXIgZT0oZXUodCkrXCJlXCIpLnNwbGl0KFwiZVwiKSxlPW4oZVswXStcImVcIisoK2VbMV0rcikpLGU9KGV1KGUpK1wiZVwiKS5zcGxpdChcImVcIik7cmV0dXJuKyhlWzBdK1wiZVwiKygrZVsxXS1yKSl9cmV0dXJuIG4odCl9fWZ1bmN0aW9uIE1yKHQpe3JldHVybiBmdW5jdGlvbihuKXt2YXIgcj1xcihuKTtyZXR1cm5cIltvYmplY3QgTWFwXVwiPT1yP1Uobik6XCJbb2JqZWN0IFNldF1cIj09cj9GKG4pOkEobix0KG4pKTtcblx0fX1mdW5jdGlvbiBDcih0LG4scixlLHUsbyxpLGYpe3ZhciBjPTImbjtpZighYyYmdHlwZW9mIHQhPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgQXUoXCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIpO3ZhciBhPWU/ZS5sZW5ndGg6MDtpZihhfHwobiY9LTk3LGU9dT1UKSxpPWk9PT1UP2k6WHUoWGUoaSksMCksZj1mPT09VD9mOlhlKGYpLGEtPXU/dS5sZW5ndGg6MCw2NCZuKXt2YXIgbD1lLHM9dTtlPXU9VH12YXIgaD1jP1Q6Um8odCk7cmV0dXJuIG89W3QsbixyLGUsdSxsLHMsbyxpLGZdLGgmJihyPW9bMV0sdD1oWzFdLG49cnx0LGU9MTI4PT10JiY4PT1yfHwxMjg9PXQmJjI1Nj09ciYmaFs4XT49b1s3XS5sZW5ndGh8fDM4ND09dCYmaFs4XT49aFs3XS5sZW5ndGgmJjg9PXIsMTMxPm58fGUpJiYoMSZ0JiYob1syXT1oWzJdLG58PTEmcj8wOjQpLChyPWhbM10pJiYoZT1vWzNdLG9bM109ZT9jcihlLHIsaFs0XSk6cixvWzRdPWU/JChvWzNdLFwiX19sb2Rhc2hfcGxhY2Vob2xkZXJfX1wiKTpoWzRdKSxcblx0KHI9aFs1XSkmJihlPW9bNV0sb1s1XT1lP2FyKGUscixoWzZdKTpyLG9bNl09ZT8kKG9bNV0sXCJfX2xvZGFzaF9wbGFjZWhvbGRlcl9fXCIpOmhbNl0pLChyPWhbN10pJiYob1s3XT1yKSwxMjgmdCYmKG9bOF09bnVsbD09b1s4XT9oWzhdOnRvKG9bOF0saFs4XSkpLG51bGw9PW9bOV0mJihvWzldPWhbOV0pLG9bMF09aFswXSxvWzFdPW4pLHQ9b1swXSxuPW9bMV0scj1vWzJdLGU9b1szXSx1PW9bNF0sZj1vWzldPW51bGw9PW9bOV0/Yz8wOnQubGVuZ3RoOlh1KG9bOV0tYSwwKSwhZiYmMjQmbiYmKG4mPS0yNSksKGg/U286TW8pKG4mJjEhPW4/OD09bnx8MTY9PW4/anIodCxuLGYpOjMyIT1uJiYzMyE9bnx8dS5sZW5ndGg/QXIuYXBwbHkoVCxvKTpJcih0LG4scixlKTpkcih0LG4sciksbyl9ZnVuY3Rpb24genIodCxuLHIsZSx1LG8pe3ZhciBpPTImdSxmPXQubGVuZ3RoLGM9bi5sZW5ndGg7aWYoZiE9YyYmIShpJiZjPmYpKXJldHVybiBmYWxzZTtpZihjPW8uZ2V0KHQpKXJldHVybiBjPT1uO1xuXHRcdHZhciBjPS0xLGE9dHJ1ZSxsPTEmdT9uZXcgWnQ6VDtmb3Ioby5zZXQodCxuKTsrK2M8Zjspe3ZhciBzPXRbY10saD1uW2NdO2lmKGUpdmFyIHA9aT9lKGgscyxjLG4sdCxvKTplKHMsaCxjLHQsbixvKTtpZihwIT09VCl7aWYocCljb250aW51ZTthPWZhbHNlO2JyZWFrfWlmKGwpe2lmKCFfKG4sZnVuY3Rpb24odCxuKXtyZXR1cm4gbC5oYXMobil8fHMhPT10JiYhcihzLHQsZSx1LG8pP3ZvaWQgMDpsLmFkZChuKX0pKXthPWZhbHNlO2JyZWFrfX1lbHNlIGlmKHMhPT1oJiYhcihzLGgsZSx1LG8pKXthPWZhbHNlO2JyZWFrfX1yZXR1cm4gb1tcImRlbGV0ZVwiXSh0KSxhfWZ1bmN0aW9uIFVyKHQsbixyLGUsdSxvLGkpe3N3aXRjaChyKXtjYXNlXCJbb2JqZWN0IERhdGFWaWV3XVwiOmlmKHQuYnl0ZUxlbmd0aCE9bi5ieXRlTGVuZ3RofHx0LmJ5dGVPZmZzZXQhPW4uYnl0ZU9mZnNldClicmVhazt0PXQuYnVmZmVyLG49bi5idWZmZXI7Y2FzZVwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIjppZih0LmJ5dGVMZW5ndGghPW4uYnl0ZUxlbmd0aHx8IWUobmV3IEZ1KHQpLG5ldyBGdShuKSkpYnJlYWs7XG5cdFx0cmV0dXJuIHRydWU7Y2FzZVwiW29iamVjdCBCb29sZWFuXVwiOmNhc2VcIltvYmplY3QgRGF0ZV1cIjpyZXR1cm4rdD09K247Y2FzZVwiW29iamVjdCBFcnJvcl1cIjpyZXR1cm4gdC5uYW1lPT1uLm5hbWUmJnQubWVzc2FnZT09bi5tZXNzYWdlO2Nhc2VcIltvYmplY3QgTnVtYmVyXVwiOnJldHVybiB0IT0rdD9uIT0rbjp0PT0rbjtjYXNlXCJbb2JqZWN0IFJlZ0V4cF1cIjpjYXNlXCJbb2JqZWN0IFN0cmluZ11cIjpyZXR1cm4gdD09bitcIlwiO2Nhc2VcIltvYmplY3QgTWFwXVwiOnZhciBmPVU7Y2FzZVwiW29iamVjdCBTZXRdXCI6aWYoZnx8KGY9RCksdC5zaXplIT1uLnNpemUmJiEoMiZvKSlicmVhaztyZXR1cm4ocj1pLmdldCh0KSk/cj09bjoob3w9MSxpLnNldCh0LG4pLHpyKGYodCksZihuKSxlLHUsbyxpKSk7Y2FzZVwiW29iamVjdCBTeW1ib2xdXCI6aWYod28pcmV0dXJuIHdvLmNhbGwodCk9PXdvLmNhbGwobil9cmV0dXJuIGZhbHNlfWZ1bmN0aW9uICRyKHQpe2Zvcih2YXIgbj10Lm5hbWUrXCJcIixyPV9vW25dLGU9V3UuY2FsbChfbyxuKT9yLmxlbmd0aDowO2UtLTspe1xuXHRcdHZhciB1PXJbZV0sbz11LmZ1bmM7aWYobnVsbD09b3x8bz09dClyZXR1cm4gdS5uYW1lfXJldHVybiBufWZ1bmN0aW9uIERyKHQpe3JldHVybihXdS5jYWxsKE90LFwicGxhY2Vob2xkZXJcIik/T3Q6dCkucGxhY2Vob2xkZXJ9ZnVuY3Rpb24gRnIoKXt2YXIgdD1PdC5pdGVyYXRlZXx8X3UsdD10PT09X3U/a246dDtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD90KGFyZ3VtZW50c1swXSxhcmd1bWVudHNbMV0pOnR9ZnVuY3Rpb24gTnIodCxuKXt2YXIgcj10Ll9fZGF0YV9fLGU9dHlwZW9mIG47cmV0dXJuKFwic3RyaW5nXCI9PWV8fFwibnVtYmVyXCI9PWV8fFwic3ltYm9sXCI9PWV8fFwiYm9vbGVhblwiPT1lP1wiX19wcm90b19fXCIhPT1uOm51bGw9PT1uKT9yW3R5cGVvZiBuPT1cInN0cmluZ1wiP1wic3RyaW5nXCI6XCJoYXNoXCJdOnIubWFwfWZ1bmN0aW9uIFByKHQpe2Zvcih2YXIgbj1pdSh0KSxyPW4ubGVuZ3RoO3ItLTspe3ZhciBlPW5bcl0sdT10W2VdO25bcl09W2UsdSx1PT09dSYmIVplKHUpXX1yZXR1cm4gbjtcblx0fWZ1bmN0aW9uIFpyKHQsbil7dmFyIHI9bnVsbD09dD9UOnRbbl07cmV0dXJuIE9uKHIpP3I6VH1mdW5jdGlvbiBUcih0KXtyZXR1cm4gUHUoT2JqZWN0KHQpKX1mdW5jdGlvbiBxcih0KXtyZXR1cm4gTXUuY2FsbCh0KX1mdW5jdGlvbiBWcih0LG4scil7bj1uZShuLHQpP1tuXTplcihuKTtmb3IodmFyIGUsdT0tMSxvPW4ubGVuZ3RoOysrdTxvOyl7dmFyIGk9ZmUoblt1XSk7aWYoIShlPW51bGwhPXQmJnIodCxpKSkpYnJlYWs7dD10W2ldfXJldHVybiBlP2U6KG89dD90Lmxlbmd0aDowLCEhbyYmUGUobykmJlhyKGksbykmJih5aSh0KXx8R2UodCl8fHplKHQpKSl9ZnVuY3Rpb24gS3IodCl7dmFyIG49dC5sZW5ndGgscj10LmNvbnN0cnVjdG9yKG4pO3JldHVybiBuJiZcInN0cmluZ1wiPT10eXBlb2YgdFswXSYmV3UuY2FsbCh0LFwiaW5kZXhcIikmJihyLmluZGV4PXQuaW5kZXgsci5pbnB1dD10LmlucHV0KSxyfWZ1bmN0aW9uIEdyKHQpe3JldHVybiB0eXBlb2YgdC5jb25zdHJ1Y3RvciE9XCJmdW5jdGlvblwifHxlZSh0KT97fTp1bihKdShPYmplY3QodCkpKTtcblx0fWZ1bmN0aW9uIEpyKHIsZSx1LG8pe3ZhciBpPXIuY29uc3RydWN0b3I7c3dpdGNoKGUpe2Nhc2VcIltvYmplY3QgQXJyYXlCdWZmZXJdXCI6cmV0dXJuIGlyKHIpO2Nhc2VcIltvYmplY3QgQm9vbGVhbl1cIjpjYXNlXCJbb2JqZWN0IERhdGVdXCI6cmV0dXJuIG5ldyBpKCtyKTtjYXNlXCJbb2JqZWN0IERhdGFWaWV3XVwiOnJldHVybiBlPW8/aXIoci5idWZmZXIpOnIuYnVmZmVyLG5ldyByLmNvbnN0cnVjdG9yKGUsci5ieXRlT2Zmc2V0LHIuYnl0ZUxlbmd0aCk7Y2FzZVwiW29iamVjdCBGbG9hdDMyQXJyYXldXCI6Y2FzZVwiW29iamVjdCBGbG9hdDY0QXJyYXldXCI6Y2FzZVwiW29iamVjdCBJbnQ4QXJyYXldXCI6Y2FzZVwiW29iamVjdCBJbnQxNkFycmF5XVwiOmNhc2VcIltvYmplY3QgSW50MzJBcnJheV1cIjpjYXNlXCJbb2JqZWN0IFVpbnQ4QXJyYXldXCI6Y2FzZVwiW29iamVjdCBVaW50OENsYW1wZWRBcnJheV1cIjpjYXNlXCJbb2JqZWN0IFVpbnQxNkFycmF5XVwiOmNhc2VcIltvYmplY3QgVWludDMyQXJyYXldXCI6XG5cdFx0cmV0dXJuIGU9bz9pcihyLmJ1ZmZlcik6ci5idWZmZXIsbmV3IHIuY29uc3RydWN0b3IoZSxyLmJ5dGVPZmZzZXQsci5sZW5ndGgpO2Nhc2VcIltvYmplY3QgTWFwXVwiOnJldHVybiBlPW8/dShVKHIpLHRydWUpOlUociksaChlLHQsbmV3IHIuY29uc3RydWN0b3IpO2Nhc2VcIltvYmplY3QgTnVtYmVyXVwiOmNhc2VcIltvYmplY3QgU3RyaW5nXVwiOnJldHVybiBuZXcgaShyKTtjYXNlXCJbb2JqZWN0IFJlZ0V4cF1cIjpyZXR1cm4gZT1uZXcgci5jb25zdHJ1Y3RvcihyLnNvdXJjZSxfdC5leGVjKHIpKSxlLmxhc3RJbmRleD1yLmxhc3RJbmRleCxlO2Nhc2VcIltvYmplY3QgU2V0XVwiOnJldHVybiBlPW8/dShEKHIpLHRydWUpOkQociksaChlLG4sbmV3IHIuY29uc3RydWN0b3IpO2Nhc2VcIltvYmplY3QgU3ltYm9sXVwiOnJldHVybiB3bz9PYmplY3Qod28uY2FsbChyKSk6e319fWZ1bmN0aW9uIFlyKHQpe3ZhciBuPXQ/dC5sZW5ndGg6VDtyZXR1cm4gUGUobikmJih5aSh0KXx8R2UodCl8fHplKHQpKT9tKG4sU3RyaW5nKTpudWxsO1xuXHR9ZnVuY3Rpb24gSHIodCl7cmV0dXJuIHlpKHQpfHx6ZSh0KX1mdW5jdGlvbiBRcih0KXtyZXR1cm4geWkodCkmJiEoMj09dC5sZW5ndGgmJiFGZSh0WzBdKSl9ZnVuY3Rpb24gWHIodCxuKXtyZXR1cm4gbj1udWxsPT1uPzkwMDcxOTkyNTQ3NDA5OTE6biwhIW4mJih0eXBlb2YgdD09XCJudW1iZXJcInx8eHQudGVzdCh0KSkmJnQ+LTEmJjA9PXQlMSYmbj50fWZ1bmN0aW9uIHRlKHQsbixyKXtpZighWmUocikpcmV0dXJuIGZhbHNlO3ZhciBlPXR5cGVvZiBuO3JldHVybihcIm51bWJlclwiPT1lP1VlKHIpJiZYcihuLHIubGVuZ3RoKTpcInN0cmluZ1wiPT1lJiZuIGluIHIpP0NlKHJbbl0sdCk6ZmFsc2V9ZnVuY3Rpb24gbmUodCxuKXtpZih5aSh0KSlyZXR1cm4gZmFsc2U7dmFyIHI9dHlwZW9mIHQ7cmV0dXJuXCJudW1iZXJcIj09cnx8XCJzeW1ib2xcIj09cnx8XCJib29sZWFuXCI9PXJ8fG51bGw9PXR8fEplKHQpP3RydWU6dXQudGVzdCh0KXx8IWV0LnRlc3QodCl8fG51bGwhPW4mJnQgaW4gT2JqZWN0KG4pfWZ1bmN0aW9uIHJlKHQpe1xuXHRcdHZhciBuPSRyKHQpLHI9T3Rbbl07cmV0dXJuIHR5cGVvZiByPT1cImZ1bmN0aW9uXCImJm4gaW4gVXQucHJvdG90eXBlP3Q9PT1yP3RydWU6KG49Um8ociksISFuJiZ0PT09blswXSk6ZmFsc2V9ZnVuY3Rpb24gZWUodCl7dmFyIG49dCYmdC5jb25zdHJ1Y3RvcjtyZXR1cm4gdD09PSh0eXBlb2Ygbj09XCJmdW5jdGlvblwiJiZuLnByb3RvdHlwZXx8a3UpfWZ1bmN0aW9uIHVlKHQsbil7cmV0dXJuIGZ1bmN0aW9uKHIpe3JldHVybiBudWxsPT1yP2ZhbHNlOnJbdF09PT1uJiYobiE9PVR8fHQgaW4gT2JqZWN0KHIpKX19ZnVuY3Rpb24gb2UodCxuLHIsZSx1LG8pe3JldHVybiBaZSh0KSYmWmUobikmJkJuKHQsbixULG9lLG8uc2V0KG4sdCkpLHR9ZnVuY3Rpb24gaWUodCxuKXtyZXR1cm4gMT09bi5sZW5ndGg/dDp2bih0LFRuKG4sMCwtMSkpfWZ1bmN0aW9uIGZlKHQpe2lmKHR5cGVvZiB0PT1cInN0cmluZ1wifHxKZSh0KSlyZXR1cm4gdDt2YXIgbj10K1wiXCI7cmV0dXJuXCIwXCI9PW4mJjEvdD09LXE/XCItMFwiOm59ZnVuY3Rpb24gY2UodCl7XG5cdFx0aWYobnVsbCE9dCl7dHJ5e3JldHVybiBSdS5jYWxsKHQpfWNhdGNoKG4pe31yZXR1cm4gdCtcIlwifXJldHVyblwiXCJ9ZnVuY3Rpb24gYWUodCl7aWYodCBpbnN0YW5jZW9mIFV0KXJldHVybiB0LmNsb25lKCk7dmFyIG49bmV3IHp0KHQuX193cmFwcGVkX18sdC5fX2NoYWluX18pO3JldHVybiBuLl9fYWN0aW9uc19fPWxyKHQuX19hY3Rpb25zX18pLG4uX19pbmRleF9fPXQuX19pbmRleF9fLG4uX192YWx1ZXNfXz10Ll9fdmFsdWVzX18sbn1mdW5jdGlvbiBsZSh0LG4scil7dmFyIGU9dD90Lmxlbmd0aDowO3JldHVybiBlPyhuPXJ8fG49PT1UPzE6WGUobiksVG4odCwwPm4/MDpuLGUpKTpbXX1mdW5jdGlvbiBzZSh0LG4scil7dmFyIGU9dD90Lmxlbmd0aDowO3JldHVybiBlPyhuPXJ8fG49PT1UPzE6WGUobiksbj1lLW4sVG4odCwwLDA+bj8wOm4pKTpbXX1mdW5jdGlvbiBoZSh0LG4scil7dmFyIGU9dD90Lmxlbmd0aDowO3JldHVybiBlPyhyPW51bGw9PXI/MDpYZShyKSwwPnImJihyPVh1KGUrciwwKSksXG5cdFx0Zyh0LEZyKG4sMykscikpOi0xfWZ1bmN0aW9uIHBlKHQsbixyKXt2YXIgZT10P3QubGVuZ3RoOjA7aWYoIWUpcmV0dXJuLTE7dmFyIHU9ZS0xO3JldHVybiByIT09VCYmKHU9WGUociksdT0wPnI/WHUoZSt1LDApOnRvKHUsZS0xKSksZyh0LEZyKG4sMyksdSx0cnVlKX1mdW5jdGlvbiBfZSh0KXtyZXR1cm4gdCYmdC5sZW5ndGg/dFswXTpUfWZ1bmN0aW9uIHZlKHQpe3ZhciBuPXQ/dC5sZW5ndGg6MDtyZXR1cm4gbj90W24tMV06VH1mdW5jdGlvbiBnZSh0LG4pe3JldHVybiB0JiZ0Lmxlbmd0aCYmbiYmbi5sZW5ndGg/RG4odCxuKTp0fWZ1bmN0aW9uIGRlKHQpe3JldHVybiB0P3VvLmNhbGwodCk6dH1mdW5jdGlvbiB5ZSh0KXtpZighdHx8IXQubGVuZ3RoKXJldHVybltdO3ZhciBuPTA7cmV0dXJuIHQ9Zih0LGZ1bmN0aW9uKHQpe3JldHVybiAkZSh0KT8obj1YdSh0Lmxlbmd0aCxuKSx0cnVlKTp2b2lkIDB9KSxtKG4sZnVuY3Rpb24obil7cmV0dXJuIGwodCxVbihuKSl9KX1mdW5jdGlvbiBiZSh0LG4pe1xuXHRcdGlmKCF0fHwhdC5sZW5ndGgpcmV0dXJuW107dmFyIGU9eWUodCk7cmV0dXJuIG51bGw9PW4/ZTpsKGUsZnVuY3Rpb24odCl7cmV0dXJuIHIobixULHQpfSl9ZnVuY3Rpb24geGUodCl7cmV0dXJuIHQ9T3QodCksdC5fX2NoYWluX189dHJ1ZSx0fWZ1bmN0aW9uIGplKHQsbil7cmV0dXJuIG4odCl9ZnVuY3Rpb24gd2UoKXtyZXR1cm4gdGhpc31mdW5jdGlvbiBtZSh0LG4pe3JldHVybih5aSh0KT91OkFvKSh0LEZyKG4sMykpfWZ1bmN0aW9uIEFlKHQsbil7cmV0dXJuKHlpKHQpP286T28pKHQsRnIobiwzKSl9ZnVuY3Rpb24gT2UodCxuKXtyZXR1cm4oeWkodCk/bDpJbikodCxGcihuLDMpKX1mdW5jdGlvbiBrZSh0LG4scil7dmFyIGU9LTEsdT1IZSh0KSxvPXUubGVuZ3RoLGk9by0xO2ZvcihuPShyP3RlKHQsbixyKTpuPT09VCk/MTpubihYZShuKSwwLG8pOysrZTxuOyl0PU5uKGUsaSkscj11W3RdLHVbdF09dVtlXSx1W2VdPXI7cmV0dXJuIHUubGVuZ3RoPW4sdX1mdW5jdGlvbiBFZSgpe1xuXHRcdHJldHVybiB4dS5ub3coKX1mdW5jdGlvbiBTZSh0LG4scil7cmV0dXJuIG49cj9UOm4sbj10JiZudWxsPT1uP3QubGVuZ3RoOm4sQ3IodCwxMjgsVCxULFQsVCxuKX1mdW5jdGlvbiBJZSh0LG4pe3ZhciByO2lmKHR5cGVvZiBuIT1cImZ1bmN0aW9uXCIpdGhyb3cgbmV3IEF1KFwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiKTtyZXR1cm4gdD1YZSh0KSxmdW5jdGlvbigpe3JldHVybiAwPC0tdCYmKHI9bi5hcHBseSh0aGlzLGFyZ3VtZW50cykpLDE+PXQmJihuPVQpLHJ9fWZ1bmN0aW9uIFJlKHQsbixyKXtyZXR1cm4gbj1yP1Q6bix0PUNyKHQsOCxULFQsVCxULFQsbiksdC5wbGFjZWhvbGRlcj1SZS5wbGFjZWhvbGRlcix0fWZ1bmN0aW9uIFdlKHQsbixyKXtyZXR1cm4gbj1yP1Q6bix0PUNyKHQsMTYsVCxULFQsVCxULG4pLHQucGxhY2Vob2xkZXI9V2UucGxhY2Vob2xkZXIsdH1mdW5jdGlvbiBCZSh0LG4scil7ZnVuY3Rpb24gZShuKXt2YXIgcj1jLGU9YTtyZXR1cm4gYz1hPVQsXz1uLHM9dC5hcHBseShlLHIpO1xuXHR9ZnVuY3Rpb24gdSh0KXt2YXIgcj10LXA7cmV0dXJuIHQtPV8scD09PVR8fHI+PW58fDA+cnx8ZyYmdD49bH1mdW5jdGlvbiBvKCl7dmFyIHQ9RWUoKTtpZih1KHQpKXJldHVybiBpKHQpO3ZhciByO3I9dC1fLHQ9bi0odC1wKSxyPWc/dG8odCxsLXIpOnQsaD1BdChvLHIpfWZ1bmN0aW9uIGkodCl7cmV0dXJuIGg9VCxkJiZjP2UodCk6KGM9YT1ULHMpfWZ1bmN0aW9uIGYoKXt2YXIgdD1FZSgpLHI9dSh0KTtpZihjPWFyZ3VtZW50cyxhPXRoaXMscD10LHIpe2lmKGg9PT1UKXJldHVybiBfPXQ9cCxoPUF0KG8sbiksdj9lKHQpOnM7aWYoZylyZXR1cm4gaD1BdChvLG4pLGUocCl9cmV0dXJuIGg9PT1UJiYoaD1BdChvLG4pKSxzfXZhciBjLGEsbCxzLGgscCxfPTAsdj1mYWxzZSxnPWZhbHNlLGQ9dHJ1ZTtpZih0eXBlb2YgdCE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBBdShcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7cmV0dXJuIG49bnUobil8fDAsWmUocikmJih2PSEhci5sZWFkaW5nLGw9KGc9XCJtYXhXYWl0XCJpbiByKT9YdShudShyLm1heFdhaXQpfHwwLG4pOmwsXG5cdFx0ZD1cInRyYWlsaW5nXCJpbiByPyEhci50cmFpbGluZzpkKSxmLmNhbmNlbD1mdW5jdGlvbigpe189MCxjPXA9YT1oPVR9LGYuZmx1c2g9ZnVuY3Rpb24oKXtyZXR1cm4gaD09PVQ/czppKEVlKCkpfSxmfWZ1bmN0aW9uIExlKHQsbil7ZnVuY3Rpb24gcigpe3ZhciBlPWFyZ3VtZW50cyx1PW4/bi5hcHBseSh0aGlzLGUpOmVbMF0sbz1yLmNhY2hlO3JldHVybiBvLmhhcyh1KT9vLmdldCh1KTooZT10LmFwcGx5KHRoaXMsZSksci5jYWNoZT1vLnNldCh1LGUpLGUpfWlmKHR5cGVvZiB0IT1cImZ1bmN0aW9uXCJ8fG4mJnR5cGVvZiBuIT1cImZ1bmN0aW9uXCIpdGhyb3cgbmV3IEF1KFwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiKTtyZXR1cm4gci5jYWNoZT1uZXcoTGUuQ2FjaGV8fFB0KSxyfWZ1bmN0aW9uIE1lKHQsbil7aWYodHlwZW9mIHQhPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgQXUoXCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIpO3JldHVybiBuPVh1KG49PT1UP3QubGVuZ3RoLTE6WGUobiksMCksZnVuY3Rpb24oKXtcblx0XHRmb3IodmFyIGU9YXJndW1lbnRzLHU9LTEsbz1YdShlLmxlbmd0aC1uLDApLGk9QXJyYXkobyk7Kyt1PG87KWlbdV09ZVtuK3VdO3N3aXRjaChuKXtjYXNlIDA6cmV0dXJuIHQuY2FsbCh0aGlzLGkpO2Nhc2UgMTpyZXR1cm4gdC5jYWxsKHRoaXMsZVswXSxpKTtjYXNlIDI6cmV0dXJuIHQuY2FsbCh0aGlzLGVbMF0sZVsxXSxpKX1mb3Iobz1BcnJheShuKzEpLHU9LTE7Kyt1PG47KW9bdV09ZVt1XTtyZXR1cm4gb1tuXT1pLHIodCx0aGlzLG8pfX1mdW5jdGlvbiBDZSh0LG4pe3JldHVybiB0PT09bnx8dCE9PXQmJm4hPT1ufWZ1bmN0aW9uIHplKHQpe3JldHVybiAkZSh0KSYmV3UuY2FsbCh0LFwiY2FsbGVlXCIpJiYoIXF1LmNhbGwodCxcImNhbGxlZVwiKXx8XCJbb2JqZWN0IEFyZ3VtZW50c11cIj09TXUuY2FsbCh0KSl9ZnVuY3Rpb24gVWUodCl7cmV0dXJuIG51bGwhPXQmJlBlKFdvKHQpKSYmIUZlKHQpfWZ1bmN0aW9uICRlKHQpe3JldHVybiBUZSh0KSYmVWUodCl9ZnVuY3Rpb24gRGUodCl7XG5cdFx0cmV0dXJuIFRlKHQpP1wiW29iamVjdCBFcnJvcl1cIj09TXUuY2FsbCh0KXx8dHlwZW9mIHQubWVzc2FnZT09XCJzdHJpbmdcIiYmdHlwZW9mIHQubmFtZT09XCJzdHJpbmdcIjpmYWxzZX1mdW5jdGlvbiBGZSh0KXtyZXR1cm4gdD1aZSh0KT9NdS5jYWxsKHQpOlwiXCIsXCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT10fHxcIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCI9PXR9ZnVuY3Rpb24gTmUodCl7cmV0dXJuIHR5cGVvZiB0PT1cIm51bWJlclwiJiZ0PT1YZSh0KX1mdW5jdGlvbiBQZSh0KXtyZXR1cm4gdHlwZW9mIHQ9PVwibnVtYmVyXCImJnQ+LTEmJjA9PXQlMSYmOTAwNzE5OTI1NDc0MDk5MT49dH1mdW5jdGlvbiBaZSh0KXt2YXIgbj10eXBlb2YgdDtyZXR1cm4hIXQmJihcIm9iamVjdFwiPT1ufHxcImZ1bmN0aW9uXCI9PW4pfWZ1bmN0aW9uIFRlKHQpe3JldHVybiEhdCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ9ZnVuY3Rpb24gcWUodCl7cmV0dXJuIHR5cGVvZiB0PT1cIm51bWJlclwifHxUZSh0KSYmXCJbb2JqZWN0IE51bWJlcl1cIj09TXUuY2FsbCh0KTtcblx0fWZ1bmN0aW9uIFZlKHQpe3JldHVybiFUZSh0KXx8XCJbb2JqZWN0IE9iamVjdF1cIiE9TXUuY2FsbCh0KXx8Qyh0KT9mYWxzZToodD1KdShPYmplY3QodCkpLG51bGw9PT10P3RydWU6KHQ9V3UuY2FsbCh0LFwiY29uc3RydWN0b3JcIikmJnQuY29uc3RydWN0b3IsdHlwZW9mIHQ9PVwiZnVuY3Rpb25cIiYmdCBpbnN0YW5jZW9mIHQmJlJ1LmNhbGwodCk9PUx1KSl9ZnVuY3Rpb24gS2UodCl7cmV0dXJuIFplKHQpJiZcIltvYmplY3QgUmVnRXhwXVwiPT1NdS5jYWxsKHQpfWZ1bmN0aW9uIEdlKHQpe3JldHVybiB0eXBlb2YgdD09XCJzdHJpbmdcInx8IXlpKHQpJiZUZSh0KSYmXCJbb2JqZWN0IFN0cmluZ11cIj09TXUuY2FsbCh0KX1mdW5jdGlvbiBKZSh0KXtyZXR1cm4gdHlwZW9mIHQ9PVwic3ltYm9sXCJ8fFRlKHQpJiZcIltvYmplY3QgU3ltYm9sXVwiPT1NdS5jYWxsKHQpfWZ1bmN0aW9uIFllKHQpe3JldHVybiBUZSh0KSYmUGUodC5sZW5ndGgpJiYhIU10W011LmNhbGwodCldfWZ1bmN0aW9uIEhlKHQpe2lmKCF0KXJldHVybltdO1xuXHRcdGlmKFVlKHQpKXJldHVybiBHZSh0KT90Lm1hdGNoKEl0KTpscih0KTtpZihadSYmdFtadV0pcmV0dXJuIHoodFtadV0oKSk7dmFyIG49cXIodCk7cmV0dXJuKFwiW29iamVjdCBNYXBdXCI9PW4/VTpcIltvYmplY3QgU2V0XVwiPT1uP0Q6Y3UpKHQpfWZ1bmN0aW9uIFFlKHQpe3JldHVybiB0Pyh0PW51KHQpLHQ9PT1xfHx0PT09LXE/MS43OTc2OTMxMzQ4NjIzMTU3ZTMwOCooMD50Py0xOjEpOnQ9PT10P3Q6MCk6MD09PXQ/dDowfWZ1bmN0aW9uIFhlKHQpe3Q9UWUodCk7dmFyIG49dCUxO3JldHVybiB0PT09dD9uP3Qtbjp0OjB9ZnVuY3Rpb24gdHUodCl7cmV0dXJuIHQ/bm4oWGUodCksMCw0Mjk0OTY3Mjk1KTowfWZ1bmN0aW9uIG51KHQpe2lmKHR5cGVvZiB0PT1cIm51bWJlclwiKXJldHVybiB0O2lmKEplKHQpKXJldHVybiBWO2lmKFplKHQpJiYodD1GZSh0LnZhbHVlT2YpP3QudmFsdWVPZigpOnQsdD1aZSh0KT90K1wiXCI6dCksdHlwZW9mIHQhPVwic3RyaW5nXCIpcmV0dXJuIDA9PT10P3Q6K3Q7XG5cdFx0dD10LnJlcGxhY2UoY3QsXCJcIik7dmFyIG49ZHQudGVzdCh0KTtyZXR1cm4gbnx8YnQudGVzdCh0KT9OdCh0LnNsaWNlKDIpLG4/Mjo4KTpndC50ZXN0KHQpP1Y6K3R9ZnVuY3Rpb24gcnUodCl7cmV0dXJuIHNyKHQsZnUodCkpfWZ1bmN0aW9uIGV1KHQpe3JldHVybiBudWxsPT10P1wiXCI6WW4odCl9ZnVuY3Rpb24gdXUodCxuLHIpe3JldHVybiB0PW51bGw9PXQ/VDp2bih0LG4pLHQ9PT1UP3I6dH1mdW5jdGlvbiBvdSh0LG4pe3JldHVybiBudWxsIT10JiZWcih0LG4sYm4pfWZ1bmN0aW9uIGl1KHQpe3ZhciBuPWVlKHQpO2lmKCFuJiYhVWUodCkpcmV0dXJuIFF1KE9iamVjdCh0KSk7dmFyIHIsZT1Zcih0KSx1PSEhZSxlPWV8fFtdLG89ZS5sZW5ndGg7Zm9yKHIgaW4gdCkheW4odCxyKXx8dSYmKFwibGVuZ3RoXCI9PXJ8fFhyKHIsbykpfHxuJiZcImNvbnN0cnVjdG9yXCI9PXJ8fGUucHVzaChyKTtyZXR1cm4gZX1mdW5jdGlvbiBmdSh0KXtmb3IodmFyIG49LTEscj1lZSh0KSxlPUVuKHQpLHU9ZS5sZW5ndGgsbz1Zcih0KSxpPSEhbyxvPW98fFtdLGY9by5sZW5ndGg7KytuPHU7KXtcblx0XHR2YXIgYz1lW25dO2kmJihcImxlbmd0aFwiPT1jfHxYcihjLGYpKXx8XCJjb25zdHJ1Y3RvclwiPT1jJiYocnx8IVd1LmNhbGwodCxjKSl8fG8ucHVzaChjKX1yZXR1cm4gb31mdW5jdGlvbiBjdSh0KXtyZXR1cm4gdD9rKHQsaXUodCkpOltdfWZ1bmN0aW9uIGF1KHQpe3JldHVybiBxaShldSh0KS50b0xvd2VyQ2FzZSgpKX1mdW5jdGlvbiBsdSh0KXtyZXR1cm4odD1ldSh0KSkmJnQucmVwbGFjZShqdCxXKS5yZXBsYWNlKFN0LFwiXCIpfWZ1bmN0aW9uIHN1KHQsbixyKXtyZXR1cm4gdD1ldSh0KSxuPXI/VDpuLG49PT1UJiYobj1CdC50ZXN0KHQpP1J0OnN0KSx0Lm1hdGNoKG4pfHxbXX1mdW5jdGlvbiBodSh0KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdH19ZnVuY3Rpb24gcHUodCl7cmV0dXJuIHR9ZnVuY3Rpb24gX3UodCl7cmV0dXJuIGtuKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCI/dDpybih0LHRydWUpKX1mdW5jdGlvbiB2dSh0LG4scil7dmFyIGU9aXUobiksbz1fbihuLGUpO251bGwhPXJ8fFplKG4pJiYoby5sZW5ndGh8fCFlLmxlbmd0aCl8fChyPW4sXG5cdFx0bj10LHQ9dGhpcyxvPV9uKG4saXUobikpKTt2YXIgaT0hKFplKHIpJiZcImNoYWluXCJpbiByJiYhci5jaGFpbiksZj1GZSh0KTtyZXR1cm4gdShvLGZ1bmN0aW9uKHIpe3ZhciBlPW5bcl07dFtyXT1lLGYmJih0LnByb3RvdHlwZVtyXT1mdW5jdGlvbigpe3ZhciBuPXRoaXMuX19jaGFpbl9fO2lmKGl8fG4pe3ZhciByPXQodGhpcy5fX3dyYXBwZWRfXyk7cmV0dXJuKHIuX19hY3Rpb25zX189bHIodGhpcy5fX2FjdGlvbnNfXykpLnB1c2goe2Z1bmM6ZSxhcmdzOmFyZ3VtZW50cyx0aGlzQXJnOnR9KSxyLl9fY2hhaW5fXz1uLHJ9cmV0dXJuIGUuYXBwbHkodCxzKFt0aGlzLnZhbHVlKCldLGFyZ3VtZW50cykpfSl9KSx0fWZ1bmN0aW9uIGd1KCl7fWZ1bmN0aW9uIGR1KHQpe3JldHVybiBuZSh0KT9VbihmZSh0KSk6JG4odCl9ZnVuY3Rpb24geXUoKXtyZXR1cm5bXX1mdW5jdGlvbiBidSgpe3JldHVybiBmYWxzZX1SPVI/R3QuZGVmYXVsdHMoe30sUixHdC5waWNrKEt0LEx0KSk6S3Q7dmFyIHh1PVIuRGF0ZSxqdT1SLkVycm9yLHd1PVIuTWF0aCxtdT1SLlJlZ0V4cCxBdT1SLlR5cGVFcnJvcixPdT1SLkFycmF5LnByb3RvdHlwZSxrdT1SLk9iamVjdC5wcm90b3R5cGUsRXU9Ui5TdHJpbmcucHJvdG90eXBlLFN1PVJbXCJfX2NvcmUtanNfc2hhcmVkX19cIl0sSXU9ZnVuY3Rpb24oKXtcblx0XHR2YXIgdD0vW14uXSskLy5leGVjKFN1JiZTdS5rZXlzJiZTdS5rZXlzLklFX1BST1RPfHxcIlwiKTtyZXR1cm4gdD9cIlN5bWJvbChzcmMpXzEuXCIrdDpcIlwifSgpLFJ1PVIuRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nLFd1PWt1Lmhhc093blByb3BlcnR5LEJ1PTAsTHU9UnUuY2FsbChPYmplY3QpLE11PWt1LnRvU3RyaW5nLEN1PUt0Ll8senU9bXUoXCJeXCIrUnUuY2FsbChXdSkucmVwbGFjZShpdCxcIlxcXFwkJlwiKS5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLFwiJDEuKj9cIikrXCIkXCIpLFV1PVR0P1IuQnVmZmVyOlQsJHU9Ui5SZWZsZWN0LER1PVIuU3ltYm9sLEZ1PVIuVWludDhBcnJheSxOdT0kdT8kdS5mOlQsUHU9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxadT10eXBlb2YoWnU9RHUmJkR1Lml0ZXJhdG9yKT09XCJzeW1ib2xcIj9adTpULFR1PU9iamVjdC5jcmVhdGUscXU9a3UucHJvcGVydHlJc0VudW1lcmFibGUsVnU9T3Uuc3BsaWNlLEt1PXd1LmNlaWwsR3U9d3UuZmxvb3IsSnU9T2JqZWN0LmdldFByb3RvdHlwZU9mLFl1PVIuaXNGaW5pdGUsSHU9T3Uuam9pbixRdT1PYmplY3Qua2V5cyxYdT13dS5tYXgsdG89d3UubWluLG5vPVIucGFyc2VJbnQscm89d3UucmFuZG9tLGVvPUV1LnJlcGxhY2UsdW89T3UucmV2ZXJzZSxvbz1FdS5zcGxpdCxpbz1acihSLFwiRGF0YVZpZXdcIiksZm89WnIoUixcIk1hcFwiKSxjbz1acihSLFwiUHJvbWlzZVwiKSxhbz1acihSLFwiU2V0XCIpLGxvPVpyKFIsXCJXZWFrTWFwXCIpLHNvPVpyKE9iamVjdCxcImNyZWF0ZVwiKSxobz1sbyYmbmV3IGxvLHBvPSFxdS5jYWxsKHtcblx0XHR2YWx1ZU9mOjF9LFwidmFsdWVPZlwiKSxfbz17fSx2bz1jZShpbyksZ289Y2UoZm8pLHlvPWNlKGNvKSxibz1jZShhbykseG89Y2UobG8pLGpvPUR1P0R1LnByb3RvdHlwZTpULHdvPWpvP2pvLnZhbHVlT2Y6VCxtbz1qbz9qby50b1N0cmluZzpUO090LnRlbXBsYXRlU2V0dGluZ3M9e2VzY2FwZTp0dCxldmFsdWF0ZTpudCxpbnRlcnBvbGF0ZTpydCx2YXJpYWJsZTpcIlwiLGltcG9ydHM6e186T3R9fSxPdC5wcm90b3R5cGU9a3QucHJvdG90eXBlLE90LnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1PdCx6dC5wcm90b3R5cGU9dW4oa3QucHJvdG90eXBlKSx6dC5wcm90b3R5cGUuY29uc3RydWN0b3I9enQsVXQucHJvdG90eXBlPXVuKGt0LnByb3RvdHlwZSksVXQucHJvdG90eXBlLmNvbnN0cnVjdG9yPVV0LCR0LnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX19kYXRhX189c28/c28obnVsbCk6e319LCR0LnByb3RvdHlwZVtcImRlbGV0ZVwiXT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5oYXModCkmJmRlbGV0ZSB0aGlzLl9fZGF0YV9fW3RdO1xuXHR9LCR0LnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24odCl7dmFyIG49dGhpcy5fX2RhdGFfXztyZXR1cm4gc28/KHQ9blt0XSxcIl9fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX19cIj09PXQ/VDp0KTpXdS5jYWxsKG4sdCk/blt0XTpUfSwkdC5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHQpe3ZhciBuPXRoaXMuX19kYXRhX187cmV0dXJuIHNvP25bdF0hPT1UOld1LmNhbGwobix0KX0sJHQucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LG4pe3JldHVybiB0aGlzLl9fZGF0YV9fW3RdPXNvJiZuPT09VD9cIl9fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX19cIjpuLHRoaXN9LER0LnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX19kYXRhX189W119LER0LnByb3RvdHlwZVtcImRlbGV0ZVwiXT1mdW5jdGlvbih0KXt2YXIgbj10aGlzLl9fZGF0YV9fO3JldHVybiB0PUh0KG4sdCksMD50P2ZhbHNlOih0PT1uLmxlbmd0aC0xP24ucG9wKCk6VnUuY2FsbChuLHQsMSksdHJ1ZSl9LER0LnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24odCl7XG5cdFx0dmFyIG49dGhpcy5fX2RhdGFfXztyZXR1cm4gdD1IdChuLHQpLDA+dD9UOm5bdF1bMV19LER0LnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuLTE8SHQodGhpcy5fX2RhdGFfXyx0KX0sRHQucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LG4pe3ZhciByPXRoaXMuX19kYXRhX18sZT1IdChyLHQpO3JldHVybiAwPmU/ci5wdXNoKFt0LG5dKTpyW2VdWzFdPW4sdGhpc30sUHQucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fX2RhdGFfXz17aGFzaDpuZXcgJHQsbWFwOm5ldyhmb3x8RHQpLHN0cmluZzpuZXcgJHR9fSxQdC5wcm90b3R5cGVbXCJkZWxldGVcIl09ZnVuY3Rpb24odCl7cmV0dXJuIE5yKHRoaXMsdClbXCJkZWxldGVcIl0odCl9LFB0LnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24odCl7cmV0dXJuIE5yKHRoaXMsdCkuZ2V0KHQpfSxQdC5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHQpe3JldHVybiBOcih0aGlzLHQpLmhhcyh0KX0sUHQucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LG4pe1xuXHRcdHJldHVybiBOcih0aGlzLHQpLnNldCh0LG4pLHRoaXN9LFp0LnByb3RvdHlwZS5hZGQ9WnQucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX19kYXRhX18uc2V0KHQsXCJfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fXCIpLHRoaXN9LFp0LnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHQpfSxxdC5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9fZGF0YV9fPW5ldyBEdH0scXQucHJvdG90eXBlW1wiZGVsZXRlXCJdPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9fZGF0YV9fW1wiZGVsZXRlXCJdKHQpfSxxdC5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9fZGF0YV9fLmdldCh0KX0scXQucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXModCl9LHF0LnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24odCxuKXt2YXIgcj10aGlzLl9fZGF0YV9fO3JldHVybiByIGluc3RhbmNlb2YgRHQmJjIwMD09ci5fX2RhdGFfXy5sZW5ndGgmJihyPXRoaXMuX19kYXRhX189bmV3IFB0KHIuX19kYXRhX18pKSxcblx0XHRyLnNldCh0LG4pLHRoaXN9O3ZhciBBbz12cihobiksT289dnIocG4sdHJ1ZSksa289Z3IoKSxFbz1ncih0cnVlKTtOdSYmIXF1LmNhbGwoe3ZhbHVlT2Y6MX0sXCJ2YWx1ZU9mXCIpJiYoRW49ZnVuY3Rpb24odCl7cmV0dXJuIHooTnUodCkpfSk7dmFyIFNvPWhvP2Z1bmN0aW9uKHQsbil7cmV0dXJuIGhvLnNldCh0LG4pLHR9OnB1LElvPWFvJiYxL0QobmV3IGFvKFssLTBdKSlbMV09PXE/ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBhbyh0KX06Z3UsUm89aG8/ZnVuY3Rpb24odCl7cmV0dXJuIGhvLmdldCh0KX06Z3UsV289VW4oXCJsZW5ndGhcIik7UHV8fChUcj15dSk7dmFyIEJvPVB1P2Z1bmN0aW9uKHQpe2Zvcih2YXIgbj1bXTt0OylzKG4sVHIodCkpLHQ9SnUoT2JqZWN0KHQpKTtyZXR1cm4gbn06VHI7KGlvJiZcIltvYmplY3QgRGF0YVZpZXddXCIhPXFyKG5ldyBpbyhuZXcgQXJyYXlCdWZmZXIoMSkpKXx8Zm8mJlwiW29iamVjdCBNYXBdXCIhPXFyKG5ldyBmbyl8fGNvJiZcIltvYmplY3QgUHJvbWlzZV1cIiE9cXIoY28ucmVzb2x2ZSgpKXx8YW8mJlwiW29iamVjdCBTZXRdXCIhPXFyKG5ldyBhbyl8fGxvJiZcIltvYmplY3QgV2Vha01hcF1cIiE9cXIobmV3IGxvKSkmJihxcj1mdW5jdGlvbih0KXtcblx0XHR2YXIgbj1NdS5jYWxsKHQpO2lmKHQ9KHQ9XCJbb2JqZWN0IE9iamVjdF1cIj09bj90LmNvbnN0cnVjdG9yOlQpP2NlKHQpOlQpc3dpdGNoKHQpe2Nhc2Ugdm86cmV0dXJuXCJbb2JqZWN0IERhdGFWaWV3XVwiO2Nhc2UgZ286cmV0dXJuXCJbb2JqZWN0IE1hcF1cIjtjYXNlIHlvOnJldHVyblwiW29iamVjdCBQcm9taXNlXVwiO2Nhc2UgYm86cmV0dXJuXCJbb2JqZWN0IFNldF1cIjtjYXNlIHhvOnJldHVyblwiW29iamVjdCBXZWFrTWFwXVwifXJldHVybiBufSk7dmFyIExvPVN1P0ZlOmJ1LE1vPWZ1bmN0aW9uKCl7dmFyIHQ9MCxuPTA7cmV0dXJuIGZ1bmN0aW9uKHIsZSl7dmFyIHU9RWUoKSxvPTE2LSh1LW4pO2lmKG49dSxvPjApe2lmKDE1MDw9Kyt0KXJldHVybiByfWVsc2UgdD0wO3JldHVybiBTbyhyLGUpfX0oKSxDbz1MZShmdW5jdGlvbih0KXt2YXIgbj1bXTtyZXR1cm4gZXUodCkucmVwbGFjZShvdCxmdW5jdGlvbih0LHIsZSx1KXtuLnB1c2goZT91LnJlcGxhY2UoaHQsXCIkMVwiKTpyfHx0KX0pLFxuXHRcdG59KSx6bz1NZShmdW5jdGlvbih0LG4pe3JldHVybiAkZSh0KT9mbih0LHNuKG4sMSwkZSx0cnVlKSk6W119KSxVbz1NZShmdW5jdGlvbih0LG4pe3ZhciByPXZlKG4pO3JldHVybiAkZShyKSYmKHI9VCksJGUodCk/Zm4odCxzbihuLDEsJGUsdHJ1ZSksRnIocikpOltdfSksJG89TWUoZnVuY3Rpb24odCxuKXt2YXIgcj12ZShuKTtyZXR1cm4gJGUocikmJihyPVQpLCRlKHQpP2ZuKHQsc24obiwxLCRlLHRydWUpLFQscik6W119KSxEbz1NZShmdW5jdGlvbih0KXt2YXIgbj1sKHQscnIpO3JldHVybiBuLmxlbmd0aCYmblswXT09PXRbMF0/eG4obik6W119KSxGbz1NZShmdW5jdGlvbih0KXt2YXIgbj12ZSh0KSxyPWwodCxycik7cmV0dXJuIG49PT12ZShyKT9uPVQ6ci5wb3AoKSxyLmxlbmd0aCYmclswXT09PXRbMF0/eG4ocixGcihuKSk6W119KSxObz1NZShmdW5jdGlvbih0KXt2YXIgbj12ZSh0KSxyPWwodCxycik7cmV0dXJuIG49PT12ZShyKT9uPVQ6ci5wb3AoKSxyLmxlbmd0aCYmclswXT09PXRbMF0/eG4ocixULG4pOltdO1xuXHR9KSxQbz1NZShnZSksWm89TWUoZnVuY3Rpb24odCxuKXtuPXNuKG4sMSk7dmFyIHI9dD90Lmxlbmd0aDowLGU9dG4odCxuKTtyZXR1cm4gRm4odCxsKG4sZnVuY3Rpb24odCl7cmV0dXJuIFhyKHQscik/K3Q6dH0pLnNvcnQoZnIpKSxlfSksVG89TWUoZnVuY3Rpb24odCl7cmV0dXJuIEhuKHNuKHQsMSwkZSx0cnVlKSl9KSxxbz1NZShmdW5jdGlvbih0KXt2YXIgbj12ZSh0KTtyZXR1cm4gJGUobikmJihuPVQpLEhuKHNuKHQsMSwkZSx0cnVlKSxGcihuKSl9KSxWbz1NZShmdW5jdGlvbih0KXt2YXIgbj12ZSh0KTtyZXR1cm4gJGUobikmJihuPVQpLEhuKHNuKHQsMSwkZSx0cnVlKSxULG4pfSksS289TWUoZnVuY3Rpb24odCxuKXtyZXR1cm4gJGUodCk/Zm4odCxuKTpbXX0pLEdvPU1lKGZ1bmN0aW9uKHQpe3JldHVybiB0cihmKHQsJGUpKX0pLEpvPU1lKGZ1bmN0aW9uKHQpe3ZhciBuPXZlKHQpO3JldHVybiAkZShuKSYmKG49VCksdHIoZih0LCRlKSxGcihuKSl9KSxZbz1NZShmdW5jdGlvbih0KXtcblx0XHR2YXIgbj12ZSh0KTtyZXR1cm4gJGUobikmJihuPVQpLHRyKGYodCwkZSksVCxuKX0pLEhvPU1lKHllKSxRbz1NZShmdW5jdGlvbih0KXt2YXIgbj10Lmxlbmd0aCxuPW4+MT90W24tMV06VCxuPXR5cGVvZiBuPT1cImZ1bmN0aW9uXCI/KHQucG9wKCksbik6VDtyZXR1cm4gYmUodCxuKX0pLFhvPU1lKGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIG4obil7cmV0dXJuIHRuKG4sdCl9dD1zbih0LDEpO3ZhciByPXQubGVuZ3RoLGU9cj90WzBdOjAsdT10aGlzLl9fd3JhcHBlZF9fO3JldHVybiEocj4xfHx0aGlzLl9fYWN0aW9uc19fLmxlbmd0aCkmJnUgaW5zdGFuY2VvZiBVdCYmWHIoZSk/KHU9dS5zbGljZShlLCtlKyhyPzE6MCkpLHUuX19hY3Rpb25zX18ucHVzaCh7ZnVuYzpqZSxhcmdzOltuXSx0aGlzQXJnOlR9KSxuZXcgenQodSx0aGlzLl9fY2hhaW5fXykudGhydShmdW5jdGlvbih0KXtyZXR1cm4gciYmIXQubGVuZ3RoJiZ0LnB1c2goVCksdH0pKTp0aGlzLnRocnUobil9KSx0aT1wcihmdW5jdGlvbih0LG4scil7XG5cdFx0V3UuY2FsbCh0LHIpPysrdFtyXTp0W3JdPTF9KSxuaT13cihoZSkscmk9d3IocGUpLGVpPXByKGZ1bmN0aW9uKHQsbixyKXtXdS5jYWxsKHQscik/dFtyXS5wdXNoKG4pOnRbcl09W25dfSksdWk9TWUoZnVuY3Rpb24odCxuLGUpe3ZhciB1PS0xLG89dHlwZW9mIG49PVwiZnVuY3Rpb25cIixpPW5lKG4pLGY9VWUodCk/QXJyYXkodC5sZW5ndGgpOltdO3JldHVybiBBbyh0LGZ1bmN0aW9uKHQpe3ZhciBjPW8/bjppJiZudWxsIT10P3Rbbl06VDtmWysrdV09Yz9yKGMsdCxlKTp3bih0LG4sZSl9KSxmfSksb2k9cHIoZnVuY3Rpb24odCxuLHIpe3Rbcl09bn0pLGlpPXByKGZ1bmN0aW9uKHQsbixyKXt0W3I/MDoxXS5wdXNoKG4pfSxmdW5jdGlvbigpe3JldHVybltbXSxbXV19KSxmaT1NZShmdW5jdGlvbih0LG4pe2lmKG51bGw9PXQpcmV0dXJuW107dmFyIHI9bi5sZW5ndGg7cmV0dXJuIHI+MSYmdGUodCxuWzBdLG5bMV0pP249W106cj4yJiZ0ZShuWzBdLG5bMV0sblsyXSkmJihuPVtuWzBdXSksXG5cdFx0bj0xPT1uLmxlbmd0aCYmeWkoblswXSk/blswXTpzbihuLDEsUXIpLE1uKHQsbixbXSl9KSxjaT1NZShmdW5jdGlvbih0LG4scil7dmFyIGU9MTtpZihyLmxlbmd0aCl2YXIgdT0kKHIsRHIoY2kpKSxlPTMyfGU7cmV0dXJuIENyKHQsZSxuLHIsdSl9KSxhaT1NZShmdW5jdGlvbih0LG4scil7dmFyIGU9MztpZihyLmxlbmd0aCl2YXIgdT0kKHIsRHIoYWkpKSxlPTMyfGU7cmV0dXJuIENyKG4sZSx0LHIsdSl9KSxsaT1NZShmdW5jdGlvbih0LG4pe3JldHVybiBvbih0LDEsbil9KSxzaT1NZShmdW5jdGlvbih0LG4scil7cmV0dXJuIG9uKHQsbnUobil8fDAscil9KTtMZS5DYWNoZT1QdDt2YXIgaGk9TWUoZnVuY3Rpb24odCxuKXtuPTE9PW4ubGVuZ3RoJiZ5aShuWzBdKT9sKG5bMF0sTyhGcigpKSk6bChzbihuLDEsUXIpLE8oRnIoKSkpO3ZhciBlPW4ubGVuZ3RoO3JldHVybiBNZShmdW5jdGlvbih1KXtmb3IodmFyIG89LTEsaT10byh1Lmxlbmd0aCxlKTsrK288aTspdVtvXT1uW29dLmNhbGwodGhpcyx1W29dKTtcblx0XHRyZXR1cm4gcih0LHRoaXMsdSl9KX0pLHBpPU1lKGZ1bmN0aW9uKHQsbil7dmFyIHI9JChuLERyKHBpKSk7cmV0dXJuIENyKHQsMzIsVCxuLHIpfSksX2k9TWUoZnVuY3Rpb24odCxuKXt2YXIgcj0kKG4sRHIoX2kpKTtyZXR1cm4gQ3IodCw2NCxULG4scil9KSx2aT1NZShmdW5jdGlvbih0LG4pe3JldHVybiBDcih0LDI1NixULFQsVCxzbihuLDEpKX0pLGdpPVdyKGRuKSxkaT1XcihmdW5jdGlvbih0LG4pe3JldHVybiB0Pj1ufSkseWk9QXJyYXkuaXNBcnJheSxiaT1VdT9mdW5jdGlvbih0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIFV1fTpidSx4aT1XcihTbiksamk9V3IoZnVuY3Rpb24odCxuKXtyZXR1cm4gbj49dH0pLHdpPV9yKGZ1bmN0aW9uKHQsbil7aWYocG98fGVlKG4pfHxVZShuKSlzcihuLGl1KG4pLHQpO2Vsc2UgZm9yKHZhciByIGluIG4pV3UuY2FsbChuLHIpJiZZdCh0LHIsbltyXSl9KSxtaT1fcihmdW5jdGlvbih0LG4pe2lmKHBvfHxlZShuKXx8VWUobikpc3IobixmdShuKSx0KTtlbHNlIGZvcih2YXIgciBpbiBuKVl0KHQscixuW3JdKTtcblx0fSksQWk9X3IoZnVuY3Rpb24odCxuLHIsZSl7c3IobixmdShuKSx0LGUpfSksT2k9X3IoZnVuY3Rpb24odCxuLHIsZSl7c3IobixpdShuKSx0LGUpfSksa2k9TWUoZnVuY3Rpb24odCxuKXtyZXR1cm4gdG4odCxzbihuLDEpKX0pLEVpPU1lKGZ1bmN0aW9uKHQpe3JldHVybiB0LnB1c2goVCxWdCkscihBaSxULHQpfSksU2k9TWUoZnVuY3Rpb24odCl7cmV0dXJuIHQucHVzaChULG9lKSxyKExpLFQsdCl9KSxJaT1PcihmdW5jdGlvbih0LG4scil7dFtuXT1yfSxodShwdSkpLFJpPU9yKGZ1bmN0aW9uKHQsbixyKXtXdS5jYWxsKHQsbik/dFtuXS5wdXNoKHIpOnRbbl09W3JdfSxGciksV2k9TWUod24pLEJpPV9yKGZ1bmN0aW9uKHQsbixyKXtCbih0LG4scil9KSxMaT1fcihmdW5jdGlvbih0LG4scixlKXtCbih0LG4scixlKX0pLE1pPU1lKGZ1bmN0aW9uKHQsbil7cmV0dXJuIG51bGw9PXQ/e306KG49bChzbihuLDEpLGZlKSxDbih0LGZuKGduKHQsZnUsQm8pLG4pKSl9KSxDaT1NZShmdW5jdGlvbih0LG4pe1xuXHRcdHJldHVybiBudWxsPT10P3t9OkNuKHQsbChzbihuLDEpLGZlKSl9KSx6aT1NcihpdSksVWk9TXIoZnUpLCRpPWJyKGZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gbj1uLnRvTG93ZXJDYXNlKCksdCsocj9hdShuKTpuKX0pLERpPWJyKGZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gdCsocj9cIi1cIjpcIlwiKStuLnRvTG93ZXJDYXNlKCl9KSxGaT1icihmdW5jdGlvbih0LG4scil7cmV0dXJuIHQrKHI/XCIgXCI6XCJcIikrbi50b0xvd2VyQ2FzZSgpfSksTmk9eXIoXCJ0b0xvd2VyQ2FzZVwiKSxQaT1icihmdW5jdGlvbih0LG4scil7cmV0dXJuIHQrKHI/XCJfXCI6XCJcIikrbi50b0xvd2VyQ2FzZSgpfSksWmk9YnIoZnVuY3Rpb24odCxuLHIpe3JldHVybiB0KyhyP1wiIFwiOlwiXCIpK3FpKG4pfSksVGk9YnIoZnVuY3Rpb24odCxuLHIpe3JldHVybiB0KyhyP1wiIFwiOlwiXCIpK24udG9VcHBlckNhc2UoKX0pLHFpPXlyKFwidG9VcHBlckNhc2VcIiksVmk9TWUoZnVuY3Rpb24odCxuKXt0cnl7cmV0dXJuIHIodCxULG4pfWNhdGNoKGUpe1xuXHRcdHJldHVybiBEZShlKT9lOm5ldyBqdShlKX19KSxLaT1NZShmdW5jdGlvbih0LG4pe3JldHVybiB1KHNuKG4sMSksZnVuY3Rpb24obil7bj1mZShuKSx0W25dPWNpKHRbbl0sdCl9KSx0fSksR2k9bXIoKSxKaT1tcih0cnVlKSxZaT1NZShmdW5jdGlvbih0LG4pe3JldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gd24ocix0LG4pfX0pLEhpPU1lKGZ1bmN0aW9uKHQsbil7cmV0dXJuIGZ1bmN0aW9uKHIpe3JldHVybiB3bih0LHIsbil9fSksUWk9RXIobCksWGk9RXIoaSksdGY9RXIoXyksbmY9UnIoKSxyZj1Scih0cnVlKSxlZj1rcihmdW5jdGlvbih0LG4pe3JldHVybiB0K259KSx1Zj1McihcImNlaWxcIiksb2Y9a3IoZnVuY3Rpb24odCxuKXtyZXR1cm4gdC9ufSksZmY9THIoXCJmbG9vclwiKSxjZj1rcihmdW5jdGlvbih0LG4pe3JldHVybiB0Km59KSxhZj1McihcInJvdW5kXCIpLGxmPWtyKGZ1bmN0aW9uKHQsbil7cmV0dXJuIHQtbn0pO3JldHVybiBPdC5hZnRlcj1mdW5jdGlvbih0LG4pe2lmKHR5cGVvZiBuIT1cImZ1bmN0aW9uXCIpdGhyb3cgbmV3IEF1KFwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiKTtcblx0XHRyZXR1cm4gdD1YZSh0KSxmdW5jdGlvbigpe3JldHVybiAxPi0tdD9uLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp2b2lkIDB9fSxPdC5hcnk9U2UsT3QuYXNzaWduPXdpLE90LmFzc2lnbkluPW1pLE90LmFzc2lnbkluV2l0aD1BaSxPdC5hc3NpZ25XaXRoPU9pLE90LmF0PWtpLE90LmJlZm9yZT1JZSxPdC5iaW5kPWNpLE90LmJpbmRBbGw9S2ksT3QuYmluZEtleT1haSxPdC5jYXN0QXJyYXk9ZnVuY3Rpb24oKXtpZighYXJndW1lbnRzLmxlbmd0aClyZXR1cm5bXTt2YXIgdD1hcmd1bWVudHNbMF07cmV0dXJuIHlpKHQpP3Q6W3RdfSxPdC5jaGFpbj14ZSxPdC5jaHVuaz1mdW5jdGlvbih0LG4scil7aWYobj0ocj90ZSh0LG4scik6bj09PVQpPzE6WHUoWGUobiksMCkscj10P3QubGVuZ3RoOjAsIXJ8fDE+bilyZXR1cm5bXTtmb3IodmFyIGU9MCx1PTAsbz1BcnJheShLdShyL24pKTtyPmU7KW9bdSsrXT1Ubih0LGUsZSs9bik7cmV0dXJuIG99LE90LmNvbXBhY3Q9ZnVuY3Rpb24odCl7Zm9yKHZhciBuPS0xLHI9dD90Lmxlbmd0aDowLGU9MCx1PVtdOysrbjxyOyl7XG5cdFx0dmFyIG89dFtuXTtvJiYodVtlKytdPW8pfXJldHVybiB1fSxPdC5jb25jYXQ9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxuPUFycmF5KHQ/dC0xOjApLHI9YXJndW1lbnRzWzBdLGU9dDtlLS07KW5bZS0xXT1hcmd1bWVudHNbZV07cmV0dXJuIHQ/cyh5aShyKT9scihyKTpbcl0sc24obiwxKSk6W119LE90LmNvbmQ9ZnVuY3Rpb24odCl7dmFyIG49dD90Lmxlbmd0aDowLGU9RnIoKTtyZXR1cm4gdD1uP2wodCxmdW5jdGlvbih0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0WzFdKXRocm93IG5ldyBBdShcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7cmV0dXJuW2UodFswXSksdFsxXV19KTpbXSxNZShmdW5jdGlvbihlKXtmb3IodmFyIHU9LTE7Kyt1PG47KXt2YXIgbz10W3VdO2lmKHIob1swXSx0aGlzLGUpKXJldHVybiByKG9bMV0sdGhpcyxlKX19KX0sT3QuY29uZm9ybXM9ZnVuY3Rpb24odCl7cmV0dXJuIGVuKHJuKHQsdHJ1ZSkpfSxPdC5jb25zdGFudD1odSxPdC5jb3VudEJ5PXRpLFxuXHRcdE90LmNyZWF0ZT1mdW5jdGlvbih0LG4pe3ZhciByPXVuKHQpO3JldHVybiBuP1h0KHIsbik6cn0sT3QuY3Vycnk9UmUsT3QuY3VycnlSaWdodD1XZSxPdC5kZWJvdW5jZT1CZSxPdC5kZWZhdWx0cz1FaSxPdC5kZWZhdWx0c0RlZXA9U2ksT3QuZGVmZXI9bGksT3QuZGVsYXk9c2ksT3QuZGlmZmVyZW5jZT16byxPdC5kaWZmZXJlbmNlQnk9VW8sT3QuZGlmZmVyZW5jZVdpdGg9JG8sT3QuZHJvcD1sZSxPdC5kcm9wUmlnaHQ9c2UsT3QuZHJvcFJpZ2h0V2hpbGU9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdCYmdC5sZW5ndGg/UW4odCxGcihuLDMpLHRydWUsdHJ1ZSk6W119LE90LmRyb3BXaGlsZT1mdW5jdGlvbih0LG4pe3JldHVybiB0JiZ0Lmxlbmd0aD9Rbih0LEZyKG4sMyksdHJ1ZSk6W119LE90LmZpbGw9ZnVuY3Rpb24odCxuLHIsZSl7dmFyIHU9dD90Lmxlbmd0aDowO2lmKCF1KXJldHVybltdO2ZvcihyJiZ0eXBlb2YgciE9XCJudW1iZXJcIiYmdGUodCxuLHIpJiYocj0wLGU9dSksdT10Lmxlbmd0aCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHI9WGUociksMD5yJiYocj0tcj51PzA6dStyKSxlPWU9PT1UfHxlPnU/dTpYZShlKSwwPmUmJihlKz11KSxlPXI+ZT8wOnR1KGUpO2U+cjspdFtyKytdPW47cmV0dXJuIHR9LE90LmZpbHRlcj1mdW5jdGlvbih0LG4pe3JldHVybih5aSh0KT9mOmxuKSh0LEZyKG4sMykpfSxPdC5mbGF0TWFwPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHNuKE9lKHQsbiksMSl9LE90LmZsYXRNYXBEZWVwPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHNuKE9lKHQsbikscSl9LE90LmZsYXRNYXBEZXB0aD1mdW5jdGlvbih0LG4scil7cmV0dXJuIHI9cj09PVQ/MTpYZShyKSxzbihPZSh0LG4pLHIpfSxPdC5mbGF0dGVuPWZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0Lmxlbmd0aD9zbih0LDEpOltdfSxPdC5mbGF0dGVuRGVlcD1mdW5jdGlvbih0KXtyZXR1cm4gdCYmdC5sZW5ndGg/c24odCxxKTpbXX0sT3QuZmxhdHRlbkRlcHRoPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQmJnQubGVuZ3RoPyhuPW49PT1UPzE6WGUobiksc24odCxuKSk6W107XG5cdH0sT3QuZmxpcD1mdW5jdGlvbih0KXtyZXR1cm4gQ3IodCw1MTIpfSxPdC5mbG93PUdpLE90LmZsb3dSaWdodD1KaSxPdC5mcm9tUGFpcnM9ZnVuY3Rpb24odCl7Zm9yKHZhciBuPS0xLHI9dD90Lmxlbmd0aDowLGU9e307KytuPHI7KXt2YXIgdT10W25dO2VbdVswXV09dVsxXX1yZXR1cm4gZX0sT3QuZnVuY3Rpb25zPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsPT10P1tdOl9uKHQsaXUodCkpfSxPdC5mdW5jdGlvbnNJbj1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbD09dD9bXTpfbih0LGZ1KHQpKX0sT3QuZ3JvdXBCeT1laSxPdC5pbml0aWFsPWZ1bmN0aW9uKHQpe3JldHVybiBzZSh0LDEpfSxPdC5pbnRlcnNlY3Rpb249RG8sT3QuaW50ZXJzZWN0aW9uQnk9Rm8sT3QuaW50ZXJzZWN0aW9uV2l0aD1ObyxPdC5pbnZlcnQ9SWksT3QuaW52ZXJ0Qnk9UmksT3QuaW52b2tlTWFwPXVpLE90Lml0ZXJhdGVlPV91LE90LmtleUJ5PW9pLE90LmtleXM9aXUsT3Qua2V5c0luPWZ1LE90Lm1hcD1PZSxcblx0XHRPdC5tYXBLZXlzPWZ1bmN0aW9uKHQsbil7dmFyIHI9e307cmV0dXJuIG49RnIobiwzKSxobih0LGZ1bmN0aW9uKHQsZSx1KXtyW24odCxlLHUpXT10fSkscn0sT3QubWFwVmFsdWVzPWZ1bmN0aW9uKHQsbil7dmFyIHI9e307cmV0dXJuIG49RnIobiwzKSxobih0LGZ1bmN0aW9uKHQsZSx1KXtyW2VdPW4odCxlLHUpfSkscn0sT3QubWF0Y2hlcz1mdW5jdGlvbih0KXtyZXR1cm4gUm4ocm4odCx0cnVlKSl9LE90Lm1hdGNoZXNQcm9wZXJ0eT1mdW5jdGlvbih0LG4pe3JldHVybiBXbih0LHJuKG4sdHJ1ZSkpfSxPdC5tZW1vaXplPUxlLE90Lm1lcmdlPUJpLE90Lm1lcmdlV2l0aD1MaSxPdC5tZXRob2Q9WWksT3QubWV0aG9kT2Y9SGksT3QubWl4aW49dnUsT3QubmVnYXRlPWZ1bmN0aW9uKHQpe2lmKHR5cGVvZiB0IT1cImZ1bmN0aW9uXCIpdGhyb3cgbmV3IEF1KFwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiKTtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4hdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fSxPdC5udGhBcmc9ZnVuY3Rpb24odCl7XG5cdFx0cmV0dXJuIHQ9WGUodCksTWUoZnVuY3Rpb24obil7cmV0dXJuIExuKG4sdCl9KX0sT3Qub21pdD1NaSxPdC5vbWl0Qnk9ZnVuY3Rpb24odCxuKXtyZXR1cm4gbj1GcihuKSx6bih0LGZ1bmN0aW9uKHQscil7cmV0dXJuIW4odCxyKX0pfSxPdC5vbmNlPWZ1bmN0aW9uKHQpe3JldHVybiBJZSgyLHQpfSxPdC5vcmRlckJ5PWZ1bmN0aW9uKHQsbixyLGUpe3JldHVybiBudWxsPT10P1tdOih5aShuKXx8KG49bnVsbD09bj9bXTpbbl0pLHI9ZT9UOnIseWkocil8fChyPW51bGw9PXI/W106W3JdKSxNbih0LG4scikpfSxPdC5vdmVyPVFpLE90Lm92ZXJBcmdzPWhpLE90Lm92ZXJFdmVyeT1YaSxPdC5vdmVyU29tZT10ZixPdC5wYXJ0aWFsPXBpLE90LnBhcnRpYWxSaWdodD1faSxPdC5wYXJ0aXRpb249aWksT3QucGljaz1DaSxPdC5waWNrQnk9ZnVuY3Rpb24odCxuKXtyZXR1cm4gbnVsbD09dD97fTp6bih0LEZyKG4pKX0sT3QucHJvcGVydHk9ZHUsT3QucHJvcGVydHlPZj1mdW5jdGlvbih0KXtcblx0XHRyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIG51bGw9PXQ/VDp2bih0LG4pfX0sT3QucHVsbD1QbyxPdC5wdWxsQWxsPWdlLE90LnB1bGxBbGxCeT1mdW5jdGlvbih0LG4scil7cmV0dXJuIHQmJnQubGVuZ3RoJiZuJiZuLmxlbmd0aD9Ebih0LG4sRnIocikpOnR9LE90LnB1bGxBbGxXaXRoPWZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gdCYmdC5sZW5ndGgmJm4mJm4ubGVuZ3RoP0RuKHQsbixULHIpOnR9LE90LnB1bGxBdD1abyxPdC5yYW5nZT1uZixPdC5yYW5nZVJpZ2h0PXJmLE90LnJlYXJnPXZpLE90LnJlamVjdD1mdW5jdGlvbih0LG4pe3ZhciByPXlpKHQpP2Y6bG47cmV0dXJuIG49RnIobiwzKSxyKHQsZnVuY3Rpb24odCxyLGUpe3JldHVybiFuKHQscixlKX0pfSxPdC5yZW1vdmU9ZnVuY3Rpb24odCxuKXt2YXIgcj1bXTtpZighdHx8IXQubGVuZ3RoKXJldHVybiByO3ZhciBlPS0xLHU9W10sbz10Lmxlbmd0aDtmb3Iobj1GcihuLDMpOysrZTxvOyl7dmFyIGk9dFtlXTtuKGksZSx0KSYmKHIucHVzaChpKSxcblx0XHR1LnB1c2goZSkpfXJldHVybiBGbih0LHUpLHJ9LE90LnJlc3Q9TWUsT3QucmV2ZXJzZT1kZSxPdC5zYW1wbGVTaXplPWtlLE90LnNldD1mdW5jdGlvbih0LG4scil7cmV0dXJuIG51bGw9PXQ/dDpabih0LG4scil9LE90LnNldFdpdGg9ZnVuY3Rpb24odCxuLHIsZSl7cmV0dXJuIGU9dHlwZW9mIGU9PVwiZnVuY3Rpb25cIj9lOlQsbnVsbD09dD90OlpuKHQsbixyLGUpfSxPdC5zaHVmZmxlPWZ1bmN0aW9uKHQpe3JldHVybiBrZSh0LDQyOTQ5NjcyOTUpfSxPdC5zbGljZT1mdW5jdGlvbih0LG4scil7dmFyIGU9dD90Lmxlbmd0aDowO3JldHVybiBlPyhyJiZ0eXBlb2YgciE9XCJudW1iZXJcIiYmdGUodCxuLHIpPyhuPTAscj1lKToobj1udWxsPT1uPzA6WGUobikscj1yPT09VD9lOlhlKHIpKSxUbih0LG4scikpOltdfSxPdC5zb3J0Qnk9ZmksT3Quc29ydGVkVW5pcT1mdW5jdGlvbih0KXtyZXR1cm4gdCYmdC5sZW5ndGg/R24odCk6W119LE90LnNvcnRlZFVuaXFCeT1mdW5jdGlvbih0LG4pe1xuXHRcdHJldHVybiB0JiZ0Lmxlbmd0aD9Hbih0LEZyKG4pKTpbXX0sT3Quc3BsaXQ9ZnVuY3Rpb24odCxuLHIpe3JldHVybiByJiZ0eXBlb2YgciE9XCJudW1iZXJcIiYmdGUodCxuLHIpJiYobj1yPVQpLHI9cj09PVQ/NDI5NDk2NzI5NTpyPj4+MCxyPyh0PWV1KHQpKSYmKHR5cGVvZiBuPT1cInN0cmluZ1wifHxudWxsIT1uJiYhS2UobikpJiYobj1ZbihuKSxcIlwiPT1uJiZXdC50ZXN0KHQpKT91cih0Lm1hdGNoKEl0KSwwLHIpOm9vLmNhbGwodCxuLHIpOltdfSxPdC5zcHJlYWQ9ZnVuY3Rpb24odCxuKXtpZih0eXBlb2YgdCE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBBdShcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7cmV0dXJuIG49bj09PVQ/MDpYdShYZShuKSwwKSxNZShmdW5jdGlvbihlKXt2YXIgdT1lW25dO3JldHVybiBlPXVyKGUsMCxuKSx1JiZzKGUsdSkscih0LHRoaXMsZSl9KX0sT3QudGFpbD1mdW5jdGlvbih0KXtyZXR1cm4gbGUodCwxKX0sT3QudGFrZT1mdW5jdGlvbih0LG4scil7cmV0dXJuIHQmJnQubGVuZ3RoPyhuPXJ8fG49PT1UPzE6WGUobiksXG5cdFx0VG4odCwwLDA+bj8wOm4pKTpbXX0sT3QudGFrZVJpZ2h0PWZ1bmN0aW9uKHQsbixyKXt2YXIgZT10P3QubGVuZ3RoOjA7cmV0dXJuIGU/KG49cnx8bj09PVQ/MTpYZShuKSxuPWUtbixUbih0LDA+bj8wOm4sZSkpOltdfSxPdC50YWtlUmlnaHRXaGlsZT1mdW5jdGlvbih0LG4pe3JldHVybiB0JiZ0Lmxlbmd0aD9Rbih0LEZyKG4sMyksZmFsc2UsdHJ1ZSk6W119LE90LnRha2VXaGlsZT1mdW5jdGlvbih0LG4pe3JldHVybiB0JiZ0Lmxlbmd0aD9Rbih0LEZyKG4sMykpOltdfSxPdC50YXA9ZnVuY3Rpb24odCxuKXtyZXR1cm4gbih0KSx0fSxPdC50aHJvdHRsZT1mdW5jdGlvbih0LG4scil7dmFyIGU9dHJ1ZSx1PXRydWU7aWYodHlwZW9mIHQhPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgQXUoXCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIpO3JldHVybiBaZShyKSYmKGU9XCJsZWFkaW5nXCJpbiByPyEhci5sZWFkaW5nOmUsdT1cInRyYWlsaW5nXCJpbiByPyEhci50cmFpbGluZzp1KSxCZSh0LG4se2xlYWRpbmc6ZSxtYXhXYWl0Om4sXG5cdFx0dHJhaWxpbmc6dX0pfSxPdC50aHJ1PWplLE90LnRvQXJyYXk9SGUsT3QudG9QYWlycz16aSxPdC50b1BhaXJzSW49VWksT3QudG9QYXRoPWZ1bmN0aW9uKHQpe3JldHVybiB5aSh0KT9sKHQsZmUpOkplKHQpP1t0XTpscihDbyh0KSl9LE90LnRvUGxhaW5PYmplY3Q9cnUsT3QudHJhbnNmb3JtPWZ1bmN0aW9uKHQsbixyKXt2YXIgZT15aSh0KXx8WWUodCk7aWYobj1GcihuLDQpLG51bGw9PXIpaWYoZXx8WmUodCkpe3ZhciBvPXQuY29uc3RydWN0b3I7cj1lP3lpKHQpP25ldyBvOltdOkZlKG8pP3VuKEp1KE9iamVjdCh0KSkpOnt9fWVsc2Ugcj17fTtyZXR1cm4oZT91OmhuKSh0LGZ1bmN0aW9uKHQsZSx1KXtyZXR1cm4gbihyLHQsZSx1KX0pLHJ9LE90LnVuYXJ5PWZ1bmN0aW9uKHQpe3JldHVybiBTZSh0LDEpfSxPdC51bmlvbj1UbyxPdC51bmlvbkJ5PXFvLE90LnVuaW9uV2l0aD1WbyxPdC51bmlxPWZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0Lmxlbmd0aD9Ibih0KTpbXX0sT3QudW5pcUJ5PWZ1bmN0aW9uKHQsbil7XG5cdFx0cmV0dXJuIHQmJnQubGVuZ3RoP0huKHQsRnIobikpOltdfSxPdC51bmlxV2l0aD1mdW5jdGlvbih0LG4pe3JldHVybiB0JiZ0Lmxlbmd0aD9Ibih0LFQsbik6W119LE90LnVuc2V0PWZ1bmN0aW9uKHQsbil7dmFyIHI7aWYobnVsbD09dClyPXRydWU7ZWxzZXtyPXQ7dmFyIGU9bixlPW5lKGUscik/W2VdOmVyKGUpO3I9aWUocixlKSxlPWZlKHZlKGUpKSxyPSEobnVsbCE9ciYmeW4ocixlKSl8fGRlbGV0ZSByW2VdfXJldHVybiByfSxPdC51bnppcD15ZSxPdC51bnppcFdpdGg9YmUsT3QudXBkYXRlPWZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gbnVsbD09dD90OlpuKHQsbiwodHlwZW9mIHI9PVwiZnVuY3Rpb25cIj9yOnB1KSh2bih0LG4pKSx2b2lkIDApfSxPdC51cGRhdGVXaXRoPWZ1bmN0aW9uKHQsbixyLGUpe3JldHVybiBlPXR5cGVvZiBlPT1cImZ1bmN0aW9uXCI/ZTpULG51bGwhPXQmJih0PVpuKHQsbiwodHlwZW9mIHI9PVwiZnVuY3Rpb25cIj9yOnB1KSh2bih0LG4pKSxlKSksdH0sT3QudmFsdWVzPWN1LFxuXHRcdE90LnZhbHVlc0luPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsPT10P1tdOmsodCxmdSh0KSl9LE90LndpdGhvdXQ9S28sT3Qud29yZHM9c3UsT3Qud3JhcD1mdW5jdGlvbih0LG4pe3JldHVybiBuPW51bGw9PW4/cHU6bixwaShuLHQpfSxPdC54b3I9R28sT3QueG9yQnk9Sm8sT3QueG9yV2l0aD1ZbyxPdC56aXA9SG8sT3QuemlwT2JqZWN0PWZ1bmN0aW9uKHQsbil7cmV0dXJuIG5yKHR8fFtdLG58fFtdLFl0KX0sT3QuemlwT2JqZWN0RGVlcD1mdW5jdGlvbih0LG4pe3JldHVybiBucih0fHxbXSxufHxbXSxabil9LE90LnppcFdpdGg9UW8sT3QuZW50cmllcz16aSxPdC5lbnRyaWVzSW49VWksT3QuZXh0ZW5kPW1pLE90LmV4dGVuZFdpdGg9QWksdnUoT3QsT3QpLE90LmFkZD1lZixPdC5hdHRlbXB0PVZpLE90LmNhbWVsQ2FzZT0kaSxPdC5jYXBpdGFsaXplPWF1LE90LmNlaWw9dWYsT3QuY2xhbXA9ZnVuY3Rpb24odCxuLHIpe3JldHVybiByPT09VCYmKHI9bixuPVQpLHIhPT1UJiYocj1udShyKSxcblx0XHRcdHI9cj09PXI/cjowKSxuIT09VCYmKG49bnUobiksbj1uPT09bj9uOjApLG5uKG51KHQpLG4scil9LE90LmNsb25lPWZ1bmN0aW9uKHQpe3JldHVybiBybih0LGZhbHNlLHRydWUpfSxPdC5jbG9uZURlZXA9ZnVuY3Rpb24odCl7cmV0dXJuIHJuKHQsdHJ1ZSx0cnVlKX0sT3QuY2xvbmVEZWVwV2l0aD1mdW5jdGlvbih0LG4pe3JldHVybiBybih0LHRydWUsdHJ1ZSxuKX0sT3QuY2xvbmVXaXRoPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHJuKHQsZmFsc2UsdHJ1ZSxuKX0sT3QuZGVidXJyPWx1LE90LmRpdmlkZT1vZixPdC5lbmRzV2l0aD1mdW5jdGlvbih0LG4scil7dD1ldSh0KSxuPVluKG4pO3ZhciBlPXQubGVuZ3RoO3JldHVybiByPXI9PT1UP2U6bm4oWGUociksMCxlKSxyLT1uLmxlbmd0aCxyPj0wJiZ0LmluZGV4T2YobixyKT09cn0sT3QuZXE9Q2UsT3QuZXNjYXBlPWZ1bmN0aW9uKHQpe3JldHVybih0PWV1KHQpKSYmWC50ZXN0KHQpP3QucmVwbGFjZShILEIpOnR9LE90LmVzY2FwZVJlZ0V4cD1mdW5jdGlvbih0KXtcblx0XHRcdHJldHVybih0PWV1KHQpKSYmZnQudGVzdCh0KT90LnJlcGxhY2UoaXQsXCJcXFxcJCZcIik6dH0sT3QuZXZlcnk9ZnVuY3Rpb24odCxuLHIpe3ZhciBlPXlpKHQpP2k6Y247cmV0dXJuIHImJnRlKHQsbixyKSYmKG49VCksZSh0LEZyKG4sMykpfSxPdC5maW5kPW5pLE90LmZpbmRJbmRleD1oZSxPdC5maW5kS2V5PWZ1bmN0aW9uKHQsbil7cmV0dXJuIHYodCxGcihuLDMpLGhuKX0sT3QuZmluZExhc3Q9cmksT3QuZmluZExhc3RJbmRleD1wZSxPdC5maW5kTGFzdEtleT1mdW5jdGlvbih0LG4pe3JldHVybiB2KHQsRnIobiwzKSxwbil9LE90LmZsb29yPWZmLE90LmZvckVhY2g9bWUsT3QuZm9yRWFjaFJpZ2h0PUFlLE90LmZvckluPWZ1bmN0aW9uKHQsbil7cmV0dXJuIG51bGw9PXQ/dDprbyh0LEZyKG4sMyksZnUpfSxPdC5mb3JJblJpZ2h0PWZ1bmN0aW9uKHQsbil7cmV0dXJuIG51bGw9PXQ/dDpFbyh0LEZyKG4sMyksZnUpfSxPdC5mb3JPd249ZnVuY3Rpb24odCxuKXtyZXR1cm4gdCYmaG4odCxGcihuLDMpKTtcblx0XHR9LE90LmZvck93blJpZ2h0PWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQmJnBuKHQsRnIobiwzKSl9LE90LmdldD11dSxPdC5ndD1naSxPdC5ndGU9ZGksT3QuaGFzPWZ1bmN0aW9uKHQsbil7cmV0dXJuIG51bGwhPXQmJlZyKHQsbix5bil9LE90Lmhhc0luPW91LE90LmhlYWQ9X2UsT3QuaWRlbnRpdHk9cHUsT3QuaW5jbHVkZXM9ZnVuY3Rpb24odCxuLHIsZSl7cmV0dXJuIHQ9VWUodCk/dDpjdSh0KSxyPXImJiFlP1hlKHIpOjAsZT10Lmxlbmd0aCwwPnImJihyPVh1KGUrciwwKSksR2UodCk/ZT49ciYmLTE8dC5pbmRleE9mKG4scik6ISFlJiYtMTxkKHQsbixyKX0sT3QuaW5kZXhPZj1mdW5jdGlvbih0LG4scil7dmFyIGU9dD90Lmxlbmd0aDowO3JldHVybiBlPyhyPW51bGw9PXI/MDpYZShyKSwwPnImJihyPVh1KGUrciwwKSksZCh0LG4scikpOi0xfSxPdC5pblJhbmdlPWZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gbj1udShuKXx8MCxyPT09VD8ocj1uLG49MCk6cj1udShyKXx8MCx0PW51KHQpLFxuXHRcdHQ+PXRvKG4scikmJnQ8WHUobixyKX0sT3QuaW52b2tlPVdpLE90LmlzQXJndW1lbnRzPXplLE90LmlzQXJyYXk9eWksT3QuaXNBcnJheUJ1ZmZlcj1mdW5jdGlvbih0KXtyZXR1cm4gVGUodCkmJlwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIj09TXUuY2FsbCh0KX0sT3QuaXNBcnJheUxpa2U9VWUsT3QuaXNBcnJheUxpa2VPYmplY3Q9JGUsT3QuaXNCb29sZWFuPWZ1bmN0aW9uKHQpe3JldHVybiB0cnVlPT09dHx8ZmFsc2U9PT10fHxUZSh0KSYmXCJbb2JqZWN0IEJvb2xlYW5dXCI9PU11LmNhbGwodCl9LE90LmlzQnVmZmVyPWJpLE90LmlzRGF0ZT1mdW5jdGlvbih0KXtyZXR1cm4gVGUodCkmJlwiW29iamVjdCBEYXRlXVwiPT1NdS5jYWxsKHQpfSxPdC5pc0VsZW1lbnQ9ZnVuY3Rpb24odCl7cmV0dXJuISF0JiYxPT09dC5ub2RlVHlwZSYmVGUodCkmJiFWZSh0KX0sT3QuaXNFbXB0eT1mdW5jdGlvbih0KXtpZihVZSh0KSYmKHlpKHQpfHxHZSh0KXx8RmUodC5zcGxpY2UpfHx6ZSh0KXx8YmkodCkpKXJldHVybiF0Lmxlbmd0aDtcblx0XHRcdGlmKFRlKHQpKXt2YXIgbj1xcih0KTtpZihcIltvYmplY3QgTWFwXVwiPT1ufHxcIltvYmplY3QgU2V0XVwiPT1uKXJldHVybiF0LnNpemV9Zm9yKHZhciByIGluIHQpaWYoV3UuY2FsbCh0LHIpKXJldHVybiBmYWxzZTtyZXR1cm4hKHBvJiZpdSh0KS5sZW5ndGgpfSxPdC5pc0VxdWFsPWZ1bmN0aW9uKHQsbil7cmV0dXJuIG1uKHQsbil9LE90LmlzRXF1YWxXaXRoPWZ1bmN0aW9uKHQsbixyKXt2YXIgZT0ocj10eXBlb2Ygcj09XCJmdW5jdGlvblwiP3I6VCk/cih0LG4pOlQ7cmV0dXJuIGU9PT1UP21uKHQsbixyKTohIWV9LE90LmlzRXJyb3I9RGUsT3QuaXNGaW5pdGU9ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0PT1cIm51bWJlclwiJiZZdSh0KX0sT3QuaXNGdW5jdGlvbj1GZSxPdC5pc0ludGVnZXI9TmUsT3QuaXNMZW5ndGg9UGUsT3QuaXNNYXA9ZnVuY3Rpb24odCl7cmV0dXJuIFRlKHQpJiZcIltvYmplY3QgTWFwXVwiPT1xcih0KX0sT3QuaXNNYXRjaD1mdW5jdGlvbih0LG4pe3JldHVybiB0PT09bnx8QW4odCxuLFByKG4pKTtcblx0XHR9LE90LmlzTWF0Y2hXaXRoPWZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gcj10eXBlb2Ygcj09XCJmdW5jdGlvblwiP3I6VCxBbih0LG4sUHIobikscil9LE90LmlzTmFOPWZ1bmN0aW9uKHQpe3JldHVybiBxZSh0KSYmdCE9K3R9LE90LmlzTmF0aXZlPWZ1bmN0aW9uKHQpe2lmKExvKHQpKXRocm93IG5ldyBqdShcIlRoaXMgbWV0aG9kIGlzIG5vdCBzdXBwb3J0ZWQgd2l0aCBgY29yZS1qc2AuIFRyeSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMuXCIpO3JldHVybiBPbih0KX0sT3QuaXNOaWw9ZnVuY3Rpb24odCl7cmV0dXJuIG51bGw9PXR9LE90LmlzTnVsbD1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbD09PXR9LE90LmlzTnVtYmVyPXFlLE90LmlzT2JqZWN0PVplLE90LmlzT2JqZWN0TGlrZT1UZSxPdC5pc1BsYWluT2JqZWN0PVZlLE90LmlzUmVnRXhwPUtlLE90LmlzU2FmZUludGVnZXI9ZnVuY3Rpb24odCl7cmV0dXJuIE5lKHQpJiZ0Pj0tOTAwNzE5OTI1NDc0MDk5MSYmOTAwNzE5OTI1NDc0MDk5MT49dDtcblx0XHR9LE90LmlzU2V0PWZ1bmN0aW9uKHQpe3JldHVybiBUZSh0KSYmXCJbb2JqZWN0IFNldF1cIj09cXIodCl9LE90LmlzU3RyaW5nPUdlLE90LmlzU3ltYm9sPUplLE90LmlzVHlwZWRBcnJheT1ZZSxPdC5pc1VuZGVmaW5lZD1mdW5jdGlvbih0KXtyZXR1cm4gdD09PVR9LE90LmlzV2Vha01hcD1mdW5jdGlvbih0KXtyZXR1cm4gVGUodCkmJlwiW29iamVjdCBXZWFrTWFwXVwiPT1xcih0KX0sT3QuaXNXZWFrU2V0PWZ1bmN0aW9uKHQpe3JldHVybiBUZSh0KSYmXCJbb2JqZWN0IFdlYWtTZXRdXCI9PU11LmNhbGwodCl9LE90LmpvaW49ZnVuY3Rpb24odCxuKXtyZXR1cm4gdD9IdS5jYWxsKHQsbik6XCJcIn0sT3Qua2ViYWJDYXNlPURpLE90Lmxhc3Q9dmUsT3QubGFzdEluZGV4T2Y9ZnVuY3Rpb24odCxuLHIpe3ZhciBlPXQ/dC5sZW5ndGg6MDtpZighZSlyZXR1cm4tMTt2YXIgdT1lO2lmKHIhPT1UJiYodT1YZShyKSx1PSgwPnU/WHUoZSt1LDApOnRvKHUsZS0xKSkrMSksbiE9PW4pcmV0dXJuIE0odCx1LTEsdHJ1ZSk7XG5cdFx0XHRmb3IoO3UtLTspaWYodFt1XT09PW4pcmV0dXJuIHU7cmV0dXJuLTF9LE90Lmxvd2VyQ2FzZT1GaSxPdC5sb3dlckZpcnN0PU5pLE90Lmx0PXhpLE90Lmx0ZT1qaSxPdC5tYXg9ZnVuY3Rpb24odCl7cmV0dXJuIHQmJnQubGVuZ3RoP2FuKHQscHUsZG4pOlR9LE90Lm1heEJ5PWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQmJnQubGVuZ3RoP2FuKHQsRnIobiksZG4pOlR9LE90Lm1lYW49ZnVuY3Rpb24odCl7cmV0dXJuIGIodCxwdSl9LE90Lm1lYW5CeT1mdW5jdGlvbih0LG4pe3JldHVybiBiKHQsRnIobikpfSxPdC5taW49ZnVuY3Rpb24odCl7cmV0dXJuIHQmJnQubGVuZ3RoP2FuKHQscHUsU24pOlR9LE90Lm1pbkJ5PWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQmJnQubGVuZ3RoP2FuKHQsRnIobiksU24pOlR9LE90LnN0dWJBcnJheT15dSxPdC5zdHViRmFsc2U9YnUsT3Quc3R1Yk9iamVjdD1mdW5jdGlvbigpe3JldHVybnt9fSxPdC5zdHViU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJcIn0sT3Quc3R1YlRydWU9ZnVuY3Rpb24oKXtcblx0XHRcdHJldHVybiB0cnVlfSxPdC5tdWx0aXBseT1jZixPdC5udGg9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdCYmdC5sZW5ndGg/TG4odCxYZShuKSk6VH0sT3Qubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBLdC5fPT09dGhpcyYmKEt0Ll89Q3UpLHRoaXN9LE90Lm5vb3A9Z3UsT3Qubm93PUVlLE90LnBhZD1mdW5jdGlvbih0LG4scil7dD1ldSh0KTt2YXIgZT0obj1YZShuKSk/Tih0KTowO3JldHVybiFufHxlPj1uP3Q6KG49KG4tZSkvMixTcihHdShuKSxyKSt0K1NyKEt1KG4pLHIpKX0sT3QucGFkRW5kPWZ1bmN0aW9uKHQsbixyKXt0PWV1KHQpO3ZhciBlPShuPVhlKG4pKT9OKHQpOjA7cmV0dXJuIG4mJm4+ZT90K1NyKG4tZSxyKTp0fSxPdC5wYWRTdGFydD1mdW5jdGlvbih0LG4scil7dD1ldSh0KTt2YXIgZT0obj1YZShuKSk/Tih0KTowO3JldHVybiBuJiZuPmU/U3Iobi1lLHIpK3Q6dH0sT3QucGFyc2VJbnQ9ZnVuY3Rpb24odCxuLHIpe3JldHVybiByfHxudWxsPT1uP249MDpuJiYobj0rbiksXG5cdFx0XHR0PWV1KHQpLnJlcGxhY2UoY3QsXCJcIiksbm8odCxufHwodnQudGVzdCh0KT8xNjoxMCkpfSxPdC5yYW5kb209ZnVuY3Rpb24odCxuLHIpe2lmKHImJnR5cGVvZiByIT1cImJvb2xlYW5cIiYmdGUodCxuLHIpJiYobj1yPVQpLHI9PT1UJiYodHlwZW9mIG49PVwiYm9vbGVhblwiPyhyPW4sbj1UKTp0eXBlb2YgdD09XCJib29sZWFuXCImJihyPXQsdD1UKSksdD09PVQmJm49PT1UPyh0PTAsbj0xKToodD1udSh0KXx8MCxuPT09VD8obj10LHQ9MCk6bj1udShuKXx8MCksdD5uKXt2YXIgZT10O3Q9bixuPWV9cmV0dXJuIHJ8fHQlMXx8biUxPyhyPXJvKCksdG8odCtyKihuLXQrRnQoXCIxZS1cIisoKHIrXCJcIikubGVuZ3RoLTEpKSksbikpOk5uKHQsbil9LE90LnJlZHVjZT1mdW5jdGlvbih0LG4scil7dmFyIGU9eWkodCk/aDp4LHU9Mz5hcmd1bWVudHMubGVuZ3RoO3JldHVybiBlKHQsRnIobiw0KSxyLHUsQW8pfSxPdC5yZWR1Y2VSaWdodD1mdW5jdGlvbih0LG4scil7dmFyIGU9eWkodCk/cDp4LHU9Mz5hcmd1bWVudHMubGVuZ3RoO1xuXHRcdFx0cmV0dXJuIGUodCxGcihuLDQpLHIsdSxPbyl9LE90LnJlcGVhdD1mdW5jdGlvbih0LG4scil7cmV0dXJuIG49KHI/dGUodCxuLHIpOm49PT1UKT8xOlhlKG4pLFBuKGV1KHQpLG4pfSxPdC5yZXBsYWNlPWZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLG49ZXUodFswXSk7cmV0dXJuIDM+dC5sZW5ndGg/bjplby5jYWxsKG4sdFsxXSx0WzJdKX0sT3QucmVzdWx0PWZ1bmN0aW9uKHQsbixyKXtuPW5lKG4sdCk/W25dOmVyKG4pO3ZhciBlPS0xLHU9bi5sZW5ndGg7Zm9yKHV8fCh0PVQsdT0xKTsrK2U8dTspe3ZhciBvPW51bGw9PXQ/VDp0W2ZlKG5bZV0pXTtvPT09VCYmKGU9dSxvPXIpLHQ9RmUobyk/by5jYWxsKHQpOm99cmV0dXJuIHR9LE90LnJvdW5kPWFmLE90LnJ1bkluQ29udGV4dD1aLE90LnNhbXBsZT1mdW5jdGlvbih0KXt0PVVlKHQpP3Q6Y3UodCk7dmFyIG49dC5sZW5ndGg7cmV0dXJuIG4+MD90W05uKDAsbi0xKV06VH0sT3Quc2l6ZT1mdW5jdGlvbih0KXtpZihudWxsPT10KXJldHVybiAwO1xuXHRcdFx0aWYoVWUodCkpe3ZhciBuPXQubGVuZ3RoO3JldHVybiBuJiZHZSh0KT9OKHQpOm59cmV0dXJuIFRlKHQpJiYobj1xcih0KSxcIltvYmplY3QgTWFwXVwiPT1ufHxcIltvYmplY3QgU2V0XVwiPT1uKT90LnNpemU6aXUodCkubGVuZ3RofSxPdC5zbmFrZUNhc2U9UGksT3Quc29tZT1mdW5jdGlvbih0LG4scil7dmFyIGU9eWkodCk/XzpxbjtyZXR1cm4gciYmdGUodCxuLHIpJiYobj1UKSxlKHQsRnIobiwzKSl9LE90LnNvcnRlZEluZGV4PWZ1bmN0aW9uKHQsbil7cmV0dXJuIFZuKHQsbil9LE90LnNvcnRlZEluZGV4Qnk9ZnVuY3Rpb24odCxuLHIpe3JldHVybiBLbih0LG4sRnIocikpfSxPdC5zb3J0ZWRJbmRleE9mPWZ1bmN0aW9uKHQsbil7dmFyIHI9dD90Lmxlbmd0aDowO2lmKHIpe3ZhciBlPVZuKHQsbik7aWYocj5lJiZDZSh0W2VdLG4pKXJldHVybiBlfXJldHVybi0xfSxPdC5zb3J0ZWRMYXN0SW5kZXg9ZnVuY3Rpb24odCxuKXtyZXR1cm4gVm4odCxuLHRydWUpfSxPdC5zb3J0ZWRMYXN0SW5kZXhCeT1mdW5jdGlvbih0LG4scil7XG5cdFx0XHRyZXR1cm4gS24odCxuLEZyKHIpLHRydWUpfSxPdC5zb3J0ZWRMYXN0SW5kZXhPZj1mdW5jdGlvbih0LG4pe2lmKHQmJnQubGVuZ3RoKXt2YXIgcj1Wbih0LG4sdHJ1ZSktMTtpZihDZSh0W3JdLG4pKXJldHVybiByfXJldHVybi0xfSxPdC5zdGFydENhc2U9WmksT3Quc3RhcnRzV2l0aD1mdW5jdGlvbih0LG4scil7cmV0dXJuIHQ9ZXUodCkscj1ubihYZShyKSwwLHQubGVuZ3RoKSx0Lmxhc3RJbmRleE9mKFluKG4pLHIpPT1yfSxPdC5zdWJ0cmFjdD1sZixPdC5zdW09ZnVuY3Rpb24odCl7cmV0dXJuIHQmJnQubGVuZ3RoP3codCxwdSk6MH0sT3Quc3VtQnk9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdCYmdC5sZW5ndGg/dyh0LEZyKG4pKTowfSxPdC50ZW1wbGF0ZT1mdW5jdGlvbih0LG4scil7dmFyIGU9T3QudGVtcGxhdGVTZXR0aW5ncztyJiZ0ZSh0LG4scikmJihuPVQpLHQ9ZXUodCksbj1BaSh7fSxuLGUsVnQpLHI9QWkoe30sbi5pbXBvcnRzLGUuaW1wb3J0cyxWdCk7dmFyIHUsbyxpPWl1KHIpLGY9ayhyLGkpLGM9MDtcblx0XHRcdHI9bi5pbnRlcnBvbGF0ZXx8d3Q7dmFyIGE9XCJfX3ArPSdcIjtyPW11KChuLmVzY2FwZXx8d3QpLnNvdXJjZStcInxcIityLnNvdXJjZStcInxcIisocj09PXJ0P3B0Ond0KS5zb3VyY2UrXCJ8XCIrKG4uZXZhbHVhdGV8fHd0KS5zb3VyY2UrXCJ8JFwiLFwiZ1wiKTt2YXIgbD1cInNvdXJjZVVSTFwiaW4gbj9cIi8vIyBzb3VyY2VVUkw9XCIrbi5zb3VyY2VVUkwrXCJcXG5cIjpcIlwiO2lmKHQucmVwbGFjZShyLGZ1bmN0aW9uKG4scixlLGksZixsKXtyZXR1cm4gZXx8KGU9aSksYSs9dC5zbGljZShjLGwpLnJlcGxhY2UobXQsTCksciYmKHU9dHJ1ZSxhKz1cIicrX19lKFwiK3IrXCIpKydcIiksZiYmKG89dHJ1ZSxhKz1cIic7XCIrZitcIjtcXG5fX3ArPSdcIiksZSYmKGErPVwiJysoKF9fdD0oXCIrZStcIikpPT1udWxsPycnOl9fdCkrJ1wiKSxjPWwrbi5sZW5ndGgsbn0pLGErPVwiJztcIiwobj1uLnZhcmlhYmxlKXx8KGE9XCJ3aXRoKG9iail7XCIrYStcIn1cIiksYT0obz9hLnJlcGxhY2UoSyxcIlwiKTphKS5yZXBsYWNlKEcsXCIkMVwiKS5yZXBsYWNlKEosXCIkMTtcIiksXG5cdFx0XHRcdFx0YT1cImZ1bmN0aW9uKFwiKyhufHxcIm9ialwiKStcIil7XCIrKG4/XCJcIjpcIm9ianx8KG9iaj17fSk7XCIpK1widmFyIF9fdCxfX3A9JydcIisodT9cIixfX2U9Xy5lc2NhcGVcIjpcIlwiKSsobz9cIixfX2o9QXJyYXkucHJvdG90eXBlLmpvaW47ZnVuY3Rpb24gcHJpbnQoKXtfX3ArPV9fai5jYWxsKGFyZ3VtZW50cywnJyl9XCI6XCI7XCIpK2ErXCJyZXR1cm4gX19wfVwiLG49VmkoZnVuY3Rpb24oKXtyZXR1cm4gRnVuY3Rpb24oaSxsK1wicmV0dXJuIFwiK2EpLmFwcGx5KFQsZil9KSxuLnNvdXJjZT1hLERlKG4pKXRocm93IG47cmV0dXJuIG59LE90LnRpbWVzPWZ1bmN0aW9uKHQsbil7aWYodD1YZSh0KSwxPnR8fHQ+OTAwNzE5OTI1NDc0MDk5MSlyZXR1cm5bXTt2YXIgcj00Mjk0OTY3Mjk1LGU9dG8odCw0Mjk0OTY3Mjk1KTtmb3Iobj1GcihuKSx0LT00Mjk0OTY3Mjk1LGU9bShlLG4pOysrcjx0OyluKHIpO3JldHVybiBlfSxPdC50b0Zpbml0ZT1RZSxPdC50b0ludGVnZXI9WGUsT3QudG9MZW5ndGg9dHUsT3QudG9Mb3dlcj1mdW5jdGlvbih0KXtcblx0XHRcdHJldHVybiBldSh0KS50b0xvd2VyQ2FzZSgpfSxPdC50b051bWJlcj1udSxPdC50b1NhZmVJbnRlZ2VyPWZ1bmN0aW9uKHQpe3JldHVybiBubihYZSh0KSwtOTAwNzE5OTI1NDc0MDk5MSw5MDA3MTk5MjU0NzQwOTkxKX0sT3QudG9TdHJpbmc9ZXUsT3QudG9VcHBlcj1mdW5jdGlvbih0KXtyZXR1cm4gZXUodCkudG9VcHBlckNhc2UoKX0sT3QudHJpbT1mdW5jdGlvbih0LG4scil7cmV0dXJuKHQ9ZXUodCkpJiYocnx8bj09PVQpP3QucmVwbGFjZShjdCxcIlwiKTp0JiYobj1ZbihuKSk/KHQ9dC5tYXRjaChJdCksbj1uLm1hdGNoKEl0KSx1cih0LFModCxuKSxJKHQsbikrMSkuam9pbihcIlwiKSk6dH0sT3QudHJpbUVuZD1mdW5jdGlvbih0LG4scil7cmV0dXJuKHQ9ZXUodCkpJiYocnx8bj09PVQpP3QucmVwbGFjZShsdCxcIlwiKTp0JiYobj1ZbihuKSk/KHQ9dC5tYXRjaChJdCksbj1JKHQsbi5tYXRjaChJdCkpKzEsdXIodCwwLG4pLmpvaW4oXCJcIikpOnR9LE90LnRyaW1TdGFydD1mdW5jdGlvbih0LG4scil7XG5cdFx0XHRyZXR1cm4odD1ldSh0KSkmJihyfHxuPT09VCk/dC5yZXBsYWNlKGF0LFwiXCIpOnQmJihuPVluKG4pKT8odD10Lm1hdGNoKEl0KSxuPVModCxuLm1hdGNoKEl0KSksdXIodCxuKS5qb2luKFwiXCIpKTp0fSxPdC50cnVuY2F0ZT1mdW5jdGlvbih0LG4pe3ZhciByPTMwLGU9XCIuLi5cIjtpZihaZShuKSl2YXIgdT1cInNlcGFyYXRvclwiaW4gbj9uLnNlcGFyYXRvcjp1LHI9XCJsZW5ndGhcImluIG4/WGUobi5sZW5ndGgpOnIsZT1cIm9taXNzaW9uXCJpbiBuP1luKG4ub21pc3Npb24pOmU7dD1ldSh0KTt2YXIgbz10Lmxlbmd0aDtpZihXdC50ZXN0KHQpKXZhciBpPXQubWF0Y2goSXQpLG89aS5sZW5ndGg7aWYocj49bylyZXR1cm4gdDtpZihvPXItTihlKSwxPm8pcmV0dXJuIGU7aWYocj1pP3VyKGksMCxvKS5qb2luKFwiXCIpOnQuc2xpY2UoMCxvKSx1PT09VClyZXR1cm4gcitlO2lmKGkmJihvKz1yLmxlbmd0aC1vKSxLZSh1KSl7aWYodC5zbGljZShvKS5zZWFyY2godSkpe3ZhciBmPXI7Zm9yKHUuZ2xvYmFsfHwodT1tdSh1LnNvdXJjZSxldShfdC5leGVjKHUpKStcImdcIikpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICB1Lmxhc3RJbmRleD0wO2k9dS5leGVjKGYpOyl2YXIgYz1pLmluZGV4O3I9ci5zbGljZSgwLGM9PT1UP286Yyl9fWVsc2UgdC5pbmRleE9mKFluKHUpLG8pIT1vJiYodT1yLmxhc3RJbmRleE9mKHUpLHU+LTEmJihyPXIuc2xpY2UoMCx1KSkpO3JldHVybiByK2V9LE90LnVuZXNjYXBlPWZ1bmN0aW9uKHQpe3JldHVybih0PWV1KHQpKSYmUS50ZXN0KHQpP3QucmVwbGFjZShZLFApOnR9LE90LnVuaXF1ZUlkPWZ1bmN0aW9uKHQpe3ZhciBuPSsrQnU7cmV0dXJuIGV1KHQpK259LE90LnVwcGVyQ2FzZT1UaSxPdC51cHBlckZpcnN0PXFpLE90LmVhY2g9bWUsT3QuZWFjaFJpZ2h0PUFlLE90LmZpcnN0PV9lLHZ1KE90LGZ1bmN0aW9uKCl7dmFyIHQ9e307cmV0dXJuIGhuKE90LGZ1bmN0aW9uKG4scil7V3UuY2FsbChPdC5wcm90b3R5cGUscil8fCh0W3JdPW4pfSksdH0oKSx7Y2hhaW46ZmFsc2V9KSxPdC5WRVJTSU9OPVwiNC4xMy4xXCIsdShcImJpbmQgYmluZEtleSBjdXJyeSBjdXJyeVJpZ2h0IHBhcnRpYWwgcGFydGlhbFJpZ2h0XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKHQpe1xuXHRcdFx0T3RbdF0ucGxhY2Vob2xkZXI9T3R9KSx1KFtcImRyb3BcIixcInRha2VcIl0sZnVuY3Rpb24odCxuKXtVdC5wcm90b3R5cGVbdF09ZnVuY3Rpb24ocil7dmFyIGU9dGhpcy5fX2ZpbHRlcmVkX187aWYoZSYmIW4pcmV0dXJuIG5ldyBVdCh0aGlzKTtyPXI9PT1UPzE6WHUoWGUociksMCk7dmFyIHU9dGhpcy5jbG9uZSgpO3JldHVybiBlP3UuX190YWtlQ291bnRfXz10byhyLHUuX190YWtlQ291bnRfXyk6dS5fX3ZpZXdzX18ucHVzaCh7c2l6ZTp0byhyLDQyOTQ5NjcyOTUpLHR5cGU6dCsoMD51Ll9fZGlyX18/XCJSaWdodFwiOlwiXCIpfSksdX0sVXQucHJvdG90eXBlW3QrXCJSaWdodFwiXT1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5yZXZlcnNlKClbdF0obikucmV2ZXJzZSgpfX0pLHUoW1wiZmlsdGVyXCIsXCJtYXBcIixcInRha2VXaGlsZVwiXSxmdW5jdGlvbih0LG4pe3ZhciByPW4rMSxlPTE9PXJ8fDM9PXI7VXQucHJvdG90eXBlW3RdPWZ1bmN0aW9uKHQpe3ZhciBuPXRoaXMuY2xvbmUoKTtyZXR1cm4gbi5fX2l0ZXJhdGVlc19fLnB1c2goe1xuXHRcdFx0aXRlcmF0ZWU6RnIodCwzKSx0eXBlOnJ9KSxuLl9fZmlsdGVyZWRfXz1uLl9fZmlsdGVyZWRfX3x8ZSxufX0pLHUoW1wiaGVhZFwiLFwibGFzdFwiXSxmdW5jdGlvbih0LG4pe3ZhciByPVwidGFrZVwiKyhuP1wiUmlnaHRcIjpcIlwiKTtVdC5wcm90b3R5cGVbdF09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tyXSgxKS52YWx1ZSgpWzBdfX0pLHUoW1wiaW5pdGlhbFwiLFwidGFpbFwiXSxmdW5jdGlvbih0LG4pe3ZhciByPVwiZHJvcFwiKyhuP1wiXCI6XCJSaWdodFwiKTtVdC5wcm90b3R5cGVbdF09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fX2ZpbHRlcmVkX18/bmV3IFV0KHRoaXMpOnRoaXNbcl0oMSl9fSksVXQucHJvdG90eXBlLmNvbXBhY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5maWx0ZXIocHUpfSxVdC5wcm90b3R5cGUuZmluZD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5maWx0ZXIodCkuaGVhZCgpfSxVdC5wcm90b3R5cGUuZmluZExhc3Q9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMucmV2ZXJzZSgpLmZpbmQodCk7XG5cdFx0fSxVdC5wcm90b3R5cGUuaW52b2tlTWFwPU1lKGZ1bmN0aW9uKHQsbil7cmV0dXJuIHR5cGVvZiB0PT1cImZ1bmN0aW9uXCI/bmV3IFV0KHRoaXMpOnRoaXMubWFwKGZ1bmN0aW9uKHIpe3JldHVybiB3bihyLHQsbil9KX0pLFV0LnByb3RvdHlwZS5yZWplY3Q9ZnVuY3Rpb24odCl7cmV0dXJuIHQ9RnIodCwzKSx0aGlzLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4hdChuKX0pfSxVdC5wcm90b3R5cGUuc2xpY2U9ZnVuY3Rpb24odCxuKXt0PVhlKHQpO3ZhciByPXRoaXM7cmV0dXJuIHIuX19maWx0ZXJlZF9fJiYodD4wfHwwPm4pP25ldyBVdChyKTooMD50P3I9ci50YWtlUmlnaHQoLXQpOnQmJihyPXIuZHJvcCh0KSksbiE9PVQmJihuPVhlKG4pLHI9MD5uP3IuZHJvcFJpZ2h0KC1uKTpyLnRha2Uobi10KSkscil9LFV0LnByb3RvdHlwZS50YWtlUmlnaHRXaGlsZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5yZXZlcnNlKCkudGFrZVdoaWxlKHQpLnJldmVyc2UoKX0sVXQucHJvdG90eXBlLnRvQXJyYXk9ZnVuY3Rpb24oKXtcblx0XHRcdHJldHVybiB0aGlzLnRha2UoNDI5NDk2NzI5NSl9LGhuKFV0LnByb3RvdHlwZSxmdW5jdGlvbih0LG4pe3ZhciByPS9eKD86ZmlsdGVyfGZpbmR8bWFwfHJlamVjdCl8V2hpbGUkLy50ZXN0KG4pLGU9L14oPzpoZWFkfGxhc3QpJC8udGVzdChuKSx1PU90W2U/XCJ0YWtlXCIrKFwibGFzdFwiPT1uP1wiUmlnaHRcIjpcIlwiKTpuXSxvPWV8fC9eZmluZC8udGVzdChuKTt1JiYoT3QucHJvdG90eXBlW25dPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gbih0KXtyZXR1cm4gdD11LmFwcGx5KE90LHMoW3RdLGYpKSxlJiZoP3RbMF06dH12YXIgaT10aGlzLl9fd3JhcHBlZF9fLGY9ZT9bMV06YXJndW1lbnRzLGM9aSBpbnN0YW5jZW9mIFV0LGE9ZlswXSxsPWN8fHlpKGkpO2wmJnImJnR5cGVvZiBhPT1cImZ1bmN0aW9uXCImJjEhPWEubGVuZ3RoJiYoYz1sPWZhbHNlKTt2YXIgaD10aGlzLl9fY2hhaW5fXyxwPSEhdGhpcy5fX2FjdGlvbnNfXy5sZW5ndGgsYT1vJiYhaCxjPWMmJiFwO3JldHVybiFvJiZsPyhpPWM/aTpuZXcgVXQodGhpcyksXG5cdFx0XHRpPXQuYXBwbHkoaSxmKSxpLl9fYWN0aW9uc19fLnB1c2goe2Z1bmM6amUsYXJnczpbbl0sdGhpc0FyZzpUfSksbmV3IHp0KGksaCkpOmEmJmM/dC5hcHBseSh0aGlzLGYpOihpPXRoaXMudGhydShuKSxhP2U/aS52YWx1ZSgpWzBdOmkudmFsdWUoKTppKX0pfSksdShcInBvcCBwdXNoIHNoaWZ0IHNvcnQgc3BsaWNlIHVuc2hpZnRcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24odCl7dmFyIG49T3VbdF0scj0vXig/OnB1c2h8c29ydHx1bnNoaWZ0KSQvLnRlc3QodCk/XCJ0YXBcIjpcInRocnVcIixlPS9eKD86cG9wfHNoaWZ0KSQvLnRlc3QodCk7T3QucHJvdG90eXBlW3RdPWZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzO2lmKGUmJiF0aGlzLl9fY2hhaW5fXyl7dmFyIHU9dGhpcy52YWx1ZSgpO3JldHVybiBuLmFwcGx5KHlpKHUpP3U6W10sdCl9cmV0dXJuIHRoaXNbcl0oZnVuY3Rpb24ocil7cmV0dXJuIG4uYXBwbHkoeWkocik/cjpbXSx0KX0pfX0pLGhuKFV0LnByb3RvdHlwZSxmdW5jdGlvbih0LG4pe1xuXHRcdFx0dmFyIHI9T3Rbbl07aWYocil7dmFyIGU9ci5uYW1lK1wiXCI7KF9vW2VdfHwoX29bZV09W10pKS5wdXNoKHtuYW1lOm4sZnVuYzpyfSl9fSksX29bQXIoVCwyKS5uYW1lXT1be25hbWU6XCJ3cmFwcGVyXCIsZnVuYzpUfV0sVXQucHJvdG90eXBlLmNsb25lPWZ1bmN0aW9uKCl7dmFyIHQ9bmV3IFV0KHRoaXMuX193cmFwcGVkX18pO3JldHVybiB0Ll9fYWN0aW9uc19fPWxyKHRoaXMuX19hY3Rpb25zX18pLHQuX19kaXJfXz10aGlzLl9fZGlyX18sdC5fX2ZpbHRlcmVkX189dGhpcy5fX2ZpbHRlcmVkX18sdC5fX2l0ZXJhdGVlc19fPWxyKHRoaXMuX19pdGVyYXRlZXNfXyksdC5fX3Rha2VDb3VudF9fPXRoaXMuX190YWtlQ291bnRfXyx0Ll9fdmlld3NfXz1scih0aGlzLl9fdmlld3NfXyksdH0sVXQucHJvdG90eXBlLnJldmVyc2U9ZnVuY3Rpb24oKXtpZih0aGlzLl9fZmlsdGVyZWRfXyl7dmFyIHQ9bmV3IFV0KHRoaXMpO3QuX19kaXJfXz0tMSx0Ll9fZmlsdGVyZWRfXz10cnVlfWVsc2UgdD10aGlzLmNsb25lKCksXG5cdFx0XHR0Ll9fZGlyX18qPS0xO3JldHVybiB0fSxVdC5wcm90b3R5cGUudmFsdWU9ZnVuY3Rpb24oKXt2YXIgdCxuPXRoaXMuX193cmFwcGVkX18udmFsdWUoKSxyPXRoaXMuX19kaXJfXyxlPXlpKG4pLHU9MD5yLG89ZT9uLmxlbmd0aDowO3Q9bztmb3IodmFyIGk9dGhpcy5fX3ZpZXdzX18sZj0wLGM9LTEsYT1pLmxlbmd0aDsrK2M8YTspe3ZhciBsPWlbY10scz1sLnNpemU7c3dpdGNoKGwudHlwZSl7Y2FzZVwiZHJvcFwiOmYrPXM7YnJlYWs7Y2FzZVwiZHJvcFJpZ2h0XCI6dC09czticmVhaztjYXNlXCJ0YWtlXCI6dD10byh0LGYrcyk7YnJlYWs7Y2FzZVwidGFrZVJpZ2h0XCI6Zj1YdShmLHQtcyl9fWlmKHQ9e3N0YXJ0OmYsZW5kOnR9LGk9dC5zdGFydCxmPXQuZW5kLHQ9Zi1pLHU9dT9mOmktMSxpPXRoaXMuX19pdGVyYXRlZXNfXyxmPWkubGVuZ3RoLGM9MCxhPXRvKHQsdGhpcy5fX3Rha2VDb3VudF9fKSwhZXx8MjAwPm98fG89PXQmJmE9PXQpcmV0dXJuIFhuKG4sdGhpcy5fX2FjdGlvbnNfXyk7ZT1bXTtcblx0XHRcdHQ6Zm9yKDt0LS0mJmE+Yzspe2Zvcih1Kz1yLG89LTEsbD1uW3VdOysrbzxmOyl7dmFyIGg9aVtvXSxzPWgudHlwZSxoPSgwLGguaXRlcmF0ZWUpKGwpO2lmKDI9PXMpbD1oO2Vsc2UgaWYoIWgpe2lmKDE9PXMpY29udGludWUgdDticmVhayB0fX1lW2MrK109bH1yZXR1cm4gZX0sT3QucHJvdG90eXBlLmF0PVhvLE90LnByb3RvdHlwZS5jaGFpbj1mdW5jdGlvbigpe3JldHVybiB4ZSh0aGlzKX0sT3QucHJvdG90eXBlLmNvbW1pdD1mdW5jdGlvbigpe3JldHVybiBuZXcgenQodGhpcy52YWx1ZSgpLHRoaXMuX19jaGFpbl9fKX0sT3QucHJvdG90eXBlLm5leHQ9ZnVuY3Rpb24oKXt0aGlzLl9fdmFsdWVzX189PT1UJiYodGhpcy5fX3ZhbHVlc19fPUhlKHRoaXMudmFsdWUoKSkpO3ZhciB0PXRoaXMuX19pbmRleF9fPj10aGlzLl9fdmFsdWVzX18ubGVuZ3RoLG49dD9UOnRoaXMuX192YWx1ZXNfX1t0aGlzLl9faW5kZXhfXysrXTtyZXR1cm57ZG9uZTp0LHZhbHVlOm59fSxPdC5wcm90b3R5cGUucGxhbnQ9ZnVuY3Rpb24odCl7XG5cdFx0XHRmb3IodmFyIG4scj10aGlzO3IgaW5zdGFuY2VvZiBrdDspe3ZhciBlPWFlKHIpO2UuX19pbmRleF9fPTAsZS5fX3ZhbHVlc19fPVQsbj91Ll9fd3JhcHBlZF9fPWU6bj1lO3ZhciB1PWUscj1yLl9fd3JhcHBlZF9ffXJldHVybiB1Ll9fd3JhcHBlZF9fPXQsbn0sT3QucHJvdG90eXBlLnJldmVyc2U9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9fd3JhcHBlZF9fO3JldHVybiB0IGluc3RhbmNlb2YgVXQ/KHRoaXMuX19hY3Rpb25zX18ubGVuZ3RoJiYodD1uZXcgVXQodGhpcykpLHQ9dC5yZXZlcnNlKCksdC5fX2FjdGlvbnNfXy5wdXNoKHtmdW5jOmplLGFyZ3M6W2RlXSx0aGlzQXJnOlR9KSxuZXcgenQodCx0aGlzLl9fY2hhaW5fXykpOnRoaXMudGhydShkZSl9LE90LnByb3RvdHlwZS50b0pTT049T3QucHJvdG90eXBlLnZhbHVlT2Y9T3QucHJvdG90eXBlLnZhbHVlPWZ1bmN0aW9uKCl7cmV0dXJuIFhuKHRoaXMuX193cmFwcGVkX18sdGhpcy5fX2FjdGlvbnNfXyl9LFp1JiYoT3QucHJvdG90eXBlW1p1XT13ZSksXG5cdFx0T3R9dmFyIFQscT0xLzAsVj1OYU4sSz0vXFxiX19wXFwrPScnOy9nLEc9L1xcYihfX3BcXCs9KScnXFwrL2csSj0vKF9fZVxcKC4qP1xcKXxcXGJfX3RcXCkpXFwrJyc7L2csWT0vJig/OmFtcHxsdHxndHxxdW90fCMzOXwjOTYpOy9nLEg9L1smPD5cIidgXS9nLFE9UmVnRXhwKFkuc291cmNlKSxYPVJlZ0V4cChILnNvdXJjZSksdHQ9LzwlLShbXFxzXFxTXSs/KSU+L2csbnQ9LzwlKFtcXHNcXFNdKz8pJT4vZyxydD0vPCU9KFtcXHNcXFNdKz8pJT4vZyxldD0vXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqP1xcMSlcXF0vLHV0PS9eXFx3KiQvLG90PS9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PShcXC58XFxbXFxdKSg/OlxcNHwkKSkvZyxpdD0vW1xcXFxeJC4qKz8oKVtcXF17fXxdL2csZnQ9UmVnRXhwKGl0LnNvdXJjZSksY3Q9L15cXHMrfFxccyskL2csYXQ9L15cXHMrLyxsdD0vXFxzKyQvLHN0PS9bYS16QS1aMC05XSsvZyxodD0vXFxcXChcXFxcKT8vZyxwdD0vXFwkXFx7KFteXFxcXH1dKig/OlxcXFwuW15cXFxcfV0qKSopXFx9L2csX3Q9L1xcdyokLyx2dD0vXjB4L2ksZ3Q9L15bLStdMHhbMC05YS1mXSskL2ksZHQ9L14wYlswMV0rJC9pLHl0PS9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC8sYnQ9L14wb1swLTddKyQvaSx4dD0vXig/OjB8WzEtOV1cXGQqKSQvLGp0PS9bXFx4YzAtXFx4ZDZcXHhkOC1cXHhkZVxceGRmLVxceGY2XFx4ZjgtXFx4ZmZdL2csd3Q9LygkXikvLG10PS9bJ1xcblxcclxcdTIwMjhcXHUyMDI5XFxcXF0vZyxBdD1cIltcXFxcdWZlMGVcXFxcdWZlMGZdPyg/OltcXFxcdTAzMDAtXFxcXHUwMzZmXFxcXHVmZTIwLVxcXFx1ZmUyM1xcXFx1MjBkMC1cXFxcdTIwZjBdfFxcXFx1ZDgzY1tcXFxcdWRmZmItXFxcXHVkZmZmXSk/KD86XFxcXHUyMDBkKD86W15cXFxcdWQ4MDAtXFxcXHVkZmZmXXwoPzpcXFxcdWQ4M2NbXFxcXHVkZGU2LVxcXFx1ZGRmZl0pezJ9fFtcXFxcdWQ4MDAtXFxcXHVkYmZmXVtcXFxcdWRjMDAtXFxcXHVkZmZmXSlbXFxcXHVmZTBlXFxcXHVmZTBmXT8oPzpbXFxcXHUwMzAwLVxcXFx1MDM2ZlxcXFx1ZmUyMC1cXFxcdWZlMjNcXFxcdTIwZDAtXFxcXHUyMGYwXXxcXFxcdWQ4M2NbXFxcXHVkZmZiLVxcXFx1ZGZmZl0pPykqXCIsT3Q9XCIoPzpbXFxcXHUyNzAwLVxcXFx1MjdiZl18KD86XFxcXHVkODNjW1xcXFx1ZGRlNi1cXFxcdWRkZmZdKXsyfXxbXFxcXHVkODAwLVxcXFx1ZGJmZl1bXFxcXHVkYzAwLVxcXFx1ZGZmZl0pXCIrQXQsa3Q9XCIoPzpbXlxcXFx1ZDgwMC1cXFxcdWRmZmZdW1xcXFx1MDMwMC1cXFxcdTAzNmZcXFxcdWZlMjAtXFxcXHVmZTIzXFxcXHUyMGQwLVxcXFx1MjBmMF0/fFtcXFxcdTAzMDAtXFxcXHUwMzZmXFxcXHVmZTIwLVxcXFx1ZmUyM1xcXFx1MjBkMC1cXFxcdTIwZjBdfCg/OlxcXFx1ZDgzY1tcXFxcdWRkZTYtXFxcXHVkZGZmXSl7Mn18W1xcXFx1ZDgwMC1cXFxcdWRiZmZdW1xcXFx1ZGMwMC1cXFxcdWRmZmZdfFtcXFxcdWQ4MDAtXFxcXHVkZmZmXSlcIixFdD1SZWdFeHAoXCJbJ1xcdTIwMTldXCIsXCJnXCIpLFN0PVJlZ0V4cChcIltcXFxcdTAzMDAtXFxcXHUwMzZmXFxcXHVmZTIwLVxcXFx1ZmUyM1xcXFx1MjBkMC1cXFxcdTIwZjBdXCIsXCJnXCIpLEl0PVJlZ0V4cChcIlxcXFx1ZDgzY1tcXFxcdWRmZmItXFxcXHVkZmZmXSg/PVxcXFx1ZDgzY1tcXFxcdWRmZmItXFxcXHVkZmZmXSl8XCIra3QrQXQsXCJnXCIpLFJ0PVJlZ0V4cChbXCJbQS1aXFxcXHhjMC1cXFxceGQ2XFxcXHhkOC1cXFxceGRlXT9bYS16XFxcXHhkZi1cXFxceGY2XFxcXHhmOC1cXFxceGZmXSsoPzpbJ1xcdTIwMTldKD86ZHxsbHxtfHJlfHN8dHx2ZSkpPyg/PVtcXFxceGFjXFxcXHhiMVxcXFx4ZDdcXFxceGY3XFxcXHgwMC1cXFxceDJmXFxcXHgzYS1cXFxceDQwXFxcXHg1Yi1cXFxceDYwXFxcXHg3Yi1cXFxceGJmXFxcXHUyMDAwLVxcXFx1MjA2ZiBcXFxcdFxcXFx4MGJcXFxcZlxcXFx4YTBcXFxcdWZlZmZcXFxcblxcXFxyXFxcXHUyMDI4XFxcXHUyMDI5XFxcXHUxNjgwXFxcXHUxODBlXFxcXHUyMDAwXFxcXHUyMDAxXFxcXHUyMDAyXFxcXHUyMDAzXFxcXHUyMDA0XFxcXHUyMDA1XFxcXHUyMDA2XFxcXHUyMDA3XFxcXHUyMDA4XFxcXHUyMDA5XFxcXHUyMDBhXFxcXHUyMDJmXFxcXHUyMDVmXFxcXHUzMDAwXXxbQS1aXFxcXHhjMC1cXFxceGQ2XFxcXHhkOC1cXFxceGRlXXwkKXwoPzpbQS1aXFxcXHhjMC1cXFxceGQ2XFxcXHhkOC1cXFxceGRlXXxbXlxcXFx1ZDgwMC1cXFxcdWRmZmZcXFxceGFjXFxcXHhiMVxcXFx4ZDdcXFxceGY3XFxcXHgwMC1cXFxceDJmXFxcXHgzYS1cXFxceDQwXFxcXHg1Yi1cXFxceDYwXFxcXHg3Yi1cXFxceGJmXFxcXHUyMDAwLVxcXFx1MjA2ZiBcXFxcdFxcXFx4MGJcXFxcZlxcXFx4YTBcXFxcdWZlZmZcXFxcblxcXFxyXFxcXHUyMDI4XFxcXHUyMDI5XFxcXHUxNjgwXFxcXHUxODBlXFxcXHUyMDAwXFxcXHUyMDAxXFxcXHUyMDAyXFxcXHUyMDAzXFxcXHUyMDA0XFxcXHUyMDA1XFxcXHUyMDA2XFxcXHUyMDA3XFxcXHUyMDA4XFxcXHUyMDA5XFxcXHUyMDBhXFxcXHUyMDJmXFxcXHUyMDVmXFxcXHUzMDAwXFxcXGQrXFxcXHUyNzAwLVxcXFx1MjdiZmEtelxcXFx4ZGYtXFxcXHhmNlxcXFx4ZjgtXFxcXHhmZkEtWlxcXFx4YzAtXFxcXHhkNlxcXFx4ZDgtXFxcXHhkZV0pKyg/OlsnXFx1MjAxOV0oPzpEfExMfE18UkV8U3xUfFZFKSk/KD89W1xcXFx4YWNcXFxceGIxXFxcXHhkN1xcXFx4ZjdcXFxceDAwLVxcXFx4MmZcXFxceDNhLVxcXFx4NDBcXFxceDViLVxcXFx4NjBcXFxceDdiLVxcXFx4YmZcXFxcdTIwMDAtXFxcXHUyMDZmIFxcXFx0XFxcXHgwYlxcXFxmXFxcXHhhMFxcXFx1ZmVmZlxcXFxuXFxcXHJcXFxcdTIwMjhcXFxcdTIwMjlcXFxcdTE2ODBcXFxcdTE4MGVcXFxcdTIwMDBcXFxcdTIwMDFcXFxcdTIwMDJcXFxcdTIwMDNcXFxcdTIwMDRcXFxcdTIwMDVcXFxcdTIwMDZcXFxcdTIwMDdcXFxcdTIwMDhcXFxcdTIwMDlcXFxcdTIwMGFcXFxcdTIwMmZcXFxcdTIwNWZcXFxcdTMwMDBdfFtBLVpcXFxceGMwLVxcXFx4ZDZcXFxceGQ4LVxcXFx4ZGVdKD86W2EtelxcXFx4ZGYtXFxcXHhmNlxcXFx4ZjgtXFxcXHhmZl18W15cXFxcdWQ4MDAtXFxcXHVkZmZmXFxcXHhhY1xcXFx4YjFcXFxceGQ3XFxcXHhmN1xcXFx4MDAtXFxcXHgyZlxcXFx4M2EtXFxcXHg0MFxcXFx4NWItXFxcXHg2MFxcXFx4N2ItXFxcXHhiZlxcXFx1MjAwMC1cXFxcdTIwNmYgXFxcXHRcXFxceDBiXFxcXGZcXFxceGEwXFxcXHVmZWZmXFxcXG5cXFxcclxcXFx1MjAyOFxcXFx1MjAyOVxcXFx1MTY4MFxcXFx1MTgwZVxcXFx1MjAwMFxcXFx1MjAwMVxcXFx1MjAwMlxcXFx1MjAwM1xcXFx1MjAwNFxcXFx1MjAwNVxcXFx1MjAwNlxcXFx1MjAwN1xcXFx1MjAwOFxcXFx1MjAwOVxcXFx1MjAwYVxcXFx1MjAyZlxcXFx1MjA1ZlxcXFx1MzAwMFxcXFxkK1xcXFx1MjcwMC1cXFxcdTI3YmZhLXpcXFxceGRmLVxcXFx4ZjZcXFxceGY4LVxcXFx4ZmZBLVpcXFxceGMwLVxcXFx4ZDZcXFxceGQ4LVxcXFx4ZGVdKXwkKXxbQS1aXFxcXHhjMC1cXFxceGQ2XFxcXHhkOC1cXFxceGRlXT8oPzpbYS16XFxcXHhkZi1cXFxceGY2XFxcXHhmOC1cXFxceGZmXXxbXlxcXFx1ZDgwMC1cXFxcdWRmZmZcXFxceGFjXFxcXHhiMVxcXFx4ZDdcXFxceGY3XFxcXHgwMC1cXFxceDJmXFxcXHgzYS1cXFxceDQwXFxcXHg1Yi1cXFxceDYwXFxcXHg3Yi1cXFxceGJmXFxcXHUyMDAwLVxcXFx1MjA2ZiBcXFxcdFxcXFx4MGJcXFxcZlxcXFx4YTBcXFxcdWZlZmZcXFxcblxcXFxyXFxcXHUyMDI4XFxcXHUyMDI5XFxcXHUxNjgwXFxcXHUxODBlXFxcXHUyMDAwXFxcXHUyMDAxXFxcXHUyMDAyXFxcXHUyMDAzXFxcXHUyMDA0XFxcXHUyMDA1XFxcXHUyMDA2XFxcXHUyMDA3XFxcXHUyMDA4XFxcXHUyMDA5XFxcXHUyMDBhXFxcXHUyMDJmXFxcXHUyMDVmXFxcXHUzMDAwXFxcXGQrXFxcXHUyNzAwLVxcXFx1MjdiZmEtelxcXFx4ZGYtXFxcXHhmNlxcXFx4ZjgtXFxcXHhmZkEtWlxcXFx4YzAtXFxcXHhkNlxcXFx4ZDgtXFxcXHhkZV0pKyg/OlsnXFx1MjAxOV0oPzpkfGxsfG18cmV8c3x0fHZlKSk/fFtBLVpcXFxceGMwLVxcXFx4ZDZcXFxceGQ4LVxcXFx4ZGVdKyg/OlsnXFx1MjAxOV0oPzpEfExMfE18UkV8U3xUfFZFKSk/fFxcXFxkK1wiLE90XS5qb2luKFwifFwiKSxcImdcIiksV3Q9UmVnRXhwKFwiW1xcXFx1MjAwZFxcXFx1ZDgwMC1cXFxcdWRmZmZcXFxcdTAzMDAtXFxcXHUwMzZmXFxcXHVmZTIwLVxcXFx1ZmUyM1xcXFx1MjBkMC1cXFxcdTIwZjBcXFxcdWZlMGVcXFxcdWZlMGZdXCIpLEJ0PS9bYS16XVtBLVpdfFtBLVpdezIsfVthLXpdfFswLTldW2EtekEtWl18W2EtekEtWl1bMC05XXxbXmEtekEtWjAtOSBdLyxMdD1cIkFycmF5IEJ1ZmZlciBEYXRhVmlldyBEYXRlIEVycm9yIEZsb2F0MzJBcnJheSBGbG9hdDY0QXJyYXkgRnVuY3Rpb24gSW50OEFycmF5IEludDE2QXJyYXkgSW50MzJBcnJheSBNYXAgTWF0aCBPYmplY3QgUHJvbWlzZSBSZWZsZWN0IFJlZ0V4cCBTZXQgU3RyaW5nIFN5bWJvbCBUeXBlRXJyb3IgVWludDhBcnJheSBVaW50OENsYW1wZWRBcnJheSBVaW50MTZBcnJheSBVaW50MzJBcnJheSBXZWFrTWFwIF8gaXNGaW5pdGUgcGFyc2VJbnQgc2V0VGltZW91dFwiLnNwbGl0KFwiIFwiKSxNdD17fTtcblx0TXRbXCJbb2JqZWN0IEZsb2F0MzJBcnJheV1cIl09TXRbXCJbb2JqZWN0IEZsb2F0NjRBcnJheV1cIl09TXRbXCJbb2JqZWN0IEludDhBcnJheV1cIl09TXRbXCJbb2JqZWN0IEludDE2QXJyYXldXCJdPU10W1wiW29iamVjdCBJbnQzMkFycmF5XVwiXT1NdFtcIltvYmplY3QgVWludDhBcnJheV1cIl09TXRbXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiXT1NdFtcIltvYmplY3QgVWludDE2QXJyYXldXCJdPU10W1wiW29iamVjdCBVaW50MzJBcnJheV1cIl09dHJ1ZSxNdFtcIltvYmplY3QgQXJndW1lbnRzXVwiXT1NdFtcIltvYmplY3QgQXJyYXldXCJdPU10W1wiW29iamVjdCBBcnJheUJ1ZmZlcl1cIl09TXRbXCJbb2JqZWN0IEJvb2xlYW5dXCJdPU10W1wiW29iamVjdCBEYXRhVmlld11cIl09TXRbXCJbb2JqZWN0IERhdGVdXCJdPU10W1wiW29iamVjdCBFcnJvcl1cIl09TXRbXCJbb2JqZWN0IEZ1bmN0aW9uXVwiXT1NdFtcIltvYmplY3QgTWFwXVwiXT1NdFtcIltvYmplY3QgTnVtYmVyXVwiXT1NdFtcIltvYmplY3QgT2JqZWN0XVwiXT1NdFtcIltvYmplY3QgUmVnRXhwXVwiXT1NdFtcIltvYmplY3QgU2V0XVwiXT1NdFtcIltvYmplY3QgU3RyaW5nXVwiXT1NdFtcIltvYmplY3QgV2Vha01hcF1cIl09ZmFsc2U7XG5cdHZhciBDdD17fTtDdFtcIltvYmplY3QgQXJndW1lbnRzXVwiXT1DdFtcIltvYmplY3QgQXJyYXldXCJdPUN0W1wiW29iamVjdCBBcnJheUJ1ZmZlcl1cIl09Q3RbXCJbb2JqZWN0IERhdGFWaWV3XVwiXT1DdFtcIltvYmplY3QgQm9vbGVhbl1cIl09Q3RbXCJbb2JqZWN0IERhdGVdXCJdPUN0W1wiW29iamVjdCBGbG9hdDMyQXJyYXldXCJdPUN0W1wiW29iamVjdCBGbG9hdDY0QXJyYXldXCJdPUN0W1wiW29iamVjdCBJbnQ4QXJyYXldXCJdPUN0W1wiW29iamVjdCBJbnQxNkFycmF5XVwiXT1DdFtcIltvYmplY3QgSW50MzJBcnJheV1cIl09Q3RbXCJbb2JqZWN0IE1hcF1cIl09Q3RbXCJbb2JqZWN0IE51bWJlcl1cIl09Q3RbXCJbb2JqZWN0IE9iamVjdF1cIl09Q3RbXCJbb2JqZWN0IFJlZ0V4cF1cIl09Q3RbXCJbb2JqZWN0IFNldF1cIl09Q3RbXCJbb2JqZWN0IFN0cmluZ11cIl09Q3RbXCJbb2JqZWN0IFN5bWJvbF1cIl09Q3RbXCJbb2JqZWN0IFVpbnQ4QXJyYXldXCJdPUN0W1wiW29iamVjdCBVaW50OENsYW1wZWRBcnJheV1cIl09Q3RbXCJbb2JqZWN0IFVpbnQxNkFycmF5XVwiXT1DdFtcIltvYmplY3QgVWludDMyQXJyYXldXCJdPXRydWUsXG5cdFx0Q3RbXCJbb2JqZWN0IEVycm9yXVwiXT1DdFtcIltvYmplY3QgRnVuY3Rpb25dXCJdPUN0W1wiW29iamVjdCBXZWFrTWFwXVwiXT1mYWxzZTt2YXIgenQ9e1wiXFx4YzBcIjpcIkFcIixcIlxceGMxXCI6XCJBXCIsXCJcXHhjMlwiOlwiQVwiLFwiXFx4YzNcIjpcIkFcIixcIlxceGM0XCI6XCJBXCIsXCJcXHhjNVwiOlwiQVwiLFwiXFx4ZTBcIjpcImFcIixcIlxceGUxXCI6XCJhXCIsXCJcXHhlMlwiOlwiYVwiLFwiXFx4ZTNcIjpcImFcIixcIlxceGU0XCI6XCJhXCIsXCJcXHhlNVwiOlwiYVwiLFwiXFx4YzdcIjpcIkNcIixcIlxceGU3XCI6XCJjXCIsXCJcXHhkMFwiOlwiRFwiLFwiXFx4ZjBcIjpcImRcIixcIlxceGM4XCI6XCJFXCIsXCJcXHhjOVwiOlwiRVwiLFwiXFx4Y2FcIjpcIkVcIixcIlxceGNiXCI6XCJFXCIsXCJcXHhlOFwiOlwiZVwiLFwiXFx4ZTlcIjpcImVcIixcIlxceGVhXCI6XCJlXCIsXCJcXHhlYlwiOlwiZVwiLFwiXFx4Y2NcIjpcIklcIixcIlxceGNkXCI6XCJJXCIsXCJcXHhjZVwiOlwiSVwiLFwiXFx4Y2ZcIjpcIklcIixcIlxceGVjXCI6XCJpXCIsXCJcXHhlZFwiOlwiaVwiLFwiXFx4ZWVcIjpcImlcIixcIlxceGVmXCI6XCJpXCIsXCJcXHhkMVwiOlwiTlwiLFwiXFx4ZjFcIjpcIm5cIixcIlxceGQyXCI6XCJPXCIsXCJcXHhkM1wiOlwiT1wiLFwiXFx4ZDRcIjpcIk9cIixcIlxceGQ1XCI6XCJPXCIsXCJcXHhkNlwiOlwiT1wiLFxuXHRcdFwiXFx4ZDhcIjpcIk9cIixcIlxceGYyXCI6XCJvXCIsXCJcXHhmM1wiOlwib1wiLFwiXFx4ZjRcIjpcIm9cIixcIlxceGY1XCI6XCJvXCIsXCJcXHhmNlwiOlwib1wiLFwiXFx4ZjhcIjpcIm9cIixcIlxceGQ5XCI6XCJVXCIsXCJcXHhkYVwiOlwiVVwiLFwiXFx4ZGJcIjpcIlVcIixcIlxceGRjXCI6XCJVXCIsXCJcXHhmOVwiOlwidVwiLFwiXFx4ZmFcIjpcInVcIixcIlxceGZiXCI6XCJ1XCIsXCJcXHhmY1wiOlwidVwiLFwiXFx4ZGRcIjpcIllcIixcIlxceGZkXCI6XCJ5XCIsXCJcXHhmZlwiOlwieVwiLFwiXFx4YzZcIjpcIkFlXCIsXCJcXHhlNlwiOlwiYWVcIixcIlxceGRlXCI6XCJUaFwiLFwiXFx4ZmVcIjpcInRoXCIsXCJcXHhkZlwiOlwic3NcIn0sVXQ9e1wiJlwiOlwiJmFtcDtcIixcIjxcIjpcIiZsdDtcIixcIj5cIjpcIiZndDtcIiwnXCInOlwiJnF1b3Q7XCIsXCInXCI6XCImIzM5O1wiLFwiYFwiOlwiJiM5NjtcIn0sJHQ9e1wiJmFtcDtcIjpcIiZcIixcIiZsdDtcIjpcIjxcIixcIiZndDtcIjpcIj5cIixcIiZxdW90O1wiOidcIicsXCImIzM5O1wiOlwiJ1wiLFwiJiM5NjtcIjpcImBcIn0sRHQ9e1wiXFxcXFwiOlwiXFxcXFwiLFwiJ1wiOlwiJ1wiLFwiXFxuXCI6XCJuXCIsXCJcXHJcIjpcInJcIixcIlxcdTIwMjhcIjpcInUyMDI4XCIsXCJcXHUyMDI5XCI6XCJ1MjAyOVwifSxGdD1wYXJzZUZsb2F0LE50PXBhcnNlSW50LFB0PXR5cGVvZiBleHBvcnRzPT1cIm9iamVjdFwiJiZleHBvcnRzLFp0PVB0JiZ0eXBlb2YgbW9kdWxlPT1cIm9iamVjdFwiJiZtb2R1bGUsVHQ9WnQmJlp0LmV4cG9ydHM9PT1QdCxxdD1SKHR5cGVvZiBzZWxmPT1cIm9iamVjdFwiJiZzZWxmKSxWdD1SKHR5cGVvZiB0aGlzPT1cIm9iamVjdFwiJiZ0aGlzKSxLdD1SKHR5cGVvZiBnbG9iYWw9PVwib2JqZWN0XCImJmdsb2JhbCl8fHF0fHxWdHx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLEd0PVooKTtcblx0KHF0fHx7fSkuXz1HdCx0eXBlb2YgZGVmaW5lPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBkZWZpbmUuYW1kPT1cIm9iamVjdFwiJiZkZWZpbmUuYW1kPyBkZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gR3R9KTpadD8oKFp0LmV4cG9ydHM9R3QpLl89R3QsUHQuXz1HdCk6S3QuXz1HdH0pLmNhbGwodGhpcyk7IiwiKGZ1bmN0aW9uKCkge1xuXHR2YXIgaXNOb2RlID0gdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzICE9PSAndW5kZWZpbmVkJztcblxuXHR2YXIgXyA9IHJlcXVpcmUoJy4vbGliL2xvZGFzaC5taW4nKS5fO1xuXG5cdHZhciBVdGlscyA9IHt9O1xuXG5cdFV0aWxzLkxvZyA9IGNvbnNvbGU7XG5cblx0VXRpbHMuX3V0aWxGaWxlcyA9IHt9O1xuXHRVdGlscy5tb2R1bGVzID0ge307XG5cblx0VXRpbHMucnVuc09uTm9kZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT09ICd1bmRlZmluZWQnO1xuXHR9O1xuXG5cdFV0aWxzLmV4dGVuZFV0aWxzID0gZnVuY3Rpb24gKGV4dGVuZCwgb3ZlcndyaXRlLCBpZ25vcmUpIHtcblx0XHRpZiAodHlwZW9mKGV4dGVuZCkgIT09ICdvYmplY3QnICYmIHR5cGVvZihleHRlbmQpICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRVdGlscy5Mb2cuZXJyb3IoXCJDb3VsZCBub3QgZXh0ZW5kIHV0aWxzLiBFeHRlbnNpb24gbXVzdCBiZSBvYmplY3Qgb3IgZnVuY3Rpb24uXCIpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoIUFycmF5LmlzQXJyYXkob3ZlcndyaXRlKSkge1xuXHRcdFx0b3ZlcndyaXRlID0gW107XG5cdFx0fVxuXHRcdGlmICghQXJyYXkuaXNBcnJheShpZ25vcmUpKSB7XG5cdFx0XHRpZ25vcmUgPSBbXTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpIGluIGV4dGVuZCkge1xuXHRcdFx0aWYgKGlnbm9yZS5pbmRleE9mKGkpID49IDApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaSBpbiBVdGlscyAmJiBvdmVyd3JpdGUuaW5kZXhPZihpKSA8IDApIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIidcIiArIGkgKyBcIicgYWxyZWFkeSBkZWZpbmVkIGluIFV0aWxzLlwiKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRVdGlsc1tpXSA9IGV4dGVuZFtpXTtcblx0XHR9XG5cdH07XG5cblx0Ly8gU3RhbmRhcmQgZXh0ZW5zaW9uIG9mIGxvZGFzaC91bmRlcnNjb3JlXG5cdGlmICh0eXBlb2Yod2luZG93Ll8pID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0VXRpbHMuZXh0ZW5kVXRpbHMod2luZG93Ll8sIFsndG9TdHJpbmcnXSk7XG5cdH1cblxuXHRVdGlscy5zZXRMb2dnZXIgPSBmdW5jdGlvbiAobG9nZ2VyKSB7XG5cdFx0VXRpbHMuTG9nID0gbG9nZ2VyO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBFeHBvcnRzIHRoZSBnaXZlbiB2YWx1ZSBlaXRoZXIgdG8gdGhlIGJyb3dzZXIgd2luZG93IG9iamVjdCBvciB0byB0aGUgbm9kZS5qcyBtb2R1bGUgb2JqZWN0LlxuXHQgKiBAcGFyYW0gbmFtZVxuXHQgKiBAcGFyYW0gdmFsdWVcblx0ICovXG5cdFV0aWxzLmV4cG9ydCA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuXHRcdFV0aWxzLm1vZHVsZXNbbmFtZV0gPSB2YWx1ZTtcblx0fTtcblxuXG5cdC8vIEV4cG9ydCBVdGlsc1xuXHRpZiAoaXNOb2RlKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMuVXRpbHMgPSBVdGlscztcblx0fVxuXHRlbHNlIHtcblx0XHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0XHRkZWZpbmUoW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIFV0aWxzO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0d2luZG93LlV0aWxzID0gVXRpbHM7XG5cdFx0fVxuXHR9XG59KSgpOyIsIihmdW5jdGlvbigpIHtcblx0dmFyIGlzTm9kZSA9IHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCc7XG5cdHZhciBVdGlscyA9IGlzTm9kZSA/IHJlcXVpcmUoJy4uL3V0aWxzLWNvcmUnKS5VdGlscyA6IHdpbmRvdy5VdGlscztcblx0aWYoIVV0aWxzKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIlV0aWxzQ29yZSBub3QgbG9hZGVkLlwiKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR2YXIgRE9NID0ge307XG5cblx0RE9NLmdldFNlbGVjdGVkVGV4dCA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB0eHQgPSAnJztcblx0XHRpZiAod2luZG93LmdldFNlbGVjdGlvbilcblx0XHR7XG5cdFx0XHR0eHQgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKGRvY3VtZW50LmdldFNlbGVjdGlvbilcblx0XHR7XG5cdFx0XHR0eHQgPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uKVxuXHRcdHtcblx0XHRcdHR4dCA9IGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpLnRleHQ7XG5cdFx0fVxuXHRcdGVsc2UgcmV0dXJuO1xuXHRcdGRvY3VtZW50LmFmb3JtLnNlbGVjdGVkdGV4dC52YWx1ZSA9ICB0eHQ7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMuRE9NID0gRE9NO1xufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcblx0dmFyIGlzTm9kZSA9IHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCc7XG5cdHZhciBVdGlscyA9IGlzTm9kZSA/IHJlcXVpcmUoJy4uL3V0aWxzLWNvcmUnKS5VdGlscyA6IHdpbmRvdy5VdGlscztcblx0aWYoIVV0aWxzKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIlV0aWxzQ29yZSBub3QgbG9hZGVkLlwiKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtvYmplY3R8c3RyaW5nfSBzcGVjc1x0XHRcdCBFcnJvciBtZXNzYWdlIG9yIHNwZWNzLlxuXHQgKiBAcGFyYW0ge1V0aWxzLkVycm9yfSBbb3JpZ2luYWxFcnJvcl1cdCBPcmlnaW5hbCBlcnJvciBtZXNzYWdlIChvbmx5IGlmIGZpcnN0IGFyZ3VtZW50IHdhcyBzdHJpbmcpLlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdFV0aWxzLkVycm9yID0gZnVuY3Rpb24oc3BlY3MsIG9yaWdpbmFsRXJyb3IpIHtcblx0XHRpZihVdGlscy5pc1N0cmluZyhzcGVjcykpIHtcblx0XHRcdHNwZWNzID0ge1xuXHRcdFx0XHRtZXNzYWdlOiBzcGVjc1xuXHRcdFx0fTtcblx0XHRcdGlmKG9yaWdpbmFsRXJyb3IgaW5zdGFuY2VvZiBVdGlscy5FcnJvcikge1xuXHRcdFx0XHRzcGVjcy5vcmlnaW5hbEVycm9yID0gb3JpZ2luYWxFcnJvcjtcblx0XHRcdH1cblx0XHR9XG5cdFx0c3BlY3MgPSBzcGVjcyB8fCB7fTtcblxuXHRcdHRoaXMubWVzc2FnZVx0XHQ9IHNwZWNzLm1lc3NhZ2U7XG5cdFx0dGhpcy5vcmlnaW5hbEVycm9yICA9IHNwZWNzLm9yaWdpbmFsRXJyb3I7XG5cdFx0dGhpcy5lcnJvck1hcFx0ICAgPSBzcGVjcy5lcnJvck1hcDtcblx0XHR0aGlzLmNvZGVcdFx0ICAgPSBzcGVjcy5jb2RlO1xuXHRcdHRoaXMuZGF0YVx0XHQgICA9IHNwZWNzLmRhdGE7XG5cdFx0Ly90aGlzLm9yaWdpblx0XHQgPSBVdGlscy5VdGlscy5nZXRDYWxsZXIoMik7XG5cdFx0Ly90aGlzLnN0YWNrXHRcdCAgPSBVdGlscy5VdGlscy5nZXRTdGFja1RyYWNlKDEsIDEwKTtcblx0XHR0aGlzLnB1YmxpY1x0XHRcdD0gc3BlY3MucHVibGljIHx8IHRydWU7XG5cdH07XG5cblx0VXRpbHMuRXJyb3IucHJvdG90eXBlLmxvZyA9IFV0aWxzLkxvZztcblxuXHRVdGlscy5FcnJvci5wcm90b3R5cGUubWVzc2FnZSA9ICdBbiBlcnJvciBvY2N1cnJlZC4nO1xuXHRVdGlscy5FcnJvci5wcm90b3R5cGUub3JpZ2luYWxFcnJvciA9IHVuZGVmaW5lZDtcblx0VXRpbHMuRXJyb3IucHJvdG90eXBlLmVycm9yTWFwID0gdW5kZWZpbmVkO1xuXHRVdGlscy5FcnJvci5wcm90b3R5cGUuY29kZSA9IHVuZGVmaW5lZDtcblx0VXRpbHMuRXJyb3IucHJvdG90eXBlLmRhdGEgPSB1bmRlZmluZWQ7XG5cdFV0aWxzLkVycm9yLnByb3RvdHlwZS5vcmlnaW4gPSB1bmRlZmluZWQ7XG5cdFV0aWxzLkVycm9yLnByb3RvdHlwZS5zdGFjayA9IHVuZGVmaW5lZDtcblxuXHRVdGlscy5FcnJvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5tZXNzYWdlO1xuXHR9O1xuXHRVdGlscy5FcnJvci5wcm90b3R5cGUuZ2V0TWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLm1lc3NhZ2U7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMuRXJyb3IgPSBVdGlscy5FcnJvcjtcbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG5cdHZhciBpc05vZGUgPSB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT09ICd1bmRlZmluZWQnO1xuXHR2YXIgVXRpbHMgPSBpc05vZGUgPyByZXF1aXJlKCcuLi91dGlscy1jb3JlJykuVXRpbHMgOiB3aW5kb3cuVXRpbHM7XG5cdGlmKCFVdGlscykge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJVdGlsc0NvcmUgbm90IGxvYWRlZC5cIik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0dmFyIFN0ciA9IHt9O1xuXG5cdFN0ci5wbHVyYWwgPSBmdW5jdGlvbihzdHJpbmcpIHtcblx0XHRpZighVXRpbHMuaXNTdHJpbmcoc3RyaW5nKSkge1xuXHRcdFx0cmV0dXJuIFwidGhpbmdzXCI7XG5cdFx0fVxuXG5cdFx0Ly8gQ292ZXJzIHNvbWUgaXJyZWd1bGFyIHBsdXJhbHNcblx0XHRpZihzdHJpbmcuc2xpY2UoLTEpID09PSAncycgfHwgc3RyaW5nLnNsaWNlKC0yKSA9PT0gJ3NoJykge1xuXHRcdFx0cmV0dXJuIHN0cmluZyArICdlcyc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0cmluZyArICdzJztcblx0fTtcblxuXHRTdHIuY2FwaXRhbGlzZUZpcnN0ID0gZnVuY3Rpb24gKHMpIHtcblx0XHRpZiAoIVV0aWxzLmlzU3RyaW5nKHMpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG5cdH07XG5cblx0U3RyLmRvdFN0cmluZyA9IGZ1bmN0aW9uKG51bWJlcikge1xuXHRcdGlmKCFVdGlscy5pc051bWJlcihudW1iZXIpKSB7XG5cdFx0XHRyZXR1cm4gXCJcIjtcblx0XHR9XG5cdFx0dmFyIHN0ciA9IFwiXCI7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG51bWJlcjsgaSsrKSB7XG5cdFx0XHRzdHIgKz0gJy4nO1xuXHRcdH1cblx0XHRyZXR1cm4gc3RyO1xuXHR9O1xuXG5cdFN0ci50cnVuY2F0ZVN0cmluZyA9IGZ1bmN0aW9uKHN0ciwgbWF4TGVuZ3RoKSB7XG5cdFx0aWYgKCFVdGlscy5pc1N0cmluZyhzdHIpKSB7XG5cdFx0XHRyZXR1cm4gc3RyO1xuXHRcdH1cblxuXHRcdGlmKHN0ci5sZW5ndGggPiAzICYmIHN0ci5sZW5ndGggPiBtYXhMZW5ndGgtMykge1xuXHRcdFx0cmV0dXJuIHN0ci5zdWJzdHJpbmcoMCwgbWF4TGVuZ3RoLTMpICsgJy4uLic7XG5cdFx0fVxuXHRcdHJldHVybiBzdHI7XG5cdH07XG5cblx0U3RyLm9iamVjdFRvU3RyaW5nID0gZnVuY3Rpb24odmFsdWUsIG1heExlbmd0aCkge1xuXHRcdGlmKG1heExlbmd0aCA8PSAwKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHRcdGlmKG1heExlbmd0aCA9PT0gMSkge1xuXHRcdFx0cmV0dXJuICd7J1xuXHRcdH1cblx0XHRpZihtYXhMZW5ndGggPD0gNSkge1xuXHRcdFx0aWYoT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gJ3t9Jztcblx0XHRcdH1cblx0XHRcdHJldHVybiAneycgKyBVdGlscy5kb3RTdHJpbmcobWF4TGVuZ3RoLTIpICsgJ30nO1xuXHRcdH1cblx0XHR2YXIgc3RyID0gXCJ7XCI7XG5cdFx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cdFx0dmFyIGxhc3RLZXkgPSBrZXlzW2tleXMubGVuZ3RoLTFdO1xuXHRcdHZhciBrZXlDb3VudCA9IDA7XG5cdFx0Zm9yKHZhciBpIGluIHZhbHVlKSB7XG5cdFx0XHR2YXIgY29tbWFDb3VudCA9IHN0ci5sZW5ndGggPT09IDEgPyAwIDogMTtcblx0XHRcdHZhciBkb3RDb3VudCA9IGkgPT09IGxhc3RLZXkgPyAwIDogNDtcblx0XHRcdHZhciBrZXlWYWx1ZSA9IFV0aWxzLnZhbHVlVG9TdHJpbmcodmFsdWVbaV0sIDcpO1xuXHRcdFx0aWYoc3RyLmxlbmd0aCArIGNvbW1hQ291bnQgKyBpLmxlbmd0aCArIDEgKyBrZXlWYWx1ZS5sZW5ndGggKyBkb3RDb3VudCA8IG1heExlbmd0aCkge1xuXHRcdFx0XHRpZihzdHIubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdHN0ciArPSAnLCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RyICs9IGkgKyBcIjpcIiArIGtleVZhbHVlO1xuXHRcdFx0XHRrZXlDb3VudCsrO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGtleUNvdW50IDwga2V5cy5sZW5ndGgpIHtcblx0XHRcdGlmKHN0ci5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdHN0ciArPSAnLCc7XG5cdFx0XHR9XG5cdFx0XHRzdHIgKz0gVXRpbHMuZG90U3RyaW5nKE1hdGgubWluKDMsIG1heExlbmd0aCAtIHN0ci5sZW5ndGggLSAxKSk7XG5cdFx0fVxuXHRcdHN0ciArPSBcIn1cIjtcblx0XHRyZXR1cm4gc3RyO1xuXHR9O1xuXG5cdFN0ci5hcnJheVRvU3RyaW5nID0gZnVuY3Rpb24odmFsdWUsIG1heExlbmd0aCkge1xuXHRcdGlmKG1heExlbmd0aCA8PSAwKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHRcdGlmKG1heExlbmd0aCA9PT0gMSkge1xuXHRcdFx0cmV0dXJuICdbJztcblx0XHR9XG5cdFx0dmFyIGNvdW50Q291bnQgPSAyICsgKFwiXCIrdmFsdWUubGVuZ3RoKS5sZW5ndGg7XG5cdFx0aWYobWF4TGVuZ3RoIDw9IDUgKyBjb3VudENvdW50KSB7XG5cdFx0XHRpZih2YWx1ZS5sZW5ndGggPT09IDApIHJldHVybiAnW10nO1xuXHRcdFx0cmV0dXJuICdbJyArIFV0aWxzLmRvdFN0cmluZyhNYXRoLm1pbigzLCBtYXhMZW5ndGgtMikpICsgJ10nXG5cdFx0fVxuXHRcdHZhciBzdHIgPSAnWyc7XG5cdFx0dmFyIGtleUNvdW50ID0gMDtcblx0XHRmb3IodmFyIGkgPSAwOyBpPHZhbHVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbVZhbHVlID0gVXRpbHMudmFsdWVUb1N0cmluZyh2YWx1ZVtpXSwgNyk7XG5cdFx0XHR2YXIgZG90Q291bnQgPSBpIDwgdmFsdWUubGVuZ3RoLTEgPyA0IDogMDtcblx0XHRcdHZhciBjb21tYUNvdW50ID0gaSA9PT0gMCA/IDAgOiAxO1xuXHRcdFx0aWYoc3RyLmxlbmd0aCArIGNvbW1hQ291bnQgKyBpdGVtVmFsdWUubGVuZ3RoICsgZG90Q291bnQgKyBjb3VudENvdW50IDwgbWF4TGVuZ3RoKSB7XG5cdFx0XHRcdGlmKGkgIT09IDApIHtcblx0XHRcdFx0XHRzdHIgKz0gJywnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN0ciArPSBpdGVtVmFsdWU7XG5cdFx0XHRcdGtleUNvdW50Kys7XG5cdFx0XHRcdGlmKGtleUNvdW50ID49IDIpIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGtleUNvdW50IDwgdmFsdWUubGVuZ3RoKSB7XG5cdFx0XHRpZihzdHIubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRzdHIgKz0gJywnO1xuXHRcdFx0fVxuXHRcdFx0c3RyICs9IFV0aWxzLmRvdFN0cmluZyhNYXRoLm1pbigzLCBtYXhMZW5ndGggLSBzdHIubGVuZ3RoIC0gMSkpO1xuXHRcdH1cblx0XHRzdHIgKz0gJ10nICsgJygnICsgdmFsdWUubGVuZ3RoICsnKSc7XG5cdFx0cmV0dXJuIHN0cjtcblx0fTtcblxuXHRTdHIubnVtYmVyVG9TdHJpbmcgPSBmdW5jdGlvbih2YWx1ZSwgbWF4TGVuZ3RoKSB7XG5cdFx0aWYobWF4TGVuZ3RoIDw9IDApIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0dmFyIHN0clZhbHVlID0gXCJcIit2YWx1ZTtcblx0XHRpZihzdHJWYWx1ZS5sZW5ndGggPD0gbWF4TGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gc3RyVmFsdWU7XG5cdFx0fVxuXHRcdGlmKG1heExlbmd0aCA8IDUpIHtcblx0XHRcdHJldHVybiBVdGlscy5kb3RTdHJpbmcoTWF0aC5taW4oMywgbWF4TGVuZ3RoKSk7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZS50b0V4cG9uZW50aWFsKE1hdGgubWF4KDAsIG1heExlbmd0aC01KSk7XG5cdH07XG5cblx0U3RyLnZhbHVlVG9TdHJpbmcgPSBmdW5jdGlvbih2YWx1ZSwgbWF4TGVuZ3RoKSB7XG5cdFx0aWYobWF4TGVuZ3RoIDw9IDApIHtcblx0XHRcdHJldHVybiBcIlwiO1xuXHRcdH1cblx0XHRpZihVdGlscy5pc1N0cmluZyh2YWx1ZSkpIHtcblx0XHRcdGlmKG1heExlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gJ1wiJztcblx0XHRcdH1cblx0XHRcdGlmKHZhbHVlLmxlbmd0aCA8PSBtYXhMZW5ndGgtMikge1xuXHRcdFx0XHRyZXR1cm4gJ1wiJyArIHZhbHVlICsgJ1wiJztcblx0XHRcdH1cblx0XHRcdGlmKG1heExlbmd0aCA8PSA1KSB7XG5cdFx0XHRcdHJldHVybiAnXCInICsgVXRpbHMuZG90U3RyaW5nKG1heExlbmd0aC0yKSArICdcIic7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gJ1wiJyArIFV0aWxzLnRydW5jYXRlU3RyaW5nKHZhbHVlLCBtYXhMZW5ndGgtMikgKyAnXCInO1xuXHRcdH1cblx0XHRpZihVdGlscy5pc051bWJlcih2YWx1ZSkpIHtcblx0XHRcdHJldHVybiBVdGlscy5udW1iZXJUb1N0cmluZyh2YWx1ZSwgbWF4TGVuZ3RoKTtcblx0XHR9XG5cdFx0aWYoVXRpbHMuaXNCb29sZWFuKHZhbHVlKSkge1xuXHRcdFx0aWYobWF4TGVuZ3RoIDwgNSkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPyAndCcgOiAnZic7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdmFsdWUgPyAndHJ1ZScgOiAnZmFsc2UnO1xuXHRcdH1cblx0XHRpZihVdGlscy5pc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0cmV0dXJuIFV0aWxzLmFycmF5VG9TdHJpbmcodmFsdWUsIG1heExlbmd0aCk7XG5cdFx0fVxuXHRcdGlmKFV0aWxzLmlzT2JqZWN0KHZhbHVlKSkge1xuXHRcdFx0cmV0dXJuIFV0aWxzLm9iamVjdFRvU3RyaW5nKHZhbHVlLCBtYXhMZW5ndGgpO1xuXHRcdH1cblxuXHRcdHJldHVybiBVdGlscy50cnVuY2F0ZVN0cmluZyhcIlwiK3ZhbHVlLCBtYXhMZW5ndGgpO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzLlN0cmluZyA9IFN0cjtcbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuXHR2YXIgaXNOb2RlID0gdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzICE9PSAndW5kZWZpbmVkJztcblx0dmFyIFV0aWxzID0gaXNOb2RlID8gcmVxdWlyZSgnLi4vdXRpbHMtY29yZScpLlV0aWxzIDogd2luZG93LlV0aWxzO1xuXHRpZighVXRpbHMpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiVXRpbHNDb3JlIG5vdCBsb2FkZWQuXCIpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHZhciBWYWxpZGF0aW9uID0ge307XG5cblx0VmFsaWRhdGlvbi5WYWxpZGl0eSA9IGZ1bmN0aW9uIChuYW1lLCBpbnB1dCwgdmFsaWQsIG1lc3NhZ2UpIHtcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIFV0aWxzLmlzT2JqZWN0KG5hbWUpKSB7XG5cdFx0XHR2YXIgc2V0dGluZ3MgPSBuYW1lO1xuXHRcdFx0dGhpcy5zZXROYW1lKHNldHRpbmdzLm5hbWUpO1xuXHRcdFx0dGhpcy5zZXRWYWxpZChzZXR0aW5ncy52YWxpZCk7XG5cdFx0XHR0aGlzLnNldE1lc3NhZ2Uoc2V0dGluZ3MubWVzc2FnZSk7XG5cdFx0XHR0aGlzLnNldElucHV0KHNldHRpbmdzLmlucHV0KTtcblx0XHRcdGlmKCdjb3JyZWN0ZWQnIGluIHNldHRpbmdzKSB7XG5cdFx0XHRcdHRoaXMuc2V0Q29ycmVjdGVkVmFsdWUoc2V0dGluZ3MuY29ycmVjdGVkKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc2V0VmFsaWRpdHlNYXAoc2V0dGluZ3MudmFsaWRpdHlNYXApO1xuXHRcdFx0dGhpcy5zZXRJbmZvKHNldHRpbmdzLmluZm8pO1xuXHRcdFx0dGhpcy5zZXRUeXBlKHNldHRpbmdzLnR5cGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9uYW1lID0gbmFtZTtcblx0XHRcdHRoaXMuX2lucHV0ID0gaW5wdXQ7XG5cdFx0XHR0aGlzLl92YWxpZCA9IHZhbGlkO1xuXHRcdFx0dGhpcy5fbWVzc2FnZSA9IG1lc3NhZ2U7XG5cdFx0fVxuXHR9O1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5fdHlwZSA9ICd2YWx1ZSc7XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLl9uYW1lID0gdW5kZWZpbmVkO1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5faW5wdXQgPSB1bmRlZmluZWQ7XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLl92YWxpZCA9IHRydWU7XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLl92YWxpZGl0eU1hcCA9IHVuZGVmaW5lZDtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuX2NvcnJlY3RlZCA9IHVuZGVmaW5lZDtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuX2lzQ29ycmVjdGVkID0gZmFsc2U7XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLl9pbmZvID0gdW5kZWZpbmVkO1xuXG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLnNldFR5cGUgPSBmdW5jdGlvbih0eXBlKSB7XG5cdFx0dGhpcy5fdHlwZSA9IHR5cGU7XG5cdH07XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLmdldFR5cGUgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5fdHlwZTtcblx0fTtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuc2V0TmFtZSA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0XHR0aGlzLl9uYW1lID0gbmFtZTtcblx0fTtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuZ2V0TmFtZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLl9uYW1lO1xuXHR9O1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5zZXRJbmZvID0gZnVuY3Rpb24oaW5mbykge1xuXHRcdHRoaXMuX2luZm8gPSBpbmZvO1xuXHR9O1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5nZXRJbmZvID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2luZm87XG5cdH07XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLmdldElucHV0ID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2lucHV0O1xuXHR9O1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5zZXRJbnB1dCA9IGZ1bmN0aW9uKGlucHV0KSB7XG5cdFx0dGhpcy5faW5wdXQgPSBpbnB1dDtcblx0fTtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuc2V0VmFsaWQgPSBmdW5jdGlvbih2YWxpZCkge1xuXHRcdHRoaXMuX3ZhbGlkID0gdmFsaWQgIT09IGZhbHNlO1xuXHR9O1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5pc1ZhbGlkID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl92YWxpZDsgfTtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbigpIHtcblx0XHRpZighdGhpcy5pc1ZhbGlkKCkpIHJldHVybiB1bmRlZmluZWQ7XG5cdFx0aWYodGhpcy5faXNDb3JyZWN0ZWQpIHJldHVybiB0aGlzLl9jb3JyZWN0ZWQ7XG5cdFx0cmV0dXJuIHRoaXMuX2lucHV0O1xuXHR9O1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5zZXRNZXNzYWdlID0gZnVuY3Rpb24obWVzc2FnZSkge1xuXHRcdHRoaXMuX21lc3NhZ2UgPSBtZXNzYWdlO1xuXHR9O1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5nZXRNZXNzYWdlID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9tZXNzYWdlOyB9O1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5pc0NvcnJlY3RlZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5faXNDb3JyZWN0ZWQ7XG5cdH07XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLmdldENvcnJlY3RlZFZhbHVlID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2NvcnJlY3RlZDtcblx0fTtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuc2V0Q29ycmVjdGVkVmFsdWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdHRoaXMuX2lzQ29ycmVjdGVkID0gdHJ1ZTtcblx0XHR0aGlzLl9jb3JyZWN0ZWQgPSB2YWx1ZTtcblx0fTtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuZ2V0VmFsaWRpdHlNYXAgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5fdmFsaWRpdHlNYXA7XG5cdH07XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLnNldFZhbGlkaXR5TWFwID0gZnVuY3Rpb24obWFwKSB7XG5cdFx0dGhpcy5fdmFsaWRpdHlNYXAgPSBtYXA7XG5cdH07XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLmNyZWF0ZUJhZFZhbHVlTWVzc2FnZSA9IGZ1bmN0aW9uKHJldHVybkFzQXJyYXkpIHtcblx0XHR2YXIgd2h5ID0gdGhpcy5nZXRNZXNzYWdlKCk7XG5cdFx0aWYod2h5ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0dmFyIG5hbWUgPSB0aGlzLmdldE5hbWUoKTtcblx0XHR2YXIgZGVmYXVsdFRvID0gdGhpcy5nZXRDb3JyZWN0ZWRWYWx1ZSgpO1xuXHRcdHZhciB2YWx1ZSA9IHRoaXMuZ2V0SW5wdXQoKTtcblx0XHRpZighcmV0dXJuQXNBcnJheSkge1xuXHRcdFx0dmFsdWUgPSBVdGlscy52YWx1ZVRvU3RyaW5nKHZhbHVlLCAzMCk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgcmVhc29uIGRvZXMgbm90IGVuZCB3aXRoIGZ1bGwgc3RvcCwgYWRkIG9uZS5cblx0XHRpZighL1xcLlxccyo/Ly5leGVjKHdoeSkpIHtcblx0XHRcdHdoeSArPSAnLic7XG5cdFx0fVxuXG5cdFx0dmFyIG1lc3NhZ2VzID0gW107XG5cdFx0bWVzc2FnZXMucHVzaCh3aHkpO1xuXHRcdG1lc3NhZ2VzLnB1c2goXCJWYWx1ZTogXCIpO1xuXHRcdG1lc3NhZ2VzLnB1c2godmFsdWUpO1xuXHRcdGlmKHRoaXMuaXNWYWxpZCgpICYmIHRoaXMuaXNDb3JyZWN0ZWQoKSkge1xuXHRcdFx0bWVzc2FnZXMucHVzaChcIi4gVXNpbmcgZGVmYXVsdDpcIik7XG5cdFx0XHRtZXNzYWdlcy5wdXNoKFV0aWxzLnZhbHVlVG9TdHJpbmcoZGVmYXVsdFRvKSk7XG5cdFx0fVxuXG5cdFx0aWYocmV0dXJuQXNBcnJheSA9PT0gdHJ1ZSkge1xuXHRcdFx0cmV0dXJuIG1lc3NhZ2VzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbWVzc2FnZXMuam9pbignICcpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogQ3JlYXRlcyBhbiBFcnJvciBvYmplY3QuXG5cdCAqIEByZXR1cm5zIHtVdGlscy5FcnJvcn1cblx0ICovXG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLmNyZWF0ZUVycm9yID0gZnVuY3Rpb24oaW5jbHVkZUVycm9yTWFwKSB7XG5cdFx0dmFyIG1lc3NhZ2UgPSB0aGlzLmdldE1lc3NhZ2UoKTtcblx0XHRpZihtZXNzYWdlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHZhciBjb2RlID0gJ3ZhbGlkYXRpb24tJyArIHRoaXMuZ2V0VHlwZSgpO1xuXHRcdHZhciBlcnJvciA9IG5ldyBVdGlscy5FcnJvcih7XG5cdFx0XHRkYXRhXHQ6IHRoaXMuZ2V0SW5wdXQoKSxcblx0XHRcdG1lc3NhZ2VcdDogdGhpcy5jcmVhdGVCYWRWYWx1ZU1lc3NhZ2UoKSxcblx0XHRcdGNvZGVcdDogY29kZVxuXHRcdH0pO1xuXHRcdGlmKGluY2x1ZGVFcnJvck1hcCAhPT0gZmFsc2UpIHtcblx0XHRcdHZhciB2YWxpZGl0eU1hcCA9IHRoaXMuZ2V0VmFsaWRpdHlNYXAoKTtcblx0XHRcdGlmKF8uaXNPYmplY3QodmFsaWRpdHlNYXApKSB7XG5cdFx0XHRcdHZhciBlcnJvck1hcCA9IHt9O1xuXHRcdFx0XHRmb3IodmFyIGkgaW4gdmFsaWRpdHlNYXApIHtcblx0XHRcdFx0XHR2YXIgc3ViRXJyb3IgPSB2YWxpZGl0eU1hcFtpXS5jcmVhdGVFcnJvcigpO1xuXHRcdFx0XHRcdGlmKHN1YkVycm9yIGluc3RhbmNlb2YgVXRpbHMuRXJyb3IpIHtcblx0XHRcdFx0XHRcdGVycm9yTWFwW2ldID0gc3ViRXJyb3I7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVycm9yLmVycm9yTWFwID0gZXJyb3JNYXA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVycm9yO1xuXHR9O1xuXG5cdFZhbGlkYXRpb24uX3ZhbGlkYXRpb25NZXNzYWdlcyA9IHtcblx0XHRpc0FyZ3VtZW50czogXCJNdXN0IGJlIGFyZ3VtZW50cy5cIixcblx0XHRpc0FycmF5OiBcIk11c3QgYmUgYXJyYXkuXCIsXG5cdFx0aXNCb29sZWFuOiBcIk11c3QgYmUgYm9vbGVhbi5cIixcblx0XHRpc0RhdGU6IFwiTXVzdCBiZSBkYXRlLlwiLFxuXHRcdGlzRWxlbWVudDogXCJNdXN0IGJlIGVsZW1lbnQuXCIsXG5cdFx0aXNFbXB0eTogXCJNdXN0IGJlIGVtcHR5LlwiLFxuXHRcdGlzRXJyb3I6IFwiTXVzdCBiZSBlcnJvci5cIixcblx0XHRpc0Zpbml0ZTogXCJNdXN0IGJlIGZpbml0ZS5cIixcblx0XHRpc0Z1bmN0aW9uOiBcIk11c3QgYmUgZnVuY3Rpb24uXCIsXG5cdFx0aXNNYXRjaDogXCJNdXN0IGJlIG1hdGNoXCIsXG5cdFx0aXNOYU46IFwiTXVzdCBiZSBOYU4uXCIsXG5cdFx0aXNOYXRpdmU6IFwiTXVzdCBiZSBuYXRpdmUuXCIsXG5cdFx0aXNOdWxsOiBcIk11c3QgYmUgbnVsbC5cIixcblx0XHRpc051bWJlcjogXCJNdXN0IGJlIG51bWJlci5cIixcblx0XHRpc09iamVjdDogXCJNdXN0IGJlIG9iamVjdC5cIixcblx0XHRpc1BsYWluT2JqZWN0OiBcIk11c3QgYmUgcGxhaW4gb2JqZWN0LlwiLFxuXHRcdGlzUmVnRXhwOiBcIk11c3QgYmUgUmVnRXhwLlwiLFxuXHRcdGlzU3RyaW5nOiBcIk11c3QgYmUgc3RyaW5nLlwiLFxuXHRcdGlzVHlwZWRBcnJheTogXCJNdXN0IGJlIHR5cGVkIGFycmF5LlwiLFxuXHRcdGlzVW5kZWZpbmVkOiBcIk11c3QgYmUgdW5kZWZpbmVkLlwiLFxuXHRcdGlzU3RyaW5nT3JOdW1iZXI6IFwiTXVzdCBiZSBzdHJpbmcgb3IgbnVtYmVyLlwiXG5cdH07XG5cblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSB7VmFsaWRhdGlvbi5WYWxpZGl0eX0gdmFsaWRpdHlcblx0ICogQHJldHVybnMge2Jvb2xlYW59ICAgV2hldGhlciBvciBub3QgdGhlIHZhbGlkaXR5IHdhcyBsb2dnZWQuXG5cdCAqL1xuXHRWYWxpZGF0aW9uLkxvZ1ZhbGlkaXR5ID0gZnVuY3Rpb24odmFsaWRpdHkpIHtcblx0XHRpZighKHZhbGlkaXR5IGluc3RhbmNlb2YgVmFsaWRhdGlvbi5WYWxpZGl0eSkpIHtcblx0XHRcdFV0aWxzLkxvZy5lcnJvcihcIkNvdWxkIG5vdCBsb2cgdmFsaWRpdHkuXCIsIHZhbGlkaXR5KTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZih2YWxpZGl0eS5pc1ZhbGlkKCkgJiYgdmFsaWRpdHkuZ2V0TWVzc2FnZSgpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR2YXIgZXJyb3IgPSB2YWxpZGl0eS5jcmVhdGVFcnJvcigpO1xuXHRcdHZhciBtZXNzYWdlID0gdmFsaWRpdHkuY3JlYXRlQmFkVmFsdWVNZXNzYWdlKHRydWUpO1xuXHRcdG1lc3NhZ2UucHVzaChcIi4gRXJyb3I6IFwiKTtcblx0XHRtZXNzYWdlLnB1c2goZXJyb3IpO1xuXHRcdGlmKCF2YWxpZGl0eS5pc1ZhbGlkKCkpIHtcblx0XHRcdFV0aWxzLkxvZy5lcnJvci5hcHBseShVdGlscy5Mb2csIG1lc3NhZ2UpO1xuXHRcdH0gZWxzZSBpZiAodmFsaWRpdHkuaXNDb3JyZWN0ZWQoKSkge1xuXHRcdFx0VXRpbHMuTG9nLndhcm4uYXBwbHkoVXRpbHMuTG9nLCBtZXNzYWdlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblxuXHRWYWxpZGF0aW9uLnNldFZhbGlkYXRpb25NZXNzYWdlID0gZnVuY3Rpb24obWV0aG9kLCBtZXNzYWdlKSB7XG5cdFx0aWYodHlwZW9mKG1ldGhvZCkgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRVdGlscy5Mb2cuZXJyb3IoXCJWYWxpZGF0aW9uIG1ldGhvZCBhcmd1bWVudCBtdXN0IGJlIHN0cmluZy5cIik7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKHR5cGVvZihtZXNzYWdlKSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFV0aWxzLkxvZy5lcnJvcihcIlZhbGlkYXRpb24gbWV0aG9kIG1lc3NhZ2UgYXJndW1lbnQgbXVzdCBiZSBzdHJpbmcuXCIpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRWYWxpZGF0aW9uLl92YWxpZGF0aW9uTWVzc2FnZXNbbWV0aG9kXSA9IG1lc3NhZ2U7XG5cdH07XG5cblx0VmFsaWRhdGlvbi5nZXRWYWxpZGF0aW9uTWVzc2FnZSA9IGZ1bmN0aW9uKG1ldGhvZCkge1xuXHRcdGlmKHR5cGVvZihtZXRob2QpICE9PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0cmV0dXJuIFZhbGlkYXRpb24uX3ZhbGlkYXRpb25NZXNzYWdlc1ttZXRob2RdO1xuXHR9O1xuXG5cdC8qKlxuXHQgKlxuXHQgKiBWYWxpZGF0ZXMgYSB2YWx1ZSwgYmFzZWQgb24gdGhlIGdpdmVuIHBhcmFtZXRlcnNcblx0ICpcblx0ICogRXhhbXBsZSB1c2FnZTogVmFsaWRhdGlvbi52YWxpZGF0ZU9uZShcIm15VmFyaWFibGVcIiwgXCJhcHBsZVwiLCBcImlzU3RyaW5nXCIsIFwiTXVzdCBiZSBhIHN0cmluZ1wiLCB7ZGVmYXVsdDogXCJiYW5hbmFcIiwgd2FybjogZmFsc2V9KTtcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcdFx0XHRcdFx0IFRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZSB0byBjaGVjay5cblx0ICogQHBhcmFtIHZhbHVlXHRcdFx0XHRcdFx0XHQgVGhlIHZhbHVlIG9mIHRoZSB2YXJpYWJsZSB0byBjaGVjay5cblx0ICogQHBhcmFtIG1ldGhvZFx0IEJvb2xlYW4gY2hlY2sgZm9yIHZhbGlkaXR5LCBvciBuYW1lIG9mIHV0aWwgZm9yIHZhbGlkYXRpb24uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbbWVzc2FnZV1cdFx0XHRcdFtPcHRpb25hbF0gVGhlIG1lc3NhZ2UgdG8gZGlzcGxheSB3aGVuIHZhcmlhYmxlIGlzIG5vdCB2YWxpZC5cblx0ICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcdFx0XHRcdCAgQW4gb2JqZWN0IG9mIGV4dHJhIG9wdGlvbi5cblx0ICogQHBhcmFtIFtvcHRpb25zLmRlZmF1bHRdXHRcdFx0XHQgQSBkZWZhdWx0IHZhbHVlIGlmIGdpdmVuIHZhbHVlIGlzIGludmFsaWQuIElmIG5vdCBwcm92aWRlZCwgdmFsaWRhdGlvbiB3aWxsIGZhaWwgaWYgaW52YWxpZCB2YWx1ZS5cblx0ICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy53YXJuXVx0XHQgIElmIGZhbHNlLCBubyB3YXJuaW5nIHdpbGwgYmUgZ2l2ZW4gaWYgZGVmYXVsdCBpcyBjaG9zZW4uIERlZmF1bHRzIHRvIHRydWUuXG5cdCAqXG5cdCAqIEByZXR1cm4ge1ZhbGlkYXRpb24uVmFsaWRpdHl9XG5cdCAqL1xuXHRWYWxpZGF0aW9uLnZhbGlkYXRlT25lID0gZnVuY3Rpb24obmFtZSwgdmFsdWUsIG1ldGhvZCwgbWVzc2FnZSwgb3B0aW9ucykge1xuXHRcdC8qKiBAdHlwZSB7VmFsaWRhdGlvbi5WYWxpZGl0eXxib29sZWFufSAqL1xuXHRcdHZhciB2YWxpZCA9IHVuZGVmaW5lZDtcblx0XHRpZihVdGlscy5pc09iamVjdChtZXNzYWdlKSkgeyAvLyBtZXNzYWdlIHdhcyBvbWl0dGVkXG5cdFx0XHRvcHRpb25zID0gbWVzc2FnZTtcblx0XHRcdG1lc3NhZ2UgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0Ly8gR2V0IG1ldGhvZCBmcm9tIHV0aWxzLCBpZiBtZXRob2QgaXMgc3RyaW5nXG5cdFx0aWYoVXRpbHMuaXNTdHJpbmcobWV0aG9kKSkge1xuXHRcdFx0Ly8gR2V0IGZ1bmN0aW9uIGZyb20gdXRpbHNcblx0XHRcdHZhciB1dGlsTWV0aG9kID0gVXRpbHNbbWV0aG9kXTtcblxuXHRcdFx0Ly8gSWYgbm8gbWVzc2FnZSBpcyBwcm92aWRlZCwgdHJ5IHRvIGZpbmQgb25lIGZyb20gdmFsaWRhdGlvbk1lc3NhZ2VzXG5cdFx0XHRpZiAoIVV0aWxzLmlzU3RyaW5nKG1lc3NhZ2UpKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBWYWxpZGF0aW9uLmdldFZhbGlkYXRpb25NZXNzYWdlKG1ldGhvZCk7XG5cdFx0XHRcdGlmKG1lc3NhZ2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdG1lc3NhZ2UgPSBcIk11c3QgYmUgXCIgKyBtZXRob2QgKyBcIi5cIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoIVV0aWxzLmlzRnVuY3Rpb24odXRpbE1ldGhvZCkpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiRG9uJ3Qga25vdyBob3cgdG8gdmFsaWRhdGUgJ1wiK21ldGhvZCtcIidcIjtcblx0XHRcdFx0bWV0aG9kID0gbmV3IFZhbGlkYXRpb24uVmFsaWRpdHkobmFtZSwgdmFsdWUsIGZhbHNlLCBtZXNzYWdlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1ldGhvZCA9IHV0aWxNZXRob2Q7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQXBwbHkgdmFsaWRhdGlvbiBtZXRob2Rcblx0XHRpZihVdGlscy5pc0Z1bmN0aW9uKG1ldGhvZCkpIHtcblx0XHRcdHZhbGlkID0gbWV0aG9kLmFwcGx5KFZhbGlkYXRpb24sIFt2YWx1ZV0pO1xuXHRcdC8vIFZhbGlkaXR5IG9iamVjdFxuXHRcdH0gZWxzZSBpZiAobWV0aG9kIGluc3RhbmNlb2YgVmFsaWRhdGlvbi5WYWxpZGl0eSkge1xuXHRcdFx0dmFsaWQgPSBtZXRob2Q7XG5cdFx0Ly8gdmFsaWRhdGVBcnJheVxuXHRcdH0gZWxzZSBpZiAoVXRpbHMuaXNBcnJheShtZXRob2QpKSB7XG5cdFx0XHR2YWxpZCA9IFZhbGlkYXRpb24udmFsaWRhdGVBcnJheShuYW1lLCB2YWx1ZSwgbWV0aG9kLCB1bmRlZmluZWQsIF8uZ2V0KG9wdGlvbnMsICdhcnJheScpLCBmYWxzZSk7XG5cdFx0Ly8gdmFsaWRhdGVPYmplY3Rcblx0XHR9IGVsc2UgaWYgKFV0aWxzLmlzT2JqZWN0KG1ldGhvZCkpIHtcblx0XHRcdHZhbGlkID0gVmFsaWRhdGlvbi52YWxpZGF0ZU9iamVjdChuYW1lLCB2YWx1ZSwgbWV0aG9kLCB1bmRlZmluZWQsIGZhbHNlKTtcblx0XHQvLyBCb29sZWFuIHZhbGlkYXRpb25cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsaWQgPSBtZXRob2QgPT09IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYoISh2YWxpZCBpbnN0YW5jZW9mIFZhbGlkYXRpb24uVmFsaWRpdHkpKSB7XG5cdFx0XHR2YWxpZCA9IG5ldyBWYWxpZGF0aW9uLlZhbGlkaXR5KG5hbWUsIHZhbHVlLCB2YWxpZCk7XG5cdFx0fVxuXG5cdFx0Ly8gRmVlZGJhY2tcblx0XHRpZighdmFsaWQuaXNWYWxpZCgpKSB7XG5cdFx0XHRpZihtZXNzYWdlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0bWVzc2FnZSA9ICdJbnZhbGlkLic7XG5cdFx0XHR9XG5cdFx0XHRpZihVdGlscy5pc09iamVjdChvcHRpb25zKSAmJiAnZGVmYXVsdCcgaW4gb3B0aW9ucykge1xuXHRcdFx0XHRpZihVdGlscy5pc0Z1bmN0aW9uKG9wdGlvbnMuZGVmYXVsdCkpIHtcblx0XHRcdFx0XHR2YXIgZGVmID0gb3B0aW9ucy5kZWZhdWx0LmFwcGx5KFZhbGlkYXRpb24sIFt2YWx1ZV0pO1xuXHRcdFx0XHRcdHZhbGlkLnNldENvcnJlY3RlZFZhbHVlKGRlZik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFsaWQuc2V0Q29ycmVjdGVkVmFsdWUob3B0aW9ucy5kZWZhdWx0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciB3YXJuID0gVXRpbHMuZ2V0KG9wdGlvbnMsICd3YXJuJyk7XG5cdFx0XHRcdHZhciBfX3dhcm4gPSBVdGlscy5pc0Z1bmN0aW9uKHdhcm4pID8gd2FybiA6IGZ1bmN0aW9uKCkgeyByZXR1cm4gd2FybiAhPT0gZmFsc2U7IH07XG5cdFx0XHRcdGlmKF9fd2Fybih2YWx1ZSkgIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0aWYodmFsaWQuZ2V0TWVzc2FnZSgpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdHZhbGlkLnNldE1lc3NhZ2UobWVzc2FnZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhbGlkLnNldE1lc3NhZ2UodW5kZWZpbmVkKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YWxpZC5zZXRWYWxpZCh0cnVlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbGlkLnNldFZhbGlkKGZhbHNlKTtcblx0XHRcdFx0aWYodmFsaWQuZ2V0TWVzc2FnZSgpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHR2YWxpZC5zZXRNZXNzYWdlKG1lc3NhZ2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmKCF2YWxpZC5pc0NvcnJlY3RlZCgpKSB7XG5cdFx0XHR2YWxpZC5zZXRNZXNzYWdlKHVuZGVmaW5lZCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbGlkO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBWYWxpZGF0ZXMgYSBzZXQgb2YgdmFsdWVzLCBiYXNlZCBvbiB0aGUgZ2l2ZW4gcGFyYW1ldGVycy5cblx0ICpcblx0ICogRXhhbXBsZSB1c2FnZTogVmFsaWRhdGlvbi52YWxpZGF0ZShcIm15VmFsaWRhdGlvblwiLCB7YTogW1wiYXBwbGVcIiwgXCJpc1N0cmluZ1wiXX0sIFwiVmFsaWRhdGlvbiBmYWlsZWQuXCIpO1xuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVx0XHRcdCBUaGUgbmFtZSBieSB3aGljaCB0byBpZGVudGlmeSB0aGlzIHZhbGlkYXRpb24uXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBjaGVja3NcdFx0ICAgQW4gb2JqZWN0IG9mIGNoZWNrcy4gV2hlcmUgdGhlIGtleXMgYXJlIHRoZSBuYW1lcyBvZiB0aGUgdmFyaWFibGVzIGFuZCB0aGVcblx0ICpcdFx0XHRcdFx0XHRcdFx0ICB2YWx1ZXMgYXJyYXlzIG9mIHBhcmFtZXRlcnMgdGhhdCBhcmUgcGFzc2VkIHRvIHtAbGluayBWYWxpZGF0aW9uLnZhbGlkYXRlT25lfSwgcHJlcGVuZGVkIGJ5XG5cdCAqXHRcdFx0XHRcdFx0XHRcdCAgPG1lPiBhbmQgPGNoZWNrcz4uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbY29uc2VxdWVuY2VdXHRbb3B0aW9uYWxdIEEgbWVzc2FnZSB0byBiZSBnaXZlbiBpZiB2YWxpZGF0aW9uIGZhaWxzLlxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdXHQgW29wdGlvbmFsXSBDYWxsYmFjayBpbnN0ZWFkIG9mIGRpcmVjdCBlcnJvciBtZXNzYWdlcy4gQ2FsbGJhY2sgaXMgY2FsbGVkIHdpdGggYSBWYWxpZGl0eSBvYmplY3QgYXMgYXJndW1lbnQuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtWYWxpZGF0aW9uLlZhbGlkaXR5fVx0XHRJZiB2YWxpZGF0aW9uIHdhcyBwYXNzZWQsIGFuIG9iamVjdCB3aWxsIGJlIHJldHVybmVkIGNvbnRhaW5pbmcgYSB0aGUga2V5c1xuXHQgKlx0XHRcdFx0XHRcdFx0XHQgIG9mIHRoZSBnaXZlbiBjaGVja3Mgb2JqZWN0LCB3aXRoIHRoZWlyIHZhbGlkYXRlZCB2YWx1ZXMuXG5cdCAqXHRcdFx0XHRcdFx0XHRcdCAgSWYgYW55IG9mIHRoZSB2YWxpZGF0aW9ucyBmYWlsZWQsIEZBTFNFIHdpbGwgYmUgcmV0dXJuZWQuXG5cdCAqL1xuXHRWYWxpZGF0aW9uLnZhbGlkYXRlID0gZnVuY3Rpb24obmFtZSwgY2hlY2tzLCBjb25zZXF1ZW5jZSwgY2FsbGJhY2spIHtcblx0XHQvLyBDYW4gYWxzbyBiZSBjYWxsZWQgd2l0aG91dCBhIG5hbWVcblx0XHRpZihVdGlscy5pc09iamVjdChuYW1lKSkge1xuXHRcdFx0Y2FsbGJhY2sgPSBjb25zZXF1ZW5jZTtcblx0XHRcdGNvbnNlcXVlbmNlID0gY2hlY2tzO1xuXHRcdFx0Y2hlY2tzID0gbmFtZTtcblx0XHRcdG5hbWUgPSAnVmFsaWRhdGlvbic7XG5cdFx0fVxuXG5cdFx0dmFyIHZhbGlkaXR5TWFwID0ge307XG5cdFx0dmFyIGlucHV0TWFwID0ge307XG5cdFx0Y2FsbGJhY2sgPSBWYWxpZGF0aW9uLmVuc3VyZShjYWxsYmFjaywgVXRpbHMuaXNGdW5jdGlvbiwgY2FsbGJhY2sgPT09IGZhbHNlID8gZnVuY3Rpb24oKXt9IDogVmFsaWRhdGlvbi5Mb2dWYWxpZGl0eSk7XG5cblx0XHRpZihjb25zZXF1ZW5jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb25zZXF1ZW5jZSA9ICcnO1xuXHRcdH1cblxuXHRcdGlmKFV0aWxzLmlzT2JqZWN0KGNoZWNrcykpIHtcblx0XHRcdGZvcih2YXIgaSBpbiBjaGVja3MpIHtcblx0XHRcdFx0Y2hlY2tzW2ldLnVuc2hpZnQoaSk7XG5cdFx0XHRcdHZhbGlkaXR5TWFwW2ldID0gVmFsaWRhdGlvbi52YWxpZGF0ZU9uZS5hcHBseShWYWxpZGF0aW9uLCBjaGVja3NbaV0pO1xuXHRcdFx0XHRpbnB1dE1hcFtpXSA9IGNoZWNrc1tpXVsxXTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGludmFsaWRDaGVja3NNZXNzYWdlID0gXCJQYXJhbWV0ZXIgJ2NoZWNrcycgbXVzdCBiZSBvYmplY3QuIFwiICsgY29uc2VxdWVuY2U7XG5cdFx0XHRjYWxsYmFjayhuZXcgVmFsaWRhdGlvbi5WYWxpZGl0eShuYW1lLCBjaGVja3MsIGludmFsaWRDaGVja3NNZXNzYWdlKSk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gR28gdGhyb3VnaCByZXN1bHRzXG5cdFx0dmFyIGlzVmFsaWQgPSB0cnVlO1xuXHRcdGZvcih2YXIgaSBpbiB2YWxpZGl0eU1hcCkge1xuXHRcdFx0dmFyIHZhbGlkaXR5ID0gdmFsaWRpdHlNYXBbaV07XG5cdFx0XHRpZiAoIXZhbGlkaXR5LmlzVmFsaWQoKSkge1xuXHRcdFx0XHRpc1ZhbGlkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ3JlYXRlIFZhbGlkaXR5IG9iamVjdFxuXHRcdHZhciB2YWxpZCA9IG5ldyBWYWxpZGF0aW9uLlZhbGlkaXR5KHtcblx0XHRcdHR5cGU6ICdtdWx0aXBsZScsXG5cdFx0XHRuYW1lOiBuYW1lLFxuXHRcdFx0aW5wdXQ6IGlucHV0TWFwLFxuXHRcdFx0dmFsaWQ6IGlzVmFsaWQsXG5cdFx0XHR2YWxpZGl0eU1hcDogdmFsaWRpdHlNYXBcblx0XHR9KTtcblx0XHRpZighaXNWYWxpZCkge1xuXHRcdFx0dmFsaWQuc2V0TWVzc2FnZShcIlZhbGlkYXRpb24gZmFpbGVkIGZvciAnXCIgKyBuYW1lICsgXCInLlwiKTtcblx0XHR9XG5cdFx0Y2FsbGJhY2sodmFsaWQpO1xuXHRcdHJldHVybiB2YWxpZDtcblx0fTtcblxuXHQvKipcblx0ICogVmFsaWRhdGVzIGFuIG9iamVjdCwgdGhlIHNhbWUgd2F5IC52YWxpZGF0ZSB2YWxpZGF0ZXMgaXNvbGF0ZWQgdmFsdWVzLlxuXHQgKlxuXHQgKiBFeGFtcGxlIHVzYWdlOiBWYWxpZGF0aW9uLnZhbGlkYXRlT2JqZWN0KCdteU9iamVjdCcsIHthOiAnYXBwbGUnfSwge2E6IFsnaXNTdHJpbmcnXX0pLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVx0XHRcdCBUaGUgbmFtZSBvZiB0aGUgdmFsaWRhdGlvbi5cblx0ICogQHBhcmFtIHtvYmplY3R9IG9ialx0XHRcdCAgVGhlIG9iamVjdCB0byBjaGVjay5cblx0ICogQHBhcmFtIHtvYmplY3R9IGNoZWNrc1x0XHQgICBBbiBvYmplY3Qgd2l0aCBmb3IgZWFjaCBrZXkgdG8gY2hlY2sgYW4gYXJyYXkgb2YgYXJndW1lbnRzIFttZXRob2QsIG1lc3NhZ2UsIG9wdGlvbnNdXG5cdCAqXHRcdFx0XHRcdFx0XHRcdCAgdG8gcGFzcyB0byB0aGUgdmFsaWRhdGVPbmUgZnVuY3Rpb24uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbbWVzc2FnZV1cdFx0XHRNZXNzYWdlIHRvIGFkZCB0byBWYWxpZGl0eU9iamVjdCBpbiBjYXNlIG9mIGludmFsaWQgb2JqZWN0LlxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdXHQgQSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgVmFsaWRpdHkgb2JqZWN0IGFzIGFyZ3VtZW50LlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtWYWxpZGF0aW9uLlZhbGlkaXR5fVxuXHQgKi9cblx0VmFsaWRhdGlvbi52YWxpZGF0ZU9iamVjdCA9IGZ1bmN0aW9uKG5hbWUsIG9iaiwgY2hlY2tzLCBtZXNzYWdlLCBjYWxsYmFjaykge1xuXHRcdGlmKFV0aWxzLmlzT2JqZWN0KG5hbWUpKSB7XG5cdFx0XHRjYWxsYmFjayA9IG1lc3NhZ2U7XG5cdFx0XHRtZXNzYWdlID0gY2hlY2tzO1xuXHRcdFx0Y2hlY2tzID0gb2JqO1xuXHRcdFx0b2JqID0gbmFtZTtcblx0XHRcdG5hbWUgPSAnT2JqZWN0Jztcblx0XHR9XG5cdFx0aWYoVXRpbHMuaXNGdW5jdGlvbihtZXNzYWdlKSkge1xuXHRcdFx0Y2FsbGJhY2sgPSBtZXNzYWdlO1xuXHRcdFx0bWVzc2FnZSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0Y2FsbGJhY2sgPSBWYWxpZGF0aW9uLmVuc3VyZShjYWxsYmFjaywgVXRpbHMuaXNGdW5jdGlvbiwgY2FsbGJhY2sgPT09IGZhbHNlID8gZnVuY3Rpb24oKXt9IDogVmFsaWRhdGlvbi5Mb2dWYWxpZGl0eSk7XG5cblx0XHRpZighVXRpbHMuaXNPYmplY3QoY2hlY2tzKSkge1xuXHRcdFx0dmFyIGludmFsaWQgPSBuZXcgVmFsaWRhdGlvbi5WYWxpZGl0eShuYW1lLCBjaGVja3MsIGZhbHNlLCBcIkludmFsaWQgJ2NoZWNrcycgcGFyYW1ldGVyLiBNdXN0IGJlIG9iamVjdC5cIik7XG5cdFx0XHRjYWxsYmFjayhpbnZhbGlkKTtcblx0XHRcdHJldHVybiBpbnZhbGlkO1xuXHRcdH1cblxuXHRcdGlmKCFVdGlscy5pc09iamVjdChvYmopKSB7XG5cdFx0XHR2YXIgaW52YWxpZCA9IG5ldyBWYWxpZGF0aW9uLlZhbGlkaXR5KG5hbWUsIGNoZWNrcywgZmFsc2UsIFwiSW52YWxpZCBvYmplY3QuXCIpO1xuXHRcdFx0Y2FsbGJhY2soaW52YWxpZCk7XG5cdFx0XHRyZXR1cm4gaW52YWxpZDtcblx0XHR9XG5cblx0XHR2YXIgdmFsaWRpdHlNYXAgPSB7fTtcblx0XHRmb3IodmFyIHByb3AgaW4gY2hlY2tzKSB7XG5cdFx0XHR2YXIgYXJncyA9IFV0aWxzLmNsb25lKGNoZWNrc1twcm9wXSk7XG5cdFx0XHR2YXIgaXNBcnJheSA9IFV0aWxzLmlzQXJyYXkoYXJncyk7XG5cblx0XHRcdC8vIExhenksIHNpbmdsZS1wYXJhbWV0ZXIgdmFsaWRhdGlvbiAoc3RyaW5nLCBib29sZWFuIG9yIGZ1bmN0aW9uKVxuXHRcdFx0aWYoVXRpbHMuaXNTdHJpbmcoYXJncykgfHwgVXRpbHMuaXNCb29sZWFuKGFyZ3MpIHx8IFV0aWxzLmlzRnVuY3Rpb24oYXJncykpIHtcblx0XHRcdFx0YXJncyA9IFthcmdzXTtcblx0XHRcdC8vIEludmFsaWQgdmFsaWRhdGlvblxuXHRcdFx0fSBlbHNlIGlmICghaXNBcnJheSkge1xuXHRcdFx0XHRhcmdzID0gW2ZhbHNlLCBcIkludmFsaWQgdmFsaWRhdGlvbiBkZWZpbml0aW9uLlwiXVxuXHRcdFx0fVxuXG5cdFx0XHRhcmdzLnVuc2hpZnQob2JqW3Byb3BdKTtcblx0XHRcdGFyZ3MudW5zaGlmdChwcm9wKTtcblxuXHRcdFx0dmFsaWRpdHlNYXBbcHJvcF0gPSBWYWxpZGF0aW9uLnZhbGlkYXRlT25lLmFwcGx5KFZhbGlkYXRpb24sIGFyZ3MpO1xuXHRcdH1cblxuXHRcdHZhciB2YWxpZCA9IG5ldyBWYWxpZGF0aW9uLlZhbGlkaXR5KHtcblx0XHRcdG5hbWU6IG5hbWUsXG5cdFx0XHRpbnB1dDogb2JqLFxuXHRcdFx0dmFsaWRpdHlNYXA6IHZhbGlkaXR5TWFwXG5cdFx0fSk7XG5cdFx0dmFyIGNvcnJlY3RlZCA9IHVuZGVmaW5lZDtcblx0XHRpZihtZXNzYWdlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdG1lc3NhZ2UgPSBcIkludmFsaWQgb2JqZWN0IGZvciAnXCIgKyBuYW1lICsgXCInLlwiO1xuXHRcdH1cblx0XHR2YXIgaGFzTWVzc2FnZSA9IGZhbHNlO1xuXHRcdGZvcih2YXIgcHJvcCBpbiB2YWxpZGl0eU1hcCkge1xuXHRcdFx0aWYoIXZhbGlkaXR5TWFwW3Byb3BdLmlzVmFsaWQoKSkge1xuXHRcdFx0XHR2YWxpZC5zZXRWYWxpZChmYWxzZSk7XG5cdFx0XHRcdHZhbGlkLnNldE1lc3NhZ2UobWVzc2FnZSk7XG5cdFx0XHR9XG5cdFx0XHRpZih2YWxpZGl0eU1hcFtwcm9wXS5pc0NvcnJlY3RlZCgpKSB7XG5cdFx0XHRcdGlmKGNvcnJlY3RlZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0Y29ycmVjdGVkID0gVXRpbHMuY2xvbmUob2JqKTtcblx0XHRcdFx0XHR2YWxpZC5zZXRDb3JyZWN0ZWRWYWx1ZShjb3JyZWN0ZWQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvcnJlY3RlZFtwcm9wXSA9IHZhbGlkaXR5TWFwW3Byb3BdLmdldFZhbHVlKCk7XG5cdFx0XHR9XG5cdFx0XHRpZih2YWxpZGl0eU1hcFtwcm9wXS5nZXRNZXNzYWdlKCkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRoYXNNZXNzYWdlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoaGFzTWVzc2FnZSkge1xuXHRcdFx0dmFsaWQuc2V0TWVzc2FnZShtZXNzYWdlKTtcblx0XHR9XG5cdFx0dmFsaWQuc2V0VHlwZSgnb2JqZWN0Jyk7XG5cblx0XHRjYWxsYmFjayh2YWxpZCk7XG5cdFx0cmV0dXJuIHZhbGlkO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBWYWxpZGF0ZXMgYW4gYXJyYXkgb2YgdmFsdWVzLCB1c2luZyB0aGUgZ2l2ZW4gdmFsaWRhdGlvbiBmdW5jdGlvbi5cblx0ICpcblx0ICogRXhhbXBsZSB1c2FnZTogVmFsaWRhdGlvbi52YWxpZGF0ZUFycmF5KFwibXlBcnJheVwiLCBbJ2FwcGxlJywgJ2JhbmFuYScsIDEyM10sIFtcImlzU3RyaW5nXCIsIHtkZWZhdWx0OiAnZnJ1aXQnfV0pO1xuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuXHQgKiBAcGFyYW0ge0FycmF5fSBhcnJheVx0XHRcdFx0IFRoZSBhcnJheSB0byB2YWxpZGF0ZS5cblx0ICogQHBhcmFtIHtBcnJheXxzdHJpbmd8ZnVuY3Rpb259IGl0ZW1WYWxpZGF0aW9uXHRcdFRoZSB2YWxpZGF0aW9uIGFyZ3VtZW50cyBbbWV0aG9kLCBtZXNzYWdlLCBvcHRpb25zXVxuXHQgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWluTGVuZ3RoPTBdXHRcdFtvcHRpb25hbF0gVGhlIG1pbmltdW0gbGVuZ3RoIG9mIHRoZSBhcnJheS5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heExlbmd0aD1JbmZpbml0eV0gW29wdGlvbmFsXSBUaGUgbWF4aW11bSBsZW5ndGggb2YgdGhlIGFycmF5LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuaXRlbVR5cGU9J0l0ZW0nXVx0W29wdGlvbmFsXSBXaGF0IHRvIGNhbGwgYW4gaXRlbS5cblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gW2NhbGxiYWNrXVx0XHQgW29wdGlvbmFsXSBDYWxsYmFjayBpbnN0ZWFkIG9mIGRpcmVjdCBlcnJvciBtZXNzYWdlcy4gQ2FsbGJhY2sgaXMgY2FsbGVkIHdpdGggYSBWYWxpZGl0eSBvYmplY3QgYXMgYXJndW1lbnQuXG5cdCAqL1xuXHRWYWxpZGF0aW9uLnZhbGlkYXRlQXJyYXkgPSBmdW5jdGlvbihuYW1lLCBhcnJheSwgaXRlbVZhbGlkYXRpb24sIG1lc3NhZ2UsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG5cdFx0aWYoVXRpbHMuaXNBcnJheShuYW1lKSkge1xuXHRcdFx0Y2FsbGJhY2sgPSBvcHRpb25zO1xuXHRcdFx0b3B0aW9ucyA9IG1lc3NhZ2U7XG5cdFx0XHRtZXNzYWdlID0gaXRlbVZhbGlkYXRpb247XG5cdFx0XHRpdGVtVmFsaWRhdGlvbiA9IGFycmF5O1xuXHRcdFx0YXJyYXkgPSBuYW1lO1xuXHRcdFx0bmFtZSA9ICdBcnJheSc7XG5cdFx0fVxuXHRcdGlmKFV0aWxzLmlzT2JqZWN0KG1lc3NhZ2UpKXtcblx0XHRcdGNhbGxiYWNrID0gb3B0aW9ucztcblx0XHRcdG9wdGlvbnMgPSBtZXNzYWdlO1xuXHRcdH1cblx0XHR2YXIgbWluTGVuZ3RoID0gXy5nZXQob3B0aW9ucywgJ21pbkxlbmd0aCcpO1xuXHRcdHZhciBtYXhMZW5ndGggPSBfLmdldChvcHRpb25zLCAnbWF4TGVuZ3RoJyk7XG5cdFx0dmFyIGl0ZW1UeXBlID0gXy5nZXQob3B0aW9ucywgJ2l0ZW1UeXBlJyk7XG5cblx0XHRjYWxsYmFjayA9IFZhbGlkYXRpb24uZW5zdXJlKGNhbGxiYWNrLCBVdGlscy5pc0Z1bmN0aW9uLCBjYWxsYmFjayA9PT0gZmFsc2UgPyBmdW5jdGlvbigpe30gOiBWYWxpZGF0aW9uLkxvZ1ZhbGlkaXR5KTtcblxuXHRcdGlmKCFVdGlscy5pc0FycmF5KGFycmF5KSkge1xuXHRcdFx0dmFyIGludmFsaWQgPSBuZXcgVmFsaWRhdGlvbi5WYWxpZGl0eSh7bmFtZTogbmFtZSwgaW5wdXQ6IGFycmF5LCB2YWxpZDogZmFsc2UsIG1lc3NhZ2U6IFwiTXVzdCBiZSBhbiBhcnJheVwiLCB0eXBlOiAnYXJyYXknfSk7XG5cdFx0XHRjYWxsYmFjayhpbnZhbGlkKTtcblx0XHRcdHJldHVybiBpbnZhbGlkO1xuXHRcdH1cblx0XHRpZighVXRpbHMuaXNBcnJheShpdGVtVmFsaWRhdGlvbikpIHtcblx0XHRcdGl0ZW1WYWxpZGF0aW9uID0gW2l0ZW1WYWxpZGF0aW9uXTtcblx0XHR9XG5cdFx0dmFyIHZhbGlkID0gbmV3IFZhbGlkYXRpb24uVmFsaWRpdHkobmFtZSwgYXJyYXksIHRydWUpO1xuXG5cdFx0aWYoIVV0aWxzLmlzTnVtYmVyKG1pbkxlbmd0aCkpIG1pbkxlbmd0aCA9IDA7XG5cdFx0aWYoIVV0aWxzLmlzTnVtYmVyKG1heExlbmd0aCkpIG1heExlbmd0aCA9IEluZmluaXR5O1xuXHRcdGlmKCFVdGlscy5pc1N0cmluZyhpdGVtVHlwZSkpIGl0ZW1UeXBlID0gJ0l0ZW0nO1xuXG5cdFx0dmFyIGl0ZW1QbHVyYWwgPSBVdGlscy5wbHVyYWwoaXRlbVR5cGUpO1xuXG5cdFx0aWYoYXJyYXkubGVuZ3RoIDwgbWluTGVuZ3RoKSB7XG5cdFx0XHR2YXIgaW52YWxpZDIgPSBuZXcgVmFsaWRhdGlvbi5WYWxpZGl0eSh7XG5cdFx0XHRcdG5hbWU6IG5hbWUsXG5cdFx0XHRcdGlucHV0OiBhcnJheSxcblx0XHRcdFx0dmFsaWQ6IGZhbHNlLFxuXHRcdFx0XHR0eXBlOiAnYXJyYXknLFxuXHRcdFx0XHRtZXNzYWdlOiBuYW1lICsgXCIgbXVzdCBjb250YWluIGF0IGxlYXN0IFwiICsgbWluTGVuZ3RoICsgXCIgXCIraXRlbVBsdXJhbC50b0xvd2VyQ2FzZSgpXG5cdFx0XHR9KTtcblx0XHRcdGNhbGxiYWNrKGludmFsaWQyKTtcblx0XHRcdHJldHVybiBpbnZhbGlkMjtcblx0XHR9XG5cdFx0aWYoYXJyYXkubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG5cdFx0XHR2YXIgaW52YWxpZDMgPSBuZXcgVmFsaWRhdGlvbi5WYWxpZGl0eSh7XG5cdFx0XHRcdG5hbWU6IG5hbWUsXG5cdFx0XHRcdGlucHV0OiBhcnJheSxcblx0XHRcdFx0dmFsaWQ6IGZhbHNlLFxuXHRcdFx0XHR0eXBlOiAnYXJyYXknLFxuXHRcdFx0XHRtZXNzYWdlOiBuYW1lICsgXCIgbWF5IGNvbnRhaW4gYXQgbW9zdCBcIiArIG1heExlbmd0aCArIFwiIFwiK2l0ZW1QbHVyYWwudG9Mb3dlckNhc2UoKVxuXHRcdFx0fSk7XG5cdFx0XHRjYWxsYmFjayhpbnZhbGlkMyk7XG5cdFx0XHRyZXR1cm4gaW52YWxpZDM7XG5cdFx0fVxuXG5cdFx0dmFyIGl0ZW0gPSBudWxsLFxuXHRcdFx0aXRlbU5hbWUgPSBudWxsLFxuXHRcdFx0dmFsaWRhdGlvbkFyZ3MgPSBudWxsLFxuXHRcdFx0dmFsaWRpdHlNYXAgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGl0ZW0gPSBhcnJheVtpXTtcblx0XHRcdGl0ZW1OYW1lID0gVXRpbHMuaXNTdHJpbmcoaXRlbSkgPyBpdGVtIDogaTtcblxuXHRcdFx0dmFsaWRhdGlvbkFyZ3MgPSBVdGlscy5jbG9uZShpdGVtVmFsaWRhdGlvbik7XG5cdFx0XHR2YWxpZGF0aW9uQXJncy51bnNoaWZ0KGl0ZW0pO1xuXHRcdFx0dmFsaWRhdGlvbkFyZ3MudW5zaGlmdChpdGVtTmFtZSk7XG5cblx0XHRcdHZhbGlkaXR5TWFwW2ldID0gVmFsaWRhdGlvbi52YWxpZGF0ZU9uZS5hcHBseShWYWxpZGF0aW9uLCB2YWxpZGF0aW9uQXJncyk7XG5cdFx0fVxuXG5cdFx0dmFyIGNvcnJlY3RlZCA9IHVuZGVmaW5lZDtcblx0XHR2YXIgaW52YWxpZE1lc3NhZ2UgPSBcIkludmFsaWQgXCIgKyBpdGVtUGx1cmFsLnRvTG93ZXJDYXNlKCkgKyBcIiBpbiBcIiArIG5hbWUgKyBcIiBhcnJheS5cIjtcblx0XHR2YXIgaGFzTWVzc2FnZSA9IGZhbHNlO1xuXHRcdGZvcih2YXIgaSBpbiB2YWxpZGl0eU1hcCkge1xuXHRcdFx0aWYoIXZhbGlkaXR5TWFwW2ldLmlzVmFsaWQoKSkge1xuXHRcdFx0XHR2YWxpZC5zZXRWYWxpZChmYWxzZSk7XG5cdFx0XHRcdHZhbGlkLnNldE1lc3NhZ2UoaW52YWxpZE1lc3NhZ2UpO1xuXHRcdFx0fVxuXHRcdFx0aWYodmFsaWRpdHlNYXBbaV0uaXNDb3JyZWN0ZWQoKSkge1xuXHRcdFx0XHRpZihjb3JyZWN0ZWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGNvcnJlY3RlZCA9IFV0aWxzLmNsb25lKGFycmF5KTtcblx0XHRcdFx0XHR2YWxpZC5zZXRDb3JyZWN0ZWRWYWx1ZShjb3JyZWN0ZWQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvcnJlY3RlZFtpXSA9IHZhbGlkaXR5TWFwW2ldLmdldFZhbHVlKCk7XG5cdFx0XHR9XG5cdFx0XHRpZih2YWxpZGl0eU1hcFtpXS5nZXRNZXNzYWdlKCkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRoYXNNZXNzYWdlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoaGFzTWVzc2FnZSkge1xuXHRcdFx0dmFsaWQuc2V0TWVzc2FnZShpbnZhbGlkTWVzc2FnZSk7XG5cdFx0fVxuXG5cdFx0dmFsaWQuc2V0VmFsaWRpdHlNYXAodmFsaWRpdHlNYXApO1xuXHRcdHZhbGlkLnNldFR5cGUoJ2FycmF5Jyk7XG5cblx0XHRjYWxsYmFjayh2YWxpZCk7XG5cdFx0cmV0dXJuIHZhbGlkO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgdGhlIGdpdmVuIGNsYXNzLlxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjaGVja0NsYXNzXHQgVGhlIGNsYXNzIHRoZSBzZWNvbmQgYXJndW1lbnQgc2hvdWxkIGJlIGFuIGluc3RhbmNlIG9mLlxuXHQgKiBAcGFyYW0ge29iamVjdH0gW2FyZ11cdFx0XHRUaGUgYXJndW1lbnQgdG8gY2hlY2suIElmIG5vdCBwcm92aWRlZCwgdGhlIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIGEgZnVuY3Rpb25cblx0ICpcdFx0XHRcdFx0XHRcdFx0ICB0aGF0IHJlcXVpcmVzIGEgc2luZ2xlIGFyZ3VtZW50IHRvIGNoZWNrIGlmIHRoYXQgaXMgYW4gaW5zdGFuY2Ugb2YgdGhlIGdpdmVuIGNsYXNzLlxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdFZhbGlkYXRpb24uaW5zdGFuY2VvZiA9IGZ1bmN0aW9uKGNoZWNrQ2xhc3MsIGFyZykge1xuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oZnV0dXJlQXJnKSB7XG5cdFx0XHRcdHJldHVybiBWYWxpZGF0aW9uLmluc3RhbmNlb2YoY2hlY2tDbGFzcywgZnV0dXJlQXJnKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIFV0aWxzLmlzT2JqZWN0KGNoZWNrQ2xhc3MpICYmIGFyZyBpbnN0YW5jZW9mIGNoZWNrQ2xhc3M7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gYXJndW1lbnQgaXMgZGVmaW5lZCwgYW5kIG5vdCBudWxsLlxuXHQgKiBAcGFyYW0gdlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdFZhbGlkYXRpb24uZGVmID0gZnVuY3Rpb24gKHYpIHtcblx0XHRyZXR1cm4gKCh2ICE9PSBudWxsKSAmJiAodiAhPT0gdW5kZWZpbmVkKSk7XG5cdH07XG5cblx0VmFsaWRhdGlvbi5lbnN1cmUgPSBmdW5jdGlvbiAodmFyaWFibGUsIGV2YWxGdW5jLCBkZWZhdWx0VmFsdWUsIG1lc3NhZ2UpIHtcblx0XHR2YXIgc3VyZSA9IHZhcmlhYmxlO1xuXHRcdGlmICghZXZhbEZ1bmModmFyaWFibGUpKSB7XG5cdFx0XHRzdXJlID0gZGVmYXVsdFZhbHVlO1xuXHRcdFx0aWYgKFZhbGlkYXRpb24uZGVmKG1lc3NhZ2UpKSB7XG5cdFx0XHRcdFV0aWxzLkxvZy5lcnJvcihcIlZhbGlkYXRpb246OmVuc3VyZVwiLCBtZXNzYWdlLCB2YXJpYWJsZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN1cmU7XG5cdH07XG5cblx0VmFsaWRhdGlvbi5lbnN1cmVQYXRoID0gZnVuY3Rpb24odmFyaWFibGUsIHBhdGgsIGV2YWxGdW5jLCBkZWZhdWx0VmFsdWUsIG1lc3NhZ2UpIHtcblx0XHRpZighXy5pc09iamVjdCh2YXJpYWJsZSkpIHtcblx0XHRcdHZhcmlhYmxlID0ge307XG5cdFx0fVxuXHRcdGlmKF8uaXNBcnJheShwYXRoKSkge1xuXHRcdFx0Xy5mb3JFYWNoKHBhdGgsIGZ1bmN0aW9uKHApIHtcblx0XHRcdFx0dmFyaWFibGUgPSBWYWxpZGF0aW9uLmVuc3VyZVBhdGgodmFyaWFibGUsIHAsIGV2YWxGdW5jLCBkZWZhdWx0VmFsdWUsIHAgKyBcIjogXCIgKyBtZXNzYWdlKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHZhcmlhYmxlO1xuXHRcdH1cblxuXHRcdHZhciBjaGVjayA9IF8uZ2V0KHZhcmlhYmxlLCBwYXRoKTtcblx0XHRpZiAoIWV2YWxGdW5jKGNoZWNrKSkge1xuXHRcdFx0Xy5zZXQodmFyaWFibGUsIHBhdGgsIGRlZmF1bHRWYWx1ZSk7XG5cdFx0XHRpZiAoVmFsaWRhdGlvbi5kZWYobWVzc2FnZSkpIHtcblx0XHRcdFx0VmFsaWRhdGlvbi5Mb2cuZXJyb3IobWVzc2FnZSwgdmFyaWFibGUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB2YXJpYWJsZTtcblx0fTtcblxuXHRWYWxpZGF0aW9uLmlzU3RyaW5nT3JOdW1iZXIgPSBmdW5jdGlvbih2YXJpYWJsZSkge1xuXHRcdHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YXJpYWJsZSkpIHx8IF8uaXNTdHJpbmcodmFyaWFibGUpO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzLlZhbGlkYXRpb24gPSBWYWxpZGF0aW9uO1xufSkoKTsiXX0=
