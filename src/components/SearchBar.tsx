
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="w-full bg-searchbg rounded-full flex items-center px-4 py-2">
      <Search className="w-5 h-5 text-gray-400" />
      <input
        type="text"
        placeholder="搜索闲置物品..."
        className="bg-transparent border-none outline-none flex-1 ml-2 text-sm text-gray-700 placeholder:text-gray-400"
      />
    </div>
  );
};

export default SearchBar;
