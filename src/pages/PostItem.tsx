import React, { useState } from 'react';
import { Camera, ChevronDown, X, Calendar as CalendarIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import BottomNavbar from '@/components/BottomNavbar';
import { useNavigate } from 'react-router-dom';


const PostItem = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [condition, setCondition] = useState('');
  const [purchaseDate, setPurchaseDate] = useState<Date | undefined>(undefined);
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setImages((prevImages) => [...prevImages, ...filesArray].slice(0, 5)); // Limit to 5 images

      const previewsArray = filesArray.map((file) => URL.createObjectURL(file));
      setImagePreviews((prevPreviews) => [...prevPreviews, ...previewsArray].slice(0, 5));
    }
  };

  const removeImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setImagePreviews((prevPreviews) => {
      const newPreviews = prevPreviews.filter((_, i) => i !== index);
      // Revoke object URL to prevent memory leaks
      URL.revokeObjectURL(prevPreviews[index]);
      return newPreviews;
    });
  };

  const handleSubmit = () => {
    console.log({ title, description, price, category, condition, purchaseDate: purchaseDate ? format(purchaseDate, "PPP") : null, images });
    // Add submission logic here
    // Potentially navigate away or show a success message
  };


  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      {/* Header */}
      <div className="bg-white p-4 flex items-center justify-center sticky top-0 z-10 border-b">
        <h1 className="text-lg font-semibold">发布闲置</h1>
      </div>

      <div className="p-4 space-y-6">
        {/* Title Input */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">标题</label>
          <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="给你的宝贝取个响亮的名字吧" />
        </div>

        {/* Description Textarea */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">描述</label>
          <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="详细描述一下你的宝贝，例如品牌、型号、购买渠道等" />
        </div>

        {/* Price Input */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">价格</label>
            <Input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="¥0.00" />
          </div>
        {/* Category Select */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">分类</label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="选择分类" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="electronics">电子产品</SelectItem>
                <SelectItem value="books">教材书籍</SelectItem>
                <SelectItem value="furniture">家居用品</SelectItem>
                <SelectItem value="clothing">服饰鞋包</SelectItem>
                <SelectItem value="others">其他</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Condition Select & Purchase Date */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-1">新旧程度</label>
            <Select value={condition} onValueChange={setCondition}>
              <SelectTrigger>
                <SelectValue placeholder="选择新旧程度" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="brand_new">全新</SelectItem>
                <SelectItem value="like_new">9成新</SelectItem>
                <SelectItem value="good">8成新</SelectItem>
                <SelectItem value="fair">7成新及以下</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="purchaseDate" className="block text-sm font-medium text-gray-700 mb-1">购买时间</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={`w-full justify-start text-left font-normal ${!purchaseDate && "text-muted-foreground"}`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {purchaseDate ? format(purchaseDate, "PPP") : <span>选择日期</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={purchaseDate}
                  onSelect={setPurchaseDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">上传图片 (最多5张)</label>
          <div className="mt-2 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Camera className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                >
                  <span>点击上传</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple accept="image/*" onChange={handleImageUpload} />
                </label>
                <p className="pl-1">或拖拽到此处</p>
              </div>
              <p className="text-xs text-gray-500">支持PNG, JPG, GIF等格式</p>
            </div>
          </div>
          {imagePreviews.length > 0 && (
            <div className="mt-4 grid grid-cols-3 gap-4">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="relative group">
                  <img src={preview} alt={`preview ${index}`} className="h-24 w-full object-cover rounded-md" />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-1 right-1 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => removeImage(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>


        {/* Submit Button */}
        <Button onClick={handleSubmit} size="lg" className="w-full bg-[#0058A8] hover:bg-[#004c8f]">
          确认发布
        </Button>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default PostItem;
