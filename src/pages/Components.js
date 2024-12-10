"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Components = Components;
var react_1 = require("react");
var Tabs_1 = require("../components/Tabs");
var Button_1 = require("../components/Button");
var TextArea_1 = require("../components/TextArea");
var Checkbox_1 = require("../components/Checkbox");
var Radio_1 = require("../components/Radio");
var Switch_1 = require("../components/Switch");
var Select_1 = require("../components/Select");
var Progress_1 = require("../components/Progress");
var Spinner_1 = require("../components/Spinner");
var Skeleton_1 = require("../components/Skeleton");
var Toast_1 = require("../components/Toast");
var Modal_1 = require("../components/Modal");
var Tooltip_1 = require("../components/Tooltip");
var Dropdown_1 = require("../components/Dropdown");
var lucide_react_1 = require("lucide-react");
var DataExample_1 = require("../components/DataExample");
function Components() {
    var _a = (0, react_1.useState)("buttons"), activeTab = _a[0], setActiveTab = _a[1];
    var _b = (0, react_1.useState)(false), showToast = _b[0], setShowToast = _b[1];
    var _c = (0, react_1.useState)(false), showModal = _c[0], setShowModal = _c[1];
    var _d = (0, react_1.useState)(""), status = _d[0], setStatus = _d[1];
    var _e = (0, react_1.useState)(""), priority = _e[0], setPriority = _e[1];
    var _f = (0, react_1.useState)(""), category = _f[0], setCategory = _f[1];
    var sections = [
        {
            label: 'Form Controls',
            content: (<div className="p-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h2 className="text-2xl font-display font-bold">Form Controls</h2>
              <p className="text-green-900">Input elements with our signature blocky style.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* TextArea */}
              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold">Text Input</h3>
                <TextArea_1.TextArea label="Message" placeholder="Type your message here..."/>
              </div>

              {/* Select */}
              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold">Select</h3>
                <Select_1.Select label="Status" value={status} onChange={setStatus} options={[
                    { value: "active", label: "Active" },
                    { value: "inactive", label: "Inactive" },
                    { value: "pending", label: "Pending" }
                ]} placeholder="Select status..."/>
                <p className="text-sm text-green-900">
                  Selected: {status || 'None'}
                </p>
              </div>

              {/* Example with error state */}
              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold">Select with Error</h3>
                <Select_1.Select label="Priority" value={priority} onChange={setPriority} options={[
                    { value: "low", label: "Low Priority" },
                    { value: "medium", label: "Medium Priority" },
                    { value: "high", label: "High Priority" }
                ]} error={!priority ? "Please select a priority level" : undefined} placeholder="Select priority..."/>
                <p className="text-sm text-green-900">
                  Selected: {priority || 'None'}
                </p>
              </div>

              {/* Checkbox */}
              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold">Checkbox</h3>
                <div className="space-y-2">
                  <Checkbox_1.Checkbox label="Default checkbox"/>
                  <Checkbox_1.Checkbox label="Checked checkbox" defaultChecked/>
                </div>
              </div>

              {/* Radio */}
              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold">Radio</h3>
                <div className="space-y-2">
                  <Radio_1.Radio name="demo" label="Option 1"/>
                  <Radio_1.Radio name="demo" label="Option 2"/>
                </div>
              </div>

              {/* Switch */}
              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold">Switch</h3>
                <div className="space-y-2">
                  <Switch_1.Switch label="Default switch"/>
                  <Switch_1.Switch label="Checked switch" defaultChecked/>
                </div>
              </div>
            </div>
          </div>
        </div>),
        },
        {
            label: 'Buttons',
            content: (<div className="p-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h2 className="text-2xl font-display font-bold">Buttons</h2>
              <p className="text-green-900">Various button styles and states.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold">Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Button_1.Button>Default</Button_1.Button>
                  <Button_1.Button variant="outline">Outline</Button_1.Button>
                  <Button_1.Button variant="ghost">Ghost</Button_1.Button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold">Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button_1.Button size="sm">Small</Button_1.Button>
                  <Button_1.Button>Default</Button_1.Button>
                  <Button_1.Button size="lg">Large</Button_1.Button>
                </div>
              </div>
            </div>
          </div>
        </div>),
        },
        {
            label: 'Feedback',
            content: (<div className="p-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h2 className="text-2xl font-display font-bold">Feedback</h2>
              <p className="text-green-900">Components for providing feedback to users.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Progress */}
              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold">Progress</h3>
                <div className="space-y-2">
                  <Progress_1.Progress value={75} className="w-full"/>
                  <Progress_1.Progress value={50} variant="success" className="w-full"/>
                </div>
              </div>

              {/* Spinners */}
              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold">Spinners</h3>
                <div className="flex gap-8">
                  <Spinner_1.Spinner />
                  <Spinner_1.Spinner variant="dots"/>
                  <Spinner_1.Spinner variant="blocks"/>
                </div>
              </div>

              {/* Toast */}
              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold">Toast</h3>
                <Button_1.Button onClick={function () { return setShowToast(true); }}>Show Toast</Button_1.Button>
              </div>

              {/* Modal */}
              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold">Modal</h3>
                <Button_1.Button onClick={function () { return setShowModal(true); }}>Open Modal</Button_1.Button>
              </div>
            </div>
          </div>
        </div>),
        },
        {
            label: 'Overlay',
            content: (<div className="p-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h2 className="text-2xl font-display font-bold">Overlay</h2>
              <p className="text-green-900">Components that appear above other content.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Tooltip */}
              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold">Tooltip</h3>
                <div className="flex flex-wrap gap-4">
                  <Tooltip_1.Tooltip content="Default tooltip">
                    <Button_1.Button variant="outline">Hover me</Button_1.Button>
                  </Tooltip_1.Tooltip>
                  <Tooltip_1.Tooltip content="Right tooltip" position="right">
                    <Button_1.Button variant="outline">Right</Button_1.Button>
                  </Tooltip_1.Tooltip>
                </div>
              </div>

              {/* Dropdown */}
              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold">Dropdown</h3>
                <div className="flex flex-wrap gap-4">
                  <Dropdown_1.Dropdown trigger={<Button_1.Button variant="outline" className="gap-2">
                        Menu
                        <lucide_react_1.ChevronDown className="w-4 h-4"/>
                      </Button_1.Button>} items={[
                    { label: "Profile", onClick: function () { } },
                    { label: "Settings", onClick: function () { } },
                    { label: "Logout", onClick: function () { } },
                ]}/>
                </div>
              </div>
            </div>
          </div>
        </div>),
        },
        {
            label: 'Loading States',
            content: (<div className="p-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h2 className="text-2xl font-display font-bold">Loading States</h2>
              <p className="text-green-900">Components for showing loading and placeholder states.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Skeleton Text */}
              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold">Text Skeleton</h3>
                <div className="space-y-4">
                  <Skeleton_1.Skeleton />
                  <Skeleton_1.Skeleton lines={3}/>
                </div>
              </div>

              {/* Skeleton Shapes */}
              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold">Shape Variants</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Skeleton_1.Skeleton variant="avatar"/>
                  <Skeleton_1.Skeleton variant="button"/>
                </div>
              </div>

              {/* Skeleton Card */}
              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold">Card Skeleton</h3>
                <Skeleton_1.Skeleton variant="card"/>
              </div>

              {/* Skeleton Image */}
              <div className="space-y-4">
                <h3 className="text-lg font-display font-bold">Image Skeleton</h3>
                <Skeleton_1.Skeleton variant="image"/>
              </div>

              {/* Common Patterns */}
              <div className="space-y-4 lg:col-span-2">
                <h3 className="text-lg font-display font-bold">Common Patterns</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Profile Card Loading */}
                  <div className="p-4 border-2 border-black rounded-lg bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex gap-4">
                      <Skeleton_1.Skeleton variant="avatar"/>
                      <div className="flex-1">
                        <Skeleton_1.Skeleton className="w-1/3 mb-2"/>
                        <Skeleton_1.Skeleton lines={2}/>
                      </div>
                    </div>
                  </div>

                  {/* Content Card Loading */}
                  <div className="p-4 border-2 border-black rounded-lg bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Skeleton_1.Skeleton variant="image" className="h-32 mb-4"/>
                    <Skeleton_1.Skeleton className="w-2/3 mb-2"/>
                    <Skeleton_1.Skeleton lines={2}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>),
        },
        {
            label: 'Data Management',
            content: (<div className="p-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h2 className="text-2xl font-display font-bold">Data Management</h2>
              <p className="text-green-900">Example of data management with IndexedDB.</p>
            </div>
            
            <div className="space-y-6">
              <div className="p-4 border-2 border-black rounded-lg bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <DataExample_1.DataExample />
              </div>
            </div>
          </div>
        </div>),
        },
    ];
    return (<div className="min-h-screen flex flex-col">
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-5xl font-display font-bold tracking-tight">
            Components
          </h1>
          <p className="text-green-900 text-lg max-w-2xl mx-auto">
            Explore our collection of beautiful and accessible components
          </p>
        </div>

        <Tabs_1.Tabs tabs={sections}/>
      </div>

      <footer className="border-t-2 border-black bg-white py-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-green-900">
              Built with ❤️ using our blocky design system
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-green-900 hover:text-green-800 transition-colors">
                GitHub
              </a>
              <a href="/docs" className="text-sm text-green-900 hover:text-green-800 transition-colors">
                Documentation
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Global Toast Container */}
      <div className="fixed bottom-4 right-4 left-4 flex flex-col gap-2 z-50 pointer-events-none">
        {showToast && (<Toast_1.Toast variant="success" onClose={function () { return setShowToast(false); }} className="pointer-events-auto w-full max-w-xl mx-auto">
            <p className="font-medium">Success!</p>
            <p className="text-sm">Your action has been completed.</p>
          </Toast_1.Toast>)}
      </div>

      {/* Global Modal */}
      <Modal_1.Modal isOpen={showModal} onClose={function () { return setShowModal(false); }} title="Example Modal">
        <div className="space-y-4">
          <p>This is an example modal with our blocky design style!</p>
          <div className="flex justify-end gap-3">
            <Button_1.Button variant="outline" onClick={function () { return setShowModal(false); }}>
              Cancel
            </Button_1.Button>
            <Button_1.Button onClick={function () { return setShowModal(false); }}>
              Confirm
            </Button_1.Button>
          </div>
        </div>
      </Modal_1.Modal>
    </div>);
}
