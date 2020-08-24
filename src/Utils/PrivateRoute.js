import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import RealtorContext from '../contexts/RealtorContext'

export default function PrivateRoute({ component, ...props }) {
  const realtor = useContext(RealtorContext);

  const Component = component

  console.log('Username', realtor.user_name)
  return (
    <Route
      {...props}
      render={componentProps => (
        realtor.user_name
          ? <Component {...componentProps} />
          : 
          <Redirect
              to={{
                pathname: '/login',
                state: { from: componentProps.location }
              }}
            />
      )}
    />
  )
}
