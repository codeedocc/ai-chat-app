// 'use client'

// import { Toaster } from 'react-hot-toast'

// function ClientProvider() {
//   return (
//     <>
//       <Toaster position="top-right" />
//     </>
//   )
// }

// export default ClientProvider
'use client'

import { Toaster } from 'react-hot-toast'

export default function ClientProvider() {
  return (
    <>
      <Toaster position="top-right" />
    </>
  )
}
