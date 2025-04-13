import './App.css';

import FormComponent from './components/formComponent';
import Transaction from './components/transaction';

import { useState } from 'react';

function App() {

  const [items,setItems] = useState([])

  const onAddNewItem = (newItem) =>{
    setItems((prevItem) =>{
      return [newItem,...prevItem]
    })
  }



  return (
    <div className="App">
      <h1>สวัสดี React</h1>
      <FormComponent onAddItem = {onAddNewItem} />
      <Transaction items = {items} />
      
    </div>
  );
}

export default App;
