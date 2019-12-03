import React, { Component } from 'react';
import List from './List';
import SlistForm from './SlistForm';

class App extends Component{
state ={
  Slists:[
    {id: 1, name:"milk", complete:false},
  ]
}
addItem = (name) => {    
  const Slist = { 
    id: this.state.Slists[this.state.Slists.length - 1].id + 1, 
    name, 
    complete: false, 
  };    
  this.setState({ Slists: [...this.state.Slists, Slist] });
};

handleClick = (id) => {
  const { Slists } = this.state;
  this.setState({
    Slists: Slists.map( Slist => {
      if (Slist.id === id) {
        return {
          ...Slist,
          complete: !Slist.complete
        }
      }
      return Slist
   
     
    })
  })
}
render(){
  const { Slists } = this.state

  return (
    <div>
      <SlistForm addItem={this.addItem} />
    <List name= "Shopping List" items = {Slists} slistClick={this.handleClick} />
    
        
        </div>

        
  )
}

}



export default App;
