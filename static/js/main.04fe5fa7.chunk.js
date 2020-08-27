(this.webpackJsonppersonal_website_react=this.webpackJsonppersonal_website_react||[]).push([[0],{100:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={ReactBash:{borderRadius:"5px",display:"flex",flexDirection:"column",fontFamily:"'Inconsolata', monospace",fontSize:"13px",fontWeight:"400",height:"100%",overflow:"hidden",textAlign:"left"},header:{padding:"5px 10px 0"}},a={borderRadius:"50%",display:"inline-block",height:"15px",marginRight:"5px",width:"15px"};r.redCircle=Object.assign({},a,{backgroundColor:"#bf616a"}),r.yellowCircle=Object.assign({},a,{backgroundColor:"#ebcb8b"}),r.greenCircle=Object.assign({},a,{backgroundColor:"#a3be8c"}),r.body={flexGrow:1,overflowY:"scroll",padding:"10px"},r.form={display:"flex"},r.input={background:"none",border:"none",color:"inherit",flexGrow:"1",fontFamily:"inherit",fontSize:"inherit",outline:"none !important",padding:0},r.prefix={marginRight:"5px"},t.default={light:Object.assign({},r,{body:Object.assign({},r.body,{backgroundColor:"#fff",color:"#5D5D5D"}),header:Object.assign({},r.header,{backgroundColor:"#eee"}),prefix:Object.assign({},r.prefix,{color:"#bd081c"})}),dark:Object.assign({},r,{body:Object.assign({},r.body,{backgroundColor:"#000",color:"#d0d0d0"}),header:Object.assign({},r.header,{backgroundColor:"#dcdbdb"}),prefix:Object.assign({},r.prefix,{color:"#33FF33"})})}},104:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(10),i=n.n(o),s=(n(93),n(21)),c=(n(94),n(156)),l=n(107),u=n(151),d=n(67),f=n.n(d),p=n(154),h=n(74),m=n(75),y=n(152),v=n(157),g=n(160),b=n(161),E=n(147),O=n(69),w=n.n(O),j=n(159),x=n(158),_=n(62),C=n.n(_),k=n(52),S=n.n(k),I=n(72),P=n(4),A=n(149),R=n(146),N=n(148),D=n(66),T=n.n(D),B=Object(P.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,n=e.classes,r=e.onClose,o=Object(I.a)(e,["children","classes","onClose"]);return a.a.createElement(R.a,Object.assign({disableTypography:!0,className:n.root},o),a.a.createElement(h.a,{variant:"h6"},t),r?a.a.createElement(E.a,{"aria-label":"close",className:n.closeButton,onClick:r},a.a.createElement(T.a,null)):null)})),M=Object(P.a)((function(e){return{root:{padding:e.spacing(2)}}}))(N.a),L={aboutme:{title:"About Me",texts:["Hey congrats for navigating this far in my KDE-neon inspired personal website! ","A bit about me - I'm Nayman, a Masters of Engineering student specializing in Computing Systems (Hardware Logic Design and some other software concepts). While I have the most internship experience in software and web development, I also enjoy learning about embedded systems, and FPGA design/verification and am actively looking for positions in those focus areas. ","In my free time before COVID, I enjoy practicing mid-range shots on indoor basketball courts, playing pickup, and following Kawhi Leonard on the Clippers. Now in quarantine I've been revisiting my past obsession with the real-time strategy game Age of Empires III - watching Twitch streams of pro players, and climbing the ladder one skirmish at at time.","If you're more interested in my technical side-projects, check out the dedicated file-dialogs elsewhere on the website and my Github repo for the actual code!"]},redditsavedscraper:{title:"Reddit Saved Scraper",texts:["This Python script (not shown on github) utilizes PRAW to scrape my saved links and comments and format them nicely into markdown files"]}},F=function(e){var t=e.openAppRef,n=e.fileKeyRef,o=Object(r.useState)(!1),i=Object(s.a)(o,2),c=i[0],l=i[1],u=Object(r.useState)(""),d=Object(s.a)(u,2),f=d[0],p=d[1],h=function(){l(!1)};return Object(r.useImperativeHandle)(t,(function(){return{updateOpenApp:function(){l(!0)}}})),Object(r.useImperativeHandle)(n,(function(){return{updateFileKey:function(e){p(e)}}})),a.a.createElement("div",null,a.a.createElement(A.a,{onClose:h,"aria-labelledby":"customized-dialog-title",open:c},a.a.createElement(B,{id:"customized-dialog-title",onClose:h},f?L[f].title:""),a.a.createElement(M,{dividers:!0},f?L[f].texts.map((function(e){})):["asdf"])))},U=Object(u.a)((function(e){return{parentContainer:{margin:"50px auto",width:630,height:450},root:{textAlign:"center"},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"},styledInput:{background:"white"},largeAvatar:{width:e.spacing(20),height:e.spacing(20)}}})),H={sudo:{exec:function(e){var t=e.structure,n=e.history;return{structure:t,cwd:e.cwd,history:n.concat({value:"Nice try... (\u0ca0(\u0ca0(\u0ca0_\u0ca0)\u0ca0)\u0ca0)"})}}}},K=[{value:"Welcome to the terminal! This is how you'll get around the website..."},{value:"Type `help` to begin"}],G={".hidden":{file1:{content:"The is the content for file1 in the <.hidden> directory."},file2:{content:"The is the content for file2 in the <.hidden> directory."},dir2:{file:{content:"The is the content for <file> in the <.hidden> directory."}},".secrets":{content:"I'm still afraid of the dark..."}},"AboutMe.md":{type:"custom",content:"Hey! Use the view [filename] command to look at this special file."},"playground-dir":{file1:{content:"Sandbox file! Just here for you to play around with :D"}},projects:{"redditSavedScraper.md":{type:"custom",content:"Hey! Use the view [filename] command to look at this special file."}}};var $=function(){var e=U(),t=Object(r.useState)(!0),n=Object(s.a)(t,2),o=n[0],i=n[1],u=Object(r.useState)(!0),d=Object(s.a)(u,2),O=d[0],_=d[1],k=Object(r.useState)(),I=Object(s.a)(k,2),P=I[0],A=I[1],R=Object(r.useState)(),N=Object(s.a)(R,2),D=N[0],T=N[1],B=Object(r.useState)(!1),M=Object(s.a)(B,2),L=M[0],$=M[1],z=Object(r.useRef)(!1),W=Object(r.useRef)(""),V=Object(r.useRef)(null);function J(e){return a.a.createElement(x.a,Object.assign({elevation:6,variant:"filled"},e))}return Object(r.useEffect)((function(){setTimeout((function(){_(!1)}),3e3)})),Object(r.useEffect)((function(){return L||function e(){var t=(new Date).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),n=(new Date).toLocaleString("en-US"),r=n.slice(n.indexOf(",")+1);A(r),T(t),L||(V.current=setTimeout(e,1e3))}(),function(){return clearTimeout(V.current)}}),[L]),a.a.createElement(v.a,{className:e.parentContainer},!L&&a.a.createElement(l.a,{className:e.backdrop,open:o},a.a.createElement(y.a,{container:!0,spacing:10,direction:"column",alignItems:"center",justify:"center"},a.a.createElement(y.a,{item:!0,xs:12},a.a.createElement(m.a,{in:O},a.a.createElement(h.a,{variant:"h3",component:"h2"},"Welcome to Nayman's Website!")),!O&&a.a.createElement(m.a,{in:!O},a.a.createElement(a.a.Fragment,null,a.a.createElement(v.a,{textAlign:"center"},a.a.createElement(h.a,{variant:"h3",component:"h2"},P),a.a.createElement("br",null),a.a.createElement(h.a,{variant:"h5",component:"h2"},D))))),!O&&a.a.createElement(a.a.Fragment,null,a.a.createElement(y.a,{item:!0,xs:12},a.a.createElement(b.a,{alt:"Nayman Leung",src:C.a,className:e.largeAvatar})),a.a.createElement(y.a,{item:!0,xs:12},a.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off"},a.a.createElement(c.a,{type:"password",className:e.styledInput,id:"input-with-icon-textfield",InputProps:{startAdornment:a.a.createElement(p.a,{position:"start"},a.a.createElement(f.a,null)),endAdornment:a.a.createElement(p.a,{position:"end"},a.a.createElement(g.a,{title:"Login"},a.a.createElement(E.a,null,a.a.createElement(w.a,{onClick:function(){$(!0),i(!1)}}))))},style:{width:300},variant:"outlined"})))),a.a.createElement(y.a,{item:!0,xs:12},a.a.createElement(v.a,{height:200}))),!O&&a.a.createElement(j.a,{open:!0,autoHideDuration:6e3},a.a.createElement(J,{onClose:function(){},severity:"success"},"Click Login to continue!"))),a.a.createElement(S.a,{history:K,structure:G,extensions:H,theme:S.a.Themes.DARK,prefix:"user@NSLeung-Website",openAppHandler:function(e){z.current.updateOpenApp(),W.current.updateFileKey(e.substring(0,e.indexOf(".")).toLowerCase())}}),void 0!==W&&a.a.createElement(F,{openAppRef:z,fileKeyRef:W}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=n(155),W=n(70),V=n.n(W),J=n(71),Y=n.n(J),X=Object(u.a)((function(){return{BottomNav:{textAlign:"center",position:"absolute",justifyContent:"center",marginLeft:"auto",marginRight:"auto",bottom:0,left:0,right:0,paddingTop:10,height:90,backgroundColor:"rgba(0, 0, 0, 0.6)"},iconButtonStyle:{color:"rgba(0,0,0,1)",marginRight:50}}}));var q=function(){var e=X();return a.a.createElement(v.a,{className:e.BottomNav},a.a.createElement("a",{href:"https://github.com/NSLeung",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(z.a,{variant:"contained",className:e.iconButtonStyle},a.a.createElement(V.a,{variant:"outlined",style:{fontSize:60}}))),a.a.createElement("a",{href:"https://linkedin.com/in/nayman-leung/",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(z.a,{variant:"contained",className:e.iconButtonStyle},a.a.createElement(Y.a,{variant:"outlined",style:{fontSize:60},color:"primary"}))))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement($,null),a.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.IS_SERVER="undefined"===typeof window;t.BACK_REGEX=/\/?\.?[\w-_]+\/\.\./,t.Errors={COMMAND_NOT_FOUND:"-bash: $1: command not found",FILE_EXISTS:"mkdir: $1: File exists",NO_SUCH_FILE:"-bash: cd: $1: No such file or directory",NOT_A_DIRECTORY:"-bash: cd: $1: Not a directory",IS_A_DIRECTORY:"cat: $1: Is a directory",NOT_A_SPECIAL_FILE:"-bash view: $1: Not a special file that you can view with this tool :/"},t.EnvVariables={TERM_PROGRAM:"ReactBash.app",TERM:"reactbash-256color",TERM_PROGRAM_VERSION:"1.6.0",TERM_SESSION_ID:"w0t0p1:37842145-87D9-4768-BEC3-3684BAF3A964",USER:function(e){return e.settings.user.username},PATH:"/",PWD:function(e){return"/"+e.cwd},LANG:function(){return r?"en_US.UTF-8":navigator.language.replace("-","_")+".UTF-8"},HOME:"/",LOGNAME:function(e){return e.settings.user.username},OLDPWD:"/"}},51:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.trim=o,t.appendError=function(e,t,n){return Object.assign({},e,{error:!0,history:e.history.concat({value:t.replace("$1",n)})})},t.extractPath=function(e,t){if(""===e)return t;e=o(e,"/");var n=(t?t+"/":"")+e;for(;n.match(a.BACK_REGEX);)n=n.replace(a.BACK_REGEX,"");return o(n,"/")},t.getDirectoryByPath=function(e,t){var n=t.split("/");if(!n[0])return{dir:e};var o=e,i=0;for(;i<n.length;){var s=n[i],c=o[s];if(!c||"object"!==("undefined"===typeof c?"undefined":r(c)))return{err:a.Errors.NO_SUCH_FILE.replace("$1",t)};if(c.hasOwnProperty("content"))return{err:a.Errors.NOT_A_DIRECTORY.replace("$1",t)};o=c,i++}return{dir:o}},t.getEnvVariables=function(e){return Object.keys(a.EnvVariables).reduce((function(t,n){var r=a.EnvVariables[n];return t[n]="function"===typeof r?r(e):r,t}),{})},t.isFile=function(e){return void 0!==e.content};var a=n(36);function o(e,t){return e[0]===t&&(e=e.substr(1)),e[e.length-1]===t&&(e=e.substr(0,e.length-1)),e}},52:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BashUtil=t.BashConst=void 0;var r,a=n(95),o=(r=a)&&r.__esModule?r:{default:r},i=c(n(51)),s=c(n(36));function c(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.default=o.default,t.BashConst=s,t.BashUtil=i},60:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.view=t.rm=t.whoami=t.printenv=t.echo=t.pwd=t.cd=t.mkdir=t.cat=t.ls=t.clear=t.help=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(51)),a=n(36);function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var i=["clear","ls","cat","mkdir","cd","pwd","echo","printenv","whoami","rm","view"];t.help={exec:function(e){var t;return Object.assign({},e,{history:(t=e.history).concat.apply(t,[{value:"React-bash:"},{value:"These shell commands are defined internally:"}].concat(o(i.map((function(e){return{value:e}}))),[{value:"please use view [valid file] to learn more about me."},{value:"`ls` shows the content of the current directory. That should help you get started."}]))})}},t.clear={exec:function(e){return Object.assign({},e,{history:[]})}},t.ls={exec:function(e,t){var n=t.flags,a=t.args[0]||"",o=r.extractPath(a,e.cwd),i=r.getDirectoryByPath(e.structure,o),s=i.err,c=i.dir;if(s)return r.appendError(e,s,a);var l=Object.keys(c);return n.a||(l=l.filter((function(e){return"."!==e[0]}))),n.l?Object.assign({},e,{history:e.history.concat(l.map((function(e){return{value:e}})))}):Object.assign({},e,{history:e.history.concat({value:l.join(" ")})})}},t.cat={exec:function(e,t){var n=t.args[0],o=n.split("/"),i=o.pop(),s=r.extractPath(o.join("/"),e.cwd),c=r.getDirectoryByPath(e.structure,s),l=c.err,u=c.dir;if(l)return r.appendError(e,l,n);if(u[i]){if(u[i].hasOwnProperty("content")){var d=u[i].content.replace(/\n$/,"").split("\n").map((function(e){return{value:e}}));return Object.assign({},e,{history:e.history.concat(d)})}return r.appendError(e,a.Errors.IS_A_DIRECTORY,n)}return r.appendError(e,a.Errors.NO_SUCH_FILE,n)}},t.mkdir={exec:function(e,t){var n=t.args[0],o=n.split("/"),i=o.pop(),s=r.extractPath(o.join("/"),e.cwd),c=JSON.parse(JSON.stringify(e.structure)),l=r.getDirectoryByPath(c,s).dir;return l[i]?r.appendError(e,a.Errors.FILE_EXISTS,n):(l[i]={},Object.assign({},e,{structure:c}))}},t.cd={exec:function(e,t){var n=t.args[0];if(!n||"/"===n)return Object.assign({},e,{cwd:""});var a=r.extractPath(n,e.cwd),o=r.getDirectoryByPath(e.structure,a).err;return o?r.appendError(e,o,n):Object.assign({},e,{cwd:a})}},t.pwd={exec:function(e){var t="/"+e.cwd;return Object.assign({},e,{history:e.history.concat({value:t})})}},t.echo={exec:function(e,t){var n=t.input,a="echo ".length,o=r.getEnvVariables(e),i=n.slice(a).replace(/(\$\w+)/g,(function(e){return o[e.slice(1)]||""}));return Object.assign({},e,{history:e.history.concat({value:i})})}},t.printenv={exec:function(e){var t=r.getEnvVariables(e),n=Object.keys(t).map((function(e){return{value:e+"="+t[e]}}));return Object.assign({},e,{history:e.history.concat(n)})}},t.whoami={exec:function(e){var t=e.settings.user.username;return Object.assign({},e,{history:e.history.concat({value:t})})}},t.rm={exec:function(e,t){var n=t.flags,o=t.args[0],i=o.split("/"),s=i.pop(),c=r.extractPath(i.join("/"),e.cwd),l=JSON.parse(JSON.stringify(e.structure)),u=r.getDirectoryByPath(l,c).dir;return u[s]?r.isFile(u[s])||n.r||n.R?(delete u[s],Object.assign({},e,{structure:l})):r.appendError(e,a.Errors.IS_A_DIRECTORY,o):r.appendError(e,a.Errors.NO_SUCH_FILE,o)}},t.view={exec:function(e,t){var n=t.args[0],o=n.split("/"),i=o.pop(),s=r.extractPath(o.join("/"),e.cwd),c=r.getDirectoryByPath(e.structure,s),l=c.err,u=c.dir;return l?r.appendError(e,l,n):u[i]?u[i].hasOwnProperty("type")?u[i].hasOwnProperty("content")||u[i].hasOwnProperty("type")?(e.openAppHandler(i),Object.assign({},e,{history:e.history.concat({value:""})})):r.appendError(e,a.Errors.IS_A_DIRECTORY,n):r.appendError(e,a.Errors.NOT_A_SPECIAL_FILE,n):r.appendError(e,a.Errors.NO_SUCH_FILE,n)}}},62:function(e,t,n){e.exports=n.p+"static/media/profile_icon-Copy.2cd99954.PNG"},88:function(e,t,n){e.exports=n(104)},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),o=u(a),i=u(n(5)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(60)),c=u(n(98)),l=u(n(100));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(){},f=function(e){function t(e){var n=e.history,r=e.structure,a=e.extensions,o=e.prefix,i=e.openAppHandler;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return s.Bash=new c.default(a),s.ctrlPressed=!1,s.state={settings:{user:{username:o.split("@")[1]}},history:n.slice(),structure:Object.assign({},r),cwd:"",openAppHandler:i},s.handleKeyDown=s.handleKeyDown.bind(s),s.handleKeyUp=s.handleKeyUp.bind(s),s}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.refs.input.focus()}},{key:"componentWillReceiveProps",value:function(e){var t=e.extensions,n=e.structure,r=e.history,a={};n&&(a.structure=Object.assign({},n)),r&&(a.history=r.slice()),t&&(this.Bash.commands=Object.assign({},t,s)),this.setState(a)}},{key:"shouldComponentUpdate",value:function(e,t){return this.state!==t||this.props!==e}},{key:"componentDidUpdate",value:function(){this.refs.input.scrollIntoView()}},{key:"attemptAutocomplete",value:function(){var e=this.refs.input.value,t=this.Bash.autocomplete(e,this.state);t&&(this.refs.input.value=t)}},{key:"handleKeyDown",value:function(e){17===e.which?this.ctrlPressed=!0:9===e.which&&(this.attemptAutocomplete(),e.preventDefault())}},{key:"handleKeyUp",value:function(e){76===e.which?this.ctrlPressed&&this.setState(this.Bash.execute("clear",this.state)):67===e.which?this.ctrlPressed&&(this.refs.input.value=""):38===e.which?this.Bash.hasPrevCommand()&&(this.refs.input.value=this.Bash.getPrevCommand()):40===e.which?this.Bash.hasNextCommand()?this.refs.input.value=this.Bash.getNextCommand():this.refs.input.value="":17===e.which&&(this.ctrlPressed=!1)}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=e.target[0].value,n=this.Bash.execute(t,this.state);this.setState(n),this.refs.input.value=""}},{key:"renderHistoryItem",value:function(e){var t=this;return function(n,r){var a=n.hasOwnProperty("cwd")?o.default.createElement("span",{style:e.prefix},t.props.prefix+" ~"+n.cwd+" $"):void 0;return o.default.createElement("div",{"data-test-id":"history-"+r,key:r},a,n.value)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.onClose,r=t.onExpand,a=t.onMinimize,i=t.prefix,s=t.styles,c=t.theme,u=this.state,d=u.history,f=u.cwd,p=Object.assign({},l.default[c]||l.default.light,s);return o.default.createElement("div",{className:"ReactBash",style:p.ReactBash},o.default.createElement("div",{style:p.header},o.default.createElement("span",{style:p.redCircle,onClick:n}),o.default.createElement("span",{style:p.yellowCircle,onClick:a}),o.default.createElement("span",{style:p.greenCircle,onClick:r})),o.default.createElement("div",{style:p.body,onClick:function(){return e.refs.input.focus()}},d.map(this.renderHistoryItem(p)),o.default.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)},style:p.form},o.default.createElement("span",{style:p.prefix},i+" ~"+f+" $"),o.default.createElement("input",{autoComplete:"off",onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,ref:"input",style:p.input}))))}}]),t}(a.Component);t.default=f,f.Themes={LIGHT:"light",DARK:"dark"},f.propTypes={extensions:i.default.object,history:i.default.array,onClose:i.default.func,onExpand:i.default.func,onMinimize:i.default.func,prefix:i.default.string,structure:i.default.object,styles:i.default.object,theme:i.default.string},f.defaultProps={extensions:{},history:[],onClose:d,onExpand:d,onMinimize:d,prefix:"hacker@default",structure:{},styles:{},theme:f.Themes.LIGHT}},98:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=c(n(51)),o=n(36),i=c(n(60)),s=c(n(99));function c(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l(this,e),this.commands=Object.assign(t,i),this.prevCommands=[],this.prevCommandsIndex=0}return r(e,[{key:"execute",value:function(e,t){this.prevCommands.push(e),this.prevCommandsIndex=this.prevCommands.length;var n=Object.assign({},t,{history:t.history.concat({cwd:t.cwd,value:e})}),r=s.parse(e);return this.runCommands(r,n)}},{key:"runCommands",value:function(e,t){for(var n=this,r=!1,i=function(e,t){if(""===t.name)return e;if(n.commands[t.name]){var i=n.commands[t.name].exec(e,t);return r=r||i&&i.error,i}return r=!0,a.appendError(e,o.Errors.COMMAND_NOT_FOUND,t.name)};!r&&e.length;){t=e.shift().reduce(i,t)}return t}},{key:"autocomplete",value:function(e,t){var n=t.structure,r=t.cwd,o=e.split(/ +/),i=o.pop(),s=function(e){return 0===e.indexOf(i)},c=function(e){return o.concat(e).join(" ")};if(0===o.length){var l=Object.keys(this.commands).filter(s);return 1===l.length?c(l[0]):null}var u=i.split("/");i=u.pop();var d=u.join("/"),f=a.extractPath(d,r),p=a.getDirectoryByPath(n,f),h=p.err,m=p.dir;if(h)return null;var y=Object.keys(m).filter(s),v=d?d+"/":"";return 1===y.length?c(""+v+y[0]):null}},{key:"getPrevCommand",value:function(){return this.prevCommands[--this.prevCommandsIndex]}},{key:"getNextCommand",value:function(){return this.prevCommands[++this.prevCommandsIndex]}},{key:"hasPrevCommand",value:function(){return 0!==this.prevCommandsIndex}},{key:"hasNextCommand",value:function(){return this.prevCommandsIndex!==this.prevCommands.length-1}}]),e}();t.default=u},99:function(e,t,n){"use strict";function r(e){for(var t=e.split(/ +/),n=t.shift(),r={},a={},o=0;t.length>0;){var i=t.shift();if("-"===i[0])if("-"===i[1]){var s=t.shift();a[i.slice(2)]=s}else i.slice(1).split("").forEach((function(e){r[e]=!0}));else a[o++]=i}return{name:n,flags:r,input:e,args:a}}Object.defineProperty(t,"__esModule",{value:!0}),t.parseInput=r,t.parse=function(e){return e.trim().split(/ *&& */).map((function(e){return e.split(/ *; */).map(r)}))}}},[[88,1,2]]]);
//# sourceMappingURL=main.04fe5fa7.chunk.js.map