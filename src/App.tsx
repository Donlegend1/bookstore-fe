import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import DashboardHomePage from './pages/Dashboard/HomePage';
import BookListPage from './pages/Dashboard/Books/BooksPage';
import NewBookPage from './pages/Dashboard/Books/NewBookPage';
import NewAuthorPage from './pages/Dashboard/Authors/NewAuthorPage';
import AuthorsListPage from './pages/Dashboard/Authors/AuthorsListPage';

import ErrorPage from './pages/ErrorPage';

import PrivateRoute from './components/auths/PrivateRoute';
import PublicRoutes from './components/auths/PublicRoutes';
import { Context } from './auth/Context';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
const { user } = useContext(Context);

return (
<Router>
	<ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick
		rtl={false} pauseOnFocusLoss draggable pauseOnHover />
	<Routes>
		<Route path="/" element={ <PublicRoutes>
			<LoginPage />
			</PublicRoutes>
			} />
			<Route path="/login" element={ <PublicRoutes>
				<LoginPage />
				</PublicRoutes>
				} />
			<Route path="/register" element={ <PublicRoutes>
				<RegisterPage />
				</PublicRoutes>
				} />
			<Route path="/dashboard" element={<PrivateRoute>
				<DashboardHomePage />
				</PrivateRoute>} />

			<Route path="/books" element={<PrivateRoute>
				<BookListPage />
				</PrivateRoute>} />
			<Route path="/authors" element={<PrivateRoute>
				<AuthorsListPage />
				</PrivateRoute>} />

			<Route path="/new-book" element={<PrivateRoute>
				<NewBookPage />
				</PrivateRoute>} />
			<Route path="/new-author" element={<PrivateRoute>
				<NewAuthorPage />
				</PrivateRoute>} />

			<Route path="*" element={<ErrorPage />} />
	</Routes>
</Router>
);
};

export default App;
