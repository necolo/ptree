import ptree from '../src';

interface TestObject {
  name: string;
  children?: TestObject[];
}

console.log(ptree(
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
  ] as TestObject[],
  {
    formatter: n => n.name,
    getChildren: n => n.children,
  }
));

console.log('\n');

console.log(ptree(
  {
    name: 'fruits',
    children: [
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
  } as TestObject,
  {
    formatter: n => n.name,
    getChildren: n => n.children,
  }
));