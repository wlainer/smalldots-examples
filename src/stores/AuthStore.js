import React from 'react';
import LocalStorage from 'smalldots/lib/LocalStorage';

export default function AuthStore({ children }) {
  return (
    <LocalStorage
      initialValues={{ username:'', password:'' }}
      subscribe={['username']} >
      
      {({ setItem, ...rest }) => children({
        ...rest,
        updateUsername: username => setItem('username', username),
        updatePassword: password => setItem('password', password)
      })}
    </LocalStorage>
  )
}