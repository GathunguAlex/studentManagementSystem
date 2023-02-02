import React from 'react'
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function Login() {


  return (
    <div>
      <form>
        <MDBInput
          className="mb-4"
          type="email"
          id="form2Example1"
          label="Birth Certificate"
        />
        <MDBInput
          className="mb-4"
          type="password"
          id="form2Example2"
          label="Password"
        />

        <MDBBtn type="submit" className="mb-4" block>
          Login
        </MDBBtn>
      </form>
    </div>
  );
}
