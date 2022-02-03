import './links.css';

import { useState, useEffect } from 'react';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { getLinksSave, deleteLink } from "../../services/storageLinks";
import Modal from '../../components/Modal';

export default function Links() {
   const [allLinks, setAllLinks] = useState([]);
   const [linkData, setLinkData] = useState({});
   
   const [showModal, setShowModal] = useState(false);
   const [showMessageEmptyList, setShowMessageEmptyList] = useState(false);

   useEffect(() => {
      const links = getLinksSave('shortenedLinks');

      if(links.length === 0) setShowMessageEmptyList(true);

      setAllLinks(links);
   }, [])

   const handleLinkOpen = link => {
      setLinkData(link);
      setShowModal(true);
   }

   const handleDelete = id => {
      const newAllLinks = deleteLink(allLinks, id);

      if(newAllLinks.length === 0) setShowMessageEmptyList(true);

      setAllLinks(newAllLinks);
   }

   return (
      <div className="container-links">
         <div className="links-header hidden">
            <div>
               <Link to="/">
                  <FiArrowLeft size={38} color="#fff" />
               </Link>
            </div>
            <div>
               <h1>Meus Links</h1>
            </div>
         </div>

         { showModal && (
            <Modal
               closeModal={() => setShowModal(false)}
               content={linkData}
            />
         )}

         { showMessageEmptyList && (
            <div className="container-empty-list">
               <h2>Sua lista está vazia...</h2>
            </div>
         )}

         <div className="container-list">
            <ul className="list">
               {
                  allLinks.map(link => (
                     <li className="link-item" key={link.id}>
                        <button className="link" onClick={() => handleLinkOpen(link)}>
                           <FiLink size={18} color="#fff" />
                           {link.long_url}
                        </button>
                        <button className="link-delete" onClick={() => handleDelete(link.id)}>
                           <FiTrash size={24} color="#ff5454" />
                        </button>
                     </li>
                  ))
               }
            </ul>
         </div>
      </div>
   )
}