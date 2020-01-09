import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import IconExample from './icon.example';
import ButtonExample from "./button.example";
import DialogExample from "./dialog.example";

ReactDOM.render(
  <Router>
    <header>
      <div>

      </div>
    </header>
    <div>
      <aside>
        <h2>hhh</h2>
        <ul>
          <li><Link to={'/icon'}>icon</Link></li>
          <li><Link to={'/dialog'}>dialog</Link></li>
          <li><Link to={'/button'}>button</Link></li>
        </ul>
      </aside>
      <main style={{ padding: '20px', border: '1px solid grey' }}>
        <Route path='/icon' component={IconExample} />
        <Route path='/button' component={ButtonExample} />
        <Route path='/dialog' component={DialogExample} />
      </main>
    </div>
  </Router>,
  document.getElementById('root')
);
