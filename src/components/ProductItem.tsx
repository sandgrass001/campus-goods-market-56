
import { Avatar } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

interface ProductItemProps {
  id: string;
  image: string;
  title: string;
  price: string;
  location: string;
  avatar: string;
  username: string;
  category: string;
}

const ProductItem = ({
  id,
  image,
  title,
  price,
  location,
  avatar,
  username,
  category,
}: ProductItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-card cursor-pointer" onClick={handleClick}>
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="product-info">
        <h3 className="font-medium text-gray-800 mb-1 line-clamp-1">{title}</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="product-price">{price}</p>
            <p className="product-location">{location}</p>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-500 mb-1">{category}</span>
            <div className="flex items-center">
              <span className="text-xs text-gray-500 mr-1">{username}</span>
              <Avatar className="w-6 h-6">
                <img src={avatar} alt={username} />
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
