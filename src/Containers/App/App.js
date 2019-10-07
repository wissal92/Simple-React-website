import React from 'react';
import {Route, Switch} from 'react-router-dom';
import FarmItems from '../../Components/FarmItems/FarmItems';
import ItemDetail from '../../Components/ItemDetails/ItemDetail';
import {data} from '../../data';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {items : data}
  }

  render(){
  const getItem = props =>{
    let id = props.match.params.id;
    console.log(id)
    let item = this.state.items.find(item => item.id == id);
    console.log(item)
    console.log(this.state.items[id])
    return <ItemDetail {...props} item={item}
    data={this.state.items} item={item}/>;
  }
  return (
    <div className="App"> 
        <Switch>
          <Route exact path='/' render={() => <FarmItems   items={this.state.items}/>}/>
          <Route exact path='/product/:id' render={getItem}/>
        </Switch>
    </div>
  );
  }
}

export default App;
