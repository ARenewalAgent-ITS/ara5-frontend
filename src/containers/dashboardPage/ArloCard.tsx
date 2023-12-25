import { FaDiscord, FaWhatsapp } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';

import IconButton from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';

interface TStatusCard {
  as: 'link-info' | 'team-info';
  variant: 'blue' | 'green' | 'brown';
  title: string;
  caption: string;
  addInfo: TAdditionalInfo;
}

interface TAdditionalInfo {
  percent?: number;
  link?: string;
  buttonType?: 'download' | 'wa' | 'dc';
}

function TeamCorner(props: TAdditionalInfo) {
  return (
    <div className='absolute bottom-3 left-5 w-11 h-11'>
      <svg className='w-full h-full' viewBox='0 0 100 100'>
        <circle
          className='text-gray-800 stroke-current'
          strokeWidth='10'
          cx='50'
          cy='50'
          r='40'
          fill='transparent'
        ></circle>
        <circle
          className='text-white stroke-current transform rotate-60 origin-center transition-all duration-300'
          strokeWidth='10'
          strokeLinecap='round'
          cx='50'
          cy='50'
          r='40'
          fill='transparent'
          strokeDasharray='400 400'
          strokeDashoffset='calc(400 - (400 * 45) / 100)'
        ></circle>
        <text
          x='50'
          y='50'
          fontSize='22'
          textAnchor='middle'
          alignmentBaseline='middle'
          fill='white'
          className='text-white'
        >
          {props.percent}%
        </text>
      </svg>
    </div>
  );
}

function LinkCorner(props: TAdditionalInfo) {
  const renderButton = () => {
    if (props.buttonType == 'download')
      return (
        <IconButton
          variant='outline-primary'
          className='absolute bottom-5 left-5 font-bold text-white border-white'
          rightIcon={IoMdDownload}
          size='base'
        >
          Download
        </IconButton>
      );
    if (props.buttonType == 'wa')
      return (
        <IconButton
          variant='outline-primary'
          className='absolute bottom-5 left-5 font-bold text-white border-white'
          rightIcon={FaWhatsapp}
          size='base'
        >
          Whatsapp
        </IconButton>
      );
    if (props.buttonType == 'dc')
      return (
        <IconButton
          variant='outline-primary'
          className='absolute bottom-5 left-5 font-bold text-white border-white'
          rightIcon={FaDiscord}
          size='base'
        >
          Discord
        </IconButton>
      );
  };
  return <>{renderButton()}</>;
}

export default function ArloCard(props: TStatusCard) {
  const variantPath = (type: string, variant: string) => {
    const folderPath = '/svg/dashboardpage/';
    if (type == 'top_intersect' || type == 'bot_intersect') {
      const interPath = 'arlocard/' + type + '_' + variant + '.svg';
      return folderPath + interPath;
    } else if (type == 'arlo') {
      let pose = '';
      if (variant == 'blue') pose = 'cool_arlo_1';
      if (variant == 'green') pose = 'neutral_arlo_1';
      if (variant == 'brown') pose = 'curious_arlo_1';
      const arloPath = folderPath + pose + '.svg';
      return arloPath;
    }
    return '';
  };

  const cardBg = (variant: string) => {
    if (variant == 'blue') return 'bg-primary-600';
    if (variant == 'green') return 'bg-success-700';
    if (variant == 'brown') return 'bg-secondary-700';
    return 'bg-primary-600';
  };

  const addNewLine = (inputString: string, maxLength: number) => {
    if (inputString.length <= maxLength) {
      return inputString;
    }

    const words = inputString.split(' ');
    let currentLine = '';
    let resultString = '';

    for (const word of words) {
      if (currentLine.length + word.length <= maxLength) {
        currentLine += word + ' ';
      } else {
        resultString += currentLine.trim() + '\n';
        currentLine = word + ' ';
      }
    }

    resultString += currentLine.trim();
    return resultString;
  };

  return (
    <div
      className={`${cardBg(
        props.variant
      )} relative w-[300px] h-[150px] rounded-[20px] overflow-hidden`}
    >
      <div className='w-[331px] relative h-[150px]'>
        <div className='w-[304px] absolute h-[150px] top-0 left-0'>
          <div className='w-[300px] rounded-[20px] relative h-[150px]'>
            <div className='w-[300px] rounded-[20px] shadow-[0px_10px_30px_#369fff66] absolute h-[150px] top-0 left-0'>
              <NextImage
                width={81}
                height={41}
                className='absolute top-0 left-0'
                alt='Intersect'
                src={variantPath('top_intersect', props.variant)}
              />
              <NextImage
                width={136}
                height={80}
                className='absolute top-[70px] left-[164px]'
                alt='Intersect'
                src={variantPath('bot_intersect', props.variant)}
              />
            </div>
            <Typography
              variant='t'
              weight='bold'
              className='text-white relative z-20 pt-5 pl-5 whitespace-pre-line'
            >
              {addNewLine(props.title, 23)}
            </Typography>
            <Typography
              variant='c14'
              className='text-slate-100 relative z-20 pl-5'
            >
              {props.caption}
            </Typography>
          </div>
        </div>
        <NextImage
          width={142}
          height={127}
          className='absolute top-[23px] left-[189px]'
          alt='Arlo'
          src={variantPath('arlo', props.variant)}
        />
        {props.as == 'link-info' ? (
          <LinkCorner
            link={props.addInfo.link}
            buttonType={props.addInfo.buttonType}
          />
        ) : props.variant != 'blue' ? (
          <TeamCorner percent={props.addInfo.percent} />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

{
  /* <ArloCard
      as='team-info'
      variant='brown'
      title='Peserta Belum Terverifikasi'
      caption='35 tim'
      addInfo={{ percent: 75 }}
    />
    <ArloCard
      as='link-info'
      variant='blue'
      title='Guidebook OlimpIT'
      caption='its.id/m/GuidebookOlimARA-5'
      addInfo={{
        link: 'its.id/m/GuidebookOlimARA-5',
        buttonType: 'download',
      }}
    /> */
}
