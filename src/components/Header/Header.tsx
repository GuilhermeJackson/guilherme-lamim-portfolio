import { useEffect, useRef, useState } from 'react';
import './Header.less'

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


  return (
    <div className='header-container'>
      <header className={`${isScrolled ? 'sticky' : 'header-top'}`}>
        <div className='header-wrapper'>
          <div className='header-logo'>
            <span>Guilherme</span>
            <span>Lamim</span>
          </div>
          <div className='header-contact'>
            <div className='header-list-part'>
              <div className='header-part-item'>
              </div>
            </div>
          </div>
        </div>
        <div className='header-row'></div>
      </header>

    </div>
  )
}

export default Header
