import React, {Component} from 'react';
//Should be an export
//export default class TodoInput extends Component {
class TodoInput extends Component {
//const TodoInput = props => {  
    render() {
        const {addItem, inputChange, editItem, item} = this.props
    return (
        <form style={styles.TodoInput} onSubmit={addItem}>
            <h1 style={styles.h1}>To Do List</h1>
            <input type="text" placeholder="Add Item" onChange={inputChange} value={item} />
            <button type="submit" className={editItem ? 'btn green' : 'btn blue'}>
                {editItem ? "edit item" : "add item"}
            </button>
        </form>
    )
    }
}
export default TodoInput

const styles= {
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '1%'
    },
    h1:{
        fontSize: '1.25em'
    }
}