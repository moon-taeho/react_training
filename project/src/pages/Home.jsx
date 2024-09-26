import React, { useEffect, useState } from 'react';
import { Box, Button, Input, Typography } from '@mui/material';

const Home = () => {
	const [a, setA] = useState(0);
	const [b, setB] = useState(0);
	const [result, setResult] = useState(0);

	const handleClick = (e) => {
		switch (e.target.innerText) {
			case '+':
				setResult(a + b);
				break;
			case '-':
				setResult(a - b);
				break;
			case '×':
				setResult(a * b);
				break;
			case '÷':
				setResult(a / b);
				break;
		}
	};

	useEffect(() => {
		setResult(a + b);
	}, [a, b]);

	return (
		<Box
			sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 1, p: 1 }}
		>
			<Input onChange={(e) => setA(Number(e.target.value))} />
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
				<Button onClick={handleClick}>+</Button>
				<Button onClick={handleClick}>-</Button>
				<Button onClick={handleClick}>×</Button>
				<Button onClick={handleClick}>÷</Button>
			</Box>
			<Input onChange={(e) => setB(Number(e.target.value))} />
			<Typography>=</Typography>
			<Typography>{result}</Typography>
		</Box>
	);
};

export default Home;
