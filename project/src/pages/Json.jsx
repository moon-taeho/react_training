import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Json = () => {
	const [data, setData] = useState([]);

	const object = [
		{ id: 1, name: 'IPhone', url: '/iphone' },
		{ id: 2, name: 'test2', url: '/' },
		{ id: 3, name: 'test3', url: '/' },
	];

	const getTestData = () => {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then((res) => {
				console.log(res.data);
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const List = () => {
		return data.map((item) => {
			return (
				<Box
					key={item.id}
					sx={{
						display: 'flex',
						flexDirection: 'row',
						border: 2,
						mb: 1,
						p: 2,
						alignItems: 'center',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							width: 30,
							mr: 1,
							flexDirection: 'column',
							textWrap: 'hidden',
							alignItems: 'flex-end',
						}}
					>
						<Typography sx={{ fontSize: 20, textAlign: 'center' }}>{item.userId}</Typography>
						<Typography sx={{ fontSize: 20, textAlign: 'center' }}>{item.id}</Typography>
					</Box>
					<Box sx={{ display: 'flex', flexDirection: 'column', textWrap: 'hidden' }}>
						<Box sx={{ display: 'flex', flexDirection: 'row', borderBottom: 1, p: 1 }}>
							<Typography sx={{ width: 50, fontSize: 18 }}>Title:</Typography>
							<Typography sx={{ fontSize: 18 }}>{item.title}</Typography>
						</Box>
						<Box sx={{ display: 'flex', flexDirection: 'row', p: 1 }}>
							<Typography sx={{ width: 70, fontSize: 16 }}>Content:</Typography>
							<Typography sx={{ fontSize: 16 }}>{item.body}</Typography>
						</Box>
					</Box>
					<Link to={item.url}>{item.url}</Link>
				</Box>
			);
		});
	};

	useEffect(() => {
		getTestData();
	}, []);

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				bgcolor: 'white',
				p: 1,
			}}
		>
			<List />
		</Box>
	);
};

export default Json;
