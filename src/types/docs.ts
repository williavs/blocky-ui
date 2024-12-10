export interface DocItem {
  title: string;
  slug: string;
  order: number;
}

export interface DocSection {
  title: string;
  slug: string;
  items: DocItem[];
} 