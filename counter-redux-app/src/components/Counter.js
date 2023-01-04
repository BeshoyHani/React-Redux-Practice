import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from './../redux/actions/types';

export default function Counter() {
    const { count } = useSelector(state => state);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch({
            type: INCREMENT
        });
    }

    const handleDecrement = () => {
        dispatch({
            type: DECREMENT
        });
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );

}