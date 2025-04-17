
import { Home, MapPin, Plus, MessageCircle, User } from 'lucide-react';

const BottomNavbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16 flex justify-around items-center px-2 z-10">
      <div className="nav-item text-primary">
        <Home className="h-6 w-6" />
        <span>首页</span>
      </div>
      <div className="nav-item text-gray-500">
        <MapPin className="h-6 w-6" />
        <span>附近</span>
      </div>
      <div className="nav-item">
        <div className="post-button">
          <Plus className="h-6 w-6 text-primary" />
        </div>
        <span className="mt-1 text-primary">出闲置</span>
      </div>
      <div className="nav-item text-gray-500">
        <MessageCircle className="h-6 w-6" />
        <span>消息</span>
      </div>
      <div className="nav-item text-gray-500">
        <User className="h-6 w-6" />
        <span>主页</span>
      </div>
    </div>
  );
};

export default BottomNavbar;
