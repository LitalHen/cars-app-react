import React from 'react'
import { withRouter } from 'react-router';
import { Container } from 'react-bootstrap';
class SingleCar extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        const carIndex=this.props.match.params.index;
        const currentCar= this.props.carsData[carIndex];
        return(
            <Container>          
              <h1>{currentCar.brand}</h1>
              <h4>Model: {currentCar.model}</h4>
              <h4>year: {currentCar.year}</h4>
              <h4>Km Per Year: {currentCar.kmPerYear()}</h4>
              </Container>
        )
    }
}


export default withRouter(SingleCar)