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
		// Can also be called without a name
		if (Utils.isObject(name)) {
			callback = consequence;
			consequence = checks;
			checks = name;
			name = 'Validation';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsInNyYy9saWIvbG9kYXNoLm1pbi5qcyIsInNyYy91dGlscy1jb3JlLmpzIiwic3JjL3V0aWxzL2RvbS5qcyIsInNyYy91dGlscy9lcnJvci5qcyIsInNyYy91dGlscy9zdHJpbmcuanMiLCJzcmMvdXRpbHMvdmFsaWRhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLENBQUMsWUFBVTtBQUNQLFFBQUksU0FBUyxPQUFPLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsT0FBTyxPQUFPLE9BQWQsS0FBMEIsV0FBeEU7O0FBRUEsUUFBSSxRQUFRLFFBQVEsa0JBQVIsRUFBNEIsS0FBeEM7O0FBRUEsUUFBSSxTQUFTLEVBQWI7QUFDQSxXQUFPLElBQVAsQ0FBWSxRQUFRLG9CQUFSLEVBQThCLE1BQTFDO0FBQ0EsV0FBTyxJQUFQLENBQVksUUFBUSx3QkFBUixFQUFrQyxVQUE5QztBQUNBLFdBQU8sSUFBUCxDQUFZLFFBQVEsbUJBQVIsRUFBNkIsS0FBekM7QUFDSCxXQUFPLElBQVAsQ0FBWSxRQUFRLGlCQUFSLEVBQTJCLEdBQXZDOztBQUVHLFNBQUksSUFBSSxJQUFFLENBQVYsRUFBYSxJQUFFLE9BQU8sTUFBdEIsRUFBOEIsR0FBOUIsRUFBbUM7QUFDL0IsY0FBTSxXQUFOLENBQWtCLE9BQU8sQ0FBUCxDQUFsQjtBQUNIOztBQUVELFdBQU8sT0FBUCxDQUFlLEtBQWYsR0FBdUIsS0FBdkI7QUFDQSxXQUFPLEtBQVAsR0FBZSxLQUFmO0FBQ0gsQ0FqQkQ7Ozs7QUNBQTs7OztBQUlBLENBQUMsQ0FBQyxZQUFVO0FBQUMsVUFBUyxDQUFULENBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFNBQU8sRUFBRSxHQUFGLENBQU0sRUFBRSxDQUFGLENBQU4sRUFBVyxFQUFFLENBQUYsQ0FBWCxHQUFpQixDQUF4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TUFBOUIsR0FBdUMsU0FBdkM7QUFDQSxZQUFXLFFBQVgsQ0FBb0IsU0FBcEIsQ0FBOEIsTUFBOUIsR0FBdUMsSUFBdkM7QUFDQSxZQUFXLFFBQVgsQ0FBb0IsU0FBcEIsQ0FBOEIsWUFBOUIsR0FBNkMsU0FBN0M7QUFDQSxZQUFXLFFBQVgsQ0FBb0IsU0FBcEIsQ0FBOEIsVUFBOUIsR0FBMkMsU0FBM0M7QUFDQSxZQUFXLFFBQVgsQ0FBb0IsU0FBcEIsQ0FBOEIsWUFBOUIsR0FBNkMsS0FBN0M7QUFDQSxZQUFXLFFBQVgsQ0FBb0IsU0FBcEIsQ0FBOEIsS0FBOUIsR0FBc0MsU0FBdEM7O0FBRUEsWUFBVyxRQUFYLENBQW9CLFNBQXBCLENBQThCLE9BQTlCLEdBQXdDLFVBQVMsSUFBVCxFQUFlO0FBQ3RELE9BQUssS0FBTCxHQUFhLElBQWI7QUFDQSxFQUZEO0FBR0EsWUFBVyxRQUFYLENBQW9CLFNBQXBCLENBQThCLE9BQTlCLEdBQXdDLFlBQVc7QUFDbEQsU0FBTyxLQUFLLEtBQVo7QUFDQSxFQUZEO0FBR0EsWUFBVyxRQUFYLENBQW9CLFNBQXBCLENBQThCLE9BQTlCLEdBQXdDLFVBQVMsSUFBVCxFQUFlO0FBQ3RELE9BQUssS0FBTCxHQUFhLElBQWI7QUFDQSxFQUZEO0FBR0EsWUFBVyxRQUFYLENBQW9CLFNBQXBCLENBQThCLE9BQTlCLEdBQXdDLFlBQVc7QUFDbEQsU0FBTyxLQUFLLEtBQVo7QUFDQSxFQUZEO0FBR0EsWUFBVyxRQUFYLENBQW9CLFNBQXBCLENBQThCLE9BQTlCLEdBQXdDLFVBQVMsSUFBVCxFQUFlO0FBQ3RELE9BQUssS0FBTCxHQUFhLElBQWI7QUFDQSxFQUZEO0FBR0EsWUFBVyxRQUFYLENBQW9CLFNBQXBCLENBQThCLE9BQTlCLEdBQXdDLFlBQVc7QUFDbEQsU0FBTyxLQUFLLEtBQVo7QUFDQSxFQUZEO0FBR0EsWUFBVyxRQUFYLENBQW9CLFNBQXBCLENBQThCLFFBQTlCLEdBQXlDLFlBQVc7QUFDbkQsU0FBTyxLQUFLLE1BQVo7QUFDQSxFQUZEO0FBR0EsWUFBVyxRQUFY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O0FBQ0EsT0FBSSxXQUFXLEdBQVgsQ0FBZSxPQUFmLENBQUosRUFBNkI7QUFDNUIsZUFBVyxHQUFYLENBQWUsS0FBZixDQUFxQixPQUFyQixFQUE4QixRQUE5QjtBQUNBO0FBQ0Q7O0FBRUQsU0FBTyxRQUFQO0FBQ0EsRUFwQkQ7O0FBc0JBLFlBQVcsZ0JBQVgsR0FBOEIsVUFBUyxRQUFULEVBQW1CO0FBQ2hELFNBQU8sQ0FBQyxNQUFNLFdBQVcsUUFBWCxDQUFOLENBQUQsSUFBZ0MsRUFBRSxRQUFGLENBQVcsUUFBWCxDQUF2QztBQUNBLEVBRkQ7O0FBSUEsUUFBTyxPQUFQLENBQWUsVUFBZixHQUE0QixVQUE1QjtBQUNBLENBN3FCRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24oKXtcbiAgICB2YXIgaXNOb2RlID0gdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzICE9PSAndW5kZWZpbmVkJztcblxuICAgIHZhciBVdGlscyA9IHJlcXVpcmUoJy4vc3JjL3V0aWxzLWNvcmUnKS5VdGlscztcblxuICAgIHZhciBsb2FkZWQgPSBbXTtcbiAgICBsb2FkZWQucHVzaChyZXF1aXJlKCcuL3NyYy91dGlscy9zdHJpbmcnKS5TdHJpbmcpO1xuICAgIGxvYWRlZC5wdXNoKHJlcXVpcmUoJy4vc3JjL3V0aWxzL3ZhbGlkYXRpb24nKS5WYWxpZGF0aW9uKTtcbiAgICBsb2FkZWQucHVzaChyZXF1aXJlKCcuL3NyYy91dGlscy9lcnJvcicpLkVycm9yKTtcblx0bG9hZGVkLnB1c2gocmVxdWlyZSgnLi9zcmMvdXRpbHMvZG9tJykuRE9NKTtcblxuICAgIGZvcih2YXIgaT0wOyBpPGxvYWRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBVdGlscy5leHRlbmRVdGlscyhsb2FkZWRbaV0pO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzLlV0aWxzID0gVXRpbHM7XG4gICAgd2luZG93LlV0aWxzID0gVXRpbHM7XG59KSgpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogbG9kYXNoIGxvZGFzaC5jb20vbGljZW5zZSB8IFVuZGVyc2NvcmUuanMgMS44LjMgdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFXG4gKi9cbjsoZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsbil7cmV0dXJuIHQuc2V0KG5bMF0sblsxXSksdH1mdW5jdGlvbiBuKHQsbil7cmV0dXJuIHQuYWRkKG4pLHR9ZnVuY3Rpb24gcih0LG4scil7c3dpdGNoKHIubGVuZ3RoKXtjYXNlIDA6cmV0dXJuIHQuY2FsbChuKTtjYXNlIDE6cmV0dXJuIHQuY2FsbChuLHJbMF0pO2Nhc2UgMjpyZXR1cm4gdC5jYWxsKG4sclswXSxyWzFdKTtjYXNlIDM6cmV0dXJuIHQuY2FsbChuLHJbMF0sclsxXSxyWzJdKX1yZXR1cm4gdC5hcHBseShuLHIpfWZ1bmN0aW9uIGUodCxuLHIsZSl7Zm9yKHZhciB1PS0xLG89dD90Lmxlbmd0aDowOysrdTxvOyl7dmFyIGk9dFt1XTtuKGUsaSxyKGkpLHQpfXJldHVybiBlfWZ1bmN0aW9uIHUodCxuKXtmb3IodmFyIHI9LTEsZT10P3QubGVuZ3RoOjA7KytyPGUmJmZhbHNlIT09bih0W3JdLHIsdCk7KTtyZXR1cm4gdH1mdW5jdGlvbiBvKHQsbil7Zm9yKHZhciByPXQ/dC5sZW5ndGg6MDtyLS0mJmZhbHNlIT09bih0W3JdLHIsdCk7KTtcblx0cmV0dXJuIHR9ZnVuY3Rpb24gaSh0LG4pe2Zvcih2YXIgcj0tMSxlPXQ/dC5sZW5ndGg6MDsrK3I8ZTspaWYoIW4odFtyXSxyLHQpKXJldHVybiBmYWxzZTtyZXR1cm4gdHJ1ZX1mdW5jdGlvbiBmKHQsbil7Zm9yKHZhciByPS0xLGU9dD90Lmxlbmd0aDowLHU9MCxvPVtdOysrcjxlOyl7dmFyIGk9dFtyXTtuKGkscix0KSYmKG9bdSsrXT1pKX1yZXR1cm4gb31mdW5jdGlvbiBjKHQsbil7cmV0dXJuISghdHx8IXQubGVuZ3RoKSYmLTE8ZCh0LG4sMCl9ZnVuY3Rpb24gYSh0LG4scil7Zm9yKHZhciBlPS0xLHU9dD90Lmxlbmd0aDowOysrZTx1OylpZihyKG4sdFtlXSkpcmV0dXJuIHRydWU7cmV0dXJuIGZhbHNlfWZ1bmN0aW9uIGwodCxuKXtmb3IodmFyIHI9LTEsZT10P3QubGVuZ3RoOjAsdT1BcnJheShlKTsrK3I8ZTspdVtyXT1uKHRbcl0scix0KTtyZXR1cm4gdX1mdW5jdGlvbiBzKHQsbil7Zm9yKHZhciByPS0xLGU9bi5sZW5ndGgsdT10Lmxlbmd0aDsrK3I8ZTspdFt1K3JdPW5bcl07cmV0dXJuIHR9ZnVuY3Rpb24gaCh0LG4scixlKXtcblx0dmFyIHU9LTEsbz10P3QubGVuZ3RoOjA7Zm9yKGUmJm8mJihyPXRbKyt1XSk7Kyt1PG87KXI9bihyLHRbdV0sdSx0KTtyZXR1cm4gcn1mdW5jdGlvbiBwKHQsbixyLGUpe3ZhciB1PXQ/dC5sZW5ndGg6MDtmb3IoZSYmdSYmKHI9dFstLXVdKTt1LS07KXI9bihyLHRbdV0sdSx0KTtyZXR1cm4gcn1mdW5jdGlvbiBfKHQsbil7Zm9yKHZhciByPS0xLGU9dD90Lmxlbmd0aDowOysrcjxlOylpZihuKHRbcl0scix0KSlyZXR1cm4gdHJ1ZTtyZXR1cm4gZmFsc2V9ZnVuY3Rpb24gdih0LG4scil7dmFyIGU7cmV0dXJuIHIodCxmdW5jdGlvbih0LHIsdSl7cmV0dXJuIG4odCxyLHUpPyhlPXIsZmFsc2UpOnZvaWQgMH0pLGV9ZnVuY3Rpb24gZyh0LG4scixlKXt2YXIgdT10Lmxlbmd0aDtmb3Iocis9ZT8xOi0xO2U/ci0tOisrcjx1OylpZihuKHRbcl0scix0KSlyZXR1cm4gcjtyZXR1cm4tMX1mdW5jdGlvbiBkKHQsbixyKXtpZihuIT09bilyZXR1cm4gTSh0LHIpOy0tcjtmb3IodmFyIGU9dC5sZW5ndGg7KytyPGU7KWlmKHRbcl09PT1uKXJldHVybiByO1xuXHRyZXR1cm4tMX1mdW5jdGlvbiB5KHQsbixyLGUpey0tcjtmb3IodmFyIHU9dC5sZW5ndGg7KytyPHU7KWlmKGUodFtyXSxuKSlyZXR1cm4gcjtyZXR1cm4tMX1mdW5jdGlvbiBiKHQsbil7dmFyIHI9dD90Lmxlbmd0aDowO3JldHVybiByP3codCxuKS9yOlZ9ZnVuY3Rpb24geCh0LG4scixlLHUpe3JldHVybiB1KHQsZnVuY3Rpb24odCx1LG8pe3I9ZT8oZT1mYWxzZSx0KTpuKHIsdCx1LG8pfSkscn1mdW5jdGlvbiBqKHQsbil7dmFyIHI9dC5sZW5ndGg7Zm9yKHQuc29ydChuKTtyLS07KXRbcl09dFtyXS5jO3JldHVybiB0fWZ1bmN0aW9uIHcodCxuKXtmb3IodmFyIHIsZT0tMSx1PXQubGVuZ3RoOysrZTx1Oyl7dmFyIG89bih0W2VdKTtvIT09VCYmKHI9cj09PVQ/bzpyK28pfXJldHVybiByfWZ1bmN0aW9uIG0odCxuKXtmb3IodmFyIHI9LTEsZT1BcnJheSh0KTsrK3I8dDspZVtyXT1uKHIpO3JldHVybiBlfWZ1bmN0aW9uIEEodCxuKXtyZXR1cm4gbChuLGZ1bmN0aW9uKG4pe3JldHVybltuLHRbbl1dO1xufSl9ZnVuY3Rpb24gTyh0KXtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIHQobil9fWZ1bmN0aW9uIGsodCxuKXtyZXR1cm4gbChuLGZ1bmN0aW9uKG4pe3JldHVybiB0W25dfSl9ZnVuY3Rpb24gRSh0LG4pe3JldHVybiB0LmhhcyhuKX1mdW5jdGlvbiBTKHQsbil7Zm9yKHZhciByPS0xLGU9dC5sZW5ndGg7KytyPGUmJi0xPGQobix0W3JdLDApOyk7cmV0dXJuIHJ9ZnVuY3Rpb24gSSh0LG4pe2Zvcih2YXIgcj10Lmxlbmd0aDtyLS0mJi0xPGQobix0W3JdLDApOyk7cmV0dXJuIHJ9ZnVuY3Rpb24gUih0KXtyZXR1cm4gdCYmdC5PYmplY3Q9PT1PYmplY3Q/dDpudWxsfWZ1bmN0aW9uIFcodCl7cmV0dXJuIHp0W3RdfWZ1bmN0aW9uIEIodCl7cmV0dXJuIFV0W3RdfWZ1bmN0aW9uIEwodCl7cmV0dXJuXCJcXFxcXCIrRHRbdF19ZnVuY3Rpb24gTSh0LG4scil7dmFyIGU9dC5sZW5ndGg7Zm9yKG4rPXI/MTotMTtyP24tLTorK248ZTspe3ZhciB1PXRbbl07aWYodSE9PXUpcmV0dXJuIG59cmV0dXJuLTE7XG59ZnVuY3Rpb24gQyh0KXt2YXIgbj1mYWxzZTtpZihudWxsIT10JiZ0eXBlb2YgdC50b1N0cmluZyE9XCJmdW5jdGlvblwiKXRyeXtuPSEhKHQrXCJcIil9Y2F0Y2gocil7fXJldHVybiBufWZ1bmN0aW9uIHoodCl7Zm9yKHZhciBuLHI9W107IShuPXQubmV4dCgpKS5kb25lOylyLnB1c2gobi52YWx1ZSk7cmV0dXJuIHJ9ZnVuY3Rpb24gVSh0KXt2YXIgbj0tMSxyPUFycmF5KHQuc2l6ZSk7cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbih0LGUpe3JbKytuXT1bZSx0XX0pLHJ9ZnVuY3Rpb24gJCh0LG4pe2Zvcih2YXIgcj0tMSxlPXQubGVuZ3RoLHU9MCxvPVtdOysrcjxlOyl7dmFyIGk9dFtyXTtpIT09biYmXCJfX2xvZGFzaF9wbGFjZWhvbGRlcl9fXCIhPT1pfHwodFtyXT1cIl9fbG9kYXNoX3BsYWNlaG9sZGVyX19cIixvW3UrK109cil9cmV0dXJuIG99ZnVuY3Rpb24gRCh0KXt2YXIgbj0tMSxyPUFycmF5KHQuc2l6ZSk7cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbih0KXtyWysrbl09dH0pLHJ9ZnVuY3Rpb24gRih0KXtcblx0dmFyIG49LTEscj1BcnJheSh0LnNpemUpO3JldHVybiB0LmZvckVhY2goZnVuY3Rpb24odCl7clsrK25dPVt0LHRdfSkscn1mdW5jdGlvbiBOKHQpe2lmKCF0fHwhV3QudGVzdCh0KSlyZXR1cm4gdC5sZW5ndGg7Zm9yKHZhciBuPUl0Lmxhc3RJbmRleD0wO0l0LnRlc3QodCk7KW4rKztyZXR1cm4gbn1mdW5jdGlvbiBQKHQpe3JldHVybiAkdFt0XX1mdW5jdGlvbiBaKFIpe2Z1bmN0aW9uIEF0KHQsbil7cmV0dXJuIFIuc2V0VGltZW91dC5jYWxsKEt0LHQsbil9ZnVuY3Rpb24gT3QodCl7aWYoVGUodCkmJiF5aSh0KSYmISh0IGluc3RhbmNlb2YgVXQpKXtpZih0IGluc3RhbmNlb2YgenQpcmV0dXJuIHQ7aWYoV3UuY2FsbCh0LFwiX193cmFwcGVkX19cIikpcmV0dXJuIGFlKHQpfXJldHVybiBuZXcgenQodCl9ZnVuY3Rpb24ga3QoKXt9ZnVuY3Rpb24genQodCxuKXt0aGlzLl9fd3JhcHBlZF9fPXQsdGhpcy5fX2FjdGlvbnNfXz1bXSx0aGlzLl9fY2hhaW5fXz0hIW4sdGhpcy5fX2luZGV4X189MCxcblx0dGhpcy5fX3ZhbHVlc19fPVR9ZnVuY3Rpb24gVXQodCl7dGhpcy5fX3dyYXBwZWRfXz10LHRoaXMuX19hY3Rpb25zX189W10sdGhpcy5fX2Rpcl9fPTEsdGhpcy5fX2ZpbHRlcmVkX189ZmFsc2UsdGhpcy5fX2l0ZXJhdGVlc19fPVtdLHRoaXMuX190YWtlQ291bnRfXz00Mjk0OTY3Mjk1LHRoaXMuX192aWV3c19fPVtdfWZ1bmN0aW9uICR0KHQpe3ZhciBuPS0xLHI9dD90Lmxlbmd0aDowO2Zvcih0aGlzLmNsZWFyKCk7KytuPHI7KXt2YXIgZT10W25dO3RoaXMuc2V0KGVbMF0sZVsxXSl9fWZ1bmN0aW9uIER0KHQpe3ZhciBuPS0xLHI9dD90Lmxlbmd0aDowO2Zvcih0aGlzLmNsZWFyKCk7KytuPHI7KXt2YXIgZT10W25dO3RoaXMuc2V0KGVbMF0sZVsxXSl9fWZ1bmN0aW9uIFB0KHQpe3ZhciBuPS0xLHI9dD90Lmxlbmd0aDowO2Zvcih0aGlzLmNsZWFyKCk7KytuPHI7KXt2YXIgZT10W25dO3RoaXMuc2V0KGVbMF0sZVsxXSl9fWZ1bmN0aW9uIFp0KHQpe3ZhciBuPS0xLHI9dD90Lmxlbmd0aDowO1xuXHRmb3IodGhpcy5fX2RhdGFfXz1uZXcgUHQ7KytuPHI7KXRoaXMuYWRkKHRbbl0pfWZ1bmN0aW9uIHF0KHQpe3RoaXMuX19kYXRhX189bmV3IER0KHQpfWZ1bmN0aW9uIFZ0KHQsbixyLGUpe3JldHVybiB0PT09VHx8Q2UodCxrdVtyXSkmJiFXdS5jYWxsKGUscik/bjp0fWZ1bmN0aW9uIEp0KHQsbixyKXsocj09PVR8fENlKHRbbl0scikpJiYodHlwZW9mIG4hPVwibnVtYmVyXCJ8fHIhPT1UfHxuIGluIHQpfHwodFtuXT1yKX1mdW5jdGlvbiBZdCh0LG4scil7dmFyIGU9dFtuXTtXdS5jYWxsKHQsbikmJkNlKGUscikmJihyIT09VHx8biBpbiB0KXx8KHRbbl09cil9ZnVuY3Rpb24gSHQodCxuKXtmb3IodmFyIHI9dC5sZW5ndGg7ci0tOylpZihDZSh0W3JdWzBdLG4pKXJldHVybiByO3JldHVybi0xfWZ1bmN0aW9uIFF0KHQsbixyLGUpe3JldHVybiBBbyh0LGZ1bmN0aW9uKHQsdSxvKXtuKGUsdCxyKHQpLG8pfSksZX1mdW5jdGlvbiBYdCh0LG4pe3JldHVybiB0JiZzcihuLGl1KG4pLHQpfVxuXHRmdW5jdGlvbiB0bih0LG4pe2Zvcih2YXIgcj0tMSxlPW51bGw9PXQsdT1uLmxlbmd0aCxvPUFycmF5KHUpOysrcjx1OylvW3JdPWU/VDp1dSh0LG5bcl0pO3JldHVybiBvfWZ1bmN0aW9uIG5uKHQsbixyKXtyZXR1cm4gdD09PXQmJihyIT09VCYmKHQ9cj49dD90OnIpLG4hPT1UJiYodD10Pj1uP3Q6bikpLHR9ZnVuY3Rpb24gcm4odCxuLHIsZSxvLGksZil7dmFyIGM7aWYoZSYmKGM9aT9lKHQsbyxpLGYpOmUodCkpLGMhPT1UKXJldHVybiBjO2lmKCFaZSh0KSlyZXR1cm4gdDtpZihvPXlpKHQpKXtpZihjPUtyKHQpLCFuKXJldHVybiBscih0LGMpfWVsc2V7dmFyIGE9cXIodCksbD1cIltvYmplY3QgRnVuY3Rpb25dXCI9PWF8fFwiW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl1cIj09YTtpZihiaSh0KSlyZXR1cm4gb3IodCxuKTtpZihcIltvYmplY3QgT2JqZWN0XVwiPT1hfHxcIltvYmplY3QgQXJndW1lbnRzXVwiPT1hfHxsJiYhaSl7aWYoQyh0KSlyZXR1cm4gaT90Ont9O2lmKGM9R3IobD97fTp0KSxcblx0XHRcdCFuKXJldHVybiBocih0LFh0KGMsdCkpfWVsc2V7aWYoIUN0W2FdKXJldHVybiBpP3Q6e307Yz1Kcih0LGEscm4sbil9fWlmKGZ8fChmPW5ldyBxdCksaT1mLmdldCh0KSlyZXR1cm4gaTtpZihmLnNldCh0LGMpLCFvKXZhciBzPXI/Z24odCxpdSxUcik6aXUodCk7cmV0dXJuIHUoc3x8dCxmdW5jdGlvbih1LG8pe3MmJihvPXUsdT10W29dKSxZdChjLG8scm4odSxuLHIsZSxvLHQsZikpfSksY31mdW5jdGlvbiBlbih0KXt2YXIgbj1pdSh0KSxyPW4ubGVuZ3RoO3JldHVybiBmdW5jdGlvbihlKXtpZihudWxsPT1lKXJldHVybiFyO2Zvcih2YXIgdT1yO3UtLTspe3ZhciBvPW5bdV0saT10W29dLGY9ZVtvXTtpZihmPT09VCYmIShvIGluIE9iamVjdChlKSl8fCFpKGYpKXJldHVybiBmYWxzZX1yZXR1cm4gdHJ1ZX19ZnVuY3Rpb24gdW4odCl7cmV0dXJuIFplKHQpP1R1KHQpOnt9fWZ1bmN0aW9uIG9uKHQsbixyKXtpZih0eXBlb2YgdCE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBBdShcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7XG5cdFx0cmV0dXJuIEF0KGZ1bmN0aW9uKCl7dC5hcHBseShULHIpfSxuKX1mdW5jdGlvbiBmbih0LG4scixlKXt2YXIgdT0tMSxvPWMsaT10cnVlLGY9dC5sZW5ndGgscz1bXSxoPW4ubGVuZ3RoO2lmKCFmKXJldHVybiBzO3ImJihuPWwobixPKHIpKSksZT8obz1hLGk9ZmFsc2UpOm4ubGVuZ3RoPj0yMDAmJihvPUUsaT1mYWxzZSxuPW5ldyBadChuKSk7dDpmb3IoOysrdTxmOyl7dmFyIHA9dFt1XSxfPXI/cihwKTpwLHA9ZXx8MCE9PXA/cDowO2lmKGkmJl89PT1fKXtmb3IodmFyIHY9aDt2LS07KWlmKG5bdl09PT1fKWNvbnRpbnVlIHQ7cy5wdXNoKHApfWVsc2UgbyhuLF8sZSl8fHMucHVzaChwKX1yZXR1cm4gc31mdW5jdGlvbiBjbih0LG4pe3ZhciByPXRydWU7cmV0dXJuIEFvKHQsZnVuY3Rpb24odCxlLHUpe3JldHVybiByPSEhbih0LGUsdSl9KSxyfWZ1bmN0aW9uIGFuKHQsbixyKXtmb3IodmFyIGU9LTEsdT10Lmxlbmd0aDsrK2U8dTspe3ZhciBvPXRbZV0saT1uKG8pO2lmKG51bGwhPWkmJihmPT09VD9pPT09aSYmIUplKGkpOnIoaSxmKSkpdmFyIGY9aSxjPW87XG5cdH1yZXR1cm4gY31mdW5jdGlvbiBsbih0LG4pe3ZhciByPVtdO3JldHVybiBBbyh0LGZ1bmN0aW9uKHQsZSx1KXtuKHQsZSx1KSYmci5wdXNoKHQpfSkscn1mdW5jdGlvbiBzbih0LG4scixlLHUpe3ZhciBvPS0xLGk9dC5sZW5ndGg7Zm9yKHJ8fChyPUhyKSx1fHwodT1bXSk7KytvPGk7KXt2YXIgZj10W29dO24+MCYmcihmKT9uPjE/c24oZixuLTEscixlLHUpOnModSxmKTplfHwodVt1Lmxlbmd0aF09Zil9cmV0dXJuIHV9ZnVuY3Rpb24gaG4odCxuKXtyZXR1cm4gdCYma28odCxuLGl1KX1mdW5jdGlvbiBwbih0LG4pe3JldHVybiB0JiZFbyh0LG4saXUpfWZ1bmN0aW9uIF9uKHQsbil7cmV0dXJuIGYobixmdW5jdGlvbihuKXtyZXR1cm4gRmUodFtuXSl9KX1mdW5jdGlvbiB2bih0LG4pe249bmUobix0KT9bbl06ZXIobik7Zm9yKHZhciByPTAsZT1uLmxlbmd0aDtudWxsIT10JiZlPnI7KXQ9dFtmZShuW3IrK10pXTtyZXR1cm4gciYmcj09ZT90OlR9ZnVuY3Rpb24gZ24odCxuLHIpe1xuXHRcdHJldHVybiBuPW4odCkseWkodCk/bjpzKG4scih0KSl9ZnVuY3Rpb24gZG4odCxuKXtyZXR1cm4gdD5ufWZ1bmN0aW9uIHluKHQsbil7cmV0dXJuIG51bGwhPXQmJihXdS5jYWxsKHQsbil8fHR5cGVvZiB0PT1cIm9iamVjdFwiJiZuIGluIHQmJm51bGw9PT1KdShPYmplY3QodCkpKX1mdW5jdGlvbiBibih0LG4pe3JldHVybiBudWxsIT10JiZuIGluIE9iamVjdCh0KX1mdW5jdGlvbiB4bih0LG4scil7Zm9yKHZhciBlPXI/YTpjLHU9dFswXS5sZW5ndGgsbz10Lmxlbmd0aCxpPW8sZj1BcnJheShvKSxzPTEvMCxoPVtdO2ktLTspe3ZhciBwPXRbaV07aSYmbiYmKHA9bChwLE8obikpKSxzPXRvKHAubGVuZ3RoLHMpLGZbaV09IXImJihufHx1Pj0xMjAmJnAubGVuZ3RoPj0xMjApP25ldyBadChpJiZwKTpUfXZhciBwPXRbMF0sXz0tMSx2PWZbMF07dDpmb3IoOysrXzx1JiZzPmgubGVuZ3RoOyl7dmFyIGc9cFtfXSxkPW4/bihnKTpnLGc9cnx8MCE9PWc/ZzowO2lmKHY/IUUodixkKTohZShoLGQscikpe1xuXHRcdGZvcihpPW87LS1pOyl7dmFyIHk9ZltpXTtpZih5PyFFKHksZCk6IWUodFtpXSxkLHIpKWNvbnRpbnVlIHR9diYmdi5wdXNoKGQpLGgucHVzaChnKX19cmV0dXJuIGh9ZnVuY3Rpb24gam4odCxuLHIpe3ZhciBlPXt9O3JldHVybiBobih0LGZ1bmN0aW9uKHQsdSxvKXtuKGUscih0KSx1LG8pfSksZX1mdW5jdGlvbiB3bih0LG4sZSl7cmV0dXJuIG5lKG4sdCl8fChuPWVyKG4pLHQ9aWUodCxuKSxuPXZlKG4pKSxuPW51bGw9PXQ/dDp0W2ZlKG4pXSxudWxsPT1uP1Q6cihuLHQsZSl9ZnVuY3Rpb24gbW4odCxuLHIsZSx1KXtpZih0PT09biluPXRydWU7ZWxzZSBpZihudWxsPT10fHxudWxsPT1ufHwhWmUodCkmJiFUZShuKSluPXQhPT10JiZuIT09bjtlbHNlIHQ6e3ZhciBvPXlpKHQpLGk9eWkobiksZj1cIltvYmplY3QgQXJyYXldXCIsYz1cIltvYmplY3QgQXJyYXldXCI7b3x8KGY9cXIodCksZj1cIltvYmplY3QgQXJndW1lbnRzXVwiPT1mP1wiW29iamVjdCBPYmplY3RdXCI6ZiksaXx8KGM9cXIobiksXG5cdFx0Yz1cIltvYmplY3QgQXJndW1lbnRzXVwiPT1jP1wiW29iamVjdCBPYmplY3RdXCI6Yyk7dmFyIGE9XCJbb2JqZWN0IE9iamVjdF1cIj09ZiYmIUModCksaT1cIltvYmplY3QgT2JqZWN0XVwiPT1jJiYhQyhuKTtpZigoYz1mPT1jKSYmIWEpdXx8KHU9bmV3IHF0KSxuPW98fFllKHQpP3pyKHQsbixtbixyLGUsdSk6VXIodCxuLGYsbW4scixlLHUpO2Vsc2V7aWYoISgyJmUpJiYobz1hJiZXdS5jYWxsKHQsXCJfX3dyYXBwZWRfX1wiKSxmPWkmJld1LmNhbGwobixcIl9fd3JhcHBlZF9fXCIpLG98fGYpKXt0PW8/dC52YWx1ZSgpOnQsbj1mP24udmFsdWUoKTpuLHV8fCh1PW5ldyBxdCksbj1tbih0LG4scixlLHUpO2JyZWFrIHR9aWYoYyluOmlmKHV8fCh1PW5ldyBxdCksbz0yJmUsZj1pdSh0KSxpPWYubGVuZ3RoLGM9aXUobikubGVuZ3RoLGk9PWN8fG8pe2ZvcihhPWk7YS0tOyl7dmFyIGw9ZlthXTtpZighKG8/bCBpbiBuOnluKG4sbCkpKXtuPWZhbHNlO2JyZWFrIG59fWlmKGM9dS5nZXQodCkpbj1jPT1uO2Vsc2V7XG5cdFx0Yz10cnVlLHUuc2V0KHQsbik7Zm9yKHZhciBzPW87KythPGk7KXt2YXIgbD1mW2FdLGg9dFtsXSxwPW5bbF07aWYocil2YXIgXz1vP3IocCxoLGwsbix0LHUpOnIoaCxwLGwsdCxuLHUpO2lmKF89PT1UP2ghPT1wJiYhbW4oaCxwLHIsZSx1KTohXyl7Yz1mYWxzZTticmVha31zfHwocz1cImNvbnN0cnVjdG9yXCI9PWwpfWMmJiFzJiYocj10LmNvbnN0cnVjdG9yLGU9bi5jb25zdHJ1Y3RvcixyIT1lJiZcImNvbnN0cnVjdG9yXCJpbiB0JiZcImNvbnN0cnVjdG9yXCJpbiBuJiYhKHR5cGVvZiByPT1cImZ1bmN0aW9uXCImJnIgaW5zdGFuY2VvZiByJiZ0eXBlb2YgZT09XCJmdW5jdGlvblwiJiZlIGluc3RhbmNlb2YgZSkmJihjPWZhbHNlKSksdVtcImRlbGV0ZVwiXSh0KSxuPWN9fWVsc2Ugbj1mYWxzZTtlbHNlIG49ZmFsc2V9fXJldHVybiBufWZ1bmN0aW9uIEFuKHQsbixyLGUpe3ZhciB1PXIubGVuZ3RoLG89dSxpPSFlO2lmKG51bGw9PXQpcmV0dXJuIW87Zm9yKHQ9T2JqZWN0KHQpO3UtLTspe3ZhciBmPXJbdV07aWYoaSYmZlsyXT9mWzFdIT09dFtmWzBdXTohKGZbMF1pbiB0KSlyZXR1cm4gZmFsc2U7XG5cdH1mb3IoOysrdTxvOyl7dmFyIGY9clt1XSxjPWZbMF0sYT10W2NdLGw9ZlsxXTtpZihpJiZmWzJdKXtpZihhPT09VCYmIShjIGluIHQpKXJldHVybiBmYWxzZX1lbHNle2lmKGY9bmV3IHF0LGUpdmFyIHM9ZShhLGwsYyx0LG4sZik7aWYocz09PVQ/IW1uKGwsYSxlLDMsZik6IXMpcmV0dXJuIGZhbHNlfX1yZXR1cm4gdHJ1ZX1mdW5jdGlvbiBPbih0KXtyZXR1cm4hWmUodCl8fEl1JiZJdSBpbiB0P2ZhbHNlOihGZSh0KXx8Qyh0KT96dTp5dCkudGVzdChjZSh0KSl9ZnVuY3Rpb24ga24odCl7cmV0dXJuIHR5cGVvZiB0PT1cImZ1bmN0aW9uXCI/dDpudWxsPT10P3B1OnR5cGVvZiB0PT1cIm9iamVjdFwiP3lpKHQpP1duKHRbMF0sdFsxXSk6Um4odCk6ZHUodCl9ZnVuY3Rpb24gRW4odCl7dD1udWxsPT10P3Q6T2JqZWN0KHQpO3ZhciBuLHI9W107Zm9yKG4gaW4gdClyLnB1c2gobik7cmV0dXJuIHJ9ZnVuY3Rpb24gU24odCxuKXtyZXR1cm4gbj50fWZ1bmN0aW9uIEluKHQsbil7dmFyIHI9LTEsZT1VZSh0KT9BcnJheSh0Lmxlbmd0aCk6W107XG5cdFx0cmV0dXJuIEFvKHQsZnVuY3Rpb24odCx1LG8pe2VbKytyXT1uKHQsdSxvKX0pLGV9ZnVuY3Rpb24gUm4odCl7dmFyIG49UHIodCk7cmV0dXJuIDE9PW4ubGVuZ3RoJiZuWzBdWzJdP3VlKG5bMF1bMF0sblswXVsxXSk6ZnVuY3Rpb24ocil7cmV0dXJuIHI9PT10fHxBbihyLHQsbil9fWZ1bmN0aW9uIFduKHQsbil7cmV0dXJuIG5lKHQpJiZuPT09biYmIVplKG4pP3VlKGZlKHQpLG4pOmZ1bmN0aW9uKHIpe3ZhciBlPXV1KHIsdCk7cmV0dXJuIGU9PT1UJiZlPT09bj9vdShyLHQpOm1uKG4sZSxULDMpfX1mdW5jdGlvbiBCbih0LG4scixlLG8pe2lmKHQhPT1uKXtpZigheWkobikmJiFZZShuKSl2YXIgaT1mdShuKTt1KGl8fG4sZnVuY3Rpb24odSxmKXtpZihpJiYoZj11LHU9bltmXSksWmUodSkpe298fChvPW5ldyBxdCk7dmFyIGM9ZixhPW8sbD10W2NdLHM9bltjXSxoPWEuZ2V0KHMpO2lmKGgpSnQodCxjLGgpO2Vsc2V7dmFyIGg9ZT9lKGwscyxjK1wiXCIsdCxuLGEpOlQscD1oPT09VDtwJiYoaD1zLFxuXHRcdHlpKHMpfHxZZShzKT95aShsKT9oPWw6JGUobCk/aD1scihsKToocD1mYWxzZSxoPXJuKHMsdHJ1ZSkpOlZlKHMpfHx6ZShzKT96ZShsKT9oPXJ1KGwpOiFaZShsKXx8ciYmRmUobCk/KHA9ZmFsc2UsaD1ybihzLHRydWUpKTpoPWw6cD1mYWxzZSksYS5zZXQocyxoKSxwJiZCbihoLHMscixlLGEpLGFbXCJkZWxldGVcIl0ocyksSnQodCxjLGgpfX1lbHNlIGM9ZT9lKHRbZl0sdSxmK1wiXCIsdCxuLG8pOlQsYz09PVQmJihjPXUpLEp0KHQsZixjKX0pfX1mdW5jdGlvbiBMbih0LG4pe3ZhciByPXQubGVuZ3RoO3JldHVybiByPyhuKz0wPm4/cjowLFhyKG4scik/dFtuXTpUKTp2b2lkIDB9ZnVuY3Rpb24gTW4odCxuLHIpe3ZhciBlPS0xO3JldHVybiBuPWwobi5sZW5ndGg/bjpbcHVdLE8oRnIoKSkpLHQ9SW4odCxmdW5jdGlvbih0KXtyZXR1cm57YTpsKG4sZnVuY3Rpb24obil7cmV0dXJuIG4odCl9KSxiOisrZSxjOnR9fSksaih0LGZ1bmN0aW9uKHQsbil7dmFyIGU7dDp7ZT0tMTtmb3IodmFyIHU9dC5hLG89bi5hLGk9dS5sZW5ndGgsZj1yLmxlbmd0aDsrK2U8aTspe1xuXHRcdHZhciBjPWZyKHVbZV0sb1tlXSk7aWYoYyl7ZT1lPj1mP2M6YyooXCJkZXNjXCI9PXJbZV0/LTE6MSk7YnJlYWsgdH19ZT10LmItbi5ifXJldHVybiBlfSl9ZnVuY3Rpb24gQ24odCxuKXtyZXR1cm4gdD1PYmplY3QodCksaChuLGZ1bmN0aW9uKG4scil7cmV0dXJuIHIgaW4gdCYmKG5bcl09dFtyXSksbn0se30pfWZ1bmN0aW9uIHpuKHQsbil7Zm9yKHZhciByPS0xLGU9Z24odCxmdSxCbyksdT1lLmxlbmd0aCxvPXt9Oysrcjx1Oyl7dmFyIGk9ZVtyXSxmPXRbaV07bihmLGkpJiYob1tpXT1mKX1yZXR1cm4gb31mdW5jdGlvbiBVbih0KXtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIG51bGw9PW4/VDpuW3RdfX1mdW5jdGlvbiAkbih0KXtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIHZuKG4sdCl9fWZ1bmN0aW9uIERuKHQsbixyLGUpe3ZhciB1PWU/eTpkLG89LTEsaT1uLmxlbmd0aCxmPXQ7Zm9yKHQ9PT1uJiYobj1scihuKSksciYmKGY9bCh0LE8ocikpKTsrK288aTspZm9yKHZhciBjPTAsYT1uW29dLGE9cj9yKGEpOmE7LTE8KGM9dShmLGEsYyxlKSk7KWYhPT10JiZWdS5jYWxsKGYsYywxKSxcblx0XHRWdS5jYWxsKHQsYywxKTtyZXR1cm4gdH1mdW5jdGlvbiBGbih0LG4pe2Zvcih2YXIgcj10P24ubGVuZ3RoOjAsZT1yLTE7ci0tOyl7dmFyIHU9bltyXTtpZihyPT1lfHx1IT09byl7dmFyIG89dTtpZihYcih1KSlWdS5jYWxsKHQsdSwxKTtlbHNlIGlmKG5lKHUsdCkpZGVsZXRlIHRbZmUodSldO2Vsc2V7dmFyIHU9ZXIodSksaT1pZSh0LHUpO251bGwhPWkmJmRlbGV0ZSBpW2ZlKHZlKHUpKV19fX19ZnVuY3Rpb24gTm4odCxuKXtyZXR1cm4gdCtHdShybygpKihuLXQrMSkpfWZ1bmN0aW9uIFBuKHQsbil7dmFyIHI9XCJcIjtpZighdHx8MT5ufHxuPjkwMDcxOTkyNTQ3NDA5OTEpcmV0dXJuIHI7ZG8gbiUyJiYocis9dCksKG49R3Uobi8yKSkmJih0Kz10KTt3aGlsZShuKTtyZXR1cm4gcn1mdW5jdGlvbiBabih0LG4scixlKXtuPW5lKG4sdCk/W25dOmVyKG4pO2Zvcih2YXIgdT0tMSxvPW4ubGVuZ3RoLGk9by0xLGY9dDtudWxsIT1mJiYrK3U8bzspe3ZhciBjPWZlKG5bdV0pO2lmKFplKGYpKXtcblx0XHR2YXIgYT1yO2lmKHUhPWkpe3ZhciBsPWZbY10sYT1lP2UobCxjLGYpOlQ7YT09PVQmJihhPW51bGw9PWw/WHIoblt1KzFdKT9bXTp7fTpsKX1ZdChmLGMsYSl9Zj1mW2NdfXJldHVybiB0fWZ1bmN0aW9uIFRuKHQsbixyKXt2YXIgZT0tMSx1PXQubGVuZ3RoO2ZvcigwPm4mJihuPS1uPnU/MDp1K24pLHI9cj51P3U6ciwwPnImJihyKz11KSx1PW4+cj8wOnItbj4+PjAsbj4+Pj0wLHI9QXJyYXkodSk7KytlPHU7KXJbZV09dFtlK25dO3JldHVybiByfWZ1bmN0aW9uIHFuKHQsbil7dmFyIHI7cmV0dXJuIEFvKHQsZnVuY3Rpb24odCxlLHUpe3JldHVybiByPW4odCxlLHUpLCFyfSksISFyfWZ1bmN0aW9uIFZuKHQsbixyKXt2YXIgZT0wLHU9dD90Lmxlbmd0aDplO2lmKHR5cGVvZiBuPT1cIm51bWJlclwiJiZuPT09biYmMjE0NzQ4MzY0Nz49dSl7Zm9yKDt1PmU7KXt2YXIgbz1lK3U+Pj4xLGk9dFtvXTtudWxsIT09aSYmIUplKGkpJiYocj9uPj1pOm4+aSk/ZT1vKzE6dT1vfXJldHVybiB1fVxuXHRcdHJldHVybiBLbih0LG4scHUscil9ZnVuY3Rpb24gS24odCxuLHIsZSl7bj1yKG4pO2Zvcih2YXIgdT0wLG89dD90Lmxlbmd0aDowLGk9biE9PW4sZj1udWxsPT09bixjPUplKG4pLGE9bj09PVQ7bz51Oyl7dmFyIGw9R3UoKHUrbykvMikscz1yKHRbbF0pLGg9cyE9PVQscD1udWxsPT09cyxfPXM9PT1zLHY9SmUocyk7KGk/ZXx8XzphP18mJihlfHxoKTpmP18mJmgmJihlfHwhcCk6Yz9fJiZoJiYhcCYmKGV8fCF2KTpwfHx2PzA6ZT9uPj1zOm4+cyk/dT1sKzE6bz1sfXJldHVybiB0byhvLDQyOTQ5NjcyOTQpfWZ1bmN0aW9uIEduKHQsbil7Zm9yKHZhciByPS0xLGU9dC5sZW5ndGgsdT0wLG89W107KytyPGU7KXt2YXIgaT10W3JdLGY9bj9uKGkpOmk7aWYoIXJ8fCFDZShmLGMpKXt2YXIgYz1mO29bdSsrXT0wPT09aT8wOml9fXJldHVybiBvfWZ1bmN0aW9uIEpuKHQpe3JldHVybiB0eXBlb2YgdD09XCJudW1iZXJcIj90OkplKHQpP1Y6K3R9ZnVuY3Rpb24gWW4odCl7aWYodHlwZW9mIHQ9PVwic3RyaW5nXCIpcmV0dXJuIHQ7XG5cdFx0aWYoSmUodCkpcmV0dXJuIG1vP21vLmNhbGwodCk6XCJcIjt2YXIgbj10K1wiXCI7cmV0dXJuXCIwXCI9PW4mJjEvdD09LXE/XCItMFwiOm59ZnVuY3Rpb24gSG4odCxuLHIpe3ZhciBlPS0xLHU9YyxvPXQubGVuZ3RoLGk9dHJ1ZSxmPVtdLGw9ZjtpZihyKWk9ZmFsc2UsdT1hO2Vsc2UgaWYobz49MjAwKXtpZih1PW4/bnVsbDpJbyh0KSlyZXR1cm4gRCh1KTtpPWZhbHNlLHU9RSxsPW5ldyBadH1lbHNlIGw9bj9bXTpmO3Q6Zm9yKDsrK2U8bzspe3ZhciBzPXRbZV0saD1uP24ocyk6cyxzPXJ8fDAhPT1zP3M6MDtpZihpJiZoPT09aCl7Zm9yKHZhciBwPWwubGVuZ3RoO3AtLTspaWYobFtwXT09PWgpY29udGludWUgdDtuJiZsLnB1c2goaCksZi5wdXNoKHMpfWVsc2UgdShsLGgscil8fChsIT09ZiYmbC5wdXNoKGgpLGYucHVzaChzKSl9cmV0dXJuIGZ9ZnVuY3Rpb24gUW4odCxuLHIsZSl7Zm9yKHZhciB1PXQubGVuZ3RoLG89ZT91Oi0xOyhlP28tLTorK288dSkmJm4odFtvXSxvLHQpOyk7cmV0dXJuIHI/VG4odCxlPzA6byxlP28rMTp1KTpUbih0LGU/bysxOjAsZT91Om8pO1xuXHR9ZnVuY3Rpb24gWG4odCxuKXt2YXIgcj10O3JldHVybiByIGluc3RhbmNlb2YgVXQmJihyPXIudmFsdWUoKSksaChuLGZ1bmN0aW9uKHQsbil7cmV0dXJuIG4uZnVuYy5hcHBseShuLnRoaXNBcmcscyhbdF0sbi5hcmdzKSl9LHIpfWZ1bmN0aW9uIHRyKHQsbixyKXtmb3IodmFyIGU9LTEsdT10Lmxlbmd0aDsrK2U8dTspdmFyIG89bz9zKGZuKG8sdFtlXSxuLHIpLGZuKHRbZV0sbyxuLHIpKTp0W2VdO3JldHVybiBvJiZvLmxlbmd0aD9IbihvLG4scik6W119ZnVuY3Rpb24gbnIodCxuLHIpe2Zvcih2YXIgZT0tMSx1PXQubGVuZ3RoLG89bi5sZW5ndGgsaT17fTsrK2U8dTspcihpLHRbZV0sbz5lP25bZV06VCk7cmV0dXJuIGl9ZnVuY3Rpb24gcnIodCl7cmV0dXJuICRlKHQpP3Q6W119ZnVuY3Rpb24gZXIodCl7cmV0dXJuIHlpKHQpP3Q6Q28odCl9ZnVuY3Rpb24gdXIodCxuLHIpe3ZhciBlPXQubGVuZ3RoO3JldHVybiByPXI9PT1UP2U6ciwhbiYmcj49ZT90OlRuKHQsbixyKX1mdW5jdGlvbiBvcih0LG4pe1xuXHRcdGlmKG4pcmV0dXJuIHQuc2xpY2UoKTt2YXIgcj1uZXcgdC5jb25zdHJ1Y3Rvcih0Lmxlbmd0aCk7cmV0dXJuIHQuY29weShyKSxyfWZ1bmN0aW9uIGlyKHQpe3ZhciBuPW5ldyB0LmNvbnN0cnVjdG9yKHQuYnl0ZUxlbmd0aCk7cmV0dXJuIG5ldyBGdShuKS5zZXQobmV3IEZ1KHQpKSxufWZ1bmN0aW9uIGZyKHQsbil7aWYodCE9PW4pe3ZhciByPXQhPT1ULGU9bnVsbD09PXQsdT10PT09dCxvPUplKHQpLGk9biE9PVQsZj1udWxsPT09bixjPW49PT1uLGE9SmUobik7aWYoIWYmJiFhJiYhbyYmdD5ufHxvJiZpJiZjJiYhZiYmIWF8fGUmJmkmJmN8fCFyJiZjfHwhdSlyZXR1cm4gMTtpZighZSYmIW8mJiFhJiZuPnR8fGEmJnImJnUmJiFlJiYhb3x8ZiYmciYmdXx8IWkmJnV8fCFjKXJldHVybi0xfXJldHVybiAwfWZ1bmN0aW9uIGNyKHQsbixyLGUpe3ZhciB1PS0xLG89dC5sZW5ndGgsaT1yLmxlbmd0aCxmPS0xLGM9bi5sZW5ndGgsYT1YdShvLWksMCksbD1BcnJheShjK2EpO2ZvcihlPSFlOysrZjxjOylsW2ZdPW5bZl07XG5cdFx0Zm9yKDsrK3U8aTspKGV8fG8+dSkmJihsW3JbdV1dPXRbdV0pO2Zvcig7YS0tOylsW2YrK109dFt1KytdO3JldHVybiBsfWZ1bmN0aW9uIGFyKHQsbixyLGUpe3ZhciB1PS0xLG89dC5sZW5ndGgsaT0tMSxmPXIubGVuZ3RoLGM9LTEsYT1uLmxlbmd0aCxsPVh1KG8tZiwwKSxzPUFycmF5KGwrYSk7Zm9yKGU9IWU7Kyt1PGw7KXNbdV09dFt1XTtmb3IobD11OysrYzxhOylzW2wrY109bltjXTtmb3IoOysraTxmOykoZXx8bz51KSYmKHNbbCtyW2ldXT10W3UrK10pO3JldHVybiBzfWZ1bmN0aW9uIGxyKHQsbil7dmFyIHI9LTEsZT10Lmxlbmd0aDtmb3Iobnx8KG49QXJyYXkoZSkpOysrcjxlOyluW3JdPXRbcl07cmV0dXJuIG59ZnVuY3Rpb24gc3IodCxuLHIsZSl7cnx8KHI9e30pO2Zvcih2YXIgdT0tMSxvPW4ubGVuZ3RoOysrdTxvOyl7dmFyIGk9blt1XSxmPWU/ZShyW2ldLHRbaV0saSxyLHQpOnRbaV07WXQocixpLGYpfXJldHVybiByfWZ1bmN0aW9uIGhyKHQsbil7cmV0dXJuIHNyKHQsVHIodCksbik7XG5cdH1mdW5jdGlvbiBwcih0LG4pe3JldHVybiBmdW5jdGlvbihyLHUpe3ZhciBvPXlpKHIpP2U6UXQsaT1uP24oKTp7fTtyZXR1cm4gbyhyLHQsRnIodSksaSl9fWZ1bmN0aW9uIF9yKHQpe3JldHVybiBNZShmdW5jdGlvbihuLHIpe3ZhciBlPS0xLHU9ci5sZW5ndGgsbz11PjE/clt1LTFdOlQsaT11PjI/clsyXTpULG89dC5sZW5ndGg+MyYmdHlwZW9mIG89PVwiZnVuY3Rpb25cIj8odS0tLG8pOlQ7Zm9yKGkmJnRlKHJbMF0sclsxXSxpKSYmKG89Mz51P1Q6byx1PTEpLG49T2JqZWN0KG4pOysrZTx1OykoaT1yW2VdKSYmdChuLGksZSxvKTtyZXR1cm4gbn0pfWZ1bmN0aW9uIHZyKHQsbil7cmV0dXJuIGZ1bmN0aW9uKHIsZSl7aWYobnVsbD09cilyZXR1cm4gcjtpZighVWUocikpcmV0dXJuIHQocixlKTtmb3IodmFyIHU9ci5sZW5ndGgsbz1uP3U6LTEsaT1PYmplY3Qocik7KG4/by0tOisrbzx1KSYmZmFsc2UhPT1lKGlbb10sbyxpKTspO3JldHVybiByfX1mdW5jdGlvbiBncih0KXtyZXR1cm4gZnVuY3Rpb24obixyLGUpe1xuXHRcdHZhciB1PS0xLG89T2JqZWN0KG4pO2U9ZShuKTtmb3IodmFyIGk9ZS5sZW5ndGg7aS0tOyl7dmFyIGY9ZVt0P2k6Kyt1XTtpZihmYWxzZT09PXIob1tmXSxmLG8pKWJyZWFrfXJldHVybiBufX1mdW5jdGlvbiBkcih0LG4scil7ZnVuY3Rpb24gZSgpe3JldHVybih0aGlzJiZ0aGlzIT09S3QmJnRoaXMgaW5zdGFuY2VvZiBlP286dCkuYXBwbHkodT9yOnRoaXMsYXJndW1lbnRzKX12YXIgdT0xJm4sbz14cih0KTtyZXR1cm4gZX1mdW5jdGlvbiB5cih0KXtyZXR1cm4gZnVuY3Rpb24obil7bj1ldShuKTt2YXIgcj1XdC50ZXN0KG4pP24ubWF0Y2goSXQpOlQsZT1yP3JbMF06bi5jaGFyQXQoMCk7cmV0dXJuIG49cj91cihyLDEpLmpvaW4oXCJcIik6bi5zbGljZSgxKSxlW3RdKCkrbn19ZnVuY3Rpb24gYnIodCl7cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiBoKHN1KGx1KG4pLnJlcGxhY2UoRXQsXCJcIikpLHQsXCJcIil9fWZ1bmN0aW9uIHhyKHQpe3JldHVybiBmdW5jdGlvbigpe3ZhciBuPWFyZ3VtZW50cztcblx0XHRzd2l0Y2gobi5sZW5ndGgpe2Nhc2UgMDpyZXR1cm4gbmV3IHQ7Y2FzZSAxOnJldHVybiBuZXcgdChuWzBdKTtjYXNlIDI6cmV0dXJuIG5ldyB0KG5bMF0sblsxXSk7Y2FzZSAzOnJldHVybiBuZXcgdChuWzBdLG5bMV0sblsyXSk7Y2FzZSA0OnJldHVybiBuZXcgdChuWzBdLG5bMV0sblsyXSxuWzNdKTtjYXNlIDU6cmV0dXJuIG5ldyB0KG5bMF0sblsxXSxuWzJdLG5bM10sbls0XSk7Y2FzZSA2OnJldHVybiBuZXcgdChuWzBdLG5bMV0sblsyXSxuWzNdLG5bNF0sbls1XSk7Y2FzZSA3OnJldHVybiBuZXcgdChuWzBdLG5bMV0sblsyXSxuWzNdLG5bNF0sbls1XSxuWzZdKX12YXIgcj11bih0LnByb3RvdHlwZSksbj10LmFwcGx5KHIsbik7cmV0dXJuIFplKG4pP246cn19ZnVuY3Rpb24ganIodCxuLGUpe2Z1bmN0aW9uIHUoKXtmb3IodmFyIGk9YXJndW1lbnRzLmxlbmd0aCxmPUFycmF5KGkpLGM9aSxhPURyKHUpO2MtLTspZltjXT1hcmd1bWVudHNbY107cmV0dXJuIGM9Mz5pJiZmWzBdIT09YSYmZltpLTFdIT09YT9bXTokKGYsYSksXG5cdFx0aS09Yy5sZW5ndGgsZT5pP0JyKHQsbixBcix1LnBsYWNlaG9sZGVyLFQsZixjLFQsVCxlLWkpOnIodGhpcyYmdGhpcyE9PUt0JiZ0aGlzIGluc3RhbmNlb2YgdT9vOnQsdGhpcyxmKX12YXIgbz14cih0KTtyZXR1cm4gdX1mdW5jdGlvbiB3cih0KXtyZXR1cm4gZnVuY3Rpb24obixyLGUpe3ZhciB1PU9iamVjdChuKTtpZihyPUZyKHIsMyksIVVlKG4pKXZhciBvPWl1KG4pO3JldHVybiBlPXQob3x8bixmdW5jdGlvbih0LG4pe3JldHVybiBvJiYobj10LHQ9dVtuXSkscih0LG4sdSl9LGUpLGU+LTE/bltvP29bZV06ZV06VH19ZnVuY3Rpb24gbXIodCl7cmV0dXJuIE1lKGZ1bmN0aW9uKG4pe249c24obiwxKTt2YXIgcj1uLmxlbmd0aCxlPXIsdT16dC5wcm90b3R5cGUudGhydTtmb3IodCYmbi5yZXZlcnNlKCk7ZS0tOyl7dmFyIG89bltlXTtpZih0eXBlb2YgbyE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBBdShcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7aWYodSYmIWkmJlwid3JhcHBlclwiPT0kcihvKSl2YXIgaT1uZXcgenQoW10sdHJ1ZSk7XG5cdH1mb3IoZT1pP2U6cjsrK2U8cjspdmFyIG89bltlXSx1PSRyKG8pLGY9XCJ3cmFwcGVyXCI9PXU/Um8obyk6VCxpPWYmJnJlKGZbMF0pJiY0MjQ9PWZbMV0mJiFmWzRdLmxlbmd0aCYmMT09Zls5XT9pWyRyKGZbMF0pXS5hcHBseShpLGZbM10pOjE9PW8ubGVuZ3RoJiZyZShvKT9pW3VdKCk6aS50aHJ1KG8pO3JldHVybiBmdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cyxlPXRbMF07aWYoaSYmMT09dC5sZW5ndGgmJnlpKGUpJiZlLmxlbmd0aD49MjAwKXJldHVybiBpLnBsYW50KGUpLnZhbHVlKCk7Zm9yKHZhciB1PTAsdD1yP25bdV0uYXBwbHkodGhpcyx0KTplOysrdTxyOyl0PW5bdV0uY2FsbCh0aGlzLHQpO3JldHVybiB0fX0pfWZ1bmN0aW9uIEFyKHQsbixyLGUsdSxvLGksZixjLGEpe2Z1bmN0aW9uIGwoKXtmb3IodmFyIGQ9YXJndW1lbnRzLmxlbmd0aCx5PUFycmF5KGQpLGI9ZDtiLS07KXlbYl09YXJndW1lbnRzW2JdO2lmKF8pe3ZhciB4LGo9RHIobCksYj15Lmxlbmd0aDtmb3IoeD0wO2ItLTspeVtiXT09PWomJngrKztcblx0fWlmKGUmJih5PWNyKHksZSx1LF8pKSxvJiYoeT1hcih5LG8saSxfKSksZC09eCxfJiZhPmQpcmV0dXJuIGo9JCh5LGopLEJyKHQsbixBcixsLnBsYWNlaG9sZGVyLHIseSxqLGYsYyxhLWQpO2lmKGo9aD9yOnRoaXMsYj1wP2pbdF06dCxkPXkubGVuZ3RoLGYpe3g9eS5sZW5ndGg7Zm9yKHZhciB3PXRvKGYubGVuZ3RoLHgpLG09bHIoeSk7dy0tOyl7dmFyIEE9Zlt3XTt5W3ddPVhyKEEseCk/bVtBXTpUfX1lbHNlIHYmJmQ+MSYmeS5yZXZlcnNlKCk7cmV0dXJuIHMmJmQ+YyYmKHkubGVuZ3RoPWMpLHRoaXMmJnRoaXMhPT1LdCYmdGhpcyBpbnN0YW5jZW9mIGwmJihiPWd8fHhyKGIpKSxiLmFwcGx5KGoseSl9dmFyIHM9MTI4Jm4saD0xJm4scD0yJm4sXz0yNCZuLHY9NTEyJm4sZz1wP1Q6eHIodCk7cmV0dXJuIGx9ZnVuY3Rpb24gT3IodCxuKXtyZXR1cm4gZnVuY3Rpb24ocixlKXtyZXR1cm4gam4ocix0LG4oZSkpfX1mdW5jdGlvbiBrcih0KXtyZXR1cm4gZnVuY3Rpb24obixyKXt2YXIgZTtcblx0XHRpZihuPT09VCYmcj09PVQpcmV0dXJuIDA7aWYobiE9PVQmJihlPW4pLHIhPT1UKXtpZihlPT09VClyZXR1cm4gcjt0eXBlb2Ygbj09XCJzdHJpbmdcInx8dHlwZW9mIHI9PVwic3RyaW5nXCI/KG49WW4obikscj1ZbihyKSk6KG49Sm4obikscj1KbihyKSksZT10KG4scil9cmV0dXJuIGV9fWZ1bmN0aW9uIEVyKHQpe3JldHVybiBNZShmdW5jdGlvbihuKXtyZXR1cm4gbj0xPT1uLmxlbmd0aCYmeWkoblswXSk/bChuWzBdLE8oRnIoKSkpOmwoc24obiwxLFFyKSxPKEZyKCkpKSxNZShmdW5jdGlvbihlKXt2YXIgdT10aGlzO3JldHVybiB0KG4sZnVuY3Rpb24odCl7cmV0dXJuIHIodCx1LGUpfSl9KX0pfWZ1bmN0aW9uIFNyKHQsbil7bj1uPT09VD9cIiBcIjpZbihuKTt2YXIgcj1uLmxlbmd0aDtyZXR1cm4gMj5yP3I/UG4obix0KTpuOihyPVBuKG4sS3UodC9OKG4pKSksV3QudGVzdChuKT91cihyLm1hdGNoKEl0KSwwLHQpLmpvaW4oXCJcIik6ci5zbGljZSgwLHQpKX1mdW5jdGlvbiBJcih0LG4sZSx1KXtcblx0XHRmdW5jdGlvbiBvKCl7Zm9yKHZhciBuPS0xLGM9YXJndW1lbnRzLmxlbmd0aCxhPS0xLGw9dS5sZW5ndGgscz1BcnJheShsK2MpLGg9dGhpcyYmdGhpcyE9PUt0JiZ0aGlzIGluc3RhbmNlb2Ygbz9mOnQ7KythPGw7KXNbYV09dVthXTtmb3IoO2MtLTspc1thKytdPWFyZ3VtZW50c1srK25dO3JldHVybiByKGgsaT9lOnRoaXMscyl9dmFyIGk9MSZuLGY9eHIodCk7cmV0dXJuIG99ZnVuY3Rpb24gUnIodCl7cmV0dXJuIGZ1bmN0aW9uKG4scixlKXtlJiZ0eXBlb2YgZSE9XCJudW1iZXJcIiYmdGUobixyLGUpJiYocj1lPVQpLG49bnUobiksbj1uPT09bj9uOjAscj09PVQ/KHI9bixuPTApOnI9bnUocil8fDAsZT1lPT09VD9yPm4/MTotMTpudShlKXx8MDt2YXIgdT0tMTtyPVh1KEt1KChyLW4pLyhlfHwxKSksMCk7Zm9yKHZhciBvPUFycmF5KHIpO3ItLTspb1t0P3I6Kyt1XT1uLG4rPWU7cmV0dXJuIG99fWZ1bmN0aW9uIFdyKHQpe3JldHVybiBmdW5jdGlvbihuLHIpe3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmdHlwZW9mIHI9PVwic3RyaW5nXCJ8fChuPW51KG4pLFxuXHRcdHI9bnUocikpLHQobixyKX19ZnVuY3Rpb24gQnIodCxuLHIsZSx1LG8saSxmLGMsYSl7dmFyIGw9OCZuLHM9bD9pOlQ7aT1sP1Q6aTt2YXIgaD1sP286VDtyZXR1cm4gbz1sP1Q6byxuPShufChsPzMyOjY0KSkmfihsPzY0OjMyKSw0Jm58fChuJj0tNCksbj1bdCxuLHUsaCxzLG8saSxmLGMsYV0scj1yLmFwcGx5KFQsbikscmUodCkmJk1vKHIsbiksci5wbGFjZWhvbGRlcj1lLHJ9ZnVuY3Rpb24gTHIodCl7dmFyIG49d3VbdF07cmV0dXJuIGZ1bmN0aW9uKHQscil7aWYodD1udSh0KSxyPXRvKFhlKHIpLDI5Mikpe3ZhciBlPShldSh0KStcImVcIikuc3BsaXQoXCJlXCIpLGU9bihlWzBdK1wiZVwiKygrZVsxXStyKSksZT0oZXUoZSkrXCJlXCIpLnNwbGl0KFwiZVwiKTtyZXR1cm4rKGVbMF0rXCJlXCIrKCtlWzFdLXIpKX1yZXR1cm4gbih0KX19ZnVuY3Rpb24gTXIodCl7cmV0dXJuIGZ1bmN0aW9uKG4pe3ZhciByPXFyKG4pO3JldHVyblwiW29iamVjdCBNYXBdXCI9PXI/VShuKTpcIltvYmplY3QgU2V0XVwiPT1yP0Yobik6QShuLHQobikpO1xuXHR9fWZ1bmN0aW9uIENyKHQsbixyLGUsdSxvLGksZil7dmFyIGM9MiZuO2lmKCFjJiZ0eXBlb2YgdCE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBBdShcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7dmFyIGE9ZT9lLmxlbmd0aDowO2lmKGF8fChuJj0tOTcsZT11PVQpLGk9aT09PVQ/aTpYdShYZShpKSwwKSxmPWY9PT1UP2Y6WGUoZiksYS09dT91Lmxlbmd0aDowLDY0Jm4pe3ZhciBsPWUscz11O2U9dT1UfXZhciBoPWM/VDpSbyh0KTtyZXR1cm4gbz1bdCxuLHIsZSx1LGwscyxvLGksZl0saCYmKHI9b1sxXSx0PWhbMV0sbj1yfHQsZT0xMjg9PXQmJjg9PXJ8fDEyOD09dCYmMjU2PT1yJiZoWzhdPj1vWzddLmxlbmd0aHx8Mzg0PT10JiZoWzhdPj1oWzddLmxlbmd0aCYmOD09ciwxMzE+bnx8ZSkmJigxJnQmJihvWzJdPWhbMl0sbnw9MSZyPzA6NCksKHI9aFszXSkmJihlPW9bM10sb1szXT1lP2NyKGUscixoWzRdKTpyLG9bNF09ZT8kKG9bM10sXCJfX2xvZGFzaF9wbGFjZWhvbGRlcl9fXCIpOmhbNF0pLFxuXHQocj1oWzVdKSYmKGU9b1s1XSxvWzVdPWU/YXIoZSxyLGhbNl0pOnIsb1s2XT1lPyQob1s1XSxcIl9fbG9kYXNoX3BsYWNlaG9sZGVyX19cIik6aFs2XSksKHI9aFs3XSkmJihvWzddPXIpLDEyOCZ0JiYob1s4XT1udWxsPT1vWzhdP2hbOF06dG8ob1s4XSxoWzhdKSksbnVsbD09b1s5XSYmKG9bOV09aFs5XSksb1swXT1oWzBdLG9bMV09biksdD1vWzBdLG49b1sxXSxyPW9bMl0sZT1vWzNdLHU9b1s0XSxmPW9bOV09bnVsbD09b1s5XT9jPzA6dC5sZW5ndGg6WHUob1s5XS1hLDApLCFmJiYyNCZuJiYobiY9LTI1KSwoaD9TbzpNbykobiYmMSE9bj84PT1ufHwxNj09bj9qcih0LG4sZik6MzIhPW4mJjMzIT1ufHx1Lmxlbmd0aD9Bci5hcHBseShULG8pOklyKHQsbixyLGUpOmRyKHQsbixyKSxvKX1mdW5jdGlvbiB6cih0LG4scixlLHUsbyl7dmFyIGk9MiZ1LGY9dC5sZW5ndGgsYz1uLmxlbmd0aDtpZihmIT1jJiYhKGkmJmM+ZikpcmV0dXJuIGZhbHNlO2lmKGM9by5nZXQodCkpcmV0dXJuIGM9PW47XG5cdFx0dmFyIGM9LTEsYT10cnVlLGw9MSZ1P25ldyBadDpUO2ZvcihvLnNldCh0LG4pOysrYzxmOyl7dmFyIHM9dFtjXSxoPW5bY107aWYoZSl2YXIgcD1pP2UoaCxzLGMsbix0LG8pOmUocyxoLGMsdCxuLG8pO2lmKHAhPT1UKXtpZihwKWNvbnRpbnVlO2E9ZmFsc2U7YnJlYWt9aWYobCl7aWYoIV8obixmdW5jdGlvbih0LG4pe3JldHVybiBsLmhhcyhuKXx8cyE9PXQmJiFyKHMsdCxlLHUsbyk/dm9pZCAwOmwuYWRkKG4pfSkpe2E9ZmFsc2U7YnJlYWt9fWVsc2UgaWYocyE9PWgmJiFyKHMsaCxlLHUsbykpe2E9ZmFsc2U7YnJlYWt9fXJldHVybiBvW1wiZGVsZXRlXCJdKHQpLGF9ZnVuY3Rpb24gVXIodCxuLHIsZSx1LG8saSl7c3dpdGNoKHIpe2Nhc2VcIltvYmplY3QgRGF0YVZpZXddXCI6aWYodC5ieXRlTGVuZ3RoIT1uLmJ5dGVMZW5ndGh8fHQuYnl0ZU9mZnNldCE9bi5ieXRlT2Zmc2V0KWJyZWFrO3Q9dC5idWZmZXIsbj1uLmJ1ZmZlcjtjYXNlXCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiOmlmKHQuYnl0ZUxlbmd0aCE9bi5ieXRlTGVuZ3RofHwhZShuZXcgRnUodCksbmV3IEZ1KG4pKSlicmVhaztcblx0XHRyZXR1cm4gdHJ1ZTtjYXNlXCJbb2JqZWN0IEJvb2xlYW5dXCI6Y2FzZVwiW29iamVjdCBEYXRlXVwiOnJldHVybit0PT0rbjtjYXNlXCJbb2JqZWN0IEVycm9yXVwiOnJldHVybiB0Lm5hbWU9PW4ubmFtZSYmdC5tZXNzYWdlPT1uLm1lc3NhZ2U7Y2FzZVwiW29iamVjdCBOdW1iZXJdXCI6cmV0dXJuIHQhPSt0P24hPStuOnQ9PStuO2Nhc2VcIltvYmplY3QgUmVnRXhwXVwiOmNhc2VcIltvYmplY3QgU3RyaW5nXVwiOnJldHVybiB0PT1uK1wiXCI7Y2FzZVwiW29iamVjdCBNYXBdXCI6dmFyIGY9VTtjYXNlXCJbb2JqZWN0IFNldF1cIjppZihmfHwoZj1EKSx0LnNpemUhPW4uc2l6ZSYmISgyJm8pKWJyZWFrO3JldHVybihyPWkuZ2V0KHQpKT9yPT1uOihvfD0xLGkuc2V0KHQsbiksenIoZih0KSxmKG4pLGUsdSxvLGkpKTtjYXNlXCJbb2JqZWN0IFN5bWJvbF1cIjppZih3bylyZXR1cm4gd28uY2FsbCh0KT09d28uY2FsbChuKX1yZXR1cm4gZmFsc2V9ZnVuY3Rpb24gJHIodCl7Zm9yKHZhciBuPXQubmFtZStcIlwiLHI9X29bbl0sZT1XdS5jYWxsKF9vLG4pP3IubGVuZ3RoOjA7ZS0tOyl7XG5cdFx0dmFyIHU9cltlXSxvPXUuZnVuYztpZihudWxsPT1vfHxvPT10KXJldHVybiB1Lm5hbWV9cmV0dXJuIG59ZnVuY3Rpb24gRHIodCl7cmV0dXJuKFd1LmNhbGwoT3QsXCJwbGFjZWhvbGRlclwiKT9PdDp0KS5wbGFjZWhvbGRlcn1mdW5jdGlvbiBGcigpe3ZhciB0PU90Lml0ZXJhdGVlfHxfdSx0PXQ9PT1fdT9rbjp0O3JldHVybiBhcmd1bWVudHMubGVuZ3RoP3QoYXJndW1lbnRzWzBdLGFyZ3VtZW50c1sxXSk6dH1mdW5jdGlvbiBOcih0LG4pe3ZhciByPXQuX19kYXRhX18sZT10eXBlb2YgbjtyZXR1cm4oXCJzdHJpbmdcIj09ZXx8XCJudW1iZXJcIj09ZXx8XCJzeW1ib2xcIj09ZXx8XCJib29sZWFuXCI9PWU/XCJfX3Byb3RvX19cIiE9PW46bnVsbD09PW4pP3JbdHlwZW9mIG49PVwic3RyaW5nXCI/XCJzdHJpbmdcIjpcImhhc2hcIl06ci5tYXB9ZnVuY3Rpb24gUHIodCl7Zm9yKHZhciBuPWl1KHQpLHI9bi5sZW5ndGg7ci0tOyl7dmFyIGU9bltyXSx1PXRbZV07bltyXT1bZSx1LHU9PT11JiYhWmUodSldfXJldHVybiBuO1xuXHR9ZnVuY3Rpb24gWnIodCxuKXt2YXIgcj1udWxsPT10P1Q6dFtuXTtyZXR1cm4gT24ocik/cjpUfWZ1bmN0aW9uIFRyKHQpe3JldHVybiBQdShPYmplY3QodCkpfWZ1bmN0aW9uIHFyKHQpe3JldHVybiBNdS5jYWxsKHQpfWZ1bmN0aW9uIFZyKHQsbixyKXtuPW5lKG4sdCk/W25dOmVyKG4pO2Zvcih2YXIgZSx1PS0xLG89bi5sZW5ndGg7Kyt1PG87KXt2YXIgaT1mZShuW3VdKTtpZighKGU9bnVsbCE9dCYmcih0LGkpKSlicmVhazt0PXRbaV19cmV0dXJuIGU/ZToobz10P3QubGVuZ3RoOjAsISFvJiZQZShvKSYmWHIoaSxvKSYmKHlpKHQpfHxHZSh0KXx8emUodCkpKX1mdW5jdGlvbiBLcih0KXt2YXIgbj10Lmxlbmd0aCxyPXQuY29uc3RydWN0b3Iobik7cmV0dXJuIG4mJlwic3RyaW5nXCI9PXR5cGVvZiB0WzBdJiZXdS5jYWxsKHQsXCJpbmRleFwiKSYmKHIuaW5kZXg9dC5pbmRleCxyLmlucHV0PXQuaW5wdXQpLHJ9ZnVuY3Rpb24gR3IodCl7cmV0dXJuIHR5cGVvZiB0LmNvbnN0cnVjdG9yIT1cImZ1bmN0aW9uXCJ8fGVlKHQpP3t9OnVuKEp1KE9iamVjdCh0KSkpO1xuXHR9ZnVuY3Rpb24gSnIocixlLHUsbyl7dmFyIGk9ci5jb25zdHJ1Y3Rvcjtzd2l0Y2goZSl7Y2FzZVwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIjpyZXR1cm4gaXIocik7Y2FzZVwiW29iamVjdCBCb29sZWFuXVwiOmNhc2VcIltvYmplY3QgRGF0ZV1cIjpyZXR1cm4gbmV3IGkoK3IpO2Nhc2VcIltvYmplY3QgRGF0YVZpZXddXCI6cmV0dXJuIGU9bz9pcihyLmJ1ZmZlcik6ci5idWZmZXIsbmV3IHIuY29uc3RydWN0b3IoZSxyLmJ5dGVPZmZzZXQsci5ieXRlTGVuZ3RoKTtjYXNlXCJbb2JqZWN0IEZsb2F0MzJBcnJheV1cIjpjYXNlXCJbb2JqZWN0IEZsb2F0NjRBcnJheV1cIjpjYXNlXCJbb2JqZWN0IEludDhBcnJheV1cIjpjYXNlXCJbb2JqZWN0IEludDE2QXJyYXldXCI6Y2FzZVwiW29iamVjdCBJbnQzMkFycmF5XVwiOmNhc2VcIltvYmplY3QgVWludDhBcnJheV1cIjpjYXNlXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiOmNhc2VcIltvYmplY3QgVWludDE2QXJyYXldXCI6Y2FzZVwiW29iamVjdCBVaW50MzJBcnJheV1cIjpcblx0XHRyZXR1cm4gZT1vP2lyKHIuYnVmZmVyKTpyLmJ1ZmZlcixuZXcgci5jb25zdHJ1Y3RvcihlLHIuYnl0ZU9mZnNldCxyLmxlbmd0aCk7Y2FzZVwiW29iamVjdCBNYXBdXCI6cmV0dXJuIGU9bz91KFUociksdHJ1ZSk6VShyKSxoKGUsdCxuZXcgci5jb25zdHJ1Y3Rvcik7Y2FzZVwiW29iamVjdCBOdW1iZXJdXCI6Y2FzZVwiW29iamVjdCBTdHJpbmddXCI6cmV0dXJuIG5ldyBpKHIpO2Nhc2VcIltvYmplY3QgUmVnRXhwXVwiOnJldHVybiBlPW5ldyByLmNvbnN0cnVjdG9yKHIuc291cmNlLF90LmV4ZWMocikpLGUubGFzdEluZGV4PXIubGFzdEluZGV4LGU7Y2FzZVwiW29iamVjdCBTZXRdXCI6cmV0dXJuIGU9bz91KEQociksdHJ1ZSk6RChyKSxoKGUsbixuZXcgci5jb25zdHJ1Y3Rvcik7Y2FzZVwiW29iamVjdCBTeW1ib2xdXCI6cmV0dXJuIHdvP09iamVjdCh3by5jYWxsKHIpKTp7fX19ZnVuY3Rpb24gWXIodCl7dmFyIG49dD90Lmxlbmd0aDpUO3JldHVybiBQZShuKSYmKHlpKHQpfHxHZSh0KXx8emUodCkpP20obixTdHJpbmcpOm51bGw7XG5cdH1mdW5jdGlvbiBIcih0KXtyZXR1cm4geWkodCl8fHplKHQpfWZ1bmN0aW9uIFFyKHQpe3JldHVybiB5aSh0KSYmISgyPT10Lmxlbmd0aCYmIUZlKHRbMF0pKX1mdW5jdGlvbiBYcih0LG4pe3JldHVybiBuPW51bGw9PW4/OTAwNzE5OTI1NDc0MDk5MTpuLCEhbiYmKHR5cGVvZiB0PT1cIm51bWJlclwifHx4dC50ZXN0KHQpKSYmdD4tMSYmMD09dCUxJiZuPnR9ZnVuY3Rpb24gdGUodCxuLHIpe2lmKCFaZShyKSlyZXR1cm4gZmFsc2U7dmFyIGU9dHlwZW9mIG47cmV0dXJuKFwibnVtYmVyXCI9PWU/VWUocikmJlhyKG4sci5sZW5ndGgpOlwic3RyaW5nXCI9PWUmJm4gaW4gcik/Q2UocltuXSx0KTpmYWxzZX1mdW5jdGlvbiBuZSh0LG4pe2lmKHlpKHQpKXJldHVybiBmYWxzZTt2YXIgcj10eXBlb2YgdDtyZXR1cm5cIm51bWJlclwiPT1yfHxcInN5bWJvbFwiPT1yfHxcImJvb2xlYW5cIj09cnx8bnVsbD09dHx8SmUodCk/dHJ1ZTp1dC50ZXN0KHQpfHwhZXQudGVzdCh0KXx8bnVsbCE9biYmdCBpbiBPYmplY3Qobil9ZnVuY3Rpb24gcmUodCl7XG5cdFx0dmFyIG49JHIodCkscj1PdFtuXTtyZXR1cm4gdHlwZW9mIHI9PVwiZnVuY3Rpb25cIiYmbiBpbiBVdC5wcm90b3R5cGU/dD09PXI/dHJ1ZToobj1SbyhyKSwhIW4mJnQ9PT1uWzBdKTpmYWxzZX1mdW5jdGlvbiBlZSh0KXt2YXIgbj10JiZ0LmNvbnN0cnVjdG9yO3JldHVybiB0PT09KHR5cGVvZiBuPT1cImZ1bmN0aW9uXCImJm4ucHJvdG90eXBlfHxrdSl9ZnVuY3Rpb24gdWUodCxuKXtyZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIG51bGw9PXI/ZmFsc2U6clt0XT09PW4mJihuIT09VHx8dCBpbiBPYmplY3QocikpfX1mdW5jdGlvbiBvZSh0LG4scixlLHUsbyl7cmV0dXJuIFplKHQpJiZaZShuKSYmQm4odCxuLFQsb2Usby5zZXQobix0KSksdH1mdW5jdGlvbiBpZSh0LG4pe3JldHVybiAxPT1uLmxlbmd0aD90OnZuKHQsVG4obiwwLC0xKSl9ZnVuY3Rpb24gZmUodCl7aWYodHlwZW9mIHQ9PVwic3RyaW5nXCJ8fEplKHQpKXJldHVybiB0O3ZhciBuPXQrXCJcIjtyZXR1cm5cIjBcIj09biYmMS90PT0tcT9cIi0wXCI6bn1mdW5jdGlvbiBjZSh0KXtcblx0XHRpZihudWxsIT10KXt0cnl7cmV0dXJuIFJ1LmNhbGwodCl9Y2F0Y2gobil7fXJldHVybiB0K1wiXCJ9cmV0dXJuXCJcIn1mdW5jdGlvbiBhZSh0KXtpZih0IGluc3RhbmNlb2YgVXQpcmV0dXJuIHQuY2xvbmUoKTt2YXIgbj1uZXcgenQodC5fX3dyYXBwZWRfXyx0Ll9fY2hhaW5fXyk7cmV0dXJuIG4uX19hY3Rpb25zX189bHIodC5fX2FjdGlvbnNfXyksbi5fX2luZGV4X189dC5fX2luZGV4X18sbi5fX3ZhbHVlc19fPXQuX192YWx1ZXNfXyxufWZ1bmN0aW9uIGxlKHQsbixyKXt2YXIgZT10P3QubGVuZ3RoOjA7cmV0dXJuIGU/KG49cnx8bj09PVQ/MTpYZShuKSxUbih0LDA+bj8wOm4sZSkpOltdfWZ1bmN0aW9uIHNlKHQsbixyKXt2YXIgZT10P3QubGVuZ3RoOjA7cmV0dXJuIGU/KG49cnx8bj09PVQ/MTpYZShuKSxuPWUtbixUbih0LDAsMD5uPzA6bikpOltdfWZ1bmN0aW9uIGhlKHQsbixyKXt2YXIgZT10P3QubGVuZ3RoOjA7cmV0dXJuIGU/KHI9bnVsbD09cj8wOlhlKHIpLDA+ciYmKHI9WHUoZStyLDApKSxcblx0XHRnKHQsRnIobiwzKSxyKSk6LTF9ZnVuY3Rpb24gcGUodCxuLHIpe3ZhciBlPXQ/dC5sZW5ndGg6MDtpZighZSlyZXR1cm4tMTt2YXIgdT1lLTE7cmV0dXJuIHIhPT1UJiYodT1YZShyKSx1PTA+cj9YdShlK3UsMCk6dG8odSxlLTEpKSxnKHQsRnIobiwzKSx1LHRydWUpfWZ1bmN0aW9uIF9lKHQpe3JldHVybiB0JiZ0Lmxlbmd0aD90WzBdOlR9ZnVuY3Rpb24gdmUodCl7dmFyIG49dD90Lmxlbmd0aDowO3JldHVybiBuP3Rbbi0xXTpUfWZ1bmN0aW9uIGdlKHQsbil7cmV0dXJuIHQmJnQubGVuZ3RoJiZuJiZuLmxlbmd0aD9Ebih0LG4pOnR9ZnVuY3Rpb24gZGUodCl7cmV0dXJuIHQ/dW8uY2FsbCh0KTp0fWZ1bmN0aW9uIHllKHQpe2lmKCF0fHwhdC5sZW5ndGgpcmV0dXJuW107dmFyIG49MDtyZXR1cm4gdD1mKHQsZnVuY3Rpb24odCl7cmV0dXJuICRlKHQpPyhuPVh1KHQubGVuZ3RoLG4pLHRydWUpOnZvaWQgMH0pLG0obixmdW5jdGlvbihuKXtyZXR1cm4gbCh0LFVuKG4pKX0pfWZ1bmN0aW9uIGJlKHQsbil7XG5cdFx0aWYoIXR8fCF0Lmxlbmd0aClyZXR1cm5bXTt2YXIgZT15ZSh0KTtyZXR1cm4gbnVsbD09bj9lOmwoZSxmdW5jdGlvbih0KXtyZXR1cm4gcihuLFQsdCl9KX1mdW5jdGlvbiB4ZSh0KXtyZXR1cm4gdD1PdCh0KSx0Ll9fY2hhaW5fXz10cnVlLHR9ZnVuY3Rpb24gamUodCxuKXtyZXR1cm4gbih0KX1mdW5jdGlvbiB3ZSgpe3JldHVybiB0aGlzfWZ1bmN0aW9uIG1lKHQsbil7cmV0dXJuKHlpKHQpP3U6QW8pKHQsRnIobiwzKSl9ZnVuY3Rpb24gQWUodCxuKXtyZXR1cm4oeWkodCk/bzpPbykodCxGcihuLDMpKX1mdW5jdGlvbiBPZSh0LG4pe3JldHVybih5aSh0KT9sOkluKSh0LEZyKG4sMykpfWZ1bmN0aW9uIGtlKHQsbixyKXt2YXIgZT0tMSx1PUhlKHQpLG89dS5sZW5ndGgsaT1vLTE7Zm9yKG49KHI/dGUodCxuLHIpOm49PT1UKT8xOm5uKFhlKG4pLDAsbyk7KytlPG47KXQ9Tm4oZSxpKSxyPXVbdF0sdVt0XT11W2VdLHVbZV09cjtyZXR1cm4gdS5sZW5ndGg9bix1fWZ1bmN0aW9uIEVlKCl7XG5cdFx0cmV0dXJuIHh1Lm5vdygpfWZ1bmN0aW9uIFNlKHQsbixyKXtyZXR1cm4gbj1yP1Q6bixuPXQmJm51bGw9PW4/dC5sZW5ndGg6bixDcih0LDEyOCxULFQsVCxULG4pfWZ1bmN0aW9uIEllKHQsbil7dmFyIHI7aWYodHlwZW9mIG4hPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgQXUoXCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIpO3JldHVybiB0PVhlKHQpLGZ1bmN0aW9uKCl7cmV0dXJuIDA8LS10JiYocj1uLmFwcGx5KHRoaXMsYXJndW1lbnRzKSksMT49dCYmKG49VCkscn19ZnVuY3Rpb24gUmUodCxuLHIpe3JldHVybiBuPXI/VDpuLHQ9Q3IodCw4LFQsVCxULFQsVCxuKSx0LnBsYWNlaG9sZGVyPVJlLnBsYWNlaG9sZGVyLHR9ZnVuY3Rpb24gV2UodCxuLHIpe3JldHVybiBuPXI/VDpuLHQ9Q3IodCwxNixULFQsVCxULFQsbiksdC5wbGFjZWhvbGRlcj1XZS5wbGFjZWhvbGRlcix0fWZ1bmN0aW9uIEJlKHQsbixyKXtmdW5jdGlvbiBlKG4pe3ZhciByPWMsZT1hO3JldHVybiBjPWE9VCxfPW4scz10LmFwcGx5KGUscik7XG5cdH1mdW5jdGlvbiB1KHQpe3ZhciByPXQtcDtyZXR1cm4gdC09XyxwPT09VHx8cj49bnx8MD5yfHxnJiZ0Pj1sfWZ1bmN0aW9uIG8oKXt2YXIgdD1FZSgpO2lmKHUodCkpcmV0dXJuIGkodCk7dmFyIHI7cj10LV8sdD1uLSh0LXApLHI9Zz90byh0LGwtcik6dCxoPUF0KG8scil9ZnVuY3Rpb24gaSh0KXtyZXR1cm4gaD1ULGQmJmM/ZSh0KTooYz1hPVQscyl9ZnVuY3Rpb24gZigpe3ZhciB0PUVlKCkscj11KHQpO2lmKGM9YXJndW1lbnRzLGE9dGhpcyxwPXQscil7aWYoaD09PVQpcmV0dXJuIF89dD1wLGg9QXQobyxuKSx2P2UodCk6cztpZihnKXJldHVybiBoPUF0KG8sbiksZShwKX1yZXR1cm4gaD09PVQmJihoPUF0KG8sbikpLHN9dmFyIGMsYSxsLHMsaCxwLF89MCx2PWZhbHNlLGc9ZmFsc2UsZD10cnVlO2lmKHR5cGVvZiB0IT1cImZ1bmN0aW9uXCIpdGhyb3cgbmV3IEF1KFwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiKTtyZXR1cm4gbj1udShuKXx8MCxaZShyKSYmKHY9ISFyLmxlYWRpbmcsbD0oZz1cIm1heFdhaXRcImluIHIpP1h1KG51KHIubWF4V2FpdCl8fDAsbik6bCxcblx0XHRkPVwidHJhaWxpbmdcImluIHI/ISFyLnRyYWlsaW5nOmQpLGYuY2FuY2VsPWZ1bmN0aW9uKCl7Xz0wLGM9cD1hPWg9VH0sZi5mbHVzaD1mdW5jdGlvbigpe3JldHVybiBoPT09VD9zOmkoRWUoKSl9LGZ9ZnVuY3Rpb24gTGUodCxuKXtmdW5jdGlvbiByKCl7dmFyIGU9YXJndW1lbnRzLHU9bj9uLmFwcGx5KHRoaXMsZSk6ZVswXSxvPXIuY2FjaGU7cmV0dXJuIG8uaGFzKHUpP28uZ2V0KHUpOihlPXQuYXBwbHkodGhpcyxlKSxyLmNhY2hlPW8uc2V0KHUsZSksZSl9aWYodHlwZW9mIHQhPVwiZnVuY3Rpb25cInx8biYmdHlwZW9mIG4hPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgQXUoXCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIpO3JldHVybiByLmNhY2hlPW5ldyhMZS5DYWNoZXx8UHQpLHJ9ZnVuY3Rpb24gTWUodCxuKXtpZih0eXBlb2YgdCE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBBdShcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7cmV0dXJuIG49WHUobj09PVQ/dC5sZW5ndGgtMTpYZShuKSwwKSxmdW5jdGlvbigpe1xuXHRcdGZvcih2YXIgZT1hcmd1bWVudHMsdT0tMSxvPVh1KGUubGVuZ3RoLW4sMCksaT1BcnJheShvKTsrK3U8bzspaVt1XT1lW24rdV07c3dpdGNoKG4pe2Nhc2UgMDpyZXR1cm4gdC5jYWxsKHRoaXMsaSk7Y2FzZSAxOnJldHVybiB0LmNhbGwodGhpcyxlWzBdLGkpO2Nhc2UgMjpyZXR1cm4gdC5jYWxsKHRoaXMsZVswXSxlWzFdLGkpfWZvcihvPUFycmF5KG4rMSksdT0tMTsrK3U8bjspb1t1XT1lW3VdO3JldHVybiBvW25dPWkscih0LHRoaXMsbyl9fWZ1bmN0aW9uIENlKHQsbil7cmV0dXJuIHQ9PT1ufHx0IT09dCYmbiE9PW59ZnVuY3Rpb24gemUodCl7cmV0dXJuICRlKHQpJiZXdS5jYWxsKHQsXCJjYWxsZWVcIikmJighcXUuY2FsbCh0LFwiY2FsbGVlXCIpfHxcIltvYmplY3QgQXJndW1lbnRzXVwiPT1NdS5jYWxsKHQpKX1mdW5jdGlvbiBVZSh0KXtyZXR1cm4gbnVsbCE9dCYmUGUoV28odCkpJiYhRmUodCl9ZnVuY3Rpb24gJGUodCl7cmV0dXJuIFRlKHQpJiZVZSh0KX1mdW5jdGlvbiBEZSh0KXtcblx0XHRyZXR1cm4gVGUodCk/XCJbb2JqZWN0IEVycm9yXVwiPT1NdS5jYWxsKHQpfHx0eXBlb2YgdC5tZXNzYWdlPT1cInN0cmluZ1wiJiZ0eXBlb2YgdC5uYW1lPT1cInN0cmluZ1wiOmZhbHNlfWZ1bmN0aW9uIEZlKHQpe3JldHVybiB0PVplKHQpP011LmNhbGwodCk6XCJcIixcIltvYmplY3QgRnVuY3Rpb25dXCI9PXR8fFwiW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl1cIj09dH1mdW5jdGlvbiBOZSh0KXtyZXR1cm4gdHlwZW9mIHQ9PVwibnVtYmVyXCImJnQ9PVhlKHQpfWZ1bmN0aW9uIFBlKHQpe3JldHVybiB0eXBlb2YgdD09XCJudW1iZXJcIiYmdD4tMSYmMD09dCUxJiY5MDA3MTk5MjU0NzQwOTkxPj10fWZ1bmN0aW9uIFplKHQpe3ZhciBuPXR5cGVvZiB0O3JldHVybiEhdCYmKFwib2JqZWN0XCI9PW58fFwiZnVuY3Rpb25cIj09bil9ZnVuY3Rpb24gVGUodCl7cmV0dXJuISF0JiZ0eXBlb2YgdD09XCJvYmplY3RcIn1mdW5jdGlvbiBxZSh0KXtyZXR1cm4gdHlwZW9mIHQ9PVwibnVtYmVyXCJ8fFRlKHQpJiZcIltvYmplY3QgTnVtYmVyXVwiPT1NdS5jYWxsKHQpO1xuXHR9ZnVuY3Rpb24gVmUodCl7cmV0dXJuIVRlKHQpfHxcIltvYmplY3QgT2JqZWN0XVwiIT1NdS5jYWxsKHQpfHxDKHQpP2ZhbHNlOih0PUp1KE9iamVjdCh0KSksbnVsbD09PXQ/dHJ1ZToodD1XdS5jYWxsKHQsXCJjb25zdHJ1Y3RvclwiKSYmdC5jb25zdHJ1Y3Rvcix0eXBlb2YgdD09XCJmdW5jdGlvblwiJiZ0IGluc3RhbmNlb2YgdCYmUnUuY2FsbCh0KT09THUpKX1mdW5jdGlvbiBLZSh0KXtyZXR1cm4gWmUodCkmJlwiW29iamVjdCBSZWdFeHBdXCI9PU11LmNhbGwodCl9ZnVuY3Rpb24gR2UodCl7cmV0dXJuIHR5cGVvZiB0PT1cInN0cmluZ1wifHwheWkodCkmJlRlKHQpJiZcIltvYmplY3QgU3RyaW5nXVwiPT1NdS5jYWxsKHQpfWZ1bmN0aW9uIEplKHQpe3JldHVybiB0eXBlb2YgdD09XCJzeW1ib2xcInx8VGUodCkmJlwiW29iamVjdCBTeW1ib2xdXCI9PU11LmNhbGwodCl9ZnVuY3Rpb24gWWUodCl7cmV0dXJuIFRlKHQpJiZQZSh0Lmxlbmd0aCkmJiEhTXRbTXUuY2FsbCh0KV19ZnVuY3Rpb24gSGUodCl7aWYoIXQpcmV0dXJuW107XG5cdFx0aWYoVWUodCkpcmV0dXJuIEdlKHQpP3QubWF0Y2goSXQpOmxyKHQpO2lmKFp1JiZ0W1p1XSlyZXR1cm4geih0W1p1XSgpKTt2YXIgbj1xcih0KTtyZXR1cm4oXCJbb2JqZWN0IE1hcF1cIj09bj9VOlwiW29iamVjdCBTZXRdXCI9PW4/RDpjdSkodCl9ZnVuY3Rpb24gUWUodCl7cmV0dXJuIHQ/KHQ9bnUodCksdD09PXF8fHQ9PT0tcT8xLjc5NzY5MzEzNDg2MjMxNTdlMzA4KigwPnQ/LTE6MSk6dD09PXQ/dDowKTowPT09dD90OjB9ZnVuY3Rpb24gWGUodCl7dD1RZSh0KTt2YXIgbj10JTE7cmV0dXJuIHQ9PT10P24/dC1uOnQ6MH1mdW5jdGlvbiB0dSh0KXtyZXR1cm4gdD9ubihYZSh0KSwwLDQyOTQ5NjcyOTUpOjB9ZnVuY3Rpb24gbnUodCl7aWYodHlwZW9mIHQ9PVwibnVtYmVyXCIpcmV0dXJuIHQ7aWYoSmUodCkpcmV0dXJuIFY7aWYoWmUodCkmJih0PUZlKHQudmFsdWVPZik/dC52YWx1ZU9mKCk6dCx0PVplKHQpP3QrXCJcIjp0KSx0eXBlb2YgdCE9XCJzdHJpbmdcIilyZXR1cm4gMD09PXQ/dDordDtcblx0XHR0PXQucmVwbGFjZShjdCxcIlwiKTt2YXIgbj1kdC50ZXN0KHQpO3JldHVybiBufHxidC50ZXN0KHQpP050KHQuc2xpY2UoMiksbj8yOjgpOmd0LnRlc3QodCk/VjordH1mdW5jdGlvbiBydSh0KXtyZXR1cm4gc3IodCxmdSh0KSl9ZnVuY3Rpb24gZXUodCl7cmV0dXJuIG51bGw9PXQ/XCJcIjpZbih0KX1mdW5jdGlvbiB1dSh0LG4scil7cmV0dXJuIHQ9bnVsbD09dD9UOnZuKHQsbiksdD09PVQ/cjp0fWZ1bmN0aW9uIG91KHQsbil7cmV0dXJuIG51bGwhPXQmJlZyKHQsbixibil9ZnVuY3Rpb24gaXUodCl7dmFyIG49ZWUodCk7aWYoIW4mJiFVZSh0KSlyZXR1cm4gUXUoT2JqZWN0KHQpKTt2YXIgcixlPVlyKHQpLHU9ISFlLGU9ZXx8W10sbz1lLmxlbmd0aDtmb3IociBpbiB0KSF5bih0LHIpfHx1JiYoXCJsZW5ndGhcIj09cnx8WHIocixvKSl8fG4mJlwiY29uc3RydWN0b3JcIj09cnx8ZS5wdXNoKHIpO3JldHVybiBlfWZ1bmN0aW9uIGZ1KHQpe2Zvcih2YXIgbj0tMSxyPWVlKHQpLGU9RW4odCksdT1lLmxlbmd0aCxvPVlyKHQpLGk9ISFvLG89b3x8W10sZj1vLmxlbmd0aDsrK248dTspe1xuXHRcdHZhciBjPWVbbl07aSYmKFwibGVuZ3RoXCI9PWN8fFhyKGMsZikpfHxcImNvbnN0cnVjdG9yXCI9PWMmJihyfHwhV3UuY2FsbCh0LGMpKXx8by5wdXNoKGMpfXJldHVybiBvfWZ1bmN0aW9uIGN1KHQpe3JldHVybiB0P2sodCxpdSh0KSk6W119ZnVuY3Rpb24gYXUodCl7cmV0dXJuIHFpKGV1KHQpLnRvTG93ZXJDYXNlKCkpfWZ1bmN0aW9uIGx1KHQpe3JldHVybih0PWV1KHQpKSYmdC5yZXBsYWNlKGp0LFcpLnJlcGxhY2UoU3QsXCJcIil9ZnVuY3Rpb24gc3UodCxuLHIpe3JldHVybiB0PWV1KHQpLG49cj9UOm4sbj09PVQmJihuPUJ0LnRlc3QodCk/UnQ6c3QpLHQubWF0Y2gobil8fFtdfWZ1bmN0aW9uIGh1KHQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0fX1mdW5jdGlvbiBwdSh0KXtyZXR1cm4gdH1mdW5jdGlvbiBfdSh0KXtyZXR1cm4ga24odHlwZW9mIHQ9PVwiZnVuY3Rpb25cIj90OnJuKHQsdHJ1ZSkpfWZ1bmN0aW9uIHZ1KHQsbixyKXt2YXIgZT1pdShuKSxvPV9uKG4sZSk7bnVsbCE9cnx8WmUobikmJihvLmxlbmd0aHx8IWUubGVuZ3RoKXx8KHI9bixcblx0XHRuPXQsdD10aGlzLG89X24obixpdShuKSkpO3ZhciBpPSEoWmUocikmJlwiY2hhaW5cImluIHImJiFyLmNoYWluKSxmPUZlKHQpO3JldHVybiB1KG8sZnVuY3Rpb24ocil7dmFyIGU9bltyXTt0W3JdPWUsZiYmKHQucHJvdG90eXBlW3JdPWZ1bmN0aW9uKCl7dmFyIG49dGhpcy5fX2NoYWluX187aWYoaXx8bil7dmFyIHI9dCh0aGlzLl9fd3JhcHBlZF9fKTtyZXR1cm4oci5fX2FjdGlvbnNfXz1scih0aGlzLl9fYWN0aW9uc19fKSkucHVzaCh7ZnVuYzplLGFyZ3M6YXJndW1lbnRzLHRoaXNBcmc6dH0pLHIuX19jaGFpbl9fPW4scn1yZXR1cm4gZS5hcHBseSh0LHMoW3RoaXMudmFsdWUoKV0sYXJndW1lbnRzKSl9KX0pLHR9ZnVuY3Rpb24gZ3UoKXt9ZnVuY3Rpb24gZHUodCl7cmV0dXJuIG5lKHQpP1VuKGZlKHQpKTokbih0KX1mdW5jdGlvbiB5dSgpe3JldHVybltdfWZ1bmN0aW9uIGJ1KCl7cmV0dXJuIGZhbHNlfVI9Uj9HdC5kZWZhdWx0cyh7fSxSLEd0LnBpY2soS3QsTHQpKTpLdDt2YXIgeHU9Ui5EYXRlLGp1PVIuRXJyb3Isd3U9Ui5NYXRoLG11PVIuUmVnRXhwLEF1PVIuVHlwZUVycm9yLE91PVIuQXJyYXkucHJvdG90eXBlLGt1PVIuT2JqZWN0LnByb3RvdHlwZSxFdT1SLlN0cmluZy5wcm90b3R5cGUsU3U9UltcIl9fY29yZS1qc19zaGFyZWRfX1wiXSxJdT1mdW5jdGlvbigpe1xuXHRcdHZhciB0PS9bXi5dKyQvLmV4ZWMoU3UmJlN1LmtleXMmJlN1LmtleXMuSUVfUFJPVE98fFwiXCIpO3JldHVybiB0P1wiU3ltYm9sKHNyYylfMS5cIit0OlwiXCJ9KCksUnU9Ui5GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcsV3U9a3UuaGFzT3duUHJvcGVydHksQnU9MCxMdT1SdS5jYWxsKE9iamVjdCksTXU9a3UudG9TdHJpbmcsQ3U9S3QuXyx6dT1tdShcIl5cIitSdS5jYWxsKFd1KS5yZXBsYWNlKGl0LFwiXFxcXCQmXCIpLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csXCIkMS4qP1wiKStcIiRcIiksVXU9VHQ/Ui5CdWZmZXI6VCwkdT1SLlJlZmxlY3QsRHU9Ui5TeW1ib2wsRnU9Ui5VaW50OEFycmF5LE51PSR1PyR1LmY6VCxQdT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFp1PXR5cGVvZihadT1EdSYmRHUuaXRlcmF0b3IpPT1cInN5bWJvbFwiP1p1OlQsVHU9T2JqZWN0LmNyZWF0ZSxxdT1rdS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxWdT1PdS5zcGxpY2UsS3U9d3UuY2VpbCxHdT13dS5mbG9vcixKdT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsWXU9Ui5pc0Zpbml0ZSxIdT1PdS5qb2luLFF1PU9iamVjdC5rZXlzLFh1PXd1Lm1heCx0bz13dS5taW4sbm89Ui5wYXJzZUludCxybz13dS5yYW5kb20sZW89RXUucmVwbGFjZSx1bz1PdS5yZXZlcnNlLG9vPUV1LnNwbGl0LGlvPVpyKFIsXCJEYXRhVmlld1wiKSxmbz1acihSLFwiTWFwXCIpLGNvPVpyKFIsXCJQcm9taXNlXCIpLGFvPVpyKFIsXCJTZXRcIiksbG89WnIoUixcIldlYWtNYXBcIiksc289WnIoT2JqZWN0LFwiY3JlYXRlXCIpLGhvPWxvJiZuZXcgbG8scG89IXF1LmNhbGwoe1xuXHRcdHZhbHVlT2Y6MX0sXCJ2YWx1ZU9mXCIpLF9vPXt9LHZvPWNlKGlvKSxnbz1jZShmbykseW89Y2UoY28pLGJvPWNlKGFvKSx4bz1jZShsbyksam89RHU/RHUucHJvdG90eXBlOlQsd289am8/am8udmFsdWVPZjpULG1vPWpvP2pvLnRvU3RyaW5nOlQ7T3QudGVtcGxhdGVTZXR0aW5ncz17ZXNjYXBlOnR0LGV2YWx1YXRlOm50LGludGVycG9sYXRlOnJ0LHZhcmlhYmxlOlwiXCIsaW1wb3J0czp7XzpPdH19LE90LnByb3RvdHlwZT1rdC5wcm90b3R5cGUsT3QucHJvdG90eXBlLmNvbnN0cnVjdG9yPU90LHp0LnByb3RvdHlwZT11bihrdC5wcm90b3R5cGUpLHp0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj16dCxVdC5wcm90b3R5cGU9dW4oa3QucHJvdG90eXBlKSxVdC5wcm90b3R5cGUuY29uc3RydWN0b3I9VXQsJHQucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fX2RhdGFfXz1zbz9zbyhudWxsKTp7fX0sJHQucHJvdG90eXBlW1wiZGVsZXRlXCJdPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmhhcyh0KSYmZGVsZXRlIHRoaXMuX19kYXRhX19bdF07XG5cdH0sJHQucHJvdG90eXBlLmdldD1mdW5jdGlvbih0KXt2YXIgbj10aGlzLl9fZGF0YV9fO3JldHVybiBzbz8odD1uW3RdLFwiX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfX1wiPT09dD9UOnQpOld1LmNhbGwobix0KT9uW3RdOlR9LCR0LnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7dmFyIG49dGhpcy5fX2RhdGFfXztyZXR1cm4gc28/blt0XSE9PVQ6V3UuY2FsbChuLHQpfSwkdC5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKHQsbil7cmV0dXJuIHRoaXMuX19kYXRhX19bdF09c28mJm49PT1UP1wiX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfX1wiOm4sdGhpc30sRHQucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fX2RhdGFfXz1bXX0sRHQucHJvdG90eXBlW1wiZGVsZXRlXCJdPWZ1bmN0aW9uKHQpe3ZhciBuPXRoaXMuX19kYXRhX187cmV0dXJuIHQ9SHQobix0KSwwPnQ/ZmFsc2U6KHQ9PW4ubGVuZ3RoLTE/bi5wb3AoKTpWdS5jYWxsKG4sdCwxKSx0cnVlKX0sRHQucHJvdG90eXBlLmdldD1mdW5jdGlvbih0KXtcblx0XHR2YXIgbj10aGlzLl9fZGF0YV9fO3JldHVybiB0PUh0KG4sdCksMD50P1Q6blt0XVsxXX0sRHQucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXtyZXR1cm4tMTxIdCh0aGlzLl9fZGF0YV9fLHQpfSxEdC5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKHQsbil7dmFyIHI9dGhpcy5fX2RhdGFfXyxlPUh0KHIsdCk7cmV0dXJuIDA+ZT9yLnB1c2goW3Qsbl0pOnJbZV1bMV09bix0aGlzfSxQdC5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9fZGF0YV9fPXtoYXNoOm5ldyAkdCxtYXA6bmV3KGZvfHxEdCksc3RyaW5nOm5ldyAkdH19LFB0LnByb3RvdHlwZVtcImRlbGV0ZVwiXT1mdW5jdGlvbih0KXtyZXR1cm4gTnIodGhpcyx0KVtcImRlbGV0ZVwiXSh0KX0sUHQucHJvdG90eXBlLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gTnIodGhpcyx0KS5nZXQodCl9LFB0LnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuIE5yKHRoaXMsdCkuaGFzKHQpfSxQdC5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKHQsbil7XG5cdFx0cmV0dXJuIE5yKHRoaXMsdCkuc2V0KHQsbiksdGhpc30sWnQucHJvdG90eXBlLmFkZD1adC5wcm90b3R5cGUucHVzaD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5zZXQodCxcIl9fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX19cIiksdGhpc30sWnQucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXModCl9LHF0LnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX19kYXRhX189bmV3IER0fSxxdC5wcm90b3R5cGVbXCJkZWxldGVcIl09ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX19kYXRhX19bXCJkZWxldGVcIl0odCl9LHF0LnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KHQpfSxxdC5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh0KX0scXQucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LG4pe3ZhciByPXRoaXMuX19kYXRhX187cmV0dXJuIHIgaW5zdGFuY2VvZiBEdCYmMjAwPT1yLl9fZGF0YV9fLmxlbmd0aCYmKHI9dGhpcy5fX2RhdGFfXz1uZXcgUHQoci5fX2RhdGFfXykpLFxuXHRcdHIuc2V0KHQsbiksdGhpc307dmFyIEFvPXZyKGhuKSxPbz12cihwbix0cnVlKSxrbz1ncigpLEVvPWdyKHRydWUpO051JiYhcXUuY2FsbCh7dmFsdWVPZjoxfSxcInZhbHVlT2ZcIikmJihFbj1mdW5jdGlvbih0KXtyZXR1cm4geihOdSh0KSl9KTt2YXIgU289aG8/ZnVuY3Rpb24odCxuKXtyZXR1cm4gaG8uc2V0KHQsbiksdH06cHUsSW89YW8mJjEvRChuZXcgYW8oWywtMF0pKVsxXT09cT9mdW5jdGlvbih0KXtyZXR1cm4gbmV3IGFvKHQpfTpndSxSbz1obz9mdW5jdGlvbih0KXtyZXR1cm4gaG8uZ2V0KHQpfTpndSxXbz1VbihcImxlbmd0aFwiKTtQdXx8KFRyPXl1KTt2YXIgQm89UHU/ZnVuY3Rpb24odCl7Zm9yKHZhciBuPVtdO3Q7KXMobixUcih0KSksdD1KdShPYmplY3QodCkpO3JldHVybiBufTpUcjsoaW8mJlwiW29iamVjdCBEYXRhVmlld11cIiE9cXIobmV3IGlvKG5ldyBBcnJheUJ1ZmZlcigxKSkpfHxmbyYmXCJbb2JqZWN0IE1hcF1cIiE9cXIobmV3IGZvKXx8Y28mJlwiW29iamVjdCBQcm9taXNlXVwiIT1xcihjby5yZXNvbHZlKCkpfHxhbyYmXCJbb2JqZWN0IFNldF1cIiE9cXIobmV3IGFvKXx8bG8mJlwiW29iamVjdCBXZWFrTWFwXVwiIT1xcihuZXcgbG8pKSYmKHFyPWZ1bmN0aW9uKHQpe1xuXHRcdHZhciBuPU11LmNhbGwodCk7aWYodD0odD1cIltvYmplY3QgT2JqZWN0XVwiPT1uP3QuY29uc3RydWN0b3I6VCk/Y2UodCk6VClzd2l0Y2godCl7Y2FzZSB2bzpyZXR1cm5cIltvYmplY3QgRGF0YVZpZXddXCI7Y2FzZSBnbzpyZXR1cm5cIltvYmplY3QgTWFwXVwiO2Nhc2UgeW86cmV0dXJuXCJbb2JqZWN0IFByb21pc2VdXCI7Y2FzZSBibzpyZXR1cm5cIltvYmplY3QgU2V0XVwiO2Nhc2UgeG86cmV0dXJuXCJbb2JqZWN0IFdlYWtNYXBdXCJ9cmV0dXJuIG59KTt2YXIgTG89U3U/RmU6YnUsTW89ZnVuY3Rpb24oKXt2YXIgdD0wLG49MDtyZXR1cm4gZnVuY3Rpb24ocixlKXt2YXIgdT1FZSgpLG89MTYtKHUtbik7aWYobj11LG8+MCl7aWYoMTUwPD0rK3QpcmV0dXJuIHJ9ZWxzZSB0PTA7cmV0dXJuIFNvKHIsZSl9fSgpLENvPUxlKGZ1bmN0aW9uKHQpe3ZhciBuPVtdO3JldHVybiBldSh0KS5yZXBsYWNlKG90LGZ1bmN0aW9uKHQscixlLHUpe24ucHVzaChlP3UucmVwbGFjZShodCxcIiQxXCIpOnJ8fHQpfSksXG5cdFx0bn0pLHpvPU1lKGZ1bmN0aW9uKHQsbil7cmV0dXJuICRlKHQpP2ZuKHQsc24obiwxLCRlLHRydWUpKTpbXX0pLFVvPU1lKGZ1bmN0aW9uKHQsbil7dmFyIHI9dmUobik7cmV0dXJuICRlKHIpJiYocj1UKSwkZSh0KT9mbih0LHNuKG4sMSwkZSx0cnVlKSxGcihyKSk6W119KSwkbz1NZShmdW5jdGlvbih0LG4pe3ZhciByPXZlKG4pO3JldHVybiAkZShyKSYmKHI9VCksJGUodCk/Zm4odCxzbihuLDEsJGUsdHJ1ZSksVCxyKTpbXX0pLERvPU1lKGZ1bmN0aW9uKHQpe3ZhciBuPWwodCxycik7cmV0dXJuIG4ubGVuZ3RoJiZuWzBdPT09dFswXT94bihuKTpbXX0pLEZvPU1lKGZ1bmN0aW9uKHQpe3ZhciBuPXZlKHQpLHI9bCh0LHJyKTtyZXR1cm4gbj09PXZlKHIpP249VDpyLnBvcCgpLHIubGVuZ3RoJiZyWzBdPT09dFswXT94bihyLEZyKG4pKTpbXX0pLE5vPU1lKGZ1bmN0aW9uKHQpe3ZhciBuPXZlKHQpLHI9bCh0LHJyKTtyZXR1cm4gbj09PXZlKHIpP249VDpyLnBvcCgpLHIubGVuZ3RoJiZyWzBdPT09dFswXT94bihyLFQsbik6W107XG5cdH0pLFBvPU1lKGdlKSxabz1NZShmdW5jdGlvbih0LG4pe249c24obiwxKTt2YXIgcj10P3QubGVuZ3RoOjAsZT10bih0LG4pO3JldHVybiBGbih0LGwobixmdW5jdGlvbih0KXtyZXR1cm4gWHIodCxyKT8rdDp0fSkuc29ydChmcikpLGV9KSxUbz1NZShmdW5jdGlvbih0KXtyZXR1cm4gSG4oc24odCwxLCRlLHRydWUpKX0pLHFvPU1lKGZ1bmN0aW9uKHQpe3ZhciBuPXZlKHQpO3JldHVybiAkZShuKSYmKG49VCksSG4oc24odCwxLCRlLHRydWUpLEZyKG4pKX0pLFZvPU1lKGZ1bmN0aW9uKHQpe3ZhciBuPXZlKHQpO3JldHVybiAkZShuKSYmKG49VCksSG4oc24odCwxLCRlLHRydWUpLFQsbil9KSxLbz1NZShmdW5jdGlvbih0LG4pe3JldHVybiAkZSh0KT9mbih0LG4pOltdfSksR289TWUoZnVuY3Rpb24odCl7cmV0dXJuIHRyKGYodCwkZSkpfSksSm89TWUoZnVuY3Rpb24odCl7dmFyIG49dmUodCk7cmV0dXJuICRlKG4pJiYobj1UKSx0cihmKHQsJGUpLEZyKG4pKX0pLFlvPU1lKGZ1bmN0aW9uKHQpe1xuXHRcdHZhciBuPXZlKHQpO3JldHVybiAkZShuKSYmKG49VCksdHIoZih0LCRlKSxULG4pfSksSG89TWUoeWUpLFFvPU1lKGZ1bmN0aW9uKHQpe3ZhciBuPXQubGVuZ3RoLG49bj4xP3Rbbi0xXTpULG49dHlwZW9mIG49PVwiZnVuY3Rpb25cIj8odC5wb3AoKSxuKTpUO3JldHVybiBiZSh0LG4pfSksWG89TWUoZnVuY3Rpb24odCl7ZnVuY3Rpb24gbihuKXtyZXR1cm4gdG4obix0KX10PXNuKHQsMSk7dmFyIHI9dC5sZW5ndGgsZT1yP3RbMF06MCx1PXRoaXMuX193cmFwcGVkX187cmV0dXJuIShyPjF8fHRoaXMuX19hY3Rpb25zX18ubGVuZ3RoKSYmdSBpbnN0YW5jZW9mIFV0JiZYcihlKT8odT11LnNsaWNlKGUsK2UrKHI/MTowKSksdS5fX2FjdGlvbnNfXy5wdXNoKHtmdW5jOmplLGFyZ3M6W25dLHRoaXNBcmc6VH0pLG5ldyB6dCh1LHRoaXMuX19jaGFpbl9fKS50aHJ1KGZ1bmN0aW9uKHQpe3JldHVybiByJiYhdC5sZW5ndGgmJnQucHVzaChUKSx0fSkpOnRoaXMudGhydShuKX0pLHRpPXByKGZ1bmN0aW9uKHQsbixyKXtcblx0XHRXdS5jYWxsKHQscik/Kyt0W3JdOnRbcl09MX0pLG5pPXdyKGhlKSxyaT13cihwZSksZWk9cHIoZnVuY3Rpb24odCxuLHIpe1d1LmNhbGwodCxyKT90W3JdLnB1c2gobik6dFtyXT1bbl19KSx1aT1NZShmdW5jdGlvbih0LG4sZSl7dmFyIHU9LTEsbz10eXBlb2Ygbj09XCJmdW5jdGlvblwiLGk9bmUobiksZj1VZSh0KT9BcnJheSh0Lmxlbmd0aCk6W107cmV0dXJuIEFvKHQsZnVuY3Rpb24odCl7dmFyIGM9bz9uOmkmJm51bGwhPXQ/dFtuXTpUO2ZbKyt1XT1jP3IoYyx0LGUpOnduKHQsbixlKX0pLGZ9KSxvaT1wcihmdW5jdGlvbih0LG4scil7dFtyXT1ufSksaWk9cHIoZnVuY3Rpb24odCxuLHIpe3Rbcj8wOjFdLnB1c2gobil9LGZ1bmN0aW9uKCl7cmV0dXJuW1tdLFtdXX0pLGZpPU1lKGZ1bmN0aW9uKHQsbil7aWYobnVsbD09dClyZXR1cm5bXTt2YXIgcj1uLmxlbmd0aDtyZXR1cm4gcj4xJiZ0ZSh0LG5bMF0sblsxXSk/bj1bXTpyPjImJnRlKG5bMF0sblsxXSxuWzJdKSYmKG49W25bMF1dKSxcblx0XHRuPTE9PW4ubGVuZ3RoJiZ5aShuWzBdKT9uWzBdOnNuKG4sMSxRciksTW4odCxuLFtdKX0pLGNpPU1lKGZ1bmN0aW9uKHQsbixyKXt2YXIgZT0xO2lmKHIubGVuZ3RoKXZhciB1PSQocixEcihjaSkpLGU9MzJ8ZTtyZXR1cm4gQ3IodCxlLG4scix1KX0pLGFpPU1lKGZ1bmN0aW9uKHQsbixyKXt2YXIgZT0zO2lmKHIubGVuZ3RoKXZhciB1PSQocixEcihhaSkpLGU9MzJ8ZTtyZXR1cm4gQ3IobixlLHQscix1KX0pLGxpPU1lKGZ1bmN0aW9uKHQsbil7cmV0dXJuIG9uKHQsMSxuKX0pLHNpPU1lKGZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gb24odCxudShuKXx8MCxyKX0pO0xlLkNhY2hlPVB0O3ZhciBoaT1NZShmdW5jdGlvbih0LG4pe249MT09bi5sZW5ndGgmJnlpKG5bMF0pP2woblswXSxPKEZyKCkpKTpsKHNuKG4sMSxRciksTyhGcigpKSk7dmFyIGU9bi5sZW5ndGg7cmV0dXJuIE1lKGZ1bmN0aW9uKHUpe2Zvcih2YXIgbz0tMSxpPXRvKHUubGVuZ3RoLGUpOysrbzxpOyl1W29dPW5bb10uY2FsbCh0aGlzLHVbb10pO1xuXHRcdHJldHVybiByKHQsdGhpcyx1KX0pfSkscGk9TWUoZnVuY3Rpb24odCxuKXt2YXIgcj0kKG4sRHIocGkpKTtyZXR1cm4gQ3IodCwzMixULG4scil9KSxfaT1NZShmdW5jdGlvbih0LG4pe3ZhciByPSQobixEcihfaSkpO3JldHVybiBDcih0LDY0LFQsbixyKX0pLHZpPU1lKGZ1bmN0aW9uKHQsbil7cmV0dXJuIENyKHQsMjU2LFQsVCxULHNuKG4sMSkpfSksZ2k9V3IoZG4pLGRpPVdyKGZ1bmN0aW9uKHQsbil7cmV0dXJuIHQ+PW59KSx5aT1BcnJheS5pc0FycmF5LGJpPVV1P2Z1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgVXV9OmJ1LHhpPVdyKFNuKSxqaT1XcihmdW5jdGlvbih0LG4pe3JldHVybiBuPj10fSksd2k9X3IoZnVuY3Rpb24odCxuKXtpZihwb3x8ZWUobil8fFVlKG4pKXNyKG4saXUobiksdCk7ZWxzZSBmb3IodmFyIHIgaW4gbilXdS5jYWxsKG4scikmJll0KHQscixuW3JdKX0pLG1pPV9yKGZ1bmN0aW9uKHQsbil7aWYocG98fGVlKG4pfHxVZShuKSlzcihuLGZ1KG4pLHQpO2Vsc2UgZm9yKHZhciByIGluIG4pWXQodCxyLG5bcl0pO1xuXHR9KSxBaT1fcihmdW5jdGlvbih0LG4scixlKXtzcihuLGZ1KG4pLHQsZSl9KSxPaT1fcihmdW5jdGlvbih0LG4scixlKXtzcihuLGl1KG4pLHQsZSl9KSxraT1NZShmdW5jdGlvbih0LG4pe3JldHVybiB0bih0LHNuKG4sMSkpfSksRWk9TWUoZnVuY3Rpb24odCl7cmV0dXJuIHQucHVzaChULFZ0KSxyKEFpLFQsdCl9KSxTaT1NZShmdW5jdGlvbih0KXtyZXR1cm4gdC5wdXNoKFQsb2UpLHIoTGksVCx0KX0pLElpPU9yKGZ1bmN0aW9uKHQsbixyKXt0W25dPXJ9LGh1KHB1KSksUmk9T3IoZnVuY3Rpb24odCxuLHIpe1d1LmNhbGwodCxuKT90W25dLnB1c2gocik6dFtuXT1bcl19LEZyKSxXaT1NZSh3biksQmk9X3IoZnVuY3Rpb24odCxuLHIpe0JuKHQsbixyKX0pLExpPV9yKGZ1bmN0aW9uKHQsbixyLGUpe0JuKHQsbixyLGUpfSksTWk9TWUoZnVuY3Rpb24odCxuKXtyZXR1cm4gbnVsbD09dD97fToobj1sKHNuKG4sMSksZmUpLENuKHQsZm4oZ24odCxmdSxCbyksbikpKX0pLENpPU1lKGZ1bmN0aW9uKHQsbil7XG5cdFx0cmV0dXJuIG51bGw9PXQ/e306Q24odCxsKHNuKG4sMSksZmUpKX0pLHppPU1yKGl1KSxVaT1NcihmdSksJGk9YnIoZnVuY3Rpb24odCxuLHIpe3JldHVybiBuPW4udG9Mb3dlckNhc2UoKSx0KyhyP2F1KG4pOm4pfSksRGk9YnIoZnVuY3Rpb24odCxuLHIpe3JldHVybiB0KyhyP1wiLVwiOlwiXCIpK24udG9Mb3dlckNhc2UoKX0pLEZpPWJyKGZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gdCsocj9cIiBcIjpcIlwiKStuLnRvTG93ZXJDYXNlKCl9KSxOaT15cihcInRvTG93ZXJDYXNlXCIpLFBpPWJyKGZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gdCsocj9cIl9cIjpcIlwiKStuLnRvTG93ZXJDYXNlKCl9KSxaaT1icihmdW5jdGlvbih0LG4scil7cmV0dXJuIHQrKHI/XCIgXCI6XCJcIikrcWkobil9KSxUaT1icihmdW5jdGlvbih0LG4scil7cmV0dXJuIHQrKHI/XCIgXCI6XCJcIikrbi50b1VwcGVyQ2FzZSgpfSkscWk9eXIoXCJ0b1VwcGVyQ2FzZVwiKSxWaT1NZShmdW5jdGlvbih0LG4pe3RyeXtyZXR1cm4gcih0LFQsbil9Y2F0Y2goZSl7XG5cdFx0cmV0dXJuIERlKGUpP2U6bmV3IGp1KGUpfX0pLEtpPU1lKGZ1bmN0aW9uKHQsbil7cmV0dXJuIHUoc24obiwxKSxmdW5jdGlvbihuKXtuPWZlKG4pLHRbbl09Y2kodFtuXSx0KX0pLHR9KSxHaT1tcigpLEppPW1yKHRydWUpLFlpPU1lKGZ1bmN0aW9uKHQsbil7cmV0dXJuIGZ1bmN0aW9uKHIpe3JldHVybiB3bihyLHQsbil9fSksSGk9TWUoZnVuY3Rpb24odCxuKXtyZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIHduKHQscixuKX19KSxRaT1FcihsKSxYaT1FcihpKSx0Zj1FcihfKSxuZj1ScigpLHJmPVJyKHRydWUpLGVmPWtyKGZ1bmN0aW9uKHQsbil7cmV0dXJuIHQrbn0pLHVmPUxyKFwiY2VpbFwiKSxvZj1rcihmdW5jdGlvbih0LG4pe3JldHVybiB0L259KSxmZj1McihcImZsb29yXCIpLGNmPWtyKGZ1bmN0aW9uKHQsbil7cmV0dXJuIHQqbn0pLGFmPUxyKFwicm91bmRcIiksbGY9a3IoZnVuY3Rpb24odCxuKXtyZXR1cm4gdC1ufSk7cmV0dXJuIE90LmFmdGVyPWZ1bmN0aW9uKHQsbil7aWYodHlwZW9mIG4hPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgQXUoXCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIpO1xuXHRcdHJldHVybiB0PVhlKHQpLGZ1bmN0aW9uKCl7cmV0dXJuIDE+LS10P24uYXBwbHkodGhpcyxhcmd1bWVudHMpOnZvaWQgMH19LE90LmFyeT1TZSxPdC5hc3NpZ249d2ksT3QuYXNzaWduSW49bWksT3QuYXNzaWduSW5XaXRoPUFpLE90LmFzc2lnbldpdGg9T2ksT3QuYXQ9a2ksT3QuYmVmb3JlPUllLE90LmJpbmQ9Y2ksT3QuYmluZEFsbD1LaSxPdC5iaW5kS2V5PWFpLE90LmNhc3RBcnJheT1mdW5jdGlvbigpe2lmKCFhcmd1bWVudHMubGVuZ3RoKXJldHVybltdO3ZhciB0PWFyZ3VtZW50c1swXTtyZXR1cm4geWkodCk/dDpbdF19LE90LmNoYWluPXhlLE90LmNodW5rPWZ1bmN0aW9uKHQsbixyKXtpZihuPShyP3RlKHQsbixyKTpuPT09VCk/MTpYdShYZShuKSwwKSxyPXQ/dC5sZW5ndGg6MCwhcnx8MT5uKXJldHVybltdO2Zvcih2YXIgZT0wLHU9MCxvPUFycmF5KEt1KHIvbikpO3I+ZTspb1t1KytdPVRuKHQsZSxlKz1uKTtyZXR1cm4gb30sT3QuY29tcGFjdD1mdW5jdGlvbih0KXtmb3IodmFyIG49LTEscj10P3QubGVuZ3RoOjAsZT0wLHU9W107KytuPHI7KXtcblx0XHR2YXIgbz10W25dO28mJih1W2UrK109byl9cmV0dXJuIHV9LE90LmNvbmNhdD1mdW5jdGlvbigpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49QXJyYXkodD90LTE6MCkscj1hcmd1bWVudHNbMF0sZT10O2UtLTspbltlLTFdPWFyZ3VtZW50c1tlXTtyZXR1cm4gdD9zKHlpKHIpP2xyKHIpOltyXSxzbihuLDEpKTpbXX0sT3QuY29uZD1mdW5jdGlvbih0KXt2YXIgbj10P3QubGVuZ3RoOjAsZT1GcigpO3JldHVybiB0PW4/bCh0LGZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHRbMV0pdGhyb3cgbmV3IEF1KFwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiKTtyZXR1cm5bZSh0WzBdKSx0WzFdXX0pOltdLE1lKGZ1bmN0aW9uKGUpe2Zvcih2YXIgdT0tMTsrK3U8bjspe3ZhciBvPXRbdV07aWYocihvWzBdLHRoaXMsZSkpcmV0dXJuIHIob1sxXSx0aGlzLGUpfX0pfSxPdC5jb25mb3Jtcz1mdW5jdGlvbih0KXtyZXR1cm4gZW4ocm4odCx0cnVlKSl9LE90LmNvbnN0YW50PWh1LE90LmNvdW50Qnk9dGksXG5cdFx0T3QuY3JlYXRlPWZ1bmN0aW9uKHQsbil7dmFyIHI9dW4odCk7cmV0dXJuIG4/WHQocixuKTpyfSxPdC5jdXJyeT1SZSxPdC5jdXJyeVJpZ2h0PVdlLE90LmRlYm91bmNlPUJlLE90LmRlZmF1bHRzPUVpLE90LmRlZmF1bHRzRGVlcD1TaSxPdC5kZWZlcj1saSxPdC5kZWxheT1zaSxPdC5kaWZmZXJlbmNlPXpvLE90LmRpZmZlcmVuY2VCeT1VbyxPdC5kaWZmZXJlbmNlV2l0aD0kbyxPdC5kcm9wPWxlLE90LmRyb3BSaWdodD1zZSxPdC5kcm9wUmlnaHRXaGlsZT1mdW5jdGlvbih0LG4pe3JldHVybiB0JiZ0Lmxlbmd0aD9Rbih0LEZyKG4sMyksdHJ1ZSx0cnVlKTpbXX0sT3QuZHJvcFdoaWxlPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQmJnQubGVuZ3RoP1FuKHQsRnIobiwzKSx0cnVlKTpbXX0sT3QuZmlsbD1mdW5jdGlvbih0LG4scixlKXt2YXIgdT10P3QubGVuZ3RoOjA7aWYoIXUpcmV0dXJuW107Zm9yKHImJnR5cGVvZiByIT1cIm51bWJlclwiJiZ0ZSh0LG4scikmJihyPTAsZT11KSx1PXQubGVuZ3RoLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgcj1YZShyKSwwPnImJihyPS1yPnU/MDp1K3IpLGU9ZT09PVR8fGU+dT91OlhlKGUpLDA+ZSYmKGUrPXUpLGU9cj5lPzA6dHUoZSk7ZT5yOyl0W3IrK109bjtyZXR1cm4gdH0sT3QuZmlsdGVyPWZ1bmN0aW9uKHQsbil7cmV0dXJuKHlpKHQpP2Y6bG4pKHQsRnIobiwzKSl9LE90LmZsYXRNYXA9ZnVuY3Rpb24odCxuKXtyZXR1cm4gc24oT2UodCxuKSwxKX0sT3QuZmxhdE1hcERlZXA9ZnVuY3Rpb24odCxuKXtyZXR1cm4gc24oT2UodCxuKSxxKX0sT3QuZmxhdE1hcERlcHRoPWZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gcj1yPT09VD8xOlhlKHIpLHNuKE9lKHQsbikscil9LE90LmZsYXR0ZW49ZnVuY3Rpb24odCl7cmV0dXJuIHQmJnQubGVuZ3RoP3NuKHQsMSk6W119LE90LmZsYXR0ZW5EZWVwPWZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0Lmxlbmd0aD9zbih0LHEpOltdfSxPdC5mbGF0dGVuRGVwdGg9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdCYmdC5sZW5ndGg/KG49bj09PVQ/MTpYZShuKSxzbih0LG4pKTpbXTtcblx0fSxPdC5mbGlwPWZ1bmN0aW9uKHQpe3JldHVybiBDcih0LDUxMil9LE90LmZsb3c9R2ksT3QuZmxvd1JpZ2h0PUppLE90LmZyb21QYWlycz1mdW5jdGlvbih0KXtmb3IodmFyIG49LTEscj10P3QubGVuZ3RoOjAsZT17fTsrK248cjspe3ZhciB1PXRbbl07ZVt1WzBdXT11WzFdfXJldHVybiBlfSxPdC5mdW5jdGlvbnM9ZnVuY3Rpb24odCl7cmV0dXJuIG51bGw9PXQ/W106X24odCxpdSh0KSl9LE90LmZ1bmN0aW9uc0luPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsPT10P1tdOl9uKHQsZnUodCkpfSxPdC5ncm91cEJ5PWVpLE90LmluaXRpYWw9ZnVuY3Rpb24odCl7cmV0dXJuIHNlKHQsMSl9LE90LmludGVyc2VjdGlvbj1EbyxPdC5pbnRlcnNlY3Rpb25CeT1GbyxPdC5pbnRlcnNlY3Rpb25XaXRoPU5vLE90LmludmVydD1JaSxPdC5pbnZlcnRCeT1SaSxPdC5pbnZva2VNYXA9dWksT3QuaXRlcmF0ZWU9X3UsT3Qua2V5Qnk9b2ksT3Qua2V5cz1pdSxPdC5rZXlzSW49ZnUsT3QubWFwPU9lLFxuXHRcdE90Lm1hcEtleXM9ZnVuY3Rpb24odCxuKXt2YXIgcj17fTtyZXR1cm4gbj1GcihuLDMpLGhuKHQsZnVuY3Rpb24odCxlLHUpe3Jbbih0LGUsdSldPXR9KSxyfSxPdC5tYXBWYWx1ZXM9ZnVuY3Rpb24odCxuKXt2YXIgcj17fTtyZXR1cm4gbj1GcihuLDMpLGhuKHQsZnVuY3Rpb24odCxlLHUpe3JbZV09bih0LGUsdSl9KSxyfSxPdC5tYXRjaGVzPWZ1bmN0aW9uKHQpe3JldHVybiBSbihybih0LHRydWUpKX0sT3QubWF0Y2hlc1Byb3BlcnR5PWZ1bmN0aW9uKHQsbil7cmV0dXJuIFduKHQscm4obix0cnVlKSl9LE90Lm1lbW9pemU9TGUsT3QubWVyZ2U9QmksT3QubWVyZ2VXaXRoPUxpLE90Lm1ldGhvZD1ZaSxPdC5tZXRob2RPZj1IaSxPdC5taXhpbj12dSxPdC5uZWdhdGU9ZnVuY3Rpb24odCl7aWYodHlwZW9mIHQhPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgQXUoXCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIpO3JldHVybiBmdW5jdGlvbigpe3JldHVybiF0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX19LE90Lm50aEFyZz1mdW5jdGlvbih0KXtcblx0XHRyZXR1cm4gdD1YZSh0KSxNZShmdW5jdGlvbihuKXtyZXR1cm4gTG4obix0KX0pfSxPdC5vbWl0PU1pLE90Lm9taXRCeT1mdW5jdGlvbih0LG4pe3JldHVybiBuPUZyKG4pLHpuKHQsZnVuY3Rpb24odCxyKXtyZXR1cm4hbih0LHIpfSl9LE90Lm9uY2U9ZnVuY3Rpb24odCl7cmV0dXJuIEllKDIsdCl9LE90Lm9yZGVyQnk9ZnVuY3Rpb24odCxuLHIsZSl7cmV0dXJuIG51bGw9PXQ/W106KHlpKG4pfHwobj1udWxsPT1uP1tdOltuXSkscj1lP1Q6cix5aShyKXx8KHI9bnVsbD09cj9bXTpbcl0pLE1uKHQsbixyKSl9LE90Lm92ZXI9UWksT3Qub3ZlckFyZ3M9aGksT3Qub3ZlckV2ZXJ5PVhpLE90Lm92ZXJTb21lPXRmLE90LnBhcnRpYWw9cGksT3QucGFydGlhbFJpZ2h0PV9pLE90LnBhcnRpdGlvbj1paSxPdC5waWNrPUNpLE90LnBpY2tCeT1mdW5jdGlvbih0LG4pe3JldHVybiBudWxsPT10P3t9OnpuKHQsRnIobikpfSxPdC5wcm9wZXJ0eT1kdSxPdC5wcm9wZXJ0eU9mPWZ1bmN0aW9uKHQpe1xuXHRcdHJldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gbnVsbD09dD9UOnZuKHQsbil9fSxPdC5wdWxsPVBvLE90LnB1bGxBbGw9Z2UsT3QucHVsbEFsbEJ5PWZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gdCYmdC5sZW5ndGgmJm4mJm4ubGVuZ3RoP0RuKHQsbixGcihyKSk6dH0sT3QucHVsbEFsbFdpdGg9ZnVuY3Rpb24odCxuLHIpe3JldHVybiB0JiZ0Lmxlbmd0aCYmbiYmbi5sZW5ndGg/RG4odCxuLFQscik6dH0sT3QucHVsbEF0PVpvLE90LnJhbmdlPW5mLE90LnJhbmdlUmlnaHQ9cmYsT3QucmVhcmc9dmksT3QucmVqZWN0PWZ1bmN0aW9uKHQsbil7dmFyIHI9eWkodCk/ZjpsbjtyZXR1cm4gbj1GcihuLDMpLHIodCxmdW5jdGlvbih0LHIsZSl7cmV0dXJuIW4odCxyLGUpfSl9LE90LnJlbW92ZT1mdW5jdGlvbih0LG4pe3ZhciByPVtdO2lmKCF0fHwhdC5sZW5ndGgpcmV0dXJuIHI7dmFyIGU9LTEsdT1bXSxvPXQubGVuZ3RoO2ZvcihuPUZyKG4sMyk7KytlPG87KXt2YXIgaT10W2VdO24oaSxlLHQpJiYoci5wdXNoKGkpLFxuXHRcdHUucHVzaChlKSl9cmV0dXJuIEZuKHQsdSkscn0sT3QucmVzdD1NZSxPdC5yZXZlcnNlPWRlLE90LnNhbXBsZVNpemU9a2UsT3Quc2V0PWZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gbnVsbD09dD90OlpuKHQsbixyKX0sT3Quc2V0V2l0aD1mdW5jdGlvbih0LG4scixlKXtyZXR1cm4gZT10eXBlb2YgZT09XCJmdW5jdGlvblwiP2U6VCxudWxsPT10P3Q6Wm4odCxuLHIsZSl9LE90LnNodWZmbGU9ZnVuY3Rpb24odCl7cmV0dXJuIGtlKHQsNDI5NDk2NzI5NSl9LE90LnNsaWNlPWZ1bmN0aW9uKHQsbixyKXt2YXIgZT10P3QubGVuZ3RoOjA7cmV0dXJuIGU/KHImJnR5cGVvZiByIT1cIm51bWJlclwiJiZ0ZSh0LG4scik/KG49MCxyPWUpOihuPW51bGw9PW4/MDpYZShuKSxyPXI9PT1UP2U6WGUocikpLFRuKHQsbixyKSk6W119LE90LnNvcnRCeT1maSxPdC5zb3J0ZWRVbmlxPWZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0Lmxlbmd0aD9Hbih0KTpbXX0sT3Quc29ydGVkVW5pcUJ5PWZ1bmN0aW9uKHQsbil7XG5cdFx0cmV0dXJuIHQmJnQubGVuZ3RoP0duKHQsRnIobikpOltdfSxPdC5zcGxpdD1mdW5jdGlvbih0LG4scil7cmV0dXJuIHImJnR5cGVvZiByIT1cIm51bWJlclwiJiZ0ZSh0LG4scikmJihuPXI9VCkscj1yPT09VD80Mjk0OTY3Mjk1OnI+Pj4wLHI/KHQ9ZXUodCkpJiYodHlwZW9mIG49PVwic3RyaW5nXCJ8fG51bGwhPW4mJiFLZShuKSkmJihuPVluKG4pLFwiXCI9PW4mJld0LnRlc3QodCkpP3VyKHQubWF0Y2goSXQpLDAscik6b28uY2FsbCh0LG4scik6W119LE90LnNwcmVhZD1mdW5jdGlvbih0LG4pe2lmKHR5cGVvZiB0IT1cImZ1bmN0aW9uXCIpdGhyb3cgbmV3IEF1KFwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiKTtyZXR1cm4gbj1uPT09VD8wOlh1KFhlKG4pLDApLE1lKGZ1bmN0aW9uKGUpe3ZhciB1PWVbbl07cmV0dXJuIGU9dXIoZSwwLG4pLHUmJnMoZSx1KSxyKHQsdGhpcyxlKX0pfSxPdC50YWlsPWZ1bmN0aW9uKHQpe3JldHVybiBsZSh0LDEpfSxPdC50YWtlPWZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gdCYmdC5sZW5ndGg/KG49cnx8bj09PVQ/MTpYZShuKSxcblx0XHRUbih0LDAsMD5uPzA6bikpOltdfSxPdC50YWtlUmlnaHQ9ZnVuY3Rpb24odCxuLHIpe3ZhciBlPXQ/dC5sZW5ndGg6MDtyZXR1cm4gZT8obj1yfHxuPT09VD8xOlhlKG4pLG49ZS1uLFRuKHQsMD5uPzA6bixlKSk6W119LE90LnRha2VSaWdodFdoaWxlPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQmJnQubGVuZ3RoP1FuKHQsRnIobiwzKSxmYWxzZSx0cnVlKTpbXX0sT3QudGFrZVdoaWxlPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQmJnQubGVuZ3RoP1FuKHQsRnIobiwzKSk6W119LE90LnRhcD1mdW5jdGlvbih0LG4pe3JldHVybiBuKHQpLHR9LE90LnRocm90dGxlPWZ1bmN0aW9uKHQsbixyKXt2YXIgZT10cnVlLHU9dHJ1ZTtpZih0eXBlb2YgdCE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBBdShcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7cmV0dXJuIFplKHIpJiYoZT1cImxlYWRpbmdcImluIHI/ISFyLmxlYWRpbmc6ZSx1PVwidHJhaWxpbmdcImluIHI/ISFyLnRyYWlsaW5nOnUpLEJlKHQsbix7bGVhZGluZzplLG1heFdhaXQ6bixcblx0XHR0cmFpbGluZzp1fSl9LE90LnRocnU9amUsT3QudG9BcnJheT1IZSxPdC50b1BhaXJzPXppLE90LnRvUGFpcnNJbj1VaSxPdC50b1BhdGg9ZnVuY3Rpb24odCl7cmV0dXJuIHlpKHQpP2wodCxmZSk6SmUodCk/W3RdOmxyKENvKHQpKX0sT3QudG9QbGFpbk9iamVjdD1ydSxPdC50cmFuc2Zvcm09ZnVuY3Rpb24odCxuLHIpe3ZhciBlPXlpKHQpfHxZZSh0KTtpZihuPUZyKG4sNCksbnVsbD09cilpZihlfHxaZSh0KSl7dmFyIG89dC5jb25zdHJ1Y3RvcjtyPWU/eWkodCk/bmV3IG86W106RmUobyk/dW4oSnUoT2JqZWN0KHQpKSk6e319ZWxzZSByPXt9O3JldHVybihlP3U6aG4pKHQsZnVuY3Rpb24odCxlLHUpe3JldHVybiBuKHIsdCxlLHUpfSkscn0sT3QudW5hcnk9ZnVuY3Rpb24odCl7cmV0dXJuIFNlKHQsMSl9LE90LnVuaW9uPVRvLE90LnVuaW9uQnk9cW8sT3QudW5pb25XaXRoPVZvLE90LnVuaXE9ZnVuY3Rpb24odCl7cmV0dXJuIHQmJnQubGVuZ3RoP0huKHQpOltdfSxPdC51bmlxQnk9ZnVuY3Rpb24odCxuKXtcblx0XHRyZXR1cm4gdCYmdC5sZW5ndGg/SG4odCxGcihuKSk6W119LE90LnVuaXFXaXRoPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQmJnQubGVuZ3RoP0huKHQsVCxuKTpbXX0sT3QudW5zZXQ9ZnVuY3Rpb24odCxuKXt2YXIgcjtpZihudWxsPT10KXI9dHJ1ZTtlbHNle3I9dDt2YXIgZT1uLGU9bmUoZSxyKT9bZV06ZXIoZSk7cj1pZShyLGUpLGU9ZmUodmUoZSkpLHI9IShudWxsIT1yJiZ5bihyLGUpKXx8ZGVsZXRlIHJbZV19cmV0dXJuIHJ9LE90LnVuemlwPXllLE90LnVuemlwV2l0aD1iZSxPdC51cGRhdGU9ZnVuY3Rpb24odCxuLHIpe3JldHVybiBudWxsPT10P3Q6Wm4odCxuLCh0eXBlb2Ygcj09XCJmdW5jdGlvblwiP3I6cHUpKHZuKHQsbikpLHZvaWQgMCl9LE90LnVwZGF0ZVdpdGg9ZnVuY3Rpb24odCxuLHIsZSl7cmV0dXJuIGU9dHlwZW9mIGU9PVwiZnVuY3Rpb25cIj9lOlQsbnVsbCE9dCYmKHQ9Wm4odCxuLCh0eXBlb2Ygcj09XCJmdW5jdGlvblwiP3I6cHUpKHZuKHQsbikpLGUpKSx0fSxPdC52YWx1ZXM9Y3UsXG5cdFx0T3QudmFsdWVzSW49ZnVuY3Rpb24odCl7cmV0dXJuIG51bGw9PXQ/W106ayh0LGZ1KHQpKX0sT3Qud2l0aG91dD1LbyxPdC53b3Jkcz1zdSxPdC53cmFwPWZ1bmN0aW9uKHQsbil7cmV0dXJuIG49bnVsbD09bj9wdTpuLHBpKG4sdCl9LE90Lnhvcj1HbyxPdC54b3JCeT1KbyxPdC54b3JXaXRoPVlvLE90LnppcD1IbyxPdC56aXBPYmplY3Q9ZnVuY3Rpb24odCxuKXtyZXR1cm4gbnIodHx8W10sbnx8W10sWXQpfSxPdC56aXBPYmplY3REZWVwPWZ1bmN0aW9uKHQsbil7cmV0dXJuIG5yKHR8fFtdLG58fFtdLFpuKX0sT3QuemlwV2l0aD1RbyxPdC5lbnRyaWVzPXppLE90LmVudHJpZXNJbj1VaSxPdC5leHRlbmQ9bWksT3QuZXh0ZW5kV2l0aD1BaSx2dShPdCxPdCksT3QuYWRkPWVmLE90LmF0dGVtcHQ9VmksT3QuY2FtZWxDYXNlPSRpLE90LmNhcGl0YWxpemU9YXUsT3QuY2VpbD11ZixPdC5jbGFtcD1mdW5jdGlvbih0LG4scil7cmV0dXJuIHI9PT1UJiYocj1uLG49VCksciE9PVQmJihyPW51KHIpLFxuXHRcdFx0cj1yPT09cj9yOjApLG4hPT1UJiYobj1udShuKSxuPW49PT1uP246MCksbm4obnUodCksbixyKX0sT3QuY2xvbmU9ZnVuY3Rpb24odCl7cmV0dXJuIHJuKHQsZmFsc2UsdHJ1ZSl9LE90LmNsb25lRGVlcD1mdW5jdGlvbih0KXtyZXR1cm4gcm4odCx0cnVlLHRydWUpfSxPdC5jbG9uZURlZXBXaXRoPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHJuKHQsdHJ1ZSx0cnVlLG4pfSxPdC5jbG9uZVdpdGg9ZnVuY3Rpb24odCxuKXtyZXR1cm4gcm4odCxmYWxzZSx0cnVlLG4pfSxPdC5kZWJ1cnI9bHUsT3QuZGl2aWRlPW9mLE90LmVuZHNXaXRoPWZ1bmN0aW9uKHQsbixyKXt0PWV1KHQpLG49WW4obik7dmFyIGU9dC5sZW5ndGg7cmV0dXJuIHI9cj09PVQ/ZTpubihYZShyKSwwLGUpLHItPW4ubGVuZ3RoLHI+PTAmJnQuaW5kZXhPZihuLHIpPT1yfSxPdC5lcT1DZSxPdC5lc2NhcGU9ZnVuY3Rpb24odCl7cmV0dXJuKHQ9ZXUodCkpJiZYLnRlc3QodCk/dC5yZXBsYWNlKEgsQik6dH0sT3QuZXNjYXBlUmVnRXhwPWZ1bmN0aW9uKHQpe1xuXHRcdFx0cmV0dXJuKHQ9ZXUodCkpJiZmdC50ZXN0KHQpP3QucmVwbGFjZShpdCxcIlxcXFwkJlwiKTp0fSxPdC5ldmVyeT1mdW5jdGlvbih0LG4scil7dmFyIGU9eWkodCk/aTpjbjtyZXR1cm4gciYmdGUodCxuLHIpJiYobj1UKSxlKHQsRnIobiwzKSl9LE90LmZpbmQ9bmksT3QuZmluZEluZGV4PWhlLE90LmZpbmRLZXk9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdih0LEZyKG4sMyksaG4pfSxPdC5maW5kTGFzdD1yaSxPdC5maW5kTGFzdEluZGV4PXBlLE90LmZpbmRMYXN0S2V5PWZ1bmN0aW9uKHQsbil7cmV0dXJuIHYodCxGcihuLDMpLHBuKX0sT3QuZmxvb3I9ZmYsT3QuZm9yRWFjaD1tZSxPdC5mb3JFYWNoUmlnaHQ9QWUsT3QuZm9ySW49ZnVuY3Rpb24odCxuKXtyZXR1cm4gbnVsbD09dD90OmtvKHQsRnIobiwzKSxmdSl9LE90LmZvckluUmlnaHQ9ZnVuY3Rpb24odCxuKXtyZXR1cm4gbnVsbD09dD90OkVvKHQsRnIobiwzKSxmdSl9LE90LmZvck93bj1mdW5jdGlvbih0LG4pe3JldHVybiB0JiZobih0LEZyKG4sMykpO1xuXHRcdH0sT3QuZm9yT3duUmlnaHQ9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdCYmcG4odCxGcihuLDMpKX0sT3QuZ2V0PXV1LE90Lmd0PWdpLE90Lmd0ZT1kaSxPdC5oYXM9ZnVuY3Rpb24odCxuKXtyZXR1cm4gbnVsbCE9dCYmVnIodCxuLHluKX0sT3QuaGFzSW49b3UsT3QuaGVhZD1fZSxPdC5pZGVudGl0eT1wdSxPdC5pbmNsdWRlcz1mdW5jdGlvbih0LG4scixlKXtyZXR1cm4gdD1VZSh0KT90OmN1KHQpLHI9ciYmIWU/WGUocik6MCxlPXQubGVuZ3RoLDA+ciYmKHI9WHUoZStyLDApKSxHZSh0KT9lPj1yJiYtMTx0LmluZGV4T2YobixyKTohIWUmJi0xPGQodCxuLHIpfSxPdC5pbmRleE9mPWZ1bmN0aW9uKHQsbixyKXt2YXIgZT10P3QubGVuZ3RoOjA7cmV0dXJuIGU/KHI9bnVsbD09cj8wOlhlKHIpLDA+ciYmKHI9WHUoZStyLDApKSxkKHQsbixyKSk6LTF9LE90LmluUmFuZ2U9ZnVuY3Rpb24odCxuLHIpe3JldHVybiBuPW51KG4pfHwwLHI9PT1UPyhyPW4sbj0wKTpyPW51KHIpfHwwLHQ9bnUodCksXG5cdFx0dD49dG8obixyKSYmdDxYdShuLHIpfSxPdC5pbnZva2U9V2ksT3QuaXNBcmd1bWVudHM9emUsT3QuaXNBcnJheT15aSxPdC5pc0FycmF5QnVmZmVyPWZ1bmN0aW9uKHQpe3JldHVybiBUZSh0KSYmXCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiPT1NdS5jYWxsKHQpfSxPdC5pc0FycmF5TGlrZT1VZSxPdC5pc0FycmF5TGlrZU9iamVjdD0kZSxPdC5pc0Jvb2xlYW49ZnVuY3Rpb24odCl7cmV0dXJuIHRydWU9PT10fHxmYWxzZT09PXR8fFRlKHQpJiZcIltvYmplY3QgQm9vbGVhbl1cIj09TXUuY2FsbCh0KX0sT3QuaXNCdWZmZXI9YmksT3QuaXNEYXRlPWZ1bmN0aW9uKHQpe3JldHVybiBUZSh0KSYmXCJbb2JqZWN0IERhdGVdXCI9PU11LmNhbGwodCl9LE90LmlzRWxlbWVudD1mdW5jdGlvbih0KXtyZXR1cm4hIXQmJjE9PT10Lm5vZGVUeXBlJiZUZSh0KSYmIVZlKHQpfSxPdC5pc0VtcHR5PWZ1bmN0aW9uKHQpe2lmKFVlKHQpJiYoeWkodCl8fEdlKHQpfHxGZSh0LnNwbGljZSl8fHplKHQpfHxiaSh0KSkpcmV0dXJuIXQubGVuZ3RoO1xuXHRcdFx0aWYoVGUodCkpe3ZhciBuPXFyKHQpO2lmKFwiW29iamVjdCBNYXBdXCI9PW58fFwiW29iamVjdCBTZXRdXCI9PW4pcmV0dXJuIXQuc2l6ZX1mb3IodmFyIHIgaW4gdClpZihXdS5jYWxsKHQscikpcmV0dXJuIGZhbHNlO3JldHVybiEocG8mJml1KHQpLmxlbmd0aCl9LE90LmlzRXF1YWw9ZnVuY3Rpb24odCxuKXtyZXR1cm4gbW4odCxuKX0sT3QuaXNFcXVhbFdpdGg9ZnVuY3Rpb24odCxuLHIpe3ZhciBlPShyPXR5cGVvZiByPT1cImZ1bmN0aW9uXCI/cjpUKT9yKHQsbik6VDtyZXR1cm4gZT09PVQ/bW4odCxuLHIpOiEhZX0sT3QuaXNFcnJvcj1EZSxPdC5pc0Zpbml0ZT1mdW5jdGlvbih0KXtyZXR1cm4gdHlwZW9mIHQ9PVwibnVtYmVyXCImJll1KHQpfSxPdC5pc0Z1bmN0aW9uPUZlLE90LmlzSW50ZWdlcj1OZSxPdC5pc0xlbmd0aD1QZSxPdC5pc01hcD1mdW5jdGlvbih0KXtyZXR1cm4gVGUodCkmJlwiW29iamVjdCBNYXBdXCI9PXFyKHQpfSxPdC5pc01hdGNoPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQ9PT1ufHxBbih0LG4sUHIobikpO1xuXHRcdH0sT3QuaXNNYXRjaFdpdGg9ZnVuY3Rpb24odCxuLHIpe3JldHVybiByPXR5cGVvZiByPT1cImZ1bmN0aW9uXCI/cjpULEFuKHQsbixQcihuKSxyKX0sT3QuaXNOYU49ZnVuY3Rpb24odCl7cmV0dXJuIHFlKHQpJiZ0IT0rdH0sT3QuaXNOYXRpdmU9ZnVuY3Rpb24odCl7aWYoTG8odCkpdGhyb3cgbmV3IGp1KFwiVGhpcyBtZXRob2QgaXMgbm90IHN1cHBvcnRlZCB3aXRoIGBjb3JlLWpzYC4gVHJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy5cIik7cmV0dXJuIE9uKHQpfSxPdC5pc05pbD1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbD09dH0sT3QuaXNOdWxsPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsPT09dH0sT3QuaXNOdW1iZXI9cWUsT3QuaXNPYmplY3Q9WmUsT3QuaXNPYmplY3RMaWtlPVRlLE90LmlzUGxhaW5PYmplY3Q9VmUsT3QuaXNSZWdFeHA9S2UsT3QuaXNTYWZlSW50ZWdlcj1mdW5jdGlvbih0KXtyZXR1cm4gTmUodCkmJnQ+PS05MDA3MTk5MjU0NzQwOTkxJiY5MDA3MTk5MjU0NzQwOTkxPj10O1xuXHRcdH0sT3QuaXNTZXQ9ZnVuY3Rpb24odCl7cmV0dXJuIFRlKHQpJiZcIltvYmplY3QgU2V0XVwiPT1xcih0KX0sT3QuaXNTdHJpbmc9R2UsT3QuaXNTeW1ib2w9SmUsT3QuaXNUeXBlZEFycmF5PVllLE90LmlzVW5kZWZpbmVkPWZ1bmN0aW9uKHQpe3JldHVybiB0PT09VH0sT3QuaXNXZWFrTWFwPWZ1bmN0aW9uKHQpe3JldHVybiBUZSh0KSYmXCJbb2JqZWN0IFdlYWtNYXBdXCI9PXFyKHQpfSxPdC5pc1dlYWtTZXQ9ZnVuY3Rpb24odCl7cmV0dXJuIFRlKHQpJiZcIltvYmplY3QgV2Vha1NldF1cIj09TXUuY2FsbCh0KX0sT3Quam9pbj1mdW5jdGlvbih0LG4pe3JldHVybiB0P0h1LmNhbGwodCxuKTpcIlwifSxPdC5rZWJhYkNhc2U9RGksT3QubGFzdD12ZSxPdC5sYXN0SW5kZXhPZj1mdW5jdGlvbih0LG4scil7dmFyIGU9dD90Lmxlbmd0aDowO2lmKCFlKXJldHVybi0xO3ZhciB1PWU7aWYociE9PVQmJih1PVhlKHIpLHU9KDA+dT9YdShlK3UsMCk6dG8odSxlLTEpKSsxKSxuIT09bilyZXR1cm4gTSh0LHUtMSx0cnVlKTtcblx0XHRcdGZvcig7dS0tOylpZih0W3VdPT09bilyZXR1cm4gdTtyZXR1cm4tMX0sT3QubG93ZXJDYXNlPUZpLE90Lmxvd2VyRmlyc3Q9TmksT3QubHQ9eGksT3QubHRlPWppLE90Lm1heD1mdW5jdGlvbih0KXtyZXR1cm4gdCYmdC5sZW5ndGg/YW4odCxwdSxkbik6VH0sT3QubWF4Qnk9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdCYmdC5sZW5ndGg/YW4odCxGcihuKSxkbik6VH0sT3QubWVhbj1mdW5jdGlvbih0KXtyZXR1cm4gYih0LHB1KX0sT3QubWVhbkJ5PWZ1bmN0aW9uKHQsbil7cmV0dXJuIGIodCxGcihuKSl9LE90Lm1pbj1mdW5jdGlvbih0KXtyZXR1cm4gdCYmdC5sZW5ndGg/YW4odCxwdSxTbik6VH0sT3QubWluQnk9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdCYmdC5sZW5ndGg/YW4odCxGcihuKSxTbik6VH0sT3Quc3R1YkFycmF5PXl1LE90LnN0dWJGYWxzZT1idSxPdC5zdHViT2JqZWN0PWZ1bmN0aW9uKCl7cmV0dXJue319LE90LnN0dWJTdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIlwifSxPdC5zdHViVHJ1ZT1mdW5jdGlvbigpe1xuXHRcdFx0cmV0dXJuIHRydWV9LE90Lm11bHRpcGx5PWNmLE90Lm50aD1mdW5jdGlvbih0LG4pe3JldHVybiB0JiZ0Lmxlbmd0aD9Mbih0LFhlKG4pKTpUfSxPdC5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIEt0Ll89PT10aGlzJiYoS3QuXz1DdSksdGhpc30sT3Qubm9vcD1ndSxPdC5ub3c9RWUsT3QucGFkPWZ1bmN0aW9uKHQsbixyKXt0PWV1KHQpO3ZhciBlPShuPVhlKG4pKT9OKHQpOjA7cmV0dXJuIW58fGU+PW4/dDoobj0obi1lKS8yLFNyKEd1KG4pLHIpK3QrU3IoS3UobikscikpfSxPdC5wYWRFbmQ9ZnVuY3Rpb24odCxuLHIpe3Q9ZXUodCk7dmFyIGU9KG49WGUobikpP04odCk6MDtyZXR1cm4gbiYmbj5lP3QrU3Iobi1lLHIpOnR9LE90LnBhZFN0YXJ0PWZ1bmN0aW9uKHQsbixyKXt0PWV1KHQpO3ZhciBlPShuPVhlKG4pKT9OKHQpOjA7cmV0dXJuIG4mJm4+ZT9TcihuLWUscikrdDp0fSxPdC5wYXJzZUludD1mdW5jdGlvbih0LG4scil7cmV0dXJuIHJ8fG51bGw9PW4/bj0wOm4mJihuPStuKSxcblx0XHRcdHQ9ZXUodCkucmVwbGFjZShjdCxcIlwiKSxubyh0LG58fCh2dC50ZXN0KHQpPzE2OjEwKSl9LE90LnJhbmRvbT1mdW5jdGlvbih0LG4scil7aWYociYmdHlwZW9mIHIhPVwiYm9vbGVhblwiJiZ0ZSh0LG4scikmJihuPXI9VCkscj09PVQmJih0eXBlb2Ygbj09XCJib29sZWFuXCI/KHI9bixuPVQpOnR5cGVvZiB0PT1cImJvb2xlYW5cIiYmKHI9dCx0PVQpKSx0PT09VCYmbj09PVQ/KHQ9MCxuPTEpOih0PW51KHQpfHwwLG49PT1UPyhuPXQsdD0wKTpuPW51KG4pfHwwKSx0Pm4pe3ZhciBlPXQ7dD1uLG49ZX1yZXR1cm4gcnx8dCUxfHxuJTE/KHI9cm8oKSx0byh0K3IqKG4tdCtGdChcIjFlLVwiKygocitcIlwiKS5sZW5ndGgtMSkpKSxuKSk6Tm4odCxuKX0sT3QucmVkdWNlPWZ1bmN0aW9uKHQsbixyKXt2YXIgZT15aSh0KT9oOngsdT0zPmFyZ3VtZW50cy5sZW5ndGg7cmV0dXJuIGUodCxGcihuLDQpLHIsdSxBbyl9LE90LnJlZHVjZVJpZ2h0PWZ1bmN0aW9uKHQsbixyKXt2YXIgZT15aSh0KT9wOngsdT0zPmFyZ3VtZW50cy5sZW5ndGg7XG5cdFx0XHRyZXR1cm4gZSh0LEZyKG4sNCkscix1LE9vKX0sT3QucmVwZWF0PWZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gbj0ocj90ZSh0LG4scik6bj09PVQpPzE6WGUobiksUG4oZXUodCksbil9LE90LnJlcGxhY2U9ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMsbj1ldSh0WzBdKTtyZXR1cm4gMz50Lmxlbmd0aD9uOmVvLmNhbGwobix0WzFdLHRbMl0pfSxPdC5yZXN1bHQ9ZnVuY3Rpb24odCxuLHIpe249bmUobix0KT9bbl06ZXIobik7dmFyIGU9LTEsdT1uLmxlbmd0aDtmb3IodXx8KHQ9VCx1PTEpOysrZTx1Oyl7dmFyIG89bnVsbD09dD9UOnRbZmUobltlXSldO289PT1UJiYoZT11LG89ciksdD1GZShvKT9vLmNhbGwodCk6b31yZXR1cm4gdH0sT3Qucm91bmQ9YWYsT3QucnVuSW5Db250ZXh0PVosT3Quc2FtcGxlPWZ1bmN0aW9uKHQpe3Q9VWUodCk/dDpjdSh0KTt2YXIgbj10Lmxlbmd0aDtyZXR1cm4gbj4wP3RbTm4oMCxuLTEpXTpUfSxPdC5zaXplPWZ1bmN0aW9uKHQpe2lmKG51bGw9PXQpcmV0dXJuIDA7XG5cdFx0XHRpZihVZSh0KSl7dmFyIG49dC5sZW5ndGg7cmV0dXJuIG4mJkdlKHQpP04odCk6bn1yZXR1cm4gVGUodCkmJihuPXFyKHQpLFwiW29iamVjdCBNYXBdXCI9PW58fFwiW29iamVjdCBTZXRdXCI9PW4pP3Quc2l6ZTppdSh0KS5sZW5ndGh9LE90LnNuYWtlQ2FzZT1QaSxPdC5zb21lPWZ1bmN0aW9uKHQsbixyKXt2YXIgZT15aSh0KT9fOnFuO3JldHVybiByJiZ0ZSh0LG4scikmJihuPVQpLGUodCxGcihuLDMpKX0sT3Quc29ydGVkSW5kZXg9ZnVuY3Rpb24odCxuKXtyZXR1cm4gVm4odCxuKX0sT3Quc29ydGVkSW5kZXhCeT1mdW5jdGlvbih0LG4scil7cmV0dXJuIEtuKHQsbixGcihyKSl9LE90LnNvcnRlZEluZGV4T2Y9ZnVuY3Rpb24odCxuKXt2YXIgcj10P3QubGVuZ3RoOjA7aWYocil7dmFyIGU9Vm4odCxuKTtpZihyPmUmJkNlKHRbZV0sbikpcmV0dXJuIGV9cmV0dXJuLTF9LE90LnNvcnRlZExhc3RJbmRleD1mdW5jdGlvbih0LG4pe3JldHVybiBWbih0LG4sdHJ1ZSl9LE90LnNvcnRlZExhc3RJbmRleEJ5PWZ1bmN0aW9uKHQsbixyKXtcblx0XHRcdHJldHVybiBLbih0LG4sRnIociksdHJ1ZSl9LE90LnNvcnRlZExhc3RJbmRleE9mPWZ1bmN0aW9uKHQsbil7aWYodCYmdC5sZW5ndGgpe3ZhciByPVZuKHQsbix0cnVlKS0xO2lmKENlKHRbcl0sbikpcmV0dXJuIHJ9cmV0dXJuLTF9LE90LnN0YXJ0Q2FzZT1aaSxPdC5zdGFydHNXaXRoPWZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gdD1ldSh0KSxyPW5uKFhlKHIpLDAsdC5sZW5ndGgpLHQubGFzdEluZGV4T2YoWW4obikscik9PXJ9LE90LnN1YnRyYWN0PWxmLE90LnN1bT1mdW5jdGlvbih0KXtyZXR1cm4gdCYmdC5sZW5ndGg/dyh0LHB1KTowfSxPdC5zdW1CeT1mdW5jdGlvbih0LG4pe3JldHVybiB0JiZ0Lmxlbmd0aD93KHQsRnIobikpOjB9LE90LnRlbXBsYXRlPWZ1bmN0aW9uKHQsbixyKXt2YXIgZT1PdC50ZW1wbGF0ZVNldHRpbmdzO3ImJnRlKHQsbixyKSYmKG49VCksdD1ldSh0KSxuPUFpKHt9LG4sZSxWdCkscj1BaSh7fSxuLmltcG9ydHMsZS5pbXBvcnRzLFZ0KTt2YXIgdSxvLGk9aXUociksZj1rKHIsaSksYz0wO1xuXHRcdFx0cj1uLmludGVycG9sYXRlfHx3dDt2YXIgYT1cIl9fcCs9J1wiO3I9bXUoKG4uZXNjYXBlfHx3dCkuc291cmNlK1wifFwiK3Iuc291cmNlK1wifFwiKyhyPT09cnQ/cHQ6d3QpLnNvdXJjZStcInxcIisobi5ldmFsdWF0ZXx8d3QpLnNvdXJjZStcInwkXCIsXCJnXCIpO3ZhciBsPVwic291cmNlVVJMXCJpbiBuP1wiLy8jIHNvdXJjZVVSTD1cIituLnNvdXJjZVVSTCtcIlxcblwiOlwiXCI7aWYodC5yZXBsYWNlKHIsZnVuY3Rpb24obixyLGUsaSxmLGwpe3JldHVybiBlfHwoZT1pKSxhKz10LnNsaWNlKGMsbCkucmVwbGFjZShtdCxMKSxyJiYodT10cnVlLGErPVwiJytfX2UoXCIrcitcIikrJ1wiKSxmJiYobz10cnVlLGErPVwiJztcIitmK1wiO1xcbl9fcCs9J1wiKSxlJiYoYSs9XCInKygoX190PShcIitlK1wiKSk9PW51bGw/Jyc6X190KSsnXCIpLGM9bCtuLmxlbmd0aCxufSksYSs9XCInO1wiLChuPW4udmFyaWFibGUpfHwoYT1cIndpdGgob2JqKXtcIithK1wifVwiKSxhPShvP2EucmVwbGFjZShLLFwiXCIpOmEpLnJlcGxhY2UoRyxcIiQxXCIpLnJlcGxhY2UoSixcIiQxO1wiKSxcblx0XHRcdFx0XHRhPVwiZnVuY3Rpb24oXCIrKG58fFwib2JqXCIpK1wiKXtcIisobj9cIlwiOlwib2JqfHwob2JqPXt9KTtcIikrXCJ2YXIgX190LF9fcD0nJ1wiKyh1P1wiLF9fZT1fLmVzY2FwZVwiOlwiXCIpKyhvP1wiLF9faj1BcnJheS5wcm90b3R5cGUuam9pbjtmdW5jdGlvbiBwcmludCgpe19fcCs9X19qLmNhbGwoYXJndW1lbnRzLCcnKX1cIjpcIjtcIikrYStcInJldHVybiBfX3B9XCIsbj1WaShmdW5jdGlvbigpe3JldHVybiBGdW5jdGlvbihpLGwrXCJyZXR1cm4gXCIrYSkuYXBwbHkoVCxmKX0pLG4uc291cmNlPWEsRGUobikpdGhyb3cgbjtyZXR1cm4gbn0sT3QudGltZXM9ZnVuY3Rpb24odCxuKXtpZih0PVhlKHQpLDE+dHx8dD45MDA3MTk5MjU0NzQwOTkxKXJldHVybltdO3ZhciByPTQyOTQ5NjcyOTUsZT10byh0LDQyOTQ5NjcyOTUpO2ZvcihuPUZyKG4pLHQtPTQyOTQ5NjcyOTUsZT1tKGUsbik7KytyPHQ7KW4ocik7cmV0dXJuIGV9LE90LnRvRmluaXRlPVFlLE90LnRvSW50ZWdlcj1YZSxPdC50b0xlbmd0aD10dSxPdC50b0xvd2VyPWZ1bmN0aW9uKHQpe1xuXHRcdFx0cmV0dXJuIGV1KHQpLnRvTG93ZXJDYXNlKCl9LE90LnRvTnVtYmVyPW51LE90LnRvU2FmZUludGVnZXI9ZnVuY3Rpb24odCl7cmV0dXJuIG5uKFhlKHQpLC05MDA3MTk5MjU0NzQwOTkxLDkwMDcxOTkyNTQ3NDA5OTEpfSxPdC50b1N0cmluZz1ldSxPdC50b1VwcGVyPWZ1bmN0aW9uKHQpe3JldHVybiBldSh0KS50b1VwcGVyQ2FzZSgpfSxPdC50cmltPWZ1bmN0aW9uKHQsbixyKXtyZXR1cm4odD1ldSh0KSkmJihyfHxuPT09VCk/dC5yZXBsYWNlKGN0LFwiXCIpOnQmJihuPVluKG4pKT8odD10Lm1hdGNoKEl0KSxuPW4ubWF0Y2goSXQpLHVyKHQsUyh0LG4pLEkodCxuKSsxKS5qb2luKFwiXCIpKTp0fSxPdC50cmltRW5kPWZ1bmN0aW9uKHQsbixyKXtyZXR1cm4odD1ldSh0KSkmJihyfHxuPT09VCk/dC5yZXBsYWNlKGx0LFwiXCIpOnQmJihuPVluKG4pKT8odD10Lm1hdGNoKEl0KSxuPUkodCxuLm1hdGNoKEl0KSkrMSx1cih0LDAsbikuam9pbihcIlwiKSk6dH0sT3QudHJpbVN0YXJ0PWZ1bmN0aW9uKHQsbixyKXtcblx0XHRcdHJldHVybih0PWV1KHQpKSYmKHJ8fG49PT1UKT90LnJlcGxhY2UoYXQsXCJcIik6dCYmKG49WW4obikpPyh0PXQubWF0Y2goSXQpLG49Uyh0LG4ubWF0Y2goSXQpKSx1cih0LG4pLmpvaW4oXCJcIikpOnR9LE90LnRydW5jYXRlPWZ1bmN0aW9uKHQsbil7dmFyIHI9MzAsZT1cIi4uLlwiO2lmKFplKG4pKXZhciB1PVwic2VwYXJhdG9yXCJpbiBuP24uc2VwYXJhdG9yOnUscj1cImxlbmd0aFwiaW4gbj9YZShuLmxlbmd0aCk6cixlPVwib21pc3Npb25cImluIG4/WW4obi5vbWlzc2lvbik6ZTt0PWV1KHQpO3ZhciBvPXQubGVuZ3RoO2lmKFd0LnRlc3QodCkpdmFyIGk9dC5tYXRjaChJdCksbz1pLmxlbmd0aDtpZihyPj1vKXJldHVybiB0O2lmKG89ci1OKGUpLDE+bylyZXR1cm4gZTtpZihyPWk/dXIoaSwwLG8pLmpvaW4oXCJcIik6dC5zbGljZSgwLG8pLHU9PT1UKXJldHVybiByK2U7aWYoaSYmKG8rPXIubGVuZ3RoLW8pLEtlKHUpKXtpZih0LnNsaWNlKG8pLnNlYXJjaCh1KSl7dmFyIGY9cjtmb3IodS5nbG9iYWx8fCh1PW11KHUuc291cmNlLGV1KF90LmV4ZWModSkpK1wiZ1wiKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIHUubGFzdEluZGV4PTA7aT11LmV4ZWMoZik7KXZhciBjPWkuaW5kZXg7cj1yLnNsaWNlKDAsYz09PVQ/bzpjKX19ZWxzZSB0LmluZGV4T2YoWW4odSksbykhPW8mJih1PXIubGFzdEluZGV4T2YodSksdT4tMSYmKHI9ci5zbGljZSgwLHUpKSk7cmV0dXJuIHIrZX0sT3QudW5lc2NhcGU9ZnVuY3Rpb24odCl7cmV0dXJuKHQ9ZXUodCkpJiZRLnRlc3QodCk/dC5yZXBsYWNlKFksUCk6dH0sT3QudW5pcXVlSWQ9ZnVuY3Rpb24odCl7dmFyIG49KytCdTtyZXR1cm4gZXUodCkrbn0sT3QudXBwZXJDYXNlPVRpLE90LnVwcGVyRmlyc3Q9cWksT3QuZWFjaD1tZSxPdC5lYWNoUmlnaHQ9QWUsT3QuZmlyc3Q9X2UsdnUoT3QsZnVuY3Rpb24oKXt2YXIgdD17fTtyZXR1cm4gaG4oT3QsZnVuY3Rpb24obixyKXtXdS5jYWxsKE90LnByb3RvdHlwZSxyKXx8KHRbcl09bil9KSx0fSgpLHtjaGFpbjpmYWxzZX0pLE90LlZFUlNJT049XCI0LjEzLjFcIix1KFwiYmluZCBiaW5kS2V5IGN1cnJ5IGN1cnJ5UmlnaHQgcGFydGlhbCBwYXJ0aWFsUmlnaHRcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24odCl7XG5cdFx0XHRPdFt0XS5wbGFjZWhvbGRlcj1PdH0pLHUoW1wiZHJvcFwiLFwidGFrZVwiXSxmdW5jdGlvbih0LG4pe1V0LnByb3RvdHlwZVt0XT1mdW5jdGlvbihyKXt2YXIgZT10aGlzLl9fZmlsdGVyZWRfXztpZihlJiYhbilyZXR1cm4gbmV3IFV0KHRoaXMpO3I9cj09PVQ/MTpYdShYZShyKSwwKTt2YXIgdT10aGlzLmNsb25lKCk7cmV0dXJuIGU/dS5fX3Rha2VDb3VudF9fPXRvKHIsdS5fX3Rha2VDb3VudF9fKTp1Ll9fdmlld3NfXy5wdXNoKHtzaXplOnRvKHIsNDI5NDk2NzI5NSksdHlwZTp0KygwPnUuX19kaXJfXz9cIlJpZ2h0XCI6XCJcIil9KSx1fSxVdC5wcm90b3R5cGVbdCtcIlJpZ2h0XCJdPWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLnJldmVyc2UoKVt0XShuKS5yZXZlcnNlKCl9fSksdShbXCJmaWx0ZXJcIixcIm1hcFwiLFwidGFrZVdoaWxlXCJdLGZ1bmN0aW9uKHQsbil7dmFyIHI9bisxLGU9MT09cnx8Mz09cjtVdC5wcm90b3R5cGVbdF09ZnVuY3Rpb24odCl7dmFyIG49dGhpcy5jbG9uZSgpO3JldHVybiBuLl9faXRlcmF0ZWVzX18ucHVzaCh7XG5cdFx0XHRpdGVyYXRlZTpGcih0LDMpLHR5cGU6cn0pLG4uX19maWx0ZXJlZF9fPW4uX19maWx0ZXJlZF9ffHxlLG59fSksdShbXCJoZWFkXCIsXCJsYXN0XCJdLGZ1bmN0aW9uKHQsbil7dmFyIHI9XCJ0YWtlXCIrKG4/XCJSaWdodFwiOlwiXCIpO1V0LnByb3RvdHlwZVt0XT1mdW5jdGlvbigpe3JldHVybiB0aGlzW3JdKDEpLnZhbHVlKClbMF19fSksdShbXCJpbml0aWFsXCIsXCJ0YWlsXCJdLGZ1bmN0aW9uKHQsbil7dmFyIHI9XCJkcm9wXCIrKG4/XCJcIjpcIlJpZ2h0XCIpO1V0LnByb3RvdHlwZVt0XT1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9fZmlsdGVyZWRfXz9uZXcgVXQodGhpcyk6dGhpc1tyXSgxKX19KSxVdC5wcm90b3R5cGUuY29tcGFjdD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmZpbHRlcihwdSl9LFV0LnByb3RvdHlwZS5maW5kPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmZpbHRlcih0KS5oZWFkKCl9LFV0LnByb3RvdHlwZS5maW5kTGFzdD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5yZXZlcnNlKCkuZmluZCh0KTtcblx0XHR9LFV0LnByb3RvdHlwZS5pbnZva2VNYXA9TWUoZnVuY3Rpb24odCxuKXtyZXR1cm4gdHlwZW9mIHQ9PVwiZnVuY3Rpb25cIj9uZXcgVXQodGhpcyk6dGhpcy5tYXAoZnVuY3Rpb24ocil7cmV0dXJuIHduKHIsdCxuKX0pfSksVXQucHJvdG90eXBlLnJlamVjdD1mdW5jdGlvbih0KXtyZXR1cm4gdD1Gcih0LDMpLHRoaXMuZmlsdGVyKGZ1bmN0aW9uKG4pe3JldHVybiF0KG4pfSl9LFV0LnByb3RvdHlwZS5zbGljZT1mdW5jdGlvbih0LG4pe3Q9WGUodCk7dmFyIHI9dGhpcztyZXR1cm4gci5fX2ZpbHRlcmVkX18mJih0PjB8fDA+bik/bmV3IFV0KHIpOigwPnQ/cj1yLnRha2VSaWdodCgtdCk6dCYmKHI9ci5kcm9wKHQpKSxuIT09VCYmKG49WGUobikscj0wPm4/ci5kcm9wUmlnaHQoLW4pOnIudGFrZShuLXQpKSxyKX0sVXQucHJvdG90eXBlLnRha2VSaWdodFdoaWxlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnJldmVyc2UoKS50YWtlV2hpbGUodCkucmV2ZXJzZSgpfSxVdC5wcm90b3R5cGUudG9BcnJheT1mdW5jdGlvbigpe1xuXHRcdFx0cmV0dXJuIHRoaXMudGFrZSg0Mjk0OTY3Mjk1KX0saG4oVXQucHJvdG90eXBlLGZ1bmN0aW9uKHQsbil7dmFyIHI9L14oPzpmaWx0ZXJ8ZmluZHxtYXB8cmVqZWN0KXxXaGlsZSQvLnRlc3QobiksZT0vXig/OmhlYWR8bGFzdCkkLy50ZXN0KG4pLHU9T3RbZT9cInRha2VcIisoXCJsYXN0XCI9PW4/XCJSaWdodFwiOlwiXCIpOm5dLG89ZXx8L15maW5kLy50ZXN0KG4pO3UmJihPdC5wcm90b3R5cGVbbl09ZnVuY3Rpb24oKXtmdW5jdGlvbiBuKHQpe3JldHVybiB0PXUuYXBwbHkoT3QscyhbdF0sZikpLGUmJmg/dFswXTp0fXZhciBpPXRoaXMuX193cmFwcGVkX18sZj1lP1sxXTphcmd1bWVudHMsYz1pIGluc3RhbmNlb2YgVXQsYT1mWzBdLGw9Y3x8eWkoaSk7bCYmciYmdHlwZW9mIGE9PVwiZnVuY3Rpb25cIiYmMSE9YS5sZW5ndGgmJihjPWw9ZmFsc2UpO3ZhciBoPXRoaXMuX19jaGFpbl9fLHA9ISF0aGlzLl9fYWN0aW9uc19fLmxlbmd0aCxhPW8mJiFoLGM9YyYmIXA7cmV0dXJuIW8mJmw/KGk9Yz9pOm5ldyBVdCh0aGlzKSxcblx0XHRcdGk9dC5hcHBseShpLGYpLGkuX19hY3Rpb25zX18ucHVzaCh7ZnVuYzpqZSxhcmdzOltuXSx0aGlzQXJnOlR9KSxuZXcgenQoaSxoKSk6YSYmYz90LmFwcGx5KHRoaXMsZik6KGk9dGhpcy50aHJ1KG4pLGE/ZT9pLnZhbHVlKClbMF06aS52YWx1ZSgpOmkpfSl9KSx1KFwicG9wIHB1c2ggc2hpZnQgc29ydCBzcGxpY2UgdW5zaGlmdFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbih0KXt2YXIgbj1PdVt0XSxyPS9eKD86cHVzaHxzb3J0fHVuc2hpZnQpJC8udGVzdCh0KT9cInRhcFwiOlwidGhydVwiLGU9L14oPzpwb3B8c2hpZnQpJC8udGVzdCh0KTtPdC5wcm90b3R5cGVbdF09ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHM7aWYoZSYmIXRoaXMuX19jaGFpbl9fKXt2YXIgdT10aGlzLnZhbHVlKCk7cmV0dXJuIG4uYXBwbHkoeWkodSk/dTpbXSx0KX1yZXR1cm4gdGhpc1tyXShmdW5jdGlvbihyKXtyZXR1cm4gbi5hcHBseSh5aShyKT9yOltdLHQpfSl9fSksaG4oVXQucHJvdG90eXBlLGZ1bmN0aW9uKHQsbil7XG5cdFx0XHR2YXIgcj1PdFtuXTtpZihyKXt2YXIgZT1yLm5hbWUrXCJcIjsoX29bZV18fChfb1tlXT1bXSkpLnB1c2goe25hbWU6bixmdW5jOnJ9KX19KSxfb1tBcihULDIpLm5hbWVdPVt7bmFtZTpcIndyYXBwZXJcIixmdW5jOlR9XSxVdC5wcm90b3R5cGUuY2xvbmU9ZnVuY3Rpb24oKXt2YXIgdD1uZXcgVXQodGhpcy5fX3dyYXBwZWRfXyk7cmV0dXJuIHQuX19hY3Rpb25zX189bHIodGhpcy5fX2FjdGlvbnNfXyksdC5fX2Rpcl9fPXRoaXMuX19kaXJfXyx0Ll9fZmlsdGVyZWRfXz10aGlzLl9fZmlsdGVyZWRfXyx0Ll9faXRlcmF0ZWVzX189bHIodGhpcy5fX2l0ZXJhdGVlc19fKSx0Ll9fdGFrZUNvdW50X189dGhpcy5fX3Rha2VDb3VudF9fLHQuX192aWV3c19fPWxyKHRoaXMuX192aWV3c19fKSx0fSxVdC5wcm90b3R5cGUucmV2ZXJzZT1mdW5jdGlvbigpe2lmKHRoaXMuX19maWx0ZXJlZF9fKXt2YXIgdD1uZXcgVXQodGhpcyk7dC5fX2Rpcl9fPS0xLHQuX19maWx0ZXJlZF9fPXRydWV9ZWxzZSB0PXRoaXMuY2xvbmUoKSxcblx0XHRcdHQuX19kaXJfXyo9LTE7cmV0dXJuIHR9LFV0LnByb3RvdHlwZS52YWx1ZT1mdW5jdGlvbigpe3ZhciB0LG49dGhpcy5fX3dyYXBwZWRfXy52YWx1ZSgpLHI9dGhpcy5fX2Rpcl9fLGU9eWkobiksdT0wPnIsbz1lP24ubGVuZ3RoOjA7dD1vO2Zvcih2YXIgaT10aGlzLl9fdmlld3NfXyxmPTAsYz0tMSxhPWkubGVuZ3RoOysrYzxhOyl7dmFyIGw9aVtjXSxzPWwuc2l6ZTtzd2l0Y2gobC50eXBlKXtjYXNlXCJkcm9wXCI6Zis9czticmVhaztjYXNlXCJkcm9wUmlnaHRcIjp0LT1zO2JyZWFrO2Nhc2VcInRha2VcIjp0PXRvKHQsZitzKTticmVhaztjYXNlXCJ0YWtlUmlnaHRcIjpmPVh1KGYsdC1zKX19aWYodD17c3RhcnQ6ZixlbmQ6dH0saT10LnN0YXJ0LGY9dC5lbmQsdD1mLWksdT11P2Y6aS0xLGk9dGhpcy5fX2l0ZXJhdGVlc19fLGY9aS5sZW5ndGgsYz0wLGE9dG8odCx0aGlzLl9fdGFrZUNvdW50X18pLCFlfHwyMDA+b3x8bz09dCYmYT09dClyZXR1cm4gWG4obix0aGlzLl9fYWN0aW9uc19fKTtlPVtdO1xuXHRcdFx0dDpmb3IoO3QtLSYmYT5jOyl7Zm9yKHUrPXIsbz0tMSxsPW5bdV07KytvPGY7KXt2YXIgaD1pW29dLHM9aC50eXBlLGg9KDAsaC5pdGVyYXRlZSkobCk7aWYoMj09cylsPWg7ZWxzZSBpZighaCl7aWYoMT09cyljb250aW51ZSB0O2JyZWFrIHR9fWVbYysrXT1sfXJldHVybiBlfSxPdC5wcm90b3R5cGUuYXQ9WG8sT3QucHJvdG90eXBlLmNoYWluPWZ1bmN0aW9uKCl7cmV0dXJuIHhlKHRoaXMpfSxPdC5wcm90b3R5cGUuY29tbWl0PWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyB6dCh0aGlzLnZhbHVlKCksdGhpcy5fX2NoYWluX18pfSxPdC5wcm90b3R5cGUubmV4dD1mdW5jdGlvbigpe3RoaXMuX192YWx1ZXNfXz09PVQmJih0aGlzLl9fdmFsdWVzX189SGUodGhpcy52YWx1ZSgpKSk7dmFyIHQ9dGhpcy5fX2luZGV4X18+PXRoaXMuX192YWx1ZXNfXy5sZW5ndGgsbj10P1Q6dGhpcy5fX3ZhbHVlc19fW3RoaXMuX19pbmRleF9fKytdO3JldHVybntkb25lOnQsdmFsdWU6bn19LE90LnByb3RvdHlwZS5wbGFudD1mdW5jdGlvbih0KXtcblx0XHRcdGZvcih2YXIgbixyPXRoaXM7ciBpbnN0YW5jZW9mIGt0Oyl7dmFyIGU9YWUocik7ZS5fX2luZGV4X189MCxlLl9fdmFsdWVzX189VCxuP3UuX193cmFwcGVkX189ZTpuPWU7dmFyIHU9ZSxyPXIuX193cmFwcGVkX199cmV0dXJuIHUuX193cmFwcGVkX189dCxufSxPdC5wcm90b3R5cGUucmV2ZXJzZT1mdW5jdGlvbigpe3ZhciB0PXRoaXMuX193cmFwcGVkX187cmV0dXJuIHQgaW5zdGFuY2VvZiBVdD8odGhpcy5fX2FjdGlvbnNfXy5sZW5ndGgmJih0PW5ldyBVdCh0aGlzKSksdD10LnJldmVyc2UoKSx0Ll9fYWN0aW9uc19fLnB1c2goe2Z1bmM6amUsYXJnczpbZGVdLHRoaXNBcmc6VH0pLG5ldyB6dCh0LHRoaXMuX19jaGFpbl9fKSk6dGhpcy50aHJ1KGRlKX0sT3QucHJvdG90eXBlLnRvSlNPTj1PdC5wcm90b3R5cGUudmFsdWVPZj1PdC5wcm90b3R5cGUudmFsdWU9ZnVuY3Rpb24oKXtyZXR1cm4gWG4odGhpcy5fX3dyYXBwZWRfXyx0aGlzLl9fYWN0aW9uc19fKX0sWnUmJihPdC5wcm90b3R5cGVbWnVdPXdlKSxcblx0XHRPdH12YXIgVCxxPTEvMCxWPU5hTixLPS9cXGJfX3BcXCs9Jyc7L2csRz0vXFxiKF9fcFxcKz0pJydcXCsvZyxKPS8oX19lXFwoLio/XFwpfFxcYl9fdFxcKSlcXCsnJzsvZyxZPS8mKD86YW1wfGx0fGd0fHF1b3R8IzM5fCM5Nik7L2csSD0vWyY8PlwiJ2BdL2csUT1SZWdFeHAoWS5zb3VyY2UpLFg9UmVnRXhwKEguc291cmNlKSx0dD0vPCUtKFtcXHNcXFNdKz8pJT4vZyxudD0vPCUoW1xcc1xcU10rPyklPi9nLHJ0PS88JT0oW1xcc1xcU10rPyklPi9nLGV0PS9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sdXQ9L15cXHcqJC8sb3Q9L1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KFxcLnxcXFtcXF0pKD86XFw0fCQpKS9nLGl0PS9bXFxcXF4kLiorPygpW1xcXXt9fF0vZyxmdD1SZWdFeHAoaXQuc291cmNlKSxjdD0vXlxccyt8XFxzKyQvZyxhdD0vXlxccysvLGx0PS9cXHMrJC8sc3Q9L1thLXpBLVowLTldKy9nLGh0PS9cXFxcKFxcXFwpPy9nLHB0PS9cXCRcXHsoW15cXFxcfV0qKD86XFxcXC5bXlxcXFx9XSopKilcXH0vZyxfdD0vXFx3KiQvLHZ0PS9eMHgvaSxndD0vXlstK10weFswLTlhLWZdKyQvaSxkdD0vXjBiWzAxXSskL2kseXQ9L15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLyxidD0vXjBvWzAtN10rJC9pLHh0PS9eKD86MHxbMS05XVxcZCopJC8sanQ9L1tcXHhjMC1cXHhkNlxceGQ4LVxceGRlXFx4ZGYtXFx4ZjZcXHhmOC1cXHhmZl0vZyx3dD0vKCReKS8sbXQ9L1snXFxuXFxyXFx1MjAyOFxcdTIwMjlcXFxcXS9nLEF0PVwiW1xcXFx1ZmUwZVxcXFx1ZmUwZl0/KD86W1xcXFx1MDMwMC1cXFxcdTAzNmZcXFxcdWZlMjAtXFxcXHVmZTIzXFxcXHUyMGQwLVxcXFx1MjBmMF18XFxcXHVkODNjW1xcXFx1ZGZmYi1cXFxcdWRmZmZdKT8oPzpcXFxcdTIwMGQoPzpbXlxcXFx1ZDgwMC1cXFxcdWRmZmZdfCg/OlxcXFx1ZDgzY1tcXFxcdWRkZTYtXFxcXHVkZGZmXSl7Mn18W1xcXFx1ZDgwMC1cXFxcdWRiZmZdW1xcXFx1ZGMwMC1cXFxcdWRmZmZdKVtcXFxcdWZlMGVcXFxcdWZlMGZdPyg/OltcXFxcdTAzMDAtXFxcXHUwMzZmXFxcXHVmZTIwLVxcXFx1ZmUyM1xcXFx1MjBkMC1cXFxcdTIwZjBdfFxcXFx1ZDgzY1tcXFxcdWRmZmItXFxcXHVkZmZmXSk/KSpcIixPdD1cIig/OltcXFxcdTI3MDAtXFxcXHUyN2JmXXwoPzpcXFxcdWQ4M2NbXFxcXHVkZGU2LVxcXFx1ZGRmZl0pezJ9fFtcXFxcdWQ4MDAtXFxcXHVkYmZmXVtcXFxcdWRjMDAtXFxcXHVkZmZmXSlcIitBdCxrdD1cIig/OlteXFxcXHVkODAwLVxcXFx1ZGZmZl1bXFxcXHUwMzAwLVxcXFx1MDM2ZlxcXFx1ZmUyMC1cXFxcdWZlMjNcXFxcdTIwZDAtXFxcXHUyMGYwXT98W1xcXFx1MDMwMC1cXFxcdTAzNmZcXFxcdWZlMjAtXFxcXHVmZTIzXFxcXHUyMGQwLVxcXFx1MjBmMF18KD86XFxcXHVkODNjW1xcXFx1ZGRlNi1cXFxcdWRkZmZdKXsyfXxbXFxcXHVkODAwLVxcXFx1ZGJmZl1bXFxcXHVkYzAwLVxcXFx1ZGZmZl18W1xcXFx1ZDgwMC1cXFxcdWRmZmZdKVwiLEV0PVJlZ0V4cChcIlsnXFx1MjAxOV1cIixcImdcIiksU3Q9UmVnRXhwKFwiW1xcXFx1MDMwMC1cXFxcdTAzNmZcXFxcdWZlMjAtXFxcXHVmZTIzXFxcXHUyMGQwLVxcXFx1MjBmMF1cIixcImdcIiksSXQ9UmVnRXhwKFwiXFxcXHVkODNjW1xcXFx1ZGZmYi1cXFxcdWRmZmZdKD89XFxcXHVkODNjW1xcXFx1ZGZmYi1cXFxcdWRmZmZdKXxcIitrdCtBdCxcImdcIiksUnQ9UmVnRXhwKFtcIltBLVpcXFxceGMwLVxcXFx4ZDZcXFxceGQ4LVxcXFx4ZGVdP1thLXpcXFxceGRmLVxcXFx4ZjZcXFxceGY4LVxcXFx4ZmZdKyg/OlsnXFx1MjAxOV0oPzpkfGxsfG18cmV8c3x0fHZlKSk/KD89W1xcXFx4YWNcXFxceGIxXFxcXHhkN1xcXFx4ZjdcXFxceDAwLVxcXFx4MmZcXFxceDNhLVxcXFx4NDBcXFxceDViLVxcXFx4NjBcXFxceDdiLVxcXFx4YmZcXFxcdTIwMDAtXFxcXHUyMDZmIFxcXFx0XFxcXHgwYlxcXFxmXFxcXHhhMFxcXFx1ZmVmZlxcXFxuXFxcXHJcXFxcdTIwMjhcXFxcdTIwMjlcXFxcdTE2ODBcXFxcdTE4MGVcXFxcdTIwMDBcXFxcdTIwMDFcXFxcdTIwMDJcXFxcdTIwMDNcXFxcdTIwMDRcXFxcdTIwMDVcXFxcdTIwMDZcXFxcdTIwMDdcXFxcdTIwMDhcXFxcdTIwMDlcXFxcdTIwMGFcXFxcdTIwMmZcXFxcdTIwNWZcXFxcdTMwMDBdfFtBLVpcXFxceGMwLVxcXFx4ZDZcXFxceGQ4LVxcXFx4ZGVdfCQpfCg/OltBLVpcXFxceGMwLVxcXFx4ZDZcXFxceGQ4LVxcXFx4ZGVdfFteXFxcXHVkODAwLVxcXFx1ZGZmZlxcXFx4YWNcXFxceGIxXFxcXHhkN1xcXFx4ZjdcXFxceDAwLVxcXFx4MmZcXFxceDNhLVxcXFx4NDBcXFxceDViLVxcXFx4NjBcXFxceDdiLVxcXFx4YmZcXFxcdTIwMDAtXFxcXHUyMDZmIFxcXFx0XFxcXHgwYlxcXFxmXFxcXHhhMFxcXFx1ZmVmZlxcXFxuXFxcXHJcXFxcdTIwMjhcXFxcdTIwMjlcXFxcdTE2ODBcXFxcdTE4MGVcXFxcdTIwMDBcXFxcdTIwMDFcXFxcdTIwMDJcXFxcdTIwMDNcXFxcdTIwMDRcXFxcdTIwMDVcXFxcdTIwMDZcXFxcdTIwMDdcXFxcdTIwMDhcXFxcdTIwMDlcXFxcdTIwMGFcXFxcdTIwMmZcXFxcdTIwNWZcXFxcdTMwMDBcXFxcZCtcXFxcdTI3MDAtXFxcXHUyN2JmYS16XFxcXHhkZi1cXFxceGY2XFxcXHhmOC1cXFxceGZmQS1aXFxcXHhjMC1cXFxceGQ2XFxcXHhkOC1cXFxceGRlXSkrKD86WydcXHUyMDE5XSg/OkR8TEx8TXxSRXxTfFR8VkUpKT8oPz1bXFxcXHhhY1xcXFx4YjFcXFxceGQ3XFxcXHhmN1xcXFx4MDAtXFxcXHgyZlxcXFx4M2EtXFxcXHg0MFxcXFx4NWItXFxcXHg2MFxcXFx4N2ItXFxcXHhiZlxcXFx1MjAwMC1cXFxcdTIwNmYgXFxcXHRcXFxceDBiXFxcXGZcXFxceGEwXFxcXHVmZWZmXFxcXG5cXFxcclxcXFx1MjAyOFxcXFx1MjAyOVxcXFx1MTY4MFxcXFx1MTgwZVxcXFx1MjAwMFxcXFx1MjAwMVxcXFx1MjAwMlxcXFx1MjAwM1xcXFx1MjAwNFxcXFx1MjAwNVxcXFx1MjAwNlxcXFx1MjAwN1xcXFx1MjAwOFxcXFx1MjAwOVxcXFx1MjAwYVxcXFx1MjAyZlxcXFx1MjA1ZlxcXFx1MzAwMF18W0EtWlxcXFx4YzAtXFxcXHhkNlxcXFx4ZDgtXFxcXHhkZV0oPzpbYS16XFxcXHhkZi1cXFxceGY2XFxcXHhmOC1cXFxceGZmXXxbXlxcXFx1ZDgwMC1cXFxcdWRmZmZcXFxceGFjXFxcXHhiMVxcXFx4ZDdcXFxceGY3XFxcXHgwMC1cXFxceDJmXFxcXHgzYS1cXFxceDQwXFxcXHg1Yi1cXFxceDYwXFxcXHg3Yi1cXFxceGJmXFxcXHUyMDAwLVxcXFx1MjA2ZiBcXFxcdFxcXFx4MGJcXFxcZlxcXFx4YTBcXFxcdWZlZmZcXFxcblxcXFxyXFxcXHUyMDI4XFxcXHUyMDI5XFxcXHUxNjgwXFxcXHUxODBlXFxcXHUyMDAwXFxcXHUyMDAxXFxcXHUyMDAyXFxcXHUyMDAzXFxcXHUyMDA0XFxcXHUyMDA1XFxcXHUyMDA2XFxcXHUyMDA3XFxcXHUyMDA4XFxcXHUyMDA5XFxcXHUyMDBhXFxcXHUyMDJmXFxcXHUyMDVmXFxcXHUzMDAwXFxcXGQrXFxcXHUyNzAwLVxcXFx1MjdiZmEtelxcXFx4ZGYtXFxcXHhmNlxcXFx4ZjgtXFxcXHhmZkEtWlxcXFx4YzAtXFxcXHhkNlxcXFx4ZDgtXFxcXHhkZV0pfCQpfFtBLVpcXFxceGMwLVxcXFx4ZDZcXFxceGQ4LVxcXFx4ZGVdPyg/OlthLXpcXFxceGRmLVxcXFx4ZjZcXFxceGY4LVxcXFx4ZmZdfFteXFxcXHVkODAwLVxcXFx1ZGZmZlxcXFx4YWNcXFxceGIxXFxcXHhkN1xcXFx4ZjdcXFxceDAwLVxcXFx4MmZcXFxceDNhLVxcXFx4NDBcXFxceDViLVxcXFx4NjBcXFxceDdiLVxcXFx4YmZcXFxcdTIwMDAtXFxcXHUyMDZmIFxcXFx0XFxcXHgwYlxcXFxmXFxcXHhhMFxcXFx1ZmVmZlxcXFxuXFxcXHJcXFxcdTIwMjhcXFxcdTIwMjlcXFxcdTE2ODBcXFxcdTE4MGVcXFxcdTIwMDBcXFxcdTIwMDFcXFxcdTIwMDJcXFxcdTIwMDNcXFxcdTIwMDRcXFxcdTIwMDVcXFxcdTIwMDZcXFxcdTIwMDdcXFxcdTIwMDhcXFxcdTIwMDlcXFxcdTIwMGFcXFxcdTIwMmZcXFxcdTIwNWZcXFxcdTMwMDBcXFxcZCtcXFxcdTI3MDAtXFxcXHUyN2JmYS16XFxcXHhkZi1cXFxceGY2XFxcXHhmOC1cXFxceGZmQS1aXFxcXHhjMC1cXFxceGQ2XFxcXHhkOC1cXFxceGRlXSkrKD86WydcXHUyMDE5XSg/OmR8bGx8bXxyZXxzfHR8dmUpKT98W0EtWlxcXFx4YzAtXFxcXHhkNlxcXFx4ZDgtXFxcXHhkZV0rKD86WydcXHUyMDE5XSg/OkR8TEx8TXxSRXxTfFR8VkUpKT98XFxcXGQrXCIsT3RdLmpvaW4oXCJ8XCIpLFwiZ1wiKSxXdD1SZWdFeHAoXCJbXFxcXHUyMDBkXFxcXHVkODAwLVxcXFx1ZGZmZlxcXFx1MDMwMC1cXFxcdTAzNmZcXFxcdWZlMjAtXFxcXHVmZTIzXFxcXHUyMGQwLVxcXFx1MjBmMFxcXFx1ZmUwZVxcXFx1ZmUwZl1cIiksQnQ9L1thLXpdW0EtWl18W0EtWl17Mix9W2Etel18WzAtOV1bYS16QS1aXXxbYS16QS1aXVswLTldfFteYS16QS1aMC05IF0vLEx0PVwiQXJyYXkgQnVmZmVyIERhdGFWaWV3IERhdGUgRXJyb3IgRmxvYXQzMkFycmF5IEZsb2F0NjRBcnJheSBGdW5jdGlvbiBJbnQ4QXJyYXkgSW50MTZBcnJheSBJbnQzMkFycmF5IE1hcCBNYXRoIE9iamVjdCBQcm9taXNlIFJlZmxlY3QgUmVnRXhwIFNldCBTdHJpbmcgU3ltYm9sIFR5cGVFcnJvciBVaW50OEFycmF5IFVpbnQ4Q2xhbXBlZEFycmF5IFVpbnQxNkFycmF5IFVpbnQzMkFycmF5IFdlYWtNYXAgXyBpc0Zpbml0ZSBwYXJzZUludCBzZXRUaW1lb3V0XCIuc3BsaXQoXCIgXCIpLE10PXt9O1xuXHRNdFtcIltvYmplY3QgRmxvYXQzMkFycmF5XVwiXT1NdFtcIltvYmplY3QgRmxvYXQ2NEFycmF5XVwiXT1NdFtcIltvYmplY3QgSW50OEFycmF5XVwiXT1NdFtcIltvYmplY3QgSW50MTZBcnJheV1cIl09TXRbXCJbb2JqZWN0IEludDMyQXJyYXldXCJdPU10W1wiW29iamVjdCBVaW50OEFycmF5XVwiXT1NdFtcIltvYmplY3QgVWludDhDbGFtcGVkQXJyYXldXCJdPU10W1wiW29iamVjdCBVaW50MTZBcnJheV1cIl09TXRbXCJbb2JqZWN0IFVpbnQzMkFycmF5XVwiXT10cnVlLE10W1wiW29iamVjdCBBcmd1bWVudHNdXCJdPU10W1wiW29iamVjdCBBcnJheV1cIl09TXRbXCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiXT1NdFtcIltvYmplY3QgQm9vbGVhbl1cIl09TXRbXCJbb2JqZWN0IERhdGFWaWV3XVwiXT1NdFtcIltvYmplY3QgRGF0ZV1cIl09TXRbXCJbb2JqZWN0IEVycm9yXVwiXT1NdFtcIltvYmplY3QgRnVuY3Rpb25dXCJdPU10W1wiW29iamVjdCBNYXBdXCJdPU10W1wiW29iamVjdCBOdW1iZXJdXCJdPU10W1wiW29iamVjdCBPYmplY3RdXCJdPU10W1wiW29iamVjdCBSZWdFeHBdXCJdPU10W1wiW29iamVjdCBTZXRdXCJdPU10W1wiW29iamVjdCBTdHJpbmddXCJdPU10W1wiW29iamVjdCBXZWFrTWFwXVwiXT1mYWxzZTtcblx0dmFyIEN0PXt9O0N0W1wiW29iamVjdCBBcmd1bWVudHNdXCJdPUN0W1wiW29iamVjdCBBcnJheV1cIl09Q3RbXCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiXT1DdFtcIltvYmplY3QgRGF0YVZpZXddXCJdPUN0W1wiW29iamVjdCBCb29sZWFuXVwiXT1DdFtcIltvYmplY3QgRGF0ZV1cIl09Q3RbXCJbb2JqZWN0IEZsb2F0MzJBcnJheV1cIl09Q3RbXCJbb2JqZWN0IEZsb2F0NjRBcnJheV1cIl09Q3RbXCJbb2JqZWN0IEludDhBcnJheV1cIl09Q3RbXCJbb2JqZWN0IEludDE2QXJyYXldXCJdPUN0W1wiW29iamVjdCBJbnQzMkFycmF5XVwiXT1DdFtcIltvYmplY3QgTWFwXVwiXT1DdFtcIltvYmplY3QgTnVtYmVyXVwiXT1DdFtcIltvYmplY3QgT2JqZWN0XVwiXT1DdFtcIltvYmplY3QgUmVnRXhwXVwiXT1DdFtcIltvYmplY3QgU2V0XVwiXT1DdFtcIltvYmplY3QgU3RyaW5nXVwiXT1DdFtcIltvYmplY3QgU3ltYm9sXVwiXT1DdFtcIltvYmplY3QgVWludDhBcnJheV1cIl09Q3RbXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiXT1DdFtcIltvYmplY3QgVWludDE2QXJyYXldXCJdPUN0W1wiW29iamVjdCBVaW50MzJBcnJheV1cIl09dHJ1ZSxcblx0XHRDdFtcIltvYmplY3QgRXJyb3JdXCJdPUN0W1wiW29iamVjdCBGdW5jdGlvbl1cIl09Q3RbXCJbb2JqZWN0IFdlYWtNYXBdXCJdPWZhbHNlO3ZhciB6dD17XCJcXHhjMFwiOlwiQVwiLFwiXFx4YzFcIjpcIkFcIixcIlxceGMyXCI6XCJBXCIsXCJcXHhjM1wiOlwiQVwiLFwiXFx4YzRcIjpcIkFcIixcIlxceGM1XCI6XCJBXCIsXCJcXHhlMFwiOlwiYVwiLFwiXFx4ZTFcIjpcImFcIixcIlxceGUyXCI6XCJhXCIsXCJcXHhlM1wiOlwiYVwiLFwiXFx4ZTRcIjpcImFcIixcIlxceGU1XCI6XCJhXCIsXCJcXHhjN1wiOlwiQ1wiLFwiXFx4ZTdcIjpcImNcIixcIlxceGQwXCI6XCJEXCIsXCJcXHhmMFwiOlwiZFwiLFwiXFx4YzhcIjpcIkVcIixcIlxceGM5XCI6XCJFXCIsXCJcXHhjYVwiOlwiRVwiLFwiXFx4Y2JcIjpcIkVcIixcIlxceGU4XCI6XCJlXCIsXCJcXHhlOVwiOlwiZVwiLFwiXFx4ZWFcIjpcImVcIixcIlxceGViXCI6XCJlXCIsXCJcXHhjY1wiOlwiSVwiLFwiXFx4Y2RcIjpcIklcIixcIlxceGNlXCI6XCJJXCIsXCJcXHhjZlwiOlwiSVwiLFwiXFx4ZWNcIjpcImlcIixcIlxceGVkXCI6XCJpXCIsXCJcXHhlZVwiOlwiaVwiLFwiXFx4ZWZcIjpcImlcIixcIlxceGQxXCI6XCJOXCIsXCJcXHhmMVwiOlwiblwiLFwiXFx4ZDJcIjpcIk9cIixcIlxceGQzXCI6XCJPXCIsXCJcXHhkNFwiOlwiT1wiLFwiXFx4ZDVcIjpcIk9cIixcIlxceGQ2XCI6XCJPXCIsXG5cdFx0XCJcXHhkOFwiOlwiT1wiLFwiXFx4ZjJcIjpcIm9cIixcIlxceGYzXCI6XCJvXCIsXCJcXHhmNFwiOlwib1wiLFwiXFx4ZjVcIjpcIm9cIixcIlxceGY2XCI6XCJvXCIsXCJcXHhmOFwiOlwib1wiLFwiXFx4ZDlcIjpcIlVcIixcIlxceGRhXCI6XCJVXCIsXCJcXHhkYlwiOlwiVVwiLFwiXFx4ZGNcIjpcIlVcIixcIlxceGY5XCI6XCJ1XCIsXCJcXHhmYVwiOlwidVwiLFwiXFx4ZmJcIjpcInVcIixcIlxceGZjXCI6XCJ1XCIsXCJcXHhkZFwiOlwiWVwiLFwiXFx4ZmRcIjpcInlcIixcIlxceGZmXCI6XCJ5XCIsXCJcXHhjNlwiOlwiQWVcIixcIlxceGU2XCI6XCJhZVwiLFwiXFx4ZGVcIjpcIlRoXCIsXCJcXHhmZVwiOlwidGhcIixcIlxceGRmXCI6XCJzc1wifSxVdD17XCImXCI6XCImYW1wO1wiLFwiPFwiOlwiJmx0O1wiLFwiPlwiOlwiJmd0O1wiLCdcIic6XCImcXVvdDtcIixcIidcIjpcIiYjMzk7XCIsXCJgXCI6XCImIzk2O1wifSwkdD17XCImYW1wO1wiOlwiJlwiLFwiJmx0O1wiOlwiPFwiLFwiJmd0O1wiOlwiPlwiLFwiJnF1b3Q7XCI6J1wiJyxcIiYjMzk7XCI6XCInXCIsXCImIzk2O1wiOlwiYFwifSxEdD17XCJcXFxcXCI6XCJcXFxcXCIsXCInXCI6XCInXCIsXCJcXG5cIjpcIm5cIixcIlxcclwiOlwiclwiLFwiXFx1MjAyOFwiOlwidTIwMjhcIixcIlxcdTIwMjlcIjpcInUyMDI5XCJ9LEZ0PXBhcnNlRmxvYXQsTnQ9cGFyc2VJbnQsUHQ9dHlwZW9mIGV4cG9ydHM9PVwib2JqZWN0XCImJmV4cG9ydHMsWnQ9UHQmJnR5cGVvZiBtb2R1bGU9PVwib2JqZWN0XCImJm1vZHVsZSxUdD1adCYmWnQuZXhwb3J0cz09PVB0LHF0PVIodHlwZW9mIHNlbGY9PVwib2JqZWN0XCImJnNlbGYpLFZ0PVIodHlwZW9mIHRoaXM9PVwib2JqZWN0XCImJnRoaXMpLEt0PVIodHlwZW9mIGdsb2JhbD09XCJvYmplY3RcIiYmZ2xvYmFsKXx8cXR8fFZ0fHxGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCksR3Q9WigpO1xuXHQocXR8fHt9KS5fPUd0LHR5cGVvZiBkZWZpbmU9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGRlZmluZS5hbWQ9PVwib2JqZWN0XCImJmRlZmluZS5hbWQ/IGRlZmluZShmdW5jdGlvbigpe3JldHVybiBHdH0pOlp0PygoWnQuZXhwb3J0cz1HdCkuXz1HdCxQdC5fPUd0KTpLdC5fPUd0fSkuY2FsbCh0aGlzKTsiLCIoZnVuY3Rpb24oKSB7XG5cdHZhciBpc05vZGUgPSB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT09ICd1bmRlZmluZWQnO1xuXG5cdHZhciBfID0gcmVxdWlyZSgnLi9saWIvbG9kYXNoLm1pbicpLl87XG5cblx0dmFyIFV0aWxzID0ge307XG5cblx0VXRpbHMuTG9nID0gY29uc29sZTtcblxuXHRVdGlscy5fdXRpbEZpbGVzID0ge307XG5cdFV0aWxzLm1vZHVsZXMgPSB7fTtcblxuXHRVdGlscy5ydW5zT25Ob2RlID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCc7XG5cdH07XG5cblx0VXRpbHMuZXh0ZW5kVXRpbHMgPSBmdW5jdGlvbiAoZXh0ZW5kLCBvdmVyd3JpdGUsIGlnbm9yZSkge1xuXHRcdGlmICh0eXBlb2YoZXh0ZW5kKSAhPT0gJ29iamVjdCcgJiYgdHlwZW9mKGV4dGVuZCkgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFV0aWxzLkxvZy5lcnJvcihcIkNvdWxkIG5vdCBleHRlbmQgdXRpbHMuIEV4dGVuc2lvbiBtdXN0IGJlIG9iamVjdCBvciBmdW5jdGlvbi5cIik7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICghQXJyYXkuaXNBcnJheShvdmVyd3JpdGUpKSB7XG5cdFx0XHRvdmVyd3JpdGUgPSBbXTtcblx0XHR9XG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KGlnbm9yZSkpIHtcblx0XHRcdGlnbm9yZSA9IFtdO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgaW4gZXh0ZW5kKSB7XG5cdFx0XHRpZiAoaWdub3JlLmluZGV4T2YoaSkgPj0gMCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGlmIChpIGluIFV0aWxzICYmIG92ZXJ3cml0ZS5pbmRleE9mKGkpIDwgMCkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiJ1wiICsgaSArIFwiJyBhbHJlYWR5IGRlZmluZWQgaW4gVXRpbHMuXCIpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdFV0aWxzW2ldID0gZXh0ZW5kW2ldO1xuXHRcdH1cblx0fTtcblxuXHQvLyBTdGFuZGFyZCBleHRlbnNpb24gb2YgbG9kYXNoL3VuZGVyc2NvcmVcblx0aWYgKHR5cGVvZih3aW5kb3cuXykgPT09ICdmdW5jdGlvbicpIHtcblx0XHRVdGlscy5leHRlbmRVdGlscyh3aW5kb3cuXywgWyd0b1N0cmluZyddKTtcblx0fVxuXG5cdFV0aWxzLnNldExvZ2dlciA9IGZ1bmN0aW9uIChsb2dnZXIpIHtcblx0XHRVdGlscy5Mb2cgPSBsb2dnZXI7XG5cdH07XG5cblx0LyoqXG5cdCAqIEV4cG9ydHMgdGhlIGdpdmVuIHZhbHVlIGVpdGhlciB0byB0aGUgYnJvd3NlciB3aW5kb3cgb2JqZWN0IG9yIHRvIHRoZSBub2RlLmpzIG1vZHVsZSBvYmplY3QuXG5cdCAqIEBwYXJhbSBuYW1lXG5cdCAqIEBwYXJhbSB2YWx1ZVxuXHQgKi9cblx0VXRpbHMuZXhwb3J0ID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG5cdFx0VXRpbHMubW9kdWxlc1tuYW1lXSA9IHZhbHVlO1xuXHR9O1xuXG5cblx0Ly8gRXhwb3J0IFV0aWxzXG5cdGlmIChpc05vZGUpIHtcblx0XHRtb2R1bGUuZXhwb3J0cy5VdGlscyA9IFV0aWxzO1xuXHR9XG5cdGVsc2Uge1xuXHRcdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblx0XHRcdGRlZmluZShbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gVXRpbHM7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR3aW5kb3cuVXRpbHMgPSBVdGlscztcblx0XHR9XG5cdH1cbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuXHR2YXIgaXNOb2RlID0gdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzICE9PSAndW5kZWZpbmVkJztcblx0dmFyIFV0aWxzID0gaXNOb2RlID8gcmVxdWlyZSgnLi4vdXRpbHMtY29yZScpLlV0aWxzIDogd2luZG93LlV0aWxzO1xuXHRpZighVXRpbHMpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiVXRpbHNDb3JlIG5vdCBsb2FkZWQuXCIpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHZhciBET00gPSB7fTtcblxuXHRET00uZ2V0U2VsZWN0ZWRUZXh0ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHR4dCA9ICcnO1xuXHRcdGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKVxuXHRcdHtcblx0XHRcdHR4dCA9IFwiXCIrd2luZG93LmdldFNlbGVjdGlvbigpO1xuXHRcdH1cblx0XHRlbHNlIGlmIChkb2N1bWVudC5nZXRTZWxlY3Rpb24pXG5cdFx0e1xuXHRcdFx0dHh0ID0gXCJcIitkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uKVxuXHRcdHtcblx0XHRcdHR4dCA9IFwiXCIrZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCkudGV4dDtcblx0XHR9XG5cdFx0ZWxzZSByZXR1cm47XG5cblx0XHRyZXR1cm4gdHh0Lmxlbmd0aCA+IDAgPyB0eHQgOiB1bmRlZmluZWQ7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMuRE9NID0gRE9NO1xufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcblx0dmFyIGlzTm9kZSA9IHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCc7XG5cdHZhciBVdGlscyA9IGlzTm9kZSA/IHJlcXVpcmUoJy4uL3V0aWxzLWNvcmUnKS5VdGlscyA6IHdpbmRvdy5VdGlscztcblx0aWYoIVV0aWxzKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIlV0aWxzQ29yZSBub3QgbG9hZGVkLlwiKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtvYmplY3R8c3RyaW5nfSBzcGVjc1x0XHRcdCBFcnJvciBtZXNzYWdlIG9yIHNwZWNzLlxuXHQgKiBAcGFyYW0ge1V0aWxzLkVycm9yfSBbb3JpZ2luYWxFcnJvcl1cdCBPcmlnaW5hbCBlcnJvciBtZXNzYWdlIChvbmx5IGlmIGZpcnN0IGFyZ3VtZW50IHdhcyBzdHJpbmcpLlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdFV0aWxzLkVycm9yID0gZnVuY3Rpb24oc3BlY3MsIG9yaWdpbmFsRXJyb3IpIHtcblx0XHRpZihVdGlscy5pc1N0cmluZyhzcGVjcykpIHtcblx0XHRcdHNwZWNzID0ge1xuXHRcdFx0XHRtZXNzYWdlOiBzcGVjc1xuXHRcdFx0fTtcblx0XHRcdGlmKG9yaWdpbmFsRXJyb3IgaW5zdGFuY2VvZiBVdGlscy5FcnJvcikge1xuXHRcdFx0XHRzcGVjcy5vcmlnaW5hbEVycm9yID0gb3JpZ2luYWxFcnJvcjtcblx0XHRcdH1cblx0XHR9XG5cdFx0c3BlY3MgPSBzcGVjcyB8fCB7fTtcblxuXHRcdHRoaXMubWVzc2FnZVx0XHQ9IHNwZWNzLm1lc3NhZ2U7XG5cdFx0dGhpcy5vcmlnaW5hbEVycm9yICA9IHNwZWNzLm9yaWdpbmFsRXJyb3I7XG5cdFx0dGhpcy5lcnJvck1hcFx0ICAgPSBzcGVjcy5lcnJvck1hcDtcblx0XHR0aGlzLmNvZGVcdFx0ICAgPSBzcGVjcy5jb2RlO1xuXHRcdHRoaXMuZGF0YVx0XHQgICA9IHNwZWNzLmRhdGE7XG5cdFx0Ly90aGlzLm9yaWdpblx0XHQgPSBVdGlscy5VdGlscy5nZXRDYWxsZXIoMik7XG5cdFx0Ly90aGlzLnN0YWNrXHRcdCAgPSBVdGlscy5VdGlscy5nZXRTdGFja1RyYWNlKDEsIDEwKTtcblx0XHR0aGlzLnB1YmxpY1x0XHRcdD0gc3BlY3MucHVibGljIHx8IHRydWU7XG5cdH07XG5cblx0VXRpbHMuRXJyb3IucHJvdG90eXBlLmxvZyA9IFV0aWxzLkxvZztcblxuXHRVdGlscy5FcnJvci5wcm90b3R5cGUubWVzc2FnZSA9ICdBbiBlcnJvciBvY2N1cnJlZC4nO1xuXHRVdGlscy5FcnJvci5wcm90b3R5cGUub3JpZ2luYWxFcnJvciA9IHVuZGVmaW5lZDtcblx0VXRpbHMuRXJyb3IucHJvdG90eXBlLmVycm9yTWFwID0gdW5kZWZpbmVkO1xuXHRVdGlscy5FcnJvci5wcm90b3R5cGUuY29kZSA9IHVuZGVmaW5lZDtcblx0VXRpbHMuRXJyb3IucHJvdG90eXBlLmRhdGEgPSB1bmRlZmluZWQ7XG5cdFV0aWxzLkVycm9yLnByb3RvdHlwZS5vcmlnaW4gPSB1bmRlZmluZWQ7XG5cdFV0aWxzLkVycm9yLnByb3RvdHlwZS5zdGFjayA9IHVuZGVmaW5lZDtcblxuXHRVdGlscy5FcnJvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5tZXNzYWdlO1xuXHR9O1xuXHRVdGlscy5FcnJvci5wcm90b3R5cGUuZ2V0TWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLm1lc3NhZ2U7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMuRXJyb3IgPSBVdGlscy5FcnJvcjtcbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG5cdHZhciBpc05vZGUgPSB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT09ICd1bmRlZmluZWQnO1xuXHR2YXIgVXRpbHMgPSBpc05vZGUgPyByZXF1aXJlKCcuLi91dGlscy1jb3JlJykuVXRpbHMgOiB3aW5kb3cuVXRpbHM7XG5cdGlmKCFVdGlscykge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJVdGlsc0NvcmUgbm90IGxvYWRlZC5cIik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0dmFyIFN0ciA9IHt9O1xuXG5cdFN0ci5wbHVyYWwgPSBmdW5jdGlvbihzdHJpbmcpIHtcblx0XHRpZighVXRpbHMuaXNTdHJpbmcoc3RyaW5nKSkge1xuXHRcdFx0cmV0dXJuIFwidGhpbmdzXCI7XG5cdFx0fVxuXG5cdFx0Ly8gQ292ZXJzIHNvbWUgaXJyZWd1bGFyIHBsdXJhbHNcblx0XHRpZihzdHJpbmcuc2xpY2UoLTEpID09PSAncycgfHwgc3RyaW5nLnNsaWNlKC0yKSA9PT0gJ3NoJykge1xuXHRcdFx0cmV0dXJuIHN0cmluZyArICdlcyc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0cmluZyArICdzJztcblx0fTtcblxuXHRTdHIuY2FwaXRhbGlzZUZpcnN0ID0gZnVuY3Rpb24gKHMpIHtcblx0XHRpZiAoIVV0aWxzLmlzU3RyaW5nKHMpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG5cdH07XG5cblx0U3RyLmRvdFN0cmluZyA9IGZ1bmN0aW9uKG51bWJlcikge1xuXHRcdGlmKCFVdGlscy5pc051bWJlcihudW1iZXIpKSB7XG5cdFx0XHRyZXR1cm4gXCJcIjtcblx0XHR9XG5cdFx0dmFyIHN0ciA9IFwiXCI7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG51bWJlcjsgaSsrKSB7XG5cdFx0XHRzdHIgKz0gJy4nO1xuXHRcdH1cblx0XHRyZXR1cm4gc3RyO1xuXHR9O1xuXG5cdFN0ci50cnVuY2F0ZVN0cmluZyA9IGZ1bmN0aW9uKHN0ciwgbWF4TGVuZ3RoKSB7XG5cdFx0aWYgKCFVdGlscy5pc1N0cmluZyhzdHIpKSB7XG5cdFx0XHRyZXR1cm4gc3RyO1xuXHRcdH1cblxuXHRcdGlmKHN0ci5sZW5ndGggPiAzICYmIHN0ci5sZW5ndGggPiBtYXhMZW5ndGgtMykge1xuXHRcdFx0cmV0dXJuIHN0ci5zdWJzdHJpbmcoMCwgbWF4TGVuZ3RoLTMpICsgJy4uLic7XG5cdFx0fVxuXHRcdHJldHVybiBzdHI7XG5cdH07XG5cblx0U3RyLm9iamVjdFRvU3RyaW5nID0gZnVuY3Rpb24odmFsdWUsIG1heExlbmd0aCkge1xuXHRcdGlmKG1heExlbmd0aCA8PSAwKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHRcdGlmKG1heExlbmd0aCA9PT0gMSkge1xuXHRcdFx0cmV0dXJuICd7J1xuXHRcdH1cblx0XHRpZihtYXhMZW5ndGggPD0gNSkge1xuXHRcdFx0aWYoT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gJ3t9Jztcblx0XHRcdH1cblx0XHRcdHJldHVybiAneycgKyBVdGlscy5kb3RTdHJpbmcobWF4TGVuZ3RoLTIpICsgJ30nO1xuXHRcdH1cblx0XHR2YXIgc3RyID0gXCJ7XCI7XG5cdFx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cdFx0dmFyIGxhc3RLZXkgPSBrZXlzW2tleXMubGVuZ3RoLTFdO1xuXHRcdHZhciBrZXlDb3VudCA9IDA7XG5cdFx0Zm9yKHZhciBpIGluIHZhbHVlKSB7XG5cdFx0XHR2YXIgY29tbWFDb3VudCA9IHN0ci5sZW5ndGggPT09IDEgPyAwIDogMTtcblx0XHRcdHZhciBkb3RDb3VudCA9IGkgPT09IGxhc3RLZXkgPyAwIDogNDtcblx0XHRcdHZhciBrZXlWYWx1ZSA9IFV0aWxzLnZhbHVlVG9TdHJpbmcodmFsdWVbaV0sIDcpO1xuXHRcdFx0aWYoc3RyLmxlbmd0aCArIGNvbW1hQ291bnQgKyBpLmxlbmd0aCArIDEgKyBrZXlWYWx1ZS5sZW5ndGggKyBkb3RDb3VudCA8IG1heExlbmd0aCkge1xuXHRcdFx0XHRpZihzdHIubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdHN0ciArPSAnLCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RyICs9IGkgKyBcIjpcIiArIGtleVZhbHVlO1xuXHRcdFx0XHRrZXlDb3VudCsrO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGtleUNvdW50IDwga2V5cy5sZW5ndGgpIHtcblx0XHRcdGlmKHN0ci5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdHN0ciArPSAnLCc7XG5cdFx0XHR9XG5cdFx0XHRzdHIgKz0gVXRpbHMuZG90U3RyaW5nKE1hdGgubWluKDMsIG1heExlbmd0aCAtIHN0ci5sZW5ndGggLSAxKSk7XG5cdFx0fVxuXHRcdHN0ciArPSBcIn1cIjtcblx0XHRyZXR1cm4gc3RyO1xuXHR9O1xuXG5cdFN0ci5hcnJheVRvU3RyaW5nID0gZnVuY3Rpb24odmFsdWUsIG1heExlbmd0aCkge1xuXHRcdGlmKG1heExlbmd0aCA8PSAwKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHRcdGlmKG1heExlbmd0aCA9PT0gMSkge1xuXHRcdFx0cmV0dXJuICdbJztcblx0XHR9XG5cdFx0dmFyIGNvdW50Q291bnQgPSAyICsgKFwiXCIrdmFsdWUubGVuZ3RoKS5sZW5ndGg7XG5cdFx0aWYobWF4TGVuZ3RoIDw9IDUgKyBjb3VudENvdW50KSB7XG5cdFx0XHRpZih2YWx1ZS5sZW5ndGggPT09IDApIHJldHVybiAnW10nO1xuXHRcdFx0cmV0dXJuICdbJyArIFV0aWxzLmRvdFN0cmluZyhNYXRoLm1pbigzLCBtYXhMZW5ndGgtMikpICsgJ10nXG5cdFx0fVxuXHRcdHZhciBzdHIgPSAnWyc7XG5cdFx0dmFyIGtleUNvdW50ID0gMDtcblx0XHRmb3IodmFyIGkgPSAwOyBpPHZhbHVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbVZhbHVlID0gVXRpbHMudmFsdWVUb1N0cmluZyh2YWx1ZVtpXSwgNyk7XG5cdFx0XHR2YXIgZG90Q291bnQgPSBpIDwgdmFsdWUubGVuZ3RoLTEgPyA0IDogMDtcblx0XHRcdHZhciBjb21tYUNvdW50ID0gaSA9PT0gMCA/IDAgOiAxO1xuXHRcdFx0aWYoc3RyLmxlbmd0aCArIGNvbW1hQ291bnQgKyBpdGVtVmFsdWUubGVuZ3RoICsgZG90Q291bnQgKyBjb3VudENvdW50IDwgbWF4TGVuZ3RoKSB7XG5cdFx0XHRcdGlmKGkgIT09IDApIHtcblx0XHRcdFx0XHRzdHIgKz0gJywnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN0ciArPSBpdGVtVmFsdWU7XG5cdFx0XHRcdGtleUNvdW50Kys7XG5cdFx0XHRcdGlmKGtleUNvdW50ID49IDIpIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGtleUNvdW50IDwgdmFsdWUubGVuZ3RoKSB7XG5cdFx0XHRpZihzdHIubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRzdHIgKz0gJywnO1xuXHRcdFx0fVxuXHRcdFx0c3RyICs9IFV0aWxzLmRvdFN0cmluZyhNYXRoLm1pbigzLCBtYXhMZW5ndGggLSBzdHIubGVuZ3RoIC0gMSkpO1xuXHRcdH1cblx0XHRzdHIgKz0gJ10nICsgJygnICsgdmFsdWUubGVuZ3RoICsnKSc7XG5cdFx0cmV0dXJuIHN0cjtcblx0fTtcblxuXHRTdHIubnVtYmVyVG9TdHJpbmcgPSBmdW5jdGlvbih2YWx1ZSwgbWF4TGVuZ3RoKSB7XG5cdFx0aWYobWF4TGVuZ3RoIDw9IDApIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0dmFyIHN0clZhbHVlID0gXCJcIit2YWx1ZTtcblx0XHRpZihzdHJWYWx1ZS5sZW5ndGggPD0gbWF4TGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gc3RyVmFsdWU7XG5cdFx0fVxuXHRcdGlmKG1heExlbmd0aCA8IDUpIHtcblx0XHRcdHJldHVybiBVdGlscy5kb3RTdHJpbmcoTWF0aC5taW4oMywgbWF4TGVuZ3RoKSk7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZS50b0V4cG9uZW50aWFsKE1hdGgubWF4KDAsIG1heExlbmd0aC01KSk7XG5cdH07XG5cblx0U3RyLnZhbHVlVG9TdHJpbmcgPSBmdW5jdGlvbih2YWx1ZSwgbWF4TGVuZ3RoKSB7XG5cdFx0aWYobWF4TGVuZ3RoIDw9IDApIHtcblx0XHRcdHJldHVybiBcIlwiO1xuXHRcdH1cblx0XHRpZihVdGlscy5pc1N0cmluZyh2YWx1ZSkpIHtcblx0XHRcdGlmKG1heExlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gJ1wiJztcblx0XHRcdH1cblx0XHRcdGlmKHZhbHVlLmxlbmd0aCA8PSBtYXhMZW5ndGgtMikge1xuXHRcdFx0XHRyZXR1cm4gJ1wiJyArIHZhbHVlICsgJ1wiJztcblx0XHRcdH1cblx0XHRcdGlmKG1heExlbmd0aCA8PSA1KSB7XG5cdFx0XHRcdHJldHVybiAnXCInICsgVXRpbHMuZG90U3RyaW5nKG1heExlbmd0aC0yKSArICdcIic7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gJ1wiJyArIFV0aWxzLnRydW5jYXRlU3RyaW5nKHZhbHVlLCBtYXhMZW5ndGgtMikgKyAnXCInO1xuXHRcdH1cblx0XHRpZihVdGlscy5pc051bWJlcih2YWx1ZSkpIHtcblx0XHRcdHJldHVybiBVdGlscy5udW1iZXJUb1N0cmluZyh2YWx1ZSwgbWF4TGVuZ3RoKTtcblx0XHR9XG5cdFx0aWYoVXRpbHMuaXNCb29sZWFuKHZhbHVlKSkge1xuXHRcdFx0aWYobWF4TGVuZ3RoIDwgNSkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPyAndCcgOiAnZic7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdmFsdWUgPyAndHJ1ZScgOiAnZmFsc2UnO1xuXHRcdH1cblx0XHRpZihVdGlscy5pc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0cmV0dXJuIFV0aWxzLmFycmF5VG9TdHJpbmcodmFsdWUsIG1heExlbmd0aCk7XG5cdFx0fVxuXHRcdGlmKFV0aWxzLmlzT2JqZWN0KHZhbHVlKSkge1xuXHRcdFx0cmV0dXJuIFV0aWxzLm9iamVjdFRvU3RyaW5nKHZhbHVlLCBtYXhMZW5ndGgpO1xuXHRcdH1cblxuXHRcdHJldHVybiBVdGlscy50cnVuY2F0ZVN0cmluZyhcIlwiK3ZhbHVlLCBtYXhMZW5ndGgpO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzLlN0cmluZyA9IFN0cjtcbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuXHR2YXIgaXNOb2RlID0gdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzICE9PSAndW5kZWZpbmVkJztcblx0dmFyIFV0aWxzID0gaXNOb2RlID8gcmVxdWlyZSgnLi4vdXRpbHMtY29yZScpLlV0aWxzIDogd2luZG93LlV0aWxzO1xuXHRpZighVXRpbHMpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiVXRpbHNDb3JlIG5vdCBsb2FkZWQuXCIpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHZhciBWYWxpZGF0aW9uID0ge307XG5cblx0VmFsaWRhdGlvbi5WYWxpZGl0eSA9IGZ1bmN0aW9uIChuYW1lLCBpbnB1dCwgdmFsaWQsIG1lc3NhZ2UpIHtcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIFV0aWxzLmlzT2JqZWN0KG5hbWUpKSB7XG5cdFx0XHR2YXIgc2V0dGluZ3MgPSBuYW1lO1xuXHRcdFx0dGhpcy5zZXROYW1lKHNldHRpbmdzLm5hbWUpO1xuXHRcdFx0dGhpcy5zZXRWYWxpZChzZXR0aW5ncy52YWxpZCk7XG5cdFx0XHR0aGlzLnNldE1lc3NhZ2Uoc2V0dGluZ3MubWVzc2FnZSk7XG5cdFx0XHR0aGlzLnNldElucHV0KHNldHRpbmdzLmlucHV0KTtcblx0XHRcdGlmKCdjb3JyZWN0ZWQnIGluIHNldHRpbmdzKSB7XG5cdFx0XHRcdHRoaXMuc2V0Q29ycmVjdGVkVmFsdWUoc2V0dGluZ3MuY29ycmVjdGVkKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc2V0VmFsaWRpdHlNYXAoc2V0dGluZ3MudmFsaWRpdHlNYXApO1xuXHRcdFx0dGhpcy5zZXRJbmZvKHNldHRpbmdzLmluZm8pO1xuXHRcdFx0dGhpcy5zZXRUeXBlKHNldHRpbmdzLnR5cGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9uYW1lID0gbmFtZTtcblx0XHRcdHRoaXMuX2lucHV0ID0gaW5wdXQ7XG5cdFx0XHR0aGlzLl92YWxpZCA9IHZhbGlkO1xuXHRcdFx0dGhpcy5fbWVzc2FnZSA9IG1lc3NhZ2U7XG5cdFx0fVxuXHR9O1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5fdHlwZSA9ICd2YWx1ZSc7XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLl9uYW1lID0gdW5kZWZpbmVkO1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5faW5wdXQgPSB1bmRlZmluZWQ7XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLl92YWxpZCA9IHRydWU7XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLl92YWxpZGl0eU1hcCA9IHVuZGVmaW5lZDtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuX2NvcnJlY3RlZCA9IHVuZGVmaW5lZDtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuX2lzQ29ycmVjdGVkID0gZmFsc2U7XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLl9pbmZvID0gdW5kZWZpbmVkO1xuXG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLnNldFR5cGUgPSBmdW5jdGlvbih0eXBlKSB7XG5cdFx0dGhpcy5fdHlwZSA9IHR5cGU7XG5cdH07XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLmdldFR5cGUgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5fdHlwZTtcblx0fTtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuc2V0TmFtZSA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0XHR0aGlzLl9uYW1lID0gbmFtZTtcblx0fTtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuZ2V0TmFtZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLl9uYW1lO1xuXHR9O1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5zZXRJbmZvID0gZnVuY3Rpb24oaW5mbykge1xuXHRcdHRoaXMuX2luZm8gPSBpbmZvO1xuXHR9O1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5nZXRJbmZvID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2luZm87XG5cdH07XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLmdldElucHV0ID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2lucHV0O1xuXHR9O1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5zZXRJbnB1dCA9IGZ1bmN0aW9uKGlucHV0KSB7XG5cdFx0dGhpcy5faW5wdXQgPSBpbnB1dDtcblx0fTtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuc2V0VmFsaWQgPSBmdW5jdGlvbih2YWxpZCkge1xuXHRcdHRoaXMuX3ZhbGlkID0gdmFsaWQgIT09IGZhbHNlO1xuXHR9O1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5pc1ZhbGlkID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl92YWxpZDsgfTtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbigpIHtcblx0XHRpZighdGhpcy5pc1ZhbGlkKCkpIHJldHVybiB1bmRlZmluZWQ7XG5cdFx0aWYodGhpcy5faXNDb3JyZWN0ZWQpIHJldHVybiB0aGlzLl9jb3JyZWN0ZWQ7XG5cdFx0cmV0dXJuIHRoaXMuX2lucHV0O1xuXHR9O1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5zZXRNZXNzYWdlID0gZnVuY3Rpb24obWVzc2FnZSkge1xuXHRcdHRoaXMuX21lc3NhZ2UgPSBtZXNzYWdlO1xuXHR9O1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5nZXRNZXNzYWdlID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9tZXNzYWdlOyB9O1xuXHRWYWxpZGF0aW9uLlZhbGlkaXR5LnByb3RvdHlwZS5pc0NvcnJlY3RlZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5faXNDb3JyZWN0ZWQ7XG5cdH07XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLmdldENvcnJlY3RlZFZhbHVlID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2NvcnJlY3RlZDtcblx0fTtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuc2V0Q29ycmVjdGVkVmFsdWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdHRoaXMuX2lzQ29ycmVjdGVkID0gdHJ1ZTtcblx0XHR0aGlzLl9jb3JyZWN0ZWQgPSB2YWx1ZTtcblx0fTtcblx0VmFsaWRhdGlvbi5WYWxpZGl0eS5wcm90b3R5cGUuZ2V0VmFsaWRpdHlNYXAgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5fdmFsaWRpdHlNYXA7XG5cdH07XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLnNldFZhbGlkaXR5TWFwID0gZnVuY3Rpb24obWFwKSB7XG5cdFx0dGhpcy5fdmFsaWRpdHlNYXAgPSBtYXA7XG5cdH07XG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLmNyZWF0ZUJhZFZhbHVlTWVzc2FnZSA9IGZ1bmN0aW9uKHJldHVybkFzQXJyYXkpIHtcblx0XHR2YXIgd2h5ID0gdGhpcy5nZXRNZXNzYWdlKCk7XG5cdFx0aWYod2h5ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0dmFyIG5hbWUgPSB0aGlzLmdldE5hbWUoKTtcblx0XHR2YXIgZGVmYXVsdFRvID0gdGhpcy5nZXRDb3JyZWN0ZWRWYWx1ZSgpO1xuXHRcdHZhciB2YWx1ZSA9IHRoaXMuZ2V0SW5wdXQoKTtcblx0XHRpZighcmV0dXJuQXNBcnJheSkge1xuXHRcdFx0dmFsdWUgPSBVdGlscy52YWx1ZVRvU3RyaW5nKHZhbHVlLCAzMCk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgcmVhc29uIGRvZXMgbm90IGVuZCB3aXRoIGZ1bGwgc3RvcCwgYWRkIG9uZS5cblx0XHRpZighL1xcLlxccyo/Ly5leGVjKHdoeSkpIHtcblx0XHRcdHdoeSArPSAnLic7XG5cdFx0fVxuXG5cdFx0dmFyIG1lc3NhZ2VzID0gW107XG5cdFx0bWVzc2FnZXMucHVzaCh3aHkpO1xuXHRcdG1lc3NhZ2VzLnB1c2goXCJWYWx1ZTogXCIpO1xuXHRcdG1lc3NhZ2VzLnB1c2godmFsdWUpO1xuXHRcdGlmKHRoaXMuaXNWYWxpZCgpICYmIHRoaXMuaXNDb3JyZWN0ZWQoKSkge1xuXHRcdFx0bWVzc2FnZXMucHVzaChcIi4gVXNpbmcgZGVmYXVsdDpcIik7XG5cdFx0XHRtZXNzYWdlcy5wdXNoKFV0aWxzLnZhbHVlVG9TdHJpbmcoZGVmYXVsdFRvKSk7XG5cdFx0fVxuXG5cdFx0aWYocmV0dXJuQXNBcnJheSA9PT0gdHJ1ZSkge1xuXHRcdFx0cmV0dXJuIG1lc3NhZ2VzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbWVzc2FnZXMuam9pbignICcpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogQ3JlYXRlcyBhbiBFcnJvciBvYmplY3QuXG5cdCAqIEByZXR1cm5zIHtVdGlscy5FcnJvcn1cblx0ICovXG5cdFZhbGlkYXRpb24uVmFsaWRpdHkucHJvdG90eXBlLmNyZWF0ZUVycm9yID0gZnVuY3Rpb24oaW5jbHVkZUVycm9yTWFwKSB7XG5cdFx0dmFyIG1lc3NhZ2UgPSB0aGlzLmdldE1lc3NhZ2UoKTtcblx0XHRpZihtZXNzYWdlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHZhciBjb2RlID0gJ3ZhbGlkYXRpb24tJyArIHRoaXMuZ2V0VHlwZSgpO1xuXHRcdHZhciBlcnJvciA9IG5ldyBVdGlscy5FcnJvcih7XG5cdFx0XHRkYXRhXHQ6IHRoaXMuZ2V0SW5wdXQoKSxcblx0XHRcdG1lc3NhZ2VcdDogdGhpcy5jcmVhdGVCYWRWYWx1ZU1lc3NhZ2UoKSxcblx0XHRcdGNvZGVcdDogY29kZVxuXHRcdH0pO1xuXHRcdGlmKGluY2x1ZGVFcnJvck1hcCAhPT0gZmFsc2UpIHtcblx0XHRcdHZhciB2YWxpZGl0eU1hcCA9IHRoaXMuZ2V0VmFsaWRpdHlNYXAoKTtcblx0XHRcdGlmKF8uaXNPYmplY3QodmFsaWRpdHlNYXApKSB7XG5cdFx0XHRcdHZhciBlcnJvck1hcCA9IHt9O1xuXHRcdFx0XHRmb3IodmFyIGkgaW4gdmFsaWRpdHlNYXApIHtcblx0XHRcdFx0XHR2YXIgc3ViRXJyb3IgPSB2YWxpZGl0eU1hcFtpXS5jcmVhdGVFcnJvcigpO1xuXHRcdFx0XHRcdGlmKHN1YkVycm9yIGluc3RhbmNlb2YgVXRpbHMuRXJyb3IpIHtcblx0XHRcdFx0XHRcdGVycm9yTWFwW2ldID0gc3ViRXJyb3I7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVycm9yLmVycm9yTWFwID0gZXJyb3JNYXA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVycm9yO1xuXHR9O1xuXG5cdFZhbGlkYXRpb24uX3ZhbGlkYXRpb25NZXNzYWdlcyA9IHtcblx0XHRpc0FyZ3VtZW50czogXCJNdXN0IGJlIGFyZ3VtZW50cy5cIixcblx0XHRpc0FycmF5OiBcIk11c3QgYmUgYXJyYXkuXCIsXG5cdFx0aXNCb29sZWFuOiBcIk11c3QgYmUgYm9vbGVhbi5cIixcblx0XHRpc0RhdGU6IFwiTXVzdCBiZSBkYXRlLlwiLFxuXHRcdGlzRWxlbWVudDogXCJNdXN0IGJlIGVsZW1lbnQuXCIsXG5cdFx0aXNFbXB0eTogXCJNdXN0IGJlIGVtcHR5LlwiLFxuXHRcdGlzRXJyb3I6IFwiTXVzdCBiZSBlcnJvci5cIixcblx0XHRpc0Zpbml0ZTogXCJNdXN0IGJlIGZpbml0ZS5cIixcblx0XHRpc0Z1bmN0aW9uOiBcIk11c3QgYmUgZnVuY3Rpb24uXCIsXG5cdFx0aXNNYXRjaDogXCJNdXN0IGJlIG1hdGNoXCIsXG5cdFx0aXNOYU46IFwiTXVzdCBiZSBOYU4uXCIsXG5cdFx0aXNOYXRpdmU6IFwiTXVzdCBiZSBuYXRpdmUuXCIsXG5cdFx0aXNOdWxsOiBcIk11c3QgYmUgbnVsbC5cIixcblx0XHRpc051bWJlcjogXCJNdXN0IGJlIG51bWJlci5cIixcblx0XHRpc09iamVjdDogXCJNdXN0IGJlIG9iamVjdC5cIixcblx0XHRpc1BsYWluT2JqZWN0OiBcIk11c3QgYmUgcGxhaW4gb2JqZWN0LlwiLFxuXHRcdGlzUmVnRXhwOiBcIk11c3QgYmUgUmVnRXhwLlwiLFxuXHRcdGlzU3RyaW5nOiBcIk11c3QgYmUgc3RyaW5nLlwiLFxuXHRcdGlzVHlwZWRBcnJheTogXCJNdXN0IGJlIHR5cGVkIGFycmF5LlwiLFxuXHRcdGlzVW5kZWZpbmVkOiBcIk11c3QgYmUgdW5kZWZpbmVkLlwiLFxuXHRcdGlzU3RyaW5nT3JOdW1iZXI6IFwiTXVzdCBiZSBzdHJpbmcgb3IgbnVtYmVyLlwiXG5cdH07XG5cblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSB7VmFsaWRhdGlvbi5WYWxpZGl0eX0gdmFsaWRpdHlcblx0ICogQHJldHVybnMge2Jvb2xlYW59ICAgV2hldGhlciBvciBub3QgdGhlIHZhbGlkaXR5IHdhcyBsb2dnZWQuXG5cdCAqL1xuXHRWYWxpZGF0aW9uLmxvZ1ZhbGlkaXR5ID0gZnVuY3Rpb24odmFsaWRpdHkpIHtcblx0XHRpZighKHZhbGlkaXR5IGluc3RhbmNlb2YgVmFsaWRhdGlvbi5WYWxpZGl0eSkpIHtcblx0XHRcdFV0aWxzLkxvZy5lcnJvcihcIkNvdWxkIG5vdCBsb2cgdmFsaWRpdHkuXCIsIHZhbGlkaXR5KTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZih2YWxpZGl0eS5pc1ZhbGlkKCkgJiYgdmFsaWRpdHkuZ2V0TWVzc2FnZSgpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR2YXIgZXJyb3IgPSB2YWxpZGl0eS5jcmVhdGVFcnJvcigpO1xuXHRcdHZhciBtZXNzYWdlID0gdmFsaWRpdHkuY3JlYXRlQmFkVmFsdWVNZXNzYWdlKHRydWUpO1xuXHRcdG1lc3NhZ2UucHVzaChcIi4gRXJyb3I6IFwiKTtcblx0XHRtZXNzYWdlLnB1c2goZXJyb3IpO1xuXHRcdGlmKCF2YWxpZGl0eS5pc1ZhbGlkKCkpIHtcblx0XHRcdFV0aWxzLkxvZy5lcnJvci5hcHBseShVdGlscy5Mb2csIG1lc3NhZ2UpO1xuXHRcdH0gZWxzZSBpZiAodmFsaWRpdHkuaXNDb3JyZWN0ZWQoKSkge1xuXHRcdFx0VXRpbHMuTG9nLndhcm4uYXBwbHkoVXRpbHMuTG9nLCBtZXNzYWdlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblxuXHRWYWxpZGF0aW9uLnNldFZhbGlkYXRpb25NZXNzYWdlID0gZnVuY3Rpb24obWV0aG9kLCBtZXNzYWdlKSB7XG5cdFx0aWYodHlwZW9mKG1ldGhvZCkgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRVdGlscy5Mb2cuZXJyb3IoXCJWYWxpZGF0aW9uIG1ldGhvZCBhcmd1bWVudCBtdXN0IGJlIHN0cmluZy5cIik7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKHR5cGVvZihtZXNzYWdlKSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFV0aWxzLkxvZy5lcnJvcihcIlZhbGlkYXRpb24gbWV0aG9kIG1lc3NhZ2UgYXJndW1lbnQgbXVzdCBiZSBzdHJpbmcuXCIpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRWYWxpZGF0aW9uLl92YWxpZGF0aW9uTWVzc2FnZXNbbWV0aG9kXSA9IG1lc3NhZ2U7XG5cdH07XG5cblx0VmFsaWRhdGlvbi5nZXRWYWxpZGF0aW9uTWVzc2FnZSA9IGZ1bmN0aW9uKG1ldGhvZCkge1xuXHRcdGlmKHR5cGVvZihtZXRob2QpICE9PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0cmV0dXJuIFZhbGlkYXRpb24uX3ZhbGlkYXRpb25NZXNzYWdlc1ttZXRob2RdO1xuXHR9O1xuXG5cdC8qKlxuXHQgKlxuXHQgKiBWYWxpZGF0ZXMgYSB2YWx1ZSwgYmFzZWQgb24gdGhlIGdpdmVuIHBhcmFtZXRlcnNcblx0ICpcblx0ICogRXhhbXBsZSB1c2FnZTogVmFsaWRhdGlvbi52YWxpZGF0ZU9uZShcIm15VmFyaWFibGVcIiwgXCJhcHBsZVwiLCBcImlzU3RyaW5nXCIsIFwiTXVzdCBiZSBhIHN0cmluZ1wiLCB7ZGVmYXVsdDogXCJiYW5hbmFcIiwgd2FybjogZmFsc2V9KTtcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcdFx0XHRcdFx0IFRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZSB0byBjaGVjay5cblx0ICogQHBhcmFtIHZhbHVlXHRcdFx0XHRcdFx0XHQgVGhlIHZhbHVlIG9mIHRoZSB2YXJpYWJsZSB0byBjaGVjay5cblx0ICogQHBhcmFtIG1ldGhvZFx0IEJvb2xlYW4gY2hlY2sgZm9yIHZhbGlkaXR5LCBvciBuYW1lIG9mIHV0aWwgZm9yIHZhbGlkYXRpb24uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbbWVzc2FnZV1cdFx0XHRcdFtPcHRpb25hbF0gVGhlIG1lc3NhZ2UgdG8gZGlzcGxheSB3aGVuIHZhcmlhYmxlIGlzIG5vdCB2YWxpZC5cblx0ICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcdFx0XHRcdCAgQW4gb2JqZWN0IG9mIGV4dHJhIG9wdGlvbi5cblx0ICogQHBhcmFtIFtvcHRpb25zLmRlZmF1bHRdXHRcdFx0XHQgQSBkZWZhdWx0IHZhbHVlIGlmIGdpdmVuIHZhbHVlIGlzIGludmFsaWQuIElmIG5vdCBwcm92aWRlZCwgdmFsaWRhdGlvbiB3aWxsIGZhaWwgaWYgaW52YWxpZCB2YWx1ZS5cblx0ICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy53YXJuXVx0XHQgIElmIGZhbHNlLCBubyB3YXJuaW5nIHdpbGwgYmUgZ2l2ZW4gaWYgZGVmYXVsdCBpcyBjaG9zZW4uIERlZmF1bHRzIHRvIHRydWUuXG5cdCAqXG5cdCAqIEByZXR1cm4ge1ZhbGlkYXRpb24uVmFsaWRpdHl9XG5cdCAqL1xuXHRWYWxpZGF0aW9uLnZhbGlkYXRlT25lID0gZnVuY3Rpb24obmFtZSwgdmFsdWUsIG1ldGhvZCwgbWVzc2FnZSwgb3B0aW9ucykge1xuXHRcdC8qKiBAdHlwZSB7VmFsaWRhdGlvbi5WYWxpZGl0eXxib29sZWFufSAqL1xuXHRcdHZhciB2YWxpZCA9IHVuZGVmaW5lZDtcblx0XHRpZihVdGlscy5pc1BsYWluT2JqZWN0KG1lc3NhZ2UpKSB7IC8vIG1lc3NhZ2Ugd2FzIG9taXR0ZWRcblx0XHRcdG9wdGlvbnMgPSBtZXNzYWdlO1xuXHRcdFx0bWVzc2FnZSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHQvLyBHZXQgbWV0aG9kIGZyb20gdXRpbHMsIGlmIG1ldGhvZCBpcyBzdHJpbmdcblx0XHRpZihVdGlscy5pc1N0cmluZyhtZXRob2QpKSB7XG5cdFx0XHQvLyBHZXQgZnVuY3Rpb24gZnJvbSB1dGlsc1xuXHRcdFx0dmFyIHV0aWxNZXRob2QgPSBVdGlsc1ttZXRob2RdO1xuXG5cdFx0XHQvLyBJZiBubyBtZXNzYWdlIGlzIHByb3ZpZGVkLCB0cnkgdG8gZmluZCBvbmUgZnJvbSB2YWxpZGF0aW9uTWVzc2FnZXNcblx0XHRcdGlmICghVXRpbHMuaXNTdHJpbmcobWVzc2FnZSkpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFZhbGlkYXRpb24uZ2V0VmFsaWRhdGlvbk1lc3NhZ2UobWV0aG9kKTtcblx0XHRcdFx0aWYobWVzc2FnZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0bWVzc2FnZSA9IFwiTXVzdCBiZSBcIiArIG1ldGhvZCArIFwiLlwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZighVXRpbHMuaXNGdW5jdGlvbih1dGlsTWV0aG9kKSkge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJEb24ndCBrbm93IGhvdyB0byB2YWxpZGF0ZSAnXCIrbWV0aG9kK1wiJ1wiO1xuXHRcdFx0XHRtZXRob2QgPSBuZXcgVmFsaWRhdGlvbi5WYWxpZGl0eShuYW1lLCB2YWx1ZSwgZmFsc2UsIG1lc3NhZ2UpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bWV0aG9kID0gdXRpbE1ldGhvZDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBBcHBseSB2YWxpZGF0aW9uIG1ldGhvZFxuXHRcdGlmKFV0aWxzLmlzRnVuY3Rpb24obWV0aG9kKSkge1xuXHRcdFx0dmFsaWQgPSBtZXRob2QuYXBwbHkoVmFsaWRhdGlvbiwgW3ZhbHVlXSk7XG5cdFx0Ly8gVmFsaWRpdHkgb2JqZWN0XG5cdFx0fSBlbHNlIGlmIChtZXRob2QgaW5zdGFuY2VvZiBWYWxpZGF0aW9uLlZhbGlkaXR5KSB7XG5cdFx0XHR2YWxpZCA9IG1ldGhvZDtcblx0XHQvLyB2YWxpZGF0ZUFycmF5XG5cdFx0fSBlbHNlIGlmIChVdGlscy5pc0FycmF5KG1ldGhvZCkpIHtcblx0XHRcdHZhbGlkID0gVmFsaWRhdGlvbi52YWxpZGF0ZUFycmF5KG5hbWUsIHZhbHVlLCBtZXRob2QsIHVuZGVmaW5lZCwgXy5nZXQob3B0aW9ucywgJ2FycmF5JyksIGZhbHNlKTtcblx0XHQvLyB2YWxpZGF0ZU9iamVjdFxuXHRcdH0gZWxzZSBpZiAoVXRpbHMuaXNPYmplY3QobWV0aG9kKSkge1xuXHRcdFx0dmFsaWQgPSBWYWxpZGF0aW9uLnZhbGlkYXRlT2JqZWN0KG5hbWUsIHZhbHVlLCBtZXRob2QsIHVuZGVmaW5lZCwgZmFsc2UpO1xuXHRcdC8vIEJvb2xlYW4gdmFsaWRhdGlvblxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWxpZCA9IG1ldGhvZCA9PT0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZighKHZhbGlkIGluc3RhbmNlb2YgVmFsaWRhdGlvbi5WYWxpZGl0eSkpIHtcblx0XHRcdHZhbGlkID0gbmV3IFZhbGlkYXRpb24uVmFsaWRpdHkobmFtZSwgdmFsdWUsIHZhbGlkKTtcblx0XHR9XG5cblx0XHQvLyBGZWVkYmFja1xuXHRcdHZhciBfX3NldE1lc3NhZ2UgPSBmdW5jdGlvbih2YWxpZCwgbWVzc2FnZSkge1xuXHRcdFx0aWYoXy5pc0Z1bmN0aW9uKG1lc3NhZ2UpKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBtZXNzYWdlKHZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHZhbGlkLnNldE1lc3NhZ2UobWVzc2FnZSk7XG5cdFx0fTtcblxuXHRcdGlmKCF2YWxpZC5pc1ZhbGlkKCkpIHtcblx0XHRcdGlmKG1lc3NhZ2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRtZXNzYWdlID0gJ0ludmFsaWQuJztcblx0XHRcdH1cblx0XHRcdGlmKFV0aWxzLmlzT2JqZWN0KG9wdGlvbnMpICYmICdkZWZhdWx0JyBpbiBvcHRpb25zKSB7XG5cdFx0XHRcdGlmKFV0aWxzLmlzRnVuY3Rpb24ob3B0aW9ucy5kZWZhdWx0KSkge1xuXHRcdFx0XHRcdHZhciBkZWYgPSBvcHRpb25zLmRlZmF1bHQuYXBwbHkoVmFsaWRhdGlvbiwgW3ZhbHVlXSk7XG5cdFx0XHRcdFx0dmFsaWQuc2V0Q29ycmVjdGVkVmFsdWUoZGVmKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YWxpZC5zZXRDb3JyZWN0ZWRWYWx1ZShvcHRpb25zLmRlZmF1bHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIHdhcm4gPSBVdGlscy5nZXQob3B0aW9ucywgJ3dhcm4nKTtcblx0XHRcdFx0dmFyIF9fd2FybiA9IFV0aWxzLmlzRnVuY3Rpb24od2FybikgPyB3YXJuIDogZnVuY3Rpb24oKSB7IHJldHVybiB3YXJuICE9PSBmYWxzZTsgfTtcblx0XHRcdFx0aWYoX193YXJuKHZhbHVlKSAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRpZih2YWxpZC5nZXRNZXNzYWdlKCkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0X19zZXRNZXNzYWdlKHZhbGlkLCBtZXNzYWdlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0X19zZXRNZXNzYWdlKHZhbGlkLCB1bmRlZmluZWQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhbGlkLnNldFZhbGlkKHRydWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsaWQuc2V0VmFsaWQoZmFsc2UpO1xuXHRcdFx0XHRpZih2YWxpZC5nZXRNZXNzYWdlKCkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdF9fc2V0TWVzc2FnZSh2YWxpZCwgbWVzc2FnZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYoIXZhbGlkLmlzQ29ycmVjdGVkKCkpIHtcblx0XHRcdF9fc2V0TWVzc2FnZSh2YWxpZCwgdW5kZWZpbmVkKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsaWQ7XG5cdH07XG5cblx0LyoqXG5cdCAqIFZhbGlkYXRlcyBhIHNldCBvZiB2YWx1ZXMsIGJhc2VkIG9uIHRoZSBnaXZlbiBwYXJhbWV0ZXJzLlxuXHQgKlxuXHQgKiBFeGFtcGxlIHVzYWdlOiBWYWxpZGF0aW9uLnZhbGlkYXRlKFwibXlWYWxpZGF0aW9uXCIsIHthOiBbXCJhcHBsZVwiLCBcImlzU3RyaW5nXCJdfSwgXCJWYWxpZGF0aW9uIGZhaWxlZC5cIik7XG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHRcdFx0IFRoZSBuYW1lIGJ5IHdoaWNoIHRvIGlkZW50aWZ5IHRoaXMgdmFsaWRhdGlvbi5cblx0ICogQHBhcmFtIHtvYmplY3R9IGNoZWNrc1x0XHQgICBBbiBvYmplY3Qgb2YgY2hlY2tzLiBXaGVyZSB0aGUga2V5cyBhcmUgdGhlIG5hbWVzIG9mIHRoZSB2YXJpYWJsZXMgYW5kIHRoZVxuXHQgKlx0XHRcdFx0XHRcdFx0XHQgIHZhbHVlcyBhcnJheXMgb2YgcGFyYW1ldGVycyB0aGF0IGFyZSBwYXNzZWQgdG8ge0BsaW5rIFZhbGlkYXRpb24udmFsaWRhdGVPbmV9LCBwcmVwZW5kZWQgYnlcblx0ICpcdFx0XHRcdFx0XHRcdFx0ICA8bWU+IGFuZCA8Y2hlY2tzPi5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFtjb25zZXF1ZW5jZV1cdFtvcHRpb25hbF0gQSBtZXNzYWdlIHRvIGJlIGdpdmVuIGlmIHZhbGlkYXRpb24gZmFpbHMuXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja11cdCBbb3B0aW9uYWxdIENhbGxiYWNrIGluc3RlYWQgb2YgZGlyZWN0IGVycm9yIG1lc3NhZ2VzLiBDYWxsYmFjayBpcyBjYWxsZWQgd2l0aCBhIFZhbGlkaXR5IG9iamVjdCBhcyBhcmd1bWVudC5cblx0ICpcblx0ICogQHJldHVybnMge1ZhbGlkYXRpb24uVmFsaWRpdHl9XHRcdElmIHZhbGlkYXRpb24gd2FzIHBhc3NlZCwgYW4gb2JqZWN0IHdpbGwgYmUgcmV0dXJuZWQgY29udGFpbmluZyBhIHRoZSBrZXlzXG5cdCAqXHRcdFx0XHRcdFx0XHRcdCAgb2YgdGhlIGdpdmVuIGNoZWNrcyBvYmplY3QsIHdpdGggdGhlaXIgdmFsaWRhdGVkIHZhbHVlcy5cblx0ICpcdFx0XHRcdFx0XHRcdFx0ICBJZiBhbnkgb2YgdGhlIHZhbGlkYXRpb25zIGZhaWxlZCwgRkFMU0Ugd2lsbCBiZSByZXR1cm5lZC5cblx0ICovXG5cdFZhbGlkYXRpb24udmFsaWRhdGUgPSBmdW5jdGlvbihuYW1lLCBjaGVja3MsIGNvbnNlcXVlbmNlLCBjYWxsYmFjaykge1xuXHRcdC8vIENhbiBhbHNvIGJlIGNhbGxlZCB3aXRob3V0IGEgbmFtZVxuXHRcdGlmKFV0aWxzLmlzT2JqZWN0KG5hbWUpKSB7XG5cdFx0XHRjYWxsYmFjayA9IGNvbnNlcXVlbmNlO1xuXHRcdFx0Y29uc2VxdWVuY2UgPSBjaGVja3M7XG5cdFx0XHRjaGVja3MgPSBuYW1lO1xuXHRcdFx0bmFtZSA9ICdWYWxpZGF0aW9uJztcblx0XHR9XG5cblx0XHR2YXIgdmFsaWRpdHlNYXAgPSB7fTtcblx0XHR2YXIgaW5wdXRNYXAgPSB7fTtcblx0XHRjYWxsYmFjayA9IFZhbGlkYXRpb24uZW5zdXJlKGNhbGxiYWNrLCBVdGlscy5pc0Z1bmN0aW9uLCBjYWxsYmFjayA9PT0gZmFsc2UgPyBmdW5jdGlvbigpe30gOiBWYWxpZGF0aW9uLmxvZ1ZhbGlkaXR5KTtcblxuXHRcdGlmKGNvbnNlcXVlbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbnNlcXVlbmNlID0gJyc7XG5cdFx0fVxuXG5cdFx0aWYoVXRpbHMuaXNPYmplY3QoY2hlY2tzKSkge1xuXHRcdFx0Zm9yKHZhciBpIGluIGNoZWNrcykge1xuXHRcdFx0XHRjaGVja3NbaV0udW5zaGlmdChpKTtcblx0XHRcdFx0dmFsaWRpdHlNYXBbaV0gPSBWYWxpZGF0aW9uLnZhbGlkYXRlT25lLmFwcGx5KFZhbGlkYXRpb24sIGNoZWNrc1tpXSk7XG5cdFx0XHRcdGlucHV0TWFwW2ldID0gY2hlY2tzW2ldWzFdO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgaW52YWxpZENoZWNrc01lc3NhZ2UgPSBcIlBhcmFtZXRlciAnY2hlY2tzJyBtdXN0IGJlIG9iamVjdC4gXCIgKyBjb25zZXF1ZW5jZTtcblx0XHRcdGNhbGxiYWNrKG5ldyBWYWxpZGF0aW9uLlZhbGlkaXR5KG5hbWUsIGNoZWNrcywgaW52YWxpZENoZWNrc01lc3NhZ2UpKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBHbyB0aHJvdWdoIHJlc3VsdHNcblx0XHR2YXIgaXNWYWxpZCA9IHRydWU7XG5cdFx0Zm9yKHZhciBpIGluIHZhbGlkaXR5TWFwKSB7XG5cdFx0XHR2YXIgdmFsaWRpdHkgPSB2YWxpZGl0eU1hcFtpXTtcblx0XHRcdGlmICghdmFsaWRpdHkuaXNWYWxpZCgpKSB7XG5cdFx0XHRcdGlzVmFsaWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDcmVhdGUgVmFsaWRpdHkgb2JqZWN0XG5cdFx0dmFyIHZhbGlkID0gbmV3IFZhbGlkYXRpb24uVmFsaWRpdHkoe1xuXHRcdFx0dHlwZTogJ211bHRpcGxlJyxcblx0XHRcdG5hbWU6IG5hbWUsXG5cdFx0XHRpbnB1dDogaW5wdXRNYXAsXG5cdFx0XHR2YWxpZDogaXNWYWxpZCxcblx0XHRcdHZhbGlkaXR5TWFwOiB2YWxpZGl0eU1hcFxuXHRcdH0pO1xuXHRcdGlmKCFpc1ZhbGlkKSB7XG5cdFx0XHR2YWxpZC5zZXRNZXNzYWdlKFwiVmFsaWRhdGlvbiBmYWlsZWQgZm9yICdcIiArIG5hbWUgKyBcIicuXCIpO1xuXHRcdH1cblx0XHRjYWxsYmFjayh2YWxpZCk7XG5cdFx0cmV0dXJuIHZhbGlkO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBWYWxpZGF0ZXMgYW4gb2JqZWN0LCB0aGUgc2FtZSB3YXkgLnZhbGlkYXRlIHZhbGlkYXRlcyBpc29sYXRlZCB2YWx1ZXMuXG5cdCAqXG5cdCAqIEV4YW1wbGUgdXNhZ2U6IFZhbGlkYXRpb24udmFsaWRhdGVPYmplY3QoJ215T2JqZWN0Jywge2E6ICdhcHBsZSd9LCB7YTogWydpc1N0cmluZyddfSkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHRcdFx0IFx0VGhlIG5hbWUgb2YgdGhlIHZhbGlkYXRpb24uXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcdFx0XHQgIFx0VGhlIG9iamVjdCB0byBjaGVjay5cblx0ICogQHBhcmFtIHtvYmplY3R9IGNoZWNrc1x0XHQgICBcdEFuIG9iamVjdCB3aXRoIGZvciBlYWNoIGtleSB0byBjaGVjayBhbiBhcnJheSBvZiBhcmd1bWVudHMgW21ldGhvZCwgbWVzc2FnZSwgb3B0aW9uc11cblx0ICpcdFx0XHRcdFx0XHRcdFx0ICBcdHRvIHBhc3MgdG8gdGhlIHZhbGlkYXRlT25lIGZ1bmN0aW9uLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW21lc3NhZ2VdXHRcdE1lc3NhZ2UgdG8gYWRkIHRvIFZhbGlkaXR5T2JqZWN0IGluIGNhc2Ugb2YgaW52YWxpZCBvYmplY3QuXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja11cdCBcdEEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIFZhbGlkaXR5IG9iamVjdCBhcyBhcmd1bWVudC5cblx0ICpcblx0ICogQHJldHVybiB7VmFsaWRhdGlvbi5WYWxpZGl0eX1cblx0ICovXG5cdFZhbGlkYXRpb24udmFsaWRhdGVPYmplY3QgPSBmdW5jdGlvbihuYW1lLCBvYmosIGNoZWNrcywgbWVzc2FnZSwgY2FsbGJhY2spIHtcblx0XHRpZihVdGlscy5pc09iamVjdChuYW1lKSkge1xuXHRcdFx0Y2FsbGJhY2sgPSBtZXNzYWdlO1xuXHRcdFx0bWVzc2FnZSA9IGNoZWNrcztcblx0XHRcdGNoZWNrcyA9IG9iajtcblx0XHRcdG9iaiA9IG5hbWU7XG5cdFx0XHRuYW1lID0gJ09iamVjdCc7XG5cdFx0fVxuXHRcdGNhbGxiYWNrID0gVmFsaWRhdGlvbi5lbnN1cmUoY2FsbGJhY2ssIFV0aWxzLmlzRnVuY3Rpb24sIGNhbGxiYWNrID09PSBmYWxzZSA/IGZ1bmN0aW9uKCl7fSA6IFZhbGlkYXRpb24ubG9nVmFsaWRpdHkpO1xuXG5cdFx0aWYoIVV0aWxzLmlzT2JqZWN0KGNoZWNrcykpIHtcblx0XHRcdHZhciBpbnZhbGlkID0gbmV3IFZhbGlkYXRpb24uVmFsaWRpdHkobmFtZSwgY2hlY2tzLCBmYWxzZSwgXCJJbnZhbGlkICdjaGVja3MnIHBhcmFtZXRlci4gTXVzdCBiZSBvYmplY3QuXCIpO1xuXHRcdFx0Y2FsbGJhY2soaW52YWxpZCk7XG5cdFx0XHRyZXR1cm4gaW52YWxpZDtcblx0XHR9XG5cblx0XHRpZighVXRpbHMuaXNPYmplY3Qob2JqKSkge1xuXHRcdFx0dmFyIGludmFsaWQgPSBuZXcgVmFsaWRhdGlvbi5WYWxpZGl0eShuYW1lLCBjaGVja3MsIGZhbHNlLCBcIkludmFsaWQgb2JqZWN0LlwiKTtcblx0XHRcdGNhbGxiYWNrKGludmFsaWQpO1xuXHRcdFx0cmV0dXJuIGludmFsaWQ7XG5cdFx0fVxuXG5cdFx0dmFyIHZhbGlkaXR5TWFwID0ge307XG5cdFx0Zm9yKHZhciBwcm9wIGluIGNoZWNrcykge1xuXHRcdFx0dmFyIGFyZ3MgPSBVdGlscy5jbG9uZShjaGVja3NbcHJvcF0pO1xuXHRcdFx0dmFyIGlzQXJyYXkgPSBVdGlscy5pc0FycmF5KGFyZ3MpO1xuXG5cdFx0XHQvLyBMYXp5LCBzaW5nbGUtcGFyYW1ldGVyIHZhbGlkYXRpb24gKHN0cmluZywgYm9vbGVhbiBvciBmdW5jdGlvbilcblx0XHRcdGlmKFV0aWxzLmlzU3RyaW5nKGFyZ3MpIHx8IFV0aWxzLmlzQm9vbGVhbihhcmdzKSB8fCBVdGlscy5pc0Z1bmN0aW9uKGFyZ3MpKSB7XG5cdFx0XHRcdGFyZ3MgPSBbYXJnc107XG5cdFx0XHQvLyBJbnZhbGlkIHZhbGlkYXRpb25cblx0XHRcdH0gZWxzZSBpZiAoIWlzQXJyYXkpIHtcblx0XHRcdFx0YXJncyA9IFtmYWxzZSwgXCJJbnZhbGlkIHZhbGlkYXRpb24gZGVmaW5pdGlvbi5cIl1cblx0XHRcdH1cblxuXHRcdFx0YXJncy51bnNoaWZ0KG9ialtwcm9wXSk7XG5cdFx0XHRhcmdzLnVuc2hpZnQocHJvcCk7XG5cblx0XHRcdHZhbGlkaXR5TWFwW3Byb3BdID0gVmFsaWRhdGlvbi52YWxpZGF0ZU9uZS5hcHBseShWYWxpZGF0aW9uLCBhcmdzKTtcblx0XHR9XG5cblx0XHR2YXIgX19zZXRNZXNzYWdlID0gZnVuY3Rpb24odmFsaWQsIG1lc3NhZ2UpIHtcblx0XHRcdGlmKF8uaXNGdW5jdGlvbihtZXNzYWdlKSkge1xuXHRcdFx0XHRtZXNzYWdlID0gbWVzc2FnZShvYmopO1xuXHRcdFx0fVxuXHRcdFx0dmFsaWQuc2V0TWVzc2FnZShtZXNzYWdlKTtcblx0XHR9O1xuXG5cdFx0dmFyIHZhbGlkID0gbmV3IFZhbGlkYXRpb24uVmFsaWRpdHkoe1xuXHRcdFx0bmFtZTogbmFtZSxcblx0XHRcdGlucHV0OiBvYmosXG5cdFx0XHR2YWxpZGl0eU1hcDogdmFsaWRpdHlNYXBcblx0XHR9KTtcblx0XHR2YXIgY29ycmVjdGVkID0gdW5kZWZpbmVkO1xuXHRcdGlmKG1lc3NhZ2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0bWVzc2FnZSA9IFwiSW52YWxpZCBvYmplY3QgZm9yICdcIiArIG5hbWUgKyBcIicuXCI7XG5cdFx0fVxuXHRcdHZhciBoYXNNZXNzYWdlID0gZmFsc2U7XG5cdFx0Zm9yKHZhciBwcm9wIGluIHZhbGlkaXR5TWFwKSB7XG5cdFx0XHRpZighdmFsaWRpdHlNYXBbcHJvcF0uaXNWYWxpZCgpKSB7XG5cdFx0XHRcdHZhbGlkLnNldFZhbGlkKGZhbHNlKTtcblx0XHRcdFx0X19zZXRNZXNzYWdlKHZhbGlkLCBtZXNzYWdlKTtcblx0XHRcdH1cblx0XHRcdGlmKHZhbGlkaXR5TWFwW3Byb3BdLmlzQ29ycmVjdGVkKCkpIHtcblx0XHRcdFx0aWYoY29ycmVjdGVkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRjb3JyZWN0ZWQgPSBVdGlscy5jbG9uZShvYmopO1xuXHRcdFx0XHRcdHZhbGlkLnNldENvcnJlY3RlZFZhbHVlKGNvcnJlY3RlZCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29ycmVjdGVkW3Byb3BdID0gdmFsaWRpdHlNYXBbcHJvcF0uZ2V0VmFsdWUoKTtcblx0XHRcdH1cblx0XHRcdGlmKHZhbGlkaXR5TWFwW3Byb3BdLmdldE1lc3NhZ2UoKSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGhhc01lc3NhZ2UgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihoYXNNZXNzYWdlKSB7XG5cdFx0XHRfX3NldE1lc3NhZ2UodmFsaWQsIG1lc3NhZ2UpO1xuXHRcdH1cblx0XHR2YWxpZC5zZXRUeXBlKCdvYmplY3QnKTtcblxuXHRcdGNhbGxiYWNrKHZhbGlkKTtcblx0XHRyZXR1cm4gdmFsaWQ7XG5cdH07XG5cblx0LyoqXG5cdCAqIFZhbGlkYXRlcyBhbiBhcnJheSBvZiB2YWx1ZXMsIHVzaW5nIHRoZSBnaXZlbiB2YWxpZGF0aW9uIGZ1bmN0aW9uLlxuXHQgKlxuXHQgKiBFeGFtcGxlIHVzYWdlOiBWYWxpZGF0aW9uLnZhbGlkYXRlQXJyYXkoXCJteUFycmF5XCIsIFsnYXBwbGUnLCAnYmFuYW5hJywgMTIzXSwgW1wiaXNTdHJpbmdcIiwge2RlZmF1bHQ6ICdmcnVpdCd9XSk7XG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGFycmF5XHRcdFx0XHQgXHRcdFx0XHRcdFRoZSBhcnJheSB0byB2YWxpZGF0ZS5cblx0ICogQHBhcmFtIHtBcnJheXxzdHJpbmd8ZnVuY3Rpb259IGl0ZW1WYWxpZGF0aW9uXHRcdFRoZSB2YWxpZGF0aW9uIGFyZ3VtZW50cyBbbWV0aG9kLCBtZXNzYWdlLCBvcHRpb25zXVxuXHQgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWluTGVuZ3RoPTBdXHRcdFx0XHRbb3B0aW9uYWxdIFRoZSBtaW5pbXVtIGxlbmd0aCBvZiB0aGUgYXJyYXkuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhMZW5ndGg9SW5maW5pdHldIFx0XHRbb3B0aW9uYWxdIFRoZSBtYXhpbXVtIGxlbmd0aCBvZiB0aGUgYXJyYXkuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5pdGVtVHlwZT0nSXRlbSddXHRcdFx0W29wdGlvbmFsXSBXaGF0IHRvIGNhbGwgYW4gaXRlbS5cblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gW2NhbGxiYWNrXVx0XHQgXHRcdFx0XHRcdFtvcHRpb25hbF0gQ2FsbGJhY2sgaW5zdGVhZCBvZiBkaXJlY3QgZXJyb3IgbWVzc2FnZXMuIENhbGxiYWNrIGlzIGNhbGxlZCB3aXRoIGEgVmFsaWRpdHkgb2JqZWN0IGFzIGFyZ3VtZW50LlxuXHQgKi9cblx0VmFsaWRhdGlvbi52YWxpZGF0ZUFycmF5ID0gZnVuY3Rpb24obmFtZSwgYXJyYXksIGl0ZW1WYWxpZGF0aW9uLCBtZXNzYWdlLCBvcHRpb25zLCBjYWxsYmFjaykge1xuXHRcdGlmKFV0aWxzLmlzQXJyYXkobmFtZSkpIHtcblx0XHRcdGNhbGxiYWNrID0gb3B0aW9ucztcblx0XHRcdG9wdGlvbnMgPSBtZXNzYWdlO1xuXHRcdFx0bWVzc2FnZSA9IGl0ZW1WYWxpZGF0aW9uO1xuXHRcdFx0aXRlbVZhbGlkYXRpb24gPSBhcnJheTtcblx0XHRcdGFycmF5ID0gbmFtZTtcblx0XHRcdG5hbWUgPSAnQXJyYXknO1xuXHRcdH1cblx0XHRpZihVdGlscy5pc1BsYWluT2JqZWN0KG1lc3NhZ2UpKXtcblx0XHRcdGNhbGxiYWNrID0gb3B0aW9ucztcblx0XHRcdG9wdGlvbnMgPSBtZXNzYWdlO1xuXHRcdH1cblx0XHR2YXIgbWluTGVuZ3RoID0gXy5nZXQob3B0aW9ucywgJ21pbkxlbmd0aCcpO1xuXHRcdHZhciBtYXhMZW5ndGggPSBfLmdldChvcHRpb25zLCAnbWF4TGVuZ3RoJyk7XG5cdFx0dmFyIGl0ZW1UeXBlID0gXy5nZXQob3B0aW9ucywgJ2l0ZW1UeXBlJyk7XG5cblx0XHRjYWxsYmFjayA9IFZhbGlkYXRpb24uZW5zdXJlKGNhbGxiYWNrLCBVdGlscy5pc0Z1bmN0aW9uLCBjYWxsYmFjayA9PT0gZmFsc2UgPyBmdW5jdGlvbigpe30gOiBWYWxpZGF0aW9uLmxvZ1ZhbGlkaXR5KTtcblxuXHRcdGlmKCFVdGlscy5pc0FycmF5KGFycmF5KSkge1xuXHRcdFx0dmFyIGludmFsaWQgPSBuZXcgVmFsaWRhdGlvbi5WYWxpZGl0eSh7bmFtZTogbmFtZSwgaW5wdXQ6IGFycmF5LCB2YWxpZDogZmFsc2UsIG1lc3NhZ2U6IFwiTXVzdCBiZSBhbiBhcnJheVwiLCB0eXBlOiAnYXJyYXknfSk7XG5cdFx0XHRjYWxsYmFjayhpbnZhbGlkKTtcblx0XHRcdHJldHVybiBpbnZhbGlkO1xuXHRcdH1cblx0XHRpZighVXRpbHMuaXNBcnJheShpdGVtVmFsaWRhdGlvbikpIHtcblx0XHRcdGl0ZW1WYWxpZGF0aW9uID0gW2l0ZW1WYWxpZGF0aW9uXTtcblx0XHR9XG5cdFx0dmFyIHZhbGlkID0gbmV3IFZhbGlkYXRpb24uVmFsaWRpdHkobmFtZSwgYXJyYXksIHRydWUpO1xuXG5cdFx0aWYoIVV0aWxzLmlzTnVtYmVyKG1pbkxlbmd0aCkpIG1pbkxlbmd0aCA9IDA7XG5cdFx0aWYoIVV0aWxzLmlzTnVtYmVyKG1heExlbmd0aCkpIG1heExlbmd0aCA9IEluZmluaXR5O1xuXHRcdGlmKCFVdGlscy5pc1N0cmluZyhpdGVtVHlwZSkpIGl0ZW1UeXBlID0gJ0l0ZW0nO1xuXG5cdFx0dmFyIGl0ZW1QbHVyYWwgPSBVdGlscy5wbHVyYWwoaXRlbVR5cGUpO1xuXG5cdFx0aWYoYXJyYXkubGVuZ3RoIDwgbWluTGVuZ3RoKSB7XG5cdFx0XHR2YXIgaW52YWxpZDIgPSBuZXcgVmFsaWRhdGlvbi5WYWxpZGl0eSh7XG5cdFx0XHRcdG5hbWU6IG5hbWUsXG5cdFx0XHRcdGlucHV0OiBhcnJheSxcblx0XHRcdFx0dmFsaWQ6IGZhbHNlLFxuXHRcdFx0XHR0eXBlOiAnYXJyYXknLFxuXHRcdFx0XHRtZXNzYWdlOiBuYW1lICsgXCIgbXVzdCBjb250YWluIGF0IGxlYXN0IFwiICsgbWluTGVuZ3RoICsgXCIgXCIraXRlbVBsdXJhbC50b0xvd2VyQ2FzZSgpXG5cdFx0XHR9KTtcblx0XHRcdGNhbGxiYWNrKGludmFsaWQyKTtcblx0XHRcdHJldHVybiBpbnZhbGlkMjtcblx0XHR9XG5cdFx0aWYoYXJyYXkubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG5cdFx0XHR2YXIgaW52YWxpZDMgPSBuZXcgVmFsaWRhdGlvbi5WYWxpZGl0eSh7XG5cdFx0XHRcdG5hbWU6IG5hbWUsXG5cdFx0XHRcdGlucHV0OiBhcnJheSxcblx0XHRcdFx0dmFsaWQ6IGZhbHNlLFxuXHRcdFx0XHR0eXBlOiAnYXJyYXknLFxuXHRcdFx0XHRtZXNzYWdlOiBuYW1lICsgXCIgbWF5IGNvbnRhaW4gYXQgbW9zdCBcIiArIG1heExlbmd0aCArIFwiIFwiK2l0ZW1QbHVyYWwudG9Mb3dlckNhc2UoKVxuXHRcdFx0fSk7XG5cdFx0XHRjYWxsYmFjayhpbnZhbGlkMyk7XG5cdFx0XHRyZXR1cm4gaW52YWxpZDM7XG5cdFx0fVxuXG5cdFx0dmFyIGl0ZW0gPSBudWxsLFxuXHRcdFx0aXRlbU5hbWUgPSBudWxsLFxuXHRcdFx0dmFsaWRhdGlvbkFyZ3MgPSBudWxsLFxuXHRcdFx0dmFsaWRpdHlNYXAgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGl0ZW0gPSBhcnJheVtpXTtcblx0XHRcdGl0ZW1OYW1lID0gVXRpbHMuaXNTdHJpbmcoaXRlbSkgPyBpdGVtIDogaTtcblxuXHRcdFx0dmFsaWRhdGlvbkFyZ3MgPSBVdGlscy5jbG9uZShpdGVtVmFsaWRhdGlvbik7XG5cdFx0XHR2YWxpZGF0aW9uQXJncy51bnNoaWZ0KGl0ZW0pO1xuXHRcdFx0dmFsaWRhdGlvbkFyZ3MudW5zaGlmdChpdGVtTmFtZSk7XG5cblx0XHRcdHZhbGlkaXR5TWFwW2ldID0gVmFsaWRhdGlvbi52YWxpZGF0ZU9uZS5hcHBseShWYWxpZGF0aW9uLCB2YWxpZGF0aW9uQXJncyk7XG5cdFx0fVxuXG5cdFx0dmFyIGNvcnJlY3RlZCA9IHVuZGVmaW5lZDtcblx0XHR2YXIgaW52YWxpZE1lc3NhZ2UgPSBcIkludmFsaWQgXCIgKyBpdGVtUGx1cmFsLnRvTG93ZXJDYXNlKCkgKyBcIiBpbiBcIiArIG5hbWUgKyBcIiBhcnJheS5cIjtcblx0XHR2YXIgaGFzTWVzc2FnZSA9IGZhbHNlO1xuXHRcdGZvcih2YXIgaSBpbiB2YWxpZGl0eU1hcCkge1xuXHRcdFx0aWYoIXZhbGlkaXR5TWFwW2ldLmlzVmFsaWQoKSkge1xuXHRcdFx0XHR2YWxpZC5zZXRWYWxpZChmYWxzZSk7XG5cdFx0XHRcdHZhbGlkLnNldE1lc3NhZ2UoaW52YWxpZE1lc3NhZ2UpO1xuXHRcdFx0fVxuXHRcdFx0aWYodmFsaWRpdHlNYXBbaV0uaXNDb3JyZWN0ZWQoKSkge1xuXHRcdFx0XHRpZihjb3JyZWN0ZWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGNvcnJlY3RlZCA9IFV0aWxzLmNsb25lKGFycmF5KTtcblx0XHRcdFx0XHR2YWxpZC5zZXRDb3JyZWN0ZWRWYWx1ZShjb3JyZWN0ZWQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvcnJlY3RlZFtpXSA9IHZhbGlkaXR5TWFwW2ldLmdldFZhbHVlKCk7XG5cdFx0XHR9XG5cdFx0XHRpZih2YWxpZGl0eU1hcFtpXS5nZXRNZXNzYWdlKCkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRoYXNNZXNzYWdlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoaGFzTWVzc2FnZSkge1xuXHRcdFx0dmFsaWQuc2V0TWVzc2FnZShpbnZhbGlkTWVzc2FnZSk7XG5cdFx0fVxuXG5cdFx0dmFsaWQuc2V0VmFsaWRpdHlNYXAodmFsaWRpdHlNYXApO1xuXHRcdHZhbGlkLnNldFR5cGUoJ2FycmF5Jyk7XG5cblx0XHRjYWxsYmFjayh2YWxpZCk7XG5cdFx0cmV0dXJuIHZhbGlkO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgdGhlIGdpdmVuIGNsYXNzLlxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjaGVja0NsYXNzXHQgVGhlIGNsYXNzIHRoZSBzZWNvbmQgYXJndW1lbnQgc2hvdWxkIGJlIGFuIGluc3RhbmNlIG9mLlxuXHQgKiBAcGFyYW0ge29iamVjdH0gW2FyZ11cdFx0XHRUaGUgYXJndW1lbnQgdG8gY2hlY2suIElmIG5vdCBwcm92aWRlZCwgdGhlIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIGEgZnVuY3Rpb25cblx0ICpcdFx0XHRcdFx0XHRcdFx0ICB0aGF0IHJlcXVpcmVzIGEgc2luZ2xlIGFyZ3VtZW50IHRvIGNoZWNrIGlmIHRoYXQgaXMgYW4gaW5zdGFuY2Ugb2YgdGhlIGdpdmVuIGNsYXNzLlxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdFZhbGlkYXRpb24uaW5zdGFuY2VvZiA9IGZ1bmN0aW9uKGNoZWNrQ2xhc3MsIGFyZykge1xuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oZnV0dXJlQXJnKSB7XG5cdFx0XHRcdHJldHVybiBWYWxpZGF0aW9uLmluc3RhbmNlb2YoY2hlY2tDbGFzcywgZnV0dXJlQXJnKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIFV0aWxzLmlzT2JqZWN0KGNoZWNrQ2xhc3MpICYmIGFyZyBpbnN0YW5jZW9mIGNoZWNrQ2xhc3M7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gYXJndW1lbnQgaXMgZGVmaW5lZCwgYW5kIG5vdCBudWxsLlxuXHQgKiBAcGFyYW0gdlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdFZhbGlkYXRpb24uZGVmID0gZnVuY3Rpb24gKHYpIHtcblx0XHRyZXR1cm4gKCh2ICE9PSBudWxsKSAmJiAodiAhPT0gdW5kZWZpbmVkKSk7XG5cdH07XG5cblx0VmFsaWRhdGlvbi5lbnN1cmUgPSBmdW5jdGlvbiAodmFyaWFibGUsIGV2YWxGdW5jLCBkZWZhdWx0VmFsdWUsIG1lc3NhZ2UpIHtcblx0XHR2YXIgc3VyZSA9IHZhcmlhYmxlO1xuXHRcdGlmICghZXZhbEZ1bmModmFyaWFibGUpKSB7XG5cdFx0XHRzdXJlID0gZGVmYXVsdFZhbHVlO1xuXHRcdFx0aWYgKFZhbGlkYXRpb24uZGVmKG1lc3NhZ2UpKSB7XG5cdFx0XHRcdFV0aWxzLkxvZy5lcnJvcihcIlZhbGlkYXRpb246OmVuc3VyZVwiLCBtZXNzYWdlLCB2YXJpYWJsZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN1cmU7XG5cdH07XG5cblx0VmFsaWRhdGlvbi5lbnN1cmVQYXRoID0gZnVuY3Rpb24odmFyaWFibGUsIHBhdGgsIGV2YWxGdW5jLCBkZWZhdWx0VmFsdWUsIG1lc3NhZ2UpIHtcblx0XHRpZighXy5pc09iamVjdCh2YXJpYWJsZSkpIHtcblx0XHRcdHZhcmlhYmxlID0ge307XG5cdFx0fVxuXHRcdGlmKF8uaXNBcnJheShwYXRoKSkge1xuXHRcdFx0Xy5mb3JFYWNoKHBhdGgsIGZ1bmN0aW9uKHApIHtcblx0XHRcdFx0dmFyaWFibGUgPSBWYWxpZGF0aW9uLmVuc3VyZVBhdGgodmFyaWFibGUsIHAsIGV2YWxGdW5jLCBkZWZhdWx0VmFsdWUsIHAgKyBcIjogXCIgKyBtZXNzYWdlKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHZhcmlhYmxlO1xuXHRcdH1cblxuXHRcdHZhciBjaGVjayA9IF8uZ2V0KHZhcmlhYmxlLCBwYXRoKTtcblx0XHRpZiAoIWV2YWxGdW5jKGNoZWNrKSkge1xuXHRcdFx0Xy5zZXQodmFyaWFibGUsIHBhdGgsIGRlZmF1bHRWYWx1ZSk7XG5cdFx0XHRpZiAoVmFsaWRhdGlvbi5kZWYobWVzc2FnZSkpIHtcblx0XHRcdFx0VmFsaWRhdGlvbi5Mb2cuZXJyb3IobWVzc2FnZSwgdmFyaWFibGUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB2YXJpYWJsZTtcblx0fTtcblxuXHRWYWxpZGF0aW9uLmlzU3RyaW5nT3JOdW1iZXIgPSBmdW5jdGlvbih2YXJpYWJsZSkge1xuXHRcdHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YXJpYWJsZSkpIHx8IF8uaXNTdHJpbmcodmFyaWFibGUpO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzLlZhbGlkYXRpb24gPSBWYWxpZGF0aW9uO1xufSkoKTtcbiJdfQ==
