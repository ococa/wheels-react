import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
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

ReactDOM.render(
  <Router>
    <Layout>
      {/*header*/}
      <Header>
        <div>
          <img src={logo} alt="logo"/>
          logo
        </div>
      </Header>
      {/*center*/}
      <Layout>
        <Aside>
          <h2>hhh</h2>
          <ul>
            <li><Link to={'/icon'}>icon</Link></li>
            <li><Link to={'/dialog'}>dialog</Link></li>
            <li><Link to={'/button'}>button</Link></li>
            <li><Link to={'/layout'}>layout</Link></li>
          </ul>
        </Aside>
        <Layout>
          <Content style={{ padding: '20px', border: '1px solid grey' }}>
            <Route path='/icon' component={IconExample} />
            <Route path='/button' component={ButtonExample} />
            <Route path='/dialog' component={DialogExample} />
            <Route path='/layout' component={LayoutExample} />
          </Content>
        </Layout>
      </Layout>
      {/*center end*/}
      {/*footer*/}
      <Footer>
        footer
      </Footer>
    </Layout>
  </Router>,
  document.getElementById('root')
);
