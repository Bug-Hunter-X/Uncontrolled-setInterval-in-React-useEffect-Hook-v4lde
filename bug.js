```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval inside useEffect without cleanup
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }, []); // Empty dependency array means it runs only once, but never stops

  return <div>Count: {count}</div>;
}
```