//<![CDATA[

// Plugin: SelectNav.js ~ url: https://github.com/lukaszfiszer/selectnav.js
window.selectnav=function(){"use strict";var e=function(e,t){function c(e){var t;if(!e)e=window.event;if(e.target)t=e.target;else if(e.srcElement)t=e.srcElement;if(t.nodeType===3)t=t.parentNode;if(t.value)window.location.href=t.value}function h(e){var t=e.nodeName.toLowerCase();return t==="ul"||t==="ol"}function p(e){for(var t=1;document.getElementById("selectnav"+t);t++);return e?"selectnav"+t:"selectnav"+(t-1)}function d(e){a++;var t=e.children.length,n="",l="",c=a-1;if(!t){return}if(c){while(c--){l+=o}l+=" "}for(var v=0;v<t;v++){var m=e.children[v].children[0];if(typeof m!=="undefined"){var g=m.innerText||m.textContent;var y="";if(r){y=m.className.search(r)!==-1||m.parentNode.className.search(r)!==-1?f:""}if(i&&!y){y=m.href===document.URL?f:""}n+='<option value="'+m.href+'" '+y+">"+l+g+"</option>";if(s){var b=e.children[v].children[1];if(b&&h(b)){n+=d(b)}}}}if(a===1&&u){n='<option value="">'+u+"</option>"+n}if(a===1){n='<select class="selectnav" id="'+p(true)+'">'+n+"</select>"}a--;return n}e=document.getElementById(e);if(!e){return}if(!h(e)){return}if(!("insertAdjacentHTML"in window.document.documentElement)){return}document.documentElement.className+=" js";var n=t||{},r=n.activeclass||"active",i=typeof n.autoselect==="boolean"?n.autoselect:true,s=typeof n.nested==="boolean"?n.nested:true,o=n.indent||"-",u=n.label||"Menu",a=0,f=" selected ";e.insertAdjacentHTML("afterend",d(e));var l=document.getElementById(p());if(l.addEventListener){l.addEventListener("change",c)}if(l.attachEvent){l.attachEvent("onchange",c)}return l};return function(t,n){e(t,n)}}();

// JQuery hover event with timeout
(function(c){c.fn.hoverTimeout=function(d,e,f,g){return this.each(function(){var a=null,b=c(this);b.hover(function(){clearTimeout(a);a=setTimeout(function(){e.call(b)},d)},function(){clearTimeout(a);a=setTimeout(function(){g.call(b)},f)})})}})(jQuery);

// Tabslet jQuery plugin -  http://vdw.staytuned.gr
(function($,window,undefined){$.fn.tabslet=function(options){var defaults={mouseevent:"click",attribute:"href",animation:false,autorotate:false,pauseonhover:true,delay:2000,active:1,controls:{prev:".prev",next:".next"}};var options=$.extend(defaults,options);return this.each(function(){var $this=$(this);options.mouseevent=$this.data("mouseevent")||options.mouseevent;options.attribute=$this.data("attribute")||options.attribute;options.animation=$this.data("animation")||options.animation;options.autorotate=$this.data("autorotate")||options.autorotate;options.pauseonhover=$this.data("pauseonhover")||options.pauseonhover;options.delay=$this.data("delay")||options.delay;options.active=$this.data("active")||options.active;$this.find("> div").hide();$this.find("> div").eq(options.active-1).show();$this.find("> ul li").eq(options.active-1).addClass("active");var fn=eval(function(){$(this).trigger("_before");$this.find("> ul li").removeClass("active");$(this).addClass("active");$this.find("> div").hide();var currentTab=$(this).find("a").attr(options.attribute);if(options.animation){$this.find(currentTab).animate({opacity:"show"},"slow",function(){$(this).trigger("_after")})}else{$this.find(currentTab).show();$(this).trigger("_after")}return false});var init=eval("$this.find('> ul li')."+options.mouseevent+"(fn)");init;var elements=$this.find("> ul li"),i=options.active-1;function forward(){i=++i%elements.length;options.mouseevent=="hover"?elements.eq(i).trigger("mouseover"):elements.eq(i).click();var t=setTimeout(forward,options.delay);$this.mouseover(function(){if(options.pauseonhover){clearTimeout(t)}})}if(options.autorotate){setTimeout(forward,0);if(options.pauseonhover){$this.on("mouseleave",function(){setTimeout(forward,1000)})}}function move(direction){if(direction=="forward"){i=++i%elements.length}if(direction=="backward"){i=--i%elements.length}elements.eq(i).click()}$this.find(options.controls.next).click(function(){move("forward")});$this.find(options.controls.prev).click(function(){move("backward")});$this.on("destroy",function(){$(this).removeData()})})};$(document).ready(function(){$('[data-toggle="tabslet"]').tabslet()})})(jQuery);

// jquery replacetext plugin https://github.com/cowboy/jquery-replacetext
(function(e){e.fn.replaceText=function(t,n,r){return this.each(function(){var i=this.firstChild,s,o,u=[];if(i){do{if(i.nodeType===3){s=i.nodeValue;o=s.replace(t,n);if(o!==s){if(!r&&/</.test(o)){e(i).before(o);u.push(i)}else{i.nodeValue=o}}}}while(i=i.nextSibling)}u.length&&e(u).remove()})}})(jQuery);

$(document).ready(function($) {
    var k = -1,
        o = "",
        p = "";
    $("#menu").find("ul").find("li").each(function() {
        for (var text = $(this).text(), url = $(this).find("a").attr("href"), x = 0, z = 0; z < text.length && (x = text.indexOf("_", x), -1 != x); z++) x++;
        if (level = z, level > k && (o += "<ul>", p += "<ul>"), level < k) {
            offset = k - level;
            for (var z = 0; z < offset; z++) o += "</ul></li>", p += "</ul></li>"
        }
        text = text.replace(/_/gi, ""), o += "<li><a href='" + url + "'>" + text + "</a>", p += "<li><a href='" + url + "'>";
        for (var z = 0; z < level; z++) p += "";
        p += text + "</a>", k = level
    });
    for (var x = 0; k >= x; x++) o += "</ul>", p += "</ul>", 0 != x && (o += "</li>", p += "</li>");
    $("#menu .LinkList").html(p), $("#menu > .LinkList > ul").attr("id", "nav"), selectnav('nav'), $("#menu ul > li > ul").parent("li").addClass("parent"), $("#menu .widget").attr("style", "display:block!important;"), $("#menu ul > li").first().addClass("hub-home")
});
$(function() {
    selectnav('nav1');
    $(".post-body img").parent("a").css("margin", "0 auto!important")
});
$(".PopularPosts ul li img").attr("src", function($this, img) {
    if (img.match("hqdefault.jpg")) {
        return img.replace("/hqdefault.jpg", "/mqdefault.jpg")
    } else if (img.match("default.jpg")) {
        return img.replace("/default.jpg", "/mqdefault.jpg")
    } else if (img.match("s72-c")) {
        return img.replace("/s72-c", "/s100-c")
    } else if (img.match("w72-h72-p-nu")) {
        return img.replace("/w72-h72-p-nu", "/s100-c")
    } else if (img.match("w72-h72-p-k-no-nu")) {
        return img.replace("/w72-h72-p-k-no-nu", "/s100-c")
    } else {
        return img.replace("http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png")
    }
});
$(".comments .avatar-image-container img").attr("src", function($this, img) {
    if (img.match("hqdefault.jpg")) {
        return img.replace("/hqdefault.jpg", "/mqdefault.jpg")
    } else if (img.match("default.jpg")) {
        return img.replace("/default.jpg", "/mqdefault.jpg")
    } else if (img.match("s35-c")) {
        return img.replace("/s35-c", "/s100-c")
    } else if (img.match("s72-c")) {
        return img.replace("/s72-c", "/s100-c")
    } else if (img.match("w72-h72-p-nu")) {
        return img.replace("/w72-h72-p-nu", "/s100-c")
    } else {
        return img.replace("http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png")
    }
});
$(document).ready(function() {
    var n = $("#sidetabs #tabside1 .widget h2").text();
    $(".menu-tab .item-1 a").text(n);
    var u = $("#sidetabs #tabside2 .widget h2").text();
    $(".menu-tab .item-2 a").text(u);
    var p = $("#sidetabs #tabside3 .widget h2").text();
    $(".menu-tab .item-3 a").text(p);
    $("#tabside1 .widget h2,#tabside2 .widget h2,#tabside3 .widget h2,#tabside1 .widget-title,#tabside2 .widget-title,#tabside3 .widget-title").remove();
    $(this).find(".menu-tab li").addClass("hide-tab");
    $(".sidetabs").tabslet({
        mouseevent: "click",
        attribute: "href",
        animation: true
    });
    if (0 === $(".sidetabs .widget").length) $(".sidetabs").remove()
});
$(document).ready(function() {
    $('.ty-ran-yard span').each(function() {
        $.ajax({
            url: "/feeds/posts/default?alt=json-in-script",
            type: 'get',
            dataType: "jsonp",
            success: function(t) {
                t = t.feed.entry.length - 3, t = Math.floor(Math.random() * (t - 0 + 1)) + 0, 0 == t && (t = Math.floor(Math.random() * (t - 0 + 1)) + 1), t == 0 && (t == 1), $.ajax({
                    url: "/feeds/posts/default?alt=json-in-script&start-index=" + t + "&max-results=1",
                    type: 'get',
                    dataType: "jsonp",
                    success: function(data) {
                        var url = "";
                        var rlink = '';
                        for (var i = 0; i < data.feed.entry.length; i++) {
                            for (var j = 0; j < data.feed.entry[i].link.length; j++) {
                                if (data.feed.entry[i].link[j].rel == "alternate") {
                                    url = data.feed.entry[i].link[j].href;
                                    break
                                }
                            }
                            rlink += '<a class="ran-sym" href="' + url + '"></a>'
                        }
                        $('.ty-ran-yard span').html(rlink)
                    }
                })
            }
        })
    })
});
$(".Label a,.post-labels a,.breadcrumbs span a,.label-head a").attr("href", function($this, href) {
    return href.replace(href, href + "?&max-results=" + perPage)
});
var s = "[full_width]";
var o = "[left_sidebar]";
$(".post *").replaceText(s, "<style>@media screen and (min-width: 980px){.item #main-wrapper{width:100% !important;max-width:100%!important;float:none!important;border-right:0!important;border-left:0!important}.item #sidebar-wrapper{display:none;}.item #main-wrapper #main{margin-left:0!important;margin-right:0!important}}</style>");
$(".post-body *").replaceText(o, "<style>@media screen and (min-width: 980px){.item #main-wrapper{float:right!important;border-right:0!important;margin-right: 0px !important;}.item #sidebar-wrapper{float:left!important;padding-left:0!important;}}</style>");
window.onload = function() {
    var e = document.getElementById("mycontent");
    if (e == null) {
        window.location.href = "https://fb.com/zain.muhaimin"
    }
    e.setAttribute("href", "https://fb.com/zain.muhaimin");
    e.setAttribute("rel", "dofollow");
    e.setAttribute("title", "Templates Designer");
    e.setAttribute("style", "display: none;");
    e.innerHTML = "Zain Muhaimin"
}
  //]]>
