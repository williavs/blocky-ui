import { DocSection, DocItem } from '../types/docs';

// Documentation structure
export const docSections: DocSection[] = [
  {
    title: "Getting Started",
    slug: "getting-started",
    items: [
      {
        title: "Introduction",
        slug: "introduction",
        order: 1
      },
      {
        title: "Installation",
        slug: "installation",
        order: 2
      }
    ]
  },
  {
    title: "Components",
    slug: "components",
    items: [
      {
        title: "Button",
        slug: "button",
        order: 1
      },
      {
        title: "Card",
        slug: "card",
        order: 2
      },
      {
        title: "Form Controls",
        slug: "form-controls",
        order: 3
      },
      {
        title: "Feedback",
        slug: "feedback",
        order: 4
      },
      {
        title: "Overlay",
        slug: "overlay",
        order: 5
      },
      {
        title: "Layout",
        slug: "layout",
        order: 6
      },
      {
        title: "Navigation",
        slug: "navigation",
        order: 7
      }
    ]
  },
  {
    title: "Customization",
    slug: "customization",
    items: [
      {
        title: "Theming",
        slug: "theming",
        order: 1
      },
      {
        title: "CSS Variables",
        slug: "css-variables",
        order: 2
      }
    ]
  }
];

// Function to get section and item by slug
export function getDocumentationItem(sectionSlug: string, itemSlug: string): { section: DocSection | undefined, item: DocItem | undefined } {
  const section = docSections.find(s => s.slug === sectionSlug);
  const item = section?.items.find(i => i.slug === itemSlug);
  
  return { section, item };
} 