import {useState, useEffect} from 'react'
import constants from './constants';

function WindowWidthCheck({
  setWidth
})
 {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  function widthSet() {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', widthSet)
    if (constants.window.width768 < windowWidth) {
      setWidth(constants.movieShowConstants.more768)
    } else if (constants.window.width480 < windowWidth <= constants.window.width768) {
      setWidth(constants.movieShowConstants.less768)
    } else if (windowWidth <= constants.window.width480) {
      setWidth(constants.movieShowConstants.less480)
    }
  }, [windowWidth])
}

export default WindowWidthCheck
