import { Button } from '../components/Button';
import { TextArea } from '../components/TextArea';
import { Input } from '../components/Input';
import { Checkbox } from '../components/Checkbox';
import { Radio } from '../components/Radio';
import { Switch } from '../components/Switch';
import { Progress } from '../components/Progress';
import { Spinner } from '../components/Spinner';
import { Tabs } from '../components/Tabs';
import { ComboBox } from '../components/ComboBox';
import { Modal } from '../components/Modal';
import { Toast } from '../components/Toast';
import { Tooltip } from '../components/Tooltip';
import { Badge } from '../components/Badge';
import { Card } from '../components/Card';
import { useState } from 'react';

const tabs = [
  {
    label: 'Form Controls',
    content: (
      <div className="p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <h2 className="text-2xl font-display font-bold">Form Controls</h2>
            <p className="text-muted-foreground">Input components for collecting user data.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Text Inputs */}
            <div className="space-y-4">
              <h3 className="text-lg font-display font-bold">Text Inputs</h3>
              <div className="p-4 border-2 border-border rounded-lg bg-card space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Default Input</label>
                  <Input placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Large TextArea</label>
                  <TextArea placeholder="Write your message..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">ComboBox</label>
                  <ComboBox
                    options={[
                      { label: 'Option 1', value: '1' },
                      { label: 'Option 2', value: '2' },
                      { label: 'Option 3', value: '3' },
                    ]}
                    placeholder="Select an option"
                  />
                </div>
              </div>
            </div>

            {/* Toggle Controls */}
            <div className="space-y-4">
              <h3 className="text-lg font-display font-bold">Toggle Controls</h3>
              <div className="p-4 border-2 border-border rounded-lg bg-card space-y-4">
                <div className="flex items-center gap-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm font-medium">
                    Accept terms and conditions
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Switch id="notifications" />
                  <label htmlFor="notifications" className="text-sm font-medium">
                    Enable notifications
                  </label>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Radio name="size" value="small" defaultChecked />
                    <label className="text-sm font-medium">Small</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio name="size" value="medium" />
                    <label className="text-sm font-medium">Medium</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio name="size" value="large" />
                    <label className="text-sm font-medium">Large</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Buttons',
    content: (
      <div className="p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <h2 className="text-2xl font-display font-bold">Buttons</h2>
            <p className="text-muted-foreground">Interactive button components for user actions.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Button Variants */}
            <div className="space-y-4">
              <h3 className="text-lg font-display font-bold">Button Variants</h3>
              <div className="p-4 border-2 border-border rounded-lg bg-card">
                <div className="space-y-4">
                  <Button className="w-full">Default Button</Button>
                  <Button variant="outline" className="w-full">
                    Outline Button
                  </Button>
                  <Button variant="ghost" className="w-full">
                    Ghost Button
                  </Button>
                  <Button variant="download" className="w-full">
                    Download Button
                  </Button>
                </div>
              </div>
            </div>

            {/* Button Sizes */}
            <div className="space-y-4">
              <h3 className="text-lg font-display font-bold">Button Sizes</h3>
              <div className="p-4 border-2 border-border rounded-lg bg-card">
                <div className="flex flex-wrap gap-4">
                  <Button size="sm">Small</Button>
                  <Button>Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Feedback',
    content: (
      <div className="p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <h2 className="text-2xl font-display font-bold">Feedback</h2>
            <p className="text-muted-foreground">Components for providing feedback to users.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Progress Indicators */}
            <div className="space-y-4">
              <h3 className="text-lg font-display font-bold">Progress</h3>
              <div className="p-4 border-2 border-border rounded-lg bg-card">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Uploading...</span>
                      <span className="text-muted-foreground">35%</span>
                    </div>
                    <Progress value={35} className="w-full" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Processing...</span>
                      <span className="text-muted-foreground">65%</span>
                    </div>
                    <Progress value={65} className="w-full" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Completing...</span>
                      <span className="text-muted-foreground">90%</span>
                    </div>
                    <Progress value={90} className="w-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Loading States */}
            <div className="space-y-4">
              <h3 className="text-lg font-display font-bold">Loading</h3>
              <div className="p-4 border-2 border-border rounded-lg bg-card">
                <div className="space-y-6">
                  <div className="flex items-center justify-around">
                    <div className="text-center">
                      <Spinner size="sm" />
                      <p className="text-sm mt-2 text-muted-foreground">Small</p>
                    </div>
                    <div className="text-center">
                      <Spinner />
                      <p className="text-sm mt-2 text-muted-foreground">Default</p>
                    </div>
                    <div className="text-center">
                      <Spinner size="lg" />
                      <p className="text-sm mt-2 text-muted-foreground">Large</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Button className="w-full" isLoading>
                      Loading...
                    </Button>
                    <Button variant="outline" className="w-full" isLoading>
                      Saving Changes...
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Overlay & Interactive',
    content: (
      <div className="p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <h2 className="text-2xl font-display font-bold">Overlay & Interactive</h2>
            <p className="text-muted-foreground">Components that appear above the page content.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Modal & Toast */}
            <div className="space-y-4">
              <h3 className="text-lg font-display font-bold">Dialogs</h3>
              <div className="p-4 border-2 border-border rounded-lg bg-card">
                <div className="space-y-4">
                  <ModalExample />
                  <ToastExample />
                </div>
              </div>
            </div>

            {/* Tooltips & Badges */}
            <div className="space-y-4">
              <h3 className="text-lg font-display font-bold">Tooltips & Badges</h3>
              <div className="p-4 border-2 border-border rounded-lg bg-card">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Tooltip content={<span className="text-gray-900">This is a tooltip</span>}>
                      <Button variant="outline">Hover me</Button>
                    </Tooltip>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="error">Error</Badge>
                    <Badge variant="default">Primary</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4">Cards</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="text-lg font-display font-bold mb-2">Basic Card</h4>
                <p className="text-muted-foreground mb-4">A simple card with some content.</p>
                <Button variant="outline" size="sm">Learn More</Button>
              </Card>
              <Card className="p-6 bg-primary">
                <h4 className="text-lg font-display font-bold mb-2 text-gray-900">Featured Card</h4>
                <p className="text-gray-900/80 mb-4">A card with primary background.</p>
                <Button size="sm" className="text-gray-900">Get Started</Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

// Example components for Modal and Toast
function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Example Modal"
      >
        <div className="space-y-4">
          <div className="text-gray-900">
            <h3 className="text-lg font-semibold mb-2">Example Modal</h3>
            <p>This is an example modal dialog.</p>
          </div>
          <div className="flex justify-end gap-2">
            <Button 
              variant="outline" 
              onClick={() => setIsOpen(false)}
              className="text-gray-900"
            >
              Cancel
            </Button>
            <Button 
              onClick={() => setIsOpen(false)}
              className="text-gray-900"
            >
              Confirm
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

function ToastExample() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="relative">
      <Button 
        variant="outline"
        onClick={() => setIsVisible(true)}
      >
        Show Toast
      </Button>
      {isVisible && (
        <div className="absolute top-16 left-0 right-0">
          <Toast
            variant="success"
            onClose={() => setIsVisible(false)}
          >
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Success</p>
              <p className="text-sm">Your changes have been saved.</p>
            </div>
          </Toast>
        </div>
      )}
    </div>
  );
}

export function Components() {
  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-5xl font-display font-bold tracking-tight">
            Components
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our collection of beautiful and accessible components
          </p>
        </div>

        <Tabs tabs={tabs} />
      </div>
    </div>
  );
} 