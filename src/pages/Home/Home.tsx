/** @jsxImportSource @emotion/react */
/*
 * Home.tsx
 * Home container.
 *
 * Created by firstName lastName on date.
 *
 * pwa-starter
 *
 * Copyright © 2009-2021 United States Government as represented by
 * the Program Manager of the DHA: Web and Mobile Technology Program Management Office.
 * All Rights Reserved.
 *
 * Copyright © 2009-2021 Contributors. All Rights Reserved.
 *
 * THIS OPEN SOURCE AGREEMENT ("AGREEMENT") DEFINES THE RIGHTS OF USE,
 * REPRODUCTION, DISTRIBUTION, MODIFICATION AND REDISTRIBUTION OF CERTAIN
 * COMPUTER SOFTWARE ORIGINALLY RELEASED BY THE UNITED STATES GOVERNMENT
 * AS REPRESENTED BY THE GOVERNMENT AGENCY LISTED BELOW ("GOVERNMENT AGENCY").
 * THE UNITED STATES GOVERNMENT, AS REPRESENTED BY GOVERNMENT AGENCY, IS AN
 * INTENDED THIRD-PARTY BENEFICIARY OF ALL SUBSEQUENT DISTRIBUTIONS OR
 * REDISTRIBUTIONS OF THE SUBJECT SOFTWARE. ANYONE WHO USES, REPRODUCES,
 * DISTRIBUTES, MODIFIES OR REDISTRIBUTES THE SUBJECT SOFTWARE, AS DEFINED
 * HEREIN, OR ANY PART THEREOF, IS, BY THAT ACTION, ACCEPTING IN FULL THE
 * RESPONSIBILITIES AND OBLIGATIONS CONTAINED IN THIS AGREEMENT.
 *
 * Government Agency: DHA: Web and Mobile Technology Program Management Office
 * Government Agency Original Software Designation: pwa-starter
 * Government Agency Original Software Title: pwa-starter
 * User Registration Requested. Please send email
 * with your contact information to: robert.a.kayl.civ@mail.mil
 * Government Agency Point of Contact for Original Software - Program Manager: robert.a.kayl.civ@mail.mil
 */
import { Button, Typography } from '@mui/material';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'store/rootReducer';
import { incrementCounter } from 'store/slices/counterSlice';

const Home = () => {
  const count = useSelector((state: State) => state.counterState.count);
  const dispatch = useDispatch();

  const handleIncrementClick = (event: React.ChangeEvent<unknown>) => {
    dispatch(incrementCounter());
  };

  return (
    <>
      <Typography variant="h3">Curl Element</Typography>
      <Typography gutterBottom>
        This application assists people with different kinds of hair types, and allows them to keep
        their hair as healthy as possible.
      </Typography>
      <Typography variant="h4">Getting Started</Typography>
      <ul>
        <Typography gutterBottom>
          Go to our Product Scan tab to take a look at your products, or head to the Guide tab for
          some tips and tricks.
        </Typography>
      </ul>
    </>
  );
};

export default Home;
