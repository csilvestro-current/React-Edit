import React from 'react';

const TodoItem = props => {  
    return (
        <li style={styles.li}>
            <h6>{props.title}</h6>
            <button type='button' onClick={props.editItem}>Edit</button>
            <button type='button' onClick={props.deleteItem}>Delete</button>
        </li>
    )
}
export default TodoItem

const styles= {
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '1%'
    },
    h1: {
        fontSize: '1.25em'
    },
    li: {
        display: 'flex',
        flexDirection: 'row'
    }
}