import { useEffect, useState } from 'react';
import { db, type ExampleItem } from '../utils/db';
import { Card } from './Card';
import { Button } from './Button';
import { Badge } from './Badge';
import { Input } from './Input';
import { Plus, Trash2 } from 'lucide-react';
import { cn } from '../utils/cn';

export function DataExample() {
  const [items, setItems] = useState<ExampleItem[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initDB = async () => {
      try {
        await db.init();
        const items = await db.getAllItems();
        setItems(items);
      } catch (error) {
        console.error('Failed to initialize DB:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initDB();
  }, []);

  const addItem = async () => {
    if (!newTitle.trim()) return;

    try {
      const id = await db.addItem({
        title: newTitle,
        description: newDescription,
        status: 'active',
        createdAt: new Date(),
      });

      const items = await db.getAllItems();
      setItems(items);
      setNewTitle('');
      setNewDescription('');
    } catch (error) {
      console.error('Failed to add item:', error);
    }
  };

  const deleteItem = async (id: number) => {
    try {
      await db.deleteItem(id);
      setItems(items.filter(item => item.id !== id));
    } catch (error) {
      console.error('Failed to delete item:', error);
    }
  };

  const toggleStatus = async (item: ExampleItem) => {
    try {
      const newStatus: 'active' | 'archived' = item.status === 'active' ? 'archived' : 'active';
      const updatedItem: ExampleItem = {
        ...item,
        status: newStatus,
      };
      await db.updateItem(updatedItem);
      setItems(items.map(i => i.id === item.id ? updatedItem : i));
    } catch (error) {
      console.error('Failed to update item:', error);
    }
  };

  if (isLoading) {
    return <div className="animate-pulse">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 space-y-4">
        <h3 className="font-display font-bold text-lg">Add New Item</h3>
        <div className="space-y-3">
          <Input
            placeholder="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <Input
            placeholder="Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <Button onClick={addItem} className="w-full">
            <Plus className="w-4 h-4 mr-2" />
            Add Item
          </Button>
        </div>
      </Card>

      <div className="space-y-4">
        {items.map((item) => (
          <Card
            key={item.id}
            className={cn(
              "p-4 transition-all",
              item.status === 'archived' && "opacity-75"
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-semibold">{item.title}</h3>
                  <Badge
                    variant={item.status === 'active' ? 'success' : 'outline'}
                    className="cursor-pointer"
                    onClick={() => toggleStatus(item)}
                  >
                    {item.status}
                  </Badge>
                </div>
                <p className="text-sm text-green-900">{item.description}</p>
                <p className="text-xs text-green-900/60">
                  Created: {new Date(item.createdAt).toLocaleDateString()}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="text-red-500 hover:text-red-600"
                onClick={() => deleteItem(item.id)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 