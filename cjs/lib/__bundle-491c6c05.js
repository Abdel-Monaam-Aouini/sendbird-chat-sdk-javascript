"use strict";var t="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||"undefined"!=typeof global&&global||{},e="URLSearchParams"in t,r="Symbol"in t&&"iterator"in Symbol,o="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),n="FormData"in t,s="ArrayBuffer"in t;if(s)var i=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],a=ArrayBuffer.isView||function(t){return t&&i.indexOf(Object.prototype.toString.call(t))>-1};function h(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError('Invalid character in header field name: "'+t+'"');return t.toLowerCase()}function u(t){return"string"!=typeof t&&(t=String(t)),t}function f(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return r&&(e[Symbol.iterator]=function(){return e}),e}function d(t){this.map={},t instanceof d?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){if(2!=t.length)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+t.length);this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function c(t){if(!t._noBody)return t.bodyUsed?Promise.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function y(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function l(t){var e=new FileReader,r=y(e);return e.readAsArrayBuffer(t),r}function p(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(t){var r;this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:o&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:n&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:e&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():s&&o&&((r=t)&&DataView.prototype.isPrototypeOf(r))?(this._bodyArrayBuffer=p(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s&&(ArrayBuffer.prototype.isPrototypeOf(t)||a(t))?this._bodyArrayBuffer=p(t):this._bodyText=t=Object.prototype.toString.call(t):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var t=c(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer){var t=c(this);return t||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}if(o)return this.blob().then(l);throw new Error("could not read as ArrayBuffer")},this.text=function(){var t,e,r,o,n,s=c(this);if(s)return s;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=y(e),o=/charset=([A-Za-z0-9_-]+)/.exec(t.type),n=o?o[1]:"utf-8",e.readAsText(t,n),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n&&(this.formData=function(){return this.text().then(g)}),this.json=function(){return this.text().then(JSON.parse)},this}d.prototype.append=function(t,e){t=h(t),e=u(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},d.prototype.delete=function(t){delete this.map[h(t)]},d.prototype.get=function(t){return t=h(t),this.has(t)?this.map[t]:null},d.prototype.has=function(t){return this.map.hasOwnProperty(h(t))},d.prototype.set=function(t,e){this.map[h(t)]=u(e)},d.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},d.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),f(t)},d.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),f(t)},d.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),f(t)},r&&(d.prototype[Symbol.iterator]=d.prototype.entries);var m=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function w(e,r){if(!(this instanceof w))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var o,n,s=(r=r||{}).body;if(e instanceof w){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,r.headers||(this.headers=new d(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,s||null==e._bodyInit||(s=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=r.credentials||this.credentials||"same-origin",!r.headers&&this.headers||(this.headers=new d(r.headers)),this.method=(o=r.method||this.method||"GET",n=o.toUpperCase(),m.indexOf(n)>-1?n:o),this.mode=r.mode||this.mode||null,this.signal=r.signal||this.signal||function(){if("AbortController"in t)return(new AbortController).signal}(),this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&s)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(s),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==r.cache&&"no-cache"!==r.cache)){var i=/([?&])_=[^&]*/;if(i.test(this.url))this.url=this.url.replace(i,"$1_="+(new Date).getTime());else{this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function g(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}})),e}function v(t,e){if(!(this instanceof v))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=void 0===e.statusText?"":""+e.statusText,this.headers=new d(e.headers),this.url=e.url||"",this._initBody(t)}w.prototype.clone=function(){return new w(this,{body:this._bodyInit})},b.call(w.prototype),b.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:200,statusText:""});return t.status=0,t.type="error",t};var A=[301,302,303,307,308];v.redirect=function(t,e){if(-1===A.indexOf(e))throw new RangeError("Invalid status code");return new v(null,{status:e,headers:{location:t}})};var T=t.DOMException;try{new T}catch(t){(T=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),T.prototype.constructor=T}function _(e,r){return new Promise((function(n,i){var a=new w(e,r);if(a.signal&&a.signal.aborted)return i(new T("Aborted","AbortError"));var f=new XMLHttpRequest;function c(){f.abort()}if(f.onload=function(){var t=f.getAllResponseHeaders(),e=f.getResponseHeader("set-cookie");e&&(t=t.replace(e,e.replace(/\r?\n/g,", ")));var r,o,s={status:f.status,statusText:f.statusText,headers:(r=t||"",o=new d,r.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(t){return 0===t.indexOf("\n")?t.substr(1,t.length):t})).forEach((function(t){var e=t.split(":"),r=e.shift().trim();if(r){var n=e.join(":").trim();try{o.append(r,n)}catch(t){console.warn("Response "+t.message)}}})),o)};s.url="responseURL"in f?f.responseURL:s.headers.get("X-Request-URL");var i="response"in f?f.response:f.responseText;setTimeout((function(){n(new v(i,s))}),0)},f.onerror=function(){setTimeout((function(){i(new TypeError("Network request failed"))}),0)},f.ontimeout=function(){setTimeout((function(){i(new TypeError("Network request failed"))}),0)},f.onabort=function(){setTimeout((function(){i(new T("Aborted","AbortError"))}),0)},f.open(a.method,function(e){try{return""===e&&t.location.href?t.location.href:e}catch(t){return e}}(a.url),!0),"include"===a.credentials?f.withCredentials=!0:"omit"===a.credentials&&(f.withCredentials=!1),"responseType"in f&&(o?f.responseType="blob":s&&(f.responseType="arraybuffer")),r&&"object"==typeof r.headers&&!(r.headers instanceof d||t.Headers&&r.headers instanceof t.Headers)){var y=[];Object.getOwnPropertyNames(r.headers).forEach((function(t){y.push(h(t)),f.setRequestHeader(t,u(r.headers[t]))})),a.headers.forEach((function(t,e){-1===y.indexOf(e)&&f.setRequestHeader(e,t)}))}else a.headers.forEach((function(t,e){f.setRequestHeader(e,t)}));a.signal&&(a.signal.addEventListener("abort",c),f.onreadystatechange=function(){4===f.readyState&&a.signal.removeEventListener("abort",c)}),f.send(void 0===a._bodyInit?null:a._bodyInit)}))}_.polyfill=!0,t.fetch||(t.fetch=_,t.Headers=d,t.Request=w,t.Response=v);
