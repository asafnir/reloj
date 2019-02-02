import React from 'react';
import Typography from '@material-ui/core/Typography';

class ListErrors extends React.Component {
  render() {
    const errors = this.props.errors;
    if (errors) {
      return (
        <div className="error-messages">
          {
            Object.keys(errors).map(key => {
              return (
                <Typography color='error' key={key} variant="body2" gutterBottom>
                  {key} {errors[key]}
                </Typography>
              );
            })
          }
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ListErrors;