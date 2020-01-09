import React from 'react'

import './layout.example.scss';
import {Aside, Content, Footer, Header, Layout} from "../lib";


export interface Props {

}

const LayoutExample: React.FunctionComponent < Props > = () => {
  return (
    <>
      <h2>layout example</h2>
      <h5>第一个个例子</h5>
      <Layout style={{ height : 200 }}>
        <Header>Header</Header>
        <Content style={{ background: 'lightblue' }}>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
      <>
        <h5>第二个个例子</h5>
        <Layout style={{ height : 200 }}>
          <Header>Header</Header>
          <Layout>
            <Aside>Aside</Aside>
            <Content style={{ background: 'lightblue' }}>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </>
      <>
        <h5>第三个个例子</h5>
        <Layout style={{ height : 200 }}>
          <Header>Header</Header>
          <Layout>
            <Content style={{ background: 'lightblue' }}>Content</Content>
            <Aside>Aside</Aside>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </>
      <>
        <h5>第四个个例子</h5>
        <Layout style={{ height : 200 }}>
          <Aside>Aside</Aside>
          <Layout>
            <Header>Header</Header>
            <Content style={{ background: 'lightblue' }}>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </>
    </>
  )
};

export default LayoutExample;
