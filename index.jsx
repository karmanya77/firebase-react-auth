import React from 'react';
import ReactDOM from 'react-dom';
import { SignupPage } from './src/components/signup/signup.tsx';
import { AuthProvider } from './src/context/auth-context.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from './src/components/login/login.tsx';
import { Dashboard } from './src/components/dashboard/dashboard.tsx';

const AppStarter = () => {
  return (
    <div className="main" style={{ margin: '50px 50px 10px 100px' }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/login" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
};

ReactDOM.render(<AppStarter />, document.getElementById('root'));
