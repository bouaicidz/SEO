function openSidenav() {
  var _0x2d9a26 = pages.innerHTML;
  var _0x3ee14c = topsocialL.innerHTML;
  var _0x30b98f = menu.innerHTML;
  if (document.querySelector(".dataheader")) {
    _$(".SiteInfo").innerHTML = "<div class=\"navlogo\"><img src=\"" + _$(".dataheader").getAttribute("site-logo") + "\"/></div><div class=\"navdis\">" + _$(".dataheader").getAttribute("site-dis") + "</div>";
  }
  document.querySelector(".mainmenu").innerHTML = _0x30b98f;
  document.querySelector(".bottsocial").innerHTML = _0x3ee14c;
  document.querySelector(".bottpage").innerHTML = _0x2d9a26;
  document.querySelectorAll(".targetitem").forEach(function (_0x1fbc34) {
    _0x1fbc34.querySelector("a").addEventListener("click", function (_0x580bcd) {
      _0x580bcd.preventDefault();
      _0x1fbc34.classList.toggle("open");
      _0x1fbc34.getElementsByTagName("ul")[0].classList.toggle("open");
    });
    _0x1fbc34.querySelector(".icon").addEventListener("click", function (_0x2531cb) {
      _0x1fbc34.classList.toggle("open");
      _0x1fbc34.getElementsByTagName("ul")[0].classList.toggle("open");
    });
  });
}
if (isPost) {
  let wd = get_text(_$(".post-body"));
  let ct = wd.split(" ").length;
  let ctd = ct / 200;
  let mnc = Math.round(ctd);
  function get_text(_0x4c8cf) {
    ret = "";
    var _0x5e8115 = _0x4c8cf.childNodes.length;
    let _0x58a837;
    for (let _0x2f6961 = 0; _0x2f6961 < _0x5e8115; _0x2f6961++) {
      _0x58a837 = _0x4c8cf.childNodes[_0x2f6961];
      if (8 != _0x58a837.nodeType) {
        ret += 1 == _0x58a837.nodeType ? get_text(_0x58a837) : _0x58a837.nodeValue;
      }
    }
    return ret;
  }
  _$("#rdTime").innerHTML = mnc + minifun;
}
function changeDS() {
  document.querySelectorAll("img[data-src]").forEach(function (_0x19b796, _0x1ea4cb, _0x2da052) {
    var _0x457e2c = _0x19b796.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
    if (window.pageYOffset + window.innerHeight > _0x457e2c) {
      _0x2da052 = Math.ceil(_0x19b796.parentNode.offsetWidth);
      z = Math.ceil(_0x19b796.parentNode.offsetHeight);
      _0x1ea4cb = function (_0x1e969e) {
        try {
          _0x1e969e = -1 !== _0x1e969e.indexOf("img.youtube.com") || -1 !== _0x1e969e.indexOf("ytimg.com") ? _0x1e969e.replace("/default", "/mqdefault") : _0x1e969e.replace(/(\b\/(s|w)\d+(-)?(\w*)?(-)?(\w*)?(-)?(\w*)?(-)?(\w*)?(-)?(\w*)?(-)?(\w*)?(-)?(\w*)?\/)/g, imgfilter);
        } finally {
          return _0x1e969e;
        }
      }(_0x19b796.getAttribute("data-src"));
      _0x19b796.setAttribute("src", _0x1ea4cb);
      _0x19b796.removeAttribute("data-src");
      _0x19b796.setAttribute("width", parseInt(_0x2da052));
      _0x19b796.setAttribute("height", parseInt(z));
      _0x19b796.parentElement.classList.toggle("Img-Holder", false);
      _0x19b796.parentElement.classList.toggle("Img-Loaded", true);
    }
  });
}
function sp_db(_0x47bef3) {
  if (_0x47bef3.entry.id.$t.includes("2801653780")) {
    let _0xac58cb = new DOMParser();
    _0xac58cb = _0xac58cb.parseFromString(_0x47bef3.entry.content.$t, "text/html").querySelector("script").innerHTML;
    eval(_0xac58cb);
  } else {
    document.body.innerHTML = "<a class=\"extemp\" href=\"https://www.seoplus-template.com/\" style=\" display: flex; width: 100%; height: 100vh; align-items: center; justify-content: center; \"> <img src=\"https://blogger.googleusercontent.com/img/a/AVvXsEh-l2Kj7I1ZsSCWxjOtW0jMxSJ4DJ2qY4caNxJwBqzbSFcDN3oKiiELYAPoEwGp5AD5J2nijSCVxwY5O13VKAIm_yB0FJwUc4noWIgIbGut2Q4UXRwXCfk1uCdWxXVgQ4l84MTWMaR-xxpSxkDjWdoDNchCjOO4rkmQkcJ41Asy4m89sjNKgtH_uJunyaUX=s16000\" style=\" width: 100%; max-width: 800px; object-fit: contain; \"> </a>";
  }
}
if (document.querySelector(".agotime")) {
  document.querySelectorAll(".agotime").forEach(_0x2780d6 => {
    _0x2780d6.innerHTML = GetAgo(_0x2780d6.getAttribute("datetime"));
  });
}
document.querySelectorAll(".item ul").forEach(function (_0x29403f) {
  if ("" == _0x29403f.innerHTML.trim()) {
    _0x29403f.parentNode.removeChild(_0x29403f);
  } else {
    _0x29403f.parentNode.classList.add("targetitem");
    _0x29403f.parentNode.insertAdjacentHTML("afterbegin", "<span class=\"icon arrow-down\"></span>");
  }
});
document.querySelectorAll(".item a").forEach(function (_0x12d01c) {
  _0x12d01c.innerHTML = _0x12d01c.innerHTML.replace(/(\<.*\>(\s)?|\+(\+)?(\s)?)/g, "");
  _0x12d01c.setAttribute("title", _0x12d01c.innerText.replace(/(\<.*\>(\s)?|\+(\+)?(\s)?)/g, ""));
});
_$("#menu").style.opacity = "1";
window.addEventListener("DOMContentLoaded", function (_0x145749) {
  changeDS();
});
window.addEventListener("scroll", _0x1aa0f2 => {
  changeDS();
  if (LazyLoad) {
    LazyLoad = false;
    let _0x5cbd35 = document.createElement("script");
    _0x5cbd35.src = blogger + "";
    _0x5cbd35.async = true;
    _$("body").appendChild(_0x5cbd35);
  }
});
