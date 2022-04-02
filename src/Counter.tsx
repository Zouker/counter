import React, {useState} from 'react';
import Button from './Button';
import './App.css';

const Counter = () => {
    const [minValue, maxValue] = [0, 5]
    let [count, setCount] = useState<number>(minValue)

    const counterHandler = (value: number) => {
        if (count <= maxValue) {
            setCount(state => state + value)
        }
    }

    const resetHandler = () => {
        setCount(minValue)
    }


    return (
        <div className={'wrapper'}>
            <div className={(count === maxValue) ? 'counter red' : 'counter'}>{count}</div>
            <div className={'buttonsBlock'}>
                <Button disabled={count === maxValue}
                        title={'inc'}
                        callback={counterHandler}
                        value={1}
                />
                <Button disabled={count === minValue}
                        title={'reset'}
                        callback={resetHandler}
                        value={1}
                />
            </div>
        </div>
    );
};

export default Counter;