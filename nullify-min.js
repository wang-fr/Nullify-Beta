window.iReadyFramework={utils:{},ui:{},cookieUtil:{},hook:{},lesson:{csidTypes:{}},routes:{}},window.url=window.location.href,iReadyFramework.user=dashboardJson,iReadyFramework.utils.iReadyURL="https://login.i-ready.com/student/dashboard/home",iReadyFramework.utils.dragElement=e=>{var o=0,t=0,n=0,r=0;function s(e){(e=e||window.event).preventDefault(),n=e.clientX,r=e.clientY,document.onmouseup=i,document.onmousemove=a}function a(s){(s=s||window.event).preventDefault(),o=n-s.clientX,t=r-s.clientY,n=s.clientX,r=s.clientY,e.style.top=e.offsetTop-t+"px",e.style.left=e.offsetLeft-o+"px"}function i(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=s:e.onmousedown=s},iReadyFramework.utils.addScript=scriptURL=>fetch(scriptURL).then((e=>e.text())).then((r=>eval(r))),iReadyFramework.utils.goToDashboard=()=>goto("/student/dashboard/home/"),iReadyFramework.utils.isType=e=>Object.prototype.toString.call(e).slice(8,-1),iReadyFramework.utils.delDuplicates=e=>[...new Set(e)],iReadyFramework.utils.isNull=e=>null==e,iReadyFramework.utils.copyToClipboard=e=>navigator.clipboard.writeText(e),iReadyFramework.utils.randomNumberInRange=(e=0,o=100)=>Math.floor(Math.random()*(o-e+1))+e,iReadyFramework.utils.toggleElementDisplay=e=>e.style.display="none"===e.style.display?"block":"none",iReadyFramework.utils.appendScript=e=>{document.body.appendChild(Object.assign(document.createElement("script"),{src:e,onerror:console.error}))},iReadyFramework.utils.hookScript=(scriptLoaded,alreadyLoadedCallback,overrideURL)=>{!1===scriptLoaded?fetch(overrideURL).then((e=>e.text())).then((r=>eval(r))):alreadyLoadedCallback()},iReadyFramework.ui.closeModal=()=>{goto("/student/dashboard/home/"),clearInterval(interval)},iReadyFramework.ui.getModal=()=>document.getElementsByClassName("css-1w7vrn4 enj526p0")[0],iReadyFramework.ui.openTempModal=()=>goto("/student/error/lockDownBrowserLoader"),iReadyFramework.ui.openModal=(e,o,t,n)=>{iReadyFramework.ui.openTempModal(),setInterval((function(){try{null!=iReadyFramework.ui.getModal().innerText&&(document.getElementsByClassName("css-1w7vrn4 enj526p0")[0].innerHTML=e,document.getElementsByClassName("css-msv3yz enj526p0")[0].innerHTML=o,document.getElementById("continue-button-button").onclick=t)}catch(e){}}),10)},iReadyFramework.cookieUtil.setCookie=(e,o,t)=>{var n="";if(t){var r=new Date;r.setTime(r.getTime()+24*t*60*60*1e3),n="; expires="+r.toUTCString()}document.cookie=e+"="+(o||"")+n+"; path=/"},iReadyFramework.cookieUtil.getCookie=e=>{for(var o=e+"=",t=document.cookie.split(";"),n=0;n<t.length;n++){for(var r=t[n];" "==r.charAt(0);)r=r.substring(1,r.length);if(0==r.indexOf(o))return r.substring(o.length,r.length)}return null},iReadyFramework.hook.hookObj=(e,o)=>{window[e]=o},iReadyFramework.hook.exposeObj=e=>{debug(e),e()},iReadyFramework.hook.createHook=(e,o,t)=>{let n=e[o];e[o]=function(...e){let o=n.apply(this,e);return o&&"function"==typeof o.then?o.then((o=>(t([o,e]),o))):(t([o,e]),o)}},iReadyFramework.lesson.isOpen=()=>(window.html5Iframe,!1),iReadyFramework.lesson.frame=()=>html5Iframe.contentWindow,iReadyFramework.lesson.env=()=>html5Iframe.contentWindow.env,iReadyFramework.lesson.csid=()=>html5Iframe.src.split("csid=")[1].split("&type")[0],iReadyFramework.lesson.subject=()=>html5Iframe.src.split("csid=")[1].split("&type")[0].split("DI.")[1].split(".")[0],iReadyFramework.lesson.data=()=>html5Iframe.contentWindow.com.cainc.ifabric.lessonReport.collectReportData(),iReadyFramework.lesson.part=()=>html5Iframe.src.split("&type=")[1].split("#")[0],iReadyFramework.lesson.csidTypes.ela={PhonologicalAwareness:"DI.ELA.PA",Phonics:"DI.ELA.PH",HighFrequencyWords:"DI.ELA.HFW",Vocabulary:"DI.ELA.VOC",ComprehensionLiterature:"DI.ELA.COM.LIT",ComprehensionInformationalText:"DI.ELA.COM.INFO"},iReadyFramework.lesson.csidTypes.math={NumberAndOperations:"DI.MATH.NO",AlgebraAndAlgebraicThinking:"DI.MATH.AL",MeasurementAndData:"DI.MATH.MS",Geometry:"DI.MATH.GEO"},iReadyFramework.lesson.cheatStore={getCheat:function(e){return iReadyFramework.lesson.frame().window.localStorage.setItem("cheats",iReadyFramework.lesson.frame().window.localStorage.getItem("cheats")??"{}"),JSON.parse(iReadyFramework.lesson.frame().window.localStorage.getItem("cheats"))[e]},setCheat:function(e,o){iReadyFramework.lesson.frame().window.localStorage.setItem("cheats",iReadyFramework.lesson.frame().window.localStorage.getItem("cheats")??"{}");const t=JSON.parse(iReadyFramework.lesson.frame().window.localStorage.getItem("cheats"));t[e]=o,iReadyFramework.lesson.frame().window.localStorage.setItem("cheats",JSON.stringify(t))},get getAll(){return iReadyFramework.lesson.frame().window.localStorage.setItem("cheats",iReadyFramework.lesson.frame().window.localStorage.getItem("cheats")??"{}"),JSON.parse(iReadyFramework.lesson.frame().window.localStorage.getItem("cheats"))},clear:function(){html5Iframe.contentWindow.localStorage.clear()},refresh:function(){html5Iframe.contentWindow.document.getElementById("settings-gear").click(),html5Iframe.contentWindow.document.getElementById("cancelBtn").click()}},iReadyFramework.routes={"@@ROUTER@@/":"/","@@ROUTER@@/login":"/login","@@ROUTER@@/login/assistance":"/login/assistance","@@ROUTER@@/login/blacklistedmessage":"/login/blacklistedmessage","@@ROUTER@@/login/clever/error/:status?":"/login/clever/error/:status?","@@ROUTER@@/login/clever/error/S612":"/login/clever/error/S612","@@ROUTER@@/login/educatorIOS13GrayListed":"/login/educatorIOS13GrayListed","@@ROUTER@@/login/error/:status?":"/login/error/:status?","@@ROUTER@@/login/k1":"/login/k1","@@ROUTER@@/login/k1/class/:classCode/letter/:letter?":"/login/k1/class/:classCode/letter/:letter?","@@ROUTER@@/login/k1/class/:classCode/letter/:letter?/student/:studentId":"/login/k1/class/:classCode/letter/:letter?/student/:studentId","@@ROUTER@@/login/k1/class/:classCode/selectLetter":"/login/k1/class/:classCode/selectLetter","@@ROUTER@@/login/login_interstitial":"/login/login_interstitial","@@ROUTER@@/login/login_interstitial_main":"/login/login_interstitial_main","@@ROUTER@@/login/oneroster/error/:status?":"/login/oneroster/error/:status?","@@ROUTER@@/login/oneroster/error/S612":"/login/oneroster/error/S612","@@ROUTER@@/login/passwordexpiredmessage":"/login/passwordexpiredmessage","@@ROUTER@@/login/resetemail":"/login/resetemail","@@ROUTER@@/login/resetpassword/:token":"/login/resetpassword/:token","@@ROUTER@@/login/resetpassword/invalidtoken":"/login/resetpassword/invalidtoken","@@ROUTER@@/login/sso/error/:status?":"/login/sso/error/:status?","@@ROUTER@@/login/sso/error/S612":"/login/sso/error/S612","@@ROUTER@@/login/support":"/login/support","@@ROUTER@@/student":"/student","@@ROUTER@@/student/ActivityLaunchPage":"/student/ActivityLaunchPage","@@ROUTER@@/student/assessment/completed/:assessmentType/:score?":"/student/assessment/completed/:assessmentType/:score?","@@ROUTER@@/student/book":"/student/book","@@ROUTER@@/student/dashboard/assessment/lockdownbrowser/:subject?":"/student/dashboard/assessment/lockdownbrowser/:subject?","@@ROUTER@@/student/dashboard/home":"/student/dashboard/home","@@ROUTER@@/student/dashboard/ssolaunch/:ssotype?":"/student/dashboard/ssolaunch/:ssotype?","@@ROUTER@@/student/error/:errorReason?":"/student/error/:errorReason?","@@ROUTER@@/student/gameLauncherPage":"/student/gameLauncherPage","@@ROUTER@@/student/learningGamePlayerPage":"/student/learningGamePlayerPage","@@ROUTER@@/student/lesson/completed/:isPassingScore/:score?":"/student/lesson/completed/:isPassingScore/:score?","@@ROUTER@@/student/lesson/paused":"/student/lesson/paused","@@ROUTER@@/student/lockDownBrowserLoader":"/student/lockDownBrowserLoader","@@ROUTER@@/student/mathFluencyPlayerPage":"/student/mathFluencyPlayerPage"};let nullifyError=()=>iReadyFramework.ui.openModal("Error","Youre fucking stupid",iReadyFramework.ui.closeModal),welcomeModalSeen=!1;console.clear(),console.info("%cNullify Injected",'font-family: "Poppins", sans-serif; color: white; background: black; padding: 20px; font-size: 18px; font-weight: bold;'),console.info("%cIgnore any errors",'font-weight: bold; font-family: "Poppins", sans-serif;');var UI=document.createElement("div");function hideGui(){var e=document.getElementById("GUI");"none"===e.style.display?e.style.display="block":e.style.display="none"}UI.innerHTML='<div id="GUI" class="GUI" style="min-height: 160px; transform: translateX(0px) translateY(-32px); opacity: 0.85; font-family: sans-serif; width: 124px; height: 137px; background: rgb(30, 30, 30); position: absolute; border-radius: 5px; display: grid; place-items: center; color: white; font-size: larger; top: 104px; left: 577px; position:absolute; z-index: 99999;">\n    <h1 class="title"><center>Nullify</center>\n    </h1>\n<style>\n@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Poppins&display=swap");\n\n.title {\n    font-family: "Poppins", sans-serif;\n    font-size: 20px;\n    padding: 5px;\n}\n.button {\n  font-family: "Poppins", sans-serif;\n  border: none;\n  color: white;\n  text-align: center;\n  font-size: 16px;\n  cursor: pointer;\n  -webkit-transition-duration: 0.4s;\n  transition-duration: 0.4s;\n  width: 100%;\n  text-align: center;\n  background-color: rgb(30,30,30);\n}\n.button:hover {\n  background-color: rgb(50,50,50);\n}\n.button:active {\n  opacity: 0;\n}\n</style>\n    <button id="skip" class="button">Skip Lesson</button>\n    <br>\n    <br>\n    <br>\n    <br>\n</div>',iReadyFramework.utils.dragElement(UI.firstElementChild),document.body.appendChild(UI),document.addEventListener("keydown",(function(e){("KeyH"==e.code||e.metaKey)&&hideGui()})),void 0===window.html5Iframe||null===window.html5Iframe?fetch("https://raw.githubusercontent.com/no9999999/yes/main/app-12.chunk.js").then((e=>e.text())).then((r=>eval(r))):(nullifyError(),welcomeModalOpen=!0),window.yes=function(){void 0===window.html5Iframe||null===window.html5Iframe||void 0===window.p1||null===window.p1?nullifyError():p1(prompt("score?"))},document.getElementById("skip").onclick=yes;let welcomeModalOpen=()=>{window.welcomeModal={},window.welcomeModal.title='<div class="css-1w7vrn4 enj526p0">Nullify</div>',window.welcomeModal.description='<div class="css-msv3yz enj526p0">Welcome to Version 2.0</div><br><div class="css-msv3yz enj526p0">We have added: <br> - NEW Lesson Skipper <br> - Improved GUI and features</div>',window.welcomeModal.modal=iReadyFramework.ui.openModal(welcomeModal.title,welcomeModal.description,iReadyFramework.ui.closeModal,!0)};0==welcomeModalSeen&&(welcomeModalOpen(),welcomeModalSeen=!0);
