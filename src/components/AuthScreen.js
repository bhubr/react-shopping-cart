/* global fetch */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import MailIcon from '@material-ui/icons/Mail'
import LockIcon from '@material-ui/icons/Lock'
import Login from './Login'
import Register from './Register'
import { Link } from 'react-router-dom'

const styles = {
  bottomLink: {
    textAlign:'center',
    padding: 15
  },
  transition: {
    transition: 'height 0.5s'
  }
}

class AuthScreen extends React.Component {
  constructor (props) {
    super(props)
    const { login, register } = this.props.urls
    this.map = {
      [login]: Login,
      [register]: Register
    }
    this.links = {
      [login]: { text: 'Need an account?', label: 'Register', to: register },
      [register]: { text: 'Got an account?', label: 'Login', to: login }
    }
    console.log(this.map)
  }
  render () {
    const { classes, match: { path } } = this.props
    console.log(path, this.map[path])
    const Component = this.map[path]
    const { text, label, to } = this.links[path]
    return (
      <Grid container spacing={16} justify="center">
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.transition}>
            <Component />
            <Typography className={classes.bottomLink}>{text} <Link to={to}>{label}</Link></Typography>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

AuthScreen.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(AuthScreen)
