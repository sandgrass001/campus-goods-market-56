
import { Settings, Package, Heart, Edit, LogOut, ChevronRight } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import BottomNavbar from "@/components/BottomNavbar";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Header */}
      <div className="bg-[#0058A8] pt-12 pb-6 px-4 relative">
        <div className="flex justify-end">
          <Settings className="h-6 w-6 text-white" />
        </div>
        
        <div className="flex items-center mt-2">
          <Avatar className="h-20 w-20 border-4 border-white">
            <img src="https://i.pravatar.cc/150?img=1" alt="用户头像" />
          </Avatar>
          <div className="ml-4">
            <h1 className="text-xl font-bold text-white">小明</h1>
            <p className="text-white opacity-90 text-sm">信息学院 · 大三</p>
            <Button variant="outline" size="sm" className="mt-2 bg-transparent text-white border-white hover:bg-white hover:text-primary">
              <Edit className="h-3 w-3 mr-1" /> 编辑资料
            </Button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white flex justify-around py-4">
        <div className="text-center">
          <p className="text-xl font-bold">36</p>
          <p className="text-gray-500 text-sm">发布</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold">128</p>
          <p className="text-gray-500 text-sm">粉丝</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold">64</p>
          <p className="text-gray-500 text-sm">关注</p>
        </div>
      </div>

      {/* My Items */}
      <div className="bg-white mt-3 p-4">
        <h2 className="font-semibold mb-3">我的物品</h2>
        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-3 rounded-full">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <span className="mt-1 text-sm">在售</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-3 rounded-full">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <span className="mt-1 text-sm">收藏</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-3 rounded-full">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <span className="mt-1 text-sm">已卖</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-3 rounded-full">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <span className="mt-1 text-sm">已买</span>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="bg-white mt-3">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-full">
              <Settings className="h-5 w-5 text-primary" />
            </div>
            <span className="ml-3">账号设置</span>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </div>
        
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <div className="bg-red-100 p-2 rounded-full">
              <LogOut className="h-5 w-5 text-red-500" />
            </div>
            <span className="ml-3">退出登录</span>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </div>
      </div>

      <BottomNavbar />
    </div>
  );
};

export default Profile;
