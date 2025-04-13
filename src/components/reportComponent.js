import { useContext, useState } from "react";

import DataContext from "../components/dataContext"

import '../styles/reportComponent.css'

const ReportComponent=()=>{
    const { income,expense } = useContext(DataContext)

    return (
        <div>
            <div className="balance">
                <h2>ยอดคงเหลือ</h2>
                <h2>{income - expense} (บาท)</h2>
            </div>
            
            
            <h2 className="income">รายรับ : {income}</h2>
            <h2 className="expense">รายจ่าย : {expense}</h2>
          

        </div>
    )
}

export default ReportComponent