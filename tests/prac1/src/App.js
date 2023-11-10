// import logo from './logo.svg';
import './App.css';
import BindEventHandlers from './components/class/BindEventHandlers';
import HookCounter from './components/function/useState/HookCounter';
import ParentComponent from './components/class/ParentComponent';
import ClassCounter from './components/function/useState/ClassCounter';
import HookCounterTwo from './components/function/useState/HookCounterTwo';
import HookWithObjects from './components/function/useState/HookWithObjects';
import ConditionalRendering from './components/class/ConditionalRendering';
import NameList from './components/function/NameList';

function App() {
  return (
    <div className="App">
      {/* <BindEventHandlers /> */}
      {/* <ParentComponent /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookWithObjects /> */}
      {/* <ConditionalRendering /> */}
      <NameList />
    </div>
  );
}

export default App;
