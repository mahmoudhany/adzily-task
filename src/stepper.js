import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Singers from './components/Singers';
import Albums from './components/Albums';
import Songs from './components/Songs';
import Total from './components/Total';
import Form from './components/Form';
import { Container, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { resetAlbums } from './redux/actions/album';
import { resetSingers } from './redux/actions/singer';
import { resetSongs } from './redux/actions/song';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  singers: {
    display: 'flex',
  },
  album: {
    display: 'flex',
  },
  instructions: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
  stepperBtns: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(5),
  }
}));

function getSteps() {
  return ['Select singers', 'Select Albums', 'Select Songs', 'Submit'];
}

function getSelectionLength(stepIndex, selectedState) {

  switch (stepIndex) {
    case 0:
      return selectedState.singers.filter(({ isSelected }) => isSelected).length === 0
    case 1:
      return selectedState.albums.filter(({ isSelected }) => isSelected).length === 0
    case 2:
      return selectedState.songs.filter(({ isSelected }) => isSelected).length === 0
    default:
      return 0;
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [count, setCount] = useState({
    count: 0,
    amount: 0
  });
  const steps = getSteps();
  const selectedState = useSelector(state => state)

  const handleNext = (e) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Container maxWidth="lg">
        <>
          {activeStep === steps.length ? (
            <>
              <Typography className={classes.instructions}>All steps completed</Typography>
              <Button onClick={handleReset}>Reset</Button>
            </>
          ) : (
            <>
              <Grid container spacing={2} >
                <Grid item xs={12} sm={9} >
                  {activeStep === 0 && <Singers />}
                  {activeStep === 1 && <Albums />}
                  {activeStep === 2 && <Songs />}
                  {activeStep === 3 && (
                    <Form
                      count={count.count}
                      amount={count.amount}
                      onClickReset={() => {
                        setActiveStep(0);
                        dispatch(resetSingers());
                        dispatch(resetAlbums());
                        dispatch(resetSongs());
                      }}
                    />
                  )}
                </Grid>
                <Grid item xs={12} sm={3} >
                  <Total
                    currentStep={activeStep}
                    singers={selectedState.singers}
                    albums={selectedState.albums}
                    songs={selectedState.songs}
                    setTotalAction={(count, amount) => setCount({ count, amount })}
                  />
                </Grid>
              </Grid>
              <div className={classes.stepperBtns}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                {
                  activeStep !== 3 && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      disabled={getSelectionLength(activeStep, selectedState)}
                    >
                      {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                    </Button>
                  )
                }
              </div>

            </>
          )}
        </>
      </Container>
    </div >
  );
}
