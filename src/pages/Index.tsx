
import Header from "@/components/Header";
import CategoryMenu from "@/components/CategoryMenu";
import ProductGrid from "@/components/ProductGrid";
import BottomNavbar from "@/components/BottomNavbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#A0C8E0] pb-20">
      <Header />
      <div className="container mx-auto max-w-lg">
        <CategoryMenu />
        <div className="mt-4">
          <ProductGrid />
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Index;
