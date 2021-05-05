import React from 'react';
import { Jumbotron, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Car from '../data-models/Car';

import './CarsView.css';
// ./ means the current directory
// ../ means go up one directory
// ./components/CarsView
class CarsView extends React.Component{
    constructor(props){
    super(props);
       this.state = {
           currentCar : {},
           brand:'',
           model: '',
           year: '',
           km: ''

       };

    }
    chooseCar = (car) => {
        this.setState(
            {
                currentCar: car
            }
        )
    }

    createNewCar = () => {
           const newCar= new Car(this.state.brand, this.state.model, this.state.year, this.state.km)

           this.props.addCar(newCar);
           this.clearInput();     
    }

    clearInput=()=>{
        this.setState({
            brand:'',
            model: '',
            year: '',
            km: ''
        })

    }

    
   carInput=(key,val)=>{

        this.setState({
            [key]: val
        })
    }
    render(){
        const carRows = this.props.carsData.map( (car, index) => {
            return (
            <tr key={car.id} onClick={() => this.chooseCar(car)}>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>{car.km}</td>
                <td>{car.kmPerYear()}</td>
                <td> <Link to={`/car/${index}`}>Click Me</Link></td>
            </tr>
                )
        })
        return (
            <div>
            <Table striped className="my-table">
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>KM</th>
                        <th>KM per year</th>
                        <th>Car</th>
                    </tr>
                </thead>
                <tbody>
                    {carRows}
                </tbody>
            </Table>
            <Jumbotron>
                <h1>Selected car info</h1>
                <h2>{this.state.currentCar.brand}</h2>
                <h3>{this.state.currentCar.model}</h3>
                <h3>{this.state.currentCar.year}</h3>
                <h3>{this.state.currentCar.kmPerYear}</h3>
            </Jumbotron>

            <form>
                <label>Brand</label>
                    <input value={this.state.brand} onChange ={(event)=>{this.carInput("brand",event.target.value)}} type="text"/>
                <label>Model</label>
                    <input value={this.state.model} onChange ={(event)=>{this.carInput("model",event.target.value)}} type="text"/>
                <label>Year</label>
                    <input value={this.state.year} onChange ={(event)=>{this.carInput("year",event.target.value)}} type="text"/>
                <label>Km</label>
                    <input value={this.state.km} onChange ={(event)=>{this.carInput("km",event.target.value)}} type="text"/>

                <button type="button" onClick={this.createNewCar}>Add Car</button>
            </form>
            </div>
        )
    }
}

export default CarsView;