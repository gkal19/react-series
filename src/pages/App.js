import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <nav className="nav is-tab has-shadow">
        <div className="nav-left">
          <Link to="#" className="nav-item" activeClassName="is-active">Home</Link>
          <Link to="/cursos" className="nav-item" activeClassName="is-active">Cursos</Link>
          <Link to="/sobre" className="nav-item" activeClassName="is-active">Sobre</Link>
        </div>
        </nav>

        <section className="section">
        <div className="container">
      {this.props.children}
        </div>
      </section>
      </div>
    );
  }
}
