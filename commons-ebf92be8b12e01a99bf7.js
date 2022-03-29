/*! For license information please see commons-ebf92be8b12e01a99bf7.js.LICENSE.txt */
(self.webpackChunknftkey_site = self.webpackChunknftkey_site || []).push([
    [9351], { 88709: function(t, e, n) { "use strict";
            n.d(e, { v: function() { return u } }); var r = n(4942),
                o = n(93456);

            function i(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n } var a = !1,
                u = function(t) { if (!a) { a = !0; var e = o.ShaderChunk.shadowmap_pars_fragment;
                        e = e.replace("#ifdef USE_SHADOWMAP", "#ifdef USE_SHADOWMAP\n" + function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                e = t.frustum,
                                n = void 0 === e ? 3.75 : e,
                                r = t.size,
                                o = void 0 === r ? .005 : r,
                                i = t.near,
                                a = void 0 === i ? 9.5 : i,
                                u = t.samples,
                                s = void 0 === u ? 17 : u,
                                c = t.rings,
                                l = void 0 === c ? 11 : c; return "#define LIGHT_WORLD_SIZE ".concat(o, "\n#define LIGHT_FRUSTUM_WIDTH ").concat(n, "\n#define LIGHT_SIZE_UV (LIGHT_WORLD_SIZE / LIGHT_FRUSTUM_WIDTH)\n#define NEAR_PLANE ").concat(a, "\n\n#define NUM_SAMPLES ").concat(s, "\n#define NUM_RINGS ").concat(l, "\n#define BLOCKER_SEARCH_NUM_SAMPLES NUM_SAMPLES\n#define PCF_NUM_SAMPLES NUM_SAMPLES\n\nvec2 poissonDisk[NUM_SAMPLES];\n\nvoid initPoissonSamples(const in vec2 randomSeed) {\n  float ANGLE_STEP = PI2 * float(NUM_RINGS) / float(NUM_SAMPLES);\n  float INV_NUM_SAMPLES = 1.0 / float(NUM_SAMPLES);\n  float angle = rand(randomSeed) * PI2;\n  float radius = INV_NUM_SAMPLES;\n  float radiusStep = radius;\n  for (int i = 0; i < NUM_SAMPLES; i++) {\n    poissonDisk[i] = vec2(cos(angle), sin(angle)) * pow(radius, 0.75);\n    radius += radiusStep;\n    angle += ANGLE_STEP;\n  }\n}\n\nfloat penumbraSize(const in float zReceiver, const in float zBlocker) { // Parallel plane estimation\n  return (zReceiver - zBlocker) / zBlocker;\n}\n\nfloat findBlocker(sampler2D shadowMap, const in vec2 uv, const in float zReceiver) {\n  float searchRadius = LIGHT_SIZE_UV * (zReceiver - NEAR_PLANE) / zReceiver;\n  float blockerDepthSum = 0.0;\n  int numBlockers = 0;\n  for (int i = 0; i < BLOCKER_SEARCH_NUM_SAMPLES; i++) {\n    float shadowMapDepth = unpackRGBAToDepth(texture2D(shadowMap, uv + poissonDisk[i] * searchRadius));\n    if (shadowMapDepth < zReceiver) {\n      blockerDepthSum += shadowMapDepth;\n      numBlockers++;\n    }\n  }\n  if (numBlockers == 0) return -1.0;\n  return blockerDepthSum / float(numBlockers);\n}\n\nfloat PCF_Filter(sampler2D shadowMap, vec2 uv, float zReceiver, float filterRadius) {\n  float sum = 0.0;\n  for (int i = 0; i < PCF_NUM_SAMPLES; i++) {\n    float depth = unpackRGBAToDepth(texture2D(shadowMap, uv + poissonDisk[ i ] * filterRadius));\n    if (zReceiver <= depth) sum += 1.0;\n  }\n  for (int i = 0; i < PCF_NUM_SAMPLES; i++) {\n    float depth = unpackRGBAToDepth(texture2D(shadowMap, uv + -poissonDisk[ i ].yx * filterRadius));\n    if (zReceiver <= depth) sum += 1.0;\n  }\n  return sum / (2.0 * float(PCF_NUM_SAMPLES));\n}\n\nfloat PCSS(sampler2D shadowMap, vec4 coords) {\n  vec2 uv = coords.xy;\n  float zReceiver = coords.z; // Assumed to be eye-space z in this code\n  initPoissonSamples(uv);\n  float avgBlockerDepth = findBlocker(shadowMap, uv, zReceiver);\n  if (avgBlockerDepth == -1.0) return 1.0;\n  float penumbraRatio = penumbraSize(zReceiver, avgBlockerDepth);\n  float filterRadius = penumbraRatio * LIGHT_SIZE_UV * NEAR_PLANE / zReceiver;\n  return PCF_Filter(shadowMap, uv, zReceiver, filterRadius);\n}") }(function(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? i(Object(n), !0).forEach((function(e) {
                                    (0, r.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }({}, t))), e = e.replace("#if defined( SHADOWMAP_TYPE_PCF )", "\nreturn PCSS(shadowMap, shadowCoord);\n#if defined( SHADOWMAP_TYPE_PCF )"), o.ShaderChunk.shadowmap_pars_fragment = e } } }, 41593: function(t, e, n) { "use strict";
            n.d(e, { Xz: function() { return Ot }, xQ: function() { return At }, U2: function() { return Pt }, Ky: function() { return Ct } }); var r = n(15671),
                o = n(43144),
                i = n(60136),
                a = n(6215),
                u = n(61120),
                s = n(92826),
                c = n(83878),
                l = n(59199),
                f = n(40181),
                h = n(25267); var p = n(29439),
                d = n(45987),
                v = n(93433),
                m = n(4942),
                g = (n(84944), n(33792), n(93456)),
                y = n(67294);

            function b(t) { var e, n = new Set,
                    r = function(t, r) { var o = "function" == typeof t ? t(e) : t; if (o !== e) { var i = e;
                            e = r ? o : Object.assign({}, e, o), n.forEach((function(t) { return t(e, i) })) } },
                    o = function() { return e },
                    i = { setState: r, getState: o, subscribe: function(t, r, i) { return r || i ? function(t) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
                                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
                                console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware"); var a = r(e);

                                function u() { var n = r(e); if (!i(a, n)) { var o = a;
                                        t(a = n, o) } } return n.add(u),
                                    function() { return n.delete(u) } }(t, r, i) : (n.add(t), function() { return n.delete(t) }) }, destroy: function() { return n.clear() } }; return e = t(r, o, i), i } var _ = "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent) ? y.useEffect : y.useLayoutEffect;

            function w(t) { var e = "function" == typeof t ? b(t) : t,
                    n = function() { var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.getState,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
                            o = (0, y.useReducer)((function(t) { return t + 1 }), 0),
                            i = (0, p.Z)(o, 2),
                            a = i[1],
                            u = e.getState(),
                            s = (0, y.useRef)(u),
                            c = (0, y.useRef)(n),
                            l = (0, y.useRef)(r),
                            f = (0, y.useRef)(!1),
                            h = (0, y.useRef)();
                        void 0 === h.current && (h.current = n(u)); var d = !1;
                        (s.current !== u || c.current !== n || l.current !== r || f.current) && (t = n(u), d = !r(h.current, t)), _((function() { d && (h.current = t), s.current = u, c.current = n, l.current = r, f.current = !1 })); var v = (0, y.useRef)(u);
                        _((function() { var t = function() { try { var t = e.getState(),
                                            n = c.current(t);
                                        l.current(h.current, n) || (s.current = t, h.current = n, a()) } catch (r) { f.current = !0, a() } },
                                n = e.subscribe(t); return e.getState() !== v.current && t(), n }), []); var m = d ? t : h.current; return (0, y.useDebugValue)(m), m }; return Object.assign(n, e), n[Symbol.iterator] = function() { console.warn("[useStore, api] = create() is deprecated and will be removed in v4"); var t = [n, e]; return { next: function() { var e = t.length <= 0; return { value: t.shift(), done: e } } } }, n } var k = n(29305),
                x = n.n(k),
                O = n(63840),
                S = n(2412),
                C = n.n(S);

            function A(t, e) { var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (!n) { if (Array.isArray(t) || (n = function(t, e) { if (!t) return; if ("string" == typeof t) return T(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return T(t, e) }(t)) || e && t && "number" == typeof t.length) { n && (t = n); var r = 0,
                            o = function() {}; return { s: o, n: function() { return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] } }, e: function(t) { throw t }, f: o } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var i, a = !0,
                    u = !1; return { s: function() { n = n.call(t) }, n: function() { var t = n.next(); return a = t.done, t }, e: function(t) { u = !0, i = t }, f: function() { try { a || null == n.return || n.return() } finally { if (u) throw i } } } }

            function T(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r } var E = [];

            function P(t, e, n) { var r, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    a = A(e); try { for (a.s(); !(r = a.n()).done;) { var u = r.value; if (C()(n, u.args)) { if (i) return; if (u.error) throw u.error; if (u.response) return u.response; throw u.promise } } } catch (c) { a.e(c) } finally { a.f() } var s = { args: n, promise: t.apply(void 0, (0, v.Z)(n)).then((function(t) { return s.response = null == t || t })).catch((function(t) { return s.error = null != t ? t : "unknown error" })).then((function() { o > 0 && setTimeout((function() { var t = e.indexOf(s); - 1 !== t && e.splice(t, 1) }), o) })) }; if (e.push(s), !i) throw s.promise }

            function Z(t) { for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r]; if (void 0 === n || 0 === n.length) t.splice(0, t.length);
                else { var o = t.find((function(t) { return C()(n, t.args) })); if (o) { var i = t.indexOf(o); - 1 !== i && t.splice(i, 1) } } }

            function R(t) { for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r]; return P(t, E, n, R.lifespan) }
            R.lifespan = 0, R.clear = function() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; return Z.apply(void 0, [E].concat(e)) }, R.preload = function(t) { for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                P(t, E, n, R.lifespan, !0) }, R.peek = function() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; var r; return null == (r = E.find((function(t) { return C()(e, t.args) }))) ? void 0 : r.response }; var D = function(t) { return function(e) { t.forEach((function(t) { "function" == typeof t ? t(e) : null != t && (t.current = e) })) } },
                j = n(62881),
                M = n.n(j);

            function I(t) { var e = void 0 === t ? { debounce: 0, scroll: !1, offsetSize: !1 } : t,
                    n = e.debounce,
                    i = e.scroll,
                    a = e.polyfill,
                    u = e.offsetSize,
                    s = a || ("undefined" == typeof window ? (0, o.Z)((function t() {
                        (0, r.Z)(this, t) })) : window.ResizeObserver); if (!s) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills"); var c = (0, y.useState)({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }),
                    l = (0, p.Z)(c, 2),
                    f = l[0],
                    h = l[1],
                    d = (0, y.useRef)({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: f }),
                    v = n ? "number" == typeof n ? n : n.scroll : null,
                    m = n ? "number" == typeof n ? n : n.resize : null,
                    g = (0, y.useRef)(!1);
                (0, y.useEffect)((function() { return g.current = !0,
                        function() { g.current = !1 } })); var b = (0, y.useMemo)((function() { var t = function() { if (d.current.element) { var t = d.current.element.getBoundingClientRect(),
                                    e = { left: t.left, top: t.top, width: t.width, height: t.height, bottom: t.bottom, right: t.right, x: t.x, y: t.y };
                                d.current.element instanceof HTMLElement && u && (e.height = d.current.element.offsetHeight, e.width = d.current.element.offsetWidth), Object.freeze(e), g.current && !F(d.current.lastBounds, e) && h(d.current.lastBounds = e) } }; return [t, m ? M()(t, m) : t, v ? M()(t, v) : t] }), [h, u, v, m]),
                    _ = (0, p.Z)(b, 3),
                    w = _[0],
                    k = _[1],
                    x = _[2];

                function O() { d.current.scrollContainers && (d.current.scrollContainers.forEach((function(t) { return t.removeEventListener("scroll", x, !0) })), d.current.scrollContainers = null), d.current.resizeObserver && (d.current.resizeObserver.disconnect(), d.current.resizeObserver = null) }

                function S() { d.current.element && (d.current.resizeObserver = new s(x), d.current.resizeObserver.observe(d.current.element), i && d.current.scrollContainers && d.current.scrollContainers.forEach((function(t) { return t.addEventListener("scroll", x, { capture: !0, passive: !0 }) }))) } var C, A, T; return C = x, A = Boolean(i), (0, y.useEffect)((function() { if (A) { var t = C; return window.addEventListener("scroll", t, { capture: !0, passive: !0 }),
                            function() { window.removeEventListener("scroll", t, !0) } } }), [C, A]), T = k, (0, y.useEffect)((function() { var t = T; return window.addEventListener("resize", t),
                        function() { window.removeEventListener("resize", t) } }), [T]), (0, y.useEffect)((function() { O(), S() }), [i, x, k]), (0, y.useEffect)((function() { return O }), []), [function(t) { t && t !== d.current.element && (O(), d.current.element = t, d.current.scrollContainers = N(t), S()) }, f, w] }

            function N(t) { var e = []; if (!t || t === document.body) return e; var n = window.getComputedStyle(t); return [n.overflow, n.overflowX, n.overflowY].some((function(t) { return "auto" === t || "scroll" === t })) && e.push(t), [].concat(e, (0, v.Z)(N(t.parentElement))) } var B = ["x", "y", "top", "bottom", "left", "right", "width", "height"],
                F = function(t, e) { return B.every((function(n) { return t[n] === e[n] })) },
                L = ["children", "key", "ref"],
                V = ["children", "key", "ref"],
                z = ["args"],
                U = ["args", "children"],
                q = ["args", "children"],
                W = ["params"],
                G = ["children", "fallback", "tabIndex", "resize", "id", "style", "className", "events"],
                H = ["gl", "size", "mode", "events", "onCreated"];

            function Y(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, u.Z)(t); if (e) { var o = (0, u.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, a.Z)(this, n) } }

            function X(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function Q(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? X(Object(n), !0).forEach((function(e) {
                        (0, m.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : X(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function $(t, e) { var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (!n) { if (Array.isArray(t) || (n = function(t, e) { if (!t) return; if ("string" == typeof t) return J(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return J(t, e) }(t)) || e && t && "number" == typeof t.length) { n && (t = n); var r = 0,
                            o = function() {}; return { s: o, n: function() { return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] } }, e: function(t) { throw t }, f: o } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var i, a = !0,
                    u = !1; return { s: function() { n = n.call(t) }, n: function() { var t = n.next(); return a = t.done, t }, e: function(t) { u = !0, i = t }, f: function() { try { a || null == n.return || n.return() } finally { if (u) throw i } } } }

            function J(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r } var K = { obj: function(t) { return t === Object(t) && !K.arr(t) && "function" != typeof t }, fun: function(t) { return "function" == typeof t }, str: function(t) { return "string" == typeof t }, num: function(t) { return "number" == typeof t }, und: function(t) { return void 0 === t }, arr: function(t) { return Array.isArray(t) }, equ: function(t, e) { if (typeof t != typeof e || !!t != !!e) return !1; if (K.str(t) || K.num(t) || K.obj(t)) return t === e; if (K.arr(t) && t == e) return !0; var n; for (n in t)
                        if (!(n in e)) return !1;
                    for (n in e)
                        if (t[n] !== e[n]) return !1;
                    return !K.und(n) || t === e } };

            function tt(t) { return (t.eventObject || t.object).uuid + "/" + t.index + t.instanceId }

            function et(t, e, n, r) { var o = n.get(e);
                o && (n.delete(e), 0 === n.size && (t.delete(r), o.target.releasePointerCapture(r))) }

            function nt(t) { var e = new g.Vector3;

                function n(t) { return t.filter((function(t) { return ["Move", "Over", "Enter", "Out", "Leave"].some((function(e) { var n; return null == (n = t.__r3f) ? void 0 : n.handlers["onPointer" + e] })) })) }

                function r(e) { var n = t.getState().internal;
                    Array.from(n.hovered.values()).forEach((function(t) { if (!e.length || !e.find((function(e) { return e.object === t.object && e.index === t.index && e.instanceId === t.instanceId }))) { var r = t.eventObject.__r3f,
                                o = null == r ? void 0 : r.handlers; if (n.hovered.delete(tt(t)), null != r && r.eventCount) { var i = Q(Q({}, t), {}, { intersections: e || [] });
                                null == o.onPointerOut || o.onPointerOut(i), null == o.onPointerLeave || o.onPointerLeave(i) } } })) }

                function o(t, e) { e.forEach((function(e) { var n; return null == (n = e.__r3f) || null == n.handlers.onPointerMissed ? void 0 : n.handlers.onPointerMissed(t) })) } return { handlePointer: function(i) { switch (i) {
                            case "onPointerLeave":
                            case "onPointerCancel":
                                return function() { return r([]) };
                            case "onLostPointerCapture":
                                return function(e) { var n = t.getState().internal; "pointerId" in e && !n.capturedMap.has(e.pointerId) && (n.capturedMap.delete(e.pointerId), r([])) } } return function(a) { var u = t.getState(),
                                s = u.onPointerMissed,
                                c = u.internal;! function(e) { var n, r, o, i, a = t.getState(),
                                    u = a.raycaster,
                                    s = a.mouse,
                                    c = a.camera,
                                    l = a.size,
                                    f = null == u.computeOffsets ? void 0 : u.computeOffsets(e, a),
                                    h = null != (n = null == f ? void 0 : f.offsetX) ? n : e.offsetX,
                                    p = null != (r = null == f ? void 0 : f.offsetY) ? r : e.offsetY,
                                    d = null != (o = null == f ? void 0 : f.width) ? o : l.width,
                                    v = null != (i = null == f ? void 0 : f.height) ? i : l.height;
                                s.set(h / d * 2 - 1, -p / v * 2 + 1), u.setFromCamera(s, c) }(a), c.lastEvent.current = a; var l = "onPointerMove" === i,
                                f = "onClick" === i || "onContextMenu" === i || "onDoubleClick" === i,
                                h = function(e, n) { var r = t.getState().internal; if ("pointerId" in n && r.capturedMap.has(n.pointerId)) { var o, i = $(r.capturedMap.get(n.pointerId).values()); try { for (i.s(); !(o = i.n()).done;) { var a = o.value;
                                                e.push(a.intersection) } } catch (u) { i.e(u) } finally { i.f() } } return e }(function(e) { var n = t.getState(),
                                        r = n.raycaster,
                                        o = n.internal; if (!r.enabled) return []; var i = new Set,
                                        a = [],
                                        u = e ? e(o.interaction) : o.interaction,
                                        s = r.intersectObjects(u, !0).filter((function(t) { var e = tt(t); return !i.has(e) && (i.add(e), !0) }));
                                    r.filter && (s = r.filter(s, n)); var c, l = $(s); try { for (l.s(); !(c = l.n()).done;)
                                            for (var f = c.value, h = f.object; h;) { var p;
                                                null != (p = h.__r3f) && p.eventCount && a.push(Q(Q({}, f), {}, { eventObject: h })), h = h.parent } } catch (d) { l.e(d) } finally { l.f() } return a }(l ? n : void 0), a),
                                p = f ? function(e) { var n = t.getState().internal,
                                        r = e.offsetX - n.initialClick[0],
                                        o = e.offsetY - n.initialClick[1]; return Math.round(Math.sqrt(r * r + o * o)) }(a) : 0; "onPointerDown" === i && (c.initialClick = [a.offsetX, a.offsetY], c.initialHits = h.map((function(t) { return t.eventObject }))), f && !h.length && p <= 2 && (o(a, c.interaction), s && s(a)), l && r(h),
                                function(n, o, i, a) { var u = t.getState(),
                                        s = u.raycaster,
                                        c = u.mouse,
                                        l = u.camera,
                                        f = u.internal;
                                    n.length && function() { var t, u = e.set(c.x, c.y, 0).unproject(l),
                                            h = { stopped: !1 },
                                            p = $(n); try { var d = function() { var e = t.value,
                                                    p = function(t) { var n, r; return null != (n = null == (r = f.capturedMap.get(t)) ? void 0 : r.has(e.eventObject)) && n },
                                                    d = function(t) { var n = { intersection: e, target: o.target };
                                                        f.capturedMap.has(t) ? f.capturedMap.get(t).set(e.eventObject, n) : f.capturedMap.set(t, new Map([
                                                            [e.eventObject, n]
                                                        ])), o.target.setPointerCapture(t) },
                                                    m = function(t) { var n = f.capturedMap.get(t);
                                                        n && et(f.capturedMap, e.eventObject, n, t) },
                                                    g = {}; for (var y in o) { var b = o[y]; "function" != typeof b && (g[y] = b) } var _ = Q(Q(Q({}, e), g), {}, { spaceX: c.x, spaceY: c.y, intersections: n, stopped: h.stopped, delta: i, unprojectedPoint: u, ray: s.ray, camera: l, stopPropagation: function() { var t = "pointerId" in o && f.capturedMap.get(o.pointerId); if ((!t || t.has(e.eventObject)) && (_.stopped = h.stopped = !0, f.hovered.size && Array.from(f.hovered.values()).find((function(t) { return t.eventObject === e.eventObject })))) { var i = n.slice(0, n.indexOf(e));
                                                            r([].concat((0, v.Z)(i), [e])) } }, target: { hasPointerCapture: p, setPointerCapture: d, releasePointerCapture: m }, currentTarget: { hasPointerCapture: p, setPointerCapture: d, releasePointerCapture: m }, sourceEvent: o, nativeEvent: o }); if (a(_), !0 === h.stopped) return "break" }; for (p.s(); !(t = p.n()).done && "break" !== d();); } catch (m) { p.e(m) } finally { p.f() } }() }(h, a, p, (function(t) { var e = t.eventObject,
                                        n = e.__r3f,
                                        r = null == n ? void 0 : n.handlers; if (null != n && n.eventCount)
                                        if (l) { if (r.onPointerOver || r.onPointerEnter || r.onPointerOut || r.onPointerLeave) { var u = tt(t),
                                                    s = c.hovered.get(u);
                                                s ? s.stopped && t.stopPropagation() : (c.hovered.set(u, t), null == r.onPointerOver || r.onPointerOver(t), null == r.onPointerEnter || r.onPointerEnter(t)) }
                                            null == r.onPointerMove || r.onPointerMove(t) } else { var h = r[i];
                                            h ? f && !c.initialHits.includes(e) || (o(a, c.interaction.filter((function(t) { return !c.initialHits.includes(t) }))), h(t)) : f && c.initialHits.includes(e) && o(a, c.interaction.filter((function(t) { return !c.initialHits.includes(t) }))) } })) } } } } var rt = function(t) { return t && !!t.getState },
                ot = function(t, e) { var n, r; return { root: rt(t) ? t : null != (n = null == (r = t.__r3f) ? void 0 : r.root) ? n : e.__r3f.root, container: rt(t) ? t.getState().scene : t } },
                it = "__default",
                at = {},
                ut = {};

            function st(t, e) { return !(!K.arr(t) || !K.equ(t, e)) || t === e }

            function ct(t, e) { var n = t; return (null != e && e.primitive || !n.__r3f) && (n.__r3f = Q({ root: null, memoizedProps: {}, eventCount: 0, handlers: {}, objects: [], parent: null }, e)), t } var lt = function(t) { return t && t.isOrthographicCamera };

            function ft(t) { return Array.isArray(t) ? Math.min(Math.max(t[0], window.devicePixelRatio), t[1]) : t } var ht, pt = y.createContext(null),
                dt = function(t, e, n, r) { var o = r.gl,
                        i = r.size,
                        a = r.shadows,
                        u = void 0 !== a && a,
                        s = r.linear,
                        c = void 0 !== s && s,
                        l = r.flat,
                        f = void 0 !== l && l,
                        h = r.vr,
                        p = void 0 !== h && h,
                        m = r.orthographic,
                        b = void 0 !== m && m,
                        _ = r.frameloop,
                        k = void 0 === _ ? "always" : _,
                        x = r.dpr,
                        O = void 0 === x ? 1 : x,
                        S = r.performance,
                        C = r.clock,
                        A = void 0 === C ? new g.Clock : C,
                        T = r.raycaster,
                        E = r.camera,
                        P = r.onPointerMissed;
                    u && (o.shadowMap.enabled = !0, "object" == typeof u ? Object.assign(o.shadowMap, u) : o.shadowMap.type = g.PCFSoftShadowMap), c && (o.outputEncoding = g.LinearEncoding), f && (o.toneMapping = g.NoToneMapping), "never" === k && (A.stop(), A.elapsedTime = 0); var Z = w((function(i, a) { var u = new g.Raycaster,
                                s = T || {},
                                l = s.params,
                                h = (0, d.Z)(s, W);
                            t(u, Q(Q({ enabled: !0 }, h), {}, { params: Q(Q({}, u.params), l) })); var m = E instanceof g.Camera,
                                _ = m ? E : b ? new g.OrthographicCamera(0, 0, 0, 0, .1, 1e3) : new g.PerspectiveCamera(75, 0, .1, 1e3);
                            m || (_.position.z = 5, E && t(_, E), null != E && E.rotation || _.lookAt(0, 0, 0)); var w = ft(O),
                                x = new g.Vector3,
                                C = new g.Vector3,
                                Z = new g.Vector3;

                            function R() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a().camera,
                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C,
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a().size,
                                    r = n.width,
                                    o = n.height,
                                    i = r / o;
                                e instanceof g.Vector3 ? Z.copy(e) : Z.set.apply(Z, (0, v.Z)(e)); var u = t.getWorldPosition(x).distanceTo(Z); if (lt(t)) return { width: r / t.zoom, height: o / t.zoom, factor: 1, distance: u, aspect: i }; var s = t.fov * Math.PI / 180,
                                    c = 2 * Math.tan(s / 2) * u,
                                    l = c * (r / o); return { width: l, height: c, factor: r / l, distance: u, aspect: i } } var D = void 0,
                                j = function(t) { return i((function(e) { return { performance: Q(Q({}, e.performance), {}, { current: t }) } })) }; return { gl: o, set: i, get: a, invalidate: function() { return e(a()) }, advance: function(t, e) { return n(t, e, a()) }, linear: c, flat: f, scene: ct(new g.Scene), camera: _, controls: null, raycaster: u, clock: A, mouse: new g.Vector2, vr: p, frameloop: k, onPointerMissed: P, performance: Q(Q({ current: 1, min: .5, max: 1, debounce: 200 }, S), {}, { regress: function() { var t = a();
                                        D && clearTimeout(D), t.performance.current !== t.performance.min && j(t.performance.min), D = setTimeout((function() { return j(a().performance.max) }), t.performance.debounce) } }), size: { width: 0, height: 0 }, viewport: { initialDpr: w, dpr: w, width: 0, height: 0, aspect: 0, distance: 0, factor: 0, getCurrentViewport: R }, setSize: function(t, e) { var n = { width: t, height: e };
                                    i((function(t) { return { size: n, viewport: Q(Q({}, t.viewport), R(_, C, n)) } })) }, setDpr: function(t) { return i((function(e) { return { viewport: Q(Q({}, e.viewport), {}, { dpr: ft(t) }) } })) }, setFrameloop: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "always"; return i((function() { return { frameloop: t } })) }, events: { connected: !1 }, internal: { active: !1, priority: 0, frames: 0, lastProps: r, lastEvent: y.createRef(), interaction: [], hovered: new Map, subscribers: [], initialClick: [0, 0], initialHits: [], capturedMap: new Map, subscribe: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; return i((function(n) { var r = n.internal; return { internal: Q(Q({}, r), {}, { priority: r.priority + (e > 0 ? 1 : 0), subscribers: [].concat((0, v.Z)(r.subscribers), [{ ref: t, priority: e }]).sort((function(t, e) { return t.priority - e.priority })) }) } })),
                                            function() { i((function(n) { var r = n.internal; return { internal: Q(Q({}, r), {}, { priority: r.priority - (e > 0 ? 1 : 0), subscribers: r.subscribers.filter((function(e) { return e.ref !== t })) }) } })) } } } } })),
                        R = Z.getState(),
                        D = R.size,
                        j = R.viewport.dpr; return Z.subscribe((function() { var t = Z.getState(),
                            e = t.camera,
                            n = t.size,
                            r = t.viewport,
                            i = t.internal;
                        n === D && r.dpr === j || (e.manual || i.lastProps.camera instanceof g.Camera || (lt(e) ? (e.left = n.width / -2, e.right = n.width / 2, e.top = n.height / 2, e.bottom = n.height / -2) : e.aspect = n.width / n.height, e.updateProjectionMatrix(), e.updateMatrixWorld()), o.setPixelRatio(r.dpr), o.setSize(n.width, n.height), D = n, j = r.dpr) })), i && R.setSize(i.width, i.height), Z.subscribe((function(t) { return e(t) })), Z }; var vt = [],
                mt = [],
                gt = [];

            function yt(t, e) { for (ht = 0; ht < t.length; ht++) t[ht](e) }

            function bt(t, e) { var n = e.clock.getDelta(); for ("never" === e.frameloop && "number" == typeof t && (n = t - e.clock.elapsedTime, e.clock.oldTime = e.clock.elapsedTime, e.clock.elapsedTime = t), ht = 0; ht < e.internal.subscribers.length; ht++) e.internal.subscribers[ht].ref.current(e, n); return !e.internal.priority && e.gl.render && e.gl.render(e.scene, e.camera), e.internal.frames = Math.max(0, e.internal.frames - 1), "always" === e.frameloop ? 1 : e.internal.frames }

            function _t(t) { var e = nt(t).handlePointer,
                    n = { onClick: ["click", !1], onContextMenu: ["contextmenu", !1], onDoubleClick: ["dblclick", !1], onWheel: ["wheel", !0], onPointerDown: ["pointerdown", !0], onPointerUp: ["pointerup", !0], onPointerLeave: ["pointerleave", !0], onPointerMove: ["pointermove", !0], onPointerCancel: ["pointercancel", !0], onLostPointerCapture: ["lostpointercapture", !0] }; return { connected: !1, handlers: Object.keys(n).reduce((function(t, n) { return Q(Q({}, t), {}, (0, m.Z)({}, n, e(n))) }), {}), connect: function(e) { var r, o = t.getState(),
                            i = o.set,
                            a = o.events;
                        null == a.disconnect || a.disconnect(), i((function(t) { return { events: Q(Q({}, t.events), {}, { connected: e }) } })), Object.entries(null != (r = null == a ? void 0 : a.handlers) ? r : []).forEach((function(t) { var r = (0, p.Z)(t, 2),
                                o = r[0],
                                i = r[1],
                                a = (0, p.Z)(n[o], 2),
                                u = a[0],
                                s = a[1];
                            e.addEventListener(u, i, { passive: s }) })) }, disconnect: function() { var e, r = t.getState(),
                            o = r.set,
                            i = r.events;
                        i.connected && (Object.entries(null != (e = i.handlers) ? e : []).forEach((function(t) { var e = (0, p.Z)(t, 2),
                                r = e[0],
                                o = e[1]; if (i && i.connected instanceof HTMLElement) { var a = (0, p.Z)(n[r], 1)[0];
                                i.connected.removeEventListener(a, o) } })), o((function(t) { return { events: Q(Q({}, t.events), {}, { connected: !1 }) } }))) } } } var wt = "undefined" != typeof window ? y.useLayoutEffect : y.useEffect;

            function kt(t) { var e = t.set; return wt((function() { return e(new Promise((function() { return null }))),
                        function() { return e(!1) } }), []), null } var xt = function(t) {
                (0, i.Z)(n, t); var e = Y(n);

                function n() { var t;
                    (0, r.Z)(this, n); for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a]; return (t = e.call.apply(e, [this].concat(i))).state = { error: !1 }, t } return (0, o.Z)(n, [{ key: "componentDidCatch", value: function(t) { this.props.set(t) } }, { key: "render", value: function() { return this.state.error ? null : this.props.children } }]), n }(y.Component);
            xt.getDerivedStateFromError = function() { return { error: !0 } }; var Ot = y.forwardRef((function(t, e) { var n = t.children,
                    r = t.fallback,
                    o = t.tabIndex,
                    i = t.resize,
                    a = t.id,
                    u = t.style,
                    s = t.className,
                    c = t.events,
                    l = (0, d.Z)(t, G),
                    f = I(Q({ scroll: !0, debounce: { scroll: 50, resize: 0 } }, i)),
                    h = (0, p.Z)(f, 2),
                    v = h[0],
                    m = h[1],
                    g = m.width,
                    b = m.height,
                    _ = y.useRef(null),
                    w = y.useState(!1),
                    k = (0, p.Z)(w, 2),
                    x = k[0],
                    O = k[1],
                    S = y.useState(!1),
                    C = (0, p.Z)(S, 2),
                    A = C[0],
                    T = C[1]; if (x) throw x; if (A) throw A; return wt((function() { g > 0 && b > 0 && function(t, e) { var n, r, o, i, a, u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            s = u.gl,
                            c = u.size,
                            l = u.mode,
                            f = void 0 === l ? Rt[1] : l,
                            h = u.events,
                            p = u.onCreated,
                            v = (0, d.Z)(u, H);
                        c || (c = { width: null != (r = null == (o = e.parentElement) ? void 0 : o.clientWidth) ? r : 0, height: null != (i = null == (a = e.parentElement) ? void 0 : a.clientHeight) ? i : 0 }); var m = Zt.get(e),
                            g = null == m ? void 0 : m.fiber,
                            b = null == m ? void 0 : m.store,
                            _ = null == (n = b) ? void 0 : n.getState(); if (g && _) { void 0 === v.dpr || K.equ(_.viewport.dpr, ft(v.dpr)) || _.setDpr(v.dpr), _.size.width === c.width && _.size.height === c.height || _.setSize(c.width, c.height), _.frameloop !== v.frameloop && _.setFrameloop(v.frameloop), v.linear !== _.internal.lastProps.linear && (Vt(e), g = void 0) } if (!g) { var w = Ft(s, e);
                            v.vr && (w.xr.enabled = !0, w.setAnimationLoop((function(t) { return Mt(t, !0) }))); var k = (b = dt(Bt, jt, Mt, Q({ gl: w, size: c }, v))).getState();
                            g = Nt.createContainer(b, Rt.indexOf(f), !1, null), Zt.set(e, { fiber: g, store: b }), h && k.set({ events: h(b) }) } if (b && g) return Nt.updateContainer(y.createElement(Lt, { store: b, element: t, onCreated: p, target: e }), g, null, (function() {})), b; throw "Error creating root!" }(y.createElement(xt, { set: T }, y.createElement(y.Suspense, { fallback: y.createElement(kt, { set: O }) }, n)), _.current, Q(Q({}, l), {}, { size: { width: g, height: b }, events: c || _t })) }), [g, b, n]), wt((function() { var t = _.current; return function() { return Vt(t) } }), []), y.createElement("div", { ref: v, id: a, className: s, tabIndex: o, style: Q({ position: "relative", width: "100%", height: "100%", overflow: "hidden" }, u) }, y.createElement("canvas", { ref: D([_, e]), style: { display: "block" } }, r)) }));

            function St() { var t = y.useContext(pt); if (!t) throw "R3F hooks can only be used within the Canvas component!"; return t }

            function Ct() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function(t) { return t },
                    e = arguments.length > 1 ? arguments[1] : void 0; return St()(t, e) }

            function At(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = St().getState().internal.subscribe,
                    r = y.useRef(t); return y.useLayoutEffect((function() { r.current = t }), [t]), y.useLayoutEffect((function() { return n(r, e) }), [e, n]), null }

            function Tt(t) { var e = { nodes: {}, materials: {} }; return t && t.traverse((function(t) { t.name && (e.nodes[t.name] = t), t.material && !e.materials[t.material.name] && (e.materials[t.material.name] = t.material) })), e }

            function Et(t, e) { return function(n) { var r = new n;
                    t && t(r); for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) i[a - 1] = arguments[a]; return Promise.all(i.map((function(t) { return new Promise((function(n, o) { return r.load(t, (function(t) { t.scene && Object.assign(t, Tt(t.scene)), n(t) }), e, (function(e) { return o("Could not load ".concat(t, ": ").concat(e.message)) })) })) }))) } }

            function Pt(t, e, n, r) { var o = Array.isArray(e) ? e : [e],
                    i = R.apply(void 0, [Et(n, r), t].concat((0, v.Z)(o))); return Array.isArray(e) ? i : i[0] }
            Pt.preload = function(t, e, n) { var r = Array.isArray(e) ? e : [e]; return R.preload.apply(R, [Et(n), t].concat((0, v.Z)(r))) }, Pt.clear = function(t, e) { var n = Array.isArray(e) ? e : [e]; return R.clear.apply(R, [t].concat((0, v.Z)(n))) }; var Zt = new Map,
                Rt = ["legacy", "blocking", "concurrent"],
                Dt = function(t) { var e, n = !1;

                    function r(o) { if (n = !0, e = 0, yt(vt, o), t.forEach((function(t) { var n = t.store.getState();
                                n.internal.active && ("always" === n.frameloop || n.internal.frames > 0) && (e += bt(o, n)) })), yt(mt, o), e > 0) return requestAnimationFrame(r);
                        yt(gt, o), n = !1 } return { loop: r, invalidate: function e(o) { if (!o) return t.forEach((function(t) { return e(t.store.getState()) }));!o.vr && o.internal.active && "never" !== o.frameloop && (o.internal.frames = Math.min(60, o.internal.frames + 1), n || (n = !0, requestAnimationFrame(r))) }, advance: function(e) { var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                r = arguments.length > 2 ? arguments[2] : void 0;
                            n && yt(vt, e), r ? bt(e, r) : t.forEach((function(t) { return bt(e, t.store.getState()) })), n && yt(mt, e) } } }(Zt),
                jt = Dt.invalidate,
                Mt = Dt.advance,
                It = function(t) {
                    function e(t, e) { e.children, e.key, e.ref; var n, r = (0, d.Z)(e, L),
                            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = (o.children, o.key, o.ref, (0, d.Z)(o, V)),
                            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                            u = null != (n = null == t ? void 0 : t.__r3f) ? n : {},
                            s = Object.entries(r),
                            c = []; if (a)
                            for (var l = Object.keys(i), f = 0; f < l.length; f++) r.hasOwnProperty(l[f]) || s.unshift([l[f], it + "remove"]);
                        s.forEach((function(e) { var n, r = (0, p.Z)(e, 2),
                                o = r[0],
                                a = r[1]; if (!(null != (n = t.__r3f) && n.primitive && "object" === o || st(a, i[o]))) { if (/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(o)) return c.push([o, a, !0, []]); var u = [];
                                o.includes("-") && (u = o.split("-")), c.push([o, a, !1, u]) } })); var h = Q({}, r); return u.memoizedProps && u.memoizedProps.args && (h.args = u.memoizedProps.args), u.memoizedProps && u.memoizedProps.attach && (h.attach = u.memoizedProps.attach), { accumulative: a, memoized: h, changes: c } }

                    function n(t, n) { var i, a, u, s, d = null != (i = null == t ? void 0 : t.__r3f) ? i : {},
                            m = d.root,
                            y = null != (a = null == m || null == m.getState ? void 0 : m.getState()) ? a : {},
                            b = (s = n) && s.memoized && s.changes ? n : e(t, n),
                            _ = b.memoized,
                            w = b.changes,
                            k = d.eventCount; if (t.__r3f && (t.__r3f.memoizedProps = _), w.forEach((function(e) { var n, o, i = (0, p.Z)(e, 4),
                                    a = i[0],
                                    u = i[1],
                                    s = i[2],
                                    m = i[3],
                                    b = t,
                                    w = b[a]; if (m.length && (w = m.reduce((function(t, e) { return t[e] }), t), !w || !w.set)) { var k = m.reverse(),
                                        x = (o = k, (0, c.Z)(o) || (0, l.Z)(o) || (0, f.Z)(o) || (0, h.Z)()),
                                        O = x[0];
                                    b = x.slice(1).reverse().reduce((function(t, e) { return t[e] }), t), a = O } if (u === it + "remove")
                                    if (w && w.constructor) u = new w.constructor(_.args);
                                    else if (b.constructor) { var S = new b.constructor(b.__r3f.memoizedProps.args);
                                    u = S[w], S.dispose && S.dispose() } else u = 0; var C = (null == y || null == (n = y.gl) ? void 0 : n.outputEncoding) === g.LinearEncoding; if (s) u ? d.handlers[a] = u : delete d.handlers[a], d.eventCount = Object.keys(d.handlers).length;
                                else if (w && w.set && (w.copy || w instanceof g.Layers)) { var A; if (Array.isArray(u)) w.fromArray ? w.fromArray(u) : (A = w).set.apply(A, (0, v.Z)(u));
                                    else if (w.copy && u && u.constructor && w.constructor.name === u.constructor.name) w.copy(u);
                                    else if (void 0 !== u) { var T = w instanceof g.Color;!T && w.setScalar ? w.setScalar(u) : w instanceof g.Layers && u instanceof g.Layers ? w.mask = u.mask : w.set(u), !C && T && w.convertSRGBToLinear() } } else b[a] = u, !C && b[a] instanceof g.Texture && (b[a].encoding = g.sRGBEncoding);
                                r(t) })), d.parent && y.internal && t.raycast && k !== d.eventCount) { var x = y.internal.interaction.indexOf(t);
                            x > -1 && y.internal.interaction.splice(x, 1), d.eventCount && y.internal.interaction.push(t) } return w.length && null != (u = t.__r3f) && u.parent && o(t), t }

                    function r(t) { var e, n, r = null == (e = t.__r3f) || null == (n = e.root) || null == n.getState ? void 0 : n.getState();
                        r && 0 === r.internal.frames && r.invalidate() }

                    function o(t) { null == t.onUpdate || t.onUpdate(t) }

                    function i(t, e, r, o, i) { var a, u = e.args,
                            c = void 0 === u ? [] : u,
                            l = (0, d.Z)(e, z),
                            f = "".concat(t[0].toUpperCase()).concat(t.slice(1)); if (!rt(r) && i) { r = function t(e) { return e.return ? t(e.return) : e.stateNode && e.stateNode.containerInfo }(i) } if (!r || !rt(r)) throw "No valid root for ".concat(f, "!"); if ("primitive" === t) { if (void 0 === l.object) throw "Primitives without 'object' are invalid!";
                            a = ct(l.object, { root: r, primitive: !0 }) } else { var h = ut[f] || g[f]; if (!h) throw "".concat(f, " is not part of the THREE namespace! Did you forget to extend? See: https://github.com/pmndrs/react-three-fiber/blob/master/markdown/api.md#using-3rd-party-objects-declaratively"); if (!Array.isArray(c)) throw "The args prop must be an array!";
                            a = ct((0, s.Z)(h, (0, v.Z)(c)), { root: r, memoizedProps: { args: 0 === c.length ? null : c } }) } return "attachFns" in l || (f.endsWith("Geometry") ? l = Q({ attach: "geometry" }, l) : f.endsWith("Material") && (l = Q({ attach: "material" }, l))), n(a, l), a }

                    function a(t, e) { var n = !1; if (e) { if (e.attachArray) K.arr(t[e.attachArray]) || (t[e.attachArray] = []), t[e.attachArray].push(e);
                            else if (e.attachObject) K.obj(t[e.attachObject[0]]) || (t[e.attachObject[0]] = {}), t[e.attachObject[0]][e.attachObject[1]] = e;
                            else if (e.attach && !K.fun(e.attach)) t[e.attach] = e;
                            else if (K.arr(e.attachFns)) { var i = (0, p.Z)(e.attachFns, 1)[0];
                                K.str(i) && K.fun(t[i]) ? t[i](e) : K.fun(i) && i(e, t) } else e.isObject3D && t.isObject3D && (t.add(e), n = !0);
                            n || t.__r3f.objects.push(e), e.__r3f || ct(e, {}), e.__r3f.parent = t, o(e), r(e) } }

                    function u(t, e, n) { var i = !1; if (e) { if (e.attachArray) { var u = t[e.attachArray];
                                K.arr(u) || (t[e.attachArray] = []), u.splice(u.indexOf(n), 0, e) } else { if (e.attachObject || e.attach && !K.fun(e.attach)) return a(t, e); if (e.isObject3D && t.isObject3D) { e.parent = t, e.dispatchEvent({ type: "added" }); var s = t.children.filter((function(t) { return t !== e })),
                                        c = s.indexOf(n);
                                    t.children = [].concat((0, v.Z)(s.slice(0, c)), [e], (0, v.Z)(s.slice(c))), i = !0 } }
                            i || t.__r3f.objects.push(e), e.__r3f || ct(e, {}), e.__r3f.parent = t, o(e), r(e) } }

                    function m(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        t && (0, v.Z)(t).forEach((function(t) { return y(e, t, n) })) }

                    function y(t, e, n) { if (e) { var o, i; if (e.__r3f && (e.__r3f.parent = null), null != (o = t.__r3f) && o.objects && (t.__r3f.objects = t.__r3f.objects.filter((function(t) { return t !== e }))), e.attachArray) t[e.attachArray] = t[e.attachArray].filter((function(t) { return t !== e }));
                            else if (e.attachObject) delete t[e.attachObject[0]][e.attachObject[1]];
                            else if (e.attach && !K.fun(e.attach) && t[e.attach] === e) t[e.attach] = null;
                            else if (K.arr(e.attachFns)) { var a = (0, p.Z)(e.attachFns, 2)[1];
                                K.str(a) && K.fun(t[a]) ? t[a](e) : K.fun(a) && a(e, t) } else if (e.isObject3D && t.isObject3D) { var u;
                                t.remove(e), null != (u = e.__r3f) && u.root && (f = e.__r3f.root, h = e, (d = f.getState().internal).interaction = d.interaction.filter((function(t) { return t !== h })), d.initialHits = d.initialHits.filter((function(t) { return t !== h })), d.hovered.forEach((function(t, e) { t.eventObject !== h && t.object !== h || d.hovered.delete(e) })), d.capturedMap.forEach((function(t, e) { et(d.capturedMap, h, t, e) }))) } var s, c = null == (i = e.__r3f) ? void 0 : i.primitive,
                                l = void 0 === n ? null !== e.dispose && !c : n; if (!c) m(null == (s = e.__r3f) ? void 0 : s.objects, e, l), m(e.children, e, l);
                            e.__r3f && (delete e.__r3f.root, delete e.__r3f.objects, delete e.__r3f.handlers, delete e.__r3f.memoizedProps, c || delete e.__r3f), l && e.dispose && "Scene" !== e.type && (0, O.unstable_runWithPriority)(O.unstable_IdlePriority, (function() { try { e.dispose() } catch (t) {} })), r(t) } var f, h, d } return { reconciler: x()({ now: O.unstable_now, createInstance: i, removeChild: y, appendChild: a, appendInitialChild: a, insertBefore: u, warnsIfNotActing: !0, supportsMutation: !0, isPrimaryRenderer: !1, scheduleTimeout: K.fun(setTimeout) ? setTimeout : void 0, cancelTimeout: K.fun(clearTimeout) ? clearTimeout : void 0, setTimeout: K.fun(setTimeout) ? setTimeout : void 0, clearTimeout: K.fun(clearTimeout) ? clearTimeout : void 0, noTimeout: -1, appendChildToContainer: function(t, e) { var n = ot(t, e),
                                    r = n.container,
                                    o = n.root;
                                r.__r3f.root = o, a(r, e) }, removeChildFromContainer: function(t, e) { return y(ot(t, e).container, e) }, insertInContainerBefore: function(t, e, n) { return u(ot(t, e).container, e, n) }, prepareUpdate: function(t, n, r, o) { if (t.__r3f.primitive && o.object && o.object !== t) return [!0]; var i = o.args,
                                    u = void 0 === i ? [] : i,
                                    s = (o.children, (0, d.Z)(o, U)),
                                    c = r.args,
                                    l = void 0 === c ? [] : c,
                                    f = (r.children, (0, d.Z)(r, q)); if (!Array.isArray(u)) throw "The args prop must be an array!"; if (u.some((function(t, e) { return t !== l[e] }))) return [!0]; var h = e(t, s, f, !0); if (h.changes.length) return [!1, h]; if (t.attach && "function" != typeof t.attach) { var p = t.__r3f.parent;
                                    p && p[t.attach] !== t && a(p, t) } return null }, commitUpdate: function(t, e, r, o, u, s) { var c = (0, p.Z)(e, 2),
                                    l = c[0],
                                    f = c[1];
                                l ? function(t, e, n, r) { var o, u = null == (o = t.__r3f) ? void 0 : o.parent; if (u) { var s = i(e, n, t.__r3f.root); "primitive" !== e && t.children && (t.children.forEach((function(t) { return a(s, t) })), t.children = []), t.__r3f.objects.forEach((function(t) { return a(s, t) })), t.__r3f.objects = [], y(u, t), a(u, s), s.raycast && s.__r3f.eventCount && s.__r3f.root.getState().internal.interaction.push(s), [r, r.alternate].forEach((function(t) { null !== t && (t.stateNode = s, t.ref && ("function" == typeof t.ref ? t.ref(s) : t.ref.current = s)) })) } }(t, r, u, s) : n(t, f) }, hideInstance: function(t) { t.isObject3D && (t.visible = !1, r(t)) }, unhideInstance: function(t, e) {
                                (t.isObject3D && null == e.visible || e.visible) && (t.visible = !0, r(t)) }, hideTextInstance: function() { throw new Error("Text is not allowed in the R3F tree.") }, getPublicInstance: function(t) { return t }, getRootHostContext: function(t) { return at }, getChildHostContext: function(t) { return t }, createTextInstance: function() {}, finalizeInitialChildren: function(t) { var e; return !!(null != (e = null == t ? void 0 : t.__r3f) ? e : {}).handlers }, commitMount: function(t) { var e, n = null != (e = null == t ? void 0 : t.__r3f) ? e : {};
                                t.raycast && n.handlers && n.eventCount && t.__r3f.root.getState().internal.interaction.push(t) }, shouldDeprioritizeSubtree: function() { return !1 }, prepareForCommit: function() { return null }, preparePortalMount: function(t) { ct(t) }, resetAfterCommit: function() {}, shouldSetTextContent: function() { return !1 }, clearContainer: function() { return !1 } }), applyProps: n } }(),
                Nt = It.reconciler,
                Bt = It.applyProps,
                Ft = function(t, e) { var n, r = "function" == typeof t ? t(e) : t; if (null != (n = r) && n.render) return r; var o = new g.WebGLRenderer(Q({ powerPreference: "high-performance", canvas: e, antialias: !0, alpha: !0 }, t)); return o.outputEncoding = g.sRGBEncoding, o.toneMapping = g.ACESFilmicToneMapping, t && Bt(o, t), o };

            function Lt(t) { var e = t.store,
                    n = t.element,
                    r = t.onCreated,
                    o = t.target; return y.useEffect((function() { var t = e.getState();
                    t.set((function(t) { return { internal: Q(Q({}, t.internal), {}, { active: !0 }) } })), null == t.events.connect || t.events.connect(o), r && r(t) }), []), y.createElement(pt.Provider, { value: e }, n) }

            function Vt(t, e) { var n = Zt.get(t),
                    r = null == n ? void 0 : n.fiber; if (r) { var o = null == n ? void 0 : n.store.getState();
                    o && (o.internal.active = !1), Nt.updateContainer(null, r, null, (function() { o && setTimeout((function() { var n, r, i;
                            null == o.events.disconnect || o.events.disconnect(), null == (n = o.gl) || null == (r = n.renderLists) || null == r.dispose || r.dispose(), null == (i = o.gl) || null == i.forceContextLoss || i.forceContextLoss(),
                                function(t) { t.dispose && "Scene" !== t.type && t.dispose(); for (var e in t) { var n, r;
                                        null == (n = (r = e).dispose) || n.call(r), delete t[e] } }(o), Zt.delete(t), e && e(t) }), 500) })) } }
            Nt.act;
            Nt.injectIntoDevTools({ bundleType: 0, rendererPackageName: "@react-three/fiber", version: "17.0.2" }) }, 2236: function(t, e, n) { n(65743),
                function(t, e, n, r) { "use strict";

                    function o(t) { return t && "object" == typeof t && "default" in t ? t : { default: t } } var i = o(e),
                        a = o(n),
                        u = o(r),
                        s = function(t, e, n) { return { endTime: e, insertTime: n, type: "exponentialRampToValue", value: t } },
                        c = function(t, e, n) { return { endTime: e, insertTime: n, type: "linearRampToValue", value: t } },
                        l = function(t, e) { return { startTime: e, type: "setValue", value: t } },
                        f = function(t, e, n) { return { duration: n, startTime: e, type: "setValueCurve", values: t } },
                        h = function(t, e, n) { var r = n.startTime,
                                o = n.target,
                                i = n.timeConstant; return o + (e - o) * Math.exp((r - t) / i) },
                        p = function(t) { return "exponentialRampToValue" === t.type },
                        d = function(t) { return "linearRampToValue" === t.type },
                        v = function(t) { return p(t) || d(t) },
                        m = function(t) { return "setValue" === t.type },
                        g = function(t) { return "setValueCurve" === t.type },
                        y = function t(e, n, r, o) { var i = e[n]; return void 0 === i ? o : v(i) || m(i) ? i.value : g(i) ? i.values[i.values.length - 1] : h(r, t(e, n - 1, i.startTime, o), i) },
                        b = function(t, e, n, r, o) { return void 0 === n ? [r.insertTime, o] : v(n) ? [n.endTime, n.value] : m(n) ? [n.startTime, n.value] : g(n) ? [n.startTime + n.duration, n.values[n.values.length - 1]] : [n.startTime, y(t, e - 1, n.startTime, o)] },
                        _ = function(t) { return "cancelAndHold" === t.type },
                        w = function(t) { return "cancelScheduledValues" === t.type },
                        k = function(t) { return _(t) || w(t) ? t.cancelTime : p(t) || d(t) ? t.endTime : t.startTime },
                        x = function(t, e, n, r) { var o = r.endTime,
                                i = r.value; return n === i ? i : 0 < n && 0 < i || n < 0 && i < 0 ? n * Math.pow(i / n, (t - e) / (o - e)) : 0 },
                        O = function(t, e, n, r) { return n + (t - e) / (r.endTime - e) * (r.value - n) },
                        S = function(t, e) { var n = Math.floor(e),
                                r = Math.ceil(e); return n === r ? t[n] : (1 - (e - n)) * t[n] + (1 - (r - e)) * t[r] },
                        C = function(t, e) { var n = e.duration,
                                r = e.startTime,
                                o = e.values,
                                i = (t - r) / n * (o.length - 1); return S(o, i) },
                        A = function(t) { return "setTarget" === t.type },
                        T = function(t) {
                            function e(t) { a.default(this, e), this._automationEvents = [], this._currenTime = 0, this._defaultValue = t } return u.default(e, [{ key: t, value: function() { return this._automationEvents[Symbol.iterator]() } }, { key: "add", value: function(t) { var e = k(t); if (_(t) || w(t)) { var n = this._automationEvents.findIndex((function(n) { return w(t) && g(n) ? n.startTime + n.duration >= e : k(n) >= e })),
                                            r = this._automationEvents[n]; if (-1 !== n && (this._automationEvents = this._automationEvents.slice(0, n)), _(t)) { var o = this._automationEvents[this._automationEvents.length - 1]; if (void 0 !== r && v(r)) { if (A(o)) throw new Error("The internal list is malformed."); var i = g(o) ? o.startTime + o.duration : k(o),
                                                    a = g(o) ? o.values[o.values.length - 1] : o.value,
                                                    u = p(r) ? x(e, i, a, r) : O(e, i, a, r),
                                                    h = p(r) ? s(u, e, this._currenTime) : c(u, e, this._currenTime);
                                                this._automationEvents.push(h) }
                                            void 0 !== o && A(o) && this._automationEvents.push(l(this.getValue(e), e)), void 0 !== o && g(o) && o.startTime + o.duration > e && (this._automationEvents[this._automationEvents.length - 1] = f(new Float32Array([6, 7]), o.startTime, e - o.startTime)) } } else { var m = this._automationEvents.findIndex((function(t) { return k(t) > e })),
                                            y = -1 === m ? this._automationEvents[this._automationEvents.length - 1] : this._automationEvents[m - 1]; if (void 0 !== y && g(y) && k(y) + y.duration > e) return !1; var b = p(t) ? s(t.value, t.endTime, this._currenTime) : d(t) ? c(t.value, e, this._currenTime) : t; if (-1 === m) this._automationEvents.push(b);
                                        else { if (g(t) && e + t.duration > k(this._automationEvents[m])) return !1;
                                            this._automationEvents.splice(m, 0, b) } } return !0 } }, { key: "flush", value: function(t) { var e = this._automationEvents.findIndex((function(e) { return k(e) > t })); if (e > 1) { var n = this._automationEvents.slice(e - 1),
                                            r = n[0];
                                        A(r) && n.unshift(l(y(this._automationEvents, e - 2, r.startTime, this._defaultValue), r.startTime)), this._automationEvents = n } } }, { key: "getValue", value: function(t) { if (0 === this._automationEvents.length) return this._defaultValue; var e = this._automationEvents.findIndex((function(e) { return k(e) > t })),
                                        n = this._automationEvents[e],
                                        r = (-1 === e ? this._automationEvents.length : e) - 1,
                                        o = this._automationEvents[r]; if (void 0 !== o && A(o) && (void 0 === n || !v(n) || n.insertTime > t)) return h(t, y(this._automationEvents, r - 1, o.startTime, this._defaultValue), o); if (void 0 !== o && m(o) && (void 0 === n || !v(n))) return o.value; if (void 0 !== o && g(o) && (void 0 === n || !v(n) || o.startTime + o.duration > t)) return t < o.startTime + o.duration ? C(t, o) : o.values[o.values.length - 1]; if (void 0 !== o && v(o) && (void 0 === n || !v(n))) return o.value; if (void 0 !== n && p(n)) { var a = b(this._automationEvents, r, o, n, this._defaultValue),
                                            u = i.default(a, 2),
                                            s = u[0],
                                            c = u[1]; return x(t, s, c, n) } if (void 0 !== n && d(n)) { var l = b(this._automationEvents, r, o, n, this._defaultValue),
                                            f = i.default(l, 2),
                                            _ = f[0],
                                            w = f[1]; return O(t, _, w, n) } return this._defaultValue } }]), e }(Symbol.iterator),
                        E = function(t) { return { cancelTime: t, type: "cancelAndHold" } },
                        P = function(t) { return { cancelTime: t, type: "cancelScheduledValues" } },
                        Z = function(t, e) { return { endTime: e, type: "exponentialRampToValue", value: t } },
                        R = function(t, e) { return { endTime: e, type: "linearRampToValue", value: t } },
                        D = function(t, e, n) { return { startTime: e, target: t, timeConstant: n, type: "setTarget" } };
                    t.AutomationEventList = T, t.createCancelAndHoldAutomationEvent = E, t.createCancelScheduledValuesAutomationEvent = P, t.createExponentialRampToValueAutomationEvent = Z, t.createLinearRampToValueAutomationEvent = R, t.createSetTargetAutomationEvent = D, t.createSetValueAutomationEvent = l, t.createSetValueCurveAutomationEvent = f, Object.defineProperty(t, "__esModule", { value: !0 }) }(e, n(63038), n(34575), n(93913)) }, 96633: function(t, e, n) { t.exports = n(42465) }, 23344: function(t, e, n) { "use strict"; var r = n(1599),
                o = n(27202),
                i = n(70116),
                a = n(78710),
                u = n(23656),
                s = n(46767),
                c = n(30778),
                l = n(51191),
                f = n(98943),
                h = n(26114);
            t.exports = function(t) { return new Promise((function(e, n) { var p, d = t.data,
                        v = t.headers,
                        m = t.responseType;

                    function g() { t.cancelToken && t.cancelToken.unsubscribe(p), t.signal && t.signal.removeEventListener("abort", p) }
                    r.isFormData(d) && delete v["Content-Type"]; var y = new XMLHttpRequest; if (t.auth) { var b = t.auth.username || "",
                            _ = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
                        v.Authorization = "Basic " + btoa(b + ":" + _) } var w = u(t.baseURL, t.url);

                    function k() { if (y) { var r = "getAllResponseHeaders" in y ? s(y.getAllResponseHeaders()) : null,
                                i = { data: m && "text" !== m && "json" !== m ? y.response : y.responseText, status: y.status, statusText: y.statusText, headers: r, config: t, request: y };
                            o((function(t) { e(t), g() }), (function(t) { n(t), g() }), i), y = null } } if (y.open(t.method.toUpperCase(), a(w, t.params, t.paramsSerializer), !0), y.timeout = t.timeout, "onloadend" in y ? y.onloadend = k : y.onreadystatechange = function() { y && 4 === y.readyState && (0 !== y.status || y.responseURL && 0 === y.responseURL.indexOf("file:")) && setTimeout(k) }, y.onabort = function() { y && (n(l("Request aborted", t, "ECONNABORTED", y)), y = null) }, y.onerror = function() { n(l("Network Error", t, null, y)), y = null }, y.ontimeout = function() { var e = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded",
                                r = t.transitional || f.transitional;
                            t.timeoutErrorMessage && (e = t.timeoutErrorMessage), n(l(e, t, r.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", y)), y = null }, r.isStandardBrowserEnv()) { var x = (t.withCredentials || c(w)) && t.xsrfCookieName ? i.read(t.xsrfCookieName) : void 0;
                        x && (v[t.xsrfHeaderName] = x) } "setRequestHeader" in y && r.forEach(v, (function(t, e) { void 0 === d && "content-type" === e.toLowerCase() ? delete v[e] : y.setRequestHeader(e, t) })), r.isUndefined(t.withCredentials) || (y.withCredentials = !!t.withCredentials), m && "json" !== m && (y.responseType = t.responseType), "function" == typeof t.onDownloadProgress && y.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && y.upload && y.upload.addEventListener("progress", t.onUploadProgress), (t.cancelToken || t.signal) && (p = function(t) { y && (n(!t || t && t.type ? new h("canceled") : t), y.abort(), y = null) }, t.cancelToken && t.cancelToken.subscribe(p), t.signal && (t.signal.aborted ? p() : t.signal.addEventListener("abort", p))), d || (d = null), y.send(d) })) } }, 42465: function(t, e, n) { "use strict"; var r = n(1599),
                o = n(46013),
                i = n(82234),
                a = n(75469); var u = function t(e) { var n = new i(e),
                    u = o(i.prototype.request, n); return r.extend(u, i.prototype, n), r.extend(u, n), u.create = function(n) { return t(a(e, n)) }, u }(n(98943));
            u.Axios = i, u.Cancel = n(26114), u.CancelToken = n(64396), u.isCancel = n(7458), u.VERSION = n(1191).version, u.all = function(t) { return Promise.all(t) }, u.spread = n(92744), u.isAxiosError = n(6683), t.exports = u, t.exports.default = u }, 26114: function(t) { "use strict";

            function e(t) { this.message = t }
            e.prototype.toString = function() { return "Cancel" + (this.message ? ": " + this.message : "") }, e.prototype.__CANCEL__ = !0, t.exports = e }, 64396: function(t, e, n) { "use strict"; var r = n(26114);

            function o(t) { if ("function" != typeof t) throw new TypeError("executor must be a function."); var e;
                this.promise = new Promise((function(t) { e = t })); var n = this;
                this.promise.then((function(t) { if (n._listeners) { var e, r = n._listeners.length; for (e = 0; e < r; e++) n._listeners[e](t);
                        n._listeners = null } })), this.promise.then = function(t) { var e, r = new Promise((function(t) { n.subscribe(t), e = t })).then(t); return r.cancel = function() { n.unsubscribe(e) }, r }, t((function(t) { n.reason || (n.reason = new r(t), e(n.reason)) })) }
            o.prototype.throwIfRequested = function() { if (this.reason) throw this.reason }, o.prototype.subscribe = function(t) { this.reason ? t(this.reason) : this._listeners ? this._listeners.push(t) : this._listeners = [t] }, o.prototype.unsubscribe = function(t) { if (this._listeners) { var e = this._listeners.indexOf(t); - 1 !== e && this._listeners.splice(e, 1) } }, o.source = function() { var t; return { token: new o((function(e) { t = e })), cancel: t } }, t.exports = o }, 7458: function(t) { "use strict";
            t.exports = function(t) { return !(!t || !t.__CANCEL__) } }, 82234: function(t, e, n) { "use strict"; var r = n(1599),
                o = n(78710),
                i = n(35950),
                a = n(34126),
                u = n(75469),
                s = n(18260),
                c = s.validators;

            function l(t) { this.defaults = t, this.interceptors = { request: new i, response: new i } }
            l.prototype.request = function(t, e) { "string" == typeof t ? (e = e || {}).url = t : e = t || {}, (e = u(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get"; var n = e.transitional;
                void 0 !== n && s.assertOptions(n, { silentJSONParsing: c.transitional(c.boolean), forcedJSONParsing: c.transitional(c.boolean), clarifyTimeoutError: c.transitional(c.boolean) }, !1); var r = [],
                    o = !0;
                this.interceptors.request.forEach((function(t) { "function" == typeof t.runWhen && !1 === t.runWhen(e) || (o = o && t.synchronous, r.unshift(t.fulfilled, t.rejected)) })); var i, l = []; if (this.interceptors.response.forEach((function(t) { l.push(t.fulfilled, t.rejected) })), !o) { var f = [a, void 0]; for (Array.prototype.unshift.apply(f, r), f = f.concat(l), i = Promise.resolve(e); f.length;) i = i.then(f.shift(), f.shift()); return i } for (var h = e; r.length;) { var p = r.shift(),
                        d = r.shift(); try { h = p(h) } catch (v) { d(v); break } } try { i = a(h) } catch (v) { return Promise.reject(v) } for (; l.length;) i = i.then(l.shift(), l.shift()); return i }, l.prototype.getUri = function(t) { return t = u(this.defaults, t), o(t.url, t.params, t.paramsSerializer).replace(/^\?/, "") }, r.forEach(["delete", "get", "head", "options"], (function(t) { l.prototype[t] = function(e, n) { return this.request(u(n || {}, { method: t, url: e, data: (n || {}).data })) } })), r.forEach(["post", "put", "patch"], (function(t) { l.prototype[t] = function(e, n, r) { return this.request(u(r || {}, { method: t, url: e, data: n })) } })), t.exports = l }, 35950: function(t, e, n) { "use strict"; var r = n(1599);

            function o() { this.handlers = [] }
            o.prototype.use = function(t, e, n) { return this.handlers.push({ fulfilled: t, rejected: e, synchronous: !!n && n.synchronous, runWhen: n ? n.runWhen : null }), this.handlers.length - 1 }, o.prototype.eject = function(t) { this.handlers[t] && (this.handlers[t] = null) }, o.prototype.forEach = function(t) { r.forEach(this.handlers, (function(e) { null !== e && t(e) })) }, t.exports = o }, 23656: function(t, e, n) { "use strict"; var r = n(789),
                o = n(7020);
            t.exports = function(t, e) { return t && !r(e) ? o(t, e) : e } }, 51191: function(t, e, n) { "use strict"; var r = n(87822);
            t.exports = function(t, e, n, o, i) { var a = new Error(t); return r(a, e, n, o, i) } }, 34126: function(t, e, n) { "use strict"; var r = n(1599),
                o = n(17989),
                i = n(7458),
                a = n(98943),
                u = n(26114);

            function s(t) { if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted) throw new u("canceled") }
            t.exports = function(t) { return s(t), t.headers = t.headers || {}, t.data = o.call(t, t.data, t.headers, t.transformRequest), t.headers = r.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(e) { delete t.headers[e] })), (t.adapter || a.adapter)(t).then((function(e) { return s(t), e.data = o.call(t, e.data, e.headers, t.transformResponse), e }), (function(e) { return i(e) || (s(t), e && e.response && (e.response.data = o.call(t, e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e) })) } }, 87822: function(t) { "use strict";
            t.exports = function(t, e, n, r, o) { return t.config = e, n && (t.code = n), t.request = r, t.response = o, t.isAxiosError = !0, t.toJSON = function() { return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: this.config, code: this.code, status: this.response && this.response.status ? this.response.status : null } }, t } }, 75469: function(t, e, n) { "use strict"; var r = n(1599);
            t.exports = function(t, e) { e = e || {}; var n = {};

                function o(t, e) { return r.isPlainObject(t) && r.isPlainObject(e) ? r.merge(t, e) : r.isPlainObject(e) ? r.merge({}, e) : r.isArray(e) ? e.slice() : e }

                function i(n) { return r.isUndefined(e[n]) ? r.isUndefined(t[n]) ? void 0 : o(void 0, t[n]) : o(t[n], e[n]) }

                function a(t) { if (!r.isUndefined(e[t])) return o(void 0, e[t]) }

                function u(n) { return r.isUndefined(e[n]) ? r.isUndefined(t[n]) ? void 0 : o(void 0, t[n]) : o(void 0, e[n]) }

                function s(n) { return n in e ? o(t[n], e[n]) : n in t ? o(void 0, t[n]) : void 0 } var c = { url: a, method: a, data: a, baseURL: u, transformRequest: u, transformResponse: u, paramsSerializer: u, timeout: u, timeoutMessage: u, withCredentials: u, adapter: u, responseType: u, xsrfCookieName: u, xsrfHeaderName: u, onUploadProgress: u, onDownloadProgress: u, decompress: u, maxContentLength: u, maxBodyLength: u, transport: u, httpAgent: u, httpsAgent: u, cancelToken: u, socketPath: u, responseEncoding: u, validateStatus: s }; return r.forEach(Object.keys(t).concat(Object.keys(e)), (function(t) { var e = c[t] || i,
                        o = e(t);
                    r.isUndefined(o) && e !== s || (n[t] = o) })), n } }, 27202: function(t, e, n) { "use strict"; var r = n(51191);
            t.exports = function(t, e, n) { var o = n.config.validateStatus;
                n.status && o && !o(n.status) ? e(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : t(n) } }, 17989: function(t, e, n) { "use strict"; var r = n(1599),
                o = n(98943);
            t.exports = function(t, e, n) { var i = this || o; return r.forEach(n, (function(n) { t = n.call(i, t, e) })), t } }, 98943: function(t, e, n) { "use strict"; var r = n(40033),
                o = n(1599),
                i = n(24188),
                a = n(87822),
                u = { "Content-Type": "application/x-www-form-urlencoded" };

            function s(t, e) {!o.isUndefined(t) && o.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e) } var c, l = { transitional: { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 }, adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== r && "[object process]" === Object.prototype.toString.call(r)) && (c = n(23344)), c), transformRequest: [function(t, e) { return i(e, "Accept"), i(e, "Content-Type"), o.isFormData(t) || o.isArrayBuffer(t) || o.isBuffer(t) || o.isStream(t) || o.isFile(t) || o.isBlob(t) ? t : o.isArrayBufferView(t) ? t.buffer : o.isURLSearchParams(t) ? (s(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : o.isObject(t) || e && "application/json" === e["Content-Type"] ? (s(e, "application/json"), function(t, e, n) { if (o.isString(t)) try { return (e || JSON.parse)(t), o.trim(t) } catch (r) { if ("SyntaxError" !== r.name) throw r }
                        return (n || JSON.stringify)(t) }(t)) : t }], transformResponse: [function(t) { var e = this.transitional || l.transitional,
                        n = e && e.silentJSONParsing,
                        r = e && e.forcedJSONParsing,
                        i = !n && "json" === this.responseType; if (i || r && o.isString(t) && t.length) try { return JSON.parse(t) } catch (u) { if (i) { if ("SyntaxError" === u.name) throw a(u, this, "E_JSON_PARSE"); throw u } }
                    return t }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, validateStatus: function(t) { return t >= 200 && t < 300 }, headers: { common: { Accept: "application/json, text/plain, */*" } } };
            o.forEach(["delete", "get", "head"], (function(t) { l.headers[t] = {} })), o.forEach(["post", "put", "patch"], (function(t) { l.headers[t] = o.merge(u) })), t.exports = l }, 1191: function(t) { t.exports = { version: "0.26.0" } }, 46013: function(t) { "use strict";
            t.exports = function(t, e) { return function() { for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r]; return t.apply(e, n) } } }, 78710: function(t, e, n) { "use strict"; var r = n(1599);

            function o(t) { return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]") }
            t.exports = function(t, e, n) { if (!e) return t; var i; if (n) i = n(e);
                else if (r.isURLSearchParams(e)) i = e.toString();
                else { var a = [];
                    r.forEach(e, (function(t, e) { null != t && (r.isArray(t) ? e += "[]" : t = [t], r.forEach(t, (function(t) { r.isDate(t) ? t = t.toISOString() : r.isObject(t) && (t = JSON.stringify(t)), a.push(o(e) + "=" + o(t)) }))) })), i = a.join("&") } if (i) { var u = t.indexOf("#"); - 1 !== u && (t = t.slice(0, u)), t += (-1 === t.indexOf("?") ? "?" : "&") + i } return t } }, 7020: function(t) { "use strict";
            t.exports = function(t, e) { return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t } }, 70116: function(t, e, n) { "use strict"; var r = n(1599);
            t.exports = r.isStandardBrowserEnv() ? { write: function(t, e, n, o, i, a) { var u = [];
                    u.push(t + "=" + encodeURIComponent(e)), r.isNumber(n) && u.push("expires=" + new Date(n).toGMTString()), r.isString(o) && u.push("path=" + o), r.isString(i) && u.push("domain=" + i), !0 === a && u.push("secure"), document.cookie = u.join("; ") }, read: function(t) { var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")); return e ? decodeURIComponent(e[3]) : null }, remove: function(t) { this.write(t, "", Date.now() - 864e5) } } : { write: function() {}, read: function() { return null }, remove: function() {} } }, 789: function(t) { "use strict";
            t.exports = function(t) { return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) } }, 6683: function(t, e, n) { "use strict"; var r = n(1599);
            t.exports = function(t) { return r.isObject(t) && !0 === t.isAxiosError } }, 30778: function(t, e, n) { "use strict"; var r = n(1599);
            t.exports = r.isStandardBrowserEnv() ? function() { var t, e = /(msie|trident)/i.test(navigator.userAgent),
                    n = document.createElement("a");

                function o(t) { var r = t; return e && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), { href: n.href, protocol: n.protocol ? n.protocol.replace(/:$/, "") : "", host: n.host, search: n.search ? n.search.replace(/^\?/, "") : "", hash: n.hash ? n.hash.replace(/^#/, "") : "", hostname: n.hostname, port: n.port, pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname } } return t = o(window.location.href),
                    function(e) { var n = r.isString(e) ? o(e) : e; return n.protocol === t.protocol && n.host === t.host } }() : function() { return !0 } }, 24188: function(t, e, n) { "use strict"; var r = n(1599);
            t.exports = function(t, e) { r.forEach(t, (function(n, r) { r !== e && r.toUpperCase() === e.toUpperCase() && (t[e] = n, delete t[r]) })) } }, 46767: function(t, e, n) { "use strict"; var r = n(1599),
                o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            t.exports = function(t) { var e, n, i, a = {}; return t ? (r.forEach(t.split("\n"), (function(t) { if (i = t.indexOf(":"), e = r.trim(t.substr(0, i)).toLowerCase(), n = r.trim(t.substr(i + 1)), e) { if (a[e] && o.indexOf(e) >= 0) return;
                        a[e] = "set-cookie" === e ? (a[e] ? a[e] : []).concat([n]) : a[e] ? a[e] + ", " + n : n } })), a) : a } }, 92744: function(t) { "use strict";
            t.exports = function(t) { return function(e) { return t.apply(null, e) } } }, 18260: function(t, e, n) { "use strict"; var r = n(1191).version,
                o = {};
            ["object", "boolean", "number", "function", "string", "symbol"].forEach((function(t, e) { o[t] = function(n) { return typeof n === t || "a" + (e < 1 ? "n " : " ") + t } })); var i = {};
            o.transitional = function(t, e, n) {
                function o(t, e) { return "[Axios v" + r + "] Transitional option '" + t + "'" + e + (n ? ". " + n : "") } return function(n, r, a) { if (!1 === t) throw new Error(o(r, " has been removed" + (e ? " in " + e : ""))); return e && !i[r] && (i[r] = !0, console.warn(o(r, " has been deprecated since v" + e + " and will be removed in the near future"))), !t || t(n, r, a) } }, t.exports = { assertOptions: function(t, e, n) { if ("object" != typeof t) throw new TypeError("options must be an object"); for (var r = Object.keys(t), o = r.length; o-- > 0;) { var i = r[o],
                            a = e[i]; if (a) { var u = t[i],
                                s = void 0 === u || a(u, i, t); if (!0 !== s) throw new TypeError("option " + i + " must be " + s) } else if (!0 !== n) throw Error("Unknown option " + i) } }, validators: o } }, 1599: function(t, e, n) { "use strict"; var r = n(46013),
                o = Object.prototype.toString;

            function i(t) { return Array.isArray(t) }

            function a(t) { return void 0 === t }

            function u(t) { return "[object ArrayBuffer]" === o.call(t) }

            function s(t) { return null !== t && "object" == typeof t }

            function c(t) { if ("[object Object]" !== o.call(t)) return !1; var e = Object.getPrototypeOf(t); return null === e || e === Object.prototype }

            function l(t) { return "[object Function]" === o.call(t) }

            function f(t, e) { if (null != t)
                    if ("object" != typeof t && (t = [t]), i(t))
                        for (var n = 0, r = t.length; n < r; n++) e.call(null, t[n], n, t);
                    else
                        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.call(null, t[o], o, t) }
            t.exports = { isArray: i, isArrayBuffer: u, isBuffer: function(t) { return null !== t && !a(t) && null !== t.constructor && !a(t.constructor) && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t) }, isFormData: function(t) { return "[object FormData]" === o.call(t) }, isArrayBufferView: function(t) { return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && u(t.buffer) }, isString: function(t) { return "string" == typeof t }, isNumber: function(t) { return "number" == typeof t }, isObject: s, isPlainObject: c, isUndefined: a, isDate: function(t) { return "[object Date]" === o.call(t) }, isFile: function(t) { return "[object File]" === o.call(t) }, isBlob: function(t) { return "[object Blob]" === o.call(t) }, isFunction: l, isStream: function(t) { return s(t) && l(t.pipe) }, isURLSearchParams: function(t) { return "[object URLSearchParams]" === o.call(t) }, isStandardBrowserEnv: function() { return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document) }, forEach: f, merge: function t() { var e = {};

                    function n(n, r) { c(e[r]) && c(n) ? e[r] = t(e[r], n) : c(n) ? e[r] = t({}, n) : i(n) ? e[r] = n.slice() : e[r] = n } for (var r = 0, o = arguments.length; r < o; r++) f(arguments[r], n); return e }, extend: function(t, e, n) { return f(e, (function(e, o) { t[o] = n && "function" == typeof e ? r(e, n) : e })), t }, trim: function(t) { return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "") }, stripBOM: function(t) { return 65279 === t.charCodeAt(0) && (t = t.slice(1)), t } } }, 75900: function(t, e) { var n;! function() { "use strict"; var r = {}.hasOwnProperty;

                function o() { for (var t = [], e = 0; e < arguments.length; e++) { var n = arguments[e]; if (n) { var i = typeof n; if ("string" === i || "number" === i) t.push(n);
                            else if (Array.isArray(n)) { if (n.length) { var a = o.apply(null, n);
                                    a && t.push(a) } } else if ("object" === i)
                                if (n.toString === Object.prototype.toString)
                                    for (var u in n) r.call(n, u) && n[u] && t.push(u);
                                else t.push(n.toString()) } } return t.join(" ") }
                t.exports ? (o.default = o, t.exports = o) : void 0 === (n = function() { return o }.apply(e, [])) || (t.exports = n) }() }, 62881: function(t) {
            function e(t, e, n) { var r, o, i, a, u;

                function s() { var c = Date.now() - a;
                    c < e && c >= 0 ? r = setTimeout(s, e - c) : (r = null, n || (u = t.apply(i, o), i = o = null)) }
                null == e && (e = 100); var c = function() { i = this, o = arguments, a = Date.now(); var c = n && !r; return r || (r = setTimeout(s, e)), c && (u = t.apply(i, o), i = o = null), u }; return c.clear = function() { r && (clearTimeout(r), r = null) }, c.flush = function() { r && (u = t.apply(i, o), i = o = null, clearTimeout(r), r = null) }, c }
            e.debounce = e, t.exports = e }, 2412: function(t) { "use strict";
            t.exports = function t(e, n) { if (e === n) return !0; if (e && n && "object" == typeof e && "object" == typeof n) { if (e.constructor !== n.constructor) return !1; var r, o, i; if (Array.isArray(e)) { if ((r = e.length) != n.length) return !1; for (o = r; 0 != o--;)
                            if (!t(e[o], n[o])) return !1;
                        return !0 } if (e.constructor === RegExp) return e.source === n.source && e.flags === n.flags; if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === n.valueOf(); if (e.toString !== Object.prototype.toString) return e.toString() === n.toString(); if ((r = (i = Object.keys(e)).length) !== Object.keys(n).length) return !1; for (o = r; 0 != o--;)
                        if (!Object.prototype.hasOwnProperty.call(n, i[o])) return !1;
                    for (o = r; 0 != o--;) { var a = i[o]; if (!t(e[a], n[a])) return !1 } return !0 } return e != e && n != n } }, 606: function(t, e, n) { "use strict"; var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
                o = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t },
                i = function() {
                    function t(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } } return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e } }(),
                a = c(n(67294)),
                u = c(n(45697)),
                s = c(n(75900));

            function c(t) { return t && t.__esModule ? t : { default: t } }

            function l(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t } var f = { animating: "rah-animating", animatingUp: "rah-animating--up", animatingDown: "rah-animating--down", animatingToHeightZero: "rah-animating--to-height-zero", animatingToHeightAuto: "rah-animating--to-height-auto", animatingToHeightSpecific: "rah-animating--to-height-specific", static: "rah-static", staticHeightZero: "rah-static--height-zero", staticHeightAuto: "rah-static--height-auto", staticHeightSpecific: "rah-static--height-specific" },
                h = ["animateOpacity", "animationStateClasses", "applyInlineTransitions", "children", "contentClassName", "delay", "duration", "easing", "height", "onAnimationEnd", "onAnimationStart"];

            function p(t) { for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r]; if (!n.length) return t; for (var o = {}, i = Object.keys(t), a = 0; a < i.length; a++) { var u = i[a]; - 1 === n.indexOf(u) && (o[u] = t[u]) } return o }

            function d(t) { t.forEach((function(t) { return cancelAnimationFrame(t) })) }

            function v(t) { return !isNaN(parseFloat(t)) && isFinite(t) }

            function m(t) { return "string" == typeof t && t.search("%") === t.length - 1 && v(t.substr(0, t.length - 1)) }

            function g(t, e) { t && "function" == typeof t && t(e) } var y = function(t) {
                function e(t) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e); var n = function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    n.animationFrameIDs = []; var r = "auto",
                        i = "visible";
                    v(t.height) ? (r = t.height < 0 || "0" === t.height ? 0 : t.height, i = "hidden") : m(t.height) && (r = "0%" === t.height ? 0 : t.height, i = "hidden"), n.animationStateClasses = o({}, f, t.animationStateClasses); var a = n.getStaticStateClasses(r); return n.state = { animationStateClasses: a, height: r, overflow: i, shouldUseTransitions: !1 }, n } return function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, t), i(e, [{ key: "componentDidMount", value: function() { var t = this.state.height;
                        this.contentElement && this.contentElement.style && this.hideContent(t) } }, { key: "componentDidUpdate", value: function(t, e) { var n, r, o = this,
                            i = this.props,
                            a = i.delay,
                            u = i.duration,
                            c = i.height,
                            f = i.onAnimationEnd,
                            h = i.onAnimationStart; if (this.contentElement && c !== t.height) { var p;
                            this.showContent(e.height), this.contentElement.style.overflow = "hidden"; var y = this.contentElement.offsetHeight;
                            this.contentElement.style.overflow = ""; var b = u + a,
                                _ = null,
                                w = { height: null, overflow: "hidden" },
                                k = "auto" === e.height;
                            v(c) ? (_ = c < 0 || "0" === c ? 0 : c, w.height = _) : m(c) ? (_ = "0%" === c ? 0 : c, w.height = _) : (_ = y, w.height = "auto", w.overflow = null), k && (w.height = _, _ = y); var x = (0, s.default)((l(p = {}, this.animationStateClasses.animating, !0), l(p, this.animationStateClasses.animatingUp, "auto" === t.height || c < t.height), l(p, this.animationStateClasses.animatingDown, "auto" === c || c > t.height), l(p, this.animationStateClasses.animatingToHeightZero, 0 === w.height), l(p, this.animationStateClasses.animatingToHeightAuto, "auto" === w.height), l(p, this.animationStateClasses.animatingToHeightSpecific, w.height > 0), p)),
                                O = this.getStaticStateClasses(w.height);
                            this.setState({ animationStateClasses: x, height: _, overflow: "hidden", shouldUseTransitions: !k }), clearTimeout(this.timeoutID), clearTimeout(this.animationClassesTimeoutID), k ? (w.shouldUseTransitions = !0, d(this.animationFrameIDs), this.animationFrameIDs = (n = function() { o.setState(w), g(h, { newHeight: w.height }) }, (r = [])[0] = requestAnimationFrame((function() { r[1] = requestAnimationFrame((function() { n() })) })), r), this.animationClassesTimeoutID = setTimeout((function() { o.setState({ animationStateClasses: O, shouldUseTransitions: !1 }), o.hideContent(w.height), g(f, { newHeight: w.height }) }), b)) : (g(h, { newHeight: _ }), this.timeoutID = setTimeout((function() { w.animationStateClasses = O, w.shouldUseTransitions = !1, o.setState(w), "auto" !== c && o.hideContent(_), g(f, { newHeight: _ }) }), b)) } } }, { key: "componentWillUnmount", value: function() { d(this.animationFrameIDs), clearTimeout(this.timeoutID), clearTimeout(this.animationClassesTimeoutID), this.timeoutID = null, this.animationClassesTimeoutID = null, this.animationStateClasses = null } }, { key: "showContent", value: function(t) { 0 === t && (this.contentElement.style.display = "") } }, { key: "hideContent", value: function(t) { 0 === t && (this.contentElement.style.display = "none") } }, { key: "getStaticStateClasses", value: function(t) { var e; return (0, s.default)((l(e = {}, this.animationStateClasses.static, !0), l(e, this.animationStateClasses.staticHeightZero, 0 === t), l(e, this.animationStateClasses.staticHeightSpecific, t > 0), l(e, this.animationStateClasses.staticHeightAuto, "auto" === t), e)) } }, { key: "render", value: function() { var t, e = this,
                            n = this.props,
                            r = n.animateOpacity,
                            i = n.applyInlineTransitions,
                            u = n.children,
                            c = n.className,
                            f = n.contentClassName,
                            d = n.delay,
                            v = n.duration,
                            m = n.easing,
                            g = n.id,
                            y = n.style,
                            b = this.state,
                            _ = b.height,
                            w = b.overflow,
                            k = b.animationStateClasses,
                            x = b.shouldUseTransitions,
                            O = o({}, y, { height: _, overflow: w || y.overflow });
                        x && i && (O.transition = "height " + v + "ms " + m + " " + d + "ms", y.transition && (O.transition = y.transition + ", " + O.transition), O.WebkitTransition = O.transition); var S = {};
                        r && (S.transition = "opacity " + v + "ms " + m + " " + d + "ms", S.WebkitTransition = S.transition, 0 === _ && (S.opacity = 0)); var C = (0, s.default)((l(t = {}, k, !0), l(t, c, c), t)),
                            A = void 0 !== this.props["aria-hidden"] ? this.props["aria-hidden"] : 0 === _; return a.default.createElement("div", o({}, p.apply(void 0, [this.props].concat(h)), { "aria-hidden": A, className: C, id: g, style: O }), a.default.createElement("div", { className: f, style: S, ref: function(t) { return e.contentElement = t } }, u)) } }]), e }(a.default.Component);
            y.propTypes = { "aria-hidden": u.default.bool, animateOpacity: u.default.bool, animationStateClasses: u.default.object, applyInlineTransitions: u.default.bool, children: u.default.any.isRequired, className: u.default.string, contentClassName: u.default.string, delay: u.default.number, duration: u.default.number, easing: u.default.string, height: function(t, e, n) { var o = t[e]; return "number" == typeof o && o >= 0 || m(o) || "auto" === o ? null : new TypeError('value "' + o + '" of type "' + (void 0 === o ? "undefined" : r(o)) + '" is invalid type for ' + e + " in " + n + '. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").') }, id: u.default.string, onAnimationEnd: u.default.func, onAnimationStart: u.default.func, style: u.default.object }, y.defaultProps = { animateOpacity: !1, animationStateClasses: f, applyInlineTransitions: !0, duration: 250, delay: 0, easing: "ease", style: {} }, e.Z = y }, 36030: function(t, e, n) { "use strict"; var r, o = n(67294),
                i = (r = o) && "object" == typeof r && "default" in r ? r.default : r,
                a = n(14889),
                u = new a,
                s = u.getBrowser(),
                c = u.getCPU(),
                l = u.getDevice(),
                f = u.getEngine(),
                h = u.getOS(),
                p = u.getUA(),
                d = function(t) { return u.setUA(t) },
                v = function(t) { if (t) { var e = new a(t); return { UA: e, browser: e.getBrowser(), cpu: e.getCPU(), device: e.getDevice(), engine: e.getEngine(), os: e.getOS(), ua: e.getUA(), setUserAgent: function(t) { return e.setUA(t) } } }
                    console.error("No userAgent string was provided") },
                m = Object.freeze({ ClientUAInstance: u, browser: s, cpu: c, device: l, engine: f, os: h, ua: p, setUa: d, parseUserAgent: v });

            function g(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function y(t) { return y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, y(t) }

            function b(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function _(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function w() { return w = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, w.apply(this, arguments) }

            function k(t) { return k = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) }, k(t) }

            function x(t, e) { return x = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t }, x(t, e) }

            function O(t, e) { if (null == t) return {}; var n, r, o = function(t, e) { if (null == t) return {}; var n, r, o = {},
                        i = Object.keys(t); for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]); return o }(t, e); if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(t); for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]) } return o }

            function S(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

            function C(t, e) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) { var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (null == n) return; var r, o, i = [],
                        a = !0,
                        u = !1; try { for (n = n.call(t); !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0); } catch (s) { u = !0, o = s } finally { try { a || null == n.return || n.return() } finally { if (u) throw o } } return i }(t, e) || function(t, e) { if (!t) return; if ("string" == typeof t) return A(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return A(t, e) }(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function A(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r } var T = "mobile",
                E = "tablet",
                P = "smarttv",
                Z = "console",
                R = "wearable",
                D = "embedded",
                j = void 0,
                M = { Chrome: "Chrome", Firefox: "Firefox", Opera: "Opera", Yandex: "Yandex", Safari: "Safari", InternetExplorer: "Internet Explorer", Edge: "Edge", Chromium: "Chromium", Ie: "IE", MobileSafari: "Mobile Safari", EdgeChromium: "Edge Chromium", MIUI: "MIUI Browser", SamsungBrowser: "Samsung Browser" },
                I = { IOS: "iOS", Android: "Android", WindowsPhone: "Windows Phone", Windows: "Windows", MAC_OS: "Mac OS" },
                N = { isMobile: !1, isTablet: !1, isBrowser: !1, isSmartTV: !1, isConsole: !1, isWearable: !1 },
                B = function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none"; return t || e },
                F = function() { return !("undefined" == typeof window || !window.navigator && !navigator) && (window.navigator || navigator) },
                L = function(t) { var e = F(); return e && e.platform && (-1 !== e.platform.indexOf(t) || "MacIntel" === e.platform && e.maxTouchPoints > 1 && !window.MSStream) },
                V = function(t, e, n, r) { return function(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? g(Object(n), !0).forEach((function(e) { _(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }({}, t, { vendor: B(e.vendor), model: B(e.model), os: B(n.name), osVersion: B(n.version), ua: B(r) }) }; var z = function(t) { return t.type === T },
                U = function(t) { return t.type === E },
                q = function(t) { var e = t.type; return e === T || e === E },
                W = function(t) { return t.type === P },
                G = function(t) { return t.type === j },
                H = function(t) { return t.type === R },
                Y = function(t) { return t.type === Z },
                X = function(t) { return t.type === D },
                Q = function(t) { var e = t.vendor; return B(e) },
                $ = function(t) { var e = t.model; return B(e) },
                J = function(t) { var e = t.type; return B(e, "browser") },
                K = function(t) { return t.name === I.Android },
                tt = function(t) { return t.name === I.Windows },
                et = function(t) { return t.name === I.MAC_OS },
                nt = function(t) { return t.name === I.WindowsPhone },
                rt = function(t) { return t.name === I.IOS },
                ot = function(t) { var e = t.version; return B(e) },
                it = function(t) { var e = t.name; return B(e) },
                at = function(t) { return t.name === M.Chrome },
                ut = function(t) { return t.name === M.Firefox },
                st = function(t) { return t.name === M.Chromium },
                ct = function(t) { return t.name === M.Edge },
                lt = function(t) { return t.name === M.Yandex },
                ft = function(t) { var e = t.name; return e === M.Safari || e === M.MobileSafari },
                ht = function(t) { return t.name === M.MobileSafari },
                pt = function(t) { return t.name === M.Opera },
                dt = function(t) { var e = t.name; return e === M.InternetExplorer || e === M.Ie },
                vt = function(t) { return t.name === M.MIUI },
                mt = function(t) { return t.name === M.SamsungBrowser },
                gt = function(t) { var e = t.version; return B(e) },
                yt = function(t) { var e = t.major; return B(e) },
                bt = function(t) { var e = t.name; return B(e) },
                _t = function(t) { var e = t.name; return B(e) },
                wt = function(t) { var e = t.version; return B(e) },
                kt = function() { var t = F(),
                        e = t && t.userAgent && t.userAgent.toLowerCase(); return "string" == typeof e && /electron/.test(e) },
                xt = function(t) { return "string" == typeof t && -1 !== t.indexOf("Edg/") },
                Ot = function() { var t = F(); return t && (/iPad|iPhone|iPod/.test(t.platform) || "MacIntel" === t.platform && t.maxTouchPoints > 1) && !window.MSStream },
                St = function() { return L("iPad") },
                Ct = function() { return L("iPhone") },
                At = function() { return L("iPod") },
                Tt = function(t) { return B(t) };

            function Et(t) { var e = t || m,
                    n = e.device,
                    r = e.browser,
                    o = e.os,
                    i = e.engine,
                    a = e.ua; return { isSmartTV: W(n), isConsole: Y(n), isWearable: H(n), isEmbedded: X(n), isMobileSafari: ht(r) || St(), isChromium: st(r), isMobile: q(n) || St(), isMobileOnly: z(n), isTablet: U(n) || St(), isBrowser: G(n), isDesktop: G(n), isAndroid: K(o), isWinPhone: nt(o), isIOS: rt(o) || St(), isChrome: at(r), isFirefox: ut(r), isSafari: ft(r), isOpera: pt(r), isIE: dt(r), osVersion: ot(o), osName: it(o), fullBrowserVersion: gt(r), browserVersion: yt(r), browserName: bt(r), mobileVendor: Q(n), mobileModel: $(n), engineName: _t(i), engineVersion: wt(i), getUA: Tt(a), isEdge: ct(r) || xt(a), isYandex: lt(r), deviceType: J(n), isIOS13: Ot(), isIPad13: St(), isIPhone13: Ct(), isIPod13: At(), isElectron: kt(), isEdgeChromium: xt(a), isLegacyEdge: ct(r) && !xt(a), isWindows: tt(o), isMacOs: et(o), isMIUI: vt(r), isSamsungBrowser: mt(r) } } var Pt = W(l),
                Zt = Y(l),
                Rt = H(l),
                Dt = X(l),
                jt = ht(s) || St(),
                Mt = st(s),
                It = q(l) || St(),
                Nt = z(l),
                Bt = U(l) || St(),
                Ft = G(l),
                Lt = G(l),
                Vt = K(h),
                zt = nt(h),
                Ut = rt(h) || St(),
                qt = at(s),
                Wt = ut(s),
                Gt = ft(s),
                Ht = pt(s),
                Yt = dt(s),
                Xt = ot(h),
                Qt = it(h),
                $t = gt(s),
                Jt = yt(s),
                Kt = bt(s),
                te = Q(l),
                ee = $(l),
                ne = _t(f),
                re = wt(f),
                oe = Tt(p),
                ie = ct(s) || xt(p),
                ae = lt(s),
                ue = J(l),
                se = Ot(),
                ce = St(),
                le = Ct(),
                fe = At(),
                he = kt(),
                pe = xt(p),
                de = ct(s) && !xt(p),
                ve = tt(h),
                me = et(h),
                ge = vt(s),
                ye = mt(s);

            function be(t) { var e = t || window.navigator.userAgent; return v(e) }
            e.i7 = qt, e.nI = Lt, e.vU = Wt, e.gn = Ut, e.tq = It }, 1715: function(t, e, n) { "use strict";

            function r(t) { return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, r(t) }
            Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "DraggableCore", { enumerable: !0, get: function() { return f.default } }), e.default = void 0; var o = function(t, e) { if (!e && t && t.__esModule) return t; if (null === t || "object" !== r(t) && "function" != typeof t) return { default: t }; var n = v(e); if (n && n.has(t)) return n.get(t); var o = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var a in t)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(t, a)) { var u = i ? Object.getOwnPropertyDescriptor(t, a) : null;
                            u && (u.get || u.set) ? Object.defineProperty(o, a, u) : o[a] = t[a] }
                    o.default = t, n && n.set(t, o); return o }(n(67294)),
                i = d(n(45697)),
                a = d(n(73935)),
                u = d(n(85505)),
                s = n(33061),
                c = n(46040),
                l = n(80055),
                f = d(n(6607)),
                h = d(n(97070)),
                p = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];

            function d(t) { return t && t.__esModule ? t : { default: t } }

            function v(t) { if ("function" != typeof WeakMap) return null; var e = new WeakMap,
                    n = new WeakMap; return (v = function(t) { return t ? n : e })(t) }

            function m() { return m = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, m.apply(this, arguments) }

            function g(t, e) { if (null == t) return {}; var n, r, o = function(t, e) { if (null == t) return {}; var n, r, o = {},
                        i = Object.keys(t); for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]); return o }(t, e); if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(t); for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]) } return o }

            function y(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function b(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? y(Object(n), !0).forEach((function(e) { T(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function _(t, e) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) { var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (null == n) return; var r, o, i = [],
                        a = !0,
                        u = !1; try { for (n = n.call(t); !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0); } catch (s) { u = !0, o = s } finally { try { a || null == n.return || n.return() } finally { if (u) throw o } } return i }(t, e) || function(t, e) { if (!t) return; if ("string" == typeof t) return w(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(t, e) }(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function w(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

            function k(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function x(t, e) { return x = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t }, x(t, e) }

            function O(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = A(t); if (e) { var o = A(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return S(this, n) } }

            function S(t, e) { if (e && ("object" === r(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return C(t) }

            function C(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

            function A(t) { return A = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) }, A(t) }

            function T(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t } var E = function(t) {! function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && x(t, e) }(l, t); var e, n, r, i = O(l);

                function l(t) { var e; return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, l), T(C(e = i.call(this, t)), "onDragStart", (function(t, n) { if ((0, h.default)("Draggable: onDragStart: %j", n), !1 === e.props.onStart(t, (0, c.createDraggableData)(C(e), n))) return !1;
                        e.setState({ dragging: !0, dragged: !0 }) })), T(C(e), "onDrag", (function(t, n) { if (!e.state.dragging) return !1;
                        (0, h.default)("Draggable: onDrag: %j", n); var r = (0, c.createDraggableData)(C(e), n),
                            o = { x: r.x, y: r.y }; if (e.props.bounds) { var i = o.x,
                                a = o.y;
                            o.x += e.state.slackX, o.y += e.state.slackY; var u = _((0, c.getBoundPosition)(C(e), o.x, o.y), 2),
                                s = u[0],
                                l = u[1];
                            o.x = s, o.y = l, o.slackX = e.state.slackX + (i - o.x), o.slackY = e.state.slackY + (a - o.y), r.x = o.x, r.y = o.y, r.deltaX = o.x - e.state.x, r.deltaY = o.y - e.state.y } if (!1 === e.props.onDrag(t, r)) return !1;
                        e.setState(o) })), T(C(e), "onDragStop", (function(t, n) { if (!e.state.dragging) return !1; if (!1 === e.props.onStop(t, (0, c.createDraggableData)(C(e), n))) return !1;
                        (0, h.default)("Draggable: onDragStop: %j", n); var r = { dragging: !1, slackX: 0, slackY: 0 }; if (Boolean(e.props.position)) { var o = e.props.position,
                                i = o.x,
                                a = o.y;
                            r.x = i, r.y = a }
                        e.setState(r) })), e.state = { dragging: !1, dragged: !1, x: t.position ? t.position.x : t.defaultPosition.x, y: t.position ? t.position.y : t.defaultPosition.y, prevPropsPosition: b({}, t.position), slackX: 0, slackY: 0, isElementSVG: !1 }, !t.position || t.onDrag || t.onStop || console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."), e } return e = l, r = [{ key: "getDerivedStateFromProps", value: function(t, e) { var n = t.position,
                            r = e.prevPropsPosition; return !n || r && n.x === r.x && n.y === r.y ? null : ((0, h.default)("Draggable: getDerivedStateFromProps %j", { position: n, prevPropsPosition: r }), { x: n.x, y: n.y, prevPropsPosition: b({}, n) }) } }], (n = [{ key: "componentDidMount", value: function() { void 0 !== window.SVGElement && this.findDOMNode() instanceof window.SVGElement && this.setState({ isElementSVG: !0 }) } }, { key: "componentWillUnmount", value: function() { this.setState({ dragging: !1 }) } }, { key: "findDOMNode", value: function() { var t, e, n; return null !== (t = null === (e = this.props) || void 0 === e || null === (n = e.nodeRef) || void 0 === n ? void 0 : n.current) && void 0 !== t ? t : a.default.findDOMNode(this) } }, { key: "render", value: function() { var t, e = this.props,
                            n = (e.axis, e.bounds, e.children),
                            r = e.defaultPosition,
                            i = e.defaultClassName,
                            a = e.defaultClassNameDragging,
                            l = e.defaultClassNameDragged,
                            h = e.position,
                            d = e.positionOffset,
                            v = (e.scale, g(e, p)),
                            y = {},
                            _ = null,
                            w = !Boolean(h) || this.state.dragging,
                            k = h || r,
                            x = { x: (0, c.canDragX)(this) && w ? this.state.x : k.x, y: (0, c.canDragY)(this) && w ? this.state.y : k.y };
                        this.state.isElementSVG ? _ = (0, s.createSVGTransform)(x, d) : y = (0, s.createCSSTransform)(x, d); var O = (0, u.default)(n.props.className || "", i, (T(t = {}, a, this.state.dragging), T(t, l, this.state.dragged), t)); return o.createElement(f.default, m({}, v, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }), o.cloneElement(o.Children.only(n), { className: O, style: b(b({}, n.props.style), y), transform: _ })) } }]) && k(e.prototype, n), r && k(e, r), l }(o.Component);
            e.default = E, T(E, "displayName", "Draggable"), T(E, "propTypes", b(b({}, f.default.propTypes), {}, { axis: i.default.oneOf(["both", "x", "y", "none"]), bounds: i.default.oneOfType([i.default.shape({ left: i.default.number, right: i.default.number, top: i.default.number, bottom: i.default.number }), i.default.string, i.default.oneOf([!1])]), defaultClassName: i.default.string, defaultClassNameDragging: i.default.string, defaultClassNameDragged: i.default.string, defaultPosition: i.default.shape({ x: i.default.number, y: i.default.number }), positionOffset: i.default.shape({ x: i.default.oneOfType([i.default.number, i.default.string]), y: i.default.oneOfType([i.default.number, i.default.string]) }), position: i.default.shape({ x: i.default.number, y: i.default.number }), className: l.dontSetMe, style: l.dontSetMe, transform: l.dontSetMe })), T(E, "defaultProps", b(b({}, f.default.defaultProps), {}, { axis: "both", bounds: !1, defaultClassName: "react-draggable", defaultClassNameDragging: "react-draggable-dragging", defaultClassNameDragged: "react-draggable-dragged", defaultPosition: { x: 0, y: 0 }, scale: 1 })) }, 6607: function(t, e, n) { "use strict";

            function r(t) { return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, r(t) }
            Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0; var o = function(t, e) { if (!e && t && t.__esModule) return t; if (null === t || "object" !== r(t) && "function" != typeof t) return { default: t }; var n = h(e); if (n && n.has(t)) return n.get(t); var o = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var a in t)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(t, a)) { var u = i ? Object.getOwnPropertyDescriptor(t, a) : null;
                            u && (u.get || u.set) ? Object.defineProperty(o, a, u) : o[a] = t[a] }
                    o.default = t, n && n.set(t, o); return o }(n(67294)),
                i = f(n(45697)),
                a = f(n(73935)),
                u = n(33061),
                s = n(46040),
                c = n(80055),
                l = f(n(97070));

            function f(t) { return t && t.__esModule ? t : { default: t } }

            function h(t) { if ("function" != typeof WeakMap) return null; var e = new WeakMap,
                    n = new WeakMap; return (h = function(t) { return t ? n : e })(t) }

            function p(t, e) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) { var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (null == n) return; var r, o, i = [],
                        a = !0,
                        u = !1; try { for (n = n.call(t); !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0); } catch (s) { u = !0, o = s } finally { try { a || null == n.return || n.return() } finally { if (u) throw o } } return i }(t, e) || function(t, e) { if (!t) return; if ("string" == typeof t) return d(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(t, e) }(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function d(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

            function v(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function m(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function g(t, e) { return g = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t }, g(t, e) }

            function y(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = w(t); if (e) { var o = w(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return b(this, n) } }

            function b(t, e) { if (e && ("object" === r(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _(t) }

            function _(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

            function w(t) { return w = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) }, w(t) }

            function k(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t } var x = { start: "touchstart", move: "touchmove", stop: "touchend" },
                O = { start: "mousedown", move: "mousemove", stop: "mouseup" },
                S = O,
                C = function(t) {! function(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && g(t, e) }(c, t); var e, n, r, i = y(c);

                    function c() { var t;
                        v(this, c); for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r]; return k(_(t = i.call.apply(i, [this].concat(n))), "state", { dragging: !1, lastX: NaN, lastY: NaN, touchIdentifier: null }), k(_(t), "mounted", !1), k(_(t), "handleDragStart", (function(e) { if (t.props.onMouseDown(e), !t.props.allowAnyClick && "number" == typeof e.button && 0 !== e.button) return !1; var n = t.findDOMNode(); if (!n || !n.ownerDocument || !n.ownerDocument.body) throw new Error("<DraggableCore> not mounted on DragStart!"); var r = n.ownerDocument; if (!(t.props.disabled || !(e.target instanceof r.defaultView.Node) || t.props.handle && !(0, u.matchesSelectorAndParentsTo)(e.target, t.props.handle, n) || t.props.cancel && (0, u.matchesSelectorAndParentsTo)(e.target, t.props.cancel, n))) { "touchstart" === e.type && e.preventDefault(); var o = (0, u.getTouchIdentifier)(e);
                                t.setState({ touchIdentifier: o }); var i = (0, s.getControlPosition)(e, o, _(t)); if (null != i) { var a = i.x,
                                        c = i.y,
                                        f = (0, s.createCoreData)(_(t), a, c);
                                    (0, l.default)("DraggableCore: handleDragStart: %j", f), (0, l.default)("calling", t.props.onStart), !1 !== t.props.onStart(e, f) && !1 !== t.mounted && (t.props.enableUserSelectHack && (0, u.addUserSelectStyles)(r), t.setState({ dragging: !0, lastX: a, lastY: c }), (0, u.addEvent)(r, S.move, t.handleDrag), (0, u.addEvent)(r, S.stop, t.handleDragStop)) } } })), k(_(t), "handleDrag", (function(e) { var n = (0, s.getControlPosition)(e, t.state.touchIdentifier, _(t)); if (null != n) { var r = n.x,
                                    o = n.y; if (Array.isArray(t.props.grid)) { var i = r - t.state.lastX,
                                        a = o - t.state.lastY,
                                        u = p((0, s.snapToGrid)(t.props.grid, i, a), 2); if (i = u[0], a = u[1], !i && !a) return;
                                    r = t.state.lastX + i, o = t.state.lastY + a } var c = (0, s.createCoreData)(_(t), r, o); if ((0, l.default)("DraggableCore: handleDrag: %j", c), !1 !== t.props.onDrag(e, c) && !1 !== t.mounted) t.setState({ lastX: r, lastY: o });
                                else try { t.handleDragStop(new MouseEvent("mouseup")) } catch (h) { var f = document.createEvent("MouseEvents");
                                    f.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t.handleDragStop(f) } } })), k(_(t), "handleDragStop", (function(e) { if (t.state.dragging) { var n = (0, s.getControlPosition)(e, t.state.touchIdentifier, _(t)); if (null != n) { var r = n.x,
                                        o = n.y,
                                        i = (0, s.createCoreData)(_(t), r, o); if (!1 === t.props.onStop(e, i) || !1 === t.mounted) return !1; var a = t.findDOMNode();
                                    a && t.props.enableUserSelectHack && (0, u.removeUserSelectStyles)(a.ownerDocument), (0, l.default)("DraggableCore: handleDragStop: %j", i), t.setState({ dragging: !1, lastX: NaN, lastY: NaN }), a && ((0, l.default)("DraggableCore: Removing handlers"), (0, u.removeEvent)(a.ownerDocument, S.move, t.handleDrag), (0, u.removeEvent)(a.ownerDocument, S.stop, t.handleDragStop)) } } })), k(_(t), "onMouseDown", (function(e) { return S = O, t.handleDragStart(e) })), k(_(t), "onMouseUp", (function(e) { return S = O, t.handleDragStop(e) })), k(_(t), "onTouchStart", (function(e) { return S = x, t.handleDragStart(e) })), k(_(t), "onTouchEnd", (function(e) { return S = x, t.handleDragStop(e) })), t } return e = c, (n = [{ key: "componentDidMount", value: function() { this.mounted = !0; var t = this.findDOMNode();
                            t && (0, u.addEvent)(t, x.start, this.onTouchStart, { passive: !1 }) } }, { key: "componentWillUnmount", value: function() { this.mounted = !1; var t = this.findDOMNode(); if (t) { var e = t.ownerDocument;
                                (0, u.removeEvent)(e, O.move, this.handleDrag), (0, u.removeEvent)(e, x.move, this.handleDrag), (0, u.removeEvent)(e, O.stop, this.handleDragStop), (0, u.removeEvent)(e, x.stop, this.handleDragStop), (0, u.removeEvent)(t, x.start, this.onTouchStart, { passive: !1 }), this.props.enableUserSelectHack && (0, u.removeUserSelectStyles)(e) } } }, { key: "findDOMNode", value: function() { var t, e, n; return null !== (t = null === (e = this.props) || void 0 === e || null === (n = e.nodeRef) || void 0 === n ? void 0 : n.current) && void 0 !== t ? t : a.default.findDOMNode(this) } }, { key: "render", value: function() { return o.cloneElement(o.Children.only(this.props.children), { onMouseDown: this.onMouseDown, onMouseUp: this.onMouseUp, onTouchEnd: this.onTouchEnd }) } }]) && m(e.prototype, n), r && m(e, r), c }(o.Component);
            e.default = C, k(C, "displayName", "DraggableCore"), k(C, "propTypes", { allowAnyClick: i.default.bool, disabled: i.default.bool, enableUserSelectHack: i.default.bool, offsetParent: function(t, e) { if (t[e] && 1 !== t[e].nodeType) throw new Error("Draggable's offsetParent must be a DOM Node.") }, grid: i.default.arrayOf(i.default.number), handle: i.default.string, cancel: i.default.string, nodeRef: i.default.object, onStart: i.default.func, onDrag: i.default.func, onStop: i.default.func, onMouseDown: i.default.func, scale: i.default.number, className: c.dontSetMe, style: c.dontSetMe, transform: c.dontSetMe }), k(C, "defaultProps", { allowAnyClick: !1, disabled: !1, enableUserSelectHack: !0, onStart: function() {}, onDrag: function() {}, onStop: function() {}, onMouseDown: function() {}, scale: 1 }) }, 82625: function(t, e, n) { "use strict"; var r = n(1715),
                o = r.default,
                i = r.DraggableCore;
            t.exports = o, t.exports.default = o, t.exports.DraggableCore = i }, 33061: function(t, e, n) { "use strict";

            function r(t) { return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, r(t) }
            Object.defineProperty(e, "__esModule", { value: !0 }), e.matchesSelector = f, e.matchesSelectorAndParentsTo = function(t, e, n) { var r = t;
                do { if (f(r, e)) return !0; if (r === n) return !1;
                    r = r.parentNode } while (r); return !1 }, e.addEvent = function(t, e, n, r) { if (!t) return; var o = s({ capture: !0 }, r);
                t.addEventListener ? t.addEventListener(e, n, o) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n }, e.removeEvent = function(t, e, n, r) { if (!t) return; var o = s({ capture: !0 }, r);
                t.removeEventListener ? t.removeEventListener(e, n, o) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = null }, e.outerHeight = function(t) { var e = t.clientHeight,
                    n = t.ownerDocument.defaultView.getComputedStyle(t); return e += (0, o.int)(n.borderTopWidth), e += (0, o.int)(n.borderBottomWidth) }, e.outerWidth = function(t) { var e = t.clientWidth,
                    n = t.ownerDocument.defaultView.getComputedStyle(t); return e += (0, o.int)(n.borderLeftWidth), e += (0, o.int)(n.borderRightWidth) }, e.innerHeight = function(t) { var e = t.clientHeight,
                    n = t.ownerDocument.defaultView.getComputedStyle(t); return e -= (0, o.int)(n.paddingTop), e -= (0, o.int)(n.paddingBottom) }, e.innerWidth = function(t) { var e = t.clientWidth,
                    n = t.ownerDocument.defaultView.getComputedStyle(t); return e -= (0, o.int)(n.paddingLeft), e -= (0, o.int)(n.paddingRight) }, e.offsetXYFromParent = function(t, e, n) { var r = e === e.ownerDocument.body ? { left: 0, top: 0 } : e.getBoundingClientRect(),
                    o = (t.clientX + e.scrollLeft - r.left) / n,
                    i = (t.clientY + e.scrollTop - r.top) / n; return { x: o, y: i } }, e.createCSSTransform = function(t, e) { var n = h(t, e, "px"); return c({}, (0, i.browserPrefixToKey)("transform", i.default), n) }, e.createSVGTransform = function(t, e) { return h(t, e, "") }, e.getTranslation = h, e.getTouch = function(t, e) { return t.targetTouches && (0, o.findInArray)(t.targetTouches, (function(t) { return e === t.identifier })) || t.changedTouches && (0, o.findInArray)(t.changedTouches, (function(t) { return e === t.identifier })) }, e.getTouchIdentifier = function(t) { if (t.targetTouches && t.targetTouches[0]) return t.targetTouches[0].identifier; if (t.changedTouches && t.changedTouches[0]) return t.changedTouches[0].identifier }, e.addUserSelectStyles = function(t) { if (!t) return; var e = t.getElementById("react-draggable-style-el");
                e || ((e = t.createElement("style")).type = "text/css", e.id = "react-draggable-style-el", e.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n", e.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n", t.getElementsByTagName("head")[0].appendChild(e));
                t.body && p(t.body, "react-draggable-transparent-selection") }, e.removeUserSelectStyles = function(t) { if (!t) return; try { if (t.body && d(t.body, "react-draggable-transparent-selection"), t.selection) t.selection.empty();
                    else { var e = (t.defaultView || window).getSelection();
                        e && "Caret" !== e.type && e.removeAllRanges() } } catch (n) {} }, e.addClassName = p, e.removeClassName = d; var o = n(80055),
                i = function(t, e) { if (!e && t && t.__esModule) return t; if (null === t || "object" !== r(t) && "function" != typeof t) return { default: t }; var n = a(e); if (n && n.has(t)) return n.get(t); var o = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in t)
                        if ("default" !== u && Object.prototype.hasOwnProperty.call(t, u)) { var s = i ? Object.getOwnPropertyDescriptor(t, u) : null;
                            s && (s.get || s.set) ? Object.defineProperty(o, u, s) : o[u] = t[u] }
                    o.default = t, n && n.set(t, o); return o }(n(32635));

            function a(t) { if ("function" != typeof WeakMap) return null; var e = new WeakMap,
                    n = new WeakMap; return (a = function(t) { return t ? n : e })(t) }

            function u(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function s(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(n), !0).forEach((function(e) { c(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function c(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t } var l = "";

            function f(t, e) { return l || (l = (0, o.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], (function(e) { return (0, o.isFunction)(t[e]) }))), !!(0, o.isFunction)(t[l]) && t[l](e) }

            function h(t, e, n) { var r = t.x,
                    o = t.y,
                    i = "translate(".concat(r).concat(n, ",").concat(o).concat(n, ")"); if (e) { var a = "".concat("string" == typeof e.x ? e.x : e.x + n),
                        u = "".concat("string" == typeof e.y ? e.y : e.y + n);
                    i = "translate(".concat(a, ", ").concat(u, ")") + i } return i }

            function p(t, e) { t.classList ? t.classList.add(e) : t.className.match(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"))) || (t.className += " ".concat(e)) }

            function d(t, e) { t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"), "g"), "") } }, 32635: function(t, e) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), e.getPrefix = r, e.browserPrefixToKey = o, e.browserPrefixToStyle = function(t, e) { return e ? "-".concat(e.toLowerCase(), "-").concat(t) : t }, e.default = void 0; var n = ["Moz", "Webkit", "O", "ms"];

            function r() { var t, e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform"; if ("undefined" == typeof window) return ""; var i = null === (t = window.document) || void 0 === t || null === (e = t.documentElement) || void 0 === e ? void 0 : e.style; if (!i) return ""; if (r in i) return ""; for (var a = 0; a < n.length; a++)
                    if (o(r, n[a]) in i) return n[a];
                return "" }

            function o(t, e) { return e ? "".concat(e).concat(function(t) { for (var e = "", n = !0, r = 0; r < t.length; r++) n ? (e += t[r].toUpperCase(), n = !1) : "-" === t[r] ? n = !0 : e += t[r]; return e }(t)) : t } var i = r();
            e.default = i }, 97070: function(t, e) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function() { 0 } }, 46040: function(t, e, n) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), e.getBoundPosition = function(t, e, n) { if (!t.props.bounds) return [e, n]; var a = t.props.bounds;
                a = "string" == typeof a ? a : function(t) { return { left: t.left, top: t.top, right: t.right, bottom: t.bottom } }(a); var u = i(t); if ("string" == typeof a) { var s, c = u.ownerDocument,
                        l = c.defaultView; if (!((s = "parent" === a ? u.parentNode : c.querySelector(a)) instanceof l.HTMLElement)) throw new Error('Bounds selector "' + a + '" could not find an element.'); var f = s,
                        h = l.getComputedStyle(u),
                        p = l.getComputedStyle(f);
                    a = { left: -u.offsetLeft + (0, r.int)(p.paddingLeft) + (0, r.int)(h.marginLeft), top: -u.offsetTop + (0, r.int)(p.paddingTop) + (0, r.int)(h.marginTop), right: (0, o.innerWidth)(f) - (0, o.outerWidth)(u) - u.offsetLeft + (0, r.int)(p.paddingRight) - (0, r.int)(h.marginRight), bottom: (0, o.innerHeight)(f) - (0, o.outerHeight)(u) - u.offsetTop + (0, r.int)(p.paddingBottom) - (0, r.int)(h.marginBottom) } }(0, r.isNum)(a.right) && (e = Math.min(e, a.right));
                (0, r.isNum)(a.bottom) && (n = Math.min(n, a.bottom));
                (0, r.isNum)(a.left) && (e = Math.max(e, a.left));
                (0, r.isNum)(a.top) && (n = Math.max(n, a.top)); return [e, n] }, e.snapToGrid = function(t, e, n) { var r = Math.round(e / t[0]) * t[0],
                    o = Math.round(n / t[1]) * t[1]; return [r, o] }, e.canDragX = function(t) { return "both" === t.props.axis || "x" === t.props.axis }, e.canDragY = function(t) { return "both" === t.props.axis || "y" === t.props.axis }, e.getControlPosition = function(t, e, n) { var r = "number" == typeof e ? (0, o.getTouch)(t, e) : null; if ("number" == typeof e && !r) return null; var a = i(n),
                    u = n.props.offsetParent || a.offsetParent || a.ownerDocument.body; return (0, o.offsetXYFromParent)(r || t, u, n.props.scale) }, e.createCoreData = function(t, e, n) { var o = t.state,
                    a = !(0, r.isNum)(o.lastX),
                    u = i(t); return a ? { node: u, deltaX: 0, deltaY: 0, lastX: e, lastY: n, x: e, y: n } : { node: u, deltaX: e - o.lastX, deltaY: n - o.lastY, lastX: o.lastX, lastY: o.lastY, x: e, y: n } }, e.createDraggableData = function(t, e) { var n = t.props.scale; return { node: e.node, x: t.state.x + e.deltaX / n, y: t.state.y + e.deltaY / n, deltaX: e.deltaX / n, deltaY: e.deltaY / n, lastX: t.state.x, lastY: t.state.y } }; var r = n(80055),
                o = n(33061);

            function i(t) { var e = t.findDOMNode(); if (!e) throw new Error("<DraggableCore>: Unmounted during event!"); return e } }, 80055: function(t, e) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), e.findInArray = function(t, e) { for (var n = 0, r = t.length; n < r; n++)
                    if (e.apply(e, [t[n], n, t])) return t[n] }, e.isFunction = function(t) { return "function" == typeof t || "[object Function]" === Object.prototype.toString.call(t) }, e.isNum = function(t) { return "number" == typeof t && !isNaN(t) }, e.int = function(t) { return parseInt(t, 10) }, e.dontSetMe = function(t, e, n) { if (t[e]) return new Error("Invalid prop ".concat(e, " passed to ").concat(n, " - do not set this, set it on the child.")) } }, 50660: function(t, e, n) { "use strict";
            n.d(e, { YD: function() { return v } }); var r = n(67294);

            function o() { return o = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, o.apply(this, arguments) }

            function i(t, e) { return i = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t }, i(t, e) } var a = new Map,
                u = new WeakMap,
                s = 0,
                c = void 0;

            function l(t) { return Object.keys(t).sort().filter((function(e) { return void 0 !== t[e] })).map((function(e) { return e + "_" + ("root" === e ? (n = t.root) ? (u.has(n) || (s += 1, u.set(n, s.toString())), u.get(n)) : "0" : t[e]); var n })).toString() }

            function f(t, e, n, r) { if (void 0 === n && (n = {}), void 0 === r && (r = c), void 0 === window.IntersectionObserver && void 0 !== r) { var o = t.getBoundingClientRect(); return e(r, { isIntersecting: r, target: t, intersectionRatio: "number" == typeof n.threshold ? n.threshold : 0, time: 0, boundingClientRect: o, intersectionRect: o, rootBounds: o }),
                        function() {} } var i = function(t) { var e = l(t),
                            n = a.get(e); if (!n) { var r, o = new Map,
                                i = new IntersectionObserver((function(e) { e.forEach((function(e) { var n, i = e.isIntersecting && r.some((function(t) { return e.intersectionRatio >= t }));
                                        t.trackVisibility && void 0 === e.isVisible && (e.isVisible = i), null == (n = o.get(e.target)) || n.forEach((function(t) { t(i, e) })) })) }), t);
                            r = i.thresholds || (Array.isArray(t.threshold) ? t.threshold : [t.threshold || 0]), n = { id: e, observer: i, elements: o }, a.set(e, n) } return n }(n),
                    u = i.id,
                    s = i.observer,
                    f = i.elements,
                    h = f.get(t) || []; return f.has(t) || f.set(t, h), h.push(e), s.observe(t),
                    function() { h.splice(h.indexOf(e), 1), 0 === h.length && (f.delete(t), s.unobserve(t)), 0 === f.size && (s.disconnect(), a.delete(u)) } } var h = ["children", "as", "tag", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView", "fallbackInView"];

            function p(t) { return "function" != typeof t.children } var d = function(t) { var e, n;

                function a(e) { var n; return (n = t.call(this, e) || this).node = null, n._unobserveCb = null, n.handleNode = function(t) { n.node && (n.unobserve(), t || n.props.triggerOnce || n.props.skip || n.setState({ inView: !!n.props.initialInView, entry: void 0 })), n.node = t || null, n.observeNode() }, n.handleChange = function(t, e) { t && n.props.triggerOnce && n.unobserve(), p(n.props) || n.setState({ inView: t, entry: e }), n.props.onChange && n.props.onChange(t, e) }, n.state = { inView: !!e.initialInView, entry: void 0 }, n }
                n = t, (e = a).prototype = Object.create(n.prototype), e.prototype.constructor = e, i(e, n); var u = a.prototype; return u.componentDidUpdate = function(t) { t.rootMargin === this.props.rootMargin && t.root === this.props.root && t.threshold === this.props.threshold && t.skip === this.props.skip && t.trackVisibility === this.props.trackVisibility && t.delay === this.props.delay || (this.unobserve(), this.observeNode()) }, u.componentWillUnmount = function() { this.unobserve(), this.node = null }, u.observeNode = function() { if (this.node && !this.props.skip) { var t = this.props,
                            e = t.threshold,
                            n = t.root,
                            r = t.rootMargin,
                            o = t.trackVisibility,
                            i = t.delay,
                            a = t.fallbackInView;
                        this._unobserveCb = f(this.node, this.handleChange, { threshold: e, root: n, rootMargin: r, trackVisibility: o, delay: i }, a) } }, u.unobserve = function() { this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null) }, u.render = function() { if (!p(this.props)) { var t = this.state,
                            e = t.inView,
                            n = t.entry; return this.props.children({ inView: e, entry: n, ref: this.handleNode }) } var i = this.props,
                        a = i.children,
                        u = i.as,
                        s = i.tag,
                        c = function(t, e) { if (null == t) return {}; var n, r, o = {},
                                i = Object.keys(t); for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]); return o }(i, h); return r.createElement(u || s || "div", o({ ref: this.handleNode }, c), a) }, a }(r.Component);

            function v(t) { var e = void 0 === t ? {} : t,
                    n = e.threshold,
                    o = e.delay,
                    i = e.trackVisibility,
                    a = e.rootMargin,
                    u = e.root,
                    s = e.triggerOnce,
                    c = e.skip,
                    l = e.initialInView,
                    h = e.fallbackInView,
                    p = r.useRef(),
                    d = r.useState({ inView: !!l }),
                    v = d[0],
                    m = d[1],
                    g = r.useCallback((function(t) { void 0 !== p.current && (p.current(), p.current = void 0), c || t && (p.current = f(t, (function(t, e) { m({ inView: t, entry: e }), e.isIntersecting && s && p.current && (p.current(), p.current = void 0) }), { root: u, rootMargin: a, threshold: n, trackVisibility: i, delay: o }, h)) }), [Array.isArray(n) ? n.toString() : n, u, a, s, c, i, h, o]);
                (0, r.useEffect)((function() { p.current || !v.entry || s || c || m({ inView: !!l }) })); var y = [g, v.inView, v.entry]; return y.ref = y[0], y.inView = y[1], y.entry = y[2], y }
            d.displayName = "InView", d.defaultProps = { threshold: 0, triggerOnce: !1, initialInView: !1 } }, 71717: function(t, e, n) {
            (t = n.nmd(t)).exports = function(e) { var r = {},
                    o = n(46494),
                    i = n(67294),
                    a = n(63840);

                function u(t) { for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." } var s = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    c = 60103,
                    l = 60106,
                    f = 60107,
                    h = 60108,
                    p = 60114,
                    d = 60109,
                    v = 60110,
                    m = 60112,
                    g = 60113,
                    y = 60120,
                    b = 60115,
                    _ = 60116,
                    w = 60121,
                    k = 60129,
                    x = 60130,
                    O = 60131; if ("function" == typeof Symbol && Symbol.for) { var S = Symbol.for;
                    c = S("react.element"), l = S("react.portal"), f = S("react.fragment"), h = S("react.strict_mode"), p = S("react.profiler"), d = S("react.provider"), v = S("react.context"), m = S("react.forward_ref"), g = S("react.suspense"), y = S("react.suspense_list"), b = S("react.memo"), _ = S("react.lazy"), w = S("react.block"), S("react.scope"), k = S("react.debug_trace_mode"), x = S("react.offscreen"), O = S("react.legacy_hidden") } var C = "function" == typeof Symbol && Symbol.iterator;

                function A(t) { return null === t || "object" != typeof t ? null : "function" == typeof(t = C && t[C] || t["@@iterator"]) ? t : null }

                function T(t) { if (null == t) return null; if ("function" == typeof t) return t.displayName || t.name || null; if ("string" == typeof t) return t; switch (t) {
                        case f:
                            return "Fragment";
                        case l:
                            return "Portal";
                        case p:
                            return "Profiler";
                        case h:
                            return "StrictMode";
                        case g:
                            return "Suspense";
                        case y:
                            return "SuspenseList" } if ("object" == typeof t) switch (t.$$typeof) {
                        case v:
                            return (t.displayName || "Context") + ".Consumer";
                        case d:
                            return (t._context.displayName || "Context") + ".Provider";
                        case m:
                            var e = t.render; return e = e.displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                        case b:
                            return T(t.type);
                        case w:
                            return T(t._render);
                        case _:
                            e = t._payload, t = t._init; try { return T(t(e)) } catch (n) {} }
                    return null }

                function E(t) { var e = t,
                        n = t; if (t.alternate)
                        for (; e.return;) e = e.return;
                    else { t = e;
                        do { 0 != (1026 & (e = t).flags) && (n = e.return), t = e.return } while (t) } return 3 === e.tag ? n : null }

                function P(t) { if (E(t) !== t) throw Error(u(188)) }

                function Z(t) { var e = t.alternate; if (!e) { if (null === (e = E(t))) throw Error(u(188)); return e !== t ? null : t } for (var n = t, r = e;;) { var o = n.return; if (null === o) break; var i = o.alternate; if (null === i) { if (null !== (r = o.return)) { n = r; continue } break } if (o.child === i.child) { for (i = o.child; i;) { if (i === n) return P(o), t; if (i === r) return P(o), e;
                                i = i.sibling } throw Error(u(188)) } if (n.return !== r.return) n = o, r = i;
                        else { for (var a = !1, s = o.child; s;) { if (s === n) { a = !0, n = o, r = i; break } if (s === r) { a = !0, r = o, n = i; break }
                                s = s.sibling } if (!a) { for (s = i.child; s;) { if (s === n) { a = !0, n = i, r = o; break } if (s === r) { a = !0, r = i, n = o; break }
                                    s = s.sibling } if (!a) throw Error(u(189)) } } if (n.alternate !== r) throw Error(u(190)) } if (3 !== n.tag) throw Error(u(188)); return n.stateNode.current === n ? t : e }

                function R(t) { if (!(t = Z(t))) return null; for (var e = t;;) { if (5 === e.tag || 6 === e.tag) return e; if (e.child) e.child.return = e, e = e.child;
                        else { if (e === t) break; for (; !e.sibling;) { if (!e.return || e.return === t) return null;
                                e = e.return }
                            e.sibling.return = e.return, e = e.sibling } } return null }

                function D(t, e) { for (var n = t.alternate; null !== e;) { if (e === t || e === n) return !0;
                        e = e.return } return !1 } var j, M = e.getPublicInstance,
                    I = e.getRootHostContext,
                    N = e.getChildHostContext,
                    B = e.prepareForCommit,
                    F = e.resetAfterCommit,
                    L = e.createInstance,
                    V = e.appendInitialChild,
                    z = e.finalizeInitialChildren,
                    U = e.prepareUpdate,
                    q = e.shouldSetTextContent,
                    W = e.createTextInstance,
                    G = e.scheduleTimeout,
                    H = e.cancelTimeout,
                    Y = e.noTimeout,
                    X = e.isPrimaryRenderer,
                    Q = e.supportsMutation,
                    $ = e.supportsPersistence,
                    J = e.supportsHydration,
                    K = e.getInstanceFromNode,
                    tt = e.makeOpaqueHydratingObject,
                    et = e.makeClientId,
                    nt = e.beforeActiveInstanceBlur,
                    rt = e.afterActiveInstanceBlur,
                    ot = e.preparePortalMount,
                    it = e.supportsTestSelectors,
                    at = e.findFiberRoot,
                    ut = e.getBoundingRect,
                    st = e.getTextContent,
                    ct = e.isHiddenSubtree,
                    lt = e.matchAccessibilityRole,
                    ft = e.setFocusIfFocusable,
                    ht = e.setupIntersectionObserver,
                    pt = e.appendChild,
                    dt = e.appendChildToContainer,
                    vt = e.commitTextUpdate,
                    mt = e.commitMount,
                    gt = e.commitUpdate,
                    yt = e.insertBefore,
                    bt = e.insertInContainerBefore,
                    _t = e.removeChild,
                    wt = e.removeChildFromContainer,
                    kt = e.resetTextContent,
                    xt = e.hideInstance,
                    Ot = e.hideTextInstance,
                    St = e.unhideInstance,
                    Ct = e.unhideTextInstance,
                    At = e.clearContainer,
                    Tt = e.cloneInstance,
                    Et = e.createContainerChildSet,
                    Pt = e.appendChildToContainerChildSet,
                    Zt = e.finalizeContainerChildren,
                    Rt = e.replaceContainerChildren,
                    Dt = e.cloneHiddenInstance,
                    jt = e.cloneHiddenTextInstance,
                    Mt = e.canHydrateInstance,
                    It = e.canHydrateTextInstance,
                    Nt = e.isSuspenseInstancePending,
                    Bt = e.isSuspenseInstanceFallback,
                    Ft = e.getNextHydratableSibling,
                    Lt = e.getFirstHydratableChild,
                    Vt = e.hydrateInstance,
                    zt = e.hydrateTextInstance,
                    Ut = e.getNextHydratableInstanceAfterSuspenseInstance,
                    qt = e.commitHydratedContainer,
                    Wt = e.commitHydratedSuspenseInstance;

                function Gt(t) { if (void 0 === j) try { throw Error() } catch (n) { var e = n.stack.trim().match(/\n( *(at )?)/);
                        j = e && e[1] || "" }
                    return "\n" + j + t } var Ht = !1;

                function Yt(t, e) { if (!t || Ht) return "";
                    Ht = !0; var n = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0; try { if (e)
                            if (e = function() { throw Error() }, Object.defineProperty(e.prototype, "props", { set: function() { throw Error() } }), "object" == typeof Reflect && Reflect.construct) { try { Reflect.construct(e, []) } catch (s) { var r = s }
                                Reflect.construct(t, [], e) } else { try { e.call() } catch (s) { r = s }
                                t.call(e.prototype) }
                        else { try { throw Error() } catch (s) { r = s }
                            t() } } catch (s) { if (s && r && "string" == typeof s.stack) { for (var o = s.stack.split("\n"), i = r.stack.split("\n"), a = o.length - 1, u = i.length - 1; 1 <= a && 0 <= u && o[a] !== i[u];) u--; for (; 1 <= a && 0 <= u; a--, u--)
                                if (o[a] !== i[u]) { if (1 !== a || 1 !== u)
                                        do { if (a--, 0 > --u || o[a] !== i[u]) return "\n" + o[a].replace(" at new ", " at ") } while (1 <= a && 0 <= u); break } } } finally { Ht = !1, Error.prepareStackTrace = n } return (t = t ? t.displayName || t.name : "") ? Gt(t) : "" } var Xt = [],
                    Qt = -1;

                function $t(t) { return { current: t } }

                function Jt(t) { 0 > Qt || (t.current = Xt[Qt], Xt[Qt] = null, Qt--) }

                function Kt(t, e) { Qt++, Xt[Qt] = t.current, t.current = e } var te = {},
                    ee = $t(te),
                    ne = $t(!1),
                    re = te;

                function oe(t, e) { var n = t.type.contextTypes; if (!n) return te; var r = t.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === e) return r.__reactInternalMemoizedMaskedChildContext; var o, i = {}; for (o in n) i[o] = e[o]; return r && ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = i), i }

                function ie(t) { return null != (t = t.childContextTypes) }

                function ae() { Jt(ne), Jt(ee) }

                function ue(t, e, n) { if (ee.current !== te) throw Error(u(168));
                    Kt(ee, e), Kt(ne, n) }

                function se(t, e, n) { var r = t.stateNode; if (t = e.childContextTypes, "function" != typeof r.getChildContext) return n; for (var i in r = r.getChildContext())
                        if (!(i in t)) throw Error(u(108, T(e) || "Unknown", i));
                    return o({}, n, r) }

                function ce(t) { return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || te, re = ee.current, Kt(ee, t), Kt(ne, ne.current), !0 }

                function le(t, e, n) { var r = t.stateNode; if (!r) throw Error(u(169));
                    n ? (t = se(t, e, re), r.__reactInternalMemoizedMergedChildContext = t, Jt(ne), Jt(ee), Kt(ee, t)) : Jt(ne), Kt(ne, n) } var fe = null,
                    he = null;
                (0, a.unstable_now)(); var pe = 0,
                    de = 8;

                function ve(t) { if (0 != (1 & t)) return de = 15, 1; if (0 != (2 & t)) return de = 14, 2; if (0 != (4 & t)) return de = 13, 4; var e = 24 & t; return 0 !== e ? (de = 12, e) : 0 != (32 & t) ? (de = 11, 32) : 0 !== (e = 192 & t) ? (de = 10, e) : 0 != (256 & t) ? (de = 9, 256) : 0 !== (e = 3584 & t) ? (de = 8, e) : 0 != (4096 & t) ? (de = 7, 4096) : 0 !== (e = 4186112 & t) ? (de = 6, e) : 0 !== (e = 62914560 & t) ? (de = 5, e) : 67108864 & t ? (de = 4, 67108864) : 0 != (134217728 & t) ? (de = 3, 134217728) : 0 !== (e = 805306368 & t) ? (de = 2, e) : 0 != (1073741824 & t) ? (de = 1, 1073741824) : (de = 8, t) }

                function me(t, e) { var n = t.pendingLanes; if (0 === n) return de = 0; var r = 0,
                        o = 0,
                        i = t.expiredLanes,
                        a = t.suspendedLanes,
                        u = t.pingedLanes; if (0 !== i) r = i, o = de = 15;
                    else if (0 !== (i = 134217727 & n)) { var s = i & ~a;
                        0 !== s ? (r = ve(s), o = de) : 0 !== (u &= i) && (r = ve(u), o = de) } else 0 !== (i = n & ~a) ? (r = ve(i), o = de) : 0 !== u && (r = ve(u), o = de); if (0 === r) return 0; if (r = n & ((0 > (r = 31 - ke(r)) ? 0 : 1 << r) << 1) - 1, 0 !== e && e !== r && 0 == (e & a)) { if (ve(e), o <= de) return e;
                        de = o } if (0 !== (e = t.entangledLanes))
                        for (t = t.entanglements, e &= r; 0 < e;) o = 1 << (n = 31 - ke(e)), r |= t[n], e &= ~o; return r }

                function ge(t) { return 0 !== (t = -1073741825 & t.pendingLanes) ? t : 1073741824 & t ? 1073741824 : 0 }

                function ye(t, e) { switch (t) {
                        case 15:
                            return 1;
                        case 14:
                            return 2;
                        case 12:
                            return 0 === (t = be(24 & ~e)) ? ye(10, e) : t;
                        case 10:
                            return 0 === (t = be(192 & ~e)) ? ye(8, e) : t;
                        case 8:
                            return 0 === (t = be(3584 & ~e)) && (0 === (t = be(4186112 & ~e)) && (t = 512)), t;
                        case 2:
                            return 0 === (e = be(805306368 & ~e)) && (e = 268435456), e } throw Error(u(358, t)) }

                function be(t) { return t & -t }

                function _e(t) { for (var e = [], n = 0; 31 > n; n++) e.push(t); return e }

                function we(t, e, n) { t.pendingLanes |= e; var r = e - 1;
                    t.suspendedLanes &= r, t.pingedLanes &= r, (t = t.eventTimes)[e = 31 - ke(e)] = n } var ke = Math.clz32 ? Math.clz32 : function(t) { return 0 === t ? 32 : 31 - (xe(t) / Oe | 0) | 0 },
                    xe = Math.log,
                    Oe = Math.LN2; var Se = a.unstable_runWithPriority,
                    Ce = a.unstable_scheduleCallback,
                    Ae = a.unstable_cancelCallback,
                    Te = a.unstable_shouldYield,
                    Ee = a.unstable_requestPaint,
                    Pe = a.unstable_now,
                    Ze = a.unstable_getCurrentPriorityLevel,
                    Re = a.unstable_ImmediatePriority,
                    De = a.unstable_UserBlockingPriority,
                    je = a.unstable_NormalPriority,
                    Me = a.unstable_LowPriority,
                    Ie = a.unstable_IdlePriority,
                    Ne = {},
                    Be = void 0 !== Ee ? Ee : function() {},
                    Fe = null,
                    Le = null,
                    Ve = !1,
                    ze = Pe(),
                    Ue = 1e4 > ze ? Pe : function() { return Pe() - ze };

                function qe() { switch (Ze()) {
                        case Re:
                            return 99;
                        case De:
                            return 98;
                        case je:
                            return 97;
                        case Me:
                            return 96;
                        case Ie:
                            return 95;
                        default:
                            throw Error(u(332)) } }

                function We(t) { switch (t) {
                        case 99:
                            return Re;
                        case 98:
                            return De;
                        case 97:
                            return je;
                        case 96:
                            return Me;
                        case 95:
                            return Ie;
                        default:
                            throw Error(u(332)) } }

                function Ge(t, e) { return t = We(t), Se(t, e) }

                function He(t, e, n) { return t = We(t), Ce(t, e, n) }

                function Ye() { if (null !== Le) { var t = Le;
                        Le = null, Ae(t) }
                    Xe() }

                function Xe() { if (!Ve && null !== Fe) { Ve = !0; var t = 0; try { var e = Fe;
                            Ge(99, (function() { for (; t < e.length; t++) { var n = e[t];
                                    do { n = n(!0) } while (null !== n) } })), Fe = null } catch (n) { throw null !== Fe && (Fe = Fe.slice(t + 1)), Ce(Re, Ye), n } finally { Ve = !1 } } } var Qe = s.ReactCurrentBatchConfig; var $e = "function" == typeof Object.is ? Object.is : function(t, e) { return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e },
                    Je = Object.prototype.hasOwnProperty;

                function Ke(t, e) { if ($e(t, e)) return !0; if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1; var n = Object.keys(t),
                        r = Object.keys(e); if (n.length !== r.length) return !1; for (r = 0; r < n.length; r++)
                        if (!Je.call(e, n[r]) || !$e(t[n[r]], e[n[r]])) return !1;
                    return !0 }

                function tn(t) { switch (t.tag) {
                        case 5:
                            return Gt(t.type);
                        case 16:
                            return Gt("Lazy");
                        case 13:
                            return Gt("Suspense");
                        case 19:
                            return Gt("SuspenseList");
                        case 0:
                        case 2:
                        case 15:
                            return t = Yt(t.type, !1);
                        case 11:
                            return t = Yt(t.type.render, !1);
                        case 22:
                            return t = Yt(t.type._render, !1);
                        case 1:
                            return t = Yt(t.type, !0);
                        default:
                            return "" } }

                function en(t, e) { if (t && t.defaultProps) { for (var n in e = o({}, e), t = t.defaultProps) void 0 === e[n] && (e[n] = t[n]); return e } return e } var nn = $t(null),
                    rn = null,
                    on = null,
                    an = null;

                function un() { an = on = rn = null }

                function sn(t, e) { t = t.type._context, X ? (Kt(nn, t._currentValue), t._currentValue = e) : (Kt(nn, t._currentValue2), t._currentValue2 = e) }

                function cn(t) { var e = nn.current;
                    Jt(nn), t = t.type._context, X ? t._currentValue = e : t._currentValue2 = e }

                function ln(t, e) { for (; null !== t;) { var n = t.alternate; if ((t.childLanes & e) === e) { if (null === n || (n.childLanes & e) === e) break;
                            n.childLanes |= e } else t.childLanes |= e, null !== n && (n.childLanes |= e);
                        t = t.return } }

                function fn(t, e) { rn = t, an = on = null, null !== (t = t.dependencies) && null !== t.firstContext && (0 != (t.lanes & e) && (zr = !0), t.firstContext = null) }

                function hn(t, e) { if (an !== t && !1 !== e && 0 !== e)
                        if ("number" == typeof e && 1073741823 !== e || (an = t, e = 1073741823), e = { context: t, observedBits: e, next: null }, null === on) { if (null === rn) throw Error(u(308));
                            on = e, rn.dependencies = { lanes: 0, firstContext: e, responders: null } } else on = on.next = e;
                    return X ? t._currentValue : t._currentValue2 } var pn = !1;

                function dn(t) { t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null } }

                function vn(t, e) { t = t.updateQueue, e.updateQueue === t && (e.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects }) }

                function mn(t, e) { return { eventTime: t, lane: e, tag: 0, payload: null, callback: null, next: null } }

                function gn(t, e) { if (null !== (t = t.updateQueue)) { var n = (t = t.shared).pending;
                        null === n ? e.next = e : (e.next = n.next, n.next = e), t.pending = e } }

                function yn(t, e) { var n = t.updateQueue,
                        r = t.alternate; if (null !== r && n === (r = r.updateQueue)) { var o = null,
                            i = null; if (null !== (n = n.firstBaseUpdate)) { do { var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
                                null === i ? o = i = a : i = i.next = a, n = n.next } while (null !== n);
                            null === i ? o = i = e : i = i.next = e } else o = i = e; return n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, void(t.updateQueue = n) }
                    null === (t = n.lastBaseUpdate) ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e }

                function bn(t, e, n, r) { var i = t.updateQueue;
                    pn = !1; var a = i.firstBaseUpdate,
                        u = i.lastBaseUpdate,
                        s = i.shared.pending; if (null !== s) { i.shared.pending = null; var c = s,
                            l = c.next;
                        c.next = null, null === u ? a = l : u.next = l, u = c; var f = t.alternate; if (null !== f) { var h = (f = f.updateQueue).lastBaseUpdate;
                            h !== u && (null === h ? f.firstBaseUpdate = l : h.next = l, f.lastBaseUpdate = c) } } if (null !== a) { for (h = i.baseState, u = 0, f = l = c = null;;) { s = a.lane; var p = a.eventTime; if ((r & s) === s) { null !== f && (f = f.next = { eventTime: p, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
                                t: { var d = t,
                                        v = a; switch (s = e, p = n, v.tag) {
                                        case 1:
                                            if ("function" == typeof(d = v.payload)) { h = d.call(p, h, s); break t }
                                            h = d; break t;
                                        case 3:
                                            d.flags = -4097 & d.flags | 64;
                                        case 0:
                                            if (null == (s = "function" == typeof(d = v.payload) ? d.call(p, h, s) : d)) break t;
                                            h = o({}, h, s); break t;
                                        case 2:
                                            pn = !0 } }
                                null !== a.callback && (t.flags |= 32, null === (s = i.effects) ? i.effects = [a] : s.push(a)) } else p = { eventTime: p, lane: s, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, null === f ? (l = f = p, c = h) : f = f.next = p, u |= s; if (null === (a = a.next)) { if (null === (s = i.shared.pending)) break;
                                a = s.next, s.next = null, i.lastBaseUpdate = s, i.shared.pending = null } }
                        null === f && (c = h), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = f, hi |= u, t.lanes = u, t.memoizedState = h } }

                function _n(t, e, n) { if (t = e.effects, e.effects = null, null !== t)
                        for (e = 0; e < t.length; e++) { var r = t[e],
                                o = r.callback; if (null !== o) { if (r.callback = null, r = n, "function" != typeof o) throw Error(u(191, o));
                                o.call(r) } } } var wn = (new i.Component).refs;

                function kn(t, e, n, r) { n = null == (n = n(r, e = t.memoizedState)) ? e : o({}, e, n), t.memoizedState = n, 0 === t.lanes && (t.updateQueue.baseState = n) } var xn = { isMounted: function(t) { return !!(t = t._reactInternals) && E(t) === t }, enqueueSetState: function(t, e, n) { t = t._reactInternals; var r = Ni(),
                            o = Bi(t),
                            i = mn(r, o);
                        i.payload = e, null != n && (i.callback = n), gn(t, i), Fi(t, o, r) }, enqueueReplaceState: function(t, e, n) { t = t._reactInternals; var r = Ni(),
                            o = Bi(t),
                            i = mn(r, o);
                        i.tag = 1, i.payload = e, null != n && (i.callback = n), gn(t, i), Fi(t, o, r) }, enqueueForceUpdate: function(t, e) { t = t._reactInternals; var n = Ni(),
                            r = Bi(t),
                            o = mn(n, r);
                        o.tag = 2, null != e && (o.callback = e), gn(t, o), Fi(t, r, n) } };

                function On(t, e, n, r, o, i, a) { return "function" == typeof(t = t.stateNode).shouldComponentUpdate ? t.shouldComponentUpdate(r, i, a) : !e.prototype || !e.prototype.isPureReactComponent || (!Ke(n, r) || !Ke(o, i)) }

                function Sn(t, e, n) { var r = !1,
                        o = te,
                        i = e.contextType; return "object" == typeof i && null !== i ? i = hn(i) : (o = ie(e) ? re : ee.current, i = (r = null != (r = e.contextTypes)) ? oe(t, o) : te), e = new e(n, i), t.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, e.updater = xn, t.stateNode = e, e._reactInternals = t, r && ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = o, t.__reactInternalMemoizedMaskedChildContext = i), e }

                function Cn(t, e, n, r) { t = e.state, "function" == typeof e.componentWillReceiveProps && e.componentWillReceiveProps(n, r), "function" == typeof e.UNSAFE_componentWillReceiveProps && e.UNSAFE_componentWillReceiveProps(n, r), e.state !== t && xn.enqueueReplaceState(e, e.state, null) }

                function An(t, e, n, r) { var o = t.stateNode;
                    o.props = n, o.state = t.memoizedState, o.refs = wn, dn(t); var i = e.contextType; "object" == typeof i && null !== i ? o.context = hn(i) : (i = ie(e) ? re : ee.current, o.context = oe(t, i)), bn(t, n, o, r), o.state = t.memoizedState, "function" == typeof(i = e.getDerivedStateFromProps) && (kn(t, e, i, n), o.state = t.memoizedState), "function" == typeof e.getDerivedStateFromProps || "function" == typeof o.getSnapshotBeforeUpdate || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || (e = o.state, "function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), e !== o.state && xn.enqueueReplaceState(o, o.state, null), bn(t, n, o, r), o.state = t.memoizedState), "function" == typeof o.componentDidMount && (t.flags |= 4) } var Tn = Array.isArray;

                function En(t, e, n) { if (null !== (t = n.ref) && "function" != typeof t && "object" != typeof t) { if (n._owner) { if (n = n._owner) { if (1 !== n.tag) throw Error(u(309)); var r = n.stateNode } if (!r) throw Error(u(147, t)); var o = "" + t; return null !== e && null !== e.ref && "function" == typeof e.ref && e.ref._stringRef === o ? e.ref : (e = function(t) { var e = r.refs;
                                e === wn && (e = r.refs = {}), null === t ? delete e[o] : e[o] = t }, e._stringRef = o, e) } if ("string" != typeof t) throw Error(u(284)); if (!n._owner) throw Error(u(290, t)) } return t }

                function Pn(t, e) { if ("textarea" !== t.type) throw Error(u(31, "[object Object]" === Object.prototype.toString.call(e) ? "object with keys {" + Object.keys(e).join(", ") + "}" : e)) }

                function Zn(t) {
                    function e(e, n) { if (t) { var r = e.lastEffect;
                            null !== r ? (r.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n, n.nextEffect = null, n.flags = 8 } }

                    function n(n, r) { if (!t) return null; for (; null !== r;) e(n, r), r = r.sibling; return null }

                    function r(t, e) { for (t = new Map; null !== e;) null !== e.key ? t.set(e.key, e) : t.set(e.index, e), e = e.sibling; return t }

                    function o(t, e) { return (t = Oa(t, e)).index = 0, t.sibling = null, t }

                    function i(e, n, r) { return e.index = r, t ? null !== (r = e.alternate) ? (r = r.index) < n ? (e.flags = 2, n) : r : (e.flags = 2, n) : n }

                    function a(e) { return t && null === e.alternate && (e.flags = 2), e }

                    function s(t, e, n, r) { return null === e || 6 !== e.tag ? ((e = Ta(n, t.mode, r)).return = t, e) : ((e = o(e, n)).return = t, e) }

                    function h(t, e, n, r) { return null !== e && e.elementType === n.type ? ((r = o(e, n.props)).ref = En(t, e, n), r.return = t, r) : ((r = Sa(n.type, n.key, n.props, null, t.mode, r)).ref = En(t, e, n), r.return = t, r) }

                    function p(t, e, n, r) { return null === e || 4 !== e.tag || e.stateNode.containerInfo !== n.containerInfo || e.stateNode.implementation !== n.implementation ? ((e = Ea(n, t.mode, r)).return = t, e) : ((e = o(e, n.children || [])).return = t, e) }

                    function d(t, e, n, r, i) { return null === e || 7 !== e.tag ? ((e = Ca(n, t.mode, r, i)).return = t, e) : ((e = o(e, n)).return = t, e) }

                    function v(t, e, n) { if ("string" == typeof e || "number" == typeof e) return (e = Ta("" + e, t.mode, n)).return = t, e; if ("object" == typeof e && null !== e) { switch (e.$$typeof) {
                                case c:
                                    return (n = Sa(e.type, e.key, e.props, null, t.mode, n)).ref = En(t, null, e), n.return = t, n;
                                case l:
                                    return (e = Ea(e, t.mode, n)).return = t, e } if (Tn(e) || A(e)) return (e = Ca(e, t.mode, n, null)).return = t, e;
                            Pn(t, e) } return null }

                    function m(t, e, n, r) { var o = null !== e ? e.key : null; if ("string" == typeof n || "number" == typeof n) return null !== o ? null : s(t, e, "" + n, r); if ("object" == typeof n && null !== n) { switch (n.$$typeof) {
                                case c:
                                    return n.key === o ? n.type === f ? d(t, e, n.props.children, r, o) : h(t, e, n, r) : null;
                                case l:
                                    return n.key === o ? p(t, e, n, r) : null } if (Tn(n) || A(n)) return null !== o ? null : d(t, e, n, r, null);
                            Pn(t, n) } return null }

                    function g(t, e, n, r, o) { if ("string" == typeof r || "number" == typeof r) return s(e, t = t.get(n) || null, "" + r, o); if ("object" == typeof r && null !== r) { switch (r.$$typeof) {
                                case c:
                                    return t = t.get(null === r.key ? n : r.key) || null, r.type === f ? d(e, t, r.props.children, o, r.key) : h(e, t, r, o);
                                case l:
                                    return p(e, t = t.get(null === r.key ? n : r.key) || null, r, o) } if (Tn(r) || A(r)) return d(e, t = t.get(n) || null, r, o, null);
                            Pn(e, r) } return null }

                    function y(o, a, u, s) { for (var c = null, l = null, f = a, h = a = 0, p = null; null !== f && h < u.length; h++) { f.index > h ? (p = f, f = null) : p = f.sibling; var d = m(o, f, u[h], s); if (null === d) { null === f && (f = p); break }
                            t && f && null === d.alternate && e(o, f), a = i(d, a, h), null === l ? c = d : l.sibling = d, l = d, f = p } if (h === u.length) return n(o, f), c; if (null === f) { for (; h < u.length; h++) null !== (f = v(o, u[h], s)) && (a = i(f, a, h), null === l ? c = f : l.sibling = f, l = f); return c } for (f = r(o, f); h < u.length; h++) null !== (p = g(f, o, h, u[h], s)) && (t && null !== p.alternate && f.delete(null === p.key ? h : p.key), a = i(p, a, h), null === l ? c = p : l.sibling = p, l = p); return t && f.forEach((function(t) { return e(o, t) })), c }

                    function b(o, a, s, c) { var l = A(s); if ("function" != typeof l) throw Error(u(150)); if (null == (s = l.call(s))) throw Error(u(151)); for (var f = l = null, h = a, p = a = 0, d = null, y = s.next(); null !== h && !y.done; p++, y = s.next()) { h.index > p ? (d = h, h = null) : d = h.sibling; var b = m(o, h, y.value, c); if (null === b) { null === h && (h = d); break }
                            t && h && null === b.alternate && e(o, h), a = i(b, a, p), null === f ? l = b : f.sibling = b, f = b, h = d } if (y.done) return n(o, h), l; if (null === h) { for (; !y.done; p++, y = s.next()) null !== (y = v(o, y.value, c)) && (a = i(y, a, p), null === f ? l = y : f.sibling = y, f = y); return l } for (h = r(o, h); !y.done; p++, y = s.next()) null !== (y = g(h, o, p, y.value, c)) && (t && null !== y.alternate && h.delete(null === y.key ? p : y.key), a = i(y, a, p), null === f ? l = y : f.sibling = y, f = y); return t && h.forEach((function(t) { return e(o, t) })), l } return function(t, r, i, s) { var h = "object" == typeof i && null !== i && i.type === f && null === i.key;
                        h && (i = i.props.children); var p = "object" == typeof i && null !== i; if (p) switch (i.$$typeof) {
                            case c:
                                t: { for (p = i.key, h = r; null !== h;) { if (h.key === p) { if (7 === h.tag) { if (i.type === f) { n(t, h.sibling), (r = o(h, i.props.children)).return = t, t = r; break t } } else if (h.elementType === i.type) { n(t, h.sibling), (r = o(h, i.props)).ref = En(t, h, i), r.return = t, t = r; break t }
                                            n(t, h); break }
                                        e(t, h), h = h.sibling }
                                    i.type === f ? ((r = Ca(i.props.children, t.mode, s, i.key)).return = t, t = r) : ((s = Sa(i.type, i.key, i.props, null, t.mode, s)).ref = En(t, r, i), s.return = t, t = s) }
                                return a(t);
                            case l:
                                t: { for (h = i.key; null !== r;) { if (r.key === h) { if (4 === r.tag && r.stateNode.containerInfo === i.containerInfo && r.stateNode.implementation === i.implementation) { n(t, r.sibling), (r = o(r, i.children || [])).return = t, t = r; break t }
                                            n(t, r); break }
                                        e(t, r), r = r.sibling }(r = Ea(i, t.mode, s)).return = t, t = r }
                                return a(t) }
                        if ("string" == typeof i || "number" == typeof i) return i = "" + i, null !== r && 6 === r.tag ? (n(t, r.sibling), (r = o(r, i)).return = t, t = r) : (n(t, r), (r = Ta(i, t.mode, s)).return = t, t = r), a(t); if (Tn(i)) return y(t, r, i, s); if (A(i)) return b(t, r, i, s); if (p && Pn(t, i), void 0 === i && !h) switch (t.tag) {
                            case 1:
                            case 22:
                            case 0:
                            case 11:
                            case 15:
                                throw Error(u(152, T(t.type) || "Component")) }
                        return n(t, r) } } var Rn = Zn(!0),
                    Dn = Zn(!1),
                    jn = {},
                    Mn = $t(jn),
                    In = $t(jn),
                    Nn = $t(jn);

                function Bn(t) { if (t === jn) throw Error(u(174)); return t }

                function Fn(t, e) { Kt(Nn, e), Kt(In, t), Kt(Mn, jn), t = I(e), Jt(Mn), Kt(Mn, t) }

                function Ln() { Jt(Mn), Jt(In), Jt(Nn) }

                function Vn(t) { var e = Bn(Nn.current),
                        n = Bn(Mn.current);
                    n !== (e = N(n, t.type, e)) && (Kt(In, t), Kt(Mn, e)) }

                function zn(t) { In.current === t && (Jt(Mn), Jt(In)) } var Un = $t(0);

                function qn(t) { for (var e = t; null !== e;) { if (13 === e.tag) { var n = e.memoizedState; if (null !== n && (null === (n = n.dehydrated) || Nt(n) || Bt(n))) return e } else if (19 === e.tag && void 0 !== e.memoizedProps.revealOrder) { if (0 != (64 & e.flags)) return e } else if (null !== e.child) { e.child.return = e, e = e.child; continue } if (e === t) break; for (; null === e.sibling;) { if (null === e.return || e.return === t) return null;
                            e = e.return }
                        e.sibling.return = e.return, e = e.sibling } return null } var Wn = null,
                    Gn = null,
                    Hn = !1;

                function Yn(t, e) { var n = ka(5, null, null, 0);
                    n.elementType = "DELETED", n.type = "DELETED", n.stateNode = e, n.return = t, n.flags = 8, null !== t.lastEffect ? (t.lastEffect.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n }

                function Xn(t, e) { switch (t.tag) {
                        case 5:
                            return null !== (e = Mt(e, t.type, t.pendingProps)) && (t.stateNode = e, !0);
                        case 6:
                            return null !== (e = It(e, t.pendingProps)) && (t.stateNode = e, !0);
                        default:
                            return !1 } }

                function Qn(t) { if (Hn) { var e = Gn; if (e) { var n = e; if (!Xn(t, e)) { if (!(e = Ft(n)) || !Xn(t, e)) return t.flags = -1025 & t.flags | 2, Hn = !1, void(Wn = t);
                                Yn(Wn, n) }
                            Wn = t, Gn = Lt(e) } else t.flags = -1025 & t.flags | 2, Hn = !1, Wn = t } }

                function $n(t) { for (t = t.return; null !== t && 5 !== t.tag && 3 !== t.tag && 13 !== t.tag;) t = t.return;
                    Wn = t }

                function Jn(t) { if (!J || t !== Wn) return !1; if (!Hn) return $n(t), Hn = !0, !1; var e = t.type; if (5 !== t.tag || "head" !== e && "body" !== e && !q(e, t.memoizedProps))
                        for (e = Gn; e;) Yn(t, e), e = Ft(e); if ($n(t), 13 === t.tag) { if (!J) throw Error(u(316)); if (!(t = null !== (t = t.memoizedState) ? t.dehydrated : null)) throw Error(u(317));
                        Gn = Ut(t) } else Gn = Wn ? Ft(t.stateNode) : null; return !0 }

                function Kn() { J && (Gn = Wn = null, Hn = !1) } var tr = [];

                function er() { for (var t = 0; t < tr.length; t++) { var e = tr[t];
                        X ? e._workInProgressVersionPrimary = null : e._workInProgressVersionSecondary = null }
                    tr.length = 0 } var nr = s.ReactCurrentDispatcher,
                    rr = s.ReactCurrentBatchConfig,
                    or = 0,
                    ir = null,
                    ar = null,
                    ur = null,
                    sr = !1,
                    cr = !1;

                function lr() { throw Error(u(321)) }

                function fr(t, e) { if (null === e) return !1; for (var n = 0; n < e.length && n < t.length; n++)
                        if (!$e(t[n], e[n])) return !1;
                    return !0 }

                function hr(t, e, n, r, o, i) { if (or = i, ir = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, nr.current = null === t || null === t.memoizedState ? Br : Fr, t = n(r, o), cr) { i = 0;
                        do { if (cr = !1, !(25 > i)) throw Error(u(301));
                            i += 1, ur = ar = null, e.updateQueue = null, nr.current = Lr, t = n(r, o) } while (cr) } if (nr.current = Nr, e = null !== ar && null !== ar.next, or = 0, ur = ar = ir = null, sr = !1, e) throw Error(u(300)); return t }

                function pr() { var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return null === ur ? ir.memoizedState = ur = t : ur = ur.next = t, ur }

                function dr() { if (null === ar) { var t = ir.alternate;
                        t = null !== t ? t.memoizedState : null } else t = ar.next; var e = null === ur ? ir.memoizedState : ur.next; if (null !== e) ur = e, ar = t;
                    else { if (null === t) throw Error(u(310));
                        t = { memoizedState: (ar = t).memoizedState, baseState: ar.baseState, baseQueue: ar.baseQueue, queue: ar.queue, next: null }, null === ur ? ir.memoizedState = ur = t : ur = ur.next = t } return ur }

                function vr(t, e) { return "function" == typeof e ? e(t) : e }

                function mr(t) { var e = dr(),
                        n = e.queue; if (null === n) throw Error(u(311));
                    n.lastRenderedReducer = t; var r = ar,
                        o = r.baseQueue,
                        i = n.pending; if (null !== i) { if (null !== o) { var a = o.next;
                            o.next = i.next, i.next = a }
                        r.baseQueue = o = i, n.pending = null } if (null !== o) { o = o.next, r = r.baseState; var s = a = i = null,
                            c = o;
                        do { var l = c.lane; if ((or & l) === l) null !== s && (s = s.next = { lane: 0, action: c.action, eagerReducer: c.eagerReducer, eagerState: c.eagerState, next: null }), r = c.eagerReducer === t ? c.eagerState : t(r, c.action);
                            else { var f = { lane: l, action: c.action, eagerReducer: c.eagerReducer, eagerState: c.eagerState, next: null };
                                null === s ? (a = s = f, i = r) : s = s.next = f, ir.lanes |= l, hi |= l }
                            c = c.next } while (null !== c && c !== o);
                        null === s ? i = r : s.next = a, $e(r, e.memoizedState) || (zr = !0), e.memoizedState = r, e.baseState = i, e.baseQueue = s, n.lastRenderedState = r } return [e.memoizedState, n.dispatch] }

                function gr(t) { var e = dr(),
                        n = e.queue; if (null === n) throw Error(u(311));
                    n.lastRenderedReducer = t; var r = n.dispatch,
                        o = n.pending,
                        i = e.memoizedState; if (null !== o) { n.pending = null; var a = o = o.next;
                        do { i = t(i, a.action), a = a.next } while (a !== o);
                        $e(i, e.memoizedState) || (zr = !0), e.memoizedState = i, null === e.baseQueue && (e.baseState = i), n.lastRenderedState = i } return [i, r] }

                function yr(t, e, n) { var r = e._getVersion;
                    r = r(e._source); var o = X ? e._workInProgressVersionPrimary : e._workInProgressVersionSecondary; if (null !== o ? t = o === r : (t = t.mutableReadLanes, (t = (or & t) === t) && (X ? e._workInProgressVersionPrimary = r : e._workInProgressVersionSecondary = r, tr.push(e))), t) return n(e._source); throw tr.push(e), Error(u(350)) }

                function br(t, e, n, r) { var o = oi; if (null === o) throw Error(u(349)); var i = e._getVersion,
                        a = i(e._source),
                        s = nr.current,
                        c = s.useState((function() { return yr(o, e, n) })),
                        l = c[1],
                        f = c[0];
                    c = ur; var h = t.memoizedState,
                        p = h.refs,
                        d = p.getSnapshot,
                        v = h.source;
                    h = h.subscribe; var m = ir; return t.memoizedState = { refs: p, source: e, subscribe: r }, s.useEffect((function() { p.getSnapshot = n, p.setSnapshot = l; var t = i(e._source); if (!$e(a, t)) { t = n(e._source), $e(f, t) || (l(t), t = Bi(m), o.mutableReadLanes |= t & o.pendingLanes), t = o.mutableReadLanes, o.entangledLanes |= t; for (var r = o.entanglements, u = t; 0 < u;) { var s = 31 - ke(u),
                                    c = 1 << s;
                                r[s] |= t, u &= ~c } } }), [n, e, r]), s.useEffect((function() { return r(e._source, (function() { var t = p.getSnapshot,
                                n = p.setSnapshot; try { n(t(e._source)); var r = Bi(m);
                                o.mutableReadLanes |= r & o.pendingLanes } catch (i) { n((function() { throw i })) } })) }), [e, r]), $e(d, n) && $e(v, e) && $e(h, r) || ((t = { pending: null, dispatch: null, lastRenderedReducer: vr, lastRenderedState: f }).dispatch = l = Ir.bind(null, ir, t), c.queue = t, c.baseQueue = null, f = yr(o, e, n), c.memoizedState = c.baseState = f), f }

                function _r(t, e, n) { return br(dr(), t, e, n) }

                function wr(t) { var e = pr(); return "function" == typeof t && (t = t()), e.memoizedState = e.baseState = t, t = (t = e.queue = { pending: null, dispatch: null, lastRenderedReducer: vr, lastRenderedState: t }).dispatch = Ir.bind(null, ir, t), [e.memoizedState, t] }

                function kr(t, e, n, r) { return t = { tag: t, create: e, destroy: n, deps: r, next: null }, null === (e = ir.updateQueue) ? (e = { lastEffect: null }, ir.updateQueue = e, e.lastEffect = t.next = t) : null === (n = e.lastEffect) ? e.lastEffect = t.next = t : (r = n.next, n.next = t, t.next = r, e.lastEffect = t), t }

                function xr(t) { return t = { current: t }, pr().memoizedState = t }

                function Or() { return dr().memoizedState }

                function Sr(t, e, n, r) { var o = pr();
                    ir.flags |= t, o.memoizedState = kr(1 | e, n, void 0, void 0 === r ? null : r) }

                function Cr(t, e, n, r) { var o = dr();
                    r = void 0 === r ? null : r; var i = void 0; if (null !== ar) { var a = ar.memoizedState; if (i = a.destroy, null !== r && fr(r, a.deps)) return void kr(e, n, i, r) }
                    ir.flags |= t, o.memoizedState = kr(1 | e, n, i, r) }

                function Ar(t, e) { return Sr(516, 4, t, e) }

                function Tr(t, e) { return Cr(516, 4, t, e) }

                function Er(t, e) { return Cr(4, 2, t, e) }

                function Pr(t, e) { return "function" == typeof e ? (t = t(), e(t), function() { e(null) }) : null != e ? (t = t(), e.current = t, function() { e.current = null }) : void 0 }

                function Zr(t, e, n) { return n = null != n ? n.concat([t]) : null, Cr(4, 2, Pr.bind(null, e, t), n) }

                function Rr() {}

                function Dr(t, e) { var n = dr();
                    e = void 0 === e ? null : e; var r = n.memoizedState; return null !== r && null !== e && fr(e, r[1]) ? r[0] : (n.memoizedState = [t, e], t) }

                function jr(t, e) { var n = dr();
                    e = void 0 === e ? null : e; var r = n.memoizedState; return null !== r && null !== e && fr(e, r[1]) ? r[0] : (t = t(), n.memoizedState = [t, e], t) }

                function Mr(t, e) { var n = qe();
                    Ge(98 > n ? 98 : n, (function() { t(!0) })), Ge(97 < n ? 97 : n, (function() { var n = rr.transition;
                        rr.transition = 1; try { t(!1), e() } finally { rr.transition = n } })) }

                function Ir(t, e, n) { var r = Ni(),
                        o = Bi(t),
                        i = { lane: o, action: n, eagerReducer: null, eagerState: null, next: null },
                        a = e.pending; if (null === a ? i.next = i : (i.next = a.next, a.next = i), e.pending = i, a = t.alternate, t === ir || null !== a && a === ir) cr = sr = !0;
                    else { if (0 === t.lanes && (null === a || 0 === a.lanes) && null !== (a = e.lastRenderedReducer)) try { var u = e.lastRenderedState,
                                s = a(u, n); if (i.eagerReducer = a, i.eagerState = s, $e(s, u)) return } catch (c) {}
                        Fi(t, o, r) } } var Nr = { readContext: hn, useCallback: lr, useContext: lr, useEffect: lr, useImperativeHandle: lr, useLayoutEffect: lr, useMemo: lr, useReducer: lr, useRef: lr, useState: lr, useDebugValue: lr, useDeferredValue: lr, useTransition: lr, useMutableSource: lr, useOpaqueIdentifier: lr, unstable_isNewReconciler: !1 },
                    Br = { readContext: hn, useCallback: function(t, e) { return pr().memoizedState = [t, void 0 === e ? null : e], t }, useContext: hn, useEffect: Ar, useImperativeHandle: function(t, e, n) { return n = null != n ? n.concat([t]) : null, Sr(4, 2, Pr.bind(null, e, t), n) }, useLayoutEffect: function(t, e) { return Sr(4, 2, t, e) }, useMemo: function(t, e) { var n = pr(); return e = void 0 === e ? null : e, t = t(), n.memoizedState = [t, e], t }, useReducer: function(t, e, n) { var r = pr(); return e = void 0 !== n ? n(e) : e, r.memoizedState = r.baseState = e, t = (t = r.queue = { pending: null, dispatch: null, lastRenderedReducer: t, lastRenderedState: e }).dispatch = Ir.bind(null, ir, t), [r.memoizedState, t] }, useRef: xr, useState: wr, useDebugValue: Rr, useDeferredValue: function(t) { var e = wr(t),
                                n = e[0],
                                r = e[1]; return Ar((function() { var e = rr.transition;
                                rr.transition = 1; try { r(t) } finally { rr.transition = e } }), [t]), n }, useTransition: function() { var t = wr(!1),
                                e = t[0]; return xr(t = Mr.bind(null, t[1])), [t, e] }, useMutableSource: function(t, e, n) { var r = pr(); return r.memoizedState = { refs: { getSnapshot: e, setSnapshot: null }, source: t, subscribe: n }, br(r, t, e, n) }, useOpaqueIdentifier: function() { if (Hn) { var t = !1,
                                    e = tt((function() { throw t || (t = !0, n(et())), Error(u(355)) })),
                                    n = wr(e)[1]; return 0 == (2 & ir.mode) && (ir.flags |= 516, kr(5, (function() { n(et()) }), void 0, null)), e } return wr(e = et()), e }, unstable_isNewReconciler: !1 },
                    Fr = { readContext: hn, useCallback: Dr, useContext: hn, useEffect: Tr, useImperativeHandle: Zr, useLayoutEffect: Er, useMemo: jr, useReducer: mr, useRef: Or, useState: function() { return mr(vr) }, useDebugValue: Rr, useDeferredValue: function(t) { var e = mr(vr),
                                n = e[0],
                                r = e[1]; return Tr((function() { var e = rr.transition;
                                rr.transition = 1; try { r(t) } finally { rr.transition = e } }), [t]), n }, useTransition: function() { var t = mr(vr)[0]; return [Or().current, t] }, useMutableSource: _r, useOpaqueIdentifier: function() { return mr(vr)[0] }, unstable_isNewReconciler: !1 },
                    Lr = { readContext: hn, useCallback: Dr, useContext: hn, useEffect: Tr, useImperativeHandle: Zr, useLayoutEffect: Er, useMemo: jr, useReducer: gr, useRef: Or, useState: function() { return gr(vr) }, useDebugValue: Rr, useDeferredValue: function(t) { var e = gr(vr),
                                n = e[0],
                                r = e[1]; return Tr((function() { var e = rr.transition;
                                rr.transition = 1; try { r(t) } finally { rr.transition = e } }), [t]), n }, useTransition: function() { var t = gr(vr)[0]; return [Or().current, t] }, useMutableSource: _r, useOpaqueIdentifier: function() { return gr(vr)[0] }, unstable_isNewReconciler: !1 },
                    Vr = s.ReactCurrentOwner,
                    zr = !1;

                function Ur(t, e, n, r) { e.child = null === t ? Dn(e, null, n, r) : Rn(e, t.child, n, r) }

                function qr(t, e, n, r, o) { n = n.render; var i = e.ref; return fn(e, o), r = hr(t, e, n, r, i, o), null === t || zr ? (e.flags |= 1, Ur(t, e, r, o), e.child) : (e.updateQueue = t.updateQueue, e.flags &= -517, t.lanes &= ~o, fo(t, e, o)) }

                function Wr(t, e, n, r, o, i) { if (null === t) { var a = n.type; return "function" != typeof a || xa(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((t = Sa(n.type, null, r, e, e.mode, i)).ref = e.ref, t.return = e, e.child = t) : (e.tag = 15, e.type = a, Gr(t, e, a, r, o, i)) } return a = t.child, 0 == (o & i) && (o = a.memoizedProps, (n = null !== (n = n.compare) ? n : Ke)(o, r) && t.ref === e.ref) ? fo(t, e, i) : (e.flags |= 1, (t = Oa(a, r)).ref = e.ref, t.return = e, e.child = t) }

                function Gr(t, e, n, r, o, i) { if (null !== t && Ke(t.memoizedProps, r) && t.ref === e.ref) { if (zr = !1, 0 == (i & o)) return e.lanes = t.lanes, fo(t, e, i);
                        0 != (16384 & t.flags) && (zr = !0) } return Xr(t, e, n, r, i) }

                function Hr(t, e, n) { var r = e.pendingProps,
                        o = r.children,
                        i = null !== t ? t.memoizedState : null; if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
                        if (0 == (4 & e.mode)) e.memoizedState = { baseLanes: 0 }, Hi(e, n);
                        else { if (0 == (1073741824 & n)) return t = null !== i ? i.baseLanes | n : n, e.lanes = e.childLanes = 1073741824, e.memoizedState = { baseLanes: t }, Hi(e, t), null;
                            e.memoizedState = { baseLanes: 0 }, Hi(e, null !== i ? i.baseLanes : n) }
                    else null !== i ? (r = i.baseLanes | n, e.memoizedState = null) : r = n, Hi(e, r); return Ur(t, e, o, n), e.child }

                function Yr(t, e) { var n = e.ref;
                    (null === t && null !== n || null !== t && t.ref !== n) && (e.flags |= 128) }

                function Xr(t, e, n, r, o) { var i = ie(n) ? re : ee.current; return i = oe(e, i), fn(e, o), n = hr(t, e, n, r, i, o), null === t || zr ? (e.flags |= 1, Ur(t, e, n, o), e.child) : (e.updateQueue = t.updateQueue, e.flags &= -517, t.lanes &= ~o, fo(t, e, o)) }

                function Qr(t, e, n, r, o) { if (ie(n)) { var i = !0;
                        ce(e) } else i = !1; if (fn(e, o), null === e.stateNode) null !== t && (t.alternate = null, e.alternate = null, e.flags |= 2), Sn(e, n, r), An(e, n, r, o), r = !0;
                    else if (null === t) { var a = e.stateNode,
                            u = e.memoizedProps;
                        a.props = u; var s = a.context,
                            c = n.contextType; "object" == typeof c && null !== c ? c = hn(c) : c = oe(e, c = ie(n) ? re : ee.current); var l = n.getDerivedStateFromProps,
                            f = "function" == typeof l || "function" == typeof a.getSnapshotBeforeUpdate;
                        f || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (u !== r || s !== c) && Cn(e, a, r, c), pn = !1; var h = e.memoizedState;
                        a.state = h, bn(e, r, a, o), s = e.memoizedState, u !== r || h !== s || ne.current || pn ? ("function" == typeof l && (kn(e, n, l, r), s = e.memoizedState), (u = pn || On(e, n, u, r, h, s, c)) ? (f || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || ("function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()), "function" == typeof a.componentDidMount && (e.flags |= 4)) : ("function" == typeof a.componentDidMount && (e.flags |= 4), e.memoizedProps = r, e.memoizedState = s), a.props = r, a.state = s, a.context = c, r = u) : ("function" == typeof a.componentDidMount && (e.flags |= 4), r = !1) } else { a = e.stateNode, vn(t, e), u = e.memoizedProps, c = e.type === e.elementType ? u : en(e.type, u), a.props = c, f = e.pendingProps, h = a.context, "object" == typeof(s = n.contextType) && null !== s ? s = hn(s) : s = oe(e, s = ie(n) ? re : ee.current); var p = n.getDerivedStateFromProps;
                        (l = "function" == typeof p || "function" == typeof a.getSnapshotBeforeUpdate) || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (u !== f || h !== s) && Cn(e, a, r, s), pn = !1, h = e.memoizedState, a.state = h, bn(e, r, a, o); var d = e.memoizedState;
                        u !== f || h !== d || ne.current || pn ? ("function" == typeof p && (kn(e, n, p, r), d = e.memoizedState), (c = pn || On(e, n, c, r, h, d, s)) ? (l || "function" != typeof a.UNSAFE_componentWillUpdate && "function" != typeof a.componentWillUpdate || ("function" == typeof a.componentWillUpdate && a.componentWillUpdate(r, d, s), "function" == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, d, s)), "function" == typeof a.componentDidUpdate && (e.flags |= 4), "function" == typeof a.getSnapshotBeforeUpdate && (e.flags |= 256)) : ("function" != typeof a.componentDidUpdate || u === t.memoizedProps && h === t.memoizedState || (e.flags |= 4), "function" != typeof a.getSnapshotBeforeUpdate || u === t.memoizedProps && h === t.memoizedState || (e.flags |= 256), e.memoizedProps = r, e.memoizedState = d), a.props = r, a.state = d, a.context = s, r = c) : ("function" != typeof a.componentDidUpdate || u === t.memoizedProps && h === t.memoizedState || (e.flags |= 4), "function" != typeof a.getSnapshotBeforeUpdate || u === t.memoizedProps && h === t.memoizedState || (e.flags |= 256), r = !1) } return $r(t, e, n, r, i, o) }

                function $r(t, e, n, r, o, i) { Yr(t, e); var a = 0 != (64 & e.flags); if (!r && !a) return o && le(e, n, !1), fo(t, e, i);
                    r = e.stateNode, Vr.current = e; var u = a && "function" != typeof n.getDerivedStateFromError ? null : r.render(); return e.flags |= 1, null !== t && a ? (e.child = Rn(e, t.child, null, i), e.child = Rn(e, null, u, i)) : Ur(t, e, u, i), e.memoizedState = r.state, o && le(e, n, !0), e.child }

                function Jr(t) { var e = t.stateNode;
                    e.pendingContext ? ue(0, e.pendingContext, e.pendingContext !== e.context) : e.context && ue(0, e.context, !1), Fn(t, e.containerInfo) } var Kr, to, eo, no, ro = { dehydrated: null, retryLane: 0 };

                function oo(t, e, n) { var r, o = e.pendingProps,
                        i = Un.current,
                        a = !1; return (r = 0 != (64 & e.flags)) || (r = (null === t || null !== t.memoizedState) && 0 != (2 & i)), r ? (a = !0, e.flags &= -65) : null !== t && null === t.memoizedState || void 0 === o.fallback || !0 === o.unstable_avoidThisFallback || (i |= 1), Kt(Un, 1 & i), null === t ? (void 0 !== o.fallback && Qn(e), t = o.children, i = o.fallback, a ? (t = io(e, t, i, n), e.child.memoizedState = { baseLanes: n }, e.memoizedState = ro, t) : "number" == typeof o.unstable_expectedLoadTime ? (t = io(e, t, i, n), e.child.memoizedState = { baseLanes: n }, e.memoizedState = ro, e.lanes = 33554432, t) : ((n = Aa({ mode: "visible", children: t }, e.mode, n, null)).return = e, e.child = n)) : (t.memoizedState, a ? (o = uo(t, e, o.children, o.fallback, n), a = e.child, i = t.child.memoizedState, a.memoizedState = null === i ? { baseLanes: n } : { baseLanes: i.baseLanes | n }, a.childLanes = t.childLanes & ~n, e.memoizedState = ro, o) : (n = ao(t, e, o.children, n), e.memoizedState = null, n)) }

                function io(t, e, n, r) { var o = t.mode,
                        i = t.child; return e = { mode: "hidden", children: e }, 0 == (2 & o) && null !== i ? (i.childLanes = 0, i.pendingProps = e) : i = Aa(e, o, 0, null), n = Ca(n, o, r, null), i.return = t, n.return = t, i.sibling = n, t.child = i, n }

                function ao(t, e, n, r) { var o = t.child; return t = o.sibling, n = Oa(o, { mode: "visible", children: n }), 0 == (2 & e.mode) && (n.lanes = r), n.return = e, n.sibling = null, null !== t && (t.nextEffect = null, t.flags = 8, e.firstEffect = e.lastEffect = t), e.child = n }

                function uo(t, e, n, r, o) { var i = e.mode,
                        a = t.child;
                    t = a.sibling; var u = { mode: "hidden", children: n }; return 0 == (2 & i) && e.child !== a ? ((n = e.child).childLanes = 0, n.pendingProps = u, null !== (a = n.lastEffect) ? (e.firstEffect = n.firstEffect, e.lastEffect = a, a.nextEffect = null) : e.firstEffect = e.lastEffect = null) : n = Oa(a, u), null !== t ? r = Oa(t, r) : (r = Ca(r, i, o, null)).flags |= 2, r.return = e, n.return = e, n.sibling = r, e.child = n, r }

                function so(t, e) { t.lanes |= e; var n = t.alternate;
                    null !== n && (n.lanes |= e), ln(t.return, e) }

                function co(t, e, n, r, o, i) { var a = t.memoizedState;
                    null === a ? t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o, lastEffect: i } : (a.isBackwards = e, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = o, a.lastEffect = i) }

                function lo(t, e, n) { var r = e.pendingProps,
                        o = r.revealOrder,
                        i = r.tail; if (Ur(t, e, r.children, n), 0 != (2 & (r = Un.current))) r = 1 & r | 2, e.flags |= 64;
                    else { if (null !== t && 0 != (64 & t.flags)) t: for (t = e.child; null !== t;) { if (13 === t.tag) null !== t.memoizedState && so(t, n);
                            else if (19 === t.tag) so(t, n);
                            else if (null !== t.child) { t.child.return = t, t = t.child; continue } if (t === e) break t; for (; null === t.sibling;) { if (null === t.return || t.return === e) break t;
                                t = t.return }
                            t.sibling.return = t.return, t = t.sibling }
                        r &= 1 } if (Kt(Un, r), 0 == (2 & e.mode)) e.memoizedState = null;
                    else switch (o) {
                        case "forwards":
                            for (n = e.child, o = null; null !== n;) null !== (t = n.alternate) && null === qn(t) && (o = n), n = n.sibling;
                            null === (n = o) ? (o = e.child, e.child = null) : (o = n.sibling, n.sibling = null), co(e, !1, o, n, i, e.lastEffect); break;
                        case "backwards":
                            for (n = null, o = e.child, e.child = null; null !== o;) { if (null !== (t = o.alternate) && null === qn(t)) { e.child = o; break }
                                t = o.sibling, o.sibling = n, n = o, o = t }
                            co(e, !0, n, null, i, e.lastEffect); break;
                        case "together":
                            co(e, !1, null, null, void 0, e.lastEffect); break;
                        default:
                            e.memoizedState = null }
                    return e.child }

                function fo(t, e, n) { if (null !== t && (e.dependencies = t.dependencies), hi |= e.lanes, 0 != (n & e.childLanes)) { if (null !== t && e.child !== t.child) throw Error(u(153)); if (null !== e.child) { for (n = Oa(t = e.child, t.pendingProps), e.child = n, n.return = e; null !== t.sibling;) t = t.sibling, (n = n.sibling = Oa(t, t.pendingProps)).return = e;
                            n.sibling = null } return e.child } return null }

                function ho(t) { t.flags |= 4 } if (Q) Kr = function(t, e) { for (var n = e.child; null !== n;) { if (5 === n.tag || 6 === n.tag) V(t, n.stateNode);
                        else if (4 !== n.tag && null !== n.child) { n.child.return = n, n = n.child; continue } if (n === e) break; for (; null === n.sibling;) { if (null === n.return || n.return === e) return;
                            n = n.return }
                        n.sibling.return = n.return, n = n.sibling } }, to = function() {}, eo = function(t, e, n, r, o) { if ((t = t.memoizedProps) !== r) { var i = e.stateNode,
                            a = Bn(Mn.current);
                        n = U(i, n, t, r, o, a), (e.updateQueue = n) && ho(e) } }, no = function(t, e, n, r) { n !== r && ho(e) };
                else if ($) { Kr = function(t, e, n, r) { for (var o = e.child; null !== o;) { if (5 === o.tag) { var i = o.stateNode;
                                n && r && (i = Dt(i, o.type, o.memoizedProps, o)), V(t, i) } else if (6 === o.tag) i = o.stateNode, n && r && (i = jt(i, o.memoizedProps, o)), V(t, i);
                            else if (4 !== o.tag) { if (13 === o.tag && 0 != (4 & o.flags) && (i = null !== o.memoizedState)) { var a = o.child; if (null !== a && (null !== a.child && (a.child.return = a, Kr(t, a, !0, i)), null !== (i = a.sibling))) { i.return = o, o = i; continue } } if (null !== o.child) { o.child.return = o, o = o.child; continue } } if (o === e) break; for (; null === o.sibling;) { if (null === o.return || o.return === e) return;
                                o = o.return }
                            o.sibling.return = o.return, o = o.sibling } }; var po = function t(e, n, r, o) { for (var i = n.child; null !== i;) { if (5 === i.tag) { var a = i.stateNode;
                                r && o && (a = Dt(a, i.type, i.memoizedProps, i)), Pt(e, a) } else if (6 === i.tag) a = i.stateNode, r && o && (a = jt(a, i.memoizedProps, i)), Pt(e, a);
                            else if (4 !== i.tag) { if (13 === i.tag && 0 != (4 & i.flags) && (a = null !== i.memoizedState)) { var u = i.child; if (null !== u && (null !== u.child && (u.child.return = u, t(e, u, !0, a)), null !== (a = u.sibling))) { a.return = i, i = a; continue } } if (null !== i.child) { i.child.return = i, i = i.child; continue } } if (i === n) break; for (; null === i.sibling;) { if (null === i.return || i.return === n) return;
                                i = i.return }
                            i.sibling.return = i.return, i = i.sibling } };
                    to = function(t) { var e = t.stateNode; if (null !== t.firstEffect) { var n = e.containerInfo,
                                r = Et(n);
                            po(r, t, !1, !1), e.pendingChildren = r, ho(t), Zt(n, r) } }, eo = function(t, e, n, r, o) { var i = t.stateNode,
                            a = t.memoizedProps; if ((t = null === e.firstEffect) && a === r) e.stateNode = i;
                        else { var u = e.stateNode,
                                s = Bn(Mn.current),
                                c = null;
                            a !== r && (c = U(u, n, a, r, o, s)), t && null === c ? e.stateNode = i : (i = Tt(i, c, n, a, r, e, t, u), z(i, n, r, o, s) && ho(e), e.stateNode = i, t ? ho(e) : Kr(i, e, !1, !1)) } }, no = function(t, e, n, r) { n !== r ? (t = Bn(Nn.current), n = Bn(Mn.current), e.stateNode = W(r, t, n, e), ho(e)) : e.stateNode = t.stateNode } } else to = function() {}, eo = function() {}, no = function() {};

                function vo(t, e) { if (!Hn) switch (t.tailMode) {
                        case "hidden":
                            e = t.tail; for (var n = null; null !== e;) null !== e.alternate && (n = e), e = e.sibling;
                            null === n ? t.tail = null : n.sibling = null; break;
                        case "collapsed":
                            n = t.tail; for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                            null === r ? e || null === t.tail ? t.tail = null : t.tail.sibling = null : r.sibling = null } }

                function mo(t, e, n) { var r = e.pendingProps; switch (e.tag) {
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
                            return null;
                        case 1:
                        case 17:
                            return ie(e.type) && ae(), null;
                        case 3:
                            return Ln(), Jt(ne), Jt(ee), er(), (r = e.stateNode).pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== t && null !== t.child || (Jn(e) ? ho(e) : r.hydrate || (e.flags |= 256)), to(e), null;
                        case 5:
                            zn(e); var o = Bn(Nn.current); if (n = e.type, null !== t && null != e.stateNode) eo(t, e, n, r, o), t.ref !== e.ref && (e.flags |= 128);
                            else { if (!r) { if (null === e.stateNode) throw Error(u(166)); return null } if (t = Bn(Mn.current), Jn(e)) { if (!J) throw Error(u(175));
                                    t = Vt(e.stateNode, e.type, e.memoizedProps, o, t, e), e.updateQueue = t, null !== t && ho(e) } else { var i = L(n, r, o, t, e);
                                    Kr(i, e, !1, !1), e.stateNode = i, z(i, n, r, o, t) && ho(e) }
                                null !== e.ref && (e.flags |= 128) } return null;
                        case 6:
                            if (t && null != e.stateNode) no(t, e, t.memoizedProps, r);
                            else { if ("string" != typeof r && null === e.stateNode) throw Error(u(166)); if (t = Bn(Nn.current), o = Bn(Mn.current), Jn(e)) { if (!J) throw Error(u(176));
                                    zt(e.stateNode, e.memoizedProps, e) && ho(e) } else e.stateNode = W(r, t, o, e) } return null;
                        case 13:
                            return Jt(Un), r = e.memoizedState, 0 != (64 & e.flags) ? (e.lanes = n, e) : (r = null !== r, o = !1, null === t ? void 0 !== e.memoizedProps.fallback && Jn(e) : o = null !== t.memoizedState, r && !o && 0 != (2 & e.mode) && (null === t && !0 !== e.memoizedProps.unstable_avoidThisFallback || 0 != (1 & Un.current) ? 0 === ci && (ci = 3) : (0 !== ci && 3 !== ci || (ci = 4), null === oi || 0 == (134217727 & hi) && 0 == (134217727 & pi) || Ui(oi, ai))), $ && r && (e.flags |= 4), Q && (r || o) && (e.flags |= 4), null);
                        case 4:
                            return Ln(), to(e), null === t && ot(e.stateNode.containerInfo), null;
                        case 10:
                            return cn(e), null;
                        case 19:
                            if (Jt(Un), null === (r = e.memoizedState)) return null; if (o = 0 != (64 & e.flags), null === (i = r.rendering))
                                if (o) vo(r, !1);
                                else { if (0 !== ci || null !== t && 0 != (64 & t.flags))
                                        for (t = e.child; null !== t;) { if (null !== (i = qn(t))) { for (e.flags |= 64, vo(r, !1), null !== (t = i.updateQueue) && (e.updateQueue = t, e.flags |= 4), null === r.lastEffect && (e.firstEffect = null), e.lastEffect = r.lastEffect, t = n, r = e.child; null !== r;) n = t, (o = r).flags &= 2, o.nextEffect = null, o.firstEffect = null, o.lastEffect = null, null === (i = o.alternate) ? (o.childLanes = 0, o.lanes = n, o.child = null, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, n = i.dependencies, o.dependencies = null === n ? null : { lanes: n.lanes, firstContext: n.firstContext }), r = r.sibling; return Kt(Un, 1 & Un.current | 2), e.child }
                                            t = t.sibling }
                                    null !== r.tail && Ue() > gi && (e.flags |= 64, o = !0, vo(r, !1), e.lanes = 33554432) }
                            else { if (!o)
                                    if (null !== (t = qn(i))) { if (e.flags |= 64, o = !0, null !== (t = t.updateQueue) && (e.updateQueue = t, e.flags |= 4), vo(r, !0), null === r.tail && "hidden" === r.tailMode && !i.alternate && !Hn) return null !== (e = e.lastEffect = r.lastEffect) && (e.nextEffect = null), null } else 2 * Ue() - r.renderingStartTime > gi && 1073741824 !== n && (e.flags |= 64, o = !0, vo(r, !1), e.lanes = 33554432);
                                r.isBackwards ? (i.sibling = e.child, e.child = i) : (null !== (t = r.last) ? t.sibling = i : e.child = i, r.last = i) } return null !== r.tail ? (t = r.tail, r.rendering = t, r.tail = t.sibling, r.lastEffect = e.lastEffect, r.renderingStartTime = Ue(), t.sibling = null, e = Un.current, Kt(Un, o ? 1 & e | 2 : 1 & e), t) : null;
                        case 23:
                        case 24:
                            return Yi(), null !== t && null !== t.memoizedState != (null !== e.memoizedState) && "unstable-defer-without-hiding" !== r.mode && (e.flags |= 4), null } throw Error(u(156, e.tag)) }

                function go(t) { switch (t.tag) {
                        case 1:
                            ie(t.type) && ae(); var e = t.flags; return 4096 & e ? (t.flags = -4097 & e | 64, t) : null;
                        case 3:
                            if (Ln(), Jt(ne), Jt(ee), er(), 0 != (64 & (e = t.flags))) throw Error(u(285)); return t.flags = -4097 & e | 64, t;
                        case 5:
                            return zn(t), null;
                        case 13:
                            return Jt(Un), 4096 & (e = t.flags) ? (t.flags = -4097 & e | 64, t) : null;
                        case 19:
                            return Jt(Un), null;
                        case 4:
                            return Ln(), null;
                        case 10:
                            return cn(t), null;
                        case 23:
                        case 24:
                            return Yi(), null;
                        default:
                            return null } }

                function yo(t, e) { try { var n = "",
                            r = e;
                        do { n += tn(r), r = r.return } while (r); var o = n } catch (i) { o = "\nError generating stack: " + i.message + "\n" + i.stack } return { value: t, source: e, stack: o } }

                function bo(t, e) { try { console.error(e.value) } catch (n) { setTimeout((function() { throw n })) } } var _o = "function" == typeof WeakMap ? WeakMap : Map;

                function wo(t, e, n) {
                    (n = mn(-1, n)).tag = 3, n.payload = { element: null }; var r = e.value; return n.callback = function() { wi || (wi = !0, ki = r), bo(0, e) }, n }

                function ko(t, e, n) {
                    (n = mn(-1, n)).tag = 3; var r = t.type.getDerivedStateFromError; if ("function" == typeof r) { var o = e.value;
                        n.payload = function() { return bo(0, e), r(o) } } var i = t.stateNode; return null !== i && "function" == typeof i.componentDidCatch && (n.callback = function() { "function" != typeof r && (null === xi ? xi = new Set([this]) : xi.add(this), bo(0, e)); var t = e.stack;
                        this.componentDidCatch(e.value, { componentStack: null !== t ? t : "" }) }), n } var xo = "function" == typeof WeakSet ? WeakSet : Set;

                function Oo(t) { var e = t.ref; if (null !== e)
                        if ("function" == typeof e) try { e(null) } catch (n) { fa(t, n) } else e.current = null }

                function So(t, e) { switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                        case 22:
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            return;
                        case 1:
                            if (256 & e.flags && null !== t) { var n = t.memoizedProps,
                                    r = t.memoizedState;
                                e = (t = e.stateNode).getSnapshotBeforeUpdate(e.elementType === e.type ? n : en(e.type, n), r), t.__reactInternalSnapshotBeforeUpdate = e } return;
                        case 3:
                            return void(Q && 256 & e.flags && At(e.stateNode.containerInfo)) } throw Error(u(163)) }

                function Co(t, e) { if (null !== (e = null !== (e = e.updateQueue) ? e.lastEffect : null)) { var n = e = e.next;
                        do { if ((n.tag & t) === t) { var r = n.destroy;
                                n.destroy = void 0, void 0 !== r && r() }
                            n = n.next } while (n !== e) } }

                function Ao(t, e, n) { switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                        case 22:
                            if (null !== (e = null !== (e = n.updateQueue) ? e.lastEffect : null)) { t = e = e.next;
                                do { if (3 == (3 & t.tag)) { var r = t.create;
                                        t.destroy = r() }
                                    t = t.next } while (t !== e) } if (null !== (e = null !== (e = n.updateQueue) ? e.lastEffect : null)) { t = e = e.next;
                                do { var o = t;
                                    r = o.next, 0 != (4 & (o = o.tag)) && 0 != (1 & o) && (sa(n, t), ua(n, t)), t = r } while (t !== e) } return;
                        case 1:
                            return t = n.stateNode, 4 & n.flags && (null === e ? t.componentDidMount() : (r = n.elementType === n.type ? e.memoizedProps : en(n.type, e.memoizedProps), t.componentDidUpdate(r, e.memoizedState, t.__reactInternalSnapshotBeforeUpdate))), void(null !== (e = n.updateQueue) && _n(n, e, t));
                        case 3:
                            if (null !== (e = n.updateQueue)) { if (t = null, null !== n.child) switch (n.child.tag) {
                                    case 5:
                                        t = M(n.child.stateNode); break;
                                    case 1:
                                        t = n.child.stateNode }
                                _n(n, e, t) } return;
                        case 5:
                            return t = n.stateNode, void(null === e && 4 & n.flags && mt(t, n.type, n.memoizedProps, n));
                        case 6:
                        case 4:
                        case 12:
                        case 19:
                        case 17:
                        case 20:
                        case 21:
                        case 23:
                        case 24:
                            return;
                        case 13:
                            return void(J && null === n.memoizedState && (n = n.alternate, null !== n && (n = n.memoizedState, null !== n && (n = n.dehydrated, null !== n && Wt(n))))) } throw Error(u(163)) }

                function To(t, e) { if (Q)
                        for (var n = t;;) { if (5 === n.tag) { var r = n.stateNode;
                                e ? xt(r) : St(n.stateNode, n.memoizedProps) } else if (6 === n.tag) r = n.stateNode, e ? Ot(r) : Ct(r, n.memoizedProps);
                            else if ((23 !== n.tag && 24 !== n.tag || null === n.memoizedState || n === t) && null !== n.child) { n.child.return = n, n = n.child; continue } if (n === t) break; for (; null === n.sibling;) { if (null === n.return || n.return === t) return;
                                n = n.return }
                            n.sibling.return = n.return, n = n.sibling } }

                function Eo(t, e) { if (he && "function" == typeof he.onCommitFiberUnmount) try { he.onCommitFiberUnmount(fe, e) } catch (i) {}
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                        case 22:
                            if (null !== (t = e.updateQueue) && null !== (t = t.lastEffect)) { var n = t = t.next;
                                do { var r = n,
                                        o = r.destroy; if (r = r.tag, void 0 !== o)
                                        if (0 != (4 & r)) sa(e, n);
                                        else { r = e; try { o() } catch (i) { fa(r, i) } }
                                    n = n.next } while (n !== t) } break;
                        case 1:
                            if (Oo(e), "function" == typeof(t = e.stateNode).componentWillUnmount) try { t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount() } catch (i) { fa(e, i) }
                            break;
                        case 5:
                            Oo(e); break;
                        case 4:
                            Q ? Io(t, e) : $ && $ && (e = e.stateNode.containerInfo, t = Et(e), Rt(e, t)) } }

                function Po(t, e) { for (var n = e;;)
                        if (Eo(t, n), null === n.child || Q && 4 === n.tag) { if (n === e) break; for (; null === n.sibling;) { if (null === n.return || n.return === e) return;
                                n = n.return }
                            n.sibling.return = n.return, n = n.sibling } else n.child.return = n, n = n.child }

                function Zo(t) { t.alternate = null, t.child = null, t.dependencies = null, t.firstEffect = null, t.lastEffect = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.return = null, t.updateQueue = null }

                function Ro(t) { return 5 === t.tag || 3 === t.tag || 4 === t.tag }

                function Do(t) { if (Q) { t: { for (var e = t.return; null !== e;) { if (Ro(e)) break t;
                                e = e.return } throw Error(u(160)) } var n = e; switch (e = n.stateNode, n.tag) {
                            case 5:
                                var r = !1; break;
                            case 3:
                            case 4:
                                e = e.containerInfo, r = !0; break;
                            default:
                                throw Error(u(161)) }
                        16 & n.flags && (kt(e), n.flags &= -17);t: e: for (n = t;;) { for (; null === n.sibling;) { if (null === n.return || Ro(n.return)) { n = null; break t }
                                n = n.return } for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) { if (2 & n.flags) continue e; if (null === n.child || 4 === n.tag) continue e;
                                n.child.return = n, n = n.child } if (!(2 & n.flags)) { n = n.stateNode; break t } }
                        r ? jo(t, n, e) : Mo(t, n, e) } }

                function jo(t, e, n) { var r = t.tag,
                        o = 5 === r || 6 === r; if (o) t = o ? t.stateNode : t.stateNode.instance, e ? bt(n, t, e) : dt(n, t);
                    else if (4 !== r && null !== (t = t.child))
                        for (jo(t, e, n), t = t.sibling; null !== t;) jo(t, e, n), t = t.sibling }

                function Mo(t, e, n) { var r = t.tag,
                        o = 5 === r || 6 === r; if (o) t = o ? t.stateNode : t.stateNode.instance, e ? yt(n, t, e) : pt(n, t);
                    else if (4 !== r && null !== (t = t.child))
                        for (Mo(t, e, n), t = t.sibling; null !== t;) Mo(t, e, n), t = t.sibling }

                function Io(t, e) { for (var n, r, o = e, i = !1;;) { if (!i) { i = o.return;
                            t: for (;;) { if (null === i) throw Error(u(160)); switch (n = i.stateNode, i.tag) {
                                    case 5:
                                        r = !1; break t;
                                    case 3:
                                    case 4:
                                        n = n.containerInfo, r = !0; break t }
                                i = i.return }
                            i = !0 } if (5 === o.tag || 6 === o.tag) Po(t, o), r ? wt(n, o.stateNode) : _t(n, o.stateNode);
                        else if (4 === o.tag) { if (null !== o.child) { n = o.stateNode.containerInfo, r = !0, o.child.return = o, o = o.child; continue } } else if (Eo(t, o), null !== o.child) { o.child.return = o, o = o.child; continue } if (o === e) break; for (; null === o.sibling;) { if (null === o.return || o.return === e) return;
                            4 === (o = o.return).tag && (i = !1) }
                        o.sibling.return = o.return, o = o.sibling } }

                function No(t, e) { if (Q) { switch (e.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                            case 22:
                                return void Co(3, e);
                            case 1:
                            case 12:
                            case 17:
                                return;
                            case 5:
                                var n = e.stateNode; if (null != n) { var r = e.memoizedProps;
                                    t = null !== t ? t.memoizedProps : r; var o = e.type,
                                        i = e.updateQueue;
                                    e.updateQueue = null, null !== i && gt(n, i, o, t, r, e) } return;
                            case 6:
                                if (null === e.stateNode) throw Error(u(162)); return n = e.memoizedProps, void vt(e.stateNode, null !== t ? t.memoizedProps : n, n);
                            case 3:
                                return void(J && (e = e.stateNode, e.hydrate && (e.hydrate = !1, qt(e.containerInfo))));
                            case 13:
                                return Bo(e), void Fo(e);
                            case 19:
                                return void Fo(e);
                            case 23:
                            case 24:
                                return void To(e, null !== e.memoizedState) } throw Error(u(163)) } switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                        case 22:
                            return void Co(3, e);
                        case 12:
                        case 23:
                        case 24:
                            return;
                        case 13:
                            return Bo(e), void Fo(e);
                        case 19:
                            return void Fo(e);
                        case 3:
                            J && ((n = e.stateNode).hydrate && (n.hydrate = !1, qt(n.containerInfo))) }
                    t: if ($) { switch (e.tag) {
                            case 1:
                            case 5:
                            case 6:
                            case 20:
                                break t;
                            case 3:
                            case 4:
                                e = e.stateNode, Rt(e.containerInfo, e.pendingChildren); break t } throw Error(u(163)) } }

                function Bo(t) { null !== t.memoizedState && (mi = Ue(), Q && To(t.child, !0)) }

                function Fo(t) { var e = t.updateQueue; if (null !== e) { t.updateQueue = null; var n = t.stateNode;
                        null === n && (n = t.stateNode = new xo), e.forEach((function(e) { var r = pa.bind(null, t, e);
                            n.has(e) || (n.add(e), e.then(r, r)) })) } }

                function Lo(t, e) { return null !== t && (null === (t = t.memoizedState) || null !== t.dehydrated) && (null !== (e = e.memoizedState) && null === e.dehydrated) } var Vo = 0,
                    zo = 1,
                    Uo = 2,
                    qo = 3,
                    Wo = 4; if ("function" == typeof Symbol && Symbol.for) { var Go = Symbol.for;
                    Vo = Go("selector.component"), zo = Go("selector.has_pseudo_class"), Uo = Go("selector.role"), qo = Go("selector.test_id"), Wo = Go("selector.text") }

                function Ho(t) { var e = K(t); if (null != e) { if ("string" != typeof e.memoizedProps["data-testname"]) throw Error(u(364)); return e } if (null === (t = at(t))) throw Error(u(362)); return t.stateNode.current }

                function Yo(t, e) { switch (e.$$typeof) {
                        case Vo:
                            if (t.type === e.value) return !0; break;
                        case zo:
                            t: { e = e.value, t = [t, 0]; for (var n = 0; n < t.length;) { var r = t[n++],
                                        o = t[n++],
                                        i = e[o]; if (5 !== r.tag || !ct(r)) { for (; null != i && Yo(r, i);) i = e[++o]; if (o === e.length) { e = !0; break t } for (r = r.child; null !== r;) t.push(r, o), r = r.sibling } }
                                e = !1 }
                            return e;
                        case Uo:
                            if (5 === t.tag && lt(t.stateNode, e.value)) return !0; break;
                        case Wo:
                            if ((5 === t.tag || 6 === t.tag) && (null !== (t = st(t)) && 0 <= t.indexOf(e.value))) return !0; break;
                        case qo:
                            if (5 === t.tag && ("string" == typeof(t = t.memoizedProps["data-testname"]) && t.toLowerCase() === e.value.toLowerCase())) return !0; break;
                        default:
                            throw Error(u(365, e)) } return !1 }

                function Xo(t) { switch (t.$$typeof) {
                        case Vo:
                            return "<" + (T(t.value) || "Unknown") + ">";
                        case zo:
                            return ":has(" + (Xo(t) || "") + ")";
                        case Uo:
                            return '[role="' + t.value + '"]';
                        case Wo:
                            return '"' + t.value + '"';
                        case qo:
                            return '[data-testname="' + t.value + '"]';
                        default:
                            throw Error(u(365, t)) } }

                function Qo(t, e) { var n = [];
                    t = [t, 0]; for (var r = 0; r < t.length;) { var o = t[r++],
                            i = t[r++],
                            a = e[i]; if (5 !== o.tag || !ct(o)) { for (; null != a && Yo(o, a);) a = e[++i]; if (i === e.length) n.push(o);
                            else
                                for (o = o.child; null !== o;) t.push(o, i), o = o.sibling } } return n }

                function $o(t, e) { if (!it) throw Error(u(363));
                    t = Qo(t = Ho(t), e), e = [], t = Array.from(t); for (var n = 0; n < t.length;) { var r = t[n++]; if (5 === r.tag) ct(r) || e.push(r.stateNode);
                        else
                            for (r = r.child; null !== r;) t.push(r), r = r.sibling } return e } var Jo = null; var Ko = Math.ceil,
                    ti = s.ReactCurrentDispatcher,
                    ei = s.ReactCurrentOwner,
                    ni = s.IsSomeRendererActing,
                    ri = 0,
                    oi = null,
                    ii = null,
                    ai = 0,
                    ui = 0,
                    si = $t(0),
                    ci = 0,
                    li = null,
                    fi = 0,
                    hi = 0,
                    pi = 0,
                    di = 0,
                    vi = null,
                    mi = 0,
                    gi = 1 / 0;

                function yi() { gi = Ue() + 500 } var bi, _i = null,
                    wi = !1,
                    ki = null,
                    xi = null,
                    Oi = !1,
                    Si = null,
                    Ci = 90,
                    Ai = [],
                    Ti = [],
                    Ei = null,
                    Pi = 0,
                    Zi = null,
                    Ri = -1,
                    Di = 0,
                    ji = 0,
                    Mi = null,
                    Ii = !1;

                function Ni() { return 0 != (48 & ri) ? Ue() : -1 !== Ri ? Ri : Ri = Ue() }

                function Bi(t) { if (0 == (2 & (t = t.mode))) return 1; if (0 == (4 & t)) return 99 === qe() ? 1 : 2; if (0 === Di && (Di = fi), 0 !== Qe.transition) { 0 !== ji && (ji = null !== vi ? vi.pendingLanes : 0), t = Di; var e = 4186112 & ~ji; return 0 === (e &= -e) && (0 === (e = (t = 4186112 & ~t) & -t) && (e = 8192)), e } return t = qe(), 0 != (4 & ri) && 98 === t ? t = ye(12, Di) : t = ye(t = function(t) { switch (t) {
                            case 99:
                                return 15;
                            case 98:
                                return 10;
                            case 97:
                            case 96:
                                return 8;
                            case 95:
                                return 2;
                            default:
                                return 0 } }(t), Di), t }

                function Fi(t, e, n) { if (50 < Pi) throw Pi = 0, Zi = null, Error(u(185)); if (null === (t = Li(t, e))) return null;
                    we(t, e, n), t === oi && (pi |= e, 4 === ci && Ui(t, ai)); var r = qe();
                    1 === e ? 0 != (8 & ri) && 0 == (48 & ri) ? qi(t) : (Vi(t, n), 0 === ri && (yi(), Ye())) : (0 == (4 & ri) || 98 !== r && 99 !== r || (null === Ei ? Ei = new Set([t]) : Ei.add(t)), Vi(t, n)), vi = t }

                function Li(t, e) { t.lanes |= e; var n = t.alternate; for (null !== n && (n.lanes |= e), n = t, t = t.return; null !== t;) t.childLanes |= e, null !== (n = t.alternate) && (n.childLanes |= e), n = t, t = t.return; return 3 === n.tag ? n.stateNode : null }

                function Vi(t, e) { for (var n = t.callbackNode, r = t.suspendedLanes, o = t.pingedLanes, i = t.expirationTimes, a = t.pendingLanes; 0 < a;) { var s = 31 - ke(a),
                            c = 1 << s,
                            l = i[s]; if (-1 === l) { if (0 == (c & r) || 0 != (c & o)) { l = e, ve(c); var f = de;
                                i[s] = 10 <= f ? l + 250 : 6 <= f ? l + 5e3 : -1 } } else l <= e && (t.expiredLanes |= c);
                        a &= ~c } if (r = me(t, t === oi ? ai : 0), e = de, 0 === r) null !== n && (n !== Ne && Ae(n), t.callbackNode = null, t.callbackPriority = 0);
                    else { if (null !== n) { if (t.callbackPriority === e) return;
                            n !== Ne && Ae(n) }
                        15 === e ? (n = qi.bind(null, t), null === Fe ? (Fe = [n], Le = Ce(Re, Xe)) : Fe.push(n), n = Ne) : 14 === e ? n = He(99, qi.bind(null, t)) : (n = function(t) { switch (t) {
                                case 15:
                                case 14:
                                    return 99;
                                case 13:
                                case 12:
                                case 11:
                                case 10:
                                    return 98;
                                case 9:
                                case 8:
                                case 7:
                                case 6:
                                case 4:
                                case 5:
                                    return 97;
                                case 3:
                                case 2:
                                case 1:
                                    return 95;
                                case 0:
                                    return 90;
                                default:
                                    throw Error(u(358, t)) } }(e), n = He(n, zi.bind(null, t))), t.callbackPriority = e, t.callbackNode = n } }

                function zi(t) { if (Ri = -1, ji = Di = 0, 0 != (48 & ri)) throw Error(u(327)); var e = t.callbackNode; if (aa() && t.callbackNode !== e) return null; var n = me(t, t === oi ? ai : 0); if (0 === n) return null; var r = n,
                        o = ri;
                    ri |= 16; var i = $i(); for (oi === t && ai === r || (yi(), Xi(t, r));;) try { ta(); break } catch (s) { Qi(t, s) }
                    if (un(), ti.current = i, ri = o, null !== ii ? r = 0 : (oi = null, ai = 0, r = ci), 0 != (fi & pi)) Xi(t, 0);
                    else if (0 !== r) { if (2 === r && (ri |= 64, t.hydrate && (t.hydrate = !1, At(t.containerInfo)), 0 !== (n = ge(t)) && (r = Ji(t, n))), 1 === r) throw e = li, Xi(t, 0), Ui(t, n), Vi(t, Ue()), e; switch (t.finishedWork = t.current.alternate, t.finishedLanes = n, r) {
                            case 0:
                            case 1:
                                throw Error(u(345));
                            case 2:
                            case 5:
                                ra(t); break;
                            case 3:
                                if (Ui(t, n), (62914560 & n) === n && 10 < (r = mi + 500 - Ue())) { if (0 !== me(t, 0)) break; if (((o = t.suspendedLanes) & n) !== n) { Ni(), t.pingedLanes |= t.suspendedLanes & o; break }
                                    t.timeoutHandle = G(ra.bind(null, t), r); break }
                                ra(t); break;
                            case 4:
                                if (Ui(t, n), (4186112 & n) === n) break; for (r = t.eventTimes, o = -1; 0 < n;) { var a = 31 - ke(n);
                                    i = 1 << a, (a = r[a]) > o && (o = a), n &= ~i } if (n = o, 10 < (n = (120 > (n = Ue() - n) ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Ko(n / 1960)) - n)) { t.timeoutHandle = G(ra.bind(null, t), n); break }
                                ra(t); break;
                            default:
                                throw Error(u(329)) } } return Vi(t, Ue()), t.callbackNode === e ? zi.bind(null, t) : null }

                function Ui(t, e) { for (e &= ~di, e &= ~pi, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes; 0 < e;) { var n = 31 - ke(e),
                            r = 1 << n;
                        t[n] = -1, e &= ~r } }

                function qi(t) { if (0 != (48 & ri)) throw Error(u(327)); if (aa(), t === oi && 0 != (t.expiredLanes & ai)) { var e = ai,
                            n = Ji(t, e);
                        0 != (fi & pi) && (n = Ji(t, e = me(t, e))) } else n = Ji(t, e = me(t, 0)); if (0 !== t.tag && 2 === n && (ri |= 64, t.hydrate && (t.hydrate = !1, At(t.containerInfo)), 0 !== (e = ge(t)) && (n = Ji(t, e))), 1 === n) throw n = li, Xi(t, 0), Ui(t, e), Vi(t, Ue()), n; return t.finishedWork = t.current.alternate, t.finishedLanes = e, ra(t), Vi(t, Ue()), null }

                function Wi(t, e) { var n = ri;
                    ri |= 1; try { return t(e) } finally { 0 === (ri = n) && (yi(), Ye()) } }

                function Gi(t, e) { var n = ri; if (0 != (48 & n)) return t(e);
                    ri |= 1; try { if (t) return Ge(99, t.bind(null, e)) } finally { ri = n, Ye() } }

                function Hi(t, e) { Kt(si, ui), ui |= e, fi |= e }

                function Yi() { ui = si.current, Jt(si) }

                function Xi(t, e) { t.finishedWork = null, t.finishedLanes = 0; var n = t.timeoutHandle; if (n !== Y && (t.timeoutHandle = Y, H(n)), null !== ii)
                        for (n = ii.return; null !== n;) { var r = n; switch (r.tag) {
                                case 1:
                                    null != (r = r.type.childContextTypes) && ae(); break;
                                case 3:
                                    Ln(), Jt(ne), Jt(ee), er(); break;
                                case 5:
                                    zn(r); break;
                                case 4:
                                    Ln(); break;
                                case 13:
                                case 19:
                                    Jt(Un); break;
                                case 10:
                                    cn(r); break;
                                case 23:
                                case 24:
                                    Yi() }
                            n = n.return }
                    oi = t, ii = Oa(t.current, null), ai = ui = fi = e, ci = 0, li = null, di = pi = hi = 0 }

                function Qi(t, e) { for (;;) { var n = ii; try { if (un(), nr.current = Nr, sr) { for (var r = ir.memoizedState; null !== r;) { var o = r.queue;
                                    null !== o && (o.pending = null), r = r.next }
                                sr = !1 } if (or = 0, ur = ar = ir = null, cr = !1, ei.current = null, null === n || null === n.return) { ci = 1, li = e, ii = null; break }
                            t: { var i = t,
                                    a = n.return,
                                    u = n,
                                    s = e; if (e = ai, u.flags |= 2048, u.firstEffect = u.lastEffect = null, null !== s && "object" == typeof s && "function" == typeof s.then) { var c = s; if (0 == (2 & u.mode)) { var l = u.alternate;
                                        l ? (u.updateQueue = l.updateQueue, u.memoizedState = l.memoizedState, u.lanes = l.lanes) : (u.updateQueue = null, u.memoizedState = null) } var f = 0 != (1 & Un.current),
                                        h = a;
                                    do { var p; if (p = 13 === h.tag) { var d = h.memoizedState; if (null !== d) p = null !== d.dehydrated;
                                            else { var v = h.memoizedProps;
                                                p = void 0 !== v.fallback && (!0 !== v.unstable_avoidThisFallback || !f) } } if (p) { var m = h.updateQueue; if (null === m) { var g = new Set;
                                                g.add(c), h.updateQueue = g } else m.add(c); if (0 == (2 & h.mode)) { if (h.flags |= 64, u.flags |= 16384, u.flags &= -2981, 1 === u.tag)
                                                    if (null === u.alternate) u.tag = 17;
                                                    else { var y = mn(-1, 1);
                                                        y.tag = 2, gn(u, y) }
                                                u.lanes |= 1; break t }
                                            s = void 0, u = e; var b = i.pingCache; if (null === b ? (b = i.pingCache = new _o, s = new Set, b.set(c, s)) : void 0 === (s = b.get(c)) && (s = new Set, b.set(c, s)), !s.has(u)) { s.add(u); var _ = ha.bind(null, i, c, u);
                                                c.then(_, _) }
                                            h.flags |= 4096, h.lanes = e; break t }
                                        h = h.return } while (null !== h);
                                    s = Error((T(u.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.") }
                                5 !== ci && (ci = 2), s = yo(s, u), h = a;do { switch (h.tag) {
                                        case 3:
                                            i = s, h.flags |= 4096, e &= -e, h.lanes |= e, yn(h, wo(0, i, e)); break t;
                                        case 1:
                                            i = s; var w = h.type,
                                                k = h.stateNode; if (0 == (64 & h.flags) && ("function" == typeof w.getDerivedStateFromError || null !== k && "function" == typeof k.componentDidCatch && (null === xi || !xi.has(k)))) { h.flags |= 4096, e &= -e, h.lanes |= e, yn(h, ko(h, i, e)); break t } }
                                    h = h.return } while (null !== h) }
                            na(n) } catch (x) { e = x, ii === n && null !== n && (ii = n = n.return); continue } break } }

                function $i() { var t = ti.current; return ti.current = Nr, null === t ? Nr : t }

                function Ji(t, e) { var n = ri;
                    ri |= 16; var r = $i(); for (oi === t && ai === e || Xi(t, e);;) try { Ki(); break } catch (o) { Qi(t, o) }
                    if (un(), ri = n, ti.current = r, null !== ii) throw Error(u(261)); return oi = null, ai = 0, ci }

                function Ki() { for (; null !== ii;) ea(ii) }

                function ta() { for (; null !== ii && !Te();) ea(ii) }

                function ea(t) { var e = bi(t.alternate, t, ui);
                    t.memoizedProps = t.pendingProps, null === e ? na(t) : ii = e, ei.current = null }

                function na(t) { var e = t;
                    do { var n = e.alternate; if (t = e.return, 0 == (2048 & e.flags)) { if (null !== (n = mo(n, e, ui))) return void(ii = n); if (24 !== (n = e).tag && 23 !== n.tag || null === n.memoizedState || 0 != (1073741824 & ui) || 0 == (4 & n.mode)) { for (var r = 0, o = n.child; null !== o;) r |= o.lanes | o.childLanes, o = o.sibling;
                                n.childLanes = r }
                            null !== t && 0 == (2048 & t.flags) && (null === t.firstEffect && (t.firstEffect = e.firstEffect), null !== e.lastEffect && (null !== t.lastEffect && (t.lastEffect.nextEffect = e.firstEffect), t.lastEffect = e.lastEffect), 1 < e.flags && (null !== t.lastEffect ? t.lastEffect.nextEffect = e : t.firstEffect = e, t.lastEffect = e)) } else { if (null !== (n = go(e))) return n.flags &= 2047, void(ii = n);
                            null !== t && (t.firstEffect = t.lastEffect = null, t.flags |= 2048) } if (null !== (e = e.sibling)) return void(ii = e);
                        ii = e = t } while (null !== e);
                    0 === ci && (ci = 5) }

                function ra(t) { var e = qe(); return Ge(99, oa.bind(null, t, e)), null }

                function oa(t, e) { do { aa() } while (null !== Si); if (0 != (48 & ri)) throw Error(u(327)); var n = t.finishedWork; if (null === n) return null; if (t.finishedWork = null, t.finishedLanes = 0, n === t.current) throw Error(u(177));
                    t.callbackNode = null; var r = n.lanes | n.childLanes,
                        o = r,
                        i = t.pendingLanes & ~o;
                    t.pendingLanes = o, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= o, t.mutableReadLanes &= o, t.entangledLanes &= o, o = t.entanglements; for (var a = t.eventTimes, s = t.expirationTimes; 0 < i;) { var c = 31 - ke(i),
                            l = 1 << c;
                        o[c] = 0, a[c] = -1, s[c] = -1, i &= ~l } if (null !== Ei && 0 == (24 & r) && Ei.has(t) && Ei.delete(t), t === oi && (ii = oi = null, ai = 0), 1 < n.flags ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, r = n.firstEffect) : r = n : r = n.firstEffect, null !== r) { o = ri, ri |= 32, ei.current = null, Mi = B(t.containerInfo), Ii = !1, _i = r;
                        do { try { ia() } catch (y) { if (null === _i) throw Error(u(330));
                                fa(_i, y), _i = _i.nextEffect } } while (null !== _i);
                        Mi = null, _i = r;
                        do { try { for (a = t; null !== _i;) { var f = _i.flags; if (16 & f && Q && kt(_i.stateNode), 128 & f) { var h = _i.alternate; if (null !== h) { var p = h.ref;
                                            null !== p && ("function" == typeof p ? p(null) : p.current = null) } } switch (1038 & f) {
                                        case 2:
                                            Do(_i), _i.flags &= -3; break;
                                        case 6:
                                            Do(_i), _i.flags &= -3, No(_i.alternate, _i); break;
                                        case 1024:
                                            _i.flags &= -1025; break;
                                        case 1028:
                                            _i.flags &= -1025, No(_i.alternate, _i); break;
                                        case 4:
                                            No(_i.alternate, _i); break;
                                        case 8:
                                            s = a, i = _i, Q ? Io(s, i) : Po(s, i); var d = i.alternate;
                                            Zo(i), null !== d && Zo(d) }
                                    _i = _i.nextEffect } } catch (y) { if (null === _i) throw Error(u(330));
                                fa(_i, y), _i = _i.nextEffect } } while (null !== _i);
                        Ii && rt(), F(t.containerInfo), t.current = n, _i = r;
                        do { try { for (f = t; null !== _i;) { var v = _i.flags; if (36 & v && Ao(f, _i.alternate, _i), 128 & v) { h = void 0; var m = _i.ref; if (null !== m) { var g = _i.stateNode; if (5 === _i.tag) h = M(g);
                                            else h = g; "function" == typeof m ? m(h) : m.current = h } }
                                    _i = _i.nextEffect } } catch (y) { if (null === _i) throw Error(u(330));
                                fa(_i, y), _i = _i.nextEffect } } while (null !== _i);
                        _i = null, Be(), ri = o } else t.current = n; if (Oi) Oi = !1, Si = t, Ci = e;
                    else
                        for (_i = r; null !== _i;) e = _i.nextEffect, _i.nextEffect = null, 8 & _i.flags && ((v = _i).sibling = null, v.stateNode = null), _i = e; if (0 === (r = t.pendingLanes) && (xi = null), 1 === r ? t === Zi ? Pi++ : (Pi = 0, Zi = t) : Pi = 0, n = n.stateNode, he && "function" == typeof he.onCommitFiberRoot) try { he.onCommitFiberRoot(fe, n, void 0, 64 == (64 & n.current.flags)) } catch (y) {}
                    if (Vi(t, Ue()), wi) throw wi = !1, t = ki, ki = null, t; return 0 != (8 & ri) || Ye(), null }

                function ia() { for (; null !== _i;) { var t = _i.alternate;
                        Ii || null === Mi || (0 != (8 & _i.flags) ? D(_i, Mi) && (Ii = !0, nt()) : 13 === _i.tag && Lo(t, _i) && D(_i, Mi) && (Ii = !0, nt())); var e = _i.flags;
                        0 != (256 & e) && So(t, _i), 0 == (512 & e) || Oi || (Oi = !0, He(97, (function() { return aa(), null }))), _i = _i.nextEffect } }

                function aa() { if (90 !== Ci) { var t = 97 < Ci ? 97 : Ci; return Ci = 90, Ge(t, ca) } return !1 }

                function ua(t, e) { Ai.push(e, t), Oi || (Oi = !0, He(97, (function() { return aa(), null }))) }

                function sa(t, e) { Ti.push(e, t), Oi || (Oi = !0, He(97, (function() { return aa(), null }))) }

                function ca() { if (null === Si) return !1; var t = Si; if (Si = null, 0 != (48 & ri)) throw Error(u(331)); var e = ri;
                    ri |= 32; var n = Ti;
                    Ti = []; for (var r = 0; r < n.length; r += 2) { var o = n[r],
                            i = n[r + 1],
                            a = o.destroy; if (o.destroy = void 0, "function" == typeof a) try { a() } catch (c) { if (null === i) throw Error(u(330));
                            fa(i, c) } } for (n = Ai, Ai = [], r = 0; r < n.length; r += 2) { o = n[r], i = n[r + 1]; try { var s = o.create;
                            o.destroy = s() } catch (c) { if (null === i) throw Error(u(330));
                            fa(i, c) } } for (s = t.current.firstEffect; null !== s;) t = s.nextEffect, s.nextEffect = null, 8 & s.flags && (s.sibling = null, s.stateNode = null), s = t; return ri = e, Ye(), !0 }

                function la(t, e, n) { gn(t, e = wo(0, e = yo(n, e), 1)), e = Ni(), null !== (t = Li(t, 1)) && (we(t, 1, e), Vi(t, e)) }

                function fa(t, e) { if (3 === t.tag) la(t, t, e);
                    else
                        for (var n = t.return; null !== n;) { if (3 === n.tag) { la(n, t, e); break } if (1 === n.tag) { var r = n.stateNode; if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === xi || !xi.has(r))) { var o = ko(n, t = yo(e, t), 1); if (gn(n, o), o = Ni(), null !== (n = Li(n, 1))) we(n, 1, o), Vi(n, o);
                                    else if ("function" == typeof r.componentDidCatch && (null === xi || !xi.has(r))) try { r.componentDidCatch(e, t) } catch (i) {}
                                    break } }
                            n = n.return } }

                function ha(t, e, n) { var r = t.pingCache;
                    null !== r && r.delete(e), e = Ni(), t.pingedLanes |= t.suspendedLanes & n, oi === t && (ai & n) === n && (4 === ci || 3 === ci && (62914560 & ai) === ai && 500 > Ue() - mi ? Xi(t, 0) : di |= n), Vi(t, e) }

                function pa(t, e) { var n = t.stateNode;
                    null !== n && n.delete(e), 0 === (e = 0) && (0 == (2 & (e = t.mode)) ? e = 1 : 0 == (4 & e) ? e = 99 === qe() ? 1 : 2 : (0 === Di && (Di = fi), 0 === (e = be(62914560 & ~Di)) && (e = 4194304))), n = Ni(), null !== (t = Li(t, e)) && (we(t, e, n), Vi(t, n)) }
                bi = function(t, e, n) { var r = e.lanes; if (null !== t)
                        if (t.memoizedProps !== e.pendingProps || ne.current) zr = !0;
                        else { if (0 == (n & r)) { switch (zr = !1, e.tag) {
                                    case 3:
                                        Jr(e), Kn(); break;
                                    case 5:
                                        Vn(e); break;
                                    case 1:
                                        ie(e.type) && ce(e); break;
                                    case 4:
                                        Fn(e, e.stateNode.containerInfo); break;
                                    case 10:
                                        sn(e, e.memoizedProps.value); break;
                                    case 13:
                                        if (null !== e.memoizedState) return 0 != (n & e.child.childLanes) ? oo(t, e, n) : (Kt(Un, 1 & Un.current), null !== (e = fo(t, e, n)) ? e.sibling : null);
                                        Kt(Un, 1 & Un.current); break;
                                    case 19:
                                        if (r = 0 != (n & e.childLanes), 0 != (64 & t.flags)) { if (r) return lo(t, e, n);
                                            e.flags |= 64 } var o = e.memoizedState; if (null !== o && (o.rendering = null, o.tail = null, o.lastEffect = null), Kt(Un, Un.current), r) break; return null;
                                    case 23:
                                    case 24:
                                        return e.lanes = 0, Hr(t, e, n) } return fo(t, e, n) }
                            zr = 0 != (16384 & t.flags) }
                    else zr = !1; switch (e.lanes = 0, e.tag) {
                        case 2:
                            if (r = e.type, null !== t && (t.alternate = null, e.alternate = null, e.flags |= 2), t = e.pendingProps, o = oe(e, ee.current), fn(e, n), o = hr(null, e, r, t, o, n), e.flags |= 1, "object" == typeof o && null !== o && "function" == typeof o.render && void 0 === o.$$typeof) { if (e.tag = 1, e.memoizedState = null, e.updateQueue = null, ie(r)) { var i = !0;
                                    ce(e) } else i = !1;
                                e.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null, dn(e); var a = r.getDerivedStateFromProps; "function" == typeof a && kn(e, r, a, t), o.updater = xn, e.stateNode = o, o._reactInternals = e, An(e, r, t, n), e = $r(null, e, r, !0, i, n) } else e.tag = 0, Ur(null, e, o, n), e = e.child; return e;
                        case 16:
                            o = e.elementType;
                            t: { switch (null !== t && (t.alternate = null, e.alternate = null, e.flags |= 2), t = e.pendingProps, o = (i = o._init)(o._payload), e.type = o, i = e.tag = function(t) { if ("function" == typeof t) return xa(t) ? 1 : 0; if (null != t) { if ((t = t.$$typeof) === m) return 11; if (t === b) return 14 } return 2 }(o), t = en(o, t), i) {
                                    case 0:
                                        e = Xr(null, e, o, t, n); break t;
                                    case 1:
                                        e = Qr(null, e, o, t, n); break t;
                                    case 11:
                                        e = qr(null, e, o, t, n); break t;
                                    case 14:
                                        e = Wr(null, e, o, en(o.type, t), r, n); break t } throw Error(u(306, o, "")) }
                            return e;
                        case 0:
                            return r = e.type, o = e.pendingProps, Xr(t, e, r, o = e.elementType === r ? o : en(r, o), n);
                        case 1:
                            return r = e.type, o = e.pendingProps, Qr(t, e, r, o = e.elementType === r ? o : en(r, o), n);
                        case 3:
                            if (Jr(e), r = e.updateQueue, null === t || null === r) throw Error(u(282)); if (r = e.pendingProps, o = null !== (o = e.memoizedState) ? o.element : null, vn(t, e), bn(e, r, null, n), (r = e.memoizedState.element) === o) Kn(), e = fo(t, e, n);
                            else { if ((i = (o = e.stateNode).hydrate) && (J ? (Gn = Lt(e.stateNode.containerInfo), Wn = e, i = Hn = !0) : i = !1), i) { if (J && null != (t = o.mutableSourceEagerHydrationData))
                                        for (o = 0; o < t.length; o += 2) i = t[o], a = t[o + 1], X ? i._workInProgressVersionPrimary = a : i._workInProgressVersionSecondary = a, tr.push(i); for (n = Dn(e, null, r, n), e.child = n; n;) n.flags = -3 & n.flags | 1024, n = n.sibling } else Ur(t, e, r, n), Kn();
                                e = e.child } return e;
                        case 5:
                            return Vn(e), null === t && Qn(e), r = e.type, o = e.pendingProps, i = null !== t ? t.memoizedProps : null, a = o.children, q(r, o) ? a = null : null !== i && q(r, i) && (e.flags |= 16), Yr(t, e), Ur(t, e, a, n), e.child;
                        case 6:
                            return null === t && Qn(e), null;
                        case 13:
                            return oo(t, e, n);
                        case 4:
                            return Fn(e, e.stateNode.containerInfo), r = e.pendingProps, null === t ? e.child = Rn(e, null, r, n) : Ur(t, e, r, n), e.child;
                        case 11:
                            return r = e.type, o = e.pendingProps, qr(t, e, r, o = e.elementType === r ? o : en(r, o), n);
                        case 7:
                            return Ur(t, e, e.pendingProps, n), e.child;
                        case 8:
                        case 12:
                            return Ur(t, e, e.pendingProps.children, n), e.child;
                        case 10:
                            t: { if (r = e.type._context, o = e.pendingProps, a = e.memoizedProps, sn(e, i = o.value), null !== a) { var s = a.value; if (0 === (i = $e(s, i) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(s, i) : 1073741823))) { if (a.children === o.children && !ne.current) { e = fo(t, e, n); break t } } else
                                        for (null !== (s = e.child) && (s.return = e); null !== s;) { var c = s.dependencies; if (null !== c) { a = s.child; for (var l = c.firstContext; null !== l;) { if (l.context === r && 0 != (l.observedBits & i)) { 1 === s.tag && ((l = mn(-1, n & -n)).tag = 2, gn(s, l)), s.lanes |= n, null !== (l = s.alternate) && (l.lanes |= n), ln(s.return, n), c.lanes |= n; break }
                                                    l = l.next } } else a = 10 === s.tag && s.type === e.type ? null : s.child; if (null !== a) a.return = s;
                                            else
                                                for (a = s; null !== a;) { if (a === e) { a = null; break } if (null !== (s = a.sibling)) { s.return = a.return, a = s; break }
                                                    a = a.return }
                                            s = a } }
                                Ur(t, e, o.children, n), e = e.child }
                            return e;
                        case 9:
                            return o = e.type, r = (i = e.pendingProps).children, fn(e, n), r = r(o = hn(o, i.unstable_observedBits)), e.flags |= 1, Ur(t, e, r, n), e.child;
                        case 14:
                            return i = en(o = e.type, e.pendingProps), Wr(t, e, o, i = en(o.type, i), r, n);
                        case 15:
                            return Gr(t, e, e.type, e.pendingProps, r, n);
                        case 17:
                            return r = e.type, o = e.pendingProps, o = e.elementType === r ? o : en(r, o), null !== t && (t.alternate = null, e.alternate = null, e.flags |= 2), e.tag = 1, ie(r) ? (t = !0, ce(e)) : t = !1, fn(e, n), Sn(e, r, o), An(e, r, o, n), $r(null, e, r, !0, t, n);
                        case 19:
                            return lo(t, e, n);
                        case 23:
                        case 24:
                            return Hr(t, e, n) } throw Error(u(156, e.tag)) }; var da = { current: !1 },
                    va = a.unstable_flushAllWithoutAsserting,
                    ma = "function" == typeof va;

                function ga() { if (void 0 !== va) return va(); for (var t = !1; aa();) t = !0; return t }

                function ya(e) { try { ga(),
                            function(e) { if (null === Jo) try { var n = ("require" + Math.random()).slice(0, 7);
                                    Jo = (t && t[n]).call(t, "timers").setImmediate } catch (r) { Jo = function(t) { var e = new MessageChannel;
                                        e.port1.onmessage = t, e.port2.postMessage(void 0) } }
                                Jo(e) }((function() { ga() ? ya(e) : e() })) } catch (n) { e(n) } } var ba = 0,
                    _a = !1;

                function wa(t, e, n, r) { this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null }

                function ka(t, e, n, r) { return new wa(t, e, n, r) }

                function xa(t) { return !(!(t = t.prototype) || !t.isReactComponent) }

                function Oa(t, e) { var n = t.alternate; return null === n ? ((n = ka(t.tag, e, t.key, t.mode)).elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n }

                function Sa(t, e, n, r, o, i) { var a = 2; if (r = t, "function" == typeof t) xa(t) && (a = 1);
                    else if ("string" == typeof t) a = 5;
                    else t: switch (t) {
                        case f:
                            return Ca(n.children, o, i, e);
                        case k:
                            a = 8, o |= 16; break;
                        case h:
                            a = 8, o |= 1; break;
                        case p:
                            return (t = ka(12, n, e, 8 | o)).elementType = p, t.type = p, t.lanes = i, t;
                        case g:
                            return (t = ka(13, n, e, o)).type = g, t.elementType = g, t.lanes = i, t;
                        case y:
                            return (t = ka(19, n, e, o)).elementType = y, t.lanes = i, t;
                        case x:
                            return Aa(n, o, i, e);
                        case O:
                            return (t = ka(24, n, e, o)).elementType = O, t.lanes = i, t;
                        default:
                            if ("object" == typeof t && null !== t) switch (t.$$typeof) {
                                case d:
                                    a = 10; break t;
                                case v:
                                    a = 9; break t;
                                case m:
                                    a = 11; break t;
                                case b:
                                    a = 14; break t;
                                case _:
                                    a = 16, r = null; break t;
                                case w:
                                    a = 22; break t }
                            throw Error(u(130, null == t ? t : typeof t, "")) }
                    return (e = ka(a, n, e, o)).elementType = t, e.type = r, e.lanes = i, e }

                function Ca(t, e, n, r) { return (t = ka(7, t, r, e)).lanes = n, t }

                function Aa(t, e, n, r) { return (t = ka(23, t, r, e)).elementType = x, t.lanes = n, t }

                function Ta(t, e, n) { return (t = ka(6, t, null, e)).lanes = n, t }

                function Ea(t, e, n) { return (e = ka(4, null !== t.children ? t.children : [], t.key, e)).lanes = n, e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, e }

                function Pa(t, e, n) { this.tag = e, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Y, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = _e(0), this.expirationTimes = _e(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _e(0), J && (this.mutableSourceEagerHydrationData = null) }

                function Za(t) { var e = t._reactInternals; if (void 0 === e) { if ("function" == typeof t.render) throw Error(u(188)); throw Error(u(268, Object.keys(t))) } return null === (t = R(e)) ? null : t.stateNode }

                function Ra(t, e) { if (null !== (t = t.memoizedState) && null !== t.dehydrated) { var n = t.retryLane;
                        t.retryLane = 0 !== n && n < e ? n : e } }

                function Da(t, e) { Ra(t, e), (t = t.alternate) && Ra(t, e) }

                function ja(t) { return null === (t = R(t)) ? null : t.stateNode }

                function Ma() { return null } return r.IsThisRendererActing = da, r.act = function(t) {
                    function e() { ba--, ni.current = n, da.current = r }!1 === _a && (_a = !0, console.error("act(...) is not supported in production builds of React, and might not behave as expected.")), ba++; var n = ni.current,
                        r = da.current;
                    ni.current = !0, da.current = !0; try { var o = Wi(t) } catch (i) { throw e(), i } if (null !== o && "object" == typeof o && "function" == typeof o.then) return { then: function(t, r) { o.then((function() { 1 < ba || !0 === ma && !0 === n ? (e(), t()) : ya((function(n) { e(), n ? r(n) : t() })) }), (function(t) { e(), r(t) })) } }; try { 1 !== ba || !1 !== ma && !1 !== n || ga(), e() } catch (i) { throw e(), i } return { then: function(t) { t() } } }, r.attemptContinuousHydration = function(t) { 13 === t.tag && (Fi(t, 67108864, Ni()), Da(t, 67108864)) }, r.attemptHydrationAtCurrentPriority = function(t) { if (13 === t.tag) { var e = Ni(),
                            n = Bi(t);
                        Fi(t, n, e), Da(t, n) } }, r.attemptSynchronousHydration = function(t) { switch (t.tag) {
                        case 3:
                            var e = t.stateNode; if (e.hydrate) { var n = ve(e.pendingLanes);
                                e.expiredLanes |= n & e.pendingLanes, Vi(e, Ue()), 0 == (48 & ri) && (yi(), Ye()) } break;
                        case 13:
                            var r = Ni();
                            Gi((function() { return Fi(t, 1, r) })), Da(t, 4) } }, r.attemptUserBlockingHydration = function(t) { 13 === t.tag && (Fi(t, 4, Ni()), Da(t, 4)) }, r.batchedEventUpdates = function(t, e) { var n = ri;
                    ri |= 2; try { return t(e) } finally { 0 === (ri = n) && (yi(), Ye()) } }, r.batchedUpdates = Wi, r.createComponentSelector = function(t) { return { $$typeof: Vo, value: t } }, r.createContainer = function(t, e, n) { return t = new Pa(t, e, n), e = ka(3, null, null, 2 === e ? 7 : 1 === e ? 3 : 0), t.current = e, e.stateNode = t, dn(e), t }, r.createHasPsuedoClassSelector = function(t) { return { $$typeof: zo, value: t } }, r.createPortal = function(t, e, n) { var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null; return { $$typeof: l, key: null == r ? null : "" + r, children: t, containerInfo: e, implementation: n } }, r.createRoleSelector = function(t) { return { $$typeof: Uo, value: t } }, r.createTestNameSelector = function(t) { return { $$typeof: qo, value: t } }, r.createTextSelector = function(t) { return { $$typeof: Wo, value: t } }, r.deferredUpdates = function(t) { return Ge(97, t) }, r.discreteUpdates = function(t, e, n, r, o) { var i = ri;
                    ri |= 4; try { return Ge(98, t.bind(null, e, n, r, o)) } finally { 0 === (ri = i) && (yi(), Ye()) } }, r.findAllNodes = $o, r.findBoundingRects = function(t, e) { if (!it) throw Error(u(363));
                    e = $o(t, e), t = []; for (var n = 0; n < e.length; n++) t.push(ut(e[n])); for (e = t.length - 1; 0 < e; e--)
                        for (var r = (n = t[e]).x, o = r + n.width, i = n.y, a = i + n.height, s = e - 1; 0 <= s; s--)
                            if (e !== s) { var c = t[s],
                                    l = c.x,
                                    f = l + c.width,
                                    h = c.y,
                                    p = h + c.height; if (r >= l && i >= h && o <= f && a <= p) { t.splice(e, 1); break } if (!(r !== l || n.width !== c.width || p < i || h > a)) { h > i && (c.height += h - i, c.y = i), p < a && (c.height = a - h), t.splice(e, 1); break } if (!(i !== h || n.height !== c.height || f < r || l > o)) { l > r && (c.width += l - r, c.x = r), f < o && (c.width = o - l), t.splice(e, 1); break } }
                    return t }, r.findHostInstance = Za, r.findHostInstanceWithNoPortals = function(t) { return null === (t = function(t) { if (!(t = Z(t))) return null; for (var e = t;;) { if (5 === e.tag || 6 === e.tag) return e; if (e.child && 4 !== e.tag) e.child.return = e, e = e.child;
                            else { if (e === t) break; for (; !e.sibling;) { if (!e.return || e.return === t) return null;
                                    e = e.return }
                                e.sibling.return = e.return, e = e.sibling } } return null }(t)) ? null : 20 === t.tag ? t.stateNode.instance : t.stateNode }, r.findHostInstanceWithWarning = function(t) { return Za(t) }, r.flushControlled = function(t) { var e = ri;
                    ri |= 1; try { Ge(99, t) } finally { 0 === (ri = e) && (yi(), Ye()) } }, r.flushDiscreteUpdates = function() { 0 == (49 & ri) && (function() { if (null !== Ei) { var t = Ei;
                            Ei = null, t.forEach((function(t) { t.expiredLanes |= 24 & t.pendingLanes, Vi(t, Ue()) })) }
                        Ye() }(), aa()) }, r.flushPassiveEffects = aa, r.flushSync = Gi, r.focusWithin = function(t, e) { if (!it) throw Error(u(363)); for (e = Qo(t = Ho(t), e), e = Array.from(e), t = 0; t < e.length;) { var n = e[t++]; if (!ct(n)) { if (5 === n.tag && ft(n.stateNode)) return !0; for (n = n.child; null !== n;) e.push(n), n = n.sibling } } return !1 }, r.getCurrentUpdateLanePriority = function() { return pe }, r.getFindAllNodesFailureDescription = function(t, e) { if (!it) throw Error(u(363)); var n = 0,
                        r = [];
                    t = [Ho(t), 0]; for (var o = 0; o < t.length;) { var i = t[o++],
                            a = t[o++],
                            s = e[a]; if ((5 !== i.tag || !ct(i)) && (Yo(i, s) && (r.push(Xo(s)), ++a > n && (n = a)), a < e.length))
                            for (i = i.child; null !== i;) t.push(i, a), i = i.sibling } if (n < e.length) { for (t = []; n < e.length; n++) t.push(Xo(e[n])); return "findAllNodes was able to match part of the selector:\n  " + r.join(" > ") + "\n\nNo matching component was found for:\n  " + t.join(" > ") } return null }, r.getPublicRootInstance = function(t) { return (t = t.current).child ? 5 === t.child.tag ? M(t.child.stateNode) : t.child.stateNode : null }, r.injectIntoDevTools = function(t) { if (t = { bundleType: t.bundleType, version: t.version, rendererPackageName: t.rendererPackageName, rendererConfig: t.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: s.ReactCurrentDispatcher, findHostInstanceByFiber: ja, findFiberByHostInstance: t.findFiberByHostInstance || Ma, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null }, "undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) t = !1;
                    else { var e = __REACT_DEVTOOLS_GLOBAL_HOOK__; if (!e.isDisabled && e.supportsFiber) try { fe = e.inject(t), he = e } catch (n) {}
                        t = !0 } return t }, r.observeVisibleRects = function(t, e, n, r) { if (!it) throw Error(u(363));
                    t = $o(t, e); var o = ht(t, n, r).disconnect; return { disconnect: function() { o() } } }, r.registerMutableSourceForHydration = function(t, e) { var n = e._getVersion;
                    n = n(e._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [e, n] : t.mutableSourceEagerHydrationData.push(e, n) }, r.runWithPriority = function(t, e) { var n = pe; try { return pe = t, e() } finally { pe = n } }, r.shouldSuspend = function() { return !1 }, r.unbatchedUpdates = function(t, e) { var n = ri;
                    ri &= -2, ri |= 8; try { return t(e) } finally { 0 === (ri = n) && (yi(), Ye()) } }, r.updateContainer = function(t, e, n, r) { var o = e.current,
                        i = Ni(),
                        a = Bi(o);
                    t: if (n) { e: { if (E(n = n._reactInternals) !== n || 1 !== n.tag) throw Error(u(170)); var s = n;do { switch (s.tag) {
                                        case 3:
                                            s = s.stateNode.context; break e;
                                        case 1:
                                            if (ie(s.type)) { s = s.stateNode.__reactInternalMemoizedMergedChildContext; break e } }
                                    s = s.return } while (null !== s); throw Error(u(171)) } if (1 === n.tag) { var c = n.type; if (ie(c)) { n = se(n, c, s); break t } }
                            n = s }
                        else n = te; return null === e.context ? e.context = n : e.pendingContext = n, (e = mn(i, a)).payload = { element: t }, null !== (r = void 0 === r ? null : r) && (e.callback = r), gn(o, e), Fi(o, a, i), a }, r } }, 29305: function(t, e, n) { "use strict";
            t.exports = n(71717) }, 14889: function(t, e, n) { var r;! function(o, i) { "use strict"; var a = "function",
                    u = "undefined",
                    s = "object",
                    c = "string",
                    l = "model",
                    f = "name",
                    h = "type",
                    p = "vendor",
                    d = "version",
                    v = "architecture",
                    m = "console",
                    g = "mobile",
                    y = "tablet",
                    b = "smarttv",
                    _ = "wearable",
                    w = "embedded",
                    k = "Amazon",
                    x = "Apple",
                    O = "ASUS",
                    S = "BlackBerry",
                    C = "Firefox",
                    A = "Google",
                    T = "Huawei",
                    E = "LG",
                    P = "Microsoft",
                    Z = "Motorola",
                    R = "Opera",
                    D = "Samsung",
                    j = "Sony",
                    M = "Xiaomi",
                    I = "Zebra",
                    N = "Facebook",
                    B = function(t) { for (var e = {}, n = 0; n < t.length; n++) e[t[n].toUpperCase()] = t[n]; return e },
                    F = function(t, e) { return typeof t === c && -1 !== L(e).indexOf(L(t)) },
                    L = function(t) { return t.toLowerCase() },
                    V = function(t, e) { if (typeof t === c) return t = t.replace(/^\s\s*/, "").replace(/\s\s*$/, ""), typeof e === u ? t : t.substring(0, 255) },
                    z = function(t, e) { for (var n, r, o, u, c, l, f = 0; f < e.length && !c;) { var h = e[f],
                                p = e[f + 1]; for (n = r = 0; n < h.length && !c;)
                                if (c = h[n++].exec(t))
                                    for (o = 0; o < p.length; o++) l = c[++r], typeof(u = p[o]) === s && u.length > 0 ? 2 === u.length ? typeof u[1] == a ? this[u[0]] = u[1].call(this, l) : this[u[0]] = u[1] : 3 === u.length ? typeof u[1] !== a || u[1].exec && u[1].test ? this[u[0]] = l ? l.replace(u[1], u[2]) : i : this[u[0]] = l ? u[1].call(this, l, u[2]) : i : 4 === u.length && (this[u[0]] = l ? u[3].call(this, l.replace(u[1], u[2])) : i) : this[u] = l || i;
                            f += 2 } },
                    U = function(t, e) { for (var n in e)
                            if (typeof e[n] === s && e[n].length > 0) { for (var r = 0; r < e[n].length; r++)
                                    if (F(e[n][r], t)) return "?" === n ? i : n } else if (F(e[n], t)) return "?" === n ? i : n; return t },
                    q = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" },
                    W = { browser: [
                            [/\b(?:crmo|crios)\/([\w\.]+)/i],
                            [d, [f, "Chrome"]],
                            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                            [d, [f, "Edge"]],
                            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                            [f, d],
                            [/opios[\/ ]+([\w\.]+)/i],
                            [d, [f, "Opera Mini"]],
                            [/\bopr\/([\w\.]+)/i],
                            [d, [f, R]],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                            [f, d],
                            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                            [d, [f, "UCBrowser"]],
                            [/\bqbcore\/([\w\.]+)/i],
                            [d, [f, "WeChat(Win) Desktop"]],
                            [/micromessenger\/([\w\.]+)/i],
                            [d, [f, "WeChat"]],
                            [/konqueror\/([\w\.]+)/i],
                            [d, [f, "Konqueror"]],
                            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                            [d, [f, "IE"]],
                            [/yabrowser\/([\w\.]+)/i],
                            [d, [f, "Yandex"]],
                            [/(avast|avg)\/([\w\.]+)/i],
                            [
                                [f, /(.+)/, "$1 Secure Browser"], d
                            ],
                            [/\bfocus\/([\w\.]+)/i],
                            [d, [f, "Firefox Focus"]],
                            [/\bopt\/([\w\.]+)/i],
                            [d, [f, "Opera Touch"]],
                            [/coc_coc\w+\/([\w\.]+)/i],
                            [d, [f, "Coc Coc"]],
                            [/dolfin\/([\w\.]+)/i],
                            [d, [f, "Dolphin"]],
                            [/coast\/([\w\.]+)/i],
                            [d, [f, "Opera Coast"]],
                            [/miuibrowser\/([\w\.]+)/i],
                            [d, [f, "MIUI Browser"]],
                            [/fxios\/([-\w\.]+)/i],
                            [d, [f, C]],
                            [/\bqihu|(qi?ho?o?|360)browser/i],
                            [
                                [f, "360 Browser"]
                            ],
                            [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                            [
                                [f, /(.+)/, "$1 Browser"], d
                            ],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [f, /_/g, " "], d
                            ],
                            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                            [f, d],
                            [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
                            [f],
                            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                            [
                                [f, N], d
                            ],
                            [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                            [f, d],
                            [/\bgsa\/([\w\.]+) .*safari\//i],
                            [d, [f, "GSA"]],
                            [/headlesschrome(?:\/([\w\.]+)| )/i],
                            [d, [f, "Chrome Headless"]],
                            [/ wv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [f, "Chrome WebView"], d
                            ],
                            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                            [d, [f, "Android Browser"]],
                            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                            [f, d],
                            [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
                            [d, [f, "Mobile Safari"]],
                            [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
                            [d, f],
                            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                            [f, [d, U, { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }]],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [f, d],
                            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                            [
                                [f, "Netscape"], d
                            ],
                            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                            [d, [f, "Firefox Reality"]],
                            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                            [f, d]
                        ], cpu: [
                            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                            [
                                [v, "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                [v, L]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                [v, "ia32"]
                            ],
                            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                            [
                                [v, "arm64"]
                            ],
                            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                            [
                                [v, "armhf"]
                            ],
                            [/windows (ce|mobile); ppc;/i],
                            [
                                [v, "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                            [
                                [v, /ower/, "", L]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                [v, "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                            [
                                [v, L]
                            ]
                        ], device: [
                            [/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                            [l, [p, D],
                                [h, y]
                            ],
                            [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                            [l, [p, D],
                                [h, g]
                            ],
                            [/\((ip(?:hone|od)[\w ]*);/i],
                            [l, [p, x],
                                [h, g]
                            ],
                            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                            [l, [p, x],
                                [h, y]
                            ],
                            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                            [l, [p, T],
                                [h, y]
                            ],
                            [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],
                            [l, [p, T],
                                [h, g]
                            ],
                            [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                            [
                                [l, /_/g, " "],
                                [p, M],
                                [h, g]
                            ],
                            [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                            [
                                [l, /_/g, " "],
                                [p, M],
                                [h, y]
                            ],
                            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                            [l, [p, "OPPO"],
                                [h, g]
                            ],
                            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                            [l, [p, "Vivo"],
                                [h, g]
                            ],
                            [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                            [l, [p, "Realme"],
                                [h, g]
                            ],
                            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                            [l, [p, Z],
                                [h, g]
                            ],
                            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                            [l, [p, Z],
                                [h, y]
                            ],
                            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                            [l, [p, E],
                                [h, y]
                            ],
                            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                            [l, [p, E],
                                [h, g]
                            ],
                            [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                            [l, [p, "Lenovo"],
                                [h, y]
                            ],
                            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                            [
                                [l, /_/g, " "],
                                [p, "Nokia"],
                                [h, g]
                            ],
                            [/(pixel c)\b/i],
                            [l, [p, A],
                                [h, y]
                            ],
                            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                            [l, [p, A],
                                [h, g]
                            ],
                            [/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                            [l, [p, j],
                                [h, g]
                            ],
                            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                            [
                                [l, "Xperia Tablet"],
                                [p, j],
                                [h, y]
                            ],
                            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                            [l, [p, "OnePlus"],
                                [h, g]
                            ],
                            [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                            [l, [p, k],
                                [h, y]
                            ],
                            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                            [
                                [l, /(.+)/g, "Fire Phone $1"],
                                [p, k],
                                [h, g]
                            ],
                            [/(playbook);[-\w\),; ]+(rim)/i],
                            [l, p, [h, y]],
                            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                            [l, [p, S],
                                [h, g]
                            ],
                            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                            [l, [p, O],
                                [h, y]
                            ],
                            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                            [l, [p, O],
                                [h, g]
                            ],
                            [/(nexus 9)/i],
                            [l, [p, "HTC"],
                                [h, y]
                            ],
                            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],
                            [p, [l, /_/g, " "],
                                [h, g]
                            ],
                            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                            [l, [p, "Acer"],
                                [h, y]
                            ],
                            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                            [l, [p, "Meizu"],
                                [h, g]
                            ],
                            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                            [l, [p, "Sharp"],
                                [h, g]
                            ],
                            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                            [p, l, [h, g]],
                            [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                            [p, l, [h, y]],
                            [/(surface duo)/i],
                            [l, [p, P],
                                [h, y]
                            ],
                            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                            [l, [p, "Fairphone"],
                                [h, g]
                            ],
                            [/(u304aa)/i],
                            [l, [p, "AT&T"],
                                [h, g]
                            ],
                            [/\bsie-(\w*)/i],
                            [l, [p, "Siemens"],
                                [h, g]
                            ],
                            [/\b(rct\w+) b/i],
                            [l, [p, "RCA"],
                                [h, y]
                            ],
                            [/\b(venue[\d ]{2,7}) b/i],
                            [l, [p, "Dell"],
                                [h, y]
                            ],
                            [/\b(q(?:mv|ta)\w+) b/i],
                            [l, [p, "Verizon"],
                                [h, y]
                            ],
                            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                            [l, [p, "Barnes & Noble"],
                                [h, y]
                            ],
                            [/\b(tm\d{3}\w+) b/i],
                            [l, [p, "NuVision"],
                                [h, y]
                            ],
                            [/\b(k88) b/i],
                            [l, [p, "ZTE"],
                                [h, y]
                            ],
                            [/\b(nx\d{3}j) b/i],
                            [l, [p, "ZTE"],
                                [h, g]
                            ],
                            [/\b(gen\d{3}) b.+49h/i],
                            [l, [p, "Swiss"],
                                [h, g]
                            ],
                            [/\b(zur\d{3}) b/i],
                            [l, [p, "Swiss"],
                                [h, y]
                            ],
                            [/\b((zeki)?tb.*\b) b/i],
                            [l, [p, "Zeki"],
                                [h, y]
                            ],
                            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                            [
                                [p, "Dragon Touch"], l, [h, y]
                            ],
                            [/\b(ns-?\w{0,9}) b/i],
                            [l, [p, "Insignia"],
                                [h, y]
                            ],
                            [/\b((nxa|next)-?\w{0,9}) b/i],
                            [l, [p, "NextBook"],
                                [h, y]
                            ],
                            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                            [
                                [p, "Voice"], l, [h, g]
                            ],
                            [/\b(lvtel\-)?(v1[12]) b/i],
                            [
                                [p, "LvTel"], l, [h, g]
                            ],
                            [/\b(ph-1) /i],
                            [l, [p, "Essential"],
                                [h, g]
                            ],
                            [/\b(v(100md|700na|7011|917g).*\b) b/i],
                            [l, [p, "Envizen"],
                                [h, y]
                            ],
                            [/\b(trio[-\w\. ]+) b/i],
                            [l, [p, "MachSpeed"],
                                [h, y]
                            ],
                            [/\btu_(1491) b/i],
                            [l, [p, "Rotor"],
                                [h, y]
                            ],
                            [/(shield[\w ]+) b/i],
                            [l, [p, "Nvidia"],
                                [h, y]
                            ],
                            [/(sprint) (\w+)/i],
                            [p, l, [h, g]],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [l, /\./g, " "],
                                [p, P],
                                [h, g]
                            ],
                            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                            [l, [p, I],
                                [h, y]
                            ],
                            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                            [l, [p, I],
                                [h, g]
                            ],
                            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                            [p, l, [h, m]],
                            [/droid.+; (shield) bui/i],
                            [l, [p, "Nvidia"],
                                [h, m]
                            ],
                            [/(playstation [345portablevi]+)/i],
                            [l, [p, j],
                                [h, m]
                            ],
                            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                            [l, [p, P],
                                [h, m]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [p, [h, b]],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [l, /^/, "SmartTV"],
                                [p, D],
                                [h, b]
                            ],
                            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                            [
                                [p, E],
                                [h, b]
                            ],
                            [/(apple) ?tv/i],
                            [p, [l, "Apple TV"],
                                [h, b]
                            ],
                            [/crkey/i],
                            [
                                [l, "Chromecast"],
                                [p, A],
                                [h, b]
                            ],
                            [/droid.+aft(\w)( bui|\))/i],
                            [l, [p, k],
                                [h, b]
                            ],
                            [/\(dtv[\);].+(aquos)/i],
                            [l, [p, "Sharp"],
                                [h, b]
                            ],
                            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
                            [
                                [p, V],
                                [l, V],
                                [h, b]
                            ],
                            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                            [
                                [h, b]
                            ],
                            [/((pebble))app/i],
                            [p, l, [h, _]],
                            [/droid.+; (glass) \d/i],
                            [l, [p, A],
                                [h, _]
                            ],
                            [/droid.+; (wt63?0{2,3})\)/i],
                            [l, [p, I],
                                [h, _]
                            ],
                            [/(quest( 2)?)/i],
                            [l, [p, N],
                                [h, _]
                            ],
                            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                            [p, [h, w]],
                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                            [l, [h, g]],
                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                            [l, [h, y]],
                            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                            [
                                [h, y]
                            ],
                            [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
                            [
                                [h, g]
                            ],
                            [/(android[-\w\. ]{0,9});.+buil/i],
                            [l, [p, "Generic"]]
                        ], engine: [
                            [/windows.+ edge\/([\w\.]+)/i],
                            [d, [f, "EdgeHTML"]],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [d, [f, "Blink"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i],
                            [f, d],
                            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                            [d, f]
                        ], os: [
                            [/microsoft (windows) (vista|xp)/i],
                            [f, d],
                            [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                            [f, [d, U, q]],
                            [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                            [
                                [f, "Windows"],
                                [d, U, q]
                            ],
                            [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
                            [
                                [d, /_/g, "."],
                                [f, "iOS"]
                            ],
                            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                            [
                                [f, "Mac OS"],
                                [d, /_/g, "."]
                            ],
                            [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
                            [d, f],
                            [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                            [f, d],
                            [/\(bb(10);/i],
                            [d, [f, S]],
                            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                            [d, [f, "Symbian"]],
                            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                            [d, [f, "Firefox OS"]],
                            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                            [d, [f, "webOS"]],
                            [/crkey\/([\d\.]+)/i],
                            [d, [f, "Chromecast"]],
                            [/(cros) [\w]+ ([\w\.]+\w)/i],
                            [
                                [f, "Chromium OS"], d
                            ],
                            [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                            [f, d],
                            [/(sunos) ?([\w\.\d]*)/i],
                            [
                                [f, "Solaris"], d
                            ],
                            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i],
                            [f, d]
                        ] },
                    G = function t(e, n) { if (typeof e === s && (n = e, e = i), !(this instanceof t)) return new t(e, n).getResult(); var r = e || (typeof o !== u && o.navigator && o.navigator.userAgent ? o.navigator.userAgent : ""),
                            a = n ? function(t, e) { var n = {}; for (var r in t) e[r] && e[r].length % 2 == 0 ? n[r] = e[r].concat(t[r]) : n[r] = t[r]; return n }(W, n) : W; return this.getBrowser = function() { var t, e = {}; return e.name = i, e.version = i, z.call(e, r, a.browser), e.major = typeof(t = e.version) === c ? t.replace(/[^\d\.]/g, "").split(".")[0] : i, e }, this.getCPU = function() { var t = {}; return t.architecture = i, z.call(t, r, a.cpu), t }, this.getDevice = function() { var t = {}; return t.vendor = i, t.model = i, t.type = i, z.call(t, r, a.device), t }, this.getEngine = function() { var t = {}; return t.name = i, t.version = i, z.call(t, r, a.engine), t }, this.getOS = function() { var t = {}; return t.name = i, t.version = i, z.call(t, r, a.os), t }, this.getResult = function() { return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() } }, this.getUA = function() { return r }, this.setUA = function(t) { return r = typeof t === c && t.length > 255 ? V(t, 255) : t, this }, this.setUA(r), this };
                G.VERSION = "0.7.31", G.BROWSER = B([f, d, "major"]), G.CPU = B([v]), G.DEVICE = B([l, p, h, m, g, b, y, _, w]), G.ENGINE = G.OS = B([f, d]), typeof e !== u ? (t.exports && (e = t.exports = G), e.UAParser = G) : n.amdO ? (r = function() { return G }.call(e, n, e, t)) === i || (t.exports = r) : typeof o !== u && (o.UAParser = G); var H = typeof o !== u && (o.jQuery || o.Zepto); if (H && !H.ua) { var Y = new G;
                    H.ua = Y.getResult(), H.ua.get = function() { return Y.getUA() }, H.ua.set = function(t) { Y.setUA(t); var e = Y.getResult(); for (var n in e) H.ua[n] = e[n] } } }("object" == typeof window ? window : this) }, 84944: function(t, e, n) { "use strict"; var r = n(82109),
                o = n(6790),
                i = n(47908),
                a = n(26244),
                u = n(19303),
                s = n(65417);
            r({ target: "Array", proto: !0 }, { flat: function() { var t = arguments.length ? arguments[0] : void 0,
                        e = i(this),
                        n = a(e),
                        r = s(e, 0); return r.length = o(r, e, e, n, 0, void 0 === t ? 1 : u(t)), r } }) }, 33792: function(t, e, n) { n(51223)("flat") }, 38250: function(t, e, n) { "use strict";
            n.d(e, { Z: function() { return u } });
            n(67294); var r = n(28733),
                o = n(64652),
                i = { row: { display: "flex" }, cell: { flex: 1, backgroundColor: o.wL.White, transition: "none" }, cellWithBorder: { borderRight: "1px solid " + (0, r.DZ)(.5, o.wL.BorderGrey), borderBottom: "1px solid " + (0, r.DZ)(.5, o.wL.BorderGrey) }, activeCell: { backgroundColor: o.wL.Black, borderColor: o.wL.Black } },
                a = n(23431),
                u = function(t) { var e = t.matrix,
                        n = t.hasGrid; return (0, a.tZ)("div", null, e.map((function(t, e) { return (0, a.tZ)("div", { key: "row_" + e, css: i.row }, t.map((function(r, o) { return (0, a.tZ)("div", { key: "cell_" + e + o, css: [i.cell, { paddingBottom: 1 / t.length * 100 + "%" }, n && i.cellWithBorder, n && { paddingBottom: "calc(" + 1 / t.length * 100 + "% - 1px)" }, r && i.activeCell, "", ""] }) }))) }))) } }, 37242: function(t, e, n) { "use strict";
            n.d(e, { Z: function() { return L } }); var r, o, i, a, u, s, c = n(67294),
                l = n(36030),
                f = n(84953),
                h = n(21171),
                p = n(14874),
                d = n(82625),
                v = n.n(d),
                m = { root: { position: "relative", width: "calc(100% - 22px)", height: 22, paddingTop: 8 }, rail: function(t) { return { position: "relative", width: "calc(100% + 22px)", height: 6, backgroundColor: t.border, borderRadius: 3, zIndex: 0 } }, handle: function(t) { return { position: "absolute", top: 0, width: 22, height: 22, backgroundColor: t.foreground, borderRadius: "50%", cursor: "pointer", zIndex: 1 } } },
                g = n(23431),
                y = function(t) { var e = t.percentage,
                        n = t.onDragged,
                        r = c.useRef(null),
                        o = c.useState(310),
                        i = o[0],
                        a = o[1],
                        u = c.useState(e),
                        s = u[0],
                        l = u[1];
                    c.useEffect((function() { var t;
                        a((null === (t = r.current) || void 0 === t ? void 0 : t.clientWidth) || 280) }), []), c.useEffect((function() { var t, n, o = (null === (t = r.current) || void 0 === t ? void 0 : t.clientWidth) || 280;
                        a((null === (n = r.current) || void 0 === n ? void 0 : n.clientWidth) || 280), l(e * o / 100) }), [e]); var f = function(t, e) { var r = Math.min(Math.max(e.x, 0), i),
                            o = Math.round(r / i * 100);
                        n(o) }; return (0, g.tZ)("div", { ref: r, css: m.root }, (0, g.tZ)(v(), { axis: "x", handle: ".handle", position: { x: s, y: 0 }, bounds: { left: 0, right: i }, grid: [5, 10], scale: 1, onDrag: f, onStop: f }, (0, g.tZ)("div", { className: "handle", css: m.handle })), (0, g.tZ)("div", { css: m.rail })) },
                b = n(51198),
                _ = { root: function(t) { return { minWidth: (0, b.e)(15), height: (0, b.e)(5), backgroundColor: t.background, paddingTop: 14, paddingLeft: (0, b.e)(2), paddingRight: (0, b.e)(2), borderRadius: (0, b.e)(3) } } },
                w = function(t) { var e = t.percentage,
                        n = t.onDragged; return (0, g.tZ)("div", { css: _.root }, (0, g.tZ)(y, { percentage: e, onDragged: n })) },
                k = n(8078),
                x = n(3073),
                O = n(35135),
                S = { root: { maxWidth: (0, b.e)(55), marginLeft: "auto", marginRight: "auto" }, topControls: { display: "flex" }, button: ((r = { flex: 1, fontSize: 20, fontWeight: x.F.Weight.Bold, ":not(:last-of-type)": { marginRight: (0, b.e)(1.5) } })[O.A.Mobile] = { height: (0, b.e)(4.5) }, r.img = { height: 18 }, r), playerType: ((o = { marginTop: (0, b.e)(2.5) })[O.A.Mobile] = { marginTop: (0, b.e)(1.5) }, o), draggerDesktop: ((i = { minWidth: (0, b.e)(16), marginRight: (0, b.e)(1.5) })[O.A.Mobile] = { display: "none" }, i), draggerMobile: ((a = { marginTop: (0, b.e)(1.5) })[O.A.DesktopTablet] = { display: "none" }, a) },
                C = n(37085),
                A = n(28733),
                T = { root: function(t) { var e; return (e = { backgroundColor: t.background, padding: (0, b.e)(1.5), borderRadius: 32 })[O.A.Mobile] = { padding: (0, b.e)(1) }, e }, buttonRow: { display: "flex", alignItems: "center", ":not(:last-of-type)": (u = { marginBottom: (0, b.e)(1.5) }, u[O.A.MobilePort] = { marginBottom: (0, b.e)(.5) }, u), "> div": { flex: 1, ":not(:last-of-type)": (s = { marginRight: (0, b.e)(1.5) }, s[O.A.MobilePort] = { marginRight: (0, b.e)(.5) }, s) } }, button: function(t) { return { border: "1px solid " + t.border } }, buttonActive: function(t) { return { border: "1px solid " + t.foreground } }, buttonDisabled: function(t) { return { color: (0, A.DZ)(.7, t.foreground), backgroundColor: (0, A.DZ)(.6, t.secondaryBackground), border: 0, cursor: "default" } } },
                E = [{ value: "default", label: "2Da" }, { value: "xray", label: "2Db" }, { value: "shape-shift", label: "2Dc" }, { value: "painting", label: "2Dd" }, { value: "tbd", label: "2De", disabled: !0 }],
                P = [{ value: "3d", label: "3Da" }, { value: "3d-xray", label: "3Db" }, { value: "3d-shape-shift", label: "3Dc" }, { value: "tbd", label: "3Dd", disabled: !0 }, { value: "tbd", label: "3De", disabled: !0 }],
                Z = [].concat(E, P),
                R = "bioPlayerType",
                D = function(t) { var e = t.playerType,
                        n = t.onClickPlayerType,
                        r = t.eventCategory;
                    c.useEffect((function() { var t = (0, C.i3)(R);
                        t && Z.find((function(e) { return e.value === t })) && n(t) }), []); var o = function(t) {
                        (0, C.Kb)(R, t), n(t) }; return (0, g.tZ)("div", { css: T.root }, (0, g.tZ)("div", { css: T.buttonRow }, E.map((function(t) { var n = t.label,
                            i = t.value,
                            a = t.disabled; return (0, g.tZ)(p.Z, { key: n, ariaLabel: n, disabled: a, size: "small", type: e === i ? "primary" : "default", css: [e !== i && T.button, e === i && T.buttonActive, a && T.buttonDisabled, "", ""], onClick: a ? void 0 : function() { return o(i) }, analytics: { category: r, action: "Click - Bio player type", label: n } }, n) }))), (0, g.tZ)("div", { css: T.buttonRow }, P.map((function(t) { var n = t.label,
                            i = t.value,
                            a = t.disabled; return (0, g.tZ)(p.Z, { key: n, ariaLabel: n, disabled: a, size: "small", type: e === i ? "primary" : "default", css: [e !== i && T.button, e === i && T.buttonActive, a && T.buttonDisabled, "", ""], onClick: a ? void 0 : function() { return o(i) }, analytics: { category: r, action: "Click - Bio player type", label: n } }, n) })))) },
                j = n(37842),
                M = [{ value: "default", label: "2Da" }, { value: "xray", label: "2Db" }, { value: "shape-shift", label: "2Dc" }, { value: "3d", label: "3Da" }, { value: "3d-xray", label: "3Db" }, { value: "3d-shape-shift", label: "3Dc" }],
                I = function(t) { var e = t.playerType,
                        n = t.onClickPlayerType,
                        r = t.eventCategory; return (0, g.tZ)(j.Z, { itemPickerName: "bioPlayerType", items: M, activeItemValue: e, onItemClick: function(t) { return n(t) }, isUniWidth: !0, hasUrlParam: !0, eventCategory: r }) },
                N = 100,
                B = function(t) { return 100 - Math.round((t - N) / 200 * 100) },
                F = function(t) { return 200 * (100 - t) / 100 + N },
                L = function(t) { var e = t.currentState,
                        n = t.playerType,
                        r = t.setPlayerType,
                        o = t.isFullTypeRange,
                        i = t.playMode,
                        a = t.setPlayMode,
                        u = t.isExpanded,
                        s = t.setExpanded,
                        d = t.isMusicOn,
                        v = t.setMusicOn,
                        m = t.randomEncounter,
                        y = t.interval,
                        b = t.setInterval,
                        _ = t.eventCategory,
                        x = c.useContext(h.D).isDarkMode,
                        O = x ? f.PJ.PlayWhite : f.PJ.PlayBlack,
                        C = x ? f.PJ.PauseWhite : f.PJ.PauseBlack,
                        A = x ? f.hF.ResetWhite : f.hF.ResetBlack,
                        T = x ? f.hF.ExpandWhite : f.hF.ExpandBlack,
                        E = x ? f.hF.ShrinkWhite : f.hF.ShrinkBlack,
                        P = x ? f.hF.EncounterWhite : f.hF.EncounterBlack,
                        Z = x ? f.hF.MusicOnWhite : f.hF.MusicOnBlack,
                        R = x ? f.hF.MusicOffWhite : f.hF.MusicOffBlack,
                        j = "play" !== i ? "Play" : "Palse",
                        M = u ? "Shrink" : "Expand",
                        N = d ? "Mute" : "Unmute",
                        L = "Random encounter",
                        V = "play" !== i ? O : C,
                        z = u ? E : T,
                        U = d ? R : Z,
                        q = function() { return a("play") },
                        W = function() { return a("reset") },
                        G = function(t) { r && (r(t), W()) }; return (0, g.tZ)("div", { css: S.root }, (0, g.tZ)("div", { css: S.topControls }, (0, g.tZ)(p.Z, { ariaLabel: j, css: S.button, onClick: function() { "stopped" === e ? (W(), setTimeout((function() { return q() }), 100)) : ("play" === i && a("pause"), "play" !== i && q()) }, analytics: { category: _, action: "Click - " + j, label: j } }, (0, g.tZ)(k.Z, { src: V, alt: j, turnOffLazyLoading: !0 })), (0, g.tZ)(p.Z, { ariaLabel: "Reset", css: S.button, onClick: W, analytics: { category: _, action: "Click - Reset", label: "Reset" } }, (0, g.tZ)(k.Z, { src: A, alt: "Reset", turnOffLazyLoading: !0 })), (0, g.tZ)("div", { css: S.draggerDesktop }, (0, g.tZ)(w, { percentage: B(y), onDragged: function(t) { return b(F(t)) } })), s && (0, g.tZ)(p.Z, { ariaLabel: M, css: S.button, onClick: function() { s && (s(!u), W()) }, analytics: { category: _, action: "Click - " + M, label: M } }, (0, g.tZ)(k.Z, { src: z, alt: M, turnOffLazyLoading: !0 })), v && l.nI && (l.i7 || l.vU) && (0, g.tZ)(p.Z, { ariaLabel: N, css: S.button, onClick: function() { return v(!d) }, analytics: { category: _, action: "Click - " + N, label: N } }, (0, g.tZ)(k.Z, { src: U, alt: N, turnOffLazyLoading: !0 })), m && (0, g.tZ)(p.Z, { ariaLabel: L, css: S.button, onClick: m, analytics: { category: _, action: "Click - Random encounter", label: L } }, (0, g.tZ)(k.Z, { src: P, alt: L, turnOffLazyLoading: !0 }))), n && r && (0, g.tZ)("div", { css: S.playerType }, o ? (0, g.tZ)(D, { playerType: n, onClickPlayerType: G, eventCategory: _ }) : (0, g.tZ)(I, { playerType: n, onClickPlayerType: G, eventCategory: _ })), (0, g.tZ)("div", { css: S.draggerMobile }, (0, g.tZ)(w, { percentage: B(y), onDragged: function(t) { return b(F(t)) } }))) } }, 75963: function(t, e, n) { "use strict";
            n.d(e, { Z: function() { return ft } }); var r = n(67294),
                o = n(38250),
                i = n(45987),
                a = n(29439),
                u = n(87462),
                s = n(93456),
                c = ["args", "radius", "steps", "smoothness", "children"],
                l = 1e-5; var f = r.forwardRef((function(t, e) { var n = t.args;
                    n = void 0 === n ? [] : n; var o = (0, a.Z)(n, 3),
                        f = o[0],
                        h = void 0 === f ? 1 : f,
                        p = o[1],
                        d = void 0 === p ? 1 : p,
                        v = o[2],
                        m = void 0 === v ? 1 : v,
                        g = t.radius,
                        y = void 0 === g ? .05 : g,
                        b = t.steps,
                        _ = void 0 === b ? 1 : b,
                        w = t.smoothness,
                        k = void 0 === w ? 4 : w,
                        x = t.children,
                        O = (0, i.Z)(t, c),
                        S = r.useMemo((function() { return function(t, e, n) { var r = new s.Shape,
                                    o = n - l; return r.absarc(l, l, l, -Math.PI / 2, -Math.PI, !0), r.absarc(l, e - 2 * o, l, Math.PI, Math.PI / 2, !0), r.absarc(t - 2 * o, e - 2 * o, l, Math.PI / 2, 0, !0), r.absarc(t - 2 * o, l, l, 0, -Math.PI / 2, !0), r }(h, d, y) }), [h, d, y]),
                        C = r.useMemo((function() { return { depth: m - 2 * y, bevelEnabled: !0, bevelSegments: 2 * k, steps: _, bevelSize: y - l, bevelThickness: y, curveSegments: k } }), [m, y, k]),
                        A = r.useRef(); return r.useLayoutEffect((function() { A.current && A.current.center() }), [S, C]), r.createElement("mesh", (0, u.Z)({ ref: e }, O), r.createElement("extrudeBufferGeometry", { attach: "geometry", ref: A, args: [S, C] }), x) })),
                h = n(41593),
                p = n(23431),
                d = function(t) { var e = t.active,
                        n = t.size,
                        o = void 0 === n ? 1 : n,
                        i = t.position,
                        a = r.useRef(null),
                        u = r.useRef(null),
                        s = r.useState(.2 * Math.random())[0]; return (0, h.xQ)((function(t) { var n = t.clock;
                        e && (a.current.position.y = .1 * Math.sin(2 * n.elapsedTime + 10 * s), a.current.scale.y = 1.1 + .1 * Math.sin(2 * n.elapsedTime + 10 * s)) })), (0, p.tZ)(r.Fragment, null, (0, p.tZ)(f, { args: [o, o, o], ref: a, radius: e ? o / 10 : 0, smoothness: 4, castShadow: !0, receiveShadow: !0, position: i }, (0, p.tZ)("meshStandardMaterial", { ref: u, attach: "material", color: e ? "#222" : "#E3E6EE", roughness: e ? .3 : .6, metalness: .3, transparent: !0, opacity: 1 }))) },
                v = n(43144),
                m = n(15671),
                g = n(97326),
                y = n(60136),
                b = n(6215),
                _ = n(61120);

            function w(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, _.Z)(t); if (e) { var o = (0, _.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, b.Z)(this, n) } } var k = { type: "change" },
                x = { type: "start" },
                O = { type: "end" },
                S = function(t) {
                    (0, y.Z)(n, t); var e = w(n);

                    function n(t, r) { var o, i, a, u, c, l, f;
                        (0, m.Z)(this, n), o = e.call(this), void 0 === r && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), r === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), o.object = t, o.domElement = r, o.domElement.style.touchAction = "none", o.enabled = !0, o.target = new s.Vector3, o.minDistance = 0, o.maxDistance = 1 / 0, o.minZoom = 0, o.maxZoom = 1 / 0, o.minPolarAngle = 0, o.maxPolarAngle = Math.PI, o.minAzimuthAngle = -1 / 0, o.maxAzimuthAngle = 1 / 0, o.enableDamping = !1, o.dampingFactor = .05, o.enableZoom = !0, o.zoomSpeed = 1, o.enableRotate = !0, o.rotateSpeed = 1, o.enablePan = !0, o.panSpeed = 1, o.screenSpacePanning = !0, o.keyPanSpeed = 7, o.autoRotate = !1, o.autoRotateSpeed = 2, o.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, o.mouseButtons = { LEFT: s.MOUSE.ROTATE, MIDDLE: s.MOUSE.DOLLY, RIGHT: s.MOUSE.PAN }, o.touches = { ONE: s.TOUCH.ROTATE, TWO: s.TOUCH.DOLLY_PAN }, o.target0 = o.target.clone(), o.position0 = o.object.position.clone(), o.zoom0 = o.object.zoom, o._domElementKeyEvents = null, o.getPolarAngle = function() { return y.phi }, o.getAzimuthalAngle = function() { return y.theta }, o.getDistance = function() { return this.object.position.distanceTo(this.target) }, o.listenToKeyEvents = function(t) { t.addEventListener("keydown", it), this._domElementKeyEvents = t }, o.saveState = function() { h.target0.copy(h.target), h.position0.copy(h.object.position), h.zoom0 = h.object.zoom }, o.reset = function() { h.target.copy(h.target0), h.object.position.copy(h.position0), h.object.zoom = h.zoom0, h.object.updateProjectionMatrix(), h.dispatchEvent(k), h.update(), d = p.NONE }, o.update = (i = new s.Vector3, a = (new s.Quaternion).setFromUnitVectors(t.up, new s.Vector3(0, 1, 0)), u = a.clone().invert(), c = new s.Vector3, l = new s.Quaternion, f = 2 * Math.PI, function() { var t = h.object.position;
                            i.copy(t).sub(h.target), i.applyQuaternion(a), y.setFromVector3(i), h.autoRotate && d === p.NONE && B(2 * Math.PI / 60 / 60 * h.autoRotateSpeed), h.enableDamping ? (y.theta += b.theta * h.dampingFactor, y.phi += b.phi * h.dampingFactor) : (y.theta += b.theta, y.phi += b.phi); var e = h.minAzimuthAngle,
                                n = h.maxAzimuthAngle; return isFinite(e) && isFinite(n) && (e < -Math.PI ? e += f : e > Math.PI && (e -= f), n < -Math.PI ? n += f : n > Math.PI && (n -= f), y.theta = e <= n ? Math.max(e, Math.min(n, y.theta)) : y.theta > (e + n) / 2 ? Math.max(e, y.theta) : Math.min(n, y.theta)), y.phi = Math.max(h.minPolarAngle, Math.min(h.maxPolarAngle, y.phi)), y.makeSafe(), y.radius *= _, y.radius = Math.max(h.minDistance, Math.min(h.maxDistance, y.radius)), !0 === h.enableDamping ? h.target.addScaledVector(w, h.dampingFactor) : h.target.add(w), i.setFromSpherical(y), i.applyQuaternion(u), t.copy(h.target).add(i), h.object.lookAt(h.target), !0 === h.enableDamping ? (b.theta *= 1 - h.dampingFactor, b.phi *= 1 - h.dampingFactor, w.multiplyScalar(1 - h.dampingFactor)) : (b.set(0, 0, 0), w.set(0, 0, 0)), _ = 1, !!(S || c.distanceToSquared(h.object.position) > v || 8 * (1 - l.dot(h.object.quaternion)) > v) && (h.dispatchEvent(k), c.copy(h.object.position), l.copy(h.object.quaternion), S = !1, !0) }), o.dispose = function() { h.domElement.removeEventListener("contextmenu", at), h.domElement.removeEventListener("pointerdown", tt), h.domElement.removeEventListener("pointercancel", rt), h.domElement.removeEventListener("wheel", ot), h.domElement.removeEventListener("pointermove", et), h.domElement.removeEventListener("pointerup", nt), null !== h._domElementKeyEvents && h._domElementKeyEvents.removeEventListener("keydown", it) }; var h = (0, g.Z)(o),
                            p = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 },
                            d = p.NONE,
                            v = 1e-6,
                            y = new s.Spherical,
                            b = new s.Spherical,
                            _ = 1,
                            w = new s.Vector3,
                            S = !1,
                            C = new s.Vector2,
                            A = new s.Vector2,
                            T = new s.Vector2,
                            E = new s.Vector2,
                            P = new s.Vector2,
                            Z = new s.Vector2,
                            R = new s.Vector2,
                            D = new s.Vector2,
                            j = new s.Vector2,
                            M = [],
                            I = {};

                        function N() { return Math.pow(.95, h.zoomSpeed) }

                        function B(t) { b.theta -= t }

                        function F(t) { b.phi -= t } var L, V = (L = new s.Vector3, function(t, e) { L.setFromMatrixColumn(e, 0), L.multiplyScalar(-t), w.add(L) }),
                            z = function() { var t = new s.Vector3; return function(e, n) {!0 === h.screenSpacePanning ? t.setFromMatrixColumn(n, 1) : (t.setFromMatrixColumn(n, 0), t.crossVectors(h.object.up, t)), t.multiplyScalar(e), w.add(t) } }(),
                            U = function() { var t = new s.Vector3; return function(e, n) { var r = h.domElement; if (h.object.isPerspectiveCamera) { var o = h.object.position;
                                        t.copy(o).sub(h.target); var i = t.length();
                                        i *= Math.tan(h.object.fov / 2 * Math.PI / 180), V(2 * e * i / r.clientHeight, h.object.matrix), z(2 * n * i / r.clientHeight, h.object.matrix) } else h.object.isOrthographicCamera ? (V(e * (h.object.right - h.object.left) / h.object.zoom / r.clientWidth, h.object.matrix), z(n * (h.object.top - h.object.bottom) / h.object.zoom / r.clientHeight, h.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), h.enablePan = !1) } }();

                        function q(t) { h.object.isPerspectiveCamera ? _ /= t : h.object.isOrthographicCamera ? (h.object.zoom = Math.max(h.minZoom, Math.min(h.maxZoom, h.object.zoom * t)), h.object.updateProjectionMatrix(), S = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), h.enableZoom = !1) }

                        function W(t) { h.object.isPerspectiveCamera ? _ *= t : h.object.isOrthographicCamera ? (h.object.zoom = Math.max(h.minZoom, Math.min(h.maxZoom, h.object.zoom / t)), h.object.updateProjectionMatrix(), S = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), h.enableZoom = !1) }

                        function G(t) { C.set(t.clientX, t.clientY) }

                        function H(t) { E.set(t.clientX, t.clientY) }

                        function Y() { if (1 === M.length) C.set(M[0].pageX, M[0].pageY);
                            else { var t = .5 * (M[0].pageX + M[1].pageX),
                                    e = .5 * (M[0].pageY + M[1].pageY);
                                C.set(t, e) } }

                        function X() { if (1 === M.length) E.set(M[0].pageX, M[0].pageY);
                            else { var t = .5 * (M[0].pageX + M[1].pageX),
                                    e = .5 * (M[0].pageY + M[1].pageY);
                                E.set(t, e) } }

                        function Q() { var t = M[0].pageX - M[1].pageX,
                                e = M[0].pageY - M[1].pageY,
                                n = Math.sqrt(t * t + e * e);
                            R.set(0, n) }

                        function $(t) { if (1 == M.length) A.set(t.pageX, t.pageY);
                            else { var e = ct(t),
                                    n = .5 * (t.pageX + e.x),
                                    r = .5 * (t.pageY + e.y);
                                A.set(n, r) }
                            T.subVectors(A, C).multiplyScalar(h.rotateSpeed); var o = h.domElement;
                            B(2 * Math.PI * T.x / o.clientHeight), F(2 * Math.PI * T.y / o.clientHeight), C.copy(A) }

                        function J(t) { if (1 === M.length) P.set(t.pageX, t.pageY);
                            else { var e = ct(t),
                                    n = .5 * (t.pageX + e.x),
                                    r = .5 * (t.pageY + e.y);
                                P.set(n, r) }
                            Z.subVectors(P, E).multiplyScalar(h.panSpeed), U(Z.x, Z.y), E.copy(P) }

                        function K(t) { var e = ct(t),
                                n = t.pageX - e.x,
                                r = t.pageY - e.y,
                                o = Math.sqrt(n * n + r * r);
                            D.set(0, o), j.set(0, Math.pow(D.y / R.y, h.zoomSpeed)), q(j.y), R.copy(D) }

                        function tt(t) {!1 !== h.enabled && (0 === M.length && (h.domElement.setPointerCapture(t.pointerId), h.domElement.addEventListener("pointermove", et), h.domElement.addEventListener("pointerup", nt)), function(t) { M.push(t) }(t), "touch" === t.pointerType ? function(t) { switch (st(t), M.length) {
                                    case 1:
                                        switch (h.touches.ONE) {
                                            case s.TOUCH.ROTATE:
                                                if (!1 === h.enableRotate) return;
                                                Y(), d = p.TOUCH_ROTATE; break;
                                            case s.TOUCH.PAN:
                                                if (!1 === h.enablePan) return;
                                                X(), d = p.TOUCH_PAN; break;
                                            default:
                                                d = p.NONE } break;
                                    case 2:
                                        switch (h.touches.TWO) {
                                            case s.TOUCH.DOLLY_PAN:
                                                if (!1 === h.enableZoom && !1 === h.enablePan) return;
                                                h.enableZoom && Q(), h.enablePan && X(), d = p.TOUCH_DOLLY_PAN; break;
                                            case s.TOUCH.DOLLY_ROTATE:
                                                if (!1 === h.enableZoom && !1 === h.enableRotate) return;
                                                h.enableZoom && Q(), h.enableRotate && Y(), d = p.TOUCH_DOLLY_ROTATE; break;
                                            default:
                                                d = p.NONE } break;
                                    default:
                                        d = p.NONE }
                                d !== p.NONE && h.dispatchEvent(x) }(t) : function(t) { var e; switch (t.button) {
                                    case 0:
                                        e = h.mouseButtons.LEFT; break;
                                    case 1:
                                        e = h.mouseButtons.MIDDLE; break;
                                    case 2:
                                        e = h.mouseButtons.RIGHT; break;
                                    default:
                                        e = -1 } switch (e) {
                                    case s.MOUSE.DOLLY:
                                        if (!1 === h.enableZoom) return;! function(t) { R.set(t.clientX, t.clientY) }(t), d = p.DOLLY; break;
                                    case s.MOUSE.ROTATE:
                                        if (t.ctrlKey || t.metaKey || t.shiftKey) { if (!1 === h.enablePan) return;
                                            H(t), d = p.PAN } else { if (!1 === h.enableRotate) return;
                                            G(t), d = p.ROTATE } break;
                                    case s.MOUSE.PAN:
                                        if (t.ctrlKey || t.metaKey || t.shiftKey) { if (!1 === h.enableRotate) return;
                                            G(t), d = p.ROTATE } else { if (!1 === h.enablePan) return;
                                            H(t), d = p.PAN } break;
                                    default:
                                        d = p.NONE }
                                d !== p.NONE && h.dispatchEvent(x) }(t)) }

                        function et(t) {!1 !== h.enabled && ("touch" === t.pointerType ? function(t) { switch (st(t), d) {
                                    case p.TOUCH_ROTATE:
                                        if (!1 === h.enableRotate) return;
                                        $(t), h.update(); break;
                                    case p.TOUCH_PAN:
                                        if (!1 === h.enablePan) return;
                                        J(t), h.update(); break;
                                    case p.TOUCH_DOLLY_PAN:
                                        if (!1 === h.enableZoom && !1 === h.enablePan) return;! function(t) { h.enableZoom && K(t), h.enablePan && J(t) }(t), h.update(); break;
                                    case p.TOUCH_DOLLY_ROTATE:
                                        if (!1 === h.enableZoom && !1 === h.enableRotate) return;! function(t) { h.enableZoom && K(t), h.enableRotate && $(t) }(t), h.update(); break;
                                    default:
                                        d = p.NONE } }(t) : function(t) { if (!1 === h.enabled) return; switch (d) {
                                    case p.ROTATE:
                                        if (!1 === h.enableRotate) return;! function(t) { A.set(t.clientX, t.clientY), T.subVectors(A, C).multiplyScalar(h.rotateSpeed); var e = h.domElement;
                                            B(2 * Math.PI * T.x / e.clientHeight), F(2 * Math.PI * T.y / e.clientHeight), C.copy(A), h.update() }(t); break;
                                    case p.DOLLY:
                                        if (!1 === h.enableZoom) return;! function(t) { D.set(t.clientX, t.clientY), j.subVectors(D, R), j.y > 0 ? q(N()) : j.y < 0 && W(N()), R.copy(D), h.update() }(t); break;
                                    case p.PAN:
                                        if (!1 === h.enablePan) return;! function(t) { P.set(t.clientX, t.clientY), Z.subVectors(P, E).multiplyScalar(h.panSpeed), U(Z.x, Z.y), E.copy(P), h.update() }(t) } }(t)) }

                        function nt(t) { ut(t), 0 === M.length && (h.domElement.releasePointerCapture(t.pointerId), h.domElement.removeEventListener("pointermove", et), h.domElement.removeEventListener("pointerup", nt)), h.dispatchEvent(O), d = p.NONE }

                        function rt(t) { ut(t) }

                        function ot(t) {!1 !== h.enabled && !1 !== h.enableZoom && d === p.NONE && (t.preventDefault(), h.dispatchEvent(x), function(t) { t.deltaY < 0 ? W(N()) : t.deltaY > 0 && q(N()), h.update() }(t), h.dispatchEvent(O)) }

                        function it(t) {!1 !== h.enabled && !1 !== h.enablePan && function(t) { var e = !1; switch (t.code) {
                                    case h.keys.UP:
                                        U(0, h.keyPanSpeed), e = !0; break;
                                    case h.keys.BOTTOM:
                                        U(0, -h.keyPanSpeed), e = !0; break;
                                    case h.keys.LEFT:
                                        U(h.keyPanSpeed, 0), e = !0; break;
                                    case h.keys.RIGHT:
                                        U(-h.keyPanSpeed, 0), e = !0 }
                                e && (t.preventDefault(), h.update()) }(t) }

                        function at(t) {!1 !== h.enabled && t.preventDefault() }

                        function ut(t) { delete I[t.pointerId]; for (var e = 0; e < M.length; e++)
                                if (M[e].pointerId == t.pointerId) return void M.splice(e, 1) }

                        function st(t) { var e = I[t.pointerId];
                            void 0 === e && (e = new s.Vector2, I[t.pointerId] = e), e.set(t.pageX, t.pageY) }

                        function ct(t) { var e = t.pointerId === M[0].pointerId ? M[1] : M[0]; return I[e.pointerId] } return h.domElement.addEventListener("contextmenu", at), h.domElement.addEventListener("pointerdown", tt), h.domElement.addEventListener("pointercancel", rt), h.domElement.addEventListener("wheel", ot, { passive: !1 }), o.update(), o } return (0, v.Z)(n) }(s.EventDispatcher),
                C = n(88709),
                A = n(36171),
                T = n(28733),
                E = { root: function(t) { return { position: "relative", width: "100%", backgroundColor: (0, T.DZ)(.5, t.secondaryBackground), paddingBottom: "100%" } }, container: { position: "absolute", width: "100%", height: "100%" } };
            (0, C.v)({ samples: 64 }); var P = function() { var t = (0, h.Ky)(),
                        e = t.camera,
                        n = t.gl; return r.useEffect((function() { var t = new S(e, n.domElement); return t.minDistance = 3, t.maxDistance = 20,
                            function() { t.dispose() } }), [e, n]), null },
                Z = function(t) { var e = t.children; return (0, p.tZ)("div", { css: E.root }, (0, p.tZ)("div", { css: E.container }, (0, p.tZ)(h.Xz, { id: A.a.THREED_CANVAS, shadows: !0, camera: { position: [0, 17, 0], fov: 65 } }, (0, p.tZ)("color", { attach: "background", args: ["#90909a"] }), (0, p.tZ)("fog", { attach: "fog", args: ["#90909a", 0, 100], near: 10 }), (0, p.tZ)(P, null), (0, p.tZ)("ambientLight", { intensity: .5 }), (0, p.tZ)("directionalLight", { castShadow: !0, position: [-2.5, 8, -5], intensity: 1.5, "shadow-mapSize-width": 1024, "shadow-mapSize-height": 1024, "shadow-camera-far": 50, "shadow-camera-left": -20, "shadow-camera-right": 20, "shadow-camera-top": 20, "shadow-camera-bottom": -20 }), (0, p.tZ)("pointLight", { position: [-10, .5, -20], color: "hotpink", intensity: .05 }), (0, p.tZ)("pointLight", { position: [20, 1, 0], color: "#2F80ED", intensity: .1 }), (0, p.tZ)("pointLight", { position: [10, .5, 0], color: "skyblue", intensity: .3 }), (0, p.tZ)("pointLight", { position: [0, -10, 0], intensity: 1.5 }), (0, p.tZ)("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, -3.5, 0], receiveShadow: !0 }, (0, p.tZ)("planeBufferGeometry", { attach: "geometry", args: [200, 200] }), (0, p.tZ)("shadowMaterial", { attach: "material", transparent: !0, opacity: .4 }), (0, p.tZ)("meshStandardMaterial", { attach: "material", color: "#a0a0a9", roughness: 1, metalness: .3 })), e))) },
                R = function(t) { var e = t.matrix,
                        n = 1 / Math.round(e.length / 17); return (0, p.tZ)(Z, null, (0, p.tZ)(f, { args: [18, .2, 18], radius: .01, smoothness: 4, castShadow: !0, receiveShadow: !0, position: [0, -3, 0] }, (0, p.tZ)("shadowMaterial", { attach: "material", transparent: !0, opacity: .4 }), (0, p.tZ)("meshStandardMaterial", { attach: "material", color: "#E3E6EE", roughness: .6, metalness: .3 })), e.map((function(t, e) { return (0, p.tZ)(r.Fragment, { key: e }, t.map((function(t, r) { return t ? (0, p.tZ)(d, { key: r, active: t, size: n, position: [r * n - 8, 0, e * n - 8] }) : null }))) }))) },
                D = n(93433),
                j = (n(84944), n(33792), function(t) { var e = t.value,
                        n = t.active,
                        o = t.generation,
                        i = t.max,
                        a = t.size,
                        u = void 0 === a ? 1 : a,
                        s = t.position,
                        c = r.useRef(null),
                        l = r.useRef(null),
                        h = r.useState("#eeeeee"),
                        d = h[0],
                        v = h[1],
                        m = r.useState("#eeeeee"),
                        g = m[0],
                        y = m[1]; return (0, r.useEffect)((function() { c.current.position.y = 5 * e / u / i / 4, c.current.scale.y = 5 * e / u / i,
                            function() { if (o > 0) { var t = o % 200 + 180,
                                        n = (i - e) / i * 20,
                                        r = t <= 240 ? (t + n) % 360 : (t - n) % 360;
                                    v((0, T.Ym)({ hue: r, saturation: 2 * e * .8 / (i + o), lightness: 1 - .7 * e / i })), y((0, T.Ym)({ hue: r, saturation: 2 * i * .8 / (i + o), lightness: 1 - .7 * i / i })) } else v("#eeeeee"), y("#eeeeee") }() }), [e, o, n, i, u]), (0, p.tZ)(r.Fragment, null, (0, p.tZ)(f, { args: [u, u, u], ref: c, radius: u / 10, smoothness: 4, castShadow: !0, receiveShadow: !0, position: s }, (0, p.tZ)("meshStandardMaterial", { ref: l, attach: "material", color: n ? g : d, roughness: .3, metalness: .3, transparent: !0, opacity: n ? 1 : e / 3 / i + .67 }))) }),
                M = function(t) { var e = t.matrix,
                        n = t.numMatrix,
                        o = t.generation,
                        i = 1 / Math.round(e.length / 17),
                        a = Math.max.apply(Math, (0, D.Z)(n.flat())); return (0, p.tZ)(Z, null, n.map((function(t, n) { return (0, p.tZ)(r.Fragment, { key: n }, t.map((function(t, r) { return t > 0 && (0, p.tZ)(j, { key: r, active: e[n][r], value: t, generation: o, max: a, size: i, position: [r * i - 8, 0, n * i - 8] }) }))) }))) },
                I = n(64652),
                N = { row: { display: "flex" }, cell: { flex: 1, backgroundColor: I.wL.White, transition: "none" } },
                B = function(t) { var e = t.value,
                        n = t.generation,
                        r = t.max,
                        o = t.matrixSize,
                        i = n % 200 + 180,
                        a = (r - e) / r * 20,
                        u = i <= 240 ? (i + a) % 360 : (i - a) % 360,
                        s = (0, T.Ym)({ hue: u, saturation: 2 * e / (r + n), lightness: 1 - .75 * e / r }); return (0, p.tZ)("div", { css: [N.cell, { paddingBottom: 1 / o * 100 + "%", backgroundColor: s }, "", ""] }) },
                F = function(t) { var e = t.numMatrix,
                        n = t.generation,
                        r = e.length,
                        o = Math.max.apply(Math, (0, D.Z)(e.flat())); return (0, p.tZ)("div", null, e.map((function(t, e) { return (0, p.tZ)("div", { key: "row_" + e, css: N.row }, t.map((function(t, i) { return (0, p.tZ)(B, { key: "cell_" + e + i, value: t, generation: n + 1, max: o, matrixSize: r }) }))) }))) },
                L = n(44269),
                V = n(18905),
                z = n(8078),
                U = { canvasContainer: { overflow: "hidden", background: "url(" + V.cJ + "/bio-display/canvas.jpg) center no-repeat", backgroundSize: "100%" }, row: { display: "flex" }, cell: { position: "relative", flex: 1, transition: "none", "> div": { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, img: { width: "220%", height: "120%" } } } },
                q = { teal: 4, "dark-teal": 4, blue: 6, purple: 3, pink: 5, red: 4, orange: 6, yellow: 4, green: 9, white: 3 },
                W = [{ start: 0, end: 0, colorCount: 10 }, { start: 1, end: 8, colorCount: 8 }, { start: 9, end: 15, colorCount: 7 }, { start: 16, end: 21, colorCount: 6 }],
                G = function(t) { var e = t.active,
                        n = t.generation,
                        o = t.position,
                        i = t.matrixSize,
                        a = t.colorSchema,
                        u = r.useState(n),
                        s = u[0],
                        c = u[1],
                        l = r.useState(1),
                        f = l[0],
                        h = l[1],
                        d = r.useState(0),
                        v = d[0],
                        m = d[1],
                        g = r.useState(),
                        y = g[0],
                        b = g[1];
                    r.useEffect((function() { 1 === n && c(n), 1 !== n || e || b(void 0) }), [n, i]), r.useEffect((function() { if (e) { c(n); var t = Math.round(6 * (o[0] + o[1]) / i),
                                r = W.find((function(t) { return a >= t.start && a <= t.end })) || W[0],
                                u = r.colorCount,
                                s = r.start,
                                l = ((n + t) % u + (a - s)) % 10,
                                f = Object.keys(q)[l],
                                p = Math.floor(Math.random() * q[f]) + 1;
                            b(f + "-" + p + ".png"), h(n), m(Math.floor(91 * Math.random())) } }), [e, a]); var _ = e ? 1 : 1 - Math.max(0, Math.min(n - s, 5)) / 8,
                        w = e ? 1 : 1 - Math.max(0, Math.min(n - s, 15)) / 20; return (0, p.tZ)("div", { css: [U.cell, { paddingBottom: 1 / i * 100 + "%", zIndex: f }, "", ""] }, y && (0, p.tZ)("div", { css: (0, p.iv)({ transform: "rotate(" + v + "deg)", filter: "brightness(" + w + ")", opacity: _ }, "", "") }, (0, p.tZ)(z.Z, { src: V.cJ + "/bio-display/brushes-v1/" + y, alt: "brush", turnOffLazyLoading: !0 }))) },
                H = [0, 10, 20],
                Y = [95, 100, 105, 110, 115],
                X = [90, 100, 105, 110],
                Q = [-30, -20, -10, 0, 10, 20],
                $ = function(t) { var e = t.matrix,
                        n = t.generation,
                        o = r.useState(),
                        i = o[0],
                        a = o[1],
                        u = e.length,
                        s = i ? i % 22 : 0,
                        c = ["saturate(" + Y[s % Y.length] + "%)", "brightness(" + X[s % X.length] + "%)", "hue-rotate(" + Q[s % Q.length] + "deg)", "sepia(" + H[s % H.length] + "%)"].join(" "),
                        l = (0, L.D)(u); return r.useEffect((function() { if (void 0 === i || l !== u) { var t = e.flat().indexOf(!0); - 1 !== t && (a(t), console.log(t % 22)) } }), [e, u]), (0, p.tZ)("div", { css: [U.canvasContainer, { filter: c }, "", ""] }, e.map((function(t, e) { return (0, p.tZ)("div", { key: "row_" + e, css: U.row }, t.map((function(t, r) { return (0, p.tZ)(G, { key: "cell_" + e + r, active: t, generation: n + 1, position: [e, r], matrixSize: u, colorSchema: s }) }))) }))) },
                J = { row: { display: "flex" }, cell: { position: "relative", flex: 1, backgroundColor: I.wL.BioShapeShiftBackground, transition: "none", "> div": { position: "absolute", top: 1, left: 1, right: 1, bottom: 1 } } },
                K = function(t) { var e = t.value,
                        n = t.active,
                        o = t.generation,
                        i = t.position,
                        a = t.matrixSize,
                        u = r.useState(o),
                        s = u[0],
                        c = u[1];
                    r.useEffect((function() { c(o) }), [n]), r.useEffect((function() { 1 === o && c(o) }), [o]); var l = function() { if (1 !== s || n) { var t = Math.round(6 * (i[0] + i[1]) / a),
                                    e = (s + t) % 6,
                                    r = Math.max(0, Math.min(o - s, 4)) / 4,
                                    u = n ? 0 : r; return (0, T.DZ)(u, I.GL[e]) } return I.wL.BioShapeShiftBackground }(),
                        f = Math.max(1.5, Math.ceil(3 / (a / 17))),
                        h = r.useMemo((function() { var t = (e + i[0] + i[1]) % 6; return 1 === t ? "square_o" : 2 === t ? "circle" : 3 === t ? "circle_o" : 4 === t ? "diamond" : 5 === t ? "diamond_o" : "square" }), [e]); return (0, p.tZ)("div", { css: [J.cell, { paddingBottom: 1 / a * 100 + "%" }, "", ""] }, "square" === h && (0, p.tZ)("div", { css: (0, p.iv)({ backgroundColor: l, borderRadius: 2 }, "", "") }), "square_o" === h && (0, p.tZ)("div", { css: (0, p.iv)({ border: f + "px solid " + l, borderRadius: 2 }, "", "") }), "circle" === h && (0, p.tZ)("div", { css: (0, p.iv)({ backgroundColor: l, borderRadius: "50%" }, "", "") }), "circle_o" === h && (0, p.tZ)("div", { css: (0, p.iv)({ border: f + "px solid " + l, borderRadius: "50%" }, "", "") }), "diamond" === h && (0, p.tZ)("div", { css: (0, p.iv)({ backgroundColor: l, transform: "rotate(45deg) scale(0.7)", borderRadius: a < 50 ? 2 : 1 }, "", "") }), "diamond_o" === h && (0, p.tZ)("div", { css: (0, p.iv)({ border: Math.round(f / .7) + "px solid " + l, transform: "rotate(45deg) scale(0.7)", borderRadius: 2 }, "", "") })) },
                tt = function(t) { var e = t.matrix,
                        n = t.numMatrix,
                        r = t.generation,
                        o = n.length; return (0, p.tZ)("div", null, n.map((function(t, n) { return (0, p.tZ)("div", { key: "row_" + n, css: J.row }, t.map((function(t, i) { return (0, p.tZ)(K, { key: "cell_" + n + i, value: t, active: e[n][i], generation: r + 1, position: [n, i], matrixSize: o }) }))) }))) },
                et = ["args", "children"];

            function nt(t) { var e = t + "BufferGeometry"; return r.forwardRef((function(t, n) { var o = t.args,
                        a = t.children,
                        s = (0, i.Z)(t, et); return r.createElement("mesh", (0, u.Z)({ ref: n }, s), r.createElement(e, { attach: "geometry", args: o }), a) })) }
            nt("box"), nt("circle"); var rt = nt("cone"),
                ot = (nt("cylinder"), nt("sphere")),
                it = (nt("plane"), nt("tube"), nt("torus")),
                at = (nt("torusKnot"), nt("tetrahedron"), nt("ring"), nt("polyhedron"), nt("icosahedron"), nt("octahedron")),
                ut = nt("dodecahedron"),
                st = (nt("extrude"), nt("lathe"), function(t) { var e = t.value,
                        n = t.active,
                        o = t.generation,
                        i = t.size,
                        a = void 0 === i ? 1 : i,
                        s = t.cellPosition,
                        c = t.matrixSize,
                        l = t.position,
                        h = r.useState(o),
                        d = h[0],
                        v = h[1];
                    r.useEffect((function() { v(o) }), [n]), r.useEffect((function() { 1 === o && v(o) }), [o]); var m = function() { if (1 !== d || n) { var t = 1 - Math.max(0, Math.min(o - d, 3)) / 3; return n ? 1 : t } return 0 }(),
                        g = r.useMemo((function() { var t = Math.round(6 * (s[0] + s[1]) / c),
                                e = (o + t) % 6; return I.GL[e] }), [n, c]),
                        y = r.useMemo((function() { return (e + s[0] + s[1]) % 6 }), [e]); if (0 === m) return null; var b = (0, p.tZ)("meshStandardMaterial", { attach: "material", color: g, roughness: (y + 2) / 10, metalness: (y + 2) / 10, transparent: !0, opacity: m }),
                        _ = { smoothness: 4, castShadow: !0, receiveShadow: !0, position: l }; return 1 === y ? (0, p.tZ)(ot, (0, u.Z)({}, _, { args: [.9 * a / 2, 20, 20] }), b) : 2 === y ? (0, p.tZ)(it, (0, u.Z)({}, _, { args: [a / 3, a / 6, 20, 20], rotation: [-Math.PI / 2, 0, 0] }), b) : 3 === y ? (0, p.tZ)(rt, (0, u.Z)({}, _, { args: [.9 * a / 2, a, 20] }), b) : 4 === y ? (0, p.tZ)(at, (0, u.Z)({}, _, { args: [a / 2] }), b) : 5 === y ? (0, p.tZ)(ut, (0, u.Z)({}, _, { args: [a / 2], rotation: [-Math.PI / 2, 0, 0] }), b) : (0, p.tZ)(f, (0, u.Z)({ args: [.8 * a, .8 * a, .8 * a], radius: a / 10 }, _), b) }),
                ct = function(t) { var e = t.matrix,
                        n = t.numMatrix,
                        o = t.generation,
                        i = 1 / Math.round(e.length / 17),
                        a = e.length; return (0, p.tZ)(Z, null, (0, p.tZ)(f, { args: [21, .2, 21], radius: .01, smoothness: 4, castShadow: !0, receiveShadow: !0, position: [0, -3, 0] }, (0, p.tZ)("shadowMaterial", { attach: "material", transparent: !0, opacity: .4 }), (0, p.tZ)("meshStandardMaterial", { attach: "material", color: I.wL.BioShapeShiftBackground, roughness: .6, metalness: .3 })), n.map((function(t, n) { return (0, p.tZ)(r.Fragment, { key: n }, t.map((function(t, r) { return t > 0 && (0, p.tZ)(st, { key: r, value: t, active: e[n][r], generation: o + 1, size: i, cellPosition: [n, r], matrixSize: a, position: [r * i - 8, 0, n * i - 8] }) }))) }))) },
                lt = n(56284),
                ft = function(t) { var e = t.playerType,
                        n = t.matrix,
                        i = t.numMatrix,
                        a = t.genetationCount,
                        u = t.largerBorder,
                        s = [lt.Z.playground, u && lt.Z.playerBiggerBorder]; return (0, p.tZ)(r.Fragment, null, "default" === e && (0, p.tZ)("div", { css: s }, (0, p.tZ)(o.Z, { matrix: n })), "xray" === e && (0, p.tZ)("div", { css: s }, (0, p.tZ)(F, { numMatrix: i, generation: a })), "painting" === e && (0, p.tZ)("div", { css: s }, (0, p.tZ)($, { matrix: n, generation: a })), "shape-shift" === e && (0, p.tZ)("div", { css: s }, (0, p.tZ)(tt, { matrix: n, numMatrix: i, generation: a })), "3d" === e && (0, p.tZ)("div", { css: lt.Z.threeDPlayground }, (0, p.tZ)(R, { matrix: n })), "3d-xray" === e && (0, p.tZ)("div", { css: lt.Z.threeDPlayground }, (0, p.tZ)(M, { matrix: n, numMatrix: i, generation: a })), "3d-shape-shift" === e && (0, p.tZ)("div", { css: lt.Z.threeDPlayground }, (0, p.tZ)(ct, { matrix: n, numMatrix: i, generation: a }))) } }, 56284: function(t, e, n) { "use strict"; var r = n(28733),
                o = n(51198),
                i = { playground: function(t) { return { maxWidth: (0, o.e)(55), backgroundColor: t.border, padding: (0, o.e)(2), marginLeft: "auto", marginRight: "auto" } }, playerBiggerBorder: { padding: (0, o.e)(2.5) + " " + (0, o.e)(3) + " " + (0, o.e)(3.5) }, threeDPlayground: { maxWidth: (0, o.e)(55), marginLeft: "auto", marginRight: "auto" }, playerControls: function(t) { return { backgroundColor: (0, r.DZ)(.5, t.secondaryBackground), padding: (0, o.e)(2) + " " + (0, o.e)(2) + " " + (0, o.e)(2.5) } }, detail: { display: "flex", justifyContent: "space-between", textTransform: "uppercase" }, squarePlayerRoot: { position: "relative", overflow: "hidden" }, blocker: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 3e3 }, floatingController: { position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 3100 }, floatingControlsOpen: function(t) { return { boxShadow: "0px -10px 20px " + t.shadowDeep } }, controller: function(t) { return { display: "flex", justifyContent: "center", alignItems: "center", height: (0, o.e)(3.5), paddingBottom: 5, cursor: "pointer", transition: "all 0.2s ease", "> div": { width: 8, height: 8, backgroundColor: t.background, borderRadius: "50%", marginLeft: 5, marginRight: 5 } } }, controllerOpen: function(t) { return { backgroundColor: t.background, paddingBottom: 0, "> div": { backgroundColor: t.foreground } } }, controlsOuterContainer: function(t) { return { backgroundColor: t.background } } };
            e.Z = i }, 15750: function(t, e, n) { "use strict";
            n.d(e, { c: function() { return pl } }); var r = n(67294),
                o = n(44269),
                i = n(18445),
                a = [{ C1: [0, 10, 16, 19, 22, 26], D5: [8, 24], C6: [1, 2, 6, 11, 14, 17, 18, 22, 27, 30], C7: [4, 13, 20, 29] }, { D1: [0, 6, 16, 26], C2: [4, 10, 12, 20, 28], C6: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], C7: [0], C5: [8] }, { C1: [0, 2, 10, 17, 18, 26], D2: [4, 7, 9, 14, 17, 20, 23, 25, 30], D6: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], C7: [0], C4: [0, 6, 12, 18, 20] }, { D1: [0, 4, 8, 12, 16, 20, 24, 28], F5: [4, 12, 20, 28], C6: [1, 7, 9, 17, 23, 25], C7: [2, 6, 10, 14, 18, 22, 26, 30], D4: [14, 15] }, { C1: [0, 2, 10, 11, 15, 16, 18, 26, 27, 31], E2: [4, 12, 20, 28], E6: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], C5: [1, 7, 9, 17, 23, 25] }, { D1: [0, 6, 12, 18, 20], F2: [8, 24], C6: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], D5: [8, 24] }, { C1: [0, 6, 10, 14, 16, 22, 26, 30], G2: [4, 12, 20, 28], C6: [0, 4, 8, 12, 16, 20, 24, 28], C7: [12, 28], F5: [4, 12, 20, 28] }],
                u = n(93433),
                s = function(t, e) { var n = ["C2", "D2", "E2", "F2", "G2", "A2", "B2", "C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4", "D4", "E4", "F4", "G4"],
                        r = n.slice(5);
                    ("guitar-acoustic" === t || "trumpet" === t || "tuba" === t || "saxophone" === t || "flute" === t || t.includes("sawtooth")) && (r = n.slice(0, 16)); var o = [].concat((0, u.Z)(r), (0, u.Z)(r.reverse())); return o[e % o.length] },
                c = [
                    [2, 0, 2, 0, 2, 0, 2, 0, 1, 1, 1, 1, 2, 0, 2, 0, 2, 0, 1, 1, 1, 1, 2, 0, 1, 1, 2, 0, 1, 1, 2, 0],
                    [2, 0, 2, 0, 1, 1, 1, 1, 2, 0, 1, 1, 2, 0, 2, 0, 1, 1, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1, 1, 2, 0],
                    [4, 0, 0, 0, 1, 1, 2, 0, 2, 0, 4, 0, 0, 0, 2, 0, 1, 1, 4, 0, 0, 0, 2, 0, 1, 1, 1, 1, 4, 0, 0, 0],
                    [2, 0, 0, 0, 1, 1, 0, 0, 1, 1, 2, 0, 0, 0, 2, 0, 0, 0, 1, 1, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 1, 1],
                    [1, 1, 1, 1, 0, 0, 2, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 2, 0, 2, 0, 2, 0, 0, 0, 2, 0],
                    [4, 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 4, 0, 0, 0, 2, 0, 4, 0, 0, 0, 0, 0, 1, 1, 0, 0, 4, 0, 0, 0],
                    [3, 0, 0, 1, 2, 0, 2, 0, 1, 1, 3, 0, 0, 1, 2, 0, 2, 0, 3, 0, 0, 1, 2, 0, 4, 0, 0, 0, 3, 0, 0, 1],
                    [1, 1, 0, 0, 3, 0, 0, 1, 3, 0, 0, 1, 0, 0, 1, 1, 3, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 3, 0, 0, 1],
                    [4, 0, 0, 0, 1, 2, 0, 1, 4, 0, 0, 0, 3, 0, 0, 1, 3, 0, 0, 1, 4, 0, 0, 0, 1, 2, 0, 1, 4, 0, 0, 0],
                    [1, 2, 0, 1, 1, 1, 2, 0, 1, 1, 1, 2, 0, 1, 1, 1, 1, 2, 0, 1, 1, 2, 0, 1, 1, 2, 0, 1, 2, 0, 1, 1]
                ],
                l = function(t) { var e = t.instrumentType,
                        n = t.instrumentsCount,
                        r = t.sampler,
                        o = t.index,
                        i = t.matrix,
                        u = t.generation,
                        l = t.activeCount,
                        f = t.interval,
                        h = function(t) { for (var e = 0, n = 0, r = 0, o = 0, i = 0, a = 0, u = function(u) { var s = t[u].reduce((function(t, e) { return t + (e ? 1 : 0) }), 0),
                                        c = t.reduce((function(t, e) { return t + (e[u] ? 1 : 0) }), 0),
                                        l = s + c;
                                    l > e ? e = l : l > n && (n = l), s > r ? r = s : s > o && (o = s), c > i ? i = c : c > a && (a = c) }, s = 0; s < t.length; s++) u(s); return { maxTotal: e, secondTotal: n, maxRow: r, secondRow: o, maxCol: i, secondCol: a } }(i),
                        p = h.maxTotal,
                        d = h.secondTotal,
                        v = h.maxRow,
                        m = h.secondRow,
                        g = h.maxCol,
                        y = h.secondCol,
                        b = f / 1e3,
                        _ = Math.floor(u / 32) % n,
                        w = o < _ ? n + o - _ : o - _,
                        k = [s(e, p), s(e, d), s(e, v), s(e, m), s(e, g), s(e, y)],
                        x = k[w],
                        O = k[w + 1],
                        S = c[(l + o) % c.length][u % 32],
                        C = c[(l + o + 1) % c.length][u % 32],
                        A = [1, .3, .5, .3, .7, .2, .4, .2][u % 4] * (u < 16 ? .25 : .5) * (0 === w ? 1 : 0 === w ? .5 : .3),
                        T = A * Math.min(p, 10) / 10,
                        E = A * Math.min(v, 10) / 20; if ("piano" === e || "polysynth" === e || "xylophone" === e) S && r.triggerAttackRelease(x, b * S, void 0, T), C && r.triggerAttackRelease(O, b * C, void 0, E);
                    else if ("drum" === e)
                        for (var P = a[(l + o) % a.length], Z = 0, R = Object.keys(P); Z < R.length; Z++) { var D = R[Z];
                            P[D].find((function(t) { return t === u % 32 })) && r.triggerAttackRelease(D, b, void 0, T) } else S && r.triggerAttackRelease(x, b * S, void 0, T) },
                f = n(59350),
                h = function(t) { return new Array(t).fill(function(t) { return new Array(t).fill(0) }(t)) },
                p = function(t, e) { for (var n = e.length, r = JSON.parse(JSON.stringify(t)), o = 0; o < n; o++)
                        for (var i = 0; i < n; i++) e[o][i] && (r[o][i] = r[o][i] + 1); return r },
                d = n(15861),
                v = n(87757),
                m = n.n(v),
                g = "14.7.77",
                y = n(2236),
                b = n(29439),
                _ = n(43144),
                w = n(15671),
                k = (n(17727), new WeakSet),
                x = new WeakMap,
                O = new WeakMap,
                S = new WeakMap,
                C = new WeakMap,
                A = new WeakMap,
                T = new WeakMap,
                E = new WeakMap,
                P = new WeakMap,
                Z = new WeakMap,
                R = { construct: function() { return R } },
                D = /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,
                j = function(t, e) { for (var n = [], r = t.replace(/^[\s]+/, ""), o = r.match(D); null !== o;) { var i = o[1].slice(1, -1),
                            a = o[0].replace(/([\s]+)?;?$/, "").replace(i, new URL(i, e).toString());
                        n.push(a), o = (r = r.slice(o[0].length).replace(/^[\s]+/, "")).match(D) } return [n.join(";"), r] },
                M = function(t) { if (void 0 !== t && !Array.isArray(t)) throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.") },
                I = function(t) { if (! function(t) { try { new new Proxy(t, R) } catch (e) { return !1 } return !0 }(t)) throw new TypeError("The given value for processorCtor should be a constructor."); if (null === t.prototype || "object" != typeof t.prototype) throw new TypeError("The given value for processorCtor should have a prototype.") },
                N = function(t, e) { var n = t.get(e); if (void 0 === n) throw new Error("A value with the given key could not be found."); return n },
                B = function(t, e) { var n = Array.from(t).filter(e); if (n.length > 1) throw Error("More than one element was found."); if (0 === n.length) throw Error("No element was found."); var r = (0, b.Z)(n, 1)[0]; return t.delete(r), r },
                F = function(t, e, n, r) { var o = N(t, e),
                        i = B(o, (function(t) { return t[0] === n && t[1] === r })); return 0 === o.size && t.delete(e), i },
                L = function(t) { return N(T, t) },
                V = function(t) { if (k.has(t)) throw new Error("The AudioNode is already stored.");
                    k.add(t), L(t).forEach((function(t) { return t(!0) })) },
                z = function(t) { return "port" in t },
                U = function(t) { if (!k.has(t)) throw new Error("The AudioNode is not stored.");
                    k.delete(t), L(t).forEach((function(t) { return t(!1) })) },
                q = function(t, e) {!z(t) && e.every((function(t) { return 0 === t.size })) && U(t) },
                W = n(4942),
                G = n(60136),
                H = n(6215),
                Y = n(61120);

            function X(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function Q(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? X(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : X(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function $(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var J = { channelCount: 2, channelCountMode: "max", channelInterpretation: "speakers", fftSize: 2048, maxDecibels: -30, minDecibels: -100, smoothingTimeConstant: .8 },
                K = function(t, e) { return t.context === e },
                tt = function(t) { try { t.copyToChannel(new Float32Array(1), 0, -1) } catch (e) { return !1 } return !0 },
                et = function() { return new DOMException("", "IndexSizeError") },
                nt = function(t) { var e;
                    t.getChannelData = (e = t.getChannelData, function(n) { try { return e.call(t, n) } catch (r) { if (12 === r.code) throw et(); throw r } }) };

            function rt(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function ot(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? rt(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : rt(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t } var it = { numberOfChannels: 1 },
                at = n(97326),
                ut = -34028234663852886e22,
                st = -ut,
                ct = function(t) { return k.has(t) };

            function lt(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function ft(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? lt(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : lt(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function ht(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var pt = { buffer: null, channelCount: 2, channelCountMode: "max", channelInterpretation: "speakers", loop: !1, loopEnd: 0, loopStart: 0, playbackRate: 1 },
                dt = function(t) { return N(x, t) },
                vt = function(t) { return N(S, t) };

            function mt(t, e) { var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (!n) { if (Array.isArray(t) || (n = function(t, e) { if (!t) return; if ("string" == typeof t) return gt(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return gt(t, e) }(t)) || e && t && "number" == typeof t.length) { n && (t = n); var r = 0,
                            o = function() {}; return { s: o, n: function() { return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] } }, e: function(t) { throw t }, f: o } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var i, a = !0,
                    u = !1; return { s: function() { n = n.call(t) }, n: function() { var t = n.next(); return a = t.done, t }, e: function(t) { u = !0, i = t }, f: function() { try { a || null == n.return || n.return() } finally { if (u) throw i } } } }

            function gt(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r } var yt = function t(e, n) { dt(e).activeInputs.forEach((function(r) { return r.forEach((function(r) { var o = (0, b.Z)(r, 1)[0];
                            n.includes(e) || t(o, [].concat((0, u.Z)(n), [e])) })) })); var r, o = mt(function(t) { return "playbackRate" in t }(e) ? [e.playbackRate] : z(e) ? Array.from(e.parameters.values()) : function(t) { return "frequency" in t && "gain" in t }(e) ? [e.Q, e.detune, e.frequency, e.gain] : function(t) { return "offset" in t }(e) ? [e.offset] : function(t) { return !("frequency" in t) && "gain" in t }(e) ? [e.gain] : function(t) { return "detune" in t && "frequency" in t }(e) ? [e.detune, e.frequency] : function(t) { return "pan" in t }(e) ? [e.pan] : []); try { for (o.s(); !(r = o.n()).done;) { var i = r.value,
                                a = vt(i);
                            void 0 !== a && a.activeInputs.forEach((function(e) { var r = (0, b.Z)(e, 1)[0]; return t(r, n) })) } } catch (s) { o.e(s) } finally { o.f() }
                    ct(e) && U(e) },
                bt = function(t) { yt(t.destination, []) },
                _t = function(t) { return void 0 === t || "number" == typeof t || "string" == typeof t && ("balanced" === t || "interactive" === t || "playback" === t) };

            function wt(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } }

            function kt(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var xt = function(t) { return "context" in t },
                Ot = function(t) { return xt(t[0]) };

            function St(t, e) { var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (!n) { if (Array.isArray(t) || (n = function(t, e) { if (!t) return; if ("string" == typeof t) return Ct(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ct(t, e) }(t)) || e && t && "number" == typeof t.length) { n && (t = n); var r = 0,
                            o = function() {}; return { s: o, n: function() { return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] } }, e: function(t) { throw t }, f: o } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var i, a = !0,
                    u = !1; return { s: function() { n = n.call(t) }, n: function() { var t = n.next(); return a = t.done, t }, e: function(t) { u = !0, i = t }, f: function() { try { a || null == n.return || n.return() } finally { if (u) throw i } } } }

            function Ct(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r } var At = function(t, e, n, r) { var o, i = St(t); try { for (i.s(); !(o = i.n()).done;) { if (n(o.value)) { if (r) return !1; throw Error("The set contains at least one similar element.") } } } catch (a) { i.e(a) } finally { i.f() } return t.add(e), !0 },
                Tt = function(t, e, n, r) { var o = (0, b.Z)(n, 2),
                        i = o[0],
                        a = o[1];
                    At(t, [e, i, a], (function(t) { return t[0] === e && t[1] === i }), r) },
                Et = function(t, e, n) { var r = (0, b.Z)(e, 3),
                        o = r[0],
                        i = r[1],
                        a = r[2],
                        u = t.get(o);
                    void 0 === u ? t.set(o, new Set([
                        [i, a]
                    ])) : At(u, [i, a], (function(t) { return t[0] === i }), n) },
                Pt = function(t) { return "inputs" in t },
                Zt = function(t, e, n, r) { if (Pt(e)) { var o = e.inputs[r]; return t.connect(o, n, 0), [o, n, 0] } return t.connect(e, n, r), [e, n, r] };

            function Rt(t, e) { var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (!n) { if (Array.isArray(t) || (n = function(t, e) { if (!t) return; if ("string" == typeof t) return Dt(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Dt(t, e) }(t)) || e && t && "number" == typeof t.length) { n && (t = n); var r = 0,
                            o = function() {}; return { s: o, n: function() { return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] } }, e: function(t) { throw t }, f: o } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var i, a = !0,
                    u = !1; return { s: function() { n = n.call(t) }, n: function() { var t = n.next(); return a = t.done, t }, e: function(t) { u = !0, i = t }, f: function() { try { a || null == n.return || n.return() } finally { if (u) throw i } } } }

            function Dt(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r } var jt = function(t, e, n) { var r, o = Rt(t); try { for (o.s(); !(r = o.n()).done;) { var i = r.value; if (i[0] === e && i[1] === n) return t.delete(i), i } } catch (a) { o.e(a) } finally { o.f() } return null },
                Mt = function(t, e) { if (!L(t).delete(e)) throw new Error("Missing the expected event listener.") },
                It = function(t, e, n) { var r = N(t, e),
                        o = B(r, (function(t) { return t[0] === n })); return 0 === r.size && t.delete(e), o },
                Nt = function(t, e, n, r) { Pt(e) ? t.disconnect(e.inputs[r], n, 0) : t.disconnect(e, n, r) },
                Bt = function(t) { return N(O, t) },
                Ft = function(t) { return N(C, t) },
                Lt = function(t) { return E.has(t) },
                Vt = function(t) { return !k.has(t) },
                zt = function(t, e) { return new Promise((function(n) { if (null !== e) n(!0);
                        else { var r = t.createScriptProcessor(256, 1, 1),
                                o = t.createGain(),
                                i = t.createBuffer(1, 2, 44100),
                                a = i.getChannelData(0);
                            a[0] = 1, a[1] = 1; var u = t.createBufferSource();
                            u.buffer = i, u.loop = !0, u.connect(r).connect(t.destination), u.connect(o), u.disconnect(o), r.onaudioprocess = function(e) { var o = e.inputBuffer.getChannelData(0);
                                Array.prototype.some.call(o, (function(t) { return 1 === t })) ? n(!0) : n(!1), u.stop(), r.onaudioprocess = null, u.disconnect(r), r.disconnect(t.destination) }, u.start() } })) };

            function Ut(t, e) { var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (!n) { if (Array.isArray(t) || (n = function(t, e) { if (!t) return; if ("string" == typeof t) return qt(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return qt(t, e) }(t)) || e && t && "number" == typeof t.length) { n && (t = n); var r = 0,
                            o = function() {}; return { s: o, n: function() { return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] } }, e: function(t) { throw t }, f: o } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var i, a = !0,
                    u = !1; return { s: function() { n = n.call(t) }, n: function() { var t = n.next(); return a = t.done, t }, e: function(t) { u = !0, i = t }, f: function() { try { a || null == n.return || n.return() } finally { if (u) throw i } } } }

            function qt(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r } var Wt = function(t, e) { var n, r = new Map,
                        o = Ut(t); try { for (o.s(); !(n = o.n()).done;) { var i, a = Ut(n.value); try { for (a.s(); !(i = a.n()).done;) { var u = i.value,
                                        s = r.get(u);
                                    r.set(u, void 0 === s ? 1 : s + 1) } } catch (c) { a.e(c) } finally { a.f() } } } catch (c) { o.e(c) } finally { o.f() }
                    r.forEach((function(t, n) { return e(n, t) })) },
                Gt = function(t) { return "context" in t };

            function Ht(t, e) { var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (!n) { if (Array.isArray(t) || (n = function(t, e) { if (!t) return; if ("string" == typeof t) return Yt(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Yt(t, e) }(t)) || e && t && "number" == typeof t.length) { n && (t = n); var r = 0,
                            o = function() {}; return { s: o, n: function() { return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] } }, e: function(t) { throw t }, f: o } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var i, a = !0,
                    u = !1; return { s: function() { n = n.call(t) }, n: function() { var t = n.next(); return a = t.done, t }, e: function(t) { u = !0, i = t }, f: function() { try { a || null == n.return || n.return() } finally { if (u) throw i } } } }

            function Yt(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r } var Xt = function(t) { var e = new Map;
                t.connect = function(t) { return function(n) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                            i = Gt(n) ? t(n, r, o) : t(n, r),
                            a = e.get(n); return void 0 === a ? e.set(n, [{ input: o, output: r }]) : a.every((function(t) { return t.input !== o || t.output !== r })) && a.push({ input: o, output: r }), i } }(t.connect.bind(t)), t.disconnect = function(n) { return function(r, o, i) { if (n.apply(t), void 0 === r) e.clear();
                        else if ("number" == typeof r) { var a, u = Ht(e); try { for (u.s(); !(a = u.n()).done;) { var s = (0, b.Z)(a.value, 2),
                                        c = s[0],
                                        l = s[1].filter((function(t) { return t.output !== r }));
                                    0 === l.length ? e.delete(c) : e.set(c, l) } } catch (m) { u.e(m) } finally { u.f() } } else if (e.has(r))
                            if (void 0 === o) e.delete(r);
                            else { var f = e.get(r); if (void 0 !== f) { var h = f.filter((function(t) { return t.output !== o && (t.input !== i || void 0 === i) }));
                                    0 === h.length ? e.delete(r) : e.set(r, h) } }
                        var p, d = Ht(e); try { var v = function() { var e = (0, b.Z)(p.value, 2),
                                    n = e[0];
                                e[1].forEach((function(e) { Gt(n) ? t.connect(n, e.output, e.input) : t.connect(n, e.output) })) }; for (d.s(); !(p = d.n()).done;) v() } catch (m) { d.e(m) } finally { d.f() } } }(t.disconnect) };

            function Qt(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } }

            function $t(t, e) { var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (!n) { if (Array.isArray(t) || (n = function(t, e) { if (!t) return; if ("string" == typeof t) return Jt(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Jt(t, e) }(t)) || e && t && "number" == typeof t.length) { n && (t = n); var r = 0,
                            o = function() {}; return { s: o, n: function() { return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] } }, e: function(t) { throw t }, f: o } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var i, a = !0,
                    u = !1; return { s: function() { n = n.call(t) }, n: function() { var t = n.next(); return a = t.done, t }, e: function(t) { u = !0, i = t }, f: function() { try { a || null == n.return || n.return() } finally { if (u) throw i } } } }

            function Jt(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r } var Kt = function(t, e, n, r) { var o = vt(e),
                        i = o.activeInputs,
                        a = o.passiveInputs,
                        u = dt(t).outputs,
                        s = L(t),
                        c = function(o) { var u = Bt(t),
                                s = Ft(e); if (o) { var c = It(a, t, n);
                                Tt(i, t, c, !1), r || Lt(t) || u.connect(s, n) } else { var l = function(t, e, n) { return B(t, (function(t) { return t[0] === e && t[1] === n })) }(i, t, n);
                                Et(a, l, !1), r || Lt(t) || u.disconnect(s, n) } }; return !!At(u, [e, n], (function(t) { return t[0] === e && t[1] === n }), !0) && (s.add(c), ct(t) ? Tt(i, t, [n, c], !0) : Et(a, [t, n, c], !0), !0) },
                te = function(t, e, n, r, o) { var i = function(t, e, n, r) { var o = dt(e),
                                i = o.activeInputs,
                                a = o.passiveInputs,
                                u = jt(i[r], t, n); return null === u ? [F(a, t, n, r)[2], !1] : [u[2], !0] }(t, n, r, o),
                        a = (0, b.Z)(i, 2),
                        u = a[0],
                        s = a[1]; if (null !== u && (Mt(t, u), !s || e || Lt(t) || Nt(Bt(t), Bt(n), r, o)), ct(n)) { var c = dt(n).activeInputs;
                        q(n, c) } },
                ee = function(t, e, n, r) { var o = function(t, e, n) { var r = vt(e),
                                o = r.activeInputs,
                                i = r.passiveInputs,
                                a = jt(o, t, n); return null === a ? [It(i, t, n)[1], !1] : [a[2], !0] }(t, n, r),
                        i = (0, b.Z)(o, 2),
                        a = i[0],
                        u = i[1];
                    null !== a && (Mt(t, a), !u || e || Lt(t) || Bt(t).disconnect(Ft(n), r)) };

            function ne(t, e) { var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (!n) { if (Array.isArray(t) || (n = function(t, e) { if (!t) return; if ("string" == typeof t) return re(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return re(t, e) }(t)) || e && t && "number" == typeof t.length) { n && (t = n); var r = 0,
                            o = function() {}; return { s: o, n: function() { return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] } }, e: function(t) { throw t }, f: o } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var i, a = !0,
                    u = !1; return { s: function() { n = n.call(t) }, n: function() { var t = n.next(); return a = t.done, t }, e: function(t) { u = !0, i = t }, f: function() { try { a || null == n.return || n.return() } finally { if (u) throw i } } } }

            function re(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r } var oe = function() {
                function t(e) {
                    (0, w.Z)(this, t), this._map = new Map(e) } return (0, _.Z)(t, [{ key: "size", get: function() { return this._map.size } }, { key: "entries", value: function() { return this._map.entries() } }, { key: "forEach", value: function(t) { var e = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null; return this._map.forEach((function(r, o) { return t.call(n, r, o, e) })) } }, { key: "get", value: function(t) { return this._map.get(t) } }, { key: "has", value: function(t) { return this._map.has(t) } }, { key: "keys", value: function() { return this._map.keys() } }, { key: "values", value: function() { return this._map.values() } }]), t }();

            function ie(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function ae(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ie(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ie(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function ue(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var se = { channelCount: 2, channelCountMode: "explicit", channelInterpretation: "speakers", numberOfInputs: 1, numberOfOutputs: 1, parameterData: {}, processorOptions: {} };

            function ce(t, e, n, r, o) { if ("function" == typeof t.copyFromChannel) 0 === e[n].byteLength && (e[n] = new Float32Array(128)), t.copyFromChannel(e[n], r, o);
                else { var i = t.getChannelData(r); if (0 === e[n].byteLength) e[n] = i.slice(o, o + 128);
                    else { var a = new Float32Array(i.buffer, o * Float32Array.BYTES_PER_ELEMENT, 128);
                        e[n].set(a) } } } var le = function(t, e, n, r, o) { "function" == typeof t.copyToChannel ? 0 !== e[n].byteLength && t.copyToChannel(e[n], r, o) : 0 !== e[n].byteLength && t.getChannelData(r).set(e[n], o) },
                fe = function(t, e) { for (var n = [], r = 0; r < t; r += 1) { for (var o = [], i = "number" == typeof e ? e : e[r], a = 0; a < i; a += 1) o.push(new Float32Array(128));
                        n.push(o) } return n },
                he = function(t, e) { var n = N(Z, t),
                        r = Bt(e); return N(n, r) };

            function pe(t, e) { var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (!n) { if (Array.isArray(t) || (n = function(t, e) { if (!t) return; if ("string" == typeof t) return de(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return de(t, e) }(t)) || e && t && "number" == typeof t.length) { n && (t = n); var r = 0,
                            o = function() {}; return { s: o, n: function() { return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] } }, e: function(t) { throw t }, f: o } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var i, a = !0,
                    u = !1; return { s: function() { n = n.call(t) }, n: function() { var t = n.next(); return a = t.done, t }, e: function(t) { u = !0, i = t }, f: function() { try { a || null == n.return || n.return() } finally { if (u) throw i } } } }

            function de(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

            function ve(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function me(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ve(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ve(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t } var ge = function() { var t = (0, d.Z)(m().mark((function t(e, n, r, o, i, a, u) { var s, c, l, f, h, p, d, v, g, y, b; return m().wrap((function(t) { for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (s = null === n ? 128 * Math.ceil(e.context.length / 128) : n.length, c = o.channelCount * o.numberOfInputs, l = i.reduce((function(t, e) { return t + e }), 0), f = 0 === l ? null : r.createBuffer(l, s, r.sampleRate), void 0 !== a) { t.next = 6; break } throw new Error("Missing the processor constructor.");
                            case 6:
                                return h = dt(e), t.next = 9, he(r, e);
                            case 9:
                                p = t.sent, d = fe(o.numberOfInputs, o.channelCount), v = fe(o.numberOfOutputs, i), g = Array.from(e.parameters.keys()).reduce((function(t, e) { return me(me({}, t), {}, (0, W.Z)({}, e, new Float32Array(128))) }), {}), y = function(t) { if (o.numberOfInputs > 0 && null !== n)
                                        for (var s = 0; s < o.numberOfInputs; s += 1)
                                            for (var l = 0; l < o.channelCount; l += 1) ce(n, d[s], l, l, t);
                                    void 0 !== a.parameterDescriptors && null !== n && a.parameterDescriptors.forEach((function(e, r) { var o = e.name;
                                        ce(n, g, o, c + r, t) })); for (var m = 0; m < o.numberOfInputs; m += 1)
                                        for (var y = 0; y < i[m]; y += 1) 0 === v[m][y].byteLength && (v[m][y] = new Float32Array(128)); try { var b = d.map((function(t, e) { return 0 === h.activeInputs[e].size ? [] : t })),
                                            _ = u(t / r.sampleRate, r.sampleRate, (function() { return p.process(b, v, g) })); if (null !== f)
                                            for (var w = 0, k = 0; w < o.numberOfOutputs; w += 1) { for (var x = 0; x < i[w]; x += 1) le(f, v[w], x, k + x, t);
                                                k += i[w] }
                                        if (!_) return "break" } catch (O) { return e.dispatchEvent(new ErrorEvent("processorerror", { colno: O.colno, filename: O.filename, lineno: O.lineno, message: O.message })), "break" } }, b = 0;
                            case 15:
                                if (!(b < s)) { t.next = 22; break } if ("break" !== y(b)) { t.next = 19; break } return t.abrupt("break", 22);
                            case 19:
                                b += 128, t.next = 15; break;
                            case 22:
                                return t.abrupt("return", f);
                            case 23:
                            case "end":
                                return t.stop() } }), t) }))); return function(e, n, r, o, i, a, u) { return t.apply(this, arguments) } }();

            function ye(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function be(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ye(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ye(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function _e(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } }

            function we(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function ke(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? we(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : we(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function xe(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Oe = { Q: 1, channelCount: 2, channelCountMode: "max", channelInterpretation: "speakers", detune: 0, frequency: 350, gain: 0, type: "lowpass" };

            function Se(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function Ce(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Se(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Se(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function Ae(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Te = { channelCount: 1, channelCountMode: "explicit", channelInterpretation: "speakers", numberOfInputs: 6 };

            function Ee(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function Pe(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Ee(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ee(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function Ze(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Re = { channelCount: 6, channelCountMode: "explicit", channelInterpretation: "discrete", numberOfOutputs: 6 };

            function De(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function je(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? De(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : De(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function Me(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Ie = { channelCount: 2, channelCountMode: "max", channelInterpretation: "speakers", offset: 1 };

            function Ne(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function Be(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Ne(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ne(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function Fe(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Le = { buffer: null, channelCount: 2, channelCountMode: "clamped-max", channelInterpretation: "speakers", disableNormalization: !1 },
                Ve = function(t) { var e = new MessageChannel,
                        n = e.port1,
                        r = e.port2; return new Promise((function(e) { var o = function() { r.onmessage = null, n.close(), r.close(), e() };
                        r.onmessage = function() { return o() }; try { n.postMessage(t, [t]) } finally { o() } })) };

            function ze(t, e) { var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (!n) { if (Array.isArray(t) || (n = function(t, e) { if (!t) return; if ("string" == typeof t) return Ue(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ue(t, e) }(t)) || e && t && "number" == typeof t.length) { n && (t = n); var r = 0,
                            o = function() {}; return { s: o, n: function() { return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] } }, e: function(t) { throw t }, f: o } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var i, a = !0,
                    u = !1; return { s: function() { n = n.call(t) }, n: function() { var t = n.next(); return a = t.done, t }, e: function(t) { u = !0, i = t }, f: function() { try { a || null == n.return || n.return() } finally { if (u) throw i } } } }

            function Ue(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

            function qe(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function We(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? qe(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : qe(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function Ge(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var He = { channelCount: 2, channelCountMode: "max", channelInterpretation: "speakers", delayTime: 0, maxDelayTime: 1 },
                Ye = function(t, e, n) { var r = e[n]; if (void 0 === r) throw t(); return r };

            function Xe(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function Qe(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Xe(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Xe(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function $e(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Je = { attack: .003, channelCount: 2, channelCountMode: "clamped-max", channelInterpretation: "speakers", knee: 30, ratio: 12, release: .25, threshold: -24 };

            function Ke(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function tn(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Ke(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ke(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function en(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var nn = { channelCount: 2, channelCountMode: "max", channelInterpretation: "speakers", gain: 1 },
                rn = function() { return new DOMException("", "InvalidStateError") },
                on = function() { return new DOMException("", "InvalidAccessError") };

            function an(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function un(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? an(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : an(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function sn(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var cn = { channelCount: 2, channelCountMode: "max", channelInterpretation: "speakers" },
                ln = function(t, e, n, r, o, i, a, u, s, c, l) { for (var f = c.length, h = u, p = 0; p < f; p += 1) { for (var d = n[0] * c[p], v = 1; v < o; v += 1) { var m = h - v & s - 1;
                            d += n[v] * i[m], d -= t[v] * a[m] } for (var g = o; g < r; g += 1) d += n[g] * i[h - g & s - 1]; for (var y = o; y < e; y += 1) d -= t[y] * a[h - y & s - 1];
                        i[h] = c[p], a[h] = d, h = h + 1 & s - 1, l[p] = d } return h },
                fn = function(t, e, n, r) { var o = n instanceof Float64Array ? n : new Float64Array(n),
                        i = r instanceof Float64Array ? r : new Float64Array(r),
                        a = o.length,
                        u = i.length,
                        s = Math.min(a, u); if (1 !== o[0]) { for (var c = 0; c < a; c += 1) i[c] /= o[0]; for (var l = 1; l < u; l += 1) o[l] /= o[0] } for (var f = new Float32Array(32), h = new Float32Array(32), p = e.createBuffer(t.numberOfChannels, t.length, t.sampleRate), d = t.numberOfChannels, v = 0; v < d; v += 1) { var m = t.getChannelData(v),
                            g = p.getChannelData(v);
                        f.fill(0), h.fill(0), ln(o, a, i, u, s, f, h, 0, 32, m, g) } return p };

            function hn(t, e) { var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (!n) { if (Array.isArray(t) || (n = function(t, e) { if (!t) return; if ("string" == typeof t) return pn(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return pn(t, e) }(t)) || e && t && "number" == typeof t.length) { n && (t = n); var r = 0,
                            o = function() {}; return { s: o, n: function() { return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] } }, e: function(t) { throw t }, f: o } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var i, a = !0,
                    u = !1; return { s: function() { n = n.call(t) }, n: function() { var t = n.next(); return a = t.done, t }, e: function(t) { u = !0, i = t }, f: function() { try { a || null == n.return || n.return() } finally { if (u) throw i } } } }

            function pn(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

            function dn(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } }

            function vn(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function mn(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? vn(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : vn(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function gn(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var yn = { channelCount: 2, channelCountMode: "explicit", channelInterpretation: "speakers" };

            function bn(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } }

            function _n(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } }

            function wn(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } }

            function kn(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var xn = function(t) { var e = new Uint32Array([1179011410, 40, 1163280727, 544501094, 16, 131073, 44100, 176400, 1048580, 1635017060, 4, 0]); try { var n = t.decodeAudioData(e.buffer, (function() {})); return void 0 !== n && (n.catch((function() {})), !0) } catch (r) {} return !1 };

            function On(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function Sn(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? On(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : On(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function Cn(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var An = { numberOfChannels: 1 };

            function Tn(t, e) { var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (!n) { if (Array.isArray(t) || (n = function(t, e) { if (!t) return; if ("string" == typeof t) return En(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return En(t, e) }(t)) || e && t && "number" == typeof t.length) { n && (t = n); var r = 0,
                            o = function() {}; return { s: o, n: function() { return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] } }, e: function(t) { throw t }, f: o } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var i, a = !0,
                    u = !1; return { s: function() { n = n.call(t) }, n: function() { var t = n.next(); return a = t.done, t }, e: function(t) { u = !0, i = t }, f: function() { try { a || null == n.return || n.return() } finally { if (u) throw i } } } }

            function En(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r } var Pn = function(t, e, n) { var r = e[n];
                    void 0 !== r && r !== t[n] && (t[n] = r) },
                Zn = function(t, e) { Pn(t, e, "channelCount"), Pn(t, e, "channelCountMode"), Pn(t, e, "channelInterpretation") },
                Rn = function(t) { return "function" == typeof t.getFloatTimeDomainData },
                Dn = function(t, e, n) { var r = e[n];
                    void 0 !== r && r !== t[n].value && (t[n].value = r) },
                jn = function(t) { t.start = function(e) { return function() { var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                o = arguments.length > 2 ? arguments[2] : void 0; if ("number" == typeof o && o < 0 || r < 0 || n < 0) throw new RangeError("The parameters can't be negative.");
                            e.call(t, n, r, o) } }(t.start) },
                Mn = function(t) { var e;
                    t.stop = (e = t.stop, function() { var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0; if (n < 0) throw new RangeError("The parameter can't be negative.");
                        e.call(t, n) }) };

            function In(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function Nn(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? In(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : In(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t } var Bn = function(t, e) { return null === t ? 512 : Math.max(512, Math.min(16384, Math.pow(2, Math.round(Math.log2(t * e))))) },
                Fn = function(t) { return new Promise((function(e, n) { var r = new MessageChannel,
                            o = r.port1,
                            i = r.port2;
                        o.onmessage = function(t) { var n = t.data;
                            o.close(), i.close(), e(n) }, o.onmessageerror = function(t) { var e = t.data;
                            o.close(), i.close(), n(e) }, i.postMessage(t) })) },
                Ln = function() { var t = (0, d.Z)(m().mark((function t(e, n) { var r; return m().wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Fn(n);
                                case 2:
                                    return r = t.sent, t.abrupt("return", new e(r));
                                case 4:
                                case "end":
                                    return t.stop() } }), t) }))); return function(e, n) { return t.apply(this, arguments) } }();

            function Vn(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function zn(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Vn(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Vn(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function Un(t, e) { var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (!n) { if (Array.isArray(t) || (n = function(t, e) { if (!t) return; if ("string" == typeof t) return qn(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return qn(t, e) }(t)) || e && t && "number" == typeof t.length) { n && (t = n); var r = 0,
                            o = function() {}; return { s: o, n: function() { return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] } }, e: function(t) { throw t }, f: o } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var i, a = !0,
                    u = !1; return { s: function() { n = n.call(t) }, n: function() { var t = n.next(); return a = t.done, t }, e: function(t) { u = !0, i = t }, f: function() { try { a || null == n.return || n.return() } finally { if (u) throw i } } } }

            function qn(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r } var Wn = function(t, e) { var n = t.createBiquadFilter(); return Zn(n, e), Dn(n, e, "Q"), Dn(n, e, "detune"), Dn(n, e, "frequency"), Dn(n, e, "gain"), Pn(n, e, "type"), n },
                Gn = function(t, e) { var n, r, o = t.createChannelSplitter(e.numberOfOutputs); return Zn(o, e), r = (n = o).numberOfOutputs, Object.defineProperty(n, "channelCount", { get: function() { return r }, set: function(t) { if (t !== r) throw rn() } }), Object.defineProperty(n, "channelCountMode", { get: function() { return "explicit" }, set: function(t) { if ("explicit" !== t) throw rn() } }), Object.defineProperty(n, "channelInterpretation", { get: function() { return "discrete" }, set: function(t) { if ("discrete" !== t) throw rn() } }), o },
                Hn = n(45987),
                Yn = function(t, e) { return t.connect = e.connect.bind(e), t.disconnect = e.disconnect.bind(e), t },
                Xn = ["offset"];

            function Qn(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function $n(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Qn(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Qn(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t } var Jn = function(t, e) { var n = t.createDelay(e.maxDelayTime); return Zn(n, e), Dn(n, e, "delayTime"), n },
                Kn = function(t, e) { var n = t.createGain(); return Zn(n, e), Dn(n, e, "gain"), n };

            function tr(t, e) { var n = e[0] * e[0] + e[1] * e[1]; return [(t[0] * e[0] + t[1] * e[1]) / n, (t[1] * e[0] - t[0] * e[1]) / n] }

            function er(t, e) { for (var n, r, o = [0, 0], i = t.length - 1; i >= 0; i -= 1) r = e, (o = [(n = o)[0] * r[0] - n[1] * r[1], n[0] * r[1] + n[1] * r[0]])[0] += t[i]; return o } var nr = ["coneInnerAngle", "coneOuterAngle", "coneOuterGain", "distanceModel", "maxDistance", "orientationX", "orientationY", "orientationZ", "panningModel", "positionX", "positionY", "positionZ", "refDistance", "rolloffFactor"];

            function rr(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function or(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? rr(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : rr(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t } var ir = function(t, e, n, r) { return t.createScriptProcessor(e, n, r) },
                ar = ["channelCount", "channelCountMode", "pan"];

            function ur(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function sr(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ur(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ur(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t } var cr = ["curve", "oversample"];

            function lr(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function fr(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? lr(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : lr(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t } var hr = function() { return new DOMException("", "NotSupportedError") };

            function pr(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function dr(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? pr(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : pr(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function vr(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var mr = { numberOfChannels: 1 };

            function gr(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function yr(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? gr(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : gr(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function br(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var _r = { channelCount: 2, channelCountMode: "max", channelInterpretation: "speakers", detune: 0, frequency: 440, periodicWave: void 0, type: "sine" };

            function wr(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function kr(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? wr(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : wr(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function xr(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Or = { channelCount: 2, channelCountMode: "clamped-max", channelInterpretation: "speakers", coneInnerAngle: 360, coneOuterAngle: 360, coneOuterGain: 0, distanceModel: "inverse", maxDistance: 1e4, orientationX: 1, orientationY: 0, orientationZ: 0, panningModel: "equalpower", positionX: 0, positionY: 0, positionZ: 0, refDistance: 1, rolloffFactor: 1 };

            function Sr(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function Cr(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Sr(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Sr(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function Ar(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function Tr(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Ar(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ar(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t } var Er = { disableNormalization: !1 };

            function Pr(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function Zr(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Pr(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Pr(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function Rr(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Dr = { channelCount: 2, channelCountMode: "explicit", channelInterpretation: "speakers", pan: 0 },
                jr = function() { return new DOMException("", "UnknownError") };

            function Mr(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function Ir(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Mr(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Mr(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function Nr(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Br = { channelCount: 2, channelCountMode: "max", channelInterpretation: "speakers", curve: null, oversample: "none" },
                Fr = function(t, e, n) { return void 0 === t.copyFromChannel ? t.getChannelData(n)[0] : (t.copyFromChannel(e, n), e[0]) },
                Lr = function(t) { if (null === t) return !1; var e = t.length; return e % 2 != 0 ? 0 !== t[Math.floor(e / 2)] : t[e / 2 - 1] + t[e / 2] !== 0 },
                Vr = function(t, e, n, r) { for (var o = t; !o.hasOwnProperty(e);) o = Object.getPrototypeOf(o); var i = Object.getOwnPropertyDescriptor(o, e),
                        a = i.get,
                        u = i.set;
                    Object.defineProperty(t, e, { get: n(a), set: r(u) }) };

            function zr(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function Ur(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? zr(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : zr(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function qr(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function Wr(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? qr(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : qr(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function Gr(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function Hr(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Gr(Object(n), !0).forEach((function(e) {
                        (0, W.Z)(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Gr(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t } var Yr, Xr, Qr, $r, Jr, Kr, to = function(t) { var e = t.createOscillator(); try { e.start(-1) } catch (n) { return n instanceof RangeError } return !1 },
                eo = function(t) { var e = t.createBuffer(1, 1, 44100),
                        n = t.createBufferSource();
                    n.buffer = e, n.start(), n.stop(); try { return n.stop(), !0 } catch (r) { return !1 } },
                no = function(t) { var e = t.createOscillator(); try { e.stop(-1) } catch (n) { return n instanceof RangeError } return !1 },
                ro = function(t, e) { var n = e.createGain();
                    t.connect(n); var r, o, i = function(e) { return function() { e.call(t, n), t.removeEventListener("ended", i) } }(t.disconnect);
                    t.addEventListener("ended", i), Yn(t, n), t.stop = (r = t.stop, o = !1, function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0; if (o) try { r.call(t, e) } catch (i) { n.gain.setValueAtTime(0, e) } else r.call(t, e), o = !0 }) },
                oo = function(t, e) { return function(n) { var r = { value: t }; return Object.defineProperties(n, { currentTarget: r, target: r }), "function" == typeof e ? e.call(t, n) : e.handleEvent.call(t, n) } },
                io = function(t) { return function(e, n, r, o) { var i = (0, b.Z)(r, 3),
                            a = i[0],
                            u = i[1],
                            s = i[2];
                        t(e[u], [n, a, s], (function(t) { return t[0] === n && t[1] === a }), o) } }(At),
                ao = function(t) { return function(e, n, r, o) { var i = (0, b.Z)(r, 3),
                            a = i[0],
                            u = i[1],
                            s = i[2],
                            c = e.get(a);
                        void 0 === c ? e.set(a, new Set([
                            [u, n, s]
                        ])) : t(c, [u, n, s], (function(t) { return t[0] === u && t[1] === n }), o) } }(At),
                uo = function(t) { return function(e, n, r, o) { return t(e[o], (function(t) { return t[0] === n && t[1] === r })) } }(B),
                so = new WeakMap,
                co = function(t) { return function(e) { var n; return null !== (n = t.get(e)) && void 0 !== n ? n : 0 } }(so),
                lo = (Yr = new Map, Xr = new WeakMap, function(t, e) { var n = Xr.get(t); if (void 0 !== n) return n; var r = Yr.get(t); if (void 0 !== r) return r; try { var o = e(); return o instanceof Promise ? (Yr.set(t, o), o.catch((function() { return !1 })).then((function(e) { return Yr.delete(t), Xr.set(t, e), e }))) : (Xr.set(t, o), o) } catch (i) { return Xr.set(t, !1), !1 } }),
                fo = "undefined" == typeof window ? null : window,
                ho = function(t, e) { return function(n, r) { var o = n.createAnalyser(); if (Zn(o, r), !(r.maxDecibels > r.minDecibels)) throw e(); return Pn(o, r, "fftSize"), Pn(o, r, "maxDecibels"), Pn(o, r, "minDecibels"), Pn(o, r, "smoothingTimeConstant"), t(Rn, (function() { return Rn(o) })) || function(t) { t.getFloatTimeDomainData = function(e) { var n = new Uint8Array(e.length);
                                t.getByteTimeDomainData(n); for (var r = Math.max(n.length, t.fftSize), o = 0; o < r; o += 1) e[o] = .0078125 * (n[o] - 128); return e } }(o), o } }(lo, et),
                po = function(t) { return function(e) { var n = t(e); if (null === n.renderer) throw new Error("Missing the renderer of the given AudioNode in the audio graph."); return n.renderer } }(dt),
                vo = function(t, e, n) { return function() { var r = (0, d.Z)(m().mark((function r(o, i, a) { var s; return m().wrap((function(r) { for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return s = t(o), r.next = 3, Promise.all(s.activeInputs.map((function(t, r) { return Array.from(t).map(function() { var t = (0, d.Z)(m().mark((function t(u) { var s, c, l, f, h, p; return m().wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                                            case 0:
                                                                return s = (0, b.Z)(u, 2), c = s[0], l = s[1], f = e(c), t.next = 4, f.render(c, i);
                                                            case 4:
                                                                h = t.sent, p = o.context.destination, n(c) || o === p && n(o) || h.connect(a, l, r);
                                                            case 7:
                                                            case "end":
                                                                return t.stop() } }), t) }))); return function(e) { return t.apply(this, arguments) } }()) })).reduce((function(t, e) { return [].concat((0, u.Z)(t), (0, u.Z)(e)) }), []));
                                    case 3:
                                    case "end":
                                        return r.stop() } }), r) }))); return function(t, e, n) { return r.apply(this, arguments) } }() }(dt, po, Lt),
                mo = function(t, e, n) { return function() { var r = new WeakMap,
                            o = function() { var o = (0, d.Z)(m().mark((function o(i, a) { var u, s; return m().wrap((function(o) { for (;;) switch (o.prev = o.next) {
                                            case 0:
                                                return u = e(i), K(u, a) || (s = { channelCount: u.channelCount, channelCountMode: u.channelCountMode, channelInterpretation: u.channelInterpretation, fftSize: u.fftSize, maxDecibels: u.maxDecibels, minDecibels: u.minDecibels, smoothingTimeConstant: u.smoothingTimeConstant }, u = t(a, s)), r.set(a, u), o.next = 6, n(i, a, u);
                                            case 6:
                                                return o.abrupt("return", u);
                                            case 7:
                                            case "end":
                                                return o.stop() } }), o) }))); return function(t, e) { return o.apply(this, arguments) } }(); return { render: function(t, e) { var n = r.get(e); return void 0 !== n ? Promise.resolve(n) : o(t, e) } } } }(ho, Bt, vo),
                go = (Qr = A, function(t) { var e = Qr.get(t); if (void 0 === e) throw rn(); return e }),
                yo = function(t) { return null === t ? null : t.hasOwnProperty("OfflineAudioContext") ? t.OfflineAudioContext : t.hasOwnProperty("webkitOfflineAudioContext") ? t.webkitOfflineAudioContext : null }(fo),
                bo = function(t) { return function(e) { return null !== t && e instanceof t } }(yo),
                _o = new WeakMap,
                wo = function(t) { return function() {
                        function e(t) {
                            (0, w.Z)(this, e), this._nativeEventTarget = t, this._listeners = new WeakMap } return (0, _.Z)(e, [{ key: "addEventListener", value: function(e, n, r) { if (null !== n) { var o = this._listeners.get(n);
                                    void 0 === o && (o = t(this, n), "function" == typeof n && this._listeners.set(n, o)), this._nativeEventTarget.addEventListener(e, o, r) } } }, { key: "dispatchEvent", value: function(t) { return this._nativeEventTarget.dispatchEvent(t) } }, { key: "removeEventListener", value: function(t, e, n) { var r = null === e ? void 0 : this._listeners.get(e);
                                this._nativeEventTarget.removeEventListener(t, void 0 === r ? null : r, n) } }]), e }() }(oo),
                ko = function(t) { return null === t ? null : t.hasOwnProperty("AudioContext") ? t.AudioContext : t.hasOwnProperty("webkitAudioContext") ? t.webkitAudioContext : null }(fo),
                xo = function(t) { return function(e) { return null !== t && e instanceof t } }(ko),
                Oo = function(t) { return function(e) { return null !== t && "function" == typeof t.AudioNode && e instanceof t.AudioNode } }(fo),
                So = function(t) { return function(e) { return null !== t && "function" == typeof t.AudioParam && e instanceof t.AudioParam } }(fo),
                Co = function(t) { return null === t ? null : t.hasOwnProperty("AudioWorkletNode") ? t.AudioWorkletNode : null }(fo),
                Ao = function(t, e, n, r, o, i, a, s, c, l, f, h, p, d, v, m) { return function(l) {
                        (0, G.Z)(y, l); var g = Qt(y);

                        function y(e, r, o, i) { var a;
                            (0, w.Z)(this, y), (a = g.call(this, o))._context = e, a._nativeAudioNode = o; var u = f(e); return h(u) && !0 !== n(zt, (function() { return zt(u, m) })) && Xt(o), O.set((0, at.Z)(a), o), T.set((0, at.Z)(a), new Set), "closed" !== e.state && r && V((0, at.Z)(a)), t((0, at.Z)(a), i, o), a } return (0, _.Z)(y, [{ key: "channelCount", get: function() { return this._nativeAudioNode.channelCount }, set: function(t) { this._nativeAudioNode.channelCount = t } }, { key: "channelCountMode", get: function() { return this._nativeAudioNode.channelCountMode }, set: function(t) { this._nativeAudioNode.channelCountMode = t } }, { key: "channelInterpretation", get: function() { return this._nativeAudioNode.channelInterpretation }, set: function(t) { this._nativeAudioNode.channelInterpretation = t } }, { key: "context", get: function() { return this._context } }, { key: "numberOfInputs", get: function() { return this._nativeAudioNode.numberOfInputs } }, { key: "numberOfOutputs", get: function() { return this._nativeAudioNode.numberOfOutputs } }, { key: "connect", value: function(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                    s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0; if (n < 0 || n >= this._nativeAudioNode.numberOfOutputs) throw o(); var l = f(this._context),
                                    h = v(l); if (p(t) || d(t)) throw i(); if (xt(t)) { var m = Bt(t); try { var g, y = Zt(this._nativeAudioNode, m, n, s),
                                            b = Vt(this); if (h || b)(g = this._nativeAudioNode).disconnect.apply(g, (0, u.Z)(y)); "closed" !== this.context.state && !b && Vt(t) && V(t) } catch (S) { if (12 === S.code) throw i(); throw S } var _ = e(this, t, n, s, h); if (_) { var w = c([this], t);
                                        Wt(w, r(h)) } return t } var k = Ft(t); if ("playbackRate" === k.name && 1024 === k.maxValue) throw a(); try { this._nativeAudioNode.connect(k, n), (h || Vt(this)) && this._nativeAudioNode.disconnect(k, n) } catch (S) { if (12 === S.code) throw i(); throw S } var x = Kt(this, t, n, h); if (x) { var O = c([this], t);
                                    Wt(O, r(h)) } } }, { key: "disconnect", value: function(t, e, n) { var r, a = f(this._context),
                                    l = v(a); if (void 0 === t) r = function(t, e) { var n, r = dt(t),
                                        o = [],
                                        i = $t(r.outputs); try { for (i.s(); !(n = i.n()).done;) { var a = n.value;
                                            Ot(a) ? te.apply(void 0, [t, e].concat((0, u.Z)(a))) : ee.apply(void 0, [t, e].concat((0, u.Z)(a))), o.push(a[0]) } } catch (s) { i.e(s) } finally { i.f() } return r.outputs.clear(), o }(this, l);
                                else if ("number" == typeof t) { if (t < 0 || t >= this.numberOfOutputs) throw o();
                                    r = function(t, e, n) { var r, o = dt(t),
                                            i = [],
                                            a = $t(o.outputs); try { for (a.s(); !(r = a.n()).done;) { var s = r.value;
                                                s[1] === n && (Ot(s) ? te.apply(void 0, [t, e].concat((0, u.Z)(s))) : ee.apply(void 0, [t, e].concat((0, u.Z)(s))), i.push(s[0]), o.outputs.delete(s)) } } catch (c) { a.e(c) } finally { a.f() } return i }(this, l, t) } else { if (void 0 !== e && (e < 0 || e >= this.numberOfOutputs)) throw o(); if (xt(t) && void 0 !== n && (n < 0 || n >= t.numberOfInputs)) throw o(); if (r = function(t, e, n, r, o) { var i = dt(t); return Array.from(i.outputs).filter((function(t) { return !(t[0] !== n || void 0 !== r && t[1] !== r || void 0 !== o && t[2] !== o) })).map((function(n) { return Ot(n) ? te.apply(void 0, [t, e].concat((0, u.Z)(n))) : ee.apply(void 0, [t, e].concat((0, u.Z)(n))), i.outputs.delete(n), n[0] })) }(this, l, t, e, n), 0 === r.length) throw i() } var h, p = $t(r); try { for (p.s(); !(h = p.n()).done;) { var d = h.value,
                                            m = c([this], d);
                                        Wt(m, s) } } catch (g) { p.e(g) } finally { p.f() } } }]), y }(l) }(($r = x, function(t, e, n) { for (var r = [], o = 0; o < n.numberOfInputs; o += 1) r.push(new Set);
                    $r.set(t, { activeInputs: r, outputs: new Set, passiveInputs: new WeakMap, renderer: e }) }), function(t, e, n, r, o, i, a, u, s, c, l, f, h) { var p = new WeakMap; return function(d, v, m, g, y) { var b = i(v),
                            _ = b.activeInputs,
                            w = b.passiveInputs,
                            k = i(d).outputs,
                            x = u(d),
                            O = function(i) { var u = s(v),
                                    c = s(d); if (i) { var b = F(w, d, m, g);
                                    t(_, d, b, !1), y || f(d) || n(c, u, m, g), h(v) && V(v) } else { var k = r(_, d, m, g);
                                    e(w, g, k, !1), y || f(d) || o(c, u, m, g); var x = a(v); if (0 === x) l(v) && q(v, _);
                                    else { var O = p.get(v);
                                        void 0 !== O && clearTimeout(O), p.set(v, setTimeout((function() { l(v) && q(v, _) }), 1e3 * x)) } } }; return !!c(k, [v, m, g], (function(t) { return t[0] === v && t[1] === m && t[2] === g }), !0) && (x.add(O), l(d) ? t(_, d, [m, g, O], !0) : e(w, g, [d, m, O], !0), !0) } }(io, ao, Zt, uo, Nt, dt, co, L, Bt, At, ct, Lt, Vt), lo, function(t, e, n, r, o, i) { return function(a) { return function(u, s) { var c = t.get(u); if (void 0 === c) { if (!a && i(u)) { var l, f = r(u),
                                        h = hn(n(u).outputs); try { for (h.s(); !(l = h.n()).done;) { var p = l.value; if (Ot(p)) { var d = r(p[0]);
                                                e(f, d, p[1], p[2]) } else { var v = o(p[0]);
                                                f.disconnect(v, p[1]) } } } catch (m) { h.e(m) } finally { h.f() } }
                                t.set(u, s) } else t.set(u, c + s) } } }(E, Nt, dt, Bt, Ft, ct), et, on, hr, function(t, e, n, r, o, i, a, u) { return function(s, c) { var l = e.get(s); if (void 0 === l) throw new Error("Missing the expected cycle count."); var f = i(s.context),
                            h = u(f); if (l === c) { if (e.delete(s), !h && a(s)) { var p, d = r(s),
                                    v = ze(n(s).outputs); try { for (v.s(); !(p = v.n()).done;) { var m = p.value; if (Ot(m)) { var g = r(m[0]);
                                            t(d, g, m[1], m[2]) } else { var y = o(m[0]);
                                            d.connect(y, m[1]) } } } catch (b) { v.e(b) } finally { v.f() } } } else e.set(s, l - c) } }(Zt, E, dt, Bt, Ft, go, ct, bo), function(t, e, n) { return function r(o, i) { var a = xt(i) ? i : n(t, i); if (function(t) { return "delayTime" in t }(a)) return []; if (o[0] === a) return [o]; if (o.includes(a)) return []; var s = e(a).outputs; return Array.from(s).map((function(t) { return r([].concat((0, u.Z)(o), [a]), t[0]) })).reduce((function(t, e) { return t.concat(e) }), []) } }(_o, dt, N), wo, go, xo, Oo, So, bo, Co),
                To = function(t, e, n, r, o, i) { return function(t) {
                        (0, G.Z)(u, t); var a = $(u);

                        function u(t, n) { var s;
                            (0, w.Z)(this, u); var c = o(t),
                                l = Q(Q({}, J), n),
                                f = r(c, l),
                                h = i(c) ? e() : null; return (s = a.call(this, t, !1, f, h))._nativeAnalyserNode = f, s } return (0, _.Z)(u, [{ key: "fftSize", get: function() { return this._nativeAnalyserNode.fftSize }, set: function(t) { this._nativeAnalyserNode.fftSize = t } }, { key: "frequencyBinCount", get: function() { return this._nativeAnalyserNode.frequencyBinCount } }, { key: "maxDecibels", get: function() { return this._nativeAnalyserNode.maxDecibels }, set: function(t) { var e = this._nativeAnalyserNode.maxDecibels; if (this._nativeAnalyserNode.maxDecibels = t, !(t > this._nativeAnalyserNode.minDecibels)) throw this._nativeAnalyserNode.maxDecibels = e, n() } }, { key: "minDecibels", get: function() { return this._nativeAnalyserNode.minDecibels }, set: function(t) { var e = this._nativeAnalyserNode.minDecibels; if (this._nativeAnalyserNode.minDecibels = t, !(this._nativeAnalyserNode.maxDecibels > t)) throw this._nativeAnalyserNode.minDecibels = e, n() } }, { key: "smoothingTimeConstant", get: function() { return this._nativeAnalyserNode.smoothingTimeConstant }, set: function(t) { this._nativeAnalyserNode.smoothingTimeConstant = t } }, { key: "getByteFrequencyData", value: function(t) { this._nativeAnalyserNode.getByteFrequencyData(t) } }, { key: "getByteTimeDomainData", value: function(t) { this._nativeAnalyserNode.getByteTimeDomainData(t) } }, { key: "getFloatFrequencyData", value: function(t) { this._nativeAnalyserNode.getFloatFrequencyData(t) } }, { key: "getFloatTimeDomainData", value: function(t) { this._nativeAnalyserNode.getFloatTimeDomainData(t) } }]), u }(t) }(Ao, mo, et, ho, go, bo),
                Eo = new WeakSet,
                Po = function(t) { return null === t ? null : t.hasOwnProperty("AudioBuffer") ? t.AudioBuffer : null }(fo),
                Zo = (Jr = new Uint32Array(1), function(t) { return Jr[0] = t, Jr[0] }),
                Ro = function(t, e) { return function(n) { n.copyFromChannel = function(r, o) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                a = t(i),
                                u = t(o); if (u >= n.numberOfChannels) throw e(); for (var s = n.length, c = n.getChannelData(u), l = r.length, f = a < 0 ? -a : 0; f + a < s && f < l; f += 1) r[f] = c[f + a] }, n.copyToChannel = function(r, o) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                a = t(i),
                                u = t(o); if (u >= n.numberOfChannels) throw e(); for (var s = n.length, c = n.getChannelData(u), l = r.length, f = a < 0 ? -a : 0; f + a < s && f < l; f += 1) c[f + a] = r[f] } } }(Zo, et),
                Do = function(t) { return function(e) { e.copyFromChannel = function(n) { return function(r, o) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                    a = t(i),
                                    u = t(o); if (a < e.length) return n.call(e, r, u, a) } }(e.copyFromChannel), e.copyToChannel = function(n) { return function(r, o) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                    a = t(i),
                                    u = t(o); if (a < e.length) return n.call(e, r, u, a) } }(e.copyToChannel) } }(Zo),
                jo = function(t, e, n, r, o, i, a, u) { var s = null; return function(c) {
                        function l(c) { if ((0, w.Z)(this, l), null === o) throw new Error("Missing the native OfflineAudioContext constructor."); var f = ot(ot({}, it), c),
                                h = f.length,
                                p = f.numberOfChannels,
                                d = f.sampleRate;
                            null === s && (s = new o(1, 1, 44100)); var v = null !== r && e(i, i) ? new r({ length: h, numberOfChannels: p, sampleRate: d }) : s.createBuffer(p, h, d); if (0 === v.numberOfChannels) throw n(); return "function" != typeof v.copyFromChannel ? (a(v), nt(v)) : e(tt, (function() { return tt(v) })) || u(v), t.add(v), v } return (0, _.Z)(l, null, [{ key: c, value: function(e) { return null !== e && "object" == typeof e && Object.getPrototypeOf(e) === l.prototype || t.has(e) } }]), l }(Symbol.hasInstance) }(Eo, lo, hr, Po, yo, function(t) { return function() { if (null === t) return !1; try { new t({ length: 1, sampleRate: 44100 }) } catch (e) { return !1 } return !0 } }(Po), Ro, Do),
                Mo = function(t) { return function(e, n) { var r = t(e, { channelCount: 1, channelCountMode: "explicit", channelInterpretation: "discrete", gain: 0 });
                        n.connect(r).connect(e.destination);
                        n.addEventListener("ended", (function t() { n.removeEventListener("ended", t), n.disconnect(r), r.disconnect() })) } }(Kn),
                Io = function(t, e, n) { return function() { var r = (0, d.Z)(m().mark((function r(o, i, a) { var u; return m().wrap((function(r) { for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return u = e(o), r.next = 3, Promise.all(Array.from(u.activeInputs).map(function() { var e = (0, d.Z)(m().mark((function e(r) { var o, u, s, c, l; return m().wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return o = (0, b.Z)(r, 2), u = o[0], s = o[1], c = t(u), e.next = 4, c.render(u, i);
                                                        case 4:
                                                            l = e.sent, n(u) || l.connect(a, s);
                                                        case 6:
                                                        case "end":
                                                            return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }()));
                                    case 3:
                                    case "end":
                                        return r.stop() } }), r) }))); return function(t, e, n) { return r.apply(this, arguments) } }() }(po, vt, Lt),
                No = function(t) { return function(e, n, r) { return t(n, e, r) } }(Io),
                Bo = function(t, e, n, r, o, i, a, u, s, c, l) { return function(f, h) { var p = f.createBufferSource(); return Zn(p, h), Dn(p, h, "playbackRate"), Pn(p, h, "buffer"), Pn(p, h, "loop"), Pn(p, h, "loopEnd"), Pn(p, h, "loopStart"), e(n, (function() { return n(f) })) || function(t) { t.start = function(e) { var n = !1; return function() { var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                        i = arguments.length > 2 ? arguments[2] : void 0; if (n) throw rn();
                                    e.call(t, r, o, i), n = !0 } }(t.start) }(p), e(r, (function() { return r(f) })) || s(p), e(o, (function() { return o(f) })) || c(p, f), e(i, (function() { return i(f) })) || jn(p), e(a, (function() { return a(f) })) || l(p, f), e(u, (function() { return u(f) })) || Mn(p), t(f, p), p } }(Mo, lo, (function(t) { var e = t.createBufferSource();
                    e.start(); try { e.start() } catch (n) { return !0 } return !1 }), (function(t) { var e = t.createBufferSource(),
                        n = t.createBuffer(1, 1, 44100);
                    e.buffer = n; try { e.start(0, 1) } catch (r) { return !1 } return !0 }), (function(t) { var e = t.createBufferSource();
                    e.start(); try { e.stop() } catch (n) { return !1 } return !0 }), to, eo, no, (function(t) { t.start = function(e) { return function() { var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                o = arguments.length > 2 ? arguments[2] : void 0,
                                i = t.buffer,
                                a = null === i ? r : Math.min(i.duration, r);
                            null !== i && a > i.duration - .5 / t.context.sampleRate ? e.call(t, n, 0, 0) : e.call(t, n, a, o) } }(t.start) }), function(t) { return function(e, n) { var r = n.createBuffer(1, 1, 44100);
                        null === e.buffer && (e.buffer = r), t(e, "buffer", (function(t) { return function() { var n = t.call(e); return n === r ? null : n } }), (function(t) { return function(n) { return t.call(e, null === n ? r : n) } })) } }(Vr), ro),
                Fo = function(t, e) { return function(n, r, o) { return t(r).replay(o), e(r, n, o) } }(function(t) { return function(e) { var n = t(e); if (null === n.renderer) throw new Error("Missing the renderer of the given AudioParam in the audio graph."); return n.renderer } }(vt), Io),
                Lo = function(t, e, n, r, o) { return function() { var i = new WeakMap,
                            a = null,
                            s = null,
                            c = function() { var c = (0, d.Z)(m().mark((function c(l, f) { var h, p, d, v; return m().wrap((function(c) { for (;;) switch (c.prev = c.next) {
                                            case 0:
                                                if (h = n(l), (p = K(h, f)) || (d = { buffer: h.buffer, channelCount: h.channelCount, channelCountMode: h.channelCountMode, channelInterpretation: h.channelInterpretation, loop: h.loop, loopEnd: h.loopEnd, loopStart: h.loopStart, playbackRate: h.playbackRate.value }, h = e(f, d), null !== a && (v = h).start.apply(v, (0, u.Z)(a)), null !== s && h.stop(s)), i.set(f, h), p) { c.next = 9; break } return c.next = 7, r(f, l.playbackRate, h.playbackRate);
                                            case 7:
                                                c.next = 11; break;
                                            case 9:
                                                return c.next = 11, t(f, l.playbackRate, h.playbackRate);
                                            case 11:
                                                return c.next = 13, o(l, f, h);
                                            case 13:
                                                return c.abrupt("return", h);
                                            case 14:
                                            case "end":
                                                return c.stop() } }), c) }))); return function(t, e) { return c.apply(this, arguments) } }(); return {set start(t) { a = t }, set stop(t) { s = t }, render: function(t, e) { var n = i.get(e); return void 0 !== n ? Promise.resolve(n) : c(t, e) } } } }(No, Bo, Bt, Fo, vo),
                Vo = function(t, e, n, r, o, i, a, u, s, c, l, f, h) { return function(p, d, v) { var m = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                            g = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                            b = new y.AutomationEventList(v.defaultValue),
                            _ = d ? r(b) : null,
                            w = {get defaultValue() { return v.defaultValue }, get maxValue() { return null === m ? v.maxValue : m }, get minValue() { return null === g ? v.minValue : g }, get value() { return v.value }, set value(t) { v.value = t, w.setValueAtTime(t, p.context.currentTime) }, cancelAndHoldAtTime: function(t) { if ("function" == typeof v.cancelAndHoldAtTime) null === _ && b.flush(p.context.currentTime), b.add(o(t)), v.cancelAndHoldAtTime(t);
                                    else { var e = Array.from(b).pop();
                                        null === _ && b.flush(p.context.currentTime), b.add(o(t)); var n = Array.from(b).pop();
                                        v.cancelScheduledValues(t), e !== n && void 0 !== n && ("exponentialRampToValue" === n.type ? v.exponentialRampToValueAtTime(n.value, n.endTime) : "linearRampToValue" === n.type ? v.linearRampToValueAtTime(n.value, n.endTime) : "setValue" === n.type ? v.setValueAtTime(n.value, n.startTime) : "setValueCurve" === n.type && v.setValueCurveAtTime(n.values, n.startTime, n.duration)) } return w }, cancelScheduledValues: function(t) { return null === _ && b.flush(p.context.currentTime), b.add(i(t)), v.cancelScheduledValues(t), w }, exponentialRampToValueAtTime: function(t, e) { if (0 === t) throw new RangeError; if (!Number.isFinite(e) || e < 0) throw new RangeError; return null === _ && b.flush(p.context.currentTime), b.add(a(t, e)), v.exponentialRampToValueAtTime(t, e), w }, linearRampToValueAtTime: function(t, e) { return null === _ && b.flush(p.context.currentTime), b.add(u(t, e)), v.linearRampToValueAtTime(t, e), w }, setTargetAtTime: function(t, e, n) { return null === _ && b.flush(p.context.currentTime), b.add(s(t, e, n)), v.setTargetAtTime(t, e, n), w }, setValueAtTime: function(t, e) { return null === _ && b.flush(p.context.currentTime), b.add(c(t, e)), v.setValueAtTime(t, e), w }, setValueCurveAtTime: function(t, e, n) { var r = t instanceof Float32Array ? t : new Float32Array(t); if (null !== f && "webkitAudioContext" === f.name) { for (var o = e + n, i = p.context.sampleRate, a = Math.ceil(e * i), u = Math.floor(o * i), s = u - a, c = new Float32Array(s), d = 0; d < s; d += 1) { var m = (r.length - 1) / n * ((a + d) / i - e),
                                                g = Math.floor(m),
                                                y = Math.ceil(m);
                                            c[d] = g === y ? r[g] : (1 - (m - g)) * r[g] + (1 - (y - m)) * r[y] }
                                        null === _ && b.flush(p.context.currentTime), b.add(l(c, e, n)), v.setValueCurveAtTime(c, e, n); var k = u / i;
                                        k < o && h(w, c[c.length - 1], k), h(w, r[r.length - 1], o) } else null === _ && b.flush(p.context.currentTime), b.add(l(r, e, n)), v.setValueCurveAtTime(r, e, n); return w } }; return n.set(w, v), e.set(w, p), t(w, _), w } }((Kr = S, function(t, e) { Kr.set(t, { activeInputs: new Set, passiveInputs: new WeakMap, renderer: e }) }), _o, C, (function(t) { return { replay: function(e) { var n, r = ne(t); try { for (r.s(); !(n = r.n()).done;) { var o = n.value; if ("exponentialRampToValue" === o.type) { var i = o.endTime,
                                            a = o.value;
                                        e.exponentialRampToValueAtTime(a, i) } else if ("linearRampToValue" === o.type) { var u = o.endTime,
                                            s = o.value;
                                        e.linearRampToValueAtTime(s, u) } else if ("setTarget" === o.type) { var c = o.startTime,
                                            l = o.target,
                                            f = o.timeConstant;
                                        e.setTargetAtTime(l, c, f) } else if ("setValue" === o.type) { var h = o.startTime,
                                            p = o.value;
                                        e.setValueAtTime(p, h) } else { if ("setValueCurve" !== o.type) throw new Error("Can't apply an unknown automation."); var d = o.duration,
                                            v = o.startTime,
                                            m = o.values;
                                        e.setValueCurveAtTime(m, v, d) } } } catch (g) { r.e(g) } finally { r.f() } } } }), y.createCancelAndHoldAutomationEvent, y.createCancelScheduledValuesAutomationEvent, y.createExponentialRampToValueAutomationEvent, y.createLinearRampToValueAutomationEvent, y.createSetTargetAutomationEvent, y.createSetValueAutomationEvent, y.createSetValueCurveAutomationEvent, ko, (function t(e, n, r) { try { e.setValueAtTime(n, r) } catch (o) { if (9 !== o.code) throw o;
                        t(e, n, r + 1e-7) } })),
                zo = function(t, e, n, r, o, i, a, u) { return function(t) {
                        (0, G.Z)(c, t); var s = ht(c);

                        function c(t, r) { var u;
                            (0, w.Z)(this, c); var l = i(t),
                                f = ft(ft({}, pt), r),
                                h = o(l, f),
                                p = a(l),
                                d = p ? e() : null; return (u = s.call(this, t, !1, h, d))._audioBufferSourceNodeRenderer = d, u._isBufferNullified = !1, u._isBufferSet = null !== f.buffer, u._nativeAudioBufferSourceNode = h, u._onended = null, u._playbackRate = n((0, at.Z)(u), p, h.playbackRate, st, ut), u } return (0, _.Z)(c, [{ key: "buffer", get: function() { return this._isBufferNullified ? null : this._nativeAudioBufferSourceNode.buffer }, set: function(t) { if (this._nativeAudioBufferSourceNode.buffer = t, null !== t) { if (this._isBufferSet) throw r();
                                    this._isBufferSet = !0 } } }, { key: "loop", get: function() { return this._nativeAudioBufferSourceNode.loop }, set: function(t) { this._nativeAudioBufferSourceNode.loop = t } }, { key: "loopEnd", get: function() { return this._nativeAudioBufferSourceNode.loopEnd }, set: function(t) { this._nativeAudioBufferSourceNode.loopEnd = t } }, { key: "loopStart", get: function() { return this._nativeAudioBufferSourceNode.loopStart }, set: function(t) { this._nativeAudioBufferSourceNode.loopStart = t } }, { key: "onended", get: function() { return this._onended }, set: function(t) { var e = "function" == typeof t ? u(this, t) : null;
                                this._nativeAudioBufferSourceNode.onended = e; var n = this._nativeAudioBufferSourceNode.onended;
                                this._onended = null !== n && n === e ? t : n } }, { key: "playbackRate", get: function() { return this._playbackRate } }, { key: "start", value: function() { var t = this,
                                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                    r = arguments.length > 2 ? arguments[2] : void 0; if (this._nativeAudioBufferSourceNode.start(e, n, r), null !== this._audioBufferSourceNodeRenderer && (this._audioBufferSourceNodeRenderer.start = void 0 === r ? [e, n] : [e, n, r]), "closed" !== this.context.state) { V(this); var o = function e() { t._nativeAudioBufferSourceNode.removeEventListener("ended", e), ct(t) && U(t) };
                                    this._nativeAudioBufferSourceNode.addEventListener("ended", o) } } }, { key: "stop", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                this._nativeAudioBufferSourceNode.stop(t), null !== this._audioBufferSourceNodeRenderer && (this._audioBufferSourceNodeRenderer.stop = t) } }]), c }(t) }(Ao, Lo, Vo, rn, Bo, go, bo, oo),
                Uo = function(t, e, n, r, o, i, a, u) { return function(t) {
                        (0, G.Z)(c, t); var s = kt(c);

                        function c(t, n) { var r;
                            (0, w.Z)(this, c); var l = i(t),
                                f = a(l),
                                h = o(l, n, f),
                                p = f ? e(u) : null; return (r = s.call(this, t, !1, h, p))._isNodeOfNativeOfflineAudioContext = f, r._nativeAudioDestinationNode = h, r } return (0, _.Z)(c, [{ key: "channelCount", get: function() { return this._nativeAudioDestinationNode.channelCount }, set: function(t) { if (this._isNodeOfNativeOfflineAudioContext) throw r(); if (t > this._nativeAudioDestinationNode.maxChannelCount) throw n();
                                this._nativeAudioDestinationNode.channelCount = t } }, { key: "channelCountMode", get: function() { return this._nativeAudioDestinationNode.channelCountMode }, set: function(t) { if (this._isNodeOfNativeOfflineAudioContext) throw r();
                                this._nativeAudioDestinationNode.channelCountMode = t } }, { key: "maxChannelCount", get: function() { return this._nativeAudioDestinationNode.maxChannelCount } }]), c }(t) }(Ao, (function(t) { var e = new WeakMap,
                        n = function() { var n = (0, d.Z)(m().mark((function n(r, o) { var i; return m().wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return i = o.destination, e.set(o, i), n.next = 4, t(r, o, i);
                                        case 4:
                                            return n.abrupt("return", i);
                                        case 5:
                                        case "end":
                                            return n.stop() } }), n) }))); return function(t, e) { return n.apply(this, arguments) } }(); return { render: function(t, r) { var o = e.get(r); return void 0 !== o ? Promise.resolve(o) : n(t, r) } } }), et, rn, function(t, e) { return function(n, r, o) { var i = n.destination; if (i.channelCount !== r) try { i.channelCount = r } catch (u) {}
                        o && "explicit" !== i.channelCountMode && (i.channelCountMode = "explicit"), 0 === i.maxChannelCount && Object.defineProperty(i, "maxChannelCount", { value: r }); var a = t(n, { channelCount: r, channelCountMode: i.channelCountMode, channelInterpretation: i.channelInterpretation, gain: 1 }); return e(a, "channelCount", (function(t) { return function() { return t.call(a) } }), (function(t) { return function(e) { t.call(a, e); try { i.channelCount = e } catch (n) { if (e > i.maxChannelCount) throw n } } })), e(a, "channelCountMode", (function(t) { return function() { return t.call(a) } }), (function(t) { return function(e) { t.call(a, e), i.channelCountMode = e } })), e(a, "channelInterpretation", (function(t) { return function() { return t.call(a) } }), (function(t) { return function(e) { t.call(a, e), i.channelInterpretation = e } })), Object.defineProperty(a, "maxChannelCount", { get: function() { return i.maxChannelCount } }), a.connect(i), a } }(Kn, Vr), go, bo, vo),
                qo = function(t, e, n, r, o) { return function() { var i = new WeakMap,
                            a = function() { var a = (0, d.Z)(m().mark((function a(u, s) { var c, l, f; return m().wrap((function(a) { for (;;) switch (a.prev = a.next) {
                                            case 0:
                                                if (c = n(u), (l = K(c, s)) || (f = { Q: c.Q.value, channelCount: c.channelCount, channelCountMode: c.channelCountMode, channelInterpretation: c.channelInterpretation, detune: c.detune.value, frequency: c.frequency.value, gain: c.gain.value, type: c.type }, c = e(s, f)), i.set(s, c), l) { a.next = 15; break } return a.next = 7, r(s, u.Q, c.Q);
                                            case 7:
                                                return a.next = 9, r(s, u.detune, c.detune);
                                            case 9:
                                                return a.next = 11, r(s, u.frequency, c.frequency);
                                            case 11:
                                                return a.next = 13, r(s, u.gain, c.gain);
                                            case 13:
                                                a.next = 23; break;
                                            case 15:
                                                return a.next = 17, t(s, u.Q, c.Q);
                                            case 17:
                                                return a.next = 19, t(s, u.detune, c.detune);
                                            case 19:
                                                return a.next = 21, t(s, u.frequency, c.frequency);
                                            case 21:
                                                return a.next = 23, t(s, u.gain, c.gain);
                                            case 23:
                                                return a.next = 25, o(u, s, c);
                                            case 25:
                                                return a.abrupt("return", c);
                                            case 26:
                                            case "end":
                                                return a.stop() } }), a) }))); return function(t, e) { return a.apply(this, arguments) } }(); return { render: function(t, e) { var n = i.get(e); return void 0 !== n ? Promise.resolve(n) : a(t, e) } } } }(No, Wn, Bt, Fo, vo),
                Wo = function(t) { return function(e, n) { return t.set(e, n) } }(so),
                Go = function(t, e, n, r, o, i, a, u) { return function(t) {
                        (0, G.Z)(c, t); var s = xe(c);

                        function c(t, r) { var l;
                            (0, w.Z)(this, c); var f = i(t),
                                h = ke(ke({}, Oe), r),
                                p = o(f, h),
                                d = a(f),
                                v = d ? n() : null; return (l = s.call(this, t, !1, p, v))._Q = e((0, at.Z)(l), d, p.Q, st, ut), l._detune = e((0, at.Z)(l), d, p.detune, 1200 * Math.log2(st), -1200 * Math.log2(st)), l._frequency = e((0, at.Z)(l), d, p.frequency, t.sampleRate / 2, 0), l._gain = e((0, at.Z)(l), d, p.gain, 40 * Math.log10(st), ut), l._nativeBiquadFilterNode = p, u((0, at.Z)(l), 1), l } return (0, _.Z)(c, [{ key: "detune", get: function() { return this._detune } }, { key: "frequency", get: function() { return this._frequency } }, { key: "gain", get: function() { return this._gain } }, { key: "Q", get: function() { return this._Q } }, { key: "type", get: function() { return this._nativeBiquadFilterNode.type }, set: function(t) { this._nativeBiquadFilterNode.type = t } }, { key: "getFrequencyResponse", value: function(t, e, n) { try { this._nativeBiquadFilterNode.getFrequencyResponse(t, e, n) } catch (o) { if (11 === o.code) throw r(); throw o } if (t.length !== e.length || e.length !== n.length) throw r() } }]), c }(t) }(Ao, Vo, qo, on, Wn, go, bo, Wo),
                Ho = function(t, e) { return function(n, r, o) { var i = new Set; return n.connect = function(o) { return function(a) { var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                    s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                    c = 0 === i.size; if (e(a)) return o.call(n, a, u, s), t(i, [a, u, s], (function(t) { return t[0] === a && t[1] === u && t[2] === s }), !0), c && r(), a;
                                o.call(n, a, u), t(i, [a, u], (function(t) { return t[0] === a && t[1] === u }), !0), c && r() } }(n.connect), n.disconnect = function(t) { return function(r, a, u) { var s = i.size > 0; if (void 0 === r) t.apply(n), i.clear();
                                else if ("number" == typeof r) { t.call(n, r); var c, l = Tn(i); try { for (l.s(); !(c = l.n()).done;) { var f = c.value;
                                            f[1] === r && i.delete(f) } } catch (m) { l.e(m) } finally { l.f() } } else { e(r) ? t.call(n, r, a, u) : t.call(n, r, a); var h, p = Tn(i); try { for (p.s(); !(h = p.n()).done;) { var d = h.value;
                                            d[0] !== r || void 0 !== a && d[1] !== a || void 0 !== u && d[2] !== u || i.delete(d) } } catch (m) { p.e(m) } finally { p.f() } } var v = 0 === i.size;
                                s && v && o() } }(n.disconnect), n } }(At, Oo),
                Yo = function(t, e) { return function(n, r) { r.channelCount = 1, r.channelCountMode = "explicit", Object.defineProperty(r, "channelCount", { get: function() { return 1 }, set: function() { throw t() } }), Object.defineProperty(r, "channelCountMode", { get: function() { return "explicit" }, set: function() { throw t() } }); var o = n.createBufferSource();
                        e(r, (function() { for (var t = r.numberOfInputs, e = 0; e < t; e += 1) o.connect(r, 0, e) }), (function() { return o.disconnect(r) })) } }(rn, Ho),
                Xo = function(t, e) { return function(n, r) { var o = n.createChannelMerger(r.numberOfInputs); return null !== t && "webkitAudioContext" === t.name && e(n, o), Zn(o, r), o } }(ko, Yo),
                Qo = function(t, e, n) { return function() { var r = new WeakMap,
                            o = function() { var o = (0, d.Z)(m().mark((function o(i, a) { var u, s; return m().wrap((function(o) { for (;;) switch (o.prev = o.next) {
                                            case 0:
                                                return u = e(i), K(u, a) || (s = { channelCount: u.channelCount, channelCountMode: u.channelCountMode, channelInterpretation: u.channelInterpretation, numberOfInputs: u.numberOfInputs }, u = t(a, s)), r.set(a, u), o.next = 6, n(i, a, u);
                                            case 6:
                                                return o.abrupt("return", u);
                                            case 7:
                                            case "end":
                                                return o.stop() } }), o) }))); return function(t, e) { return o.apply(this, arguments) } }(); return { render: function(t, e) { var n = r.get(e); return void 0 !== n ? Promise.resolve(n) : o(t, e) } } } }(Xo, Bt, vo),
                $o = function(t, e, n, r, o) { return function(t) {
                        (0, G.Z)(a, t); var i = Ae(a);

                        function a(t, u) {
                            (0, w.Z)(this, a); var s = r(t),
                                c = Ce(Ce({}, Te), u),
                                l = n(s, c),
                                f = o(s) ? e() : null; return i.call(this, t, !1, l, f) } return (0, _.Z)(a) }(t) }(Ao, Qo, Xo, go, bo),
                Jo = function(t, e, n) { return function() { var r = new WeakMap,
                            o = function() { var o = (0, d.Z)(m().mark((function o(i, a) { var u, s; return m().wrap((function(o) { for (;;) switch (o.prev = o.next) {
                                            case 0:
                                                return u = e(i), K(u, a) || (s = { channelCount: u.channelCount, channelCountMode: u.channelCountMode, channelInterpretation: u.channelInterpretation, numberOfOutputs: u.numberOfOutputs }, u = t(a, s)), r.set(a, u), o.next = 6, n(i, a, u);
                                            case 6:
                                                return o.abrupt("return", u);
                                            case 7:
                                            case "end":
                                                return o.stop() } }), o) }))); return function(t, e) { return o.apply(this, arguments) } }(); return { render: function(t, e) { var n = r.get(e); return void 0 !== n ? Promise.resolve(n) : o(t, e) } } } }(Gn, Bt, vo),
                Ko = function(t, e, n, r, o, i) { return function(t) {
                        (0, G.Z)(u, t); var a = Ze(u);

                        function u(t, s) {
                            (0, w.Z)(this, u); var c = r(t),
                                l = i(Pe(Pe({}, Re), s)),
                                f = n(c, l),
                                h = o(c) ? e() : null; return a.call(this, t, !1, f, h) } return (0, _.Z)(u) }(t) }(Ao, Jo, Gn, go, bo, (function(t) { return Wr(Wr({}, t), {}, { channelCount: t.numberOfOutputs }) })),
                ti = function(t, e, n, r) { return function(o, i) { var a = i.offset,
                            u = (0, Hn.Z)(i, Xn),
                            s = o.createBuffer(1, 2, 44100),
                            c = e(o, { buffer: null, channelCount: 2, channelCountMode: "max", channelInterpretation: "speakers", loop: !1, loopEnd: 0, loopStart: 0, playbackRate: 1 }),
                            l = n(o, $n($n({}, u), {}, { gain: a })),
                            f = s.getChannelData(0);
                        f[0] = 1, f[1] = 1, c.buffer = s, c.loop = !0; var h = {get bufferSize() {}, get channelCount() { return l.channelCount }, set channelCount(t) { l.channelCount = t }, get channelCountMode() { return l.channelCountMode }, set channelCountMode(t) { l.channelCountMode = t }, get channelInterpretation() { return l.channelInterpretation }, set channelInterpretation(t) { l.channelInterpretation = t }, get context() { return l.context }, get inputs() { return [] }, get numberOfInputs() { return c.numberOfInputs }, get numberOfOutputs() { return l.numberOfOutputs }, get offset() { return l.gain }, get onended() { return c.onended }, set onended(t) { c.onended = t }, addEventListener: function() { return c.addEventListener(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) }, dispatchEvent: function() { return c.dispatchEvent(arguments.length <= 0 ? void 0 : arguments[0]) }, removeEventListener: function() { return c.removeEventListener(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) }, start: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                c.start.call(c, t) }, stop: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                c.stop.call(c, t) } }; return t(o, c), r(Yn(h, l), (function() { return c.connect(l) }), (function() { return c.disconnect(l) })) } }(Mo, Bo, Kn, Ho),
                ei = function(t, e, n, r, o) { return function(i, a) { if (void 0 === i.createConstantSource) return n(i, a); var u = i.createConstantSource(); return Zn(u, a), Dn(u, a, "offset"), e(r, (function() { return r(i) })) || jn(u), e(o, (function() { return o(i) })) || Mn(u), t(i, u), u } }(Mo, lo, ti, to, no),
                ni = function(t, e, n, r, o) { return function() { var i = new WeakMap,
                            a = null,
                            u = null,
                            s = function() { var s = (0, d.Z)(m().mark((function s(c, l) { var f, h, p; return m().wrap((function(s) { for (;;) switch (s.prev = s.next) {
                                            case 0:
                                                if (f = n(c), (h = K(f, l)) || (p = { channelCount: f.channelCount, channelCountMode: f.channelCountMode, channelInterpretation: f.channelInterpretation, offset: f.offset.value }, f = e(l, p), null !== a && f.start(a), null !== u && f.stop(u)), i.set(l, f), h) { s.next = 9; break } return s.next = 7, r(l, c.offset, f.offset);
                                            case 7:
                                                s.next = 11; break;
                                            case 9:
                                                return s.next = 11, t(l, c.offset, f.offset);
                                            case 11:
                                                return s.next = 13, o(c, l, f);
                                            case 13:
                                                return s.abrupt("return", f);
                                            case 14:
                                            case "end":
                                                return s.stop() } }), s) }))); return function(t, e) { return s.apply(this, arguments) } }(); return {set start(t) { a = t }, set stop(t) { u = t }, render: function(t, e) { var n = i.get(e); return void 0 !== n ? Promise.resolve(n) : s(t, e) } } } }(No, ei, Bt, Fo, vo),
                ri = function(t, e, n, r, o, i, a) { return function(t) {
                        (0, G.Z)(s, t); var u = Me(s);

                        function s(t, a) { var c;
                            (0, w.Z)(this, s); var l = o(t),
                                f = je(je({}, Ie), a),
                                h = r(l, f),
                                p = i(l),
                                d = p ? n() : null; return (c = u.call(this, t, !1, h, d))._constantSourceNodeRenderer = d, c._nativeConstantSourceNode = h, c._offset = e((0, at.Z)(c), p, h.offset, st, ut), c._onended = null, c } return (0, _.Z)(s, [{ key: "offset", get: function() { return this._offset } }, { key: "onended", get: function() { return this._onended }, set: function(t) { var e = "function" == typeof t ? a(this, t) : null;
                                this._nativeConstantSourceNode.onended = e; var n = this._nativeConstantSourceNode.onended;
                                this._onended = null !== n && n === e ? t : n } }, { key: "start", value: function() { var t = this,
                                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0; if (this._nativeConstantSourceNode.start(e), null !== this._constantSourceNodeRenderer && (this._constantSourceNodeRenderer.start = e), "closed" !== this.context.state) { V(this); var n = function e() { t._nativeConstantSourceNode.removeEventListener("ended", e), ct(t) && U(t) };
                                    this._nativeConstantSourceNode.addEventListener("ended", n) } } }, { key: "stop", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                this._nativeConstantSourceNode.stop(t), null !== this._constantSourceNodeRenderer && (this._constantSourceNodeRenderer.stop = t) } }]), s }(t) }(Ao, Vo, ni, ei, go, bo, oo),
                oi = function(t, e) { return function(n, r) { var o = n.createConvolver(); if (Zn(o, r), r.disableNormalization === o.normalize && (o.normalize = !r.disableNormalization), Pn(o, r, "buffer"), r.channelCount > 2) throw t(); if (e(o, "channelCount", (function(t) { return function() { return t.call(o) } }), (function(e) { return function(n) { if (n > 2) throw t(); return e.call(o, n) } })), "max" === r.channelCountMode) throw t(); return e(o, "channelCountMode", (function(t) { return function() { return t.call(o) } }), (function(e) { return function(n) { if ("max" === n) throw t(); return e.call(o, n) } })), o } }(hr, Vr),
                ii = function(t, e, n) { return function() { var r = new WeakMap,
                            o = function() { var o = (0, d.Z)(m().mark((function o(i, a) { var u, s; return m().wrap((function(o) { for (;;) switch (o.prev = o.next) {
                                            case 0:
                                                if (u = e(i), K(u, a) || (s = { buffer: u.buffer, channelCount: u.channelCount, channelCountMode: u.channelCountMode, channelInterpretation: u.channelInterpretation, disableNormalization: !u.normalize }, u = t(a, s)), r.set(a, u), !Pt(u)) { o.next = 9; break } return o.next = 7, n(i, a, u.inputs[0]);
                                            case 7:
                                                o.next = 11; break;
                                            case 9:
                                                return o.next = 11, n(i, a, u);
                                            case 11:
                                                return o.abrupt("return", u);
                                            case 12:
                                            case "end":
                                                return o.stop() } }), o) }))); return function(t, e) { return o.apply(this, arguments) } }(); return { render: function(t, e) { var n = r.get(e); return void 0 !== n ? Promise.resolve(n) : o(t, e) } } } }(oi, Bt, vo),
                ai = function(t, e, n, r, o, i) { return function(t) {
                        (0, G.Z)(u, t); var a = Fe(u);

                        function u(t, s) { var c;
                            (0, w.Z)(this, u); var l = r(t),
                                f = Be(Be({}, Le), s),
                                h = n(l, f),
                                p = o(l) ? e() : null; return (c = a.call(this, t, !1, h, p))._isBufferNullified = !1, c._nativeConvolverNode = h, null !== f.buffer && i((0, at.Z)(c), f.buffer.duration), c } return (0, _.Z)(u, [{ key: "buffer", get: function() { return this._isBufferNullified ? null : this._nativeConvolverNode.buffer }, set: function(t) { if (this._nativeConvolverNode.buffer = t, null === t && null !== this._nativeConvolverNode.buffer) { var e = this._nativeConvolverNode.context;
                                    this._nativeConvolverNode.buffer = e.createBuffer(1, 1, 44100), this._isBufferNullified = !0, i(this, 0) } else this._isBufferNullified = !1, i(this, null === this._nativeConvolverNode.buffer ? 0 : this._nativeConvolverNode.buffer.duration) } }, { key: "normalize", get: function() { return this._nativeConvolverNode.normalize }, set: function(t) { this._nativeConvolverNode.normalize = t } }]), u }(t) }(Ao, ii, oi, go, bo, Wo),
                ui = function(t, e, n, r, o) { return function(i) { var a = new WeakMap,
                            u = function() { var u = (0, d.Z)(m().mark((function u(s, c) { var l, f, h; return m().wrap((function(u) { for (;;) switch (u.prev = u.next) {
                                            case 0:
                                                if (l = n(s), (f = K(l, c)) || (h = { channelCount: l.channelCount, channelCountMode: l.channelCountMode, channelInterpretation: l.channelInterpretation, delayTime: l.delayTime.value, maxDelayTime: i }, l = e(c, h)), a.set(c, l), f) { u.next = 9; break } return u.next = 7, r(c, s.delayTime, l.delayTime);
                                            case 7:
                                                u.next = 11; break;
                                            case 9:
                                                return u.next = 11, t(c, s.delayTime, l.delayTime);
                                            case 11:
                                                return u.next = 13, o(s, c, l);
                                            case 13:
                                                return u.abrupt("return", l);
                                            case 14:
                                            case "end":
                                                return u.stop() } }), u) }))); return function(t, e) { return u.apply(this, arguments) } }(); return { render: function(t, e) { var n = a.get(e); return void 0 !== n ? Promise.resolve(n) : u(t, e) } } } }(No, Jn, Bt, Fo, vo),
                si = function(t, e, n, r, o, i, a) { return function(t) {
                        (0, G.Z)(s, t); var u = Ge(s);

                        function s(t, c) { var l;
                            (0, w.Z)(this, s); var f = o(t),
                                h = We(We({}, He), c),
                                p = r(f, h),
                                d = i(f),
                                v = d ? n(h.maxDelayTime) : null; return (l = u.call(this, t, !1, p, v))._delayTime = e((0, at.Z)(l), d, p.delayTime), a((0, at.Z)(l), h.maxDelayTime), l } return (0, _.Z)(s, [{ key: "delayTime", get: function() { return this._delayTime } }]), s }(t) }(Ao, Vo, ui, Jn, go, bo, Wo),
                ci = function(t) { return function(e, n) { var r = e.createDynamicsCompressor(); if (Zn(r, n), n.channelCount > 2) throw t(); if ("max" === n.channelCountMode) throw t(); return Dn(r, n, "attack"), Dn(r, n, "knee"), Dn(r, n, "ratio"), Dn(r, n, "release"), Dn(r, n, "threshold"), r } }(hr),
                li = function(t, e, n, r, o) { return function() { var i = new WeakMap,
                            a = function() { var a = (0, d.Z)(m().mark((function a(u, s) { var c, l, f; return m().wrap((function(a) { for (;;) switch (a.prev = a.next) {
                                            case 0:
                                                if (c = n(u), (l = K(c, s)) || (f = { attack: c.attack.value, channelCount: c.channelCount, channelCountMode: c.channelCountMode, channelInterpretation: c.channelInterpretation, knee: c.knee.value, ratio: c.ratio.value, release: c.release.value, threshold: c.threshold.value }, c = e(s, f)), i.set(s, c), l) { a.next = 17; break } return a.next = 7, r(s, u.attack, c.attack);
                                            case 7:
                                                return a.next = 9, r(s, u.knee, c.knee);
                                            case 9:
                                                return a.next = 11, r(s, u.ratio, c.ratio);
                                            case 11:
                                                return a.next = 13, r(s, u.release, c.release);
                                            case 13:
                                                return a.next = 15, r(s, u.threshold, c.threshold);
                                            case 15:
                                                a.next = 27; break;
                                            case 17:
                                                return a.next = 19, t(s, u.attack, c.attack);
                                            case 19:
                                                return a.next = 21, t(s, u.knee, c.knee);
                                            case 21:
                                                return a.next = 23, t(s, u.ratio, c.ratio);
                                            case 23:
                                                return a.next = 25, t(s, u.release, c.release);
                                            case 25:
                                                return a.next = 27, t(s, u.threshold, c.threshold);
                                            case 27:
                                                return a.next = 29, o(u, s, c);
                                            case 29:
                                                return a.abrupt("return", c);
                                            case 30:
                                            case "end":
                                                return a.stop() } }), a) }))); return function(t, e) { return a.apply(this, arguments) } }(); return { render: function(t, e) { var n = i.get(e); return void 0 !== n ? Promise.resolve(n) : a(t, e) } } } }(No, ci, Bt, Fo, vo),
                fi = function(t, e, n, r, o, i, a, u) { return function(t) {
                        (0, G.Z)(c, t); var s = $e(c);

                        function c(t, o) { var l;
                            (0, w.Z)(this, c); var f = i(t),
                                h = Qe(Qe({}, Je), o),
                                p = r(f, h),
                                d = a(f),
                                v = d ? n() : null; return (l = s.call(this, t, !1, p, v))._attack = e((0, at.Z)(l), d, p.attack), l._knee = e((0, at.Z)(l), d, p.knee), l._nativeDynamicsCompressorNode = p, l._ratio = e((0, at.Z)(l), d, p.ratio), l._release = e((0, at.Z)(l), d, p.release), l._threshold = e((0, at.Z)(l), d, p.threshold), u((0, at.Z)(l), .006), l } return (0, _.Z)(c, [{ key: "attack", get: function() { return this._attack } }, { key: "channelCount", get: function() { return this._nativeDynamicsCompressorNode.channelCount }, set: function(t) { var e = this._nativeDynamicsCompressorNode.channelCount; if (this._nativeDynamicsCompressorNode.channelCount = t, t > 2) throw this._nativeDynamicsCompressorNode.channelCount = e, o() } }, { key: "channelCountMode", get: function() { return this._nativeDynamicsCompressorNode.channelCountMode }, set: function(t) { var e = this._nativeDynamicsCompressorNode.channelCountMode; if (this._nativeDynamicsCompressorNode.channelCountMode = t, "max" === t) throw this._nativeDynamicsCompressorNode.channelCountMode = e, o() } }, { key: "knee", get: function() { return this._knee } }, { key: "ratio", get: function() { return this._ratio } }, { key: "reduction", get: function() { return "number" == typeof this._nativeDynamicsCompressorNode.reduction.value ? this._nativeDynamicsCompressorNode.reduction.value : this._nativeDynamicsCompressorNode.reduction } }, { key: "release", get: function() { return this._release } }, { key: "threshold", get: function() { return this._threshold } }]), c }(t) }(Ao, Vo, li, ci, hr, go, bo, Wo),
                hi = function(t, e, n, r, o) { return function() { var i = new WeakMap,
                            a = function() { var a = (0, d.Z)(m().mark((function a(u, s) { var c, l, f; return m().wrap((function(a) { for (;;) switch (a.prev = a.next) {
                                            case 0:
                                                if (c = n(u), (l = K(c, s)) || (f = { channelCount: c.channelCount, channelCountMode: c.channelCountMode, channelInterpretation: c.channelInterpretation, gain: c.gain.value }, c = e(s, f)), i.set(s, c), l) { a.next = 9; break } return a.next = 7, r(s, u.gain, c.gain);
                                            case 7:
                                                a.next = 11; break;
                                            case 9:
                                                return a.next = 11, t(s, u.gain, c.gain);
                                            case 11:
                                                return a.next = 13, o(u, s, c);
                                            case 13:
                                                return a.abrupt("return", c);
                                            case 14:
                                            case "end":
                                                return a.stop() } }), a) }))); return function(t, e) { return a.apply(this, arguments) } }(); return { render: function(t, e) { var n = i.get(e); return void 0 !== n ? Promise.resolve(n) : a(t, e) } } } }(No, Kn, Bt, Fo, vo),
                pi = function(t, e, n, r, o, i) { return function(t) {
                        (0, G.Z)(u, t); var a = en(u);

                        function u(t, s) { var c;
                            (0, w.Z)(this, u); var l = o(t),
                                f = tn(tn({}, nn), s),
                                h = r(l, f),
                                p = i(l),
                                d = p ? n() : null; return (c = a.call(this, t, !1, h, d))._gain = e((0, at.Z)(c), p, h.gain, st, ut), c } return (0, _.Z)(u, [{ key: "gain", get: function() { return this._gain } }]), u }(t) }(Ao, Vo, hi, Kn, go, bo),
                di = function(t, e, n, r) { return function(o, i, a) { var u = a.channelCount,
                            s = a.channelCountMode,
                            c = a.channelInterpretation,
                            l = a.feedback,
                            f = a.feedforward,
                            h = Bn(i, o.sampleRate),
                            p = l instanceof Float64Array ? l : new Float64Array(l),
                            d = f instanceof Float64Array ? f : new Float64Array(f),
                            v = p.length,
                            m = d.length,
                            g = Math.min(v, m); if (0 === v || v > 20) throw r(); if (0 === p[0]) throw e(); if (0 === m || m > 20) throw r(); if (0 === d[0]) throw e(); if (1 !== p[0]) { for (var y = 0; y < m; y += 1) d[y] /= p[0]; for (var b = 1; b < v; b += 1) p[b] /= p[0] } var _ = n(o, h, u, u);
                        _.channelCount = u, _.channelCountMode = s, _.channelInterpretation = c; for (var w = [], k = [], x = [], O = 0; O < u; O += 1) { w.push(0); var S = new Float32Array(32),
                                C = new Float32Array(32);
                            S.fill(0), C.fill(0), k.push(S), x.push(C) }
                        _.onaudioprocess = function(t) { for (var e = t.inputBuffer, n = t.outputBuffer, r = e.numberOfChannels, o = 0; o < r; o += 1) { var i = e.getChannelData(o),
                                    a = n.getChannelData(o);
                                w[o] = ln(p, v, d, m, g, k[o], x[o], w[o], 32, i, a) } }; var A = o.sampleRate / 2,
                            T = {get bufferSize() { return h }, get channelCount() { return _.channelCount }, set channelCount(t) { _.channelCount = t }, get channelCountMode() { return _.channelCountMode }, set channelCountMode(t) { _.channelCountMode = t }, get channelInterpretation() { return _.channelInterpretation }, set channelInterpretation(t) { _.channelInterpretation = t }, get context() { return _.context }, get inputs() { return [_] }, get numberOfInputs() { return _.numberOfInputs }, get numberOfOutputs() { return _.numberOfOutputs }, addEventListener: function() { return _.addEventListener(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) }, dispatchEvent: function() { return _.dispatchEvent(arguments.length <= 0 ? void 0 : arguments[0]) }, getFrequencyResponse: function(e, n, r) { if (e.length !== n.length || n.length !== r.length) throw t(); for (var o = e.length, i = 0; i < o; i += 1) { var a = -Math.PI * (e[i] / A),
                                            u = [Math.cos(a), Math.sin(a)],
                                            s = tr(er(d, u), er(p, u));
                                        n[i] = Math.sqrt(s[0] * s[0] + s[1] * s[1]), r[i] = Math.atan2(s[1], s[0]) } }, removeEventListener: function() { return _.removeEventListener(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) } }; return Yn(T, _) } }(on, rn, ir, hr),
                vi = function(t, e, n, r) { return function(o) { return t(xn, (function() { return xn(o) })) ? Promise.resolve(t(r, r)).then((function(t) { if (!t) { var e = n(o, 512, 0, 1);
                                o.oncomplete = function() { e.onaudioprocess = null, e.disconnect() }, e.onaudioprocess = function() { return o.currentTime }, e.connect(o.destination) } return o.startRendering() })) : new Promise((function(t) { var n = e(o, { channelCount: 1, channelCountMode: "explicit", channelInterpretation: "discrete", gain: 0 });
                            o.oncomplete = function(e) { n.disconnect(), t(e.renderedBuffer) }, n.connect(o.destination), o.startRendering() })) } }(lo, Kn, ir, function(t, e) { return function() { if (null === e) return Promise.resolve(!1); var n = new e(1, 1, 44100),
                            r = t(n, { channelCount: 1, channelCountMode: "explicit", channelInterpretation: "discrete", gain: 0 }); return new Promise((function(t) { n.oncomplete = function() { r.disconnect(), t(0 !== n.currentTime) }, n.startRendering() })) } }(Kn, yo)),
                mi = function(t, e, n, r, o) { return function(i, a) { var u = new WeakMap,
                            s = null,
                            c = function() { var c = (0, d.Z)(m().mark((function c(l, f) { var h, p, v, g, y; return m().wrap((function(c) { for (;;) switch (c.prev = c.next) {
                                            case 0:
                                                if (h = null, p = e(l), v = K(p, f), void 0 === f.createIIRFilter ? h = t(f, { buffer: null, channelCount: 2, channelCountMode: "max", channelInterpretation: "speakers", loop: !1, loopEnd: 0, loopStart: 0, playbackRate: 1 }) : v || (p = f.createIIRFilter(a, i)), u.set(f, null === h ? p : h), null === h) { c.next = 17; break } if (null !== s) { c.next = 11; break } if (null !== n) { c.next = 9; break } throw new Error("Missing the native OfflineAudioContext constructor.");
                                            case 9:
                                                g = new n(l.context.destination.channelCount, l.context.length, f.sampleRate), s = (0, d.Z)(m().mark((function t() { var e; return m().wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                                            case 0:
                                                                return t.next = 2, r(l, g, g.destination);
                                                            case 2:
                                                                return t.next = 4, o(g);
                                                            case 4:
                                                                return e = t.sent, t.abrupt("return", fn(e, f, i, a));
                                                            case 6:
                                                            case "end":
                                                                return t.stop() } }), t) })))();
                                            case 11:
                                                return c.next = 13, s;
                                            case 13:
                                                return y = c.sent, h.buffer = y, h.start(0), c.abrupt("return", h);
                                            case 17:
                                                return c.next = 19, r(l, f, p);
                                            case 19:
                                                return c.abrupt("return", p);
                                            case 20:
                                            case "end":
                                                return c.stop() } }), c) }))); return function(t, e) { return c.apply(this, arguments) } }(); return { render: function(t, e) { var n = u.get(e); return void 0 !== n ? Promise.resolve(n) : c(t, e) } } } }(Bo, Bt, yo, vo, vi),
                gi = function(t) { return function(e, n, r) { if (void 0 === e.createIIRFilter) return t(e, n, r); var o = e.createIIRFilter(r.feedforward, r.feedback); return Zn(o, r), o } }(di),
                yi = function(t, e, n, r, o, i) { return function(t) {
                        (0, G.Z)(u, t); var a = sn(u);

                        function u(t, s) { var c;
                            (0, w.Z)(this, u); var l = r(t),
                                f = o(l),
                                h = un(un({}, cn), s),
                                p = e(l, f ? null : t.baseLatency, h),
                                d = f ? n(h.feedback, h.feedforward) : null; return c = a.call(this, t, !1, p, d),
                                function(t) { var e;
                                    t.getFrequencyResponse = (e = t.getFrequencyResponse, function(n, r, o) { if (n.length !== r.length || r.length !== o.length) throw on(); return e.call(t, n, r, o) }) }(p), c._nativeIIRFilterNode = p, i((0, at.Z)(c), 1), c } return (0, _.Z)(u, [{ key: "getFrequencyResponse", value: function(t, e, n) { return this._nativeIIRFilterNode.getFrequencyResponse(t, e, n) } }]), u }(t) }(Ao, gi, mi, go, bo, Wo),
                bi = function(t, e, n, r, o, i, a, s) { return function(c, l) { var f, h, p, d, v, m, g, y, b, _, w = l.listener,
                            k = void 0 === w.forwardX ? (f = new Float32Array(1), h = e(l, { channelCount: 1, channelCountMode: "explicit", channelInterpretation: "speakers", numberOfInputs: 9 }), p = a(l), d = !1, v = [0, 0, -1, 0, 1, 0], m = [0, 0, 0], g = function() { if (!d) { d = !0; var t = r(l, 256, 9, 0);
                                    t.onaudioprocess = function(t) { var e = t.inputBuffer,
                                            n = [i(e, f, 0), i(e, f, 1), i(e, f, 2), i(e, f, 3), i(e, f, 4), i(e, f, 5)];
                                        n.some((function(t, e) { return t !== v[e] })) && (w.setOrientation.apply(w, n), v = n); var r = [i(e, f, 6), i(e, f, 7), i(e, f, 8)];
                                        r.some((function(t, e) { return t !== m[e] })) && (w.setPosition.apply(w, r), m = r) }, h.connect(t) } }, b = function(t) { return function(e) { e !== m[t] && (m[t] = e, w.setPosition.apply(w, (0, u.Z)(m))) } }, _ = function(e, r, i) { var a = n(l, { channelCount: 1, channelCountMode: "explicit", channelInterpretation: "discrete", offset: r });
                                a.connect(h, 0, e), a.start(), Object.defineProperty(a.offset, "defaultValue", { get: function() { return r } }); var u, f, d, v, m, y, b, _ = t({ context: c }, p, a.offset, st, ut); return s(_, "value", (function(t) { return function() { return t.call(_) } }), (function(t) { return function(e) { try { t.call(_, e) } catch (n) { if (9 !== n.code) throw n }
                                        g(), p && i(e) } })), _.cancelAndHoldAtTime = (u = _.cancelAndHoldAtTime, p ? function() { throw o() } : function() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; var r = u.apply(_, e); return g(), r }), _.cancelScheduledValues = (f = _.cancelScheduledValues, p ? function() { throw o() } : function() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; var r = f.apply(_, e); return g(), r }), _.exponentialRampToValueAtTime = (d = _.exponentialRampToValueAtTime, p ? function() { throw o() } : function() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; var r = d.apply(_, e); return g(), r }), _.linearRampToValueAtTime = (v = _.linearRampToValueAtTime, p ? function() { throw o() } : function() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; var r = v.apply(_, e); return g(), r }), _.setTargetAtTime = (m = _.setTargetAtTime, p ? function() { throw o() } : function() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; var r = m.apply(_, e); return g(), r }), _.setValueAtTime = (y = _.setValueAtTime, p ? function() { throw o() } : function() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; var r = y.apply(_, e); return g(), r }), _.setValueCurveAtTime = (b = _.setValueCurveAtTime, p ? function() { throw o() } : function() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; var r = b.apply(_, e); return g(), r }), _ }, { forwardX: _(0, 0, (y = function(t) { return function(e) { e !== v[t] && (v[t] = e, w.setOrientation.apply(w, (0, u.Z)(v))) } })(0)), forwardY: _(1, 0, y(1)), forwardZ: _(2, -1, y(2)), positionX: _(6, 0, b(0)), positionY: _(7, 0, b(1)), positionZ: _(8, 0, b(2)), upX: _(3, 0, y(3)), upY: _(4, 1, y(4)), upZ: _(5, 0, y(5)) }) : w,
                            x = k.forwardX,
                            O = k.forwardY,
                            S = k.forwardZ,
                            C = k.positionX,
                            A = k.positionY,
                            T = k.positionZ,
                            E = k.upX,
                            P = k.upY,
                            Z = k.upZ; return {get forwardX() { return x }, get forwardY() { return O }, get forwardZ() { return S }, get positionX() { return C }, get positionY() { return A }, get positionZ() { return T }, get upX() { return E }, get upY() { return P }, get upZ() { return Z } } } }(Vo, Xo, ei, ir, hr, Fr, bo, Vr),
                _i = new WeakMap,
                wi = function(t, e, n, r, o, i) { return function(n) {
                        (0, G.Z)(u, n); var a = kn(u);

                        function u(n, i) { var s; return (0, w.Z)(this, u), (s = a.call(this, n))._nativeContext = n, A.set((0, at.Z)(s), n), r(n) && o.set(n, new Set), s._destination = new t((0, at.Z)(s), i), s._listener = e((0, at.Z)(s), n), s._onstatechange = null, s } return (0, _.Z)(u, [{ key: "currentTime", get: function() { return this._nativeContext.currentTime } }, { key: "destination", get: function() { return this._destination } }, { key: "listener", get: function() { return this._listener } }, { key: "onstatechange", get: function() { return this._onstatechange }, set: function(t) { var e = "function" == typeof t ? i(this, t) : null;
                                this._nativeContext.onstatechange = e; var n = this._nativeContext.onstatechange;
                                this._onstatechange = null !== n && n === e ? t : n } }, { key: "sampleRate", get: function() { return this._nativeContext.sampleRate } }, { key: "state", get: function() { return this._nativeContext.state } }]), u }(n) }(Uo, bi, wo, bo, _i, oo),
                ki = function(t, e, n, r, o, i) { return function(a, u) { var s = a.createOscillator(); return Zn(s, u), Dn(s, u, "detune"), Dn(s, u, "frequency"), void 0 !== u.periodicWave ? s.setPeriodicWave(u.periodicWave) : Pn(s, u, "type"), e(n, (function() { return n(a) })) || jn(s), e(r, (function() { return r(a) })) || i(s, a), e(o, (function() { return o(a) })) || Mn(s), t(a, s), s } }(Mo, lo, to, eo, no, ro),
                xi = function(t, e, n, r, o) { return function() { var i = new WeakMap,
                            a = null,
                            u = null,
                            s = null,
                            c = function() { var c = (0, d.Z)(m().mark((function c(l, f) { var h, p, d; return m().wrap((function(c) { for (;;) switch (c.prev = c.next) {
                                            case 0:
                                                if (h = n(l), (p = K(h, f)) || (d = { channelCount: h.channelCount, channelCountMode: h.channelCountMode, channelInterpretation: h.channelInterpretation, detune: h.detune.value, frequency: h.frequency.value, periodicWave: null === a ? void 0 : a, type: h.type }, h = e(f, d), null !== u && h.start(u), null !== s && h.stop(s)), i.set(f, h), p) { c.next = 11; break } return c.next = 7, r(f, l.detune, h.detune);
                                            case 7:
                                                return c.next = 9, r(f, l.frequency, h.frequency);
                                            case 9:
                                                c.next = 15; break;
                                            case 11:
                                                return c.next = 13, t(f, l.detune, h.detune);
                                            case 13:
                                                return c.next = 15, t(f, l.frequency, h.frequency);
                                            case 15:
                                                return c.next = 17, o(l, f, h);
                                            case 17:
                                                return c.abrupt("return", h);
                                            case 18:
                                            case "end":
                                                return c.stop() } }), c) }))); return function(t, e) { return c.apply(this, arguments) } }(); return {set periodicWave(t) { a = t }, set start(t) { u = t }, set stop(t) { s = t }, render: function(t, e) { var n = i.get(e); return void 0 !== n ? Promise.resolve(n) : c(t, e) } } } }(No, ki, Bt, Fo, vo),
                Oi = function(t, e, n, r, o, i, a) { return function(t) {
                        (0, G.Z)(s, t); var u = br(s);

                        function s(t, a) { var c;
                            (0, w.Z)(this, s); var l = o(t),
                                f = yr(yr({}, _r), a),
                                h = n(l, f),
                                p = i(l),
                                d = p ? r() : null,
                                v = t.sampleRate / 2; return (c = u.call(this, t, !1, h, d))._detune = e((0, at.Z)(c), p, h.detune, 153600, -153600), c._frequency = e((0, at.Z)(c), p, h.frequency, v, -v), c._nativeOscillatorNode = h, c._onended = null, c._oscillatorNodeRenderer = d, null !== c._oscillatorNodeRenderer && void 0 !== f.periodicWave && (c._oscillatorNodeRenderer.periodicWave = f.periodicWave), c } return (0, _.Z)(s, [{ key: "detune", get: function() { return this._detune } }, { key: "frequency", get: function() { return this._frequency } }, { key: "onended", get: function() { return this._onended }, set: function(t) { var e = "function" == typeof t ? a(this, t) : null;
                                this._nativeOscillatorNode.onended = e; var n = this._nativeOscillatorNode.onended;
                                this._onended = null !== n && n === e ? t : n } }, { key: "type", get: function() { return this._nativeOscillatorNode.type }, set: function(t) { this._nativeOscillatorNode.type = t, null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.periodicWave = null) } }, { key: "setPeriodicWave", value: function(t) { this._nativeOscillatorNode.setPeriodicWave(t), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.periodicWave = t) } }, { key: "start", value: function() { var t = this,
                                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0; if (this._nativeOscillatorNode.start(e), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.start = e), "closed" !== this.context.state) { V(this); var n = function e() { t._nativeOscillatorNode.removeEventListener("ended", e), ct(t) && U(t) };
                                    this._nativeOscillatorNode.addEventListener("ended", n) } } }, { key: "stop", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                this._nativeOscillatorNode.stop(t), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.stop = t) } }]), s }(t) }(Ao, Vo, ki, xi, go, bo, oo),
                Si = function(t) { return function(e, n) { var r = t(e, { buffer: null, channelCount: 2, channelCountMode: "max", channelInterpretation: "speakers", loop: !1, loopEnd: 0, loopStart: 0, playbackRate: 1 }),
                            o = e.createBuffer(1, 2, 44100); return r.buffer = o, r.loop = !0, r.connect(n), r.start(),
                            function() { r.stop(), r.disconnect(n) } } }(Bo),
                Ci = function(t, e, n, r, o) { return function(i, a) { var u = a.curve,
                            s = a.oversample,
                            c = (0, Hn.Z)(a, cr),
                            l = i.createWaveShaper(),
                            f = i.createWaveShaper();
                        Zn(l, c), Zn(f, c); var h = n(i, fr(fr({}, c), {}, { gain: 1 })),
                            p = n(i, fr(fr({}, c), {}, { gain: -1 })),
                            d = n(i, fr(fr({}, c), {}, { gain: 1 })),
                            v = n(i, fr(fr({}, c), {}, { gain: -1 })),
                            m = null,
                            g = !1,
                            y = null,
                            b = {get bufferSize() {}, get channelCount() { return l.channelCount }, set channelCount(t) { h.channelCount = t, p.channelCount = t, l.channelCount = t, d.channelCount = t, f.channelCount = t, v.channelCount = t }, get channelCountMode() { return l.channelCountMode }, set channelCountMode(t) { h.channelCountMode = t, p.channelCountMode = t, l.channelCountMode = t, d.channelCountMode = t, f.channelCountMode = t, v.channelCountMode = t }, get channelInterpretation() { return l.channelInterpretation }, set channelInterpretation(t) { h.channelInterpretation = t, p.channelInterpretation = t, l.channelInterpretation = t, d.channelInterpretation = t, f.channelInterpretation = t, v.channelInterpretation = t }, get context() { return l.context }, get curve() { return y }, set curve(n) { if (null !== n && n.length < 2) throw e(); if (null === n) l.curve = n, f.curve = n;
                                    else { var o = n.length,
                                            a = new Float32Array(o + 2 - o % 2),
                                            u = new Float32Array(o + 2 - o % 2);
                                        a[0] = n[0], u[0] = -n[o - 1]; for (var s = Math.ceil((o + 1) / 2), c = (o + 1) / 2 - 1, p = 1; p < s; p += 1) { var d = p / s * c,
                                                v = Math.floor(d),
                                                b = Math.ceil(d);
                                            a[p] = v === b ? n[v] : (1 - (d - v)) * n[v] + (1 - (b - d)) * n[b], u[p] = v === b ? -n[o - 1 - v] : -(1 - (d - v)) * n[o - 1 - v] - (1 - (b - d)) * n[o - 1 - b] }
                                        a[s] = o % 2 == 1 ? n[s - 1] : (n[s - 2] + n[s - 1]) / 2, l.curve = a, f.curve = u }
                                    y = n, g && (r(y) && null === m ? m = t(i, h) : null !== m && (m(), m = null)) }, get inputs() { return [h] }, get numberOfInputs() { return l.numberOfInputs }, get numberOfOutputs() { return l.numberOfOutputs }, get oversample() { return l.oversample }, set oversample(t) { l.oversample = t, f.oversample = t }, addEventListener: function() { return h.addEventListener(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) }, dispatchEvent: function() { return h.dispatchEvent(arguments.length <= 0 ? void 0 : arguments[0]) }, removeEventListener: function() { return h.removeEventListener(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) } };
                        null !== u && (b.curve = u instanceof Float32Array ? u : new Float32Array(u)), s !== b.oversample && (b.oversample = s); return o(Yn(b, d), (function() { h.connect(l).connect(d), h.connect(p).connect(f).connect(v).connect(d), g = !0, r(y) && (m = t(i, h)) }), (function() { h.disconnect(l), l.disconnect(d), h.disconnect(p), p.disconnect(f), f.disconnect(v), v.disconnect(d), g = !1, null !== m && (m(), m = null) })) } }(Si, rn, Kn, Lr, Ho),
                Ai = function(t, e, n, r, o, i, a) { return function(u, s) { var c = u.createWaveShaper(); if (null !== i && "webkitAudioContext" === i.name && void 0 === u.createGain().gain.automationRate) return n(u, s);
                        Zn(c, s); var l = null === s.curve || s.curve instanceof Float32Array ? s.curve : new Float32Array(s.curve); if (null !== l && l.length < 2) throw e();
                        Pn(c, { curve: l }, "curve"), Pn(c, s, "oversample"); var f = null,
                            h = !1;
                        a(c, "curve", (function(t) { return function() { return t.call(c) } }), (function(e) { return function(n) { return e.call(c, n), h && (r(n) && null === f ? f = t(u, c) : r(n) || null === f || (f(), f = null)), n } })); return o(c, (function() { h = !0, r(c.curve) && (f = t(u, c)) }), (function() { h = !1, null !== f && (f(), f = null) })) } }(Si, rn, Ci, Lr, Ho, ko, Vr),
                Ti = function(t, e, n, r, o, i, a, s, c, l) { return function(f, h) { var p = h.coneInnerAngle,
                            d = h.coneOuterAngle,
                            v = h.coneOuterGain,
                            m = h.distanceModel,
                            g = h.maxDistance,
                            y = h.orientationX,
                            b = h.orientationY,
                            _ = h.orientationZ,
                            w = h.panningModel,
                            k = h.positionX,
                            x = h.positionY,
                            O = h.positionZ,
                            S = h.refDistance,
                            C = h.rolloffFactor,
                            A = (0, Hn.Z)(h, nr),
                            T = f.createPanner(); if (A.channelCount > 2) throw a(); if ("max" === A.channelCountMode) throw a();
                        Zn(T, A); var E = { channelCount: 1, channelCountMode: "explicit", channelInterpretation: "discrete" },
                            P = n(f, or(or({}, E), {}, { channelInterpretation: "speakers", numberOfInputs: 6 })),
                            Z = r(f, or(or({}, A), {}, { gain: 1 })),
                            R = r(f, or(or({}, E), {}, { gain: 1 })),
                            D = r(f, or(or({}, E), {}, { gain: 0 })),
                            j = r(f, or(or({}, E), {}, { gain: 0 })),
                            M = r(f, or(or({}, E), {}, { gain: 0 })),
                            I = r(f, or(or({}, E), {}, { gain: 0 })),
                            N = r(f, or(or({}, E), {}, { gain: 0 })),
                            B = o(f, 256, 6, 1),
                            F = i(f, or(or({}, E), {}, { curve: new Float32Array([1, 1]), oversample: "none" })),
                            L = [y, b, _],
                            V = [k, x, O],
                            z = new Float32Array(1);
                        B.onaudioprocess = function(t) { var e = t.inputBuffer,
                                n = [c(e, z, 0), c(e, z, 1), c(e, z, 2)];
                            n.some((function(t, e) { return t !== L[e] })) && (T.setOrientation.apply(T, n), L = n); var r = [c(e, z, 3), c(e, z, 4), c(e, z, 5)];
                            r.some((function(t, e) { return t !== V[e] })) && (T.setPosition.apply(T, r), V = r) }, Object.defineProperty(D.gain, "defaultValue", { get: function() { return 0 } }), Object.defineProperty(j.gain, "defaultValue", { get: function() { return 0 } }), Object.defineProperty(M.gain, "defaultValue", { get: function() { return 0 } }), Object.defineProperty(I.gain, "defaultValue", { get: function() { return 0 } }), Object.defineProperty(N.gain, "defaultValue", { get: function() { return 0 } }); var U = {get bufferSize() {}, get channelCount() { return T.channelCount }, set channelCount(t) { if (t > 2) throw a();
                                Z.channelCount = t, T.channelCount = t }, get channelCountMode() { return T.channelCountMode }, set channelCountMode(t) { if ("max" === t) throw a();
                                Z.channelCountMode = t, T.channelCountMode = t }, get channelInterpretation() { return T.channelInterpretation }, set channelInterpretation(t) { Z.channelInterpretation = t, T.channelInterpretation = t }, get coneInnerAngle() { return T.coneInnerAngle }, set coneInnerAngle(t) { T.coneInnerAngle = t }, get coneOuterAngle() { return T.coneOuterAngle }, set coneOuterAngle(t) { T.coneOuterAngle = t }, get coneOuterGain() { return T.coneOuterGain }, set coneOuterGain(t) { if (t < 0 || t > 1) throw e();
                                T.coneOuterGain = t }, get context() { return T.context }, get distanceModel() { return T.distanceModel }, set distanceModel(t) { T.distanceModel = t }, get inputs() { return [Z] }, get maxDistance() { return T.maxDistance }, set maxDistance(t) { if (t < 0) throw new RangeError;
                                T.maxDistance = t }, get numberOfInputs() { return T.numberOfInputs }, get numberOfOutputs() { return T.numberOfOutputs }, get orientationX() { return R.gain }, get orientationY() { return D.gain }, get orientationZ() { return j.gain }, get panningModel() { return T.panningModel }, set panningModel(t) { T.panningModel = t }, get positionX() { return M.gain }, get positionY() { return I.gain }, get positionZ() { return N.gain }, get refDistance() { return T.refDistance }, set refDistance(t) { if (t < 0) throw new RangeError;
                                T.refDistance = t }, get rolloffFactor() { return T.rolloffFactor }, set rolloffFactor(t) { if (t < 0) throw new RangeError;
                                T.rolloffFactor = t }, addEventListener: function() { return Z.addEventListener(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) }, dispatchEvent: function() { return Z.dispatchEvent(arguments.length <= 0 ? void 0 : arguments[0]) }, removeEventListener: function() { return Z.removeEventListener(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) } };
                        p !== U.coneInnerAngle && (U.coneInnerAngle = p), d !== U.coneOuterAngle && (U.coneOuterAngle = d), v !== U.coneOuterGain && (U.coneOuterGain = v), m !== U.distanceModel && (U.distanceModel = m), g !== U.maxDistance && (U.maxDistance = g), y !== U.orientationX.value && (U.orientationX.value = y), b !== U.orientationY.value && (U.orientationY.value = b), _ !== U.orientationZ.value && (U.orientationZ.value = _), w !== U.panningModel && (U.panningModel = w), k !== U.positionX.value && (U.positionX.value = k), x !== U.positionY.value && (U.positionY.value = x), O !== U.positionZ.value && (U.positionZ.value = O), S !== U.refDistance && (U.refDistance = S), C !== U.rolloffFactor && (U.rolloffFactor = C), 1 === L[0] && 0 === L[1] && 0 === L[2] || T.setOrientation.apply(T, (0, u.Z)(L)), 0 === V[0] && 0 === V[1] && 0 === V[2] || T.setPosition.apply(T, (0, u.Z)(V)); return l(Yn(U, T), (function() { Z.connect(T), t(Z, F, 0, 0), F.connect(R).connect(P, 0, 0), F.connect(D).connect(P, 0, 1), F.connect(j).connect(P, 0, 2), F.connect(M).connect(P, 0, 3), F.connect(I).connect(P, 0, 4), F.connect(N).connect(P, 0, 5), P.connect(B).connect(f.destination) }), (function() { Z.disconnect(T), s(Z, F, 0, 0), F.disconnect(R), R.disconnect(P), F.disconnect(D), D.disconnect(P), F.disconnect(j), j.disconnect(P), F.disconnect(M), M.disconnect(P), F.disconnect(I), I.disconnect(P), F.disconnect(N), N.disconnect(P), P.disconnect(B), B.disconnect(f.destination) })) } }(Zt, rn, Xo, Kn, ir, Ai, hr, Nt, Fr, Ho),
                Ei = function(t) { return function(e, n) { var r = e.createPanner(); return void 0 === r.orientationX ? t(e, n) : (Zn(r, n), Dn(r, n, "orientationX"), Dn(r, n, "orientationY"), Dn(r, n, "orientationZ"), Dn(r, n, "positionX"), Dn(r, n, "positionY"), Dn(r, n, "positionZ"), Pn(r, n, "coneInnerAngle"), Pn(r, n, "coneOuterAngle"), Pn(r, n, "coneOuterGain"), Pn(r, n, "distanceModel"), Pn(r, n, "maxDistance"), Pn(r, n, "panningModel"), Pn(r, n, "refDistance"), Pn(r, n, "rolloffFactor"), r) } }(Ti),
                Pi = function(t, e, n, r, o, i, a, u, s, c) { return function() { var l = new WeakMap,
                            f = null,
                            h = function() { var h = (0, d.Z)(m().mark((function h(p, v) { var g, y, b, _, w, k, x; return m().wrap((function(h) { for (;;) switch (h.prev = h.next) {
                                            case 0:
                                                if (g = null, y = i(p), b = { channelCount: y.channelCount, channelCountMode: y.channelCountMode, channelInterpretation: y.channelInterpretation }, _ = Cr(Cr({}, b), {}, { coneInnerAngle: y.coneInnerAngle, coneOuterAngle: y.coneOuterAngle, coneOuterGain: y.coneOuterGain, distanceModel: y.distanceModel, maxDistance: y.maxDistance, panningModel: y.panningModel, refDistance: y.refDistance, rolloffFactor: y.rolloffFactor }), w = K(y, v), "bufferSize" in y ? g = r(v, Cr(Cr({}, b), {}, { gain: 1 })) : w || (k = Cr(Cr({}, _), {}, { orientationX: y.orientationX.value, orientationY: y.orientationY.value, orientationZ: y.orientationZ.value, positionX: y.positionX.value, positionY: y.positionY.value, positionZ: y.positionZ.value }), y = o(v, k)), l.set(v, null === g ? y : g), null === g) { h.next = 12; break } return h.delegateYield(m().mark((function t() { var i, l, h, y, w, k, x, O, S, C, A, T, E, P; return m().wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                                            case 0:
                                                                if (null !== f) { t.next = 7; break } if (null !== a) { t.next = 3; break } throw new Error("Missing the native OfflineAudioContext constructor.");
                                                            case 3:
                                                                i = new a(6, p.context.length, v.sampleRate), (l = e(i, { channelCount: 1, channelCountMode: "explicit", channelInterpretation: "speakers", numberOfInputs: 6 })).connect(i.destination), f = (0, d.Z)(m().mark((function t() { var e, r; return m().wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                                                            case 0:
                                                                                return t.next = 2, Promise.all([p.orientationX, p.orientationY, p.orientationZ, p.positionX, p.positionY, p.positionZ].map(function() { var t = (0, d.Z)(m().mark((function t(e, r) { var o; return m().wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                                                                                case 0:
                                                                                                    return o = n(i, { channelCount: 1, channelCountMode: "explicit", channelInterpretation: "discrete", offset: 0 === r ? 1 : 0 }), t.next = 3, u(i, e, o.offset);
                                                                                                case 3:
                                                                                                    return t.abrupt("return", o);
                                                                                                case 4:
                                                                                                case "end":
                                                                                                    return t.stop() } }), t) }))); return function(e, n) { return t.apply(this, arguments) } }()));
                                                                            case 2:
                                                                                for (e = t.sent, r = 0; r < 6; r += 1) e[r].connect(l, 0, r), e[r].start(0); return t.abrupt("return", c(i));
                                                                            case 5:
                                                                            case "end":
                                                                                return t.stop() } }), t) })))();
                                                            case 7:
                                                                return t.next = 9, f;
                                                            case 9:
                                                                return h = t.sent, y = r(v, Cr(Cr({}, b), {}, { gain: 1 })), t.next = 13, s(p, v, y);
                                                            case 13:
                                                                for (w = [], k = 0; k < h.numberOfChannels; k += 1) w.push(h.getChannelData(k)); for (x = [w[0][0], w[1][0], w[2][0]], O = [w[3][0], w[4][0], w[5][0]], S = r(v, Cr(Cr({}, b), {}, { gain: 1 })), C = o(v, Cr(Cr({}, _), {}, { orientationX: x[0], orientationY: x[1], orientationZ: x[2], positionX: O[0], positionY: O[1], positionZ: O[2] })), y.connect(S).connect(C.inputs[0]), C.connect(g), A = 128; A < h.length; A += 128) T = [w[0][A], w[1][A], w[2][A]], E = [w[3][A], w[4][A], w[5][A]], (T.some((function(t, e) { return t !== x[e] })) || E.some((function(t, e) { return t !== O[e] }))) && (x = T, O = E, P = A / v.sampleRate, S.gain.setValueAtTime(0, P), S = r(v, Cr(Cr({}, b), {}, { gain: 0 })), C = o(v, Cr(Cr({}, _), {}, { orientationX: x[0], orientationY: x[1], orientationZ: x[2], positionX: O[0], positionY: O[1], positionZ: O[2] })), S.gain.setValueAtTime(1, P), y.connect(S).connect(C.inputs[0]), C.connect(g)); return t.abrupt("return", { v: g });
                                                            case 23:
                                                            case "end":
                                                                return t.stop() } }), t) }))(), "t0", 9);
                                            case 9:
                                                if ("object" != typeof(x = h.t0)) { h.next = 12; break } return h.abrupt("return", x.v);
                                            case 12:
                                                if (w) { h.next = 27; break } return h.next = 15, u(v, p.orientationX, y.orientationX);
                                            case 15:
                                                return h.next = 17, u(v, p.orientationY, y.orientationY);
                                            case 17:
                                                return h.next = 19, u(v, p.orientationZ, y.orientationZ);
                                            case 19:
                                                return h.next = 21, u(v, p.positionX, y.positionX);
                                            case 21:
                                                return h.next = 23, u(v, p.positionY, y.positionY);
                                            case 23:
                                                return h.next = 25, u(v, p.positionZ, y.positionZ);
                                            case 25:
                                                h.next = 39; break;
                                            case 27:
                                                return h.next = 29, t(v, p.orientationX, y.orientationX);
                                            case 29:
                                                return h.next = 31, t(v, p.orientationY, y.orientationY);
                                            case 31:
                                                return h.next = 33, t(v, p.orientationZ, y.orientationZ);
                                            case 33:
                                                return h.next = 35, t(v, p.positionX, y.positionX);
                                            case 35:
                                                return h.next = 37, t(v, p.positionY, y.positionY);
                                            case 37:
                                                return h.next = 39, t(v, p.positionZ, y.positionZ);
                                            case 39:
                                                if (!Pt(y)) { h.next = 44; break } return h.next = 42, s(p, v, y.inputs[0]);
                                            case 42:
                                                h.next = 46; break;
                                            case 44:
                                                return h.next = 46, s(p, v, y);
                                            case 46:
                                                return h.abrupt("return", y);
                                            case 47:
                                            case "end":
                                                return h.stop() } }), h) }))); return function(t, e) { return h.apply(this, arguments) } }(); return { render: function(t, e) { var n = l.get(e); return void 0 !== n ? Promise.resolve(n) : h(t, e) } } } }(No, Xo, ei, Kn, Ei, Bt, yo, Fo, vo, vi),
                Zi = function(t, e, n, r, o, i, a) { return function(t) {
                        (0, G.Z)(s, t); var u = xr(s);

                        function s(t, c) { var l;
                            (0, w.Z)(this, s); var f = o(t),
                                h = kr(kr({}, Or), c),
                                p = n(f, h),
                                d = i(f),
                                v = d ? r() : null; return (l = u.call(this, t, !1, p, v))._nativePannerNode = p, l._orientationX = e((0, at.Z)(l), d, p.orientationX, st, ut), l._orientationY = e((0, at.Z)(l), d, p.orientationY, st, ut), l._orientationZ = e((0, at.Z)(l), d, p.orientationZ, st, ut), l._positionX = e((0, at.Z)(l), d, p.positionX, st, ut), l._positionY = e((0, at.Z)(l), d, p.positionY, st, ut), l._positionZ = e((0, at.Z)(l), d, p.positionZ, st, ut), a((0, at.Z)(l), 1), l } return (0, _.Z)(s, [{ key: "coneInnerAngle", get: function() { return this._nativePannerNode.coneInnerAngle }, set: function(t) { this._nativePannerNode.coneInnerAngle = t } }, { key: "coneOuterAngle", get: function() { return this._nativePannerNode.coneOuterAngle }, set: function(t) { this._nativePannerNode.coneOuterAngle = t } }, { key: "coneOuterGain", get: function() { return this._nativePannerNode.coneOuterGain }, set: function(t) { this._nativePannerNode.coneOuterGain = t } }, { key: "distanceModel", get: function() { return this._nativePannerNode.distanceModel }, set: function(t) { this._nativePannerNode.distanceModel = t } }, { key: "maxDistance", get: function() { return this._nativePannerNode.maxDistance }, set: function(t) { this._nativePannerNode.maxDistance = t } }, { key: "orientationX", get: function() { return this._orientationX } }, { key: "orientationY", get: function() { return this._orientationY } }, { key: "orientationZ", get: function() { return this._orientationZ } }, { key: "panningModel", get: function() { return this._nativePannerNode.panningModel }, set: function(t) { this._nativePannerNode.panningModel = t } }, { key: "positionX", get: function() { return this._positionX } }, { key: "positionY", get: function() { return this._positionY } }, { key: "positionZ", get: function() { return this._positionZ } }, { key: "refDistance", get: function() { return this._nativePannerNode.refDistance }, set: function(t) { this._nativePannerNode.refDistance = t } }, { key: "rolloffFactor", get: function() { return this._nativePannerNode.rolloffFactor }, set: function(t) { this._nativePannerNode.rolloffFactor = t } }]), s }(t) }(Ao, Vo, Ei, Pi, go, bo, Wo),
                Ri = function(t) { return function(e, n) { var r = n.disableNormalization,
                            o = n.imag,
                            i = n.real,
                            a = o instanceof Float32Array ? o : new Float32Array(o),
                            u = i instanceof Float32Array ? i : new Float32Array(i),
                            s = e.createPeriodicWave(u, a, { disableNormalization: r }); if (Array.from(o).length < 2) throw t(); return s } }(et),
                Di = function(t, e, n, r) { return function(o) {
                        function i(o, a) {
                            (0, w.Z)(this, i); var u = e(o),
                                s = r(Tr(Tr({}, Er), a)),
                                c = t(u, s); return n.add(c), c } return (0, _.Z)(i, null, [{ key: o, value: function(t) { return null !== t && "object" == typeof t && Object.getPrototypeOf(t) === i.prototype || n.has(t) } }]), i }(Symbol.hasInstance) }(Ri, go, new WeakSet, (function(t) { var e = t.imag,
                        n = t.real; return Hr(Hr({}, t), {}, void 0 === e ? void 0 === n ? { imag: [0, 0], real: [0, 0] } : { imag: Array.from(n, (function() { return 0 })), real: n } : void 0 === n ? { imag: e, real: Array.from(e, (function() { return 0 })) } : { imag: e, real: n }) })),
                ji = function(t, e, n, r, o, i) { var a = 16385,
                        u = new Float32Array([1, 1]),
                        s = Math.PI / 2,
                        c = { channelCount: 1, channelCountMode: "explicit", channelInterpretation: "discrete" },
                        l = sr(sr({}, c), {}, { oversample: "none" }),
                        f = function(t, i, f, h, p) { if (1 === i) return function(t, e, o, i) { for (var f = new Float32Array(a), h = new Float32Array(a), p = 0; p < a; p += 1) { var d = p / 16384 * s;
                                    f[p] = Math.cos(d), h[p] = Math.sin(d) } var v = n(t, sr(sr({}, c), {}, { gain: 0 })),
                                    m = r(t, sr(sr({}, l), {}, { curve: f })),
                                    g = r(t, sr(sr({}, l), {}, { curve: u })),
                                    y = n(t, sr(sr({}, c), {}, { gain: 0 })),
                                    b = r(t, sr(sr({}, l), {}, { curve: h })); return { connectGraph: function() { e.connect(v), e.connect(void 0 === g.inputs ? g : g.inputs[0]), e.connect(y), g.connect(o), o.connect(void 0 === m.inputs ? m : m.inputs[0]), o.connect(void 0 === b.inputs ? b : b.inputs[0]), m.connect(v.gain), b.connect(y.gain), v.connect(i, 0, 0), y.connect(i, 0, 1) }, disconnectGraph: function() { e.disconnect(v), e.disconnect(void 0 === g.inputs ? g : g.inputs[0]), e.disconnect(y), g.disconnect(o), o.disconnect(void 0 === m.inputs ? m : m.inputs[0]), o.disconnect(void 0 === b.inputs ? b : b.inputs[0]), m.disconnect(v.gain), b.disconnect(y.gain), v.disconnect(i, 0, 0), y.disconnect(i, 0, 1) } } }(t, f, h, p); if (2 === i) return function(t, o, i, f) { for (var h = new Float32Array(a), p = new Float32Array(a), d = new Float32Array(a), v = new Float32Array(a), m = Math.floor(8192.5), g = 0; g < a; g += 1)
                                    if (g > m) { var y = (g - m) / (16384 - m) * s;
                                        h[g] = Math.cos(y), p[g] = Math.sin(y), d[g] = 0, v[g] = 1 } else { var b = g / (16384 - m) * s;
                                        h[g] = 1, p[g] = 0, d[g] = Math.cos(b), v[g] = Math.sin(b) }
                                var _ = e(t, { channelCount: 2, channelCountMode: "explicit", channelInterpretation: "discrete", numberOfOutputs: 2 }),
                                    w = n(t, sr(sr({}, c), {}, { gain: 0 })),
                                    k = r(t, sr(sr({}, l), {}, { curve: h })),
                                    x = n(t, sr(sr({}, c), {}, { gain: 0 })),
                                    O = r(t, sr(sr({}, l), {}, { curve: p })),
                                    S = r(t, sr(sr({}, l), {}, { curve: u })),
                                    C = n(t, sr(sr({}, c), {}, { gain: 0 })),
                                    A = r(t, sr(sr({}, l), {}, { curve: d })),
                                    T = n(t, sr(sr({}, c), {}, { gain: 0 })),
                                    E = r(t, sr(sr({}, l), {}, { curve: v })); return { connectGraph: function() { o.connect(_), o.connect(void 0 === S.inputs ? S : S.inputs[0]), _.connect(w, 0), _.connect(x, 0), _.connect(C, 1), _.connect(T, 1), S.connect(i), i.connect(void 0 === k.inputs ? k : k.inputs[0]), i.connect(void 0 === O.inputs ? O : O.inputs[0]), i.connect(void 0 === A.inputs ? A : A.inputs[0]), i.connect(void 0 === E.inputs ? E : E.inputs[0]), k.connect(w.gain), O.connect(x.gain), A.connect(C.gain), E.connect(T.gain), w.connect(f, 0, 0), C.connect(f, 0, 0), x.connect(f, 0, 1), T.connect(f, 0, 1) }, disconnectGraph: function() { o.disconnect(_), o.disconnect(void 0 === S.inputs ? S : S.inputs[0]), _.disconnect(w, 0), _.disconnect(x, 0), _.disconnect(C, 1), _.disconnect(T, 1), S.disconnect(i), i.disconnect(void 0 === k.inputs ? k : k.inputs[0]), i.disconnect(void 0 === O.inputs ? O : O.inputs[0]), i.disconnect(void 0 === A.inputs ? A : A.inputs[0]), i.disconnect(void 0 === E.inputs ? E : E.inputs[0]), k.disconnect(w.gain), O.disconnect(x.gain), A.disconnect(C.gain), E.disconnect(T.gain), w.disconnect(f, 0, 0), C.disconnect(f, 0, 0), x.disconnect(f, 0, 1), T.disconnect(f, 0, 1) } } }(t, f, h, p); throw o() }; return function(e, r) { var a = r.channelCount,
                            u = r.channelCountMode,
                            s = r.pan,
                            c = (0, Hn.Z)(r, ar); if ("max" === u) throw o(); var l = t(e, sr(sr({}, c), {}, { channelCount: 1, channelCountMode: u, numberOfInputs: 2 })),
                            h = n(e, sr(sr({}, c), {}, { channelCount: a, channelCountMode: u, gain: 1 })),
                            p = n(e, { channelCount: 1, channelCountMode: "explicit", channelInterpretation: "discrete", gain: s }),
                            d = f(e, a, h, p, l),
                            v = d.connectGraph,
                            m = d.disconnectGraph;
                        Object.defineProperty(p.gain, "defaultValue", { get: function() { return 0 } }), Object.defineProperty(p.gain, "maxValue", { get: function() { return 1 } }), Object.defineProperty(p.gain, "minValue", { get: function() { return -1 } }); var g = {get bufferSize() {}, get channelCount() { return h.channelCount }, set channelCount(t) { if (h.channelCount !== t) { y && m(); var n = f(e, t, h, p, l);
                                        v = n.connectGraph, m = n.disconnectGraph, y && v() }
                                    h.channelCount = t }, get channelCountMode() { return h.channelCountMode }, set channelCountMode(t) { if ("clamped-max" === t || "max" === t) throw o();
                                    h.channelCountMode = t }, get channelInterpretation() { return h.channelInterpretation }, set channelInterpretation(t) { h.channelInterpretation = t }, get context() { return h.context }, get inputs() { return [h] }, get numberOfInputs() { return h.numberOfInputs }, get numberOfOutputs() { return h.numberOfOutputs }, get pan() { return p.gain }, addEventListener: function() { return h.addEventListener(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) }, dispatchEvent: function() { return h.dispatchEvent(arguments.length <= 0 ? void 0 : arguments[0]) }, removeEventListener: function() { return h.removeEventListener(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) } },
                            y = !1; return i(Yn(g, l), (function() { v(), y = !0 }), (function() { m(), y = !1 })) } }(Xo, Gn, Kn, Ai, hr, Ho),
                Mi = function(t, e) { return function(n, r) { var o = r.channelCountMode; if ("clamped-max" === o) throw e(); if (void 0 === n.createStereoPanner) return t(n, r); var i = n.createStereoPanner(); return Zn(i, r), Dn(i, r, "pan"), Object.defineProperty(i, "channelCountMode", { get: function() { return o }, set: function(t) { if (t !== o) throw e() } }), i } }(ji, hr),
                Ii = function(t, e, n, r, o) { return function() { var i = new WeakMap,
                            a = function() { var a = (0, d.Z)(m().mark((function a(u, s) { var c, l, f; return m().wrap((function(a) { for (;;) switch (a.prev = a.next) {
                                            case 0:
                                                if (c = n(u), (l = K(c, s)) || (f = { channelCount: c.channelCount, channelCountMode: c.channelCountMode, channelInterpretation: c.channelInterpretation, pan: c.pan.value }, c = e(s, f)), i.set(s, c), l) { a.next = 9; break } return a.next = 7, r(s, u.pan, c.pan);
                                            case 7:
                                                a.next = 11; break;
                                            case 9:
                                                return a.next = 11, t(s, u.pan, c.pan);
                                            case 11:
                                                if (!Pt(c)) { a.next = 16; break } return a.next = 14, o(u, s, c.inputs[0]);
                                            case 14:
                                                a.next = 18; break;
                                            case 16:
                                                return a.next = 18, o(u, s, c);
                                            case 18:
                                                return a.abrupt("return", c);
                                            case 19:
                                            case "end":
                                                return a.stop() } }), a) }))); return function(t, e) { return a.apply(this, arguments) } }(); return { render: function(t, e) { var n = i.get(e); return void 0 !== n ? Promise.resolve(n) : a(t, e) } } } }(No, Mi, Bt, Fo, vo),
                Ni = function(t, e, n, r, o, i) { return function(t) {
                        (0, G.Z)(u, t); var a = Rr(u);

                        function u(t, s) { var c;
                            (0, w.Z)(this, u); var l = o(t),
                                f = Zr(Zr({}, Dr), s),
                                h = n(l, f),
                                p = i(l),
                                d = p ? r() : null; return (c = a.call(this, t, !1, h, d))._pan = e((0, at.Z)(c), p, h.pan), c } return (0, _.Z)(u, [{ key: "pan", get: function() { return this._pan } }]), u }(t) }(Ao, Vo, Mi, Ii, go, bo),
                Bi = function(t, e, n) { return function() { var r = new WeakMap,
                            o = function() { var o = (0, d.Z)(m().mark((function o(i, a) { var u, s; return m().wrap((function(o) { for (;;) switch (o.prev = o.next) {
                                            case 0:
                                                if (u = e(i), K(u, a) || (s = { channelCount: u.channelCount, channelCountMode: u.channelCountMode, channelInterpretation: u.channelInterpretation, curve: u.curve, oversample: u.oversample }, u = t(a, s)), r.set(a, u), !Pt(u)) { o.next = 9; break } return o.next = 7, n(i, a, u.inputs[0]);
                                            case 7:
                                                o.next = 11; break;
                                            case 9:
                                                return o.next = 11, n(i, a, u);
                                            case 11:
                                                return o.abrupt("return", u);
                                            case 12:
                                            case "end":
                                                return o.stop() } }), o) }))); return function(t, e) { return o.apply(this, arguments) } }(); return { render: function(t, e) { var n = r.get(e); return void 0 !== n ? Promise.resolve(n) : o(t, e) } } } }(Ai, Bt, vo),
                Fi = function(t, e, n, r, o, i, a) { return function(t) {
                        (0, G.Z)(s, t); var u = Nr(s);

                        function s(t, e) { var c;
                            (0, w.Z)(this, s); var l = o(t),
                                f = Ir(Ir({}, Br), e),
                                h = n(l, f),
                                p = i(l) ? r() : null; return (c = u.call(this, t, !0, h, p))._isCurveNullified = !1, c._nativeWaveShaperNode = h, a((0, at.Z)(c), 1), c } return (0, _.Z)(s, [{ key: "curve", get: function() { return this._isCurveNullified ? null : this._nativeWaveShaperNode.curve }, set: function(t) { if (null === t) this._isCurveNullified = !0, this._nativeWaveShaperNode.curve = new Float32Array([0, 0]);
                                else { if (t.length < 2) throw e();
                                    this._isCurveNullified = !1, this._nativeWaveShaperNode.curve = t } } }, { key: "oversample", get: function() { return this._nativeWaveShaperNode.oversample }, set: function(t) { this._nativeWaveShaperNode.oversample = t } }]), s }(t) }(Ao, rn, Ai, Bi, go, bo, Wo),
                Li = function(t) { return null !== t && t.isSecureContext }(fo),
                Vi = function(t) { return function(e, n, r) { Object.defineProperties(t, { currentFrame: { configurable: !0, get: function() { return Math.round(e * n) } }, currentTime: { configurable: !0, get: function() { return e } } }); try { return r() } finally { null !== t && (delete t.currentFrame, delete t.currentTime) } } }(fo),
                zi = new WeakMap,
                Ui = function(t, e) { return function(n) { var r = t.get(n); if (void 0 !== r) return r; if (null === e) throw new Error("Missing the native OfflineAudioContext constructor."); return r = new e(1, 1, 44100), t.set(n, r), r } }(zi, yo),
                qi = Li ? function(t, e, n, r, o, i, a, u, s, c, l, f, h) { var p = 0; return function(d, v) { var m = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { credentials: "omit" },
                            g = l.get(d); if (void 0 !== g && g.has(v)) return Promise.resolve(); var y = c.get(d); if (void 0 !== y) { var k = y.get(v); if (void 0 !== k) return k } var x = i(d),
                            O = void 0 === x.audioWorklet ? o(v).then((function(t) { var e = (0, b.Z)(t, 2),
                                    r = e[0],
                                    o = e[1],
                                    i = j(r, o),
                                    a = (0, b.Z)(i, 2),
                                    u = a[0],
                                    s = a[1],
                                    c = "".concat(u, ";((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{").concat(s, "\n})})(window,'_AWGS')"); return n(c) })).then((function() { var t = h._AWGS.pop(); if (void 0 === t) throw new SyntaxError;
                                r(x.currentTime, x.sampleRate, (function() { return t((0, _.Z)((function t() {
                                        (0, w.Z)(this, t) })), void 0, (function(t, n) { if ("" === t.trim()) throw e(); var r = P.get(x); if (void 0 !== r) { if (r.has(t)) throw e();
                                            I(n), M(n.parameterDescriptors), r.set(t, n) } else I(n), M(n.parameterDescriptors), P.set(x, new Map([
                                            [t, n]
                                        ])) }), x.sampleRate, void 0, void 0) })) })) : Promise.all([o(v), Promise.resolve(t(f, f))]).then((function(t) { var e = (0, b.Z)(t, 2),
                                    n = (0, b.Z)(e[0], 2),
                                    r = n[0],
                                    o = n[1],
                                    i = e[1],
                                    c = p + 1;
                                p = c; var l = j(r, o),
                                    f = (0, b.Z)(l, 2),
                                    h = f[0],
                                    d = f[1],
                                    v = i ? "AudioWorkletProcessor" : "class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}",
                                    g = i ? "" : "__c = (a) => a.forEach(e=>this.__b.add(e.buffer));",
                                    y = i ? "" : "i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));",
                                    _ = "".concat(h, ";((AudioWorkletProcessor,registerProcessor)=>{").concat(d, "\n})(").concat(v, ",(n,p)=>registerProcessor(n,class extends p{").concat(g, "process(i,o,p){").concat(y, "return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac").concat(c, "',class extends AudioWorkletProcessor{process(){return !1}})"),
                                    w = new Blob([_], { type: "application/javascript; charset=utf-8" }),
                                    k = URL.createObjectURL(w); return x.audioWorklet.addModule(k, m).then((function() { if (u(x)) return x; var t = a(x); return t.audioWorklet.addModule(k, m).then((function() { return t })) })).then((function(t) { if (null === s) throw new SyntaxError; try { new s(t, "__sac".concat(c)) } catch (e) { throw new SyntaxError } })).finally((function() { return URL.revokeObjectURL(k) })) })); return void 0 === y ? c.set(d, new Map([
                            [v, O]
                        ])) : y.set(v, O), O.then((function() { var t = l.get(d);
                            void 0 === t ? l.set(d, new Set([v])) : t.add(v) })).finally((function() { var t = c.get(d);
                            void 0 !== t && t.delete(v) })), O } }(lo, hr, function(t) { return function(e) { return new Promise((function(n, r) { if (null !== t) { var o = t.document.head; if (null === o) r(new SyntaxError);
                                else { var i = t.document.createElement("script"),
                                        a = new Blob([e], { type: "application/javascript" }),
                                        u = URL.createObjectURL(a),
                                        s = t.onerror,
                                        c = function() { t.onerror = s, URL.revokeObjectURL(u) };
                                    t.onerror = function(e, n, o, i, a) { return n === u || n === t.location.href && 1 === o && 1 === i ? (c(), r(a), !1) : null !== s ? s(e, n, o, i, a) : void 0 }, i.onerror = function() { c(), r(new SyntaxError) }, i.onload = function() { c(), n() }, i.src = u, i.type = "module", o.appendChild(i) } } else r(new SyntaxError) })) } }(fo), Vi, function(t) { return function() { var e = (0, d.Z)(m().mark((function e(n) { var r; return m().wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, fetch(n);
                                    case 3:
                                        if (!(r = e.sent).ok) { e.next = 10; break } return e.next = 7, r.text();
                                    case 7:
                                        return e.t0 = e.sent, e.t1 = r.url, e.abrupt("return", [e.t0, e.t1]);
                                    case 10:
                                        e.next = 14; break;
                                    case 12:
                                        e.prev = 12, e.t2 = e.catch(0);
                                    case 14:
                                        throw t();
                                    case 15:
                                    case "end":
                                        return e.stop() } }), e, null, [
                                [0, 12]
                            ]) }))); return function(t) { return e.apply(this, arguments) } }() }((function() { return new DOMException("", "AbortError") })), go, Ui, bo, Co, new WeakMap, new WeakMap, function(t, e) { return (0, d.Z)(m().mark((function n() { var r, o, i, a, u, s, c; return m().wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (null !== t) { n.next = 2; break } return n.abrupt("return", !0);
                                case 2:
                                    if (null !== e) { n.next = 4; break } return n.abrupt("return", !1);
                                case 4:
                                    return r = new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'], { type: "application/javascript; charset=utf-8" }), o = new e(1, 128, 44100), i = URL.createObjectURL(r), a = !1, u = !1, n.prev = 9, n.next = 12, o.audioWorklet.addModule(i);
                                case 12:
                                    return s = new t(o, "a", { numberOfOutputs: 0 }), c = o.createOscillator(), s.port.onmessage = function() { return a = !0 }, s.onprocessorerror = function() { return u = !0 }, c.connect(s), c.start(0), n.next = 20, o.startRendering();
                                case 20:
                                    n.next = 24; break;
                                case 22:
                                    n.prev = 22, n.t0 = n.catch(9);
                                case 24:
                                    return n.prev = 24, URL.revokeObjectURL(i), n.finish(24);
                                case 27:
                                    return n.abrupt("return", a && !u);
                                case 28:
                                case "end":
                                    return n.stop() } }), n, null, [
                            [9, 22, 24, 27]
                        ]) }))) }(Co, yo), fo) : void 0,
                Wi = function(t, e) { return function(n) { return t(n) || e(n) } }(xo, bo),
                Gi = function(t, e, n, r, o, i, a, u, s, c, l) { return function(f, h) { var p = a(f) ? f : i(f); if (o.has(h)) { var v = n(); return Promise.reject(v) } try { o.add(h) } catch (g) {} return e(s, (function() { return s(p) })) ? p.decodeAudioData(h).then((function(n) { return Ve(h).catch((function() {})), e(u, (function() { return u(n) })) || l(n), t.add(n), n })) : new Promise((function(e, n) { var o = function() { var t = (0, d.Z)(m().mark((function t() { return m().wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.prev = 0, t.next = 3, Ve(h);
                                                case 3:
                                                    t.next = 7; break;
                                                case 5:
                                                    t.prev = 5, t.t0 = t.catch(0);
                                                case 7:
                                                case "end":
                                                    return t.stop() } }), t, null, [
                                            [0, 5]
                                        ]) }))); return function() { return t.apply(this, arguments) } }(),
                                i = function(t) { n(t), o() }; try { p.decodeAudioData(h, (function(n) { "function" != typeof n.copyFromChannel && (c(n), nt(n)), t.add(n), o().then((function() { return e(n) })) }), (function(t) { i(null === t ? r() : t) })) } catch (v) { i(v) } })) } }(Eo, lo, (function() { return new DOMException("", "DataCloneError") }), (function() { return new DOMException("", "EncodingError") }), new WeakSet, go, Wi, tt, xn, Ro, Do),
                Hi = function(t, e, n, r, o, i, a, u, s, c, l, f, h, p, d, v, m, g, y, b) { return function(d) {
                        (0, G.Z)(x, d); var k = _e(x);

                        function x(e, n) { var r; return (0, w.Z)(this, x), (r = k.call(this, e, n))._nativeContext = e, r._audioWorklet = void 0 === t ? void 0 : { addModule: function(e, n) { return t((0, at.Z)(r), e, n) } }, r } return (0, _.Z)(x, [{ key: "audioWorklet", get: function() { return this._audioWorklet } }, { key: "createAnalyser", value: function() { return new e(this) } }, { key: "createBiquadFilter", value: function() { return new o(this) } }, { key: "createBuffer", value: function(t, e, r) { return new n({ length: e, numberOfChannels: t, sampleRate: r }) } }, { key: "createBufferSource", value: function() { return new r(this) } }, { key: "createChannelMerger", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6; return new i(this, { numberOfInputs: t }) } }, { key: "createChannelSplitter", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6; return new a(this, { numberOfOutputs: t }) } }, { key: "createConstantSource", value: function() { return new u(this) } }, { key: "createConvolver", value: function() { return new s(this) } }, { key: "createDelay", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1; return new l(this, { maxDelayTime: t }) } }, { key: "createDynamicsCompressor", value: function() { return new f(this) } }, { key: "createGain", value: function() { return new h(this) } }, { key: "createIIRFilter", value: function(t, e) { return new p(this, { feedback: e, feedforward: t }) } }, { key: "createOscillator", value: function() { return new v(this) } }, { key: "createPanner", value: function() { return new m(this) } }, { key: "createPeriodicWave", value: function(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { disableNormalization: !1 }; return new g(this, be(be({}, n), {}, { imag: e, real: t })) } }, { key: "createStereoPanner", value: function() { return new y(this) } }, { key: "createWaveShaper", value: function() { return new b(this) } }, { key: "decodeAudioData", value: function(t, e, n) { return c(this._nativeContext, t).then((function(t) { return "function" == typeof e && e(t), t }), (function(t) { throw "function" == typeof n && n(t), t })) } }]), x }(d) }(qi, To, jo, zo, Go, $o, Ko, ri, ai, Gi, si, fi, pi, yi, wi, Oi, Zi, Di, Ni, Fi),
                Yi = function(t, e, n, r) { return function(t) {
                        (0, G.Z)(i, t); var o = dn(i);

                        function i(t, a) { var u;
                            (0, w.Z)(this, i); var s = n(t),
                                c = e(s, a); if (r(s)) throw TypeError(); return (u = o.call(this, t, !0, c, null))._nativeMediaElementAudioSourceNode = c, u } return (0, _.Z)(i, [{ key: "mediaElement", get: function() { return this._nativeMediaElementAudioSourceNode.mediaElement } }]), i }(t) }(Ao, (function(t, e) { return t.createMediaElementSource(e.mediaElement) }), go, bo),
                Xi = function(t, e, n, r) { return function(t) {
                        (0, G.Z)(i, t); var o = gn(i);

                        function i(t, a) { var u;
                            (0, w.Z)(this, i); var s = n(t); if (r(s)) throw new TypeError; var c = mn(mn({}, yn), a),
                                l = e(s, c); return (u = o.call(this, t, !1, l, null))._nativeMediaStreamAudioDestinationNode = l, u } return (0, _.Z)(i, [{ key: "stream", get: function() { return this._nativeMediaStreamAudioDestinationNode.stream } }]), i }(t) }(Ao, (function(t, e) { var n = t.createMediaStreamDestination(); return Zn(n, e), 1 === n.numberOfOutputs && Object.defineProperty(n, "numberOfOutputs", { get: function() { return 0 } }), n }), go, bo),
                Qi = function(t, e, n, r) { return function(t) {
                        (0, G.Z)(i, t); var o = bn(i);

                        function i(t, a) { var u;
                            (0, w.Z)(this, i); var s = n(t),
                                c = e(s, a); if (r(s)) throw new TypeError; return (u = o.call(this, t, !0, c, null))._nativeMediaStreamAudioSourceNode = c, u } return (0, _.Z)(i, [{ key: "mediaStream", get: function() { return this._nativeMediaStreamAudioSourceNode.mediaStream } }]), i }(t) }(Ao, (function(t, e) { var n = e.mediaStream,
                        r = n.getAudioTracks();
                    r.sort((function(t, e) { return t.id < e.id ? -1 : t.id > e.id ? 1 : 0 })); var o = r.slice(0, 1),
                        i = t.createMediaStreamSource(new MediaStream(o)); return Object.defineProperty(i, "mediaStream", { value: n }), i }), go, bo),
                $i = function(t, e) { return function(n, r) { var o = r.mediaStreamTrack; if ("function" == typeof n.createMediaStreamTrackSource) return n.createMediaStreamTrackSource(o); var i = new MediaStream([o]),
                            a = n.createMediaStreamSource(i); if ("audio" !== o.kind) throw t(); if (e(n)) throw new TypeError; return a } }(rn, bo),
                Ji = function(t, e, n) { return function(t) {
                        (0, G.Z)(o, t); var r = _n(o);

                        function o(t, i) {
                            (0, w.Z)(this, o); var a = n(t),
                                u = e(a, i); return r.call(this, t, !0, u, null) } return (0, _.Z)(o) }(t) }(Ao, $i, go),
                Ki = function(t, e, n, r, o, i, a, u, s) { return function(t) {
                        (0, G.Z)(l, t); var c = wt(l);

                        function l() { var t, e, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; if ((0, w.Z)(this, l), null === s) throw new Error("Missing the native AudioContext constructor."); try { e = new s(o) } catch (h) { if (12 === h.code && "sampleRate is not in range" === h.message) throw n(); throw h } if (null === e) throw r(); if (!_t(o.latencyHint)) throw new TypeError("The provided value '".concat(o.latencyHint, "' is not a valid enum value of type AudioContextLatencyCategory.")); if (void 0 !== o.sampleRate && e.sampleRate !== o.sampleRate) throw n();
                            t = c.call(this, e, 2); var i = o.latencyHint,
                                a = e,
                                u = a.sampleRate; if (t._baseLatency = "number" == typeof e.baseLatency ? e.baseLatency : "balanced" === i ? 512 / u : "interactive" === i || void 0 === i ? 256 / u : "playback" === i ? 1024 / u : 128 * Math.max(2, Math.min(128, Math.round(i * u / 128))) / u, t._nativeAudioContext = e, "webkitAudioContext" === s.name ? (t._nativeGainNode = e.createGain(), t._nativeOscillatorNode = e.createOscillator(), t._nativeGainNode.gain.value = 1e-37, t._nativeOscillatorNode.connect(t._nativeGainNode).connect(e.destination), t._nativeOscillatorNode.start()) : (t._nativeGainNode = null, t._nativeOscillatorNode = null), t._state = null, "running" === e.state) { t._state = "suspended"; var f = function n() { "suspended" === t._state && (t._state = null), e.removeEventListener("statechange", n) };
                                e.addEventListener("statechange", f) } return t } return (0, _.Z)(l, [{ key: "baseLatency", get: function() { return this._baseLatency } }, { key: "state", get: function() { return null !== this._state ? this._state : this._nativeAudioContext.state } }, { key: "close", value: function() { var t = this; return "closed" === this.state ? this._nativeAudioContext.close().then((function() { throw e() })) : ("suspended" === this._state && (this._state = null), this._nativeAudioContext.close().then((function() { null !== t._nativeGainNode && null !== t._nativeOscillatorNode && (t._nativeOscillatorNode.stop(), t._nativeGainNode.disconnect(), t._nativeOscillatorNode.disconnect()), bt(t) }))) } }, { key: "createMediaElementSource", value: function(t) { return new o(this, { mediaElement: t }) } }, { key: "createMediaStreamDestination", value: function() { return new i(this) } }, { key: "createMediaStreamSource", value: function(t) { return new a(this, { mediaStream: t }) } }, { key: "createMediaStreamTrackSource", value: function(t) { return new u(this, { mediaStreamTrack: t }) } }, { key: "resume", value: function() { var t = this; return "suspended" === this._state ? new Promise((function(e, n) { t._nativeAudioContext.addEventListener("statechange", (function r() { t._nativeAudioContext.removeEventListener("statechange", r), "running" === t._nativeAudioContext.state ? e() : t.resume().then(e, n) })) })) : this._nativeAudioContext.resume().catch((function(t) { if (void 0 === t || 15 === t.code) throw e(); throw t })) } }, { key: "suspend", value: function() { return this._nativeAudioContext.suspend().catch((function(t) { if (void 0 === t) throw e(); throw t })) } }]), l }(t) }(Hi, rn, hr, jr, Yi, Xi, Qi, Ji, ko),
                ta = function(t) { return function(e) { var n = t.get(e); if (void 0 === n) throw new Error("The context has no set of AudioWorkletNodes."); return n } }(_i),
                ea = function(t) { return function(e, n) { t(e).add(n) } }(ta),
                na = function(t) { return function(e, n) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                            i = e[r]; if (void 0 === i) throw t(); return Gt(n) ? i.connect(n, 0, o) : i.connect(n, 0) } }(et),
                ra = function(t) { return function(e, n) { t(e).delete(n) } }(ta),
                oa = function(t) { return function(e) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0; return void 0 === n ? e.forEach((function(t) { return t.disconnect() })) : "number" == typeof n ? Ye(t, e, n).disconnect() : Gt(n) ? void 0 === r ? e.forEach((function(t) { return t.disconnect(n) })) : void 0 === o ? Ye(t, e, r).disconnect(n, 0) : Ye(t, e, r).disconnect(n, 0, o) : void 0 === r ? e.forEach((function(t) { return t.disconnect(n) })) : Ye(t, e, r).disconnect(n, 0) } }(et),
                ia = new WeakMap,
                aa = function(t, e) { return function(n) { return e(t, n) } }(ia, N),
                ua = function(t, e, n, r, o, i, a, u, s, c, l, f, h) { return function(p, d, v, m) { if (0 === m.numberOfInputs && 0 === m.numberOfOutputs) throw s(); var g = Array.isArray(m.outputChannelCount) ? m.outputChannelCount : Array.from(m.outputChannelCount); if (g.some((function(t) { return t < 1 }))) throw s(); if (g.length !== m.numberOfOutputs) throw e(); if ("explicit" !== m.channelCountMode) throw s(); var y = m.channelCount * m.numberOfInputs,
                            b = g.reduce((function(t, e) { return t + e }), 0),
                            _ = void 0 === v.parameterDescriptors ? 0 : v.parameterDescriptors.length; if (y + _ > 6 || b > 6) throw s(); for (var w = new MessageChannel, k = [], x = [], O = 0; O < m.numberOfInputs; O += 1) k.push(a(p, { channelCount: m.channelCount, channelCountMode: m.channelCountMode, channelInterpretation: m.channelInterpretation, gain: 1 })), x.push(o(p, { channelCount: m.channelCount, channelCountMode: "explicit", channelInterpretation: "discrete", numberOfOutputs: m.channelCount })); var S = []; if (void 0 !== v.parameterDescriptors) { var C, A = Un(v.parameterDescriptors); try { var T = function() { var t = C.value,
                                        e = t.defaultValue,
                                        n = t.maxValue,
                                        r = t.minValue,
                                        o = t.name,
                                        a = i(p, { channelCount: 1, channelCountMode: "explicit", channelInterpretation: "discrete", offset: void 0 !== m.parameterData[o] ? m.parameterData[o] : void 0 === e ? 0 : e });
                                    Object.defineProperties(a.offset, { defaultValue: { get: function() { return void 0 === e ? 0 : e } }, maxValue: { get: function() { return void 0 === n ? st : n } }, minValue: { get: function() { return void 0 === r ? ut : r } } }), S.push(a) }; for (A.s(); !(C = A.n()).done;) T() } catch (at) { A.e(at) } finally { A.f() } } for (var E = r(p, { channelCount: 1, channelCountMode: "explicit", channelInterpretation: "speakers", numberOfInputs: Math.max(1, y + _) }), P = Bn(d, p.sampleRate), R = u(p, P, y + _, Math.max(1, b)), D = o(p, { channelCount: Math.max(1, b), channelCountMode: "explicit", channelInterpretation: "discrete", numberOfOutputs: Math.max(1, b) }), j = [], M = 0; M < m.numberOfOutputs; M += 1) j.push(r(p, { channelCount: 1, channelCountMode: "explicit", channelInterpretation: "speakers", numberOfInputs: g[M] })); for (var I = 0; I < m.numberOfInputs; I += 1) { k[I].connect(x[I]); for (var N = 0; N < m.channelCount; N += 1) x[I].connect(E, N, I * m.channelCount + N) } var B = new oe(void 0 === v.parameterDescriptors ? [] : v.parameterDescriptors.map((function(t, e) { var n = t.name,
                                r = S[e]; return r.connect(E, 0, y + e), r.start(0), [n, r.offset] })));
                        E.connect(R); var F, L, V = m.channelInterpretation,
                            z = null,
                            U = 0 === m.numberOfOutputs ? [R] : j,
                            q = {get bufferSize() { return P }, get channelCount() { return m.channelCount }, set channelCount(t) { throw n() }, get channelCountMode() { return m.channelCountMode }, set channelCountMode(t) { throw n() }, get channelInterpretation() { return V }, set channelInterpretation(t) { var e, n = Un(k); try { for (n.s(); !(e = n.n()).done;) { e.value.channelInterpretation = t } } catch (at) { n.e(at) } finally { n.f() }
                                    V = t }, get context() { return R.context }, get inputs() { return k }, get numberOfInputs() { return m.numberOfInputs }, get numberOfOutputs() { return m.numberOfOutputs }, get onprocessorerror() { return z }, set onprocessorerror(t) { "function" == typeof z && q.removeEventListener("processorerror", z), "function" == typeof(z = "function" == typeof t ? t : null) && q.addEventListener("processorerror", z) }, get parameters() { return B }, get port() { return w.port2 }, addEventListener: function() { return R.addEventListener(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) }, connect: t.bind(null, U), disconnect: c.bind(null, U), dispatchEvent: function() { return R.dispatchEvent(arguments.length <= 0 ? void 0 : arguments[0]) }, removeEventListener: function() { return R.removeEventListener(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) } },
                            G = new Map;
                        w.port1.addEventListener = (F = w.port1.addEventListener, function() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; if ("message" === e[0]) { var r = "function" == typeof e[1] ? e[1] : "object" == typeof e[1] && null !== e[1] && "function" == typeof e[1].handleEvent ? e[1].handleEvent : null; if (null !== r) { var o = G.get(e[1]);
                                    void 0 !== o ? e[1] = o : (e[1] = function(t) { l(p.currentTime, p.sampleRate, (function() { return r(t) })) }, G.set(r, e[1])) } } return F.call(w.port1, e[0], e[1], e[2]) }), w.port1.removeEventListener = (L = w.port1.removeEventListener, function() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; if ("message" === e[0]) { var r = G.get(e[1]);
                                void 0 !== r && (G.delete(e[1]), e[1] = r) } return L.call(w.port1, e[0], e[1], e[2]) }); var H = null;
                        Object.defineProperty(w.port1, "onmessage", { get: function() { return H }, set: function(t) { "function" == typeof H && w.port1.removeEventListener("message", H), "function" == typeof(H = "function" == typeof t ? t : null) && (w.port1.addEventListener("message", H), w.port1.start()) } }), v.prototype.port = w.port1; var Y = null,
                            X = function(t, e, n, r) { var o = Z.get(t);
                                void 0 === o && (o = new WeakMap, Z.set(t, o)); var i = Ln(n, r); return o.set(e, i), i }(p, q, v, m);
                        X.then((function(t) { return Y = t })); var Q = fe(m.numberOfInputs, m.channelCount),
                            $ = fe(m.numberOfOutputs, g),
                            J = void 0 === v.parameterDescriptors ? [] : v.parameterDescriptors.reduce((function(t, e) { var n = e.name; return zn(zn({}, t), {}, (0, W.Z)({}, n, new Float32Array(128))) }), {}),
                            K = !0,
                            tt = function() { m.numberOfOutputs > 0 && R.disconnect(D); for (var t = 0, e = 0; t < m.numberOfOutputs; t += 1) { for (var n = j[t], r = 0; r < g[t]; r += 1) D.disconnect(n, e + r, r);
                                    e += g[t] } },
                            et = new Map;
                        R.onaudioprocess = function(t) { var e = t.inputBuffer,
                                n = t.outputBuffer;
                            null !== Y && function() { for (var t = f(q), r = function(r) { for (var o = 0; o < m.numberOfInputs; o += 1)
                                            for (var i = 0; i < m.channelCount; i += 1) ce(e, Q[o], i, i, r);
                                        void 0 !== v.parameterDescriptors && v.parameterDescriptors.forEach((function(t, n) { var o = t.name;
                                            ce(e, J, o, y + n, r) })); for (var a = 0; a < m.numberOfInputs; a += 1)
                                            for (var u = 0; u < g[a]; u += 1) 0 === $[a][u].byteLength && ($[a][u] = new Float32Array(128)); try { var s = Q.map((function(e, n) { if (t[n].size > 0) return et.set(n, P / 128), e; var r = et.get(n); return void 0 === r ? [] : (e.every((function(t) { return t.every((function(t) { return 0 === t })) })) && (1 === r ? et.delete(n) : et.set(n, r - 1)), e) })),
                                                c = l(p.currentTime + r / p.sampleRate, p.sampleRate, (function() { return Y.process(s, $, J) }));
                                            K = c; for (var f = 0, h = 0; f < m.numberOfOutputs; f += 1) { for (var d = 0; d < g[f]; d += 1) le(n, $[f], d, h + d, r);
                                                h += g[f] } } catch (A) { K = !1, q.dispatchEvent(new ErrorEvent("processorerror", { colno: A.colno, filename: A.filename, lineno: A.lineno, message: A.message })) } if (!K) { for (var b = 0; b < m.numberOfInputs; b += 1) { k[b].disconnect(x[b]); for (var _ = 0; _ < m.channelCount; _ += 1) x[r].disconnect(E, _, b * m.channelCount + _) } if (void 0 !== v.parameterDescriptors)
                                                for (var w = v.parameterDescriptors.length, O = 0; O < w; O += 1) { var C = S[O];
                                                    C.disconnect(E, 0, y + O), C.stop() }
                                            return E.disconnect(R), R.onaudioprocess = null, nt ? tt() : it(), "break" } }, o = 0; o < P; o += 128) { if ("break" === r(o)) break } }() }; var nt = !1,
                            rt = a(p, { channelCount: 1, channelCountMode: "explicit", channelInterpretation: "discrete", gain: 0 }),
                            ot = function() { return R.connect(rt).connect(p.destination) },
                            it = function() { R.disconnect(rt), rt.disconnect() }; return ot(), h(q, (function() { if (K) { it(), m.numberOfOutputs > 0 && R.connect(D); for (var t = 0, e = 0; t < m.numberOfOutputs; t += 1) { for (var n = j[t], r = 0; r < g[t]; r += 1) D.connect(n, e + r, r);
                                    e += g[t] } }
                            nt = !0 }), (function() { K && (ot(), tt()), nt = !1 })) } }(na, et, rn, Xo, Gn, ei, Kn, ir, hr, oa, Vi, aa, Ho),
                sa = function(t, e, n, r, o) { return function(i, a, u, s, c, l) { if (null !== u) try { var f = new u(i, s, l),
                                h = new Map,
                                p = null; if (Object.defineProperties(f, { channelCount: { get: function() { return l.channelCount }, set: function() { throw t() } }, channelCountMode: { get: function() { return "explicit" }, set: function() { throw t() } }, onprocessorerror: { get: function() { return p }, set: function(t) { "function" == typeof p && f.removeEventListener("processorerror", p), "function" == typeof(p = "function" == typeof t ? t : null) && f.addEventListener("processorerror", p) } } }), f.addEventListener = (m = f.addEventListener, function() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; if ("processorerror" === e[0]) { var r = "function" == typeof e[1] ? e[1] : "object" == typeof e[1] && null !== e[1] && "function" == typeof e[1].handleEvent ? e[1].handleEvent : null; if (null !== r) { var o = h.get(e[1]);
                                            void 0 !== o ? e[1] = o : (e[1] = function(t) { "error" === t.type ? (Object.defineProperties(t, { type: { value: "processorerror" } }), r(t)) : r(new ErrorEvent(e[0], Nn({}, t))) }, h.set(r, e[1])) } } return m.call(f, "error", e[1], e[2]), m.call.apply(m, [f].concat(e)) }), f.removeEventListener = (v = f.removeEventListener, function() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; if ("processorerror" === e[0]) { var r = h.get(e[1]);
                                        void 0 !== r && (h.delete(e[1]), e[1] = r) } return v.call(f, "error", e[1], e[2]), v.call(f, e[0], e[1], e[2]) }), 0 !== l.numberOfOutputs) { var d = n(i, { channelCount: 1, channelCountMode: "explicit", channelInterpretation: "discrete", gain: 0 });
                                f.connect(d).connect(i.destination); return o(f, (function() { return d.disconnect() }), (function() { return d.connect(i.destination) })) } return f } catch (g) { if (11 === g.code) throw r(); throw g }
                        var v, m; if (void 0 === c) throw r(); return function(t) { var e = (new MessageChannel).port1; try { e.postMessage(t) } finally { e.close() } }(l), e(i, a, c, l) } }(rn, ua, Kn, hr, Ho),
                ca = function(t, e, n, r, o, i, a, u, s, c, l, f, h, p, v, g) { return function(y, _, w) { var k = new WeakMap,
                            x = null,
                            O = function() { var u = (0, d.Z)(m().mark((function u(O, S) { var C, A, T, E, P, Z, R, D, j, M, I, N, B, F, L, V, z, U, q, W, G, H, Y, X, Q, $, J, tt, et, nt, rt, ot, it, at; return m().wrap((function(u) { for (;;) switch (u.prev = u.next) {
                                            case 0:
                                                if (C = l(O), A = null, T = K(C, S), E = Array.isArray(_.outputChannelCount) ? _.outputChannelCount : Array.from(_.outputChannelCount), null === f) { for (P = E.reduce((function(t, e) { return t + e }), 0), Z = o(S, { channelCount: Math.max(1, P), channelCountMode: "explicit", channelInterpretation: "discrete", numberOfOutputs: Math.max(1, P) }), R = [], D = 0; D < O.numberOfOutputs; D += 1) R.push(r(S, { channelCount: 1, channelCountMode: "explicit", channelInterpretation: "speakers", numberOfInputs: E[D] }));
                                                    (j = a(S, { channelCount: _.channelCount, channelCountMode: _.channelCountMode, channelInterpretation: _.channelInterpretation, gain: 1 })).connect = e.bind(null, R), j.disconnect = s.bind(null, R), A = [Z, R, j] } else T || (C = new f(S, y)); if (k.set(S, null === A ? C : A[2]), null === A) { u.next = 41; break } if (null !== x) { u.next = 32; break } if (void 0 !== w) { u.next = 10; break } throw new Error("Missing the processor constructor.");
                                            case 10:
                                                if (null !== h) { u.next = 12; break } throw new Error("Missing the native OfflineAudioContext constructor.");
                                            case 12:
                                                if (M = O.channelCount * O.numberOfInputs, I = void 0 === w.parameterDescriptors ? 0 : w.parameterDescriptors.length, N = M + I, B = function() { var t = (0, d.Z)(m().mark((function t() { var e, n, u, s, c, l, f, y, w, k, x, C, A; return m().wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                                                    case 0:
                                                                        for (e = new h(N, 128 * Math.ceil(O.context.length / 128), S.sampleRate), n = [], u = [], s = 0; s < _.numberOfInputs; s += 1) n.push(a(e, { channelCount: _.channelCount, channelCountMode: _.channelCountMode, channelInterpretation: _.channelInterpretation, gain: 1 })), u.push(o(e, { channelCount: _.channelCount, channelCountMode: "explicit", channelInterpretation: "discrete", numberOfOutputs: _.channelCount })); return t.next = 6, Promise.all(Array.from(O.parameters.values()).map(function() { var t = (0, d.Z)(m().mark((function t(n) { var r; return m().wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                                                                        case 0:
                                                                                            return r = i(e, { channelCount: 1, channelCountMode: "explicit", channelInterpretation: "discrete", offset: n.value }), t.next = 3, p(e, n, r.offset);
                                                                                        case 3:
                                                                                            return t.abrupt("return", r);
                                                                                        case 4:
                                                                                        case "end":
                                                                                            return t.stop() } }), t) }))); return function(e) { return t.apply(this, arguments) } }()));
                                                                    case 6:
                                                                        for (c = t.sent, l = r(e, { channelCount: 1, channelCountMode: "explicit", channelInterpretation: "speakers", numberOfInputs: Math.max(1, M + I) }), f = 0; f < _.numberOfInputs; f += 1)
                                                                            for (n[f].connect(u[f]), y = 0; y < _.channelCount; y += 1) u[f].connect(l, y, f * _.channelCount + y);
                                                                        w = pe(c.entries()); try { for (w.s(); !(k = w.n()).done;) x = (0, b.Z)(k.value, 2), C = x[0], (A = x[1]).connect(l, 0, M + C), A.start(0) } catch (T) { w.e(T) } finally { w.f() } return l.connect(e.destination), t.next = 14, Promise.all(n.map((function(t) { return v(O, e, t) })));
                                                                    case 14:
                                                                        return t.abrupt("return", g(e));
                                                                    case 15:
                                                                    case "end":
                                                                        return t.stop() } }), t) }))); return function() { return t.apply(this, arguments) } }(), u.t0 = ge, u.t1 = O, 0 !== N) { u.next = 22; break }
                                                u.t2 = null, u.next = 25; break;
                                            case 22:
                                                return u.next = 24, B();
                                            case 24:
                                                u.t2 = u.sent;
                                            case 25:
                                                u.t3 = u.t2, u.t4 = S, u.t5 = _, u.t6 = E, u.t7 = w, u.t8 = c, x = (0, u.t0)(u.t1, u.t3, u.t4, u.t5, u.t6, u.t7, u.t8);
                                            case 32:
                                                return u.next = 34, x;
                                            case 34:
                                                for (F = u.sent, L = n(S, { buffer: null, channelCount: 2, channelCountMode: "max", channelInterpretation: "speakers", loop: !1, loopEnd: 0, loopStart: 0, playbackRate: 1 }), V = A, z = (0, b.Z)(V, 3), U = z[0], q = z[1], W = z[2], null !== F && (L.buffer = F, L.start(0)), L.connect(U), G = 0, H = 0; G < O.numberOfOutputs; G += 1) { for (Y = q[G], X = 0; X < E[G]; X += 1) U.connect(Y, H + X, X);
                                                    H += E[G] } return u.abrupt("return", W);
                                            case 41:
                                                if (T) { u.next = 61; break }
                                                Q = pe(O.parameters.entries()), u.prev = 43, Q.s();
                                            case 45:
                                                if (($ = Q.n()).done) { u.next = 51; break } return J = (0, b.Z)($.value, 2), tt = J[0], et = J[1], u.next = 49, p(S, et, C.parameters.get(tt));
                                            case 49:
                                                u.next = 45; break;
                                            case 51:
                                                u.next = 56; break;
                                            case 53:
                                                u.prev = 53, u.t9 = u.catch(43), Q.e(u.t9);
                                            case 56:
                                                return u.prev = 56, Q.f(), u.finish(56);
                                            case 59:
                                                u.next = 78; break;
                                            case 61:
                                                nt = pe(O.parameters.entries()), u.prev = 62, nt.s();
                                            case 64:
                                                if ((rt = nt.n()).done) { u.next = 70; break } return ot = (0, b.Z)(rt.value, 2), it = ot[0], at = ot[1], u.next = 68, t(S, at, C.parameters.get(it));
                                            case 68:
                                                u.next = 64; break;
                                            case 70:
                                                u.next = 75; break;
                                            case 72:
                                                u.prev = 72, u.t10 = u.catch(62), nt.e(u.t10);
                                            case 75:
                                                return u.prev = 75, nt.f(), u.finish(75);
                                            case 78:
                                                return u.next = 80, v(O, S, C);
                                            case 80:
                                                return u.abrupt("return", C);
                                            case 81:
                                            case "end":
                                                return u.stop() } }), u, null, [
                                        [43, 53, 56, 59],
                                        [62, 72, 75, 78]
                                    ]) }))); return function(t, e) { return u.apply(this, arguments) } }(); return { render: function(t, e) { u(e, t); var n = k.get(e); return void 0 !== n ? Promise.resolve(n) : O(t, e) } } } }(No, na, Bo, Xo, Gn, ei, Kn, ra, oa, Vi, Bt, Co, yo, Fo, vo, vi),
                la = function(t) { return function(e) { return t.get(e) } }(zi),
                fa = function(t) { return function(e, n) { t.set(e, n) } }(ia),
                ha = Li ? function(t, e, n, r, o, i, a, u, s, c, l, f, h, p) { return function(e) {
                        (0, G.Z)(v, e); var d = ue(v);

                        function v(e, p, m) { var g, y;
                            (0, w.Z)(this, v); var b = u(e),
                                _ = s(b),
                                k = l(ae(ae({}, se), m));
                            h(k); var x = P.get(b),
                                O = null == x ? void 0 : x.get(p),
                                S = _ || "closed" !== b.state ? b : null !== (y = a(b)) && void 0 !== y ? y : b,
                                C = o(S, _ ? null : e.baseLatency, c, p, O, k),
                                A = _ ? r(p, k, O) : null;
                            g = d.call(this, e, !0, C, A); var T = [];
                            C.parameters.forEach((function(t, e) { var r = n((0, at.Z)(g), _, t);
                                T.push([e, r]) })), g._nativeAudioWorkletNode = C, g._onprocessorerror = null, g._parameters = new oe(T), _ && t(b, (0, at.Z)(g)); var E = i((0, at.Z)(g)).activeInputs; return f(C, E), g } return (0, _.Z)(v, [{ key: "onprocessorerror", get: function() { return this._onprocessorerror }, set: function(t) { var e = "function" == typeof t ? p(this, t) : null;
                                this._nativeAudioWorkletNode.onprocessorerror = e; var n = this._nativeAudioWorkletNode.onprocessorerror;
                                this._onprocessorerror = null !== n && n === e ? t : n } }, { key: "parameters", get: function() { return null === this._parameters ? this._nativeAudioWorkletNode.parameters : this._parameters } }, { key: "port", get: function() { return this._nativeAudioWorkletNode.port } }]), v }(e) }(ea, Ao, Vo, ca, sa, dt, la, go, bo, Co, (function(t) { return Ur(Ur({}, t), {}, { outputChannelCount: void 0 !== t.outputChannelCount ? t.outputChannelCount : 1 === t.numberOfInputs && 1 === t.numberOfOutputs ? [t.channelCount] : Array.from({ length: t.numberOfOutputs }, (function() { return 1 })) }) }), fa, (function(t) { var e = new MessageChannel,
                        n = e.port1,
                        r = e.port2; try { n.postMessage(t) } finally { n.close(), r.close() } }), oo) : void 0,
                pa = (function(t, e, n, r, o) {}(rn, hr, jr, wi, ko), function(t, e) { return function(n, r, o) { if (null === e) throw new Error("Missing the native OfflineAudioContext constructor."); try { return new e(n, r, o) } catch (i) { if ("SyntaxError" === i.name) throw t(); throw i } } }(hr, yo)),
                da = function(t, e, n, r, o, i, a, u) { return function(s, c) { return n(s).render(s, c).then((function() { return Promise.all(Array.from(r(c)).map((function(t) { return n(t).render(t, c) }))) })).then((function() { return o(c) })).then((function(n) { return "function" != typeof n.copyFromChannel ? (a(n), nt(n)) : e(i, (function() { return i(n) })) || u(n), t.add(n), n })) } }(Eo, lo, po, ta, vi, tt, Ro, Do),
                va = (function(t, e, n, r, o) {}(lo, rn, pa, wi, da), function(t, e, n, r, o) { return function(t) {
                        (0, G.Z)(a, t); var i = vr(a);

                        function a(t, n, o) { var u, s; if ((0, w.Z)(this, a), "number" == typeof t && void 0 !== n && void 0 !== o) s = { length: n, numberOfChannels: t, sampleRate: o };
                            else { if ("object" != typeof t) throw new Error("The given parameters are not valid.");
                                s = t } var c, l = dr(dr({}, mr), s),
                                f = l.length,
                                h = l.numberOfChannels,
                                p = l.sampleRate,
                                d = r(h, f, p); return e(xn, (function() { return xn(d) })) || d.addEventListener("statechange", (c = 0, function t(e) { "running" === u._state && (c > 0 ? (d.removeEventListener("statechange", t), e.stopImmediatePropagation(), u._waitForThePromiseToSettle(e)) : c += 1) })), (u = i.call(this, d, h))._length = f, u._nativeOfflineAudioContext = d, u._state = null, u } return (0, _.Z)(a, [{ key: "length", get: function() { return void 0 === this._nativeOfflineAudioContext.length ? this._length : this._nativeOfflineAudioContext.length } }, { key: "state", get: function() { return null === this._state ? this._nativeOfflineAudioContext.state : this._state } }, { key: "startRendering", value: function() { var t = this; return "running" === this._state ? Promise.reject(n()) : (this._state = "running", o(this.destination, this._nativeOfflineAudioContext).finally((function() { t._state = null, bt(t) }))) } }, { key: "_waitForThePromiseToSettle", value: function(t) { var e = this;
                                null === this._state ? this._nativeOfflineAudioContext.dispatchEvent(t) : setTimeout((function() { return e._waitForThePromiseToSettle(t) })) } }]), a }(t) }(Hi, lo, rn, pa, da)),
                ma = function(t, e) { return function(n) { var r = t.get(n); return e(r) || e(n) } }(A, xo),
                ga = function(t, e) { return function(n) { return t.has(n) || e(n) } }(O, Oo),
                ya = function(t, e) { return function(n) { return t.has(n) || e(n) } }(C, So),
                ba = function(t, e) { return function(n) { var r = t.get(n); return e(r) || e(n) } }(A, bo);

            function _a(t, e) { if (!t) throw new Error(e) }

            function wa(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0; if (!(e <= t && t <= n)) throw new RangeError("Value must be within [".concat(e, ", ").concat(n, "], got: ").concat(t)) }

            function ka(t) { t.isOffline || "running" === t.state || Sa('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.') } var xa = console;

            function Oa() { var t;
                (t = xa).log.apply(t, arguments) }

            function Sa() { var t;
                (t = xa).warn.apply(t, arguments) }

            function Ca(t) { return void 0 === t }

            function Aa(t) { return !Ca(t) }

            function Ta(t) { return "function" == typeof t }

            function Ea(t) { return "number" == typeof t }

            function Pa(t) { return "[object Object]" === Object.prototype.toString.call(t) && t.constructor === Object }

            function Za(t) { return Array.isArray(t) }

            function Ra(t) { return "string" == typeof t }

            function Da(t) { return Ra(t) && /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(t) }

            function ja(t) { return new Ki(t) }

            function Ma(t, e, n) { return new va(t, e, n) } var Ia = "object" == typeof self ? self : null,
                Na = Ia && (Ia.hasOwnProperty("AudioContext") || Ia.hasOwnProperty("webkitAudioContext")); var Ba = n(11752),
                Fa = n(79900),
                La = function() {
                    function t(e, n, r) {
                        (0, w.Z)(this, t), this._callback = e, this._type = n, this._updateInterval = r, this._createClock() } return (0, _.Z)(t, [{ key: "_createWorker", value: function() { var t = new Blob(["\n\t\t\t// the initial timeout time\n\t\t\tlet timeoutTime =  ".concat((1e3 * this._updateInterval).toFixed(1), ";\n\t\t\t// onmessage callback\n\t\t\tself.onmessage = function(msg){\n\t\t\t\ttimeoutTime = parseInt(msg.data);\n\t\t\t};\n\t\t\t// the tick function which posts a message\n\t\t\t// and schedules a new tick\n\t\t\tfunction tick(){\n\t\t\t\tsetTimeout(tick, timeoutTime);\n\t\t\t\tself.postMessage('tick');\n\t\t\t}\n\t\t\t// call tick initially\n\t\t\ttick();\n\t\t\t")], { type: "text/javascript" }),
                                e = URL.createObjectURL(t),
                                n = new Worker(e);
                            n.onmessage = this._callback.bind(this), this._worker = n } }, { key: "_createTimeout", value: function() { var t = this;
                            this._timeout = setTimeout((function() { t._createTimeout(), t._callback() }), 1e3 * this._updateInterval) } }, { key: "_createClock", value: function() { if ("worker" === this._type) try { this._createWorker() } catch (t) { this._type = "timeout", this._createClock() } else "timeout" === this._type && this._createTimeout() } }, { key: "_disposeClock", value: function() { this._timeout && (clearTimeout(this._timeout), this._timeout = 0), this._worker && (this._worker.terminate(), this._worker.onmessage = null) } }, { key: "updateInterval", get: function() { return this._updateInterval }, set: function(t) { this._updateInterval = Math.max(t, 128 / 44100), "worker" === this._type && this._worker.postMessage(Math.max(1e3 * t, 1)) } }, { key: "type", get: function() { return this._type }, set: function(t) { this._disposeClock(), this._type = t, this._createClock() } }, { key: "dispose", value: function() { this._disposeClock() } }]), t }();

            function Va(t) { return ya(t) }

            function za(t) { return ga(t) }

            function Ua(t) { return ba(t) }

            function qa(t) { return ma(t) }

            function Wa(t) { return t instanceof AudioBuffer }

            function Ga(t, e) { return "value" === t || Va(e) || za(e) || Wa(e) }

            function Ha(t) { for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r]; if (!n.length) return t; var o = n.shift(); if (Pa(t) && Pa(o))
                    for (var i in o) Ga(i, o[i]) ? t[i] = o[i] : Pa(o[i]) ? (t[i] || Object.assign(t, (0, W.Z)({}, i, {})), Ha(t[i], o[i])) : Object.assign(t, (0, W.Z)({}, i, o[i])); return Ha.apply(void 0, [t].concat(n)) }

            function Ya(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    o = {},
                    i = Array.from(e); if (Pa(i[0]) && r && !Reflect.has(i[0], r)) { var a = Object.keys(i[0]).some((function(e) { return Reflect.has(t, e) }));
                    a || (Ha(o, (0, W.Z)({}, r, i[0])), n.splice(n.indexOf(r), 1), i.shift()) } if (1 === i.length && Pa(i[0])) Ha(o, i[0]);
                else
                    for (var u = 0; u < n.length; u++) Aa(i[u]) && (o[n[u]] = i[u]); return Ha(t, o) }

            function Xa(t, e) { return Ca(t) ? e : t }

            function Qa(t, e) { return e.forEach((function(e) { Reflect.has(t, e) && delete t[e] })), t } var $a = function() {
                function t() {
                    (0, w.Z)(this, t), this.debug = !1, this._wasDisposed = !1 } return (0, _.Z)(t, [{ key: "log", value: function() { if (this.debug || Ia && this.toString() === Ia.TONE_DEBUG_CLASS) { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            Oa.apply(void 0, [this].concat(e)) } } }, { key: "dispose", value: function() { return this._wasDisposed = !0, this } }, { key: "disposed", get: function() { return this._wasDisposed } }, { key: "toString", value: function() { return this.name } }], [{ key: "getDefaults", value: function() { return {} } }]), t }();
            $a.version = g; var Ja = 1e-6;

            function Ka(t, e) { return t > e + Ja }

            function tu(t, e) { return Ka(t, e) || nu(t, e) }

            function eu(t, e) { return t + Ja < e }

            function nu(t, e) { return Math.abs(t - e) < Ja }

            function ru(t, e, n) { return Math.max(Math.min(t, n), e) }

            function ou(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var iu = function(t) {
                    (0, G.Z)(n, t); var e = ou(n);

                    function n() { var t;
                        (0, w.Z)(this, n), (t = e.call(this)).name = "Timeline", t._timeline = []; var r = Ya(n.getDefaults(), arguments, ["memory"]); return t.memory = r.memory, t.increasing = r.increasing, t } return (0, _.Z)(n, [{ key: "length", get: function() { return this._timeline.length } }, { key: "add", value: function(t) { if (_a(Reflect.has(t, "time"), "Timeline: events must have a time attribute"), t.time = t.time.valueOf(), this.increasing && this.length) { var e = this._timeline[this.length - 1];
                                _a(tu(t.time, e.time), "The time must be greater than or equal to the last scheduled time"), this._timeline.push(t) } else { var n = this._search(t.time);
                                this._timeline.splice(n + 1, 0, t) } if (this.length > this.memory) { var r = this.length - this.memory;
                                this._timeline.splice(0, r) } return this } }, { key: "remove", value: function(t) { var e = this._timeline.indexOf(t); return -1 !== e && this._timeline.splice(e, 1), this } }, { key: "get", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "time",
                                n = this._search(t, e); return -1 !== n ? this._timeline[n] : null } }, { key: "peek", value: function() { return this._timeline[0] } }, { key: "shift", value: function() { return this._timeline.shift() } }, { key: "getAfter", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "time",
                                n = this._search(t, e); return n + 1 < this._timeline.length ? this._timeline[n + 1] : null } }, { key: "getBefore", value: function(t) { var e = this._timeline.length; if (e > 0 && this._timeline[e - 1].time < t) return this._timeline[e - 1]; var n = this._search(t); return n - 1 >= 0 ? this._timeline[n - 1] : null } }, { key: "cancel", value: function(t) { if (this._timeline.length > 1) { var e = this._search(t); if (e >= 0)
                                    if (nu(this._timeline[e].time, t)) { for (var n = e; n >= 0 && nu(this._timeline[n].time, t); n--) e = n;
                                        this._timeline = this._timeline.slice(0, e) } else this._timeline = this._timeline.slice(0, e + 1);
                                else this._timeline = [] } else 1 === this._timeline.length && tu(this._timeline[0].time, t) && (this._timeline = []); return this } }, { key: "cancelBefore", value: function(t) { var e = this._search(t); return e >= 0 && (this._timeline = this._timeline.slice(e + 1)), this } }, { key: "previousEvent", value: function(t) { var e = this._timeline.indexOf(t); return e > 0 ? this._timeline[e - 1] : null } }, { key: "_search", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "time"; if (0 === this._timeline.length) return -1; var n = 0,
                                r = this._timeline.length,
                                o = r; if (r > 0 && this._timeline[r - 1][e] <= t) return r - 1; for (; n < o;) { var i = Math.floor(n + (o - n) / 2),
                                    a = this._timeline[i],
                                    u = this._timeline[i + 1]; if (nu(a[e], t)) { for (var s = i; s < this._timeline.length; s++) { var c = this._timeline[s]; if (!nu(c[e], t)) break;
                                        i = s } return i } if (eu(a[e], t) && Ka(u[e], t)) return i;
                                Ka(a[e], t) ? o = i : n = i + 1 } return -1 } }, { key: "_iterate", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this._timeline.length - 1;
                            this._timeline.slice(e, n + 1).forEach(t) } }, { key: "forEach", value: function(t) { return this._iterate(t), this } }, { key: "forEachBefore", value: function(t, e) { var n = this._search(t); return -1 !== n && this._iterate(e, 0, n), this } }, { key: "forEachAfter", value: function(t, e) { var n = this._search(t); return this._iterate(e, n + 1), this } }, { key: "forEachBetween", value: function(t, e, n) { var r = this._search(t),
                                o = this._search(e); return -1 !== r && -1 !== o ? (this._timeline[r].time !== t && (r += 1), this._timeline[o].time === e && (o -= 1), this._iterate(n, r, o)) : -1 === r && this._iterate(n, 0, o), this } }, { key: "forEachFrom", value: function(t, e) { for (var n = this._search(t); n >= 0 && this._timeline[n].time >= t;) n--; return this._iterate(e, n + 1), this } }, { key: "forEachAtTime", value: function(t, e) { var n = this._search(t); if (-1 !== n && nu(this._timeline[n].time, t)) { for (var r = n, o = n; o >= 0 && nu(this._timeline[o].time, t); o--) r = o;
                                this._iterate((function(t) { e(t) }), r, n) } return this } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._timeline = [], this } }], [{ key: "getDefaults", value: function() { return { memory: 1 / 0, increasing: !1 } } }]), n }($a),
                au = [];

            function uu(t) { au.push(t) } var su = [];

            function cu(t) { su.push(t) }

            function lu(t) { su.forEach((function(e) { return e(t) })) }

            function fu(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var hu = function(t) {
                (0, G.Z)(n, t); var e = fu(n);

                function n() { var t; return (0, w.Z)(this, n), (t = e.apply(this, arguments)).name = "Emitter", t } return (0, _.Z)(n, [{ key: "on", value: function(t, e) { var n = this; return t.split(/\W+/).forEach((function(t) { Ca(n._events) && (n._events = {}), n._events.hasOwnProperty(t) || (n._events[t] = []), n._events[t].push(e) })), this } }, { key: "once", value: function(t, e) { var n = this; return this.on(t, (function r() { e.apply(void 0, arguments), n.off(t, r) })), this } }, { key: "off", value: function(t, e) { var n = this; return t.split(/\W+/).forEach((function(r) { if (Ca(n._events) && (n._events = {}), n._events.hasOwnProperty(t))
                                if (Ca(e)) n._events[t] = [];
                                else
                                    for (var o = n._events[t], i = o.length - 1; i >= 0; i--) o[i] === e && o.splice(i, 1) })), this } }, { key: "emit", value: function(t) { if (this._events && this._events.hasOwnProperty(t)) { for (var e = this._events[t].slice(0), n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o]; for (var i = 0, a = e.length; i < a; i++) e[i].apply(this, r) } return this } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._events = void 0, this } }], [{ key: "mixin", value: function(t) {
                        ["on", "once", "off", "emit"].forEach((function(e) { var r = Object.getOwnPropertyDescriptor(n.prototype, e);
                            Object.defineProperty(t.prototype, e, r) })) } }]), n }($a);

            function pu(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var du = function(t) {
                (0, G.Z)(n, t); var e = pu(n);

                function n() { var t; return (0, w.Z)(this, n), (t = e.apply(this, arguments)).isOffline = !1, t } return (0, _.Z)(n, [{ key: "toJSON", value: function() { return {} } }]), n }(hu);

            function vu(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var mu = function(t) {
                (0, G.Z)(n, t); var e = vu(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this)).name = "Context", t._constants = new Map, t._timeouts = new iu, t._timeoutIds = 0, t._initialized = !1, t.isOffline = !1, t._workletModules = new Map; var r = Ya(n.getDefaults(), arguments, ["context"]); return r.context ? t._context = r.context : t._context = ja({ latencyHint: r.latencyHint }), t._ticker = new La(t.emit.bind((0, at.Z)(t), "tick"), r.clockSource, r.updateInterval), t.on("tick", t._timeoutLoop.bind((0, at.Z)(t))), t._context.onstatechange = function() { t.emit("statechange", t.state) }, t._setLatencyHint(r.latencyHint), t.lookAhead = r.lookAhead, t } return (0, _.Z)(n, [{ key: "initialize", value: function() { var t; return this._initialized || (t = this, au.forEach((function(e) { return e(t) })), this._initialized = !0), this } }, { key: "createAnalyser", value: function() { return this._context.createAnalyser() } }, { key: "createOscillator", value: function() { return this._context.createOscillator() } }, { key: "createBufferSource", value: function() { return this._context.createBufferSource() } }, { key: "createBiquadFilter", value: function() { return this._context.createBiquadFilter() } }, { key: "createBuffer", value: function(t, e, n) { return this._context.createBuffer(t, e, n) } }, { key: "createChannelMerger", value: function(t) { return this._context.createChannelMerger(t) } }, { key: "createChannelSplitter", value: function(t) { return this._context.createChannelSplitter(t) } }, { key: "createConstantSource", value: function() { return this._context.createConstantSource() } }, { key: "createConvolver", value: function() { return this._context.createConvolver() } }, { key: "createDelay", value: function(t) { return this._context.createDelay(t) } }, { key: "createDynamicsCompressor", value: function() { return this._context.createDynamicsCompressor() } }, { key: "createGain", value: function() { return this._context.createGain() } }, { key: "createIIRFilter", value: function(t, e) { return this._context.createIIRFilter(t, e) } }, { key: "createPanner", value: function() { return this._context.createPanner() } }, { key: "createPeriodicWave", value: function(t, e, n) { return this._context.createPeriodicWave(t, e, n) } }, { key: "createStereoPanner", value: function() { return this._context.createStereoPanner() } }, { key: "createWaveShaper", value: function() { return this._context.createWaveShaper() } }, { key: "createMediaStreamSource", value: function(t) { return _a(qa(this._context), "Not available if OfflineAudioContext"), this._context.createMediaStreamSource(t) } }, { key: "createMediaElementSource", value: function(t) { return _a(qa(this._context), "Not available if OfflineAudioContext"), this._context.createMediaElementSource(t) } }, { key: "createMediaStreamDestination", value: function() { return _a(qa(this._context), "Not available if OfflineAudioContext"), this._context.createMediaStreamDestination() } }, { key: "decodeAudioData", value: function(t) { return this._context.decodeAudioData(t) } }, { key: "currentTime", get: function() { return this._context.currentTime } }, { key: "state", get: function() { return this._context.state } }, { key: "sampleRate", get: function() { return this._context.sampleRate } }, { key: "listener", get: function() { return this.initialize(), this._listener }, set: function(t) { _a(!this._initialized, "The listener cannot be set after initialization."), this._listener = t } }, { key: "transport", get: function() { return this.initialize(), this._transport }, set: function(t) { _a(!this._initialized, "The transport cannot be set after initialization."), this._transport = t } }, { key: "draw", get: function() { return this.initialize(), this._draw }, set: function(t) { _a(!this._initialized, "Draw cannot be set after initialization."), this._draw = t } }, { key: "destination", get: function() { return this.initialize(), this._destination }, set: function(t) { _a(!this._initialized, "The destination cannot be set after initialization."), this._destination = t } }, { key: "createAudioWorkletNode", value: function(t, e) { return function(t, e, n) { return _a(Aa(ha), "This node only works in a secure context (https or localhost)"), new ha(t, e, n) }(this.rawContext, t, e) } }, { key: "addAudioWorkletModule", value: function(t, e) { return (0, Fa.__awaiter)(this, void 0, void 0, m().mark((function n() { return m().wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return _a(Aa(this.rawContext.audioWorklet), "AudioWorkletNode is only available in a secure context (https or localhost)"), this._workletModules.has(e) || this._workletModules.set(e, this.rawContext.audioWorklet.addModule(t)), n.next = 4, this._workletModules.get(e);
                                    case 4:
                                    case "end":
                                        return n.stop() } }), n, this) }))) } }, { key: "workletsAreReady", value: function() { return (0, Fa.__awaiter)(this, void 0, void 0, m().mark((function t() { var e; return m().wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return e = [], this._workletModules.forEach((function(t) { return e.push(t) })), t.next = 4, Promise.all(e);
                                    case 4:
                                    case "end":
                                        return t.stop() } }), t, this) }))) } }, { key: "updateInterval", get: function() { return this._ticker.updateInterval }, set: function(t) { this._ticker.updateInterval = t } }, { key: "clockSource", get: function() { return this._ticker.type }, set: function(t) { this._ticker.type = t } }, { key: "latencyHint", get: function() { return this._latencyHint } }, { key: "_setLatencyHint", value: function(t) { var e = 0; if (this._latencyHint = t, Ra(t)) switch (t) {
                            case "interactive":
                                e = .1; break;
                            case "playback":
                                e = .5; break;
                            case "balanced":
                                e = .25 }
                        this.lookAhead = e, this.updateInterval = e / 2 } }, { key: "rawContext", get: function() { return this._context } }, { key: "now", value: function() { return this._context.currentTime + this.lookAhead } }, { key: "immediate", value: function() { return this._context.currentTime } }, { key: "resume", value: function() { return qa(this._context) ? this._context.resume() : Promise.resolve() } }, { key: "close", value: function() { return (0, Fa.__awaiter)(this, void 0, void 0, m().mark((function t() { return m().wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!qa(this._context)) { t.next = 3; break } return t.next = 3, this._context.close();
                                    case 3:
                                        this._initialized && lu(this);
                                    case 4:
                                    case "end":
                                        return t.stop() } }), t, this) }))) } }, { key: "getConstant", value: function(t) { if (this._constants.has(t)) return this._constants.get(t); for (var e = this._context.createBuffer(1, 128, this._context.sampleRate), n = e.getChannelData(0), r = 0; r < n.length; r++) n[r] = t; var o = this._context.createBufferSource(); return o.channelCount = 1, o.channelCountMode = "explicit", o.buffer = e, o.loop = !0, o.start(0), this._constants.set(t, o), o } }, { key: "dispose", value: function() { var t = this; return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._ticker.dispose(), this._timeouts.dispose(), Object.keys(this._constants).map((function(e) { return t._constants[e].disconnect() })), this } }, { key: "_timeoutLoop", value: function() { for (var t = this.now(), e = this._timeouts.peek(); this._timeouts.length && e && e.time <= t;) e.callback(), this._timeouts.shift(), e = this._timeouts.peek() } }, { key: "setTimeout", value: function(t, e) { this._timeoutIds++; var n = this.now(); return this._timeouts.add({ callback: t, id: this._timeoutIds, time: n + e }), this._timeoutIds } }, { key: "clearTimeout", value: function(t) { var e = this; return this._timeouts.forEach((function(n) { n.id === t && e._timeouts.remove(n) })), this } }, { key: "clearInterval", value: function(t) { return this.clearTimeout(t) } }, { key: "setInterval", value: function(t, e) { var n = this,
                            r = ++this._timeoutIds; return function o() { var i = n.now();
                            n._timeouts.add({ callback: function() { t(), o() }, id: r, time: i + e }) }(), r } }], [{ key: "getDefaults", value: function() { return { clockSource: "worker", latencyHint: "interactive", lookAhead: .1, updateInterval: .05 } } }]), n }(du);

            function gu(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var yu = function(t) {
                (0, G.Z)(n, t); var e = gu(n);

                function n() { var t; return (0, w.Z)(this, n), (t = e.apply(this, arguments)).lookAhead = 0, t.latencyHint = 0, t.isOffline = !1, t } return (0, _.Z)(n, [{ key: "createAnalyser", value: function() { return {} } }, { key: "createOscillator", value: function() { return {} } }, { key: "createBufferSource", value: function() { return {} } }, { key: "createBiquadFilter", value: function() { return {} } }, { key: "createBuffer", value: function(t, e, n) { return {} } }, { key: "createChannelMerger", value: function(t) { return {} } }, { key: "createChannelSplitter", value: function(t) { return {} } }, { key: "createConstantSource", value: function() { return {} } }, { key: "createConvolver", value: function() { return {} } }, { key: "createDelay", value: function(t) { return {} } }, { key: "createDynamicsCompressor", value: function() { return {} } }, { key: "createGain", value: function() { return {} } }, { key: "createIIRFilter", value: function(t, e) { return {} } }, { key: "createPanner", value: function() { return {} } }, { key: "createPeriodicWave", value: function(t, e, n) { return {} } }, { key: "createStereoPanner", value: function() { return {} } }, { key: "createWaveShaper", value: function() { return {} } }, { key: "createMediaStreamSource", value: function(t) { return {} } }, { key: "createMediaElementSource", value: function(t) { return {} } }, { key: "createMediaStreamDestination", value: function() { return {} } }, { key: "decodeAudioData", value: function(t) { return Promise.resolve({}) } }, { key: "createAudioWorkletNode", value: function(t, e) { return {} } }, { key: "rawContext", get: function() { return {} } }, { key: "addAudioWorkletModule", value: function(t, e) { return (0, Fa.__awaiter)(this, void 0, void 0, m().mark((function t() { return m().wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", Promise.resolve());
                                    case 1:
                                    case "end":
                                        return t.stop() } }), t) }))) } }, { key: "resume", value: function() { return Promise.resolve() } }, { key: "setTimeout", value: function(t, e) { return 0 } }, { key: "clearTimeout", value: function(t) { return this } }, { key: "setInterval", value: function(t, e) { return 0 } }, { key: "clearInterval", value: function(t) { return this } }, { key: "getConstant", value: function(t) { return {} } }, { key: "currentTime", get: function() { return 0 } }, { key: "state", get: function() { return {} } }, { key: "sampleRate", get: function() { return 0 } }, { key: "listener", get: function() { return {} } }, { key: "transport", get: function() { return {} } }, { key: "draw", get: function() { return {} }, set: function(t) {} }, { key: "destination", get: function() { return {} }, set: function(t) {} }, { key: "now", value: function() { return 0 } }, { key: "immediate", value: function() { return 0 } }]), n }(du);

            function bu(t, e) { Za(e) ? e.forEach((function(e) { return bu(t, e) })) : Object.defineProperty(t, e, { enumerable: !0, writable: !1 }) }

            function _u(t, e) { Za(e) ? e.forEach((function(e) { return _u(t, e) })) : Object.defineProperty(t, e, { writable: !0 }) } var wu = function() {};

            function ku(t, e) { var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (!n) { if (Array.isArray(t) || (n = function(t, e) { if (!t) return; if ("string" == typeof t) return xu(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return xu(t, e) }(t)) || e && t && "number" == typeof t.length) { n && (t = n); var r = 0,
                            o = function() {}; return { s: o, n: function() { return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] } }, e: function(t) { throw t }, f: o } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var i, a = !0,
                    u = !1; return { s: function() { n = n.call(t) }, n: function() { var t = n.next(); return a = t.done, t }, e: function(t) { u = !0, i = t }, f: function() { try { a || null == n.return || n.return() } finally { if (u) throw i } } } }

            function xu(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

            function Ou(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Su = function(t) {
                (0, G.Z)(n, t); var e = Ou(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this)).name = "ToneAudioBuffer", t.onload = wu; var r = Ya(n.getDefaults(), arguments, ["url", "onload", "onerror"]); return t.reverse = r.reverse, t.onload = r.onload, r.url && Wa(r.url) || r.url instanceof n ? t.set(r.url) : Ra(r.url) && t.load(r.url).catch(r.onerror), t } return (0, _.Z)(n, [{ key: "sampleRate", get: function() { return this._buffer ? this._buffer.sampleRate : Pu().sampleRate } }, { key: "set", value: function(t) { var e = this; return t instanceof n ? t.loaded ? this._buffer = t.get() : t.onload = function() { e.set(t), e.onload(e) } : this._buffer = t, this._reversed && this._reverse(), this } }, { key: "get", value: function() { return this._buffer } }, { key: "load", value: function(t) { return (0, Fa.__awaiter)(this, void 0, void 0, m().mark((function e() { var r, o, i = this; return m().wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = n.load(t).then((function(t) { i.set(t), i.onload(i) })), n.downloads.push(r), e.prev = 2, e.next = 5, r;
                                    case 5:
                                        return e.prev = 5, o = n.downloads.indexOf(r), n.downloads.splice(o, 1), e.finish(5);
                                    case 9:
                                        return e.abrupt("return", this);
                                    case 10:
                                    case "end":
                                        return e.stop() } }), e, this, [
                                [2, , 5, 9]
                            ]) }))) } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._buffer = void 0, this } }, { key: "fromArray", value: function(t) { for (var e = Za(t) && t[0].length > 0, n = e ? t.length : 1, r = e ? t[0].length : t.length, o = Pu(), i = o.createBuffer(n, r, o.sampleRate), a = e || 1 !== n ? t : [t], u = 0; u < n; u++) i.copyToChannel(a[u], u); return this._buffer = i, this } }, { key: "toMono", value: function(t) { if (Ea(t)) this.fromArray(this.toArray(t));
                        else { for (var e = new Float32Array(this.length), n = this.numberOfChannels, r = 0; r < n; r++)
                                for (var o = this.toArray(r), i = 0; i < o.length; i++) e[i] += o[i];
                            e = e.map((function(t) { return t / n })), this.fromArray(e) } return this } }, { key: "toArray", value: function(t) { if (Ea(t)) return this.getChannelData(t); if (1 === this.numberOfChannels) return this.toArray(0); for (var e = [], n = 0; n < this.numberOfChannels; n++) e[n] = this.getChannelData(n); return e } }, { key: "getChannelData", value: function(t) { return this._buffer ? this._buffer.getChannelData(t) : new Float32Array(0) } }, { key: "slice", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.duration,
                            r = Math.floor(t * this.sampleRate),
                            o = Math.floor(e * this.sampleRate);
                        _a(r < o, "The start time must be less than the end time"); for (var i = o - r, a = Pu().createBuffer(this.numberOfChannels, i, this.sampleRate), u = 0; u < this.numberOfChannels; u++) a.copyToChannel(this.getChannelData(u).subarray(r, o), u); return new n(a) } }, { key: "_reverse", value: function() { if (this.loaded)
                            for (var t = 0; t < this.numberOfChannels; t++) this.getChannelData(t).reverse(); return this } }, { key: "loaded", get: function() { return this.length > 0 } }, { key: "duration", get: function() { return this._buffer ? this._buffer.duration : 0 } }, { key: "length", get: function() { return this._buffer ? this._buffer.length : 0 } }, { key: "numberOfChannels", get: function() { return this._buffer ? this._buffer.numberOfChannels : 0 } }, { key: "reverse", get: function() { return this._reversed }, set: function(t) { this._reversed !== t && (this._reversed = t, this._reverse()) } }], [{ key: "getDefaults", value: function() { return { onerror: wu, onload: wu, reverse: !1 } } }, { key: "fromArray", value: function(t) { return (new n).fromArray(t) } }, { key: "fromUrl", value: function(t) { return (0, Fa.__awaiter)(this, void 0, void 0, m().mark((function e() { var r; return m().wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = new n, e.next = 3, r.load(t);
                                    case 3:
                                        return e.abrupt("return", e.sent);
                                    case 4:
                                    case "end":
                                        return e.stop() } }), e) }))) } }, { key: "load", value: function(t) { return (0, Fa.__awaiter)(this, void 0, void 0, m().mark((function e() { var r, o, i, a, u, s, c, l, f, h; return m().wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(r = t.match(/\[([^\]\[]+\|.+)\]$/))) { e.next = 23; break }
                                        o = r[1].split("|"), i = o[0], a = ku(o), e.prev = 5, a.s();
                                    case 7:
                                        if ((u = a.n()).done) { e.next = 14; break } if (s = u.value, !n.supportsType(s)) { e.next = 12; break } return i = s, e.abrupt("break", 14);
                                    case 12:
                                        e.next = 7; break;
                                    case 14:
                                        e.next = 19; break;
                                    case 16:
                                        e.prev = 16, e.t0 = e.catch(5), a.e(e.t0);
                                    case 19:
                                        return e.prev = 19, a.f(), e.finish(19);
                                    case 22:
                                        t = t.replace(r[0], i);
                                    case 23:
                                        return c = "" === n.baseUrl || n.baseUrl.endsWith("/") ? n.baseUrl : n.baseUrl + "/", e.next = 26, fetch(c + t);
                                    case 26:
                                        if ((l = e.sent).ok) { e.next = 29; break } throw new Error("could not load url: ".concat(t));
                                    case 29:
                                        return e.next = 31, l.arrayBuffer();
                                    case 31:
                                        return f = e.sent, e.next = 34, Pu().decodeAudioData(f);
                                    case 34:
                                        return h = e.sent, e.abrupt("return", h);
                                    case 36:
                                    case "end":
                                        return e.stop() } }), e, null, [
                                [5, 16, 19, 22]
                            ]) }))) } }, { key: "supportsType", value: function(t) { var e = t.split("."),
                            n = e[e.length - 1]; return "" !== document.createElement("audio").canPlayType("audio/" + n) } }, { key: "loaded", value: function() { return (0, Fa.__awaiter)(this, void 0, void 0, m().mark((function t() { return m().wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Promise.resolve();
                                    case 2:
                                        if (!n.downloads.length) { t.next = 7; break } return t.next = 5, n.downloads[0];
                                    case 5:
                                        t.next = 2; break;
                                    case 7:
                                    case "end":
                                        return t.stop() } }), t) }))) } }]), n }($a);

            function Cu(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } }
            Su.baseUrl = "", Su.downloads = []; var Au = function(t) {
                    (0, G.Z)(n, t); var e = Cu(n);

                    function n() { var t; return (0, w.Z)(this, n), (t = e.call(this, { clockSource: "offline", context: Ua(arguments[0]) ? arguments[0] : Ma(arguments[0], arguments[1] * arguments[2], arguments[2]), lookAhead: 0, updateInterval: Ua(arguments[0]) ? 128 / arguments[0].sampleRate : 128 / arguments[2] })).name = "OfflineContext", t._currentTime = 0, t.isOffline = !0, t._duration = Ua(arguments[0]) ? arguments[0].length / arguments[0].sampleRate : arguments[1], t } return (0, _.Z)(n, [{ key: "now", value: function() { return this._currentTime } }, { key: "currentTime", get: function() { return this._currentTime } }, { key: "_renderClock", value: function(t) { return (0, Fa.__awaiter)(this, void 0, void 0, m().mark((function e() { var n, r; return m().wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            n = 0;
                                        case 1:
                                            if (!(this._duration - this._currentTime >= 0)) { e.next = 11; break } if (this.emit("tick"), this._currentTime += 128 / this.sampleRate, n++, r = Math.floor(this.sampleRate / 128), !t || n % r != 0) { e.next = 9; break } return e.next = 9, new Promise((function(t) { return setTimeout(t, 1) }));
                                        case 9:
                                            e.next = 1; break;
                                        case 11:
                                        case "end":
                                            return e.stop() } }), e, this) }))) } }, { key: "render", value: function() { var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]; return (0, Fa.__awaiter)(this, void 0, void 0, m().mark((function e() { var n; return m().wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.workletsAreReady();
                                        case 2:
                                            return e.next = 4, this._renderClock(t);
                                        case 4:
                                            return e.next = 6, this._context.startRendering();
                                        case 6:
                                            return n = e.sent, e.abrupt("return", new Su(n));
                                        case 8:
                                        case "end":
                                            return e.stop() } }), e, this) }))) } }, { key: "close", value: function() { return Promise.resolve() } }]), n }(mu),
                Tu = new yu,
                Eu = Tu;

            function Pu() { return Eu === Tu && Na && function(t) { Eu = qa(t) ? new mu(t) : Ua(t) ? new Au(t) : t }(new mu), Eu } if (Ia && !Ia.TONE_SILENCE_LOGGING) { var Zu = "v";
                0; var Ru = " * Tone.js ".concat(Zu).concat(g, " * ");
                console.log("%c".concat(Ru), "background: #000; color: #fff") }

            function Du(t) { return Math.pow(2, t / 12) } var ju = 440;

            function Mu(t) { return Math.round(Iu(t)) }

            function Iu(t) { return 69 + 12 * Math.log2(t / ju) }

            function Nu(t) { return ju * Math.pow(2, (t - 69) / 12) }

            function Bu(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Fu = function(t) {
                (0, G.Z)(n, t); var e = Bu(n);

                function n(t, r, o) { var i; return (0, w.Z)(this, n), (i = e.call(this)).defaultUnits = "s", i._val = r, i._units = o, i.context = t, i._expressions = i._getExpressions(), i } return (0, _.Z)(n, [{ key: "_getExpressions", value: function() { var t = this; return { hz: { method: function(e) { return t._frequencyToUnits(parseFloat(e)) }, regexp: /^(\d+(?:\.\d+)?)hz$/i }, i: { method: function(e) { return t._ticksToUnits(parseInt(e, 10)) }, regexp: /^(\d+)i$/i }, m: { method: function(e) { return t._beatsToUnits(parseInt(e, 10) * t._getTimeSignature()) }, regexp: /^(\d+)m$/i }, n: { method: function(e, n) { var r = parseInt(e, 10),
                                        o = "." === n ? 1.5 : 1; return 1 === r ? t._beatsToUnits(t._getTimeSignature()) * o : t._beatsToUnits(4 / r) * o }, regexp: /^(\d+)n(\.?)$/i }, number: { method: function(e) { return t._expressions[t.defaultUnits].method.call(t, e) }, regexp: /^(\d+(?:\.\d+)?)$/ }, s: { method: function(e) { return t._secondsToUnits(parseFloat(e)) }, regexp: /^(\d+(?:\.\d+)?)s$/ }, samples: { method: function(e) { return parseInt(e, 10) / t.context.sampleRate }, regexp: /^(\d+)samples$/ }, t: { method: function(e) { var n = parseInt(e, 10); return t._beatsToUnits(8 / (3 * Math.floor(n))) }, regexp: /^(\d+)t$/i }, tr: { method: function(e, n, r) { var o = 0; return e && "0" !== e && (o += t._beatsToUnits(t._getTimeSignature() * parseFloat(e))), n && "0" !== n && (o += t._beatsToUnits(parseFloat(n))), r && "0" !== r && (o += t._beatsToUnits(parseFloat(r) / 4)), o }, regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/ } } } }, { key: "valueOf", value: function() { if (this._val instanceof n && this.fromType(this._val), Ca(this._val)) return this._noArg(); if (Ra(this._val) && Ca(this._units)) { for (var t in this._expressions)
                                if (this._expressions[t].regexp.test(this._val.trim())) { this._units = t; break } } else if (Pa(this._val)) { var e = 0; for (var r in this._val)
                                if (Aa(this._val[r])) { var o = this._val[r];
                                    e += new this.constructor(this.context, r).valueOf() * o }
                            return e } if (Aa(this._units)) { var i = this._expressions[this._units],
                                a = this._val.toString().trim().match(i.regexp); return a ? i.method.apply(this, a.slice(1)) : i.method.call(this, this._val) } return Ra(this._val) ? parseFloat(this._val) : this._val } }, { key: "_frequencyToUnits", value: function(t) { return 1 / t } }, { key: "_beatsToUnits", value: function(t) { return 60 / this._getBpm() * t } }, { key: "_secondsToUnits", value: function(t) { return t } }, { key: "_ticksToUnits", value: function(t) { return t * this._beatsToUnits(1) / this._getPPQ() } }, { key: "_noArg", value: function() { return this._now() } }, { key: "_getBpm", value: function() { return this.context.transport.bpm.value } }, { key: "_getTimeSignature", value: function() { return this.context.transport.timeSignature } }, { key: "_getPPQ", value: function() { return this.context.transport.PPQ } }, { key: "fromType", value: function(t) { switch (this._units = void 0, this.defaultUnits) {
                            case "s":
                                this._val = t.toSeconds(); break;
                            case "i":
                                this._val = t.toTicks(); break;
                            case "hz":
                                this._val = t.toFrequency(); break;
                            case "midi":
                                this._val = t.toMidi() } return this } }, { key: "toFrequency", value: function() { return 1 / this.toSeconds() } }, { key: "toSamples", value: function() { return this.toSeconds() * this.context.sampleRate } }, { key: "toMilliseconds", value: function() { return 1e3 * this.toSeconds() } }]), n }($a);

            function Lu(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Vu = function(t) {
                (0, G.Z)(n, t); var e = Lu(n);

                function n() { var t; return (0, w.Z)(this, n), (t = e.apply(this, arguments)).name = "TimeClass", t } return (0, _.Z)(n, [{ key: "_getExpressions", value: function() { var t = this; return Object.assign((0, Ba.Z)((0, Y.Z)(n.prototype), "_getExpressions", this).call(this), { now: { method: function(e) { return t._now() + new t.constructor(t.context, e).valueOf() }, regexp: /^\+(.+)/ }, quantize: { method: function(e) { var r = new n(t.context, e).valueOf(); return t._secondsToUnits(t.context.transport.nextSubdivision(r)) }, regexp: /^@(.+)/ } }) } }, { key: "quantize", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                            n = new this.constructor(this.context, t).valueOf(),
                            r = this.valueOf(),
                            o = Math.round(r / n),
                            i = o * n,
                            a = i - r; return r + a * e } }, { key: "toNotation", value: function() { for (var t = this, e = this.toSeconds(), r = ["1m"], o = 1; o < 9; o++) { var i = Math.pow(2, o);
                            r.push(i + "n."), r.push(i + "n"), r.push(i + "t") }
                        r.push("0"); var a = r[0],
                            u = new n(this.context, r[0]).toSeconds(); return r.forEach((function(r) { var o = new n(t.context, r).toSeconds();
                            Math.abs(o - e) < Math.abs(u - e) && (a = r, u = o) })), a } }, { key: "toBarsBeatsSixteenths", value: function() { var t = this._beatsToUnits(1),
                            e = this.valueOf() / t;
                        e = parseFloat(e.toFixed(4)); var n = Math.floor(e / this._getTimeSignature()),
                            r = e % 1 * 4;
                        e = Math.floor(e) % this._getTimeSignature(); var o = r.toString(); return o.length > 3 && (r = parseFloat(parseFloat(o).toFixed(3))), [n, e, r].join(":") } }, { key: "toTicks", value: function() { var t = this._beatsToUnits(1),
                            e = this.valueOf() / t; return Math.round(e * this._getPPQ()) } }, { key: "toSeconds", value: function() { return this.valueOf() } }, { key: "toMidi", value: function() { return Mu(this.toFrequency()) } }, { key: "_now", value: function() { return this.context.now() } }]), n }(Fu);

            function zu(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Uu = function(t) {
                    (0, G.Z)(n, t); var e = zu(n);

                    function n() { var t; return (0, w.Z)(this, n), (t = e.apply(this, arguments)).name = "Frequency", t.defaultUnits = "hz", t } return (0, _.Z)(n, [{ key: "_getExpressions", value: function() { return Object.assign({}, (0, Ba.Z)((0, Y.Z)(n.prototype), "_getExpressions", this).call(this), { midi: { regexp: /^(\d+(?:\.\d+)?midi)/, method: function(t) { return "midi" === this.defaultUnits ? t : n.mtof(t) } }, note: { regexp: /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i, method: function(t, e) { var r = qu[t.toLowerCase()] + 12 * (parseInt(e, 10) + 1); return "midi" === this.defaultUnits ? r : n.mtof(r) } }, tr: { regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/, method: function(t, e, n) { var r = 1; return t && "0" !== t && (r *= this._beatsToUnits(this._getTimeSignature() * parseFloat(t))), e && "0" !== e && (r *= this._beatsToUnits(parseFloat(e))), n && "0" !== n && (r *= this._beatsToUnits(parseFloat(n) / 4)), r } } }) } }, { key: "transpose", value: function(t) { return new n(this.context, this.valueOf() * Du(t)) } }, { key: "harmonize", value: function(t) { var e = this; return t.map((function(t) { return e.transpose(t) })) } }, { key: "toMidi", value: function() { return Mu(this.valueOf()) } }, { key: "toNote", value: function() { var t = this.toFrequency(),
                                e = Math.log2(t / n.A4),
                                r = Math.round(12 * e) + 57,
                                o = Math.floor(r / 12); return o < 0 && (r += -12 * o), Wu[r % 12] + o.toString() } }, { key: "toSeconds", value: function() { return 1 / (0, Ba.Z)((0, Y.Z)(n.prototype), "toSeconds", this).call(this) } }, { key: "toTicks", value: function() { var t = this._beatsToUnits(1),
                                e = this.valueOf() / t; return Math.floor(e * this._getPPQ()) } }, { key: "_noArg", value: function() { return 0 } }, { key: "_frequencyToUnits", value: function(t) { return t } }, { key: "_ticksToUnits", value: function(t) { return 1 / (60 * t / (this._getBpm() * this._getPPQ())) } }, { key: "_beatsToUnits", value: function(t) { return 1 / (0, Ba.Z)((0, Y.Z)(n.prototype), "_beatsToUnits", this).call(this, t) } }, { key: "_secondsToUnits", value: function(t) { return 1 / t } }], [{ key: "A4", get: function() { return ju }, set: function(t) {! function(t) { ju = t }(t) } }, { key: "mtof", value: function(t) { return Nu(t) } }, { key: "ftom", value: function(t) { return Mu(t) } }]), n }(Vu),
                qu = { cbb: -2, cb: -1, c: 0, "c#": 1, cx: 2, dbb: 0, db: 1, d: 2, "d#": 3, dx: 4, ebb: 2, eb: 3, e: 4, "e#": 5, ex: 6, fbb: 3, fb: 4, f: 5, "f#": 6, fx: 7, gbb: 5, gb: 6, g: 7, "g#": 8, gx: 9, abb: 7, ab: 8, a: 9, "a#": 10, ax: 11, bbb: 9, bb: 10, b: 11, "b#": 12, bx: 13 },
                Wu = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

            function Gu(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Hu = function(t) {
                (0, G.Z)(n, t); var e = Gu(n);

                function n() { var t; return (0, w.Z)(this, n), (t = e.apply(this, arguments)).name = "TransportTime", t } return (0, _.Z)(n, [{ key: "_now", value: function() { return this.context.transport.seconds } }]), n }(Vu);

            function Yu(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Xu = function(t) {
                (0, G.Z)(n, t); var e = Yu(n);

                function n() { var t;
                    (0, w.Z)(this, n), t = e.call(this); var r = Ya(n.getDefaults(), arguments, ["context"]); return t.defaultContext ? t.context = t.defaultContext : t.context = r.context, t } return (0, _.Z)(n, [{ key: "now", value: function() { return this.context.currentTime + this.context.lookAhead } }, { key: "immediate", value: function() { return this.context.currentTime } }, { key: "sampleTime", get: function() { return 1 / this.context.sampleRate } }, { key: "blockTime", get: function() { return 128 / this.context.sampleRate } }, { key: "toSeconds", value: function(t) { return new Vu(this.context, t).toSeconds() } }, { key: "toFrequency", value: function(t) { return new Uu(this.context, t).toFrequency() } }, { key: "toTicks", value: function(t) { return new Hu(this.context, t).toTicks() } }, { key: "_getPartialProperties", value: function(t) { var e = this.get(); return Object.keys(e).forEach((function(n) { Ca(t[n]) && delete e[n] })), e } }, { key: "get", value: function() { var t = this,
                            e = this.constructor.getDefaults(); return Object.keys(e).forEach((function(r) { if (Reflect.has(t, r)) { var o = t[r];
                                Aa(o) && Aa(o.value) && Aa(o.setValueAtTime) ? e[r] = o.value : o instanceof n ? e[r] = o._getPartialProperties(e[r]) : Za(o) || Ea(o) || Ra(o) || "boolean" == typeof o ? e[r] = o : delete e[r] } })), e } }, { key: "set", value: function(t) { var e = this; return Object.keys(t).forEach((function(r) { Reflect.has(e, r) && Aa(e[r]) && (e[r] && Aa(e[r].value) && Aa(e[r].setValueAtTime) ? e[r].value !== t[r] && (e[r].value = t[r]) : e[r] instanceof n ? e[r].set(t[r]) : e[r] = t[r]) })), this } }], [{ key: "getDefaults", value: function() { return { context: Pu() } } }]), n }($a);

            function Qu(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var $u = function(t) {
                (0, G.Z)(n, t); var e = Qu(n);

                function n() { var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "stopped"; return (0, w.Z)(this, n), (t = e.call(this)).name = "StateTimeline", t._initial = r, t.setStateAtTime(t._initial, 0), t } return (0, _.Z)(n, [{ key: "getValueAtTime", value: function(t) { var e = this.get(t); return null !== e ? e.state : this._initial } }, { key: "setStateAtTime", value: function(t, e, n) { return wa(e, 0), this.add(Object.assign({}, n, { state: t, time: e })), this } }, { key: "getLastState", value: function(t, e) { for (var n = this._search(e); n >= 0; n--) { var r = this._timeline[n]; if (r.state === t) return r } } }, { key: "getNextState", value: function(t, e) { var n = this._search(e); if (-1 !== n)
                            for (var r = n; r < this._timeline.length; r++) { var o = this._timeline[r]; if (o.state === t) return o } } }]), n }(iu);

            function Ju(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Ku = function(t) {
                (0, G.Z)(n, t); var e = Ju(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments, ["param", "units", "convert"]))).name = "Param", t.overridden = !1, t._minOutput = 1e-7; var r = Ya(n.getDefaults(), arguments, ["param", "units", "convert"]); for (_a(Aa(r.param) && (Va(r.param) || r.param instanceof n), "param must be an AudioParam"); !Va(r.param);) r.param = r.param._param; return t._swappable = !!Aa(r.swappable) && r.swappable, t._swappable ? (t.input = t.context.createGain(), t._param = r.param, t.input.connect(t._param)) : t._param = t.input = r.param, t._events = new iu(1e3), t._initialValue = t._param.defaultValue, t.units = r.units, t.convert = r.convert, t._minValue = r.minValue, t._maxValue = r.maxValue, Aa(r.value) && r.value !== t._toType(t._initialValue) && t.setValueAtTime(r.value, 0), t } return (0, _.Z)(n, [{ key: "value", get: function() { var t = this.now(); return this.getValueAtTime(t) }, set: function(t) { this.cancelScheduledValues(this.now()), this.setValueAtTime(t, this.now()) } }, { key: "minValue", get: function() { return Aa(this._minValue) ? this._minValue : "time" === this.units || "frequency" === this.units || "normalRange" === this.units || "positive" === this.units || "transportTime" === this.units || "ticks" === this.units || "bpm" === this.units || "hertz" === this.units || "samples" === this.units ? 0 : "audioRange" === this.units ? -1 : "decibels" === this.units ? -1 / 0 : this._param.minValue } }, { key: "maxValue", get: function() { return Aa(this._maxValue) ? this._maxValue : "normalRange" === this.units || "audioRange" === this.units ? 1 : this._param.maxValue } }, { key: "_is", value: function(t, e) { return this.units === e } }, { key: "_assertRange", value: function(t) { return Aa(this.maxValue) && Aa(this.minValue) && wa(t, this._fromType(this.minValue), this._fromType(this.maxValue)), t } }, { key: "_fromType", value: function(t) { return this.convert && !this.overridden ? this._is(t, "time") ? this.toSeconds(t) : this._is(t, "decibels") ? (e = t, Math.pow(10, e / 20)) : this._is(t, "frequency") ? this.toFrequency(t) : t : this.overridden ? 0 : t; var e } }, { key: "_toType", value: function(t) { return this.convert && "decibels" === this.units ? (e = t, Math.log(e) / Math.LN10 * 20) : t; var e } }, { key: "setValueAtTime", value: function(t, e) { var n = this.toSeconds(e),
                            r = this._fromType(t); return _a(isFinite(r) && isFinite(n), "Invalid argument(s) to setValueAtTime: ".concat(JSON.stringify(t), ", ").concat(JSON.stringify(e))), this._assertRange(r), this.log(this.units, "setValueAtTime", t, n), this._events.add({ time: n, type: "setValueAtTime", value: r }), this._param.setValueAtTime(r, n), this } }, { key: "getValueAtTime", value: function(t) { var e = Math.max(this.toSeconds(t), 0),
                            n = this._events.getAfter(e),
                            r = this._events.get(e),
                            o = this._initialValue; if (null === r) o = this._initialValue;
                        else if ("setTargetAtTime" !== r.type || null !== n && "setValueAtTime" !== n.type)
                            if (null === n) o = r.value;
                            else if ("linearRampToValueAtTime" === n.type || "exponentialRampToValueAtTime" === n.type) { var i = r.value; if ("setTargetAtTime" === r.type) { var a = this._events.getBefore(r.time);
                                i = null === a ? this._initialValue : a.value }
                            o = "linearRampToValueAtTime" === n.type ? this._linearInterpolate(r.time, i, n.time, n.value, e) : this._exponentialInterpolate(r.time, i, n.time, n.value, e) } else o = r.value;
                        else { var u, s = this._events.getBefore(r.time);
                            u = null === s ? this._initialValue : s.value, "setTargetAtTime" === r.type && (o = this._exponentialApproach(r.time, u, r.value, r.constant, e)) } return this._toType(o) } }, { key: "setRampPoint", value: function(t) { t = this.toSeconds(t); var e = this.getValueAtTime(t); return this.cancelAndHoldAtTime(t), 0 === this._fromType(e) && (e = this._toType(this._minOutput)), this.setValueAtTime(e, t), this } }, { key: "linearRampToValueAtTime", value: function(t, e) { var n = this._fromType(t),
                            r = this.toSeconds(e); return _a(isFinite(n) && isFinite(r), "Invalid argument(s) to linearRampToValueAtTime: ".concat(JSON.stringify(t), ", ").concat(JSON.stringify(e))), this._assertRange(n), this._events.add({ time: r, type: "linearRampToValueAtTime", value: n }), this.log(this.units, "linearRampToValueAtTime", t, r), this._param.linearRampToValueAtTime(n, r), this } }, { key: "exponentialRampToValueAtTime", value: function(t, e) { var n = this._fromType(t);
                        n = nu(n, 0) ? this._minOutput : n, this._assertRange(n); var r = this.toSeconds(e); return _a(isFinite(n) && isFinite(r), "Invalid argument(s) to exponentialRampToValueAtTime: ".concat(JSON.stringify(t), ", ").concat(JSON.stringify(e))), this._events.add({ time: r, type: "exponentialRampToValueAtTime", value: n }), this.log(this.units, "exponentialRampToValueAtTime", t, r), this._param.exponentialRampToValueAtTime(n, r), this } }, { key: "exponentialRampTo", value: function(t, e, n) { return n = this.toSeconds(n), this.setRampPoint(n), this.exponentialRampToValueAtTime(t, n + this.toSeconds(e)), this } }, { key: "linearRampTo", value: function(t, e, n) { return n = this.toSeconds(n), this.setRampPoint(n), this.linearRampToValueAtTime(t, n + this.toSeconds(e)), this } }, { key: "targetRampTo", value: function(t, e, n) { return n = this.toSeconds(n), this.setRampPoint(n), this.exponentialApproachValueAtTime(t, n, e), this } }, { key: "exponentialApproachValueAtTime", value: function(t, e, n) { e = this.toSeconds(e), n = this.toSeconds(n); var r = Math.log(n + 1) / Math.log(200); return this.setTargetAtTime(t, e, r), this.cancelAndHoldAtTime(e + .9 * n), this.linearRampToValueAtTime(t, e + n), this } }, { key: "setTargetAtTime", value: function(t, e, n) { var r = this._fromType(t);
                        _a(isFinite(n) && n > 0, "timeConstant must be a number greater than 0"); var o = this.toSeconds(e); return this._assertRange(r), _a(isFinite(r) && isFinite(o), "Invalid argument(s) to setTargetAtTime: ".concat(JSON.stringify(t), ", ").concat(JSON.stringify(e))), this._events.add({ constant: n, time: o, type: "setTargetAtTime", value: r }), this.log(this.units, "setTargetAtTime", t, o, n), this._param.setTargetAtTime(r, o, n), this } }, { key: "setValueCurveAtTime", value: function(t, e, n) { var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                        n = this.toSeconds(n), e = this.toSeconds(e); var o = this._fromType(t[0]) * r;
                        this.setValueAtTime(this._toType(o), e); for (var i = n / (t.length - 1), a = 1; a < t.length; a++) { var u = this._fromType(t[a]) * r;
                            this.linearRampToValueAtTime(this._toType(u), e + a * i) } return this } }, { key: "cancelScheduledValues", value: function(t) { var e = this.toSeconds(t); return _a(isFinite(e), "Invalid argument to cancelScheduledValues: ".concat(JSON.stringify(t))), this._events.cancel(e), this._param.cancelScheduledValues(e), this.log(this.units, "cancelScheduledValues", e), this } }, { key: "cancelAndHoldAtTime", value: function(t) { var e = this.toSeconds(t),
                            n = this._fromType(this.getValueAtTime(e));
                        _a(isFinite(e), "Invalid argument to cancelAndHoldAtTime: ".concat(JSON.stringify(t))), this.log(this.units, "cancelAndHoldAtTime", e, "value=" + n); var r = this._events.get(e),
                            o = this._events.getAfter(e); return r && nu(r.time, e) ? o ? (this._param.cancelScheduledValues(o.time), this._events.cancel(o.time)) : (this._param.cancelAndHoldAtTime(e), this._events.cancel(e + this.sampleTime)) : o && (this._param.cancelScheduledValues(o.time), this._events.cancel(o.time), "linearRampToValueAtTime" === o.type ? this.linearRampToValueAtTime(this._toType(n), e) : "exponentialRampToValueAtTime" === o.type && this.exponentialRampToValueAtTime(this._toType(n), e)), this._events.add({ time: e, type: "setValueAtTime", value: n }), this._param.setValueAtTime(n, e), this } }, { key: "rampTo", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .1,
                            n = arguments.length > 2 ? arguments[2] : void 0; return "frequency" === this.units || "bpm" === this.units || "decibels" === this.units ? this.exponentialRampTo(t, e, n) : this.linearRampTo(t, e, n), this } }, { key: "apply", value: function(t) { var e = this.context.currentTime;
                        t.setValueAtTime(this.getValueAtTime(e), e); var n = this._events.get(e); if (n && "setTargetAtTime" === n.type)
                            for (var r = this._events.getAfter(n.time), o = r ? r.time : e + 2, i = (o - e) / 10, a = e; a < o; a += i) t.linearRampToValueAtTime(this.getValueAtTime(a), a); return this._events.forEachAfter(this.context.currentTime, (function(e) { "cancelScheduledValues" === e.type ? t.cancelScheduledValues(e.time) : "setTargetAtTime" === e.type ? t.setTargetAtTime(e.value, e.time, e.constant) : t[e.type](e.value, e.time) })), this } }, { key: "setParam", value: function(t) { _a(this._swappable, "The Param must be assigned as 'swappable' in the constructor"); var e = this.input; return e.disconnect(this._param), this.apply(t), this._param = t, e.connect(this._param), this } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._events.dispose(), this } }, { key: "defaultValue", get: function() { return this._toType(this._param.defaultValue) } }, { key: "_exponentialApproach", value: function(t, e, n, r, o) { return n + (e - n) * Math.exp(-(o - t) / r) } }, { key: "_linearInterpolate", value: function(t, e, n, r, o) { return e + (o - t) / (n - t) * (r - e) } }, { key: "_exponentialInterpolate", value: function(t, e, n, r, o) { return e * Math.pow(r / e, (o - t) / (n - t)) } }], [{ key: "getDefaults", value: function() { return Object.assign(Xu.getDefaults(), { convert: !0, units: "number" }) } }]), n }(Xu);

            function ts(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var es = function(t) {
                (0, G.Z)(n, t); var e = ts(n);

                function n() { var t; return (0, w.Z)(this, n), (t = e.apply(this, arguments)).name = "ToneAudioNode", t._internalChannels = [], t } return (0, _.Z)(n, [{ key: "numberOfInputs", get: function() { return Aa(this.input) ? Va(this.input) || this.input instanceof Ku ? 1 : this.input.numberOfInputs : 0 } }, { key: "numberOfOutputs", get: function() { return Aa(this.output) ? this.output.numberOfOutputs : 0 } }, { key: "_isAudioNode", value: function(t) { return Aa(t) && (t instanceof n || za(t)) } }, { key: "_getInternalNodes", value: function() { var t = this._internalChannels.slice(0); return this._isAudioNode(this.input) && t.push(this.input), this._isAudioNode(this.output) && this.input !== this.output && t.push(this.output), t } }, { key: "_setChannelProperties", value: function(t) { this._getInternalNodes().forEach((function(e) { e.channelCount = t.channelCount, e.channelCountMode = t.channelCountMode, e.channelInterpretation = t.channelInterpretation })) } }, { key: "_getChannelProperties", value: function() { var t = this._getInternalNodes();
                        _a(t.length > 0, "ToneAudioNode does not have any internal nodes"); var e = t[0]; return { channelCount: e.channelCount, channelCountMode: e.channelCountMode, channelInterpretation: e.channelInterpretation } } }, { key: "channelCount", get: function() { return this._getChannelProperties().channelCount }, set: function(t) { var e = this._getChannelProperties();
                        this._setChannelProperties(Object.assign(e, { channelCount: t })) } }, { key: "channelCountMode", get: function() { return this._getChannelProperties().channelCountMode }, set: function(t) { var e = this._getChannelProperties();
                        this._setChannelProperties(Object.assign(e, { channelCountMode: t })) } }, { key: "channelInterpretation", get: function() { return this._getChannelProperties().channelInterpretation }, set: function(t) { var e = this._getChannelProperties();
                        this._setChannelProperties(Object.assign(e, { channelInterpretation: t })) } }, { key: "connect", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0; return rs(this, t, e, n), this } }, { key: "toDestination", value: function() { return this.connect(this.context.destination), this } }, { key: "toMaster", value: function() { return Sa("toMaster() has been renamed toDestination()"), this.toDestination() } }, { key: "disconnect", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0; return os(this, t, e, n), this } }, { key: "chain", value: function() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; return ns.apply(void 0, [this].concat(e)), this } }, { key: "fan", value: function() { for (var t = this, e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r]; return n.forEach((function(e) { return t.connect(e) })), this } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), Aa(this.input) && (this.input instanceof n ? this.input.dispose() : za(this.input) && this.input.disconnect()), Aa(this.output) && (this.output instanceof n ? this.output.dispose() : za(this.output) && this.output.disconnect()), this._internalChannels = [], this } }]), n }(Xu);

            function ns() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; var r = e.shift();
                e.reduce((function(t, e) { return t instanceof es ? t.connect(e) : za(t) && rs(t, e), e }), r) }

            function rs(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0; for (_a(Aa(t), "Cannot connect from undefined node"), _a(Aa(e), "Cannot connect to undefined node"), (e instanceof es || za(e)) && _a(e.numberOfInputs > 0, "Cannot connect to node with no inputs"), _a(t.numberOfOutputs > 0, "Cannot connect from node with no outputs"); e instanceof es || e instanceof Ku;) Aa(e.input) && (e = e.input); for (; t instanceof es;) Aa(t.output) && (t = t.output);
                Va(e) ? t.connect(e, n) : t.connect(e, n, r) }

            function os(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0; if (Aa(e))
                    for (; e instanceof es;) e = e.input; for (; !za(t);) Aa(t.output) && (t = t.output);
                Va(e) ? t.disconnect(e, n) : za(e) ? t.disconnect(e, n, r) : t.disconnect() }

            function is(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var as = function(t) {
                (0, G.Z)(n, t); var e = is(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments, ["gain", "units"]))).name = "Gain", t._gainNode = t.context.createGain(), t.input = t._gainNode, t.output = t._gainNode; var r = Ya(n.getDefaults(), arguments, ["gain", "units"]); return t.gain = new Ku({ context: t.context, convert: r.convert, param: t._gainNode.gain, units: r.units, value: r.gain, minValue: r.minValue, maxValue: r.maxValue }), bu((0, at.Z)(t), "gain"), t } return (0, _.Z)(n, [{ key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._gainNode.disconnect(), this.gain.dispose(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(es.getDefaults(), { convert: !0, gain: 1, units: "gain" }) } }]), n }(es);

            function us(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var ss = function(t) {
                (0, G.Z)(n, t); var e = us(n);

                function n(t) { var r; return (0, w.Z)(this, n), (r = e.call(this, t)).onended = wu, r._startTime = -1, r._stopTime = -1, r._timeout = -1, r.output = new as({ context: r.context, gain: 0 }), r._gainNode = r.output, r.getStateAtTime = function(t) { var e = this.toSeconds(t); return -1 !== this._startTime && e >= this._startTime && (-1 === this._stopTime || e <= this._stopTime) ? "started" : "stopped" }, r._fadeIn = t.fadeIn, r._fadeOut = t.fadeOut, r._curve = t.curve, r.onended = t.onended, r } return (0, _.Z)(n, [{ key: "_startGain", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        _a(-1 === this._startTime, "Source cannot be started more than once"); var n = this.toSeconds(this._fadeIn); return this._startTime = t + n, this._startTime = Math.max(this._startTime, this.context.currentTime), n > 0 ? (this._gainNode.gain.setValueAtTime(0, t), "linear" === this._curve ? this._gainNode.gain.linearRampToValueAtTime(e, t + n) : this._gainNode.gain.exponentialApproachValueAtTime(e, t, n)) : this._gainNode.gain.setValueAtTime(e, t), this } }, { key: "stop", value: function(t) { return this.log("stop", t), this._stopGain(this.toSeconds(t)), this } }, { key: "_stopGain", value: function(t) { var e = this;
                        _a(-1 !== this._startTime, "'start' must be called before 'stop'"), this.cancelStop(); var n = this.toSeconds(this._fadeOut); return this._stopTime = this.toSeconds(t) + n, this._stopTime = Math.max(this._stopTime, this.context.currentTime), n > 0 ? "linear" === this._curve ? this._gainNode.gain.linearRampTo(0, n, t) : this._gainNode.gain.targetRampTo(0, n, t) : (this._gainNode.gain.cancelAndHoldAtTime(t), this._gainNode.gain.setValueAtTime(0, t)), this.context.clearTimeout(this._timeout), this._timeout = this.context.setTimeout((function() { var t = "exponential" === e._curve ? 2 * n : 0;
                            e._stopSource(e.now() + t), e._onended() }), this._stopTime - this.context.currentTime), this } }, { key: "_onended", value: function() { var t = this; if (this.onended !== wu && (this.onended(this), this.onended = wu, !this.context.isOffline)) { var e = function() { return t.dispose() };
                            void 0 !== window.requestIdleCallback ? window.requestIdleCallback(e) : setTimeout(e, 1e3) } } }, { key: "state", get: function() { return this.getStateAtTime(this.now()) } }, { key: "cancelStop", value: function() { return this.log("cancelStop"), _a(-1 !== this._startTime, "Source is not started"), this._gainNode.gain.cancelScheduledValues(this._startTime + this.sampleTime), this.context.clearTimeout(this._timeout), this._stopTime = -1, this } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._gainNode.disconnect(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(es.getDefaults(), { curve: "linear", fadeIn: 0, fadeOut: 0, onended: wu }) } }]), n }(es);

            function cs(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var ls = function(t) {
                (0, G.Z)(n, t); var e = cs(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments, ["offset"]))).name = "ToneConstantSource", t._source = t.context.createConstantSource(); var r = Ya(n.getDefaults(), arguments, ["offset"]); return rs(t._source, t._gainNode), t.offset = new Ku({ context: t.context, convert: r.convert, param: t._source.offset, units: r.units, value: r.offset, minValue: r.minValue, maxValue: r.maxValue }), t } return (0, _.Z)(n, [{ key: "start", value: function(t) { var e = this.toSeconds(t); return this.log("start", e), this._startGain(e), this._source.start(e), this } }, { key: "_stopSource", value: function(t) { this._source.stop(t) } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), "started" === this.state && this.stop(), this._source.disconnect(), this.offset.dispose(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(ss.getDefaults(), { convert: !0, offset: 1, units: "number" }) } }]), n }(ss);

            function fs(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var hs = function(t) {
                (0, G.Z)(n, t); var e = fs(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments, ["value", "units"]))).name = "Signal", t.override = !0; var r = Ya(n.getDefaults(), arguments, ["value", "units"]); return t.output = t._constantSource = new ls({ context: t.context, convert: r.convert, offset: r.value, units: r.units, minValue: r.minValue, maxValue: r.maxValue }), t._constantSource.start(0), t.input = t._param = t._constantSource.offset, t } return (0, _.Z)(n, [{ key: "connect", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0; return ps(this, t, e, n), this } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._param.dispose(), this._constantSource.dispose(), this } }, { key: "setValueAtTime", value: function(t, e) { return this._param.setValueAtTime(t, e), this } }, { key: "getValueAtTime", value: function(t) { return this._param.getValueAtTime(t) } }, { key: "setRampPoint", value: function(t) { return this._param.setRampPoint(t), this } }, { key: "linearRampToValueAtTime", value: function(t, e) { return this._param.linearRampToValueAtTime(t, e), this } }, { key: "exponentialRampToValueAtTime", value: function(t, e) { return this._param.exponentialRampToValueAtTime(t, e), this } }, { key: "exponentialRampTo", value: function(t, e, n) { return this._param.exponentialRampTo(t, e, n), this } }, { key: "linearRampTo", value: function(t, e, n) { return this._param.linearRampTo(t, e, n), this } }, { key: "targetRampTo", value: function(t, e, n) { return this._param.targetRampTo(t, e, n), this } }, { key: "exponentialApproachValueAtTime", value: function(t, e, n) { return this._param.exponentialApproachValueAtTime(t, e, n), this } }, { key: "setTargetAtTime", value: function(t, e, n) { return this._param.setTargetAtTime(t, e, n), this } }, { key: "setValueCurveAtTime", value: function(t, e, n, r) { return this._param.setValueCurveAtTime(t, e, n, r), this } }, { key: "cancelScheduledValues", value: function(t) { return this._param.cancelScheduledValues(t), this } }, { key: "cancelAndHoldAtTime", value: function(t) { return this._param.cancelAndHoldAtTime(t), this } }, { key: "rampTo", value: function(t, e, n) { return this._param.rampTo(t, e, n), this } }, { key: "value", get: function() { return this._param.value }, set: function(t) { this._param.value = t } }, { key: "convert", get: function() { return this._param.convert }, set: function(t) { this._param.convert = t } }, { key: "units", get: function() { return this._param.units } }, { key: "overridden", get: function() { return this._param.overridden }, set: function(t) { this._param.overridden = t } }, { key: "maxValue", get: function() { return this._param.maxValue } }, { key: "minValue", get: function() { return this._param.minValue } }, { key: "apply", value: function(t) { return this._param.apply(t), this } }], [{ key: "getDefaults", value: function() { return Object.assign(es.getDefaults(), { convert: !0, units: "number", value: 0 }) } }]), n }(es);

            function ps(t, e, n, r) {
                (e instanceof Ku || Va(e) || e instanceof hs && e.override) && (e.cancelScheduledValues(0), e.setValueAtTime(0, 0), e instanceof hs && (e.overridden = !0)), rs(t, e, n, r) }

            function ds(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var vs = function(t) {
                (0, G.Z)(n, t); var e = ds(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments, ["value"]))).name = "TickParam", t._events = new iu(1 / 0), t._multiplier = 1; var r = Ya(n.getDefaults(), arguments, ["value"]); return t._multiplier = r.multiplier, t._events.cancel(0), t._events.add({ ticks: 0, time: 0, type: "setValueAtTime", value: t._fromType(r.value) }), t.setValueAtTime(r.value, 0), t } return (0, _.Z)(n, [{ key: "setTargetAtTime", value: function(t, e, n) { e = this.toSeconds(e), this.setRampPoint(e); for (var r = this._fromType(t), o = this._events.get(e), i = Math.round(Math.max(1 / n, 1)), a = 0; a <= i; a++) { var u = n * a + e,
                                s = this._exponentialApproach(o.time, o.value, r, n, u);
                            this.linearRampToValueAtTime(this._toType(s), u) } return this } }, { key: "setValueAtTime", value: function(t, e) { var r = this.toSeconds(e);
                        (0, Ba.Z)((0, Y.Z)(n.prototype), "setValueAtTime", this).call(this, t, e); var o = this._events.get(r),
                            i = this._events.previousEvent(o),
                            a = this._getTicksUntilEvent(i, r); return o.ticks = Math.max(a, 0), this } }, { key: "linearRampToValueAtTime", value: function(t, e) { var r = this.toSeconds(e);
                        (0, Ba.Z)((0, Y.Z)(n.prototype), "linearRampToValueAtTime", this).call(this, t, e); var o = this._events.get(r),
                            i = this._events.previousEvent(o),
                            a = this._getTicksUntilEvent(i, r); return o.ticks = Math.max(a, 0), this } }, { key: "exponentialRampToValueAtTime", value: function(t, e) { e = this.toSeconds(e); for (var n = this._fromType(t), r = this._events.get(e), o = Math.round(Math.max(10 * (e - r.time), 1)), i = (e - r.time) / o, a = 0; a <= o; a++) { var u = i * a + r.time,
                                s = this._exponentialInterpolate(r.time, r.value, e, n, u);
                            this.linearRampToValueAtTime(this._toType(s), u) } return this } }, { key: "_getTicksUntilEvent", value: function(t, e) { if (null === t) t = { ticks: 0, time: 0, type: "setValueAtTime", value: 0 };
                        else if (Ca(t.ticks)) { var n = this._events.previousEvent(t);
                            t.ticks = this._getTicksUntilEvent(n, t.time) } var r = this._fromType(this.getValueAtTime(t.time)),
                            o = this._fromType(this.getValueAtTime(e)),
                            i = this._events.get(e); return i && i.time === e && "setValueAtTime" === i.type && (o = this._fromType(this.getValueAtTime(e - this.sampleTime))), .5 * (e - t.time) * (r + o) + t.ticks } }, { key: "getTicksAtTime", value: function(t) { var e = this.toSeconds(t),
                            n = this._events.get(e); return Math.max(this._getTicksUntilEvent(n, e), 0) } }, { key: "getDurationOfTicks", value: function(t, e) { var n = this.toSeconds(e),
                            r = this.getTicksAtTime(e); return this.getTimeOfTick(r + t) - n } }, { key: "getTimeOfTick", value: function(t) { var e = this._events.get(t, "ticks"),
                            n = this._events.getAfter(t, "ticks"); if (e && e.ticks === t) return e.time; if (e && n && "linearRampToValueAtTime" === n.type && e.value !== n.value) { var r = this._fromType(this.getValueAtTime(e.time)),
                                o = (this._fromType(this.getValueAtTime(n.time)) - r) / (n.time - e.time),
                                i = Math.sqrt(Math.pow(r, 2) - 2 * o * (e.ticks - t)),
                                a = (-r + i) / o; return (a > 0 ? a : (-r - i) / o) + e.time } return e ? 0 === e.value ? 1 / 0 : e.time + (t - e.ticks) / e.value : t / this._initialValue } }, { key: "ticksToTime", value: function(t, e) { return this.getDurationOfTicks(t, e) } }, { key: "timeToTicks", value: function(t, e) { var n = this.toSeconds(e),
                            r = this.toSeconds(t),
                            o = this.getTicksAtTime(n); return this.getTicksAtTime(n + r) - o } }, { key: "_fromType", value: function(t) { return "bpm" === this.units && this.multiplier ? 1 / (60 / t / this.multiplier) : (0, Ba.Z)((0, Y.Z)(n.prototype), "_fromType", this).call(this, t) } }, { key: "_toType", value: function(t) { return "bpm" === this.units && this.multiplier ? t / this.multiplier * 60 : (0, Ba.Z)((0, Y.Z)(n.prototype), "_toType", this).call(this, t) } }, { key: "multiplier", get: function() { return this._multiplier }, set: function(t) { var e = this.value;
                        this._multiplier = t, this.cancelScheduledValues(0), this.setValueAtTime(e, 0) } }], [{ key: "getDefaults", value: function() { return Object.assign(Ku.getDefaults(), { multiplier: 1, units: "hertz", value: 1 }) } }]), n }(Ku);

            function ms(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var gs = function(t) {
                (0, G.Z)(n, t); var e = ms(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments, ["value"]))).name = "TickSignal"; var r = Ya(n.getDefaults(), arguments, ["value"]); return t.input = t._param = new vs({ context: t.context, convert: r.convert, multiplier: r.multiplier, param: t._constantSource.offset, units: r.units, value: r.value }), t } return (0, _.Z)(n, [{ key: "ticksToTime", value: function(t, e) { return this._param.ticksToTime(t, e) } }, { key: "timeToTicks", value: function(t, e) { return this._param.timeToTicks(t, e) } }, { key: "getTimeOfTick", value: function(t) { return this._param.getTimeOfTick(t) } }, { key: "getDurationOfTicks", value: function(t, e) { return this._param.getDurationOfTicks(t, e) } }, { key: "getTicksAtTime", value: function(t) { return this._param.getTicksAtTime(t) } }, { key: "multiplier", get: function() { return this._param.multiplier }, set: function(t) { this._param.multiplier = t } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._param.dispose(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(hs.getDefaults(), { multiplier: 1, units: "hertz", value: 1 }) } }]), n }(hs);

            function ys(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var bs = function(t) {
                (0, G.Z)(n, t); var e = ys(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments, ["frequency"]))).name = "TickSource", t._state = new $u, t._tickOffset = new iu; var r = Ya(n.getDefaults(), arguments, ["frequency"]); return t.frequency = new gs({ context: t.context, units: r.units, value: r.frequency }), bu((0, at.Z)(t), "frequency"), t._state.setStateAtTime("stopped", 0), t.setTicksAtTime(0, 0), t } return (0, _.Z)(n, [{ key: "state", get: function() { return this.getStateAtTime(this.now()) } }, { key: "start", value: function(t, e) { var n = this.toSeconds(t); return "started" !== this._state.getValueAtTime(n) && (this._state.setStateAtTime("started", n), Aa(e) && this.setTicksAtTime(e, n)), this } }, { key: "stop", value: function(t) { var e = this.toSeconds(t); if ("stopped" === this._state.getValueAtTime(e)) { var n = this._state.get(e);
                            n && n.time > 0 && (this._tickOffset.cancel(n.time), this._state.cancel(n.time)) } return this._state.cancel(e), this._state.setStateAtTime("stopped", e), this.setTicksAtTime(0, e), this } }, { key: "pause", value: function(t) { var e = this.toSeconds(t); return "started" === this._state.getValueAtTime(e) && this._state.setStateAtTime("paused", e), this } }, { key: "cancel", value: function(t) { return t = this.toSeconds(t), this._state.cancel(t), this._tickOffset.cancel(t), this } }, { key: "getTicksAtTime", value: function(t) { var e = this,
                            n = this.toSeconds(t),
                            r = this._state.getLastState("stopped", n),
                            o = { state: "paused", time: n };
                        this._state.add(o); var i = r,
                            a = 0; return this._state.forEachBetween(r.time, n + this.sampleTime, (function(t) { var n = i.time,
                                r = e._tickOffset.get(t.time);
                            r && r.time >= i.time && (a = r.ticks, n = r.time), "started" === i.state && "started" !== t.state && (a += e.frequency.getTicksAtTime(t.time) - e.frequency.getTicksAtTime(n)), i = t })), this._state.remove(o), a } }, { key: "ticks", get: function() { return this.getTicksAtTime(this.now()) }, set: function(t) { this.setTicksAtTime(t, this.now()) } }, { key: "seconds", get: function() { return this.getSecondsAtTime(this.now()) }, set: function(t) { var e = this.now(),
                            n = this.frequency.timeToTicks(t, e);
                        this.setTicksAtTime(n, e) } }, { key: "getSecondsAtTime", value: function(t) { var e = this;
                        t = this.toSeconds(t); var n = this._state.getLastState("stopped", t),
                            r = { state: "paused", time: t };
                        this._state.add(r); var o = n,
                            i = 0; return this._state.forEachBetween(n.time, t + this.sampleTime, (function(t) { var n = o.time,
                                r = e._tickOffset.get(t.time);
                            r && r.time >= o.time && (i = r.seconds, n = r.time), "started" === o.state && "started" !== t.state && (i += t.time - n), o = t })), this._state.remove(r), i } }, { key: "setTicksAtTime", value: function(t, e) { return e = this.toSeconds(e), this._tickOffset.cancel(e), this._tickOffset.add({ seconds: this.frequency.getDurationOfTicks(t, e), ticks: t, time: e }), this } }, { key: "getStateAtTime", value: function(t) { return t = this.toSeconds(t), this._state.getValueAtTime(t) } }, { key: "getTimeOfTick", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.now(),
                            n = this._tickOffset.get(e),
                            r = this._state.get(e),
                            o = Math.max(n.time, r.time),
                            i = this.frequency.getTicksAtTime(o) + t - n.ticks; return this.frequency.getTimeOfTick(i) } }, { key: "forEachTickBetween", value: function(t, e, n) { var r = this,
                            o = this._state.get(t);
                        this._state.forEachBetween(t, e, (function(e) { o && "started" === o.state && "started" !== e.state && r.forEachTickBetween(Math.max(o.time, t), e.time - r.sampleTime, n), o = e })); var i = null; if (o && "started" === o.state) { var a = Math.max(o.time, t),
                                u = this.frequency.getTicksAtTime(a),
                                s = u - this.frequency.getTicksAtTime(o.time),
                                c = Math.ceil(s) - s;
                            c = nu(c, 1) ? 0 : c; for (var l = this.frequency.getTimeOfTick(u + c); l < e;) { try { n(l, Math.round(this.getTicksAtTime(l))) } catch (f) { i = f; break }
                                l += this.frequency.getDurationOfTicks(1, l) } } if (i) throw i; return this } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._state.dispose(), this._tickOffset.dispose(), this.frequency.dispose(), this } }], [{ key: "getDefaults", value: function() { return Object.assign({ frequency: 1, units: "hertz" }, Xu.getDefaults()) } }]), n }(Xu);

            function _s(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var ws = function(t) {
                (0, G.Z)(n, t); var e = _s(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments, ["callback", "frequency"]))).name = "Clock", t.callback = wu, t._lastUpdate = 0, t._state = new $u("stopped"), t._boundLoop = t._loop.bind((0, at.Z)(t)); var r = Ya(n.getDefaults(), arguments, ["callback", "frequency"]); return t.callback = r.callback, t._tickSource = new bs({ context: t.context, frequency: r.frequency, units: r.units }), t._lastUpdate = 0, t.frequency = t._tickSource.frequency, bu((0, at.Z)(t), "frequency"), t._state.setStateAtTime("stopped", 0), t.context.on("tick", t._boundLoop), t } return (0, _.Z)(n, [{ key: "state", get: function() { return this._state.getValueAtTime(this.now()) } }, { key: "start", value: function(t, e) { ka(this.context); var n = this.toSeconds(t); return this.log("start", n), "started" !== this._state.getValueAtTime(n) && (this._state.setStateAtTime("started", n), this._tickSource.start(n, e), n < this._lastUpdate && this.emit("start", n, e)), this } }, { key: "stop", value: function(t) { var e = this.toSeconds(t); return this.log("stop", e), this._state.cancel(e), this._state.setStateAtTime("stopped", e), this._tickSource.stop(e), e < this._lastUpdate && this.emit("stop", e), this } }, { key: "pause", value: function(t) { var e = this.toSeconds(t); return "started" === this._state.getValueAtTime(e) && (this._state.setStateAtTime("paused", e), this._tickSource.pause(e), e < this._lastUpdate && this.emit("pause", e)), this } }, { key: "ticks", get: function() { return Math.ceil(this.getTicksAtTime(this.now())) }, set: function(t) { this._tickSource.ticks = t } }, { key: "seconds", get: function() { return this._tickSource.seconds }, set: function(t) { this._tickSource.seconds = t } }, { key: "getSecondsAtTime", value: function(t) { return this._tickSource.getSecondsAtTime(t) } }, { key: "setTicksAtTime", value: function(t, e) { return this._tickSource.setTicksAtTime(t, e), this } }, { key: "getTimeOfTick", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.now(); return this._tickSource.getTimeOfTick(t, e) } }, { key: "getTicksAtTime", value: function(t) { return this._tickSource.getTicksAtTime(t) } }, { key: "nextTickTime", value: function(t, e) { var n = this.toSeconds(e),
                            r = this.getTicksAtTime(n); return this._tickSource.getTimeOfTick(r + t, n) } }, { key: "_loop", value: function() { var t = this,
                            e = this._lastUpdate,
                            n = this.now();
                        this._lastUpdate = n, this.log("loop", e, n), e !== n && (this._state.forEachBetween(e, n, (function(e) { switch (e.state) {
                                case "started":
                                    var n = t._tickSource.getTicksAtTime(e.time);
                                    t.emit("start", e.time, n); break;
                                case "stopped":
                                    0 !== e.time && t.emit("stop", e.time); break;
                                case "paused":
                                    t.emit("pause", e.time) } })), this._tickSource.forEachTickBetween(e, n, (function(e, n) { t.callback(e, n) }))) } }, { key: "getStateAtTime", value: function(t) { var e = this.toSeconds(t); return this._state.getValueAtTime(e) } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this.context.off("tick", this._boundLoop), this._tickSource.dispose(), this._state.dispose(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(Xu.getDefaults(), { callback: wu, frequency: 1, units: "hertz" }) } }]), n }(Xu);
            hu.mixin(ws);

            function ks(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var xs = function(t) {
                (0, G.Z)(n, t); var e = ks(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this)).name = "ToneAudioBuffers", t._buffers = new Map, t._loadingCount = 0; var r = Ya(n.getDefaults(), arguments, ["urls", "onload", "baseUrl"], "urls"); return t.baseUrl = r.baseUrl, Object.keys(r.urls).forEach((function(e) { t._loadingCount++; var n = r.urls[e];
                        t.add(e, n, t._bufferLoaded.bind((0, at.Z)(t), r.onload), r.onerror) })), t } return (0, _.Z)(n, [{ key: "has", value: function(t) { return this._buffers.has(t.toString()) } }, { key: "get", value: function(t) { return _a(this.has(t), "ToneAudioBuffers has no buffer named: ".concat(t)), this._buffers.get(t.toString()) } }, { key: "_bufferLoaded", value: function(t) { this._loadingCount--, 0 === this._loadingCount && t && t() } }, { key: "loaded", get: function() { return Array.from(this._buffers).every((function(t) { var e = (0, b.Z)(t, 2);
                            e[0]; return e[1].loaded })) } }, { key: "add", value: function(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wu,
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wu; return Ra(e) ? this._buffers.set(t.toString(), new Su(this.baseUrl + e, n, r)) : this._buffers.set(t.toString(), new Su(e, n, r)), this } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._buffers.forEach((function(t) { return t.dispose() })), this._buffers.clear(), this } }], [{ key: "getDefaults", value: function() { return { baseUrl: "", onerror: wu, onload: wu, urls: {} } } }]), n }($a);

            function Os(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Ss = function(t) {
                (0, G.Z)(n, t); var e = Os(n);

                function n() { var t; return (0, w.Z)(this, n), (t = e.apply(this, arguments)).name = "MidiClass", t.defaultUnits = "midi", t } return (0, _.Z)(n, [{ key: "_frequencyToUnits", value: function(t) { return Mu((0, Ba.Z)((0, Y.Z)(n.prototype), "_frequencyToUnits", this).call(this, t)) } }, { key: "_ticksToUnits", value: function(t) { return Mu((0, Ba.Z)((0, Y.Z)(n.prototype), "_ticksToUnits", this).call(this, t)) } }, { key: "_beatsToUnits", value: function(t) { return Mu((0, Ba.Z)((0, Y.Z)(n.prototype), "_beatsToUnits", this).call(this, t)) } }, { key: "_secondsToUnits", value: function(t) { return Mu((0, Ba.Z)((0, Y.Z)(n.prototype), "_secondsToUnits", this).call(this, t)) } }, { key: "toMidi", value: function() { return this.valueOf() } }, { key: "toFrequency", value: function() { return Nu(this.toMidi()) } }, { key: "transpose", value: function(t) { return new n(this.context, this.toMidi() + t) } }]), n }(Uu);

            function Cs(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var As = function(t) {
                (0, G.Z)(n, t); var e = Cs(n);

                function n() { var t; return (0, w.Z)(this, n), (t = e.apply(this, arguments)).name = "Ticks", t.defaultUnits = "i", t } return (0, _.Z)(n, [{ key: "_now", value: function() { return this.context.transport.ticks } }, { key: "_beatsToUnits", value: function(t) { return this._getPPQ() * t } }, { key: "_secondsToUnits", value: function(t) { return Math.floor(t / (60 / this._getBpm()) * this._getPPQ()) } }, { key: "_ticksToUnits", value: function(t) { return t } }, { key: "toTicks", value: function() { return this.valueOf() } }, { key: "toSeconds", value: function() { return this.valueOf() / this._getPPQ() * (60 / this._getBpm()) } }]), n }(Hu);

            function Ts(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Es = function(t) {
                (0, G.Z)(n, t); var e = Ts(n);

                function n() { var t; return (0, w.Z)(this, n), (t = e.apply(this, arguments)).name = "Draw", t.expiration = .25, t.anticipation = .008, t._events = new iu, t._boundDrawLoop = t._drawLoop.bind((0, at.Z)(t)), t._animationFrame = -1, t } return (0, _.Z)(n, [{ key: "schedule", value: function(t, e) { return this._events.add({ callback: t, time: this.toSeconds(e) }), 1 === this._events.length && (this._animationFrame = requestAnimationFrame(this._boundDrawLoop)), this } }, { key: "cancel", value: function(t) { return this._events.cancel(this.toSeconds(t)), this } }, { key: "_drawLoop", value: function() { for (var t = this.context.currentTime; this._events.length && this._events.peek().time - this.anticipation <= t;) { var e = this._events.shift();
                            e && t - e.time <= this.expiration && e.callback() }
                        this._events.length > 0 && (this._animationFrame = requestAnimationFrame(this._boundDrawLoop)) } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._events.dispose(), cancelAnimationFrame(this._animationFrame), this } }]), n }(Xu);

            function Ps(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } }
            uu((function(t) { t.draw = new Es({ context: t }) })), cu((function(t) { t.draw.dispose() })); var Zs = function(t) {
                    (0, G.Z)(n, t); var e = Ps(n);

                    function n() { var t; return (0, w.Z)(this, n), (t = e.apply(this, arguments)).name = "IntervalTimeline", t._root = null, t._length = 0, t } return (0, _.Z)(n, [{ key: "add", value: function(t) { _a(Aa(t.time), "Events must have a time property"), _a(Aa(t.duration), "Events must have a duration parameter"), t.time = t.time.valueOf(); var e = new Rs(t.time, t.time + t.duration, t); for (null === this._root ? this._root = e : this._root.insert(e), this._length++; null !== e;) e.updateHeight(), e.updateMax(), this._rebalance(e), e = e.parent; return this } }, { key: "remove", value: function(t) { if (null !== this._root) { var e = [];
                                this._root.search(t.time, e); for (var n = 0, r = e; n < r.length; n++) { var o = r[n]; if (o.event === t) { this._removeNode(o), this._length--; break } } } return this } }, { key: "length", get: function() { return this._length } }, { key: "cancel", value: function(t) { var e = this; return this.forEachFrom(t, (function(t) { return e.remove(t) })), this } }, { key: "_setRoot", value: function(t) { this._root = t, null !== this._root && (this._root.parent = null) } }, { key: "_replaceNodeInParent", value: function(t, e) { null !== t.parent ? (t.isLeftChild() ? t.parent.left = e : t.parent.right = e, this._rebalance(t.parent)) : this._setRoot(e) } }, { key: "_removeNode", value: function(t) { if (null === t.left && null === t.right) this._replaceNodeInParent(t, null);
                            else if (null === t.right) this._replaceNodeInParent(t, t.left);
                            else if (null === t.left) this._replaceNodeInParent(t, t.right);
                            else { var e, n = null; if (t.getBalance() > 0)
                                    if (null === t.left.right)(e = t.left).right = t.right, n = e;
                                    else { for (e = t.left.right; null !== e.right;) e = e.right;
                                        e.parent && (e.parent.right = e.left, n = e.parent, e.left = t.left, e.right = t.right) }
                                else if (null === t.right.left)(e = t.right).left = t.left, n = e;
                                else { for (e = t.right.left; null !== e.left;) e = e.left;
                                    e.parent && (e.parent.left = e.right, n = e.parent, e.left = t.left, e.right = t.right) }
                                null !== t.parent ? t.isLeftChild() ? t.parent.left = e : t.parent.right = e : this._setRoot(e), n && this._rebalance(n) }
                            t.dispose() } }, { key: "_rotateLeft", value: function(t) { var e = t.parent,
                                n = t.isLeftChild(),
                                r = t.right;
                            r && (t.right = r.left, r.left = t), null !== e ? n ? e.left = r : e.right = r : this._setRoot(r) } }, { key: "_rotateRight", value: function(t) { var e = t.parent,
                                n = t.isLeftChild(),
                                r = t.left;
                            r && (t.left = r.right, r.right = t), null !== e ? n ? e.left = r : e.right = r : this._setRoot(r) } }, { key: "_rebalance", value: function(t) { var e = t.getBalance();
                            e > 1 && t.left ? t.left.getBalance() < 0 ? this._rotateLeft(t.left) : this._rotateRight(t) : e < -1 && t.right && (t.right.getBalance() > 0 ? this._rotateRight(t.right) : this._rotateLeft(t)) } }, { key: "get", value: function(t) { if (null !== this._root) { var e = []; if (this._root.search(t, e), e.length > 0) { for (var n = e[0], r = 1; r < e.length; r++) e[r].low > n.low && (n = e[r]); return n.event } } return null } }, { key: "forEach", value: function(t) { if (null !== this._root) { var e = [];
                                this._root.traverse((function(t) { return e.push(t) })), e.forEach((function(e) { e.event && t(e.event) })) } return this } }, { key: "forEachAtTime", value: function(t, e) { if (null !== this._root) { var n = [];
                                this._root.search(t, n), n.forEach((function(t) { t.event && e(t.event) })) } return this } }, { key: "forEachFrom", value: function(t, e) { if (null !== this._root) { var n = [];
                                this._root.searchAfter(t, n), n.forEach((function(t) { t.event && e(t.event) })) } return this } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), null !== this._root && this._root.traverse((function(t) { return t.dispose() })), this._root = null, this } }]), n }($a),
                Rs = function() {
                    function t(e, n, r) {
                        (0, w.Z)(this, t), this._left = null, this._right = null, this.parent = null, this.height = 0, this.event = r, this.low = e, this.high = n, this.max = this.high } return (0, _.Z)(t, [{ key: "insert", value: function(t) { t.low <= this.low ? null === this.left ? this.left = t : this.left.insert(t) : null === this.right ? this.right = t : this.right.insert(t) } }, { key: "search", value: function(t, e) { t > this.max || (null !== this.left && this.left.search(t, e), this.low <= t && this.high > t && e.push(this), this.low > t || null !== this.right && this.right.search(t, e)) } }, { key: "searchAfter", value: function(t, e) { this.low >= t && (e.push(this), null !== this.left && this.left.searchAfter(t, e)), null !== this.right && this.right.searchAfter(t, e) } }, { key: "traverse", value: function(t) { t(this), null !== this.left && this.left.traverse(t), null !== this.right && this.right.traverse(t) } }, { key: "updateHeight", value: function() { null !== this.left && null !== this.right ? this.height = Math.max(this.left.height, this.right.height) + 1 : null !== this.right ? this.height = this.right.height + 1 : null !== this.left ? this.height = this.left.height + 1 : this.height = 0 } }, { key: "updateMax", value: function() { this.max = this.high, null !== this.left && (this.max = Math.max(this.max, this.left.max)), null !== this.right && (this.max = Math.max(this.max, this.right.max)) } }, { key: "getBalance", value: function() { var t = 0; return null !== this.left && null !== this.right ? t = this.left.height - this.right.height : null !== this.left ? t = this.left.height + 1 : null !== this.right && (t = -(this.right.height + 1)), t } }, { key: "isLeftChild", value: function() { return null !== this.parent && this.parent.left === this } }, { key: "left", get: function() { return this._left }, set: function(t) { this._left = t, null !== t && (t.parent = this), this.updateHeight(), this.updateMax() } }, { key: "right", get: function() { return this._right }, set: function(t) { this._right = t, null !== t && (t.parent = this), this.updateHeight(), this.updateMax() } }, { key: "dispose", value: function() { this.parent = null, this._left = null, this._right = null, this.event = null } }]), t }();

            function Ds(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var js = function(t) {
                (0, G.Z)(n, t); var e = Ds(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments, ["volume"]))).name = "Volume"; var r = Ya(n.getDefaults(), arguments, ["volume"]); return t.input = t.output = new as({ context: t.context, gain: r.volume, units: "decibels" }), t.volume = t.output.gain, bu((0, at.Z)(t), "volume"), t._unmutedVolume = r.volume, t.mute = r.mute, t } return (0, _.Z)(n, [{ key: "mute", get: function() { return this.volume.value === -1 / 0 }, set: function(t) {!this.mute && t ? (this._unmutedVolume = this.volume.value, this.volume.value = -1 / 0) : this.mute && !t && (this.volume.value = this._unmutedVolume) } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this.input.dispose(), this.volume.dispose(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(es.getDefaults(), { mute: !1, volume: 0 }) } }]), n }(es);

            function Ms(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Is = function(t) {
                (0, G.Z)(n, t); var e = Ms(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments))).name = "Destination", t.input = new js({ context: t.context }), t.output = new as({ context: t.context }), t.volume = t.input.volume; var r = Ya(n.getDefaults(), arguments); return ns(t.input, t.output, t.context.rawContext.destination), t.mute = r.mute, t._internalChannels = [t.input, t.context.rawContext.destination, t.output], t } return (0, _.Z)(n, [{ key: "mute", get: function() { return this.input.mute }, set: function(t) { this.input.mute = t } }, { key: "chain", value: function() { this.input.disconnect(); for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; return e.unshift(this.input), e.push(this.output), ns.apply(void 0, e), this } }, { key: "maxChannelCount", get: function() { return this.context.rawContext.destination.maxChannelCount } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this.volume.dispose(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(es.getDefaults(), { mute: !1, volume: 0 }) } }]), n }(es);

            function Ns(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } }
            uu((function(t) { t.destination = new Is({ context: t }) })), cu((function(t) { t.destination.dispose() })); var Bs = function(t) {
                    (0, G.Z)(n, t); var e = Ns(n);

                    function n(t) { var r; return (0, w.Z)(this, n), (r = e.call(this)).name = "TimelineValue", r._timeline = new iu({ memory: 10 }), r._initialValue = t, r } return (0, _.Z)(n, [{ key: "set", value: function(t, e) { return this._timeline.add({ value: t, time: e }), this } }, { key: "get", value: function(t) { var e = this._timeline.get(t); return e ? e.value : this._initialValue } }]), n }($a),
                Fs = function() {
                    function t(e, n) {
                        (0, w.Z)(this, t), this.id = t._eventId++; var r = Object.assign(t.getDefaults(), n);
                        this.transport = e, this.callback = r.callback, this._once = r.once, this.time = r.time } return (0, _.Z)(t, [{ key: "invoke", value: function(t) { this.callback && (this.callback(t), this._once && this.transport.clear(this.id)) } }, { key: "dispose", value: function() { return this.callback = void 0, this } }], [{ key: "getDefaults", value: function() { return { callback: wu, once: !1, time: 0 } } }]), t }();

            function Ls(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } }
            Fs._eventId = 0; var Vs = function(t) {
                (0, G.Z)(n, t); var e = Ls(n);

                function n(t, r) { var o;
                    (0, w.Z)(this, n), (o = e.call(this, t, r))._currentId = -1, o._nextId = -1, o._nextTick = o.time, o._boundRestart = o._restart.bind((0, at.Z)(o)); var i = Object.assign(n.getDefaults(), r); return o.duration = new As(t.context, i.duration).valueOf(), o._interval = new As(t.context, i.interval).valueOf(), o._nextTick = i.time, o.transport.on("start", o._boundRestart), o.transport.on("loopStart", o._boundRestart), o.context = o.transport.context, o._restart(), o } return (0, _.Z)(n, [{ key: "invoke", value: function(t) { this._createEvents(t), (0, Ba.Z)((0, Y.Z)(n.prototype), "invoke", this).call(this, t) } }, { key: "_createEvents", value: function(t) { var e = this.transport.getTicksAtTime(t);
                        e >= this.time && e >= this._nextTick && this._nextTick + this._interval < this.time + this.duration && (this._nextTick += this._interval, this._currentId = this._nextId, this._nextId = this.transport.scheduleOnce(this.invoke.bind(this), new As(this.context, this._nextTick).toSeconds())) } }, { key: "_restart", value: function(t) { this.transport.clear(this._currentId), this.transport.clear(this._nextId), this._nextTick = this.time; var e = this.transport.getTicksAtTime(t);
                        e > this.time && (this._nextTick = this.time + Math.ceil((e - this.time) / this._interval) * this._interval), this._currentId = this.transport.scheduleOnce(this.invoke.bind(this), new As(this.context, this._nextTick).toSeconds()), this._nextTick += this._interval, this._nextId = this.transport.scheduleOnce(this.invoke.bind(this), new As(this.context, this._nextTick).toSeconds()) } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this.transport.clear(this._currentId), this.transport.clear(this._nextId), this.transport.off("start", this._boundRestart), this.transport.off("loopStart", this._boundRestart), this } }], [{ key: "getDefaults", value: function() { return Object.assign({}, Fs.getDefaults(), { duration: 1 / 0, interval: 1, once: !1 }) } }]), n }(Fs);

            function zs(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Us = function(t) {
                (0, G.Z)(n, t); var e = zs(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments))).name = "Transport", t._loop = new Bs(!1), t._loopStart = 0, t._loopEnd = 0, t._scheduledEvents = {}, t._timeline = new iu, t._repeatedEvents = new Zs, t._syncedSignals = [], t._swingAmount = 0; var r = Ya(n.getDefaults(), arguments); return t._ppq = r.ppq, t._clock = new ws({ callback: t._processTick.bind((0, at.Z)(t)), context: t.context, frequency: 0, units: "bpm" }), t._bindClockEvents(), t.bpm = t._clock.frequency, t._clock.frequency.multiplier = r.ppq, t.bpm.setValueAtTime(r.bpm, 0), bu((0, at.Z)(t), "bpm"), t._timeSignature = r.timeSignature, t._swingTicks = r.ppq / 2, t } return (0, _.Z)(n, [{ key: "_processTick", value: function(t, e) { if (this._loop.get(t) && e >= this._loopEnd && (this.emit("loopEnd", t), this._clock.setTicksAtTime(this._loopStart, t), e = this._loopStart, this.emit("loopStart", t, this._clock.getSecondsAtTime(t)), this.emit("loop", t)), this._swingAmount > 0 && e % this._ppq != 0 && e % (2 * this._swingTicks) != 0) { var n = e % (2 * this._swingTicks) / (2 * this._swingTicks),
                                r = Math.sin(n * Math.PI) * this._swingAmount;
                            t += new As(this.context, 2 * this._swingTicks / 3).toSeconds() * r }
                        this._timeline.forEachAtTime(e, (function(e) { return e.invoke(t) })) } }, { key: "schedule", value: function(t, e) { var n = new Fs(this, { callback: t, time: new Hu(this.context, e).toTicks() }); return this._addEvent(n, this._timeline) } }, { key: "scheduleRepeat", value: function(t, e, n) { var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
                            o = new Vs(this, { callback: t, duration: new Vu(this.context, r).toTicks(), interval: new Vu(this.context, e).toTicks(), time: new Hu(this.context, n).toTicks() }); return this._addEvent(o, this._repeatedEvents) } }, { key: "scheduleOnce", value: function(t, e) { var n = new Fs(this, { callback: t, once: !0, time: new Hu(this.context, e).toTicks() }); return this._addEvent(n, this._timeline) } }, { key: "clear", value: function(t) { if (this._scheduledEvents.hasOwnProperty(t)) { var e = this._scheduledEvents[t.toString()];
                            e.timeline.remove(e.event), e.event.dispose(), delete this._scheduledEvents[t.toString()] } return this } }, { key: "_addEvent", value: function(t, e) { return this._scheduledEvents[t.id.toString()] = { event: t, timeline: e }, e.add(t), t.id } }, { key: "cancel", value: function() { var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            n = this.toTicks(e); return this._timeline.forEachFrom(n, (function(e) { return t.clear(e.id) })), this._repeatedEvents.forEachFrom(n, (function(e) { return t.clear(e.id) })), this } }, { key: "_bindClockEvents", value: function() { var t = this;
                        this._clock.on("start", (function(e, n) { n = new As(t.context, n).toSeconds(), t.emit("start", e, n) })), this._clock.on("stop", (function(e) { t.emit("stop", e) })), this._clock.on("pause", (function(e) { t.emit("pause", e) })) } }, { key: "state", get: function() { return this._clock.getStateAtTime(this.now()) } }, { key: "start", value: function(t, e) { var n; return Aa(e) && (n = this.toTicks(e)), this._clock.start(t, n), this } }, { key: "stop", value: function(t) { return this._clock.stop(t), this } }, { key: "pause", value: function(t) { return this._clock.pause(t), this } }, { key: "toggle", value: function(t) { return t = this.toSeconds(t), "started" !== this._clock.getStateAtTime(t) ? this.start(t) : this.stop(t), this } }, { key: "timeSignature", get: function() { return this._timeSignature }, set: function(t) { Za(t) && (t = t[0] / t[1] * 4), this._timeSignature = t } }, { key: "loopStart", get: function() { return new Vu(this.context, this._loopStart, "i").toSeconds() }, set: function(t) { this._loopStart = this.toTicks(t) } }, { key: "loopEnd", get: function() { return new Vu(this.context, this._loopEnd, "i").toSeconds() }, set: function(t) { this._loopEnd = this.toTicks(t) } }, { key: "loop", get: function() { return this._loop.get(this.now()) }, set: function(t) { this._loop.set(t, this.now()) } }, { key: "setLoopPoints", value: function(t, e) { return this.loopStart = t, this.loopEnd = e, this } }, { key: "swing", get: function() { return this._swingAmount }, set: function(t) { this._swingAmount = t } }, { key: "swingSubdivision", get: function() { return new As(this.context, this._swingTicks).toNotation() }, set: function(t) { this._swingTicks = this.toTicks(t) } }, { key: "position", get: function() { var t = this.now(),
                            e = this._clock.getTicksAtTime(t); return new As(this.context, e).toBarsBeatsSixteenths() }, set: function(t) { var e = this.toTicks(t);
                        this.ticks = e } }, { key: "seconds", get: function() { return this._clock.seconds }, set: function(t) { var e = this.now(),
                            n = this._clock.frequency.timeToTicks(t, e);
                        this.ticks = n } }, { key: "progress", get: function() { if (this.loop) { var t = this.now(); return (this._clock.getTicksAtTime(t) - this._loopStart) / (this._loopEnd - this._loopStart) } return 0 } }, { key: "ticks", get: function() { return this._clock.ticks }, set: function(t) { if (this._clock.ticks !== t) { var e = this.now(); if ("started" === this.state) { var n = this._clock.getTicksAtTime(e),
                                    r = e + this._clock.frequency.getDurationOfTicks(Math.ceil(n) - n, e);
                                this.emit("stop", r), this._clock.setTicksAtTime(t, r), this.emit("start", r, this._clock.getSecondsAtTime(r)) } else this._clock.setTicksAtTime(t, e) } } }, { key: "getTicksAtTime", value: function(t) { return Math.round(this._clock.getTicksAtTime(t)) } }, { key: "getSecondsAtTime", value: function(t) { return this._clock.getSecondsAtTime(t) } }, { key: "PPQ", get: function() { return this._clock.frequency.multiplier }, set: function(t) { this._clock.frequency.multiplier = t } }, { key: "nextSubdivision", value: function(t) { if (t = this.toTicks(t), "started" !== this.state) return 0; var e = this.now(),
                            n = t - this.getTicksAtTime(e) % t; return this._clock.nextTickTime(n, e) } }, { key: "syncSignal", value: function(t, e) { if (!e) { var n = this.now(); if (0 !== t.getValueAtTime(n)) { var r = 1 / (60 / this.bpm.getValueAtTime(n) / this.PPQ);
                                e = t.getValueAtTime(n) / r } else e = 0 } var o = new as(e); return this.bpm.connect(o), o.connect(t._param), this._syncedSignals.push({ initial: t.value, ratio: o, signal: t }), t.value = 0, this } }, { key: "unsyncSignal", value: function(t) { for (var e = this._syncedSignals.length - 1; e >= 0; e--) { var n = this._syncedSignals[e];
                            n.signal === t && (n.ratio.dispose(), n.signal.value = n.initial, this._syncedSignals.splice(e, 1)) } return this } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._clock.dispose(), _u(this, "bpm"), this._timeline.dispose(), this._repeatedEvents.dispose(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(Xu.getDefaults(), { bpm: 120, loopEnd: "4m", loopStart: 0, ppq: 192, swing: 0, swingSubdivision: "8n", timeSignature: 4 }) } }]), n }(Xu);

            function qs(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } }
            hu.mixin(Us), uu((function(t) { t.transport = new Us({ context: t }) })), cu((function(t) { t.transport.dispose() })); var Ws = function(t) {
                (0, G.Z)(n, t); var e = qs(n);

                function n(t) { var r; return (0, w.Z)(this, n), (r = e.call(this, t)).input = void 0, r._state = new $u("stopped"), r._synced = !1, r._scheduled = [], r._syncedStart = wu, r._syncedStop = wu, r._state.memory = 100, r._state.increasing = !0, r._volume = r.output = new js({ context: r.context, mute: t.mute, volume: t.volume }), r.volume = r._volume.volume, bu((0, at.Z)(r), "volume"), r.onstop = t.onstop, r } return (0, _.Z)(n, [{ key: "state", get: function() { return this._synced ? "started" === this.context.transport.state ? this._state.getValueAtTime(this.context.transport.seconds) : "stopped" : this._state.getValueAtTime(this.now()) } }, { key: "mute", get: function() { return this._volume.mute }, set: function(t) { this._volume.mute = t } }, { key: "_clampToCurrentTime", value: function(t) { return this._synced ? t : Math.max(t, this.context.currentTime) } }, { key: "start", value: function(t, e, n) { var r = this,
                            o = Ca(t) && this._synced ? this.context.transport.seconds : this.toSeconds(t); if (o = this._clampToCurrentTime(o), this._synced || "started" !== this._state.getValueAtTime(o))
                            if (this.log("start", o), this._state.setStateAtTime("started", o), this._synced) { var i = this._state.get(o);
                                i && (i.offset = this.toSeconds(Xa(e, 0)), i.duration = n ? this.toSeconds(n) : void 0); var a = this.context.transport.schedule((function(t) { r._start(t, e, n) }), o);
                                this._scheduled.push(a), "started" === this.context.transport.state && this.context.transport.getSecondsAtTime(this.immediate()) > o && this._syncedStart(this.now(), this.context.transport.seconds) } else ka(this.context), this._start(o, e, n);
                        else _a(Ka(o, this._state.get(o).time), "Start time must be strictly greater than previous start time"), this._state.cancel(o), this._state.setStateAtTime("started", o), this.log("restart", o), this.restart(o, e, n); return this } }, { key: "stop", value: function(t) { var e = Ca(t) && this._synced ? this.context.transport.seconds : this.toSeconds(t); if (e = this._clampToCurrentTime(e), "started" === this._state.getValueAtTime(e) || Aa(this._state.getNextState("started", e))) { if (this.log("stop", e), this._synced) { var n = this.context.transport.schedule(this._stop.bind(this), e);
                                this._scheduled.push(n) } else this._stop(e);
                            this._state.cancel(e), this._state.setStateAtTime("stopped", e) } return this } }, { key: "restart", value: function(t, e, n) { return t = this.toSeconds(t), "started" === this._state.getValueAtTime(t) && (this._state.cancel(t), this._restart(t, e, n)), this } }, { key: "sync", value: function() { var t = this; return this._synced || (this._synced = !0, this._syncedStart = function(e, n) { if (n > 0) { var r = t._state.get(n); if (r && "started" === r.state && r.time !== n) { var o, i = n - t.toSeconds(r.time);
                                    r.duration && (o = t.toSeconds(r.duration) - i), t._start(e, t.toSeconds(r.offset) + i, o) } } }, this._syncedStop = function(e) { var n = t.context.transport.getSecondsAtTime(Math.max(e - t.sampleTime, 0)); "started" === t._state.getValueAtTime(n) && t._stop(e) }, this.context.transport.on("start", this._syncedStart), this.context.transport.on("loopStart", this._syncedStart), this.context.transport.on("stop", this._syncedStop), this.context.transport.on("pause", this._syncedStop), this.context.transport.on("loopEnd", this._syncedStop)), this } }, { key: "unsync", value: function() { var t = this; return this._synced && (this.context.transport.off("stop", this._syncedStop), this.context.transport.off("pause", this._syncedStop), this.context.transport.off("loopEnd", this._syncedStop), this.context.transport.off("start", this._syncedStart), this.context.transport.off("loopStart", this._syncedStart)), this._synced = !1, this._scheduled.forEach((function(e) { return t.context.transport.clear(e) })), this._scheduled = [], this._state.cancel(0), this._stop(0), this } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this.onstop = wu, this.unsync(), this._volume.dispose(), this._state.dispose(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(es.getDefaults(), { mute: !1, onstop: wu, volume: 0 }) } }]), n }(es);

            function Gs(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Hs = function(t) {
                (0, G.Z)(n, t); var e = Gs(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments, ["url", "onload"]))).name = "ToneBufferSource", t._source = t.context.createBufferSource(), t._internalChannels = [t._source], t._sourceStarted = !1, t._sourceStopped = !1; var r = Ya(n.getDefaults(), arguments, ["url", "onload"]); return rs(t._source, t._gainNode), t._source.onended = function() { return t._stopSource() }, t.playbackRate = new Ku({ context: t.context, param: t._source.playbackRate, units: "positive", value: r.playbackRate }), t.loop = r.loop, t.loopStart = r.loopStart, t.loopEnd = r.loopEnd, t._buffer = new Su(r.url, r.onload, r.onerror), t._internalChannels.push(t._source), t } return (0, _.Z)(n, [{ key: "fadeIn", get: function() { return this._fadeIn }, set: function(t) { this._fadeIn = t } }, { key: "fadeOut", get: function() { return this._fadeOut }, set: function(t) { this._fadeOut = t } }, { key: "curve", get: function() { return this._curve }, set: function(t) { this._curve = t } }, { key: "start", value: function(t, e, n) { var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                        _a(this.buffer.loaded, "buffer is either not set or not loaded"); var o = this.toSeconds(t);
                        this._startGain(o, r), e = this.loop ? Xa(e, this.loopStart) : Xa(e, 0); var i = Math.max(this.toSeconds(e), 0); if (this.loop) { var a = this.toSeconds(this.loopEnd) || this.buffer.duration,
                                u = this.toSeconds(this.loopStart),
                                s = a - u;
                            tu(i, a) && (i = (i - u) % s + u), nu(i, this.buffer.duration) && (i = 0) } if (this._source.buffer = this.buffer.get(), this._source.loopEnd = this.toSeconds(this.loopEnd) || this.buffer.duration, eu(i, this.buffer.duration) && (this._sourceStarted = !0, this._source.start(o, i)), Aa(n)) { var c = this.toSeconds(n);
                            c = Math.max(c, 0), this.stop(o + c) } return this } }, { key: "_stopSource", value: function(t) {!this._sourceStopped && this._sourceStarted && (this._sourceStopped = !0, this._source.stop(this.toSeconds(t)), this._onended()) } }, { key: "loopStart", get: function() { return this._source.loopStart }, set: function(t) { this._source.loopStart = this.toSeconds(t) } }, { key: "loopEnd", get: function() { return this._source.loopEnd }, set: function(t) { this._source.loopEnd = this.toSeconds(t) } }, { key: "buffer", get: function() { return this._buffer }, set: function(t) { this._buffer.set(t) } }, { key: "loop", get: function() { return this._source.loop }, set: function(t) { this._source.loop = t, this._sourceStarted && this.cancelStop() } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._source.onended = null, this._source.disconnect(), this._buffer.dispose(), this.playbackRate.dispose(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(ss.getDefaults(), { url: new Su, loop: !1, loopEnd: 0, loopStart: 0, onload: wu, onerror: wu, playbackRate: 1 }) } }]), n }(ss);

            function Ys(t, e) { return (0, Fa.__awaiter)(this, void 0, void 0, m().mark((function n() { var r, o, i; return m().wrap((function(n) { for (;;) switch (n.prev = n.next) {
                            case 0:
                                return r = e / t.context.sampleRate, o = new Au(1, r, t.context.sampleRate), new t.constructor(Object.assign(t.get(), { frequency: 2 / r, detune: 0, context: o })).toDestination().start(0), n.next = 6, o.render();
                            case 6:
                                return i = n.sent, n.abrupt("return", i.getChannelData(0));
                            case 8:
                            case "end":
                                return n.stop() } }), n) }))) }

            function Xs(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Qs = function(t) {
                (0, G.Z)(n, t); var e = Xs(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments, ["frequency", "type"]))).name = "ToneOscillatorNode", t._oscillator = t.context.createOscillator(), t._internalChannels = [t._oscillator]; var r = Ya(n.getDefaults(), arguments, ["frequency", "type"]); return rs(t._oscillator, t._gainNode), t.type = r.type, t.frequency = new Ku({ context: t.context, param: t._oscillator.frequency, units: "frequency", value: r.frequency }), t.detune = new Ku({ context: t.context, param: t._oscillator.detune, units: "cents", value: r.detune }), bu((0, at.Z)(t), ["frequency", "detune"]), t } return (0, _.Z)(n, [{ key: "start", value: function(t) { var e = this.toSeconds(t); return this.log("start", e), this._startGain(e), this._oscillator.start(e), this } }, { key: "_stopSource", value: function(t) { this._oscillator.stop(t) } }, { key: "setPeriodicWave", value: function(t) { return this._oscillator.setPeriodicWave(t), this } }, { key: "type", get: function() { return this._oscillator.type }, set: function(t) { this._oscillator.type = t } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), "started" === this.state && this.stop(), this._oscillator.disconnect(), this.frequency.dispose(), this.detune.dispose(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(ss.getDefaults(), { detune: 0, frequency: 440, type: "sine" }) } }]), n }(ss);

            function $s(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Js = function(t) {
                (0, G.Z)(n, t); var e = $s(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments, ["frequency", "type"]))).name = "Oscillator", t._oscillator = null; var r = Ya(n.getDefaults(), arguments, ["frequency", "type"]); return t.frequency = new hs({ context: t.context, units: "frequency", value: r.frequency }), bu((0, at.Z)(t), "frequency"), t.detune = new hs({ context: t.context, units: "cents", value: r.detune }), bu((0, at.Z)(t), "detune"), t._partials = r.partials, t._partialCount = r.partialCount, t._type = r.type, r.partialCount && "custom" !== r.type && (t._type = t.baseType + r.partialCount.toString()), t.phase = r.phase, t } return (0, _.Z)(n, [{ key: "_start", value: function(t) { var e = this,
                            n = this.toSeconds(t),
                            r = new Qs({ context: this.context, onended: function() { return e.onstop(e) } });
                        this._oscillator = r, this._wave ? this._oscillator.setPeriodicWave(this._wave) : this._oscillator.type = this._type, this._oscillator.connect(this.output), this.frequency.connect(this._oscillator.frequency), this.detune.connect(this._oscillator.detune), this._oscillator.start(n) } }, { key: "_stop", value: function(t) { var e = this.toSeconds(t);
                        this._oscillator && this._oscillator.stop(e) } }, { key: "_restart", value: function(t) { var e = this.toSeconds(t); return this.log("restart", e), this._oscillator && this._oscillator.cancelStop(), this._state.cancel(e), this } }, { key: "syncFrequency", value: function() { return this.context.transport.syncSignal(this.frequency), this } }, { key: "unsyncFrequency", value: function() { return this.context.transport.unsyncSignal(this.frequency), this } }, { key: "_getCachedPeriodicWave", value: function() { var t = this; if ("custom" === this._type) return n._periodicWaveCache.find((function(e) { return e.phase === t._phase && (n = e.partials, r = t._partials, n.length === r.length && n.every((function(t, e) { return r[e] === t }))); var n, r })); var e = n._periodicWaveCache.find((function(e) { return e.type === t._type && e.phase === t._phase })); return this._partialCount = e ? e.partialCount : this._partialCount, e } }, { key: "type", get: function() { return this._type }, set: function(t) { this._type = t; var e = -1 !== ["sine", "square", "sawtooth", "triangle"].indexOf(t); if (0 === this._phase && e) this._wave = void 0, this._partialCount = 0, null !== this._oscillator && (this._oscillator.type = t);
                        else { var r = this._getCachedPeriodicWave(); if (Aa(r)) { var o = r.partials,
                                    i = r.wave;
                                this._wave = i, this._partials = o, null !== this._oscillator && this._oscillator.setPeriodicWave(this._wave) } else { var a = this._getRealImaginary(t, this._phase),
                                    u = (0, b.Z)(a, 2),
                                    s = u[0],
                                    c = u[1],
                                    l = this.context.createPeriodicWave(s, c);
                                this._wave = l, null !== this._oscillator && this._oscillator.setPeriodicWave(this._wave), n._periodicWaveCache.push({ imag: c, partialCount: this._partialCount, partials: this._partials, phase: this._phase, real: s, type: this._type, wave: this._wave }), n._periodicWaveCache.length > 100 && n._periodicWaveCache.shift() } } } }, { key: "baseType", get: function() { return this._type.replace(this.partialCount.toString(), "") }, set: function(t) { this.partialCount && "custom" !== this._type && "custom" !== t ? this.type = t + this.partialCount : this.type = t } }, { key: "partialCount", get: function() { return this._partialCount }, set: function(t) { wa(t, 0); var e = this._type,
                            n = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type); if (n && (e = n[1]), "custom" !== this._type) this.type = 0 === t ? e : e + t.toString();
                        else { var r = new Float32Array(t);
                            this._partials.forEach((function(t, e) { return r[e] = t })), this._partials = Array.from(r), this.type = this._type } } }, { key: "_getRealImaginary", value: function(t, e) { var n = 2048,
                            r = new Float32Array(n),
                            o = new Float32Array(n),
                            i = 1; if ("custom" === t) { if (i = this._partials.length + 1, this._partialCount = this._partials.length, n = i, 0 === this._partials.length) return [r, o] } else { var a = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(t);
                            a ? (i = parseInt(a[2], 10) + 1, this._partialCount = parseInt(a[2], 10), t = a[1], n = i = Math.max(i, 2)) : this._partialCount = 0, this._partials = [] } for (var u = 1; u < n; ++u) { var s = 2 / (u * Math.PI),
                                c = void 0; switch (t) {
                                case "sine":
                                    c = u <= i ? 1 : 0, this._partials[u - 1] = c; break;
                                case "square":
                                    c = 1 & u ? 2 * s : 0, this._partials[u - 1] = c; break;
                                case "sawtooth":
                                    c = s * (1 & u ? 1 : -1), this._partials[u - 1] = c; break;
                                case "triangle":
                                    c = 1 & u ? s * s * 2 * (u - 1 >> 1 & 1 ? -1 : 1) : 0, this._partials[u - 1] = c; break;
                                case "custom":
                                    c = this._partials[u - 1]; break;
                                default:
                                    throw new TypeError("Oscillator: invalid type: " + t) }
                            0 !== c ? (r[u] = -c * Math.sin(e * u), o[u] = c * Math.cos(e * u)) : (r[u] = 0, o[u] = 0) } return [r, o] } }, { key: "_inverseFFT", value: function(t, e, n) { for (var r = 0, o = t.length, i = 0; i < o; i++) r += t[i] * Math.cos(i * n) + e[i] * Math.sin(i * n); return r } }, { key: "getInitialValue", value: function() { for (var t = this._getRealImaginary(this._type, 0), e = (0, b.Z)(t, 2), n = e[0], r = e[1], o = 0, i = 2 * Math.PI, a = 0; a < 32; a++) o = Math.max(this._inverseFFT(n, r, a / 32 * i), o); return ru(-this._inverseFFT(n, r, this._phase) / o, -1, 1) } }, { key: "partials", get: function() { return this._partials.slice(0, this.partialCount) }, set: function(t) { this._partials = t, this._partialCount = this._partials.length, t.length && (this.type = "custom") } }, { key: "phase", get: function() { return this._phase * (180 / Math.PI) }, set: function(t) { this._phase = t * Math.PI / 180, this.type = this._type } }, { key: "asArray", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1024; return (0, Fa.__awaiter)(this, void 0, void 0, m().mark((function e() { return m().wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", Ys(this, t));
                                    case 1:
                                    case "end":
                                        return e.stop() } }), e, this) }))) } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), null !== this._oscillator && this._oscillator.dispose(), this._wave = void 0, this.frequency.dispose(), this.detune.dispose(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(Ws.getDefaults(), { detune: 0, frequency: 440, partialCount: 0, partials: [], phase: 0, type: "sine" }) } }]), n }(Ws);

            function Ks(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } }
            Js._periodicWaveCache = []; var tc = function(t) {
                (0, G.Z)(n, t); var e = Ks(n);

                function n() { return (0, w.Z)(this, n), e.call(this, Object.assign(Ya(n.getDefaults(), arguments, ["context"]))) } return (0, _.Z)(n, [{ key: "connect", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0; return ps(this, t, e, n), this } }]), n }(es);

            function ec(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var nc = function(t) {
                (0, G.Z)(n, t); var e = ec(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Object.assign(Ya(n.getDefaults(), arguments, ["mapping", "length"])))).name = "WaveShaper", t._shaper = t.context.createWaveShaper(), t.input = t._shaper, t.output = t._shaper; var r = Ya(n.getDefaults(), arguments, ["mapping", "length"]); return Za(r.mapping) || r.mapping instanceof Float32Array ? t.curve = Float32Array.from(r.mapping) : Ta(r.mapping) && t.setMap(r.mapping, r.length), t } return (0, _.Z)(n, [{ key: "setMap", value: function(t) { for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1024, n = new Float32Array(e), r = 0, o = e; r < o; r++) { var i = r / (o - 1) * 2 - 1;
                            n[r] = t(i, r) } return this.curve = n, this } }, { key: "curve", get: function() { return this._shaper.curve }, set: function(t) { this._shaper.curve = t } }, { key: "oversample", get: function() { return this._shaper.oversample }, set: function(t) { _a(["none", "2x", "4x"].some((function(e) { return e.includes(t) })), "oversampling must be either 'none', '2x', or '4x'"), this._shaper.oversample = t } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._shaper.disconnect(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(hs.getDefaults(), { length: 1024 }) } }]), n }(tc);

            function rc(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var oc = function(t) {
                (0, G.Z)(n, t); var e = rc(n);

                function n() { var t; return (0, w.Z)(this, n), (t = e.apply(this, arguments)).name = "AudioToGain", t._norm = new nc({ context: t.context, mapping: function(t) { return (t + 1) / 2 } }), t.input = t._norm, t.output = t._norm, t } return (0, _.Z)(n, [{ key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._norm.dispose(), this } }]), n }(tc);

            function ic(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var ac = function(t) {
                (0, G.Z)(n, t); var e = ic(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Object.assign(Ya(n.getDefaults(), arguments, ["value"])))).name = "Multiply", t.override = !1; var r = Ya(n.getDefaults(), arguments, ["value"]); return t._mult = t.input = t.output = new as({ context: t.context, minValue: r.minValue, maxValue: r.maxValue }), t.factor = t._param = t._mult.gain, t.factor.setValueAtTime(r.value, 0), t } return (0, _.Z)(n, [{ key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._mult.dispose(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(hs.getDefaults(), { value: 0 }) } }]), n }(hs);

            function uc(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var sc = function(t) {
                (0, G.Z)(n, t); var e = uc(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments, ["frequency", "type", "modulationType"]))).name = "AMOscillator", t._modulationScale = new oc({ context: t.context }), t._modulationNode = new as({ context: t.context }); var r = Ya(n.getDefaults(), arguments, ["frequency", "type", "modulationType"]); return t._carrier = new Js({ context: t.context, detune: r.detune, frequency: r.frequency, onstop: function() { return t.onstop((0, at.Z)(t)) }, phase: r.phase, type: r.type }), t.frequency = t._carrier.frequency, t.detune = t._carrier.detune, t._modulator = new Js({ context: t.context, phase: r.phase, type: r.modulationType }), t.harmonicity = new ac({ context: t.context, units: "positive", value: r.harmonicity }), t.frequency.chain(t.harmonicity, t._modulator.frequency), t._modulator.chain(t._modulationScale, t._modulationNode.gain), t._carrier.chain(t._modulationNode, t.output), bu((0, at.Z)(t), ["frequency", "detune", "harmonicity"]), t } return (0, _.Z)(n, [{ key: "_start", value: function(t) { this._modulator.start(t), this._carrier.start(t) } }, { key: "_stop", value: function(t) { this._modulator.stop(t), this._carrier.stop(t) } }, { key: "_restart", value: function(t) { this._modulator.restart(t), this._carrier.restart(t) } }, { key: "type", get: function() { return this._carrier.type }, set: function(t) { this._carrier.type = t } }, { key: "baseType", get: function() { return this._carrier.baseType }, set: function(t) { this._carrier.baseType = t } }, { key: "partialCount", get: function() { return this._carrier.partialCount }, set: function(t) { this._carrier.partialCount = t } }, { key: "modulationType", get: function() { return this._modulator.type }, set: function(t) { this._modulator.type = t } }, { key: "phase", get: function() { return this._carrier.phase }, set: function(t) { this._carrier.phase = t, this._modulator.phase = t } }, { key: "partials", get: function() { return this._carrier.partials }, set: function(t) { this._carrier.partials = t } }, { key: "asArray", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1024; return (0, Fa.__awaiter)(this, void 0, void 0, m().mark((function e() { return m().wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", Ys(this, t));
                                    case 1:
                                    case "end":
                                        return e.stop() } }), e, this) }))) } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this.frequency.dispose(), this.detune.dispose(), this.harmonicity.dispose(), this._carrier.dispose(), this._modulator.dispose(), this._modulationNode.dispose(), this._modulationScale.dispose(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(Js.getDefaults(), { harmonicity: 1, modulationType: "square" }) } }]), n }(Ws);

            function cc(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var lc = function(t) {
                (0, G.Z)(n, t); var e = cc(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments, ["frequency", "type", "modulationType"]))).name = "FMOscillator", t._modulationNode = new as({ context: t.context, gain: 0 }); var r = Ya(n.getDefaults(), arguments, ["frequency", "type", "modulationType"]); return t._carrier = new Js({ context: t.context, detune: r.detune, frequency: 0, onstop: function() { return t.onstop((0, at.Z)(t)) }, phase: r.phase, type: r.type }), t.detune = t._carrier.detune, t.frequency = new hs({ context: t.context, units: "frequency", value: r.frequency }), t._modulator = new Js({ context: t.context, phase: r.phase, type: r.modulationType }), t.harmonicity = new ac({ context: t.context, units: "positive", value: r.harmonicity }), t.modulationIndex = new ac({ context: t.context, units: "positive", value: r.modulationIndex }), t.frequency.connect(t._carrier.frequency), t.frequency.chain(t.harmonicity, t._modulator.frequency), t.frequency.chain(t.modulationIndex, t._modulationNode), t._modulator.connect(t._modulationNode.gain), t._modulationNode.connect(t._carrier.frequency), t._carrier.connect(t.output), t.detune.connect(t._modulator.detune), bu((0, at.Z)(t), ["modulationIndex", "frequency", "detune", "harmonicity"]), t } return (0, _.Z)(n, [{ key: "_start", value: function(t) { this._modulator.start(t), this._carrier.start(t) } }, { key: "_stop", value: function(t) { this._modulator.stop(t), this._carrier.stop(t) } }, { key: "_restart", value: function(t) { return this._modulator.restart(t), this._carrier.restart(t), this } }, { key: "type", get: function() { return this._carrier.type }, set: function(t) { this._carrier.type = t } }, { key: "baseType", get: function() { return this._carrier.baseType }, set: function(t) { this._carrier.baseType = t } }, { key: "partialCount", get: function() { return this._carrier.partialCount }, set: function(t) { this._carrier.partialCount = t } }, { key: "modulationType", get: function() { return this._modulator.type }, set: function(t) { this._modulator.type = t } }, { key: "phase", get: function() { return this._carrier.phase }, set: function(t) { this._carrier.phase = t, this._modulator.phase = t } }, { key: "partials", get: function() { return this._carrier.partials }, set: function(t) { this._carrier.partials = t } }, { key: "asArray", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1024; return (0, Fa.__awaiter)(this, void 0, void 0, m().mark((function e() { return m().wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", Ys(this, t));
                                    case 1:
                                    case "end":
                                        return e.stop() } }), e, this) }))) } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this.frequency.dispose(), this.harmonicity.dispose(), this._carrier.dispose(), this._modulator.dispose(), this._modulationNode.dispose(), this.modulationIndex.dispose(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(Js.getDefaults(), { harmonicity: 1, modulationIndex: 2, modulationType: "square" }) } }]), n }(Ws);

            function fc(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var hc = function(t) {
                (0, G.Z)(n, t); var e = fc(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments, ["frequency", "width"]))).name = "PulseOscillator", t._widthGate = new as({ context: t.context, gain: 0 }), t._thresh = new nc({ context: t.context, mapping: function(t) { return t <= 0 ? -1 : 1 } }); var r = Ya(n.getDefaults(), arguments, ["frequency", "width"]); return t.width = new hs({ context: t.context, units: "audioRange", value: r.width }), t._triangle = new Js({ context: t.context, detune: r.detune, frequency: r.frequency, onstop: function() { return t.onstop((0, at.Z)(t)) }, phase: r.phase, type: "triangle" }), t.frequency = t._triangle.frequency, t.detune = t._triangle.detune, t._triangle.chain(t._thresh, t.output), t.width.chain(t._widthGate, t._thresh), bu((0, at.Z)(t), ["width", "frequency", "detune"]), t } return (0, _.Z)(n, [{ key: "_start", value: function(t) { t = this.toSeconds(t), this._triangle.start(t), this._widthGate.gain.setValueAtTime(1, t) } }, { key: "_stop", value: function(t) { t = this.toSeconds(t), this._triangle.stop(t), this._widthGate.gain.cancelScheduledValues(t), this._widthGate.gain.setValueAtTime(0, t) } }, { key: "_restart", value: function(t) { this._triangle.restart(t), this._widthGate.gain.cancelScheduledValues(t), this._widthGate.gain.setValueAtTime(1, t) } }, { key: "phase", get: function() { return this._triangle.phase }, set: function(t) { this._triangle.phase = t } }, { key: "type", get: function() { return "pulse" } }, { key: "baseType", get: function() { return "pulse" } }, { key: "partials", get: function() { return [] } }, { key: "partialCount", get: function() { return 0 } }, { key: "carrierType", set: function(t) { this._triangle.type = t } }, { key: "asArray", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1024; return (0, Fa.__awaiter)(this, void 0, void 0, m().mark((function e() { return m().wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", Ys(this, t));
                                    case 1:
                                    case "end":
                                        return e.stop() } }), e, this) }))) } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._triangle.dispose(), this.width.dispose(), this._widthGate.dispose(), this._thresh.dispose(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(Ws.getDefaults(), { detune: 0, frequency: 440, phase: 0, type: "pulse", width: .2 }) } }]), n }(Ws);

            function pc(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var dc = function(t) {
                (0, G.Z)(n, t); var e = pc(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments, ["frequency", "type", "spread"]))).name = "FatOscillator", t._oscillators = []; var r = Ya(n.getDefaults(), arguments, ["frequency", "type", "spread"]); return t.frequency = new hs({ context: t.context, units: "frequency", value: r.frequency }), t.detune = new hs({ context: t.context, units: "cents", value: r.detune }), t._spread = r.spread, t._type = r.type, t._phase = r.phase, t._partials = r.partials, t._partialCount = r.partialCount, t.count = r.count, bu((0, at.Z)(t), ["frequency", "detune"]), t } return (0, _.Z)(n, [{ key: "_start", value: function(t) { t = this.toSeconds(t), this._forEach((function(e) { return e.start(t) })) } }, { key: "_stop", value: function(t) { t = this.toSeconds(t), this._forEach((function(e) { return e.stop(t) })) } }, { key: "_restart", value: function(t) { this._forEach((function(e) { return e.restart(t) })) } }, { key: "_forEach", value: function(t) { for (var e = 0; e < this._oscillators.length; e++) t(this._oscillators[e], e) } }, { key: "type", get: function() { return this._type }, set: function(t) { this._type = t, this._forEach((function(e) { return e.type = t })) } }, { key: "spread", get: function() { return this._spread }, set: function(t) { if (this._spread = t, this._oscillators.length > 1) { var e = -t / 2,
                                n = t / (this._oscillators.length - 1);
                            this._forEach((function(t, r) { return t.detune.value = e + n * r })) } } }, { key: "count", get: function() { return this._oscillators.length }, set: function(t) { var e = this; if (wa(t, 1), this._oscillators.length !== t) { this._forEach((function(t) { return t.dispose() })), this._oscillators = []; for (var n = 0; n < t; n++) { var r = new Js({ context: this.context, volume: -6 - 1.1 * t, type: this._type, phase: this._phase + n / t * 360, partialCount: this._partialCount, onstop: 0 === n ? function() { return e.onstop(e) } : wu }); "custom" === this.type && (r.partials = this._partials), this.frequency.connect(r.frequency), this.detune.connect(r.detune), r.detune.overridden = !1, r.connect(this.output), this._oscillators[n] = r }
                            this.spread = this._spread, "started" === this.state && this._forEach((function(t) { return t.start() })) } } }, { key: "phase", get: function() { return this._phase }, set: function(t) { var e = this;
                        this._phase = t, this._forEach((function(t, n) { return t.phase = e._phase + n / e.count * 360 })) } }, { key: "baseType", get: function() { return this._oscillators[0].baseType }, set: function(t) { this._forEach((function(e) { return e.baseType = t })), this._type = this._oscillators[0].type } }, { key: "partials", get: function() { return this._oscillators[0].partials }, set: function(t) { this._partials = t, this._partialCount = this._partials.length, t.length && (this._type = "custom", this._forEach((function(e) { return e.partials = t }))) } }, { key: "partialCount", get: function() { return this._oscillators[0].partialCount }, set: function(t) { this._partialCount = t, this._forEach((function(e) { return e.partialCount = t })), this._type = this._oscillators[0].type } }, { key: "asArray", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1024; return (0, Fa.__awaiter)(this, void 0, void 0, m().mark((function e() { return m().wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", Ys(this, t));
                                    case 1:
                                    case "end":
                                        return e.stop() } }), e, this) }))) } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this.frequency.dispose(), this.detune.dispose(), this._forEach((function(t) { return t.dispose() })), this } }], [{ key: "getDefaults", value: function() { return Object.assign(Js.getDefaults(), { count: 3, spread: 20, type: "sawtooth" }) } }]), n }(Ws);

            function vc(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var mc = function(t) {
                (0, G.Z)(n, t); var e = vc(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments, ["frequency", "modulationFrequency"]))).name = "PWMOscillator", t.sourceType = "pwm", t._scale = new ac({ context: t.context, value: 2 }); var r = Ya(n.getDefaults(), arguments, ["frequency", "modulationFrequency"]); return t._pulse = new hc({ context: t.context, frequency: r.modulationFrequency }), t._pulse.carrierType = "sine", t.modulationFrequency = t._pulse.frequency, t._modulator = new Js({ context: t.context, detune: r.detune, frequency: r.frequency, onstop: function() { return t.onstop((0, at.Z)(t)) }, phase: r.phase }), t.frequency = t._modulator.frequency, t.detune = t._modulator.detune, t._modulator.chain(t._scale, t._pulse.width), t._pulse.connect(t.output), bu((0, at.Z)(t), ["modulationFrequency", "frequency", "detune"]), t } return (0, _.Z)(n, [{ key: "_start", value: function(t) { t = this.toSeconds(t), this._modulator.start(t), this._pulse.start(t) } }, { key: "_stop", value: function(t) { t = this.toSeconds(t), this._modulator.stop(t), this._pulse.stop(t) } }, { key: "_restart", value: function(t) { this._modulator.restart(t), this._pulse.restart(t) } }, { key: "type", get: function() { return "pwm" } }, { key: "baseType", get: function() { return "pwm" } }, { key: "partials", get: function() { return [] } }, { key: "partialCount", get: function() { return 0 } }, { key: "phase", get: function() { return this._modulator.phase }, set: function(t) { this._modulator.phase = t } }, { key: "asArray", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1024; return (0, Fa.__awaiter)(this, void 0, void 0, m().mark((function e() { return m().wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", Ys(this, t));
                                    case 1:
                                    case "end":
                                        return e.stop() } }), e, this) }))) } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._pulse.dispose(), this._scale.dispose(), this._modulator.dispose(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(Ws.getDefaults(), { detune: 0, frequency: 440, modulationFrequency: .4, phase: 0, type: "pwm" }) } }]), n }(Ws);

            function gc(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var yc = { am: sc, fat: dc, fm: lc, oscillator: Js, pulse: hc, pwm: mc },
                bc = function(t) {
                    (0, G.Z)(n, t); var e = gc(n);

                    function n() { var t;
                        (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments, ["frequency", "type"]))).name = "OmniOscillator"; var r = Ya(n.getDefaults(), arguments, ["frequency", "type"]); return t.frequency = new hs({ context: t.context, units: "frequency", value: r.frequency }), t.detune = new hs({ context: t.context, units: "cents", value: r.detune }), bu((0, at.Z)(t), ["frequency", "detune"]), t.set(r), t } return (0, _.Z)(n, [{ key: "_start", value: function(t) { this._oscillator.start(t) } }, { key: "_stop", value: function(t) { this._oscillator.stop(t) } }, { key: "_restart", value: function(t) { return this._oscillator.restart(t), this } }, { key: "type", get: function() { var t = this,
                                e = ""; return ["am", "fm", "fat"].some((function(e) { return t._sourceType === e })) && (e = this._sourceType), e + this._oscillator.type }, set: function(t) { "fm" === t.substr(0, 2) ? (this._createNewOscillator("fm"), this._oscillator = this._oscillator, this._oscillator.type = t.substr(2)) : "am" === t.substr(0, 2) ? (this._createNewOscillator("am"), this._oscillator = this._oscillator, this._oscillator.type = t.substr(2)) : "fat" === t.substr(0, 3) ? (this._createNewOscillator("fat"), this._oscillator = this._oscillator, this._oscillator.type = t.substr(3)) : "pwm" === t ? (this._createNewOscillator("pwm"), this._oscillator = this._oscillator) : "pulse" === t ? this._createNewOscillator("pulse") : (this._createNewOscillator("oscillator"), this._oscillator = this._oscillator, this._oscillator.type = t) } }, { key: "partials", get: function() { return this._oscillator.partials }, set: function(t) { this._getOscType(this._oscillator, "pulse") || this._getOscType(this._oscillator, "pwm") || (this._oscillator.partials = t) } }, { key: "partialCount", get: function() { return this._oscillator.partialCount }, set: function(t) { this._getOscType(this._oscillator, "pulse") || this._getOscType(this._oscillator, "pwm") || (this._oscillator.partialCount = t) } }, { key: "set", value: function(t) { return Reflect.has(t, "type") && t.type && (this.type = t.type), (0, Ba.Z)((0, Y.Z)(n.prototype), "set", this).call(this, t), this } }, { key: "_createNewOscillator", value: function(t) { var e = this; if (t !== this._sourceType) { this._sourceType = t; var n = yc[t],
                                    r = this.now(); if (this._oscillator) { var o = this._oscillator;
                                    o.stop(r), this.context.setTimeout((function() { return o.dispose() }), this.blockTime) }
                                this._oscillator = new n({ context: this.context }), this.frequency.connect(this._oscillator.frequency), this.detune.connect(this._oscillator.detune), this._oscillator.connect(this.output), this._oscillator.onstop = function() { return e.onstop(e) }, "started" === this.state && this._oscillator.start(r) } } }, { key: "phase", get: function() { return this._oscillator.phase }, set: function(t) { this._oscillator.phase = t } }, { key: "sourceType", get: function() { return this._sourceType }, set: function(t) { var e = "sine"; "pwm" !== this._oscillator.type && "pulse" !== this._oscillator.type && (e = this._oscillator.type), "fm" === t ? this.type = "fm" + e : "am" === t ? this.type = "am" + e : "fat" === t ? this.type = "fat" + e : "oscillator" === t ? this.type = e : "pulse" === t ? this.type = "pulse" : "pwm" === t && (this.type = "pwm") } }, { key: "_getOscType", value: function(t, e) { return t instanceof yc[e] } }, { key: "baseType", get: function() { return this._oscillator.baseType }, set: function(t) { this._getOscType(this._oscillator, "pulse") || this._getOscType(this._oscillator, "pwm") || "pulse" === t || "pwm" === t || (this._oscillator.baseType = t) } }, { key: "width", get: function() { return this._getOscType(this._oscillator, "pulse") ? this._oscillator.width : void 0 } }, { key: "count", get: function() { return this._getOscType(this._oscillator, "fat") ? this._oscillator.count : void 0 }, set: function(t) { this._getOscType(this._oscillator, "fat") && Ea(t) && (this._oscillator.count = t) } }, { key: "spread", get: function() { return this._getOscType(this._oscillator, "fat") ? this._oscillator.spread : void 0 }, set: function(t) { this._getOscType(this._oscillator, "fat") && Ea(t) && (this._oscillator.spread = t) } }, { key: "modulationType", get: function() { return this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am") ? this._oscillator.modulationType : void 0 }, set: function(t) {
                            (this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am")) && Ra(t) && (this._oscillator.modulationType = t) } }, { key: "modulationIndex", get: function() { return this._getOscType(this._oscillator, "fm") ? this._oscillator.modulationIndex : void 0 } }, { key: "harmonicity", get: function() { return this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am") ? this._oscillator.harmonicity : void 0 } }, { key: "modulationFrequency", get: function() { return this._getOscType(this._oscillator, "pwm") ? this._oscillator.modulationFrequency : void 0 } }, { key: "asArray", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1024; return (0, Fa.__awaiter)(this, void 0, void 0, m().mark((function e() { return m().wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", Ys(this, t));
                                        case 1:
                                        case "end":
                                            return e.stop() } }), e, this) }))) } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this.detune.dispose(), this.frequency.dispose(), this._oscillator.dispose(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(Js.getDefaults(), lc.getDefaults(), sc.getDefaults(), dc.getDefaults(), hc.getDefaults(), mc.getDefaults()) } }]), n }(Ws);

            function _c(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0,
                    n = new WeakMap; return function(r, o) { Reflect.defineProperty(r, o, { configurable: !0, enumerable: !0, get: function() { return n.get(this) }, set: function(r) { wa(r, t, e), n.set(this, r) } }) } }

            function wc(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0,
                    n = new WeakMap; return function(r, o) { Reflect.defineProperty(r, o, { configurable: !0, enumerable: !0, get: function() { return n.get(this) }, set: function(r) { wa(this.toSeconds(r), t, e), n.set(this, r) } }) } }

            function kc(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var xc = function(t) {
                (0, G.Z)(n, t); var e = kc(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments, ["url", "onload"]))).name = "Player", t._activeSources = new Set; var r = Ya(n.getDefaults(), arguments, ["url", "onload"]); return t._buffer = new Su({ onload: t._onload.bind((0, at.Z)(t), r.onload), onerror: r.onerror, reverse: r.reverse, url: r.url }), t.autostart = r.autostart, t._loop = r.loop, t._loopStart = r.loopStart, t._loopEnd = r.loopEnd, t._playbackRate = r.playbackRate, t.fadeIn = r.fadeIn, t.fadeOut = r.fadeOut, t } return (0, _.Z)(n, [{ key: "load", value: function(t) { return (0, Fa.__awaiter)(this, void 0, void 0, m().mark((function e() { return m().wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this._buffer.load(t);
                                    case 2:
                                        return this._onload(), e.abrupt("return", this);
                                    case 4:
                                    case "end":
                                        return e.stop() } }), e, this) }))) } }, { key: "_onload", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wu;
                        t(), this.autostart && this.start() } }, { key: "_onSourceEnd", value: function(t) { this.onstop(this), this._activeSources.delete(t), 0 !== this._activeSources.size || this._synced || "started" !== this._state.getValueAtTime(this.now()) || (this._state.cancel(this.now()), this._state.setStateAtTime("stopped", this.now())) } }, { key: "start", value: function(t, e, r) { return (0, Ba.Z)((0, Y.Z)(n.prototype), "start", this).call(this, t, e, r), this } }, { key: "_start", value: function(t, e, n) { e = this._loop ? Xa(e, this._loopStart) : Xa(e, 0); var r = this.toSeconds(e),
                            o = n;
                        n = Xa(n, Math.max(this._buffer.duration - r, 0)); var i = this.toSeconds(n);
                        i /= this._playbackRate, t = this.toSeconds(t); var a = new Hs({ url: this._buffer, context: this.context, fadeIn: this.fadeIn, fadeOut: this.fadeOut, loop: this._loop, loopEnd: this._loopEnd, loopStart: this._loopStart, onended: this._onSourceEnd.bind(this), playbackRate: this._playbackRate }).connect(this.output);
                        this._loop || this._synced || (this._state.cancel(t + i), this._state.setStateAtTime("stopped", t + i, { implicitEnd: !0 })), this._activeSources.add(a), this._loop && Ca(o) ? a.start(t, r) : a.start(t, r, i - this.toSeconds(this.fadeOut)) } }, { key: "_stop", value: function(t) { var e = this.toSeconds(t);
                        this._activeSources.forEach((function(t) { return t.stop(e) })) } }, { key: "restart", value: function(t, e, r) { return (0, Ba.Z)((0, Y.Z)(n.prototype), "restart", this).call(this, t, e, r), this } }, { key: "_restart", value: function(t, e, n) { this._stop(t), this._start(t, e, n) } }, { key: "seek", value: function(t, e) { var n = this.toSeconds(e); if ("started" === this._state.getValueAtTime(n)) { var r = this.toSeconds(t);
                            this._stop(n), this._start(n, r) } return this } }, { key: "setLoopPoints", value: function(t, e) { return this.loopStart = t, this.loopEnd = e, this } }, { key: "loopStart", get: function() { return this._loopStart }, set: function(t) { this._loopStart = t, this.buffer.loaded && wa(this.toSeconds(t), 0, this.buffer.duration), this._activeSources.forEach((function(e) { e.loopStart = t })) } }, { key: "loopEnd", get: function() { return this._loopEnd }, set: function(t) { this._loopEnd = t, this.buffer.loaded && wa(this.toSeconds(t), 0, this.buffer.duration), this._activeSources.forEach((function(e) { e.loopEnd = t })) } }, { key: "buffer", get: function() { return this._buffer }, set: function(t) { this._buffer.set(t) } }, { key: "loop", get: function() { return this._loop }, set: function(t) { if (this._loop !== t && (this._loop = t, this._activeSources.forEach((function(e) { e.loop = t })), t)) { var e = this._state.getNextState("stopped", this.now());
                            e && this._state.cancel(e.time) } } }, { key: "playbackRate", get: function() { return this._playbackRate }, set: function(t) { this._playbackRate = t; var e = this.now(),
                            n = this._state.getNextState("stopped", e);
                        n && n.implicitEnd && (this._state.cancel(n.time), this._activeSources.forEach((function(t) { return t.cancelStop() }))), this._activeSources.forEach((function(n) { n.playbackRate.setValueAtTime(t, e) })) } }, { key: "reverse", get: function() { return this._buffer.reverse }, set: function(t) { this._buffer.reverse = t } }, { key: "loaded", get: function() { return this._buffer.loaded } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._activeSources.forEach((function(t) { return t.dispose() })), this._activeSources.clear(), this._buffer.dispose(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(Ws.getDefaults(), { autostart: !1, fadeIn: 0, fadeOut: 0, loop: !1, loopEnd: 0, loopStart: 0, onload: wu, onerror: wu, playbackRate: 1, reverse: !1 }) } }]), n }(Ws);
            (0, Fa.__decorate)([wc(0)], xc.prototype, "fadeIn", void 0), (0, Fa.__decorate)([wc(0)], xc.prototype, "fadeOut", void 0);

            function Oc(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Sc = function(t) {
                (0, G.Z)(n, t); var e = Oc(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments, ["attack", "decay", "sustain", "release"]))).name = "Envelope", t._sig = new hs({ context: t.context, value: 0 }), t.output = t._sig, t.input = void 0; var r = Ya(n.getDefaults(), arguments, ["attack", "decay", "sustain", "release"]); return t.attack = r.attack, t.decay = r.decay, t.sustain = r.sustain, t.release = r.release, t.attackCurve = r.attackCurve, t.releaseCurve = r.releaseCurve, t.decayCurve = r.decayCurve, t } return (0, _.Z)(n, [{ key: "value", get: function() { return this.getValueAtTime(this.now()) } }, { key: "_getCurve", value: function(t, e) { if (Ra(t)) return t; var n; for (n in Cc)
                            if (Cc[n][e] === t) return n;
                        return t } }, { key: "_setCurve", value: function(t, e, n) { if (Ra(n) && Reflect.has(Cc, n)) { var r = Cc[n];
                            Pa(r) ? "_decayCurve" !== t && (this[t] = r[e]) : this[t] = r } else { if (!Za(n) || "_decayCurve" === t) throw new Error("Envelope: invalid curve: " + n);
                            this[t] = n } } }, { key: "attackCurve", get: function() { return this._getCurve(this._attackCurve, "In") }, set: function(t) { this._setCurve("_attackCurve", "In", t) } }, { key: "releaseCurve", get: function() { return this._getCurve(this._releaseCurve, "Out") }, set: function(t) { this._setCurve("_releaseCurve", "Out", t) } }, { key: "decayCurve", get: function() { return this._decayCurve }, set: function(t) { _a(["linear", "exponential"].some((function(e) { return e === t })), "Invalid envelope curve: ".concat(t)), this._decayCurve = t } }, { key: "triggerAttack", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        this.log("triggerAttack", t, e), t = this.toSeconds(t); var n = this.toSeconds(this.attack),
                            r = n,
                            o = this.toSeconds(this.decay),
                            i = this.getValueAtTime(t); if (i > 0) { var a = 1 / r,
                                u = 1 - i;
                            r = u / a } if (r < this.sampleTime) this._sig.cancelScheduledValues(t), this._sig.setValueAtTime(e, t);
                        else if ("linear" === this._attackCurve) this._sig.linearRampTo(e, r, t);
                        else if ("exponential" === this._attackCurve) this._sig.targetRampTo(e, r, t);
                        else { this._sig.cancelAndHoldAtTime(t); for (var s = this._attackCurve, c = 1; c < s.length; c++)
                                if (s[c - 1] <= i && i <= s[c]) {
                                    (s = this._attackCurve.slice(c))[0] = i; break }
                            this._sig.setValueCurveAtTime(s, t, r, e) } if (o && this.sustain < 1) { var l = e * this.sustain,
                                f = t + r;
                            this.log("decay", f), "linear" === this._decayCurve ? this._sig.linearRampToValueAtTime(l, o + f) : this._sig.exponentialApproachValueAtTime(l, f, o) } return this } }, { key: "triggerRelease", value: function(t) { this.log("triggerRelease", t), t = this.toSeconds(t); var e = this.getValueAtTime(t); if (e > 0) { var n = this.toSeconds(this.release);
                            n < this.sampleTime ? this._sig.setValueAtTime(0, t) : "linear" === this._releaseCurve ? this._sig.linearRampTo(0, n, t) : "exponential" === this._releaseCurve ? this._sig.targetRampTo(0, n, t) : (_a(Za(this._releaseCurve), "releaseCurve must be either 'linear', 'exponential' or an array"), this._sig.cancelAndHoldAtTime(t), this._sig.setValueCurveAtTime(this._releaseCurve, t, n, e)) } return this } }, { key: "getValueAtTime", value: function(t) { return this._sig.getValueAtTime(t) } }, { key: "triggerAttackRelease", value: function(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1; return e = this.toSeconds(e), this.triggerAttack(e, n), this.triggerRelease(e + this.toSeconds(t)), this } }, { key: "cancel", value: function(t) { return this._sig.cancelScheduledValues(this.toSeconds(t)), this } }, { key: "connect", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0; return ps(this, t, e, n), this } }, { key: "asArray", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1024; return (0, Fa.__awaiter)(this, void 0, void 0, m().mark((function e() { var n, r, o, i, a, u, s, c; return m().wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t / this.context.sampleRate, r = new Au(1, n, this.context.sampleRate), o = this.toSeconds(this.attack) + this.toSeconds(this.decay), i = o + this.toSeconds(this.release), u = i + (a = .1 * i), (s = new this.constructor(Object.assign(this.get(), { attack: n * this.toSeconds(this.attack) / u, decay: n * this.toSeconds(this.decay) / u, release: n * this.toSeconds(this.release) / u, context: r })))._sig.toDestination(), s.triggerAttackRelease(n * (o + a) / u, 0), e.next = 11, r.render();
                                    case 11:
                                        return c = e.sent, e.abrupt("return", c.getChannelData(0));
                                    case 13:
                                    case "end":
                                        return e.stop() } }), e, this) }))) } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._sig.dispose(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(es.getDefaults(), { attack: .01, attackCurve: "linear", decay: .1, decayCurve: "exponential", release: 1, releaseCurve: "exponential", sustain: .5 }) } }]), n }(es);
            (0, Fa.__decorate)([wc(0)], Sc.prototype, "attack", void 0), (0, Fa.__decorate)([wc(0)], Sc.prototype, "decay", void 0), (0, Fa.__decorate)([_c(0, 1)], Sc.prototype, "sustain", void 0), (0, Fa.__decorate)([wc(0)], Sc.prototype, "release", void 0); var Cc = function() { var t, e, n = 128,
                    r = []; for (t = 0; t < n; t++) r[t] = Math.sin(t / 127 * (Math.PI / 2)); var o = []; for (t = 0; t < 127; t++) { e = t / 127; var i = Math.sin(e * (2 * Math.PI) * 6.4 - Math.PI / 2) + 1;
                    o[t] = i / 10 + .83 * e }
                o[127] = 1; var a = []; for (t = 0; t < n; t++) a[t] = Math.ceil(t / 127 * 5) / 5; var u = []; for (t = 0; t < n; t++) e = t / 127, u[t] = .5 * (1 - Math.cos(Math.PI * e)); var s, c = []; for (t = 0; t < n; t++) { e = t / 127; var l = 4 * Math.pow(e, 3) + .2,
                        f = Math.cos(l * Math.PI * 2 * e);
                    c[t] = Math.abs(f * (1 - e)) }

                function h(t) { for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = 1 - t[n]; return e } return { bounce: { In: h(c), Out: c }, cosine: { In: r, Out: (s = r, s.slice(0).reverse()) }, exponential: "exponential", linear: "linear", ripple: { In: o, Out: h(o) }, sine: { In: u, Out: h(u) }, step: { In: a, Out: h(a) } } }();

            function Ac(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Tc = function(t) {
                (0, G.Z)(n, t); var e = Ac(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments)))._scheduledEvents = [], t._synced = !1, t._original_triggerAttack = t.triggerAttack, t._original_triggerRelease = t.triggerRelease; var r = Ya(n.getDefaults(), arguments); return t._volume = t.output = new js({ context: t.context, volume: r.volume }), t.volume = t._volume.volume, bu((0, at.Z)(t), "volume"), t } return (0, _.Z)(n, [{ key: "sync", value: function() { return this._syncState() && (this._syncMethod("triggerAttack", 1), this._syncMethod("triggerRelease", 0)), this } }, { key: "_syncState", value: function() { var t = !1; return this._synced || (this._synced = !0, t = !0), t } }, { key: "_syncMethod", value: function(t, e) { var n = this,
                            r = this["_original_" + t] = this[t];
                        this[t] = function() { for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++) o[i] = arguments[i]; var a = o[e],
                                u = n.context.transport.schedule((function(t) { o[e] = t, r.apply(n, o) }), a);
                            n._scheduledEvents.push(u) } } }, { key: "unsync", value: function() { var t = this; return this._scheduledEvents.forEach((function(e) { return t.context.transport.clear(e) })), this._scheduledEvents = [], this._synced && (this._synced = !1, this.triggerAttack = this._original_triggerAttack, this.triggerRelease = this._original_triggerRelease), this } }, { key: "triggerAttackRelease", value: function(t, e, n, r) { var o = this.toSeconds(n),
                            i = this.toSeconds(e); return this.triggerAttack(t, o, r), this.triggerRelease(o + i), this } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._volume.dispose(), this.unsync(), this._scheduledEvents = [], this } }], [{ key: "getDefaults", value: function() { return Object.assign(es.getDefaults(), { volume: 0 }) } }]), n }(es);

            function Ec(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Pc = function(t) {
                (0, G.Z)(n, t); var e = Ec(n);

                function n() { var t;
                    (0, w.Z)(this, n), t = e.call(this, Ya(n.getDefaults(), arguments)); var r = Ya(n.getDefaults(), arguments); return t.portamento = r.portamento, t.onsilence = r.onsilence, t } return (0, _.Z)(n, [{ key: "triggerAttack", value: function(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                        this.log("triggerAttack", t, e, n); var r = this.toSeconds(e); return this._triggerEnvelopeAttack(r, n), this.setNote(t, r), this } }, { key: "triggerRelease", value: function(t) { this.log("triggerRelease", t); var e = this.toSeconds(t); return this._triggerEnvelopeRelease(e), this } }, { key: "setNote", value: function(t, e) { var n = this.toSeconds(e),
                            r = t instanceof Uu ? t.toFrequency() : t; if (this.portamento > 0 && this.getLevelAtTime(n) > .05) { var o = this.toSeconds(this.portamento);
                            this.frequency.exponentialRampTo(r, o, n) } else this.frequency.setValueAtTime(r, n); return this } }], [{ key: "getDefaults", value: function() { return Object.assign(Tc.getDefaults(), { detune: 0, onsilence: wu, portamento: 0 }) } }]), n }(Tc);

            function Zc(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } }(0, Fa.__decorate)([wc(0)], Pc.prototype, "portamento", void 0); var Rc = function(t) {
                (0, G.Z)(n, t); var e = Zc(n);

                function n() { var t; return (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments, ["attack", "decay", "sustain", "release"]))).name = "AmplitudeEnvelope", t._gainNode = new as({ context: t.context, gain: 0 }), t.output = t._gainNode, t.input = t._gainNode, t._sig.connect(t._gainNode.gain), t.output = t._gainNode, t.input = t._gainNode, t } return (0, _.Z)(n, [{ key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._gainNode.dispose(), this } }]), n }(Sc);

            function Dc(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var jc = function(t) {
                (0, G.Z)(n, t); var e = Dc(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments))).name = "Synth"; var r = Ya(n.getDefaults(), arguments); return t.oscillator = new bc(Object.assign({ context: t.context, detune: r.detune, onstop: function() { return t.onsilence((0, at.Z)(t)) } }, r.oscillator)), t.frequency = t.oscillator.frequency, t.detune = t.oscillator.detune, t.envelope = new Rc(Object.assign({ context: t.context }, r.envelope)), t.oscillator.chain(t.envelope, t.output), bu((0, at.Z)(t), ["oscillator", "frequency", "detune", "envelope"]), t } return (0, _.Z)(n, [{ key: "_triggerEnvelopeAttack", value: function(t, e) { if (this.envelope.triggerAttack(t, e), this.oscillator.start(t), 0 === this.envelope.sustain) { var n = this.toSeconds(this.envelope.attack),
                                r = this.toSeconds(this.envelope.decay);
                            this.oscillator.stop(t + n + r) } } }, { key: "_triggerEnvelopeRelease", value: function(t) { this.envelope.triggerRelease(t), this.oscillator.stop(t + this.toSeconds(this.envelope.release)) } }, { key: "getLevelAtTime", value: function(t) { return t = this.toSeconds(t), this.envelope.getValueAtTime(t) } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this.oscillator.dispose(), this.envelope.dispose(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(Pc.getDefaults(), { envelope: Object.assign(Qa(Sc.getDefaults(), Object.keys(es.getDefaults())), { attack: .005, decay: .1, release: 1, sustain: .3 }), oscillator: Object.assign(Qa(bc.getDefaults(), [].concat((0, u.Z)(Object.keys(Ws.getDefaults())), ["frequency", "detune"])), { type: "triangle" }) }) } }]), n }(Pc);

            function Mc(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Ic = function(t) {
                (0, G.Z)(n, t); var e = Mc(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments))).name = "ModulationSynth"; var r = Ya(n.getDefaults(), arguments); return t._carrier = new jc({ context: t.context, oscillator: r.oscillator, envelope: r.envelope, onsilence: function() { return t.onsilence((0, at.Z)(t)) }, volume: -10 }), t._modulator = new jc({ context: t.context, oscillator: r.modulation, envelope: r.modulationEnvelope, volume: -10 }), t.oscillator = t._carrier.oscillator, t.envelope = t._carrier.envelope, t.modulation = t._modulator.oscillator, t.modulationEnvelope = t._modulator.envelope, t.frequency = new hs({ context: t.context, units: "frequency" }), t.detune = new hs({ context: t.context, value: r.detune, units: "cents" }), t.harmonicity = new ac({ context: t.context, value: r.harmonicity, minValue: 0 }), t._modulationNode = new as({ context: t.context, gain: 0 }), bu((0, at.Z)(t), ["frequency", "harmonicity", "oscillator", "envelope", "modulation", "modulationEnvelope", "detune"]), t } return (0, _.Z)(n, [{ key: "_triggerEnvelopeAttack", value: function(t, e) { this._carrier._triggerEnvelopeAttack(t, e), this._modulator._triggerEnvelopeAttack(t, e) } }, { key: "_triggerEnvelopeRelease", value: function(t) { return this._carrier._triggerEnvelopeRelease(t), this._modulator._triggerEnvelopeRelease(t), this } }, { key: "getLevelAtTime", value: function(t) { return t = this.toSeconds(t), this.envelope.getValueAtTime(t) } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._carrier.dispose(), this._modulator.dispose(), this.frequency.dispose(), this.detune.dispose(), this.harmonicity.dispose(), this._modulationNode.dispose(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(Pc.getDefaults(), { harmonicity: 3, oscillator: Object.assign(Qa(bc.getDefaults(), [].concat((0, u.Z)(Object.keys(Ws.getDefaults())), ["frequency", "detune"])), { type: "sine" }), envelope: Object.assign(Qa(Sc.getDefaults(), Object.keys(es.getDefaults())), { attack: .01, decay: .01, sustain: 1, release: .5 }), modulation: Object.assign(Qa(bc.getDefaults(), [].concat((0, u.Z)(Object.keys(Ws.getDefaults())), ["frequency", "detune"])), { type: "square" }), modulationEnvelope: Object.assign(Qa(Sc.getDefaults(), Object.keys(es.getDefaults())), { attack: .5, decay: 0, sustain: 1, release: .5 }) }) } }]), n }(Pc);

            function Nc(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Bc = function(t) {
                (0, G.Z)(n, t); var e = Nc(n);

                function n() { var t; return (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments))).name = "AMSynth", t._modulationScale = new oc({ context: t.context }), t.frequency.connect(t._carrier.frequency), t.frequency.chain(t.harmonicity, t._modulator.frequency), t.detune.fan(t._carrier.detune, t._modulator.detune), t._modulator.chain(t._modulationScale, t._modulationNode.gain), t._carrier.chain(t._modulationNode, t.output), t } return (0, _.Z)(n, [{ key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._modulationScale.dispose(), this } }]), n }(Ic);

            function Fc(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Lc = function(t) {
                (0, G.Z)(n, t); var e = Fc(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments))).name = "FMSynth"; var r = Ya(n.getDefaults(), arguments); return t.modulationIndex = new ac({ context: t.context, value: r.modulationIndex }), t.frequency.connect(t._carrier.frequency), t.frequency.chain(t.harmonicity, t._modulator.frequency), t.frequency.chain(t.modulationIndex, t._modulationNode), t.detune.fan(t._carrier.detune, t._modulator.detune), t._modulator.connect(t._modulationNode.gain), t._modulationNode.connect(t._carrier.frequency), t._carrier.connect(t.output), t } return (0, _.Z)(n, [{ key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this.modulationIndex.dispose(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(Ic.getDefaults(), { modulationIndex: 10 }) } }]), n }(Ic);

            function Vc(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var zc = function(t) {
                (0, G.Z)(n, t); var e = Vc(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments))).name = "MembraneSynth", t.portamento = 0; var r = Ya(n.getDefaults(), arguments); return t.pitchDecay = r.pitchDecay, t.octaves = r.octaves, bu((0, at.Z)(t), ["oscillator", "envelope"]), t } return (0, _.Z)(n, [{ key: "setNote", value: function(t, e) { var n = this.toSeconds(e),
                            r = this.toFrequency(t instanceof Uu ? t.toFrequency() : t),
                            o = r * this.octaves; return this.oscillator.frequency.setValueAtTime(o, n), this.oscillator.frequency.exponentialRampToValueAtTime(r, n + this.toSeconds(this.pitchDecay)), this } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this } }], [{ key: "getDefaults", value: function() { return Ha(Pc.getDefaults(), jc.getDefaults(), { envelope: { attack: .001, attackCurve: "exponential", decay: .4, release: 1.4, sustain: .01 }, octaves: 10, oscillator: { type: "sine" }, pitchDecay: .05 }) } }]), n }(jc);
            (0, Fa.__decorate)([_c(0)], zc.prototype, "octaves", void 0), (0, Fa.__decorate)([wc(0)], zc.prototype, "pitchDecay", void 0); var Uc = new Set;

            function qc(t) { Uc.add(t) }

            function Wc(t, e) { var n = 'registerProcessor("'.concat(t, '", ').concat(e, ")");
                Uc.add(n) }
            qc('\n\t/**\n\t * The base AudioWorkletProcessor for use in Tone.js. Works with the [[ToneAudioWorklet]]. \n\t */\n\tclass ToneAudioWorkletProcessor extends AudioWorkletProcessor {\n\n\t\tconstructor(options) {\n\t\t\t\n\t\t\tsuper(options);\n\t\t\t/**\n\t\t\t * If the processor was disposed or not. Keep alive until it\'s disposed.\n\t\t\t */\n\t\t\tthis.disposed = false;\n\t\t   \t/** \n\t\t\t * The number of samples in the processing block\n\t\t\t */\n\t\t\tthis.blockSize = 128;\n\t\t\t/**\n\t\t\t * the sample rate\n\t\t\t */\n\t\t\tthis.sampleRate = sampleRate;\n\n\t\t\tthis.port.onmessage = (event) => {\n\t\t\t\t// when it receives a dispose \n\t\t\t\tif (event.data === "dispose") {\n\t\t\t\t\tthis.disposed = true;\n\t\t\t\t}\n\t\t\t};\n\t\t}\n\t}\n');
            qc("\n\t/**\n\t * Abstract class for a single input/output processor. \n\t * has a 'generate' function which processes one sample at a time\n\t */\n\tclass SingleIOProcessor extends ToneAudioWorkletProcessor {\n\n\t\tconstructor(options) {\n\t\t\tsuper(Object.assign(options, {\n\t\t\t\tnumberOfInputs: 1,\n\t\t\t\tnumberOfOutputs: 1\n\t\t\t}));\n\t\t\t/**\n\t\t\t * Holds the name of the parameter and a single value of that\n\t\t\t * parameter at the current sample\n\t\t\t * @type { [name: string]: number }\n\t\t\t */\n\t\t\tthis.params = {}\n\t\t}\n\n\t\t/**\n\t\t * Generate an output sample from the input sample and parameters\n\t\t * @abstract\n\t\t * @param input number\n\t\t * @param channel number\n\t\t * @param parameters { [name: string]: number }\n\t\t * @returns number\n\t\t */\n\t\tgenerate(){}\n\n\t\t/**\n\t\t * Update the private params object with the \n\t\t * values of the parameters at the given index\n\t\t * @param parameters { [name: string]: Float32Array },\n\t\t * @param index number\n\t\t */\n\t\tupdateParams(parameters, index) {\n\t\t\tfor (const paramName in parameters) {\n\t\t\t\tconst param = parameters[paramName];\n\t\t\t\tif (param.length > 1) {\n\t\t\t\t\tthis.params[paramName] = parameters[paramName][index];\n\t\t\t\t} else {\n\t\t\t\t\tthis.params[paramName] = parameters[paramName][0];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t/**\n\t\t * Process a single frame of the audio\n\t\t * @param inputs Float32Array[][]\n\t\t * @param outputs Float32Array[][]\n\t\t */\n\t\tprocess(inputs, outputs, parameters) {\n\t\t\tconst input = inputs[0];\n\t\t\tconst output = outputs[0];\n\t\t\t// get the parameter values\n\t\t\tconst channelCount = Math.max(input && input.length || 0, output.length);\n\t\t\tfor (let sample = 0; sample < this.blockSize; sample++) {\n\t\t\t\tthis.updateParams(parameters, sample);\n\t\t\t\tfor (let channel = 0; channel < channelCount; channel++) {\n\t\t\t\t\tconst inputSample = input && input.length ? input[channel][sample] : 0;\n\t\t\t\t\toutput[channel][sample] = this.generate(inputSample, channel, this.params);\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn !this.disposed;\n\t\t}\n\t};\n");
            qc("\n\t/**\n\t * A multichannel buffer for use within an AudioWorkletProcessor as a delay line\n\t */\n\tclass DelayLine {\n\t\t\n\t\tconstructor(size, channels) {\n\t\t\tthis.buffer = [];\n\t\t\tthis.writeHead = []\n\t\t\tthis.size = size;\n\n\t\t\t// create the empty channels\n\t\t\tfor (let i = 0; i < channels; i++) {\n\t\t\t\tthis.buffer[i] = new Float32Array(this.size);\n\t\t\t\tthis.writeHead[i] = 0;\n\t\t\t}\n\t\t}\n\n\t\t/**\n\t\t * Push a value onto the end\n\t\t * @param channel number\n\t\t * @param value number\n\t\t */\n\t\tpush(channel, value) {\n\t\t\tthis.writeHead[channel] += 1;\n\t\t\tif (this.writeHead[channel] > this.size) {\n\t\t\t\tthis.writeHead[channel] = 0;\n\t\t\t}\n\t\t\tthis.buffer[channel][this.writeHead[channel]] = value;\n\t\t}\n\n\t\t/**\n\t\t * Get the recorded value of the channel given the delay\n\t\t * @param channel number\n\t\t * @param delay number delay samples\n\t\t */\n\t\tget(channel, delay) {\n\t\t\tlet readHead = this.writeHead[channel] - Math.floor(delay);\n\t\t\tif (readHead < 0) {\n\t\t\t\treadHead += this.size;\n\t\t\t}\n\t\t\treturn this.buffer[channel][readHead];\n\t\t}\n\t}\n");
            Wc("feedback-comb-filter", '\n\tclass FeedbackCombFilterWorklet extends SingleIOProcessor {\n\n\t\tconstructor(options) {\n\t\t\tsuper(options);\n\t\t\tthis.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);\n\t\t}\n\n\t\tstatic get parameterDescriptors() {\n\t\t\treturn [{\n\t\t\t\tname: "delayTime",\n\t\t\t\tdefaultValue: 0.1,\n\t\t\t\tminValue: 0,\n\t\t\t\tmaxValue: 1,\n\t\t\t\tautomationRate: "k-rate"\n\t\t\t}, {\n\t\t\t\tname: "feedback",\n\t\t\t\tdefaultValue: 0.5,\n\t\t\t\tminValue: 0,\n\t\t\t\tmaxValue: 0.9999,\n\t\t\t\tautomationRate: "k-rate"\n\t\t\t}];\n\t\t}\n\n\t\tgenerate(input, channel, parameters) {\n\t\t\tconst delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);\n\t\t\tthis.delayLine.push(channel, input + delayedSample * parameters.feedback);\n\t\t\treturn delayedSample;\n\t\t}\n\t}\n');

            function Gc(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Hc = function(t) {
                (0, G.Z)(n, t); var e = Gc(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments, ["voice", "options"]))).name = "PolySynth", t._availableVoices = [], t._activeVoices = [], t._voices = [], t._gcTimeout = -1, t._averageActiveVoices = 0; var r = Ya(n.getDefaults(), arguments, ["voice", "options"]);
                    _a(!Ea(r.voice), "DEPRECATED: The polyphony count is no longer the first argument."); var o = r.voice.getDefaults();
                    t.options = Object.assign(o, r.options), t.voice = r.voice, t.maxPolyphony = r.maxPolyphony, t._dummyVoice = t._getNextAvailableVoice(); var i = t._voices.indexOf(t._dummyVoice); return t._voices.splice(i, 1), t._gcTimeout = t.context.setInterval(t._collectGarbage.bind((0, at.Z)(t)), 1), t } return (0, _.Z)(n, [{ key: "activeVoices", get: function() { return this._activeVoices.length } }, { key: "_makeVoiceAvailable", value: function(t) { this._availableVoices.push(t); var e = this._activeVoices.findIndex((function(e) { return e.voice === t }));
                        this._activeVoices.splice(e, 1) } }, { key: "_getNextAvailableVoice", value: function() { if (this._availableVoices.length) return this._availableVoices.shift(); if (this._voices.length < this.maxPolyphony) { var t = new this.voice(Object.assign(this.options, { context: this.context, onsilence: this._makeVoiceAvailable.bind(this) })); return t.connect(this.output), this._voices.push(t), t }
                        Sa("Max polyphony exceeded. Note dropped.") } }, { key: "_collectGarbage", value: function() { if (this._averageActiveVoices = Math.max(.95 * this._averageActiveVoices, this.activeVoices), this._availableVoices.length && this._voices.length > Math.ceil(this._averageActiveVoices + 1)) { var t = this._availableVoices.shift(),
                                e = this._voices.indexOf(t);
                            this._voices.splice(e, 1), this.context.isOffline || t.dispose() } } }, { key: "_triggerAttack", value: function(t, e, n) { var r = this;
                        t.forEach((function(t) { var o = new Ss(r.context, t).toMidi(),
                                i = r._getNextAvailableVoice();
                            i && (i.triggerAttack(t, e, n), r._activeVoices.push({ midi: o, voice: i, released: !1 }), r.log("triggerAttack", t, e)) })) } }, { key: "_triggerRelease", value: function(t, e) { var n = this;
                        t.forEach((function(t) { var r = new Ss(n.context, t).toMidi(),
                                o = n._activeVoices.find((function(t) { var e = t.midi,
                                        n = t.released; return e === r && !n }));
                            o && (o.voice.triggerRelease(e), o.released = !0, n.log("triggerRelease", t, e)) })) } }, { key: "_scheduleEvent", value: function(t, e, n, r) { var o = this;
                        _a(!this.disposed, "Synth was already disposed"), n <= this.now() ? "attack" === t ? this._triggerAttack(e, n, r) : this._triggerRelease(e, n) : this.context.setTimeout((function() { o._scheduleEvent(t, e, n, r) }), n - this.now()) } }, { key: "triggerAttack", value: function(t, e, n) { Array.isArray(t) || (t = [t]); var r = this.toSeconds(e); return this._scheduleEvent("attack", t, r, n), this } }, { key: "triggerRelease", value: function(t, e) { Array.isArray(t) || (t = [t]); var n = this.toSeconds(e); return this._scheduleEvent("release", t, n), this } }, { key: "triggerAttackRelease", value: function(t, e, n, r) { var o = this.toSeconds(n); if (this.triggerAttack(t, o, r), Za(e)) { _a(Za(t), "If the duration is an array, the notes must also be an array"), t = t; for (var i = 0; i < t.length; i++) { var a = e[Math.min(i, e.length - 1)],
                                    u = this.toSeconds(a);
                                _a(u > 0, "The duration must be greater than 0"), this.triggerRelease(t[i], o + u) } } else { var s = this.toSeconds(e);
                            _a(s > 0, "The duration must be greater than 0"), this.triggerRelease(t, o + s) } return this } }, { key: "sync", value: function() { return this._syncState() && (this._syncMethod("triggerAttack", 1), this._syncMethod("triggerRelease", 1)), this } }, { key: "set", value: function(t) { var e = Qa(t, ["onsilence", "context"]); return this.options = Ha(this.options, e), this._voices.forEach((function(t) { return t.set(e) })), this._dummyVoice.set(e), this } }, { key: "get", value: function() { return this._dummyVoice.get() } }, { key: "releaseAll", value: function(t) { var e = this.toSeconds(t); return this._activeVoices.forEach((function(t) { t.voice.triggerRelease(e) })), this } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._dummyVoice.dispose(), this._voices.forEach((function(t) { return t.dispose() })), this._activeVoices = [], this._availableVoices = [], this.context.clearInterval(this._gcTimeout), this } }], [{ key: "getDefaults", value: function() { return Object.assign(Tc.getDefaults(), { maxPolyphony: 32, options: {}, voice: jc }) } }]), n }(Tc);

            function Yc(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var Xc = function(t) {
                (0, G.Z)(n, t); var e = Yc(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments, ["urls", "onload", "baseUrl"], "urls"))).name = "Sampler", t._activeSources = new Map; var r = Ya(n.getDefaults(), arguments, ["urls", "onload", "baseUrl"], "urls"),
                        o = {}; return Object.keys(r.urls).forEach((function(e) { var n = parseInt(e, 10); if (_a(Da(e) || Ea(n) && isFinite(n), "url key is neither a note or midi pitch: ".concat(e)), Da(e)) { var i = new Uu(t.context, e).toMidi();
                            o[i] = r.urls[e] } else Ea(n) && isFinite(n) && (o[n] = r.urls[n]) })), t._buffers = new xs({ urls: o, onload: r.onload, baseUrl: r.baseUrl, onerror: r.onerror }), t.attack = r.attack, t.release = r.release, t.curve = r.curve, t._buffers.loaded && Promise.resolve().then(r.onload), t } return (0, _.Z)(n, [{ key: "_findClosest", value: function(t) { for (var e = 0; e < 96;) { if (this._buffers.has(t + e)) return -e; if (this._buffers.has(t - e)) return e;
                            e++ } throw new Error("No available buffers for note: ".concat(t)) } }, { key: "triggerAttack", value: function(t, e) { var n = this,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1; return this.log("triggerAttack", t, e, r), Array.isArray(t) || (t = [t]), t.forEach((function(t) { var o = Iu(new Uu(n.context, t).toFrequency()),
                                i = Math.round(o),
                                a = o - i,
                                u = n._findClosest(i),
                                s = i - u,
                                c = n._buffers.get(s),
                                l = Du(u + a),
                                f = new Hs({ url: c, context: n.context, curve: n.curve, fadeIn: n.attack, fadeOut: n.release, playbackRate: l }).connect(n.output);
                            f.start(e, 0, c.duration / l, r), Za(n._activeSources.get(i)) || n._activeSources.set(i, []), n._activeSources.get(i).push(f), f.onended = function() { if (n._activeSources && n._activeSources.has(i)) { var t = n._activeSources.get(i),
                                        e = t.indexOf(f); - 1 !== e && t.splice(e, 1) } } })), this } }, { key: "triggerRelease", value: function(t, e) { var n = this; return this.log("triggerRelease", t, e), Array.isArray(t) || (t = [t]), t.forEach((function(t) { var r = new Uu(n.context, t).toMidi(); if (n._activeSources.has(r) && n._activeSources.get(r).length) { var o = n._activeSources.get(r);
                                e = n.toSeconds(e), o.forEach((function(t) { t.stop(e) })), n._activeSources.set(r, []) } })), this } }, { key: "releaseAll", value: function(t) { var e = this.toSeconds(t); return this._activeSources.forEach((function(t) { for (; t.length;) { t.shift().stop(e) } })), this } }, { key: "sync", value: function() { return this._syncState() && (this._syncMethod("triggerAttack", 1), this._syncMethod("triggerRelease", 1)), this } }, { key: "triggerAttackRelease", value: function(t, e, n) { var r = this,
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                            i = this.toSeconds(n); return this.triggerAttack(t, i, o), Za(e) ? (_a(Za(t), "notes must be an array when duration is array"), t.forEach((function(t, n) { var o = e[Math.min(n, e.length - 1)];
                            r.triggerRelease(t, i + r.toSeconds(o)) }))) : this.triggerRelease(t, i + this.toSeconds(e)), this } }, { key: "add", value: function(t, e, n) { if (_a(Da(t) || isFinite(t), "note must be a pitch or midi: ".concat(t)), Da(t)) { var r = new Uu(this.context, t).toMidi();
                            this._buffers.add(r, e, n) } else this._buffers.add(t, e, n); return this } }, { key: "loaded", get: function() { return this._buffers.loaded } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._buffers.dispose(), this._activeSources.forEach((function(t) { t.forEach((function(t) { return t.dispose() })) })), this._activeSources.clear(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(Tc.getDefaults(), { attack: 0, baseUrl: "", curve: "exponential", onload: wu, onerror: wu, release: .1, urls: {} }) } }]), n }(Tc);
            (0, Fa.__decorate)([wc(0)], Xc.prototype, "attack", void 0), (0, Fa.__decorate)([wc(0)], Xc.prototype, "release", void 0);

            function Qc(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var $c = function(t) {
                (0, G.Z)(n, t); var e = Qc(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Object.assign(Ya(n.getDefaults(), arguments, ["pan"])))).name = "Panner", t._panner = t.context.createStereoPanner(), t.input = t._panner, t.output = t._panner; var r = Ya(n.getDefaults(), arguments, ["pan"]); return t.pan = new Ku({ context: t.context, param: t._panner.pan, value: r.pan, minValue: -1, maxValue: 1 }), t._panner.channelCount = r.channelCount, t._panner.channelCountMode = "explicit", bu((0, at.Z)(t), "pan"), t } return (0, _.Z)(n, [{ key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._panner.disconnect(), this.pan.dispose(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(es.getDefaults(), { pan: 0, channelCount: 1 }) } }]), n }(es); var Jc = "bit-crusher";
            Wc(Jc, "\n\tclass BitCrusherWorklet extends SingleIOProcessor {\n\n\t\tstatic get parameterDescriptors() {\n\t\t\treturn [{\n\t\t\t\tname: \"bits\",\n\t\t\t\tdefaultValue: 12,\n\t\t\t\tminValue: 1,\n\t\t\t\tmaxValue: 16,\n\t\t\t\tautomationRate: 'k-rate'\n\t\t\t}];\n\t\t}\n\n\t\tgenerate(input, _channel, parameters) {\n\t\t\tconst step = Math.pow(0.5, parameters.bits - 1);\n\t\t\tconst val = step * Math.floor(input / step + 0.5);\n\t\t\treturn val;\n\t\t}\n\t}\n");

            function Kc(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var tl = function(t) {
                (0, G.Z)(n, t); var e = Kc(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments, ["solo"]))).name = "Solo"; var r = Ya(n.getDefaults(), arguments, ["solo"]); return t.input = t.output = new as({ context: t.context }), n._allSolos.has(t.context) || n._allSolos.set(t.context, new Set), n._allSolos.get(t.context).add((0, at.Z)(t)), t.solo = r.solo, t } return (0, _.Z)(n, [{ key: "solo", get: function() { return this._isSoloed() }, set: function(t) { t ? this._addSolo() : this._removeSolo(), n._allSolos.get(this.context).forEach((function(t) { return t._updateSolo() })) } }, { key: "muted", get: function() { return 0 === this.input.gain.value } }, { key: "_addSolo", value: function() { n._soloed.has(this.context) || n._soloed.set(this.context, new Set), n._soloed.get(this.context).add(this) } }, { key: "_removeSolo", value: function() { n._soloed.has(this.context) && n._soloed.get(this.context).delete(this) } }, { key: "_isSoloed", value: function() { return n._soloed.has(this.context) && n._soloed.get(this.context).has(this) } }, { key: "_noSolos", value: function() { return !n._soloed.has(this.context) || n._soloed.has(this.context) && 0 === n._soloed.get(this.context).size } }, { key: "_updateSolo", value: function() { this._isSoloed() || this._noSolos() ? this.input.gain.value = 1 : this.input.gain.value = 0 } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), n._allSolos.get(this.context).delete(this), this._removeSolo(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(es.getDefaults(), { solo: !1 }) } }]), n }(es);

            function el(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } }
            tl._allSolos = new Map, tl._soloed = new Map; var nl = function(t) {
                (0, G.Z)(n, t); var e = el(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments, ["pan", "volume"]))).name = "PanVol"; var r = Ya(n.getDefaults(), arguments, ["pan", "volume"]); return t._panner = t.input = new $c({ context: t.context, pan: r.pan, channelCount: r.channelCount }), t.pan = t._panner.pan, t._volume = t.output = new js({ context: t.context, volume: r.volume }), t.volume = t._volume.volume, t._panner.connect(t._volume), t.mute = r.mute, bu((0, at.Z)(t), ["pan", "volume"]), t } return (0, _.Z)(n, [{ key: "mute", get: function() { return this._volume.mute }, set: function(t) { this._volume.mute = t } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._panner.dispose(), this.pan.dispose(), this._volume.dispose(), this.volume.dispose(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(es.getDefaults(), { mute: !1, pan: 0, volume: 0, channelCount: 1 }) } }]), n }(es);

            function rl(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var ol = function(t) {
                (0, G.Z)(n, t); var e = rl(n);

                function n() { var t;
                    (0, w.Z)(this, n), (t = e.call(this, Ya(n.getDefaults(), arguments, ["volume", "pan"]))).name = "Channel"; var r = Ya(n.getDefaults(), arguments, ["volume", "pan"]); return t._solo = t.input = new tl({ solo: r.solo, context: t.context }), t._panVol = t.output = new nl({ context: t.context, pan: r.pan, volume: r.volume, mute: r.mute, channelCount: r.channelCount }), t.pan = t._panVol.pan, t.volume = t._panVol.volume, t._solo.connect(t._panVol), bu((0, at.Z)(t), ["pan", "volume"]), t } return (0, _.Z)(n, [{ key: "solo", get: function() { return this._solo.solo }, set: function(t) { this._solo.solo = t } }, { key: "muted", get: function() { return this._solo.muted || this.mute } }, { key: "mute", get: function() { return this._panVol.mute }, set: function(t) { this._panVol.mute = t } }, { key: "_getBus", value: function(t) { return n.buses.has(t) || n.buses.set(t, new as({ context: this.context })), n.buses.get(t) } }, { key: "send", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = this._getBus(t),
                            r = new as({ context: this.context, units: "decibels", gain: e }); return this.connect(r), r.connect(n), r } }, { key: "receive", value: function(t) { return this._getBus(t).connect(this), this } }, { key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this._panVol.dispose(), this.pan.dispose(), this.volume.dispose(), this._solo.dispose(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(es.getDefaults(), { pan: 0, volume: 0, mute: !1, solo: !1, channelCount: 1 }) } }]), n }(es);
            ol.buses = new Map;

            function il(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = (0, Y.Z)(t); if (e) { var o = (0, Y.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o) } else n = r.apply(this, arguments); return (0, H.Z)(this, n) } } var al = function(t) {
                (0, G.Z)(n, t); var e = il(n);

                function n() { var t; return (0, w.Z)(this, n), (t = e.apply(this, arguments)).name = "Listener", t.positionX = new Ku({ context: t.context, param: t.context.rawContext.listener.positionX }), t.positionY = new Ku({ context: t.context, param: t.context.rawContext.listener.positionY }), t.positionZ = new Ku({ context: t.context, param: t.context.rawContext.listener.positionZ }), t.forwardX = new Ku({ context: t.context, param: t.context.rawContext.listener.forwardX }), t.forwardY = new Ku({ context: t.context, param: t.context.rawContext.listener.forwardY }), t.forwardZ = new Ku({ context: t.context, param: t.context.rawContext.listener.forwardZ }), t.upX = new Ku({ context: t.context, param: t.context.rawContext.listener.upX }), t.upY = new Ku({ context: t.context, param: t.context.rawContext.listener.upY }), t.upZ = new Ku({ context: t.context, param: t.context.rawContext.listener.upZ }), t } return (0, _.Z)(n, [{ key: "dispose", value: function() { return (0, Ba.Z)((0, Y.Z)(n.prototype), "dispose", this).call(this), this.positionX.dispose(), this.positionY.dispose(), this.positionZ.dispose(), this.forwardX.dispose(), this.forwardY.dispose(), this.forwardZ.dispose(), this.upX.dispose(), this.upY.dispose(), this.upZ.dispose(), this } }], [{ key: "getDefaults", value: function() { return Object.assign(es.getDefaults(), { positionX: 0, positionY: 0, positionZ: 0, forwardX: 0, forwardY: 0, forwardZ: -1, upX: 0, upY: 1, upZ: 0 }) } }]), n }(es);
            uu((function(t) { t.listener = new al({ context: t }) })), cu((function(t) { t.listener.dispose() }));
            Pu().transport;
            Pu().destination, Pu().destination;
            Pu().listener;
            Pu().draw;
            Pu(); var ul = { "bass-electric": { "A#2": "As2.[mp3|ogg]", "A#3": "As3.[mp3|ogg]", "A#4": "As4.[mp3|ogg]", "A#5": "As5.[mp3|ogg]", "C#2": "Cs2.[mp3|ogg]", "C#3": "Cs3.[mp3|ogg]", "C#4": "Cs4.[mp3|ogg]", "C#5": "Cs5.[mp3|ogg]", E2: "E2.[mp3|ogg]", E3: "E3.[mp3|ogg]", E4: "E4.[mp3|ogg]", E5: "E5.[mp3|ogg]", G2: "G2.[mp3|ogg]", G3: "G3.[mp3|ogg]", G4: "G4.[mp3|ogg]", G5: "G5.[mp3|ogg]" }, bassoon: { A3: "A3.[mp3|ogg]", C2: "C2.[mp3|ogg]", C3: "C3.[mp3|ogg]", C4: "C4.[mp3|ogg]", E3: "E3.[mp3|ogg]", G1: "G1.[mp3|ogg]", G2: "G2.[mp3|ogg]", G3: "G3.[mp3|ogg]", A1: "A1.[mp3|ogg]", A2: "A2.[mp3|ogg]" }, cello: { E3: "E3.[mp3|ogg]", E4: "E4.[mp3|ogg]", F2: "F2.[mp3|ogg]", F3: "F3.[mp3|ogg]", F4: "F4.[mp3|ogg]", "F#3": "Fs3.[mp3|ogg]", "F#4": "Fs4.[mp3|ogg]", G2: "G2.[mp3|ogg]", G3: "G3.[mp3|ogg]", G4: "G4.[mp3|ogg]", "G#2": "Gs2.[mp3|ogg]", "G#3": "Gs3.[mp3|ogg]", "G#4": "Gs4.[mp3|ogg]", A2: "A2.[mp3|ogg]", A3: "A3.[mp3|ogg]", A4: "A4.[mp3|ogg]", "A#2": "As2.[mp3|ogg]", "A#3": "As3.[mp3|ogg]", "A#4": "As4.[mp3|ogg]", B2: "B2.[mp3|ogg]", B3: "B3.[mp3|ogg]", B4: "B4.[mp3|ogg]", C2: "C2.[mp3|ogg]", C3: "C3.[mp3|ogg]", C4: "C4.[mp3|ogg]", C5: "C5.[mp3|ogg]", "C#3": "Cs3.[mp3|ogg]", "C#4": "Cs4.[mp3|ogg]", D2: "D2.[mp3|ogg]", D3: "D3.[mp3|ogg]", D4: "D4.[mp3|ogg]", "D#2": "Ds2.[mp3|ogg]", "D#3": "Ds3.[mp3|ogg]", "D#4": "Ds4.[mp3|ogg]", E2: "E2.[mp3|ogg]" }, clarinet: { D3: "D3.[mp3|ogg]", D4: "D4.[mp3|ogg]", D5: "D5.[mp3|ogg]", F2: "F2.[mp3|ogg]", F3: "F3.[mp3|ogg]", F4: "F4.[mp3|ogg]", "F#5": "Fs5.[mp3|ogg]", "A#2": "As2.[mp3|ogg]", "A#3": "As3.[mp3|ogg]", "A#4": "As4.[mp3|ogg]", D2: "D2.[mp3|ogg]" }, contrabass: { C1: "C1.[mp3|ogg]", "C#2": "Cs2.[mp3|ogg]", D1: "D1.[mp3|ogg]", E1: "E1.[mp3|ogg]", E2: "E2.[mp3|ogg]", "F#0": "Fs0.[mp3|ogg]", "F#1": "Fs1.[mp3|ogg]", G0: "G0.[mp3|ogg]", "G#1": "Gs1.[mp3|ogg]", "G#2": "Gs2.[mp3|ogg]", A1: "A1.[mp3|ogg]", "A#0": "As0.[mp3|ogg]", B2: "B2.[mp3|ogg]" }, flute: { A5: "A5.[mp3|ogg]", C3: "C3.[mp3|ogg]", C4: "C4.[mp3|ogg]", C5: "C5.[mp3|ogg]", C6: "C6.[mp3|ogg]", E3: "E3.[mp3|ogg]", E4: "E4.[mp3|ogg]", E5: "E5.[mp3|ogg]", A3: "A3.[mp3|ogg]", A4: "A4.[mp3|ogg]" }, "french-horn": { D2: "D2.[mp3|ogg]", D4: "D4.[mp3|ogg]", "D#1": "Ds1.[mp3|ogg]", F2: "F2.[mp3|ogg]", F4: "F4.[mp3|ogg]", G1: "G1.[mp3|ogg]", A0: "A0.[mp3|ogg]", A2: "A2.[mp3|ogg]", C1: "C1.[mp3|ogg]", C3: "C3.[mp3|ogg]" }, "guitar-acoustic": { F3: "F3.[mp3|ogg]", "F#1": "Fs1.[mp3|ogg]", "F#2": "Fs2.[mp3|ogg]", "F#3": "Fs3.[mp3|ogg]", G1: "G1.[mp3|ogg]", G2: "G2.[mp3|ogg]", G3: "G3.[mp3|ogg]", "G#1": "Gs1.[mp3|ogg]", "G#2": "Gs2.[mp3|ogg]", "G#3": "Gs3.[mp3|ogg]", A1: "A1.[mp3|ogg]", A2: "A2.[mp3|ogg]", A3: "A3.[mp3|ogg]", "A#1": "As1.[mp3|ogg]", "A#2": "As2.[mp3|ogg]", "A#3": "As3.[mp3|ogg]", B1: "B1.[mp3|ogg]", B2: "B2.[mp3|ogg]", B3: "B3.[mp3|ogg]", C2: "C2.[mp3|ogg]", C3: "C3.[mp3|ogg]", C4: "C4.[mp3|ogg]", "C#2": "Cs2.[mp3|ogg]", "C#3": "Cs3.[mp3|ogg]", "C#4": "Cs4.[mp3|ogg]", D1: "D1.[mp3|ogg]", D2: "D2.[mp3|ogg]", D3: "D3.[mp3|ogg]", D4: "D4.[mp3|ogg]", "D#1": "Ds1.[mp3|ogg]", "D#2": "Ds2.[mp3|ogg]", "D#3": "Ds3.[mp3|ogg]", E1: "E1.[mp3|ogg]", E2: "E2.[mp3|ogg]", E3: "E3.[mp3|ogg]", F1: "F1.[mp3|ogg]", F2: "F2.[mp3|ogg]" }, "guitar-electric": { "D#3": "Ds3.[mp3|ogg]", "D#4": "Ds4.[mp3|ogg]", "D#5": "Ds5.[mp3|ogg]", E2: "E2.[mp3|ogg]", "F#2": "Fs2.[mp3|ogg]", "F#3": "Fs3.[mp3|ogg]", "F#4": "Fs4.[mp3|ogg]", "F#5": "Fs5.[mp3|ogg]", A2: "A2.[mp3|ogg]", A3: "A3.[mp3|ogg]", A4: "A4.[mp3|ogg]", A5: "A5.[mp3|ogg]", C3: "C3.[mp3|ogg]", C4: "C4.[mp3|ogg]", C5: "C5.[mp3|ogg]", C6: "C6.[mp3|ogg]", "C#2": "Cs2.[mp3|ogg]" }, "guitar-nylon": { "F#2": "Fs2.[mp3|ogg]", "F#3": "Fs3.[mp3|ogg]", "F#4": "Fs4.[mp3|ogg]", "F#5": "Fs5.[mp3|ogg]", G3: "G3.[mp3|ogg]", G5: "G3.[mp3|ogg]", "G#2": "Gs2.[mp3|ogg]", "G#4": "Gs4.[mp3|ogg]", "G#5": "Gs5.[mp3|ogg]", A2: "A2.[mp3|ogg]", A3: "A3.[mp3|ogg]", A4: "A4.[mp3|ogg]", A5: "A5.[mp3|ogg]", "A#5": "As5.[mp3|ogg]", B1: "B1.[mp3|ogg]", B2: "B2.[mp3|ogg]", B3: "B3.[mp3|ogg]", B4: "B4.[mp3|ogg]", "C#3": "Cs3.[mp3|ogg]", "C#4": "Cs4.[mp3|ogg]", "C#5": "Cs5.[mp3|ogg]", D2: "D2.[mp3|ogg]", D3: "D3.[mp3|ogg]", D5: "D5.[mp3|ogg]", "D#4": "Ds4.[mp3|ogg]", E2: "E2.[mp3|ogg]", E3: "E3.[mp3|ogg]", E4: "E4.[mp3|ogg]", E5: "E5.[mp3|ogg]" }, harmonium: { C2: "C2.[mp3|ogg]", C3: "C3.[mp3|ogg]", C4: "C4.[mp3|ogg]", C5: "C5.[mp3|ogg]", "C#2": "Cs2.[mp3|ogg]", "C#3": "Cs3.[mp3|ogg]", "C#4": "Cs4.[mp3|ogg]", "C#5": "Cs5.[mp3|ogg]", D2: "D2.[mp3|ogg]", D3: "D3.[mp3|ogg]", D4: "D4.[mp3|ogg]", D5: "D5.[mp3|ogg]", "D#2": "Ds2.[mp3|ogg]", "D#3": "Ds3.[mp3|ogg]", "D#4": "Ds4.[mp3|ogg]", E2: "E2.[mp3|ogg]", E3: "E3.[mp3|ogg]", E4: "E4.[mp3|ogg]", F2: "F2.[mp3|ogg]", F3: "F3.[mp3|ogg]", F4: "F4.[mp3|ogg]", "F#2": "Fs2.[mp3|ogg]", "F#3": "Fs3.[mp3|ogg]", G2: "G2.[mp3|ogg]", G3: "G3.[mp3|ogg]", G4: "G4.[mp3|ogg]", "G#2": "Gs2.[mp3|ogg]", "G#3": "Gs3.[mp3|ogg]", "G#4": "Gs4.[mp3|ogg]", A2: "A2.[mp3|ogg]", A3: "A3.[mp3|ogg]", A4: "A4.[mp3|ogg]", "A#2": "As2.[mp3|ogg]", "A#3": "As3.[mp3|ogg]", "A#4": "As4.[mp3|ogg]" }, harp: { C5: "C5.[mp3|ogg]", D2: "D2.[mp3|ogg]", D4: "D4.[mp3|ogg]", D6: "D6.[mp3|ogg]", D7: "D7.[mp3|ogg]", E1: "E1.[mp3|ogg]", E3: "E3.[mp3|ogg]", E5: "E5.[mp3|ogg]", F2: "F2.[mp3|ogg]", F4: "F4.[mp3|ogg]", F6: "F6.[mp3|ogg]", F7: "F7.[mp3|ogg]", G1: "G1.[mp3|ogg]", G3: "G3.[mp3|ogg]", G5: "G5.[mp3|ogg]", A2: "A2.[mp3|ogg]", A4: "A4.[mp3|ogg]", A6: "A6.[mp3|ogg]", B1: "B1.[mp3|ogg]", B3: "B3.[mp3|ogg]", B5: "B5.[mp3|ogg]", B6: "B6.[mp3|ogg]", C3: "C3.[mp3|ogg]" }, organ: { C3: "C3.[mp3|ogg]", C4: "C4.[mp3|ogg]", C5: "C5.[mp3|ogg]", C6: "C6.[mp3|ogg]", "D#1": "Ds1.[mp3|ogg]", "D#2": "Ds2.[mp3|ogg]", "D#3": "Ds3.[mp3|ogg]", "D#4": "Ds4.[mp3|ogg]", "D#5": "Ds5.[mp3|ogg]", "F#1": "Fs1.[mp3|ogg]", "F#2": "Fs2.[mp3|ogg]", "F#3": "Fs3.[mp3|ogg]", "F#4": "Fs4.[mp3|ogg]", "F#5": "Fs5.[mp3|ogg]", A1: "A1.[mp3|ogg]", A2: "A2.[mp3|ogg]", A3: "A3.[mp3|ogg]", A4: "A4.[mp3|ogg]", A5: "A5.[mp3|ogg]", C1: "C1.[mp3|ogg]", C2: "C2.[mp3|ogg]" }, piano: { A0: "A0.[mp3|ogg]", A1: "A1.[mp3|ogg]", A2: "A2.[mp3|ogg]", A3: "A3.[mp3|ogg]", A4: "A4.[mp3|ogg]", A5: "A5.[mp3|ogg]", A6: "A6.[mp3|ogg]", "A#0": "As0.[mp3|ogg]", "A#1": "As1.[mp3|ogg]", "A#2": "As2.[mp3|ogg]", "A#3": "As3.[mp3|ogg]", "A#4": "As4.[mp3|ogg]", "A#5": "As5.[mp3|ogg]", "A#6": "As6.[mp3|ogg]", B0: "B0.[mp3|ogg]", B1: "B1.[mp3|ogg]", B2: "B2.[mp3|ogg]", B3: "B3.[mp3|ogg]", B4: "B4.[mp3|ogg]", B5: "B5.[mp3|ogg]", B6: "B6.[mp3|ogg]", C0: "C0.[mp3|ogg]", C1: "C1.[mp3|ogg]", C2: "C2.[mp3|ogg]", C3: "C3.[mp3|ogg]", C4: "C4.[mp3|ogg]", C5: "C5.[mp3|ogg]", C6: "C6.[mp3|ogg]", C7: "C7.[mp3|ogg]", "C#0": "Cs0.[mp3|ogg]", "C#1": "Cs1.[mp3|ogg]", "C#2": "Cs2.[mp3|ogg]", "C#3": "Cs3.[mp3|ogg]", "C#4": "Cs4.[mp3|ogg]", "C#5": "Cs5.[mp3|ogg]", "C#6": "Cs6.[mp3|ogg]", D0: "D0.[mp3|ogg]", D1: "D1.[mp3|ogg]", D2: "D2.[mp3|ogg]", D3: "D3.[mp3|ogg]", D4: "D4.[mp3|ogg]", D5: "D5.[mp3|ogg]", D6: "D6.[mp3|ogg]", "D#0": "Ds0.[mp3|ogg]", "D#1": "Ds1.[mp3|ogg]", "D#2": "Ds2.[mp3|ogg]", "D#3": "Ds3.[mp3|ogg]", "D#4": "Ds4.[mp3|ogg]", "D#5": "Ds5.[mp3|ogg]", "D#6": "Ds6.[mp3|ogg]", E0: "E0.[mp3|ogg]", E1: "E1.[mp3|ogg]", E2: "E2.[mp3|ogg]", E3: "E3.[mp3|ogg]", E4: "E4.[mp3|ogg]", E5: "E5.[mp3|ogg]", E6: "E6.[mp3|ogg]", F0: "F0.[mp3|ogg]", F1: "F1.[mp3|ogg]", F2: "F2.[mp3|ogg]", F3: "F3.[mp3|ogg]", F4: "F4.[mp3|ogg]", F5: "F5.[mp3|ogg]", F6: "F6.[mp3|ogg]", "F#0": "Fs0.[mp3|ogg]", "F#1": "Fs1.[mp3|ogg]", "F#2": "Fs2.[mp3|ogg]", "F#3": "Fs3.[mp3|ogg]", "F#4": "Fs4.[mp3|ogg]", "F#5": "Fs5.[mp3|ogg]", "F#6": "Fs6.[mp3|ogg]", G0: "G0.[mp3|ogg]", G1: "G1.[mp3|ogg]", G2: "G2.[mp3|ogg]", G3: "G3.[mp3|ogg]", G4: "G4.[mp3|ogg]", G5: "G5.[mp3|ogg]", G6: "G6.[mp3|ogg]", "G#0": "Gs0.[mp3|ogg]", "G#1": "Gs1.[mp3|ogg]", "G#2": "Gs2.[mp3|ogg]", "G#3": "Gs3.[mp3|ogg]", "G#4": "Gs4.[mp3|ogg]", "G#5": "Gs5.[mp3|ogg]", "G#6": "Gs6.[mp3|ogg]" }, saxophone: { "D#4": "Ds4.[mp3|ogg]", E2: "E2.[mp3|ogg]", E3: "E3.[mp3|ogg]", E4: "E4.[mp3|ogg]", F2: "F2.[mp3|ogg]", F3: "F3.[mp3|ogg]", F4: "F4.[mp3|ogg]", "F#2": "Fs2.[mp3|ogg]", "F#3": "Fs3.[mp3|ogg]", "F#4": "Fs4.[mp3|ogg]", G2: "G2.[mp3|ogg]", G3: "G3.[mp3|ogg]", G4: "G4.[mp3|ogg]", "G#2": "Gs2.[mp3|ogg]", "G#3": "Gs3.[mp3|ogg]", "G#4": "Gs4.[mp3|ogg]", A3: "A3.[mp3|ogg]", A4: "A4.[mp3|ogg]", "A#2": "As2.[mp3|ogg]", "A#3": "As3.[mp3|ogg]", B2: "B2.[mp3|ogg]", B3: "B3.[mp3|ogg]", C3: "C3.[mp3|ogg]", C4: "C4.[mp3|ogg]", "C#2": "Cs2.[mp3|ogg]", "C#3": "Cs3.[mp3|ogg]", "C#4": "Cs4.[mp3|ogg]", D2: "D2.[mp3|ogg]", D3: "D3.[mp3|ogg]", D4: "D4.[mp3|ogg]", "D#2": "Ds2.[mp3|ogg]", "D#3": "Ds3.[mp3|ogg]" }, trombone: { "A#2": "As2.[mp3|ogg]", C2: "C2.[mp3|ogg]", C3: "C3.[mp3|ogg]", "C#1": "Cs1.[mp3|ogg]", "C#3": "Cs3.[mp3|ogg]", D2: "D2.[mp3|ogg]", D3: "D3.[mp3|ogg]", "D#1": "Ds1.[mp3|ogg]", "D#2": "Ds2.[mp3|ogg]", "D#3": "Ds3.[mp3|ogg]", F1: "F1.[mp3|ogg]", F2: "F2.[mp3|ogg]", F3: "F3.[mp3|ogg]", "G#1": "Gs1.[mp3|ogg]", "G#2": "Gs2.[mp3|ogg]", "A#0": "As0.[mp3|ogg]", "A#1": "As1.[mp3|ogg]" }, trumpet: { C5: "C5.[mp3|ogg]", D4: "D4.[mp3|ogg]", "D#3": "Ds3.[mp3|ogg]", F2: "F2.[mp3|ogg]", F3: "F3.[mp3|ogg]", F4: "F4.[mp3|ogg]", G3: "G3.[mp3|ogg]", A2: "A2.[mp3|ogg]", A4: "A4.[mp3|ogg]", "A#3": "As3.[mp3|ogg]", C3: "C3.[mp3|ogg]" }, tuba: { "A#1": "As1.[mp3|ogg]", "A#2": "As2.[mp3|ogg]", D2: "D2.[mp3|ogg]", D3: "D3.[mp3|ogg]", "D#1": "Ds1.[mp3|ogg]", F0: "F0.[mp3|ogg]", F1: "F1.[mp3|ogg]", F2: "F2.[mp3|ogg]", "A#0": "As0.[mp3|ogg]" }, violin: { A3: "A3.[mp3|ogg]", A4: "A4.[mp3|ogg]", A5: "A5.[mp3|ogg]", A6: "A6.[mp3|ogg]", C4: "C4.[mp3|ogg]", C5: "C5.[mp3|ogg]", C6: "C6.[mp3|ogg]", C7: "C7.[mp3|ogg]", E4: "E4.[mp3|ogg]", E5: "E5.[mp3|ogg]", E6: "E6.[mp3|ogg]", G4: "G4.[mp3|ogg]", G5: "G5.[mp3|ogg]", G6: "G6.[mp3|ogg]" }, xylophone: { C7: "C7.[mp3|ogg]", G3: "G3.[mp3|ogg]", G4: "G4.[mp3|ogg]", G5: "G5.[mp3|ogg]", G6: "G6.[mp3|ogg]", C4: "C4.[mp3|ogg]", C5: "C5.[mp3|ogg]", C6: "C6.[mp3|ogg]" }, drum: { C1: "kick-1.ogg", D1: "kick-2.ogg", C2: "snare-1.ogg", D2: "snare-2.ogg", E2: "snare-3.ogg", F2: "snare-4.ogg", G2: "snare-5.ogg", C3: "tom-1.ogg", D3: "tom-2.ogg", C4: "conga-1.ogg", D4: "conga-2.ogg", E4: "conga-3.ogg", C5: "rimshot-1.ogg", D5: "claves-1.ogg", E5: "shaker-1.ogg", F5: "clap-1.ogg", C6: "closed-hh-1.ogg", D6: "closed-hh-2.ogg", E6: "closed-hh-3.ogg", C7: "open-hh-1.ogg" } };

            function sl(t, e) { var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (n) return (n = n.call(t)).next.bind(n); if (Array.isArray(t) || (n = function(t, e) { if (!t) return; if ("string" == typeof t) return cl(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return cl(t, e) }(t)) || e && t && "number" == typeof t.length) { n && (t = n); var r = 0; return function() { return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] } } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }

            function cl(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r } var ll = function() { var t = (0, d.Z)(m().mark((function t(e) { var n; return m().wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if ("polysynth" !== e) { t.next = 2; break } return t.abrupt("return", new Hc(jc).toDestination());
                                case 2:
                                    if ("amsynth" !== e) { t.next = 4; break } return t.abrupt("return", (new Bc).toDestination());
                                case 4:
                                    if ("fmsynth" !== e) { t.next = 6; break } return t.abrupt("return", (new Lc).toDestination());
                                case 6:
                                    if (!ul[e]) { t.next = 11; break } return n = new Xc({ urls: ul[e], release: 1, baseUrl: "https://raw.githubusercontent.com/if-x/tonejs-instruments/master/samples/" + e + "/" }).toDestination(), t.next = 10, Su.loaded();
                                case 10:
                                    return t.abrupt("return", n);
                                case 11:
                                    return t.abrupt("return", new jc({ oscillator: { type: e } }).toDestination());
                                case 12:
                                case "end":
                                    return t.stop() } }), t) }))); return function(e) { return t.apply(this, arguments) } }(),
                fl = function() { var t = (0, d.Z)(m().mark((function t(e) { var n, r, o, i; return m().wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    for (n = [], r = sl(e); !(o = r()).done;) i = o.value, n.push(ll(i)); return t.abrupt("return", Promise.all(n));
                                case 3:
                                case "end":
                                    return t.stop() } }), t) }))); return function(e) { return t.apply(this, arguments) } }(),
                hl = [
                    ["guitar-electric", "fatsawtooth8", "polysynth", "drum", "bass-electric"],
                    ["polysynth", "fattriangle", "drum", "xylophone", "bass-electric"],
                    ["piano", "drum", "guitar-acoustic", "harp", "polysynth"],
                    ["harp", "guitar-nylon", "cello", "polysynth", "drum"],
                    ["drum", "guitar-electric", "bass-electric", "drum", "guitar-acoustic"],
                    ["xylophone", "piano", "drum", "square8", "guitar-acoustic"]
                ],
                pl = function(t) { var e = t.matrix,
                        n = t.rowCount,
                        a = t.colCount,
                        u = t.previewSize,
                        s = t.playMode,
                        c = t.interval,
                        d = t.maxGen,
                        v = void 0 === d ? 2500 : d,
                        m = t.isMusicOn,
                        g = t.preloadMusic,
                        y = t.onStopped,
                        b = function() { return (0, i.DA)({ matrix: e, rowCount: n, colCount: a, newSize: u }) },
                        _ = (0, i.gb)(e),
                        w = function() { return p(h(u), b()) },
                        k = r.useState(b()),
                        x = k[0],
                        O = k[1],
                        S = r.useState(w()),
                        C = S[0],
                        A = S[1],
                        T = r.useState(0),
                        E = T[0],
                        P = T[1],
                        Z = r.useState([]),
                        R = Z[0],
                        D = Z[1],
                        j = r.useState(void 0),
                        M = j[0],
                        I = j[1],
                        N = r.useState(void 0),
                        B = N[0],
                        F = N[1],
                        L = r.useState(),
                        V = L[0],
                        z = L[1],
                        U = (0, o.D)((0, f.JH)(e).rleString),
                        q = (0, o.D)(u),
                        W = (0, o.D)(s),
                        G = r.useMemo((function() { return hl[_ % hl.length] }), [_]); return r.useEffect((function() {
                        (g || m) && _ > 0 && !V && fl(G).then((function(t) { z(t) })) }), [g, m, _]), r.useEffect((function() { var t, n = x,
                            r = C,
                            o = E,
                            a = R; if ((U !== (0, f.JH)(e).rleString || "reset" !== W && "reset" === s || q !== u) && (O(b()), A(w()), P(0), D([]), I(void 0), F(void 0), n = b(), r = w(), o = 0, a = [(0, f.JH)(n).rleString]), "play" === s && (V && m || !m)) { t = setInterval((function() { return function() { if (o < v) { n = (0, i.F6)(n), r = p(r, n); var e = (0, f.JH)(n).rleString; if (a[a.length - 1] !== e) { if (!a.includes(e) || B || M || (F("loops"), I(o - 1)), P(o += 1), O(n), A(r), a.push(e), D(a), m && V)
                                                for (var u = 0; u < V.length; u++) l({ instrumentType: G[u], instrumentsCount: G.length, sampler: V[u], index: u, matrix: n, generation: o - 1, activeCount: _, interval: c }) } else F("stopped"), I(o), clearInterval(t), y && y() } else y && (F("stopped"), y()) }() }), c) } return function() { clearInterval(t) } }), [u, s, c, (0, f.JH)(e).rleString, V, _, m]), { matrix: x, numMatrix: C, genetationCount: E, lifeSpan: M, state: B, defaultMatrix: b() } } }, 99588: function(t, e, n) { "use strict";
            n.d(e, { Z: function() { return h } }); var r = n(87462),
                o = n(63366),
                i = n(67294),
                a = n(57945),
                u = n(23431),
                s = ["component"],
                c = ["component", "analytics", "role", "tabIndex", "ariaLabel", "className", "onClick", "onKeyDown"],
                l = function(t) { var e = t.component,
                        n = (0, o.Z)(t, s); return i.createElement(e || "div", n) },
                f = { cursor: "pointer", WebkitTapHighlightColor: "transparent", userSelect: "none", "&:focus": { outline: "0", boxShadow: "0" }, "&:active": { outline: "0" }, "> *": { pointerEvent: "none" } },
                h = function(t) { var e = t.component,
                        n = t.analytics,
                        i = t.role,
                        s = t.tabIndex,
                        h = t.ariaLabel,
                        p = t.className,
                        d = t.onClick,
                        v = t.onKeyDown,
                        m = (0, o.Z)(t, c),
                        g = function(t) { d && ((0, a.jT)(n), d(t)) }; return (0, u.tZ)(l, (0, r.Z)({ component: e, role: i, tabIndex: s || 0, "aria-label": h, css: f, className: p, onClick: g, onKeyDown: function(t) { v && v(t), "Enter" !== t.key && "Enter" !== t.code && 13 !== t.keyCode || !d || g() } }, m)) } }, 14874: function(t, e, n) { "use strict";
            n.d(e, { Z: function() { return h } }); var r = n(87462),
                o = n(63366),
                i = (n(67294), n(99588)),
                a = n(80015),
                u = n(3073),
                s = n(51198),
                c = { root: function(t) { return { display: "inline-flex", justifyContent: "center", alignItems: "center", maxWidth: "100%", height: (0, s.e)(5), fontWeight: u.F.Weight.SemiBold, color: t.foreground, backgroundColor: t.background, paddingLeft: (0, s.e)(1.5), paddingRight: (0, s.e)(1.5), borderRadius: (0, s.e)(3), transition: "all 0.2s ease", WebkitAppearance: "none", userSelect: "none", outline: 0, ":hover": { boxShadow: "1px 3px 10px " + t.shadow }, ":active": { boxShadow: "1px 1px 5px " + t.shadow, outline: 0 } } }, small: { fontSize: 14, height: (0, s.e)(4), lineHeight: "20px" }, primary: function(t) { return { color: t.background, backgroundColor: t.foreground } }, outline: function(t) { return { border: "1px solid " + t.foreground } }, loader: { marginRight: (0, s.e)(1), "> span": { display: "block", height: (0, s.e)(2) } }, cursorPointer: { cursor: "pointer" }, cursorWait: { cursor: "wait" }, disabled: { opacity: .7 } },
                l = n(23431),
                f = ["to", "type", "size", "outline", "target", "disabled", "children", "title", "ariaLabel"],
                h = function(t) { var e = t.to,
                        n = t.type,
                        u = void 0 === n ? "default" : n,
                        s = t.size,
                        h = void 0 === s ? "standard" : s,
                        p = t.outline,
                        d = t.target,
                        v = t.disabled,
                        m = t.children,
                        g = t.title,
                        y = t.ariaLabel,
                        b = (0, o.Z)(t, f),
                        _ = [c.root, "primary" === u && c.primary, "small" === h && c.small, p && c.outline, v && c.disabled]; return e && !v ? (0, l.tZ)(a.Z, (0, r.Z)({ to: e, title: g, css: _, target: d, rel: "_blank" === d ? "noreferrer" : void 0 }, b), m) : (0, l.tZ)(i.Z, (0, r.Z)({ role: "button", title: g, css: [].concat(_, [b.onClick && c.cursorPointer, ""]), disabled: v, ariaLabel: y }, b), m) } }, 51198: function(t, e, n) { "use strict";
            n.d(e, { e: function() { return o } }); var r = n(56512),
                o = function(t) { var e = t % .5 == 0; return (0, r.ZP)(e, "Error: value that can't be divided by 0.5 is not allowed."), 10 * t + "px" } }, 52366: function(t, e, n) { "use strict";
            n.d(e, { R: function() { return a } }); var r = n(93433),
                o = n(28733),
                i = n(35135),
                a = function t(e) { var n = { margin: 0 }; if (e)
                        if (Array.isArray(e)) n = o.e6.apply(void 0, (0, r.Z)(e));
                        else if ("object" == typeof e) { var a = e.top,
                            u = void 0 === a ? 0 : a,
                            s = e.right,
                            c = void 0 === s ? 0 : s,
                            l = e.bottom,
                            f = void 0 === l ? 0 : l,
                            h = e.left,
                            p = void 0 === h ? 0 : h;
                        n = (0, o.e6)(u, c, f, p); var d = e,
                            v = d.desktop,
                            m = d.mobile; if (v || m) { var g, y = v && t(v),
                                b = m && t(m);
                            n = Object.assign({}, n, ((g = {})[i.A.Mobile] = b, g[i.A.DesktopTablet] = y, g)) } } return n } }, 35135: function(t, e, n) { "use strict"; var r;
            n.d(e, { A: function() { return r } }),
                function(t) { t.Desktop = "@media (min-width: 1025px)", t.TabletMobile = "@media (max-width: 1024px)", t.DesktopTablet = "@media (min-width: 768px)", t.Tablet = "@media (max-width: 1024px) and (min-width: 768px)", t.Mobile = "@media (max-width: 767px)", t.MobileLand = "@media (max-width: 767px) and (min-width: 480px)", t.MobilePort = "@media (max-width: 479px)", t.MobilePortXs = "@media (max-width: 320px)" }(r || (r = {})) }, 8078: function(t, e, n) { "use strict";
            n.d(e, { q: function() { return c } }); var r = n(87462),
                o = n(63366),
                i = n(67294),
                a = n(50660),
                u = n(23431),
                s = ["src", "fallbackSrc", "onError", "turnOffLazyLoading", "alt"],
                c = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
            e.Z = function(t) { var e = t.src,
                    n = void 0 === e ? c : e,
                    l = t.fallbackSrc,
                    f = t.onError,
                    h = t.turnOffLazyLoading,
                    p = t.alt,
                    d = (0, o.Z)(t, s),
                    v = i.useState(0),
                    m = v[0],
                    g = v[1],
                    y = (0, a.YD)({ threshold: .5, triggerOnce: !0, rootMargin: "200px" }),
                    b = y[0],
                    _ = y[1],
                    w = n.replace("https://cdn.nftkey.app/", "https://storage.googleapis.com/cdn.nftkey.app/"); return (0, u.tZ)("img", (0, r.Z)({ ref: h ? void 0 : b, src: _ || h ? w : c, onError: function(t) { 0 === m && (t.currentTarget.src = l || c, f && f(t), g(m + 1)) }, alt: p }, d)) } }, 37842: function(t, e, n) { "use strict";
            n.d(e, { Z: function() { return x } }); var r, o, i, a, u, s, c = n(67294),
                l = n(56512),
                f = n(37085),
                h = n(99588),
                p = n(35135),
                d = n(51198),
                v = n(3073),
                m = ((r = { display: "flex" })[p.A.Mobile] = { "> div": { width: "100%" } }, r),
                g = ((o = {})[p.A.Mobile] = { overflowX: "scroll", WebkitOverflowScrolling: "touch", overflowY: "hidden", marginLeft: (0, d.e)(-2), marginRight: (0, d.e)(-2), "> div": { width: "auto !important" }, "&::before, &::after": { content: "''", display: "block", width: (0, d.e)(2), flexShrink: 0 }, "&::-webkit-scrollbar": { display: "none" } }, o),
                y = ((i = {})[p.A.DesktopTablet] = { width: "100%", minHeight: (0, d.e)(4) }, i),
                b = ((a = { position: "relative", zIndex: 1, display: "flex", justifyContent: "center", alignItems: "center", height: "100%", backgroundColor: "transparent", borderRadius: (0, d.e)(4), overflow: "hidden", WebkitTapHighlightColor: "transparent", cursor: "pointer", "&:focus": { outline: "none" }, "> *, > *::before, > *::after": { userSelect: "none" } })[p.A.DesktopTablet] = { fontSize: 18 }, a[p.A.Mobile] = { minWidth: "54px", flexShrink: 0, fontSize: 14 }, a),
                _ = ((u = {})[p.A.DesktopTablet] = { fontSize: 14 }, u),
                w = { scroll: g, container: m, borderedContainer: function(t) { var e; return (e = { position: "relative", flexShrink: 0, display: "flex", minHeight: (0, d.e)(4), backgroundColor: t.background, border: "1px solid " + t.bodyBackground, borderRadius: (0, d.e)(4), userSelect: "none" })[p.A.DesktopTablet] = { width: "100%", minHeight: (0, d.e)(5) }, e[p.A.Mobile] = { minWidth: "100%" }, e }, smallContainer: y, defaultLabel: b, uniWidth: { flex: 1 }, labelText: ((s = { position: "relative", zIndex: 1, display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", height: "100%", lineHeight: "20px", fontWeight: v.F.Weight.SemiBold, padding: (0, d.e)(1) })[p.A.DesktopTablet] = { fontSize: 18 }, s["&::after"] = { position: "absolute", top: 0, left: 0, display: "block", height: 0, visibility: "hidden", content: "attr(title)", fontWeight: v.F.Weight.Bold, padding: (0, d.e)(1), zIndex: 0 }, s), smallLabel: _, selected: function(t) { return { backgroundColor: t.foreground, "> span:first-of-type": { color: t.background + " !important", fontWeight: v.F.Weight.Bold }, pointerEvents: "none" } } },
                k = n(23431),
                x = function(t) { var e = t.itemPickerName,
                        n = t.isScrollable,
                        r = t.isUniWidth,
                        o = t.hasUrlParam,
                        i = t.items,
                        a = t.activeItemValue,
                        u = t.onItemClick,
                        s = t.size,
                        p = t.eventCategory;
                    c.useEffect((function() { if (o) { var t = (0, f.i3)(e);
                            t && i.find((function(e) { return e.value === t })) && u(t) } }), [o]), (0, l.ZP)(!e.includes(" "), "Item picker name should be camelcase"); var d = i.map((function(t, n) { return (0, k.tZ)(h.Z, { id: e + "-" + n, key: t.value, role: "button", ariaLabel: t.label, css: [w.defaultLabel, r && w.uniWidth, a === t.value && w.selected, "small" === s && w.smallLabel, "", ""], onClick: function() { return function(t) { o && (0, f.Kb)(e, t.value), u(t.value) }(t) }, title: t.value, analytics: { category: p, action: "Click - " + e, label: t.label } }, (0, k.tZ)("span", { css: [w.labelText, "small" === s && w.smallLabel, "", ""], title: t.value }, t.label)) })); return (0, k.tZ)("div", { css: [w.container, n && w.scroll, "", ""] }, (0, k.tZ)("div", { css: [w.borderedContainer, "small" === s && w.smallContainer, "", ""] }, d)) } }, 80015: function(t, e, n) { "use strict"; var r = n(87462),
                o = n(63366),
                i = (n(67294), n(1597)),
                a = n(57945),
                u = n(37085),
                s = n(23431),
                c = ["to", "isExternal", "noPrefetch", "analytics", "target", "ref"];
            e.Z = function(t) { var e = t.to,
                    n = t.isExternal,
                    l = t.noPrefetch,
                    f = t.analytics,
                    h = t.target,
                    p = (t.ref, (0, o.Z)(t, c)); return e.includes("http") || n ? (0, s.tZ)("a", (0, r.Z)({ href: e, target: h, rel: "_blank" === h ? "noopener noreferrer" : void 0 }, p, (0, a.OI)(f))) : l ? (0, s.tZ)("a", (0, r.Z)({ href: e }, p, { onClick: function(t) { t.preventDefault(), (0, i.navigate)(e, { state: { prevPath: (0, u.Jz)() } }); var n = p.onClick;
                        n && n(t) } }, (0, a.OI)(f))) : (0, s.tZ)(i.Link, (0, r.Z)({ to: e }, p, (0, a.OI)(f), { state: { prevPath: (0, u.Jz)() } })) } }, 7473: function(t, e, n) { "use strict";
            n.d(e, { YV: function() { return i }, f0: function() { return a }, OL: function() { return u } }); var r = n(35135),
                o = function(t) { var e = 1.5;
                    t > 16 && (e = 1.4), t > 18 && (e = 1.3), t > 24 && (e = 1.25), t > 28 && (e = 1.2), t > 34 && (e = 1.1), t > 40 && (e = 1.05); var n = t * e; return 2 * Math.round(n / 2) + "px" },
                i = function(t, e) { return { fontSize: t + "px", lineHeight: e ? e + "px" : o(t) } },
                a = function t(e) { var n = {}; if (e)
                        if ("number" == typeof e) n.fontSize = e + "px", n.lineHeight = o(e);
                        else if ("object" == typeof e) { var i, a = e,
                            u = a.size,
                            s = a.desktop,
                            c = a.mobile,
                            l = t(u),
                            f = s && t(s),
                            h = c && t(c);
                        n = Object.assign({}, l, ((i = {})[r.A.Mobile] = h, i[r.A.DesktopTablet] = f, i)) } return n },
                u = function(t) { var e = {}; if (t)
                        if ("string" == typeof t) e.textAlign = t;
                        else if ("object" == typeof t) { var n, o = t,
                            i = o.desktop,
                            a = o.mobile;
                        (n = {})[r.A.Mobile] = { textAlign: a }, n[r.A.DesktopTablet] = { textAlign: i }, e = n } return e } }, 1738: function(t, e, n) { "use strict"; var r = n(87462),
                o = n(63366),
                i = n(65811),
                a = n(67294),
                u = n(52366),
                s = n(7473),
                c = n(23431),
                l = ["component"],
                f = ["textSize", "textAlign", "type", "weight", "margin", "className", "component"],
                h = function(t) { var e = t.component,
                        n = (0, o.Z)(t, l); return a.createElement(e || "span", n) };
            e.Z = function(t) { var e = t.textSize,
                    n = t.textAlign,
                    a = t.type,
                    l = void 0 === a ? "primary" : a,
                    p = t.weight,
                    d = t.margin,
                    v = t.className,
                    m = t.component,
                    g = (0, o.Z)(t, f),
                    y = (0, i.u)(),
                    b = (0, s.f0)(e),
                    _ = (0, s.OL)(n),
                    w = (0, u.R)(d); return (0, c.tZ)(h, (0, r.Z)({ css: [b, "secondary" === l && { color: y.text }, _, w, !!p && { fontWeight: p }, "", ""], className: v, component: m }, g)) } }, 84887: function(t, e, n) { "use strict";
            n.d(e, { Rk: function() { return r }, OP: function() { return o }, Ew: function() { return i }, L6: function() { return a }, Kb: function() { return u } }); var r = "0x0000000000000000000000000000000000000000",
                o = "0x1D28577186e6c3Fa278B844b578D420D97b9B1f9",
                i = { LIFE_BSCTEST: "0x5fF172577b590Cb92E0F29c889D9e0289241fA72", LIFE_ROPSTEN: "0x32d8021324af928F864C23b7912C8c3F11cC4Cdc", LIFE_BSC: "0xA205585368917366CCE212EecC754F6d055A2e8E", LIFE: "0x24DE7018b2C73B5437eaF647e914a9042CC6D770", LIFE_MINT_BSCTEST: "0xB37C72BA1A71eB49F00D82bf382749a2Fa3b367E", LIFE_MINT_ROPSTEN: "0x5558bd50868060b91c7218dE1848406950016066", LIFE_MINT_BSC: "0x35657e4c94C3d7f27d38672D293aFC530204B6a8", LIFE_MINT: "0x5558bd50868060b91c7218dE1848406950016066" },
                a = { GOAL_BSCTEST: "0xe44ADE52Cd075ff988D67A71D155e1A2e95a0BF4", GOAL_ROPSTEN: "0x62B79E5eE1ED21F81b241E75298C27aD5AE1F85F", GOAL_BSC: "0x4eeC0Ed0d135cAbC6bB97e87379a65368fD018F4", GOAL_ETH: "0x6d6C23283ecC0D4b186285103AEFc8e4eE6B314E" },
                u = { SPUNKS: "0x9a604220d37b69c09eFfCcd2E8475740773E3DaF", SPUNK_NFTX: "0x97aa8e14db0bc073cc7e2d42ac715427717d6042" } }, 36171: function(t, e, n) { "use strict";
            n.d(e, { a: function() { return r } }); var r = { BIO_CREATE: "bioCreate", BIO_PREVIEW: "bioPreview", PROGENY_CATELOG: "ideasCatelog", MINT_DETAILS: "mintDetails", THREED_CANVAS: "threeDCanvas" } }, 18905: function(t, e, n) { "use strict";
            n.d(e, { L4: function() { return r }, cJ: function() { return o }, e3: function() { return i } }); var r = "https://cdn.nftkey.app",
                o = "https://cdn.nftkey.app/images",
                i = function(t) { return "https://cdn.nftkey.app/images/collections/social-share/" + t + ".jpg" } }, 55: function(t, e, n) { "use strict";
            n.d(e, { I: function() { return o } }); var r = n(67294),
                o = function(t) { var e = t.ref,
                        n = t.callback;
                    r.useEffect((function() { var t = function(t) { return function(t, e) { n && e && !e.contains(t.target) && n(e) }(t, e.current) }; return document.addEventListener("touchstart", t), document.addEventListener("mousedown", t),
                            function() { document.removeEventListener("touchstart", t), document.removeEventListener("mousedown", t) } }), [e, n]) } }, 44269: function(t, e, n) { "use strict";
            n.d(e, { D: function() { return o } }); var r = n(67294),
                o = function(t) { var e = (0, r.useRef)(); return (0, r.useEffect)((function() { e.current = t })), e.current } }, 39201: function(t, e, n) { "use strict";
            n.d(e, { K: function() { return c } }); var r, o = n(15861),
                i = n(87757),
                a = n.n(i),
                u = n(67294),
                s = { loading: !1, lifeCollection: "life", collectionChainId: n(40119).a.ETH, updateBioInfo: (r = (0, o.Z)(a().mark((function t() { return a().wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", void 0);
                                case 1:
                                case "end":
                                    return t.stop() } }), t) }))), function() { return r.apply(this, arguments) }) },
                c = u.createContext(s) }, 57945: function(t, e, n) { "use strict"; var r;
            n.d(e, { sg: function() { return r }, OI: function() { return o }, jT: function() { return a } }),
                function(t) { t.Site_Header = "Site - Header", t.Site_Footer = "Site - Footer", t.Site_Navigate = "Site - Navigate", t.Site_RecentEvents = "Site - Recent Events", t.Site_SelectCollection = "Site - Select Collection", t.Page_Home = "Page - Home", t.Page_NotFound = "Page - 404", t.Page_MyNFTs = "Page - My NFTs", t.Page_UserNFTs = "Page - User NFTs", t.Page_MarketplaceContracts = "Page - Marketplace Contracts", t.Page_Statistics = "Page - Statistics", t.Page_Artists = "Page - Artists", t.Page_Artist = "Page - Artist", t.Page_Teams = "Page - Teams", t.Page_Team = "Page - Team", t.Page_SpunksLanding = "Page - Spunks landing", t.Page_SpunksStageOne_Burning = "Page - Spunks Stage one - Burning", t.Page_SpunksStageTwo = "Page - Spunks Stage two", t.Page_SpunksPublicClaim = "Page - Spunks Public Claim", t.Page_SpunksProvenance = "Page - Spunks Provenance", t.Page_LifePromotionBar = "Page - Life - Promotion bar", t.Page_LifeLanding = "Page - Life - Landing", t.Page_LifeInit = "Page - Life - Init", t.Page_LifeBio3D = "Page - Life - BIO 3D", t.Module_BscWarning = "Module - BSC warning", t.Page_GoalDashboard = "Page - Goal Dashboard", t.Module_ConnectFail = "Module - Connection fail", t.Module_ConnectWallet = "Module - Connect wallet", t.Module_SocialLinks = "Module - Social links - Side", t.SetRoyaltyPage = "SetRoyaltyPage", t.NotFoundPage = "NotFoundPage", t.Skeleton = "Skeleton", t.Admin = "Admin", t.Test = "Test" }(r || (r = {})); var o = function(t) { var e = t.category,
                        n = t.action,
                        r = t.label,
                        o = t.value,
                        i = { "data-event-category": e, "data-event-action": n, "data-event-label": r }; return o && (i["data-event-value"] = o), i },
                i = function(t) { var e = t.event,
                        n = t.category,
                        r = t.action,
                        o = t.label,
                        i = t.value,
                        a = { event: e, eventCategory: n, eventAction: r, eventLabel: o };
                    i && (a.eventValue = i), window && dataLayer && dataLayer.push(a) },
                a = function(t) { i(Object.assign({ event: "ActionableClick" }, t)) } }, 91399: function(t, e, n) { "use strict";
            n.d(e, { m: function() { return c } }); var r = n(15861),
                o = n(87757),
                i = n.n(o),
                a = n(96633),
                u = n.n(a),
                s = n(523),
                c = function() { var t = (0, r.Z)(i().mark((function t(e) { var n, r, o, a, c, l; return i().wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = e.url, r = e.useCache, o = e.maxAge, t.prev = 1, t.next = 4, (0, s.Y)(n, o || 3e5);
                                case 4:
                                    if (!(a = t.sent) || !r) { t.next = 7; break } return t.abrupt("return", a);
                                case 7:
                                    return t.next = 9, u().get(n, { timeout: 36e4 });
                                case 9:
                                    return c = t.sent, l = (new Date).getTime(), t.next = 13, (0, s.b)(n, c.data);
                                case 13:
                                    return t.abrupt("return", { data: c.data, timestamp: l });
                                case 16:
                                    return t.prev = 16, t.t0 = t.catch(1), console.error("Error", t.t0), t.abrupt("return", { error: t.t0 });
                                case 20:
                                case "end":
                                    return t.stop() } }), t, null, [
                            [1, 16]
                        ]) }))); return function(e) { return t.apply(this, arguments) } }() }, 25861: function(t, e, n) { "use strict";
            n.d(e, { j: function() { return h } }); var r, o = n(87462),
                i = r || (r = {});
            i.Pop = "POP", i.Push = "PUSH", i.Replace = "REPLACE"; var a = function(t) { return t };

            function u(t) { t.preventDefault(), t.returnValue = "" }

            function s() { var t = []; return {get length() { return t.length }, push: function(e) { return t.push(e),
                            function() { t = t.filter((function(t) { return t !== e })) } }, call: function(e) { t.forEach((function(t) { return t && t(e) })) } } }

            function c() { return Math.random().toString(36).substr(2, 8) }

            function l(t) { var e = t.pathname;
                e = void 0 === e ? "/" : e; var n = t.search; return n = void 0 === n ? "" : n, t = void 0 === (t = t.hash) ? "" : t, n && "?" !== n && (e += "?" === n.charAt(0) ? n : "?" + n), t && "#" !== t && (e += "#" === t.charAt(0) ? t : "#" + t), e }

            function f(t) { var e = {}; if (t) { var n = t.indexOf("#");
                    0 <= n && (e.hash = t.substr(n), t = t.substr(0, n)), 0 <= (n = t.indexOf("?")) && (e.search = t.substr(n), t = t.substr(0, n)), t && (e.pathname = t) } return e } var h = function() { return "undefined" != typeof window && function(t) {
                    function e() { var t = d.location,
                            e = v.state || {}; return [e.idx, a({ pathname: t.pathname, search: t.search, hash: t.hash, state: e.usr || null, key: e.key || "default" })] }

                    function n(t) { return "string" == typeof t ? t : l(t) }

                    function i(t, e) { return void 0 === e && (e = null), a((0, o.Z)({ pathname: b.pathname, hash: "", search: "" }, "string" == typeof t ? f(t) : t, { state: e, key: c() })) }

                    function h(t) { g = t, t = e(), y = t[0], b = t[1], _.call({ action: g, location: b }) }

                    function p(t) { v.go(t) }
                    void 0 === t && (t = {}); var d = void 0 === (t = t.window) ? document.defaultView : t,
                        v = d.history,
                        m = null;
                    d.addEventListener("popstate", (function() { if (m) w.call(m), m = null;
                        else { var t = r.Pop,
                                n = e(),
                                o = n[0]; if (n = n[1], w.length) { if (null != o) { var i = y - o;
                                    i && (m = { action: t, location: n, retry: function() { p(-1 * i) } }, p(i)) } } else h(t) } })); var g = r.Pop,
                        y = (t = e())[0],
                        b = t[1],
                        _ = s(),
                        w = s(); return null == y && (y = 0, v.replaceState((0, o.Z)({}, v.state, { idx: y }), "")), {get action() { return g }, get location() { return b }, createHref: n, push: function t(e, o) { var a = r.Push,
                                u = i(e, o); if (!w.length || (w.call({ action: a, location: u, retry: function() { t(e, o) } }), 0)) { var s = [{ usr: u.state, key: u.key, idx: y + 1 }, n(u)];
                                u = s[0], s = s[1]; try { v.pushState(u, "", s) } catch (c) { d.location.assign(s) }
                                h(a) } }, replace: function t(e, o) { var a = r.Replace,
                                u = i(e, o);
                            w.length && (w.call({ action: a, location: u, retry: function() { t(e, o) } }), 1) || (u = [{ usr: u.state, key: u.key, idx: y }, n(u)], v.replaceState(u[0], "", u[1]), h(a)) }, go: p, back: function() { p(-1) }, forward: function() { p(1) }, listen: function(t) { return _.push(t) }, block: function(t) { var e = w.push(t); return 1 === w.length && d.addEventListener("beforeunload", u),
                                function() { e(), w.length || d.removeEventListener("beforeunload", u) } } } }() } }, 1686: function(t, e, n) { "use strict";
            n.d(e, { a: function() { return s }, Y: function() { return c } }); var r = n(15861),
                o = n(87757),
                i = n.n(o),
                a = n(18445),
                u = n(59350),
                s = function() { var t = (0, r.Z)(i().mark((function t(e) { var n, o, s, c, l, f, h, p, d, v, m, g, y; return i().wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = e.matrix, o = e.x, s = e.y, c = e.newSize, l = void 0 === c ? a.R3 : c, f = (0, a.DA)({ matrix: n, rowCount: s, colCount: o, newSize: l }), h = f, p = 0, d = 0, v = void 0, m = [(0, u.JH)(h).rleString], g = void 0, y = function() { var t = (0, r.Z)(i().mark((function t() { var e; return i().wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.next = 2, (0, a.Xs)(h);
                                                    case 2:
                                                        if (h = t.sent, e = (0, u.JH)(h).rleString, m.includes(e)) { t.next = 11; break } return p += 1, m.push(e), t.next = 9, y();
                                                    case 9:
                                                        t.next = 12; break;
                                                    case 11:
                                                        m[m.length - 1] !== e ? (g = "loops", v = e, d || (d = p - m.findIndex((function(t) { return t === e }))), m[0] === e && (p = 0)) : g = "stopped";
                                                    case 12:
                                                    case "end":
                                                        return t.stop() } }), t) }))); return function() { return t.apply(this, arguments) } }(), t.next = 11, y();
                                case 11:
                                    return t.abrupt("return", { state: g, generation: p, loopStep: d, loopFrameRle: v });
                                case 12:
                                case "end":
                                    return t.stop() } }), t) }))); return function(e) { return t.apply(this, arguments) } }(),
                c = function(t) { var e = t.state,
                        n = t.generation,
                        r = t.loopStep; return "stopped" === e && 0 === n ? "Static" : "stopped" === e && n > 0 ? "Static after GEN " + n : "loops" === e && 0 === n ? r ? "Loops (" + r + ")" : "Loops" : "loops" === e && n > 0 ? r ? "Loops (" + r + ") after GEN " + n : "Loops after GEN " + n : void 0 } }, 18445: function(t, e, n) { "use strict";
            n.d(e, { R3: function() { return o }, cr: function() { return i }, RZ: function() { return a }, Ys: function() { return u }, hI: function() { return s }, DA: function() { return c }, Rb: function() { return l }, F6: function() { return f }, cF: function() { return h }, Xs: function() { return d }, gb: function() { return v } }); var r = n(93433),
                o = 17,
                i = 33,
                a = 5,
                u = 48,
                s = function(t) { return new Array(t).fill(function(t) { return new Array(t).fill(!1) }(t)) },
                c = function(t) { var e = t.matrix,
                        n = t.rowCount,
                        r = t.colCount,
                        o = t.newSize,
                        i = s(o),
                        a = Math.floor((o - n) / 2),
                        u = Math.floor((o - r) / 2); try { i = i.map((function(t, o) { return t.map((function(t, i) { var s = o - a,
                                    c = i - u; return !(s < 0 || s > n - 1 || c < 0 || c > r - 1) && e[s][c] })) })) } catch (c) { console.error("Error expand matrix:", e, c) } return i },
                l = function(t, e, n, r) { return [
                        [-1, -1],
                        [-1, 0],
                        [-1, 1],
                        [0, 1],
                        [1, 1],
                        [1, 0],
                        [1, -1],
                        [0, -1]
                    ].reduce((function(o, i) { var a = e + i[0],
                            u = n + i[1]; return o < 4 && (a >= 0 && a < r && u >= 0 && u < r) && t[a][u] ? o + 1 : o }), 0) },
                f = function(t) { for (var e = t.length, n = JSON.parse(JSON.stringify(t)), r = 0; r < e; r++)
                        for (var o = 0; o < e; o++) { var i = l(t, r, o, e);
                            t[r][o] ? (i < 2 || i > 3) && (n[r][o] = !1) : 3 === i && (n[r][o] = !0) }
                    return n },
                h = function(t) { for (var e = t.length, n = JSON.parse(JSON.stringify(t)), r = f(t), o = 0; o < e; o++)
                        for (var i = 0; i < e; i++) { var a = l(r, o, i, e);
                            r[o][i] || 0 !== a || (n[o][i] = !1) }
                    return n },
                p = function(t, e) { return new Promise((function(n) { for (var o = t.length, i = (0, r.Z)(t[e]), a = 0; a < o; a++) { var u = l(t, e, a, o);
                            t[e][a] ? (u < 2 || u > 3) && (i[a] = !1) : 3 === u && (i[a] = !0) }
                        n(i) })) },
                d = function(t) { for (var e = t.length, n = [], r = 0; r < e; r++) n.push(p(t, r)); return Promise.all(n) },
                v = function(t) { var e = 0; return t.forEach((function(n, r) { n.forEach((function(n, o) { t[r][o] && e++ })) })), e } }, 59350: function(t, e, n) { "use strict";
            n.d(e, { _d: function() { return a }, JH: function() { return u }, yw: function() { return s }, Bo: function() { return c } }); var r = n(18445);

            function o(t, e) { var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (n) return (n = n.call(t)).next.bind(n); if (Array.isArray(t) || (n = function(t, e) { if (!t) return; if ("string" == typeof t) return i(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(t, e) }(t)) || e && t && "number" == typeof t.length) { n && (t = n); var r = 0; return function() { return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] } } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }

            function i(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r } var a = function(t) { return t.length % 2 == 1 && t.pop(), t.reduce((function(t, e, n) { return t = n % 2 == 0 ? "" + t + e + "b" : "" + t + e + "o" }), "") },
                u = function(t) { for (var e, n = [], r = !1, i = 0, u = o(t); !(e = u()).done;)
                        for (var s, c = o(e.value); !(s = c()).done;) { var l = s.value;
                            l !== r ? (n.push(i), r = l, i = 1) : i++ }
                    return !0 === r && n.push(i), n.length % 2 == 1 && n.pop(), { rleString: a(n), rleArray: n } },
                s = function(t) { for (var e = (0, r.hI)(r.R3), n = 0, o = 0; o < t.length; o++) { for (var i = o % 2 != 0, a = t[o], u = 0; u < a; u++) { var s = n + u,
                                c = Math.floor(s / r.R3),
                                l = s % r.R3; if (c < r.R3 && l < r.R3) { var f = JSON.parse(JSON.stringify(e));
                                f[c][l] = i, e = f } }
                        n += a } return e },
                c = function(t) { var e = function(t) { return t.split(/(b|o)/g).filter((function(t) { return "b" !== t && "o" !== t && "" !== t })).map((function(t) { return parseInt(t) })).filter((function(t) { return t >= 0 })) }(t); return s(e) } }, 523: function(t, e, n) { "use strict";
            n.d(e, { b: function() { return u }, Y: function() { return s } }); var r = n(15861),
                o = n(87757),
                i = n.n(o),
                a = n(25322);

            function u(t, e) {
                (0, a._U)(t, { timestamp: Date.now(), data: e }) }

            function s(t, e) { return c.apply(this, arguments) }

            function c() { return (c = (0, r.Z)(i().mark((function t(e, n) { var r; return i().wrap((function(t) { for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, (0, a.TG)(e);
                            case 2:
                                if (!((r = t.sent) && Date.now() - r.timestamp < n)) { t.next = 5; break } return t.abrupt("return", r);
                            case 5:
                                return t.abrupt("return", void 0);
                            case 6:
                            case "end":
                                return t.stop() } }), t) })))).apply(this, arguments) } }, 37085: function(t, e, n) { "use strict";
            n.d(e, { bq: function() { return i }, Jz: function() { return a }, AE: function() { return u }, i3: function() { return c }, Kb: function() { return l }, dE: function() { return f } }); var r = n(32203),
                o = n(25861),
                i = function() { var t = (0, o.j)(); return t ? "nftkey.app" + t.location.pathname : "nftkey.app/" },
                a = function() { var t = (0, o.j)(); if (t) { var e = t.location.search.trim(); return "" === e || "?" === e ? t.location.pathname : "" + t.location.pathname + e } return "/" },
                u = function() { var t = (0, o.j)(); if (t) { var e = t.location.hash,
                            n = e.indexOf("?"); if (e.startsWith("#")) return -1 === n ? e.slice(1) : e.slice(1, n) } },
                s = function() { var t = (0, o.j)(); if (t) { var e = t.location.search; return r.parse(e) } return {} };

            function c(t, e) { if (void 0 !== typeof window) { var n, r = e || window.location.href; if (!r || -1 === r.indexOf("?")) return; return r.split("?")[1].split(/(&|#)/).forEach((function(e) { var r = e.split("=");
                        r[0].toLowerCase() === t.toLowerCase() && (n = decodeURIComponent(r[1])) })), n } }

            function l(t, e) { var n = c(t),
                    r = t + "=" + encodeURIComponent(e),
                    i = (0, o.j)(); if (i) { var a = i.location.pathname,
                        u = i.location.search,
                        s = a;
                    s = n ? u.replace(t + "=" + encodeURIComponent(n), r) : "" === u ? "?" + r : u + "&" + r, i.replace("" + a + s) } }

            function f(t) { var e = s(),
                    n = (0, o.j)(); if (n) { delete e[t]; var i = n.location.pathname,
                        a = r.stringify(e),
                        u = "" === a ? "?" : "?" + a;
                    n.replace("" + i + u) } } }, 83878: function(t, e, n) { "use strict";

            function r(t) { if (Array.isArray(t)) return t }
            n.d(e, { Z: function() { return r } }) }, 25267: function(t, e, n) { "use strict";

            function r() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }
            n.d(e, { Z: function() { return r } }) }, 45987: function(t, e, n) { "use strict";
            n.d(e, { Z: function() { return o } }); var r = n(63366);

            function o(t, e) { if (null == t) return {}; var n, o, i = (0, r.Z)(t, e); if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(t); for (o = 0; o < a.length; o++) n = a[o], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]) } return i } }, 63366: function(t, e, n) { "use strict";

            function r(t, e) { if (null == t) return {}; var n, r, o = {},
                    i = Object.keys(t); for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]); return o }
            n.d(e, { Z: function() { return r } }) }, 29439: function(t, e, n) { "use strict";
            n.d(e, { Z: function() { return a } }); var r = n(83878); var o = n(40181),
                i = n(25267);

            function a(t, e) { return (0, r.Z)(t) || function(t, e) { var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (null != n) { var r, o, i = [],
                            a = !0,
                            u = !1; try { for (n = n.call(t); !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0); } catch (s) { u = !0, o = s } finally { try { a || null == n.return || n.return() } finally { if (u) throw o } } return i } }(t, e) || (0, o.Z)(t, e) || (0, i.Z)() } } }
]);
//# sourceMappingURL=commons-ebf92be8b12e01a99bf7.js.map