import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e=document.querySelector(".feedback-form"),a="feedback-form-state";e.addEventListener("input",t=>{const r=e.email.value.trim(),m=e.message.value.trim(),l={email:r,message:m};localStorage.setItem(a,JSON.stringify(l))});const s=localStorage.getItem(a);if(s){const t=JSON.parse(s);e.email.value=t.email||"",e.message.value=t.message||""}e.addEventListener("submit",t=>{if(t.preventDefault(),!e.email.value.trim()||!e.message.value.trim()){alert("Всі поля повинні бути заповнені");return}console.table(JSON.parse(localStorage.getItem(a))),localStorage.removeItem(a),e.reset()});
//# sourceMappingURL=commonHelpers2.js.map
