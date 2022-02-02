import './link-item.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FiCopy, FiX } from 'react-icons/fi';

export default function LinkItem({ closeModal, content }) {
    return (
        <div className="container-modal">
            
            <div className="modal-header">
                <div>
                    <h2>Link Encurtado</h2>
                </div>
                <div>
                    <button onClick={closeModal} >
                        <FiX size={28} color="#000" />
                    </button>
                </div>
            </div>

            <span>
                {content.long_url}
            </span>

            <CopyToClipboard text={content.link}>
                <button
                    className="modal-link"
                    onClick={() => alert('Url copiada com sucesso!')}
                >
                    {content.link}
                    <FiCopy size={20} color='#fff' />
                </button>
            </CopyToClipboard>
            
        </div>
    )
}