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
        <Typography variant="h4" marked="center" className={classes.title} component="h2">
          How it works
        </Typography>
        <div>
          <Grid container spacing={40}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>1.</div>
                <Typography variant="h5" align="center">
                  Appointment every Wednesday 9am.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>2.</div>
                <Typography variant="h5" align="center">
                  First come, first served. Our offers are in limited quantities, so be quick.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
                <Typography variant="h5" align="center">
                  {'New offers every week. New experiences, new surprises. '}
                  {'Your Sundays will no longer be alike.'}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <Button
          size="large"
          variant="contained"
          className={classes.button}
          component={linkProps => (
            <Link {...linkProps} href="/" variant="button" />
          )}
        >
          Get started
        </Button>
      </LayoutBody>
    </section>
  );
}

EmployeeSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmployeeSection);