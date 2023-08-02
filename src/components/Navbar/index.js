// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const logo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const img = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const changeColor = isDarkTheme ? 'nav-bg-dark' : 'nav-bg-light'
      const text = isDarkTheme ? 'text-dark' : 'text-light'

      const onToggleTheme = () => {
        toggleTheme(isDarkTheme)
      }

      return (
        <nav className={`nav-container ${changeColor}`}>
          <img src={logo} className="nav-logo" alt="website logo" />

          <ul className="list">
            <Link to="/" className={`list-item ${text}`}>
              <li>Home</li>
            </Link>
            <Link to="/about" className={`list-item ${text}`}>
              <li>About</li>
            </Link>
          </ul>

          <button
            data-testid="theme"
            type="button"
            onClick={onToggleTheme}
            className="button"
          >
            <img src={img} className="nav-img" alt="theme" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
