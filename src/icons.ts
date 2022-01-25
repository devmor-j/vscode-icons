import { Icon } from "./types/Icon";
function icon(name: string): Icon {
  return {
    [`_f_${name}`]: {
      iconPath: `./icons/${name}.svg`,
    },
  };
}

function iconGeneric(name: string): Icon {
  return {
    [`_${name}`]: {
      iconPath: `./icons/${name}.svg`,
    },
  };
}

const icons: Icon = {
  ...iconGeneric("file"),
  ...iconGeneric("folder"),
  ...iconGeneric("folder_open"),
  ...icon("elm"),
  ...icon("apollo"),
  ...icon("astyle"),
  ...icon("aurelia"),
  ...icon("azure"),
  ...icon("bitbucket"),
  ...icon("changelog"),
  ...icon("authors"),
  ...icon("django"),
  ...icon("word"),
  ...icon("windicss"),
  ...icon("vim"),
  ...icon("svelte"),
  ...icon("sass"),
  ...icon("scss"),
  ...icon("less"),
  ...icon("stylus"),
  ...icon("postcssconfig"),
  ...icon("docker"),
  ...icon("dockerignore"),
  ...icon("dockerdebug"),
  ...icon("git"),
  ...icon("readme"),
  ...icon("html"),
  ...icon("json"),
  ...icon("rjson"),
  ...icon("markdown"),
  ...icon("css"),
  ...icon("cssmap"),
  ...icon("js"),
  ...icon("jsmap"),
  ...icon("typescript"),
  ...icon("typescriptdef"),
  ...icon("tsx"),
  ...icon("vue"),
  ...icon("image"),
  ...icon("zip"),
  ...icon("yarn"),
  ...icon("yarnerror"),
  ...icon("error"),
  ...icon("npm"),
  ...icon("svg"),
  ...icon("yaml"),
  ...icon("fontwoff2"),
  ...icon("fontwoff"),
  ...icon("fontttf"),
  ...icon("fontotf"),
  ...icon("php"),
  ...icon("twig"),
  ...icon("composer"),
  ...icon("symfony"),
  ...icon("xml"),
  ...icon("robots"),
  ...icon("bundler"),
  ...icon("stylelint"),
  ...icon("prettier"),
  ...icon("python"),
  ...icon("log"),
  ...icon("license"),
  ...icon("audio"),
  ...icon("audiomp3"),
  ...icon("audioogg"),
  ...icon("audiowav"),
  ...icon("lua"),
  ...icon("csharp"),
  ...icon("dartlang"),
  ...icon("eslint"),
  ...icon("handlebars"),
  ...icon("webpack"),
  ...icon("ruby"),
  ...icon("erb"),
  ...icon("jest"),
  ...icon("babel"),
  ...icon("toml"),
  ...icon("elixir"),
  ...icon("exs"),
  ...icon("rust"),
  ...icon("reactjs"),
  ...icon("reactts"),
  ...icon("angular"),
  ...icon("rollup"),
  ...icon("java"),
  ...icon("gulp"),
  ...icon("grunt"),
  ...icon("editorconfig"),
  ...icon("shell"),
  ...icon("vscode"),
  ...icon("ai"),
  ...icon("photoshop"),
  ...icon("pdf"),
  ...icon("go"),
  ...icon("go_package"),
  ...icon("tmpl"),
  ...icon("svelte"),
  ...icon("browserslist"),
  ...icon("erlang"),
  ...icon("vite"),
  ...icon("mint"),
  ...icon("eex"),
  ...icon("env"),
  ...icon("nvm"),
  ...icon("sql"),
  ...icon("nginx"),
  ...icon("conf"),
  ...icon("c"),
  ...icon("cpp"),
  ...icon("powershell"),
  ...icon("powershelldata"),
  ...icon("powershellmodule"),
  ...icon("njk"),
  ...icon("blade"),
  ...icon("liquid"),
  ...icon("pug"),
  ...icon("cheader"),
  ...icon("m"),
  ...icon("swift"),
  ...icon("graphql"),
  ...icon("groovy"),
  ...icon("testjs"),
  ...icon("testts"),
  ...icon("storybook"),
  ...icon("wasm"),
  ...icon("imagepng"),
  ...icon("imagejpg"),
  ...icon("imagegif"),
  ...icon("imagewebp"),
  ...icon("imageico"),
  ...icon("cli"),
  ...icon("bat"),
  ...icon("nuxt"),
  ...icon("netlify"),
  ...icon("vercel"),
  ...icon("tailwind"),
  ...icon("windi"),
  ...icon("nodemon"),
  ...icon("jinja"),
  ...icon("haml"),
  ...icon("smarty"),
  ...icon("haskell"),
  ...icon("gradle"),
  ...icon("nim"),
  ...icon("nestjs"),
  ...icon("nestjscontroller"),
  ...icon("nestjsservice"),
  ...icon("nestjsmodule"),
  ...icon("nestjsguard"),
  ...icon("nestjsdecorator"),
  ...icon("nestjsfilter"),
  ...icon("jenkins"),
  ...icon("txt"),
  ...icon("binary"),
  ...icon("cert"),
  ...icon("key"),
  ...icon("prisma"),
  ...icon("compodoc"),
  ...icon("julia"),
  ...icon("csv"),
  ...icon("karma"),
  ...icon("tsconfig"),
  ...icon("jsconfig"),
  ...icon("travis"),
  ...icon("razor"),
  ...icon("cshtml"),
  ...icon("jsp"),
  ...icon("avi"),
  ...icon("mp4"),
  ...icon("mov"),
  ...icon("video"),
  ...icon("rescript"),
  ...icon("bsconfig"),
  ...icon("opengl"),
  ...icon("llvm"),
  ...icon("info"),
  ...icon("ipynb"),
  ...icon("sol"),
  ...icon("bicep"),
  ...icon("qt"),
  ...icon("ui"),
  ...icon("prolog"),
  ...icon("user"),
};

export default icons;
