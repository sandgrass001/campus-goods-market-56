
import { ArrowLeft, Image, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast"; // Corrected import path for shadcn toast

const PostItem = () => {
  const navigate = useNavigate();

  const handlePublish = () => {
    toast({
      title: "发布成功",
      description: "您的闲置物品已成功发布！",
    });
    // Add actual publish logic here
    console.log("立即发布 clicked");
  };

  const handleSaveDraft = () => {
    toast({
      title: "已保存到草稿箱",
      description: "您的闲置物品已保存为草稿。",
    });
    // Add actual save draft logic here
    console.log("保存草稿 clicked");
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-16">
      {/* Header */}
      <div className="bg-white p-4 flex items-center justify-between">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-semibold">发布闲置</h1>
        <div className="w-6"></div> {/* Empty div for alignment */}
      </div>

      <div className="container mx-auto p-4 max-w-md">
        <div className="bg-white rounded-lg p-4 mb-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-4 flex flex-col items-center justify-center bg-gray-50">
            <Image className="h-12 w-12 text-gray-400 mb-2" />
            <p className="text-gray-500">添加优质首图更吸引人</p>
            {/* Removed: <p className="text-gray-400 text-xs">最多可上传9张图片</p> */}
          </div>

          <Input 
            placeholder="商品标题（最多30字）" 
            className="mb-4" 
          />
          
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-700">价格</span>
            <div className="flex items-center">
              <span className="text-gray-700 mr-2">¥</span>
              <Input 
                placeholder="0.00" 
                type="number" 
                className="w-24 text-right" 
              />
            </div>
          </div>

          <div className="flex items-center mb-4">
            <MapPin className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-gray-700">交易地点：</span>
            <span className="text-primary ml-1">选择位置</span> {/* This can be made interactive later */}
          </div>

          <Textarea 
            placeholder="描述一下你的商品吧（品牌型号、入手渠道、使用感受等）" 
            className="min-h-[100px]" 
          />
        </div>

        <div className="bg-white rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span>商品分类</span>
            <span className="text-primary">选择类别 &gt;</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span>购买时间</span>
            <span className="text-primary">选择时间 &gt;</span>
          </div>
          <div className="flex items-center justify-between">
            <span>新旧程度</span>
            <span className="text-primary">选择程度 &gt;</span>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 flex items-center justify-between">
        <Button variant="outline" className="w-1/3" onClick={handleSaveDraft}>保存草稿</Button>
        <Button className="w-2/3 bg-[#FFD700] text-primary hover:bg-yellowbtn/90" onClick={handlePublish}>立即发布</Button>
      </div>
    </div>
  );
};

export default PostItem;
