import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import Theme from './Theme';
import Home from './pages/Home';
const Router = () => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={Theme}>
				<CssBaseline />
				<Routes>
					<Route path={`/*`} element={'page'} />
					<Route path="/" element={<Home />} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default Router;
