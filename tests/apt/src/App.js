// import logo from './logo.svg';
import "./App.css";
import { Avator } from "./components/pages/Avator";
import { Counter } from "./components/pages/Counter";
import image from "./assets/image/WhatsApp Image 2023-11-07 at 19.05.12.jpeg";
import WizardForm from "./components/wizard_form/WizardForm";
import { Products } from "./components/pages/Products";

function App() {
	return (
    <div className="App">
		<Avator image={image} radius={75} size={120}></Avator>
		<Counter />
		<WizardForm />

		<Products
        products={[
				"mango",
				"apple",
				"chapati",
				"ugali",
				"pilau",
				"supu",
				"matumbo",
				"matoke",
				"mala",
				"chai",
				"uji",
				"maziwa",
				"ian",
				"mel",
				"johnmark",
				"shikanga",
				"karume",
				"joan",
				"moses",
				"javan",
        	]}
		/>
    </div>
	);
}

export default App;
