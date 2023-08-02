// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? 'bg-dark' : 'bg-light'
      const text = isDarkTheme ? 'text-dark' : 'text-light'

      const img = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      return (
        <div className="home-container">
          <Navbar />
          <div className={`home ${bgColor}`}>
            <img src={img} alt="home" className="home-img" />
            <h1 className={`heading ${text}`}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
