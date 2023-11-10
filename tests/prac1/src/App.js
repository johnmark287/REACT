// import logo from './logo.svg';
import './App.css';
import BindEventHandlers from './components/class/BindEventHandlers';
import HookCounter from './components/function/useState/HookCounter';
import ParentComponent from './components/class/ParentComponent';
import ClassCounter from './components/function/useState/ClassCounter';
import HookCounterTwo from './components/function/useState/HookCounterTwo';
import HookWithObjects from './components/function/useState/HookWithObjects';
import UserGreeting from './components/class/UserGreeting';


function App() {
  return (
    <div className="App">
      {/* <BindEventHandlers /> */}
      {/* <ParentComponent /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookWithObjects /> */}
      <UserGreeting />
    </div>
  );
}

export default App;
