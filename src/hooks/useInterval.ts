import { useEffect, useRef } from 'react'
export function useInterval(callback: object, delay: number) {
  interface savedCallback {
    current: object
  }

  const savedCallback: any = useRef()
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect((): any => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => {
        clearInterval(id)
      }
    }
  }, [delay])
}
