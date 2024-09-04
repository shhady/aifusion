import React from 'react'
import { SparklesPreview } from './AiTitle'
import { CompareDemo } from './AiPhotos'
import AiVideo from './AiVideo'
import AiContent from './AiContent'

export default function AiComponent() {
  return (
    <div className='bg-[#131313] text-white '>
        <SparklesPreview />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <CompareDemo />
        <AiVideo />
        <AiContent />
        </div>
    </div>
  )
}
