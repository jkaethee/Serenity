import '../../src/App.css';
import Nav from './Nav';
import CommunityPage from './CommunityPage';
import LoginPage from './LoginPage';
import ChatRoom from './ChatRoom';
import ExercisePlanPage from './ExercisePlanPage';
import HomePage from './HomePage';
import {BrowserRouter as Router, Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import React from 'react';

class App extends React.Component {
  state = {
    username: null
  }

  setUsername = (username) => {
    this.setState({username})
  }

  render() {
    // if (!this.state.user) { return ( <LoginPage updateUserInfo={this.updateUserInfo}/>); }
    const AuthenticatedRoutes = () => {
      return (
        <div>
          <Nav username={this.state.username}/>
            <div>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/community" component={CommunityPage} />
                <Route exact path="/chatroom" render={(props) => <ChatRoom {...props} username={this.state.username} />} />
                <Route exact path="/exerciseplanpage" component={ExercisePlanPage} />
              </Switch>
            </div>
        </div>
      )
    }
    return (
        <BrowserRouter >
        <div>
            {
              !this.state.username ?
                <LoginPage setUsername={this.setUsername} />
                :
                <Route component={AuthenticatedRoutes} />
            }        
          </div>
        </BrowserRouter>
      );
  }
}

export default App;