import React from 'react'

export default function AddCustomer() {
  return <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">
      <h2 className='text-center m-4'>Register Customer</h2>
      <div className='mb-3'>
        <label htmlFor='FullName' className='form-label'>
          Full Name
        </label>
        <input type={"text"} className="form-control" placeholder='Enter Your Full Name' name='name'/>
      </div>

      <div className='mb-3'>
        <label htmlFor='UserName' className='form-label'>
          User Name
        </label>
        <input type={"text"} className="form-control" placeholder='Enter Your User Name' name='username'/>
      </div>

      <div className='mb-3'>
        <label htmlFor='Email' className='form-label'>
          Email
        </label>
        <input type={"text"} className="form-control" placeholder='Enter Your Email' name='email'/>
      </div>
      <button type='submit' className='btn btn-outline-primary' >Submit</button>
      <button type='submit' className='btn btn-outline-danger mx-4'  >Cancel</button>

      </div>
      


    </div>

  </div>;
}
