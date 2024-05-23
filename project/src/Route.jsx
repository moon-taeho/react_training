import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import Theme from './Theme';
const Router = () => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={Theme}>
				<CssBaseline />
				<Routes>
					<Route path={`/*`} element={"page"} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default Router;
