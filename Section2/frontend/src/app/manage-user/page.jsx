'use client'
import axios from 'axios'
<<<<<<< HEAD
import Link from 'next/link';
=======
>>>>>>> b511a6d95083cc352acdb0b1f6bbfe78848d0519
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ManageUser = () => {

    const [userList, setUserList] = useState([]);

    const fetchuserData = async () => {
       const res = await axios.get('http://localhost:5000/user/getall');
       console.table(res.data);
       setUserList(res.data);   
    }

    useEffect(() => {
        fetchuserData();
    }, []);

    const deleteUser = (id) => {
        axios.delete('http://localhost:5000/user/delete/' + id)
            .then((result) => {
                toast.success('User Deleted Successfully');
                fetchUserData();
            }).catch((err) => {
                toast.error('Failed to delete user');
            });
    }
    

    return (
        <div>

            <div className='container mx-auto'>
<<<<<<< HEAD
                <h2 className='text-center font-bold text-3xl my-6'>Manage User</h2>
=======
                <h2 className='text-center font-bold text-3xl my-6'>manage User</h2>
>>>>>>> b511a6d95083cc352acdb0b1f6bbfe78848d0519
                <table className='w-full'>
                    <thead className='border-y-2'>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>CreatedAt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userList.map( (user) => {
                                return (
                                    <tr key={user._id}>
                                        <td>{user._id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.city}</td>
                                        <td>{user.createdAt}</td>

                                        <td>
                                            <button 
                                                onClick={() => { deleteUser(user._id) }}
                                                className='bg-red-500 text-white px-2 py-1 rounded'
                                                > Delete </button>
                                        </td>
<<<<<<< HEAD
                                        <td>
                                            <Link 
                                            href={'/update-user/' + user._id} 
                                            className='bg-blue-500 text-white px-2 py-1 rounded'
                                            >Update</Link>
                                        </td>
=======
>>>>>>> b511a6d95083cc352acdb0b1f6bbfe78848d0519
                                    </tr>
                                )
                            } )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ManageUser;