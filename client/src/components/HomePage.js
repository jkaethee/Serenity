import React, { Component } from 'react';
import '../../src/App.css';
import WorkoutImage from '../images/workout.jpg'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';


class HomePage extends Component {

render() {
    return (
      <div className="homecontainer">
      <Card style={{width:'20%'}}>
        <CardImg src={WorkoutImage} alt="Workout Image"/>
        <CardBody>
          <CardTitle>Physical Health</CardTitle>
          <CardSubtitle>Check out community work out plans!</CardSubtitle>
          <Link to="/exerciseplanpage">
          <Button>Button</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
    );
  }
}

export default HomePage;