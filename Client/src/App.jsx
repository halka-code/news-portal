import React, { useContext } from 'react';
import Home from './Components/pages/Home';
import { userContext } from './Components/Context/AuthContext';

const App = () => {
  const { loading } = useContext(userContext);
  if (loading) {
      return <h1>Loading.......</h1>
  }
  return (
    <div>
      <Home></Home>
    </div>
  );
};

export default App;