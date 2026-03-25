import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Layouts
import AppLayout from './layouts/AppLayout';
import AuthLayout from './layouts/AuthLayout';

import SignUp from './pages/auth/SignUp';
import SignIn from './pages/auth/SignIn';

import Home from './pages/dashboard/Home';
import Order from './pages/dashboard/Order/Order';
import Inventory from './pages/dashboard/Inventory/Inventory';
import AddItem from './pages/dashboard/Inventory/AddItem';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/add" element={<AddItem />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </Router>
  );
}
