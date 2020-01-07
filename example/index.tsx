import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import IconExample from './icon.example';
import ButtonExample from "./button.example";

ReactDOM.render(
  <Router>
    <header>
      <div>

      </div>
    </header>
    <div>
      <aside>
        <h2>start</h2>
        <ul>
          <li>icon</li>
          <li>button</li>
        </ul>
      </aside>
      <main>
        <Route path='/icon' component={IconExample} />
        <Route path='/button' component={ButtonExample} />
      </main>
    </div>
  </Router>,
  document.getElementById('root')
);
