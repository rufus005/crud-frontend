import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const User = () => {
    const [users, setUsers] = useState([{
        Name:"rufus", Email:"rufus090400@gmail.com", Age:24,
    }])

    useEffect(() => {
        axios.get('https://crud-backend-r2sp.onrender.com/')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err)
        )
    }, [])
    const handleDelete =(id) => {
        axios.delete('https://crud-backend-r2sp.onrender.com/deleteUser/'+id)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  return (
   <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
     <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">Add +</Link>
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user,index) => {
                        return  <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>
                            {/* <button>Edit</button>  */}
                            <Link to={`/update/${user._id}`} className="btn btn-success">Update</Link>
                            <button className="btn btn-danger ms-3" onClick={(e) => handleDelete(user._id)}>Delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
     </div>
   </div>
  )
}

export default User