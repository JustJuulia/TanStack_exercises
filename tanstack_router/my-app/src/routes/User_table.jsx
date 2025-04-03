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
        getusers();
    }, [])
    return(
        <>
        <Link to="/User_Add">
        <button>Go to Add User Form</button>
      </Link>
        <table>
        <thead>
            <tr>
                <th>
                    Email
                </th>
                <th>
                    Password
                </th>
                <th>
                    Gender
                </th>
                <th>
                    School
                </th>
            </tr>
        </thead>
        <tbody>
         {users.map((post, index) => (
            <tr key={index} >
             <td>{post.email}</td>
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