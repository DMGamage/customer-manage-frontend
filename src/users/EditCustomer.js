import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


export default function EditCustomer() {
  let navigate = useNavigate();

  const {id} = useParams();

  const [customer, setCustomers] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = customer;

  const onInputChange = (e) => {
    setCustomers({ ...customer, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, customer);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setCustomers(result.data);
  };




  return (
  <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">
      <h2 className='text-center m-4'>Edit Customer</h2>

      <form onSubmit={(e) => onSubmit(e)}>

      <div className='mb-3'>
        <label htmlFor='FullName' className='form-label'>
          Full Name
        </label>
        <input type={"text"} className="form-control" placeholder='Enter Your Full Name' name='name'
        value={name}
        onChange={(e) => onInputChange(e)}
        />
      </div>

      <div className='mb-3'>
        <label htmlFor='UserName' className='form-label'>
          User Name
        </label>
        <input type={"text"} className="form-control" placeholder='Enter Your User Name' name='username'
        value={username}
        onChange={(e) => onInputChange(e)}
        />
      </div>

      <div className='mb-3'>
        <label htmlFor='Email' className='form-label'>
          Email
        </label>
        <input type={"text"} className="form-control" placeholder='Enter Your Email' name='email'
        value={email}
        onChange={(e) => onInputChange(e)}
        />
      </div>
      <button type='submit' className='btn btn-outline-primary' >Submit</button>
      <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
      </form>

      </div>
      


    </div>

  </div>
  );
}
