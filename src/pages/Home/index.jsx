import { FiLink, FiArrowDown } from 'react-icons/fi';
import { useState } from 'react';
import './home.css';

import Menu from '../../components/Menu';
import Modal from '../../components/Modal';

import api from '../../services/api';
import { saveLinks } from '../../services/storageLinks';

export default function Home() {
   const [inputValue, setinputValue] = useState('');
   const [requestData, setRequestData] = useState({});
   const [showModal, setShowModal] = useState(false);

   const hanleShortLink = async () => {
      try {
         const response = await api.post('/shorten', {
            long_url: inputValue
         })

         setRequestData(response.data);
         setShowModal(true);

         saveLinks('shortenedLinks', response.data);

         setinputValue('');

      } catch (e) {
         setinputValue('');
      }
   }

   return (
      <div className="container-home">

         <div className="container-logo">
            <div className="logo-image hidden">
               <img src="./logo.png" alt="Logo encurta link" />
            </div>
            <div className="logo-texts hidden">
               <div>
                  <h1>MinorLink</h1>
               </div>
               <div className="container-span">
                  <span>Cole seu link para encurtar</span>
                  <FiArrowDown color="#fff" />
               </div>
            </div>
         </div>

         <div className="container-main hidden">
            <div className="main-input">
               <FiLink size={24} color="#fff" />
               <input
                  type="text"
                  placeholder="Cole seu link aqui..."
                  value={inputValue}
                  onChange={e => setinputValue(e.target.value)}
               />
            </div>
            <div>
               <button onClick={hanleShortLink}>
                  Gerar Link
               </button>
            </div>
         </div>

         <Menu />

         {showModal && (
            <Modal
               closeModal={() => setShowModal(false)}
               content={requestData}
            />
         )}

      </div>
   )
}