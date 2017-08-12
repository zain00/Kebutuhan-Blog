//<![CDATA[
$(document).ready(function(typage) {
    var b = typage("#post-pager .blog-pager-newer-link");
    var c = typage("#post-pager .blog-pager-older-link");
    typage.get(b.attr("href"), function(c) {
        b.html("<b>" + POSTPAGER_NEWER + "</b><span>" + typage(c).find(".post h1.post-title").text() + "</span>")
    }, "html");
    typage.get(c.attr("href"), function(b) {
        c.html("<b>" + POSTPAGER_OLDER + "</b><span>" + typage(b).find(".post h1.post-title").text() + "</span>")
    }, "html")
});
$("#related-posts").each(function() {
    var g = $(this).html();
    $.ajax({
        url: "/feeds/posts/default/-/" + g + "?alt=json-in-script&max-results=" + related_number,
        type: 'get',
        dataType: "jsonp",
        success: function(data) {
            var posturl = "";
            var htmlcode = '<h4 class="related-title">Recommended Articles</h4><ul class="related">';
            for (var i = 0; i < data.feed.entry.length; i++) {
                for (var j = 0; j < data.feed.entry[i].link.length; j++) {
                    if (data.feed.entry[i].link[j].rel == "alternate") {
                        posturl = data.feed.entry[i].link[j].href;
                        break
                    }
                }
                if ("content" in data.feed.entry[i]) var summ = data.feed.entry[i].content.$t;
                else if ("summary" in b_rc) var summ = data.feed.entry[i].summary.$t;
                else var summ = "";
                var content = /<\S[^>]*>/g;
                summ = summ.replace(content, ""), summ.length > 170 && (summ = "" + summ.substring(0, 150) + "...");
                var posttitle = data.feed.entry[i].title.$t;
                var postlabel = data.feed.entry[i].category[0].term;
                var get_date = data.feed.entry[i].published.$t,
                    year = get_date.substring(0, 4),
                    month = get_date.substring(5, 7),
                    day = get_date.substring(8, 10),
                    date = month_format[parseInt(month, 10)] + ' ' + day + ', ' + year;
                var content = data.feed.entry[i].content.$t;
                var $content = $('<div>').html(content);
                if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
                    var src2 = data.feed.entry[i].media$thumbnail.url;
                    var thumb = '<a class="related-img" href="' + posturl + '" style="background:url(' + src2 + ') no-repeat center center;background-size: cover"/>'
                } else if (content.indexOf("<img") > -1) {
                    var src = $content.find('img:first').attr('src');
                    var thumb = '<a class="related-img" href="' + posturl + '" style="background:url(' + src + ') no-repeat center center;background-size: cover"><span class="related-overlay"></span></a>'
                } else {
                    var thumb = '<a class="related-img" href="' + posturl + '" style="background:url(' + no_image + ') no-repeat center center;background-size: cover"><span class="related-overlay"></span></a>'
                }
                htmlcode += '<li><span class="related-tag">' + postlabel + '</span><div class="related-thumb">' + thumb + '</div><div class="related-content"><h3 class="related-title"><a href="' + posturl + '">' + posttitle + '</a><span class="recent-date">' + date + '</span></h3><p class="recent-summary">' + summ + '</p></div></li>'
            }
            htmlcode += '</ul><div class="clear"/>';
            $("#related-posts").html(htmlcode);
            $('.related-img').each(function() {
                $(this).attr('style', function(i, src) {
                    return src.replace('/default.jpg', '/mqdefault.jpg')
                }).attr('style', function(i, src) {
                    return src.replace('s72-c', 's100')
                }).attr('style', function(i, src) {
                    return src.replace('s200', 's100')
                }).attr('style', function(i, src) {
                    return src.replace('s320', 's100')
                }).attr('style', function(i, src) {
                    return src.replace('s400', 's100')
                }).attr('style', function(i, src) {
                    return src.replace('s640', 's100')
                }).attr('style', function(i, src) {
                    return src.replace('s1600', 's100')
                })
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
