// import logo from './logo.svg';
import "./App.css";
import { Avator } from "./components/pages/Avator";
import { Counter } from "./components/pages/Counter";
import image from "./assets/image/WhatsApp Image 2023-11-07 at 19.05.12.jpeg";
import WizardForm from "./components/wizard_form/WizardForm";
import { Products } from "./components/pages/Products";
import SigninForm from './_auth/forms/SigninForm'
import Home from './_root/pages/Home'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './_auth/AuthLayout'

function App() {
	return (
	<main className="flex">
		<Routes>	
			<div className="App">
				<Route element={<AuthLayout />} >
					<Route path="/sign-in"  element={<SigninForm />} />
					<Route path="/sign-up"  element={<SignupForm />} />
				</Route>
				<Route element={<RootLayout />} >
            		<Route index element={<Home />} />
            	</Route>
			</div>
		</Routes>
	</main>
	);
}

export default App;
