import React, { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import axios from "axios";
export const Route = createFileRoute("/User_Add")({
  component: User_Add,
});

function User_Add() {


    function password_validate(password) {
        const re = {
          capital: /[A-Z]/, 
          digit: /[0-9]/, 
          full: /^[A-Za-z0-9!@#]{9,13}$/,
        };
        return re.capital.test(password) && re.digit.test(password) && re.full.test(password);
      }
      const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      };
      function send_to_backend_data(email, password, gender, school){
        axios
        .post(`http://localhost:8000/tanstackform/newuser?email=${email}&password=${password}&gender=${gender}&school=${school}`)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      }
      const form = useForm({
        defaultValues: {
          email: "",
          password: "",
          repeat_password:"",
          gender: "",
          school: "",
        },
    
    onSubmit: async ({ value }) => {
        if(validateEmail(value.email)){
            console.log('email is valid', value)
            if(value.password === value.repeat_password){
                if(value.password.length >= 9){
                    if(password_validate(value.password)){
                        console.log('password is perectly fine', value)
                        send_to_backend_data(value.email, value.password, value.gender, value.school);
                    }
                    else{
                        console.log('password didnt pass regex', value)
                    }
                }
                else{
                    console.log('password is too short' , value)
                }
              }
              else{
                console.log('password aint matching' , value)
              }
          }
          else{
            console.log('email is invalid', value)
          }
    },
  });

  return (
    <div>
        <Link to="/User_table">
        <button>Go to Users Table</button>
      </Link>
      <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div className="block">
            <div>
          <form.Field
            name="email"
            children={(field) => (
              <input
                placeholder={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          />
          </div>
          <div>
          <form.Field
            name="password"
            children={(field) => (
              <input
                placeholder={field.name}
                name={field.name}
                type="password"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          />
          </div>
          <div>
          <form.Field
            name="repeat_password"
            children={(field) => (
              <input
                placeholder={field.name}
                name={field.name}
                type="password"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          /></div>
          <div>
          <form.Field
            name="gender"
            children={(field) => (
              <input
                name={field.name}
                type="radio"
                value={"female"}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          />
          female
          </div>
          <div>
          <form.Field
            name="gender"
            children={(field) => (
              <input
                name={field.name}
                type="radio"
                value={"male"}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          />
          male
          </div>
          <form.Field
            name="school"
            children={(field) => (
              <select
                name={field.name}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              >
                <option value="sci">SCI</option>
                <option value="zut">ZUT</option>
                <option value="pum">PUM</option>
              </select>
            )}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
}