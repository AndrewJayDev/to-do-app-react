(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{13:function(t,e,o){},14:function(t,e,o){},16:function(t,e,o){"use strict";o.r(e);var c=o(1),n=o.n(c),s=o(7),a=o.n(s),l=(o(13),o(3)),i=(o(14),o(8)),d=o(0),r=function(t){var e=t.setStatus,o=t.setInputText,c=t.inputText,n=t.todos,s=t.setTodos;return Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{value:c,onChange:function(t){o(t.target.value)},type:"text",className:"todo-input"}),Object(d.jsx)("button",{class:"todo-button",type:"submit",onClick:function(t){t.preventDefault(),console.log(t),s([].concat(Object(i.a)(n),[{text:c,completed:!1,id:1e3*Math.random()}])),o("")},children:Object(d.jsx)("i",{class:"fas fa-plus-square"})}),Object(d.jsx)("div",{class:"select",children:Object(d.jsxs)("select",{onChange:function(t){console.log(t.target.value),e(t.target.value)},name:"todos",className:"filter-todo",children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"completed",children:"Completed"}),Object(d.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},u=o(6),j=function(t){var e=t.text,o=t.todo,c=t.todos,n=t.setTodos;return Object(d.jsxs)("div",{className:"todo",children:[Object(d.jsx)("li",{className:"todo-item ".concat(o.completed?"completed":""),children:e}),Object(d.jsx)("button",{onClick:function(){n(c.map((function(t){return t.id===o.id?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t})))},className:"complete-btn",children:Object(d.jsx)("i",{className:"fas fa-check"})}),Object(d.jsx)("button",{onClick:function(){n(c.filter((function(t){return t.id!==o.id})))},className:"trash-btn",children:Object(d.jsx)("i",{className:"fas fa-trash"})})]})},b=function(t){var e=t.todos,o=t.setTodos,c=t.filteredTodos;return Object(d.jsx)("div",{className:"todo-container",children:Object(d.jsx)("ul",{className:"todo-list",children:c.map((function(t){return Object(d.jsx)(j,{setTodos:o,todos:e,text:t.text,todo:t},t.id)}))})})};var f=function(){var t=Object(c.useState)(""),e=Object(l.a)(t,2),o=e[0],n=e[1],s=Object(c.useState)([]),a=Object(l.a)(s,2),i=a[0],u=a[1],j=Object(c.useState)("all"),f=Object(l.a)(j,2),p=f[0],O=f[1],m=Object(c.useState)([]),x=Object(l.a)(m,2),h=x[0],g=x[1];Object(c.useEffect)((function(){T()}),[]),Object(c.useEffect)((function(){v(),S()}),[i,p]);var v=function(){switch(p){case"completed":g(i.filter((function(t){return 1==t.completed})));break;case"uncompleted":g(i.filter((function(t){return 0==t.completed})));break;default:g(i)}},S=function(){localStorage.setItem("todos",JSON.stringify(i))},T=function(){if(null==localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));u(t)}};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{children:Object(d.jsx)("h1",{children:"Andrew's Todo list"})}),Object(d.jsx)(r,{inputText:o,todos:i,setTodos:u,setInputText:n,setStatus:O}),Object(d.jsx)(b,{filteredTodos:h,setTodos:u,todos:i})]})},p=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,17)).then((function(e){var o=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,a=e.getTTFB;o(t),c(t),n(t),s(t),a(t)}))};a.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.f6567b02.chunk.js.map