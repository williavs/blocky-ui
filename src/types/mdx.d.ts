/// <reference types="vite/client" />
/// <reference types="@mdx-js/react" />

declare module '*.mdx' {
  import type { ComponentType } from 'react';
  import type { MDXProps } from '@mdx-js/react';
  
  export const frontmatter: {
    title: string;
    slug: string;
    order: number;
  };
  
  const MDXContent: ComponentType<MDXProps>;
  export default MDXContent;
} 