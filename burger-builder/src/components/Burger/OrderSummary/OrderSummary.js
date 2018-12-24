import React from 'react';
import Aux from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';    

const orderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients).map(ingKey => {
        return (<li key = {ingKey}>
                    <span style = {{textTransform: 'capitalize'}}>{ingKey}</span> : {props.ingredients[ingKey]}
                </li>)
    })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredients}
            </ul>
            <p><strong>Total price: {props.price.toFixed(2)} </strong></p>
            <p>Continue to checkout?</p>
            <Button btnType = "Danger" clicked = {props.purchaseCancelled}>CANCEL</Button>
            <Button btnType = "Success" clicked = {props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;