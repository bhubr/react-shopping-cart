import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Badge from '@material-ui/core/Badge'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { Link } from 'react-router-dom'

const styles = theme => ({
  appBar: {
    marginBottom: 30
  },
  links: {
    color: '#fff',
    textDecoration: 'none'
  },
  margin: {
    marginRight: theme.spacing.unit * 4,
  },
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 30,
  },
})

class MenuAppBar extends React.Component {
  state = {
    auth: false,
    anchorEl: null,
  }

  handleChange = (event, checked) => {
    this.setState({ auth: checked })
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { cart, classes } = this.props
    const totalQty = cart.reduce((carry, item) => carry + item.qty, 0)
    const { auth, anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>

            <Typography variant="title" color="inherit" className={classes.flex}>
              <Link className={classes.links} to="/">Title</Link>
            </Typography>

            <Link className={classnames(classes.links, classes.margin)} to="/cart">
              <Badge badgeContent={totalQty} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </Link>
            {auth ? (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            ) :
              <Typography variant="title" color="inherit">
                <Link className={classes.links} to="/login">Login</Link>
              </Typography>
            }
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  cart: PropTypes.array
}

export default withStyles(styles)(MenuAppBar)
