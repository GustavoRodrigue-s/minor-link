import './links.css';

import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Links() {
   return (
      <div className="container-links">
         <div className="links-header">
            <div>
               <Link to="/">
                  <FiArrowLeft size={38} color="#fff" />
               </Link>
            </div>
            <div>
               <h1>Meus Links</h1>
            </div>
         </div>

         <div className="container-list">
            <ul className="list">
               <li className="link-item">
                  <button className="link">
                     <FiLink size={18} color="#fff" />
                     https://sujeitoprogramador.com
                  </button>
                  <button className="link-delete">
                     <FiTrash size={24} color="#ff5454" />
                  </button>
               </li>
               <li className="link-item">
                  <button className="link">
                     <FiLink size={18} color="#fff" />
                     https://gustavorodrigues.com
                  </button>
                  <button className="link-delete">
                     <FiTrash size={24} color="#ff5454" />
                  </button>
               </li>
            </ul>
         </div>
      </div>
   )
}