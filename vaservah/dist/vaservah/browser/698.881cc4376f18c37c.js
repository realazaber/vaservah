"use strict";(self.webpackChunkvaservah=self.webpackChunkvaservah||[]).push([[698],{3698:(u,m,n)=>{n.r(m),n.d(m,{HomeModule:()=>l});var i=n(6895),s=n(6237),e=n(8256),h=n(463),g=n(1481);const p=[{path:"",component:(()=>{class t{constructor(o,r){this.pagesService=o,this.meta=r,this.homePgraph="Home content",this.homeBannerImg="pathtobanner",this.homeBannerImgAlt="Alt text"}ngOnInit(){this.pagesService.getPageData("24").subscribe(o=>{this.homePgraph=o.content.rendered,this.homeBannerImgAlt=o.better_featured_image.alt_text,this.homeBannerImg=o.better_featured_image.media_details.sizes.large.source_url,this.meta.updateTag({name:"title",content:"Vaservah Blog"}),this.meta.updateTag({name:"description",content:this.homePgraph.toString()}),this.meta.updateTag({property:"og:title",content:"Vaservah Blog"}),this.meta.updateTag({property:"og:description",content:this.homePgraph.toString()}),this.meta.updateTag({property:"og:image",content:this.homeBannerImg.toString()})})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(h.E),e.Y36(g.h_))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],decls:4,vars:3,consts:[[1,"w-full","h-96","object-cover","mt-[-3rem]",3,"src","alt"],[1,"py-3",3,"innerHTML"]],template:function(o,r){1&o&&(e.TgZ(0,"div")(1,"div"),e._UZ(2,"img",0),e.qZA(),e._UZ(3,"div",1),e.qZA()),2&o&&(e.xp6(2),e.s9C("src",r.homeBannerImg,e.LSH),e.s9C("alt",r.homeBannerImgAlt),e.xp6(1),e.Q6J("innerHTML",r.homePgraph,e.oJD))}}),t})()}];let c=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.Bz.forChild(p),s.Bz]}),t})(),l=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[i.ez,c]}),t})()}}]);