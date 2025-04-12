import { useState } from 'react'

import '../styles/formComponent.css'

const FormComponent = ()=>{

    const [title,setTiltle] = useState('')
    const [amount,setAmount] = useState(0)

    const inputTitle = (event)=>{
        setTiltle(event.target.value)
    }

    const inputAmout = (event)=>{
        setAmount(event.target.value)
    }

    const saveItem =(event)=>{
        event.preventDefault()
        const itemData = {
            title:title,
            amount:Number(amount)
        }
        
        console.log(itemData);

        setTiltle('')
        setAmount(0)
    }

    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title} />
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="ระบุจำนวนเงิน" onChange={inputAmout} value={amount} />
                </div>
                <div>
                    <button type="submit" className="btn">เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent