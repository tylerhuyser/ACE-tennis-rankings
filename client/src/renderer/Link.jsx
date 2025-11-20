import React from 'react'
import PropTypes from 'prop-types'
import { usePageContext } from './usePageContext'
import { navigate, prefetch } from 'vike/client/router'

export { Link }

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  prefetchOnHover: PropTypes.bool,
}

function Link({ href, className: classNameProp, prefetchOnHover = true, ...props }) {
  const pageContext = usePageContext()
  const { urlPathname } = pageContext

  // Active class
  const isActive = href === '/' ? urlPathname === href : urlPathname.startsWith(href)
  const className = [classNameProp, isActive && 'is-active'].filter(Boolean).join(' ')

  const handleClick = (e) => {
    e.preventDefault()
    navigate(href)
  }

  const handleMouseEnter = () => {
    if (prefetchOnHover) prefetch(href)
  }

  return (
    <a
      {...props}
      href={href}
      className={className}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
    />
  )
}
