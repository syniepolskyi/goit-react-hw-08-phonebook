import { Outlet } from 'react-router-dom';
import { AppBarHeader } from './AppBar/AppBar.jsx';
import { Suspense } from 'react';
import { Paper } from '@mui/material';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  return (
    <Paper sx={{ minHeight: '100vh', backgroundColor: '#F5F2E8 ' }}>
      <AppBarHeader />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={3000}
       
        closeOnClick
      
      
        theme="light"
      />
    </Paper>
  );
};
