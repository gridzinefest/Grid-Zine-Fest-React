import React from 'react'

import PropTypes from 'prop-types'

import './logo.css'

const Logo = (props) => {
  return (
    <div
      data-tq-el="1n82jq"
      className={`logo-container ${props.rootClassName} `}
    >
      <div data-tq-el="1t2172" className="tq-brand-lockup">
        <img
          loading={props.tqImageLoading}
          decoding="async"
          alt="image"
          src="/grid_logo_2024-200h.png"
          data-tq-el="14wxme"
          fetchpriority={props.tqImageFetchPriority}
          className="logo-image"
        />
      </div>
    </div>
  )
}

Logo.defaultProps = {
  rootClassName: '',
  tqImageLoading: 'lazy',
  tqImageFetchPriority: 'auto',
}

Logo.propTypes = {
  rootClassName: PropTypes.string,
  tqImageLoading: PropTypes.string,
  tqImageFetchPriority: PropTypes.string,
}

export default Logo
