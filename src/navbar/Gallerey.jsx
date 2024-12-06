import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Gallerey = () => {
  return (
    <div className="gallery">
      <Link to='/Gallery'>Gallery</Link>
      <ul className="dropdown">
        <li>Nature</li>
        <li>People</li>
        <li>Architecture</li>
        <li>Animals</li>
        <li>Sports</li>
        <li>Travel</li>
        <li>Deep Dropdown
          <ul className="deep-dropdown">
            <li>Deep Dropdown 1</li>
            <li>Deep Dropdown 2</li>
            <li>Deep Dropdown 3</li>
            <li>Deep Dropdown 4</li>
            <li>Deep Dropdown 5</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Gallerey