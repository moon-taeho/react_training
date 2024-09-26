import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';

const IPhone = () => {
	return (
		<Box sx={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
			<Box
				sx={{
					display: 'flex',
					width: '200px',
					height: '370px',
					border: 6,
					borderRadius: 6,
					justifyContent: 'center',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						width: '100px',
						height: '20px',
						bgcolor: 'black',
						borderRadius: 3,
						borderTopLeftRadius: 0,
						borderTopRightRadius: 0,
						justifyContent: 'center',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							width: '30px',
							height: '5px',
							borderRadius: 10,
							border: '1px solid grey',
							marginLeft: '15px',
						}}
					></Box>
					<Box
						sx={{
							display: 'flex',
							width: '10px',
							height: '10px',
							bgcolor: grey[600],
							borderRadius: 10,
							marginLeft: '5px',
						}}
					></Box>
				</Box>
			</Box>
		</Box>
	);
};

export default IPhone;
