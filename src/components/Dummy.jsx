import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "preact/hooks";
import * as Yup from "yup";

const SimpleForm = ({ counter1, counter2 }) => {
  const [cities, setcities] = useState([]);

  const API_URL = "https://restcountries.com/v3.1/all";

  const options = cities.map((e) => ({
    value: e,
    label: e,
  }));

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.number()
      .min(9, "Phone number must be at least 9 digits")
      .required("Phone number is required"),
    name: Yup.string()
      .required("Name is required")
      .min(5, "Name must be at least 5 characters")
      .max(20, "Max length must be 20 characters"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),

    postalCode: Yup.string()
      .min(4, "Postal Code must be at least 4 characters long")
      .required("Postal Code is required"),
  });

  const MySelect = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        let countries = [];
        data.forEach((e) => {
          countries.push(e.name.official);
        });
        setcities(countries);
      });
  };

  useEffect(() => {
    MySelect();
  }, []);

  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        phone: "",
        address: "",
        city: "",
        country: "",
        postalCode: "",
        saveData: false,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        values.item1price;
        console.log(typeof values);
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 400);
      }}>
      {({ handleSubmit, errors, touched }) => (
        <Form onSubmit={handleSubmit}>
          {/* Input */}
          <h2
            style={{
              textAlign: "start",
              margin: "50px 0px 0px ",
              width: "100%",
            }}>
            Contact infomation
          </h2>
          <label htmlFor="email">E-mail</label>
          <span>
            <span className="material-symbols-outlined"> mail </span>
            <Field type="email" name="email" placeholder="Enter your email" />
          </span>
          {errors.email && touched.email ? (
            <div className="error">{errors.email}</div>
          ) : null}
          {/* Input */}

          <label htmlFor="phone">Phone Number</label>
          <span>
            <span className="material-symbols-outlined">call</span>

            <Field type="phone" name="phone" placeholder="Enter your phone" />
          </span>
          {errors.phone && touched.phone ? (
            <div className="error">{errors.phone}</div>
          ) : null}
          {/* Input */}
          <h2>Shipping address</h2>
          <label htmlFor="name">Full Name</label>
          <span>
            <span className="material-symbols-outlined">account_circle</span>

            <Field type="text" name="name" placeholder="Enter your name " />
          </span>
          {errors.name && touched.name ? (
            <div className="error">{errors.name}</div>
          ) : null}
          {/* Input */}

          <label htmlFor="address">Address</label>

          <span>
            <span className="material-symbols-outlined">home</span>

            <Field
              type="text"
              name="address"
              placeholder="Enter your address"
            />
          </span>
          {errors.address && touched.address ? (
            <div className="error">{errors.address}</div>
          ) : null}
          {/* Input */}

          <label htmlFor="City">city</label>

          <span>
            <span className="material-symbols-outlined">apartment</span>

            <Field type="text" name="city" placeholder="Enter your city" />
          </span>
          {errors.city && touched.city ? (
            <div className="error">{errors.city}</div>
          ) : null}
          {/* SELECT input */}

          <div className="FormCountryPostal">
            <div className="FormCountryPostal-postal">
              <label htmlFor="country">country</label>

              <Field as="select" name="coutry">
                <option value="" disabled>
                  Select a country
                </option>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>

              {errors.country && touched.country ? (
                <div className="error">{errors.country}</div>
              ) : null}
            </div>

            {/* Input */}

            <div className="FormCountryPostal-postal">
              <label htmlFor="postalCode">Postal Code</label>

              <span>
                <span className="material-symbols-outlined">
                  {" "}
                  markunread_mailbox
                </span>
                <Field
                  type="text"
                  name="postalCode"
                  placeholder="Enter your postal code"
                />
              </span>
              {errors.postalCode && touched.postalCode ? (
                <div className="error">{errors.postalCode}</div>
              ) : null}
            </div>
          </div>

          {/* checkbox */}

          <label className="checkbox">
            <Field type="checkbox" name="saveData" />
            Save this information for next time
          </label>

          <button
            style={{ marginBlock: "20px 90px", marginRight: "10px" }}
            className="Form_continue"
            type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SimpleForm;
