import React from 'react'
// https://reactjs.org/docs/typechecking-with-proptypes.html#___gatsby
import PropTypes from 'prop-types'

// Syntaxe alternative pour l'écriture de composants
// L'utilisation depuis un composant est la même chose
const Paragraph = (props) => (
  <p>{props.text}</p>
)

Paragraph.propTypes = {
  text: PropTypes.string
}

const AboutPage = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.title}</h1>
      <Paragraph text={props.text} />
    </div>
  )
}

AboutPage.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}

export default AboutPage