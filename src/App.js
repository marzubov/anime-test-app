import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Grid, Cell, Toolbar, ToolbarRow, ToolbarSection } from 'react-mdc-web/lib';
import logo from './img/logo.png';
import Nav from './components/Nav';
import Routes from './Routes';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Toolbar>
          <ToolbarRow>
            <ToolbarSection align="start">
              <Link to="/">
                <img className="logo" src={logo} alt="Anime collection"/>
              </Link>
            </ToolbarSection>
            <ToolbarSection align="end">
              <Nav/>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>

        <main>
          <Grid className="centered-grid">
            <Cell col={12}>
              <Routes/>
            </Cell>
          </Grid>
        </main>
      </div>
    );
  }
}

export default withRouter(App);
