interface ExampleItem {
  id: number;
  title: string;
  description: string;
  status: 'active' | 'archived';
  createdAt: Date;
}

class BlockyDB {
  private db: IDBDatabase | null = null;
  private readonly dbName = 'blockyDB';
  private readonly version = 1;

  async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        
        // Create example items store
        if (!db.objectStoreNames.contains('items')) {
          const store = db.createObjectStore('items', { keyPath: 'id', autoIncrement: true });
          store.createIndex('status', 'status', { unique: false });
          store.createIndex('createdAt', 'createdAt', { unique: false });
          
          // Add some example data
          const sampleItems: Omit<ExampleItem, 'id'>[] = [
            {
              title: 'Design System Documentation',
              description: 'Write comprehensive documentation for the Blocky Design System components.',
              status: 'active',
              createdAt: new Date(),
            },
            {
              title: 'Component Library',
              description: 'Build and test all core components for the design system.',
              status: 'active',
              createdAt: new Date(),
            },
            {
              title: 'Old Project',
              description: 'This is an archived project from last month.',
              status: 'archived',
              createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
            },
          ];

          sampleItems.forEach(item => store.add(item));
        }
      };
    });
  }

  async getAllItems(): Promise<ExampleItem[]> {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error('Database not initialized'));
        return;
      }

      const transaction = this.db.transaction(['items'], 'readonly');
      const store = transaction.objectStore('items');
      const request = store.getAll();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  async addItem(item: Omit<ExampleItem, 'id'>): Promise<number> {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error('Database not initialized'));
        return;
      }

      const transaction = this.db.transaction(['items'], 'readwrite');
      const store = transaction.objectStore('items');
      const request = store.add(item);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result as number);
    });
  }

  async updateItem(item: ExampleItem): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error('Database not initialized'));
        return;
      }

      const transaction = this.db.transaction(['items'], 'readwrite');
      const store = transaction.objectStore('items');
      const request = store.put(item);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  async deleteItem(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error('Database not initialized'));
        return;
      }

      const transaction = this.db.transaction(['items'], 'readwrite');
      const store = transaction.objectStore('items');
      const request = store.delete(id);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }
}

export const db = new BlockyDB();
export type { ExampleItem }; 