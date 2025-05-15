
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Send } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import BottomNavbar from '@/components/BottomNavbar';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

// Sample conversation data (you'd fetch this in a real app)
const sampleConversations: { [key: string]: any } = {
  "1": {
    name: "小红",
    avatar: "https://i.pravatar.cc/150?img=2",
    messages: [
      { id: "m1", sender: "小红", text: "那本高等数学课本还在吗？", time: "10:30", self: false },
      { id: "m2", sender: "Me", text: "在的，你要吗？", time: "10:31", self: true },
      { id: "m3", sender: "小红", text: "太好了！我下午去拿可以吗？", time: "10:32", self: false },
    ],
  },
  "2": {
    name: "小华",
    avatar: "https://i.pravatar.cc/150?img=3",
    messages: [
      { id: "m1", sender: "小华", text: "台灯我想要，可以便宜点吗？", time: "昨天", self: false },
      { id: "m2", sender: "Me", text: "最低20元，不能再少了。", time: "昨天", self: true },
    ],
  },
  "3": {
    name: "小李",
    avatar: "https://i.pravatar.cc/150?img=4",
    messages: [
      { id: "m1", sender: "小李", text: "你好，笔记本电脑还可以再议价吗？", time: "昨天", self: false },
    ],
  },
  "4": {
    name: "小周",
    avatar: "https://i.pravatar.cc/150?img=5",
    messages: [
      { id: "m1", sender: "小周", text: "书桌明天可以看吗？", time: "周二", self: false },
    ],
  },
};


const ChatDetail = () => {
  const navigate = useNavigate();
  const { chatId } = useParams<{ chatId: string }>();
  const location = useLocation();
  // Attempt to get conversation details from location state or fallback to chatId
  const contactName = location.state?.name || sampleConversations[chatId || ""]?.name || "用户";
  const contactAvatar = location.state?.avatar || sampleConversations[chatId || ""]?.avatar || "https://i.pravatar.cc/150";

  const [messages, setMessages] = useState(sampleConversations[chatId || ""]?.messages || []);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    const newMsg = {
      id: `m${messages.length + 1}`,
      sender: 'Me',
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      self: true,
    };
    // @ts-ignore
    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white p-4 flex items-center sticky top-0 z-10 border-b">
        <button onClick={() => navigate('/messages')}>
          <ArrowLeft className="h-6 w-6" />
        </button>
        <Avatar className="h-10 w-10 ml-3 mr-3">
          <img src={contactAvatar} alt={contactName} />
        </Avatar>
        <h1 className="text-lg font-semibold">{contactName}</h1>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 mb-16"> {/* Added mb-16 for BottomNavbar */}
        {messages.map((msg: any) => (
          <div key={msg.id} className={`flex ${msg.self ? 'justify-end' : 'justify-start'}`}>
            {!msg.self && (
              <Avatar className="h-8 w-8 mr-2 flex-shrink-0">
                <img src={contactAvatar} alt={contactName} />
              </Avatar>
            )}
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                msg.self ? 'bg-primary text-primary-foreground' : 'bg-white text-gray-800'
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <p className={`text-xs mt-1 ${msg.self ? 'text-blue-200' : 'text-gray-400'} text-right`}>{msg.time}</p>
            </div>
            {msg.self && (
              <Avatar className="h-8 w-8 ml-2 flex-shrink-0">
                {/* Placeholder for self avatar, or remove if not needed */}
                <img src="https://i.pravatar.cc/150?img=1" alt="Me" />
              </Avatar>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white p-3 border-t fixed bottom-16 left-0 right-0 z-10 flex items-center">
        <Input
          type="text"
          placeholder="输入消息..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          className="flex-1 mr-2"
        />
        <Button onClick={handleSendMessage} className="bg-[#0058A8]">
          <Send className="h-5 w-5" />
        </Button>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default ChatDetail;
