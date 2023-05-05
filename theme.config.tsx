import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: 
    <div className='flex items-center gap-3'>
      <img src='/image/logo.png' alt='StaFi Protocol' className='w-8'/>
      <span className='font-bold text-xl'>StaFi Protocol</span>
    </div>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
