(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();const xo=()=>{};var fr={};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ts=function(i){const e=[];let n=0;for(let r=0;r<i.length;r++){let o=i.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++r)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},jo=function(i){const e=[];let n=0,r=0;for(;n<i.length;){const o=i[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=i[n++];e[r++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=i[n++],l=i[n++],m=i[n++],b=((o&7)<<18|(c&63)<<12|(l&63)<<6|m&63)-65536;e[r++]=String.fromCharCode(55296+(b>>10)),e[r++]=String.fromCharCode(56320+(b&1023))}else{const c=i[n++],l=i[n++];e[r++]=String.fromCharCode((o&15)<<12|(c&63)<<6|l&63)}}return e.join("")},ns={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<i.length;o+=3){const c=i[o],l=o+1<i.length,m=l?i[o+1]:0,b=o+2<i.length,_=b?i[o+2]:0,S=c>>2,A=(c&3)<<4|m>>4;let k=(m&15)<<2|_>>6,V=_&63;b||(V=64,l||(k=64)),r.push(n[S],n[A],n[k],n[V])}return r.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(ts(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):jo(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<i.length;){const c=n[i.charAt(o++)],l=o<i.length?n[i.charAt(o)]:0;++o;const m=o<i.length?n[i.charAt(o)]:64;++o;const b=o<i.length?n[i.charAt(o)]:64;if(++o,c==null||l==null||m==null||b==null)throw new Fo;const _=c<<2|l>>4;if(r.push(_),m!==64){const S=l<<4&240|m>>2;if(r.push(S),b!==64){const A=m<<6&192|b;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Fo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ho=function(i){const e=ts(i);return ns.encodeByteArray(e,!0)},en=function(i){return Ho(i).replace(/\./g,"")},is=function(i){try{return ns.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Bo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Vo=()=>Bo().__FIREBASE_DEFAULTS__,$o=()=>{if(typeof process>"u"||typeof fr>"u")return;const i=fr.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},zo=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&is(i[1]);return e&&JSON.parse(e)},ti=()=>{try{return xo()||Vo()||$o()||zo()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},rs=i=>{var e,n;return(n=(e=ti())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},Wo=i=>{const e=rs(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ss=()=>{var i;return(i=ti())===null||i===void 0?void 0:i.config},os=i=>{var e;return(e=ti())===null||e===void 0?void 0:e[`_${i}`]};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ko{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Go(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",o=i.iat||0,c=i.sub||i.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},i);return[en(JSON.stringify(n)),en(JSON.stringify(l)),""].join(".")}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function K(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(K())}function Jo(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Xo(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Yo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qo(){const i=K();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Zo(){try{return typeof indexedDB=="object"}catch{return!1}}function ea(){return new Promise((i,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),i(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var c;e(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){e(n)}})}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ta="FirebaseError";class me extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ta,Object.setPrototypeOf(this,me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,St.prototype.create)}}class St{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},o=`${this.service}/${e}`,c=this.errors[e],l=c?na(c,r):"Error",m=`${this.serviceName}: ${l} (${o}).`;return new me(o,m,r)}}function na(i,e){return i.replace(ia,(n,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const ia=/\{\$([^}]+)}/g;function ra(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Me(i,e){if(i===e)return!0;const n=Object.keys(i),r=Object.keys(e);for(const o of n){if(!r.includes(o))return!1;const c=i[o],l=e[o];if(pr(c)&&pr(l)){if(!Me(c,l))return!1}else if(c!==l)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function pr(i){return i!==null&&typeof i=="object"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function At(i){const e=[];for(const[n,r]of Object.entries(i))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function sa(i,e){const n=new oa(i,e);return n.subscribe.bind(n)}class oa{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let o;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");aa(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:r},o.next===void 0&&(o.next=jn),o.error===void 0&&(o.error=jn),o.complete===void 0&&(o.complete=jn);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aa(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function jn(){}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ye(i){return i&&i._delegate?i._delegate:i}/**
* @license
* Copyright 2025 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ni(i){return i.endsWith(".cloudworkstations.dev")}async function as(i){return(await fetch(i,{credentials:"include"})).ok}class Ue{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const De="[DEFAULT]";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ca{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ko;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(la(e))try{this.getOrInitializeService({instanceIdentifier:De})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:o});r.resolve(c)}catch{}}}}clearInstance(e=De){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=De){return this.instances.has(e)}getOptions(e=De){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[c,l]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(c);r===m&&l.resolve(o)}return o}onInit(e,n){var r;const o=this.normalizeInstanceIdentifier(n),c=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;c.add(e),this.onInitCallbacks.set(o,c);const l=this.instances.get(o);return l&&e(l,o),()=>{c.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ha(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=De){return this.component?this.component.multipleInstances?e:De:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ha(i){return i===De?void 0:i}function la(i){return i.instantiationMode==="EAGER"}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ua{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ca(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(O||(O={}));const da={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},fa=O.INFO,pa={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},ga=(i,e,...n)=>{if(e<i.logLevel)return;const r=new Date().toISOString(),o=pa[e];if(o)console[o](`[${r}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ii{constructor(e){this.name=e,this._logLevel=fa,this._logHandler=ga,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?da[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}const ma=(i,e)=>e.some(n=>i instanceof n);let gr,mr;function ya(){return gr||(gr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function va(){return mr||(mr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cs=new WeakMap,Kn=new WeakMap,hs=new WeakMap,Fn=new WeakMap,ri=new WeakMap;function wa(i){const e=new Promise((n,r)=>{const o=()=>{i.removeEventListener("success",c),i.removeEventListener("error",l)},c=()=>{n(Ae(i.result)),o()},l=()=>{r(i.error),o()};i.addEventListener("success",c),i.addEventListener("error",l)});return e.then(n=>{n instanceof IDBCursor&&cs.set(n,i)}).catch(()=>{}),ri.set(e,i),e}function ba(i){if(Kn.has(i))return;const e=new Promise((n,r)=>{const o=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",l),i.removeEventListener("abort",l)},c=()=>{n(),o()},l=()=>{r(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",c),i.addEventListener("error",l),i.addEventListener("abort",l)});Kn.set(i,e)}let Gn={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return Kn.get(i);if(e==="objectStoreNames")return i.objectStoreNames||hs.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ae(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Ia(i){Gn=i(Gn)}function _a(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=i.call(Hn(this),e,...n);return hs.set(r,e.sort?e.sort():[e]),Ae(r)}:va().includes(i)?function(...e){return i.apply(Hn(this),e),Ae(cs.get(this))}:function(...e){return Ae(i.apply(Hn(this),e))}}function Ta(i){return typeof i=="function"?_a(i):(i instanceof IDBTransaction&&ba(i),ma(i,ya())?new Proxy(i,Gn):i)}function Ae(i){if(i instanceof IDBRequest)return wa(i);if(Fn.has(i))return Fn.get(i);const e=Ta(i);return e!==i&&(Fn.set(i,e),ri.set(e,i)),e}const Hn=i=>ri.get(i);function Ea(i,e,{blocked:n,upgrade:r,blocking:o,terminated:c}={}){const l=indexedDB.open(i,e),m=Ae(l);return r&&l.addEventListener("upgradeneeded",b=>{r(Ae(l.result),b.oldVersion,b.newVersion,Ae(l.transaction),b)}),n&&l.addEventListener("blocked",b=>n(b.oldVersion,b.newVersion,b)),m.then(b=>{c&&b.addEventListener("close",()=>c()),o&&b.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const Sa=["get","getKey","getAll","getAllKeys","count"],Aa=["put","add","delete","clear"],Bn=new Map;function yr(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Bn.get(e))return Bn.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=Aa.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Sa.includes(n)))return;const c=async function(l,...m){const b=this.transaction(l,o?"readwrite":"readonly");let _=b.store;return r&&(_=_.index(m.shift())),(await Promise.all([_[n](...m),o&&b.done]))[0]};return Bn.set(e,c),c}Ia(i=>({...i,get:(e,n,r)=>yr(e,n)||i.get(e,n,r),has:(e,n)=>!!yr(e,n)||i.has(e,n)}));/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ka{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Ca(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function Ca(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qn="@firebase/app",vr="0.12.1";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const fe=new ii("@firebase/app"),Pa="@firebase/app-compat",Oa="@firebase/analytics-compat",Ra="@firebase/analytics",Na="@firebase/app-check-compat",La="@firebase/app-check",Da="@firebase/auth",Ma="@firebase/auth-compat",Ua="@firebase/database",xa="@firebase/data-connect",ja="@firebase/database-compat",Fa="@firebase/functions",Ha="@firebase/functions-compat",Ba="@firebase/installations",Va="@firebase/installations-compat",$a="@firebase/messaging",za="@firebase/messaging-compat",Wa="@firebase/performance",Ka="@firebase/performance-compat",Ga="@firebase/remote-config",qa="@firebase/remote-config-compat",Ja="@firebase/storage",Xa="@firebase/storage-compat",Ya="@firebase/firestore",Qa="@firebase/vertexai",Za="@firebase/firestore-compat",ec="firebase",tc="11.7.1";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Jn="[DEFAULT]",nc={[qn]:"fire-core",[Pa]:"fire-core-compat",[Ra]:"fire-analytics",[Oa]:"fire-analytics-compat",[La]:"fire-app-check",[Na]:"fire-app-check-compat",[Da]:"fire-auth",[Ma]:"fire-auth-compat",[Ua]:"fire-rtdb",[xa]:"fire-data-connect",[ja]:"fire-rtdb-compat",[Fa]:"fire-fn",[Ha]:"fire-fn-compat",[Ba]:"fire-iid",[Va]:"fire-iid-compat",[$a]:"fire-fcm",[za]:"fire-fcm-compat",[Wa]:"fire-perf",[Ka]:"fire-perf-compat",[Ga]:"fire-rc",[qa]:"fire-rc-compat",[Ja]:"fire-gcs",[Xa]:"fire-gcs-compat",[Ya]:"fire-fst",[Za]:"fire-fst-compat",[Qa]:"fire-vertex","fire-js":"fire-js",[ec]:"fire-js-all"};/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const tn=new Map,ic=new Map,Xn=new Map;function wr(i,e){try{i.container.addComponent(e)}catch(n){fe.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function Je(i){const e=i.name;if(Xn.has(e))return fe.debug(`There were multiple attempts to register component ${e}.`),!1;Xn.set(e,i);for(const n of tn.values())wr(n,i);for(const n of ic.values())wr(n,i);return!0}function si(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function te(i){return i==null?!1:i.settings!==void 0}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const rc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ke=new St("app","Firebase",rc);/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class sc{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ue("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ke.create("app-deleted",{appName:this._name})}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Qe=tc;function ls(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Jn,automaticDataCollectionEnabled:!1},e),o=r.name;if(typeof o!="string"||!o)throw ke.create("bad-app-name",{appName:String(o)});if(n||(n=ss()),!n)throw ke.create("no-options");const c=tn.get(o);if(c){if(Me(n,c.options)&&Me(r,c.config))return c;throw ke.create("duplicate-app",{appName:o})}const l=new ua(o);for(const b of Xn.values())l.addComponent(b);const m=new sc(n,r,l);return tn.set(o,m),m}function us(i=Jn){const e=tn.get(i);if(!e&&i===Jn&&ss())return ls();if(!e)throw ke.create("no-app",{appName:i});return e}function Ce(i,e,n){var r;let o=(r=nc[i])!==null&&r!==void 0?r:i;n&&(o+=`-${n}`);const c=o.match(/\s|\//),l=e.match(/\s|\//);if(c||l){const m=[`Unable to register library "${o}" with version "${e}":`];c&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&l&&m.push("and"),l&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fe.warn(m.join(" "));return}Je(new Ue(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const oc="firebase-heartbeat-database",ac=1,wt="firebase-heartbeat-store";let Vn=null;function ds(){return Vn||(Vn=Ea(oc,ac,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(wt)}catch(n){console.warn(n)}}}}).catch(i=>{throw ke.create("idb-open",{originalErrorMessage:i.message})})),Vn}async function cc(i){try{const e=(await ds()).transaction(wt),n=await e.objectStore(wt).get(fs(i));return await e.done,n}catch(e){if(e instanceof me)fe.warn(e.message);else{const n=ke.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fe.warn(n.message)}}}async function br(i,e){try{const n=(await ds()).transaction(wt,"readwrite");await n.objectStore(wt).put(e,fs(i)),await n.done}catch(n){if(n instanceof me)fe.warn(n.message);else{const r=ke.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fe.warn(r.message)}}}function fs(i){return`${i.name}!${i.options.appId}`}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const hc=1024,lc=30;class uc{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fc(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ir();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(c=>c.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats.length>lc){const c=pc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){fe.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ir(),{heartbeatsToSend:r,unsentEntries:o}=dc(this._heartbeatsCache.heartbeats),c=en(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return fe.warn(n),""}}}function Ir(){return new Date().toISOString().substring(0,10)}function dc(i,e=hc){const n=[];let r=i.slice();for(const o of i){const c=n.find(l=>l.agent===o.agent);if(c){if(c.dates.push(o.date),_r(n)>e){c.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),_r(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zo()?ea().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await cc(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return br(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return br(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function _r(i){return en(JSON.stringify({version:2,heartbeats:i})).length}function pc(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let r=1;r<i.length;r++)i[r].date<n&&(n=i[r].date,e=r);return e}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function gc(i){Je(new Ue("platform-logger",e=>new ka(e),"PRIVATE")),Je(new Ue("heartbeat",e=>new uc(e),"PRIVATE")),Ce(qn,vr,i),Ce(qn,vr,"esm2017"),Ce("fire-js","")}gc("");var mc="firebase",yc="11.7.1";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/Ce(mc,yc,"app");function oi(i,e){var n={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&e.indexOf(r)<0&&(n[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(i);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(i,r[o])&&(n[r[o]]=i[r[o]]);return n}function ps(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vc=ps,gs=new St("auth","Firebase",ps());/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const nn=new ii("@firebase/auth");function wc(i,...e){nn.logLevel<=O.WARN&&nn.warn(`Auth (${Qe}): ${i}`,...e)}function Xt(i,...e){nn.logLevel<=O.ERROR&&nn.error(`Auth (${Qe}): ${i}`,...e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function pe(i,...e){throw ai(i,...e)}function re(i,...e){return ai(i,...e)}function ms(i,e,n){const r=Object.assign(Object.assign({},vc()),{[e]:n});return new St("auth","Firebase",r).create(e,{appName:i.name})}function Pe(i){return ms(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ai(i,...e){if(typeof i!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(n,...r)}return gs.create(i,...e)}function E(i,e,...n){if(!i)throw ai(e,...n)}function ue(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Xt(e),new Error(e)}function ge(i,e){i||ue(e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Yn(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function bc(){return Tr()==="http:"||Tr()==="https:"}function Tr(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ic(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bc()||Xo()||"connection"in navigator)?navigator.onLine:!0}function _c(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class kt{constructor(e,n){this.shortDelay=e,this.longDelay=n,ge(n>e,"Short delay should be less than long delay!"),this.isMobile=qo()||Yo()}get(){return Ic()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ci(i,e){ge(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ys{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ue("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ue("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ue("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Tc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ec=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Sc=new kt(3e4,6e4);function Ct(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Fe(i,e,n,r,o={}){return vs(i,o,async()=>{let c={},l={};r&&(e==="GET"?l=r:c={body:JSON.stringify(r)});const m=At(Object.assign({key:i.config.apiKey},l)).slice(1),b=await i._getAdditionalHeaders();b["Content-Type"]="application/json",i.languageCode&&(b["X-Firebase-Locale"]=i.languageCode);const _=Object.assign({method:e,headers:b},c);return Jo()||(_.referrerPolicy="no-referrer"),i.emulatorConfig&&ni(i.emulatorConfig.host)&&(_.credentials="include"),ys.fetch()(await bs(i,i.config.apiHost,n,m),_)})}async function vs(i,e,n){i._canInitEmulator=!1;const r=Object.assign(Object.assign({},Tc),e);try{const o=new kc(i),c=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const l=await c.json();if("needConfirmation"in l)throw qt(i,"account-exists-with-different-credential",l);if(c.ok&&!("errorMessage"in l))return l;{const m=c.ok?l.errorMessage:l.error.message,[b,_]=m.split(" : ");if(b==="FEDERATED_USER_ID_ALREADY_LINKED")throw qt(i,"credential-already-in-use",l);if(b==="EMAIL_EXISTS")throw qt(i,"email-already-in-use",l);if(b==="USER_DISABLED")throw qt(i,"user-disabled",l);const S=r[b]||b.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw ms(i,S,_);pe(i,S)}}catch(o){if(o instanceof me)throw o;pe(i,"network-request-failed",{message:String(o)})}}async function ws(i,e,n,r,o={}){const c=await Fe(i,e,n,r,o);return"mfaPendingCredential"in c&&pe(i,"multi-factor-auth-required",{_serverResponse:c}),c}async function bs(i,e,n,r){const o=`${e}${n}?${r}`,c=i,l=c.config.emulator?ci(i.config,o):`${i.config.apiScheme}://${o}`;return Ec.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(l).toString():l}function Ac(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kc{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(re(this.auth,"network-request-failed")),Sc.get())})}}function qt(i,e,n){const r={appName:i.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=re(i,e,r);return o.customData._tokenResponse=n,o}function Er(i){return i!==void 0&&i.enterprise!==void 0}class Cc{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Ac(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Pc(i,e){return Fe(i,"GET","/v2/recaptchaConfig",Ct(i,e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Oc(i,e){return Fe(i,"POST","/v1/accounts:delete",e)}async function rn(i,e){return Fe(i,"POST","/v1/accounts:lookup",e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function mt(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Rc(i,e=!1){const n=Ye(i),r=await n.getIdToken(e),o=hi(r);E(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,l=c==null?void 0:c.sign_in_provider;return{claims:o,token:r,authTime:mt($n(o.auth_time)),issuedAtTime:mt($n(o.iat)),expirationTime:mt($n(o.exp)),signInProvider:l||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function $n(i){return Number(i)*1e3}function hi(i){const[e,n,r]=i.split(".");if(e===void 0||n===void 0||r===void 0)return Xt("JWT malformed, contained fewer than 3 sections"),null;try{const o=is(n);return o?JSON.parse(o):(Xt("Failed to decode base64 JWT payload"),null)}catch(o){return Xt("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Sr(i){const e=hi(i);return E(e,"internal-error"),E(typeof e.exp<"u","internal-error"),E(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function bt(i,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof me&&Nc(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function Nc({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Lc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Qn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mt(this.lastLoginAt),this.creationTime=mt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function sn(i){var e;const n=i.auth,r=await i.getIdToken(),o=await bt(i,rn(n,{idToken:r}));E(o==null?void 0:o.users.length,n,"internal-error");const c=o.users[0];i._notifyReloadListener(c);const l=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?Is(c.providerUserInfo):[],m=Mc(i.providerData,l),b=i.isAnonymous,_=!(i.email&&c.passwordHash)&&!(m!=null&&m.length),S=b?_:!1,A={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:m,metadata:new Qn(c.createdAt,c.lastLoginAt),isAnonymous:S};Object.assign(i,A)}async function Dc(i){const e=Ye(i);await sn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Mc(i,e){return[...i.filter(n=>!e.some(r=>r.providerId===n.providerId)),...e]}function Is(i){return i.map(e=>{var{providerId:n}=e,r=oi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Uc(i,e){const n=await vs(i,{},async()=>{const r=At({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=i.config,l=await bs(i,o,"/v1/token",`key=${c}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",ys.fetch()(l,{method:"POST",headers:m,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xc(i,e){return Fe(i,"POST","/v2/accounts:revokeToken",Ct(i,e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ke{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E(typeof e.idToken<"u","internal-error"),E(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){E(e.length!==0,"internal-error");const n=Sr(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(E(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:o,expiresIn:c}=await Uc(e,n);this.updateTokensAndExpiration(r,o,Number(c))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:o,expirationTime:c}=n,l=new Ke;return r&&(E(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),o&&(E(typeof o=="string","internal-error",{appName:e}),l.accessToken=o),c&&(E(typeof c=="number","internal-error",{appName:e}),l.expirationTime=c),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ke,this.toJSON())}_performRefresh(){return ue("not implemented")}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ie(i,e){E(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class ne{constructor(e){var{uid:n,auth:r,stsTokenManager:o}=e,c=oi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Lc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Qn(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const n=await bt(this,this.stsTokenManager.getToken(this.auth,e));return E(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Rc(this,e)}reload(){return Dc(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ne(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await sn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(te(this.auth.app))return Promise.reject(Pe(this.auth));const e=await this.getIdToken();return await bt(this,Oc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,o,c,l,m,b,_,S;const A=(r=n.displayName)!==null&&r!==void 0?r:void 0,k=(o=n.email)!==null&&o!==void 0?o:void 0,V=(c=n.phoneNumber)!==null&&c!==void 0?c:void 0,P=(l=n.photoURL)!==null&&l!==void 0?l:void 0,U=(m=n.tenantId)!==null&&m!==void 0?m:void 0,D=(b=n._redirectEventId)!==null&&b!==void 0?b:void 0,ae=(_=n.createdAt)!==null&&_!==void 0?_:void 0,Y=(S=n.lastLoginAt)!==null&&S!==void 0?S:void 0,{uid:j,emailVerified:Z,isAnonymous:Oe,providerData:G,stsTokenManager:y}=n;E(j&&y,e,"internal-error");const u=Ke.fromJSON(this.name,y);E(typeof j=="string",e,"internal-error"),Ie(A,e.name),Ie(k,e.name),E(typeof Z=="boolean",e,"internal-error"),E(typeof Oe=="boolean",e,"internal-error"),Ie(V,e.name),Ie(P,e.name),Ie(U,e.name),Ie(D,e.name),Ie(ae,e.name),Ie(Y,e.name);const f=new ne({uid:j,auth:e,email:k,emailVerified:Z,displayName:A,isAnonymous:Oe,photoURL:P,phoneNumber:V,tenantId:U,stsTokenManager:u,createdAt:ae,lastLoginAt:Y});return G&&Array.isArray(G)&&(f.providerData=G.map(p=>Object.assign({},p))),D&&(f._redirectEventId=D),f}static async _fromIdTokenResponse(e,n,r=!1){const o=new Ke;o.updateFromServerResponse(n);const c=new ne({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await sn(c),c}static async _fromGetAccountInfoResponse(e,n,r){const o=n.users[0];E(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?Is(o.providerUserInfo):[],l=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),m=new Ke;m.updateFromIdToken(r);const b=new ne({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:l}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Qn(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(b,_),b}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ar=new Map;function de(i){ge(i instanceof Function,"Expected a class definition");let e=Ar.get(i);return e?(ge(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Ar.set(i,e),e)}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class _s{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_s.type="NONE";const kr=_s;/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Yt(i,e,n){return`firebase:${i}:${e}:${n}`}class Ge{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:o,name:c}=this.auth;this.fullUserKey=Yt(this.userKey,o.apiKey,c),this.fullPersistenceKey=Yt("persistence",o.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await rn(this.auth,{idToken:e}).catch(()=>{});return n?ne._fromGetAccountInfoResponse(this.auth,n,e):null}return ne._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ge(de(kr),e,r);const o=(await Promise.all(n.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let c=o[0]||de(kr);const l=Yt(r,e.config.apiKey,e.name);let m=null;for(const _ of n)try{const S=await _._get(l);if(S){let A;if(typeof S=="string"){const k=await rn(e,{idToken:S}).catch(()=>{});if(!k)break;A=await ne._fromGetAccountInfoResponse(e,k,S)}else A=ne._fromJSON(e,S);_!==c&&(m=A),c=_;break}}catch{}const b=o.filter(_=>_._shouldAllowMigration);return!c._shouldAllowMigration||!b.length?new Ge(c,e,r):(c=b[0],m&&await c._set(l,m.toJSON()),await Promise.all(n.map(async _=>{if(_!==c)try{await _._remove(l)}catch{}})),new Ge(c,e,r))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Cr(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(As(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ts(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cs(e))return"Blackberry";if(Ps(e))return"Webos";if(Es(e))return"Safari";if((e.includes("chrome/")||Ss(e))&&!e.includes("edge/"))return"Chrome";if(ks(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ts(i=K()){return/firefox\//i.test(i)}function Es(i=K()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ss(i=K()){return/crios\//i.test(i)}function As(i=K()){return/iemobile/i.test(i)}function ks(i=K()){return/android/i.test(i)}function Cs(i=K()){return/blackberry/i.test(i)}function Ps(i=K()){return/webos/i.test(i)}function li(i=K()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function jc(i=K()){var e;return li(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Fc(){return Qo()&&document.documentMode===10}function Os(i=K()){return li(i)||ks(i)||Ps(i)||Cs(i)||/windows phone/i.test(i)||As(i)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Rs(i,e=[]){let n;switch(i){case"Browser":n=Cr(K());break;case"Worker":n=`${Cr(K())}-${i}`;break;default:n=i}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qe}/${r}`}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Hc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=c=>new Promise((l,m)=>{try{const b=e(c);l(b)}catch(b){m(b)}});r.onAbort=n,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Bc(i,e={}){return Fe(i,"GET","/v2/passwordPolicy",Ct(i,e))}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Vc=6;class $c{constructor(e){var n,r,o,c;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:Vc,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,o,c,l,m;const b={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,b),this.validatePasswordCharacterOptions(e,b),b.isValid&&(b.isValid=(n=b.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),b.isValid&&(b.isValid=(r=b.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),b.isValid&&(b.isValid=(o=b.containsLowercaseLetter)!==null&&o!==void 0?o:!0),b.isValid&&(b.isValid=(c=b.containsUppercaseLetter)!==null&&c!==void 0?c:!0),b.isValid&&(b.isValid=(l=b.containsNumericCharacter)!==null&&l!==void 0?l:!0),b.isValid&&(b.isValid=(m=b.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),b}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class zc{constructor(e,n,r,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pr(this),this.idTokenSubscription=new Pr(this),this.beforeStateQueue=new Hc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gs,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=de(n)),this._initializationPromise=this.queue(async()=>{var r,o,c;if(!this._deleted&&(this.persistenceManager=await Ge.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await rn(this,{idToken:e}),r=await ne._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(te(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(m,m))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,m=o==null?void 0:o._redirectEventId,b=await this.tryRedirectSignIn(e);(!l||l===m)&&b!=null&&b.user&&(o=b.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(l){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await sn(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_c()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(te(this.app))return Promise.reject(Pe(this));const n=e?Ye(e):null;return n&&E(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return te(this.app)?Promise.reject(Pe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return te(this.app)?Promise.reject(Pe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(de(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Bc(this),n=new $c(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new St("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await xc(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&de(e)||this._popupRedirectResolver;E(n,this,"argument-error"),this.redirectPersistenceManager=await Ge.create(this,[de(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,o){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let l=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(E(m,this,"internal-error"),m.then(()=>{l||c(this.currentUser)}),typeof n=="function"){const b=e.addObserver(n,r,o);return()=>{l=!0,b()}}else{const b=e.addObserver(n);return()=>{l=!0,b()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;if(te(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&wc(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ze(i){return Ye(i)}class Pr{constructor(e){this.auth=e,this.observer=null,this.addObserver=sa(n=>this.observer=n)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let ln={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Wc(i){ln=i}function Ns(i){return ln.loadJS(i)}function Kc(){return ln.recaptchaEnterpriseScript}function Gc(){return ln.gapiScript}function qc(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class Jc{constructor(){this.enterprise=new Xc}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Xc{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Yc="recaptcha-enterprise",Ls="NO_RECAPTCHA";class Qc{constructor(e){this.type=Yc,this.auth=Ze(e)}async verify(e="verify",n=!1){async function r(c){if(!n){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(l,m)=>{Pc(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(b=>{if(b.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new Cc(b);return c.tenantId==null?c._agentRecaptchaConfig=_:c._tenantRecaptchaConfigs[c.tenantId]=_,l(_.siteKey)}}).catch(b=>{m(b)})})}function o(c,l,m){const b=window.grecaptcha;Er(b)?b.enterprise.ready(()=>{b.enterprise.execute(c,{action:e}).then(_=>{l(_)}).catch(()=>{l(Ls)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Jc().execute("siteKey",{action:"verify"}):new Promise((c,l)=>{r(this.auth).then(m=>{if(!n&&Er(window.grecaptcha))o(m,c,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let b=Kc();b.length!==0&&(b+=m),Ns(b).then(()=>{o(m,c,l)}).catch(_=>{l(_)})}}).catch(m=>{l(m)})})}}async function Or(i,e,n,r=!1,o=!1){const c=new Qc(i);let l;if(o)l=Ls;else try{l=await c.verify(n)}catch{l=await c.verify(n,!0)}const m=Object.assign({},e);return r?Object.assign(m,{captchaResp:l}):Object.assign(m,{captchaResponse:l}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Zc(i,e,n,r,o){var c;if(!((c=i._getRecaptchaConfig())===null||c===void 0)&&c.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Or(i,e,n,n==="getOobCode");return r(i,l)}else return r(i,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await Or(i,e,n,n==="getOobCode");return r(i,m)}else return Promise.reject(l)})}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function eh(i,e){const n=si(i,"auth");if(n.isInitialized()){const r=n.getImmediate(),o=n.getOptions();if(Me(o,e??{}))return r;pe(r,"already-initialized")}return n.initialize({options:e})}function th(i,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(de);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function nh(i,e,n){const r=Ze(i);E(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,c=Ds(e),{host:l,port:m}=ih(e),b=m===null?"":`:${m}`,_={url:`${c}//${l}${b}/`},S=Object.freeze({host:l,port:m,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){E(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),E(Me(_,r.config.emulator)&&Me(S,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=_,r.emulatorConfig=S,r.settings.appVerificationDisabledForTesting=!0,rh(),ni(l)&&as(`${c}//${l}${b}`)}function Ds(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function ih(i){const e=Ds(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const c=o[1];return{host:c,port:Rr(r.substr(c.length+1))}}else{const[c,l]=r.split(":");return{host:c,port:Rr(l)}}}function Rr(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function rh(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ms{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ue("not implemented")}_getIdTokenResponse(e){return ue("not implemented")}_linkToIdToken(e,n){return ue("not implemented")}_getReauthenticationResolver(e){return ue("not implemented")}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function qe(i,e){return ws(i,"POST","/v1/accounts:signInWithIdp",Ct(i,e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const sh="http://localhost";class xe extends Ms{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=n,c=oi(n,["providerId","signInMethod"]);if(!r||!o)return null;const l=new xe(r,o);return l.idToken=c.idToken||void 0,l.accessToken=c.accessToken||void 0,l.secret=c.secret,l.nonce=c.nonce,l.pendingToken=c.pendingToken||null,l}_getIdTokenResponse(e){const n=this.buildRequest();return qe(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qe(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qe(e,n)}buildRequest(){const e={requestUri:sh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=At(n)}return e}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Us{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Pt extends Us{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class _e extends Pt{constructor(){super("facebook.com")}static credential(e){return xe._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _e.credentialFromTaggedObject(e)}static credentialFromError(e){return _e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _e.credential(e.oauthAccessToken)}catch{return null}}}_e.FACEBOOK_SIGN_IN_METHOD="facebook.com";_e.PROVIDER_ID="facebook.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Te extends Pt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xe._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Te.credential(n,r)}catch{return null}}}Te.GOOGLE_SIGN_IN_METHOD="google.com";Te.PROVIDER_ID="google.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ee extends Pt{constructor(){super("github.com")}static credential(e){return xe._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ee.credentialFromTaggedObject(e)}static credentialFromError(e){return Ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ee.credential(e.oauthAccessToken)}catch{return null}}}Ee.GITHUB_SIGN_IN_METHOD="github.com";Ee.PROVIDER_ID="github.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Se extends Pt{constructor(){super("twitter.com")}static credential(e,n){return xe._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Se.credential(n,r)}catch{return null}}}Se.TWITTER_SIGN_IN_METHOD="twitter.com";Se.PROVIDER_ID="twitter.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function oh(i,e){return ws(i,"POST","/v1/accounts:signUp",Ct(i,e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class je{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,o=!1){const c=await ne._fromIdTokenResponse(e,r,o),l=Nr(r);return new je({user:c,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const o=Nr(r);return new je({user:e,providerId:o,_tokenResponse:r,operationType:n})}}function Nr(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class on extends me{constructor(e,n,r,o){var c;super(n.code,n.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,on.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,o){return new on(e,n,r,o)}}function xs(i,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?on._fromErrorAndOperation(i,o,e,r):o})}async function ah(i,e,n=!1){const r=await bt(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return je._forOperation(i,"link",r)}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function ch(i,e,n=!1){const{auth:r}=i;if(te(r.app))return Promise.reject(Pe(r));const o="reauthenticate";try{const c=await bt(i,xs(r,o,e,i),n);E(c.idToken,r,"internal-error");const l=hi(c.idToken);E(l,r,"internal-error");const{sub:m}=l;return E(i.uid===m,r,"user-mismatch"),je._forOperation(i,o,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&pe(r,"user-mismatch"),c}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function hh(i,e,n=!1){if(te(i.app))return Promise.reject(Pe(i));const r="signIn",o=await xs(i,r,e),c=await je._fromIdTokenResponse(i,r,o);return n||await i._updateCurrentUser(c.user),c}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function lh(i){const e=Ze(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function uh(i,e,n){if(te(i.app))return Promise.reject(Pe(i));const r=Ze(i),o=await Zc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",oh).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&lh(i),l}),c=await je._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function dh(i,e,n,r){return Ye(i).onIdTokenChanged(e,n,r)}function fh(i,e,n){return Ye(i).beforeAuthStateChanged(e,n)}const an="__sak";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class js{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(an,"1"),this.storage.removeItem(an),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ph=1e3,gh=10;class Fs extends js{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Os(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),o=this.localCache[n];r!==o&&e(n,o,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((l,m,b)=>{this.notifyListeners(l,b)});return}const r=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},c=this.storage.getItem(r);Fc()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,gh):o()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ph)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fs.type="LOCAL";const mh=Fs;/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Hs extends js{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hs.type="SESSION";const Bs=Hs;/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function yh(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class un{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const r=new un(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:o,data:c}=n.data,l=this.handlersMap[o];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const m=Array.from(l).map(async _=>_(n.origin,c)),b=await yh(m);n.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:b})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}un.receivers=[];/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ui(i="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return i+n}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class vh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,l;return new Promise((m,b)=>{const _=ui("",20);o.port1.start();const S=setTimeout(()=>{b(new Error("unsupported_event"))},r);l={messageChannel:o,onMessage(A){const k=A;if(k.data.eventId===_)switch(k.data.status){case"ack":clearTimeout(S),c=setTimeout(()=>{b(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),m(k.data.response);break;default:clearTimeout(S),clearTimeout(c),b(new Error("invalid_response"));break}}},this.handlers.add(l),o.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:_,data:n},[o.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function se(){return window}function wh(i){se().location.href=i}/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Vs(){return typeof se().WorkerGlobalScope<"u"&&typeof se().importScripts=="function"}async function bh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ih(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function _h(){return Vs()?self:null}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const $s="firebaseLocalStorageDb",Th=1,cn="firebaseLocalStorage",zs="fbase_key";class Ot{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dn(i,e){return i.transaction([cn],e?"readwrite":"readonly").objectStore(cn)}function Eh(){const i=indexedDB.deleteDatabase($s);return new Ot(i).toPromise()}function Zn(){const i=indexedDB.open($s,Th);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(cn,{keyPath:zs})}catch(o){n(o)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(cn)?e(r):(r.close(),await Eh(),e(await Zn()))})})}async function Lr(i,e,n){const r=dn(i,!0).put({[zs]:e,value:n});return new Ot(r).toPromise()}async function Sh(i,e){const n=dn(i,!1).get(e),r=await new Ot(n).toPromise();return r===void 0?null:r.value}function Dr(i,e){const n=dn(i,!0).delete(e);return new Ot(n).toPromise()}const Ah=800,kh=3;class Ws{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zn(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>kh)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=un._getInstance(_h()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bh(),!this.activeServiceWorker)return;this.sender=new vh(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ih()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zn();return await Lr(e,an,"1"),await Dr(e,an),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Lr(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Sh(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dr(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const c=dn(o,!1).getAll();return new Ot(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:c}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ah)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ws.type="LOCAL";const Ch=Ws;new kt(3e4,6e4);/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ph(i,e){return e?de(e):(E(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class di extends Ms{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qe(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qe(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qe(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Oh(i){return hh(i.auth,new di(i),i.bypassAuthState)}function Rh(i){const{auth:e,user:n}=i;return E(n,e,"internal-error"),ch(n,new di(i),i.bypassAuthState)}async function Nh(i){const{auth:e,user:n}=i;return E(n,e,"internal-error"),ah(n,new di(i),i.bypassAuthState)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ks{constructor(e,n,r,o,c=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:o,tenantId:c,error:l,type:m}=e;if(l){this.reject(l);return}const b={auth:this.auth,requestUri:n,sessionId:r,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(b))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Oh;case"linkViaPopup":case"linkViaRedirect":return Nh;case"reauthViaPopup":case"reauthViaRedirect":return Rh;default:pe(this.auth,"internal-error")}}resolve(e){ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Lh=new kt(2e3,1e4);class We extends Ks{constructor(e,n,r,o,c){super(e,n,o,c),this.provider=r,this.authWindow=null,this.pollId=null,We.currentPopupAction&&We.currentPopupAction.cancel(),We.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){ge(this.filter.length===1,"Popup operations only handle one event");const e=ui();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(re(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(re(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,We.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(re(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Lh.get())};e()}}We.currentPopupAction=null;/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Dh="pendingRedirect",Qt=new Map;class Mh extends Ks{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Qt.get(this.auth._key());if(!e){try{const n=await Uh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(n){e=()=>Promise.reject(n)}Qt.set(this.auth._key(),e)}return this.bypassAuthState||Qt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Uh(i,e){const n=Fh(e),r=jh(i);if(!await r._isAvailable())return!1;const o=await r._get(n)==="true";return await r._remove(n),o}function xh(i,e){Qt.set(i._key(),e)}function jh(i){return de(i._redirectPersistence)}function Fh(i){return Yt(Dh,i.config.apiKey,i.name)}async function Hh(i,e,n=!1){if(te(i.app))return Promise.reject(Pe(i));const r=Ze(i),o=Ph(r,e),c=await new Mh(r,o,n).execute();return c&&!n&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Bh=10*60*1e3;class Vh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$h(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Gs(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(re(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bh&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mr(e))}saveEventToCache(e){this.cachedEventUids.add(Mr(e)),this.lastProcessedEventTime=Date.now()}}function Mr(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Gs({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $h(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gs(i);default:return!1}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function zh(i,e={}){return Fe(i,"GET","/v1/projects",e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Wh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kh=/^https?/;async function Gh(i){if(i.config.emulator)return;const{authorizedDomains:e}=await zh(i);for(const n of e)try{if(qh(n))return}catch{}pe(i,"unauthorized-domain")}function qh(i){const e=Yn(),{protocol:n,hostname:r}=new URL(e);if(i.startsWith("chrome-extension://")){const c=new URL(i);return c.hostname===""&&r===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===r}if(!Kh.test(n))return!1;if(Wh.test(i))return r===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Jh=new kt(3e4,6e4);function Ur(){const i=se().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function Xh(i){return new Promise((e,n)=>{var r,o,c;function l(){Ur(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ur(),n(re(i,"network-request-failed"))},timeout:Jh.get()})}if(!((o=(r=se().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((c=se().gapi)===null||c===void 0)&&c.load)l();else{const m=qc("iframefcb");return se()[m]=()=>{gapi.load?l():n(re(i,"network-request-failed"))},Ns(`${Gc()}?onload=${m}`).catch(b=>n(b))}}).catch(e=>{throw Zt=null,e})}let Zt=null;function Yh(i){return Zt=Zt||Xh(i),Zt}/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Qh=new kt(5e3,15e3),Zh="__/auth/iframe",el="emulator/auth/iframe",tl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function il(i){const e=i.config;E(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?ci(e,el):`https://${i.config.authDomain}/${Zh}`,r={apiKey:e.apiKey,appName:i.name,v:Qe},o=nl.get(i.config.apiHost);o&&(r.eid=o);const c=i._getFrameworks();return c.length&&(r.fw=c.join(",")),`${n}?${At(r).slice(1)}`}async function rl(i){const e=await Yh(i),n=se().gapi;return E(n,i,"internal-error"),e.open({where:document.body,url:il(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tl,dontclear:!0},r=>new Promise(async(o,c)=>{await r.restyle({setHideOnLeave:!1});const l=re(i,"network-request-failed"),m=se().setTimeout(()=>{c(l)},Qh.get());function b(){se().clearTimeout(m),o(r)}r.ping(b).then(b,()=>{c(l)})}))}/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const sl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ol=500,al=600,cl="_blank",hl="http://localhost";class xr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ll(i,e,n,r=ol,o=al){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let m="";const b=Object.assign(Object.assign({},sl),{width:r.toString(),height:o.toString(),top:c,left:l}),_=K().toLowerCase();n&&(m=Ss(_)?cl:n),Ts(_)&&(e=e||hl,b.scrollbars="yes");const S=Object.entries(b).reduce((k,[V,P])=>`${k}${V}=${P},`,"");if(jc(_)&&m!=="_self")return ul(e||"",m),new xr(null);const A=window.open(e||"",m,S);E(A,i,"popup-blocked");try{A.focus()}catch{}return new xr(A)}function ul(i,e){const n=document.createElement("a");n.href=i,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const dl="__/auth/handler",fl="emulator/auth/handler",pl=encodeURIComponent("fac");async function jr(i,e,n,r,o,c){E(i.config.authDomain,i,"auth-domain-config-required"),E(i.config.apiKey,i,"invalid-api-key");const l={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:r,v:Qe,eventId:o};if(e instanceof Us){e.setDefaultLanguage(i.languageCode),l.providerId=e.providerId||"",ra(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[S,A]of Object.entries({}))l[S]=A}if(e instanceof Pt){const S=e.getScopes().filter(A=>A!=="");S.length>0&&(l.scopes=S.join(","))}i.tenantId&&(l.tid=i.tenantId);const m=l;for(const S of Object.keys(m))m[S]===void 0&&delete m[S];const b=await i._getAppCheckToken(),_=b?`#${pl}=${encodeURIComponent(b)}`:"";return`${gl(i)}?${At(m).slice(1)}${_}`}function gl({config:i}){return i.emulator?ci(i,fl):`https://${i.authDomain}/${dl}`}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const zn="webStorageSupport";class ml{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bs,this._completeRedirectFn=Hh,this._overrideRedirectResult=xh}async _openPopup(e,n,r,o){var c;ge((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await jr(e,n,r,Yn(),o);return ll(e,l,ui())}async _openRedirect(e,n,r,o){await this._originValidation(e);const c=await jr(e,n,r,Yn(),o);return wh(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:c}=this.eventManagers[n];return o?Promise.resolve(o):(ge(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await rl(e),r=new Vh(e);return n.register("authEvent",o=>(E(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zn,{type:zn},r=>{var o;const c=(o=r==null?void 0:r[0])===null||o===void 0?void 0:o[zn];c!==void 0&&n(!!c),pe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Gh(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Os()||Es()||li()}}const yl=ml;var Fr="@firebase/auth",Hr="1.10.2";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class vl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function wl(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bl(i){Je(new Ue("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:l,authDomain:m}=r.options;E(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const b={apiKey:l,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rs(i)},_=new zc(r,o,c,b);return th(_,n),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Je(new Ue("auth-internal",e=>{const n=Ze(e.getProvider("auth").getImmediate());return(r=>new vl(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ce(Fr,Hr,wl(i)),Ce(Fr,Hr,"esm2017")}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Il=5*60,_l=os("authIdTokenMaxAge")||Il;let Br=null;const Tl=i=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_l)return;const o=n==null?void 0:n.token;Br!==o&&(Br=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function El(i=us()){const e=si(i,"auth");if(e.isInitialized())return e.getImmediate();const n=eh(i,{popupRedirectResolver:yl,persistence:[Ch,mh,Bs]}),r=os("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const l=Tl(c.toString());fh(n,l,()=>l(n.currentUser)),dh(n,m=>l(m))}}const o=rs("auth");return o&&nh(n,`http://${o}`),n}function Sl(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}Wc({loadJS(i){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",i),r.onload=e,r.onerror=o=>{const c=re("internal-error");c.customData=o,n(c)},r.type="text/javascript",r.charset="UTF-8",Sl().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bl("Browser");var Vr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qs;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,u){function f(){}f.prototype=u.prototype,y.D=u.prototype,y.prototype=new f,y.prototype.constructor=y,y.C=function(p,g,w){for(var d=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)d[ce-2]=arguments[ce];return u.prototype[g].apply(p,d)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(y,u,f){f||(f=0);var p=Array(16);if(typeof u=="string")for(var g=0;16>g;++g)p[g]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(g=0;16>g;++g)p[g]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=y.g[0],f=y.g[1],g=y.g[2];var w=y.g[3],d=u+(w^f&(g^w))+p[0]+3614090360&4294967295;u=f+(d<<7&4294967295|d>>>25),d=w+(g^u&(f^g))+p[1]+3905402710&4294967295,w=u+(d<<12&4294967295|d>>>20),d=g+(f^w&(u^f))+p[2]+606105819&4294967295,g=w+(d<<17&4294967295|d>>>15),d=f+(u^g&(w^u))+p[3]+3250441966&4294967295,f=g+(d<<22&4294967295|d>>>10),d=u+(w^f&(g^w))+p[4]+4118548399&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(g^u&(f^g))+p[5]+1200080426&4294967295,w=u+(d<<12&4294967295|d>>>20),d=g+(f^w&(u^f))+p[6]+2821735955&4294967295,g=w+(d<<17&4294967295|d>>>15),d=f+(u^g&(w^u))+p[7]+4249261313&4294967295,f=g+(d<<22&4294967295|d>>>10),d=u+(w^f&(g^w))+p[8]+1770035416&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(g^u&(f^g))+p[9]+2336552879&4294967295,w=u+(d<<12&4294967295|d>>>20),d=g+(f^w&(u^f))+p[10]+4294925233&4294967295,g=w+(d<<17&4294967295|d>>>15),d=f+(u^g&(w^u))+p[11]+2304563134&4294967295,f=g+(d<<22&4294967295|d>>>10),d=u+(w^f&(g^w))+p[12]+1804603682&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(g^u&(f^g))+p[13]+4254626195&4294967295,w=u+(d<<12&4294967295|d>>>20),d=g+(f^w&(u^f))+p[14]+2792965006&4294967295,g=w+(d<<17&4294967295|d>>>15),d=f+(u^g&(w^u))+p[15]+1236535329&4294967295,f=g+(d<<22&4294967295|d>>>10),d=u+(g^w&(f^g))+p[1]+4129170786&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^g&(u^f))+p[6]+3225465664&4294967295,w=u+(d<<9&4294967295|d>>>23),d=g+(u^f&(w^u))+p[11]+643717713&4294967295,g=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(g^w))+p[0]+3921069994&4294967295,f=g+(d<<20&4294967295|d>>>12),d=u+(g^w&(f^g))+p[5]+3593408605&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^g&(u^f))+p[10]+38016083&4294967295,w=u+(d<<9&4294967295|d>>>23),d=g+(u^f&(w^u))+p[15]+3634488961&4294967295,g=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(g^w))+p[4]+3889429448&4294967295,f=g+(d<<20&4294967295|d>>>12),d=u+(g^w&(f^g))+p[9]+568446438&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^g&(u^f))+p[14]+3275163606&4294967295,w=u+(d<<9&4294967295|d>>>23),d=g+(u^f&(w^u))+p[3]+4107603335&4294967295,g=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(g^w))+p[8]+1163531501&4294967295,f=g+(d<<20&4294967295|d>>>12),d=u+(g^w&(f^g))+p[13]+2850285829&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^g&(u^f))+p[2]+4243563512&4294967295,w=u+(d<<9&4294967295|d>>>23),d=g+(u^f&(w^u))+p[7]+1735328473&4294967295,g=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(g^w))+p[12]+2368359562&4294967295,f=g+(d<<20&4294967295|d>>>12),d=u+(f^g^w)+p[5]+4294588738&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^g)+p[8]+2272392833&4294967295,w=u+(d<<11&4294967295|d>>>21),d=g+(w^u^f)+p[11]+1839030562&4294967295,g=w+(d<<16&4294967295|d>>>16),d=f+(g^w^u)+p[14]+4259657740&4294967295,f=g+(d<<23&4294967295|d>>>9),d=u+(f^g^w)+p[1]+2763975236&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^g)+p[4]+1272893353&4294967295,w=u+(d<<11&4294967295|d>>>21),d=g+(w^u^f)+p[7]+4139469664&4294967295,g=w+(d<<16&4294967295|d>>>16),d=f+(g^w^u)+p[10]+3200236656&4294967295,f=g+(d<<23&4294967295|d>>>9),d=u+(f^g^w)+p[13]+681279174&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^g)+p[0]+3936430074&4294967295,w=u+(d<<11&4294967295|d>>>21),d=g+(w^u^f)+p[3]+3572445317&4294967295,g=w+(d<<16&4294967295|d>>>16),d=f+(g^w^u)+p[6]+76029189&4294967295,f=g+(d<<23&4294967295|d>>>9),d=u+(f^g^w)+p[9]+3654602809&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^g)+p[12]+3873151461&4294967295,w=u+(d<<11&4294967295|d>>>21),d=g+(w^u^f)+p[15]+530742520&4294967295,g=w+(d<<16&4294967295|d>>>16),d=f+(g^w^u)+p[2]+3299628645&4294967295,f=g+(d<<23&4294967295|d>>>9),d=u+(g^(f|~w))+p[0]+4096336452&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~g))+p[7]+1126891415&4294967295,w=u+(d<<10&4294967295|d>>>22),d=g+(u^(w|~f))+p[14]+2878612391&4294967295,g=w+(d<<15&4294967295|d>>>17),d=f+(w^(g|~u))+p[5]+4237533241&4294967295,f=g+(d<<21&4294967295|d>>>11),d=u+(g^(f|~w))+p[12]+1700485571&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~g))+p[3]+2399980690&4294967295,w=u+(d<<10&4294967295|d>>>22),d=g+(u^(w|~f))+p[10]+4293915773&4294967295,g=w+(d<<15&4294967295|d>>>17),d=f+(w^(g|~u))+p[1]+2240044497&4294967295,f=g+(d<<21&4294967295|d>>>11),d=u+(g^(f|~w))+p[8]+1873313359&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~g))+p[15]+4264355552&4294967295,w=u+(d<<10&4294967295|d>>>22),d=g+(u^(w|~f))+p[6]+2734768916&4294967295,g=w+(d<<15&4294967295|d>>>17),d=f+(w^(g|~u))+p[13]+1309151649&4294967295,f=g+(d<<21&4294967295|d>>>11),d=u+(g^(f|~w))+p[4]+4149444226&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~g))+p[11]+3174756917&4294967295,w=u+(d<<10&4294967295|d>>>22),d=g+(u^(w|~f))+p[2]+718787259&4294967295,g=w+(d<<15&4294967295|d>>>17),d=f+(w^(g|~u))+p[9]+3951481745&4294967295,y.g[0]=y.g[0]+u&4294967295,y.g[1]=y.g[1]+(g+(d<<21&4294967295|d>>>11))&4294967295,y.g[2]=y.g[2]+g&4294967295,y.g[3]=y.g[3]+w&4294967295}r.prototype.u=function(y,u){u===void 0&&(u=y.length);for(var f=u-this.blockSize,p=this.B,g=this.h,w=0;w<u;){if(g==0)for(;w<=f;)o(this,y,w),w+=this.blockSize;if(typeof y=="string"){for(;w<u;)if(p[g++]=y.charCodeAt(w++),g==this.blockSize){o(this,p),g=0;break}}else for(;w<u;)if(p[g++]=y[w++],g==this.blockSize){o(this,p),g=0;break}}this.h=g,this.o+=u},r.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var u=1;u<y.length-8;++u)y[u]=0;var f=8*this.o;for(u=y.length-8;u<y.length;++u)y[u]=f&255,f/=256;for(this.u(y),y=Array(16),u=f=0;4>u;++u)for(var p=0;32>p;p+=8)y[f++]=this.g[u]>>>p&255;return y};function c(y,u){var f=m;return Object.prototype.hasOwnProperty.call(f,y)?f[y]:f[y]=u(y)}function l(y,u){this.h=u;for(var f=[],p=!0,g=y.length-1;0<=g;g--){var w=y[g]|0;p&&w==u||(f[g]=w,p=!1)}this.g=f}var m={};function b(y){return-128<=y&&128>y?c(y,function(u){return new l([u|0],0>u?-1:0)}):new l([y|0],0>y?-1:0)}function _(y){if(isNaN(y)||!isFinite(y))return A;if(0>y)return D(_(-y));for(var u=[],f=1,p=0;y>=f;p++)u[p]=y/f|0,f*=4294967296;return new l(u,0)}function S(y,u){if(y.length==0)throw Error("number format error: empty string");if(u=u||10,2>u||36<u)throw Error("radix out of range: "+u);if(y.charAt(0)=="-")return D(S(y.substring(1),u));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=_(Math.pow(u,8)),p=A,g=0;g<y.length;g+=8){var w=Math.min(8,y.length-g),d=parseInt(y.substring(g,g+w),u);8>w?(w=_(Math.pow(u,w)),p=p.j(w).add(_(d))):(p=p.j(f),p=p.add(_(d)))}return p}var A=b(0),k=b(1),V=b(16777216);i=l.prototype,i.m=function(){if(U(this))return-D(this).m();for(var y=0,u=1,f=0;f<this.g.length;f++){var p=this.i(f);y+=(0<=p?p:4294967296+p)*u,u*=4294967296}return y},i.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(P(this))return"0";if(U(this))return"-"+D(this).toString(y);for(var u=_(Math.pow(y,6)),f=this,p="";;){var g=Z(f,u).g;f=ae(f,g.j(u));var w=((0<f.g.length?f.g[0]:f.h)>>>0).toString(y);if(f=g,P(f))return w+p;for(;6>w.length;)w="0"+w;p=w+p}},i.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function P(y){if(y.h!=0)return!1;for(var u=0;u<y.g.length;u++)if(y.g[u]!=0)return!1;return!0}function U(y){return y.h==-1}i.l=function(y){return y=ae(this,y),U(y)?-1:P(y)?0:1};function D(y){for(var u=y.g.length,f=[],p=0;p<u;p++)f[p]=~y.g[p];return new l(f,~y.h).add(k)}i.abs=function(){return U(this)?D(this):this},i.add=function(y){for(var u=Math.max(this.g.length,y.g.length),f=[],p=0,g=0;g<=u;g++){var w=p+(this.i(g)&65535)+(y.i(g)&65535),d=(w>>>16)+(this.i(g)>>>16)+(y.i(g)>>>16);p=d>>>16,w&=65535,d&=65535,f[g]=d<<16|w}return new l(f,f[f.length-1]&-2147483648?-1:0)};function ae(y,u){return y.add(D(u))}i.j=function(y){if(P(this)||P(y))return A;if(U(this))return U(y)?D(this).j(D(y)):D(D(this).j(y));if(U(y))return D(this.j(D(y)));if(0>this.l(V)&&0>y.l(V))return _(this.m()*y.m());for(var u=this.g.length+y.g.length,f=[],p=0;p<2*u;p++)f[p]=0;for(p=0;p<this.g.length;p++)for(var g=0;g<y.g.length;g++){var w=this.i(p)>>>16,d=this.i(p)&65535,ce=y.i(g)>>>16,et=y.i(g)&65535;f[2*p+2*g]+=d*et,Y(f,2*p+2*g),f[2*p+2*g+1]+=w*et,Y(f,2*p+2*g+1),f[2*p+2*g+1]+=d*ce,Y(f,2*p+2*g+1),f[2*p+2*g+2]+=w*ce,Y(f,2*p+2*g+2)}for(p=0;p<u;p++)f[p]=f[2*p+1]<<16|f[2*p];for(p=u;p<2*u;p++)f[p]=0;return new l(f,0)};function Y(y,u){for(;(y[u]&65535)!=y[u];)y[u+1]+=y[u]>>>16,y[u]&=65535,u++}function j(y,u){this.g=y,this.h=u}function Z(y,u){if(P(u))throw Error("division by zero");if(P(y))return new j(A,A);if(U(y))return u=Z(D(y),u),new j(D(u.g),D(u.h));if(U(u))return u=Z(y,D(u)),new j(D(u.g),u.h);if(30<y.g.length){if(U(y)||U(u))throw Error("slowDivide_ only works with positive integers.");for(var f=k,p=u;0>=p.l(y);)f=Oe(f),p=Oe(p);var g=G(f,1),w=G(p,1);for(p=G(p,2),f=G(f,2);!P(p);){var d=w.add(p);0>=d.l(y)&&(g=g.add(f),w=d),p=G(p,1),f=G(f,1)}return u=ae(y,g.j(u)),new j(g,u)}for(g=A;0<=y.l(u);){for(f=Math.max(1,Math.floor(y.m()/u.m())),p=Math.ceil(Math.log(f)/Math.LN2),p=48>=p?1:Math.pow(2,p-48),w=_(f),d=w.j(u);U(d)||0<d.l(y);)f-=p,w=_(f),d=w.j(u);P(w)&&(w=k),g=g.add(w),y=ae(y,d)}return new j(g,y)}i.A=function(y){return Z(this,y).h},i.and=function(y){for(var u=Math.max(this.g.length,y.g.length),f=[],p=0;p<u;p++)f[p]=this.i(p)&y.i(p);return new l(f,this.h&y.h)},i.or=function(y){for(var u=Math.max(this.g.length,y.g.length),f=[],p=0;p<u;p++)f[p]=this.i(p)|y.i(p);return new l(f,this.h|y.h)},i.xor=function(y){for(var u=Math.max(this.g.length,y.g.length),f=[],p=0;p<u;p++)f[p]=this.i(p)^y.i(p);return new l(f,this.h^y.h)};function Oe(y){for(var u=y.g.length+1,f=[],p=0;p<u;p++)f[p]=y.i(p)<<1|y.i(p-1)>>>31;return new l(f,y.h)}function G(y,u){var f=u>>5;u%=32;for(var p=y.g.length-f,g=[],w=0;w<p;w++)g[w]=0<u?y.i(w+f)>>>u|y.i(w+f+1)<<32-u:y.i(w+f);return new l(g,y.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=_,l.fromString=S,qs=l}).apply(typeof Vr<"u"?Vr:typeof self<"u"?self:typeof window<"u"?window:{});var Jt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,s,a){return t==Array.prototype||t==Object.prototype||(t[s]=a.value),t};function n(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof Jt=="object"&&Jt];for(var s=0;s<t.length;++s){var a=t[s];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var r=n(this);function o(t,s){if(s)e:{var a=r;t=t.split(".");for(var h=0;h<t.length-1;h++){var v=t[h];if(!(v in a))break e;a=a[v]}t=t[t.length-1],h=a[t],s=s(h),s!=h&&s!=null&&e(a,t,{configurable:!0,writable:!0,value:s})}}function c(t,s){t instanceof String&&(t+="");var a=0,h=!1,v={next:function(){if(!h&&a<t.length){var I=a++;return{value:s(I,t[I]),done:!1}}return h=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}o("Array.prototype.values",function(t){return t||function(){return c(this,function(s,a){return a})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},m=this||self;function b(t){var s=typeof t;return s=s!="object"?s:t?Array.isArray(t)?"array":s:"null",s=="array"||s=="object"&&typeof t.length=="number"}function _(t){var s=typeof t;return s=="object"&&t!=null||s=="function"}function S(t,s,a){return t.call.apply(t.bind,arguments)}function A(t,s,a){if(!t)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,h),t.apply(s,v)}}return function(){return t.apply(s,arguments)}}function k(t,s,a){return k=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?S:A,k.apply(null,arguments)}function V(t,s){var a=Array.prototype.slice.call(arguments,1);return function(){var h=a.slice();return h.push.apply(h,arguments),t.apply(this,h)}}function P(t,s){function a(){}a.prototype=s.prototype,t.aa=s.prototype,t.prototype=new a,t.prototype.constructor=t,t.Qb=function(h,v,I){for(var T=Array(arguments.length-2),L=2;L<arguments.length;L++)T[L-2]=arguments[L];return s.prototype[v].apply(h,T)}}function U(t){const s=t.length;if(0<s){const a=Array(s);for(let h=0;h<s;h++)a[h]=t[h];return a}return[]}function D(t,s){for(let a=1;a<arguments.length;a++){const h=arguments[a];if(b(h)){const v=t.length||0,I=h.length||0;t.length=v+I;for(let T=0;T<I;T++)t[v+T]=h[T]}else t.push(h)}}class ae{constructor(s,a){this.i=s,this.j=a,this.h=0,this.g=null}get(){let s;return 0<this.h?(this.h--,s=this.g,this.g=s.next,s.next=null):s=this.i(),s}}function Y(t){return/^[\s\xa0]*$/.test(t)}function j(){var t=m.navigator;return t&&(t=t.userAgent)?t:""}function Z(t){return Z[" "](t),t}Z[" "]=function(){};var Oe=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function G(t,s,a){for(const h in t)s.call(a,t[h],h,t)}function y(t,s){for(const a in t)s.call(void 0,t[a],a,t)}function u(t){const s={};for(const a in t)s[a]=t[a];return s}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function p(t,s){let a,h;for(let v=1;v<arguments.length;v++){h=arguments[v];for(a in h)t[a]=h[a];for(let I=0;I<f.length;I++)a=f[I],Object.prototype.hasOwnProperty.call(h,a)&&(t[a]=h[a])}}function g(t){var s=1;t=t.split(":");const a=[];for(;0<s&&t.length;)a.push(t.shift()),s--;return t.length&&a.push(t.join(":")),a}function w(t){m.setTimeout(()=>{throw t},0)}function d(){var t=fn;let s=null;return t.g&&(s=t.g,t.g=t.g.next,t.g||(t.h=null),s.next=null),s}class ce{constructor(){this.h=this.g=null}add(s,a){const h=et.get();h.set(s,a),this.h?this.h.next=h:this.g=h,this.h=h}}var et=new ae(()=>new to,t=>t.reset());class to{constructor(){this.next=this.g=this.h=null}set(s,a){this.h=s,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let tt,nt=!1,fn=new ce,gi=()=>{const t=m.Promise.resolve(void 0);tt=()=>{t.then(no)}};var no=()=>{for(var t;t=d();){try{t.h.call(t.g)}catch(a){w(a)}var s=et;s.j(t),100>s.h&&(s.h++,t.next=s.g,s.g=t)}nt=!1};function ye(){this.s=this.s,this.C=this.C}ye.prototype.s=!1,ye.prototype.ma=function(){this.s||(this.s=!0,this.N())},ye.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function F(t,s){this.type=t,this.g=this.target=s,this.defaultPrevented=!1}F.prototype.h=function(){this.defaultPrevented=!0};var io=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var t=!1,s=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const a=()=>{};m.addEventListener("test",a,s),m.removeEventListener("test",a,s)}catch{}return t}();function it(t,s){if(F.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var a=this.type=t.type,h=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=s,s=t.relatedTarget){if(Oe){e:{try{Z(s.nodeName);var v=!0;break e}catch{}v=!1}v||(s=null)}}else a=="mouseover"?s=t.fromElement:a=="mouseout"&&(s=t.toElement);this.relatedTarget=s,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ro[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&it.aa.h.call(this)}}P(it,F);var ro={2:"touch",3:"pen",4:"mouse"};it.prototype.h=function(){it.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Nt="closure_listenable_"+(1e6*Math.random()|0),so=0;function oo(t,s,a,h,v){this.listener=t,this.proxy=null,this.src=s,this.type=a,this.capture=!!h,this.ha=v,this.key=++so,this.da=this.fa=!1}function Lt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Dt(t){this.src=t,this.g={},this.h=0}Dt.prototype.add=function(t,s,a,h,v){var I=t.toString();t=this.g[I],t||(t=this.g[I]=[],this.h++);var T=gn(t,s,h,v);return-1<T?(s=t[T],a||(s.fa=!1)):(s=new oo(s,this.src,I,!!h,v),s.fa=a,t.push(s)),s};function pn(t,s){var a=s.type;if(a in t.g){var h=t.g[a],v=Array.prototype.indexOf.call(h,s,void 0),I;(I=0<=v)&&Array.prototype.splice.call(h,v,1),I&&(Lt(s),t.g[a].length==0&&(delete t.g[a],t.h--))}}function gn(t,s,a,h){for(var v=0;v<t.length;++v){var I=t[v];if(!I.da&&I.listener==s&&I.capture==!!a&&I.ha==h)return v}return-1}var mn="closure_lm_"+(1e6*Math.random()|0),yn={};function mi(t,s,a,h,v){if(Array.isArray(s)){for(var I=0;I<s.length;I++)mi(t,s[I],a,h,v);return null}return a=wi(a),t&&t[Nt]?t.K(s,a,_(h)?!!h.capture:!1,v):ao(t,s,a,!1,h,v)}function ao(t,s,a,h,v,I){if(!s)throw Error("Invalid event type");var T=_(v)?!!v.capture:!!v,L=wn(t);if(L||(t[mn]=L=new Dt(t)),a=L.add(s,a,h,T,I),a.proxy)return a;if(h=co(),a.proxy=h,h.src=t,h.listener=a,t.addEventListener)io||(v=T),v===void 0&&(v=!1),t.addEventListener(s.toString(),h,v);else if(t.attachEvent)t.attachEvent(vi(s.toString()),h);else if(t.addListener&&t.removeListener)t.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return a}function co(){function t(a){return s.call(t.src,t.listener,a)}const s=ho;return t}function yi(t,s,a,h,v){if(Array.isArray(s))for(var I=0;I<s.length;I++)yi(t,s[I],a,h,v);else h=_(h)?!!h.capture:!!h,a=wi(a),t&&t[Nt]?(t=t.i,s=String(s).toString(),s in t.g&&(I=t.g[s],a=gn(I,a,h,v),-1<a&&(Lt(I[a]),Array.prototype.splice.call(I,a,1),I.length==0&&(delete t.g[s],t.h--)))):t&&(t=wn(t))&&(s=t.g[s.toString()],t=-1,s&&(t=gn(s,a,h,v)),(a=-1<t?s[t]:null)&&vn(a))}function vn(t){if(typeof t!="number"&&t&&!t.da){var s=t.src;if(s&&s[Nt])pn(s.i,t);else{var a=t.type,h=t.proxy;s.removeEventListener?s.removeEventListener(a,h,t.capture):s.detachEvent?s.detachEvent(vi(a),h):s.addListener&&s.removeListener&&s.removeListener(h),(a=wn(s))?(pn(a,t),a.h==0&&(a.src=null,s[mn]=null)):Lt(t)}}}function vi(t){return t in yn?yn[t]:yn[t]="on"+t}function ho(t,s){if(t.da)t=!0;else{s=new it(s,this);var a=t.listener,h=t.ha||t.src;t.fa&&vn(t),t=a.call(h,s)}return t}function wn(t){return t=t[mn],t instanceof Dt?t:null}var bn="__closure_events_fn_"+(1e9*Math.random()>>>0);function wi(t){return typeof t=="function"?t:(t[bn]||(t[bn]=function(s){return t.handleEvent(s)}),t[bn])}function H(){ye.call(this),this.i=new Dt(this),this.M=this,this.F=null}P(H,ye),H.prototype[Nt]=!0,H.prototype.removeEventListener=function(t,s,a,h){yi(this,t,s,a,h)};function $(t,s){var a,h=t.F;if(h)for(a=[];h;h=h.F)a.push(h);if(t=t.M,h=s.type||s,typeof s=="string")s=new F(s,t);else if(s instanceof F)s.target=s.target||t;else{var v=s;s=new F(h,t),p(s,v)}if(v=!0,a)for(var I=a.length-1;0<=I;I--){var T=s.g=a[I];v=Mt(T,h,!0,s)&&v}if(T=s.g=t,v=Mt(T,h,!0,s)&&v,v=Mt(T,h,!1,s)&&v,a)for(I=0;I<a.length;I++)T=s.g=a[I],v=Mt(T,h,!1,s)&&v}H.prototype.N=function(){if(H.aa.N.call(this),this.i){var t=this.i,s;for(s in t.g){for(var a=t.g[s],h=0;h<a.length;h++)Lt(a[h]);delete t.g[s],t.h--}}this.F=null},H.prototype.K=function(t,s,a,h){return this.i.add(String(t),s,!1,a,h)},H.prototype.L=function(t,s,a,h){return this.i.add(String(t),s,!0,a,h)};function Mt(t,s,a,h){if(s=t.i.g[String(s)],!s)return!0;s=s.concat();for(var v=!0,I=0;I<s.length;++I){var T=s[I];if(T&&!T.da&&T.capture==a){var L=T.listener,x=T.ha||T.src;T.fa&&pn(t.i,T),v=L.call(x,h)!==!1&&v}}return v&&!h.defaultPrevented}function bi(t,s,a){if(typeof t=="function")a&&(t=k(t,a));else if(t&&typeof t.handleEvent=="function")t=k(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(s)?-1:m.setTimeout(t,s||0)}function Ii(t){t.g=bi(()=>{t.g=null,t.i&&(t.i=!1,Ii(t))},t.l);const s=t.h;t.h=null,t.m.apply(null,s)}class lo extends ye{constructor(s,a){super(),this.m=s,this.l=a,this.h=null,this.i=!1,this.g=null}j(s){this.h=arguments,this.g?this.i=!0:Ii(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rt(t){ye.call(this),this.h=t,this.g={}}P(rt,ye);var _i=[];function Ti(t){G(t.g,function(s,a){this.g.hasOwnProperty(a)&&vn(s)},t),t.g={}}rt.prototype.N=function(){rt.aa.N.call(this),Ti(this)},rt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var In=m.JSON.stringify,uo=m.JSON.parse,fo=class{stringify(t){return m.JSON.stringify(t,void 0)}parse(t){return m.JSON.parse(t,void 0)}};function _n(){}_n.prototype.h=null;function Ei(t){return t.h||(t.h=t.i())}function Tn(){F.call(this,"d")}P(Tn,F);function En(){F.call(this,"c")}P(En,F);var He={},Si=null;function Sn(){return Si=Si||new H}He.La="serverreachability";function Ai(t){F.call(this,He.La,t)}P(Ai,F);function st(t){const s=Sn();$(s,new Ai(s))}He.STAT_EVENT="statevent";function ki(t,s){F.call(this,He.STAT_EVENT,t),this.stat=s}P(ki,F);function z(t){const s=Sn();$(s,new ki(s,t))}He.Ma="timingevent";function Ci(t,s){F.call(this,He.Ma,t),this.size=s}P(Ci,F);function ot(t,s){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){t()},s)}function at(){this.g=!0}at.prototype.xa=function(){this.g=!1};function po(t,s,a,h,v,I){t.info(function(){if(t.g)if(I)for(var T="",L=I.split("&"),x=0;x<L.length;x++){var R=L[x].split("=");if(1<R.length){var B=R[0];R=R[1];var q=B.split("_");T=2<=q.length&&q[1]=="type"?T+(B+"="+R+"&"):T+(B+"=redacted&")}}else T=null;else T=I;return"XMLHTTP REQ ("+h+") [attempt "+v+"]: "+s+`
`+a+`
`+T})}function go(t,s,a,h,v,I,T){t.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+v+"]: "+s+`
`+a+`
`+I+" "+T})}function Be(t,s,a,h){t.info(function(){return"XMLHTTP TEXT ("+s+"): "+yo(t,a)+(h?" "+h:"")})}function mo(t,s){t.info(function(){return"TIMEOUT: "+s})}at.prototype.info=function(){};function yo(t,s){if(!t.g)return s;if(!s)return null;try{var a=JSON.parse(s);if(a){for(t=0;t<a.length;t++)if(Array.isArray(a[t])){var h=a[t];if(!(2>h.length)){var v=h[1];if(Array.isArray(v)&&!(1>v.length)){var I=v[0];if(I!="noop"&&I!="stop"&&I!="close")for(var T=1;T<v.length;T++)v[T]=""}}}}return In(a)}catch{return s}}var An;function Ut(){}P(Ut,_n),Ut.prototype.g=function(){return new XMLHttpRequest},Ut.prototype.i=function(){return{}},An=new Ut;function ve(t,s,a,h){this.j=t,this.i=s,this.l=a,this.R=h||1,this.U=new rt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pi}function Pi(){this.i=null,this.g="",this.h=!1}var Oi={},kn={};function Cn(t,s,a){t.L=1,t.v=Ht(he(s)),t.m=a,t.P=!0,Ri(t,null)}function Ri(t,s){t.F=Date.now(),xt(t),t.A=he(t.v);var a=t.A,h=t.R;Array.isArray(h)||(h=[String(h)]),Wi(a.i,"t",h),t.C=0,a=t.j.J,t.h=new Pi,t.g=hr(t.j,a?s:null,!t.m),0<t.O&&(t.M=new lo(k(t.Y,t,t.g),t.O)),s=t.U,a=t.g,h=t.ca;var v="readystatechange";Array.isArray(v)||(v&&(_i[0]=v.toString()),v=_i);for(var I=0;I<v.length;I++){var T=mi(a,v[I],h||s.handleEvent,!1,s.h||s);if(!T)break;s.g[T.key]=T}s=t.H?u(t.H):{},t.m?(t.u||(t.u="POST"),s["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,s)):(t.u="GET",t.g.ea(t.A,t.u,null,s)),st(),po(t.i,t.u,t.A,t.l,t.R,t.m)}ve.prototype.ca=function(t){t=t.target;const s=this.M;s&&le(t)==3?s.j():this.Y(t)},ve.prototype.Y=function(t){try{if(t==this.g)e:{const q=le(this.g);var s=this.g.Ba();const ze=this.g.Z();if(!(3>q)&&(q!=3||this.g&&(this.h.h||this.g.oa()||Qi(this.g)))){this.J||q!=4||s==7||(s==8||0>=ze?st(3):st(2)),Pn(this);var a=this.g.Z();this.X=a;t:if(Ni(this)){var h=Qi(this.g);t="";var v=h.length,I=le(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Re(this),ct(this);var T="";break t}this.h.i=new m.TextDecoder}for(s=0;s<v;s++)this.h.h=!0,t+=this.h.i.decode(h[s],{stream:!(I&&s==v-1)});h.length=0,this.h.g+=t,this.C=0,T=this.h.g}else T=this.g.oa();if(this.o=a==200,go(this.i,this.u,this.A,this.l,this.R,q,a),this.o){if(this.T&&!this.K){t:{if(this.g){var L,x=this.g;if((L=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(L)){var R=L;break t}}R=null}if(a=R)Be(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,On(this,a);else{this.o=!1,this.s=3,z(12),Re(this),ct(this);break e}}if(this.P){a=!0;let ee;for(;!this.J&&this.C<T.length;)if(ee=vo(this,T),ee==kn){q==4&&(this.s=4,z(14),a=!1),Be(this.i,this.l,null,"[Incomplete Response]");break}else if(ee==Oi){this.s=4,z(15),Be(this.i,this.l,T,"[Invalid Chunk]"),a=!1;break}else Be(this.i,this.l,ee,null),On(this,ee);if(Ni(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),q!=4||T.length!=0||this.h.h||(this.s=1,z(16),a=!1),this.o=this.o&&a,!a)Be(this.i,this.l,T,"[Invalid Chunked Response]"),Re(this),ct(this);else if(0<T.length&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.ba&&!B.M&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),Un(B),B.M=!0,z(11))}}else Be(this.i,this.l,T,null),On(this,T);q==4&&Re(this),this.o&&!this.J&&(q==4?sr(this.j,this):(this.o=!1,xt(this)))}else Mo(this.g),a==400&&0<T.indexOf("Unknown SID")?(this.s=3,z(12)):(this.s=0,z(13)),Re(this),ct(this)}}}catch{}finally{}};function Ni(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function vo(t,s){var a=t.C,h=s.indexOf(`
`,a);return h==-1?kn:(a=Number(s.substring(a,h)),isNaN(a)?Oi:(h+=1,h+a>s.length?kn:(s=s.slice(h,h+a),t.C=h+a,s)))}ve.prototype.cancel=function(){this.J=!0,Re(this)};function xt(t){t.S=Date.now()+t.I,Li(t,t.I)}function Li(t,s){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ot(k(t.ba,t),s)}function Pn(t){t.B&&(m.clearTimeout(t.B),t.B=null)}ve.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(mo(this.i,this.A),this.L!=2&&(st(),z(17)),Re(this),this.s=2,ct(this)):Li(this,this.S-t)};function ct(t){t.j.G==0||t.J||sr(t.j,t)}function Re(t){Pn(t);var s=t.M;s&&typeof s.ma=="function"&&s.ma(),t.M=null,Ti(t.U),t.g&&(s=t.g,t.g=null,s.abort(),s.ma())}function On(t,s){try{var a=t.j;if(a.G!=0&&(a.g==t||Rn(a.h,t))){if(!t.K&&Rn(a.h,t)&&a.G==3){try{var h=a.Da.g.parse(s)}catch{h=null}if(Array.isArray(h)&&h.length==3){var v=h;if(v[0]==0){e:if(!a.u){if(a.g)if(a.g.F+3e3<t.F)Kt(a),zt(a);else break e;Mn(a),z(18)}}else a.za=v[1],0<a.za-a.T&&37500>v[2]&&a.F&&a.v==0&&!a.C&&(a.C=ot(k(a.Za,a),6e3));if(1>=Ui(a.h)&&a.ca){try{a.ca()}catch{}a.ca=void 0}}else Le(a,11)}else if((t.K||a.g==t)&&Kt(a),!Y(s))for(v=a.Da.g.parse(s),s=0;s<v.length;s++){let R=v[s];if(a.T=R[0],R=R[1],a.G==2)if(R[0]=="c"){a.K=R[1],a.ia=R[2];const B=R[3];B!=null&&(a.la=B,a.j.info("VER="+a.la));const q=R[4];q!=null&&(a.Aa=q,a.j.info("SVER="+a.Aa));const ze=R[5];ze!=null&&typeof ze=="number"&&0<ze&&(h=1.5*ze,a.L=h,a.j.info("backChannelRequestTimeoutMs_="+h)),h=a;const ee=t.g;if(ee){const Gt=ee.g?ee.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gt){var I=h.h;I.g||Gt.indexOf("spdy")==-1&&Gt.indexOf("quic")==-1&&Gt.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(Nn(I,I.h),I.h=null))}if(h.D){const xn=ee.g?ee.g.getResponseHeader("X-HTTP-Session-Id"):null;xn&&(h.ya=xn,N(h.I,h.D,xn))}}a.G=3,a.l&&a.l.ua(),a.ba&&(a.R=Date.now()-t.F,a.j.info("Handshake RTT: "+a.R+"ms")),h=a;var T=t;if(h.qa=cr(h,h.J?h.ia:null,h.W),T.K){xi(h.h,T);var L=T,x=h.L;x&&(L.I=x),L.B&&(Pn(L),xt(L)),h.g=T}else ir(h);0<a.i.length&&Wt(a)}else R[0]!="stop"&&R[0]!="close"||Le(a,7);else a.G==3&&(R[0]=="stop"||R[0]=="close"?R[0]=="stop"?Le(a,7):Dn(a):R[0]!="noop"&&a.l&&a.l.ta(R),a.v=0)}}st(4)}catch{}}var wo=class{constructor(t,s){this.g=t,this.map=s}};function Di(t){this.l=t||10,m.PerformanceNavigationTiming?(t=m.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Mi(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ui(t){return t.h?1:t.g?t.g.size:0}function Rn(t,s){return t.h?t.h==s:t.g?t.g.has(s):!1}function Nn(t,s){t.g?t.g.add(s):t.h=s}function xi(t,s){t.h&&t.h==s?t.h=null:t.g&&t.g.has(s)&&t.g.delete(s)}Di.prototype.cancel=function(){if(this.i=ji(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ji(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let s=t.i;for(const a of t.g.values())s=s.concat(a.D);return s}return U(t.i)}function bo(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(b(t)){for(var s=[],a=t.length,h=0;h<a;h++)s.push(t[h]);return s}s=[],a=0;for(h in t)s[a++]=t[h];return s}function Io(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(b(t)||typeof t=="string"){var s=[];t=t.length;for(var a=0;a<t;a++)s.push(a);return s}s=[],a=0;for(const h in t)s[a++]=h;return s}}}function Fi(t,s){if(t.forEach&&typeof t.forEach=="function")t.forEach(s,void 0);else if(b(t)||typeof t=="string")Array.prototype.forEach.call(t,s,void 0);else for(var a=Io(t),h=bo(t),v=h.length,I=0;I<v;I++)s.call(void 0,h[I],a&&a[I],t)}var Hi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _o(t,s){if(t){t=t.split("&");for(var a=0;a<t.length;a++){var h=t[a].indexOf("="),v=null;if(0<=h){var I=t[a].substring(0,h);v=t[a].substring(h+1)}else I=t[a];s(I,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Ne(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Ne){this.h=t.h,jt(this,t.j),this.o=t.o,this.g=t.g,Ft(this,t.s),this.l=t.l;var s=t.i,a=new ut;a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),Bi(this,a),this.m=t.m}else t&&(s=String(t).match(Hi))?(this.h=!1,jt(this,s[1]||"",!0),this.o=ht(s[2]||""),this.g=ht(s[3]||"",!0),Ft(this,s[4]),this.l=ht(s[5]||"",!0),Bi(this,s[6]||"",!0),this.m=ht(s[7]||"")):(this.h=!1,this.i=new ut(null,this.h))}Ne.prototype.toString=function(){var t=[],s=this.j;s&&t.push(lt(s,Vi,!0),":");var a=this.g;return(a||s=="file")&&(t.push("//"),(s=this.o)&&t.push(lt(s,Vi,!0),"@"),t.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.s,a!=null&&t.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&t.push("/"),t.push(lt(a,a.charAt(0)=="/"?So:Eo,!0))),(a=this.i.toString())&&t.push("?",a),(a=this.m)&&t.push("#",lt(a,ko)),t.join("")};function he(t){return new Ne(t)}function jt(t,s,a){t.j=a?ht(s,!0):s,t.j&&(t.j=t.j.replace(/:$/,""))}function Ft(t,s){if(s){if(s=Number(s),isNaN(s)||0>s)throw Error("Bad port number "+s);t.s=s}else t.s=null}function Bi(t,s,a){s instanceof ut?(t.i=s,Co(t.i,t.h)):(a||(s=lt(s,Ao)),t.i=new ut(s,t.h))}function N(t,s,a){t.i.set(s,a)}function Ht(t){return N(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ht(t,s){return t?s?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function lt(t,s,a){return typeof t=="string"?(t=encodeURI(t).replace(s,To),a&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function To(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Vi=/[#\/\?@]/g,Eo=/[#\?:]/g,So=/[#\?]/g,Ao=/[#\?@]/g,ko=/#/g;function ut(t,s){this.h=this.g=null,this.i=t||null,this.j=!!s}function we(t){t.g||(t.g=new Map,t.h=0,t.i&&_o(t.i,function(s,a){t.add(decodeURIComponent(s.replace(/\+/g," ")),a)}))}i=ut.prototype,i.add=function(t,s){we(this),this.i=null,t=Ve(this,t);var a=this.g.get(t);return a||this.g.set(t,a=[]),a.push(s),this.h+=1,this};function $i(t,s){we(t),s=Ve(t,s),t.g.has(s)&&(t.i=null,t.h-=t.g.get(s).length,t.g.delete(s))}function zi(t,s){return we(t),s=Ve(t,s),t.g.has(s)}i.forEach=function(t,s){we(this),this.g.forEach(function(a,h){a.forEach(function(v){t.call(s,v,h,this)},this)},this)},i.na=function(){we(this);const t=Array.from(this.g.values()),s=Array.from(this.g.keys()),a=[];for(let h=0;h<s.length;h++){const v=t[h];for(let I=0;I<v.length;I++)a.push(s[h])}return a},i.V=function(t){we(this);let s=[];if(typeof t=="string")zi(this,t)&&(s=s.concat(this.g.get(Ve(this,t))));else{t=Array.from(this.g.values());for(let a=0;a<t.length;a++)s=s.concat(t[a])}return s},i.set=function(t,s){return we(this),this.i=null,t=Ve(this,t),zi(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[s]),this.h+=1,this},i.get=function(t,s){return t?(t=this.V(t),0<t.length?String(t[0]):s):s};function Wi(t,s,a){$i(t,s),0<a.length&&(t.i=null,t.g.set(Ve(t,s),U(a)),t.h+=a.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],s=Array.from(this.g.keys());for(var a=0;a<s.length;a++){var h=s[a];const I=encodeURIComponent(String(h)),T=this.V(h);for(h=0;h<T.length;h++){var v=I;T[h]!==""&&(v+="="+encodeURIComponent(String(T[h]))),t.push(v)}}return this.i=t.join("&")};function Ve(t,s){return s=String(s),t.j&&(s=s.toLowerCase()),s}function Co(t,s){s&&!t.j&&(we(t),t.i=null,t.g.forEach(function(a,h){var v=h.toLowerCase();h!=v&&($i(this,h),Wi(this,v,a))},t)),t.j=s}function Po(t,s){const a=new at;if(m.Image){const h=new Image;h.onload=V(be,a,"TestLoadImage: loaded",!0,s,h),h.onerror=V(be,a,"TestLoadImage: error",!1,s,h),h.onabort=V(be,a,"TestLoadImage: abort",!1,s,h),h.ontimeout=V(be,a,"TestLoadImage: timeout",!1,s,h),m.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=t}else s(!1)}function Oo(t,s){const a=new at,h=new AbortController,v=setTimeout(()=>{h.abort(),be(a,"TestPingServer: timeout",!1,s)},1e4);fetch(t,{signal:h.signal}).then(I=>{clearTimeout(v),I.ok?be(a,"TestPingServer: ok",!0,s):be(a,"TestPingServer: server error",!1,s)}).catch(()=>{clearTimeout(v),be(a,"TestPingServer: error",!1,s)})}function be(t,s,a,h,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),h(a)}catch{}}function Ro(){this.g=new fo}function No(t,s,a){const h=a||"";try{Fi(t,function(v,I){let T=v;_(v)&&(T=In(v)),s.push(h+I+"="+encodeURIComponent(T))})}catch(v){throw s.push(h+"type="+encodeURIComponent("_badmap")),v}}function Bt(t){this.l=t.Ub||null,this.j=t.eb||!1}P(Bt,_n),Bt.prototype.g=function(){return new Vt(this.l,this.j)},Bt.prototype.i=function(t){return function(){return t}}({});function Vt(t,s){H.call(this),this.D=t,this.o=s,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Vt,H),i=Vt.prototype,i.open=function(t,s){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=s,this.readyState=1,ft(this)},i.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const s={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(s.body=t),(this.D||m).fetch(new Request(this.A,s)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,dt(this)),this.readyState=0},i.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ft(this)),this.g&&(this.readyState=3,ft(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ki(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ki(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}i.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var s=t.value?t.value:new Uint8Array(0);(s=this.v.decode(s,{stream:!t.done}))&&(this.response=this.responseText+=s)}t.done?dt(this):ft(this),this.readyState==3&&Ki(this)}},i.Ra=function(t){this.g&&(this.response=this.responseText=t,dt(this))},i.Qa=function(t){this.g&&(this.response=t,dt(this))},i.ga=function(){this.g&&dt(this)};function dt(t){t.readyState=4,t.l=null,t.j=null,t.v=null,ft(t)}i.setRequestHeader=function(t,s){this.u.append(t,s)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],s=this.h.entries();for(var a=s.next();!a.done;)a=a.value,t.push(a[0]+": "+a[1]),a=s.next();return t.join(`\r
`)};function ft(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Vt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function Gi(t){let s="";return G(t,function(a,h){s+=h,s+=":",s+=a,s+=`\r
`}),s}function Ln(t,s,a){e:{for(h in a){var h=!1;break e}h=!0}h||(a=Gi(a),typeof t=="string"?a!=null&&encodeURIComponent(String(a)):N(t,s,a))}function M(t){H.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(M,H);var Lo=/^https?$/i,Do=["POST","PUT"];i=M.prototype,i.Ha=function(t){this.J=t},i.ea=function(t,s,a,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);s=s?s.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():An.g(),this.v=this.o?Ei(this.o):Ei(An),this.g.onreadystatechange=k(this.Ea,this);try{this.B=!0,this.g.open(s,String(t),!0),this.B=!1}catch(I){qi(this,I);return}if(t=a||"",a=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var v in h)a.set(v,h[v]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const I of h.keys())a.set(I,h.get(I));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(a.keys()).find(I=>I.toLowerCase()=="content-type"),v=m.FormData&&t instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Do,s,void 0))||h||v||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,T]of a)this.g.setRequestHeader(I,T);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Yi(this),this.u=!0,this.g.send(t),this.u=!1}catch(I){qi(this,I)}};function qi(t,s){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=s,t.m=5,Ji(t),$t(t)}function Ji(t){t.A||(t.A=!0,$(t,"complete"),$(t,"error"))}i.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,$(this,"complete"),$(this,"abort"),$t(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$t(this,!0)),M.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Xi(this):this.bb())},i.bb=function(){Xi(this)};function Xi(t){if(t.h&&typeof l<"u"&&(!t.v[1]||le(t)!=4||t.Z()!=2)){if(t.u&&le(t)==4)bi(t.Ea,0,t);else if($(t,"readystatechange"),le(t)==4){t.h=!1;try{const T=t.Z();e:switch(T){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var s=!0;break e;default:s=!1}var a;if(!(a=s)){var h;if(h=T===0){var v=String(t.D).match(Hi)[1]||null;!v&&m.self&&m.self.location&&(v=m.self.location.protocol.slice(0,-1)),h=!Lo.test(v?v.toLowerCase():"")}a=h}if(a)$(t,"complete"),$(t,"success");else{t.m=6;try{var I=2<le(t)?t.g.statusText:""}catch{I=""}t.l=I+" ["+t.Z()+"]",Ji(t)}}finally{$t(t)}}}}function $t(t,s){if(t.g){Yi(t);const a=t.g,h=t.v[0]?()=>{}:null;t.g=null,t.v=null,s||$(t,"ready");try{a.onreadystatechange=h}catch{}}}function Yi(t){t.I&&(m.clearTimeout(t.I),t.I=null)}i.isActive=function(){return!!this.g};function le(t){return t.g?t.g.readyState:0}i.Z=function(){try{return 2<le(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(t){if(this.g){var s=this.g.responseText;return t&&s.indexOf(t)==0&&(s=s.substring(t.length)),uo(s)}};function Qi(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Mo(t){const s={};t=(t.g&&2<=le(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<t.length;h++){if(Y(t[h]))continue;var a=g(t[h]);const v=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const I=s[v]||[];s[v]=I,I.push(a)}y(s,function(h){return h.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function pt(t,s,a){return a&&a.internalChannelParams&&a.internalChannelParams[t]||s}function Zi(t){this.Aa=0,this.i=[],this.j=new at,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=pt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=pt("baseRetryDelayMs",5e3,t),this.cb=pt("retryDelaySeedMs",1e4,t),this.Wa=pt("forwardChannelMaxRetries",2,t),this.wa=pt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Di(t&&t.concurrentRequestLimit),this.Da=new Ro,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Zi.prototype,i.la=8,i.G=1,i.connect=function(t,s,a,h){z(0),this.W=t,this.H=s||{},a&&h!==void 0&&(this.H.OSID=a,this.H.OAID=h),this.F=this.X,this.I=cr(this,null,this.W),Wt(this)};function Dn(t){if(er(t),t.G==3){var s=t.U++,a=he(t.I);if(N(a,"SID",t.K),N(a,"RID",s),N(a,"TYPE","terminate"),gt(t,a),s=new ve(t,t.j,s),s.L=2,s.v=Ht(he(a)),a=!1,m.navigator&&m.navigator.sendBeacon)try{a=m.navigator.sendBeacon(s.v.toString(),"")}catch{}!a&&m.Image&&(new Image().src=s.v,a=!0),a||(s.g=hr(s.j,null),s.g.ea(s.v)),s.F=Date.now(),xt(s)}ar(t)}function zt(t){t.g&&(Un(t),t.g.cancel(),t.g=null)}function er(t){zt(t),t.u&&(m.clearTimeout(t.u),t.u=null),Kt(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&m.clearTimeout(t.s),t.s=null)}function Wt(t){if(!Mi(t.h)&&!t.s){t.s=!0;var s=t.Ga;tt||gi(),nt||(tt(),nt=!0),fn.add(s,t),t.B=0}}function Uo(t,s){return Ui(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=s.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=ot(k(t.Ga,t,s),or(t,t.B)),t.B++,!0)}i.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const v=new ve(this,this.j,t);let I=this.o;if(this.S&&(I?(I=u(I),p(I,this.S)):I=this.S),this.m!==null||this.O||(v.H=I,I=null),this.P)e:{for(var s=0,a=0;a<this.i.length;a++){t:{var h=this.i[a];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break t}h=void 0}if(h===void 0)break;if(s+=h,4096<s){s=a;break e}if(s===4096||a===this.i.length-1){s=a+1;break e}}s=1e3}else s=1e3;s=nr(this,v,s),a=he(this.I),N(a,"RID",t),N(a,"CVER",22),this.D&&N(a,"X-HTTP-Session-Id",this.D),gt(this,a),I&&(this.O?s="headers="+encodeURIComponent(String(Gi(I)))+"&"+s:this.m&&Ln(a,this.m,I)),Nn(this.h,v),this.Ua&&N(a,"TYPE","init"),this.P?(N(a,"$req",s),N(a,"SID","null"),v.T=!0,Cn(v,a,null)):Cn(v,a,s),this.G=2}}else this.G==3&&(t?tr(this,t):this.i.length==0||Mi(this.h)||tr(this))};function tr(t,s){var a;s?a=s.l:a=t.U++;const h=he(t.I);N(h,"SID",t.K),N(h,"RID",a),N(h,"AID",t.T),gt(t,h),t.m&&t.o&&Ln(h,t.m,t.o),a=new ve(t,t.j,a,t.B+1),t.m===null&&(a.H=t.o),s&&(t.i=s.D.concat(t.i)),s=nr(t,a,1e3),a.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Nn(t.h,a),Cn(a,h,s)}function gt(t,s){t.H&&G(t.H,function(a,h){N(s,h,a)}),t.l&&Fi({},function(a,h){N(s,h,a)})}function nr(t,s,a){a=Math.min(t.i.length,a);var h=t.l?k(t.l.Na,t.l,t):null;e:{var v=t.i;let I=-1;for(;;){const T=["count="+a];I==-1?0<a?(I=v[0].g,T.push("ofs="+I)):I=0:T.push("ofs="+I);let L=!0;for(let x=0;x<a;x++){let R=v[x].g;const B=v[x].map;if(R-=I,0>R)I=Math.max(0,v[x].g-100),L=!1;else try{No(B,T,"req"+R+"_")}catch{h&&h(B)}}if(L){h=T.join("&");break e}}}return t=t.i.splice(0,a),s.D=t,h}function ir(t){if(!t.g&&!t.u){t.Y=1;var s=t.Fa;tt||gi(),nt||(tt(),nt=!0),fn.add(s,t),t.v=0}}function Mn(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=ot(k(t.Fa,t),or(t,t.v)),t.v++,!0)}i.Fa=function(){if(this.u=null,rr(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=ot(k(this.ab,this),t)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,z(10),zt(this),rr(this))};function Un(t){t.A!=null&&(m.clearTimeout(t.A),t.A=null)}function rr(t){t.g=new ve(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var s=he(t.qa);N(s,"RID","rpc"),N(s,"SID",t.K),N(s,"AID",t.T),N(s,"CI",t.F?"0":"1"),!t.F&&t.ja&&N(s,"TO",t.ja),N(s,"TYPE","xmlhttp"),gt(t,s),t.m&&t.o&&Ln(s,t.m,t.o),t.L&&(t.g.I=t.L);var a=t.g;t=t.ia,a.L=1,a.v=Ht(he(s)),a.m=null,a.P=!0,Ri(a,t)}i.Za=function(){this.C!=null&&(this.C=null,zt(this),Mn(this),z(19))};function Kt(t){t.C!=null&&(m.clearTimeout(t.C),t.C=null)}function sr(t,s){var a=null;if(t.g==s){Kt(t),Un(t),t.g=null;var h=2}else if(Rn(t.h,s))a=s.D,xi(t.h,s),h=1;else return;if(t.G!=0){if(s.o)if(h==1){a=s.m?s.m.length:0,s=Date.now()-s.F;var v=t.B;h=Sn(),$(h,new Ci(h,a)),Wt(t)}else ir(t);else if(v=s.s,v==3||v==0&&0<s.X||!(h==1&&Uo(t,s)||h==2&&Mn(t)))switch(a&&0<a.length&&(s=t.h,s.i=s.i.concat(a)),v){case 1:Le(t,5);break;case 4:Le(t,10);break;case 3:Le(t,6);break;default:Le(t,2)}}}function or(t,s){let a=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(a*=2),a*s}function Le(t,s){if(t.j.info("Error code "+s),s==2){var a=k(t.fb,t),h=t.Xa;const v=!h;h=new Ne(h||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||jt(h,"https"),Ht(h),v?Po(h.toString(),a):Oo(h.toString(),a)}else z(2);t.G=0,t.l&&t.l.sa(s),ar(t),er(t)}i.fb=function(t){t?(this.j.info("Successfully pinged google.com"),z(2)):(this.j.info("Failed to ping google.com"),z(1))};function ar(t){if(t.G=0,t.ka=[],t.l){const s=ji(t.h);(s.length!=0||t.i.length!=0)&&(D(t.ka,s),D(t.ka,t.i),t.h.i.length=0,U(t.i),t.i.length=0),t.l.ra()}}function cr(t,s,a){var h=a instanceof Ne?he(a):new Ne(a);if(h.g!="")s&&(h.g=s+"."+h.g),Ft(h,h.s);else{var v=m.location;h=v.protocol,s=s?s+"."+v.hostname:v.hostname,v=+v.port;var I=new Ne(null);h&&jt(I,h),s&&(I.g=s),v&&Ft(I,v),a&&(I.l=a),h=I}return a=t.D,s=t.ya,a&&s&&N(h,a,s),N(h,"VER",t.la),gt(t,h),h}function hr(t,s,a){if(s&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return s=t.Ca&&!t.pa?new M(new Bt({eb:a})):new M(t.pa),s.Ha(t.J),s}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function lr(){}i=lr.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Q(t,s){H.call(this),this.g=new Zi(s),this.l=t,this.h=s&&s.messageUrlParams||null,t=s&&s.messageHeaders||null,s&&s.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=s&&s.initMessageHeaders||null,s&&s.messageContentType&&(t?t["X-WebChannel-Content-Type"]=s.messageContentType:t={"X-WebChannel-Content-Type":s.messageContentType}),s&&s.va&&(t?t["X-WebChannel-Client-Profile"]=s.va:t={"X-WebChannel-Client-Profile":s.va}),this.g.S=t,(t=s&&s.Sb)&&!Y(t)&&(this.g.m=t),this.v=s&&s.supportsCrossDomainXhr||!1,this.u=s&&s.sendRawJson||!1,(s=s&&s.httpSessionIdParam)&&!Y(s)&&(this.g.D=s,t=this.h,t!==null&&s in t&&(t=this.h,s in t&&delete t[s])),this.j=new $e(this)}P(Q,H),Q.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Q.prototype.close=function(){Dn(this.g)},Q.prototype.o=function(t){var s=this.g;if(typeof t=="string"){var a={};a.__data__=t,t=a}else this.u&&(a={},a.__data__=In(t),t=a);s.i.push(new wo(s.Ya++,t)),s.G==3&&Wt(s)},Q.prototype.N=function(){this.g.l=null,delete this.j,Dn(this.g),delete this.g,Q.aa.N.call(this)};function ur(t){Tn.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var s=t.__sm__;if(s){e:{for(const a in s){t=a;break e}t=void 0}(this.i=t)&&(t=this.i,s=s!==null&&t in s?s[t]:void 0),this.data=s}else this.data=t}P(ur,Tn);function dr(){En.call(this),this.status=1}P(dr,En);function $e(t){this.g=t}P($e,lr),$e.prototype.ua=function(){$(this.g,"a")},$e.prototype.ta=function(t){$(this.g,new ur(t))},$e.prototype.sa=function(t){$(this.g,new dr)},$e.prototype.ra=function(){$(this.g,"b")},Q.prototype.send=Q.prototype.o,Q.prototype.open=Q.prototype.m,Q.prototype.close=Q.prototype.close,H.prototype.listen=H.prototype.K,M.prototype.listenOnce=M.prototype.L,M.prototype.getLastError=M.prototype.Ka,M.prototype.getLastErrorCode=M.prototype.Ba,M.prototype.getStatus=M.prototype.Z,M.prototype.getResponseJson=M.prototype.Oa,M.prototype.getResponseText=M.prototype.oa,M.prototype.send=M.prototype.ea,M.prototype.setWithCredentials=M.prototype.Ha}).apply(typeof Jt<"u"?Jt:typeof self<"u"?self:typeof window<"u"?window:{});const $r="@firebase/firestore",zr="4.7.12";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class W{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}W.UNAUTHENTICATED=new W(null),W.GOOGLE_CREDENTIALS=new W("google-credentials-uid"),W.FIRST_PARTY=new W("first-party-uid"),W.MOCK_USER=new W("mock-user");/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Rt="11.7.0";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Xe=new ii("@firebase/firestore");function ie(i,...e){if(Xe.logLevel<=O.DEBUG){const n=e.map(fi);Xe.debug(`Firestore (${Rt}): ${i}`,...n)}}function Js(i,...e){if(Xe.logLevel<=O.ERROR){const n=e.map(fi);Xe.error(`Firestore (${Rt}): ${i}`,...n)}}function Al(i,...e){if(Xe.logLevel<=O.WARN){const n=e.map(fi);Xe.warn(`Firestore (${Rt}): ${i}`,...n)}}function fi(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(i)}catch{return i}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Xs(i,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Ys(i,r,n)}function Ys(i,e,n){let r=`FIRESTORE (${Rt}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Js(r),new Error(r)}function yt(i,e,n,r){let o="Unexpected state";typeof n=="string"?o=n:r=n,i||Ys(e,o,r)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const J={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class X extends me{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class vt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Qs{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(W.UNAUTHENTICATED))}shutdown(){}}class Cl{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Pl{constructor(e){this.t=e,this.currentUser=W.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){yt(this.o===void 0,42304);let r=this.i;const o=b=>this.i!==r?(r=this.i,n(b)):Promise.resolve();let c=new vt;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new vt,e.enqueueRetryable(()=>o(this.currentUser))};const l=()=>{const b=c;e.enqueueRetryable(async()=>{await b.promise,await o(this.currentUser)})},m=b=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=b,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(b=>m(b)),setTimeout(()=>{if(!this.auth){const b=this.t.getImmediate({optional:!0});b?m(b):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new vt)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(yt(typeof r.accessToken=="string",31837,{l:r}),new Qs(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return yt(e===null||typeof e=="string",2055,{h:e}),new W(e)}}class Ol{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=W.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Rl{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Ol(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(W.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Nl{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,te(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){yt(this.o===void 0,3512);const r=c=>{c.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const l=c.token!==this.m;return this.m=c.token,ie("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>r(c))};const o=c=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>o(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Wr(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(yt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Wr(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function Ll(i){return i.name==="IndexedDbTransactionError"}const ei="(default)";class hn{constructor(e,n){this.projectId=e,this.database=n||ei}static empty(){return new hn("","")}get isDefaultDatabase(){return this.database===ei}isEqual(e){return e instanceof hn&&e.projectId===this.projectId&&e.database===this.database}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kr,C;(C=Kr||(Kr={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/new qs([4294967295,4294967295],0);/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Dl=41943040;/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ml=1048576;function Wn(){return typeof document<"u"?document:null}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ul{constructor(e,n,r=1e3,o=1.5,c=6e4){this.bi=e,this.timerId=n,this.u_=r,this.c_=o,this.l_=c,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const n=Math.floor(this.h_+this.d_()),r=Math.max(0,Date.now()-this.T_),o=Math.max(0,n-r);o>0&&ie("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.h_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,o,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class pi{constructor(e,n,r,o,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=o,this.removalCallback=c,this.deferred=new vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,o,c){const l=Date.now()+r,m=new pi(e,n,l,o,c);return m.start(r),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Gr,qr;(qr=Gr||(Gr={})).ya="default",qr.Cache="cache";/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function xl(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Jr=new Map;function jl(i,e,n,r){if(e===!0&&r===!0)throw new X(J.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function Fl(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Xs(12329,{type:typeof i})}function Hl(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new X(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fl(i);throw new X(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return i}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Zs="firestore.googleapis.com",Xr=!0;class Yr{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Zs,this.ssl=Xr}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Xr;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Dl;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ml)throw new X(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jl("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xl((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new X(J.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new X(J.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new X(J.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,r){return n.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class eo{constructor(e,n,r,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yr({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yr(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new kl;switch(n.type){case"firstParty":return new Rl(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new X(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Jr.get(e);n&&(ie("ComponentProvider","Removing Datastore"),Jr.delete(e),n.terminate())}(this),Promise.resolve()}}function Bl(i,e,n,r={}){var o;i=Hl(i,eo);const c=ni(e),l=i._getSettings(),m=Object.assign(Object.assign({},l),{emulatorOptions:i._getEmulatorOptions()}),b=`${e}:${n}`;c&&as(`https://${b}`),l.host!==Zs&&l.host!==b&&Al("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},l),{host:b,ssl:c,emulatorOptions:r});if(!Me(_,m)&&(i._setSettings(_),r.mockUserToken)){let S,A;if(typeof r.mockUserToken=="string")S=r.mockUserToken,A=W.MOCK_USER;else{S=Go(r.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const k=r.mockUserToken.sub||r.mockUserToken.user_id;if(!k)throw new X(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new W(k)}i._authCredentials=new Cl(new Qs(S,A))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Qr="AsyncQueue";class Zr{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new Ul(this,"async_queue_retry"),this.ju=()=>{const r=Wn();r&&ie(Qr,"Visibility state changed to "+r.visibilityState),this.y_.A_()},this.Hu=e;const n=Wn();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const n=Wn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const n=new vt;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!Ll(e))throw e;ie(Qr,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const n=this.Hu.then(()=>(this.Wu=!0,e().catch(r=>{throw this.Ku=r,this.Wu=!1,Js("INTERNAL UNHANDLED ERROR: ",es(r)),r}).then(r=>(this.Wu=!1,r))));return this.Hu=n,n}enqueueAfterDelay(e,n,r){this.Ju(),this.zu.indexOf(e)>-1&&(n=0);const o=pi.createAndSchedule(this,e,n,r,c=>this.Xu(c));return this.Uu.push(o),o}Ju(){this.Ku&&Xs(47125,{ec:es(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const n of this.Uu)if(n.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const n=this.Uu.indexOf(e);this.Uu.splice(n,1)}}function es(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Vl extends eo{constructor(e,n,r,o){super(e,n,r,o),this.type="firestore",this._queue=new Zr,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Zr(e),this._firestoreClient=void 0,await e}}}function $l(i,e){const n=typeof i=="object"?i:us(),r=typeof i=="string"?i:ei,o=si(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const c=Wo("firestore");c&&Bl(o,...c)}return o}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class zl{constructor(e){this._methodName=e}}(function(i,e=!0){(function(n){Rt=n})(Qe),Je(new Ue("firestore",(n,{instanceIdentifier:r,options:o})=>{const c=n.getProvider("app").getImmediate(),l=new Vl(new Pl(n.getProvider("auth-internal")),new Nl(c,n.getProvider("app-check-internal")),function(m,b){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new X(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hn(m.options.projectId,b)}(c,r),c);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Ce($r,zr,i),Ce($r,zr,"esm2017")})();console.log("main.js 로드됨");const Wl={apiKey:"AIzaSyA4AYUN2X_84iWC4w3avQ8m6K_DrpRnSro",authDomain:"vocabularycards-aa036.firebaseapp.com",projectId:"vocabularycards-aa036",storageBucket:"vocabularycards-aa036.appspot.com",messagingSenderId:"982130486893",appId:"1:982130486893:web:f3f0e11eb27b098d649964"};let oe,It;try{const i=ls(Wl);oe=El(i),It=$l(i),console.log("Firebase 초기화 성공",{auth:oe})}catch(i){throw console.error("Firebase 초기화 오류:",i.message),alert("Firebase 초기화 실패: "+i.message),new Error("Firebase 초기화 실패")}let _t=[],Tt=0,Et=null;oe.onAuthStateChanged(i=>{console.log("인증 상태 변경:",i?i.email:"로그아웃"),Et=i;const e=document.querySelector(".card-section"),n=document.querySelector(".input-section"),r=document.querySelector('button[onclick="logout()"]'),o=document.getElementById("auth-section");i?(e.style.display="block",n.style.display="block",r.style.display="inline-block",o.style.display="none",loadCards(),document.getElementById("user-status").textContent=`로그인: ${i.email}`):(e.style.display="none",n.style.display="none",r.style.display="none",o.style.display="block",document.getElementById("user-status").textContent="로그아웃 상태")});window.login=function(){if(!oe){console.error("auth가 초기화되지 않았습니다."),alert("Firebase가 초기화되지 않았습니다. 페이지를 새로고침하세요.");return}console.log("로그인 버튼 클릭됨");const i=prompt("이메일을 입력하세요:"),e=prompt("비밀번호를 입력하세요:");if(!i||!e){alert("이메일과 비밀번호를 입력해주세요!");return}console.log("로그인 시도 - 이메일:",i,"비밀번호:",e),oe.signInWithEmailAndPassword(i,e).then(n=>{console.log("로그인 성공:",n.user.email)}).catch(n=>{console.error("로그인 오류:",n.message,"코드:",n.code),alert("로그인 실패: "+n.message+" (코드: "+n.code+")")})};window.signup=function(){if(!oe){console.error("auth가 초기화되지 않았습니다."),alert("Firebase가 초기화되지 않았습니다. 페이지를 새로고침하세요.");return}console.log("회원가입 버튼 클릭됨");const i=prompt("이메일을 입력하세요:"),e=prompt("비밀번호를 입력하세요:");if(!i||!e){alert("이메일과 비밀번호를 입력해주세요!");return}if(!i.includes("@")||i.length<5){alert("유효한 이메일 주소를 입력해주세요!");return}if(e.length<6){alert("비밀번호는 최소 6자 이상이어야 합니다!");return}console.log("회원가입 시도 - 이메일:",i,"비밀번호:",e),console.log("auth 객체 상태:",oe?"auth 존재":"auth 없음");try{console.log("auth.createUserWithEmailAndPassword 호출 시작"),uh(oe,i,e).then(n=>{console.log("회원가입 성공:",n.user.email),alert("회원가입 성공! 로그인 상태입니다.")}).catch(n=>{console.error("회원가입 오류:",n.message,"코드:",n.code),alert("회원가입 실패: "+n.message+" (코드: "+n.code+")")}).finally(()=>{console.log("회원가입 요청 완료 (성공/실패 여부와 관계없이)")}),console.log("auth.createUserWithEmailAndPassword 호출 완료")}catch(n){console.error("회원가입 중 예외 발생:",n.message),alert("회원가입 중 예외 발생: "+n.message)}};window.logout=function(){if(!oe){console.error("auth가 초기화되지 않았습니다."),alert("Firebase가 초기화되지 않았습니다.");return}console.log("로그아웃 버튼 클릭됨"),oe.signOut()};window.addCard=function(){if(!It||!Et){console.error("db 또는 currentUser가 초기화되지 않았습니다."),alert("Firebase 또는 사용자 상태가 초기화되지 않았습니다.");return}console.log("새 단어 추가 버튼 클릭됨");const i=prompt("영단어를 입력하세요:"),e=prompt("한글 뜻을 입력하세요:");i&&e&&It.collection("users").doc(Et.uid).collection("cards").add({word:i,meaning:e,timestamp:zl.serverTimestamp()}).then(()=>loadCards())};window.flipCard=function(){console.log("카드 클릭됨"),document.querySelector(".card").classList.toggle("flipped")};window.loadCards=function(){if(console.log("카드 로드 시도"),!It||!Et){console.error("db 또는 currentUser가 초기화되지 않았습니다.");return}It.collection("users").doc(Et.uid).collection("cards").orderBy("timestamp","desc").get().then(i=>{_t=i.docs.map(e=>({id:e.id,...e.data()})),Tt=0,updateCard()}).catch(i=>console.error("카드 로드 오류:",i))};window.updateCard=function(){if(console.log("카드 업데이트"),_t.length>0){const i=_t[Tt];document.getElementById("word").textContent=i.word,document.getElementById("meaning").textContent=i.meaning,document.querySelector(".card").classList.remove("flipped")}else document.getElementById("word").textContent="단어를 추가하세요!",document.getElementById("meaning").textContent="뜻을 추가하세요!"};window.checkAnswer=function(){console.log("정답 확인 버튼 클릭됨");const i=document.getElementById("userWord").value.trim(),e=document.getElementById("userMeaning").value.trim(),n=_t[Tt];if(n){const r=i.toLowerCase()===n.word.toLowerCase(),o=e===n.meaning,c=document.getElementById("result");r&&o?(c.textContent="정답입니다!",c.style.color="#4CAF50",nextCard()):(c.textContent=`오답입니다! 정답: ${n.word} - ${n.meaning}`,c.style.color="#ff4444")}else result.textContent="먼저 단어를 추가하세요!",result.style.color="#ff4444";document.getElementById("userWord").value="",document.getElementById("userMeaning").value=""};window.nextCard=function(){console.log("다음 카드 버튼 클릭됨"),Tt=(Tt+1)%_t.length,updateCard()};
