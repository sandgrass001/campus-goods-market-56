import { Search } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import BottomNavbar from "@/components/BottomNavbar";

const conversations = [
  {
    id: "1",
    name: "小红",
    avatar: "https://i.pravatar.cc/150?img=2",
    lastMessage: "那本高等数学课本还在吗？",
    time: "10:30",
    unread: 2,
  },
  {
    id: "2",
    name: "小华",
    avatar: "https://i.pravatar.cc/150?img=3",
    lastMessage: "台灯我想要，可以便宜点吗？",
    time: "昨天",
    unread: 0,
  },
  {
    id: "3",
    name: "小李",
    avatar: "https://i.pravatar.cc/150?img=4",
    lastMessage: "你好，笔记本电脑还可以再议价吗？",
    time: "昨天",
    unread: 0,
  },
  {
    id: "4",
    name: "小周",
    avatar: "https://i.pravatar.cc/150?img=5",
    lastMessage: "书桌明天可以看吗？",
    time: "周二",
    unread: 0,
  },
];

const Messages = () => {
  const navigate = useNavigate();

  const handleConversationClick = (conversation: any) => {
    navigate(`/chat/${conversation.id}`, { state: { name: conversation.name, avatar: conversation.avatar } });
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-16">
      {/* Header */}
      <div className="bg-white p-4 sticky top-0 z-10">
        <div className="flex items-center mb-3 justify-center">
          <h1 className="text-lg font-semibold">消息中心</h1>
        </div>
        <div className="bg-searchbg rounded-full flex items-center px-4 py-2">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="搜索聊天记录..."
            className="bg-transparent border-none outline-none flex-1 ml-2 text-sm"
          />
        </div>
      </div>

      {/* Message List */}
      <div className="divide-y divide-gray-200">
        {conversations.map((conversation) => (
          <div 
            key={conversation.id} 
            className="p-4 bg-white flex items-center cursor-pointer hover:bg-gray-50"
            onClick={() => handleConversationClick(conversation)}
          >
            <div className="relative">
              <Avatar className="h-12 w-12">
                <img src={conversation.avatar} alt={conversation.name} />
              </Avatar>
              {conversation.unread > 0 && (
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {conversation.unread}
                </div>
              )}
            </div>
            <div className="ml-3 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{conversation.name}</h3>
                <span className="text-xs text-gray-500">{conversation.time}</span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-1">
                {conversation.lastMessage}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default Messages;
