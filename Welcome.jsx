import React from 'react';

const Welcome = ({ name }) => {
  return <p>Welcome, {name}!</p>;
};

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <Welcome name="John" />
    </div>
  );
};

export default App;
