
import ProductItem from "./ProductItem";

// 示例商品数据
const products = [
  {
    id: "1",
    image: "/lovable-uploads/6b1354ae-992c-42a8-ad8e-8b22057c2187.png",
    title: "MacBook Pro 2021",
    price: "¥8999",
    location: "信息学院",
    avatar: "https://i.pravatar.cc/150?img=1",
    username: "小明",
    category: "电子产品",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "高等数学课本 (第七版)",
    price: "¥45",
    location: "数学学院",
    avatar: "https://i.pravatar.cc/150?img=2",
    username: "小红",
    category: "教材书籍",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    title: "小台灯",
    price: "¥25",
    location: "宿舍区",
    avatar: "https://i.pravatar.cc/150?img=3",
    username: "小华",
    category: "日常用品",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    title: "华硕游戏笔记本",
    price: "¥4750", 
    location: "工程学院",
    avatar: "https://i.pravatar.cc/150?img=4",
    username: "小李",
    category: "电子产品",
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    title: "实木书桌",
    price: "¥320",
    location: "生活区",
    avatar: "https://i.pravatar.cc/150?img=5",
    username: "小周",
    category: "家居用品",
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    title: "iPhone 13 128GB",
    price: "¥3999",
    location: "经管学院",
    avatar: "https://i.pravatar.cc/150?img=6",
    username: "小张",
    category: "电子产品",
  },
  {
    id: "7",
    image: "https://images.unsplash.com/photo-1471506480208-91b3a4cc78be",
    title: "自行车",
    price: "¥350",
    location: "体育场附近",
    avatar: "https://i.pravatar.cc/150?img=7",
    username: "小王",
    category: "运动户外",
  },
  {
    id: "8",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    title: "咖啡杯套装",
    price: "¥65",
    location: "生活区",
    avatar: "https://i.pravatar.cc/150?img=8",
    username: "小陈",
    category: "日常用品",
  },
];

interface ProductGridProps {
  title?: string;
  showAll?: boolean;
}

const ProductGrid = ({ title = "最新闲置", showAll = true }: ProductGridProps) => {
  return (
    <div className="p-4 bg-white rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        {showAll && (
          <a href="#" className="text-sm text-primary">
            查看全部 →
          </a>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
