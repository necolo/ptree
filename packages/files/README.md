
# ptree-files

[![npm version](https://img.shields.io/npm/v/ptree-files.svg)](https://www.npmjs.com/package/ptree-files)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight, powerful utility to print your directory and files as a pretty tree structure in the terminal or within your application.

## 📋 Features

- Pretty Tree Visualization: Display files and directories in an easy-to-read tree format
- CLI Support: Use directly from the command line with npx
- Programmatic API: Import and use in your Node.js projects
- Customizable: Built on top of the flexible `@ptree/core` library
- TypeScript Support: Fully typed API

## 🔧 Installation

### Using as CLI with npx (no installation)

```bash
npx ptree-files [path]
```

### Global Installation

```bash
npm install -g ptree-files
```

Then you can use the command:

```bash
ptree-files [path]
```

### Local Installation

```bash
npm install ptree-files
```

## 🚀 Usage

### Command Line

```bash
npx ptree-files [path]
```

If no path is provided, it defaults to the current directory (`./`).

#### Example Output

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

### Programmatic API

You can use `ptree-files` in your Node.js applications:

#### CommonJS

```javascript
const ptree = require('ptree-files');
const path = require('path');

// Print tree of a directory
const tree = ptree.files(path.join(__dirname, '..'));
console.log(tree);
```

#### ESM/TypeScript

```typescript
import ptree from 'ptree-files';
import path from 'path';

// Print tree of a directory
const tree = ptree.files(path.join(__dirname, '..'));
console.log(tree);
```

## 🔍 API Reference

### `ptree.files(dirPath: string)`

Generates a tree representation of the files and directories at the specified path.

- Parameters:
  - `dirPath` - Path to the directory to visualize

- Returns: A string containing the formatted tree structure

### `ptree.core`

Access to the underlying `@ptree/core` functionality for advanced customization. See [@ptree/core documentation](https://github.com/necolo/ptree) for more details.

## 🛠️ Advanced Usage

You can access the core functionality to customize how the tree is generated:

```javascript
const ptree = require('ptree-files');
const fs = require('fs');

// Using the core functionality with custom options
const customTree = ptree.core('/path/to/directory', {
  formatter: (pathname) => {
    // Custom formatting logic
    const paths = pathname.split('/');
    return paths[Math.max(0, paths.length - 1)];
  },
  getChildren: (pathname) => {
    // Custom logic to determine children
    if (!fs.existsSync(pathname)) {
      return null;
    }
    const stats = fs.lstatSync(pathname);
    if (stats.isDirectory()) {
      return fs.readdirSync(pathname).map(file => `${pathname}/${file}`);
    }
    return null;
  },
});
```

## 📦 Project Structure

```
├─ src/           # Source code
├─ __tests__/     # Tests
├─ lib/           # Compiled output (not in repo)
├─ bin.js         # CLI entry point
├─ package.json   # Project configuration
└─ tsconfig.json  # TypeScript configuration
```

## 🔧 Technical Details

`ptree-files` is built on top of `@ptree/core` and provides a file system integration layer that makes it easy to visualize directory structures. The package:

1. Uses Node.js fs module to traverse directories
2. Formats the output to show filenames by default rather than full paths
3. Handles directory traversal recursively
4. Provides both a CLI interface and a programmatic API

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/necolo/ptree/issues).

## 📄 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.