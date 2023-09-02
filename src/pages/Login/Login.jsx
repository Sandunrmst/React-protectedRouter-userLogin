import { collection, getDocs, query, where } from "firebase/firestore"
import { useRef } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import db from "../../firebase/firebase"
import { addUsers } from "../../Store/ReduxSlice/userSlice"


const Login = () => {

  const dispatch = useDispatch()

  const username = useRef()
  const password = useRef()

  const navigate = useNavigate()

  const logingSubmit = ()=>{
    const q = query(collection(db, "users"), where("username", "==", 'admin'));

    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          dispatch(addUsers(doc.data()));
      });
      navigate("/admin")
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
  }
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <input className="bg-slate-300 p-2 rounded-lg text-lg w-3/12 text-neutral-950" ref={username} type="text" placeholder="username"/>
      <input className="bg-slate-300 p-2 rounded-lg text-lg w-3/12 text-neutral-950" ref={password} type="password" placeholder="password"/>
      <button className="p-2 rounded-lg bg-orange-300 w-3/12" onClick={logingSubmit}>Login</button>
    </div>
  )
}

export default Login