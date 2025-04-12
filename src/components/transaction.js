import { element } from "prop-types";
import Item from "./item";

import { v4 as uuidv4 } from 'uuid';

const Transaction = ()=>{
    const data = [
        {title:"ค่ารักษาพยาบาล",amount:2000}
    ]
    return (
        <ul>
            {data.map((element) =>{
                return <Item {...element} key={uuidv4()} />
            })}
        </ul>
    )
}

export default Transaction