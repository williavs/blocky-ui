import { useState, useEffect } from 'react';
import { db, type ExampleItem } from '../utils/db';
import { Button } from './Button';
import { Plus } from 'lucide-react';

export function DataExample() {
  const [items, setItems] = useState<ExampleItem[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const loadItems = async () => {
    try {
      const items = await db.getAllItems();
      setItems(items);
    } catch (error) {
      console.error('Error loading items:', error);
    }
  };

  useEffect(() => {
    db.init().then(() => {
      loadItems();
    });
  }, []);

  const handleAddItem = async () => {
    if (!newTitle.trim()) return;

    try {
      await db.addItem({
        title: newTitle,
        description: newDescription,
        status: 'active',
        createdAt: new Date(),
      });
      await loadItems();
      setNewTitle('');
      setNewDescription('');
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full px-3 py-2 border-2 border-black rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="w-full px-3 py-2 border-2 border-black rounded-md"
          />
        </div>
        <Button onClick={handleAddItem} className="w-full">
          <Plus className="w-4 h-4 mr-2" />
          Add Item
        </Button>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="p-4 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <h3 className="font-bold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-xs bg-green-100 px-2 py-1 rounded-full">
                {item.status}
              </span>
              <span className="text-xs text-gray-500">
                {new Date(item.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 