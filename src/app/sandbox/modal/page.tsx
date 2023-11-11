'use client';

import React, { useState } from 'react';

import Button from '@/components/buttons/Button';
import Modal from '@/components/modal/Modal';
import Typography from '@/components/Typography';

function App() {
  const [isModalOpenPrimary, setIsModalOpenPrimary] = useState(false);
  const [isModalOpenDanger, setIsModalOpenDanger] = useState(false);
  const [isModalOpenSuccess, setIsModalOpenSuccess] = useState(false);
  const [isModalOpenWarning, setIsModalOpenWarning] = useState(false);

  return (
    <>
      <section className='flex justify-center'>
        <div className='w-full h-full flex justify-center'>
          <Button
            variant='primary'
            size='base'
            className='absolute mt-40'
            onClick={() => setIsModalOpenPrimary(true)}
          >
            Buka Modal
          </Button>

          <Modal open={isModalOpenPrimary} setOpen={setIsModalOpenPrimary}>
            <Modal.Title>
              <Typography variant='h6' weight='bold' className='text-black-500'>
                Header
              </Typography>
            </Modal.Title>
            <Modal.Body>
              <Typography variant='p' className='text-black-500'>
                Body Text
              </Typography>
              <div className='flex gap-3 mt-5 justify-end'>
                <Button
                  variant='outline-primary'
                  className='text-info-pressed'
                  onClick={() => setIsModalOpenPrimary(false)}
                >
                  CTA 1
                </Button>
                <Button
                  variant='primary'
                  onClick={() => setIsModalOpenPrimary(false)}
                >
                  CTA 2
                </Button>
              </div>
            </Modal.Body>
          </Modal>
        </div>

        <div className='w-full h-full flex justify-center'>
          <Button
            variant='danger'
            size='base'
            className='absolute mt-40 border-none'
            onClick={() => setIsModalOpenDanger(true)}
          >
            Buka Modal
          </Button>

          <Modal open={isModalOpenDanger} setOpen={setIsModalOpenDanger}>
            <Modal.Title>
              <Typography variant='h6' weight='bold' className='text-black-500'>
                Header
              </Typography>
            </Modal.Title>
            <Modal.Body>
              <Typography variant='p' className='text-black-500'>
                Body Text
              </Typography>
              <div className='flex gap-3 mt-5 justify-end'>
                <Button
                  variant='outline-danger'
                  className='text-danger-main'
                  onClick={() => setIsModalOpenDanger(false)}
                >
                  CTA 1
                </Button>
                <Button
                  variant='danger'
                  className='border-none'
                  onClick={() => setIsModalOpenDanger(false)}
                >
                  CTA 2
                </Button>
              </div>
            </Modal.Body>
          </Modal>
        </div>

        <div className='w-full h-full flex justify-center'>
          <Button
            variant='success'
            size='base'
            className='absolute mt-40 border-none'
            onClick={() => setIsModalOpenSuccess(true)}
          >
            Buka Modal
          </Button>

          <Modal open={isModalOpenSuccess} setOpen={setIsModalOpenSuccess}>
            <Modal.Title>
              <Typography variant='h6' weight='bold' className='text-black-500'>
                Header
              </Typography>
            </Modal.Title>
            <Modal.Body>
              <Typography variant='p' className='text-black-500'>
                Body Text
              </Typography>
              <div className='flex gap-3 mt-5 justify-end'>
                <Button
                  variant='outline-success'
                  className='text-info-pressed'
                  onClick={() => setIsModalOpenSuccess(false)}
                >
                  CTA 1
                </Button>
                <Button
                  variant='success'
                  className='border-none'
                  onClick={() => setIsModalOpenSuccess(false)}
                >
                  CTA 2
                </Button>
              </div>
            </Modal.Body>
          </Modal>
        </div>

        <div className='w-full h-full flex justify-center'>
          <Button
            variant='warning'
            size='base'
            className='absolute mt-40'
            onClick={() => setIsModalOpenWarning(true)}
          >
            Buka Modal
          </Button>

          <Modal open={isModalOpenWarning} setOpen={setIsModalOpenWarning}>
            <Modal.Title>
              <Typography variant='h6' weight='bold' className='text-black-500'>
                Header
              </Typography>
            </Modal.Title>
            <Modal.Body>
              <Typography variant='p' className='text-black-500'>
                Body Text
              </Typography>
              <div className='flex gap-3 mt-5 justify-end'>
                <Button
                  variant='outline-warning'
                  className='text-info-pressed'
                  onClick={() => setIsModalOpenWarning(false)}
                >
                  CTA 1
                </Button>
                <Button
                  variant='warning'
                  onClick={() => setIsModalOpenWarning(false)}
                >
                  CTA 2
                </Button>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </section>
    </>
  );
}

export default App;
