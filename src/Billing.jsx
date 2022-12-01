import React, { useState } from 'react';
import { Form, Input } from 'antd';
import { Button, Checkbox } from 'antd';
import { Typography } from 'antd';
import { setCounter } from './reduxStore/commonReducer';
import {useSelector, useDispatch} from 'react-redux';

const { Title } = Typography;



const Billing = () => {
    const common = useSelector(state => state.common);
    const {counter} = common;
   
    const dispatch = useDispatch();
    const checkboxId = [0,1,2,3];

    const increment = () => {
         const incrementValue = counter + 1;
         dispatch(setCounter(incrementValue));
         const cid = checkboxId.map((singleCheck,i) => singleCheck)
         console.log('cid', cid);
    };
    const handleClickofCheck = event => (
        console.log(event.currentTarget.id),
        console.log(event.currentTarget.checked)
    );

    const decrement = () => {
        const decrementValue = counter - 1;
        dispatch(setCounter(decrementValue));
    }
   

    return(
        <div>
            <div>
            {checkboxId.map((singleCheck) => 
               <Checkbox  id={singleCheck} onClick={handleClickofCheck}>
               TESTING
             </Checkbox>
           )}
            </div>
            <div>
               <Title>{counter}</Title>
               <Button htmlType='button' type="dashed" onClick={increment}>INCREMENT</Button>
               <Button htmlType='button' type="dashed" onClick={decrement}>DECREMENT</Button>
            </div>
            

        </div>
        
    )
};


export default Billing;