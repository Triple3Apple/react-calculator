(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{423:function(e,t,c){},425:function(e,t,c){"use strict";c.r(t);c(188),c(133),c(238);var n=c(24),o=c.n(n),r=c(187),a=c.n(r),s=(c(423),c(50)),l=c(1),i=function(e){var t=e.onThemeChange,c=e.currTheme;return Object(l.jsxs)("div",{className:"theme-selector",children:[Object(l.jsx)("h3",{className:"theme-text ".concat("normal-text-theme"+c),children:"THEME"}),Object(l.jsxs)("div",{className:"selector-container",children:[Object(l.jsxs)("div",{className:"numbers ".concat("normal-text-theme"+c),children:[Object(l.jsx)("h3",{children:"1"}),Object(l.jsx)("h3",{children:"2"}),Object(l.jsx)("h3",{children:"3"})]}),Object(l.jsxs)("div",{className:"selector ".concat("calc-buttons-theme"+c),children:[Object(l.jsx)("div",{className:"theme-selection theme-selection1",onClick:function(){return t(1)},style:{opacity:"".concat(1===c?"100":"0")}}),Object(l.jsx)("div",{className:"theme-selection theme-selection2",onClick:function(){return t(2)},style:{opacity:"".concat(2===c?"100":"0")}}),Object(l.jsx)("div",{className:"theme-selection theme-selection3",onClick:function(){return t(3)},style:{opacity:"".concat(3===c?"100":"0")}})]})]})]})},h=function(e){var t=e.onThemeChange,c=e.currTheme;return Object(l.jsxs)("header",{className:"header-container",children:[Object(l.jsx)("h1",{id:"app-name",className:"normal-text-theme"+c,children:"calc"}),Object(l.jsx)(i,{onThemeChange:t,currTheme:c})]})},u=function(e){var t=e.currTheme,c=e.displayText;return Object(l.jsx)("div",{className:"calc-display ".concat("calc-display-theme"+t),children:Object(l.jsx)("h4",{id:"display",className:"".concat("normal-text-theme"+t),children:c})})},j=function(e){var t=e.text,c=e.wideButtonType,n=e.currTheme,o=e.onButtonClick;return Object(l.jsx)(l.Fragment,{children:1===c?Object(l.jsx)("div",{onClick:function(){return o(t)},className:"button two-grid-button1 ".concat("dif-color-theme".concat(n,"-key1")," \n          }"),children:Object(l.jsx)("p",{children:t})}):2===c?Object(l.jsx)("div",{onClick:function(){return o(t)},className:"button two-grid-button2 ".concat("dif-color-theme".concat(n,"-key2")," \n          }"),children:Object(l.jsx)("p",{children:t})}):Object(l.jsx)("div",{onClick:function(){return o(t)},className:"button ".concat(1===n?"normal-btn-text-theme1":"normal-text-theme"+n," ").concat("DEL"===t?"white-text ".concat("dif-color-theme".concat(n,"-key1")):""," ").concat("btn-theme"+n),children:Object(l.jsx)("p",{children:t})})})},x=function(e){var t=e.currTheme,c=e.onDisplayTextChange,o=Object(n.useState)([{inputType:1,inputVal:0}]),r=Object(s.a)(o,2),a=(r[0],r[1],Object(n.useState)("0")),i=Object(s.a)(a,2),h=(i[0],i[1]),u=Object(n.useState)("0"),x=Object(s.a)(u,2),b=x[0],m=x[1],d=function(e){console.log("doButtonActions called");var t;switch(t=g(e),e){case"DEL":if(b.length>0){var c=b.substring(0,b.length-1);return h(c),m(c)}break;case"RESET":return p();case"=":var n=b,o=T(b);if(o===n)return;return h(o),m(o)}if((!O(b)||!0!==t)&&(0!==Number(b)||!t)&&("0"!==b||"0"!==e)){if(0===Number(b))return m(e);console.log("updated display text"),m(b.toString()+e.toString()),t&&h("0")}},O=function(e){var t=!1;if(e.length>0){var c=e.charAt(e.length-1);t=g(c)}return t},g=function(e){var t=!1;switch(e){case"+":case"-":case"x":case"/":t=!0}return t},T=function(e){var t=0,c=e.split(/[+-/x]/),n=e.split(/[1234567890.\s]+/);n=n.filter((function(e){return e}));var o=e.split(/((?:^-)?[0-9\.]+)/g);if(o=o.filter((function(e){return e})),console.log(c),console.log(n),console.log(o),o.length<3)return e;var r=0;t=Number(o[0]);for(var a=0;a<o.length;a++)if(console.log("inside for looooop"),a%2===0){if(console.log("number: ".concat(o[a])),a>=2){var s=n[r];switch(s){case"+":t+=Number(o[a]),console.log("Adding ".concat(t," + ").concat(o[a]));break;case"-":t-=Number(o[a]),console.log("Subtracting ".concat(t," - ").concat(o[a]));break;case"x":t*=Number(o[a]);break;case"/":t/=Number(o[a]);break;default:console.log("default reached: ".concat(s))}r++}}else console.log("symbol: ".concat(o[a]));return console.log("Solution = ".concat(t)),t},p=function(){m("0"),h("0")};return Object(n.useEffect)((function(){c(b),console.log("useEffect for displayText called!!!!!!")}),[b]),Object(l.jsxs)("div",{className:"calc-buttons ".concat("calc-buttons-theme"+t),children:[Object(l.jsx)(j,{text:7,currTheme:t,onDisplayTextChange:c,onButtonClick:d}),Object(l.jsx)(j,{text:8,currTheme:t,onDisplayTextChange:c,onButtonClick:d}),Object(l.jsx)(j,{text:9,currTheme:t,onDisplayTextChange:c,onButtonClick:d}),Object(l.jsx)(j,{text:"DEL",currTheme:t,onDisplayTextChange:c,onButtonClick:d}),Object(l.jsx)(j,{text:4,currTheme:t,onDisplayTextChange:c,onButtonClick:d}),Object(l.jsx)(j,{text:5,currTheme:t,onDisplayTextChange:c,onButtonClick:d}),Object(l.jsx)(j,{text:6,currTheme:t,onDisplayTextChange:c,onButtonClick:d}),Object(l.jsx)(j,{text:"+",currTheme:t,onDisplayTextChange:c,onButtonClick:d}),Object(l.jsx)(j,{text:1,currTheme:t,onDisplayTextChange:c,onButtonClick:d}),Object(l.jsx)(j,{text:2,currTheme:t,onDisplayTextChange:c,onButtonClick:d}),Object(l.jsx)(j,{text:3,currTheme:t,onDisplayTextChange:c,onButtonClick:d}),Object(l.jsx)(j,{text:"-",currTheme:t,onDisplayTextChange:c,onButtonClick:d}),Object(l.jsx)(j,{text:".",currTheme:t,onDisplayTextChange:c,onButtonClick:d}),Object(l.jsx)(j,{text:0,currTheme:t,onDisplayTextChange:c,onButtonClick:d}),Object(l.jsx)(j,{text:"/",currTheme:t,onDisplayTextChange:c,onButtonClick:d}),Object(l.jsx)(j,{text:"x",currTheme:t,onDisplayTextChange:c,onButtonClick:d}),Object(l.jsx)(j,{text:"RESET",wideButtonType:1,currTheme:t,onDisplayTextChange:c,onButtonClick:d}),Object(l.jsx)(j,{text:"=",wideButtonType:2,currTheme:t,onDisplayTextChange:c,onButtonClick:d})]})},b=function(){return Object(l.jsx)("div",{className:"attribution",children:Object(l.jsxs)("p",{children:["Challenge by\xa0",Object(l.jsx)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",rel:"noopener noreferrer",children:"Frontend Mentor"}),". Coded by\xa0",Object(l.jsx)("a",{href:"https://www.abrarakhand.com/",target:"_blank",rel:"noopener noreferrer",children:"Abrar Akhand"}),"."]})})},m=c.p+"static/media/1280px-React-icon.73ac128a.png",d=function(e){var t=e.currTheme;return Object(l.jsxs)("div",{className:"react-info-div ".concat("calc-buttons-theme"+t," ").concat("normal-text-theme"+t," ").concat("react-info-div-theme"+t),children:[Object(l.jsx)("a",{href:"https://reactjs.org/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:m,alt:"text",width:"90px",height:"60px"})}),Object(l.jsx)("h4",{children:"Made with React"})]})};var O=function(){var e=Object(n.useState)(1),t=Object(s.a)(e,2),c=t[0],o=t[1],r=Object(n.useState)("0"),a=Object(s.a)(r,2),i=a[0],j=a[1];return Object(l.jsxs)("div",{className:"calc-root ".concat("calc-root-theme"+c),children:[Object(l.jsx)(d,{currTheme:c}),Object(l.jsxs)("div",{className:"calculator-container",children:[Object(l.jsx)(h,{onThemeChange:function(e){e<1||e>3||(console.log("received theme num: ".concat(e)),o(e))},currTheme:c}),Object(l.jsx)(u,{currTheme:c,displayText:i}),Object(l.jsx)(x,{currTheme:c,onDisplayTextChange:function(e){console.log("obtained text: ".concat(e)),j(e)}})]}),Object(l.jsx)(b,{})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,426)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),o(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),g()}},[[425,1,2]]]);
//# sourceMappingURL=main.ffdb2993.chunk.js.map