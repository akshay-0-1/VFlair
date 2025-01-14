import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children }: LinkProps) {
  return (
    <RouterLink 
      to={href}
      className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
    >
      {children}
    </RouterLink>
  );
}