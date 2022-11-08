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
    if (768 < windowWidth) {
      setWidth(constants.movieShowConstants.more768)
    } else if (480 < windowWidth <= 768) {
      setWidth(constants.movieShowConstants.less768)
    } else if (windowWidth <= 480) {
      setWidth(constants.movieShowConstants.less480)
      // setWidth({start: 5, add: 2})
    }
  }, [windowWidth])
}

export default WindowWidthCheck
