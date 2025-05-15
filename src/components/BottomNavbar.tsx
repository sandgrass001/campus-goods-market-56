
import { Home, MapPin, Plus, MessageCircle, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BottomNavbar = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16 flex justify-around items-center px-2 z-10">
      <button onClick={() => handleNavigate('/')} className="nav-item text-primary">
        <Home className="h-6 w-6" />
        <span>首页</span>
      </button>
      <button onClick={() => handleNavigate('/nearby')} className="nav-item text-gray-500"> {/* Assuming /nearby for 附近 */}
        <MapPin className="h-6 w-6" />
        <span>附近</span>
      </button>
      <button onClick={() => handleNavigate('/post')} className="nav-item">
        <div className="post-button">
          <Plus className="h-6 w-6 text-primary" />
        </div>
        <span className="mt-1 text-primary">出闲置</span>
      </button>
      <button onClick={() => handleNavigate('/messages')} className="nav-item text-gray-500">
        <MessageCircle className="h-6 w-6" />
        <span>消息</span>
      </button>
      <button onClick={() => handleNavigate('/profile')} className="nav-item text-gray-500">
        <User className="h-6 w-6" />
        <span>主页</span>
      </button>
    </div>
  );
};

export default BottomNavbar;
