import React from 'react'

const FullPageLoader = () => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <span className="loading loading-spinner loading-lg text-white"></span>
    </div>
  )
}

export default FullPageLoader
