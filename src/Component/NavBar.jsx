import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBInputGroup,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useDispatch } from "react-redux";

const NavBar = () => {
  const Dispatch = useDispatch();
  return (
    <>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand>
            <img
              src="https://www.lakedistrictweatherline.co.uk/__data/assets/image/0025/124990/logo2.png?v=0.1.8"
              width={130}
              height="50"
              alt="Logo"
              className='ms-4 mb-2'
            />
          </MDBNavbarBrand>
          <MDBInputGroup tag="form" className='d-flex w-auto me-3'
            onSubmit={(e) => {
              e.preventDefault();
              Dispatch({ type: "PLACE", payload: e.target[0].value });
            }}>
            <input className='form-control me-3' placeholder="Find Location" aria-label="Search" type='Search' />
            <MDBBtn outline>Search</MDBBtn>
          </MDBInputGroup>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default NavBar;
