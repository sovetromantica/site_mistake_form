(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{56:function(e,t,a){e.exports=a(93)},61:function(e,t,a){},63:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),s=a.n(r),o=(a(61),a(22)),c=a.n(o),l=a(39),m=a(48),d=a(49),p=a(54),u=a(50),h=a(18),g=a(53),v=(a(63),a(64),a(129)),y=a(139),b=a(132),f=a(131),w=a(135),E=a(137),k=a(133),x=a(134),j=a(51),M=a.n(j),O=a(52),T=a.n(O),C=a(82).sprintf,z=function(e){function t(e){var a;Object(m.a)(this,t),a=Object(p.a)(this,Object(u.a)(t).call(this,e));var n=T.a.parse(window.location.search);return a.state={comment:"",error:!1,buttonDisabled:!0,recaptchakey:"6LeKwesUAAAAAET1JQcHgDg4UChhr8zPBBT0Xx0N",token:"",titleId:n.title_id,type:n.type,num:n.num,time:n.time,uuid:n.uuid,mode:"form",sending:!1,videoUrl:n.video_url},void 0!=a.state.titleId&&void 0!=a.state.num&&void 0!=a.state.type&&void 0!=a.state.time||(a.state.mode="error"),a.submitForm=a.submitForm.bind(Object(h.a)(a)),a.changeComment=a.changeComment.bind(Object(h.a)(a)),a.captchaFinish=a.captchaFinish.bind(Object(h.a)(a)),a.closeModal=a.closeModal.bind(Object(h.a)(a)),a.handleMessage=a.handleMessage.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(e){return window.parent.postMessage("resize::"+document.body.clientHeight,"*")},300),window.addEventListener("message",this.handleMessage),window.parent.postMessage("reqimg","*")}},{key:"handleMessage",value:function(){var e=Object(l.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:0===t.data.indexOf("blob")&&(window.removeEventListener("message",this.handleMessage),this.setState({test:t.data}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e,t,a){window.parent.postMessage("resize::"+document.body.clientHeight,"*")}},{key:"submitForm",value:function(){var e=Object(l.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.recaptcha.execute();case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"changeComment",value:function(e){this.setState({comment:e.target.value,error:!1,buttonDisabled:""===e.target.value.trim()})}},{key:"captchaFinish",value:function(){var e=Object(l.a)(c.a.mark(function e(t){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.sending){e.next=20;break}if(""!==this.state.comment){e.next=5;break}this.setState({error:!0}),e.next=20;break;case 5:if(void 0!=this.state.titleId&&void 0!=this.state.num&&void 0!=this.state.type&&void 0!=this.state.time){e.next=9;break}this.setState({mode:"error"}),e.next=20;break;case 9:return this.setState({sending:!0}),(a=new FormData).append("token",this.recaptcha.getResponse()),a.append("comment",this.state.comment),a.append("time",this.state.time),a.append("uuid",this.state.uuid),a.append("video_url",this.state.videoUrl),e.next=18,fetch(C("https://api.sovetromantica.com/api/v1/report/%s/%s/%s",this.state.titleId,this.state.type,this.state.num),{method:"POST",body:a});case 18:e.sent.ok?this.setState({mode:"success"}):this.setState({mode:"error_send"});case 20:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"closeModal",value:function(e){window.parent.postMessage("close","*")}},{key:"render",value:function(){var e=this;return i.a.createElement(v.a,null,i.a.createElement(y.a,null),i.a.createElement(f.a,{color:"primary",classes:{colorPrimary:"main_header"},position:"sticky"},i.a.createElement(b.a,{variant:"h5",align:"center"},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435")),i.a.createElement(k.a,{style:{display:"form"===this.state.mode?null:"none"}},i.a.createElement(b.a,{variant:"body1",align:"center"},"\u041d\u0430\u0448\u043b\u0438 \u043e\u0448\u0438\u0431\u043a\u0443 \u0432 \u0441\u0443\u0431\u0442\u0438\u0442\u0440\u0430\u0445 \u0438\u043b\u0438 \u043e\u0437\u0432\u0443\u0447\u043a\u0435?"),i.a.createElement(b.a,{variant:"body1",align:"center"},"\u041e\u043f\u0438\u0448\u0438\u0442\u0435 \u0435\u0451 \u043f\u043e\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0439!"),i.a.createElement(b.a,{variant:"body1",align:"center"},"P.S. \u0412 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0438 \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0442\u0430\u0439\u043c\u043a\u043e\u0434."),i.a.createElement(w.a,{style:{marginTop:"15px"},autoFocus:!0,multiline:!0,fullWidth:!0,helperText:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0448\u0438\u0431\u043a\u0438 (\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435)",required:!0,rows:"3",variant:"outlined",placeholder:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",id:"comment_field",value:this.state.comment,onChange:this.changeComment,error:this.state.error}),i.a.createElement(k.a,{container:!0,justify:"space-around"},i.a.createElement(E.a,{size:"large",variant:"contained",style:{marginTop:"15px",marginBottom:"15px",width:"130px"},disabled:this.state.buttonDisabled||this.state.sending,onClick:this.submitForm},this.state.sending?i.a.createElement(x.a,{size:"20px"}):i.a.createElement(b.a,null,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")),i.a.createElement(E.a,{size:"large",variant:"contained",style:{marginTop:"15px",marginBottom:"15px",width:"130px"},onClick:this.closeModal},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c")),i.a.createElement(M.a,{sitekey:this.state.recaptchakey,size:"normal",onResolved:this.captchaFinish,ref:function(t){return e.recaptcha=t},badge:"inline"}),i.a.createElement(b.a,{variant:"caption",style:{color:"rgba(0, 0, 0, 0.54)",marginLeft:"12px",fontSize:"0.6rem",height:"25px",display:"inline-block"}},"\u0417\u0430\u0449\u0438\u0442\u0430 \u043e\u0442 \u0441\u043f\u0430\u043c\u0430 reCAPTCHA ",i.a.createElement("a",{href:"https://policies.google.com/privacy",style:{color:"rgba(0, 0, 0, 0.54)"}},"\u041a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c")," \u0438 ",i.a.createElement("a",{href:"https://policies.google.com/terms",style:{color:"rgba(0, 0, 0, 0.54)"}},"\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"))),i.a.createElement(k.a,{style:{display:"error"===this.state.mode?null:"none"}},i.a.createElement(b.a,{variant:"body1",align:"center",style:{marginTop:"15px"}},"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0444\u043e\u0440\u043c\u044b."),i.a.createElement(k.a,{container:!0,justify:"center"},i.a.createElement(E.a,{size:"large",variant:"contained",style:{marginTop:"15px",marginBottom:"15px"},onClick:this.closeModal},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"))),i.a.createElement(k.a,{style:{display:"success"===this.state.mode?null:"none"}},i.a.createElement(b.a,{variant:"body1",align:"center",style:{marginTop:"15px"}},"\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0432\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c!"),i.a.createElement(k.a,{container:!0,justify:"center"},i.a.createElement(E.a,{size:"large",variant:"contained",style:{marginTop:"15px",marginBottom:"15px"},onClick:this.closeModal},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"))),i.a.createElement(k.a,{style:{display:"error_send"===this.state.mode?null:"none"}},i.a.createElement(b.a,{variant:"body1",align:"center",style:{marginTop:"15px"}},"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0435"),i.a.createElement(k.a,{container:!0,justify:"center"},i.a.createElement(E.a,{size:"large",variant:"contained",style:{marginTop:"15px",marginBottom:"15px"},onClick:this.closeModal},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"))))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[56,1,2]]]);
//# sourceMappingURL=main.99378715.chunk.js.map