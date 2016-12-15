import React from 'react';
import Fetch from 'smalldots/lib/Fetch';

import LoginForm from './LoginForm';
import AuthStore from '../stores/AuthStore';

export default function LoginScene() {
  return (
    <AuthStore>
      {({ updateUsername, updatePassword }) => {
        return(
          <Fetch 
            url="http://localhost:8000/login" 
            method="post"
            lazy={true} >
            {({ fetching, fetch, data, error }) => {

              if (fetching && !data) return <div>loading</div>

              if (data) {
                console.log(data)
                updateUsername(data)
              }

              if (error) console.error(error)

              return (
                <LoginForm 
                  handleSubmit={ (values) => fetch(values) }/>
              )
            }}
          </Fetch>
        )
      }}
    </AuthStore>
  )
}