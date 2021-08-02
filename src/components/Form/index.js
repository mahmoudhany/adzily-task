import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '40%',
    },
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
}));

export default function Form({
  amount,
  count,
  onClickReset
}) {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    mobile: ''
  });
  const [showError, setShowError] = useState(false);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const emptyFields = Object.keys(data).filter(key => data[key] === '');
    if (emptyFields.length !== 0) return setShowError(true);
    setShowError(false);
    setShowModal(true);
  }
  const style = {
    li: {
      marginBottom: 16,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    b: {
      textTransform: 'capitalize'
    }
  };
  return (
    <Grid item >
      <Modal
        open={showModal}
        onClose={() => {
          setShowModal(false);
          onClickReset();
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          display: 'flex',
          padding: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{
          width: 400,
          backgroundColor: '#fff',
          padding: 20,
          borderRadius: 10
        }}>
          <ui style={{ listStyle: 'none' }}>
            {
              Object.keys(data).map(key => (
                <li style={style.li}><b style={style.b}>{key}:</b> {data[key]}</li>
              ))
            }
            <li style={style.li}><b style={style.b}>count:</b> {count}</li>
            <li style={style.li}><b style={style.b}>amount:</b> {amount}$</li>
          </ui>
        </div>
      </Modal>
      <form className={classes.root}
        noValidate={false}
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <TextField
          value={data.name}
          name="name"
          label="Name"
          placeholder='John Doe'
          InputProps
          onChange={onChange}
          error={showError && data.name === ''}
        />
        <TextField
          value={data.email}
          name="email"
          label="Email"
          placeholder='example@example.com'
          onChange={onChange}
          error={showError && data.email === ''}
        />
        <TextField
          value={data.mobile}
          name="mobile"
          label="Mobile"
          placeholder='e.g. 999-999-9999'
          onChange={onChange}
          error={showError && data.mobile === ''}
        />
        <Button
          type='submit'
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>

    </Grid >
  )
}
