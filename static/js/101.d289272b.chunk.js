(window["webpackJsonp@uiw/react-baidu-map"]=window["webpackJsonp@uiw/react-baidu-map"]||[]).push([[101],{681:function(e,n,t){!function(e){"use strict";e.defineMode("sieve",(function(e){function n(e){for(var n={},t=e.split(" "),i=0;i<t.length;++i)n[t[i]]=!0;return n}var t=n("if elsif else stop require"),i=n("true false not"),r=e.indentUnit;function u(e,n){var r,l=e.next();if("/"==l&&e.eat("*"))return n.tokenize=a,a(e,n);if("#"===l)return e.skipToEnd(),"comment";if('"'==l)return n.tokenize=(r=l,function(e,n){for(var t,i=!1;null!=(t=e.next())&&(t!=r||i);)i=!i&&"\\"==t;return i||(n.tokenize=u),"string"}),n.tokenize(e,n);if("("==l)return n._indent.push("("),n._indent.push("{"),null;if("{"===l)return n._indent.push("{"),null;if(")"==l&&(n._indent.pop(),n._indent.pop()),"}"===l)return n._indent.pop(),null;if(","==l)return null;if(";"==l)return null;if(/[{}\(\),;]/.test(l))return null;if(/\d/.test(l))return e.eatWhile(/[\d]/),e.eat(/[KkMmGg]/),"number";if(":"==l)return e.eatWhile(/[a-zA-Z_]/),e.eatWhile(/[a-zA-Z0-9_]/),"operator";e.eatWhile(/\w/);var f=e.current();return"text"==f&&e.eat(":")?(n.tokenize=o,"string"):t.propertyIsEnumerable(f)?"keyword":i.propertyIsEnumerable(f)?"atom":null}function o(e,n){return n._multiLineString=!0,e.sol()?("."==e.next()&&e.eol()&&(n._multiLineString=!1,n.tokenize=u),"string"):(e.eatSpace(),"#"==e.peek()?(e.skipToEnd(),"comment"):(e.skipToEnd(),"string"))}function a(e,n){for(var t,i=!1;null!=(t=e.next());){if(i&&"/"==t){n.tokenize=u;break}i="*"==t}return"comment"}return{startState:function(e){return{tokenize:u,baseIndent:e||0,_indent:[]}},token:function(e,n){return e.eatSpace()?null:(n.tokenize||u)(e,n)},indent:function(e,n){var t=e._indent.length;return n&&"}"==n[0]&&t--,t<0&&(t=0),t*r},electricChars:"}"}})),e.defineMIME("application/sieve","sieve")}(t(30))}}]);
//# sourceMappingURL=101.d289272b.chunk.js.map