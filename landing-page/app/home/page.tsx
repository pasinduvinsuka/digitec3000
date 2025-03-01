
'use client'

import { BentoSection } from '@/components/custom/bento-section'
import { CodeSnippet } from '@/components/custom/code-snippet'
import { HeorBackground } from '@/components/custom/hero-background'
import { HeroText } from '@/components/custom/hero-text'
import { Code } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <div className='py-16   '>
      <HeroText/>
      <BentoSection/>
    </div>
  )
}
