(window["webpackJsonp@uiw/react-baidu-map"]=window["webpackJsonp@uiw/react-baidu-map"]||[]).push([[71],{650:function(e,t,n){!function(e){"use strict";e.defineMode("livescript",(function(){var e=function(e,t){var n=t.next||"start";if(n){t.next=t.next;var r=g[n];if(r.splice){for(var o=0;o<r.length;++o){var x=r[o];if(x.regex&&e.match(x.regex))return t.next=x.next||t.next,x.token}return e.next(),"error"}if(e.match(x=g[n]))return x.regex&&e.match(x.regex)?(t.next=x.next,x.token):(e.next(),"error")}return e.next(),"error"};return{startState:function(){return{next:"start",lastToken:{style:null,indent:0,content:""}}},token:function(t,n){for(;t.pos==t.start;)var r=e(t,n);return n.lastToken={style:r,indent:t.indentation(),content:t.current()},r.replace(/\./g," ")},indent:function(e){var t=e.lastToken.indent;return e.lastToken.content.match(n)&&(t+=2),t}}}));var t="(?![\\d\\s])[$\\w\\xAA-\\uFFDC](?:(?!\\s)[$\\w\\xAA-\\uFFDC]|-[A-Za-z])*",n=RegExp("(?:[({[=:]|[-~]>|\\b(?:e(?:lse|xport)|d(?:o|efault)|t(?:ry|hen)|finally|import(?:\\s*all)?|const|var|let|new|catch(?:\\s*"+t+")?))\\s*$"),r="(?![$\\w]|-[A-Za-z]|\\s*:(?![:=]))",o={token:"string",regex:".+"},g={start:[{token:"comment.doc",regex:"/\\*",next:"comment"},{token:"comment",regex:"#.*"},{token:"keyword",regex:"(?:t(?:h(?:is|row|en)|ry|ypeof!?)|c(?:on(?:tinue|st)|a(?:se|tch)|lass)|i(?:n(?:stanceof)?|mp(?:ort(?:\\s+all)?|lements)|[fs])|d(?:e(?:fault|lete|bugger)|o)|f(?:or(?:\\s+own)?|inally|unction)|s(?:uper|witch)|e(?:lse|x(?:tends|port)|val)|a(?:nd|rguments)|n(?:ew|ot)|un(?:less|til)|w(?:hile|ith)|o[fr]|return|break|let|var|loop)"+r},{token:"constant.language",regex:"(?:true|false|yes|no|on|off|null|void|undefined)"+r},{token:"invalid.illegal",regex:"(?:p(?:ackage|r(?:ivate|otected)|ublic)|i(?:mplements|nterface)|enum|static|yield)"+r},{token:"language.support.class",regex:"(?:R(?:e(?:gExp|ferenceError)|angeError)|S(?:tring|yntaxError)|E(?:rror|valError)|Array|Boolean|Date|Function|Number|Object|TypeError|URIError)"+r},{token:"language.support.function",regex:"(?:is(?:NaN|Finite)|parse(?:Int|Float)|Math|JSON|(?:en|de)codeURI(?:Component)?)"+r},{token:"variable.language",regex:"(?:t(?:hat|il|o)|f(?:rom|allthrough)|it|by|e)"+r},{token:"identifier",regex:t+"\\s*:(?![:=])"},{token:"variable",regex:t},{token:"keyword.operator",regex:"(?:\\.{3}|\\s+\\?)"},{token:"keyword.variable",regex:"(?:@+|::|\\.\\.)",next:"key"},{token:"keyword.operator",regex:"\\.\\s*",next:"key"},{token:"string",regex:"\\\\\\S[^\\s,;)}\\]]*"},{token:"string.doc",regex:"'''",next:"qdoc"},{token:"string.doc",regex:'"""',next:"qqdoc"},{token:"string",regex:"'",next:"qstring"},{token:"string",regex:'"',next:"qqstring"},{token:"string",regex:"`",next:"js"},{token:"string",regex:"<\\[",next:"words"},{token:"string.regex",regex:"//",next:"heregex"},{token:"string.regex",regex:"\\/(?:[^[\\/\\n\\\\]*(?:(?:\\\\.|\\[[^\\]\\n\\\\]*(?:\\\\.[^\\]\\n\\\\]*)*\\])[^[\\/\\n\\\\]*)*)\\/[gimy$]{0,4}",next:"key"},{token:"constant.numeric",regex:"(?:0x[\\da-fA-F][\\da-fA-F_]*|(?:[2-9]|[12]\\d|3[0-6])r[\\da-zA-Z][\\da-zA-Z_]*|(?:\\d[\\d_]*(?:\\.\\d[\\d_]*)?|\\.\\d[\\d_]*)(?:e[+-]?\\d[\\d_]*)?[\\w$]*)"},{token:"lparen",regex:"[({[]"},{token:"rparen",regex:"[)}\\]]",next:"key"},{token:"keyword.operator",regex:"\\S+"},{token:"text",regex:"\\s+"}],heregex:[{token:"string.regex",regex:".*?//[gimy$?]{0,4}",next:"start"},{token:"string.regex",regex:"\\s*#{"},{token:"comment.regex",regex:"\\s+(?:#.*)?"},{token:"string.regex",regex:"\\S+"}],key:[{token:"keyword.operator",regex:"[.?@!]+"},{token:"identifier",regex:t,next:"start"},{token:"text",regex:"",next:"start"}],comment:[{token:"comment.doc",regex:".*?\\*/",next:"start"},{token:"comment.doc",regex:".+"}],qdoc:[{token:"string",regex:".*?'''",next:"key"},o],qqdoc:[{token:"string",regex:'.*?"""',next:"key"},o],qstring:[{token:"string",regex:"[^\\\\']*(?:\\\\.[^\\\\']*)*'",next:"key"},o],qqstring:[{token:"string",regex:'[^\\\\"]*(?:\\\\.[^\\\\"]*)*"',next:"key"},o],js:[{token:"string",regex:"[^\\\\`]*(?:\\\\.[^\\\\`]*)*`",next:"key"},o],words:[{token:"string",regex:".*?\\]>",next:"key"},o]};for(var x in g){var a=g[x];if(a.splice)for(var i=0,s=a.length;i<s;++i){var k=a[i];"string"===typeof k.regex&&(g[x][i].regex=new RegExp("^"+k.regex))}else"string"===typeof k.regex&&(g[x].regex=new RegExp("^"+a.regex))}e.defineMIME("text/x-livescript","livescript")}(n(30))}}]);
//# sourceMappingURL=71.ce7b3890.chunk.js.map