
import { ArrowLeft, Share2, Heart, MessageCircle } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Header */}
      <div className="bg-white p-4 flex items-center justify-between">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-semibold">商品详情</h1>
        <Share2 className="h-6 w-6" />
      </div>

      {/* Product Images */}
      <div className="bg-white">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="高等数学课本"
          className="w-full aspect-square object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="bg-white mt-2 p-4">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold">高等数学课本 (第七版)</h2>
          <span className="text-2xl font-bold text-primary">¥45</span>
        </div>
        <p className="text-itemtext mt-2">购买时间：2024年3月</p>
        <p className="text-itemtext">成色：9成新，只使用了一学期</p>
      </div>

      {/* Seller Info */}
      <div className="bg-white mt-2 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Avatar className="h-12 w-12 mr-3">
            <img src="https://i.pravatar.cc/150?img=2" alt="小红" />
          </Avatar>
          <div>
            <p className="font-medium">小红</p>
            <p className="text-sm text-itemtext">数学学院 · 已认证学生</p>
          </div>
        </div>
        <Button variant="outline" className="rounded-full">
          <MessageCircle className="h-4 w-4 mr-1" /> 联系卖家
        </Button>
      </div>

      {/* Product Description */}
      <div className="bg-white mt-2 p-4">
        <h3 className="font-semibold mb-2">商品描述</h3>
        <p className="text-gray-700">
          全新高等数学课本第七版，只用了一个学期，无笔记无划痕。现已考完不需要了，校内自提，价格可小刀。
        </p>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 flex items-center">
        <div className="flex items-center space-x-5 mr-4">
          <div className="flex flex-col items-center">
            <Heart className="h-6 w-6 text-gray-500" />
            <span className="text-xs text-gray-500">收藏</span>
          </div>
          <div className="flex flex-col items-center">
            <MessageCircle className="h-6 w-6 text-gray-500" />
            <span className="text-xs text-gray-500">留言</span>
          </div>
        </div>
        <Button className="flex-1 bg-[#0058A8]">立即购买</Button>
      </div>
    </div>
  );
};

export default ProductDetail;
