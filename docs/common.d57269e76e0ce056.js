"use strict";(self.webpackChunkpizza=self.webpackChunkpizza||[]).push([[592],{2592:(l,r,o)=>{o.d(r,{R:()=>n});var t=o(5879),i=o(7555);const u=["popup"];function c(e,p){if(1&e&&(t.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"h5",5),t._uU(5,"Modal title"),t.qZA(),t._UZ(6,"button",6),t.qZA(),t.TgZ(7,"div",7)(8,"p"),t._uU(9),t.qZA()(),t.TgZ(10,"div",8)(11,"button",9),t._uU(12," Close "),t.qZA(),t.TgZ(13,"button",10),t._uU(14,"Save changes"),t.qZA()()()()()),2&e){const a=t.oxw();t.xp6(9),t.Oqu(a.data)}}let n=(()=>{class e{constructor(a){this.modalService=a,this.data=""}open(){this.modalService.open(this.popup)}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(i.FF))};static#o=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-popup"]],viewQuery:function(s,d){if(1&s&&t.Gf(u,5),2&s){let _;t.iGM(_=t.CRH())&&(d.popup=_.first)}},inputs:{data:"data"},decls:2,vars:0,consts:[["popup",""],["tabindex","-1","id","myModal",1,""],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["type","button",1,"btn","btn-primary"]],template:function(s,d){1&s&&t.YNc(0,c,15,1,"ng-template",null,0,t.W1O)},encapsulation:2})}return e})()},7942:(l,r,o)=>{o.d(r,{M:()=>c});var t=o(553),i=o(5879),u=o(9862);let c=(()=>{class n{constructor(p){this.http=p,this.products=[]}getProducts(){return this.http.get(t.N.apiURL+"pizzas")}getProduct(p){return this.http.get(t.N.apiURL+`pizzas?id=${p}`)}createOrder(p){return this.http.post(t.N.apiURL+"order-pizza",p)}static#t=this.\u0275fac=function(a){return new(a||n)(i.LFG(u.eN))};static#o=this.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()}}]);