import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import Theme from './Theme';
import Home from './pages/Home';
import ImportTest from './pages/ImportTest';
import Mui from './pages/Mui';
import IPhone from './pages/IPhone';
import BoxTest from './pages/BoxTest';
import Json from './pages/Json';

const Router = () => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={Theme}>
				<CssBaseline />
				<Routes>
					<Route path={`/*`} element={'page'} />
					<Route path="/" element={<Home />} />
					<Route path="/iphone" element={<IPhone />} />
					<Route path="/import" element={<ImportTest />} />
					<Route path="/mui" element={<Mui />} />
					<Route path="/boxtest" element={<BoxTest />} />
					<Route path="/json" element={<Json />} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default Router;
