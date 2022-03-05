/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useContext } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { isMobile } from 'react-device-detect';
import { DatabaseContext } from 'providers/DatabaseProvider';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'providers/AuthProvider';
import { useDispatch } from 'react-redux';
import { setCreated } from 'store/slices/accountSlice';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      autoWidth: true,
    },
  },
};

const questions = [
  'In what city did you meet your first spouse/partner?',
  'In what city did your parents meet?',
  'In what city does your nearest sibling live?',
  'In what city was your father born?',
  'In what city was your first job?',
  'In what city was your mother born?',
  "What city were you in on New Year's 2000?",
  'What is the last name of your favorite teacher in high school?',
  "What is the name of a college you applied to but didn't attend?",
  "What is your father's middle name?",
  'What is your favorite food?',
  "What is your maternal grandmother's first and last name?",
  "What is your mother's middle name?",
  "What is your oldest sibling's middle name?",
  "What is your paternal grandfather's first and last name?",
  "What is your youngest sibling's middle name?",
  'What school did you attend for sixth grade?',
  'What was the first and last name of your childhood best friend?',
  'What was the first and last name of your first significant other?',
  'What was the last name of your favorite grade school teacher?',
  'What was the make and model of your first car or motorcycle?',
  'What was the name of the first school you attended?',
  'What was the name of the hospital in which you were born?',
  'What was the name of the street of your first childhood home?',
  'What was the name of your childhood hero?',
  'What was the name of your favorite stuffed animal?',
  'What was the name of your first pet?',
  'What was your childhood nickname?',
  'What was your favorite sport in high school?',
  'What was your first job?',
  'What were the last four digits of your childhood telephone number?',
  'When you were young, what did you want to be when you grew up?',
  'Who is the most famous person you have ever met?',
];

const AccountSetup = () => {
  const { setAuthenticated } = useContext(AuthContext);
  const dispatch = useDispatch();
  const theme = useTheme();
  const fullScreen = isMobile ? true : false;
  const navigate = useNavigate();
  const db = useContext(DatabaseContext);

  const validationSchema = yup.object({
    pin: yup
      .string()
      .defined('Enter a valid pin')
      .min(6, 'Pin must be at least 6 characters')
      .matches(new RegExp('^\\d+$'), 'Pin must only contain numbers')
      .trim(),
    question1: yup.string().defined('Please enter a security question').trim(),
    answer1: yup.string().defined('Please enter an answer to your security question').trim(),
    question2: yup.string().defined('Please enter a security question').trim(),
    answer2: yup.string().defined('Please enter an answer to your security question').trim(),
  });

  const formik = useFormik({
    initialValues: {
      pin: '',
      question1: '',
      answer1: '',
      question2: '',
      answer2: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Save to database
      if (db !== null) {
        db.userProfile
          .put(values, 1)
          .then(() => {
            dispatch(setCreated());
            setAuthenticated(true);
            navigate('/');
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
  });

  const styles = {
    accountSetupDialogRoot: css`
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      color: ${theme.palette.common.white};
    `,
    accountSetupDialogContent: css`
      background-color: ${theme.palette.primary.main};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      color: ${theme.palette.common.white};
      @media only screen and (min-width: 768px) {
        padding: 2rem 4rem 2rem 4rem;
        min-height: 30rem;
        width: 38rem;
      }
    `,
    accountPin: css`
      width: 100%;
      background-color: ${theme.palette.common.white};
      border-radius: 0.5em;
      @media only screen and (min-width: 768px) {
        height: 3.5rem;
      }
    `,
    accountQuestionRoot: css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 1.5rem;
    `,
    accountQuestionSelect: css`
      border-radius: 0.3em;
      font-size: calc(7px + (16 - 10) * ((100vw - 300px) / (1600 - 300)));
      background-color: ${theme.palette.common.white};
    `,
    accountQuestionMenu: css`
      font-size: calc(7px + (16 - 10) * ((100vw - 300px) / (1600 - 300)));
    `,
    accountQuestionAnswer: css`
      background-color: ${theme.palette.common.white};
      border-radius: 0.5em;
      margin-top: 0.5rem;
      input[type='text'] {
        font-size: calc(7px + (16 - 10) * ((100vw - 300px) / (1600 - 300)));
      }
    `,
    accountSetupButton: css`
      width: 100%;
      min-height: 20px;
      border-radius: 20;
    `,
    form: css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 100%;
    `,
  };

  return (
    <Dialog
      css={styles.accountSetupDialogRoot}
      open={true}
      disableEscapeKeyDown
      maxWidth="lg"
      fullScreen={fullScreen}
    >
      <DialogContent id="dialog-agreement" css={styles.accountSetupDialogContent}>
        <Typography component="h1" variant="h6">
          Welcome to (insert app name here)!
        </Typography>
        <Typography variant="subtitle2">Let&apos;s setup your account.</Typography>
        <Typography variant="subtitle1">Create a 6 digit security PIN</Typography>
        <form css={styles.form} onSubmit={formik.handleSubmit}>
          <TextField
            required
            css={styles.accountPin}
            id="pin"
            variant="outlined"
            type="password"
            inputMode="numeric"
            inputProps={{ maxLength: 6 }}
            value={formik.values.pin}
            onChange={formik.handleChange}
            error={formik.touched.pin && Boolean(formik.errors.pin)}
            helperText={formik.touched.pin && formik.errors.pin}
          />
          <Typography variant="subtitle1">Set up your security authentication</Typography>
          <FormControl css={styles.accountQuestionRoot} variant="standard">
            <Select
              css={styles.accountQuestionSelect}
              displayEmpty
              id="question1"
              name="question1"
              input={<OutlinedInput />}
              MenuProps={MenuProps}
              inputProps={{ 'aria-label': 'Without label' }}
              variant="standard"
              value={formik.values.question1}
              onChange={formik.handleChange}
              error={formik.touched.question1 && Boolean(formik.errors.question1)}
            >
              <MenuItem css={styles.accountQuestionMenu} disabled value="">
                <em>Select your first authentication question</em>
              </MenuItem>
              {questions.map((question) => (
                <MenuItem css={styles.accountQuestionMenu} key={question} value={question}>
                  {question}
                </MenuItem>
              ))}
            </Select>
            <TextField
              css={styles.accountQuestionAnswer}
              placeholder="First authentication answer"
              id="answer1"
              name="answer1"
              value={formik.values.answer1}
              variant="outlined"
              onChange={formik.handleChange}
              error={formik.touched.answer1 && Boolean(formik.errors.answer1)}
              helperText={formik.touched.answer1 && formik.errors.answer1}
            />
          </FormControl>
          <FormControl css={styles.accountQuestionRoot} variant="standard">
            <Select
              css={styles.accountQuestionSelect}
              displayEmpty
              id="question2"
              name="question2"
              input={<OutlinedInput />}
              MenuProps={MenuProps}
              inputProps={{ 'aria-label': 'Without label' }}
              variant="standard"
              value={formik.values.question2}
              onChange={formik.handleChange}
              error={formik.touched.question2 && Boolean(formik.errors.question2)}
            >
              <MenuItem css={styles.accountQuestionMenu} disabled value="">
                <em>Select your second authentication question</em>
              </MenuItem>
              {questions.map((question) => (
                <MenuItem css={styles.accountQuestionMenu} key={question} value={question}>
                  {question}
                </MenuItem>
              ))}
            </Select>
            <TextField
              css={styles.accountQuestionAnswer}
              placeholder="Second authentication answer"
              id="answer2"
              name="answer2"
              value={formik.values.answer2}
              variant="outlined"
              onChange={formik.handleChange}
              error={formik.touched.answer2 && Boolean(formik.errors.answer2)}
              helperText={formik.touched.answer2 && formik.errors.answer2}
            />
          </FormControl>
          <Button css={styles.accountSetupButton} type="submit" color="primary" variant="contained">
            Done
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AccountSetup;
