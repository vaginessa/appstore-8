YUI.add("image-list",function(e){var d=e.Node.create,c=e.Lang,b="contentBox",h="boundingBox",a="yui3-imagelist-arrow-left-disabled",g="yui3-imagelist-arrow-right-disabled";var f=function(){f.superclass.constructor.apply(this,arguments)};f.NAME="imageList";f.ATTRS={shots:{value:[],setter:function(i){return c.isArray(i)?i:[]}},viewOption:{value:{defaultRange:500,countInView:4,imgHeight:140,imgWidth:140},initOnly:true}};e.ImageList=e.extend(f,e.Widget,{LI_TEMPLATE:'<li><div class="box-download-shot">{movie}<img src="{src}" width="140" height="140" title="\u70b9\u51fb\u67e5\u770b\u5927\u56fe"></div></li>',LIST_CONTAINER:'<div class="m-t15 pos-r"><div class="container-shot-list"><ul class="shot-list" id="shot-list"></ul></div><span class="yui3-imagelist-arrow-left yui3-imagelist-arrow-left-disabled"></span><span class="yui3-imagelist-arrow-right {disabled}"></span></div>',LIST_CONTAINER_NOLR:'<div class="m-t15 pos-r"><div class="container-shot-list"><ul class="shot-list" id="shot-list"></ul></div><span style="position: absolute;top: 0;height: 142px;width: 25px;display: block;"></span></div>',renderUI:function(){this.get(h).removeClass("component-loading");this._createList();this.set("scrollTo",0);this.LIST=e.one("#shot-list");this.LIST_WIDTH=this.LIST.get("offsetWidth")},bindUI:function(){this._bindArrow()},_createList:function(){var k=this,p=this.get(b),m=this.get("shots"),l=m.length,i;if(l>this.get("viewOption.countInView")){i=d(e.substitute(this.LIST_CONTAINER,{disabled:""}))}else{i=d(e.substitute(this.LIST_CONTAINER_NOLR))}var o=i.one("#shot-list"),n="",j;e.each(m,function(q){j=q.isMovie?"<i></i>":"";n+=e.substitute(k.LI_TEMPLATE,{src:q.url,movie:j})});o.appendChild(n);p.appendChild(i)},_bindArrow:function(){e.all(".yui3-imagelist-arrow-left, .yui3-imagelist-arrow-right").on("click",function(i){if(i.currentTarget.hasClass("yui3-imagelist-arrow-left")){this._scrollBy(1)}else{this._scrollBy(-1)}},this)},_scrollBy:function(j){var l=this.LIST_WIDTH,k=this.get("viewOption.defaultRange"),i=j*k,m=this.get("scrollTo")+i;if(m>=1||m<=0-l){return}else{this._doScroll(m)}},_doScroll:function(k){this.LIST.transition({easing:"ease-out",duration:0.3,left:k+"px"});this.set("scrollTo",k);var j=e.one(".yui3-imagelist-arrow-left"),i=e.one(".yui3-imagelist-arrow-right");if(k>=0){j.addClass(a)}else{j.removeClass(a)}if(k<=this.get("viewOption.defaultRange")-this.LIST_WIDTH){i.addClass(g)}else{i.removeClass(g)}}})},"3.4.0",{skinnable:false,requires:["widget","substitute","transition"]});
