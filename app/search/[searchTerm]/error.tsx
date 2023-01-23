'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div>
      <p>Something went wrong!</p>
      <button onClick={() => reset()}>Reset erro boundary</button>
    </div>
  )
}
