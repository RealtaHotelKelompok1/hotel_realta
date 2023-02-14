import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import * as yup from "yup";
import { Box, Button, InputLabel, InputAdornment, IconButton, Typography  } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { doRegister } from '@/redux/Actions/Users/reduceActions';
import { useRouter } from 'next/router';
import usersReducers from '@/redux/Reducers/Users/usersReducer';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import styles from '../../styles/FormSignUpEmployee.module.css'
import { KeyIcon } from '@heroicons/react/24/solid';
import LayoutSignUpEmployee from '@/components/Layout/LayoutSignUpEmployee';

export default function SignUpEmployee() {
  // use Router
  const router = useRouter();
  
  // useDispatch
  const dispatch = useDispatch();
  
  // define useState API POST users
  const [DataUser, setDataUser] = useState({
    userFullName:null,
    userEmail: null,
    uspaPasswordhash: null,
    userPhoneNumber: null,
  });
  
  // function handler API POST users
  const eventHandlerAdd = (data: any) => (event: any) => {
    setDataUser({ ...DataUser, [data]: event.target.value });
  }
  
  // Mengambil state usersReducers dari store redux
  const isRegister = useSelector((state: any) => state.usersReducers.users);

  // function handle submit form add new users (API POST users)
  const handleFormSubmit = (values: any, { setSubmitting }: any) => {
    dispatch(doRegister(values));

    // Memeriksa apakah user sudah login
    if (isRegister.message == 'Register Successfully') {
      router.push('/auth/signin');
    }
  };

  // getHelper for display in form
  const getHelperText = (touched:any, errors:any, field:any) => {
    if (field == "email") {
      return (touched && errors ? errors : "enter your email");
    } else if(field == "password") {
      return (touched && errors ? errors : "enter your password");
    }  else if(field == "confirmPassword") {
      return (touched && errors ? errors : "enter your confirm password");
    } else if(field == "phone") {
      return (touched && errors ? errors : "enter your phone number");
    } else if(field == "fullname") {
      return (touched && errors ? errors : "enter your full name");
    }
  }

  // phone regExp
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  
  // check all validasi required & etc
  const checkoutSchema: any = yup.object().shape({
    userFullName: yup.string().required("required"),
    userEmail: yup.string().email("invalid email").required("required"),
    uspaPasswordhash: yup.string().required("required"),
    uspaConfirmPasswordhash: yup.string()
    .oneOf([yup.ref('uspaPasswordhash'), null], 'Passwords must match')
    .required('required'),
    userPhoneNumber: yup.string().matches(phoneRegExp, "Phone number is not valid").required("required"),
  });

  // function initialValue field from table users
  const initialValues: any = {
    userFullName: "",
    userEmail: "",
    uspaPasswordhash: "",
    uspaConfirmPasswordhash: "",
    userPhoneNumber: "",
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleMouseDownConfirmPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

    const handletoLogin = () => {
    router.push('/auth/signin');
  };

  return (
    <Box>
      <Head>
        <title>Employee SignUp</title>
      </Head>
      <LayoutSignUpEmployee>
        <section className='w-3/4 mx-auto my-auto flex flex-col gap-7' >
          <center>
          <Typography className={styles.textTitleInFormLogin}>
              Employee SignUp
            </Typography>
          </center>  
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Box
                  // alignItems="center"
                  justifyContent="center"
                  display="grid"
                  gap="8px"
                  gridTemplateColumns="repeat(14, minmax(0, 1fr))"
                >
                  <InputLabel
                    className={styles.textLabelInFormLogin}
                    sx={{ gridColumn: "span 6" }}
                  >Name
                  </InputLabel>
                  <TextField
                    size="small"
                    fullWidth
                    className={styles.formIntputLogin}
                    variant="outlined"
                    type="text"
                    placeholder="Full Name"
                    onBlur={handleBlur}
                    onChange={(event) => { eventHandlerAdd('userFullName')(event); handleChange(event) }}
                    value={values.userFullName}
                    name="userFullName"
                    error={!!touched.userFullName && !!errors.userFullName}
                    helperText={getHelperText(touched.userFullName, errors.userFullName, "fullname")}
                    sx={{ gridColumn: "span 8" }}
                  />
                  <InputLabel
                    className={styles.textLabelInFormLogin}
                    sx={{ gridColumn: "span 6" }}
                  >Email
                  </InputLabel>
                  <TextField
                    size="small"
                    fullWidth
                    className="border border-gray-700"
                    variant="outlined"
                    type="email"
                    placeholder="Email"
                    onBlur={handleBlur}
                    onChange={(event) => {eventHandlerAdd('userEmail')(event); handleChange(event)}}
                    value={values.userEmail}
                    name="userEmail"
                    error={!!touched.userEmail && !!errors.userEmail}
                    helperText={getHelperText(touched.userEmail, errors.userEmail, "email")}
                    sx={{ gridColumn: "span 8" }}
                  />
                  <InputLabel
                    className={styles.textLabelInFormLogin}
                    sx={{ gridColumn: "span 6" }}
                  >Password
                  </InputLabel>
                  <TextField
                    size="small"
                    fullWidth
                    className="border border-gray-700"
                    variant="outlined"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    placeholder="Password"
                    onBlur={handleBlur}
                    onChange={(event) => { eventHandlerAdd('uspaPasswordhash')(event); handleChange(event) }}
                    value={values.uspaPasswordhash}
                    name="uspaPasswordhash"
                    error={!!touched.uspaPasswordhash && !!errors.uspaPasswordhash}
                    helperText={getHelperText(touched.uspaPasswordhash, errors.uspaPasswordhash, "password")}
                    sx={{ gridColumn: "span 8" }}
                  />
                  <InputLabel
                    className={styles.textLabelInFormLogin}
                    sx={{ gridColumn: "span 6" }}
                  >Confirm Password
                  </InputLabel>
                  <TextField
                    size="small"
                    fullWidth
                    className="border border-gray-700"
                    variant="outlined"
                    type={showConfirmPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            onMouseDown={handleMouseDownConfirmPassword}
                          >
                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    placeholder="Password"
                    onBlur={handleBlur}
                    onChange={(event) => { eventHandlerAdd('uspaConfirmPasswordhash')(event); handleChange(event) }}
                    value={values.uspaConfirmPasswordhash}
                    name="uspaConfirmPasswordhash"
                    error={!!touched.uspaConfirmPasswordhash && !!errors.uspaConfirmPasswordhash}
                    helperText={getHelperText(touched.uspaConfirmPasswordhash, errors.uspaConfirmPasswordhash, "confirmPassword")}
                    sx={{ gridColumn: "span 8" }}
                  />
                  <InputLabel
                    className={styles.textLabelInFormLogin}
                    sx={{ gridColumn: "span 6" }}
                  >Phone Number
                  </InputLabel>
                  <TextField
                    size="small"
                    fullWidth
                    className="border border-gray-700"
                    variant="outlined"
                    type="text"
                    onBlur={handleBlur}
                    onChange={(event) => {eventHandlerAdd('userPhoneNumber')(event); handleChange(event)}}
                    value={values.userPhoneNumber}
                    name="userPhoneNumber"
                    error={!!touched.userPhoneNumber && !!errors.userPhoneNumber}
                    helperText={getHelperText(touched.userPhoneNumber, errors.userPhoneNumber, "phone")}
                    sx={{ gridColumn: "span 8" }}
                  />
                  <Button
                      type="submit"
                      color="warning"
                      className="rounded-md bg-gray-700 text-white hover:bg-gray-400 hover:text-gray-700 border-warning-500 first-line:bg-opacity-20 px-4 text-sm normal-case font-normal  hover:bg-opacity-30 focus:outline-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                      sx={{ gridColumn: "span 14" }}
                    >
                      <KeyIcon width={15} height={15} /><span className='text-transparent'>-</span>{"Sign Up"}
                  </Button>
                  <InputLabel
                    className='text-center text-gray-700 normal-case font-normal'
                    sx={{ gridColumn: "span 14" }}
                  >
                    do have an account yet?<Button
                      className="bg-transparent text-blue-400 hover:text-blue-500 normal-case font-normal hover:bg-transparent"
                      onClick={handletoLogin}>
                      <b>Sign In</b>
                    </Button>
                  </InputLabel>
                </Box>
              </Form>
            )}
          </Formik>
        </section>
      </LayoutSignUpEmployee>
    </Box>
  );
}