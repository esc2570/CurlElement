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
      <Typography variant="h3">PWA-Starter</Typography>
      <Typography gutterBottom>
        This application is a react starter application used by DHA developers for developing
        progressive web applications.
      </Typography>
      <Typography gutterBottom>This project was bootstrapped with Create React App.</Typography>
      <Typography variant="h4">Getting Started</Typography>
      <ul>
        <li>git clone git@bitbucket.org:wmtp/pwa-starter.git</li>
        <li>cd pwa-starter</li>
        <li>npm i</li>
        <li>npm start</li>
      </ul>
      <Typography variant="h4">New Project Instructions</Typography>
      <ul>
        <li>Authentication</li>
        <ul>
          <li>
            If the app needs authentication, uncomment all lines of code for account setup and login
            in file below
          </li>
          <li>File path pages/Routes/RequireAuth.tsx</li>
          <li>
            User Timeout - Uncomment lines above to have user timeout enabled and redirected to
            login after 1hr.
          </li>
          <li>File path pages/providers/AuthProvider.tsx</li>
        </ul>
        <li>.gitignore</li>
        <ul>
          <li>Uncomment build folder if its not needed in the repository for CI/CD or hosting.</li>
        </ul>
        <li>package.json</li>
        <ul>
          <li>
            Add or replace the values for: name, version, author, description, repository.url, and
            bug.url.
          </li>
        </ul>
        <li>Copyright Headers</li>
        <ul>
          <li>Add copyright headers to every new file.</li>
          <li>Add the file name on the first line.</li>
          <li>Add the file description on the second line</li>
          <li>
            Replace firstName, lastName, and date for the line &quot;Created by firstName lastName
            on date&quot;.
          </li>
        </ul>
        <li>
          Search and replace all instances of &quot;pwa-starter&quot; with your application name in
          all project files.
        </li>
      </ul>
      <Typography variant="h4">Example of React Component</Typography>
      <Typography gutterBottom>Redux Counter: {count}</Typography>
      <Button color="primary" onClick={handleIncrementClick} variant="contained">
        Increment
      </Button>
    </>
  );
};

export default Home;
