(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{yus8:function(t,e,o){"use strict";o.r(e);var n=o("tyNb"),i=o("PCNd"),r=o("fXoL");function s(t,e,o,n){return new(o||(o=Promise))((function(i,r){function s(t){try{l(n.next(t))}catch(e){r(e)}}function a(t){try{l(n.throw(t))}catch(e){r(e)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,a)}l((n=n.apply(t,e||[])).next())}))}var a=o("3Pt+");class l{static emailFormat(t){return""!==t.value&&(t.value.length<=5||!/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i.test(t.value))?{emailFormat:!0}:null}static passwordCompared(t){const e=t.get("password"),o=t.get("confirmPassword");return e.pristine||o.pristine?null:e.value==o.value?null:{match:!0}}static emailFormatInput(t){return""!==t&&(t.length<=5||!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(t))||null}static passwordFormatCheck(t){return/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/i.test(t.value)?null:{pwdFormat:!0}}static noWhitespaceValidator(t){let e=t.value?t.value.toString():"";return/^\s+$/.test(e)?{whitespace:!0}:null}}var c=o("Q4r4"),g=o("UaYs"),p=o("ofXK");const u=function(t){return{progress:t}};let d=(()=>{class t{constructor(t,e,o,n,i){this._fb=t,this._cookieService=e,this._router=o,this.zone=n,this._signupLoginService=i,this.buttonText="",this.isError=!1,this.errorMessage="",this.isDisabled=!1}ngOnInit(){this.initRegisterForm()}signup(){jQuery("#signup-form").removeClass("slide-up"),jQuery("#login-form").addClass("slide-up")}initRegisterForm(){this.registerForm=this._fb.group({username:["",a.j.compose([a.j.required,l.emailFormat])],passwordGroup:this._fb.group({password:["",[a.j.required,l.noWhitespaceValidator,l.passwordFormatCheck]],confirmPassword:["",[a.j.required,l.noWhitespaceValidator,l.passwordFormatCheck]]},{validator:l.passwordCompared})})}getError(){var t,e,o,n;let i="Please fill up all the fields";!this.registerForm.get("username").touched||this.registerForm.get("username").touched&&!this.registerForm.get("username").valid&&!(null===(t=this.registerForm.get("username").errors)||void 0===t?void 0:t.emailFormat)?i="Please enter your email":(null===(e=this.registerForm.get("username").errors)||void 0===e?void 0:e.emailFormat)?i="Email should be valid":!this.registerForm.get("passwordGroup").get("password").touched||this.registerForm.get("passwordGroup").get("password").touched&&""==this.registerForm.get("passwordGroup").get("password").value.trim()?i="Please enter your password":(null===(o=this.registerForm.get("passwordGroup").get("password").errors)||void 0===o?void 0:o.pwdFormat)?i="Minimum six characters, at least one letter and one number":!this.registerForm.get("passwordGroup").get("confirmPassword").touched||this.registerForm.get("passwordGroup").get("confirmPassword").touched&&""==this.registerForm.get("passwordGroup").get("confirmPassword").value.trim()?i="Please enter confirm password":(null===(n=this.registerForm.get("passwordGroup").errors)||void 0===n?void 0:n.match)&&(i="Password & Confirm Password does not match"),console.log("testtetttttt",this.registerForm.get("passwordGroup").get("password").errors),window.toastNotification(i)}onSignup(){if(console.log(this.registerForm),!this.registerForm.valid)return this.getError(),!0;let t=this.makeData(this.registerForm.value);console.log(t),this.isDisabled=!0,this._signupLoginService.register(t).subscribe(t=>s(this,void 0,void 0,(function*(){t.access_token&&this.successLoginReq(t)})),t=>{this.errorMessage=t&&t.error?t.error.message:"Server Error",console.log(t),window.toastNotification(this.errorMessage),this.isDisabled=!1})}makeData(t){return{username:t.username,password:t.passwordGroup.password,grant_type:"password"}}successLoginReq(t){return s(this,void 0,void 0,(function*(){try{this._cookieService.createCookie("storage",{token:t.access_token,user:t.user},t.expires_in,"object"),this.zone.run(()=>this._router.navigate(["/profile"])),this.isDisabled=!1}catch(e){console.log(e)}}))}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(a.b),r.Jb(c.a),r.Jb(n.a),r.Jb(r.z),r.Jb(g.a))},t.\u0275cmp=r.Db({type:t,selectors:[["app-signup"]],decls:12,vars:5,consts:[["id","signup-form","autocomplete","off",1,"signup","slide-up",3,"formGroup"],["id","signup",1,"form-title",3,"click"],[1,"form-holder"],["type","email","placeholder","Email","formControlName","username",1,"input"],["formGroupName","passwordGroup"],["type","password","placeholder","Confirm Password","formControlName","password",1,"input"],["type","password","placeholder","Password","formControlName","confirmPassword",1,"input"],[1,"submit-btn",3,"ngClass","disabled","click"]],template:function(t,e){1&t&&(r.Ob(0,"div",0),r.Ob(1,"h2",1),r.Vb("click",(function(){return e.signup()})),r.Ob(2,"span"),r.cc(3,"or"),r.Nb(),r.cc(4,"Sign up"),r.Nb(),r.Ob(5,"div",2),r.Kb(6,"input",3),r.Mb(7,4),r.Kb(8,"input",5),r.Kb(9,"input",6),r.Lb(),r.Nb(),r.Ob(10,"button",7),r.Vb("click",(function(){return e.onSignup()})),r.cc(11,"Sign up"),r.Nb(),r.Nb()),2&t&&(r.Xb("formGroup",e.registerForm),r.zb(10),r.Xb("ngClass",r.Yb(3,u,e.isDisabled))("disabled",e.isDisabled))},directives:[a.h,a.d,a.a,a.g,a.c,a.e,p.h],styles:[".signup[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);width:65%;z-index:5}.signup[_ngcontent-%COMP%], .signup.slide-up[_ngcontent-%COMP%]{-webkit-transition:all .3s ease}.signup.slide-up[_ngcontent-%COMP%]{top:5%;-webkit-transform:translate(-50%)}.signup.slide-up[_ngcontent-%COMP%]   .form-holder[_ngcontent-%COMP%], .signup.slide-up[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{opacity:0;visibility:hidden}.signup.slide-up[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]{font-size:1em;cursor:pointer}.signup.slide-up[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px;opacity:1;visibility:visible;-webkit-transition:all .3s ease}.signup[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]{color:#fff;font-size:1.7em;text-align:center}.signup[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:rgba(0,0,0,.4);opacity:0;visibility:hidden;-webkit-transition:all .3s ease}.signup[_ngcontent-%COMP%]   .form-holder[_ngcontent-%COMP%]{border-radius:15px;background-color:#fff;overflow:hidden;margin-top:50px;opacity:1;visibility:visible;-webkit-transition:all .3s ease}.signup[_ngcontent-%COMP%]   .form-holder[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border:0;outline:none;box-shadow:none;display:block;height:30px;line-height:30px;padding:8px 15px;border-bottom:1px solid #eee;width:100%;font-size:12px}.signup[_ngcontent-%COMP%]   .form-holder[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:last-child{border-bottom:0}.signup[_ngcontent-%COMP%]   .form-holder[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:rgba(0,0,0,.4)}.signup[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.4);color:hsla(0,0%,100%,.7);border:0;border-radius:15px;display:block;margin:15px auto;padding:15px 45px;width:100%;font-size:13px;font-weight:700;cursor:pointer;opacity:1;visibility:visible;-webkit-transition:all .3s ease}.signup[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover{transition:all .3s ease;background-color:rgba(0,0,0,.8)}"]}),t})();var b=o("kSjj");const m=function(t){return{progress:t}};let h=(()=>{class t{constructor(t,e,o,n,i,s){this._fb=t,this._cookieService=e,this._scriptService=o,this._signupLoginService=n,this.zone=i,this._router=s,this.enableLoginModel=!1,this.notifyLogin=new r.n,this.buttonText="",this.isError=!1,this.errorMessage="",this.isDisabled=!1,this.isResendError=!1}ngOnInit(){this.formInit()}formInit(){this.buttonText="Login",this.loginForm=this._fb.group({username:["",a.j.compose([a.j.required,l.emailFormat])],password:["",a.j.required]})}getError(){var t,e;let o="";this.loginForm.get("username").touched||(o="Please enter your email"),!this.loginForm.get("username").touched||this.loginForm.get("username").valid||(null===(t=this.loginForm.get("username").errors)||void 0===t?void 0:t.emailFormat)?(null===(e=this.loginForm.get("username").errors)||void 0===e?void 0:e.emailFormat)?o="Email should be valid":this.loginForm.get("password").touched||(o="Please enter your password"):o="Please enter your email",console.log("message"),o&&window.toastNotification(o)}onLogin(){if(!this.loginForm.valid)return this.getError(),!0;this.isDisabled=!0,this.loginRequest(this.loginForm.value,"password")}loginRequest(t,e,o=null){this.isResendError=!1,this.isError=!1;let n=Object.assign({grant_type:"password"},t);this._signupLoginService.login(n).subscribe(t=>s(this,void 0,void 0,(function*(){if(t.access_token){let e={token:t.access_token,scope:t.scope.split(","),user:t.user};this.isDisabled=!1,this._cookieService.createCookie("storage",e,t.expires_in,"object"),this.zone.run(()=>this._router.navigate(["/profile"]))}})),t=>{this.isDisabled=!1,this.buttonText="Login",403!=t.error||/reject/gi.test(t.error_description)||(this.isResendError=!0),this.errorData=t,this.errorMessage=t.error_description,console.log("erroror",t),window.toastNotification(this.errorMessage),this.isError=!0})}login(){jQuery("#login-form").removeClass("slide-up"),jQuery("#signup-form").addClass("slide-up")}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(a.b),r.Jb(c.a),r.Jb(b.a),r.Jb(g.a),r.Jb(r.z),r.Jb(n.a))},t.\u0275cmp=r.Db({type:t,selectors:[["app-login"]],inputs:{enableLoginModel:"enableLoginModel"},outputs:{notifyLogin:"notifyLogin"},decls:11,vars:5,consts:[["id","login-form","autocomplete","off",1,"login",3,"formGroup"],[1,"center"],["id","login",1,"form-title",3,"click"],[1,"form-holder"],["type","email","placeholder","Email","formControlName","username",1,"input"],["type","password","placeholder","Password","formControlName","password","autocomplete","new-password",1,"input"],[1,"submit-btn",3,"ngClass","disabled","click"]],template:function(t,e){1&t&&(r.Ob(0,"div",0),r.Ob(1,"div",1),r.Ob(2,"h2",2),r.Vb("click",(function(){return e.login()})),r.Ob(3,"span"),r.cc(4,"or"),r.Nb(),r.cc(5,"Log in"),r.Nb(),r.Ob(6,"div",3),r.Kb(7,"input",4),r.Kb(8,"input",5),r.Nb(),r.Ob(9,"button",6),r.Vb("click",(function(){return e.onLogin()})),r.cc(10,"Log in"),r.Nb(),r.Nb(),r.Nb()),2&t&&(r.Xb("formGroup",e.loginForm),r.zb(9),r.Xb("ngClass",r.Yb(3,m,e.isDisabled))("disabled",e.isDisabled))},directives:[a.h,a.d,a.a,a.g,a.c,p.h],styles:['.login[_ngcontent-%COMP%]{top:20%;left:0;right:0;bottom:0;z-index:5}.login[_ngcontent-%COMP%], .login[_ngcontent-%COMP%]:before{position:absolute;background-color:#fff;-webkit-transition:all .3s ease}.login[_ngcontent-%COMP%]:before{content:"";left:50%;top:-20px;-webkit-transform:translate(-50%);width:200%;height:250px;border-radius:50%;z-index:4}.login[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{position:absolute;top:40%;left:50%;-webkit-transform:translate(-50%,-50%);width:65%;z-index:5;-webkit-transition:all .3s ease}.login[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]{color:#000;font-size:1.7em;text-align:center}.login[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:rgba(0,0,0,.4);opacity:0;visibility:hidden;-webkit-transition:all .3s ease}.login[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .form-holder[_ngcontent-%COMP%]{border-radius:15px;background-color:#fff;border:1px solid #eee;overflow:hidden;margin-top:50px;opacity:1;visibility:visible;-webkit-transition:all .3s ease}.login[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .form-holder[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border:0;outline:none;box-shadow:none;display:block;height:30px;line-height:30px;padding:8px 15px;border-bottom:1px solid #eee;width:100%;font-size:12px}.login[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .form-holder[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:last-child{border-bottom:0}.login[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .form-holder[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:rgba(0,0,0,.4)}.login[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{background-color:#6b92a4;color:hsla(0,0%,100%,.7);border:0;border-radius:15px;display:block;margin:15px auto;padding:15px 45px;width:100%;font-size:13px;font-weight:700;cursor:pointer;opacity:1;visibility:visible;-webkit-transition:all .3s ease}.login[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover{transition:all .3s ease;background-color:rgba(0,0,0,.8)}.login.slide-up[_ngcontent-%COMP%]{top:90%;-webkit-transition:all .3s ease}.login.slide-up[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{top:10%;-webkit-transform:translate(-50%);-webkit-transition:all .3s ease}.login.slide-up[_ngcontent-%COMP%]   .form-holder[_ngcontent-%COMP%], .login.slide-up[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{opacity:0;visibility:hidden;-webkit-transition:all .3s ease}.login.slide-up[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]{font-size:1em!important;margin:0;padding:0;cursor:pointer;-webkit-transition:all .3s ease}.login.slide-up[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px;opacity:1!important;visibility:visible!important;-webkit-transition:all .3s ease}']}),t})(),f=(()=>{class t{constructor(){}ngOnInit(){console.clear()}ngOnDestroy(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Db({type:t,selectors:[["app-home"]],decls:3,vars:0,consts:[[1,"form-structor"]],template:function(t,e){1&t&&(r.Ob(0,"div",0),r.Kb(1,"app-signup"),r.Kb(2,"app-login"),r.Nb())},directives:[d,h],styles:['.form-structor[_ngcontent-%COMP%]{background-color:#222;border-radius:15px;height:550px;width:350px;position:relative;overflow:hidden}.form-structor[_ngcontent-%COMP%]:after{content:"";opacity:.8;position:absolute;top:0;right:0;bottom:0;left:0;background-repeat:no-repeat;background-position:0 100%;background-size:500px;background-image:url(https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&ixid=eyJhcHBfaWQiOjEyMDd9&ixlib=rb-0.3.5&q=100&s=bf884ad570b50659c5fa2dc2cfb20ecf&w=1000)}']}),t})();var w=o("W7mc"),_=o("IQjv"),C=o("P4YG");o.d(e,"BOOT_ROUTES",(function(){return P})),o.d(e,"HomeModule",(function(){return O}));const P=[{path:"",component:f}];let O=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(e){return new(e||t)},providers:[],imports:[[n.b.forChild(P),i.a,w.a,_.a,C.a]]}),t})()}}]);