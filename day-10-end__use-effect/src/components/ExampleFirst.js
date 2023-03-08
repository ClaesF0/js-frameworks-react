import React, {useState, useEffect} from 'react';

// Watching a variable
const ExampleFirst = () => {
  const [resourceType, setResourceType] = useState('albums');
  const [items, setItems] = useState([]);

  useEffect(() => { // this use effect will only render when the resourceType changes
    console.log("resource type changed");
  }, [resourceType]);


  useEffect(() => { // this use effect will only render when the resourceType changes
    console.log("resource type changed make an api call");
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`,)
      .then(response => response.json())
      .then(json => console.log(json))
  }, [resourceType]);

  useEffect(() => { // this use effect will only render when the resourceType changes
    console.log("resource type changed make an api call");
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`,)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType]);


  useEffect(() => { // this use effect will only render once when the component mount
    console.log("onMount");
  }, []);


  return (
    <>
      <div>
        <button onClick={() => setResourceType("albums")}>Albums</button>
        <button onClick={() => setResourceType("photos")}>Photos</button>
        <button onClick={() => setResourceType("todos")}>Todos</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return (
          <pre key={item.id}>{JSON.stringify(item)}</pre>
        )
      })}
    </>
  );
};

export default ExampleFirst;
