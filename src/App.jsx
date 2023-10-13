import { useLoaderData } from 'react-router-dom'
import './App.css'
import { useState } from 'react';

function App() {
  // const load = useLoaderData();
  // const [alluser, setUser] = useState(load); 

  // console.log(load);
  const handleAdd = (e)=> {
    e.preventDefault();
    const email = e.target.email.value;
    const name =  e.target.name.value;
    const user = {name, email};
    console.log(user)
    fetch('http://localhost:3000/allUsers', 
      {
        method:'POST',
        headers:{
          "content-type": "application/json"
        },
        body:JSON.stringify(user)
      }
    
    )
    .then(res => res.json())
    .then(data=> 
      
      {

        if(data.insertedId){
          alert('user added succ')
          e.target.reset()
        }
        console.log(data)

    })
    

  }
  return (
    <>
     <div>
       <form onSubmit={handleAdd}>
       <input type="text" name='name' /> <br />
       <input type="email" name='email' /> <br />
       <input type="submit" value="add " />
       </form>
     </div>


      {/* {
          alluser.map(i=> <p key={i.id}>{i.id} {i.name}{i.email}</p>)
      } */}

    </>
  )
}

export default App
