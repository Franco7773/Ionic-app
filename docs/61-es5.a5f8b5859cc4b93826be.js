var __awaiter=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{u(i.next(e))}catch(t){o(t)}}function a(e){try{u(i.throw(e))}catch(t){o(t)}}function u(e){e.done?r(e.value):new n((function(t){t(e.value)})).then(s,a)}u((i=i.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,i=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1];break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o);break}r[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(a){o=[6,a],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"qF1+":function(e,t,n){"use strict";n.r(t),n.d(t,"ion_nav",(function(){return f})),n.d(t,"ion_nav_link",(function(){return b})),n.d(t,"ion_nav_pop",(function(){return m})),n.d(t,"ion_nav_push",(function(){return g})),n.d(t,"ion_nav_set_root",(function(){return w}));var i=n("dSyh"),r=n("AfW+"),o=n("aiEM"),s=n("kBU6"),a=n("m9yc"),u=n("v3pZ"),c=n("UWxW"),h=1,p=function(){function e(e,t){this.component=e,this.params=t,this.state=h}return e.prototype.init=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n;return __generator(this,(function(i){switch(i.label){case 0:return this.state=2,this.element?[3,2]:(t=this.component,n=this,[4,Object(a.a)(this.delegate,e,t,["ion-page","ion-page-invisible"],this.params)]);case 1:n.element=i.sent(),i.label=2;case 2:return[2]}}))}))},e.prototype._destroy=function(){Object(o.b)(3!==this.state,"view state must be ATTACHED");var e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3},e}(),l=function(e,t,n){if(!e)return!1;if(e.component!==t)return!1;var i=e.params;if(i===n)return!0;if(!i&&!n)return!0;if(!i||!n)return!1;var r=Object.keys(i),o=Object.keys(n);if(r.length!==o.length)return!1;for(var s=0,a=r;s<a.length;s++){var u=a[s];if(i[u]!==n[u])return!1}return!0},v=function(e,t){return e?e instanceof p?e:new p(e,t):null},f=function(){function e(e){Object(i.l)(this,e),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0,this.ionNavWillLoad=Object(i.d)(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(i.d)(this,"ionNavWillChange",3),this.ionNavDidChange=Object(i.d)(this,"ionNavDidChange",3)}return e.prototype.swipeGestureChanged=function(){this.gesture&&this.gesture.setDisabled(!0!==this.swipeGesture)},e.prototype.rootChanged=function(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))},e.prototype.componentWillLoad=function(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){var e=Object(i.e)(this);this.swipeGesture=r.b.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()},e.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){switch(t.label){case 0:return this.rootChanged(),e=this,[4,n.e(2).then(n.bind(null,"0yHn"))];case 1:return e.gesture=t.sent().createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged(),[2]}}))}))},e.prototype.componentDidUnload=function(){for(var e=0,t=this.views;e<t.length;e++){var n=t[e];Object(u.b)(n.element,s.e),n._destroy()}this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0},e.prototype.push=function(e,t,n,i){return this.queueTrns({insertStart:-1,insertViews:[{page:e,params:t}],opts:n},i)},e.prototype.insert=function(e,t,n,i,r){return this.queueTrns({insertStart:e,insertViews:[{page:t,params:n}],opts:i},r)},e.prototype.insertPages=function(e,t,n,i){return this.queueTrns({insertStart:e,insertViews:t,opts:n},i)},e.prototype.pop=function(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)},e.prototype.popTo=function(e,t,n){var i={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(i.removeView=e,i.removeStart=1):"number"==typeof e&&(i.removeStart=e+1),this.queueTrns(i,n)},e.prototype.popToRoot=function(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)},e.prototype.removeIndex=function(e,t,n,i){return void 0===t&&(t=1),this.queueTrns({removeStart:e,removeCount:t,opts:n},i)},e.prototype.setRoot=function(e,t,n,i){return this.setPages([{page:e,params:t}],n,i)},e.prototype.setPages=function(e,t,n){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)},e.prototype.setRouteId=function(e,t,n){var i,r=this,o=this.getActiveSync();if(l(o,e,t))return Promise.resolve({changed:!1,element:o.element});var s,a=new Promise((function(e){return i=e})),u={updateURL:!1,viewIsReady:function(e){var t,n=new Promise((function(e){return t=e}));return i({changed:!0,element:e,markVisible:function(){return __awaiter(r,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return t(),[4,s];case 1:return e.sent(),[2]}}))}))}}),n}};if("root"===n)s=this.setRoot(e,t,u);else{var c=this.views.find((function(n){return l(n,e,t)}));c?s=this.popTo(c,Object.assign(Object.assign({},u),{direction:"back"})):"forward"===n?s=this.push(e,t,u):"back"===n&&(s=this.setRoot(e,t,Object.assign(Object.assign({},u),{direction:"back",animated:!0})))}return a},e.prototype.getRouteId=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){return[2,(e=this.getActiveSync())?{id:e.element.tagName,params:e.params,element:e.element}:void 0]}))}))},e.prototype.getActive=function(){return Promise.resolve(this.getActiveSync())},e.prototype.getByIndex=function(e){return Promise.resolve(this.views[e])},e.prototype.canGoBack=function(e){return Promise.resolve(this.canGoBackSync(e))},e.prototype.getPrevious=function(e){return Promise.resolve(this.getPreviousSync(e))},e.prototype.getLength=function(){return this.views.length},e.prototype.getActiveSync=function(){return this.views[this.views.length-1]},e.prototype.canGoBackSync=function(e){return void 0===e&&(e=this.getActiveSync()),!(!e||!this.getPreviousSync(e))},e.prototype.getPreviousSync=function(e){if(void 0===e&&(e=this.getActiveSync()),e){var t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}},e.prototype.queueTrns=function(e,t){if(this.isTransitioning&&null!=e.opts&&e.opts.skipIfBusy)return Promise.resolve(!1);var n=new Promise((function(t,n){e.resolve=t,e.reject=n}));return e.done=t,e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),n},e.prototype.success=function(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){var n=document.querySelector("ion-router");n&&n.navChanged("back"===e.direction?"back":"forward")}},e.prototype.failed=function(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))},e.prototype.fireError=function(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)},e.prototype.nextTrns=function(){if(this.isTransitioning)return!1;var e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)},e.prototype.runTransition=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n,i,r,o;return __generator(this,(function(s){switch(s.label){case 0:if(s.trys.push([0,6,,7]),this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e),t=this.getActiveSync(),n=this.getEnteringView(e,t),!t&&!n)throw new Error("no views in the stack to be removed");return n&&n.state===h?[4,n.init(this.el)]:[3,2];case 1:s.sent(),s.label=2;case 2:return this.postViewInit(n,t,e),!e.enteringRequiresTransition&&!e.leavingRequiresTransition||n===t?[3,4]:[4,this.transition(n,t,e)];case 3:return r=s.sent(),[3,5];case 4:r={hasCompleted:!0,requiresTransition:!1},s.label=5;case 5:return i=r,this.success(i,e),this.ionNavDidChange.emit(),[3,7];case 6:return o=s.sent(),this.failed(o,e),[3,7];case 7:return this.isTransitioning=!1,this.nextTrns(),[2]}}))}))},e.prototype.prepareTI=function(e){var t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){Object(o.b)(void 0!==e.removeStart,"removeView needs removeStart"),Object(o.b)(void 0!==e.removeCount,"removeView needs removeCount");var n=this.views.indexOf(e.removeView);if(n<0)throw new Error("removeView was not found");e.removeStart+=n}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);var i=e.insertViews;if(i){Object(o.b)(i.length>0,"length can not be zero");var r=i.map((function(e){return e instanceof p?e:"page"in e?v(e.page,e.params):v(e,void 0)})).filter((function(e){return null!==e}));if(0===r.length)throw new Error("invalid views to insert");for(var s=0,a=r;s<a.length;s++){var u=a[s];u.delegate=e.opts.delegate;var c=u.nav;if(c&&c!==this)throw new Error("inserted view was already inserted");if(3===u.state)throw new Error("inserted view was already destroyed")}e.insertViews=r}},e.prototype.getEnteringView=function(e,t){var n=e.insertViews;if(void 0!==n)return n[n.length-1];var i=e.removeStart;if(void 0!==i)for(var r=this.views,o=i+e.removeCount,s=r.length-1;s>=0;s--){var a=r[s];if((s<i||s>=o)&&a!==t)return a}},e.prototype.postViewInit=function(e,t,n){Object(o.b)(t||e,"Both leavingView and enteringView are null"),Object(o.b)(n.resolve,"resolve must be valid"),Object(o.b)(n.reject,"reject must be valid");var i,r=n.opts,a=n.insertViews,c=n.removeStart,h=n.removeCount;if(void 0!==c&&void 0!==h){Object(o.b)(c>=0,"removeStart can not be negative"),Object(o.b)(h>=0,"removeCount can not be negative"),i=[];for(var p=0;p<h;p++){(b=this.views[p+c])&&b!==e&&b!==t&&i.push(b)}r.direction=r.direction||"back"}var l=this.views.length+(void 0!==a?a.length:0)-(void 0!==h?h:0);if(Object(o.b)(l>=0,"final balance can not be negative"),0===l)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(a){for(var v=n.insertStart,f=0,d=a;f<d.length;f++){var b=d[f];this.insertViewAt(b,v),v++}n.enteringRequiresTransition&&(r.direction=r.direction||"forward")}if(i&&i.length>0){for(var m=0,g=i;m<g.length;m++){b=g[m];Object(u.b)(b.element,s.c),Object(u.b)(b.element,s.d),Object(u.b)(b.element,s.e)}for(var w=0,y=i;w<y.length;w++){b=y[w];this.destroyView(b)}}},e.prototype.transition=function(e,t,n){return __awaiter(this,void 0,void 0,(function(){var o,s,a,c,h,p,l,v=this;return __generator(this,(function(f){switch(f.label){case 0:return o=n.opts,s=o.progressAnimation?function(e){return v.sbAni=e}:void 0,a=Object(i.e)(this),c=e.element,h=t&&t.element,p=Object.assign({mode:a,showGoBack:this.canGoBackSync(e),baseEl:this.el,animationBuilder:this.animation||o.animationBuilder||r.b.get("navAnimation"),progressCallback:s,animated:this.animated&&r.b.getBoolean("animated",!0),enteringEl:c,leavingEl:h},o),[4,Object(u.d)(p)];case 1:return l=f.sent().hasCompleted,[2,this.transitionFinish(l,e,t,o)]}}))}))},e.prototype.transitionFinish=function(e,t,n,i){var r=e?t:n;return r&&this.cleanup(r),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:i.direction}},e.prototype.insertViewAt=function(e,t){var n=this.views,i=n.indexOf(e);i>-1?(Object(o.b)(e.nav===this,"view is not part of the nav"),n.splice(t,0,n.splice(i,1)[0])):(Object(o.b)(!e.nav,"nav is used"),e.nav=this,n.splice(t,0,e))},e.prototype.removeView=function(e){Object(o.b)(2===e.state||3===e.state,"view state should be loaded or destroyed");var t=this.views,n=t.indexOf(e);Object(o.b)(n>-1,"view must be part of the stack"),n>=0&&t.splice(n,1)},e.prototype.destroyView=function(e){e._destroy(),this.removeView(e)},e.prototype.cleanup=function(e){if(!this.destroyed)for(var t=this.views,n=t.indexOf(e),i=t.length-1;i>=0;i--){var r=t[i],o=r.element;i>n?(Object(u.b)(o,s.e),this.destroyView(r)):i<n&&Object(u.c)(o,!0)}},e.prototype.canStart=function(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()},e.prototype.onStart=function(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)},e.prototype.onMove=function(e){this.sbAni&&this.sbAni.progressStep(e)},e.prototype.onEnd=function(e,t,n){var i=this;if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish((function(){i.animationEnabled=!0}),{oneTimeCallback:!0});var r=e?-.001:.001;e?r+=Object(c.b)(new c.a(0,0),new c.a(.32,.72),new c.a(0,1),new c.a(1,1),t):(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),r+=Object(c.b)(new c.a(0,0),new c.a(1,0),new c.a(.68,.28),new c.a(1,1),t)),this.sbAni.progressEnd(e?1:0,r,n)}},e.prototype.render=function(){return Object(i.i)("slot",null)},Object.defineProperty(e.prototype,"el",{get:function(){return Object(i.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"},enumerable:!0,configurable:!0}),e}(),d=function(e,t,n,i){var r=e.closest("ion-nav");if(r)if("forward"===t){if(void 0!==n)return r.push(n,i,{skipIfBusy:!0})}else if("root"===t){if(void 0!==n)return r.setRoot(n,i,{skipIfBusy:!0})}else if("back"===t)return r.pop({skipIfBusy:!0});return Promise.resolve(!1)},b=function(){function e(e){var t=this;Object(i.l)(this,e),this.routerDirection="forward",this.onClick=function(){return d(t.el,t.routerDirection,t.component,t.componentProps)}}return e.prototype.render=function(){return Object(i.i)(i.a,{onClick:this.onClick})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(i.f)(this)},enumerable:!0,configurable:!0}),e}(),m=function(){function e(e){var t=this;Object(i.l)(this,e),this.pop=function(){return d(t.el,"back")}}return e.prototype.componentDidLoad=function(){console.warn('[DEPRECATED][ion-nav-pop] <ion-nav-pop> is deprecated. Use `<ion-nav-link routerDirection="back">` instead.')},e.prototype.render=function(){return Object(i.i)(i.a,{onClick:this.pop})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(i.f)(this)},enumerable:!0,configurable:!0}),e}(),g=function(){function e(e){var t=this;Object(i.l)(this,e),this.push=function(){return d(t.el,"forward",t.component,t.componentProps)}}return e.prototype.componentDidLoad=function(){console.warn('[DEPRECATED][ion-nav-push] `<ion-nav-push component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent">` instead.')},e.prototype.render=function(){return Object(i.i)(i.a,{onClick:this.push})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(i.f)(this)},enumerable:!0,configurable:!0}),e}(),w=function(){function e(e){var t=this;Object(i.l)(this,e),this.setRoot=function(){return d(t.el,"root",t.component,t.componentProps)}}return e.prototype.componentDidLoad=function(){console.warn('[DEPRECATED][ion-nav-set-root] `<ion-nav-set-root component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent" routerDirection="root">` instead.')},e.prototype.render=function(){return Object(i.i)(i.a,{onClick:this.setRoot})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(i.f)(this)},enumerable:!0,configurable:!0}),e}()}}]);