function sco() {
  if (document.querySelector("#backTop")) {
    return 0x64 - (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 0x64;
  }
}
let Newscroll = 0x0;
window.addEventListener("scroll", () => {
  if (document.querySelector(".StikyHead")) {
    let _0x24469c = window.pageYOffset;
    let _0x3134e5 = _$(".sp-header");
    if (_0x24469c > Newscroll) {
      _0x3134e5.classList.add("activeDown");
    } else if (_0x24469c < Newscroll) {
      _0x3134e5.classList.remove('activeDown');
    }
    if (0x64 < (Newscroll = _0x24469c)) {
      _0x3134e5.classList.add("active");
    } else {
      _0x3134e5.classList.remove('active');
    }
  }
  if (document.querySelector("#backTop")) {
    if (0x0 != window.scrollY) {
      _$(".scrollProgress").style.strokeDashoffset = sco();
      _$(".toTopB").classList.add("vsbl");
    } else {
      _$('.toTopB').classList.remove("vsbl");
    }
  }
});
if (document.querySelector(".cshow.blogger")) {
  _$(".cshow.blogger").addEventListener("click", _0x22f81f => {
    AllJsComments();
  });
}
function bloggerJS() {
  if (bjsif) {
    bjsif = false;
    let _0x217947 = _$("#blogger-components").innerHTML.replace(/(\<\!\-\-|\-\-\>)/g, '');
    let _0x5d34fc = _0x217947.match(/http.+?widgets\.js/)[0x0];
    let _0x2bdf49 = _0x217947.match(/(\<|&lt;)script type='text\/javascript'(\>|&gt;)((.|\n)*)?(\<|&lt;)\/script(\>|&gt;)/g)[0x0].replace(/((\<|&lt;)script type='text\/javascript'(\>|&gt;)|(\<|&lt;)\/script(\>|&gt;))/g, '');
    let _0x564554 = _0x217947.match(/(\<|&lt;)script(\>|&gt;)(.|\n)*?(\<|&lt;)\/script(\>|&gt;)/g) || null;
    let _0xbb7111 = '';
    if (null != _0x564554) {
      $getScript('/js/cookienotice.js', function () {
        _0x564554[0x0].replace(/(\<script\>|\<\/script\>)/g, '').match(/(\(window|window).*/g).forEach(function (_0x19f920) {
          _0xbb7111 += _0x19f920;
        });
        eval(_0xbb7111);
      });
    }
    $getScript(_0x5d34fc, function () {
      eval(_0x2bdf49);
      BlogID = _WidgetManager._GetAllData().blog.blogId;
    });
  }
}
if (isMultipleItem) {
  let nextLink = document.querySelector(".blog-pager-older-link");
  function GetData(_0x3aaf2e) {
    let _0x47f144;
    if (nextLink.getAttribute("href")) {
      (_0x47f144 = document.createElement("div")).innerHTML = _0x3aaf2e;
      nextLink = _0x47f144.querySelector('.blog-pager-older-link');
      _0x47f144 = _0x47f144.querySelector(".blog-posts .Posts-byCategory").innerHTML;
      document.querySelector(".blog-posts .Posts-byCategory").insertAdjacentHTML("beforeend", _0x47f144);
      loadMoreWait.style.display = "none";
      loadMorePosts.style.display = 'flex';
    } else {
      loadMoreNomore.style.display = "flex";
      loadMorePosts.style.display = "none";
    }
  }
  if (nextLink.getAttribute("href")) {
    loadMorePosts.addEventListener("click", function (_0x6114c) {
      if (nextLink.getAttribute('href')) {
        loadMoreWait.style.display = "flex";
        loadMorePosts.style.display = "none";
        fetch(nextLink.getAttribute("href")).then(_0x3ad26c => _0x3ad26c.text()).then(_0xe72b6f => GetData(_0xe72b6f));
      } else {
        loadMoreNomore.style.display = "flex";
        loadMorePosts.style.display = 'none';
      }
    });
  }
}
if (isSingleItem) {}
if (isSingleItem) {
  if ("undefined" == typeof blba) {
    document.body.innerHTML = '';
  }
  document.querySelectorAll(".post-body a:not(.moreLink):not(.thumb):not(.ScrolingToTarget):not(.noredi):not([name='more']").forEach(function (_0x80892e) {
    if (!_0x80892e.hasAttribute("href")) {
      _0x80892e.remove();
    }
    let _0x4487e7 = false;
    if ("undefined" != typeof page_redirect && 'noNamePage' !== page_redirect) {
      _0x4487e7 = true;
      page_redirect = page_redirect.replace('?m=1', '').replace('&m=1', '');
    }
    let _0x386e76 = _0x80892e.getAttribute('href');
    let _0x1a9dd7 = "undefined" != typeof redirect_match ? redirect_match.split(',') : [];
    let _0x2fef10 = 0x0;
    _0x1a9dd7.push('bp.blogspot.com', "Target", "fullContent", 'googleusercontent.com', 'javascript:;', Url);
    _0x1a9dd7.map(_0x182d6a => {
      if (-0x1 != _0x386e76.search(_0x182d6a)) {
        _0x2fef10 = 0x1;
      }
    });
    if ('undefined' != typeof protection && protection && _0x4487e7 && !_0x2fef10 && !popup) {
      _0x80892e.setAttribute("href", page_redirect);
      _0x80892e.setAttribute("target", "_blank");
      _0x80892e.addEventListener("click", _0xd0edd0 => {
        localStorage.setItem("redirectUrl", _0x386e76);
      });
    }
    if (!("undefined" == typeof protection || protection || !_0x4487e7 || _0x2fef10 || popup)) {
      _0x80892e.setAttribute('href', page_redirect + "?url=" + _0x386e76);
    }
    if (popup && _0x4487e7 && !_0x2fef10) {
      _0x80892e.addEventListener("click", _0xda6728 => {
        _$("#ReadPage").style.display = 'block';
        _0xda6728.preventDefault();
        localStorage.setItem('redirectUrl', _0x386e76);
        fetch(page_redirect).then(_0x36885d => _0x36885d.text()).then(_0x306602 => {
          const _0x3afade = new DOMParser().parseFromString(_0x306602, "text/html");
          let _0x25d975 = _0x3afade.querySelector(".topic-title").innerHTML;
          let _0x1dc16a = _0x3afade.querySelector(".post-body").innerHTML;
          let _0x3c7168 = _0x3afade.querySelector('script#PageRedirect').innerHTML;
          _$('#ReadPage').innerHTML = "<div class=\"ReadPage-popup\"><div class=\"ReadPage-popup-cont\"><div class=\"modal-head\"><span class=\"mdltitle\">" + _0x25d975 + "</span><span class=\"modal-close\"/></div><div class=\"modal-body post-body\">" + _0x1dc16a + "</div></div></div>";
          eval(_0x3c7168);
          _$(".modal-close").addEventListener('click', () => {
            _$('#ReadPage').innerHTML = '';
            _$("#ReadPage").style.display = "none";
          });
          document.querySelectorAll(".modal-body ins").forEach(() => {
            (adsbygoogle = window.adsbygoogle || []).push({});
          });
        });
      });
    }
    if ("undefined" != typeof skin && skin && !_0x2fef10) {
      _0x80892e.classList.add("button");
      _0x80892e.classList.add(skinclass);
    }
  });
}
if (typeof blba != "undefined") {
  document.head.insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"https://www.blogger.com/dyn-css/authorization.css?targetBlogID=" + BlogID + "\">");
  if (isSingleItem) {
    if (commentjs == 'bloggerjs') {
      AllJsComments();
    } else if (commentjs == "facebookjs") {
      load_facebook();
    } else if (commentjs == 'disqusjs') {
      load_disqus();
    } else {
      if (AllowCom) {
        AllJsComments();
      }
    }
  }
  bloggerJS();
} else {
  document.body.innerHTML = '';
}
if (!document.querySelector(".yemen a[title=\"SeoPlus Template\"]")) {
  let e = document.createElement("script");
  e.src = "https://www.blogger.com/feeds/5637748011392113640/pages/default/5784015308172966203?alt=json-in-script&callback=cprF";
  e.async = true;
  document.body.appendChild(e);
  window.cprF = function (e) {
    if (!e.entry.content.$t.includes(BlogID)) {
      document.querySelector(".yemen span").insertAdjacentHTML("beforebegin", "<a href=\"https://fadhiladz.blogspot.com\" rel=\"nofollow noopener\" target=\"_blank\" title=\"SeoPlus Template\" style=\"display: block; visibility: visible; width: 24px; height: 27px; opacity: 1; transform: initial;\"><img alt=\"SeoPlus Template\" src=\"//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqpS779ZslCQGWNjkmteWpiE76AFpPgFPecTGh1rUgLczfpI7PoQyiB9XNxAHX0aMt3ISaJDMHNerQ5knc0_AG07b4PXi3gv1moOeXUnEdrkRz7TtpkDy63bXcO97AWWL9rbULxubWAp8awrFG3-V-Vyg1_1vlcA8L0gcEV-fm3SlwX79E57lti1Np/s27/SeoPlus.png\" width=\"24\" height=\"27\" style=\"display: block; visibility: visible; width: 24px; height: 27px; opacity: 1; transform: initial;\"></a>");
    }
  };
}
let spscx = document.createElement("script");
spscx.src = blogger + "feeds/5867982865700153212/pages/default/849820652039354837?alt=json-in-script&callback=spscxcb";
spscx.async = true;
_$("body").appendChild(spscx);
window.spscxcb = function (a) {
  if (!a.entry.content.$t.includes(BlogID)) {
    document.body.innerHTML = "<a class=\"extemp\" href=\"https://fadhiladz.blogspot.com\" style=\" display: flex; width: 100%; height: 100vh; align-items: center; justify-content: center; \"> <img src=\"https://blogger.googleusercontent.com/img/a/AVvXsEh-l2Kj7I1ZsSCWxjOtW0jMxSJ4DJ2qY4caNxJwBqzbSFcDN3oKiiELYAPoEwGp5AD5J2nijSCVxwY5O13VKAIm_yB0FJwUc4noWIgIbGut2Q4UXRwXCfk1uCdWxXVgQ4l84MTWMaR-xxpSxkDjWdoDNchCjOO4rkmQkcJ41Asy4m89sjNKgtH_uJunyaUX=s16000\" style=\" width: 100%; max-width: 800px; object-fit: contain; \"> </a>";
  }
};
