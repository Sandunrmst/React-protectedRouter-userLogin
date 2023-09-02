import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-[99] w-full p-5 bg-red-600 flex items-center justify-between">
    <div>Home</div>
    <div><Link to='/profile'>Profile</Link></div>
    </footer>
  )
}

export default Footer