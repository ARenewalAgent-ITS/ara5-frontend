import { BsBookmarkFill } from 'react-icons/bs';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import Typography from '@/components/Typography';

export default function ButtonPage() {
  return (
    <div className='flex flex-col px-2'>
      <Typography color='primary' weight='regular' variant='h4'>
        Primary
      </Typography>
      <div className='flex flex-row gap-2 mt-4'>
        {/* Primary w/o icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button variant='primary' size='lg'>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='primary' size='base'>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='primary' size='sm'>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Primary w/o icon End*/}

        {/* Primary w/ icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button
              variant='primary'
              size='lg'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3.5'
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='primary'
              size='base'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3'
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='primary'
              size='sm'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-2.5'
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Primary w/ icon End*/}

        {/* Primary Icon */}
        <div className='flex flex-col gap-2 items-center'>
          <div>
            <IconButton
              variant='primary'
              size='lg'
              icon={BsBookmarkFill}
              iconClassName='w-3.5'
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='primary'
              size='base'
              icon={BsBookmarkFill}
              iconClassName='w-3'
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='primary'
              size='sm'
              icon={BsBookmarkFill}
              iconClassName='w-2.5'
            ></IconButton>
          </div>
        </div>
        {/* Primary Icon End*/}

        {/* Success w/o icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button variant='success' size='lg'>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='success' size='base'>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='success' size='sm'>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Success w/o icon End*/}

        {/* Success w/ icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button
              variant='success'
              size='lg'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3.5'
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='success'
              size='base'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3'
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='success'
              size='sm'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-2.5'
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Success w/ icon End*/}

        {/* Success Icon */}
        <div className='flex flex-col gap-2 items-center'>
          <div>
            <IconButton
              variant='success'
              size='lg'
              icon={BsBookmarkFill}
              iconClassName='w-3.5'
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='success'
              size='base'
              icon={BsBookmarkFill}
              iconClassName='w-3'
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='success'
              size='sm'
              icon={BsBookmarkFill}
              iconClassName='w-2.5'
            ></IconButton>
          </div>
        </div>
        {/* Success Icon End*/}

        {/* Danger w/o icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button variant='danger' size='lg'>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='danger' size='base'>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='danger' size='sm'>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Danger w/o icon End*/}

        {/* Danger w/ icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button
              variant='danger'
              size='lg'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3.5'
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='danger'
              size='base'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3'
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='danger'
              size='sm'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-2.5'
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Danger w/ icon End*/}

        {/* Danger Icon */}
        <div className='flex flex-col gap-2 items-center'>
          <div>
            <IconButton
              variant='danger'
              size='lg'
              icon={BsBookmarkFill}
              iconClassName='w-3.5'
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='danger'
              size='base'
              icon={BsBookmarkFill}
              iconClassName='w-3'
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='danger'
              size='sm'
              icon={BsBookmarkFill}
              iconClassName='w-2.5'
            ></IconButton>
          </div>
        </div>
        {/* Danger Icon End*/}

        {/* Warning w/o icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button variant='warning' size='lg'>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='warning' size='base'>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='warning' size='sm'>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Warning w/o icon End*/}

        {/* Warning w/ icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button
              variant='warning'
              size='lg'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3.5'
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='warning'
              size='base'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3'
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='warning'
              size='sm'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-2.5'
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Warning w/ icon End*/}

        {/* Warning Icon */}
        <div className='flex flex-col gap-2 items-center'>
          <div>
            <IconButton
              variant='warning'
              size='lg'
              icon={BsBookmarkFill}
              iconClassName='w-3.5'
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='warning'
              size='base'
              icon={BsBookmarkFill}
              iconClassName='w-3'
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='warning'
              size='sm'
              icon={BsBookmarkFill}
              iconClassName='w-2.5'
            ></IconButton>
          </div>
        </div>
        {/* Warning Icon End*/}
      </div>

      <div className='flex flex-row gap-2 mt-4'>
        {/* Primary w/o icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button variant='primary' size='lg'>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='primary' size='base'>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='primary' size='sm'>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Primary w/o icon End*/}

        {/* Primary w/ icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button
              variant='primary'
              size='lg'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3.5'
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='primary'
              size='base'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3'
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='primary'
              size='sm'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-2.5'
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Primary w/ icon End*/}

        {/* Primary Icon */}
        <div className='flex flex-col gap-2 items-center'>
          <div>
            <IconButton
              variant='primary'
              size='lg'
              icon={BsBookmarkFill}
              iconClassName='w-3.5'
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='primary'
              size='base'
              icon={BsBookmarkFill}
              iconClassName='w-3'
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='primary'
              size='sm'
              icon={BsBookmarkFill}
              iconClassName='w-2.5'
            ></IconButton>
          </div>
        </div>
        {/* Primary Icon End*/}

        {/* Success w/o icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button variant='success' size='lg'>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='success' size='base'>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='success' size='sm'>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Success w/o icon End*/}

        {/* Success w/ icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button
              variant='success'
              size='lg'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3.5'
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='success'
              size='base'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3'
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='success'
              size='sm'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-2.5'
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Success w/ icon End*/}

        {/* Success Icon */}
        <div className='flex flex-col gap-2 items-center'>
          <div>
            <IconButton
              variant='success'
              size='lg'
              icon={BsBookmarkFill}
              iconClassName='w-3.5'
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='success'
              size='base'
              icon={BsBookmarkFill}
              iconClassName='w-3'
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='success'
              size='sm'
              icon={BsBookmarkFill}
              iconClassName='w-2.5'
            ></IconButton>
          </div>
        </div>
        {/* Success Icon End*/}

        {/* Danger w/o icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button variant='danger' size='lg'>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='danger' size='base'>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='danger' size='sm'>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Danger w/o icon End*/}

        {/* Danger w/ icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button
              variant='danger'
              size='lg'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3.5'
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='danger'
              size='base'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3'
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='danger'
              size='sm'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-2.5'
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Danger w/ icon End*/}

        {/* Danger Icon */}
        <div className='flex flex-col gap-2 items-center'>
          <div>
            <IconButton
              variant='danger'
              size='lg'
              icon={BsBookmarkFill}
              iconClassName='w-3.5'
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='danger'
              size='base'
              icon={BsBookmarkFill}
              iconClassName='w-3'
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='danger'
              size='sm'
              icon={BsBookmarkFill}
              iconClassName='w-2.5'
            ></IconButton>
          </div>
        </div>
        {/* Danger Icon End*/}

        {/* Warning w/o icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button variant='warning' size='lg'>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='warning' size='base'>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='warning' size='sm'>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Warning w/o icon End*/}

        {/* Warning w/ icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button
              variant='warning'
              size='lg'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3.5'
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='warning'
              size='base'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3'
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='warning'
              size='sm'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-2.5'
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Warning w/ icon End*/}

        {/* Warning Icon */}
        <div className='flex flex-col gap-2 items-center'>
          <div>
            <IconButton
              variant='warning'
              size='lg'
              icon={BsBookmarkFill}
              iconClassName='w-3.5'
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='warning'
              size='base'
              icon={BsBookmarkFill}
              iconClassName='w-3'
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='warning'
              size='sm'
              icon={BsBookmarkFill}
              iconClassName='w-2.5'
            ></IconButton>
          </div>
        </div>
        {/* Warning Icon End*/}
      </div>

      <Typography color='primary' weight='regular' variant='h4'>
        Outline/Secondary
      </Typography>

      <div className='flex flex-row gap-2 mt-4 mb-4'>
        {/* Primary w/o icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button variant='outline-primary' size='lg'>
              <Typography color='blue' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='outline-primary' size='base'>
              <Typography color='blue' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='outline-primary' size='sm'>
              <Typography color='blue' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Primary w/o icon End*/}

        {/* Primary w/ icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button
              variant='outline-primary'
              size='lg'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3.5 text-primary'
            >
              <Typography color='blue' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='outline-primary'
              size='base'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3 text-primary'
            >
              <Typography color='blue' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='outline-primary'
              size='sm'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-2.5 text-primary'
            >
              <Typography color='blue' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Primary w/ icon End*/}

        {/* Primary Icon */}
        <div className='flex flex-col gap-2 items-center'>
          <div>
            <IconButton
              variant='outline-primary'
              size='lg'
              icon={BsBookmarkFill}
              iconClassName='w-3.5 text-primary'
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='outline-primary'
              size='base'
              icon={BsBookmarkFill}
              iconClassName='w-3 text-primary'
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='outline-primary'
              size='sm'
              icon={BsBookmarkFill}
              iconClassName='w-2.5 text-primary'
            ></IconButton>
          </div>
        </div>
        {/* Primary Icon End*/}

        {/* Success w/o icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button variant='outline-success' size='lg'>
              <Typography color='success' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='outline-success' size='base'>
              <Typography color='success' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='outline-success' size='sm'>
              <Typography color='success' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Success w/o icon End*/}

        {/* Success w/ icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button
              variant='outline-success'
              size='lg'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3.5'
            >
              <Typography color='success' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='outline-success'
              size='base'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3'
            >
              <Typography color='success' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='outline-success'
              size='sm'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-2.5'
            >
              <Typography color='success' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Success w/ icon End*/}

        {/* Success Icon */}
        <div className='flex flex-col gap-2 items-center'>
          <div>
            <IconButton
              variant='outline-success'
              size='lg'
              icon={BsBookmarkFill}
              iconClassName='text-success w-3.5'
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='outline-success'
              size='base'
              icon={BsBookmarkFill}
              iconClassName='text-success w-3'
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='outline-success'
              size='sm'
              icon={BsBookmarkFill}
              iconClassName='text-success w-2.5'
            ></IconButton>
          </div>
        </div>
        {/* Success Icon End*/}

        {/* Danger w/o icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button variant='outline-danger' size='lg'>
              <Typography color='danger' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='outline-danger' size='base'>
              <Typography color='danger' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='outline-danger' size='sm'>
              <Typography color='danger' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Danger w/o icon End*/}

        {/* Danger w/ icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button
              variant='outline-danger'
              size='lg'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3.5'
            >
              <Typography color='danger' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='outline-danger'
              size='base'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3'
            >
              <Typography color='danger' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='outline-danger'
              size='sm'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-2.5'
            >
              <Typography color='danger' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Danger w/ icon End*/}

        {/* Danger Icon */}
        <div className='flex flex-col gap-2 items-center'>
          <div>
            <IconButton
              variant='outline-danger'
              size='lg'
              icon={BsBookmarkFill}
              iconClassName='text-danger w-3.5'
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='outline-danger'
              size='base'
              icon={BsBookmarkFill}
              iconClassName='text-danger w-3'
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='outline-danger'
              size='sm'
              icon={BsBookmarkFill}
              iconClassName='text-danger w-2.5'
            ></IconButton>
          </div>
        </div>
        {/* Danger Icon End*/}

        {/* Warning w/o icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button variant='outline-warning' size='lg'>
              <Typography color='warning' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='outline-warning' size='base'>
              <Typography color='warning' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='outline-warning' size='sm'>
              <Typography color='warning' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Warning w/o icon End*/}

        {/* Warning w/ icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button
              variant='outline-warning'
              size='lg'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3.5'
            >
              <Typography color='warning' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='outline-warning'
              size='base'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3'
            >
              <Typography color='warning' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='outline-warning'
              size='sm'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-2.5'
            >
              <Typography color='warning' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Warning w/ icon End*/}

        {/* Warning Icon */}
        <div className='flex flex-col gap-2 items-center'>
          <div>
            <IconButton
              variant='outline-warning'
              size='lg'
              icon={BsBookmarkFill}
              iconClassName='text-warning w-3.5'
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='outline-warning'
              size='base'
              icon={BsBookmarkFill}
              iconClassName='text-warning w-3'
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='outline-warning'
              size='sm'
              icon={BsBookmarkFill}
              iconClassName='text-warning w-2.5'
            ></IconButton>
          </div>
        </div>
        {/* Warning Icon End*/}
      </div>

      <Typography color='primary' weight='regular' variant='h4'>
        Others
      </Typography>

      <div className='flex flex-row gap-2 mt-4 mb-4'>
        {/* Primary w/o icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button variant='primary' size='lg' disabled>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='primary' size='base' disabled>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='primary' size='sm' disabled>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Primary w/o icon End*/}

        {/* Primary w/ icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button
              variant='primary'
              size='lg'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3.5'
              disabled
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='primary'
              size='base'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3'
              disabled
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='primary'
              size='sm'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-2.5'
              disabled
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Primary w/ icon End*/}

        {/* Primary Icon */}
        <div className='flex flex-col gap-2 items-center'>
          <div>
            <IconButton
              variant='primary'
              size='lg'
              icon={BsBookmarkFill}
              iconClassName='w-3.5'
              disabled
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='primary'
              size='base'
              icon={BsBookmarkFill}
              iconClassName='w-3'
              disabled
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='primary'
              size='sm'
              icon={BsBookmarkFill}
              iconClassName='w-2.5'
              disabled
            ></IconButton>
          </div>
        </div>
        {/* Primary Icon End*/}

        {/* Success w/o icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button variant='success' size='lg' disabled>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='success' size='base' disabled>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='success' size='sm' disabled>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Success w/o icon End*/}

        {/* Success w/ icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button
              variant='success'
              size='lg'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3.5'
              disabled
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='success'
              size='base'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3'
              disabled
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='success'
              size='sm'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-2.5'
              disabled
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Success w/ icon End*/}

        {/* Success Icon */}
        <div className='flex flex-col gap-2 items-center'>
          <div>
            <IconButton
              variant='success'
              size='lg'
              icon={BsBookmarkFill}
              iconClassName='w-3.5'
              disabled
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='success'
              size='base'
              icon={BsBookmarkFill}
              iconClassName='w-3'
              disabled
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='success'
              size='sm'
              icon={BsBookmarkFill}
              iconClassName='w-2.5'
              disabled
            ></IconButton>
          </div>
        </div>
        {/* Success Icon End*/}

        {/* Danger w/o icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button variant='danger' size='lg' disabled>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='danger' size='base' disabled>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='danger' size='sm' disabled>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Danger w/o icon End*/}

        {/* Danger w/ icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button
              variant='danger'
              size='lg'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3.5'
              disabled
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='danger'
              size='base'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3'
              disabled
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='danger'
              size='sm'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-2.5'
              disabled
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Danger w/ icon End*/}

        {/* Danger Icon */}
        <div className='flex flex-col gap-2 items-center'>
          <div>
            <IconButton
              variant='danger'
              size='lg'
              icon={BsBookmarkFill}
              iconClassName='w-3.5'
              disabled
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='danger'
              size='base'
              icon={BsBookmarkFill}
              iconClassName='w-3'
              disabled
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='danger'
              size='sm'
              icon={BsBookmarkFill}
              iconClassName='w-2.5'
              disabled
            ></IconButton>
          </div>
        </div>
        {/* Danger Icon End*/}

        {/* Warning w/o icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button variant='warning' size='lg' disabled>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='warning' size='base' disabled>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button variant='warning' size='sm' disabled>
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Warning w/o icon End*/}

        {/* Warning w/ icon */}
        <div className='flex flex-col gap-2'>
          <div>
            <Button
              variant='warning'
              size='lg'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3.5'
              disabled
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Large
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='warning'
              size='base'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-3'
              disabled
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Medium
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              variant='warning'
              size='sm'
              leftIcon={BsBookmarkFill}
              leftIconClassName='w-2.5'
              disabled
            >
              <Typography color='white' font='baloo' weight='regular'>
                Text Only Small
              </Typography>
            </Button>
          </div>
        </div>
        {/* Warning w/ icon End*/}

        {/* Warning Icon */}
        <div className='flex flex-col gap-2 items-center'>
          <div>
            <IconButton
              variant='warning'
              size='lg'
              icon={BsBookmarkFill}
              iconClassName='w-3.5'
              disabled
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='warning'
              size='base'
              icon={BsBookmarkFill}
              iconClassName='w-3'
              disabled
            ></IconButton>
          </div>
          <div>
            <IconButton
              variant='warning'
              size='sm'
              icon={BsBookmarkFill}
              iconClassName='w-2.5'
              disabled
            ></IconButton>
          </div>
        </div>
        {/* Warning Icon End*/}
      </div>
    </div>
  );
}
