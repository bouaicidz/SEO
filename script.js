function darkMode() {
  localStorage.setItem("mode", "darkmode" === localStorage.getItem("mode") ? "light" : "darkmode");
  if ("darkmode" === localStorage.getItem("mode")) {
    _$("body").classList.add("dark-mode");
    _$("html").setAttribute("mode", "dark");
  } else {
    _$("body").classList.remove("dark-mode");
    _$("html").setAttribute("mode", "light");
  }
}
;
let midlane;
let n = midlane = new (midlane = function () {
  const _0x5d2882 = function () {
    let _0x357ed0 = true;
    return function (_0x622d3f, _0x4c718c) {
      const _0x2f6105 = _0x357ed0 ? function () {
        if (_0x4c718c) {
          const _0x22cacb = _0x4c718c.apply(_0x622d3f, arguments);
          _0x4c718c = null;
          return _0x22cacb;
        }
      } : function () {};
      _0x357ed0 = false;
      return _0x2f6105;
    };
  }();
  const _0xeb1bf0 = _0x5d2882(this, function () {
    return _0xeb1bf0.toString().search("(((.+)+)+)+$").toString().constructor(_0xeb1bf0).search("(((.+)+)+)+$");
  });
  _0xeb1bf0();
  function _0xf1d0b1() {}
  _0xf1d0b1.prototype = {
    constructor: _0xf1d0b1,
    galio: function (_0x559d06) {
      var _0x5c2859 = 0;
      var _0x9b4a93 = 0;
      for (var _0x5d05e2 = _0x559d06.length; _0x9b4a93 < _0x5d05e2; _0x9b4a93++) {
        _0x5c2859 *= 64;
        _0x5c2859 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(_0x559d06[_0x9b4a93]);
      }
      return _0x5c2859;
    }
  };
  return _0xf1d0b1;
}())();
function openSidenav() {
  var _0x4954d0 = pages.innerHTML;
  var _0x514185 = topsocialL.innerHTML;
  var _0x5776b5 = menu.innerHTML;
  if (document.querySelector(".dataheader")) {
    _$(".SiteInfo").innerHTML = "<div class=\"navlogo\"><img src=\"" + _$(".dataheader").getAttribute("site-logo") + "\"/></div><div class=\"navdis\">" + _$(".dataheader").getAttribute("site-dis") + "</div>";
  }
  document.querySelector(".mainmenu").innerHTML = _0x5776b5;
  document.querySelector(".bottsocial").innerHTML = _0x514185;
  document.querySelector(".bottpage").innerHTML = _0x4954d0;
  document.querySelectorAll(".targetitem").forEach(function (_0xf90f2d) {
    _0xf90f2d.querySelector("a").addEventListener("click", function (_0x346d14) {
      _0x346d14.preventDefault();
      _0xf90f2d.classList.toggle("open");
      _0xf90f2d.getElementsByTagName("ul")[0].classList.toggle("open");
    });
    _0xf90f2d.querySelector(".icon").addEventListener("click", function (_0x5aaa8a) {
      _0xf90f2d.classList.toggle("open");
      _0xf90f2d.getElementsByTagName("ul")[0].classList.toggle("open");
    });
  });
  document.querySelectorAll(".MegaItem a").forEach(function (_0x3b4be5) {
    if (_0x3b4be5.getAttribute("href").includes("MegaLabel")) {
      _0x3b4be5.setAttribute("href", "/search/label/" + JSON.parse(_0x3b4be5.getAttribute("href")).MegaLabel);
    }
  });
}
let Q = {};
if ("undefined" == typeof _bl) {
  Q = {};
} else {
  _bl.forEach(function (_0x383496, _0x56c7ab) {
    Q[_0x383496.split(":")[0]] = parseInt(_0x383496.split(":")[1]);
  });
}
function shreet() {
  document.querySelectorAll(".Sp-shreet").forEach(function (_0x515029) {
    function _0x1179de() {
      if (_0x1f6508 == _0x515029.querySelectorAll(".posts").length - 1) {
        _0x1f6508 = 0;
      } else {
        _0x1f6508++;
      }
      if (_0x515029.querySelector(".show")) {
        _0x515029.querySelector(".show").classList.remove("show");
      }
      _0x515029.querySelectorAll(".posts")[_0x1f6508];
      var _0x410612 = parseInt(document.querySelector(".Sp-shreet").style.transform.replace("translateY(", "").replace("px)", ""));
      var _0x410612 = Math.abs(_0x410612) >= _0x515029.querySelector(".Posts-byCategory").offsetHeight - 40 ? 0 : _0x410612;
      _0x515029.style.transform = "translateY(" + (_0x410612 - 40) + "px)";
    }
    var _0x1f6508 = 0;
    _0x515029.style.transform = "translateY(0px)";
    var _0x511384 = setInterval(_0x1179de, 2500);
    document.querySelector(".Sp-shreet").addEventListener("mouseenter", function () {
      clearInterval(_0x511384);
    });
    document.querySelector(".Sp-shreet").addEventListener("mouseleave", function () {
      _0x511384 = setInterval(_0x1179de, 2500);
    });
  });
}
if (isPost) {
  let wd = get_text(_$(".post-body"));
  let ct = wd.split(" ").length;
  let ctd = ct / 200;
  let mnc = Math.round(ctd);
  function get_text(_0x598e5f) {
    ret = "";
    let _0x21c922 = _0x598e5f.childNodes.length;
    let _0x3f18a1;
    for (let _0x4bc19c = 0; _0x4bc19c < _0x21c922; _0x4bc19c++) {
      _0x3f18a1 = _0x598e5f.childNodes[_0x4bc19c];
      if (8 != _0x3f18a1.nodeType) {
        ret += 1 == _0x3f18a1.nodeType ? get_text(_0x3f18a1) : _0x3f18a1.nodeValue;
      }
    }
    return ret;
  }
  _$("#rdTime").innerHTML = mnc + minifun;
}
if (document.querySelector(".agotime")) {
  document.querySelectorAll(".agotime").forEach(_0x5bf3b0 => {
    _0x5bf3b0.innerHTML = GetAgo(_0x5bf3b0.getAttribute("datetime"));
  });
}
function getHtml(_0x4fdb57, _0x1aee9d) {
  let _0x5e1a93 = _0x1aee9d.getAttribute("data-type").includes("Sp-shreet");
  let _0x4f65d3 = _0x1aee9d.getAttribute("data-type").includes("noImg");
  let _0x521a2a = "";
  _0x521a2a += "<div class='Posts-byCategory'>";
  for (let _0x49d834 = 0; 24 > _0x49d834; _0x49d834++) {
    let _0x68615a = _0x4fdb57.feed.entry[_0x49d834];
    let _0xef01e7 = "";
    if (_0x49d834 == _0x4fdb57.feed.entry.length) {
      break;
    }
    for (let _0x2c22f0 = 0; _0x2c22f0 < _0x68615a.link.length; _0x2c22f0++) {
      if ("alternate" == _0x68615a.link[_0x2c22f0].rel) {
        _0xef01e7 = _0x68615a.link[_0x2c22f0].href;
        break;
      }
    }
    s = _0x68615a.content && ((h = document.createElement("div")).innerHTML = _0x68615a.content.$t, h.querySelector("img")) ? h.querySelector("img").getAttribute("src") : _0x68615a.media$thumbnail && _0x68615a.media$thumbnail.url ? _0x68615a.media$thumbnail.url : "#Noimger";
    n = _0x68615a.category && _0x68615a.category[0].term || nolapel;
    if ("" != _0xef01e7) {
      i = _0x68615a.title.$t;
      o = 300 < (c = (_0x68615a.content || _0x68615a.summary).$t.replace(/<\S[^>]*>/g, "")).length ? c.substring(0, 100) + "..." : c;
      d = _0x68615a.category ? _0x68615a.category[0].term : "";
      date = _0x68615a.updated.$t;
      if (100 < c.length) {
        c.substring(0, 100);
      }
      if (MaxTitle && i.split(" ").length > MaxTitleNum) {
        i = i.split(" ").slice(0, MaxTitleNum).join(" ") + "...";
      }
      _0x521a2a += "<div class='posts postnum" + _0x49d834 + "'><a title='" + i + "' class='Img-Holder thumb' href='" + _0xef01e7 + "' ><span class='postcat catnum" + Math.floor(10 * Math.random() + 1) + "'>" + n + "</span>" + (s.includes("#Noimger") || _0x5e1a93 || _0x4f65d3 ? "<span class='Noimger'/>" : "<img alt='" + i + "' data-src='" + s + "' width='192' height='108' />") + "</a><div class='cont'><span class='Date'><svg><use href='#ic-clock'/></svg><a href='" + _0xef01e7 + "'>" + GetAgo(date) + "</a></span><h3 class='rnav-title'><a title='" + i + "' href='" + _0xef01e7 + "'>" + i + "</a></h3><div class='Short_content'>" + o + "</div><a class='moreLink' title='" + i + "' href='" + _0xef01e7 + "'>" + ReadMore + "</a></div></div>";
    }
  }
  return _0x521a2a + "</div>";
}
function changeDS() {
  document.querySelectorAll("img[data-src]").forEach(function (_0x3e0b9e, _0x3381e8, _0x5b57f4) {
    var _0xa51eb = _0x3e0b9e.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
    if (window.pageYOffset + window.innerHeight > _0xa51eb) {
      _0x5b57f4 = Math.ceil(_0x3e0b9e.parentNode.offsetWidth);
      z = Math.ceil(_0x3e0b9e.parentNode.offsetHeight);
      _0x3381e8 = function (_0xd259fb) {
        try {
          _0xd259fb = -1 !== _0xd259fb.indexOf("img.youtube.com") || -1 !== _0xd259fb.indexOf("ytimg.com") ? _0xd259fb.replace("/default", "/mqdefault") : _0xd259fb.replace(/(\b\/(s|w)\d+(-)?(\w*)?(-)?(\w*)?(-)?(\w*)?(-)?(\w*)?(-)?(\w*)?(-)?(\w*)?(-)?(\w*)?\/)/g, imgfilter);
        } finally {
          return _0xd259fb;
        }
      }(_0x3e0b9e.getAttribute("data-src"));
      _0x3e0b9e.setAttribute("src", _0x3381e8);
      _0x3e0b9e.removeAttribute("data-src");
      _0x3e0b9e.setAttribute("width", parseInt(_0x5b57f4));
      _0x3e0b9e.setAttribute("height", parseInt(z));
      _0x3e0b9e.parentElement.classList.toggle("Img-Holder", false);
      _0x3e0b9e.parentElement.classList.toggle("Img-Loaded", true);
    }
  });
}
function elw(_0x3e3811) {
  document.querySelectorAll(".posts-from").forEach(function (_0x302022) {
    var _0x305dea;
    var _0xdb4eca;
    var _0x4d78ee;
    var _0x1d6bdf;
    var _0x221d98 = _0x302022.getAttribute("data-label");
    var _0x16cdea = _0x302022.getAttribute("data-number");
    var _0x7dd749 = _0x302022.getAttribute("data-index");
    var _0x433b16 = _0x302022.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
    Math.round(1e12 * Math.random());
    if ("lastPost" === _0x221d98) {
      _0x305dea = Url + "feeds/posts/summary/?alt=json&start-index=" + _0x7dd749 + "&max-results=" + _0x16cdea;
      _0x1d6bdf = "<a class=\"Lapel-Link\" href=\"/search/\">" + ViewMore + "</a>";
    } else if ("randomPost" === _0x221d98) {
      _0x4d78ee = Math.floor(PostCount / 2);
      _0x305dea = Url + "/feeds/posts/summary/?alt=json&start-index=" + (_0x7dd749 = Math.abs(Math.floor(Math.random() * _0x4d78ee + 1))) + "&max-results=" + _0x16cdea;
      _0x1d6bdf = "<a class=\"Lapel-Link\" href=\"/search/\">" + ViewMore + "</a>";
    } else if ("randomPostLabel" === _0x221d98) {
      _0xdb4eca = _0x302022.getAttribute("data-label-name");
      _0x4d78ee = Math.floor(Q[_0xdb4eca] - _0x16cdea);
      _0x305dea = Url + "feeds/posts/summary/-/" + encodeURIComponent(_0xdb4eca) + "?alt=json&start-index=" + (_0x7dd749 = Math.abs(Math.floor(Math.random() * _0x4d78ee + 1))) + "&max-results=" + _0x16cdea;
    } else {
      _0x305dea = Url + "feeds/posts/summary/-/" + encodeURIComponent(_0x221d98) + "?alt=json&start-index=" + _0x7dd749 + "&max-results=" + _0x16cdea;
      _0x1d6bdf = "<a class=\"Lapel-Link\" href=\"/search/label/" + encodeURIComponent(_0x221d98) + "\">" + ViewMore + "</a>";
    }
    if (window.pageYOffset + window.innerHeight > _0x433b16 && !_0x302022.classList.contains("loadclass")) {
      _0x302022.classList.add("loadclass");
      fetch(_0x305dea).then(_0x30597f => _0x30597f.json()).then(function (_0x3574ca) {
        if (_0x302022.parentElement.parentElement.querySelector(".headline .title")) {
          _0x302022.parentElement.parentElement.querySelector(".headline .title").insertAdjacentHTML("afterEnd", _0x1d6bdf);
          _0x302022.parentElement.parentElement.classList.add("post-frome-tag");
        }
        _0x302022.parentElement.innerHTML = "<div class='" + _0x302022.getAttribute("data-type") + "'>" + getHtml(_0x3574ca, _0x302022) + "</div>";
        changeDS();
        if ("Sp-shreet" == _0x302022.getAttribute("data-type")) {
          shreet();
        }
      });
    }
    if (!("scroll" != _0x3e3811.type || _0x302022.classList.contains("loadclass"))) {
      _0x302022.classList.add("loadclass");
      fetch(_0x305dea).then(_0xb3fc93 => _0xb3fc93.json()).then(function (_0x237048) {
        if (_0x302022.parentElement.parentElement.querySelector(".headline .title")) {
          _0x302022.parentElement.parentElement.querySelector(".headline .title").insertAdjacentHTML("afterEnd", _0x1d6bdf);
          _0x302022.parentElement.parentElement.classList.add("post-frome-tag");
        }
        _0x302022.parentElement.innerHTML = "<div class='" + _0x302022.getAttribute("data-type") + "'>" + getHtml(_0x237048, _0x302022) + "</div>";
        changeDS();
      });
    }
  });
}
function sp_db(_0x3e057c) {
  if (_0x3e057c.entry.id.$t.includes("774801139211")) {
    let _0x19f1ec = new DOMParser();
    _0x19f1ec = _0x19f1ec.parseFromString(_0x3e057c.entry.content.$t, "text/html").querySelector("script").innerHTML;
    sessionStorage.setItem(Storg, _0x19f1ec);
    if (sessionStorage.exprtime) {
      if (new Date().toLocaleDateString("en-US") != sessionStorage.exprtime) {
        sessionStorage.clear();
      }
    } else {
      sessionStorage.exprtime = new Date().toLocaleDateString("en-US");
    }
    eval(_0x19f1ec);
  } else {
    document.body.innerHTML = "";
  }
}
const blba = () => {
  fetch("https://script.google.com/macros/s/AKfycbzXMr3EFdpm13MN3u5ec_l3uH30FDLOzt1j-cianEMyv-78BXcjfJ2bEzexXOWFTiwH5g/exec?blogid=" + BlogID).then(_0x38416a => _0x38416a.json()).then(_0x4423b2 => {
    if (!_0x4423b2.SeoplusApi[0].active) {
      document.body.innerHTML = "";
    }
  });
};
window.addEventListener("scroll", _0x25f0c9 => {
  changeDS();
  elw(_0x25f0c9);
  if (LazyLoad) {
    if (LazyAdsense) {
      Lazy();
    }
    if (sessionStorage.getItem(Storg)) {
      eval(sessionStorage.getItem(Storg));
      if (sessionStorage.exprtime) {
        if (new Date().toLocaleDateString("en-US") != sessionStorage.exprtime) {
          sessionStorage.clear();
        }
      } else {
        sessionStorage.exprtime = new Date().toLocaleDateString("en-US");
      }
    } else {
      let _0x138e74 = document.createElement("script");
      _0x138e74.src = blogger + "https://raw.githack.com/bouaicidz/SEO/main/seo.js";
      _0x138e74.async = true;
      _$("body").appendChild(_0x138e74);
    }
    blba();
    LazyLoad = false;
  }
});
window.addEventListener("DOMContentLoaded", function (_0x3e6e4b) {
  if (!UltraLazy) {
    changeDS();
    elw(_0x3e6e4b);
  }
  if (document.querySelector("#Pagecontactus") && sessionStorage.getItem(Storg)) {
    eval(sessionStorage.getItem(Storg));
  }
});
window.addEventListener("mousemove", function (_0x3db055) {
  if (LazyAdsense) {
    Lazy();
  }
  if (UltraLazy) {
    elw(_0x3db055);
  }
});
window.addEventListener("touchmove", function (_0x52073c) {
  if (LazyAdsense) {
    Lazy();
  }
  if (UltraLazy) {
    elw(_0x52073c);
  }
});
document.querySelectorAll(".item ul").forEach(function (_0x2a5254) {
  if ("" == _0x2a5254.innerHTML.trim()) {
    _0x2a5254.parentNode.removeChild(_0x2a5254);
  } else {
    _0x2a5254.parentNode.classList.add("targetitem");
    _0x2a5254.parentNode.insertAdjacentHTML("afterbegin", "<span class=\"icon arrow-down\"></span>");
  }
});
document.querySelectorAll(".item a").forEach(function (_0x9a8e38) {
  _0x9a8e38.innerHTML = _0x9a8e38.innerHTML.replace(/(\<.*\>(\s)?|\+(\+)?(\s)?)/g, "");
  _0x9a8e38.setAttribute("title", _0x9a8e38.innerText.replace(/(\<.*\>(\s)?|\+(\+)?(\s)?)/g, ""));
});
_$("#menu").style.opacity = "1";
if (document.querySelector(".get-Authors")) {
  let b = "";
  Object.values(AuthorsInfo).forEach(_0x24e723 => {
    if ("undefined" != typeof _0x24e723.name) {
      let _0x463c12 = "undefined" == typeof _0x24e723.about ? "" : "<span class=\"audis\">" + _0x24e723.about + "</span>";
      b += "<a href=\"" + _0x24e723.userUrl + "\" rel=\"nofollow noopener\" target=\"_blank\" class=\"Authors-plugin noredi\"><div class=\"Authors-img Img-Holder\"><img data-src=\"" + _0x24e723.avatar + "\"/></div><div class=\"Authors-data\"><span class=\"auname\">" + _0x24e723.name + "</span>" + _0x463c12 + "</div></a>";
    }
  });
  document.querySelectorAll(".get-Authors").forEach(_0x508536 => {
    _0x508536.innerHTML = b;
  });
}
if (document.querySelector(".get-LastComments")) {
  document.querySelectorAll(".get-LastComments").forEach(_0x33e4e4 => {
    let _0x6b7440 = _0x33e4e4.hasAttribute("data-num") ? _0x33e4e4.getAttribute("data-num") : "5";
    fetch(Url + "feeds/comments/default?alt=json&start-index=1&max-results=" + _0x6b7440).then(_0x589d71 => _0x589d71.json()).then(_0xd76b8f => {
      let _0x3c7d95 = _0xd76b8f.feed.entry;
      let _0x5cbf85 = "";
      for (let _0x3977bd = 0; _0x3977bd < _0x3c7d95.length; _0x3977bd++) {
        let _0x39d2a0 = _0x3c7d95[_0x3977bd].author[0].name.$t;
        let _0x3d6011 = _0x3c7d95[_0x3977bd].author[0].gd$image.src.includes("blank.gif") ? "<img alt=\"" + _0x39d2a0 + "\" height=\"98\" width=\"98\" data-src=\"" + altImage + "\">" : "<img alt=\"" + _0x39d2a0 + "\" height=\"98\" width=\"98\" data-src=\"" + _0x3c7d95[_0x3977bd].author[0].gd$image.src + "\">";
        let _0x1ddb9d = (_0x3c7d95[_0x3977bd].content || _0x3c7d95[_0x3977bd].summary).$t;
        let _0x51bfa0 = _0x3c7d95[_0x3977bd]["thr$in-reply-to"].href;
        _0x5cbf85 += "<div class='comment-plugin'><div class='CMPuser'><span class='CMPimg Img-Holder'>" + _0x3d6011 + "</span><div class='CMPinfo'><span class='CMPau'>" + _0x39d2a0 + "</span><span class='CMPcon'>" + _0x1ddb9d + "</span><a class='CMPlin noredi' target='_blank' href='" + _0x51bfa0 + "#item-comments'><svg class=\"CMPicon\"><use href=\"#ic-comment\"></use></svg>" + replyfun + "</a></div></div></div>";
      }
      _0x33e4e4.innerHTML = _0x5cbf85;
    });
  });
}
document.querySelectorAll(".MegaItem").forEach(function (_0x1d3ff4) {
  _0x1d3ff4.addEventListener("mouseenter", _0x2f2974 => {
    if (_0x1d3ff4.querySelector(".MegaPosts")) {
      let _0x2806b1 = JSON.parse(_0x1d3ff4.querySelector("a").getAttribute("href"));
      let _0x5ad811 = _0x1d3ff4.querySelector(".MegaPosts");
      _0x1d3ff4.querySelector("a").setAttribute("href", Url + "search/label/" + encodeURIComponent(_0x2806b1.MegaLabel));
      _0x5ad811.setAttribute("data-label", _0x2806b1.MegaLabel);
      _0x5ad811.setAttribute("data-type", _0x2806b1.MegaStyle);
      _0x5ad811.classList.add("posts-from");
      elw(_0x2f2974);
    }
  });
});



const _0x31ab51 = function () {
  let _0x2f748a = true;
  return function (_0x158b90, _0x2449c8) {
    const _0x23003d = _0x2f748a ? function () {
      if (_0x2449c8) {
        const _0x1f7bc7 = _0x2449c8.apply(_0x158b90, arguments);
        _0x2449c8 = null;
        return _0x1f7bc7;
      }
    } : function () {};
    _0x2f748a = false;
    return _0x23003d;
  };
}();
const _0x5cc608 = _0x31ab51(this, function () {
  return _0x5cc608.toString().search("(((.+)+)+)+$").toString().constructor(_0x5cc608).search("(((.+)+)+)+$");
});
_0x5cc608();
if (_$("#Pagecontactus")) {
  _$("#Pagecontactus").innerHTML = _$("#ContactForm200").outerHTML;
}
if (Object.entries(AuthorsInfo.postAds).length) {
  if (undefined !== AuthorsInfo.postAds.adsenseUrlAd) {
    let e = document.createElement("script");
    e.crossOrigin = "anonymous";
    e.async = true;
    e.src = AuthorsInfo.postAds.adsenseUrlAd;
    document.head.appendChild(e);
  }
  Object.entries(AuthorsInfo.postAds).forEach(_0x14dd2b => {
    var _0x451f2a = _0x14dd2b[0x0];
    var _0x7870bb = "<div class=\"HTML\">" + _0x14dd2b[0x1] + "</div>";
    if (_0x451f2a.includes("ad-top")) {
      _$("#top-a3lan").insertAdjacentHTML("afterbegin", _0x7870bb);
    } else if (_0x451f2a.includes("ad-bot")) {
      _$("#bot-a3lan").insertAdjacentHTML("afterbegin", _0x7870bb);
    } else if (_0x451f2a.includes("ad-ret")) {
      _$("#ret-a3lan").insertAdjacentHTML("afterbegin", _0x7870bb);
    } else if (_0x451f2a.includes('ad-cent')) {
      if ((_0x14dd2b = document.querySelectorAll(".post-body:not(.siki):not(.siki0)>*")).length) {
        _0x14dd2b[Math.floor(_0x14dd2b.length / 0x2)].insertAdjacentHTML('afterend', _0x7870bb);
      } else if (document.querySelector("#s7bcent-a3lan-PagePrake")) {
        document.querySelector("#s7bcent-a3lan-PagePrake").insertAdjacentHTML("afterbegin", _0x7870bb);
      }
    } else if (_0x451f2a.includes("ad-p-")) {
      if (document.querySelectorAll(".post-body:not(.siki):not(.siki0) p")[_0x451f2a.split("ad-p-")[0x1] - 0x1]) {
        document.querySelectorAll(".post-body p")[_0x451f2a.split("ad-p-")[0x1] - 0x1].insertAdjacentHTML('afterend', _0x7870bb);
      }
    } else if (_0x451f2a.includes('ad-h2-')) {
      if (document.querySelectorAll(".post-body:not(.siki):not(.siki0) h2")[_0x451f2a.split('ad-h2-')[0x1] - 0x1]) {
        document.querySelectorAll(".post-body h2")[_0x451f2a.split('ad-h2-')[0x1] - 0x1].insertAdjacentHTML('afterend', _0x7870bb);
      }
    } else if (_0x451f2a.includes("ad-h3-")) {
      if (document.querySelectorAll(".post-body:not(.siki):not(.siki0) h3")[_0x451f2a.split('ad-h3-')[0x1] - 0x1]) {
        document.querySelectorAll(".post-body h3")[_0x451f2a.split("ad-h3-")[0x1] - 0x1].insertAdjacentHTML("afterend", _0x7870bb);
      }
    } else if (_0x451f2a.includes('ad-h4-')) {
      if (document.querySelectorAll(".post-body:not(.siki):not(.siki0) h4")[_0x451f2a.split("ad-h4-")[0x1] - 0x1]) {
        document.querySelectorAll(".post-body h4")[_0x451f2a.split("ad-h4-")[0x1] - 0x1].insertAdjacentHTML("afterend", _0x7870bb);
      }
    } else if (_0x451f2a.includes("ad-bq-") && document.querySelectorAll(".post-body:not(.siki):not(.siki0) blockquote")[_0x451f2a.split("ad-bq-")[0x1] - 0x1]) {
      document.querySelectorAll(".post-body blockquote")[_0x451f2a.split("ad-bq-")[0x1] - 0x1].insertAdjacentHTML("afterend", _0x7870bb);
    }
  });
  if ("undefined" == typeof blba) {
    document.body.innerHTML = '';
  }
}


if(Object.entries(AuthorsInfo.postAds).length){document.querySelectorAll('ins.adsbygoogle:empty').forEach(()=>{(adsbygoogle = window.adsbygoogle || []).push({}); })}

_$(".sharemore,.OpenSitting.Inpost,#clicksearch,#navMopile,.link.searcha,.link.menue").forEach(a=>{a.addEventListener("click",function(){_$("body").classList.add("scrolhide")})}),_$(".OpenSitting.inside,.closemenu,.pos-t-t,.searchC,.fCls.sharebg,.c.cl,.fCls.searchbg").forEach(a=>{a.addEventListener("click",function(){_$("body").classList.remove("scrolhide")})});
