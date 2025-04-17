
import { Heart, MessageCircle, ShoppingCart } from 'lucide-react';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div className="bg-white p-4 sticky top-0 z-10 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-xl font-bold text-primary">校园闲置</h1>
        <div className="flex space-x-4">
          <Heart className="w-6 h-6 text-gray-500" />
          <MessageCircle className="w-6 h-6 text-gray-500" />
          <ShoppingCart className="w-6 h-6 text-gray-500" />
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default Header;
