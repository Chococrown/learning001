import PropTypes from "prop-types";

import '../styles/item.css'


const Item = (props) =>{

    const {title,amount} = props

    const status = amount < 0 ? "expense" : "income"

    const symbol = amount < 0 ? "-" : "+"

    return (
        <li className={status}> {title} <span> {symbol} {Math.abs(amount)} </span> </li>
    )

    Item.prototype={
        title:PropTypes.string.isRequired,
        amout:PropTypes.number.isRequired
    }
}

export default Item