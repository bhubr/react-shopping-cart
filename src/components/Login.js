import React from 'react'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import MailIcon from '@material-ui/icons/Mail'
import LockIcon from '@material-ui/icons/Lock'

const styles = {
  form: {
    padding: 40
  },
  margin: {
    width: '100%',
    marginBottom: 30
  }
}

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit (e) {
    console.log('submit login', e)
    e.preventDefault()
    // Submit to login URL
    fetch('/path/to/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(response => response.json())
      .then(result => {
        // do something
      })
  }
  render () {
    const { classes } = this.props
    return (
      <Grid container spacing={12} justify="center">
        <Grid item xs={12} sm={6} md={4}>
          <Paper classes={classes.paper}>
            <form className={classes.form} onSubmit={this.onSubmit}>
              <FormControl className={classes.margin}>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  className={classes.input}
                  id="email"
                  type="email"
                  name="email"
                  onChange={this.onChange}
                  startAdornment={
                    <InputAdornment position="start">
                      <MailIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl className={classes.margin}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  className={classes.input}
                  id="password"
                  type="password"
                  name="password"
                  onChange={this.onChange}
                  startAdornment={
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <div>
                <Button type="submit" color="primary" variant="raised">
                  Sign in
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Login)
