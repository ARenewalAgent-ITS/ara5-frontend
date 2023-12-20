'use client';

import FAQCard from '@/components/FAQCard';
import NextImage from '@/components/NextImage';

interface TCTFFaqData {
  svg: string;
  q: string;
  a: string;
}

const faqs: TCTFFaqData[] = [
  {
    svg: '/svg/ctfpage/faq-icons/1.svg',
    q: 'CTF ARA 5.0 menggunakan style apa?',
    a: 'CTF ARA 5.0 menggunakan style Jeopardy untuk penyisihan.',
  },
  {
    svg: '/svg/ctfpage/faq-icons/5.svg',
    q: 'Apakah ada ada batasan submit flag?',
    a: 'Tidak ada, namun peserta dilarang untuk melakukan bruteforcing.',
  },
  {
    svg: '/svg/ctfpage/faq-icons/2.svg',
    q: 'Apakah ada babak final dalam CTF ARA 5.0? dan menggunakan style apa?',
    a: 'Ada, babak final akan diadakan secara offline di ITS dengan menggunakan format jeopardy',
  },
  {
    svg: '/svg/ctfpage/faq-icons/3.svg',
    q: 'Apakah diperbolehkan untuk melakukan brute force?',
    a: 'Brute force terhadap server tidak diperbolehkan. Apabila ditemukan adanya tindakan bruteforcing, maka panitia berhak mendiskualifikasi peserta beserta tim nya.',
  },
  {
    svg: '/svg/ctfpage/faq-icons/4.svg',
    q: 'Bagaimana jika ada kendala teknis dalam pembuatan writeup? apakah ada toleransi keterlambatan?',
    a: 'Tidak ada toleransi keterlambatan dalam pengumpulan writeup dengan alasan apapun.',
  },

  {
    svg: '/svg/ctfpage/faq-icons/5.svg',
    q: 'Apakah diperbolehkan menggunakan automation-tools seperti SQLMAP, dirbuster, dan lainnya?',
    a: 'Penggunaan automations-tools terhadap server, seperti bruteforcing direktori menggunakan dirbuster, tidak diperbolehkan. Namun, penggunaan automations-tools selain terhadap server, seperti cracking password menggunakan john, diperbolehkan.',
  },
];

export default function CtfFaqSection() {
  return (
    <section className='ctf-faq-section'>
      <div className='upper-faq flex justify-center items-center mb-20'>
        <NextImage
          src={'/svg/ctfpage/faq.svg'}
          width={418}
          height={53}
          alt='faq panel'
        />
      </div>
      <div className='faq-cards grid grid-cols-1 lg:grid-cols-4 gap-3 md:gap-7 px-8 md:px-16 lg:px-20 xl:px-28'>
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
