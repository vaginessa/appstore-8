window.GLOBAL_COMBOBASE="http://img5.cache.netease.com/service/combo?";YUI({combine:true,comboBase:window.GLOBAL_COMBOBASE,modules:{"ntes-overlay-trigger":{fullpath:"http://img3.cache.netease.com/apps/adp11/ntes-overlay/ntes-overlay-trigger.js",requires:["plugin","overlay"]}}}).use("node","overlay","io-base","json-parse","ntes-overlay-trigger","event-hover","cookie",function(b){if(b.Lang.isArray(window.pullList)){b.each(window.pullList,function(q){var p=new b.Overlay({srcNode:q.overlay,visible:false,width:"174px",zIndex:101,plugins:[{fn:b.Plugin.OverlayTrigger,cfg:{node:q.trigger}}],render:true});b.one(q.overlay).all("a").on("click",function(r){p.hide()})})}var m,h,f="",k="",l=false,e=null,a=location.href;if(b.Cookie.get("M_P_INFO")){m=b.Cookie.get("M_P_INFO").split("|");h=b.Cookie.get("M_S_INFO");f=m[0];k=m[3];l=1==m[2]||(0==m[2]&&!!h);e=m[1];if(!l&&b.Cookie.get("P_INFO")){m=b.Cookie.get("P_INFO").split("|");h=b.Cookie.get("S_INFO");f=k=m[0].replace(/@163\.com$/i,"");l=1==m[2]||(0==m[2]&&!!h);e=5}}else{if(b.Cookie.get("P_INFO")){m=b.Cookie.get("P_INFO").split("|");h=b.Cookie.get("S_INFO");f=k=m[0].replace(/@163\.com$/i,"");l=1==m[2]||(0==m[2]&&!!h);e=5}}if(l){if(e==5){b.one("#app-user-logout").set("href","http://reg.163.com/Logout.jsp?url="+encodeURIComponent(a))}else{if(e==1){b.one("#app-user-logout").set("href","http://reg.163.com/Logout.jsp?url="+encodeURIComponent("http://m.163.com/oauth/logout?type=1&from="+a))}else{b.one("#app-user-logout").set("href","http://m.163.com/oauth/logout?type="+e+"&from="+encodeURIComponent(a))}}}else{b.one("#app-login-url").set("value",a)}window.logined=l;window.userid=f;var j=b.one("#header-reg"),g=b.one("#header-login"),o=b.one("#header-system"),i=b.one("#header-user-panel"),n=b.one("#header-user-menu"),c=null;if(l){b.one("#app-user-name").setContent(k);o.show();var d="/usercenter/headImgUrl";if(b.UA.ie){d+="?var="+(+new Date())}b.io(d,{method:"GET",on:{success:function(q,r,w){if(r.responseText){var t=b.JSON.parse(r.responseText);if(t.status==="success"){var p=b.one("#app-user-name"),v=b.one("#header-avatar"),u=b.one("#header-notice-badge"),s=b.one("#header-notice-down"),y=b.one("#header-notice-update"),x=b.one("#header-user-avatar-v");if(t.name&&p){p.setContent(t.name)}if(t.img&&v){v.set("src",t.img)}if(t.badge&&u){u.setContent(t.badge)}if(t.down&&s){s.setContent(t.down)}if(t.update&&y){y.setContent(t.update)}if(t.authV==1){x.addClass("v-40");x.show()}else{if(t.level&&b.Lang.isString(t.level)){x.addClass(t.level.toLowerCase()+"-40");x.show()}}}}}}});b.on("hover",function(p){if(c){c.cancel()}c=b.later(200,this,function(){n.show();i.addClass("header-user-panel-onhover")})},function(p){if(c){c.cancel()}c=b.later(200,this,function(){i.removeClass("header-user-panel-onhover");n.hide()})},"#header-user-panel, #header-user-menu")}else{j.show();g.show()}});YUI({combine:true,comboBase:window.GLOBAL_COMBOBASE,modules:{"ntes-placeholder":{fullpath:"http://img5.cache.netease.com/apps/adp11/ntes-placeholder/ntes-placeholder.js",requires:["classnamemanager","node","plugin"]}}}).use("node","overlay","autocomplete","cookie","ntes-placeholder","substitute",function(a){var i=a.one("#app-search-input");if(i){i.plug(a.Plugin.Placeholder);var g="<div>{title}</div>",c='<div class="search-item"><span class="search-icon img-app-s"><i class="img-app-s-none"></i><img src="{icon}" width="30" height="30" /></span><div class="search-info"><p class="search-app-ttl t-overflow">{namehl}</p><div class="clearfix"><span class="fl-l"><span class="vote-column"><i style="width:{star}%"></i></span><span class="vote-text c-gray">{grade}</span></span>{other}</div></div></div>',f='<div class="search-item"><span class="search-icon img-app-s"><i class="img-app-s-none"></i>{levelIcon}<img src="{icon}" width="30" height="30" /></span><div class="search-info">{other}</div></div>';a.Plugin.AutoComplete.prototype._createItemNode=function(k){var m=a.Node.create(this.ITEM_TEMPLATE),l=k.raw.title?this.getClassName("item","disabled"):this.getClassName("item");return m.addClass(l).setAttrs({id:a.stamp(m),role:"option"}).setAttribute("data-text",k.text).append(k.display)};i.plug(a.Plugin.AutoComplete,{width:245,maxResults:0,resultListLocator:"results",resultTextLocator:"name",source:window.headerSearchUrl,resultFormatter:function(n,l){var k,m;return a.Array.map(l,function(p){m=p.raw;if(m.title){k=g}else{if(m.newPrice){k=c;m.star=m.grade*10;var o=m.prevPrice?'<span class="price-prev"><i></i>'+m.prevPrice+"</span>":"";m.other='<span class="fl-r search-app-price">'+o+'<span class="price-new c-orange">'+m.newPrice+"</span></span>"}else{if(m.size){k=c;m.star=m.grade*10;m.other='<span class="fl-r c-gray">\u5927\u5c0f\uff1a'+m.size+"</span>"}else{k=f;m.levelIcon="";if(m.level){m.levelIcon='<i class="user-info-40 r-1b-1 '+m.level.toLowerCase()+'-40"></i>';m.other='<p class="search-app-ttl t-overflow">'+m.namehl+'</p><p class="c-orange">';if(m.level=="v"||m.level=="V"){m.other+="\u8ba4\u8bc1\u7528\u6237</p>"}else{m.other+='<span class="c-gray">\u7b49\u7ea7\uff1a</span><span class="f-bold">'+m.level.toUpperCase()+"</span>\u7ea7\u7528\u6237</p>"}}else{m.other='<p class="search-app-ttl-s t-overflow">'+m.namehl+"</p>"}}}}return a.substitute(k,p.raw)})}});if(a.UA.ie){i.ac.on("visibleChange",function(k){if(k.newVal){i.ac.get("contentBox").setStyle("zoom",1)}else{i.ac.get("contentBox").setStyle("zoom",0)}})}i.ac.after("select",function(){a.one(".header-search form").submit()});a.one(".header-search .button-s2").on("click",function(k){if(i.get("value").replace(/\s/g,"")==""){k.preventDefault();alert("\u8bf7\u8f93\u5165\u60a8\u8981\u641c\u7d22\u7684\u5173\u952e\u5b57\uff01");i.select()}else{a.one(".header-search form").submit()}})}var e=new a.Overlay({srcNode:"#app-login-overlay",width:"476px",zIndex:500,visible:false,render:true});window.mask=a.Node.create('<div class="overlay-mask"></div>');mask.hide();a.one("body").insert(mask,0);if(a.UA.ie&&a.UA.ie<=6){mask.setStyle("position","absolute");function j(){mask.setStyles({width:a.DOM.docWidth()+"px",height:a.DOM.docHeight()+"px"})}j();a.on("windowresize",function(){j()})}a.one("#app-login-overlay-trigger").on("click",function(k){k.preventDefault();h()});a.one("#app-login-overlay-close").on("click",function(k){k.preventDefault();e.hide();mask.hide()});function h(){mask.show();e.set("centered",true).show();a.one("#glogin-uname").select()}window.showLoginOverlay=h;var b=new a.Overlay({srcNode:a.Node.create('<div class="loadingOvr">Loading...</div>'),zIndex:501,visible:false,render:true});window.showLoadingOvr=function(){b.set("centered",true).show()};window.hideLoadingOvr=function(){b.hide()};var d={model:window.currentSys};a.Cookie.setSubs("myModel",d,{path:"/",expires:new Date(a.Lang.now()+3*Math.pow(10,10))})});
