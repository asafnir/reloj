import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import ProductHeroLayout from './ProductHeroLayout';
import Grid from '@material-ui/core/Grid';
import clock from './assets/c.png';

const styles = theme => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        paddingTop: 50,
    },
    background: {
        backgroundColor: '#fff', // Average color of the background image.
        backgroundPosition: 'center',
    },
    h5: {
        marginBottom: theme.spacing.unit * 4,
        [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing.unit * 2,
        },
    },
    image: {
        width: 'auto',
        height: 450,
        float: 'right'
    }
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={5} style={{paddingTop: 40}}>
                    <Typography align="center" variant="h2" marked="center">
                        Time tracking tool
                    </Typography>
                    <Typography align="center" variant="h5" className={classes.h5}>
                        simple employee time tracking
                    </Typography>
                </Grid>
                <Grid item xs={7}>
                    
                   
                        <div>
                            <img
                                src={clock}
                                alt="clock"
                                className={classes.image}
                            />
                        </div>
                   
                    
                </Grid>
            </Grid>
        </div>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);