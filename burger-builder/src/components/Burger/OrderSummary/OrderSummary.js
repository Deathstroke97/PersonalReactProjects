import React, {Component} from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import Button from '../../UI/Button/Button';    

class OrderSummary extends Component {
    
    componentWillUnmount() {
        console.log('[OrderSummary] WillUpdate');
    }


    render() {
        
        const ingredients = Object.keys(this.props.ingredients).map(ingKey => {
            return (<li key = {ingKey}>
                        <span style = {{textTransform: 'capitalize'}}>{ingKey}</span> : {this.props.ingredients[ingKey]}
                    </li>)
        })

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients: </p>
                <ul>
                    {ingredients}
                </ul>
                <p><strong>Total price: {this.props.price.toFixed(2)} </strong></p>
                <p>Continue to checkout?</p>
                <Button btnType = "Danger" clicked = {this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType = "Success" clicked = {this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>   
        );
    }
}

export default OrderSummary;