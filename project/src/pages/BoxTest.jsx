import { Box, Button, Input } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useState } from 'react';

const BoxTest = () => {
	const [boxData, setBoxData] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const onClickCreateButton = () => {
		if (!inputValue) {
			alert('データを入力してください。');
		} else {
			setBoxData([...boxData, inputValue]);
		}
	};

	return (
		<Box
			sx={{
				display: 'flex',
				width: '100%',
				height: '100%',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					width: '30%',
					height: '30%',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'row',
				}}
			>
				<Input onChange={(e) => setInputValue(e.target.value)} />
				<Button onClick={onClickCreateButton}>生成</Button>
			</Box>
			<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				{boxData.map((value) => (
					<Box
						sx={{
							display: 'flex',
							width: 100,
							height: 100,
							border: `2px solid ${grey[400]}`,
							marginX: 2,
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: 2,
						}}
					>
						{value}
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default BoxTest;
