import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import formatPrice from '../helpers/formatPrice'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '100%'
  },
}

const ProductItem = ({ classes, product, onAddToCart }) => {
  // const { classes } = props
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={ `/img/${product.image}` }
          title={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {product.title}
          </Typography>
          <Typography component="p">
            {product.artist}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={e => onAddToCart(product.id)}>
            Add to Cart
          </Button>
          <Button size="small" color="primary">
            View
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

ProductItem.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductItem)
