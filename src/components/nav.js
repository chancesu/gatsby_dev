import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Nav = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About me</Link>
    <Link to="/blog">Blog</Link>
  </nav>
)

export default Nav
