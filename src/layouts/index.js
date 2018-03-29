import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Strip from '../components/Strip';
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Joe DePumpo III"
      meta={[
        { name: 'description', content: 'Personal Website' },
        { name: 'keywords', content: 'Blog, Website, Portfolio, Resume,' },
      ]}
    />
    <Header />
    <Strip />
    <div
      style={{
        margin: '0 auto',
        maxWidth: '85%',
        padding: '2rem 3rem',
        paddingTop: '1rem',
        backgroundColor: 'WhiteSmoke',
        borderRadius: '0px 0px 10px 10px',
        marginBottom: '2.5rem',
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
