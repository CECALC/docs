import{u as r,o as p,c as i,k as a,t as s,l as n,Q as c,a as e}from"./chunks/framework.67b3e307.js";const d=c(`<h1 id="perguntas-frequentes-faq" tabindex="-1">Perguntas frequentes (FAQ) <a class="header-anchor" href="#perguntas-frequentes-faq" aria-label="Permalink to &quot;Perguntas frequentes (FAQ)&quot;">​</a></h1><h2 id="_1-nao-consigo-iniciar-um-calculo-da-revisao-da-vida-toda-rvt-o-que-devo-fazer" tabindex="-1">1. Não consigo iniciar um cálculo da Revisão da Vida Toda (RVT). O que devo fazer? <a class="header-anchor" href="#_1-nao-consigo-iniciar-um-calculo-da-revisao-da-vida-toda-rvt-o-que-devo-fazer" aria-label="Permalink to &quot;1. Não consigo iniciar um cálculo da Revisão da Vida Toda (RVT). O que devo fazer?&quot;">​</a></h2><p>Para realização de <ins>qualquer cálculo</ins> é necessário importar a <code>Carta de Concessão</code> do benefício. O procedimento pode ser consultado <a href="/tutoriais/rvt.html#importacao-da-carta-de-concessao-e-extrato-cnis-sat">neste link</a></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { useData } from &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const { theme, page, frontmatter } = useData()</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">## Results</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">### Theme Data</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;pre&gt;{{ theme }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">### Page Data</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;pre&gt;{{ page }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">### Page Frontmatter</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;pre&gt;{{ frontmatter }}&lt;/pre&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { useData } from &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const { theme, page, frontmatter } = useData()</span></span>
<span class="line"><span style="color:#24292E;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">## Results</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">### Theme Data</span></span>
<span class="line"><span style="color:#24292E;">&lt;pre&gt;{{ theme }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">### Page Data</span></span>
<span class="line"><span style="color:#24292E;">&lt;pre&gt;{{ page }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">### Page Frontmatter</span></span>
<span class="line"><span style="color:#24292E;">&lt;pre&gt;{{ frontmatter }}&lt;/pre&gt;</span></span></code></pre></div><h2 id="results" tabindex="-1">Results <a class="header-anchor" href="#results" aria-label="Permalink to &quot;Results&quot;">​</a></h2><h3 id="theme-data" tabindex="-1">Theme Data <a class="header-anchor" href="#theme-data" aria-label="Permalink to &quot;Theme Data&quot;">​</a></h3>`,6),h=a("h3",{id:"page-data",tabindex:"-1"},[e("Page Data "),a("a",{class:"header-anchor",href:"#page-data","aria-label":'Permalink to "Page Data"'},"​")],-1),u=a("h3",{id:"page-frontmatter",tabindex:"-1"},[e("Page Frontmatter "),a("a",{class:"header-anchor",href:"#page-frontmatter","aria-label":'Permalink to "Page Frontmatter"'},"​")],-1),g=a("h2",{id:"more",tabindex:"-1"},[e("More "),a("a",{class:"header-anchor",href:"#more","aria-label":'Permalink to "More"'},"​")],-1),m=a("p",null,[e("Check out the documentation for the "),a("a",{href:"https://vitepress.dev/reference/runtime-api#usedata",target:"_blank",rel:"noreferrer"},"full list of runtime APIs"),e(".")],-1),q=JSON.parse('{"title":"Perguntas frequentes (FAQ)","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"faq.md","filePath":"faq.md","lastUpdated":null}'),f={name:"faq.md"},P=Object.assign(f,{setup(_){const{site:E,theme:t,page:l,frontmatter:o}=r();return(b,v)=>(p(),i("div",null,[d,a("pre",null,s(n(t)),1),h,a("pre",null,s(n(l)),1),u,a("pre",null,s(n(o)),1),g,m]))}});export{q as __pageData,P as default};
