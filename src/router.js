import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DodajAkt from './dodaj_akt'; //IMPORT MODUŁU
import Profil from './profil';
import Podsumowanie from './podsumowanie';
import Home from './home';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function RouterMenu() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/podsumowanie">Podsumowanie aktywności</Link>
          </li>
          <li>
            <Link to="/profil">Mój profil</Link>
          </li>
          <li>
            <Link to="/dodajAkt">Dodaj nową aktywność</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profil">
            <Profil />
          </Route>
          <Route path="/podsumowanie">
            <Podsumowanie />
          </Route>
          <Route path="/dodajAkt">
            <DodajAkt />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

