import { useState } from 'react';

import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';

interface TFaqData {
  svg: string;
  q: string;
  a: string;
  length: number;
  cardNumber: number;
}

export default function FAQCard(props: TFaqData) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`faq-accord ${
        isOpen ? 'accordion-open' : ''
      } col-span-1 lg:col-span-2 ${
        props.cardNumber + 1 == props.length && props.length % 2
          ? 'lg:col-start-2'
          : ''
      }`}
      data-accordion={isOpen ? 'open' : 'closed'}
    >
      <Typography variant='h2' id='accordion-heading' className='text-left'>
        <button
          type='button'
          className={`flex items-center text-left bg-secondary-300 text-whites-1100 font-bold justify-between w-full p-5 gap-3 transition-all ease-in-out ${
            isOpen ? 'rounded-t-xl' : 'rounded-xl'
          }`}
          onClick={toggleAccordion}
        >
          <NextImage
            src={props.svg}
            alt='faq icon'
            width={props.q.length > 40 ? 35 : 30}
            height={props.q.length > 40 ? 35 : 30}
            className='me-2'
          />
          <div className='flex text-left items-start text-xs md:text-base lg:text-lg'>
            {props.q}
          </div>
          {isOpen ? (
            <NextImage
              src={'/svg/olimppage/min.svg'}
              width={20}
              height={20}
              alt='close accordion'
            />
          ) : (
            <NextImage
              src={'/svg/olimppage/plus.svg'}
              width={20}
              height={20}
              alt='open accordion'
            />
          )}
        </button>
      </Typography>
      <div
        id='accordion-body'
        className={`overflow-hidden rounded-b-xl transition-all duration-100 max-h-${
          isOpen ? '96' : '0'
        }`}
      >
        <div className='p-5 bg-white rounded-b-xl'>
          <Typography
            variant='p'
            className='mb-2 text-whites-1100 text-xs md:text-base lg:text-lg'
          >
            {props.a}
          </Typography>
        </div>
      </div>
    </div>
  );
}
