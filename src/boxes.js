
import React from "react";
import { useState, useEffect} from 'react';
export function Boxes() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/photos?_limit=20")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, []);
  
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <div style  ={{ display: "flex", flexWrap: 'wrap'}}>
          {items.map(item => (
           <img style ={{width: '100px',}} key ={item.id} src= {item.url} alt= ''></img>
          ))}
        </div>
      );
    }
  }