import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex bg-black/90 text-white items-center justify-between max-w-[30rem] w-[70%] sm:w-full rounded-full p-1">
        <div className="flex items-center gap-2">
          <img src="logo.svg" alt="logo" height={40} width={40}/>
          <h2>Medsync</h2>
        </div> 
        <Link to="/dashboard/chat" className="bg-white text-black hover:bg-blue-500 duration-200 hover:text-white rounded-full py-2 px-4">
            Get started
        </Link>
    </nav>
  )
}

export default Navbar