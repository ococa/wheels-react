import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import logo from './logo.png';
import './index.scss';
import {Content, Layout, Aside, Header, Footer} from "../lib";
import IconDemo from "./exapmle/icon/icon.demo";
import LayoutDemo from "./exapmle/laytout/layout.demo";
import ButtonDemo from "./exapmle/button/button.demo";
import DialogDemo from "./exapmle/dialog/dialog.demo";
import FormDemo from "./exapmle/form/form.demo";


ReactDOM.render(
  <Router>
    <Layout className={'site-wrapper'}>
      {/*header*/}
      <Header className={'site-common-header'}>
        <div className={'header-logo'}>
          <img style={{ height: 48, width: 48 }} src={logo} alt="logo"/>
          <h1>cuu</h1>
        </div>
      </Header>
      {/*center*/}
      <Layout>
        <Aside className={'site-nav-wrapper'}>
          <h2 className={'nav-title-h2'}>UI for React</h2>
          <ul>
            <li><NavLink to={'/icon'}>icon</NavLink></li>
            <li><NavLink to={'/dialog'}>dialog</NavLink></li>
            <li><NavLink to={'/button'}>button</NavLink></li>
            <li><NavLink to={'/layout'}>layout</NavLink></li>
            <li><NavLink to={'/form'}>form</NavLink></li>
          </ul>
        </Aside>
        <Layout className={'site-main-wrapper'}>
          <Content className={'site-main-content-wrapper'}>
            <Route path='/icon' component={IconDemo} />
            <Route path='/button' component={ButtonDemo} />
            <Route path='/dialog' component={DialogDemo} />
            <Route path='/layout' component={LayoutDemo} />
            <Route path='/form' component={FormDemo} />
          </Content>
        </Layout>
      </Layout>
      {/*center end*/}
      {/*footer*/}
      <Footer className={'site-common-footer'}>
        Made with
        <span style={{color: "rgba(0, 0, 0)"}}>🌟</span>
        by
        <a href="https://ococa.github.io/wheels-react/">coca</a>
      </Footer>
    </Layout>
  </Router>,
  document.getElementById('root')
);
