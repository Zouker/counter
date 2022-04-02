import React from 'react';

type PropsType = {
    title: string
    value: number
    callback: (value: number) => void
    disabled: boolean
}

const Button = (props: PropsType) => {
    const onClickHandler = () => props.callback(props.value)

    return (
        <button disabled={props.disabled}
                className={'button'}
                onClick={onClickHandler}>{props.title}
        </button>
    );
};

export default Button;