import Button from '@/components/Button';
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className='text-center font-bold text-5xl'>Home page</h1>

      <p style={{ color: 'red', fontSize: 30, fontWeight: 'bold' }} > 
        Using Inline CSS 
        </p>

      <br />
      <hr />
      <input type="text" />
      <button className='btn'>Submit</button>

      <img src="/next.svg" alt="" />

      <Button>Login</Button>
      <Button disabled={true} >Signup</Button>

    </div>
  )
}

export default Home;