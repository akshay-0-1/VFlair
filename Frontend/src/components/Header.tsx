import React, { useState } from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div 
          onClick={() => navigate('/')} 
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <Brain className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            AI Summarizer
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/contact">Contact Us</RouterLink>
          <RouterLink to="/pricing">Pricing</RouterLink>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => navigate('/login')}
            className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            Login
          </button>
          <button 
            onClick={() => navigate('/signup')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Sign Up
          </button>
        </div>

        <button 
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <RouterLink to="/" className="py-2">Home</RouterLink>
            <RouterLink to="/about" className="py-2">About</RouterLink>
            <RouterLink to="/contact" className="py-2">Contact Us</RouterLink>
            <RouterLink to="/pricing" className="py-2">Pricing</RouterLink>
            <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
              <button 
                onClick={() => {
                  navigate('/login');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full px-4 py-2 text-blue-600 hover:text-blue-700 font-medium text-left"
              >
                Login
              </button>
              <button 
                onClick={() => {
                  navigate('/signup');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}