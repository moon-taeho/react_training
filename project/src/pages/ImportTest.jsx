import { Input } from '@mui/material';
import Home from './Home';
import ImportTest2 from './ImportTest2';
import { useState } from 'react';

const ImportTest = () => {
	const [a, setA] = useState(0);
	const [b, setB] = useState(0);
	const handleInput = (e) => {
		setA(e.target.value);
	};
	return (
		<>
			<Input onChange={(e) => setA(e.target.value)} />+
			<Input onChange={handleInput} />+
			<Input onChange={(e) => setB(e.target.value)} />=
			<ImportTest2 A={a} B={b} />
		</>
	);
};

export default ImportTest;
