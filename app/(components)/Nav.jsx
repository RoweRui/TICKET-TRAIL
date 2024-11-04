import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center bg-nav p-4">
      <div className="flex items-center">
      <img 
        src="/logo2.gif" 
        alt="Logo" 
        style={{ height: '80px', width: '150px' }} />
      </div>

      <div className="flex items-center space-x-4 text-white">
        <Link 
          href="/" 
          className="flex items-center hover:bg-black hover:text-yellow-500 p-2 rounded transition-colors duration-300" 
          style={{ marginLeft: '100px' }} 
        >
          <FontAwesomeIcon icon={faHome} className="icon" />
          <span className="ml-2">HOME</span>
        </Link>
      </div>

      <div className="text-white">
        <Link 
          href="/TicketPage/new" 
          className="flex items-center hover:bg-black hover:text-yellow-500 p-2 rounded transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faTicket} className="icon" />
          <span className="ml-2">CREATE A NEW TICKET</span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
