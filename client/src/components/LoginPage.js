import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';
  
  import { store, setUser } from '../index.redux.jsx';
  import React from 'react';
  import App from './App';
  import Background from '../images/login.jpg';
  
  class LoginPage extends React.Component {
  
   dataObject ={
      name: '',
    };
    handleChange(event) {
      const value = event.target.value;
      const name = event.target.name;
      this.dataObject[name]  = value;
    }
  
    handleSubmit = async e => {
      e.preventDefault();
      console.log('req:', this.dataObject)
      const response = await fetch('/api/userCreate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInfo: this.dataObject }),
      });
      const body = await response.text();
      
      this.dataObject.responseToPost = body;
      store.dispatch(setUser(this.dataObject, true));
      this.props.setUsername(this.dataObject.name);
    };
    
  render() {
      if (this.dataObject.responseToPost) {
          return <App />;
      }
      else {
        return (
          <div className="loginpage" style={{backgroundImage: "url(" + Background + ")" }}>
            <Container>
            <h2>Welcome to Serenity</h2>
            <Form className="form" onSubmit={this.handleSubmit}>
              <Col>
                <FormGroup>
                  <Label>Username</Label>
                  <Input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Enter your name here..."
                    onChange={e => this.handleChange(e)}
                  />
                </FormGroup>
              </Col>
              <Button>Submit</Button>
            </Form>
          </Container>
          </div>
        );
      }
    }
  }
  
  export default LoginPage;