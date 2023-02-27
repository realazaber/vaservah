"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=227,exports.ids=[227],exports.modules={84227:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ContactModule:()=>ContactModule});var common=__webpack_require__(89318),router=__webpack_require__(14195),core=__webpack_require__(40305);class ContactComponent{}__name(ContactComponent,"ContactComponent"),ContactComponent.\u0275fac=__name(function(t){return new(t||ContactComponent)},"ContactComponent_Factory"),ContactComponent.\u0275cmp=core.Xpm({type:ContactComponent,selectors:[["app-contact"]],decls:23,vars:0,consts:[[1,"py-3"],[1,"flex","justify-between","flex-col","tablet:flex-row"],[1,"tablet:w-[50%]","w-full"],["action","https://formspree.io/f/xeqwgdyq","method","POST",1,"flex","flex-col"],["type","text","name","name","required",""],["type","email","name","email"],["rows","5","name","message","required",""],["type","submit",1,"my-3","pt-3","bg-slate-800","border-[3px]","font-bold","rounded-md","w-28","h-16","flex","justify-center","mx-auto"],[1,"w-full","tablet:w-[40%]"],["src","../../../favicon.ico","alt","test",1,"w-96","h-96","object-cover"]],template:__name(function(rf,ctx){1&rf&&(core.TgZ(0,"div")(1,"h2"),core._uU(2,"Contact us!"),core.qZA(),core.TgZ(3,"p",0),core._uU(4," If you have any questions, queries or just want to say hi feel free to fill in this form :) "),core._UZ(5,"br"),core._uU(6,"If you want a reply please make sure to include your email. "),core.qZA(),core.TgZ(7,"div",1)(8,"div",2)(9,"form",3)(10,"label"),core._uU(11," Name *: "),core.qZA(),core._UZ(12,"input",4),core.TgZ(13,"label"),core._uU(14," Email: "),core._UZ(15,"input",5),core.qZA(),core.TgZ(16,"label"),core._uU(17," Message *: "),core._UZ(18,"textarea",6),core.qZA(),core.TgZ(19,"button",7),core._uU(20," Send "),core.qZA()()(),core.TgZ(21,"div",8),core._UZ(22,"img",9),core.qZA()()())},"ContactComponent_Template")});const routes=[{path:"",component:ContactComponent}];class ContactRoutingModule{}__name(ContactRoutingModule,"ContactRoutingModule"),ContactRoutingModule.\u0275fac=__name(function(t){return new(t||ContactRoutingModule)},"ContactRoutingModule_Factory"),ContactRoutingModule.\u0275mod=core.oAB({type:ContactRoutingModule}),ContactRoutingModule.\u0275inj=core.cJS({imports:[router.Bz.forChild(routes),router.Bz]});class ContactModule{}__name(ContactModule,"ContactModule"),ContactModule.\u0275fac=__name(function(t){return new(t||ContactModule)},"ContactModule_Factory"),ContactModule.\u0275mod=core.oAB({type:ContactModule}),ContactModule.\u0275inj=core.cJS({imports:[common.ez,ContactRoutingModule]})}};