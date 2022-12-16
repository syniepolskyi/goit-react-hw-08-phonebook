import { Box } from '@mui/material';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#90A955"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Box>
  );
};
