/* eslint-disable */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';

function App() {
  return (
    <BrowserRouter>
				<Routes>
					<Route exact path="/" element={<LandingPage/>}></Route>
          <Route path="/LoginPage" element={<LoginPage/>}></Route>
          <Route path="/RegisterPage" element={<RegisterPage/>}></Route>
				</Routes>
			</BrowserRouter>
  );
}

export default App;
