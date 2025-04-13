import { element } from 'prop-types';
import './App.css';

import FormComponent from './components/formComponent';
import Transaction from './components/transaction';
import ReportComponent from './components/reportComponent';
import DataContext from './components/dataContext';

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
    const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1
    
    console.log("รายได้ = ",income)
    console.log("รายจ่าย = ",expense)

    setReportIncome(income)
    setReportExpense(expense)
  },[items,reportIncome,reportExpense])

  return (
      <DataContext.Provider value={
        {
          income: reportIncome,
          expense: reportExpense
        }
      }>

        <div className="App">

          <h1 className='header'>รายรับ - รายจ่าย</h1>
          <ReportComponent />
          <FormComponent onAddItem = {onAddNewItem} />
          <Transaction items = {items} />
        
        </div>

      </DataContext.Provider>

  );
}

export default App;
