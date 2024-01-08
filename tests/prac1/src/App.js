// import logo from './logo.svg';
import './App.css';
import BindEventHandlers from './components/class/BindEventHandlers';
import HookCounter from './components/function/useState/HookCounter';
import ParentComponent from './components/class/ParentComponent';
import ClassCounter from './components/function/useState/ClassCounter';
import HookCounterTwo from './components/function/useState/HookCounterTwo';
import HookWithObjects from './components/function/useState/HookWithObjects';
import ConditionalRendering from './components/class/ConditionalRendering';
import PersonList from './components/function/PersonList';
import StyleSheet from './components/function/styling/StyleSheet';

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
      {/* <PersonList /> */}
      <StyleSheet primary={false}/>
    </div>
  );
}

export default App;
