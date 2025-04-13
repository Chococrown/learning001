import './App.css';

import FormComponent from './components/formComponent';
import Transaction from './components/transaction';

import { useState,useEffect } from 'react';

function App() {

  const [items,setItems] = useState([])

  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)

  const onAddNewItem = (newItem) =>{
    setItems((prevItem) =>{
      return [newItem,...prevItem]
    })
  }

  useEffect(() =>{
    const amounts = items.map(items=>items.amount)
  },[items])

  return (
    <div className="App">
      <h1>สวัสดี React</h1>
      <FormComponent onAddItem = {onAddNewItem} />
      <Transaction items = {items} />
      
    </div>
  );
}

export default App;
