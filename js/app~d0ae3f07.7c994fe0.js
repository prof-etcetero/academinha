(function(e){function t(t){for(var a,s,o=t[0],c=t[1],l=t[2],u=0,m=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],a=!0,o=1;o<i.length;o++){var c=i[o];0!==n[c]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=i[0]))}return e}var a={},n={"app~d0ae3f07":0},r=[];function s(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=a,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(i,a,function(t){return e[t]}.bind(null,a));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/academinha/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;r.push([0,"chunk-vendors~e4173fa2","chunk-vendors~d939e436","chunk-vendors~dff86cf2","chunk-vendors~77bf5e45","chunk-vendors~f9ca8911","chunk-vendors~fdc6512a","chunk-vendors~b1f96ece","chunk-vendors~d2305125","chunk-vendors~4a7e9e0b","chunk-vendors~4018e926","chunk-vendors~11c2601a","chunk-vendors~25d43e53"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0be9":function(e,t,i){},4657:function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("a79d");var a=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",[i("v-snackbar",{attrs:{bottom:"",light:!e.$vuetify.theme.dark,timeout:5e3,color:e.alertData.color||null},nativeOn:{click:function(t){e.alert=!1}},scopedSlots:e._u([{key:"action",fn:function(t){var a=t.attrs;return[i("v-btn",e._b({attrs:{text:"",icon:""}},"v-btn",a,!1),[i("v-icon",[e._v("clear")])],1)]}}]),model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[e._v(" "+e._s(e.alertData.text)+" ")]),i("v-snackbar",{attrs:{top:"",light:!e.$vuetify.theme.dark,timeout:1e4,color:"primary"},nativeOn:{click:function(t){return e.updateApp.apply(null,arguments)}},scopedSlots:e._u([{key:"action",fn:function(t){var a=t.attrs;return[i("v-btn",e._b({attrs:{text:"",icon:""}},"v-btn",a,!1),[i("v-icon",[e._v("cached")])],1)]}}]),model:{value:e.updateAvailable,callback:function(t){e.updateAvailable=t},expression:"updateAvailable"}},[e._v(" Atualização disponível  ")]),i("router-view")],1)},r=[],s={computed:{alert:{get(){return this.$store.state.alert},set(e){return this.$store.commit("setAlert",e)}},updateAvailable:{get(){return this.$store.state.updateAvailable},set(e){this.$store.commit("setUpdateAvailable",!1)}},alertData:function(){return this.$store.state.alertData}},created(){this.refreshWindowSize()},mounted(){window.addEventListener("resize",()=>{this.$root.$emit("resize"),this.refreshWindowSize()})},methods:{updateApp(){location.reload(!0)},refreshWindowSize(){document.documentElement.style.setProperty("--vh",window.innerHeight+"px")}}},o=s,c=(i("5c0b"),i("2877")),l=i("6544"),d=i.n(l),u=i("7496"),m=i("8336"),p=i("132d"),f=i("2db4"),h=Object(c["a"])(o,n,r,!1,null,null,null),v=h.exports;d()(h,{VApp:u["a"],VBtn:m["a"],VIcon:p["a"],VSnackbar:f["a"]});var g=i("8c4f"),b=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-main",[e.emptyTrainings?i("figure",[i("img",{attrs:{src:e.baseUrl+"img/"+e.imgId+".png"}}),i("figcaption",[i("h1",[e._v("Ainda sem treinos")]),i("h2",[e._v("Adicione clicando no +")])])]):i("section",e._l(e.trainings,(function(t,a){return i("v-card",{key:a},[i("v-card-title",[e._v(" "+e._s(t.type)+" ")]),i("v-card-text",e._l(t.exercises,(function(t,a){return i("p",{key:a},[i("span",[e._v(e._s(e.categoryName(t.categoryId)))]),i("span",[e._v(e._s(e.exerciseName(t.categoryId,t.exerciseId)))])])})),0),i("v-card-actions",[i("v-btn",{attrs:{icon:"",title:"Editar"},on:{click:function(i){return e.editTraining(t.type)}}},[i("v-icon",[e._v("edit")])],1),i("v-btn",{attrs:{fab:"",small:"",title:"Começar"},on:{click:function(i){return e.playTraining(t.type)}}},[i("v-icon",[e._v("play_arrow")])],1)],1)],1)})),1),i("v-btn",{attrs:{fixed:"",bottom:"",right:"",fab:"",color:"accent",title:"Adicionar treino"},on:{click:e.openDialogNewTraining}},[i("v-icon",[e._v("add")])],1),i("dialog-training",{ref:"dialogTraining",on:{close:e.refresh}})],1)},x=[],y=[{id:0,name:"Domingos"},{id:1,name:"Segundas"},{id:2,name:"Terças"},{id:3,name:"Quartas"},{id:4,name:"Quintas"},{id:5,name:"Sextas"},{id:6,name:"Sábados"}],k=[{id:1,name:"Abdomen",exercises:[{id:1,name:"Superior"},{id:2,name:"Inferior"},{id:3,name:"Oblíquo"},{id:4,name:"Inclinação + Banco"},{id:5,name:"Abdomem Maq."},{id:6,name:"Lombar Isométrica"}]},{id:2,name:"Ante-braço",exercises:[{id:1,name:"Extensão de Punho"},{id:2,name:"Flexão de Punho"},{id:3,name:"Rosca Inversa"}]},{id:3,name:"Bíceps",exercises:[{id:1,name:"Rosca Direta"},{id:2,name:"Rosca Scoth"},{id:3,name:"Rosca Alternada"},{id:4,name:"Rosca Concentrada"},{id:5,name:"Rosca Martelo"}]},{id:4,name:"Dorso",exercises:[{id:1,name:"Peck Deck"},{id:2,name:"Pulley Costas"},{id:3,name:"Pulley Frente"},{id:4,name:"Remada Baixa"},{id:5,name:"Remada Uni"},{id:6,name:"Cavalinho"},{id:6,name:"Lombares"},{id:6,name:"Barra Fixa"},{id:6,name:"Pull Down"}]},{id:5,name:"Membros Inferiores",exercises:[{id:1,name:"Agachamento"},{id:2,name:"Avenço"},{id:3,name:"Leg Press"},{id:4,name:"Stiff"},{id:5,name:"Cadeira Flexora"},{id:6,name:"Cadeira Extensora"},{id:7,name:"Mesa Flexora"},{id:8,name:"Hack Machine"},{id:9,name:"Adução"},{id:10,name:"Abdução"},{id:11,name:"Glúteos"},{id:12,name:"Panturrilha"},{id:13,name:"Sóleo"},{id:14,name:"Flexão Tibial"}]},{id:6,name:"Peitorais",exercises:[{id:1,name:"Supino"},{id:2,name:"Supino Inclinado"},{id:3,name:"Supino Declinado"},{id:4,name:"Crucifixo"},{id:5,name:"Crucifixo Inclinado"},{id:6,name:"Pull Over"},{id:7,name:"Flexão Braço"},{id:8,name:"Fly"},{id:9,name:"Cross Over"},{id:10,name:"Peck Deck"}]},{id:7,name:"Ombros",exercises:[{id:1,name:"Elevação Lateral"},{id:2,name:"Elevação Anterior"},{id:3,name:"Remada Alta"},{id:4,name:"Crucifixo Inverso"},{id:5,name:"Arnold"},{id:6,name:"Encolhimento"}]},{id:8,name:"Tríceps",exercises:[{id:1,name:"Triceps Pulley"},{id:2,name:"Triceps Francês"},{id:3,name:"Triceps Testa"},{id:4,name:"Triceps Banco"},{id:5,name:"Triceps Supino"},{id:6,name:"Pacalela"},{id:7,name:"Coice"}]}],_=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},w=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-dialog",{attrs:{persistent:"","content-class":"dialog-training"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-form",{ref:"form"},[i("v-card",[i("v-card-title",[e.playing?[e._v(" Treino "+e._s(e.type)+" ")]:[e._v(" "+e._s(e.editting?"Editar":"Novo")+" Treino "),e.editting?i("strong",[e._v(e._s(e.type))]):e._e()]],2),i("v-card-text",[e.editting||e.playing?e._e():i("v-select",{attrs:{"hide-details":"",items:e.types,label:"Treino",rules:e.typeRules},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}}),i("section",{class:{full:e.playing}},e._l(e.exercises,(function(t,a){return i("article",{key:a},[i("header",[i("v-select",{attrs:{"hide-details":"",items:e.categories,"item-text":"name","item-value":"id",label:"Região",rules:e.categoryRules,disabled:e.playing},on:{input:function(t){return e.refreshExercises(a)}},model:{value:e.exercises[a].categoryId,callback:function(t){e.$set(e.exercises[a],"categoryId",t)},expression:"exercises[i].categoryId"}}),i("v-select",{attrs:{"hide-details":"",items:e.categoryExercises(e.exercises[a].categoryId),"item-text":"name","item-value":"id",label:"Exercício",rules:e.exerciseRules,disabled:!e.exercises[a].categoryId||e.playing},model:{value:e.exercises[a].exerciseId,callback:function(t){e.$set(e.exercises[a],"exerciseId",t)},expression:"exercises[i].exerciseId"}})],1),i("footer",[i("v-text-field",{attrs:{"hide-details":"",label:"Séries",type:"number",rules:e.serieRules,disabled:!e.exercises[a].categoryId||e.playing},model:{value:e.exercises[a].series,callback:function(t){e.$set(e.exercises[a],"series",t)},expression:"exercises[i].series"}}),i("v-text-field",{attrs:{"hide-details":"",label:"Repetições",type:"number",rules:e.repetitionRules,disabled:!e.exercises[a].categoryId||e.playing},model:{value:e.exercises[a].repetitions,callback:function(t){e.$set(e.exercises[a],"repetitions",t)},expression:"exercises[i].repetitions"}}),i("v-text-field",{attrs:{"hide-details":"",label:"Peso",type:"number",disabled:!e.exercises[a].categoryId,suffix:"Kg"},model:{value:e.exercises[a].weigth,callback:function(t){e.$set(e.exercises[a],"weigth",t)},expression:"exercises[i].weigth"}}),i("v-textarea",{attrs:{"hide-details":"","auto-grow":"",rows:1,label:"Observações",disabled:!e.exercises[a].categoryId},model:{value:e.exercises[a].details,callback:function(t){e.$set(e.exercises[a],"details",t)},expression:"exercises[i].details"}})],1),e.playing?e._e():i("v-btn",{attrs:{icon:"",absolute:""},on:{click:function(t){return e.confirmDeleteExercise(a)}}},[i("v-icon",[e._v("delete")])],1)],1)})),0),e.playing?e._e():i("v-btn",{attrs:{block:"",color:"primary"},on:{click:e.addExercise}},[i("v-icon",[e._v("add")]),e._v(" Adicionar Exercício")],1)],1),i("v-card-actions",[i("v-btn",{attrs:{text:""},on:{click:e.close}},[i("v-icon",[e._v("clear")]),e._v(" Fechar")],1),e.playing?e._e():i("v-btn",{attrs:{color:"accent"},on:{click:e.save}},[i("v-icon",[e._v("save")]),e._v(" Salvar")],1)],1)],1)],1),i("confirmation-dialog",{ref:"confirmUnblockDialog",on:{confirm:e.deleteExercise}})],1)},A=[],T=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-bottom-sheet",{attrs:{"content-class":"dialog-confirm"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[i("p",{domProps:{innerHTML:e._s(e.message)}}),i("footer",[i("v-btn",{attrs:{text:""},on:{click:e.cancel}},[i("v-icon",[e._v("clear")]),e._v(" Não ")],1),i("v-btn",{attrs:{text:""},on:{click:e.confirm}},[i("v-icon",[e._v("check")]),e._v(" Sim ")],1)],1)])},$=[],I={name:"confirmation-dialog",data(){return{message:null,show:!1}},methods:{open(e){this.message=e,this.show=!0},confirm(){this.$emit("confirm",!0),this.show=!1},cancel(){this.$emit("cancel",!0),this.show=!1}}},E=I,S=(i("6cd7"),i("9db1"),i("288c")),P=Object(c["a"])(E,T,$,!1,null,"990ef910",null),D=P.exports;d()(P,{VBottomSheet:S["a"],VBtn:m["a"],VIcon:p["a"]});var V={name:"dialog-training",components:{confirmationDialog:D},data(){return{editting:!1,playing:!1,type:null,exercises:[],dialog:!1,pendingDeleteExercise:null,types:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),weekDays:y,categories:k,typeRules:[e=>!!e||"Escolha o treino"],categoryRules:[e=>!!e||"Escolha uma Região"],exerciseRules:[e=>!!e||"Escolha um Exercício"],serieRules:[e=>!!e||"Escolha uma Série"],repetitionRules:[e=>!!e||"Escolha uma Repetição"]}},methods:{open(){this.editting=!1,this.playing=!1,this.$db.trainings.toArray().then(e=>{let t=e.map(e=>e.type);this.types=this.types.filter(e=>!t.includes(e))}).finally(()=>{this.dialog=!0})},edit(e){this.editting=!0,this.playing=!1,this.$db.trainings.get(e).then(e=>{this.type=e.type,this.exercises=e.exercises,this.dialog=!0}).catch(e=>{this.$store.dispatch("openAlert",{text:"Falha ao editar seu treino! Tente novamente.",color:"error"}),console.log(e)})},play(e){this.editting=!1,this.playing=!0,this.$db.trainings.get(e).then(e=>{this.type=e.type,this.exercises=e.exercises,this.dialog=!0}).catch(e=>{this.$store.dispatch("openAlert",{text:"Falha ao abrir seu treino! Tente novamente.",color:"error"}),console.log(e)})},addExercise(){this.exercises.push({categoryId:null,exerciseId:null,series:3,repetitions:12,weigth:null,details:null})},refreshExercises(e){this.exercises[e].exerciseId=null},categoryExercises(e){var t,i;return null!==(t=null===(i=this.categories.find(t=>t.id==e))||void 0===i?void 0:i.exercises)&&void 0!==t?t:[]},confirmDeleteExercise(e){var t,i;this.pendingDeleteExercise=e;let a=this.exercises[e].categoryId,n=this.categories.find(e=>e.id==a),r=this.exercises[e].exerciseId,s=n?n.exercises.find(e=>e.id==r):null,o=`${null!==(t=null===n||void 0===n?void 0:n.name)&&void 0!==t?t:""}${s?" - "+(null!==(i=null===s||void 0===s?void 0:s.name)&&void 0!==i?i:""):""}`;this.$refs.confirmUnblockDialog.open(`Deletar o exercício <strong>${o}</strong>?`)},deleteExercise(){this.exercises.splice(this.pendingDeleteExercise,1)},save(){let e=void 0;if(this.$refs.form.validate()||(e="Há campos incorretos!"),e)return this.$store.dispatch("openAlert",{text:e,color:"warning"});this.$db.trainings.delete(this.type).finally(()=>{this.$db.trainings.put({type:this.type,exercises:this.exercises}).then(()=>{this.$store.dispatch("openAlert",{text:"Treino salvo com sucesso!",color:"success"}),this.close()}).catch(e=>{this.$store.dispatch("openAlert",{text:"Erro ao salvar! Tente novamente.",color:"error"}),console.log(e)})})},close(){this.dialog=!1,this.$emit("close")}}},O=V,R=(i("94f4"),i("75a1"),i("b0af")),j=i("99d9"),C=i("169a"),F=i("4bd4"),M=i("b974"),B=i("8654"),N=i("a844"),U=Object(c["a"])(O,w,A,!1,null,"06930419",null),L=U.exports;d()(U,{VBtn:m["a"],VCard:R["a"],VCardActions:j["a"],VCardText:j["b"],VCardTitle:j["c"],VDialog:C["a"],VForm:F["a"],VIcon:p["a"],VSelect:M["a"],VTextField:B["a"],VTextarea:N["a"]});var z={components:{dialogTraining:L},computed:{baseUrl(){return"/academinha/"}},data(){return{emptyTrainings:!1,trainings:[],imgId:_(0,6)}},mounted(){this.refresh()},methods:{refresh(){this.$db.trainings.toArray().then(e=>{e.length?(this.trainings=e.map(e=>(e.exercises=e.exercises.sort((e,t)=>e.categoryId-t.categoryId),e)),this.emptyTrainings=!1):this.emptyTrainings=!0})},wekDayName(e){var t,i;return null!==(t=null===(i=y.find(t=>t.id==e))||void 0===i?void 0:i.name)&&void 0!==t?t:null},categoryName(e){var t,i;return null!==(t=null===(i=k.find(t=>t.id==e))||void 0===i?void 0:i.name)&&void 0!==t?t:null},exerciseName(e,t){var i,a,n;return null!==(i=null===(a=k.find(t=>t.id==e))||void 0===a||null===(n=a.exercises.find(e=>e.id==t))||void 0===n?void 0:n.name)&&void 0!==i?i:null},openDialogNewTraining(){this.$refs.dialogTraining.open()},editTraining(e){this.$refs.dialogTraining.edit(e)},playTraining(e){this.$refs.dialogTraining.play(e)}}},H=z,q=(i("6842"),i("f6c4")),W=Object(c["a"])(H,b,x,!1,null,"2223b218",null),J=W.exports;d()(W,{VBtn:m["a"],VCard:R["a"],VCardActions:j["a"],VCardText:j["b"],VCardTitle:j["c"],VIcon:p["a"],VMain:q["a"]}),a["a"].use(g["a"]);const Q=[{path:"/",name:"home",component:J}],G=new g["a"]({mode:"history",base:"/academinha/",routes:Q});G.beforeEach((e,t,i)=>{const n=e.matched.some(e=>e.meta.ifAuth),r=e.matched.some(e=>e.meta.elseAuth);n&&!a["a"].$auth.authenticated?i("/login"):r&&a["a"].$auth.authenticated?i("/"):i()});var K=G,X=i("2f62");a["a"].use(X["a"]);var Y=new X["a"].Store({state:{updateAvailable:!1,alert:!1,alertData:{}},mutations:{setUpdateAvailable(e,t){e.updateAvailable=t},setAlert(e,t){e.alert=t},setAlertData(e,t){e.alertData=t}},actions:{openAlert({commit:e},t){if(t.text){e("setAlertData",t),e("setAlert",!0);try{navigator.vibrate(100)}catch(i){}}}}}),Z=i("f309");function ee(){return"true"==localStorage.getItem("lightTheme")||"false"!=localStorage.getItem("lightTheme")&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches)}a["a"].use(Z["a"]);var te=new Z["a"]({icons:{iconfont:"md"},theme:{dark:!ee(),options:{customProperties:!0},themes:{light:{primary:"#ff7e00",secondary:"#ffcc00",accent:"#966fd6",error:"#ff4040",info:"#8ab9f1",success:"#3cd070",warning:"#ffdb58"},dark:{primary:"#ff7e00",secondary:"#ffcc00",accent:"#966fd6",error:"#ff4040",info:"#8ab9f1",success:"#3cd070",warning:"#ffdb58"}}}}),ie=i("45d2"),ae=i.n(ie);a["a"].use(ae.a);const ne=new ae.a([{version:1,database:"academinha",schemas:[{trainings:"&type"}]}]);var re=ne,se=i("9483");Object(se["a"])("/academinha/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){window.Vue.$store.commit("setUpdateAvailable",!0),console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var oe=i("bc3a"),ce=i.n(oe);ce.a.defaults.baseURL=Object({NODE_ENV:"production",BASE_URL:"/academinha/"}).VUE_APP_API_HOST+"/api",ce.a.defaults.headers.common={Accept:"application/json"};const le=ce.a.create({});le.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),le.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=le,window.axios=le,Object.defineProperties(e.prototype,{axios:{get(){return le}},$axios:{get(){return le}}})},a["a"].use(Plugin);Plugin;class de{get authenticated(){return!!localStorage.getItem("accessToken")}get headers(){let e={};return localStorage.getItem("accessToken")&&(e["Authorization"]="Bearer "+localStorage.getItem("accessToken")),e}}const ue=new de;de.install=function(e,t){e.$auth=ue,Object.defineProperty(e.prototype,"$auth",{get(){return ue}})},a["a"].use(de);a["a"].config.productionTip=!1,a["a"].config.devtools=!1;const me=new a["a"]({router:K,store:Y,vuetify:te,idb:re,render:e=>e(v)}).$mount("#app");window.Vue=me},"5c0b":function(e,t,i){"use strict";i("9c0c")},6842:function(e,t,i){"use strict";i("0be9")},"6cd7":function(e,t,i){"use strict";i("4657")},"75a1":function(e,t,i){"use strict";i("d783")},"94f4":function(e,t,i){"use strict";i("99f1")},"99f1":function(e,t,i){},"9c0c":function(e,t,i){},"9db1":function(e,t,i){"use strict";i("9e75")},"9e75":function(e,t,i){},d783:function(e,t,i){}});