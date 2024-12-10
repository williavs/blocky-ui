import { Suspense, useState, createElement, lazy } from 'react';
import { cn } from "../utils/cn";
import { ChevronRight } from "lucide-react";
import { docSections } from '../utils/docs';
import { MDXProvider } from '@mdx-js/react';
import { MDXComponents } from '../components/MDXComponents';

function LoadingState() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Title skeleton */}
      <div className="space-y-4">
        <div className="h-8 bg-primary/40 rounded-lg w-2/3" />
        <div className="h-4 bg-primary/30 rounded w-1/3" />
      </div>

      {/* Content sections */}
      {[...Array(3)].map((_, i) => (
        <div key={i} className="space-y-6">
          {/* Section heading */}
          <div className="h-6 bg-primary/40 rounded w-1/4" />
          
          {/* Paragraphs */}
          <div className="space-y-3">
            <div className="h-4 bg-primary/30 rounded w-full" />
            <div className="h-4 bg-primary/30 rounded w-[95%]" />
            <div className="h-4 bg-primary/30 rounded w-[90%]" />
          </div>

          {/* Code block */}
          <div className="rounded-lg border-2 border-border p-4 space-y-2">
            <div className="h-4 bg-primary/20 rounded w-[80%]" />
            <div className="h-4 bg-primary/20 rounded w-[70%]" />
            <div className="h-4 bg-primary/20 rounded w-[75%]" />
          </div>
        </div>
      ))}
    </div>
  );
}

function ErrorState({ error }: { error: Error }) {
  return (
    <div className="p-4 border-2 border-destructive rounded-lg bg-destructive/10 animate-in fade-in duration-300">
      <h2 className="text-destructive-foreground font-bold mb-2">Error Loading Documentation</h2>
      <div className="text-destructive-foreground">{error.message}</div>
    </div>
  );
}

export function Documentation() {
  const [activeSection, setActiveSection] = useState(docSections[0].slug);
  const [activeItem, setActiveItem] = useState(docSections[0].items[0].slug);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Add a small artificial delay for smoother transitions
  const handleNavigation = async (section: string, item: string) => {
    setIsLoading(true);
    setActiveSection(section);
    setActiveItem(item);
    setError(null);
    // Small delay to ensure loading state is visible
    await new Promise(resolve => setTimeout(resolve, 300));
    setIsLoading(false);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <div className="w-64 border-r-2 border-border bg-card overflow-y-auto">
        <div className="pt-20 px-4 pb-4">
          <h2 className="font-display font-bold text-lg mb-6">Documentation</h2>
          <nav className="space-y-8">
            {docSections.map((section) => (
              <div key={section.slug}>
                <h3 className="font-display font-bold text-sm uppercase text-foreground/60 mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items
                    .sort((a, b) => a.order - b.order)
                    .map((item) => (
                      <li key={item.slug}>
                        <button
                          onClick={() => handleNavigation(section.slug, item.slug)}
                          className={cn(
                            "flex items-center w-full px-2 py-1.5 rounded-md text-sm group transition-all duration-200",
                            activeSection === section.slug && activeItem === item.slug
                              ? "font-medium bg-primary text-foreground"
                              : "hover:bg-primary/50"
                          )}
                        >
                          <ChevronRight 
                            className={cn(
                              "w-4 h-4 mr-1 transition-transform duration-200",
                              activeSection === section.slug && activeItem === item.slug
                                ? "transform rotate-90"
                                : "opacity-0 group-hover:opacity-100"
                            )} 
                          />
                          {item.title}
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto py-16 px-8">
          <MDXProvider components={{ ...MDXComponents, wrapper: ({ children }) => children }}>
            <article className="prose prose-green dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-pre:bg-card prose-pre:border-2 prose-pre:border-border prose-pre:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:prose-pre:shadow-[4px_4px_0px_0px_rgba(134,239,172,0.25)] max-w-none">
              {isLoading ? (
                <LoadingState />
              ) : error ? (
                <ErrorState error={error} />
              ) : (
                <div className="animate-in fade-in duration-500">
                  <Suspense fallback={<LoadingState />}>
                    {createElement(
                      lazy(() =>
                        import(`../content/docs/${activeSection}/${activeItem}.mdx`).catch(
                          (err) => {
                            setError(err);
                            return { default: () => null };
                          }
                        )
                      )
                    )}
                  </Suspense>
                </div>
              )}
            </article>
          </MDXProvider>
        </div>
      </div>
    </div>
  );
} 