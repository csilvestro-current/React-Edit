import React, {Component} from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
// import './App.css';
import uuid from 'uuid'


class App extends Component {
  state = {
    items:[],
    //id:0,
    id:uuid() ,
    item:'',
    editItem: false
  }

  inputChange = e => {
    this.setState({item: e.target.value})
  }

  addItem = e => {
    e.preventDefault()
    
    const newItem = {
      id: this.state.id,
      title:this.state.item
    };
    console.log(newItem)

    const UpdatedName = [...this.state.items, newItem]

    this.setState({
      items: UpdatedName,
      id: uuid(),
      editItem: false,
      item: ''
    })
    e.target.reset()
  }

  clearList = () => {
    console.log('testing:clear')
    this.setState({ items: []})
  }

  deleteItem = id => {
    console.log('testing:Delete')
    const deletedItem = this.state.items.filter(item => item.id !== id)
    this.setState({
      items:deletedItem
    })
  }
  
  editItem = id => {
    console.log(id)
    const editedItem = this.state.items.filter(item => item.id !== id)

    const selectedItem = this.state.items.find(item => item.id === id)
    console.log(selectedItem)

    this.setState({
      items:editedItem,
      item:selectedItem.title,
      editItem: true,
      id:id
    })
  }

  render(){
  //   let myList = this.state.items.map((element, i) => {
  //     //Pass through the value and key from the props comp.
  //   return <TodoList 
  //               key={i} 
  //               val={element}  
  //               deleteItem={() =>this.deleteItem(i)}/>
  // })
    return (
      <div className="">
        <TodoInput 
          item={this.state.item} 
          inputChange={this.inputChange}
          addItem={this.addItem}
          editItem={this.state.editItem}
        />
        <TodoList 
          items={this.state.items} 
          clearList={this.clearList} 
          deleteItem={this.deleteItem}
          editItem={this.editItem}
        />
        
      </div>
    );
  }
}
export default App;
