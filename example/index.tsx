import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import logo from './logo.png';

import IconExample from './icon.example';
import ButtonExample from './button.example';
import DialogExample from './dialog.example';
import LayoutExample from './layout.example';
import Layout from "../lib/layout/layout";
import Header from "../lib/layout/header";
import Aside from "../lib/layout/aside";
import Content from "../lib/layout/content";
import Footer from "../lib/layout/footer";

import './index.scss';

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
          <h2 className={'com'}>Component</h2>
          <ul>
            <li><NavLink to={'/icon'}>icon</NavLink></li>
            <li><NavLink to={'/dialog'}>dialog</NavLink></li>
            <li><NavLink to={'/button'}>button</NavLink></li>
            <li><NavLink to={'/layout'}>layout</NavLink></li>
          </ul>
        </Aside>
        <Layout className={'site-main-wrapper'}>
          <Content className={'site-main-content-wrapper'}>
            <Route path='/icon' component={IconExample} />
            <Route path='/button' component={ButtonExample} />
            <Route path='/dialog' component={DialogExample} />
            <Route path='/layout' component={LayoutExample} />
          </Content>
        </Layout>
      </Layout>
      {/*center end*/}
      {/*footer*/}
      <Footer className={'site-common-footer'}>
        Made with
        <span style={{color: "rgba(0, 0, 0)"}}>🌟</span>
        by
        <a href="github/hhh">coca</a>
      </Footer>
    </Layout>
  </Router>,
  document.getElementById('root')
);
