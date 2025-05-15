import React, { useState } from "react";
import { ArrowLeft, Image, MapPin, Calendar as CalendarIcon, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const categoryOptions = [
  { value: "electronics", label: "电子产品" },
  { value: "books", label: "教材书籍" },
  { value: "furniture", label: "家居用品" },
  { value: "daily", label: "日常用品" },
  { value: "clothes", label: "服装鞋帽" },
  { value: "stationery", label: "文具礼品" },
  { value: "sports", label: "运动户外" },
  { value: "other", label: "其他分类" },
];

const conditionOptions = [
  { value: "brand_new", label: "全新" },
  { value: "like_new", label: "几乎全新" },
  { value: "gently_used", label: "轻微使用痕迹" },
  { value: "used", label: "明显使用痕迹" },
];

const PostItem = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  const [purchaseDate, setPurchaseDate] = useState<Date | undefined>();
  const [selectedCondition, setSelectedCondition] = useState<string | undefined>();

  const handlePublish = () => {
    toast({
      title: "发布成功",
      description: "您的闲置物品已成功发布！",
    });
    console.log("立即发布 clicked");
    // Log selected values for debugging
    console.log("Selected Category:", selectedCategory);
    console.log("Purchase Date:", purchaseDate ? format(purchaseDate, "yyyy-MM-dd") : "Not selected");
    console.log("Selected Condition:", selectedCondition);
  };

  const handleSaveDraft = () => {
    toast({
      title: "已保存到草稿箱",
      description: "您的闲置物品已保存为草稿。",
    });
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
          {/* 商品分类 */}
          <div className="flex items-center justify-between mb-2">
            <span>商品分类</span>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px] text-primary justify-end pr-2">
                <SelectValue placeholder="选择类别" />
                <ChevronDown className="h-4 w-4 opacity-50 ml-1" />
              </SelectTrigger>
              <SelectContent>
                {categoryOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* 购买时间 */}
          <div className="flex items-center justify-between mb-2">
            <span>购买时间</span>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[180px] justify-end text-left font-normal text-primary pr-2",
                    !purchaseDate && "text-muted-foreground"
                  )}
                >
                  {purchaseDate ? (
                    format(purchaseDate, "yyyy-MM-dd")
                  ) : (
                    <span>选择时间</span>
                  )}
                  <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 pointer-events-auto" align="end">
                <Calendar
                  mode="single"
                  selected={purchaseDate}
                  onSelect={setPurchaseDate}
                  initialFocus
                  disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* 新旧程度 */}
          <div className="flex items-center justify-between">
            <span>新旧程度</span>
            <Select value={selectedCondition} onValueChange={setSelectedCondition}>
              <SelectTrigger className="w-[180px] text-primary justify-end pr-2">
                <SelectValue placeholder="选择程度" />
                <ChevronDown className="h-4 w-4 opacity-50 ml-1" />
              </SelectTrigger>
              <SelectContent>
                {conditionOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
