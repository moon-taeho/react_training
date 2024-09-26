import { Box, Typography, styled } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { amber } from '@mui/material/colors';
import { useState } from 'react';

const StyledPersonIcon = styled(PersonIcon)({
	color: 'white',
	':hover': {
		cursor: 'pointer',
	},
	':active': {
		color: 'black',
	},
});

const Mui = () => {
	const [array, setArray] = useState([]);

	const PersonArray = () => {
		const return_value = array.map((item) => {
			return <StyledPersonIcon />;
		});
		return return_value;
	};

	const onClickAddButton = () => {
		setArray([...array, 1]);
	};

	const onClickRemoveButton = () => {
		setArray(array.slice(0, -1));
	};
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				height: '100%',
				justifyContent: 'center',
				alignItems: 'center',
				bgcolor: amber[700],
			}}
		>
			<AddCircleOutlineIcon onClick={onClickAddButton} />
			<Box sx={{ height: 30 }}>
				<PersonArray />
			</Box>
			<RemoveCircleOutlineIcon onClick={onClickRemoveButton} />
		</Box>
	);
};

export default Mui;
