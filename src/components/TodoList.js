import React, {Component} from 'react';
import TodoItem from './TodoItem';

//Should use an export
//export default class TodoList extends Component {
class TodoList extends Component {
//const TodoList = props => {  
    render() {
        const {items, clearList, deleteItem, editItem} = this.props
        return (
            <ul style={styles.h1}>
                <h3>Todo List</h3>
                {items.map(item => {
                    return (
                        <TodoItem 
                            key={item.id} 
                            title={item.title} 
                            deleteItem={()=> deleteItem(item.id)}
                            editItem={()=> editItem(item.id)}
                        />
                    )
                })}
                
                <p><button type='button' onClick={clearList}>Clear List</button></p>
            </ul>
        )
    }
}
export default TodoList

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