
const categories = [
  { id: 'all', name: '全部商品' },
  { id: 'books', name: '教材书籍' },
  { id: 'electronics', name: '电子产品' },
  { id: 'furniture', name: '家居用品' },
  { id: 'daily', name: '日常用品' },
  { id: 'clothes', name: '服装鞋帽' },
  { id: 'stationery', name: '文具礼品' },
  { id: 'sports', name: '运动户外' },
  { id: 'other', name: '其他分类' },
];

const CategoryMenu = () => {
  return (
    <div className="w-full overflow-x-auto py-2 px-4 bg-white">
      <div className="flex space-x-4 min-w-max">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap ${
              category.id === 'all' 
                ? 'bg-gray-700 text-white' 
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
