/** @jsxImportSource @emotion/react */
/*
 * EULA.tsx
 * EULA component.
 *
 * Created by Arnold Koh on 7/14/20.
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
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { MobileView } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'store/rootReducer';
import { acceptEula } from 'store/slices/eulaSlice';
import { useNavigate } from 'react-router-dom';

const EULA = () => {
  const accepted = useSelector((state: State) => state.eulaState.accepted);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const onClose = () => {
    dispatch(acceptEula());
    navigate('/');
  };

  const styles = {
    eulaDialogRoot: css`
      background-color: ${theme.palette.primary.main};
      z-index: 100;
    `,
    eulaDialogContentRoot: css`
      padding: 0;
      background-color: ${theme.palette.primary.main};
      color: ${theme.palette.common.white};
    `,
    eulaMobileRoot: css`
      background-color: ${theme.palette.primary.main};
      z-index: 1;
      position: sticky;
      top: 0;
      opacity: 1;
    `,
    eulaBackButton: css`
      background-color: ${theme.palette.primary.main};
      color: ${theme.palette.common.white};
    `,
    eulaTitleBackground: css`
      background-color: ${theme.palette.primary.main};
      color: ${theme.palette.common.white};
      font-size: 24;
      @media (max-width: ${theme.breakpoints.values.sm}) {
        font-size: 12;
      } ;
    `,
    eulaDialogAction: css`
      background-color: ${theme.palette.primary.light};
      color: ${theme.palette.primary.main};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: ${theme.spacing(3)};
      min-height: 8rem;
    `,
    eulaAgreeButton: css`
      width: 20rem;
      min-height: 20px;
      justify-content: center;
      size: large;
      border-radius: 20;
      @media (max-width: ${theme.breakpoints.values.sm}) {
        margin-top: 1rem;
        width: 100%;
        padding-left: 2rem;
        padding-right: 2rem;
      } ;
    `,
  };

  /*
   * Added some screen best practices.
   * This allows blind users to know where they're at on the page.
   * https://github.com/mui-org/material-ui/issues/9158
   */
  return (
    <Dialog
      css={styles.eulaDialogRoot}
      role="dialog"
      aria-modal="true"
      aria-label="This is the end user license agreement, please read the agreement and press agree button to continue."
      aria-labelledby="dialog-title"
      aria-describedby="dialog-agreement"
      disableEscapeKeyDown
      maxWidth="lg"
      open={!accepted}
    >
      <div css={styles.eulaMobileRoot}>
        <MobileView>
          <Button css={styles.eulaBackButton}>Back</Button>
        </MobileView>
      </div>
      <DialogTitle id="dialog-title" css={styles.eulaTitleBackground}>
        Defense Health Agency (DHA) End User License Agreement
      </DialogTitle>
      <DialogContent id="dialog-agreement" css={styles.eulaDialogContentRoot}>
        <List>
          <ListItem>
            <ListItemText
              primary="By agreeing to have any of DHA software products installed on to your device and by
          subsequent use of the Software, you agree to comply with the terms of this general End
          User License Agreement (EULA) where no specific agreement is in place between DHA and the
          user of the software. If you do not agree to the terms of this EULA, do not install or use
          the Software but uninstall it from your device. This EULA applies to any upgrades and
          supplements to the original Software provided and is referred to on your opening screen."
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="The Licensed Software is owned by The Defense Health Agency (DHA), an agency of the United States Department of Defense (DOD). The Software is licensed, not sold, only on the terms of this EULA. Acceptance and installation of the software indicates your acceptance of the terms and conditions of this EULA. Upon installation of the software, you will acquire the right to use the Software, directly from DHA. You assume responsibility for the selection of the program to achieve your intended results, and for the installation, use and results obtained from the Licensed Software." />
          </ListItem>
          <ListItem>
            <ListItemText primary="In consideration of your acceptance of the terms and conditions contained in this EULA, DHA grants you a non-exclusive license to use the Licensed Software and the associated documentation for your own needs on one device. You are not licensed to rent, lease, transfer or distribute the Software." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Title to the Software, including media and documentation, remain with DHA. You may not copy, reproduce or make data transmissions, in whole or in part, except as is necessary for back-up or archival purposes. You may not reverse engineer, translate, disassemble, decompile the Software or create similar software in whole or in part." />
          </ListItem>
          <ListItem>
            <ListItemText primary="The license is effective upon acceptance and installation of the Licensed Software and shall continue until terminated. You may terminate it at any time by uninstalling the Licensed Software. DHA has the right to terminate this Agreement if you fail to comply with any term or condition of this EULA. Upon termination you shall stop all use of the Software and uninstall the Licensed Software." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Confidentiality of the Software will survive any termination of this EULA, to include the application, design, and functionality." />
          </ListItem>
          <ListItem>
            <ListItemText primary="This Software is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE." />
          </ListItem>
          <ListItem>
            <ListItemText primary="In no event will DHA be liable for any loss of data, loss of use, or indirect, special, incidental or consequential damages in any way related to or arising out of the use of the Software. DHA's maximum liability shall in no event exceed the amounts paid to DHA for the Licensed Software." />
          </ListItem>
          <ListItem>
            <ListItemText primary="The prevailing party in any action or proceeding between DHA and End-User Licensee arising out of or related to this Agreement shall be entitled to recover reasonable legal fees and costs, including lawyers'fees, which may be incurred." />
          </ListItem>
          <ListItem>
            <ListItemText primary="This Agreement shall be construed and enforced in accordance with the laws of the District of Columbia, United States of America and each party agrees to be subject to those relevant laws." />
          </ListItem>
          <ListItem>
            <ListItemText primary="You also acknowledge that it is your responsibility to protect and otherwise secure any information captured and stored by the software once installed on your device." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Information captured and stored by the software program may be considered sensitive information. It is the end user’s responsibility to protect or otherwise secure the content captured and stored by the software once installed on the end user’s device." />
          </ListItem>
          <ListItem>
            <ListItemText primary="It is understood and acknowledged that DHA has the absolute right to obtain injunctive relief to protect DHA's proprietary rights." />
          </ListItem>
          <ListItem>
            <ListItemText primary="By using the Software, you further agree that this is the complete and exclusive statement of the Agreement which supersedes any proposal or prior agreement, oral or written, and any other communications relating to the subject matter of this EULA." />
          </ListItem>
          <ListItem>
            <ListItemText primary="If any provision of this Agreement is held to be invalid or unenforceable the remaining provisions will not be affected." />
          </ListItem>
          <ListItem>
            <ListItemText primary="The information in the application is not intended as a substitute for any type of professional medical services or training and should not be used for such purposes. The information is provided as is and the author does not warrant the accuracy of the information. This information is not meant to diagnose or develop permanent treatment plans for health emergencies, health problems or diseases. If you are in an emergency or life-threatening medical situation, seek medical assistance immediately. Dial the number 911 in the USA for emergency medical services." />
          </ListItem>
          <ListItem>
            <ListItemText primary="External Links: The appearance of external hyperlinks does not constitute endorsement by the United States Department of Defense of the linked websites, or the information, products or services contained therein. The United States Department of Defense does not exercise any editorial control over the information you may find at these locations. All links are provided consistent with the stated purpose of these DoD websites." />
          </ListItem>
        </List>
        <DialogActions css={styles.eulaDialogAction}>
          You must accept the terms and conditions of this EULA to continue.
          <Button
            css={styles.eulaAgreeButton}
            color="primary"
            // onClick={handleAgreeButtonClick}
            onClick={onClose}
            variant="contained"
          >
            Accept & Continue
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default EULA;
