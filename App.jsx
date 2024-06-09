import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './Welcome';
import GithubUser from './GithubUser'; // Make sure to import GithubUser component

const ShowGithubUser = ({ match }) => {
  const { username } = match.params;
  return <GithubUser username={username} />;
};

const App = () => {
  return (
    <Router>
      <div>
        <h1>My App</h1>
        <Route exact path="/" render={() => <Welcome name="John" />} />
        <Route path="/users/:username" component={ShowGithubUser} />
      </div>
    </Router>
  );
};

export default App;
