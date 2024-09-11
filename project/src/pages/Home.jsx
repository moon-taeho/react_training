import React, { useState } from 'react';
import { Box, Button, Input, Typography } from '@mui/material';

const Home = () => {
	const [a, setA] = useState(0);
	const [b, setB] = useState(0);
	const [result, setResult] = useState(0);

	const handleClick = () => {
		setResult(a + b);
	};

	return (
		<Box
			sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 1, p: 1 }}
		>
			<Input onChange={(e) => setA(Number(e.target.value))} />+
			<Input onChange={(e) => setB(Number(e.target.value))} />
			<Button variant="contained" onClick={handleClick}>
				=
			</Button>
			<Typography>{result}</Typography>
		</Box>
	);
};

export default Home;
