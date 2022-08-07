interface Config<N> {
  formatter: (node: N) => string; 
  getChildren: (node: N) => N[] | null | undefined;
}

interface ConfigWithInit<N, I> extends Config<N> {
  initializer?: (input: I) => N[] | N;
}

export function ptree<N>(input: N | N[], config: Config<N>): string;
export function ptree<N, I>(input: I, config: ConfigWithInit<N, I>): string;
export function ptree<N, I>(input, config) {
  const { initializer, formatter, getChildren } = config;
  const lines: string[] = [];

  function iterator(nodes: N[] | undefined, prefix: string) {
    if (!nodes?.length) {
      return;
    }

    for (let i = 0; i < nodes.length - 1; i++) {
      const n = nodes[i];
      lines.push(`${prefix}├─ ${formatter(n)}`);
      iterator(getChildren(n), `${prefix}│  `);
    }

    const lastIndex = nodes.length - 1;
    if (lastIndex >= 0) {
      const n = nodes[lastIndex];
      lines.push(`${prefix}└─ ${formatter(n)}`);
      iterator(getChildren(n), `${prefix}   `);
    }
  }

  const treeNodes = initializer?.(input) || input;
  if (treeNodes instanceof Array) {
    iterator(treeNodes, '');
  } else {
    lines.push(formatter(treeNodes));
    iterator(getChildren(treeNodes), '');
  }
  return lines.join('\n');
}

export default ptree;