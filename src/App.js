import logo from './logo.svg';
import './App.css';
import ClassComponent from './Component/ClassComponent';
import FunctionComponent from './Component/FunctionComponent';
import HomeComponent from './Component/BTComponent/HomeComponent';
import BindingData from './BindingData/BindingData';
import HandleEvent from './HandleEvent/HandleEvent';

// các thẻ html của react js là đối tương JSX
//App la component chinh cua du an
function App() {
  return (
    <div className="App">
     {/* hello dn02
     
      <ClassComponent/>
      <ClassComponent/>
      <FunctionComponent/> */}

      {/* <HomeComponent/> */}

      {/* <BindingData/> */}
      {/* <p className='colorPrice'>Lorem ipsum dolor sit amet.</p> */}
   
      <HandleEvent/>
   
    </div>
  );
}

export default App;
