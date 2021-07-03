import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';

import Home from 'screens/Home';
import Resources from 'screens/Resources';
import ResourceSingle from 'screens/Resources/Single';
import CreateResource from 'screens/Resources/Create';
import Media from 'screens/Media';

const Wrapper = styled.div`
  display: flex;
`;
const Nav = styled.nav``;
const Main = styled.section``;

function App() {
  return (
    <Router>
      <Wrapper>
        <Nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <Link to="/media">Media</Link>
            </li>
          </ul>
        </Nav>

        <Main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/resources">
              <Resources />
            </Route>
            <Route exact path="/resources/create">
              <CreateResource />
            </Route>
            <Route exact path="/resources/:id">
              <ResourceSingle />
            </Route>
            <Route exact path="/media">
              <Media />
            </Route>
          </Switch>
        </Main>
      </Wrapper>
    </Router>
  );
}

export default App;
