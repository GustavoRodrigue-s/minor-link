import { FiLink, FiArrowDown } from 'react-icons/fi';
import './home.css';

import Menu from '../../components/Menu';

export default function Home() {
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
                    />
                </div>
                <div>
                    <button>Gerar Link</button>
                </div>
            </div>

            <Menu />

        </div>
    )
}