import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LayoutBody from '../LayoutBody';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EmployeeLogin from './EmployeeLogin';

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#ebebeb',
    overflow: 'hidden',
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 15,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `0px ${theme.spacing.unit * 5}px`,
  },
  title: {
    marginBottom: theme.spacing.unit * 14,
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 55,
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },

  button: {
    marginTop: theme.spacing.unit * 8,
  },
});

function EmployeeSection(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
        <LayoutBody className={classes.layoutBody} width="large">
            <Grid container spacing={40}>
                <Grid item xs={12}>
                    <Typography variant="h3" align="center">Employee Login</Typography>
                    <Typography variant="h5" align="center">Welcome, please login to your employee account.</Typography>
                </Grid>
                <Grid item xs={7}>
                    <Typography variant="h5" align="left">
                        Just login with the user name and password you got from your manger
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <EmployeeLogin/>  
                </Grid>
            
            </Grid>
        </LayoutBody>
    </section>
  );
}

EmployeeSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmployeeSection);