"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = Home;
var Button_1 = require("../components/Button");
var Card_1 = require("../components/Card");
var Badge_1 = require("../components/Badge");
var Progress_1 = require("../components/Progress");
var Spinner_1 = require("../components/Spinner");
var lucide_react_1 = require("lucide-react");
var cn_1 = require("../utils/cn");
function Home() {
    return (<div className="space-y-24 py-12">
      {/* Hero Section */}
      <section className="text-center relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFB324]/20 rounded-full blur-3xl"/>
        </div>
        <h1 className="text-6xl font-display font-bold tracking-tight mb-6">
          Blocky Design System
        </h1>
        <p className="text-xl text-green-900 max-w-2xl mx-auto mb-12">
          A playful, modern design system with bold borders and crisp shadows. 
          Build beautiful interfaces with our ready-to-use components.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button_1.Button size="lg" className="group">
            Get Started
            <lucide_react_1.ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"/>
          </Button_1.Button>
          <Button_1.Button size="lg" variant="outline">
            View on GitHub
          </Button_1.Button>
        </div>

        {/* Component Preview */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card_1.Card className="p-6 group hover:scale-105 transition-transform">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-md border-2 border-black bg-green-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-[-5deg] transition-transform">
                <lucide_react_1.Blocks className="w-6 h-6"/>
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold">Components</h3>
                <p className="text-sm text-green-900">30+ Ready to use</p>
              </div>
            </div>
            <Progress_1.Progress value={75} size="sm" className="mb-2"/>
            <div className="flex gap-2">
              <Badge_1.Badge variant="outline">New</Badge_1.Badge>
              <Badge_1.Badge>v1.0</Badge_1.Badge>
            </div>
          </Card_1.Card>

          <Card_1.Card className="p-6 group hover:scale-105 transition-transform">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-md border-2 border-black bg-green-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-[-5deg] transition-transform">
                <lucide_react_1.Palette className="w-6 h-6"/>
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold">Themeable</h3>
                <p className="text-sm text-green-900">Customize with ease</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {['bg-green-100', 'bg-blue-100', 'bg-red-100', 'bg-yellow-100'].map(function (color) { return (<div key={color} className={(0, cn_1.cn)("w-full h-8 rounded-md border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]", color)}/>); })}
            </div>
          </Card_1.Card>

          <Card_1.Card className="p-6 group hover:scale-105 transition-transform">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-md border-2 border-black bg-green-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-[-5deg] transition-transform">
                <lucide_react_1.Zap className="w-6 h-6"/>
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold">Fast</h3>
                <p className="text-sm text-green-900">Zero-config setup</p>
              </div>
            </div>
            <div className="flex items-center justify-around">
              <Spinner_1.Spinner variant="blocks"/>
              <Spinner_1.Spinner variant="circle"/>
              <Spinner_1.Spinner variant="dots"/>
            </div>
          </Card_1.Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">
              Beautiful & Accessible Components
            </h2>
            <p className="text-lg text-green-900 mb-8">
              Our components are built with accessibility in mind, ensuring your applications 
              are usable by everyone. Each component comes with proper ARIA attributes and 
              keyboard navigation support.
            </p>
            <Button_1.Button variant="outline" size="lg" className="group">
              Browse Components
              <lucide_react_1.ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"/>
            </Button_1.Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green-100 rounded-full blur-3xl opacity-50"/>
            </div>
            <Card_1.Card className="p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-black bg-[#FFB324] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"/>
                <div className="flex-1">
                  <div className="h-2 w-24 bg-black rounded-full"/>
                  <div className="h-2 w-32 bg-black/20 rounded-full mt-2"/>
                </div>
              </div>
              <Progress_1.Progress value={65}/>
              <div className="flex gap-2">
                <Button_1.Button size="sm">Action</Button_1.Button>
                <Button_1.Button size="sm" variant="outline">Cancel</Button_1.Button>
              </div>
            </Card_1.Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <Card_1.Card className="max-w-3xl mx-auto p-12 bg-[#FFB324]/10">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-green-900 mb-8 max-w-xl mx-auto">
            Join the growing community of developers building beautiful interfaces 
            with Blocky Design System.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button_1.Button size="lg" className="group">
              Install Now
              <lucide_react_1.Box className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-[-2px]"/>
            </Button_1.Button>
            <Button_1.Button size="lg" variant="outline">
              Read Docs
            </Button_1.Button>
          </div>
        </Card_1.Card>
      </section>
    </div>);
}
