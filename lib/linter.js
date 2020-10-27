'use strict';

var child_process = require('child_process');
var os = require('os');
var atom$1 = require('atom');
var fs = require('fs');
var _path = require('path');
var _assert = require('assert');
var crypto = require('crypto');
var require$$0 = require('util');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var child_process__default = /*#__PURE__*/_interopDefaultLegacy(child_process);
var os__default = /*#__PURE__*/_interopDefaultLegacy(os);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var _path__default = /*#__PURE__*/_interopDefaultLegacy(_path);
var _assert__default = /*#__PURE__*/_interopDefaultLegacy(_assert);
var crypto__default = /*#__PURE__*/_interopDefaultLegacy(crypto);
var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var makensis = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });




/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var Afrikaans = {
	id: 1078,
	code_page: 1252,
	rtl: false,
	english: "Afrikaans",
	native: "Afrikaans",
	native_ascii: "Afrikaans"
};
var Albanian = {
	id: 1052,
	code_page: 1250,
	rtl: false,
	english: "Albanian",
	native: "Shqip",
	native_ascii: "Shqip"
};
var Arabic = {
	id: 1025,
	code_page: 1256,
	rtl: true,
	english: "Arabic",
	native: "العربية",
	native_ascii: "Al-Arabiyyah"
};
var Armenian = {
	id: 1067,
	code_page: 1200,
	rtl: false,
	english: "Armenian",
	native: "Հայերեն",
	native_ascii: "Hayeren"
};
var Asturian = {
	id: 9997,
	code_page: 1252,
	rtl: false,
	english: "Asturian",
	native: "Asturies",
	native_ascii: "Asturies"
};
var Basque = {
	id: 1069,
	code_page: 1252,
	rtl: false,
	english: "Basque",
	native: "Euskera",
	native_ascii: "Euskera"
};
var Belarusian = {
	id: 1059,
	code_page: 1251,
	rtl: false,
	english: "Belarusian",
	native: "Беларуская",
	native_ascii: "Bielaruskaja"
};
var Bosnian = {
	id: 5146,
	code_page: 1250,
	rtl: false,
	english: "Bosnian",
	native: "Bosanski",
	native_ascii: "Bosanski"
};
var Breton = {
	id: 1150,
	code_page: 1252,
	rtl: false,
	english: "Breton",
	native: "Brezhoneg",
	native_ascii: "Brezhoneg"
};
var Bulgarian = {
	id: 1026,
	code_page: 1251,
	rtl: false,
	english: "Bulgarian",
	native: "Български",
	native_ascii: "Balgarski"
};
var Catalan = {
	id: 1027,
	code_page: 1252,
	rtl: false,
	english: "Catalan",
	native: "Català",
	native_ascii: "Catala"
};
var Corsican = {
	id: 1155,
	code_page: 1252,
	rtl: false,
	english: "Corsican",
	native: "Corsu",
	native_ascii: "Corsu"
};
var Croatian = {
	id: 1050,
	code_page: 1250,
	rtl: false,
	english: "Croatian",
	native: "Hrvatski",
	native_ascii: "Hrvatski"
};
var Czech = {
	id: 1029,
	code_page: 1250,
	rtl: false,
	english: "Czech",
	native: "Čeština",
	native_ascii: "Cestina"
};
var Danish = {
	id: 1030,
	code_page: 1252,
	rtl: false,
	english: "Danish",
	native: "Dansk",
	native_ascii: "Dansk"
};
var Dutch = {
	id: 1043,
	code_page: 1252,
	rtl: false,
	english: "Dutch",
	native: "Nederlands",
	native_ascii: "Nederlands"
};
var English = {
	id: 1033,
	code_page: null,
	rtl: false,
	english: "English",
	native: "English",
	native_ascii: "English"
};
var Esperanto = {
	id: 9998,
	code_page: null,
	rtl: false,
	english: "Esperanto",
	native: "Esperanto",
	native_ascii: "Esperanto"
};
var Estonian = {
	id: 1061,
	code_page: 1257,
	rtl: false,
	english: "Estonian",
	native: "Eesti keel",
	native_ascii: "Eesti keel"
};
var Farsi = {
	id: 1065,
	code_page: 1256,
	rtl: true,
	english: "Persian",
	native: "فارسی",
	native_ascii: "Farsi"
};
var Finnish = {
	id: 1035,
	code_page: 1252,
	rtl: false,
	english: "Finnish",
	native: "Suomi",
	native_ascii: "Suomi"
};
var French = {
	id: 1036,
	code_page: 1252,
	rtl: false,
	english: "French",
	native: "Français",
	native_ascii: "Francais"
};
var Galician = {
	id: 1110,
	code_page: 1252,
	rtl: false,
	english: "Galician",
	native: "Galego",
	native_ascii: "Galego"
};
var Georgian = {
	id: 1079,
	code_page: 1200,
	rtl: false,
	english: "Georgian",
	native: "ქართული",
	native_ascii: "Kartuli"
};
var German = {
	id: 1031,
	code_page: 1252,
	rtl: false,
	english: "German",
	native: "Deutsch",
	native_ascii: "Deutsch"
};
var Greek = {
	id: 1032,
	code_page: 1253,
	rtl: false,
	english: "Greek",
	native: "Ελληνικά",
	native_ascii: "Ellinika"
};
var Hebrew = {
	id: 1037,
	code_page: 1255,
	rtl: true,
	english: "Hebrew",
	native: "עברית",
	native_ascii: "Ivrit"
};
var Hindi = {
	id: 1081,
	code_page: 1200,
	rtl: false,
	english: "Hindi",
	native: "हिन्दी",
	native_ascii: "Hindi"
};
var Hungarian = {
	id: 1038,
	code_page: 1250,
	rtl: false,
	english: "Hungarian",
	native: "Magyar",
	native_ascii: "Magyar"
};
var Icelandic = {
	id: 1039,
	code_page: 1252,
	rtl: false,
	english: "Icelandic",
	native: "Íslenska",
	native_ascii: "Islenska"
};
var Indonesian = {
	id: 1057,
	code_page: 1252,
	rtl: false,
	english: "Indonesian",
	native: "Bahasa Indonesia",
	native_ascii: "Bahasa Indonesia"
};
var Irish = {
	id: 2108,
	code_page: 1252,
	rtl: false,
	english: "Irish",
	native: "Gaeilge",
	native_ascii: "Gaeilge"
};
var Italian = {
	id: 1040,
	code_page: 1252,
	rtl: false,
	english: "Italian",
	native: "Italiano",
	native_ascii: "Italiano"
};
var Japanese = {
	id: 1041,
	code_page: 932,
	rtl: false,
	english: "Japanese",
	native: "日本語",
	native_ascii: "Nihongo"
};
var Korean = {
	id: 1042,
	code_page: 949,
	rtl: false,
	english: "Korean",
	native: "한국어",
	native_ascii: "Hangugeo"
};
var Kurdish = {
	id: 9999,
	code_page: 1254,
	rtl: false,
	english: "Kurdish",
	native: "Kurdî",
	native_ascii: "Kurdi"
};
var Latvian = {
	id: 1062,
	code_page: 1257,
	rtl: false,
	english: "Latvian",
	native: "Latviešu",
	native_ascii: "Latviesu"
};
var Lithuanian = {
	id: 1063,
	code_page: 1257,
	rtl: false,
	english: "Lithuanian",
	native: "Lietuvių",
	native_ascii: "Lietuviu"
};
var Luxembourgish = {
	id: 4103,
	code_page: 1252,
	rtl: false,
	english: "Luxembourgish",
	native: "Lëtzebuergesch",
	native_ascii: "Letzebuergesch"
};
var Macedonian = {
	id: 1071,
	code_page: 1251,
	rtl: false,
	english: "Macedonian",
	native: "Македонски",
	native_ascii: "Makedonski"
};
var Malay = {
	id: 1086,
	code_page: 1252,
	rtl: false,
	english: "Malay",
	native: "Bahasa Melayu",
	native_ascii: "Bahasa Melayu"
};
var Mongolian = {
	id: 1104,
	code_page: 1251,
	rtl: false,
	english: "Mongolian (Cyrillic)",
	native: "Монгол Кирилл",
	native_ascii: "Mongol kirill"
};
var Norwegian = {
	id: 1044,
	code_page: 1252,
	rtl: false,
	english: "Norwegian",
	native: "Norsk",
	native_ascii: "Norsk"
};
var NorwegianNynorsk = {
	id: 2068,
	code_page: 1252,
	rtl: false,
	english: "Norwegian (Nynorsk)",
	native: "Norsk (nynorsk)",
	native_ascii: "Norsk (nynorsk)"
};
var Pashto = {
	id: 1123,
	code_page: 1256,
	rtl: true,
	english: "Pashto",
	native: "پښتو",
	native_ascii: "Pashto"
};
var Polish = {
	id: 1045,
	code_page: 1250,
	rtl: false,
	english: "Polish",
	native: "Polski",
	native_ascii: "Polski"
};
var Portuguese = {
	id: 2070,
	code_page: 1252,
	rtl: false,
	english: "Portuguese",
	native: "Português",
	native_ascii: "Portugues"
};
var PortugueseBR = {
	id: 1046,
	code_page: 1252,
	rtl: false,
	english: "Brazilian Portuguese",
	native: "Português Brasileiro",
	native_ascii: "Portugues Brasileiro"
};
var Romanian = {
	id: 1048,
	code_page: 1250,
	rtl: false,
	english: "Romanian",
	native: "Română",
	native_ascii: "Romana"
};
var Russian = {
	id: 1049,
	code_page: 1251,
	rtl: false,
	english: "Russian",
	native: "Русский",
	native_ascii: "Russkij"
};
var ScotsGaelic = {
	id: 1169,
	code_page: 1252,
	rtl: false,
	english: "Scottish Gaelic",
	native: "Gàidhlig",
	native_ascii: "Gaidhlig"
};
var Serbian = {
	id: 3098,
	code_page: 1251,
	rtl: false,
	english: "Serbian (Cyrillic)",
	native: "Српски",
	native_ascii: "Srpski (Cyrillic)"
};
var SerbianLatin = {
	id: 2074,
	code_page: 1250,
	rtl: false,
	english: "Serbian (Latin)",
	native: "Srpski",
	native_ascii: "Srpski"
};
var SimpChinese = {
	id: 2052,
	code_page: 936,
	rtl: false,
	english: "Chinese (Simplified)",
	native: "中文(简体)",
	native_ascii: "Hanyu (Jiantizi)"
};
var Slovak = {
	id: 1051,
	code_page: 1250,
	rtl: false,
	english: "Slovak",
	native: "Slovenčina",
	native_ascii: "Slovencina"
};
var Slovenian = {
	id: 1060,
	code_page: 1250,
	rtl: false,
	english: "Slovenian",
	native: "Slovenski",
	native_ascii: "Slovenski"
};
var Spanish = {
	id: 1034,
	code_page: 1252,
	rtl: false,
	english: "Spanish",
	native: "Español",
	native_ascii: "Espanol"
};
var SpanishInternational = {
	id: 3082,
	code_page: 1252,
	rtl: false,
	english: "Spanish (International)",
	native: "Español (Alfabetización Internacional)",
	native_ascii: "Espanol (Alfabetizacion Internacional)"
};
var Swedish = {
	id: 1053,
	code_page: 1252,
	rtl: false,
	english: "Swedish",
	native: "Svenska",
	native_ascii: "Svenska"
};
var Tatar = {
	id: 1092,
	code_page: 1251,
	rtl: false,
	english: "Tatar",
	native: "Татарча",
	native_ascii: "Tatarcha"
};
var Thai = {
	id: 1054,
	code_page: 874,
	rtl: false,
	english: "Thai",
	native: "ไทย",
	native_ascii: "Thai"
};
var TradChinese = {
	id: 1028,
	code_page: 950,
	rtl: false,
	english: "Chinese (Traditional)",
	native: "中文(繁體)",
	native_ascii: "Hanyu (Fantizi)"
};
var Turkish = {
	id: 1055,
	code_page: 1254,
	rtl: false,
	english: "Turkish",
	native: "Türkçe",
	native_ascii: "Turkce"
};
var Ukrainian = {
	id: 1058,
	code_page: 1251,
	rtl: false,
	english: "Ukrainian",
	native: "Українська",
	native_ascii: "Ukrayins'ka"
};
var Uzbek = {
	id: 1091,
	code_page: 1252,
	rtl: false,
	english: "Uzbek",
	native: "O‘zbek",
	native_ascii: "O'zbek"
};
var Vietnamese = {
	id: 1066,
	code_page: 1258,
	rtl: false,
	english: "Vietnamese",
	native: "Tiếng Việt",
	native_ascii: "Tieng Viet"
};
var Welsh = {
	id: 1106,
	code_page: 1252,
	rtl: false,
	english: "Welsh",
	native: "Cymraeg",
	native_ascii: "Cymraeg"
};
var meta = {
	Afrikaans: Afrikaans,
	Albanian: Albanian,
	Arabic: Arabic,
	Armenian: Armenian,
	Asturian: Asturian,
	Basque: Basque,
	Belarusian: Belarusian,
	Bosnian: Bosnian,
	Breton: Breton,
	Bulgarian: Bulgarian,
	Catalan: Catalan,
	Corsican: Corsican,
	Croatian: Croatian,
	Czech: Czech,
	Danish: Danish,
	Dutch: Dutch,
	English: English,
	Esperanto: Esperanto,
	Estonian: Estonian,
	Farsi: Farsi,
	Finnish: Finnish,
	French: French,
	Galician: Galician,
	Georgian: Georgian,
	German: German,
	Greek: Greek,
	Hebrew: Hebrew,
	Hindi: Hindi,
	Hungarian: Hungarian,
	Icelandic: Icelandic,
	Indonesian: Indonesian,
	Irish: Irish,
	Italian: Italian,
	Japanese: Japanese,
	Korean: Korean,
	Kurdish: Kurdish,
	Latvian: Latvian,
	Lithuanian: Lithuanian,
	Luxembourgish: Luxembourgish,
	Macedonian: Macedonian,
	Malay: Malay,
	Mongolian: Mongolian,
	Norwegian: Norwegian,
	NorwegianNynorsk: NorwegianNynorsk,
	Pashto: Pashto,
	Polish: Polish,
	Portuguese: Portuguese,
	PortugueseBR: PortugueseBR,
	Romanian: Romanian,
	Russian: Russian,
	ScotsGaelic: ScotsGaelic,
	Serbian: Serbian,
	SerbianLatin: SerbianLatin,
	SimpChinese: SimpChinese,
	Slovak: Slovak,
	Slovenian: Slovenian,
	Spanish: Spanish,
	SpanishInternational: SpanishInternational,
	Swedish: Swedish,
	Tatar: Tatar,
	Thai: Thai,
	TradChinese: TradChinese,
	Turkish: Turkish,
	Ukrainian: Ukrainian,
	Uzbek: Uzbek,
	Vietnamese: Vietnamese,
	Welsh: Welsh
};

var header = "NLF v6";
var id = 1078;
var font = {
	name: null,
	size: null
};
var code_page = 1252;
var rtl = false;
var strings = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "$(^Name) Installasie",
	UninstallCaption: "$(^Name) Verwydering",
	LicenseSubCaption: ": Lisensie-ooreenkoms",
	ComponentsSubCaption: ": Installasiekeuses",
	DirSubCaption: ": Installasiegids",
	InstallingSubCaption: ": Installeer tans",
	CompletedSubCaption: ": Voltooid",
	UnComponentsSubCaption: ": Verwyderingkeuses",
	UnDirSubCaption: ": Verwyderinggids",
	ConfirmSubCaption: ": Bevestiging",
	UninstallingSubCaption: ": Verwyder tans",
	UnCompletedSubCaption: ": Voltooid",
	BackBtn: "< V&orige",
	NextBtn: "&Volgende >",
	AgreeBtn: "&Regso",
	AcceptBtn: "Ek &aanvaar die ooreenkoms",
	DontAcceptBtn: "Ek aan vaar &nie die ooreenkoms nie",
	InstallBtn: "&Installeer",
	UninstallBtn: "&Verwyder",
	CancelBtn: "Kanselleer",
	CloseBtn: "&Sluit af",
	BrowseBtn: "&Blaai...",
	ShowDetailsBtn: "&Wys detail",
	ClickNext: "Klik op Volgende om verder te gaan.",
	ClickInstall: "Klik op Installeer om die installasie te begin.",
	ClickUninstall: "Klik op Verwyder om die verwydering te begin.",
	Name: "Naam",
	Completed: "Voltooid",
	LicenseText: "Lees die lisensieooreenkoms voordat u $(^NameDA) installeer. Klik op Regso as u die ooreenkoms aanvaar.",
	LicenseTextCB: "Lees die lisensieooreenkoms voordat u $(^NameDA) installeer. Merk die blokkie hieronder as u die ooreenkoms aanvaar. $_CLICK",
	LicenseTextRB: "Lees die lisensieooreenkoms voordat u $(^NameDA) installeer. Kies die eerste keuse hieronder as u die ooreenkoms aanvaar. $_CLICK",
	UnLicenseText: "Lees die lisensieooreenkoms voordat u $(^NameDA) verwyder. Klik op Regso als u die ooreenkoms aanvaar.",
	UnLicenseTextCB: "Lees die lisensieooreenkoms voordat u $(^NameDA) verwyder. Merk die blokkie hieronder as u die ooreenkoms aanvaar. $_CLICK",
	UnLicenseTextRB: "Lees die lisensieooreenkoms voordat u $(^NameDA) verwyder. KIes die eerste keuse hieronder as u die ooreenkoms aanvaar. $_CLICK",
	Custom: "Aangepast",
	ComponentsText: "Kies die komponente wat u wil installeer en deselekteer dié wat u nie wil installeer nie. $_CLICK",
	ComponentsSubText1: "Kies die installasietipe:",
	ComponentsSubText2_NoInstTypes: "Kies die komponente wat geïnstalleer moet word:",
	ComponentsSubText2: "Of kies die komponente wat geïnstalleer moet word:",
	UnComponentsText: "Kies die komponente wat u wil verwyder en deselekteer dié wat u nie wil verwyder nie. $_CLICK",
	UnComponentsSubText1: "Kies die verwyderingstipe:",
	UnComponentsSubText2_NoInstTypes: "Kies die komponente wat verwyder moet word:",
	UnComponentsSubText2: "Of kies die komponente wat verwyder moet word:",
	DirText: "$(^NameDA) sal in die volgende gids geïnstalleer word. Om elders te installeer, klik op Blaai en kies 'n ander een. $_CLICK",
	DirSubText: "Installasiegids",
	DirBrowseText: "Kies die gids om $(^NameDA) in te installeer:",
	UnDirText: "$(^NameDA) gaan uit die volgende gids verwyder word. Om van elders af te verwyder, klik op Blaai en kies 'n ander gids. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Kies die gids om $(^NameDA) uit te verwyder:",
	SpaceAvailable: "\"Beskikbare spasie: \"",
	SpaceRequired: "\"Vereiste spasie: \"",
	UninstallingText: "$(^NameDA) sal uit die volgende gids verwyder word. $_CLICK",
	UninstallingSubText: "Verwydering uit:",
	FileError: "Fout met skryf na lêer: \\r\\n\\r\\n$0\\r\\n\\r\\nKlik Staak om de installasie te stop,\\r\\nProbeer weer om weer te probeer of\\r\\nIgnoreer om dié lêer oor te slaan.",
	FileError_NoIgnore: "Fout met skryf na lêer: \\r\\n\\r\\n$0\\r\\n\\r\\nKlik Probeer weer om op nuut te probeer, of \\r\\nKanselleer om die installasie te stop.",
	CantWrite: "\"Kon nie skyf nie: \"",
	CopyFailed: "Kopiëring het misluk",
	CopyTo: "\"Kopieer na \"",
	Registering: "\"Registreer tans: \"",
	Unregistering: "\"Deregistreer tans: \"",
	SymbolNotFound: "\"Kon nie simbool vind nie: \"",
	CouldNotLoad: "\"Kon nie laai nie: \"",
	CreateFolder: "\"Skep gids: \"",
	CreateShortcut: "\"Maak kortpad: \"",
	CreatedUninstaller: "\"Verwyderingsprogram gemaak: \"",
	Delete: "\"Verwyder lêer: \"",
	DeleteOnReboot: "\"Verwyder na herbegin van rekenaar: \"",
	ErrorCreatingShortcut: "\"Fout met maak van kortpad: \"",
	ErrorCreating: "\"Fout met skep: \"",
	ErrorDecompressing: "Fout met uitpak van data! Korrupte installasielêer?",
	ErrorRegistering: "Fout met registrasie van DLL",
	ExecShell: "\"ExecShell: \"",
	Exec: "\"Voer uit: \"",
	Extract: "\"Pak uit: \"",
	ErrorWriting: "\"Uitpak: fout met skryf na lêer \"",
	InvalidOpcode: "Installasieprogram korrup: ongeldige opcode",
	NoOLE: "\"Geen OLE vir: \"",
	OutputFolder: "\"Afvoergids: \"",
	RemoveFolder: "\"Verwyder gids: \"",
	RenameOnReboot: "\"Hernoem na herbegin van rekenaar: \"",
	Rename: "\"Hernoem: \"",
	Skipped: "\"Oorgeslaan: \"",
	CopyDetails: "Kopieer detail na knipbord",
	LogInstall: "Boekstaaf die installasieproses",
	Byte: "G",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Afrikaans$1 = {
	header: header,
	id: id,
	font: font,
	code_page: code_page,
	rtl: rtl,
	strings: strings
};

var header$1 = "NLF v6";
var id$1 = 1052;
var font$1 = {
	name: null,
	size: null
};
var code_page$1 = 1250;
var rtl$1 = false;
var strings$1 = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Rregullimi i $(^Name)",
	UninstallCaption: "Çinstalimi i $(^Name)",
	LicenseSubCaption: ": Marrëveshje Licence",
	ComponentsSubCaption: ": Mundësi Instalimi",
	DirSubCaption: ": Dosje Instalimi",
	InstallingSubCaption: ": Po instalohet",
	CompletedSubCaption: ": U plotësua",
	UnComponentsSubCaption: ": Mundësi Çinstalimi",
	UnDirSubCaption: ": Dosje Çinstalimi",
	ConfirmSubCaption: ": Ripohim",
	UninstallingSubCaption: ": Po çinstalohet",
	UnCompletedSubCaption: ": U plotësua",
	BackBtn: "< &Mbrapsht",
	NextBtn: "&Tjetri >",
	AgreeBtn: "&Pajtohem",
	AcceptBtn: "&I pranoj kushtet e Marrëveshjes së Licensës",
	DontAcceptBtn: "&Nuk i pranoj kushtet e Marrëveshjes së Licensës",
	InstallBtn: "&Instaloje",
	UninstallBtn: "&Çinstaloje",
	CancelBtn: "Anuloje",
	CloseBtn: "&Mbylle",
	BrowseBtn: "Sh&fletoni...",
	ShowDetailsBtn: "Shfaq &hollësi",
	ClickNext: "Klikoni Tjetri për të vazhduar.",
	ClickInstall: "Për të filluar instalimin klikoni Instaloje.",
	ClickUninstall: "Për të filluar çinstalimin klikoni Çinstaloje.",
	Name: "Emër",
	Completed: "U plotësua",
	LicenseText: "Ju lutem, para instalimit të $(^NameDA), shqyrtoni marrëveshjen e licencës. Nëse i pranoni tërë kushtet e marrëveshjes, klikoni Pajtohem.",
	LicenseTextCB: "Ju lutem, para instalimit të $(^NameDA), shqyrtoni marrëveshjen e licensës. Nëse i pranoni tërë kushtet e marrëveshjes, klikoni kutizën më poshtë. $_CLICK",
	LicenseTextRB: "Ju lutem, para instalimit të $(^NameDA), shqyrtoni marrëveshjen e licensës. Nëse i pranoni tërë kushtet e marrëveshjes, përzgjidhni mundësinë e parë më poshtë. $_CLICK",
	UnLicenseText: "Ju lutem, para çinstalimit të $(^NameDA), shqyrtoni marrëveshjen e licensës. Nëse i pranoni tërë kushtet e marrëveshjes, klikoni Pajtohem.",
	UnLicenseTextCB: "Ju lutem, para çinstalimit të $(^NameDA), shqyrtoni marrëveshjen e licensës. Nëse i pranoni tërë kushtet e marrëveshjes, klikoni kutizën më poshtë. $_CLICK",
	UnLicenseTextRB: "Ju lutem, para çinstalimit të $(^NameDA), shqyrtoni marrëveshjen e licensës. Nëse i pranoni tërë kushtet e marrëveshjes, përzgjidhni mundësinë e parë më poshtë. $_CLICK",
	Custom: "Vetjake",
	ComponentsText: "U vini shenjë përbërësve që doni të instalohen dhe hiquani shenjën  përbërësvet që nuk doni të instalohen. $_CLICK",
	ComponentsSubText1: "Përzgjidhni llojin e instalimit:",
	ComponentsSubText2_NoInstTypes: "Përzgjidhni përbërësit për instalim:",
	ComponentsSubText2: "Ose, përzgjidhni përbërësit e mundshëm që doni të instalohen:",
	UnComponentsText: "U vini shenjë përbërësve që doni të çinstalohen dhe hiquni shenjën përbërësve që nuk doni të çinstalohen. $_CLICK",
	UnComponentsSubText1: "Përzgjidhni llojin e çinstalimit:",
	UnComponentsSubText2_NoInstTypes: "Përzgjidhni përbërësit për çinstalim:",
	UnComponentsSubText2: "Ose, përzgjidhni përbërësit e mundshëm që doni të çinstalohen:",
	DirText: "Rregullimi do ta instalojë $(^NameDA) në dosjen vijuese. Për instalim në një dosje tjetër, klikoni Shfletoni dhe përzgjidhni një tjetër dosje. $_CLICK",
	DirSubText: "Dosje Vendmbërritje",
	DirBrowseText: "Përzgjidhni dosjen ku të instalohet $(^NameDA):",
	UnDirText: "Rregullimi do të çinstalojë $(^NameDA) prej dosjes vijuese. Për çinstalim prej një dosjeje tjetër, klikoni Shfletoni dhe përzgjidhni një tjetër dosje. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Përzgjidhni dosjen prej nga ku të çinstalohet $(^NameDA):",
	SpaceAvailable: "\"Hapësirë e mundshme: \"",
	SpaceRequired: "\"Hapësirë e nevojshme: \"",
	UninstallingText: "$(^NameDA) do të çinstalohet prej dosjes vijuese. $_CLICK",
	UninstallingSubText: "Po çinstalohet prej:",
	FileError: "Gabim në hapje kartele për shkrim: \\r\\n\\r\\n$0\\r\\n\\r\\nKlikoni Ndërprite për të ndalur instalimin,\\r\\nRiprovo për të provuar sërish, ose\\r\\nShpërfille për të sanashkaluar këtë kartelë.",
	FileError_NoIgnore: "Gabim në hapje kartele për shkrim: \\r\\n\\r\\n$0\\r\\n\\r\\nKlikoni Riprovo për të provuar sërish, ose\\r\\nAnulo për të ndalur instalimin.",
	CantWrite: "\"S'shkruaj dot: \"",
	CopyFailed: "Kopjimi dështoi",
	CopyTo: "\"Kopjo tek \"",
	Registering: "\"Regjistrim: \"",
	Unregistering: "\"Çregjistrim: \"",
	SymbolNotFound: "\"S'u gjet dot simbol: \"",
	CouldNotLoad: "\"S'u ngarkua dot: \"",
	CreateFolder: "\"Krijo dosje: \"",
	CreateShortcut: "\"Krijo shkurtore: \"",
	CreatedUninstaller: "\"Krijo çinstalues: \"",
	Delete: "\"Fshi kartelë: \"",
	DeleteOnReboot: "\"Fshi gjatë rinisjes: \"",
	ErrorCreatingShortcut: "\"Gabim në krijim shkurtoresh: \"",
	ErrorCreating: "\"Gabim në krijimin e: \"",
	ErrorDecompressing: "Gabim në çngjeshje të dhënash! Instalues i dëmtuar?",
	ErrorRegistering: "Gabim në regjistrim DLL-je",
	ExecShell: "\"ExecShell: \"",
	Exec: "\"Ekzekuto: \"",
	Extract: "\"Përfto: \"",
	ErrorWriting: "\"Përftim: gabim në shkrim te kartela \"",
	InvalidOpcode: "Instalues i dëmtuar: opcode i pavlefshëm",
	NoOLE: "\"Pa OLE për: \"",
	OutputFolder: "\"Dosje përfundimesh: \"",
	RemoveFolder: "\"Hiq dosjen: \"",
	RenameOnReboot: "\"Riemërtoje gjatë rinisjes: \"",
	Rename: "\"Riemërtoje: \"",
	Skipped: "\"U anashkalua: \"",
	CopyDetails: "Kopjo Hollësira Te Clipboard",
	LogInstall: "Regjistro procesin e instalimit",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Albanian$1 = {
	header: header$1,
	id: id$1,
	font: font$1,
	code_page: code_page$1,
	rtl: rtl$1,
	strings: strings$1
};

var header$2 = "NLF v6";
var id$2 = 1025;
var font$2 = {
	name: null,
	size: null
};
var code_page$2 = 1256;
var rtl$2 = true;
var strings$2 = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "تنصيب $(^Name)",
	UninstallCaption: "إزالة $(^Name)",
	LicenseSubCaption: "إتفاقية‏ الترخيص :",
	ComponentsSubCaption: "خيارات التنصيب :",
	DirSubCaption: "مجلد التنصيب :",
	InstallingSubCaption: "تنصيب :",
	CompletedSubCaption: "إنتهى :",
	UnComponentsSubCaption: "خيارات الإزالة :",
	UnDirSubCaption: "مجلد الإزالة :",
	ConfirmSubCaption: "تأكيد :",
	UninstallingSubCaption: "إزالة :",
	UnCompletedSubCaption: "إنتهى :",
	BackBtn: "< ال&سابق",
	NextBtn: "ال&تالي >",
	AgreeBtn: "موافق&",
	AcceptBtn: "&أوافق على شروط اتفاقية الترخيص",
	DontAcceptBtn: "&لا أوافق على شروط اتفاقية الترخيص",
	InstallBtn: "&تنصيب",
	UninstallBtn: "&إزالة",
	CancelBtn: "إلغاء",
	CloseBtn: "إ&غلاق",
	BrowseBtn: "&عرض...",
	ShowDetailsBtn: "إ&ظهار التفاصيل",
	ClickNext: "إضغط على التالي للمتابعة.",
	ClickInstall: "إضغط على تنصيب لتشغيل التنصيب.",
	ClickUninstall: "إضغط على إزالة لتشغيل الإزالة.",
	Name: "الإسم",
	Completed: "إنتهى",
	LicenseText: "الرجاء مراجعة إتفاقية الترخيص قبل تنصيب $(^NameDA). عند الموافقة على جميع شروط الإتفاقية، إضغط موافق.",
	LicenseTextCB: "الرجاء مراجعة إتفاقية الترخيص قبل تنصيب $(^NameDA). عند الموافقة على جميع شروط الإتفاقية، إضغط على مربع المؤشر التالي. $_CLICK.",
	LicenseTextRB: "الرجاء مراجعة إتفاقية الترخيص قبل تنصيب $(^NameDA). عند الموافقة على جميع شروط الإتفاقية، إختر الخيار الأول التالي. $_CLICK",
	UnLicenseText: "الرجاء مراجعة إتفاقية الترخيص قبل إزالة $(^NameDA). عند الموافقة على جميع شروط الإتفاقية، إضغط موافق.",
	UnLicenseTextCB: "الرجاء مراجعة إتفاقية الترخيص قبل إزالة $(^NameDA). عند الموافقة على جميع شروط الإتفاقية، اضغط على مربع المؤشر التالي. $_CLICK",
	UnLicenseTextRB: "الرجاء مراجعة إتفاقية الترخيص قبل إزالة $(^NameDA). عند الموافقة على جميع شروط الإتفاقية، إختر الخيار الأول التالي. $_CLICK",
	Custom: "إختياري",
	ComponentsText: "علّم المكونات المراد تنصيبها وإزل العلامة عن المكونات الغير مراد تنصيبها. $_CLICK",
	ComponentsSubText1: "إختر نوع التنصيب:",
	ComponentsSubText2_NoInstTypes: "إختر المكونات للتنصيب:",
	ComponentsSubText2: "أو، قم بإختيار المكونات الإختيارية المراد تنصيبها:",
	UnComponentsText: "علّم المكونات المراد إزالتها وأزل العلامة عن المكونات الغير مراد إزالتها. $_CLICK",
	UnComponentsSubText1: "إختر نوع الإزالة:",
	UnComponentsSubText2_NoInstTypes: "إختر المكونات للإزالة:",
	UnComponentsSubText2: "أو، إختر المكونات الإختيارية المراد إزالتها:",
	DirText: "سيتم تنصيب $(^NameDA) في المجلد التالي. للتنصيب في مجلد آخر، إضغط عرض وإختر مجلد آخر. $_CLICK",
	DirSubText: "مجلد الهدف",
	DirBrowseText: "إختر المجلد لتنصيب $(^NameDA) فيه:",
	UnDirText: "سيتم إزالة $(^NameDA) من المجلد التالي. للإزالة من مجلد آخر، إضغط عرض وأختر مجلد آخر. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "إختر المجلد لإزالة $(^NameDA) منه:",
	SpaceAvailable: "\"المساحة المتوفرة: \"",
	SpaceRequired: "\"المساحة المطلوبة: \"",
	UninstallingText: "سيتم إزالة $(^NameDA) من المجلد التالي. $_CLICK",
	UninstallingSubText: "إزالة من:",
	FileError: "حدث خلل أثناء فتح ملف للكتابة: \\r\\n\\t\\\"$0\\\"\\r\\nإضغط إلغاء لإلغاء التنصيب،\\r\\nمحاولة لإعادة محاولة كتابة الملف،\\r\\n تجاهل لتخطي الملف",
	FileError_NoIgnore: "حدث خلل أثناء فتح ملف للكتابة: \\r\\n\\t\\\"$0\\\"\\r\\nإضغط محاولة لإعادة محاولة كتابة الملف، أو\\r\\nإلغاء لإلغاء التنصيب",
	CantWrite: "\"لا يستطيع الكتابة: \"",
	CopyFailed: "فشل النسخ",
	CopyTo: "\"نسخ إلى\"",
	Registering: "\"تسجيل: \"",
	Unregistering: "\"إلغاء تسجيل: \"",
	SymbolNotFound: "\"لم يتمكن من إيجاد الرمز :\"",
	CouldNotLoad: "\"لم يتمكن من تحميل :\"",
	CreateFolder: "\"إنشاء مجلد\"",
	CreateShortcut: "\"إنشاء إختصار: \"",
	CreatedUninstaller: "\"إنشاء مزيل: \"",
	Delete: "\"حذف ملف: \"",
	DeleteOnReboot: "\"حذف بعد إعادة التشغيل: \"",
	ErrorCreatingShortcut: "\"خلل أثناء إنشاء إختصار: \"",
	ErrorCreating: "\"خلل أثناء إنشاء :\"",
	ErrorDecompressing: "خلل أثناء فتح البيانات المضغوطة! منصب تالف؟",
	ErrorRegistering: "خلل أثناء تسجيل DLL",
	ExecShell: "\"تنفيذ ExecShell:\"",
	Exec: "\"تنفيذ: \"",
	Extract: "\"إستخراج: \"",
	ErrorWriting: "\"إستخراج: خلل أثناء الكتابة إلى ملف \"",
	InvalidOpcode: "المنصّب تالف: شفرة غير صالحة",
	NoOLE: "\"لا توجد OLE لـِ: \"",
	OutputFolder: "\"مجلد الإخراج: \"",
	RemoveFolder: "\"إزالة مجلد: \"",
	RenameOnReboot: "\"إعادة تسمية بعد إعادة التشغيل: \"",
	Rename: "\"إعادة تسمية: \"",
	Skipped: "\"تخطى: \"",
	CopyDetails: "نسخ التفاصيل إلى الذاكرة",
	LogInstall: "سجّل عملية التنصيب",
	Byte: "بايت",
	Kilo: " كيلو",
	Mega: " ميغا",
	Giga: " جيغا"
};
var Arabic$1 = {
	header: header$2,
	id: id$2,
	font: font$2,
	code_page: code_page$2,
	rtl: rtl$2,
	strings: strings$2
};

var header$3 = "NLF v6";
var id$3 = 1067;
var font$3 = {
	name: null,
	size: null
};
var code_page$3 = 1200;
var rtl$3 = false;
var strings$3 = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Տեղակայել $(^Name)-ը",
	UninstallCaption: "Ջնջել $(^Name)-ը",
	LicenseSubCaption: ": Արտոնագրային համաձայնություն",
	ComponentsSubCaption: ": Տեղակայելու ընտրանքները",
	DirSubCaption: ": Տեղակայելու թղթապանակը",
	InstallingSubCaption: ": Ֆայլերը պատճենվում են",
	CompletedSubCaption: ": Գործողությունը ավարտվեց",
	UnComponentsSubCaption: ": Տեղակայելու ընտրությունը",
	UnDirSubCaption: ": Ջնջվող թղթապանակը",
	ConfirmSubCaption: ": Հաստատեք",
	UninstallingSubCaption: ": Ֆայլերը ջնջվում են",
	UnCompletedSubCaption: ": Գործողությունը ավարտվեց",
	BackBtn: "« &Նախորդը",
	NextBtn: "&Հաջորդը »",
	AgreeBtn: "Համաձայն& եմ",
	AcceptBtn: "Ես &ընդունում եմ համաձայնագրի պայմանները",
	DontAcceptBtn: "Ես &չեմ ընդունում համաձայնագրի պայմանները",
	InstallBtn: "&Տեղակայել",
	UninstallBtn: "Ջն&ջել",
	CancelBtn: "Չեղարկել",
	CloseBtn: "&Փակել",
	BrowseBtn: "Դ&իտել ...",
	ShowDetailsBtn: "&Մանրամասն...",
	ClickNext: "Շարունակելու համար սեղմեք 'Առաջ'։",
	ClickInstall: "Տեղակայելու համար սեղմեք 'Տեղակայել'։",
	ClickUninstall: "Ծրագիրը ջնջելու համար սեղմեք 'Ջնջել'։",
	Name: "Անունը",
	Completed: "Պատրաստ է",
	LicenseText: "$(^NameDA)-ը տեղակայելուց առաջ ծանոթացեք արտոնագրային համաձայնությանը։ Եթե ընդունում եք այն՝ սեղմեք 'Համաձայն եմ'։",
	LicenseTextCB: "$(^NameDA)-ը տեղակայելուց առաջ ծանոթացեք արտոնագրային համաձայնությանը։ Եթե ընդունում եք այն՝ դրեք նիշը ներքևում։ $_CLICK",
	LicenseTextRB: "$(^NameDA)-ը տեղակայելուց առաջ ծանոթացեք արտոնագրային համաձայնությանը։ Եթե ընդունում եք այն՝ ընտրեք ներքոնշյալներից առաջինը։ $_CLICK",
	UnLicenseText: "$(^NameDA)-ը ջնջելուց առաջ ծանոթացեք արտոնագրային համաձայնությանը։ Եթե ընդունում եք այն՝ սեղմեք 'Համաձայն եմ'։",
	UnLicenseTextCB: "$(^NameDA)-ը ջնջելուց առաջ ծանոթացեք արտոնագրային համաձայնությանը։ Եթե ընդունում եք այն՝ դրեք նիշը ներքևում։ $_CLICK",
	UnLicenseTextRB: "$(^NameDA)-ը ջնջելուց առաջ ծանոթացեք արտոնագրային համաձայնությանը։ Եթե ընդունում եք այն՝ ընտրեք ներքոնշյալներից առաջինը։ $_CLICK",
	Custom: "Հարմարեցված",
	ComponentsText: "Ընտրեք այն բաղադրիչները, որոնք ցանկանում եք տեղակայել։ $_CLICK",
	ComponentsSubText1: "Ընտրեք տեղակայելու եղանակը.",
	ComponentsSubText2_NoInstTypes: "Տեղակայելու համար ընտրեք բաղադրիչները.",
	ComponentsSubText2: "կամ ընտրեք լրացուցիչ բաղադրիչներ.",
	UnComponentsText: "Ջնջելու համար ընտրեք բաղադրիչները։ $_CLICK",
	UnComponentsSubText1: "Ընտրեք ջնջելու եղանակը.",
	UnComponentsSubText2_NoInstTypes: "Ընտրեք ջնջելու բաղադրիչները.",
	UnComponentsSubText2: "կամ ջնջելու համար ընտրեք լրացուցիչ բաղադրիչներ։",
	DirText: "Ծրագիրը կտեղակայի $(^NameDA)-ը նշված թղթապանակում։ Այլ թղթապանակում տեղակայելու համար սեղմեք 'Ընտրել' և ընտրեք այն։ $_CLICK",
	DirSubText: "Տեղակայելու թղթապանկը",
	DirBrowseText: "Նշեք $(^NameDA)-ի տեղակայելու թղթապանակը.",
	UnDirText: "Ծրագիրը կջնջի $(^NameDA)-ը նշված թղթապանակից։ Այլ թղթապանակից ջնջելու համար սեղմեք 'Ընտրել' և ընտրեք այն։ $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Ընտրեք թղթապանակը, որից պետք է ջնջել $(^NameDA)-ը.",
	SpaceAvailable: "\"Հասանելի է. \"",
	SpaceRequired: "\"Պահանջվում է. \"",
	UninstallingText: "$(^NameDA) ծրագիրը կջնջվի Ձեր համակարգչից։ $_CLICK",
	UninstallingSubText: "Ջնջվում է՝",
	FileError: "Հնարավոր չէ բացել ֆայլը՝ գրանցելու համար։ \\r\\n\\t\"$0\"\\r\\n'Դադարեցնել'՝ ընդհատել տեղակայումը,\\r\\n\"Կրկնել\"՝ կրկին փորձել,\\r\\n\"Բաց թողնել\"՝ բաց թողնել գործողությունը։",
	FileError_NoIgnore: "Հնարավոր չէ բացել ֆայլը՝ գրանցելու համար։ \\r\\n\\t\"$0\"\\r\\n'Կրկնել'՝ կրկին փորձել,\\r\\n'Դադարեցնել'՝ ընդհատել տեղակայումը։",
	CantWrite: "\"Հնարավոր չէ գրանցել \"",
	CopyFailed: "Սխալ՝ պատճենելու ժամանակ",
	CopyTo: "\"Պատճենել՝ \"",
	Registering: "\"Գրանցում. \"",
	Unregistering: "\"Վերագրանցում. \"",
	SymbolNotFound: "\"Հնարավոր չէ գտնել՝ \"",
	CouldNotLoad: "\"Հնարավոր չէ բացել. \"",
	CreateFolder: "\"Ստեղծվում է թղթապանակ \"",
	CreateShortcut: "\"Ստեղծվում են պիտակներ.\"",
	CreatedUninstaller: "\"Ստեղծվում ջնջման ծրագիրը. \"",
	Delete: "\"Ֆայլերի ջնջում. \"",
	DeleteOnReboot: "\"Կջնջվի վերագործարկելուց հետո. \"",
	ErrorCreatingShortcut: "\"Սխալ՝ պիտակը ստեղծելիս. \" ",
	ErrorCreating: "\"Սխալ. \"",
	ErrorDecompressing: "Սխալ՝ տվյալները բացելու ժամանակ։",
	ErrorRegistering: "Հնարավոր չէ գրանցել գրադարանը(DLL)",
	ExecShell: "\"Ֆայլի կիրառում. \" ",
	Exec: "\"Կատարվում է. \"",
	Extract: "\"Հանում է. \"",
	ErrorWriting: "\"Ֆայլերը գրելու սխալ. \"",
	InvalidOpcode: "Տեղակայիչը վնասված է.",
	NoOLE: "\"Չկա OLE՝\" ",
	OutputFolder: "\"Տեղակայելու թղթապանակը. \"",
	RemoveFolder: "\"Թղթապանակի ջնջում. \"",
	RenameOnReboot: "\"Կանվանափոխվի վերագործարկելուց հետո. \"",
	Rename: "\"Անվանափոխում. \"",
	Skipped: "\"Բաց թողնած. \"",
	CopyDetails: "Պատճենել տվյալները ",
	LogInstall: "Տեղակայման հաշվետվություն",
	Byte: "բայթ",
	Kilo: " Կ",
	Mega: " Մ",
	Giga: " Գ"
};
var Armenian$1 = {
	header: header$3,
	id: id$3,
	font: font$3,
	code_page: code_page$3,
	rtl: rtl$3,
	strings: strings$3
};

var header$4 = "NLF v6";
var id$4 = 9997;
var font$4 = {
	name: null,
	size: null
};
var code_page$4 = 1252;
var rtl$4 = false;
var strings$4 = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Instalación de $(^Name)",
	UninstallCaption: "Desinstalación de $(^Name)",
	LicenseSubCaption: ": Alcuerdu de Llicencia",
	ComponentsSubCaption: ": Opciones d'Instalación",
	DirSubCaption: ": Direutoriu d'Instalación",
	InstallingSubCaption: ": Instalando",
	CompletedSubCaption: ": Completáu",
	UnComponentsSubCaption: ": Opciones de Desinstalación",
	UnDirSubCaption: ": Direutoriu de Desinstalación",
	ConfirmSubCaption: ": Confirmación",
	UninstallingSubCaption: ": Desinstalando",
	UnCompletedSubCaption: ": Completáu",
	BackBtn: "< &Atrás",
	NextBtn: "&Siguiente >",
	AgreeBtn: "A&ceuto",
	AcceptBtn: "A&ceuto los términos de la llicencia",
	DontAcceptBtn: "&Non aceuto los términos de la llicencia",
	InstallBtn: "&Instalar",
	UninstallBtn: "&Desinstalar",
	CancelBtn: "Encaboxar",
	CloseBtn: "&Zarrar",
	BrowseBtn: "&Restolar...",
	ShowDetailsBtn: "Ver &detalles",
	ClickNext: "Calca Siguiente pa siguir.",
	ClickInstall: "Calca Instalar pa entamar la instalación.",
	ClickUninstall: "Calca Desinstalar pa entamar la desinstalación.",
	Name: "Nome",
	Completed: "Completáu",
	LicenseText: "Por favor, revisa l'acuerdu de llicencia enantes d'instalar $(^NameDA). Si aceutes tolos términos del alcuerdu, calca Aceuto.",
	LicenseTextCB: "Por favor, revisa l'alcuerdu de llicencia enantes d'instalar $(^NameDA). Si aceutes tolos términos del alcuerdu, marca embaxo la caxella. $_CLICK",
	LicenseTextRB: "Por favor, revisa l'alcuerdu de llicencia enantes d'instalar $(^NameDA). Si aceutes tolos términos del alcuerdu, seleiciona embaxo la primer opción. $_CLICK",
	UnLicenseText: "Por favor, revisa l'alcuerdu de llicencia enantes de desinstalar $(^NameDA). Si aceutes tolos términos del alcuerdu, calca Aceuto.",
	UnLicenseTextCB: "Por favor, revisa l'alcuerdu de llicencia enantes de desinstalar $(^NameDA). Si aceutes tolos términos del alcuerdu, marca embaxo la caxella. $_CLICK.",
	UnLicenseTextRB: "Por favor, revisa l'alcuerdu de llicencia enantes de desinstalar $(^NameDA). Si aceutes tolos términos del alcuerdu, seleiciona embaxo la primer opción. $_CLICK",
	Custom: "Personalizada",
	ComponentsText: "Conseña los componentes que deseyes instalar y desconseña los componentes que nun quies instalar. $_CLICK",
	ComponentsSubText1: "Tipos d'instalación:",
	ComponentsSubText2_NoInstTypes: "Seleiciona los componentes a instalar:",
	ComponentsSubText2: "O selecciona los componentes opcionales que deseyes instalar:",
	UnComponentsText: "Conseña los componentes que deseyes desinstalar y desconseña los componentes que nun quieras desinstalar. $_CLICK",
	UnComponentsSubText1: "Tipos de desinstalación:",
	UnComponentsSubText2_NoInstTypes: "Seleiciona los componentes a desinstalar:",
	UnComponentsSubText2: "O seleiciona los componentes opcionales que deseyes desinstalar:",
	DirText: "El programa d'instalación instalará $(^NameDA) nel siguiente direutoriu. Pa instalar nun direutoriu distintu, calca Restolar y seleiciona otru direutoriu. $_CLICK",
	DirSubText: "Direutoriu de Destín",
	DirBrowseText: "Seleiciona'l direutoriu nel qu'instalará $(^NameDA):",
	UnDirText: "El programa d'instalación desinstalará $(^NameDA) del siguiente direutoriu. Pa desinstalar d'un direutoriu distintu, calca Restolar y seleiciona otru direutoriu. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Seleiciona'l direutoriu dende'l cual desinstalará $(^NameDA):",
	SpaceAvailable: "Espaciu disponible: ",
	SpaceRequired: "Espaciu requeríu: ",
	UninstallingText: "$(^NameDA) sedrá desinstaláu del siguiente direutoriu. $_CLICK",
	UninstallingSubText: "Desinstalando dende:",
	FileError: "Error abriendo ficheru pa escritura: \\r\\n\\t\"$0\"\\r\\nCalca albortar p'anular la instalación,\\r\\nreintentar pa volver a intentar escribir el ficheru, u\\r\\nomitir pa inorar esti ficheru",
	FileError_NoIgnore: "Error abriendo ficheru pa escritura: \\r\\n\\t\"$0\"\\r\\nCalca reintentar pa volver a intentar escribir el ficheru, o\\r\\nencaboxar p'anular la instalación",
	CantWrite: "\"Nun pudo escribise: \"",
	CopyFailed: "Falló la copia",
	CopyTo: "\"Copiar a \"",
	Registering: "\"Rexistrando: \"",
	Unregistering: "\"Desaniciando rexistru: \"",
	SymbolNotFound: "\"Nun pudo atopase símbolu: \"",
	CouldNotLoad: "\"Nun pudo cargase: \"",
	CreateFolder: "\"Criar direutoriu: \"",
	CreateShortcut: "\"Criar accesu direutu: \"",
	CreatedUninstaller: "\"Criar desinstalador: \"",
	Delete: "\"Desaniciar ficheru: \"",
	DeleteOnReboot: "\"Desaniciar al reaniciu: \"",
	ErrorCreatingShortcut: "\"Fallu criando accesu direutu: \"",
	ErrorCreating: "\"Fallu criando: \"",
	ErrorDecompressing: "¡Error descomprimiendo datos! ¿Instalador corruptu?",
	ErrorRegistering: "Fallu rexistrando DLL",
	ExecShell: "\"Executar comandu: \"",
	Exec: "\"Executar: \"",
	Extract: "\"Estrayer: \"",
	ErrorWriting: "\"Extrayer: fallu escribiendo al ficheru \"",
	InvalidOpcode: "Instalador corruptu: códigu d'operación non válidu",
	NoOLE: "\"Ensin OLE pa: \"",
	OutputFolder: "\"Direutoriu de salida: \"",
	RemoveFolder: "\"Desaniciar direutoriu: \"",
	RenameOnReboot: "\"Renomar al reaniciu: \"",
	Rename: "\"Renomar: \"",
	Skipped: "\"Omitíu: \"",
	CopyDetails: "Copiar Detalles al Cartafueyu",
	LogInstall: "Rexistrar procesu d'instalación ",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Asturian$1 = {
	header: header$4,
	id: id$4,
	font: font$4,
	code_page: code_page$4,
	rtl: rtl$4,
	strings: strings$4
};

var header$5 = "NLF v6";
var id$5 = 1069;
var font$5 = {
	name: null,
	size: null
};
var code_page$5 = 1252;
var rtl$5 = false;
var strings$5 = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "$(^Name) -ren Instalazioa",
	UninstallCaption: "$(^Name) -ren Ezabaketa",
	LicenseSubCaption: ": Lizentzia hitzarmen agiria",
	ComponentsSubCaption: ": Instalazio aukerak",
	DirSubCaption: ": Instalazio karpeta",
	InstallingSubCaption: ": Instalatzen",
	CompletedSubCaption: ": Instalazioa burututa",
	UnComponentsSubCaption: ": Ezabaketa aukerak",
	UnDirSubCaption: ": Ezabaketa direktorioa",
	ConfirmSubCaption: ": Berretsi ezabaketa",
	UninstallingSubCaption: ": Ezabatzen",
	UnCompletedSubCaption: ": Ezabaketa burututa",
	BackBtn: "< &Atzera",
	NextBtn: "&Aurrera >",
	AgreeBtn: "Onartu",
	AcceptBtn: "Lizentzia hitzarmenaren baldintzak onartzen ditut.",
	DontAcceptBtn: "Ez ditut lizentzia hitzarmenaren baldintzak onartzen.",
	InstallBtn: "&Instalatu",
	UninstallBtn: "&Ezabatu",
	CancelBtn: "Ezeztatu",
	CloseBtn: "&Itxi",
	BrowseBtn: "&Arakatu...",
	ShowDetailsBtn: "Ikusi &zehaztasunak",
	ClickNext: "Sakatu Aurrera jarraitzeko.",
	ClickInstall: "Sakatu Instalatu instalazioarekin hasteko.",
	ClickUninstall: "Sakatu Ezabatu ezabaketarekin hasteko.",
	Name: "Izena",
	Completed: "Osatuta",
	LicenseText: "Mesedez, aztertu lizentzia hitzarmena $(^NameDA) instalatu aurretik. Baldintza guztiak onartzen badituzu, sakatu Onartu.",
	LicenseTextCB: "Mesedez, aztertu lizentzia hitzarmena $(^NameDA) instalatu aurretik. Baldintza guztiak onartzen badituzu, nabarmendu azpiko laukitxoa. $_CLICK",
	LicenseTextRB: "Mesedez, aztertu lizentzia hitzarmena $(^NameDA) instalatu aurretik. Baldintza guztiak onartzen badituzu, hautatu azpian lehen aukera. $_CLICK",
	UnLicenseText: "Mesedez, aztertu lizentzia hitzarmena $(^NameDA) ezabatu aurretik. Baldintza guztiak onartzen badituzu, sakatu Onartu.",
	UnLicenseTextCB: "Mesedez, aztertu lizentzia hitzarmena $(^NameDA) ezabatu aurretik. Baldintza guztiak onartzen badituzu, nabarmendu azpiko laukitxoa. $_CLICK.",
	UnLicenseTextRB: "Mesedez, aztertu lizentzia hitzarmena $(^NameDA) ezabatu aurretik. Baldintza guztiak onartzen badituzu, hautatu azpian lehen aukera. $_CLICK",
	Custom: "Norberaren nahien arabera",
	ComponentsText: "Nabarmendu instalatu nahi diren osagaiak, eta utzi zuri instalatu nahi ez direnak. $_CLICK",
	ComponentsSubText1: "Hautatu instalazio mota:",
	ComponentsSubText2_NoInstTypes: "Hautatu instalatu beharreko osagaiak:",
	ComponentsSubText2: "Edo hautatu instalatu beharreko aukerazko osagaiak:",
	UnComponentsText: "Nabarmendu ezabatu nahi diren osagaiak, eta utzi zuri ezabatu nahi ez direnak. $_CLICK",
	UnComponentsSubText1: "Hautatu ezabaketa mota:",
	UnComponentsSubText2_NoInstTypes: "Hautatu ezabatu beharreko osagaiak:",
	UnComponentsSubText2: "Edo hautatu ezabatu beharreko aukerazko osagaiak:",
	DirText: "Instalazio programak $(^NameDA) honako karpetan instalatuko du. Beste karpeta batean instalatzeko, sakatu Arakatu eta aukeratu beste bat. $_CLICK",
	DirSubText: "Helburu karpeta",
	DirBrowseText: "Aukeratu $(^NameDA) instalatuko den karpeta:",
	UnDirText: "Instalazio programak $(^NameDA) honako karpetatik ezabatuko du. Beste karpeta batetik ezabatzeko, sakatu Arakatu eta aukeratu beste bat. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Aukeratu $(^NameDA) zein karpetatik ezabatuko den:",
	SpaceAvailable: "Leku erabilgarria:",
	SpaceRequired: "Behar den lekua:",
	UninstallingText: "$(^NameDA) ondorengo karpetan instalatuko da. $_CLICK",
	UninstallingSubText: "Ezabatzen honako karpetatik:",
	FileError: "Hutsegitea idazteko fitxategia irekitzean: \\r\\n\\t\"$0\"\\r\\nSakatu Irten instalazioa ,\\r\\nsaiatu berriz fitxategi hau berriz idazten saiatzeko, u\\r\\njarraitu fitxategi hau alde batera utzita aurrera egiteko",
	FileError_NoIgnore: "Hutsegitea idazteko fitxategia irekitzean: \\r\\n\\t\"$0\"\\r\\nsaiatu berriz fitxategi hau berriz idazten saiatzeko ,\\r\\nSakatu Irten instalazioa",
	CantWrite: "\"Ezin izan da idatzi: \"",
	CopyFailed: "Kopiatzeak hutsegin du",
	CopyTo: "\"Kopiatu hona \"",
	Registering: "\"Erregistratzen: \"",
	Unregistering: "\"Erregistroa ezabatzen: \"",
	SymbolNotFound: "\"Ikurra ezin izan da aurkitu: \"",
	CouldNotLoad: "\"Ezin izan da kargatu: \"",
	CreateFolder: "\"Sortu karpeta: \"",
	CreateShortcut: "\"Sortu lasterbidea: \"",
	CreatedUninstaller: "\"Sortu ezabatzailea: \"",
	Delete: "\"Ezabatu fitxategia: \"",
	DeleteOnReboot: "\"Ezabatu berrabiarazitakoan: \"",
	ErrorCreatingShortcut: "\"Hutsegitea lasterbidea sortzerakoan: \"",
	ErrorCreating: "\"Hutsegitea sortzerakoan: \"",
	ErrorDecompressing: "¡Hutsegitea datuak deskomprimatzean! Instalatzailea okerra?",
	ErrorRegistering: "Hutsegitea DLL erregistratzerakoan",
	ExecShell: "\"Exekutatu agindua: \"",
	Exec: "\"Exekutatu: \"",
	Extract: "\"Kanporatu: \"",
	ErrorWriting: "\"Kanporaketa: hutsegitea fitxategira idazterakoan \"",
	InvalidOpcode: "Instalatzailea okerra: ekintza kodea ez da baliozkoa",
	NoOLE: "\"OLE-rik ez honentzako: \"",
	OutputFolder: "\"Irteera karpeta: \"",
	RemoveFolder: "\"Ezabatu karpeta: \"",
	RenameOnReboot: "\"Berrizendatu berrabiarazitakoan: \"",
	Rename: "\"Berrizendatu: \"",
	Skipped: "\"Alde batera utzitakoa: \"",
	CopyDetails: "Kopiatu xehetasunak arbelera",
	LogInstall: "Instalazio prozesuaren erregistroa gorde",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Basque$1 = {
	header: header$5,
	id: id$5,
	font: font$5,
	code_page: code_page$5,
	rtl: rtl$5,
	strings: strings$5
};

var header$6 = "NLF v6";
var id$6 = 1059;
var font$6 = {
	name: null,
	size: null
};
var code_page$6 = 1251;
var rtl$6 = false;
var strings$6 = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Усталяванне $(^Name)",
	UninstallCaption: "Выдаленне $(^Name)",
	LicenseSubCaption: ": Ліцэнзійнае пагадненне",
	ComponentsSubCaption: ": Параметры ўсталявання",
	DirSubCaption: ": Папка ўсталявання",
	InstallingSubCaption: ": Капіяванне файлаў",
	CompletedSubCaption: ": Працэдура завершена",
	UnComponentsSubCaption: ": Параметры выдалення",
	UnDirSubCaption: ": Папка выдалення",
	ConfirmSubCaption: ": Пацвярджэнне",
	UninstallingSubCaption: ": Выдаленне файлаў",
	UnCompletedSubCaption: ": Працэдура завершана",
	BackBtn: "< &Назад",
	NextBtn: "&Далей >",
	AgreeBtn: "&Прыняць",
	AcceptBtn: "Я &прымаю ўмовы Ліцэнзійнага пагаднення",
	DontAcceptBtn: "Я н&е прымаю ўмовы Ліцэнзійнага пагаднення",
	InstallBtn: "&Усталяваць",
	UninstallBtn: "Выд&аліць",
	CancelBtn: "Скасаваць",
	CloseBtn: "За&крыць",
	BrowseBtn: "А&гляд ...",
	ShowDetailsBtn: "Падра&бязнасці...",
	ClickNext: "Націсніце кнопку \"Далей\", каб працягнуць усталяванне праграмы.",
	ClickInstall: "Націсніце кнопку \"Усталяваць\", каб пачаць працэс ўсталявання праграмы.",
	ClickUninstall: "Націсніце кнопку \"Выдаліць\", каб пачаць працэс выдалення праграмы.",
	Name: "Імя",
	Completed: "Завершана",
	LicenseText: "Калі ласка, прачытайце ўмовы Ліцэнзійнага пагаднення перад пачаткам усталявання $(^NameDA). Калі Вы прымаеце ўмовы Ліцэнзійнага пагаднення, націсніце кнопку \"Прыняць\".",
	LicenseTextCB: "Калі ласка, прачытайце ўмовы Ліцэнзійнага пагаднення перад пачаткам усталявання $(^NameDA). Калі Вы прымаеце ўмовы Ліцэнзійнага пагаднення, націсніце на сцяжок ніжэй. $_CLICK",
	LicenseTextRB: "Калі ласка, прачытайце ўмовы Ліцэнзійнага пагаднення перад пачаткам усталявання $(^NameDA). Калі Вы прымаеце ўмовы Ліцэнзійнага пагаднення, выберыце першы варыянт з прапанаваных нiжэй. $_CLICK",
	UnLicenseText: "Калі ласка, прачытайце ўмовы Ліцэнзійнага пагаднення перад пачаткам выдалення $(^NameDA). Калі Вы прымаеце ўмовы Ліцэнзійнага пагаднення, нацiснiце кнопку \"Прыняць\".",
	UnLicenseTextCB: "Калі ласка, прачытайце ўмовы Ліцэнзійнага пагаднення перад пачаткам выдалення $(^NameDA). Калі Вы прымаеце ўмовы Ліцэнзійнага пагаднення, націсніце на сцяжок ніжэй. $_CLICK",
	UnLicenseTextRB: "Калі ласка, прачытайце ўмовы Ліцэнзійнага пагаднення перад пачаткам выдалення $(^NameDA). Калі Вы прымаеце ўмовы Ліцэнзійнага пагаднення, выберыце першы варыянт з прапанаваных нiжэй. $_CLICK",
	Custom: "Выбарачна",
	ComponentsText: "Выберыце кампаненты праграмы, якiя Вы жадаеце ўсталяваць. $_CLICK",
	ComponentsSubText1: "Выберыце тып усталявання:",
	ComponentsSubText2_NoInstTypes: "Выберыце кампаненты праграмы, каб усталяваць iх:",
	ComponentsSubText2: "або выберыце кампаненты праграмы, каб усталяваць iх па свайму жаданню:",
	UnComponentsText: "Выберыце кампаненты, якiя Вы жадаеце выдалiць, i знiмiце сцяжкі, выбраныя для тых кампанентаў, якiя не трэба выдаляць. $_CLICK",
	UnComponentsSubText1: "Выберыце тып выдалення:",
	UnComponentsSubText2_NoInstTypes: "Выберыце кампаненты для выдалення:",
	UnComponentsSubText2: "або выберыце кампаненты праграмы для выдалення:",
	DirText: "Праграма ўсталюе $(^NameDA) у выбраную папку. Каб усталяваць праграму ў iншай папкі, нацiснiце кнопку \"Агляд\" i выберыце патрэбную папку. $_CLICK",
	DirSubText: "Папка ўсталявання",
	DirBrowseText: "Выберыце папку для ўсталявання $(^NameDA):",
	UnDirText: "Праграма выдалiць $(^NameDA) з выбранай папкі. Каб выдаліць праграму з iншай папкі, нацiснiце кнопку \"Агляд\" i выберыце патрэбную папку. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Выберыце папку, з якой Вы жадаеце выдалiць $(^NameDA):",
	SpaceAvailable: "\"Даступна на дыску: \"",
	SpaceRequired: "\"Патрэбна месца на дыску: \"",
	UninstallingText: "Праграма выдалiць $(^NameDA) з Вашага камп'ютара. $_CLICK",
	UninstallingSubText: "Выдаленне з:",
	FileError: "Немагчыма адкрыць файл для запiсу: \\r\\n\\r\\n$0\\r\\n\\r\\nНацiснiце кнопку \"Перапынiць\", каб перапынiць усталяванне;\\r\\n\"Паўтарыць\", каб паўтарыць спробу запiсу ў файл;\\r\\n\"Ігнараваць\", каб прапусцiць гэта дзеянне.",
	FileError_NoIgnore: "Немагчыма адкрыць файл для запiсу: \\r\\n\\r\\n$0\\r\\n\\r\\nНацiснiце кнопку \"Паўтарыць\", каб паўтарыць спробу запiсу ў файл;\\r\\n\"Скасаваць\", каб перапынiць усталяванне.",
	CantWrite: "\"Немагчыма запiсаць: \"",
	CopyFailed: "Памылка пры капіяванні",
	CopyTo: "\"Капіяванне ў \"",
	Registering: "\"Рэгiстрацыя: \"",
	Unregistering: "\"Выдаленне рэгiстрацыi: \"",
	SymbolNotFound: "\"Немагчыма знайсці сiмвал: \"",
	CouldNotLoad: "\"Немагчыма загрузiць: \"",
	CreateFolder: "\"Стварэнне папкі: \"",
	CreateShortcut: "\"Стварэнне ярлыка: \"",
	CreatedUninstaller: "\"Стварэнне праграмы выдалення: \"",
	Delete: "\"Выдаленне файла: \"",
	DeleteOnReboot: "\"Выдаленне пасля перазапуску камп'ютара: \"",
	ErrorCreatingShortcut: "\"Памылка стварэння ярлыка: \" ",
	ErrorCreating: "\"Памылка стварэння: \"",
	ErrorDecompressing: "Немагчыма выцягнуць дадзеныя. Магчыма пашкоджаны дыстрыбутыў.",
	ErrorRegistering: "Немагчыма зарэгістраваць бібліятэку (DLL)",
	ExecShell: "\"Выкананне каманды абалонкі: \" ",
	Exec: "\"Выкананне: \"",
	Extract: "\"Выманне: \"",
	ErrorWriting: "\"Выманне: памылка запiсу файла\"",
	InvalidOpcode: "дыстрыбутыў пашкоджаны: код памылкi",
	NoOLE: "\"Няма OLE для: \" ",
	OutputFolder: "\"Папка усталявання: \"",
	RemoveFolder: "\"Выдаленне папкі: \"",
	RenameOnReboot: "\"Перайменаванне пасля перазапуску камп'ютара: \"",
	Rename: "\"Перайменаванне: \"",
	Skipped: "\"Прапушчана: \"",
	CopyDetails: "Капіяваць звесткi ў буфер абмена ",
	LogInstall: "Запiсваць у лог працэс усталявання",
	Byte: "Б",
	Kilo: " К",
	Mega: " М",
	Giga: " Г"
};
var Belarusian$1 = {
	header: header$6,
	id: id$6,
	font: font$6,
	code_page: code_page$6,
	rtl: rtl$6,
	strings: strings$6
};

var header$7 = "NLF v6";
var id$7 = 5146;
var font$7 = {
	name: null,
	size: null
};
var code_page$7 = 1250;
var rtl$7 = false;
var strings$7 = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "$(^Name) Instalacija",
	UninstallCaption: "$(^Name) Uklanjanje",
	LicenseSubCaption: ": Licencno pravo korištenja",
	ComponentsSubCaption: ": Opcije instalacije",
	DirSubCaption: ": Izbor mape za instalaciju",
	InstallingSubCaption: ": Instaliranje",
	CompletedSubCaption: ": Završeno",
	UnComponentsSubCaption: ": Opcije uklanjanja",
	UnDirSubCaption: ": Mapa uklanjanja",
	ConfirmSubCaption: ": Potvrda",
	UninstallingSubCaption: ": Uklanjanje",
	UnCompletedSubCaption: ": Završeno uklanjanje",
	BackBtn: "< &Nazad",
	NextBtn: "&Dalje >",
	AgreeBtn: "&Prihvatam",
	AcceptBtn: "&Prihvatam uvjete licencnog ugovora",
	DontAcceptBtn: "&Ne prihvatam uvjete licencnog ugovora",
	InstallBtn: "&Instaliraj",
	UninstallBtn: "&Ukloni",
	CancelBtn: "Odustani",
	CloseBtn: "&Zatvori",
	BrowseBtn: "&Pregledaj...",
	ShowDetailsBtn: "Prikaži &detalje",
	ClickNext: "Pritisnite dugme 'Dalje' za nastavak.",
	ClickInstall: "Pritisnite dugme 'Instaliraj' za početak instalacije.",
	ClickUninstall: "Pritisnite dugme 'Ukloni' za početak uklanjanja.",
	Name: "Ime",
	Completed: "Završeno",
	LicenseText: "Molim pročitajte licencu prije instaliranja programa $(^NameDA). Ukoliko prihvatate sve uvjete ugovora, odaberite 'Prihvatam'.",
	LicenseTextCB: "Molim pročitajte licencu prije instaliranja programa $(^NameDA). Ukoliko prihvatate sve uvjete ugovora, označite donji kvadratić. $_CLICK",
	LicenseTextRB: "Molim pročitajte licencu prije instaliranja programa $(^NameDA). Ukoliko prihvatate sve uvjete ugovora, odaberite prvu donju opciju. $_CLICK",
	UnLicenseText: "Molim pročitajte licencu prije uklanjanja programa $(^NameDA). Ukoliko prihvatate sve uvjete ugovora, odaberite 'Prihvatam'.",
	UnLicenseTextCB: "Molim pročitajte licencu prije uklanjanja programa $(^NameDA). Ako prihvatate sve uvjete ugovora, obilježite donji kvadratić. $_CLICK",
	UnLicenseTextRB: "Molim pročitajte licencu prije uklanjanja programa $(^NameDA). Ukoliko prihvatate sve uvjete ugovora, odaberite prvu opciju ispod. $_CLICK",
	Custom: "Podešavanje",
	ComponentsText: "Označite komponente koje želite instalirati. Instaliraju se samo označene komponente. Uklonite oznaku sa onih koje ne želite instalirati. $_CLICK",
	ComponentsSubText1: "Izaberite tip instalacije:",
	ComponentsSubText2_NoInstTypes: "Odaberite komponente za instalaciju:",
	ComponentsSubText2: "Ili po izboru označite komponente koje želite instalirati:",
	UnComponentsText: "Označite komponente koje želite ukloniti. Uklonite oznaku sa onih koje ne želite ukloniti. $_CLICK",
	UnComponentsSubText1: "Izaberite tip uklanjanja:",
	UnComponentsSubText2_NoInstTypes: "Izaberite komponente za uklanjanje:",
	UnComponentsSubText2: "Ili po izboru odaberite komponente koje želite da uklonite:",
	DirText: "Program $(^NameDA) će biti instaliran u sljedeću mapu. Za instalaciju na neku drugu mapu odaberite 'Pregledaj...' i odaberite drugu mapu. $_CLICK",
	DirSubText: "Odredišna mapa",
	DirBrowseText: "Izaberite mapu u koju želite instalirati program $(^NameDA):",
	UnDirText: "Program $(^NameDA) će biti uklonjen iz navedene mape. Za uklanjanje iz druge mape odaberite 'Pregledaj...' i označite drugu mapu. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Izaberite mapu iz koje ćete program $(^NameDA) ukloniti:",
	SpaceAvailable: "\"Slobodno prostora na disku: \"",
	SpaceRequired: "\"Potrebno prostora na disku: \"",
	UninstallingText: "Program $(^NameDA) će biti uklonjen iz sljedeće mape. $_CLICK",
	UninstallingSubText: "Uklanjanje iz:",
	FileError: "Greška prilikom otvaranja datoteke za upisivanje: \\r\\n\\t\"$0\"\\r\\n\\\"Odustani\\\" za prekid instalacije,\\r\\n\\\"Ponovi\\\" za ponovni pokušaj upisivanja, ili\\r\\n\\\"Ignoriši\\\" za zanemarenje te datoteke",
	FileError_NoIgnore: "Greška prilikom otvaranja datoteke za upisivanje: \\r\\n\\t\"$0\"\\r\\n\\\"Ponovi\\\" za ponovni pokušaj zapisivanja, ili\\r\\n\\\"Odustani\\\" za prekid instalacije",
	CantWrite: "\"Nemoguće upisati: \"",
	CopyFailed: "Greška prilikom kopiranja",
	CopyTo: "\"Kopiraj u \"",
	Registering: "\"Prijava: \"",
	Unregistering: "\"Odjava: \"",
	SymbolNotFound: "\"Nemoguće naći simbol: \"",
	CouldNotLoad: "\"Nemoguće učitavanje: \"",
	CreateFolder: "\"Napravi mapu: \"",
	CreateShortcut: "\"Napravi prečicu: \"",
	CreatedUninstaller: "\"Program za uklanjanje: \"",
	Delete: "\"Obriši datoteku: \"",
	DeleteOnReboot: "\"Obriši prilikom ponovnog pokretanja: \"",
	ErrorCreatingShortcut: "\"Greška prilikom kreiranja prečica: \"",
	ErrorCreating: "\"Greška prilikom kreiranja: \"",
	ErrorDecompressing: "Greška prilikom otpakivanja podataka! Oštećen instalacijski program?",
	ErrorRegistering: "Greška prilikom prijavljivanja DLLa",
	ExecShell: "\"ExecShell: \"",
	Exec: "\"Izvrši: \"",
	Extract: "\"Otpakuj: \"",
	ErrorWriting: "\"Otpakivanje: greška upisivanja u datoteku \"",
	InvalidOpcode: "Oštećena instalacijska datoteka: neispravna opkoda",
	NoOLE: "\"Nema OLE za: \"",
	OutputFolder: "\"Izlazna mapa: \"",
	RemoveFolder: "\"Obriši mapu: \"",
	RenameOnReboot: "\"Preimenuj prilikom ponovnog startovanja: \"",
	Rename: "\"Preimenuj: \"",
	Skipped: "\"Preskočeno: \"",
	CopyDetails: "Kopiraj detalje na Klembord",
	LogInstall: "Logiraj zapisnik procesa instalacije",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Bosnian$1 = {
	header: header$7,
	id: id$7,
	font: font$7,
	code_page: code_page$7,
	rtl: rtl$7,
	strings: strings$7
};

var header$8 = "NLF v6";
var id$8 = 1150;
var font$8 = {
	name: null,
	size: null
};
var code_page$8 = 1252;
var rtl$8 = false;
var strings$8 = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Staliañ ha kefluniañ $(^Name)",
	UninstallCaption: "Distaliañ $(^Name)",
	LicenseSubCaption: ": Aotre arverañ",
	ComponentsSubCaption: ": Dibaboù staliañ",
	DirSubCaption: ": Kavlec'h staliañ",
	InstallingSubCaption: ": O staliañ ar restroù",
	CompletedSubCaption: ": Echu eo",
	UnComponentsSubCaption: ": Dibaboù distaliañ",
	UnDirSubCaption: ": Kavlec'h distaliañ",
	ConfirmSubCaption: ": Kadarnañ",
	UninstallingSubCaption: ": O tistaliañ ar restroù",
	UnCompletedSubCaption: ": Echu eo",
	BackBtn: "< &Kent",
	NextBtn: "&War-lerc'h >",
	AgreeBtn: "&A-du emaon",
	AcceptBtn: "&Degemer holl dermoù al lañvaz emglev",
	DontAcceptBtn: "&Chom hep degemer termoù al lañvaz emglev",
	InstallBtn: "&Staliañ",
	UninstallBtn: "&Distaliañ",
	CancelBtn: "Nullañ",
	CloseBtn: "&Serriñ",
	BrowseBtn: "F&urchal...",
	ShowDetailsBtn: "Muioc'h a &ditouroù",
	ClickNext: "Klikit war « War-lerc'h » evit mont war-raok.",
	ClickInstall: "Klikit war « Staliañ » evit kregiñ gant ar staliadur.",
	ClickUninstall: "Klikit war « Distaliañ » evit kregiñ gant an distaliadur.",
	Name: "Anv",
	Completed: "Echu eo",
	LicenseText: "Bezit aketus en ur lenn an aotre arverañ a-raok staliañ $(^NameDA) mar plij. Mar degemerit pep term eus an aotre, klikit war « A-du emaon ».",
	LicenseTextCB: "Bezit aketus en ur lenn an aotre arverañ a-raok staliañ $(^NameDA) mar plij. Mar degemerit pep term eus an aotre, klikit war al log a-zindan. $_CLICK",
	LicenseTextRB: "Bezit aketus en ur lenn an aotre arverañ a-raok staliañ $(^NameDA) mar plij. Mar degemerit pep term eus an aotre, dizuzit an dibab kentañ a-zindan. $_CLICK",
	UnLicenseText: "Bezit aketus en ur lenn an aotre arverañ a-raok distaliañ $(^NameDA) mar plij. Mar degemerit pep term eus an aotre, klikit war « A-du emaon ».",
	UnLicenseTextCB: "Bezit aketus en ur lenn an aotre arverañ a-raok distaliañ $(^NameDA) mar plij. Mar degemerit pep term eus an aotre, klikit war al log a-zindan. $_CLICK",
	UnLicenseTextRB: "Bezit aketus en ur lenn an aotre arverañ a-raok distaliañ $(^NameDA) mar plij. Mar degemerit pep term eus an aotre, diuzit an dibab kentañ a-zindan. $_CLICK",
	Custom: "Diouzh ho kiz",
	ComponentsText: "Dibabit an elfennoù a fell deoc'h staliañ pe diziuzit an elfennoù a fell deoc'h leuskel a-gostez. $_CLICK",
	ComponentsSubText1: "Dibabit pe seurt staliañ a vo :",
	ComponentsSubText2_NoInstTypes: "Dibabit an elfennoù da staliañ :",
	ComponentsSubText2: "Pe dibabit an elfennoù diret a fell deoc'h staliañ :",
	UnComponentsText: "Dibabit an elfennoù a fell deoc'h distaliañ pe diziuzit an elfennoù a fell deoc'h mirout. $_CLICK",
	UnComponentsSubText1: "Dibabit peseurt distaliañ a vo :",
	UnComponentsSubText2_NoInstTypes: "Dibabit an elfennoù da zistaliañ :",
	UnComponentsSubText2: "Pe dibabit an elfennoù diret a fell deoc'h distaliañ :",
	DirText: "Staliet e vo $(^NameDA) gant ar goulev-mañ er c'havlec'h da-heul. Mar fell deoc'h dibab ur c'havlec'h all, klikit war « Furchal » ha dibabit ur c'havlec'h all. $_CLICK",
	DirSubText: "Kavlec'h bukenn",
	DirBrowseText: "Dibabit ar c'havlec'h e vo diazezet $(^NameDA) ennañ :",
	UnDirText: "Distaliet e vo $(^NameDA) gant ar goulev-mañ adalek ar c'havlec'h da heul. Ma fell deoc'h distaliañ adalek ur c'havlec'h all, klikit war « Furchal » ha diuzit ur c'havlec'h all. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Diuzit ar c'havlec'h evit distaliañ $(^NameDA) adalek :",
	SpaceAvailable: "\"Egor kantenn vak : \"",
	SpaceRequired: "\"Egor kantenn rekis : \"",
	UninstallingText: "Distaliet e vo $(^NameDA) adalek ar c'havelec'h da-heul. $_CLICK",
	UninstallingSubText: "Distaliañ adalek :",
	FileError: "Fazi en ur zigeriñ ur restr evit skrivañ : \\r\\n\\r\\n$0\\r\\n\\r\\nKlikit war « Paouez » evit paouez gant ar staliañ,\\r\\n« Adober » evit eseañ en-dro, pe\\r\\n« Tremen » evit leuskel a-gostez ar restr-mañ.",
	FileError_NoIgnore: "Fazi en ur zigeriñ ur restr a-benn skrivañ : \\r\\n\\r\\n$0\\r\\n\\r\\nKlikit war « Adober » evit esaeañ en-dro, pe\\r\\nwar « Nullañ » evit paouez gant ar staliañ.",
	CantWrite: "\"N'haller ket skrivañ : \"",
	CopyFailed: "Kopiañ faziet",
	CopyTo: "\"Kopiañ da \"",
	Registering: "\"Oc'h enskrivañ : \"",
	Unregistering: "\"O tienskrivañ : \"",
	SymbolNotFound: "\"N'haller ket kavout ur simbolenn : \"",
	CouldNotLoad: "\"N'haller ket kargañ : \"",
	CreateFolder: "\"Krouiñ kavlec'h : \"",
	CreateShortcut: "\"Krouiñ berradenn : \"",
	CreatedUninstaller: "\"Skoazeller distaliañ krouet : \"",
	Delete: "\"Dilemel restr : \"",
	DeleteOnReboot: "\"Dilemel en ur adloc'hañ : \"",
	ErrorCreatingShortcut: "\"Fazi en ur grouiñ berradenn : \"",
	ErrorCreating: "\"Fazi en ur grouiñ : \"",
	ErrorDecompressing: "Fazi en ur ziwaskañ stlenn ! Skoazeller staliañ gwastet ?",
	ErrorRegistering: "Fazi en ur enskrivañ an DLL",
	ExecShell: "\"ExecShell : \"",
	Exec: "\"Lañsañ : \"",
	Extract: "\"Eztennañ : \"",
	ErrorWriting: "\"Eztennañ : fazi en ur skrivañ restr \"",
	InvalidOpcode: "Skoazeller staliañ gwastet : opcode direizh",
	NoOLE: "\"OLE ebet evit : \"",
	OutputFolder: "\"Kavlec'h ec'hank : \"",
	RemoveFolder: "\"Dilemel ar c'havlec'h : \"",
	RenameOnReboot: "\"Adenvel pa vez adloc'het : \"",
	Rename: "\"Adenvel : \"",
	Skipped: "\"Laosket a-gostez: \"",
	CopyDetails: "Kopiañ ar munudoù er golver",
	LogInstall: "Tresañ an argerzh staliañ",
	Byte: "E",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Breton$1 = {
	header: header$8,
	id: id$8,
	font: font$8,
	code_page: code_page$8,
	rtl: rtl$8,
	strings: strings$8
};

var header$9 = "NLF v6";
var id$9 = 1026;
var font$9 = {
	name: null,
	size: null
};
var code_page$9 = 1251;
var rtl$9 = false;
var strings$9 = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Инсталиране на $(^Name) ",
	UninstallCaption: "Изтриване на $(^Name) ",
	LicenseSubCaption: ": Лицензионно споразумение",
	ComponentsSubCaption: ": Опции за инсталиране",
	DirSubCaption: ": Инсталиране в папка",
	InstallingSubCaption: ": Инсталиране",
	CompletedSubCaption: ": Завършване",
	UnComponentsSubCaption: ": Опции за изтриване",
	UnDirSubCaption: ": Изтриване от папка",
	ConfirmSubCaption: ": Потвърждение",
	UninstallingSubCaption: ": Изтриване",
	UnCompletedSubCaption: ": Завършване",
	BackBtn: "< &Назад",
	NextBtn: "Н&апред >",
	AgreeBtn: "&Съгласен",
	AcceptBtn: "&Съгласен съм с условията на Лицензионното споразумение.",
	DontAcceptBtn: "&Не съм съгласен с условията на Лицензионното споразумение.",
	InstallBtn: "&Инсталирай",
	UninstallBtn: "&Изтрий",
	CancelBtn: "&Отказ",
	CloseBtn: "&Затвори",
	BrowseBtn: "П&реглед...",
	ShowDetailsBtn: "&Детайли",
	ClickNext: "Натиснете \"Напред\", за да продължите.",
	ClickInstall: "Натиснете \"Инсталирай\", за да започне инсталирането.",
	ClickUninstall: "Натиснете \"Изтрий\", за да започне изтриването.",
	Name: "Име",
	Completed: "Край",
	LicenseText: "Моля прочетете Лицензионното споразумение преди да инсталирате $(^NameDA). Ако приемате всички условия на споразумението, натиснете \"Съгласен\".",
	LicenseTextCB: "Моля прочетете Лицензионното споразумение преди да инсталирате $(^NameDA). Ако приемате всички условия на споразумението, сложете отметка в полето по-долу. $_CLICK",
	LicenseTextRB: "Моля прочетете Лицензионното споразумение преди да инсталирате $(^NameDA). Ако приемате всички условия на споразумението, изберете първата опция по-долу. $_CLICK",
	UnLicenseText: "Моля прочетете Лицензионното споразумение преди да изтриете $(^NameDA). Ако приемате всички условия на споразумението, натиснете \"Съгласен\".",
	UnLicenseTextCB: "Моля прочетете Лицензионното споразумение преди да изтриете $(^NameDA). Ако приемате всички условия на споразумението, сложете отметка в полето по-долу. $_CLICK",
	UnLicenseTextRB: "Моля прочетете Лицензионното споразумение преди да изтриете $(^NameDA). Ако приемате всички условия на споразумението, изберете първата опция по-долу. $_CLICK",
	Custom: "Инсталиране по избор",
	ComponentsText: "Изберете компонентите, които искате да бъдат инсталирани. $_CLICK",
	ComponentsSubText1: "Изберете тип инсталиране:",
	ComponentsSubText2_NoInstTypes: "Изберете компоненти:",
	ComponentsSubText2: "Или изберете компонентите, които искате да бъдат инсталирани:",
	UnComponentsText: "Сложете отметка пред компонентите, които искате да изтриете, а тези които не искате да изтриете оставете без отметка. $_CLICK",
	UnComponentsSubText1: "Изберете типа на изтриване:",
	UnComponentsSubText2_NoInstTypes: "Изберете компонентите за изтриване:",
	UnComponentsSubText2: "Или, изберете допълнителни компоненти за изтриване:",
	DirText: "Програмата ще инсталира $(^NameDA) в посочената папка. За да инсталирате в друга папка, натиснете \"Преглед\" и изберете друга папка. $_CLICK",
	DirSubText: "Целева папка",
	DirBrowseText: "Изберете папка, в която да се инсталира $(^NameDA):",
	UnDirText: "Програмата ще изтрие $(^NameDA) от следната папка. За да изтриете от друга папка, натиснете \"Преглед\" и изберете друга папка. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Изберете папката от която да се изтрие $(^NameDA):",
	SpaceAvailable: "\"Свободно пространство: \"",
	SpaceRequired: "\"Необходимо пространство: \"",
	UninstallingText: "$(^NameDA) ще бъде изтрита от следната папка. $_CLICK",
	UninstallingSubText: "Изтриване от:",
	FileError: "Грешка при отваряне на файла за запис: \\r\\n\\t\"$0\"\\r\\nНатиснете \"Прекрати\", за да прекратите инсталирането, \"Повтори\", за да опитате отново или \"Игнорирай\", за да пропуснете този файл",
	FileError_NoIgnore: "Грешка при отваряне на файла за запис: \\r\\n\\t\"$0\"\\r\\nНатиснете \"Повтори\", за да опитате отново или \"Прекрати\", за да прекратите инсталирането.",
	CantWrite: "\"Неуспешно записване на: \"",
	CopyFailed: "Копирането неуспешно",
	CopyTo: "\"Копиране на \"",
	Registering: "\"Регистриране на: \"",
	Unregistering: "\"Дерегистриране на: \"",
	SymbolNotFound: "\"Символът не е намерен: \"",
	CouldNotLoad: "\"Неуспешно зареждане на: \"",
	CreateFolder: "\"Създаване на папка: \"",
	CreateShortcut: "\"Създаване на пряк път: \"",
	CreatedUninstaller: "\"Създаване на програма за изтриване: \"",
	Delete: "\"Изтриване на: \"",
	DeleteOnReboot: "\"Изтриване след рестарт: \"",
	ErrorCreatingShortcut: "\"Грешка при създаване на прекия път: \"",
	ErrorCreating: "\"Грешка при създаване на: \"",
	ErrorDecompressing: "Грешка при декомпресиране на данните! Вероятно инсталационния пакет е повреден.",
	ErrorRegistering: "Грешка при регистриране на DLL",
	ExecShell: "\"ExecShell: \"",
	Exec: "\"Изпълнение на: \"",
	Extract: "\"Извличане на: \"",
	ErrorWriting: "\"Извличане на: грешка при запис във файл \"",
	InvalidOpcode: "Пакета е повреден: грешен код на операция",
	NoOLE: "\"Няма OLE за: \"",
	OutputFolder: "\"Инсталиране в папка: \"",
	RemoveFolder: "\"Изтриване на папка: \"",
	RenameOnReboot: "\"Преименуване при рестарт: \"",
	Rename: "\"Преименуване на: \"",
	Skipped: "\"Пропускане на: \"",
	CopyDetails: "Копиране на данните в буфера",
	LogInstall: "Записване на отчет за инсталирането",
	Byte: "Б",
	Kilo: " К",
	Mega: " М",
	Giga: " Г"
};
var Bulgarian$1 = {
	header: header$9,
	id: id$9,
	font: font$9,
	code_page: code_page$9,
	rtl: rtl$9,
	strings: strings$9
};

var header$a = "NLF v6";
var id$a = 1027;
var font$a = {
	name: null,
	size: null
};
var code_page$a = 1252;
var rtl$a = false;
var strings$a = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Instal·lació de l'aplicació $(^Name)",
	UninstallCaption: "Desinstal·lació de l'aplicació $(^Name)",
	LicenseSubCaption: ": Acord de llicència",
	ComponentsSubCaption: ": Opcions d'instal·lació",
	DirSubCaption: ": Carpeta d'instal·lació",
	InstallingSubCaption: ": S'està instal·lant",
	CompletedSubCaption: ": S'ha acabat",
	UnComponentsSubCaption: ": Opcions de desinstal·lació",
	UnDirSubCaption: ": Carpeta de desinstal·lació",
	ConfirmSubCaption: ": Confirmació",
	UninstallingSubCaption: ": S'està desinstal·lant",
	UnCompletedSubCaption: ": No s'ha acabat",
	BackBtn: "< En&rere",
	NextBtn: "En&davant >",
	AgreeBtn: "Hi estic d'a&cord",
	AcceptBtn: "&Accepto els termes de l'acord de llicència",
	DontAcceptBtn: "&No accepto els termes de l'acord de llicència",
	InstallBtn: "&Instal·la",
	UninstallBtn: "&Desinstal·la",
	CancelBtn: "&Cancel·la",
	CloseBtn: "&Tanca",
	BrowseBtn: "&Navega...",
	ShowDetailsBtn: "&Mostra els detalls",
	ClickNext: "Feu clic a Endavant per a continuar.",
	ClickInstall: "Feu clic a Instal·la per a iniciar la instal·lació.",
	ClickUninstall: "Feu clic a Desinstal·la per a iniciar la desinstal·lació.",
	Name: "Nom",
	Completed: "S'ha acabat",
	LicenseText: "Reviseu l'acord de llicència abans d'instal·lar l'aplicació $(^NameDA). Si accepteu tots els termes de l'acord, feu clic a Hi estic d'acord.",
	LicenseTextCB: "Reviseu l'acord de llicència abans d'instal·lar l'aplicació $(^NameDA). Si accepteu tots els termes de l'acord, activeu la casella de sota. $_CLICK",
	LicenseTextRB: "Reviseu l'acord de llicència abans d'instal·lar l'aplicació $(^NameDA). Si accepteu tots els termes de l'acord, seleccioneu la primera opció de sota. $_CLICK",
	UnLicenseText: "Reviseu l'acord de llicència abans de desinstal·lar l'aplicació $(^NameDA). Si accepteu tots els termes de l'acord, feu clic a Hi estic d'acord.",
	UnLicenseTextCB: "Reviseu l'acord de llicència abans de desinstal·lar l'aplicació $(^NameDA). Si accepteu tots els termes de l'acord, activeu la la casella de sota. $_CLICK",
	UnLicenseTextRB: "Reviseu l'acord de llicència abans de desinstal·lar l'aplicació $(^NameDA). Si accepteu tots els termes de l'acord, seleccioneu la primera opció de sota. $_CLICK",
	Custom: "Personalitzada",
	ComponentsText: "Activeu els components que voleu instal·lar i desactiveu els que no. $_CLICK",
	ComponentsSubText1: "Seleccioneu el tipus d'instal·lació:",
	ComponentsSubText2_NoInstTypes: "Seleccioneu els components per instal·lar:",
	ComponentsSubText2: "O bé, seleccioneu els components opcionals que desitgéssiu instal·lar:",
	UnComponentsText: "Activeu els components que voleu desinstal·lar i desactiveu els que no. $_CLICK",
	UnComponentsSubText1: "Seleccioneu el tipus de desinstal·lació:",
	UnComponentsSubText2_NoInstTypes: "Seleccioneu els components per desinstal·lar:",
	UnComponentsSubText2: "O bé, seleccioneu els components opcionals per desinstal·lar:",
	DirText: "El programa d'instal·lació instal·larà l'aplicació $(^NameDA) en la següent carpeta. Per a instal·lar-lo en una carpeta diferent, feu clic a Navega i seleccioneu-ne una altra. $_CLICK",
	DirSubText: "Carpeta de destinació",
	DirBrowseText: "Seleccioneu la carpeta on s'instal·larà l'aplicació $(^NameDA):",
	UnDirText: "El programa d'instal·lació desinstal·larà l'aplicació $(^NameDA) de la següent carpeta. Per a desinstal·lar-lo d'una carpeta diferent, feu clic a Navega i seleccioneu-ne una altra. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Seleccioneu la carpeta des d'on es desinstal·larà l'aplicació $(^NameDA):",
	SpaceAvailable: "\"Espai lliure: \"",
	SpaceRequired: "\"Espai necessari: \"",
	UninstallingText: "Es desinstal·larà l'aplicació $(^NameDA) de la següent carpeta. $_CLICK",
	UninstallingSubText: "S'està desinstal·lant de:",
	FileError: "S'ha produït un error en obrir el fitxer en mode d'escriptura: \\r\\n\\t\"$0\"\\r\\nFeu clic a Abandona per a aturar la instal·lació,\\r\\nReintenta per a tornar-ho a provar, o\\r\\Ignora per a ometre aquest fitxer.",
	FileError_NoIgnore: "S'ha produït un error en obrir el fitxer en mode d'escriptura: \\r\\n\\t\"$0\"\\r\\nFeu clic a Reintenta per a tornar-ho a provar, o\\r\\Cancel·la per a aturar la instal·lació.",
	CantWrite: "\"No s'ha pogut escriure: \"",
	CopyFailed: "Ha fallat la còpia",
	CopyTo: "\"Copia a \"",
	Registering: "\"S'esta registrant:\"",
	Unregistering: "\"S'està suprimint el registre: \"",
	SymbolNotFound: "\"No s'ha trobat el símbol: \"",
	CouldNotLoad: "\"No s'ha pogut carregar: \"",
	CreateFolder: "\"Crea la carpeta: \"",
	CreateShortcut: "\"Crea la drecera: \"",
	CreatedUninstaller: "\"S'ha creat el desinstal·lador: \"",
	Delete: "\"S'ha suprimit el fitxer: \"",
	DeleteOnReboot: "\"Suprimeix en reiniciar: \"",
	ErrorCreatingShortcut: "\"S'ha produït un error en crear la drecera: \"",
	ErrorCreating: "S'ha produït un error en crear:",
	ErrorDecompressing: "S'ha produït un error en descomprimir les dades! L'instal·lador està corrupte?",
	ErrorRegistering: "S'ha produït un error en registrar una DLL",
	ExecShell: "\"Executa l'ordre: \"",
	Exec: "\"Executa:\"",
	Extract: "\"Extreu: \"",
	ErrorWriting: "\"Extreu: s'ha produït un error en escriure el fitxer \"",
	InvalidOpcode: "L'instal·lador està corrupte: el codi d'operació no és vàlid",
	NoOLE: "\"No hi ha OLE per a: \"",
	OutputFolder: "\"Carpeta de sortida: \"",
	RemoveFolder: "\"Suprimeix la carpeta: \"",
	RenameOnReboot: "\"Reanomena en reiniciar: \"",
	Rename: "\"Reanomena: \"",
	Skipped: "\"S'ha omès: \"",
	CopyDetails: "Copia els detalls al porta-retalls",
	LogInstall: "Registra el procés d'instal·lació",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Catalan$1 = {
	header: header$a,
	id: id$a,
	font: font$a,
	code_page: code_page$a,
	rtl: rtl$a,
	strings: strings$a
};

var header$b = "NLF v6";
var id$b = 1155;
var font$b = {
	name: null,
	size: null
};
var code_page$b = 1252;
var rtl$b = false;
var strings$b = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Assistente d'Installazione di $(^Name)",
	UninstallCaption: "Disinstallazione di $(^Name)",
	LicenseSubCaption: ": Cuntrattu d'Utilizazione",
	ComponentsSubCaption: ": Ozzioni d'Installazione",
	DirSubCaption: ": Cartulare d'Installazione",
	InstallingSubCaption: ": Installazione in corsu",
	CompletedSubCaption: ": Compiu",
	UnComponentsSubCaption: ": Ozzioni di Disinstallazione",
	UnDirSubCaption: ": Cartulare di Disinstallazione",
	ConfirmSubCaption: ": Cunfirmazione",
	UninstallingSubCaption: ": Disinstallazione in corsu",
	UnCompletedSubCaption: ": Compiu",
	BackBtn: "< &Precedente",
	NextBtn: "&Seguente >",
	AgreeBtn: "&Accunsentu",
	AcceptBtn: "Sò d'&accunsentu cù i termini di u Cuntrattu di Licenza",
	DontAcceptBtn: "Ùn sò &micca d'accunsentu cù i termini di u Cuntrattu di Licenza",
	InstallBtn: "&Installà",
	UninstallBtn: "&Disinstallà",
	CancelBtn: "Abbandunà",
	CloseBtn: "&Chjode",
	BrowseBtn: "&Sfuglià...",
	ShowDetailsBtn: "Affissà i &ditaglii",
	ClickNext: "Sceglie Seguente per cuntinuà.",
	ClickInstall: "Sceglie Installà per principià l'installazione.",
	ClickUninstall: "Sceglie Disinstallà per principià a disinstallazione.",
	Name: "Nome",
	Completed: "Compiu",
	LicenseText: "Ci vole à leghje u cuntrattu di licenza nanzu d'installà $(^NameDA). S'è voi site d'accunsentu cù tutti i termini di u cuntrattu, sceglie Accunsentu.",
	LicenseTextCB: "Ci vole à leghje u cuntrattu di licenza nanzu d'installà $(^NameDA). S'è voi site d'accunsentu cù tutti i termini di u cuntrattu, sceglie a casella inghjò. $_CLICK",
	LicenseTextRB: "Ci vole à leghje u cuntrattu di licenza nanzu d'installà $(^NameDA). S'è voi site d'accunsentu cù tutti i termini di u cuntrattu, sceglie a prima ozzione inghjò. $_CLICK",
	UnLicenseText: "Ci vole à leghje u cuntrattu di licenza nanzu di disinstallà $(^NameDA). S'è voi site d'accunsentu cù tutti i termini di u cuntrattu, sceglie Accunsentu.",
	UnLicenseTextCB: "Ci vole à leghje u cuntrattu di licenza nanzu di disinstallà $(^NameDA). S'è voi site d'accunsentu cù tutti i termini di u cuntrattu, sceglie a casella inghjò. $_CLICK",
	UnLicenseTextRB: "Ci vole à leghje u cuntrattu di licenza nanzu di disinstallà $(^NameDA). S'è voi site d'accunsentu cù tutti i termini di u cuntrattu, sceglie a prima ozzione inghjò. $_CLICK",
	Custom: "Persunalizatu",
	ComponentsText: "Selezziunà i cumpunenti chì voi vulete installà è viutà a casella di quelli ch'ellu ùn ci vole à installà. $_CLICK",
	ComponentsSubText1: "Selezziunà u tipu d'installazione :",
	ComponentsSubText2_NoInstTypes: "Selezziunà i cumpunenti à installà :",
	ComponentsSubText2: "Osinnò, selezziunà i cumpunenti addizziunali chì voi vulete installà :",
	UnComponentsText: "Selezziunà i cumpunenti chì voi vulete disinstallà è viutà a casella di quelli ch'ellu ùn ci vole à disinstallà. $_CLICK",
	UnComponentsSubText1: "Selezziunà u tipu di disinstallazione :",
	UnComponentsSubText2_NoInstTypes: "Selezziunà i cumpunenti à disinstallà :",
	UnComponentsSubText2: "Osinnò, selezziunà i cumpunenti addizziunali chì voi vulete disinstallà :",
	DirText: "L'Assistente hà da installà $(^NameDA) in quessu cartulare. Per installà in un altru cartulare, sceglie Sfuglià è selezziunà un altru cartulare. $_CLICK",
	DirSubText: "Cartulare di Destinazione",
	DirBrowseText: "Selezziunà u cartulare d'installazione di $(^NameDA) :",
	UnDirText: "L'Assistente hà da disinstallà $(^NameDA) da quessu cartulare. Per disinstallà da un altru cartulare, sceglie Sfuglià è selezziunà un altru cartulare. $_CLICK",
	UnDirSubText: "Cartulare d'Installazione",
	UnDirBrowseText: "Selezziunà u cartulare di disinstallazione di $(^NameDA) :",
	SpaceAvailable: "Spaziu dispunibule : ",
	SpaceRequired: "Spaziu richiestu : ",
	UninstallingText: "$(^NameDA) serà disinstallatu da quessu cartulare. $_CLICK",
	UninstallingSubText: "Disinstallazione da :",
	FileError: "Sbagliu durante l'accessu in scrittura di u schedariu : \\r\\n\\r\\n$0\\r\\n\\r\\nSceglie Interrompe per piantà l'installazione,\\r\\nTorna per pruvà torna, o\\r\\nIgnurà per ignurà u schedariu.",
	FileError_NoIgnore: "Sbagliu durante l'accessu in scrittura di u schedariu : \\r\\n\\r\\n$0\\r\\n\\r\\nSceglie Torna per pruvà torna, o\\r\\nAbbandunà per piantà l'installazione.",
	CantWrite: "Ùn pò micca scrive : ",
	CopyFailed: "Fiascu di copia",
	CopyTo: "Cupià ver di ",
	Registering: "Arregistramentu : ",
	Unregistering: "Disarregistramentu : ",
	SymbolNotFound: "Ùn pò micca truvà di simbolu : ",
	CouldNotLoad: "Ùn pò micca caricà : ",
	CreateFolder: "Creazione di u cartulare : ",
	CreateShortcut: "Creazione di l'accurtatoghju : ",
	CreatedUninstaller: "Assistente di disinstallazione creatu : ",
	Delete: "Squassatura di schedariu : ",
	DeleteOnReboot: "Squassatura à l'avviu di l'urdinatore : ",
	ErrorCreatingShortcut: "Sbagliu durante a creazione di l'accurtatoghju : ",
	ErrorCreating: "Sbagliu durante a creazione di : ",
	ErrorDecompressing: "Sbagliu durante a scumprezzione di dati : Stalladore alteratu ?",
	ErrorRegistering: "Sbagliu durante l'arregistramentu di DLL",
	ExecShell: "ExecShell : ",
	Exec: "Eseguisce : ",
	Extract: "Estrae : ",
	ErrorWriting: "Estrae : sbagliu di scrittura ver di u schedariu ",
	InvalidOpcode: "Stalladore alteratu : opcode micca accettevule",
	NoOLE: "Alcunu OLE per : ",
	OutputFolder: "Cartulare di destinazione : ",
	RemoveFolder: "Caccià u cartulare : ",
	RenameOnReboot: "Rinumà à l'avviu di l'urdinatore : ",
	Rename: "Rinumà : ",
	Skipped: "Tralasciatu : ",
	CopyDetails: "Cupià i Ditaglii ver di u Preme'Papei",
	LogInstall: "Arregistrà u ghjurnale d'installazione",
	Byte: "o",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Corsican$1 = {
	header: header$b,
	id: id$b,
	font: font$b,
	code_page: code_page$b,
	rtl: rtl$b,
	strings: strings$b
};

var header$c = "NLF v6";
var id$c = 1050;
var font$c = {
	name: null,
	size: null
};
var code_page$c = 1250;
var rtl$c = false;
var strings$c = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Instalacija programa $(^Name)",
	UninstallCaption: "Uklanjanje programa $(^Name)",
	LicenseSubCaption: ": Uvjeti Ugovora o licenci",
	ComponentsSubCaption: ": Instalacijske opcije",
	DirSubCaption: ": Instalacijska mapa",
	InstallingSubCaption: ": Instaliranje",
	CompletedSubCaption: ": Završeno",
	UnComponentsSubCaption: ": Opcije uklanjanja",
	UnDirSubCaption: ": Mapa uklanjanja",
	ConfirmSubCaption: ": Potvrda",
	UninstallingSubCaption: ": Uklanjanje",
	UnCompletedSubCaption: ": Završeno",
	BackBtn: "< &Natrag",
	NextBtn: "&Dalje >",
	AgreeBtn: "&Prihvaćam",
	AcceptBtn: "&Prihvaćam uvjete Ugovora o licenci",
	DontAcceptBtn: "&Ne prihvaćam uvjete Ugovora o licenci",
	InstallBtn: "&Instaliraj",
	UninstallBtn: "&Ukloni",
	CancelBtn: "Odustani",
	CloseBtn: "&Zatvori",
	BrowseBtn: "&Pregledaj...",
	ShowDetailsBtn: "Prikaži &detalje",
	ClickNext: "Za nastavak odaberite 'Dalje'.",
	ClickInstall: "Za početak instalacije odaberite 'Instaliraj'.",
	ClickUninstall: "Za početak uklanjanja odaberite 'Ukloni'.",
	Name: "Ime",
	Completed: "Završeno",
	LicenseText: "Pročitajte licencu prije instalacije programa $(^NameDA). Ukoliko prihvaćate sve uvjete ugovora, odaberite 'Prihvaćam'.",
	LicenseTextCB: "Pročitajte licencu prije instalacije programa $(^NameDA). Ukoliko prihvaćate sve uvjete ugovora, označite donji kvadratić. $_CLICK",
	LicenseTextRB: "Pročitajte licencu prije instalacije programa $(^NameDA). Ukoliko prihvaćate sve uvjete ugovora, odaberite prvu donju opciju. $_CLICK",
	UnLicenseText: "Pročitajte licencu prije uklanjanja programa $(^NameDA). Ukoliko prihvaćate sve uvjete ugovora, odaberite 'Prihvaćam'.",
	UnLicenseTextCB: "Pročitajte licencu prije uklanjanja programa $(^NameDA). Ukoliko prihvaćate sve uvjete ugovora, označite donji kvadratić. $_CLICK",
	UnLicenseTextRB: "Pročitajte licencu prije uklanjanja programa $(^NameDA). Ukoliko prihvaćate sve uvjete ugovora, odaberite prvu donju opciju. $_CLICK",
	Custom: "Posebna",
	ComponentsText: "Označite komponente koje želite instalirati i uklonite oznaku s onih koje ne želite instalirati. $_CLICK",
	ComponentsSubText1: "Izaberite tip instalacije:",
	ComponentsSubText2_NoInstTypes: "Odaberite komponente za instalaciju:",
	ComponentsSubText2: "Ili po izboru označite komponente koje želite instalirati:",
	UnComponentsText: "Označite komponente koje želite ukloniti i uklonite oznaku s onih koje ne želite ukloniti. $_CLICK",
	UnComponentsSubText1: "Izaberite tip uklanjanja:",
	UnComponentsSubText2_NoInstTypes: "Odaberite komponente za uklanjanje:",
	UnComponentsSubText2: "Ili po izboru označite komponente koje želite ukloniti:",
	DirText: "Program $(^NameDA) bit će instaliran u sljedeću mapu. Ako želite promijeniti odredište, pritisnite dugme za traženje mape i označite drugu mapu. $_CLICK",
	DirSubText: "Odredišna mapa",
	DirBrowseText: "Odaberite mapu u koju želite instalirati program $(^NameDA):",
	UnDirText: "Program $(^NameDA) bit će uklonjen iz sljedeće mape. Za uklanjanje s drugog mjesta odaberite 'Pregledaj' i označite drugu mapu. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Mapa iz koje će program $(^NameDA) biti uklonjen:",
	SpaceAvailable: "\"Slobodno prostora na disku: \"",
	SpaceRequired: "\"Potrebno prostora na disku: \"",
	UninstallingText: "Program $(^NameDA) bit će uklonjen iz sljedeće mape. $_CLICK",
	UninstallingSubText: "Uklanjam iz:",
	FileError: "Greška prilikom otvaranja datoteke za zapisivanje: \\r\\n\\r\\n$0\\r\\n\\r\\nPritisnite \"Abort\" ako želite prekinuti instalaciju,\\r\\n\"Retry\" ako želite pokušati ponovno, ili\\r\\n\"Ignore\" ako želite zanemariti tu datoteku",
	FileError_NoIgnore: "Greška prilikom otvaranja datoteke za zapisivanje: \\r\\n\\r\\n$0\\r\\n\\r\\nPritisnite \"Retry\" za ponovni pokušaj zapisivanja, ili\\r\\n\"Cancel\" za prekid instalacije",
	CantWrite: "\"Ne mogu zapisati: \"",
	CopyFailed: "Greška prilikom kopiranja",
	CopyTo: "\"Kopiraj u \"",
	Registering: "\"Prijava: \"",
	Unregistering: "\"Odjava: \"",
	SymbolNotFound: "\"Ne mogu naći simbol: \"",
	CouldNotLoad: "\"Ne mogu učitati: \"",
	CreateFolder: "\"Stvori mapu: \"",
	CreateShortcut: "\"Stvori prečac: \"",
	CreatedUninstaller: "\"Program za uklanjanje: \"",
	Delete: "\"Izbriši datoteku: \"",
	DeleteOnReboot: "\"Izbriši prilikom ponovnog pokretanja: \"",
	ErrorCreatingShortcut: "\"Greška prilikom stvaranja prečaca: \"",
	ErrorCreating: "\"Greška prilikom stvaranja: \"",
	ErrorDecompressing: "Greška dekompresije podataka! Oštećena instalacijska datoteka?",
	ErrorRegistering: "Greška prilikom prijavljivanja DLL-a",
	ExecShell: "\"ExecShell: \"",
	Exec: "\"Izvrši: \"",
	Extract: "\"Otpakiraj: \"",
	ErrorWriting: "\"Otpakiranje: greška zapisivanja u datoteku \"",
	InvalidOpcode: "Oštećena instalacijska datoteka: neispravan opkod",
	NoOLE: "\"Nema OLE za: \"",
	OutputFolder: "\"Izlazna mapa: \"",
	RemoveFolder: "\"Izbriši mapu: \"",
	RenameOnReboot: "\"Preimenuj prilikom ponovnog pokretanja: \"",
	Rename: "\"Preimenuj: \"",
	Skipped: "\"Preskočeno: \"",
	CopyDetails: "Kopiraj detalje u međuspremnik",
	LogInstall: "Logiraj instalacijski proces",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Croatian$1 = {
	header: header$c,
	id: id$c,
	font: font$c,
	code_page: code_page$c,
	rtl: rtl$c,
	strings: strings$c
};

var header$d = "NLF v6";
var id$d = 1029;
var font$d = {
	name: null,
	size: null
};
var code_page$d = 1250;
var rtl$d = false;
var strings$d = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Instalace $(^Name)",
	UninstallCaption: "Odinstalace $(^Name)",
	LicenseSubCaption: ": Licenční smlouva",
	ComponentsSubCaption: ": Možnosti instalace",
	DirSubCaption: ": Instalační složka",
	InstallingSubCaption: ": Instalace",
	CompletedSubCaption: ": Dokončeno",
	UnComponentsSubCaption: ": Možnosti odinstalace",
	UnDirSubCaption: ": Odinstalační složka",
	ConfirmSubCaption: ": Potvrzení",
	UninstallingSubCaption: ": Odinstalace",
	UnCompletedSubCaption: ": Dokončeno",
	BackBtn: "< &Zpět",
	NextBtn: "&Další >",
	AgreeBtn: "Souhl&asím",
	AcceptBtn: "Souhl&asím s podmínkami licenční smlouvy",
	DontAcceptBtn: "&Nesouhlasím s podmínkami licenční smlouvy",
	InstallBtn: "&Instalovat",
	UninstallBtn: "&Odinstalovat",
	CancelBtn: "Storno",
	CloseBtn: "&Zavřít",
	BrowseBtn: "P&rocházet...",
	ShowDetailsBtn: "&Podrobnosti",
	ClickNext: "Pokračujte kliknutím na tlačítko Další.",
	ClickInstall: "Instalaci spustíte kliknutím na tlačítko Instalovat.",
	ClickUninstall: "Odinstalaci spustíte kliknutím na tlačítko Odinstalovat.",
	Name: "Název",
	Completed: "Dokončeno",
	LicenseText: "Před instalací programu $(^NameDA) si prosím přečtěte licenční smlouvu. Jestliže souhlasíte s podmínkami této smlouvy, klikněte na tlačítko Souhlasím.",
	LicenseTextCB: "Před instalací programu $(^NameDA) si prosím přečtěte licenční smlouvu. Jestliže souhlasíte s podmínkami této smlouvy, zaškrtněte políčko níže. $_CLICK",
	LicenseTextRB: "Před instalací programu $(^NameDA) si prosím přečtěte licenční smlouvu. Jestliže souhlasíte s podmínkami této smlouvy, vyberte níže první možnost. $_CLICK",
	UnLicenseText: "Před odinstalací programu $(^NameDA) si prosím přečtěte licenční smlouvu. Jestliže souhlasíte s podmínkami této smlouvy, klikněte na tlačítko Souhlasím.",
	UnLicenseTextCB: "Před odinstalací programu $(^NameDA) si prosím přečtěte licenční smlouvu. Jestliže souhlasíte s podmínkami této smlouvy, zaškrtněte políčko níže. $_CLICK",
	UnLicenseTextRB: "Před odinstalací programu $(^NameDA) si prosím přečtěte licenční smlouvu. Jestliže souhlasíte s podmínkami této smlouvy, vyberte níže první možnost. $_CLICK",
	Custom: "Vlastní",
	ComponentsText: "Zaškrtněte součásti, které chcete nainstalovat a zrušte zaškrtnutí součástí, které nechcete nainstalovat. $_CLICK",
	ComponentsSubText1: "Zvolte způsob instalace:",
	ComponentsSubText2_NoInstTypes: "Vyberte součásti, které chcete nainstalovat.",
	ComponentsSubText2: "Nebo vyberte volitelné součásti, které chcete nainstalovat.",
	UnComponentsText: "Zaškrtněte součásti, které chcete odinstalovat a zrušte zaškrtnutí součástí, které nechcete odinstalovat. $_CLICK",
	UnComponentsSubText1: "Zvolte způsob odinstalace:",
	UnComponentsSubText2_NoInstTypes: "Vyberte součásti, které chcete odinstalovat.",
	UnComponentsSubText2: "Nebo vyberte volitelné součásti, které chcete odinstalovat.",
	DirText: "Instalační program nainstaluje program $(^NameDA) do následující složky. Chcete-li instalovat do jiné složky, klikněte na tlačítko Procházet a vyberte jinou složku. $_CLICK",
	DirSubText: "Cílová složka",
	DirBrowseText: "Výběr instalační složky programu $(^NameDA).",
	UnDirText: "Odinstalační program odinstaluje program $(^NameDA) z následující složky. Chcete-li odinstalovat z jiné složky, klikněte na tlačítko Procházet a vyberte jinou složku. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Vyberte odinstalační složku programu $(^NameDA):",
	SpaceAvailable: "\"Volné místo: \"",
	SpaceRequired: "\"Požadované místo: \"",
	UninstallingText: "Program $(^NameDA) bude odinstalován z následující složky. $_CLICK",
	UninstallingSubText: "Odinstalovat z:",
	FileError: "Soubor nelze otevřít pro zápis: \\r\\n\\t\"$0\"\\r\\nKlikněte na tlačítko Přerušit k ukončení instalace,\\r\\nnebo na tlačítko Opakovat k zopakování akce, nebo\\r\\n na tlačítko Ignorovat k přeskočení souboru.",
	FileError_NoIgnore: "Soubor nelze otevřít pro zápis: \\r\\n\\t\"$0\"\\r\\nKlikněte na tlačítko Opakovat k zopakování akce, nebo\\r\\n na tlačítko Storno k ukončení instalace.",
	CantWrite: "\"Nelze zapsat: \"",
	CopyFailed: "Kopírování se nezdařilo.",
	CopyTo: "\"Kopírování do \"",
	Registering: "\"Registrace: \"",
	Unregistering: "\"Rušení registrace: \"",
	SymbolNotFound: "\"Nelze najít symbol: \"",
	CouldNotLoad: "\"Nelze načíst: \"",
	CreateFolder: "\"Vytváření složky: \"",
	CreateShortcut: "\"Vytváření zástupce: \"",
	CreatedUninstaller: "\"Vytváření odinstalačního programu: \"",
	Delete: "\"Odstraňování souboru: \"",
	DeleteOnReboot: "\"Odstranit při restartování: \"",
	ErrorCreatingShortcut: "\"Při vytváření zástupce došlo k chybě: \"",
	ErrorCreating: "\"Při vytváření došlo k chybě: \"",
	ErrorDecompressing: "Při dekompresi dat došlo k chybě. Byl poškozen instalační program?",
	ErrorRegistering: "Při registraci souborů DLL došlo k chybě.",
	ExecShell: "\"Spouštění prostředí: \"",
	Exec: "\"Spouštění: \"",
	Extract: "\"Extrahování: \"",
	ErrorWriting: "\"Extrakce: Při zápisu souboru došlo k chybě \"",
	InvalidOpcode: "Instalační program byl poškozen: neplatný operační kód.",
	NoOLE: "\"Nedostupné OLE pro: \"",
	OutputFolder: "\"Výstupní složka: \"",
	RemoveFolder: "\"Odstraňování složky: \"",
	RenameOnReboot: "\"Přejmenovat při restartování: \"",
	Rename: "\"Přejmenováno: \"",
	Skipped: "\"Přeskočeno: \"",
	CopyDetails: "Zkopírovat podrobnosti do schránky",
	LogInstall: "Protokolovat proces instalace",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Czech$1 = {
	header: header$d,
	id: id$d,
	font: font$d,
	code_page: code_page$d,
	rtl: rtl$d,
	strings: strings$d
};

var header$e = "NLF v6";
var id$e = 1030;
var font$e = {
	name: null,
	size: null
};
var code_page$e = 1252;
var rtl$e = false;
var strings$e = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "$(^Name) Installation",
	UninstallCaption: "$(^Name) Afinstallation",
	LicenseSubCaption: ": Licensaftale",
	ComponentsSubCaption: ": Installationsvalgmuligheder",
	DirSubCaption: ": Installationsmappe",
	InstallingSubCaption: ": Installerer",
	CompletedSubCaption: ": Gennemført",
	UnComponentsSubCaption: ": Afinstallationsvalgmuligheder",
	UnDirSubCaption: ": Afinstallationsmappe",
	ConfirmSubCaption: ": Bekræft",
	UninstallingSubCaption: ": Afinstallerer",
	UnCompletedSubCaption: ": Gennemført",
	BackBtn: "< &Tilbage",
	NextBtn: "&Næste >",
	AgreeBtn: "Jeg &accepterer",
	AcceptBtn: "Jeg &accepterer vilkårene i licensaftalen",
	DontAcceptBtn: "Jeg &accepterer ikke vilkårene i licensaftalen",
	InstallBtn: "&Installer",
	UninstallBtn: "&Afinstaller",
	CancelBtn: "Annuller",
	CloseBtn: "&Luk",
	BrowseBtn: "G&ennemse...",
	ShowDetailsBtn: "Vis &detaljer",
	ClickNext: "Tryk på Næste for at fortsætte.",
	ClickInstall: "Tryk på Installer for at starte installationen.",
	ClickUninstall: "Tryk på Afinstaller for at starte afinstallationen.",
	Name: "Navn",
	Completed: "Gennemført",
	LicenseText: "Gennemlæs venligst licensaftalen før installationen af $(^NameDA). Hvis du accepterer alle vilkår i aftalen, skal du klikke på Jeg accepterer.",
	LicenseTextCB: "Gennemlæs venligst licensaftalen før installationen af $(^NameDA). Hvis du accepterer alle vilkår i aftalen, skal du klikke på afkrydsningsfeltet nedenfor. $_CLICK",
	LicenseTextRB: "Gennemlæs venligst licensaftalen før installationen af $(^NameDA). Hvis du accepterer alle vilkår i aftalen, skal du vælge den første valgmulighed nedenfor. $_CLICK",
	UnLicenseText: "Gennemlæs venligst licensaftalen før afinstallationen af $(^NameDA). Hvis du accepterer alle vilkår i aftalen, skal du trykke på Jeg accepterer.",
	UnLicenseTextCB: "Gennemlæs venligst licensaftalen før afinstallationen af $(^NameDA). Hvis du accepterer alle vilkår i aftalen, skal du klikke på afkrydsningsfeltet nedenfor. $_CLICK",
	UnLicenseTextRB: "Gennemlæs venligst licensaftalen før afinstallationen af $(^NameDA). Hvis du accepterer alle vilkår i aftalen, skal du vælge den første valgmulighed nedenfor. $_CLICK",
	Custom: "Brugerdefineret",
	ComponentsText: "Tilvælg de komponenter du vil installere, og fravælg de komponenter du ikke vil installere. $_CLICK",
	ComponentsSubText1: "Vælg installationstype:",
	ComponentsSubText2_NoInstTypes: "Vælg de komponenter der skal installeres:",
	ComponentsSubText2: "Eller vælg de valgfrie komponenter du ønsker at installere:",
	UnComponentsText: "Tilvælg de komponenter du vil afinstallere, og fravælg de komponenter du ikke vil afinstallere. $_CLICK",
	UnComponentsSubText1: "Vælg afinstallationstype:",
	UnComponentsSubText2_NoInstTypes: "Vælg de komponenter der skal afinstalleres:",
	UnComponentsSubText2: "Eller vælg de valgfrie komponenter du ønsker at afinstallere:",
	DirText: "Installationsguiden vil installere $(^NameDA) i følgende mappe. For at installere i en anden mappe, tryk på Gennemse og vælg en anden mappe. $_CLICK",
	DirSubText: "Destinationsmappe",
	DirBrowseText: "Vælg den mappe hvori $(^NameDA) skal installeres:",
	UnDirText: "Installationsguiden vil afinstallere $(^NameDA) fra følgende mappe. For at afinstallere fra en anden mappe, tryk på Gennemse og vælg en anden mappe. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Vælg den mappe hvorfra $(^NameDA) skal afinstalleres:",
	SpaceAvailable: "\"Ledig plads: \"",
	SpaceRequired: "\"Nødvendig plads: \"",
	UninstallingText: "$(^NameDA) vil blive afinstalleret fra følgende mappe. $_CLICK",
	UninstallingSubText: "Afinstallerer fra:",
	FileError: "Fejl ved skrivning af fil til skrivning: \\r\\n\\r\\n$0\\r\\n\\r\\nTryk på Annuller for at stoppe installationen,\\r\\nPrøv igen for at prøve igen, eller\\r\\nIgnorer for at springe over denne fil.",
	FileError_NoIgnore: "Fejl ved åbning af fil til skrivning: \\r\\n\\r\\n$0\\r\\n\\r\\nTryk på Prøv igen for at prøve igen, eller\\r\\nAnnuller for at stoppe installationen.",
	CantWrite: "\"Kan ikke skrive: \"",
	CopyFailed: "Kopiering mislykkedes",
	CopyTo: "\"Kopier til \"",
	Registering: "\"Registrerer: \"",
	Unregistering: "\"Afregisterer: \"",
	SymbolNotFound: "\"Kunne ikke finde symbol: \"",
	CouldNotLoad: "\"Kunne ikke indlæse: \"",
	CreateFolder: "\"Opret mappe: \"",
	CreateShortcut: "\"Opret genvej: \"",
	CreatedUninstaller: "\"Afinstallationsguide oprettet: \"",
	Delete: "\"Slet fil: \"",
	DeleteOnReboot: "\"Slet ved genstart: \"",
	ErrorCreatingShortcut: "\"Fejl ved oprettelse af genvej: \"",
	ErrorCreating: "\"Fejl ved oprettelse: \"",
	ErrorDecompressing: "Fejl ved udpakning af data! Beskadiget installationsguide?",
	ErrorRegistering: "Fejl ved registrering af DLL",
	ExecShell: "\"ExecShell: \"",
	Exec: "\"Kør: \"",
	Extract: "\"Udpak: \"",
	ErrorWriting: "\"Udpak: fejl ved skrivning til fil \"",
	InvalidOpcode: "Beskadiget installationsguide: ugyldig opcode",
	NoOLE: "\"Ingen OLE for: \"",
	OutputFolder: "\"Outputmappe: \"",
	RemoveFolder: "\"Slet mappe: \"",
	RenameOnReboot: "\"Omdøb ved genstart: \"",
	Rename: "\"Omdøb: \"",
	Skipped: "\"Sprunget over: \"",
	CopyDetails: "Kopier detaljer til udklipsholderen",
	LogInstall: "Log installationsproces",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Danish$1 = {
	header: header$e,
	id: id$e,
	font: font$e,
	code_page: code_page$e,
	rtl: rtl$e,
	strings: strings$e
};

var header$f = "NLF v6";
var id$f = 1043;
var font$f = {
	name: null,
	size: null
};
var code_page$f = 1252;
var rtl$f = false;
var strings$f = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "$(^Name)-installatie",
	UninstallCaption: "$(^Name)-deïnstallatie",
	LicenseSubCaption: ": Licentieovereenkomst",
	ComponentsSubCaption: ": Installatieopties",
	DirSubCaption: ": Installatiemap",
	InstallingSubCaption: ": Bezig met installeren",
	CompletedSubCaption: ": Voltooid",
	UnComponentsSubCaption: ": Verwijderingsopties",
	UnDirSubCaption: ": Te verwijderen map",
	ConfirmSubCaption: ": Bevestiging",
	UninstallingSubCaption: ": Bezig met verwijderen",
	UnCompletedSubCaption: ": Voltooid",
	BackBtn: "< V&orige",
	NextBtn: "&Volgende >",
	AgreeBtn: "&Akkoord",
	AcceptBtn: "Ik &accepteer de overeenkomst",
	DontAcceptBtn: "Ik accepteer de overeenkomst &niet",
	InstallBtn: "&Installeren",
	UninstallBtn: "&Verwijderen",
	CancelBtn: "Annuleren",
	CloseBtn: "&Afsluiten",
	BrowseBtn: "&Bladeren...",
	ShowDetailsBtn: "&Details tonen",
	ClickNext: "Klik op Volgende om verder te gaan.",
	ClickInstall: "Klik op Installeren om de installatie te beginnen.",
	ClickUninstall: "Klik op Verwijderen om de deïnstallatie te beginnen.",
	Name: "Naam",
	Completed: "Voltooid",
	LicenseText: "Lees de licentieovereenkomst voordat u $(^NameDA) installeert. Klik op Akkoord als u de overeenkomst accepteert.",
	LicenseTextCB: "Lees de licentieovereenkomst voordat u $(^NameDA) installeert. Schakel het selectievakje hieronder in als u de overeenkomst accepteert. $_CLICK",
	LicenseTextRB: "Lees de licentieovereenkomst voordat u $(^NameDA) installeert. Selecteer de eerste optie hieronder als u de overeenkomst accepteert. $_CLICK",
	UnLicenseText: "Lees de licentieovereenkomst voordat u $(^NameDA) verwijdert. Klik op Akkoord als u de overeenkomst accepteert.",
	UnLicenseTextCB: "Lees de licentieovereenkomst voordat u $(^NameDA) verwijdert. Schakel het selectievakje hieronder in als u de overeenkomst accepteert. $_CLICK",
	UnLicenseTextRB: "Lees de licentieovereenkomst voordat u $(^NameDA) verwijdert. Selecteer de eerste optie hieronder als u de overeenkomst accepteert. $_CLICK",
	Custom: "Aangepast",
	ComponentsText: "Selecteer de onderdelen die u wilt installeren en deselecteer welke u niet wilt installeren. $_CLICK",
	ComponentsSubText1: "Selecteer het installatietype:",
	ComponentsSubText2_NoInstTypes: "Selecteer de onderdelen die moeten worden geïnstalleerd:",
	ComponentsSubText2: "Of selecteer de optionele onderdelen die moeten worden geïnstalleerd:",
	UnComponentsText: "Selecteer de onderdelen die u wilt verwijderen en deselecteer welke u niet wilt verwijderen. $_CLICK",
	UnComponentsSubText1: "Selecteer het type verwijdering:",
	UnComponentsSubText2_NoInstTypes: "Selecteer de onderdelen die moeten worden verwijderd:",
	UnComponentsSubText2: "Of selecteer de optionele onderdelen die moeten worden verwijderd:",
	DirText: "Setup zal $(^NameDA) in de volgende map installeren. Klik op Bladeren als u $(^NameDA) in een andere map wilt installeren en selecteer deze. $_CLICK",
	DirSubText: "Installatiemap",
	DirBrowseText: "Selecteer de map om $(^NameDA) in te installeren:",
	UnDirText: "Setup zal $(^NameDA) uit de volgende map verwijderen. Klik op Bladeren als u $(^NameDA) uit een andere map wilt verwijderen en selecteer deze. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Selecteer de map om $(^NameDA) uit te verwijderen:",
	SpaceAvailable: "\"Beschikbare ruimte: \"",
	SpaceRequired: "\"Vereiste ruimte: \"",
	UninstallingText: "$(^NameDA) zal uit de volgende map worden verwijderd. $_CLICK",
	UninstallingSubText: "Verwijderen uit:",
	FileError: "Fout bij het schrijven naar bestand: \\r\\n\\r\\n$0\\r\\n\\r\\nKlik op Afbreken om de installatie te stoppen,\\r\\nOpnieuw om het opnieuw te proberen of\\r\\nNegeren om dit bestand over te slaan.",
	FileError_NoIgnore: "Fout bij het schrijven naar bestand: \\r\\n\\r\\n$0\\r\\n\\r\\nKlik op Opnieuw om het opnieuw te proberen of \\r\\nAnnuleren om de installatie te stoppen.",
	CantWrite: "\"Kon niet schrijven: \"",
	CopyFailed: "Kopiëren mislukt",
	CopyTo: "\"Kopiëren naar \"",
	Registering: "\"Registreren: \"",
	Unregistering: "\"Deregistreren: \"",
	SymbolNotFound: "\"Kon symbool niet vinden: \"",
	CouldNotLoad: "\"Kon niet laden: \"",
	CreateFolder: "\"Map maken: \"",
	CreateShortcut: "\"Snelkoppeling maken: \"",
	CreatedUninstaller: "\"Deïnstallatieprogramma gemaakt: \"",
	Delete: "\"Bestand verwijderen: \"",
	DeleteOnReboot: "\"Verwijderen na opnieuw opstarten: \"",
	ErrorCreatingShortcut: "\"Fout bij maken snelkoppeling: \"",
	ErrorCreating: "\"Fout bij maken: \"",
	ErrorDecompressing: "Fout bij uitpakken van gegevens! Gegevens beschadigd?",
	ErrorRegistering: "Fout bij registreren DLL",
	ExecShell: "\"ExecShell: \"",
	Exec: "\"Uitvoeren: \"",
	Extract: "\"Uitpakken: \"",
	ErrorWriting: "\"Uitpakken: fout bij schrijven naar bestand \"",
	InvalidOpcode: "Installatieprogramma beschadigd: ongeldige opcode",
	NoOLE: "\"Geen OLE voor: \"",
	OutputFolder: "\"Uitvoermap: \"",
	RemoveFolder: "\"Map verwijderen: \"",
	RenameOnReboot: "\"Hernoemen na opnieuw opstarten: \"",
	Rename: "\"Hernoemen: \"",
	Skipped: "\"Overgeslagen: \"",
	CopyDetails: "Details kopiëren naar klembord",
	LogInstall: "Gegevens over installatie bewaren",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Dutch$1 = {
	header: header$f,
	id: id$f,
	font: font$f,
	code_page: code_page$f,
	rtl: rtl$f,
	strings: strings$f
};

var header$g = "NLF v6";
var id$g = 1033;
var font$g = {
	name: null,
	size: null
};
var code_page$g = null;
var rtl$g = false;
var strings$g = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "$(^Name) Setup",
	UninstallCaption: "$(^Name) Uninstall",
	LicenseSubCaption: ": License Agreement",
	ComponentsSubCaption: ": Installation Options",
	DirSubCaption: ": Installation Folder",
	InstallingSubCaption: ": Installing",
	CompletedSubCaption: ": Completed",
	UnComponentsSubCaption: ": Uninstallation Options",
	UnDirSubCaption: ": Uninstallation Folder",
	ConfirmSubCaption: ": Confirmation",
	UninstallingSubCaption: ": Uninstalling",
	UnCompletedSubCaption: ": Completed",
	BackBtn: "< &Back",
	NextBtn: "&Next >",
	AgreeBtn: "I &Agree",
	AcceptBtn: "I &accept the terms of the License Agreement",
	DontAcceptBtn: "I &do not accept the terms of the License Agreement",
	InstallBtn: "&Install",
	UninstallBtn: "&Uninstall",
	CancelBtn: "Cancel",
	CloseBtn: "&Close",
	BrowseBtn: "B&rowse...",
	ShowDetailsBtn: "Show &details",
	ClickNext: "Click Next to continue.",
	ClickInstall: "Click Install to start the installation.",
	ClickUninstall: "Click Uninstall to start the uninstallation.",
	Name: "Name",
	Completed: "Completed",
	LicenseText: "Please review the license agreement before installing $(^NameDA). If you accept all terms of the agreement, click I Agree.",
	LicenseTextCB: "Please review the license agreement before installing $(^NameDA). If you accept all terms of the agreement, click the check box below. $_CLICK",
	LicenseTextRB: "Please review the license agreement before installing $(^NameDA). If you accept all terms of the agreement, select the first option below. $_CLICK",
	UnLicenseText: "Please review the license agreement before uninstalling $(^NameDA). If you accept all terms of the agreement, click I Agree.",
	UnLicenseTextCB: "Please review the license agreement before uninstalling $(^NameDA). If you accept all terms of the agreement, click the check box below. $_CLICK",
	UnLicenseTextRB: "Please review the license agreement before uninstalling $(^NameDA). If you accept all terms of the agreement, select the first option below. $_CLICK",
	Custom: "Custom",
	ComponentsText: "Check the components you want to install and uncheck the components you don't want to install. $_CLICK",
	ComponentsSubText1: "Select the type of install:",
	ComponentsSubText2_NoInstTypes: "Select components to install:",
	ComponentsSubText2: "Or, select the optional components you wish to install:",
	UnComponentsText: "Check the components you want to uninstall and uncheck the components you don't want to uninstall. $_CLICK",
	UnComponentsSubText1: "Select the type of uninstall:",
	UnComponentsSubText2_NoInstTypes: "Select components to uninstall:",
	UnComponentsSubText2: "Or, select the optional components you wish to uninstall:",
	DirText: "Setup will install $(^NameDA) in the following folder. To install in a different folder, click Browse and select another folder. $_CLICK",
	DirSubText: "Destination Folder",
	DirBrowseText: "Select the folder to install $(^NameDA) in:",
	UnDirText: "Setup will uninstall $(^NameDA) from the following folder. To uninstall from a different folder, click Browse and select another folder. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Select the folder to uninstall $(^NameDA) from:",
	SpaceAvailable: "\"Space available: \"",
	SpaceRequired: "\"Space required: \"",
	UninstallingText: "$(^NameDA) will be uninstalled from the following folder. $_CLICK",
	UninstallingSubText: "Uninstalling from:",
	FileError: "Error opening file for writing: \\r\\n\\r\\n$0\\r\\n\\r\\nClick Abort to stop the installation,\\r\\nRetry to try again, or\\r\\nIgnore to skip this file.",
	FileError_NoIgnore: "Error opening file for writing: \\r\\n\\r\\n$0\\r\\n\\r\\nClick Retry to try again, or\\r\\nCancel to stop the installation.",
	CantWrite: "\"Can't write: \"",
	CopyFailed: "Copy failed",
	CopyTo: "\"Copy to \"",
	Registering: "\"Registering: \"",
	Unregistering: "\"Unregistering: \"",
	SymbolNotFound: "\"Could not find symbol: \"",
	CouldNotLoad: "\"Could not load: \"",
	CreateFolder: "\"Create folder: \"",
	CreateShortcut: "\"Create shortcut: \"",
	CreatedUninstaller: "\"Created uninstaller: \"",
	Delete: "\"Delete file: \"",
	DeleteOnReboot: "\"Delete on reboot: \"",
	ErrorCreatingShortcut: "\"Error creating shortcut: \"",
	ErrorCreating: "\"Error creating: \"",
	ErrorDecompressing: "Error decompressing data! Corrupted installer?",
	ErrorRegistering: "Error registering DLL",
	ExecShell: "\"ExecShell: \"",
	Exec: "\"Execute: \"",
	Extract: "\"Extract: \"",
	ErrorWriting: "\"Extract: error writing to file \"",
	InvalidOpcode: "Installer corrupted: invalid opcode",
	NoOLE: "\"No OLE for: \"",
	OutputFolder: "\"Output folder: \"",
	RemoveFolder: "\"Remove folder: \"",
	RenameOnReboot: "\"Rename on reboot: \"",
	Rename: "\"Rename: \"",
	Skipped: "\"Skipped: \"",
	CopyDetails: "Copy Details To Clipboard",
	LogInstall: "Log install process",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var English$1 = {
	header: header$g,
	id: id$g,
	font: font$g,
	code_page: code_page$g,
	rtl: rtl$g,
	strings: strings$g
};

var header$h = "NLF v6";
var id$h = 9998;
var font$h = {
	name: null,
	size: null
};
var code_page$h = null;
var rtl$h = false;
var strings$h = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Instalado de $(^Name)",
	UninstallCaption: "Malinstalado de $(^Name)",
	LicenseSubCaption: ": Permes-Kontrakto",
	ComponentsSubCaption: ": Instaladaj Opcioj",
	DirSubCaption: ": Instalada Dosierujo",
	InstallingSubCaption: ": Oni Instalas Dosierojn",
	CompletedSubCaption: ": Kompletite",
	UnComponentsSubCaption: ": Malinstaladaj Opcioj",
	UnDirSubCaption: ": Malinstalada Dosierujo",
	ConfirmSubCaption: ": Konfirmo",
	UninstallingSubCaption: ": Oni malinstalas",
	UnCompletedSubCaption: ": Kompletite",
	BackBtn: "< &Antauxe",
	NextBtn: "&Sekve >",
	AgreeBtn: "&Akceptite",
	AcceptBtn: "Mi &akceptas la kondicxojn de la Permes-Kontrakto",
	DontAcceptBtn: "Mi &ne akceptas la kondicxojn de la Permes-Kontrakto",
	InstallBtn: "&Instali",
	UninstallBtn: "&Malinstali",
	CancelBtn: "Nuligi",
	CloseBtn: "&Fermi",
	BrowseBtn: "&Sercxi...",
	ShowDetailsBtn: "Vidi &Detalojn",
	ClickNext: "Musklaku en 'Sekve' por dauxrigi.",
	ClickInstall: "Musklaku en 'Instali' por ekigi la instaladon.",
	ClickUninstall: "Musklaku en 'Malinstali' por ekigi la malinstaladon.",
	Name: "Nomo",
	Completed: "Kompletite",
	LicenseText: "Bonvole revidu la permes-akordon antaux ol instali $(^NameDA). Se vi konsentas kun cxiuj kondicxoj de la permeso, musklaku en 'Akceptite'.",
	LicenseTextCB: "Bonvole revidu la permes-akordon antaux ol instali $(^NameDA). Se vi konsentas kun cxiuj kondicxoj de la permeso, musklaku en la suba elekt-skatolo. $_CLICK",
	LicenseTextRB: "Bonvole revidu la permes-akordon antaux ol instali $(^NameDA). Se vi konsentas kun cxiuj kondicxoj de la permeso, elektu la unuan opcion sube. $_CLICK",
	UnLicenseText: "Bonvole revidu la permes-akordon antaux ol malinstali $(^NameDA). Se vi konsentas kun cxiuj kondicxoj de la permeso, musklaku en 'Akceptite'.",
	UnLicenseTextCB: "Bonvole revidu la permes-akordon antaux ol malinstali $(^NameDA). Se vi konsentas kun cxiuj kondicxoj de la permeso, musklaku en la suba elekt-skatolo. $_CLICK",
	UnLicenseTextRB: "Bonvole revidu la permes-akordon antaux ol malinstali $(^NameDA). Se vi konsentas kun cxiuj kondicxoj de la permeso, elektu la unuan opcion sube. $_CLICK",
	Custom: "Personigite",
	ComponentsText: "Marku la konsisterojn, kiujn vi deziras instali kaj malmarku tiujn, kiujn vi ne deziras instali. $_CLICK",
	ComponentsSubText1: "Elektu la tipon de instalado:",
	ComponentsSubText2_NoInstTypes: "Elektu la konsisterojn por instali:",
	ComponentsSubText2: "Aux, elektu la nedevigajn konsisterojn, kiujn vi deziras instali:",
	UnComponentsText: "Marku la konsisterojn, kiujn vi volas malinstali aux male. $_CLICK ",
	UnComponentsSubText1: "Elektu la tipon de malinstalado:",
	UnComponentsSubText2_NoInstTypes: "Elektu la konsisterojn por malinstali:",
	UnComponentsSubText2: "Aux, elektu la nedevigajn konsisterojn, kiujn vi deziras malinstali:",
	DirText: "$(^NameDA) estos instalita en la jena dosierujo. Por instali en alia dosierujo, musklaku en 'Sercxi...' kaj elektu gxin. $_CLICK",
	DirSubText: "Celota Dosierujo",
	DirBrowseText: "Elektu dosierujon por instali $(^NameDA):",
	UnDirText: "$(^NameDA) estos malinstalita el la jena dosierujo. Por malinstali en alia dosierujo, musklaku en 'Sercxi...' kaj elektu gxin. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Elektu dosierujon el kie $(^NameDA) estos malinstalita:",
	SpaceAvailable: "\"Disponebla spaco: \"",
	SpaceRequired: "\"Postulata spaco: \"",
	UninstallingText: "$(^NameDA) estos malinstalita el la jena dosierujo. $_CLICK",
	UninstallingSubText: "Malinstalado el:",
	FileError: "Eraro dum malfermo de dosiero por skribi: \\r\\n\\t\"$0\"\\r\\nMusklaku en Cxesigi por finigi la instaladon,\\r\\Ripeti por provi refoje skribi sur la dosiero, aux\\r\\nPreteratenti por preteratenti tiun cxi dosieron.",
	FileError_NoIgnore: "Eraro dum malfermo de dosierujo por skribi: \\r\\n\\t\"$0\"\\r\\nMusklaku en Ripeti por provi refoje skribi sur la dosiero, aux\\r\\nNuligi por cxesigi la instaladon.",
	CantWrite: "\"Ne eblis skribi: \"",
	CopyFailed: "Malsukceso dum kopio",
	CopyTo: "\"Kopii al \"",
	Registering: "\"Oni registras: \"",
	Unregistering: "\"Oni malregistras: \"",
	SymbolNotFound: "\"Ne trovita simbolo: \"",
	CouldNotLoad: "\"Ne eblis sxargi: \"",
	CreateFolder: "\"Oni kreas subdosierujon: \"",
	CreateShortcut: "\"Oni kreas lancxilon: \"",
	CreatedUninstaller: "\"Oni kreas malinstalilon: \"",
	Delete: "\"Oni forigas dosieron: \"",
	DeleteOnReboot: "\"Forigi je restarto: \"",
	ErrorCreatingShortcut: "\"Eraro dum kreo de lancxilo: \"",
	ErrorCreating: "\"Eraro dum kreo: \"",
	ErrorDecompressing: "Eraro dum malkompaktigo de datumaro! Cxu misrompita instalilo?",
	ErrorRegistering: "Eraru dum registro de DLL",
	ExecShell: "\"ExecShell: \"",
	Exec: "\"Lancxi: \"",
	Extract: "\"Eltiri: \"",
	ErrorWriting: "\"Eltirado: eraro dum skribo de dosiero \"",
	InvalidOpcode: "Misrompita instalilo: malvalida operaci-kodo",
	NoOLE: "\"Sen OLE por: \"",
	OutputFolder: "\"Celota dosierujo: \"",
	RemoveFolder: "\"Oni forigas la dosierujon: \"",
	RenameOnReboot: "\"Renomigi je restarto: \"",
	Rename: "\"Oni renomigas: \"",
	Skipped: "\"Preterpasita: \"",
	CopyDetails: "Kopii detalojn al la tondejo",
	LogInstall: "Registri instalad-procezo",
	Byte: "B",
	Kilo: " k",
	Mega: " M",
	Giga: " G"
};
var Esperanto$1 = {
	header: header$h,
	id: id$h,
	font: font$h,
	code_page: code_page$h,
	rtl: rtl$h,
	strings: strings$h
};

var header$i = "NLF v6";
var id$i = 1061;
var font$i = {
	name: null,
	size: null
};
var code_page$i = 1257;
var rtl$i = false;
var strings$i = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "$(^Name) Paigaldamine",
	UninstallCaption: "$(^Name) Eemaldamine",
	LicenseSubCaption: ": Litsentsileping",
	ComponentsSubCaption: ": Paigaldusvalikud",
	DirSubCaption: ": Paigalduskaust",
	InstallingSubCaption: ": Paigaldan\t\t\t",
	CompletedSubCaption: ": Valmis",
	UnComponentsSubCaption: ": Eemaldusvalikud",
	UnDirSubCaption: ": Eemalduskaust",
	ConfirmSubCaption: ": Kinnitus",
	UninstallingSubCaption: ": Eemaldan",
	UnCompletedSubCaption: ": Valmis",
	BackBtn: "< Tagasi",
	NextBtn: "Edasi >",
	AgreeBtn: "Nõustun",
	AcceptBtn: "Nõustun litsentsilepingu tingimustega",
	DontAcceptBtn: "Ei nõustu litsentsilepingu tingimustega",
	InstallBtn: "Paigalda",
	UninstallBtn: "Eemalda",
	CancelBtn: "Loobu",
	CloseBtn: "Sule",
	BrowseBtn: "Sirvi...",
	ShowDetailsBtn: "Detailid",
	ClickNext: "Jätkamiseks vajuta Edasi.",
	ClickInstall: "Paigaldamise alustamiseks vajuta Paigalda.",
	ClickUninstall: "Eemaldamise alustamiseks vajuta Eemalda.",
	Name: "Nimi",
	Completed: "Valmis",
	LicenseText: "Enne $(^NameDA) paigaldamist vaata palun litsentsileping üle. Kui sa nõustud kõigi lepingu tingimustega, vajuta Nõustun.",
	LicenseTextCB: "Enne $(^NameDA) paigaldamist vaata palun litsentsileping üle. Kui sa nõustud kõigi lepingu tingimustega, vali allolev märkeruut. $_CLICK",
	LicenseTextRB: "Enne $(^NameDA) paigaldamist vaata palun litsentsileping üle. Kui sa nõustud kõigi lepingu tingimustega, märgi allpool esimene valik. $_CLICK",
	UnLicenseText: "Enne $(^NameDA) eemaldamist vaata palun litsentsileping üle. Kui sa nõustud kõigi lepingu tingimustega, vajuta Nõustun.",
	UnLicenseTextCB: "Enne $(^NameDA) eemaldamist vaata palun litsentsileping üle. Kui sa nõustud kõigi lepingu tingimustega, vali allolev märkeruut. $_CLICK",
	UnLicenseTextRB: "Enne $(^NameDA) eemaldamist vaata palun litsentsileping üle. Kui sa nõustud kõigi lepingu tingimustega, märgi allpool esimene valik. $_CLICK",
	Custom: "Kohandatud",
	ComponentsText: "Märgista komponendid mida soovid paigaldada ja eemalda märgistus neilt, mida ei soovi paigaldada. $_CLICK",
	ComponentsSubText1: "Vali paigalduse tüüp:",
	ComponentsSubText2_NoInstTypes: "Vali paigaldatavad komponendid:",
	ComponentsSubText2: "või vali lisakomponendid mida soovid paigaldada:",
	UnComponentsText: "Märgista komponendid mida soovid eemaldada ja eemalda märgistus neilt, mida ei soovi eemaldada. $_CLICK",
	UnComponentsSubText1: "Vali eemalduse tüüp:",
	UnComponentsSubText2_NoInstTypes: "Vali eemaldatavad komponendid:",
	UnComponentsSubText2: "või vali lisakomponendid mida soovid eemaldada:",
	DirText: "$(^NameDA) paigaldatakse järgmisse kausta. Et mujale paigaldada, vajuta sirvi ja vali teine kaust. $_CLICK",
	DirSubText: "Sihtkaust",
	DirBrowseText: "Vali kaust kuhu $(^NameDA) paigaldada:",
	UnDirText: "$(^NameDA) eemaldatakse järgmisest kaustast. Et mujalt eemaldada, vajuta sirvi ja vali teine kaust. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Vali kaust kust $(^NameDA) eemaldada:",
	SpaceAvailable: "\"Vaba ruum: \"",
	SpaceRequired: "\"Vajalik ruum: \"",
	UninstallingText: "$(^NameDA) eemaldatakse järgmisest kaustast. $_CLICK",
	UninstallingSubText: "Eemaldan sealt:",
	FileError: "Tõrge faili avamisel kirjutamiseks: \\r\\n\\t\"$0\"\\r\\nPaigalduse katkestamiseks vajuta Katkesta,\\r\\nvajuta Ürita uuesti, et faili kirjutamist uuesti proovida, või\\r\\nIgnoreeri, et see fail vahele jätta.",
	FileError_NoIgnore: "Tõrge faili avamisel kirjutamiseks: \\r\\n\\t\"$0\"\\r\\nVajuta Ürita uuesti, et faili kirjutamist uuesti proovida, või\\r\\nLoobu, et paigaldamine katkestada",
	CantWrite: "\"Ei saa kirjutada: \"",
	CopyFailed: "Kopeerimine ebaõnnestus",
	CopyTo: "\"Kopeeri sinna \"",
	Registering: "\"Registreerin: \"",
	Unregistering: "\"Deregistreerin: \"",
	SymbolNotFound: "\"Ei leidnud sümbolit: \"",
	CouldNotLoad: "\"Ei saanud laadida: \"",
	CreateFolder: "\"Loo kaust: \"",
	CreateShortcut: "\"Loo otsetee: \"",
	CreatedUninstaller: "\"Loodud eemaldaja: \"",
	Delete: "\"Kustuta fail: \"",
	DeleteOnReboot: "\"Kustuta taaskäivitamisel: \"",
	ErrorCreatingShortcut: "\"Tõrge otsetee loomisel: \"",
	ErrorCreating: "\"Tõrge loomisel: \"",
	ErrorDecompressing: "Tõrge andmete lahtipakkimisel! Vigane paigaldaja?",
	ErrorRegistering: "Tõrge DLL-i registreerimisel",
	ExecShell: "\"ExecShell: \"",
	Exec: "\"Käivita: \"",
	Extract: "\"Paki lahti: \"",
	ErrorWriting: "\"Paki lahti: viga faili kirjutamisel \"",
	InvalidOpcode: "Paigaldaja kõlbmatu: vigane opkood",
	NoOLE: "\"No OLE for: \"",
	OutputFolder: "\"Väljastatav kaust: \"",
	RemoveFolder: "\"Eemalda kaust: \"",
	RenameOnReboot: "\"Taaskäivitusel nimeta ümber: \"",
	Rename: "\"Nimeta ümber: \"",
	Skipped: "\"Vahele jäetud: \"",
	CopyDetails: "Kopeeri detailid lõikelauale",
	LogInstall: "Logi paigaldusprotsess",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Estonian$1 = {
	header: header$i,
	id: id$i,
	font: font$i,
	code_page: code_page$i,
	rtl: rtl$i,
	strings: strings$i
};

var header$j = "NLF v6";
var id$j = 1065;
var font$j = {
	name: null,
	size: null
};
var code_page$j = 1256;
var rtl$j = true;
var strings$j = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "نصب $(^Name) ",
	UninstallCaption: "حذف $(^Name) ",
	LicenseSubCaption: ": مجوز نصب",
	ComponentsSubCaption: ": گزینه‌های نصب",
	DirSubCaption: ": پوشه نصب",
	InstallingSubCaption: ": در حال نصب",
	CompletedSubCaption: ": پایان یافت",
	UnComponentsSubCaption: ": گزینه‌های حذف",
	UnDirSubCaption: ": پوشه‌ی حذف",
	ConfirmSubCaption: ": تأیید",
	UninstallingSubCaption: ": در حال حذف",
	UnCompletedSubCaption: ": پایان یافت",
	BackBtn: "&قبل ",
	NextBtn: "&بعد",
	AgreeBtn: "&موافقم",
	AcceptBtn: "من همه‌ی بندهای مجوز را قبول &دارم",
	DontAcceptBtn: "من بندهای مجوز را قبول &ندارم",
	InstallBtn: "&نصب",
	UninstallBtn: "&حذف",
	CancelBtn: "انصراف",
	CloseBtn: "&بستن",
	BrowseBtn: "&مرور...",
	ShowDetailsBtn: "نمایش جزئیات",
	ClickNext: "برای ادامه روی دکمه‌ی بعد کلیک کنید.",
	ClickInstall: "برای شروع نصب روی دکمه‌ی نصب کلیک کنید.",
	ClickUninstall: "برای شروع حذف روی دکمه‌ی حذف کلیک کنید.",
	Name: "نام",
	Completed: "پایان یافت",
	LicenseText: "لطفاً قبل از نصب $(^NameDA) متن مجوز را بخوانید. اگر همه‌ی بندهای آن را قبول دارید روی دکمه‌ی موافقم کلیک کنید.",
	LicenseTextCB: "لطفاً قبل از نصب $(^NameDA) متن مجوز را بخوانید. اگر همه‌ی بندهای آن را قبول دارید روی جعبه نشانه‌زنی زیر کلیک کنید. $_CLICK",
	LicenseTextRB: "لطفاً قبل از نصب $(^NameDA) متن مجوز را بخوانید. اگر همه‌ی بندهای آن را قبول دارید گزینه‌ی اول را انتخاب کنید. $_CLICK",
	UnLicenseText: "لطفاً قبل از حذف $(^NameDA) متن مجوز را بخوانید. اگر همه‌ی بندهای آن را قبول دارید روی دکمه‌ی موافقم کلیک کنید.",
	UnLicenseTextCB: "لطفاً قبل از حذف $(^NameDA) متن مجوز را بخوانید. اگر همه‌ی بندهای آن را قبول دارید روی جعبه نشانه‌زنی زیر کلیک کنید. $_CLICK",
	UnLicenseTextRB: "لطفاً قبل از حذف $(^NameDA) متن مجوز را بخوانید. اگر همه‌ی بندهای آن را قبول دارید گزینه‌ی اول را انتخاب کنید. $_CLICK",
	Custom: "سفارشی",
	ComponentsText: "کنار بخش‌هایی که می‌خواهید نصب شوند نشانه بزنید و نشانه بخش‌هایی را که نمی‌خواهید نصب شوند بردارید. $_CLICK",
	ComponentsSubText1: "نوع نصب را مشخص کنید: ",
	ComponentsSubText2_NoInstTypes: "بخش‌هایی را که می‌خواهید نصب شوند انتخاب کنید:",
	ComponentsSubText2: "یا، بخش‌های اختیاری را که می‌خواهید نصب شوند انتخاب کنید: ",
	UnComponentsText: "کنار بخش‌هایی که می‌خواهید حذف شوند نشانه بزنید و نشانه بخش‌هایی را که نمی‌خواهید حذف شوند بردارید. $_CLICK",
	UnComponentsSubText1: "نوع حذف را انتخاب کنید: ",
	UnComponentsSubText2_NoInstTypes: "بخش‌هایی را که می‌خواهید حذف شوند انتخاب کنید:",
	UnComponentsSubText2: "یا، بخش‌های اختیاری را که می‌خواهید حذف شوند انتخاب کنید: ",
	DirText: "برنامه نصب، $(^NameDA) را در پوشه‌ی زیر نصب خواهد کرد. برای نصب در پوشه‌ی دیگر روی دکمه مرور کلیک کنید و پوشه‌ی دیگری انتخاب کنید. $_CLICK",
	DirSubText: "پوشه‌ی مقصد",
	DirBrowseText: "انتخاب پوشه برای نصب $(^NameDA):",
	UnDirText: "برنامه نصب، $(^NameDA) را از پوشه‌ی زیر حذف خواهد کرد. برای نصب در پوشه‌ی دیگر روی دکمه مرور کلیک کنید و پوشه‌ی دیگری انتخاب کنید. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "انتخاب پوشه برای حذف $(^NameDA):",
	SpaceAvailable: "\"فضای موجود: \"",
	SpaceRequired: "\"فضای مورد نیاز: \"",
	UninstallingText: "$(^NameDA) از پوشه‌ی زیر حذف خواهد شد. $_CLICK",
	UninstallingSubText: "حذف از: ",
	FileError: "خطا هنگام باز کردن پرونده برای نوشتن: \\r\\n\\r\\n$0\\r\\n\\n برای توقف نصب روی Abort \\r\\n برای تلاش مجدد روی Retry \\r\\n و برای صرف‌نظر از این پرونده روی Ignore کلیک کنید.",
	FileError_NoIgnore: "خطا هنگام باز کردن پرونده برای نوشتن: \\r\\n\\r\\n$0\\r\\n\\nبرای تلاش مجدد روی Retry\\r\\nو برای انصراف روی Cancel کلیک کنید.",
	CantWrite: "\"نوشتن ممکن نیست: \"",
	CopyFailed: "نسخه‌برداری ناموفق بود.",
	CopyTo: "\"نسخه‌برداری در: \"",
	Registering: "\"در حال ثبت: \"",
	Unregistering: "\"در حال حذف ثبت: \"",
	SymbolNotFound: "\"علامت پیدا نشد: \"",
	CouldNotLoad: "\"بارگذاری ممکن نیست: \"",
	CreateFolder: "\"ایجاد پوشه: \"",
	CreateShortcut: "\"ایجاد میان‌بُر: \"",
	CreatedUninstaller: "\"حذف‌کننده ایجاد شد: \"",
	Delete: "\"حذف پرونده: \"",
	DeleteOnReboot: "\"حذف هنگام راه اندازی مجدد: \"",
	ErrorCreatingShortcut: "\"خطا هنگام ایجاد میان‌بُر: \"",
	ErrorCreating: "\"خطا هنگام ایجاد: \"",
	ErrorDecompressing: "خطا هنگام باز کردن اطلاعات! نصب‌کننده خراب است؟",
	ErrorRegistering: "خطا هنگام ثبت DLL",
	ExecShell: "\"پوسته اجرایی: \"",
	Exec: "\"اجرا: \"",
	Extract: "\"استخراج: \"",
	ErrorWriting: "\"استخراج: خطا هنگام نوشتن در پرونده\"",
	InvalidOpcode: "نصب‌کننده خراب است: کد عملیاتی نامعتبر.",
	NoOLE: "\"‏OLE وجود ندارد: \"",
	OutputFolder: "\"پوشه‌ی خروجی: \"",
	RemoveFolder: "\"حذف پوشه: \"",
	RenameOnReboot: "\"تغییر نام هنگام راه اندازی مجدد: \"",
	Rename: "\"تغییر نام: \"",
	Skipped: "\"چشم پوشی شد: \"",
	CopyDetails: "نسخه‌برداری جزئیات در کلیپ‌برد",
	LogInstall: "ثبت روند نصب",
	Byte: " بایت",
	Kilo: " کیلو",
	Mega: " مگا",
	Giga: " گیگا"
};
var Farsi$1 = {
	header: header$j,
	id: id$j,
	font: font$j,
	code_page: code_page$j,
	rtl: rtl$j,
	strings: strings$j
};

var header$k = "NLF v6";
var id$k = 1035;
var font$k = {
	name: null,
	size: null
};
var code_page$k = 1252;
var rtl$k = false;
var strings$k = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "$(^Name) -ohjelman asennus",
	UninstallCaption: "$(^Name) -ohjelman poisto",
	LicenseSubCaption: ": Lisenssisopimus",
	ComponentsSubCaption: ": Asennusvaihtoehdot",
	DirSubCaption: ": Asennuskansio",
	InstallingSubCaption: ": Asennetaan",
	CompletedSubCaption: ": Valmis",
	UnComponentsSubCaption: ": Poistovaihtoehdot",
	UnDirSubCaption: ": Poistokansio",
	ConfirmSubCaption: ": Varmistus",
	UninstallingSubCaption: ": Poistetaan",
	UnCompletedSubCaption: ": Valmis",
	BackBtn: "< &Takaisin",
	NextBtn: "&Seuraava >",
	AgreeBtn: "&Hyväksyn",
	AcceptBtn: "Hyväksyn lisenssisopimuksen ehdot",
	DontAcceptBtn: "En hyväksy sopimuksen ehtoja",
	InstallBtn: "&Asenna",
	UninstallBtn: "&Poista",
	CancelBtn: "Peruuta",
	CloseBtn: "&Sulje",
	BrowseBtn: "S&elaa...",
	ShowDetailsBtn: "&Näytä tiedot",
	ClickNext: "Valitse Seuraava jatkaaksesi.",
	ClickInstall: "Valitse Asenna aloittaaksesi asennuksen.",
	ClickUninstall: "Valitse Poista poistaaksesi asennuksen.",
	Name: "Nimi",
	Completed: "Valmis",
	LicenseText: "Lue lisenssisopimus ennen asentamista. Jos hyväksyt sopimuksen kaikki ehdot, valitse Hyväksyn.",
	LicenseTextCB: "Lue lisenssisopimus ennen asentamista. Jos hyväksyt sopimuksen kaikki ehdot, laita rasti ruutuun. $_CLICK",
	LicenseTextRB: "Lue lisenssisopimus ennen asentamista. Jos hyväksyt sopimuksen kaikki ehdot, valitse ensimmäinen vaihtoehto alapuolelta. $_CLICK",
	UnLicenseText: "Lue lisenssisopimus ennen poistamista. Jos hyväksyt sopimuksen kaikki ehdot, valitse Hyväksyn.",
	UnLicenseTextCB: "Lue lisenssisopimus ennen poistamista. Jos hyväksyt sopimuksen kaikki ehdot, laita rasti ruutuun. $_CLICK",
	UnLicenseTextRB: "Lue lisenssisopimus ennen poistamista. Jos hyväksyt sopimuksen kaikki ehdot, valitse ensimmäinen vaihtoehto alapuolelta. $_CLICK",
	Custom: "Oma",
	ComponentsText: "Valitse komponentit, jotka haluat asentaa, ja poista valinta komponenteista, joita et halua asentaa. $_CLICK",
	ComponentsSubText1: "Valitse asennustyyppi:",
	ComponentsSubText2_NoInstTypes: "Valitse asennettavat komponentit:",
	ComponentsSubText2: "Tai, valitse valinnaiset komponentit, jotka haluat asentaa:",
	UnComponentsText: "Valitse komponentit, jotka haluat poistaa, ja poista valinta komponenteista, joita et haluat poistaa. $_CLICK",
	UnComponentsSubText1: "Valitse poistotyyppi:",
	UnComponentsSubText2_NoInstTypes: "Valitse poistettavat komponentit:",
	UnComponentsSubText2: "Tai, valitse valinnaiset komponentit, jotka haluat poistaa",
	DirText: "$(^NameDA) -ohjelma asennetaan seuraavaan kansioon. Jos haluat asentaa sen johonkin muuhun kansioon, valitse Selaa, ja valitse toinen kansio. $_CLICK",
	DirSubText: "Kohdekansio",
	DirBrowseText: "Valitse kansio, johon haluat asentaa ohjelman $(^NameDA):",
	UnDirText: "Poistetaan ohjelman $(^NameDA) seuraavasta kansiosta. Jos haluat poistaa sen jostakin muusta kansiosta, valitse Selaa, ja valitse toinen kansio. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Valitse kansio, josta haluat poistaa ohjelman $(^NameDA):",
	SpaceAvailable: "\"Tilaa vapaana: \"",
	SpaceRequired: "\"Tarvittava tila: \"",
	UninstallingText: "Tämä ohjelma poistaa ohjelman $(^NameDA) tietokoneelta. $_CLICK",
	UninstallingSubText: "Poistetaan kansiosta:",
	FileError: "Tiedostoon ei voitu kirjoittaa: \\r\\n\\t\"$0\"\\r\\nLopeta asennus valitsemalla Hylkää,\\r\\nyritä uudelleen valitsemalla Uudelleen, tai\\r\\nohita tiedosto valitsemalla Ohita",
	FileError_NoIgnore: "Tiedostoon ei voitu kirjoittaa: \\r\\n\\t\"$0\"\\r\\nYritä uudelleen valitsemalla Uudelleen, tai\\r\\nlopeta asennus valitsemalla Hylkää",
	CantWrite: "\"Ei voi kirjoittaa: \"",
	CopyFailed: "Kopiointi epäonnistui",
	CopyTo: "\"Kopioidaan kohteeseen \"",
	Registering: "\"Rekisteröidään: \"",
	Unregistering: "\"Poistetaan rekisteröinti: \"",
	SymbolNotFound: "\"Symbolia ei löytynyt: \"",
	CouldNotLoad: "\"Ei voitu ladata: \"",
	CreateFolder: "\"Luo kansio: \"",
	CreateShortcut: "\"Luo pikakuvake: \"",
	CreatedUninstaller: "\"Poisto-ohjelma luotiin: \"",
	Delete: "\"Poista: \"",
	DeleteOnReboot: "\"Poista käynnistyksen yhteydessä: \"",
	ErrorCreatingShortcut: "\"Virhe luotaessa pikakuvaketta: \"",
	ErrorCreating: "\"Virhe luotaessa: \"",
	ErrorDecompressing: "Pakettia ei voitu purkaa. Korruptoitunut asennusohjelma?",
	ErrorRegistering: "Virhe rekisteröidessä DLL-tiedostoa",
	ExecShell: "\"ExecShell: \"",
	Exec: "\"Suorita: \"",
	Extract: "\"Pura: \"",
	ErrorWriting: "\"Pura: tiedostoon ei voitu kirjoittaa \"",
	InvalidOpcode: "Asennuspaketti on vioittunut: virheellinen opcode",
	NoOLE: "\"Ei OLEa: \"",
	OutputFolder: "\"Kansio: \"",
	RemoveFolder: "\"Poista kansio: \"",
	RenameOnReboot: "\"Muuta nimi uudelleenkäynnistyksen yhteydessä: \"",
	Rename: "\"Muuta nimi: \"",
	Skipped: "\"Ohitettiin: \"",
	CopyDetails: "Kopioi tiedot leikepöydälle",
	LogInstall: "Tallenna asennusloki",
	Byte: "t",
	Kilo: " k",
	Mega: " M",
	Giga: " G"
};
var Finnish$1 = {
	header: header$k,
	id: id$k,
	font: font$k,
	code_page: code_page$k,
	rtl: rtl$k,
	strings: strings$k
};

var header$l = "NLF v6";
var id$l = 1036;
var font$l = {
	name: null,
	size: null
};
var code_page$l = 1252;
var rtl$l = false;
var strings$l = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Installation de $(^Name)",
	UninstallCaption: "Désinstallation de $(^Name)",
	LicenseSubCaption: ": Licence",
	ComponentsSubCaption: ": Options d'installation",
	DirSubCaption: ": Dossier d'installation",
	InstallingSubCaption: ": Installation des fichiers",
	CompletedSubCaption: ": Terminé",
	UnComponentsSubCaption: ": Options de désinstallation",
	UnDirSubCaption: ": Dossier de désinstallation",
	ConfirmSubCaption: ": Confirmation",
	UninstallingSubCaption: ": Désinstallation des fichiers",
	UnCompletedSubCaption: ": Terminé",
	BackBtn: "< &Précédent",
	NextBtn: "&Suivant >",
	AgreeBtn: "J'a&ccepte",
	AcceptBtn: "J'a&ccepte les termes de la licence",
	DontAcceptBtn: "Je &n'accepte pas les termes de la licence",
	InstallBtn: "&Installer",
	UninstallBtn: "&Désinstaller",
	CancelBtn: "Annuler",
	CloseBtn: "&Fermer",
	BrowseBtn: "P&arcourir...",
	ShowDetailsBtn: "P&lus d'infos",
	ClickNext: "Cliquez sur Suivant pour continuer.",
	ClickInstall: "Cliquez sur Installer pour démarrer l'installation.",
	ClickUninstall: "Cliquez sur Désinstaller pour démarrer la désinstallation.",
	Name: "Nom",
	Completed: "Terminé",
	LicenseText: "Veuillez examiner le contrat de licence avant d'installer $(^NameDA). Si vous acceptez tous les termes du contrat, cliquez sur J'accepte.",
	LicenseTextCB: "Veuillez examiner le contrat de licence avant d'installer $(^NameDA). Si vous acceptez tous les termes du contrat, cochez la boîte de contrôle ci-dessous. $_CLICK",
	LicenseTextRB: "Veuillez examiner le contrat de licence avant d'installer $(^NameDA). Si vous acceptez tous les termes du contrat, sélectionnez la première option ci-dessous. $_CLICK",
	UnLicenseText: "Veuillez examiner le contrat de licence avant de désinstaller $(^NameDA). Si vous acceptez tous les termes du contrat, cliquez sur J'accepte.",
	UnLicenseTextCB: "Veuillez examiner le contrat de licence avant de désinstaller $(^NameDA). Si vous acceptez tous les termes du contrat, cochez la boîte de contrôle ci-dessous. $_CLICK",
	UnLicenseTextRB: "Veuillez examiner le contrat de licence avant de désinstaller $(^NameDA). Si vous acceptez tous les termes du contrat, sélectionnez la première option ci-dessous. $_CLICK",
	Custom: "Personnalisée",
	ComponentsText: "Cochez les composants que vous désirez installer et décochez ceux que vous ne désirez pas installer. $_CLICK",
	ComponentsSubText1: "Type d'installation :",
	ComponentsSubText2_NoInstTypes: "Sélectionnez les composants à installer :",
	ComponentsSubText2: "Ou, sélectionnez les composants optionnels que vous voulez installer :",
	UnComponentsText: "Cochez les composants que vous désirez désinstaller et décochez ceux que vous ne désirez pas désinstaller. $_CLICK",
	UnComponentsSubText1: "Sélectionnez le type de désinstallation :",
	UnComponentsSubText2_NoInstTypes: "Sélectionnez les composants à désinstaller :",
	UnComponentsSubText2: "Ou, sélectionnez les composants optionnels que vous voulez désinstaller :",
	DirText: "Ceci installera $(^NameDA) dans le dossier suivant. Pour installer dans un autre dossier, cliquez sur Parcourir et choisissez un autre dossier. $_CLICK",
	DirSubText: "Dossier d'installation",
	DirBrowseText: "Sélectionnez le dossier d'installation pour $(^NameDA) :",
	UnDirText: "Ceci désinstallera $(^NameDA) du dossier suivant. Pour désinstaller d'un autre dossier, cliquez sur Parcourir et choisissez un autre dossier. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Sélectionnez le dossier de désinstallation pour $(^NameDA) :",
	SpaceAvailable: "\"Espace disponible : \"",
	SpaceRequired: "\"Espace requis : \"",
	UninstallingText: "Ce programme désinstallera $(^NameDA) de votre ordinateur. $_CLICK",
	UninstallingSubText: "Désinstallation à partir de :",
	FileError: "Erreur lors de l'ouverture du fichier en écriture : \\r\\n\\t\"$0\"\\r\\nAppuyez sur Abandonner pour annuler l'installation,\\r\\nRéessayer pour réessayer l'écriture du fichier, ou\\r\\nIgnorer pour passer ce fichier",
	FileError_NoIgnore: "Erreur lors de l'ouverture du fichier en écriture : \\r\\n\\t\"$0\"\\r\\nAppuyez sur Réessayez pour re-écrire le fichier, ou\\r\\nAnnuler pour abandonner l'installation",
	CantWrite: "\"Impossible d'écrire : \"",
	CopyFailed: "Échec de la copie",
	CopyTo: "\"Copier vers \"",
	Registering: "\"Enregistrement : \"",
	Unregistering: "\"Suppression de l'enregistrement : \"",
	SymbolNotFound: "\"Impossible de trouver un symbole : \"",
	CouldNotLoad: "\"Impossible de charger : \"",
	CreateFolder: "\"Création du dossier : \"",
	CreateShortcut: "\"Création du raccourci : \"",
	CreatedUninstaller: "\"Création de la désinstallation : \"",
	Delete: "\"Suppression : \"",
	DeleteOnReboot: "\"Suppression au redémarrage : \"",
	ErrorCreatingShortcut: "\"Erreur lors de la création du raccourci : \"",
	ErrorCreating: "\"Erreur de la création : \"",
	ErrorDecompressing: "Erreur lors de la décompression des données ! Installation corrompue ?",
	ErrorRegistering: "Erreur lors de l'enregistrement de la DLL",
	ExecShell: "\"ExecShell: \"",
	Exec: "\"Exécution : \"",
	Extract: "\"Extraction : \"",
	ErrorWriting: "\"Extraction : erreur d'écriture du fichier \"",
	InvalidOpcode: "Installation corrompue : opcode incorrect",
	NoOLE: "\"Pas de OLE pour : \"",
	OutputFolder: "\"Destination : \"",
	RemoveFolder: "\"Suppression du dossier : \"",
	RenameOnReboot: "\"Renommer au redémarrage : \"",
	Rename: "\"Renommer : \"",
	Skipped: "\"Passé : \"",
	CopyDetails: "Copier les Détails dans le Presse-papier",
	LogInstall: "Enregistrer le déroulement de l'installation",
	Byte: "o",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var French$1 = {
	header: header$l,
	id: id$l,
	font: font$l,
	code_page: code_page$l,
	rtl: rtl$l,
	strings: strings$l
};

var header$m = "NLF v6";
var id$m = 1110;
var font$m = {
	name: null,
	size: null
};
var code_page$m = 1252;
var rtl$m = false;
var strings$m = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Instalación de $(^Name)",
	UninstallCaption: "Desinstalación de $(^Name)",
	LicenseSubCaption: ": Contrato de licenza",
	ComponentsSubCaption: ": Opcións de instalación",
	DirSubCaption: ": Diretória de instalación",
	InstallingSubCaption: ": Instalando ficheiros",
	CompletedSubCaption: ": Concluído",
	UnComponentsSubCaption: ": Opcións de desinstalación",
	UnDirSubCaption: ": Cartafol de desinstalación",
	ConfirmSubCaption: ": Confirmación",
	UninstallingSubCaption: ": Desinstalando",
	UnCompletedSubCaption: ": Concluído",
	BackBtn: "< &Anterior",
	NextBtn: "&Seguinte >",
	AgreeBtn: "&Aceito",
	AcceptBtn: "Eu &aceito os termos do Contrato de licenza",
	DontAcceptBtn: "Eu &non aceito os termos do Contrato de licenza",
	InstallBtn: "&Instalar",
	UninstallBtn: "&Desinstalar",
	CancelBtn: "Cancelar",
	CloseBtn: "&Fechar",
	BrowseBtn: "&Procurar...",
	ShowDetailsBtn: "Ver &Detalles",
	ClickNext: "Clique en 'Seguinte' para continuar.",
	ClickInstall: "Clique en 'Instalar' para iniciar a instalación.",
	ClickUninstall: "Clique en 'Desinstalar' para iniciar a desinstalación.",
	Name: "Nome",
	Completed: "Concluído",
	LicenseText: "Por favor revexa o acordo de licenza antes de instalar $(^NameDA). Se concordar con todos os termos da licenza, clique em 'Aceito'.",
	LicenseTextCB: "Por favor reveja o acordo de licenza antes de instalar $(^NameDA). Se concordar con todos os termos da licenza, clique na caixa de selección abaixo. $_CLICK",
	LicenseTextRB: "Por favor revexa o acordo de licenza antes de instalar $(^NameDA). Se concordar con todos os termos da licenza, escolla a primeira opción abaixo. $_CLICK",
	UnLicenseText: "Por favor revexa o acordo de licenza antes de desinstalar $(^NameDA). Se concordar con todos os termos da licenza, clique em 'Aceito'.",
	UnLicenseTextCB: "Por favor reveja o acordo de licenza antes de desinstalar $(^NameDA). Se concordar con todos os termos da licenza, clique na caixa de selección abaixo. $_CLICK",
	UnLicenseTextRB: "Por favor revexa o acordo de licenza antes de desinstalar $(^NameDA). Se concordar con todos os termos da licenza, escolla a primeira opción abaixo. $_CLICK",
	Custom: "Personalizado",
	ComponentsText: "Marque os componentes que desexa instalar e desmarque os componentes que non desexa instalar. $_CLICK",
	ComponentsSubText1: "Escolla o tipo de instalación:",
	ComponentsSubText2_NoInstTypes: "Escolla os componentes para instalar:",
	ComponentsSubText2: "Ou, escolla os componentes opcionais que desexa instalar:",
	UnComponentsText: "Marque os componentes que queira desinstalar e vice versa. $_CLICK",
	UnComponentsSubText1: "Escolla o tipo de desinstalación:",
	UnComponentsSubText2_NoInstTypes: "Escolla os componentes para desinstalar:",
	UnComponentsSubText2: "Ou, escolla os componentes opcionais que queira desinstalar:",
	DirText: "O $(^NameDA) será instalado na seguinte directória. Para instalar nunha directória diferente, clique en 'Procurar...' e escolla outra directória. $_CLICK",
	DirSubText: "Directória de destino",
	DirBrowseText: "Escolla unha directória para instalar o $(^NameDA):",
	UnDirText: "O $(^NameDA) será desinstalado da seguinte directória. Para desinstalar dunha pasta diferente, clique en 'Procurar...' e escolla outra directória. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Escolla a directória de onde vai ser desinstalado o $(^NameDA):",
	SpaceAvailable: "\"Espazo disponíbel: \"",
	SpaceRequired: "\"Espazo necesário: \"",
	UninstallingText: "$(^NameDA) vai ser desinstalado da seguinte directória. $_CLICK",
	UninstallingSubText: "Desinstalando de:",
	FileError: "Erro ao abrir ficheiro para escrita: \\r\\n\\t\"$0\"\\r\\nClique en Abortar para abortar a instalación,\\r\\nRepetir para tentar novamente a escrita do ficheiro, ou\\r\\nIgnorar para ignorar este ficheiro.",
	FileError_NoIgnore: "Erro ao abrir ficheiro para escrita: \\r\\n\\t\"$0\"\\r\\nClique en Repetir para tentar novamente a gravación do ficheiro, ou\\r\\nCancelar para abortar a instalación.",
	CantWrite: "\"Non foi posíbel escreber: \"",
	CopyFailed: "Falla ao copiar",
	CopyTo: "\"Copiar para \"",
	Registering: "\"Rexistando: \"",
	Unregistering: "\"Desrexistando: \"",
	SymbolNotFound: "\"Símbolo non achado: \"",
	CouldNotLoad: "\"Non foi posíbel carregar: \"",
	CreateFolder: "\"Criando diretória: \"",
	CreateShortcut: "\"Criando atallo: \"",
	CreatedUninstaller: "\"Criando desinstalador: \"",
	Delete: "\"Eliminando ficheiro: \"",
	DeleteOnReboot: "\"Eliminar ao reiniciar: \"",
	ErrorCreatingShortcut: "\"Erro ao criar atallo: \"",
	ErrorCreating: "\"Erro ao criar: \"",
	ErrorDecompressing: "Erro ao descomprimir dados! Instalador corrompido?",
	ErrorRegistering: "Erro ao rexistar DLL",
	ExecShell: "\"Executando polo Shell: \"",
	Exec: "\"Executando: \"",
	Extract: "\"Extraindo: \"",
	ErrorWriting: "\"Extraindo: erro ao escreber ficheiro \"",
	InvalidOpcode: "Instalador corrompido: código de operación inválido",
	NoOLE: "\"Sen OLE para: \"",
	OutputFolder: "\"Cartafol de destino: \"",
	RemoveFolder: "\"Removendo cartafol: \"",
	RenameOnReboot: "\"Renomear ao reiniciar: \"",
	Rename: "\"Renomeando: \"",
	Skipped: "\"Ignorado: \"",
	CopyDetails: "Copiar detalles para a Área de transférencia",
	LogInstall: "Rexistar proceso de instalación",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Galician$1 = {
	header: header$m,
	id: id$m,
	font: font$m,
	code_page: code_page$m,
	rtl: rtl$m,
	strings: strings$m
};

var header$n = "NLF v6";
var id$n = 1079;
var font$n = {
	name: null,
	size: null
};
var code_page$n = 1200;
var rtl$n = false;
var strings$n = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "ჩატვირთვა $(^Name)",
	UninstallCaption: "$(^Name)–ის წაშლა",
	LicenseSubCaption: ": სალიცენზიო შეთანხმება",
	ComponentsSubCaption: ": ჩატვირთვის მონაცემები",
	DirSubCaption: ": საინსტალაციო ფოლდერი",
	InstallingSubCaption: ": ფაილების კოპირება",
	CompletedSubCaption: ": ოპერაცია დასრულებულია",
	UnComponentsSubCaption: ": წაშლის მონაცემები",
	UnDirSubCaption: ": წაშლის ფოულდერი",
	ConfirmSubCaption: ": თანხმობა",
	UninstallingSubCaption: ": ფაილების წაშლა",
	UnCompletedSubCaption: ": ოპერაცია დასრულებულია",
	BackBtn: "< &უკან",
	NextBtn: "&შემდეგ >",
	AgreeBtn: "ვეთანხმე&ბი",
	AcceptBtn: "&ვეთანხმები სალიცენზიო პირობებს",
	DontAcceptBtn: "&არ ვეთანხმები სალიცენზიო პირობებს",
	InstallBtn: "&ჩატვირთვა",
	UninstallBtn: "წაშ&ლა",
	CancelBtn: "უარი",
	CloseBtn: "&დახურვა",
	BrowseBtn: "დათ&ვალიერება...",
	ShowDetailsBtn: "&დეტალები...",
	ClickNext: "გასაგრძელებლად დააწკაპუნეთ ღილაკზე 'შემდეგ'.",
	ClickInstall: "დააწკაპუნეთ ღილაკზე 'ჩატვირთვა', პროგრამის ჩასატვირთად.",
	ClickUninstall: "დააწკაპუნეთ ღილაკზე 'წაშლა', პროგრამის წასაშლელად.",
	Name: "სახელი",
	Completed: "ჩაიტვირთა",
	LicenseText: "სანამ ჩაიტვირთება $(^NameDA) გაეცანით სალიცენზიო ხელშეკრულებას. თუ ეთანხმებით პირობებს დააწკაპუნეთ ღილაკზე 'თანხმობა'.",
	LicenseTextCB: "სანამ ჩაიტვირთება $(^NameDA) გაეცანით სალიცენზიო ხელშეკრულებას. თუ ეთანხმებით პირობებს მონიშნეთ ფანჯარა ქვემოთ. $_CLICK",
	LicenseTextRB: "სანამ ჩაიტვირთება $(^NameDA) გაეცანით სალიცენზიო ხელშეკრულებას. თუ ეთანხმებით პირობებს მონიშნეთ ქვემოთ მოცემული პირველი ვარიანტი. $_CLICK",
	UnLicenseText: "სანამ წაშლით $(^NameDA) გაეცანით სალიცენზიო ხელშეკრულებას. თუ ეთანხმებით პირობებს დააწკაპუნეთ ღილაკზე 'თანხმობა'.",
	UnLicenseTextCB: "სანამ წაშლით $(^NameDA) გაეცანით სალიცენზიო ხელშეკრულებას. თუ ეთანხმებით პირობებს მონიშნეთ ფანჯარა ქვემოთ. $_CLICK",
	UnLicenseTextRB: "სანამ წაშლით $(^NameDA) გაეცანით სალიცენზიო ხელშეკრულებას. თუ ეთანხმებით პირობებს მონიშნეთ ქვემოთ მოცემული პირველი ვარიანტი. $_CLICK",
	Custom: "სტანდარტული",
	ComponentsText: "აირჩიეთ ის კომპონენტები, რომლის ჩატვირთვაც გსურთ. $_CLICK",
	ComponentsSubText1: "აირჩიეთ ჩატვირთვის მეთოდი:",
	ComponentsSubText2_NoInstTypes: "ჩასატვირთად აირჩიეთ პროგრამის კომპონენტები:",
	ComponentsSubText2: "ან ჩასატვირთად აირჩიეთ პროგრამის დამატებითი კომპონენტები:",
	UnComponentsText: "აირჩიეთ ის კომპონენტები, რომლის წაშლაც გსურთ. $_CLICK",
	UnComponentsSubText1: "აირჩიეთ წაშლის მეთოდი:",
	UnComponentsSubText2_NoInstTypes: "წასაშლელად აირჩიეთ პროგრამის კომპონენტები:",
	UnComponentsSubText2: "ან წასაშლელად აირჩიეთ პროგრამის დამატებითი კომპონენტები:",
	DirText: "პროგრამა ჩაგიტვირთავთ $(^NameDA)–ის მითითებულ ფოლდერში. სხვა ადგილზე ჩასატვირთად დააწკაპუნეთ ღილაკზე 'დათვალიერება' და მიუთითეთ ადგილი. $_CLICK",
	DirSubText: "ჩატვირთვის ფოლდერი",
	DirBrowseText: "მითითეთ ფოლდერი სადაც უნდა ჩაიტვირთოს $(^NameDA):",
	UnDirText: "პროგრამა წაშლის $(^NameDA)–ის მითითებული ფოლდერიდან. სხვა ფოლდერიდან წასაშლელად დააწკაპუნეთ ღილაკზე 'დათვალიერება' და მიუთითეთ ადგილი. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "მიუთითეთ ფოლდერი საიდანაც უნდა წაიშალოს $(^NameDA):",
	SpaceAvailable: "\"Доступно на диске: \"",
	SpaceRequired: "\"Требуется на диске: \"",
	UninstallingText: "პროგრამა $(^NameDA) წაიშლება თქვენი კომპიუტერიდან. $_CLICK",
	UninstallingSubText: "წაშლა:",
	FileError: "არ იხსნება ფაილები ჩასაწერად: \\r\\n\\t\"$0\"\\r\\n'შეჩერება': შეჩერდეს ჩატვირთვა;\\r\\n\"გამეორება\": მცდელობის გამეორება;\\r\\n\"გამოტოვება\": ამ მოქმედების გამოტოვება.",
	FileError_NoIgnore: "არ იხსნება ფაილეი ჩასაწერად: \\r\\n\\t\"$0\"\\r\\n'გამეორება': მცდელობის გამეორება;\\r\\n'უარი': ჩატვირთვის პროცესის შეწყვეტა.",
	CantWrite: "\"არ იწერება: \"",
	CopyFailed: "შეცდომა ჩაწერის დროს",
	CopyTo: "\"კოპირება: \"",
	Registering: "\"რეგისტრირება: \"",
	Unregistering: "\"რეგისტრირებიდან მოხსნა: \"",
	SymbolNotFound: "\"ვერ მოიძებნა სიმბოლო: \"",
	CouldNotLoad: "\"ჩატვირთვა შეუძლებელია: \"",
	CreateFolder: "\"ფოლდერის შექმნა: \"",
	CreateShortcut: "\"იარლიყის შექმნა: \"",
	CreatedUninstaller: "\"წაშლის პროგრამის შექმნა: \"",
	Delete: "\"ფაილის წაშლა: \"",
	DeleteOnReboot: "\"წაიშლება კომპიუტერის გადატვირთვის დროს: \"",
	ErrorCreatingShortcut: "\"იარლიყის შექმნისას დაშვებულია შეცდომა: \" ",
	ErrorCreating: "\"შექმნისას დაშვებულია შეცდომა: \"",
	ErrorDecompressing: "შეცდომა მონაცემების გახსნისას! შესაძლოა საინსტალაციო პროგრამაა დაზიანებული.",
	ErrorRegistering: "არ რეგისტრირდება (DLL)",
	ExecShell: "\"ExecShell: \" ",
	Exec: "\"შესრულება: \"",
	Extract: "\"ამონაწერი: \"",
	ErrorWriting: "\"ამონაწერი: შეცდომაა დაშვებული ფაილის ჩაწერისას \"",
	InvalidOpcode: "საინსტალაციო პროგრამა დაზიანებულია: კოდი არ არსებობს",
	NoOLE: "\"OLE არ არის: \" ",
	OutputFolder: "\"ჩატვირთვის ფოლდერი: \"",
	RemoveFolder: "\"ფოლდერის წაშლა: \"",
	RenameOnReboot: "\"სახელის შეცვლა კომპიუტერის გადავირთვისას: \"",
	Rename: "\"სახელის შეცვლა: \"",
	Skipped: "\"გამოტოვა: \"",
	CopyDetails: "მონაცემების ბუფერში კოპირება ",
	LogInstall: "ჩატვირთვის აღწერა",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Georgian$1 = {
	header: header$n,
	id: id$n,
	font: font$n,
	code_page: code_page$n,
	rtl: rtl$n,
	strings: strings$n
};

var header$o = "NLF v6";
var id$o = 1031;
var font$o = {
	name: null,
	size: null
};
var code_page$o = 1252;
var rtl$o = false;
var strings$o = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Installation von $(^Name)",
	UninstallCaption: "Deinstallation von $(^Name)",
	LicenseSubCaption: ": Lizenzabkommen",
	ComponentsSubCaption: ": Installationsoptionen",
	DirSubCaption: ": Zielverzeichnis",
	InstallingSubCaption: ": Wird installiert",
	CompletedSubCaption: ": Fertig",
	UnComponentsSubCaption: ": Deinstallationsoptionen",
	UnDirSubCaption: ": Quellverzeichnis",
	ConfirmSubCaption: ": Bestätigung",
	UninstallingSubCaption: ": Wird entfernt",
	UnCompletedSubCaption: ": Fertig",
	BackBtn: "< &Zurück",
	NextBtn: "&Weiter >",
	AgreeBtn: "&Annehmen",
	AcceptBtn: "Lizenzabkommen &akzeptieren",
	DontAcceptBtn: "Lizenzabkommen ab&lehnen",
	InstallBtn: "&Installieren",
	UninstallBtn: "&Deinstallieren",
	CancelBtn: "Abbrechen",
	CloseBtn: "&Beenden",
	BrowseBtn: "&Durchsuchen ...",
	ShowDetailsBtn: "&Details anzeigen",
	ClickNext: "Klicken Sie auf Weiter, um fortzufahren.",
	ClickInstall: "Klicken Sie auf Installieren, um die Installation zu starten.",
	ClickUninstall: "Klicken Sie auf Deinstallieren, um die Deinstallation zu starten.",
	Name: "Name",
	Completed: "Fertig",
	LicenseText: "Bitte lesen Sie das Lizenzabkommen, bevor Sie $(^NameDA) installieren. Wenn Sie alle Bedingungen des Abkommens akzeptieren, klicken Sie auf Annehmen.",
	LicenseTextCB: "Bitte lesen Sie das Lizenzabkommen, bevor Sie $(^NameDA) installieren. Wenn Sie alle Bedingungen des Abkommens akzeptieren, aktivieren Sie das Kontrollkästchen. $_CLICK",
	LicenseTextRB: "Bitte lesen Sie das Lizenzabkommen, bevor Sie $(^NameDA) installieren. Wenn Sie alle Bedingungen des Abkommens akzeptieren, wählen Sie die entsprechende Option. $_CLICK",
	UnLicenseText: "Bitte lesen Sie das Lizenzabkommen, bevor Sie $(^NameDA) entfernen. Wenn Sie alle Bedingungen des Abkommens akzeptieren, klicken Sie auf Annehmen.",
	UnLicenseTextCB: "Bitte lesen Sie das Lizenzabkommen, bevor Sie $(^NameDA) entfernen. Wenn Sie alle Bedingungen des Abkommens akzeptieren, aktivieren Sie das Kontrollkästchen. $_CLICK",
	UnLicenseTextRB: "Bitte lesen Sie das Lizenzabkommen, bevor Sie $(^NameDA) entfernen. Wenn Sie alle Bedingungen des Abkommens akzeptieren, wählen Sie die entsprechende Option. $_CLICK",
	Custom: "Benutzerdefiniert",
	ComponentsText: "Wählen Sie die Komponenten, welche Sie installieren wollen. $_CLICK",
	ComponentsSubText1: "Installationstyp bestimmen:",
	ComponentsSubText2_NoInstTypes: "Wählen Sie die zu installierenden Komponenten:",
	ComponentsSubText2: "oder wählen Sie zusätzliche zu installierende Komponenten:",
	UnComponentsText: "Wählen Sie die Komponenten, welche Sie entfernen wollen. $_CLICK",
	UnComponentsSubText1: "Deinstallationstyp bestimmen:",
	UnComponentsSubText2_NoInstTypes: "Wählen Sie die zu entfernenden Komponenten:",
	UnComponentsSubText2: "oder wählen Sie zusätzliche Komponenten, welche Sie entfernen möchten:",
	DirText: "$(^NameDA) wird in das unten angegebene Verzeichnis installiert. Falls Sie in ein anderes Verzeichnis installieren möchten, klicken Sie auf Durchsuchen und wählen Sie ein anderes Verzeichnis aus. $_CLICK",
	DirSubText: "Zielverzeichnis",
	DirBrowseText: "Wählen Sie das Verzeichnis aus, in das Sie $(^NameDA) installieren möchten:",
	UnDirText: "$(^NameDA) wird aus dem unten angegebenen Verzeichnis entfernt. Falls sich $(^NameDA) in einem anderen Verzeichnis befindet, klicken Sie auf Durchsuchen und wählen Sie das richtige Verzeichnis aus. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Wählen Sie das Verzeichnis aus, in dem sich $(^NameDA) befindet:",
	SpaceAvailable: "\"Verfügbarer Speicher: \"",
	SpaceRequired: "\"Benötigter Speicher: \"",
	UninstallingText: "$(^NameDA) wird aus dem unten angegebenen Verzeichnis entfernt. $_CLICK",
	UninstallingSubText: "Wird entfernt aus:",
	FileError: "Fehler beim Überschreiben der Datei: \\r\\n\\t\"$0\"\\r\\nKlicken Sie auf Abbrechen, um abzubrechen,\\r\\nauf Wiederholen, um den Schreibvorgang erneut zu versuchen,\\r\\noder auf Ignorieren, um diese Datei zu überspringen.",
	FileError_NoIgnore: "Fehler beim Überschreiben der Datei: \\r\\n\\t\"$0\"\\r\\nKlicken Sie auf Wiederholen, um den Schreibvorgang erneut zu versuchen,\\r\\noder auf Abbrechen, um die Installation zu beenden.",
	CantWrite: "\"Fehler beim Schreiben: \"",
	CopyFailed: "Kopieren fehlgeschlagen",
	CopyTo: "\"Wird kopiert nach \"",
	Registering: "\"Wird registriert: \"",
	Unregistering: "\"Wird deregistriert: \"",
	SymbolNotFound: "\"Symbol ist nicht vorhanden: \"",
	CouldNotLoad: "\"Fehler beim Laden von \"",
	CreateFolder: "\"Verzeichnis wird erstellt: \"",
	CreateShortcut: "\"Verknüpfung wird erstellt: \"",
	CreatedUninstaller: "\"Deinstallationsprogramm wird erstellt: \"",
	Delete: "\"Datei wird gelöscht: \"",
	DeleteOnReboot: "\"Datei wird nach Neustart gelöscht: \"",
	ErrorCreatingShortcut: "\"Fehler beim Erstellen der Verknüpfung: \"",
	ErrorCreating: "\"Fehler beim Erstellen: \"",
	ErrorDecompressing: "Fehler beim Entpacken. Ist das Installationsprogramm beschädigt?",
	ErrorRegistering: "Fehler beim Registrieren der DLL",
	ExecShell: "\"ExecShell: \"",
	Exec: "\"Wird gestartet: \"",
	Extract: "\"Wird entpackt: \"",
	ErrorWriting: "\"Entpacken: Fehler beim Schreiben der Datei \"",
	InvalidOpcode: "Beschädigtes Installationsprogramm: ungültiger Befehlscode",
	NoOLE: "\"Kein OLE für: \"",
	OutputFolder: "\"Zielverzeichnis: \"",
	RemoveFolder: "\"Verzeichnis wird entfernt: \"",
	RenameOnReboot: "\"Umbenennen nach Neustart: \"",
	Rename: "\"Umbenennen: \"",
	Skipped: "\"Übersprungen: \"",
	CopyDetails: "Details in die Zwischenablage kopieren",
	LogInstall: "Installationsverlauf protokollieren",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var German$1 = {
	header: header$o,
	id: id$o,
	font: font$o,
	code_page: code_page$o,
	rtl: rtl$o,
	strings: strings$o
};

var header$p = "NLF v6";
var id$p = 1032;
var font$p = {
	name: null,
	size: null
};
var code_page$p = 1253;
var rtl$p = false;
var strings$p = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Εγκατάσταση του '$(^Name)'",
	UninstallCaption: "Απεγκατάσταση του '$(^Name)'",
	LicenseSubCaption: ": Συμφωνία Άδειας Χρήσης",
	ComponentsSubCaption: ": Επιλογές Εγκατάστασης",
	DirSubCaption: ": Φάκελος Εγκατάστασης",
	InstallingSubCaption: ": Εγκατάσταση σε εξέλιξη",
	CompletedSubCaption: ": Ολοκληρώθηκε",
	UnComponentsSubCaption: ": Επιλογές Απεγκατάστασης",
	UnDirSubCaption: ": Φάκελος Απεγκατάστασης",
	ConfirmSubCaption: ": Επιβεβαίωση",
	UninstallingSubCaption: ": Απεγκατάσταση σε εξέλιξη",
	UnCompletedSubCaption: ": Ολοκληρώθηκε",
	BackBtn: "< &Πίσω",
	NextBtn: "&Επόμενο >",
	AgreeBtn: "&Συμφωνώ",
	AcceptBtn: "&Αποδέχομαι τους όρους της άδειας χρήσης",
	DontAcceptBtn: "&Δεν αποδέχομαι τους όρους της άδειας χρήσης",
	InstallBtn: "&Εγκατάσταση",
	UninstallBtn: "Απε&γκατάστ.",
	CancelBtn: "Άκυρο",
	CloseBtn: "&Κλείσιμο",
	BrowseBtn: "Α&ναζήτηση...",
	ShowDetailsBtn: "&Λεπτομέρειες",
	ClickNext: "Κάντε κλικ στο Επόμενο για να συνεχίσετε.",
	ClickInstall: "Κάντε κλικ στο Εγκατάσταση για να αρχίσετε την εγκατάσταση.",
	ClickUninstall: "Κάντε κλικ στο Απεγκατάσταση για να αρχίσετε την απεγκατάσταση.",
	Name: "Όνομα",
	Completed: "Ολοκληρώθηκε",
	LicenseText: "Ελέγξτε την άδεια χρήσης πριν εγκαταστήσετε το '$(^NameDA)'. Εάν αποδέχεστε όλους τους όρους, κάντε κλικ στο Συμφωνώ.",
	LicenseTextCB: "Ελέγξτε την άδεια χρήσης πριν εγκαταστήσετε το '$(^NameDA)'. Εάν αποδέχεστε όλους τους όρους, κάντε κλικ στην επιλογή παρακάτω. $_CLICK",
	LicenseTextRB: "Ελέγξτε την άδεια χρήσης πριν εγκαταστήσετε το '$(^NameDA)'. Εάν αποδέχεστε όλους τους όρους, κάντε κλικ στην πρώτη επιλογή παρακάτω. $_CLICK",
	UnLicenseText: "Ελέγξτε την άδεια χρήσης πριν απεγκαταστήσετε το '$(^NameDA)'. Εάν αποδέχεστε όλους τους όρους, κάντε κλικ στο Συμφωνώ.",
	UnLicenseTextCB: "Ελέγξτε την άδεια χρήσης πριν απεγκαταστήσετε το '$(^NameDA)'. Εάν αποδέχεστε όλους τους όρους, κάντε κλικ στην επιλογή παρακάτω. $_CLICK",
	UnLicenseTextRB: "Ελέγξτε την άδεια χρήσης πριν απεγκαταστήσετε το '$(^NameDA)'. Εάν αποδέχεστε όλους τους όρους, κάντε κλικ στην πρώτη επιλογή παρακάτω. $_CLICK",
	Custom: "Προσαρμοσμένη",
	ComponentsText: "Επιλέξτε τα στοιχεία που θέλετε να εγκαταστήσετε και αποεπιλέξτε τα στοιχεία που δε θέλετε να εγκαταστήσετε. $_CLICK",
	ComponentsSubText1: "Επιλέξτε τύπο εγκατάστασης:",
	ComponentsSubText2_NoInstTypes: "Επιλέξτε τα στοιχεία που θέλετε να εγκαταστήσετε:",
	ComponentsSubText2: "Ή, επιλέξτε τα προαιρετικά στοιχεία που θέλετε να εγκαταστήσετε:",
	UnComponentsText: "Επιλέξτε τα στοιχεία που θέλετε να απεγκαταστήσετε και αποεπιλέξτε τα στοιχεία που δε θέλετε να απεγκαταστήσετε. $_CLICK",
	UnComponentsSubText1: "Επιλέξτε τύπο απεγκατάστασης:",
	UnComponentsSubText2_NoInstTypes: "Επιλέξτε τα στοιχεία που θέλετε να απεγκαταστήσετε:",
	UnComponentsSubText2: "Ή, επιλέξτε τα προαιρετικά στοιχεία που θέλετε να απεγκαταστήσετε:",
	DirText: "Το πρόγραμμα εγκατάστασης θα εγκαταστήσει το '$(^NameDA)' στον παρακάτω φάκελο. Για να το εγκαταστήσετε σε έναν άλλο φάκελο, κάντε κλικ στο Αναζήτηση και επιλέξτε κάποιον άλλο φάκελο. $_CLICK",
	DirSubText: "Φάκελος Εγκατάστασης",
	DirBrowseText: "Επιλέξτε το φάκελο εγκατάστασης για το '$(^NameDA)':",
	UnDirText: "Το πρόγραμμα εγκατάστασης θα απεγκαταστήσει το '$(^NameDA)' από τον παρακάτω φάκελο. Για να απεγκαταστήσετε από έναν άλλο φάκελο, κάντε κλικ στο Αναζήτηση και επιλέξτε κάποιον άλλο φάκελο. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Επιλέξτε το φάκελο απεγκατάστασης για το '$(^NameDA)':",
	SpaceAvailable: "\"Διαθέσιμος χώρος: \"",
	SpaceRequired: "\"Απαιτούμενος χώρος: \"",
	UninstallingText: "Το '$(^NameDA)' θα απεγκατασταθεί από τον ακόλουθο φάκελο. $_CLICK",
	UninstallingSubText: "Απεγκατάστ. από:",
	FileError: "Σφάλμα κατά το άνοιγμα αρχείου για εγγραφή: \\r\\n\\t\"$0\"\\r\\nΕπιλέξτε ματαίωση για να ματαιώσετε την εγκατάσταση,\\r\\nεπανάληψη για να δοκιμάσετε να γράψετε το αρχείο πάλι, ή\\r\\nπαράβλεψη για να παραλείψετε αυτό το αρχείο.",
	FileError_NoIgnore: "Σφάλμα κατά το άνοιγμα αρχείου για εγγραφή: \\r\\n\\t\"$0\"\\r\\nΕπιλέξτε επανάληψη για να δοκιμάσετε να γράψετε το αρχείο πάλι, ή\\r\\nματαίωση για να ματαιώσετε την εγκατάσταση.",
	CantWrite: "\"Αδυναμία εγγραφής: \"",
	CopyFailed: "Αντιγραφή απέτυχε",
	CopyTo: "\"Αντιγραφή στο \"",
	Registering: "\"Καταχώρηση: \"",
	Unregistering: "\"Κατάργηση καταχώρησης: \"",
	SymbolNotFound: "\"Αδυναμία εύρεσης συμβόλου: \"",
	CouldNotLoad: "\"Αδυναμία φόρτωσης: \"",
	CreateFolder: "\"Δημιουργία φακέλου: \"",
	CreateShortcut: "\"Δημιουργία συντόμευσης: \"",
	CreatedUninstaller: "\"Δημιουργία προγράμματος απεγκατάστασης: \"",
	Delete: "\"Διαγραφή αρχείου: \"",
	DeleteOnReboot: "\"Διαγραφή στην επανεκκίνηση: \"",
	ErrorCreatingShortcut: "\"Σφάλμα στη δημιουργία συντόμευσης: \"",
	ErrorCreating: "\"Σφάλμα στη δημιουργία: \"",
	ErrorDecompressing: "Σφάλμα στην αποσυμπίεση δεδομένων! Κατεστραμμένο πρόγραμμα εγκατάστασης;",
	ErrorRegistering: "Σφάλμα καταχώρησης του DLL",
	ExecShell: "\"Εκτέλεση (ExecShell): \"",
	Exec: "\"Εκτέλεση: \"",
	Extract: "\"Αποσυμπίεση: \"",
	ErrorWriting: "\"Αποσυμπίεση: σφάλμα εγγραφής στο αρχείο \"",
	InvalidOpcode: "Εγκατάσταση κατεστραμμένη: μη-έγκυρο opcode",
	NoOLE: "\"Όχι OLE για το: \"",
	OutputFolder: "\"Φάκελος εξόδου: \"",
	RemoveFolder: "\"Διαγραφή φακέλου: \"",
	RenameOnReboot: "\"Μετονομασία στην επανεκκίνηση: \"",
	Rename: "\"Μετονομασία: \"",
	Skipped: "\"Παραλείφθηκε: \"",
	CopyDetails: "Αντιγραφή λεπτομερειών στο Πρόχειρο",
	LogInstall: "Καταγραφή διαδικασίας εγκατάστασης",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Greek$1 = {
	header: header$p,
	id: id$p,
	font: font$p,
	code_page: code_page$p,
	rtl: rtl$p,
	strings: strings$p
};

var header$q = "NLF v6";
var id$q = 1037;
var font$q = {
	name: null,
	size: null
};
var code_page$q = 1255;
var rtl$q = true;
var strings$q = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "התקנת $(^Name)",
	UninstallCaption: "הסרת $(^Name)",
	LicenseSubCaption: ": הסכם רישוי",
	ComponentsSubCaption: ": אפשרויות התקנה",
	DirSubCaption: ": תיקיית התקנה",
	InstallingSubCaption: ": מתקין",
	CompletedSubCaption: ": ההתקנה הושלמה",
	UnComponentsSubCaption: ": אפשרויות הסרה",
	UnDirSubCaption: ": תיקייה להסרה",
	ConfirmSubCaption: ": אישור הסרה",
	UninstallingSubCaption: ": מסיר",
	UnCompletedSubCaption: ": ההסרה הושלמה",
	BackBtn: "< ה&קודם",
	NextBtn: "ה&בא >",
	AgreeBtn: "אני &מסכים",
	AcceptBtn: "אני &מסכים לתנאי הסכם הרישוי",
	DontAcceptBtn: "אני &לא מסכים לתנאי הסכם הרישוי",
	InstallBtn: "&התקן",
	UninstallBtn: "&הסר",
	CancelBtn: "ביטול",
	CloseBtn: "סגור&",
	BrowseBtn: "&עיין...",
	ShowDetailsBtn: "ה&צג פרטים",
	ClickNext: "לחץ על הבא כדי להמשיך.",
	ClickInstall: "לחץ על התקן כדי להתחיל את ההתקנה.",
	ClickUninstall: "לחץ על הסר כדי להתחיל את ההסרה.",
	Name: "שם",
	Completed: "הפעולה הושלמה",
	LicenseText: "אנא סקור את הסכם הרישוי לפני התקנת $(^NameDA). אם הינך מקבל את כל תנאי ההסכם, לחץ 'אני מסכים'.",
	LicenseTextCB: "אנא סקור את הסכם הרישוי לפני התקנת $(^NameDA). אם הינך מקבל את כל תנאי ההסכם, סמן את תיבת הסימון שלהלן. $_CLICK",
	LicenseTextRB: "אנא סקור את הסכם הרישוי לפני התקנת $(^NameDA). אם הינך מקבל את כל תנאי ההסכם, בחר באפשרות הראשונה שלהלן. $_CLICK",
	UnLicenseText: "אנא סקור את הסכם הרישוי לפני הסרת $(^NameDA). אם הינך מסכים לכל תנאי ההסכם, לחץ 'אני מסכים'.",
	UnLicenseTextCB: "אנא סקור את הסכם הרישוי לפני הסרת $(^NameDA). אם הינך מסכים לכל תנאי ההסכם, סמן את תיבת הסימון שלהלן. $_CLICK",
	UnLicenseTextRB: "אנא סקור את הסכם הרישוי לפני הסרת $(^NameDA). אם הינך מסכים לכל תנאי ההסכם, בחר באפשרות הראשונה שלהלן. $_CLICK",
	Custom: "מותאם אישית",
	ComponentsText: "סמן את הרכיבים שברצונך להתקין ובטל את הסימון של רכיבים שאין ברצונך להתקין. $_CLICK",
	ComponentsSubText1: "בחר סוג התקנה:",
	ComponentsSubText2_NoInstTypes: "בחר רכיבים להתקנה:",
	ComponentsSubText2: "או, בחר רכיבי רשות להתקנה:",
	UnComponentsText: "סמן את הרכיבים שברצונך להסיר ובטל את הסימון של רכיבים שאין ברצונך להסיר. $_CLICK",
	UnComponentsSubText1: "בחר סוג הסרה:",
	UnComponentsSubText2_NoInstTypes: "בחר רכיבים להסרה:",
	UnComponentsSubText2: "או, בחר רכיבי רשות להסרה:",
	DirText: "תוכנית זו תתקין את $(^NameDA) לתיקייה שלהלן. כדי להתקין לתיקייה אחרת, לחץ על 'עיין' ובחר תיקייה אחרת. $_CLICK",
	DirSubText: "תיקיית יעד",
	DirBrowseText: "בחר תיקייה להתקנת $(^NameDA):",
	UnDirText: "תוכנית זו תסיר את $(^NameDA) מהתיקייה שלהלן. כדי להסיר מתיקייה אחרת, לחץ על 'עיין' ובחר תיקייה אחרת. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "בחר תיקייה ממנה תוסר $(^NameDA):",
	SpaceAvailable: "\"מקום פנוי: \"",
	SpaceRequired: "\"מקום דרוש: \"",
	UninstallingText: "הסרת $(^NameDA) תתבצע מהתיקייה שלהלן. $_CLICK",
	UninstallingSubText: "מסיר מ:",
	FileError: "ארעה שגיאה בעת פתיחת קובץ לכתיבה:\\r\\n\\t\"$0\"\\r\\nלחץ על ביטול כדי לבטל את ההתקנה,\\r\\nנסה שנית כדי לנסות לפתוח את הקובץ שוב, או\\r\\nהתעלם כדי לדלג על הקובץ",
	FileError_NoIgnore: "ארעה שגיאה בעת פתיחת קובץ לכתיבה:\\r\\n\\t\"$0\"\\r\\nלחץ על נסה שנית כדי לנסות לפתוח את הקובץ  שוב, או\\r\\nביטול כדי לבטל את התתקנה",
	CantWrite: "\"לא ניתן לכתוב: \"",
	CopyFailed: "ההעתקה נכשלה",
	CopyTo: "העתק ל-",
	Registering: "\"רושם: \"",
	Unregistering: "\"ביטול רישום: \"",
	SymbolNotFound: "\"סמל לא נמצא: \"",
	CouldNotLoad: "\"לא ניתן לטעון: \"",
	CreateFolder: "\"צור תיקייה: \"",
	CreateShortcut: "\"צור קיצור דרך: \"",
	CreatedUninstaller: "\"מסיר התקנה נוצר: \"",
	Delete: "\"מחק קובץ: \"",
	DeleteOnReboot: "\"מחק אחרי אתחול: \"",
	ErrorCreatingShortcut: "\"שגיאה בעת יצירת קיצור דרך: \"",
	ErrorCreating: "\"שגיאה בעת יצירת: \"",
	ErrorDecompressing: "שגיאה בעת פרישת מידע! התקנה פגומה?",
	ErrorRegistering: "שגיאה בעת רישום DLL",
	ExecShell: "\"בצע פעולת-קובץ: \"",
	Exec: "\"בצע: \"",
	Extract: "\"פרוש: \"",
	ErrorWriting: "\"פרוש: שגיאה בעת כתיבה לקובץ \"",
	InvalidOpcode: "התקנה פגומה! פקודת ביצוע שגויה",
	NoOLE: "\"אין OLE ל: \"",
	OutputFolder: "\"תיקיית פלט: \"",
	RemoveFolder: "\"הסר תיקייה: \"",
	RenameOnReboot: "\"שנה שם לאחר אתחול: \"",
	Rename: "\"שנה שם: \"",
	Skipped: "\"דלג: \"",
	CopyDetails: "העתק פרטים ללוח",
	LogInstall: "שמור רישום פעילויות ההתקנה",
	Byte: "\"ב",
	Kilo: "\" ק\"",
	Mega: "\" מ\"",
	Giga: "\" ג\""
};
var Hebrew$1 = {
	header: header$q,
	id: id$q,
	font: font$q,
	code_page: code_page$q,
	rtl: rtl$q,
	strings: strings$q
};

var header$r = "NLF v6";
var id$r = 1081;
var font$r = {
	name: null,
	size: null
};
var code_page$r = 1200;
var rtl$r = false;
var strings$r = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "$(^Name) सेटअप",
	UninstallCaption: "$(^Name) अनइनस्टॉल करें",
	LicenseSubCaption: ": लाइसेंस समझौता",
	ComponentsSubCaption: ": इंस्टालेशन के विकल्प",
	DirSubCaption: ": इंस्टालेशन फोल्डर",
	InstallingSubCaption: ": इनस्टॉल कर रहे हैं",
	CompletedSubCaption: ": संपन्न",
	UnComponentsSubCaption: ": अनइंस्टालेशन के विकल्प",
	UnDirSubCaption: ": अनइंस्टालेशन फोल्डर",
	ConfirmSubCaption: ": पुष्टिकरण",
	UninstallingSubCaption: ": अनइनस्टॉल कर रहे हैं",
	UnCompletedSubCaption: ": सम्पन्न",
	BackBtn: "< &पीछे",
	NextBtn: "&आगे >",
	AgreeBtn: "मैं &सहमत हूँ",
	AcceptBtn: "मैं लाइसेंस समझौते की शर्तें &स्वीकार करता हूँ",
	DontAcceptBtn: "मैं लाइसेंस समझौते की शर्तें स्वीकार नहीं &करता हूँ",
	InstallBtn: "&इनस्टॉल करें",
	UninstallBtn: "&अनइनस्टॉल करें",
	CancelBtn: "रद्द करें",
	CloseBtn: "&बंद करें",
	BrowseBtn: "ब्रा&उज करें...",
	ShowDetailsBtn: "&विवरण दिखाएं",
	ClickNext: "जारी रखने के लिए आगे पर क्लिक करें।",
	ClickInstall: "इंस्टालेशन शुरू करने के लिए इनस्टॉल करें पर क्लिक करें।",
	ClickUninstall: "अनइंस्टालेशन शुरू करने के लिए अनइनस्टॉल करें पर क्लिक करें।",
	Name: "म",
	Completed: "सम्पन्न",
	LicenseText: "$(^NameDA) इनस्टॉल करने से पहले लाइसेंस समझौते की समीक्षा करें। यदि आप समझौते की सभी शर्तें स्वीकार करते हैं तो मैं सहमत हूँ पर क्लिक करें।",
	LicenseTextCB: "$(^NameDA) इनस्टॉल करने से पहले लाइसेंस समझौते की समीक्षा करें। यदि आप समझौते की सभी शर्तें स्वीकार करते हैं तो नीचे दिए गए चेक बॉक्स पर क्लिक करें। $_CLICK",
	LicenseTextRB: "$(^NameDA) इनस्टॉल करने से पहले लाइसेंस समझौते की समीक्षा करें। यदि आप समझौते की सभी शर्तें स्वीकार करते हैं तो नीचे दिए गए पहले विकल्प का चयन करें। $_CLICK",
	UnLicenseText: "$(^NameDA) अनइनस्टॉल करने से पहले लाइसेंस समझौते की समीक्षा करें। यदि आप समझौते की सभी शर्तें स्वीकार करते हैं तो मैं सहमत हूँ पर क्लिक करें।",
	UnLicenseTextCB: "$(^NameDA) अनइनस्टॉल करने से पहले लाइसेंस समझौते की समीक्षा करें। यदि आप समझौते की सभी शर्तें स्वीकार करते हैं तो नीचे दिए गए चेक बॉक्स पर क्लिक करें। $_CLICK",
	UnLicenseTextRB: "$(^NameDA) अनइनस्टॉल करने से पहले लाइसेंस समझौते की समीक्षा करें। यदि आप समझौते की सभी शर्तें स्वीकार करते हैं तो नीचे दिए गए पहले विकल्प का चयन करें। $_CLICK",
	Custom: "कस्टम",
	ComponentsText: "आप जो घटक इनस्टॉल करना चाहते हैं उन्हें चेक करें और आप जो घटक इनस्टॉल नहीं करना चाहते हैं उन्हें अनचेक करें। $_CLICK",
	ComponentsSubText1: "इनस्टॉल के प्रकार का चयन करें:",
	ComponentsSubText2_NoInstTypes: "इनस्टॉल करने के लिए घटकों का चयन करें:",
	ComponentsSubText2: "या उन वैकल्पिक घटकों का चयन करें जिन्हें आप इनस्टॉल करना चाहते हैं:",
	UnComponentsText: "आप जो घटक अनइनस्टॉल करना चाहते हैं उन्हें चेक करें और आप जो घटक अनइनस्टॉल नहीं करना चाहते हैं उन्हें अनचेक करें। $_CLICK",
	UnComponentsSubText1: "अनइनस्टॉल के प्रकार का चयन करें:",
	UnComponentsSubText2_NoInstTypes: "अनइनस्टॉल करने के लिए घटकों का चयन करें:",
	UnComponentsSubText2: "या उन वैकल्पिक घटकों का चयन करें जिन्हें आप अनइनस्टॉल करना चाहते हैं:",
	DirText: "सेटअप $(^NameDA) को निम्नलिखित फोल्डर में इनस्टॉल करेगा। किसी भिन्न फोल्डर में इनस्टॉल करने के लिए ब्राउज करें पर क्लिक करें और किसी अन्य फोल्डर का चयन करें। $_CLICK",
	DirSubText: "गंतव्य फोल्डर",
	DirBrowseText: "$(^NameDA) को जिस फोल्डर में इनस्टॉल करना है उसका चयन करें:",
	UnDirText: "सेटअप $(^NameDA) को निम्नलिखित फोल्डर से अनइनस्टॉल करेगा। किसी भिन्न फोल्डर से अनइनस्टॉल करने के लिए ब्राउज करें पर क्लिक करें और किसी अन्य फोल्डर का चयन करें। $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "$(^NameDA) को जिस फोल्डर से अनइनस्टॉल करना है उसका चयन करें:",
	SpaceAvailable: "\"उपलब्ध जगह: \"",
	SpaceRequired: "\"अपेक्षित जगह: \"",
	UninstallingText: "$(^NameDA) को निम्नलिखित फोल्डर से अनइनस्टॉल किया जाएगा। $_CLICK",
	UninstallingSubText: "इस से अनइनस्टॉल कर रहे हैं:",
	FileError: "लिखने के लिए फ़ाइल खोलने में त्रुटि: \\r\\n\\r\\n$0\\r\\n\\r\\nइंस्टालेशन रोकने के लिए निरस्त करें पर क्लिक करें,\\r\\nफिर से प्रयास करने के लिए पुनः प्रयास करें, या\\r\\nइस फाइल को छोड़ने के लिए नजरंदाज करें।",
	FileError_NoIgnore: "लिखने के लिए फ़ाइल खोलने में त्रुटि: \\r\\n\\r\\n$0\\r\\n\\r\\nफिर से प्रयास करने के लिए पुनः प्रयास करें पर क्लिक करें, या\\r\\nइंस्टालेशन रोकने के लिए रद्द करें।",
	CantWrite: "\"नहीं लिख सकते: \"",
	CopyFailed: "कॉपी करना विफल रहा",
	CopyTo: "\"में कॉपी करें \"",
	Registering: "\"पंजीकृत कर रहे हैं: \"",
	Unregistering: "\"पंजीकरण रद्द कर रहे हैं: \"",
	SymbolNotFound: "\"प्रतीक नहीं ढूंढ सके: \"",
	CouldNotLoad: "\"लोड नहीं कर सके: \"",
	CreateFolder: "\"फोल्डर बनाएं: \"",
	CreateShortcut: "\"शॉर्टकट बनाएं: \"",
	CreatedUninstaller: "\"अनइंस्टालर बनाया: \"",
	Delete: "\"फाइल हटाएं: \"",
	DeleteOnReboot: "\"रीबूट करने पर हटाएं: \"",
	ErrorCreatingShortcut: "\"शॉर्टकट बनाने में त्रुटि: \"",
	ErrorCreating: "\"बनाने में त्रुटि: \"",
	ErrorDecompressing: "डेटा असंपीड़ित करने पर त्रुटि! दूषित इंस्टालर?",
	ErrorRegistering: "DLL पंजीकृत करने पर त्रुटि",
	ExecShell: "\"शेल निष्पादित करें: \"",
	Exec: "निष्पादित करें: \"",
	Extract: "\"निकालें: \"",
	ErrorWriting: "\"निकालें: फाइल में लिखते समय त्रुटि \"",
	InvalidOpcode: "इंस्टालर दूषित: अवैध ऑपकोड",
	NoOLE: "\"इसके लिए कोई OLE नहीं: \"",
	OutputFolder: "\"आउटपुट फोल्डर: \"",
	RemoveFolder: "\"फोल्डर निकालें: \"",
	RenameOnReboot: "\"रीबूट करने पर नाम बदलें: \"",
	Rename: "\"नाम बदलें: \"",
	Skipped: "\"छोड़ा गया: \"",
	CopyDetails: "क्लिपबोर्ड पर विवरण कॉपी करें",
	LogInstall: "लॉग इनस्टॉल प्रक्रिया",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Hindi$1 = {
	header: header$r,
	id: id$r,
	font: font$r,
	code_page: code_page$r,
	rtl: rtl$r,
	strings: strings$r
};

var header$s = "NLF v6";
var id$s = 1038;
var font$s = {
	name: null,
	size: null
};
var code_page$s = 1250;
var rtl$s = false;
var strings$s = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "$(^Name) Telepítő",
	UninstallCaption: "$(^Name) Eltávolító",
	LicenseSubCaption: ": Licencszerződés",
	ComponentsSubCaption: ": Telepítési lehetőségek",
	DirSubCaption: ": Célmappa",
	InstallingSubCaption: ": Fájlok telepítése",
	CompletedSubCaption: ": Kész",
	UnComponentsSubCaption: ": Eltávolítási lehetőségek",
	UnDirSubCaption: ": Eltávolítás mappája",
	ConfirmSubCaption: ": Megerősítés",
	UninstallingSubCaption: ": Fájlok eltávolítása",
	UnCompletedSubCaption: ": Kész",
	BackBtn: "< &Vissza",
	NextBtn: "&Tovább >",
	AgreeBtn: "&Elfogadom",
	AcceptBtn: "&Elfogadom a Licencszerződés feltételeit",
	DontAcceptBtn: "&Nem fogadom el a Licencszerződés feltételeit",
	InstallBtn: "&Telepítés",
	UninstallBtn: "&Eltávolítás",
	CancelBtn: "&Mégse",
	CloseBtn: "&Bezárás",
	BrowseBtn: "&Tallózás...",
	ShowDetailsBtn: "&Részletek",
	ClickNext: "Kattintson a Tovább-ra a folytatáshoz.",
	ClickInstall: "Kattintson a Telepítésre a telepítéshez.",
	ClickUninstall: "Kattintson az Eltávolításra az eltávolításhoz.",
	Name: "Név",
	Completed: "Kész",
	LicenseText: "A(z) $(^NameDA) telepítése előtt tekintse át a szerződés feltételeit. Ha elfogadja a szerződés valamennyi feltételét, az Elfogadom gombbal folytathatja.",
	LicenseTextCB: "A(z) $(^NameDA) telepítése előtt tekintse át a szerződés feltételeit. Ha elfogadja a szerződés valamennyi feltételét, jelölje be a Jelölőnégyzeten. $_CLICK",
	LicenseTextRB: "A(z) $(^NameDA) telepítése előtt tekintse át a szerződés feltételeit. Ha elfogadja a szerződés valamennyi feltételét, válassza az első lehetőséget. $_CLICK",
	UnLicenseText: "A(z) $(^NameDA) eltávolítása előtt tekintse át a szerződés feltételeit. Ha elfogadja a szerződés valamennyi feltételét, az Elfogadom gombbal folytathatja.",
	UnLicenseTextCB: "A(z) $(^NameDA) eltávolítása előtt tekintse át a szerződés feltételeit. Ha elfogadja a szerződés valamennyi feltételét, jelölje be a Jelölőnégyzeten. $_CLICK",
	UnLicenseTextRB: "A(z) $(^NameDA) eltávolítása előtt tekintse át a szerződés feltételeit. Ha elfogadja a szerződés valamennyi feltételét, válassza az első lehetőséget. $_CLICK",
	Custom: "Egyéni",
	ComponentsText: "Jelölje be azokat az összetevőket amelyeket telepíteni kíván és törölje a jelölést a nem kívánt összetevőknél. $_CLICK",
	ComponentsSubText1: "Válassza ki a telepítés típusát:",
	ComponentsSubText2_NoInstTypes: "Válassza ki a telepítendő összetevőket:",
	ComponentsSubText2: "vagy, jelölje ki a választható összetevők közül a telepíteni kívánta(ka)t:",
	UnComponentsText: "Jelölje be azokat az összetevőket amelyeket el kíván távolítani és törölje a jelölést az eltávolítani nem kívánt összetevőknél. $_CLICK",
	UnComponentsSubText1: "Válassza ki az Eltávolítás típusát:",
	UnComponentsSubText2_NoInstTypes: "Válassza ki az eltávolítandó összetevőket:",
	UnComponentsSubText2: "vagy, jelölje ki a választható összetevők közül az eltávolítani kívánta(ka)t:",
	DirText: "A $(^NameDA) a következő mappába kerül. Másik mappa választásához kattintson a Tallózás gombra. $_CLICK",
	DirSubText: "Telepítés helye",
	DirBrowseText: "A(z) $(^NameDA) telepítési helyének kiválasztása:",
	UnDirText: "A(z) $(^NameDA) eltávolítása a következő mappából. Másik mappa választásához kattintson a Tallózás gombra. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Válassza ki, hogy a $(^NameDA) melyik mappából kerüljön eltávolításra:",
	SpaceAvailable: "\"Szabad terület: \"",
	SpaceRequired: "\"Helyigény: \"",
	UninstallingText: "A(z) $(^NameDA) eltávolítása következik a számítógépről. $_CLICK",
	UninstallingSubText: "Eltávolítás helye:",
	FileError: "Hiba történt a fájl írásra történő megnyitásakor: \\r\\n\\t\"$0\"\\r\\nA Mégse gomb megnyomásával megszakíthatja a telepítést,\\r\\naz Ismét gombbal megismételheti a fájl írását,\\r\\na Kihagyás gombbal kihagyhatja ezt a fájlt.",
	FileError_NoIgnore: "Hiba történt a fájl írásra történő megnyitásakor:  \\r\\n\\t\"$0\"\\r\\nAz Újra gomb megnyomásával megismételheti a műveletet, vagy \\r\\na Mégse gombbal megszakíthatja a telepítést.",
	CantWrite: "\"Nem írható: \"",
	CopyFailed: "A másolás megszakadt",
	CopyTo: "\"Másolás ide: \"",
	Registering: "\"Bejegyzés: \"",
	Unregistering: "\"Eltávolítás: \"",
	SymbolNotFound: "\"A következő szimbólum nem található: \"",
	CouldNotLoad: "\"Nem tölthető be: \"",
	CreateFolder: "\"Mappa létrehozás: \"",
	CreateShortcut: "\"Parancsikon létrehozása: \"",
	CreatedUninstaller: "\"Létrehozott eltávolító: \"",
	Delete: "\"Törölt fájl: \"",
	DeleteOnReboot: "\"Rendszerindításkor törlendő: \"",
	ErrorCreatingShortcut: "\"Hiba a parancsikon létrehozásakor: \"",
	ErrorCreating: "\"Hiba a létrehozáskor: \"",
	ErrorDecompressing: "Hiba az adatok kibontásakor! Megsérült a Telepítő?",
	ErrorRegistering: "Hiba a DLL regisztrálásakor",
	ExecShell: "\"Végrehajtás a hozzárendeléseken keresztül: \"",
	Exec: "\"Végrehajtás: \"",
	Extract: "\"Kibontás: \"",
	ErrorWriting: "\"Kibontás: Hiba a fájl írásakor \"",
	InvalidOpcode: "Sérült a telepítő: hibás utasítás",
	NoOLE: "\"Nincs OLE: \"",
	OutputFolder: "\"Kimeneti mappa: \"",
	RemoveFolder: "\"Mappa eltávolítása: \"",
	RenameOnReboot: "\"Átnevezés rendszerindításkor: \"",
	Rename: "\"Átnevezés: \"",
	Skipped: "\"Kihagyott: \"",
	CopyDetails: "Adatok vágólapra másolása",
	LogInstall: "Telepítő ellenőrzőlista",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Hungarian$1 = {
	header: header$s,
	id: id$s,
	font: font$s,
	code_page: code_page$s,
	rtl: rtl$s,
	strings: strings$s
};

var header$t = "NLF v6";
var id$t = 1039;
var font$t = {
	name: null,
	size: null
};
var code_page$t = 1252;
var rtl$t = false;
var strings$t = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "$(^Name) Uppsetning",
	UninstallCaption: "$(^Name) Fjarlæging",
	LicenseSubCaption: ": Notandaleyfissamningur",
	ComponentsSubCaption: ": Uppsetningarvalmöguleikar",
	DirSubCaption: ": Uppsetningarskráarsafn",
	InstallingSubCaption: ": Set upp",
	CompletedSubCaption: ": Lokið",
	UnComponentsSubCaption: ": Fjarlægingarvalmöguleikar",
	UnDirSubCaption: ": Fjarlægingarskráarsafn",
	ConfirmSubCaption: ": Staðfesting",
	UninstallingSubCaption: ": Fjarlægi",
	UnCompletedSubCaption: ": Lokið",
	BackBtn: "< &Til baka",
	NextBtn: "&Áfram >",
	AgreeBtn: "Ég &Samþykki",
	AcceptBtn: "Ég &samþykki skilmála leyfissamningsins",
	DontAcceptBtn: "Ég samþykki &ekki skilmála leyfissamningsins",
	InstallBtn: "&Setja upp",
	UninstallBtn: "&Fjarlægja",
	CancelBtn: "Hætta við",
	CloseBtn: "&Loka",
	BrowseBtn: "&Vafra...",
	ShowDetailsBtn: "Sýna &upplýsingar",
	ClickNext: "Smelltu á 'Áfram' til að halda áfram.",
	ClickInstall: "Smelltu á 'Setja upp' til þess að hefja uppsetninguna.",
	ClickUninstall: "Smelltu á 'Fjarlægja' til að hefja fjarlægingar ferlið.",
	Name: "Nafn",
	Completed: "Lokið",
	LicenseText: "Vinsamlegast skoðaðu notandaleyfissamninginn vel áður en uppsetning á $(^NameDA) hefst. Ef þú samþykkir skilmála samningsins, smelltu þá á 'Ég samþykki'.",
	LicenseTextCB: "Vinsamlegast skoðaðu notandaleyfissamninginn vel áður en uppsetning á $(^NameDA) hefst. Ef þú samþykkir skilmála samningsins, hakaðu þá í kassann hér að neðan. $_CLICK",
	LicenseTextRB: "Vinsamlegast skoðaðu notandaleyfissamninginn vel áður en uppsetning á $(^NameDA) hefst. Ef þú samþykkir skilmála samningsins, veldu þá fyrsta valmöguleikann hér að neðan. $_CLICK",
	UnLicenseText: "Vinsamlegast skoðaðu notandaleyfissamninginn vel áður en uppsetning á $(^NameDA) hefst. Ef þú samþykkir skilmála samningsins, smelltu þá á 'Ég samþykki'.",
	UnLicenseTextCB: "Vinsamlegast skoðaðu notandaleyfissamninginn vel áður en uppsetning á $(^NameDA) hefst. Ef þú samþykkir skilmála samningsins, hakaðu þá í kassann hér að neðan. $_CLICK",
	UnLicenseTextRB: "Vinsamlegast skoðaðu notandaleyfissamninginn vel áður en uppsetning á $(^NameDA) hefst. Ef þú samþykkir skilmála samningsins, veldu þá fyrsta valmöguleikann hér að neðan. $_CLICK",
	Custom: "Sjálfval",
	ComponentsText: "Hakaðu við þá íhluti sem þú vilt setja upp og taktu hakið af þeim íhlutum sem þú vilt ekki setja upp. $_CLICK",
	ComponentsSubText1: "Veldu tegund uppsetningar:",
	ComponentsSubText2_NoInstTypes: "Veldu þá íhluti sem á að setja upp:",
	ComponentsSubText2: "Eða, veldu valfrjálsa íhluti á að setja upp:",
	UnComponentsText: "Hakaðu við þá íhluti sem þú vilt fjarlægja og taktu hakið af þeim íhlutum sem þú vilt ekki fjarlægja. $_CLICK",
	UnComponentsSubText1: "Veldu tegund fjarlægingar:",
	UnComponentsSubText2_NoInstTypes: "Veldu íhluti sem á að fjarlægja:",
	UnComponentsSubText2: "Eða, veldu valfrjálsa íhluti sem á að fjarlægja:",
	DirText: "Uppsetningin mun setja $(^NameDA) upp í eftirfarandi skráarsafn. Til að setja forritið upp í annað skráarsafn, smelltu á 'Vafra...' og veldu annað skráarsafn. $_CLICK",
	DirSubText: "Uppsetningarskráarsafn",
	DirBrowseText: "Veldu það skráarsafn sem þú vilt setja $(^NameDA) upp í:",
	UnDirText: "Uppsetningin mun fjarlægja $(^NameDA) úr eftirfarandi skráarsafni. Til að fjarlægja forritið úr öðru skráarsafni, smelltu á 'Vafra...' og veldu annað skráarsafn. $_CLICK",
	UnDirSubText: "\"Fjarlægingarskráarsafn\"",
	UnDirBrowseText: "Veldu það skráarsafn sem þú vilt fjarlægja $(^NameDA) úr:",
	SpaceAvailable: "\"Tiltækt rými: \"",
	SpaceRequired: "\"Nauðsynlegt rými: \"",
	UninstallingText: "$(^NameDA) verður fjarlægt úr eftirfarandi skráarsafni. $_CLICK",
	UninstallingSubText: "Fjarlægi úr:",
	FileError: "Villa við að skrifa í skrá: \\r\\n\\r\\n$0\\r\\n\\r\\nSmelltu á 'Hætta við' til að stoppa uppsetninguna,\\r\\n'Reyna aftur' til að gera aðra tilraun, eða\\r\\n'Hunsa' til sleppa þessari skrá.",
	FileError_NoIgnore: "Villa við að skrifa í skrá: \\r\\n\\r\\n$0\\r\\n\\r\\nSmelltu á 'Reyna aftur' til að gera aðra tilraun, eða\\r\\n'Hætta við' til að stoppa uppsetninguna.",
	CantWrite: "\"Get ei skrifað: \"",
	CopyFailed: "Afritun mistókst",
	CopyTo: "\"Afrita til \"",
	Registering: "\"Skrásetja: \"",
	Unregistering: "\"Afskrá: \"",
	SymbolNotFound: "\"Fann ekki tákn: \"",
	CouldNotLoad: "\"Gat ekki hlaðið inn: \"",
	CreateFolder: "\"Búa til skráarsafn: \"",
	CreateShortcut: "\"Búa til flýtileið: \"",
	CreatedUninstaller: "\"Bjó til fjarlægingarhjálp: \"",
	Delete: "\"Eyða skrá: \"",
	DeleteOnReboot: "\"Eyða við endurræsingu: \"",
	ErrorCreatingShortcut: "\"Villa við gerð flýtileiðar: \"",
	ErrorCreating: "\"Villa við gerð: \"",
	ErrorDecompressing: "Villa við afþjöppun gagna! Biluð uppsetningarhjálp?",
	ErrorRegistering: "Villa við skrásetningu DLL",
	ExecShell: "\"Keyrslugluggi: \"",
	Exec: "\"Keyra: \"",
	Extract: "\"Færa út: \"",
	ErrorWriting: "\"Færa út: villa við að skrifa í skrá \"",
	InvalidOpcode: "Uppsetningarhjálp biluð: rangur stýrikóði",
	NoOLE: "\"Engin OLE fyrir: \"",
	OutputFolder: "\"Útskráarsafn: \"",
	RemoveFolder: "\"Fjarlægja skráarsafn: \"",
	RenameOnReboot: "\"Endurskíra við endurræsingu: \"",
	Rename: "\"Endurskíra: \"",
	Skipped: "\"Sleppt: \"",
	CopyDetails: "Afrita upplýsingar til skrifbrettis",
	LogInstall: "Skrá uppsetningarferli",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Icelandic$1 = {
	header: header$t,
	id: id$t,
	font: font$t,
	code_page: code_page$t,
	rtl: rtl$t,
	strings: strings$t
};

var header$u = "NLF v6";
var id$u = 1057;
var font$u = {
	name: null,
	size: null
};
var code_page$u = 1252;
var rtl$u = false;
var strings$u = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Instalasi Program $(^Name)",
	UninstallCaption: "Penghapusan Program $(^Name)",
	LicenseSubCaption: ": Perihal Lisensi",
	ComponentsSubCaption: ": Pilihan Instalasi",
	DirSubCaption: ": Lokasi Instalasi",
	InstallingSubCaption: ": Proses Instalasi",
	CompletedSubCaption: ": Selesai",
	UnComponentsSubCaption: ": Pilihan Penghapusan",
	UnDirSubCaption: ": Berkas Lokasi yang dihapus",
	ConfirmSubCaption: ": Konfirmasi",
	UninstallingSubCaption: ": Proses Penghapusan",
	UnCompletedSubCaption: ": Selesai",
	BackBtn: "< &Mundur",
	NextBtn: "&Lanjut >",
	AgreeBtn: "Saya &Setuju",
	AcceptBtn: "Saya s&etuju dengan Perihal Lisensi",
	DontAcceptBtn: "Saya &tidak setuju dengan Perihal Lisensi",
	InstallBtn: "&Instal",
	UninstallBtn: "&Hapus",
	CancelBtn: "Batalkan",
	CloseBtn: "&Tutup",
	BrowseBtn: "Ca&ri...",
	ShowDetailsBtn: "Lihat &perincian",
	ClickNext: "Tekan tombol Lanjut untuk melanjutkan.",
	ClickInstall: "Tekan tombol Instal untuk memulai instalasi.",
	ClickUninstall: "Tekan tombol Hapus untuk memulai penghapusan.",
	Name: "Nama",
	Completed: "Selesai",
	LicenseText: "Silahkan membaca lisensi berikut sebelum memulai instalasi $(^NameDA). Jika anda menyetujui dan menerima semua pernyataan, tekan tombol Saya Setuju.",
	LicenseTextCB: "Silahkan membaca lisensi berikut sebelum memulai instalasi $(^NameDA). Jika anda menyetujui dan menerima semua pernyataan, beri tanda centang. $_CLICK",
	LicenseTextRB: "Silahkan membaca lisensi berikut sebelum memulai instalasi $(^NameDA). Jika anda menyetujui dan menerima semua pernyataan, pilihlah salah satu item dibawah ini. $_CLICK",
	UnLicenseText: "Silahkan membaca lisensi berikut sebelum mulai menghapus $(^NameDA). Jika anda menyetujui dan menerima semua pernyataan, tekan tombol Saya Setuju.",
	UnLicenseTextCB: "Silahkan membaca lisensi berikut sebelum mulai menghapus $(^NameDA). Jika anda menyetujui dan menerima semua pernyataan, beri tanda centang. $_CLICK",
	UnLicenseTextRB: "Silahkan membaca lisensi berikut sebelum mulai menghapus $(^NameDA). Jika anda menyetujui dan menerima semua pernyataan, pilihlah salah satu item dibawah ini. $_CLICK",
	Custom: "Tentukan Sendiri",
	ComponentsText: "Beri tanda centang pada komponen yang akan di instal and hilangkan tanda centang pada komponen yang tidak perlu di instal. $_CLICK",
	ComponentsSubText1: "Pilih tipe instalasi:",
	ComponentsSubText2_NoInstTypes: "Pilih komponen-komponen yang akan di instal:",
	ComponentsSubText2: "Atau, pilih komponen tambahan yang akan di instal:",
	UnComponentsText: "Beri tanda centang pada komponen yang akan dihapus and hilangkan tanda centang pada komponen yang tidak ingin dihapus. $_CLICK",
	UnComponentsSubText1: "Pilih tipe penghapusan:",
	UnComponentsSubText2_NoInstTypes: "Pilih komponen-komponen yang ingin dihapus:",
	UnComponentsSubText2: "Atau, pilih komponen tambahan yang ingin dihapus:",
	DirText: "Program $(^NameDA) akan di instal pada lokasi berikut. Untuk memilih lokasi, tekan tombol Cari kemudian pilih lokasi yang anda kehendaki. $_CLICK",
	DirSubText: "Lokasi instalasi",
	DirBrowseText: "Pilih lokasi instalasi program $(^NameDA):",
	UnDirText: "Proses penghapusan program $(^NameDA) dari lokasi instalasi berikut. Untuk memilih lokasi lainnya, tekan tombol Cari kemudian pilih lokasi yang anda kehendaki. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Pilih lokasi instalasi program $(^NameDA) yang akan dihapus:",
	SpaceAvailable: "\"Ruang yang tersedia:   \"",
	SpaceRequired: "\"Ruang yang dibutuhkan: \"",
	UninstallingText: "$(^NameDA) akan dihapus dari lokasi berikut. $_CLICK",
	UninstallingSubText: "Proses penghapusan dari:",
	FileError: "Tidak dapat membuka berkas untuk menulis: \\r\\n\\t\"$0\"\\r\\nTekan tombol Abort untuk membatalkan instalasi,\\r\\nRetry untuk mencoba lagi, atau\\r\\nIgnore untuk melewati file ini.",
	FileError_NoIgnore: "Tidak dapat membuka berkas untuk menulis: \\r\\n\\t\"$0\"\\r\\nTekan tombol Retry untuk mencoba lagi, atau\\r\\nCancel untuk membatalkan instalasi.",
	CantWrite: "\"Tidak bisa menulis pada berkas: \"",
	CopyFailed: "Gagal menyalin berkas",
	CopyTo: "\"Menyalin ke \"",
	Registering: "\"Memasukkan dalam daftar: \"",
	Unregistering: "\"Menghapus dari daftar: \"",
	SymbolNotFound: "\"Tidak dapat menemukan simbol: \"",
	CouldNotLoad: "\"Tidak dapat memuat: \"",
	CreateFolder: "\"Membuat tempat menyimpan berkas: \"",
	CreateShortcut: "\"Membuat shortcut: \"",
	CreatedUninstaller: "\"Program penghapusan yang dibuat: \"",
	Delete: "\"Menghapus berkas: \"",
	DeleteOnReboot: "\"Akan dihapus saat reboot: \"",
	ErrorCreatingShortcut: "\"Tidak dapat membuat shortcut: \"",
	ErrorCreating: "\"Ada kesalahan saat membuat: \"",
	ErrorDecompressing: "Ada kesalahan saat membuka data! Program Instalasi tidak lengkap?",
	ErrorRegistering: "Ada kesalahan ketika mendaftarkan modul DLL",
	ExecShell: "\"Perintah: \"",
	Exec: "\"Menjalankan: \"",
	Extract: "\"Proses ekstraksi berkas: \"",
	ErrorWriting: "\"Ekstraksi: ada kesalahan saat menulis ke berkas \"",
	InvalidOpcode: "Program instalasi rusak: kode program tidak lengkap",
	NoOLE: "\"OLE tidak ditemukan: \"",
	OutputFolder: "\"Lokasi tujuan: \"",
	RemoveFolder: "\"Menghapus lokasi penyimpanan: \"",
	RenameOnReboot: "\"Memberi nama baru saat reboot: \"",
	Rename: "\"Memberi nama baru: \"",
	Skipped: "\"Dilewati: \"",
	CopyDetails: "Salin perincian ke Clipboard",
	LogInstall: "Catat proses instalasi",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Indonesian$1 = {
	header: header$u,
	id: id$u,
	font: font$u,
	code_page: code_page$u,
	rtl: rtl$u,
	strings: strings$u
};

var header$v = "NLF v6";
var id$v = 2108;
var font$v = {
	name: null,
	size: null
};
var code_page$v = 1252;
var rtl$v = false;
var strings$v = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Socrú $(^Name)",
	UninstallCaption: "Díshuiteáil $(^Name)",
	LicenseSubCaption: ": Comhaontú um Cheadúnas",
	ComponentsSubCaption: ": Roghanna Suiteála",
	DirSubCaption: ": Fillteán Suiteála",
	InstallingSubCaption: ": Suiteáil",
	CompletedSubCaption: ": Críochnaithe",
	UnComponentsSubCaption: ": Roghanna Díshuiteála",
	UnDirSubCaption: ": Fillteán Díshuiteála",
	ConfirmSubCaption: ": Deimhniú",
	UninstallingSubCaption: ": Díshuiteáil",
	UnCompletedSubCaption: ": Críochnaithe",
	BackBtn: "< Ar Ai&s",
	NextBtn: "Ar &Aghaidh >",
	AgreeBtn: "Gl&acaim Leis",
	AcceptBtn: "Táim toilteanach &glacadh le coinníollacha an Chomhaontú um Cheadúnas",
	DontAcceptBtn: "Nílim &toilteanach glacadh le coinníollacha an Chomhaontú um Cheadúnas",
	InstallBtn: "&Suiteáil",
	UninstallBtn: "&Díshuiteáil",
	CancelBtn: "Cealaigh",
	CloseBtn: "&Dún",
	BrowseBtn: "B&rabhsáil...",
	ShowDetailsBtn: "Taispeáin &sonraí",
	ClickNext: "Cliceáil \"Ar Aghaidh\" chun leanúint ar aghaidh.",
	ClickInstall: "Cliceáil \"Suiteáil\" chun tosú.",
	ClickUninstall: "Cliceáil \"Díshuiteáil\" chun tosú.",
	Name: "Ainm",
	Completed: "Críochnaithe",
	LicenseText: "Déan iniúchadh ar an gComhaontú um Cheadúnas sula suiteálann tú $(^NameDA). Má ghlacann tú le gach coinníoll den chomhaontú, cliceáil \"Glacaim Leis\".",
	LicenseTextCB: "Déan iniúchadh ar an gComhaontú um Cheadúnas sula suiteálann tú $(^NameDA). Má ghlacann tú le gach coinníoll den chomhaontú, cliceáil an ticbhosca thíos. $_CLICK",
	LicenseTextRB: "Déan iniúchadh ar an gComhaontú um Cheadúnas sula suiteálann tú $(^NameDA). Má ghlacann tú le gach coinníoll den chomhaontú, roghnaigh an chéad rogha thíos. $_CLICK",
	UnLicenseText: "Déan iniúchadh ar an gComhaontú um Cheadúnas sula ndíshuiteálann tú $(^NameDA). Má ghlacann tú le gach coinníoll den chomhaontú, cliceáil \"Glacaim Leis\".",
	UnLicenseTextCB: "Déan iniúchadh ar an gComhaontú um Cheadúnas sula ndíshuiteálann tú $(^NameDA). Má ghlacann tú le gach coinníoll den chomhaontú, cliceáil an ticbhosca thíos. $_CLICK",
	UnLicenseTextRB: "Déan iniúchadh ar an gComhaontú um Cheadúnas sula ndíshuiteálann tú $(^NameDA). Má ghlacann tú le gach coinníoll den chomhaontú, roghnaigh an chéad rogha thíos. $_CLICK",
	Custom: "Saincheaptha",
	ComponentsText: "Roghnaigh na comhpháirteanna is mian leat a shuiteáil, agus díroghnaigh na comhpháirteanna nach mian leat a shuiteáil. $_CLICK",
	ComponentsSubText1: "Roghnaigh cineál na suiteála:",
	ComponentsSubText2_NoInstTypes: "Roghnaigh na comhpháirteanna is mian leat a shuiteáil:",
	ComponentsSubText2: "Nó, roghnaigh na comhpháirteanna roghnacha is mian leat a shuiteáil:",
	UnComponentsText: "Roghnaigh na comhpháirteanna is mian leat a dhíshuiteáil, agus díroghnaigh na comhpháirteanna nach mian leat a dhíshuiteáil. $_CLICK",
	UnComponentsSubText1: "Roghnaigh cineál na díshuiteála:",
	UnComponentsSubText2_NoInstTypes: "Roghnaigh comhpháirteanna le díshuiteáil:",
	UnComponentsSubText2: "Nó, roghnaigh na comhpháirteanna roghnacha is mian leat a dhíshuiteáil:",
	DirText: "Cuirfidh an Suiteálaí $(^NameDA) san fhillteán seo a leanas. Más mian leat suiteáil i bhfillteán difriúil, cliceáil \"Brabhsáil\" agus roghnaigh fillteán eile. $_CLICK",
	DirSubText: "Sprioc-Fhillteán",
	DirBrowseText: "Roghnaigh an fillteán inar mian leat $(^NameDA) a shuiteáil:",
	UnDirText: "Bainfidh an Suiteálaí $(^NameDA) amach as an bhfillteán seo a leanas. Más mian leat é a dhíshuiteáil ó fhillteán difriúil, cliceáil \"Brabhsáil\" agus roghnaigh fillteán eile. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Roghnaigh an fillteán ar mian leat $(^NameDA) a dhíshuiteáil as:",
	SpaceAvailable: "\"Spás le fáil: \"",
	SpaceRequired: "\"Spás de dhíth: \"",
	UninstallingText: "Díshuiteálfar $(^NameDA) ón fhillteán seo a leanas. $_CLICK",
	UninstallingSubText: "Á dhíshuiteáil ó:",
	FileError: "Earráid agus comhad á scríobh: \\r\\n\\r\\n$0\\r\\n\\r\\nCliceáil \"Abort\" chun an tsuiteáil a stopadh,\\r\\n\"Retry\" chun iarracht eile a dhéanamh, nó\\r\\n\"Ignore\" chun neamhaird a dhéanamh den chomhad seo.",
	FileError_NoIgnore: "Earráid agus comhad á scríobh: \\r\\n\\r\\n$0\\r\\n\\r\\nCliceáil \"Retry\" chun iarracht eile a dhéanamh, nó\\r\\n\"Cancel\" chun an tsuiteáil a stopadh.",
	CantWrite: "\"Ní féidir scríobh: \"",
	CopyFailed: "Theip ar an gcóipeáil",
	CopyTo: "\"Cóipeáil go \"",
	Registering: "\"Clárú: \"",
	Unregistering: "\"Díchlárú: \"",
	SymbolNotFound: "\"Níorbh fhéidir siombail a aimsiú: \"",
	CouldNotLoad: "\"Níorbh fhéidir luchtú: \"",
	CreateFolder: "\"Cruthaigh fillteán: \"",
	CreateShortcut: "\"Cruthaigh aicearra: \"",
	CreatedUninstaller: "\"Cruthaíodh díshuiteálaí: \"",
	Delete: "\"Scrios comhad: \"",
	DeleteOnReboot: "\"Scrios ag am atosaithe: \"",
	ErrorCreatingShortcut: "\"Earráid agus aicearra á chruthú: \"",
	ErrorCreating: "\"Earráid le linn cruthaithe: \"",
	ErrorDecompressing: "Earráid agus sonraí á ndíchomhbhrú! Suiteálaí truaillithe?",
	ErrorRegistering: "Earráid agus DLL á chlárú",
	ExecShell: "\"Blaosc: \"",
	Exec: "\"Rith: \"",
	Extract: "\"Bain Amach: \"",
	ErrorWriting: "\"Extract: earráid le linn scríofa \"",
	InvalidOpcode: "Díshuiteálaí truaillithe: cód neamhbhailí oibríochta",
	NoOLE: "\"Gan OLE le haghaidh: \"",
	OutputFolder: "\"Fillteán aschurtha: \"",
	RemoveFolder: "\"Bain fillteán: \"",
	RenameOnReboot: "\"Athainmnigh ag am atosaithe: \"",
	Rename: "\"Athainmnigh: \"",
	Skipped: "\"Neamhaird déanta de: \"",
	CopyDetails: "Cóipeáil Sonraí go dtí an Ghearrthaisce",
	LogInstall: "Logáil an próiseas suiteála",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Irish$1 = {
	header: header$v,
	id: id$v,
	font: font$v,
	code_page: code_page$v,
	rtl: rtl$v,
	strings: strings$v
};

var header$w = "NLF v6";
var id$w = 1040;
var font$w = {
	name: null,
	size: null
};
var code_page$w = 1252;
var rtl$w = false;
var strings$w = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Installazione di $(^Name)",
	UninstallCaption: "Disinstallazione di $(^Name)",
	LicenseSubCaption: ": Accordo di licenza",
	ComponentsSubCaption: ": Opzioni installazione",
	DirSubCaption: ": Cartella installazione",
	InstallingSubCaption: ": Installazione",
	CompletedSubCaption: ": Installazione completata",
	UnComponentsSubCaption: ": Opzioni disinstallazione",
	UnDirSubCaption: ": Cartella disinstallazione",
	ConfirmSubCaption: ": Conferma",
	UninstallingSubCaption: ": Disinstallazione",
	UnCompletedSubCaption: ": Disisntallazione completata",
	BackBtn: "< &Indietro",
	NextBtn: "&Avanti >",
	AgreeBtn: "&Accetto",
	AcceptBtn: "&Accetto le condizioni della licenza",
	DontAcceptBtn: "&Non accetto le condizioni della licenza",
	InstallBtn: "Ins&talla",
	UninstallBtn: "&Disinstalla",
	CancelBtn: "Annulla",
	CloseBtn: "&Fine",
	BrowseBtn: "S&foglia...",
	ShowDetailsBtn: "Visualizza &dettagli",
	ClickNext: "Per proseguire, seleziona 'Avanti'.",
	ClickInstall: "Per avviare l'installazione, seleziona 'Installa'.",
	ClickUninstall: "Per avviare la disinstallazione, seleziona 'Disinstalla'.",
	Name: "Nome",
	Completed: "Installazione completata",
	LicenseText: "Leggi la licenza prima di procedere con l'installazione di $(^NameDA). Se accetti le condizioni della licenza, seleziona 'Accetto'.",
	LicenseTextCB: "Leggi licenza prima di procedere con l'installazione di $(^NameDA). Se accetti tutte le condizioni della licenza, seleziona la casella sottostante. $_CLICK",
	LicenseTextRB: "Leggi la licenza prima di procedere con l'installazione di $(^NameDA). Se accetti tutte le condizioni della licenza, seleziona la prima delle opzioni sottoindicate. $_CLICK",
	UnLicenseText: "Leggi la licenza prima di procedere con la disinstallazione di $(^NameDA). Se accetti tutte le condizioni della licenza, seleziona 'Accetto'. $_CLICK",
	UnLicenseTextCB: "Leggi la licenza prima di procedere con la disinstallazione di $(^NameDA). Se accetti tutte le condizioni della licenza, seleziona la casella sottostante. $_CLICK",
	UnLicenseTextRB: "Leggi la licenza prima di procedere con la disinstallazione di $(^NameDA). Se accetti tutte le condizioni della licenza, seleziona la prima delle opzioni sottoindicate. $_CLICK",
	Custom: "Personalizzata",
	ComponentsText: "Seleziona componenti da installare.",
	ComponentsSubText1: "Seleziona tipo installazione:",
	ComponentsSubText2_NoInstTypes: "Seleziona componenti da installare:",
	ComponentsSubText2: "Oppure, seleziona componenti opzionali da installare:",
	UnComponentsText: "Seleziona componenti da disinstallare.",
	UnComponentsSubText1: "Seleziona tipo disinstallazione:",
	UnComponentsSubText2_NoInstTypes: "Seleziona componenti da disinstallare:",
	UnComponentsSubText2: "Oppure, seleziona componenti opzionali da disinstallare :",
	DirText: "Questa procedura installerà $(^NameDA) in questa cartella.\\r\\nPer installare in una cartella diversa, seleziona 'Sfoglia' e scegli un'altra cartella.\\r\\n$_CLICK",
	DirSubText: "Cartella destinazione",
	DirBrowseText: "Seleziona la cartella dove installare $(^NameDA):",
	UnDirText: "Questa procedura disinstallerà $(^NameDA) da questa cartella.\\r\\nPer disinstallare da una cartella diversa, seleziona 'Sfoglia' e scegli un'altra cartella.\\r\\n$_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Seleziona la cartella dalla quale disinstallare $(^NameDA):",
	SpaceAvailable: "\"Spazio disponibile: \"",
	SpaceRequired: "\"Spazio richiesto: \"",
	UninstallingText: "$(^NameDA) verrà disinstallato da questa cartella.\\r\\n$_CLICK",
	UninstallingSubText: "Rimozione da:",
	FileError: "Errore nell'apertura del file per la scrittura: \\r\\n\\t\"$0\"\\r\\nSeleziona 'Termina' per interrompere l'installazione,\\r\\n'Riprova' per ritentare, oppure\\r\\n'Ignora' per saltare questo file.",
	FileError_NoIgnore: "Errore nell'apertura del file per la scrittura: \\r\\n\\t\"$0\"\\r\\nSeleziona 'Riprova' per ritentare, oppure\\r\\n'Termina' per interrompere l'installazione",
	CantWrite: "\"Impossibile scrivere: \"",
	CopyFailed: "Copia fallita",
	CopyTo: "\"Copia in \"",
	Registering: "\"Registrazione di: \"",
	Unregistering: "\"Deregistrazione di: \"",
	SymbolNotFound: "\"Impossibile trovare il simbolo: \"",
	CouldNotLoad: "\"Impossibile caricare: \"",
	CreateFolder: "\"Creazione cartella: \"",
	CreateShortcut: "\"Creazione collegamento: \"",
	CreatedUninstaller: "\"Creazione programma disinstallazione: \"",
	Delete: "\"Eliminazione file: \"",
	DeleteOnReboot: "\"Elimina al riavvio: \"",
	ErrorCreatingShortcut: "\"Errore nella creazione del collegamento: \"",
	ErrorCreating: "\"Errore nella creazione di: \"",
	ErrorDecompressing: "Errore nella decompressione dei dati! Probabile programma di installazione corrotto.",
	ErrorRegistering: "Errore nella registrazione della DLL",
	ExecShell: "\"ExecShell: \"",
	Exec: "\"Esecuzione di: \"",
	Extract: "\"Estrazione di: \"",
	ErrorWriting: "\"Estrazione: errore nella scrittura nel file \"",
	InvalidOpcode: "Programma di installazione corrotto: opcode non valido",
	NoOLE: "\"Nessuna OLE per: \"",
	OutputFolder: "\"Cartella destinazione: \"",
	RemoveFolder: "\"Rimozione cartella: \"",
	RenameOnReboot: "\"Al riavvio rinomina: \"",
	Rename: "Rinomina ",
	Skipped: "\"Saltato: \"",
	CopyDetails: "Copia i dettagli negli Appunti",
	LogInstall: "Registro eventi processo installazione",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Italian$1 = {
	header: header$w,
	id: id$w,
	font: font$w,
	code_page: code_page$w,
	rtl: rtl$w,
	strings: strings$w
};

var header$x = "NLF v6";
var id$x = 1041;
var font$x = {
	name: "ＭＳ Ｐゴシック",
	size: 9
};
var code_page$x = 932;
var rtl$x = false;
var strings$x = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "$(^Name) セットアップ",
	UninstallCaption: "$(^Name) アンインストール",
	LicenseSubCaption: "：ライセンス契約書",
	ComponentsSubCaption: "：インストール オプション",
	DirSubCaption: "：インストール フォルダ",
	InstallingSubCaption: "：インストール",
	CompletedSubCaption: "：完了",
	UnComponentsSubCaption: ": アンインストール オプション",
	UnDirSubCaption: ": アンインストール フォルダ",
	ConfirmSubCaption: "：確認",
	UninstallingSubCaption: "：アンインストール",
	UnCompletedSubCaption: "：完了",
	BackBtn: "< 戻る(&B)",
	NextBtn: "次へ(&N) >",
	AgreeBtn: "同意する(&A)",
	AcceptBtn: "このライセンス契約書に同意します(&A)",
	DontAcceptBtn: "このライセンス契約書には同意できません(&D)",
	InstallBtn: "インストール",
	UninstallBtn: "ｱﾝｲﾝｽﾄｰﾙ(&U)",
	CancelBtn: "キャンセル",
	CloseBtn: "閉じる(&C)",
	BrowseBtn: "参照(&R)...",
	ShowDetailsBtn: "詳細を表示(&D)",
	ClickNext: "続けるには [次へ] をクリックして下さい。",
	ClickInstall: "インストールを始めるには [インストール] をクリックして下さい。",
	ClickUninstall: "アンインストールを始めるには [ｱﾝｲﾝｽﾄｰﾙ] をクリックして下さい。",
	Name: "アプリケーション",
	Completed: "完了",
	LicenseText: "$(^NameDA)をインストールする前に、ライセンス契約書を確認して下さい。契約書の全ての条件に同意するならば、[同意する] ボタンをクリックして下さい。",
	LicenseTextCB: "$(^NameDA)をインストールする前に、ライセンス契約書を確認して下さい。契約書の全ての条件に同意するならば、下のチェックボックスをクリックして下さい。 $_CLICK",
	LicenseTextRB: "$(^NameDA)をインストールする前に、ライセンス契約書を確認して下さい。契約書の全ての条件に同意するならば、下に表示されているオプションのうち、最初のものを選んで下さい。 $_CLICK",
	UnLicenseText: "$(^NameDA)をアンインストールする前に、ライセンス契約書を確認して下さい。契約書の全ての条件に同意するならば、[同意する] ボタンをクリックして下さい。",
	UnLicenseTextCB: "$(^NameDA)をアンインストールする前に、ライセンス契約書を確認して下さい。契約書の全ての条件に同意するならば、下のチェックボックスをクリックして下さい。 $_CLICK",
	UnLicenseTextRB: "$(^NameDA)をアンインストールする前に、ライセンス契約書を確認して下さい。契約書の全ての条件に同意するならば、下に表示されているオプションのうち、最初のものを選んで下さい。 $_CLICK",
	Custom: "カスタム",
	ComponentsText: "インストールしたいコンポーネントにチェックを付けて下さい。不要なものについては、チェックを外して下さい。 $_CLICK",
	ComponentsSubText1: "インストール タイプを選択：",
	ComponentsSubText2_NoInstTypes: "インストール コンポーネントを選択：",
	ComponentsSubText2: "または、インストール オプション コンポーネントを選択：",
	UnComponentsText: "アンインストールしたいコンポーネントにチェックを付けて下さい。そうでないものについては、チェックを外して下さい。 $_CLICK",
	UnComponentsSubText1: "アンインストール タイプを選択：",
	UnComponentsSubText2_NoInstTypes: "アンインストール コンポーネントを選択：",
	UnComponentsSubText2: "または、アンインストール オプション コンポーネントを選択：",
	DirText: "$(^NameDA)を以下のフォルダにインストールします。異なったフォルダにインストールするには、[参照] を押して、別のフォルダを選択してください。 $_CLICK",
	DirSubText: "インストール先 フォルダ",
	DirBrowseText: "$(^NameDA)をインストールするフォルダを選択してください：",
	UnDirText: "$(^NameDA)を以下のフォルダからアンインストールします。異なったフォルダからアンインストールするには、[参照] を押して、別のフォルダを選択してください。 $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "$(^NameDA)をアンインストールするフォルダを選択してください：",
	SpaceAvailable: "利用可能なディスクスペース： ",
	SpaceRequired: "必要なディスクスペース： ",
	UninstallingText: "$(^NameDA)は、以下のフォルダからアンインストールされます。 $_CLICK",
	UninstallingSubText: "アンインストール元：",
	FileError: "初期ファイルの作成エラー：\\r\\n\\t\"$0\"\\r\\nインストールを中止するには中止を,\\r\\n再びこのファイルの作成を試みるには再試行を, また\\r\\nこのファイルをスキップして続けるには無視を押してください",
	FileError_NoIgnore: "初期ファイルの作成エラー: \\r\\n\\t\"$0\"\\r\\n再びこのファイルの作成を試みるには再試行を, また\\r\\nインストールを中止するにはキャンセルを押して下さい",
	CantWrite: "作成できません：",
	CopyFailed: "コピーは失敗しました",
	CopyTo: "コピーします",
	Registering: "登録中:",
	Unregistering: "登録解除中:",
	SymbolNotFound: "シンボルを見つけることができません：",
	CouldNotLoad: "ロードすることができません：",
	CreateFolder: "フォルダの作成：",
	CreateShortcut: "ショートカットの作成：",
	CreatedUninstaller: "アンインストーラの作成：",
	Delete: "ファイルの削除：",
	DeleteOnReboot: "リブート時に削除：",
	ErrorCreatingShortcut: "ショートカットの作成エラー：",
	ErrorCreating: "作成エラー：",
	ErrorDecompressing: "データの抽出エラー\\r\\n\\r\\nインストーラが破損しています。",
	ErrorRegistering: "DLLの登録エラー",
	ExecShell: "拡張子の関連付け実行: ",
	Exec: "実行：",
	Extract: "抽出：",
	ErrorWriting: "抽出：ファイル作成エラー",
	InvalidOpcode: "インストールの不正：無効なopcode",
	NoOLE: "OLEがありません：",
	OutputFolder: "出力先フォルダ：",
	RemoveFolder: "フォルダの削除：",
	RenameOnReboot: "リブート時に名前の変更：",
	Rename: "名前の変更：",
	Skipped: "スキップ：",
	CopyDetails: "クリップボードへ詳細をコピー",
	LogInstall: "インストールプロセスをログヘ記録",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Japanese$1 = {
	header: header$x,
	id: id$x,
	font: font$x,
	code_page: code_page$x,
	rtl: rtl$x,
	strings: strings$x
};

var header$y = "NLF v6";
var id$y = 1042;
var font$y = {
	name: "굴림",
	size: 9
};
var code_page$y = 949;
var rtl$y = false;
var strings$y = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "$(^Name) 설치",
	UninstallCaption: "$(^Name) 제거",
	LicenseSubCaption: ": 사용권 계약 동의",
	ComponentsSubCaption: ": 설치 옵션",
	DirSubCaption: ": 폴더 지정",
	InstallingSubCaption: ": 파일 설치중",
	CompletedSubCaption: ": 설치 완료",
	UnComponentsSubCaption: ": 제거 옵션",
	UnDirSubCaption: ": 제거 폴더",
	ConfirmSubCaption: ": 확인 ",
	UninstallingSubCaption: ": 제거중",
	UnCompletedSubCaption: ": 제거 완료",
	BackBtn: "< 뒤로",
	NextBtn: "다음 >",
	AgreeBtn: "동의함",
	AcceptBtn: "위 사항에 동의합니다.",
	DontAcceptBtn: "동의하지 않습니다.",
	InstallBtn: "설치",
	UninstallBtn: "제거",
	CancelBtn: "취소",
	CloseBtn: "닫음",
	BrowseBtn: "찾아보기...",
	ShowDetailsBtn: "자세히 보기",
	ClickNext: "계속하시려면 '다음' 버튼을 눌러 주세요.",
	ClickInstall: "설치를 시작하시려면 '설치' 버튼을 눌러 주세요.",
	ClickUninstall: "'제거' 버튼을 누르면 제거가 시작됩니다.",
	Name: "이름",
	Completed: "완료",
	LicenseText: "$(^NameDA)(을)를 설치하기 전에 사용권 계약 내용을 살펴보시기 바랍니다. 내용에 동의하셨다면 '동의함'을 눌러 주세요.",
	LicenseTextCB: "$(^NameDA)(을)를 설치하기 전에 사용권 계약 내용을 살펴보시기 바랍니다. 내용에 동의하셨다면 아래 사항을 체크해 주세요. $_CLICK",
	LicenseTextRB: "$(^NameDA)(을)를 설치하기 전에 사용권 계약 내용을 살펴보시기 바랍니다. 내용에 동의하셨다면 아래 옵션을 선택해 주세요. $_CLICK",
	UnLicenseText: "$(^NameDA)(을)를 제거하기 전에 사용권 계약 내용을 살펴보시기 바랍니다. 내용에 동의하셨다면 '동의함'을 눌러 주세요.",
	UnLicenseTextCB: "$(^NameDA)(을)를 제거하기 전에 사용권 계약 내용을 살펴보시기 바랍니다. 내용에 동의하셨다면 아래 사항을 체크해 주세요. $_CLICK",
	UnLicenseTextRB: "$(^NameDA)(을)를 제거하기 전에 사용권 계약 내용을 살펴보시기 바랍니다. 내용에 동의하셨다면 아래 옵션을 선택해 주세요. $_CLICK",
	Custom: "사용자 정의",
	ComponentsText: "설치를 원하시는 구성 요소를 선택하여 주시기 바랍니다. $_CLICK",
	ComponentsSubText1: "설치 형태 선택:",
	ComponentsSubText2_NoInstTypes: "설치하려는 구성 요소 선택:",
	ComponentsSubText2: "구성요소 직접 선택:",
	UnComponentsText: "제거를 원하는 구성 요소를 체크해 주시기 바랍니다. $_CLICK",
	UnComponentsSubText1: "제거 형태 선택:",
	UnComponentsSubText2_NoInstTypes: "제거하려는 구성 요소 선택:",
	UnComponentsSubText2: "제거하려는 구성요소 직접 선택:",
	DirText: "$(^NameDA)(을)를 다음 폴더에 설치할 예정입니다. \\r\\n다른 폴더에 설치하고 싶으시면 '찾아보기' 버튼을 눌러서 다른 폴더를 선택해 주세요. $_CLICK",
	DirSubText: "설치 폴더",
	DirBrowseText: "$(^NameDA)(을)를 다음 폴더에 설치합니다:",
	UnDirText: "$(^NameDA)(을)를 다음 폴더에서 제거할 예정입니다. \\r\\n다른 폴더에서 제거하고 싶으시면 '찾아보기' 버튼을 눌러서 다른 폴더를 선택해 주세요. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "$(^NameDA)(을)를 다음 폴더에서 제거 합니다:",
	SpaceAvailable: "\"남은 디스크 공간: \"",
	SpaceRequired: "\"필요한 디스크 공간: \"",
	UninstallingText: "시스템에서 $(^NameDA)(을)를 제거 할 것입니다. $_CLICK",
	UninstallingSubText: "제거 대상:",
	FileError: "다음 파일을 열 수 없습니다.: \\r\\n\\t\"$0\"\\r\\n'중단'을 눌러 설치를 종료하거나,\\r'다시 시도'를 눌러 다시 시도해 보거나,\\r'무시'를 눌러 이 파일을 건너 뛰세요.",
	FileError_NoIgnore: "다음 파일을 열 수 없습니다.: \\r\\n\\t\"$0\"\\r\\n'다시 시도'를 눌러 다시 시도해 보거나,\\r'취소'를 눌러 설치를 종료하세요.",
	CantWrite: "\"기록할 수 없음: \"",
	CopyFailed: "복사 실패",
	CopyTo: "\"파일 복사 \"",
	Registering: "\"등록중: \"",
	Unregistering: "\"등록 해제중: \"",
	SymbolNotFound: "\"심볼을 찾을 수 없음: \"",
	CouldNotLoad: "\"불러올 수 없음: \"",
	CreateFolder: "\"폴더 생성: \"",
	CreateShortcut: "\"바로 가기 생성: \"",
	CreatedUninstaller: "\"언인스톨러 생성: \"",
	Delete: "\"파일 삭제: \"",
	DeleteOnReboot: "\"재부팅시 삭제: \"",
	ErrorCreatingShortcut: "\"바로 가기 생성 오류: \"",
	ErrorCreating: "\"생성 실패: \"",
	ErrorDecompressing: "압축 해제중 오류 발생! 설치 파일이 손상되었습니다.",
	ErrorRegistering: "DLL 등록 실패",
	ExecShell: "\"쉘 실행: \"",
	Exec: "\"실행: \"",
	Extract: "\"압축 해제: \"",
	ErrorWriting: "\"압축 해제: 파일을 기록하는 도중 오류 발생 \"",
	InvalidOpcode: "인스톨러 손상됨: 잘못된 실행코드",
	NoOLE: "\"OLE 정보 없음: \"",
	OutputFolder: "\"대상 폴더: \"",
	RemoveFolder: "\"폴더 삭제: \"",
	RenameOnReboot: "\"재부팅시 이름 변경: \"",
	Rename: "\"이름 변경: \"",
	Skipped: "\"건너뜀: \"",
	CopyDetails: "자세한 내용을 클립보드로 복사",
	LogInstall: "설치 로그 작성",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Korean$1 = {
	header: header$y,
	id: id$y,
	font: font$y,
	code_page: code_page$y,
	rtl: rtl$y,
	strings: strings$y
};

var header$z = "NLF v6";
var id$z = 9999;
var font$z = {
	name: null,
	size: null
};
var code_page$z = 1254;
var rtl$z = false;
var strings$z = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "$(^Name) Sazkirin",
	UninstallCaption: "$(^Name) Rakirin",
	LicenseSubCaption: ": Peymana Lîsansê",
	ComponentsSubCaption: ": Vebijêrkên Sazkirinê",
	DirSubCaption: ": Peldanka Sazkirinê",
	InstallingSubCaption: ": Tê Sazkirin",
	CompletedSubCaption: ": Qediya",
	UnComponentsSubCaption: ": Vebijêrkên Rakirinê",
	UnDirSubCaption: ": Peldanka Rakirinê",
	ConfirmSubCaption: ": Erêkirin",
	UninstallingSubCaption: ": Tê Rakirin",
	UnCompletedSubCaption: ": Qediya",
	BackBtn: "< &Vegere",
	NextBtn: "&Bidomîne >",
	AgreeBtn: "&Ez Dipejirînim",
	AcceptBtn: "Şertên Peymanê &Dipejirînim",
	DontAcceptBtn: "Şertên Peymanê Napejirînim",
	InstallBtn: "&Saz Bike",
	UninstallBtn: "&Rake",
	CancelBtn: "Betal",
	CloseBtn: "&Bigire",
	BrowseBtn: "&Çavlêgerîn...",
	ShowDetailsBtn: "Hûragahiyan &Nîşan Bide",
	ClickNext: "Ji bo berdewamê 'Bidomîne'yê bitikîne.",
	ClickInstall: "Ji bo destpêka sazkirinê 'Saz Bike'yê bitikîne.",
	ClickUninstall: "Ji bo destpêka rakirinê 'Rake' bitikîne.",
	Name: "nav",
	Completed: "Qediya",
	LicenseText: "Ji kerema xwe re berî tu bernameya $(^NameDA) saz bikî, çavekî li peymana lîsansê bigerîne. Heke tu hemû şertên peymanê dipejirînî, 'Ez Dipejirînim'ê bitikîne.",
	LicenseTextCB: "Ji kerema xwe re berî tu bernameya $(^NameDA) saz bikî, çavekî li peymana lîsansê bigerîne. Heke tu hemû şertan dipejirînî, zeviya erêkirinê ya jêrîn dagire. $_CLICK",
	LicenseTextRB: "Ji kerema xwe re berî tu bernameya $(^NameDA) saz bikî çavekî li peymana lîsansê bigerîne. Heke tu hemû şertên peymanê dipejirînî, zeviya vebijêrkê ya jêrîn dagire. $_CLICK",
	UnLicenseText: "Ji kerema xwe re berî tu bernameya $(^NameDA) rakî, çavekî li peymana lîsansê bigerîne. Heke tu hemû şertên peymanê dipejirînî, 'Ez Dipejirînim'ê bitikîn.",
	UnLicenseTextCB: "Ji kerema xwe re berî tu bernameya $(^NameDA) ji pergala xwe rakî, çavekî li peymana lîsansê bigerîne. Heke tu hemû şertên peymanê dipejirînî, zeviya jêrîn a erêkirinê dagire. $_CLICK",
	UnLicenseTextRB: "Ji kerema xwe re berî tu bernameya $(^NameDA) ji pergala xwe rakî, çavekî li peymana lîsansê bigerîne. Heke tu hemû şertên peymanê dipejirînî, zeviya vebijêrkê ya jêrîn dagire. $_CLICK",
	Custom: "Taybet",
	ComponentsText: "Beşên tu dixwazî saz bikî hilbijêre û niqirên 'check' beşên tu naxwazî werin sazkirin rake. $_CLICK",
	ComponentsSubText1: "Awayê sazkirinê hilbijêre:",
	ComponentsSubText2_NoInstTypes: "Beşên dê werin sazkirin hilbijêre:",
	ComponentsSubText2: "an jî, beşên beşên tu dixwazî werin sazkirin hilbijêre:",
	UnComponentsText: "Beşên tu dixwazî rakî hilbijêre, an jî niqira 'check'a ber beşên tu daxwazî were rakirin, rake. $_CLICK",
	UnComponentsSubText1: "Awayê rakirinê hilbijêre:",
	UnComponentsSubText2_NoInstTypes: "Beşên dê werin rakirin hilbijêre:",
	UnComponentsSubText2: "an jî beşên tu dixwazî werin rakirin hilbijêre:",
	DirText: "$(^NameDA) dê ji aliyê sazkirinê ve li peldanka jêrîn were sazkirin. Ji bo tu li peldankeke din saz bikî 'Çavlêgerîn'ê bitikîne û peldankeke din hilbijêre. $_CLICK",
	DirSubText: "Peldanka Armanckirî",
	DirBrowseText: "Peldanka tu dixwazî bernameya $(^NameDA) lê were sazkirin hilbijêre:",
	UnDirText: "$(^NameDA) dê ji aliyê sazkirinê ve ji peldanka jêrîn were rakirin. Ji bo tu ji peldankeke cuda rakî 'Çavlêgerîn'ê bitikîne û peldankeke din hilbijêre. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Peldanka tu dixwazî bernameya $(^NameDA) jê were rakirin hilbijêre:",
	SpaceAvailable: "\"Herêma vala ku dikare were bikaranîn: \"",
	SpaceRequired: "\"Herêma vala ya pêwist: \"",
	UninstallingText: "Bernameya $(^NameDA) dê ji peldanka jêrîn were rakirin. $_CLICK",
	UninstallingSubText: "tê rakirin:",
	FileError: "Dosya ji bo nivîsandinê venebû: \\r\\n\\t\"$0\"\\r\\nJi bo destjêberdana sazkirinê abort'ê bitikîne,\\r\\nji bo ceribandina ji nû ve  retry'ê , an jî\\r\\nji bo tu dosiyê tune bihesibînî û berdewam bikî ignore'yê bitikîne",
	FileError_NoIgnore: "Dosya ji bo nivîsandinê vebenebû: \\r\\n\\t\"$0\"\\r\\nJi bo nivîsandina ji nû ve retry'yê, an jî\\r\\nJi bo destjêberdana sazkirinê abort'ê hilbijêre",
	CantWrite: "\"Nehate Nivîsandin: \"",
	CopyFailed: "Çewtiya Jibergirtinê",
	CopyTo: "\"Ji Ber Bigire \"",
	Registering: "\"Tê Tomarkirin: \"",
	Unregistering: "\"Tomarî Tê Jêbirin: \"",
	SymbolNotFound: "\"Dawêr Nehate Dîtin: \"",
	CouldNotLoad: "\"Nehate Barkirin: \"",
	CreateFolder: "\"Peldankê Çêke: \"",
	CreateShortcut: "\"Kineriyê Çêke: \"",
	CreatedUninstaller: "\"Sêrbazê Rakirinê Hate Çêkirin: \"",
	Delete: "\"Dosyayê Jê Bibe: \"",
	DeleteOnReboot: "\"Dema ji nû ve dest pê kir dosiyê jê bibe: \"",
	ErrorCreatingShortcut: "\"Dema çêkirina kineriyê çewtî derket: \"",
	ErrorCreating: "\"Çewtiya çêkirinê: \"",
	ErrorDecompressing: "Di dema vekirina daneyan de çewtî derket! Sazkirina Çewt?",
	ErrorRegistering: "Çewtiya tomariya DLL",
	ExecShell: "\"Qalikê Xebatê: \"",
	Exec: "\"Bixebitîne: \"",
	Extract: "\"Veke: \"",
	ErrorWriting: "\"Veke: Dema li dosiyê hate nivîsîn çewtiyek derket \"",
	InvalidOpcode: "Sazkirina Xirabe: koda nerast pêkanînê",
	NoOLE: "\"OLE nehate dîtin: \"",
	OutputFolder: "\"Peldanka derketinê: \"",
	RemoveFolder: "\"Peldankê jê bibe: \"",
	RenameOnReboot: "\"Dema ji nû hate destpêkirin ji nû ve bi nav bike: \"",
	Rename: "\"Nav Biguhere: \"",
	Skipped: "\"Hate gavkirin: \"",
	CopyDetails: "Hûragahiyan li Pano'yê binivîse",
	LogInstall: "Pêkanîna sazkirinê li lênûska rewşê binivîse",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Kurdish$1 = {
	header: header$z,
	id: id$z,
	font: font$z,
	code_page: code_page$z,
	rtl: rtl$z,
	strings: strings$z
};

var header$A = "NLF v6";
var id$A = 1062;
var font$A = {
	name: null,
	size: null
};
var code_page$A = 1257;
var rtl$A = false;
var strings$A = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "'$(^Name)' Uzstādīšana",
	UninstallCaption: "'$(^Name)' Atinstalēšana",
	LicenseSubCaption: ": Licences līgums",
	ComponentsSubCaption: ": Uzstādīšanas opcijas",
	DirSubCaption: ": Uzstādīšanas mape",
	InstallingSubCaption: ": Notiek uzstādīšana",
	CompletedSubCaption: ": Uzstādīšana pabeigta.",
	UnComponentsSubCaption: ": Atinstalēšanas opcijas",
	UnDirSubCaption: ": Atinstalēšanas mape",
	ConfirmSubCaption: ": Apstiprināšana",
	UninstallingSubCaption: ": Notiek atinstalēšana",
	UnCompletedSubCaption: ": Atinstalēšana pabeigta",
	BackBtn: "< &Atpakaļ",
	NextBtn: "&Tālāk >",
	AgreeBtn: "Es &piekrītu",
	AcceptBtn: "Es &piekrītu licences līguma noteikumiem",
	DontAcceptBtn: "Es &nepiekrītu licences līguma noteikumiem",
	InstallBtn: "&Uzstādīt",
	UninstallBtn: "&Atinstalēt",
	CancelBtn: "Atcelt",
	CloseBtn: "Ai&zvērt",
	BrowseBtn: "Pā&rlūkot...",
	ShowDetailsBtn: "Parādīt &detaļas",
	ClickNext: "Spiediet 'Tālāk', lai turpinātu.",
	ClickInstall: "Spiediet 'Uzstādīt', lai sāktu uzstādīšanas procesu.",
	ClickUninstall: "Spiediet 'Atinstalēt', lai sāktu atinstalēšanas procesu.",
	Name: "Vārds",
	Completed: "Uzstādīšana pabeigta",
	LicenseText: "Lūdzu izlasiet licences līgumu pirms '$(^NameDA)' uzstādīšanas. Ja piekrītat licences līguma noteikumiem, tad spiediet 'Es piekrītu'.",
	LicenseTextCB: "Lūdzu izlasiet licences līgumu pirms '$(^NameDA)' uzstādīšanas. Ja piekrītat licences līguma noteikumiem, tad atzīmējiet izvēles rūtiņu. $_CLICK",
	LicenseTextRB: "Lūdzu izlasiet licences līgumu pirms '$(^NameDA)' uzstādīšanas. Ja piekrītat licences līguma noteikumiem, tad izvēlieties pirmo zemākesošo opciju. $_CLICK",
	UnLicenseText: "Lūdzu izlasiet licences līgumu pirms '$(^NameDA)' atinstalēšanas. Ja piekrītat licences līguma noteikumiem, tad spiediet 'Es piekrītu'.",
	UnLicenseTextCB: "Lūdzu izlasiet licences līgumu pirms '$(^NameDA)' atinstalēšanas. Ja piekrītat licences līguma noteikumiem, tad atzīmējiet izvēles rūtiņu. $_CLICK",
	UnLicenseTextRB: "Lūdzu izlasiet licences līgumu pirms '$(^NameDA)' atinstalēšanas. Ja piekrītat licences līguma noteikumiem, tad izvēlieties zemākesošo opciju. $_CLICK",
	Custom: "Pielāgots",
	ComponentsText: "Izvēlieties, kurus komponentus vēlaties uzstādīt un neiezīmējiet tos, kurus nevēlaties uzstādīt. $_CLICK",
	ComponentsSubText1: "Izvēlieties uzstādīšanas veidu:",
	ComponentsSubText2_NoInstTypes: "Izvēlieties uzstādāmos komponentus:",
	ComponentsSubText2: "Vai arī – izvēlieties tikai nepieciešamos komponentus, kurus vēlaties uzstādīt:",
	UnComponentsText: "Izvēlieties, kurus komponentus atinstalēt un neiezīmējiet tos, kurus nevēlaties atinstalēt. $_CLICK",
	UnComponentsSubText1: "Izvēlieties atinstalēšanas veidu:",
	UnComponentsSubText2_NoInstTypes: "Izvēlieties atinstalējamos komponentus:",
	UnComponentsSubText2: "Vai arī – izvēlieties tikai nepieciešamos komponentus, kurus vēlaties atinstalēt:",
	DirText: "'$(^NameDA)' tiks uzstādīta šajā mapē. Lai to uzstādītu citā mapē, nospiediet 'Pārlūkot' un izvēlieties citu mapi. $_CLICK",
	DirSubText: "Uzstādīšanas mape",
	DirBrowseText: "Izvēlieties mapi, kurā uzstādīt '$(^NameDA)':",
	UnDirText: "'$(^NameDA)' tiks atinstalēta no šīs mapes. Lai to atinstalētu no citas mapes, nospiediet 'Pārlūkot' un izvēlieties citu mapi. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Izvēlieties mapi, no kuras atinstalēt '$(^NameDA)':",
	SpaceAvailable: "\"Pieejamais diska apjoms: \"",
	SpaceRequired: "\"Nepieciešamais diska apjoms: \"",
	UninstallingText: "'$(^NameDA)' tiks atinstalēta no šīs mapes. $_CLICK",
	UninstallingSubText: "Atinstalēšana no:",
	FileError: "Kļūda atverot failu rakstīšanai: \\r\\n\\t\"$0\"\\r\\nNospiediet 'Atcelt', lai atceltu uzstādīšanas procesu,\\r\\n'Mēģināt vēlreiz', lai atkārtoti mēģinātu rakstīt failā vai\\r\\n'Ignorēt', lai izlaistu šī faila uzstādīšanu",
	FileError_NoIgnore: "Kļūda atverot failu rakstīšanai: \\r\\n\\t\"$0\"\\r\\nNospiediet 'Atcelt', lai pārtrauktu uzstādīšanas procesu",
	CantWrite: "\"Nevar ierakstīt: \"",
	CopyFailed: "Kopēšana neizdevās",
	CopyTo: "\"Kopē uz \"",
	Registering: "\"Reģistrē: \"",
	Unregistering: "\"Atreģistrē: \"",
	SymbolNotFound: "\"Simbols nav atrasts: \"",
	CouldNotLoad: "\"Nav iespējams ielādēt: \"",
	CreateFolder: "\"Izveido mapi: \"",
	CreateShortcut: "\"Izveido saīsni: \"",
	CreatedUninstaller: "\"Izveidots atinstalētājs: \"",
	Delete: "\"Dzēš failu: \"",
	DeleteOnReboot: "\"Dzēst pēc pārstartēšanas: \"",
	ErrorCreatingShortcut: "\"Kļūda veidojot saīsni: \"",
	ErrorCreating: "\"Kļūda veidojot: \"",
	ErrorDecompressing: "Kļūda atkompresējot datus! Bojāta instalācija?",
	ErrorRegistering: "Kļūda reģistrējot DLL failu",
	ExecShell: "\"Izpilda čaulā: \"",
	Exec: "\"Izpilda: \"",
	Extract: "\"Atspiež: \"",
	ErrorWriting: "\"Atspiešana: kļūda rakstot failā \"",
	InvalidOpcode: "Instalācija bojāta: nederīgs CRC kods",
	NoOLE: "\"Nav OLE priekš: \"",
	OutputFolder: "\"Izvades mape: \"",
	RemoveFolder: "\"Dzēš mapi: \"",
	RenameOnReboot: "\"Pārsaukt pēc pārstartēšanas: \"",
	Rename: "\"Pārsaukt: \"",
	Skipped: "\"Izlaists: \"",
	CopyDetails: "Iekopēt detaļas starpliktuvē",
	LogInstall: "Ierakstīt žurnāla failā uzstādīšanas procesu",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Latvian$1 = {
	header: header$A,
	id: id$A,
	font: font$A,
	code_page: code_page$A,
	rtl: rtl$A,
	strings: strings$A
};

var header$B = "NLF v6";
var id$B = 1063;
var font$B = {
	name: null,
	size: null
};
var code_page$B = 1257;
var rtl$B = false;
var strings$B = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "$(^Name) Įdiegimas",
	UninstallCaption: "$(^Name) Šalinti",
	LicenseSubCaption: ": Naudojimo sutartis",
	ComponentsSubCaption: ": Įdiegimo nustatymai",
	DirSubCaption: ": Įdiegimo katalogas",
	InstallingSubCaption: ": Įdiegiama",
	CompletedSubCaption: ": Baigta",
	UnComponentsSubCaption: ": Ištrinimo nustatymai",
	UnDirSubCaption: ": Ištrinimo katalogas",
	ConfirmSubCaption: ": Patvirtinimas",
	UninstallingSubCaption: ": Panaikinama",
	UnCompletedSubCaption: ": Baigta",
	BackBtn: "< &Atgal",
	NextBtn: "&Toliau >",
	AgreeBtn: "Aš &sutinku",
	AcceptBtn: "Aš &sutinku su naudojimo sutarties sąlygomis",
	DontAcceptBtn: "Aš &nesutinku su naudojimo sutarties sąlygomis",
	InstallBtn: "&Įdiegti",
	UninstallBtn: "&Panaikinti",
	CancelBtn: "Nutraukti",
	CloseBtn: "&Uždaryti",
	BrowseBtn: "P&asirinkti...",
	ShowDetailsBtn: "Parodyti &detales",
	ClickNext: "Paspauskite toliau",
	ClickInstall: "Paspauskite įdiegti",
	ClickUninstall: "Paspauskite ištrinti",
	Name: "Vardas",
	Completed: "Baigta",
	LicenseText: "Prašome perskaityti sutartį prieš įdiegdami $(^NameDA). Jei jūs sutinkate su nurodytomis sąlygomis, spauskite Sutinku.",
	LicenseTextCB: "Prašome perskaityti sutartį prieš įdiegdami $(^NameDA). Jei jūs sutinkate su nurodytomis sąlygomis, padėkite varnelę tam skirtame laukelyje. $_CLICK",
	LicenseTextRB: "Prašome perskaityti sutartį prieš įdiegdami $(^NameDA). Jei jūs sutinkate su nurodytomis sąlygomis, pasirinkite pirmą pasirinkimą esantį žemiau. $_CLICK",
	UnLicenseText: "Prašome perskaityti sutartį prieš ištrinant $(^NameDA). Jei jūs sutinkate su nurodytomis sąlygomis, spauskite Sutinku.",
	UnLicenseTextCB: "Prašome perskaityti sutartį prieš ištrinant $(^NameDA). Jei jūs sutinkate su nurodytomis sąlygomis, padėkite varnelę tam skirtame laukelyje. $_CLICK",
	UnLicenseTextRB: "Prašome perskaityti sutartį prieš ištrinant $(^NameDA). Jei jūs sutinkate su nurodytomis sąlygomis, pasirinkite pirmą pasirinkimą esantį žemiau.  $_CLICK",
	Custom: "Kitoks",
	ComponentsText: "Padėkite varneles laukeliuose komponentų kuriuos norite įdiegti ir nuimkite nuo kurių nenorite įdiegti. $_CLICK",
	ComponentsSubText1: "Pasirinkite įdiegimo būdą:",
	ComponentsSubText2_NoInstTypes: "Pasirinkite komponentus, kuriuos įdiegti:",
	ComponentsSubText2: "Arba, pasirinkite neprivalomus komponentus, kuriuos jūs norite įdiegti:",
	UnComponentsText: "Padėkite varneles laukeliuose komponentų kuriuos norite pašalinti ir nuimkite nuo kurių nenorite pašalinti. $_CLICK",
	UnComponentsSubText1: "Pasirinkite šalinimo būdą:",
	UnComponentsSubText2_NoInstTypes: "Pasirinkite komponentus, kuriuos šalinti:",
	UnComponentsSubText2: "Arba, pasirinkite neprivalomus komponentus, kuriuos jūs norite pašalinti:",
	DirText: "Įdiegimas dabar įdiegs $(^NameDA) šiame kataloge. Jeigu norite pakeisti šį katalogą, paspauskite Pasirinkti. $_CLICK",
	DirSubText: "Įdiegimo katalogas",
	DirBrowseText: "Pasirinkite katalogą, kur įdiegti $(^NameDA):",
	UnDirText: "Įdiegimas dabar pašalins $(^NameDA) iš šio katalogo. Jeigu norite pakeisti šį katalogą paspauskite Pasirinkti. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Pasirinkite katalogą iš kurio pašalinti $(^NameDA):",
	SpaceAvailable: "Yra vietos: ",
	SpaceRequired: "Reikia vietos: ",
	UninstallingText: "$(^NameDA) dabar bus pašalintas iš šio katalogo. $_CLICK",
	UninstallingSubText: "Trinama iš:",
	FileError: "Klaida atidarant failą įrašymui: \\r\\n\\t\"$0\"\\r\\nPaspauskite Nutraukti, jei norite nutraukti įdiegimą,\\r\\nPakartoti, jei norite pabandyti dar kartą įrašyti failą, ar\\r\\nIgnoruoti, jei norite praleisti šį failą",
	FileError_NoIgnore: "Klaida atidarant failą įrašymui: \\r\\n\\t\"$0\"\\r\\nPaspauskite Pakartoti, jei norite pabandyti dar kartą įrašyti failą, ar\\r\\nNutraukti, jei norite nutraukti įdiegimą.",
	CantWrite: "\"Negalima įrašyti: \"",
	CopyFailed: "Kopijavimas nepavyko",
	CopyTo: "Kopijuoti į ",
	Registering: "\"Užregistruojama: \"",
	Unregistering: "\"Išregistruojama: \"",
	SymbolNotFound: "Nerastas simbolis: ",
	CouldNotLoad: "Negaliu įkrauti: ",
	CreateFolder: "Sukurti katalogą: ",
	CreateShortcut: "Sukurti nuorodą: ",
	CreatedUninstaller: "Sukurti panaikinimo programą:",
	Delete: "Ištrinti failą: ",
	DeleteOnReboot: "\"Ištrinti perkraunant: \"",
	ErrorCreatingShortcut: "\"Klaida kuriant nuorodą: \"",
	ErrorCreating: "\"Klaida kuriant: \"",
	ErrorDecompressing: "Klaida išskleidžiant duomenis! Sugadintas įdiegimo failas?",
	ErrorRegistering: "Klaida užregistruojant DLL",
	ExecShell: "\"VykdytiShell: \"",
	Exec: "\"Vykdyti: \"",
	Extract: "\"Išskleisti: \"",
	ErrorWriting: "Išskleisti: klaida įrašant į failą",
	InvalidOpcode: "Įdiegimo failas sugadintas: neteisingas opkodas",
	NoOLE: "\"Nėra OLE dėl: \"",
	OutputFolder: "\"Paskirties katalogas: \"",
	RemoveFolder: "\"Panaikinti katalogą: \"",
	RenameOnReboot: "\"Pervardinti perkraunant: \"",
	Rename: "\"Pervardinti: \"",
	Skipped: "\"Praleista: \"",
	CopyDetails: "Kopijuoti detales į atmintį",
	LogInstall: "Įrašyti įdiegimo detales",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Lithuanian$1 = {
	header: header$B,
	id: id$B,
	font: font$B,
	code_page: code_page$B,
	rtl: rtl$B,
	strings: strings$B
};

var header$C = "NLF v6";
var id$C = 4103;
var font$C = {
	name: null,
	size: null
};
var code_page$C = 1252;
var rtl$C = false;
var strings$C = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "$(^Name) Installatioun",
	UninstallCaption: "$(^Name) Desinstallatioun",
	LicenseSubCaption: ": Lizenzofkommes",
	ComponentsSubCaption: ": Installatiouns-Optiounen",
	DirSubCaption: ": Zielverzeechnis",
	InstallingSubCaption: ": Installéieren",
	CompletedSubCaption: ": Färdeg",
	UnComponentsSubCaption: ": Desinstallatiuons-Optiounen",
	UnDirSubCaption: ": Quellverzeechnes",
	ConfirmSubCaption: ": Bestätegung",
	UninstallingSubCaption: ": Läschen",
	UnCompletedSubCaption: ": Färdeg",
	BackBtn: "< &Zréck",
	NextBtn: "&Weider >",
	AgreeBtn: "&Unhuelen",
	AcceptBtn: "Ech &huelen d'Lizenzofkommes un.",
	DontAcceptBtn: "Ech &lehnen d'Lizenzofkommes of.",
	InstallBtn: "&Installéieren",
	UninstallBtn: "&Desinstalléieren",
	CancelBtn: "Ofbriechen",
	CloseBtn: "&Zou maan",
	BrowseBtn: "&Duerchsichen...",
	ShowDetailsBtn: "&Details uweisen",
	ClickNext: "Klick op weider fir weiderzefueren",
	ClickInstall: "Klick op Installéieren, fir d'Installatioun unzefänken.",
	ClickUninstall: "Klick op Desinstalléieren, fir d'Desinstallatioun unzefänken.",
	Name: "Numm",
	Completed: "Färdeg",
	LicenseText: "W.e.g. d'Lizenzofkommes liesen, ierts de $(^NameDA) installéiers. Wanns de all Bedengungen vum Ofkommes akzeptéiers, klick op Unhuelen.",
	LicenseTextCB: "W.e.g. d'Lizenzofkommes liesen, ierts de $(^NameDA) installéiers. Wanns de all Bedengungen vum Ofkommes akzeptéiers, aktivéier d'Kontrollkeschtchen. $_CLICK",
	LicenseTextRB: "W.e.g. d'Lizenzofkommes liesen, ierts de $(^NameDA) installéiers. Wanns de all Bedengungen vum Ofkommes akzeptéiers, wiel d'entsprichend Optioun. $_CLICK",
	UnLicenseText: "W.e.g. d'Lizenzofkommes liesen, ierts de $(^NameDA) desinstalléiers. Wanns de all Bedengungen vum Ofkommes akzeptéiers, klick op Unhuelen.",
	UnLicenseTextCB: "W.e.g. d'Lizenzofkommes liesen, ierts de $(^NameDA) desinstalléiers. Wanns de all Bedengungen vum Ofkommes akzeptéiers, aktivéier d'Kontrollkeschtchen. $_CLICK",
	UnLicenseTextRB: "W.e.g. d'Lizenzoofkommes liesen, ierts de $(^NameDA) desinstalléiers. Wanns de all Bedengungen vum Oofkommes akzeptéiers, wiel d'entspriechend Optioun. $_CLICK",
	Custom: "Benutzerdefiniert",
	ComponentsText: "Wiel d'Komponenten aus, déis de wëlls installéieren an wiel déijéineg of, déis de net installéieren wëlls. $_CLICK",
	ComponentsSubText1: "Installatiouns-Typ bestëmmen:",
	ComponentsSubText2_NoInstTypes: "Wiel d'Komponenten aus, déis de installéieren wëlls:",
	ComponentsSubText2: "oder wiel zousätzlech Komponenten aus déis de installéieren wëlls:",
	UnComponentsText: "Wiel d'Komponenten aus déis de desinstalléieren wëlls an wiel déijéineg of, déis de net desinstalléieren wëlls. $_CLICK",
	UnComponentsSubText1: "Deinstallatiouns-Typ bestëmmen:",
	UnComponentsSubText2_NoInstTypes: "Wiel d'Komponenten aus, déis de desinstalléieren wëlls:",
	UnComponentsSubText2: "oder wiel zusätzlech Komponenten aus, déis de desinstalléieren wëlls:",
	DirText: "$(^NameDA) gëtt an den Dossier installéiert deen fierginn gouf. Wanns de et an een aneren Dossier installéieren wëlls, klick op Duechsichen an wiel een aneren Dossier aus. $_CLICK",
	DirSubText: "Zielverzeechnes",
	DirBrowseText: "Wiel en Dossier aus wuers de $(^NameDA) installéieren wëlls:",
	UnDirText: "$(^NameDA) gëtt an deem Dossier desinstalléiert, deen uginn gouf. Wann $(^NameDA) an engem aneren Dossier ass, klick op Duechsichen an wiel een aneren Dossier aus. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Wiel den Dossier aus wou $(^NameDA) dran installéiert ass:",
	SpaceAvailable: "\"Verfügbaren Späicher: \"",
	SpaceRequired: "\"Gebrauchten Späicher: \"",
	UninstallingText: "$(^NameDA) gëtt aus dem ausgewielten Dossier desinstalléiert. $_CLICK",
	UninstallingSubText: "Desinstalléieren aus:",
	FileError: "Fehler beim Iwwerschreiwen vun der Datei: \\r\\n\\t\"$0\"\\r\\nKlick op ofbriechen fir den Setup ze verloossen,\\r\\nop Widderhuelen fir den Setup nach eng Kéier duechzeféieren\\r\\n oder op Ignoréieren fir des Datei ze iwwersprengen an weiderzefueren.",
	FileError_NoIgnore: "Fehler beim Iwwerschreiwen vun der Datei: \\r\\n\\t\"$0\"\\r\\nKlick op Widderhuelen fir den Setup nach eng Kéier duechzeféieren,\\r\\noder op ofbriechen fir den Setup ze verloossen.",
	CantWrite: "\"Fehler beim Schreiwen: \"",
	CopyFailed: "Kopéieren fehlgeschloen",
	CopyTo: "\"Kopéiere an \"",
	Registering: "\"Registréieren: \"",
	Unregistering: "\"Deregistréieren: \"",
	SymbolNotFound: "\"Symbol ass net do: \"",
	CouldNotLoad: "\"Fehler beim Lueden vun: \"",
	CreateFolder: "\"Maan Dossier: \"",
	CreateShortcut: "\"Maan Oofkierzung: \"",
	CreatedUninstaller: "\"Man Desinstallatiouns-Programm: \"",
	Delete: "\"Läschen Datei: \"",
	DeleteOnReboot: "\"Läschen Datei no engem Neistart: \"",
	ErrorCreatingShortcut: "\"Fehler beim man vun enger Oofkierzung: \"",
	ErrorCreating: "\"Fehler beim maan: \"",
	ErrorDecompressing: "Fehler beim Dekompriméieren. Installations-Programm beschiedegt?",
	ErrorRegistering: "Fehler beim Registréieren vun der DLL",
	ExecShell: "\"ExecShell: \"",
	Exec: "\"Starten: \"",
	Extract: "\"Dekompriméieren: \"",
	ErrorWriting: "\"Dekompriméierung: Fehler beim Schreiwen vun der Datei \"",
	InvalidOpcode: "Installations-Programm Beschiedegt: net zoulässegen Befehlscode",
	NoOLE: "\"Keen OLE fier: \"",
	OutputFolder: "\"Zieldossier: \"",
	RemoveFolder: "\"Läschen Dossier: \"",
	RenameOnReboot: "\"Gett no Neistart embenannt: \"",
	Rename: "\"Embenennen: \"",
	Skipped: "\"Iwwersprongen: \"",
	CopyDetails: "Detailler an d'Zwëschenooflag kopéieren",
	LogInstall: "Installatioun protokolléieren",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Luxembourgish$1 = {
	header: header$C,
	id: id$C,
	font: font$C,
	code_page: code_page$C,
	rtl: rtl$C,
	strings: strings$C
};

var header$D = "NLF v6";
var id$D = 1071;
var font$D = {
	name: null,
	size: null
};
var code_page$D = 1251;
var rtl$D = false;
var strings$D = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Инсталирање на $(^Name)",
	UninstallCaption: "Деинсталирање на $(^Name)",
	LicenseSubCaption: ": Лиценцен Договор",
	ComponentsSubCaption: ": Инсталациони Опции",
	DirSubCaption: ": Инсталационен Директориум",
	InstallingSubCaption: ": Инсталира",
	CompletedSubCaption: ": Завршено",
	UnComponentsSubCaption: ": Деинсталациони Опции",
	UnDirSubCaption: ": Деинсталационен Директориум",
	ConfirmSubCaption: ": Потврда",
	UninstallingSubCaption: ": Деинсталира",
	UnCompletedSubCaption: ": Завршено",
	BackBtn: "< &Назад",
	NextBtn: "Н&апред >",
	AgreeBtn: "&Да",
	AcceptBtn: "&Ги прифаќам условите од Лиценцниот Договор",
	DontAcceptBtn: "Н&е ги прифаќам условите од Лиценцниот Договор",
	InstallBtn: "&Инсталирај",
	UninstallBtn: "&Деинсталирај",
	CancelBtn: "Откажи",
	CloseBtn: "&Затвори",
	BrowseBtn: "&Пребарувај...",
	ShowDetailsBtn: "П&окажи Детали",
	ClickNext: "Притиснете 'Напред' за да продолжите.",
	ClickInstall: "Притиснете 'Инсталирај' за да се инсталира.",
	ClickUninstall: "Притиснете 'Деинсталирај' за да се деинсталира.",
	Name: "Име",
	Completed: "Завршено",
	LicenseText: "Ве молиме прочитајте го Лиценцниот Договор пред да се инсталира $(^NameDA). Ако ги прифаќате сите услови, притиснете 'Да'.",
	LicenseTextCB: "Ве молиме прочитајте го Лиценцниот Договор пред да се инсталира $(^NameDA). Ако ги прифаќате сите услови, притиснете го Check box-от подоле. $_CLICK",
	LicenseTextRB: "Ве молиме прочитајте го Лиценцниот Договор пред да се инсталира $(^NameDA). Ако ги прифаќате сите услови, одберете ја првата опција подоле. $_CLICK",
	UnLicenseText: "Ве молиме прочитајте го Лиценцниот Договор пред да се деинсталира $(^NameDA). Ако ги прифаќате сите услови, притиснете 'Да'.",
	UnLicenseTextCB: "Ве молиме прочитајте го Лиценцниот Договор пред да се деинсталира $(^NameDA). Ако ги прифаќате сите услови, притиснете го Check box-от подоле. $_CLICK",
	UnLicenseTextRB: "Ве молиме прочитајте го Лиценцниот Договор пред да се деинсталира $(^NameDA). Ако ги прифаќате сите услови, одберете ја првата опција подоле. $_CLICK",
	Custom: "Подесено",
	ComponentsText: "Чекирајте ги компонентите што сакате да се инсталираат или дечекирајте ги тие што не сакате да се инсталираат. $_CLICK ",
	ComponentsSubText1: "Одберете вид на инсталација:",
	ComponentsSubText2_NoInstTypes: "Одберете ги компонентите што ќе се инсталираат:",
	ComponentsSubText2: "или, одберете други компоненти што сакате да се инсталираат:",
	UnComponentsText: "Чекирајте ги компонентите што сакате да се деинсталираат или дечекирајте ги тие што не сакате да се деинсталираат. $_CLICK",
	UnComponentsSubText1: "Одберете го видот на деинсталацијата:",
	UnComponentsSubText2_NoInstTypes: "Одберете ги компонентите што ќе се деинсталираат:",
	UnComponentsSubText2: "или, одберете други компоненти што сакате да се деинсталираат:",
	DirText: "Инсталациониот програм ќе го инсталира $(^NameDA) во следниов директориум. За да инсталирате во друг, притиснете 'Пребарувај' и одберете друг директориум. $_CLICK",
	DirSubText: "Директориум каде што ќе се инсталира",
	DirBrowseText: "Одберете директориум за инсталирање на $(^NameDA):",
	UnDirText: "Инсталациониот програм ќе го деинсталира $(^NameDA) од следниов директориум. За да деинсталирате од друг, притиснете 'Пребарувај' и одберете друг директориум. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Одберете го директориумот за деинсталирање на $(^NameDA):",
	SpaceAvailable: "\"Слободен простор: \"",
	SpaceRequired: "\"Потребен простор: \"",
	UninstallingText: "$(^NameDA) ќе биде деинсталиран од следниов директориум. $_CLICK",
	UninstallingSubText: "Деинсталира од:",
	FileError: "Грешка при отварањето на датотеката за запишување: \\r\\n\\t\"$0\"\\r\\nПритиснете 'Откажи' за да ја откажете инсталацијата,\\r\\n'Пробај' за да проба да ја запише датотеката, или\\r\\n'Игнорирај' за да ја прерипа датотеката",
	FileError_NoIgnore: "Грешка при отварањето на датотеката за запишување: \\r\\n\\t\"$0\"\\r\\nПритиснете 'Пробај' за да проба да ја запише датотеката, или\\r\\n'Откажи' за да ја откаже инсталацијата",
	CantWrite: "\"Не може да запише: \"",
	CopyFailed: "Копирањето не успеа",
	CopyTo: "\"Копирај до \"",
	Registering: "\"Регистрира: \"",
	Unregistering: "\"Дерегистрира: \"",
	SymbolNotFound: "\"Не може да го најде симболот: \"",
	CouldNotLoad: "\"Не може да лоадира: \"",
	CreateFolder: "\"Создади директориум: \"",
	CreateShortcut: "\"Создади кратеница: \"",
	CreatedUninstaller: "\"Создаден деинсталатор: \"",
	Delete: "\"Избришана датотека: \"",
	DeleteOnReboot: "\"Избриши после рестартирање: \"",
	ErrorCreatingShortcut: "\"Грешка при создавањето на скратеницата: \"",
	ErrorCreating: "\"Грешка при создавањето: \"",
	ErrorDecompressing: "Грешка при отпакувањето на податоците! Расипан инсталационен програм?",
	ErrorRegistering: "Грешка при регистрирањето на DLL",
	ExecShell: "\"ExecShell: \"",
	Exec: "\"Покрени: \"",
	Extract: "\"Отпакувано: \"",
	ErrorWriting: "\"Отпакувај: грешка при снимањето во датотеката \"",
	InvalidOpcode: "Расипан инсталационен програм: погрешен код",
	NoOLE: "\"Нема OLE за: \"",
	OutputFolder: "\"Инсталационен директориум: \"",
	RemoveFolder: "\"Избришан директориум: \"",
	RenameOnReboot: "\"Преименувај после рестартирање: \"",
	Rename: "\"Преименувај: \"",
	Skipped: "\"Прерипано: \"",
	CopyDetails: "Копирај ги Деталите во Clipboard-от",
	LogInstall: "Сними лог за инсталационите процеси",
	Byte: "б",
	Kilo: " К",
	Mega: " М",
	Giga: " Г"
};
var Macedonian$1 = {
	header: header$D,
	id: id$D,
	font: font$D,
	code_page: code_page$D,
	rtl: rtl$D,
	strings: strings$D
};

var header$E = "NLF v6";
var id$E = 1086;
var font$E = {
	name: null,
	size: null
};
var code_page$E = 1252;
var rtl$E = false;
var strings$E = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Setup $(^Name)",
	UninstallCaption: "Uninstall $(^Name)",
	LicenseSubCaption: ": Perlesenan",
	ComponentsSubCaption: ": Pilihan kemasukan",
	DirSubCaption: ": Folder kemasukan",
	InstallingSubCaption: ": Memasang",
	CompletedSubCaption: ": Selesai",
	UnComponentsSubCaption: ": Pilihan membuang",
	UnDirSubCaption: ": Folder Uninstal",
	ConfirmSubCaption: ": Kepastian",
	UninstallingSubCaption: ": Membuang",
	UnCompletedSubCaption: ": Tidak Selesai",
	BackBtn: "< &Ke Belakang",
	NextBtn: "&Ke Depan >",
	AgreeBtn: "Saya &setuju",
	AcceptBtn: "Saya s&etuju dengan Perlesenan",
	DontAcceptBtn: "Saya &tidak setuju dengan Perlesenan",
	InstallBtn: "&Masukkan",
	UninstallBtn: "&Buang",
	CancelBtn: "Batal",
	CloseBtn: "&Tutup",
	BrowseBtn: "S&elusur...",
	ShowDetailsBtn: "Buka &lagi",
	ClickNext: "Klik Ke Depan untuk teruskan.",
	ClickInstall: "Klik Masukkan untuk kemasukkan.",
	ClickUninstall: "Klik Uninstall untuk membuang.",
	Name: "Nama",
	Completed: "Selesai",
	LicenseText: "Sila baca lesen sebelum memasukkan $(^NameDA). Jika anda terima perlesenan, klik Saya setuju.",
	LicenseTextCB: "Sila baca lesen sebelum memasukkan $(^NameDA). Jika terima, beri tanda dicheckbox. $_CLICK",
	LicenseTextRB: "Sila baca lesen sebelum sebelum membuang $(^NameDA). Jika anda terima perlesenan, pilihlah salah satu item dibawah ini. $_CLICK",
	UnLicenseText: "Sila baca lesen sebelum sebelum membuang $(^NameDA). Jika anda terima perlesenan, klik Saya setuju.",
	UnLicenseTextCB: "Sila baca lesen sebelum memasukkan $(^NameDA). Jika terima, beri tanda dicheckbox. $_CLICK",
	UnLicenseTextRB: "Sila baca lesen sebelum sebelum membuang $(^NameDA).Jika anda terima perlesenan, pilihlah salah satu item dibawah ini. $_CLICK",
	Custom: "Custom",
	ComponentsText: "Beri tanda dicheckbox pada komponen yang ingin dimasukkan and hilangkan tanda pada komponen yang tidak perlu dimasukkan. $_CLICK",
	ComponentsSubText1: "Pilih kemasukan:",
	ComponentsSubText2_NoInstTypes: "Pilih komponen-komponen untuk dimasukkan:",
	ComponentsSubText2: "Atau, pilih komponen berikut untuk dimasukkan:",
	UnComponentsText: "Beri tanda dicheckbox pada komponen yang ingin dimasukkan and hilangkan tanda pada komponen yang tidak perlu dimasukkan. $_CLICK",
	UnComponentsSubText1: "Pilih tipe un-kemasukan:",
	UnComponentsSubText2_NoInstTypes: "Pilih komponen-komponen untuk di buang:",
	UnComponentsSubText2: "Atau, pilih komponen berikut untuk di buang:",
	DirText: "Setup akan memasukkan $(^NameDA) pada folder berikut. Untuk memilih folder lainnya, klik Selusur dan pilih folder pilihan anda. $_CLICK",
	DirSubText: "Folder tujuan",
	DirBrowseText: "Pilih folder untuk memasukkan $(^NameDA):",
	UnDirText: "Setup akan membuang $(^NameDA) dari folder berikut. Untuk memilih folder lainnya, klik Selusur dan pilih folder pilihan anda. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Pilih folder untuk dibuang $(^NameDA):",
	SpaceAvailable: "\"Ruang cakera keras yang ada: \"",
	SpaceRequired: "\"Ruang cakera keras yang diperlukan: \"",
	UninstallingText: "$(^NameDA) akan buang dari folder berikut. $_CLICK",
	UninstallingSubText: "Membuang:",
	FileError: "Tidak dapat menulis pada fail: \\r\\n\\t\"$0\"\\r\\nKlik abort untuk membatalkan kemasukan,\\r\\nretry untuk cuba lagi, atau\\r\\nignore untuk abaikan fail ini.",
	FileError_NoIgnore: "Tidak dapat menulis pada fail: \\r\\n\\t\"$0\"\\r\\nKlik retry untuk cuba lagi, atau\\r\\ncancel untuk batalkan kemasukan",
	CantWrite: "\"Gagal menulis pada: \"",
	CopyFailed: "Gagal menyalin",
	CopyTo: "\"Menyalin ke \"",
	Registering: "\"Mendaftarkan modul: \"",
	Unregistering: "\"Melepaskan modul: \"",
	SymbolNotFound: "\"Symbol tidak jumpa : \"",
	CouldNotLoad: "\"Tidak dapat membuka: \"",
	CreateFolder: "\"Membuat folder: \"",
	CreateShortcut: "\"Membuat pintasan: \"",
	CreatedUninstaller: "\"Membuat program unistall: \"",
	Delete: "\"Memadam fail: \"",
	DeleteOnReboot: "\"Akan dipadam ketika reboot: \"",
	ErrorCreatingShortcut: "\"Tidak dapat membuat pintasan: \"",
	ErrorCreating: "\"Ralat penciptaan: \"",
	ErrorDecompressing: "Ralat ketika membuka data! Program Installer rosak",
	ErrorRegistering: "Ralat mendaftarkan modul DLL",
	ExecShell: "\"ExecShell: \"",
	Exec: "\"Menjalankan: \"",
	Extract: "\"Mengekstrak: \"",
	ErrorWriting: "\"Ekstrak: ralat ketika menulis ke fail \"",
	InvalidOpcode: "Installer rosak: opcode tidak lengkap",
	NoOLE: "\"OLE tidak ditemukan: \"",
	OutputFolder: "\"Folder tujuan: \"",
	RemoveFolder: "\"Menghapuskan folder: \"",
	RenameOnReboot: "\"Menamakan semula pada reboot: \"",
	Rename: "\"Menamakan semula: \"",
	Skipped: "\"Diabaikan: \"",
	CopyDetails: "Salin terperinci ke clipboard",
	LogInstall: "Catat proses kemasukan",
	Byte: "Bait",
	Kilo: " Kilo",
	Mega: " Mega",
	Giga: " Giga"
};
var Malay$1 = {
	header: header$E,
	id: id$E,
	font: font$E,
	code_page: code_page$E,
	rtl: rtl$E,
	strings: strings$E
};

var header$F = "NLF v6";
var id$F = 1104;
var font$F = {
	name: null,
	size: null
};
var code_page$F = 1251;
var rtl$F = false;
var strings$F = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "$(^Name) Суулгац",
	UninstallCaption: "$(^Name) Суулгасныг устгах",
	LicenseSubCaption: ": Лицензийн зөвшөөрөл",
	ComponentsSubCaption: ": Суулгах сонголт",
	DirSubCaption: ": Суулгах Хавтас",
	InstallingSubCaption: ":Суулгаж байна",
	CompletedSubCaption: ": Дууслаа",
	UnComponentsSubCaption: ": Суулгасныг устгахын Сонголт",
	UnDirSubCaption: ": Суулгасныг устгах Хавтас",
	ConfirmSubCaption: ": Батламж",
	UninstallingSubCaption: ": Суулгасныг устгаж байна",
	UnCompletedSubCaption: ": Дууслаа",
	BackBtn: "< &Буцах",
	NextBtn: "&Цааш>",
	AgreeBtn: "&Зөвшөөрлөө",
	AcceptBtn: "Би Лицензийн Зөвшөөрлийн зүйлүүдийг  &зөвшөөрч байна",
	DontAcceptBtn: "Би Лицензийн Зөвшөөрлийн зүйлүүдийг  &зөвшөөрөхгүй байна",
	InstallBtn: "&Суулга",
	UninstallBtn: "&Устга",
	CancelBtn: "Болих",
	CloseBtn: "&Xaax",
	BrowseBtn: "Х&өтлөх...",
	ShowDetailsBtn: "&Дэлгэрэнгүй",
	ClickNext: "Цааш дээр дарвал үргэлжилнэ.",
	ClickInstall: "Суулга дээр дарвал суулгац эхэлнэ.",
	ClickUninstall: "Устга дээр дарвал суулгацын устгалт эхэлнэ.",
	Name: "Нэр",
	Completed: "Дууслаа",
	LicenseText: "$(^NameDA)-г суулгахын өмнө Лицензийн Зөвшөөрлийг уншина уу. Хэрэв та зөвшилцлийн зүйлүүдийг зөвшөөрч байвал, Зөвшөөрлөө-г дарна уу.",
	LicenseTextCB: "$(^NameDA)-г суулгахын өмнө Лицензийн Зөвшөөрлийг уншина уу. Хэрэв та зөвшилцлийн зүйлүүдийг зөвшөөрч байвал, доорх нүдийг чагтална уу. $_CLICK",
	LicenseTextRB: "$(^NameDA)-г суулгахын өмнө Лицензийн Зөвшөөрлийг уншина уу. Хэрэв та зөвшилцлийн зүйлүүдийг зөвшөөрч байвал, доорх эхний сонголтыг сонгоно уу. $_CLICK",
	UnLicenseText: "$(^NameDA)-г суулгахын өмнө Лицензийн Зөвшөөрлийг уншина уу. Хэрэв та зөвшилцлийн зүйлүүдийг зөвшөөрч байвал, Зөвшөөрлөө-г дарна уу.",
	UnLicenseTextCB: "$(^NameDA)-г суулгахын өмнө Лицензийн Зөвшөөрлийг уншина уу. Хэрэв та зөвшилцлийн зүйлүүдийг зөвшөөрч байвал, доорх нүдийг чагтална уу. $_CLICK",
	UnLicenseTextRB: "$(^NameDA)-г суулгахын өмнө Лицензийн Зөвшөөрлийг уншина уу. Хэрэв та зөвшилцлийн зүйлүүдийг зөвшөөрч байвал, доорх эхний сонголтыг сонгоно уу. $_CLICK",
	Custom: "Бусад",
	ComponentsText: "Суулгахыг хүссэн нэгдлээ чагтлаад, суулгахыг хүсэхгүй буйгаа бүү чагтлаарай. $_CLICK",
	ComponentsSubText1: "Суулгах төрлийг сонгоно уу:",
	ComponentsSubText2_NoInstTypes: "Суулгах нэгдлийг сонгоно уу:",
	ComponentsSubText2: "Эсвэл, заавал суулгахгүй байх нэгдлүүдийг сонго:",
	UnComponentsText: "Устгахыг хүссэн нэгдлээ чагтлаад, устгахыг хүсэхгүй байгаагаа бүү чагтлаарай. $_CLICK",
	UnComponentsSubText1: "Устгах төрлийг сонгоно уу:",
	UnComponentsSubText2_NoInstTypes: "Устгах нэгдлүүдийг сонгоно ууl:",
	UnComponentsSubText2: "Эсвэл, заавал устгахгүй байх нэгдлүүдийг сонго:",
	DirText: "$(^NameDA) нь дараах хавтсанд сууна. Өөр газар суулгахыг хүсвэл Хөтлөх товч дээр даран өөр хавтас сонгоно уу. $_CLICK",
	DirSubText: "Зорилтот Хавтас",
	DirBrowseText: "$(^NameDA)-ыг суулгах хавтсыг сонгох:",
	UnDirText: "$(^NameDA)-г уг хавтаснаас устгана. Өөр газраас устгахыг хүсвэл Хөтлөх товч дээр даран өөр хавтас сонгоно уу. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "$(^NameDA)-г устгах хавтсыг сонгох:",
	SpaceAvailable: "\"Боломжит зай: \"",
	SpaceRequired: "\"Шаардагдах зай: \"",
	UninstallingText: "$(^NameDA) нь уг хавтаснаас устгагдлаа. $_CLICK",
	UninstallingSubText: "Устгагдах газар:",
	FileError: "Файл бичихээр нээхэд алдлаа: \\r\\n\\t\"$0\"\\r\\nТаслах дарвал суулгалт таслагдана,\\r\\nДахья дарвал файлыг бичихээр дахин оролдоно,\\r\\nэсвэл Үл тоох дарвал уг файлыг алгасна",
	FileError_NoIgnore: "Файл бичихээр нээхэд алдлаа: \\r\\n\\t\"$0\"\\r\\nДахия дарвал файлыг бичихээр дахин оролдоно, \\r\\nэсвэл болих дарвал суулгалт таслагдана",
	CantWrite: "\"Бичиж чадсангүй: \"",
	CopyFailed: "Хуулалт бүтсэнгүй",
	CopyTo: "\"Хуулах нь \"",
	Registering: "\"Бүртгэж байна: \"",
	Unregistering: "\"Бүртгэлийг арилгаж байна: \"",
	SymbolNotFound: "\"Тэмдэг хайгдсангүй: \"",
	CouldNotLoad: "\"Дуудагдсангүй: \"",
	CreateFolder: "\"Үүсгэх хавтас: \"",
	CreateShortcut: "\"Үүсгэх shortcut: \"",
	CreatedUninstaller: "\"Үүссэн uninstaller: \"",
	Delete: "\"Файл устгах: \"",
	DeleteOnReboot: "\"Д.ачаалахад устгах: \"",
	ErrorCreatingShortcut: "\"Shortcut үүсгэхэд алдлаа: \"",
	ErrorCreating: "\"Үүсгэх алдаа: \"",
	ErrorDecompressing: "Өгөгдөл задлахад алдлаа! Суулгац эвдэрчээ?",
	ErrorRegistering: "DLL бүртгүүлэхэд алдлаа",
	ExecShell: "\"Ажиллуулах команд(ExecShell): \"",
	Exec: "\"Ажиллуулах: \"",
	Extract: "\"Задлах: \"",
	ErrorWriting: "\"Задлалт:файл руу бичихэд алдаа \"",
	InvalidOpcode: "Суулгац эвдэрчээ: задлах код буруу",
	NoOLE: "\"OLE байхгүй: \"",
	OutputFolder: "\"Гаргах хавтас: \"",
	RemoveFolder: "\"Устгах хавтас: \"",
	RenameOnReboot: "\"Д.ачаалахад дахин нэрлэх: \"",
	Rename: "\"Дахин нэрлэх: \"",
	Skipped: "\"Алгассан: \"",
	CopyDetails: "Дэлгэрэнгүйг Clipboard руу хуулах",
	LogInstall: "Суулгах явцын баримт",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Mongolian$1 = {
	header: header$F,
	id: id$F,
	font: font$F,
	code_page: code_page$F,
	rtl: rtl$F,
	strings: strings$F
};

var header$G = "NLF v6";
var id$G = 1044;
var font$G = {
	name: null,
	size: null
};
var code_page$G = 1252;
var rtl$G = false;
var strings$G = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "$(^Name) installasjon",
	UninstallCaption: "$(^Name) avinstallasjon",
	LicenseSubCaption: ": Lisensavtale",
	ComponentsSubCaption: ": Installasjonsvalg",
	DirSubCaption: ": Installasjonsmappe",
	InstallingSubCaption: ": Installerer",
	CompletedSubCaption: ": Ferdig",
	UnComponentsSubCaption: ": Avinstallasjonsvalg",
	UnDirSubCaption: ": Avinstallasjonsmappe",
	ConfirmSubCaption: ": Bekreft",
	UninstallingSubCaption: ": Avinstallerer",
	UnCompletedSubCaption: ": Ferdig",
	BackBtn: "< &Tilbake",
	NextBtn: "&Neste >",
	AgreeBtn: "&Godta",
	AcceptBtn: "Jeg &godtar vilkårene i lisensavtalen",
	DontAcceptBtn: "Jeg godtar &ikke vilkårene i lisensavtalen",
	InstallBtn: "&Installer",
	UninstallBtn: "&Avinstaller",
	CancelBtn: "Avbryt",
	CloseBtn: "&Lukk",
	BrowseBtn: "Bla &gjennom...",
	ShowDetailsBtn: "Vis &detaljer",
	ClickNext: "Trykk Neste for å fortsette.",
	ClickInstall: "Trykk Installer for å starte installasjonen.",
	ClickUninstall: "Trykk Avinstaller for å starte avinstallasjonen.",
	Name: "Navn",
	Completed: "Ferdig",
	LicenseText: "Vennligst les gjennom lisensavtalen før du installerer $(^Name). Hvis du godtar vilkårene i avtalen, trykk på Godta.",
	LicenseTextCB: "Vennligst les gjennom lisensavtalen før du installerer $(^Name). Hvis du godtar vilkårene i avtalen, merk av under. $_CLICK",
	LicenseTextRB: "Vennligst les gjennom lisensavtalen før du installerer $(^Name). Hvis du godtar vilkårene i avtalen, velg det første alternativet. $_CLICK",
	UnLicenseText: "Vennligst les gjennom lisensavtalen før du avinstallerer $(^Name). Hvis du godtar vilkårene i avtalen, trykk på Godta.",
	UnLicenseTextCB: "Vennligst les gjennom lisensavtalen før du avinstallerer $(^Name). Hvis du godtar vilkårene i avtalen, merk av under. $_CLICK",
	UnLicenseTextRB: "Vennligst les gjennom lisensavtalen før du avinstallerer $(^Name). Hvis du godtar vilkårene i avtalen, velg det første alternativet. $_CLICK",
	Custom: "Egendefinert",
	ComponentsText: "Merk komponentene du vil installere og fjern merkingen for de du ikke vil installere. $_CLICK",
	ComponentsSubText1: "Velg hvilken måte du vil installere på:",
	ComponentsSubText2_NoInstTypes: "Merk komponenter du vil installere:",
	ComponentsSubText2: "Eller merk de valgfrie komponentene du ønsker å installere:",
	UnComponentsText: "Merk komponentene du vil avinstallere og fjern merkingen for de du vil beholde. $_CLICK",
	UnComponentsSubText1: "Velg hvilken måte du vil avinstallere på:",
	UnComponentsSubText2_NoInstTypes: "Merk komponenter du vil avinstallere:",
	UnComponentsSubText2: "Eller merk de valgfrie komponentene du ønsker å avinstallere:",
	DirText: "$(^Name) vil bli installert i følgende mappe. For å velge en annen mappe, trykk Bla gjennom. $_CLICK",
	DirSubText: "Målmappe",
	DirBrowseText: "Velg mappe du vil installere $(^Name) i:",
	UnDirText: "$(^Name) i følgende mappe vil bli avinstallert. For å velge en annen mappe, trykk Bla gjennom. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Velg mappe du vil avinstallere $(^Name) fra:",
	SpaceAvailable: "\"Ledig plass: \"",
	SpaceRequired: "\"Nødvendig plass: \"",
	UninstallingText: "Denne veiviseren vil avinstallere $(^Name) fra din datamaskin. $_CLICK",
	UninstallingSubText: "Avinstallerer fra:",
	FileError: "Feil under åpning av fil for skriving: \\r\\n\\t\\\"$0\\\"\\r\\nTrykk Avbryt for å avbryte installasjonen,\\r\\nPrøv igjen for å prøve igjen, eller\\r\\nIgnorer for å hoppe over denne filen",
	FileError_NoIgnore: "Feil under åpning av fil for skriving: \\r\\n\\t\\\"$0\\\"\\r\\nTrykk Prøv igjen for å prøve igjen, or\\r\\neller Avbryt for å avbryte installasjonen",
	CantWrite: "\"Kan ikke skrive: \"",
	CopyFailed: "Kopiering mislyktes",
	CopyTo: "\"Kopier til \"",
	Registering: "\"Registrerer: \"",
	Unregistering: "\"\"Avregistrerer: \"",
	SymbolNotFound: "\"Kunne ikke finne symbol: \"",
	CouldNotLoad: "\"Kunne ikke laste: \"",
	CreateFolder: "\"Lag mappe: \"",
	CreateShortcut: "\"Lag snarvei: \"",
	CreatedUninstaller: "\"Avinstallasjon laget: \"",
	Delete: "\"Slett fil: \"",
	DeleteOnReboot: "\"Slett ved omstart: \"",
	ErrorCreatingShortcut: "\"Feil under opprettelse av snarvei: \"",
	ErrorCreating: "\"Feil under opprettelse av: \"",
	ErrorDecompressing: "Feil under utpakking av data! Installasjonsprogrammet kan være skadet.",
	ErrorRegistering: "Feil under registrering av DLL",
	ExecShell: "\"ExecShell: \"",
	Exec: "\"Kjøre: \"",
	Extract: "\"Pakk ut: \"",
	ErrorWriting: "\"Pakk ut: Feil under skriving til fil \"",
	InvalidOpcode: "Installasjonsprogrammet er skadet: ukjent kode",
	NoOLE: "\"Ingen OLE for: \"",
	OutputFolder: "\"Ut-mappe: \"",
	RemoveFolder: "\"Fjern mappe: \"",
	RenameOnReboot: "\"Gi nytt navn ved omstart: \"",
	Rename: "\"Gi nytt navn: \"",
	Skipped: "\"Hoppet over: \"",
	CopyDetails: "Kopier detaljer til utklippstavlen",
	LogInstall: "Loggfør installasjonsprosessen",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Norwegian$1 = {
	header: header$G,
	id: id$G,
	font: font$G,
	code_page: code_page$G,
	rtl: rtl$G,
	strings: strings$G
};

var header$H = "NLF v6";
var id$H = 2068;
var font$H = {
	name: null,
	size: null
};
var code_page$H = 1252;
var rtl$H = false;
var strings$H = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "$(^Name) installasjon",
	UninstallCaption: "$(^Name) avinstallasjon",
	LicenseSubCaption: ": Lisensavtale",
	ComponentsSubCaption: ": Installasjonsval",
	DirSubCaption: ": Installasjonsmappe",
	InstallingSubCaption: ": Installerer",
	CompletedSubCaption: ": Ferdig",
	UnComponentsSubCaption: ": Avinstallasjonsval",
	UnDirSubCaption: ": Avinstallasjonsmappe",
	ConfirmSubCaption: ": Stadfest",
	UninstallingSubCaption: ": Avinstallerer",
	UnCompletedSubCaption: ": Ferdig",
	BackBtn: "< &Attende",
	NextBtn: "&Neste >",
	AgreeBtn: "&Godta",
	AcceptBtn: "Eg &godtek vilkåra i lisensavtalen",
	DontAcceptBtn: "Eg godtek &ikkje vilkåra i lisensavtalen",
	InstallBtn: "&Installer",
	UninstallBtn: "&Avinstaller",
	CancelBtn: "Avbryt",
	CloseBtn: "&Lat att",
	BrowseBtn: "Bla &gjennom ...",
	ShowDetailsBtn: "Syn &detaljar",
	ClickNext: "Trykk Neste for å halda fram.",
	ClickInstall: "Trykk Installer for å starta installasjonen.",
	ClickUninstall: "Trykk Avinstaller for å starta avinstallasjonen.",
	Name: "Namn",
	Completed: "Ferdig",
	LicenseText: "Ver grei og les gjennom lisensavtalen før du installerer $(^NameDA). Dersom du godtek vilkåra i avtalen, trykk på Godta.",
	LicenseTextCB: "Ver grei og les gjennom lisensavtalen før du installerer $(^NameDA). Dersom du godtek vilkåra i avtalen, merk av under. $_CLICK",
	LicenseTextRB: "Ver grei og les gjennom lisensavtalen før du installerer $(^NameDA). Dersom du godtek vilkåra i avtalen, vel det fyrste alternativet. $_CLICK",
	UnLicenseText: "Ver grei og les gjennom lisensavtalen før du avinstallerer $(^NameDA). Dersom du godtek vilkåra i avtalen, trykk på Godta.",
	UnLicenseTextCB: "Ver grei og les gjennom lisensavtalen før du avinstallerer $(^NameDA). Dersom du godtek vilkåra i avtalen, merk av under. $_CLICK",
	UnLicenseTextRB: "Ver grei og les gjennom lisensavtalen før du avinstallerer $(^NameDA). Dersom du godtek vilkåra i avtalen, vel det fyrste alternativet. $_CLICK",
	Custom: "Eigendefinert",
	ComponentsText: "Merk komponentane du vil installera og fjern merkinga for dei du ikkje vil installera. $_CLICK",
	ComponentsSubText1: "Vel kva måte du vil installera på:",
	ComponentsSubText2_NoInstTypes: "Merk komponentar du vil installera:",
	ComponentsSubText2: "Eller merk dei valfrie komponentane du ynskjer å installera:",
	UnComponentsText: "Merk komponentane du vil avinstallera og fjern merkinga for dei du vil ta vare på. $_CLICK",
	UnComponentsSubText1: "Vel kva måte du vil avinstallera på:",
	UnComponentsSubText2_NoInstTypes: "Merk komponentar du vil avinstallera:",
	UnComponentsSubText2: "Eller merk dei valfrie komponentane du ynskjer å avinstallera:",
	DirText: "$(^NameDA) vil verta installert i fylgjande mappe. For å velja ei anna mappe, trykk Bla gjennom. $_CLICK",
	DirSubText: "Målmappe",
	DirBrowseText: "Vel mappe du vil installera $(^NameDA) i:",
	UnDirText: "$(^NameDA) i fylgjande mappe vil verta avinstallert. For å velja ei anna mappe, trykk Bla gjennom. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Vel mappe du vil avinstallera $(^NameDA) frå:",
	SpaceAvailable: "\"Ledig plass: \"",
	SpaceRequired: "\"Naudsynt plass: \"",
	UninstallingText: "Denne vegvisaren vil avinstallera $(^NameDA) frå din datamaskin. $_CLICK",
	UninstallingSubText: "Avinstallerer frå:",
	FileError: "Feil under opning av fil for skriving: \\r\\n\\t\\\"$0\\\"\\r\\nTrykk Avbryt for å avbryta installasjonen,\\r\\nPrøv igjen for å prøva igjen, eller\\r\\nIgnorer for å hoppa over denne fila",
	FileError_NoIgnore: "Feil under opning av fil for skriving: \\r\\n\\t\\\"$0\\\"\\r\\nTrykk Prøv igjen for å prøva igjen, or\\r\\neller Avbryt for å avbryta installasjonen",
	CantWrite: "\"Kan ikkje skriva: \"",
	CopyFailed: "Kopiering mislukka",
	CopyTo: "\"Kopier til \"",
	Registering: "\"Registrerer: \"",
	Unregistering: "\"\"Avregistrerer: \"",
	SymbolNotFound: "\"Kunne ikkje finna symbol: \"",
	CouldNotLoad: "\"Kunne ikkje lasta: \"",
	CreateFolder: "\"Lag mappe: \"",
	CreateShortcut: "\"Lag snarveg: \"",
	CreatedUninstaller: "\"Avinstallasjon laga: \"",
	Delete: "\"Slett fil: \"",
	DeleteOnReboot: "\"Slett ved omstart: \"",
	ErrorCreatingShortcut: "\"Feil under oppretting av snarveg: \"",
	ErrorCreating: "\"Feil under oppretting av: \"",
	ErrorDecompressing: "Feil under utpakking av data! Installasjonsprogrammet kan vera skadd.",
	ErrorRegistering: "Feil under registrering av DLL",
	ExecShell: "\"ExecShell: \"",
	Exec: "\"Køyra: \"",
	Extract: "\"Pakk ut: \"",
	ErrorWriting: "\"Pakk ut: Feil under skriving til fil \"",
	InvalidOpcode: "Installasjonsprogrammet er skadd: ukjend kode",
	NoOLE: "\"Ingen OLE for: \"",
	OutputFolder: "\"Ut-mappe: \"",
	RemoveFolder: "\"Fjern mappe: \"",
	RenameOnReboot: "\"Gje nytt namn ved omstart: \"",
	Rename: "\"Gje nytt namn: \"",
	Skipped: "\"Hoppa over: \"",
	CopyDetails: "Kopier detaljar til utklyppstavla",
	LogInstall: "Loggfør installasjonsprosessen",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var NorwegianNynorsk$1 = {
	header: header$H,
	id: id$H,
	font: font$H,
	code_page: code_page$H,
	rtl: rtl$H,
	strings: strings$H
};

var header$I = "NLF v6";
var id$I = 1123;
var font$I = {
	name: null,
	size: null
};
var code_page$I = 1256;
var rtl$I = true;
var strings$I = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "امسته $(^Name)",
	UninstallCaption: "نالګاو $(^Name)",
	LicenseSubCaption: ": منښتليک تړون",
	ComponentsSubCaption: ": لګاو غوراوي",
	DirSubCaption: ": لګاو پوښۍ",
	InstallingSubCaption: ": لګيږي",
	CompletedSubCaption: ": بشپړ",
	UnComponentsSubCaption: ": نالګاو غوراوي",
	UnDirSubCaption: ": نالګاو پوښۍ",
	ConfirmSubCaption: ": باورول",
	UninstallingSubCaption: ": نالګيږي",
	UnCompletedSubCaption: ": بشپړ",
	BackBtn: "< &وروسته",
	NextBtn: "&مخکښې >",
	AgreeBtn: "زه &منم",
	AcceptBtn: "زه &د منښتليک توکي منم",
	DontAcceptBtn: "زه &د منښتليک توکي نه منم",
	InstallBtn: "&لګول",
	UninstallBtn: "&نالګول",
	CancelBtn: "بندول",
	CloseBtn: "&بندول",
	BrowseBtn: "...چ&ڼل",
	ShowDetailsBtn: "خبرتياوې &ښودل",
	ClickNext: ".مخکښې تلو لپاره مخکښې ټک وهئ",
	ClickInstall: ".لګاو پېلولو لپاره لګول ټک وهئ",
	ClickUninstall: ".نالګاو پېلولو لپاره نالګول ټک وهئ",
	Name: "نوم",
	Completed: "بشپړ",
	LicenseText: ".د لګولو نه مخکښې منښتليک وګورئ. که چېرې تاسې د منښتليک ټول توکي منئ، زه منم ټک وهئ $(^NameDA) د",
	LicenseTextCB: "$_CLICK .د لګولو نه مخکښې منښتليک وګورئ. که چېرې تاسې د منښتليک ټول توکي منئ، لاندې خوښبکس ټک وهئ $(^NameDA) د",
	LicenseTextRB: "$_CLICK .د لګولو نه مخکښې منښتليک وګورئ. که چېرې تاسې د منښتليک ټول توکي منئ، لاندې لمړی غوراوی خوښ کړئ $(^NameDA) د",
	UnLicenseText: ".د نالګاو نه مخکښې منښتليک وګورئ. که چېرې تاسې د منښتليک ټول توکي منئ، زه منم ټک وهئ $(^NameDA) د",
	UnLicenseTextCB: "$_CLICK .د نالګاو نه مخکښې منښتليک وګورئ. که چېرې تاسې د منښتليک ټول توکي منئ، لاندې خوښبکس ټک وهئ $(^NameDA) د",
	UnLicenseTextRB: "$_CLICK .د نالګاو نه مخکښې منښتليک وګورئ. که چېرې تاسې د منښتليک ټول توکي منئ، لاندې لمړی غوراوي خوښ کړئ $(^NameDA) د",
	Custom: "دوديز",
	ComponentsText: "$_CLICK .کوم رغتوکي چې لګول غواړئ خوښ يې کړئ او کوم رغتوکي چې نه غواړئ ويې لګوئ مه يې خوښوئ",
	ComponentsSubText1: ":د لګاو ډول وټاکئ",
	ComponentsSubText2_NoInstTypes: ":د لګولو لپاره رغتوکي خوښ کړئ",
	ComponentsSubText2: ":يا، هغه غوراويز رغتوکي چې لګول يې غواړئ وټاکئ",
	UnComponentsText: "$_CLICK .کوم رغتوکي چې نالګول غواړئ خوښ يې کړئ او کوم رغتوکي چې نه غواړئ ويې نالګوئ مه يې خوښوئ",
	UnComponentsSubText1: ":د نالګاو ډول وټاکئ",
	UnComponentsSubText2_NoInstTypes: ":د نالګولو لپاره رغتوکي وټاکئ",
	UnComponentsSubText2: ":يا، هغه غوراويز رغتوکي چې نالګول يې غواړئ وټاکئ",
	DirText: "$_CLICK .په لاندې پوښۍ کښې ولګوي. په بلې پوښۍ کښې يې د لګولو لپاره، چڼل ټک وهئ او بله پوښۍ وټاکئ $(^NameDA) امسته به",
	DirSubText: "موخه پوښۍ",
	DirBrowseText: ":پکښې لګول غواړئ وټاکئ $(^NameDA) هغه پوښۍ چې",
	UnDirText: "$_CLICK .د لاندې پوښۍ نه ونالګوي. د بلې پوښۍ نې د نالګولو لپاره، چڼل ټک وهئ او بله پوښۍ وټاکئ $(^NameDA) امسته به",
	UnDirSubText: "\"\"",
	UnDirBrowseText: ":ترې نالګول غواړئ وټاکئ $(^NameDA) هغه پوښۍ چې",
	SpaceAvailable: "\" :شته تشه\"",
	SpaceRequired: "\" :اړينه تشه\"",
	UninstallingText: "$_CLICK .به د لاندې پوښۍ نه ونالګول شي $(^NameDA)",
	UninstallingSubText: ":نالګيږي له",
	FileError: ":د ليکلو لپاره د دوتنې پرانيستلو کښې ستونزه \\r\\n\\r\\n$0\\r\\n\\r\\n،د لګاو د بندولو لپاره بندول ټک وهئ\\r\\nبياهڅه د بيا هڅې کولو لپاره، يا\\r\\n.پرېږده د دې دوتنې پرېښودلو لپاره",
	FileError_NoIgnore: ":د ليکلو لپاره د دوتنې پرانيستلو کښې ستونزه \\r\\n\\r\\n$0\\r\\n\\r\\nد بيا هڅې کولو لپاره بياهڅه ټک وهئ، يا\\r\\n.بندول د لګاو د بندولو لپاره",
	CantWrite: "\" :نشي ليکلی\"",
	CopyFailed: "لمېسلو پاتېينه",
	CopyTo: "\"ته لمېسل \"",
	Registering: "\" :نومکښليږي\"",
	Unregistering: "\" :نانومکښليږي\"",
	SymbolNotFound: "\" :پېلام نشي پېدا کولی\"",
	CouldNotLoad: "\" :نشي راوستلی\"",
	CreateFolder: "\" :پوښۍ جوړول\"",
	CreateShortcut: "\" :لنډلاری جوړول\"",
	CreatedUninstaller: "\" :جوړ شوی نالګاند\"",
	Delete: "\" :دوتنې ړنګول\"",
	DeleteOnReboot: "\" :پر بياپېلات ړنګول\"",
	ErrorCreatingShortcut: "\" :د لنډاري جوړولو ستونزه\"",
	ErrorCreating: "\" :جوړولو ستونزه\"",
	ErrorDecompressing: "اومتوک نازېرلو ستونزه! اندرغل لګاند؟",
	ErrorRegistering: "د ډلل نومکښلو ستونزه",
	ExecShell: "\" :اکزک شل\"",
	Exec: "\" :پېلول\"",
	Extract: "\" :وېستل\"",
	ErrorWriting: "\"وېستل: دوتنې کښې ليکلو ستونزه \"",
	InvalidOpcode: "اندرغل لګاند: ناسم اپکوډ",
	NoOLE: "\"No OLE for: \"",
	OutputFolder: "\" :وتنې پوښۍ\"",
	RemoveFolder: "\" :پوښې ړنګول\"",
	RenameOnReboot: "\" :پر بياپېلات بيانومول\"",
	Rename: "\" :بيانومول\"",
	Skipped: "\" :پرېښودلي\"",
	CopyDetails: "خبرتياوې ټوټې ډړې ته لمېسل",
	LogInstall: "د لګاو بهير خبرالول",
	Byte: "ب",
	Kilo: " ک",
	Mega: " م",
	Giga: " ګ"
};
var Pashto$1 = {
	header: header$I,
	id: id$I,
	font: font$I,
	code_page: code_page$I,
	rtl: rtl$I,
	strings: strings$I
};

var header$J = "NLF v6";
var id$J = 1045;
var font$J = {
	name: null,
	size: null
};
var code_page$J = 1250;
var rtl$J = false;
var strings$J = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Instalator $(^Name)",
	UninstallCaption: "Deinstalator $(^Name)",
	LicenseSubCaption: ": Umowa licencyjna",
	ComponentsSubCaption: ": Opcje instalacji",
	DirSubCaption: ": Folder instalacyjny",
	InstallingSubCaption: ": Instalowanie plików",
	CompletedSubCaption: ": Zakończono",
	UnComponentsSubCaption: ": Opcje deinstalacji",
	UnDirSubCaption: ": Folder deinstalacyjny",
	ConfirmSubCaption: ": Potwierdzenie",
	UninstallingSubCaption: ": Deinstalowanie plików",
	UnCompletedSubCaption: ": Zakończono",
	BackBtn: "< &Wstecz",
	NextBtn: "&Dalej >",
	AgreeBtn: "&Zgadzam się",
	AcceptBtn: "&Akceptuję warunki umowy licencyjnej",
	DontAcceptBtn: "&Nie akceptuję warunków umowy licencyjnej",
	InstallBtn: "&Zainstaluj",
	UninstallBtn: "&Odinstaluj",
	CancelBtn: "Anuluj",
	CloseBtn: "&Zamknij",
	BrowseBtn: "&Przeglądaj...",
	ShowDetailsBtn: "Pokaż &szczegóły",
	ClickNext: "Kliknij przycisk 'Dalej', aby kontynuować.",
	ClickInstall: "Kliknij przycisk 'Zainstaluj', aby rozpocząć instalację.",
	ClickUninstall: "Kliknij przycisk 'Odinstaluj', aby rozpocząć deinstalację.",
	Name: "Nazwa",
	Completed: "Zakończono",
	LicenseText: "Przed instalacją $(^NameDA) zapoznaj się z warunkami licencji. Jeśli akceptujesz wszystkie warunki umowy, kliknij przycisk 'Zgadzam się'.",
	LicenseTextCB: "Przed instalacją $(^NameDA) zapoznaj się z warunkami licencji. Jeśli akceptujesz wszystkie warunki umowy, kliknij poniższe pole wyboru. $_CLICK.",
	LicenseTextRB: "Przed instalacją $(^NameDA) zapoznaj się z warunkami licencji. Jeśli akceptujesz wszystkie warunki umowy, wybierz pierwszą z poniższych opcji. $_CLICK.",
	UnLicenseText: "Przed deinstalacją $(^NameDA) zapoznaj się z warunkami licencji. Jeśli akceptujesz wszystkie warunki umowy, kliknij przycisk 'Zgadzam się'.",
	UnLicenseTextCB: "Przed deinstalacją $(^NameDA) zapoznaj się z warunkami licencji. Jeśli akceptujesz wszystkie warunki umowy, kliknij poniższe pole wyboru. $_CLICK.",
	UnLicenseTextRB: "Przed deinstalacją $(^NameDA) zapoznaj się z warunkami licencji. Jeśli akceptujesz wszystkie warunki umowy, wybierz pierwszą z poniższych opcji. $_CLICK.",
	Custom: "Użytkownika",
	ComponentsText: "Zaznacz komponenty, które chcesz zainstalować i odznacz te, których nie chcesz instalować. $_CLICK",
	ComponentsSubText1: "Wybierz typ instalacji:",
	ComponentsSubText2_NoInstTypes: "Wybierz komponenty do zainstalowania:",
	ComponentsSubText2: "Albo wybierz opcjonalne komponenty, które chcesz zainstalować:",
	UnComponentsText: "Zaznacz komponenty, które chcesz odinstalować i odznacz te, które nie zostaną odinstalowane. $_CLICK",
	UnComponentsSubText1: "Wybierz typ deinstalacji:",
	UnComponentsSubText2_NoInstTypes: "Wybierz komponenty do odinstalowania:",
	UnComponentsSubText2: "Albo wybierz opcjonalne komponenty, które chcesz odinstalować:",
	DirText: "Instalator zainstaluje $(^NameDA) w podanym poniżej folderze docelowym (możesz także kliknąć przycisk 'Przeglądaj...' i wybrać inny folder). $_CLICK",
	DirSubText: "Folder docelowy",
	DirBrowseText: "Wybierz folder instalacyjny $(^NameDA):",
	UnDirText: "Deinstalator usunie $(^NameDA) z następującego folderu. Aby odinstalować z innego folderu, kliknij przycisk 'Przeglądaj...' i wybierz folder. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Wybierz folder, z którego zostanie odinstalowany $(^NameDA):",
	SpaceAvailable: "\"Dostępne miejsce: \"",
	SpaceRequired: "\"Wymagane miejsce: \"",
	UninstallingText: "Ten kreator odinstaluje $(^NameDA) z Twojego komputera. $_CLICK",
	UninstallingSubText: "Deinstalacja z: ",
	FileError: "Błąd otwarcia pliku do zapisu: \\r\\n\\r\\n$0\\r\\n\\r\\nWybierz 'Anuluj', aby przerwać instalację,\\r\\n'Ponów', aby ponowić zapis do pliku lub\\r\\n'Ignoruj', aby pominąć ten plik.",
	FileError_NoIgnore: "Błąd otwarcia pliku do zapisu: \\r\\n\\r\\n$0\\r\\n\\r\\nWybierz 'Ponów', aby ponowić zapis do pliku lub\\r\\n'Anuluj', aby przerwać instalację.",
	CantWrite: "\"Nie można zapisać: \"",
	CopyFailed: "Błąd kopiowania",
	CopyTo: "\"Kopiuj do \"",
	Registering: "\"Rejestrowanie: \"",
	Unregistering: "\"Wyrejestrowywanie: \"",
	SymbolNotFound: "\"Nie można odnaleźć symbolu: \"",
	CouldNotLoad: "\"Nie można wczytać: \"",
	CreateFolder: "\"Utwórz folder: \"",
	CreateShortcut: "\"Utwórz skrót: \"",
	CreatedUninstaller: "\"Utworzono deinstalator: \"",
	Delete: "\"Usuń plik: \"",
	DeleteOnReboot: "\"Usuń przy ponownym uruchomieniu: \"",
	ErrorCreatingShortcut: "\"Błąd tworzenia skrótu: \"",
	ErrorCreating: "\"Błąd tworzenia: \"",
	ErrorDecompressing: "Błąd wyodrębniania danych! Uszkodzony instalator?",
	ErrorRegistering: "Błąd rejestracji pliku DLL",
	ExecShell: "\"ExecShell: \"",
	Exec: "\"Uruchom: \"",
	Extract: "\"Wyodrębnij: \"",
	ErrorWriting: "\"Wyodrębnij: błąd zapisu do pliku \"",
	InvalidOpcode: "Instalator uszkodzony: nieprawidłowy kod operacji",
	NoOLE: "\"Brak OLE dla: \"",
	OutputFolder: "\"Folder wyjściowy: \"",
	RemoveFolder: "\"Usuń folder: \"",
	RenameOnReboot: "\"Zmień nazwę przy ponownym uruchomieniu: \"",
	Rename: "\"Zmień nazwę: \"",
	Skipped: "\"Pominięte: \"",
	CopyDetails: "Kopiuj szczegóły do schowka",
	LogInstall: "Rejestruj przebieg instalacji",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Polish$1 = {
	header: header$J,
	id: id$J,
	font: font$J,
	code_page: code_page$J,
	rtl: rtl$J,
	strings: strings$J
};

var header$K = "NLF v6";
var id$K = 2070;
var font$K = {
	name: null,
	size: null
};
var code_page$K = 1252;
var rtl$K = false;
var strings$K = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Instalação de $(^Name)",
	UninstallCaption: "Desinstalação de $(^Name)",
	LicenseSubCaption: ": Contrato de Licença",
	ComponentsSubCaption: ": Opções de instalação",
	DirSubCaption: ": Diretório de instalação",
	InstallingSubCaption: ": Instalando Ficheiros",
	CompletedSubCaption: ": Concluído",
	UnComponentsSubCaption: ": Opções de Desinstalação",
	UnDirSubCaption: ": Pasta de Desinstalação",
	ConfirmSubCaption: ": Confirmação",
	UninstallingSubCaption: ": Desinstalando",
	UnCompletedSubCaption: ": Concluído",
	BackBtn: "< &Anterior",
	NextBtn: "&Seguinte >",
	AgreeBtn: "&Aceito",
	AcceptBtn: "Eu &aceito os termos do Contrato de Licença",
	DontAcceptBtn: "Eu &não aceito os termos do Contrato de Licença",
	InstallBtn: "&Instalar",
	UninstallBtn: "&Desinstalar",
	CancelBtn: "Cancelar",
	CloseBtn: "&Fechar",
	BrowseBtn: "&Procurar...",
	ShowDetailsBtn: "Ver &Detalhes",
	ClickNext: "Clique em 'Seguinte' para continuar.",
	ClickInstall: "Clique em 'Instalar' para iniciar a instalação.",
	ClickUninstall: "Clique em 'Desinstalar' para iniciar a desinstalação.",
	Name: "Nome",
	Completed: "Concluído",
	LicenseText: "Por favor reveja o acordo de licença antes de instalar $(^NameDA). Se concorda com todos os termos da licença, clique em 'Aceito'.",
	LicenseTextCB: "Por favor reveja o acordo de licença antes de instalar $(^NameDA). Se concorda com todos os termos da licença, clique na caixa de seleção abaixo. $_CLICK",
	LicenseTextRB: "Por favor reveja o acordo de licença antes de instalar $(^NameDA). Se concorda com todos os termos da licença, escolha a primeira opção abaixo. $_CLICK",
	UnLicenseText: "Por favor reveja o acordo de licença antes de desinstalar $(^NameDA). Se concorda com todos os termos da licença, clique em 'Aceito'.",
	UnLicenseTextCB: "Por favor reveja o acordo de licença antes de desinstalar $(^NameDA). Se concorda com todos os termos da licença, clique na caixa de seleção abaixo. $_CLICK",
	UnLicenseTextRB: "Por favor reveja o acordo de licença antes de desinstalar $(^NameDA). Se concorda com todos os termos da licença, escolha a primeira opção abaixo. $_CLICK",
	Custom: "Personalizado",
	ComponentsText: "Marque os componentes que deseja instalar e desmarque os componentes que não deseja instalar. $_CLICK",
	ComponentsSubText1: "Escolha o tipo de instalação:",
	ComponentsSubText2_NoInstTypes: "Escolha os componentes para instalar:",
	ComponentsSubText2: "Ou, escolha os componentes opcionais que deseja instalar:",
	UnComponentsText: "Marque os componentes que queira desinstalar e vice versa. $_CLICK",
	UnComponentsSubText1: "Escolha o tipo de desinstalação: ",
	UnComponentsSubText2_NoInstTypes: "Escolha os componentes para desinstalar:",
	UnComponentsSubText2: "Ou, escolha os componentes opcionais que queira desinstalar:",
	DirText: "O $(^NameDA) será instalado na seguinte pasta. Para instalar numa pasta diferente, clique em 'Procurar...' e escolha outra pasta. $_CLICK",
	DirSubText: "Pasta de Destino",
	DirBrowseText: "Escolha uma pasta para instalar o $(^NameDA):",
	UnDirText: "O $(^NameDA) será desinstalado da seguinte pasta. Para desinstalar de uma pasta diferente, clique em 'Procurar...' e escolha outra pasta. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Escolha uma pasta de onde será desinstalado o $(^NameDA):",
	SpaceAvailable: "\"Espaço disponível: \"",
	SpaceRequired: "\"Espaço necessário: \"",
	UninstallingText: "$(^NameDA) será desinstalado da seguinte pasta. $_CLICK",
	UninstallingSubText: "Desinstalando de:",
	FileError: "Erro ao abrir ficheiro para escrita: \\r\\n\\t\"$0\"\\r\\nClique em Abortar para abortar a instalação,\\r\\nRepetir para tentar novamente a escrita do ficheiro, ou\\r\\nIgnorar para ignorar este ficheiro.",
	FileError_NoIgnore: "Erro ao abrir ficheiro para escrita: \\r\\n\\t\"$0\"\\r\\nClique em Repetir para tentar novamente a gravação do ficheiro, ou\\r\\nCancelar para abortar a instalação.",
	CantWrite: "\"Não foi possível escrever: \"",
	CopyFailed: "Falha ao copiar",
	CopyTo: "\"Copiar para \"",
	Registering: "\"Registando: \"",
	Unregistering: "\"Desregistando: \"",
	SymbolNotFound: "\"Símbolo não encontrado: \"",
	CouldNotLoad: "\"Não foi possível carregar: \"",
	CreateFolder: "\"Criando diretório: \"",
	CreateShortcut: "\"Criando atalho: \"",
	CreatedUninstaller: "\"Criando desinstalador: \"",
	Delete: "\"Apagando ficheiro: \"",
	DeleteOnReboot: "\"Apagar ao reiniciar: \"",
	ErrorCreatingShortcut: "\"Erro ao criar atalho: \"",
	ErrorCreating: "\"Erro ao criar: \"",
	ErrorDecompressing: "Erro ao descomprimir dados! Instalador corrompido?",
	ErrorRegistering: "Erro ao registar DLL",
	ExecShell: "\"Executando pelo Shell: \"",
	Exec: "\"Executando: \"",
	Extract: "\"Extraindo: \"",
	ErrorWriting: "\"Extraindo: erro ao escrever ficheiro \"",
	InvalidOpcode: "Instalador corrompido: código de operação inválido",
	NoOLE: "\"Sem OLE para: \"",
	OutputFolder: "\"Pasta de destino: \"",
	RemoveFolder: "\"Removendo pasta: \"",
	RenameOnReboot: "\"Renomear ao reiniciar: \"",
	Rename: "\"Renomeando: \"",
	Skipped: "\"Ignorado: \"",
	CopyDetails: "Copiar detalhes para a Área de Transfêrencia",
	LogInstall: "Registar processo de instalação",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Portuguese$1 = {
	header: header$K,
	id: id$K,
	font: font$K,
	code_page: code_page$K,
	rtl: rtl$K,
	strings: strings$K
};

var header$L = "NLF v6";
var id$L = 1046;
var font$L = {
	name: null,
	size: null
};
var code_page$L = 1252;
var rtl$L = false;
var strings$L = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Instalação do $(^Name)",
	UninstallCaption: "Desinstalação do $(^Name)",
	LicenseSubCaption: ": Acordo de licença",
	ComponentsSubCaption: ": Opções da Instalação",
	DirSubCaption: ": Pasta da Instalação",
	InstallingSubCaption: ": Instalando",
	CompletedSubCaption: ": Completado",
	UnComponentsSubCaption: ": Opções da Desinstalação",
	UnDirSubCaption: ": Pasta da Desinstalação",
	ConfirmSubCaption: ": Confirmação",
	UninstallingSubCaption: ": Desinstalando",
	UnCompletedSubCaption: ": Completado",
	BackBtn: "< &Voltar",
	NextBtn: "&Próximo >",
	AgreeBtn: "Eu &Concordo",
	AcceptBtn: "Eu &aceito os termos do Acordo de Licença",
	DontAcceptBtn: "Eu &não aceito os termos do Acordo de Licença",
	InstallBtn: "&Instalar",
	UninstallBtn: "&Desinstalar",
	CancelBtn: "Cancelar",
	CloseBtn: "&Fechar",
	BrowseBtn: "P&rocurar...",
	ShowDetailsBtn: "Mostrar &detalhes",
	ClickNext: "Clique em Próximo para continuar.",
	ClickInstall: "Clique em Instalar para iniciar a instalação.",
	ClickUninstall: "Clique em Desinstalar para iniciar a desinstalação.",
	Name: "Nome",
	Completed: "Completado",
	LicenseText: "Por favor, leia com atenção o acordo de licença antes de instalar o $(^NameDA). Se você aceita todos os termos do acordo, clique em Eu Concordo.",
	LicenseTextCB: "Por favor, leia com atenção o acordo de licença antes de instalar o $(^NameDA). Se você aceita todos os termos do acordo, clique na caixa de seleção abaixo. $_CLICK",
	LicenseTextRB: "Por favor, leia com atenção o acordo de licença antes de instalar o $(^NameDA). Se você aceita todos os termos do acordo, selecione a primeira opção abaixo. $_CLICK",
	UnLicenseText: "Por favor, leia com atenção o acordo de licença antes de desinstalar o $(^NameDA). Se você aceita todos os termos do acordo, clique em Eu Concordo.",
	UnLicenseTextCB: "Por favor, leia com atenção o acordo de licença antes de desinstalar o $(^NameDA). Se você aceita todos os termos do acordo, clique na caixa de seleção abaixo. $_CLICK",
	UnLicenseTextRB: "Por favor, leia com atenção o acordo de licença antes de desinstalar o $(^NameDA). Se você aceita todos os termos do acordo, selecione a primeira opção abaixo. $_CLICK",
	Custom: "Personalizado",
	ComponentsText: "Marque os componentes que você quer instalar e desmarque os componentes que você não quer instalar. $_CLICK",
	ComponentsSubText1: "Selecione o tipo de instalação:",
	ComponentsSubText2_NoInstTypes: "Selecione os componentes a instalar:",
	ComponentsSubText2: "Ou, selecione os componentes opcionais que você deseja instalar:",
	UnComponentsText: "Marque os componentes que você quer desinstalar e desmarque os componentes que você não quer desinstalar. $_CLICK",
	UnComponentsSubText1: "Selecione o tipo de desinstalação:",
	UnComponentsSubText2_NoInstTypes: "Selecione os componentes a desinstalar:",
	UnComponentsSubText2: "Ou, selecione os componentes opcionais que você deseja desinstalar:",
	DirText: "O $(^NameDA) será instalado na pasta a seguir. Para instalar em uma pasta diferente, clique em Procurar e selecione outra pasta. $_CLICK",
	DirSubText: "Pasta de Destino",
	DirBrowseText: "Selecione a pasta para instalar o $(^NameDA):",
	UnDirText: "O $(^NameDA) será desinstalado da pasta a seguir. Para desinstalar de uma pasta diferente, clique em Procurar e selecione outra pasta. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Selecione a pasta de onde desinstalar o $(^NameDA):",
	SpaceAvailable: "\"Espaço disponível: \"",
	SpaceRequired: "\"Espaço necessário: \"",
	UninstallingText: "O $(^NameDA) será desinstalado da pasta a seguir. $_CLICK",
	UninstallingSubText: "Desinstalando de:",
	FileError: "Erro ao abrir o arquivo para gravação: \\r\\n\\r\\n$0\\r\\n\\r\\nClique em Abortar para parar a instalação,\\r\\nRepetir para tentar de novo, ou\\r\\nIgnorar para pular este arquivo.",
	FileError_NoIgnore: "Erro ao abrir o arquivo para gravação: \\r\\n\\r\\n$0\\r\\n\\r\\nClique em Repetir para tentar de novo, ou\\r\\nCancelar para parar a instalação.",
	CantWrite: "\"Não foi possível gravar: \"",
	CopyFailed: "Falha ao copiar",
	CopyTo: "\"Copiar para \"",
	Registering: "\"Registrando: \"",
	Unregistering: "\"Desfazendo o registro: \"",
	SymbolNotFound: "\"Não foi possível localizar o símbolo: \"",
	CouldNotLoad: "\"Não foi possível carregar: \"",
	CreateFolder: "\"Criar pasta: \"",
	CreateShortcut: "\"Criar atalho: \"",
	CreatedUninstaller: "\"Desinstalador criado: \"",
	Delete: "\"Excluir o arquivo: \"",
	DeleteOnReboot: "\"Excluir ao reiniciar: \"",
	ErrorCreatingShortcut: "\"Erro ao criar atalho: \"",
	ErrorCreating: "\"Erro ao criar: \"",
	ErrorDecompressing: "Erro ao descomprimir os dados! Instalador corrompido?",
	ErrorRegistering: "Erro ao registar a DLL",
	ExecShell: "\"ExecShell: \"",
	Exec: "\"Executar: \"",
	Extract: "\"Extrair: \"",
	ErrorWriting: "\"Extrair: erro ao gravar o arquivo \"",
	InvalidOpcode: "Instalador corrompido: opcode inválido",
	NoOLE: "\"Sem OLE para: \"",
	OutputFolder: "\"Pasta de saída: \"",
	RemoveFolder: "\"Excluir a pasta: \"",
	RenameOnReboot: "\"Renomear ao reiniciar: \"",
	Rename: "\"Renomear: \"",
	Skipped: "\"Ignorado: \"",
	CopyDetails: "Copiar os Detalhes para a Área de Transferência",
	LogInstall: "Registrar o processo de instalação",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var PortugueseBR$1 = {
	header: header$L,
	id: id$L,
	font: font$L,
	code_page: code_page$L,
	rtl: rtl$L,
	strings: strings$L
};

var header$M = "NLF v6";
var id$M = 1048;
var font$M = {
	name: null,
	size: null
};
var code_page$M = 1250;
var rtl$M = false;
var strings$M = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Instalare $(^Name)",
	UninstallCaption: "Dezinstalare $(^Name)",
	LicenseSubCaption: ": Contract de licenţă",
	ComponentsSubCaption: ": Opţiuni instalare",
	DirSubCaption: ": Directorul destinaţie",
	InstallingSubCaption: ": În curs de instalare",
	CompletedSubCaption: ": Instalare terminată",
	UnComponentsSubCaption: ": Opţiuni dezinstalare",
	UnDirSubCaption: ": Directorul de dezinstalare",
	ConfirmSubCaption: ": Confirmă",
	UninstallingSubCaption: ": În curs de dezinstalare",
	UnCompletedSubCaption: ": Termină",
	BackBtn: "< Îna&poi",
	NextBtn: "Îna&inte >",
	AgreeBtn: "&De acord",
	AcceptBtn: "&Accept termenii contractului de licenţă",
	DontAcceptBtn: "Nu accept termenii contractului de licenţă",
	InstallBtn: "&Instalează",
	UninstallBtn: "&Dezinstalează",
	CancelBtn: "&Renunţă",
	CloseBtn: "În&chide",
	BrowseBtn: "&Alege...",
	ShowDetailsBtn: "Arată &detalii",
	ClickNext: "Apăsaţi Înainte pentru a continua.",
	ClickInstall: "Apăsaţi Instalează pentru a începe instalarea.",
	ClickUninstall: "Apăsaţi Dezinstalează pentru a începe dezinstalarea.",
	Name: "Nume",
	Completed: "Terminat",
	LicenseText: "Citiţi cu atenţie contractul de licenţă înainte de a instala $(^NameDA). Dacă acceptaţi termenii contractului de licenţă, apăsaţi butonul De acord.",
	LicenseTextCB: "Citiţi cu atenţie contractul de licenţă înainte de a instala $(^NameDA). Dacă acceptaţi termenii contractului de licenţă, bifaţi căsuţa de mai jos. $_CLICK",
	LicenseTextRB: "Citiţi cu atenţie contractul de licenţă înainte de a instala $(^NameDA). Dacă acceptaţi termenii contractului de licenţă, selectaţi prima opţiune de mai jos. $_CLICK",
	UnLicenseText: "Citiţi cu atenţie contractul de licenţă înainte de a dezinstala $(^NameDA). Dacă acceptaţi termenii contractului de licenţă, apăsaţi butonul De acord.",
	UnLicenseTextCB: "Citiţi cu atenţie contractul de licenţă înainte de a dezinstala $(^NameDA). Dacă acceptaţi termenii contractului de licenţă, bifaţi căsuţa de mai jos. $_CLICK",
	UnLicenseTextRB: "Citiţi cu atenţie contractul de licenţă înainte de a dezinstala $(^NameDA). Dacă acceptaţi termenii contractului de licenţă, selectaţi prima opţiune de mai jos. $_CLICK",
	Custom: "Personalizată",
	ComponentsText: "Alegeţi componentele pe care doriţi să le instalaţi. $_CLICK",
	ComponentsSubText1: "Alegeţi tipul instalării:",
	ComponentsSubText2_NoInstTypes: "Alegeţi componentele ce urmează a fi instalate:",
	ComponentsSubText2: "Sau, alegeţi componentele opţionale pe care doriţi să le instalaţi:",
	UnComponentsText: "Alegeţi componentele pe care doriţi să le dezinstalaţi. $_CLICK",
	UnComponentsSubText1: "Alegeţi tipul de dezinstalare:",
	UnComponentsSubText2_NoInstTypes: "Alegeţi componentele ce urmează a fi dezinstalate:",
	UnComponentsSubText2: "Sau, alegeţi componentele opţionale pe care doriţi să le dezinstalaţi:",
	DirText: "$(^NameDA) se va instala în următorul director. Pentru a alege altă destinaţie, apăsaţi Alege şi alegeţi alt director. $_CLICK",
	DirSubText: "Director destinaţie",
	DirBrowseText: "Alegeţi directorul în care doriţi să instalaţi $(^NameDA):",
	UnDirText: "$(^NameDA) se va dezinstala din următorul director. Pentru a dezinstala din alt director, apăsaţi Alege şi alegeţi alt director. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Alegeţi directorul de dezinstalare al $(^NameDA):",
	SpaceAvailable: "\"Spaţiu disponibil: \"",
	SpaceRequired: "\"Spaţiu necesar: \"",
	UninstallingText: "Această aplicaţie va dezinstala $(^NameDA) din computerul Dv. $_CLICK",
	UninstallingSubText: "Dezinstalare din:",
	FileError: "Eroare la scrierea fişierului: \\r\\n\\t\"$0\"\\r\\nApăsaţi Abort pentru oprirea instalării,\\r\\nRetry pentru a mai încerca o dată scrierea fişierului, \\r\\nIgnore pentru a trece peste acest fişier.",
	FileError_NoIgnore: "Eroare la scrierea fişierului: \\r\\n\\t\"$0\"\\r\\nApăsaţi Retry pentru a mai încerca o dată, sau\\r\\nAbort pentru oprirea instalării.",
	CantWrite: "\"Nu am putut scrie: \"",
	CopyFailed: "Copierea a eşuat",
	CopyTo: "\"Copiere în \"",
	Registering: "\"Se înregistrează: \"",
	Unregistering: "\"Se dezînregistrează din registru: \"",
	SymbolNotFound: "\"Simbolul nu a fost găsit: \"",
	CouldNotLoad: "\"Nu am putut încărca: \"",
	CreateFolder: "\"Creare director: \"",
	CreateShortcut: "\"Creare comandă rapidă: \"",
	CreatedUninstaller: "\"S-a creat aplicaţia de dezinstalare: \"",
	Delete: "\"Ştergere fişier: \"",
	DeleteOnReboot: "\"Ştergere la repornire: \"",
	ErrorCreatingShortcut: "\"Eroare la crearea comenzii rapide: \"",
	ErrorCreating: "\"Eroare la creare: \"",
	ErrorDecompressing: "Eroare la dezarhivarea datelor! Aplicatia de instalare este defectă?",
	ErrorRegistering: "Eroare la Înregistrarea DLL-ului",
	ExecShell: "\"ExecShell: \"",
	Exec: "\"Executare: \"",
	Extract: "\"Extragere: \"",
	ErrorWriting: "\"Extragere: eroare la scriere în fişier \"",
	InvalidOpcode: "Aplicaţie de instalare defectă: opcode incorect",
	NoOLE: "\"Nu există OLE pentru: \"",
	OutputFolder: "\"Directorul destinaţie: \"",
	RemoveFolder: "\"Ştergere destinaţie: \"",
	RenameOnReboot: "\"Redenumire la repornirea computerului: \"",
	Rename: "\"Redenumire: \"",
	Skipped: "\"Sărite: \"",
	CopyDetails: "Copiere detalii în clipboard",
	LogInstall: "Jurnal proces instalare",
	Byte: "O",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Romanian$1 = {
	header: header$M,
	id: id$M,
	font: font$M,
	code_page: code_page$M,
	rtl: rtl$M,
	strings: strings$M
};

var header$N = "NLF v6";
var id$N = 1049;
var font$N = {
	name: null,
	size: null
};
var code_page$N = 1251;
var rtl$N = false;
var strings$N = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Установка $(^Name)",
	UninstallCaption: "Удаление $(^Name)",
	LicenseSubCaption: ": Лицензионное соглашение",
	ComponentsSubCaption: ": Параметры установки",
	DirSubCaption: ": Папка установки",
	InstallingSubCaption: ": Копирование файлов",
	CompletedSubCaption: ": Операция завершена",
	UnComponentsSubCaption: ": Параметры удаления",
	UnDirSubCaption: ": Папка удаления",
	ConfirmSubCaption: ": Подтверждение",
	UninstallingSubCaption: ": Удаление файлов",
	UnCompletedSubCaption: ": Операция завершена",
	BackBtn: "< &Назад",
	NextBtn: "&Далее >",
	AgreeBtn: "Принима&ю",
	AcceptBtn: "Я &принимаю условия соглашения",
	DontAcceptBtn: "Я &не принимаю условия соглашения",
	InstallBtn: "&Установить",
	UninstallBtn: "Уд&алить",
	CancelBtn: "Отмена",
	CloseBtn: "&Закрыть",
	BrowseBtn: "О&бзор ...",
	ShowDetailsBtn: "&Детали...",
	ClickNext: "Нажмите кнопку \"Далее\" для продолжения.",
	ClickInstall: "Нажмите кнопку \"Установить\", чтобы установить программу.",
	ClickUninstall: "Нажмите кнопку \"Удалить\", чтобы удалить программу.",
	Name: "Имя",
	Completed: "Готово",
	LicenseText: "Перед установкой $(^NameDA) ознакомьтесь с лицензионным соглашением. Если вы принимаете условия соглашения, нажмите кнопку \"Принимаю\".",
	LicenseTextCB: "Перед установкой $(^NameDA) ознакомьтесь с лицензионным соглашением. Если вы принимаете условия соглашения, установите флажок ниже. $_CLICK",
	LicenseTextRB: "Перед установкой $(^NameDA) ознакомьтесь с лицензионным соглашением. Если вы принимаете условия соглашения, выберите первый вариант из предложенных ниже. $_CLICK",
	UnLicenseText: "Перед установкой $(^NameDA) ознакомьтесь с лицензионным соглашением. Если вы принимаете условия соглашения, нажмите кнопку \"Принимаю\".",
	UnLicenseTextCB: "Перед установкой $(^NameDA) ознакомьтесь с лицензионным соглашением. Если вы принимаете условия соглашения, установите флажок ниже. $_CLICK",
	UnLicenseTextRB: "Перед установкой $(^NameDA) ознакомьтесь с лицензионным соглашением. Если вы принимаете условия соглашения, выберите первый вариант из предложенных ниже. $_CLICK",
	Custom: "По выбору",
	ComponentsText: "Выберите компоненты программы, которые вы хотите установить. $_CLICK",
	ComponentsSubText1: "Выберите тип установки:",
	ComponentsSubText2_NoInstTypes: "Выберите компоненты программы для установки:",
	ComponentsSubText2: "или выберите дополнительные компоненты для установки:",
	UnComponentsText: "Выберите компоненты, которые вы хотите удалить. $_CLICK",
	UnComponentsSubText1: "Выберите тип удаления:",
	UnComponentsSubText2_NoInstTypes: "Выберите компоненты для удаления:",
	UnComponentsSubText2: "или выберите дополнительные компоненты для удаления:",
	DirText: "Программа установит $(^NameDA) в указанную папку. Чтобы установить приложение в другую папку, нажмите кнопку \"Обзор\" и укажите ее. $_CLICK",
	DirSubText: "Папка установки",
	DirBrowseText: "Укажите папку для установки $(^NameDA):",
	UnDirText: "Программа удалит $(^NameDA) из указанной папки. Чтобы выполнить удаление из другой папки, нажмите кнопку \"Обзор\" и укажите ее. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Укажите папку, из которой нужно удалить $(^NameDA):",
	SpaceAvailable: "\"Доступно на диске: \"",
	SpaceRequired: "\"Требуется на диске: \"",
	UninstallingText: "Программа $(^NameDA) будет удалена из вашего ПК. $_CLICK",
	UninstallingSubText: "Удаление из:",
	FileError: "Невозможно открыть файл для записи: \\r\\n\\t\"$0\"\\r\\n\"Прервать\": остановить установку;\\r\\n\"Повтор\": повторить попытку;\\r\\n\"Пропуск\": пропустить это действие.",
	FileError_NoIgnore: "Невозможно открыть файл для записи: \\r\\n\\t\"$0\"\\r\\n\"Повтор\": повторить попытку;\\r\\n\"Отмена\": прервать процесс установки.",
	CantWrite: "\"Невозможно записать: \"",
	CopyFailed: "Ошибка при копировании",
	CopyTo: "\"Копирование в \"",
	Registering: "\"Регистрация: \"",
	Unregistering: "\"Де-регистрация: \"",
	SymbolNotFound: "\"Невозможно найти символ: \"",
	CouldNotLoad: "\"Невозможно загрузить: \"",
	CreateFolder: "\"Создание папки: \"",
	CreateShortcut: "\"Создание ярлыка: \"",
	CreatedUninstaller: "\"Создание программы удаления: \"",
	Delete: "\"Удаление файла: \"",
	DeleteOnReboot: "\"Удаление при перезагрузке ПК: \"",
	ErrorCreatingShortcut: "\"Ошибка создания ярлыка: \"",
	ErrorCreating: "\"Ошибка создания: \"",
	ErrorDecompressing: "Ошибка распаковки данных! Возможно, повреждён дистрибутив.",
	ErrorRegistering: "Невозможно зарегистрировать библиотеку (DLL)",
	ExecShell: "\"Выполнение команды оболочки: \"",
	Exec: "\"Выполнение: \"",
	Extract: "\"Извлечение: \"",
	ErrorWriting: "\"Извлечение: ошибка записи файла \"",
	InvalidOpcode: "Дистрибутив поврежден: недопустимый код",
	NoOLE: "\"Нет OLE для: \"",
	OutputFolder: "\"Папка установки: \"",
	RemoveFolder: "\"Удаление папки: \"",
	RenameOnReboot: "\"Переименование при перезагрузке ПК: \"",
	Rename: "\"Переименование: \"",
	Skipped: "\"Пропуск: \"",
	CopyDetails: "Копировать сведения в буфер обмена",
	LogInstall: "Вести отчет установки",
	Byte: "байт",
	Kilo: " К",
	Mega: " М",
	Giga: " Г"
};
var Russian$1 = {
	header: header$N,
	id: id$N,
	font: font$N,
	code_page: code_page$N,
	rtl: rtl$N,
	strings: strings$N
};

var header$O = "NLF v6";
var id$O = 1169;
var font$O = {
	name: null,
	size: null
};
var code_page$O = 1252;
var rtl$O = false;
var strings$O = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "A’ stàladh $(^Name)",
	UninstallCaption: "A’ dì-stàladh $(^Name)",
	LicenseSubCaption: ": Aonta ceadachais",
	ComponentsSubCaption: ": Roghainnean an stàlaidh",
	DirSubCaption: ": Pasgan an stàlaidh",
	InstallingSubCaption: ": ’Ga stàladh",
	CompletedSubCaption: ": Deiseil",
	UnComponentsSubCaption: ": Roghainnean an dì-stàlaidh",
	UnDirSubCaption: ": Pasgan an dì-stàlaidh",
	ConfirmSubCaption: ": Dearbhadh",
	UninstallingSubCaption: ": ’Ga dhì-stàladh",
	UnCompletedSubCaption: ": Deiseil",
	BackBtn: "< Air ai&s",
	NextBtn: "Air adha&rt >",
	AgreeBtn: "&Gabhaidh mi ris",
	AcceptBtn: "&Gabhaidh mi teirmichean an aonta cheadachais",
	DontAcceptBtn: "&Diùltaidh mi teirmichean an aonta ceadachais",
	InstallBtn: "&Stàlaich",
	UninstallBtn: "&Dì-stàlaich",
	CancelBtn: "Sguir dheth",
	CloseBtn: "&Dùin",
	BrowseBtn: "&Rùraich…",
	ShowDetailsBtn: "&Mion-fhiosrachadh",
	ClickNext: "Briog air “Air adhart” gus leantainn air adhart.",
	ClickInstall: "Briog air “Stàlaich” gus tòiseachadh air an stàladh.",
	ClickUninstall: "Briog air “Dì-stàlaich” gus tòiseachadh air an dì-stàladh.",
	Name: "Ainm",
	Completed: "Coileanta",
	LicenseText: "Feuch an doir thu sùil air an aonta cheadachais mus stàlaich thu $(^NameDA). Ma ghabhas tu ris a h-uile teirm san aonta, briog air “Gabhaidh mi ris”.",
	LicenseTextCB: "Feuch an doir thu sùil air an aonta cheadachais mus stàlaich thu $(^NameDA). Ma ghabhas tu ris a h-uile teirm san aonta, cuir cromag sa bhogsa gu h-ìosal. $_CLICK",
	LicenseTextRB: "Feuch an doir thu sùil air an aonta cheadachais mus stàlaich thu $(^NameDA). Ma ghabhas tu ris a h-uile teirm san aonta, tagh a’ chiad roghainn gu h-ìosal. $_CLICK",
	UnLicenseText: "Feuch an doir thu sùil air an aonta cheadachais mus dì-stàlaich thu $(^NameDA). Ma ghabhas tu ris a h-uile teirm san aonta, Briog air “Gabhaidh mi ris”.",
	UnLicenseTextCB: "Feuch an doir thu sùil air an aonta cheadachais mus dì-stàlaich thu $(^NameDA). Ma ghabhas tu ris a h-uile teirm san aonta, cuir cromag sa bhogsa gu h-ìosal. $_CLICK",
	UnLicenseTextRB: "Feuch an doir thu sùil air an aonta cheadachais mus dì-stàlaich thu $(^NameDA). Ma ghabhas tu ris a h-uile teirm san aonta, tagh a’ chiad roghainn gu h-ìosal. $_CLICK",
	Custom: "Gnàthaichte",
	ComponentsText: "Thoir cromag ann am bogsaichean nan co-phàirtean a tha thu airson stàladh is thoir air falbh i o bhogsaichean nan co-phàirtean nach eil thu ag iarraidh. $_CLICK",
	ComponentsSubText1: "Tagh an seòrsa dhen stàladh:",
	ComponentsSubText2_NoInstTypes: "Tagh na co-phàirtean a tha thu airson stàladh:",
	ComponentsSubText2: "No tagh na co-phàirtean roghainneil a tha thu airson stàladh:",
	UnComponentsText: "Thoir cromag ann am bogsaichean nan co-phàirtean a tha thu airson dì-stàladh is thoir air falbh i o bhogsaichean nan co-phàirtean a tha thu airson cumail. $_CLICK",
	UnComponentsSubText1: "Tagh an seòrsa dhen dì-stàladh:",
	UnComponentsSubText2_NoInstTypes: "Tagh na co-phàirtean a tha thu airson dì-stàladh:",
	UnComponentsSubText2: "No tagh na co-phàirtean roghainneil a tha thu airson dì-stàladh:",
	DirText: "Thèid $(^NameDA) a stàladh sa phasgan seo. Gus stàladh ann am pasgan eile, briog air “Rùraich” is tagh pasgan eile. $_CLICK",
	DirSubText: "Pasgan-uidhe",
	DirBrowseText: "Tagh am pasgan san dèid $(^NameDA) a stàladh:",
	UnDirText: "Thèid $(^NameDA) a dhì-stàladh on phasgan seo. Gus dì-stàladh o phasgan eile, briog air “Rùraich” is tagh pasgan eile. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Tagh am pasgan on a tha thu airson $(^NameDA) a dhì-stàladh:",
	SpaceAvailable: "\"Àite ri fhaighinn: \"",
	SpaceRequired: "\"Àite air a bheil feum: \"",
	UninstallingText: "Thèid $(^NameDA) a dhì-stàladh on phasgan seo. $_CLICK",
	UninstallingSubText: "’Ga dhì-stàladh o:",
	FileError: "Thachair mearachd a’ fosgladh an fhaidhle a chum sgrìobhaidh: \\r\\n\\r\\n$0\\r\\n\\r\\nBriog air “Sguir dheth” gus sgur dhen stàladh, air\\r\\n“Feuch ris a-rithist” gus feuchainn ris a-rithist no air\\r\\n“Leig seachad” gus leum a ghearradh thairis air an fhaidhle seo.",
	FileError_NoIgnore: "Thachair mearachd a’ fosgladh an fhaidhle seo a chum sgrìobhaidh: \\r\\n\\r\\n$0\\r\\n\\r\\nBriog air “Feuch ris a-rithist” gus feuchainn ris a-rithist no air\\r\\n“Sguir dheth” gus sgur dhen stàladh.",
	CantWrite: "\"Cha ghabh sgrìobhadh ann: \"",
	CopyFailed: "Cha deach leinn lethbhreac dheth a dhèanamh",
	CopyTo: "\"Cuir lethbhreac gu \"",
	Registering: "\"A’ clàradh: \"",
	Unregistering: "\"A’ neo-chlàradh: \"",
	SymbolNotFound: "\"Cha deach an samhla a lorg: \"",
	CouldNotLoad: "\"Cha b’ urrainn dhuinn a luchdadh: \"",
	CreateFolder: "\"Cruthaich pasgan: \"",
	CreateShortcut: "\"Cruthaich ath-ghoirid: \"",
	CreatedUninstaller: "\"Dì-stàlaichear air a chruthachadh: \"",
	Delete: "\"Sguab às dhan fhaidhle: \"",
	DeleteOnReboot: "\"Sguab às leis an ath-thòiseachadh: \"",
	ErrorCreatingShortcut: "\"Mearachd le cruthachadh na h-ath-ghoirid: \"",
	ErrorCreating: "\"Mearachd le cruthachadh: \"",
	ErrorDecompressing: "Thachair mearachd a’ dì-dhùmhlachadh an dàta! ’S dòcha gu bheil an t-inneal-stàlaidh coirbte.",
	ErrorRegistering: "Mearachd le clàradh DLL",
	ExecShell: "\"ExecShell: \"",
	Exec: "\"Cuir àithne an gnìomh: \"",
	Extract: "\"Dì-dhùmhlaich: \"",
	ErrorWriting: "\"Dì-dhùmhlachadh: mearachd a’ sgrìobhadh gu faidhle \"",
	InvalidOpcode: "Stàlaichear coirbte: opcode mì-dhligheach",
	NoOLE: "\"Chan eil OLE ann airson: \"",
	OutputFolder: "\"Pasgan às-chuir: \"",
	RemoveFolder: "\"Thoir pasgan air falbh: \"",
	RenameOnReboot: "\"Cuir ainm ùr air leis an ath-thòiseachadh: \"",
	Rename: "\"Cuir ainm ùr air: \"",
	Skipped: "\"Air leum a ghearradh: \"",
	CopyDetails: "Cuir lethbhreac dhen mhion-fhiosrachadh san stòr-bhòrd",
	LogInstall: "Dèan loga dhen stàladh",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var ScotsGaelic$1 = {
	header: header$O,
	id: id$O,
	font: font$O,
	code_page: code_page$O,
	rtl: rtl$O,
	strings: strings$O
};

var header$P = "NLF v6";
var id$P = 3098;
var font$P = {
	name: null,
	size: null
};
var code_page$P = 1251;
var rtl$P = false;
var strings$P = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "$(^Name) Инсталација",
	UninstallCaption: "$(^Name) Деинсталација",
	LicenseSubCaption: ": Договор о праву коришћења",
	ComponentsSubCaption: ": Опције инсталације",
	DirSubCaption: ": Избор фолдера за инсталацију",
	InstallingSubCaption: ": Инсталација",
	CompletedSubCaption: ": Завршена инсталација",
	UnComponentsSubCaption: ": Опције деинсталације",
	UnDirSubCaption: ": Избор фолдера за деинсталацију",
	ConfirmSubCaption: ": Потврђивање",
	UninstallingSubCaption: ": Деинсталација",
	UnCompletedSubCaption: ": Завршена деинсталација",
	BackBtn: "< Назад",
	NextBtn: "Напред >",
	AgreeBtn: "Прихватам",
	AcceptBtn: "Прихватам услове договора о праву коришћења",
	DontAcceptBtn: "Не прихватам услове договора о праву коришћења",
	InstallBtn: "Инсталирај",
	UninstallBtn: "Деинсталирај",
	CancelBtn: "Одустани",
	CloseBtn: "Затвори",
	BrowseBtn: "Избор...",
	ShowDetailsBtn: "Детаљи",
	ClickNext: "Притисните дугме „Напред“ за наставак.",
	ClickInstall: "Притисните дугме „Инсталирај“ за почетак инсталације.",
	ClickUninstall: "Притисните дугме „Деинсталирај“ за почетак деинсталације.",
	Name: "Име",
	Completed: "Завршено",
	LicenseText: "Пажљиво прочитајте договор о праву коришћења пре инсталације програма $(^NameDA). Ако прихватате све услове договора, притисните дугме „Прихватам“.",
	LicenseTextCB: "Пажљиво прочитајте договор о праву коришћења пре инсталације програма $(^NameDA). Ако прихватате све услове договора, обележите квадратић испод. $_CLICK",
	LicenseTextRB: "Пажљиво прочитајте договор о праву коришћења пре инсталације програма $(^NameDA). Ако прихватате све услове договора, изаберите прву опцију испод. $_CLICK",
	UnLicenseText: "Пажљиво прочитајте договор о праву коришћења пре деинсталације програма $(^NameDA). Ако прихватате све услове договора, притисните дугме „Прихватам“.",
	UnLicenseTextCB: "Пажљиво прочитајте договор о праву коришћења пре деинсталације програма $(^NameDA). Ако прихватате све услове договора, обележите квадратић испод. $_CLICK",
	UnLicenseTextRB: "Пажљиво прочитајте договор о праву коришћења пре деинсталације програма $(^NameDA). Ако прихватате све услове договора, изаберите прву опцију испод. $_CLICK",
	Custom: "Прилагођавање",
	ComponentsText: "Изаберите компоненте за инсталацију. Инсталирају се само означене компоненте. $_CLICK",
	ComponentsSubText1: "Изаберите тип инсталације:",
	ComponentsSubText2_NoInstTypes: "Изаберите компоненте за инсталацију: ",
	ComponentsSubText2: "Или, изаберите опционе компоненте које желите да инсталирате: ",
	UnComponentsText: "Изаберите компоненте за деинсталацију. Деинсталирају се само означене компоненте. $_CLICK",
	UnComponentsSubText1: "Изаберите тип деинсталације: ",
	UnComponentsSubText2_NoInstTypes: "Изаберите компоненте за деинсталацију: ",
	UnComponentsSubText2: "Или, изаберите опционе компоненте које желите да деинсталирате: ",
	DirText: "Програм $(^NameDA) ће бити инсталиран у наведени фолдер. За инсталацију у други фолдер притисните дугме „Избор...“ и изаберите фолдер. $_CLICK",
	DirSubText: "Фолдер",
	DirBrowseText: "Изаберите фолдер у који ћете инсталирати програм $(^NameDA):",
	UnDirText: "Програм $(^NameDA) ће бити деинсталиран из наведеног фолдера. За деинсталацију из другог фолдера притисните дугме „Избор...“ и изаберите фолдер. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Изаберите фолдер из кога ћете деинсталирати програм $(^NameDA):",
	SpaceAvailable: "\"Слободан простор: \"",
	SpaceRequired: "\"Потребан простор: \"",
	UninstallingText: "Програм $(^NameDA) ће бити деинсталиран из наведеног фолдера. $_CLICK",
	UninstallingSubText: "Деинсталација из: ",
	FileError: "Грешка при отварању фајла за писање: \\r\\n\\t\"$0\"\\r\\nПритисните дугме „Одустани“ за прекид инсталације,\\r\\n„Понови“ за поновни покушај писања у фајл, или\\r\\n„Игнориши“ за прескакање овог фајла.",
	FileError_NoIgnore: "Грешка при отварању фајла за писање: \\r\\n\\t\"$0\"\\r\\nПритисните дугме „Понови“ за поновни покушај писања у фајл, или\\r\\n„Одустани“ за прекид инсталирања.",
	CantWrite: "\"Немогуће писање: \"",
	CopyFailed: "Неуспешно копирање",
	CopyTo: "\"Копирање у \"",
	Registering: "\"Регистровање: \"",
	Unregistering: "\"Дерегистровање: \"",
	SymbolNotFound: "\"Симбол није нађен: \"",
	CouldNotLoad: "\"Немогуће учитавање: \"",
	CreateFolder: "\"Креирање фолдера: \"",
	CreateShortcut: "\"Креирање пречице: \"",
	CreatedUninstaller: "\"Креирање деинсталера: \"",
	Delete: "\"Брисање фајла: \"",
	DeleteOnReboot: "\"Брисање при рестарту: \"",
	ErrorCreatingShortcut: "\"Грешка при креирању пречице: \"",
	ErrorCreating: "\"Грешка при креирању: \"",
	ErrorDecompressing: "Грешка при отпакивању података! Оштећен инсталациони програм?",
	ErrorRegistering: "Грешка при регистровању библиотеке",
	ExecShell: "\"Извршавање у окружењу: \"",
	Exec: "\"Извршавање: \"",
	Extract: "\"Отпакивање: \"",
	ErrorWriting: "\"Отпакивање: грешка при упису у фајл \"",
	InvalidOpcode: "Оштећен инсталациони програм: неисправна команда ",
	NoOLE: "\"Нема OLE подршке за: \"",
	OutputFolder: "\"Излазни фолдер: \"",
	RemoveFolder: "\"Брисање фолдера: \"",
	RenameOnReboot: "\"Преименовање при рестартовању: \"",
	Rename: "\"Преименован: \"",
	Skipped: "\"Прескочен: \"",
	CopyDetails: "Копирај детаље у клипборд",
	LogInstall: "Води записник о процесу инсталације",
	Byte: "B",
	Kilo: " k",
	Mega: " M",
	Giga: " G"
};
var Serbian$1 = {
	header: header$P,
	id: id$P,
	font: font$P,
	code_page: code_page$P,
	rtl: rtl$P,
	strings: strings$P
};

var header$Q = "NLF v6";
var id$Q = 2074;
var font$Q = {
	name: null,
	size: null
};
var code_page$Q = 1250;
var rtl$Q = false;
var strings$Q = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "$(^Name) Instalacija",
	UninstallCaption: "$(^Name) Deinstalacija",
	LicenseSubCaption: ": Dogovor o pravu korišćenja",
	ComponentsSubCaption: ": Opcije instalacije",
	DirSubCaption: ": Izbor foldera za instalaciju",
	InstallingSubCaption: ": Instalacija",
	CompletedSubCaption: ": Završena instalacija",
	UnComponentsSubCaption: ": Opcije deinstalacije",
	UnDirSubCaption: ": Izbor foldera za deinstalaciju",
	ConfirmSubCaption: ": Potvrđivanje",
	UninstallingSubCaption: ": Deinstalacija",
	UnCompletedSubCaption: ": Završena deinstalacija",
	BackBtn: "< Nazad",
	NextBtn: "Napred >",
	AgreeBtn: "Prihvatam",
	AcceptBtn: "Prihvatam uslove dogovora o pravu korišćenja",
	DontAcceptBtn: "Ne prihvatam uslove dogovora o pravu korišćenja",
	InstallBtn: "Instaliraj",
	UninstallBtn: "Deinstaliraj",
	CancelBtn: "Odustani",
	CloseBtn: "Zatvori",
	BrowseBtn: "Izbor...",
	ShowDetailsBtn: "Detalji",
	ClickNext: "Pritisnite dugme „Napred“ za nastavak.",
	ClickInstall: "Pritisnite dugme „Instaliraj“ za početak instalacije.",
	ClickUninstall: "Pritisnite dugme „Deinstaliraj“ za početak deinstalacije.",
	Name: "Ime",
	Completed: "Završeno",
	LicenseText: "Pažlivo pročitajte dogovor o pravu korišćenja pre instalacije programa $(^NameDA). Ako prihvatate sve uslove dogovora, pritisnite dugme „Prihvatam“.",
	LicenseTextCB: "Pažlivo pročitajte dogovor o pravu korišćenja pre instalacije programa $(^NameDA). Ako prihvatate sve uslove dogovora, obeležite kvadratić ispod. $_CLICK",
	LicenseTextRB: "Pažlivo pročitajte dogovor o pravu korišćenja pre instalacije programa $(^NameDA). Ako prihvatate sve uslove dogovora, izaberite prvu opciju ispod. $_CLICK",
	UnLicenseText: "Pažlivo pročitajte dogovor o pravu korišćenja pre deinstalacije programa $(^NameDA). Ako prihvatate sve uslove dogovora, pritisnite dugme „Prihvatam“.",
	UnLicenseTextCB: "Pažlivo pročitajte dogovor o pravu korišćenja pre deinstalacije programa $(^NameDA). Ako prihvatate sve uslove dogovora, obeležite kvadratić ispod. $_CLICK",
	UnLicenseTextRB: "Pažlivo pročitajte dogovor o pravu korišćenja pre deinstalacije programa $(^NameDA). Ako prihvatate sve uslove dogovora, izaberite prvu opciju ispod. $_CLICK",
	Custom: "Prilagođavanje",
	ComponentsText: "Izaberite komponente za instalaciju. Instaliraju se samo označene komponente. $_CLICK",
	ComponentsSubText1: "Izaberite tip instalacije:",
	ComponentsSubText2_NoInstTypes: "Izaberite komponente za instalaciju: ",
	ComponentsSubText2: "Ili, izaberite opcione komponente koje želite da instalirate: ",
	UnComponentsText: "Izaberite komponente za deinstalaciju. Deinstaliraju se samo označene komponente. $_CLICK",
	UnComponentsSubText1: "Izaberite tip deinstalacije: ",
	UnComponentsSubText2_NoInstTypes: "Izaberite komponente za deinstalaciju: ",
	UnComponentsSubText2: "Ili, izaberite opcione komponente koje želite da deinstalirate: ",
	DirText: "Program $(^NameDA) će biti instaliran u navedeni folder. Za instalaciju u drugi folder pritisnite dugme „Izbor...“ i izaberite folder. $_CLICK",
	DirSubText: "Folder",
	DirBrowseText: "Izaberite folder u koji ćete instalirati program $(^NameDA):",
	UnDirText: "Program $(^NameDA) će biti deinstaliran iz navedenog foldera. Za deinstalaciju iz drugog foldera pritisnite dugme „Izbor...“ i izaberite folder. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Izaberite folder iz koga ćete deinstalirati program $(^NameDA):",
	SpaceAvailable: "\"Slobodan prostor: \"",
	SpaceRequired: "\"Potreban prostor: \"",
	UninstallingText: "Program $(^NameDA) će biti deinstaliran iz navedenog foldera. $_CLICK",
	UninstallingSubText: "Deinstalacija iz: ",
	FileError: "Greška pri otvaranju fajla za pisanje: \\r\\n\\t\"$0\"\\r\\nPritisnite dugme „Odustani“ za prekid instalacije,\\r\\n„Ponovi“ za ponovni pokušaj pisanja u fajl, ili\\r\\n„Ignoriši“ za preskakanje ovog fajla.",
	FileError_NoIgnore: "Greška pri otvaranju fajla za pisanje: \\r\\n\\t\"$0\"\\r\\nPritisnite dugme „Ponovi“ za ponovni pokušaj pisanja u fajl, ili\\r\\n„Odustani“ za prekid instaliranja.",
	CantWrite: "\"Nemoguće pisanje: \"",
	CopyFailed: "Neuspešno kopiranje",
	CopyTo: "\"Kopiranje u \"",
	Registering: "\"Registrovanje: \"",
	Unregistering: "\"Deregistrovanje: \"",
	SymbolNotFound: "\"Simbol nije nađen: \"",
	CouldNotLoad: "\"Nemoguće učitavanje: \"",
	CreateFolder: "\"Kreiranje foldera: \"",
	CreateShortcut: "\"Kreiranje prečice: \"",
	CreatedUninstaller: "\"Kreiranje deinstalera: \"",
	Delete: "\"Brisanje fajla: \"",
	DeleteOnReboot: "\"Brisanje pri restartu: \"",
	ErrorCreatingShortcut: "\"Greška pri kreiranju prečice: \"",
	ErrorCreating: "\"Greška pri kreiranju: \"",
	ErrorDecompressing: "Greška pri otpakivanju podataka! Oštećen instalacioni program?",
	ErrorRegistering: "Greška pri registrovanju biblioteke",
	ExecShell: "\"Izvršavanje u okruženju: \"",
	Exec: "\"Izvršavanje: \"",
	Extract: "\"Otpakivanje: \"",
	ErrorWriting: "\"Otpakivanje: greška pri upisu u fajl \"",
	InvalidOpcode: "Oštećen instalacioni program: neispravna komanda ",
	NoOLE: "\"Nema OLE podrške za: \"",
	OutputFolder: "\"Izlazni folder: \"",
	RemoveFolder: "\"Brisanje foldera: \"",
	RenameOnReboot: "\"Preimenovanje pri restartu: \"",
	Rename: "\"Preimenovan: \"",
	Skipped: "\"Preskočen: \"",
	CopyDetails: "Kopiraj detalje u klipbord",
	LogInstall: "Vodi zapisnik o procesu instalacije",
	Byte: "B",
	Kilo: " k",
	Mega: " M",
	Giga: " G"
};
var SerbianLatin$1 = {
	header: header$Q,
	id: id$Q,
	font: font$Q,
	code_page: code_page$Q,
	rtl: rtl$Q,
	strings: strings$Q
};

var header$R = "NLF v6";
var id$R = 2052;
var font$R = {
	name: "宋体",
	size: 9
};
var code_page$R = 936;
var rtl$R = false;
var strings$R = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "$(^Name) 安装",
	UninstallCaption: "$(^Name) 卸载",
	LicenseSubCaption: ": 许可证协议",
	ComponentsSubCaption: ": 安装选项",
	DirSubCaption: ": 安装目录",
	InstallingSubCaption: ": 正在安装",
	CompletedSubCaption: ": 已完成",
	UnComponentsSubCaption: ": 卸载选项",
	UnDirSubCaption: ": 卸载文件夹",
	ConfirmSubCaption: ": 确认",
	UninstallingSubCaption: ": 正在卸载",
	UnCompletedSubCaption: ": 完成",
	BackBtn: "< 上一步(&P)",
	NextBtn: "下一步(&N) >",
	AgreeBtn: "我接受(&I)",
	AcceptBtn: "我接受许可证协议中的条款(&A)",
	DontAcceptBtn: "我不接受许可证协议中的条款(&N)",
	InstallBtn: "安装(&I)",
	UninstallBtn: "卸载(&U)",
	CancelBtn: "取消(&C)",
	CloseBtn: "关闭(&L)",
	BrowseBtn: "浏览(&B)...",
	ShowDetailsBtn: "显示详情(&D)",
	ClickNext: "点击 [下一步(N)] 继续。",
	ClickInstall: "点击 [安装(I)] 开始安装。",
	ClickUninstall: "点击 [卸载(U)] 开始卸载。",
	Name: "名称",
	Completed: "已完成",
	LicenseText: "请在安装 $(^NameDA) 之前阅读许可证协议。如果你接受协议中所有条款，点击 [我同意(I)] 。",
	LicenseTextCB: "请在安装 $(^NameDA) 之前阅读许可证协议。如果你接受协议中所有条款，点击下方的选框。 $_CLICK",
	LicenseTextRB: "请在安装 $(^NameDA) 之前阅读许可证协议。如果你接受协议中所有条款，选择下方的第一个选项。 $_CLICK",
	UnLicenseText: "请在卸载 $(^NameDA) 之前阅读许可证协议。如果你接受协议中所有条款，点击 [我同意(I)] 。",
	UnLicenseTextCB: "请在卸载 $(^NameDA) 之前阅读许可证协议。如果你接受协议中所有条款，点击下方的选框。 $_CLICK",
	UnLicenseTextRB: "请在卸载 $(^NameDA) 之前阅读许可证协议。如果你接受协议中所有条款，选择下方的第一个选项。 $_CLICK",
	Custom: "自定义",
	ComponentsText: "请勾选你想安装的组件，并取消勾选你不想安装的组件。 $_CLICK",
	ComponentsSubText1: "选定的安装的类型: ",
	ComponentsSubText2_NoInstTypes: "选定安装的组件: ",
	ComponentsSubText2: "或者，自定义选定想安装的组件: ",
	UnComponentsText: "请勾选你想卸载的组件，并取消勾选你不想卸载的组件。 $_CLICK",
	UnComponentsSubText1: "选择卸载的类型: ",
	UnComponentsSubText2_NoInstTypes: "选择要卸载的组件: ",
	UnComponentsSubText2: "或是，选择想要解除安装的可选项组件: ",
	DirText: "安装程序将把 $(^NameDA) 安装到以下目录。要安装到另一个目录，请点击 [浏览(B)...] 并选择其他的文件夹。 $_CLICK",
	DirSubText: "安装目录",
	DirBrowseText: "选择安装此软件的 $(^NameDA) 的位置: ",
	UnDirText: "安装程序将把 $(^NameDA) 从以下目录卸载。要从另一个目录卸载，点击 [浏览(B)...] 并选择其他目录。 $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "选择要卸载 $(^NameDA) 的目录: ",
	SpaceAvailable: "\"可用空间: \"",
	SpaceRequired: "\"所需空间: \"",
	UninstallingText: "此向导将从本机卸载 $(^NameDA) 。 $_CLICK",
	UninstallingSubText: "卸载目录: ",
	FileError: "无法打开要写入的文件: \\r\\n\\t\"$0\"\\r\\n点击 [Abort] 停止安装，\\r\\n [Retry] 重新尝试写入文件，或者\\r\\n [Ignore] 忽略这个文件。",
	FileError_NoIgnore: "无法打开要写入的文件: \\r\\n\\t\"$0\"\\r\\n点击 [Retry] 重新尝试写入文件，或者\\r\\n [Cancel] 停止安装。",
	CantWrite: "\"无法写入: \"",
	CopyFailed: "\"复制失败 \"",
	CopyTo: "\"复制到: \"",
	Registering: "\"正在注册: \"",
	Unregistering: "\"正在取消注册: \"",
	SymbolNotFound: "\"无法找到符号: \"",
	CouldNotLoad: "\"无法加载: \"",
	CreateFolder: "\"创建文件夹: \" ",
	CreateShortcut: "\"创建快捷方式: \"",
	CreatedUninstaller: "\"创建卸载程序: \"",
	Delete: "\"删除文件: \"",
	DeleteOnReboot: "\"重新启动后删除: \"",
	ErrorCreatingShortcut: "\"创建快捷方式时发生错误: \"",
	ErrorCreating: "\"创建时发生错误: \"",
	ErrorDecompressing: "\"解压缩数据时发生错误！请检查安装程序是否损坏。\"",
	ErrorRegistering: "\"注册 DLL 时发生错误\"",
	ExecShell: "\"执行外壳程序: \"",
	Exec: "\"执行: \"",
	Extract: "\"解压缩: \"",
	ErrorWriting: "\"抽取: 无法写入文件 \"",
	InvalidOpcode: "\"安装程序损坏: 无效的操作代码 \"",
	NoOLE: "\"没有 OLE 用于: \"",
	OutputFolder: "\"输出目录: \"",
	RemoveFolder: "\"删除目录: \"",
	RenameOnReboot: "\"重新启动之后重命名: \"",
	Rename: "\"重命名: \"",
	Skipped: "\"已跳过: \"",
	CopyDetails: "\"复制详情到剪贴板 \"",
	LogInstall: "\"记录安装过程到日志\"",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var SimpChinese$1 = {
	header: header$R,
	id: id$R,
	font: font$R,
	code_page: code_page$R,
	rtl: rtl$R,
	strings: strings$R
};

var header$S = "NLF v6";
var id$S = 1051;
var font$S = {
	name: null,
	size: null
};
var code_page$S = 1250;
var rtl$S = false;
var strings$S = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Inštalácia programu $(^Name)",
	UninstallCaption: "Odinštalovanie programu $(^Name)",
	LicenseSubCaption: ": Licenčná zmluva",
	ComponentsSubCaption: ": Možnosti inštalácie",
	DirSubCaption: ": Inštalačný priečinok",
	InstallingSubCaption: ": Prebieha inštalácia",
	CompletedSubCaption: ": Hotovo",
	UnComponentsSubCaption: ": Možnosti odinštalovania",
	UnDirSubCaption: ": Priečinok s informáciami pre odinštalovanie",
	ConfirmSubCaption: ": Potvrdenie",
	UninstallingSubCaption: ": Prebieha odinštalácia",
	UnCompletedSubCaption: ": Hotovo",
	BackBtn: "< &Späť",
	NextBtn: "Ď&alej >",
	AgreeBtn: "&Súhlasím",
	AcceptBtn: "&Súhlasím s podmienkami licenčnej zmluvy",
	DontAcceptBtn: "N&esúhlasím s podmienkami licenčnej zmluvy",
	InstallBtn: "&Nainštalovať",
	UninstallBtn: "&Odinštalovať",
	CancelBtn: "Zrušiť",
	CloseBtn: "&Zatvoriť",
	BrowseBtn: "&Prehľadávať...",
	ShowDetailsBtn: "&Podrobnosti",
	ClickNext: "V inštalácii pokračujte kliknutím na tlačidlo Ďalej.",
	ClickInstall: "Pre spustenie inštalácie kliknite na tlačidlo Nainštalovať.",
	ClickUninstall: "Pre spustenie procesu odinštalovania kliknite na tlačidlo Odinštalovať.",
	Name: "Názov",
	Completed: "Hotovo",
	LicenseText: "Pred inštaláciou programu si prosím dôkladne prečítajte licenčnú zmluvu $(^NameDA). Ak súhlasíte so všetkými jej podmienkami, kliknite na tlačidlo Súhlasím.",
	LicenseTextCB: "Pred inštaláciou programu si prosím dôkladne prečítajte licenčnú zmluvu $(^NameDA). Ak súhlasíte so všetkými jej podmienkami, zaškrtnite nasledujúce políčko. $_CLICK",
	LicenseTextRB: "Pred inštaláciou programu si prosím dôkladne prečítajte licenčnú zmluvu $(^NameDA). Ak súhlasíte so všetkými jej podmienkami, označte prvú z nasledujúcich možností. $_CLICK",
	UnLicenseText: "Pred odinštalovaním programu si prosím dôkladne prečítajte licenčnú zmluvu $(^NameDA). Ak súhlasíte so všetkými jej podmienkami, kliknite na tlačidlo Súhlasím.",
	UnLicenseTextCB: "Pred odinštalovaním programu si prosím dôkladne prečítajte licenčnú zmluvu $(^NameDA). Ak súhlasíte so všetkými jej podmienkami, zaškrtnite nasledujúce políčko. $_CLICK",
	UnLicenseTextRB: "Pred odinštalovaním programu si prosím dôkladne prečítajte licenčnú zmluvu $(^NameDA). Ak súhlasíte so všetkými jej podmienkami, označte prvú z nasledujúcich možností. $_CLICK",
	Custom: "Voliteľná",
	ComponentsText: "Označte súčasti programu, ktoré chcete nainštalovať a odznačte tie, ktoré nainštalovať nechcete. $_CLICK",
	ComponentsSubText1: "Vyberte si typ inštalácie:",
	ComponentsSubText2_NoInstTypes: "Vyberte si tie súčasti programu, ktoré chcete nainštalovať:",
	ComponentsSubText2: "Alebo označte voliteľné doplnky, ktoré chcete nainštalovať:",
	UnComponentsText: "Označte súčasti programu, ktoré chcete odinštalovať a odznačte tie, ktoré chcete ponechať nainštalované. $_CLICK",
	UnComponentsSubText1: "Zvoľte typ deinštalácie:",
	UnComponentsSubText2_NoInstTypes: "Vyberte súčasti, ktoré chcete odinštalovať:",
	UnComponentsSubText2: "Alebo označte voliteľné súčasti, ktoré chcete odinštalovať:",
	DirText: "$(^NameDA) bude nainštalovaný do nasledujúceho priečinka. Inštalovať do iného priečinka môžete po kliknutí na tlačidlo Prehľadávať a vybraní iného priečinka. $_CLICK",
	DirSubText: "Cieľový priečinok",
	DirBrowseText: "Zvoľte priečinok, do ktorého sa nainštaluje program $(^NameDA):",
	UnDirText: "Inštalátor odinštaluje program $(^NameDA) z nasledovného priečinka. Ak ho chcete odinštalovať z iného priečinka, kliknite na tlačidlo Prehľadávať a vyberte iný priečinok. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Zvoľte priečinok, z ktorého sa odinštaluje program $(^NameDA):",
	SpaceAvailable: "\"Voľné miesto na disku: \"",
	SpaceRequired: "\"Potrebné miesto na disku: \"",
	UninstallingText: "Program $(^NameDA) sa odinštaluje z nasledovného priečinka. $_CLICK",
	UninstallingSubText: "Prebieha odinštalovanie z:",
	FileError: "Chyba pri otváraní súboru na zápis: \\r\\n\\r\\n$0\\r\\n\\r\\n. Ak chcete inštaláciu ukončiť, kliknite na tlačidlo Ukončiť,\\r\\ ak chcete zápis súboru zopakovať, kliknite na tlačidlo Opakovať alebo kliknite na tlačidlo \\r\\nIgnorovať, ak chcete inštaláciu tohto súboru vynechať.",
	FileError_NoIgnore: "Chyba pri otváraní súboru na zápis: \\r\\n\\r\\n$0\\r\\n\\r\\n. Ak chcete zopakovať zápis súboru, kliknite na tlačidlo Opakovať, alebo kliknite na tlačidlo \\r\\nZrušiť, v prípade, že chcete inštaláciu ukončiť.",
	CantWrite: "\"Nemožno zapísať súbor: \"",
	CopyFailed: "Kopírovanie zlyhalo.",
	CopyTo: "\"Kopírovať do \"",
	Registering: "\"Registruje sa: \"",
	Unregistering: "\"Vymazáva sa z registra: \"",
	SymbolNotFound: "\"Nemožno nájsť symbol: \"",
	CouldNotLoad: "\"Nemožno načítať: \"",
	CreateFolder: "\"Vytvorený priečinok: \"",
	CreateShortcut: "\"Vytvorený odkaz: \"",
	CreatedUninstaller: "\"Program pre odinštalovanie: \"",
	Delete: "\"Vymazaný súbor: \"",
	DeleteOnReboot: "\"Vymazať po reštartovaní systému: \"",
	ErrorCreatingShortcut: "\"Chyba pri vytváraní odkazu: \"",
	ErrorCreating: "\"Chyba pri vytváraní: \"",
	ErrorDecompressing: "Chyba pri dekomprimovaní dát! Inštalátor je pravdepodobne poškodený...",
	ErrorRegistering: "Chyba pri registrácii súčasti",
	ExecShell: "\"Vykonať príkaz: \"",
	Exec: "\"Spustiť: \"",
	Extract: "\"Extrahuje sa: \"",
	ErrorWriting: "\"Chyba pri zápise do súboru \"",
	InvalidOpcode: "Inštalátor je pravdepodobne poškodený, pretože obsahuje neplatný operačný kód.",
	NoOLE: "\"Žiadny zápis OLE pre: \"",
	OutputFolder: "\"Výstupný priečinok: \"",
	RemoveFolder: "\"Odstrániť priečinok: \"",
	RenameOnReboot: "\"Premenovať po reštartovaní systému: \"",
	Rename: "\"Premenovať: \"",
	Skipped: "\"Vynechané: \"",
	CopyDetails: "Skopírovať podrobnosti do schránky",
	LogInstall: "Zaznamenať priebeh inštalácie",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Slovak$1 = {
	header: header$S,
	id: id$S,
	font: font$S,
	code_page: code_page$S,
	rtl: rtl$S,
	strings: strings$S
};

var header$T = "NLF v6";
var id$T = 1060;
var font$T = {
	name: null,
	size: null
};
var code_page$T = 1250;
var rtl$T = false;
var strings$T = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Namestitev $(^Name)",
	UninstallCaption: "Odstranitev $(^Name)",
	LicenseSubCaption: ": Licenčna pogodba",
	ComponentsSubCaption: ": Možnosti namestitve",
	DirSubCaption: ": Mapa namestitve",
	InstallingSubCaption: ": Nameščanje poteka",
	CompletedSubCaption: ": Dokončano",
	UnComponentsSubCaption: ": Možnosti odstranitve",
	UnDirSubCaption: ": Mapa odstranitve",
	ConfirmSubCaption: ": Potrditev",
	UninstallingSubCaption: ": Odstranjevanje poteka",
	UnCompletedSubCaption: ": Dokončano",
	BackBtn: "< &Nazaj",
	NextBtn: "N&aprej >",
	AgreeBtn: "Se &strinjam",
	AcceptBtn: "&Sprejmem pogoje licenčne pogodbe",
	DontAcceptBtn: "&Ne sprejmem pogojev licenčne pogodbe",
	InstallBtn: "&Namesti",
	UninstallBtn: "&Odstrani",
	CancelBtn: "Prekliči",
	CloseBtn: "&Zapri",
	BrowseBtn: "Prebrsk&aj ...",
	ShowDetailsBtn: "&Podrobnosti",
	ClickNext: "Kliknite Naprej za nadaljevanje.",
	ClickInstall: "Kliknite Namesti za začetek namestitve.",
	ClickUninstall: "Kliknite Odstrani za odstranitev.",
	Name: "Ime",
	Completed: "Dokončano",
	LicenseText: "Prosimo, da pred namestitvijo $(^NameDA) pregledate licenčno pogodbo. Če se z njo strinjate, pritisnite Se strinjam.",
	LicenseTextCB: "Prosimo, da pred namestitvijo $(^NameDA) pregledate licenčno pogodbo. Če sprejmete vse naštete pogoje, potrdite spodnje polje. $_CLICK",
	LicenseTextRB: "Prosimo, da pred namestitvijo $(^NameDA) pregledate licenčno pogodbo. Če sprejmete vse naštete pogoje, izberite prvo spodaj podano možnost. $_CLICK",
	UnLicenseText: "Prosimo, da pred odstranitvijo $(^NameDA) pregledate licenčno pogodbo. Če se z njo strinjate, pritisnite Se strinjam.",
	UnLicenseTextCB: "Prosimo, da pred odstranitvijo $(^NameDA) pregledate licenčno pogodbo. Če sprejmete vse naštete pogoje, potrdite spodnje polje. $_CLICK",
	UnLicenseTextRB: "Prosimo, da pred odstranitvijo $(^NameDA) pregledate licenčno pogodbo. Če sprejmete vse naštete pogoje, izberite prvo spodaj podano možnost. $_CLICK",
	Custom: "Po meri ...",
	ComponentsText: "Označite komponente, ki jih želite namestiti, in pustite neoznačene tiste, katerih ne želite namestiti. $_CLICK",
	ComponentsSubText1: "Izberite vrsto namestitve:",
	ComponentsSubText2_NoInstTypes: "Izberite komponente namestitve:",
	ComponentsSubText2: "Ali pa izberite komponente, ki jih želite namestiti:",
	UnComponentsText: "Označite komponente, ki jih želite odstraniti, in pustite neoznačene tiste, ki jih ne želite odstraniti. $_CLICK",
	UnComponentsSubText1: "Izberite vrsto odstranitve:",
	UnComponentsSubText2_NoInstTypes: "Izberite komponente za odstranitev:",
	UnComponentsSubText2: "Ali pa izberite komponente namestitve, ki jih želite odstraniti:",
	DirText: "$(^NameDA) boste namestili v sledečo mapo. Za izbiro druge mape kliknite tipko Prebrskaj in izberite drugo mapo. $_CLICK",
	DirSubText: "Ciljna mapa",
	DirBrowseText: "Izberite mapo, kamor želite namestiti $(^NameDA):",
	UnDirText: "Odstranili boste $(^NameDA) iz sledeče mape. Za izbiro druge mape kliknite tipko Prebrskaj in izberite drugo mapo. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Izberite mapo, od koder želite odstraniti $(^NameDA):",
	SpaceAvailable: "\"Prostor na disku: \"",
	SpaceRequired: "\"Potreben prostor: \"",
	UninstallingText: "$(^NameDA) bo odstranjen iz naslednje mape. $_CLICK",
	UninstallingSubText: "Odstranjevanje iz:",
	FileError: "Napaka pri odpiranju datoteke za pisanje: \\r\\n\\r\\n$0\\r\\n\\r\\nPritisnite Prekini za prekinitev namestitve,\\r\\nPonovi za ponoven poskus ali\\r\\nPrezri za izpust te datoteke.",
	FileError_NoIgnore: "Napaka pri odpiranju datoteke za pisanje: \\r\\n\\r\\n$0\\r\\n\\r\\nPritisnite Ponovi za ponoven poskus pisanja ali\\r\\Prekliči za prekinitev namestitve.",
	CantWrite: "\"Ni mogoče pisati: \"",
	CopyFailed: "Kopiranje neuspešno",
	CopyTo: "\"Kopiranje v \"",
	Registering: "\"Registracija: \"",
	Unregistering: "\"Preklic registracije: \"",
	SymbolNotFound: "\"Ni mogoče najti simbola: \"",
	CouldNotLoad: "\"Ni mogoče naložiti: \"",
	CreateFolder: "\"Ustvarjanje mape: \"",
	CreateShortcut: "\"Ustvarjanje bližnjice: \"",
	CreatedUninstaller: "\"Ustvarjena odstranitev: \"",
	Delete: "\"Brisanje datoteke: \"",
	DeleteOnReboot: "\"Brisanje ob ponovnem zagonu: \"",
	ErrorCreatingShortcut: "\"Napaka ustvarjanja bližnjice: \"",
	ErrorCreating: "\"Napaka ustvarjanja: \"",
	ErrorDecompressing: "Napaka pri razširjanju podatkov! Je namestitvena datoteka okvarjena?",
	ErrorRegistering: "Napaka registracije DLL",
	ExecShell: "\"Izvajanje v lupini: \"",
	Exec: "\"Izvajanje: \"",
	Extract: "\"Razširjanje: \"",
	ErrorWriting: "\"Razširjanje: napaka pri pisanju v datoteko \"",
	InvalidOpcode: "Namestitev neveljavna: napačen ukaz",
	NoOLE: "\"Neobstoječi OLE za: \"",
	OutputFolder: "\"Ciljna mapa: \"",
	RemoveFolder: "\"Odstranjevanje mape: \"",
	RenameOnReboot: "\"Preimenovanje ob zagonu: \"",
	Rename: "\"Preimenovanje: \"",
	Skipped: "\"Izpuščeno: \"",
	CopyDetails: "Kopiraj podrobnosti v odložišče",
	LogInstall: "Shrani potek namestitve",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Slovenian$1 = {
	header: header$T,
	id: id$T,
	font: font$T,
	code_page: code_page$T,
	rtl: rtl$T,
	strings: strings$T
};

var header$U = "NLF v6";
var id$U = 1034;
var font$U = {
	name: null,
	size: null
};
var code_page$U = 1252;
var rtl$U = false;
var strings$U = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Instalación de $(^Name)",
	UninstallCaption: "Desinstalación de $(^Name)",
	LicenseSubCaption: ": Acuerdo de Licencia",
	ComponentsSubCaption: ": Opciones de Instalación",
	DirSubCaption: ": Directorio de Instalación",
	InstallingSubCaption: ": Instalando",
	CompletedSubCaption: ": Completado",
	UnComponentsSubCaption: ": Opciones de Desinstalación",
	UnDirSubCaption: ": Directorio de Desinstalación",
	ConfirmSubCaption: ": Confirmación",
	UninstallingSubCaption: ": Desinstalando",
	UnCompletedSubCaption: ": Completado",
	BackBtn: "< &Atrás",
	NextBtn: "&Siguiente >",
	AgreeBtn: "A&cepto",
	AcceptBtn: "A&cepto los términos de la licencia",
	DontAcceptBtn: "&No acepto los términos de la licencia",
	InstallBtn: "&Instalar",
	UninstallBtn: "&Desinstalar",
	CancelBtn: "Cancelar",
	CloseBtn: "&Cerrar",
	BrowseBtn: "&Examinar...",
	ShowDetailsBtn: "Ver &detalles",
	ClickNext: "Presione Siguiente para continuar.",
	ClickInstall: "Presione Instalar para comenzar la instalación.",
	ClickUninstall: "Presione Desinstalar para comenzar la desinstalación.",
	Name: "Nombre",
	Completed: "Completado",
	LicenseText: "Por favor, revise el acuerdo de licencia antes de instalar $(^NameDA). Si acepta todos los términos del acuerdo, presione Acepto.",
	LicenseTextCB: "Por favor, revise el acuerdo de licencia antes de instalar $(^NameDA). Si acepta todos los términos del acuerdo, marque abajo la casilla. $_CLICK",
	LicenseTextRB: "Por favor, revise el acuerdo de licencia antes de instalar $(^NameDA). Si acepta todos los términos del acuerdo, seleccione abajo la primera opción. $_CLICK",
	UnLicenseText: "Por favor, revise el acuerdo de licencia antes de desinstalar $(^NameDA). Si acepta todos los términos del acuerdo, presione Acepto.",
	UnLicenseTextCB: "Por favor, revise el acuerdo de licencia antes de desinstalar $(^NameDA). Si acepta todos los términos del acuerdo, marque abajo la casilla. $_CLICK.",
	UnLicenseTextRB: "Por favor, revise el acuerdo de licencia antes de desinstalar $(^NameDA). Si acepta todos los términos del acuerdo, seleccione abajo la primera opción. $_CLICK",
	Custom: "Personalizada",
	ComponentsText: "Marque los componentes que desee instalar y desmarque los componentes que no desee instalar. $_CLICK",
	ComponentsSubText1: "Tipos de instalación:",
	ComponentsSubText2_NoInstTypes: "Seleccione los componentes a instalar:",
	ComponentsSubText2: "O seleccione los componentes opcionales que desee instalar:",
	UnComponentsText: "Marque los componentes que desee desinstalar y desmarque los componentes que no desee desinstalar. $_CLICK",
	UnComponentsSubText1: "Tipos de desinstalación:",
	UnComponentsSubText2_NoInstTypes: "Seleccione los componentes a desinstalar:",
	UnComponentsSubText2: "O seleccione los componentes opcionales que desee desinstalar:",
	DirText: "El programa de instalación instalará $(^NameDA) en el siguiente directorio. Para instalar en un directorio diferente, presione Examinar y seleccione otro directorio. $_CLICK",
	DirSubText: "Directorio de Destino",
	DirBrowseText: "Seleccione el directorio en el que instalará $(^NameDA):",
	UnDirText: "El programa de instalación desinstalará $(^NameDA) del siguiente directorio. Para desinstalar de un directorio diferente, presione Examinar y seleccione otro directorio. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Seleccione el directorio desde el cual desinstalará $(^NameDA):",
	SpaceAvailable: "Espacio disponible: ",
	SpaceRequired: "Espacio requerido: ",
	UninstallingText: "$(^NameDA) será desinstalado del siguiente directorio. $_CLICK",
	UninstallingSubText: "Desinstalando desde:",
	FileError: "Error abriendo archivo para escritura: \\r\\n\\t\"$0\"\\r\\nPresione abortar para anular la instalación,\\r\\nreintentar para volver a intentar escribir el archivo, u\\r\\nomitir para ignorar este archivo",
	FileError_NoIgnore: "Error abriendo archivo para escritura: \\r\\n\\t\"$0\"\\r\\nPresione reintentar para volver a intentar escribir el archivo, o\\r\\ncancelar para anular la instalación",
	CantWrite: "\"No pudo escribirse: \"",
	CopyFailed: "Falló la copia",
	CopyTo: "\"Copiar a \"",
	Registering: "\"Registrando: \"",
	Unregistering: "\"Eliminando registro: \"",
	SymbolNotFound: "\"No pudo encontrarse símbolo: \"",
	CouldNotLoad: "\"No pudo cargarse: \"",
	CreateFolder: "\"Creando directorio: \"",
	CreateShortcut: "\"Creando acceso directo: \"",
	CreatedUninstaller: "\"Creando desinstalador: \"",
	Delete: "\"Borrar archivo: \"",
	DeleteOnReboot: "\"Borrar al reinicio: \"",
	ErrorCreatingShortcut: "\"Error creando acceso directo: \"",
	ErrorCreating: "\"Error creando: \"",
	ErrorDecompressing: "¡Error descomprimiendo datos! ¿Instalador corrupto?",
	ErrorRegistering: "Error registrando DLL",
	ExecShell: "\"Extrayendo  comando: \"",
	Exec: "\"Extrayendo : \"",
	Extract: "\"Extraer: \"",
	ErrorWriting: "\"Extraer: error escribiendo al archivo \"",
	InvalidOpcode: "Instalador corrupto: código de operación no válido",
	NoOLE: "\"Sin OLE para: \"",
	OutputFolder: "\"Directorio de salida: \"",
	RemoveFolder: "\"Eliminar directorio: \"",
	RenameOnReboot: "\"Renombrar al reinicio: \"",
	Rename: "\"Renombrar: \"",
	Skipped: "\"Omitido: \"",
	CopyDetails: "Copiar Detalles al Portapapeles",
	LogInstall: "Registrar proceso de instalación ",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Spanish$1 = {
	header: header$U,
	id: id$U,
	font: font$U,
	code_page: code_page$U,
	rtl: rtl$U,
	strings: strings$U
};

var header$V = "NLF v6";
var id$V = 3082;
var font$V = {
	name: null,
	size: null
};
var code_page$V = 1252;
var rtl$V = false;
var strings$V = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Instalación de $(^Name)",
	UninstallCaption: "Desinstalación de $(^Name)",
	LicenseSubCaption: ": Acuerdo de Licencia",
	ComponentsSubCaption: ": Opciones de Instalación",
	DirSubCaption: ": Carpeta de Instalación",
	InstallingSubCaption: ": Instalando",
	CompletedSubCaption: ": Finalizado",
	UnComponentsSubCaption: ": Opciones de Desinstalación",
	UnDirSubCaption: ": Carpeta de Desinstalación",
	ConfirmSubCaption: ": Confirmación",
	UninstallingSubCaption: ": Desinstalando",
	UnCompletedSubCaption: ": Finalizado",
	BackBtn: "< &Atrás",
	NextBtn: "&Siguiente >",
	AgreeBtn: "&Acepto",
	AcceptBtn: "&Acepto las condiciones del Acuerdo de Licencia",
	DontAcceptBtn: "No &acepto las condiciones del Acuerdo de Licencia",
	InstallBtn: "&Instalar",
	UninstallBtn: "&Desinstalar",
	CancelBtn: "Cancelar",
	CloseBtn: "&Cerrar",
	BrowseBtn: "&Examinar...",
	ShowDetailsBtn: "Mostrar &detalles",
	ClickNext: "Presione Siguiente para continuar.",
	ClickInstall: "Presione Instalar para iniciar la instalación.",
	ClickUninstall: "Presione Desinstalar para iniciar la desinstalación.",
	Name: "Nombre",
	Completed: "Finalizado",
	LicenseText: "Por favor, revise el acuerdo de licencia antes de instalar $(^NameDA). Si usted acepta todas las condiciones del acuerdo, presione Acepto.",
	LicenseTextCB: "Por favor, revise el acuerdo de licencia antes de instalar $(^NameDA). Si usted acepta todas las condiciones del acuerdo, marque abajo la casilla. $_CLICK",
	LicenseTextRB: "Por favor, revise el acuerdo de licencia antes de instalar $(^NameDA). Si usted acepta todas las condiciones del acuerdo, seleccione abajo la primera opción. $_CLICK",
	UnLicenseText: "Por favor, revise el acuerdo de licencia antes de desinstalar $(^NameDA). Si usted acepta todas las condiciones del acuerdo, presione Acepto.",
	UnLicenseTextCB: "Por favor, revise el acuerdo de licencia antes de desinstalar $(^NameDA). Si usted acepta todas las condiciones del acuerdo, marque abajo la casilla. $_CLICK",
	UnLicenseTextRB: "Por favor, revise el acuerdo de licencia antes de desinstalar $(^NameDA). Si usted acepta todas las condiciones del acuerdo, seleccione abajo la primera opción. $_CLICK",
	Custom: "Personalizada",
	ComponentsText: "Marque los componentes que desee instalar y desmarque los componentes que no desee instalar. $_CLICK",
	ComponentsSubText1: "Seleccione el tipo de instalación:",
	ComponentsSubText2_NoInstTypes: "Seleccione los componentes a instalar:",
	ComponentsSubText2: "O seleccione los componentes opcionales que desee instalar:",
	UnComponentsText: "Marque los componentes que desee desinstalar y desmarque los componentes que no desee desinstalar. $_CLICK",
	UnComponentsSubText1: "Seleccione el tipo de desinstalación:",
	UnComponentsSubText2_NoInstTypes: "Seleccione los componentes a desinstalar:",
	UnComponentsSubText2: "O seleccione los componentes opcionales que desee desinstalar:",
	DirText: "El programa de instalación instalará $(^NameDA) en la siguiente carpeta. Para instalar en una carpeta diferente, presione Examinar y seleccione otra carpeta. $_CLICK",
	DirSubText: "Carpeta de Destino",
	DirBrowseText: "Seleccione la carpeta en la que instalará $(^NameDA):",
	UnDirText: "El programa de instalación desinstalará $(^NameDA) de la siguiente carpeta. Para desinstalar de una carpeta diferente, presione Examinar y seleccione otra carpeta. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Seleccione la carpeta desde la que desinstalará $(^NameDA):",
	SpaceAvailable: "Espacio disponible:",
	SpaceRequired: "Espacio requerido:",
	UninstallingText: "$(^NameDA) será desinstalado de la siguiente carpeta. $_CLICK",
	UninstallingSubText: "Desinstalando desde:",
	FileError: "Error abriendo archivo para escribir: \\r\\n\\r\\n$0\\r\\n\\r\\nPresione Abortar para detener la instalación,\\r\\nReintentar para probar otra vez, o\\r\\nOmitir para ignorar este archivo.",
	FileError_NoIgnore: "Error abriendo archivo para escribir: \\r\\n\\r\\n$0\\r\\n\\r\\nPresione Reintentar para probar otra vez, o\\r\\nCancelar para detener la instalación.",
	CantWrite: "\"No pudo escribirse: \"",
	CopyFailed: "Copia fallida",
	CopyTo: "\"Copiar a \"",
	Registering: "\"Registrando: \"",
	Unregistering: "\"Eliminando registro: \"",
	SymbolNotFound: "\"No se encontró simbolo: \"",
	CouldNotLoad: "\"No pudo cargarse: \"",
	CreateFolder: "\"Creando carpeta: \"",
	CreateShortcut: "\"Creando acceso directo: \"",
	CreatedUninstaller: "\"Creando desinstalador: \"",
	Delete: "\"Borrar archivo: \"",
	DeleteOnReboot: "\"Borrar al reinicio: \"",
	ErrorCreatingShortcut: "\"Error creando acceso directo: \"",
	ErrorCreating: "\"Error creando: \"",
	ErrorDecompressing: "¡Error descomprimiendo datos! ¿Instalador corrupto?",
	ErrorRegistering: "Error registrando DLL",
	ExecShell: "\"Ejecutando comando: \"",
	Exec: "\"Ejecutando: \"",
	Extract: "\"Extrayendo: \"",
	ErrorWriting: "\"Extrayendo: error escribiendo al archivo \"",
	InvalidOpcode: "Instalador corrupto: código de operación no válido",
	NoOLE: "\"Sin OLE para: \"",
	OutputFolder: "\"Carpeta de salida: \"",
	RemoveFolder: "\"Eliminar carpeta: \"",
	RenameOnReboot: "\"Renombrar al reinicio: \"",
	Rename: "\"Renombrar: \"",
	Skipped: "\"Omitido: \"",
	CopyDetails: "Copiar Detalles al Portapapeles",
	LogInstall: "Registrar proceso de instalación",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var SpanishInternational$1 = {
	header: header$V,
	id: id$V,
	font: font$V,
	code_page: code_page$V,
	rtl: rtl$V,
	strings: strings$V
};

var header$W = "NLF v6";
var id$W = 1053;
var font$W = {
	name: null,
	size: null
};
var code_page$W = 1252;
var rtl$W = false;
var strings$W = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "$(^Name) Installation",
	UninstallCaption: "$(^Name) Avinstallation",
	LicenseSubCaption: ": Licensavtal",
	ComponentsSubCaption: ": Installationsval",
	DirSubCaption: ": Installationskatalog",
	InstallingSubCaption: ": Installerar",
	CompletedSubCaption: ": Slutförd",
	UnComponentsSubCaption: ": Avinstallationsval",
	UnDirSubCaption: ": Avinstallationskatalog",
	ConfirmSubCaption: ": Bekräftelse",
	UninstallingSubCaption: ": Avinstallerar",
	UnCompletedSubCaption: ": Slutförd",
	BackBtn: "< &Tillbaka",
	NextBtn: "&Nästa >",
	AgreeBtn: "Jag &Godkänner",
	AcceptBtn: "Jag &Godkänner villkoren i licensavtalet",
	DontAcceptBtn: "Jag &Godkänner inte villkoren i licensavtalet",
	InstallBtn: "&Installera",
	UninstallBtn: "&Avinstallera",
	CancelBtn: "Avbryt",
	CloseBtn: "&Stäng",
	BrowseBtn: "B&läddra...",
	ShowDetailsBtn: "Visa &detaljer",
	ClickNext: "Klicka på Nästa för att fortsätta.",
	ClickInstall: "Klicka på Installera för att starta installationen.",
	ClickUninstall: "Klicka på Avinstallera för att starta avinstallationen.",
	Name: "Namn",
	Completed: "Slutförd",
	LicenseText: "Var vänlig läs igenom licensvillkoren innan du installerar $(^NameDA). Om du accepterar villkoren i avtalet, klicka Jag Godkänner.",
	LicenseTextCB: "Var vänlig läs igenom licensvillkoren innan du installerar $(^NameDA). Om du accepterar villkoren i avtalet, klicka i checkrutan nedan. $_CLICK",
	LicenseTextRB: "Var vänlig läs igenom licensvillkoren innan du installerar $(^NameDA). Om du accepterar villkoren i avtalet, välj det första alternativet nedan. $_CLICK",
	UnLicenseText: "Var vänlig läs igenom licensvillkoren innan du avinstallerar $(^NameDA). Om du accepterar villkoren i avtalet, klicka Jag Godkänner.",
	UnLicenseTextCB: "Var vänlig läs igenom licensvillkoren innan du avinstallerar $(^NameDA). Om du accepterar villkoren i avtalet, klicka i checkrutan nedan. $_CLICK",
	UnLicenseTextRB: "Var vänlig läs igenom licensvillkoren innan du avinstallerar $(^NameDA). Om du accepterar villkoren i avtalet, välj det första alternativet nedan. $_CLICK",
	Custom: "Valfri",
	ComponentsText: "Markera de komponenter du vill installera och avmarkera de komponenter du inte vill installera. $_CLICK",
	ComponentsSubText1: "Välj typ av installation:",
	ComponentsSubText2_NoInstTypes: "Välj komponenter att installera:",
	ComponentsSubText2: "Eller, välj de alternativa komponenter du önskar installera:",
	UnComponentsText: "Markera de komponenter du vill avinstallera och avmarkera de komponenter du inte vill avinstallera. $_CLICK",
	UnComponentsSubText1: "Välj typ av avinstallation:",
	UnComponentsSubText2_NoInstTypes: "Välj komponenter att avinstallera:",
	UnComponentsSubText2: "Eller, välj de alternativa komponenter du önskar avinstallera:",
	DirText: "Guiden kommer att installera $(^NameDA) i följande katalog. För att installera i en annan katalog, klicka Bläddra och välj en alternativ katalog. $_CLICK",
	DirSubText: "Målkatalog",
	DirBrowseText: "Välj katalog att installera $(^NameDA) i:",
	UnDirText: "Installationsguiden kommer att avinstallera $(^NameDA) från följande katalog. För att avinstallera från en annan katalog, klicka Bläddra och välj en annan katalog. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Välj katalog att avinstallera $(^NameDA) från:",
	SpaceAvailable: "\"Utrymme tillgängligt: \"",
	SpaceRequired: "\"Utrymme som behövs: \"",
	UninstallingText: "$(^NameDA) kommer att avinstalleras från följande katalog. $_CLICK",
	UninstallingSubText: "Avinstallerar från:",
	FileError: "Fel vid Öppning av fil för skrivning: \\r\\n\\t\"$0\"\\r\\nKlicka på avbryt för att avbryta installationen,\\r\\nförsök igen för att försöka skriva till filen igen, eller\\r\\nIgnorera för att skippa denna fil",
	FileError_NoIgnore: "Fel vid Öppning av fil för skrivning: \\r\\n\\t\"$0\"\\r\\nKlicka på försök igen för att skriva till filen igen, eller\\r\\navbryt för att avbryta installationen",
	CantWrite: "\"Kan inte skriva: \"",
	CopyFailed: "Kopiering misslyckades",
	CopyTo: "\"Kopiera till \"",
	Registering: "\"Registrerar: \"",
	Unregistering: "\"Avregistrerar: \"",
	SymbolNotFound: "\"Kunde inte hitta symbol: \"",
	CouldNotLoad: "\"Kunde inte ladda: \"",
	CreateFolder: "\"Skapa katalog: \"",
	CreateShortcut: "\"Skapa genväg: \"",
	CreatedUninstaller: "\"Skapade avinstallationsprogram: \"",
	Delete: "\"Radera fil: \"",
	DeleteOnReboot: "\"Radera vid omstart: \"",
	ErrorCreatingShortcut: "\"Fel vid skapande av genväg: \"",
	ErrorCreating: "\"Fel vid skapande: \"",
	ErrorDecompressing: "Fel vid uppackning av data! Skadat installationspaket?",
	ErrorRegistering: "Fel vid registrering av DLL",
	ExecShell: "\"ExecShell: \"",
	Exec: "\"Kör: \"",
	Extract: "\"Extrahera: \"",
	ErrorWriting: "\"Extrahera: fel vid skrivning till fil \"",
	InvalidOpcode: "Installationspaket skadat: ogiltig opcode",
	NoOLE: "\"Ingen OLE för: \"",
	OutputFolder: "\"Målkatalog: \"",
	RemoveFolder: "\"Ta bort katalog: \"",
	RenameOnReboot: "\"Döp om vid omstart: \"",
	Rename: "\"Döp om: \"",
	Skipped: "\"Ignorerad: \"",
	CopyDetails: "Kopiera detaljinformation till klippbordet",
	LogInstall: "Logga installationsförfarandet",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Swedish$1 = {
	header: header$W,
	id: id$W,
	font: font$W,
	code_page: code_page$W,
	rtl: rtl$W,
	strings: strings$W
};

var header$X = "NLF v6";
var id$X = 1092;
var font$X = {
	name: null,
	size: null
};
var code_page$X = 1251;
var rtl$X = false;
var strings$X = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Урнаштыру $(^Name)",
	UninstallCaption: "Бетерү $(^Name)",
	LicenseSubCaption: ": Лицензия килешүе",
	ComponentsSubCaption: ": Урнаштыру шартлары",
	DirSubCaption: ": Урнаштыру папкасы",
	InstallingSubCaption: ": Файлларны күчермәләү",
	CompletedSubCaption: ": Гамәл тәмамланды",
	UnComponentsSubCaption: ": Бетерү шартлары",
	UnDirSubCaption: ": Бетерү папкасы",
	ConfirmSubCaption: ": Раслау",
	UninstallingSubCaption: ": Файлларны бетерү",
	UnCompletedSubCaption: ": Гамәл тәмамланды",
	BackBtn: "< &Артка",
	NextBtn: "&Алга >",
	AgreeBtn: "Кабул ит&әм",
	AcceptBtn: "Мин &килешү шартларын кабул итәм",
	DontAcceptBtn: "Мин &килешү шартларын кабул итими",
	InstallBtn: "&Урнаштырырга",
	UninstallBtn: "Бе&терергә",
	CancelBtn: "Баш тарту",
	CloseBtn: "&Ябарга",
	BrowseBtn: "К&арарга...",
	ShowDetailsBtn: "&Тулырак...",
	ClickNext: "Дәвам итү өчен 'Алга' төймәсенә басыгыз.",
	ClickInstall: "Программаны урнаштыру өчен 'Урнаштырырга' төймәсенә басыгыз.",
	ClickUninstall: "Программаны бетерү өчен 'Бетерергә' төймәсенә басыгыз.",
	Name: "Исем",
	Completed: "Әзер",
	LicenseText: "$(^NameDA) урнаштыру алдыннан лицензия килешүе белән танышыгыз. Килешү шартларын кабул итсәгез, 'Кабул итәм' төймәсенә басыгыз.",
	LicenseTextCB: "$(^NameDA) урнаштыру алдыннан лицензия килешүе белән танышыгыз. Килешү шартларын кабул итсәгез, түбәндә билге куегыз. $_CLICK",
	LicenseTextRB: "$(^NameDA) урнаштыру алдыннан лицензия килешүе белән танышыгыз. Килешү шартларын кабул итсәгез, түбәндәге вариантлардан беренчесен сайлагыз. $_CLICK",
	UnLicenseText: "$(^NameDA) урнаштыру алдыннан лицензия килешүе белән танышыгыз. Килешү шартларын кабул итсәгез, 'Кабул итәм' төймәсенә басыгыз.",
	UnLicenseTextCB: "$(^NameDA) урнаштыру алдыннан лицензия килешүе белән танышыгыз. Килешү шартларын кабул итсәгез, түбәндә билге куегыз. $_CLICK",
	UnLicenseTextRB: "$(^NameDA) урнаштыру алдыннан лицензия килешүе белән танышыгыз. Килешү шартларын кабул итсәгез, түбәндәге вариантлардан беренчесен сайлагыз. $_CLICK",
	Custom: "Сайлап кына",
	ComponentsText: "Программаның урнаштырырга теләгән компонентларын сайлагыз. $_CLICK",
	ComponentsSubText1: "Урнаштыру төрен сайлагыз:",
	ComponentsSubText2_NoInstTypes: "Урнаштыру өчен программаның компонентларын сайлагыз:",
	ComponentsSubText2: "яки урнаштыру өчен өстәмә компонентлар сайлагыз:",
	UnComponentsText: "Бетерергә теләгән компонентларны сайлагыз. $_CLICK",
	UnComponentsSubText1: "Бетерү төрен сайлагыз:",
	UnComponentsSubText2_NoInstTypes: "Бетерү өчен компонентларны сайлагыз:",
	UnComponentsSubText2: "яки бетерү өчен өстәмә компонентларны сайлагыз:",
	DirText: "Программа $(^NameDA) программасын күрсәтерлән папкага урнаштырачак. Башка папкага урнаштыру өчен, 'Карарга' төймәсенә басыгыз һәм урын күрсәтегез. $_CLICK",
	DirSubText: "Урнаштыру папкасы",
	DirBrowseText: "$(^NameDA) урнаштыру өчен папка сайлагыз:",
	UnDirText: "Программа $(^NameDA) программасын күрсәтелгән папкадан бетерәчәк. Башка папкадан бетерү өчен, 'Карарга' төймәсенә басыгыз һәм урын күрсәтегез. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "$(^NameDA) бетерергә кирәк булган папканы күрсәтегез:",
	SpaceAvailable: "\"Дискта буш урын: \"",
	SpaceRequired: "\"Дискта кирәк урын: \"",
	UninstallingText: "$(^NameDA) программасы санагыгыздан бетереләчәк. $_CLICK",
	UninstallingSubText: "Моннан бетерү:",
	FileError: "Яздыру өчен файлны ачып булмый: \\r\\n\\t\"$0\"\\r\\n'Туктату': урнаштыруны туктатырга;\\r\\n\"Кабатлау\": омтылышны кабатларга;\\r\\n\"Калдыру\": бу гамәлне төшереп калдырырга.",
	FileError_NoIgnore: "Яздыру өчен файлны ачып булмый: \\r\\n\\t\"$0\"\\r\\n'Кабатлау': омтылышны кабатларга;\\r\\n'Баш тарту': урнаштыру барышын туктатырга.",
	CantWrite: "\"Яздырып булмый: \"",
	CopyFailed: "Күчермә ясауда хата",
	CopyTo: "\"Монда күчермәләү: \"",
	Registering: "\"Теркәлү: \"",
	Unregistering: "\"Теркәүдән баш тарту: \"",
	SymbolNotFound: "\"Символны табып булмый: \"",
	CouldNotLoad: "\"Йөкләп булмый: \"",
	CreateFolder: "\"Папка ясау: \"",
	CreateShortcut: "\"Сылтама ясау: \"",
	CreatedUninstaller: "\"Бетерү программасын ясау: \"",
	Delete: "\"Файлны бетерү: \"",
	DeleteOnReboot: "\"Санак сүндереп кабызылганда бетерү: \"",
	ErrorCreatingShortcut: "\"Сылтама ясауда хата: \" ",
	ErrorCreating: "\"Ясауда хата: \"",
	ErrorDecompressing: "Мәгълүматларны чыгаруда хата! Урнаштыручы бозык булуы мөмкин.",
	ErrorRegistering: "DLL теркәүдә хата",
	ExecShell: "\"Тышча командасын башкару: \" ",
	Exec: "\"Башкару: \"",
	Extract: "\"Чыгару: \"",
	ErrorWriting: "\"Чыгару: файл яздыруда хата \"",
	InvalidOpcode: "Урнаштыручы бозылган: мөмкин булмаган код",
	NoOLE: "\"OLE моның өчен юк: \" ",
	OutputFolder: "\"Урнаштыру папкасы: \"",
	RemoveFolder: "\"Папканы бетерү: \"",
	RenameOnReboot: "\"Санак сүндереп кабызылганда исемен үзгәртү: \"",
	Rename: "\"Исемен үзгәртү: \"",
	Skipped: "\"Калдыру: \"",
	CopyDetails: "Мәгълүматларны алмашыну буферына күчермәләргә",
	LogInstall: "Урнаштыру хисабын алып барырга",
	Byte: "б",
	Kilo: " К",
	Mega: " М",
	Giga: " Г"
};
var Tatar$1 = {
	header: header$X,
	id: id$X,
	font: font$X,
	code_page: code_page$X,
	rtl: rtl$X,
	strings: strings$X
};

var header$Y = "NLF v6";
var id$Y = 1054;
var font$Y = {
	name: null,
	size: null
};
var code_page$Y = 874;
var rtl$Y = false;
var strings$Y = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "$(^Name) ติดตั้ง",
	UninstallCaption: "$(^Name) ยกเลิกการติดตั้ง",
	LicenseSubCaption: ": ข้อตกลงเรื่องลิขสิทธิ์",
	ComponentsSubCaption: ": ตัวเลือกการติดตั้ง",
	DirSubCaption: ": แฟ้มที่ติดตั้ง",
	InstallingSubCaption: ": กำลังติดตั้ง",
	CompletedSubCaption: ": เสร็จสิ้น",
	UnComponentsSubCaption: ": ตัวเลือกยกเลิกการติดตั้ง",
	UnDirSubCaption: ": แฟ้มที่ยกเลิกการติดตั้ง",
	ConfirmSubCaption: ": ยืนยัน",
	UninstallingSubCaption: ": กำลังยกเลิกการติดตั้ง",
	UnCompletedSubCaption: ": เสร็จสิ้น",
	BackBtn: "< &กลับไป",
	NextBtn: "&ต่อไป >",
	AgreeBtn: "&ตกลง",
	AcceptBtn: "&ตกลงยอมรับข้อต่างๆในหัวข้อลิขสิทธิ์ ",
	DontAcceptBtn: "&ไม่ยอมรับข้อต่างๆในหัวข้อลิขสิทธิ์",
	InstallBtn: "&ติดตั้ง",
	UninstallBtn: "&ยกเลิกการติดตั้ง",
	CancelBtn: "ยกเลิก",
	CloseBtn: "&ปิด",
	BrowseBtn: "เ&รียกดู...",
	ShowDetailsBtn: "&รายละเอียด",
	ClickNext: "กด ต่อไป เพื่อเริ่มระบบอัติโนมัติ",
	ClickInstall: "กด  ติดตั้ง เพื่อทำการติดตั้ง",
	ClickUninstall: "กด  ยกเลิกการติดตั้ง เพื่อยกเลิกการติดตั้ง",
	Name: "ชื่อ",
	Completed: "เสร็จสิ้นแล้ว",
	LicenseText: "โปรดอ่านทวนเรื่องการยอมรับในลิขสิทธิ์ก่อนที่คุณจะทำการติดตั้ง $(^NameDA). ถ้าคุณยอมรับข้อตกลงในทุกๆด้าน, กด ฉันยอมรับ",
	LicenseTextCB: "โปรดอ่านทวนเรื่องการยอมรับในลิขสิทธิ์ก่อนที่คุณจะทำการติดตั้ง $(^NameDA). ถ้าคุณยอมรับข้อตกลงในทุกๆด้าน, กดเลือกที่กล่องด้านล่าง. $_CLICK",
	LicenseTextRB: "โปรดอ่านทวนเรื่องการยอมรับในลิขสิทธิ์ก่อนที่คุณจะทำการติดตั้ง $(^NameDA). ถ้าคุณยอมรับข้อตกลงในทุกๆด้าน, เลือกตัวเลือกแรกข้างล่าง. $_CLICK",
	UnLicenseText: "โปรดอ่านทวนเรื่องการยอมรับในลิขสิทธิ์ก่อนที่คุณจะทำการยกเลิกติดตั้ง $(^NameDA). ถ้าคุณยอมรับข้อตกลงในทุกๆด้าน, กด ฉันยอมรับ",
	UnLicenseTextCB: "โปรดอ่านทวนเรื่องการยอมรับในลิขสิทธิ์ก่อนที่คุณจะทำการยกเลิกติดตั้ง $(^NameDA). ถ้าคุณยอมรับข้อตกลงในทุกๆด้าน, กดเลือกที่กล่องด้านล่าง. $_CLICK",
	UnLicenseTextRB: "โปรดอ่านทวนเรื่องการยอมรับในลิขสิทธิ์ก่อนที่คุณจะทำการยกเลิกติดตั้ง $(^NameDA). ถ้าคุณยอมรับข้อตกลงในทุกๆด้าน, เลือกตัวเลือกแรกข้างล่าง. $_CLICK",
	Custom: "กำหนดเอง",
	ComponentsText: "เลื่อกสิ่งที่คุณต้องการติดตั้งและไม่เลือกสิ่งที่คุณไม่ต้องการติดตั้ง $_CLICK",
	ComponentsSubText1: "เลือกวิธีการการติดตั้ง:",
	ComponentsSubText2_NoInstTypes: "เลือกสิ่งที่คุณต้องการติดตั้ง:",
	ComponentsSubText2: "หรือ, เลือกตัวเลือกที่คุณต้องการติดตั้ง:",
	UnComponentsText: "เลือกตัวเลือกที่คุณต้องการจะยกเลิกการติดตั้งและไม่เลือกสิ่งที่คุณไม่ต้องการจะยกเลิกการติดตั้ง $_CLICK",
	UnComponentsSubText1: "เลือกวิธีการยกเลิกการติดตั้ง:",
	UnComponentsSubText2_NoInstTypes: "เลือกตัวเลือกที่ต้องการจะยกเลิกการติดตั้ง:",
	UnComponentsSubText2: "หรือ, เลือกจากตัวเลือกอื่นๆที่คุณต้องการจะยกเลิกการติดตั้ง:",
	DirText: "ตัวติดตั้งจะทำการติดตั้ง $(^NameDA) ลงในแฟ้มดังต่อไปนี้, ถ้าต้องการติดตั้งลงในแฟ้มอื่น, กด เรียกดูและเลือกแฟ้มอื่น $_CLICK",
	DirSubText: "แฟ้มที่ต้องการติดตั้ง",
	DirBrowseText: "เลือกแฟ้มที่ต้องการติดตั้ง $(^NameDA) ใน:",
	UnDirText: "ตัวติดตั้งจะทำการยกเลิกการติดตั้ง $(^NameDA) จากแฟ้มดังต่อไปนี้, ถ้าต้องการยกเลิกการติดตั้งจากแฟ้มอื่น, กด เรียกดู และเลือกแฟ้มอื่น $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "เลือกแฟ้มที่ต้องการยกเลิกการติดตั้ง $(^NameDA) จาก:",
	SpaceAvailable: "\"มีพื้นที่เหลือ: \"",
	SpaceRequired: "\"ต้องการพื้นที่: \"",
	UninstallingText: "$(^NameDA) จะถูกยกเลิกการติดตั้งจากแฟ้มต่อไปนี้. $_CLICK",
	UninstallingSubText: "ยกเลิกการติดตั้งจาก:",
	FileError: "ไม่สามารถเปิดไฟล์สำหรับเขียนได้: \\r\\n\\r\\n$0\\r\\n\\r\\nกด ยกเลิก เพื่อหยุดการติดตั้ง,\\r\\nลองอีกครั้ง เพื่อลองอีกครั้ง, หรือ\\r\\nเพิกเฉย เพื่อข้ามไฟล์นี้.",
	FileError_NoIgnore: "ไม่สามารถเปิดไฟล์สำหรับเขียนได้: \\r\\n\\r\\n$0\\r\\n\\r\\nกด ลองอีกครั้ง เพื่อลองอีกครั้ง, หรือ\\r\\nยกเลิกเพื่อหยุดการติดตั้ง",
	CantWrite: "\"ไม่สามารถเขียน: \"",
	CopyFailed: "คัดลอกผิดพลาด",
	CopyTo: "\"คัดลอกไปยัง \"",
	Registering: "\"กำลังลงทะเบียน: \"",
	Unregistering: "\"ยกเลิกการลงทะเบียน: \"",
	SymbolNotFound: "\"ไม่สามารถหาสัญลักษณ์ได้: \"",
	CouldNotLoad: "\"ไม่สามารถโหลดได้: \"",
	CreateFolder: "\"สร้างแฟ้ม: \"",
	CreateShortcut: "\"สร้างชอร์ตคัท: \"",
	CreatedUninstaller: "\"สร้างตัวยกเลิกการติดตั้ง: \"",
	Delete: "\"ลบไฟล์: \"",
	DeleteOnReboot: "\"ลบตอนรีบูท: \"",
	ErrorCreatingShortcut: "\"มีปัญหาสร้างไฟล์ชอร์ตคัท: \"",
	ErrorCreating: "\"มีปัญหาในการสร้างไฟล์: \"",
	ErrorDecompressing: "มีปัญหาในการคลายข้อมูล! เกิดข้อผิดพลาดจากตัวติดตั้ง?",
	ErrorRegistering: "มีปัญหาในการลงทะเบียน DLL",
	ExecShell: "\"รันเชลล์ไฟล์: \"",
	Exec: "\"รันไฟล์: \"",
	Extract: "\"แตกไฟล์: \"",
	ErrorWriting: "\"แตกไฟล์: เกิดปัญหาในการเขียนไฟล์\"",
	InvalidOpcode: "ตัวติดตั้งมีปัญหา: รหัส opcode ผิดพลาด",
	NoOLE: "\"ไม่มี OLE สำหรับ: \"",
	OutputFolder: "\"แฟ้มทีติดตั้ง: \"",
	RemoveFolder: "\"ลบแฟ้ม: \"",
	RenameOnReboot: "\"เปลี่ยนชื่อตอนรีบูท: \"",
	Rename: "\"เปลี่ยนชื่อ: \"",
	Skipped: "\"ข้าม: \"",
	CopyDetails: "คัดลอกรายละเอียดลงคลิปบอร์ด",
	LogInstall: "บันทึกการติดตั้ง",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Thai$1 = {
	header: header$Y,
	id: id$Y,
	font: font$Y,
	code_page: code_page$Y,
	rtl: rtl$Y,
	strings: strings$Y
};

var header$Z = "NLF v6";
var id$Z = 1028;
var font$Z = {
	name: "新細明體",
	size: 9
};
var code_page$Z = 950;
var rtl$Z = false;
var strings$Z = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "$(^Name) 安裝",
	UninstallCaption: "$(^Name) 解除安裝",
	LicenseSubCaption: ": 授權協議",
	ComponentsSubCaption: ": 安裝選項",
	DirSubCaption: ": 安裝資料夾",
	InstallingSubCaption: ": 正在安裝",
	CompletedSubCaption: ": 已完成",
	UnComponentsSubCaption: ": 解除安裝選項",
	UnDirSubCaption: ": 解除安裝資料夾",
	ConfirmSubCaption: ": 確認",
	UninstallingSubCaption: ": 正在解除安裝",
	UnCompletedSubCaption: ": 完成",
	BackBtn: "< 上一步(&B)",
	NextBtn: "下一步(&N) >",
	AgreeBtn: "我同意(&A)",
	AcceptBtn: "我接受「授權協議」的條款(&A)",
	DontAcceptBtn: "我不接受「授權協議」的條款(&D)",
	InstallBtn: "安裝(&I)",
	UninstallBtn: "解除安裝(&U)",
	CancelBtn: "取消",
	CloseBtn: "關閉(&C)",
	BrowseBtn: "瀏覽(&R)...",
	ShowDetailsBtn: "顯示細節(&D)",
	ClickNext: "按「下一步(N)」繼續。",
	ClickInstall: "按「安裝(I)」開始安裝。",
	ClickUninstall: "按「解除安裝(U)」開始解除安裝。",
	Name: "名稱",
	Completed: "已完成",
	LicenseText: "在安裝 $(^NameDA) 之前請檢閱授權協議。如果接受協議所有條款，按「我同意(A)」。",
	LicenseTextCB: "在安裝 $(^NameDA) 之前請檢閱授權協議。如果接受協議所有條款，按下方的勾選框。 $_CLICK",
	LicenseTextRB: "在安裝 $(^NameDA) 之前請檢閱授權協議。如果接受協議所有條款，選擇下方的第一個選項。 $_CLICK",
	UnLicenseText: "在解除安裝 $(^NameDA) 之前請檢閱授權協議。如果接受協議中所有條款，按「我同意(A)」。",
	UnLicenseTextCB: "在解除安裝 $(^NameDA) 之前請檢閱授權協議。如果接受協議中所有條款，按下方的勾選框。 $_CLICK",
	UnLicenseTextRB: "在解除安裝 $(^NameDA) 之前請檢閱授權協議。如果接受協議中所有條款，選擇的第一個選項。 $_CLICK",
	Custom: "自訂",
	ComponentsText: "勾選想要安裝的元件，並解除勾選不想安裝的元件。 $_CLICK",
	ComponentsSubText1: "選取安裝的類型: ",
	ComponentsSubText2_NoInstTypes: "選取安裝的元件: ",
	ComponentsSubText2: "又或者，自訂選取想安裝的元件: ",
	UnComponentsText: "勾選想要解除安裝的元件，並解除勾選不想解除安裝的元件。 $_CLICK",
	UnComponentsSubText1: "選取解除安裝的類型: ",
	UnComponentsSubText2_NoInstTypes: "選取要解除安裝的元件: ",
	UnComponentsSubText2: "又或者，選擇想要解除安裝的可選項元件: ",
	DirText: "安裝程式會將 $(^NameDA) 安裝在以下資料夾。要安裝到不同的資料夾，按「瀏覽(B)...」並選擇其他資料夾。 $_CLICK",
	DirSubText: "目標資料夾",
	DirBrowseText: "選取要安裝 $(^NameDA) 的資料夾: ",
	UnDirText: "安裝程式會自以下資料夾解除安裝 $(^NameDA) 。要解除安裝不同的資料夾，按「瀏覽(B)...」並選擇其他資料夾。 $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "選取要解除安裝 $(^NameDA) 的資料夾: ",
	SpaceAvailable: "\"可用空間: \"",
	SpaceRequired: "\"所需空間: \"",
	UninstallingText: "會自以下資料夾解除安裝 $(^NameDA) 。 $_CLICK",
	UninstallingSubText: "解除安裝目錄: ",
	FileError: "無法開啟要寫入的檔案: \\r\\n\\t\"$0\"\\r\\n按「中止」停止安裝，\\r\\n「重試」重新嘗試寫入檔案，或\\r\\n「忽略」略過此檔案。",
	FileError_NoIgnore: "無法開啟要寫入的檔案: \\r\\n\\t\"$0\"\\r\\n按「重試」重新嘗試寫入檔案，或\\r\\n「取消」停止安裝。",
	CantWrite: "\"無法寫入: \"",
	CopyFailed: "\"複製失敗 \"",
	CopyTo: "\"複製到: \"",
	Registering: "\"正在註冊: \"",
	Unregistering: "\"正在解除註冊: \"",
	SymbolNotFound: "\"無法找到符號: \"",
	CouldNotLoad: "\"無法載入: \"",
	CreateFolder: "\"建立資料夾: \" ",
	CreateShortcut: "\"建立捷徑: \"",
	CreatedUninstaller: "\"建立解除安裝程式: \"",
	Delete: "\"刪除檔案: \"",
	DeleteOnReboot: "\"重新開機後刪除: \"",
	ErrorCreatingShortcut: "\"建立捷徑時發生錯誤: \"",
	ErrorCreating: "\"建立時發生錯誤: \"",
	ErrorDecompressing: "\"解壓縮資料發生錯誤！安裝程式是否已損壞？\"",
	ErrorRegistering: "\"註冊 DLL 時發生錯誤\"",
	ExecShell: "\"執行殼層程式: \"",
	Exec: "\"執行: \"",
	Extract: "\"抽取: \"",
	ErrorWriting: "\"抽取: 無法寫入檔案 \"",
	InvalidOpcode: "\"安裝程式損毀: 無效的作業代碼 \"",
	NoOLE: "\"沒有 OLE 用於: \"",
	OutputFolder: "\"輸出資料夾: \"",
	RemoveFolder: "\"移除資料夾: \"",
	RenameOnReboot: "\"重新開機後重新命名: \"",
	Rename: "\"重新命名: \"",
	Skipped: "\"已略過: \"",
	CopyDetails: "\"複製細節到剪貼簿 \"",
	LogInstall: "\"將安裝進程記入日誌\"",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var TradChinese$1 = {
	header: header$Z,
	id: id$Z,
	font: font$Z,
	code_page: code_page$Z,
	rtl: rtl$Z,
	strings: strings$Z
};

var header$_ = "NLF v6";
var id$_ = 1055;
var font$_ = {
	name: null,
	size: null
};
var code_page$_ = 1254;
var rtl$_ = false;
var strings$_ = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "$(^Name) Kurulumu",
	UninstallCaption: "$(^Name) Kaldırma",
	LicenseSubCaption: ": Lisans Sözleşmesi",
	ComponentsSubCaption: ": Kurulum Seçenekleri",
	DirSubCaption: ": Kurulum Dizini",
	InstallingSubCaption: ": Kuruluyor",
	CompletedSubCaption: ": Tamamlandı",
	UnComponentsSubCaption: ": Kaldırma Seçenekleri",
	UnDirSubCaption: ": Kaldırılacak Dizin",
	ConfirmSubCaption: ": Onay",
	UninstallingSubCaption: ": Kaldırılıyor",
	UnCompletedSubCaption: ": Tamamlandı",
	BackBtn: "< &Geri",
	NextBtn: "İ&leri >",
	AgreeBtn: "&Katılıyorum",
	AcceptBtn: "Lisans Sözleşmesi'nin koşullarını &kabul ediyorum",
	DontAcceptBtn: "Lisans Sözleşmesi'nin koşullarını kabul et&miyorum",
	InstallBtn: "&Kur",
	UninstallBtn: "&Kaldır",
	CancelBtn: "Vazgeç",
	CloseBtn: "&Kapat",
	BrowseBtn: "&Gözat...",
	ShowDetailsBtn: "&Ayrıntıları göster",
	ClickNext: "Devam etmek için İleri düğmesine basın.",
	ClickInstall: "Kurulumu başlatmak için Kur düğmesine basın.",
	ClickUninstall: "Kaldırmayı başlatmak için Kaldır düğmesine basın.",
	Name: "Ad",
	Completed: "Tamamlandı",
	LicenseText: "Lütfen $(^NameDA) uygulamasını kurmadan önce lisans sözleşmesini gözden geçirin. Sözleşmedeki bütün koşulları kabul ediyorsanız Kabul Ediyorum düğmesine basın.",
	LicenseTextCB: "Lütfen $(^NameDA) uygulamasını kurmadan önce lisans sözleşmesini gözden geçirin. Sözleşmedeki bütün koşulları kabul ediyorsanız aşağıdaki kutuya işaret koyun. $_CLICK",
	LicenseTextRB: "Lütfen $(^NameDA) uygulamasını kurmadan önce lisans sözleşmesini gözden geçirin. Sözleşmedeki bütün koşulları kabul ediyorsanız aşağıdaki ilk seçeneği seçin. $_CLICK",
	UnLicenseText: "Lütfen $(^NameDA) uygulamasını kaldırmadan önce lisans sözleşmesini gözden geçirin. Sözleşmedeki bütün koşulları kabul ediyorsanız Kabul Ediyorum düğmesine basın.",
	UnLicenseTextCB: "Lütfen $(^NameDA) uygulamasını kaldırmadan önce lisans sözleşmesini gözden geçirin. Sözleşmedeki bütün koşulları kabul ediyorsanız aşağıdaki kutuya işaret koyun. $_CLICK",
	UnLicenseTextRB: "Lütfen $(^NameDA) uygulamasını kaldırmadan önce lisans sözleşmesini gözden geçirin. Sözleşmedeki bütün koşulları kabul ediyorsanız aşağıdaki ilk seçeneği seçin. $_CLICK",
	Custom: "Özel",
	ComponentsText: "Kurmak istediğiniz bileşenleri işaretleyip kurmak istemediklerinizi işaretlemeden bırakın. $_CLICK",
	ComponentsSubText1: "Kurulum türünü seçin:",
	ComponentsSubText2_NoInstTypes: "Kurulacak bileşenleri seçin:",
	ComponentsSubText2: "ya da isteğe bağlı olarak kurmak istediğiniz bileşenleri seçin:",
	UnComponentsText: "Kaldırmak istediğiniz bileşenleri işaretleyip kaldırmak istemediklerinizi işaretlemeden bırakın. $_CLICK",
	UnComponentsSubText1: "Kaldırma türünü seçin:",
	UnComponentsSubText2_NoInstTypes: "Kaldırılacak bileşenleri seçin:",
	UnComponentsSubText2: "ya da isteğe bağlı olarak kaldırmak istediğiniz bileşenleri seçin:",
	DirText: "$(^NameDA) aşağıdaki dizinde kurulacak. Farklı bir dizinde kurmak için Gözat düğmesine basıp başka bir dizin seçin. $_CLICK",
	DirSubText: "Hedef Dizin",
	DirBrowseText: "$(^NameDA) uygulamasının kurulacağı dizini seçin:",
	UnDirText: "$(^NameDA) aşağıdaki dizinden kaldırılacak. Farklı bir dizinden kaldırmak için Gözat düğmesine basıp başka bir dizin seçin. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "$(^NameDA) uygulamasının kaldırılacağı dizini seçin:",
	SpaceAvailable: "\"Kullanılabilir boş alan: \"",
	SpaceRequired: "\"Gereken boş alan: \"",
	UninstallingText: "$(^NameDA) aşağıdaki dizinden kaldırılacak. $_CLICK",
	UninstallingSubText: "Kaldırılan yer:",
	FileError: "Dosya yazmak için açılırken hata meydana geldi: \\r\\n\\r\\n$0\\r\\n\\r\\nKurulumu durdurmak için Dur düğmesine,\\r\\nyeniden denemek için Yeniden Dene düğmesine,\\r\\nbu dosyayı atlamak için Yoksay düğmesine basın.",
	FileError_NoIgnore: "Dosya yazmak için açılırken hata meydana geldi: \\r\\n\\r\\n$0\\r\\n\\r\\nYeniden denemek için Yeniden Dene düğmesine,\\r\\nkurulumu durdurmak için Vazgeç düğmesine basın.",
	CantWrite: "\"Yazılamadı: \"",
	CopyFailed: "Kopyalama başarısız oldu",
	CopyTo: "\"Kayıt: \"",
	Registering: "\"Kaydediliyor: \"",
	Unregistering: "\"Kayıt siliniyor: \"",
	SymbolNotFound: "\"Simge bulunamadı: \"",
	CouldNotLoad: "\"Yüklenemedi: \"",
	CreateFolder: "\"Dizin oluştur: \"",
	CreateShortcut: "\"Kısayol oluştur: \"",
	CreatedUninstaller: "\"Kaldırma uygulaması oluştur: \"",
	Delete: "\"Dosya sil: \"",
	DeleteOnReboot: "\"Açılışta sil: \"",
	ErrorCreatingShortcut: "\"Kısayol oluşturulurken hata meydana geldi: \"",
	ErrorCreating: "\"Oluşturma hatası: \"",
	ErrorDecompressing: "Veriyi açarken hata meydana geldi! Acaba kurulum uygulaması mı bozuk?",
	ErrorRegistering: "DLL kaydedilirken hata meydana geldi",
	ExecShell: "\"ExecShell: \"",
	Exec: "\"Çalıştır: \"",
	Extract: "\"Aç: \"",
	ErrorWriting: "\"Açma: Dosyaya yazarken hata meydana geldi \"",
	InvalidOpcode: "Kurulum bozuk: Geçersiz kod",
	NoOLE: "\"OLE yok: \"",
	OutputFolder: "\"Çıktı dizini: \"",
	RemoveFolder: "\"Dizini sil: \"",
	RenameOnReboot: "\"Açılışta adını değiştir: \"",
	Rename: "\"Ad değiştir: \"",
	Skipped: "\"Atlandı: \"",
	CopyDetails: "Ayrıntıları panoya kopyala",
	LogInstall: "Kurulum sürecinin kaydını tut",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Turkish$1 = {
	header: header$_,
	id: id$_,
	font: font$_,
	code_page: code_page$_,
	rtl: rtl$_,
	strings: strings$_
};

var header$$ = "NLF v6";
var id$$ = 1058;
var font$$ = {
	name: null,
	size: null
};
var code_page$$ = 1251;
var rtl$$ = false;
var strings$$ = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "$(^Name) Встановлення",
	UninstallCaption: "$(^Name) Видалення",
	LicenseSubCaption: ": Ліцензійна угода",
	ComponentsSubCaption: ": Опції встановлення",
	DirSubCaption: ": Тека встановлення",
	InstallingSubCaption: ": Копіювання файлів",
	CompletedSubCaption: ": Завершено",
	UnComponentsSubCaption: ": Опції видалення",
	UnDirSubCaption: ": Тека видалення",
	ConfirmSubCaption: ": Підтверждення",
	UninstallingSubCaption: ": Видалення файлів",
	UnCompletedSubCaption: ": Завершено",
	BackBtn: "< &Назад",
	NextBtn: "&Далі >",
	AgreeBtn: "&Згоден",
	AcceptBtn: "Я &приймаю умови Ліцензійної угоди",
	DontAcceptBtn: "Я &не приймаю умови Ліцензійної угоди",
	InstallBtn: "&Встановити",
	UninstallBtn: "Видалити",
	CancelBtn: "Скасувати",
	CloseBtn: "&Закрити",
	BrowseBtn: "О&гляд...",
	ShowDetailsBtn: "Подробиці",
	ClickNext: "Натисніть Далі щоб продовжити",
	ClickInstall: "Натисніть Встановити для початку процессу встановлення",
	ClickUninstall: "Натисніть Видалить для початку процессу видалення",
	Name: "Ім'я",
	Completed: "Завершено",
	LicenseText: "Прочитайте умови ліцензійної угоди перед встановленням $(^NameDA). Якщо Ви приймаєте умови угоди, натисніть на кнопку Згоден.",
	LicenseTextCB: "Прочитайте умови ліцензійної угоди перед встановленням $(^NameDA). Якщо Ви приймаєте умови угоди, встановіть відмітку у квадратику нижче. $_CLICK",
	LicenseTextRB: "Прочитайте умови ліцензійної угоди перед встановленням $(^NameDA). Якщо Ви приймаєте умови угоди, виберіть перший варіант. $_CLICK",
	UnLicenseText: "Прочитайте умови ліцензійної угоди перед встановленням $(^NameDA). Якщо Ви приймаєте умови ліцензійної угоди, натисніть на кнопку Згоден.",
	UnLicenseTextCB: "Прочитайте умови ліцензійної угоди перед встановленням $(^NameDA). Якщо Ви приймаєте умови угоди, встановіть відмітку у квадратику нижче. $_CLICK",
	UnLicenseTextRB: "Прочитайте умови ліцензійної угоди перед видаленням $(^NameDA). Якщо Ви приймаєте умови угоди, виберіть перший варіант. $_CLICK",
	Custom: "По вибору",
	ComponentsText: "Виберіть які компоненти програми Ви бажаєте встановити. $_CLICK",
	ComponentsSubText1: "Виберіть тип встановлення:",
	ComponentsSubText2_NoInstTypes: "Виберіть компоненти для встановлення:",
	ComponentsSubText2: "Чи, виберіть вручну компоненти, які Ви хочете встановити:",
	UnComponentsText: "Виберіть які компоненти Ви бажаєте видалити. Відмітьте компоненти для видалення і зніміть відмітку з тих, які Ви видаляти не бажаєте. $_CLICK",
	UnComponentsSubText1: "Виберіть тип видалення:",
	UnComponentsSubText2_NoInstTypes: "Вибір компонентів для видалення:",
	UnComponentsSubText2: "Чи виберіть компоненти програми для видалення по своєму бажанні:",
	DirText: "Программа встановить $(^NameDA) у вказану теку. Для того, щоб встановити программу в іншу теку, натисніть Огляд і вкажіть потрібну теку. $_CLICK",
	DirSubText: "Каталог призначення",
	DirBrowseText: "Виберіть теку для встановлення $(^NameDA):",
	UnDirText: "Программа встановлення видалить $(^NameDA) із вказанної теки. Для того, щоб провести видалення з іншої теки, натисніть Огляд і вкажіть потрібну теку. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Виберіть теку, з якої Ви бажаєте видалити $(^NameDA):",
	SpaceAvailable: "\"Доступно місця: \"",
	SpaceRequired: "\"Необхідно місця: \"",
	UninstallingText: "$(^NameDA) буде видаленно з вказаного каталогу. $_CLICK",
	UninstallingSubText: "Видалення з:",
	FileError: "Неможливо відкрити файл для запису: \\r\\n\\t\"$0\"\\r\\nНатисніть Перервати для того, щоб перервати встановлення,\\r\\nПовторити для того, щоб повторити спробу запису у файл, чи\\r\\nІгнорувати для того, щоб пропустити цю дію",
	FileError_NoIgnore: "Неможливо відкрити файл для запису: \\r\\n\\t\"$0\"\\r\\nНатисніть Повторити для того, щоб повторити спробу запису у файл, чи\\r\\nСкасувати для того, щоб перервати встановлення",
	CantWrite: "\"Неможливо записати: \"",
	CopyFailed: "Не вдалося копіювати",
	CopyTo: "\"Копіювання в \"",
	Registering: "\"Реєстрація: \"",
	Unregistering: "\"Видалення реєстрації: \"",
	SymbolNotFound: "\"Неможливо знайти символ: \"",
	CouldNotLoad: "\"Неможливо завантажити: \"",
	CreateFolder: "\"Створення теки: \"",
	CreateShortcut: "\"Створення ярлика: \"",
	CreatedUninstaller: "\"Створення програми видалення: \"",
	Delete: "\"Видалення файлу: \"",
	DeleteOnReboot: "\"Видалення після перезавантаження: \"",
	ErrorCreatingShortcut: "\"Помилка створення ярлика: \"",
	ErrorCreating: "\"Помилка створення: \"",
	ErrorDecompressing: "Неможливо витягнути дані. Можливо пошкоджений дистрибутив.",
	ErrorRegistering: "Неможливо зареєструвати бібліотеку (DLL)",
	ExecShell: "\"Виконання команди оболонки: \"",
	Exec: "\"Виконання: \"",
	Extract: "\"Витягнення: \"",
	ErrorWriting: "\"Витягнення: помилка запису файла\"",
	InvalidOpcode: "Дистрибутив пошкоджений: помилковий код відповіді",
	NoOLE: "\"Немає OLE для: \"",
	OutputFolder: "\"Тека призначення: \"",
	RemoveFolder: "\"Видалення теки: \"",
	RenameOnReboot: "\"Переіменування після перезаванаження: \"",
	Rename: "\"Перейменування: \"",
	Skipped: "\"Пропущено: \"",
	CopyDetails: "Копіювати деталі у буфер обміну",
	LogInstall: "Записувати в лог процес встновлення",
	Byte: "б",
	Kilo: " К",
	Mega: " М",
	Giga: " Г"
};
var Ukrainian$1 = {
	header: header$$,
	id: id$$,
	font: font$$,
	code_page: code_page$$,
	rtl: rtl$$,
	strings: strings$$
};

var header$10 = "NLF v6";
var id$10 = 1091;
var font$10 = {
	name: null,
	size: null
};
var code_page$10 = 1252;
var rtl$10 = false;
var strings$10 = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "O'rnatish $(^Name)",
	UninstallCaption: "O'chirish $(^Name)",
	LicenseSubCaption: ": Lisenzion kelishuv",
	ComponentsSubCaption: ": O'rnatish parametrlari ",
	DirSubCaption: ": O'rnatish papkasi",
	InstallingSubCaption: ": Fayllarni kopiya qilish",
	CompletedSubCaption: ": Operatsiya yakunlandi",
	UnComponentsSubCaption: ": O'chirish parametrlari",
	UnDirSubCaption: ": O'chirsh papkasi",
	ConfirmSubCaption: ": Tasdiqlash",
	UninstallingSubCaption: ": Fayllarni o'chirish",
	UnCompletedSubCaption: ": Operatsiya yakunlandi",
	BackBtn: "< &Orqaga",
	NextBtn: "&Oldinga >",
	AgreeBtn: "&Qabul qilaman",
	AcceptBtn: "Men &kelishuv shartlarini qabul qilaman",
	DontAcceptBtn: "Men &kelishuv shartlarini qabul qilmayman",
	InstallBtn: "&O'rnatish",
	UninstallBtn: "&O'chirish",
	CancelBtn: "Bekor qilish",
	CloseBtn: "&Yopish",
	BrowseBtn: "&Ko'rish ...",
	ShowDetailsBtn: "&Äåòàëè...",
	ClickNext: "Davom etish uchun 'Oldinga'tugmachasini bosing.",
	ClickInstall: "Dasturni o'rnatish uchun'O'rnatish' tugmachasini bosing.",
	ClickUninstall: "Dasturni o'chirish uchun 'O'chirsh' tugmachasini bosing.",
	Name: "Ism",
	Completed: "Tayor",
	LicenseText: "$(^NameDA)ni o'rnatishdan oldin lisenzion kelishuv bilan tanishib oling. Kelishuv shartlarini qabul qilsangiz 'Qabul qilaman' tugmachasini bosing.",
	LicenseTextCB: "$(^NameDA)ni o'rnatishdan oldin lisenzion kelishuv bilan tanishib oling. Kelishuv shartlarini qabul qilsangiz bayroqchani joylashtiring. $_CLICK",
	LicenseTextRB: "$(^NameDA)ni o'rnatishdan oldin lisenzion kelishuv bilan tanishib oling. Kelishuv shartlarini qabul qilsangiz quyida taklif etilganlardan birinchi variantni tanlang. $_CLICK",
	UnLicenseText: "$(^NameDA)ni o'rnatishdan oldin lisenzion kelishuv bilan tanishib oling. Kelishuv shartlarini qabul qilsangiz 'Qabul qilaman' tugmachasini bosing.",
	UnLicenseTextCB: "$(^NameDA)ni o'rnatishdan oldin lisenzion kelishuv bilan tanishib oling. Kelishuv shartlarini qabul qilsangiz bayroqchani joylashtiring. $_CLICK",
	UnLicenseTextRB: "$(^NameDA)ni o'rnatishdan oldin lisenzion kelishuv bilan tanishib oling. Kelishuv shartlarini qabul qilsangiz quyida taklif etilganlardan birinchi variantni tanlang. $_CLICK",
	Custom: "Tanlash bo'icha",
	ComponentsText: "O'rnatish ucun dastur komponentlarini tanlang. $_CLICK",
	ComponentsSubText1: "O'rnatish jarayonini tanlang:",
	ComponentsSubText2_NoInstTypes: "O'rnatish uchun dastur komponentlarini tanlang:",
	ComponentsSubText2: "Yoki o'rnatish uchun qushimcha komponentlarini tanlang:",
	UnComponentsText: "O'chirish uchun dastur komponentlarini tanlang. $_CLICK",
	UnComponentsSubText1: "O'chirish jarayonini tanlang:",
	UnComponentsSubText2_NoInstTypes: "O'chirish uchun dastur komponentlarini tanlang:",
	UnComponentsSubText2: "Yoki o'chirish uchun qushimcha komponentlarini tanlang:",
	DirText: "Dastur $(^NameDA)ni ko'rsatilgan papkaga o'rnatadi. Boshqa papkaga o'rnatish uchun, 'Ko'rish'tugmachasini bosing va uni ko'rsatib bering. $_CLICK",
	DirSubText: "O'rnatish papkasi",
	DirBrowseText: "O'rnatish papkasini ko'rsating $(^NameDA):",
	UnDirText: "Dastur $(^NameDA)ni ko'rsatilgan papkadan o'chiradi. Boshqa papkaga o'rnatish uchun, 'Ko'rish'tugmachasini bosing va uni ko'rsatib bering. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "$(^NameDA)ni o'chirish uchun papkani ko'rsating:",
	SpaceAvailable: "\"Diskda joriy qilingan: \"",
	SpaceRequired: "\"Diskda talab qilinadigan: \"",
	UninstallingText: "$(^NameDA) dasturi kompyuterizdan uchiriladi. $_CLICK",
	UninstallingSubText: "O'chirilish:",
	FileError: "Yozish uchun faylni ochish imkoniyati yuq: \\r\\n\\t\"$0\"\\r\\n'Tuxtashish': O'rnatishni tuxtatish;\\r\\n\"Takrorlash\":yana bir o'rinib ko'rish;\\r\\n\"Taylab ketish\": shu xarakatni taylab ketish.",
	FileError_NoIgnore: "Yozish uchun faylni ochish imkoniyati yuq: \\r\\n\\t\"$0\"\\r\\n'Takrorlash': yana bir o'rinib ko'rish;\\r\\n'Bekor qilish': o'rnatish protsessini bekor qilish.",
	CantWrite: "\"Yozish uchun imkoniyat yuq: \"",
	CopyFailed: "Kopiya qilganda xato bor",
	CopyTo: "\"Kopiya qilish \"",
	Registering: "\"Ro'yxatga olish: \"",
	Unregistering: "\"Ro'xatdan chiqish: \"",
	SymbolNotFound: "\"Simvolni topish imkoniyati yuq: \"",
	CouldNotLoad: "\"Zagruzka qilish imkoniyati yuq: \"",
	CreateFolder: "\"Papkani yaratish: \"",
	CreateShortcut: "\"Belgini yaratish: \"",
	CreatedUninstaller: "\"O'chirish dasturini yaratish: \"",
	Delete: "\"Faylni o'chirish: \"",
	DeleteOnReboot: "\"Kompyuter qayta yuklash jaraonida o'chirish: \"",
	ErrorCreatingShortcut: "\"Belgini yaratish jarayonida xato: \" ",
	ErrorCreating: "\"Yaratish xatosi: \"",
	ErrorDecompressing: "Ma'lumotlarni asilga qaytarish xatosi! Distributiv ziyonlangan bulishi mumkin.",
	ErrorRegistering: "Kutubxonani ro'xatga olish imkoniyati yuq (DLL)",
	ExecShell: "\"Qoplang'ich komandasini bajarish: \" ",
	Exec: "\"Bajarish: \"",
	Extract: "\"Ichidan olish: \"",
	ErrorWriting: "\"Ichidan olish: fayl yozish xatosi \"",
	InvalidOpcode: "Distributiv ziyonlangan: ruxsatlanmangan kod",
	NoOLE: "\"Quydagilarga OLE yuq: \" ",
	OutputFolder: "\"Papkani o'rnatish: \"",
	RemoveFolder: "\"Papkani o'chirish: \"",
	RenameOnReboot: "\"Kompyuter qayta yuklanish jarayonida ismni qaita quyish: \"",
	Rename: "\"Ismni qayta quyish: \"",
	Skipped: "\"O'tkazib yuborish: \"",
	CopyDetails: "Bufer obmenaga ma'lumotlarni kopiya qilish",
	LogInstall: "O'rnatish xisobotini chiqorish",
	Byte: "áàéò",
	Kilo: " Ê",
	Mega: " Ì",
	Giga: " Ã"
};
var Uzbek$1 = {
	header: header$10,
	id: id$10,
	font: font$10,
	code_page: code_page$10,
	rtl: rtl$10,
	strings: strings$10
};

var header$11 = "NLF v6";
var id$11 = 1066;
var font$11 = {
	name: null,
	size: null
};
var code_page$11 = 1258;
var rtl$11 = false;
var strings$11 = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Cài đặt $(^Name)",
	UninstallCaption: "Gỡ bỏ $(^Name)",
	LicenseSubCaption: ": Thỏa thuận Giấy phép",
	ComponentsSubCaption: ": Tùy chọn Cài đặt",
	DirSubCaption: ": Thư mục Cài đặt",
	InstallingSubCaption: ": Cài đặt",
	CompletedSubCaption: ": Hoàn thành",
	UnComponentsSubCaption: ": Tùy chọn Gỡ bỏ",
	UnDirSubCaption: ": Thư mục Gỡ bỏ",
	ConfirmSubCaption: ": Xác nhận",
	UninstallingSubCaption: ": Gỡ bỏ",
	UnCompletedSubCaption: ": Hoàn thành",
	BackBtn: "< &Lùi",
	NextBtn: "&Tiến >",
	AgreeBtn: "Tô&i đồng ý",
	AcceptBtn: "Tô&i chấp thuận các điều khoản của Thỏa thuận Giấy phép",
	DontAcceptBtn: "Tôi &không chấp thuận các điều khoản của Thỏa thuận Giấy phép",
	InstallBtn: "&Cài đặt",
	UninstallBtn: "&Gỡ bỏ",
	CancelBtn: "Hủy bỏ",
	CloseBtn: "Đón&g",
	BrowseBtn: "Du&yệt...",
	ShowDetailsBtn: "&Hiện chi tiết",
	ClickNext: "Nhấn Tiến để tiếp tục.",
	ClickInstall: "Nhấn “Cài đặt” để bắt đầu việc cài đặt.",
	ClickUninstall: "Nhấn “Gỡ bỏ” để bắt đầu việc gỡ bỏ.",
	Name: "Tên",
	Completed: "Hoàn thành",
	LicenseText: "Vui lòng xem xét thỏa thuận giấy phép trước khi cài đặt $(^NameDA). Nếu bạn chấp thuận tất cả các điều khoản của thỏa thuận, hãy nhấn “Tôi đồng ý”.",
	LicenseTextCB: "Vui lòng xem xét thỏa thuận giấy phép trước khi cài đặt $(^NameDA). Nếu bạn chấp thuận tất cả các điều khoản của thỏa thuận, hãy nhấn ô bên dưới. $_CLICK",
	LicenseTextRB: "Vui lòng xem xét thỏa thuận giấy phép trước khi cài đặt $(^NameDA). Nếu bạn chấp thuận tất cả các điều khoản của thỏa thuận, hãy chọn ô đầu tiên bên dưới. $_CLICK",
	UnLicenseText: "Vui lòng xem xét thỏa thuận giấy phép trước khi gỡ bỏ $(^NameDA). Nếu bạn chấp thuận tất cả các điều khoản của thỏa thuận, hãy nhấn “Tôi đồng ý”.",
	UnLicenseTextCB: "Vui lòng xem xét thỏa thuận giấy phép trước khi gỡ bỏ $(^NameDA). Nếu bạn chấp thuận tất cả các điều khoản của thỏa thuận, hãy nhấn ô bên dưới. $_CLICK",
	UnLicenseTextRB: "Vui lòng xem xét thỏa thuận giấy phép trước khi gỡ bỏ $(^NameDA). Nếu bạn chấp thuận tất cả các điều khoản của thỏa thuận, hãy chọn ô đầu tiên bên dưới. $_CLICK",
	Custom: "Tùy biến",
	ComponentsText: "Chọn thành phần mà bạn muốn cài đặt và không chọn các thành phần mà bạn không muốn cài đặt. $_CLICK",
	ComponentsSubText1: "Chọn kiểu cài đặt:",
	ComponentsSubText2_NoInstTypes: "Chọn thành phần để cài đặt:",
	ComponentsSubText2: "Hoặc, chọn thành phần phụ mà bạn muốn cài đặt:",
	UnComponentsText: "Chọn thành phần mà bạn muốn gỡ bỏ và không chọn các thành phần mà bạn không muốn gỡ bỏ. $_CLICK",
	UnComponentsSubText1: "Chọn kiểu gỡ bỏ:",
	UnComponentsSubText2_NoInstTypes: "Chọn thành phần để gỡ bỏ:",
	UnComponentsSubText2: "Hoặc, chọn thành phần phụ mà bạn muốn gỡ bỏ:",
	DirText: "Trình trợ lí sẽ cài đặt $(^NameDA) vào thư mục sau. Để cài đặt vào một thư mục khác, hãy nhấn Duyệt để chọn thư mục. $_CLICK",
	DirSubText: "Thư mục đích",
	DirBrowseText: "Chọn thư mục để cài đặt $(^NameDA):",
	UnDirText: "Trình trợ lí sẽ gỡ bỏ $(^NameDA) khỏi thư mục sau. Để gỡ bỏ khỏi một thư mục khác, hãy nhấn Duyệt để chọn thư mục. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Chọn thư mục để gỡ bỏ $(^NameDA):",
	SpaceAvailable: "\"Dung lượng hiện có: \"",
	SpaceRequired: "\"Dung lượng yêu cầu: \"",
	UninstallingText: "$(^NameDA) sẽ bị gỡ bỏ khỏi thư mục sau. $_CLICK",
	UninstallingSubText: "Đang gỡ bỏ khỏi:",
	FileError: "Lỗi khi mở tập tin để ghi: \\r\\n\\r\\n$0\\r\\n\\r\\nNhấn “Hủy bỏ” để ngừng việc cài đặt,\\r\\n“Thử lại” để thử lần nữa, hoặc\\r\\n“Bỏ qua” để bỏ qua tập tin này.",
	FileError_NoIgnore: "Lỗi khi mở tập tin để ghi: \\r\\n\\r\\n$0\\r\\n\\r\\nNhấn “Thử lại” để thử lần nữa, hoặc\\r\\n“Hủy bỏ” để ngừng việc cài đặt.",
	CantWrite: "\"Không thể ghi: \"",
	CopyFailed: "Sao chép bị thất bại",
	CopyTo: "\"Sao chép vào \"",
	Registering: "\"Đang đăng kí: \"",
	Unregistering: "\"Đang hủy đăng kí: \"",
	SymbolNotFound: "\"Không thể tìm thấy biểu tượng: \"",
	CouldNotLoad: "\"Không thể nạp: \"",
	CreateFolder: "\"Tạo thư mục: \"",
	CreateShortcut: "\"Tạo lối tắt: \"",
	CreatedUninstaller: "\"Tạo trình gỡ bỏ: \"",
	Delete: "\"Xóa tập tin: \"",
	DeleteOnReboot: "\"Xóa khi khởi động lại: \"",
	ErrorCreatingShortcut: "\"Lỗi khi tạo lối tắt: \"",
	ErrorCreating: "\"Lỗi khi tạo: \"",
	ErrorDecompressing: "Lỗi khi giải nén dữ liệu! Có thể trình cài đặt đã bị hỏng?",
	ErrorRegistering: "Lỗi khi đăng kí DLL",
	ExecShell: "\"ExecShell: \"",
	Exec: "\"Thực thi: \"",
	Extract: "\"Trích xuất: \"",
	ErrorWriting: "\"Trích xuất: lôi khi ghi vào tập tin \"",
	InvalidOpcode: "Trình cài đặt bị hỏng: mã tác vụ bất hợp lệ",
	NoOLE: "\"Không có OLE cho: \"",
	OutputFolder: "\"Thư mục đầu ra: \"",
	RemoveFolder: "\"Xóa thư mục: \"",
	RenameOnReboot: "\"Đổi tên khi khởi động lại: \"",
	Rename: "\"Đổi tên: \"",
	Skipped: "\"Đã bỏ qua: \"",
	CopyDetails: "Sao chép Chi tiết vào Clipboard",
	LogInstall: "Lưu kí quá trình cài đặt",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Vietnamese$1 = {
	header: header$11,
	id: id$11,
	font: font$11,
	code_page: code_page$11,
	rtl: rtl$11,
	strings: strings$11
};

var header$12 = "NLF v6";
var id$12 = 1106;
var font$12 = {
	name: null,
	size: null
};
var code_page$12 = 1252;
var rtl$12 = false;
var strings$12 = {
	Branding: "Nullsoft Install System %s",
	SetupCaption: "Rhaglen Osod $(^Name)",
	UninstallCaption: "Rhaglen Dadosod $(^Name)",
	LicenseSubCaption: ": Cytundeb Trwyddedu",
	ComponentsSubCaption: ": Dewisiadau Gosod",
	DirSubCaption: ": Ffolder Gosod",
	InstallingSubCaption: ": Gosod",
	CompletedSubCaption: ": Cwblhawyd",
	UnComponentsSubCaption: ": Dewisiadau Dadosod",
	UnDirSubCaption: ": Ffolder Dadosod",
	ConfirmSubCaption: ": Cadarnhad",
	UninstallingSubCaption: ": Dadosod",
	UnCompletedSubCaption: ": Cwblhawyd",
	BackBtn: "< &Nôl",
	NextBtn: "&Nesaf >",
	AgreeBtn: "&Cytuno",
	AcceptBtn: "Rwy'n &derbyn Amodau'r Drwydded",
	DontAcceptBtn: "Rwy'n &gwrthod Amodau'r Drwydded",
	InstallBtn: "&Gosod",
	UninstallBtn: "&Dadosod",
	CancelBtn: "Diddymu",
	CloseBtn: "C&au",
	BrowseBtn: "&Pori...",
	ShowDetailsBtn: "&Dangos manylion",
	ClickNext: "Cliciwch Nesaf i barhau.",
	ClickInstall: "Cliciwch Gosod i gychwyn gosod.",
	ClickUninstall: "Cliciwch Dadosod i gychwyn dadosod.",
	Name: "Enw",
	Completed: "Cwblhawyd",
	LicenseText: "Darllenwch y cytundeb trwyddedu cyn gosod $(^NameDA). Os ydych yn derbyn holl amodau'r cytundeb, cliciwch Cytuno.",
	LicenseTextCB: "Darllenwch y cytundeb trwyddedu cyn gosod $(^NameDA). Os ydych yn derbyn holl amodau'r cytundeb, cliciwch y blwch ticio isod. $_CLICK",
	LicenseTextRB: "Darllenwch y cytundeb trwyddedu cyn gosod $(^NameDA). Os ydych yn derbyn holl amodau'r cytundeb, ticiwch y dewis cyntaf isod. $_CLICK",
	UnLicenseText: "Darllenwch y cytundeb trwyddedu cyn dadosod $(^NameDA). Os ydych yn derbyn holl amodau'r cytundeb, cliciwch Cytuno.",
	UnLicenseTextCB: "Darllenwch y cytundeb trwyddedu cyn dadosod $(^NameDA). Os ydych yn derbyn holl amodau'r cytundeb, cliciwch y blwch ticio isod. $_CLICK",
	UnLicenseTextRB: "Darllenwch y cytundeb trwyddedu cyn dadosod $(^NameDA). Os ydych yn derbyn holl amodau'r cytundeb, ticiwch y dewis cyntaf isod. $_CLICK",
	Custom: "Addasu",
	ComponentsText: "Ticiwch y cydrannau rydych am eu gosod a dad-dicio'r cydrannau nad ydych am eu gosod. $_CLICK",
	ComponentsSubText1: "Dewis y math o osod:",
	ComponentsSubText2_NoInstTypes: "Dewis cydrannau i'w gosod:",
	ComponentsSubText2: "Neu, ddewis y cydrannau ychwanegol i'w gosod:",
	UnComponentsText: "Ticiwch y cydrannau rydych am eu dadosod a dad-dicio'r cydrannau nad ydych am eu dadosod. $_CLICK",
	UnComponentsSubText1: "Dewis y math o ddadosod:",
	UnComponentsSubText2_NoInstTypes: "Dewis cydrannau i'w dadosod:",
	UnComponentsSubText2: "Neu, ddewis y cydrannau ychwanegol i'w dadosod:",
	DirText: "Bydd y Rhaglen Osod yn gosod $(^NameDA) yn y ffolder canlynol. I'w osod mewn ffolder gwahanol, cliciwch Pori a dewis ffolder arall. $_CLICK",
	DirSubText: "Ffolder Cyrchfan",
	DirBrowseText: "Dewis y ffolder i osod $(^NameDA) ynddo:",
	UnDirText: "Bydd y Rhegen Osod yn dadosod $(^NameDA) o'r ffolder canlynol. I ddadosod o ffolder gwahanol, cliciwch Pori a dewis ffolder arall. $_CLICK",
	UnDirSubText: "\"\"",
	UnDirBrowseText: "Dewis ffolder i ddadosod $(^NameDA) ohono:",
	SpaceAvailable: "\"Lle ar gael: \"",
	SpaceRequired: "\"Lle angenrheidiol: \"",
	UninstallingText: "Bydd $(^NameDA) yn cael ei ddadosod o'r ffolder canlynol. $_CLICK",
	UninstallingSubText: "Dadosod o:",
	FileError: "Gwall agor ffeil i'w hysgrifennu: \\r\\n\\r\\n$0\\r\\n\\r\\nCliciwch Atal i atal y gosod,\\r\\nEto i geisio eto, neu\\r\\nAnwybyddu i hepgor y ffeil.",
	FileError_NoIgnore: "Gwall agor ffeil i'w hysgrifennu: \\r\\n\\r\\n$0\\r\\n\\r\\nCliciwch Eto i geisio eto, neu\\r\\nDiddymu i atal y gosod.",
	CantWrite: "\"Methu ysgrifennu: \"",
	CopyFailed: "Methu Copïo",
	CopyTo: "\"Copïo i \"",
	Registering: "\"Cofrestru: \"",
	Unregistering: "\"Dadgofrestru: \"",
	SymbolNotFound: "\"Methu canfod symbol: \"",
	CouldNotLoad: "\"Methu llwytho: \"",
	CreateFolder: "\"Creu ffolder: \"",
	CreateShortcut: "\"Creu llwybr byr: \"",
	CreatedUninstaller: "\"Creu dadosodwr: \"",
	Delete: "\"Dileu ffeil: \"",
	DeleteOnReboot: "\"Dileu wrth ailgychwyn: \"",
	ErrorCreatingShortcut: "\"Gwall wrth greu llwybr byr: \"",
	ErrorCreating: "\"Gwall wrth greu: \"",
	ErrorDecompressing: "Gwall wrth ddatgywasgu data! Gosodwr llwgr?",
	ErrorRegistering: "Gwall cofrestru DLL",
	ExecShell: "\"ExecShell: \"",
	Exec: "\"Gweithredu: \"",
	Extract: "\"Echdynnu: \"",
	ErrorWriting: "\"Echdynnu: gwall ysgrifennu i ffeil \"",
	InvalidOpcode: "Gosodwr llwgr: opcode annilys",
	NoOLE: "\"Dim OLE ar gyfer: \"",
	OutputFolder: "\"Ffolder allbwn: \"",
	RemoveFolder: "\"Tynnu ffolder: \"",
	RenameOnReboot: "\"Ailenwi wrth ailgychwyn: \"",
	Rename: "\"Ailenwi: \"",
	Skipped: "\"Hepgor: \"",
	CopyDetails: "Copïo Manylion i'r Clipfwrdd",
	LogInstall: "Cofnodi'r brosed gosod",
	Byte: "B",
	Kilo: " K",
	Mega: " M",
	Giga: " G"
};
var Welsh$1 = {
	header: header$12,
	id: id$12,
	font: font$12,
	code_page: code_page$12,
	rtl: rtl$12,
	strings: strings$12
};

var languageData = createCommonjsModule(function (module) {
/**
 * Language Meta Data
 */


module.exports.meta = meta;

/**
 * Language Data
 */




































































const languages = {
  Afrikaans: Afrikaans$1,
  Albanian: Albanian$1,
  Arabic: Arabic$1,
  Armenian: Armenian$1,
  Asturian: Asturian$1,
  Basque: Basque$1,
  Belarusian: Belarusian$1,
  Bosnian: Bosnian$1,
  Breton: Breton$1,
  Bulgarian: Bulgarian$1,
  Catalan: Catalan$1,
  Corsican: Corsican$1,
  Croatian: Croatian$1,
  Czech: Czech$1,
  Danish: Danish$1,
  Dutch: Dutch$1,
  English: English$1,
  Esperanto: Esperanto$1,
  Estonian: Estonian$1,
  Farsi: Farsi$1,
  Finnish: Finnish$1,
  French: French$1,
  Galician: Galician$1,
  Georgian: Georgian$1,
  German: German$1,
  Greek: Greek$1,
  Hebrew: Hebrew$1,
  Hindi: Hindi$1,
  Hungarian: Hungarian$1,
  Icelandic: Icelandic$1,
  Indonesian: Indonesian$1,
  Irish: Irish$1,
  Italian: Italian$1,
  Japanese: Japanese$1,
  Korean: Korean$1,
  Kurdish: Kurdish$1,
  Latvian: Latvian$1,
  Lithuanian: Lithuanian$1,
  Luxembourgish: Luxembourgish$1,
  Macedonian: Macedonian$1,
  Malay: Malay$1,
  Mongolian: Mongolian$1,
  Norwegian: Norwegian$1,
  NorwegianNynorsk: NorwegianNynorsk$1,
  Pashto: Pashto$1,
  Polish: Polish$1,
  Portuguese: Portuguese$1,
  PortugueseBR: PortugueseBR$1,
  Romanian: Romanian$1,
  Russian: Russian$1,
  ScotsGaelic: ScotsGaelic$1,
  Serbian: Serbian$1,
  SerbianLatin: SerbianLatin$1,
  SimpChinese: SimpChinese$1,
  Slovak: Slovak$1,
  Slovenian: Slovenian$1,
  Spanish: Spanish$1,
  SpanishInternational: SpanishInternational$1,
  Swedish: Swedish$1,
  Tatar: Tatar$1,
  Thai: Thai$1,
  TradChinese: TradChinese$1,
  Turkish: Turkish$1,
  Ukrainian: Ukrainian$1,
  Uzbek: Uzbek$1,
  Vietnamese: Vietnamese$1,
  Welsh: Welsh$1
};

module.exports.languages;

module.exports = {
  languages,
  meta
};

/**
 * Shortcuts
 */
module.exports.Afrikaans = Afrikaans$1;
module.exports.Albanian = Albanian$1;
module.exports.Arabic = Arabic$1;
module.exports.Armenian = Armenian$1;
module.exports.Asturian = Asturian$1;
module.exports.Basque = Basque$1;
module.exports.Belarusian = Belarusian$1;
module.exports.Bosnian = Bosnian$1;
module.exports.Breton = Breton$1;
module.exports.Bulgarian = Bulgarian$1;
module.exports.Catalan = Catalan$1;
module.exports.Corsican = Corsican$1;
module.exports.Croatian = Croatian$1;
module.exports.Czech = Czech$1;
module.exports.Danish = Danish$1;
module.exports.Dutch = Dutch$1;
module.exports.English = English$1;
module.exports.Esperanto = Esperanto$1;
module.exports.Estonian = Estonian$1;
module.exports.Farsi = Farsi$1;
module.exports.Finnish = Finnish$1;
module.exports.French = French$1;
module.exports.Galician = Galician$1;
module.exports.Georgian = Georgian$1;
module.exports.German = German$1;
module.exports.Greek = Greek$1;
module.exports.Hebrew = Hebrew$1;
module.exports.Hindi = Hindi$1;
module.exports.Hungarian = Hungarian$1;
module.exports.Icelandic = Icelandic$1;
module.exports.Indonesian = Indonesian$1;
module.exports.Irish = Irish$1;
module.exports.Italian = Italian$1;
module.exports.Japanese = Japanese$1;
module.exports.Korean = Korean$1;
module.exports.Kurdish = Kurdish$1;
module.exports.Latvian = Latvian$1;
module.exports.Lithuanian = Lithuanian$1;
module.exports.Luxembourgish = Luxembourgish$1;
module.exports.Macedonian = Macedonian$1;
module.exports.Malay = Malay$1;
module.exports.Mongolian = Mongolian$1;
module.exports.Norwegian = Norwegian$1;
module.exports.NorwegianNynorsk = NorwegianNynorsk$1;
module.exports.Pashto = Pashto$1;
module.exports.Polish = Polish$1;
module.exports.Portuguese = Portuguese$1;
module.exports.PortugueseBR = PortugueseBR$1;
module.exports.Romanian = Romanian$1;
module.exports.Russian = Russian$1;
module.exports.ScotsGaelic = ScotsGaelic$1;
module.exports.Serbian = Serbian$1;
module.exports.SerbianLatin = SerbianLatin$1;
module.exports.SimpChinese = SimpChinese$1;
module.exports.Slovak = Slovak$1;
module.exports.Slovenian = Slovenian$1;
module.exports.Spanish = Spanish$1;
module.exports.SpanishInternational = SpanishInternational$1;
module.exports.Swedish = Swedish$1;
module.exports.Tatar = Tatar$1;
module.exports.Thai = Thai$1;
module.exports.TradChinese = TradChinese$1;
module.exports.Turkish = Turkish$1;
module.exports.Ukrainian = Ukrainian$1;
module.exports.Uzbek = Uzbek$1;
module.exports.Vietnamese = Vietnamese$1;
module.exports.Welsh = Welsh$1;
});

var codePages = [];
Object.keys(languageData.meta).forEach(function (key) {
    var codePage = languageData.meta[key].code_page;
    if (!isNaN(codePage) && !codePages.includes("CP" + codePage)) {
        codePages.push("CP" + codePage);
    }
});
var input = __spreadArrays([
    'ACP'
], codePages, [
    'OEM',
    'UTF8',
    'UTF16BE',
    'UTF16LE'
]);
var output = __spreadArrays([
    'ACP'
], codePages, [
    'OEM',
    'UTF16BE',
    'UTF16BEBOM',
    'UTF16LE',
    'UTF16LEBOM',
    'UTF8',
    'UTF8SIG'
]);

function splitCommands(data) {
    var args = [];
    if (typeof data !== 'undefined') {
        if (typeof data === 'string') {
            if (data.trim().includes('\n')) {
                var lines = data.trim().split('\n');
                lines.map(function (line) {
                    if (line.trim().length) {
                        args.push("-X" + line);
                    }
                });
            }
            else {
                args.push("-X" + data);
            }
        }
        else {
            data.map(function (key) {
                if (key.trim().length) {
                    args.push("-X" + key);
                }
            });
        }
    }
    return args;
}
function mapArguments(args, options) {
    var pathToMakensis = (typeof options.pathToMakensis !== 'undefined' && options.pathToMakensis !== '') ? options.pathToMakensis : 'makensis';
    var cmd;
    if (os__default['default'].platform() !== 'win32' && options.wine === true) {
        cmd = 'wine';
        args.unshift(pathToMakensis);
    }
    else {
        cmd = pathToMakensis;
    }
    // return unless compile command
    if (args.length > 1 || args.includes('-CMDHELP')) {
        return [cmd, args, { json: options.json, wine: options.wine }];
    }
    if (typeof options.define !== 'undefined') {
        Object.keys(options.define).forEach(function (key) {
            args.push("-D" + key + "=" + options.define[key]);
        });
    }
    var preExecuteArgs = splitCommands(options.preExecute);
    if (preExecuteArgs.length) {
        args.push.apply(args, preExecuteArgs);
    }
    if (options.noCD === true) {
        args.push('-NOCD');
    }
    if (options.noConfig === true) {
        args.push('-NOCONFIG');
    }
    if (options.pause === true) {
        args.push('-PAUSE');
    }
    if (options.strict === true) {
        args.push('-WX');
    }
    if (typeof options.inputCharset !== 'undefined' && input.includes(options.inputCharset)) {
        args.push('-INPUTCHARSET', options.inputCharset);
    }
    if (os__default['default'].platform() === 'win32') {
        if (typeof options.outputCharset !== 'undefined' && output.includes(options.outputCharset)) {
            args.push('-OUTPUTCHARSET', options.outputCharset);
        }
    }
    if (options.ppo === true) {
        args.push('-PPO');
    }
    if (options.safePPO === true) {
        args.push('-SAFEPPO');
    }
    if (os__default['default'].platform() === 'win32' && Number.isInteger(options.priority) && options.priority >= 0 && options.priority <= 5) {
        args.push("-P" + options.priority);
    }
    if (Number.isInteger(options.verbose) && options.verbose >= 0 && options.verbose <= 4) {
        args.push("-V" + options.verbose);
    }
    return [cmd, args, { json: options.json, wine: options.wine }];
}
function stringify(data) {
    return data
        ? data.toString().trim()
        : '';
}
function isInteger(x) {
    return x % 2 === 0;
}
function hasWarnings(line) {
    var match = line.match(/(\d+) warnings?:/);
    if (match !== null) {
        return parseInt(match[1]);
    }
    return 0;
}
function formatOutput(stream, args, opts) {
    var _a;
    if (args.includes('-CMDHELP') && !stream.stdout.trim() && stream.stderr) {
        // CMDHELP writes to stderr by default, let's fix this
        _a = [stream.stderr, ''], stream.stdout = _a[0], stream.stderr = _a[1];
    }
    if (opts.json === true) {
        if (args.includes('-CMDHELP')) {
            var minLength = (opts.wine === true) ? 2 : 1;
            if (args.length === minLength) {
                stream.stdout = objectifyHelp(stream.stdout, opts);
            }
            else {
                stream.stdout = objectify(stream.stdout, 'help');
            }
        }
        else if (args.includes('-HDRINFO')) {
            stream.stdout = objectifyFlags(stream.stdout, opts);
        }
        else if (args.includes('-LICENSE')) {
            stream.stdout = objectify(stream.stdout, 'license');
        }
        else if (args.includes('-VERSION')) {
            stream.stdout = objectify(stream.stdout, 'version');
        }
    }
    return stream;
}
function objectify(input, key) {
    if (key === void 0) { key = null; }
    var output = {};
    if (key === 'version' && input.startsWith('v')) {
        input = input.substr(1);
    }
    if (key === null) {
        output = input;
    }
    else {
        output[key] = input;
    }
    return output;
}
function objectifyHelp(input, opts) {
    var lines = splitLines(input, opts);
    lines.sort();
    var output = {};
    lines.forEach(function (line) {
        var command = line.substr(0, line.indexOf(' '));
        var usage = line.substr(line.indexOf(' ') + 1);
        // Workaround
        if (['!AddIncludeDir', '!AddPluginDir'].includes(command)) {
            command = command.toLowerCase();
        }
        if (command)
            output[command] = usage;
    });
    return output;
}
function objectifyFlags(input, opts) {
    var lines = splitLines(input, opts);
    var filteredLines = lines.filter(function (line) {
        if (line !== '') {
            return line;
        }
    });
    var output = {};
    var tableSizes = {};
    var tableSymbols = {};
    var symbols;
    // Split sizes
    filteredLines.forEach(function (line) {
        if (line.startsWith('Size of ')) {
            var pair = line.split(' is ');
            pair[0] = pair[0].replace('Size of ', '');
            pair[0] = pair[0].replace(' ', '_');
            pair[1] = pair[1].slice(0, -1);
            tableSizes[pair[0]] = pair[1];
        }
        else if (line.startsWith('Defined symbols: ')) {
            symbols = line.replace('Defined symbols: ', '').split(',');
        }
    });
    output['sizes'] = tableSizes;
    // Split symbols
    symbols.map(function (symbol) {
        var pair = symbol.split('=');
        if (pair.length > 1 && pair[0] !== 'undefined') {
            if (isInteger(pair[1]) === true) {
                pair[1] = parseInt(pair[1], 10);
            }
            tableSymbols[pair[0]] = pair[1];
        }
        else {
            tableSymbols[symbol] = true;
        }
    });
    output['defined_symbols'] = tableSymbols;
    return output;
}
function hasErrorCode(input) {
    if (input.includes('ENOENT') && input.match(/\bENOENT\b/)) {
        return true;
    }
    else if (input.includes('EACCES') && input.match(/\bEACCES\b/)) {
        return true;
    }
    else if (input.includes('EISDIR') && input.match(/\bEISDIR\b/)) {
        return true;
    }
    else if (input.includes('EMFILE') && input.match(/\bEMFILE\b/)) {
        return true;
    }
    return false;
}
function splitLines(input, opts) {
    var lineBreak = (os__default['default'].platform() === 'win32' || opts.wine === true) ? '\r\n' : '\n';
    var output = input.split(lineBreak);
    return output;
}
function detectOutfile(str) {
    if (str.includes('Output: "')) {
        var regex = /Output: "(.*\.exe)"\r?\n/g;
        var result = regex.exec(str.toString());
        if (typeof result === 'object') {
            try {
                return result['1'];
            }
            catch (e) {
                return '';
            }
        }
    }
    return '';
}
function spawnMakensis(cmd, args, opts, spawnOpts) {
    if (spawnOpts === void 0) { spawnOpts = {}; }
    return new Promise(function (resolve, reject) {
        var stream = {
            stdout: '',
            stderr: ''
        };
        var warnings = 0;
        var outFile = '';
        var child = child_process__default['default'].spawn(cmd, args, spawnOpts);
        child.stdout.on('data', function (line) {
            line = stringify(line);
            warnings += hasWarnings(line);
            if (outFile === '') {
                outFile = detectOutfile(line);
            }
            stream.stdout += line;
        });
        child.stderr.on('data', function (line) {
            stream.stderr += stringify(line);
        });
        child.on('error', function (errorMessage) {
            console.error(errorMessage);
        });
        child.on('close', function (code) {
            stream = formatOutput(stream, args, opts);
            var output = {
                'status': code,
                'stdout': stream.stdout,
                'stderr': stream.stderr,
                'warnings': warnings
            };
            if (outFile.length) {
                output['outfile'] = outFile;
            }
            if (code === 0 || (code !== 0 && !hasErrorCode(stream.stderr))) {
                // Promise also resolves on MakeNSIS errors
                resolve(output);
            }
            else {
                reject(output.stderr);
            }
        });
    });
}
function spawnMakensisSync(cmd, args, opts, spawnOpts) {
    if (spawnOpts === void 0) { spawnOpts = {}; }
    var child = child_process__default['default'].spawnSync(cmd, args, spawnOpts);
    child.stdout = stringify(child.stdout);
    child.stderr = stringify(child.stderr);
    var warnings = hasWarnings(child.stdout);
    var outFile = detectOutfile(child.stdout);
    child = formatOutput(child, args, opts);
    var output = {
        'status': child.status,
        'stdout': child.stdout,
        'stderr': child.stderr,
        'warnings': warnings
    };
    if (outFile.length) {
        output['outfile'] = outFile;
    }
    return output;
}

/**
 * Returns usage information for a command, or list all commands
 * @param command - an NSIS command
 * @param options - compiler options
 * @returns - usage description
 */
function cmdHelp(command, options, spawnOpts) {
    if (command === void 0) { command = ''; }
    if (options === void 0) { options = {}; }
    if (spawnOpts === void 0) { spawnOpts = {}; }
    options = __assign(__assign({}, options), { verbose: 0 });
    var _a = mapArguments(['-CMDHELP'], options), cmd = _a[0], args = _a[1], opts = _a[2];
    if (typeof command !== 'undefined' && typeof command !== 'object' && command !== '') {
        args.push(command);
    }
    return spawnMakensis(cmd, args, opts, spawnOpts);
}
/**
 * Returns usage information for a command, or list all commands
 * @param command - an NSIS command
 * @param options - compiler options
 * @returns - usage description
 */
function cmdHelpSync(command, options, spawnOpts) {
    if (command === void 0) { command = ''; }
    if (options === void 0) { options = {}; }
    if (spawnOpts === void 0) { spawnOpts = {}; }
    options = __assign(__assign({}, options), { verbose: 0 });
    var _a = mapArguments(['-CMDHELP'], options), cmd = _a[0], args = _a[1], opts = _a[2];
    if (typeof command !== 'undefined' && typeof command !== 'object' && command !== '') {
        args.push(command);
    }
    return spawnMakensisSync(cmd, args, opts, spawnOpts);
}
/**
 * Returns information about which options were used to compile MakeNSIS
 * @param options - compiler options
 * @returns - compiler options
 */
function hdrInfo(options, spawnOpts) {
    if (options === void 0) { options = {}; }
    if (spawnOpts === void 0) { spawnOpts = {}; }
    options = __assign(__assign({}, options), { verbose: 0 });
    var _a = mapArguments(['-HDRINFO'], options), cmd = _a[0], args = _a[1], opts = _a[2];
    return spawnMakensis(cmd, args, opts, spawnOpts);
}
/**
 * Returns information about which options were used to compile MakeNSIS
 * @returns - compiler options
 */
function hdrInfoSync(options, spawnOpts) {
    if (options === void 0) { options = {}; }
    if (spawnOpts === void 0) { spawnOpts = {}; }
    options = __assign(__assign({}, options), { verbose: 0 });
    var _a = mapArguments(['-HDRINFO'], options), cmd = _a[0], args = _a[1], opts = _a[2];
    return spawnMakensisSync(cmd, args, opts, spawnOpts);
}
/**
 * Compile specified script with MakeNSIS
 * @param script - path to NSIS script
 * @param options - compiler options
 */
function compile(script, options, spawnOpts) {
    if (options === void 0) { options = {}; }
    if (spawnOpts === void 0) { spawnOpts = {}; }
    var _a = mapArguments([], options), cmd = _a[0], args = _a[1], opts = _a[2];
    if (script) {
        if (cmd === 'wine') {
            args.push('--');
        }
        args.push(script);
    }
    var postExecuteArgs = splitCommands(options.postExecute);
    if (postExecuteArgs.length) {
        args.push.apply(args, postExecuteArgs);
    }
    return spawnMakensis(cmd, args, opts, spawnOpts);
}
/**
 * Compile specified script with MakeNSIS
 * @param script - path to NSIS script
 * @param options - compiler options
 */
function compileSync(script, options, spawnOpts) {
    if (options === void 0) { options = {}; }
    if (spawnOpts === void 0) { spawnOpts = {}; }
    var _a = mapArguments([], options), cmd = _a[0], args = _a[1], opts = _a[2];
    if (script) {
        if (cmd === 'wine') {
            args.push('--');
        }
        args.push(script);
    }
    if (typeof options.postExecute !== 'undefined') {
        if (typeof options.postExecute === 'string') {
            args.push("-X" + options.postExecute);
        }
        else {
            options.postExecute.forEach(function (key) {
                args.push("-X" + key);
            });
        }
    }
    return spawnMakensisSync(cmd, args, opts, spawnOpts);
}
/**
 * Returns version of MakeNSIS
 * @param options - compiler options
 * @returns - compiler version
 */
function version(options, spawnOpts) {
    if (options === void 0) { options = {}; }
    if (spawnOpts === void 0) { spawnOpts = {}; }
    options = __assign(__assign({}, options), { verbose: 0 });
    var _a = mapArguments(['-VERSION'], options), cmd = _a[0], args = _a[1], opts = _a[2];
    return spawnMakensis(cmd, args, opts, spawnOpts);
}
/**
 * Returns version of MakeNSIS
 * @param options - compiler options
 * @returns - compiler version
 */
function versionSync(options, spawnOpts) {
    if (options === void 0) { options = {}; }
    if (spawnOpts === void 0) { spawnOpts = {}; }
    options = __assign(__assign({}, options), { verbose: 0 });
    var _a = mapArguments(['-VERSION'], options), cmd = _a[0], args = _a[1], opts = _a[2];
    return spawnMakensisSync(cmd, args, opts, spawnOpts);
}
/**
 * Returns MakeNSIS software license
 * @param options - compiler options
 * @returns - compiler license
 */
function license(options, spawnOpts) {
    if (options === void 0) { options = {}; }
    if (spawnOpts === void 0) { spawnOpts = {}; }
    var _a = mapArguments(['-LICENSE'], options), cmd = _a[0], args = _a[1], opts = _a[2];
    return spawnMakensis(cmd, args, opts, spawnOpts);
}
/**
 * Returns MakeNSIS software license
 * @param options - compiler options
 * @returns - compiler license
 */
function licenseSync(options, spawnOpts) {
    if (options === void 0) { options = {}; }
    if (spawnOpts === void 0) { spawnOpts = {}; }
    var _a = mapArguments(['-LICENSE'], options), cmd = _a[0], args = _a[1], opts = _a[2];
    return spawnMakensisSync(cmd, args, opts, spawnOpts);
}
/**
 * Returns directory where NSIS is installed to
 * @param options - compiler options
 * @returns - NSIS directory
 */
function nsisDir(options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        function handler(hdrinfo) {
            if (options.json === true) {
                return objectify(hdrinfo.stdout.defined_symbols.NSISDIR, 'nsisdir');
            }
            return hdrinfo.stdout.defined_symbols.NSISDIR;
        }
        var hdrOptions, hdrinfo, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    hdrOptions = __assign(__assign({}, options), { json: true });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, hdrInfo(hdrOptions)];
                case 2:
                    hdrinfo = _a.sent();
                    return [2 /*return*/, handler(hdrinfo)];
                case 3:
                    error_1 = _a.sent();
                    // NSIS < 3.03
                    return [2 /*return*/, handler(error_1)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
/**
 * Returns NSIS directory
 * @param options - compiler options
 * @returns - compiler version
 */
function nsisDirSync(options) {
    if (options === void 0) { options = {}; }
    var hdrOptions = __assign(__assign({}, options), { json: true });
    var hdrinfo = hdrInfoSync(hdrOptions);
    if (options.json === true) {
        return objectify(hdrinfo.stdout.defined_symbols.NSISDIR, 'nsisdir');
    }
    return hdrinfo.stdout.defined_symbols.NSISDIR;
}

exports.cmdHelp = cmdHelp;
exports.cmdHelpSync = cmdHelpSync;
exports.compile = compile;
exports.compileSync = compileSync;
exports.hdrInfo = hdrInfo;
exports.hdrInfoSync = hdrInfoSync;
exports.license = license;
exports.licenseSync = licenseSync;
exports.nsisDir = nsisDir;
exports.nsisDirSync = nsisDirSync;
exports.version = version;
exports.versionSync = versionSync;
});

var packageName = 'linter-makensis';
var configSchema = {
    pathToMakensis: {
        title: 'Path to MakeNSIS',
        description: 'Specify the full path to `makensis`',
        type: 'string',
        "default": 'makensis',
        order: 1
    },
    preprocessMode: {
        title: "Pre-process Mode",
        description: "Linter runs in the much faster pre-process mode, but ignores warning (unless in strict mode)",
        type: "string",
        "default": "Safe PPO",
        "enum": ["(none)", "PPO", "Safe PPO"],
        order: 2
    },
    strictMode: {
        title: 'Strict Mode',
        description: 'Treats warnings as errors, requires NSIS v3.0 (or higher)',
        type: 'boolean',
        "default": false,
        order: 3
    },
    manageDependencies: {
        title: 'Manage Dependencies',
        description: 'When enabled, third-party dependencies will be installed automatically',
        type: 'boolean',
        "default": true,
        order: 4
    },
    advanced: {
        title: 'Advanced Settings',
        type: 'object',
        order: 5,
        properties: {
            preExecute: {
                title: 'Prepend code',
                description: 'Comma-separated list of commands to be prepended to your script',
                type: 'array',
                items: {
                    type: 'string'
                },
                "default": [],
                order: 1
            },
            postExecute: {
                title: 'Append code',
                description: 'Comma-separated list of commands to be appended to your script',
                type: 'array',
                items: {
                    type: 'string'
                },
                "default": [],
                order: 2
            },
            useWine: {
                title: 'Use Wine',
                description: 'When on a non-Windows platform, you can compile installers using [Wine](https://www.winehq.org/). Make sure to set up `pathToMakensis` accordingly or add `makensis` to the Wine\'s PATH environmental variable.',
                type: 'boolean',
                "default": false,
                order: 3
            },
            muteANSIDeprecationWarning: {
                title: 'Mute Deprecation Warning',
                description: 'Mutes ANSI deprecation warning introduced in NSIS v3.05',
                type: 'boolean',
                "default": false,
                order: 4
            },
            clearConsole: {
                title: "Clear Console",
                description: "Clears the console prior to linting. Only works when in developer mode.",
                type: "boolean",
                "default": false,
                order: 5
            }
        }
    }
};

var lib = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });






function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var os__default$1 = /*#__PURE__*/_interopDefaultLegacy(os__default['default']);
var fs__default$1 = /*#__PURE__*/_interopDefaultLegacy(fs__default['default']);
var path__default = /*#__PURE__*/_interopDefaultLegacy(_path__default['default']);

var indentString = (string, count = 1, options) => {
	options = {
		indent: ' ',
		includeEmptyLines: false,
		...options
	};

	if (typeof string !== 'string') {
		throw new TypeError(
			`Expected \`input\` to be a \`string\`, got \`${typeof string}\``
		);
	}

	if (typeof count !== 'number') {
		throw new TypeError(
			`Expected \`count\` to be a \`number\`, got \`${typeof count}\``
		);
	}

	if (typeof options.indent !== 'string') {
		throw new TypeError(
			`Expected \`options.indent\` to be a \`string\`, got \`${typeof options.indent}\``
		);
	}

	if (count === 0) {
		return string;
	}

	const regex = options.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;

	return string.replace(regex, options.indent.repeat(count));
};

const extractPathRegex = /\s+at.*(?:\(|\s)(.*)\)?/;
const pathRegex = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/;
const homeDir = typeof os__default$1['default'].homedir === 'undefined' ? '' : os__default$1['default'].homedir();

var cleanStack = (stack, options) => {
	options = Object.assign({pretty: false}, options);

	return stack.replace(/\\/g, '/')
		.split('\n')
		.filter(line => {
			const pathMatches = line.match(extractPathRegex);
			if (pathMatches === null || !pathMatches[1]) {
				return true;
			}

			const match = pathMatches[1];

			// Electron
			if (
				match.includes('.app/Contents/Resources/electron.asar') ||
				match.includes('.app/Contents/Resources/default_app.asar')
			) {
				return false;
			}

			return !pathRegex.test(match);
		})
		.filter(line => line.trim() !== '')
		.map(line => {
			if (options.pretty) {
				return line.replace(extractPathRegex, (m, p1) => m.replace(p1, p1.replace(homeDir, '~')));
			}

			return line;
		})
		.join('\n');
};

const cleanInternalStack = stack => stack.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g, '');

class AggregateError extends Error {
	constructor(errors) {
		if (!Array.isArray(errors)) {
			throw new TypeError(`Expected input to be an Array, got ${typeof errors}`);
		}

		errors = [...errors].map(error => {
			if (error instanceof Error) {
				return error;
			}

			if (error !== null && typeof error === 'object') {
				// Handle plain error objects with message property and/or possibly other metadata
				return Object.assign(new Error(error.message), error);
			}

			return new Error(error);
		});

		let message = errors
			.map(error => {
				// The `stack` property is not standardized, so we can't assume it exists
				return typeof error.stack === 'string' ? cleanInternalStack(cleanStack(error.stack)) : String(error);
			})
			.join('\n');
		message = '\n' + indentString(message, 4);
		super(message);

		this.name = 'AggregateError';

		Object.defineProperty(this, '_errors', {value: errors});
	}

	* [Symbol.iterator]() {
		for (const error of this._errors) {
			yield error;
		}
	}
}

var aggregateError = AggregateError;

var pMap = async (
	iterable,
	mapper,
	{
		concurrency = Infinity,
		stopOnError = true
	} = {}
) => {
	return new Promise((resolve, reject) => {
		if (typeof mapper !== 'function') {
			throw new TypeError('Mapper function is required');
		}

		if (!((Number.isSafeInteger(concurrency) || concurrency === Infinity) && concurrency >= 1)) {
			throw new TypeError(`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${concurrency}\` (${typeof concurrency})`);
		}

		const result = [];
		const errors = [];
		const iterator = iterable[Symbol.iterator]();
		let isRejected = false;
		let isIterableDone = false;
		let resolvingCount = 0;
		let currentIndex = 0;

		const next = () => {
			if (isRejected) {
				return;
			}

			const nextItem = iterator.next();
			const index = currentIndex;
			currentIndex++;

			if (nextItem.done) {
				isIterableDone = true;

				if (resolvingCount === 0) {
					if (!stopOnError && errors.length !== 0) {
						reject(new aggregateError(errors));
					} else {
						resolve(result);
					}
				}

				return;
			}

			resolvingCount++;

			(async () => {
				try {
					const element = await nextItem.value;
					result[index] = await mapper(element, index);
					resolvingCount--;
					next();
				} catch (error) {
					if (stopOnError) {
						isRejected = true;
						reject(error);
					} else {
						errors.push(error);
						resolvingCount--;
						next();
					}
				}
			})();
		};

		for (let i = 0; i < concurrency; i++) {
			next();

			if (isIterableDone) {
				break;
			}
		}
	});
};

const pMap$1 = (iterable, mapper, options) => new Promise((resolve, reject) => {
	options = Object.assign({
		concurrency: Infinity
	}, options);

	if (typeof mapper !== 'function') {
		throw new TypeError('Mapper function is required');
	}

	const {concurrency} = options;

	if (!(typeof concurrency === 'number' && concurrency >= 1)) {
		throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${concurrency}\` (${typeof concurrency})`);
	}

	const ret = [];
	const iterator = iterable[Symbol.iterator]();
	let isRejected = false;
	let isIterableDone = false;
	let resolvingCount = 0;
	let currentIndex = 0;

	const next = () => {
		if (isRejected) {
			return;
		}

		const nextItem = iterator.next();
		const i = currentIndex;
		currentIndex++;

		if (nextItem.done) {
			isIterableDone = true;

			if (resolvingCount === 0) {
				resolve(ret);
			}

			return;
		}

		resolvingCount++;

		Promise.resolve(nextItem.value)
			.then(element => mapper(element, i))
			.then(
				value => {
					ret[i] = value;
					resolvingCount--;
					next();
				},
				error => {
					isRejected = true;
					reject(error);
				}
			);
	};

	for (let i = 0; i < concurrency; i++) {
		next();

		if (isIterableDone) {
			break;
		}
	}
});

var pMap_1 = pMap$1;
// TODO: Remove this for the next major release
var _default = pMap$1;
pMap_1.default = _default;

const pFilter = async (iterable, filterer, options) => {
	const values = await pMap_1(
		iterable,
		(element, index) => Promise.all([filterer(element, index), element]),
		options
	);
	return values.filter(value => Boolean(value[0])).map(value => value[1]);
};

var pFilter_1 = pFilter;
// TODO: Remove this for the next major release
var _default$1 = pFilter;
pFilter_1.default = _default$1;

const IS_ATOM = typeof atom !== 'undefined';
const IS_DEV = typeof atom !== 'undefined' && (atom.inDevMode() || atom.inSpecMode());
const IGNORED_CONFIG_NAME = 'atom-package-deps.ignored';

/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */

/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Module exports.
 * @public
 */

var escapeHtml_1 = escapeHtml;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;';
        break;
      case 38: // &
        escape = '&amp;';
        break;
      case 39: // '
        escape = '&#39;';
        break;
      case 60: // <
        escape = '&lt;';
        break;
      case 62: // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index
    ? html + str.substring(lastIndex, index)
    : html;
}

async function spawnInternal(command, args, options) {
    const spawnedProcess = child_process__default['default'].spawn(command, args, options);
    const promise = new Promise((resolve, reject) => {
        const output = {
            stdout: spawnedProcess.stdout ? [] : null,
            stderr: spawnedProcess.stderr ? [] : null,
        };
        spawnedProcess.on('error', reject);
        if (spawnedProcess.stdout) {
            spawnedProcess.stdout.on('data', function (chunk) {
                output.stdout.push(chunk);
                if (options.handleStdout) {
                    options.handleStdout(chunk);
                }
            });
        }
        if (spawnedProcess.stderr) {
            spawnedProcess.stderr.on('data', function (chunk) {
                output.stderr.push(chunk);
                if (options.handleStderr) {
                    options.handleStderr(chunk);
                }
            });
        }
        spawnedProcess.on('close', code => {
            let outputStdout = null;
            if (output.stdout != null) {
                outputStdout =
                    options.encoding === null || options.encoding === 'buffer'
                        ? Buffer.concat(output.stdout)
                        : output.stdout.join('');
            }
            let outputStderr = null;
            if (output.stderr != null) {
                outputStderr =
                    options.encoding === null || options.encoding === 'buffer'
                        ? Buffer.concat(output.stderr)
                        : output.stderr.join('');
            }
            resolve({
                exitCode: code,
                stdout: outputStdout,
                stderr: outputStderr,
            });
        });
    });
    options.handleChildProcess(spawnedProcess);
    return promise;
}
function spawn(command, args, options) {
    let spawnedProcess;
    const promise = spawnInternal(command, args, {
        ...options,
        handleChildProcess(_spawnedProcess) {
            spawnedProcess = _spawnedProcess;
        },
    });
    promise.kill = function (signal) {
        // TODO: kill all subprocesses on windows with wmic?
        return spawnedProcess.kill(signal);
    };
    return promise;
}

var semverCompare = function cmp (a, b) {
    var pa = a.split('.');
    var pb = b.split('.');
    for (var i = 0; i < 3; i++) {
        var na = Number(pa[i]);
        var nb = Number(pb[i]);
        if (na > nb) return 1;
        if (nb > na) return -1;
        if (!isNaN(na) && isNaN(nb)) return 1;
        if (isNaN(na) && !isNaN(nb)) return -1;
    }
    return 0;
};

async function getDependencies(packageName) {
  const packageModule = atom.packages.getLoadedPackage(packageName);
  const packageDependencies = packageModule && packageModule.metadata['package-deps'];
  return Array.isArray(packageDependencies) ? packageDependencies : [];
}
async function resolveDependencyPath(packageName) {
  return atom.packages.resolvePackagePath(packageName);
}
async function getInstalledDependencyVersion(dependency) {
  var _packageModule$metada;

  const packageModule = atom.packages.getLoadedPackage(dependency.name);
  return packageModule == null ? null : (_packageModule$metada = packageModule.metadata.version) !== null && _packageModule$metada !== void 0 ? _packageModule$metada : null;
}

async function getDependencies$1(packageName) {
  let packageStats = null;

  try {
    packageStats = await fs__default$1['default'].promises.stat(packageName);
  } catch (_) {// No Op
  }

  if (packageStats == null || !packageStats.isDirectory()) {
    throw new Error(`[Package-Deps] Expected packageName to be a readable directory in Node.js invocation`);
  }

  let parsed = null;

  try {
    const contents = await fs__default$1['default'].promises.readFile(path__default['default'].join(packageName, 'package.json'), 'utf8');
    parsed = JSON.parse(contents);
  } catch (_) {// Ignore JSON read errors and such
  }

  const packageDependencies = parsed == null || typeof parsed !== 'object' ? [] : parsed['package-deps'];
  return Array.isArray(packageDependencies) ? packageDependencies : [];
}
async function resolveDependencyPath$1(packageName) {
  var _process$env$ATOM_HOM;

  const packageDirectory = path__default['default'].join((_process$env$ATOM_HOM = process.env.ATOM_HOME) !== null && _process$env$ATOM_HOM !== void 0 ? _process$env$ATOM_HOM : path__default['default'].join(os__default$1['default'].homedir(), '.atom'), 'packages', packageName);

  try {
    await fs__default$1['default'].promises.access(packageDirectory, fs__default$1['default'].constants.R_OK);
    return packageDirectory;
  } catch (_) {
    return null;
  }
}
async function getInstalledDependencyVersion$1(dependency) {
  var _manifest$version, _manifest;

  const {
    directory
  } = dependency;

  if (directory == null) {
    // Not possible to get version without resolved directory in Node.js version
    return null;
  }

  let manifest = null;

  try {
    manifest = JSON.parse(await fs__default$1['default'].promises.readFile(path__default['default'].join(directory, 'package.json'), 'utf8'));
  } catch (_) {
    return null;
  }

  return (_manifest$version = (_manifest = manifest) === null || _manifest === void 0 ? void 0 : _manifest.version) !== null && _manifest$version !== void 0 ? _manifest$version : null;
}

/**
 * Internal helpers
 */

async function getInstalledDependencyVersion$2(dependency) {
  if (IS_ATOM) {
    const atomPackageVersion = await getInstalledDependencyVersion(dependency);

    if (atomPackageVersion) {
      return atomPackageVersion;
    } // If the package isn't activated, it won't be loaded, so fallback to reading manifest file instead

  }

  return getInstalledDependencyVersion$1(dependency);
}
/**
 * Exported helpers
 */


const resolveDependencyPath$2 = IS_ATOM ? resolveDependencyPath : resolveDependencyPath$1;
function invariant(condition, message) {
  if (!condition) {
    throw new Error(message !== null && message !== void 0 ? message : 'Invariant violation');
  }
}
async function getDependencies$2(name) {
  const dependencies = await (IS_ATOM ? getDependencies(name) : getDependencies$1(name));

  if (IS_DEV) {
    invariant(Array.isArray(dependencies), `Dependencies for ${name} are not a valid array`);
    dependencies.forEach((item, index) => {
      if (Array.isArray(item)) {
        item.forEach((subitem, subindex) => {
          const invalidMessage = `Dependency#${index}#${subindex} for ${name} is invalid`;
          invariant(typeof subitem.name === 'string' && subitem.name.length > 0, invalidMessage);
          invariant(subitem.minimumVersion == null || typeof subitem.minimumVersion === 'string' && subitem.minimumVersion.length > 0, invalidMessage);
        });
        invariant(item.length > 0, `Dependency#${index} for ${name} has no group items`);
      } else {
        const invalidMessage = `Dependency#${index} for ${name} is invalid`;
        invariant(typeof item.name === 'string' && item.name.length > 0, invalidMessage);
        invariant(item.minimumVersion == null || typeof item.minimumVersion === 'string' && item.minimumVersion.length > 0, invalidMessage);
      }
    });
  }

  return dependencies;
}
async function shouldInstallDependency(dependency) {
  if (dependency.directory == null) {
    // Not installed, so install
    return true;
  }

  if (dependency.minimumVersion == null) {
    // Already installed and no version defined, so skip
    return false;
  }

  const version = await getInstalledDependencyVersion$2(dependency);

  if (version == null) {
    // Unable to get current version, so install
    return true;
  }

  return semverCompare(dependency.minimumVersion, version) === 1;
}
function isPackageIgnored(name) {
  var _atom$config$get;

  if (!IS_ATOM) {
    // Never ignored in CLI
    return false;
  }

  const ignoredPackages = (_atom$config$get = atom.config.get(IGNORED_CONFIG_NAME)) !== null && _atom$config$get !== void 0 ? _atom$config$get : [];

  if (ignoredPackages.includes(name)) {
    return true;
  } // If Atom "notifications" package is disabled, treat the whole thing as ignored


  if (atom.packages.isPackageDisabled('notifications')) {
    console.warn(`Enable notifications to install dependencies for ${name}`);
    return true;
  }

  return false;
}
function markPackageAsIgnored(name) {
  var _atom$config$get2;

  if (!IS_ATOM) {
    // No op in CLI
    return;
  }

  const ignoredPackages = new Set((_atom$config$get2 = atom.config.get(IGNORED_CONFIG_NAME)) !== null && _atom$config$get2 !== void 0 ? _atom$config$get2 : []);
  ignoredPackages.add(name);
  atom.config.set(IGNORED_CONFIG_NAME, Array.from(ignoredPackages));
}
const INSTALL_VALID_TICKS = new Set(['✓', 'done']);
const INSTALL_VALIDATION_REGEXP = /(?:Installing|Moving) (.*?) to .* (.*)/; // Example success output: Uninstalling linter-ui-default ✓

async function installPackage(dependency) {
  const apmPath = IS_ATOM ? atom.packages.getApmPath() : 'apm';
  const {
    stdout,
    stderr
  } = await spawn(apmPath, ['install', dependency.name, '--production', '--color', 'false']);
  const match = INSTALL_VALIDATION_REGEXP.exec(stdout.trim());

  if (match != null && INSTALL_VALID_TICKS.has(match[2])) {
    // Installation complete and verified
    return;
  }

  const error = new Error(`Error installing dependency: ${dependency.name}`);
  error.stack = stderr.trim();
  throw error;
}

let showResetInstruction = true;
function confirmPackagesToInstall({
  packageName,
  dependencies
}) {
  return new Promise(resolve => {
    const ungroupedDependencies = dependencies.filter(item => !Array.isArray(item));
    const groupedDependencies = dependencies.filter(item => Array.isArray(item));
    const skipGroups = groupedDependencies.length === 0;
    const detail = skipGroups ? ungroupedDependencies.map(item => item.name).join(', ') : 'Something went wrong. Check your developer console';
    const groupChoices = groupedDependencies.map(item => item[0]);
    const notification = atom.notifications.addInfo(`${packageName} needs to install dependencies`, {
      dismissable: true,
      icon: 'cloud-download',
      detail,
      description: `Install dependenc${dependencies.length === 1 ? 'y' : 'ies'}?`,
      buttons: [{
        text: 'Yes',
        onDidClick: () => {
          if (skipGroups) {
            resolve([]);
          } else {
            resolve(ungroupedDependencies.concat(groupChoices));
          }

          notification.dismiss();
        }
      }, {
        text: 'No Thanks',
        onDidClick: () => {
          notification.dismiss();
        }
      }, {
        text: 'Never',
        onDidClick: () => {
          markPackageAsIgnored(packageName);

          if (showResetInstruction) {
            showResetInstruction = false;
            atom.notifications.addInfo('How to reset package-deps memory', {
              dismissable: true,
              description: "To modify the list of ignored files invoke 'Application: Open Your Config' and change the 'atom-package-deps' section"
            });
          }

          notification.dismiss();
        }
      }]
    });
    notification.onDidDismiss(() => resolve([]));

    if (skipGroups) {
      return;
    } // Handle groups


    try {
      var _notificationView$ele;

      const notificationView = atom.views.getView(notification);
      const notificationElement = (_notificationView$ele = notificationView === null || notificationView === void 0 ? void 0 : notificationView.element) !== null && _notificationView$ele !== void 0 ? _notificationView$ele : null;

      if (notificationElement == null) {
        throw new Error('Unable to get notification element from view');
      }

      const notificationContent = notificationElement.querySelector('.detail-content');

      if (notificationContent == null) {
        throw new Error('Content detail container not found inside the notification');
      } // Clear the contents and add some skel


      notificationContent.innerHTML = ''; // Add list of ungroup dependencies to the top of the notification

      if (ungroupedDependencies.length > 0) {
        const ungroupedLine = document.createElement('div');
        ungroupedLine.innerHTML = `Packages without choices: <br /><ul><li>${ungroupedDependencies.map(item => escapeHtml_1(item.name)).join('</li><li>')}</li></ul>`;
        notificationContent.appendChild(ungroupedLine);
      } // Create a label line for groups


      const groupLabelLine = document.createElement('div');
      groupLabelLine.innerHTML = `Packages with choices:`;
      notificationContent.appendChild(groupLabelLine); // Create one line per group with a select inside

      const groupedList = document.createElement('ul');
      groupedDependencies.forEach((item, index) => {
        const listItem = document.createElement('li');
        const select = document.createElement('select');
        select.innerHTML = item.map(subitem => `<option>${escapeHtml_1(subitem.name)}</option>`).join('\n');
        select.addEventListener('change', () => {
          // Change the selected value for this index for resolve to use
          const subitem = item.find(entry => entry.name === select.value);

          if (subitem != null) {
            groupChoices[index] = subitem;
          }
        });
        listItem.style.marginTop = '5px';
        listItem.appendChild(select);
        groupedList.appendChild(listItem);
      });
      notificationContent.appendChild(groupedList);
    } catch (err) {
      console.error('[Package-Deps] Error during showing package choices to user', err);
    }
  });
}
function getView({
  packageName,
  dependencies
}) {
  const failed = [];
  const notification = atom.notifications.addInfo(`Installing ${packageName} dependencies`, {
    detail: `Installing ${dependencies.map(item => item.name).join(', ')}`,
    dismissable: true
  });
  const progress = document.createElement('progress');
  progress.max = dependencies.length;
  progress.style.width = '100%';

  try {
    var _notificationView$ele2;

    const notificationView = atom.views.getView(notification);
    const notificationElement = (_notificationView$ele2 = notificationView === null || notificationView === void 0 ? void 0 : notificationView.element) !== null && _notificationView$ele2 !== void 0 ? _notificationView$ele2 : null;

    if (notificationElement == null) {
      throw new Error('Unable to get notification element from view');
    }

    const notificationContent = notificationElement.querySelector('.detail-content');

    if (notificationContent == null) {
      throw new Error('Content detail container not found inside the notification');
    }

    notificationContent.appendChild(progress);
  } catch (err) {
    console.error('[Package-Deps] Error during showing installation progress to user', err);
  }

  return {
    handleFailure({
      dependency,
      error
    }) {
      var _error$stack;

      failed.push(dependency.name);
      progress.value += 1;
      console.error(`[Package-Deps] Unable to install ${dependency.name}, Error:`, (_error$stack = error === null || error === void 0 ? void 0 : error.stack) !== null && _error$stack !== void 0 ? _error$stack : error);
    },

    handleDependencyInstalled(dependency) {
      progress.value += 1;
    },

    handleComplete() {
      notification.dismiss();

      if (failed.length > 0) {
        atom.notifications.addWarning(`Failed to install ${packageName} dependencies`, {
          detail: `These packages were not installed, check your console\nfor more info.\n${failed.join('\n')}`,
          dismissable: true
        });
      } else {
        atom.notifications.addSuccess(`Installed ${packageName} dependencies`, {
          detail: `Installed ${dependencies.map(item => item.name).join(', ')}`
        });
      }

      Promise.all(dependencies.map(item => {
        if (!failed.includes(item.name)) {
          return atom.packages.activatePackage(item.name);
        }

        return null;
      })).catch(err => {
        console.error(`[Package-Deps] Error activating installed packages for ${packageName}`, err);
      });
    }

  };
}

async function confirmPackagesToInstall$1({
  dependencies
}) {
  // No user interaction on the CLI. Install the first (aka "default" choice) package
  return dependencies.map(item => Array.isArray(item) ? item[0] : item);
}
function getView$1({
  dependencies
}) {
  let failed = false;
  console.log(`Installing dependencies:\n${dependencies.map(item => `  - ${item.name}`).join('\n')}`);
  return {
    handleFailure({
      dependency,
      error
    }) {
      var _error$stack;

      failed = true;
      console.error(`Unable to install ${dependency.name}, Error:`, (_error$stack = error === null || error === void 0 ? void 0 : error.stack) !== null && _error$stack !== void 0 ? _error$stack : error);
    },

    handleDependencyInstalled(dependency) {
      console.log('Successfully installed', dependency.name);
    },

    handleComplete() {
      console.log('Installation complete');

      if (failed) {
        // Fail the invocation
        process.exitCode = 1;
      }
    }

  };
}

const getView$2 = IS_ATOM ? getView : getView$1;
const confirmPackagesToInstall$2 = IS_ATOM ? confirmPackagesToInstall : confirmPackagesToInstall$1;

async function install(packageName) {
  invariant(typeof packageName === 'string' && packageName.length > 0, '[Package-Deps] Package name is required');

  if (isPackageIgnored(packageName)) {
    // User ignored this package
    return;
  } // Get list of relevant dependencies


  const dependencies = await getDependencies$2(packageName);

  if (dependencies.length === 0) {
    // Short-circuit
    return;
  } // Resolve directories of relevant dependencies


  const resolvedDependencies = await Promise.all(dependencies.map(async item => {
    if (Array.isArray(item)) {
      return Promise.all(item.map(async subitem => ({ ...subitem,
        directory: await resolveDependencyPath$2(subitem.name)
      })));
    }

    return { ...item,
      directory: await resolveDependencyPath$2(item.name)
    };
  })); // Filter out already installed, in range dependencies
  // If one dependency from a group is already installed, whole group is ignored

  const dependenciesToInstall = await pFilter_1(resolvedDependencies, async function (item) {
    if (Array.isArray(item)) {
      return (await Promise.all(item.map(subitem => shouldInstallDependency(subitem)))).every(Boolean);
    }

    return shouldInstallDependency(item);
  });

  if (dependenciesToInstall.length === 0) {
    // Short-circuit if all have been skipped
    return;
  }

  const chosenDependencies = await confirmPackagesToInstall$2({
    packageName,
    dependencies: dependenciesToInstall
  });

  if (chosenDependencies.length === 0) {
    // Short-circuit if user interaction cancelled all
    return;
  }

  const view = getView$2({
    packageName,
    dependencies: chosenDependencies
  });
  await pMap(chosenDependencies, async function (dependency) {
    try {
      await installPackage(dependency);
      view.handleDependencyInstalled(dependency);
    } catch (err) {
      view.handleFailure({
        dependency,
        error: err
      });
    }
  }, {
    concurrency: 2
  });
  view.handleComplete();
}

exports.install = install;
});

const callsites = () => {
	const _prepareStackTrace = Error.prepareStackTrace;
	Error.prepareStackTrace = (_, stack) => stack;
	const stack = new Error().stack.slice(1);
	Error.prepareStackTrace = _prepareStackTrace;
	return stack;
};

var callsites_1 = callsites;
// TODO: Remove this for the next major release
var _default = callsites;
callsites_1.default = _default;

var callerCallsite = ({depth = 0} = {}) => {
	const callers = [];
	const callerFileSet = new Set();

	for (const callsite of callsites_1()) {
		const fileName = callsite.getFileName();
		const hasReceiver = callsite.getTypeName() !== null && fileName !== null;

		if (!callerFileSet.has(fileName)) {
			callerFileSet.add(fileName);
			callers.unshift(callsite);
		}

		if (hasReceiver) {
			return callers[depth];
		}
	}
};

var lib$1 = createCommonjsModule(function (module, exports) {
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readManifestSync = exports.readManifest = void 0;
var resolve = _path__default['default'].resolve, sep = _path__default['default'].sep;
var fs = fs__default['default'].promises, readFileSync = fs__default['default'].readFileSync;

function readManifest(packageName) {
    if (packageName === void 0) { packageName = ''; }
    return __awaiter(this, void 0, void 0, function () {
        var filePath, fileContents, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filePath = resolveFilePath(packageName);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fs.readFile(filePath, 'utf8')];
                case 2:
                    fileContents = _a.sent();
                    return [2 /*return*/, JSON.parse(fileContents)];
                case 3:
                    err_1 = _a.sent();
                    return [2 /*return*/, null];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.readManifest = readManifest;
function readManifestSync(packageName) {
    if (packageName === void 0) { packageName = ''; }
    var filePath = resolveFilePath(packageName);
    try {
        var fileContents = readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents);
    }
    catch (err) {
        return null;
    }
}
exports.readManifestSync = readManifestSync;
function resolveFilePath(packageName) {
    packageName = (packageName === null || packageName === void 0 ? void 0 : packageName.length) ? packageName : getPackageName();
    var packagePath = atom.packages.resolvePackagePath(packageName);
    var filePath = resolve(packagePath, 'package.json');
    return filePath;
}
function getPackageName() {
    var callerPath = callerCallsite().getFileName();
    var packageDirPaths = atom.packages.getPackageDirPaths();
    var intersection = packageDirPaths.filter(function (packageDirPath) {
        return callerPath.startsWith(packageDirPath);
    });
    if (intersection === null || intersection === void 0 ? void 0 : intersection.length) {
        return callerPath
            .replace(intersection[0], '')
            .split(sep)
            .filter(function (fragment) { return fragment; })[0] || '';
    }
    return '';
}

});

var lib$2 = createCommonjsModule(function (module, exports) {
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.satisfyDependencies = void 0;


var defaultOptions = {
    logger: console.log
};
/**
 * Installs and optionally enables package dependencies
 * @param {string} identifier
 * @param {Object} options
 */
function satisfyDependencies(identifier, userOptions) {
    if (userOptions === void 0) { userOptions = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var options, manifest;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    options = __assign(__assign({}, defaultOptions), userOptions);
                    return [4 /*yield*/, lib$1.readManifest(identifier)];
                case 1:
                    manifest = _a.sent();
                    return [4 /*yield*/, lib.install(manifest['name'])];
                case 2:
                    _a.sent();
                    enableDependencies(manifest['package-deps'], options);
                    return [2 /*return*/];
            }
        });
    });
}
exports.satisfyDependencies = satisfyDependencies;
/**
 * Enables packages dependencies
 * @param {Object} manifest
 * @param {Object} options
 */
function enableDependencies(manifest, options) {
    if (options.enableDependencies) {
        manifest['package-deps'].map(function (packageDependency) {
            if (atom.packages.isPackageDisabled(packageDependency)) {
                if (atom.inDevMode()) {
                    options.logger("[" + manifest.name + "] Enabling package dependency '" + packageDependency + "'");
                }
                atom.packages.enablePackage(packageDependency);
            }
        });
    }
}

});

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * Checks if a cache value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map$1 = getNative(root, 'Map'),
    Set$1 = getNative(root, 'Set'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$1 || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set$1 && (1 / setToArray(new Set$1([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set$1(values);
};

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each
 * element is kept.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length)
    ? baseUniq(array)
    : [];
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

var lodash_uniq = uniq;

var helpers = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assign = exports.CACHE_KEY = exports.KNOWN_SHELLS = undefined;
exports.identifyEnvironment = identifyEnvironment;
exports.identifyEnvironmentAsync = identifyEnvironmentAsync;
exports.parse = parse;
exports.applySugar = applySugar;
exports.getCommand = getCommand;



var _path2 = _interopRequireDefault(_path__default['default']);



var _lodash2 = _interopRequireDefault(lodash_uniq);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SPAWN_TIMEOUT = 4000;

var DEFAULT_PATHS = ['/bin', '/sbin', '/usr/bin', '/usr/sbin', '/usr/local/bin', '/usr/local/sbin'];
var KNOWN_SHELLS = exports.KNOWN_SHELLS = ['zsh', 'bash', 'fish'];
var CACHE_KEY = exports.CACHE_KEY = '__STEELBRAIN_CONSISTENT_ENV_V1';
var assign = exports.assign = Object.assign || function (target, source) {
  for (var key in source) {
    if ({}.hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    }
  }
  return target;
};

function identifyEnvironment() {
  var _getCommand = getCommand(),
      command = _getCommand.command,
      parameters = _getCommand.parameters,
      options = _getCommand.options;

  options.timeout = SPAWN_TIMEOUT;
  return (0, child_process__default['default'].spawnSync)(command, parameters, options).stdout.toString().split('\0');
}

function identifyEnvironmentAsync() {
  return new Promise(function (resolve, reject) {
    var _getCommand2 = getCommand(),
        command = _getCommand2.command,
        parameters = _getCommand2.parameters,
        options = _getCommand2.options;

    var childProcess = (0, child_process__default['default'].spawn)(command, parameters, options);
    var stdout = [];
    var timer = setTimeout(function () {
      childProcess.kill();
      reject(new Error('Process execution timed out'));
    }, SPAWN_TIMEOUT);
    childProcess.stdout.on('data', function (chunk) {
      stdout.push(chunk);
    });
    childProcess.on('close', function () {
      clearTimeout(timer);
      resolve(stdout.join('').split('\0'));
    });
    childProcess.on('error', function (error) {
      reject(error);
    });
  });
}

function parse(rawEnvironment) {
  var environment = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = rawEnvironment[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var chunk = _step.value;

      var index = chunk.indexOf('=');
      if (index !== -1) {
        var key = chunk.slice(0, index);
        var value = chunk.slice(index + 1);
        environment[key] = value;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return environment;
}

function applySugar(environment) {
  var path = process.env.PATH ? process.env.PATH.split(':') : [];
  if (environment.PATH) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = environment.PATH.split(':')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var chunk = _step2.value;

        if (chunk && path.indexOf(chunk) === -1) {
          path.push(chunk);
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = DEFAULT_PATHS[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var entry = _step3.value;

      if (path.indexOf(entry) === -1) {
        path = [entry].concat(path);
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  if (!environment.USER) {
    if (process.env.USER) {
      environment.USER = process.env.USER;
    } else if (environment.HOME) {
      environment.USER = _path2.default.basename(environment.HOME);
    }
  }

  environment.PATH = (0, _lodash2.default)(path).join(':');
  environment.PWD = process.cwd();
  environment.OLDPWD = environment.PWD;
  return environment;
}

function getCommand() {
  // Print the environment separated by \0
  var pyScript = 'import os;print(\\"\\0\\".join(map(\\"=\\".join, dict(os.environ).items()))+\\"\\0\\")';
  var shScript = 'python -c "' + pyScript + '"||' + 'python3 -c "' + pyScript + '"||' +
  // If python is not available, fallback to a POSIX compatible
  // way of retrieving the environment separated by \0.
  'env|' +
  // Find all names of potential environment variables.
  // This also returns variable assignments that are in the value
  // of another environment variable.
  'sed -n -e "s/^\\([A-Za-z_][A-Za-z0-9_]*\\)=.*/\\1/p"|' + 'while read name;' + 'do ' +
  // Check if the variable name is defined in the shell, thus
  // weeding out names that are not real environment variables.
  '[ "$name" != "_" -a -n "$(eval "printf \\"%s\\" \\"\\${$name+x}\\"")" ]&&' + // eslint-disable-line no-template-curly-in-string
  // Retrieve the value with an indirect variable reference.
  // This method has the drawback, that we have to ignore all
  // environment variables, whose names are not valid identifier.
  // As POSIX compatible environment variable names are valid
  // identifiers, this shouldn't cause problems.
  // The shell defines some variables on its own (like RANDOM).
  // Environment variables with the same name will be overwritten.
  'value="$(eval "printf \\"%s\\" \\"\\${$name}\\"")"&&' + // eslint-disable-line no-template-curly-in-string
  // Output the environment variable separated by \0.
  'printf "%s=%s\\0" "$name" "$value";' + 'done;' + 'exit;';
  // Wrap the script with sh for incompatible shells.
  var wrappedShScript = 'sh -c \'' + shScript + '\';exit;';
  var command = process.env.SHELL || 'sh';
  var options = { encoding: 'utf8' };
  var parameters = ['-c', wrappedShScript];

  var shell = _path2.default.basename(command);
  if (shell === 'bash') {
    parameters = ['-c', 'source ~/.bashrc;source ~/.bash_profile;' + shScript];
  } else if (shell === 'zsh') {
    parameters = ['-c', 'source ~/.zshrc;' + shScript];
  } else if (shell === 'fish') {
    parameters = ['-c', 'source ~/.config/fish/config.fish;' + wrappedShScript];
  } else if (shell === 'sh' || shell === 'ksh') {
    parameters = ['-c', shScript];
  }

  return { command: command, parameters: parameters, options: options };
}
});

var lib$3 = createCommonjsModule(function (module) {



var _path2 = _interopRequireDefault(_path__default['default']);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {
  if (process.platform === 'win32' || !process.env.SHELL) {
    return (0, helpers.assign)({}, process.env);
  }
  if (commonjsGlobal[helpers.CACHE_KEY]) {
    return (0, helpers.assign)({}, commonjsGlobal[helpers.CACHE_KEY]);
  }
  var shellName = _path2.default.basename(process.env.SHELL);
  if (helpers.KNOWN_SHELLS.indexOf(shellName) === -1) {
    return (0, helpers.assign)({}, process.env);
  }
  try {
    var environment = (0, helpers.applySugar)((0, helpers.parse)((0, helpers.identifyEnvironment)()));
    commonjsGlobal[helpers.CACHE_KEY] = environment;
    return environment;
  } catch (error) {
    console.error('[consistent-env] Unable to determine environment', error);
    return (0, helpers.assign)({}, process.env);
  }
};

module.exports.async = function () {
  return new Promise(function (resolve) {
    if (process.platform === 'win32' || !process.env.SHELL) {
      resolve((0, helpers.assign)({}, process.env));
    } else if (commonjsGlobal[helpers.CACHE_KEY]) {
      resolve((0, helpers.assign)({}, commonjsGlobal[helpers.CACHE_KEY]));
    } else {
      var shellName = _path2.default.basename(process.env.SHELL);
      if (helpers.KNOWN_SHELLS.indexOf(shellName) === -1) {
        resolve((0, helpers.assign)({}, process.env));
      } else {
        resolve((0, helpers.identifyEnvironmentAsync)().then(helpers.parse).then(helpers.applySugar).then(function (environment) {
          commonjsGlobal[helpers.CACHE_KEY] = environment;
          return environment;
        }));
      }
    }
  }).catch(function (error) {
    console.error('[consistent-env] Unable to determine environment', error);
    return (0, helpers.assign)({}, process.env);
  });
};
});

var CACHE_DELETED = Symbol('cache deleted');

function memoize(callback) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  function memoized() {
    for (var _len = arguments.length, parameters = Array(_len), _key = 0; _key < _len; _key++) {
      parameters[_key] = arguments[_key];
    }

    var cacheKey = JSON.stringify(parameters);
    var parametersLength = parameters.length;

    if (cacheKey in memoized.__sb_cache && memoized.__sb_cache[cacheKey] !== CACHE_DELETED) {
      var _value = memoized.__sb_cache[cacheKey];
      if (options.async && !(_value && _value.constructor.name === 'Promise')) {
        return Promise.resolve(_value);
      }
      return _value;
    }

    var value = void 0;
    if (parametersLength === 1) {
      value = callback.call(this, parameters[0]);
    } else if (parametersLength === 2) {
      value = callback.call(this, parameters[0], parameters[1]);
    } else if (parametersLength === 3) {
      value = callback.call(this, parameters[0], parameters[1], parameters[2]);
    } else if (parametersLength === 4) {
      value = callback.call(this, parameters[0], parameters[1], parameters[2], parameters[3]);
    } else {
      value = callback.apply(this, parameters);
    }

    memoized.__sb_cache[cacheKey] = value;
    if (options.async) {
      if (!value || value.constructor.name !== 'Promise') {
        throw new Error('Memoization Error, Async function returned non-promise value');
      }
      return value.then(function (realValue) {
        memoized.__sb_cache[cacheKey] = realValue;
        return realValue;
      }, function (error) {
        memoized.__sb_cache[cacheKey] = CACHE_DELETED;
        throw error;
      });
    }
    return value;
  }
  memoized.__sb_cache = {};

  return memoized;
}

var lib$4 = memoize;

var lib$5 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
function promisify(callback) {
  var throwError = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

  return function promisified() {
    var _this = this;

    for (var _len = arguments.length, parameters = Array(_len), _key = 0; _key < _len; _key++) {
      parameters[_key] = arguments[_key];
    }

    var promise = new Promise(function (resolve, reject) {
      parameters.push(function (error, data) {
        if (error) {
          reject(error);
        } else resolve(data);
      });
      callback.apply(_this, parameters);
    });
    if (!throwError) {
      promise = promise.then(function (result) {
        return typeof result === 'undefined' ? true : result;
      }).catch(function () {
        return false;
      });
    }
    return promise;
  };
}

function promisifyAll(object) {
  var throwError = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

  var duplicate = Object.assign({}, object);
  for (var item in duplicate) {
    if (!{}.hasOwnProperty.call(duplicate, item) || typeof duplicate[item] !== 'function') {
      continue;
    }
    duplicate[item + 'Async'] = promisify(duplicate[item], throwError);
  }
  return duplicate;
}

exports.default = promisify;
exports.promisify = promisify;
exports.promisifyAll = promisifyAll;
});

var helpers$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findAsync = exports.find = undefined;

var findItemAsync = function () {
  var _ref = _asyncToGenerator(function* (directory, name) {
    var names = [].concat(name);
    var chunks = directory.split(_path2.default.sep);

    while (chunks.length) {
      var currentDir = chunks.join(_path2.default.sep);
      if (currentDir === '') {
        currentDir = _path2.default.resolve(directory, '/');
      }
      for (var i = 0, length = names.length; i < length; ++i) {
        var fileName = names[i];
        var filePath = _path2.default.join(currentDir, fileName);
        try {
          yield access(filePath, _fs2.default.R_OK);
          return filePath;
        } catch (_) {
          // Do nothing
        }
      }
      chunks.pop();
    }

    return null;
  });

  return function findItemAsync(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();



var _path2 = _interopRequireDefault(_path__default['default']);



var _fs2 = _interopRequireDefault(fs__default['default']);



var _sbMemoize2 = _interopRequireDefault(lib$4);



var _sbPromisify2 = _interopRequireDefault(lib$5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var access = (0, _sbPromisify2.default)(_fs2.default.access);

function findItem(directory, name) {
  var names = [].concat(name);
  var chunks = directory.split(_path2.default.sep);

  while (chunks.length) {
    var currentDir = chunks.join(_path2.default.sep);
    if (currentDir === '') {
      currentDir = _path2.default.resolve(directory, '/');
    }
    for (var i = 0, length = names.length; i < length; ++i) {
      var fileName = names[i];
      var filePath = _path2.default.join(currentDir, fileName);

      try {
        _fs2.default.accessSync(filePath, _fs2.default.R_OK);
        return filePath;
      } catch (_) {
        // Do nothing
      }
    }
    chunks.pop();
  }

  return null;
}

var find = exports.find = (0, _sbMemoize2.default)(findItem);
var findAsync = exports.findAsync = (0, _sbMemoize2.default)(findItemAsync, { async: true });
});

var lib$6 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearCache = exports.getPathAsync = exports.getPath = undefined;

var getPathAsync = function () {
  var _ref = _asyncToGenerator(function* () {
    var givenCurrentDirectory = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

    var currentDirectory = givenCurrentDirectory;
    if (!currentDirectory) {
      currentDirectory = process.cwd();
    }
    return (yield (0, helpers$1.findAsync)(currentDirectory, _path2.default.join('node_modules', '.bin'))) || '';
  });

  return function getPathAsync(_x2) {
    return _ref.apply(this, arguments);
  };
}();



var _path2 = _interopRequireDefault(_path__default['default']);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function getPath() {
  var givenCurrentDirectory = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

  var currentDirectory = givenCurrentDirectory;
  if (!currentDirectory) {
    currentDirectory = process.cwd();
  }
  return (0, helpers$1.find)(currentDirectory, _path2.default.join('node_modules', '.bin')) || '';
}

function clearCache() {
  helpers$1.find.__sb_cache = {};
  helpers$1.findAsync.__sb_cache = {};
}

exports.default = getPath;
exports.getPath = getPath;
exports.getPathAsync = getPathAsync;
exports.clearCache = clearCache;
});

var helpers$2 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSpawnOptions = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var getSpawnOptions = exports.getSpawnOptions = function () {
  var _ref = _asyncToGenerator(function* (options) {
    var spawnOptions = Object.assign({}, options, {
      env: mergeEnv((yield (0, lib$3.async)()), options.env)
    });
    var npmPath = void 0;
    var local = options.local;
    if (local) {
      npmPath = yield (0, lib$6.getPathAsync)(local.directory);
    }
    if (local && npmPath) {
      for (var key in spawnOptions.env) {
        if ({}.hasOwnProperty.call(spawnOptions.env, key) && key === 'PATH') {
          var value = spawnOptions.env[key];
          spawnOptions.env[key] = local.prepend ? npmPath + PATH_SEPARATOR + value : value + PATH_SEPARATOR + npmPath;
          break;
        }
      }
    }
    delete spawnOptions.timeout;
    if (spawnOptions.env.OS) {
      spawnOptions.env.OS = undefined;
    }
    if (process.versions.electron) {
      spawnOptions.env.ELECTRON_RUN_AS_NODE = '1';
      spawnOptions.env.ATOM_SHELL_INTERNAL_RUN_AS_NODE = '1';
      spawnOptions.env.ELECTRON_NO_ATTACH_CONSOLE = '1';
    }
    return spawnOptions;
  });

  return function getSpawnOptions(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.validate = validate;
exports.mergePath = mergePath;
exports.mergeEnv = mergeEnv;
exports.escape = escape;
exports.shouldNormalizeForWindows = shouldNormalizeForWindows;
exports.getENOENTError = getENOENTError;



var _path2 = _interopRequireDefault(_path__default['default']);



var _assert2 = _interopRequireDefault(_assert__default['default']);



var _lodash2 = _interopRequireDefault(lodash_uniq);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var PATH_SEPARATOR = process.platform === 'win32' ? ';' : ':';

function validate(filePath, parameters, givenOptionsAccepted) {
  // NOTE: We need to specify type of this to object to supress some warnings that rise from the merge (Flow, duh)
  var defaultOptions = {};
  var options = Object.assign(defaultOptions, givenOptionsAccepted);

  (0, _assert2.default)(typeof filePath === 'string' && filePath, 'filePath must be a string');
  (0, _assert2.default)(Array.isArray(parameters), 'parameters must be an array');

  (0, _assert2.default)((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' && options, 'options must be an object');
  if (options.stream) {
    var stream = options.stream;
    (0, _assert2.default)(stream === 'both' || stream === 'stdout' || stream === 'stderr', 'options.stream should be stdout|stderr|both');
  } else options.stream = 'stdout';
  if (options.timeout) {
    (0, _assert2.default)(typeof options.timeout === 'number', 'options.timeout must be a number');
  } else options.timeout = Infinity;
  if (options.env) {
    (0, _assert2.default)(_typeof(options.env) === 'object', 'options.env must be an object');
  } else options.env = {};
  if (options.stdin) {
    (0, _assert2.default)(typeof options.stdin === 'string' || Buffer.isBuffer(options.stdin), 'options.stdin must be a string or a Buffer');
  } else options.stdin = null;
  if (typeof options.throwOnStderr !== 'undefined') {
    (0, _assert2.default)(typeof options.throwOnStderr === 'boolean', 'options.throwOnStderr must be a boolean');
  } else options.throwOnStderr = true;
  if (typeof options.local !== 'undefined') {
    (0, _assert2.default)(_typeof(options.local) === 'object', 'options.local must be an object');
    (0, _assert2.default)(typeof options.local.directory === 'string', 'options.local.directory must be a string');
    if (typeof options.local.prepend !== 'undefined') {
      (0, _assert2.default)(typeof options.local.prepend === 'boolean', 'options.local.prepend must be a boolean');
    } else options.local.prepend = false;
  }
  if (typeof options.allowEmptyStderr !== 'undefined') {
    (0, _assert2.default)(typeof options.allowEmptyStderr === 'boolean', 'options.throwWhenEmptyStderr must be a boolean');
  } else options.allowEmptyStderr = false;
  if (typeof options.ignoreExitCode !== 'undefined') {
    (0, _assert2.default)(typeof options.ignoreExitCode === 'boolean', 'options.ignoreExitCode must be a boolean');
  } else options.ignoreExitCode = false;

  return options;
}

function mergePath(a, b) {
  return (0, _lodash2.default)(a.split(';').concat(b.split(';')).map(function (i) {
    return i.trim();
  }).filter(function (i) {
    return i;
  })).join(';');
}

function mergeEnv(envA, envB) {
  if (process.platform !== 'win32') {
    return Object.assign(envA, envB);
  }

  // NOTE: Merge PATH and Path on windows
  var mergedEnv = { PATH: '' };
  for (var key in envA) {
    if (key.toUpperCase() !== 'PATH') {
      mergedEnv[key] = envA[key];
      continue;
    }
    mergedEnv.PATH = mergePath(mergedEnv.PATH, envA[key]);
  }
  for (var _key in envB) {
    if (_key.toUpperCase() !== 'PATH') {
      mergedEnv[_key] = envB[_key];
      continue;
    }
    mergedEnv.PATH = mergePath(mergedEnv.PATH, envB[_key]);
  }
  return mergedEnv;
}

function escape(item) {
  return '"' + String(item).replace(/"/g, '\\"') + '"';
}

function shouldNormalizeForWindows(filePath, options) {
  var baseFilePath = _path2.default.basename(filePath);
  return process.platform === 'win32' && !options.shell && baseFilePath !== 'cmd.exe' && baseFilePath !== 'cmd';
}

function getENOENTError(filePath, parameters) {
  var error = new Error('spawn ' + filePath + ' ENOENT');
  error.code = 'ENOENT';
  error.errno = 'ENOENT';
  error.syscall = 'spawn ' + filePath;
  error.path = filePath;
  error.spawnargs = parameters;
  return error;
}
});

var lib$7 = createCommonjsModule(function (module) {

var exec = function () {
  var _ref = _asyncToGenerator(function* (givenFilePath, givenParameters, options, callback) {
    var nodeSpawnOptions = yield (0, helpers$2.getSpawnOptions)(options);
    var filePath = givenFilePath;
    var parameters = givenParameters;
    var spawnedCmdOnWindows = false;

    if ((0, helpers$2.shouldNormalizeForWindows)(filePath, options)) {
      nodeSpawnOptions.windowsVerbatimArguments = true;
      var cmdArgs = [filePath];
      // filePath must be escaped if it has a \s in it, otherwise it must not
      if (/\s/.test(filePath)) {
        cmdArgs = cmdArgs.map(helpers$2.escape);
      }
      cmdArgs = cmdArgs.concat(parameters.map(helpers$2.escape));
      filePath = process.env.comspec || 'cmd.exe';
      parameters = ['/s', '/c', '"' + cmdArgs.join(' ') + '"'];
      spawnedCmdOnWindows = true;
    }

    return new Promise(function (resolve, reject) {
      var spawnedProcess = (0, child_process__default['default'].spawn)(filePath, parameters, nodeSpawnOptions);
      var data = { stdout: [], stderr: [] };
      var timeout = void 0;

      if (spawnedProcess.stdout) {
        spawnedProcess.stdout.on('data', function (chunk) {
          data.stdout.push(chunk);
        });
      }
      if (spawnedProcess.stderr) {
        spawnedProcess.stderr.on('data', function (chunk) {
          data.stderr.push(chunk);
        });
      }
      spawnedProcess.on('error', function (error) {
        reject(error);
      });
      spawnedProcess.on('close', function (exitCode) {
        clearTimeout(timeout);

        var stdout = data.stdout.join('').trim();
        var stderr = data.stderr.join('').trim();

        // NOTE: On windows, we spawn everything through cmd.exe
        // So we have to manually construct ENOENT from it's error message
        if (spawnedCmdOnWindows && stderr === '\'' + givenFilePath + '\' is not recognized as an internal or external command,\r\noperable program or batch file.') {
          reject((0, helpers$2.getENOENTError)(givenFilePath, givenParameters));
          return;
        }

        if (options.stream === 'stdout') {
          if (stderr && options.throwOnStderr) {
            reject(new Error(stderr));
          } else if (exitCode !== 0 && !options.ignoreExitCode) {
            console.error('[exec] Process exited with no-zero code, stdout: ', stdout);
            reject(new Error('Process exited with non-zero code: ' + exitCode));
          } else {
            resolve(stdout);
          }
        } else if (options.stream === 'stderr') {
          if (stderr.length === 0 && !options.allowEmptyStderr) {
            reject(new Error('Process exited with no output, code: ' + exitCode));
          } else {
            resolve(stderr);
          }
        } else {
          resolve({ stdout: stdout, stderr: stderr, exitCode: exitCode });
        }
      });

      if (spawnedProcess.stdin) {
        if (options.stdin) {
          try {
            spawnedProcess.stdin.write(options.stdin);
          } catch (_) {/* No Op */}
        }
        try {
          spawnedProcess.stdin.end();
        } catch (_) {/* No Op */}
      }

      if (options.timeout !== Infinity) {
        timeout = setTimeout(function () {
          // eslint-disable-next-line no-use-before-define
          killProcess(spawnedProcess);
          reject(new Error('Process execution timed out'));
        }, options.timeout);
      }
      callback(spawnedProcess);
    });
  });

  return function exec(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

// NOTE: This proxy function is required to allow .kill() in different stages of process spawn
// We cannot put this logic into exec() directly because it's an async function and doesn't
// allow us to temper the underlying promise


var killProcess = function () {
  var _ref2 = _asyncToGenerator(function* (spawnedProcess) {
    var signal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'SIGTERM';

    var spawnfile = _path2.default.basename(spawnedProcess.spawnfile);
    if (process.platform !== 'win32' || spawnfile === 'wmic.exe' || spawnfile === 'wmic') {
      // Also do this if the process is wmic
      spawnedProcess.kill(signal);
      return;
    }
    try {
      var output = yield execProxy('wmic', ['process', 'where', '(ParentProcessId=' + spawnedProcess.pid + ')', 'get', 'processid'], { stream: 'stdout', timeout: 60 * 1000 });
      output.split(/\s+/).filter(function (i) {
        return (/^\d+$/.test(i)
        );
      }).map(function (i) {
        return parseInt(i, 10);
      }).filter(function (i) {
        return i !== spawnedProcess.pid && i > 0;
      }).forEach(function (pid) {
        process.kill(pid, signal);
      });
    } catch (error) {/* No Op */}
  });

  return function killProcess(_x7) {
    return _ref2.apply(this, arguments);
  };
}();



var _path2 = _interopRequireDefault(_path__default['default']);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function execProxy(filePath) {
  var parameters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var givenOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var options = (0, helpers$2.validate)(filePath, parameters, givenOptions);
  var killSignal = null;
  var spawnedProcess = null;
  var promise = exec(filePath, parameters, options, function (spawnedChildProcess) {
    if (killSignal) {
      // eslint-disable-next-line no-use-before-define
      killProcess(spawnedChildProcess, killSignal);
    } else {
      spawnedProcess = spawnedChildProcess;
    }
  });
  promise.kill = function (givenKillSignal) {
    if (spawnedProcess) {
      // eslint-disable-next-line no-use-before-define
      killProcess(spawnedProcess, givenKillSignal);
    } else {
      killSignal = givenKillSignal || 'SIGTERM';
    }
  };
  return promise;
}

function execNode(filePath) {
  var parameters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var givenOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  (0, helpers$2.validate)(filePath, parameters, givenOptions);
  return execProxy(process.execPath, [filePath].concat(parameters), givenOptions);
}

module.exports = { exec: execProxy, execNode: execNode };
});

var isWindows = process.platform === 'win32';
var trailingSlashRe = isWindows ? /[^:]\\$/ : /.\/$/;

// https://github.com/nodejs/node/blob/3e7a14381497a3b73dda68d05b5130563cdab420/lib/os.js#L25-L43
var osTmpdir = function () {
	var path;

	if (isWindows) {
		path = process.env.TEMP ||
			process.env.TMP ||
			(process.env.SystemRoot || process.env.windir) + '\\temp';
	} else {
		path = process.env.TMPDIR ||
			process.env.TMP ||
			process.env.TEMP ||
			'/tmp';
	}

	if (trailingSlashRe.test(path)) {
		path = path.slice(0, -1);
	}

	return path;
};

/*!
 * Tmp
 *
 * Copyright (c) 2011-2017 KARASZI Istvan <github@spam.raszi.hu>
 *
 * MIT Licensed
 */

/*
 * Module dependencies.
 */




const _c = process.binding('constants');

/*
 * The working inner variables.
 */
const
  /**
   * The temporary directory.
   * @type {string}
   */
  tmpDir = osTmpdir(),

  // the random characters to choose from
  RANDOM_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',

  TEMPLATE_PATTERN = /XXXXXX/,

  DEFAULT_TRIES = 3,

  CREATE_FLAGS = (_c.O_CREAT || _c.fs.O_CREAT) | (_c.O_EXCL || _c.fs.O_EXCL) | (_c.O_RDWR || _c.fs.O_RDWR),

  EBADF = _c.EBADF || _c.os.errno.EBADF,
  ENOENT = _c.ENOENT || _c.os.errno.ENOENT,

  DIR_MODE = 448 /* 0o700 */,
  FILE_MODE = 384 /* 0o600 */,

  // this will hold the objects need to be removed on exit
  _removeObjects = [];

var
  _gracefulCleanup = false,
  _uncaughtException = false;

/**
 * Random name generator based on crypto.
 * Adapted from http://blog.tompawlak.org/how-to-generate-random-values-nodejs-javascript
 *
 * @param {number} howMany
 * @returns {string} the generated random name
 * @private
 */
function _randomChars(howMany) {
  var
    value = [],
    rnd = null;

  // make sure that we do not fail because we ran out of entropy
  try {
    rnd = crypto__default['default'].randomBytes(howMany);
  } catch (e) {
    rnd = crypto__default['default'].pseudoRandomBytes(howMany);
  }

  for (var i = 0; i < howMany; i++) {
    value.push(RANDOM_CHARS[rnd[i] % RANDOM_CHARS.length]);
  }

  return value.join('');
}

/**
 * Checks whether the `obj` parameter is defined or not.
 *
 * @param {Object} obj
 * @returns {boolean} true if the object is undefined
 * @private
 */
function _isUndefined(obj) {
  return typeof obj === 'undefined';
}

/**
 * Parses the function arguments.
 *
 * This function helps to have optional arguments.
 *
 * @param {(Options|Function)} options
 * @param {Function} callback
 * @returns {Array} parsed arguments
 * @private
 */
function _parseArguments(options, callback) {
  if (typeof options == 'function') {
    return [callback || {}, options];
  }

  if (_isUndefined(options)) {
    return [{}, callback];
  }

  return [options, callback];
}

/**
 * Generates a new temporary name.
 *
 * @param {Object} opts
 * @returns {string} the new random name according to opts
 * @private
 */
function _generateTmpName(opts) {
  if (opts.name) {
    return _path__default['default'].join(opts.dir || tmpDir, opts.name);
  }

  // mkstemps like template
  if (opts.template) {
    return opts.template.replace(TEMPLATE_PATTERN, _randomChars(6));
  }

  // prefix and postfix
  const name = [
    opts.prefix || 'tmp-',
    process.pid,
    _randomChars(12),
    opts.postfix || ''
  ].join('');

  return _path__default['default'].join(opts.dir || tmpDir, name);
}

/**
 * Gets a temporary file name.
 *
 * @param {(Options|tmpNameCallback)} options options or callback
 * @param {?tmpNameCallback} callback the callback function
 */
function tmpName(options, callback) {
  var
    args = _parseArguments(options, callback),
    opts = args[0],
    cb = args[1],
    tries = opts.name ? 1 : opts.tries || DEFAULT_TRIES;

  if (isNaN(tries) || tries < 0)
    return cb(new Error('Invalid tries'));

  if (opts.template && !opts.template.match(TEMPLATE_PATTERN))
    return cb(new Error('Invalid template provided'));

  (function _getUniqueName() {
    const name = _generateTmpName(opts);

    // check whether the path exists then retry if needed
    fs__default['default'].stat(name, function (err) {
      if (!err) {
        if (tries-- > 0) return _getUniqueName();

        return cb(new Error('Could not get a unique tmp filename, max tries reached ' + name));
      }

      cb(null, name);
    });
  }());
}

/**
 * Synchronous version of tmpName.
 *
 * @param {Object} options
 * @returns {string} the generated random name
 * @throws {Error} if the options are invalid or could not generate a filename
 */
function tmpNameSync(options) {
  var
    args = _parseArguments(options),
    opts = args[0],
    tries = opts.name ? 1 : opts.tries || DEFAULT_TRIES;

  if (isNaN(tries) || tries < 0)
    throw new Error('Invalid tries');

  if (opts.template && !opts.template.match(TEMPLATE_PATTERN))
    throw new Error('Invalid template provided');

  do {
    const name = _generateTmpName(opts);
    try {
      fs__default['default'].statSync(name);
    } catch (e) {
      return name;
    }
  } while (tries-- > 0);

  throw new Error('Could not get a unique tmp filename, max tries reached');
}

/**
 * Creates and opens a temporary file.
 *
 * @param {(Options|fileCallback)} options the config options or the callback function
 * @param {?fileCallback} callback
 */
function file(options, callback) {
  var
    args = _parseArguments(options, callback),
    opts = args[0],
    cb = args[1];

  opts.postfix = (_isUndefined(opts.postfix)) ? '.tmp' : opts.postfix;

  // gets a temporary filename
  tmpName(opts, function _tmpNameCreated(err, name) {
    if (err) return cb(err);

    // create and open the file
    fs__default['default'].open(name, CREATE_FLAGS, opts.mode || FILE_MODE, function _fileCreated(err, fd) {
      if (err) return cb(err);

      if (opts.discardDescriptor) {
        return fs__default['default'].close(fd, function _discardCallback(err) {
          if (err) {
            // Low probability, and the file exists, so this could be
            // ignored.  If it isn't we certainly need to unlink the
            // file, and if that fails too its error is more
            // important.
            try {
              fs__default['default'].unlinkSync(name);
            } catch (e) {
              if (!isENOENT(e)) {
                err = e;
              }
            }
            return cb(err);
          }
          cb(null, name, undefined, _prepareTmpFileRemoveCallback(name, -1, opts));
        });
      }
      if (opts.detachDescriptor) {
        return cb(null, name, fd, _prepareTmpFileRemoveCallback(name, -1, opts));
      }
      cb(null, name, fd, _prepareTmpFileRemoveCallback(name, fd, opts));
    });
  });
}

/**
 * Synchronous version of file.
 *
 * @param {Options} options
 * @returns {FileSyncObject} object consists of name, fd and removeCallback
 * @throws {Error} if cannot create a file
 */
function fileSync(options) {
  var
    args = _parseArguments(options),
    opts = args[0];

  opts.postfix = opts.postfix || '.tmp';

  const discardOrDetachDescriptor = opts.discardDescriptor || opts.detachDescriptor;
  const name = tmpNameSync(opts);
  var fd = fs__default['default'].openSync(name, CREATE_FLAGS, opts.mode || FILE_MODE);
  if (opts.discardDescriptor) {
    fs__default['default'].closeSync(fd); 
    fd = undefined;
  }

  return {
    name: name,
    fd: fd,
    removeCallback: _prepareTmpFileRemoveCallback(name, discardOrDetachDescriptor ? -1 : fd, opts)
  };
}

/**
 * Removes files and folders in a directory recursively.
 *
 * @param {string} root
 * @private
 */
function _rmdirRecursiveSync(root) {
  const dirs = [root];

  do {
    var
      dir = dirs.pop(),
      deferred = false,
      files = fs__default['default'].readdirSync(dir);

    for (var i = 0, length = files.length; i < length; i++) {
      var
        file = _path__default['default'].join(dir, files[i]),
        stat = fs__default['default'].lstatSync(file); // lstat so we don't recurse into symlinked directories

      if (stat.isDirectory()) {
        if (!deferred) {
          deferred = true;
          dirs.push(dir);
        }
        dirs.push(file);
      } else {
        fs__default['default'].unlinkSync(file);
      }
    }

    if (!deferred) {
      fs__default['default'].rmdirSync(dir);
    }
  } while (dirs.length !== 0);
}

/**
 * Creates a temporary directory.
 *
 * @param {(Options|dirCallback)} options the options or the callback function
 * @param {?dirCallback} callback
 */
function dir(options, callback) {
  var
    args = _parseArguments(options, callback),
    opts = args[0],
    cb = args[1];

  // gets a temporary filename
  tmpName(opts, function _tmpNameCreated(err, name) {
    if (err) return cb(err);

    // create the directory
    fs__default['default'].mkdir(name, opts.mode || DIR_MODE, function _dirCreated(err) {
      if (err) return cb(err);

      cb(null, name, _prepareTmpDirRemoveCallback(name, opts));
    });
  });
}

/**
 * Synchronous version of dir.
 *
 * @param {Options} options
 * @returns {DirSyncObject} object consists of name and removeCallback
 * @throws {Error} if it cannot create a directory
 */
function dirSync(options) {
  var
    args = _parseArguments(options),
    opts = args[0];

  const name = tmpNameSync(opts);
  fs__default['default'].mkdirSync(name, opts.mode || DIR_MODE);

  return {
    name: name,
    removeCallback: _prepareTmpDirRemoveCallback(name, opts)
  };
}

/**
 * Prepares the callback for removal of the temporary file.
 *
 * @param {string} name the path of the file
 * @param {number} fd file descriptor
 * @param {Object} opts
 * @returns {fileCallback}
 * @private
 */
function _prepareTmpFileRemoveCallback(name, fd, opts) {
  const removeCallback = _prepareRemoveCallback(function _removeCallback(fdPath) {
    try {
      if (0 <= fdPath[0]) {
        fs__default['default'].closeSync(fdPath[0]);
      }
    }
    catch (e) {
      // under some node/windows related circumstances, a temporary file
      // may have not be created as expected or the file was already closed
      // by the user, in which case we will simply ignore the error
      if (!isEBADF(e) && !isENOENT(e)) {
        // reraise any unanticipated error
        throw e;
      }
    }
    try {
      fs__default['default'].unlinkSync(fdPath[1]);
    }
    catch (e) {
      if (!isENOENT(e)) {
        // reraise any unanticipated error
        throw e;
      }
    }
  }, [fd, name]);

  if (!opts.keep) {
    _removeObjects.unshift(removeCallback);
  }

  return removeCallback;
}

/**
 * Prepares the callback for removal of the temporary directory.
 *
 * @param {string} name
 * @param {Object} opts
 * @returns {Function} the callback
 * @private
 */
function _prepareTmpDirRemoveCallback(name, opts) {
  const removeFunction = opts.unsafeCleanup ? _rmdirRecursiveSync : fs__default['default'].rmdirSync.bind(fs__default['default']);
  const removeCallback = _prepareRemoveCallback(removeFunction, name);

  if (!opts.keep) {
    _removeObjects.unshift(removeCallback);
  }

  return removeCallback;
}

/**
 * Creates a guarded function wrapping the removeFunction call.
 *
 * @param {Function} removeFunction
 * @param {Object} arg
 * @returns {Function}
 * @private
 */
function _prepareRemoveCallback(removeFunction, arg) {
  var called = false;

  return function _cleanupCallback(next) {
    if (!called) {
      const index = _removeObjects.indexOf(_cleanupCallback);
      if (index >= 0) {
        _removeObjects.splice(index, 1);
      }

      called = true;
      removeFunction(arg);
    }

    if (next) next(null);
  };
}

/**
 * The garbage collector.
 *
 * @private
 */
function _garbageCollector() {
  if (_uncaughtException && !_gracefulCleanup) {
    return;
  }

  // the function being called removes itself from _removeObjects,
  // loop until _removeObjects is empty
  while (_removeObjects.length) {
    try {
      _removeObjects[0].call(null);
    } catch (e) {
      // already removed?
    }
  }
}

/**
 * Helper for testing against EBADF to compensate changes made to Node 7.x under Windows.
 */
function isEBADF(error) {
  return isExpectedError(error, -EBADF, 'EBADF');
}

/**
 * Helper for testing against ENOENT to compensate changes made to Node 7.x under Windows.
 */
function isENOENT(error) {
  return isExpectedError(error, -ENOENT, 'ENOENT');
}

/**
 * Helper to determine whether the expected error code matches the actual code and errno,
 * which will differ between the supported node versions.
 *
 * - Node >= 7.0:
 *   error.code {String}
 *   error.errno {String|Number} any numerical value will be negated
 *
 * - Node >= 6.0 < 7.0:
 *   error.code {String}
 *   error.errno {Number} negated
 *
 * - Node >= 4.0 < 6.0: introduces SystemError
 *   error.code {String}
 *   error.errno {Number} negated
 *
 * - Node >= 0.10 < 4.0:
 *   error.code {Number} negated
 *   error.errno n/a
 */
function isExpectedError(error, code, errno) {
  return error.code == code || error.code == errno;
}

/**
 * Sets the graceful cleanup.
 *
 * Also removes the created files and directories when an uncaught exception occurs.
 */
function setGracefulCleanup() {
  _gracefulCleanup = true;
}

const version = process.versions.node.split('.').map(function (value) {
  return parseInt(value, 10);
});

if (version[0] === 0 && (version[1] < 9 || version[1] === 9 && version[2] < 5)) {
  process.addListener('uncaughtException', function _uncaughtExceptionThrown(err) {
    _uncaughtException = true;
    _garbageCollector();

    throw err;
  });
}

process.addListener('exit', function _exit(code) {
  if (code) _uncaughtException = true;
  _garbageCollector();
});

/**
 * Configuration options.
 *
 * @typedef {Object} Options
 * @property {?number} tries the number of tries before give up the name generation
 * @property {?string} template the "mkstemp" like filename template
 * @property {?string} name fix name
 * @property {?string} dir the tmp directory to use
 * @property {?string} prefix prefix for the generated name
 * @property {?string} postfix postfix for the generated name
 */

/**
 * @typedef {Object} FileSyncObject
 * @property {string} name the name of the file
 * @property {string} fd the file descriptor
 * @property {fileCallback} removeCallback the callback function to remove the file
 */

/**
 * @typedef {Object} DirSyncObject
 * @property {string} name the name of the directory
 * @property {fileCallback} removeCallback the callback function to remove the directory
 */

/**
 * @callback tmpNameCallback
 * @param {?Error} err the error object if anything goes wrong
 * @param {string} name the temporary file name
 */

/**
 * @callback fileCallback
 * @param {?Error} err the error object if anything goes wrong
 * @param {string} name the temporary file name
 * @param {number} fd the file descriptor
 * @param {cleanupCallback} fn the cleanup callback function
 */

/**
 * @callback dirCallback
 * @param {?Error} err the error object if anything goes wrong
 * @param {string} name the temporary file name
 * @param {cleanupCallback} fn the cleanup callback function
 */

/**
 * Removes the temporary created file or directory.
 *
 * @callback cleanupCallback
 * @param {simpleCallback} [next] function to call after entry was removed
 */

/**
 * Callback function for function composition.
 * @see {@link https://github.com/raszi/node-tmp/issues/57|raszi/node-tmp#57}
 *
 * @callback simpleCallback
 */

// exporting all the needed methods
var tmpdir = tmpDir;

var dir_1 = dir;
var dirSync_1 = dirSync;

var file_1 = file;
var fileSync_1 = fileSync;

var tmpName_1 = tmpName;
var tmpNameSync_1 = tmpNameSync;

var setGracefulCleanup_1 = setGracefulCleanup;

var tmp = {
	tmpdir: tmpdir,
	dir: dir_1,
	dirSync: dirSync_1,
	file: file_1,
	fileSync: fileSync_1,
	tmpName: tmpName_1,
	tmpNameSync: tmpNameSync_1,
	setGracefulCleanup: setGracefulCleanup_1
};

var helpers$3 = createCommonjsModule(function (module, exports) {
'use babel';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unlinkFile = exports.writeFile = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.getWordRegexp = getWordRegexp;
exports.getTempDirectory = getTempDirectory;
exports.fileExists = fileExists;
exports.validateExec = validateExec;
exports.validateEditor = validateEditor;
exports.validateFind = validateFind;
exports.wrapExec = wrapExec;



var _fs2 = _interopRequireDefault(fs__default['default']);



var _tmp2 = _interopRequireDefault(tmp);



var _sbPromisify2 = _interopRequireDefault(lib$5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var writeFile = exports.writeFile = (0, _sbPromisify2.default)(_fs2.default.writeFile);
var unlinkFile = exports.unlinkFile = (0, _sbPromisify2.default)(_fs2.default.unlink);

function escapeRegexp(string) {
  // Shamelessly stolen from https://github.com/atom/underscore-plus/blob/130913c179fe1d718a14034f4818adaf8da4db12/src/underscore-plus.coffee#L138
  return string.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}

function getWordRegexp(textEditor, bufferPosition) {
  var scopeDescriptor = textEditor.scopeDescriptorForBufferPosition(bufferPosition);
  var nonWordCharacters = escapeRegexp(atom.config.get('editor.nonWordCharacters', {
    scope: scopeDescriptor
  }));
  return new RegExp('^[\t ]*$|[^\\s' + nonWordCharacters + ']+');
}

function getTempDirectory(prefix) {
  return new Promise(function (resolve, reject) {
    _tmp2.default.dir({ prefix: prefix }, function (error, directory, cleanup) {
      if (error) {
        reject(error);
      } else resolve({ path: directory, cleanup: cleanup });
    });
  });
}

function fileExists(filePath) {
  return new Promise(function (resolve) {
    _fs2.default.access(filePath, _fs2.default.R_OK, function (error) {
      resolve(error === null);
    });
  });
}

function validateExec(command, args, options) {
  if (typeof command !== 'string') {
    throw new Error('Invalid or no `command` provided');
  } else if (!(args instanceof Array)) {
    throw new Error('Invalid or no `args` provided');
  } else if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
    throw new Error('Invalid or no `options` provided');
  }
}

function validateEditor(editor) {
  var isEditor = void 0;
  if (typeof atom.workspace.isTextEditor === 'function') {
    // Added in Atom v1.4.0
    isEditor = atom.workspace.isTextEditor(editor);
  } else {
    isEditor = typeof editor.getText === 'function';
  }
  if (!isEditor) {
    throw new Error('Invalid TextEditor provided');
  }
}

function validateFind(directory, name) {
  if (typeof directory !== 'string') {
    throw new Error('Invalid or no `directory` provided');
  } else if (typeof name !== 'string' && !(name instanceof Array)) {
    throw new Error('Invalid or no `name` provided');
  }
}

var processMap = new Map();

function wrapExec(callback) {
  return function (filePath, parameters) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var killed = false;
    var spawned = callback(filePath, parameters, Object.assign({ timeout: 10000 }, options));
    var mirror = spawned;

    if (options.uniqueKey) {
      if (typeof options.uniqueKey !== 'string') throw new Error('options.uniqueKey must be a string');

      var oldValue = processMap.get(options.uniqueKey);
      if (oldValue) {
        oldValue();
      }
      processMap.set(options.uniqueKey, function () {
        killed = true;
        spawned.kill();
      });
      mirror = mirror.then(function (value) {
        if (killed) return null;
        return value;
      }, function (error) {
        if (killed) return null;
        throw error;
      });
    }

    return mirror.catch(function (error) {
      if (error.code === 'ENOENT') {
        var newError = new Error('Failed to spawn command `' + error.path + '`. Make sure `' + error.path + '` is installed and on your PATH');
        // $FlowIgnore: Custom property
        newError.code = 'ENOENT';
        throw newError;
      }
      throw error;
    });
  };
}
});

var namedJsRegexp = createCommonjsModule(function (module, exports) {
(function (window) {
  var validGroupName = /^[$_a-z][$_a-z0-9]*$/i;
  var cache;

  function parseRegex(text) {
    var i, c, c1, c12, nameEnd, name, item,
      mapper = {},
      current = 0,
      regexText = "",
      inCharSet = false;

    for (i = 0; i < text.length; ++i) {
      c = text[i]; c1 = text[i + 1]; c12 = c1 + text[i + 2];
      regexText += c;
      if (c === "\\") {
        if (!inCharSet && c12 === "k<") {
          // this is back reference
          nameEnd = text.indexOf(">", i + 3);
          if (nameEnd < 0) {
            throw new Error("'>' missing in named backreference.");
          }
          name = text.substring(i + 3, nameEnd);
          item = mapper[name];
          if (!item) {
            throw new Error("Named group '" + name + "' is not defined in backreference.");
          }
          if (typeof item !== "number") {
            throw new Error("Named backreference referencing duplicate named group '" + name + "'.");
          }
          i = nameEnd;
          regexText += item;
        } else {
          regexText += c1;
          ++i;
        }
      } else if (inCharSet) {
        if (c === "]") {
          inCharSet = false;
        }
      } else if (c === "[") {
        inCharSet = true;
      } else {
        // if it starts with '(' and is neither non capturing group '(?:', nor positive lookahead "(?=" nor negative lookahead "(?!" then this is capturing group expression 
        if (c === "(" && c12 !== "?:" && c12 !== "?=" && c12 !== "?!") {
          current++;
          // if it starts with '?<' or ':<' then this is capturing named group 
          if (c12 === "?<" || c12 === ":<") {
            nameEnd = text.indexOf(">", i + 3);
            if (nameEnd < 0) {
              throw new Error("'>' missing in named group.");
            }
            name = text.substring(i + 3, nameEnd);
            if (!validGroupName.test(name)) {
              throw new Error("Invalide group name '" + name + "'. Regexp group name should start with '_$a-zA-Z' and can contain only '_$a-zA-Z0-9'.");
            }
            item = mapper[name];
            if (item === undefined) {
              mapper[name] = current;
            } else if (typeof item === "number") {
              mapper[name] = [item, current];
            } else {
              item.push(current);
            }
            i = nameEnd;
          }
        }
      }
    }
    return { mapper: mapper, regexText: regexText };
  }

  function parseReplacement(text, groupsIndices) {
    var i, c, c1, name, nameEnd, groupIndex,
      result = '';
    for (i = 0; i < text.length; ++i) {
      c = text[i]; c1 = text[i + 1];
      result += c;
      if (c === '$') {
        if (c1 === '$') {
          result += c1;
          ++i;
        } else if (c1 === '{') {
          nameEnd = text.indexOf("}", i + 2);
          if (nameEnd < 0) {
            throw new Error("'>' missing in replacement named group.");
          }
          name = text.substring(i + 2, nameEnd);
          groupIndex = groupsIndices[name];
          if (groupIndex === undefined) {
            throw new Error("Named group '" + name + "' is not defined in replacement text.");
          }
          if (typeof groupIndex !== "number") {
            throw new Error("Named replacement referencing duplicate named group '" + name + "'.");
          }
          result += groupIndex;
          i = nameEnd;
        }
      }
    }
    return result;
  }
  /**
   * Create regexp with additional properties or enable/disable cache
   * @param {(string|RegExp|boolean)} regexp string, regular literal or true/false for enable/disable cache 
   * @param {string} flags 
   */
  function createNamedRegex(regexp, flags) {

    if (typeof regexp === "boolean") {
      // options parameter
      if (regexp === false) {
        cache = undefined;
      } else if (!cache) {
        cache = {};
      }
      return;
    }

    if (typeof regexp !== "string") {
      // parameter is regexp literal
      flags = (regexp.global ? "g" : "") +
        (regexp.multiline ? "m" : "") +
        (regexp.ignoreCase ? "i" : "");
      regexp = regexp.source;
    }

    var info = cache ? (cache[regexp] || (cache[regexp] = parseRegex(regexp))) : parseRegex(regexp);
    var regex = new RegExp(info.regexText, flags);

    regex.groupsIndices = info.mapper;

    function extendMatched(matched) {
      var mapper = info.mapper;
      /**
      * Returns value for group name or undefined. If same group name was defined multiple time, it returns first not undefined value.
      * If all is set to true, then it returns array of all matched values.
      */
      matched.group = function (name, all) {
        var indices = mapper[name];
        if (typeof indices === "number") {
          // name group is defined only once
          return matched[indices];
        } else if (all) {
          // name group is defined multiple time and because all is true, return array of all matched values
          return indices.map(function (v) { return matched[v]; });
        } else if (indices) {
          // name group is defined multiple time and because all is false, return first not undefined matched value
          for (var i = 0; i < indices.length; ++i) {
            var value = matched[indices[i]];
            if (value !== undefined) {
              return value;
            }
          }
        }
        return undefined;
      };
      var cachedGroups, cachedGroupsAll;
      matched.groups = function (all) {
        var cg = all ? cachedGroupsAll : cachedGroups;
        if (cg) {
          return cg;
        }
        cg = {};
        for (var name in mapper) {
          cg[name] = matched.group(name, all);
        }
        return all ? cachedGroupsAll = cg : cachedGroups = cg;
      };
      return matched;
    }

    regex.exec = function (text) {
      var matched = RegExp.prototype.exec.call(this, text);
      if (matched) {
        extendMatched(matched);
      }
      return matched;
    };
    regex.execGroups = function (text, all) {
      var matched = this.exec(text);
      if (!matched) {
        return null;
      }
      return matched.groups(all);
    };

    regex.replace = function (text, replacement) {
      if (typeof replacement === "function") {
        return text.replace(regex, function () {
          var matched = Array.prototype.slice.call(arguments, 0, arguments.length - 2);
          extendMatched(matched);
          return replacement.apply(matched, arguments);
        });
      } else {
        var replacementText = parseReplacement(replacement, this.groupsIndices);
        return text.replace(this, replacementText);
      }
    };
    return regex;
  }

  {
    module.exports = createNamedRegex;
  }


})();
});

var lib$8 = createCommonjsModule(function (module, exports) {
'use babel';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.execNode = exports.exec = exports.tempFiles = exports.findCachedAsync = exports.findAsync = exports.FindCache = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var findAsync = exports.findAsync = function () {
  var _ref = _asyncToGenerator(function* (directory, name) {
    Helpers.validateFind(directory, name);
    var names = [].concat(name);
    var chunks = directory.split(Path.sep);

    while (chunks.length) {
      var currentDir = chunks.join(Path.sep);
      if (currentDir === '') {
        currentDir = Path.resolve(directory, '/');
      }
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = names[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var fileName = _step.value;

          var _filePath = Path.join(currentDir, fileName);
          // NOTE: If we follow ESLint here and collect all promises and await at once
          // It'll end up being more inefficient, we'll be doing more fs.stat calls than
          // necessary
          // eslint-disable-next-line no-await-in-loop
          if (yield Helpers.fileExists(_filePath)) {
            return _filePath;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      chunks.pop();
    }

    return null;
  });

  return function findAsync(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var findCachedAsync = exports.findCachedAsync = function () {
  var _ref2 = _asyncToGenerator(function* (directory, name) {
    Helpers.validateFind(directory, name);
    var names = [].concat(name);
    var cacheKey = directory + ':' + names.join(',');
    var cachedFilePath = FindCache.get(cacheKey);

    if (cachedFilePath) {
      if (yield Helpers.fileExists(cachedFilePath)) {
        return cachedFilePath;
      }
      FindCache.delete(cacheKey);
    }
    var filePath = yield findAsync(directory, names);
    if (filePath) {
      FindCache.set(cacheKey, filePath);
    }
    return filePath;
  });

  return function findCachedAsync(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var tempFiles = exports.tempFiles = function () {
  var _ref3 = _asyncToGenerator(function* (files, callback) {
    if (!Array.isArray(files)) {
      throw new Error('Invalid or no `files` provided');
    } else if (typeof callback !== 'function') {
      throw new Error('Invalid or no `callback` provided');
    }

    var tempDirectory = yield Helpers.getTempDirectory('atom-linter_');
    var filePaths = [];

    yield Promise.all(files.map(function (file) {
      var fileName = file.name;
      var fileContents = file.contents;
      var filePath = Path.join(tempDirectory.path, fileName);
      filePaths.push(filePath);
      return Helpers.writeFile(filePath, fileContents);
    }));
    try {
      return yield callback(filePaths);
    } finally {
      yield Promise.all(filePaths.map(function (filePath) {
        return Helpers.unlinkFile(filePath);
      }));
      tempDirectory.cleanup();
    }
  });

  return function tempFiles(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.generateRange = generateRange;
exports.find = find;
exports.findCached = findCached;
exports.tempFile = tempFile;
exports.parse = parse;



var Path = _interopRequireWildcard(_path__default['default']);



var FS = _interopRequireWildcard(fs__default['default']);





var Helpers = _interopRequireWildcard(helpers$3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var NamedRegexp = null;
var FindCache = exports.FindCache = new Map();

function generateRange(textEditor, line, column) {
  Helpers.validateEditor(textEditor);
  var lineNumber = line;

  if (typeof lineNumber !== 'number' || !Number.isFinite(lineNumber) || lineNumber < 0) {
    lineNumber = 0;
  }

  var buffer = textEditor.getBuffer();
  var lineMax = buffer.getLineCount() - 1;

  if (lineNumber > lineMax) {
    throw new Error('Line number (' + lineNumber + ') greater than maximum line (' + lineMax + ')');
  }

  var columnGiven = typeof column === 'number' && Number.isFinite(column) && column > -1;
  var lineText = buffer.lineForRow(lineNumber);
  var colEnd = lineText.length;
  var colStart = columnGiven ? column : 0;
  if (columnGiven) {
    var match = Helpers.getWordRegexp(textEditor, [lineNumber, colStart]).exec(lineText.substr(column));
    if (match) {
      colEnd = colStart + match.index + match[0].length;
    }
  } else {
    var indentation = lineText.match(/^\s+/);
    if (indentation) {
      colStart = indentation[0].length;
    }
  }
  if (colStart > lineText.length) {
    throw new Error('Column start (' + (colStart || 0) + ') greater than line length (' + lineText.length + ') for line ' + lineNumber);
  }

  return [[lineNumber, colStart], [lineNumber, colEnd]];
}

function find(directory, name) {
  Helpers.validateFind(directory, name);
  var names = [].concat(name);
  var chunks = directory.split(Path.sep);

  while (chunks.length) {
    var currentDir = chunks.join(Path.sep);
    if (currentDir === '') {
      currentDir = Path.resolve(directory, '/');
    }
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = names[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var fileName = _step2.value;

        var _filePath2 = Path.join(currentDir, fileName);

        try {
          FS.accessSync(_filePath2, FS.R_OK);
          return _filePath2;
        } catch (_) {
          // Do nothing
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    chunks.pop();
  }

  return null;
}

function findCached(directory, name) {
  Helpers.validateFind(directory, name);
  var names = [].concat(name);
  var cacheKey = directory + ':' + names.join(',');
  var cachedFilePath = FindCache.get(cacheKey);

  if (cachedFilePath) {
    try {
      FS.accessSync(cachedFilePath, FS.R_OK);
      return cachedFilePath;
    } catch (_) {
      FindCache.delete(cacheKey);
    }
  }
  var filePath = find(directory, names);
  if (filePath) {
    FindCache.set(cacheKey, filePath);
  }
  return filePath;
}

function tempFile(fileName, fileContents, callback) {
  if (typeof fileName !== 'string') {
    throw new Error('Invalid or no `fileName` provided');
  } else if (typeof fileContents !== 'string') {
    throw new Error('Invalid or no `fileContents` provided');
  } else if (typeof callback !== 'function') {
    throw new Error('Invalid or no `callback` provided');
  }

  return tempFiles([{
    name: fileName,
    contents: fileContents
  }], function (results) {
    return callback(results[0]);
  });
}

function parse(data, regex) {
  var givenOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (typeof data !== 'string') {
    throw new Error('Invalid or no `data` provided');
  } else if (typeof regex !== 'string') {
    throw new Error('Invalid or no `regex` provided');
  } else if ((typeof givenOptions === 'undefined' ? 'undefined' : _typeof(givenOptions)) !== 'object') {
    throw new Error('Invalid or no `options` provided');
  }

  if (NamedRegexp === null) {
    /* eslint-disable global-require */
    NamedRegexp = namedJsRegexp;
    /* eslint-enable global-require */
  }

  var defaultOptions = { flags: '' };
  var options = Object.assign(defaultOptions, givenOptions);
  if (options.flags.indexOf('g') === -1) {
    options.flags += 'g';
  }

  var messages = [];
  var compiledRegexp = new NamedRegexp(regex, options.flags);
  var rawMatch = compiledRegexp.exec(data);

  while (rawMatch !== null) {
    var match = rawMatch.groups();
    var type = match.type;
    var text = match.message;
    var file = match.file || options.filePath || null;

    var lineStart = match.lineStart || match.line || 0;
    var colStart = match.colStart || match.col || 0;
    var lineEnd = match.lineEnd || match.line || 0;
    var colEnd = match.colEnd || match.col || 0;

    messages.push({
      type: type,
      text: text,
      filePath: file,
      range: [[lineStart > 0 ? lineStart - 1 : 0, colStart > 0 ? colStart - 1 : 0], [lineEnd > 0 ? lineEnd - 1 : 0, colEnd > 0 ? colEnd - 1 : 0]]
    });

    rawMatch = compiledRegexp.exec(data);
  }

  return messages;
}

var execProxy = Helpers.wrapExec(lib$7.exec);
var execNodeProxy = Helpers.wrapExec(lib$7.execNode);

exports.exec = execProxy;
exports.execNode = execNodeProxy;
});

let isDocker;

function hasDockerEnv() {
	try {
		fs__default['default'].statSync('/.dockerenv');
		return true;
	} catch (_) {
		return false;
	}
}

function hasDockerCGroup() {
	try {
		return fs__default['default'].readFileSync('/proc/self/cgroup', 'utf8').includes('docker');
	} catch (_) {
		return false;
	}
}

var isDocker_1 = () => {
	if (isDocker === undefined) {
		isDocker = hasDockerEnv() || hasDockerCGroup();
	}

	return isDocker;
};

var isWsl_1 = createCommonjsModule(function (module) {




const isWsl = () => {
	if (process.platform !== 'linux') {
		return false;
	}

	if (os__default['default'].release().toLowerCase().includes('microsoft')) {
		if (isDocker_1()) {
			return false;
		}

		return true;
	}

	try {
		return fs__default['default'].readFileSync('/proc/version', 'utf8').toLowerCase().includes('microsoft') ?
			!isDocker_1() : false;
	} catch (_) {
		return false;
	}
};

if (process.env.__IS_WSL_TEST__) {
	module.exports = isWsl;
} else {
	module.exports = isWsl();
}
});

const {promisify} = require$$0__default['default'];






const pAccess = promisify(fs__default['default'].access);
const pExecFile = promisify(child_process__default['default'].execFile);

// Path to included `xdg-open`.
const localXdgOpenPath = _path__default['default'].join(__dirname, 'xdg-open');

// Convert a path from WSL format to Windows format:
// `/mnt/c/Program Files/Example/MyApp.exe` → `C:\Program Files\Example\MyApp.exe`
const wslToWindowsPath = async path => {
	const {stdout} = await pExecFile('wslpath', ['-w', path]);
	return stdout.trim();
};

// Convert a path from Windows format to WSL format
const windowsToWslPath = async path => {
	const {stdout} = await pExecFile('wslpath', [path]);
	return stdout.trim();
};

// Get an environment variable from Windows
const wslGetWindowsEnvVar = async envVar => {
	const {stdout} = await pExecFile('wslvar', [envVar]);
	return stdout.trim();
};

var open = async (target, options) => {
	if (typeof target !== 'string') {
		throw new TypeError('Expected a `target`');
	}

	options = {
		wait: false,
		background: false,
		allowNonzeroExitCode: false,
		...options
	};

	let command;
	let {app} = options;
	let appArguments = [];
	const cliArguments = [];
	const childProcessOptions = {};

	if (Array.isArray(app)) {
		appArguments = app.slice(1);
		app = app[0];
	}

	if (process.platform === 'darwin') {
		command = 'open';

		if (options.wait) {
			cliArguments.push('--wait-apps');
		}

		if (options.background) {
			cliArguments.push('--background');
		}

		if (app) {
			cliArguments.push('-a', app);
		}
	} else if (process.platform === 'win32' || (isWsl_1 && !isDocker_1())) {
		const windowsRoot = isWsl_1 ? await wslGetWindowsEnvVar('systemroot') : process.env.SYSTEMROOT;
		command = String.raw`${windowsRoot}\System32\WindowsPowerShell\v1.0\powershell${isWsl_1 ? '.exe' : ''}`;
		cliArguments.push(
			'-NoProfile',
			'-NonInteractive',
			'–ExecutionPolicy',
			'Bypass',
			'-EncodedCommand'
		);

		if (isWsl_1) {
			command = await windowsToWslPath(command);
		} else {
			childProcessOptions.windowsVerbatimArguments = true;
		}

		const encodedArguments = ['Start'];

		if (options.wait) {
			encodedArguments.push('-Wait');
		}

		if (app) {
			if (isWsl_1 && app.startsWith('/mnt/')) {
				const windowsPath = await wslToWindowsPath(app);
				app = windowsPath;
			}

			// Double quote with double quotes to ensure the inner quotes are passed through.
			// Inner quotes are delimited for PowerShell interpretation with backticks.
			encodedArguments.push(`"\`"${app}\`""`, '-ArgumentList');
			appArguments.unshift(target);
		} else {
			encodedArguments.push(`"\`"${target}\`""`);
		}

		if (appArguments.length > 0) {
			appArguments = appArguments.map(arg => `"\`"${arg}\`""`);
			encodedArguments.push(appArguments.join(','));
		}

		// Using Base64-encoded command, accepted by PowerShell, to allow special characters.
		target = Buffer.from(encodedArguments.join(' '), 'utf16le').toString('base64');
	} else {
		if (app) {
			command = app;
		} else {
			// When bundled by Webpack, there's no actual package file path and no local `xdg-open`.
			const isBundled = !__dirname || __dirname === '/';

			// Check if local `xdg-open` exists and is executable.
			let exeLocalXdgOpen = false;
			try {
				await pAccess(localXdgOpenPath, fs__default['default'].constants.X_OK);
				exeLocalXdgOpen = true;
			} catch (_) {}

			const useSystemXdgOpen = process.versions.electron ||
				process.platform === 'android' || isBundled || !exeLocalXdgOpen;
			command = useSystemXdgOpen ? 'xdg-open' : localXdgOpenPath;
		}

		if (appArguments.length > 0) {
			cliArguments.push(...appArguments);
		}

		if (!options.wait) {
			// `xdg-open` will block the process unless stdio is ignored
			// and it's detached from the parent even if it's unref'd.
			childProcessOptions.stdio = 'ignore';
			childProcessOptions.detached = true;
		}
	}

	cliArguments.push(target);

	if (process.platform === 'darwin' && appArguments.length > 0) {
		cliArguments.push('--args', ...appArguments);
	}

	const subprocess = child_process__default['default'].spawn(command, cliArguments, childProcessOptions);

	if (options.wait) {
		return new Promise((resolve, reject) => {
			subprocess.once('error', reject);

			subprocess.once('close', exitCode => {
				if (options.allowNonzeroExitCode && exitCode > 0) {
					reject(new Error(`Exited with code ${exitCode}`));
					return;
				}

				resolve(subprocess);
			});
		});
	}

	subprocess.unref();

	return subprocess;
};

var Util = {
    getConfig: function (key) {
        if (key === void 0) { key = null; }
        if (key) {
            return atom.config.get(packageName + "." + key);
        }
        return atom.config.get("" + packageName);
    },
    openSettings: function () {
        var options = {
            pending: true,
            searchAllPanes: true
        };
        atom.workspace.open("atom://config/packages/" + packageName, options);
    },
    showANSIDeprecationWarning: function () {
        var notification = atom.notifications.addWarning('ANSI targets are deprecated as of NSIS v3.05, consider moving to Unicode', {
            dismissable: true,
            buttons: [
                {
                    text: "Unicode Installer",
                    className: "icon icon-search",
                    onDidClick: function () {
                        open('https://idleberg.github.io/NSIS.docset/Contents/Resources/Documents/html/Reference/Unicode.html?utm_source=atom');
                        notification.dismiss();
                    }
                },
                {
                    text: "Mute Warning",
                    className: "icon icon-gear",
                    onDidClick: function () {
                        atom.config.set(packageName + ".advanced.muteANSIDeprecationWarning", true);
                        notification.dismiss();
                    }
                }
            ]
        });
    },
    findErrors: function (textEditor, output) {
        var results = [];
        var resultsErr = /(?<message>.*)\r?\n.*rror in script:? "(?<file>.*)" on line (?<line>\d+)/.exec(output);
        if (resultsErr !== null) {
            results.push({
                severity: 'error',
                excerpt: resultsErr.groups.message,
                location: {
                    file: resultsErr.groups.file,
                    position: lib$8.generateRange(textEditor, parseInt(resultsErr.groups.line) - 1)
                }
            });
        }
        return results;
    },
    findWarnings: function (textEditor, output, options) {
        if (!this.getConfig('advanced.muteANSIDeprecationWarning') && output.includes('7998: ANSI targets are deprecated')) {
            this.showANSIDeprecationWarning();
        }
        var lines = output.split('\n');
        return lines.map(function (result) {
            var resultsWarn = (/warning: (?<message>.*) \((?<file>.*)?:(?<line>\d+)\)/).exec(result);
            var severity = options.strict
                ? 'error'
                : 'warning';
            if (resultsWarn) {
                return {
                    severity: severity,
                    excerpt: resultsWarn.groups.message,
                    location: {
                        file: resultsWarn.groups.file,
                        position: lib$8.generateRange(textEditor, parseInt(resultsWarn.groups.line) - 1)
                    }
                };
            }
        }).filter(function (item) { return item; });
    }
};

var linter = {
    config: configSchema,
    activate: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.subscriptions = new atom$1.CompositeDisposable;
                this.subscriptions.add(atom.commands.add('atom-workspace', {
                    'linter-MakeNSIS:open-settings': function () { return Util.openSettings(); }
                }));
                this.subscriptions.add(atom.commands.add('atom-workspace', {
                    'linter-MakeNSIS:satisfy-dependencies': function () { return lib$2.satisfyDependencies(packageName); }
                }));
                if (!atom.inSpecMode() && Util.getConfig('manageDependencies')) {
                    lib$2.satisfyDependencies(packageName);
                }
                this.cleanUp();
                return [2 /*return*/];
            });
        });
    },
    deactivate: function () {
        this.idleCallbacks.clear();
    },
    cleanUp: function () {
        atom.config.unset('linter-makensis.ppoMode');
    },
    provideLinter: function () {
        var _this = this;
        return {
            name: 'makensis',
            grammarScopes: ['source.nsis'],
            scope: 'file',
            lintsOnChange: false,
            lint: function (textEditor) { return __awaiter(_this, void 0, void 0, function () {
                var filePath, fileContents, preExecute, postExecute, useWine, options, outFile;
                return __generator(this, function (_a) {
                    filePath = textEditor.getPath();
                    fileContents = textEditor.getText();
                    preExecute = Util.getConfig('advanced.preExecute');
                    postExecute = Util.getConfig('advanced.postExecute');
                    useWine = os.platform() !== 'win32' && Util.getConfig('advanced.useWine')
                        ? true
                        : false;
                    options = {
                        preExecute: Array.isArray(preExecute)
                            ? preExecute
                            : [],
                        postExecute: Array.isArray(postExecute)
                            ? postExecute
                            : [],
                        PPO: null,
                        safePPO: null,
                        pathToMakensis: Util.getConfig('pathToMakensis'),
                        strict: Util.getConfig('strictMode'),
                        verbose: 2,
                        wine: useWine
                    };
                    outFile = os.platform() === 'win32'
                        ? 'OutFile NUL'
                        : 'OutFile /dev/null/';
                    switch (String(Util.getConfig('preprocessMode')).trim()) {
                        case 'PPO':
                            options.PPO = true;
                            break;
                        case 'Safe PPO':
                            options.safePPO = true;
                            break;
                        default:
                            options.postExecute.push(outFile);
                            break;
                    }
                    if (Util.getConfig("advanced.clearConsole")) {
                        console.clear();
                    }
                    return [2 /*return*/, makensis.compile(filePath, options)
                            .then(function (output) {
                            if (atom.inDevMode()) {
                                console.info("[" + packageName + "] Compiler Options:", options);
                                console.info("[" + packageName + "] Output:", output);
                            }
                            if (textEditor.getText() !== fileContents) {
                                if (atom.inDevMode()) {
                                    console.warn(packageName + "] File has changed since the lint was triggered");
                                }
                                return null;
                            }
                            var results = [];
                            if (output.stdout) {
                                var resultsWarn = Util.findWarnings(textEditor, output.stdout, options);
                                if (resultsWarn)
                                    results.push.apply(results, resultsWarn);
                            }
                            if (output.stderr) {
                                var resultsErr = Util.findErrors(textEditor, output.stderr);
                                if (resultsErr)
                                    results.push.apply(results, resultsErr);
                            }
                            if (results.length === 0)
                                return null;
                            return results;
                        })];
                });
            }); }
        };
    }
};

module.exports = linter;
//# sourceMappingURL=linter.js.map
