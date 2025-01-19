```javascript
// pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/hello');
      const data = await res.json();
      setData(data);
    }
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Hello, world!</h1>
      <p>This is a Next.js app. The data is: {data.message}</p>
    </div>
  );
}
```