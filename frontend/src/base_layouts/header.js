import { Navbar, Nav, NavItem, NavLink, NavDropdown } from 'react-bootstrap';
import '../assets/css/nav.css';

const Header = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <Navbar id='nav' className='justify-content-between me-3 ms-3' expand="lg">
      <div className='d-flex align-items-center'>
        <Navbar.Brand href="/">
        </Navbar.Brand>
        <Nav className="mr-auto">
          {/* Services Dropdown */}
          <NavDropdown
            title="Services"
            id="services-dropdown"
            className="p-2 text-center btn"
          >
            <div className="d-flex px-3 py-2" style={{ minWidth: "400px" }}>
              {/* Left side - Software Solutions */}
              <div className="flex-fill pr-3">
                <a href="#software-solutions" className="fw-bold text-dark text-decoration-none">
                  Software Solutions
                </a>
                <ul className="list-unstyled mb-0 mt-1">
                  <li>Websites</li>
                  <li>Custom Software</li>
                  <li>E-commerce Solutions</li>
                </ul>
              </div>
              {/* Right side - 3D Prints */}
              <div className="flex-fill pl-3 border-start">
                <a href="#prints" className="fw-bold text-dark text-decoration-none">
                  3D Prints
                </a>
                <ul className="list-unstyled mb-0 mt-1">
                  <li>Prototypes</li>
                  <li>Miniatures</li>
                  <li>Replacement Parts</li>
                </ul>
              </div>
            </div>
          </NavDropdown>
        </Nav>
      </div>
      <div className="me-4 mt-4">
        <a href="#contact" className="btn">
          Get in Touch
        </a>
      </div>
    </Navbar>
  );
};

export default Header;