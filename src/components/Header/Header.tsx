import { useEffect, useRef, useState } from 'react';
import './Header.less'
import { GrContact } from 'react-icons/gr'
import { ContactEnum } from '../../models/enum/whats';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (
      menuRef.current &&
      !menuRef.current.contains(target) &&
      !target.classList.contains('header-menu')
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open(ContactEnum.whats, '_blank');
  };

  return (
    <div className='header-container'>
      <header className={`${isScrolled ? 'sticky' : 'header-top'}`}>
        <div className='header-wrapper'>
          <div className='header-logo'>
            <span>Guila</span>
            <span>Tech</span>
          </div>
          <div className='header-contact'>
            <div className='header-contact-button'>
              <button onClick={handleWhatsAppClick}>Entrar em contato</button>
            </div>
            <div className='header-contact-icon'>
              <GrContact size={25} color="#fff" />
            </div>
          </div>
        </div>
 <div className='header-row'></div>
      </header>
     
    </div>
  )
}

export default Header
