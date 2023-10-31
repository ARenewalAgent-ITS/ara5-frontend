'use client';
import * as React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/form/Input';
import SearchableSelectInput from '@/components/form/SearchableSelectInput';
import SelectInput from '@/components/form/SelectInput';
import TextArea from '@/components/form/TextArea';
import Typography from '@/components/Typography';

type SandboxForm = {
  text: string;
  textReadOnly: string;
  textWithPrefix: string;
  textWithSuffix: string;
  textWithHelper: string;
  textWithHelperReadOnly: string;
  textWithValidation: string;
  textWithValidationReadOnly: string;
  textWithValidationHelper: string;
  textWithValidationHelperReadOnly: string;
  PasswordInput: string;
  textArea: string;
  textAreaReadOnly: string;
  textAreaWithHelper: string;
  textAreaWithHelperReadOnly: string;
  textAreaWithValidation: string;
  textAreaWithValidationReadOnly: string;
  textAreaWithValidationHelper: string;
  textAreaWithValidationHelperReadOnly: string;
  select: 'male' | 'female';
  selectReadOnly: 'male' | 'female';
  searchableSelect: string;
};

export default function FormSandbox() {
  const methods = useForm<SandboxForm>({
    mode: 'onTouched',
  });
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<SandboxForm> = (data) => {
    // !STARTERCONF Remove console log, use logger instead
    // eslint-disable-next-line no-console
    console.log(data);
    return;
  };

  return (
    <div className='p-6 space-y-4 w-fit mx-auto'>
      <Typography as='h1' variant='h4' font='poppins'>
        Form
      </Typography>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className='w-fit space-y-4'>
          <Input id='text' label='Text' placeholder='Placeholder' />

          <Input
            id='textReadOnly'
            label='Text (Read Only)'
            placeholder='Placeholder'
            readOnly={true}
          />

          <Input
            id='textWithPrefix'
            label='Text With Prefix'
            placeholder='Placeholder'
            prefix='Prefix'
          />

          <Input
            id='textWithSuffix'
            label='Text With Suffix'
            placeholder='Placeholder'
            suffix='suffix'
          />

          <Input
            id='textWithHelper'
            label='Text With Helper'
            placeholder='Placeholder'
            helperText='This is helper text'
          />

          <Input
            id='textWithHelperReadOnly'
            label='Text With Helper (Read Only)'
            placeholder='Placeholder'
            helperText='This is helper text'
            readOnly={true}
          />

          <Input
            id='textWithValidation'
            label='Text With Validation'
            placeholder='Placeholder'
            validation={{
              required: 'Field must be filled',
              minLength: {
                value: 3,
                message: 'Field must be at least 3 characters',
              },
            }}
          />

          <Input
            id='textWithValidationHelper'
            label='Text With Validation And Helper'
            placeholder='Placeholder'
            helperText='This is helper text'
            validation={{
              required: 'Field must be filled',
              minLength: {
                value: 3,
                message: 'Field must be at least 3 characters',
              },
            }}
          />

          <Input
            id='textWithValidationHelperReadOnly'
            label='Text With Validation And Helper (Read Only)'
            placeholder='Placeholder'
            helperText='This is helper text'
            validation={{
              required: 'Field must be filled',
              minLength: {
                value: 3,
                message: 'Field must be at least 3 characters',
              },
            }}
            readOnly={true}
          />

          <Input
            id='PasswordInput'
            label='Password Input'
            placeholder='Placeholder'
            validation={{
              required: 'Field must be filled',
            }}
            type='password'
          />

          <TextArea id='textArea' label='Text Area' placeholder='Placeholder' />

          <TextArea
            id='textAreaReadOnly'
            label='Text Area (Read Only)'
            placeholder='Placeholder'
            readOnly={true}
          />

          <TextArea
            id='textAreaWithHelper'
            label='Text Area With Helper'
            placeholder='Placeholder'
            helperText='This is helper text'
          />

          <TextArea
            id='textAreaWithHelperReadOnly'
            label='Text Area With Helper (Read Only)'
            placeholder='Placeholder'
            helperText='This is helper text'
            readOnly={true}
          />

          <TextArea
            id='textAreaWithValidation'
            label='Text Area With Validation'
            placeholder='Placeholder'
            validation={{ required: 'Field must be filled' }}
          />

          <TextArea
            id='textAreaWithValidationReadOnly'
            label='Text Area With Validation (Read Only)'
            placeholder='Placeholder'
            validation={{ required: 'Field must be filled' }}
            readOnly={true}
          />

          <TextArea
            id='textAreaWithValidationHelper'
            label='Text Area With Validation And Helper'
            placeholder='Placeholder'
            helperText='This is helper text'
            validation={{ required: 'Field must be filled' }}
          />

          <TextArea
            id='textAreaWithValidationHelperReadOnly'
            label='Text Area With Validation And Helper (Read Only)'
            placeholder='Placeholder'
            helperText='This is helper text'
            validation={{ required: 'Field must be filled' }}
            readOnly={true}
          />

          <SelectInput
            id='select'
            label='Select Input'
            placeholder='Placeholder'
            validation={{ required: 'This field is required' }}
          >
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </SelectInput>

          <SelectInput
            id='selectReadOnly'
            label='Select Input (Read Only)'
            readOnly
            defaultValue='male'
          >
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </SelectInput>

          {/* TODO */}
          <SearchableSelectInput
            id='searchableSelect'
            label='Searchable Select Input'
            defaultValue='male'
            options={[
              { value: 'Male', label: 'Male' },
              { value: 'Female', label: 'Female' },
              { value: 'Other', label: 'Other' },
            ]}
          ></SearchableSelectInput>

          <Button
            type='submit'
            variant='primary'
            size='base'
            className='w-full'
          >
            <Typography variant='t' color='white' font='baloo' weight='regular'>
              Submit
            </Typography>
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
