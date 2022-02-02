import './menu.css';
import { BsYoutube, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div className="menu">
            <a className="social" target="_blank" href="https://www.youtube.com/channel/UCyY22SogQEvKg4nJIKNnKXw">
                <BsYoutube size={24} color="#fff" />
            </a>
            <a className="social" target="_blank" href="https://www.instagram.com/gustavo.rodrigue_s/">
                <BsInstagram size={24} color="#fff" />
            </a>
            <Link className="menu-item" to="/links">
                Meus Links
            </Link>
        </div>
    )
}