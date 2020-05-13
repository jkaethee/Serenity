import React, { Component } from 'react';
import '../../src/App.css';
import PhysicalHealthImage from '../images/workout.jpg'
import NutritonalHealthImage from '../images/nutrition.jpg'
import MentalHealthImage from '../images/meditation.jpg'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';


class CommunityPage extends Component {

render() {
    return (
      <div className="homecontainer">
      <Card className="displaycard">
        <CardImg src={PhysicalHealthImage} alt="Workout Image" className="displaycardimage"/>
        <CardBody>
          <CardTitle>Physical Health</CardTitle>
          <CardSubtitle>Check out community exercise routines!</CardSubtitle>
          <Link to="/exerciseplanpage">
          <Button>Button</Button>
          </Link>
        </CardBody>
      </Card>
      <Card className="displaycard">
        <CardImg src={NutritonalHealthImage} alt="Food Image" className="displaycardimage" />
        <CardBody>
          <CardTitle>Nutritional Health</CardTitle>
          <CardSubtitle>Check out community diet plans!</CardSubtitle>
          <Link to="/exerciseplanpage">
          <Button>Button</Button>
          </Link>
        </CardBody>
      </Card>
      <Card className="displaycard">
        <CardImg src={MentalHealthImage} alt="Meditiation Image" className="displaycardimage" />
        <CardBody>
          <CardTitle>Mental Health</CardTitle>
          <CardSubtitle>Check out community mental health resources!</CardSubtitle>
          <Link to="/exerciseplanpage">
          <Button>Button</Button>
          </Link>
        </CardBody>
      </Card>
      </div>
    );
  }
}

export default CommunityPage;