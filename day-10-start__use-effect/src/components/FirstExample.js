import React, { useState, useEffect } from "react";

const FirstExample = () => {
  const [resourceType, setResourceType] = useState("albums");
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("resource type changed");
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((jsonData) => {
        console.log("jsonData", jsonData);
        setItems(jsonData);
      });
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("albums")}>Albums</button>
        <button onClick={() => setResourceType("photos")}>photos</button>
        <button onClick={() => setResourceType("todos")}>todos</button>
      </div>
      <div>
        <h1>{resourceType}</h1>

        {items.map((item) => {
          return (
            <ul key={item.id}>
              <li>{item.id}</li>
              <li>{item.title}</li>
              <li>
                {item.url && (
                  <img
                    src={item.url}
                    style={{ height: "60px" }}
                    alt={item.title}
                  />
                )}
              </li>
            </ul>
          );
        })}
      </div>
      ;
    </>
  );
};

export default FirstExample;

//jsonplaceholder.typicode.com
