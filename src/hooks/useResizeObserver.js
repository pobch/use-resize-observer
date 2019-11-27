import { useEffect, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

const useResizeObserver = refs => {
  const [dimensions, setDimensions] = useState([])
  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      let newDimensions = []
      entries.forEach(entry => {
        // console.log(entry)
        newDimensions.push(entry.contentRect)
      })
      setDimensions(newDimensions)
    })
    refs.forEach(ref => {
      resizeObserver.observe(ref.current)
    })
    return () => {
      // console.log('%cUnobserve', 'background-color: salmon; color: white;')
      refs.forEach(ref => {
        resizeObserver.unobserve(ref.current)
      })
    }
  }, [refs])
  return dimensions
}

export { useResizeObserver }
