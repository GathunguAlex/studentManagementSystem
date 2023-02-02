import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { useState } from "react";

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand></MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
              </MDBNavbarItem>

              <MDBNavbarItem className="nav-link">
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" role="button">
                    Sign in options
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Sign In as Student</MDBDropdownItem>
                    <MDBDropdownItem link>Sign In as a Teacher</MDBDropdownItem>
                    <MDBDropdownItem link>Sign in as Admin</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>

              <MDBNavbarItem>
                
              </MDBNavbarItem>
            </MDBNavbarNav>

            {/* <form className="d-flex input-group w-auto">
              <input
                type="search"
                className="form-control"
                placeholder="Birth Certificate #"
                aria-label="Search"
              />
              <MDBBtn color="primary">Search</MDBBtn>
            </form> */}
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
