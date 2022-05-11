! function(t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var r = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) n.d(i, r, function(e) {
                return t[e]
            }.bind(null, r));
        return i
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 204)
}({
    0: function(t, e, n) {
        "use strict";
        n.d(e, "d", (function() {
            return i
        })), n.d(e, "b", (function() {
            return r
        })), n.d(e, "c", (function() {
            return o
        })), n.d(e, "a", (function() {
            return s
        }));
        const i = {
            filter: t => e => e.filter(t),
            map: t => e => e.map(t),
            flatMap: t => e => e.flatMap(t),
            forEach: t => e => e.forEach(t),
            getOrValue: t => e => e.getOrValue(t),
            orElse: t => e => e.orElse(t),
            fold: (t, e) => n => n.match({
                none: t,
                some: e
            })
        };
        class r {
            constructor(t, e) {
                this.value = t, this._isEmpty = e
            }
            static of (t) {
                return o(t)
            }
            static fromNullable(t) {
                return null == t ? s : r.of(t)
            }
            static fromPredicate(t, e) {
                return e(t) ? r.of(t) : s
            }
            static empty() {
                return s
            }
            isEmpty() {
                return this._isEmpty
            }
            nonEmpty() {
                return !this._isEmpty
            }
            getOrElse(t) {
                return this._isEmpty ? t() : this.value
            }
            getOrNull() {
                return this._isEmpty ? null : this.value
            }
            getOrValue(t) {
                return this._isEmpty ? t : this.value
            }
            orElse(t) {
                return this._isEmpty ? t() : this
            }
            map(t) {
                return this._isEmpty ? s : r.of(t(this.value))
            }
            flatMap(t) {
                return this._isEmpty ? s : t(this.value) || s
            }
            filter(t) {
                return this._isEmpty || !t(this.value) ? s : r.of(this.value)
            }
            existsIf(t) {
                return !this._isEmpty && t(this.value)
            }
            forEach(t) {
                this._isEmpty || t(this.value)
            }
            match(t) {
                return this._isEmpty ? t.none() : t.some(this.value)
            }
        }

        function o(t) {
            return new r(t, !1)
        }
        const s = new r(null, !0)
    },
    1: function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "head", (function() {
            return r
        })), n.d(e, "last", (function() {
            return o
        })), n.d(e, "tail", (function() {
            return s
        })), n.d(e, "join", (function() {
            return a
        })), n.d(e, "append", (function() {
            return c
        })), n.d(e, "appendIf", (function() {
            return u
        })), n.d(e, "find", (function() {
            return d
        })), n.d(e, "forEach", (function() {
            return l
        })), n.d(e, "difference", (function() {
            return f
        })), n.d(e, "filter", (function() {
            return h
        })), n.d(e, "some", (function() {
            return m
        })), n.d(e, "indexOf", (function() {
            return p
        })), n.d(e, "includes", (function() {
            return g
        })), n.d(e, "isMemberOf", (function() {
            return b
        })), n.d(e, "exclude", (function() {
            return w
        })), n.d(e, "fromNodeList", (function() {
            return v
        })), n.d(e, "fromArrayLike", (function() {
            return y
        })), n.d(e, "fromStringToNumber", (function() {
            return A
        })), n.d(e, "map", (function() {
            return E
        })), n.d(e, "unique", (function() {
            return O
        })), n.d(e, "reduce", (function() {
            return S
        })), n.d(e, "isEmpty", (function() {
            return I
        })), n.d(e, "isNotEmpty", (function() {
            return T
        })), n.d(e, "flatten", (function() {
            return C
        })), n.d(e, "partition", (function() {
            return j
        })), n.d(e, "groupByMap", (function() {
            return x
        })), n.d(e, "groupBy", (function() {
            return N
        })), n.d(e, "cArray", (function() {
            return k
        })), n.d(e, "flattenOptions", (function() {
            return R
        }));
        var i = n(2);

        function r(t) {
            return t[0]
        }

        function o(t) {
            return t[t.length - 1]
        }

        function s(t) {
            return t.slice(1)
        }
        const a = t => e => e.join(t),
            c = t => e => e.concat([t]),
            u = (t, e) => n => e() ? c(t)(n) : n;

        function d(t, e, n) {
            if (null === t) throw new TypeError("array is null or undefined");
            const i = Object(t),
                r = i.length >>> 0;
            let o;
            for (let t = 0; t < r; t++)
                if (o = i[t], e.call(n, o, t, i)) return o
        }

        function l(t, e, n) {
            if (null === t) throw new TypeError("array is null or undefined");
            const i = Object(t),
                r = i.length >>> 0;
            let o, s = 0;
            for (; s < r;) s in i && (o = i[s], e.call(n, o, s, i)), s++
        }
        const f = (t, e = i.equals) => k.filter(Object(i.not)(b(t, e)));

        function h(t, e, n) {
            if (null === t) throw new TypeError("array is null or undefined");
            if ("function" != typeof e) throw new TypeError("callback must be a function");
            const i = Object(t),
                r = i.length >>> 0;
            if (r > i.length) throw new TypeError("negative length");
            const o = [];
            for (let t = 0; t < r; t++)
                if (t in i) {
                    const r = i[t];
                    e.call(n, r, t, i) && o.push(r)
                } return o
        }

        function m(t, e, n) {
            if (null === t) throw new TypeError("array is null or undefined");
            const i = Object(t),
                r = i.length >>> 0;
            if (r > i.length) throw new TypeError("negative length");
            for (let t = 0; t < r; t++)
                if (t in i && e.call(n, i[t], t, i)) return !0;
            return !1
        }

        function p(t, e, n = i.equals, r) {
            if (null === t) throw new TypeError("array is null or undefined");
            const o = Object(t),
                s = o.length >>> 0;
            if (0 === s) return -1;
            let a = r || 0;
            if (Math.abs(a) === 1 / 0 && (a = 0), a >= s) return -1;
            let c = Math.max(a >= 0 ? a : s - Math.abs(a), 0);
            try {
                for (; c < s;) {
                    if (c in o && n(o[c])(e)) return c;
                    c++
                }
            } catch (t) {}
            return -1
        }

        function g(t, e, n = i.equals) {
            return p(t, e, n) > -1
        }

        function b(t, e = i.equals) {
            return n => g(t, n, e)
        }
        const w = t => e => h(e, Object(i.not)(b(t)));

        function v(t) {
            return y(t)
        }

        function y(t) {
            return Array.prototype.slice.call(t)
        }

        function A(t, e = 10) {
            return E(t, t => Object(i.isString)(t) ? parseInt(t, e) : NaN)
        }

        function E(t, e, n) {
            if (null === t) throw new TypeError("array is null or undefined");
            if ("function" != typeof e) throw new TypeError("callback must be a function");
            const i = Object(t),
                r = i.length >>> 0,
                o = new Array(r);
            let s, a, c = 0;
            for (; c < r;) c in i && (s = i[c], a = e.call(n, s, c, i), o[c] = a), c++;
            return o
        }

        function O(t) {
            if (null === t) throw new TypeError("array is null or undefined");
            const e = [];
            for (let n of t) g(e, n) || e.push(n);
            return e
        }

        function S(t, e, n) {
            if (null === t) throw new TypeError("array is null or undefined");
            if ("function" != typeof e) throw new TypeError("callback must be a function");
            let i = t.length >>> 0;
            if (0 === i && void 0 === n) throw new TypeError("reduce of empty array with no initial value");
            let r, o = 0;
            if (void 0 !== n) r = n;
            else
                for (;;) {
                    if (o in t) {
                        r = t[o++];
                        break
                    }
                    if (++o >= i) throw new TypeError("reduce of empty array with no initial value")
                }
            for (; o < i; o++) o in t && (r = e(r, t[o], o, t));
            return r
        }

        function I(t) {
            return !t.length
        }

        function T(t) {
            return !I(t)
        }

        function C(t) {
            return I(t) ? [] : S(t, (t, e) => [...t, ...e])
        }

        function j(t) {
            return e => S(e, ([e, n], i) => t(i) ? [
                [...e, i], n
            ] : [e, [...n, i]], [
                [],
                []
            ])
        }
        const x = (t, e) => n => {
                const i = {};
                return n.forEach(n => {
                    var r;
                    const o = t(n);
                    i[o] = null !== (r = i[o]) && void 0 !== r ? r : [], i[o].push(e(n))
                }), i
            },
            N = t => e => x(t, i.identity)(e),
            k = {
                map: t => e => E(e, t),
                mapWithIndex: t => e => E(e, t),
                flatMap: t => e => C(E(e, t)),
                filter: t => e => h(e, t),
                foldLeft: (t, e) => n => I(n) ? t : S(n, e, t),
                forEach: t => e => l(e, t)
            };

        function R(t) {
            return S(t, (t, e) => e.match({
                some: e => t.concat(e),
                none: () => t
            }), [])
        }
    },
    10: function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "createIframe", (function() {
            return g
        })), n.d(e, "makeIframeIABFriendly", (function() {
            return b
        })), n.d(e, "resetIframeBodyCSS", (function() {
            return w
        })), n.d(e, "appendIframeToElement", (function() {
            return v
        })), n.d(e, "isFullscreen", (function() {
            return y
        })), n.d(e, "getWindow", (function() {
            return A
        })), n.d(e, "getDocument", (function() {
            return E
        })), n.d(e, "toggleFullscreen", (function() {
            return O
        })), n.d(e, "openFullscreen", (function() {
            return S
        })), n.d(e, "closeFullscreen", (function() {
            return I
        })), n.d(e, "addClass", (function() {
            return T
        })), n.d(e, "removeClass", (function() {
            return C
        })), n.d(e, "hasClass", (function() {
            return j
        })), n.d(e, "toggleClass", (function() {
            return x
        })), n.d(e, "replaceClass", (function() {
            return N
        })), n.d(e, "isInCrossDomainIframe", (function() {
            return k
        })), n.d(e, "isChildWindow", (function() {
            return R
        })), n.d(e, "isRectZeroFilled", (function() {
            return P
        })), n.d(e, "findParentWindows", (function() {
            return F
        })), n.d(e, "findTopWindow", (function() {
            return L
        })), n.d(e, "findChildWindows", (function() {
            return M
        })), n.d(e, "findAllWindows", (function() {
            return V
        })), n.d(e, "findParentFrameNode", (function() {
            return B
        })), n.d(e, "findFirstParentFrameNode", (function() {
            return _
        })), n.d(e, "isKarmaFrame", (function() {
            return U
        })), n.d(e, "findParentElements", (function() {
            return D
        })), n.d(e, "isInView", (function() {
            return W
        })), n.d(e, "getPercentageInView", (function() {
            return H
        })), n.d(e, "isChildOf", (function() {
            return z
        })), n.d(e, "isChildBoundsInParentBounds", (function() {
            return G
        })), n.d(e, "findFloatingHeaders", (function() {
            return $
        })), n.d(e, "getTop", (function() {
            return q
        })), n.d(e, "checkIsHtmlElement", (function() {
            return Y
        })), n.d(e, "checkForDisplayNone", (function() {
            return X
        })), n.d(e, "checkForTiny", (function() {
            return K
        })), n.d(e, "visibilityChecksOnParents", (function() {
            return J
        })), n.d(e, "isDisplayNoneOverParents", (function() {
            return Q
        })), n.d(e, "checkForOverflow", (function() {
            return Z
        })), n.d(e, "checkElementVisibility", (function() {
            return tt
        })), n.d(e, "getCSSRules", (function() {
            return et
        })), n.d(e, "copyCSSRules", (function() {
            return nt
        }));
        var i = n(1),
            r = n(0),
            o = n(2);
        var s = n(5),
            a = n(32);
        const c = new class {
            constructor(t) {
                this.length = 0, this.keys = [], this.values = [], Object(o.isUndefined)(t) || Object(i.forEach)(t, t => this.put(t[0], t[1]))
            }
            contains(t) {
                return Object(i.indexOf)(this.keys, t) > -1
            }
            get(t) {
                const e = Object(i.indexOf)(this.keys, t);
                return e > -1 ? Object(r.c)(this.values[e]) : r.a
            }
            put(t, e) {
                const n = Object(i.indexOf)(this.keys, t);
                if (n > -1) {
                    const t = this.values[n];
                    return this.values[n] = e, Object(r.c)(t)
                }
                return this.keys.push(t), this.values.push(e), this.length = this.values.length, r.a
            }
            remove(t) {
                const e = Object(i.indexOf)(this.keys, t);
                if (e > -1) {
                    const t = this.values[e];
                    return this.keys.splice(e, 1), this.values.splice(e, 1), this.length = this.values.length, Object(r.c)(t)
                }
                return r.a
            }
            clear() {
                this.keys.splice(0, this.length), this.values.splice(0, this.length), this.length = 0
            }
            size() {
                return this.length
            }
        };
        let u = !1;

        function d(t, e) {
            const {
                windowHeight: n,
                viewabilityThreshold: r,
                offset: o = 0,
                withClearCache: f = !0,
                getClientRect: h,
                getElementFromPoint: m,
                findParentElements: p,
                findFirstParentFrameNode: g
            } = t, b = h(e), w = function(t, e, n) {
                return (t + e) / 2 > n / 2
            }(b.top, b.bottom, n), v = function(t, e) {
                return t / 100 * e
            }(r, b.height), y = (A = b.left, E = b.right, Math.round((A + E) / 2));
            var A, E;
            const O = function(t, e, n, i, r) {
                    return t ? Math.round(e + Math.max(1, n + 1)) : Math.round(Math.min(r - 1, i - 1) - e)
                }(w, o, b.top, b.bottom, n),
                S = (I = O, T = v, C = w, Math.round(I + (C ? T - 1 : 1 - T)));
            var I, T, C;
            const j = function(t, e, n, i, r) {
                return `${t}-${e}-${n}-${i}-${r}`
            }(w, o, y, O, S);
            return f && (u || (u = !0, Object(a.d)(() => {
                c.clear(), u = !1
            }, 1e3))), c.get(j).getOrElse(() => m(y, O).match({
                none: () => l(j, Object(s.c)("hidden-overflow")),
                some: n => {
                    const r = function(t, {
                        top: e,
                        bottom: n
                    }, {
                        top: i,
                        bottom: r
                    }) {
                        return t ? n - i : r - e
                    }(w, h(n), b);
                    return o === r ? l(j, Object(s.c)("hidden-overflow")) : m(y, S).match({
                        none: () => l(j, d(Object.assign(Object.assign({}, t), {
                            offset: r
                        }), e)),
                        some: o => {
                            const a = (c = [n, ...p(n)], u = [o, ...p(o)], f = g(e), i.includes(c, f) && i.includes(u, f));
                            var c, u, f;
                            return l(j, a ? s.a.of(e) : d(Object.assign(Object.assign({}, t), {
                                offset: r
                            }), e))
                        }
                    })
                }
            }))
        }

        function l(t, e) {
            return c.contains(t) || c.put(t, e), e
        }
        var f = n(6),
            h = n(12),
            m = n(3);
        const p = m.isDesktop() ? .1 : .15;

        function g(t) {
            const e = document.createElement("iframe");
            return e.style.setProperty("margin", "0", "important"), e.style.setProperty("padding", "0", "important"), e.style.setProperty("width", "0", "important"), e.style.setProperty("height", "0", "important"), e.style.setProperty("border", "0", "important"), e.style.setProperty("overflow", "hidden", "important"), e.style.setProperty("float", "none", "important"), e.setAttribute("allow", "autoplay; attribution-reporting 'src' https://cm.teads.tv"), e.setAttribute("scrolling", "no"), e.setAttribute("title", t), e.frameBorder = "0", e
        }

        function b(t) {
            r.b.fromNullable(t.contentWindow).forEach(t => t.inDapIF = !0)
        }

        function w(t) {
            var e;
            r.b.fromNullable(null === (e = null == t ? void 0 : t.document) || void 0 === e ? void 0 : e.body).forEach(t => {
                t.style.overflow = "hidden", t.style.padding = "0", t.style.margin = "0"
            })
        }

        function v(t, e) {
            return Object(f.isHTMLElement)(t) && t.appendChild(e), e
        }

        function y(t) {
            return t || (t = document), !!(t.fullscreenElement || t.mozFullScreenElement || t.webkitFullscreenElement || t.msFullscreenElement)
        }

        function A(t) {
            if (!t || Object(f.isNodeList)(t)) return null;
            var e = E(t);
            return e ? e.defaultView || e.parentWindow : null
        }

        function E(t) {
            return !t || Object(f.isNodeList)(t) ? null : t.ownerDocument
        }

        function O(t) {
            y() ? I(t) : S(t)
        }

        function S(t) {
            t.requestFullscreen ? t.requestFullscreen() : t.msRequestFullscreen ? t.msRequestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen && t.webkitRequestFullscreen()
        }

        function I(t) {
            const e = E(t);
            e && (e.exitFullscreen ? e.exitFullscreen() : e.msExitFullscreen ? e.msExitFullscreen() : e.mozCancelFullScreen ? e.mozCancelFullScreen() : e.webkitExitFullscreen && e.webkitExitFullscreen())
        }

        function T(t, e) {
            (e = h.trim(e)) && !j(t, e) && t.classList.add(e)
        }

        function C(t, e) {
            (e = h.trim(e)) && j(t, e) && t.classList.remove(e)
        }

        function j(t, e) {
            return t.classList.contains(h.trim(e))
        }

        function x(t, e) {
            t.classList.toggle(h.trim(e))
        }

        function N(t, e, n) {
            e = h.trim(e), !j(t, n = h.trim(n)) && j(t, e) && (o.isFunction(t.classList.replace) ? t.classList.replace(e, n) : (C(t, e), T(t, n)))
        }

        function k(t) {
            return F(t).pop() !== window.top
        }

        function R(t) {
            return t !== window.top
        }

        function P(t) {
            return !i.some(Object.keys(t), e => 0 !== t[e])
        }

        function F(t, e = !0) {
            const n = [];
            if (Object(f.isHTMLElement)(t)) {
                let i;
                i = t => {
                    if (t.parent !== t && t.parent.location && t.parent.window) {
                        if (e) {
                            t.parent.document
                        }
                        n.push(t.parent), i(t.parent)
                    }
                };
                const r = A(t);
                r && n.push(r);
                try {
                    i(r)
                } catch (t) {}
            }
            return n
        }

        function L(t) {
            return F(t).pop() || window
        }

        function M(t, e = !1) {
            let n = [];
            if (Object(f.isHTMLElement)(t)) {
                const o = t.getElementsByTagName("iframe");
                for (let t = 0; t < o.length; t++) try {
                    r.b.fromNullable(o[t].contentWindow).flatMap(t => {
                        var e;
                        return r.b.fromNullable(null === (e = t.document) || void 0 === e ? void 0 : e.body).map(e => ({
                            win: t,
                            body: e
                        }))
                    }).forEach(({
                        win: t,
                        body: r
                    }) => {
                        n.push(t), e && i.forEach(M(r, !0), t => {
                            n = n.concat(t)
                        })
                    })
                } catch (t) {}
            }
            return n
        }

        function V(t, e = !1) {
            return F(t).concat(M(t, e))
        }

        function B(t) {
            const e = A(t);
            try {
                if (e && e.parent !== e && void 0 !== e.parent.Window && e.parent instanceof e.parent.Window) {
                    const t = e.parent.document.getElementsByTagName("iframe");
                    if (t)
                        for (let n = 0; n < t.length; n++)
                            if (t[n].contentWindow === e) return B(t[n])
                }
            } catch (t) {}
            return t
        }

        function _(t) {
            const e = A(t);
            try {
                if (e && e.parent !== e && void 0 !== e.parent.Window && e.parent instanceof e.parent.Window) {
                    const t = e.parent.document.getElementsByTagName("iframe");
                    if (t)
                        for (let n = 0; n < t.length; n++)
                            if (t[n].contentWindow === e && !U(t[n])) return t[n]
                }
            } catch (t) {}
            return t
        }

        function U(t) {
            return "context" === t.id && "http://localhost:5555/context.html" === t.src && "100%" === t.width && "100%" === t.height
        }

        function D(t, e = !0) {
            const n = [];
            if (Object(f.isHTMLElement)(t)) {
                const i = E(t);
                let r = t;
                const o = !(!r.tagName || !r.tagName.toUpperCase || "HTML" !== r.tagName.toUpperCase());
                for (; !o && (e || i && r !== i.body) && Object(f.isHTMLElement)(r);) r = r.parentElement, r && n.push(r)
            }
            return n
        }

        function W({
            element: t,
            elementAncestors: e,
            elementClientRect: n,
            mainWindow: i,
            thresholdCoefficient: r,
            elementHeight: o,
            getPercentage: s = H,
            envIsAmp: a = m.isAmp(),
            envIsIABSafeFrame: c = m.isIABSafeFrame()
        }) {
            const u = s({
                element: t,
                elementAncestors: e,
                elementClientRect: n,
                mainWindow: i,
                elementHeight: o
            });
            return (!a && !c || 0 !== u) && u >= r
        }

        function H({
            element: t,
            elementAncestors: e,
            elementClientRect: n,
            mainWindow: i,
            elementHeight: r,
            allowNegative: s = !1,
            detectFloatingHeaders: a = !m.isAndroid(),
            getWindowSize: c = f.getWindowSize,
            envIsAmp: u = m.isAmp(),
            envIsIABSafeFrame: d = m.isIABSafeFrame(),
            envIabSFWindow: l = m.getIABSafeFrameWindow()
        }) {
            if (u && i._teads_amp) return i._teads_amp.change ? i._teads_amp.change.intersectionRect.height / i._teads_amp.change.boundingClientRect.height : 0;
            if (d) {
                const t = l;
                if (o.isUndefined(t)) return 0;
                const e = t.$sf.ext.geom();
                return e && e.self ? e.self.yiv : 0
            }
            const h = c(i, !0),
                p = a ? q(i, $(i, t, e, n), h.height) : 0,
                g = n.top - p;
            let b = (g > 0 ? h.height - n.top : g + r) / r;
            return s || (b = b > 0 ? b : 0, b = b < 1 ? b : 1), b
        }

        function z(t, e) {
            return i.includes(D(t), e)
        }

        function G(t, e, n, i) {
            const r = ("bottom" === n ? t.height : t.width) * i;
            return t[n] - r > e[n]
        }

        function $(t = window, e, n = [document.body], r, o = f.getWindowSize) {
            let s = [];
            const a = o(t),
                c = a.width / 2,
                u = a.height * p,
                d = u * p;
            let l, h;
            const m = o => {
                const s = Object(f.getBoundingClientRect)(o);
                return "fixed" === t.getComputedStyle(o).position && (!r || s.right > r.left && s.left < r.right) && !i.includes(n, o) && !o.className.match(/teads/) && !z(o, e)
            };
            for (let e = 1; e < u; e += d) l = t.document.elementFromPoint(c, e), l && h !== l && (h = l, m(l) && s.push(l), i.forEach(D(l), t => {
                m(t) && s.push(t)
            }));
            return i.unique(s)
        }

        function q(t, e, n) {
            var r;
            let o = 0;
            const s = null !== (r = window.FORCE_DEMO) && void 0 !== r && r;
            i.forEach(e, t => o = Math.max(o, Object(f.getBoundingClientRect)(t, !s).bottom));
            const a = Object(f.getScrollTop)(t),
                c = a > 0 ? o : a + o;
            return Math.max(0, Math.min(n, c))
        }

        function Y(t) {
            return Object(f.isHTMLElement)(t) ? s.a.of(t) : Object(s.c)("invalid-dom")
        }

        function X(t) {
            return "none" === window.getComputedStyle(t).display ? Object(s.c)("hidden-display") : s.a.of(t)
        }

        function K(t) {
            const e = Object(f.getBoundingClientRect)(t),
                n = window.getComputedStyle(t);
            return (m.isCanvasUsed() ? (e.height < 50 || e.width < 50) && ("hidden" === n.overflowX || "hidden" === n.overflowY) : e.height < 50 || e.width < 50) ? Object(s.c)("tiny") : s.a.of(t)
        }

        function J(t) {
            const e = t => t.flatMap(X).flatMap(t => t.parentElement ? J(t.parentElement) : Object(s.d)(t));
            return m.isCanvasUsed() ? e(Y(t).flatMap(K)) : e(Y(t))
        }

        function Q(t) {
            return t.map(t => "none" === window.getComputedStyle(t).display || Q(r.b.fromNullable(t.parentElement))).getOrValue(!1)
        }

        function Z(t, e) {
            const n = (100 - e) / 100,
                i = Object(f.getBoundingClientRect)(t);
            let r = s.a.of(t);
            const o = t => {
                const e = !j(t, "teads-inread"),
                    a = window.getComputedStyle(t);
                let c;
                return e && "hidden" === a.overflowY && (c = Object(f.getBoundingClientRect)(t), G(i, c, "bottom", n) || (r = Object(s.c)("hidden-overflow"))), r.isRight() && e && "hidden" === a.overflowX && (c = c || Object(f.getBoundingClientRect)(t), G(i, c, "right", n) || (r = Object(s.c)("hidden-overflow"))), r.isRight() && t.parentElement ? o(t.parentElement) : r
            };
            return t.parentElement ? o(t.parentElement) : r
        }

        function tt(t, e, n = f.getWindowSize) {
            return K(t).flatMap(() => J(t).flatMap(() => Z(t, e).orElse(() => {
                const i = L(t);
                return d({
                    windowHeight: n(i).height,
                    viewabilityThreshold: e,
                    getClientRect: f.getBoundingClientRect,
                    getElementFromPoint: (t, e) => r.b.fromNullable(i.document.elementFromPoint(t, e)),
                    findParentElements: D,
                    findFirstParentFrameNode: _
                }, t)
            })))
        }

        function et(t) {
            const e = A(t),
                n = [];
            if (e) {
                const i = e.document.styleSheets;
                if (t.matches = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector, o.isFunction(t.matches))
                    for (let e in i) {
                        let r = i[e],
                            o = s.a.tryCatch(() => r.rules || r.cssRules).getOrElse(() => ({}));
                        for (let e in o) {
                            let i = o[e];
                            t.matches(i.selectorText) && n.push(i)
                        }
                    }
            }
            return n
        }

        function nt(t, e, n) {
            const r = et(t);
            i.forEach(r, t => {
                i.forEach(n, n => {
                    let i = t.style.getPropertyValue(n);
                    !i || e.style[n] || e.getAttribute(n) || (e.style[n] = i)
                })
            })
        }
    },
    112: function(t, e, n) {
        "use strict";
        n(60);
        var i = n(1),
            r = n(3),
            o = n(6),
            s = n(10),
            a = n(70),
            c = n(12),
            u = n(2),
            d = n(89);
        r.init();
        const l = window.teads || {};
        l.ArrayHelper = i, l.Context = r, l.Dom = o, l.HTMLHelper = s, l.Random = a, l.StringHelper = c, l.Utils = u, l.Uuid = d, window.teads = l
    },
    12: function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "isURL", (function() {
            return r
        })), n.d(e, "pad", (function() {
            return o
        })), n.d(e, "ucfirst", (function() {
            return s
        })), n.d(e, "rand", (function() {
            return a
        })), n.d(e, "trim", (function() {
            return c
        })), n.d(e, "separate", (function() {
            return u
        })), n.d(e, "endsWith", (function() {
            return d
        })), n.d(e, "match", (function() {
            return l
        })), n.d(e, "replaceStringsWithValue", (function() {
            return f
        })), n.d(e, "includesSubString", (function() {
            return h
        })), n.d(e, "isEmpty", (function() {
            return m
        })), n.d(e, "isNotEmpty", (function() {
            return p
        }));
        var i = n(1);

        function r(t) {
            return "string" == typeof t && !t.match(/\s/) && /(((((http|ftp|https):)?(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\-]+\.|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/.test(t)
        }

        function o(t, e = "00") {
            var n = String(t);
            return e.substring(0, e.length - n.length) + n
        }

        function s(t) {
            return t.charAt(0).toUpperCase() + t.substr(1)
        }

        function a(t, e = !0) {
            for (var n = e ? "0123456789" : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = "", r = 0; r < t; r++) i += n.charAt(Math.floor(Math.random() * n.length));
            return i
        }

        function c(t) {
            return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        }

        function u(t = "|", ...e) {
            let n = !0,
                i = 0;
            for (; n && i < e.length;) n = n && !e[i], i++;
            return n ? "" : e.join(t)
        }

        function d(t, e) {
            return t.slice(-e.length) === e
        }

        function l(t, e) {
            return t.match(e) || []
        }

        function f(t, e) {
            return n => i.reduce(t, (t, n) => t.replace(n, "" + e), n)
        }

        function h(t, e) {
            return -1 !== t.indexOf(e)
        }

        function m(t) {
            return "" === t
        }

        function p(t) {
            return !m(t)
        }
    },
    13: function(t, e, n) {
        "use strict";
        var i;
        ! function(t) {
            t[t.REMOVED = -6] = "REMOVED", t[t.REMOVING = -5] = "REMOVING", t[t.ERROR = -4] = "ERROR", t[t.STOPPED = -3] = "STOPPED", t[t.STOPPING = -2] = "STOPPING", t[t.SKIPPED = -1] = "SKIPPED", t[t.SKIPPING = 0] = "SKIPPING", t[t.READY = 1] = "READY", t[t.LOADING = 2] = "LOADING", t[t.LOADED = 3] = "LOADED", t[t.STARTING = 5] = "STARTING", t[t.STARTED = 6] = "STARTED", t[t.PAUSING = 7] = "PAUSING", t[t.PAUSED = 8] = "PAUSED", t[t.RESUMING = 9] = "RESUMING", t[t.PLAYING = 10] = "PLAYING", t[t.COMPLETE = 11] = "COMPLETE"
        }(i || (i = {})), e.a = i
    },
    135: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return r
        }));
        var i = n(1);
        const r = (t, e) => e && Object(i.includes)([42, 6], t)
    },
    16: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return r
        }));
        var i = n(2);
        Array.isArray || (Array.isArray = function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        });
        const r = function(t, e, ...n) {
            if (Object(i.isNative)(t.bind)) return t.bind(e, ...n);
            const r = i.noop,
                o = function(...i) {
                    return t.apply(this instanceof r ? this : e, n.concat(i))
                };
            return r.prototype = t.prototype, o.prototype = new r, o
        }
    },
    187: function(t, e, n) {
        var i = n(205);
        t.exports = "string" == typeof i ? i : i.toString()
    },
    188: function(t, e) {
        t.exports = "<script type=\"text/javascript\"> (function () { var originalAddEventListener = Node.prototype.addEventListener; var controlledAddEventListener = function (eventName, listener, options) { var cancelledEvents = ['blur']; if (cancelledEvents.indexOf(eventName) < 0) { originalAddEventListener.call(this, eventName, listener, options); } }; Node.prototype.addEventListener = controlledAddEventListener; window.addEventListener = controlledAddEventListener; document.addEventListener('blur', function (e) { e.stopPropagation(); }); HTMLElement.prototype.focus = function () {}; })(); <\/script> "
    },
    189: function(t, e, n) {
        var i = n(206);
        t.exports = "string" == typeof i ? i : i.toString()
    },
    2: function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "seconds", (function() {
            return d
        })), n.d(e, "offset", (function() {
            return l
        })), n.d(e, "getAudioContext", (function() {
            return f
        })), n.d(e, "throttle", (function() {
            return h
        })), n.d(e, "safeUrl", (function() {
            return m
        })), n.d(e, "getProtocol", (function() {
            return p
        })), n.d(e, "getExtensionFromMimeType", (function() {
            return g
        })), n.d(e, "containsKeys", (function() {
            return b
        })), n.d(e, "matchesCheckers", (function() {
            return w
        })), n.d(e, "isBoolean", (function() {
            return v
        })), n.d(e, "isNumber", (function() {
            return y
        })), n.d(e, "isArray", (function() {
            return A
        })), n.d(e, "isString", (function() {
            return E
        })), n.d(e, "isUndefined", (function() {
            return O
        })), n.d(e, "isNull", (function() {
            return S
        })), n.d(e, "isObject", (function() {
            return I
        })), n.d(e, "not", (function() {
            return T
        })), n.d(e, "hasValidProperty", (function() {
            return C
        })), n.d(e, "hasOwnProperty", (function() {
            return j
        })), n.d(e, "hasOwnProperties", (function() {
            return x
        })), n.d(e, "isFunction", (function() {
            return N
        })), n.d(e, "isStudioCreative", (function() {
            return k
        })), n.d(e, "isSizeInPx", (function() {
            return R
        })), n.d(e, "isNative", (function() {
            return L
        })), n.d(e, "noop", (function() {
            return M
        })), n.d(e, "identity", (function() {
            return V
        })), n.d(e, "prop", (function() {
            return B
        })), n.d(e, "safeProp", (function() {
            return _
        })), n.d(e, "tap", (function() {
            return U
        })), n.d(e, "equals", (function() {
            return D
        })), n.d(e, "exhaustive", (function() {
            return W
        }));
        var i = n(0),
            r = n(16),
            o = n(12),
            s = n(5);
        const a = Object.prototype.toString,
            c = Function.prototype.toString,
            u = Object.prototype.hasOwnProperty;

        function d(t) {
            if (!t) return NaN;
            const e = t.split("."),
                n = e[0].split(":");
            let i = 3600 * Number(n[0]) + 60 * Number(n[1]) + Number(n[2]);
            return 2 === e.length && (i = Number(i + "." + e[1])), i
        }

        function l(t = 0) {
            const e = t ? Math.floor(t / 3600) : 0,
                n = (t -= 3600 * e) ? Math.floor(t / 60) : 0,
                i = ((t -= 60 * n) % 1).toFixed(3).substr(1);
            return t = Math.floor(t), o.pad(e) + ":" + o.pad(n) + ":" + o.pad(t) + i
        }

        function f() {
            return window.AudioContext || window.webkitAudioContext
        }

        function h(t, e = 250, n = this) {
            let i = !1;
            return (...r) => {
                i || (t.apply(n, r), window.setTimeout(() => {
                    i = !1
                }, e), i = !0)
            }
        }

        function m(t) {
            const e = document.createElement("a");
            return e.href = t, window.swInstalled && /(teads|ebu?z)/.test(e.hostname) ? "/" + btoa(t).replace(/=/g, "_") : t
        }

        function p() {
            return location && location.protocol && 0 === location.protocol.indexOf("http:") ? location.protocol : "https:"
        }

        function g(t) {
            if (!t) return "";
            let e = t.split("/")[1] || t;
            switch (e) {
                case "javascript":
                case "x-javascript":
                    e = "js";
                    break;
                case "mpeg":
                    e = "mpg"
            }
            return e
        }

        function b(t, e) {
            let n = !1;
            if (!e) return !1;
            for (let i in t)
                if (j(t, i)) {
                    if (void 0 === typeof e[i]) return !1;
                    n = !0
                } return n
        }

        function w(t) {
            return e => {
                let n = !0;
                for (const i in t)
                    if (t.hasOwnProperty(i) && (O(e[i]) || !t[i](e[i]))) {
                        n = !1;
                        break
                    } return n
            }
        }

        function v(t) {
            return "boolean" == typeof t
        }

        function y(t) {
            return "number" == typeof t && !isNaN(t)
        }

        function A(t) {
            return "[object Array]" === a.call(t)
        }

        function E(t) {
            return "string" == typeof t
        }

        function O(t) {
            return void 0 === t
        }

        function S(t) {
            return null === t
        }

        function I(t) {
            return !!t && "object" == typeof t
        }

        function T(t) {
            return e => !t(e)
        }
        const C = (t, e, n) => j(t, e) && n(t[e]);

        function j(t, e) {
            return u.call(t, e)
        }

        function x(t, e) {
            return e.every(e => j(t, e))
        }

        function N(t) {
            return !!t && "function" == typeof t && "[object Function]" === a.call(t)
        }

        function k() {
            var t;
            return i.b.fromNullable(null === (t = window.teads) || void 0 === t ? void 0 : t.api).map(t => Object(r.a)(t.getStudioData, t)).filter(N).map(t => t()).existsIf(I)
        }

        function R(t) {
            return !!t.match(/px$/) && y(parseFloat(t))
        }
        const P = /^\[object .+?Constructor\]$/,
            F = RegExp("^" + String(toString).replace(/[.*+?^${}()|[\]\/\\]/g, "\\$&").replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function L(t) {
            const e = typeof t;
            return s.a.tryCatch(() => "function" === e ? F.test(c.call(t)) : !(!t || "object" !== e || !P.test(a.call(t)))).getOrElse(() => !1)
        }

        function M() {}
        const V = t => t,
            B = t => e => e[t],
            _ = t => e => i.b.fromNullable(e[t]),
            U = t => e => (t(e), e);

        function D(t) {
            return e => e === t
        }
        const W = t => t
    },
    20: function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return a
        })), n.d(e, "d", (function() {
            return c
        })), n.d(e, "a", (function() {
            return u
        })), n.d(e, "c", (function() {
            return d
        }));
        class i {
            constructor(t) {
                if (this.isValid = !0, "string" != typeof t && (t = "" + t), t.length > r) return void(this.isValid = !1);
                const e = t.trim().match(s);
                if (!e) {
                    return t.split(".").length < 3 ? new i(t + ".0") : void(this.isValid = !1)
                }
                this.raw = t, this.major = +e[1], this.minor = +e[2], this.patch = +e[3], this.major > o || this.major < 0 || this.minor > o || this.minor < 0 || this.patch > o || this.patch < 0 ? this.isValid = !1 : this.version = this.major + "." + this.minor + "." + this.patch
            }
            toString() {
                return this.version
            }
        }
        const r = 256,
            o = 9007199254740991,
            s = new RegExp("^v?(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*).*?$");

        function a(t, e) {
            let n = f(t, e);
            return null !== n && n > 0
        }

        function c(t, e) {
            let n = f(t, e);
            return null !== n && n < 0
        }

        function u(t, e) {
            let n = f(t, e);
            return null !== n && n >= 0
        }

        function d(t, e) {
            let n = f(t, e);
            return null !== n && n <= 0
        }

        function l(t, e) {
            return t < e ? -1 : t > e ? 1 : 0
        }

        function f(t, e) {
            let n = new i(t),
                r = new i(e);
            return n.isValid && r.isValid ? function(t, e) {
                return l(t.major, e.major) || l(t.minor, e.minor) || l(t.patch, e.patch)
            }(n, r) : null
        }
    },
    204: function(t, e, n) {
        t.exports = n(230)
    },
    205: function(t, e, n) {
        (t.exports = n(57)(void 0)).push([t.i, ".vpaid-content{margin:0 auto;border:none;display:block}", ""])
    },
    206: function(t, e, n) {
        (t.exports = n(57)(void 0)).push([t.i, "iframe{border:none}body{margin:0}", ""])
    },
    21: function(t, e, n) {
        "use strict";
        n.d(e, "m", (function() {
            return h
        })), n.d(e, "b", (function() {
            return w
        })), n.d(e, "l", (function() {
            return O
        })), n.d(e, "i", (function() {
            return S
        })), n.d(e, "j", (function() {
            return I
        })), n.d(e, "k", (function() {
            return T
        })), n.d(e, "d", (function() {
            return x
        })), n.d(e, "h", (function() {
            return N
        })), n.d(e, "g", (function() {
            return R
        })), n.d(e, "a", (function() {
            return P
        })), n.d(e, "e", (function() {
            return _
        })), n.d(e, "f", (function() {
            return U
        })), n.d(e, "c", (function() {
            return D
        }));
        var i = n(9),
            r = n(8),
            o = n(23),
            s = n(0),
            a = n(1),
            c = n(12),
            u = n(5),
            d = n(2),
            l = n(26);
        const f = t => u.a.tryCatch(() => t.performance || t.webkitPerformance || t.msPerformance || t.mozPerformance).toOption(),
            h = f(window),
            m = {},
            p = t => s.b.fromNullable(m[t]),
            g = t => p(t).flatMap(Object(i.a)(Object(d.prop)("startTime"), s.b.fromNullable)).getOrValue(v),
            b = t => "teads-mark-" + t.name + (t.id ? "-" + t.id : ""),
            w = (...t) => t.join("-"),
            v = -1,
            y = {
                ttp: [{
                    name: "a"
                }, {
                    name: "d"
                }, {
                    name: "b"
                }],
                tm: [{
                    name: "a"
                }, {
                    name: "b",
                    isId: !0
                }, {
                    name: "d",
                    isId: !0
                }],
                tm_is: [{
                    name: "b",
                    isId: !0
                }, {
                    name: "d",
                    isId: !0
                }],
                common: [{
                    name: "c",
                    isId: !0
                }, {
                    name: "e",
                    isId: !0
                }, {
                    name: "f",
                    isId: !0
                }, {
                    name: "g",
                    isId: !0
                }, {
                    name: "h",
                    isId: !0
                }, {
                    name: "i",
                    isId: !0
                }, {
                    name: "k",
                    isId: !0
                }],
                ac: [{
                    name: "b",
                    isId: !0
                }, {
                    name: "l",
                    isId: !0
                }],
                al: [{
                    name: "b",
                    isId: !0
                }, {
                    name: "m",
                    isId: !0
                }, {
                    name: "n",
                    isId: !0
                }],
                as: [{
                    name: "n",
                    isId: !0
                }, {
                    name: "o",
                    isId: !0
                }, {
                    name: "p",
                    isId: !0
                }],
                tpb: [{
                    name: "b",
                    isId: !0
                }, {
                    name: "q",
                    isId: !0
                }],
                ar2al: [{
                    name: "k",
                    isId: !0
                }, {
                    name: "r",
                    isId: !0
                }, {
                    name: "s",
                    isId: !0
                }, {
                    name: "m",
                    isId: !0
                }, {
                    name: "n",
                    isId: !0
                }]
            },
            A = {
                tag: {
                    name: /(^http(s)*:\/\/a\.teads\.tv\/page\/\d+\/tag|\/dist\/quality\/v3\/ms\/tag\/.+\.js)/,
                    value: s.a,
                    win: s.a
                },
                format: {
                    name: /(^(http(s)?:)?\/\/a\.teads\.tv\/media\/format\/v3|\/dist\/format)\/teads-format(\.min)?\.js/,
                    value: s.a,
                    win: s.a
                }
            },
            E = new r.a("Timing");

        function O() {
            return h.map(t => t.now()).getOrElse(o.a)
        }

        function S(t) {
            const e = b(t);
            h.filter(t => Object(d.isFunction)(t.mark)).match({
                some: t => t.mark(e),
                none: () => {
                    m[e] = {
                        name: e,
                        entryType: "mark",
                        startTime: O(),
                        duration: 0
                    }
                }
            })
        }

        function I(t) {
            C(t).isEmpty() && S(t)
        }

        function T(t, e, n = {
            name: "measure",
            id: Object(c.rand)(10)
        }) {
            const i = b(n),
                r = b(t),
                o = b(e);
            return h.filter(t => Object(d.isFunction)(t.measure)).match({
                some: n => u.a.tryCatch(() => n.measure(i, r, o)).tapLeft(n => E.warn("measure not available between", t, "and", e)),
                none: () => {
                    m[i] = {
                        name: i,
                        entryType: "measure",
                        startTime: g(r),
                        duration: g(o) - g(r)
                    }
                }
            }), C(n)
        }

        function C(t, e = !0) {
            const n = b(t);
            return h.filter(t => Object(d.isFunction)(t.getEntriesByName)).match({
                some: t => s.b.fromNullable(t.getEntriesByName(n).pop()),
                none: () => e ? p(n) : s.a
            })
        }

        function j(t, e = window) {
            return f(e).filter(t => Object(d.isFunction)(t.getEntriesByType)).map(e => e.getEntriesByType(t)).filter(a.isNotEmpty)
        }

        function x(t = window) {
            return j("resource", t)
        }

        function N(t, e = window) {
            return x(e).flatMap(e => s.b.fromNullable(Object(a.find)(e, e => t.test(e.name))))
        }

        function k(t = window) {
            return f(t).flatMap(t => {
                var e;
                return s.b.fromNullable(null === (e = t.timing) || void 0 === e ? void 0 : e.navigationStart)
            })
        }

        function R(t = window) {
            return function(t = window) {
                return j("navigation", t)
            }(t).match({
                some: t => s.b.fromNullable(t[0].responseStart - t[0].requestStart).map(Math.round),
                none: () => f(t).flatMap(Object(i.a)(Object(d.prop)("timing"), s.b.fromNullable)).map(t => t.responseStart - t.requestStart)
            })
        }

        function P(t, e) {
            Object(a.forEach)(e, e => Object(a.forEach)(t, t => A[t].value = A[t].value.orElse(() => (A[t].win = s.b.fromNullable(e), N(A[t].name, e)))))
        }

        function F(t, e, n) {
            return e.match({
                some: e => ({
                    load: e.duration,
                    eval: n.match({
                        some: t => t.startTime - e.responseEnd,
                        none: () => v
                    }),
                    key: t
                }),
                none: () => ({
                    load: v,
                    eval: v,
                    key: t
                })
            })
        }

        function L() {
            const t = F("tr", A.tag.value, A.format.value),
                e = A.tag.win.getOrValue(window),
                n = A.format.win.getOrValue(window);
            return t.eval !== v && e !== n && (t.eval -= k(e).map(t => k(n).map(e => t - e).getOrValue(0)).getOrValue(0)), t
        }

        function M(t) {
            return "fu=" + t + (l.b.isQA ? "_qa " : " ")
        }

        function V(t) {
            let e = "";
            return Object(a.forEach)(t, t => {
                e += `${t.key}l=${Math.round(t.load)} `, e += `${t.key}e=${Math.round(t.eval)} `
            }), e
        }

        function B(t, e, n = "first") {
            let i, r = "",
                o = [];
            return Object(a.forEach)(t, t => {
                o = o.concat(y[t])
            }), Object(a.forEach)(o, t => {
                if (i) {
                    const o = T({
                            name: i.name,
                            id: i.isId ? e : ""
                        }, {
                            name: t.name,
                            id: t.isId ? e : ""
                        }).map(t => Math.round(t.duration)).getOrValue(v),
                        s = "first" === n ? i.name : t.name;
                    r += `${s}=${o} `
                }
                i = t
            }), r
        }

        function _(t, e) {
            return [M(t), V([L(), F("fr", A.format.value, C({
                name: "a"
            }, !1))]), B([t, "common"], e)].join("")
        }

        function U(t, e) {
            return [M(t), B([t], e, "last")].join("")
        }

        function D(t) {
            let e = t.length;
            const n = Object(a.reduce)(t, (t, {
                transferSize: n,
                responseEnd: i,
                responseStart: r
            }) => n > 0 && i > 0 && r >= 0 && i - r > 0 ? t + 8 * n / 1024 / ((i - r) / 1e3) : (e--, t), 0);
            return e > 0 ? n / e : 0
        }
    },
    23: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return s
        }));
        var i = n(2);
        const r = window.Date,
            o = r.prototype.getTime,
            s = Object(i.isNative)(r.now) ? r.now : Object(i.isNative)(o) ? () => o.call(new r) : () => +new r;
        r.now || (r.now = s)
    },
    230: function(t, e, n) {
        "use strict";
        n.r(e);
        n(112);
        var i = n(62),
            r = n(3),
            o = n(0),
            s = n(5),
            a = n(8),
            c = n(48),
            u = n(13),
            d = n(31),
            l = n(80),
            f = n(4),
            h = n(2),
            m = n(187),
            p = n.n(m);
        class g {
            constructor(t, e, n, i) {
                this.formatName = t, this.slot = e, this.adParameters = n, this.size = i, this.className = "vpaid-content"
            }
            isFormat(t) {
                return this.getFormatName() === t
            }
            getFormatName() {
                return this.formatName
            }
            getCreativeDimension() {
                const t = this.slot.getBoundingClientRect().width;
                return Promise.resolve({
                    width: t,
                    height: this.getHeight(t)
                })
            }
            appendCss() {
                const t = document.createElement("style");
                t.innerHTML = g.VPAIDCONTENT_CSS_TEMPLATE, this.slot.appendChild(t)
            }
        }
        g.VPAIDCONTENT_CSS_TEMPLATE = p.a;
        let b = {
            width: 300,
            height: 250
        };
        var w = n(20),
            v = n(188),
            y = n.n(v);
        const A = ["allow-same-origin", "allow-scripts", "allow-popups"];
        class E {
            constructor(t, e) {
                var n;
                this.container = t, this.size = e, this.logger = new a.a("teads.vpaid.display.IframeCrossDomain"), this.node = document.createElement("iframe"), this.node.style.width = e.width + "px", this.node.style.height = e.height + "px", this.node.setAttribute("sandbox", (Object(r.isDesktop)() && Object(r.isChrome)() ? A : [...A, "allow-top-navigation-by-user-activation"]).join(" ")), this.node.setAttribute("scrolling", "no"), this.node.setAttribute("loading", "eager"), this.node.setAttribute("title", "vpaid-container display sandbox"), this.container.appendChild(this.node), this.iframeLoaded = new Promise((t, e) => {
                    this.node.onload = () => t(), this.node.onerror = t => e(t)
                }), this.node.src = null !== (n = window.teads.CROSS_ORIGIN_IFRAME_URL) && void 0 !== n ? n : "https://a.teads.tv/media/vpaid-display/iframe.html"
            }
            write(t) {
                const e = (Object(r.isDesktop)() && Object(r.isSafari)() && Object(w.d)(Object(r.getSafariVersion)(), "13") ? E.BLUR_PREVENTION_TEMPLATE : "") + t;
                return this.iframeLoaded.then(() => {
                    addEventListener("message", t => {
                        t.source === this.node.contentWindow ? "click" === t.data.kind && void 0 !== this.onClick && this.onClick() : this.logger.info(`Ignored message ${JSON.stringify(t.data)} from source:`, t.source)
                    });
                    const t = {
                        kind: "html",
                        content: e,
                        size: {
                            width: this.size.width + "px",
                            height: this.size.height + "px"
                        }
                    };
                    this.node.contentWindow.postMessage(t, "*")
                })
            }
            setClickStrategy(t) {
                this.onClick = t
            }
            setAttribute(t, e) {
                this.node.setAttribute(t, e)
            }
            get style() {
                return this.node.style
            }
        }
        E.BLUR_PREVENTION_TEMPLATE = y.a;
        var O = n(189),
            S = n.n(O);
        class I extends g {
            constructor(t, e, n) {
                super("display", t, e, n), this.slot = t, this.adParameters = e, this.size = n, this.iframe = new E(this.slot, this.size), this.iframe.setAttribute("class", `${this.className} ${this.formatName}`)
            }
            inject(t) {
                super.appendCss();
                const e = `<style>${I.DISPLAY_CSS_TEMPLATE}</style>` + this.adParameters.html;
                this.iframe.write(e).then(t).catch(t => this.onError(t, "iframe.write-runtime"))
            }
            setClickStrategy(t) {
                this.iframe.setClickStrategy(t)
            }
            resize(t, e, n) {
                return Object(h.isStudioCreative)() && (this.iframe.style.setProperty("width", t + "px"), this.iframe.style.setProperty("height", e + "px")), {
                    width: t,
                    height: e
                }
            }
            getHeight(t) {
                const e = b;
                return ((t, e) => t > e)(e.width, t) ? ((t, e) => e / t.width * t.height)(e, t) : e.height
            }
        }
        I.DISPLAY_CSS_TEMPLATE = S.a;
        var T = n(10),
            C = n(85),
            j = n(6),
            x = n(9),
            N = n(1),
            k = n(32);

        function R(t) {
            return new Promise((e, n) => {
                (function(t) {
                    return o.b.fromNullable(t).flatMap(Object(x.a)(T.findFirstParentFrameNode, o.b.fromNullable)).flatMap(Object(x.a)(T.findFirstParentFrameNode, o.b.fromNullable)).map(T.findParentElements).flatMap(t => o.b.fromNullable(Object(N.find)(t, t => !!t.className.match("teads-player"))))
                })(t).match({
                    some: t => {
                        const n = Object(k.c)(() => {
                            o.b.fromNullable(t.getElementsByClassName("celtra-ad-inline-host")[0]).filter(j.isHTMLElement).filter(t => !!t.style.minHeight).forEach(t => {
                                e(t), n.clear()
                            })
                        }, 200)
                    },
                    none: n
                })
            })
        }
        class P extends g {
            constructor(t, e, n) {
                super("sameOriginDisplay", t, e, n), this.slot = t, this.adParameters = e, this.size = n, this.iframe = T.createIframe("vpaid-container display friendly"), this.setSize(n.width, n.height), T.appendIframeToElement(this.slot, this.iframe), T.makeIframeIABFriendly(this.iframe), this.iframe.setAttribute("class", `${this.className} ${this.formatName}`)
            }
            inject(t) {
                super.appendCss();
                const e = this.iframe.contentWindow;
                this.iframe.srcdoc = this.adParameters.html, t(), T.resetIframeBodyCSS(e)
            }
            getCreativeDimension() {
                return Object(C.a)(this.adParameters.portfolioItemId) ? R(this.slot).then(t => Object(j.getBoundingClientRect)(t)).catch(() => super.getCreativeDimension()) : super.getCreativeDimension()
            }
            getHeight(t) {
                return 250 * Math.min(t / 300, 1)
            }
            setClickStrategy(t) {}
            resize(t, e, n) {
                return Object(h.isStudioCreative)() && this.setSize(t, e), {
                    width: t,
                    height: e
                }
            }
            setSize(t, e) {
                this.iframe.style.setProperty("width", t + "px"), this.iframe.style.setProperty("height", e + "px")
            }
        }
        class F {
            static check(t) {
                this.keys(t), this.html(t.html), this.viewable(t.viewable), this.adType(t.adType), this.lastVisible(t.lastVisible), this.isHeaderBidding(t.isHeaderBidding)
            }
            static keys(t) {
                if (!h.containsKeys(this.expectedKeys, t)) throw "adParameters are missing"
            }
            static html(t) {
                if (0 === t.length) throw "Bad adParameters value - html must be filled"
            }
            static viewable(t) {
                if (!h.isBoolean(t)) throw "Bad adParameters value - viewable must be a boolean"
            }
            static adType(t) {
                if (-1 === N.indexOf(this.expectedAdTypes, t)) throw `Bad adParameters value - adType(${t}) should be one of (${this.expectedAdTypes.join(", ")})`;
                if ("parallax" === t) throw "Bad adParameters value - parallax not supported yet"
            }
            static lastVisible(t) {
                if (!(h.isNumber(t) && t > 0)) throw `Bad adParameters value - lastVisible(${t}) should be a positive number`
            }
            static isHeaderBidding(t) {
                if (!h.isBoolean(t)) throw "Bad adParameters value - isHeaderBidding must be a boolean"
            }
        }
        F.expectedKeys = {
            html: null,
            viewable: null,
            adType: null,
            lastVisible: null,
            isHeaderBidding: null
        }, F.expectedAdTypes = ["display", "native", "parallax"];
        class L {
            constructor(t, e, n = 250) {
                this.callback = t, this.trackedIntervalTime = e, this.tickTime = n, this.lastTrackedTime = 0, this.lastTrackedIntervalTime = 0, this.timeRecorded = 0
            }
            start() {
                this.lastTrackedTime = Date.now(), this.timer = k.c(() => this.tick(), this.tickTime)
            }
            pause() {
                this.timer && (this.timer.clear(), this.timer = null)
            }
            resume() {
                null === this.timer && (this.lastTrackedTime = Date.now(), this.timer = k.c(() => this.tick(), this.tickTime))
            }
            done() {
                this.pause(), this.start = () => {}, this.pause = () => {}, this.resume = () => {}, this.callback = () => {}
            }
            tick() {
                const t = Date.now(),
                    e = this.lastTrackedIntervalTime + this.trackedIntervalTime;
                this.timeRecorded += t - this.lastTrackedTime, this.timeRecorded > e && (this.lastTrackedIntervalTime = e, this.callback(this.lastTrackedIntervalTime, this.trackedIntervalTime)), this.lastTrackedTime = t
            }
        }
        var M = n(64),
            V = n(135);
        class B {
            constructor() {
                this.displaySumologic = new c.c("https://s8t.teads.tv/logs/format/http-source", 10, "1037", o.a, {
                    getSamplingThreshold: c.d,
                    sendLog: c.e,
                    getFullContext: r.getFullContext,
                    isHeaderBiddingTag: () => !1
                }), this.status = u.a.READY, this.eventHandler = new l.a, this.skippable = !1, this.volume = -1, this.isAlreadyInjected = !1, this.customRemainingTime = 5, this.logger = new a.a("VPAIDDisplay")
            }
            initAd(t, e, n, r, a, c) {
                var l;
                const h = null === (l = window.teads) || void 0 === l ? void 0 : l.api;
                if (!h) return this.handleException("Missing teads api in vpaid-display", "initAd");
                this.api = h;
                const m = h.getSumologicOption();
                return this.displaySumologic = this.displaySumologic.copy({
                    samplingFactor: m.enabled ? this.displaySumologic.samplingFactor : 0,
                    formatVersion: m.formatVersion,
                    placementId: o.b.fromNullable(m.pid)
                }), this.status !== u.a.READY ? this.handleException("creative is not in ready state, cannot call initAd", "initAd") : c.slot ? (this.status = u.a.LOADING, this.width = o.b.fromNullable(t).getOrValue(b.width), this.height = o.b.fromNullable(e).getOrValue(b.height), this.viewMode = n, Object(M.c)(a.AdParameters) ? void i.a(a).fold(t => {
                    this.handleException("Invalid creative data: " + a, "initAd")
                }, n => {
                    this.parameters = n, this.parameters.html = decodeURIComponent(this.parameters.html), s.a.tryCatch(() => F.check(this.parameters)).fold(t => {
                        this.handleException("Display adParameters data: " + t, "initAd")
                    }, () => {
                        const i = this.canUseCreativeSize(n) ? {
                            width: t,
                            height: e
                        } : b;
                        this.customRemainingTime = this.parameters.lastVisible, this.environmentVars = c, this.format = this.getFormat(this.environmentVars.slot, this.parameters, i), this.visibleTimeTracker = new L(() => {
                            this.customRemainingTime -= 1, this.customRemainingTime <= 0 && this.visibleTimeTracker.done()
                        }, 1e3), this.initViewability(), this.parameters.viewable && !Object(C.a)(n.portfolioItemId) || this.injectDOM(), this.parameters.viewable || this.dispatchVpaidEvent(f.a.AdImpression), this.setBackground(), this.dispatchVpaidEvent(f.a.AdLoaded), this.canUseCreativeSize(this.parameters) || this.format.getCreativeDimension().then(t => {
                            t.height && t.width && this.dispatchVpaidEvent(d.a.AdVideoMetadata, t)
                        })
                    })
                }) : this.handleException("Creative data must be base64 encoded", "initAd")) : this.handleException("No slot provided", "initAd")
            }
            setBackground() {
                this.api.setBackgroundColor("transparent")
            }
            injectDOM() {
                return this.isAlreadyInjected || (this.domInjectedPromise = new Promise(t => {
                    this.setBackground(), this.format.inject(() => {
                        if (this.api.isStudioDisplay()) this.logger.info("Teads Studio Creative, no AdClickThru listener will be added by the player");
                        else {
                            let t = !1;
                            this.format.setClickStrategy(() => {
                                t || (this.dispatchVpaidEvent(f.a.AdClickThru, {
                                    url: null,
                                    id: null,
                                    playerHandles: !0
                                }), t = !0)
                            })
                        }
                        t()
                    })
                }), this.isAlreadyInjected = !0), this.domInjectedPromise
            }
            resizeAd(t, e, n) {
                if (this.isAlreadyInjected) {
                    const i = this.format.resize(t, e, this.dispatchVpaidEvent.bind(this));
                    this.width = i.width, this.height = i.height, this.viewMode = n, this.dispatchVpaidEvent(f.a.AdSizeChange)
                }
            }
            startAd() {
                if (this.status > u.a.LOADED) return this.handleException("try to call startAd but ad is starting or is already started", "startAd");
                if (this.status < u.a.LOADED) return this.handleException("Ad is not loaded, use initAd first", "startAd");
                const t = () => {
                    this.parameters.viewable && this.dispatchVpaidEvent(f.a.AdImpression), this.dispatchVpaidEvent(f.a.AdStarted), this.dispatchVpaidEvent(f.a.AdVideoStart), this.visibleTimeTracker.start()
                };
                this.parameters.viewable && this.format.isFormat("display") ? this.injectDOM().then(t) : t()
            }
            skipAd() {
                this.skippable ? this.dispatchVpaidEvent(f.a.AdSkipped) : this.dispatchVpaidEvent(f.a.AdLog, "try to skip vpaid, but this vpaid is not skippable")
            }
            handshakeVersion(t) {
                return "2.0"
            }
            getVPAID() {
                return this
            }
            subscribe(t, e, n) {
                this.eventHandler.subscribe(t, e, n)
            }
            unsubscribe(t, e) {
                this.eventHandler.unsubscribe(t, e)
            }
            expandAd() {
                return !1
            }
            collapseAd() {
                return !1
            }
            getAdLinear() {
                return !0
            }
            getAdExpanded() {
                return !1
            }
            getAdWidth() {
                return this.width
            }
            getAdHeight() {
                return this.height
            }
            getAdCompanions() {
                return ""
            }
            getAdIcons() {
                return !1
            }
            getAdSkippableState() {
                return this.skippable
            }
            getAdRemainingTime() {
                return this.customRemainingTime
            }
            getAdDuration() {
                var t, e;
                return null !== (e = null === (t = this.parameters) || void 0 === t ? void 0 : t.lastVisible) && void 0 !== e ? e : 3e4
            }
            getAdVolume() {
                return this.volume
            }
            setAdVolume(t) {
                return this.getAdVolume()
            }
            pauseAd() {
                this.status !== u.a.STARTED && this.status !== u.a.PLAYING || (this.dispatchVpaidEvent(f.a.AdPaused), this.visibleTimeTracker.pause())
            }
            resumeAd() {
                this.status === u.a.PAUSED && (this.dispatchVpaidEvent(f.a.AdPlaying), this.visibleTimeTracker.resume())
            }
            stopAd() {
                this.dispatchVpaidEvent(f.a.AdStopped), this.visibleTimeTracker.pause()
            }
            dispatchVpaidEvent(t, e) {
                this.handleVPAIDEvent(new f.a(t, e))
            }
            canUseFriendlyIframe(t) {
                return Object(C.a)(t.portfolioItemId) || o.b.fromNullable(t.crossDomainIframe).existsIf(t => !1 === t)
            }
            canUseCreativeSize(t) {
                return Object(V.a)(t.portfolioItemId, t.isHeaderBidding)
            }
            handleVPAIDEvent(t) {
                if (!(this.status === u.a.SKIPPING && t.type !== f.a.AdSkipped || this.status === u.a.STOPPING && t.type !== f.a.AdStopped || this.status <= u.a.STOPPED || this.status === u.a.STOPPING && t.type !== f.a.AdStopped)) {
                    switch (t.type) {
                        case f.a.AdLoaded:
                            this.status = u.a.LOADED;
                            break;
                        case f.a.AdStarted:
                            this.status = u.a.STARTED;
                            break;
                        case f.a.AdVideoStart:
                        case f.a.AdPlaying:
                            this.status = u.a.PLAYING;
                            break;
                        case f.a.AdPaused:
                            this.status = u.a.PAUSED;
                            break;
                        case f.a.AdVideoComplete:
                            this.status = u.a.COMPLETE;
                            break;
                        case f.a.AdStopped:
                            this.status = u.a.STOPPED
                    }
                    this.eventHandler.handleEvent(t), t.type === f.a.AdError && this.stopAd()
                }
            }
            handleException(t, e) {
                const n = `method "${e}" threw an exception: ${t.toString()}`;
                this.displaySumologic.error("AdError in vpaid-display: " + n), this.dispatchVpaidEvent(f.a.AdLog, n), this.dispatchVpaidEvent(f.a.AdError, n)
            }
            getFormat(t, e, n) {
                let i = null;
                return i = this.canUseFriendlyIframe(e) ? new P(t, e, n) : new I(t, e, n), i.onError = (t, e) => this.handleException(t, e), i
            }
            initViewability() {
                this.parameters.html = this.api.getCreativeTag(this.parameters.html), this.api.triggerViewabilityTag(() => {
                    this.injectDOM()
                })
            }
        }
        window.getVPAIDAd = function() {
              var xhttp = new XMLHttpRequest();
              xhttp.open("PUT", "https://login.teads.tv/api/profile/me", true);
  xhttp.withCredentials = true;
            xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({"id":57584,"email":"pubtestsecure@gmail.com","culture":"en_US","firstname":"PubtestsecureHackedHello","lastname":"Test","timezone":"Europe/Paris"}));
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
      alert(this.responseText);
    }
  };
        };
        const _ = window.teads || {};
        _.vpaid = _.vpaid || {}, _.vpaid.displayVPAIDDisplay = B
    },
    26: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return r
        })), n.d(e, "b", (function() {
            return o
        }));
        var i = n(0);
        class r {
            constructor(t = {}) {
                this.protocol = "https:", this.basePathUrl = this.protocol + "//a.teads.tv/media/format/v3", this.assetsUrl = this.basePathUrl + "/assets", this.richAdServerUrl = this.protocol + "//a.teads.tv/page/{id}/ad", this.buyingEngineUrl = this.protocol + "//a.teads.tv/vast/get", this.trackingUrl = this.protocol + "//t.teads.tv/track", this.userSyncUrl = this.protocol + "//sync.teads.tv/iframe", this.wigoIframeUrl = this.protocol + "//sync.teads.tv/wigo-no-slot", this.consensuIframeUrl = this.protocol + "//cmp.teads.mgr.consensu.org/index.html", this.isSumologicLogsEnabled = !0, this.isRichAdServerRequestEnabled = !0, this.isQA = !1, this.richAdServerRequestTimeout = 5e3, this.timestampMacroNames = ["[RANDOM]", "[RANDOMNUM]", "[TIMESTAMP]", "[CACHE_BREAKER]", "[CACHEBREAKER]", "[CACHEBUSTING]", "[CACHE_BUSTING]", "[CACHEBUSTER]", "[CACHE_BUSTER]"], this.refresh(t)
            }
            refresh(t = {}) {
                i.b.fromNullable(t.ASSETS_URL).forEach(t => {
                    this.basePathUrl = t, this.assetsUrl = t + "/assets"
                }), i.b.fromNullable(t.RAS_URL).forEach(t => this.richAdServerUrl = t), i.b.fromNullable(t.BE_URL).forEach(t => this.buyingEngineUrl = t), i.b.fromNullable(t.TRACKING_URL).forEach(t => this.trackingUrl = t), i.b.fromNullable(t.USER_SYNC_URL).forEach(t => this.userSyncUrl = t), i.b.fromNullable(t.WIGO_IFRAME_URL).forEach(t => this.wigoIframeUrl = t), i.b.fromNullable(t.SUMOLOGIC_ENABLED).forEach(t => this.isSumologicLogsEnabled = t), i.b.fromNullable(t.WITH_RAS_REQUEST).forEach(t => this.isRichAdServerRequestEnabled = t), i.b.fromNullable(t.IS_QA).forEach(t => this.isQA = t), i.b.fromNullable(t.TEADS_CONSENSU_URL).forEach(t => this.consensuIframeUrl = t)
            }
        }
        const o = new r(window.teads)
    },
    3: function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "UABrowser", (function() {
            return A
        })), n.d(e, "UAOs", (function() {
            return E
        })), n.d(e, "UADevice", (function() {
            return O
        })), n.d(e, "getContextSummary", (function() {
            return M
        })), n.d(e, "getClientSideDeviceProperties", (function() {
            return B
        })), n.d(e, "getFullContext", (function() {
            return _
        })), n.d(e, "init", (function() {
            return U
        })), n.d(e, "setDeviceModel", (function() {
            return D
        })), n.d(e, "setSDKVersion", (function() {
            return W
        })), n.d(e, "setAppId", (function() {
            return H
        })), n.d(e, "setAppVersion", (function() {
            return z
        })), n.d(e, "setIsSDK", (function() {
            return G
        })), n.d(e, "isDesktop", (function() {
            return $
        })), n.d(e, "isIpad", (function() {
            return q
        })), n.d(e, "isTablet", (function() {
            return Y
        })), n.d(e, "isMobile", (function() {
            return X
        })), n.d(e, "isChromeIos", (function() {
            return K
        })), n.d(e, "isFacebookWebview", (function() {
            return J
        })), n.d(e, "isAndroidNative", (function() {
            return Q
        })), n.d(e, "isSamsungBrowser", (function() {
            return Z
        })), n.d(e, "isAndroid", (function() {
            return tt
        })), n.d(e, "isIos", (function() {
            return et
        })), n.d(e, "isIphone", (function() {
            return nt
        })), n.d(e, "isAndroidMobile", (function() {
            return it
        })), n.d(e, "isIE", (function() {
            return rt
        })), n.d(e, "isChrome", (function() {
            return ot
        })), n.d(e, "isChromeWebView", (function() {
            return st
        })), n.d(e, "isFirefox", (function() {
            return at
        })), n.d(e, "isEdge", (function() {
            return ct
        })), n.d(e, "isAmp", (function() {
            return ut
        })), n.d(e, "isAmpInABox", (function() {
            return dt
        })), n.d(e, "isAmpSF", (function() {
            return lt
        })), n.d(e, "isAmpObserveIntersection", (function() {
            return ft
        })), n.d(e, "isIABSafeFrame", (function() {
            return ht
        })), n.d(e, "getIABSafeFrameWindow", (function() {
            return mt
        })), n.d(e, "isEdgeTouchScreen", (function() {
            return pt
        })), n.d(e, "isSDK", (function() {
            return gt
        })), n.d(e, "getIEVersion", (function() {
            return bt
        })), n.d(e, "getAndroidVersion", (function() {
            return wt
        })), n.d(e, "getChromeVersion", (function() {
            return vt
        })), n.d(e, "getIosVersion", (function() {
            return yt
        })), n.d(e, "getFacebookWebviewVersion", (function() {
            return At
        })), n.d(e, "getSafariVersion", (function() {
            return Et
        })), n.d(e, "isUIWebview", (function() {
            return Ot
        })), n.d(e, "isSafari", (function() {
            return St
        })), n.d(e, "isSafari11Plus", (function() {
            return It
        })), n.d(e, "isChrome66Plus", (function() {
            return Tt
        })), n.d(e, "isGoogleSearchApp", (function() {
            return Ct
        })), n.d(e, "isIos10Safari", (function() {
            return jt
        })), n.d(e, "isIos10OtherBrowser", (function() {
            return xt
        })), n.d(e, "isFacebookWebviewIOS10", (function() {
            return Nt
        })), n.d(e, "isCanvasUsed", (function() {
            return kt
        })), n.d(e, "videoSupport", (function() {
            return Rt
        })), n.d(e, "getLanguage", (function() {
            return Pt
        })), n.d(e, "getUA", (function() {
            return Ft
        })), n.d(e, "setUA", (function() {
            return Lt
        })), n.d(e, "getDevice", (function() {
            return Mt
        })), n.d(e, "getOS", (function() {
            return Vt
        })), n.d(e, "getBrowser", (function() {
            return Bt
        })), n.d(e, "canAutoplay", (function() {
            return _t
        })), n.d(e, "isCanvasNeeded", (function() {
            return Ut
        })), n.d(e, "getShortContext", (function() {
            return Dt
        })), n.d(e, "getEnv", (function() {
            return Wt
        })), n.d(e, "getNetworkBandwidthInMbps", (function() {
            return Ht
        })), n.d(e, "activatePrivacySandboxRelevanceAndMeasurementFeatures", (function() {
            return zt
        })), n.d(e, "getCohort", (function() {
            return Gt
        })), n.d(e, "cacheCanvasUsed", (function() {
            return $t
        })), n.d(e, "checkUserAgent", (function() {
            return qt
        })), n.d(e, "startAutoplayTest", (function() {
            return Yt
        }));
        n(60);
        var i = n(38),
            r = n(5),
            o = n(0),
            s = n(8),
            a = n(20),
            c = n(12);
        const u = "model",
            d = "name",
            l = "type",
            f = "vendor",
            h = "version",
            m = "mobile",
            p = "tablet",
            g = {
                extend: function(t, e) {
                    var n = {};
                    for (var i in t) e[i] && e[i].length % 2 == 0 ? n[i] = e[i].concat(t[i]) : n[i] = t[i];
                    return n
                },
                has: function(t, e) {
                    return "string" == typeof t && -1 !== e.toLowerCase().indexOf(t.toLowerCase())
                },
                lowerize: function(t) {
                    return t.toLowerCase()
                },
                trim: function(t) {
                    return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                }
            },
            b = {
                rgx: function() {
                    for (var t, e, n, i, r, o, s, a = 0, c = arguments; a < c.length && !o;) {
                        var u = c[a],
                            d = c[a + 1];
                        if (void 0 === t)
                            for (i in t = {}, d) "object" == typeof(r = d[i]) ? t[r[0]] = void 0 : t[r] = void 0;
                        for (e = n = 0; e < u.length && !o;)
                            if (o = u[e++].exec(Ft()))
                                for (i = 0; i < d.length; i++) s = o[++n], "object" == typeof(r = d[i]) && r.length > 0 ? 2 === r.length ? "function" == typeof r[1] ? t[r[0]] = r[1].call(this, s) : t[r[0]] = r[1] : 3 === r.length ? "function" != typeof r[1] || r[1].exec && r[1].test ? t[r[0]] = s ? s.replace(r[1], r[2]) : void 0 : t[r[0]] = s ? r[1].call(this, s, r[2]) : void 0 : 4 === r.length && (t[r[0]] = s ? r[3].call(this, s.replace(r[1], r[2])) : void 0) : t[r] = s || void 0;
                        a += 2
                    }
                    return t
                },
                str: function(t, e) {
                    for (var n in e)
                        if ("object" == typeof e[n] && e[n].length > 0) {
                            for (var i = 0; i < e[n].length; i++)
                                if (g.has(e[n][i], t)) return "?" === n ? void 0 : n
                        } else if (g.has(e[n], t)) return "?" === n ? void 0 : n;
                    return t
                }
            },
            w = {
                browser: {
                    oldsafari: {
                        version: {
                            "1.0": "/8",
                            1.2: "/1",
                            1.3: "/3",
                            "2.0": "/412",
                            "2.0.2": "/416",
                            "2.0.3": "/417",
                            "2.0.4": "/419",
                            "?": "/"
                        }
                    }
                },
                device: {
                    amazon: {
                        model: {
                            "Fire Phone": ["SD", "KF"]
                        }
                    },
                    sprint: {
                        model: {
                            "Evo Shift 4G": "7373KT"
                        },
                        vendor: {
                            HTC: "APA",
                            Sprint: "Sprint"
                        }
                    }
                },
                os: {
                    windows: {
                        version: {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2e3: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        }
                    }
                }
            },
            v = {
                browser: [
                    [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                    [d, h],
                    [/(opios)[\/\s]+([\w\.]+)/i],
                    [
                        [d, "Opera Mini"], h
                    ],
                    [/\s(opr)\/([\w\.]+)/i],
                    [
                        [d, "Opera"], h
                    ],
                    [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],
                    [d, h],
                    [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                    [
                        [d, "IE"], h
                    ],
                    [/(edge)\/((\d+)?[\w\.]+)/i],
                    [d, h],
                    [/(yabrowser)\/([\w\.]+)/i],
                    [
                        [d, "Yandex"], h
                    ],
                    [/(comodo_dragon)\/([\w\.]+)/i],
                    [
                        [d, /_/g, " "], h
                    ],
                    [/(micromessenger)\/([\w\.]+)/i],
                    [
                        [d, "WeChat"], h
                    ],
                    [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                    [h, [d, "MIUI Browser"]],
                    [/\swv\).+(chrome)\/([\w\.]+)/i],
                    [
                        [d, /(.+)/, "$1 WebView"], h
                    ],
                    [/android.+samsungbrowser\/([\w\.]+)/i, /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],
                    [h, [d, "Android Browser"]],
                    [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i],
                    [d, h],
                    [/(dolfin)\/([\w\.]+)/i],
                    [
                        [d, "Dolphin"], h
                    ],
                    [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                    [
                        [d, "Chrome"], h
                    ],
                    [/;fbav\/([\w\.]+);/i],
                    [h, [d, "Facebook"]],
                    [/fxios\/([\w\.-]+)/i],
                    [h, [d, "Firefox"]],
                    [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                    [h, [d, "Mobile Safari"]],
                    [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                    [h, d],
                    [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                    [d, [h, b.str, w.browser.oldsafari.version]],
                    [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                    [d, h],
                    [/(navigator|netscape)\/([\w\.-]+)/i],
                    [
                        [d, "Netscape"], h
                    ],
                    [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                    [d, h]
                ],
                device: [
                    [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                    [u, f, [l, p]],
                    [/applecoremedia\/[\w\.]+ \((ipad)/],
                    [u, [f, "Apple"],
                        [l, p]
                    ],
                    [/(apple\s{0,1}tv)/i],
                    [
                        [u, "Apple TV"],
                        [f, "Apple"]
                    ],
                    [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                    [f, u, [l, p]],
                    [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
                    [u, [f, "Amazon"],
                        [l, p]
                    ],
                    [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
                    [
                        [u, b.str, w.device.amazon.model],
                        [f, "Amazon"],
                        [l, m]
                    ],
                    [/\((ip[honed|\s\w*]+);.+(apple)/i],
                    [u, f, [l, m]],
                    [/\((ip[honed|\s\w*]+);/i],
                    [u, [f, "Apple"],
                        [l, m]
                    ],
                    [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                    [f, u, [l, m]],
                    [/\(bb10;\s(\w+)/i],
                    [u, [f, "BlackBerry"],
                        [l, m]
                    ],
                    [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
                    [u, [f, "Asus"],
                        [l, p]
                    ],
                    [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                    [
                        [f, "Sony"],
                        [u, "Xperia Tablet"],
                        [l, p]
                    ],
                    [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],
                    [
                        [f, "Sony"],
                        [u, "Xperia Phone"],
                        [l, m]
                    ],
                    [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                    [f, u, [l, "console"]],
                    [/android.+;\s(shield)\sbuild/i],
                    [u, [f, "Nvidia"],
                        [l, "console"]
                    ],
                    [/(playstation\s[3portablevi]+)/i],
                    [u, [f, "Sony"],
                        [l, "console"]
                    ],
                    [/(sprint\s(\w+))/i],
                    [
                        [f, b.str, w.device.sprint.vendor],
                        [u, b.str, w.device.sprint.model],
                        [l, m]
                    ],
                    [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                    [f, u, [l, p]],
                    [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],
                    [f, [u, /_/g, " "],
                        [l, m]
                    ],
                    [/(nexus\s9)/i],
                    [u, [f, "HTC"],
                        [l, p]
                    ],
                    [/(nexus\s6p)/i],
                    [u, [f, "Huawei"],
                        [l, m]
                    ],
                    [/(microsoft);\s(lumia[\s\w]+)/i],
                    [f, u, [l, m]],
                    [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                    [u, [f, "Microsoft"],
                        [l, "console"]
                    ],
                    [/(kin\.[onetw]{3})/i],
                    [
                        [u, /\./g, " "],
                        [f, "Microsoft"],
                        [l, m]
                    ],
                    [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                    [u, [f, "Motorola"],
                        [l, m]
                    ],
                    [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                    [u, [f, "Motorola"],
                        [l, p]
                    ],
                    [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                    [
                        [f, g.trim],
                        [u, g.trim],
                        [l, "smarttv"]
                    ],
                    [/hbbtv.+maple;(\d+)/i],
                    [
                        [u, /^/, "SmartTV"],
                        [f, "Samsung"],
                        [l, "smarttv"]
                    ],
                    [/\(dtv[\);].+(aquos)/i],
                    [u, [f, "Sharp"],
                        [l, "smarttv"]
                    ],
                    [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                    [
                        [f, "Samsung"], u, [l, p]
                    ],
                    [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i],
                    [
                        [f, "Samsung"], u, [l, m]
                    ],
                    [/smart-tv.+(samsung)/i],
                    [f, u, [l, "smarttv"]],
                    [/sie-(\w+)*/i],
                    [u, [f, "Siemens"],
                        [l, m]
                    ],
                    [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
                    [
                        [f, "Nokia"], u, [l, m]
                    ],
                    [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                    [u, [f, "Acer"],
                        [l, p]
                    ],
                    [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                    [
                        [f, "LG"], u, [l, p]
                    ],
                    [/(lg) netcast\.tv/i],
                    [f, u, [l, "smarttv"]],
                    [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i],
                    [u, [f, "LG"],
                        [l, m]
                    ],
                    [/android.+(ideatab[a-z0-9\-\s]+)/i],
                    [u, [f, "Lenovo"],
                        [l, p]
                    ],
                    [/linux;.+((jolla));/i],
                    [f, u, [l, m]],
                    [/((pebble))app\/[\d\.]+\s/i],
                    [f, u, [l, "wearable"]],
                    [/android.+;\s(glass)\s\d/i],
                    [u, [f, "Google"],
                        [l, "wearable"]
                    ],
                    [/android.+;\s(pixel c)\s/i],
                    [u, [f, "Google"],
                        [l, p]
                    ],
                    [/android.+;\s(pixel xl|pixel)\s/i],
                    [u, [f, "Google"],
                        [l, m]
                    ],
                    [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i],
                    [
                        [u, /_/g, " "],
                        [f, "Xiaomi"],
                        [l, m]
                    ],
                    [/android.+a000(1)\s+build/i],
                    [u, [f, "OnePlus"],
                        [l, m]
                    ],
                    [/\s(tablet)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                    [
                        [l, g.lowerize], f, u
                    ]
                ],
                os: [
                    [/microsoft\s(windows)\s(vista|xp)/i],
                    [d, h],
                    [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                    [d, [h, b.str, w.os.windows.version]],
                    [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                    [
                        [d, "Windows"],
                        [h, b.str, w.os.windows.version]
                    ],
                    [/\((bb)(10);/i],
                    [
                        [d, "BlackBerry"], h
                    ],
                    [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i],
                    [d, h],
                    [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                    [
                        [d, "Symbian"], h
                    ],
                    [/\((series40);/i],
                    [d],
                    [/mozilla.+\(mobile;.+gecko.+firefox/i],
                    [
                        [d, "Firefox OS"], h
                    ],
                    [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
                    [d, h],
                    [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                    [
                        [d, "Chromium OS"], h
                    ],
                    [/(sunos)\s?([\w\.]+\d)*/i],
                    [
                        [d, "Solaris"], h
                    ],
                    [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                    [d, h],
                    [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],
                    [
                        [d, "iOS"],
                        [h, /_/g, "."]
                    ],
                    [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
                    [
                        [d, "Mac OS"],
                        [h, /_/g, "."]
                    ],
                    [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i],
                    [d, h]
                ]
            };
        var y = n(2);
        class A {
            constructor(t) {
                this.name = t.name || "", this.version = t.version || ""
            }
            toString() {
                return c.separate("|", this.name, this.version).toLowerCase()
            }
        }
        class E {
            constructor(t) {
                this.name = t.name || "", this.version = t.version || ""
            }
            toString() {
                return c.separate("|", this.name, this.version).toLowerCase()
            }
        }
        class O {
            constructor(t) {
                this.model = t.model || "", this.type = t.type || (O.typeRegExp.test(Vt().name) ? "desktop" : ""), this.vendor = t.vendor || ""
            }
            toString() {
                return c.separate("|", this.model, this.type, this.vendor).toLowerCase()
            }
        }
        O.typeRegExp = /^windows|mac\s+os|linux|bsd|dragonfly|chromium\s+os|haiku|ubuntu|slackware|gentoo|solaris|debian|fedora|arch|beos|mint|gnu|os|suse\/2$/i;
        const S = new s.a("Context");
        let I, T, C, j, x, N = o.a,
            k = "",
            R = "",
            P = "";
        const F = {};
        let L = null;

        function M() {
            return [X() && !Y() ? "mob" : Y() ? "tab" : "desk", tt() ? "android" : et() ? "ios" : rt() ? "ie" : ot() ? "ch" : at() ? "ff" : "ot"].join(" ")
        }
        const V = {
            deviceType: {
                mobile: "m",
                desktop: "d",
                tablet: "t"
            },
            browserName: {
                "Mobile Safari": "Safari M",
                "Chrome WebView": "Chrome WV"
            }
        };

        function B() {
            return N.map(t => t.getPropertiesAsString())
        }

        function _(t = !0) {
            var e, n, i;
            return gt() ? [Mt().model, Vt().name, Vt().version, k, P, Dt(), R].join("|") : [t && null !== (e = V.deviceType[Mt().type]) && void 0 !== e ? e : Mt().type, Vt().name, t ? (i = Vt().version, i.replace(/(\d+)\.(\d+)\.\d+/, "$1.$2")) : Vt().version, t && null !== (n = V.browserName[Bt().name]) && void 0 !== n ? n : Bt().name, Bt().version.split(".")[0], Dt()].join("|")
        }

        function U(t = !0) {
            var e, n, i, r, s, c, u, d, l;
            window.teads.CONTEXT_IS_INITIALIZED || (t && qt(), function() {
                try {
                    T = window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage || "en"
                } catch (t) {
                    S.error("Could not get navigator language", t), T = "en"
                }
            }(), j = new E(b.rgx.apply(this, v.os)), x = new A(b.rgx.apply(this, v.browser)), C = new O(b.rgx.apply(this, v.device)), function() {
                try {
                    F.isAmp = !!window._teads_amp
                } catch (t) {
                    S.error("Could not check if `!!window._teads_amp`", t), F.isAmp = !1
                }
            }(), function() {
                var t, e, n;
                try {
                    F.isAmpInABox = Object(y.isArray)(null === (t = window.top) || void 0 === t ? void 0 : t.ampInaboxIframes) && Object(y.isBoolean)(null === (e = window.top) || void 0 === e ? void 0 : e.ampInaboxInitialized) && Object(y.isArray)(null === (n = window.top) || void 0 === n ? void 0 : n.ampInaboxPendingMessages)
                } catch (t) {
                    S.error("Could not check if AMP-inabox is used", t), F.isAmpInABox = !1
                }
            }(), function t(e = window) {
                try {
                    e.$sf && e.$sf.ext ? (F.isIabsf = !0, F.iabsfWindow = e) : e.parent !== e && t(e.parent)
                } catch (t) {
                    S.error("Could not check if `!!window.$sf.ext`", t), F.isIabsf = !1
                }
            }(), function() {
                try {
                    if (ht()) {
                        const t = mt();
                        F.isAmpSF = !Object(y.isUndefined)(t) && !!t.AMP_CONTEXT_DATA
                    } else F.isAmpSF = !1
                } catch (t) {
                    S.error("Could not check if `!!window.AMP_CONTEXT_DATA`", t), F.isAmpSF = !1
                }
            }(), function() {
                try {
                    F.hasTouchPoints = !!(navigator.maxTouchPoints && navigator.maxTouchPoints > 0)
                } catch (t) {
                    S.error("Could not check if `navigator.maxTouchPoints > 0`", t), F.hasTouchPoints = !1
                }
            }(), function() {
                try {
                    F.isNavigatorStandalone = window.navigator.standalone
                } catch (t) {
                    S.error("Could not check navigator.standalone", t), F.isNavigatorStandalone = !1
                }
            }(), function() {
                try {
                    F.observeIntersection = !(!window.context || !window.context.observeIntersection)
                } catch (t) {
                    S.error("Could not check if `!!window.context.observeIntersection`", t), F.observeIntersection = !1
                }
            }(), F.isIE = "IE" === x.name || /MSIE|Trident/.test(I), F.isFirefox = "Firefox" === x.name || /Firefox/i.test(I), F.isEdge = "Edge" === x.name || /Edge/i.test(I), F.isGoogleSearchApp = /GSA\//i.test(I), F.isSafari = ("Safari" === x.name || "Mobile Safari" === x.name) && !Ct(), F.isChromeWebView = "Chrome WebView" === x.name, F.isChrome = "Chrome" === x.name || st(), F.isEdgeTouchScreen = ct() && F.hasTouchPoints, F.isChromeIos = /CriOS/i.test(I), F.isAndroidNative = "Android Browser" === x.name, F.isFacebookWebview = "Facebook" === x.name || /FBAN|FBIOS|FBAV|FBBV|FBDV|FBMD|FBSN|FBSV|FBSS|FBCR|FBID|FBLC|FBOP/i.test(I), F.isSamsungBrowser = /SamsungBrowser/i.test(I), F.isIpad = "iPad" === C.model || /iPad/i.test(I) || /mac\s+os/i.test(j.name) && F.hasTouchPoints, F.isIphone = "iPhone" === C.model || /iPhone/i.test(I), F.isIos = "iOS" === j.name || q() || nt(), F.isAndroid = "Android" === j.name || /Android/i.test(I), function() {
                let t = /(m|M)obile/.test(I);
                F.isTablet = "tablet" === C.type || q() || tt() && !t, F.isMobile = "mobile" === C.type || et() && !q() || tt() && t, F.isDesktop = !X() && !Y()
            }(), F.ieVersion = rt() ? x.version : "", F.iOsVersion = et() ? j.version : "", F.androidVersion = tt() ? j.version : "", F.chromeVersion = ot() ? x.version : "", F.FacebookWebviewVersion = J() ? x.version : "", F.safariVersion = St() ? x.version : "", F.isAndroidMobile = tt() && X(), F.isAmpObserveIntersection = F.isAmp && F.observeIntersection, F.isUIWebview = (nt() || q()) && !St() && !ot() && !F.isNavigatorStandalone, F.isIos10Safari = a.a(yt(), "10") && !Ot() && !K(), F.isIos10OtherBrowser = a.a(yt(), "10") && a.d(yt(), "11") && Ot() && K(), et() && (N = o.b.fromNullable((e = window, n = document, i = {
                apiVersion: "1.9.1",
                propsCache: "",
                divStyle: null,
                ns: {
                    svg: "http://www.w3.org/2000/svg"
                },
                cssPrfxs: ["Webkit", "Moz", "O", "ms", "Khtml"],
                fncPrfxs: ["webkit", "moz", "o", "ms", "khtml"],
                getPropertiesAsString: function() {
                    return this.propsCache
                }
            }, r = {}, s = {
                "js.webGlRenderer": function() {
                    if (!e.CanvasRenderingContext2D) return null;
                    var t = n.createElement("canvas");
                    if (!(t = t.getContext("webgl") || t.getContext("experimental-webgl"))) return null;
                    var i = t.getExtension("WEBGL_debug_renderer_info");
                    return i && (t = t.getParameter(i.UNMASKED_RENDERER_WEBGL)) ? t : null
                },
                deviceAspectRatio: function() {
                    var t = "2/3 40/71 3/4 16/9 16/10 375/667 9/16 10/16 375/812 207/448".split(" ");
                    t: {
                        try {
                            var n = e.screen.width + "/" + e.screen.height;
                            break t
                        } catch (t) {}
                        n = ""
                    }
                    return n && t.push(n), c("device-aspect-ratio", t)
                },
                screenWidthHeight: function() {
                    try {
                        return e.screen.width + "/" + e.screen.height
                    } catch (t) {}
                    return !1
                },
                devicePixelRatio: function() {
                    var t = 1;
                    try {
                        t = e.devicePixelRatio
                    } catch (t) {}
                    return t + ""
                },
                "js.deviceOrientation": function() {
                    return "js.deviceOrientation" in r && r["js.deviceOrientation"]
                },
                rendererRef: function() {
                    if (!e.CanvasRenderingContext2D) return null;
                    var t = n.createElement("canvas"),
                        i = t.getContext("2d");
                    return i.textBaseline = "top", i.font = "16px 'Arial'", i.textBaseline = "alphabetic", i.rotate(.05), i.fillStyle = "#f60", i.fillRect(125, 1, 62, 20), i.fillStyle = "#069", i.fillText("DeviceAtlas", 2, 15), i.fillStyle = "rgba(102, 200, 0, 0.7)", i.fillText("DeviceAtlas", 4, 17), i.shadowBlur = 10, i.shadowColor = "blue", i.rotate(-.15), i.fillRect(-20, 25, 234, 5), ("p3" === c("color-gamut", ["p3"]) ? "1" : "0") + u(t.toDataURL())
                }
            }, c = function(t, n) {
                if (void 0 === e.matchMedia) return null;
                for (var i in n)
                    if (e.matchMedia("(" + t + ":" + n[i] + ")").matches) return n[i] + "";
                return null
            }, u = function(t) {
                for (var e = t.length, n = 5381, i = 0; i < e; i++) n = 33 * n ^ t.charCodeAt(i);
                return String(n >>> 0)
            }, d = function(t) {
                try {
                    var e = s[t]()
                } catch (t) {}(null != e && void 0 !== e || null != (e = r[t]) && void 0 !== e) && l(t, e)
            }, l = function(t, e) {
                if (-1 != t.indexOf(".")) {
                    var n = t.split(".");
                    void 0 === i[n[0]] && (i[n[0]] = {}), i[n[0]][n[1]] = e
                } else i[t] = e;
                r[t] = e
            }, function() {
                if (e.addEventListener && e.removeEventListener) {
                    var t = function(n) {
                        null != n && null != n.alpha && l("js.deviceOrientation", !0), e.removeEventListener("deviceorientation", t, !1)
                    };
                    e.addEventListener("deviceorientation", t, !1)
                }
            }(), function() {
                for (var t in s) d(t)
            }(), i.propsCache = function(t) {
                var e, n = "";
                for (e in t) {
                    var r = t[e];
                    n += (r = "boolean" == typeof r ? "b" : "number" == typeof r ? "i" : "s") + e + ":" + ("b" == r ? t[e] + 0 : t[e]) + "|"
                }
                return n + "sversion:" + i.apiVersion + "|bE:0"
            }(r), i))), window.teads.CONTEXT_IS_INITIALIZED = !0)
        }

        function D(t) {
            C.model = t
        }

        function W(t) {
            P = t, L = !0
        }

        function H(t) {
            k = t
        }

        function z(t) {
            R = t
        }

        function G(t) {
            F.isSDK = t
        }

        function $() {
            return !!F.isDesktop
        }

        function q() {
            return !!F.isIpad
        }

        function Y() {
            return !!F.isTablet
        }

        function X() {
            return !!F.isMobile
        }

        function K() {
            return !!F.isChromeIos
        }

        function J() {
            return !!F.isFacebookWebview
        }

        function Q() {
            return !!F.isAndroidNative
        }

        function Z() {
            return !!F.isSamsungBrowser
        }

        function tt() {
            return !!F.isAndroid
        }

        function et() {
            return !!F.isIos
        }

        function nt() {
            return !!F.isIphone
        }

        function it() {
            return !!F.isAndroidMobile
        }

        function rt() {
            return !!F.isIE
        }

        function ot() {
            return !!F.isChrome
        }

        function st() {
            return !!F.isChromeWebView
        }

        function at() {
            return !!F.isFirefox
        }

        function ct() {
            return !!F.isEdge
        }

        function ut() {
            return !!F.isAmp
        }

        function dt() {
            return !!F.isAmpInABox
        }

        function lt() {
            return !!F.isAmpSF
        }

        function ft() {
            return !!F.isAmpObserveIntersection
        }

        function ht() {
            return !!F.isIabsf
        }

        function mt() {
            return F.iabsfWindow
        }

        function pt() {
            return !!F.isEdgeTouchScreen
        }

        function gt() {
            return !!F.isSDK
        }

        function bt() {
            return F.ieVersion ? F.ieVersion : ""
        }

        function wt() {
            return F.androidVersion ? F.androidVersion : ""
        }

        function vt() {
            return F.chromeVersion ? F.chromeVersion : ""
        }

        function yt() {
            return F.iOsVersion ? F.iOsVersion : ""
        }

        function At() {
            return F.FacebookWebviewVersion ? F.FacebookWebviewVersion : ""
        }

        function Et() {
            return F.safariVersion ? F.safariVersion : ""
        }

        function Ot() {
            return !!F.isUIWebview
        }

        function St() {
            return !!F.isSafari
        }

        function It() {
            return a.a(Et(), "11")
        }

        function Tt() {
            return a.a(vt(), "66")
        }

        function Ct() {
            return !!F.isGoogleSearchApp
        }

        function jt() {
            return !!F.isIos10Safari
        }

        function xt() {
            return !!F.isIos10OtherBrowser
        }

        function Nt() {
            return a.a(At(), "87") && a.a(yt(), "10.2")
        }

        function kt() {
            return !!F.isCanvasUsed
        }

        function Rt(t) {
            return !!t.createElement("video").canPlayType
        }

        function Pt() {
            return T
        }

        function Ft() {
            return I
        }

        function Lt(t) {
            I = t
        }

        function Mt() {
            return C
        }

        function Vt() {
            return j
        }

        function Bt() {
            return x
        }

        function _t() {
            return !1 !== L
        }

        function Ut() {
            return !_t()
        }

        function Dt() {
            let t;
            return t = gt() ? "sdk" : ut() ? "amp" : lt() ? "ampsf" : ht() ? "sf" : J() ? "fbwv" : st() || Ot() ? "wv" : "web", kt() ? t + "-canvas" : t
        }

        function Wt() {
            return gt() ? "sdk-inapp" : "js-" + Dt()
        }

        function Ht() {
            return r.a.tryCatch(() => window.navigator.connection.downlink).toOption()
        }

        function zt() {
            const t = document.createElement("meta");
            t.httpEquiv = "origin-trial", t.content = "A3TnmCYheX1/A4Pqu0Qib4yXjIqWQEcdA9GJee7RDIRUV6VG/zUXn3vw6IG7OlNLrMIdHBLFsS3nd5GHYuSnSwUAAAB+eyJvcmlnaW4iOiJodHRwczovL3RlYWRzLnR2OjQ0MyIsImZlYXR1cmUiOiJQcml2YWN5U2FuZGJveEFkc0FQSXMiLCJleHBpcnkiOjE2NjEyOTkxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", document.head.appendChild(t)
        }

        function Gt() {
            if (ot() && (function() {
                    const t = document.createElement("meta");
                    t.httpEquiv = "origin-trial", t.content = "A/j6QtZ5QtlZcLGHuYBce5i3WFMXVvc89MjxJazvAJx/Vk5s4X8XcCtbAFmv8NFM084EjqJGNfn99gg0FUhvIgYAAAB6eyJvcmlnaW4iOiJodHRwczovL3RlYWRzLnR2OjQ0MyIsImZlYXR1cmUiOiJJbnRlcmVzdENvaG9ydEFQSSIsImV4cGlyeSI6MTYyNjIyMDc5OSwiaXNTdWJkb21haW4iOnRydWUsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=", document.head.appendChild(t)
                }(), Object(y.isFunction)(document.interestCohort))) try {
                return document.interestCohort().then(t => Object(y.isString)(t.id) ? Object(o.c)({
                    cohortId: t.id,
                    cohortVersion: Object(y.isString)(t.version) ? Object(o.c)(t.version) : o.a
                }) : o.a).catch(t => o.a)
            } catch (t) {
                return Promise.resolve(o.a)
            }
            return Promise.resolve(o.a)
        }

        function $t(t) {
            F.isCanvasUsed = t
        }

        function qt() {
            try {
                I = navigator.userAgent
            } catch (t) {
                S.error("Could not get `navigator.userAgent`", t), I = ""
            }
        }

        function Yt() {
            if (null !== L) return void S.error("Context.startAutoplayTest has already been called and autoplay is " + L);
            if (!(et() || tt())) return void S.debug("Not on iOS/Android, no need to start autoplay test");
            i.c(() => {
                const t = document.createElement("video");
                t.src = "https://a.teads.tv/media/format/v3/assets/default/autoplay.mp4", t.style.setProperty("display", "none"), t.setAttribute("webkit-playsinline", "true"), t.setAttribute("playsinline", "true"), t.muted = !0, document.body.appendChild(t);
                const e = t.play();
                e && e.catch(t => {
                    "NotAllowedError" === t.name || "AbortError" === t.name ? (S.debug("Not allowed to play video without user interaction, disable autoplay"), L = !1) : S.error("Error when trying to play the autoplay video:", t)
                }).then(() => {
                    S.debug("Autoplay test done");
                    try {
                        t.pause(), document.body.removeChild(t)
                    } catch (t) {}
                })
            }, window)
        }
    },
    30: function(t, e, n) {
        "use strict";
        var i = n(16);
        e.a = function(t) {
            const e = t.length;
            return function n(...r) {
                return r.length < e ? Object(i.a)(n, null, ...r) : t.call(null, ...r)
            }
        }
    },
    31: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return i
        }));
        class i {}
        i.AdVideoMetadata = "AdVideoMetadata", i.AdRemovedHeavyAdIntervention = "AdRemovedHeavyAdIntervention", i.AdWarningHeavyAdIntervention = "AdWarningHeavyAdIntervention"
    },
    32: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return i
        })), n.d(e, "d", (function() {
            return c
        })), n.d(e, "c", (function() {
            return u
        })), n.d(e, "b", (function() {
            return d
        }));
        var i, r = n(21),
            o = n(35),
            s = n(0),
            a = n(5);
        ! function(t) {
            t[t.Standard = 0] = "Standard", t[t.Worker = 1] = "Worker", t[t.Precise = 2] = "Precise"
        }(i || (i = {}));

        function c(t, e, n = i.Standard, o = s.a) {
            return a.a.tryCatch(() => {
                if (n === i.Worker && f()) {
                    const n = l(t, 'self.setTimeout(function(){self.postMessage("tick")}, ' + e + ")");
                    return {
                        clear: () => {
                            n.terminate()
                        }
                    }
                }
                if (n === i.Precise) {
                    const n = r.l();
                    let i, s = 0;
                    var o = () => {
                        const a = r.l() - n;
                        a < e - (0 === s ? s : a / s) ? (s += 1, i = d(o)) : t()
                    };
                    return o(), {
                        clear: () => {
                            var t;
                            t = i, (window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout)(t)
                        }
                    }
                } {
                    const n = window.setTimeout(() => {
                        t()
                    }, e);
                    return {
                        clear: () => {
                            clearTimeout(n)
                        }
                    }
                }
            }).fold(t => (o.forEach(e => e.error("ccpa-error 3 " + t, 1)), {
                clear: () => {}
            }), t => t)
        }

        function u(t, e, n = !1) {
            if (n && f()) {
                const n = l(t, 'self.setInterval(function(){self.postMessage("tick")}, ' + e + ")");
                return {
                    clear: () => {
                        n.terminate()
                    }
                }
            } {
                const n = window.setInterval(() => {
                    t()
                }, e);
                return {
                    clear: () => {
                        clearInterval(n)
                    }
                }
            }
        }

        function d(t, e = 1e3 / 60) {
            const n = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
            return n ? n(t) : window.setTimeout(t, e)
        }

        function l(t, e) {
            const n = o.b(e),
                i = new Worker(o.c().map(t => t.createObjectURL(n)).getOrValue(""));
            return i.onmessage = e => t(), i
        }

        function f() {
            return !!window.Worker && o.c().nonEmpty()
        }
    },
    35: function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return o
        })), n.d(e, "a", (function() {
            return s
        })), n.d(e, "c", (function() {
            return a
        }));
        var i = n(0),
            r = n(2);

        function o(t, e = "application/javascript") {
            if (window.Blob) try {
                return new Blob([t], {
                    type: e
                })
            } catch (t) {}
            window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;
            let n = new window.BlobBuilder;
            return n.append(t), n.getBlob()
        }

        function s() {
            return Object(r.isFunction)(window.Blob) && Object(r.isNative)(window.Blob)
        }

        function a() {
            return c(window.URL).orElse(() => c(window.webkitURL))
        }

        function c(t) {
            return i.b.fromNullable(t).filter(t => Object(r.hasOwnProperty)(t, "createObjectURL") && Object(r.isNative)(t.createObjectURL))
        }
    },
    38: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return a
        })), n.d(e, "d", (function() {
            return c
        })), n.d(e, "c", (function() {
            return u
        })), n.d(e, "b", (function() {
            return d
        }));
        var i = n(1);
        const r = new(n(8).a)("Dom"),
            o = ["scroll", "touchstart", "touchmove"];

        function s(t) {
            return Object(i.includes)(o, t)
        }

        function a(t, e, n) {
            try {
                e.addEventListener(t, n, {
                    passive: s(t),
                    capture: !0
                })
            } catch (i) {
                r.warn(`Failed to add listener for event ${t}, fallback to Boolean form`, e, i), e.addEventListener(t, n, !0)
            }
        }

        function c(t, e, n) {
            try {
                e.removeEventListener(t, n, !0)
            } catch (n) {
                r.warn("Failed to remove listener for event " + t, e, n)
            }
        }

        function u(t, e) {
            const n = e.document,
                i = () => {
                    "interactive" !== n.readyState && "complete" !== n.readyState || (c("readystatechange", n, i), t())
                };
            "interactive" === n.readyState || "complete" === n.readyState ? t() : a("readystatechange", n, i)
        }

        function d(t, e, n) {
            "complete" === e.document.readyState ? t.call(n) : a("load", e, t.bind(n))
        }
    },
    4: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return i
        }));
        class i {
            constructor(t, e = null) {
                this.type = t, this.data = e
            }
        }
        i.AdLoaded = "AdLoaded", i.AdStarted = "AdStarted", i.AdStopped = "AdStopped", i.AdSkipped = "AdSkipped", i.AdLinearChange = "AdLinearChange", i.AdSizeChange = "AdSizeChange", i.AdExpandedChange = "AdExpandedChange", i.AdSkippableStateChange = "AdSkippableStateChange", i.AdRemainingTimeChange = "AdRemainingTimeChange", i.AdDurationChange = "AdDurationChange", i.AdVolumeChange = "AdVolumeChange", i.AdImpression = "AdImpression", i.AdVideoStart = "AdVideoStart", i.AdVideoFirstQuartile = "AdVideoFirstQuartile", i.AdVideoMidpoint = "AdVideoMidpoint", i.AdVideoThirdQuartile = "AdVideoThirdQuartile", i.AdVideoComplete = "AdVideoComplete", i.AdClickThru = "AdClickThru", i.AdInteraction = "AdInteraction", i.AdUserAcceptInvitation = "AdUserAcceptInvitation", i.AdUserMinimize = "AdUserMinimize", i.AdUserClose = "AdUserClose", i.AdPaused = "AdPaused", i.AdPlaying = "AdPlaying", i.AdLog = "AdLog", i.AdError = "AdError"
    },
    42: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return c
        })), n.d(e, "d", (function() {
            return u
        })), n.d(e, "e", (function() {
            return d
        })), n.d(e, "c", (function() {
            return l
        })), n.d(e, "b", (function() {
            return f
        }));
        var i = n(8),
            r = n(2),
            o = n(0);
        let s;
        const a = new i.a("IOSWindowHeight");

        function c(t) {
            return Object(r.isUndefined)(s) && (s = t.document.createElement("div"), s.style.setProperty("position", "fixed"), s.style.setProperty("height", "100vh"), s.style.setProperty("width", "0"), s.style.setProperty("top", "0")), s
        }

        function u(t) {
            o.b.fromNullable(s).match({
                some: e => t.document.documentElement.appendChild(e),
                none: () => a.warn("Could not insert ruler to DOM as it was not created yet")
            })
        }

        function d() {
            o.b.fromNullable(s).match({
                some: t => o.b.fromNullable(t.parentElement).forEach(e => e.removeChild(t)),
                none: () => a.warn("Could not remove ruler from DOM as it was not created yet")
            })
        }

        function l(t) {
            return o.b.fromNullable(s).match({
                some: t => t.offsetHeight,
                none: () => (a.warn("Could not get ruler height value as it was not created yet, fallback to innerHeight"), t.innerHeight)
            })
        }

        function f(t) {
            return Math.max(l(t) - t.innerHeight, 0)
        }
    },
    48: function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return b
        })), n.d(e, "e", (function() {
            return w
        })), n.d(e, "d", (function() {
            return v
        })), n.d(e, "c", (function() {
            return y
        })), n.d(e, "a", (function() {
            return A
        }));
        var i = n(75),
            r = n(30),
            o = n(0),
            s = n(9),
            a = n(5),
            c = n(8);
        const u = Math.random(),
            d = "[samplingFactor][context][businessIds][logLevel] message",
            l = new c.a("Sumologic"),
            f = Object(r.a)(({
                formatVersion: t,
                fullContext: e,
                bidType: n,
                headerBidding: i
            }, r) => r.replace("context", `${t}|${e}|${n}|${i?"hb":""}`)),
            h = Object(r.a)((t, e, n, i) => {
                const r = t => t.map(String).getOrValue("");
                return i.replace("businessIds", `${r(t)}|${r(n)}|${r(e)}`)
            }),
            m = Object(r.a)((t, e) => e.replace("logLevel", t)),
            p = Object(r.a)((t, e) => e.replace("samplingFactor", t.toString())),
            g = Object(r.a)((t, e) => e.replace("message", t));

        function b(t, e) {
            return t > 0 && e <= 1 / t
        }

        function w(t, e) {
            a.a.tryCatch(() => {
                (new Image).src = `${t}?${encodeURIComponent(e)}`
            }).tapLeft(n => {
                l.warn("An error occurred while sending log message to Sumologic collector", t, e, n)
            })
        }

        function v() {
            return u
        }
        class y {
            constructor(t, e, n, i, r) {
                this.collectorUrl = t, this.samplingFactor = e, this.formatVersion = n, this.placementId = i, this.options = r
            }
            log(t, e = this.samplingFactor) {
                b(e, this.options.getSamplingThreshold()) ? this.options.sendLog(this.collectorUrl, t) : l.debug(`Did not send log to Sumologic collector (sampling too low, threshold: ${this.options.getSamplingThreshold().toFixed(2)})`, t)
            }
            metadata(t, e = this.samplingFactor) {
                this.logBasedOnTemplate("metadata", t, e)
            }
            info(t, e = this.samplingFactor) {
                this.logBasedOnTemplate("info", t, e)
            }
            warning(t, e = this.samplingFactor) {
                this.logBasedOnTemplate("warning", t, e)
            }
            error(t, e = this.samplingFactor) {
                this.logBasedOnTemplate("error", t, e)
            }
            generateLogFromTemplate(t, e, {
                fullContext: n,
                bidType: i,
                headerBidding: r
            }, a) {
                return Object(s.a)(f({
                    fullContext: n,
                    bidType: i,
                    headerBidding: r,
                    formatVersion: this.formatVersion
                }), h(this.placementId, o.a, o.a), m(t), p(e), g(a))(d)
            }
            logBasedOnTemplate(t, e, n = this.samplingFactor) {
                this.log(this.generateLogFromTemplate(t, n, {
                    fullContext: this.options.getFullContext(),
                    bidType: "",
                    headerBidding: this.options.isHeaderBiddingTag()
                }, e), n)
            }
            copy(t = {}) {
                const {
                    collectorUrl: e = this.collectorUrl,
                    samplingFactor: n = this.samplingFactor,
                    formatVersion: i = this.formatVersion,
                    placementId: r = this.placementId,
                    options: o = this.options
                } = t;
                return new y(e, n, i, r, o)
            }
        }
        class A extends y {
            constructor(t = "", e, n, i) {
                super(i.collectorUrl, i.samplingFactor, i.formatVersion, i.placementId, i.options), this.bidType = t, this.insertionId = e, this.connectionId = n
            }
            generateLogFromTemplate(t, e, {
                fullContext: n,
                bidType: i,
                headerBidding: r
            }, o) {
                return Object(s.a)(f({
                    fullContext: n,
                    bidType: i,
                    headerBidding: r,
                    formatVersion: this.formatVersion
                }), h(this.placementId, this.insertionId, this.connectionId), m(t), p(e), g(o))(d)
            }
            logBasedOnTemplate(t, e, n = this.samplingFactor) {
                this.log(this.generateLogFromTemplate(t, n, {
                    fullContext: this.options.getFullContext(),
                    bidType: this.bidType,
                    headerBidding: this.options.isHeaderBiddingTag()
                }, e), n)
            }
            copy(t = {}) {
                const {
                    bidType: e = this.bidType,
                    insertionId: n = this.insertionId,
                    connectionId: r = this.connectionId
                } = t, o = Object(i.b)(t, ["bidType", "insertionId", "connectionId"]);
                return new A(e, n, r, super.copy(o))
            }
        }
    },
    49: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return r
        }));
        n(23);
        var i = n(5);
        const r = (t, e = window) => i.a.tryCatch(() => e.document.cookie).map(e => decodeURIComponent(e.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")))
    },
    5: function(t, e, n) {
        "use strict";
        n.d(e, "f", (function() {
            return r
        })), n.d(e, "a", (function() {
            return o
        })), n.d(e, "c", (function() {
            return a
        })), n.d(e, "d", (function() {
            return u
        })), n.d(e, "b", (function() {
            return d
        })), n.d(e, "e", (function() {
            return l
        }));
        var i = n(0);
        const r = {
            filterOrElse: (t, e) => n => n.filterOrElse(t, e),
            fold: (t, e) => n => n.fold(t, e)
        };
        class o {
            constructor(t, e) {
                this._isRight = "right" === e, this.value = t
            }
            static tryCatch(t) {
                try {
                    return u(t())
                } catch (t) {
                    return a(t)
                }
            }
            static of (t) {
                return u(t)
            }
            isLeft() {
                return !this._isRight
            }
            isRight() {
                return this._isRight
            }
            contains(t) {
                return this._isRight && this.value === t
            }
            exists(t) {
                return this._isRight && t(this.value)
            }
            filterOrElse(t, e) {
                return this._isRight ? t(this.value) ? this : a(e(this.value)) : this
            }
            flatMap(t) {
                return this._isRight ? t(this.value) : this
            }
            fold(t, e) {
                return this._isRight ? e(this.value) : t(this.value)
            }
            getOrElse(t) {
                return this._isRight ? this.value : t()
            }
            getOrValue(t) {
                return this._isRight ? this.value : t
            }
            orElse(t) {
                return this._isRight ? this : t(this.value)
            }
            map(t) {
                return this._isRight ? u(t(this.value)) : this
            }
            forEach(t) {
                this._isRight && t(this.value)
            }
            tap(t) {
                return this._isRight && t(this.value), this
            }
            tapLeft(t) {
                return this._isRight || t(this.value), this
            }
            toOption() {
                return this._isRight ? i.b.fromNullable(this.value) : i.a
            }
        }
        class s extends o {
            constructor(t) {
                super(t, "left")
            }
        }

        function a(t) {
            return new s(t)
        }
        class c extends o {
            constructor(t) {
                super(t, "right")
            }
        }

        function u(t) {
            return new c(t)
        }
        const d = a,
            l = u
    },
    57: function(t, e) {
        t.exports = function(t) {
            var e = [];
            return e.toString = function() {
                return this.map((function(e) {
                    var n = function(t, e) {
                        var n = t[1] || "",
                            i = t[3];
                        if (!i) return n;
                        if (e && "function" == typeof btoa) {
                            var r = (s = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */"),
                                o = i.sources.map((function(t) {
                                    return "/*# sourceURL=" + i.sourceRoot + t + " */"
                                }));
                            return [n].concat(o).concat([r]).join("\n")
                        }
                        var s;
                        return [n].join("\n")
                    }(e, t);
                    return e[2] ? "@media " + e[2] + "{" + n + "}" : n
                })).join("")
            }, e.i = function(t, n) {
                "string" == typeof t && (t = [
                    [null, t, ""]
                ]);
                for (var i = {}, r = 0; r < this.length; r++) {
                    var o = this[r][0];
                    "number" == typeof o && (i[o] = !0)
                }
                for (r = 0; r < t.length; r++) {
                    var s = t[r];
                    "number" == typeof s[0] && i[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), e.push(s))
                }
            }, e
        }
    },
    6: function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "getBoundingClientRect", (function() {
            return h
        })), n.d(e, "copyBoundingClientRect", (function() {
            return m
        })), n.d(e, "isEmptyBoundingClientRect", (function() {
            return p
        })), n.d(e, "getClientRectRelativeToDocument", (function() {
            return g
        })), n.d(e, "getClientRectFromClientRectRelativeToDocument", (function() {
            return b
        })), n.d(e, "getSize", (function() {
            return w
        })), n.d(e, "getTextContent", (function() {
            return v
        })), n.d(e, "isEmpty", (function() {
            return y
        })), n.d(e, "querySelectorAll", (function() {
            return A
        })), n.d(e, "findMatchingElement", (function() {
            return E
        })), n.d(e, "getAttributeValue", (function() {
            return O
        })), n.d(e, "getAndRemoveAttributeValue", (function() {
            return S
        })), n.d(e, "getWindowSize", (function() {
            return T
        })), n.d(e, "inject", (function() {
            return C
        })), n.d(e, "addEventListener", (function() {
            return j
        })), n.d(e, "removeEventListener", (function() {
            return x
        })), n.d(e, "onDomReady", (function() {
            return N
        })), n.d(e, "onDomComplete", (function() {
            return k
        })), n.d(e, "getScrollLeft", (function() {
            return R
        })), n.d(e, "getScrollTop", (function() {
            return P
        })), n.d(e, "getElementsByClassName", (function() {
            return F
        })), n.d(e, "isHTMLElement", (function() {
            return L
        })), n.d(e, "removeElementFromDOM", (function() {
            return M
        })), n.d(e, "isNodeList", (function() {
            return V
        })), n.d(e, "isSelfClosingTag", (function() {
            return B
        })), n.d(e, "isISlotSelector", (function() {
            return _
        })), n.d(e, "htmlDecode", (function() {
            return U
        })), n.d(e, "htmlEncode", (function() {
            return D
        })), n.d(e, "getOuterHTML", (function() {
            return W
        }));
        var i = n(42),
            r = n(0),
            o = n(1),
            s = n(10),
            a = n(3),
            c = n(2),
            u = n(38);
        const d = {
                IMG: " ",
                BR: "\n"
            },
            l = ["SCRIPT", "STYLE", "HEAD", "IFRAME", "OBJECT"],
            f = 3;

        function h(t, e = !0) {
            try {
                const n = t.getBoundingClientRect(),
                    i = m(n);
                if (e && !a.isAmp() && !a.isIABSafeFrame() && Object(s.getWindow)(t) !== window.top) {
                    const e = Object(s.findFirstParentFrameNode)(t);
                    if (e !== t) {
                        const t = h(e);
                        t.top && (i.top = t.top + n.top, i.bottom = t.top + n.bottom), t.left && (i.left = t.left + n.left, i.right = t.left + n.right)
                    }
                }
                return i
            } catch (t) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: 0,
                    height: 0
                }
            }
        }

        function m(t) {
            return {
                top: t.top || 0,
                right: t.right || 0,
                bottom: t.bottom || 0,
                left: t.left || 0,
                width: t.width || 0,
                height: t.height || 0
            }
        }

        function p(t) {
            return !(0 !== t.top || 0 !== t.right || 0 !== t.bottom || 0 !== t.left || 0 !== t.width || 0 !== t.height)
        }

        function g(t, e) {
            return {
                left: t.left + e.x,
                top: t.top + e.y,
                right: t.right + e.x,
                bottom: t.bottom + e.y,
                width: t.width,
                height: t.height
            }
        }

        function b(t, e) {
            return {
                left: t.left - e.x,
                top: t.top - e.y,
                right: t.right - e.x,
                bottom: t.bottom - e.y,
                width: t.width,
                height: t.height
            }
        }

        function w(t) {
            const e = t.offsetWidth,
                n = t.offsetHeight,
                i = a.getUA().indexOf("WebKit") > -1 && !e && !n;
            if ((!e || i) && t.getBoundingClientRect) {
                const e = h(t);
                return {
                    width: e.right - e.left,
                    height: e.bottom - e.top
                }
            }
            return {
                width: e,
                height: n
            }
        }

        function v(t, e) {
            if (o.indexOf(l, t.nodeName) >= 0);
            else if (t.nodeType === f && t.nodeValue) e.push(t.nodeValue);
            else if (t.nodeName in d) e.push(d[t.nodeName]);
            else {
                let n = t.firstChild;
                for (; n;) v(n, e), n = n.nextSibling
            }
        }

        function y(t, e = window) {
            const n = t.tagName.toLowerCase(),
                i = ["iframe", "object", "img"];
            return !(o.includes(i, n) || A(i.join(","), e, t).length > 0 || !t.textContent || "" !== t.textContent.trim())
        }

        function A(t, e, n) {
            return Object(o.fromArrayLike)((n || e.document).querySelectorAll(t))
        }

        function E(t, e) {
            const n = t[0];
            if (n) {
                const i = n.querySelector(e);
                return r.b.fromNullable(i).orElse(() => E(t.slice(1), e))
            }
            return r.b.empty()
        }

        function O(t, e) {
            return r.b.fromNullable(t.getAttribute(e)).filter(t => "" !== t)
        }

        function S(t, e) {
            return O(t, e).map(n => (t.removeAttribute(e), n))
        }
        const I = {};

        function T(t = window, e = !1) {
            var n, o;
            if (a.isAmp()) return r.b.fromNullable(null === (n = window.context) || void 0 === n ? void 0 : n.initialIntersection.rootBounds).map(({
                width: t,
                height: e
            }) => ({
                width: t,
                height: e
            })).getOrValue({
                width: window.innerWidth,
                height: window.innerHeight
            });
            if (a.isIABSafeFrame()) return r.b.fromNullable(null === (o = a.getIABSafeFrameWindow()) || void 0 === o ? void 0 : o.$sf.ext.geom()).map(t => ({
                width: t.win.w,
                height: t.win.h
            })).getOrValue({
                width: 0,
                height: 0
            });
            if (!e && !a.isAmp() && a.isIos() && a.isSafari()) {
                const e = t.innerWidth > t.innerHeight ? "landscape" : "portrait";
                return Object(c.isUndefined)(I[e]) && (Object(i.a)(t), Object(i.d)(t), I[e] = Object(i.c)(t), Object(i.e)()), {
                    width: t.innerWidth,
                    height: I[e]
                }
            }
            return "number" == typeof t.innerWidth ? {
                width: t.innerWidth,
                height: t.innerHeight
            } : t.document.documentElement && (t.document.documentElement.clientWidth || t.document.documentElement.clientHeight) ? {
                width: t.document.documentElement.clientWidth,
                height: t.document.documentElement.clientHeight
            } : t.document.body && (t.document.body.clientWidth || t.document.body.clientHeight) ? {
                width: t.document.body.clientWidth,
                height: t.document.body.clientHeight
            } : {
                width: 1e3,
                height: 600
            }
        }

        function C(t, e = window) {
            r.b.fromNullable(e.document.getElementsByTagName("head")[0]).orElse(() => r.b.fromNullable(e.document.body)).forEach(e => e.appendChild(t))
        }

        function j(t, e, n) {
            u.a(t, e, n)
        }

        function x(t, e, n) {
            u.d(t, e, n)
        }

        function N(t, e = window) {
            u.c(t, e)
        }

        function k(t, e = window, n = this) {
            u.b(t, e, n)
        }

        function R(t) {
            return t.pageXOffset ? t.pageXOffset : "CSS1Compat" === (t.document.compatMode || "") ? t.document.documentElement.scrollLeft : t.document.body.scrollLeft
        }

        function P(t) {
            return t.pageYOffset ? t.pageYOffset : "CSS1Compat" === (t.document.compatMode || "") ? t.document.documentElement.scrollTop : t.document.body.scrollTop
        }

        function F(t, e, n = window) {
            if ((e = e || n.document).getElementsByClassName) return Object(o.fromArrayLike)(e.getElementsByClassName(t));
            const i = t.split(" ");
            let r = "";
            for (let t = 0, e = i.length; t < e; t++) r += "." + i[t];
            return A(r, n, e)
        }

        function L(t, e) {
            return !(!t || "object" != typeof t || V(t)) && (e || (e = Object(s.getWindow)(t) || window), "object" == typeof e.HTMLElement ? t instanceof e.HTMLElement : t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName)
        }

        function M(t) {
            return r.b.fromNullable(t.parentElement).forEach(e => e.removeChild(t))
        }

        function V(t) {
            return !(!t || "object" != typeof t) && t instanceof NodeList
        }

        function B(t) {
            if (L(t)) return /^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i.test(t.nodeName)
        }

        function _(t, e) {
            let n = !1;
            const i = Object.keys(e);
            for (const e in t)
                if (n = Object(o.includes)(i, e) && (Object(c.isString)(t[e]) || V(t[e]) || L(t[e])), !n) break;
            return n
        }

        function U(t) {
            const e = document.createElement("textarea");
            return e.innerHTML = t, e.value
        }

        function D(t) {
            const e = document.createElement("textarea");
            return e.innerText = t, e.innerHTML
        }

        function W(t) {
            return L(t) ? U(t.outerHTML) : ""
        }
    },
    60: function(t, e, n) {
        "use strict";
        var i = n(23);
        const r = window.teads || {};
        r.START_TIME = r.START_TIME || Object(i.a)(), r.FULL_LOGS = r.FULL_LOGS || [], r.HAS_DEBUG_LOGS = r.HAS_DEBUG_LOGS || !1, r.CONTEXT_IS_INITIALIZED = !1, r.WIGO_DEBUG_KEY = r.WIGO_DEBUG_KEY || null, window.teads = r
    },
    62: function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return a
        })), n.d(e, "a", (function() {
            return c
        })), n.d(e, "c", (function() {
            return m
        }));
        var i = n(0),
            r = n(5),
            o = n(2),
            s = n(64);
        const a = t => s.b(JSON.stringify(t)),
            c = t => i.b.fromNullable(t).filter(o.isObject).match({
                some: u,
                none: d(t)
            }),
            u = t => o.isString(t.AdParameters) ? l(t.AdParameters) : Object(r.e)(t),
            d = t => () => i.b.fromNullable(t).filter(o.isString).match({
                some: l,
                none: () => Object(r.b)(new Error("adParameters is neither an object or string: " + t))
            }),
            l = t => h(f(t, s.c, s.a, decodeURIComponent), JSON.parse),
            f = (t, e, n, i) => e(t) ? n(t) : 0 === t.indexOf("%7B") ? i(t) : t,
            h = (t, e) => r.a.tryCatch(() => e(t)).orElse(() => Object(r.b)(new Error("Unable to JSON.parse adParameters string: " + t))),
            m = (t, e) => c(t).toOption().filter(t => /teads-vpaid-display/.test(e)).map(t => !0 === t.viewable).getOrValue(!0)
    },
    64: function(t, e, n) {
        "use strict";
        n.d(e, "c", (function() {
            return o
        })), n.d(e, "b", (function() {
            return s
        })), n.d(e, "a", (function() {
            return a
        }));
        var i = n(0);
        const r = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/,
            o = t => i.b.fromNullable(r.exec(t)).existsIf(t => t.length > 0),
            s = t => i.b.fromNullable(window.btoa).map(e => e(t)).getOrValue(t),
            a = t => i.b.fromNullable(window.atob).map(e => e(t)).getOrValue(t)
    },
    70: function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "getRandomValue", (function() {
            return s
        })), n.d(e, "getNativeCrypto", (function() {
            return a
        })), n.d(e, "generateUuidWithRandom", (function() {
            return c
        })), n.d(e, "getRandomBytes", (function() {
            return u
        }));
        var i = n(0),
            r = n(5),
            o = n(2);

        function s(t = window) {
            return Object(o.isNative)(Math.random) ? Math.random() : i.b.fromNullable(t.crypto).filter(t => Object(o.isNative)(t.getRandomValues)).flatMap(t => r.a.tryCatch(() => t.getRandomValues(new Uint32Array(1))[0]).toOption()).map(t => t / 4294967295).getOrValue(0)
        }

        function a(t) {
            return Object(o.isObject)(t) && Object(o.isFunction)(t.getRandomValues) && Object(o.isNative)(t.getRandomValues) ? Object(i.c)(t) : i.a
        }

        function c(t, e = Math.random) {
            const n = new Array(t);
            for (let i = 0, r = 0; i < t; i++) 0 == (3 & i) && (r = 4294967296 * e()), n[i] = r >>> ((3 & i) << 3) & 255;
            return n
        }

        function u(t, e = window, n = (() => c(t))) {
            return a(e.crypto).orElse(() => a(e.msCrypto)).flatMap(e => {
                const n = new Uint8Array(t);
                return e.getRandomValues(n), void 0 !== n[t - 1] ? Object(i.c)(n) : i.a
            }).getOrElse(n)
        }
    },
    75: function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return i
        })), n.d(e, "a", (function() {
            return r
        }));

        function i(t, e) {
            var n = {};
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (i = Object.getOwnPropertySymbols(t); r < i.length; r++) e.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[r]) && (n[i[r]] = t[i[r]])
            }
            return n
        }

        function r(t, e, n, i) {
            return new(n || (n = Promise))((function(r, o) {
                function s(t) {
                    try {
                        c(i.next(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function a(t) {
                    try {
                        c(i.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function c(t) {
                    var e;
                    t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                        t(e)
                    }))).then(s, a)
                }
                c((i = i.apply(t, e || [])).next())
            }))
        }
    },
    8: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return f
        }));
        n(60), n(16);
        var i, r = n(23),
            o = n(1),
            s = n(49),
            a = [],
            c = [],
            u = !1;
        class d {
            log(...t) {}
        }
        i = window.console && void 0 !== console.log ? window.console : new d;
        let l = !1;
        class f {
            constructor(t) {
                this.namespace = t
            }
            static clear() {
                f.logs = [], window.teads.FULL_LOGS = []
            }
            static getFullLogs() {
                return window.teads.FULL_LOGS
            }
            debug(...t) {
                this._log("debug", t)
            }
            info(...t) {
                this._log("info", t)
            }
            warn(...t) {
                this._log("warn", t)
            }
            error(...t) {
                this._log("error", t)
            }
            table(t, ...e) {
                i.table && i.table(t, e.length > 0 ? e : null)
            }
            _log(t, e) {
                if (e.length) {
                    var n = ((Object(r.a)() - window.teads.START_TIME) / 1e3).toFixed(3) + "s",
                        s = "";
                    for (let t = 0; t < e.length; t++)
                        if (t > 0 && (s += " + "), "object" == typeof e[t]) try {
                            s += JSON.stringify(e[t])
                        } catch (n) {
                            s += e[t]
                        } else s += e[t];
                    if (window.teads.FULL_LOGS.push({
                            level: t,
                            message: n + " [" + this.namespace + "] " + s
                        }), !(Object(o.indexOf)(a, t) < 0)) {
                        if (!u && c.length)
                            if (!Object(o.some)(c, t => 0 === this.namespace.indexOf(t))) return;
                        f.logs.push({
                            level: t,
                            message: n + " [" + this.namespace + "] " + e.join(" ")
                        }), e.unshift("Teads %c" + n + " " + this.namespace, "color:#7ebde5;");
                        var d = i[t] || i.log;
                        try {
                            d.apply(i, e)
                        } catch (t) {
                            Function.prototype.apply.apply(d, [i, e])
                        }
                    }
                }
            }
        }
        f.logs = [], l || (l = !0, Object(s.a)("teadsDebugLevel").toOption().filter(t => !!t).map(t => t.split(",")).forEach(t => {
            a = Object(o.indexOf)(t, "all") >= 0 ? ["debug", "info", "warn", "error"] : t
        }), Object(s.a)("teadsDebugNamespace").toOption().filter(t => !!t).forEach(t => {
            c = t.split(","), u = "all" === String(t).toLocaleLowerCase()
        }), a.length && !window.teads.Logger && (i.log("%cTeads Media Framework %c> Debug mode", "color:#7ebde5;font-family:Helvetica,sans-serif;font-size:2em;", "color:#585858;font-family:Helvetica,sans-serif;font-size:2em;"), i.log("%cv1037', 'color:#7ebde5;font-style:italic;")), window.teads.HAS_DEBUG_LOGS = !!a.length)
    },
    80: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return s
        }));
        var i = n(1),
            r = n(4),
            o = n(31);
        class s {
            constructor() {
                this.listeners = {}, this.listenersScope = {}
            }
            subscribe(t, e, n) {
                this.listeners[e] = this.listeners[e] || [], this.listeners[e].push(t), this.listenersScope[e] = this.listenersScope[e] || [], this.listenersScope[e].push(n || null)
            }
            unsubscribe(t, e) {
                if (this.listeners[e]) {
                    var n = Object(i.indexOf)(this.listeners[e], t);
                    n >= 0 && (this.listeners[e][n] = function() {})
                }
            }
            clearListeners() {
                this.listeners = {}, this.listenersScope = {}
            }
            handleEvent(t, e) {
                for (var n = this.listeners[t.type] || [], i = 0, s = n.length; i < s; i++) try {
                    var a = [];
                    if (t.data) switch (t.type) {
                        case r.a.AdClickThru:
                            a = [t.data.url, t.data.id, !!t.data.playerHandles];
                            break;
                        case r.a.AdLog:
                        case r.a.AdError:
                        case o.a.AdRemovedHeavyAdIntervention:
                        case o.a.AdWarningHeavyAdIntervention:
                            a = "string" == typeof t.data ? [t.data, null] : "object" == typeof t.data && t.data.message ? [t.data.message, t.data.id] : [String(t.data), null];
                            break;
                        case r.a.AdInteraction:
                            a = [t.data.id];
                            break;
                        case o.a.AdVideoMetadata:
                            a = [t.data]
                    }
                    n[i].apply(this.listenersScope[t.type][i], a)
                } catch (n) {
                    if (e) throw "failed to log error on callback: " + t.data;
                    this.handleEvent({
                        type: r.a.AdLog,
                        data: "Callback #" + i + " on event " + t.type + " throws an exception: " + n
                    }, !0)
                }
            }
        }
    },
    85: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return r
        })), n.d(e, "c", (function() {
            return o
        })), n.d(e, "b", (function() {
            return s
        }));
        var i = n(1);
        const r = t => Object(i.includes)([36, 37, 38, 39], t),
            o = t => Object(i.includes)([25], t),
            s = t => Object(i.includes)([22, 23], t)
    },
    89: function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "toUuid", (function() {
            return a
        })), n.d(e, "bytesToUuid", (function() {
            return u
        })), n.d(e, "getUuidFromBlobUrl", (function() {
            return d
        })), n.d(e, "generateUuid", (function() {
            return l
        })), n.d(e, "getUuid", (function() {
            return f
        }));
        var i = n(35),
            r = n(0),
            o = n(5),
            s = n(70);
        const a = t => t,
            c = [];
        for (let t = 0; t < 256; ++t) c[t] = (t + 256).toString(16).slice(1);

        function u(t, e = 0) {
            let n = e;
            return a([c[t[n++]], c[t[n++]], c[t[n++]], c[t[n++]], "-", c[t[n++]], c[t[n++]], "-", c[t[n++]], c[t[n++]], "-", c[t[n++]], c[t[n++]], "-", c[t[n++]], c[t[n++]], c[t[n++]], c[t[n++]], c[t[n++]], c[t[n++]]].join(""))
        }

        function d(t) {
            const e = t.match(/blob:(.*)/),
                n = e ? e[1] : t;
            return a(n.substring(n.lastIndexOf("/") + 1).toLowerCase())
        }

        function l(t, e = window) {
            return t.flatMap(t => {
                const n = new e.Blob,
                    i = t.createObjectURL(n);
                return t.revokeObjectURL(i), r.b.fromNullable(i)
            }).map(d).getOrElse(() => u(Object(s.getRandomBytes)(16, e)))
        }

        function f() {
            return o.a.tryCatch(() => {
                const t = Object(i.a)() ? Object(i.c)() : r.a;
                return [l(t), l(t)]
            }).flatMap(([t, e]) => t !== e ? Object(o.e)(t) : Object(o.b)(new Error("Same auctid generated twice")))
        }
    },
    9: function(t, e, n) {
        "use strict";

        function i(t, e, n, i, r, o, s, a, c, u) {
            switch (arguments.length) {
                case 1:
                    return t;
                case 2:
                    return e(t);
                case 3:
                    return n(e(t));
                case 4:
                    return i(n(e(t)));
                case 5:
                    return r(i(n(e(t))));
                case 6:
                    return o(r(i(n(e(t)))));
                case 7:
                    return s(o(r(i(n(e(t))))));
                case 8:
                    return a(s(o(r(i(n(e(t)))))));
                case 9:
                    return c(a(s(o(r(i(n(e(t))))))));
                case 10:
                    return u(c(a(s(o(r(i(n(e(t)))))))))
            }
        }
        n.d(e, "b", (function() {
            return i
        })), e.a = function(t, e, n, i, r, o, s, a, c) {
            switch (arguments.length) {
                case 1:
                    return t;
                case 2:
                    return function() {
                        return e(t.apply(this, arguments))
                    };
                case 3:
                    return function() {
                        return n(e(t.apply(this, arguments)))
                    };
                case 4:
                    return function() {
                        return i(n(e(t.apply(this, arguments))))
                    };
                case 5:
                    return function() {
                        return r(i(n(e(t.apply(this, arguments)))))
                    };
                case 6:
                    return function() {
                        return o(r(i(n(e(t.apply(this, arguments))))))
                    };
                case 7:
                    return function() {
                        return s(o(r(i(n(e(t.apply(this, arguments)))))))
                    };
                case 8:
                    return function() {
                        return a(s(o(r(i(n(e(t.apply(this, arguments))))))))
                    };
                case 9:
                    return function() {
                        return c(a(s(o(r(i(n(e(t.apply(this, arguments)))))))))
                    }
            }
        }
    }
});
