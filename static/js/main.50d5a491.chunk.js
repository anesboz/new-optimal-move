(this["webpackJsonpnative-om"]=this["webpackJsonpnative-om"]||[]).push([[0],{20:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var i=t(0),a=t.n(i),r=t(9),l=t.n(r),o=(t(20),t(4)),c=t(8),s=t(12),u=t(5),b="ATTRIBUTE_ONGLET",g="RESET_ALL",d="UPLOAD_PAGE",p="GO_PAGE",m="RESET_PAGE",j={currentOnglet:null,currentPage:0,page:{},home:!1},f=Object(c.b)({onglets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case b:return Object(u.a)(Object(u.a)({},e),{},{currentOnglet:n.payload,currentPage:0});case d:var t=Object(u.a)({},e.page);return t[n.payload.row]=n.payload.data,Object(u.a)(Object(u.a)({},e),{},{page:t});case p:return Object(u.a)(Object(u.a)({},e),{},{currentPage:n.payload});case g:return j;case m:return Object(u.a)(Object(u.a)({},e),{},{page:{}});default:return e}}}),h=[s.a],v=Object(c.d)(f,{},Object(c.c)(c.a.apply(void 0,h))),O=t(2),x=t.p+"static/media/default_header.e0460f9d.png",w=t.p+"static/media/optimalMove.c61f3e90.png",A=[{name:"McDo-Stalingrad",logo:"https://www.citypng.com/public/uploads/preview/-11600735522qbwj7xtpxu.png",list:[["(Villejuif-Louis Aragon) m7 Stalingrad"],["m5 jaures","(Villejuif-Louis Aragon) m7 place italie"],["m5 jaures","(Villejuif-Louis Aragon) m7 gare de l est","(Villejuif-Louis Aragon) m7 place italie","n15 place d'italie italie 2","n22 place d'italie italie 2","b47 place d'italie italie 2"],["velib 19004 Bassin Vilette, 19003 La place","velib 10037 Canal St-Martin, 10036 Stalingrad"],["n13 jaures","n41 jaures","n45 jaures","n14 gare de est","n15 chatelet","n22 chatelet"],["n43 place de la chapelle","velib 19004 Bassin Vilette, 19003 La place","velib 10037 Canal St-Martin, 10036 Stalingrad","velib 33018 Villebois"]]},{name:"Auchan",logo:"https://logo-marque.com/wp-content/uploads/2021/02/Auchan-Logo.png",list:[["b185 Convention - Fontainebleau","m7 Le Kremlin-Bicetre","velib 42707 Okab\xe9","velib 42703  Kremlin"]]},{name:"Paris",logo:"http://cdn.shopify.com/s/files/1/0066/0478/3687/products/FA205-france_1200x1200.jpg?v=1580479406",list:[["m7 Villejuif Leo Lagrange","b185 Dauphin - Anatole France","velib 48002 Vivaldi","n15 Dauphin - Anatole France","n22 Dauphin - Anatole France"]]},{name:"Agorae",logo:"https://www.universite-paris-saclay.fr/sites/default/files/2020-07/agorae.png",list:[["t3a porte italie"]],backList:[["t3a avenue de france"]]},{name:"PorteItalie",logo:"https://cdn.countryflags.com/thumbs/italy/flag-button-round-250.png",list:[["m7 Villejuif Leo Lagrange","b185 Dauphin - Anatole France","velib 48002 Vivaldi","n15 Dauphin - Anatole France","n22 Dauphin - Anatole France"],["b47 Kremlin Bicetre","b131 Kremlin Bicetre","b185 Kremlin Bicetre","m7 Kremlin Bicetre","velib 42703 Kremlin","n15 Kremlin Bicetre","n22 Kremlin Bicetre"],["b47 Convention Fontainebleau","b131 Convention Fontainebleau","b185 Convention Fontainebleau","b186 Convention Fontainebleau","velib 42707 Okab\xe9","n15 Convention Fontainebleau","n22 Convention Fontainebleau"],["b47 Roger Salengro Fontainebleau","b131 Roger Salengro Fontainebleau","b185 Roger Salengro Fontainebleau","b186 Roger Salengro Fontainebleau","velib 42706 Lidl","n15 Roger Salengro Fontainebleau","n22 Roger Salengro Fontainebleau"]],backList:[["b185 Porte Italie","b131 Porte Italie","b186 Porte Italie","b47 porte d'italie   helene boucher","(Villejuif-Louis Aragon) m7 maison blanche","velib 13032 Porte-Italie","n15 porte d'italie   helene boucher","n22 porte d'italie   helene boucher"],["b47 Roger Salengro Fontainebleau","b131 Roger Salengro Fontainebleau","b185 Roger Salengro Fontainebleau","b186 Roger Salengro Fontainebleau","velib 42706 Lidl","n15 Roger Salengro Fontainebleau","n22 Roger Salengro Fontainebleau"],["b47 Convention Fontainebleau","b131 Convention Fontainebleau","b185 Convention Fontainebleau","b186 Convention Fontainebleau","velib 42707 Okab\xe9","n15 Convention Fontainebleau","n22 Convention Fontainebleau"],["b185 Kremlin Bicetre","m7 Kremlin Bicetre","velib 42703 Kremlin","n15 Kremlin Bicetre","n22 Kremlin Bicetre"]]},{name:"Montsouris",logo:"https://logodix.com/logo/403615.jpg",list:[["t3a porte italie"]],backList:[["t3a Cite universitaire"],["b185 Porte Italie","b131 Porte Italie","b186 Porte Italie","b47 porte d'italie   helene boucher","velib 13032 Porte-Italie","n15 porte d'italie   helene boucher","n22 porte d'italie   helene boucher"]]}],y={m:"metros",b:"buses",r:"rers",t:"tramways",n:"noctiliens"},S=function(){return function(e){e({type:g})}},F=function(e,n){return function(t){t({type:m}),A[e].list[n].map((function(e,n){if(e.includes("velib"))return R(e,n)(t);var i=e.split(/\s(.+)/),a=y[i[0][0]],r=i[0].slice(1),l=i[1].replace(/ /g,"%20"),o="https://api-ratp.pierre-grimaud.fr/v4/schedules/".concat(a,"/").concat(r,"/").concat(l,"/").concat("A");(function(){var e=(new Date).toLocaleTimeString();return e>"00:15:00"&&e<"06:30:00"}()||"noctiliens"!==a)&&fetch(o).then((function(e){return e.json()})).then((function(e){var i=e.result.schedules.map((function(e){return e.message}));t({type:d,payload:{row:n,data:{times:i}}})}))}))}};var C,E,k,L,N="https://velib-metropole-opendata.smoove.pro/opendata/Velib_Metropole/station_status.json",M="https://anes-cors-everywhere.herokuapp.com/",R=function(e,n){return function(t){console.log("dans la fonction velib");var i=e.split(/(velib [0-9]+ )/),a=i[1].replace("velib","").trim(),r=i[2].trim();fetch(M+N).then((function(e){return e.json()})).then((function(e){return e.data.stations.filter((function(e){return e.stationCode===a})).map((function(e){return t({type:d,payload:{row:n,data:{velibStationName:r,times:[e.num_bikes_available_types[0].mechanical,e.num_bikes_available_types[1].ebike,e.numDocksAvailable]}}})}))}))}},V=t(3),P=t(1),D=V.a.header(C||(C=Object(O.a)(["\n  height: 25%;\n  background-color: rgb(249, 209, 25);\n  text-align: center;\n  border-bottom: 1px solid gray;\n"]))),B=V.a.div(E||(E=Object(O.a)(["\n  height: 5%;\n  border-bottom: 1px solid gray;\n"]))),I=Object(o.b)(null,{resetAll:S})((function(e){return Object(P.jsxs)(i.Fragment,{children:[Object(P.jsx)(D,{className:"center w-100",onClick:e.resetAll,children:Object(P.jsx)("img",{src:x,className:"h-100"})}),Object(P.jsxs)(B,{className:"row d-flex justify-content-between w-100",children:[Object(P.jsx)("div",{className:"col-4 h-100",children:Object(P.jsx)("img",{src:w,className:"h-75"})}),Object(P.jsx)("div",{className:"center col-4",children:"Meteo"})]})]})})),T=V.a.div(k||(k=Object(O.a)(["\n  display: flex;\n  flex: 0 0 25%;\n  justify-content: center;\n  align-items: center; \n  background-color: #00aa91;\n  opacity: ",";\n"])),(function(e){return"".concat(e.selected?1:.5)})),q=V.a.img(L||(L=Object(O.a)(["\n  height: 65%;\n  border-radius: 50%;\n"])));var K,Z,G,Q,U=Object(o.b)((function(e){return{currentOnglet:e.onglets.currentOnglet,currentPage:e.onglets.currentPage}}),{attributeOnglet:function(e){return function(n){S()(n),n({type:b,payload:e}),F(e,0)(n)}},uploadPage:F})((function(e){var n=e.onglet,t=A.indexOf(n),i=t===e.currentOnglet;return Object(P.jsx)(T,{onClick:function(){e.attributeOnglet(t)},selected:i,children:Object(P.jsx)(q,{src:e.onglet.logo,alt:n.name})})})),z=V.a.div(K||(K=Object(O.a)(["\n  position: absolute;\n  bottom: 0;\n  height: 10%;\n  width: 100%;\n  border: 1px solid gray;\n\n  display: flex;\n  overflow-x: scroll;\n  overflow-y: hidden;\n"]))),H=Object(o.b)((function(e){return{currentOnglet:e.onglets.currentOnglet}}))((function(e){return Object(P.jsx)(z,{children:A.map((function(e,n){return Object(P.jsx)(U,{onglet:e},n)}))})})),Y=t.p+"static/media/loading.4271eea8.gif",J=V.a.div(Z||(Z=Object(O.a)(["\n  display: flex;\n  height: 3.4rem;\n  margin-bottom: 0.2rem;\n  padding: 0;\n  overflow: scroll;\n"]))),W=["Train a l'approche","A l'approche","Train a quai","A l'arret"],X=["0 mn","1 mn","2 mn"],_=["SERVICE TERMINE","Schedules unavailable","Service termine","INFO INDISPO ....","Train retarde","SERVICE NON COMMENCE"],$=V.a.div(G||(G=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid gray;\n  margin: 0 0.1rem;\n  padding: 0 0.5rem;\n  color: ",";\n  flex: ",";\n  white-space: nowrap;\n  overflow: hidden;\n"])),(function(e){return W.concat(X).includes(e.value)?"orange":"inital"}),(function(e){return _.includes(e.value)?"1 0 66%":"1 0 32.5%"})),ee=V.a.img(Q||(Q=Object(O.a)(["\n  height: 68%;\n"]))),ne={m:"https://www.ratp.fr/sites/default/files/lines-assets/picto/metro/picto_metro_ligne-",b:"https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-",n:"https://www.ratp.fr/sites/default/files/lines-assets/picto/noctilien/picto_noctilien_ligne-n",t:"https://www.ratp.fr/sites/default/files/lines-assets/picto/tram/picto_tram_ligne-t",r:"https://www.ratp.fr/sites/default/files/lines-assets/picto/rer/picto_rer_ligne-"};var te,ie,ae,re,le,oe,ce=Object(o.b)((function(e){return{page:e.onglets.page}}))((function(e){var n=e.page[e.id],t=e.q.split(/\s(.+)/),i=ne[t[0][0]]+t[0].slice(1)+".svg";return Object(P.jsxs)(J,{children:[Object(P.jsx)($,{children:Object(P.jsx)(ee,{src:i})}),[0,1,2,3].map((function(e,t){var i,a;return(null===n||void 0===n?void 0:n.times)?(null===(i=n.times)||void 0===i?void 0:i[e])?Object(P.jsx)($,{value:null===n||void 0===n||null===(a=n.times)||void 0===a?void 0:a[e],children:Object(P.jsx)("div",{className:W.includes(n.times[e])?"blink":"",children:n.times[e]})},t):null:Object(P.jsx)($,{children:Object(P.jsx)(ee,{src:Y})},t)}))]})})),se=t.p+"static/media/velibE.69bc8de0.png",ue=t.p+"static/media/velibP.a400f89b.png",be=t.p+"static/media/logo_velib.92de839d.png",ge=V.a.div(te||(te=Object(O.a)(["\n  display: flex;\n  height: 3.4rem;\n  margin-bottom: 0.2rem;\n  padding: 0;\n  overflow: scroll;\n"]))),de={0:se,1:ue,2:"data:image/png;base64,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"},pe=["Train a l'approche","A l'approche","Train a quai","A l'arret"],me=["0 mn","1 mn","2 mn"],je=["SERVICE TERMINE","Schedules unavailable","Service termine","INFO INDISPO ....","Train retarde","SERVICE NON COMMENCE"],fe=V.a.div(ie||(ie=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid gray;\n  margin: 0 0.1rem;\n  padding: 0 0.5rem;\n  color: ",";\n  flex: ",";\n  white-space: nowrap;\n  overflow: hidden;\n"])),(function(e){return pe.concat(me).includes(e.value)?"orange":"inital"}),(function(e){return je.includes(e.value)?"1 0 66%":"1 0 32.5%"})),he=V.a.img(ae||(ae=Object(O.a)(["\n  height: 68%;\n"]))),ve=V.a.div(re||(re=Object(O.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),Oe=V.a.div(le||(le=Object(O.a)(["\n  display: flex;\n  flex: 1 0 70%;\n  align-items: center;\n  justify-content: center;\n  max-height: 70%;\n"]))),xe=V.a.div(oe||(oe=Object(O.a)(["\n  flex: 1 0;\n  display: flex;\n  font-size: 53%;\n  height: 20%;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n"])));var we,Ae=Object(o.b)((function(e){return{page:e.onglets.page}}))((function(e){var n=e.id,t=e.page[n];return Object(P.jsxs)(ge,{children:[Object(P.jsx)(fe,{children:Object(P.jsxs)(ve,{children:[Object(P.jsx)(Oe,{children:Object(P.jsx)(he,{src:be})}),Object(P.jsx)(xe,{children:null===t||void 0===t?void 0:t.velibStationName})]})}),[0,1,2].map((function(e,n){return Object(P.jsx)(fe,{value:e,children:Object(P.jsxs)(i.Fragment,{children:[Object(P.jsx)(he,{src:de[n],className:"mr-2"}),(null===t||void 0===t?void 0:t.times)?t.times[e]:Object(P.jsx)(he,{src:Y})]})},n)}))]})})),ye=V.a.div(we||(we=Object(O.a)(["\n  scroll-behavior: smooth;\n  overflow-y: scroll;\n  /* border: 4px solid red; */\n  max-height: 30%;\n"])));var Se,Fe,Ce=Object(o.b)((function(e){return{currentOnglet:e.onglets.currentOnglet,currentPage:e.onglets.currentPage,page:e.onglets.page}}))((function(e){var n=e.currentOnglet,t=e.currentPage;if(null==n)return null;var i=A[n].list[t];return console.log(e.page),Object(P.jsx)(ye,{className:"col-10 mt-5 p-0",children:i.map((function(e,n){return e.includes("velib")?Object(P.jsx)(Ae,{id:n},n):!function(){var e=(new Date).toLocaleTimeString();return e>"00:15:00"&&e<"06:30:00"}()&&/^n.*/.test(e)?null:Object(P.jsx)(ce,{q:e,id:n},n)}))})})),Ee=V.a.div(Se||(Se=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 1rem;\n  /* height: 5rem; */\n  /* border: 3px solid red; */\n"]))),ke="1.1rem",Le=V.a.div(Fe||(Fe=Object(O.a)(["\n  display: flex;\n  height: ",";\n  width: ",";\n  /* border: 3px solid red; */\n  border-radius: 50%;\n  background-color: black;\n  opacity: ",";\n  margin-right: 0.4rem;\n"])),ke,ke,(function(e){return e.selected?.7:.4}));var Ne=Object(o.b)((function(e){return{currentOnglet:e.onglets.currentOnglet,currentPage:e.onglets.currentPage}}),{goPageDansOnglet:function(e,n){return function(t){F(n,e)(t),t({type:p,payload:e})}}})((function(e){if(null==e.currentOnglet)return null;var n=A[e.currentOnglet].list;return Object(P.jsx)(Ee,{children:n.map((function(n,t){return Object(P.jsx)(Le,{selected:e.currentPage===t,onClick:function(){return e.goPageDansOnglet(t,e.currentOnglet)}},t)}))})}));var Me=function(){return Object(P.jsxs)(o.a,{store:v,children:[Object(P.jsx)(I,{}),Object(P.jsx)(Ce,{}),Object(P.jsx)(Ne,{}),Object(P.jsx)(H,{})]})};l.a.render(Object(P.jsx)(a.a.StrictMode,{children:Object(P.jsx)(Me,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.50d5a491.chunk.js.map