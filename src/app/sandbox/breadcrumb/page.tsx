import Breadcrumb from '@/components/Breadcrumb';
import Typography from '@/components/Typography';

export default function BreadcrumbPage() {
  return (
    <>
      <div className='flex flex-col px-2'>
        <Typography color='primary' weight='regular' variant='h4'>
          Breadcrumbs
        </Typography>
        <div className='flex flex-col mb-2'>
          <Breadcrumb crumbs={['/home', '/level1']} />
          <Breadcrumb crumbs={['/home', '/level1', '/level2']} />
          <Breadcrumb crumbs={['/home', '/level1', '/level2', '/level3']} />
          <Breadcrumb
            crumbs={['/home', '/level1', '/level2', '/level3', '/level4']}
          />
        </div>
      </div>
    </>
  );
}
