import { Link } from "react-router-dom";
import { FaGithub,  FaWhatsapp } from "react-icons/fa";

const Footer = () => {

  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-2xl font-bold">AmTechHub</div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/09035517399" 
              target="_blank"
              rel="noopener noreferrer"
              // className="hover:text-primary transition-colors"
            >
            <FaWhatsapp/>       
            </a>
            
            <a
              href="https://github.com/DevMoyin17" 
              target="_blank"
              rel="noopener noreferrer"
              // className="hover:text-primary transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            
            
            <a
              // href="https://portfolio-roan.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
              // className="hover:text-primary transition-colors"
            >
              Portfolio 
            </a>
            
          
          </div>
        </div>
        
        <div className="text-center mt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} AmTechHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;