import React,{useEffect} from 'react';

const Comments = (props) => {
    console.log(props.comments)
    return (
        <>
            <hr />
            <p>{
                props.comments.map(res => (
                    <>
                    <span>{res.body}</span>
                    <p>{res.username}</p>
                    </>
                    
                ))
                
            }</p>
        </>
    );
}

export default Comments;
