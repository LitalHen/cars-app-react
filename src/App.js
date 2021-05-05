import React from 'react';
import './App.css';
import CarsView from './components/CarsView';
import 'bootstrap/dist/css/bootstrap.min.css';
import Car from './data-models/Car';
import { Spinner } from 'react-bootstrap';
import { HashRouter, Route } from 'react-router-dom';
import About from './components/About';
import ContactUs from './components/ContactUs';
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

  addCar = (car)=>{
    this.setState({
      carsJson: this.state.carsJson.concat(car)
    })
  }


  componentDidMount(){

  fetch('/cars-data.json')
    .then((stream)=> {return stream.json()})
    .then(res=>{
      const data= res.map(car=>new Car(car.brand, car.model, car.year, car.km));

      this.setState({
        carsJson:data
      })

    })

  }

  render(){
    return (
      <HashRouter>
        <a className='nav-link' href="/">Home</a>
        <a className='nav-link' href="./#/about">About</a>
        <a className='nav-link' href="./#/ContactUs">Contact Us</a>

        <Route exact path="/">
            {(this.state.carsJson && this.state.carsJson.length >0) ?
            <CarsView carsData={this.state.carsJson}
            addCar={this.addCar}
            />
            :
            <h1> Loading <Spinner animation="border" variant="primary" /></h1>}
        </Route>

        <Route exact path="/about">
            <About/>
        </Route>

        <Route exact path="/contactUs">
            <ContactUs/>
        </Route>
    
      </HashRouter>
    );
 
  }

}

export default App;
