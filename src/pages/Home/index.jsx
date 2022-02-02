import { FiLink, FiArrowDown } from 'react-icons/fi';
import { useState } from 'react';
import './home.css';

import Menu from '../../components/Menu';
import LinkItem from '../../components/LinkItem';

import api from '../../services/api';

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
         setLink('');

      } catch (e) {
         setLink('');
      }
   }

   return (
      <div className="container-home">

         <div className="container-logo">
            <div className="logo-image hiden">
               <img src="./logo.png" alt="Logo encurta link" />
            </div>
            <div className="logo-texts hiden">
               <div>
                  <h1>MinorLink</h1>
               </div>
               <div className="container-span">
                  <span>Cole seu link para encurtar</span>
                  <FiArrowDown color="#fff" />
               </div>
            </div>
         </div>

         <div className="container-main hiden">
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
            <LinkItem
               closeModal={() => setShowModal(false)}
               content={requestData}
            />
         )}

      </div>
   )
}