import * as React from 'react';

interface LoginPageProps {

}

interface LoginPageState {

}

export class LoginPage extends React.Component<LoginPageState, LoginPageProps> {
  render() {
    return (
      <React.Fragment>
        <h1>Login Page</h1>
        <p>This is the login page</p>
      </React.Fragment>
    )
  }
}
