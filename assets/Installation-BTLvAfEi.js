import{j as n}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as o}from"./index-CcnH5Kt0.js";import{ae as i,am as a}from"./index-CBf_V5Hc.js";import"./index-RYns6xqu.js";import"./iframe-OTp9Agfr.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./index-BwO1pRjM.js";import"./index-DrFu-skq.js";const m=`# 關於 Web Design system Storybook

## 關於 AUO Design system

AUO Design system 是一套跨設計與程式的設計系統，採用原子化設計架構，透過拆解與建構的方法達成高擴充性的元件組成與應用。AUO Design system 透過簡單的安裝即可直接使用。

## 安裝方式

### 步驟一：建立開發環境

創建專案資料夾。

\`\`\`
$ npm create vite@latest
\`\`\`

設定專案資料夾名稱

\`\`\`
Project name: my_project
\`\`\`

選擇使用的框架

\`\`\`
react
\`\`\`

選擇開發語言

\`\`\`
typescript
\`\`\`

進入專案資料夾

\`\`\`
$ cd my_project
\`\`\`

### 步驟二：安裝相依套件

開啟 package.json 設定檔

新增 ded-wds 到 dependencies :

\`\`\`
"ded-wds" :"^1.0.1"
\`\`\`

開啟 package.json 設定檔並新增 SASS 到 devDependencies :

\`\`\`
"sass": "^1.81.0"
\`\`\`

執行 npm install 安裝相關套件

\`\`\`
$ npm install
\`\`\`

### 步驟三：引用 SCSS 檔

下載 [style.zip](https://storage.googleapis.com/ded-wds-bucket/style.zip)

複製 style 資料夾至 src 資料夾

在進入點的檔案（App.tsx）引用「globals.scss」

\`\`\`
import './style/globals.scss'
\`\`\`

### 步驟四：開始開發

執行 npm 開啟環境進行開發

\`\`\`
$ npm run dev
\`\`\`

打開 Design system Storybook（Vue 版、React 版）

選擇所需

## 相關套件、資源

Design system 為提供便利的功能，部分常見元件採用功能完善的第三方套件以加快開發時程。

- 日期選取器： [Vanilla JS Datepicker](https://github.com/mymth/vanillajs-datepicker?tab=readme-ov-file)

- 檔案上傳： [uppy file upload](https://uppy.io/)

- 圖示： [Google material icons](https://fonts.google.com/icons)

- SASS CSS 預處理器： [SASS](https://sass-lang.com/)

## 範例下載

## 使用方式
`;function s(t){const e={h1:"h1",...o(),...t.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,`
`,n.jsx(i,{title:"Introduction/Installation"}),`
`,n.jsx(e.h1,{id:"installation",children:"Installation"}),`
`,n.jsx(a,{children:m})]})}function h(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{h as default};
