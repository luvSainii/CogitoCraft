import React from "react";
import "../App.css";
// import axios from 'axios'
import {useFormik} from "formik";

const Login = () => {

  const initialValues = {
    name:"",
    email:"",
    password:""
  }

   const {values,handleBlur,handleChange,handleSubmit} = useFormik(
    {initialValues:initialValues,
      onSubmit : async (values)=>{
        console.log(values);
        // await axios.post("http://localhost:4000/form",values);
        // console.log("Success")
      }
  }
  )

  return (
    <>
      <div className="wrapper">
        <div className="card-switch">
          <label className="switch">
            <input type="checkbox" className="toggle" />
            <span className="slider"></span>
            <span className="card-side"></span>
            <div className="flip-card__inner">
              <div className="flip-card__front">
                <div className="title">Log in</div>
                <form className="flip-card__form" action="">
                  <input
                    className="flip-card__input"
                    name="email"
                    placeholder="Email"
                    type="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <input
                    className="flip-card__input"
                    name="password"
                    placeholder="Password"
                    type="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <button className="flip-card__btn">Let`s go!</button>
                </form>
              </div>
              <div className="flip-card__back">
                <div className="title">Sign up</div>
                <form className="flip-card__form" action="" onSubmit={handleSubmit}>
                  <input
                    className="flip-card__input"
                    placeholder="Name"
                    type="name"
                    name="name"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <input
                    className="flip-card__input"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <input
                    className="flip-card__input"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <button className="flip-card__btn" type="submit">Confirm!</button>
                </form>
              </div>
            </div>
          </label>
        </div>
      </div>
    </>
  );
};

export default Login;
