import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

function Form(props) {
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

  const { onChange,
          onSubmit,
          locationDetails } = props

  return (
    <main className='form-container'>
      <h1>Incentronauten Formulier</h1>
      <form onSubmit={onSubmit}>
        <TextField
          required
          id="outlined-required"
          label="Voorletters"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          type="text"
          name='firstName'
          onChange={onChange}
        />

        <TextField
          id="outlined-name"
          label="Tussenvoegsel"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          type="text"
          name='additives'
          onChange={onChange}
        />

        <TextField
          required
          id="outlined-required"
          label="Achternaam"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          type="text"
          name='lastName'
          onChange={onChange}
        />

        <TextField
          required
          id="outlined-required"
          label="Postcode"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          type="text"
          name='postcode'
          onChange={onChange}
        />

        <TextField
          id="outlined-name"
          label="Straatnaam"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          type="text"
          name='streetname'
          disabled={true}
          value={locationDetails.name}
        />

        <TextField
          id="outlined-name"
          label="Stad"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          type="text"
          name='city'
          disabled={true}
          value={locationDetails.city}
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
          name='housenumber'
          onChange={onChange}
        />

        <TextField
          required
          id="outlined-required"
          label="E-mail adres"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          type="email"
          name='email'
          onChange={onChange}
        />

        <input type="submit" value="Submit" />
      </form>

    </main>
  );
}

export default Form;
