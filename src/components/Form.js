import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

function Form() {
  const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
  }));
  const classes = useStyles();


  return (
    <main className='form-container'>
      <h1>Incentronauten Formulier</h1>
      <TextField
        required
        id="outlined-required"
        label="Voorletters"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        type="text"
      />

      <TextField
        required
        id="outlined-required"
        label="Achternaam"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        type="text"
      />

      <TextField
        required
        id="outlined-required"
        label="Postcode"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        type="text"
      />

      <TextField
        required
        id="outlined-required"
        label="Huisnummer"
        defaultValue="Huisnummer"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        type="number"
      />

      <TextField
        required
        id="outlined-required"
        label="E-mail adres"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        type="email"
      />

    </main>
  );
}

export default Form;
