import React from 'react'

const Random = () => {
  return (
    <div>
      <div className="w-full h-screen bg-gray-900">
  <div className="relative w-full h-full">
    <img
      src="https://via.placeholder.com/800x600"
      className="w-full h-full object-cover border-4 border-yellow-500"
      alt="Test"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
      <h1 className="text-white text-4xl">Overlay Test</h1>
    </div>
  </div>
</div>

    </div>
  )
}

export default Random;