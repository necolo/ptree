# @ptree/core
Convert anything to a pretty tree printing.

## Install
```
npm install @ptree/core
```

## Usage

```typescript
ptree(inputObject, {
  formatter: (node) => string,
  getChildren: (node) => [nodes],
});
```

## Example

```
ptree(
  [
    {
      name: 'orange',
      children: [
        { name: 'orange-1', children: [ { name: 'orange-1-1' }] },
        { name: 'orange-2' },
        { name: 'orange-3', children: [ { name: 'orange-3-1' }] },
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
    formatter: n => n.name,
    getChildren: n => n.children,
  }
)

// print out:

├─ orange
│  ├─ orange-1
│  │  └─ orange-1-1
│  ├─ orange-2
│  └─ orange-3
│     └─ orange-3-1
└─ pear
   └─ pear-1
```
