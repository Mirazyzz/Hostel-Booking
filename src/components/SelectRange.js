import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Slider from '@material-ui/core/Slider';

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
  mark: {
    backgroundColor: '#505050',
    height: 14,
    width: 3,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
  },
  margin: {
    height: theme.spacing(1),
  },
}));

export default function DiscreteSlider(props) {
  const classes = useStyles();

  const marks = props.marks.map((el, index) => (el = { value: index }));

  const valueLabelFormat = (value) => {
    return props.marks[value].toString();
  };

  const handleChange = (event, newValue) => {
    props.handleChange(props.marks[newValue]);
  };

  return (
    <div className={classes.root}>
      <InputLabel>Choose price</InputLabel>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        valueLabelFormat={valueLabelFormat}
        defaultValue={marks[0].value}
        step={null}
        marks={marks}
        min={0}
        max={marks.length - 1}
        onChange={handleChange}
      />
      <div className={classes.margin} />
    </div>
  );
}
