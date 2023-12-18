'use client';

import FAQCard from '@/components/FAQCard';
import NextImage from '@/components/NextImage';

interface TOlimpFaqData {
  svg: string;
  q: string;
  a: string;
}

const faqs: TOlimpFaqData[] = [
  {
    svg: '/svg/olimppage/faq-icons/1.svg',
    q: 'Siapa saja yang boleh mengikuti Olimpiade ARA 5.0?',
    a: 'Siswa-siswi  SMA/K sederajat dibuktikan dengan Kartu Pelajar dan identitas yang sah.',
  },
  {
    svg: '/svg/olimppage/faq-icons/2.svg',
    q: 'Apa saja materi yang akan diujikan pada Olimpiade ARA 5.0?',
    a: 'Materi yang diujikan yaitu Internet of Things dan Cyber Security. Untuk detail lebih lanjut terkait cakupan materi ataupun sub-bab yang diujikan akan diinformasikan lebih lanjut pada guidebook.',
  },
  {
    svg: '/svg/olimppage/faq-icons/3.svg',
    q: 'Seperti apa teknis pelaksanaan penyisihan dan final Olimpiade ARA 5.0?',
    a: 'Pelaksanaan penyisihan dilakukan secara online lewat platform yang disediakan. Peserta harus join Zoom yang disediakan panitia saat mengerjakan penyisihan dengan teknis yang tertera di guidebook. Pelaksanaan Final Olimpiade ARA 5.0 dilaksanakan di Kampus ITS Sukolilo Surabaya.',
  },
  {
    svg: '/svg/olimppage/faq-icons/4.svg',
    q: 'Berapa banyak anggota yang harus dimiliki satu tim?',
    a: 'Satu tim harus memiliki 2 orang anggota yang berasal dari satu sekolah yang sama.',
  },
  {
    svg: '/svg/olimppage/faq-icons/5.svg',
    q: 'Berapa banyak soal yang akan diberikan pada saat penyisihan dan final?',
    a: 'Pada saat penyisihan akan diberikan soal sebanyak 100 butir dengan berbentuk pilihan ganda. Sedangkan pada saat final akan diberikan 10 soal berbentuk essay. Siswa-siswi  SMA/K sederajat dibuktikan dengan Kartu Pelajar dan identitas yang sah.',
  },
];

export default function OlimFaqSection() {
  return (
    <section className='olimp-faq-section'>
      <div className='upper-faq flex justify-center items-center mb-20'>
        <NextImage
          src={'/svg/olimppage/faq.svg'}
          width={418}
          height={53}
          alt='faq panel'
        />
      </div>
      <div className='faq-cards grid grid-cols-1 lg:grid-cols-4 gap-3 md:gap-7 px-8'>
        {faqs.map((faq, id) => (
          <FAQCard
            key={id}
            q={faq.q}
            a={faq.a}
            svg={faq.svg}
            cardNumber={id}
            length={faqs.length}
          />
        ))}
      </div>
    </section>
  );
}
