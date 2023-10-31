'use client';
import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import SEO from '@/components/SEO';
import Typography from '@/components/Typography';
import { color, components, pages } from '@/contents/sandbox';

export default function SandboxPage() {
  return (
    <div className='flex flex-col gap-5 justify-center items-center min-h-screen'>
      <SEO title='Sandbox' />
      <div className='text-center flex flex-col justify-center items-center'>
        <Typography variant='h4' as='h4' font='poppins' weight='bold'>
          Design System
        </Typography>
        <Typography variant='h4' as='h4' font='poppins' weight='bold'>
          ARA 2023
        </Typography>
        <Typography className='max-w-4xl'>
          Key Performance Indicator Web Development ARA 2023
        </Typography>
      </div>
      <div className='text-center'>
        <Typography variant='h5' weight='semibold'>
          Pages
        </Typography>
        <div className='flex flex-grow gap-2'>
          {pages.map((page) => (
            <ButtonLink
              key={page.title}
              href={page.href}
              className='mt-2'
              variant='success'
            >
              {page.title}
            </ButtonLink>
          ))}
        </div>
      </div>

      <div className='text-center'>
        <Typography variant='h5' weight='semibold'>
          Components
        </Typography>
        <div className='flex flex-grow gap-2'>
          {components.map((page) => (
            <ButtonLink
              key={page.title}
              href={page.href}
              className='mt-2'
              variant='primary'
            >
              {page.title}
            </ButtonLink>
          ))}
        </div>
      </div>

      <div className='text-center mt-5'>
        <Typography variant='h5' className='font-bold'>
          Colors
        </Typography>
        <div className='flex flex-grow gap-2'>
          {color.map((colors) => (
            <ButtonLink
              key={colors.colors}
              href={colors.href}
              className='mt-2'
              variant={colors.variant}
            >
              {colors.colors}
            </ButtonLink>
          ))}
        </div>
      </div>
    </div>
  );
}
