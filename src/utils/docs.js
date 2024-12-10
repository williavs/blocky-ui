"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docSections = void 0;
exports.getDocumentationItem = getDocumentationItem;
// Documentation structure
exports.docSections = [
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
function getDocumentationItem(sectionSlug, itemSlug) {
    var section = exports.docSections.find(function (s) { return s.slug === sectionSlug; });
    var item = section === null || section === void 0 ? void 0 : section.items.find(function (i) { return i.slug === itemSlug; });
    return { section: section, item: item };
}
