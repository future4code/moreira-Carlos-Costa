import React from 'react';
import { Input } from 'antd';

const CommentTextArea = (props) => {
    const { TextArea } = Input;

    return (
        <>
            <TextArea 
            showCount maxLength={400} 
            style={{ height: 120 }} 
            placeholder = {props.placeholder}
            required = {props.required}
            type = {props.type}
            name = {props.name}
            value = {props.value}
            onChange = {props.onChange}
            />
        </>
    );
}

export default  CommentTextArea;
