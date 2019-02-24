import styles from './Navbar.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Navbar as BootstrapNavbar } from 'react-bootstrap';

class Navbar extends Component {
  render() {
    return (
      <BootstrapNavbar className={styles.navbar} fixedTop>
        <BootstrapNavbar.Brand className={styles.brand}>
          {this.props.children}
        </BootstrapNavbar.Brand>
      </BootstrapNavbar>
    );
  }
}

Navbar.propTypes = {
  children: PropTypes.element
};

export default Navbar;
