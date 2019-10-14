import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  import {Link} from 'react-router-dom';

  import logo from '../assets/img/brand.png'

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md" fixed="static">
          <Link className="navbar-brand" to="/"><img src={logo} alt="website logo"></img></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/movies">Discover Movies</Link>
              </NavItem>

              <NavItem>
                <Link className="nav-link" to="/people">Discover People</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/now-playing">Now Playing</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Thapelo Motene
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    WatchList
                  </DropdownItem>
                  <DropdownItem>
                    Favorites
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}