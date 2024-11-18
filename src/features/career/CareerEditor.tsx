import type { JSX } from 'react';
import { useCallback } from 'react';
import DatePicker from 'react-datepicker';

import { Button } from '@nextui-org/react';
import { useMutation } from '@tanstack/react-query';
import { Field, Form, Formik } from 'formik';

import type { CareerModel } from '@/common/types/common-career-types';

import { careerItemCreate, careerItemUpdate } from './career-api';
import { EMPTY_CAREER_ITEM } from './career-constants';
import styles from './CareerEditor.module.scss';
import { useCareerItemQuery } from './hooks/use-career-item-query';
import { useCareerModal } from './hooks/use-career-modal';
import 'react-datepicker/dist/react-datepicker.css';

const CareerEditor = (): JSX.Element => {
  const { id, handleClose } = useCareerModal();
  const { data: initialValues = EMPTY_CAREER_ITEM } = useCareerItemQuery({ id });
  const { mutate, error } = useMutation({
    // TODO: update only changed values
    mutationFn: ({ _id: id, ...rest }: CareerModel) => (id ? careerItemUpdate(id, rest) : careerItemCreate(rest)),
    onSuccess: handleClose,
  });

  const onSubmit = useCallback((values: CareerModel) => mutate(values), [mutate]);

  const renderDate = useCallback(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ({ value, onChange }) => <DatePicker onChange={onChange} selected={value ?? null} />,
    []
  );

  return (
    <Formik<CareerModel> initialValues={initialValues} onSubmit={onSubmit}>
      <Form className='flex flex-col w-full'>
        <div className={styles.formItem}>
          <Field type='text' name='title' placeholder='Title' />
        </div>
        <div className={styles.formItem}>
          <Field type='text' name='post' placeholder='Post' />
        </div>
        <div className={styles.formItem}>
          <Field type='text' name='site' placeholder='Site' />
        </div>
        <div className={styles.formItem}>
          <Field type='text' name='tools' placeholder='Tools' />
        </div>
        <div className={styles.formItem}>
          <Field type='text' name='description' placeholder='Description' />
        </div>
        <div className={styles.formItem}>
          <Field name='startDate'>{renderDate}</Field>
        </div>
        {error && error.message}
        <div className='w-full flex align-middle justify-center'>
          <Button size='sm' type='submit'>
            Submit
          </Button>
          <span>&nbsp;</span>
          <Button onClick={handleClose} size='sm'>
            Cancel
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default CareerEditor;
