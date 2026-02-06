/*!
 * WA MediaBox
 * @author WA Studio <www.webarts.name>
 * @author Jiri Hybek <jiri@hybek.cz>
 * @license MIT
*/
!function(){var t=function(){this.el=document.createElement("div"),this.el.classList.add("wa-mediabox-preloader"),this.wrap=document.createElement("div"),this.wrap.classList.add("wa-mediabox-preloader-wrap"),this.spinner=document.createElement("div"),this.spinner.classList.add("wa-mediabox-preloader-spinner"),this.patch=document.createElement("div"),this.patch.classList.add("wa-mediabox-preloader-patch"),this.clipperLeft=document.createElement("div"),this.clipperLeft.classList.add("wa-mediabox-preloader-clipper"),this.clipperLeft.classList.add("cleft"),this.clipperRight=document.createElement("div"),this.clipperRight.classList.add("wa-mediabox-preloader-clipper"),this.clipperRight.classList.add("cright");var t=document.createElement("div");t.classList.add("wa-mediabox-preloader-circle"),this.patch.appendChild(t),this.clipperLeft.appendChild(t.cloneNode(!0)),this.clipperRight.appendChild(t.cloneNode(!0)),this.spinner.appendChild(this.clipperLeft),this.spinner.appendChild(this.patch),this.spinner.appendChild(this.clipperRight),this.wrap.appendChild(this.spinner),this.el.appendChild(this.wrap)};t.prototype.show=function(){this.el.classList.remove("hidden"),this.el.style.display=""},t.prototype.hide=function(){var t=this;this.el.classList.add("hidden"),setTimeout(function(){t.el.classList.contains("hidden")&&(t.el.style.display="none")},350)};var e=function(t){this.parent=t,this.mediaList=[],this.opened=!1,this.loaded=!1,this.current=null,this.containerWidth=null,this.containerHeight=null};e.prototype.addImage=function(t,e){return this.mediaList.push({type:"image",src:t,title:e}),this.mediaList.length-1},e.prototype.addIframe=function(t,e,i,n){return this.mediaList.push({type:"iframe",src:t,title:e,width:i,height:n}),this.mediaList.length-1},e.prototype.open=function(e){if(!this.opened){var i=this;this.current=-1,this.loaded=!1,this.overlay=document.createElement("div"),this.overlay.classList.add("wa-mediabox-overlay"),this.frame=document.createElement("div"),this.frame.classList.add("wa-mediabox-frame"),this.container=document.createElement("div"),this.container.classList.add("wa-mediabox-container"),this.title=document.createElement("div"),this.title.classList.add("wa-mediabox-title"),this.loading=new t,this.closeBtn=document.createElement("button"),this.closeBtn.classList.add("wa-mediabox-close"),this.closeBtn.innerHTML='<svg viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>',this.closeBtn.setAttribute("title",this.parent.lang.close),this.prevBtn=document.createElement("button"),this.prevBtn.classList.add("wa-mediabox-prev"),this.prevBtn.innerHTML='<svg viewBox="0 0 24 24"><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /></svg>',this.prevBtn.setAttribute("title",this.parent.lang.prev),this.nextBtn=document.createElement("button"),this.nextBtn.classList.add("wa-mediabox-next"),this.nextBtn.innerHTML='<svg viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>',this.nextBtn.setAttribute("title",this.parent.lang.next),this.openBtn=document.createElement("button"),this.openBtn.classList.add("wa-mediabox-open"),this.openBtn.innerHTML='<svg viewBox="0 0 24 24"><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" /></svg>',this.openBtn.setAttribute("title",this.parent.lang.openInNew),this.frame.appendChild(this.container),this.frame.appendChild(this.title),this.frame.appendChild(this.loading.el),this.frame.appendChild(this.closeBtn),this.frame.appendChild(this.prevBtn),this.frame.appendChild(this.nextBtn),this.frame.appendChild(this.openBtn),this.overlay.appendChild(this.frame),document.body.appendChild(this.overlay),this.overlay.addEventListener("click",function(t){t.stopPropagation(),i.close()}),this.closeBtn.addEventListener("click",function(t){t.stopPropagation(),i.close()}),this.prevBtn.addEventListener("click",function(t){t.stopPropagation(),i.prev()}),this.nextBtn.addEventListener("click",function(t){t.stopPropagation(),i.next()}),this.container.addEventListener("click",function(t){t.stopPropagation(),i.next()}),this.openBtn.addEventListener("click",function(t){t.stopPropagation(),i.openSource()}),this.resizeHandler=function(){i.resizeContainer()},this.keyDownHandler=function(t){return t.preventDefault(),t.stopPropagation(),37===t.keyCode?i.prev():39===t.keyCode?i.next():27===t.keyCode&&i.close(),!1},window.addEventListener("resize",this.resizeHandler),document.body.addEventListener("keydown",this.keyDownHandler),setTimeout(function(){i.overlay.classList.add("opened"),i.loadMedia(e)},10),this.opened=!0}},e.prototype.close=function(){if(this.opened){var t=this;this.overlay.classList.remove("opened"),window.removeEventListener("resize",this.resizeHandler),document.body.removeEventListener("keydown",this.keyDownHandler),setTimeout(function(){t.overlay.parentElement.removeChild(t.overlay),t.opened=!1,t.nextBtn=null,t.prevBtn=null,t.closeBtn=null,t.openBtn=null,t.loading=null,t.container=null,t.frame=null,t.overlay=null,t.current=null,t.containerWidth=null,t.containerHeight=null},450)}},e.prototype.resizeContainer=function(){if(this.opened){this.containerWidth||(this.containerWidth=Math.round(.7*this.overlay.offsetWidth)),this.containerHeight||(this.containerHeight=Math.round(.7*this.overlay.offsetWidth));var t=160;this.overlay.offsetWidth<480&&(t=70);var e=Math.min(.9*this.overlay.offsetWidth,this.overlay.offsetWidth-t),i=Math.min(.9*this.overlay.offsetHeight,this.overlay.offsetHeight-64),n=this.containerWidth,s=this.containerHeight,a=n/s;n>e&&(n=Math.round(e),s=n/a),s>i&&(s=Math.round(i),n=s*a),this.frame.style.width=n+"px",this.frame.style.height=s+"px",this.frame.style.marginLeft=-Math.round(n/2)+"px",this.frame.style.marginTop=-Math.round(s/2)+"px"}},e.prototype.setMedia=function(t,e,i,n,s){if(this.opened){var a=this;this.loaded=!1,this.frame.classList.remove("can-open-in-new"),a.frame.classList.remove("has-title"),this.container.innerHTML="";var r=null;"image"==t?(n&&(this.containerWidth=n),s&&(this.containerHeight=s),this.resizeContainer(),r=document.createElement("img"),r.addEventListener("load",function(){a.containerWidth=r.width,a.containerHeight=r.height,a.resizeContainer(),a.frame.classList.add("can-open-in-new"),a.container.appendChild(r)}),r.src=e):(n&&(this.containerWidth=n),s&&(this.containerHeight=s+(i?52:0)),this.resizeContainer(),r=document.createElement("iframe"),r.src=e,r.setAttribute("width",parseInt(this.frame.style.width)),r.setAttribute("height",parseInt(this.frame.style.height)-(i?52:0)),r.setAttribute("frameborder","0"),r.setAttribute("allowfullscreen","allowfullscreen"),this.container.appendChild(r)),r.addEventListener("load",function(){setTimeout(function(){i&&(a.title.innerHTML=i,a.frame.classList.add("has-title")),a.frame.classList.add("loaded"),a.loading.hide(),a.loaded=!0},550)})}},e.prototype.loadMedia=function(t){if(this.opened&&t!=this.current){var e=this;if(!this.mediaList[t])throw new Error("Undefined media");var i=function(){e.setMedia(e.mediaList[t].type,e.mediaList[t].src,e.mediaList[t].title,e.mediaList[t].width,e.mediaList[t].height)};this.loaded?(this.frame.classList.remove("loaded"),this.loading.show(),setTimeout(i,350)):i(),t>0?this.frame.classList.add("has-prev"):this.frame.classList.remove("has-prev"),t<this.mediaList.length-1?this.frame.classList.add("has-next"):this.frame.classList.remove("has-next"),this.current=t}},e.prototype.prev=function(){if(this.opened){var t=Math.max(0,this.current-1);this.loadMedia(t)}},e.prototype.next=function(){if(this.opened){var t=Math.min(this.mediaList.length-1,this.current+1);this.loadMedia(t)}},e.prototype.openSource=function(){this.opened&&window.open(this.mediaList[this.current].src)};var i=function(){this.lang={prev:"Previous",next:"Next",close:"Close",openInNew:"Open in new window"},this.galleries={}};i.prototype.openGallery=function(t,e){if(!this.galleries[t])throw new Error("Gallery not found");this.galleries[t].open(e)},i.prototype.addImage=function(t,i,n){return this.galleries[t]||(this.galleries[t]=new e(this)),this.galleries[t].addImage(i,n)},i.prototype.addIframe=function(t,i,n,s,a){return this.galleries[t]||(this.galleries[t]=new e(this)),this.galleries[t].addIframe(i,n,s,a)},i.prototype.bind=function(t){if(!t._waMediaBoxBound){t._waMediaBoxBound=!0;var e=this,i=t.getAttribute("data-mediabox")||"_",n=String(t.getAttribute("href")||t.getAttribute("data-src")),s=t.getAttribute("data-title"),a=t.hasAttribute("data-iframe")||n.indexOf("youtube")>=0?!0:!1,r=t.hasAttribute("data-width")?parseInt(t.getAttribute("data-width")):null,o=t.hasAttribute("data-height")?parseInt(t.getAttribute("data-height")):null,d=null;d=a?this.addIframe(i,n,s,r,o):this.addImage(i,n,s),t.addEventListener("click",function(t){return t.preventDefault(),t.stopPropagation(),e.openGallery(i,d),!1})}},i.prototype.bindAll=function(t){for(var e=t.querySelectorAll("a[data-mediabox]"),i=0;i<e.length;i++)this.bind(e.item(i))},window.WAMediaBox=new i,window.addEventListener("load",function(){window.WAMediaBox.bindAll(document.body)})}();
/*!
 * sizeof.cat specific functions for loading the lightbox when needed, adjusting the color scheme and
 * tab-changing shenanigans.
 * 
 * written by sizeof(cat)
*/
var _s_c_ = {};
_s_c_.lightbox = function () {
	var forEach = (array, callback, scope) => {
		for (var i = 0; i < array.length; i++) {
			callback.call(scope, i, array[i]); 
		}
	};
	var eles = document.querySelectorAll(".lightbox");
	if (eles !== null) {
		forEach(eles, (index, ele) => {
			WAMediaBox.bind(ele);
		});
	}
}
_s_c_.schemes = function () {
	var STORAGE_KEY = 'user-color-scheme';
	var defaultTheme = "light";
	var currentTheme;
	var switchButton;
	var autoDefinedScheme = window.matchMedia('(prefers-color-scheme: light)')
	function switchTheme(e) {
		currentTheme = (currentTheme === 'dark') ? 'light' : 'dark';
		if (localStorage) {
			localStorage.setItem(STORAGE_KEY, currentTheme);
		}
		document.documentElement.setAttribute('data-theme', currentTheme);
		document.body.dispatchEvent(new CustomEvent(currentTheme + "-theme-set"));
		e.preventDefault();
	}
	var autoChangeScheme = e => {
		currentTheme = e.matches ? 'dark' : 'light'
		document.documentElement.setAttribute('data-theme', currentTheme);
		document.body.dispatchEvent(new CustomEvent(currentTheme + "-theme-set"));
	}
	function detectCurrentScheme() {
		if (localStorage !== null && localStorage.getItem(STORAGE_KEY)) {
			return localStorage.getItem(STORAGE_KEY);
		}
		if (defaultTheme) {
			return defaultTheme;
		}
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}
	function init() {
		switchButton = document.querySelector('.theme-switcher');
		currentTheme = detectCurrentScheme();
		if (currentTheme === 'auto') {
			autoChangeScheme(autoDefinedScheme);
			autoDefinedScheme.addListener(autoChangeScheme);
		} else {
			document.documentElement.setAttribute('data-theme', currentTheme);
		}
		if (switchButton) {
			switchButton.addEventListener('click', switchTheme, false);
		}
	}
	init();
}
_s_c_.favicons = function() {
	this.enabledServices = ['x', 'reddit', 'bluesky', 'imdb', 'instagram', 'tiktok', 'facebook', 'twitter', 'gmail', 'wikipedia'];
	this.services = {
		reddit: () => {
			var title = "Reddit - Dive into anything";
			var favicon = '/img/favicons/reddit.png';
			return {
	  			title, favicon
			}
		},
		x: () => {
			var title = "X. It's what's happening / X";
			var favicon = '/img/favicons/x.ico';
			return {
	  			title, favicon
			}
		},
		bluesky: () => {
			var title = 'Discover - Bluesky';
			var favicon = '/img/favicons/bluesky.png';
			return {
	  			title, favicon
			}
		},
		wikipedia: () => {
			var title = 'Wikipedia';
			var favicon = '/img/favicons/wikipedia.ico';
			return {
	  			title, favicon
			}
		},
		imdb: () => {
			var title = 'Friends (TV Series 1994–2004) - IMDb';
			var favicon = '/img/favicons/imdb.png';
			return {
				title, favicon
			}
		},
		twitter: () => {
			var title = 'Twitter';
			var favicon = '/img/favicons/twitter.ico';
			return {
				title, favicon
			}
		},
		tiktok: () => {
			var title = 'Explore - Find your favourite videos on TikTok';
			var favicon = '/img/favicons/tiktok.ico';
			return {
				title, favicon
			}
		},
		facebook: () => {
			var count = Math.round(Math.random() * 99) + 1;
			var title = `(${count}) Facebook`;
			var favicon = `/img/favicons/facebook.ico`;
			return {
				title, favicon
			}
		},
		instagram: () => {
			var count = Math.round(Math.random() * 10) + 1;
			var title = `(${count}) Instagram`;
			var favicon = `/img/favicons/instagram.png`;
			return {
				title, favicon
			}
		},
		gmail: () => {
			var title = 'Inbox';
			var count = Math.round(Math.random() * 12);
			var emailCount = count;
			var gmailIcon = '/img/favicons/gmail_';
			if (count === 11) {
			  count = 50;
			  emailCount = `${count}+`;
			} else if (count === 12) {
			  count = 100;
			  emailCount = `${count}+`;
			}
			var favicon = `${gmailIcon}${count}.png`;
			if (emailCount) {
				title = `Inbox (${emailCount})`;
			}
			return {
				title, favicon
			}
  		} 
	}
	this.init = function () {
		if (typeof document.mozHidden !== 'undefined') {
			this.hidden = 'mozHidden';
			this.visibilityChange = 'mozvisibilitychange';
		} else if (typeof document.msHidden !== 'undefined') {
			this.hidden = 'msHidden';
			this.visibilityChange = 'msvisibilitychange';
		} else if (typeof document.webkitHidden !== 'undefined') {
			this.hidden = 'webkitHidden';
			this.visibilityChange = 'webkitvisibilitychange';
		}
		document.addEventListener(this.visibilityChange, this.handler.bind(this), false);
	}
	this.default = function () {
		var title = this.title;
		var favicon = this.favicon;
		this.update({
			title, favicon
		});
	}
	this.update = function (data) {
		var out = "?v=" + Math.round(Math.random() * 10000000);
		var link  = document.createElement('link');
		link.type = 'image/x-icon';
		link.rel = 'shortcut icon';
		link.href = data.favicon + out;
		document.getElementsByTagName('head')[0].querySelector("[rel='shortcut icon']").remove();
		document.getElementsByTagName('head')[0].appendChild(link);
		document.title = data.title;
	}
	this.enable = function () {
		var i = Math.round(Math.random() * (this.enabledServices.length - 1));
		var service = this.enabledServices[i];
		if (service && this.services[service]) {
			this.update(this.services[service]());
		}
	}
	this.handler = function () {
		if (document[this.hidden]) {
			this.enable();
		} else {
			this.default();
		}
	}
	this.hidden = 'hidden';
	this.visibilityChange = 'visibilitychange';
	this.favicon = document.querySelector("[rel='shortcut icon']").href;
	this.title = document.title;
	this.init();
}