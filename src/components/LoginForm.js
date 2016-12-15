import React from 'react';
import Form from 'smalldots/lib/Form';

export default function LoginForm({ handleSubmit }) {
  return (
    <Form 
      initialValues={{ username: '', password:'' }}
      onSubmit={values => handleSubmit(values)} >

      {({values, setValue}) => {
        return (
          <div>
            <input
              placeholder="username"
              type="text"
              value={values.username}
              onChange={event => setValue('username', event.target.value)} />
            
            { " | " }
            <input
              placeholder="password"
              type="text"
              value={values.password}
              onChange={event => setValue('password', event.target.value)} />

            <button type="submit">Submit</button>
          </div>  
        )
      }}
    </Form>
  )
}
