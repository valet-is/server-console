import TextInput from 'components/TextInput';
import Select from 'components/Select';
import Button from 'components/Button';
import Preloader from 'components/Preloader';

import { Form } from 'providers/ThemeProvider/styled';
import { FormWrap, FormFooter } from './styled';

const userRoleOptions = [
  { value: 0, label: 'administrator' },
  { value: 1, label: 'editor' },
  { value: 2, label: 'subscriber' },
];

export default function FormFields({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  isSubmitting,
  setFieldValue,
  handleSubmit,
  submitText,
}) {
  return (
    <FormWrap>
      <Form onSubmit={handleSubmit}>
        <TextInput
          name="screenName"
          label="Screen Name"
          value={values.screenName}
          errors={errors.screenName}
          touched={touched.screenName}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <TextInput
          name="userName"
          label="User Name"
          value={values.userName}
          errors={errors.userName}
          touched={touched.userName}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <TextInput
          name="email"
          label="E-mail"
          value={values.email}
          errors={errors.email}
          touched={touched.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <TextInput
          name="password"
          label="password"
          value={values.password}
          errors={errors.password}
          touched={touched.password}
          onChange={handleChange}
          onBlur={handleBlur}
          masked
        />

        <TextInput
          name="password_re"
          label="password (confirm)"
          value={values.password_re}
          errors={errors.password_re}
          touched={touched.password_re}
          onChange={handleChange}
          onBlur={handleBlur}
          masked
        />

        <Select
          label="role"
          options={userRoleOptions}
          name="role"
          value={
            userRoleOptions
              ? userRoleOptions.find((option) => option.value === values.role)
              : ''
          }
          onChange={(option) => setFieldValue('role', option.value)}
          onBlur={handleBlur}
        />

        <FormFooter>
          <Button type="submit" disabled={isSubmitting}>
            <div style={{ display: 'flex' }}>
              {isSubmitting && (
                <Preloader style={{ width: '20px', margin: '0 8px 0 0' }} />
              )}
              <p>{submitText}</p>
            </div>
          </Button>
        </FormFooter>
      </Form>
    </FormWrap>
  );
}