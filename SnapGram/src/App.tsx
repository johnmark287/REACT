import { Routes, Route } from 'react-router-dom'

import './globals.css';
import { Home } from './_root/pages';
import RootLayout from './_root/RootLayout';
import AuthLayout from './_auth/AuthLayout';

const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/* public routes: For sign up and in */}
            <Route element={<AuthLayout />}>
              <Route path='/sign-in' element={<SigninForm></SigninForm>} />
              <Route path='/sign-up' element={<SignupForm />} />
            </Route> 

            {/* private route */}
            <Route element={<RootLayout />} >
              <Route index element={<Home />} />
            </Route>
        </Routes>
    </main>
  )
}

export default App