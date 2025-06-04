import React from 'react';
import Link from 'next/link';

const SubFooter: React.FC = () => {
  return (
    <div className="bg-black text-gray-400 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} GoPlay. All rights reserved.</p>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <Link href="/terms-of-service" legacyBehavior>
            <a className="hover:text-white transition-colors">Terms of Service</a>
          </Link>
          <Link href="/cookie-policy" legacyBehavior>
            <a className="hover:text-white transition-colors">Cookie Policy</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
