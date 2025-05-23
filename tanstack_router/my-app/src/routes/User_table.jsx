import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
 
 export const Route = createFileRoute("/User_table")({
   component: User_table,
 });
function User_table(){
    const [users, setUsers] = useState([]);
    const getusers = () => {
        axios
            .get(`http://localhost:8000/tanstackform/data_users`)
            .then((response) => {
            console.log("tablica danych: ", response.data);
            setUsers(response.data);
            })
            .catch((error) => {
            console.error("Error fetching data:", error);
            });
        };
        useEffect(() => {
            axios.get(`http://localhost:8000/tanstackform/data_users`)
              .then((response) => {
                setUsers(response.data);
              })
              .catch((error) => {
                if (error.response && error.response.status === 401) {
                  alert("Not authorized. Please log in.");
                } else {
                  console.error("Error fetching data:", error);
                }
              });
          }, []);
          
    return(
        <>
        <Link to="/User_Add">
        <button>Go to Add User Form</button>
      </Link>
        <table class="table">
        <thead>
            <tr>
                <th scope="col">
                    Email
                </th>
                <th scope="col">
                    Password
                </th>
                <th scope="col">
                    Gender
                </th>
                <th scope="col">
                    School
                </th>
            </tr>
        </thead>
        <tbody>
         {users.map((post, index) => (
            <tr key={index} >
             <th scope="row">{post.mail}</th>
             <td>{post.password}</td>
             <td>{post.gender}</td>
             <td>{post.school}</td>
            </tr>
          )
        )}
        </tbody>
        </table>
        </>
    )
}