import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h3>Order summary</h3>
                <h4>Selected Items: {cart.length}</h4>
        </div>
    );
};

export default Cart;