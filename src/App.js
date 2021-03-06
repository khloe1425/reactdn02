import logo from './logo.svg';
import './App.css';
import ClassComponent from './Component/ClassComponent';
import FunctionComponent from './Component/FunctionComponent';
import HomeComponent from './Component/BTComponent/HomeComponent';
import BindingData from './BindingData/BindingData';
import HandleEvent from './HandleEvent/HandleEvent';
import DemoState from './DemoState/DemoState';
import BTChangeCar from './DemoState/BTChangeCar/BTChangeCar';
import BTChangeFontSize from './DemoState/BTChangeFontSize/BTChangeFontSize';
import RenderWithArray from './RenderWithArray/RenderWithArray';
import BTShoes from './Props/BTShoes/BTShoes';
import BTXemChiTiet from './Props/BTXemChiTiet/BTXemChiTiet';
import BTGioHang from './Props/BTGioHang/BTGioHang';

// các thẻ html của react js là đối tương JSX
//App la component chinh cua du an

import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import BTGioHangRedux from './DemoRedux/BTGioHangRedux/BTGioHangRedux';
import GameTaiXiu from './DemoRedux/GameTaiXiu/GameTaiXiu';
import QLND from './DemoRedux/QLND/QLND';
import LifeCycleParent from './LifeCycleDemo/LifeCycleParent';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* hello dn02
     
      <ClassComponent/>
      <ClassComponent/>
      <FunctionComponent/> */}

        {/* <HomeComponent/> */}

        {/* <BindingData/> */}
        {/* <p className='colorPrice'>Lorem ipsum dolor sit amet.</p> */}

        {/* <HandleEvent/> */}
        {/* <DemoState/> */}
        {/* <BTChangeCar/> */}
        {/* <BTChangeFontSize/> */}
        {/* <RenderWithArray/> */}

        {/* <BTShoes/> */}

        {/* <BTXemChiTiet/> */}

        {/* <BTGioHang /> */}

        {/* <BTGioHangRedux/> */}

        {/* <GameTaiXiu/> */}

        <QLND/>
        
        {/* <LifeCycleParent/> */}

      </div>
    </Provider>

  );
}

export default App;
