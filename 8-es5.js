function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{rCTE:function(e,n,t){"use strict";t.r(n);var o,r=t("tyNb"),i=t("PCNd"),a=t("fXoL"),c=t("Q4r4"),b=((o=function(){function e(n,t){_classCallCheck(this,e),this._cookieService=n,this._router=t}return _createClass(e,[{key:"ngOnInit",value:function(){var e=JSON.parse(this._cookieService.readCookie("storage",!0));this.user=e.user}},{key:"logout",value:function(){this._cookieService.eraseCookie(["storage"]),this._router.navigate(["/login"])}}]),e}()).\u0275fac=function(e){return new(e||o)(a.Jb(c.a),a.Jb(r.a))},o.\u0275cmp=a.Db({type:o,selectors:[["app-profile"]],decls:19,vars:1,consts:[[1,"card"],[1,"title"],[2,"margin","24px 0"],["href","#"],[1,"fa","fa-dribbble"],[1,"fa","fa-twitter"],[1,"fa","fa-linkedin"],[1,"fa","fa-facebook"],[3,"click"]],template:function(e,n){1&e&&(a.Ob(0,"div",0),a.Ob(1,"h1"),a.bc(2),a.Nb(),a.Ob(3,"p",1),a.bc(4,"Welcome to Dev App"),a.Nb(),a.Ob(5,"p"),a.bc(6,"Thank you"),a.Nb(),a.Ob(7,"div",2),a.Ob(8,"a",3),a.Kb(9,"i",4),a.Nb(),a.Ob(10,"a",3),a.Kb(11,"i",5),a.Nb(),a.Ob(12,"a",3),a.Kb(13,"i",6),a.Nb(),a.Ob(14,"a",3),a.Kb(15,"i",7),a.Nb(),a.Nb(),a.Ob(16,"p"),a.Ob(17,"button",8),a.Vb("click",(function(){return n.logout()})),a.bc(18,"Logout"),a.Nb(),a.Nb(),a.Nb()),2&e&&(a.zb(2),a.cc("Hi ",n.user.email,","))},styles:[".card[_ngcontent-%COMP%]{box-shadow:0 4px 8px 0 rgba(0,0,0,.2);margin:auto;text-align:center;font-family:arial;padding:20px}.title[_ngcontent-%COMP%]{color:grey}.title[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{font-size:18px}button[_ngcontent-%COMP%]{border:none;outline:0;display:inline-block;padding:8px;color:#fff;background-color:#000;text-align:center;cursor:pointer;width:100%}a[_ngcontent-%COMP%]{text-decoration:none;font-size:22px;color:#000}a[_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:hover{opacity:.7}"]}),o),l=t("W7mc"),s=t("IQjv"),u=t("P4YG");t.d(n,"BOOT_ROUTES",(function(){return p})),t.d(n,"ProfileModule",(function(){return d}));var f,p=[{path:"",component:b}],d=((f=function e(){_classCallCheck(this,e)}).\u0275mod=a.Hb({type:f}),f.\u0275inj=a.Gb({factory:function(e){return new(e||f)},providers:[],imports:[[r.b.forChild(p),i.a,l.a,s.a,u.a]]}),f)}}]);