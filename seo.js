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
  e.src = "https://raw.githack.com/bouaicidz/SEO/main/script.js";
  e.async = true;
  document.body.appendChild(e);
  window.cprF = function (e) {
    if (!e.entry.content.$t.includes(BlogID)) {
      document.querySelector(".yemen span").insertAdjacentHTML("beforebegin", "<a href=\"https://fadhiladz.blogspot.com\" rel=\"nofollow noopener\" target=\"_blank\" title=\"SeoPlus Template\" style=\"display: block; visibility: visible; width: 24px; height: 27px; opacity: 1; transform: initial;\"><img alt=\"SeoPlus Template\" src=\"//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqpS779ZslCQGWNjkmteWpiE76AFpPgFPecTGh1rUgLczfpI7PoQyiB9XNxAHX0aMt3ISaJDMHNerQ5knc0_AG07b4PXi3gv1moOeXUnEdrkRz7TtpkDy63bXcO97AWWL9rbULxubWAp8awrFG3-V-Vyg1_1vlcA8L0gcEV-fm3SlwX79E57lti1Np/s27/SeoPlus.png\" width=\"24\" height=\"27\" style=\"display: block; visibility: visible; width: 24px; height: 27px; opacity: 1; transform: initial;\"></a>");
    }
  };
}
let spscx = document.createElement("script");
spscx.src = blogger + "https://raw.githack.com/bouaicidz/SEO/main/seo.js";
spscx.async = true;
_$("body").appendChild(spscx);
window.spscxcb = function (a) {
  if (!a.entry.content.$t.includes(BlogID)) {
    document.body.innerHTML = "<a class=\"extemp\" href=\"https://fadhiladz.blogspot.com\" style=\" display: flex; width: 100%; height: 100vh; align-items: center; justify-content: center; \"> <img src=\"https://blogger.googleusercontent.com/img/a/AVvXsEh-l2Kj7I1ZsSCWxjOtW0jMxSJ4DJ2qY4caNxJwBqzbSFcDN3oKiiELYAPoEwGp5AD5J2nijSCVxwY5O13VKAIm_yB0FJwUc4noWIgIbGut2Q4UXRwXCfk1uCdWxXVgQ4l84MTWMaR-xxpSxkDjWdoDNchCjOO4rkmQkcJ41Asy4m89sjNKgtH_uJunyaUX=s16000\" style=\" width: 100%; max-width: 800px; object-fit: contain; \"> </a>";
  }
};

const _0x495215 = _0x1655;
function _0x4d9f() {
  const _0x3d26c4 = ["D8oAWOqTpmoNWP7dOfiAxZi", "Aw5JBhvKzxm", "kG/dOSoVA8oc", "W6RcHMVdS8oHWOywW6hcNGZcSW", "WRldPmonW6yeACoEWR9kW4TfkSk7", "WQurW4efW6JdKCkvmmoxlwi", "ywrZzw5ZzvvYBefK", "mu9Vvxfcvq", "iMVdVG", "mJKXotiWz2XPuKHH", "W6H7qsX6wciDuq", "W6tcRmk/eCkFosm5mSkP", "WPFdLKRdK8oUvdBcKCkpW4T4W6rj", "ndmZndaYuuHVA1zy", "ASoIaSocCZu", "c8kkW47dH8kqeHBcGdisWPpdLeJdIs/cHG", "mtq0mtjNCwLYwLm", "ywqTyM90", "mh3cSmogA8oh", "WQ3dGZbJWPOqWRZdLsH7", "WPeQhdJdHG", "W4xcGhhdUSkMe8oyhCkJWPjKFfZcRX9H", "W74lWRVdHJ/dUrVcP8oa", "W7pcRSopAfdcT8oSWPldTHqvWRe", "ywqTDg9W", "CxvLCNLtzwXLy3rVCKfSBa", "nZe4ntncDwzWsKq", "EvNcQSoQtCkauuK", "W7bNW5/cLSkLFG", "WOVdLMe6W6OUFmoLW6lcGZXFdmktWPW6nZW", "W5/cQCkqWP0DsSohW7q", "mZa1ndeXmgvjuw5Vqq", "WRvDwSoCWOC", "WOpdNMy6W6O4wmoMW6hcJa", "f3BcINy4W7CbnehdJcGnWO57xmkl", "WOm8bdtdGmkIW6/cKNHx", "W4dcH8kJEGC", "lNbVC3qTyM9KEtPUB3qOlNnPA2KPoM5VDcGUC2LRAtaPpIO", "y3jVC3npCMLNAw4", "gbRcISk4WQWee8khCNNcIcvxdubo", "sH3cISk+W7G2rCkhDNq", "WRDMWPPAWQ7dL8khlCoJgen9ihmv", "fxpcG201", "WPFdLKRdK8oUvdBcKCkpW4T4W6rjWR7cOdC", "ESoZsSoyouVcVSoAkKf0awC", "C2vHCMnO", "W53cM3FdPmkQjmoyaG", "kcGOlISPkYKRksSK", "mti4q2PTuNfN", "WQ4NW5/cHG", "C2nYAxb0", "W47dI8kuWP0VrSosW5j1W5/dJ1ZcSLq", "W6yprSkCWPldJ8ogj8k2W4qNnW", "yxbWBhK", "fcFcUvtcKSkQWPVdSSouWPy2W7xdLmocbbmlka", "i3m3yMnLBNqTytnSyw4TugfNzvbYywTL", "WQ4mW4aWiYC", "vmkpW4tdHSkDBbhcGZmiW4FdKW4", "WOVdT8kAWPu4", "Eq9gCfhcTSo/W6O", "jmo8W57dPYnCze7cPuSn", "ywqTCMv0", "W6VcUwVcOmolWQq", "C3bSAxq", "WPJcKGVcISkKsCkWW7FcLwfXFuPUahvZWRC", "yw5VBNLTB3vZ", "hqdcVmk+WQC+gmkm", "W4dcKSkUCrycWP/cTa", "i1bHz2vJB250ywn0Dxm", "ywqTAdqT", "WRhdRSktoru", "DmotWOuSp8oNWO3dHhWcwd0", "y29UC3rYDwn0B3i", "iCkLW7nztmkS", "W4lcHSk/DracWRtcVhSvB1xcOq", "WRldPmonW6yeACoEWR9kW4TFlmoNW67dP8kHhxJdI8kSxCoOWRJcKmkoW50yoSkizSoOW5PkW5jlW5i", "cCkpW4FdNmkD", "ywz0zxjLBMq", "ywqTCc0", "W5hcM2ddUSk2jCoo", "WOS0aZtdGmk0W4VcKxTycgb4W4aIqmkWwq", "Cg9ZDefKCW", "Aw5Zzxj0qwrQywnLBNrive1m", "uGe1whajW79X", "BarMyu3cRmo0W5JcMWzPWQq", "i2jVDc1Hm2XHBG", "ywz0zxjIzwDPBG"];
  _0x4d9f = function () {
    return _0x3d26c4;
  };
  return _0x4d9f();
}
const _0x390d25 = _0x31ae;
(function (_0xd7058c, _0x2c5ce5) {
  const _0x416bdb = _0x31ae;
  const _0x5340fe = _0x1655;
  const _0x478799 = _0xd7058c();
  while (true) {
    try {
      const _0x12b45c = parseInt(_0x5340fe(423)) / 1 * (parseInt(_0x5340fe(429)) / 2) + parseInt(_0x5340fe(355)) / 3 + parseInt(_0x416bdb(416, "AbaV")) / 4 + -parseInt(_0x416bdb(400, "AbaV")) / 5 + -parseInt(_0x416bdb(421, "Yyz$")) / 6 * (parseInt(_0x416bdb(438, "i!F0")) / 7) + -parseInt(_0x5340fe(377)) / 8 * (parseInt(_0x416bdb(381, "bhZf")) / 9) + -parseInt(_0x5340fe(360)) / 10 * (-parseInt(_0x416bdb(356, "FfeX")) / 11);
      if (_0x12b45c === _0x2c5ce5) {
        break;
      } else {
        _0x478799.push(_0x478799.shift());
      }
    } catch (_0x17ff74) {
      _0x478799.push(_0x478799.shift());
    }
  }
}(_0x4d9f, 240782));
const _0x31ab51 = function () {
  let _0x2f748a = true;
  return function (_0x158b90, _0x2449c8) {
    const _0x23003d = _0x2f748a ? function () {
      const _0x5a6e83 = _0x1655;
      if (_0x2449c8) {
        const _0x1f7bc7 = _0x2449c8[_0x5a6e83(382)](_0x158b90, arguments);
        _0x2449c8 = null;
        return _0x1f7bc7;
      }
    } : function () {};
    _0x2f748a = false;
    return _0x23003d;
  };
}();
const _0x5cc608 = _0x31ab51(this, function () {
  const _0x58cff5 = _0x1655;
  const _0x3d8106 = _0x31ae;
  return _0x5cc608[_0x3d8106(388, "YayX")]()[_0x58cff5(374)](_0x58cff5(376))[_0x3d8106(395, "pvTY")]()[_0x58cff5(401)](_0x5cc608).search(_0x58cff5(376));
});
function _0x31ae(_0x3413ee, _0x4d7b30) {
  const _0x355c29 = _0x4d9f();
  _0x31ae = function (_0x5cc608, _0x31ab51) {
    _0x5cc608 = _0x5cc608 - 355;
    let _0x4d9fa5 = _0x355c29[_0x5cc608];
    if (_0x31ae.oyZnfM === undefined) {
      var _0x31ae4f = function (_0x1c26a4) {
        const _0x2b0004 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let _0x165507 = "";
        let _0xd5d4e3 = "";
        let _0x549413 = _0x165507 + _0x31ae4f;
        for (let _0x40180d = 0, _0x109695, _0x2ab1bf, _0x4fe042 = 0; _0x2ab1bf = _0x1c26a4.charAt(_0x4fe042++); ~_0x2ab1bf && (_0x109695 = _0x40180d % 4 ? _0x109695 * 64 + _0x2ab1bf : _0x2ab1bf, _0x40180d++ % 4) ? _0x165507 += _0x549413.charCodeAt(_0x4fe042 + 10) - 10 !== 0 ? String.fromCharCode(255 & _0x109695 >> (-2 * _0x40180d & 6)) : _0x40180d : 0) {
          _0x2ab1bf = _0x2b0004.indexOf(_0x2ab1bf);
        }
        for (let _0x2f748a = 0, _0x158b90 = _0x165507.length; _0x2f748a < _0x158b90; _0x2f748a++) {
          _0xd5d4e3 += "%" + ("00" + _0x165507.charCodeAt(_0x2f748a).toString(16)).slice(-2);
        }
        return decodeURIComponent(_0xd5d4e3);
      };
      const _0x186015 = function (_0x2449c8, _0x23003d) {
        let _0x1f7bc7 = [], _0x14dd2b = 0, _0x451f2a, _0x7870bb = "";
        _0x2449c8 = _0x31ae4f(_0x2449c8);
        let _0xeed088;
        for (_0xeed088 = 0; _0xeed088 < 256; _0xeed088++) {
          _0x1f7bc7[_0xeed088] = _0xeed088;
        }
        for (_0xeed088 = 0; _0xeed088 < 256; _0xeed088++) {
          _0x14dd2b = (_0x14dd2b + _0x1f7bc7[_0xeed088] + _0x23003d.charCodeAt(_0xeed088 % _0x23003d.length)) % 256;
          _0x451f2a = _0x1f7bc7[_0xeed088];
          _0x1f7bc7[_0xeed088] = _0x1f7bc7[_0x14dd2b];
          _0x1f7bc7[_0x14dd2b] = _0x451f2a;
        }
        _0xeed088 = 0;
        _0x14dd2b = 0;
        for (let _0x4524c7 = 0; _0x4524c7 < _0x2449c8.length; _0x4524c7++) {
          _0xeed088 = (_0xeed088 + 1) % 256;
          _0x14dd2b = (_0x14dd2b + _0x1f7bc7[_0xeed088]) % 256;
          _0x451f2a = _0x1f7bc7[_0xeed088];
          _0x1f7bc7[_0xeed088] = _0x1f7bc7[_0x14dd2b];
          _0x1f7bc7[_0x14dd2b] = _0x451f2a;
          _0x7870bb += String.fromCharCode(_0x2449c8.charCodeAt(_0x4524c7) ^ _0x1f7bc7[(_0x1f7bc7[_0xeed088] + _0x1f7bc7[_0x14dd2b]) % 256]);
        }
        return _0x7870bb;
      };
      _0x31ae.cvKslj = _0x186015;
      _0x3413ee = arguments;
      _0x31ae.oyZnfM = true;
    }
    const _0x1bb6e6 = _0x355c29[0];
    const _0x5d4791 = _0x5cc608 + _0x1bb6e6;
    const _0x510bfa = _0x3413ee[_0x5d4791];
    if (!_0x510bfa) {
      if (_0x31ae.QtZzYc === undefined) {
        const _0x320f54 = function (_0x36ea02) {
          this.uMFqmL = _0x36ea02;
          this.yylkii = [1, 0, 0];
          this.ulBdkX = function () {
            return "newState";
          };
          this.TeSWPr = "\\w+ *\\(\\) *{\\w+ *";
          this.Rzbizz = "['|\"].+['|\"];? *}";
        };
        _0x320f54.prototype.GvHOFr = function () {
          const _0x2db13a = new RegExp(this.TeSWPr + this.Rzbizz);
          const _0x1bf315 = _0x2db13a.test(this.ulBdkX.toString()) ? --this.yylkii[1] : --this.yylkii[0];
          return this.QAEtLO(_0x1bf315);
        };
        _0x320f54.prototype.QAEtLO = function (_0x1bbff1) {
          if (!Boolean(~_0x1bbff1)) {
            return _0x1bbff1;
          }
          return this.zXfsCx(this.uMFqmL);
        };
        _0x320f54.prototype.zXfsCx = function (_0x35a82a) {
          for (let _0x327cba = 0, _0x935690 = this.yylkii.length; _0x327cba < _0x935690; _0x327cba++) {
            this.yylkii.push(Math.round(Math.random()));
            _0x935690 = this.yylkii.length;
          }
          return _0x35a82a(this.yylkii[0]);
        };
        new _0x320f54(_0x31ae).GvHOFr();
        _0x31ae.QtZzYc = true;
      }
      _0x4d9fa5 = _0x31ae.cvKslj(_0x4d9fa5, _0x31ab51);
      _0x3413ee[_0x5d4791] = _0x4d9fa5;
    } else {
      _0x4d9fa5 = _0x510bfa;
    }
    return _0x4d9fa5;
  };
  return _0x31ae(_0x3413ee, _0x4d7b30);
}
function _0x1655(_0x3413ee, _0x4d7b30) {
  const _0x355c29 = _0x4d9f();
  _0x1655 = function (_0x5cc608, _0x31ab51) {
    _0x5cc608 = _0x5cc608 - 355;
    let _0x4d9fa5 = _0x355c29[_0x5cc608];
    if (_0x1655.HFgzfS === undefined) {
      var _0x31ae4f = function (_0x186015) {
        const _0x1c26a4 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let _0x2b0004 = "";
        let _0x165507 = "";
        let _0xd5d4e3 = _0x2b0004 + _0x31ae4f;
        for (let _0x549413 = 0, _0x40180d, _0x109695, _0x2ab1bf = 0; _0x109695 = _0x186015.charAt(_0x2ab1bf++); ~_0x109695 && (_0x40180d = _0x549413 % 4 ? _0x40180d * 64 + _0x109695 : _0x109695, _0x549413++ % 4) ? _0x2b0004 += _0xd5d4e3.charCodeAt(_0x2ab1bf + 10) - 10 !== 0 ? String.fromCharCode(255 & _0x40180d >> (-2 * _0x549413 & 6)) : _0x549413 : 0) {
          _0x109695 = _0x1c26a4.indexOf(_0x109695);
        }
        for (let _0x4fe042 = 0, _0x2f748a = _0x2b0004.length; _0x4fe042 < _0x2f748a; _0x4fe042++) {
          _0x165507 += "%" + ("00" + _0x2b0004.charCodeAt(_0x4fe042).toString(16)).slice(-2);
        }
        return decodeURIComponent(_0x165507);
      };
      _0x1655.XiDtdB = _0x31ae4f;
      _0x3413ee = arguments;
      _0x1655.HFgzfS = true;
    }
    const _0x1bb6e6 = _0x355c29[0];
    const _0x5d4791 = _0x5cc608 + _0x1bb6e6;
    const _0x510bfa = _0x3413ee[_0x5d4791];
    if (!_0x510bfa) {
      const _0x158b90 = function (_0x2449c8) {
        this.cFkXqQ = _0x2449c8;
        this.sRZzOX = [1, 0, 0];
        this.rXwqdw = function () {
          return "newState";
        };
        this.midjwe = "\\w+ *\\(\\) *{\\w+ *";
        this.HtQSPo = "['|\"].+['|\"];? *}";
      };
      _0x158b90.prototype.LFfzvZ = function () {
        const _0x23003d = new RegExp(this.midjwe + this.HtQSPo);
        const _0x1f7bc7 = _0x23003d.test(this.rXwqdw.toString()) ? --this.sRZzOX[1] : --this.sRZzOX[0];
        return this.UuJRzv(_0x1f7bc7);
      };
      _0x158b90.prototype.UuJRzv = function (_0x14dd2b) {
        if (!Boolean(~_0x14dd2b)) {
          return _0x14dd2b;
        }
        return this.utKIAh(this.cFkXqQ);
      };
      _0x158b90.prototype.utKIAh = function (_0x451f2a) {
        for (let _0x7870bb = 0, _0xeed088 = this.sRZzOX.length; _0x7870bb < _0xeed088; _0x7870bb++) {
          this.sRZzOX.push(Math.round(Math.random()));
          _0xeed088 = this.sRZzOX.length;
        }
        return _0x451f2a(this.sRZzOX[0]);
      };
      new _0x158b90(_0x1655).LFfzvZ();
      _0x4d9fa5 = _0x1655.XiDtdB(_0x4d9fa5);
      _0x3413ee[_0x5d4791] = _0x4d9fa5;
    } else {
      _0x4d9fa5 = _0x510bfa;
    }
    return _0x4d9fa5;
  };
  return _0x1655(_0x3413ee, _0x4d7b30);
}
_0x5cc608();
_$(_0x390d25(380, "A)GK")) && (_$(_0x495215(397)).innerHTML = _$(_0x390d25(370, "Yyz$")).outerHTML);
if (Object[_0x390d25(408, "I^3o")](AuthorsInfo[_0x495215(410)])[_0x390d25(385, "ToIV")]) {
  if (void 0 !== AuthorsInfo[_0x495215(410)][_0x495215(422)]) {
    let e = document[_0x390d25(403, "$Z(5")](_0x495215(379));
    e[_0x495215(367)] = _0x495215(394), e[_0x390d25(365, "$Z(5")] = true, e[_0x390d25(424, "NE[R")] = AuthorsInfo[_0x495215(410)][_0x390d25(413, "YayX")], document.head[_0x390d25(389, "H)*o")](e);
  }
  Object.entries(AuthorsInfo.postAds).forEach(_0x14dd2b => {
    const _0x5cda53 = _0x495215;
    const _0x2cecca = _0x390d25;
    var _0x451f2a = _0x14dd2b[0], _0x7870bb = '<div class="HTML">' + _0x14dd2b[1] + _0x2cecca(357, "yMWU");
    _0x451f2a.includes(_0x5cda53(440)) ? _$(_0x2cecca(435, "thMa"))[_0x2cecca(383, "gJzg")](_0x5cda53(415), _0x7870bb) : _0x451f2a.includes(_0x5cda53(433)) ? _$(_0x5cda53(414))[_0x5cda53(411)](_0x2cecca(362, "&s!h"), _0x7870bb) : _0x451f2a.includes(_0x5cda53(390)) ? _$(_0x2cecca(369, "pvTY"))[_0x2cecca(409, "U84E")](_0x2cecca(364, "U84E"), _0x7870bb) : _0x451f2a[_0x2cecca(375, "I^3o")]("ad-cent") ? (_0x14dd2b = document[_0x2cecca(372, "D2jM")](_0x5cda53(366))).length ? _0x14dd2b[Math[_0x2cecca(387, "A)GK")](_0x14dd2b.length / 2)][_0x5cda53(411)]("afterend", _0x7870bb) : document[_0x2cecca(428, "D2jM")](_0x5cda53(384)) && document[_0x2cecca(373, "TQiO")](_0x5cda53(384))[_0x5cda53(411)](_0x2cecca(427, "G6PT"), _0x7870bb) : _0x451f2a.includes(_0x2cecca(361, "bhZf")) ? document[_0x2cecca(431, "GXUd")](".post-body:not(.siki):not(.siki0) p")[_0x451f2a[_0x5cda53(392)](_0x5cda53(407))[1] - 1] && document[_0x2cecca(363, "YIJ2")](".post-body p")[_0x451f2a.split(_0x5cda53(407))[1] - 1][_0x2cecca(393, "9HQw")]("afterend", _0x7870bb) : _0x451f2a.includes("ad-h2-") ? document[_0x2cecca(437, "I^3o")](_0x2cecca(404, "qLBY"))[_0x451f2a[_0x2cecca(399, "%luT")]("ad-h2-")[1] - 1] && document[_0x2cecca(372, "D2jM")](".post-body h2")[_0x451f2a[_0x2cecca(371, "YIJ2")]("ad-h2-")[1] - 1][_0x2cecca(409, "U84E")]("afterend", _0x7870bb) : _0x451f2a.includes(_0x2cecca(430, "TQiO")) ? document[_0x2cecca(368, "pvTY")](".post-body:not(.siki):not(.siki0) h3")[_0x451f2a[_0x2cecca(405, "GXUd")]("ad-h3-")[1] - 1] && document[_0x5cda53(441)](_0x2cecca(420, "qLBY"))[_0x451f2a.split(_0x2cecca(430, "TQiO"))[1] - 1].insertAdjacentHTML(_0x2cecca(396, "$Z(5"), _0x7870bb) : _0x451f2a[_0x5cda53(417)]("ad-h4-") ? document[_0x5cda53(441)](".post-body:not(.siki):not(.siki0) h4")[_0x451f2a[_0x5cda53(392)](_0x2cecca(434, "NE[R"))[1] - 1] && document[_0x5cda53(441)](_0x2cecca(386, "GXUd"))[_0x451f2a[_0x2cecca(436, "U84E")](_0x5cda53(398))[1] - 1].insertAdjacentHTML(_0x5cda53(406), _0x7870bb) : _0x451f2a[_0x2cecca(412, "y8^J")](_0x2cecca(418, "FfeX")) && document[_0x5cda53(441)](".post-body:not(.siki):not(.siki0) blockquote")[_0x451f2a[_0x5cda53(392)](_0x2cecca(402, "7yF^"))[1] - 1] && document[_0x5cda53(441)](".post-body blockquote")[_0x451f2a[_0x5cda53(392)](_0x2cecca(391, "hktA"))[1] - 1][_0x2cecca(358, "&s!h")](_0x5cda53(406), _0x7870bb);
  }), _0x390d25(426, "yssS") == typeof blba && (document[_0x390d25(378, "yMWU")].innerHTML = "");
}


if (Object.entries(AuthorsInfo.postAds).length) {
  document.querySelectorAll('ins.adsbygoogle:empty').forEach(() => {
    (adsbygoogle = window.adsbygoogle || []).push({});
  });
}

$(".sharemore,.OpenSitting.Inpost,#clicksearch,#navMopile,.link.searcha,.link.menue").forEach(a => {
  a.addEventListener("click", function () {
    _$("body").classList.add("scrolhide");
  });
});
_$(".OpenSitting.inside,.closemenu,.pos-t-t,.searchC,.fCls.sharebg,.c.cl,.fCls.searchbg").forEach(a => {
  a.addEventListener("click", function () {
    _$("body").classList.remove("scrolhide");
  });
});
