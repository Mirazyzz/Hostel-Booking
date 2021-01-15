import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
    padding: '5px',
  },
}));

/*
export default function MaterialSelect(props) {
  const classes = useStyles();
  const items = props.items.map((el) => (el = <MenuItem value={el} />));
  console.log(`${items[0]} ->`);

  const handleChange = (event) => {
    //props.handleChange(event.target.value);
  };

  return (
    <div className="form-group">
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">
          Choose type of a room
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={items[0]}
          onChange={handleChange}
        >
          {items}
        </Select>
      </FormControl>
    </div>
  );
}
*/

export default function NativeSelects(props) {
  const classes = useStyles();
  const items = props.items.map((el) => (
    <option value={el.toString()}>{el}</option>
  ));

  const handleChange = (event) => {
    props.handleChange(event.target.name, event.target.value);
    console.log(event.target.name);
    console.log(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel>{props.title}</InputLabel>
        <NativeSelect
          defaultValue={items[0]}
          onChange={handleChange}
          inputProps={{
            name: props.selectName,
          }}
        >
          {items}
        </NativeSelect>
      </FormControl>
    </div>
  );
}
