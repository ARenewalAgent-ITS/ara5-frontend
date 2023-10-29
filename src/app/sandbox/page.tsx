import Cell from '@/components/Cell';
import Grid from '@/components/Grid';
import Typography from '@/components/Typography';

export default function GridPage() {
  return (
    <div className='bg-white'>
      <Grid className='bg-sky-50 py-10 min-h-screen'>
        {/* <Cell cols="5_3" rows='3_3' className='bg-blue-200'>
          <Typography weight='bold' className=" text-6xl p-4 w-full h-full bg-blue-200">
            ARA 5.0
          </Typography>
        </Cell> */}
        <Cell rows='1_3' className='bg-yellow-400 p-4'>
          <Typography as='h1'>Rows start from 3 and Span 3 </Typography>
        </Cell>
        <Cell cols='2_1' rows='2_4' className='bg-yellow-400 p-4'>
          <Typography as='h1'>Rows start from 3 and Span 1 </Typography>
          <Typography as='h1'>Cols Start from 3 and Span 1</Typography>
        </Cell>
        <Cell cols='3_1' rows='8_4' className='bg-yellow-400 p-4'>
          <Typography as='h1'>Rows start from 3 and Span 1 </Typography>
          <Typography as='h1'>Cols Start from 3 and Span 1</Typography>
        </Cell>
        {/* <Cell cols="4_1" rows='6_4' className="bg-yellow-400 p-4">
          <Typography as="h1">Rows start from 3 and Span 1 </Typography>
          <Typography as="h1">Cols Start from 3 and Span 1</Typography>
        </Cell> */}

        <Cell cols='2_3' className=' p-4 '>
          <Typography className='font-bold text-[33.28px]' as='h1'>
            Shorten Link
          </Typography>
        </Cell>
      </Grid>
      {/* <Grid className="">
        <Cell cols="4_full">
          <Typography>araaaa</Typography>
        </Cell>
        <Cell cols="1_full">
          <Typography>araaaaa</Typography>
        </Cell>
        <Cell cols="5_full">
          <Typography>araaaaaaa</Typography>
        </Cell>
      </Grid> */}
    </div>
  );
}
