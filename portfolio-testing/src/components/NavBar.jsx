import { useState } from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    'Home',
    'About',
    'Skills',
    'Projects',
    'Feats',
    'Contact'
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mb-50 ">
      <nav className="mx-4 md:mx-10 my-4">
        <div className="flex bg-gradient-to-l from-slate-900 via-gray-900 to-slate-900 justify-between items-center p-6 rounded-2xl max-w-[700px] mx-auto">
          <h1 className="font-bold text-2xl text-white">
            NK<span className="text-[#ff4a23]">@</span>
          </h1>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-semibold text-[16px] text-white">
            {menuItems.map((item) => (
              <li key={item} className="cursor-pointer hover:text-[#ff4a23] transition-colors">
                {item}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative z-50" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
              <div className={`w-6 h-1 mb-1 bg-white rounded-sm transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-1'
              }`} />
              <div className={`w-6 h-1 bg-white rounded-md my-1 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <div className={`w-6 h-1 mt-1 bg-white rounded-md transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : '-translate-y-1'
              }`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
          <div className={`absolute top-20 left-1/2 -translate-x-1/2 w-[280px] bg-gray-800 rounded-lg shadow-lg transition-all duration-300 ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}>
            <ul className="py-8 flex flex-col items-center gap-6 text-white font-semibold">
              {menuItems.map((item, index) => (
                <li 
                  key={item} 
                  className={`cursor-pointer hover:text-[#ff4a23] transition-colors w-full text-center ${   
                    index === menuItems.length - 1 ? 'border-t border-gray-700 pt-6' : ''
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;