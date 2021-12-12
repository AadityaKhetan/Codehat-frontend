import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from './components/Spinner';

const Dashboard = lazy(() => import('./components/Dashboard'));



const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Typography = lazy(() => import('./basic-ui/Typography'));


const BasicElements = lazy(() => import('./form-elements/BasicElements'));

const BasicTable = lazy(() => import('./tables/BasicTable'));



const Mdi = lazy(() => import('./icons/Mdi'));


const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));
const Lockscreen = lazy(() => import('./user-pages/Lockscreen'));

const BlankPage = lazy(() => import('./general-pages/BlankPage'));
const ProblemsList = lazy(() => import('./general-pages/ProblemList'));
const Faculty = lazy(()=>import('./general-pages/Faculty'));
const AddClass = lazy(()=>import('./general-pages/faculty-pages/AddClass'));
const Subject = lazy(()=>import('./general-pages/faculty-pages/Subject'));
const AssignmentReport = lazy(()=>import('./general-pages/faculty-pages/AssignmentReport'));
const Classes = lazy(()=>import('./general-pages/Classes'));




class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />


          <Route path="/basic-ui/buttons" component={ Buttons } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route path="/basic-ui/typography" component={ Typography } />


          <Route path="/form-Elements/basic-elements" component={ BasicElements } />

          <Route path="/tables/basic-table" component={ BasicTable } />


          <Route path="/icons/mdi" component={ Mdi } />


          <Route path="/charts/chart-js" component={ ChartJs } />


          <Route path="/user-pages/login-1" component={ Login } />
          <Route path="/user-pages/register-1" component={ Register1 } />
          <Route path="/user-pages/lockscreen" component={ Lockscreen } />

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />

          <Route path="/general-pages/blank-page" component={ BlankPage } />
          <Route path="/general-pages/problem-list" component={ ProblemsList } />
          <Route path="/general-pages/faculty" component={ Faculty } />
          <Route path="/general-pages/faculty-pages/add-class" component={AddClass}/>
          
          <Route path="/general-pages/faculty-pages/subject/:subject" component={Subject}/>
          <Route path="/general-pages/faculty-pages/problem/:problem" component={AssignmentReport}/>
          <Route path="/courses" component={Classes}/>


          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;