//<![CDATA[


$('.ty-trigger .HTML .widget-content span.latestcomments').each(function() {
    var b = $(this).attr("data-no");
    $.ajax({
        url: "/feeds/comments/default?alt=json-in-script&max-results=" + b,
        type: 'get',
        dataType: "jsonp",
        success: function(e) {
            var u = "";
            var h = '<div class="tyard-komet">';
            for (var i = 0; i < e.feed.entry.length; i++) {
                if (i == e.feed.entry.length) break;
                for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                    if (e.feed.entry[i].link[j].rel == 'alternate') {
                        u = e.feed.entry[i].link[j].href;
                        break
                    }
                }
                if ("content" in e.feed.entry[i]) {
                    var c = e.feed.entry[i].content.$t
                } else if ("summary" in b_rc) {
                    var c = e.feed.entry[i].summary.$t
                } else var c = "";
                var re = /<\S[^>]*>/g;
                c = c.replace(re, "");
                if (c.length > 70) {
                    c = '' + c.substring(0, 50) + '...'
                }
                var y = e.feed.entry[i].author[0].name.$t;
                var yk = e.feed.entry[i].author[0].gd$image.src;
                if (yk.match('http://img1.blogblog.com/img/blank.gif')) {
                    var k = 'http://img1.blogblog.com/img/anon36.png'
                } else {
                    if (yk.match('http://img2.blogblog.com/img/b16-rounded.gif')) {
                        var k = 'http://img1.blogblog.com/img/anon36.png'
                    } else {
                        var k = yk
                    }
                };
                h += '<div class="ty-komet"><div class="ty-komet-tar"><img class="yardimg-komet" src="' + k + '"/></div><a href="' + u + '">' + y + '</a><span>"' + c + '"</span></div>'
            }
            h += '</div><div class="clear"/>';
            $('.ty-trigger .HTML .widget-content span.latestcomments').each(function() {
                var text = $(this).attr("data-no");
                if (text == b) {
                    $(this).parent().html(h)
                }
            })
        }
    })
});
$('.ty-trigger .HTML .widget-content span.latestposts').each(function() {
    var b = $(this).attr("data-no");
    $.ajax({
        url: "/feeds/posts/default?alt=json-in-script&max-results=" + b,
        type: 'get',
        dataType: "jsonp",
        success: function(e) {
            var u = "";
            var h = '<div class="ty-bonus">';
            for (var i = 0; i < e.feed.entry.length; i++) {
                for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                    if (e.feed.entry[i].link[j].rel == "alternate") {
                        u = e.feed.entry[i].link[j].href;
                        break
                    }
                }
                var g = e.feed.entry[i].title.$t;
                var s = e.feed.entry[i].category[0].term;
                var y = e.feed.entry[i].author[0].name.$t;
                var d = e.feed.entry[i].published.$t,
                    t = d.substring(0, 4),
                    w = d.substring(5, 7),
                    f = d.substring(8, 10),
                    r = month_format[parseInt(w, 10)] + ' ' + f + ', ' + t;
                var c = e.feed.entry[i].content.$t;
                var $c = $('<div>').html(c);
                if (c.indexOf("//www.youtube.com/embed/") > -1) {
                    var p = e.feed.entry[i].media$thumbnail.url.replace('/default.jpg', '/mqdefault.jpg');
                    var k = p
                } else if (c.indexOf("<img") > -1) {
                    var q = $c.find('img:first').attr('src').replace('s72-c', 's1600');
                    var k = q
                } else {
                    var k = no_image
                }
                h += '<div class="ty-wow"><a class="ty-thumb-bonos" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a><div class="ty-bonus-con"><h3 class="ty-bonos-entry"><a href="' + u + '">' + g + '</a></h3><span class="yard-auth-ty">' + y + '</span><span class="ty-time">' + r + '</span></div></div>'
            }
            h += '</div>';
            $('.ty-trigger .HTML .widget-content span.latestposts').each(function() {
                var text = $(this).attr("data-no");
                if (text == b) {
                    $(this).parent().html(h)
                }
            })
        }
    })
});
$('.ty-trigger .HTML .widget-content span.tagpost').each(function() {
    var v = $(this).attr("data-label"),
        b = $(this).attr("data-no");
    $.ajax({
        url: "/feeds/posts/default/-/" + v + "?alt=json-in-script&max-results=" + b,
        type: 'get',
        dataType: "jsonp",
        success: function(e) {
            var u = "";
            var h = '<div class="ty-bonus">';
            for (var i = 0; i < e.feed.entry.length; i++) {
                for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                    if (e.feed.entry[i].link[j].rel == "alternate") {
                        u = e.feed.entry[i].link[j].href;
                        break
                    }
                }
                var g = e.feed.entry[i].title.$t;
                var s = e.feed.entry[i].category[0].term;
                var y = e.feed.entry[i].author[0].name.$t;
                var d = e.feed.entry[i].published.$t,
                    t = d.substring(0, 4),
                    w = d.substring(5, 7),
                    f = d.substring(8, 10),
                    r = month_format[parseInt(w, 10)] + ' ' + f + ', ' + t;
                var c = e.feed.entry[i].content.$t;
                var $c = $('<div>').html(c);
                if (c.indexOf("//www.youtube.com/embed/") > -1) {
                    var p = e.feed.entry[i].media$thumbnail.url.replace('/default.jpg', '/mqdefault.jpg');
                    var k = p
                } else if (c.indexOf("<img") > -1) {
                    var q = $c.find('img:first').attr('src').replace('s72-c', 's1600');
                    var k = q
                } else {
                    var k = no_image
                }
                h += '<div class="ty-wow"><a class="ty-thumb-bonos" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a><div class="ty-bonus-con"><h3 class="ty-bonos-entry"><a href="' + u + '">' + g + '</a></h3><span class="yard-auth-ty">' + y + '</span><span class="ty-time">' + r + '</span></div></div>'
            }
            h += '</div>';
            $(".ty-trigger .HTML .widget-content span.tagpost").each(function() {
                var text = $(this).attr("data-label");
                if (text == v) {
                    $(this).parent().html(h)
                }
            })
        }
    })
});
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
