import React, { useContext } from 'react';
import Home from './Components/pages/Home';
import { userContext } from './Components/Context/AuthContext';
import { FadeLoader } from 'react-spinners';

const App = () => {
  // const { loading } = useContext(userContext);
  // if (loading) {
  //     return <div className='h-screen flex justify-center items-center'> <FadeLoader color='#36d7b7'></FadeLoader></div>
  // }
  return (
    <div>
      <Home></Home>
    </div>
  );
};

export default App;