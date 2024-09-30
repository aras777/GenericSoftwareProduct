module.exports = function (callback, IDENTITY) {

    var signature = function (IDENTITY) {

        (function () {
            function n(a) { throw a; } var r = null; function t(a, b) { var c = [], f = (1 << b) - 1, d = a.length * b, e; for (e = 0; e < d; e += b)c[e >>> 5] |= (a.charCodeAt(e / b) & f) << 32 - b - e % 32; return { value: c, binLen: d } } function w(a) { var b = [], c = a.length, f, d; 0 !== c % 2 && n("String of HEX type must be in byte increments"); for (f = 0; f < c; f += 2)d = parseInt(a.substr(f, 2), 16), isNaN(d) && n("String of HEX type contains invalid characters"), b[f >>> 3] |= d << 24 - 4 * (f % 8); return { value: b, binLen: 4 * c } }
            function A(a) { var b = [], c = 0, f, d, e, k, l; -1 === a.search(/^[a-zA-Z0-9=+\/]+$/) && n("Invalid character in base-64 string"); f = a.indexOf("="); a = a.replace(/\=/g, ""); -1 !== f && f < a.length && n("Invalid '=' found in base-64 string"); for (d = 0; d < a.length; d += 4) { l = a.substr(d, 4); for (e = k = 0; e < l.length; e += 1)f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(l[e]), k |= f << 18 - 6 * e; for (e = 0; e < l.length - 1; e += 1)b[c >> 2] |= (k >>> 16 - 8 * e & 255) << 24 - 8 * (c % 4), c += 1 } return { value: b, binLen: 8 * c } }
            function D(a, b) { var c = "", f = 4 * a.length, d, e; for (d = 0; d < f; d += 1)e = a[d >>> 2] >>> 8 * (3 - d % 4), c += "0123456789abcdef".charAt(e >>> 4 & 15) + "0123456789abcdef".charAt(e & 15); return b.outputUpper ? c.toUpperCase() : c }
            function E(a, b) { var c = "", f = 4 * a.length, d, e, k; for (d = 0; d < f; d += 3) { k = (a[d >>> 2] >>> 8 * (3 - d % 4) & 255) << 16 | (a[d + 1 >>> 2] >>> 8 * (3 - (d + 1) % 4) & 255) << 8 | a[d + 2 >>> 2] >>> 8 * (3 - (d + 2) % 4) & 255; for (e = 0; 4 > e; e += 1)c = 8 * d + 6 * e <= 32 * a.length ? c + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(k >>> 6 * (3 - e) & 63) : c + b.b64Pad } return c }
            function F(a) { var b = { outputUpper: !1, b64Pad: "=" }; try { a.hasOwnProperty("outputUpper") && (b.outputUpper = a.outputUpper), a.hasOwnProperty("b64Pad") && (b.b64Pad = a.b64Pad) } catch (c) { } "boolean" !== typeof b.outputUpper && n("Invalid outputUpper formatting option"); "string" !== typeof b.b64Pad && n("Invalid b64Pad formatting option"); return b } function G(a, b) { return a >>> b | a << 32 - b } function H(a, b, c) { return a & b ^ ~a & c } function S(a, b, c) { return a & b ^ a & c ^ b & c } function T(a) { return G(a, 2) ^ G(a, 13) ^ G(a, 22) }
            function U(a) { return G(a, 6) ^ G(a, 11) ^ G(a, 25) } function V(a) { return G(a, 7) ^ G(a, 18) ^ a >>> 3 } function W(a) { return G(a, 17) ^ G(a, 19) ^ a >>> 10 } function X(a, b) { var c = (a & 65535) + (b & 65535); return ((a >>> 16) + (b >>> 16) + (c >>> 16) & 65535) << 16 | c & 65535 } function Y(a, b, c, f) { var d = (a & 65535) + (b & 65535) + (c & 65535) + (f & 65535); return ((a >>> 16) + (b >>> 16) + (c >>> 16) + (f >>> 16) + (d >>> 16) & 65535) << 16 | d & 65535 }
            function Z(a, b, c, f, d) { var e = (a & 65535) + (b & 65535) + (c & 65535) + (f & 65535) + (d & 65535); return ((a >>> 16) + (b >>> 16) + (c >>> 16) + (f >>> 16) + (d >>> 16) + (e >>> 16) & 65535) << 16 | e & 65535 }
            function $(a, b, c) {
                var f, d, e, k, l, j, z, B, I, g, J, u, h, m, s, p, x, y, q, K, L, M, N, O, P, Q, v = [], R, C; "SHA-224" === c || "SHA-256" === c ? (J = 64, m = 16, s = 1, P = Number, p = X, x = Y, y = Z, q = V, K = W, L = T, M = U, O = S, N = H, Q = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993,
                    338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], g = "SHA-224" === c ? [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428] : [1779033703, 3144134277, 1013904242, 2773480762,
                        1359893119, 2600822924, 528734635, 1541459225]) : n("Unexpected error in SHA-2 implementation"); a[b >>> 5] |= 128 << 24 - b % 32; a[(b + 65 >>> 9 << 4) + 15] = b; R = a.length; for (u = 0; u < R; u += m) {
                            b = g[0]; f = g[1]; d = g[2]; e = g[3]; k = g[4]; l = g[5]; j = g[6]; z = g[7]; for (h = 0; h < J; h += 1)v[h] = 16 > h ? new P(a[h * s + u], a[h * s + u + 1]) : x(K(v[h - 2]), v[h - 7], q(v[h - 15]), v[h - 16]), B = y(z, M(k), N(k, l, j), Q[h], v[h]), I = p(L(b), O(b, f, d)), z = j, j = l, l = k, k = p(e, B), e = d, d = f, f = b, b = p(B, I); g[0] = p(b, g[0]); g[1] = p(f, g[1]); g[2] = p(d, g[2]); g[3] = p(e, g[3]); g[4] = p(k, g[4]); g[5] = p(l, g[5]); g[6] =
                                p(j, g[6]); g[7] = p(z, g[7])
                        } "SHA-224" === c ? C = [g[0], g[1], g[2], g[3], g[4], g[5], g[6]] : "SHA-256" === c ? C = g : n("Unexpected error in SHA-2 implementation"); return C
            }
            jsSHA = function (a, b, c) {
                var f = r, d = r, e = 0, k = [0], l = 0, j = r, l = "undefined" !== typeof c ? c : 8; 8 === l || 16 === l || n("charSize must be 8 or 16"); "HEX" === b ? (0 !== a.length % 2 && n("srcString of HEX type must be in byte increments"), j = w(a), e = j.binLen, k = j.value) : "ASCII" === b || "TEXT" === b ? (j = t(a, l), e = j.binLen, k = j.value) : "B64" === b ? (j = A(a), e = j.binLen, k = j.value) : n("inputFormat must be HEX, TEXT, ASCII, or B64"); this.getHash = function (a, b, c) {
                    var g = r, l = k.slice(), j = ""; switch (b) { case "HEX": g = D; break; case "B64": g = E; break; default: n("format must be HEX or B64") }"SHA-224" ===
                        a ? (r === f && (f = $(l, e, a)), j = g(f, F(c))) : "SHA-256" === a ? (r === d && (d = $(l, e, a)), j = g(d, F(c))) : n("Chosen SHA variant is not supported"); return j
                }; this.getHMAC = function (a, b, c, d, f) {
                    var j, h, m, s, p, x = [], y = [], q = r; switch (d) { case "HEX": j = D; break; case "B64": j = E; break; default: n("outputFormat must be HEX or B64") }"SHA-224" === c ? (m = 64, p = 224) : "SHA-256" === c ? (m = 64, p = 256) : n("Chosen SHA variant is not supported"); "HEX" === b ? (q = w(a), s = q.binLen, h = q.value) : "ASCII" === b || "TEXT" === b ? (q = t(a, l), s = q.binLen, h = q.value) : "B64" === b ? (q = A(a),
                        s = q.binLen, h = q.value) : n("inputFormat must be HEX, TEXT, ASCII, or B64"); a = 8 * m; b = m / 4 - 1; m < s / 8 ? (h = $(h, s, c), h[b] &= 4294967040) : m > s / 8 && (h[b] &= 4294967040); for (m = 0; m <= b; m += 1)x[m] = h[m] ^ 909522486, y[m] = h[m] ^ 1549556828; c = $(y.concat($(x.concat(k), a + e, c)), a + p, c); return j(c, F(f))
                }
            };
        })();
        GenerateGuid = function () { return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (n) { var t = 16 * Math.random() | 0; return ("x" === n ? t : t & 3 | 8).toString(16) }) };
        var CryptoJS = CryptoJS || function (v, q) {
            var d = {}, m = d.lib = {}, t = function () { }, u = m.Base = { extend: function (a) { t.prototype = this; var c = new t; a && c.mixIn(a); c.hasOwnProperty("init") || (c.init = function () { c.$super.init.apply(this, arguments) }); c.init.prototype = c; c.$super = this; return c }, create: function () { var a = this.extend(); a.init.apply(a, arguments); return a }, init: function () { }, mixIn: function (a) { for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]); a.hasOwnProperty("toString") && (this.toString = a.toString) }, clone: function () { return this.init.prototype.extend(this) } },
            s = m.WordArray = u.extend({
                init: function (a, c) { a = this.words = a || []; this.sigBytes = c != q ? c : 4 * a.length }, toString: function (a) { return (a || w).stringify(this) }, concat: function (a) { var c = this.words, e = a.words, k = this.sigBytes; a = a.sigBytes; this.clamp(); if (k % 4) for (var l = 0; l < a; l++)c[k + l >>> 2] |= (e[l >>> 2] >>> 24 - 8 * (l % 4) & 255) << 24 - 8 * ((k + l) % 4); else if (65535 < e.length) for (l = 0; l < a; l += 4)c[k + l >>> 2] = e[l >>> 2]; else c.push.apply(c, e); this.sigBytes += a; return this }, clamp: function () {
                    var a = this.words, c = this.sigBytes; a[c >>> 2] &= 4294967295 <<
                        32 - 8 * (c % 4); a.length = v.ceil(c / 4)
                }, clone: function () { var a = u.clone.call(this); a.words = this.words.slice(0); return a }, random: function (a) { for (var c = [], e = 0; e < a; e += 4)c.push(4294967296 * v.random() | 0); return new s.init(c, a) }
            }), x = d.enc = {}, w = x.Hex = {
                stringify: function (a) { var c = a.words; a = a.sigBytes; for (var e = [], k = 0; k < a; k++) { var l = c[k >>> 2] >>> 24 - 8 * (k % 4) & 255; e.push((l >>> 4).toString(16)); e.push((l & 15).toString(16)) } return e.join("") }, parse: function (a) {
                    for (var c = a.length, e = [], k = 0; k < c; k += 2)e[k >>> 3] |= parseInt(a.substr(k,
                        2), 16) << 24 - 4 * (k % 8); return new s.init(e, c / 2)
                }
            }, b = x.Latin1 = { stringify: function (a) { var c = a.words; a = a.sigBytes; for (var e = [], k = 0; k < a; k++)e.push(String.fromCharCode(c[k >>> 2] >>> 24 - 8 * (k % 4) & 255)); return e.join("") }, parse: function (a) { for (var c = a.length, e = [], k = 0; k < c; k++)e[k >>> 2] |= (a.charCodeAt(k) & 255) << 24 - 8 * (k % 4); return new s.init(e, c) } }, y = x.Utf8 = { stringify: function (a) { try { return decodeURIComponent(escape(b.stringify(a))) } catch (c) { throw Error("Malformed UTF-8 data"); } }, parse: function (a) { return b.parse(unescape(encodeURIComponent(a))) } },
            r = m.BufferedBlockAlgorithm = u.extend({
                reset: function () { this._data = new s.init; this._nDataBytes = 0 }, _append: function (a) { "string" == typeof a && (a = y.parse(a)); this._data.concat(a); this._nDataBytes += a.sigBytes }, _process: function (a) { var c = this._data, e = c.words, k = c.sigBytes, l = this.blockSize, b = k / (4 * l), b = a ? v.ceil(b) : v.max((b | 0) - this._minBufferSize, 0); a = b * l; k = v.min(4 * a, k); if (a) { for (var r = 0; r < a; r += l)this._doProcessBlock(e, r); r = e.splice(0, a); c.sigBytes -= k } return new s.init(r, k) }, clone: function () {
                    var a = u.clone.call(this);
                    a._data = this._data.clone(); return a
                }, _minBufferSize: 0
            }); m.Hasher = r.extend({
                cfg: u.extend(), init: function (a) { this.cfg = this.cfg.extend(a); this.reset() }, reset: function () { r.reset.call(this); this._doReset() }, update: function (a) { this._append(a); this._process(); return this }, finalize: function (a) { a && this._append(a); return this._doFinalize() }, blockSize: 16, _createHelper: function (a) { return function (b, e) { return (new a.init(e)).finalize(b) } }, _createHmacHelper: function (a) {
                    return function (b, e) {
                        return (new p.HMAC.init(a,
                            e)).finalize(b)
                    }
                }
            }); var p = d.algo = {}; return d
        }(Math); (function () {
            var v = CryptoJS, q = v.lib.WordArray; v.enc.Base64 = {
                stringify: function (d) { var m = d.words, q = d.sigBytes, u = this._map; d.clamp(); d = []; for (var s = 0; s < q; s += 3)for (var x = (m[s >>> 2] >>> 24 - 8 * (s % 4) & 255) << 16 | (m[s + 1 >>> 2] >>> 24 - 8 * ((s + 1) % 4) & 255) << 8 | m[s + 2 >>> 2] >>> 24 - 8 * ((s + 2) % 4) & 255, w = 0; 4 > w && s + 0.75 * w < q; w++)d.push(u.charAt(x >>> 6 * (3 - w) & 63)); if (m = u.charAt(64)) for (; d.length % 4;)d.push(m); return d.join("") }, parse: function (d) {
                    var m = d.length, t = this._map, u = t.charAt(64); u && (u = d.indexOf(u), -1 != u && (m = u)); for (var u = [], s = 0, x = 0; x <
                        m; x++)if (x % 4) { var w = t.indexOf(d.charAt(x - 1)) << 2 * (x % 4), b = t.indexOf(d.charAt(x)) >>> 6 - 2 * (x % 4); u[s >>> 2] |= (w | b) << 24 - 8 * (s % 4); s++ } return q.create(u, s)
                }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            }
        })();
        (function (v) {
            function q(b, p, a, c, e, k, l) { b = b + (p & a | ~p & c) + e + l; return (b << k | b >>> 32 - k) + p } function d(b, p, a, c, e, k, l) { b = b + (p & c | a & ~c) + e + l; return (b << k | b >>> 32 - k) + p } function m(b, p, a, c, e, k, l) { b = b + (p ^ a ^ c) + e + l; return (b << k | b >>> 32 - k) + p } function t(b, p, a, c, e, k, l) { b = b + (a ^ (p | ~c)) + e + l; return (b << k | b >>> 32 - k) + p } for (var u = CryptoJS, s = u.lib, x = s.WordArray, w = s.Hasher, s = u.algo, b = [], y = 0; 64 > y; y++)b[y] = 4294967296 * v.abs(v.sin(y + 1)) | 0; s = s.MD5 = w.extend({
                _doReset: function () { this._hash = new x.init([1732584193, 4023233417, 2562383102, 271733878]) },
                _doProcessBlock: function (r, p) {
                    for (var a = 0; 16 > a; a++) { var c = p + a, e = r[c]; r[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360 } var a = this._hash.words, c = r[p + 0], e = r[p + 1], k = r[p + 2], l = r[p + 3], A = r[p + 4], s = r[p + 5], u = r[p + 6], x = r[p + 7], w = r[p + 8], B = r[p + 9], C = r[p + 10], D = r[p + 11], v = r[p + 12], E = r[p + 13], F = r[p + 14], y = r[p + 15], f = a[0], n = a[1], g = a[2], h = a[3], f = q(f, n, g, h, c, 7, b[0]), h = q(h, f, n, g, e, 12, b[1]), g = q(g, h, f, n, k, 17, b[2]), n = q(n, g, h, f, l, 22, b[3]), f = q(f, n, g, h, A, 7, b[4]), h = q(h, f, n, g, s, 12, b[5]), g = q(g, h, f, n, u, 17, b[6]), n = q(n, g, h, f, x, 22, b[7]),
                        f = q(f, n, g, h, w, 7, b[8]), h = q(h, f, n, g, B, 12, b[9]), g = q(g, h, f, n, C, 17, b[10]), n = q(n, g, h, f, D, 22, b[11]), f = q(f, n, g, h, v, 7, b[12]), h = q(h, f, n, g, E, 12, b[13]), g = q(g, h, f, n, F, 17, b[14]), n = q(n, g, h, f, y, 22, b[15]), f = d(f, n, g, h, e, 5, b[16]), h = d(h, f, n, g, u, 9, b[17]), g = d(g, h, f, n, D, 14, b[18]), n = d(n, g, h, f, c, 20, b[19]), f = d(f, n, g, h, s, 5, b[20]), h = d(h, f, n, g, C, 9, b[21]), g = d(g, h, f, n, y, 14, b[22]), n = d(n, g, h, f, A, 20, b[23]), f = d(f, n, g, h, B, 5, b[24]), h = d(h, f, n, g, F, 9, b[25]), g = d(g, h, f, n, l, 14, b[26]), n = d(n, g, h, f, w, 20, b[27]), f = d(f, n, g, h, E, 5, b[28]), h = d(h, f,
                            n, g, k, 9, b[29]), g = d(g, h, f, n, x, 14, b[30]), n = d(n, g, h, f, v, 20, b[31]), f = m(f, n, g, h, s, 4, b[32]), h = m(h, f, n, g, w, 11, b[33]), g = m(g, h, f, n, D, 16, b[34]), n = m(n, g, h, f, F, 23, b[35]), f = m(f, n, g, h, e, 4, b[36]), h = m(h, f, n, g, A, 11, b[37]), g = m(g, h, f, n, x, 16, b[38]), n = m(n, g, h, f, C, 23, b[39]), f = m(f, n, g, h, E, 4, b[40]), h = m(h, f, n, g, c, 11, b[41]), g = m(g, h, f, n, l, 16, b[42]), n = m(n, g, h, f, u, 23, b[43]), f = m(f, n, g, h, B, 4, b[44]), h = m(h, f, n, g, v, 11, b[45]), g = m(g, h, f, n, y, 16, b[46]), n = m(n, g, h, f, k, 23, b[47]), f = t(f, n, g, h, c, 6, b[48]), h = t(h, f, n, g, x, 10, b[49]), g = t(g, h, f, n,
                                F, 15, b[50]), n = t(n, g, h, f, s, 21, b[51]), f = t(f, n, g, h, v, 6, b[52]), h = t(h, f, n, g, l, 10, b[53]), g = t(g, h, f, n, C, 15, b[54]), n = t(n, g, h, f, e, 21, b[55]), f = t(f, n, g, h, w, 6, b[56]), h = t(h, f, n, g, y, 10, b[57]), g = t(g, h, f, n, u, 15, b[58]), n = t(n, g, h, f, E, 21, b[59]), f = t(f, n, g, h, A, 6, b[60]), h = t(h, f, n, g, D, 10, b[61]), g = t(g, h, f, n, k, 15, b[62]), n = t(n, g, h, f, B, 21, b[63]); a[0] = a[0] + f | 0; a[1] = a[1] + n | 0; a[2] = a[2] + g | 0; a[3] = a[3] + h | 0
                }, _doFinalize: function () {
                    var b = this._data, p = b.words, a = 8 * this._nDataBytes, c = 8 * b.sigBytes; p[c >>> 5] |= 128 << 24 - c % 32; var e = v.floor(a /
                        4294967296); p[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360; p[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360; b.sigBytes = 4 * (p.length + 1); this._process(); b = this._hash; p = b.words; for (a = 0; 4 > a; a++)c = p[a], p[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360; return b
                }, clone: function () { var b = w.clone.call(this); b._hash = this._hash.clone(); return b }
            }); u.MD5 = w._createHelper(s); u.HmacMD5 = w._createHmacHelper(s)
        })(Math);
        (function () {
            var v = CryptoJS, q = v.lib, d = q.Base, m = q.WordArray, q = v.algo, t = q.EvpKDF = d.extend({ cfg: d.extend({ keySize: 4, hasher: q.MD5, iterations: 1 }), init: function (d) { this.cfg = this.cfg.extend(d) }, compute: function (d, s) { for (var q = this.cfg, t = q.hasher.create(), b = m.create(), v = b.words, r = q.keySize, q = q.iterations; v.length < r;) { p && t.update(p); var p = t.update(d).finalize(s); t.reset(); for (var a = 1; a < q; a++)p = t.finalize(p), t.reset(); b.concat(p) } b.sigBytes = 4 * r; return b } }); v.EvpKDF = function (d, m, q) {
                return t.create(q).compute(d,
                    m)
            }
        })(); CryptoJS.lib.Cipher || function (v) {
            var q = CryptoJS, d = q.lib, m = d.Base, t = d.WordArray, u = d.BufferedBlockAlgorithm, s = q.enc.Base64, x = q.algo.EvpKDF, w = d.Cipher = u.extend({
                cfg: m.extend(), createEncryptor: function (e, a) { return this.create(this._ENC_XFORM_MODE, e, a) }, createDecryptor: function (e, a) { return this.create(this._DEC_XFORM_MODE, e, a) }, init: function (e, a, b) { this.cfg = this.cfg.extend(b); this._xformMode = e; this._key = a; this.reset() }, reset: function () { u.reset.call(this); this._doReset() }, process: function (e) { this._append(e); return this._process() },
                finalize: function (e) { e && this._append(e); return this._doFinalize() }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 1, _DEC_XFORM_MODE: 2, _createHelper: function (e) { return { encrypt: function (b, l, d) { return ("string" == typeof l ? c : a).encrypt(e, b, l, d) }, decrypt: function (b, l, d) { return ("string" == typeof l ? c : a).decrypt(e, b, l, d) } } }
            }); d.StreamCipher = w.extend({ _doFinalize: function () { return this._process(!0) }, blockSize: 1 }); var b = q.mode = {}, y = function (e, a, b) {
                var c = this._iv; c ? this._iv = v : c = this._prevBlock; for (var d = 0; d < b; d++)e[a + d] ^=
                    c[d]
            }, r = (d.BlockCipherMode = m.extend({ createEncryptor: function (e, a) { return this.Encryptor.create(e, a) }, createDecryptor: function (e, a) { return this.Decryptor.create(e, a) }, init: function (e, a) { this._cipher = e; this._iv = a } })).extend(); r.Encryptor = r.extend({ processBlock: function (e, a) { var b = this._cipher, c = b.blockSize; y.call(this, e, a, c); b.encryptBlock(e, a); this._prevBlock = e.slice(a, a + c) } }); r.Decryptor = r.extend({
                processBlock: function (e, a) {
                    var b = this._cipher, c = b.blockSize, d = e.slice(a, a + c); b.decryptBlock(e, a); y.call(this,
                        e, a, c); this._prevBlock = d
                }
            }); b = b.CBC = r; r = (q.pad = {}).Pkcs7 = { pad: function (a, b) { for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, m = [], p = 0; p < c; p += 4)m.push(d); c = t.create(m, c); a.concat(c) }, unpad: function (a) { a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255 } }; d.BlockCipher = w.extend({
                cfg: w.cfg.extend({ mode: b, padding: r }), reset: function () {
                    w.reset.call(this); var a = this.cfg, b = a.iv, a = a.mode; if (this._xformMode == this._ENC_XFORM_MODE) var c = a.createEncryptor; else c = a.createDecryptor, this._minBufferSize = 1; this._mode = c.call(a,
                        this, b && b.words)
                }, _doProcessBlock: function (a, b) { this._mode.processBlock(a, b) }, _doFinalize: function () { var a = this.cfg.padding; if (this._xformMode == this._ENC_XFORM_MODE) { a.pad(this._data, this.blockSize); var b = this._process(!0) } else b = this._process(!0), a.unpad(b); return b }, blockSize: 4
            }); var p = d.CipherParams = m.extend({ init: function (a) { this.mixIn(a) }, toString: function (a) { return (a || this.formatter).stringify(this) } }), b = (q.format = {}).OpenSSL = {
                stringify: function (a) {
                    var b = a.ciphertext; a = a.salt; return (a ? t.create([1398893684,
                        1701076831]).concat(a).concat(b) : b).toString(s)
                }, parse: function (a) { a = s.parse(a); var b = a.words; if (1398893684 == b[0] && 1701076831 == b[1]) { var c = t.create(b.slice(2, 4)); b.splice(0, 4); a.sigBytes -= 16 } return p.create({ ciphertext: a, salt: c }) }
            }, a = d.SerializableCipher = m.extend({
                cfg: m.extend({ format: b }), encrypt: function (a, b, c, d) { d = this.cfg.extend(d); var m = a.createEncryptor(c, d); b = m.finalize(b); m = m.cfg; return p.create({ ciphertext: b, key: c, iv: m.iv, algorithm: a, mode: m.mode, padding: m.padding, blockSize: a.blockSize, formatter: d.format }) },
                decrypt: function (a, b, c, d) { d = this.cfg.extend(d); b = this._parse(b, d.format); return a.createDecryptor(c, d).finalize(b.ciphertext) }, _parse: function (a, b) { return "string" == typeof a ? b.parse(a, this) : a }
            }), q = (q.kdf = {}).OpenSSL = { execute: function (a, b, c, d) { d || (d = t.random(8)); a = x.create({ keySize: b + c }).compute(a, d); c = t.create(a.words.slice(b), 4 * c); a.sigBytes = 4 * b; return p.create({ key: a, iv: c, salt: d }) } }, c = d.PasswordBasedCipher = a.extend({
                cfg: a.cfg.extend({ kdf: q }), encrypt: function (b, c, d, m) {
                    m = this.cfg.extend(m); d = m.kdf.execute(d,
                        b.keySize, b.ivSize); m.iv = d.iv; b = a.encrypt.call(this, b, c, d.key, m); b.mixIn(d); return b
                }, decrypt: function (b, c, d, m) { m = this.cfg.extend(m); c = this._parse(c, m.format); d = m.kdf.execute(d, b.keySize, b.ivSize, c.salt); m.iv = d.iv; return a.decrypt.call(this, b, c, d.key, m) }
            })
        }();
        (function () {
            for (var v = CryptoJS, q = v.lib.BlockCipher, d = v.algo, m = [], t = [], u = [], s = [], x = [], w = [], b = [], y = [], r = [], p = [], a = [], c = 0; 256 > c; c++)a[c] = 128 > c ? c << 1 : c << 1 ^ 283; for (var e = 0, k = 0, c = 0; 256 > c; c++) { var l = k ^ k << 1 ^ k << 2 ^ k << 3 ^ k << 4, l = l >>> 8 ^ l & 255 ^ 99; m[e] = l; t[l] = e; var A = a[e], G = a[A], H = a[G], z = 257 * a[l] ^ 16843008 * l; u[e] = z << 24 | z >>> 8; s[e] = z << 16 | z >>> 16; x[e] = z << 8 | z >>> 24; w[e] = z; z = 16843009 * H ^ 65537 * G ^ 257 * A ^ 16843008 * e; b[l] = z << 24 | z >>> 8; y[l] = z << 16 | z >>> 16; r[l] = z << 8 | z >>> 24; p[l] = z; e ? (e = A ^ a[a[a[H ^ A]]], k ^= a[a[k]]) : e = k = 1 } var I = [0, 1, 2, 4, 8,
                16, 32, 64, 128, 27, 54], d = d.AES = q.extend({
                    _doReset: function () {
                        for (var a = this._key, c = a.words, d = a.sigBytes / 4, a = 4 * ((this._nRounds = d + 6) + 1), e = this._keySchedule = [], k = 0; k < a; k++)if (k < d) e[k] = c[k]; else { var l = e[k - 1]; k % d ? 6 < d && 4 == k % d && (l = m[l >>> 24] << 24 | m[l >>> 16 & 255] << 16 | m[l >>> 8 & 255] << 8 | m[l & 255]) : (l = l << 8 | l >>> 24, l = m[l >>> 24] << 24 | m[l >>> 16 & 255] << 16 | m[l >>> 8 & 255] << 8 | m[l & 255], l ^= I[k / d | 0] << 24); e[k] = e[k - d] ^ l } c = this._invKeySchedule = []; for (d = 0; d < a; d++)k = a - d, l = d % 4 ? e[k] : e[k - 4], c[d] = 4 > d || 4 >= k ? l : b[m[l >>> 24]] ^ y[m[l >>> 16 & 255]] ^ r[m[l >>>
                            8 & 255]] ^ p[m[l & 255]]
                    }, encryptBlock: function (a, b) { this._doCryptBlock(a, b, this._keySchedule, u, s, x, w, m) }, decryptBlock: function (a, c) { var d = a[c + 1]; a[c + 1] = a[c + 3]; a[c + 3] = d; this._doCryptBlock(a, c, this._invKeySchedule, b, y, r, p, t); d = a[c + 1]; a[c + 1] = a[c + 3]; a[c + 3] = d }, _doCryptBlock: function (a, b, c, d, e, k, m, f) {
                        for (var n = this._nRounds, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], l = a[b + 2] ^ c[2], p = a[b + 3] ^ c[3], q = 4, s = 1; s < n; s++)var r = d[g >>> 24] ^ e[h >>> 16 & 255] ^ k[l >>> 8 & 255] ^ m[p & 255] ^ c[q++], t = d[h >>> 24] ^ e[l >>> 16 & 255] ^ k[p >>> 8 & 255] ^ m[g & 255] ^ c[q++], u =
                            d[l >>> 24] ^ e[p >>> 16 & 255] ^ k[g >>> 8 & 255] ^ m[h & 255] ^ c[q++], p = d[p >>> 24] ^ e[g >>> 16 & 255] ^ k[h >>> 8 & 255] ^ m[l & 255] ^ c[q++], g = r, h = t, l = u; r = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[l >>> 8 & 255] << 8 | f[p & 255]) ^ c[q++]; t = (f[h >>> 24] << 24 | f[l >>> 16 & 255] << 16 | f[p >>> 8 & 255] << 8 | f[g & 255]) ^ c[q++]; u = (f[l >>> 24] << 24 | f[p >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[q++]; p = (f[p >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[l & 255]) ^ c[q++]; a[b] = r; a[b + 1] = t; a[b + 2] = u; a[b + 3] = p
                    }, keySize: 8
                }); v.AES = q._createHelper(d)
        })();
        var thingId = IDENTITY;
        var encrypted = CryptoJS.AES.encrypt(new jsSHA(thingId, "ASCII").getHash("SHA-256", "HEX").substring(0, 40), thingId); var genukey = encrypted.key.toString(CryptoJS.enc.Base64);
        return new jsSHA(new jsSHA(thingId, "ASCII").getHash("SHA-256", "HEX"), "ASCII").getHash("SHA-256", "HEX") + "*" + new jsSHA(thingId, "ASCII").getHash("SHA-256", "HEX").substring(0, 40) + "*" + genukey;
    };

    callback(null, signature(IDENTITY));
}