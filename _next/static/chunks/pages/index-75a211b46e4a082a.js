(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(9787)}])},9027:function(a,b,c){"use strict";c.d(b,{Z:function(){return h}});var d=c(5893);c(7294);var e=c(5697),f=c.n(e),g=c(1163);function h(a){var b=a.name,c=a.url,e=(0,g.useRouter)(),f=(null==c?void 0:c.replace("https://pokeapi.co/api/v2/pokemon/",""))||0,h=function(){e.push({pathname:"/detail-pokemon/".concat(f)})};return(0,d.jsxs)("div",{className:"w-full border rounded-lg px-5 py-4 cursor-pointer flex items-center",onClick:h,children:[(0,d.jsx)("div",{className:"w-10 h-10 bg-yellow-400 flex justify-center items-center rounded-full mr-3",children:(0,d.jsx)("h3",{className:"text-3xl font-semibold text-white capitalize",children:Array.from(b)[0]})}),(0,d.jsx)("h3",{className:"text-center text-xl font-medium capitalize",children:b})]})}h.defaultProps={name:function(){},url:{}},h.propTypes={name:f().string,url:f().string}},8765:function(a,b,c){"use strict";var d=c(5893);c(7294);var e=c(5697),f=c.n(e),g=c(1664),h=c.n(g),i=c(5685),j=c(5675),k=c.n(j);function l(a){var b=a.children;return(0,d.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,d.jsx)("header",{className:"px-2 shadow-md fixed w-full z-20 bg-white",children:(0,d.jsx)("div",{className:"h-20 mx-auto flex items-center lg:max-w-screen-lg",children:(0,d.jsx)(h(),{href:"/",passHref:!0,children:(0,d.jsxs)("div",{className:"flex cursor-pointer",children:[(0,d.jsx)(k(),{alt:"star",height:"30",src:i.Y.POKEBALL,width:"30"}),(0,d.jsx)("a",{className:"block text-2xl pl-2",children:"Pokedex"})]})})})}),(0,d.jsx)("main",{className:"py-24 px-4 flex flex-1 justify-center",children:b})]})}l.defaultProps={observeFooter:!1,onFooterViewChange:function(){},scrollToTop:!1},l.propTypes={children:f().node.isRequired,observeFooter:f().bool,onFooterViewChange:f().func,scrollToTop:f().bool},b.Z=l},5685:function(a,b,c){"use strict";c.d(b,{Y:function(){return f},A:function(){return g}});var d="https://pokeapi.co/api/v2",e={GET_POKEMON:"".concat(d,"/pokemon"),GET_DETAIL_POKEMON:function(a){return"".concat(d,"/pokemon/").concat(a)},GET_DETAIL_TYPE:function(a){return"".concat(d,"/type/").concat(a)}},f={FAVICON:"/static/favicon.png",POKEBALL:"/static/pokeball.png",ARROW_UP:"/static/up-arrow.png",ARROW_LEFT:"/static/left.png",ARROW_RIGHT:"/static/right.png"},g=e},9787:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return v}});var d=c(5893),e=c(7294),f=c(8765),g=c(9473),h=c(5685),i=c(6418),j=c(9038);function k(a){return{type:i.a.ADD_POKEMON,dataPokemon:a}}var l=c(9027),m=function(a,b){return(m=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])})(a,b)},n=function(){return(n=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)},o={Pixel:"Pixel",Percent:"Percent"},p={unit:o.Percent,value:.8};function q(a){return"number"==typeof a?{unit:o.Percent,value:100*a}:"string"==typeof a?a.match(/^(\d*(\.\d+)?)px$/)?{unit:o.Pixel,value:parseFloat(a)}:a.match(/^(\d*(\.\d+)?)%$/)?{unit:o.Percent,value:parseFloat(a)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),p):(console.warn("scrollThreshold should be string or number"),p)}var r=function(a){function b(b){var c=a.call(this,b)||this;return c.lastScrollTop=0,c.actionTriggered=!1,c.startY=0,c.currentY=0,c.dragging=!1,c.maxPullDownDistance=0,c.getScrollableTarget=function(){return c.props.scrollableTarget instanceof HTMLElement?c.props.scrollableTarget:"string"==typeof c.props.scrollableTarget?document.getElementById(c.props.scrollableTarget):(null===c.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},c.onStart=function(a){!c.lastScrollTop&&(c.dragging=!0,a instanceof MouseEvent?c.startY=a.pageY:a instanceof TouchEvent&&(c.startY=a.touches[0].pageY),c.currentY=c.startY,c._infScroll&&(c._infScroll.style.willChange="transform",c._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},c.onMove=function(a){if(c.dragging)a instanceof MouseEvent?c.currentY=a.pageY:a instanceof TouchEvent&&(c.currentY=a.touches[0].pageY),!(c.currentY<c.startY)&&(c.currentY-c.startY>=Number(c.props.pullDownToRefreshThreshold)&&c.setState({pullToRefreshThresholdBreached:!0}),!(c.currentY-c.startY>1.5*c.maxPullDownDistance)&&c._infScroll&&(c._infScroll.style.overflow="visible",c._infScroll.style.transform="translate3d(0px, "+(c.currentY-c.startY)+"px, 0px)"))},c.onEnd=function(){c.startY=0,c.currentY=0,c.dragging=!1,c.state.pullToRefreshThresholdBreached&&(c.props.refreshFunction&&c.props.refreshFunction(),c.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){c._infScroll&&(c._infScroll.style.overflow="auto",c._infScroll.style.transform="none",c._infScroll.style.willChange="unset")})},c.onScrollListener=function(a){"function"==typeof c.props.onScroll&&setTimeout(function(){return c.props.onScroll&&c.props.onScroll(a)},0);var b=c.props.height||c._scrollableNode?a.target:document.documentElement.scrollTop?document.documentElement:document.body;!c.actionTriggered&&((c.props.inverse?c.isElementAtTop(b,c.props.scrollThreshold):c.isElementAtBottom(b,c.props.scrollThreshold))&&c.props.hasMore&&(c.actionTriggered=!0,c.setState({showLoader:!0}),c.props.next&&c.props.next()),c.lastScrollTop=b.scrollTop)},c.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:b.dataLength},c.throttledOnScrollListener=(function(a,b,c,d){var e,f=!1,g=0;function h(){e&&clearTimeout(e)}function i(){var i=this,j=Date.now()-g,k=arguments;function l(){g=Date.now(),c.apply(i,k)}!f&&(d&&!e&&l(),h(),void 0===d&&j>a?l():!0!==b&&(e=setTimeout(d?function(){e=void 0}:l,void 0===d?a-j:a)))}return"boolean"!=typeof b&&(d=c,c=b,b=void 0),i.cancel=function(){h(),f=!0},i})(150,c.onScrollListener).bind(c),c.onStart=c.onStart.bind(c),c.onMove=c.onMove.bind(c),c.onEnd=c.onEnd.bind(c),c}return!function(a,b){function c(){this.constructor=a}m(a,b),a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}(b,a),b.prototype.componentDidMount=function(){if(void 0===this.props.dataLength)throw Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"==typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!=typeof this.props.refreshFunction))throw Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},b.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},b.prototype.componentDidUpdate=function(a){this.props.dataLength!==a.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},b.getDerivedStateFromProps=function(a,b){return a.dataLength!==b.prevDataLength?n(n({},b),{prevDataLength:a.dataLength}):null},b.prototype.isElementAtTop=function(a,b){void 0===b&&(b=.8);var c=a===document.body||a===document.documentElement?window.screen.availHeight:a.clientHeight,d=q(b);return d.unit===o.Pixel?a.scrollTop<=d.value+c-a.scrollHeight+1:a.scrollTop<=d.value/100+c-a.scrollHeight+1},b.prototype.isElementAtBottom=function(a,b){void 0===b&&(b=.8);var c=a===document.body||a===document.documentElement?window.screen.availHeight:a.clientHeight,d=q(b);return d.unit===o.Pixel?a.scrollTop+c>=a.scrollHeight-d.value:a.scrollTop+c>=d.value/100*a.scrollHeight},b.prototype.render=function(){var a=this,b=n({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),c=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),d=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return e.createElement("div",{style:d,className:"infinite-scroll-component__outerdiv"},e.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(b){return a._infScroll=b},style:b},this.props.pullDownToRefresh&&e.createElement("div",{style:{position:"relative"},ref:function(b){return a._pullDown=b}},e.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!c&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},b}(e.Component),s=c(5675),t=c.n(s),u=c(6010),v=function(){var a=(0,g.I0)(),b=(0,e.useState)(0),c=b[0],m=b[1],n=(0,e.useState)(40),o=n[0];n[1];var p=(0,e.useState)(!1),q=p[0],s=p[1],v=(0,g.v9)(function(a){return a.home||{}}),w=v.pokemon,x=void 0===w?[]:w;(0,e.useEffect)(function(){var b;a((b={offset:c,limit:o},function(a){var c={method:"GET",url:h.A.GET_POKEMON,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},params:b};return(0,j.Z)(c).then(function(b){var c,d;a(k(b.results)),a((c=b.next,{type:i.a.ADD_NEXT_POKEMON,next:c})),a((d=b.previous,{type:i.a.ADD_PREV_POKEMON,previous:d}))}).catch(function(){a(k({data:[],meta:{totalData:0}}))})}))},[a,c,o]);var y=function(){m(c+40)};(0,e.useEffect)(function(){window.addEventListener("scroll",function(){window.scrollY>400?s(!0):s(!1)})},[]);var z=function(){var a=document.getElementById("title");a&&a.scrollIntoView({behavior:"smooth",inline:"start",block:"start"})};return(0,d.jsx)(f.Z,{children:(0,d.jsxs)("div",{className:" max-w-screen-lg w-full",children:[(0,d.jsx)("div",{id:"title",className:"absolute -top-6"}),(0,d.jsx)("div",{className:(0,u.Z)("w-full flex justify-end",{hidden:!q}),children:(0,d.jsx)("button",{className:"fixed bg-white rounded-full bottom-0 mr-4 mb-4 h-[40px]",onClick:z,children:(0,d.jsx)(t(),{alt:"up",height:"40",src:h.Y.ARROW_UP,width:"40"})})}),(0,d.jsx)(r,{dataLength:x.length,next:y,hasMore:!0,loader:(0,d.jsx)("h4",{className:"text-center text-xl font-semibold",children:"Loading..."}),children:(0,d.jsx)("div",{className:"grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4",children:x.map(function(a,b){return(0,d.jsx)(l.Z,{name:a.name,url:a.url},b)})})})]})})}},9038:function(a,b,c){"use strict";c.d(b,{Z:function(){return f}});var d=c(9669),e=c.n(d);function f(a){return new Promise(function(b,c){e()(a).then(function(a){b(a.data)}).catch(function(a){var b={code:500,status:"error",message:"Failed to fetch data. Please contact developer."};void 0===a.response?c(b):void 0===a.response.data?c(b):c(a.response.data)})})}}},function(a){a.O(0,[689,774,888,179],function(){var b;return a(a.s=5557)}),_N_E=a.O()}])