import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {getCartItems } from '../../../_actions/user_actions';

function CartPage(props) {
    const dispatch = useDispatch();
    console.log(props.user);

    useEffect(() => {

        let cartItems = [];
        if (props.user.userData && props.user.userData.cart) {
            if (props.user.userData.cart.length > 0) {
                props.user.userData.cart.forEach(item => {
                    cartItems.push(item.id)
                    console.log(props.user);
                });
                dispatch(getCartItems(cartItems, props.user.userData.cart))
                console.log(props.user);
                
                    
            }
        }

    }, [])

    console.log(props.user);

    


    return (
        <div>
               {console.log(props.user)}
        </div>
    )
}


export default CartPage
