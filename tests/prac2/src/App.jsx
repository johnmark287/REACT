import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './_root/pages/Home';
import RootLayout from './_root/RootLayout'
import AuthLayout from './_auth/AuthLayout';
import SignupForm from './_auth/forms/SignupForm'

function App() {
  return (
    <Routes>
      <div className="App">
        <Route element={<AuthLayout />}>
          <Route path='/sign-up' element={<SignupForm />} />
        </Route>
        {/* <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route> */}
      </div>
    </Routes>
  );
}

export default App;
