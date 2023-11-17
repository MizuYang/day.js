import{d as ft,r as w,s as K,o as H,c as T,a as t,t as Y,u,b as it,e as z,w as U,v as P,i as R,f as at,g as yt,h as _t,n as ut,j as Yt,k as ot,l as kt,F as $t,m as bt,p as C,q as vt}from"./index-ac5955b5.js";var tt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lt(m){return m&&m.__esModule&&Object.prototype.hasOwnProperty.call(m,"default")?m.default:m}var St={exports:{}};(function(m,r){(function(o,i){m.exports=i()})(tt,function(){var o=1e3,i=6e4,n=36e5,e="millisecond",l="second",s="minute",a="hour",d="day",D="week",p="month",h="quarter",g="year",V="date",A="Invalid Date",k=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,E=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,F={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(v){var _=["th","st","nd","rd"],c=v%100;return"["+v+(_[(c-20)%10]||_[c]||_[0])+"]"}},J=function(v,_,c){var y=String(v);return!y||y.length>=_?v:""+Array(_+1-y.length).join(c)+v},Z={s:J,z:function(v){var _=-v.utcOffset(),c=Math.abs(_),y=Math.floor(c/60),f=c%60;return(_<=0?"+":"-")+J(y,2,"0")+":"+J(f,2,"0")},m:function v(_,c){if(_.date()<c.date())return-v(c,_);var y=12*(c.year()-_.year())+(c.month()-_.month()),f=_.clone().add(y,p),$=c-f<0,b=_.clone().add(y+($?-1:1),p);return+(-(y+(c-f)/($?f-b:b-f))||0)},a:function(v){return v<0?Math.ceil(v)||0:Math.floor(v)},p:function(v){return{M:p,y:g,w:D,d,D:V,h:a,m:s,s:l,ms:e,Q:h}[v]||String(v||"").toLowerCase().replace(/s$/,"")},u:function(v){return v===void 0}},L="en",N={};N[L]=F;var Q="$isDayjsObject",G=function(v){return v instanceof ht||!(!v||!v[Q])},et=function v(_,c,y){var f;if(!_)return L;if(typeof _=="string"){var $=_.toLowerCase();N[$]&&(f=$),c&&(N[$]=c,f=$);var b=_.split("-");if(!f&&b.length>1)return v(b[0])}else{var S=_.name;N[S]=_,f=S}return!y&&f&&(L=f),f||!y&&L},O=function(v,_){if(G(v))return v.clone();var c=typeof _=="object"?_:{};return c.date=v,c.args=arguments,new ht(c)},M=Z;M.l=et,M.i=G,M.w=function(v,_){return O(v,{locale:_.$L,utc:_.$u,x:_.$x,$offset:_.$offset})};var ht=function(){function v(c){this.$L=et(c.locale,null,!0),this.parse(c),this.$x=this.$x||c.x||{},this[Q]=!0}var _=v.prototype;return _.parse=function(c){this.$d=function(y){var f=y.date,$=y.utc;if(f===null)return new Date(NaN);if(M.u(f))return new Date;if(f instanceof Date)return new Date(f);if(typeof f=="string"&&!/Z$/i.test(f)){var b=f.match(k);if(b){var S=b[2]-1||0,j=(b[7]||"0").substring(0,3);return $?new Date(Date.UTC(b[1],S,b[3]||1,b[4]||0,b[5]||0,b[6]||0,j)):new Date(b[1],S,b[3]||1,b[4]||0,b[5]||0,b[6]||0,j)}}return new Date(f)}(c),this.init()},_.init=function(){var c=this.$d;this.$y=c.getFullYear(),this.$M=c.getMonth(),this.$D=c.getDate(),this.$W=c.getDay(),this.$H=c.getHours(),this.$m=c.getMinutes(),this.$s=c.getSeconds(),this.$ms=c.getMilliseconds()},_.$utils=function(){return M},_.isValid=function(){return this.$d.toString()!==A},_.isSame=function(c,y){var f=O(c);return this.startOf(y)<=f&&f<=this.endOf(y)},_.isAfter=function(c,y){return O(c)<this.startOf(y)},_.isBefore=function(c,y){return this.endOf(y)<O(c)},_.$g=function(c,y,f){return M.u(c)?this[y]:this.set(f,c)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(c,y){var f=this,$=!!M.u(y)||y,b=M.p(c),S=function(st,W){var X=M.w(f.$u?Date.UTC(f.$y,W,st):new Date(f.$y,W,st),f);return $?X:X.endOf(d)},j=function(st,W){return M.w(f.toDate()[st].apply(f.toDate("s"),($?[0,0,0,0]:[23,59,59,999]).slice(W)),f)},B=this.$W,I=this.$M,q=this.$D,rt="set"+(this.$u?"UTC":"");switch(b){case g:return $?S(1,0):S(31,11);case p:return $?S(1,I):S(0,I+1);case D:var nt=this.$locale().weekStart||0,dt=(B<nt?B+7:B)-nt;return S($?q-dt:q+(6-dt),I);case d:case V:return j(rt+"Hours",0);case a:return j(rt+"Minutes",1);case s:return j(rt+"Seconds",2);case l:return j(rt+"Milliseconds",3);default:return this.clone()}},_.endOf=function(c){return this.startOf(c,!1)},_.$set=function(c,y){var f,$=M.p(c),b="set"+(this.$u?"UTC":""),S=(f={},f[d]=b+"Date",f[V]=b+"Date",f[p]=b+"Month",f[g]=b+"FullYear",f[a]=b+"Hours",f[s]=b+"Minutes",f[l]=b+"Seconds",f[e]=b+"Milliseconds",f)[$],j=$===d?this.$D+(y-this.$W):y;if($===p||$===g){var B=this.clone().set(V,1);B.$d[S](j),B.init(),this.$d=B.set(V,Math.min(this.$D,B.daysInMonth())).$d}else S&&this.$d[S](j);return this.init(),this},_.set=function(c,y){return this.clone().$set(c,y)},_.get=function(c){return this[M.p(c)]()},_.add=function(c,y){var f,$=this;c=Number(c);var b=M.p(y),S=function(I){var q=O($);return M.w(q.date(q.date()+Math.round(I*c)),$)};if(b===p)return this.set(p,this.$M+c);if(b===g)return this.set(g,this.$y+c);if(b===d)return S(1);if(b===D)return S(7);var j=(f={},f[s]=i,f[a]=n,f[l]=o,f)[b]||1,B=this.$d.getTime()+c*j;return M.w(B,this)},_.subtract=function(c,y){return this.add(-1*c,y)},_.format=function(c){var y=this,f=this.$locale();if(!this.isValid())return f.invalidDate||A;var $=c||"YYYY-MM-DDTHH:mm:ssZ",b=M.z(this),S=this.$H,j=this.$m,B=this.$M,I=f.weekdays,q=f.months,rt=f.meridiem,nt=function(W,X,ct,pt){return W&&(W[X]||W(y,$))||ct[X].slice(0,pt)},dt=function(W){return M.s(S%12||12,W,"0")},st=rt||function(W,X,ct){var pt=W<12?"AM":"PM";return ct?pt.toLowerCase():pt};return $.replace(E,function(W,X){return X||function(ct){switch(ct){case"YY":return String(y.$y).slice(-2);case"YYYY":return M.s(y.$y,4,"0");case"M":return B+1;case"MM":return M.s(B+1,2,"0");case"MMM":return nt(f.monthsShort,B,q,3);case"MMMM":return nt(q,B);case"D":return y.$D;case"DD":return M.s(y.$D,2,"0");case"d":return String(y.$W);case"dd":return nt(f.weekdaysMin,y.$W,I,2);case"ddd":return nt(f.weekdaysShort,y.$W,I,3);case"dddd":return I[y.$W];case"H":return String(S);case"HH":return M.s(S,2,"0");case"h":return dt(1);case"hh":return dt(2);case"a":return st(S,j,!0);case"A":return st(S,j,!1);case"m":return String(j);case"mm":return M.s(j,2,"0");case"s":return String(y.$s);case"ss":return M.s(y.$s,2,"0");case"SSS":return M.s(y.$ms,3,"0");case"Z":return b}return null}(W)||b.replace(":","")})},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(c,y,f){var $,b=this,S=M.p(y),j=O(c),B=(j.utcOffset()-this.utcOffset())*i,I=this-j,q=function(){return M.m(b,j)};switch(S){case g:$=q()/12;break;case p:$=q();break;case h:$=q()/3;break;case D:$=(I-B)/6048e5;break;case d:$=(I-B)/864e5;break;case a:$=I/n;break;case s:$=I/i;break;case l:$=I/o;break;default:$=I}return f?$:M.a($)},_.daysInMonth=function(){return this.endOf(p).$D},_.$locale=function(){return N[this.$L]},_.locale=function(c,y){if(!c)return this.$L;var f=this.clone(),$=et(c,y,!0);return $&&(f.$L=$),f},_.clone=function(){return M.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},v}(),Mt=ht.prototype;return O.prototype=Mt,[["$ms",e],["$s",l],["$m",s],["$H",a],["$W",d],["$M",p],["$y",g],["$D",V]].forEach(function(v){Mt[v[1]]=function(_){return this.$g(_,v[0],v[1])}}),O.extend=function(v,_){return v.$i||(v(_,ht,O),v.$i=!0),O},O.locale=et,O.isDayjs=G,O.unix=function(v){return O(1e3*v)},O.en=N[L],O.Ls=N,O.p={},O})})(St);var gt=St.exports;const x=lt(gt),Ht=ft("demo1Store",()=>{const m=w(""),r=w(""),o=w(""),i=w(""),n=w("");function e(){x.weekdays&&x.weekdaysShort&&x.weekdaysMin&&x.monthsShort&&x.months&&(m.value=x.weekdays(),r.value=x.weekdaysShort(),o.value=x.weekdaysMin(),i.value=x.monthsShort(),n.value=x.months())}return{weekdays:m,weekdaysShort:r,weekdaysMin:o,monthsShort:i,months:n,列出該語系的月份和週:e}}),Nt={class:"bg-gainsboro mb-3 p-10"},Bt=t("h2",{class:"text-20 mb-3"},"1. 列出該語系的月份、週",-1),It={class:"bg-whitesmoke mb-3 p-3"},Ct=t("h3",{class:"text-18 fw-bold-7 mb-1"},"dayjs.weekdays",-1),Et={class:"p-2"},zt={class:"bg-whitesmoke mb-3 p-3"},Wt=t("h3",{class:"text-18 fw-bold-7 mb-1"},"dayjs.weekdaysShort",-1),Rt={class:"p-2"},Ft={class:"bg-whitesmoke mb-3 p-3"},Jt=t("h3",{class:"text-18 fw-bold-7 mb-1"},"dayjs.weekdaysMin",-1),Zt={class:"p-2"},qt={class:"bg-whitesmoke mb-3 p-3"},Pt=t("h3",{class:"text-18 fw-bold-7 mb-1"},"dayjs.monthsShort",-1),Gt={class:"p-2"},Qt={class:"bg-whitesmoke mb-3 p-3"},Xt=t("h3",{class:"text-18 fw-bold-7 mb-1"},"dayjs.months",-1),Kt={class:"p-2"},te={__name:"Demo1列出該語系的月份和週",setup(m){const{weekdays:r,weekdaysShort:o,weekdaysMin:i,monthsShort:n,months:e}=K(Ht());return(l,s)=>(H(),T("section",Nt,[Bt,t("div",It,[Ct,t("p",Et,Y(u(r)),1)]),t("div",zt,[Wt,t("p",Rt,Y(u(o)),1)]),t("div",Ft,[Jt,t("p",Zt,Y(u(i)),1)]),t("div",qt,[Pt,t("p",Gt,Y(u(n)),1)]),t("div",Qt,[Xt,t("p",Kt,Y(u(e)),1)])]))}};var Tt={exports:{}};(function(m,r){(function(o,i){m.exports=i()})(tt,function(){return function(o,i,n){var e=function(l,s){if(!s||!s.length||s.length===1&&!s[0]||s.length===1&&Array.isArray(s[0])&&!s[0].length)return null;var a;s.length===1&&s[0].length>0&&(s=s[0]),a=(s=s.filter(function(D){return D}))[0];for(var d=1;d<s.length;d+=1)s[d].isValid()&&!s[d][l](a)||(a=s[d]);return a};n.max=function(){var l=[].slice.call(arguments,0);return e("isAfter",l)},n.min=function(){var l=[].slice.call(arguments,0);return e("isBefore",l)}}})})(Tt);var ee=Tt.exports;const ne=lt(ee);function se(){const m=w("2023-01-01"),r=w("2023/03/15"),o=w("2023.05.20"),i=w(""),n=w("");x.extend(ne),it(()=>{e()});function e(){const l=x(m.value),s=x(r.value),a=x(o.value),d=x.min(l,s,a),D=x.max(l,s,a);isNaN(d.$D)||(n.value=D.format("YYYY-MM-DD")),isNaN(D.$D)||(i.value=d.format("YYYY-MM-DD"))}return{date1:m,date2:r,date3:o,minDate:i,maxDate:n,比較日期的大小:e}}const oe={class:"bg-gainsboro mb-3 p-10"},ae=t("h2",{class:"text-20 mb-3"},"2. 比較日期的大小",-1),re={class:"bg-whitesmoke p-3"},ie={class:"d-flex align-items-center mt-3"},le={for:"demo2Date1"},de={for:"demo2Date2",class:"mx-5"},ce={for:"demo2Date3"},ue={__name:"Demo2比較日期的大小",setup(m){const{date1:r,date2:o,date3:i,minDate:n,maxDate:e,比較日期的大小:l}=se();return(s,a)=>(H(),T("section",oe,[ae,t("div",null,[t("div",re,[t("p",null,"最大的日期為： "+Y(u(e)),1),t("p",null,"最小的日期為： "+Y(u(n)),1)]),t("div",ie,[t("label",le,[z(" (一) 請輸入日期 "),U(t("input",{type:"text",id:"demo2Date1",class:"form-control",placeholder:"日期格式 YYYY/MM/DD","onUpdate:modelValue":a[0]||(a[0]=d=>R(r)?r.value=d:null),onInput:a[1]||(a[1]=(...d)=>u(l)&&u(l)(...d))},null,544),[[P,u(r)]])]),t("label",de,[z(" (二) 請輸入日期 "),U(t("input",{type:"text",id:"demo2Date2",class:"form-control",placeholder:"日期格式 YYYY/MM/DD","onUpdate:modelValue":a[2]||(a[2]=d=>R(o)?o.value=d:null),onInput:a[3]||(a[3]=(...d)=>u(l)&&u(l)(...d))},null,544),[[P,u(o)]])]),t("label",ce,[z(" (三) 請輸入日期 "),U(t("input",{type:"text",id:"demo2Date3",class:"form-control",placeholder:"日期格式 YYYY/MM/DD","onUpdate:modelValue":a[4]||(a[4]=d=>R(i)?i.value=d:null),onInput:a[5]||(a[5]=(...d)=>u(l)&&u(l)(...d))},null,544),[[P,u(i)]])])])])]))}},xt=ft("todayStore",()=>{const m=w(x()),r=w("todayAdd"),o=w(1),i=w("day"),n=w(""),e=at({day:{cn:"天",en:"day"},week:{cn:"週",en:"week"},month:{cn:"月",en:"month"},year:{cn:"年",en:"year"},hour:{cn:"小時",en:"hour"},minute:{cn:"分鐘",en:"minute"},second:{cn:"秒",en:"second"},millisecond:{cn:"毫秒",en:"millisecond"}}),l=yt(()=>r.value==="todayAdd"),s=yt(()=>e[i.value].cn);function a(){const d=l.value?"add":"subtract",D=x(m.value)[d](o.value,i.value).format("YYYY-MM-DD hh:mm:ss A");n.value=D}return{today:m,todayDateOperationMode:r,todayModificationNum:o,todayMdificationUnit:i,todayResult:n,isTodayAddMode:l,todayUnitCn:s,unitSelectionData:e,todayDateComputed:a}});function me(){const{todayModificationNum:m,todayMdificationUnit:r}=K(xt()),{todayDateComputed:o}=xt();return _t(()=>{m.value!==""&&r.value&&o()}),it(()=>{o()}),{}}const fe={class:"d-flex align-items-center"},_e={class:"d-flex align-items-center"},he={class:"text-gray border-bottom border-dark px-3"},pe={class:"text-gray border-bottom border-dark px-3"},ye=t("span",{class:"text-gray mx-3"},"=",-1),ve={class:"text-gray border-bottom border-dark px-3"},xe={__name:"TodayComputed",setup(m){const{today:r,todayModificationNum:o,isTodayAddMode:i,todayUnitCn:n,todayResult:e}=K(xt());return me(),(l,s)=>(H(),T("div",fe,[t("div",_e,[t("span",he,Y(u(r).format("YYYY-MM-DD HH:mm:ss A")),1),t("span",{class:ut(["text-20 fw-bold-9 mx-3",u(i)?"text-success":"text-danger"]),style:Yt(!u(i)&&"padding:0 2.25px;")},Y(u(i)?"+":"-"),7),t("span",pe,Y(u(o))+" "+Y(u(n)),1),ye,t("span",ve,Y(u(e)),1)])]))}},$e={class:"bg-whitesmoke me-auto p-7 mb-10",style:{width:"100%"}},be=t("p",{class:"text-18 text-center fw-bold-7 mb-5"},"今天日期",-1),ge={for:"todayReadonly",class:"d-flex align-items-center mb-3"},De=["value"],Me={class:"d-flex align-items-center py-5"},we={class:"d-flex align-items-center"},Ye={class:"me-5"},ke=t("label",{class:"form-check-label ps-2",for:"todayAdd"}," 增加 ",-1),Se={class:"my-2"},He=t("label",{class:"form-check-label ps-2",for:"todaySubtract"}," 減少 ",-1),Te={for:"todayModificationNum",class:"d-flex align-items-center me-2"},Ve={class:"d-flex align-items-center"},Oe=t("label",{for:"targetUnitSetup"},null,-1),je=["value"],Ue={__name:"Today",setup(m){const{today:r,todayDateOperationMode:o,todayModificationNum:i,todayMdificationUnit:n,unitSelectionData:e}=K(xt());return(l,s)=>(H(),T("div",$e,[be,t("label",ge,[z(" 今天日期 "),t("input",{type:"text",class:"form-control w-75 ms-3",id:"todayReadonly",value:u(r).format("YYYY-MM-DD HH:mm:ss A"),readonly:""},null,8,De)]),t("div",Me,[t("div",we,[t("div",Ye,[U(t("input",{class:"form-check-input",type:"radio",value:"todayAdd",id:"todayAdd",name:"todayDateOperationMode","onUpdate:modelValue":s[0]||(s[0]=a=>R(o)?o.value=a:null)},null,512),[[ot,u(o)]]),ke]),t("div",Se,[U(t("input",{class:"form-check-input",type:"radio",value:"todaySubtract",id:"todaySubtract",name:"todayDateOperationMode","onUpdate:modelValue":s[1]||(s[1]=a=>R(o)?o.value=a:null)},null,512),[[ot,u(o)]]),He])]),t("label",Te,[U(t("input",{type:"number",class:"form-control text-center ms-3",id:"todayModificationNum","onUpdate:modelValue":s[2]||(s[2]=a=>R(i)?i.value=a:null),style:{width:"100px",padding:"4.5px 0"}},null,512),[[P,u(i),void 0,{number:!0}]])]),t("div",Ve,[Oe,U(t("select",{class:"form-select","onUpdate:modelValue":s[3]||(s[3]=a=>R(n)?n.value=a:null),id:"targetUnitSetup"},[(H(!0),T($t,null,bt(u(e),a=>(H(),T("option",{key:a,value:a.en},Y(a.cn),9,je))),128))],512),[[kt,u(n)]])])]),C(xe)]))}},mt=ft("targetStore",()=>{const m=w(x("2023-11-20 21:33:26")),r=w("targetAdd"),o=w(1),i=w("day"),n=w(""),e=w(!1),l=at({day:{cn:"天",en:"day"},week:{cn:"週",en:"week"},month:{cn:"月",en:"month"},year:{cn:"年",en:"year"},hour:{cn:"小時",en:"hour"},minute:{cn:"分鐘",en:"minute"},second:{cn:"秒",en:"second"},millisecond:{cn:"毫秒",en:"millisecond"}}),s=yt(()=>r.value==="targetAdd"),a=yt(()=>l[i.value].cn);function d(){const p=s.value?"add":"subtract",h=x(m.value)[p](o.value,i.value).format("YYYY-MM-DD hh:mm:ss A");n.value=h}function D(p){const h=x(p.target.value);isNaN(h.$D)?e.value=!0:(e.value=!1,m.value=h,console.log("賦予直",m.value))}return{targetDate:m,targetDateOperationMode:r,targetModificationNum:o,targetMdificationUnit:i,targetResult:n,isTargetAddMode:s,targetUnitCn:a,unitSelectionData:l,isErrorMessageShow:e,targetDateComputed:d,updateDate:D}});function Ae(){const{targetModificationNum:m,targetMdificationUnit:r}=K(mt()),{targetDateComputed:o}=mt();return _t(()=>{m.value!==""&&r.value&&o()}),it(()=>{o()}),{}}const Le={class:"d-flex align-items-center"},Ne={class:"d-flex align-items-center"},Be={class:"text-gray border-bottom border-dark px-3"},Ie={class:"text-gray border-bottom border-dark px-3"},Ce=t("span",{class:"text-gray mx-5"},"=",-1),Ee={class:"text-gray border-bottom border-dark px-3"},ze={__name:"TargetComputed",setup(m){const{targetDate:r,targetModificationNum:o,isTargetAddMode:i,targetUnitCn:n,targetResult:e}=K(mt());return Ae(),(l,s)=>(H(),T("div",Le,[t("div",Ne,[t("span",Be,Y(u(r).format("YYYY-MM-DD HH:mm:ss A")),1),t("span",{class:ut(["text-20 fw-bold-9 mx-5",u(i)?"text-success":"text-danger"]),style:Yt(!u(i)&&"padding:0 2.25px;")},Y(u(i)?"+":"-"),7),t("span",Ie,Y(u(o))+" "+Y(u(n)),1),Ce,t("span",Ee,Y(u(e)),1)])]))}},We={class:"bg-whitesmoke ms-5 p-7 mb-10",style:{width:"100%"}},Re=t("p",{class:"text-18 text-center fw-bold-7 mb-5"},"指定日期",-1),Fe={for:"setTargetDate",class:"d-flex align-items-center mb-3"},Je=["value"],Ze={class:"d-flex align-items-center py-5"},qe={class:"d-flex align-items-center"},Pe={class:"me-5"},Ge=t("label",{class:"form-check-label ps-2",for:"targetAdd"}," 增加 ",-1),Qe={class:"my-2"},Xe=t("label",{class:"form-check-label ps-2",for:"targetSubtract"}," 減少 ",-1),Ke={for:"targetModificationNum",class:"d-flex align-items-center me-2"},tn={class:"d-flex align-items-center"},en=["value"],nn={__name:"Target",setup(m){const{targetDate:r,targetDateOperationMode:o,targetModificationNum:i,targetMdificationUnit:n,unitSelectionData:e}=K(mt()),{updateDate:l}=mt();return(s,a)=>(H(),T("div",We,[Re,t("label",Fe,[z(" 指定日期 "),t("input",{type:"text",class:"form-control w-75 ms-3",id:"setTargetDate",placeholder:"輸入日期格式 yyyy/mm/dd hh:mm:ss",value:u(r).format("YYYY-MM-DD HH:mm:ss"),onChange:a[0]||(a[0]=(...d)=>u(l)&&u(l)(...d))},null,40,Je)]),t("div",Ze,[t("div",qe,[t("div",Pe,[U(t("input",{class:"form-check-input",type:"radio",value:"targetAdd",id:"targetAdd",name:"targetDateOperationMode","onUpdate:modelValue":a[1]||(a[1]=d=>R(o)?o.value=d:null)},null,512),[[ot,u(o)]]),Ge]),t("div",Qe,[U(t("input",{class:"form-check-input",type:"radio",value:"targetSubtract",id:"targetSubtract",name:"targetDateOperationMode","onUpdate:modelValue":a[2]||(a[2]=d=>R(o)?o.value=d:null)},null,512),[[ot,u(o)]]),Xe])]),t("label",Ke,[U(t("input",{type:"number",class:"form-control text-center ms-3",id:"targetModificationNum","onUpdate:modelValue":a[3]||(a[3]=d=>R(i)?i.value=d:null),style:{width:"100px",padding:"4.5px 0"}},null,512),[[P,u(i),void 0,{number:!0}]])]),t("div",tn,[U(t("select",{class:"form-select","onUpdate:modelValue":a[4]||(a[4]=d=>R(n)?n.value=d:null),id:"targetUnitSetup"},[(H(!0),T($t,null,bt(u(e),d=>(H(),T("option",{key:d,value:d.en},Y(d.cn),9,en))),128))],512),[[kt,u(n)]])])]),C(ze)]))}},sn={class:"bg-gainsboro mb-3 p-10 pb-5"},on=t("h2",{class:"text-20 mb-3"},"3. 日期加減",-1),an={class:"d-flex align-items-center"},rn={__name:"Demo3日期加減",setup(m){return(r,o)=>(H(),T("section",sn,[on,t("div",an,[C(Ue),C(nn)])]))}},ln={class:"bg-gainsboro mb-3 p-10"},dn=t("h2",{class:"text-20 mb-3"},"4. 驗證日期格式 (非嚴格校驗)",-1),cn=["value","onInput"],un={__name:"Demo4驗證日期格式",setup(m){const r=at({date1:{id:"1",name:"date1",value:"2023/11/20 11:10:20",isValid:!1},date2:{id:"2",name:"date2",value:"2023-11-20",isValid:!1},date3:{id:"3",name:"date3",value:"2023.11.20",isValid:!1}});it(()=>{o()});function o(){Object.keys(r).forEach(e=>{n(e,r[e].value)})}function i(e,l){r[l].value=e.target.value,n(l,e.target.value)}function n(e,l){r[e].isValid=x(l).isValid()}return(e,l)=>(H(),T("section",ln,[dn,(H(!0),T($t,null,bt(r,s=>(H(),T("div",{class:"d-flex align-items-center mb-3",key:s.id},[t("input",{type:"text",class:"form-control",placeholder:"請輸入合法的日期",value:s.value,onInput:a=>i(a,s.name),style:{width:"250px"}},null,40,cn),t("p",{class:ut(["text-20 ms-3",s.isValid?"text-success":"text-danger"])},Y(s.isValid?"合法日期":"不合法日期"),3)]))),128))]))}};var Vt={exports:{}};(function(m,r){(function(o,i){m.exports=i()})(tt,function(){return function(o,i,n){o=o||{};var e=i.prototype,l={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(d,D,p,h){return e.fromToBase(d,D,p,h)}n.en.relativeTime=l,e.fromToBase=function(d,D,p,h,g){for(var V,A,k,E=p.$locale().relativeTime||l,F=o.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],J=F.length,Z=0;Z<J;Z+=1){var L=F[Z];L.d&&(V=h?n(d).diff(p,L.d,!0):p.diff(d,L.d,!0));var N=(o.rounding||Math.round)(Math.abs(V));if(k=V>0,N<=L.r||!L.r){N<=1&&Z>0&&(L=F[Z-1]);var Q=E[L.l];g&&(N=g(""+N)),A=typeof Q=="string"?Q.replace("%d",N):Q(N,D,L.l,k);break}}if(D)return A;var G=k?E.future:E.past;return typeof G=="function"?G(A):G.replace("%s",A)},e.to=function(d,D){return s(d,D,this,!0)},e.from=function(d,D){return s(d,D,this)};var a=function(d){return d.$u?n.utc():n()};e.toNow=function(d){return this.to(a(this),d)},e.fromNow=function(d){return this.from(a(this),d)}}})})(Vt);var mn=Vt.exports;const Ot=lt(mn),Dt=ft("dayjsStore",()=>{const m=["YYYY-MM-DD HH:mm:ss","YYYY-MM-DD HH:mm","YYYY-MM-DD","YYYY/MM/DD HH:mm:ss","YYYY/MM/DD HH:mm","YYYY/MM/DD","YYYY.MM.DD HH:mm:ss","YYYY.MM.DD HH:mm","YYYY.MM.DD"];function r(o){return x(o,m,!0).isValid()}return{checkIsValid:r}});x.extend(Ot);function fn(){const{checkIsValid:m}=Dt(),r=w(x()),o=w(x().add(1,"day").format("YYYY-MM-DD HH:mm:ss")),i=w(""),n=w("");it(()=>{e()});function e(){i.value=x(o.value).fromNow(),n.value=x(o.value).toNow()}function l(s){m(s.target.value)&&(o.value=s.target.value,e())}return{today:r,inputDate:o,fromNow:i,toNow:n,updateDemo:l}}const _n={class:"w-100 bg-whitesmoke me-5 px-10 pt-12",style:{"padding-bottom":"53px"}},hn=t("h3",{class:"text-18 text-center fw-bold-7 mb-5"},"某日期到今天相距多少時間",-1),pn=["value"],yn={class:"d-flex align-items-center"},vn=t("code",null,"dayjs(自訂日期).fromNow()",-1),xn={class:"ms-5"},$n={class:"d-flex align-items-center"},bn=t("code",{class:"pe-6"},"dayjs(自訂日期).toNow()",-1),gn={class:"ms-5"},Dn={__name:"Today",setup(m){const{today:r,inputDate:o,fromNow:i,toNow:n,updateDemo:e}=fn();return(l,s)=>(H(),T("div",_n,[hn,z(" 今天日期: "+Y(u(r).format("YYYY-MM-DD HH:mm:ss"))+" ",1),t("input",{type:"text",class:"form-control w-75 my-3",value:u(o),onInput:s[0]||(s[0]=(...a)=>u(e)&&u(e)(...a))},null,40,pn),t("p",yn,[vn,t("span",xn,Y(u(i)),1)]),t("p",$n,[bn,t("span",gn,Y(u(n)),1)])]))}};x.extend(Ot);function Mn(){const{checkIsValid:m}=Dt(),r=at({aDate:"2023/05/02 10:00",bDate:"2023/04/28 09:00",from:"",to:""}),{aDate:o,bDate:i,from:n,to:e}=vt(r);it(()=>{l()});function l(){n.value=x(o.value).from(i.value),e.value=x(o.value).to(i.value)}function s(a,d){m(a.target.value)&&(r[d]=a.target.value,l())}return{...vt(r),updateDemo:s}}const wn={class:"w-100 bg-whitesmoke me-5 p-10"},Yn=t("h3",{class:"text-18 text-center fw-bold-7 mb-5"},"A日期到B日期相距多少時間",-1),kn={for:"aDate",class:"d-flex align-items-center"},Sn=["value"],Hn={for:"bDate",class:"d-flex align-items-center"},Tn=["value"],Vn={class:"d-flex align-items-center"},On=t("code",null,"dayjs(a).from(b)",-1),jn={class:"ms-5"},Un={class:"d-flex align-items-center"},An=t("code",{class:"pe-6"},"dayjs(a).to(b)",-1),Ln={class:"ms-5"},Nn={__name:"Target",setup(m){const{aDate:r,bDate:o,from:i,to:n,updateDemo:e}=Mn();return(l,s)=>(H(),T("div",wn,[Yn,t("label",kn,[z(" A日期 "),t("input",{type:"text",class:"form-control w-75 ms-3 my-3",id:"aDate",value:u(r),onInput:s[0]||(s[0]=a=>u(e)(a,"aDate"))},null,40,Sn)]),t("label",Hn,[z(" B日期 "),t("input",{type:"text",class:"form-control w-75 ms-3 my-3",id:"bDate",value:u(o),onInput:s[1]||(s[1]=a=>u(e)(a,"bDate"))},null,40,Tn)]),t("p",Vn,[On,t("span",jn,Y(u(i)),1)]),t("p",Un,[An,t("span",Ln,Y(u(n)),1)])]))}},Bn={class:"bg-gainsboro mb-3 p-10"},In=t("h2",{class:"text-20 mb-3"},"5. 日期相距時間",-1),Cn={class:"d-flex align-items-center"},En={__name:"Demo5日期相距時間",setup(m){return(r,o)=>(H(),T("section",Bn,[In,t("div",Cn,[C(Dn),C(Nn)])]))}};var jt={exports:{}};(function(m,r){(function(o,i){m.exports=i()})(tt,function(){return function(o,i,n){i.prototype.isBetween=function(e,l,s,a){var d=n(e),D=n(l),p=(a=a||"()")[0]==="(",h=a[1]===")";return(p?this.isAfter(d,s):!this.isBefore(d,s))&&(h?this.isBefore(D,s):!this.isAfter(D,s))||(p?this.isBefore(d,s):!this.isAfter(d,s))&&(h?this.isAfter(D,s):!this.isBefore(D,s))}}})})(jt);var zn=jt.exports;const Wn=lt(zn);x.extend(Wn);const wt=ft("isBetweenStore",()=>{const{checkIsValid:m}=Dt(),r=at({startDate:"2023-11-20 00:00",centerDate:"2023-11-15 00:00",endDate:"2023-11-25 15:00"}),o=w(!1),{startDate:i,endDate:n,centerDate:e}=vt(r);function l(a,d){m(a.target.value)&&(r[d]=a.target.value,s())}function s(){o.value=x(e.value).isBetween(i.value,x(n.value))}return{...vt(r),isBetween:o,updateDate:l}}),Rn={class:"text-center bg-whitesmoke p-10"},Fn={class:"text-18 fw-bold-7"},Jn=t("p",{class:"text-18 text-center mt-5"}," 請修改中間日期，使其在開始日期與結束日期之間 ",-1),Zn={class:"d-flex justify-content-center aligm-items-center mt-5"},qn={class:"d-flex flex-column bg-gray text-light"},Pn=t("span",{class:"text-18 text-center"},"開始日期",-1),Gn=["value"],Qn=t("span",{class:"text-18 text-light text-center"},"中間日期",-1),Xn=["value"],Kn={class:"d-flex flex-column bg-gray text-light"},ts=t("span",{class:"text-18 text-center"},"結束日期",-1),es=["value"],ns={__name:"IsBetween",setup(m){const{startDate:r,centerDate:o,endDate:i,isBetween:n}=K(wt()),{updateDate:e}=wt();return(l,s)=>(H(),T("div",Rn,[t("h3",Fn,[z(" 是否在兩個日期之間 ( "),t("span",{class:ut(["text-20",u(n)?"text-success":"text-danger"])},Y(u(n)?"O":"X"),3),z(" ) ")]),Jn,t("div",Zn,[t("div",qn,[Pn,t("input",{type:"text",class:"form-control text-center",value:u(r),onInput:s[0]||(s[0]=a=>u(e)(a,"startDate")),style:{width:"200px"}},null,40,Gn)]),t("div",{class:ut(["d-flex flex-column mx-5",u(n)?"bg-success":"bg-danger"])},[Qn,t("input",{type:"text",class:"form-control text-center",value:u(o),onInput:s[1]||(s[1]=a=>u(e)(a,"centerDate")),style:{width:"200px"}},null,40,Xn)],2),t("div",Kn,[ts,t("input",{type:"text",class:"form-control text-center",value:u(i),onInput:s[2]||(s[2]=a=>u(e)(a,"endDate")),style:{width:"200px"}},null,40,es)])])]))}},ss={class:"bg-gainsboro mb-3 p-10"},os=t("h2",{class:"text-20 mb-3"},"6. 是否在兩個日期之間",-1),as={__name:"Demo6是否在兩個日期之間",setup(m){return(r,o)=>(H(),T("section",ss,[os,C(ns)]))}};var Ut={exports:{}};(function(m,r){(function(o,i){m.exports=i()})(tt,function(){return function(o,i,n){var e=i.prototype,l=function(h){var g,V=h.date,A=h.utc,k={};if(!((g=V)===null||g instanceof Date||g instanceof Array||e.$utils().u(g)||g.constructor.name!=="Object")){if(!Object.keys(V).length)return new Date;var E=A?n.utc():n();Object.keys(V).forEach(function(et){var O,M;k[O=et,M=e.$utils().p(O),M==="date"?"day":M]=V[et]});var F=k.day||(k.year||k.month>=0?1:E.date()),J=k.year||E.year(),Z=k.month>=0?k.month:k.year||k.day?0:E.month(),L=k.hour||0,N=k.minute||0,Q=k.second||0,G=k.millisecond||0;return A?new Date(Date.UTC(J,Z,F,L,N,Q,G)):new Date(J,Z,F,L,N,Q,G)}return V},s=e.parse;e.parse=function(h){h.date=l.bind(this)(h),s.bind(this)(h)};var a=e.set,d=e.add,D=e.subtract,p=function(h,g,V,A){A===void 0&&(A=1);var k=Object.keys(g),E=this;return k.forEach(function(F){E=h.bind(E)(g[F]*A,F)}),E};e.set=function(h,g){return g=g===void 0?h:g,h.constructor.name==="Object"?p.bind(this)(function(V,A){return a.bind(this)(A,V)},g,h):a.bind(this)(h,g)},e.add=function(h,g){return h.constructor.name==="Object"?p.bind(this)(d,h,g):d.bind(this)(h,g)},e.subtract=function(h,g){return h.constructor.name==="Object"?p.bind(this)(d,h,g,-1):D.bind(this)(h,g)}}})})(Ut);var rs=Ut.exports;const At=lt(rs),is={class:"d-flex align-items-center mb-3"},ls={for:"demo7Hour",class:"d-flex align-items-center"},ds=t("span",{class:"mx-3"},"年",-1),cs={for:"demo7Hour",class:"d-flex align-items-center"},us=t("span",{class:"mx-3"},"月",-1),ms={for:"demo7Hour",class:"d-flex align-items-center"},fs=t("span",{class:"mx-5",style:{"font-size":"20px"}},"=",-1),_s={class:"bg-whitesmoke fw-bold-7 py-2 px-3"},hs={__name:"年月日自動轉換",setup(m){x.extend(At);const r=at({years:2010,months:3,date:5}),o=w("");return _t(()=>{o.value=x(r).format("YYYY-MM-DD")}),(i,n)=>(H(),T("div",is,[t("label",ls,[U(t("input",{type:"number",class:"form-control text-center mx-2",id:"demo7Hour",placeholder:"請輸入小時","onUpdate:modelValue":n[0]||(n[0]=e=>r.years=e),style:{width:"100px"}},null,512),[[P,r.years]]),ds]),t("label",cs,[U(t("input",{type:"number",class:"form-control text-center mx-2",id:"demo7Hour",placeholder:"請輸入小時","onUpdate:modelValue":n[1]||(n[1]=e=>r.months=e),style:{width:"100px"}},null,512),[[P,r.months]]),us]),t("label",ms,[U(t("input",{type:"number",class:"form-control text-center mx-2",id:"demo7Hour",placeholder:"請輸入小時","onUpdate:modelValue":n[2]||(n[2]=e=>r.date=e),style:{width:"100px"}},null,512),[[P,r.date]]),z(" 日 ")]),fs,t("p",_s,Y(o.value),1)]))}},ps={class:"d-flex align-items-center"},ys={for:"demo7Hour",class:"d-flex align-items-center"},vs={for:"demo7Minutes",class:"d-flex align-items-center"},xs={for:"demo7Hour",class:"d-flex align-items-center"},$s={for:"demo7Hour",class:"d-flex align-items-center"},bs=t("span",{class:"mx-5",style:{"font-size":"20px"}},"=",-1),gs={class:"bg-whitesmoke fw-bold-7 py-2 px-3"},Ds={__name:"時分秒自動轉換",setup(m){x.extend(At);const r=at({hours:15,minutes:10,seconds:3,milliseconds:123}),o=w("");return _t(()=>{o.value=x(r).format("YYYY-MM-DD HH:mm:ss A")}),(i,n)=>(H(),T("div",ps,[t("label",ys,[U(t("input",{type:"number",class:"form-control text-center mx-2",id:"demo7Hour",placeholder:"請輸入小時","onUpdate:modelValue":n[0]||(n[0]=e=>r.hours=e),style:{width:"100px"}},null,512),[[P,r.hours]]),z(" 小時 ")]),t("label",vs,[U(t("input",{type:"number",class:"form-control text-center mx-2",id:"demo7Minutes",placeholder:"請輸入分鐘","onUpdate:modelValue":n[1]||(n[1]=e=>r.minutes=e),style:{width:"100px"}},null,512),[[P,r.minutes]]),z(" 分鐘 ")]),t("label",xs,[U(t("input",{type:"number",class:"form-control text-center mx-2",id:"demo7Hour",placeholder:"請輸入秒鐘","onUpdate:modelValue":n[2]||(n[2]=e=>r.seconds=e),style:{width:"100px"}},null,512),[[P,r.seconds]]),z(" 秒鐘 ")]),t("label",$s,[U(t("input",{type:"number",class:"form-control text-center mx-2",id:"demo7Hour",placeholder:"請輸入毫秒","onUpdate:modelValue":n[3]||(n[3]=e=>r.milliseconds=e),style:{width:"100px"}},null,512),[[P,r.milliseconds]]),z(" 毫秒 ")]),bs,t("p",gs,Y(o.value),1)]))}},Ms={class:"bg-gainsboro mb-3 p-10"},ws=t("h2",{class:"text-20 mb-3"},"7. 時間自動轉換",-1),Ys={__name:"Demo7輸入時間自動轉換單位",setup(m){return(r,o)=>(H(),T("section",Ms,[ws,C(hs),C(Ds)]))}};var ks={exports:{}};(function(m,r){(function(o,i){m.exports=i(gt)})(tt,function(o){function i(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var n=i(o),e={name:"zh-tw",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(l,s){return s==="W"?l+"週":l+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"},meridiem:function(l,s){var a=100*l+s;return a<600?"凌晨":a<900?"早上":a<1100?"上午":a<1300?"中午":a<1800?"下午":"晚上"}};return n.default.locale(e,null,!0),e})})(ks);var Ss={exports:{}};(function(m,r){(function(o,i){m.exports=i(gt)})(tt,function(o){function i(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var n=i(o),e={name:"ja",weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(l){return l+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日(ddd) HH:mm"},meridiem:function(l){return l<12?"午前":"午後"},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}};return n.default.locale(e,null,!0),e})})(Ss);var Lt={exports:{}};(function(m,r){(function(o,i){m.exports=i()})(tt,function(){return function(o,i,n){var e=i.prototype,l=function(p){return p&&(p.indexOf?p:p.s)},s=function(p,h,g,V,A){var k=p.name?p:p.$locale(),E=l(k[h]),F=l(k[g]),J=E||F.map(function(L){return L.slice(0,V)});if(!A)return J;var Z=k.weekStart;return J.map(function(L,N){return J[(N+(Z||0))%7]})},a=function(){return n.Ls[n.locale()]},d=function(p,h){return p.formats[h]||function(g){return g.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(V,A,k){return A||k.slice(1)})}(p.formats[h.toUpperCase()])},D=function(){var p=this;return{months:function(h){return h?h.format("MMMM"):s(p,"months")},monthsShort:function(h){return h?h.format("MMM"):s(p,"monthsShort","months",3)},firstDayOfWeek:function(){return p.$locale().weekStart||0},weekdays:function(h){return h?h.format("dddd"):s(p,"weekdays")},weekdaysMin:function(h){return h?h.format("dd"):s(p,"weekdaysMin","weekdays",2)},weekdaysShort:function(h){return h?h.format("ddd"):s(p,"weekdaysShort","weekdays",3)},longDateFormat:function(h){return d(p.$locale(),h)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};e.localeData=function(){return D.bind(this)()},n.localeData=function(){var p=a();return{firstDayOfWeek:function(){return p.weekStart||0},weekdays:function(){return n.weekdays()},weekdaysShort:function(){return n.weekdaysShort()},weekdaysMin:function(){return n.weekdaysMin()},months:function(){return n.months()},monthsShort:function(){return n.monthsShort()},longDateFormat:function(h){return d(p,h)},meridiem:p.meridiem,ordinal:p.ordinal}},n.months=function(){return s(a(),"months")},n.monthsShort=function(){return s(a(),"monthsShort","months",3)},n.weekdays=function(p){return s(a(),"weekdays",null,null,p)},n.weekdaysShort=function(p){return s(a(),"weekdaysShort","weekdays",3,p)},n.weekdaysMin=function(p){return s(a(),"weekdaysMin","weekdays",2,p)}}})})(Lt);var Hs=Lt.exports;const Ts=lt(Hs);function Vs(){const{列出該語系的月份和週:m}=Ht();x.extend(Ts),x().localeData();const r=w("zh-tw");return _t(()=>{x.locale(r.value),console.log("當前的語系為：",x.locale()),m()}),{lang:r}}const Os={class:"container py-10"},js={class:"bg-gainsboro mb-3 p-10"},Us=t("h2",{class:"text-20 my-5"},"設定語系",-1),As={class:"d-flex align-items-center bg-whitesmoke p-3"},Ls=t("label",{class:"form-check-label ps-2",for:"zh-tw"}," 中文 ",-1),Ns={class:"mx-4"},Bs=t("label",{class:"form-check-label ps-2",for:"en"}," 英文 ",-1),Is=t("label",{class:"form-check-label ps-2",for:"ja"}," 日文 ",-1),Es={__name:"HomeView",setup(m){const{lang:r}=Vs(),o=x();return console.log("dayjs()",o),(i,n)=>(H(),T("div",Os,[t("header",js,[Us,t("div",As,[t("div",null,[U(t("input",{class:"form-check-input",type:"radio",value:"zh-tw",id:"zh-tw",name:"i18n","onUpdate:modelValue":n[0]||(n[0]=e=>R(r)?r.value=e:null)},null,512),[[ot,u(r)]]),Ls]),t("div",Ns,[U(t("input",{class:"form-check-input",type:"radio",value:"en",id:"en",name:"i18n","onUpdate:modelValue":n[1]||(n[1]=e=>R(r)?r.value=e:null)},null,512),[[ot,u(r)]]),Bs]),t("div",null,[U(t("input",{class:"form-check-input",type:"radio",value:"ja",id:"ja",name:"i18n","onUpdate:modelValue":n[2]||(n[2]=e=>R(r)?r.value=e:null)},null,512),[[ot,u(r)]]),Is])])]),t("main",null,[C(te),C(ue),C(rn),C(un),C(En),C(as),C(Ys)])]))}};export{Es as default};
