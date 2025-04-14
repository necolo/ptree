
# @ptree/core

[![npm version](https://img.shields.io/npm/v/@ptree/core.svg)](https://www.npmjs.com/package/@ptree/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)](https://www.typescriptlang.org/)

Pretty-print any hierarchical data structure as a tree visualization in the console. This lightweight TypeScript utility transforms nested objects or arrays into human-readable tree structures using Unicode box-drawing characters.

## 📋 Features

- Simple API with powerful customization options
- Flexible input handling - works with both single nodes and arrays
- Type-safe with full TypeScript support
- Zero dependencies
- Tree branch visualization using Unicode box-drawing characters
- ESM and CommonJS support

## 🖼️ Example Output

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

## 🚀 Installation

```bash
# npm
npm install @ptree/core

# yarn
yarn add @ptree/core

# pnpm
pnpm add @ptree/core
```

## 📖 Usage

### Basic Example

```typescript
import ptree from '@ptree/core';

// Your hierarchical data structure
const data = [
  {
    name: 'orange',
    children: [
      { name: 'orange-1' },
      { name: 'orange-2' },
    ],
  },
  {
    name: 'pear',
    children: [
      { name: 'pear-1' },
    ],
  }
];

// Generate the tree representation
const treeString = ptree(data, {
  formatter: node => node.name,       // How to display each node
  getChildren: node => node.children, // How to get children of a node
});

console.log(treeString);
```

### With a Single Root Node

```typescript
import ptree from '@ptree/core';

const rootNode = {
  name: 'fruits',
  children: [
    {
      name: 'orange',
      children: [
        { name: 'orange-1' },
        { name: 'orange-2' },
      ],
    },
    {
      name: 'pear',
      children: [
        { name: 'pear-1' },
      ],
    }
  ],
};

const treeString = ptree(rootNode, {
  formatter: node => node.name,
  getChildren: node => node.children,
});

console.log(treeString);
```

## 🔧 API Reference

### Function Signature

```typescript
function ptree<N>(input: N | N[], config: Config<N>): string;
function ptree<N, I>(input: I, config: ConfigWithInit<N, I>): string;
```

### Configuration

The library requires a configuration object with these properties:

| Property | Type | Description |
|----------|------|-------------|
| formatter | `(node: N) => string` | Required. Function that converts a node to a display string |
| getChildren | `(node: N) => N[] \| null \| undefined` | Required. Function that returns the children of a node |
| initializer | `(input: I) => N[] \| N` | *Optional*. Function to transform the input before processing |

## 🔍 Advanced Examples

### Custom Data Structures

The library works with any hierarchical data structure:

```typescript
import ptree from '@ptree/core';

interface FileNode {
  path: string;
  type: 'file' | 'directory';
  size?: number;
  contents?: FileNode[];
}

const fileSystem: FileNode = {
  path: '/root',
  type: 'directory',
  contents: [
    { path: 'README.md', type: 'file', size: 2048 },
    { 
      path: 'src', 
      type: 'directory',
      contents: [
        { path: 'index.ts', type: 'file', size: 1024 },
        { path: 'utils.ts', type: 'file', size: 512 }
      ]
    }
  ]
};

const treeString = ptree(fileSystem, {
  formatter: node => {
    if (node.type === 'file') {
      return `${node.path} (${node.size} bytes)`;
    }
    return `${node.path}/`;
  },
  getChildren: node => node.contents
});

console.log(treeString);
```

### With Initializer Function

```typescript
import ptree from '@ptree/core';

// Input is a simple string-based format
const input = `
Root
  Child1
    GrandChild1
  Child2
`;

// Using initializer to parse the string into a tree structure
const result = ptree(input, {
  initializer: (str) => {
    // Custom logic to parse the string into a tree structure
    // This is just a placeholder example
    return { name: 'Parsed Root', children: [] };
  },
  formatter: node => node.name,
  getChildren: node => node.children
});
```

## 🔄 TypeScript Support

ptree is written in TypeScript and provides full type definitions. The generic type parameters allow you to specify the exact types of your nodes:

```typescript
import ptree from '@ptree/core';

interface MyNode {
  label: string;
  subItems?: MyNode[];
}

const data: MyNode = {
  label: 'Root',
  subItems: [
    { label: 'Child1' },
    { label: 'Child2', subItems: [{ label: 'Grandchild' }] }
  ]
};

const tree = ptree<MyNode>(data, {
  formatter: node => node.label,
  getChildren: node => node.subItems
});
```

## 📦 Project Structure

```
ptree/
├─ src/
│  └─ index.ts       # Main implementation
├─ lib/              # Compiled output
│  ├─ index.js       # CommonJS build
│  ├─ index.mjs      # ESM build
│  ├─ index.d.ts     # TypeScript declarations
├─ __tests__/
│  └─ test.ts        # Test cases
├─ package.json
└─ README.md
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🚧 Issues and Feature Requests

If you find a bug or have a feature request, please create an issue on the [GitHub repository](https://github.com/necolo/ptree/issues).