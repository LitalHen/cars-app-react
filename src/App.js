import React from 'react';

import './App.css';
import CarsView from './components/CarsView';
import 'bootstrap/dist/css/bootstrap.min.css';
import Car from './data-models/Car';
// ./ means the current directory
// ../ means go up one directory
// ./components/CarsView
class App extends React.Component {

  constructor (props){
    super(props);
    this.state={
      carsJson:[]
    }
  }

  componentDidMount(){
    const cars= [
      {"brand": "Toyota", "model": "Yaris", "year": 2002, "km": 230000}, 
      {"brand": "Toyota", "model": "Corola", "year": 2015, "km": 105000}, 
      {"brand": "Hyundai", "model": "i30", "year": 2010, "km": 150000}, 
      {"brand": "Ford", "model": "Focus", "year": 2002, "km": 210000}, 
      {"brand": "Volkswagon", "model": "Beatle", "year": 1970, "km": 1005000}, 
      {"brand": "Audi", "model": "TT", "year": 2019, "km": 10000}
  ]
  const data= cars.map((car)=>{

          return new Car(car.brand, car.model, car.year, car.km);

  })

    this.setState({
      carsJson:data
    })
  
  }

  render(){
    return (
      <div>
        <CarsView carsData={this.state.carsJson}/>
      </div>
    );    
  }

}

export default App;
