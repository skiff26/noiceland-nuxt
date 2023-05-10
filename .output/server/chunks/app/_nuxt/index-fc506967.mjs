import { useSSRContext, mergeProps, defineComponent, unref, computed, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { u as useHead, _ as _export_sfc } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'ufo';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main$e = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "header__container" }, _attrs))}><div class="header__body">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeaderContainer.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "TheHeaderNav",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      {
        link: "#home",
        label: "Home"
      },
      {
        link: "#latest",
        label: "Latest"
      },
      {
        link: "#featured",
        label: "About"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "header__nav" }, _attrs))}><ul class="header__items"><!--[-->`);
      ssrRenderList(links, ({ link, label }) => {
        _push(`<li class="header__item"><a${ssrRenderAttr("href", link)}>${ssrInterpolate(label)}</a></li>`);
      });
      _push(`<!--]--></ul></nav>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeaderNav.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_TheHeaderContainer = __nuxt_component_0$2;
  const _component_TheHeaderNav = _sfc_main$d;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeaderContainer, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a href="" class="header__title"${_scopeId}>Noiceland</a>`);
        _push2(ssrRenderComponent(_component_TheHeaderNav, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("a", {
            href: "",
            class: "header__title"
          }, "Noiceland"),
          createVNode(_component_TheHeaderNav)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</header>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeader.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$3]]);
const MainPost = {
  type: "Illustration",
  title: "Japan House opens in mountainside to foster peak creativity.",
  text: "Enim omittam qui id, ex quo atqui dictas complectitur. Nec ad timeam accusata, hinc justo falli id eum, ferri novum molestie eos cu.",
  author: "By Reta Torphy",
  path: "./img/illustration.jpg"
};
const Posts = [
  {
    type: "Photography",
    path: "./img/posts/01.jpg",
    title: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
    author: "By Alessandra Ortiz"
  },
  {
    type: "Photography",
    path: "./img/posts/02.jpg",
    title: "Bowlcut launch a new summer collection that pays homage to \u201CUK legends\u201D",
    author: "By Rosanna Ondricka"
  },
  {
    type: "Photography",
    path: "./img/posts/03.jpg",
    title: "Thousands of previously unseen photographs by Andy Warhol will be made public this Autumn",
    author: "By Annie Lueilwitz"
  },
  {
    type: "Interactive Design",
    path: "./img/posts/04.jpg",
    title: "London-based Yinka Ilori\u2019s storytelling furniture",
    author: "By Annie Lueilwitz"
  },
  {
    type: "Graphic Design",
    path: "./img/posts/05.jpg",
    title: "Anonymous Israeli art collective Broken Fingaz direct music video for U2 and Beck",
    author: "By Simeon Brekke"
  },
  {
    type: "Architecture",
    path: "./img/posts/06.jpg",
    title: "Suzanne Saroff\u2019s meticulously arranged photographs alter perceptions",
    author: "By Reta Torphy"
  }
];
const LatestPosts = [
  {
    type: "Photography",
    path: "./img/latestposts/01.jpg",
    title: "Japan House opens in mountainside to foster peak creativity",
    author: "By Reta Torphy"
  },
  {
    type: "Photography",
    path: "./img/latestposts/02.jpg",
    title: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
    author: "By Alessandra Ortiz"
  },
  {
    type: "Photography",
    path: "./img/latestposts/03.jpg",
    title: "Bowlcut launch a new summer collection that pays homage to \u201CUK legends\u201D",
    author: "By Rosanna Ondricka"
  },
  {
    type: "Photography",
    path: "./img/latestposts/04.jpg",
    title: "Thousands of previously unseen photographs by Andy Warhol will be made public this Autumn",
    author: "By Annie Lueilwitz"
  },
  {
    type: "Interactive Design",
    path: "./img/latestposts/05.jpg",
    title: "London-based Yinka Ilori\u2019s storytelling furniture",
    author: "By Annie Lueilwitz"
  },
  {
    type: "Graphic Design",
    path: "./img/latestposts/06.jpg",
    title: "Anonymous Israeli art collective Broken Fingaz direct music video for U2 and Beck",
    author: "By Simeon Brekke"
  },
  {
    type: "Architecture",
    path: "./img/latestposts/07.jpg",
    title: "Suzanne Saroff\u2019s meticulously arranged photographs alter perceptions",
    author: "By Reta Torphy"
  },
  {
    type: "Architecture",
    path: "./img/latestposts/08.jpg",
    title: "Anu Ambasna\u2019s playful illustrations celebrate club culture, brown bodies and perfect paunches",
    author: "By Annie Lueilwitz"
  }
];
const FeaturedPosts = [
  {
    type: "Graphic Design",
    path: "./img/featuredposts/01.jpg",
    title: "A Brief History of the FIFA World Cup Logo",
    author: "By Clem Onojeghuo"
  },
  {
    type: "Graphic Design",
    path: "./img/featuredposts/02.jpg",
    title: "Need a guide to LA\u2019s graphic design scene? Shoplifters\u2019 new issue has got your back",
    author: "By Alessandra Ortiz"
  },
  {
    type: "Photography",
    path: "./img/featuredposts/03.jpg",
    title: "Fred Rowson directs film for Years and Years",
    author: "By Coby Gottlieb"
  },
  {
    type: "Illustration",
    path: "./img/featuredposts/04.jpg",
    title: "M&C Saatchi and Fontsmith collaborate on font collection for House of St Barnabas",
    author: "By Annie Lueilwitz"
  }
];
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "TheMainPost",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "page__illustration illustration wow animate__animated animate__fadeIn",
        id: "home"
      }, _attrs))}><div class="illustration__container"><div class="illustration__body"><div class="illustration__image"><a href=""><img${ssrRenderAttr("src", unref(MainPost).path)}${ssrRenderAttr("alt", unref(MainPost).title)}></a></div><div class="illustration__description"><div class="illustration__ill">${ssrInterpolate(unref(MainPost).type)}</div><a href="" class="illustration__title">${ssrInterpolate(unref(MainPost).title)}</a><div class="illustration__text">${unref(MainPost).text}</div><a href="" class="illustration__autor">${ssrInterpolate(unref(MainPost).author)}</a></div></div></div></section>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheMainPost.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "TheMainPosts",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "page__posts posts wow animate__animated animate__fadeIn" }, _attrs))}><div class="posts__container"><div class="posts__items true"><!--[-->`);
      ssrRenderList(unref(Posts), ({ type, path, title, author }) => {
        _push(`<div class="posts__item item-posts"><div class="item-posts__image"><a href=""><img${ssrRenderAttr("src", path)}${ssrRenderAttr("alt", title)}></a></div><div class="item-posts__type">${ssrInterpolate(type)}</div><div class="item-posts__title"><a href="">${title}</a></div><div class="item-posts__autor">${ssrInterpolate(author)}</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheMainPosts.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "TheLatestPosts",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "page__latest-posts latest-posts wow animate__animated animate__fadeIn",
        id: "latest"
      }, _attrs))}><div class="latest-posts__container"><div class="latest-posts__title posts-title">LATEST POSTS</div><div class="posts__items latest-posts__items"><!--[-->`);
      ssrRenderList(unref(LatestPosts), ({ type, title, author, path }) => {
        _push(`<div class="posts__item item-posts"><div class="item-posts__image"><a href=""><img${ssrRenderAttr("src", path)}${ssrRenderAttr("alt", title)}></a></div><div class="item-posts__type">${ssrInterpolate(type)}</div><div class="item-posts__title"><a href="">${ssrInterpolate(title)}</a></div><div class="item-posts__autor">${ssrInterpolate(author)}</div></div>`);
      });
      _push(`<!--]--></div><div class="latest-posts__more"><a href="" class="latest-posts__link-view-more">view all latest posts</a></div></div></section>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheLatestPosts.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "TheFeaturedPosts",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "page__featured-posts featured-posts wow animate__animated animate__fadeIn",
        id: "featured"
      }, _attrs))}><div class="posts__container"><h2 class="featured-posts__title posts-title">featured posts</h2><div class="posts__items featured-posts__items"><!--[-->`);
      ssrRenderList(unref(FeaturedPosts), ({ type, title, path, author }) => {
        _push(`<div class="posts__item item-posts featured-posts__item"><div class="item-posts__image"><a href="" class="featured-link"><img${ssrRenderAttr("src", path)}${ssrRenderAttr("alt", title)}></a></div><div class="item-posts__type">${ssrInterpolate(type)}</div><div class="item-posts__title"><a href="">${title}</a></div><div class="item-posts__autor">${ssrInterpolate(author)}</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFeaturedPosts.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_TheMainPost = _sfc_main$b;
  const _component_TheMainPosts = _sfc_main$a;
  const _component_TheLatestPosts = _sfc_main$9;
  const _component_TheFeaturedPosts = _sfc_main$8;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheMainPost, null, null, _parent));
  _push(ssrRenderComponent(_component_TheMainPosts, null, null, _parent));
  _push(ssrRenderComponent(_component_TheLatestPosts, null, null, _parent));
  _push(ssrRenderComponent(_component_TheFeaturedPosts, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheMain.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer__container" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooterContainer.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TheFooterNameBlock",
  __ssrInlineRender: true,
  setup(__props) {
    const year = computed(() => (/* @__PURE__ */ new Date()).getFullYear());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer__name" }, _attrs))}><div class="footer__logo"><a href="">Noiceland</a></div><div class="footer__copy f-title">\xA9 ${ssrInterpolate(unref(year))} Noiceland\u2122, all rights reserved</div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooterNameBlock.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TheFooterForm",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer__email" }, _attrs))}><div class="footer__email-title f-title">Subscribe to newsletter</div><form action="#"><input type="email" placeholder="Email address"><button type="submit">Send</button></form></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooterForm.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TheFooterFirstBlock",
  __ssrInlineRender: true,
  setup(__props) {
    const first = [
      {
        link: "",
        label: "Animation"
      },
      {
        link: "",
        label: "Interactive Design"
      }
    ];
    const second = [
      {
        link: "",
        label: "Architecture"
      },
      {
        link: "",
        label: "Miscellaneous"
      }
    ];
    const third = [
      {
        link: "",
        label: "Graphic Design"
      },
      {
        link: "",
        label: "Photography"
      }
    ];
    const fourth = [
      {
        link: "",
        label: "Illustration"
      },
      {
        link: "",
        label: "Product Design"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheFooterForm = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer__first-block" }, _attrs))}><div class="footer__categories"><div class="footer__categories-title f-title">Categories</div><ul class="footer__categories-list"><div class="categories_1"><!--[-->`);
      ssrRenderList(first, ({ link, label }) => {
        _push(`<li class="footer__categories-item"><a${ssrRenderAttr("href", link)} class="footer__categories-link f-link">${ssrInterpolate(label)}</a></li>`);
      });
      _push(`<!--]--></div><div class="categories_2"><!--[-->`);
      ssrRenderList(second, ({ link, label }) => {
        _push(`<li class="footer__categories-item"><a${ssrRenderAttr("href", link)} class="footer__categories-link f-link">${ssrInterpolate(label)}</a></li>`);
      });
      _push(`<!--]--></div><div class="categories_3"><!--[-->`);
      ssrRenderList(third, ({ link, label }) => {
        _push(`<li class="footer__categories-item"><a${ssrRenderAttr("href", link)} class="footer__categories-link f-link">${ssrInterpolate(label)}</a></li>`);
      });
      _push(`<!--]--></div><div class="categories_4"><!--[-->`);
      ssrRenderList(fourth, ({ link, label }) => {
        _push(`<li class="footer__categories-item"><a${ssrRenderAttr("href", link)} class="footer__categories-link f-link">${ssrInterpolate(label)}</a></li>`);
      });
      _push(`<!--]--></div></ul></div>`);
      _push(ssrRenderComponent(_component_TheFooterForm, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooterFirstBlock.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TheFooterSecondBlock",
  __ssrInlineRender: true,
  setup(__props) {
    const informationLinks = [
      {
        link: "",
        label: "about"
      },
      {
        link: "",
        label: "contact"
      },
      {
        link: "",
        label: "terms"
      }
    ];
    const mediaLinks = [
      {
        link: "",
        label: "instagram"
      },
      {
        link: "",
        label: "facebook"
      },
      {
        link: "",
        label: "twitter"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer__second-block" }, _attrs))}><div class="footer__info"><div class="footer__info-title f-title">Information</div><ul class="footer__info-list"><!--[-->`);
      ssrRenderList(informationLinks, ({ link, label }) => {
        _push(`<li class="footer__info-item"><a${ssrRenderAttr("href", link)} class="footer__info-link f-link">${ssrInterpolate(label)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div class="footer__follow"><div class="footer__follow-title f-title">follow us</div><!--[-->`);
      ssrRenderList(mediaLinks, ({ link, label }) => {
        _push(`<ul class="footer__follow-list"><li class="footer__follow-item"><a${ssrRenderAttr("href", link)} class="footer__follow-link f-link">${ssrInterpolate(label)}</a></li></ul>`);
      });
      _push(`<!--]--></div><div class="footer__template"><div class="footer__template-title f-title">Template</div><ul class="footer__template-list"><li class="footer__template-item f-link">Image License Info</li><li class="footer__template-item f-link">Powered by Webflow</li></ul></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooterSecondBlock.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheFooterContainer = __nuxt_component_0;
  const _component_TheFooterNameBlock = _sfc_main$5;
  const _component_TheFooterFirstBlock = _sfc_main$3;
  const _component_TheFooterSecondBlock = _sfc_main$2;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer wow animate__animated animate__fadeIn" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheFooterContainer, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TheFooterNameBlock, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_TheFooterFirstBlock, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_TheFooterSecondBlock, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_TheFooterNameBlock),
          createVNode(_component_TheFooterFirstBlock),
          createVNode(_component_TheFooterSecondBlock)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Noiceland | Main"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheHeader = __nuxt_component_0$1;
      const _component_TheMain = __nuxt_component_1;
      const _component_TheFooter = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
      _push(ssrRenderComponent(_component_TheMain, null, null, _parent));
      _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-fc506967.mjs.map
