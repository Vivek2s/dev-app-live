function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{yus8:function(e,t,n){"use strict";n.r(t);var o=n("tyNb"),i=n("PCNd"),r=n("fXoL");function s(e,t,n,o){return new(n||(n=Promise))((function(i,r){function s(e){try{l(o.next(e))}catch(t){r(t)}}function a(e){try{l(o.throw(e))}catch(t){r(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((o=o.apply(e,t||[])).next())}))}var a,l,c,u=n("3Pt+"),g=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"emailFormat",value:function(e){return""!==e.value&&(e.value.length<=5||!/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i.test(e.value))?{emailFormat:!0}:null}},{key:"passwordCompared",value:function(e){var t=e.get("password"),n=e.get("confirmPassword");return t.pristine||n.pristine?null:t.value==n.value?null:{match:!0}}},{key:"emailFormatInput",value:function(e){return""!==e&&(e.length<=5||!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(e))||null}},{key:"passwordFormatCheck",value:function(e){return/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/i.test(e.value)?null:{pwdFormat:!0}}},{key:"noWhitespaceValidator",value:function(e){var t=e.value?e.value.toString():"";return/^\s+$/.test(t)?{whitespace:!0}:null}}]),e}(),p=n("Q4r4"),d=n("UaYs"),b=n("ofXK"),m=function(e){return{progress:e}},f=((a=function(){function e(t,n,o,i,r){_classCallCheck(this,e),this._fb=t,this._cookieService=n,this._router=o,this.zone=i,this._signupLoginService=r,this.buttonText="",this.isError=!1,this.errorMessage="",this.isDisabled=!1}return _createClass(e,[{key:"ngOnInit",value:function(){this.initRegisterForm()}},{key:"signup",value:function(){jQuery("#signup-form").removeClass("slide-up"),jQuery("#login-form").addClass("slide-up")}},{key:"initRegisterForm",value:function(){this.registerForm=this._fb.group({username:["",u.j.compose([u.j.required,g.emailFormat])],passwordGroup:this._fb.group({password:["",[u.j.required,g.noWhitespaceValidator,g.passwordFormatCheck]],confirmPassword:["",[u.j.required,g.noWhitespaceValidator,g.passwordFormatCheck]]},{validator:g.passwordCompared})})}},{key:"getError",value:function(){var e,t,n,o,i="Please fill up all the fields";!this.registerForm.get("username").touched||this.registerForm.get("username").touched&&!this.registerForm.get("username").valid&&!(null===(e=this.registerForm.get("username").errors)||void 0===e?void 0:e.emailFormat)?i="Please enter your email":(null===(t=this.registerForm.get("username").errors)||void 0===t?void 0:t.emailFormat)?i="Email should be valid":!this.registerForm.get("passwordGroup").get("password").touched||this.registerForm.get("passwordGroup").get("password").touched&&""==this.registerForm.get("passwordGroup").get("password").value.trim()?i="Please enter your password":(null===(n=this.registerForm.get("passwordGroup").get("password").errors)||void 0===n?void 0:n.pwdFormat)?i="Minimum six characters, at least one letter and one number":!this.registerForm.get("passwordGroup").get("confirmPassword").touched||this.registerForm.get("passwordGroup").get("confirmPassword").touched&&""==this.registerForm.get("passwordGroup").get("confirmPassword").value.trim()?i="Please enter confirm password":(null===(o=this.registerForm.get("passwordGroup").errors)||void 0===o?void 0:o.match)&&(i="Password & Confirm Password does not match"),console.log("testtetttttt",this.registerForm.get("passwordGroup").get("password").errors),window.toastNotification(i)}},{key:"onSignup",value:function(){var e=this;if(console.log(this.registerForm),!this.registerForm.valid)return this.getError(),!0;var t=this.makeData(this.registerForm.value);console.log(t),this.isDisabled=!0,this._signupLoginService.register(t).subscribe((function(t){return s(e,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.access_token&&this.successLoginReq(t);case 1:case"end":return e.stop()}}),e,this)})))}),(function(t){e.errorMessage=t&&t.error?t.error.message:"Server Error",console.log(t),window.toastNotification(e.errorMessage),e.isDisabled=!1}))}},{key:"makeData",value:function(e){return{username:e.username,password:e.passwordGroup.password,grant_type:"password"}}},{key:"successLoginReq",value:function(e){return s(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{this._cookieService.createCookie("storage",{token:e.access_token,user:e.user},e.expires_in,"object"),this.zone.run((function(){return n._router.navigate(["/profile"])})),this.isDisabled=!1}catch(o){console.log(o)}case 1:case"end":return t.stop()}}),t,this)})))}}]),e}()).\u0275fac=function(e){return new(e||a)(r.Jb(u.b),r.Jb(p.a),r.Jb(o.a),r.Jb(r.z),r.Jb(d.a))},a.\u0275cmp=r.Db({type:a,selectors:[["app-signup"]],decls:12,vars:5,consts:[["id","signup-form","autocomplete","off",1,"signup","slide-up",3,"formGroup"],["id","signup",1,"form-title",3,"click"],[1,"form-holder"],["type","email","placeholder","Email","formControlName","username",1,"input"],["formGroupName","passwordGroup"],["type","password","placeholder","Confirm Password","formControlName","password",1,"input"],["type","password","placeholder","Password","formControlName","confirmPassword",1,"input"],[1,"submit-btn",3,"ngClass","disabled","click"]],template:function(e,t){1&e&&(r.Ob(0,"div",0),r.Ob(1,"h2",1),r.Vb("click",(function(){return t.signup()})),r.Ob(2,"span"),r.cc(3,"or"),r.Nb(),r.cc(4,"Sign up"),r.Nb(),r.Ob(5,"div",2),r.Kb(6,"input",3),r.Mb(7,4),r.Kb(8,"input",5),r.Kb(9,"input",6),r.Lb(),r.Nb(),r.Ob(10,"button",7),r.Vb("click",(function(){return t.onSignup()})),r.cc(11,"Sign up"),r.Nb(),r.Nb()),2&e&&(r.Xb("formGroup",t.registerForm),r.zb(10),r.Xb("ngClass",r.Yb(3,m,t.isDisabled))("disabled",t.isDisabled))},directives:[u.h,u.d,u.a,u.g,u.c,u.e,b.h],styles:[".signup[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);width:65%;z-index:5}.signup[_ngcontent-%COMP%], .signup.slide-up[_ngcontent-%COMP%]{-webkit-transition:all .3s ease}.signup.slide-up[_ngcontent-%COMP%]{top:5%;-webkit-transform:translate(-50%)}.signup.slide-up[_ngcontent-%COMP%]   .form-holder[_ngcontent-%COMP%], .signup.slide-up[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{opacity:0;visibility:hidden}.signup.slide-up[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]{font-size:1em;cursor:pointer}.signup.slide-up[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px;opacity:1;visibility:visible;-webkit-transition:all .3s ease}.signup[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]{color:#fff;font-size:1.7em;text-align:center}.signup[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:rgba(0,0,0,.4);opacity:0;visibility:hidden;-webkit-transition:all .3s ease}.signup[_ngcontent-%COMP%]   .form-holder[_ngcontent-%COMP%]{border-radius:15px;background-color:#fff;overflow:hidden;margin-top:50px;opacity:1;visibility:visible;-webkit-transition:all .3s ease}.signup[_ngcontent-%COMP%]   .form-holder[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border:0;outline:none;box-shadow:none;display:block;height:30px;line-height:30px;padding:8px 15px;border-bottom:1px solid #eee;width:100%;font-size:12px}.signup[_ngcontent-%COMP%]   .form-holder[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:last-child{border-bottom:0}.signup[_ngcontent-%COMP%]   .form-holder[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:rgba(0,0,0,.4)}.signup[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.4);color:hsla(0,0%,100%,.7);border:0;border-radius:15px;display:block;margin:15px auto;padding:15px 45px;width:100%;font-size:13px;font-weight:700;cursor:pointer;opacity:1;visibility:visible;-webkit-transition:all .3s ease}.signup[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover{transition:all .3s ease;background-color:rgba(0,0,0,.8)}"]}),a),h=n("kSjj"),v=function(e){return{progress:e}},_=((c=function(){function e(t,n,o,i,s,a){_classCallCheck(this,e),this._fb=t,this._cookieService=n,this._scriptService=o,this._signupLoginService=i,this.zone=s,this._router=a,this.enableLoginModel=!1,this.notifyLogin=new r.n,this.buttonText="",this.isError=!1,this.errorMessage="",this.isDisabled=!1,this.isResendError=!1}return _createClass(e,[{key:"ngOnInit",value:function(){this.formInit()}},{key:"formInit",value:function(){this.buttonText="Login",this.loginForm=this._fb.group({username:["",u.j.compose([u.j.required,g.emailFormat])],password:["",u.j.required]})}},{key:"getError",value:function(){var e,t,n="";this.loginForm.get("username").touched||(n="Please enter your email"),!this.loginForm.get("username").touched||this.loginForm.get("username").valid||(null===(e=this.loginForm.get("username").errors)||void 0===e?void 0:e.emailFormat)?(null===(t=this.loginForm.get("username").errors)||void 0===t?void 0:t.emailFormat)?n="Email should be valid":this.loginForm.get("password").touched||(n="Please enter your password"):n="Please enter your email",console.log("message"),n&&window.toastNotification(n)}},{key:"onLogin",value:function(){if(!this.loginForm.valid)return this.getError(),!0;this.isDisabled=!0,this.loginRequest(this.loginForm.value,"password")}},{key:"loginRequest",value:function(e,t){var n=this;arguments.length>2&&void 0!==arguments[2]&&arguments[2],this.isResendError=!1,this.isError=!1;var o=Object.assign({grant_type:"password"},e);this._signupLoginService.login(o).subscribe((function(e){return s(n,void 0,void 0,regeneratorRuntime.mark((function t(){var n,o=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.access_token&&(n={token:e.access_token,scope:e.scope.split(","),user:e.user},this.isDisabled=!1,this._cookieService.createCookie("storage",n,e.expires_in,"object"),this.zone.run((function(){return o._router.navigate(["/profile"])})));case 1:case"end":return t.stop()}}),t,this)})))}),(function(e){n.isDisabled=!1,n.buttonText="Login",403!=e.error||/reject/gi.test(e.error_description)||(n.isResendError=!0),n.errorData=e,n.errorMessage=e.error_description,console.log("erroror",e),window.toastNotification(n.errorMessage),n.isError=!0}))}},{key:"login",value:function(){jQuery("#login-form").removeClass("slide-up"),jQuery("#signup-form").addClass("slide-up")}}]),e}()).\u0275fac=function(e){return new(e||c)(r.Jb(u.b),r.Jb(p.a),r.Jb(h.a),r.Jb(d.a),r.Jb(r.z),r.Jb(o.a))},c.\u0275cmp=r.Db({type:c,selectors:[["app-login"]],inputs:{enableLoginModel:"enableLoginModel"},outputs:{notifyLogin:"notifyLogin"},decls:11,vars:5,consts:[["id","login-form","autocomplete","off",1,"login",3,"formGroup"],[1,"center"],["id","login",1,"form-title",3,"click"],[1,"form-holder"],["type","email","placeholder","Email","formControlName","username",1,"input"],["type","password","placeholder","Password","formControlName","password","autocomplete","new-password",1,"input"],[1,"submit-btn",3,"ngClass","disabled","click"]],template:function(e,t){1&e&&(r.Ob(0,"div",0),r.Ob(1,"div",1),r.Ob(2,"h2",2),r.Vb("click",(function(){return t.login()})),r.Ob(3,"span"),r.cc(4,"or"),r.Nb(),r.cc(5,"Log in"),r.Nb(),r.Ob(6,"div",3),r.Kb(7,"input",4),r.Kb(8,"input",5),r.Nb(),r.Ob(9,"button",6),r.Vb("click",(function(){return t.onLogin()})),r.cc(10,"Log in"),r.Nb(),r.Nb(),r.Nb()),2&e&&(r.Xb("formGroup",t.loginForm),r.zb(9),r.Xb("ngClass",r.Yb(3,v,t.isDisabled))("disabled",t.isDisabled))},directives:[u.h,u.d,u.a,u.g,u.c,b.h],styles:['.login[_ngcontent-%COMP%]{top:20%;left:0;right:0;bottom:0;z-index:5}.login[_ngcontent-%COMP%], .login[_ngcontent-%COMP%]:before{position:absolute;background-color:#fff;-webkit-transition:all .3s ease}.login[_ngcontent-%COMP%]:before{content:"";left:50%;top:-20px;-webkit-transform:translate(-50%);width:200%;height:250px;border-radius:50%;z-index:4}.login[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{position:absolute;top:40%;left:50%;-webkit-transform:translate(-50%,-50%);width:65%;z-index:5;-webkit-transition:all .3s ease}.login[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]{color:#000;font-size:1.7em;text-align:center}.login[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:rgba(0,0,0,.4);opacity:0;visibility:hidden;-webkit-transition:all .3s ease}.login[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .form-holder[_ngcontent-%COMP%]{border-radius:15px;background-color:#fff;border:1px solid #eee;overflow:hidden;margin-top:50px;opacity:1;visibility:visible;-webkit-transition:all .3s ease}.login[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .form-holder[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border:0;outline:none;box-shadow:none;display:block;height:30px;line-height:30px;padding:8px 15px;border-bottom:1px solid #eee;width:100%;font-size:12px}.login[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .form-holder[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:last-child{border-bottom:0}.login[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .form-holder[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:rgba(0,0,0,.4)}.login[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{background-color:#6b92a4;color:hsla(0,0%,100%,.7);border:0;border-radius:15px;display:block;margin:15px auto;padding:15px 45px;width:100%;font-size:13px;font-weight:700;cursor:pointer;opacity:1;visibility:visible;-webkit-transition:all .3s ease}.login[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover{transition:all .3s ease;background-color:rgba(0,0,0,.8)}.login.slide-up[_ngcontent-%COMP%]{top:90%;-webkit-transition:all .3s ease}.login.slide-up[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{top:10%;-webkit-transform:translate(-50%);-webkit-transition:all .3s ease}.login.slide-up[_ngcontent-%COMP%]   .form-holder[_ngcontent-%COMP%], .login.slide-up[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{opacity:0;visibility:hidden;-webkit-transition:all .3s ease}.login.slide-up[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]{font-size:1em!important;margin:0;padding:0;cursor:pointer;-webkit-transition:all .3s ease}.login.slide-up[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px;opacity:1!important;visibility:visible!important;-webkit-transition:all .3s ease}']}),c),w=((l=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){console.clear()}},{key:"ngOnDestroy",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||l)},l.\u0275cmp=r.Db({type:l,selectors:[["app-home"]],decls:3,vars:0,consts:[[1,"form-structor"]],template:function(e,t){1&e&&(r.Ob(0,"div",0),r.Kb(1,"app-signup"),r.Kb(2,"app-login"),r.Nb())},directives:[f,_],styles:['.form-structor[_ngcontent-%COMP%]{background-color:#222;border-radius:15px;height:550px;width:350px;position:relative;overflow:hidden}.form-structor[_ngcontent-%COMP%]:after{content:"";opacity:.8;position:absolute;top:0;right:0;bottom:0;left:0;background-repeat:no-repeat;background-position:0 100%;background-size:500px;background-image:url(https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&ixid=eyJhcHBfaWQiOjEyMDd9&ixlib=rb-0.3.5&q=100&s=bf884ad570b50659c5fa2dc2cfb20ecf&w=1000)}']}),l),C=n("W7mc"),P=n("IQjv"),O=n("P4YG");n.d(t,"BOOT_ROUTES",(function(){return M})),n.d(t,"HomeModule",(function(){return y}));var k,M=[{path:"",component:w}],y=((k=function e(){_classCallCheck(this,e)}).\u0275mod=r.Hb({type:k}),k.\u0275inj=r.Gb({factory:function(e){return new(e||k)},providers:[],imports:[[o.b.forChild(M),i.a,C.a,P.a,O.a]]}),k)}}]);