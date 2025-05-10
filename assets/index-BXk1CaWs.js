(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();const Ho=()=>{};var gr={};/**
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
 */const is=function(i){const e=[];let n=0;for(let r=0;r<i.length;r++){let o=i.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++r)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},Vo=function(i){const e=[];let n=0,r=0;for(;n<i.length;){const o=i[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=i[n++];e[r++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=i[n++],h=i[n++],g=i[n++],w=((o&7)<<18|(c&63)<<12|(h&63)<<6|g&63)-65536;e[r++]=String.fromCharCode(55296+(w>>10)),e[r++]=String.fromCharCode(56320+(w&1023))}else{const c=i[n++],h=i[n++];e[r++]=String.fromCharCode((o&15)<<12|(c&63)<<6|h&63)}}return e.join("")},rs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<i.length;o+=3){const c=i[o],h=o+1<i.length,g=h?i[o+1]:0,w=o+2<i.length,E=w?i[o+2]:0,b=c>>2,C=(c&3)<<4|g>>4;let S=(g&15)<<2|E>>6,x=E&63;w||(x=64,h||(S=64)),r.push(n[b],n[C],n[S],n[x])}return r.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(is(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Vo(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<i.length;){const c=n[i.charAt(o++)],g=o<i.length?n[i.charAt(o)]:0;++o;const E=o<i.length?n[i.charAt(o)]:64;++o;const C=o<i.length?n[i.charAt(o)]:64;if(++o,c==null||g==null||E==null||C==null)throw new $o;const S=c<<2|g>>4;if(r.push(S),E!==64){const x=g<<4&240|E>>2;if(r.push(x),C!==64){const R=E<<6&192|C;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class $o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wo=function(i){const e=is(i);return rs.encodeByteArray(e,!0)},tn=function(i){return Wo(i).replace(/\./g,"")},ss=function(i){try{return rs.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function zo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Go=()=>zo().__FIREBASE_DEFAULTS__,Ko=()=>{if(typeof process>"u"||typeof gr>"u")return;const i=gr.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},qo=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&ss(i[1]);return e&&JSON.parse(e)},ii=()=>{try{return Ho()||Go()||Ko()||qo()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},os=i=>{var e,n;return(n=(e=ii())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},Jo=i=>{const e=os(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},as=()=>{var i;return(i=ii())===null||i===void 0?void 0:i.config},cs=i=>{var e;return(e=ii())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class Xo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Yo(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",o=i.iat||0,c=i.sub||i.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},i);return[tn(JSON.stringify(n)),tn(JSON.stringify(h)),""].join(".")}/**
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
 */function K(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(K())}function Zo(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ea(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function ta(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function na(){const i=K();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function ia(){try{return typeof indexedDB=="object"}catch{return!1}}function ra(){return new Promise((i,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),i(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var c;e(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){e(n)}})}/**
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
 */const sa="FirebaseError";class me extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sa,Object.setPrototypeOf(this,me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,St.prototype.create)}}class St{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},o=`${this.service}/${e}`,c=this.errors[e],h=c?oa(c,r):"Error",g=`${this.serviceName}: ${h} (${o}).`;return new me(o,g,r)}}function oa(i,e){return i.replace(aa,(n,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const aa=/\{\$([^}]+)}/g;function ca(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Me(i,e){if(i===e)return!0;const n=Object.keys(i),r=Object.keys(e);for(const o of n){if(!r.includes(o))return!1;const c=i[o],h=e[o];if(mr(c)&&mr(h)){if(!Me(c,h))return!1}else if(c!==h)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function mr(i){return i!==null&&typeof i=="object"}/**
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
 */function Ct(i){const e=[];for(const[n,r]of Object.entries(i))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function la(i,e){const n=new ha(i,e);return n.subscribe.bind(n)}class ha{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let o;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ua(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:r},o.next===void 0&&(o.next=Bn),o.error===void 0&&(o.error=Bn),o.complete===void 0&&(o.complete=Bn);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ua(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Bn(){}/**
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
 */function ri(i){return i.endsWith(".cloudworkstations.dev")}async function ls(i){return(await fetch(i,{credentials:"include"})).ok}class Ue{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Le="[DEFAULT]";/**
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
 */class da{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Xo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pa(e))try{this.getOrInitializeService({instanceIdentifier:Le})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:o});r.resolve(c)}catch{}}}}clearInstance(e=Le){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Le){return this.instances.has(e)}getOptions(e=Le){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[c,h]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(c);r===g&&h.resolve(o)}return o}onInit(e,n){var r;const o=this.normalizeInstanceIdentifier(n),c=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;c.add(e),this.onInitCallbacks.set(o,c);const h=this.instances.get(o);return h&&e(h,o),()=>{c.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fa(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Le){return this.component?this.component.multipleInstances?e:Le:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fa(i){return i===Le?void 0:i}function pa(i){return i.instantiationMode==="EAGER"}/**
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
 */class ga{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new da(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var O;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(O||(O={}));const ma={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},va=O.INFO,ya={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},_a=(i,e,...n)=>{if(e<i.logLevel)return;const r=new Date().toISOString(),o=ya[e];if(o)console[o](`[${r}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class si{constructor(e){this.name=e,this._logLevel=va,this._logHandler=_a,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ma[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}const wa=(i,e)=>e.some(n=>i instanceof n);let vr,yr;function Ia(){return vr||(vr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ea(){return yr||(yr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hs=new WeakMap,qn=new WeakMap,us=new WeakMap,Hn=new WeakMap,oi=new WeakMap;function Ta(i){const e=new Promise((n,r)=>{const o=()=>{i.removeEventListener("success",c),i.removeEventListener("error",h)},c=()=>{n(Se(i.result)),o()},h=()=>{r(i.error),o()};i.addEventListener("success",c),i.addEventListener("error",h)});return e.then(n=>{n instanceof IDBCursor&&hs.set(n,i)}).catch(()=>{}),oi.set(e,i),e}function Aa(i){if(qn.has(i))return;const e=new Promise((n,r)=>{const o=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",h),i.removeEventListener("abort",h)},c=()=>{n(),o()},h=()=>{r(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",c),i.addEventListener("error",h),i.addEventListener("abort",h)});qn.set(i,e)}let Jn={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return qn.get(i);if(e==="objectStoreNames")return i.objectStoreNames||us.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Se(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function ba(i){Jn=i(Jn)}function Sa(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=i.call(Vn(this),e,...n);return us.set(r,e.sort?e.sort():[e]),Se(r)}:Ea().includes(i)?function(...e){return i.apply(Vn(this),e),Se(hs.get(this))}:function(...e){return Se(i.apply(Vn(this),e))}}function Ca(i){return typeof i=="function"?Sa(i):(i instanceof IDBTransaction&&Aa(i),wa(i,Ia())?new Proxy(i,Jn):i)}function Se(i){if(i instanceof IDBRequest)return Ta(i);if(Hn.has(i))return Hn.get(i);const e=Ca(i);return e!==i&&(Hn.set(i,e),oi.set(e,i)),e}const Vn=i=>oi.get(i);function Pa(i,e,{blocked:n,upgrade:r,blocking:o,terminated:c}={}){const h=indexedDB.open(i,e),g=Se(h);return r&&h.addEventListener("upgradeneeded",w=>{r(Se(h.result),w.oldVersion,w.newVersion,Se(h.transaction),w)}),n&&h.addEventListener("blocked",w=>n(w.oldVersion,w.newVersion,w)),g.then(w=>{c&&w.addEventListener("close",()=>c()),o&&w.addEventListener("versionchange",E=>o(E.oldVersion,E.newVersion,E))}).catch(()=>{}),g}const Ra=["get","getKey","getAll","getAllKeys","count"],ka=["put","add","delete","clear"],$n=new Map;function _r(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if($n.get(e))return $n.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=ka.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Ra.includes(n)))return;const c=async function(h,...g){const w=this.transaction(h,o?"readwrite":"readonly");let E=w.store;return r&&(E=E.index(g.shift())),(await Promise.all([E[n](...g),o&&w.done]))[0]};return $n.set(e,c),c}ba(i=>({...i,get:(e,n,r)=>_r(e,n)||i.get(e,n,r),has:(e,n)=>!!_r(e,n)||i.has(e,n)}));/**
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
 */class Oa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Da(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Da(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xn="@firebase/app",wr="0.12.1";/**
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
 */const fe=new si("@firebase/app"),Na="@firebase/app-compat",La="@firebase/analytics-compat",Ma="@firebase/analytics",Ua="@firebase/app-check-compat",xa="@firebase/app-check",Fa="@firebase/auth",ja="@firebase/auth-compat",Ba="@firebase/database",Ha="@firebase/data-connect",Va="@firebase/database-compat",$a="@firebase/functions",Wa="@firebase/functions-compat",za="@firebase/installations",Ga="@firebase/installations-compat",Ka="@firebase/messaging",qa="@firebase/messaging-compat",Ja="@firebase/performance",Xa="@firebase/performance-compat",Ya="@firebase/remote-config",Qa="@firebase/remote-config-compat",Za="@firebase/storage",ec="@firebase/storage-compat",tc="@firebase/firestore",nc="@firebase/vertexai",ic="@firebase/firestore-compat",rc="firebase",sc="11.7.1";/**
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
 */const Yn="[DEFAULT]",oc={[Xn]:"fire-core",[Na]:"fire-core-compat",[Ma]:"fire-analytics",[La]:"fire-analytics-compat",[xa]:"fire-app-check",[Ua]:"fire-app-check-compat",[Fa]:"fire-auth",[ja]:"fire-auth-compat",[Ba]:"fire-rtdb",[Ha]:"fire-data-connect",[Va]:"fire-rtdb-compat",[$a]:"fire-fn",[Wa]:"fire-fn-compat",[za]:"fire-iid",[Ga]:"fire-iid-compat",[Ka]:"fire-fcm",[qa]:"fire-fcm-compat",[Ja]:"fire-perf",[Xa]:"fire-perf-compat",[Ya]:"fire-rc",[Qa]:"fire-rc-compat",[Za]:"fire-gcs",[ec]:"fire-gcs-compat",[tc]:"fire-fst",[ic]:"fire-fst-compat",[nc]:"fire-vertex","fire-js":"fire-js",[rc]:"fire-js-all"};/**
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
 */const nn=new Map,ac=new Map,Qn=new Map;function Ir(i,e){try{i.container.addComponent(e)}catch(n){fe.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function Je(i){const e=i.name;if(Qn.has(e))return fe.debug(`There were multiple attempts to register component ${e}.`),!1;Qn.set(e,i);for(const n of nn.values())Ir(n,i);for(const n of ac.values())Ir(n,i);return!0}function ai(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function te(i){return i==null?!1:i.settings!==void 0}/**
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
 */const cc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ce=new St("app","Firebase",cc);/**
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
 */class lc{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ue("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ce.create("app-deleted",{appName:this._name})}}/**
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
 */const Qe=sc;function ds(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Yn,automaticDataCollectionEnabled:!1},e),o=r.name;if(typeof o!="string"||!o)throw Ce.create("bad-app-name",{appName:String(o)});if(n||(n=as()),!n)throw Ce.create("no-options");const c=nn.get(o);if(c){if(Me(n,c.options)&&Me(r,c.config))return c;throw Ce.create("duplicate-app",{appName:o})}const h=new ga(o);for(const w of Qn.values())h.addComponent(w);const g=new lc(n,r,h);return nn.set(o,g),g}function fs(i=Yn){const e=nn.get(i);if(!e&&i===Yn&&as())return ds();if(!e)throw Ce.create("no-app",{appName:i});return e}function Pe(i,e,n){var r;let o=(r=oc[i])!==null&&r!==void 0?r:i;n&&(o+=`-${n}`);const c=o.match(/\s|\//),h=e.match(/\s|\//);if(c||h){const g=[`Unable to register library "${o}" with version "${e}":`];c&&g.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&h&&g.push("and"),h&&g.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fe.warn(g.join(" "));return}Je(new Ue(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const hc="firebase-heartbeat-database",uc=1,wt="firebase-heartbeat-store";let Wn=null;function ps(){return Wn||(Wn=Pa(hc,uc,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(wt)}catch(n){console.warn(n)}}}}).catch(i=>{throw Ce.create("idb-open",{originalErrorMessage:i.message})})),Wn}async function dc(i){try{const n=(await ps()).transaction(wt),r=await n.objectStore(wt).get(gs(i));return await n.done,r}catch(e){if(e instanceof me)fe.warn(e.message);else{const n=Ce.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fe.warn(n.message)}}}async function Er(i,e){try{const r=(await ps()).transaction(wt,"readwrite");await r.objectStore(wt).put(e,gs(i)),await r.done}catch(n){if(n instanceof me)fe.warn(n.message);else{const r=Ce.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fe.warn(r.message)}}}function gs(i){return`${i.name}!${i.options.appId}`}/**
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
 */const fc=1024,pc=30;class gc{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vc(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Tr();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(h=>h.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>pc){const h=yc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){fe.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Tr(),{heartbeatsToSend:r,unsentEntries:o}=mc(this._heartbeatsCache.heartbeats),c=tn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return fe.warn(n),""}}}function Tr(){return new Date().toISOString().substring(0,10)}function mc(i,e=fc){const n=[];let r=i.slice();for(const o of i){const c=n.find(h=>h.agent===o.agent);if(c){if(c.dates.push(o.date),Ar(n)>e){c.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Ar(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class vc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ia()?ra().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await dc(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Er(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Er(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Ar(i){return tn(JSON.stringify({version:2,heartbeats:i})).length}function yc(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let r=1;r<i.length;r++)i[r].date<n&&(n=i[r].date,e=r);return e}/**
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
 */function _c(i){Je(new Ue("platform-logger",e=>new Oa(e),"PRIVATE")),Je(new Ue("heartbeat",e=>new gc(e),"PRIVATE")),Pe(Xn,wr,i),Pe(Xn,wr,"esm2017"),Pe("fire-js","")}_c("");var wc="firebase",Ic="11.7.1";/**
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
 */Pe(wc,Ic,"app");function ci(i,e){var n={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&e.indexOf(r)<0&&(n[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(i);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(i,r[o])&&(n[r[o]]=i[r[o]]);return n}function ms(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ec=ms,vs=new St("auth","Firebase",ms());/**
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
 */const rn=new si("@firebase/auth");function Tc(i,...e){rn.logLevel<=O.WARN&&rn.warn(`Auth (${Qe}): ${i}`,...e)}function Yt(i,...e){rn.logLevel<=O.ERROR&&rn.error(`Auth (${Qe}): ${i}`,...e)}/**
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
 */function pe(i,...e){throw li(i,...e)}function re(i,...e){return li(i,...e)}function ys(i,e,n){const r=Object.assign(Object.assign({},Ec()),{[e]:n});return new St("auth","Firebase",r).create(e,{appName:i.name})}function Re(i){return ys(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function li(i,...e){if(typeof i!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(n,...r)}return vs.create(i,...e)}function A(i,e,...n){if(!i)throw li(e,...n)}function ue(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Yt(e),new Error(e)}function ge(i,e){i||ue(e)}/**
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
 */function Zn(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function Ac(){return br()==="http:"||br()==="https:"}function br(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function bc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ac()||ea()||"connection"in navigator)?navigator.onLine:!0}function Sc(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Pt{constructor(e,n){this.shortDelay=e,this.longDelay=n,ge(n>e,"Short delay should be less than long delay!"),this.isMobile=Qo()||ta()}get(){return bc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function hi(i,e){ge(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class _s{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ue("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ue("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ue("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Cc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Pc=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Rc=new Pt(3e4,6e4);function Rt(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function je(i,e,n,r,o={}){return ws(i,o,async()=>{let c={},h={};r&&(e==="GET"?h=r:c={body:JSON.stringify(r)});const g=Ct(Object.assign({key:i.config.apiKey},h)).slice(1),w=await i._getAdditionalHeaders();w["Content-Type"]="application/json",i.languageCode&&(w["X-Firebase-Locale"]=i.languageCode);const E=Object.assign({method:e,headers:w},c);return Zo()||(E.referrerPolicy="no-referrer"),i.emulatorConfig&&ri(i.emulatorConfig.host)&&(E.credentials="include"),_s.fetch()(await Es(i,i.config.apiHost,n,g),E)})}async function ws(i,e,n){i._canInitEmulator=!1;const r=Object.assign(Object.assign({},Cc),e);try{const o=new Oc(i),c=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw Jt(i,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const g=c.ok?h.errorMessage:h.error.message,[w,E]=g.split(" : ");if(w==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jt(i,"credential-already-in-use",h);if(w==="EMAIL_EXISTS")throw Jt(i,"email-already-in-use",h);if(w==="USER_DISABLED")throw Jt(i,"user-disabled",h);const b=r[w]||w.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw ys(i,b,E);pe(i,b)}}catch(o){if(o instanceof me)throw o;pe(i,"network-request-failed",{message:String(o)})}}async function Is(i,e,n,r,o={}){const c=await je(i,e,n,r,o);return"mfaPendingCredential"in c&&pe(i,"multi-factor-auth-required",{_serverResponse:c}),c}async function Es(i,e,n,r){const o=`${e}${n}?${r}`,c=i,h=c.config.emulator?hi(i.config,o):`${i.config.apiScheme}://${o}`;return Pc.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}function kc(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Oc{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(re(this.auth,"network-request-failed")),Rc.get())})}}function Jt(i,e,n){const r={appName:i.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=re(i,e,r);return o.customData._tokenResponse=n,o}function Sr(i){return i!==void 0&&i.enterprise!==void 0}class Dc{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return kc(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Nc(i,e){return je(i,"GET","/v2/recaptchaConfig",Rt(i,e))}/**
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
 */async function Lc(i,e){return je(i,"POST","/v1/accounts:delete",e)}async function sn(i,e){return je(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function vt(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Mc(i,e=!1){const n=Ye(i),r=await n.getIdToken(e),o=ui(r);A(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,h=c==null?void 0:c.sign_in_provider;return{claims:o,token:r,authTime:vt(zn(o.auth_time)),issuedAtTime:vt(zn(o.iat)),expirationTime:vt(zn(o.exp)),signInProvider:h||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function zn(i){return Number(i)*1e3}function ui(i){const[e,n,r]=i.split(".");if(e===void 0||n===void 0||r===void 0)return Yt("JWT malformed, contained fewer than 3 sections"),null;try{const o=ss(n);return o?JSON.parse(o):(Yt("Failed to decode base64 JWT payload"),null)}catch(o){return Yt("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Cr(i){const e=ui(i);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function It(i,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof me&&Uc(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function Uc({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class xc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ei{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vt(this.lastLoginAt),this.creationTime=vt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function on(i){var e;const n=i.auth,r=await i.getIdToken(),o=await It(i,sn(n,{idToken:r}));A(o==null?void 0:o.users.length,n,"internal-error");const c=o.users[0];i._notifyReloadListener(c);const h=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?Ts(c.providerUserInfo):[],g=jc(i.providerData,h),w=i.isAnonymous,E=!(i.email&&c.passwordHash)&&!(g!=null&&g.length),b=w?E:!1,C={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:g,metadata:new ei(c.createdAt,c.lastLoginAt),isAnonymous:b};Object.assign(i,C)}async function Fc(i){const e=Ye(i);await on(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jc(i,e){return[...i.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function Ts(i){return i.map(e=>{var{providerId:n}=e,r=ci(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Bc(i,e){const n=await ws(i,{},async()=>{const r=Ct({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=i.config,h=await Es(i,o,"/v1/token",`key=${c}`),g=await i._getAdditionalHeaders();return g["Content-Type"]="application/x-www-form-urlencoded",_s.fetch()(h,{method:"POST",headers:g,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Hc(i,e){return je(i,"POST","/v2/accounts:revokeToken",Rt(i,e))}/**
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
 */class Ge{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){A(e.length!==0,"internal-error");const n=Cr(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:o,expiresIn:c}=await Bc(e,n);this.updateTokensAndExpiration(r,o,Number(c))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:o,expirationTime:c}=n,h=new Ge;return r&&(A(typeof r=="string","internal-error",{appName:e}),h.refreshToken=r),o&&(A(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),c&&(A(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ge,this.toJSON())}_performRefresh(){return ue("not implemented")}}/**
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
 */function Ie(i,e){A(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class ne{constructor(e){var{uid:n,auth:r,stsTokenManager:o}=e,c=ci(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new ei(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const n=await It(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Mc(this,e)}reload(){return Fc(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ne(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await on(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(te(this.auth.app))return Promise.reject(Re(this.auth));const e=await this.getIdToken();return await It(this,Lc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,o,c,h,g,w,E,b;const C=(r=n.displayName)!==null&&r!==void 0?r:void 0,S=(o=n.email)!==null&&o!==void 0?o:void 0,x=(c=n.phoneNumber)!==null&&c!==void 0?c:void 0,R=(h=n.photoURL)!==null&&h!==void 0?h:void 0,U=(g=n.tenantId)!==null&&g!==void 0?g:void 0,L=(w=n._redirectEventId)!==null&&w!==void 0?w:void 0,ae=(E=n.createdAt)!==null&&E!==void 0?E:void 0,Y=(b=n.lastLoginAt)!==null&&b!==void 0?b:void 0,{uid:j,emailVerified:Z,isAnonymous:ke,providerData:q,stsTokenManager:v}=n;A(j&&v,e,"internal-error");const u=Ge.fromJSON(this.name,v);A(typeof j=="string",e,"internal-error"),Ie(C,e.name),Ie(S,e.name),A(typeof Z=="boolean",e,"internal-error"),A(typeof ke=="boolean",e,"internal-error"),Ie(x,e.name),Ie(R,e.name),Ie(U,e.name),Ie(L,e.name),Ie(ae,e.name),Ie(Y,e.name);const f=new ne({uid:j,auth:e,email:S,emailVerified:Z,displayName:C,isAnonymous:ke,photoURL:R,phoneNumber:x,tenantId:U,stsTokenManager:u,createdAt:ae,lastLoginAt:Y});return q&&Array.isArray(q)&&(f.providerData=q.map(p=>Object.assign({},p))),L&&(f._redirectEventId=L),f}static async _fromIdTokenResponse(e,n,r=!1){const o=new Ge;o.updateFromServerResponse(n);const c=new ne({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await on(c),c}static async _fromGetAccountInfoResponse(e,n,r){const o=n.users[0];A(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?Ts(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),g=new Ge;g.updateFromIdToken(r);const w=new ne({uid:o.localId,auth:e,stsTokenManager:g,isAnonymous:h}),E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new ei(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(w,E),w}}/**
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
 */const Pr=new Map;function de(i){ge(i instanceof Function,"Expected a class definition");let e=Pr.get(i);return e?(ge(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Pr.set(i,e),e)}/**
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
 */class As{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}As.type="NONE";const Rr=As;/**
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
 */function Qt(i,e,n){return`firebase:${i}:${e}:${n}`}class Ke{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:o,name:c}=this.auth;this.fullUserKey=Qt(this.userKey,o.apiKey,c),this.fullPersistenceKey=Qt("persistence",o.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await sn(this.auth,{idToken:e}).catch(()=>{});return n?ne._fromGetAccountInfoResponse(this.auth,n,e):null}return ne._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ke(de(Rr),e,r);const o=(await Promise.all(n.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let c=o[0]||de(Rr);const h=Qt(r,e.config.apiKey,e.name);let g=null;for(const E of n)try{const b=await E._get(h);if(b){let C;if(typeof b=="string"){const S=await sn(e,{idToken:b}).catch(()=>{});if(!S)break;C=await ne._fromGetAccountInfoResponse(e,S,b)}else C=ne._fromJSON(e,b);E!==c&&(g=C),c=E;break}}catch{}const w=o.filter(E=>E._shouldAllowMigration);return!c._shouldAllowMigration||!w.length?new Ke(c,e,r):(c=w[0],g&&await c._set(h,g.toJSON()),await Promise.all(n.map(async E=>{if(E!==c)try{await E._remove(h)}catch{}})),new Ke(c,e,r))}}/**
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
 */function kr(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ps(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bs(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ks(e))return"Blackberry";if(Os(e))return"Webos";if(Ss(e))return"Safari";if((e.includes("chrome/")||Cs(e))&&!e.includes("edge/"))return"Chrome";if(Rs(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bs(i=K()){return/firefox\//i.test(i)}function Ss(i=K()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cs(i=K()){return/crios\//i.test(i)}function Ps(i=K()){return/iemobile/i.test(i)}function Rs(i=K()){return/android/i.test(i)}function ks(i=K()){return/blackberry/i.test(i)}function Os(i=K()){return/webos/i.test(i)}function di(i=K()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Vc(i=K()){var e;return di(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $c(){return na()&&document.documentMode===10}function Ds(i=K()){return di(i)||Rs(i)||Os(i)||ks(i)||/windows phone/i.test(i)||Ps(i)}/**
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
 */function Ns(i,e=[]){let n;switch(i){case"Browser":n=kr(K());break;case"Worker":n=`${kr(K())}-${i}`;break;default:n=i}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qe}/${r}`}/**
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
 */class Wc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=c=>new Promise((h,g)=>{try{const w=e(c);h(w)}catch(w){g(w)}});r.onAbort=n,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function zc(i,e={}){return je(i,"GET","/v2/passwordPolicy",Rt(i,e))}/**
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
 */const Gc=6;class Kc{constructor(e){var n,r,o,c;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=h.minPasswordLength)!==null&&n!==void 0?n:Gc,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,o,c,h,g;const w={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,w),this.validatePasswordCharacterOptions(e,w),w.isValid&&(w.isValid=(n=w.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),w.isValid&&(w.isValid=(r=w.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),w.isValid&&(w.isValid=(o=w.containsLowercaseLetter)!==null&&o!==void 0?o:!0),w.isValid&&(w.isValid=(c=w.containsUppercaseLetter)!==null&&c!==void 0?c:!0),w.isValid&&(w.isValid=(h=w.containsNumericCharacter)!==null&&h!==void 0?h:!0),w.isValid&&(w.isValid=(g=w.containsNonAlphanumericCharacter)!==null&&g!==void 0?g:!0),w}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class qc{constructor(e,n,r,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Or(this),this.idTokenSubscription=new Or(this),this.beforeStateQueue=new Wc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vs,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=de(n)),this._initializationPromise=this.queue(async()=>{var r,o,c;if(!this._deleted&&(this.persistenceManager=await Ke.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await sn(this,{idToken:e}),r=await ne._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(te(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(g=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(g,g))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,g=o==null?void 0:o._redirectEventId,w=await this.tryRedirectSignIn(e);(!h||h===g)&&(w!=null&&w.user)&&(o=w.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await on(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Sc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(te(this.app))return Promise.reject(Re(this));const n=e?Ye(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return te(this.app)?Promise.reject(Re(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return te(this.app)?Promise.reject(Re(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(de(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zc(this),n=new Kc(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new St("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Hc(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&de(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await Ke.create(this,[de(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,o){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let h=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(g,this,"internal-error"),g.then(()=>{h||c(this.currentUser)}),typeof n=="function"){const w=e.addObserver(n,r,o);return()=>{h=!0,w()}}else{const w=e.addObserver(n);return()=>{h=!0,w()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ns(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;if(te(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Tc(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ze(i){return Ye(i)}class Or{constructor(e){this.auth=e,this.observer=null,this.addObserver=la(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let un={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Jc(i){un=i}function Ls(i){return un.loadJS(i)}function Xc(){return un.recaptchaEnterpriseScript}function Yc(){return un.gapiScript}function Qc(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class Zc{constructor(){this.enterprise=new el}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class el{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const tl="recaptcha-enterprise",Ms="NO_RECAPTCHA";class nl{constructor(e){this.type=tl,this.auth=Ze(e)}async verify(e="verify",n=!1){async function r(c){if(!n){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(h,g)=>{Nc(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(w=>{if(w.recaptchaKey===void 0)g(new Error("recaptcha Enterprise site key undefined"));else{const E=new Dc(w);return c.tenantId==null?c._agentRecaptchaConfig=E:c._tenantRecaptchaConfigs[c.tenantId]=E,h(E.siteKey)}}).catch(w=>{g(w)})})}function o(c,h,g){const w=window.grecaptcha;Sr(w)?w.enterprise.ready(()=>{w.enterprise.execute(c,{action:e}).then(E=>{h(E)}).catch(()=>{h(Ms)})}):g(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Zc().execute("siteKey",{action:"verify"}):new Promise((c,h)=>{r(this.auth).then(g=>{if(!n&&Sr(window.grecaptcha))o(g,c,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let w=Xc();w.length!==0&&(w+=g),Ls(w).then(()=>{o(g,c,h)}).catch(E=>{h(E)})}}).catch(g=>{h(g)})})}}async function Dr(i,e,n,r=!1,o=!1){const c=new nl(i);let h;if(o)h=Ms;else try{h=await c.verify(n)}catch{h=await c.verify(n,!0)}const g=Object.assign({},e);return r?Object.assign(g,{captchaResp:h}):Object.assign(g,{captchaResponse:h}),Object.assign(g,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(g,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),g}async function il(i,e,n,r,o){var c;if(!((c=i._getRecaptchaConfig())===null||c===void 0)&&c.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Dr(i,e,n,n==="getOobCode");return r(i,h)}else return r(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const g=await Dr(i,e,n,n==="getOobCode");return r(i,g)}else return Promise.reject(h)})}/**
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
 */function rl(i,e){const n=ai(i,"auth");if(n.isInitialized()){const o=n.getImmediate(),c=n.getOptions();if(Me(c,e??{}))return o;pe(o,"already-initialized")}return n.initialize({options:e})}function sl(i,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(de);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ol(i,e,n){const r=Ze(i);A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,c=Us(e),{host:h,port:g}=al(e),w=g===null?"":`:${g}`,E={url:`${c}//${h}${w}/`},b=Object.freeze({host:h,port:g,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){A(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),A(Me(E,r.config.emulator)&&Me(b,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=E,r.emulatorConfig=b,r.settings.appVerificationDisabledForTesting=!0,cl(),ri(h)&&ls(`${c}//${h}${w}`)}function Us(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function al(i){const e=Us(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const c=o[1];return{host:c,port:Nr(r.substr(c.length+1))}}else{const[c,h]=r.split(":");return{host:c,port:Nr(h)}}}function Nr(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function cl(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class xs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ue("not implemented")}_getIdTokenResponse(e){return ue("not implemented")}_linkToIdToken(e,n){return ue("not implemented")}_getReauthenticationResolver(e){return ue("not implemented")}}/**
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
 */async function qe(i,e){return Is(i,"POST","/v1/accounts:signInWithIdp",Rt(i,e))}/**
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
 */const ll="http://localhost";class xe extends xs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=n,c=ci(n,["providerId","signInMethod"]);if(!r||!o)return null;const h=new xe(r,o);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const n=this.buildRequest();return qe(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qe(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qe(e,n)}buildRequest(){const e={requestUri:ll,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ct(n)}return e}}/**
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
 */class Fs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class kt extends Fs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ee extends kt{constructor(){super("facebook.com")}static credential(e){return xe._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ee.credentialFromTaggedObject(e)}static credentialFromError(e){return Ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ee.credential(e.oauthAccessToken)}catch{return null}}}Ee.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ee.PROVIDER_ID="facebook.com";/**
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
 */class Te extends kt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xe._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Te.credential(n,r)}catch{return null}}}Te.GOOGLE_SIGN_IN_METHOD="google.com";Te.PROVIDER_ID="google.com";/**
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
 */class Ae extends kt{constructor(){super("github.com")}static credential(e){return xe._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ae.credential(e.oauthAccessToken)}catch{return null}}}Ae.GITHUB_SIGN_IN_METHOD="github.com";Ae.PROVIDER_ID="github.com";/**
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
 */class be extends kt{constructor(){super("twitter.com")}static credential(e,n){return xe._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return be.credential(n,r)}catch{return null}}}be.TWITTER_SIGN_IN_METHOD="twitter.com";be.PROVIDER_ID="twitter.com";/**
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
 */async function hl(i,e){return Is(i,"POST","/v1/accounts:signUp",Rt(i,e))}/**
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
 */class Fe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,o=!1){const c=await ne._fromIdTokenResponse(e,r,o),h=Lr(r);return new Fe({user:c,providerId:h,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const o=Lr(r);return new Fe({user:e,providerId:o,_tokenResponse:r,operationType:n})}}function Lr(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class an extends me{constructor(e,n,r,o){var c;super(n.code,n.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,an.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,o){return new an(e,n,r,o)}}function js(i,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?an._fromErrorAndOperation(i,c,e,r):c})}async function ul(i,e,n=!1){const r=await It(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return Fe._forOperation(i,"link",r)}/**
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
 */async function dl(i,e,n=!1){const{auth:r}=i;if(te(r.app))return Promise.reject(Re(r));const o="reauthenticate";try{const c=await It(i,js(r,o,e,i),n);A(c.idToken,r,"internal-error");const h=ui(c.idToken);A(h,r,"internal-error");const{sub:g}=h;return A(i.uid===g,r,"user-mismatch"),Fe._forOperation(i,o,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&pe(r,"user-mismatch"),c}}/**
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
 */async function fl(i,e,n=!1){if(te(i.app))return Promise.reject(Re(i));const r="signIn",o=await js(i,r,e),c=await Fe._fromIdTokenResponse(i,r,o);return n||await i._updateCurrentUser(c.user),c}/**
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
 */async function pl(i){const e=Ze(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function gl(i,e,n){if(te(i.app))return Promise.reject(Re(i));const r=Ze(i),h=await il(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",hl).catch(w=>{throw w.code==="auth/password-does-not-meet-requirements"&&pl(i),w}),g=await Fe._fromIdTokenResponse(r,"signIn",h);return await r._updateCurrentUser(g.user),g}function ml(i,e,n,r){return Ye(i).onIdTokenChanged(e,n,r)}function vl(i,e,n){return Ye(i).beforeAuthStateChanged(e,n)}const cn="__sak";/**
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
 */class Bs{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(cn,"1"),this.storage.removeItem(cn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const yl=1e3,_l=10;class Hs extends Bs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ds(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),o=this.localCache[n];r!==o&&e(n,o,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((h,g,w)=>{this.notifyListeners(h,w)});return}const r=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(r);!n&&this.localCache[r]===h||this.notifyListeners(r,h)},c=this.storage.getItem(r);$c()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,_l):o()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hs.type="LOCAL";const wl=Hs;/**
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
 */class Vs extends Bs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Vs.type="SESSION";const $s=Vs;/**
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
 */function Il(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class dn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const r=new dn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:o,data:c}=n.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const g=Array.from(h).map(async E=>E(n.origin,c)),w=await Il(g);n.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:w})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dn.receivers=[];/**
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
 */function fi(i="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return i+n}/**
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
 */class El{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,h;return new Promise((g,w)=>{const E=fi("",20);o.port1.start();const b=setTimeout(()=>{w(new Error("unsupported_event"))},r);h={messageChannel:o,onMessage(C){const S=C;if(S.data.eventId===E)switch(S.data.status){case"ack":clearTimeout(b),c=setTimeout(()=>{w(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),g(S.data.response);break;default:clearTimeout(b),clearTimeout(c),w(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:E,data:n},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function se(){return window}function Tl(i){se().location.href=i}/**
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
 */function Ws(){return typeof se().WorkerGlobalScope<"u"&&typeof se().importScripts=="function"}async function Al(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bl(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function Sl(){return Ws()?self:null}/**
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
 */const zs="firebaseLocalStorageDb",Cl=1,ln="firebaseLocalStorage",Gs="fbase_key";class Ot{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fn(i,e){return i.transaction([ln],e?"readwrite":"readonly").objectStore(ln)}function Pl(){const i=indexedDB.deleteDatabase(zs);return new Ot(i).toPromise()}function ti(){const i=indexedDB.open(zs,Cl);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(ln,{keyPath:Gs})}catch(o){n(o)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(ln)?e(r):(r.close(),await Pl(),e(await ti()))})})}async function Mr(i,e,n){const r=fn(i,!0).put({[Gs]:e,value:n});return new Ot(r).toPromise()}async function Rl(i,e){const n=fn(i,!1).get(e),r=await new Ot(n).toPromise();return r===void 0?null:r.value}function Ur(i,e){const n=fn(i,!0).delete(e);return new Ot(n).toPromise()}const kl=800,Ol=3;class Ks{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ti(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ol)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ws()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dn._getInstance(Sl()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Al(),!this.activeServiceWorker)return;this.sender=new El(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bl()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ti();return await Mr(e,cn,"1"),await Ur(e,cn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mr(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Rl(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ur(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const c=fn(o,!1).getAll();return new Ot(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:c}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ks.type="LOCAL";const Dl=Ks;new Pt(3e4,6e4);/**
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
 */function Nl(i,e){return e?de(e):(A(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class pi extends xs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qe(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qe(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qe(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ll(i){return fl(i.auth,new pi(i),i.bypassAuthState)}function Ml(i){const{auth:e,user:n}=i;return A(n,e,"internal-error"),dl(n,new pi(i),i.bypassAuthState)}async function Ul(i){const{auth:e,user:n}=i;return A(n,e,"internal-error"),ul(n,new pi(i),i.bypassAuthState)}/**
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
 */class qs{constructor(e,n,r,o,c=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:o,tenantId:c,error:h,type:g}=e;if(h){this.reject(h);return}const w={auth:this.auth,requestUri:n,sessionId:r,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(w))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ll;case"linkViaPopup":case"linkViaRedirect":return Ul;case"reauthViaPopup":case"reauthViaRedirect":return Ml;default:pe(this.auth,"internal-error")}}resolve(e){ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const xl=new Pt(2e3,1e4);class ze extends qs{constructor(e,n,r,o,c){super(e,n,o,c),this.provider=r,this.authWindow=null,this.pollId=null,ze.currentPopupAction&&ze.currentPopupAction.cancel(),ze.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){ge(this.filter.length===1,"Popup operations only handle one event");const e=fi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(re(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(re(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ze.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(re(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xl.get())};e()}}ze.currentPopupAction=null;/**
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
 */const Fl="pendingRedirect",Zt=new Map;class jl extends qs{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Zt.get(this.auth._key());if(!e){try{const r=await Bl(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Zt.set(this.auth._key(),e)}return this.bypassAuthState||Zt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bl(i,e){const n=$l(e),r=Vl(i);if(!await r._isAvailable())return!1;const o=await r._get(n)==="true";return await r._remove(n),o}function Hl(i,e){Zt.set(i._key(),e)}function Vl(i){return de(i._redirectPersistence)}function $l(i){return Qt(Fl,i.config.apiKey,i.name)}async function Wl(i,e,n=!1){if(te(i.app))return Promise.reject(Re(i));const r=Ze(i),o=Nl(r,e),h=await new jl(r,o,n).execute();return h&&!n&&(delete h.user._redirectEventId,await r._persistUserIfCurrent(h.user),await r._setRedirectUser(null,e)),h}/**
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
 */const zl=10*60*1e3;class Gl{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Kl(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Js(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(re(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zl&&this.cachedEventUids.clear(),this.cachedEventUids.has(xr(e))}saveEventToCache(e){this.cachedEventUids.add(xr(e)),this.lastProcessedEventTime=Date.now()}}function xr(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Js({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Kl(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Js(i);default:return!1}}/**
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
 */async function ql(i,e={}){return je(i,"GET","/v1/projects",e)}/**
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
 */const Jl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xl=/^https?/;async function Yl(i){if(i.config.emulator)return;const{authorizedDomains:e}=await ql(i);for(const n of e)try{if(Ql(n))return}catch{}pe(i,"unauthorized-domain")}function Ql(i){const e=Zn(),{protocol:n,hostname:r}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&r===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&h.hostname===r}if(!Xl.test(n))return!1;if(Jl.test(i))return r===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
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
 */const Zl=new Pt(3e4,6e4);function Fr(){const i=se().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function eh(i){return new Promise((e,n)=>{var r,o,c;function h(){Fr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fr(),n(re(i,"network-request-failed"))},timeout:Zl.get()})}if(!((o=(r=se().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((c=se().gapi)===null||c===void 0)&&c.load)h();else{const g=Qc("iframefcb");return se()[g]=()=>{gapi.load?h():n(re(i,"network-request-failed"))},Ls(`${Yc()}?onload=${g}`).catch(w=>n(w))}}).catch(e=>{throw en=null,e})}let en=null;function th(i){return en=en||eh(i),en}/**
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
 */const nh=new Pt(5e3,15e3),ih="__/auth/iframe",rh="emulator/auth/iframe",sh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ah(i){const e=i.config;A(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?hi(e,rh):`https://${i.config.authDomain}/${ih}`,r={apiKey:e.apiKey,appName:i.name,v:Qe},o=oh.get(i.config.apiHost);o&&(r.eid=o);const c=i._getFrameworks();return c.length&&(r.fw=c.join(",")),`${n}?${Ct(r).slice(1)}`}async function ch(i){const e=await th(i),n=se().gapi;return A(n,i,"internal-error"),e.open({where:document.body,url:ah(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sh,dontclear:!0},r=>new Promise(async(o,c)=>{await r.restyle({setHideOnLeave:!1});const h=re(i,"network-request-failed"),g=se().setTimeout(()=>{c(h)},nh.get());function w(){se().clearTimeout(g),o(r)}r.ping(w).then(w,()=>{c(h)})}))}/**
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
 */const lh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hh=500,uh=600,dh="_blank",fh="http://localhost";class jr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ph(i,e,n,r=hh,o=uh){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-r)/2,0).toString();let g="";const w=Object.assign(Object.assign({},lh),{width:r.toString(),height:o.toString(),top:c,left:h}),E=K().toLowerCase();n&&(g=Cs(E)?dh:n),bs(E)&&(e=e||fh,w.scrollbars="yes");const b=Object.entries(w).reduce((S,[x,R])=>`${S}${x}=${R},`,"");if(Vc(E)&&g!=="_self")return gh(e||"",g),new jr(null);const C=window.open(e||"",g,b);A(C,i,"popup-blocked");try{C.focus()}catch{}return new jr(C)}function gh(i,e){const n=document.createElement("a");n.href=i,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const mh="__/auth/handler",vh="emulator/auth/handler",yh=encodeURIComponent("fac");async function Br(i,e,n,r,o,c){A(i.config.authDomain,i,"auth-domain-config-required"),A(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:r,v:Qe,eventId:o};if(e instanceof Fs){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",ca(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[b,C]of Object.entries({}))h[b]=C}if(e instanceof kt){const b=e.getScopes().filter(C=>C!=="");b.length>0&&(h.scopes=b.join(","))}i.tenantId&&(h.tid=i.tenantId);const g=h;for(const b of Object.keys(g))g[b]===void 0&&delete g[b];const w=await i._getAppCheckToken(),E=w?`#${yh}=${encodeURIComponent(w)}`:"";return`${_h(i)}?${Ct(g).slice(1)}${E}`}function _h({config:i}){return i.emulator?hi(i,vh):`https://${i.authDomain}/${mh}`}/**
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
 */const Gn="webStorageSupport";class wh{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$s,this._completeRedirectFn=Wl,this._overrideRedirectResult=Hl}async _openPopup(e,n,r,o){var c;ge((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const h=await Br(e,n,r,Zn(),o);return ph(e,h,fi())}async _openRedirect(e,n,r,o){await this._originValidation(e);const c=await Br(e,n,r,Zn(),o);return Tl(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:c}=this.eventManagers[n];return o?Promise.resolve(o):(ge(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ch(e),r=new Gl(e);return n.register("authEvent",o=>(A(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gn,{type:Gn},o=>{var c;const h=(c=o==null?void 0:o[0])===null||c===void 0?void 0:c[Gn];h!==void 0&&n(!!h),pe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Yl(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ds()||Ss()||di()}}const Ih=wh;var Hr="@firebase/auth",Vr="1.10.2";/**
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
 */class Eh{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Th(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ah(i){Je(new Ue("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:h,authDomain:g}=r.options;A(h&&!h.includes(":"),"invalid-api-key",{appName:r.name});const w={apiKey:h,authDomain:g,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ns(i)},E=new qc(r,o,c,w);return sl(E,n),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Je(new Ue("auth-internal",e=>{const n=Ze(e.getProvider("auth").getImmediate());return(r=>new Eh(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pe(Hr,Vr,Th(i)),Pe(Hr,Vr,"esm2017")}/**
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
 */const bh=5*60,Sh=cs("authIdTokenMaxAge")||bh;let $r=null;const Ch=i=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Sh)return;const o=n==null?void 0:n.token;$r!==o&&($r=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Ph(i=fs()){const e=ai(i,"auth");if(e.isInitialized())return e.getImmediate();const n=rl(i,{popupRedirectResolver:Ih,persistence:[Dl,wl,$s]}),r=cs("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const h=Ch(c.toString());vl(n,h,()=>h(n.currentUser)),ml(n,g=>h(g))}}const o=os("auth");return o&&ol(n,`http://${o}`),n}function Rh(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}Jc({loadJS(i){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",i),r.onload=e,r.onerror=o=>{const c=re("internal-error");c.customData=o,n(c)},r.type="text/javascript",r.charset="UTF-8",Rh().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ah("Browser");var Wr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xs;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,u){function f(){}f.prototype=u.prototype,v.D=u.prototype,v.prototype=new f,v.prototype.constructor=v,v.C=function(p,m,_){for(var d=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)d[ce-2]=arguments[ce];return u.prototype[m].apply(p,d)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(v,u,f){f||(f=0);var p=Array(16);if(typeof u=="string")for(var m=0;16>m;++m)p[m]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(m=0;16>m;++m)p[m]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=v.g[0],f=v.g[1],m=v.g[2];var _=v.g[3],d=u+(_^f&(m^_))+p[0]+3614090360&4294967295;u=f+(d<<7&4294967295|d>>>25),d=_+(m^u&(f^m))+p[1]+3905402710&4294967295,_=u+(d<<12&4294967295|d>>>20),d=m+(f^_&(u^f))+p[2]+606105819&4294967295,m=_+(d<<17&4294967295|d>>>15),d=f+(u^m&(_^u))+p[3]+3250441966&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(_^f&(m^_))+p[4]+4118548399&4294967295,u=f+(d<<7&4294967295|d>>>25),d=_+(m^u&(f^m))+p[5]+1200080426&4294967295,_=u+(d<<12&4294967295|d>>>20),d=m+(f^_&(u^f))+p[6]+2821735955&4294967295,m=_+(d<<17&4294967295|d>>>15),d=f+(u^m&(_^u))+p[7]+4249261313&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(_^f&(m^_))+p[8]+1770035416&4294967295,u=f+(d<<7&4294967295|d>>>25),d=_+(m^u&(f^m))+p[9]+2336552879&4294967295,_=u+(d<<12&4294967295|d>>>20),d=m+(f^_&(u^f))+p[10]+4294925233&4294967295,m=_+(d<<17&4294967295|d>>>15),d=f+(u^m&(_^u))+p[11]+2304563134&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(_^f&(m^_))+p[12]+1804603682&4294967295,u=f+(d<<7&4294967295|d>>>25),d=_+(m^u&(f^m))+p[13]+4254626195&4294967295,_=u+(d<<12&4294967295|d>>>20),d=m+(f^_&(u^f))+p[14]+2792965006&4294967295,m=_+(d<<17&4294967295|d>>>15),d=f+(u^m&(_^u))+p[15]+1236535329&4294967295,f=m+(d<<22&4294967295|d>>>10),d=u+(m^_&(f^m))+p[1]+4129170786&4294967295,u=f+(d<<5&4294967295|d>>>27),d=_+(f^m&(u^f))+p[6]+3225465664&4294967295,_=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(_^u))+p[11]+643717713&4294967295,m=_+(d<<14&4294967295|d>>>18),d=f+(_^u&(m^_))+p[0]+3921069994&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^_&(f^m))+p[5]+3593408605&4294967295,u=f+(d<<5&4294967295|d>>>27),d=_+(f^m&(u^f))+p[10]+38016083&4294967295,_=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(_^u))+p[15]+3634488961&4294967295,m=_+(d<<14&4294967295|d>>>18),d=f+(_^u&(m^_))+p[4]+3889429448&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^_&(f^m))+p[9]+568446438&4294967295,u=f+(d<<5&4294967295|d>>>27),d=_+(f^m&(u^f))+p[14]+3275163606&4294967295,_=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(_^u))+p[3]+4107603335&4294967295,m=_+(d<<14&4294967295|d>>>18),d=f+(_^u&(m^_))+p[8]+1163531501&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(m^_&(f^m))+p[13]+2850285829&4294967295,u=f+(d<<5&4294967295|d>>>27),d=_+(f^m&(u^f))+p[2]+4243563512&4294967295,_=u+(d<<9&4294967295|d>>>23),d=m+(u^f&(_^u))+p[7]+1735328473&4294967295,m=_+(d<<14&4294967295|d>>>18),d=f+(_^u&(m^_))+p[12]+2368359562&4294967295,f=m+(d<<20&4294967295|d>>>12),d=u+(f^m^_)+p[5]+4294588738&4294967295,u=f+(d<<4&4294967295|d>>>28),d=_+(u^f^m)+p[8]+2272392833&4294967295,_=u+(d<<11&4294967295|d>>>21),d=m+(_^u^f)+p[11]+1839030562&4294967295,m=_+(d<<16&4294967295|d>>>16),d=f+(m^_^u)+p[14]+4259657740&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^_)+p[1]+2763975236&4294967295,u=f+(d<<4&4294967295|d>>>28),d=_+(u^f^m)+p[4]+1272893353&4294967295,_=u+(d<<11&4294967295|d>>>21),d=m+(_^u^f)+p[7]+4139469664&4294967295,m=_+(d<<16&4294967295|d>>>16),d=f+(m^_^u)+p[10]+3200236656&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^_)+p[13]+681279174&4294967295,u=f+(d<<4&4294967295|d>>>28),d=_+(u^f^m)+p[0]+3936430074&4294967295,_=u+(d<<11&4294967295|d>>>21),d=m+(_^u^f)+p[3]+3572445317&4294967295,m=_+(d<<16&4294967295|d>>>16),d=f+(m^_^u)+p[6]+76029189&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(f^m^_)+p[9]+3654602809&4294967295,u=f+(d<<4&4294967295|d>>>28),d=_+(u^f^m)+p[12]+3873151461&4294967295,_=u+(d<<11&4294967295|d>>>21),d=m+(_^u^f)+p[15]+530742520&4294967295,m=_+(d<<16&4294967295|d>>>16),d=f+(m^_^u)+p[2]+3299628645&4294967295,f=m+(d<<23&4294967295|d>>>9),d=u+(m^(f|~_))+p[0]+4096336452&4294967295,u=f+(d<<6&4294967295|d>>>26),d=_+(f^(u|~m))+p[7]+1126891415&4294967295,_=u+(d<<10&4294967295|d>>>22),d=m+(u^(_|~f))+p[14]+2878612391&4294967295,m=_+(d<<15&4294967295|d>>>17),d=f+(_^(m|~u))+p[5]+4237533241&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~_))+p[12]+1700485571&4294967295,u=f+(d<<6&4294967295|d>>>26),d=_+(f^(u|~m))+p[3]+2399980690&4294967295,_=u+(d<<10&4294967295|d>>>22),d=m+(u^(_|~f))+p[10]+4293915773&4294967295,m=_+(d<<15&4294967295|d>>>17),d=f+(_^(m|~u))+p[1]+2240044497&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~_))+p[8]+1873313359&4294967295,u=f+(d<<6&4294967295|d>>>26),d=_+(f^(u|~m))+p[15]+4264355552&4294967295,_=u+(d<<10&4294967295|d>>>22),d=m+(u^(_|~f))+p[6]+2734768916&4294967295,m=_+(d<<15&4294967295|d>>>17),d=f+(_^(m|~u))+p[13]+1309151649&4294967295,f=m+(d<<21&4294967295|d>>>11),d=u+(m^(f|~_))+p[4]+4149444226&4294967295,u=f+(d<<6&4294967295|d>>>26),d=_+(f^(u|~m))+p[11]+3174756917&4294967295,_=u+(d<<10&4294967295|d>>>22),d=m+(u^(_|~f))+p[2]+718787259&4294967295,m=_+(d<<15&4294967295|d>>>17),d=f+(_^(m|~u))+p[9]+3951481745&4294967295,v.g[0]=v.g[0]+u&4294967295,v.g[1]=v.g[1]+(m+(d<<21&4294967295|d>>>11))&4294967295,v.g[2]=v.g[2]+m&4294967295,v.g[3]=v.g[3]+_&4294967295}r.prototype.u=function(v,u){u===void 0&&(u=v.length);for(var f=u-this.blockSize,p=this.B,m=this.h,_=0;_<u;){if(m==0)for(;_<=f;)o(this,v,_),_+=this.blockSize;if(typeof v=="string"){for(;_<u;)if(p[m++]=v.charCodeAt(_++),m==this.blockSize){o(this,p),m=0;break}}else for(;_<u;)if(p[m++]=v[_++],m==this.blockSize){o(this,p),m=0;break}}this.h=m,this.o+=u},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var u=1;u<v.length-8;++u)v[u]=0;var f=8*this.o;for(u=v.length-8;u<v.length;++u)v[u]=f&255,f/=256;for(this.u(v),v=Array(16),u=f=0;4>u;++u)for(var p=0;32>p;p+=8)v[f++]=this.g[u]>>>p&255;return v};function c(v,u){var f=g;return Object.prototype.hasOwnProperty.call(f,v)?f[v]:f[v]=u(v)}function h(v,u){this.h=u;for(var f=[],p=!0,m=v.length-1;0<=m;m--){var _=v[m]|0;p&&_==u||(f[m]=_,p=!1)}this.g=f}var g={};function w(v){return-128<=v&&128>v?c(v,function(u){return new h([u|0],0>u?-1:0)}):new h([v|0],0>v?-1:0)}function E(v){if(isNaN(v)||!isFinite(v))return C;if(0>v)return L(E(-v));for(var u=[],f=1,p=0;v>=f;p++)u[p]=v/f|0,f*=4294967296;return new h(u,0)}function b(v,u){if(v.length==0)throw Error("number format error: empty string");if(u=u||10,2>u||36<u)throw Error("radix out of range: "+u);if(v.charAt(0)=="-")return L(b(v.substring(1),u));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=E(Math.pow(u,8)),p=C,m=0;m<v.length;m+=8){var _=Math.min(8,v.length-m),d=parseInt(v.substring(m,m+_),u);8>_?(_=E(Math.pow(u,_)),p=p.j(_).add(E(d))):(p=p.j(f),p=p.add(E(d)))}return p}var C=w(0),S=w(1),x=w(16777216);i=h.prototype,i.m=function(){if(U(this))return-L(this).m();for(var v=0,u=1,f=0;f<this.g.length;f++){var p=this.i(f);v+=(0<=p?p:4294967296+p)*u,u*=4294967296}return v},i.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(R(this))return"0";if(U(this))return"-"+L(this).toString(v);for(var u=E(Math.pow(v,6)),f=this,p="";;){var m=Z(f,u).g;f=ae(f,m.j(u));var _=((0<f.g.length?f.g[0]:f.h)>>>0).toString(v);if(f=m,R(f))return _+p;for(;6>_.length;)_="0"+_;p=_+p}},i.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function R(v){if(v.h!=0)return!1;for(var u=0;u<v.g.length;u++)if(v.g[u]!=0)return!1;return!0}function U(v){return v.h==-1}i.l=function(v){return v=ae(this,v),U(v)?-1:R(v)?0:1};function L(v){for(var u=v.g.length,f=[],p=0;p<u;p++)f[p]=~v.g[p];return new h(f,~v.h).add(S)}i.abs=function(){return U(this)?L(this):this},i.add=function(v){for(var u=Math.max(this.g.length,v.g.length),f=[],p=0,m=0;m<=u;m++){var _=p+(this.i(m)&65535)+(v.i(m)&65535),d=(_>>>16)+(this.i(m)>>>16)+(v.i(m)>>>16);p=d>>>16,_&=65535,d&=65535,f[m]=d<<16|_}return new h(f,f[f.length-1]&-2147483648?-1:0)};function ae(v,u){return v.add(L(u))}i.j=function(v){if(R(this)||R(v))return C;if(U(this))return U(v)?L(this).j(L(v)):L(L(this).j(v));if(U(v))return L(this.j(L(v)));if(0>this.l(x)&&0>v.l(x))return E(this.m()*v.m());for(var u=this.g.length+v.g.length,f=[],p=0;p<2*u;p++)f[p]=0;for(p=0;p<this.g.length;p++)for(var m=0;m<v.g.length;m++){var _=this.i(p)>>>16,d=this.i(p)&65535,ce=v.i(m)>>>16,et=v.i(m)&65535;f[2*p+2*m]+=d*et,Y(f,2*p+2*m),f[2*p+2*m+1]+=_*et,Y(f,2*p+2*m+1),f[2*p+2*m+1]+=d*ce,Y(f,2*p+2*m+1),f[2*p+2*m+2]+=_*ce,Y(f,2*p+2*m+2)}for(p=0;p<u;p++)f[p]=f[2*p+1]<<16|f[2*p];for(p=u;p<2*u;p++)f[p]=0;return new h(f,0)};function Y(v,u){for(;(v[u]&65535)!=v[u];)v[u+1]+=v[u]>>>16,v[u]&=65535,u++}function j(v,u){this.g=v,this.h=u}function Z(v,u){if(R(u))throw Error("division by zero");if(R(v))return new j(C,C);if(U(v))return u=Z(L(v),u),new j(L(u.g),L(u.h));if(U(u))return u=Z(v,L(u)),new j(L(u.g),u.h);if(30<v.g.length){if(U(v)||U(u))throw Error("slowDivide_ only works with positive integers.");for(var f=S,p=u;0>=p.l(v);)f=ke(f),p=ke(p);var m=q(f,1),_=q(p,1);for(p=q(p,2),f=q(f,2);!R(p);){var d=_.add(p);0>=d.l(v)&&(m=m.add(f),_=d),p=q(p,1),f=q(f,1)}return u=ae(v,m.j(u)),new j(m,u)}for(m=C;0<=v.l(u);){for(f=Math.max(1,Math.floor(v.m()/u.m())),p=Math.ceil(Math.log(f)/Math.LN2),p=48>=p?1:Math.pow(2,p-48),_=E(f),d=_.j(u);U(d)||0<d.l(v);)f-=p,_=E(f),d=_.j(u);R(_)&&(_=S),m=m.add(_),v=ae(v,d)}return new j(m,v)}i.A=function(v){return Z(this,v).h},i.and=function(v){for(var u=Math.max(this.g.length,v.g.length),f=[],p=0;p<u;p++)f[p]=this.i(p)&v.i(p);return new h(f,this.h&v.h)},i.or=function(v){for(var u=Math.max(this.g.length,v.g.length),f=[],p=0;p<u;p++)f[p]=this.i(p)|v.i(p);return new h(f,this.h|v.h)},i.xor=function(v){for(var u=Math.max(this.g.length,v.g.length),f=[],p=0;p<u;p++)f[p]=this.i(p)^v.i(p);return new h(f,this.h^v.h)};function ke(v){for(var u=v.g.length+1,f=[],p=0;p<u;p++)f[p]=v.i(p)<<1|v.i(p-1)>>>31;return new h(f,v.h)}function q(v,u){var f=u>>5;u%=32;for(var p=v.g.length-f,m=[],_=0;_<p;_++)m[_]=0<u?v.i(_+f)>>>u|v.i(_+f+1)<<32-u:v.i(_+f);return new h(m,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=E,h.fromString=b,Xs=h}).apply(typeof Wr<"u"?Wr:typeof self<"u"?self:typeof window<"u"?window:{});var Xt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,s,a){return t==Array.prototype||t==Object.prototype||(t[s]=a.value),t};function n(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xt=="object"&&Xt];for(var s=0;s<t.length;++s){var a=t[s];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var r=n(this);function o(t,s){if(s)e:{var a=r;t=t.split(".");for(var l=0;l<t.length-1;l++){var y=t[l];if(!(y in a))break e;a=a[y]}t=t[t.length-1],l=a[t],s=s(l),s!=l&&s!=null&&e(a,t,{configurable:!0,writable:!0,value:s})}}function c(t,s){t instanceof String&&(t+="");var a=0,l=!1,y={next:function(){if(!l&&a<t.length){var I=a++;return{value:s(I,t[I]),done:!1}}return l=!0,{done:!0,value:void 0}}};return y[Symbol.iterator]=function(){return y},y}o("Array.prototype.values",function(t){return t||function(){return c(this,function(s,a){return a})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},g=this||self;function w(t){var s=typeof t;return s=s!="object"?s:t?Array.isArray(t)?"array":s:"null",s=="array"||s=="object"&&typeof t.length=="number"}function E(t){var s=typeof t;return s=="object"&&t!=null||s=="function"}function b(t,s,a){return t.call.apply(t.bind,arguments)}function C(t,s,a){if(!t)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var y=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(y,l),t.apply(s,y)}}return function(){return t.apply(s,arguments)}}function S(t,s,a){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?b:C,S.apply(null,arguments)}function x(t,s){var a=Array.prototype.slice.call(arguments,1);return function(){var l=a.slice();return l.push.apply(l,arguments),t.apply(this,l)}}function R(t,s){function a(){}a.prototype=s.prototype,t.aa=s.prototype,t.prototype=new a,t.prototype.constructor=t,t.Qb=function(l,y,I){for(var T=Array(arguments.length-2),D=2;D<arguments.length;D++)T[D-2]=arguments[D];return s.prototype[y].apply(l,T)}}function U(t){const s=t.length;if(0<s){const a=Array(s);for(let l=0;l<s;l++)a[l]=t[l];return a}return[]}function L(t,s){for(let a=1;a<arguments.length;a++){const l=arguments[a];if(w(l)){const y=t.length||0,I=l.length||0;t.length=y+I;for(let T=0;T<I;T++)t[y+T]=l[T]}else t.push(l)}}class ae{constructor(s,a){this.i=s,this.j=a,this.h=0,this.g=null}get(){let s;return 0<this.h?(this.h--,s=this.g,this.g=s.next,s.next=null):s=this.i(),s}}function Y(t){return/^[\s\xa0]*$/.test(t)}function j(){var t=g.navigator;return t&&(t=t.userAgent)?t:""}function Z(t){return Z[" "](t),t}Z[" "]=function(){};var ke=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function q(t,s,a){for(const l in t)s.call(a,t[l],l,t)}function v(t,s){for(const a in t)s.call(void 0,t[a],a,t)}function u(t){const s={};for(const a in t)s[a]=t[a];return s}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function p(t,s){let a,l;for(let y=1;y<arguments.length;y++){l=arguments[y];for(a in l)t[a]=l[a];for(let I=0;I<f.length;I++)a=f[I],Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a])}}function m(t){var s=1;t=t.split(":");const a=[];for(;0<s&&t.length;)a.push(t.shift()),s--;return t.length&&a.push(t.join(":")),a}function _(t){g.setTimeout(()=>{throw t},0)}function d(){var t=pn;let s=null;return t.g&&(s=t.g,t.g=t.g.next,t.g||(t.h=null),s.next=null),s}class ce{constructor(){this.h=this.g=null}add(s,a){const l=et.get();l.set(s,a),this.h?this.h.next=l:this.g=l,this.h=l}}var et=new ae(()=>new io,t=>t.reset());class io{constructor(){this.next=this.g=this.h=null}set(s,a){this.h=s,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let tt,nt=!1,pn=new ce,vi=()=>{const t=g.Promise.resolve(void 0);tt=()=>{t.then(ro)}};var ro=()=>{for(var t;t=d();){try{t.h.call(t.g)}catch(a){_(a)}var s=et;s.j(t),100>s.h&&(s.h++,t.next=s.g,s.g=t)}nt=!1};function ve(){this.s=this.s,this.C=this.C}ve.prototype.s=!1,ve.prototype.ma=function(){this.s||(this.s=!0,this.N())},ve.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function B(t,s){this.type=t,this.g=this.target=s,this.defaultPrevented=!1}B.prototype.h=function(){this.defaultPrevented=!0};var so=function(){if(!g.addEventListener||!Object.defineProperty)return!1;var t=!1,s=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const a=()=>{};g.addEventListener("test",a,s),g.removeEventListener("test",a,s)}catch{}return t}();function it(t,s){if(B.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var a=this.type=t.type,l=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=s,s=t.relatedTarget){if(ke){e:{try{Z(s.nodeName);var y=!0;break e}catch{}y=!1}y||(s=null)}}else a=="mouseover"?s=t.fromElement:a=="mouseout"&&(s=t.toElement);this.relatedTarget=s,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:oo[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&it.aa.h.call(this)}}R(it,B);var oo={2:"touch",3:"pen",4:"mouse"};it.prototype.h=function(){it.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Nt="closure_listenable_"+(1e6*Math.random()|0),ao=0;function co(t,s,a,l,y){this.listener=t,this.proxy=null,this.src=s,this.type=a,this.capture=!!l,this.ha=y,this.key=++ao,this.da=this.fa=!1}function Lt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Mt(t){this.src=t,this.g={},this.h=0}Mt.prototype.add=function(t,s,a,l,y){var I=t.toString();t=this.g[I],t||(t=this.g[I]=[],this.h++);var T=mn(t,s,l,y);return-1<T?(s=t[T],a||(s.fa=!1)):(s=new co(s,this.src,I,!!l,y),s.fa=a,t.push(s)),s};function gn(t,s){var a=s.type;if(a in t.g){var l=t.g[a],y=Array.prototype.indexOf.call(l,s,void 0),I;(I=0<=y)&&Array.prototype.splice.call(l,y,1),I&&(Lt(s),t.g[a].length==0&&(delete t.g[a],t.h--))}}function mn(t,s,a,l){for(var y=0;y<t.length;++y){var I=t[y];if(!I.da&&I.listener==s&&I.capture==!!a&&I.ha==l)return y}return-1}var vn="closure_lm_"+(1e6*Math.random()|0),yn={};function yi(t,s,a,l,y){if(Array.isArray(s)){for(var I=0;I<s.length;I++)yi(t,s[I],a,l,y);return null}return a=Ii(a),t&&t[Nt]?t.K(s,a,E(l)?!!l.capture:!1,y):lo(t,s,a,!1,l,y)}function lo(t,s,a,l,y,I){if(!s)throw Error("Invalid event type");var T=E(y)?!!y.capture:!!y,D=wn(t);if(D||(t[vn]=D=new Mt(t)),a=D.add(s,a,l,T,I),a.proxy)return a;if(l=ho(),a.proxy=l,l.src=t,l.listener=a,t.addEventListener)so||(y=T),y===void 0&&(y=!1),t.addEventListener(s.toString(),l,y);else if(t.attachEvent)t.attachEvent(wi(s.toString()),l);else if(t.addListener&&t.removeListener)t.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return a}function ho(){function t(a){return s.call(t.src,t.listener,a)}const s=uo;return t}function _i(t,s,a,l,y){if(Array.isArray(s))for(var I=0;I<s.length;I++)_i(t,s[I],a,l,y);else l=E(l)?!!l.capture:!!l,a=Ii(a),t&&t[Nt]?(t=t.i,s=String(s).toString(),s in t.g&&(I=t.g[s],a=mn(I,a,l,y),-1<a&&(Lt(I[a]),Array.prototype.splice.call(I,a,1),I.length==0&&(delete t.g[s],t.h--)))):t&&(t=wn(t))&&(s=t.g[s.toString()],t=-1,s&&(t=mn(s,a,l,y)),(a=-1<t?s[t]:null)&&_n(a))}function _n(t){if(typeof t!="number"&&t&&!t.da){var s=t.src;if(s&&s[Nt])gn(s.i,t);else{var a=t.type,l=t.proxy;s.removeEventListener?s.removeEventListener(a,l,t.capture):s.detachEvent?s.detachEvent(wi(a),l):s.addListener&&s.removeListener&&s.removeListener(l),(a=wn(s))?(gn(a,t),a.h==0&&(a.src=null,s[vn]=null)):Lt(t)}}}function wi(t){return t in yn?yn[t]:yn[t]="on"+t}function uo(t,s){if(t.da)t=!0;else{s=new it(s,this);var a=t.listener,l=t.ha||t.src;t.fa&&_n(t),t=a.call(l,s)}return t}function wn(t){return t=t[vn],t instanceof Mt?t:null}var In="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ii(t){return typeof t=="function"?t:(t[In]||(t[In]=function(s){return t.handleEvent(s)}),t[In])}function H(){ve.call(this),this.i=new Mt(this),this.M=this,this.F=null}R(H,ve),H.prototype[Nt]=!0,H.prototype.removeEventListener=function(t,s,a,l){_i(this,t,s,a,l)};function W(t,s){var a,l=t.F;if(l)for(a=[];l;l=l.F)a.push(l);if(t=t.M,l=s.type||s,typeof s=="string")s=new B(s,t);else if(s instanceof B)s.target=s.target||t;else{var y=s;s=new B(l,t),p(s,y)}if(y=!0,a)for(var I=a.length-1;0<=I;I--){var T=s.g=a[I];y=Ut(T,l,!0,s)&&y}if(T=s.g=t,y=Ut(T,l,!0,s)&&y,y=Ut(T,l,!1,s)&&y,a)for(I=0;I<a.length;I++)T=s.g=a[I],y=Ut(T,l,!1,s)&&y}H.prototype.N=function(){if(H.aa.N.call(this),this.i){var t=this.i,s;for(s in t.g){for(var a=t.g[s],l=0;l<a.length;l++)Lt(a[l]);delete t.g[s],t.h--}}this.F=null},H.prototype.K=function(t,s,a,l){return this.i.add(String(t),s,!1,a,l)},H.prototype.L=function(t,s,a,l){return this.i.add(String(t),s,!0,a,l)};function Ut(t,s,a,l){if(s=t.i.g[String(s)],!s)return!0;s=s.concat();for(var y=!0,I=0;I<s.length;++I){var T=s[I];if(T&&!T.da&&T.capture==a){var D=T.listener,F=T.ha||T.src;T.fa&&gn(t.i,T),y=D.call(F,l)!==!1&&y}}return y&&!l.defaultPrevented}function Ei(t,s,a){if(typeof t=="function")a&&(t=S(t,a));else if(t&&typeof t.handleEvent=="function")t=S(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(s)?-1:g.setTimeout(t,s||0)}function Ti(t){t.g=Ei(()=>{t.g=null,t.i&&(t.i=!1,Ti(t))},t.l);const s=t.h;t.h=null,t.m.apply(null,s)}class fo extends ve{constructor(s,a){super(),this.m=s,this.l=a,this.h=null,this.i=!1,this.g=null}j(s){this.h=arguments,this.g?this.i=!0:Ti(this)}N(){super.N(),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rt(t){ve.call(this),this.h=t,this.g={}}R(rt,ve);var Ai=[];function bi(t){q(t.g,function(s,a){this.g.hasOwnProperty(a)&&_n(s)},t),t.g={}}rt.prototype.N=function(){rt.aa.N.call(this),bi(this)},rt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var En=g.JSON.stringify,po=g.JSON.parse,go=class{stringify(t){return g.JSON.stringify(t,void 0)}parse(t){return g.JSON.parse(t,void 0)}};function Tn(){}Tn.prototype.h=null;function Si(t){return t.h||(t.h=t.i())}function mo(){}var st={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function An(){B.call(this,"d")}R(An,B);function bn(){B.call(this,"c")}R(bn,B);var Be={},Ci=null;function Sn(){return Ci=Ci||new H}Be.La="serverreachability";function Pi(t){B.call(this,Be.La,t)}R(Pi,B);function ot(t){const s=Sn();W(s,new Pi(s))}Be.STAT_EVENT="statevent";function Ri(t,s){B.call(this,Be.STAT_EVENT,t),this.stat=s}R(Ri,B);function z(t){const s=Sn();W(s,new Ri(s,t))}Be.Ma="timingevent";function ki(t,s){B.call(this,Be.Ma,t),this.size=s}R(ki,B);function at(t,s){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return g.setTimeout(function(){t()},s)}function ct(){this.g=!0}ct.prototype.xa=function(){this.g=!1};function vo(t,s,a,l,y,I){t.info(function(){if(t.g)if(I)for(var T="",D=I.split("&"),F=0;F<D.length;F++){var k=D[F].split("=");if(1<k.length){var V=k[0];k=k[1];var $=V.split("_");T=2<=$.length&&$[1]=="type"?T+(V+"="+k+"&"):T+(V+"=redacted&")}}else T=null;else T=I;return"XMLHTTP REQ ("+l+") [attempt "+y+"]: "+s+`
`+a+`
`+T})}function yo(t,s,a,l,y,I,T){t.info(function(){return"XMLHTTP RESP ("+l+") [ attempt "+y+"]: "+s+`
`+a+`
`+I+" "+T})}function He(t,s,a,l){t.info(function(){return"XMLHTTP TEXT ("+s+"): "+wo(t,a)+(l?" "+l:"")})}function _o(t,s){t.info(function(){return"TIMEOUT: "+s})}ct.prototype.info=function(){};function wo(t,s){if(!t.g)return s;if(!s)return null;try{var a=JSON.parse(s);if(a){for(t=0;t<a.length;t++)if(Array.isArray(a[t])){var l=a[t];if(!(2>l.length)){var y=l[1];if(Array.isArray(y)&&!(1>y.length)){var I=y[0];if(I!="noop"&&I!="stop"&&I!="close")for(var T=1;T<y.length;T++)y[T]=""}}}}return En(a)}catch{return s}}var Cn={NO_ERROR:0,TIMEOUT:8},Io={},Pn;function xt(){}R(xt,Tn),xt.prototype.g=function(){return new XMLHttpRequest},xt.prototype.i=function(){return{}},Pn=new xt;function ye(t,s,a,l){this.j=t,this.i=s,this.l=a,this.R=l||1,this.U=new rt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Oi}function Oi(){this.i=null,this.g="",this.h=!1}var Di={},Rn={};function kn(t,s,a){t.L=1,t.v=Ht(le(s)),t.m=a,t.P=!0,Ni(t,null)}function Ni(t,s){t.F=Date.now(),Ft(t),t.A=le(t.v);var a=t.A,l=t.R;Array.isArray(l)||(l=[String(l)]),Ki(a.i,"t",l),t.C=0,a=t.j.J,t.h=new Oi,t.g=ur(t.j,a?s:null,!t.m),0<t.O&&(t.M=new fo(S(t.Y,t,t.g),t.O)),s=t.U,a=t.g,l=t.ca;var y="readystatechange";Array.isArray(y)||(y&&(Ai[0]=y.toString()),y=Ai);for(var I=0;I<y.length;I++){var T=yi(a,y[I],l||s.handleEvent,!1,s.h||s);if(!T)break;s.g[T.key]=T}s=t.H?u(t.H):{},t.m?(t.u||(t.u="POST"),s["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,s)):(t.u="GET",t.g.ea(t.A,t.u,null,s)),ot(),vo(t.i,t.u,t.A,t.l,t.R,t.m)}ye.prototype.ca=function(t){t=t.target;const s=this.M;s&&he(t)==3?s.j():this.Y(t)},ye.prototype.Y=function(t){try{if(t==this.g)e:{const $=he(this.g);var s=this.g.Ba();const We=this.g.Z();if(!(3>$)&&($!=3||this.g&&(this.h.h||this.g.oa()||er(this.g)))){this.J||$!=4||s==7||(s==8||0>=We?ot(3):ot(2)),On(this);var a=this.g.Z();this.X=a;t:if(Li(this)){var l=er(this.g);t="";var y=l.length,I=he(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Oe(this),lt(this);var T="";break t}this.h.i=new g.TextDecoder}for(s=0;s<y;s++)this.h.h=!0,t+=this.h.i.decode(l[s],{stream:!(I&&s==y-1)});l.length=0,this.h.g+=t,this.C=0,T=this.h.g}else T=this.g.oa();if(this.o=a==200,yo(this.i,this.u,this.A,this.l,this.R,$,a),this.o){if(this.T&&!this.K){t:{if(this.g){var D,F=this.g;if((D=F.g?F.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(D)){var k=D;break t}}k=null}if(a=k)He(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dn(this,a);else{this.o=!1,this.s=3,z(12),Oe(this),lt(this);break e}}if(this.P){a=!0;let ee;for(;!this.J&&this.C<T.length;)if(ee=Eo(this,T),ee==Rn){$==4&&(this.s=4,z(14),a=!1),He(this.i,this.l,null,"[Incomplete Response]");break}else if(ee==Di){this.s=4,z(15),He(this.i,this.l,T,"[Invalid Chunk]"),a=!1;break}else He(this.i,this.l,ee,null),Dn(this,ee);if(Li(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$!=4||T.length!=0||this.h.h||(this.s=1,z(16),a=!1),this.o=this.o&&a,!a)He(this.i,this.l,T,"[Invalid Chunked Response]"),Oe(this),lt(this);else if(0<T.length&&!this.W){this.W=!0;var V=this.j;V.g==this&&V.ba&&!V.M&&(V.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),Fn(V),V.M=!0,z(11))}}else He(this.i,this.l,T,null),Dn(this,T);$==4&&Oe(this),this.o&&!this.J&&($==4?ar(this.j,this):(this.o=!1,Ft(this)))}else jo(this.g),a==400&&0<T.indexOf("Unknown SID")?(this.s=3,z(12)):(this.s=0,z(13)),Oe(this),lt(this)}}}catch{}finally{}};function Li(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function Eo(t,s){var a=t.C,l=s.indexOf(`
`,a);return l==-1?Rn:(a=Number(s.substring(a,l)),isNaN(a)?Di:(l+=1,l+a>s.length?Rn:(s=s.slice(l,l+a),t.C=l+a,s)))}ye.prototype.cancel=function(){this.J=!0,Oe(this)};function Ft(t){t.S=Date.now()+t.I,Mi(t,t.I)}function Mi(t,s){if(t.B!=null)throw Error("WatchDog timer not null");t.B=at(S(t.ba,t),s)}function On(t){t.B&&(g.clearTimeout(t.B),t.B=null)}ye.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(_o(this.i,this.A),this.L!=2&&(ot(),z(17)),Oe(this),this.s=2,lt(this)):Mi(this,this.S-t)};function lt(t){t.j.G==0||t.J||ar(t.j,t)}function Oe(t){On(t);var s=t.M;s&&typeof s.ma=="function"&&s.ma(),t.M=null,bi(t.U),t.g&&(s=t.g,t.g=null,s.abort(),s.ma())}function Dn(t,s){try{var a=t.j;if(a.G!=0&&(a.g==t||Nn(a.h,t))){if(!t.K&&Nn(a.h,t)&&a.G==3){try{var l=a.Da.g.parse(s)}catch{l=null}if(Array.isArray(l)&&l.length==3){var y=l;if(y[0]==0){e:if(!a.u){if(a.g)if(a.g.F+3e3<t.F)Kt(a),zt(a);else break e;xn(a),z(18)}}else a.za=y[1],0<a.za-a.T&&37500>y[2]&&a.F&&a.v==0&&!a.C&&(a.C=at(S(a.Za,a),6e3));if(1>=Fi(a.h)&&a.ca){try{a.ca()}catch{}a.ca=void 0}}else Ne(a,11)}else if((t.K||a.g==t)&&Kt(a),!Y(s))for(y=a.Da.g.parse(s),s=0;s<y.length;s++){let k=y[s];if(a.T=k[0],k=k[1],a.G==2)if(k[0]=="c"){a.K=k[1],a.ia=k[2];const V=k[3];V!=null&&(a.la=V,a.j.info("VER="+a.la));const $=k[4];$!=null&&(a.Aa=$,a.j.info("SVER="+a.Aa));const We=k[5];We!=null&&typeof We=="number"&&0<We&&(l=1.5*We,a.L=l,a.j.info("backChannelRequestTimeoutMs_="+l)),l=a;const ee=t.g;if(ee){const qt=ee.g?ee.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qt){var I=l.h;I.g||qt.indexOf("spdy")==-1&&qt.indexOf("quic")==-1&&qt.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(Ln(I,I.h),I.h=null))}if(l.D){const jn=ee.g?ee.g.getResponseHeader("X-HTTP-Session-Id"):null;jn&&(l.ya=jn,N(l.I,l.D,jn))}}a.G=3,a.l&&a.l.ua(),a.ba&&(a.R=Date.now()-t.F,a.j.info("Handshake RTT: "+a.R+"ms")),l=a;var T=t;if(l.qa=hr(l,l.J?l.ia:null,l.W),T.K){ji(l.h,T);var D=T,F=l.L;F&&(D.I=F),D.B&&(On(D),Ft(D)),l.g=T}else sr(l);0<a.i.length&&Gt(a)}else k[0]!="stop"&&k[0]!="close"||Ne(a,7);else a.G==3&&(k[0]=="stop"||k[0]=="close"?k[0]=="stop"?Ne(a,7):Un(a):k[0]!="noop"&&a.l&&a.l.ta(k),a.v=0)}}ot(4)}catch{}}var To=class{constructor(t,s){this.g=t,this.map=s}};function Ui(t){this.l=t||10,g.PerformanceNavigationTiming?(t=g.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(g.chrome&&g.chrome.loadTimes&&g.chrome.loadTimes()&&g.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function xi(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Fi(t){return t.h?1:t.g?t.g.size:0}function Nn(t,s){return t.h?t.h==s:t.g?t.g.has(s):!1}function Ln(t,s){t.g?t.g.add(s):t.h=s}function ji(t,s){t.h&&t.h==s?t.h=null:t.g&&t.g.has(s)&&t.g.delete(s)}Ui.prototype.cancel=function(){if(this.i=Bi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Bi(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let s=t.i;for(const a of t.g.values())s=s.concat(a.D);return s}return U(t.i)}function Ao(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(w(t)){for(var s=[],a=t.length,l=0;l<a;l++)s.push(t[l]);return s}s=[],a=0;for(l in t)s[a++]=t[l];return s}function bo(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(w(t)||typeof t=="string"){var s=[];t=t.length;for(var a=0;a<t;a++)s.push(a);return s}s=[],a=0;for(const l in t)s[a++]=l;return s}}}function Hi(t,s){if(t.forEach&&typeof t.forEach=="function")t.forEach(s,void 0);else if(w(t)||typeof t=="string")Array.prototype.forEach.call(t,s,void 0);else for(var a=bo(t),l=Ao(t),y=l.length,I=0;I<y;I++)s.call(void 0,l[I],a&&a[I],t)}var Vi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function So(t,s){if(t){t=t.split("&");for(var a=0;a<t.length;a++){var l=t[a].indexOf("="),y=null;if(0<=l){var I=t[a].substring(0,l);y=t[a].substring(l+1)}else I=t[a];s(I,y?decodeURIComponent(y.replace(/\+/g," ")):"")}}}function De(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof De){this.h=t.h,jt(this,t.j),this.o=t.o,this.g=t.g,Bt(this,t.s),this.l=t.l;var s=t.i,a=new dt;a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),$i(this,a),this.m=t.m}else t&&(s=String(t).match(Vi))?(this.h=!1,jt(this,s[1]||"",!0),this.o=ht(s[2]||""),this.g=ht(s[3]||"",!0),Bt(this,s[4]),this.l=ht(s[5]||"",!0),$i(this,s[6]||"",!0),this.m=ht(s[7]||"")):(this.h=!1,this.i=new dt(null,this.h))}De.prototype.toString=function(){var t=[],s=this.j;s&&t.push(ut(s,Wi,!0),":");var a=this.g;return(a||s=="file")&&(t.push("//"),(s=this.o)&&t.push(ut(s,Wi,!0),"@"),t.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.s,a!=null&&t.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&t.push("/"),t.push(ut(a,a.charAt(0)=="/"?Ro:Po,!0))),(a=this.i.toString())&&t.push("?",a),(a=this.m)&&t.push("#",ut(a,Oo)),t.join("")};function le(t){return new De(t)}function jt(t,s,a){t.j=a?ht(s,!0):s,t.j&&(t.j=t.j.replace(/:$/,""))}function Bt(t,s){if(s){if(s=Number(s),isNaN(s)||0>s)throw Error("Bad port number "+s);t.s=s}else t.s=null}function $i(t,s,a){s instanceof dt?(t.i=s,Do(t.i,t.h)):(a||(s=ut(s,ko)),t.i=new dt(s,t.h))}function N(t,s,a){t.i.set(s,a)}function Ht(t){return N(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ht(t,s){return t?s?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ut(t,s,a){return typeof t=="string"?(t=encodeURI(t).replace(s,Co),a&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Co(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Wi=/[#\/\?@]/g,Po=/[#\?:]/g,Ro=/[#\?]/g,ko=/[#\?@]/g,Oo=/#/g;function dt(t,s){this.h=this.g=null,this.i=t||null,this.j=!!s}function _e(t){t.g||(t.g=new Map,t.h=0,t.i&&So(t.i,function(s,a){t.add(decodeURIComponent(s.replace(/\+/g," ")),a)}))}i=dt.prototype,i.add=function(t,s){_e(this),this.i=null,t=Ve(this,t);var a=this.g.get(t);return a||this.g.set(t,a=[]),a.push(s),this.h+=1,this};function zi(t,s){_e(t),s=Ve(t,s),t.g.has(s)&&(t.i=null,t.h-=t.g.get(s).length,t.g.delete(s))}function Gi(t,s){return _e(t),s=Ve(t,s),t.g.has(s)}i.forEach=function(t,s){_e(this),this.g.forEach(function(a,l){a.forEach(function(y){t.call(s,y,l,this)},this)},this)},i.na=function(){_e(this);const t=Array.from(this.g.values()),s=Array.from(this.g.keys()),a=[];for(let l=0;l<s.length;l++){const y=t[l];for(let I=0;I<y.length;I++)a.push(s[l])}return a},i.V=function(t){_e(this);let s=[];if(typeof t=="string")Gi(this,t)&&(s=s.concat(this.g.get(Ve(this,t))));else{t=Array.from(this.g.values());for(let a=0;a<t.length;a++)s=s.concat(t[a])}return s},i.set=function(t,s){return _e(this),this.i=null,t=Ve(this,t),Gi(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[s]),this.h+=1,this},i.get=function(t,s){return t?(t=this.V(t),0<t.length?String(t[0]):s):s};function Ki(t,s,a){zi(t,s),0<a.length&&(t.i=null,t.g.set(Ve(t,s),U(a)),t.h+=a.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],s=Array.from(this.g.keys());for(var a=0;a<s.length;a++){var l=s[a];const I=encodeURIComponent(String(l)),T=this.V(l);for(l=0;l<T.length;l++){var y=I;T[l]!==""&&(y+="="+encodeURIComponent(String(T[l]))),t.push(y)}}return this.i=t.join("&")};function Ve(t,s){return s=String(s),t.j&&(s=s.toLowerCase()),s}function Do(t,s){s&&!t.j&&(_e(t),t.i=null,t.g.forEach(function(a,l){var y=l.toLowerCase();l!=y&&(zi(this,l),Ki(this,y,a))},t)),t.j=s}function No(t,s){const a=new ct;if(g.Image){const l=new Image;l.onload=x(we,a,"TestLoadImage: loaded",!0,s,l),l.onerror=x(we,a,"TestLoadImage: error",!1,s,l),l.onabort=x(we,a,"TestLoadImage: abort",!1,s,l),l.ontimeout=x(we,a,"TestLoadImage: timeout",!1,s,l),g.setTimeout(function(){l.ontimeout&&l.ontimeout()},1e4),l.src=t}else s(!1)}function Lo(t,s){const a=new ct,l=new AbortController,y=setTimeout(()=>{l.abort(),we(a,"TestPingServer: timeout",!1,s)},1e4);fetch(t,{signal:l.signal}).then(I=>{clearTimeout(y),I.ok?we(a,"TestPingServer: ok",!0,s):we(a,"TestPingServer: server error",!1,s)}).catch(()=>{clearTimeout(y),we(a,"TestPingServer: error",!1,s)})}function we(t,s,a,l,y){try{y&&(y.onload=null,y.onerror=null,y.onabort=null,y.ontimeout=null),l(a)}catch{}}function Mo(){this.g=new go}function Uo(t,s,a){const l=a||"";try{Hi(t,function(y,I){let T=y;E(y)&&(T=En(y)),s.push(l+I+"="+encodeURIComponent(T))})}catch(y){throw s.push(l+"type="+encodeURIComponent("_badmap")),y}}function Vt(t){this.l=t.Ub||null,this.j=t.eb||!1}R(Vt,Tn),Vt.prototype.g=function(){return new $t(this.l,this.j)},Vt.prototype.i=function(t){return function(){return t}}({});function $t(t,s){H.call(this),this.D=t,this.o=s,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R($t,H),i=$t.prototype,i.open=function(t,s){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=s,this.readyState=1,pt(this)},i.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const s={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(s.body=t),(this.D||g).fetch(new Request(this.A,s)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ft(this)),this.readyState=0},i.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,pt(this)),this.g&&(this.readyState=3,pt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof g.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qi(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function qi(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}i.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var s=t.value?t.value:new Uint8Array(0);(s=this.v.decode(s,{stream:!t.done}))&&(this.response=this.responseText+=s)}t.done?ft(this):pt(this),this.readyState==3&&qi(this)}},i.Ra=function(t){this.g&&(this.response=this.responseText=t,ft(this))},i.Qa=function(t){this.g&&(this.response=t,ft(this))},i.ga=function(){this.g&&ft(this)};function ft(t){t.readyState=4,t.l=null,t.j=null,t.v=null,pt(t)}i.setRequestHeader=function(t,s){this.u.append(t,s)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],s=this.h.entries();for(var a=s.next();!a.done;)a=a.value,t.push(a[0]+": "+a[1]),a=s.next();return t.join(`\r
`)};function pt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty($t.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function Ji(t){let s="";return q(t,function(a,l){s+=l,s+=":",s+=a,s+=`\r
`}),s}function Mn(t,s,a){e:{for(l in a){var l=!1;break e}l=!0}l||(a=Ji(a),typeof t=="string"?a!=null&&encodeURIComponent(String(a)):N(t,s,a))}function M(t){H.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(M,H);var xo=/^https?$/i,Fo=["POST","PUT"];i=M.prototype,i.Ha=function(t){this.J=t},i.ea=function(t,s,a,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);s=s?s.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pn.g(),this.v=this.o?Si(this.o):Si(Pn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(s,String(t),!0),this.B=!1}catch(I){Xi(this,I);return}if(t=a||"",a=new Map(this.headers),l)if(Object.getPrototypeOf(l)===Object.prototype)for(var y in l)a.set(y,l[y]);else if(typeof l.keys=="function"&&typeof l.get=="function")for(const I of l.keys())a.set(I,l.get(I));else throw Error("Unknown input type for opt_headers: "+String(l));l=Array.from(a.keys()).find(I=>I.toLowerCase()=="content-type"),y=g.FormData&&t instanceof g.FormData,!(0<=Array.prototype.indexOf.call(Fo,s,void 0))||l||y||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,T]of a)this.g.setRequestHeader(I,T);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zi(this),this.u=!0,this.g.send(t),this.u=!1}catch(I){Xi(this,I)}};function Xi(t,s){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=s,t.m=5,Yi(t),Wt(t)}function Yi(t){t.A||(t.A=!0,W(t,"complete"),W(t,"error"))}i.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,W(this,"complete"),W(this,"abort"),Wt(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wt(this,!0)),M.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Qi(this):this.bb())},i.bb=function(){Qi(this)};function Qi(t){if(t.h&&typeof h<"u"&&(!t.v[1]||he(t)!=4||t.Z()!=2)){if(t.u&&he(t)==4)Ei(t.Ea,0,t);else if(W(t,"readystatechange"),he(t)==4){t.h=!1;try{const T=t.Z();e:switch(T){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var s=!0;break e;default:s=!1}var a;if(!(a=s)){var l;if(l=T===0){var y=String(t.D).match(Vi)[1]||null;!y&&g.self&&g.self.location&&(y=g.self.location.protocol.slice(0,-1)),l=!xo.test(y?y.toLowerCase():"")}a=l}if(a)W(t,"complete"),W(t,"success");else{t.m=6;try{var I=2<he(t)?t.g.statusText:""}catch{I=""}t.l=I+" ["+t.Z()+"]",Yi(t)}}finally{Wt(t)}}}}function Wt(t,s){if(t.g){Zi(t);const a=t.g,l=t.v[0]?()=>{}:null;t.g=null,t.v=null,s||W(t,"ready");try{a.onreadystatechange=l}catch{}}}function Zi(t){t.I&&(g.clearTimeout(t.I),t.I=null)}i.isActive=function(){return!!this.g};function he(t){return t.g?t.g.readyState:0}i.Z=function(){try{return 2<he(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(t){if(this.g){var s=this.g.responseText;return t&&s.indexOf(t)==0&&(s=s.substring(t.length)),po(s)}};function er(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function jo(t){const s={};t=(t.g&&2<=he(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let l=0;l<t.length;l++){if(Y(t[l]))continue;var a=m(t[l]);const y=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const I=s[y]||[];s[y]=I,I.push(a)}v(s,function(l){return l.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function gt(t,s,a){return a&&a.internalChannelParams&&a.internalChannelParams[t]||s}function tr(t){this.Aa=0,this.i=[],this.j=new ct,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=gt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=gt("baseRetryDelayMs",5e3,t),this.cb=gt("retryDelaySeedMs",1e4,t),this.Wa=gt("forwardChannelMaxRetries",2,t),this.wa=gt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Ui(t&&t.concurrentRequestLimit),this.Da=new Mo,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=tr.prototype,i.la=8,i.G=1,i.connect=function(t,s,a,l){z(0),this.W=t,this.H=s||{},a&&l!==void 0&&(this.H.OSID=a,this.H.OAID=l),this.F=this.X,this.I=hr(this,null,this.W),Gt(this)};function Un(t){if(nr(t),t.G==3){var s=t.U++,a=le(t.I);if(N(a,"SID",t.K),N(a,"RID",s),N(a,"TYPE","terminate"),mt(t,a),s=new ye(t,t.j,s),s.L=2,s.v=Ht(le(a)),a=!1,g.navigator&&g.navigator.sendBeacon)try{a=g.navigator.sendBeacon(s.v.toString(),"")}catch{}!a&&g.Image&&(new Image().src=s.v,a=!0),a||(s.g=ur(s.j,null),s.g.ea(s.v)),s.F=Date.now(),Ft(s)}lr(t)}function zt(t){t.g&&(Fn(t),t.g.cancel(),t.g=null)}function nr(t){zt(t),t.u&&(g.clearTimeout(t.u),t.u=null),Kt(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&g.clearTimeout(t.s),t.s=null)}function Gt(t){if(!xi(t.h)&&!t.s){t.s=!0;var s=t.Ga;tt||vi(),nt||(tt(),nt=!0),pn.add(s,t),t.B=0}}function Bo(t,s){return Fi(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=s.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=at(S(t.Ga,t,s),cr(t,t.B)),t.B++,!0)}i.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const y=new ye(this,this.j,t);let I=this.o;if(this.S&&(I?(I=u(I),p(I,this.S)):I=this.S),this.m!==null||this.O||(y.H=I,I=null),this.P)e:{for(var s=0,a=0;a<this.i.length;a++){t:{var l=this.i[a];if("__data__"in l.map&&(l=l.map.__data__,typeof l=="string")){l=l.length;break t}l=void 0}if(l===void 0)break;if(s+=l,4096<s){s=a;break e}if(s===4096||a===this.i.length-1){s=a+1;break e}}s=1e3}else s=1e3;s=rr(this,y,s),a=le(this.I),N(a,"RID",t),N(a,"CVER",22),this.D&&N(a,"X-HTTP-Session-Id",this.D),mt(this,a),I&&(this.O?s="headers="+encodeURIComponent(String(Ji(I)))+"&"+s:this.m&&Mn(a,this.m,I)),Ln(this.h,y),this.Ua&&N(a,"TYPE","init"),this.P?(N(a,"$req",s),N(a,"SID","null"),y.T=!0,kn(y,a,null)):kn(y,a,s),this.G=2}}else this.G==3&&(t?ir(this,t):this.i.length==0||xi(this.h)||ir(this))};function ir(t,s){var a;s?a=s.l:a=t.U++;const l=le(t.I);N(l,"SID",t.K),N(l,"RID",a),N(l,"AID",t.T),mt(t,l),t.m&&t.o&&Mn(l,t.m,t.o),a=new ye(t,t.j,a,t.B+1),t.m===null&&(a.H=t.o),s&&(t.i=s.D.concat(t.i)),s=rr(t,a,1e3),a.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Ln(t.h,a),kn(a,l,s)}function mt(t,s){t.H&&q(t.H,function(a,l){N(s,l,a)}),t.l&&Hi({},function(a,l){N(s,l,a)})}function rr(t,s,a){a=Math.min(t.i.length,a);var l=t.l?S(t.l.Na,t.l,t):null;e:{var y=t.i;let I=-1;for(;;){const T=["count="+a];I==-1?0<a?(I=y[0].g,T.push("ofs="+I)):I=0:T.push("ofs="+I);let D=!0;for(let F=0;F<a;F++){let k=y[F].g;const V=y[F].map;if(k-=I,0>k)I=Math.max(0,y[F].g-100),D=!1;else try{Uo(V,T,"req"+k+"_")}catch{l&&l(V)}}if(D){l=T.join("&");break e}}}return t=t.i.splice(0,a),s.D=t,l}function sr(t){if(!t.g&&!t.u){t.Y=1;var s=t.Fa;tt||vi(),nt||(tt(),nt=!0),pn.add(s,t),t.v=0}}function xn(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=at(S(t.Fa,t),cr(t,t.v)),t.v++,!0)}i.Fa=function(){if(this.u=null,or(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=at(S(this.ab,this),t)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,z(10),zt(this),or(this))};function Fn(t){t.A!=null&&(g.clearTimeout(t.A),t.A=null)}function or(t){t.g=new ye(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var s=le(t.qa);N(s,"RID","rpc"),N(s,"SID",t.K),N(s,"AID",t.T),N(s,"CI",t.F?"0":"1"),!t.F&&t.ja&&N(s,"TO",t.ja),N(s,"TYPE","xmlhttp"),mt(t,s),t.m&&t.o&&Mn(s,t.m,t.o),t.L&&(t.g.I=t.L);var a=t.g;t=t.ia,a.L=1,a.v=Ht(le(s)),a.m=null,a.P=!0,Ni(a,t)}i.Za=function(){this.C!=null&&(this.C=null,zt(this),xn(this),z(19))};function Kt(t){t.C!=null&&(g.clearTimeout(t.C),t.C=null)}function ar(t,s){var a=null;if(t.g==s){Kt(t),Fn(t),t.g=null;var l=2}else if(Nn(t.h,s))a=s.D,ji(t.h,s),l=1;else return;if(t.G!=0){if(s.o)if(l==1){a=s.m?s.m.length:0,s=Date.now()-s.F;var y=t.B;l=Sn(),W(l,new ki(l,a)),Gt(t)}else sr(t);else if(y=s.s,y==3||y==0&&0<s.X||!(l==1&&Bo(t,s)||l==2&&xn(t)))switch(a&&0<a.length&&(s=t.h,s.i=s.i.concat(a)),y){case 1:Ne(t,5);break;case 4:Ne(t,10);break;case 3:Ne(t,6);break;default:Ne(t,2)}}}function cr(t,s){let a=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(a*=2),a*s}function Ne(t,s){if(t.j.info("Error code "+s),s==2){var a=S(t.fb,t),l=t.Xa;const y=!l;l=new De(l||"//www.google.com/images/cleardot.gif"),g.location&&g.location.protocol=="http"||jt(l,"https"),Ht(l),y?No(l.toString(),a):Lo(l.toString(),a)}else z(2);t.G=0,t.l&&t.l.sa(s),lr(t),nr(t)}i.fb=function(t){t?(this.j.info("Successfully pinged google.com"),z(2)):(this.j.info("Failed to ping google.com"),z(1))};function lr(t){if(t.G=0,t.ka=[],t.l){const s=Bi(t.h);(s.length!=0||t.i.length!=0)&&(L(t.ka,s),L(t.ka,t.i),t.h.i.length=0,U(t.i),t.i.length=0),t.l.ra()}}function hr(t,s,a){var l=a instanceof De?le(a):new De(a);if(l.g!="")s&&(l.g=s+"."+l.g),Bt(l,l.s);else{var y=g.location;l=y.protocol,s=s?s+"."+y.hostname:y.hostname,y=+y.port;var I=new De(null);l&&jt(I,l),s&&(I.g=s),y&&Bt(I,y),a&&(I.l=a),l=I}return a=t.D,s=t.ya,a&&s&&N(l,a,s),N(l,"VER",t.la),mt(t,l),l}function ur(t,s,a){if(s&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return s=t.Ca&&!t.pa?new M(new Vt({eb:a})):new M(t.pa),s.Ha(t.J),s}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function dr(){}i=dr.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Q(t,s){H.call(this),this.g=new tr(s),this.l=t,this.h=s&&s.messageUrlParams||null,t=s&&s.messageHeaders||null,s&&s.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=s&&s.initMessageHeaders||null,s&&s.messageContentType&&(t?t["X-WebChannel-Content-Type"]=s.messageContentType:t={"X-WebChannel-Content-Type":s.messageContentType}),s&&s.va&&(t?t["X-WebChannel-Client-Profile"]=s.va:t={"X-WebChannel-Client-Profile":s.va}),this.g.S=t,(t=s&&s.Sb)&&!Y(t)&&(this.g.m=t),this.v=s&&s.supportsCrossDomainXhr||!1,this.u=s&&s.sendRawJson||!1,(s=s&&s.httpSessionIdParam)&&!Y(s)&&(this.g.D=s,t=this.h,t!==null&&s in t&&(t=this.h,s in t&&delete t[s])),this.j=new $e(this)}R(Q,H),Q.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Q.prototype.close=function(){Un(this.g)},Q.prototype.o=function(t){var s=this.g;if(typeof t=="string"){var a={};a.__data__=t,t=a}else this.u&&(a={},a.__data__=En(t),t=a);s.i.push(new To(s.Ya++,t)),s.G==3&&Gt(s)},Q.prototype.N=function(){this.g.l=null,delete this.j,Un(this.g),delete this.g,Q.aa.N.call(this)};function fr(t){An.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var s=t.__sm__;if(s){e:{for(const a in s){t=a;break e}t=void 0}(this.i=t)&&(t=this.i,s=s!==null&&t in s?s[t]:void 0),this.data=s}else this.data=t}R(fr,An);function pr(){bn.call(this),this.status=1}R(pr,bn);function $e(t){this.g=t}R($e,dr),$e.prototype.ua=function(){W(this.g,"a")},$e.prototype.ta=function(t){W(this.g,new fr(t))},$e.prototype.sa=function(t){W(this.g,new pr)},$e.prototype.ra=function(){W(this.g,"b")},Q.prototype.send=Q.prototype.o,Q.prototype.open=Q.prototype.m,Q.prototype.close=Q.prototype.close,Cn.NO_ERROR=0,Cn.TIMEOUT=8,Cn.HTTP_ERROR=6,Io.COMPLETE="complete",mo.EventType=st,st.OPEN="a",st.CLOSE="b",st.ERROR="c",st.MESSAGE="d",H.prototype.listen=H.prototype.K,M.prototype.listenOnce=M.prototype.L,M.prototype.getLastError=M.prototype.Ka,M.prototype.getLastErrorCode=M.prototype.Ba,M.prototype.getStatus=M.prototype.Z,M.prototype.getResponseJson=M.prototype.Oa,M.prototype.getResponseText=M.prototype.oa,M.prototype.send=M.prototype.ea,M.prototype.setWithCredentials=M.prototype.Ha}).apply(typeof Xt<"u"?Xt:typeof self<"u"?self:typeof window<"u"?window:{});const zr="@firebase/firestore",Gr="4.7.12";/**
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
 */class G{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}G.UNAUTHENTICATED=new G(null),G.GOOGLE_CREDENTIALS=new G("google-credentials-uid"),G.FIRST_PARTY=new G("first-party-uid"),G.MOCK_USER=new G("mock-user");/**
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
 */let Dt="11.7.0";/**
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
 */const Xe=new si("@firebase/firestore");function ie(i,...e){if(Xe.logLevel<=O.DEBUG){const n=e.map(gi);Xe.debug(`Firestore (${Dt}): ${i}`,...n)}}function Ys(i,...e){if(Xe.logLevel<=O.ERROR){const n=e.map(gi);Xe.error(`Firestore (${Dt}): ${i}`,...n)}}function kh(i,...e){if(Xe.logLevel<=O.WARN){const n=e.map(gi);Xe.warn(`Firestore (${Dt}): ${i}`,...n)}}function gi(i){if(typeof i=="string")return i;try{/**
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
*/return function(n){return JSON.stringify(n)}(i)}catch{return i}}/**
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
 */function Qs(i,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Zs(i,r,n)}function Zs(i,e,n){let r=`FIRESTORE (${Dt}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Ys(r),new Error(r)}function yt(i,e,n,r){let o="Unexpected state";typeof n=="string"?o=n:r=n,i||Zs(e,o,r)}/**
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
 */class _t{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class eo{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Oh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(G.UNAUTHENTICATED))}shutdown(){}}class Dh{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Nh{constructor(e){this.t=e,this.currentUser=G.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){yt(this.o===void 0,42304);let r=this.i;const o=w=>this.i!==r?(r=this.i,n(w)):Promise.resolve();let c=new _t;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new _t,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const w=c;e.enqueueRetryable(async()=>{await w.promise,await o(this.currentUser)})},g=w=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=w,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(w=>g(w)),setTimeout(()=>{if(!this.auth){const w=this.t.getImmediate({optional:!0});w?g(w):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new _t)}},0),h()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(yt(typeof r.accessToken=="string",31837,{l:r}),new eo(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return yt(e===null||typeof e=="string",2055,{h:e}),new G(e)}}class Lh{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=G.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Mh{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Lh(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(G.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Kr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Uh{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,te(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){yt(this.o===void 0,3512);const r=c=>{c.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const h=c.token!==this.m;return this.m=c.token,ie("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>r(c))};const o=c=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>o(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Kr(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(yt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Kr(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function xh(i){return i.name==="IndexedDbTransactionError"}const ni="(default)";class hn{constructor(e,n){this.projectId=e,this.database=n||ni}static empty(){return new hn("","")}get isDefaultDatabase(){return this.database===ni}isEqual(e){return e instanceof hn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var qr,P;(P=qr||(qr={}))[P.OK=0]="OK",P[P.CANCELLED=1]="CANCELLED",P[P.UNKNOWN=2]="UNKNOWN",P[P.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",P[P.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",P[P.NOT_FOUND=5]="NOT_FOUND",P[P.ALREADY_EXISTS=6]="ALREADY_EXISTS",P[P.PERMISSION_DENIED=7]="PERMISSION_DENIED",P[P.UNAUTHENTICATED=16]="UNAUTHENTICATED",P[P.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",P[P.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",P[P.ABORTED=10]="ABORTED",P[P.OUT_OF_RANGE=11]="OUT_OF_RANGE",P[P.UNIMPLEMENTED=12]="UNIMPLEMENTED",P[P.INTERNAL=13]="INTERNAL",P[P.UNAVAILABLE=14]="UNAVAILABLE",P[P.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Xs([4294967295,4294967295],0);/**
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
 */const Fh=41943040;/**
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
 */const jh=1048576;function Kn(){return typeof document<"u"?document:null}/**
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
 */class Bh{constructor(e,n,r=1e3,o=1.5,c=6e4){this.bi=e,this.timerId=n,this.u_=r,this.c_=o,this.l_=c,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const n=Math.floor(this.h_+this.d_()),r=Math.max(0,Date.now()-this.T_),o=Math.max(0,n-r);o>0&&ie("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.h_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,o,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
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
 */class mi{constructor(e,n,r,o,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=o,this.removalCallback=c,this.deferred=new _t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,o,c){const h=Date.now()+r,g=new mi(e,n,h,o,c);return g.start(r),g}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Jr,Xr;(Xr=Jr||(Jr={})).ya="default",Xr.Cache="cache";/**
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
 */function Hh(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const Yr=new Map;function Vh(i,e,n,r){if(e===!0&&r===!0)throw new X(J.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function $h(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Qs(12329,{type:typeof i})}function Wh(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new X(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$h(i);throw new X(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return i}/**
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
 */const to="firestore.googleapis.com",Qr=!0;class Zr{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=to,this.ssl=Qr}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Qr;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Fh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<jh)throw new X(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Vh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new X(J.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new X(J.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new X(J.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class no{constructor(e,n,r,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zr({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zr(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Oh;switch(r.type){case"firstParty":return new Mh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Yr.get(n);r&&(ie("ComponentProvider","Removing Datastore"),Yr.delete(n),r.terminate())}(this),Promise.resolve()}}function zh(i,e,n,r={}){var o;i=Wh(i,no);const c=ri(e),h=i._getSettings(),g=Object.assign(Object.assign({},h),{emulatorOptions:i._getEmulatorOptions()}),w=`${e}:${n}`;c&&ls(`https://${w}`),h.host!==to&&h.host!==w&&kh("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const E=Object.assign(Object.assign({},h),{host:w,ssl:c,emulatorOptions:r});if(!Me(E,g)&&(i._setSettings(E),r.mockUserToken)){let b,C;if(typeof r.mockUserToken=="string")b=r.mockUserToken,C=G.MOCK_USER;else{b=Yo(r.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const S=r.mockUserToken.sub||r.mockUserToken.user_id;if(!S)throw new X(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");C=new G(S)}i._authCredentials=new Dh(new eo(b,C))}}/**
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
 */const es="AsyncQueue";class ts{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new Bh(this,"async_queue_retry"),this.ju=()=>{const r=Kn();r&&ie(es,"Visibility state changed to "+r.visibilityState),this.y_.A_()},this.Hu=e;const n=Kn();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const n=Kn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const n=new _t;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!xh(e))throw e;ie(es,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const n=this.Hu.then(()=>(this.Wu=!0,e().catch(r=>{throw this.Ku=r,this.Wu=!1,Ys("INTERNAL UNHANDLED ERROR: ",ns(r)),r}).then(r=>(this.Wu=!1,r))));return this.Hu=n,n}enqueueAfterDelay(e,n,r){this.Ju(),this.zu.indexOf(e)>-1&&(n=0);const o=mi.createAndSchedule(this,e,n,r,c=>this.Xu(c));return this.Uu.push(o),o}Ju(){this.Ku&&Qs(47125,{ec:ns(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const n of this.Uu)if(n.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const n=this.Uu.indexOf(e);this.Uu.splice(n,1)}}function ns(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Gh extends no{constructor(e,n,r,o){super(e,n,r,o),this.type="firestore",this._queue=new ts,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ts(e),this._firestoreClient=void 0,await e}}}function Kh(i,e){const n=typeof i=="object"?i:fs(),r=typeof i=="string"?i:ni,o=ai(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const c=Jo("firestore");c&&zh(o,...c)}return o}/**
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
 */class qh{constructor(e){this._methodName=e}}(function(e,n=!0){(function(o){Dt=o})(Qe),Je(new Ue("firestore",(r,{instanceIdentifier:o,options:c})=>{const h=r.getProvider("app").getImmediate(),g=new Gh(new Nh(r.getProvider("auth-internal")),new Uh(h,r.getProvider("app-check-internal")),function(E,b){if(!Object.prototype.hasOwnProperty.apply(E.options,["projectId"]))throw new X(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hn(E.options.projectId,b)}(h,o),h);return c=Object.assign({useFetchStreams:n},c),g._setSettings(c),g},"PUBLIC").setMultipleInstances(!0)),Pe(zr,Gr,e),Pe(zr,Gr,"esm2017")})();console.log("main.js 로드됨");const Jh={apiKey:"AIzaSyA4AYUN2X_84iWC4w3avQ8m6K_DrpRnSro",authDomain:"vocabularycards-aa036.firebaseapp.com",projectId:"vocabularycards-aa036",storageBucket:"vocabularycards-aa036.appspot.com",messagingSenderId:"982130486893",appId:"1:982130486893:web:f3f0e11eb27b098d649964"};let oe,Et;try{const i=ds(Jh);oe=Ph(i),Et=Kh(i),console.log("Firebase 초기화 성공",{auth:oe})}catch(i){throw console.error("Firebase 초기화 오류:",i.message),alert("Firebase 초기화 실패: "+i.message),new Error("Firebase 초기화 실패")}let Tt=[],At=0,bt=null;oe.onAuthStateChanged(i=>{console.log("인증 상태 변경:",i?i.email:"로그아웃"),bt=i;const e=document.querySelector(".card-section"),n=document.querySelector(".input-section"),r=document.querySelector('button[onclick="logout()"]'),o=document.getElementById("auth-section");i?(e.style.display="block",n.style.display="block",r.style.display="inline-block",o.style.display="none",loadCards(),document.getElementById("user-status").textContent=`로그인: ${i.email}`):(e.style.display="none",n.style.display="none",r.style.display="none",o.style.display="block",document.getElementById("user-status").textContent="로그아웃 상태")});window.login=function(){if(!oe){console.error("auth가 초기화되지 않았습니다."),alert("Firebase가 초기화되지 않았습니다. 페이지를 새로고침하세요.");return}console.log("로그인 버튼 클릭됨");const i=prompt("이메일을 입력하세요:"),e=prompt("비밀번호를 입력하세요:");if(!i||!e){alert("이메일과 비밀번호를 입력해주세요!");return}console.log("로그인 시도 - 이메일:",i,"비밀번호:",e),oe.signInWithEmailAndPassword(i,e).then(n=>{console.log("로그인 성공:",n.user.email)}).catch(n=>{console.error("로그인 오류:",n.message,"코드:",n.code),alert("로그인 실패: "+n.message+" (코드: "+n.code+")")})};window.signup=function(){if(!oe){console.error("auth가 초기화되지 않았습니다."),alert("Firebase가 초기화되지 않았습니다. 페이지를 새로고침하세요.");return}console.log("회원가입 버튼 클릭됨");const i=prompt("이메일을 입력하세요:"),e=prompt("비밀번호를 입력하세요:");if(!i||!e){alert("이메일과 비밀번호를 입력해주세요!");return}if(!i.includes("@")||i.length<5){alert("유효한 이메일 주소를 입력해주세요!");return}if(e.length<6){alert("비밀번호는 최소 6자 이상이어야 합니다!");return}console.log("회원가입 시도 - 이메일:",i,"비밀번호:",e),console.log("auth 객체 상태:",oe?"auth 존재":"auth 없음");try{console.log("auth.createUserWithEmailAndPassword 호출 시작"),gl(oe,i,e).then(n=>{console.log("회원가입 성공:",n.user.email),alert("회원가입 성공! 로그인 상태입니다.")}).catch(n=>{console.error("회원가입 오류:",n.message,"코드:",n.code),alert("회원가입 실패: "+n.message+" (코드: "+n.code+")")}).finally(()=>{console.log("회원가입 요청 완료 (성공/실패 여부와 관계없이)")}),console.log("auth.createUserWithEmailAndPassword 호출 완료")}catch(n){console.error("회원가입 중 예외 발생:",n.message),alert("회원가입 중 예외 발생: "+n.message)}};window.logout=function(){if(!oe){console.error("auth가 초기화되지 않았습니다."),alert("Firebase가 초기화되지 않았습니다.");return}console.log("로그아웃 버튼 클릭됨"),oe.signOut()};window.addCard=function(){if(!Et||!bt){console.error("db 또는 currentUser가 초기화되지 않았습니다."),alert("Firebase 또는 사용자 상태가 초기화되지 않았습니다.");return}console.log("새 단어 추가 버튼 클릭됨");const i=prompt("영단어를 입력하세요:"),e=prompt("한글 뜻을 입력하세요:");i&&e&&Et.collection("users").doc(bt.uid).collection("cards").add({word:i,meaning:e,timestamp:qh.serverTimestamp()}).then(()=>loadCards())};window.flipCard=function(){console.log("카드 클릭됨"),document.querySelector(".card").classList.toggle("flipped")};window.loadCards=function(){if(console.log("카드 로드 시도"),!Et||!bt){console.error("db 또는 currentUser가 초기화되지 않았습니다.");return}Et.collection("users").doc(bt.uid).collection("cards").orderBy("timestamp","desc").get().then(i=>{Tt=i.docs.map(e=>({id:e.id,...e.data()})),At=0,updateCard()}).catch(i=>console.error("카드 로드 오류:",i))};window.updateCard=function(){if(console.log("카드 업데이트"),Tt.length>0){const i=Tt[At];document.getElementById("word").textContent=i.word,document.getElementById("meaning").textContent=i.meaning,document.querySelector(".card").classList.remove("flipped")}else document.getElementById("word").textContent="단어를 추가하세요!",document.getElementById("meaning").textContent="뜻을 추가하세요!"};window.checkAnswer=function(){console.log("정답 확인 버튼 클릭됨");const i=document.getElementById("userWord").value.trim(),e=document.getElementById("userMeaning").value.trim(),n=Tt[At];if(n){const r=i.toLowerCase()===n.word.toLowerCase(),o=e===n.meaning,c=document.getElementById("result");r&&o?(c.textContent="정답입니다!",c.style.color="#4CAF50",nextCard()):(c.textContent=`오답입니다! 정답: ${n.word} - ${n.meaning}`,c.style.color="#ff4444")}else result.textContent="먼저 단어를 추가하세요!",result.style.color="#ff4444";document.getElementById("userWord").value="",document.getElementById("userMeaning").value=""};window.nextCard=function(){console.log("다음 카드 버튼 클릭됨"),At=(At+1)%Tt.length,updateCard()};
