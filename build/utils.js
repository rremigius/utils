(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function () {
    var isNode = typeof module !== 'undefined' && typeof module.exports !== 'undefined';

    var Utils = require('./src/utils-core').Utils;

    var loaded = [];
    loaded.push(require('./src/utils/string').String);
    loaded.push(require('./src/utils/validation').Validation);
    loaded.push(require('./src/utils/error').Error);

    for (var i = 0; i < loaded.length; i++) {
        Utils.extendUtils(loaded[i]);
    }

    module.exports.Utils = Utils;
    window.Utils = Utils;
})();

},{"./src/utils-core":3,"./src/utils/error":4,"./src/utils/string":5,"./src/utils/validation":6}],2:[function(require,module,exports){
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

	Utils.export('Error', Error);

	module.exports.Error = Error;
})();

},{"../utils-core":3}],5:[function(require,module,exports){
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

},{"../utils-core":3}],6:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsInNyYy9saWIvbG9kYXNoLm1pbi5qcyIsInNyYy91dGlscy1jb3JlLmpzIiwic3JjL3V0aWxzL2Vycm9yLmpzIiwic3JjL3V0aWxzL3N0cmluZy5qcyIsInNyYy91dGlscy92YWxpZGF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsQ0FBQyxZQUFVO0FBQ1AsUUFBSSxTQUFTLE9BQU8sTUFBUCxLQUFrQixXQUFsQixJQUFpQyxPQUFPLE9BQU8sT0FBZCxLQUEwQixXQUF4RTs7QUFFQSxRQUFJLFFBQVEsUUFBUSxrQkFBUixFQUE0QixLQUF4Qzs7QUFFQSxRQUFJLFNBQVMsRUFBYjtBQUNBLFdBQU8sSUFBUCxDQUFZLFFBQVEsb0JBQVIsRUFBOEIsTUFBMUM7QUFDQSxXQUFPLElBQVAsQ0FBWSxRQUFRLHdCQUFSLEVBQWtDLFVBQTlDO0FBQ0EsV0FBTyxJQUFQLENBQVksUUFBUSxtQkFBUixFQUE2QixLQUF6Qzs7QUFFQSxTQUFJLElBQUksSUFBRSxDQUFWLEVBQWEsSUFBRSxPQUFPLE1BQXRCLEVBQThCLEdBQTlCLEVBQW1DO0FBQy9CLGNBQU0sV0FBTixDQUFrQixPQUFPLENBQVAsQ0FBbEI7QUFDSDs7QUFFRCxXQUFPLE9BQVAsQ0FBZSxLQUFmLEdBQXVCLEtBQXZCO0FBQ0EsV0FBTyxLQUFQLEdBQWUsS0FBZjtBQUNILENBaEJEOzs7O0FDQUE7Ozs7QUFJQSxDQUFDLENBQUMsWUFBVTtBQUFDLFVBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxTQUFPLEVBQUUsR0FBRixDQUFNLEVBQUUsQ0FBRixDQUFOLEVBQVcsRUFBRSxDQUFGLENBQVgsR0FBaUIsQ0FBeEI7QUFBMEIsV0FBUyxDQUFULENBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFNBQU8sRUFBRSxHQUFG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RUFBc0IsWUFBdEI7QUFDQSxPQUFJLFdBQVcsR0FBWCxDQUFlLE9BQWYsQ0FBSixFQUE2QjtBQUM1QixlQUFXLEdBQVgsQ0FBZSxLQUFmLENBQXFCLE9BQXJCLEVBQThCLFFBQTlCO0FBQ0E7QUFDRDs7QUFFRCxTQUFPLFFBQVA7QUFDQSxFQXBCRDs7QUFzQkEsWUFBVyxnQkFBWCxHQUE4QixVQUFTLFFBQVQsRUFBbUI7QUFDaEQsU0FBTyxDQUFDLE1BQU0sV0FBVyxRQUFYLENBQU4sQ0FBRCxJQUFnQyxFQUFFLFFBQUYsQ0FBVyxRQUFYLENBQXZDO0FBQ0EsRUFGRDs7QUFJQSxRQUFPLE9BQVAsQ0FBZSxVQUFmLEdBQTRCLFVBQTVCO0FBQ0EsQ0FucUJEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbigpe1xuICAgIHZhciBpc05vZGUgPSB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT09ICd1bmRlZmluZWQnO1xuXG4gICAgdmFyIFV0aWxzID0gcmVxdWlyZSgnLi9zcmMvdXRpbHMtY29yZScpLlV0aWxzO1xuXG4gICAgdmFyIGxvYWRlZCA9IFtdO1xuICAgIGxvYWRlZC5wdXNoKHJlcXVpcmUoJy4vc3JjL3V0aWxzL3N0cmluZycpLlN0cmluZyk7XG4gICAgbG9hZGVkLnB1c2gocmVxdWlyZSgnLi9zcmMvdXRpbHMvdmFsaWRhdGlvbicpLlZhbGlkYXRpb24pO1xuICAgIGxvYWRlZC5wdXNoKHJlcXVpcmUoJy4vc3JjL3V0aWxzL2Vycm9yJykuRXJyb3IpO1xuXG4gICAgZm9yKHZhciBpPTA7IGk8bG9hZGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIFV0aWxzLmV4dGVuZFV0aWxzKGxvYWRlZFtpXSk7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMuVXRpbHMgPSBVdGlscztcbiAgICB3aW5kb3cuVXRpbHMgPSBVdGlscztcbn0pKCk7IiwiLyoqXG4gKiBAbGljZW5zZVxuICogbG9kYXNoIGxvZGFzaC5jb20vbGljZW5zZSB8IFVuZGVyc2NvcmUuanMgMS44LjMgdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFXG4gKi9cbjsoZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsbil7cmV0dXJuIHQuc2V0KG5bMF0sblsxXSksdH1mdW5jdGlvbiBuKHQsbil7cmV0dXJuIHQuYWRkKG4pLHR9ZnVuY3Rpb24gcih0LG4scil7c3dpdGNoKHIubGVuZ3RoKXtjYXNlIDA6cmV0dXJuIHQuY2FsbChuKTtjYXNlIDE6cmV0dXJuIHQuY2FsbChuLHJbMF0pO2Nhc2UgMjpyZXR1cm4gdC5jYWxsKG4sclswXSxyWzFdKTtjYXNlIDM6cmV0dXJuIHQuY2FsbChuLHJbMF0sclsxXSxyWzJdKX1yZXR1cm4gdC5hcHBseShuLHIpfWZ1bmN0aW9uIGUodCxuLHIsZSl7Zm9yKHZhciB1PS0xLG89dD90Lmxlbmd0aDowOysrdTxvOyl7dmFyIGk9dFt1XTtuKGUsaSxyKGkpLHQpfXJldHVybiBlfWZ1bmN0aW9uIHUodCxuKXtmb3IodmFyIHI9LTEsZT10P3QubGVuZ3RoOjA7KytyPGUmJmZhbHNlIT09bih0W3JdLHIsdCk7KTtyZXR1cm4gdH1mdW5jdGlvbiBvKHQsbil7Zm9yKHZhciByPXQ/dC5sZW5ndGg6MDtyLS0mJmZhbHNlIT09bih0W3JdLHIsdCk7KTtcblx0cmV0dXJuIHR9ZnVuY3Rpb24gaSh0LG4pe2Zvcih2YXIgcj0tMSxlPXQ/dC5sZW5ndGg6MDsrK3I8ZTspaWYoIW4odFtyXSxyLHQpKXJldHVybiBmYWxzZTtyZXR1cm4gdHJ1ZX1mdW5jdGlvbiBmKHQsbil7Zm9yKHZhciByPS0xLGU9dD90Lmxlbmd0aDowLHU9MCxvPVtdOysrcjxlOyl7dmFyIGk9dFtyXTtuKGkscix0KSYmKG9bdSsrXT1pKX1yZXR1cm4gb31mdW5jdGlvbiBjKHQsbil7cmV0dXJuISghdHx8IXQubGVuZ3RoKSYmLTE8ZCh0LG4sMCl9ZnVuY3Rpb24gYSh0LG4scil7Zm9yKHZhciBlPS0xLHU9dD90Lmxlbmd0aDowOysrZTx1OylpZihyKG4sdFtlXSkpcmV0dXJuIHRydWU7cmV0dXJuIGZhbHNlfWZ1bmN0aW9uIGwodCxuKXtmb3IodmFyIHI9LTEsZT10P3QubGVuZ3RoOjAsdT1BcnJheShlKTsrK3I8ZTspdVtyXT1uKHRbcl0scix0KTtyZXR1cm4gdX1mdW5jdGlvbiBzKHQsbil7Zm9yKHZhciByPS0xLGU9bi5sZW5ndGgsdT10Lmxlbmd0aDsrK3I8ZTspdFt1K3JdPW5bcl07cmV0dXJuIHR9ZnVuY3Rpb24gaCh0LG4scixlKXtcblx0dmFyIHU9LTEsbz10P3QubGVuZ3RoOjA7Zm9yKGUmJm8mJihyPXRbKyt1XSk7Kyt1PG87KXI9bihyLHRbdV0sdSx0KTtyZXR1cm4gcn1mdW5jdGlvbiBwKHQsbixyLGUpe3ZhciB1PXQ/dC5sZW5ndGg6MDtmb3IoZSYmdSYmKHI9dFstLXVdKTt1LS07KXI9bihyLHRbdV0sdSx0KTtyZXR1cm4gcn1mdW5jdGlvbiBfKHQsbil7Zm9yKHZhciByPS0xLGU9dD90Lmxlbmd0aDowOysrcjxlOylpZihuKHRbcl0scix0KSlyZXR1cm4gdHJ1ZTtyZXR1cm4gZmFsc2V9ZnVuY3Rpb24gdih0LG4scil7dmFyIGU7cmV0dXJuIHIodCxmdW5jdGlvbih0LHIsdSl7cmV0dXJuIG4odCxyLHUpPyhlPXIsZmFsc2UpOnZvaWQgMH0pLGV9ZnVuY3Rpb24gZyh0LG4scixlKXt2YXIgdT10Lmxlbmd0aDtmb3Iocis9ZT8xOi0xO2U/ci0tOisrcjx1OylpZihuKHRbcl0scix0KSlyZXR1cm4gcjtyZXR1cm4tMX1mdW5jdGlvbiBkKHQsbixyKXtpZihuIT09bilyZXR1cm4gTSh0LHIpOy0tcjtmb3IodmFyIGU9dC5sZW5ndGg7KytyPGU7KWlmKHRbcl09PT1uKXJldHVybiByO1xuXHRyZXR1cm4tMX1mdW5jdGlvbiB5KHQsbixyLGUpey0tcjtmb3IodmFyIHU9dC5sZW5ndGg7KytyPHU7KWlmKGUodFtyXSxuKSlyZXR1cm4gcjtyZXR1cm4tMX1mdW5jdGlvbiBiKHQsbil7dmFyIHI9dD90Lmxlbmd0aDowO3JldHVybiByP3codCxuKS9yOlZ9ZnVuY3Rpb24geCh0LG4scixlLHUpe3JldHVybiB1KHQsZnVuY3Rpb24odCx1LG8pe3I9ZT8oZT1mYWxzZSx0KTpuKHIsdCx1LG8pfSkscn1mdW5jdGlvbiBqKHQsbil7dmFyIHI9dC5sZW5ndGg7Zm9yKHQuc29ydChuKTtyLS07KXRbcl09dFtyXS5jO3JldHVybiB0fWZ1bmN0aW9uIHcodCxuKXtmb3IodmFyIHIsZT0tMSx1PXQubGVuZ3RoOysrZTx1Oyl7dmFyIG89bih0W2VdKTtvIT09VCYmKHI9cj09PVQ/bzpyK28pfXJldHVybiByfWZ1bmN0aW9uIG0odCxuKXtmb3IodmFyIHI9LTEsZT1BcnJheSh0KTsrK3I8dDspZVtyXT1uKHIpO3JldHVybiBlfWZ1bmN0aW9uIEEodCxuKXtyZXR1cm4gbChuLGZ1bmN0aW9uKG4pe3JldHVybltuLHRbbl1dO1xufSl9ZnVuY3Rpb24gTyh0KXtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIHQobil9fWZ1bmN0aW9uIGsodCxuKXtyZXR1cm4gbChuLGZ1bmN0aW9uKG4pe3JldHVybiB0W25dfSl9ZnVuY3Rpb24gRSh0LG4pe3JldHVybiB0LmhhcyhuKX1mdW5jdGlvbiBTKHQsbil7Zm9yKHZhciByPS0xLGU9dC5sZW5ndGg7KytyPGUmJi0xPGQobix0W3JdLDApOyk7cmV0dXJuIHJ9ZnVuY3Rpb24gSSh0LG4pe2Zvcih2YXIgcj10Lmxlbmd0aDtyLS0mJi0xPGQobix0W3JdLDApOyk7cmV0dXJuIHJ9ZnVuY3Rpb24gUih0KXtyZXR1cm4gdCYmdC5PYmplY3Q9PT1PYmplY3Q/dDpudWxsfWZ1bmN0aW9uIFcodCl7cmV0dXJuIHp0W3RdfWZ1bmN0aW9uIEIodCl7cmV0dXJuIFV0W3RdfWZ1bmN0aW9uIEwodCl7cmV0dXJuXCJcXFxcXCIrRHRbdF19ZnVuY3Rpb24gTSh0LG4scil7dmFyIGU9dC5sZW5ndGg7Zm9yKG4rPXI/MTotMTtyP24tLTorK248ZTspe3ZhciB1PXRbbl07aWYodSE9PXUpcmV0dXJuIG59cmV0dXJuLTE7XG59ZnVuY3Rpb24gQyh0KXt2YXIgbj1mYWxzZTtpZihudWxsIT10JiZ0eXBlb2YgdC50b1N0cmluZyE9XCJmdW5jdGlvblwiKXRyeXtuPSEhKHQrXCJcIil9Y2F0Y2gocil7fXJldHVybiBufWZ1bmN0aW9uIHoodCl7Zm9yKHZhciBuLHI9W107IShuPXQubmV4dCgpKS5kb25lOylyLnB1c2gobi52YWx1ZSk7cmV0dXJuIHJ9ZnVuY3Rpb24gVSh0KXt2YXIgbj0tMSxyPUFycmF5KHQuc2l6ZSk7cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbih0LGUpe3JbKytuXT1bZSx0XX0pLHJ9ZnVuY3Rpb24gJCh0LG4pe2Zvcih2YXIgcj0tMSxlPXQubGVuZ3RoLHU9MCxvPVtdOysrcjxlOyl7dmFyIGk9dFtyXTtpIT09biYmXCJfX2xvZGFzaF9wbGFjZWhvbGRlcl9fXCIhPT1pfHwodFtyXT1cIl9fbG9kYXNoX3BsYWNlaG9sZGVyX19cIixvW3UrK109cil9cmV0dXJuIG99ZnVuY3Rpb24gRCh0KXt2YXIgbj0tMSxyPUFycmF5KHQuc2l6ZSk7cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbih0KXtyWysrbl09dH0pLHJ9ZnVuY3Rpb24gRih0KXtcblx0dmFyIG49LTEscj1BcnJheSh0LnNpemUpO3JldHVybiB0LmZvckVhY2goZnVuY3Rpb24odCl7clsrK25dPVt0LHRdfSkscn1mdW5jdGlvbiBOKHQpe2lmKCF0fHwhV3QudGVzdCh0KSlyZXR1cm4gdC5sZW5ndGg7Zm9yKHZhciBuPUl0Lmxhc3RJbmRleD0wO0l0LnRlc3QodCk7KW4rKztyZXR1cm4gbn1mdW5jdGlvbiBQKHQpe3JldHVybiAkdFt0XX1mdW5jdGlvbiBaKFIpe2Z1bmN0aW9uIEF0KHQsbil7cmV0dXJuIFIuc2V0VGltZW91dC5jYWxsKEt0LHQsbil9ZnVuY3Rpb24gT3QodCl7aWYoVGUodCkmJiF5aSh0KSYmISh0IGluc3RhbmNlb2YgVXQpKXtpZih0IGluc3RhbmNlb2YgenQpcmV0dXJuIHQ7aWYoV3UuY2FsbCh0LFwiX193cmFwcGVkX19cIikpcmV0dXJuIGFlKHQpfXJldHVybiBuZXcgenQodCl9ZnVuY3Rpb24ga3QoKXt9ZnVuY3Rpb24genQodCxuKXt0aGlzLl9fd3JhcHBlZF9fPXQsdGhpcy5fX2FjdGlvbnNfXz1bXSx0aGlzLl9fY2hhaW5fXz0hIW4sdGhpcy5fX2luZGV4X189MCxcblx0dGhpcy5fX3ZhbHVlc19fPVR9ZnVuY3Rpb24gVXQodCl7dGhpcy5fX3dyYXBwZWRfXz10LHRoaXMuX19hY3Rpb25zX189W10sdGhpcy5fX2Rpcl9fPTEsdGhpcy5fX2ZpbHRlcmVkX189ZmFsc2UsdGhpcy5fX2l0ZXJhdGVlc19fPVtdLHRoaXMuX190YWtlQ291bnRfXz00Mjk0OTY3Mjk1LHRoaXMuX192aWV3c19fPVtdfWZ1bmN0aW9uICR0KHQpe3ZhciBuPS0xLHI9dD90Lmxlbmd0aDowO2Zvcih0aGlzLmNsZWFyKCk7KytuPHI7KXt2YXIgZT10W25dO3RoaXMuc2V0KGVbMF0sZVsxXSl9fWZ1bmN0aW9uIER0KHQpe3ZhciBuPS0xLHI9dD90Lmxlbmd0aDowO2Zvcih0aGlzLmNsZWFyKCk7KytuPHI7KXt2YXIgZT10W25dO3RoaXMuc2V0KGVbMF0sZVsxXSl9fWZ1bmN0aW9uIFB0KHQpe3ZhciBuPS0xLHI9dD90Lmxlbmd0aDowO2Zvcih0aGlzLmNsZWFyKCk7KytuPHI7KXt2YXIgZT10W25dO3RoaXMuc2V0KGVbMF0sZVsxXSl9fWZ1bmN0aW9uIFp0KHQpe3ZhciBuPS0xLHI9dD90Lmxlbmd0aDowO1xuXHRmb3IodGhpcy5fX2RhdGFfXz1uZXcgUHQ7KytuPHI7KXRoaXMuYWRkKHRbbl0pfWZ1bmN0aW9uIHF0KHQpe3RoaXMuX19kYXRhX189bmV3IER0KHQpfWZ1bmN0aW9uIFZ0KHQsbixyLGUpe3JldHVybiB0PT09VHx8Q2UodCxrdVtyXSkmJiFXdS5jYWxsKGUscik/bjp0fWZ1bmN0aW9uIEp0KHQsbixyKXsocj09PVR8fENlKHRbbl0scikpJiYodHlwZW9mIG4hPVwibnVtYmVyXCJ8fHIhPT1UfHxuIGluIHQpfHwodFtuXT1yKX1mdW5jdGlvbiBZdCh0LG4scil7dmFyIGU9dFtuXTtXdS5jYWxsKHQsbikmJkNlKGUscikmJihyIT09VHx8biBpbiB0KXx8KHRbbl09cil9ZnVuY3Rpb24gSHQodCxuKXtmb3IodmFyIHI9dC5sZW5ndGg7ci0tOylpZihDZSh0W3JdWzBdLG4pKXJldHVybiByO3JldHVybi0xfWZ1bmN0aW9uIFF0KHQsbixyLGUpe3JldHVybiBBbyh0LGZ1bmN0aW9uKHQsdSxvKXtuKGUsdCxyKHQpLG8pfSksZX1mdW5jdGlvbiBYdCh0LG4pe3JldHVybiB0JiZzcihuLGl1KG4pLHQpfVxuXHRmdW5jdGlvbiB0bih0LG4pe2Zvcih2YXIgcj0tMSxlPW51bGw9PXQsdT1uLmxlbmd0aCxvPUFycmF5KHUpOysrcjx1OylvW3JdPWU/VDp1dSh0LG5bcl0pO3JldHVybiBvfWZ1bmN0aW9uIG5uKHQsbixyKXtyZXR1cm4gdD09PXQmJihyIT09VCYmKHQ9cj49dD90OnIpLG4hPT1UJiYodD10Pj1uP3Q6bikpLHR9ZnVuY3Rpb24gcm4odCxuLHIsZSxvLGksZil7dmFyIGM7aWYoZSYmKGM9aT9lKHQsbyxpLGYpOmUodCkpLGMhPT1UKXJldHVybiBjO2lmKCFaZSh0KSlyZXR1cm4gdDtpZihvPXlpKHQpKXtpZihjPUtyKHQpLCFuKXJldHVybiBscih0LGMpfWVsc2V7dmFyIGE9cXIodCksbD1cIltvYmplY3QgRnVuY3Rpb25dXCI9PWF8fFwiW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl1cIj09YTtpZihiaSh0KSlyZXR1cm4gb3IodCxuKTtpZihcIltvYmplY3QgT2JqZWN0XVwiPT1hfHxcIltvYmplY3QgQXJndW1lbnRzXVwiPT1hfHxsJiYhaSl7aWYoQyh0KSlyZXR1cm4gaT90Ont9O2lmKGM9R3IobD97fTp0KSxcblx0XHRcdCFuKXJldHVybiBocih0LFh0KGMsdCkpfWVsc2V7aWYoIUN0W2FdKXJldHVybiBpP3Q6e307Yz1Kcih0LGEscm4sbil9fWlmKGZ8fChmPW5ldyBxdCksaT1mLmdldCh0KSlyZXR1cm4gaTtpZihmLnNldCh0LGMpLCFvKXZhciBzPXI/Z24odCxpdSxUcik6aXUodCk7cmV0dXJuIHUoc3x8dCxmdW5jdGlvbih1LG8pe3MmJihvPXUsdT10W29dKSxZdChjLG8scm4odSxuLHIsZSxvLHQsZikpfSksY31mdW5jdGlvbiBlbih0KXt2YXIgbj1pdSh0KSxyPW4ubGVuZ3RoO3JldHVybiBmdW5jdGlvbihlKXtpZihudWxsPT1lKXJldHVybiFyO2Zvcih2YXIgdT1yO3UtLTspe3ZhciBvPW5bdV0saT10W29dLGY9ZVtvXTtpZihmPT09VCYmIShvIGluIE9iamVjdChlKSl8fCFpKGYpKXJldHVybiBmYWxzZX1yZXR1cm4gdHJ1ZX19ZnVuY3Rpb24gdW4odCl7cmV0dXJuIFplKHQpP1R1KHQpOnt9fWZ1bmN0aW9uIG9uKHQsbixyKXtpZih0eXBlb2YgdCE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBBdShcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7XG5cdFx0cmV0dXJuIEF0KGZ1bmN0aW9uKCl7dC5hcHBseShULHIpfSxuKX1mdW5jdGlvbiBmbih0LG4scixlKXt2YXIgdT0tMSxvPWMsaT10cnVlLGY9dC5sZW5ndGgscz1bXSxoPW4ubGVuZ3RoO2lmKCFmKXJldHVybiBzO3ImJihuPWwobixPKHIpKSksZT8obz1hLGk9ZmFsc2UpOm4ubGVuZ3RoPj0yMDAmJihvPUUsaT1mYWxzZSxuPW5ldyBadChuKSk7dDpmb3IoOysrdTxmOyl7dmFyIHA9dFt1XSxfPXI/cihwKTpwLHA9ZXx8MCE9PXA/cDowO2lmKGkmJl89PT1fKXtmb3IodmFyIHY9aDt2LS07KWlmKG5bdl09PT1fKWNvbnRpbnVlIHQ7cy5wdXNoKHApfWVsc2UgbyhuLF8sZSl8fHMucHVzaChwKX1yZXR1cm4gc31mdW5jdGlvbiBjbih0LG4pe3ZhciByPXRydWU7cmV0dXJuIEFvKHQsZnVuY3Rpb24odCxlLHUpe3JldHVybiByPSEhbih0LGUsdSl9KSxyfWZ1bmN0aW9uIGFuKHQsbixyKXtmb3IodmFyIGU9LTEsdT10Lmxlbmd0aDsrK2U8dTspe3ZhciBvPXRbZV0saT1uKG8pO2lmKG51bGwhPWkmJihmPT09VD9pPT09aSYmIUplKGkpOnIoaSxmKSkpdmFyIGY9aSxjPW87XG5cdH1yZXR1cm4gY31mdW5jdGlvbiBsbih0LG4pe3ZhciByPVtdO3JldHVybiBBbyh0LGZ1bmN0aW9uKHQsZSx1KXtuKHQsZSx1KSYmci5wdXNoKHQpfSkscn1mdW5jdGlvbiBzbih0LG4scixlLHUpe3ZhciBvPS0xLGk9dC5sZW5ndGg7Zm9yKHJ8fChyPUhyKSx1fHwodT1bXSk7KytvPGk7KXt2YXIgZj10W29dO24+MCYmcihmKT9uPjE/c24oZixuLTEscixlLHUpOnModSxmKTplfHwodVt1Lmxlbmd0aF09Zil9cmV0dXJuIHV9ZnVuY3Rpb24gaG4odCxuKXtyZXR1cm4gdCYma28odCxuLGl1KX1mdW5jdGlvbiBwbih0LG4pe3JldHVybiB0JiZFbyh0LG4saXUpfWZ1bmN0aW9uIF9uKHQsbil7cmV0dXJuIGYobixmdW5jdGlvbihuKXtyZXR1cm4gRmUodFtuXSl9KX1mdW5jdGlvbiB2bih0LG4pe249bmUobix0KT9bbl06ZXIobik7Zm9yKHZhciByPTAsZT1uLmxlbmd0aDtudWxsIT10JiZlPnI7KXQ9dFtmZShuW3IrK10pXTtyZXR1cm4gciYmcj09ZT90OlR9ZnVuY3Rpb24gZ24odCxuLHIpe1xuXHRcdHJldHVybiBuPW4odCkseWkodCk/bjpzKG4scih0KSl9ZnVuY3Rpb24gZG4odCxuKXtyZXR1cm4gdD5ufWZ1bmN0aW9uIHluKHQsbil7cmV0dXJuIG51bGwhPXQmJihXdS5jYWxsKHQsbil8fHR5cGVvZiB0PT1cIm9iamVjdFwiJiZuIGluIHQmJm51bGw9PT1KdShPYmplY3QodCkpKX1mdW5jdGlvbiBibih0LG4pe3JldHVybiBudWxsIT10JiZuIGluIE9iamVjdCh0KX1mdW5jdGlvbiB4bih0LG4scil7Zm9yKHZhciBlPXI/YTpjLHU9dFswXS5sZW5ndGgsbz10Lmxlbmd0aCxpPW8sZj1BcnJheShvKSxzPTEvMCxoPVtdO2ktLTspe3ZhciBwPXRbaV07aSYmbiYmKHA9bChwLE8obikpKSxzPXRvKHAubGVuZ3RoLHMpLGZbaV09IXImJihufHx1Pj0xMjAmJnAubGVuZ3RoPj0xMjApP25ldyBadChpJiZwKTpUfXZhciBwPXRbMF0sXz0tMSx2PWZbMF07dDpmb3IoOysrXzx1JiZzPmgubGVuZ3RoOyl7dmFyIGc9cFtfXSxkPW4/bihnKTpnLGc9cnx8MCE9PWc/ZzowO2lmKHY/IUUodixkKTohZShoLGQscikpe1xuXHRcdGZvcihpPW87LS1pOyl7dmFyIHk9ZltpXTtpZih5PyFFKHksZCk6IWUodFtpXSxkLHIpKWNvbnRpbnVlIHR9diYmdi5wdXNoKGQpLGgucHVzaChnKX19cmV0dXJuIGh9ZnVuY3Rpb24gam4odCxuLHIpe3ZhciBlPXt9O3JldHVybiBobih0LGZ1bmN0aW9uKHQsdSxvKXtuKGUscih0KSx1LG8pfSksZX1mdW5jdGlvbiB3bih0LG4sZSl7cmV0dXJuIG5lKG4sdCl8fChuPWVyKG4pLHQ9aWUodCxuKSxuPXZlKG4pKSxuPW51bGw9PXQ/dDp0W2ZlKG4pXSxudWxsPT1uP1Q6cihuLHQsZSl9ZnVuY3Rpb24gbW4odCxuLHIsZSx1KXtpZih0PT09biluPXRydWU7ZWxzZSBpZihudWxsPT10fHxudWxsPT1ufHwhWmUodCkmJiFUZShuKSluPXQhPT10JiZuIT09bjtlbHNlIHQ6e3ZhciBvPXlpKHQpLGk9eWkobiksZj1cIltvYmplY3QgQXJyYXldXCIsYz1cIltvYmplY3QgQXJyYXldXCI7b3x8KGY9cXIodCksZj1cIltvYmplY3QgQXJndW1lbnRzXVwiPT1mP1wiW29iamVjdCBPYmplY3RdXCI6ZiksaXx8KGM9cXIobiksXG5cdFx0Yz1cIltvYmplY3QgQXJndW1lbnRzXVwiPT1jP1wiW29iamVjdCBPYmplY3RdXCI6Yyk7dmFyIGE9XCJbb2JqZWN0IE9iamVjdF1cIj09ZiYmIUModCksaT1cIltvYmplY3QgT2JqZWN0XVwiPT1jJiYhQyhuKTtpZigoYz1mPT1jKSYmIWEpdXx8KHU9bmV3IHF0KSxuPW98fFllKHQpP3pyKHQsbixtbixyLGUsdSk6VXIodCxuLGYsbW4scixlLHUpO2Vsc2V7aWYoISgyJmUpJiYobz1hJiZXdS5jYWxsKHQsXCJfX3dyYXBwZWRfX1wiKSxmPWkmJld1LmNhbGwobixcIl9fd3JhcHBlZF9fXCIpLG98fGYpKXt0PW8/dC52YWx1ZSgpOnQsbj1mP24udmFsdWUoKTpuLHV8fCh1PW5ldyBxdCksbj1tbih0LG4scixlLHUpO2JyZWFrIHR9aWYoYyluOmlmKHV8fCh1PW5ldyBxdCksbz0yJmUsZj1pdSh0KSxpPWYubGVuZ3RoLGM9aXUobikubGVuZ3RoLGk9PWN8fG8pe2ZvcihhPWk7YS0tOyl7dmFyIGw9ZlthXTtpZighKG8/bCBpbiBuOnluKG4sbCkpKXtuPWZhbHNlO2JyZWFrIG59fWlmKGM9dS5nZXQodCkpbj1jPT1uO2Vsc2V7XG5cdFx0Yz10cnVlLHUuc2V0KHQsbik7Zm9yKHZhciBzPW87KythPGk7KXt2YXIgbD1mW2FdLGg9dFtsXSxwPW5bbF07aWYocil2YXIgXz1vP3IocCxoLGwsbix0LHUpOnIoaCxwLGwsdCxuLHUpO2lmKF89PT1UP2ghPT1wJiYhbW4oaCxwLHIsZSx1KTohXyl7Yz1mYWxzZTticmVha31zfHwocz1cImNvbnN0cnVjdG9yXCI9PWwpfWMmJiFzJiYocj10LmNvbnN0cnVjdG9yLGU9bi5jb25zdHJ1Y3RvcixyIT1lJiZcImNvbnN0cnVjdG9yXCJpbiB0JiZcImNvbnN0cnVjdG9yXCJpbiBuJiYhKHR5cGVvZiByPT1cImZ1bmN0aW9uXCImJnIgaW5zdGFuY2VvZiByJiZ0eXBlb2YgZT09XCJmdW5jdGlvblwiJiZlIGluc3RhbmNlb2YgZSkmJihjPWZhbHNlKSksdVtcImRlbGV0ZVwiXSh0KSxuPWN9fWVsc2Ugbj1mYWxzZTtlbHNlIG49ZmFsc2V9fXJldHVybiBufWZ1bmN0aW9uIEFuKHQsbixyLGUpe3ZhciB1PXIubGVuZ3RoLG89dSxpPSFlO2lmKG51bGw9PXQpcmV0dXJuIW87Zm9yKHQ9T2JqZWN0KHQpO3UtLTspe3ZhciBmPXJbdV07aWYoaSYmZlsyXT9mWzFdIT09dFtmWzBdXTohKGZbMF1pbiB0KSlyZXR1cm4gZmFsc2U7XG5cdH1mb3IoOysrdTxvOyl7dmFyIGY9clt1XSxjPWZbMF0sYT10W2NdLGw9ZlsxXTtpZihpJiZmWzJdKXtpZihhPT09VCYmIShjIGluIHQpKXJldHVybiBmYWxzZX1lbHNle2lmKGY9bmV3IHF0LGUpdmFyIHM9ZShhLGwsYyx0LG4sZik7aWYocz09PVQ/IW1uKGwsYSxlLDMsZik6IXMpcmV0dXJuIGZhbHNlfX1yZXR1cm4gdHJ1ZX1mdW5jdGlvbiBPbih0KXtyZXR1cm4hWmUodCl8fEl1JiZJdSBpbiB0P2ZhbHNlOihGZSh0KXx8Qyh0KT96dTp5dCkudGVzdChjZSh0KSl9ZnVuY3Rpb24ga24odCl7cmV0dXJuIHR5cGVvZiB0PT1cImZ1bmN0aW9uXCI/dDpudWxsPT10P3B1OnR5cGVvZiB0PT1cIm9iamVjdFwiP3lpKHQpP1duKHRbMF0sdFsxXSk6Um4odCk6ZHUodCl9ZnVuY3Rpb24gRW4odCl7dD1udWxsPT10P3Q6T2JqZWN0KHQpO3ZhciBuLHI9W107Zm9yKG4gaW4gdClyLnB1c2gobik7cmV0dXJuIHJ9ZnVuY3Rpb24gU24odCxuKXtyZXR1cm4gbj50fWZ1bmN0aW9uIEluKHQsbil7dmFyIHI9LTEsZT1VZSh0KT9BcnJheSh0Lmxlbmd0aCk6W107XG5cdFx0cmV0dXJuIEFvKHQsZnVuY3Rpb24odCx1LG8pe2VbKytyXT1uKHQsdSxvKX0pLGV9ZnVuY3Rpb24gUm4odCl7dmFyIG49UHIodCk7cmV0dXJuIDE9PW4ubGVuZ3RoJiZuWzBdWzJdP3VlKG5bMF1bMF0sblswXVsxXSk6ZnVuY3Rpb24ocil7cmV0dXJuIHI9PT10fHxBbihyLHQsbil9fWZ1bmN0aW9uIFduKHQsbil7cmV0dXJuIG5lKHQpJiZuPT09biYmIVplKG4pP3VlKGZlKHQpLG4pOmZ1bmN0aW9uKHIpe3ZhciBlPXV1KHIsdCk7cmV0dXJuIGU9PT1UJiZlPT09bj9vdShyLHQpOm1uKG4sZSxULDMpfX1mdW5jdGlvbiBCbih0LG4scixlLG8pe2lmKHQhPT1uKXtpZigheWkobikmJiFZZShuKSl2YXIgaT1mdShuKTt1KGl8fG4sZnVuY3Rpb24odSxmKXtpZihpJiYoZj11LHU9bltmXSksWmUodSkpe298fChvPW5ldyBxdCk7dmFyIGM9ZixhPW8sbD10W2NdLHM9bltjXSxoPWEuZ2V0KHMpO2lmKGgpSnQodCxjLGgpO2Vsc2V7dmFyIGg9ZT9lKGwscyxjK1wiXCIsdCxuLGEpOlQscD1oPT09VDtwJiYoaD1zLFxuXHRcdHlpKHMpfHxZZShzKT95aShsKT9oPWw6JGUobCk/aD1scihsKToocD1mYWxzZSxoPXJuKHMsdHJ1ZSkpOlZlKHMpfHx6ZShzKT96ZShsKT9oPXJ1KGwpOiFaZShsKXx8ciYmRmUobCk/KHA9ZmFsc2UsaD1ybihzLHRydWUpKTpoPWw6cD1mYWxzZSksYS5zZXQocyxoKSxwJiZCbihoLHMscixlLGEpLGFbXCJkZWxldGVcIl0ocyksSnQodCxjLGgpfX1lbHNlIGM9ZT9lKHRbZl0sdSxmK1wiXCIsdCxuLG8pOlQsYz09PVQmJihjPXUpLEp0KHQsZixjKX0pfX1mdW5jdGlvbiBMbih0LG4pe3ZhciByPXQubGVuZ3RoO3JldHVybiByPyhuKz0wPm4/cjowLFhyKG4scik/dFtuXTpUKTp2b2lkIDB9ZnVuY3Rpb24gTW4odCxuLHIpe3ZhciBlPS0xO3JldHVybiBuPWwobi5sZW5ndGg/bjpbcHVdLE8oRnIoKSkpLHQ9SW4odCxmdW5jdGlvbih0KXtyZXR1cm57YTpsKG4sZnVuY3Rpb24obil7cmV0dXJuIG4odCl9KSxiOisrZSxjOnR9fSksaih0LGZ1bmN0aW9uKHQsbil7dmFyIGU7dDp7ZT0tMTtmb3IodmFyIHU9dC5hLG89bi5hLGk9dS5sZW5ndGgsZj1yLmxlbmd0aDsrK2U8aTspe1xuXHRcdHZhciBjPWZyKHVbZV0sb1tlXSk7aWYoYyl7ZT1lPj1mP2M6YyooXCJkZXNjXCI9PXJbZV0/LTE6MSk7YnJlYWsgdH19ZT10LmItbi5ifXJldHVybiBlfSl9ZnVuY3Rpb24gQ24odCxuKXtyZXR1cm4gdD1PYmplY3QodCksaChuLGZ1bmN0aW9uKG4scil7cmV0dXJuIHIgaW4gdCYmKG5bcl09dFtyXSksbn0se30pfWZ1bmN0aW9uIHpuKHQsbil7Zm9yKHZhciByPS0xLGU9Z24odCxmdSxCbyksdT1lLmxlbmd0aCxvPXt9Oysrcjx1Oyl7dmFyIGk9ZVtyXSxmPXRbaV07bihmLGkpJiYob1tpXT1mKX1yZXR1cm4gb31mdW5jdGlvbiBVbih0KXtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIG51bGw9PW4/VDpuW3RdfX1mdW5jdGlvbiAkbih0KXtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIHZuKG4sdCl9fWZ1bmN0aW9uIERuKHQsbixyLGUpe3ZhciB1PWU/eTpkLG89LTEsaT1uLmxlbmd0aCxmPXQ7Zm9yKHQ9PT1uJiYobj1scihuKSksciYmKGY9bCh0LE8ocikpKTsrK288aTspZm9yKHZhciBjPTAsYT1uW29dLGE9cj9yKGEpOmE7LTE8KGM9dShmLGEsYyxlKSk7KWYhPT10JiZWdS5jYWxsKGYsYywxKSxcblx0XHRWdS5jYWxsKHQsYywxKTtyZXR1cm4gdH1mdW5jdGlvbiBGbih0LG4pe2Zvcih2YXIgcj10P24ubGVuZ3RoOjAsZT1yLTE7ci0tOyl7dmFyIHU9bltyXTtpZihyPT1lfHx1IT09byl7dmFyIG89dTtpZihYcih1KSlWdS5jYWxsKHQsdSwxKTtlbHNlIGlmKG5lKHUsdCkpZGVsZXRlIHRbZmUodSldO2Vsc2V7dmFyIHU9ZXIodSksaT1pZSh0LHUpO251bGwhPWkmJmRlbGV0ZSBpW2ZlKHZlKHUpKV19fX19ZnVuY3Rpb24gTm4odCxuKXtyZXR1cm4gdCtHdShybygpKihuLXQrMSkpfWZ1bmN0aW9uIFBuKHQsbil7dmFyIHI9XCJcIjtpZighdHx8MT5ufHxuPjkwMDcxOTkyNTQ3NDA5OTEpcmV0dXJuIHI7ZG8gbiUyJiYocis9dCksKG49R3Uobi8yKSkmJih0Kz10KTt3aGlsZShuKTtyZXR1cm4gcn1mdW5jdGlvbiBabih0LG4scixlKXtuPW5lKG4sdCk/W25dOmVyKG4pO2Zvcih2YXIgdT0tMSxvPW4ubGVuZ3RoLGk9by0xLGY9dDtudWxsIT1mJiYrK3U8bzspe3ZhciBjPWZlKG5bdV0pO2lmKFplKGYpKXtcblx0XHR2YXIgYT1yO2lmKHUhPWkpe3ZhciBsPWZbY10sYT1lP2UobCxjLGYpOlQ7YT09PVQmJihhPW51bGw9PWw/WHIoblt1KzFdKT9bXTp7fTpsKX1ZdChmLGMsYSl9Zj1mW2NdfXJldHVybiB0fWZ1bmN0aW9uIFRuKHQsbixyKXt2YXIgZT0tMSx1PXQubGVuZ3RoO2ZvcigwPm4mJihuPS1uPnU/MDp1K24pLHI9cj51P3U6ciwwPnImJihyKz11KSx1PW4+cj8wOnItbj4+PjAsbj4+Pj0wLHI9QXJyYXkodSk7KytlPHU7KXJbZV09dFtlK25dO3JldHVybiByfWZ1bmN0aW9uIHFuKHQsbil7dmFyIHI7cmV0dXJuIEFvKHQsZnVuY3Rpb24odCxlLHUpe3JldHVybiByPW4odCxlLHUpLCFyfSksISFyfWZ1bmN0aW9uIFZuKHQsbixyKXt2YXIgZT0wLHU9dD90Lmxlbmd0aDplO2lmKHR5cGVvZiBuPT1cIm51bWJlclwiJiZuPT09biYmMjE0NzQ4MzY0Nz49dSl7Zm9yKDt1PmU7KXt2YXIgbz1lK3U+Pj4xLGk9dFtvXTtudWxsIT09aSYmIUplKGkpJiYocj9uPj1pOm4+aSk/ZT1vKzE6dT1vfXJldHVybiB1fVxuXHRcdHJldHVybiBLbih0LG4scHUscil9ZnVuY3Rpb24gS24odCxuLHIsZSl7bj1yKG4pO2Zvcih2YXIgdT0wLG89dD90Lmxlbmd0aDowLGk9biE9PW4sZj1udWxsPT09bixjPUplKG4pLGE9bj09PVQ7bz51Oyl7dmFyIGw9R3UoKHUrbykvMikscz1yKHRbbF0pLGg9cyE9PVQscD1udWxsPT09cyxfPXM9PT1zLHY9SmUocyk7KGk/ZXx8XzphP18mJihlfHxoKTpmP18mJmgmJihlfHwhcCk6Yz9fJiZoJiYhcCYmKGV8fCF2KTpwfHx2PzA6ZT9uPj1zOm4+cyk/dT1sKzE6bz1sfXJldHVybiB0byhvLDQyOTQ5NjcyOTQpfWZ1bmN0aW9uIEduKHQsbil7Zm9yKHZhciByPS0xLGU9dC5sZW5ndGgsdT0wLG89W107KytyPGU7KXt2YXIgaT10W3JdLGY9bj9uKGkpOmk7aWYoIXJ8fCFDZShmLGMpKXt2YXIgYz1mO29bdSsrXT0wPT09aT8wOml9fXJldHVybiBvfWZ1bmN0aW9uIEpuKHQpe3JldHVybiB0eXBlb2YgdD09XCJudW1iZXJcIj90OkplKHQpP1Y6K3R9ZnVuY3Rpb24gWW4odCl7aWYodHlwZW9mIHQ9PVwic3RyaW5nXCIpcmV0dXJuIHQ7XG5cdFx0aWYoSmUodCkpcmV0dXJuIG1vP21vLmNhbGwodCk6XCJcIjt2YXIgbj10K1wiXCI7cmV0dXJuXCIwXCI9PW4mJjEvdD09LXE/XCItMFwiOm59ZnVuY3Rpb24gSG4odCxuLHIpe3ZhciBlPS0xLHU9YyxvPXQubGVuZ3RoLGk9dHJ1ZSxmPVtdLGw9ZjtpZihyKWk9ZmFsc2UsdT1hO2Vsc2UgaWYobz49MjAwKXtpZih1PW4/bnVsbDpJbyh0KSlyZXR1cm4gRCh1KTtpPWZhbHNlLHU9RSxsPW5ldyBadH1lbHNlIGw9bj9bXTpmO3Q6Zm9yKDsrK2U8bzspe3ZhciBzPXRbZV0saD1uP24ocyk6cyxzPXJ8fDAhPT1zP3M6MDtpZihpJiZoPT09aCl7Zm9yKHZhciBwPWwubGVuZ3RoO3AtLTspaWYobFtwXT09PWgpY29udGludWUgdDtuJiZsLnB1c2goaCksZi5wdXNoKHMpfWVsc2UgdShsLGgscil8fChsIT09ZiYmbC5wdXNoKGgpLGYucHVzaChzKSl9cmV0dXJuIGZ9ZnVuY3Rpb24gUW4odCxuLHIsZSl7Zm9yKHZhciB1PXQubGVuZ3RoLG89ZT91Oi0xOyhlP28tLTorK288dSkmJm4odFtvXSxvLHQpOyk7cmV0dXJuIHI/VG4odCxlPzA6byxlP28rMTp1KTpUbih0LGU/bysxOjAsZT91Om8pO1xuXHR9ZnVuY3Rpb24gWG4odCxuKXt2YXIgcj10O3JldHVybiByIGluc3RhbmNlb2YgVXQmJihyPXIudmFsdWUoKSksaChuLGZ1bmN0aW9uKHQsbil7cmV0dXJuIG4uZnVuYy5hcHBseShuLnRoaXNBcmcscyhbdF0sbi5hcmdzKSl9LHIpfWZ1bmN0aW9uIHRyKHQsbixyKXtmb3IodmFyIGU9LTEsdT10Lmxlbmd0aDsrK2U8dTspdmFyIG89bz9zKGZuKG8sdFtlXSxuLHIpLGZuKHRbZV0sbyxuLHIpKTp0W2VdO3JldHVybiBvJiZvLmxlbmd0aD9IbihvLG4scik6W119ZnVuY3Rpb24gbnIodCxuLHIpe2Zvcih2YXIgZT0tMSx1PXQubGVuZ3RoLG89bi5sZW5ndGgsaT17fTsrK2U8dTspcihpLHRbZV0sbz5lP25bZV06VCk7cmV0dXJuIGl9ZnVuY3Rpb24gcnIodCl7cmV0dXJuICRlKHQpP3Q6W119ZnVuY3Rpb24gZXIodCl7cmV0dXJuIHlpKHQpP3Q6Q28odCl9ZnVuY3Rpb24gdXIodCxuLHIpe3ZhciBlPXQubGVuZ3RoO3JldHVybiByPXI9PT1UP2U6ciwhbiYmcj49ZT90OlRuKHQsbixyKX1mdW5jdGlvbiBvcih0LG4pe1xuXHRcdGlmKG4pcmV0dXJuIHQuc2xpY2UoKTt2YXIgcj1uZXcgdC5jb25zdHJ1Y3Rvcih0Lmxlbmd0aCk7cmV0dXJuIHQuY29weShyKSxyfWZ1bmN0aW9uIGlyKHQpe3ZhciBuPW5ldyB0LmNvbnN0cnVjdG9yKHQuYnl0ZUxlbmd0aCk7cmV0dXJuIG5ldyBGdShuKS5zZXQobmV3IEZ1KHQpKSxufWZ1bmN0aW9uIGZyKHQsbil7aWYodCE9PW4pe3ZhciByPXQhPT1ULGU9bnVsbD09PXQsdT10PT09dCxvPUplKHQpLGk9biE9PVQsZj1udWxsPT09bixjPW49PT1uLGE9SmUobik7aWYoIWYmJiFhJiYhbyYmdD5ufHxvJiZpJiZjJiYhZiYmIWF8fGUmJmkmJmN8fCFyJiZjfHwhdSlyZXR1cm4gMTtpZighZSYmIW8mJiFhJiZuPnR8fGEmJnImJnUmJiFlJiYhb3x8ZiYmciYmdXx8IWkmJnV8fCFjKXJldHVybi0xfXJldHVybiAwfWZ1bmN0aW9uIGNyKHQsbixyLGUpe3ZhciB1PS0xLG89dC5sZW5ndGgsaT1yLmxlbmd0aCxmPS0xLGM9bi5sZW5ndGgsYT1YdShvLWksMCksbD1BcnJheShjK2EpO2ZvcihlPSFlOysrZjxjOylsW2ZdPW5bZl07XG5cdFx0Zm9yKDsrK3U8aTspKGV8fG8+dSkmJihsW3JbdV1dPXRbdV0pO2Zvcig7YS0tOylsW2YrK109dFt1KytdO3JldHVybiBsfWZ1bmN0aW9uIGFyKHQsbixyLGUpe3ZhciB1PS0xLG89dC5sZW5ndGgsaT0tMSxmPXIubGVuZ3RoLGM9LTEsYT1uLmxlbmd0aCxsPVh1KG8tZiwwKSxzPUFycmF5KGwrYSk7Zm9yKGU9IWU7Kyt1PGw7KXNbdV09dFt1XTtmb3IobD11OysrYzxhOylzW2wrY109bltjXTtmb3IoOysraTxmOykoZXx8bz51KSYmKHNbbCtyW2ldXT10W3UrK10pO3JldHVybiBzfWZ1bmN0aW9uIGxyKHQsbil7dmFyIHI9LTEsZT10Lmxlbmd0aDtmb3Iobnx8KG49QXJyYXkoZSkpOysrcjxlOyluW3JdPXRbcl07cmV0dXJuIG59ZnVuY3Rpb24gc3IodCxuLHIsZSl7cnx8KHI9e30pO2Zvcih2YXIgdT0tMSxvPW4ubGVuZ3RoOysrdTxvOyl7dmFyIGk9blt1XSxmPWU/ZShyW2ldLHRbaV0saSxyLHQpOnRbaV07WXQocixpLGYpfXJldHVybiByfWZ1bmN0aW9uIGhyKHQsbil7cmV0dXJuIHNyKHQsVHIodCksbik7XG5cdH1mdW5jdGlvbiBwcih0LG4pe3JldHVybiBmdW5jdGlvbihyLHUpe3ZhciBvPXlpKHIpP2U6UXQsaT1uP24oKTp7fTtyZXR1cm4gbyhyLHQsRnIodSksaSl9fWZ1bmN0aW9uIF9yKHQpe3JldHVybiBNZShmdW5jdGlvbihuLHIpe3ZhciBlPS0xLHU9ci5sZW5ndGgsbz11PjE/clt1LTFdOlQsaT11PjI/clsyXTpULG89dC5sZW5ndGg+MyYmdHlwZW9mIG89PVwiZnVuY3Rpb25cIj8odS0tLG8pOlQ7Zm9yKGkmJnRlKHJbMF0sclsxXSxpKSYmKG89Mz51P1Q6byx1PTEpLG49T2JqZWN0KG4pOysrZTx1OykoaT1yW2VdKSYmdChuLGksZSxvKTtyZXR1cm4gbn0pfWZ1bmN0aW9uIHZyKHQsbil7cmV0dXJuIGZ1bmN0aW9uKHIsZSl7aWYobnVsbD09cilyZXR1cm4gcjtpZighVWUocikpcmV0dXJuIHQocixlKTtmb3IodmFyIHU9ci5sZW5ndGgsbz1uP3U6LTEsaT1PYmplY3Qocik7KG4/by0tOisrbzx1KSYmZmFsc2UhPT1lKGlbb10sbyxpKTspO3JldHVybiByfX1mdW5jdGlvbiBncih0KXtyZXR1cm4gZnVuY3Rpb24obixyLGUpe1xuXHRcdHZhciB1PS0xLG89T2JqZWN0KG4pO2U9ZShuKTtmb3IodmFyIGk9ZS5sZW5ndGg7aS0tOyl7dmFyIGY9ZVt0P2k6Kyt1XTtpZihmYWxzZT09PXIob1tmXSxmLG8pKWJyZWFrfXJldHVybiBufX1mdW5jdGlvbiBkcih0LG4scil7ZnVuY3Rpb24gZSgpe3JldHVybih0aGlzJiZ0aGlzIT09S3QmJnRoaXMgaW5zdGFuY2VvZiBlP286dCkuYXBwbHkodT9yOnRoaXMsYXJndW1lbnRzKX12YXIgdT0xJm4sbz14cih0KTtyZXR1cm4gZX1mdW5jdGlvbiB5cih0KXtyZXR1cm4gZnVuY3Rpb24obil7bj1ldShuKTt2YXIgcj1XdC50ZXN0KG4pP24ubWF0Y2goSXQpOlQsZT1yP3JbMF06bi5jaGFyQXQoMCk7cmV0dXJuIG49cj91cihyLDEpLmpvaW4oXCJcIik6bi5zbGljZSgxKSxlW3RdKCkrbn19ZnVuY3Rpb24gYnIodCl7cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiBoKHN1KGx1KG4pLnJlcGxhY2UoRXQsXCJcIikpLHQsXCJcIil9fWZ1bmN0aW9uIHhyKHQpe3JldHVybiBmdW5jdGlvbigpe3ZhciBuPWFyZ3VtZW50cztcblx0XHRzd2l0Y2gobi5sZW5ndGgpe2Nhc2UgMDpyZXR1cm4gbmV3IHQ7Y2FzZSAxOnJldHVybiBuZXcgdChuWzBdKTtjYXNlIDI6cmV0dXJuIG5ldyB0KG5bMF0sblsxXSk7Y2FzZSAzOnJldHVybiBuZXcgdChuWzBdLG5bMV0sblsyXSk7Y2FzZSA0OnJldHVybiBuZXcgdChuWzBdLG5bMV0sblsyXSxuWzNdKTtjYXNlIDU6cmV0dXJuIG5ldyB0KG5bMF0sblsxXSxuWzJdLG5bM10sbls0XSk7Y2FzZSA2OnJldHVybiBuZXcgdChuWzBdLG5bMV0sblsyXSxuWzNdLG5bNF0sbls1XSk7Y2FzZSA3OnJldHVybiBuZXcgdChuWzBdLG5bMV0sblsyXSxuWzNdLG5bNF0sbls1XSxuWzZdKX12YXIgcj11bih0LnByb3RvdHlwZSksbj10LmFwcGx5KHIsbik7cmV0dXJuIFplKG4pP246cn19ZnVuY3Rpb24ganIodCxuLGUpe2Z1bmN0aW9uIHUoKXtmb3IodmFyIGk9YXJndW1lbnRzLmxlbmd0aCxmPUFycmF5KGkpLGM9aSxhPURyKHUpO2MtLTspZltjXT1hcmd1bWVudHNbY107cmV0dXJuIGM9Mz5pJiZmWzBdIT09YSYmZltpLTFdIT09YT9bXTokKGYsYSksXG5cdFx0aS09Yy5sZW5ndGgsZT5pP0JyKHQsbixBcix1LnBsYWNlaG9sZGVyLFQsZixjLFQsVCxlLWkpOnIodGhpcyYmdGhpcyE9PUt0JiZ0aGlzIGluc3RhbmNlb2YgdT9vOnQsdGhpcyxmKX12YXIgbz14cih0KTtyZXR1cm4gdX1mdW5jdGlvbiB3cih0KXtyZXR1cm4gZnVuY3Rpb24obixyLGUpe3ZhciB1PU9iamVjdChuKTtpZihyPUZyKHIsMyksIVVlKG4pKXZhciBvPWl1KG4pO3JldHVybiBlPXQob3x8bixmdW5jdGlvbih0LG4pe3JldHVybiBvJiYobj10LHQ9dVtuXSkscih0LG4sdSl9LGUpLGU+LTE/bltvP29bZV06ZV06VH19ZnVuY3Rpb24gbXIodCl7cmV0dXJuIE1lKGZ1bmN0aW9uKG4pe249c24obiwxKTt2YXIgcj1uLmxlbmd0aCxlPXIsdT16dC5wcm90b3R5cGUudGhydTtmb3IodCYmbi5yZXZlcnNlKCk7ZS0tOyl7dmFyIG89bltlXTtpZih0eXBlb2YgbyE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBBdShcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7aWYodSYmIWkmJlwid3JhcHBlclwiPT0kcihvKSl2YXIgaT1uZXcgenQoW10sdHJ1ZSk7XG5cdH1mb3IoZT1pP2U6cjsrK2U8cjspdmFyIG89bltlXSx1PSRyKG8pLGY9XCJ3cmFwcGVyXCI9PXU/Um8obyk6VCxpPWYmJnJlKGZbMF0pJiY0MjQ9PWZbMV0mJiFmWzRdLmxlbmd0aCYmMT09Zls5XT9pWyRyKGZbMF0pXS5hcHBseShpLGZbM10pOjE9PW8ubGVuZ3RoJiZyZShvKT9pW3VdKCk6aS50aHJ1KG8pO3JldHVybiBmdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cyxlPXRbMF07aWYoaSYmMT09dC5sZW5ndGgmJnlpKGUpJiZlLmxlbmd0aD49MjAwKXJldHVybiBpLnBsYW50KGUpLnZhbHVlKCk7Zm9yKHZhciB1PTAsdD1yP25bdV0uYXBwbHkodGhpcyx0KTplOysrdTxyOyl0PW5bdV0uY2FsbCh0aGlzLHQpO3JldHVybiB0fX0pfWZ1bmN0aW9uIEFyKHQsbixyLGUsdSxvLGksZixjLGEpe2Z1bmN0aW9uIGwoKXtmb3IodmFyIGQ9YXJndW1lbnRzLmxlbmd0aCx5PUFycmF5KGQpLGI9ZDtiLS07KXlbYl09YXJndW1lbnRzW2JdO2lmKF8pe3ZhciB4LGo9RHIobCksYj15Lmxlbmd0aDtmb3IoeD0wO2ItLTspeVtiXT09PWomJngrKztcblx0fWlmKGUmJih5PWNyKHksZSx1LF8pKSxvJiYoeT1hcih5LG8saSxfKSksZC09eCxfJiZhPmQpcmV0dXJuIGo9JCh5LGopLEJyKHQsbixBcixsLnBsYWNlaG9sZGVyLHIseSxqLGYsYyxhLWQpO2lmKGo9aD9yOnRoaXMsYj1wP2pbdF06dCxkPXkubGVuZ3RoLGYpe3g9eS5sZW5ndGg7Zm9yKHZhciB3PXRvKGYubGVuZ3RoLHgpLG09bHIoeSk7dy0tOyl7dmFyIEE9Zlt3XTt5W3ddPVhyKEEseCk/bVtBXTpUfX1lbHNlIHYmJmQ+MSYmeS5yZXZlcnNlKCk7cmV0dXJuIHMmJmQ+YyYmKHkubGVuZ3RoPWMpLHRoaXMmJnRoaXMhPT1LdCYmdGhpcyBpbnN0YW5jZW9mIGwmJihiPWd8fHhyKGIpKSxiLmFwcGx5KGoseSl9dmFyIHM9MTI4Jm4saD0xJm4scD0yJm4sXz0yNCZuLHY9NTEyJm4sZz1wP1Q6eHIodCk7cmV0dXJuIGx9ZnVuY3Rpb24gT3IodCxuKXtyZXR1cm4gZnVuY3Rpb24ocixlKXtyZXR1cm4gam4ocix0LG4oZSkpfX1mdW5jdGlvbiBrcih0KXtyZXR1cm4gZnVuY3Rpb24obixyKXt2YXIgZTtcblx0XHRpZihuPT09VCYmcj09PVQpcmV0dXJuIDA7aWYobiE9PVQmJihlPW4pLHIhPT1UKXtpZihlPT09VClyZXR1cm4gcjt0eXBlb2Ygbj09XCJzdHJpbmdcInx8dHlwZW9mIHI9PVwic3RyaW5nXCI/KG49WW4obikscj1ZbihyKSk6KG49Sm4obikscj1KbihyKSksZT10KG4scil9cmV0dXJuIGV9fWZ1bmN0aW9uIEVyKHQpe3JldHVybiBNZShmdW5jdGlvbihuKXtyZXR1cm4gbj0xPT1uLmxlbmd0aCYmeWkoblswXSk/bChuWzBdLE8oRnIoKSkpOmwoc24obiwxLFFyKSxPKEZyKCkpKSxNZShmdW5jdGlvbihlKXt2YXIgdT10aGlzO3JldHVybiB0KG4sZnVuY3Rpb24odCl7cmV0dXJuIHIodCx1LGUpfSl9KX0pfWZ1bmN0aW9uIFNyKHQsbil7bj1uPT09VD9cIiBcIjpZbihuKTt2YXIgcj1uLmxlbmd0aDtyZXR1cm4gMj5yP3I/UG4obix0KTpuOihyPVBuKG4sS3UodC9OKG4pKSksV3QudGVzdChuKT91cihyLm1hdGNoKEl0KSwwLHQpLmpvaW4oXCJcIik6ci5zbGljZSgwLHQpKX1mdW5jdGlvbiBJcih0LG4sZSx1KXtcblx0XHRmdW5jdGlvbiBvKCl7Zm9yKHZhciBuPS0xLGM9YXJndW1lbnRzLmxlbmd0aCxhPS0xLGw9dS5sZW5ndGgscz1BcnJheShsK2MpLGg9dGhpcyYmdGhpcyE9PUt0JiZ0aGlzIGluc3RhbmNlb2Ygbz9mOnQ7KythPGw7KXNbYV09dVthXTtmb3IoO2MtLTspc1thKytdPWFyZ3VtZW50c1srK25dO3JldHVybiByKGgsaT9lOnRoaXMscyl9dmFyIGk9MSZuLGY9eHIodCk7cmV0dXJuIG99ZnVuY3Rpb24gUnIodCl7cmV0dXJuIGZ1bmN0aW9uKG4scixlKXtlJiZ0eXBlb2YgZSE9XCJudW1iZXJcIiYmdGUobixyLGUpJiYocj1lPVQpLG49bnUobiksbj1uPT09bj9uOjAscj09PVQ/KHI9bixuPTApOnI9bnUocil8fDAsZT1lPT09VD9yPm4/MTotMTpudShlKXx8MDt2YXIgdT0tMTtyPVh1KEt1KChyLW4pLyhlfHwxKSksMCk7Zm9yKHZhciBvPUFycmF5KHIpO3ItLTspb1t0P3I6Kyt1XT1uLG4rPWU7cmV0dXJuIG99fWZ1bmN0aW9uIFdyKHQpe3JldHVybiBmdW5jdGlvbihuLHIpe3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmdHlwZW9mIHI9PVwic3RyaW5nXCJ8fChuPW51KG4pLFxuXHRcdHI9bnUocikpLHQobixyKX19ZnVuY3Rpb24gQnIodCxuLHIsZSx1LG8saSxmLGMsYSl7dmFyIGw9OCZuLHM9bD9pOlQ7aT1sP1Q6aTt2YXIgaD1sP286VDtyZXR1cm4gbz1sP1Q6byxuPShufChsPzMyOjY0KSkmfihsPzY0OjMyKSw0Jm58fChuJj0tNCksbj1bdCxuLHUsaCxzLG8saSxmLGMsYV0scj1yLmFwcGx5KFQsbikscmUodCkmJk1vKHIsbiksci5wbGFjZWhvbGRlcj1lLHJ9ZnVuY3Rpb24gTHIodCl7dmFyIG49d3VbdF07cmV0dXJuIGZ1bmN0aW9uKHQscil7aWYodD1udSh0KSxyPXRvKFhlKHIpLDI5Mikpe3ZhciBlPShldSh0KStcImVcIikuc3BsaXQoXCJlXCIpLGU9bihlWzBdK1wiZVwiKygrZVsxXStyKSksZT0oZXUoZSkrXCJlXCIpLnNwbGl0KFwiZVwiKTtyZXR1cm4rKGVbMF0rXCJlXCIrKCtlWzFdLXIpKX1yZXR1cm4gbih0KX19ZnVuY3Rpb24gTXIodCl7cmV0dXJuIGZ1bmN0aW9uKG4pe3ZhciByPXFyKG4pO3JldHVyblwiW29iamVjdCBNYXBdXCI9PXI/VShuKTpcIltvYmplY3QgU2V0XVwiPT1yP0Yobik6QShuLHQobikpO1xuXHR9fWZ1bmN0aW9uIENyKHQsbixyLGUsdSxvLGksZil7dmFyIGM9MiZuO2lmKCFjJiZ0eXBlb2YgdCE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBBdShcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7dmFyIGE9ZT9lLmxlbmd0aDowO2lmKGF8fChuJj0tOTcsZT11PVQpLGk9aT09PVQ/aTpYdShYZShpKSwwKSxmPWY9PT1UP2Y6WGUoZiksYS09dT91Lmxlbmd0aDowLDY0Jm4pe3ZhciBsPWUscz11O2U9dT1UfXZhciBoPWM/VDpSbyh0KTtyZXR1cm4gbz1bdCxuLHIsZSx1LGwscyxvLGksZl0saCYmKHI9b1sxXSx0PWhbMV0sbj1yfHQsZT0xMjg9PXQmJjg9PXJ8fDEyOD09dCYmMjU2PT1yJiZoWzhdPj1vWzddLmxlbmd0aHx8Mzg0PT10JiZoWzhdPj1oWzddLmxlbmd0aCYmOD09ciwxMzE+bnx8ZSkmJigxJnQmJihvWzJdPWhbMl0sbnw9MSZyPzA6NCksKHI9aFszXSkmJihlPW9bM10sb1szXT1lP2NyKGUscixoWzRdKTpyLG9bNF09ZT8kKG9bM10sXCJfX2xvZGFzaF9wbGFjZWhvbGRlcl9fXCIpOmhbNF0pLFxuXHQocj1oWzVdKSYmKGU9b1s1XSxvWzVdPWU/YXIoZSxyLGhbNl0pOnIsb1s2XT1lPyQob1s1XSxcIl9fbG9kYXNoX3BsYWNlaG9sZGVyX19cIik6aFs2XSksKHI9aFs3XSkmJihvWzddPXIpLDEyOCZ0JiYob1s4XT1udWxsPT1vWzhdP2hbOF06dG8ob1s4XSxoWzhdKSksbnVsbD09b1s5XSYmKG9bOV09aFs5XSksb1swXT1oWzBdLG9bMV09biksdD1vWzBdLG49b1sxXSxyPW9bMl0sZT1vWzNdLHU9b1s0XSxmPW9bOV09bnVsbD09b1s5XT9jPzA6dC5sZW5ndGg6WHUob1s5XS1hLDApLCFmJiYyNCZuJiYobiY9LTI1KSwoaD9TbzpNbykobiYmMSE9bj84PT1ufHwxNj09bj9qcih0LG4sZik6MzIhPW4mJjMzIT1ufHx1Lmxlbmd0aD9Bci5hcHBseShULG8pOklyKHQsbixyLGUpOmRyKHQsbixyKSxvKX1mdW5jdGlvbiB6cih0LG4scixlLHUsbyl7dmFyIGk9MiZ1LGY9dC5sZW5ndGgsYz1uLmxlbmd0aDtpZihmIT1jJiYhKGkmJmM+ZikpcmV0dXJuIGZhbHNlO2lmKGM9by5nZXQodCkpcmV0dXJuIGM9PW47XG5cdFx0dmFyIGM9LTEsYT10cnVlLGw9MSZ1P25ldyBadDpUO2ZvcihvLnNldCh0LG4pOysrYzxmOyl7dmFyIHM9dFtjXSxoPW5bY107aWYoZSl2YXIgcD1pP2UoaCxzLGMsbix0LG8pOmUocyxoLGMsdCxuLG8pO2lmKHAhPT1UKXtpZihwKWNvbnRpbnVlO2E9ZmFsc2U7YnJlYWt9aWYobCl7aWYoIV8obixmdW5jdGlvbih0LG4pe3JldHVybiBsLmhhcyhuKXx8cyE9PXQmJiFyKHMsdCxlLHUsbyk/dm9pZCAwOmwuYWRkKG4pfSkpe2E9ZmFsc2U7YnJlYWt9fWVsc2UgaWYocyE9PWgmJiFyKHMsaCxlLHUsbykpe2E9ZmFsc2U7YnJlYWt9fXJldHVybiBvW1wiZGVsZXRlXCJdKHQpLGF9ZnVuY3Rpb24gVXIodCxuLHIsZSx1LG8saSl7c3dpdGNoKHIpe2Nhc2VcIltvYmplY3QgRGF0YVZpZXddXCI6aWYodC5ieXRlTGVuZ3RoIT1uLmJ5dGVMZW5ndGh8fHQuYnl0ZU9mZnNldCE9bi5ieXRlT2Zmc2V0KWJyZWFrO3Q9dC5idWZmZXIsbj1uLmJ1ZmZlcjtjYXNlXCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiOmlmKHQuYnl0ZUxlbmd0aCE9bi5ieXRlTGVuZ3RofHwhZShuZXcgRnUodCksbmV3IEZ1KG4pKSlicmVhaztcblx0XHRyZXR1cm4gdHJ1ZTtjYXNlXCJbb2JqZWN0IEJvb2xlYW5dXCI6Y2FzZVwiW29iamVjdCBEYXRlXVwiOnJldHVybit0PT0rbjtjYXNlXCJbb2JqZWN0IEVycm9yXVwiOnJldHVybiB0Lm5hbWU9PW4ubmFtZSYmdC5tZXNzYWdlPT1uLm1lc3NhZ2U7Y2FzZVwiW29iamVjdCBOdW1iZXJdXCI6cmV0dXJuIHQhPSt0P24hPStuOnQ9PStuO2Nhc2VcIltvYmplY3QgUmVnRXhwXVwiOmNhc2VcIltvYmplY3QgU3RyaW5nXVwiOnJldHVybiB0PT1uK1wiXCI7Y2FzZVwiW29iamVjdCBNYXBdXCI6dmFyIGY9VTtjYXNlXCJbb2JqZWN0IFNldF1cIjppZihmfHwoZj1EKSx0LnNpemUhPW4uc2l6ZSYmISgyJm8pKWJyZWFrO3JldHVybihyPWkuZ2V0KHQpKT9yPT1uOihvfD0xLGkuc2V0KHQsbiksenIoZih0KSxmKG4pLGUsdSxvLGkpKTtjYXNlXCJbb2JqZWN0IFN5bWJvbF1cIjppZih3bylyZXR1cm4gd28uY2FsbCh0KT09d28uY2FsbChuKX1yZXR1cm4gZmFsc2V9ZnVuY3Rpb24gJHIodCl7Zm9yKHZhciBuPXQubmFtZStcIlwiLHI9X29bbl0sZT1XdS5jYWxsKF9vLG4pP3IubGVuZ3RoOjA7ZS0tOyl7XG5cdFx0dmFyIHU9cltlXSxvPXUuZnVuYztpZihudWxsPT1vfHxvPT10KXJldHVybiB1Lm5hbWV9cmV0dXJuIG59ZnVuY3Rpb24gRHIodCl7cmV0dXJuKFd1LmNhbGwoT3QsXCJwbGFjZWhvbGRlclwiKT9PdDp0KS5wbGFjZWhvbGRlcn1mdW5jdGlvbiBGcigpe3ZhciB0PU90Lml0ZXJhdGVlfHxfdSx0PXQ9PT1fdT9rbjp0O3JldHVybiBhcmd1bWVudHMubGVuZ3RoP3QoYXJndW1lbnRzWzBdLGFyZ3VtZW50c1sxXSk6dH1mdW5jdGlvbiBOcih0LG4pe3ZhciByPXQuX19kYXRhX18sZT10eXBlb2YgbjtyZXR1cm4oXCJzdHJpbmdcIj09ZXx8XCJudW1iZXJcIj09ZXx8XCJzeW1ib2xcIj09ZXx8XCJib29sZWFuXCI9PWU/XCJfX3Byb3RvX19cIiE9PW46bnVsbD09PW4pP3JbdHlwZW9mIG49PVwic3RyaW5nXCI/XCJzdHJpbmdcIjpcImhhc2hcIl06ci5tYXB9ZnVuY3Rpb24gUHIodCl7Zm9yKHZhciBuPWl1KHQpLHI9bi5sZW5ndGg7ci0tOyl7dmFyIGU9bltyXSx1PXRbZV07bltyXT1bZSx1LHU9PT11JiYhWmUodSldfXJldHVybiBuO1xuXHR9ZnVuY3Rpb24gWnIodCxuKXt2YXIgcj1udWxsPT10P1Q6dFtuXTtyZXR1cm4gT24ocik/cjpUfWZ1bmN0aW9uIFRyKHQpe3JldHVybiBQdShPYmplY3QodCkpfWZ1bmN0aW9uIHFyKHQpe3JldHVybiBNdS5jYWxsKHQpfWZ1bmN0aW9uIFZyKHQsbixyKXtuPW5lKG4sdCk/W25dOmVyKG4pO2Zvcih2YXIgZSx1PS0xLG89bi5sZW5ndGg7Kyt1PG87KXt2YXIgaT1mZShuW3VdKTtpZighKGU9bnVsbCE9dCYmcih0LGkpKSlicmVhazt0PXRbaV19cmV0dXJuIGU/ZToobz10P3QubGVuZ3RoOjAsISFvJiZQZShvKSYmWHIoaSxvKSYmKHlpKHQpfHxHZSh0KXx8emUodCkpKX1mdW5jdGlvbiBLcih0KXt2YXIgbj10Lmxlbmd0aCxyPXQuY29uc3RydWN0b3Iobik7cmV0dXJuIG4mJlwic3RyaW5nXCI9PXR5cGVvZiB0WzBdJiZXdS5jYWxsKHQsXCJpbmRleFwiKSYmKHIuaW5kZXg9dC5pbmRleCxyLmlucHV0PXQuaW5wdXQpLHJ9ZnVuY3Rpb24gR3IodCl7cmV0dXJuIHR5cGVvZiB0LmNvbnN0cnVjdG9yIT1cImZ1bmN0aW9uXCJ8fGVlKHQpP3t9OnVuKEp1KE9iamVjdCh0KSkpO1xuXHR9ZnVuY3Rpb24gSnIocixlLHUsbyl7dmFyIGk9ci5jb25zdHJ1Y3Rvcjtzd2l0Y2goZSl7Y2FzZVwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIjpyZXR1cm4gaXIocik7Y2FzZVwiW29iamVjdCBCb29sZWFuXVwiOmNhc2VcIltvYmplY3QgRGF0ZV1cIjpyZXR1cm4gbmV3IGkoK3IpO2Nhc2VcIltvYmplY3QgRGF0YVZpZXddXCI6cmV0dXJuIGU9bz9pcihyLmJ1ZmZlcik6ci5idWZmZXIsbmV3IHIuY29uc3RydWN0b3IoZSxyLmJ5dGVPZmZzZXQsci5ieXRlTGVuZ3RoKTtjYXNlXCJbb2JqZWN0IEZsb2F0MzJBcnJheV1cIjpjYXNlXCJbb2JqZWN0IEZsb2F0NjRBcnJheV1cIjpjYXNlXCJbb2JqZWN0IEludDhBcnJheV1cIjpjYXNlXCJbb2JqZWN0IEludDE2QXJyYXldXCI6Y2FzZVwiW29iamVjdCBJbnQzMkFycmF5XVwiOmNhc2VcIltvYmplY3QgVWludDhBcnJheV1cIjpjYXNlXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiOmNhc2VcIltvYmplY3QgVWludDE2QXJyYXldXCI6Y2FzZVwiW29iamVjdCBVaW50MzJBcnJheV1cIjpcblx0XHRyZXR1cm4gZT1vP2lyKHIuYnVmZmVyKTpyLmJ1ZmZlcixuZXcgci5jb25zdHJ1Y3RvcihlLHIuYnl0ZU9mZnNldCxyLmxlbmd0aCk7Y2FzZVwiW29iamVjdCBNYXBdXCI6cmV0dXJuIGU9bz91KFUociksdHJ1ZSk6VShyKSxoKGUsdCxuZXcgci5jb25zdHJ1Y3Rvcik7Y2FzZVwiW29iamVjdCBOdW1iZXJdXCI6Y2FzZVwiW29iamVjdCBTdHJpbmddXCI6cmV0dXJuIG5ldyBpKHIpO2Nhc2VcIltvYmplY3QgUmVnRXhwXVwiOnJldHVybiBlPW5ldyByLmNvbnN0cnVjdG9yKHIuc291cmNlLF90LmV4ZWMocikpLGUubGFzdEluZGV4PXIubGFzdEluZGV4LGU7Y2FzZVwiW29iamVjdCBTZXRdXCI6cmV0dXJuIGU9bz91KEQociksdHJ1ZSk6RChyKSxoKGUsbixuZXcgci5jb25zdHJ1Y3Rvcik7Y2FzZVwiW29iamVjdCBTeW1ib2xdXCI6cmV0dXJuIHdvP09iamVjdCh3by5jYWxsKHIpKTp7fX19ZnVuY3Rpb24gWXIodCl7dmFyIG49dD90Lmxlbmd0aDpUO3JldHVybiBQZShuKSYmKHlpKHQpfHxHZSh0KXx8emUodCkpP20obixTdHJpbmcpOm51bGw7XG5cdH1mdW5jdGlvbiBIcih0KXtyZXR1cm4geWkodCl8fHplKHQpfWZ1bmN0aW9uIFFyKHQpe3JldHVybiB5aSh0KSYmISgyPT10Lmxlbmd0aCYmIUZlKHRbMF0pKX1mdW5jdGlvbiBYcih0LG4pe3JldHVybiBuPW51bGw9PW4/OTAwNzE5OTI1NDc0MDk5MTpuLCEhbiYmKHR5cGVvZiB0PT1cIm51bWJlclwifHx4dC50ZXN0KHQpKSYmdD4tMSYmMD09dCUxJiZuPnR9ZnVuY3Rpb24gdGUodCxuLHIpe2lmKCFaZShyKSlyZXR1cm4gZmFsc2U7dmFyIGU9dHlwZW9mIG47cmV0dXJuKFwibnVtYmVyXCI9PWU/VWUocikmJlhyKG4sci5sZW5ndGgpOlwic3RyaW5nXCI9PWUmJm4gaW4gcik/Q2UocltuXSx0KTpmYWxzZX1mdW5jdGlvbiBuZSh0LG4pe2lmKHlpKHQpKXJldHVybiBmYWxzZTt2YXIgcj10eXBlb2YgdDtyZXR1cm5cIm51bWJlclwiPT1yfHxcInN5bWJvbFwiPT1yfHxcImJvb2xlYW5cIj09cnx8bnVsbD09dHx8SmUodCk/dHJ1ZTp1dC50ZXN0KHQpfHwhZXQudGVzdCh0KXx8bnVsbCE9biYmdCBpbiBPYmplY3Qobil9ZnVuY3Rpb24gcmUodCl7XG5cdFx0dmFyIG49JHIodCkscj1PdFtuXTtyZXR1cm4gdHlwZW9mIHI9PVwiZnVuY3Rpb25cIiYmbiBpbiBVdC5wcm90b3R5cGU/dD09PXI/dHJ1ZToobj1SbyhyKSwhIW4mJnQ9PT1uWzBdKTpmYWxzZX1mdW5jdGlvbiBlZSh0KXt2YXIgbj10JiZ0LmNvbnN0cnVjdG9yO3JldHVybiB0PT09KHR5cGVvZiBuPT1cImZ1bmN0aW9uXCImJm4ucHJvdG90eXBlfHxrdSl9ZnVuY3Rpb24gdWUodCxuKXtyZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIG51bGw9PXI/ZmFsc2U6clt0XT09PW4mJihuIT09VHx8dCBpbiBPYmplY3QocikpfX1mdW5jdGlvbiBvZSh0LG4scixlLHUsbyl7cmV0dXJuIFplKHQpJiZaZShuKSYmQm4odCxuLFQsb2Usby5zZXQobix0KSksdH1mdW5jdGlvbiBpZSh0LG4pe3JldHVybiAxPT1uLmxlbmd0aD90OnZuKHQsVG4obiwwLC0xKSl9ZnVuY3Rpb24gZmUodCl7aWYodHlwZW9mIHQ9PVwic3RyaW5nXCJ8fEplKHQpKXJldHVybiB0O3ZhciBuPXQrXCJcIjtyZXR1cm5cIjBcIj09biYmMS90PT0tcT9cIi0wXCI6bn1mdW5jdGlvbiBjZSh0KXtcblx0XHRpZihudWxsIT10KXt0cnl7cmV0dXJuIFJ1LmNhbGwodCl9Y2F0Y2gobil7fXJldHVybiB0K1wiXCJ9cmV0dXJuXCJcIn1mdW5jdGlvbiBhZSh0KXtpZih0IGluc3RhbmNlb2YgVXQpcmV0dXJuIHQuY2xvbmUoKTt2YXIgbj1uZXcgenQodC5fX3dyYXBwZWRfXyx0Ll9fY2hhaW5fXyk7cmV0dXJuIG4uX19hY3Rpb25zX189bHIodC5fX2FjdGlvbnNfXyksbi5fX2luZGV4X189dC5fX2luZGV4X18sbi5fX3ZhbHVlc19fPXQuX192YWx1ZXNfXyxufWZ1bmN0aW9uIGxlKHQsbixyKXt2YXIgZT10P3QubGVuZ3RoOjA7cmV0dXJuIGU/KG49cnx8bj09PVQ/MTpYZShuKSxUbih0LDA+bj8wOm4sZSkpOltdfWZ1bmN0aW9uIHNlKHQsbixyKXt2YXIgZT10P3QubGVuZ3RoOjA7cmV0dXJuIGU/KG49cnx8bj09PVQ/MTpYZShuKSxuPWUtbixUbih0LDAsMD5uPzA6bikpOltdfWZ1bmN0aW9uIGhlKHQsbixyKXt2YXIgZT10P3QubGVuZ3RoOjA7cmV0dXJuIGU/KHI9bnVsbD09cj8wOlhlKHIpLDA+ciYmKHI9WHUoZStyLDApKSxcblx0XHRnKHQsRnIobiwzKSxyKSk6LTF9ZnVuY3Rpb24gcGUodCxuLHIpe3ZhciBlPXQ/dC5sZW5ndGg6MDtpZighZSlyZXR1cm4tMTt2YXIgdT1lLTE7cmV0dXJuIHIhPT1UJiYodT1YZShyKSx1PTA+cj9YdShlK3UsMCk6dG8odSxlLTEpKSxnKHQsRnIobiwzKSx1LHRydWUpfWZ1bmN0aW9uIF9lKHQpe3JldHVybiB0JiZ0Lmxlbmd0aD90WzBdOlR9ZnVuY3Rpb24gdmUodCl7dmFyIG49dD90Lmxlbmd0aDowO3JldHVybiBuP3Rbbi0xXTpUfWZ1bmN0aW9uIGdlKHQsbil7cmV0dXJuIHQmJnQubGVuZ3RoJiZuJiZuLmxlbmd0aD9Ebih0LG4pOnR9ZnVuY3Rpb24gZGUodCl7cmV0dXJuIHQ/dW8uY2FsbCh0KTp0fWZ1bmN0aW9uIHllKHQpe2lmKCF0fHwhdC5sZW5ndGgpcmV0dXJuW107dmFyIG49MDtyZXR1cm4gdD1mKHQsZnVuY3Rpb24odCl7cmV0dXJuICRlKHQpPyhuPVh1KHQubGVuZ3RoLG4pLHRydWUpOnZvaWQgMH0pLG0obixmdW5jdGlvbihuKXtyZXR1cm4gbCh0LFVuKG4pKX0pfWZ1bmN0aW9uIGJlKHQsbil7XG5cdFx0aWYoIXR8fCF0Lmxlbmd0aClyZXR1cm5bXTt2YXIgZT15ZSh0KTtyZXR1cm4gbnVsbD09bj9lOmwoZSxmdW5jdGlvbih0KXtyZXR1cm4gcihuLFQsdCl9KX1mdW5jdGlvbiB4ZSh0KXtyZXR1cm4gdD1PdCh0KSx0Ll9fY2hhaW5fXz10cnVlLHR9ZnVuY3Rpb24gamUodCxuKXtyZXR1cm4gbih0KX1mdW5jdGlvbiB3ZSgpe3JldHVybiB0aGlzfWZ1bmN0aW9uIG1lKHQsbil7cmV0dXJuKHlpKHQpP3U6QW8pKHQsRnIobiwzKSl9ZnVuY3Rpb24gQWUodCxuKXtyZXR1cm4oeWkodCk/bzpPbykodCxGcihuLDMpKX1mdW5jdGlvbiBPZSh0LG4pe3JldHVybih5aSh0KT9sOkluKSh0LEZyKG4sMykpfWZ1bmN0aW9uIGtlKHQsbixyKXt2YXIgZT0tMSx1PUhlKHQpLG89dS5sZW5ndGgsaT1vLTE7Zm9yKG49KHI/dGUodCxuLHIpOm49PT1UKT8xOm5uKFhlKG4pLDAsbyk7KytlPG47KXQ9Tm4oZSxpKSxyPXVbdF0sdVt0XT11W2VdLHVbZV09cjtyZXR1cm4gdS5sZW5ndGg9bix1fWZ1bmN0aW9uIEVlKCl7XG5cdFx0cmV0dXJuIHh1Lm5vdygpfWZ1bmN0aW9uIFNlKHQsbixyKXtyZXR1cm4gbj1yP1Q6bixuPXQmJm51bGw9PW4/dC5sZW5ndGg6bixDcih0LDEyOCxULFQsVCxULG4pfWZ1bmN0aW9uIEllKHQsbil7dmFyIHI7aWYodHlwZW9mIG4hPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgQXUoXCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIpO3JldHVybiB0PVhlKHQpLGZ1bmN0aW9uKCl7cmV0dXJuIDA8LS10JiYocj1uLmFwcGx5KHRoaXMsYXJndW1lbnRzKSksMT49dCYmKG49VCkscn19ZnVuY3Rpb24gUmUodCxuLHIpe3JldHVybiBuPXI/VDpuLHQ9Q3IodCw4LFQsVCxULFQsVCxuKSx0LnBsYWNlaG9sZGVyPVJlLnBsYWNlaG9sZGVyLHR9ZnVuY3Rpb24gV2UodCxuLHIpe3JldHVybiBuPXI/VDpuLHQ9Q3IodCwxNixULFQsVCxULFQsbiksdC5wbGFjZWhvbGRlcj1XZS5wbGFjZWhvbGRlcix0fWZ1bmN0aW9uIEJlKHQsbixyKXtmdW5jdGlvbiBlKG4pe3ZhciByPWMsZT1hO3JldHVybiBjPWE9VCxfPW4scz10LmFwcGx5KGUscik7XG5cdH1mdW5jdGlvbiB1KHQpe3ZhciByPXQtcDtyZXR1cm4gdC09XyxwPT09VHx8cj49bnx8MD5yfHxnJiZ0Pj1sfWZ1bmN0aW9uIG8oKXt2YXIgdD1FZSgpO2lmKHUodCkpcmV0dXJuIGkodCk7dmFyIHI7cj10LV8sdD1uLSh0LXApLHI9Zz90byh0LGwtcik6dCxoPUF0KG8scil9ZnVuY3Rpb24gaSh0KXtyZXR1cm4gaD1ULGQmJmM/ZSh0KTooYz1hPVQscyl9ZnVuY3Rpb24gZigpe3ZhciB0PUVlKCkscj11KHQpO2lmKGM9YXJndW1lbnRzLGE9dGhpcyxwPXQscil7aWYoaD09PVQpcmV0dXJuIF89dD1wLGg9QXQobyxuKSx2P2UodCk6cztpZihnKXJldHVybiBoPUF0KG8sbiksZShwKX1yZXR1cm4gaD09PVQmJihoPUF0KG8sbikpLHN9dmFyIGMsYSxsLHMsaCxwLF89MCx2PWZhbHNlLGc9ZmFsc2UsZD10cnVlO2lmKHR5cGVvZiB0IT1cImZ1bmN0aW9uXCIpdGhyb3cgbmV3IEF1KFwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiKTtyZXR1cm4gbj1udShuKXx8MCxaZShyKSYmKHY9ISFyLmxlYWRpbmcsbD0oZz1cIm1heFdhaXRcImluIHIpP1h1KG51KHIubWF4V2FpdCl8fDAsbik6bCxcblx0XHRkPVwidHJhaWxpbmdcImluIHI/ISFyLnRyYWlsaW5nOmQpLGYuY2FuY2VsPWZ1bmN0aW9uKCl7Xz0wLGM9cD1hPWg9VH0sZi5mbHVzaD1mdW5jdGlvbigpe3JldHVybiBoPT09VD9zOmkoRWUoKSl9LGZ9ZnVuY3Rpb24gTGUodCxuKXtmdW5jdGlvbiByKCl7dmFyIGU9YXJndW1lbnRzLHU9bj9uLmFwcGx5KHRoaXMsZSk6ZVswXSxvPXIuY2FjaGU7cmV0dXJuIG8uaGFzKHUpP28uZ2V0KHUpOihlPXQuYXBwbHkodGhpcyxlKSxyLmNhY2hlPW8uc2V0KHUsZSksZSl9aWYodHlwZW9mIHQhPVwiZnVuY3Rpb25cInx8biYmdHlwZW9mIG4hPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgQXUoXCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIpO3JldHVybiByLmNhY2hlPW5ldyhMZS5DYWNoZXx8UHQpLHJ9ZnVuY3Rpb24gTWUodCxuKXtpZih0eXBlb2YgdCE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBBdShcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7cmV0dXJuIG49WHUobj09PVQ/dC5sZW5ndGgtMTpYZShuKSwwKSxmdW5jdGlvbigpe1xuXHRcdGZvcih2YXIgZT1hcmd1bWVudHMsdT0tMSxvPVh1KGUubGVuZ3RoLW4sMCksaT1BcnJheShvKTsrK3U8bzspaVt1XT1lW24rdV07c3dpdGNoKG4pe2Nhc2UgMDpyZXR1cm4gdC5jYWxsKHRoaXMsaSk7Y2FzZSAxOnJldHVybiB0LmNhbGwodGhpcyxlWzBdLGkpO2Nhc2UgMjpyZXR1cm4gdC5jYWxsKHRoaXMsZVswXSxlWzFdLGkpfWZvcihvPUFycmF5KG4rMSksdT0tMTsrK3U8bjspb1t1XT1lW3VdO3JldHVybiBvW25dPWkscih0LHRoaXMsbyl9fWZ1bmN0aW9uIENlKHQsbil7cmV0dXJuIHQ9PT1ufHx0IT09dCYmbiE9PW59ZnVuY3Rpb24gemUodCl7cmV0dXJuICRlKHQpJiZXdS5jYWxsKHQsXCJjYWxsZWVcIikmJighcXUuY2FsbCh0LFwiY2FsbGVlXCIpfHxcIltvYmplY3QgQXJndW1lbnRzXVwiPT1NdS5jYWxsKHQpKX1mdW5jdGlvbiBVZSh0KXtyZXR1cm4gbnVsbCE9dCYmUGUoV28odCkpJiYhRmUodCl9ZnVuY3Rpb24gJGUodCl7cmV0dXJuIFRlKHQpJiZVZSh0KX1mdW5jdGlvbiBEZSh0KXtcblx0XHRyZXR1cm4gVGUodCk/XCJbb2JqZWN0IEVycm9yXVwiPT1NdS5jYWxsKHQpfHx0eXBlb2YgdC5tZXNzYWdlPT1cInN0cmluZ1wiJiZ0eXBlb2YgdC5uYW1lPT1cInN0cmluZ1wiOmZhbHNlfWZ1bmN0aW9uIEZlKHQpe3JldHVybiB0PVplKHQpP011LmNhbGwodCk6XCJcIixcIltvYmplY3QgRnVuY3Rpb25dXCI9PXR8fFwiW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl1cIj09dH1mdW5jdGlvbiBOZSh0KXtyZXR1cm4gdHlwZW9mIHQ9PVwibnVtYmVyXCImJnQ9PVhlKHQpfWZ1bmN0aW9uIFBlKHQpe3JldHVybiB0eXBlb2YgdD09XCJudW1iZXJcIiYmdD4tMSYmMD09dCUxJiY5MDA3MTk5MjU0NzQwOTkxPj10fWZ1bmN0aW9uIFplKHQpe3ZhciBuPXR5cGVvZiB0O3JldHVybiEhdCYmKFwib2JqZWN0XCI9PW58fFwiZnVuY3Rpb25cIj09bil9ZnVuY3Rpb24gVGUodCl7cmV0dXJuISF0JiZ0eXBlb2YgdD09XCJvYmplY3RcIn1mdW5jdGlvbiBxZSh0KXtyZXR1cm4gdHlwZW9mIHQ9PVwibnVtYmVyXCJ8fFRlKHQpJiZcIltvYmplY3QgTnVtYmVyXVwiPT1NdS5jYWxsKHQpO1xuXHR9ZnVuY3Rpb24gVmUodCl7cmV0dXJuIVRlKHQpfHxcIltvYmplY3QgT2JqZWN0XVwiIT1NdS5jYWxsKHQpfHxDKHQpP2ZhbHNlOih0PUp1KE9iamVjdCh0KSksbnVsbD09PXQ/dHJ1ZToodD1XdS5jYWxsKHQsXCJjb25zdHJ1Y3RvclwiKSYmdC5jb25zdHJ1Y3Rvcix0eXBlb2YgdD09XCJmdW5jdGlvblwiJiZ0IGluc3RhbmNlb2YgdCYmUnUuY2FsbCh0KT09THUpKX1mdW5jdGlvbiBLZSh0KXtyZXR1cm4gWmUodCkmJlwiW29iamVjdCBSZWdFeHBdXCI9PU11LmNhbGwodCl9ZnVuY3Rpb24gR2UodCl7cmV0dXJuIHR5cGVvZiB0PT1cInN0cmluZ1wifHwheWkodCkmJlRlKHQpJiZcIltvYmplY3QgU3RyaW5nXVwiPT1NdS5jYWxsKHQpfWZ1bmN0aW9uIEplKHQpe3JldHVybiB0eXBlb2YgdD09XCJzeW1ib2xcInx8VGUodCkmJlwiW29iamVjdCBTeW1ib2xdXCI9PU11LmNhbGwodCl9ZnVuY3Rpb24gWWUodCl7cmV0dXJuIFRlKHQpJiZQZSh0Lmxlbmd0aCkmJiEhTXRbTXUuY2FsbCh0KV19ZnVuY3Rpb24gSGUodCl7aWYoIXQpcmV0dXJuW107XG5cdFx0aWYoVWUodCkpcmV0dXJuIEdlKHQpP3QubWF0Y2goSXQpOmxyKHQpO2lmKFp1JiZ0W1p1XSlyZXR1cm4geih0W1p1XSgpKTt2YXIgbj1xcih0KTtyZXR1cm4oXCJbb2JqZWN0IE1hcF1cIj09bj9VOlwiW29iamVjdCBTZXRdXCI9PW4/RDpjdSkodCl9ZnVuY3Rpb24gUWUodCl7cmV0dXJuIHQ/KHQ9bnUodCksdD09PXF8fHQ9PT0tcT8xLjc5NzY5MzEzNDg2MjMxNTdlMzA4KigwPnQ/LTE6MSk6dD09PXQ/dDowKTowPT09dD90OjB9ZnVuY3Rpb24gWGUodCl7dD1RZSh0KTt2YXIgbj10JTE7cmV0dXJuIHQ9PT10P24/dC1uOnQ6MH1mdW5jdGlvbiB0dSh0KXtyZXR1cm4gdD9ubihYZSh0KSwwLDQyOTQ5NjcyOTUpOjB9ZnVuY3Rpb24gbnUodCl7aWYodHlwZW9mIHQ9PVwibnVtYmVyXCIpcmV0dXJuIHQ7aWYoSmUodCkpcmV0dXJuIFY7aWYoWmUodCkmJih0PUZlKHQudmFsdWVPZik/dC52YWx1ZU9mKCk6dCx0PVplKHQpP3QrXCJcIjp0KSx0eXBlb2YgdCE9XCJzdHJpbmdcIilyZXR1cm4gMD09PXQ/dDordDtcblx0XHR0PXQucmVwbGFjZShjdCxcIlwiKTt2YXIgbj1kdC50ZXN0KHQpO3JldHVybiBufHxidC50ZXN0KHQpP050KHQuc2xpY2UoMiksbj8yOjgpOmd0LnRlc3QodCk/VjordH1mdW5jdGlvbiBydSh0KXtyZXR1cm4gc3IodCxmdSh0KSl9ZnVuY3Rpb24gZXUodCl7cmV0dXJuIG51bGw9PXQ/XCJcIjpZbih0KX1mdW5jdGlvbiB1dSh0LG4scil7cmV0dXJuIHQ9bnVsbD09dD9UOnZuKHQsbiksdD09PVQ/cjp0fWZ1bmN0aW9uIG91KHQsbil7cmV0dXJuIG51bGwhPXQmJlZyKHQsbixibil9ZnVuY3Rpb24gaXUodCl7dmFyIG49ZWUodCk7aWYoIW4mJiFVZSh0KSlyZXR1cm4gUXUoT2JqZWN0KHQpKTt2YXIgcixlPVlyKHQpLHU9ISFlLGU9ZXx8W10sbz1lLmxlbmd0aDtmb3IociBpbiB0KSF5bih0LHIpfHx1JiYoXCJsZW5ndGhcIj09cnx8WHIocixvKSl8fG4mJlwiY29uc3RydWN0b3JcIj09cnx8ZS5wdXNoKHIpO3JldHVybiBlfWZ1bmN0aW9uIGZ1KHQpe2Zvcih2YXIgbj0tMSxyPWVlKHQpLGU9RW4odCksdT1lLmxlbmd0aCxvPVlyKHQpLGk9ISFvLG89b3x8W10sZj1vLmxlbmd0aDsrK248dTspe1xuXHRcdHZhciBjPWVbbl07aSYmKFwibGVuZ3RoXCI9PWN8fFhyKGMsZikpfHxcImNvbnN0cnVjdG9yXCI9PWMmJihyfHwhV3UuY2FsbCh0LGMpKXx8by5wdXNoKGMpfXJldHVybiBvfWZ1bmN0aW9uIGN1KHQpe3JldHVybiB0P2sodCxpdSh0KSk6W119ZnVuY3Rpb24gYXUodCl7cmV0dXJuIHFpKGV1KHQpLnRvTG93ZXJDYXNlKCkpfWZ1bmN0aW9uIGx1KHQpe3JldHVybih0PWV1KHQpKSYmdC5yZXBsYWNlKGp0LFcpLnJlcGxhY2UoU3QsXCJcIil9ZnVuY3Rpb24gc3UodCxuLHIpe3JldHVybiB0PWV1KHQpLG49cj9UOm4sbj09PVQmJihuPUJ0LnRlc3QodCk/UnQ6c3QpLHQubWF0Y2gobil8fFtdfWZ1bmN0aW9uIGh1KHQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0fX1mdW5jdGlvbiBwdSh0KXtyZXR1cm4gdH1mdW5jdGlvbiBfdSh0KXtyZXR1cm4ga24odHlwZW9mIHQ9PVwiZnVuY3Rpb25cIj90OnJuKHQsdHJ1ZSkpfWZ1bmN0aW9uIHZ1KHQsbixyKXt2YXIgZT1pdShuKSxvPV9uKG4sZSk7bnVsbCE9cnx8WmUobikmJihvLmxlbmd0aHx8IWUubGVuZ3RoKXx8KHI9bixcblx0XHRuPXQsdD10aGlzLG89X24obixpdShuKSkpO3ZhciBpPSEoWmUocikmJlwiY2hhaW5cImluIHImJiFyLmNoYWluKSxmPUZlKHQpO3JldHVybiB1KG8sZnVuY3Rpb24ocil7dmFyIGU9bltyXTt0W3JdPWUsZiYmKHQucHJvdG90eXBlW3JdPWZ1bmN0aW9uKCl7dmFyIG49dGhpcy5fX2NoYWluX187aWYoaXx8bil7dmFyIHI9dCh0aGlzLl9fd3JhcHBlZF9fKTtyZXR1cm4oci5fX2FjdGlvbnNfXz1scih0aGlzLl9fYWN0aW9uc19fKSkucHVzaCh7ZnVuYzplLGFyZ3M6YXJndW1lbnRzLHRoaXNBcmc6dH0pLHIuX19jaGFpbl9fPW4scn1yZXR1cm4gZS5hcHBseSh0LHMoW3RoaXMudmFsdWUoKV0sYXJndW1lbnRzKSl9KX0pLHR9ZnVuY3Rpb24gZ3UoKXt9ZnVuY3Rpb24gZHUodCl7cmV0dXJuIG5lKHQpP1VuKGZlKHQpKTokbih0KX1mdW5jdGlvbiB5dSgpe3JldHVybltdfWZ1bmN0aW9uIGJ1KCl7cmV0dXJuIGZhbHNlfVI9Uj9HdC5kZWZhdWx0cyh7fSxSLEd0LnBpY2soS3QsTHQpKTpLdDt2YXIgeHU9Ui5EYXRlLGp1PVIuRXJyb3Isd3U9Ui5NYXRoLG11PVIuUmVnRXhwLEF1PVIuVHlwZUVycm9yLE91PVIuQXJyYXkucHJvdG90eXBlLGt1PVIuT2JqZWN0LnByb3RvdHlwZSxFdT1SLlN0cmluZy5wcm90b3R5cGUsU3U9UltcIl9fY29yZS1qc19zaGFyZWRfX1wiXSxJdT1mdW5jdGlvbigpe1xuXHRcdHZhciB0PS9bXi5dKyQvLmV4ZWMoU3UmJlN1LmtleXMmJlN1LmtleXMuSUVfUFJPVE98fFwiXCIpO3JldHVybiB0P1wiU3ltYm9sKHNyYylfMS5cIit0OlwiXCJ9KCksUnU9Ui5GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcsV3U9a3UuaGFzT3duUHJvcGVydHksQnU9MCxMdT1SdS5jYWxsKE9iamVjdCksTXU9a3UudG9TdHJpbmcsQ3U9S3QuXyx6dT1tdShcIl5cIitSdS5jYWxsKFd1KS5yZXBsYWNlKGl0LFwiXFxcXCQmXCIpLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csXCIkMS4qP1wiKStcIiRcIiksVXU9VHQ/Ui5CdWZmZXI6VCwkdT1SLlJlZmxlY3QsRHU9Ui5TeW1ib2wsRnU9Ui5VaW50OEFycmF5LE51PSR1PyR1LmY6VCxQdT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFp1PXR5cGVvZihadT1EdSYmRHUuaXRlcmF0b3IpPT1cInN5bWJvbFwiP1p1OlQsVHU9T2JqZWN0LmNyZWF0ZSxxdT1rdS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxWdT1PdS5zcGxpY2UsS3U9d3UuY2VpbCxHdT13dS5mbG9vcixKdT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsWXU9Ui5pc0Zpbml0ZSxIdT1PdS5qb2luLFF1PU9iamVjdC5rZXlzLFh1PXd1Lm1heCx0bz13dS5taW4sbm89Ui5wYXJzZUludCxybz13dS5yYW5kb20sZW89RXUucmVwbGFjZSx1bz1PdS5yZXZlcnNlLG9vPUV1LnNwbGl0LGlvPVpyKFIsXCJEYXRhVmlld1wiKSxmbz1acihSLFwiTWFwXCIpLGNvPVpyKFIsXCJQcm9taXNlXCIpLGFvPVpyKFIsXCJTZXRcIiksbG89WnIoUixcIldlYWtNYXBcIiksc289WnIoT2JqZWN0LFwiY3JlYXRlXCIpLGhvPWxvJiZuZXcgbG8scG89IXF1LmNhbGwoe1xuXHRcdHZhbHVlT2Y6MX0sXCJ2YWx1ZU9mXCIpLF9vPXt9LHZvPWNlKGlvKSxnbz1jZShmbykseW89Y2UoY28pLGJvPWNlKGFvKSx4bz1jZShsbyksam89RHU/RHUucHJvdG90eXBlOlQsd289am8/am8udmFsdWVPZjpULG1vPWpvP2pvLnRvU3RyaW5nOlQ7T3QudGVtcGxhdGVTZXR0aW5ncz17ZXNjYXBlOnR0LGV2YWx1YXRlOm50LGludGVycG9sYXRlOnJ0LHZhcmlhYmxlOlwiXCIsaW1wb3J0czp7XzpPdH19LE90LnByb3RvdHlwZT1rdC5wcm90b3R5cGUsT3QucHJvdG90eXBlLmNvbnN0cnVjdG9yPU90LHp0LnByb3RvdHlwZT11bihrdC5wcm90b3R5cGUpLHp0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj16dCxVdC5wcm90b3R5cGU9dW4oa3QucHJvdG90eXBlKSxVdC5wcm90b3R5cGUuY29uc3RydWN0b3I9VXQsJHQucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fX2RhdGFfXz1zbz9zbyhudWxsKTp7fX0sJHQucHJvdG90eXBlW1wiZGVsZXRlXCJdPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmhhcyh0KSYmZGVsZXRlIHRoaXMuX19kYXRhX19bdF07XG5cdH0sJHQucHJvdG90eXBlLmdldD1mdW5jdGlvbih0KXt2YXIgbj10aGlzLl9fZGF0YV9fO3JldHVybiBzbz8odD1uW3RdLFwiX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfX1wiPT09dD9UOnQpOld1LmNhbGwobix0KT9uW3RdOlR9LCR0LnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7dmFyIG49dGhpcy5fX2RhdGFfXztyZXR1cm4gc28/blt0XSE9PVQ6V3UuY2FsbChuLHQpfSwkdC5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKHQsbil7cmV0dXJuIHRoaXMuX19kYXRhX19bdF09c28mJm49PT1UP1wiX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfX1wiOm4sdGhpc30sRHQucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fX2RhdGFfXz1bXX0sRHQucHJvdG90eXBlW1wiZGVsZXRlXCJdPWZ1bmN0aW9uKHQpe3ZhciBuPXRoaXMuX19kYXRhX187cmV0dXJuIHQ9SHQobix0KSwwPnQ/ZmFsc2U6KHQ9PW4ubGVuZ3RoLTE/bi5wb3AoKTpWdS5jYWxsKG4sdCwxKSx0cnVlKX0sRHQucHJvdG90eXBlLmdldD1mdW5jdGlvbih0KXtcblx0XHR2YXIgbj10aGlzLl9fZGF0YV9fO3JldHVybiB0PUh0KG4sdCksMD50P1Q6blt0XVsxXX0sRHQucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXtyZXR1cm4tMTxIdCh0aGlzLl9fZGF0YV9fLHQpfSxEdC5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKHQsbil7dmFyIHI9dGhpcy5fX2RhdGFfXyxlPUh0KHIsdCk7cmV0dXJuIDA+ZT9yLnB1c2goW3Qsbl0pOnJbZV1bMV09bix0aGlzfSxQdC5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9fZGF0YV9fPXtoYXNoOm5ldyAkdCxtYXA6bmV3KGZvfHxEdCksc3RyaW5nOm5ldyAkdH19LFB0LnByb3RvdHlwZVtcImRlbGV0ZVwiXT1mdW5jdGlvbih0KXtyZXR1cm4gTnIodGhpcyx0KVtcImRlbGV0ZVwiXSh0KX0sUHQucHJvdG90eXBlLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gTnIodGhpcyx0KS5nZXQodCl9LFB0LnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuIE5yKHRoaXMsdCkuaGFzKHQpfSxQdC5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKHQsbil7XG5cdFx0cmV0dXJuIE5yKHRoaXMsdCkuc2V0KHQsbiksdGhpc30sWnQucHJvdG90eXBlLmFkZD1adC5wcm90b3R5cGUucHVzaD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5zZXQodCxcIl9fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX19cIiksdGhpc30sWnQucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXModCl9LHF0LnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX19kYXRhX189bmV3IER0fSxxdC5wcm90b3R5cGVbXCJkZWxldGVcIl09ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX19kYXRhX19bXCJkZWxldGVcIl0odCl9LHF0LnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KHQpfSxxdC5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh0KX0scXQucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LG4pe3ZhciByPXRoaXMuX19kYXRhX187cmV0dXJuIHIgaW5zdGFuY2VvZiBEdCYmMjAwPT1yLl9fZGF0YV9fLmxlbmd0aCYmKHI9dGhpcy5fX2RhdGFfXz1uZXcgUHQoci5fX2RhdGFfXykpLFxuXHRcdHIuc2V0KHQsbiksdGhpc307dmFyIEFvPXZyKGhuKSxPbz12cihwbix0cnVlKSxrbz1ncigpLEVvPWdyKHRydWUpO051JiYhcXUuY2FsbCh7dmFsdWVPZjoxfSxcInZhbHVlT2ZcIikmJihFbj1mdW5jdGlvbih0KXtyZXR1cm4geihOdSh0KSl9KTt2YXIgU289aG8/ZnVuY3Rpb24odCxuKXtyZXR1cm4gaG8uc2V0KHQsbiksdH06cHUsSW89YW8mJjEvRChuZXcgYW8oWywtMF0pKVsxXT09cT9mdW5jdGlvbih0KXtyZXR1cm4gbmV3IGFvKHQpfTpndSxSbz1obz9mdW5jdGlvbih0KXtyZXR1cm4gaG8uZ2V0KHQpfTpndSxXbz1VbihcImxlbmd0aFwiKTtQdXx8KFRyPXl1KTt2YXIgQm89UHU/ZnVuY3Rpb24odCl7Zm9yKHZhciBuPVtdO3Q7KXMobixUcih0KSksdD1KdShPYmplY3QodCkpO3JldHVybiBufTpUcjsoaW8mJlwiW29iamVjdCBEYXRhVmlld11cIiE9cXIobmV3IGlvKG5ldyBBcnJheUJ1ZmZlcigxKSkpfHxmbyYmXCJbb2JqZWN0IE1hcF1cIiE9cXIobmV3IGZvKXx8Y28mJlwiW29iamVjdCBQcm9taXNlXVwiIT1xcihjby5yZXNvbHZlKCkpfHxhbyYmXCJbb2JqZWN0IFNldF1cIiE9cXIobmV3IGFvKXx8bG8mJlwiW29iamVjdCBXZWFrTWFwXVwiIT1xcihuZXcgbG8pKSYmKHFyPWZ1bmN0aW9uKHQpe1xuXHRcdHZhciBuPU11LmNhbGwodCk7aWYodD0odD1cIltvYmplY3QgT2JqZWN0XVwiPT1uP3QuY29uc3RydWN0b3I6VCk/Y2UodCk6VClzd2l0Y2godCl7Y2FzZSB2bzpyZXR1cm5cIltvYmplY3QgRGF0YVZpZXddXCI7Y2FzZSBnbzpyZXR1cm5cIltvYmplY3QgTWFwXVwiO2Nhc2UgeW86cmV0dXJuXCJbb2JqZWN0IFByb21pc2VdXCI7Y2FzZSBibzpyZXR1cm5cIltvYmplY3QgU2V0XVwiO2Nhc2UgeG86cmV0dXJuXCJbb2JqZWN0IFdlYWtNYXBdXCJ9cmV0dXJuIG59KTt2YXIgTG89U3U/RmU6YnUsTW89ZnVuY3Rpb24oKXt2YXIgdD0wLG49MDtyZXR1cm4gZnVuY3Rpb24ocixlKXt2YXIgdT1FZSgpLG89MTYtKHUtbik7aWYobj11LG8+MCl7aWYoMTUwPD0rK3QpcmV0dXJuIHJ9ZWxzZSB0PTA7cmV0dXJuIFNvKHIsZSl9fSgpLENvPUxlKGZ1bmN0aW9uKHQpe3ZhciBuPVtdO3JldHVybiBldSh0KS5yZXBsYWNlKG90LGZ1bmN0aW9uKHQscixlLHUpe24ucHVzaChlP3UucmVwbGFjZShodCxcIiQxXCIpOnJ8fHQpfSksXG5cdFx0bn0pLHpvPU1lKGZ1bmN0aW9uKHQsbil7cmV0dXJuICRlKHQpP2ZuKHQsc24obiwxLCRlLHRydWUpKTpbXX0pLFVvPU1lKGZ1bmN0aW9uKHQsbil7dmFyIHI9dmUobik7cmV0dXJuICRlKHIpJiYocj1UKSwkZSh0KT9mbih0LHNuKG4sMSwkZSx0cnVlKSxGcihyKSk6W119KSwkbz1NZShmdW5jdGlvbih0LG4pe3ZhciByPXZlKG4pO3JldHVybiAkZShyKSYmKHI9VCksJGUodCk/Zm4odCxzbihuLDEsJGUsdHJ1ZSksVCxyKTpbXX0pLERvPU1lKGZ1bmN0aW9uKHQpe3ZhciBuPWwodCxycik7cmV0dXJuIG4ubGVuZ3RoJiZuWzBdPT09dFswXT94bihuKTpbXX0pLEZvPU1lKGZ1bmN0aW9uKHQpe3ZhciBuPXZlKHQpLHI9bCh0LHJyKTtyZXR1cm4gbj09PXZlKHIpP249VDpyLnBvcCgpLHIubGVuZ3RoJiZyWzBdPT09dFswXT94bihyLEZyKG4pKTpbXX0pLE5vPU1lKGZ1bmN0aW9uKHQpe3ZhciBuPXZlKHQpLHI9bCh0LHJyKTtyZXR1cm4gbj09PXZlKHIpP249VDpyLnBvcCgpLHIubGVuZ3RoJiZyWzBdPT09dFswXT94bihyLFQsbik6W107XG5cdH0pLFBvPU1lKGdlKSxabz1NZShmdW5jdGlvbih0LG4pe249c24obiwxKTt2YXIgcj10P3QubGVuZ3RoOjAsZT10bih0LG4pO3JldHVybiBGbih0LGwobixmdW5jdGlvbih0KXtyZXR1cm4gWHIodCxyKT8rdDp0fSkuc29ydChmcikpLGV9KSxUbz1NZShmdW5jdGlvbih0KXtyZXR1cm4gSG4oc24odCwxLCRlLHRydWUpKX0pLHFvPU1lKGZ1bmN0aW9uKHQpe3ZhciBuPXZlKHQpO3JldHVybiAkZShuKSYmKG49VCksSG4oc24odCwxLCRlLHRydWUpLEZyKG4pKX0pLFZvPU1lKGZ1bmN0aW9uKHQpe3ZhciBuPXZlKHQpO3JldHVybiAkZShuKSYmKG49VCksSG4oc24odCwxLCRlLHRydWUpLFQsbil9KSxLbz1NZShmdW5jdGlvbih0LG4pe3JldHVybiAkZSh0KT9mbih0LG4pOltdfSksR289TWUoZnVuY3Rpb24odCl7cmV0dXJuIHRyKGYodCwkZSkpfSksSm89TWUoZnVuY3Rpb24odCl7dmFyIG49dmUodCk7cmV0dXJuICRlKG4pJiYobj1UKSx0cihmKHQsJGUpLEZyKG4pKX0pLFlvPU1lKGZ1bmN0aW9uKHQpe1xuXHRcdHZhciBuPXZlKHQpO3JldHVybiAkZShuKSYmKG49VCksdHIoZih0LCRlKSxULG4pfSksSG89TWUoeWUpLFFvPU1lKGZ1bmN0aW9uKHQpe3ZhciBuPXQubGVuZ3RoLG49bj4xP3Rbbi0xXTpULG49dHlwZW9mIG49PVwiZnVuY3Rpb25cIj8odC5wb3AoKSxuKTpUO3JldHVybiBiZSh0LG4pfSksWG89TWUoZnVuY3Rpb24odCl7ZnVuY3Rpb24gbihuKXtyZXR1cm4gdG4obix0KX10PXNuKHQsMSk7dmFyIHI9dC5sZW5ndGgsZT1yP3RbMF06MCx1PXRoaXMuX193cmFwcGVkX187cmV0dXJuIShyPjF8fHRoaXMuX19hY3Rpb25zX18ubGVuZ3RoKSYmdSBpbnN0YW5jZW9mIFV0JiZYcihlKT8odT11LnNsaWNlKGUsK2UrKHI/MTowKSksdS5fX2FjdGlvbnNfXy5wdXNoKHtmdW5jOmplLGFyZ3M6W25dLHRoaXNBcmc6VH0pLG5ldyB6dCh1LHRoaXMuX19jaGFpbl9fKS50aHJ1KGZ1bmN0aW9uKHQpe3JldHVybiByJiYhdC5sZW5ndGgmJnQucHVzaChUKSx0fSkpOnRoaXMudGhydShuKX0pLHRpPXByKGZ1bmN0aW9uKHQsbixyKXtcblx0XHRXdS5jYWxsKHQscik/Kyt0W3JdOnRbcl09MX0pLG5pPXdyKGhlKSxyaT13cihwZSksZWk9cHIoZnVuY3Rpb24odCxuLHIpe1d1LmNhbGwodCxyKT90W3JdLnB1c2gobik6dFtyXT1bbl19KSx1aT1NZShmdW5jdGlvbih0LG4sZSl7dmFyIHU9LTEsbz10eXBlb2Ygbj09XCJmdW5jdGlvblwiLGk9bmUobiksZj1VZSh0KT9BcnJheSh0Lmxlbmd0aCk6W107cmV0dXJuIEFvKHQsZnVuY3Rpb24odCl7dmFyIGM9bz9uOmkmJm51bGwhPXQ/dFtuXTpUO2ZbKyt1XT1jP3IoYyx0LGUpOnduKHQsbixlKX0pLGZ9KSxvaT1wcihmdW5jdGlvbih0LG4scil7dFtyXT1ufSksaWk9cHIoZnVuY3Rpb24odCxuLHIpe3Rbcj8wOjFdLnB1c2gobil9LGZ1bmN0aW9uKCl7cmV0dXJuW1tdLFtdXX0pLGZpPU1lKGZ1bmN0aW9uKHQsbil7aWYobnVsbD09dClyZXR1cm5bXTt2YXIgcj1uLmxlbmd0aDtyZXR1cm4gcj4xJiZ0ZSh0LG5bMF0sblsxXSk/bj1bXTpyPjImJnRlKG5bMF0sblsxXSxuWzJdKSYmKG49W25bMF1dKSxcblx0XHRuPTE9PW4ubGVuZ3RoJiZ5aShuWzBdKT9uWzBdOnNuKG4sMSxRciksTW4odCxuLFtdKX0pLGNpPU1lKGZ1bmN0aW9uKHQsbixyKXt2YXIgZT0xO2lmKHIubGVuZ3RoKXZhciB1PSQocixEcihjaSkpLGU9MzJ8ZTtyZXR1cm4gQ3IodCxlLG4scix1KX0pLGFpPU1lKGZ1bmN0aW9uKHQsbixyKXt2YXIgZT0zO2lmKHIubGVuZ3RoKXZhciB1PSQocixEcihhaSkpLGU9MzJ8ZTtyZXR1cm4gQ3IobixlLHQscix1KX0pLGxpPU1lKGZ1bmN0aW9uKHQsbil7cmV0dXJuIG9uKHQsMSxuKX0pLHNpPU1lKGZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gb24odCxudShuKXx8MCxyKX0pO0xlLkNhY2hlPVB0O3ZhciBoaT1NZShmdW5jdGlvbih0LG4pe249MT09bi5sZW5ndGgmJnlpKG5bMF0pP2woblswXSxPKEZyKCkpKTpsKHNuKG4sMSxRciksTyhGcigpKSk7dmFyIGU9bi5sZW5ndGg7cmV0dXJuIE1lKGZ1bmN0aW9uKHUpe2Zvcih2YXIgbz0tMSxpPXRvKHUubGVuZ3RoLGUpOysrbzxpOyl1W29dPW5bb10uY2FsbCh0aGlzLHVbb10pO1xuXHRcdHJldHVybiByKHQsdGhpcyx1KX0pfSkscGk9TWUoZnVuY3Rpb24odCxuKXt2YXIgcj0kKG4sRHIocGkpKTtyZXR1cm4gQ3IodCwzMixULG4scil9KSxfaT1NZShmdW5jdGlvbih0LG4pe3ZhciByPSQobixEcihfaSkpO3JldHVybiBDcih0LDY0LFQsbixyKX0pLHZpPU1lKGZ1bmN0aW9uKHQsbil7cmV0dXJuIENyKHQsMjU2LFQsVCxULHNuKG4sMSkpfSksZ2k9V3IoZG4pLGRpPVdyKGZ1bmN0aW9uKHQsbil7cmV0dXJuIHQ+PW59KSx5aT1BcnJheS5pc0FycmF5LGJpPVV1P2Z1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgVXV9OmJ1LHhpPVdyKFNuKSxqaT1XcihmdW5jdGlvbih0LG4pe3JldHVybiBuPj10fSksd2k9X3IoZnVuY3Rpb24odCxuKXtpZihwb3x8ZWUobil8fFVlKG4pKXNyKG4saXUobiksdCk7ZWxzZSBmb3IodmFyIHIgaW4gbilXdS5jYWxsKG4scikmJll0KHQscixuW3JdKX0pLG1pPV9yKGZ1bmN0aW9uKHQsbil7aWYocG98fGVlKG4pfHxVZShuKSlzcihuLGZ1KG4pLHQpO2Vsc2UgZm9yKHZhciByIGluIG4pWXQodCxyLG5bcl0pO1xuXHR9KSxBaT1fcihmdW5jdGlvbih0LG4scixlKXtzcihuLGZ1KG4pLHQsZSl9KSxPaT1fcihmdW5jdGlvbih0LG4scixlKXtzcihuLGl1KG4pLHQsZSl9KSxraT1NZShmdW5jdGlvbih0LG4pe3JldHVybiB0bih0LHNuKG4sMSkpfSksRWk9TWUoZnVuY3Rpb24odCl7cmV0dXJuIHQucHVzaChULFZ0KSxyKEFpLFQsdCl9KSxTaT1NZShmdW5jdGlvbih0KXtyZXR1cm4gdC5wdXNoKFQsb2UpLHIoTGksVCx0KX0pLElpPU9yKGZ1bmN0aW9uKHQsbixyKXt0W25dPXJ9LGh1KHB1KSksUmk9T3IoZnVuY3Rpb24odCxuLHIpe1d1LmNhbGwodCxuKT90W25dLnB1c2gocik6dFtuXT1bcl19LEZyKSxXaT1NZSh3biksQmk9X3IoZnVuY3Rpb24odCxuLHIpe0JuKHQsbixyKX0pLExpPV9yKGZ1bmN0aW9uKHQsbixyLGUpe0JuKHQsbixyLGUpfSksTWk9TWUoZnVuY3Rpb24odCxuKXtyZXR1cm4gbnVsbD09dD97fToobj1sKHNuKG4sMSksZmUpLENuKHQsZm4oZ24odCxmdSxCbyksbikpKX0pLENpPU1lKGZ1bmN0aW9uKHQsbil7XG5cdFx0cmV0dXJuIG51bGw9PXQ/e306Q24odCxsKHNuKG4sMSksZmUpKX0pLHppPU1yKGl1KSxVaT1NcihmdSksJGk9YnIoZnVuY3Rpb24odCxuLHIpe3JldHVybiBuPW4udG9Mb3dlckNhc2UoKSx0KyhyP2F1KG4pOm4pfSksRGk9YnIoZnVuY3Rpb24odCxuLHIpe3JldHVybiB0KyhyP1wiLVwiOlwiXCIpK24udG9Mb3dlckNhc2UoKX0pLEZpPWJyKGZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gdCsocj9cIiBcIjpcIlwiKStuLnRvTG93ZXJDYXNlKCl9KSxOaT15cihcInRvTG93ZXJDYXNlXCIpLFBpPWJyKGZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gdCsocj9cIl9cIjpcIlwiKStuLnRvTG93ZXJDYXNlKCl9KSxaaT1icihmdW5jdGlvbih0LG4scil7cmV0dXJuIHQrKHI/XCIgXCI6XCJcIikrcWkobil9KSxUaT1icihmdW5jdGlvbih0LG4scil7cmV0dXJuIHQrKHI/XCIgXCI6XCJcIikrbi50b1VwcGVyQ2FzZSgpfSkscWk9eXIoXCJ0b1VwcGVyQ2FzZVwiKSxWaT1NZShmdW5jdGlvbih0LG4pe3RyeXtyZXR1cm4gcih0LFQsbil9Y2F0Y2goZSl7XG5cdFx0cmV0dXJuIERlKGUpP2U6bmV3IGp1KGUpfX0pLEtpPU1lKGZ1bmN0aW9uKHQsbil7cmV0dXJuIHUoc24obiwxKSxmdW5jdGlvbihuKXtuPWZlKG4pLHRbbl09Y2kodFtuXSx0KX0pLHR9KSxHaT1tcigpLEppPW1yKHRydWUpLFlpPU1lKGZ1bmN0aW9uKHQsbil7cmV0dXJuIGZ1bmN0aW9uKHIpe3JldHVybiB3bihyLHQsbil9fSksSGk9TWUoZnVuY3Rpb24odCxuKXtyZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIHduKHQscixuKX19KSxRaT1FcihsKSxYaT1FcihpKSx0Zj1FcihfKSxuZj1ScigpLHJmPVJyKHRydWUpLGVmPWtyKGZ1bmN0aW9uKHQsbil7cmV0dXJuIHQrbn0pLHVmPUxyKFwiY2VpbFwiKSxvZj1rcihmdW5jdGlvbih0LG4pe3JldHVybiB0L259KSxmZj1McihcImZsb29yXCIpLGNmPWtyKGZ1bmN0aW9uKHQsbil7cmV0dXJuIHQqbn0pLGFmPUxyKFwicm91bmRcIiksbGY9a3IoZnVuY3Rpb24odCxuKXtyZXR1cm4gdC1ufSk7cmV0dXJuIE90LmFmdGVyPWZ1bmN0aW9uKHQsbil7aWYodHlwZW9mIG4hPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgQXUoXCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIpO1xuXHRcdHJldHVybiB0PVhlKHQpLGZ1bmN0aW9uKCl7cmV0dXJuIDE+LS10P24uYXBwbHkodGhpcyxhcmd1bWVudHMpOnZvaWQgMH19LE90LmFyeT1TZSxPdC5hc3NpZ249d2ksT3QuYXNzaWduSW49bWksT3QuYXNzaWduSW5XaXRoPUFpLE90LmFzc2lnbldpdGg9T2ksT3QuYXQ9a2ksT3QuYmVmb3JlPUllLE90LmJpbmQ9Y2ksT3QuYmluZEFsbD1LaSxPdC5iaW5kS2V5PWFpLE90LmNhc3RBcnJheT1mdW5jdGlvbigpe2lmKCFhcmd1bWVudHMubGVuZ3RoKXJldHVybltdO3ZhciB0PWFyZ3VtZW50c1swXTtyZXR1cm4geWkodCk/dDpbdF19LE90LmNoYWluPXhlLE90LmNodW5rPWZ1bmN0aW9uKHQsbixyKXtpZihuPShyP3RlKHQsbixyKTpuPT09VCk/MTpYdShYZShuKSwwKSxyPXQ/dC5sZW5ndGg6MCwhcnx8MT5uKXJldHVybltdO2Zvcih2YXIgZT0wLHU9MCxvPUFycmF5KEt1KHIvbikpO3I+ZTspb1t1KytdPVRuKHQsZSxlKz1uKTtyZXR1cm4gb30sT3QuY29tcGFjdD1mdW5jdGlvbih0KXtmb3IodmFyIG49LTEscj10P3QubGVuZ3RoOjAsZT0wLHU9W107KytuPHI7KXtcblx0XHR2YXIgbz10W25dO28mJih1W2UrK109byl9cmV0dXJuIHV9LE90LmNvbmNhdD1mdW5jdGlvbigpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49QXJyYXkodD90LTE6MCkscj1hcmd1bWVudHNbMF0sZT10O2UtLTspbltlLTFdPWFyZ3VtZW50c1tlXTtyZXR1cm4gdD9zKHlpKHIpP2xyKHIpOltyXSxzbihuLDEpKTpbXX0sT3QuY29uZD1mdW5jdGlvbih0KXt2YXIgbj10P3QubGVuZ3RoOjAsZT1GcigpO3JldHVybiB0PW4/bCh0LGZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHRbMV0pdGhyb3cgbmV3IEF1KFwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiKTtyZXR1cm5bZSh0WzBdKSx0WzFdXX0pOltdLE1lKGZ1bmN0aW9uKGUpe2Zvcih2YXIgdT0tMTsrK3U8bjspe3ZhciBvPXRbdV07aWYocihvWzBdLHRoaXMsZSkpcmV0dXJuIHIob1sxXSx0aGlzLGUpfX0pfSxPdC5jb25mb3Jtcz1mdW5jdGlvbih0KXtyZXR1cm4gZW4ocm4odCx0cnVlKSl9LE90LmNvbnN0YW50PWh1LE90LmNvdW50Qnk9dGksXG5cdFx0T3QuY3JlYXRlPWZ1bmN0aW9uKHQsbil7dmFyIHI9dW4odCk7cmV0dXJuIG4/WHQocixuKTpyfSxPdC5jdXJyeT1SZSxPdC5jdXJyeVJpZ2h0PVdlLE90LmRlYm91bmNlPUJlLE90LmRlZmF1bHRzPUVpLE90LmRlZmF1bHRzRGVlcD1TaSxPdC5kZWZlcj1saSxPdC5kZWxheT1zaSxPdC5kaWZmZXJlbmNlPXpvLE90LmRpZmZlcmVuY2VCeT1VbyxPdC5kaWZmZXJlbmNlV2l0aD0kbyxPdC5kcm9wPWxlLE90LmRyb3BSaWdodD1zZSxPdC5kcm9wUmlnaHRXaGlsZT1mdW5jdGlvbih0LG4pe3JldHVybiB0JiZ0Lmxlbmd0aD9Rbih0LEZyKG4sMyksdHJ1ZSx0cnVlKTpbXX0sT3QuZHJvcFdoaWxlPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQmJnQubGVuZ3RoP1FuKHQsRnIobiwzKSx0cnVlKTpbXX0sT3QuZmlsbD1mdW5jdGlvbih0LG4scixlKXt2YXIgdT10P3QubGVuZ3RoOjA7aWYoIXUpcmV0dXJuW107Zm9yKHImJnR5cGVvZiByIT1cIm51bWJlclwiJiZ0ZSh0LG4scikmJihyPTAsZT11KSx1PXQubGVuZ3RoLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgcj1YZShyKSwwPnImJihyPS1yPnU/MDp1K3IpLGU9ZT09PVR8fGU+dT91OlhlKGUpLDA+ZSYmKGUrPXUpLGU9cj5lPzA6dHUoZSk7ZT5yOyl0W3IrK109bjtyZXR1cm4gdH0sT3QuZmlsdGVyPWZ1bmN0aW9uKHQsbil7cmV0dXJuKHlpKHQpP2Y6bG4pKHQsRnIobiwzKSl9LE90LmZsYXRNYXA9ZnVuY3Rpb24odCxuKXtyZXR1cm4gc24oT2UodCxuKSwxKX0sT3QuZmxhdE1hcERlZXA9ZnVuY3Rpb24odCxuKXtyZXR1cm4gc24oT2UodCxuKSxxKX0sT3QuZmxhdE1hcERlcHRoPWZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gcj1yPT09VD8xOlhlKHIpLHNuKE9lKHQsbikscil9LE90LmZsYXR0ZW49ZnVuY3Rpb24odCl7cmV0dXJuIHQmJnQubGVuZ3RoP3NuKHQsMSk6W119LE90LmZsYXR0ZW5EZWVwPWZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0Lmxlbmd0aD9zbih0LHEpOltdfSxPdC5mbGF0dGVuRGVwdGg9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdCYmdC5sZW5ndGg/KG49bj09PVQ/MTpYZShuKSxzbih0LG4pKTpbXTtcblx0fSxPdC5mbGlwPWZ1bmN0aW9uKHQpe3JldHVybiBDcih0LDUxMil9LE90LmZsb3c9R2ksT3QuZmxvd1JpZ2h0PUppLE90LmZyb21QYWlycz1mdW5jdGlvbih0KXtmb3IodmFyIG49LTEscj10P3QubGVuZ3RoOjAsZT17fTsrK248cjspe3ZhciB1PXRbbl07ZVt1WzBdXT11WzFdfXJldHVybiBlfSxPdC5mdW5jdGlvbnM9ZnVuY3Rpb24odCl7cmV0dXJuIG51bGw9PXQ/W106X24odCxpdSh0KSl9LE90LmZ1bmN0aW9uc0luPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsPT10P1tdOl9uKHQsZnUodCkpfSxPdC5ncm91cEJ5PWVpLE90LmluaXRpYWw9ZnVuY3Rpb24odCl7cmV0dXJuIHNlKHQsMSl9LE90LmludGVyc2VjdGlvbj1EbyxPdC5pbnRlcnNlY3Rpb25CeT1GbyxPdC5pbnRlcnNlY3Rpb25XaXRoPU5vLE90LmludmVydD1JaSxPdC5pbnZlcnRCeT1SaSxPdC5pbnZva2VNYXA9dWksT3QuaXRlcmF0ZWU9X3UsT3Qua2V5Qnk9b2ksT3Qua2V5cz1pdSxPdC5rZXlzSW49ZnUsT3QubWFwPU9lLFxuXHRcdE90Lm1hcEtleXM9ZnVuY3Rpb24odCxuKXt2YXIgcj17fTtyZXR1cm4gbj1GcihuLDMpLGhuKHQsZnVuY3Rpb24odCxlLHUpe3Jbbih0LGUsdSldPXR9KSxyfSxPdC5tYXBWYWx1ZXM9ZnVuY3Rpb24odCxuKXt2YXIgcj17fTtyZXR1cm4gbj1GcihuLDMpLGhuKHQsZnVuY3Rpb24odCxlLHUpe3JbZV09bih0LGUsdSl9KSxyfSxPdC5tYXRjaGVzPWZ1bmN0aW9uKHQpe3JldHVybiBSbihybih0LHRydWUpKX0sT3QubWF0Y2hlc1Byb3BlcnR5PWZ1bmN0aW9uKHQsbil7cmV0dXJuIFduKHQscm4obix0cnVlKSl9LE90Lm1lbW9pemU9TGUsT3QubWVyZ2U9QmksT3QubWVyZ2VXaXRoPUxpLE90Lm1ldGhvZD1ZaSxPdC5tZXRob2RPZj1IaSxPdC5taXhpbj12dSxPdC5uZWdhdGU9ZnVuY3Rpb24odCl7aWYodHlwZW9mIHQhPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgQXUoXCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIpO3JldHVybiBmdW5jdGlvbigpe3JldHVybiF0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX19LE90Lm50aEFyZz1mdW5jdGlvbih0KXtcblx0XHRyZXR1cm4gdD1YZSh0KSxNZShmdW5jdGlvbihuKXtyZXR1cm4gTG4obix0KX0pfSxPdC5vbWl0PU1pLE90Lm9taXRCeT1mdW5jdGlvbih0LG4pe3JldHVybiBuPUZyKG4pLHpuKHQsZnVuY3Rpb24odCxyKXtyZXR1cm4hbih0LHIpfSl9LE90Lm9uY2U9ZnVuY3Rpb24odCl7cmV0dXJuIEllKDIsdCl9LE90Lm9yZGVyQnk9ZnVuY3Rpb24odCxuLHIsZSl7cmV0dXJuIG51bGw9PXQ/W106KHlpKG4pfHwobj1udWxsPT1uP1tdOltuXSkscj1lP1Q6cix5aShyKXx8KHI9bnVsbD09cj9bXTpbcl0pLE1uKHQsbixyKSl9LE90Lm92ZXI9UWksT3Qub3ZlckFyZ3M9aGksT3Qub3ZlckV2ZXJ5PVhpLE90Lm92ZXJTb21lPXRmLE90LnBhcnRpYWw9cGksT3QucGFydGlhbFJpZ2h0PV9pLE90LnBhcnRpdGlvbj1paSxPdC5waWNrPUNpLE90LnBpY2tCeT1mdW5jdGlvbih0LG4pe3JldHVybiBudWxsPT10P3t9OnpuKHQsRnIobikpfSxPdC5wcm9wZXJ0eT1kdSxPdC5wcm9wZXJ0eU9mPWZ1bmN0aW9uKHQpe1xuXHRcdHJldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gbnVsbD09dD9UOnZuKHQsbil9fSxPdC5wdWxsPVBvLE90LnB1bGxBbGw9Z2UsT3QucHVsbEFsbEJ5PWZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gdCYmdC5sZW5ndGgmJm4mJm4ubGVuZ3RoP0RuKHQsbixGcihyKSk6dH0sT3QucHVsbEFsbFdpdGg9ZnVuY3Rpb24odCxuLHIpe3JldHVybiB0JiZ0Lmxlbmd0aCYmbiYmbi5sZW5ndGg/RG4odCxuLFQscik6dH0sT3QucHVsbEF0PVpvLE90LnJhbmdlPW5mLE90LnJhbmdlUmlnaHQ9cmYsT3QucmVhcmc9dmksT3QucmVqZWN0PWZ1bmN0aW9uKHQsbil7dmFyIHI9eWkodCk/ZjpsbjtyZXR1cm4gbj1GcihuLDMpLHIodCxmdW5jdGlvbih0LHIsZSl7cmV0dXJuIW4odCxyLGUpfSl9LE90LnJlbW92ZT1mdW5jdGlvbih0LG4pe3ZhciByPVtdO2lmKCF0fHwhdC5sZW5ndGgpcmV0dXJuIHI7dmFyIGU9LTEsdT1bXSxvPXQubGVuZ3RoO2ZvcihuPUZyKG4sMyk7KytlPG87KXt2YXIgaT10W2VdO24oaSxlLHQpJiYoci5wdXNoKGkpLFxuXHRcdHUucHVzaChlKSl9cmV0dXJuIEZuKHQsdSkscn0sT3QucmVzdD1NZSxPdC5yZXZlcnNlPWRlLE90LnNhbXBsZVNpemU9a2UsT3Quc2V0PWZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gbnVsbD09dD90OlpuKHQsbixyKX0sT3Quc2V0V2l0aD1mdW5jdGlvbih0LG4scixlKXtyZXR1cm4gZT10eXBlb2YgZT09XCJmdW5jdGlvblwiP2U6VCxudWxsPT10P3Q6Wm4odCxuLHIsZSl9LE90LnNodWZmbGU9ZnVuY3Rpb24odCl7cmV0dXJuIGtlKHQsNDI5NDk2NzI5NSl9LE90LnNsaWNlPWZ1bmN0aW9uKHQsbixyKXt2YXIgZT10P3QubGVuZ3RoOjA7cmV0dXJuIGU/KHImJnR5cGVvZiByIT1cIm51bWJlclwiJiZ0ZSh0LG4scik/KG49MCxyPWUpOihuPW51bGw9PW4/MDpYZShuKSxyPXI9PT1UP2U6WGUocikpLFRuKHQsbixyKSk6W119LE90LnNvcnRCeT1maSxPdC5zb3J0ZWRVbmlxPWZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0Lmxlbmd0aD9Hbih0KTpbXX0sT3Quc29ydGVkVW5pcUJ5PWZ1bmN0aW9uKHQsbil7XG5cdFx0cmV0dXJuIHQmJnQubGVuZ3RoP0duKHQsRnIobikpOltdfSxPdC5zcGxpdD1mdW5jdGlvbih0LG4scil7cmV0dXJuIHImJnR5cGVvZiByIT1cIm51bWJlclwiJiZ0ZSh0LG4scikmJihuPXI9VCkscj1yPT09VD80Mjk0OTY3Mjk1OnI+Pj4wLHI/KHQ9ZXUodCkpJiYodHlwZW9mIG49PVwic3RyaW5nXCJ8fG51bGwhPW4mJiFLZShuKSkmJihuPVluKG4pLFwiXCI9PW4mJld0LnRlc3QodCkpP3VyKHQubWF0Y2goSXQpLDAscik6b28uY2FsbCh0LG4scik6W119LE90LnNwcmVhZD1mdW5jdGlvbih0LG4pe2lmKHR5cGVvZiB0IT1cImZ1bmN0aW9uXCIpdGhyb3cgbmV3IEF1KFwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiKTtyZXR1cm4gbj1uPT09VD8wOlh1KFhlKG4pLDApLE1lKGZ1bmN0aW9uKGUpe3ZhciB1PWVbbl07cmV0dXJuIGU9dXIoZSwwLG4pLHUmJnMoZSx1KSxyKHQsdGhpcyxlKX0pfSxPdC50YWlsPWZ1bmN0aW9uKHQpe3JldHVybiBsZSh0LDEpfSxPdC50YWtlPWZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gdCYmdC5sZW5ndGg/KG49cnx8bj09PVQ/MTpYZShuKSxcblx0XHRUbih0LDAsMD5uPzA6bikpOltdfSxPdC50YWtlUmlnaHQ9ZnVuY3Rpb24odCxuLHIpe3ZhciBlPXQ/dC5sZW5ndGg6MDtyZXR1cm4gZT8obj1yfHxuPT09VD8xOlhlKG4pLG49ZS1uLFRuKHQsMD5uPzA6bixlKSk6W119LE90LnRha2VSaWdodFdoaWxlPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQmJnQubGVuZ3RoP1FuKHQsRnIobiwzKSxmYWxzZSx0cnVlKTpbXX0sT3QudGFrZVdoaWxlPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQmJnQubGVuZ3RoP1FuKHQsRnIobiwzKSk6W119LE90LnRhcD1mdW5jdGlvbih0LG4pe3JldHVybiBuKHQpLHR9LE90LnRocm90dGxlPWZ1bmN0aW9uKHQsbixyKXt2YXIgZT10cnVlLHU9dHJ1ZTtpZih0eXBlb2YgdCE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBBdShcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7cmV0dXJuIFplKHIpJiYoZT1cImxlYWRpbmdcImluIHI/ISFyLmxlYWRpbmc6ZSx1PVwidHJhaWxpbmdcImluIHI/ISFyLnRyYWlsaW5nOnUpLEJlKHQsbix7bGVhZGluZzplLG1heFdhaXQ6bixcblx0XHR0cmFpbGluZzp1fSl9LE90LnRocnU9amUsT3QudG9BcnJheT1IZSxPdC50b1BhaXJzPXppLE90LnRvUGFpcnNJbj1VaSxPdC50b1BhdGg9ZnVuY3Rpb24odCl7cmV0dXJuIHlpKHQpP2wodCxmZSk6SmUodCk/W3RdOmxyKENvKHQpKX0sT3QudG9QbGFpbk9iamVjdD1ydSxPdC50cmFuc2Zvcm09ZnVuY3Rpb24odCxuLHIpe3ZhciBlPXlpKHQpfHxZZSh0KTtpZihuPUZyKG4sNCksbnVsbD09cilpZihlfHxaZSh0KSl7dmFyIG89dC5jb25zdHJ1Y3RvcjtyPWU/eWkodCk/bmV3IG86W106RmUobyk/dW4oSnUoT2JqZWN0KHQpKSk6e319ZWxzZSByPXt9O3JldHVybihlP3U6aG4pKHQsZnVuY3Rpb24odCxlLHUpe3JldHVybiBuKHIsdCxlLHUpfSkscn0sT3QudW5hcnk9ZnVuY3Rpb24odCl7cmV0dXJuIFNlKHQsMSl9LE90LnVuaW9uPVRvLE90LnVuaW9uQnk9cW8sT3QudW5pb25XaXRoPVZvLE90LnVuaXE9ZnVuY3Rpb24odCl7cmV0dXJuIHQmJnQubGVuZ3RoP0huKHQpOltdfSxPdC51bmlxQnk9ZnVuY3Rpb24odCxuKXtcblx0XHRyZXR1cm4gdCYmdC5sZW5ndGg/SG4odCxGcihuKSk6W119LE90LnVuaXFXaXRoPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQmJnQubGVuZ3RoP0huKHQsVCxuKTpbXX0sT3QudW5zZXQ9ZnVuY3Rpb24odCxuKXt2YXIgcjtpZihudWxsPT10KXI9dHJ1ZTtlbHNle3I9dDt2YXIgZT1uLGU9bmUoZSxyKT9bZV06ZXIoZSk7cj1pZShyLGUpLGU9ZmUodmUoZSkpLHI9IShudWxsIT1yJiZ5bihyLGUpKXx8ZGVsZXRlIHJbZV19cmV0dXJuIHJ9LE90LnVuemlwPXllLE90LnVuemlwV2l0aD1iZSxPdC51cGRhdGU9ZnVuY3Rpb24odCxuLHIpe3JldHVybiBudWxsPT10P3Q6Wm4odCxuLCh0eXBlb2Ygcj09XCJmdW5jdGlvblwiP3I6cHUpKHZuKHQsbikpLHZvaWQgMCl9LE90LnVwZGF0ZVdpdGg9ZnVuY3Rpb24odCxuLHIsZSl7cmV0dXJuIGU9dHlwZW9mIGU9PVwiZnVuY3Rpb25cIj9lOlQsbnVsbCE9dCYmKHQ9Wm4odCxuLCh0eXBlb2Ygcj09XCJmdW5jdGlvblwiP3I6cHUpKHZuKHQsbikpLGUpKSx0fSxPdC52YWx1ZXM9Y3UsXG5cdFx0T3QudmFsdWVzSW49ZnVuY3Rpb24odCl7cmV0dXJuIG51bGw9PXQ/W106ayh0LGZ1KHQpKX0sT3Qud2l0aG91dD1LbyxPdC53b3Jkcz1zdSxPdC53cmFwPWZ1bmN0aW9uKHQsbil7cmV0dXJuIG49bnVsbD09bj9wdTpuLHBpKG4sdCl9LE90Lnhvcj1HbyxPdC54b3JCeT1KbyxPdC54b3JXaXRoPVlvLE90LnppcD1IbyxPdC56aXBPYmplY3Q9ZnVuY3Rpb24odCxuKXtyZXR1cm4gbnIodHx8W10sbnx8W10sWXQpfSxPdC56aXBPYmplY3REZWVwPWZ1bmN0aW9uKHQsbil7cmV0dXJuIG5yKHR8fFtdLG58fFtdLFpuKX0sT3QuemlwV2l0aD1RbyxPdC5lbnRyaWVzPXppLE90LmVudHJpZXNJbj1VaSxPdC5leHRlbmQ9bWksT3QuZXh0ZW5kV2l0aD1BaSx2dShPdCxPdCksT3QuYWRkPWVmLE90LmF0dGVtcHQ9VmksT3QuY2FtZWxDYXNlPSRpLE90LmNhcGl0YWxpemU9YXUsT3QuY2VpbD11ZixPdC5jbGFtcD1mdW5jdGlvbih0LG4scil7cmV0dXJuIHI9PT1UJiYocj1uLG49VCksciE9PVQmJihyPW51KHIpLFxuXHRcdFx0cj1yPT09cj9yOjApLG4hPT1UJiYobj1udShuKSxuPW49PT1uP246MCksbm4obnUodCksbixyKX0sT3QuY2xvbmU9ZnVuY3Rpb24odCl7cmV0dXJuIHJuKHQsZmFsc2UsdHJ1ZSl9LE90LmNsb25lRGVlcD1mdW5jdGlvbih0KXtyZXR1cm4gcm4odCx0cnVlLHRydWUpfSxPdC5jbG9uZURlZXBXaXRoPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHJuKHQsdHJ1ZSx0cnVlLG4pfSxPdC5jbG9uZVdpdGg9ZnVuY3Rpb24odCxuKXtyZXR1cm4gcm4odCxmYWxzZSx0cnVlLG4pfSxPdC5kZWJ1cnI9bHUsT3QuZGl2aWRlPW9mLE90LmVuZHNXaXRoPWZ1bmN0aW9uKHQsbixyKXt0PWV1KHQpLG49WW4obik7dmFyIGU9dC5sZW5ndGg7cmV0dXJuIHI9cj09PVQ/ZTpubihYZShyKSwwLGUpLHItPW4ubGVuZ3RoLHI+PTAmJnQuaW5kZXhPZihuLHIpPT1yfSxPdC5lcT1DZSxPdC5lc2NhcGU9ZnVuY3Rpb24odCl7cmV0dXJuKHQ9ZXUodCkpJiZYLnRlc3QodCk/dC5yZXBsYWNlKEgsQik6dH0sT3QuZXNjYXBlUmVnRXhwPWZ1bmN0aW9uKHQpe1xuXHRcdFx0cmV0dXJuKHQ9ZXUodCkpJiZmdC50ZXN0KHQpP3QucmVwbGFjZShpdCxcIlxcXFwkJlwiKTp0fSxPdC5ldmVyeT1mdW5jdGlvbih0LG4scil7dmFyIGU9eWkodCk/aTpjbjtyZXR1cm4gciYmdGUodCxuLHIpJiYobj1UKSxlKHQsRnIobiwzKSl9LE90LmZpbmQ9bmksT3QuZmluZEluZGV4PWhlLE90LmZpbmRLZXk9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdih0LEZyKG4sMyksaG4pfSxPdC5maW5kTGFzdD1yaSxPdC5maW5kTGFzdEluZGV4PXBlLE90LmZpbmRMYXN0S2V5PWZ1bmN0aW9uKHQsbil7cmV0dXJuIHYodCxGcihuLDMpLHBuKX0sT3QuZmxvb3I9ZmYsT3QuZm9yRWFjaD1tZSxPdC5mb3JFYWNoUmlnaHQ9QWUsT3QuZm9ySW49ZnVuY3Rpb24odCxuKXtyZXR1cm4gbnVsbD09dD90OmtvKHQsRnIobiwzKSxmdSl9LE90LmZvckluUmlnaHQ9ZnVuY3Rpb24odCxuKXtyZXR1cm4gbnVsbD09dD90OkVvKHQsRnIobiwzKSxmdSl9LE90LmZvck93bj1mdW5jdGlvbih0LG4pe3JldHVybiB0JiZobih0LEZyKG4sMykpO1xuXHRcdH0sT3QuZm9yT3duUmlnaHQ9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdCYmcG4odCxGcihuLDMpKX0sT3QuZ2V0PXV1LE90Lmd0PWdpLE90Lmd0ZT1kaSxPdC5oYXM9ZnVuY3Rpb24odCxuKXtyZXR1cm4gbnVsbCE9dCYmVnIodCxuLHluKX0sT3QuaGFzSW49b3UsT3QuaGVhZD1fZSxPdC5pZGVudGl0eT1wdSxPdC5pbmNsdWRlcz1mdW5jdGlvbih0LG4scixlKXtyZXR1cm4gdD1VZSh0KT90OmN1KHQpLHI9ciYmIWU/WGUocik6MCxlPXQubGVuZ3RoLDA+ciYmKHI9WHUoZStyLDApKSxHZSh0KT9lPj1yJiYtMTx0LmluZGV4T2YobixyKTohIWUmJi0xPGQodCxuLHIpfSxPdC5pbmRleE9mPWZ1bmN0aW9uKHQsbixyKXt2YXIgZT10P3QubGVuZ3RoOjA7cmV0dXJuIGU/KHI9bnVsbD09cj8wOlhlKHIpLDA+ciYmKHI9WHUoZStyLDApKSxkKHQsbixyKSk6LTF9LE90LmluUmFuZ2U9ZnVuY3Rpb24odCxuLHIpe3JldHVybiBuPW51KG4pfHwwLHI9PT1UPyhyPW4sbj0wKTpyPW51KHIpfHwwLHQ9bnUodCksXG5cdFx0dD49dG8obixyKSYmdDxYdShuLHIpfSxPdC5pbnZva2U9V2ksT3QuaXNBcmd1bWVudHM9emUsT3QuaXNBcnJheT15aSxPdC5pc0FycmF5QnVmZmVyPWZ1bmN0aW9uKHQpe3JldHVybiBUZSh0KSYmXCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiPT1NdS5jYWxsKHQpfSxPdC5pc0FycmF5TGlrZT1VZSxPdC5pc0FycmF5TGlrZU9iamVjdD0kZSxPdC5pc0Jvb2xlYW49ZnVuY3Rpb24odCl7cmV0dXJuIHRydWU9PT10fHxmYWxzZT09PXR8fFRlKHQpJiZcIltvYmplY3QgQm9vbGVhbl1cIj09TXUuY2FsbCh0KX0sT3QuaXNCdWZmZXI9YmksT3QuaXNEYXRlPWZ1bmN0aW9uKHQpe3JldHVybiBUZSh0KSYmXCJbb2JqZWN0IERhdGVdXCI9PU11LmNhbGwodCl9LE90LmlzRWxlbWVudD1mdW5jdGlvbih0KXtyZXR1cm4hIXQmJjE9PT10Lm5vZGVUeXBlJiZUZSh0KSYmIVZlKHQpfSxPdC5pc0VtcHR5PWZ1bmN0aW9uKHQpe2lmKFVlKHQpJiYoeWkodCl8fEdlKHQpfHxGZSh0LnNwbGljZSl8fHplKHQpfHxiaSh0KSkpcmV0dXJuIXQubGVuZ3RoO1xuXHRcdFx0aWYoVGUodCkpe3ZhciBuPXFyKHQpO2lmKFwiW29iamVjdCBNYXBdXCI9PW58fFwiW29iamVjdCBTZXRdXCI9PW4pcmV0dXJuIXQuc2l6ZX1mb3IodmFyIHIgaW4gdClpZihXdS5jYWxsKHQscikpcmV0dXJuIGZhbHNlO3JldHVybiEocG8mJml1KHQpLmxlbmd0aCl9LE90LmlzRXF1YWw9ZnVuY3Rpb24odCxuKXtyZXR1cm4gbW4odCxuKX0sT3QuaXNFcXVhbFdpdGg9ZnVuY3Rpb24odCxuLHIpe3ZhciBlPShyPXR5cGVvZiByPT1cImZ1bmN0aW9uXCI/cjpUKT9yKHQsbik6VDtyZXR1cm4gZT09PVQ/bW4odCxuLHIpOiEhZX0sT3QuaXNFcnJvcj1EZSxPdC5pc0Zpbml0ZT1mdW5jdGlvbih0KXtyZXR1cm4gdHlwZW9mIHQ9PVwibnVtYmVyXCImJll1KHQpfSxPdC5pc0Z1bmN0aW9uPUZlLE90LmlzSW50ZWdlcj1OZSxPdC5pc0xlbmd0aD1QZSxPdC5pc01hcD1mdW5jdGlvbih0KXtyZXR1cm4gVGUodCkmJlwiW29iamVjdCBNYXBdXCI9PXFyKHQpfSxPdC5pc01hdGNoPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQ9PT1ufHxBbih0LG4sUHIobikpO1xuXHRcdH0sT3QuaXNNYXRjaFdpdGg9ZnVuY3Rpb24odCxuLHIpe3JldHVybiByPXR5cGVvZiByPT1cImZ1bmN0aW9uXCI/cjpULEFuKHQsbixQcihuKSxyKX0sT3QuaXNOYU49ZnVuY3Rpb24odCl7cmV0dXJuIHFlKHQpJiZ0IT0rdH0sT3QuaXNOYXRpdmU9ZnVuY3Rpb24odCl7aWYoTG8odCkpdGhyb3cgbmV3IGp1KFwiVGhpcyBtZXRob2QgaXMgbm90IHN1cHBvcnRlZCB3aXRoIGBjb3JlLWpzYC4gVHJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy5cIik7cmV0dXJuIE9uKHQpfSxPdC5pc05pbD1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbD09dH0sT3QuaXNOdWxsPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsPT09dH0sT3QuaXNOdW1iZXI9cWUsT3QuaXNPYmplY3Q9WmUsT3QuaXNPYmplY3RMaWtlPVRlLE90LmlzUGxhaW5PYmplY3Q9VmUsT3QuaXNSZWdFeHA9S2UsT3QuaXNTYWZlSW50ZWdlcj1mdW5jdGlvbih0KXtyZXR1cm4gTmUodCkmJnQ+PS05MDA3MTk5MjU0NzQwOTkxJiY5MDA3MTk5MjU0NzQwOTkxPj10O1xuXHRcdH0sT3QuaXNTZXQ9ZnVuY3Rpb24odCl7cmV0dXJuIFRlKHQpJiZcIltvYmplY3QgU2V0XVwiPT1xcih0KX0sT3QuaXNTdHJpbmc9R2UsT3QuaXNTeW1ib2w9SmUsT3QuaXNUeXBlZEFycmF5PVllLE90LmlzVW5kZWZpbmVkPWZ1bmN0aW9uKHQpe3JldHVybiB0PT09VH0sT3QuaXNXZWFrTWFwPWZ1bmN0aW9uKHQpe3JldHVybiBUZSh0KSYmXCJbb2JqZWN0IFdlYWtNYXBdXCI9PXFyKHQpfSxPdC5pc1dlYWtTZXQ9ZnVuY3Rpb24odCl7cmV0dXJuIFRlKHQpJiZcIltvYmplY3QgV2Vha1NldF1cIj09TXUuY2FsbCh0KX0sT3Quam9pbj1mdW5jdGlvbih0LG4pe3JldHVybiB0P0h1LmNhbGwodCxuKTpcIlwifSxPdC5rZWJhYkNhc2U9RGksT3QubGFzdD12ZSxPdC5sYXN0SW5kZXhPZj1mdW5jdGlvbih0LG4scil7dmFyIGU9dD90Lmxlbmd0aDowO2lmKCFlKXJldHVybi0xO3ZhciB1PWU7aWYociE9PVQmJih1PVhlKHIpLHU9KDA+dT9YdShlK3UsMCk6dG8odSxlLTEpKSsxKSxuIT09bilyZXR1cm4gTSh0LHUtMSx0cnVlKTtcblx0XHRcdGZvcig7dS0tOylpZih0W3VdPT09bilyZXR1cm4gdTtyZXR1cm4tMX0sT3QubG93ZXJDYXNlPUZpLE90Lmxvd2VyRmlyc3Q9TmksT3QubHQ9eGksT3QubHRlPWppLE90Lm1heD1mdW5jdGlvbih0KXtyZXR1cm4gdCYmdC5sZW5ndGg/YW4odCxwdSxkbik6VH0sT3QubWF4Qnk9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdCYmdC5sZW5ndGg/YW4odCxGcihuKSxkbik6VH0sT3QubWVhbj1mdW5jdGlvbih0KXtyZXR1cm4gYih0LHB1KX0sT3QubWVhbkJ5PWZ1bmN0aW9uKHQsbil7cmV0dXJuIGIodCxGcihuKSl9LE90Lm1pbj1mdW5jdGlvbih0KXtyZXR1cm4gdCYmdC5sZW5ndGg/YW4odCxwdSxTbik6VH0sT3QubWluQnk9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdCYmdC5sZW5ndGg/YW4odCxGcihuKSxTbik6VH0sT3Quc3R1YkFycmF5PXl1LE90LnN0dWJGYWxzZT1idSxPdC5zdHViT2JqZWN0PWZ1bmN0aW9uKCl7cmV0dXJue319LE90LnN0dWJTdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIlwifSxPdC5zdHViVHJ1ZT1mdW5jdGlvbigpe1xuXHRcdFx0cmV0dXJuIHRydWV9LE90Lm11bHRpcGx5PWNmLE90Lm50aD1mdW5jdGlvbih0LG4pe3JldHVybiB0JiZ0Lmxlbmd0aD9Mbih0LFhlKG4pKTpUfSxPdC5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIEt0Ll89PT10aGlzJiYoS3QuXz1DdSksdGhpc30sT3Qubm9vcD1ndSxPdC5ub3c9RWUsT3QucGFkPWZ1bmN0aW9uKHQsbixyKXt0PWV1KHQpO3ZhciBlPShuPVhlKG4pKT9OKHQpOjA7cmV0dXJuIW58fGU+PW4/dDoobj0obi1lKS8yLFNyKEd1KG4pLHIpK3QrU3IoS3UobikscikpfSxPdC5wYWRFbmQ9ZnVuY3Rpb24odCxuLHIpe3Q9ZXUodCk7dmFyIGU9KG49WGUobikpP04odCk6MDtyZXR1cm4gbiYmbj5lP3QrU3Iobi1lLHIpOnR9LE90LnBhZFN0YXJ0PWZ1bmN0aW9uKHQsbixyKXt0PWV1KHQpO3ZhciBlPShuPVhlKG4pKT9OKHQpOjA7cmV0dXJuIG4mJm4+ZT9TcihuLWUscikrdDp0fSxPdC5wYXJzZUludD1mdW5jdGlvbih0LG4scil7cmV0dXJuIHJ8fG51bGw9PW4/bj0wOm4mJihuPStuKSxcblx0XHRcdHQ9ZXUodCkucmVwbGFjZShjdCxcIlwiKSxubyh0LG58fCh2dC50ZXN0KHQpPzE2OjEwKSl9LE90LnJhbmRvbT1mdW5jdGlvbih0LG4scil7aWYociYmdHlwZW9mIHIhPVwiYm9vbGVhblwiJiZ0ZSh0LG4scikmJihuPXI9VCkscj09PVQmJih0eXBlb2Ygbj09XCJib29sZWFuXCI/KHI9bixuPVQpOnR5cGVvZiB0PT1cImJvb2xlYW5cIiYmKHI9dCx0PVQpKSx0PT09VCYmbj09PVQ/KHQ9MCxuPTEpOih0PW51KHQpfHwwLG49PT1UPyhuPXQsdD0wKTpuPW51KG4pfHwwKSx0Pm4pe3ZhciBlPXQ7dD1uLG49ZX1yZXR1cm4gcnx8dCUxfHxuJTE/KHI9cm8oKSx0byh0K3IqKG4tdCtGdChcIjFlLVwiKygocitcIlwiKS5sZW5ndGgtMSkpKSxuKSk6Tm4odCxuKX0sT3QucmVkdWNlPWZ1bmN0aW9uKHQsbixyKXt2YXIgZT15aSh0KT9oOngsdT0zPmFyZ3VtZW50cy5sZW5ndGg7cmV0dXJuIGUodCxGcihuLDQpLHIsdSxBbyl9LE90LnJlZHVjZVJpZ2h0PWZ1bmN0aW9uKHQsbixyKXt2YXIgZT15aSh0KT9wOngsdT0zPmFyZ3VtZW50cy5sZW5ndGg7XG5cdFx0XHRyZXR1cm4gZSh0LEZyKG4sNCkscix1LE9vKX0sT3QucmVwZWF0PWZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gbj0ocj90ZSh0LG4scik6bj09PVQpPzE6WGUobiksUG4oZXUodCksbil9LE90LnJlcGxhY2U9ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMsbj1ldSh0WzBdKTtyZXR1cm4gMz50Lmxlbmd0aD9uOmVvLmNhbGwobix0WzFdLHRbMl0pfSxPdC5yZXN1bHQ9ZnVuY3Rpb24odCxuLHIpe249bmUobix0KT9bbl06ZXIobik7dmFyIGU9LTEsdT1uLmxlbmd0aDtmb3IodXx8KHQ9VCx1PTEpOysrZTx1Oyl7dmFyIG89bnVsbD09dD9UOnRbZmUobltlXSldO289PT1UJiYoZT11LG89ciksdD1GZShvKT9vLmNhbGwodCk6b31yZXR1cm4gdH0sT3Qucm91bmQ9YWYsT3QucnVuSW5Db250ZXh0PVosT3Quc2FtcGxlPWZ1bmN0aW9uKHQpe3Q9VWUodCk/dDpjdSh0KTt2YXIgbj10Lmxlbmd0aDtyZXR1cm4gbj4wP3RbTm4oMCxuLTEpXTpUfSxPdC5zaXplPWZ1bmN0aW9uKHQpe2lmKG51bGw9PXQpcmV0dXJuIDA7XG5cdFx0XHRpZihVZSh0KSl7dmFyIG49dC5sZW5ndGg7cmV0dXJuIG4mJkdlKHQpP04odCk6bn1yZXR1cm4gVGUodCkmJihuPXFyKHQpLFwiW29iamVjdCBNYXBdXCI9PW58fFwiW29iamVjdCBTZXRdXCI9PW4pP3Quc2l6ZTppdSh0KS5sZW5ndGh9LE90LnNuYWtlQ2FzZT1QaSxPdC5zb21lPWZ1bmN0aW9uKHQsbixyKXt2YXIgZT15aSh0KT9fOnFuO3JldHVybiByJiZ0ZSh0LG4scikmJihuPVQpLGUodCxGcihuLDMpKX0sT3Quc29ydGVkSW5kZXg9ZnVuY3Rpb24odCxuKXtyZXR1cm4gVm4odCxuKX0sT3Quc29ydGVkSW5kZXhCeT1mdW5jdGlvbih0LG4scil7cmV0dXJuIEtuKHQsbixGcihyKSl9LE90LnNvcnRlZEluZGV4T2Y9ZnVuY3Rpb24odCxuKXt2YXIgcj10P3QubGVuZ3RoOjA7aWYocil7dmFyIGU9Vm4odCxuKTtpZihyPmUmJkNlKHRbZV0sbikpcmV0dXJuIGV9cmV0dXJuLTF9LE90LnNvcnRlZExhc3RJbmRleD1mdW5jdGlvbih0LG4pe3JldHVybiBWbih0LG4sdHJ1ZSl9LE90LnNvcnRlZExhc3RJbmRleEJ5PWZ1bmN0aW9uKHQsbixyKXtcblx0XHRcdHJldHVybiBLbih0LG4sRnIociksdHJ1ZSl9LE90LnNvcnRlZExhc3RJbmRleE9mPWZ1bmN0aW9uKHQsbil7aWYodCYmdC5sZW5ndGgpe3ZhciByPVZuKHQsbix0cnVlKS0xO2lmKENlKHRbcl0sbikpcmV0dXJuIHJ9cmV0dXJuLTF9LE90LnN0YXJ0Q2FzZT1aaSxPdC5zdGFydHNXaXRoPWZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gdD1ldSh0KSxyPW5uKFhlKHIpLDAsdC5sZW5ndGgpLHQubGFzdEluZGV4T2YoWW4obikscik9PXJ9LE90LnN1YnRyYWN0PWxmLE90LnN1bT1mdW5jdGlvbih0KXtyZXR1cm4gdCYmdC5sZW5ndGg/dyh0LHB1KTowfSxPdC5zdW1CeT1mdW5jdGlvbih0LG4pe3JldHVybiB0JiZ0Lmxlbmd0aD93KHQsRnIobikpOjB9LE90LnRlbXBsYXRlPWZ1bmN0aW9uKHQsbixyKXt2YXIgZT1PdC50ZW1wbGF0ZVNldHRpbmdzO3ImJnRlKHQsbixyKSYmKG49VCksdD1ldSh0KSxuPUFpKHt9LG4sZSxWdCkscj1BaSh7fSxuLmltcG9ydHMsZS5pbXBvcnRzLFZ0KTt2YXIgdSxvLGk9aXUociksZj1rKHIsaSksYz0wO1xuXHRcdFx0cj1uLmludGVycG9sYXRlfHx3dDt2YXIgYT1cIl9fcCs9J1wiO3I9bXUoKG4uZXNjYXBlfHx3dCkuc291cmNlK1wifFwiK3Iuc291cmNlK1wifFwiKyhyPT09cnQ/cHQ6d3QpLnNvdXJjZStcInxcIisobi5ldmFsdWF0ZXx8d3QpLnNvdXJjZStcInwkXCIsXCJnXCIpO3ZhciBsPVwic291cmNlVVJMXCJpbiBuP1wiLy8jIHNvdXJjZVVSTD1cIituLnNvdXJjZVVSTCtcIlxcblwiOlwiXCI7aWYodC5yZXBsYWNlKHIsZnVuY3Rpb24obixyLGUsaSxmLGwpe3JldHVybiBlfHwoZT1pKSxhKz10LnNsaWNlKGMsbCkucmVwbGFjZShtdCxMKSxyJiYodT10cnVlLGErPVwiJytfX2UoXCIrcitcIikrJ1wiKSxmJiYobz10cnVlLGErPVwiJztcIitmK1wiO1xcbl9fcCs9J1wiKSxlJiYoYSs9XCInKygoX190PShcIitlK1wiKSk9PW51bGw/Jyc6X190KSsnXCIpLGM9bCtuLmxlbmd0aCxufSksYSs9XCInO1wiLChuPW4udmFyaWFibGUpfHwoYT1cIndpdGgob2JqKXtcIithK1wifVwiKSxhPShvP2EucmVwbGFjZShLLFwiXCIpOmEpLnJlcGxhY2UoRyxcIiQxXCIpLnJlcGxhY2UoSixcIiQxO1wiKSxcblx0XHRcdFx0XHRhPVwiZnVuY3Rpb24oXCIrKG58fFwib2JqXCIpK1wiKXtcIisobj9cIlwiOlwib2JqfHwob2JqPXt9KTtcIikrXCJ2YXIgX190LF9fcD0nJ1wiKyh1P1wiLF9fZT1fLmVzY2FwZVwiOlwiXCIpKyhvP1wiLF9faj1BcnJheS5wcm90b3R5cGUuam9pbjtmdW5jdGlvbiBwcmludCgpe19fcCs9X19qLmNhbGwoYXJndW1lbnRzLCcnKX1cIjpcIjtcIikrYStcInJldHVybiBfX3B9XCIsbj1WaShmdW5jdGlvbigpe3JldHVybiBGdW5jdGlvbihpLGwrXCJyZXR1cm4gXCIrYSkuYXBwbHkoVCxmKX0pLG4uc291cmNlPWEsRGUobikpdGhyb3cgbjtyZXR1cm4gbn0sT3QudGltZXM9ZnVuY3Rpb24odCxuKXtpZih0PVhlKHQpLDE+dHx8dD45MDA3MTk5MjU0NzQwOTkxKXJldHVybltdO3ZhciByPTQyOTQ5NjcyOTUsZT10byh0LDQyOTQ5NjcyOTUpO2ZvcihuPUZyKG4pLHQtPTQyOTQ5NjcyOTUsZT1tKGUsbik7KytyPHQ7KW4ocik7cmV0dXJuIGV9LE90LnRvRmluaXRlPVFlLE90LnRvSW50ZWdlcj1YZSxPdC50b0xlbmd0aD10dSxPdC50b0xvd2VyPWZ1bmN0aW9uKHQpe1xuXHRcdFx0cmV0dXJuIGV1KHQpLnRvTG93ZXJDYXNlKCl9LE90LnRvTnVtYmVyPW51LE90LnRvU2FmZUludGVnZXI9ZnVuY3Rpb24odCl7cmV0dXJuIG5uKFhlKHQpLC05MDA3MTk5MjU0NzQwOTkxLDkwMDcxOTkyNTQ3NDA5OTEpfSxPdC50b1N0cmluZz1ldSxPdC50b1VwcGVyPWZ1bmN0aW9uKHQpe3JldHVybiBldSh0KS50b1VwcGVyQ2FzZSgpfSxPdC50cmltPWZ1bmN0aW9uKHQsbixyKXtyZXR1cm4odD1ldSh0KSkmJihyfHxuPT09VCk/dC5yZXBsYWNlKGN0LFwiXCIpOnQmJihuPVluKG4pKT8odD10Lm1hdGNoKEl0KSxuPW4ubWF0Y2goSXQpLHVyKHQsUyh0LG4pLEkodCxuKSsxKS5qb2luKFwiXCIpKTp0fSxPdC50cmltRW5kPWZ1bmN0aW9uKHQsbixyKXtyZXR1cm4odD1ldSh0KSkmJihyfHxuPT09VCk/dC5yZXBsYWNlKGx0LFwiXCIpOnQmJihuPVluKG4pKT8odD10Lm1hdGNoKEl0KSxuPUkodCxuLm1hdGNoKEl0KSkrMSx1cih0LDAsbikuam9pbihcIlwiKSk6dH0sT3QudHJpbVN0YXJ0PWZ1bmN0aW9uKHQsbixyKXtcblx0XHRcdHJldHVybih0PWV1KHQpKSYmKHJ8fG49PT1UKT90LnJlcGxhY2UoYXQsXCJcIik6dCYmKG49WW4obikpPyh0PXQubWF0Y2goSXQpLG49Uyh0LG4ubWF0Y2goSXQpKSx1cih0LG4pLmpvaW4oXCJcIikpOnR9LE90LnRydW5jYXRlPWZ1bmN0aW9uKHQsbil7dmFyIHI9MzAsZT1cIi4uLlwiO2lmKFplKG4pKXZhciB1PVwic2VwYXJhdG9yXCJpbiBuP24uc2VwYXJhdG9yOnUscj1cImxlbmd0aFwiaW4gbj9YZShuLmxlbmd0aCk6cixlPVwib21pc3Npb25cImluIG4/WW4obi5vbWlzc2lvbik6ZTt0PWV1KHQpO3ZhciBvPXQubGVuZ3RoO2lmKFd0LnRlc3QodCkpdmFyIGk9dC5tYXRjaChJdCksbz1pLmxlbmd0aDtpZihyPj1vKXJldHVybiB0O2lmKG89ci1OKGUpLDE+bylyZXR1cm4gZTtpZihyPWk/dXIoaSwwLG8pLmpvaW4oXCJcIik6dC5zbGljZSgwLG8pLHU9PT1UKXJldHVybiByK2U7aWYoaSYmKG8rPXIubGVuZ3RoLW8pLEtlKHUpKXtpZih0LnNsaWNlKG8pLnNlYXJjaCh1KSl7dmFyIGY9cjtmb3IodS5nbG9iYWx8fCh1PW11KHUuc291cmNlLGV1KF90LmV4ZWModSkpK1wiZ1wiKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIHUubGFzdEluZGV4PTA7aT11LmV4ZWMoZik7KXZhciBjPWkuaW5kZXg7cj1yLnNsaWNlKDAsYz09PVQ/bzpjKX19ZWxzZSB0LmluZGV4T2YoWW4odSksbykhPW8mJih1PXIubGFzdEluZGV4T2YodSksdT4tMSYmKHI9ci5zbGljZSgwLHUpKSk7cmV0dXJuIHIrZX0sT3QudW5lc2NhcGU9ZnVuY3Rpb24odCl7cmV0dXJuKHQ9ZXUodCkpJiZRLnRlc3QodCk/dC5yZXBsYWNlKFksUCk6dH0sT3QudW5pcXVlSWQ9ZnVuY3Rpb24odCl7dmFyIG49KytCdTtyZXR1cm4gZXUodCkrbn0sT3QudXBwZXJDYXNlPVRpLE90LnVwcGVyRmlyc3Q9cWksT3QuZWFjaD1tZSxPdC5lYWNoUmlnaHQ9QWUsT3QuZmlyc3Q9X2UsdnUoT3QsZnVuY3Rpb24oKXt2YXIgdD17fTtyZXR1cm4gaG4oT3QsZnVuY3Rpb24obixyKXtXdS5jYWxsKE90LnByb3RvdHlwZSxyKXx8KHRbcl09bil9KSx0fSgpLHtjaGFpbjpmYWxzZX0pLE90LlZFUlNJT049XCI0LjEzLjFcIix1KFwiYmluZCBiaW5kS2V5IGN1cnJ5IGN1cnJ5UmlnaHQgcGFydGlhbCBwYXJ0aWFsUmlnaHRcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24odCl7XG5cdFx0XHRPdFt0XS5wbGFjZWhvbGRlcj1PdH0pLHUoW1wiZHJvcFwiLFwidGFrZVwiXSxmdW5jdGlvbih0LG4pe1V0LnByb3RvdHlwZVt0XT1mdW5jdGlvbihyKXt2YXIgZT10aGlzLl9fZmlsdGVyZWRfXztpZihlJiYhbilyZXR1cm4gbmV3IFV0KHRoaXMpO3I9cj09PVQ/MTpYdShYZShyKSwwKTt2YXIgdT10aGlzLmNsb25lKCk7cmV0dXJuIGU/dS5fX3Rha2VDb3VudF9fPXRvKHIsdS5fX3Rha2VDb3VudF9fKTp1Ll9fdmlld3NfXy5wdXNoKHtzaXplOnRvKHIsNDI5NDk2NzI5NSksdHlwZTp0KygwPnUuX19kaXJfXz9cIlJpZ2h0XCI6XCJcIil9KSx1fSxVdC5wcm90b3R5cGVbdCtcIlJpZ2h0XCJdPWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLnJldmVyc2UoKVt0XShuKS5yZXZlcnNlKCl9fSksdShbXCJmaWx0ZXJcIixcIm1hcFwiLFwidGFrZVdoaWxlXCJdLGZ1bmN0aW9uKHQsbil7dmFyIHI9bisxLGU9MT09cnx8Mz09cjtVdC5wcm90b3R5cGVbdF09ZnVuY3Rpb24odCl7dmFyIG49dGhpcy5jbG9uZSgpO3JldHVybiBuLl9faXRlcmF0ZWVzX18ucHVzaCh7XG5cdFx0XHRpdGVyYXRlZTpGcih0LDMpLHR5cGU6cn0pLG4uX19maWx0ZXJlZF9fPW4uX19maWx0ZXJlZF9ffHxlLG59fSksdShbXCJoZWFkXCIsXCJsYXN0XCJdLGZ1bmN0aW9uKHQsbil7dmFyIHI9XCJ0YWtlXCIrKG4/XCJSaWdodFwiOlwiXCIpO1V0LnByb3RvdHlwZVt0XT1mdW5jdGlvbigpe3JldHVybiB0aGlzW3JdKDEpLnZhbHVlKClbMF19fSksdShbXCJpbml0aWFsXCIsXCJ0YWlsXCJdLGZ1bmN0aW9uKHQsbil7dmFyIHI9XCJkcm9wXCIrKG4/XCJcIjpcIlJpZ2h0XCIpO1V0LnByb3RvdHlwZVt0XT1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9fZmlsdGVyZWRfXz9uZXcgVXQodGhpcyk6dGhpc1tyXSgxKX19KSxVdC5wcm90b3R5cGUuY29tcGFjdD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmZpbHRlcihwdSl9LFV0LnByb3RvdHlwZS5maW5kPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmZpbHRlcih0KS5oZWFkKCl9LFV0LnByb3RvdHlwZS5maW5kTGFzdD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5yZXZlcnNlKCkuZmluZCh0KTtcblx0XHR9LFV0LnByb3RvdHlwZS5pbnZva2VNYXA9TWUoZnVuY3Rpb24odCxuKXtyZXR1cm4gdHlwZW9mIHQ9PVwiZnVuY3Rpb25cIj9uZXcgVXQodGhpcyk6dGhpcy5tYXAoZnVuY3Rpb24ocil7cmV0dXJuIHduKHIsdCxuKX0pfSksVXQucHJvdG90eXBlLnJlamVjdD1mdW5jdGlvbih0KXtyZXR1cm4gdD1Gcih0LDMpLHRoaXMuZmlsdGVyKGZ1bmN0aW9uKG4pe3JldHVybiF0KG4pfSl9LFV0LnByb3RvdHlwZS5zbGljZT1mdW5jdGlvbih0LG4pe3Q9WGUodCk7dmFyIHI9dGhpcztyZXR1cm4gci5fX2ZpbHRlcmVkX18mJih0PjB8fDA+bik/bmV3IFV0KHIpOigwPnQ/cj1yLnRha2VSaWdodCgtdCk6dCYmKHI9ci5kcm9wKHQpKSxuIT09VCYmKG49WGUobikscj0wPm4/ci5kcm9wUmlnaHQoLW4pOnIudGFrZShuLXQpKSxyKX0sVXQucHJvdG90eXBlLnRha2VSaWdodFdoaWxlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnJldmVyc2UoKS50YWtlV2hpbGUodCkucmV2ZXJzZSgpfSxVdC5wcm90b3R5cGUudG9BcnJheT1mdW5jdGlvbigpe1xuXHRcdFx0cmV0dXJuIHRoaXMudGFrZSg0Mjk0OTY3Mjk1KX0saG4oVXQucHJvdG90eXBlLGZ1bmN0aW9uKHQsbil7dmFyIHI9L14oPzpmaWx0ZXJ8ZmluZHxtYXB8cmVqZWN0KXxXaGlsZSQvLnRlc3QobiksZT0vXig/OmhlYWR8bGFzdCkkLy50ZXN0KG4pLHU9T3RbZT9cInRha2VcIisoXCJsYXN0XCI9PW4/XCJSaWdodFwiOlwiXCIpOm5dLG89ZXx8L15maW5kLy50ZXN0KG4pO3UmJihPdC5wcm90b3R5cGVbbl09ZnVuY3Rpb24oKXtmdW5jdGlvbiBuKHQpe3JldHVybiB0PXUuYXBwbHkoT3QscyhbdF0sZikpLGUmJmg/dFswXTp0fXZhciBpPXRoaXMuX193cmFwcGVkX18sZj1lP1sxXTphcmd1bWVudHMsYz1pIGluc3RhbmNlb2YgVXQsYT1mWzBdLGw9Y3x8eWkoaSk7bCYmciYmdHlwZW9mIGE9PVwiZnVuY3Rpb25cIiYmMSE9YS5sZW5ndGgmJihjPWw9ZmFsc2UpO3ZhciBoPXRoaXMuX19jaGFpbl9fLHA9ISF0aGlzLl9fYWN0aW9uc19fLmxlbmd0aCxhPW8mJiFoLGM9YyYmIXA7cmV0dXJuIW8mJmw/KGk9Yz9pOm5ldyBVdCh0aGlzKSxcblx0XHRcdGk9dC5hcHBseShpLGYpLGkuX19hY3Rpb25zX18ucHVzaCh7ZnVuYzpqZSxhcmdzOltuXSx0aGlzQXJnOlR9KSxuZXcgenQoaSxoKSk6YSYmYz90LmFwcGx5KHRoaXMsZik6KGk9dGhpcy50aHJ1KG4pLGE/ZT9pLnZhbHVlKClbMF06aS52YWx1ZSgpOmkpfSl9KSx1KFwicG9wIHB1c2ggc2hpZnQgc29ydCBzcGxpY2UgdW5zaGlmdFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbih0KXt2YXIgbj1PdVt0XSxyPS9eKD86cHVzaHxzb3J0fHVuc2hpZnQpJC8udGVzdCh0KT9cInRhcFwiOlwidGhydVwiLGU9L14oPzpwb3B8c2hpZnQpJC8udGVzdCh0KTtPdC5wcm90b3R5cGVbdF09ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHM7aWYoZSYmIXRoaXMuX19jaGFpbl9fKXt2YXIgdT10aGlzLnZhbHVlKCk7cmV0dXJuIG4uYXBwbHkoeWkodSk/dTpbXSx0KX1yZXR1cm4gdGhpc1tyXShmdW5jdGlvbihyKXtyZXR1cm4gbi5hcHBseSh5aShyKT9yOltdLHQpfSl9fSksaG4oVXQucHJvdG90eXBlLGZ1bmN0aW9uKHQsbil7XG5cdFx0XHR2YXIgcj1PdFtuXTtpZihyKXt2YXIgZT1yLm5hbWUrXCJcIjsoX29bZV18fChfb1tlXT1bXSkpLnB1c2goe25hbWU6bixmdW5jOnJ9KX19KSxfb1tBcihULDIpLm5hbWVdPVt7bmFtZTpcIndyYXBwZXJcIixmdW5jOlR9XSxVdC5wcm90b3R5cGUuY2xvbmU9ZnVuY3Rpb24oKXt2YXIgdD1uZXcgVXQodGhpcy5fX3dyYXBwZWRfXyk7cmV0dXJuIHQuX19hY3Rpb25zX189bHIodGhpcy5fX2FjdGlvbnNfXyksdC5fX2Rpcl9fPXRoaXMuX19kaXJfXyx0Ll9fZmlsdGVyZWRfXz10aGlzLl9fZmlsdGVyZWRfXyx0Ll9faXRlcmF0ZWVzX189bHIodGhpcy5fX2l0ZXJhdGVlc19fKSx0Ll9fdGFrZUNvdW50X189dGhpcy5fX3Rha2VDb3VudF9fLHQuX192aWV3c19fPWxyKHRoaXMuX192aWV3c19fKSx0fSxVdC5wcm90b3R5cGUucmV2ZXJzZT1mdW5jdGlvbigpe2lmKHRoaXMuX19maWx0ZXJlZF9fKXt2YXIgdD1uZXcgVXQodGhpcyk7dC5fX2Rpcl9fPS0xLHQuX19maWx0ZXJlZF9fPXRydWV9ZWxzZSB0PXRoaXMuY2xvbmUoKSxcblx0XHRcdHQuX19kaXJfXyo9LTE7cmV0dXJuIHR9LFV0LnByb3RvdHlwZS52YWx1ZT1mdW5jdGlvbigpe3ZhciB0LG49dGhpcy5fX3dyYXBwZWRfXy52YWx1ZSgpLHI9dGhpcy5fX2Rpcl9fLGU9eWkobiksdT0wPnIsbz1lP24ubGVuZ3RoOjA7dD1vO2Zvcih2YXIgaT10aGlzLl9fdmlld3NfXyxmPTAsYz0tMSxhPWkubGVuZ3RoOysrYzxhOyl7dmFyIGw9aVtjXSxzPWwuc2l6ZTtzd2l0Y2gobC50eXBlKXtjYXNlXCJkcm9wXCI6Zis9czticmVhaztjYXNlXCJkcm9wUmlnaHRcIjp0LT1zO2JyZWFrO2Nhc2VcInRha2VcIjp0PXRvKHQsZitzKTticmVhaztjYXNlXCJ0YWtlUmlnaHRcIjpmPVh1KGYsdC1zKX19aWYodD17c3RhcnQ6ZixlbmQ6dH0saT10LnN0YXJ0LGY9dC5lbmQsdD1mLWksdT11P2Y6aS0xLGk9dGhpcy5fX2l0ZXJhdGVlc19fLGY9aS5sZW5ndGgsYz0wLGE9dG8odCx0aGlzLl9fdGFrZUNvdW50X18pLCFlfHwyMDA+b3x8bz09dCYmYT09dClyZXR1cm4gWG4obix0aGlzLl9fYWN0aW9uc19fKTtlPVtdO1xuXHRcdFx0dDpmb3IoO3QtLSYmYT5jOyl7Zm9yKHUrPXIsbz0tMSxsPW5bdV07KytvPGY7KXt2YXIgaD1pW29dLHM9aC50eXBlLGg9KDAsaC5pdGVyYXRlZSkobCk7aWYoMj09cylsPWg7ZWxzZSBpZighaCl7aWYoMT09cyljb250aW51ZSB0O2JyZWFrIHR9fWVbYysrXT1sfXJldHVybiBlfSxPdC5wcm90b3R5cGUuYXQ9WG8sT3QucHJvdG90eXBlLmNoYWluPWZ1bmN0aW9uKCl7cmV0dXJuIHhlKHRoaXMpfSxPdC5wcm90b3R5cGUuY29tbWl0PWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyB6dCh0aGlzLnZhbHVlKCksdGhpcy5fX2NoYWluX18pfSxPdC5wcm90b3R5cGUubmV4dD1mdW5jdGlvbigpe3RoaXMuX192YWx1ZXNfXz09PVQmJih0aGlzLl9fdmFsdWVzX189SGUodGhpcy52YWx1ZSgpKSk7dmFyIHQ9dGhpcy5fX2luZGV4X18+PXRoaXMuX192YWx1ZXNfXy5sZW5ndGgsbj10P1Q6dGhpcy5fX3ZhbHVlc19fW3RoaXMuX19pbmRleF9fKytdO3JldHVybntkb25lOnQsdmFsdWU6bn19LE90LnByb3RvdHlwZS5wbGFudD1mdW5jdGlvbih0KXtcblx0XHRcdGZvcih2YXIgbixyPXRoaXM7ciBpbnN0YW5jZW9mIGt0Oyl7dmFyIGU9YWUocik7ZS5fX2luZGV4X189MCxlLl9fdmFsdWVzX189VCxuP3UuX193cmFwcGVkX189ZTpuPWU7dmFyIHU9ZSxyPXIuX193cmFwcGVkX199cmV0dXJuIHUuX193cmFwcGVkX189dCxufSxPdC5wcm90b3R5cGUucmV2ZXJzZT1mdW5jdGlvbigpe3ZhciB0PXRoaXMuX193cmFwcGVkX187cmV0dXJuIHQgaW5zdGFuY2VvZiBVdD8odGhpcy5fX2FjdGlvbnNfXy5sZW5ndGgmJih0PW5ldyBVdCh0aGlzKSksdD10LnJldmVyc2UoKSx0Ll9fYWN0aW9uc19fLnB1c2goe2Z1bmM6amUsYXJnczpbZGVdLHRoaXNBcmc6VH0pLG5ldyB6dCh0LHRoaXMuX19jaGFpbl9fKSk6dGhpcy50aHJ1KGRlKX0sT3QucHJvdG90eXBlLnRvSlNPTj1PdC5wcm90b3R5cGUudmFsdWVPZj1PdC5wcm90b3R5cGUudmFsdWU9ZnVuY3Rpb24oKXtyZXR1cm4gWG4odGhpcy5fX3dyYXBwZWRfXyx0aGlzLl9fYWN0aW9uc19fKX0sWnUmJihPdC5wcm90b3R5cGVbWnVdPXdlKSxcblx0XHRPdH12YXIgVCxxPTEvMCxWPU5hTixLPS9cXGJfX3BcXCs9Jyc7L2csRz0vXFxiKF9fcFxcKz0pJydcXCsvZyxKPS8oX19lXFwoLio/XFwpfFxcYl9fdFxcKSlcXCsnJzsvZyxZPS8mKD86YW1wfGx0fGd0fHF1b3R8IzM5fCM5Nik7L2csSD0vWyY8PlwiJ2BdL2csUT1SZWdFeHAoWS5zb3VyY2UpLFg9UmVnRXhwKEguc291cmNlKSx0dD0vPCUtKFtcXHNcXFNdKz8pJT4vZyxudD0vPCUoW1xcc1xcU10rPyklPi9nLHJ0PS88JT0oW1xcc1xcU10rPyklPi9nLGV0PS9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sdXQ9L15cXHcqJC8sb3Q9L1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KFxcLnxcXFtcXF0pKD86XFw0fCQpKS9nLGl0PS9bXFxcXF4kLiorPygpW1xcXXt9fF0vZyxmdD1SZWdFeHAoaXQuc291cmNlKSxjdD0vXlxccyt8XFxzKyQvZyxhdD0vXlxccysvLGx0PS9cXHMrJC8sc3Q9L1thLXpBLVowLTldKy9nLGh0PS9cXFxcKFxcXFwpPy9nLHB0PS9cXCRcXHsoW15cXFxcfV0qKD86XFxcXC5bXlxcXFx9XSopKilcXH0vZyxfdD0vXFx3KiQvLHZ0PS9eMHgvaSxndD0vXlstK10weFswLTlhLWZdKyQvaSxkdD0vXjBiWzAxXSskL2kseXQ9L15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLyxidD0vXjBvWzAtN10rJC9pLHh0PS9eKD86MHxbMS05XVxcZCopJC8sanQ9L1tcXHhjMC1cXHhkNlxceGQ4LVxceGRlXFx4ZGYtXFx4ZjZcXHhmOC1cXHhmZl0vZyx3dD0vKCReKS8sbXQ9L1snXFxuXFxyXFx1MjAyOFxcdTIwMjlcXFxcXS9nLEF0PVwiW1xcXFx1ZmUwZVxcXFx1ZmUwZl0/KD86W1xcXFx1MDMwMC1cXFxcdTAzNmZcXFxcdWZlMjAtXFxcXHVmZTIzXFxcXHUyMGQwLVxcXFx1MjBmMF18XFxcXHVkODNjW1xcXFx1ZGZmYi1cXFxcdWRmZmZdKT8oPzpcXFxcdTIwMGQoPzpbXlxcXFx1ZDgwMC1cXFxcdWRmZmZdfCg/OlxcXFx1ZDgzY1tcXFxcdWRkZTYtXFxcXHVkZGZmXSl7Mn18W1xcXFx1ZDgwMC1cXFxcdWRiZmZdW1xcXFx1ZGMwMC1cXFxcdWRmZmZdKVtcXFxcdWZlMGVcXFxcdWZlMGZdPyg/OltcXFxcdTAzMDAtXFxcXHUwMzZmXFxcXHVmZTIwLVxcXFx1ZmUyM1xcXFx1MjBkMC1cXFxcdTIwZjBdfFxcXFx1ZDgzY1tcXFxcdWRmZmItXFxcXHVkZmZmXSk/KSpcIixPdD1cIig/OltcXFxcdTI3MDAtXFxcXHUyN2JmXXwoPzpcXFxcdWQ4M2NbXFxcXHVkZGU2LVxcXFx1ZGRmZl0pezJ9fFtcXFxcdWQ4MDAtXFxcXHVkYmZmXVtcXFxcdWRjMDAtXFxcXHVkZmZmXSlcIitBdCxrdD1cIig/OlteXFxcXHVkODAwLVxcXFx1ZGZmZl1bXFxcXHUwMzAwLVxcXFx1MDM2ZlxcXFx1ZmUyMC1cXFxcdWZlMjNcXFxcdTIwZDAtXFxcXHUyMGYwXT98W1xcXFx1MDMwMC1cXFxcdTAzNmZcXFxcdWZlMjAtXFxcXHVmZTIzXFxcXHUyMGQwLVxcXFx1MjBmMF18KD86XFxcXHVkODNjW1xcXFx1ZGRlNi1cXFxcdWRkZmZdKXsyfXxbXFxcXHVkODAwLVxcXFx1ZGJmZl1bXFxcXHVkYzAwLVxcXFx1ZGZmZl18W1xcXFx1ZDgwMC1cXFxcdWRmZmZdKVwiLEV0PVJlZ0V4cChcIlsnXFx1MjAxOV1cIixcImdcIiksU3Q9UmVnRXhwKFwiW1xcXFx1MDMwMC1cXFxcdTAzNmZcXFxcdWZlMjAtXFxcXHVmZTIzXFxcXHUyMGQwLVxcXFx1MjBmMF1cIixcImdcIiksSXQ9UmVnRXhwKFwiXFxcXHVkODNjW1xcXFx1ZGZmYi1cXFxcdWRmZmZdKD89XFxcXHVkODNjW1xcXFx1ZGZmYi1cXFxcdWRmZmZdKXxcIitrdCtBdCxcImdcIiksUnQ9UmVnRXhwKFtcIltBLVpcXFxceGMwLVxcXFx4ZDZcXFxceGQ4LVxcXFx4ZGVdP1thLXpcXFxceGRmLVxcXFx4ZjZcXFxceGY4LVxcXFx4ZmZdKyg/OlsnXFx1MjAxOV0oPzpkfGxsfG18cmV8c3x0fHZlKSk/KD89W1xcXFx4YWNcXFxceGIxXFxcXHhkN1xcXFx4ZjdcXFxceDAwLVxcXFx4MmZcXFxceDNhLVxcXFx4NDBcXFxceDViLVxcXFx4NjBcXFxceDdiLVxcXFx4YmZcXFxcdTIwMDAtXFxcXHUyMDZmIFxcXFx0XFxcXHgwYlxcXFxmXFxcXHhhMFxcXFx1ZmVmZlxcXFxuXFxcXHJcXFxcdTIwMjhcXFxcdTIwMjlcXFxcdTE2ODBcXFxcdTE4MGVcXFxcdTIwMDBcXFxcdTIwMDFcXFxcdTIwMDJcXFxcdTIwMDNcXFxcdTIwMDRcXFxcdTIwMDVcXFxcdTIwMDZcXFxcdTIwMDdcXFxcdTIwMDhcXFxcdTIwMDlcXFxcdTIwMGFcXFxcdTIwMmZcXFxcdTIwNWZcXFxcdTMwMDBdfFtBLVpcXFxceGMwLVxcXFx4ZDZcXFxceGQ4LVxcXFx4ZGVdfCQpfCg/OltBLVpcXFxceGMwLVxcXFx4ZDZcXFxceGQ4LVxcXFx4ZGVdfFteXFxcXHVkODAwLVxcXFx1ZGZmZlxcXFx4YWNcXFxceGIxXFxcXHhkN1xcXFx4ZjdcXFxceDAwLVxcXFx4MmZcXFxceDNhLVxcXFx4NDBcXFxceDViLVxcXFx4NjBcXFxceDdiLVxcXFx4YmZcXFxcdTIwMDAtXFxcXHUyMDZmIFxcXFx0XFxcXHgwYlxcXFxmXFxcXHhhMFxcXFx1ZmVmZlxcXFxuXFxcXHJcXFxcdTIwMjhcXFxcdTIwMjlcXFxcdTE2ODBcXFxcdTE4MGVcXFxcdTIwMDBcXFxcdTIwMDFcXFxcdTIwMDJcXFxcdTIwMDNcXFxcdTIwMDRcXFxcdTIwMDVcXFxcdTIwMDZcXFxcdTIwMDdcXFxcdTIwMDhcXFxcdTIwMDlcXFxcdTIwMGFcXFxcdTIwMmZcXFxcdTIwNWZcXFxcdTMwMDBcXFxcZCtcXFxcdTI3MDAtXFxcXHUyN2JmYS16XFxcXHhkZi1cXFxceGY2XFxcXHhmOC1cXFxceGZmQS1aXFxcXHhjMC1cXFxceGQ2XFxcXHhkOC1cXFxceGRlXSkrKD86WydcXHUyMDE5XSg/OkR8TEx8TXxSRXxTfFR8VkUpKT8oPz1bXFxcXHhhY1xcXFx4YjFcXFxceGQ3XFxcXHhmN1xcXFx4MDAtXFxcXHgyZlxcXFx4M2EtXFxcXHg0MFxcXFx4NWItXFxcXHg2MFxcXFx4N2ItXFxcXHhiZlxcXFx1MjAwMC1cXFxcdTIwNmYgXFxcXHRcXFxceDBiXFxcXGZcXFxceGEwXFxcXHVmZWZmXFxcXG5cXFxcclxcXFx1MjAyOFxcXFx1MjAyOVxcXFx1MTY4MFxcXFx1MTgwZVxcXFx1MjAwMFxcXFx1MjAwMVxcXFx1MjAwMlxcXFx1MjAwM1xcXFx1MjAwNFxcXFx1MjAwNVxcXFx1MjAwNlxcXFx1MjAwN1xcXFx1MjAwOFxcXFx1MjAwOVxcXFx1MjAwYVxcXFx1MjAyZlxcXFx1MjA1ZlxcXFx1MzAwMF18W0EtWlxcXFx4YzAtXFxcXHhkNlxcXFx4ZDgtXFxcXHhkZV0oPzpbYS16XFxcXHhkZi1cXFxceGY2XFxcXHhmOC1cXFxceGZmXXxbXlxcXFx1ZDgwMC1cXFxcdWRmZmZcXFxceGFjXFxcXHhiMVxcXFx4ZDdcXFxceGY3XFxcXHgwMC1cXFxceDJmXFxcXHgzYS1cXFxceDQwXFxcXHg1Yi1cXFxceDYwXFxcXHg3Yi1cXFxceGJmXFxcXHUyMDAwLVxcXFx1MjA2ZiBcXFxcdFxcXFx4MGJcXFxcZlxcXFx4YTBcXFxcdWZlZmZcXFxcblxcXFxyXFxcXHUyMDI4XFxcXHUyMDI5XFxcXHUxNjgwXFxcXHUxODBlXFxcXHUyMDAwXFxcXHUyMDAxXFxcXHUyMDAyXFxcXHUyMDAzXFxcXHUyMDA0XFxcXHUyMDA1XFxcXHUyMDA2XFxcXHUyMDA3XFxcXHUyMDA4XFxcXHUyMDA5XFxcXHUyMDBhXFxcXHUyMDJmXFxcXHUyMDVmXFxcXHUzMDAwXFxcXGQrXFxcXHUyNzAwLVxcXFx1MjdiZmEtelxcXFx4ZGYtXFxcXHhmNlxcXFx4ZjgtXFxcXHhmZkEtWlxcXFx4YzAtXFxcXHhkNlxcXFx4ZDgtXFxcXHhkZV0pfCQpfFtBLVpcXFxceGMwLVxcXFx4ZDZcXFxceGQ4LVxcXFx4ZGVdPyg/OlthLXpcXFxceGRmLVxcXFx4ZjZcXFxceGY4LVxcXFx4ZmZdfFteXFxcXHVkODAwLVxcXFx1ZGZmZlxcXFx4YWNcXFxceGIxXFxcXHhkN1xcXFx4ZjdcXFxceDAwLVxcXFx4MmZcXFxceDNhLVxcXFx4NDBcXFxceDViLVxcXFx4NjBcXFxceDdiLVxcXFx4YmZcXFxcdTIwMDAtXFxcXHUyMDZmIFxcXFx0XFxcXHgwYlxcXFxmXFxcXHhhMFxcXFx1ZmVmZlxcXFxuXFxcXHJcXFxcdTIwMjhcXFxcdTIwMjlcXFxcdTE2ODBcXFxcdTE4MGVcXFxcdTIwMDBcXFxcdTIwMDFcXFxcdTIwMDJcXFxcdTIwMDNcXFxcdTIwMDRcXFxcdTIwMDVcXFxcdTIwMDZcXFxcdTIwMDdcXFxcdTIwMDhcXFxcdTIwMDlcXFxcdTIwMGFcXFxcdTIwMmZcXFxcdTIwNWZcXFxcdTMwMDBcXFxcZCtcXFxcdTI3MDAtXFxcXHUyN2JmYS16XFxcXHhkZi1cXFxceGY2XFxcXHhmOC1cXFxceGZmQS1aXFxcXHhjMC1cXFxceGQ2XFxcXHhkOC1cXFxceGRlXSkrKD86WydcXHUyMDE5XSg/OmR8bGx8bXxyZXxzfHR8dmUpKT98W0EtWlxcXFx4YzAtXFxcXHhkNlxcXFx4ZDgtXFxcXHhkZV0rKD86WydcXHUyMDE5XSg/OkR8TEx8TXxSRXxTfFR8VkUpKT98XFxcXGQrXCIsT3RdLmpvaW4oXCJ8XCIpLFwiZ1wiKSxXdD1SZWdFeHAoXCJbXFxcXHUyMDBkXFxcXHVkODAwLVxcXFx1ZGZmZlxcXFx1MDMwMC1cXFxcdTAzNmZcXFxcdWZlMjAtXFxcXHVmZTIzXFxcXHUyMGQwLVxcXFx1MjBmMFxcXFx1ZmUwZVxcXFx1ZmUwZl1cIiksQnQ9L1thLXpdW0EtWl18W0EtWl17Mix9W2Etel18WzAtOV1bYS16QS1aXXxbYS16QS1aXVswLTldfFteYS16QS1aMC05IF0vLEx0PVwiQXJyYXkgQnVmZmVyIERhdGFWaWV3IERhdGUgRXJyb3IgRmxvYXQzMkFycmF5IEZsb2F0NjRBcnJheSBGdW5jdGlvbiBJbnQ4QXJyYXkgSW50MTZBcnJheSBJbnQzMkFycmF5IE1hcCBNYXRoIE9iamVjdCBQcm9taXNlIFJlZmxlY3QgUmVnRXhwIFNldCBTdHJpbmcgU3ltYm9sIFR5cGVFcnJvciBVaW50OEFycmF5IFVpbnQ4Q2xhbXBlZEFycmF5IFVpbnQxNkFycmF5IFVpbnQzMkFycmF5IFdlYWtNYXAgXyBpc0Zpbml0ZSBwYXJzZUludCBzZXRUaW1lb3V0XCIuc3BsaXQoXCIgXCIpLE10PXt9O1xuXHRNdFtcIltvYmplY3QgRmxvYXQzMkFycmF5XVwiXT1NdFtcIltvYmplY3QgRmxvYXQ2NEFycmF5XVwiXT1NdFtcIltvYmplY3QgSW50OEFycmF5XVwiXT1NdFtcIltvYmplY3QgSW50MTZBcnJheV1cIl09TXRbXCJbb2JqZWN0IEludDMyQXJyYXldXCJdPU10W1wiW29iamVjdCBVaW50OEFycmF5XVwiXT1NdFtcIltvYmplY3QgVWludDhDbGFtcGVkQXJyYXldXCJdPU10W1wiW29iamVjdCBVaW50MTZBcnJheV1cIl09TXRbXCJbb2JqZWN0IFVpbnQzMkFycmF5XVwiXT10cnVlLE10W1wiW29iamVjdCBBcmd1bWVudHNdXCJdPU10W1wiW29iamVjdCBBcnJheV1cIl09TXRbXCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiXT1NdFtcIltvYmplY3QgQm9vbGVhbl1cIl09TXRbXCJbb2JqZWN0IERhdGFWaWV3XVwiXT1NdFtcIltvYmplY3QgRGF0ZV1cIl09TXRbXCJbb2JqZWN0IEVycm9yXVwiXT1NdFtcIltvYmplY3QgRnVuY3Rpb25dXCJdPU10W1wiW29iamVjdCBNYXBdXCJdPU10W1wiW29iamVjdCBOdW1iZXJdXCJdPU10W1wiW29iamVjdCBPYmplY3RdXCJdPU10W1wiW29iamVjdCBSZWdFeHBdXCJdPU10W1wiW29iamVjdCBTZXRdXCJdPU10W1wiW29iamVjdCBTdHJpbmddXCJdPU10W1wiW29iamVjdCBXZWFrTWFwXVwiXT1mYWxzZTtcblx0dmFyIEN0PXt9O0N0W1wiW29iamVjdCBBcmd1bWVudHNdXCJdPUN0W1wiW29iamVjdCBBcnJheV1cIl09Q3RbXCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiXT1DdFtcIltvYmplY3QgRGF0YVZpZXddXCJdPUN0W1wiW29iamVjdCBCb29sZWFuXVwiXT1DdFtcIltvYmplY3QgRGF0ZV1cIl09Q3RbXCJbb2JqZWN0IEZsb2F0MzJBcnJheV1cIl09Q3RbXCJbb2JqZWN0IEZsb2F0NjRBcnJheV1cIl09Q3RbXCJbb2JqZWN0IEludDhBcnJheV1cIl09Q3RbXCJbb2JqZWN0IEludDE2QXJyYXldXCJdPUN0W1wiW29iamVjdCBJbnQzMkFycmF5XVwiXT1DdFtcIltvYmplY3QgTWFwXVwiXT1DdFtcIltvYmplY3QgTnVtYmVyXVwiXT1DdFtcIltvYmplY3QgT2JqZWN0XVwiXT1DdFtcIltvYmplY3QgUmVnRXhwXVwiXT1DdFtcIltvYmplY3QgU2V0XVwiXT1DdFtcIltvYmplY3QgU3RyaW5nXVwiXT1DdFtcIltvYmplY3QgU3ltYm9sXVwiXT1DdFtcIltvYmplY3QgVWludDhBcnJheV1cIl09Q3RbXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiXT1DdFtcIltvYmplY3QgVWludDE2QXJyYXldXCJdPUN0W1wiW29iamVjdCBVaW50MzJBcnJheV1cIl09dHJ1ZSxcblx0XHRDdFtcIltvYmplY3QgRXJyb3JdXCJdPUN0W1wiW29iamVjdCBGdW5jdGlvbl1cIl09Q3RbXCJbb2JqZWN0IFdlYWtNYXBdXCJdPWZhbHNlO3ZhciB6dD17XCJcXHhjMFwiOlwiQVwiLFwiXFx4YzFcIjpcIkFcIixcIlxceGMyXCI6XCJBXCIsXCJcXHhjM1wiOlwiQVwiLFwiXFx4YzRcIjpcIkFcIixcIlxceGM1XCI6XCJBXCIsXCJcXHhlMFwiOlwiYVwiLFwiXFx4ZTFcIjpcImFcIixcIlxceGUyXCI6XCJhXCIsXCJcXHhlM1wiOlwiYVwiLFwiXFx4ZTRcIjpcImFcIixcIlxceGU1XCI6XCJhXCIsXCJcXHhjN1wiOlwiQ1wiLFwiXFx4ZTdcIjpcImNcIixcIlxceGQwXCI6XCJEXCIsXCJcXHhmMFwiOlwiZFwiLFwiXFx4YzhcIjpcIkVcIixcIlxceGM5XCI6XCJFXCIsXCJcXHhjYVwiOlwiRVwiLFwiXFx4Y2JcIjpcIkVcIixcIlxceGU4XCI6XCJlXCIsXCJcXHhlOVwiOlwiZVwiLFwiXFx4ZWFcIjpcImVcIixcIlxceGViXCI6XCJlXCIsXCJcXHhjY1wiOlwiSVwiLFwiXFx4Y2RcIjpcIklcIixcIlxceGNlXCI6XCJJXCIsXCJcXHhjZlwiOlwiSVwiLFwiXFx4ZWNcIjpcImlcIixcIlxceGVkXCI6XCJpXCIsXCJcXHhlZVwiOlwiaVwiLFwiXFx4ZWZcIjpcImlcIixcIlxceGQxXCI6XCJOXCIsXCJcXHhmMVwiOlwiblwiLFwiXFx4ZDJcIjpcIk9cIixcIlxceGQzXCI6XCJPXCIsXCJcXHhkNFwiOlwiT1wiLFwiXFx4ZDVcIjpcIk9cIixcIlxceGQ2XCI6XCJPXCIsXG5cdFx0XCJcXHhkOFwiOlwiT1wiLFwiXFx4ZjJcIjpcIm9cIixcIlxceGYzXCI6XCJvXCIsXCJcXHhmNFwiOlwib1wiLFwiXFx4ZjVcIjpcIm9cIixcIlxceGY2XCI6XCJvXCIsXCJcXHhmOFwiOlwib1wiLFwiXFx4ZDlcIjpcIlVcIixcIlxceGRhXCI6XCJVXCIsXCJcXHhkYlwiOlwiVVwiLFwiXFx4ZGNcIjpcIlVcIixcIlxceGY5XCI6XCJ1XCIsXCJcXHhmYVwiOlwidVwiLFwiXFx4ZmJcIjpcInVcIixcIlxceGZjXCI6XCJ1XCIsXCJcXHhkZFwiOlwiWVwiLFwiXFx4ZmRcIjpcInlcIixcIlxceGZmXCI6XCJ5XCIsXCJcXHhjNlwiOlwiQWVcIixcIlxceGU2XCI6XCJhZVwiLFwiXFx4ZGVcIjpcIlRoXCIsXCJcXHhmZVwiOlwidGhcIixcIlxceGRmXCI6XCJzc1wifSxVdD17XCImXCI6XCImYW1wO1wiLFwiPFwiOlwiJmx0O1wiLFwiPlwiOlwiJmd0O1wiLCdcIic6XCImcXVvdDtcIixcIidcIjpcIiYjMzk7XCIsXCJgXCI6XCImIzk2O1wifSwkdD17XCImYW1wO1wiOlwiJlwiLFwiJmx0O1wiOlwiPFwiLFwiJmd0O1wiOlwiPlwiLFwiJnF1b3Q7XCI6J1wiJyxcIiYjMzk7XCI6XCInXCIsXCImIzk2O1wiOlwiYFwifSxEdD17XCJcXFxcXCI6XCJcXFxcXCIsXCInXCI6XCInXCIsXCJcXG5cIjpcIm5cIixcIlxcclwiOlwiclwiLFwiXFx1MjAyOFwiOlwidTIwMjhcIixcIlxcdTIwMjlcIjpcInUyMDI5XCJ9LEZ0PXBhcnNlRmxvYXQsTnQ9cGFyc2VJbnQsUHQ9dHlwZW9mIGV4cG9ydHM9PVwib2JqZWN0XCImJmV4cG9ydHMsWnQ9UHQmJnR5cGVvZiBtb2R1bGU9PVwib2JqZWN0XCImJm1vZHVsZSxUdD1adCYmWnQuZXhwb3J0cz09PVB0LHF0PVIodHlwZW9mIHNlbGY9PVwib2JqZWN0XCImJnNlbGYpLFZ0PVIodHlwZW9mIHRoaXM9PVwib2JqZWN0XCImJnRoaXMpLEt0PVIodHlwZW9mIGdsb2JhbD09XCJvYmplY3RcIiYmZ2xvYmFsKXx8cXR8fFZ0fHxGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCksR3Q9WigpO1xuXHQocXR8fHt9KS5fPUd0LHR5cGVvZiBkZWZpbmU9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGRlZmluZS5hbWQ9PVwib2JqZWN0XCImJmRlZmluZS5hbWQ/IGRlZmluZShmdW5jdGlvbigpe3JldHVybiBHdH0pOlp0PygoWnQuZXhwb3J0cz1HdCkuXz1HdCxQdC5fPUd0KTpLdC5fPUd0fSkuY2FsbCh0aGlzKTsiLCIoZnVuY3Rpb24oKSB7XG5cdHZhciBpc05vZGUgPSB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT09ICd1bmRlZmluZWQnO1xuXG5cdHZhciBfID0gcmVxdWlyZSgnLi9saWIvbG9kYXNoLm1pbicpLl87XG5cblx0dmFyIFV0aWxzID0ge307XG5cblx0VXRpbHMuTG9nID0gY29uc29sZTtcblxuXHRVdGlscy5fdXRpbEZpbGVzID0ge307XG5cdFV0aWxzLm1vZHVsZXMgPSB7fTtcblxuXHRVdGlscy5ydW5zT25Ob2RlID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCc7XG5cdH07XG5cblx0VXRpbHMuZXh0ZW5kVXRpbHMgPSBmdW5jdGlvbiAoZXh0ZW5kLCBvdmVyd3JpdGUsIGlnbm9yZSkge1xuXHRcdGlmICh0eXBlb2YoZXh0ZW5kKSAhPT0gJ29iamVjdCcgJiYgdHlwZW9mKGV4dGVuZCkgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFV0aWxzLkxvZy5lcnJvcihcIkNvdWxkIG5vdCBleHRlbmQgdXRpbHMuIEV4dGVuc2lvbiBtdXN0IGJlIG9iamVjdCBvciBmdW5jdGlvbi5cIik7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICghQXJyYXkuaXNBcnJheShvdmVyd3JpdGUpKSB7XG5cdFx0XHRvdmVyd3JpdGUgPSBbXTtcblx0XHR9XG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KGlnbm9yZSkpIHtcblx0XHRcdGlnbm9yZSA9IFtdO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgaW4gZXh0ZW5kKSB7XG5cdFx0XHRpZiAoaWdub3JlLmluZGV4T2YoaSkgPj0gMCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGlmIChpIGluIFV0aWxzICYmIG92ZXJ3cml0ZS5pbmRleE9mKGkpIDwgMCkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiJ1wiICsgaSArIFwiJyBhbHJlYWR5IGRlZmluZWQgaW4gVXRpbHMuXCIpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdFV0aWxzW2ldID0gZXh0ZW5kW2ldO1xuXHRcdH1cblx0fTtcblxuXHQvLyBTdGFuZGFyZCBleHRlbnNpb24gb2YgbG9kYXNoL3VuZGVyc2NvcmVcblx0aWYgKHR5cGVvZih3aW5kb3cuXykgPT09ICdmdW5jdGlvbicpIHtcblx0XHRVdGlscy5leHRlbmRVdGlscyh3aW5kb3cuXywgWyd0b1N0cmluZyddKTtcblx0fVxuXG5cdFV0aWxzLnNldExvZ2dlciA9IGZ1bmN0aW9uIChsb2dnZXIpIHtcblx0XHRVdGlscy5Mb2cgPSBsb2dnZXI7XG5cdH07XG5cblx0LyoqXG5cdCAqIEV4cG9ydHMgdGhlIGdpdmVuIHZhbHVlIGVpdGhlciB0byB0aGUgYnJvd3NlciB3aW5kb3cgb2JqZWN0IG9yIHRvIHRoZSBub2RlLmpzIG1vZHVsZSBvYmplY3QuXG5cdCAqIEBwYXJhbSBuYW1lXG5cdCAqIEBwYXJhbSB2YWx1ZVxuXHQgKi9cblx0VXRpbHMuZXhwb3J0ID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG5cdFx0VXRpbHMubW9kdWxlc1tuYW1lXSA9IHZhbHVlO1xuXHR9O1xuXG5cblx0Ly8gRXhwb3J0IFV0aWxzXG5cdGlmIChpc05vZGUpIHtcblx0XHRtb2R1bGUuZXhwb3J0cy5VdGlscyA9IFV0aWxzO1xuXHR9XG5cdGVsc2Uge1xuXHRcdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblx0XHRcdGRlZmluZShbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gVXRpbHM7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR3aW5kb3cuVXRpbHMgPSBVdGlscztcblx0XHR9XG5cdH1cbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuXHR2YXIgaXNOb2RlID0gdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzICE9PSAndW5kZWZpbmVkJztcblx0dmFyIFV0aWxzID0gaXNOb2RlID8gcmVxdWlyZSgnLi4vdXRpbHMtY29yZScpLlV0aWxzIDogd2luZG93LlV0aWxzO1xuXHRpZighVXRpbHMpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiVXRpbHNDb3JlIG5vdCBsb2FkZWQuXCIpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge29iamVjdHxzdHJpbmd9IHNwZWNzXHRcdFx0IEVycm9yIG1lc3NhZ2Ugb3Igc3BlY3MuXG5cdCAqIEBwYXJhbSB7VXRpbHMuRXJyb3J9IFtvcmlnaW5hbEVycm9yXVx0IE9yaWdpbmFsIGVycm9yIG1lc3NhZ2UgKG9ubHkgaWYgZmlyc3QgYXJndW1lbnQgd2FzIHN0cmluZykuXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0VXRpbHMuRXJyb3IgPSBmdW5jdGlvbihzcGVjcywgb3JpZ2luYWxFcnJvcikge1xuXHRcdGlmKFV0aWxzLmlzU3RyaW5nKHNwZWNzKSkge1xuXHRcdFx0c3BlY3MgPSB7XG5cdFx0XHRcdG1lc3NhZ2U6IHNwZWNzXG5cdFx0XHR9O1xuXHRcdFx0aWYob3JpZ2luYWxFcnJvciBpbnN0YW5jZW9mIFV0aWxzLkVycm9yKSB7XG5cdFx0XHRcdHNwZWNzLm9yaWdpbmFsRXJyb3IgPSBvcmlnaW5hbEVycm9yO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRzcGVjcyA9IHNwZWNzIHx8IHt9O1xuXG5cdFx0dGhpcy5tZXNzYWdlXHRcdD0gc3BlY3MubWVzc2FnZTtcblx0XHR0aGlzLm9yaWdpbmFsRXJyb3IgID0gc3BlY3Mub3JpZ2luYWxFcnJvcjtcblx0XHR0aGlzLmVycm9yTWFwXHQgICA9IHNwZWNzLmVycm9yTWFwO1xuXHRcdHRoaXMuY29kZVx0XHQgICA9IHNwZWNzLmNvZGU7XG5cdFx0dGhpcy5kYXRhXHRcdCAgID0gc3BlY3MuZGF0YTtcblx0XHQvL3RoaXMub3JpZ2luXHRcdCA9IFV0aWxzLlV0aWxzLmdldENhbGxlcigyKTtcblx0XHQvL3RoaXMuc3RhY2tcdFx0ICA9IFV0aWxzLlV0aWxzLmdldFN0YWNrVHJhY2UoMSwgMTApO1xuXHRcdHRoaXMucHVibGljXHRcdFx0PSBzcGVjcy5wdWJsaWMgfHwgdHJ1ZTtcblx0fTtcblxuXHRVdGlscy5FcnJvci5wcm90b3R5cGUubG9nID0gVXRpbHMuTG9nO1xuXG5cdFV0aWxzLkVycm9yLnByb3RvdHlwZS5tZXNzYWdlID0gJ0FuIGVycm9yIG9jY3VycmVkLic7XG5cdFV0aWxzLkVycm9yLnByb3RvdHlwZS5vcmlnaW5hbEVycm9yID0gdW5kZWZpbmVkO1xuXHRVdGlscy5FcnJvci5wcm90b3R5cGUuZXJyb3JNYXAgPSB1bmRlZmluZWQ7XG5cdFV0aWxzLkVycm9yLnByb3RvdHlwZS5jb2RlID0gdW5kZWZpbmVkO1xuXHRVdGlscy5FcnJvci5wcm90b3R5cGUuZGF0YSA9IHVuZGVmaW5lZDtcblx0VXRpbHMuRXJyb3IucHJvdG90eXBlLm9yaWdpbiA9IHVuZGVmaW5lZDtcblx0VXRpbHMuRXJyb3IucHJvdG90eXBlLnN0YWNrID0gdW5kZWZpbmVkO1xuXG5cdFV0aWxzLkVycm9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLm1lc3NhZ2U7XG5cdH07XG5cdFV0aWxzLkVycm9yLnByb3RvdHlwZS5nZXRNZXNzYWdlID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVzc2FnZTtcblx0fTtcblxuXHRVdGlscy5leHBvcnQoJ0Vycm9yJywgRXJyb3IpO1xuXG5cdG1vZHVsZS5leHBvcnRzLkVycm9yID0gRXJyb3I7XG59KSgpOyIsIihmdW5jdGlvbigpIHtcblx0dmFyIGlzTm9kZSA9IHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCc7XG5cdHZhciBVdGlscyA9IGlzTm9kZSA/IHJlcXVpcmUoJy4uL3V0aWxzLWNvcmUnKS5VdGlscyA6IHdpbmRvdy5VdGlscztcblx0aWYoIVV0aWxzKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIlV0aWxzQ29yZSBub3QgbG9hZGVkLlwiKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR2YXIgU3RyID0ge307XG5cblx0U3RyLnBsdXJhbCA9IGZ1bmN0aW9uKHN0cmluZykge1xuXHRcdGlmKCFVdGlscy5pc1N0cmluZyhzdHJpbmcpKSB7XG5cdFx0XHRyZXR1cm4gXCJ0aGluZ3NcIjtcblx0XHR9XG5cblx0XHQvLyBDb3ZlcnMgc29tZSBpcnJlZ3VsYXIgcGx1cmFsc1xuXHRcdGlmKHN0cmluZy5zbGljZSgtMSkgPT09ICdzJyB8fCBzdHJpbmcuc2xpY2UoLTIpID09PSAnc2gnKSB7XG5cdFx0XHRyZXR1cm4gc3RyaW5nICsgJ2VzJztcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RyaW5nICsgJ3MnO1xuXHR9O1xuXG5cdFN0ci5jYXBpdGFsaXNlRmlyc3QgPSBmdW5jdGlvbiAocykge1xuXHRcdGlmICghVXRpbHMuaXNTdHJpbmcocykpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiBzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcy5zbGljZSgxKTtcblx0fTtcblxuXHRTdHIuZG90U3RyaW5nID0gZnVuY3Rpb24obnVtYmVyKSB7XG5cdFx0aWYoIVV0aWxzLmlzTnVtYmVyKG51bWJlcikpIHtcblx0XHRcdHJldHVybiBcIlwiO1xuXHRcdH1cblx0XHR2YXIgc3RyID0gXCJcIjtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbnVtYmVyOyBpKyspIHtcblx0XHRcdHN0ciArPSAnLic7XG5cdFx0fVxuXHRcdHJldHVybiBzdHI7XG5cdH07XG5cblx0U3RyLnRydW5jYXRlU3RyaW5nID0gZnVuY3Rpb24oc3RyLCBtYXhMZW5ndGgpIHtcblx0XHRpZiAoIVV0aWxzLmlzU3RyaW5nKHN0cikpIHtcblx0XHRcdHJldHVybiBzdHI7XG5cdFx0fVxuXG5cdFx0aWYoc3RyLmxlbmd0aCA+IDMgJiYgc3RyLmxlbmd0aCA+IG1heExlbmd0aC0zKSB7XG5cdFx0XHRyZXR1cm4gc3RyLnN1YnN0cmluZygwLCBtYXhMZW5ndGgtMykgKyAnLi4uJztcblx0XHR9XG5cdFx0cmV0dXJuIHN0cjtcblx0fTtcblxuXHRTdHIub2JqZWN0VG9TdHJpbmcgPSBmdW5jdGlvbih2YWx1ZSwgbWF4TGVuZ3RoKSB7XG5cdFx0aWYobWF4TGVuZ3RoIDw9IDApIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0aWYobWF4TGVuZ3RoID09PSAxKSB7XG5cdFx0XHRyZXR1cm4gJ3snXG5cdFx0fVxuXHRcdGlmKG1heExlbmd0aCA8PSA1KSB7XG5cdFx0XHRpZihPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiAne30nO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICd7JyArIFV0aWxzLmRvdFN0cmluZyhtYXhMZW5ndGgtMikgKyAnfSc7XG5cdFx0fVxuXHRcdHZhciBzdHIgPSBcIntcIjtcblx0XHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblx0XHR2YXIgbGFzdEtleSA9IGtleXNba2V5cy5sZW5ndGgtMV07XG5cdFx0dmFyIGtleUNvdW50ID0gMDtcblx0XHRmb3IodmFyIGkgaW4gdmFsdWUpIHtcblx0XHRcdHZhciBjb21tYUNvdW50ID0gc3RyLmxlbmd0aCA9PT0gMSA/IDAgOiAxO1xuXHRcdFx0dmFyIGRvdENvdW50ID0gaSA9PT0gbGFzdEtleSA/IDAgOiA0O1xuXHRcdFx0dmFyIGtleVZhbHVlID0gVXRpbHMudmFsdWVUb1N0cmluZyh2YWx1ZVtpXSwgNyk7XG5cdFx0XHRpZihzdHIubGVuZ3RoICsgY29tbWFDb3VudCArIGkubGVuZ3RoICsgMSArIGtleVZhbHVlLmxlbmd0aCArIGRvdENvdW50IDwgbWF4TGVuZ3RoKSB7XG5cdFx0XHRcdGlmKHN0ci5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0c3RyICs9ICcsJztcblx0XHRcdFx0fVxuXHRcdFx0XHRzdHIgKz0gaSArIFwiOlwiICsga2V5VmFsdWU7XG5cdFx0XHRcdGtleUNvdW50Kys7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoa2V5Q291bnQgPCBrZXlzLmxlbmd0aCkge1xuXHRcdFx0aWYoc3RyLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0c3RyICs9ICcsJztcblx0XHRcdH1cblx0XHRcdHN0ciArPSBVdGlscy5kb3RTdHJpbmcoTWF0aC5taW4oMywgbWF4TGVuZ3RoIC0gc3RyLmxlbmd0aCAtIDEpKTtcblx0XHR9XG5cdFx0c3RyICs9IFwifVwiO1xuXHRcdHJldHVybiBzdHI7XG5cdH07XG5cblx0U3RyLmFycmF5VG9TdHJpbmcgPSBmdW5jdGlvbih2YWx1ZSwgbWF4TGVuZ3RoKSB7XG5cdFx0aWYobWF4TGVuZ3RoIDw9IDApIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0aWYobWF4TGVuZ3RoID09PSAxKSB7XG5cdFx0XHRyZXR1cm4gJ1snO1xuXHRcdH1cblx0XHR2YXIgY291bnRDb3VudCA9IDIgKyAoXCJcIit2YWx1ZS5sZW5ndGgpLmxlbmd0aDtcblx0XHRpZihtYXhMZW5ndGggPD0gNSArIGNvdW50Q291bnQpIHtcblx0XHRcdGlmKHZhbHVlLmxlbmd0aCA9PT0gMCkgcmV0dXJuICdbXSc7XG5cdFx0XHRyZXR1cm4gJ1snICsgVXRpbHMuZG90U3RyaW5nKE1hdGgubWluKDMsIG1heExlbmd0aC0yKSkgKyAnXSdcblx0XHR9XG5cdFx0dmFyIHN0ciA9ICdbJztcblx0XHR2YXIga2V5Q291bnQgPSAwO1xuXHRcdGZvcih2YXIgaSA9IDA7IGk8dmFsdWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtVmFsdWUgPSBVdGlscy52YWx1ZVRvU3RyaW5nKHZhbHVlW2ldLCA3KTtcblx0XHRcdHZhciBkb3RDb3VudCA9IGkgPCB2YWx1ZS5sZW5ndGgtMSA/IDQgOiAwO1xuXHRcdFx0dmFyIGNvbW1hQ291bnQgPSBpID09PSAwID8gMCA6IDE7XG5cdFx0XHRpZihzdHIubGVuZ3RoICsgY29tbWFDb3VudCArIGl0ZW1WYWx1ZS5sZW5ndGggKyBkb3RDb3VudCArIGNvdW50Q291bnQgPCBtYXhMZW5ndGgpIHtcblx0XHRcdFx0aWYoaSAhPT0gMCkge1xuXHRcdFx0XHRcdHN0ciArPSAnLCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RyICs9IGl0ZW1WYWx1ZTtcblx0XHRcdFx0a2V5Q291bnQrKztcblx0XHRcdFx0aWYoa2V5Q291bnQgPj0gMikge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoa2V5Q291bnQgPCB2YWx1ZS5sZW5ndGgpIHtcblx0XHRcdGlmKHN0ci5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdHN0ciArPSAnLCc7XG5cdFx0XHR9XG5cdFx0XHRzdHIgKz0gVXRpbHMuZG90U3RyaW5nKE1hdGgubWluKDMsIG1heExlbmd0aCAtIHN0ci5sZW5ndGggLSAxKSk7XG5cdFx0fVxuXHRcdHN0ciArPSAnXScgKyAnKCcgKyB2YWx1ZS5sZW5ndGggKycpJztcblx0XHRyZXR1cm4gc3RyO1xuXHR9O1xuXG5cdFN0ci5udW1iZXJUb1N0cmluZyA9IGZ1bmN0aW9uKHZhbHVlLCBtYXhMZW5ndGgpIHtcblx0XHRpZihtYXhMZW5ndGggPD0gMCkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0XHR2YXIgc3RyVmFsdWUgPSBcIlwiK3ZhbHVlO1xuXHRcdGlmKHN0clZhbHVlLmxlbmd0aCA8PSBtYXhMZW5ndGgpIHtcblx0XHRcdHJldHVybiBzdHJWYWx1ZTtcblx0XHR9XG5cdFx0aWYobWF4TGVuZ3RoIDwgNSkge1xuXHRcdFx0cmV0dXJuIFV0aWxzLmRvdFN0cmluZyhNYXRoLm1pbigzLCBtYXhMZW5ndGgpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbHVlLnRvRXhwb25lbnRpYWwoTWF0aC5tYXgoMCwgbWF4TGVuZ3RoLTUpKTtcblx0fTtcblxuXHRTdHIudmFsdWVUb1N0cmluZyA9IGZ1bmN0aW9uKHZhbHVlLCBtYXhMZW5ndGgpIHtcblx0XHRpZihtYXhMZW5ndGggPD0gMCkge1xuXHRcdFx0cmV0dXJuIFwiXCI7XG5cdFx0fVxuXHRcdGlmKFV0aWxzLmlzU3RyaW5nKHZhbHVlKSkge1xuXHRcdFx0aWYobWF4TGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdHJldHVybiAnXCInO1xuXHRcdFx0fVxuXHRcdFx0aWYodmFsdWUubGVuZ3RoIDw9IG1heExlbmd0aC0yKSB7XG5cdFx0XHRcdHJldHVybiAnXCInICsgdmFsdWUgKyAnXCInO1xuXHRcdFx0fVxuXHRcdFx0aWYobWF4TGVuZ3RoIDw9IDUpIHtcblx0XHRcdFx0cmV0dXJuICdcIicgKyBVdGlscy5kb3RTdHJpbmcobWF4TGVuZ3RoLTIpICsgJ1wiJztcblx0XHRcdH1cblx0XHRcdHJldHVybiAnXCInICsgVXRpbHMudHJ1bmNhdGVTdHJpbmcodmFsdWUsIG1heExlbmd0aC0yKSArICdcIic7XG5cdFx0fVxuXHRcdGlmKFV0aWxzLmlzTnVtYmVyKHZhbHVlKSkge1xuXHRcdFx0cmV0dXJuIFV0aWxzLm51bWJlclRvU3RyaW5nKHZhbHVlLCBtYXhMZW5ndGgpO1xuXHRcdH1cblx0XHRpZihVdGlscy5pc0Jvb2xlYW4odmFsdWUpKSB7XG5cdFx0XHRpZihtYXhMZW5ndGggPCA1KSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZSA/ICd0JyA6ICdmJztcblx0XHRcdH1cblx0XHRcdHJldHVybiB2YWx1ZSA/ICd0cnVlJyA6ICdmYWxzZSc7XG5cdFx0fVxuXHRcdGlmKFV0aWxzLmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHRyZXR1cm4gVXRpbHMuYXJyYXlUb1N0cmluZyh2YWx1ZSwgbWF4TGVuZ3RoKTtcblx0XHR9XG5cdFx0aWYoVXRpbHMuaXNPYmplY3QodmFsdWUpKSB7XG5cdFx0XHRyZXR1cm4gVXRpbHMub2JqZWN0VG9TdHJpbmcodmFsdWUsIG1heExlbmd0aCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFV0aWxzLnRydW5jYXRlU3RyaW5nKFwiXCIrdmFsdWUsIG1heExlbmd0aCk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMuU3RyaW5nID0gU3RyO1xufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG5cdHZhciBpc05vZGUgPSB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT09ICd1bmRlZmluZWQnO1xuXHR2YXIgVXRpbHMgPSBpc05vZGUgPyByZXF1aXJlKCcuLi91dGlscy1jb3JlJykuVXRpbHMgOiB3aW5kb3cuVXRpbHM7XG5cdGlmKCFVdGlscykge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJVdGlsc0NvcmUgbm90IGxvYWRlZC5cIik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0dmFyIFZhbGlkYXRpb24gPSB7fTtcblxuXHRWYWxpZGF0aW9uLlZhbGlkaXR5ID0gZnVuY3Rpb24gKG5hbWUsIGlucHV0LCB2YWxpZCwgbWVzc2FnZSkge1xuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgVXRpbHMuaXNPYmplY3QobmFtZSkpIHtcblx0XHRcdHZhciBzZXR0aW5ncyA9IG5hbWU7XG5cdFx0XHR0aGlzLnNldE5hbWUoc2V0dGluZ3MubmFtZSk7XG5cdFx0XHR0aGlzLnNldFZhbGlkKHNldHRpbmdzLnZhbGlkKTtcblx0XHRcdHRoaXMuc2V0TWVzc2FnZShzZXR0aW5ncy5tZXNzYWdlKTtcblx0XHRcdHRoaXMuc2V0SW5wdXQoc2V0dGluZ3MuaW5wdXQpO1xuXHRcdFx0aWYoJ2NvcnJlY3RlZCcgaW4gc2V0dGluZ3MpIHtcblx0XHRcdFx0dGhpcy5zZXRDb3JyZWN0ZWRWYWx1ZShzZXR0aW5ncy5jb3JyZWN0ZWQpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRWYWxpZGl0eU1hcChzZXR0aW5ncy52YWxpZGl0eU1hcCk7XG5cdFx0XHR0aGlzLnNldEluZm8oc2V0dGluZ3MuaW5mbyk7XG5cdFx0XHR0aGlzLnNldFR5cGUoc2V0dGluZ3MudHlwZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX25hbWUgPSBuYW1lO1xuXHRcdFx0dGhpcy5faW5wdXQgPSBpbnB1dDtcblx0XHRcdHRoaXMuX3ZhbGlkID0gdmFsaWQ7XG5cdFx0XHR0aGlzLl9tZXNzYWdlID0gbWVzc2FnZTtcblx0XHR9XG5cdH07XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLl90eXBlID0gJ3ZhbHVlJztcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuX25hbWUgPSB1bmRlZmluZWQ7XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLl9pbnB1dCA9IHVuZGVmaW5lZDtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuX3ZhbGlkID0gdHJ1ZTtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuX3ZhbGlkaXR5TWFwID0gdW5kZWZpbmVkO1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5fY29ycmVjdGVkID0gdW5kZWZpbmVkO1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5faXNDb3JyZWN0ZWQgPSBmYWxzZTtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuX2luZm8gPSB1bmRlZmluZWQ7XG5cblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuc2V0VHlwZSA9IGZ1bmN0aW9uKHR5cGUpIHtcblx0XHR0aGlzLl90eXBlID0gdHlwZTtcblx0fTtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuZ2V0VHlwZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLl90eXBlO1xuXHR9O1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5zZXROYW1lID0gZnVuY3Rpb24obmFtZSkge1xuXHRcdHRoaXMuX25hbWUgPSBuYW1lO1xuXHR9O1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5nZXROYW1lID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX25hbWU7XG5cdH07XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLnNldEluZm8gPSBmdW5jdGlvbihpbmZvKSB7XG5cdFx0dGhpcy5faW5mbyA9IGluZm87XG5cdH07XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLmdldEluZm8gPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5faW5mbztcblx0fTtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuZ2V0SW5wdXQgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5faW5wdXQ7XG5cdH07XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLnNldElucHV0ID0gZnVuY3Rpb24oaW5wdXQpIHtcblx0XHR0aGlzLl9pbnB1dCA9IGlucHV0O1xuXHR9O1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5zZXRWYWxpZCA9IGZ1bmN0aW9uKHZhbGlkKSB7XG5cdFx0dGhpcy5fdmFsaWQgPSB2YWxpZCAhPT0gZmFsc2U7XG5cdH07XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLmlzVmFsaWQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX3ZhbGlkOyB9O1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmKCF0aGlzLmlzVmFsaWQoKSkgcmV0dXJuIHVuZGVmaW5lZDtcblx0XHRpZih0aGlzLl9pc0NvcnJlY3RlZCkgcmV0dXJuIHRoaXMuX2NvcnJlY3RlZDtcblx0XHRyZXR1cm4gdGhpcy5faW5wdXQ7XG5cdH07XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLnNldE1lc3NhZ2UgPSBmdW5jdGlvbihtZXNzYWdlKSB7XG5cdFx0dGhpcy5fbWVzc2FnZSA9IG1lc3NhZ2U7XG5cdH07XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLmdldE1lc3NhZ2UgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX21lc3NhZ2U7IH07XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLmlzQ29ycmVjdGVkID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLl9pc0NvcnJlY3RlZDtcblx0fTtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuZ2V0Q29ycmVjdGVkVmFsdWUgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5fY29ycmVjdGVkO1xuXHR9O1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5zZXRDb3JyZWN0ZWRWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0dGhpcy5faXNDb3JyZWN0ZWQgPSB0cnVlO1xuXHRcdHRoaXMuX2NvcnJlY3RlZCA9IHZhbHVlO1xuXHR9O1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5nZXRWYWxpZGl0eU1hcCA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLl92YWxpZGl0eU1hcDtcblx0fTtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuc2V0VmFsaWRpdHlNYXAgPSBmdW5jdGlvbihtYXApIHtcblx0XHR0aGlzLl92YWxpZGl0eU1hcCA9IG1hcDtcblx0fTtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuY3JlYXRlQmFkVmFsdWVNZXNzYWdlID0gZnVuY3Rpb24ocmV0dXJuQXNBcnJheSkge1xuXHRcdHZhciB3aHkgPSB0aGlzLmdldE1lc3NhZ2UoKTtcblx0XHRpZih3aHkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHR2YXIgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpO1xuXHRcdHZhciBkZWZhdWx0VG8gPSB0aGlzLmdldENvcnJlY3RlZFZhbHVlKCk7XG5cdFx0dmFyIHZhbHVlID0gdGhpcy5nZXRJbnB1dCgpO1xuXHRcdGlmKCFyZXR1cm5Bc0FycmF5KSB7XG5cdFx0XHR2YWx1ZSA9IFV0aWxzLnZhbHVlVG9TdHJpbmcodmFsdWUsIDMwKTtcblx0XHR9XG5cblx0XHQvLyBJZiByZWFzb24gZG9lcyBub3QgZW5kIHdpdGggZnVsbCBzdG9wLCBhZGQgb25lLlxuXHRcdGlmKCEvXFwuXFxzKj8vLmV4ZWMod2h5KSkge1xuXHRcdFx0d2h5ICs9ICcuJztcblx0XHR9XG5cblx0XHR2YXIgbWVzc2FnZXMgPSBbXTtcblx0XHRtZXNzYWdlcy5wdXNoKHdoeSk7XG5cdFx0bWVzc2FnZXMucHVzaChcIlZhbHVlOiBcIik7XG5cdFx0bWVzc2FnZXMucHVzaCh2YWx1ZSk7XG5cdFx0aWYodGhpcy5pc1ZhbGlkKCkgJiYgdGhpcy5pc0NvcnJlY3RlZCgpKSB7XG5cdFx0XHRtZXNzYWdlcy5wdXNoKFwiLiBVc2luZyBkZWZhdWx0OlwiKTtcblx0XHRcdG1lc3NhZ2VzLnB1c2goVXRpbHMudmFsdWVUb1N0cmluZyhkZWZhdWx0VG8pKTtcblx0XHR9XG5cblx0XHRpZihyZXR1cm5Bc0FycmF5ID09PSB0cnVlKSB7XG5cdFx0XHRyZXR1cm4gbWVzc2FnZXM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBtZXNzYWdlcy5qb2luKCcgJyk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIEVycm9yIG9iamVjdC5cblx0ICogQHJldHVybnMge1V0aWxzLkVycm9yfVxuXHQgKi9cblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuY3JlYXRlRXJyb3IgPSBmdW5jdGlvbihpbmNsdWRlRXJyb3JNYXApIHtcblx0XHR2YXIgbWVzc2FnZSA9IHRoaXMuZ2V0TWVzc2FnZSgpO1xuXHRcdGlmKG1lc3NhZ2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0dmFyIGNvZGUgPSAndmFsaWRhdGlvbi0nICsgdGhpcy5nZXRUeXBlKCk7XG5cdFx0dmFyIGVycm9yID0gbmV3IFV0aWxzLkVycm9yKHtcblx0XHRcdGRhdGFcdDogdGhpcy5nZXRJbnB1dCgpLFxuXHRcdFx0bWVzc2FnZVx0OiB0aGlzLmNyZWF0ZUJhZFZhbHVlTWVzc2FnZSgpLFxuXHRcdFx0Y29kZVx0OiBjb2RlXG5cdFx0fSk7XG5cdFx0aWYoaW5jbHVkZUVycm9yTWFwICE9PSBmYWxzZSkge1xuXHRcdFx0dmFyIHZhbGlkaXR5TWFwID0gdGhpcy5nZXRWYWxpZGl0eU1hcCgpO1xuXHRcdFx0aWYoXy5pc09iamVjdCh2YWxpZGl0eU1hcCkpIHtcblx0XHRcdFx0dmFyIGVycm9yTWFwID0ge307XG5cdFx0XHRcdGZvcih2YXIgaSBpbiB2YWxpZGl0eU1hcCkge1xuXHRcdFx0XHRcdHZhciBzdWJFcnJvciA9IHZhbGlkaXR5TWFwW2ldLmNyZWF0ZUVycm9yKCk7XG5cdFx0XHRcdFx0aWYoc3ViRXJyb3IgaW5zdGFuY2VvZiBVdGlscy5FcnJvcikge1xuXHRcdFx0XHRcdFx0ZXJyb3JNYXBbaV0gPSBzdWJFcnJvcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0ZXJyb3IuZXJyb3JNYXAgPSBlcnJvck1hcDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZXJyb3I7XG5cdH07XG5cblx0VmFsaWRhdGlvbi5fdmFsaWRhdGlvbk1lc3NhZ2VzID0ge1xuXHRcdGlzQXJndW1lbnRzOiBcIk11c3QgYmUgYXJndW1lbnRzLlwiLFxuXHRcdGlzQXJyYXk6IFwiTXVzdCBiZSBhcnJheS5cIixcblx0XHRpc0Jvb2xlYW46IFwiTXVzdCBiZSBib29sZWFuLlwiLFxuXHRcdGlzRGF0ZTogXCJNdXN0IGJlIGRhdGUuXCIsXG5cdFx0aXNFbGVtZW50OiBcIk11c3QgYmUgZWxlbWVudC5cIixcblx0XHRpc0VtcHR5OiBcIk11c3QgYmUgZW1wdHkuXCIsXG5cdFx0aXNFcnJvcjogXCJNdXN0IGJlIGVycm9yLlwiLFxuXHRcdGlzRmluaXRlOiBcIk11c3QgYmUgZmluaXRlLlwiLFxuXHRcdGlzRnVuY3Rpb246IFwiTXVzdCBiZSBmdW5jdGlvbi5cIixcblx0XHRpc01hdGNoOiBcIk11c3QgYmUgbWF0Y2hcIixcblx0XHRpc05hTjogXCJNdXN0IGJlIE5hTi5cIixcblx0XHRpc05hdGl2ZTogXCJNdXN0IGJlIG5hdGl2ZS5cIixcblx0XHRpc051bGw6IFwiTXVzdCBiZSBudWxsLlwiLFxuXHRcdGlzTnVtYmVyOiBcIk11c3QgYmUgbnVtYmVyLlwiLFxuXHRcdGlzT2JqZWN0OiBcIk11c3QgYmUgb2JqZWN0LlwiLFxuXHRcdGlzUGxhaW5PYmplY3Q6IFwiTXVzdCBiZSBwbGFpbiBvYmplY3QuXCIsXG5cdFx0aXNSZWdFeHA6IFwiTXVzdCBiZSBSZWdFeHAuXCIsXG5cdFx0aXNTdHJpbmc6IFwiTXVzdCBiZSBzdHJpbmcuXCIsXG5cdFx0aXNUeXBlZEFycmF5OiBcIk11c3QgYmUgdHlwZWQgYXJyYXkuXCIsXG5cdFx0aXNVbmRlZmluZWQ6IFwiTXVzdCBiZSB1bmRlZmluZWQuXCIsXG5cdFx0aXNTdHJpbmdPck51bWJlcjogXCJNdXN0IGJlIHN0cmluZyBvciBudW1iZXIuXCJcblx0fTtcblxuXHQvKipcblx0ICpcblx0ICogQHBhcmFtIHtWYWxpZGF0aW9uLlZhbGlkaXR5fSB2YWxpZGl0eVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gICBXaGV0aGVyIG9yIG5vdCB0aGUgdmFsaWRpdHkgd2FzIGxvZ2dlZC5cblx0ICovXG5cdFZhbGlkYXRpb24uTG9nVmFsaWRpdHkgPSBmdW5jdGlvbih2YWxpZGl0eSkge1xuXHRcdGlmKCEodmFsaWRpdHkgaW5zdGFuY2VvZiBWYWxpZGF0aW9uLlZhbGlkaXR5KSkge1xuXHRcdFx0VXRpbHMuTG9nLmVycm9yKFwiQ291bGQgbm90IGxvZyB2YWxpZGl0eS5cIiwgdmFsaWRpdHkpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmKHZhbGlkaXR5LmlzVmFsaWQoKSAmJiB2YWxpZGl0eS5nZXRNZXNzYWdlKCkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHZhciBlcnJvciA9IHZhbGlkaXR5LmNyZWF0ZUVycm9yKCk7XG5cdFx0dmFyIG1lc3NhZ2UgPSB2YWxpZGl0eS5jcmVhdGVCYWRWYWx1ZU1lc3NhZ2UodHJ1ZSk7XG5cdFx0bWVzc2FnZS5wdXNoKFwiLiBFcnJvcjogXCIpO1xuXHRcdG1lc3NhZ2UucHVzaChlcnJvcik7XG5cdFx0aWYoIXZhbGlkaXR5LmlzVmFsaWQoKSkge1xuXHRcdFx0VXRpbHMuTG9nLmVycm9yLmFwcGx5KFV0aWxzLkxvZywgbWVzc2FnZSk7XG5cdFx0fSBlbHNlIGlmICh2YWxpZGl0eS5pc0NvcnJlY3RlZCgpKSB7XG5cdFx0XHRVdGlscy5Mb2cud2Fybi5hcHBseShVdGlscy5Mb2csIG1lc3NhZ2UpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cdFZhbGlkYXRpb24uc2V0VmFsaWRhdGlvbk1lc3NhZ2UgPSBmdW5jdGlvbihtZXRob2QsIG1lc3NhZ2UpIHtcblx0XHRpZih0eXBlb2YobWV0aG9kKSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFV0aWxzLkxvZy5lcnJvcihcIlZhbGlkYXRpb24gbWV0aG9kIGFyZ3VtZW50IG11c3QgYmUgc3RyaW5nLlwiKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYodHlwZW9mKG1lc3NhZ2UpICE9PSAnc3RyaW5nJykge1xuXHRcdFx0VXRpbHMuTG9nLmVycm9yKFwiVmFsaWRhdGlvbiBtZXRob2QgbWVzc2FnZSBhcmd1bWVudCBtdXN0IGJlIHN0cmluZy5cIik7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdFZhbGlkYXRpb24uX3ZhbGlkYXRpb25NZXNzYWdlc1ttZXRob2RdID0gbWVzc2FnZTtcblx0fTtcblxuXHRWYWxpZGF0aW9uLmdldFZhbGlkYXRpb25NZXNzYWdlID0gZnVuY3Rpb24obWV0aG9kKSB7XG5cdFx0aWYodHlwZW9mKG1ldGhvZCkgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdH1cblx0XHRyZXR1cm4gVmFsaWRhdGlvbi5fdmFsaWRhdGlvbk1lc3NhZ2VzW21ldGhvZF07XG5cdH07XG5cblx0LyoqXG5cdCAqXG5cdCAqIFZhbGlkYXRlcyBhIHZhbHVlLCBiYXNlZCBvbiB0aGUgZ2l2ZW4gcGFyYW1ldGVyc1xuXHQgKlxuXHQgKiBFeGFtcGxlIHVzYWdlOiBWYWxpZGF0aW9uLnZhbGlkYXRlT25lKFwibXlWYXJpYWJsZVwiLCBcImFwcGxlXCIsIFwiaXNTdHJpbmdcIiwgXCJNdXN0IGJlIGEgc3RyaW5nXCIsIHtkZWZhdWx0OiBcImJhbmFuYVwiLCB3YXJuOiBmYWxzZX0pO1xuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVx0XHRcdFx0XHQgVGhlIG5hbWUgb2YgdGhlIHZhcmlhYmxlIHRvIGNoZWNrLlxuXHQgKiBAcGFyYW0gdmFsdWVcdFx0XHRcdFx0XHRcdCBUaGUgdmFsdWUgb2YgdGhlIHZhcmlhYmxlIHRvIGNoZWNrLlxuXHQgKiBAcGFyYW0gbWV0aG9kXHQgQm9vbGVhbiBjaGVjayBmb3IgdmFsaWRpdHksIG9yIG5hbWUgb2YgdXRpbCBmb3IgdmFsaWRhdGlvbi5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFttZXNzYWdlXVx0XHRcdFx0W09wdGlvbmFsXSBUaGUgbWVzc2FnZSB0byBkaXNwbGF5IHdoZW4gdmFyaWFibGUgaXMgbm90IHZhbGlkLlxuXHQgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1x0XHRcdFx0ICBBbiBvYmplY3Qgb2YgZXh0cmEgb3B0aW9uLlxuXHQgKiBAcGFyYW0gW29wdGlvbnMuZGVmYXVsdF1cdFx0XHRcdCBBIGRlZmF1bHQgdmFsdWUgaWYgZ2l2ZW4gdmFsdWUgaXMgaW52YWxpZC4gSWYgbm90IHByb3ZpZGVkLCB2YWxpZGF0aW9uIHdpbGwgZmFpbCBpZiBpbnZhbGlkIHZhbHVlLlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLndhcm5dXHRcdCAgSWYgZmFsc2UsIG5vIHdhcm5pbmcgd2lsbCBiZSBnaXZlbiBpZiBkZWZhdWx0IGlzIGNob3Nlbi4gRGVmYXVsdHMgdG8gdHJ1ZS5cblx0ICpcblx0ICogQHJldHVybiB7VmFsaWRhdGlvbi5WYWxpZGl0eX1cblx0ICovXG5cdFZhbGlkYXRpb24udmFsaWRhdGVPbmUgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgbWV0aG9kLCBtZXNzYWdlLCBvcHRpb25zKSB7XG5cdFx0LyoqIEB0eXBlIHtWYWxpZGF0aW9uLlZhbGlkaXR5fGJvb2xlYW59ICovXG5cdFx0dmFyIHZhbGlkID0gdW5kZWZpbmVkO1xuXHRcdGlmKFV0aWxzLmlzT2JqZWN0KG1lc3NhZ2UpKSB7IC8vIG1lc3NhZ2Ugd2FzIG9taXR0ZWRcblx0XHRcdG9wdGlvbnMgPSBtZXNzYWdlO1xuXHRcdFx0bWVzc2FnZSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHQvLyBHZXQgbWV0aG9kIGZyb20gdXRpbHMsIGlmIG1ldGhvZCBpcyBzdHJpbmdcblx0XHRpZihVdGlscy5pc1N0cmluZyhtZXRob2QpKSB7XG5cdFx0XHQvLyBHZXQgZnVuY3Rpb24gZnJvbSB1dGlsc1xuXHRcdFx0dmFyIHV0aWxNZXRob2QgPSBVdGlsc1ttZXRob2RdO1xuXG5cdFx0XHQvLyBJZiBubyBtZXNzYWdlIGlzIHByb3ZpZGVkLCB0cnkgdG8gZmluZCBvbmUgZnJvbSB2YWxpZGF0aW9uTWVzc2FnZXNcblx0XHRcdGlmICghVXRpbHMuaXNTdHJpbmcobWVzc2FnZSkpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFZhbGlkYXRpb24uZ2V0VmFsaWRhdGlvbk1lc3NhZ2UobWV0aG9kKTtcblx0XHRcdFx0aWYobWVzc2FnZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0bWVzc2FnZSA9IFwiTXVzdCBiZSBcIiArIG1ldGhvZCArIFwiLlwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZighVXRpbHMuaXNGdW5jdGlvbih1dGlsTWV0aG9kKSkge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJEb24ndCBrbm93IGhvdyB0byB2YWxpZGF0ZSAnXCIrbWV0aG9kK1wiJ1wiO1xuXHRcdFx0XHRtZXRob2QgPSBuZXcgVmFsaWRhdGlvbi5WYWxpZGl0eShuYW1lLCB2YWx1ZSwgZmFsc2UsIG1lc3NhZ2UpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bWV0aG9kID0gdXRpbE1ldGhvZDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBBcHBseSB2YWxpZGF0aW9uIG1ldGhvZFxuXHRcdGlmKFV0aWxzLmlzRnVuY3Rpb24obWV0aG9kKSkge1xuXHRcdFx0dmFsaWQgPSBtZXRob2QuYXBwbHkoVmFsaWRhdGlvbiwgW3ZhbHVlXSk7XG5cdFx0Ly8gVmFsaWRpdHkgb2JqZWN0XG5cdFx0fSBlbHNlIGlmIChtZXRob2QgaW5zdGFuY2VvZiBWYWxpZGF0aW9uLlZhbGlkaXR5KSB7XG5cdFx0XHR2YWxpZCA9IG1ldGhvZDtcblx0XHQvLyB2YWxpZGF0ZUFycmF5XG5cdFx0fSBlbHNlIGlmIChVdGlscy5pc0FycmF5KG1ldGhvZCkpIHtcblx0XHRcdHZhbGlkID0gVmFsaWRhdGlvbi52YWxpZGF0ZUFycmF5KG5hbWUsIHZhbHVlLCBtZXRob2QsIHVuZGVmaW5lZCwgXy5nZXQob3B0aW9ucywgJ2FycmF5JyksIGZhbHNlKTtcblx0XHQvLyB2YWxpZGF0ZU9iamVjdFxuXHRcdH0gZWxzZSBpZiAoVXRpbHMuaXNPYmplY3QobWV0aG9kKSkge1xuXHRcdFx0dmFsaWQgPSBWYWxpZGF0aW9uLnZhbGlkYXRlT2JqZWN0KG5hbWUsIHZhbHVlLCBtZXRob2QsIHVuZGVmaW5lZCwgZmFsc2UpO1xuXHRcdC8vIEJvb2xlYW4gdmFsaWRhdGlvblxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWxpZCA9IG1ldGhvZCA9PT0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZighKHZhbGlkIGluc3RhbmNlb2YgVmFsaWRhdGlvbi5WYWxpZGl0eSkpIHtcblx0XHRcdHZhbGlkID0gbmV3IFZhbGlkYXRpb24uVmFsaWRpdHkobmFtZSwgdmFsdWUsIHZhbGlkKTtcblx0XHR9XG5cblx0XHQvLyBGZWVkYmFja1xuXHRcdGlmKCF2YWxpZC5pc1ZhbGlkKCkpIHtcblx0XHRcdGlmKG1lc3NhZ2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRtZXNzYWdlID0gJ0ludmFsaWQuJztcblx0XHRcdH1cblx0XHRcdGlmKFV0aWxzLmlzT2JqZWN0KG9wdGlvbnMpICYmICdkZWZhdWx0JyBpbiBvcHRpb25zKSB7XG5cdFx0XHRcdGlmKFV0aWxzLmlzRnVuY3Rpb24ob3B0aW9ucy5kZWZhdWx0KSkge1xuXHRcdFx0XHRcdHZhciBkZWYgPSBvcHRpb25zLmRlZmF1bHQuYXBwbHkoVmFsaWRhdGlvbiwgW3ZhbHVlXSk7XG5cdFx0XHRcdFx0dmFsaWQuc2V0Q29ycmVjdGVkVmFsdWUoZGVmKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YWxpZC5zZXRDb3JyZWN0ZWRWYWx1ZShvcHRpb25zLmRlZmF1bHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIHdhcm4gPSBVdGlscy5nZXQob3B0aW9ucywgJ3dhcm4nKTtcblx0XHRcdFx0dmFyIF9fd2FybiA9IFV0aWxzLmlzRnVuY3Rpb24od2FybikgPyB3YXJuIDogZnVuY3Rpb24oKSB7IHJldHVybiB3YXJuICE9PSBmYWxzZTsgfTtcblx0XHRcdFx0aWYoX193YXJuKHZhbHVlKSAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRpZih2YWxpZC5nZXRNZXNzYWdlKCkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0dmFsaWQuc2V0TWVzc2FnZShtZXNzYWdlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFsaWQuc2V0TWVzc2FnZSh1bmRlZmluZWQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhbGlkLnNldFZhbGlkKHRydWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsaWQuc2V0VmFsaWQoZmFsc2UpO1xuXHRcdFx0XHRpZih2YWxpZC5nZXRNZXNzYWdlKCkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHZhbGlkLnNldE1lc3NhZ2UobWVzc2FnZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYoIXZhbGlkLmlzQ29ycmVjdGVkKCkpIHtcblx0XHRcdHZhbGlkLnNldE1lc3NhZ2UodW5kZWZpbmVkKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsaWQ7XG5cdH07XG5cblx0LyoqXG5cdCAqIFZhbGlkYXRlcyBhIHNldCBvZiB2YWx1ZXMsIGJhc2VkIG9uIHRoZSBnaXZlbiBwYXJhbWV0ZXJzLlxuXHQgKlxuXHQgKiBFeGFtcGxlIHVzYWdlOiBWYWxpZGF0aW9uLnZhbGlkYXRlKFwibXlWYWxpZGF0aW9uXCIsIHthOiBbXCJhcHBsZVwiLCBcImlzU3RyaW5nXCJdfSwgXCJWYWxpZGF0aW9uIGZhaWxlZC5cIik7XG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHRcdFx0IFRoZSBuYW1lIGJ5IHdoaWNoIHRvIGlkZW50aWZ5IHRoaXMgdmFsaWRhdGlvbi5cblx0ICogQHBhcmFtIHtvYmplY3R9IGNoZWNrc1x0XHQgICBBbiBvYmplY3Qgb2YgY2hlY2tzLiBXaGVyZSB0aGUga2V5cyBhcmUgdGhlIG5hbWVzIG9mIHRoZSB2YXJpYWJsZXMgYW5kIHRoZVxuXHQgKlx0XHRcdFx0XHRcdFx0XHQgIHZhbHVlcyBhcnJheXMgb2YgcGFyYW1ldGVycyB0aGF0IGFyZSBwYXNzZWQgdG8ge0BsaW5rIFZhbGlkYXRpb24udmFsaWRhdGVPbmV9LCBwcmVwZW5kZWQgYnlcblx0ICpcdFx0XHRcdFx0XHRcdFx0ICA8bWU+IGFuZCA8Y2hlY2tzPi5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFtjb25zZXF1ZW5jZV1cdFtvcHRpb25hbF0gQSBtZXNzYWdlIHRvIGJlIGdpdmVuIGlmIHZhbGlkYXRpb24gZmFpbHMuXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja11cdCBbb3B0aW9uYWxdIENhbGxiYWNrIGluc3RlYWQgb2YgZGlyZWN0IGVycm9yIG1lc3NhZ2VzLiBDYWxsYmFjayBpcyBjYWxsZWQgd2l0aCBhIFZhbGlkaXR5IG9iamVjdCBhcyBhcmd1bWVudC5cblx0ICpcblx0ICogQHJldHVybnMge1ZhbGlkYXRpb24uVmFsaWRpdHl9XHRcdElmIHZhbGlkYXRpb24gd2FzIHBhc3NlZCwgYW4gb2JqZWN0IHdpbGwgYmUgcmV0dXJuZWQgY29udGFpbmluZyBhIHRoZSBrZXlzXG5cdCAqXHRcdFx0XHRcdFx0XHRcdCAgb2YgdGhlIGdpdmVuIGNoZWNrcyBvYmplY3QsIHdpdGggdGhlaXIgdmFsaWRhdGVkIHZhbHVlcy5cblx0ICpcdFx0XHRcdFx0XHRcdFx0ICBJZiBhbnkgb2YgdGhlIHZhbGlkYXRpb25zIGZhaWxlZCwgRkFMU0Ugd2lsbCBiZSByZXR1cm5lZC5cblx0ICovXG5cdFZhbGlkYXRpb24udmFsaWRhdGUgPSBmdW5jdGlvbihuYW1lLCBjaGVja3MsIGNvbnNlcXVlbmNlLCBjYWxsYmFjaykge1xuXHRcdC8vIENhbiBhbHNvIGJlIGNhbGxlZCB3aXRob3V0IGEgbmFtZVxuXHRcdGlmKFV0aWxzLmlzT2JqZWN0KG5hbWUpKSB7XG5cdFx0XHRjYWxsYmFjayA9IGNvbnNlcXVlbmNlO1xuXHRcdFx0Y29uc2VxdWVuY2UgPSBjaGVja3M7XG5cdFx0XHRjaGVja3MgPSBuYW1lO1xuXHRcdFx0bmFtZSA9ICdWYWxpZGF0aW9uJztcblx0XHR9XG5cblx0XHR2YXIgdmFsaWRpdHlNYXAgPSB7fTtcblx0XHR2YXIgaW5wdXRNYXAgPSB7fTtcblx0XHRjYWxsYmFjayA9IFZhbGlkYXRpb24uZW5zdXJlKGNhbGxiYWNrLCBVdGlscy5pc0Z1bmN0aW9uLCBjYWxsYmFjayA9PT0gZmFsc2UgPyBmdW5jdGlvbigpe30gOiBWYWxpZGF0aW9uLkxvZ1ZhbGlkaXR5KTtcblxuXHRcdGlmKGNvbnNlcXVlbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbnNlcXVlbmNlID0gJyc7XG5cdFx0fVxuXG5cdFx0aWYoVXRpbHMuaXNPYmplY3QoY2hlY2tzKSkge1xuXHRcdFx0Zm9yKHZhciBpIGluIGNoZWNrcykge1xuXHRcdFx0XHRjaGVja3NbaV0udW5zaGlmdChpKTtcblx0XHRcdFx0dmFsaWRpdHlNYXBbaV0gPSBWYWxpZGF0aW9uLnZhbGlkYXRlT25lLmFwcGx5KFZhbGlkYXRpb24sIGNoZWNrc1tpXSk7XG5cdFx0XHRcdGlucHV0TWFwW2ldID0gY2hlY2tzW2ldWzFdO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgaW52YWxpZENoZWNrc01lc3NhZ2UgPSBcIlBhcmFtZXRlciAnY2hlY2tzJyBtdXN0IGJlIG9iamVjdC4gXCIgKyBjb25zZXF1ZW5jZTtcblx0XHRcdGNhbGxiYWNrKG5ldyBWYWxpZGF0aW9uLlZhbGlkaXR5KG5hbWUsIGNoZWNrcywgaW52YWxpZENoZWNrc01lc3NhZ2UpKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBHbyB0aHJvdWdoIHJlc3VsdHNcblx0XHR2YXIgaXNWYWxpZCA9IHRydWU7XG5cdFx0Zm9yKHZhciBpIGluIHZhbGlkaXR5TWFwKSB7XG5cdFx0XHR2YXIgdmFsaWRpdHkgPSB2YWxpZGl0eU1hcFtpXTtcblx0XHRcdGlmICghdmFsaWRpdHkuaXNWYWxpZCgpKSB7XG5cdFx0XHRcdGlzVmFsaWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDcmVhdGUgVmFsaWRpdHkgb2JqZWN0XG5cdFx0dmFyIHZhbGlkID0gbmV3IFZhbGlkYXRpb24uVmFsaWRpdHkoe1xuXHRcdFx0dHlwZTogJ211bHRpcGxlJyxcblx0XHRcdG5hbWU6IG5hbWUsXG5cdFx0XHRpbnB1dDogaW5wdXRNYXAsXG5cdFx0XHR2YWxpZDogaXNWYWxpZCxcblx0XHRcdHZhbGlkaXR5TWFwOiB2YWxpZGl0eU1hcFxuXHRcdH0pO1xuXHRcdGlmKCFpc1ZhbGlkKSB7XG5cdFx0XHR2YWxpZC5zZXRNZXNzYWdlKFwiVmFsaWRhdGlvbiBmYWlsZWQgZm9yICdcIiArIG5hbWUgKyBcIicuXCIpO1xuXHRcdH1cblx0XHRjYWxsYmFjayh2YWxpZCk7XG5cdFx0cmV0dXJuIHZhbGlkO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBWYWxpZGF0ZXMgYW4gb2JqZWN0LCB0aGUgc2FtZSB3YXkgLnZhbGlkYXRlIHZhbGlkYXRlcyBpc29sYXRlZCB2YWx1ZXMuXG5cdCAqXG5cdCAqIEV4YW1wbGUgdXNhZ2U6IFZhbGlkYXRpb24udmFsaWRhdGVPYmplY3QoJ215T2JqZWN0Jywge2E6ICdhcHBsZSd9LCB7YTogWydpc1N0cmluZyddfSkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHRcdFx0IFRoZSBuYW1lIG9mIHRoZSB2YWxpZGF0aW9uLlxuXHQgKiBAcGFyYW0ge29iamVjdH0gb2JqXHRcdFx0ICBUaGUgb2JqZWN0IHRvIGNoZWNrLlxuXHQgKiBAcGFyYW0ge29iamVjdH0gY2hlY2tzXHRcdCAgIEFuIG9iamVjdCB3aXRoIGZvciBlYWNoIGtleSB0byBjaGVjayBhbiBhcnJheSBvZiBhcmd1bWVudHMgW21ldGhvZCwgbWVzc2FnZSwgb3B0aW9uc11cblx0ICpcdFx0XHRcdFx0XHRcdFx0ICB0byBwYXNzIHRvIHRoZSB2YWxpZGF0ZU9uZSBmdW5jdGlvbi5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFttZXNzYWdlXVx0XHRcdE1lc3NhZ2UgdG8gYWRkIHRvIFZhbGlkaXR5T2JqZWN0IGluIGNhc2Ugb2YgaW52YWxpZCBvYmplY3QuXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja11cdCBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBWYWxpZGl0eSBvYmplY3QgYXMgYXJndW1lbnQuXG5cdCAqXG5cdCAqIEByZXR1cm4ge1ZhbGlkYXRpb24uVmFsaWRpdHl9XG5cdCAqL1xuXHRWYWxpZGF0aW9uLnZhbGlkYXRlT2JqZWN0ID0gZnVuY3Rpb24obmFtZSwgb2JqLCBjaGVja3MsIG1lc3NhZ2UsIGNhbGxiYWNrKSB7XG5cdFx0aWYoVXRpbHMuaXNPYmplY3QobmFtZSkpIHtcblx0XHRcdGNhbGxiYWNrID0gbWVzc2FnZTtcblx0XHRcdG1lc3NhZ2UgPSBjaGVja3M7XG5cdFx0XHRjaGVja3MgPSBvYmo7XG5cdFx0XHRvYmogPSBuYW1lO1xuXHRcdFx0bmFtZSA9ICdPYmplY3QnO1xuXHRcdH1cblx0XHRpZihVdGlscy5pc0Z1bmN0aW9uKG1lc3NhZ2UpKSB7XG5cdFx0XHRjYWxsYmFjayA9IG1lc3NhZ2U7XG5cdFx0XHRtZXNzYWdlID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0XHRjYWxsYmFjayA9IFZhbGlkYXRpb24uZW5zdXJlKGNhbGxiYWNrLCBVdGlscy5pc0Z1bmN0aW9uLCBjYWxsYmFjayA9PT0gZmFsc2UgPyBmdW5jdGlvbigpe30gOiBWYWxpZGF0aW9uLkxvZ1ZhbGlkaXR5KTtcblxuXHRcdGlmKCFVdGlscy5pc09iamVjdChjaGVja3MpKSB7XG5cdFx0XHR2YXIgaW52YWxpZCA9IG5ldyBWYWxpZGF0aW9uLlZhbGlkaXR5KG5hbWUsIGNoZWNrcywgZmFsc2UsIFwiSW52YWxpZCAnY2hlY2tzJyBwYXJhbWV0ZXIuIE11c3QgYmUgb2JqZWN0LlwiKTtcblx0XHRcdGNhbGxiYWNrKGludmFsaWQpO1xuXHRcdFx0cmV0dXJuIGludmFsaWQ7XG5cdFx0fVxuXG5cdFx0aWYoIVV0aWxzLmlzT2JqZWN0KG9iaikpIHtcblx0XHRcdHZhciBpbnZhbGlkID0gbmV3IFZhbGlkYXRpb24uVmFsaWRpdHkobmFtZSwgY2hlY2tzLCBmYWxzZSwgXCJJbnZhbGlkIG9iamVjdC5cIik7XG5cdFx0XHRjYWxsYmFjayhpbnZhbGlkKTtcblx0XHRcdHJldHVybiBpbnZhbGlkO1xuXHRcdH1cblxuXHRcdHZhciB2YWxpZGl0eU1hcCA9IHt9O1xuXHRcdGZvcih2YXIgcHJvcCBpbiBjaGVja3MpIHtcblx0XHRcdHZhciBhcmdzID0gVXRpbHMuY2xvbmUoY2hlY2tzW3Byb3BdKTtcblx0XHRcdHZhciBpc0FycmF5ID0gVXRpbHMuaXNBcnJheShhcmdzKTtcblxuXHRcdFx0Ly8gTGF6eSwgc2luZ2xlLXBhcmFtZXRlciB2YWxpZGF0aW9uIChzdHJpbmcsIGJvb2xlYW4gb3IgZnVuY3Rpb24pXG5cdFx0XHRpZihVdGlscy5pc1N0cmluZyhhcmdzKSB8fCBVdGlscy5pc0Jvb2xlYW4oYXJncykgfHwgVXRpbHMuaXNGdW5jdGlvbihhcmdzKSkge1xuXHRcdFx0XHRhcmdzID0gW2FyZ3NdO1xuXHRcdFx0Ly8gSW52YWxpZCB2YWxpZGF0aW9uXG5cdFx0XHR9IGVsc2UgaWYgKCFpc0FycmF5KSB7XG5cdFx0XHRcdGFyZ3MgPSBbZmFsc2UsIFwiSW52YWxpZCB2YWxpZGF0aW9uIGRlZmluaXRpb24uXCJdXG5cdFx0XHR9XG5cblx0XHRcdGFyZ3MudW5zaGlmdChvYmpbcHJvcF0pO1xuXHRcdFx0YXJncy51bnNoaWZ0KHByb3ApO1xuXG5cdFx0XHR2YWxpZGl0eU1hcFtwcm9wXSA9IFZhbGlkYXRpb24udmFsaWRhdGVPbmUuYXBwbHkoVmFsaWRhdGlvbiwgYXJncyk7XG5cdFx0fVxuXG5cdFx0dmFyIHZhbGlkID0gbmV3IFZhbGlkYXRpb24uVmFsaWRpdHkoe1xuXHRcdFx0bmFtZTogbmFtZSxcblx0XHRcdGlucHV0OiBvYmosXG5cdFx0XHR2YWxpZGl0eU1hcDogdmFsaWRpdHlNYXBcblx0XHR9KTtcblx0XHR2YXIgY29ycmVjdGVkID0gdW5kZWZpbmVkO1xuXHRcdGlmKG1lc3NhZ2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0bWVzc2FnZSA9IFwiSW52YWxpZCBvYmplY3QgZm9yICdcIiArIG5hbWUgKyBcIicuXCI7XG5cdFx0fVxuXHRcdHZhciBoYXNNZXNzYWdlID0gZmFsc2U7XG5cdFx0Zm9yKHZhciBwcm9wIGluIHZhbGlkaXR5TWFwKSB7XG5cdFx0XHRpZighdmFsaWRpdHlNYXBbcHJvcF0uaXNWYWxpZCgpKSB7XG5cdFx0XHRcdHZhbGlkLnNldFZhbGlkKGZhbHNlKTtcblx0XHRcdFx0dmFsaWQuc2V0TWVzc2FnZShtZXNzYWdlKTtcblx0XHRcdH1cblx0XHRcdGlmKHZhbGlkaXR5TWFwW3Byb3BdLmlzQ29ycmVjdGVkKCkpIHtcblx0XHRcdFx0aWYoY29ycmVjdGVkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRjb3JyZWN0ZWQgPSBVdGlscy5jbG9uZShvYmopO1xuXHRcdFx0XHRcdHZhbGlkLnNldENvcnJlY3RlZFZhbHVlKGNvcnJlY3RlZCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29ycmVjdGVkW3Byb3BdID0gdmFsaWRpdHlNYXBbcHJvcF0uZ2V0VmFsdWUoKTtcblx0XHRcdH1cblx0XHRcdGlmKHZhbGlkaXR5TWFwW3Byb3BdLmdldE1lc3NhZ2UoKSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGhhc01lc3NhZ2UgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihoYXNNZXNzYWdlKSB7XG5cdFx0XHR2YWxpZC5zZXRNZXNzYWdlKG1lc3NhZ2UpO1xuXHRcdH1cblx0XHR2YWxpZC5zZXRUeXBlKCdvYmplY3QnKTtcblxuXHRcdGNhbGxiYWNrKHZhbGlkKTtcblx0XHRyZXR1cm4gdmFsaWQ7XG5cdH07XG5cblx0LyoqXG5cdCAqIFZhbGlkYXRlcyBhbiBhcnJheSBvZiB2YWx1ZXMsIHVzaW5nIHRoZSBnaXZlbiB2YWxpZGF0aW9uIGZ1bmN0aW9uLlxuXHQgKlxuXHQgKiBFeGFtcGxlIHVzYWdlOiBWYWxpZGF0aW9uLnZhbGlkYXRlQXJyYXkoXCJteUFycmF5XCIsIFsnYXBwbGUnLCAnYmFuYW5hJywgMTIzXSwgW1wiaXNTdHJpbmdcIiwge2RlZmF1bHQ6ICdmcnVpdCd9XSk7XG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGFycmF5XHRcdFx0XHQgVGhlIGFycmF5IHRvIHZhbGlkYXRlLlxuXHQgKiBAcGFyYW0ge0FycmF5fHN0cmluZ3xmdW5jdGlvbn0gaXRlbVZhbGlkYXRpb25cdFx0VGhlIHZhbGlkYXRpb24gYXJndW1lbnRzIFttZXRob2QsIG1lc3NhZ2UsIG9wdGlvbnNdXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5taW5MZW5ndGg9MF1cdFx0W29wdGlvbmFsXSBUaGUgbWluaW11bSBsZW5ndGggb2YgdGhlIGFycmF5LlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4TGVuZ3RoPUluZmluaXR5XSBbb3B0aW9uYWxdIFRoZSBtYXhpbXVtIGxlbmd0aCBvZiB0aGUgYXJyYXkuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5pdGVtVHlwZT0nSXRlbSddXHRbb3B0aW9uYWxdIFdoYXQgdG8gY2FsbCBhbiBpdGVtLlxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdXHRcdCBbb3B0aW9uYWxdIENhbGxiYWNrIGluc3RlYWQgb2YgZGlyZWN0IGVycm9yIG1lc3NhZ2VzLiBDYWxsYmFjayBpcyBjYWxsZWQgd2l0aCBhIFZhbGlkaXR5IG9iamVjdCBhcyBhcmd1bWVudC5cblx0ICovXG5cdFZhbGlkYXRpb24udmFsaWRhdGVBcnJheSA9IGZ1bmN0aW9uKG5hbWUsIGFycmF5LCBpdGVtVmFsaWRhdGlvbiwgbWVzc2FnZSwgb3B0aW9ucywgY2FsbGJhY2spIHtcblx0XHRpZihVdGlscy5pc0FycmF5KG5hbWUpKSB7XG5cdFx0XHRjYWxsYmFjayA9IG9wdGlvbnM7XG5cdFx0XHRvcHRpb25zID0gbWVzc2FnZTtcblx0XHRcdG1lc3NhZ2UgPSBpdGVtVmFsaWRhdGlvbjtcblx0XHRcdGl0ZW1WYWxpZGF0aW9uID0gYXJyYXk7XG5cdFx0XHRhcnJheSA9IG5hbWU7XG5cdFx0XHRuYW1lID0gJ0FycmF5Jztcblx0XHR9XG5cdFx0aWYoVXRpbHMuaXNPYmplY3QobWVzc2FnZSkpe1xuXHRcdFx0Y2FsbGJhY2sgPSBvcHRpb25zO1xuXHRcdFx0b3B0aW9ucyA9IG1lc3NhZ2U7XG5cdFx0fVxuXHRcdHZhciBtaW5MZW5ndGggPSBfLmdldChvcHRpb25zLCAnbWluTGVuZ3RoJyk7XG5cdFx0dmFyIG1heExlbmd0aCA9IF8uZ2V0KG9wdGlvbnMsICdtYXhMZW5ndGgnKTtcblx0XHR2YXIgaXRlbVR5cGUgPSBfLmdldChvcHRpb25zLCAnaXRlbVR5cGUnKTtcblxuXHRcdGNhbGxiYWNrID0gVmFsaWRhdGlvbi5lbnN1cmUoY2FsbGJhY2ssIFV0aWxzLmlzRnVuY3Rpb24sIGNhbGxiYWNrID09PSBmYWxzZSA/IGZ1bmN0aW9uKCl7fSA6IFZhbGlkYXRpb24uTG9nVmFsaWRpdHkpO1xuXG5cdFx0aWYoIVV0aWxzLmlzQXJyYXkoYXJyYXkpKSB7XG5cdFx0XHR2YXIgaW52YWxpZCA9IG5ldyBWYWxpZGF0aW9uLlZhbGlkaXR5KHtuYW1lOiBuYW1lLCBpbnB1dDogYXJyYXksIHZhbGlkOiBmYWxzZSwgbWVzc2FnZTogXCJNdXN0IGJlIGFuIGFycmF5XCIsIHR5cGU6ICdhcnJheSd9KTtcblx0XHRcdGNhbGxiYWNrKGludmFsaWQpO1xuXHRcdFx0cmV0dXJuIGludmFsaWQ7XG5cdFx0fVxuXHRcdGlmKCFVdGlscy5pc0FycmF5KGl0ZW1WYWxpZGF0aW9uKSkge1xuXHRcdFx0aXRlbVZhbGlkYXRpb24gPSBbaXRlbVZhbGlkYXRpb25dO1xuXHRcdH1cblx0XHR2YXIgdmFsaWQgPSBuZXcgVmFsaWRhdGlvbi5WYWxpZGl0eShuYW1lLCBhcnJheSwgdHJ1ZSk7XG5cblx0XHRpZighVXRpbHMuaXNOdW1iZXIobWluTGVuZ3RoKSkgbWluTGVuZ3RoID0gMDtcblx0XHRpZighVXRpbHMuaXNOdW1iZXIobWF4TGVuZ3RoKSkgbWF4TGVuZ3RoID0gSW5maW5pdHk7XG5cdFx0aWYoIVV0aWxzLmlzU3RyaW5nKGl0ZW1UeXBlKSkgaXRlbVR5cGUgPSAnSXRlbSc7XG5cblx0XHR2YXIgaXRlbVBsdXJhbCA9IFV0aWxzLnBsdXJhbChpdGVtVHlwZSk7XG5cblx0XHRpZihhcnJheS5sZW5ndGggPCBtaW5MZW5ndGgpIHtcblx0XHRcdHZhciBpbnZhbGlkMiA9IG5ldyBWYWxpZGF0aW9uLlZhbGlkaXR5KHtcblx0XHRcdFx0bmFtZTogbmFtZSxcblx0XHRcdFx0aW5wdXQ6IGFycmF5LFxuXHRcdFx0XHR2YWxpZDogZmFsc2UsXG5cdFx0XHRcdHR5cGU6ICdhcnJheScsXG5cdFx0XHRcdG1lc3NhZ2U6IG5hbWUgKyBcIiBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgXCIgKyBtaW5MZW5ndGggKyBcIiBcIitpdGVtUGx1cmFsLnRvTG93ZXJDYXNlKClcblx0XHRcdH0pO1xuXHRcdFx0Y2FsbGJhY2soaW52YWxpZDIpO1xuXHRcdFx0cmV0dXJuIGludmFsaWQyO1xuXHRcdH1cblx0XHRpZihhcnJheS5sZW5ndGggPiBtYXhMZW5ndGgpIHtcblx0XHRcdHZhciBpbnZhbGlkMyA9IG5ldyBWYWxpZGF0aW9uLlZhbGlkaXR5KHtcblx0XHRcdFx0bmFtZTogbmFtZSxcblx0XHRcdFx0aW5wdXQ6IGFycmF5LFxuXHRcdFx0XHR2YWxpZDogZmFsc2UsXG5cdFx0XHRcdHR5cGU6ICdhcnJheScsXG5cdFx0XHRcdG1lc3NhZ2U6IG5hbWUgKyBcIiBtYXkgY29udGFpbiBhdCBtb3N0IFwiICsgbWF4TGVuZ3RoICsgXCIgXCIraXRlbVBsdXJhbC50b0xvd2VyQ2FzZSgpXG5cdFx0XHR9KTtcblx0XHRcdGNhbGxiYWNrKGludmFsaWQzKTtcblx0XHRcdHJldHVybiBpbnZhbGlkMztcblx0XHR9XG5cblx0XHR2YXIgaXRlbSA9IG51bGwsXG5cdFx0XHRpdGVtTmFtZSA9IG51bGwsXG5cdFx0XHR2YWxpZGF0aW9uQXJncyA9IG51bGwsXG5cdFx0XHR2YWxpZGl0eU1hcCA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aXRlbSA9IGFycmF5W2ldO1xuXHRcdFx0aXRlbU5hbWUgPSBVdGlscy5pc1N0cmluZyhpdGVtKSA/IGl0ZW0gOiBpO1xuXG5cdFx0XHR2YWxpZGF0aW9uQXJncyA9IFV0aWxzLmNsb25lKGl0ZW1WYWxpZGF0aW9uKTtcblx0XHRcdHZhbGlkYXRpb25BcmdzLnVuc2hpZnQoaXRlbSk7XG5cdFx0XHR2YWxpZGF0aW9uQXJncy51bnNoaWZ0KGl0ZW1OYW1lKTtcblxuXHRcdFx0dmFsaWRpdHlNYXBbaV0gPSBWYWxpZGF0aW9uLnZhbGlkYXRlT25lLmFwcGx5KFZhbGlkYXRpb24sIHZhbGlkYXRpb25BcmdzKTtcblx0XHR9XG5cblx0XHR2YXIgY29ycmVjdGVkID0gdW5kZWZpbmVkO1xuXHRcdHZhciBpbnZhbGlkTWVzc2FnZSA9IFwiSW52YWxpZCBcIiArIGl0ZW1QbHVyYWwudG9Mb3dlckNhc2UoKSArIFwiIGluIFwiICsgbmFtZSArIFwiIGFycmF5LlwiO1xuXHRcdHZhciBoYXNNZXNzYWdlID0gZmFsc2U7XG5cdFx0Zm9yKHZhciBpIGluIHZhbGlkaXR5TWFwKSB7XG5cdFx0XHRpZighdmFsaWRpdHlNYXBbaV0uaXNWYWxpZCgpKSB7XG5cdFx0XHRcdHZhbGlkLnNldFZhbGlkKGZhbHNlKTtcblx0XHRcdFx0dmFsaWQuc2V0TWVzc2FnZShpbnZhbGlkTWVzc2FnZSk7XG5cdFx0XHR9XG5cdFx0XHRpZih2YWxpZGl0eU1hcFtpXS5pc0NvcnJlY3RlZCgpKSB7XG5cdFx0XHRcdGlmKGNvcnJlY3RlZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0Y29ycmVjdGVkID0gVXRpbHMuY2xvbmUoYXJyYXkpO1xuXHRcdFx0XHRcdHZhbGlkLnNldENvcnJlY3RlZFZhbHVlKGNvcnJlY3RlZCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29ycmVjdGVkW2ldID0gdmFsaWRpdHlNYXBbaV0uZ2V0VmFsdWUoKTtcblx0XHRcdH1cblx0XHRcdGlmKHZhbGlkaXR5TWFwW2ldLmdldE1lc3NhZ2UoKSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGhhc01lc3NhZ2UgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihoYXNNZXNzYWdlKSB7XG5cdFx0XHR2YWxpZC5zZXRNZXNzYWdlKGludmFsaWRNZXNzYWdlKTtcblx0XHR9XG5cblx0XHR2YWxpZC5zZXRWYWxpZGl0eU1hcCh2YWxpZGl0eU1hcCk7XG5cdFx0dmFsaWQuc2V0VHlwZSgnYXJyYXknKTtcblxuXHRcdGNhbGxiYWNrKHZhbGlkKTtcblx0XHRyZXR1cm4gdmFsaWQ7XG5cdH07XG5cblx0LyoqXG5cdCAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiB0aGUgZ2l2ZW4gY2xhc3MuXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNoZWNrQ2xhc3NcdCBUaGUgY2xhc3MgdGhlIHNlY29uZCBhcmd1bWVudCBzaG91bGQgYmUgYW4gaW5zdGFuY2Ugb2YuXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbYXJnXVx0XHRcdFRoZSBhcmd1bWVudCB0byBjaGVjay4gSWYgbm90IHByb3ZpZGVkLCB0aGUgZnVuY3Rpb24gd2lsbCByZXR1cm4gYSBmdW5jdGlvblxuXHQgKlx0XHRcdFx0XHRcdFx0XHQgIHRoYXQgcmVxdWlyZXMgYSBzaW5nbGUgYXJndW1lbnQgdG8gY2hlY2sgaWYgdGhhdCBpcyBhbiBpbnN0YW5jZSBvZiB0aGUgZ2l2ZW4gY2xhc3MuXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0VmFsaWRhdGlvbi5pbnN0YW5jZW9mID0gZnVuY3Rpb24oY2hlY2tDbGFzcywgYXJnKSB7XG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbihmdXR1cmVBcmcpIHtcblx0XHRcdFx0cmV0dXJuIFZhbGlkYXRpb24uaW5zdGFuY2VvZihjaGVja0NsYXNzLCBmdXR1cmVBcmcpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gVXRpbHMuaXNPYmplY3QoY2hlY2tDbGFzcykgJiYgYXJnIGluc3RhbmNlb2YgY2hlY2tDbGFzcztcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBhcmd1bWVudCBpcyBkZWZpbmVkLCBhbmQgbm90IG51bGwuXG5cdCAqIEBwYXJhbSB2XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0VmFsaWRhdGlvbi5kZWYgPSBmdW5jdGlvbiAodikge1xuXHRcdHJldHVybiAoKHYgIT09IG51bGwpICYmICh2ICE9PSB1bmRlZmluZWQpKTtcblx0fTtcblxuXHRWYWxpZGF0aW9uLmVuc3VyZSA9IGZ1bmN0aW9uICh2YXJpYWJsZSwgZXZhbEZ1bmMsIGRlZmF1bHRWYWx1ZSwgbWVzc2FnZSkge1xuXHRcdHZhciBzdXJlID0gdmFyaWFibGU7XG5cdFx0aWYgKCFldmFsRnVuYyh2YXJpYWJsZSkpIHtcblx0XHRcdHN1cmUgPSBkZWZhdWx0VmFsdWU7XG5cdFx0XHRpZiAoVmFsaWRhdGlvbi5kZWYobWVzc2FnZSkpIHtcblx0XHRcdFx0VXRpbHMuTG9nLmVycm9yKFwiVmFsaWRhdGlvbjo6ZW5zdXJlXCIsIG1lc3NhZ2UsIHZhcmlhYmxlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gc3VyZTtcblx0fTtcblxuXHRWYWxpZGF0aW9uLmVuc3VyZVBhdGggPSBmdW5jdGlvbih2YXJpYWJsZSwgcGF0aCwgZXZhbEZ1bmMsIGRlZmF1bHRWYWx1ZSwgbWVzc2FnZSkge1xuXHRcdGlmKCFfLmlzT2JqZWN0KHZhcmlhYmxlKSkge1xuXHRcdFx0dmFyaWFibGUgPSB7fTtcblx0XHR9XG5cdFx0aWYoXy5pc0FycmF5KHBhdGgpKSB7XG5cdFx0XHRfLmZvckVhY2gocGF0aCwgZnVuY3Rpb24ocCkge1xuXHRcdFx0XHR2YXJpYWJsZSA9IFZhbGlkYXRpb24uZW5zdXJlUGF0aCh2YXJpYWJsZSwgcCwgZXZhbEZ1bmMsIGRlZmF1bHRWYWx1ZSwgcCArIFwiOiBcIiArIG1lc3NhZ2UpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gdmFyaWFibGU7XG5cdFx0fVxuXG5cdFx0dmFyIGNoZWNrID0gXy5nZXQodmFyaWFibGUsIHBhdGgpO1xuXHRcdGlmICghZXZhbEZ1bmMoY2hlY2spKSB7XG5cdFx0XHRfLnNldCh2YXJpYWJsZSwgcGF0aCwgZGVmYXVsdFZhbHVlKTtcblx0XHRcdGlmIChWYWxpZGF0aW9uLmRlZihtZXNzYWdlKSkge1xuXHRcdFx0XHRWYWxpZGF0aW9uLkxvZy5lcnJvcihtZXNzYWdlLCB2YXJpYWJsZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhcmlhYmxlO1xuXHR9O1xuXG5cdFZhbGlkYXRpb24uaXNTdHJpbmdPck51bWJlciA9IGZ1bmN0aW9uKHZhcmlhYmxlKSB7XG5cdFx0cmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhcmlhYmxlKSkgfHwgXy5pc1N0cmluZyh2YXJpYWJsZSk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMuVmFsaWRhdGlvbiA9IFZhbGlkYXRpb247XG59KSgpOyJdfQ==
