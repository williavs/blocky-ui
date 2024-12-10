import { Link } from 'react-router-dom';
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Badge } from "../components/Badge";
import { Progress } from "../components/Progress";
import { Spinner } from "../components/Spinner";
import { ArrowRight, Blocks, Box, Palette, Zap, FileCode, Github } from 'lucide-react';
import { cn } from "../utils/cn";

export function Home() {
  return (
    <div className="space-y-24 py-12">
      {/* Hero Section */}
      <section className="text-center relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFB324]/20 rounded-full blur-3xl" />
        </div>
        <h1 className="text-6xl font-display font-bold tracking-tight mb-6 text-foreground">
          Blocky Design System
        </h1>
        <p className="text-xl text-primary-dark max-w-2xl mx-auto mb-12">
          A playful, modern design system with bold borders and crisp shadows. 
          Build beautiful interfaces with our ready-to-use components.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/docs/getting-started/introduction">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <a href="https://github.com/williavs/blocky-ui" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="group">
              View on GitHub
              <Github className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-[-2px]" />
            </Button>
          </a>
        </div>

        {/* Quick Links */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link to="/scripts" className="text-sm text-primary-dark hover:text-foreground flex items-center gap-1">
            <FileCode className="w-4 h-4" />
            Export Scripts
          </Link>
          <span className="text-primary-dark">•</span>
          <Link to="/docs/getting-started/installation" className="text-sm text-primary-dark hover:text-foreground">
            Installation Guide
          </Link>
          <span className="text-primary-dark">•</span>
          <Link to="/components" className="text-sm text-primary-dark hover:text-foreground">
            Component Library
          </Link>
        </div>

        {/* Component Preview */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 group hover:scale-105 transition-transform">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-md border-2 border-black bg-green-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-[-5deg] transition-transform">
                <Blocks className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-foreground">Components</h3>
                <p className="text-sm text-primary-dark">30+ Ready to use</p>
              </div>
            </div>
            <Progress value={75} size="sm" className="mb-2" />
            <div className="flex gap-2">
              <Badge variant="outline">New</Badge>
              <Badge>v1.0</Badge>
            </div>
          </Card>

          <Card className="p-6 group hover:scale-105 transition-transform">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-md border-2 border-black bg-green-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-[-5deg] transition-transform">
                <Palette className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-foreground">Themeable</h3>
                <p className="text-sm text-primary-dark">Customize with ease</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {['bg-green-100', 'bg-blue-100', 'bg-red-100', 'bg-yellow-100'].map((color) => (
                <div 
                  key={color}
                  className={cn(
                    "w-full h-8 rounded-md border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
                    color
                  )}
                />
              ))}
            </div>
          </Card>

          <Card className="p-6 group hover:scale-105 transition-transform">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-md border-2 border-black bg-green-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-[-5deg] transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-foreground">Fast</h3>
                <p className="text-sm text-primary-dark">Zero-config setup</p>
              </div>
            </div>
            <div className="flex items-center justify-around">
              <Spinner variant="blocks" />
              <Spinner variant="circle" />
              <Spinner variant="dots" />
            </div>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6 text-foreground">
              Beautiful & Accessible Components
            </h2>
            <p className="text-lg text-primary-dark mb-8">
              Our components are built with accessibility in mind, ensuring your applications 
              are usable by everyone. Each component comes with proper ARIA attributes and 
              keyboard navigation support.
            </p>
            <Link to="/components">
              <Button variant="outline" size="lg" className="group">
                Browse Components
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green-100 rounded-full blur-3xl opacity-50" />
            </div>
            <Card className="p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-black bg-[#FFB324] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
                <div className="flex-1">
                  <div className="h-2 w-24 bg-black rounded-full" />
                  <div className="h-2 w-32 bg-black/20 rounded-full mt-2" />
                </div>
              </div>
              <Progress value={65} />
              <div className="flex gap-2">
                <Button size="sm">Action</Button>
                <Button size="sm" variant="outline">Cancel</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <Card className="max-w-3xl mx-auto p-12 bg-[#FFB324]/10">
          <h2 className="text-4xl font-display font-bold mb-6 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-dark mb-8 max-w-xl mx-auto">
            Join the growing community of developers building beautiful interfaces 
            with Blocky Design System.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/docs/getting-started/installation">
              <Button size="lg" className="group">
                Install Now
                <Box className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-[-2px]" />
              </Button>
            </Link>
            <Link to="/docs/getting-started/introduction">
              <Button size="lg" variant="outline">
                Read Docs
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  );
} 