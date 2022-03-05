/** @jsxImportSource @emotion/react */
/*
 * Footer.tsx
 * Footer component.
 *
 * Created by Arnold Koh on 7/13/20.
 *
 * dha-mood-tracker
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
 * Government Agency Original Software Designation: dha-mood-tracker
 * Government Agency Original Software Title: dha-mood-tracker
 * User Registration Requested. Please send email
 * with your contact information to: robert.a.kayl.civ@mail.mil
 * Government Agency Point of Contact for Original Software - Program Manager: robert.a.kayl.civ@mail.mil
 */
import { css } from '@emotion/react';
import { AppBar, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import dhaLogo from 'assets/images/dha-logo.png';
import mhsLogo from 'assets/images/mhs-logo.png';
import sddLogo from 'assets/images/sdd-logo.png';
import { useEffect, useState } from 'react';
import packageJson from '../../../package.json';

const Footer = () => {
  const [dateUpdated, setDateUpdated] = useState('');
  const theme = useTheme();

  const styles = {
    footerRoot: css`
      padding: ${theme.spacing(4)} ${theme.spacing(2)};
    `,
    logos: css`
      margin-bottom: ${theme.spacing(4)};
      max-width: 480px;
    `,
  };

  useEffect(() => {
    fetch('https://api.bitbucket.org/2.0/repositories/wmtp/pwa-starter/commits', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        setDateUpdated(resJson.values[0].date.split('T')[0]);
      })
      .catch((error: Error) => {
        console.error('Error:', error);
      });
  });

  return (
    <AppBar css={styles.footerRoot} position="static">
      <Grid container alignItems="center" direction="column">
        <Grid css={styles.logos} container item justifyContent="space-around">
          <a
            href="https://www.health.mil/About-MHS/OASDHA/Defense-Health-Agency"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img alt="Defense Health Agency logo" src={dhaLogo} />
          </a>
          <a href="https://www.health.mil" rel="noopener noreferrer" target="_blank">
            <img alt="Military Health System logo" src={mhsLogo} />
          </a>
          <a
            href="https://www.health.mil/About-MHS/OASDHA/Defense-Health-Agency/Information-Operations-J6-Health-IT/Solution-Delivery-Division"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img alt="Solution Delivery Division logo" src={sddLogo} />
          </a>
        </Grid>
        <Typography variant="body2">
          v{packageJson.version} - Updated: {dateUpdated}
        </Typography>
      </Grid>
    </AppBar>
  );
};

export default Footer;
