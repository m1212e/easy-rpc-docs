import{w as i}from"./index-f788e8b8.js";const r=i([]);function c(s){const e=[];s.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(t=>{const n={type:t.tagName,text:t.textContent,id:t.getAttribute("id"),selected:!1};e.push(n)}),r.set(e)}let o;function f(s){r.update(e=>{{const t=e.find(n=>n==o);t&&(t.selected=!1)}{const t=e.find(n=>n.id==s);t&&(t.selected=!0,o=t)}return e})}export{c as a,f as s,r as t};
