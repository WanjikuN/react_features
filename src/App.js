import logo from './logo.svg';
import './App.css';
import Counter from './Components/features/TestReducer';
import ConsumeAPIs from './Components/features/axios/consumeAPIs';
import LazyLoadedComponents from './Components/features/lazyLoading/LazyLoading';
import ShoppingCart from './Components/features/UseMemoTest/UseMemoTest';
import UseRefHook from './Components/features/hooks/UseRefHook';
import UseStateHook from './Components/features/hooks/UseStateHook';
import Loader1 from './Components/Loaders/loader1';

function App() {
 
  return (

    <div className="App">
     <Counter />
     {/* <ConsumeAPIs /> */}
     <LazyLoadedComponents />
     <ShoppingCart />
     {/* <UseRefHook /> */}
     {/* <UseStateHook /> */}
     <Loader1 />
    </div>
  );
}

export default App;
