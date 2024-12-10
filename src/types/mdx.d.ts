/// <reference types="vite/client" />
/// <reference types="@mdx-js/react" />

declare module '*.mdx' {
  import type { ComponentProps, ComponentType } from 'react';

  export const frontmatter: {
    title: string;
    description: string;
    [key: string]: any;
  };

  const MDXComponent: ComponentType<ComponentProps<'div'>>;
  export default MDXComponent;
} 