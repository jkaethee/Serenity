import React, { Component } from 'react';
import '../../src/App.css';
import WorkoutImage from '../images/workout.jpg'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Form
} from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';


class ExercisePlanPage extends Component {
    constructor(props) {    
        super(props);
        this.state = {
            selectedFile: null
        }
    }

    render() {
        return (
            <div>

                Here will be the community upload gallery
                
            </div>
        );
    }
    }

export default ExercisePlanPage;