import ProductCard from "@/components/product-card";
import { fetchProducts } from "@/lib/data";

const page = async () => {

  const data = await fetchProducts();
  const products = data?.products || [];

  return (
    <div className="w-fit mx-auto my-8">
      {/* <div className="grid grid-cols-3 gap-5"> */}
      <div className="flex gap-5 flex-wrap justify-center">

        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      
      </div>
    </div>
  )
}

export default page;
