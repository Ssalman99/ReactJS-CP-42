// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgColor = isDarkTheme ? 'bg-dark' : 'bg-light'
      const text = isDarkTheme ? 'text-dark' : 'text-light'

      return (
        <div className="home-container">
          <Navbar />
          <div className={`home ${bgColor}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              className="home-img"
              alt="not found"
            />
            <h1 className={`heading ${text}`}>Lost Your Way ?</h1>
            <p className={`heading ${text}`}>
              We cannot seem to find the page your looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
