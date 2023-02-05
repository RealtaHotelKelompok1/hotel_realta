import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, FormLabel } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const [token, setToken] = useState(null);
  useEffect(() => {
    const storedValue: any = localStorage.getItem('token');
    console.info(storedValue);
    if (!storedValue) {
      setTimeout(() => {
        setToken(null)
        router.push('/auth/login');
      }, 3000);
    } else {
      setToken(storedValue)
    }
  }, []);

  // if logged in, display the private route page
  return <Box>
    {
      token
        ? (children)
        : (<Box className="h-screen w-full flex flex-col justify-center items-center bg-gray-700">
          <FormLabel className="text-9xl font-extrabold text-orange-500 tracking-widest ">404</FormLabel>
          <FormLabel className="whitespace-normal"/>
          <FormLabel className="bg-[#FF6A3D]  text-sm rounded rotate-12 text-white mt-5">
              Page Not Found
          </FormLabel>
        </Box>)
  }</Box>;
};

export default PrivateRoute;