import React, { useState } from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import axios from "axios";

function Axiostask() {
    const [data1, setdata1] = useState([]);

    const initialValues = {
        email: "",
        password: "",
    };


    function validateForm(values) {
        const errors = {};
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
            errors.email = "Invalid email address";
        }

        if (!values.password) {
            errors.password = "Password is required";
        }

        return errors;
    }

    const handleForm = (values, actions) => {
        const obj = {
            email: values.email,
            password: values.password,

        };
        console.log(obj)

        axios.post("https://jsonplaceholder.typicode.com/users", obj)
            .then(response => {
                //console.log(response.data.message)
                setdata1(response)
                alert(response.status)

            })

            .catch(error => {
                console.error("Error:", error);
            });
        actions.resetForm();
    };
    console.log(data1)

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validate={validateForm}
                onSubmit={handleForm}
            >
                <Form>
                    <label>Email:</label>
                    <Field type="email" name="email" placeholder="Enter email" /><br />
                    <ErrorMessage name="email" component="div" style={{ color: "red" }} />

                    <label>Password:</label>
                    <Field type="password" name="password" placeholder="Enter password" /><br />
                    <ErrorMessage name="password" component="div" style={{ color: "red" }} />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>


        </div>
    );
}

export default Axiostask;
