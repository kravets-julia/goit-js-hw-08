!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var o,i,a,u,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function S(e){return c=e,f=setTimeout(O,t),d?b(e):u}function h(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function O(){var e=p();if(h(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-l);return s?g(n,a-(e-c)):n}(e))}function T(e){return f=void 0,v&&o?b(e):(o=i=void 0,u)}function w(){var e=p(),n=h(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return S(l);if(s)return f=setTimeout(O,t),b(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=j(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},w.flush=function(){return void 0===f?u:T(p())},w}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:o,maxWait:t,trailing:i})};var S,h,O="feedback-form-state",T=document.querySelector(".feedback-form"),w=document.querySelector(".feedback-form input"),x=document.querySelector(".feedback-form textarea");S=localStorage.getItem(O),(h=JSON.parse(S))&&(w.value=(null==h?void 0:h.email)||"",x.value=(null==h?void 0:h.message)||""),T.addEventListener("input",e(t)((function(e){localStorage.setItem(O,JSON.stringify({email:"".concat(w.value),message:"".concat(x.value)}))}),500)),T.addEventListener("submit",(function(e){e.preventDefault();var t={email:"".concat(w.value),message:"".concat(x.value)},n=e.value.elements,o=n.email,r=n.message;if(""===o.value||""===r.value)return alert("Please fill all the fields!");e.currentTarget.reset(),localStorage.removeItem(O),console.log(t)}))}();
//# sourceMappingURL=03-feedback.a7db7dd0.js.map
