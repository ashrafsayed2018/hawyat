import React from 'react'
import { ColorRing } from 'react-loader-spinner'

const Spinner = () => {
  return (
    <ColorRing
      visible={true}
      height="50"
      width="50"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={['#00ff00, #00ff00', '#00ff00, #00ff00', '#00ff00, #00ff00']}
    />
  )
}

export default Spinner
