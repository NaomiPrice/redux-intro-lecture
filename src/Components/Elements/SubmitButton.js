import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import 'typeface-roboto';
import {Fingerprint} from '@material-ui/icons';

const styles = theme => ({
    button: {
        margin: theme.spacing(1)
    }
})

class SubmitButton extends Component {
    render(){
        return(
            <Button variant="outlined" color="primary"
            onClick={this.props.handleClick}><Fingerprint/>Submit</Button>
        )
    }
}

export default withStyles(styles)(SubmitButton);