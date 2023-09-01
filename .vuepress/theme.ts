import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "20232-ifba-saj-ads-tawii.github.io/blog-material-aula/",

  author: {
    name: "Leandro Souza",
    url: "https://github.com/leandro-costa",
  },

  lastUpdated: false,
  contributors: false,
  
  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "20232-ifba-saj-ads-tawii/blog-material-aula",

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "Material de aula IFBA SAJ",

  displayFooter: true,

  blog: {
    description: "Professor EBTT",
    intro: "/intro.html",
    roundAvatar:true,
    avatar: "/assets/icon/icon-512.png",
    medias: {
      Email: "mailto:leandro.costa@ifba.edu.br",
      GitHub: "https://github.com/leandro-costa",
    },
  },

  metaLocales: {
    editLink: "Edite esta pagina no GitHub",
    toc: "Nesta Página",
  },

  plugins: {
    blog: {
      // only files under posts are articles
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith("posts/") : false,

      excerptLength: 1,
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
     pwa: {
       favicon: "/favicon.ico",
       cacheHTML: true,
       cachePic: true,
       appendBase: true,
       apple: {
         icon: "/assets/icon/icon-152.png",
         statusBarColor: "black",
       },
       msTile: {
         image: "/assets/icon/icon-144.png",
         color: "#ffffff",
       },
       manifest: {
         icons: [
           {
             src: "/assets/icon/icon-512.png",
             sizes: "512x512",
             purpose: "maskable",
             type: "image/png",
           },
           {
             src: "/assets/icon/icon-192.png",
             sizes: "192x192",
             purpose: "maskable",
             type: "image/png",
           },
           {
             src: "/assets/icon/icon-512.png",
             sizes: "512x512",
             type: "image/png",
           },
           {
             src: "/assets/icon/icon-192.png",
             sizes: "192x192",
             type: "image/png",
           },
         ],         
       },
     },
  },
});
