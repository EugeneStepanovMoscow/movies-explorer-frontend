import Rect, {useState, useEffect} from 'react'

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
      setWidth({start: 12, add: 3})
    } else if (480 < windowWidth <= 768) {
      setWidth({start: 8, add: 2})
    } else if (windowWidth <= 480) {
      setWidth({start: 5, add: 2})
    }
  }, [windowWidth])
}

export default WindowWidthCheck
