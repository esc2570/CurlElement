/** @jsxImportSource @emotion/react */
/*
 * About.tsx
 * About component.
 *
 * Created by Travis Bowen on 01/18/22.
 *
 * pwa-starter
 *
 * Copyright © 2009-2021 United States Government as represented by
 * the Program Manager of the DHA: Web and Mobile Technology Program Management Office
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

import { css } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, 
  // useTheme 
} from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Logo from '../../assets/images/dha.png';
import packageJson from '../../../package.json';

const About = () => {
  // const theme = useTheme();

  const styles = {
    box: css`
      display: flex;
      flex-direction: column;
      width: 100%;
    `,
    logo: css`
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 30%;
      padding-bottom: 5%;
    `,
    version: css`
      padding-top: 2%;
    `,
  };

  return (
    <Container component="main" maxWidth="xl">
      <CssBaseline />
      <Box css={styles.box}>
        <img alt="DHA" src={Logo} css={styles.logo} />
        <Typography component="h5" variant="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </Typography>
        <Typography css={styles.version}>v{packageJson.version}</Typography>
      </Box>
    </Container>
  );
};

export default About;
