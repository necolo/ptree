
# ptree

A lightweight and flexible library for visualizing hierarchical data as pretty tree structures in the terminal

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/@ptree/core.svg)](https://www.npmjs.com/package/@ptree/core)

## ✨ Features

- Convert any hierarchical data into a beautiful tree representation
- Customizable node formatting to display exactly what you need
- Flexible children retrieval to work with any data structure
- Directory visualization to print file system trees
- TypeScript support with full type definitions
- Zero dependencies for the core package
- Simple and intuitive API

## 📦 Packages

This project consists of multiple packages:

| Package | Description | NPM |
|---------|-------------|-----|
| [@ptree/core](./packages/core) | The core tree printing functionality | [![npm version](https://img.shields.io/npm/v/@ptree/core.svg)](https://www.npmjs.com/package/@ptree/core) |
| [ptree-files](./packages/files) | File system tree visualization | [![npm version](https://img.shields.io/npm/v/ptree-files.svg)](https://www.npmjs.com/package/ptree-files) |

## 🚀 Quick Start

### Directory Tree Visualization

The fastest way to visualize your directory structure:

```bash
npx ptree-files [directory-path]
```

### Core Package Installation

```bash
npm install @ptree/core
# or
yarn add @ptree/core
# or
pnpm add @ptree/core
```

### Files Package Installation

```bash
npm install ptree-files
# or
yarn add ptree-files
# or
pnpm add ptree-files
```

## 📋 Usage Examples

### Core Package

The core package provides flexibility to transform any hierarchical data into a tree structure:

```typescript
import ptree from '@ptree/core';

// Example with an array of objects
const result = ptree(
  [
    {
      name: 'orange',
      children: [
        { name: 'orange-1', children: [{ name: 'orange-1-1' }] },
        { name: 'orange-2' },
        { name: 'orange-3', children: [{ name: 'orange-3-1' }] },
      ],
    },
    {
      name: 'pear',
      children: [
        { name: 'pear-1' },
      ],
    }
  ],
  {
    formatter: n => n.name,           // How to display each node
    getChildren: n => n.children,     // How to find children of a node
  }
);

console.log(result);
```

Output:

```
├─ orange
│  ├─ orange-1
│  │  └─ orange-1-1
│  ├─ orange-2
│  └─ orange-3
│     └─ orange-3-1
└─ pear
   └─ pear-1
```

### Single Root Object

```typescript
import ptree from '@ptree/core';

// Example with a single root object
const result = ptree(
  {
    name: 'fruits',
    children: [
      {
        name: 'orange',
        children: [
          { name: 'orange-1', children: [{ name: 'orange-1-1' }] },
          { name: 'orange-2' },
          { name: 'orange-3', children: [{ name: 'orange-3-1' }] },
        ],
      },
      {
        name: 'pear',
        children: [
          { name: 'pear-1' },
        ],
      }
    ],
  },
  {
    formatter: n => n.name,
    getChildren: n => n.children,
  }
);

console.log(result);
```

### Files Package

```javascript
const ptree = require('ptree-files');
const path = require('path');

// Print directory structure
const result = ptree.files('./my-project');
console.log(result);

// You can also use the core functionality
const customTree = ptree.core(myData, {
  formatter: item => item.toString(),
  getChildren: item => item.subItems,
});
```

Using CLI:

```bash
npx ptree-files ./my-project
```

Output example:

```
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

## 📚 API Reference

### Core Package

```typescript
ptree<N>(input: N | N[], config: Config<N>): string;
ptree<N, I>(input: I, config: ConfigWithInit<N, I>): string;
```

#### Configuration

The configuration object accepts the following properties:

| Property | Type | Description |
|----------|------|-------------|
| `formatter` | `(node: N) => string` | Required. Function to convert a node to its string representation |
| `getChildren` | `(node: N) => N[] \| null \| undefined` | Required. Function to get children of a node |
| `initializer` | `(input: I) => N[] \| N` | Optional. Function to initialize/transform the input data |

### Files Package

```typescript
printFiles(dirPath: string): string
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `dirPath` | `string` | Path to the directory to visualize |

## 🛠️ Project Structure

```
├─ packages
│  ├─ core                # Core tree printing functionality
│  │  ├─ __tests__        # Tests for core package
│  │  ├─ src              # Source code
│  │  └─ ...              # Configuration files
│  ├─ create-project      # Tool for creating new packages in the repo
│  │  ├─ src
│  │  └─ ...
│  └─ files               # File system visualization package
│     ├─ __tests__
│     ├─ src
│     └─ ...
└─ ...                    # Root configuration files
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -am 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 👏 Acknowledgements

- Created by [Necolo Lv.C](https://github.com/necolo)
- Special thanks to all contributors

## 📮 Contact

If you have any questions or feedback, please open an issue on GitHub.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/necolo">Necolo</a>
</p>