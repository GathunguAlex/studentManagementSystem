import React from 'react'
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function SignUp() {

    
  return (
    <div>
      <form>
        <MDBRow className="mb-4">
          <MDBCol>
            <MDBInput id="form3Example1" label="First name" />
          </MDBCol>
          <MDBCol>
            <MDBInput id="form3Example2" label="Last name" />
          </MDBCol>
        </MDBRow>
        <MDBInput
          className="mb-4"
          type="email"
          id="form3Example3"
          label="Birth Certicate"
        />
        <MDBInput
          className="mb-4"
          type="password"
          id="form3Example4"
          label="Password"
        />

        <MDBBtn type="submit" className="mb-4" block>
          Login
        </MDBBtn>
      </form>
    </div>
  );
}
