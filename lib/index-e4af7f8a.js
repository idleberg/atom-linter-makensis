"use strict";var e=require("path"),n=require("fs"),t=require("child_process"),r=require("assert"),o=require("./_commonjsHelpers-68cdf74f.js"),i=require("crypto");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function u(e,n){return n.forEach((function(n){n&&"string"!=typeof n&&!Array.isArray(n)&&Object.keys(n).forEach((function(t){if("default"!==t&&!(t in e)){var r=Object.getOwnPropertyDescriptor(n,t);Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:function(){return n[t]}})}}))})),Object.freeze(e)}var c=a(e),s=a(n),f=a(t),l=a(r),d=a(i),p={},v={},h="__lodash_hash_undefined__",m="[object Function]",y="[object GeneratorFunction]",g=/^\[object .+?Constructor\]$/,_="object"==typeof o.commonjsGlobal&&o.commonjsGlobal&&o.commonjsGlobal.Object===Object&&o.commonjsGlobal,w="object"==typeof self&&self&&self.Object===Object&&self,b=_||w||Function("return this")();function E(e,n){return!!(e?e.length:0)&&function(e,n,t){if(n!=n)return function(e,n,t,r){var o=e.length,i=t+(r?1:-1);for(;r?i--:++i<o;)if(n(e[i],i,e))return i;return-1}(e,S,t);var r=t-1,o=e.length;for(;++r<o;)if(e[r]===n)return r;return-1}(e,n,0)>-1}function x(e,n,t){for(var r=-1,o=e?e.length:0;++r<o;)if(t(n,e[r]))return!0;return!1}function S(e){return e!=e}function O(e,n){return e.has(n)}function j(e){var n=-1,t=Array(e.size);return e.forEach((function(e){t[++n]=e})),t}var P,A=Array.prototype,N=Function.prototype,C=Object.prototype,T=b["__core-js_shared__"],R=(P=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"",H=N.toString,F=C.hasOwnProperty,k=C.toString,L=RegExp("^"+H.call(F).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),I=A.splice,M=Y(b,"Map"),$=Y(b,"Set"),D=Y(Object,"create");function K(e){var n=-1,t=e?e.length:0;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}function z(e){var n=-1,t=e?e.length:0;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}function G(e){var n=-1,t=e?e.length:0;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}function W(e){var n=-1,t=e?e.length:0;for(this.__data__=new G;++n<t;)this.add(e[n])}function q(e,n){for(var t,r,o=e.length;o--;)if((t=e[o][0])===(r=n)||t!=t&&r!=r)return o;return-1}function B(e){if(!Z(e)||(n=e,R&&R in n))return!1;var n,t=function(e){var n=Z(e)?k.call(e):"";return n==m||n==y}(e)||function(e){var n=!1;if(null!=e&&"function"!=typeof e.toString)try{n=!!(e+"")}catch(e){}return n}(e)?L:g;return t.test(function(e){if(null!=e){try{return H.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e))}K.prototype.clear=function(){this.__data__=D?D(null):{}},K.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},K.prototype.get=function(e){var n=this.__data__;if(D){var t=n[e];return t===h?void 0:t}return F.call(n,e)?n[e]:void 0},K.prototype.has=function(e){var n=this.__data__;return D?void 0!==n[e]:F.call(n,e)},K.prototype.set=function(e,n){return this.__data__[e]=D&&void 0===n?h:n,this},z.prototype.clear=function(){this.__data__=[]},z.prototype.delete=function(e){var n=this.__data__,t=q(n,e);return!(t<0)&&(t==n.length-1?n.pop():I.call(n,t,1),!0)},z.prototype.get=function(e){var n=this.__data__,t=q(n,e);return t<0?void 0:n[t][1]},z.prototype.has=function(e){return q(this.__data__,e)>-1},z.prototype.set=function(e,n){var t=this.__data__,r=q(t,e);return r<0?t.push([e,n]):t[r][1]=n,this},G.prototype.clear=function(){this.__data__={hash:new K,map:new(M||z),string:new K}},G.prototype.delete=function(e){return X(this,e).delete(e)},G.prototype.get=function(e){return X(this,e).get(e)},G.prototype.has=function(e){return X(this,e).has(e)},G.prototype.set=function(e,n){return X(this,e).set(e,n),this},W.prototype.add=W.prototype.push=function(e){return this.__data__.set(e,h),this},W.prototype.has=function(e){return this.__data__.has(e)};var U=$&&1/j(new $([,-0]))[1]==1/0?function(e){return new $(e)}:function(){};function X(e,n){var t,r,o=e.__data__;return("string"==(r=typeof(t=n))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t)?o["string"==typeof n?"string":"hash"]:o.map}function Y(e,n){var t=function(e,n){return null==e?void 0:e[n]}(e,n);return B(t)?t:void 0}function Z(e){var n=typeof e;return!!e&&("object"==n||"function"==n)}var V=function(e){return e&&e.length?function(e,n,t){var r=-1,o=E,i=e.length,a=!0,u=[],c=u;if(t)a=!1,o=x;else if(i>=200){var s=n?null:U(e);if(s)return j(s);a=!1,o=O,c=new W}else c=n?[]:u;e:for(;++r<i;){var f=e[r],l=n?n(f):f;if(f=t||0!==f?f:0,a&&l==l){for(var d=c.length;d--;)if(c[d]===l)continue e;n&&c.push(l),u.push(f)}else o(c,l,t)||(c!==u&&c.push(l),u.push(f))}return u}(e):[]},J={exports:{}},Q={};Object.defineProperty(Q,"__esModule",{value:!0}),Q.assign=Q.CACHE_KEY=Q.KNOWN_SHELLS=void 0,Q.identifyEnvironment=function(){var e=ie(),n=e.command,t=e.parameters,r=e.options;return r.timeout=4e3,(0,te.spawnSync)(n,t,r).stdout.toString().split("\0")},Q.identifyEnvironmentAsync=function(){return new Promise((function(e,n){var t=ie(),r=t.command,o=t.parameters,i=t.options,a=(0,te.spawn)(r,o,i),u=[],c=setTimeout((function(){a.kill(),n(new Error("Process execution timed out"))}),4e3);a.stdout.on("data",(function(e){u.push(e)})),a.on("close",(function(){clearTimeout(c),e(u.join("").split("\0"))})),a.on("error",(function(e){n(e)}))}))},Q.parse=function(e){var n={},t=!0,r=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var u=i.value,c=u.indexOf("=");if(-1!==c){var s=u.slice(0,c),f=u.slice(c+1);n[s]=f}}}catch(e){r=!0,o=e}finally{try{!t&&a.return&&a.return()}finally{if(r)throw o}}return n},Q.applySugar=function(e){var n=process.env.PATH?process.env.PATH.split(":"):[];if(e.PATH){var t=!0,r=!1,o=void 0;try{for(var i,a=e.PATH.split(":")[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var u=i.value;u&&-1===n.indexOf(u)&&n.push(u)}}catch(e){r=!0,o=e}finally{try{!t&&a.return&&a.return()}finally{if(r)throw o}}}var c=!0,s=!1,f=void 0;try{for(var l,d=oe[Symbol.iterator]();!(c=(l=d.next()).done);c=!0){var p=l.value;-1===n.indexOf(p)&&(n=[p].concat(n))}}catch(e){s=!0,f=e}finally{try{!c&&d.return&&d.return()}finally{if(s)throw f}}e.USER||(process.env.USER?e.USER=process.env.USER:e.HOME&&(e.USER=ee.default.basename(e.HOME)));return e.PATH=(0,ne.default)(n).join(":"),e.PWD=process.cwd(),e.OLDPWD=e.PWD,e},Q.getCommand=ie;var ee=re(c.default),ne=re(V),te=f.default;function re(e){return e&&e.__esModule?e:{default:e}}var oe=["/bin","/sbin","/usr/bin","/usr/sbin","/usr/local/bin","/usr/local/sbin"];function ie(){var e='import os;print(\\"\\0\\".join(map(\\"=\\".join, dict(os.environ).items()))+\\"\\0\\")',n='python -c "'+e+'"||python3 -c "'+e+'"||env|sed -n -e "s/^\\([A-Za-z_][A-Za-z0-9_]*\\)=.*/\\1/p"|while read name;do [ "$name" != "_" -a -n "$(eval "printf \\"%s\\" \\"\\${$name+x}\\"")" ]&&value="$(eval "printf \\"%s\\" \\"\\${$name}\\"")"&&printf "%s=%s\\0" "$name" "$value";done;exit;',t="sh -c '"+n+"';exit;",r=process.env.SHELL||"sh",o=["-c",t],i=ee.default.basename(r);return"bash"===i?o=["-c","source ~/.bashrc;source ~/.bash_profile;"+n]:"zsh"===i?o=["-c","source ~/.zshrc;"+n]:"fish"===i?o=["-c","source ~/.config/fish/config.fish;"+t]:"sh"!==i&&"ksh"!==i||(o=["-c",n]),{command:r,parameters:o,options:{encoding:"utf8"}}}Q.KNOWN_SHELLS=["zsh","bash","fish"],Q.CACHE_KEY="__STEELBRAIN_CONSISTENT_ENV_V1",Q.assign=Object.assign||function(e,n){for(var t in n)({}).hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e};var ae,ue=c.default,ce=(ae=ue)&&ae.__esModule?ae:{default:ae},se=Q;J.exports=function(){if("win32"===process.platform||!process.env.SHELL)return(0,se.assign)({},process.env);if(o.commonjsGlobal[se.CACHE_KEY])return(0,se.assign)({},o.commonjsGlobal[se.CACHE_KEY]);var e=ce.default.basename(process.env.SHELL);if(-1===se.KNOWN_SHELLS.indexOf(e))return(0,se.assign)({},process.env);try{var n=(0,se.applySugar)((0,se.parse)((0,se.identifyEnvironment)()));return o.commonjsGlobal[se.CACHE_KEY]=n,n}catch(e){return console.error("[consistent-env] Unable to determine environment",e),(0,se.assign)({},process.env)}},J.exports.async=function(){return new Promise((function(e){if("win32"!==process.platform&&process.env.SHELL)if(o.commonjsGlobal[se.CACHE_KEY])e((0,se.assign)({},o.commonjsGlobal[se.CACHE_KEY]));else{var n=ce.default.basename(process.env.SHELL);-1===se.KNOWN_SHELLS.indexOf(n)?e((0,se.assign)({},process.env)):e((0,se.identifyEnvironmentAsync)().then(se.parse).then(se.applySugar).then((function(e){return o.commonjsGlobal[se.CACHE_KEY]=e,e})))}else e((0,se.assign)({},process.env))})).catch((function(e){return console.error("[consistent-env] Unable to determine environment",e),(0,se.assign)({},process.env)}))};var fe={},le={},de=Symbol("cache deleted");var pe=function(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];function t(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];var a=JSON.stringify(o),u=o.length;if(a in t.__sb_cache&&t.__sb_cache[a]!==de){var c=t.__sb_cache[a];return!n.async||c&&"Promise"===c.constructor.name?c:Promise.resolve(c)}var s=void 0;if(s=1===u?e.call(this,o[0]):2===u?e.call(this,o[0],o[1]):3===u?e.call(this,o[0],o[1],o[2]):4===u?e.call(this,o[0],o[1],o[2],o[3]):e.apply(this,o),t.__sb_cache[a]=s,n.async){if(!s||"Promise"!==s.constructor.name)throw new Error("Memoization Error, Async function returned non-promise value");return s.then((function(e){return t.__sb_cache[a]=e,e}),(function(e){throw t.__sb_cache[a]=de,e}))}return s}return t.__sb_cache={},t},ve={};function he(e){var n=arguments.length<=1||void 0===arguments[1]||arguments[1];return function(){for(var t=this,r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];var a=new Promise((function(n,r){o.push((function(e,t){e?r(e):n(t)})),e.apply(t,o)}));return n||(a=a.then((function(e){return void 0===e||e})).catch((function(){return!1}))),a}}Object.defineProperty(ve,"__esModule",{value:!0}),ve.default=he,ve.promisify=he,ve.promisifyAll=function(e){var n=arguments.length<=1||void 0===arguments[1]||arguments[1],t=Object.assign({},e);for(var r in t)({}).hasOwnProperty.call(t,r)&&"function"==typeof t[r]&&(t[r+"Async"]=he(t[r],n));return t},Object.defineProperty(le,"__esModule",{value:!0}),le.findAsync=le.find=void 0;var me,ye,ge=(me=function*(e,n){for(var t=[].concat(n),r=e.split(_e.default.sep);r.length;){var o=r.join(_e.default.sep);""===o&&(o=_e.default.resolve(e,"/"));for(var i=0,a=t.length;i<a;++i){var u=t[i],c=_e.default.join(o,u);try{return yield xe(c,we.default.R_OK),c}catch(e){}}r.pop()}return null},ye=function(){var e=me.apply(this,arguments);return new Promise((function(n,t){function r(o,i){try{var a=e[o](i),u=a.value}catch(e){return void t(e)}if(!a.done)return Promise.resolve(u).then((function(e){return r("next",e)}),(function(e){return r("throw",e)}));n(u)}return r("next")}))},function(e,n){return ye.apply(this,arguments)}),_e=Ee(c.default),we=Ee(s.default),be=Ee(pe);function Ee(e){return e&&e.__esModule?e:{default:e}}var xe=(0,Ee(ve).default)(we.default.access);le.find=(0,be.default)((function(e,n){for(var t=[].concat(n),r=e.split(_e.default.sep);r.length;){var o=r.join(_e.default.sep);""===o&&(o=_e.default.resolve(e,"/"));for(var i=0,a=t.length;i<a;++i){var u=t[i],c=_e.default.join(o,u);try{return we.default.accessSync(c,we.default.R_OK),c}catch(e){}}r.pop()}return null})),le.findAsync=(0,be.default)(ge,{async:!0}),Object.defineProperty(fe,"__esModule",{value:!0}),fe.clearCache=fe.getPathAsync=fe.getPath=void 0;var Se=function(){var e=function(e){return function(){var n=e.apply(this,arguments);return new Promise((function(e,t){function r(o,i){try{var a=n[o](i),u=a.value}catch(e){return void t(e)}if(!a.done)return Promise.resolve(u).then((function(e){return r("next",e)}),(function(e){return r("throw",e)}));e(u)}return r("next")}))}}((function*(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0],n=e;return n||(n=process.cwd()),(yield(0,je.findAsync)(n,Oe.default.join("node_modules",".bin")))||""}));return function(n){return e.apply(this,arguments)}}(),Oe=function(e){return e&&e.__esModule?e:{default:e}}(c.default),je=le;function Pe(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0],n=e;return n||(n=process.cwd()),(0,je.find)(n,Oe.default.join("node_modules",".bin"))||""}fe.default=Pe,fe.getPath=Pe,fe.getPathAsync=Se,fe.clearCache=function(){je.find.__sb_cache={},je.findAsync.__sb_cache={}},Object.defineProperty(v,"__esModule",{value:!0}),v.getSpawnOptions=void 0;var Ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};v.getSpawnOptions=function(){var e=function(e){return function(){var n=e.apply(this,arguments);return new Promise((function(e,t){function r(o,i){try{var a=n[o](i),u=a.value}catch(e){return void t(e)}if(!a.done)return Promise.resolve(u).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(u)}return r("next")}))}}((function*(e){var n=Object.assign({},e,{env:Ie(yield(0,Re.async)(),e.env)}),t=void 0,r=e.local;if(r&&(t=yield(0,He.getPathAsync)(r.directory)),r&&t)for(var o in n.env)if({}.hasOwnProperty.call(n.env,o)&&"PATH"===o){var i=n.env[o];n.env[o]=r.prepend?t+ke+i:i+ke+t;break}return delete n.timeout,n.env.OS&&(n.env.OS=void 0),process.versions.electron&&(n.env.ELECTRON_RUN_AS_NODE="1",n.env.ATOM_SHELL_INTERNAL_RUN_AS_NODE="1",n.env.ELECTRON_NO_ATTACH_CONSOLE="1"),n}));return function(n){return e.apply(this,arguments)}}(),v.validate=function(e,n,t){var r=Object.assign({},t);if((0,Ce.default)("string"==typeof e&&e,"filePath must be a string"),(0,Ce.default)(Array.isArray(n),"parameters must be an array"),(0,Ce.default)("object"===(void 0===r?"undefined":Ae(r))&&r,"options must be an object"),r.stream){var o=r.stream;(0,Ce.default)("both"===o||"stdout"===o||"stderr"===o,"options.stream should be stdout|stderr|both")}else r.stream="stdout";r.timeout?(0,Ce.default)("number"==typeof r.timeout,"options.timeout must be a number"):r.timeout=1/0;r.env?(0,Ce.default)("object"===Ae(r.env),"options.env must be an object"):r.env={};r.stdin?(0,Ce.default)("string"==typeof r.stdin||Buffer.isBuffer(r.stdin),"options.stdin must be a string or a Buffer"):r.stdin=null;void 0!==r.throwOnStderr?(0,Ce.default)("boolean"==typeof r.throwOnStderr,"options.throwOnStderr must be a boolean"):r.throwOnStderr=!0;void 0!==r.local&&((0,Ce.default)("object"===Ae(r.local),"options.local must be an object"),(0,Ce.default)("string"==typeof r.local.directory,"options.local.directory must be a string"),void 0!==r.local.prepend?(0,Ce.default)("boolean"==typeof r.local.prepend,"options.local.prepend must be a boolean"):r.local.prepend=!1);void 0!==r.allowEmptyStderr?(0,Ce.default)("boolean"==typeof r.allowEmptyStderr,"options.throwWhenEmptyStderr must be a boolean"):r.allowEmptyStderr=!1;void 0!==r.ignoreExitCode?(0,Ce.default)("boolean"==typeof r.ignoreExitCode,"options.ignoreExitCode must be a boolean"):r.ignoreExitCode=!1;return r},v.mergePath=Le,v.mergeEnv=Ie,v.escape=function(e){return'"'+String(e).replace(/"/g,'\\"')+'"'},v.shouldNormalizeForWindows=function(e,n){var t=Ne.default.basename(e);return"win32"===process.platform&&!n.shell&&"cmd.exe"!==t&&"cmd"!==t},v.getENOENTError=function(e,n){var t=new Error("spawn "+e+" ENOENT");return t.code="ENOENT",t.errno="ENOENT",t.syscall="spawn "+e,t.path=e,t.spawnargs=n,t};var Ne=Fe(c.default),Ce=Fe(l.default),Te=Fe(V),Re=J.exports,He=fe;function Fe(e){return e&&e.__esModule?e:{default:e}}var ke="win32"===process.platform?";":":";function Le(e,n){return(0,Te.default)(e.split(";").concat(n.split(";")).map((function(e){return e.trim()})).filter((function(e){return e}))).join(";")}function Ie(e,n){if("win32"!==process.platform)return Object.assign(e,n);var t={PATH:""};for(var r in e)"PATH"===r.toUpperCase()?t.PATH=Le(t.PATH,e[r]):t[r]=e[r];for(var o in n)"PATH"===o.toUpperCase()?t.PATH=Le(t.PATH,n[o]):t[o]=n[o];return t}var Me,$e=function(){var e=We((function*(e,n,t,r){var o=yield(0,Ge.getSpawnOptions)(t),i=e,a=n,u=!1;if((0,Ge.shouldNormalizeForWindows)(i,t)){o.windowsVerbatimArguments=!0;var c=[i];/\s/.test(i)&&(c=c.map(Ge.escape)),c=c.concat(a.map(Ge.escape)),i=process.env.comspec||"cmd.exe",a=["/s","/c",'"'+c.join(" ")+'"'],u=!0}return new Promise((function(c,s){var f=(0,ze.spawn)(i,a,o),l={stdout:[],stderr:[]},d=void 0;if(f.stdout&&f.stdout.on("data",(function(e){l.stdout.push(e)})),f.stderr&&f.stderr.on("data",(function(e){l.stderr.push(e)})),f.on("error",(function(e){s(e)})),f.on("close",(function(r){clearTimeout(d);var o=l.stdout.join("").trim(),i=l.stderr.join("").trim();u&&i==="'"+e+"' is not recognized as an internal or external command,\r\noperable program or batch file."?s((0,Ge.getENOENTError)(e,n)):"stdout"===t.stream?i&&t.throwOnStderr?s(new Error(i)):0===r||t.ignoreExitCode?c(o):(console.error("[exec] Process exited with no-zero code, stdout: ",o),s(new Error("Process exited with non-zero code: "+r))):"stderr"===t.stream?0!==i.length||t.allowEmptyStderr?c(i):s(new Error("Process exited with no output, code: "+r)):c({stdout:o,stderr:i,exitCode:r})})),f.stdin){if(t.stdin)try{f.stdin.write(t.stdin)}catch(e){}try{f.stdin.end()}catch(e){}}t.timeout!==1/0&&(d=setTimeout((function(){De(f),s(new Error("Process execution timed out"))}),t.timeout)),r(f)}))}));return function(n,t,r,o){return e.apply(this,arguments)}}(),De=(Me=We((function*(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"SIGTERM",t=Ke.default.basename(e.spawnfile);if("win32"===process.platform&&"wmic.exe"!==t&&"wmic"!==t)try{var r=yield qe("wmic",["process","where","(ParentProcessId="+e.pid+")","get","processid"],{stream:"stdout",timeout:6e4});r.split(/\s+/).filter((function(e){return/^\d+$/.test(e)})).map((function(e){return parseInt(e,10)})).filter((function(n){return n!==e.pid&&n>0})).forEach((function(e){process.kill(e,n)}))}catch(e){}else e.kill(n)})),function(e){return Me.apply(this,arguments)}),Ke=function(e){return e&&e.__esModule?e:{default:e}}(c.default),ze=f.default,Ge=v;function We(e){return function(){var n=e.apply(this,arguments);return new Promise((function(e,t){return function r(o,i){try{var a=n[o](i),u=a.value}catch(e){return void t(e)}if(!a.done)return Promise.resolve(u).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(u)}("next")}))}}function qe(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=(0,Ge.validate)(e,n,t),o=null,i=null,a=$e(e,n,r,(function(e){o?De(e,o):i=e}));return a.kill=function(e){i?De(i,e):o=e||"SIGTERM"},a}var Be={exec:qe,execNode:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(0,Ge.validate)(e,n,t),qe(process.execPath,[e].concat(n),t)}},Ue={},Xe={},Ye="win32"===process.platform,Ze=Ye?/[^:]\\$/:/.\/$/;
/*!
 * Tmp
 *
 * Copyright (c) 2011-2017 KARASZI Istvan <github@spam.raszi.hu>
 *
 * MIT Licensed
 */
const Ve=s.default,Je=c.default,Qe=d.default,en=function(){var e;return e=Ye?process.env.TEMP||process.env.TMP||(process.env.SystemRoot||process.env.windir)+"\\temp":process.env.TMPDIR||process.env.TMP||process.env.TEMP||"/tmp",Ze.test(e)&&(e=e.slice(0,-1)),e},nn=process.binding("constants"),tn=en(),rn="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",on=/XXXXXX/,an=(nn.O_CREAT||nn.fs.O_CREAT)|(nn.O_EXCL||nn.fs.O_EXCL)|(nn.O_RDWR||nn.fs.O_RDWR),un=nn.EBADF||nn.os.errno.EBADF,cn=nn.ENOENT||nn.os.errno.ENOENT,sn=[];var fn=!1,ln=!1;function dn(e){var n=[],t=null;try{t=Qe.randomBytes(e)}catch(n){t=Qe.pseudoRandomBytes(e)}for(var r=0;r<e;r++)n.push(rn[t[r]%rn.length]);return n.join("")}function pn(e){return void 0===e}function vn(e,n){return"function"==typeof e?[n||{},e]:pn(e)?[{},n]:[e,n]}function hn(e){if(e.name)return Je.join(e.dir||tn,e.name);if(e.template)return e.template.replace(on,dn(6));const n=[e.prefix||"tmp-",process.pid,dn(12),e.postfix||""].join("");return Je.join(e.dir||tn,n)}function mn(e,n){var t=vn(e,n),r=t[0],o=t[1],i=r.name?1:r.tries||3;return isNaN(i)||i<0?o(new Error("Invalid tries")):r.template&&!r.template.match(on)?o(new Error("Invalid template provided")):void function e(){const n=hn(r);Ve.stat(n,(function(t){if(!t)return i-- >0?e():o(new Error("Could not get a unique tmp filename, max tries reached "+n));o(null,n)}))}()}function yn(e){var n=vn(e)[0],t=n.name?1:n.tries||3;if(isNaN(t)||t<0)throw new Error("Invalid tries");if(n.template&&!n.template.match(on))throw new Error("Invalid template provided");do{const e=hn(n);try{Ve.statSync(e)}catch(n){return e}}while(t-- >0);throw new Error("Could not get a unique tmp filename, max tries reached")}function gn(e){const n=[e];do{for(var t=n.pop(),r=!1,o=Ve.readdirSync(t),i=0,a=o.length;i<a;i++){var u=Je.join(t,o[i]);Ve.lstatSync(u).isDirectory()?(r||(r=!0,n.push(t)),n.push(u)):Ve.unlinkSync(u)}r||Ve.rmdirSync(t)}while(0!==n.length)}function _n(e,n,t){const r=bn((function(e){try{0<=e[0]&&Ve.closeSync(e[0])}catch(e){if(!(n=e,Sn(n,-un,"EBADF")||xn(e)))throw e}var n;try{Ve.unlinkSync(e[1])}catch(e){if(!xn(e))throw e}}),[n,e]);return t.keep||sn.unshift(r),r}function wn(e,n){const t=bn(n.unsafeCleanup?gn:Ve.rmdirSync.bind(Ve),e);return n.keep||sn.unshift(t),t}function bn(e,n){var t=!1;return function r(o){if(!t){const o=sn.indexOf(r);o>=0&&sn.splice(o,1),t=!0,e(n)}o&&o(null)}}function En(){if(!ln||fn)for(;sn.length;)try{sn[0].call(null)}catch(e){}}function xn(e){return Sn(e,-cn,"ENOENT")}function Sn(e,n,t){return e.code==n||e.code==t}const On=process.versions.node.split(".").map((function(e){return parseInt(e,10)}));0===On[0]&&(On[1]<9||9===On[1]&&On[2]<5)&&process.addListener("uncaughtException",(function(e){throw ln=!0,En(),e})),process.addListener("exit",(function(e){e&&(ln=!0),En()})),Xe.tmpdir=tn,Xe.dir=function(e,n){var t=vn(e,n),r=t[0],o=t[1];mn(r,(function(e,n){if(e)return o(e);Ve.mkdir(n,r.mode||448,(function(e){if(e)return o(e);o(null,n,wn(n,r))}))}))},Xe.dirSync=function(e){var n=vn(e)[0];const t=yn(n);return Ve.mkdirSync(t,n.mode||448),{name:t,removeCallback:wn(t,n)}},Xe.file=function(e,n){var t=vn(e,n),r=t[0],o=t[1];r.postfix=pn(r.postfix)?".tmp":r.postfix,mn(r,(function(e,n){if(e)return o(e);Ve.open(n,an,r.mode||384,(function(e,t){return e?o(e):r.discardDescriptor?Ve.close(t,(function(e){if(e){try{Ve.unlinkSync(n)}catch(n){xn(n)||(e=n)}return o(e)}o(null,n,void 0,_n(n,-1,r))})):r.detachDescriptor?o(null,n,t,_n(n,-1,r)):void o(null,n,t,_n(n,t,r))}))}))},Xe.fileSync=function(e){var n=vn(e)[0];n.postfix=n.postfix||".tmp";const t=n.discardDescriptor||n.detachDescriptor,r=yn(n);var o=Ve.openSync(r,an,n.mode||384);return n.discardDescriptor&&(Ve.closeSync(o),o=void 0),{name:r,fd:o,removeCallback:_n(r,t?-1:o,n)}},Xe.tmpName=mn,Xe.tmpNameSync=yn,Xe.setGracefulCleanup=function(){fn=!0},Object.defineProperty(Ue,"__esModule",{value:!0}),Ue.unlinkFile=Ue.writeFile=void 0;var jn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Ue.getWordRegexp=function(e,n){var t=e.scopeDescriptorForBufferPosition(n),r=(o=atom.config.get("editor.nonWordCharacters",{scope:t}),o.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"));var o;return new RegExp("^[\t ]*$|[^\\s"+r+"]+")},Ue.getTempDirectory=function(e){return new Promise((function(n,t){An.default.dir({prefix:e},(function(e,r,o){e?t(e):n({path:r,cleanup:o})}))}))},Ue.fileExists=function(e){return new Promise((function(n){Pn.default.access(e,Pn.default.R_OK,(function(e){n(null===e)}))}))},Ue.validateExec=function(e,n,t){if("string"!=typeof e)throw new Error("Invalid or no `command` provided");if(!(n instanceof Array))throw new Error("Invalid or no `args` provided");if("object"!==(void 0===t?"undefined":jn(t)))throw new Error("Invalid or no `options` provided")},Ue.validateEditor=function(e){var n=void 0;n="function"==typeof atom.workspace.isTextEditor?atom.workspace.isTextEditor(e):"function"==typeof e.getText;if(!n)throw new Error("Invalid TextEditor provided")},Ue.validateFind=function(e,n){if("string"!=typeof e)throw new Error("Invalid or no `directory` provided");if("string"!=typeof n&&!(n instanceof Array))throw new Error("Invalid or no `name` provided")},Ue.wrapExec=function(e){return function(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=!1,i=e(n,t,Object.assign({timeout:1e4},r)),a=i;if(r.uniqueKey){if("string"!=typeof r.uniqueKey)throw new Error("options.uniqueKey must be a string");var u=Tn.get(r.uniqueKey);u&&u(),Tn.set(r.uniqueKey,(function(){o=!0,i.kill()})),a=a.then((function(e){return o?null:e}),(function(e){if(o)return null;throw e}))}return a.catch((function(e){if("ENOENT"===e.code){var n=new Error("Failed to spawn command `"+e.path+"`. Make sure `"+e.path+"` is installed and on your PATH");throw n.code="ENOENT",n}throw e}))}};var Pn=Cn(s.default),An=Cn(Xe),Nn=Cn(ve);function Cn(e){return e&&e.__esModule?e:{default:e}}Ue.writeFile=(0,Nn.default)(Pn.default.writeFile),Ue.unlinkFile=(0,Nn.default)(Pn.default.unlink);var Tn=new Map;var Rn,Hn,Fn,kn,Ln,In={exports:{}};Rn=In,function(e){var n,t=/^[$_a-z][$_a-z0-9]*$/i;function r(e){var n,r,o,i,a,u,c,s={},f=0,l="",d=!1;for(n=0;n<e.length;++n)if(r=e[n],i=(o=e[n+1])+e[n+2],l+=r,"\\"===r)if(d||"k<"!==i)l+=o,++n;else{if((a=e.indexOf(">",n+3))<0)throw new Error("'>' missing in named backreference.");if(!(c=s[u=e.substring(n+3,a)]))throw new Error("Named group '"+u+"' is not defined in backreference.");if("number"!=typeof c)throw new Error("Named backreference referencing duplicate named group '"+u+"'.");n=a,l+=c}else if(d)"]"===r&&(d=!1);else if("["===r)d=!0;else if("("===r&&"?:"!==i&&"?="!==i&&"?!"!==i&&(f++,"?<"===i||":<"===i)){if((a=e.indexOf(">",n+3))<0)throw new Error("'>' missing in named group.");if(u=e.substring(n+3,a),!t.test(u))throw new Error("Invalide group name '"+u+"'. Regexp group name should start with '_$a-zA-Z' and can contain only '_$a-zA-Z0-9'.");void 0===(c=s[u])?s[u]=f:"number"==typeof c?s[u]=[c,f]:c.push(f),n=a}return{mapper:s,regexText:l}}Rn.exports=function(e,t){if("boolean"!=typeof e){"string"!=typeof e&&(t=(e.global?"g":"")+(e.multiline?"m":"")+(e.ignoreCase?"i":""),e=e.source);var o=n?n[e]||(n[e]=r(e)):r(e),i=new RegExp(o.regexText,t);return i.groupsIndices=o.mapper,i.exec=function(e){var n=RegExp.prototype.exec.call(this,e);return n&&a(n),n},i.execGroups=function(e,n){var t=this.exec(e);return t?t.groups(n):null},i.replace=function(e,n){if("function"==typeof n)return e.replace(i,(function(){var e=Array.prototype.slice.call(arguments,0,arguments.length-2);return a(e),n.apply(e,arguments)}));var t=function(e,n){var t,r,o,i,a,u,c="";for(t=0;t<e.length;++t)if(r=e[t],o=e[t+1],c+=r,"$"===r)if("$"===o)c+=o,++t;else if("{"===o){if((a=e.indexOf("}",t+2))<0)throw new Error("'>' missing in replacement named group.");if(void 0===(u=n[i=e.substring(t+2,a)]))throw new Error("Named group '"+i+"' is not defined in replacement text.");if("number"!=typeof u)throw new Error("Named replacement referencing duplicate named group '"+i+"'.");c+=u,t=a}return c}(n,this.groupsIndices);return e.replace(this,t)},i}function a(e){var n,t,r=o.mapper;return e.group=function(n,t){var o=r[n];if("number"==typeof o)return e[o];if(t)return o.map((function(n){return e[n]}));if(o)for(var i=0;i<o.length;++i){var a=e[o[i]];if(void 0!==a)return a}},e.groups=function(o){var i=o?t:n;if(i)return i;for(var a in i={},r)i[a]=e.group(a,o);return o?t=i:n=i},e}!1===e?n=void 0:n||(n={})}}(),Object.defineProperty(p,"__esModule",{value:!0});var Mn=p.execNode=p.exec=p.tempFiles=p.findCachedAsync=p.findAsync=p.FindCache=void 0,$n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Dn=Fn=p.findAsync=function(){var e=Qn((function*(e,n){Vn.validateFind(e,n);for(var t=[].concat(n),r=e.split(Xn.sep);r.length;){var o=r.join(Xn.sep);""===o&&(o=Xn.resolve(e,"/"));var i=!0,a=!1,u=void 0;try{for(var c,s=t[Symbol.iterator]();!(i=(c=s.next()).done);i=!0){var f=c.value,l=Xn.join(o,f);if(yield Vn.fileExists(l))return l}}catch(e){a=!0,u=e}finally{try{!i&&s.return&&s.return()}finally{if(a)throw u}}r.pop()}return null}));return function(n,t){return e.apply(this,arguments)}}();kn=p.findCachedAsync=function(){var e=Qn((function*(e,n){Vn.validateFind(e,n);var t=[].concat(n),r=e+":"+t.join(","),o=nt.get(r);if(o){if(yield Vn.fileExists(o))return o;nt.delete(r)}var i=yield Dn(e,t);return i&&nt.set(r,i),i}));return function(n,t){return e.apply(this,arguments)}}();var Kn,zn=Ln=p.tempFiles=(Kn=Qn((function*(e,n){if(!Array.isArray(e))throw new Error("Invalid or no `files` provided");if("function"!=typeof n)throw new Error("Invalid or no `callback` provided");var t=yield Vn.getTempDirectory("atom-linter_"),r=[];yield Promise.all(e.map((function(e){var n=e.name,o=e.contents,i=Xn.join(t.path,n);return r.push(i),Vn.writeFile(i,o)})));try{return yield n(r)}finally{yield Promise.all(r.map((function(e){return Vn.unlinkFile(e)}))),t.cleanup()}})),function(e,n){return Kn.apply(this,arguments)}),Gn=p.generateRange=function(e,n,t){Vn.validateEditor(e);var r=n;("number"!=typeof r||!Number.isFinite(r)||r<0)&&(r=0);var o=e.getBuffer(),i=o.getLineCount()-1;if(r>i)throw new Error("Line number ("+r+") greater than maximum line ("+i+")");var a="number"==typeof t&&Number.isFinite(t)&&t>-1,u=o.lineForRow(r),c=u.length,s=a?t:0;if(a){var f=Vn.getWordRegexp(e,[r,s]).exec(u.substr(t));f&&(c=s+f.index+f[0].length)}else{var l=u.match(/^\s+/);l&&(s=l[0].length)}if(s>u.length)throw new Error("Column start ("+(s||0)+") greater than line length ("+u.length+") for line "+r);return[[r,s],[r,c]]},Wn=p.find=tt,qn=p.findCached=function(e,n){Vn.validateFind(e,n);var t=[].concat(n),r=e+":"+t.join(","),o=nt.get(r);if(o)try{return Yn.accessSync(o,Yn.R_OK),o}catch(e){nt.delete(r)}var i=tt(e,t);i&&nt.set(r,i);return i},Bn=p.tempFile=function(e,n,t){if("string"!=typeof e)throw new Error("Invalid or no `fileName` provided");if("string"!=typeof n)throw new Error("Invalid or no `fileContents` provided");if("function"!=typeof t)throw new Error("Invalid or no `callback` provided");return zn([{name:e,contents:n}],(function(e){return t(e[0])}))},Un=p.parse=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"!=typeof e)throw new Error("Invalid or no `data` provided");if("string"!=typeof n)throw new Error("Invalid or no `regex` provided");if("object"!==(void 0===t?"undefined":$n(t)))throw new Error("Invalid or no `options` provided");null===et&&(et=In.exports);var r={flags:""},o=Object.assign(r,t);-1===o.flags.indexOf("g")&&(o.flags+="g");var i=[],a=new et(n,o.flags),u=a.exec(e);for(;null!==u;){var c=u.groups(),s=c.type,f=c.message,l=c.file||o.filePath||null,d=c.lineStart||c.line||0,p=c.colStart||c.col||0,v=c.lineEnd||c.line||0,h=c.colEnd||c.col||0;i.push({type:s,text:f,filePath:l,range:[[d>0?d-1:0,p>0?p-1:0],[v>0?v-1:0,h>0?h-1:0]]}),u=a.exec(e)}return i},Xn=Jn(c.default),Yn=Jn(s.default),Zn=Be,Vn=Jn(Ue);function Jn(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}function Qn(e){return function(){var n=e.apply(this,arguments);return new Promise((function(e,t){return function r(o,i){try{var a=n[o](i),u=a.value}catch(e){return void t(e)}if(!a.done)return Promise.resolve(u).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(u)}("next")}))}}var et=null,nt=Hn=p.FindCache=new Map;function tt(e,n){Vn.validateFind(e,n);for(var t=[].concat(n),r=e.split(Xn.sep);r.length;){var o=r.join(Xn.sep);""===o&&(o=Xn.resolve(e,"/"));var i=!0,a=!1,u=void 0;try{for(var c,s=t[Symbol.iterator]();!(i=(c=s.next()).done);i=!0){var f=c.value,l=Xn.join(o,f);try{return Yn.accessSync(l,Yn.R_OK),l}catch(e){}}}catch(e){a=!0,u=e}finally{try{!i&&s.return&&s.return()}finally{if(a)throw u}}r.pop()}return null}var rt=Vn.wrapExec(Zn.exec),ot=Vn.wrapExec(Zn.execNode),it=p.exec=rt;Mn=p.execNode=ot;var at=u({__proto__:null,get execNode(){return Mn},get exec(){return it},get tempFiles(){return Ln},get findCachedAsync(){return kn},get findAsync(){return Fn},get FindCache(){return Hn},generateRange:Gn,find:Wn,findCached:qn,tempFile:Bn,parse:Un,default:p},[p]);exports.index=at;
//# sourceMappingURL=index-e4af7f8a.js.map