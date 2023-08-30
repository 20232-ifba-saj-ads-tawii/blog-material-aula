import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import umlPlugin from 'markdown-it-plantuml';
import theme from "./theme.js";

export default defineUserConfig({
  base : "/blog-material-aula/",

  lang: "pt-BR",
  title: "Blog Aulas 20232 POO",
  description: "Material de aulas",

  extendsMarkdown: (md) => {    
    md.use(umlPlugin, {openMarker: '```plantuml', closeMarker: '```'})
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

  plugins: [searchPlugin({}),],

});
