
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"backgroundColor":"#64b4f5","navigationBar":{"backgroundColor":"#64b4f5","titleText":"uni-app","type":"default","titleColor":"#ffffff"},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"uni-app","flex-direction":"column"},"renderer":"auto","appname":"star-home","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":true},"compilerVersion":"3.7.10","entryPagePath":"pages/index/index","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"tabBar":{"position":"bottom","color":"#fdfefe","selectedColor":"#55ffff","borderStyle":"black","blurEffect":"none","fontSize":"10px","iconWidth":"24px","spacing":"3px","height":"50px","backgroundColor":"#111111","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"/static/tab/home.png","selectedIconPath":"/static/tab/home_active.png"},{"pagePath":"pages/tools/tools","text":"工具箱","iconPath":"/static/tab/tool.png","selectedIconPath":"/static/tab/tool_active.png"},{"pagePath":"pages/clock/clock","text":"排班","iconPath":"/static/tab/clock.png","selectedIconPath":"/static/tab/clock_active.png"},{"pagePath":"pages/me/me","text":"个人中心","iconPath":"/static/tab/me.png","selectedIconPath":"/static/tab/me_active.png"}],"selectedIndex":0,"shown":true},"locales":{},"darkmode":false,"themeConfig":{}};
  const __uniRoutes = [{"path":"pages/index/index","meta":{"isQuit":true,"isEntry":true,"isTabBar":true,"tabBarIndex":0,"navigationBar":{"titleText":"欢迎来到星火","type":"default"},"isNVue":false}},{"path":"pages/login/login","meta":{"navigationBar":{"titleText":"登录","type":"default"},"isNVue":false}},{"path":"pages/tools/tools","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":1,"navigationBar":{"titleText":"工具箱","type":"default"},"isNVue":false}},{"path":"pages/clock/clock","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":2,"enablePullDownRefresh":false,"navigationBar":{"titleText":"排班","type":"default"},"isNVue":false}},{"path":"pages/me/me","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":3,"enablePullDownRefresh":false,"navigationBar":{"titleText":"个人中心","type":"default"},"isNVue":false}},{"path":"pages/setting/setting","meta":{"navigationBar":{"titleText":"设置","type":"default"},"isNVue":false}},{"path":"pages/dress/dress","meta":{"navigationBar":{"titleText":"装扮空间","type":"default"},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  