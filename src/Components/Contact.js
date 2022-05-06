import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.fullName) {
    errors.fullName = "Required";
  } else if (values.fullName.length < 3) {
    errors.fullName = "Must be 3 characters or more";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "Required";
  } else if (!/^(9|8|7|6)\d{9}$/.test(values.phoneNumber)) {
    errors.phoneNumber = "Must start with 9, 8 or 7 and be 10 digits long";
  }

  if (!values.city) {
    errors.city = "Required";
  } else if (values.city.length < 5) {
    errors.city = "Must be 5 characters or more";
  }

  if (!values.message) {
    errors.message = "Required";
  } else if (values.message.length < 10) {
    errors.message = "Must be 10 characters or more";
  }

  return errors;
};

function Contact() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: 0,
      city: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      alert(
        `Dear ${values.fullName}, your details have been submitted successfully.`
      );
    },
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card rounded-0">
            <div className="card mx-auto mt-5 text-dark bg-light rounded-lg border-warning">
              <h5 className="card-header border-warning">Get in touch!</h5>
              <div className="card-body">
                <h6 className="card-title text-center">
                  Contact us for any complain/ suggestion
                </h6>
                <form className="px-4 mt-4" onSubmit={formik.handleSubmit}>
                  <div className="form-row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="inputName">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputName"
                          placeholder="First and Last Name"
                          name="fullName"
                          onChange={formik.handleChange}
                          value={formik.values.fullName}
                          onBlur={formik.handleBlur}
                        />
                        {formik.errors.fullName ? (
                          <small className="text-danger">
                            {formik.errors.fullName}
                          </small>
                        ) : null}
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputEmail">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="inputEmail"
                          name="email"
                          placeholder="Valid email only"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.email ? (
                          <small className="text-danger">
                            {formik.errors.email}
                          </small>
                        ) : null}
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputPhone">Phone Number</label>
                        <input
                          type="number"
                          className="form-control"
                          id="inputPhone"
                          name="phoneNumber"
                          placeholder="10 digits only"
                          value={formik.values.phoneNumber}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.phoneNumber ? (
                          <small className="text-danger">
                            {formik.errors.phoneNumber}
                          </small>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputCity">Residing City</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputCity"
                          placeholder="Current City"
                          name="city"
                          value={formik.values.city}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.city ? (
                          <small className="text-danger">
                            {formik.errors.city}
                          </small>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="inputMessage">Message</label>
                        <textarea
                          rows="12"
                          cols="25"
                          className="form-control"
                          id="inputMessage"
                          placeholder="Please type your complain/ suggestion here and please do elaborate them as it gets easier for us to understand the issue. Thank you!"
                          name="message"
                          onChange={formik.handleChange}
                          value={formik.values.message}
                          onBlur={formik.handleBlur}
                          style={{ height: "100%" }}
                        />
                        {formik.errors.message ? (
                          <small className="text-danger">
                            {formik.errors.message}
                          </small>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="submit-btn text-center">
                    <button type="submit" className="btn btn-primary px-4">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
