import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AccessTime from '@material-ui/icons/AccessTime';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

const styles = theme => ({
  button: {
    width: 200,
    height: 200,
  },
  buttonText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 20
  }
});

function PunchButton(props) {

    const { classes, start, onClick } = props;

    return (
        <React.Fragment>
        { start ? 
            <Fab color="secondary" aria-label="Start" className={classes.button} onClick={onClick()}>
                <div className={classes.buttonText}>
                    <AccessTime className={classes.icon}/>
                    Stop Clock
                </div>
            </Fab>
            :
            <Fab color="primary" aria-label="Start" className={classes.button} onClick={onClick()}>
                <div className={classes.buttonText}>
                    <AccessTime className={classes.icon}/>
                    Start Clock
                </div>
            </Fab>
        }
        </React.Fragment>
    );
}

PunchButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PunchButton);