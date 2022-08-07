# @ptree/files
Print your directory and files as a pretty tree

## Use with npx

```
npx ptree-files [path]

# print out:

├─ README.md
├─ __tests__
│  └─ test.ts
├─ bin.js
├─ lib
│  ├─ index.cjs
│  └─ index.d.ts
├─ package.json
├─ rollup.config.ts
├─ src
│  └─ index.ts
└─ tsconfig.json

```

## Install
```
npm install @ptree/files
```

## Usage

```
const ptree = require('./lib/index.cjs');
const path = require('path');

ptree.printFiles(path.join(__dirname, '..'));
```