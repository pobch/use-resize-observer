import { useEffect, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

const useResizeObserver = refs => {
  const [dimensions, setDimensions] = useState(null)
  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      entries.forEach(entry => {
        console.log(entry)
        setDimensions(entry.contentRect)
      })
    })
    refs.forEach(ref => {
      resizeObserver.observe(ref.current)
    })
    return () => {
      console.log('%cUnobserve', 'background-color: salmon; color: white;')
      refs.forEach(ref => {
        resizeObserver.unobserve(ref.current)
      })
    }
  }, [refs])
  return dimensions
}

export { useResizeObserver }
