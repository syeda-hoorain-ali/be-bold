import ProductCard from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { fetchProducts, reviews } from '@/lib/data';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Be Bold - Shop the Latest Trends",
  description: "Discover the latest fashion, beauty products, and essentials at Be Bold. Shop top-quality products with a seamless shopping experience.",
  keywords: "online store, fashion, beauty products, shopping, Be Bold"
}

const page = async () => {

  const data = await fetchProducts();
  const products = data?.products?.slice(0, 3);

  return (<>
    <header className="text-center bg-header bg-cover bg-center bg-fixed py-24 px-5 text-white flex flex-col items-center gap-5">
      <h1 className='text-4xl font-semibold'>The New Beauty Collection</h1>
      <h4 className='text-2xl'>Discover our latest beauty collection with exclusive offers.</h4>
      <Button className=''>
        <Link href="/products" >Shop Now</Link>
      </Button>
    </header>

    {products && (
      <section className="container text-center my-12 mx-auto flex flex-col gap-5">
        <h2 className='text-3xl'>Trending Now</h2>

        <div className="overflow-x-auto overflow-y-visible py-3">

          <div className='min-w-max flex gap-5 justify-center'>
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    )}

    <section className="section-bg text-center bg-section bg-cover bg-center bg-fixed py-24 px-5 text-white flex flex-col items-center gap-5">
      <h2 className='text-3xl font-semibold'>New Collection</h2>
      <h4 className='text-2xl'>Explore the latest trends in beauty and skincare.</h4>
      <Button>
        <Link href="/products">Explore Now</Link>
      </Button>
    </section>

    <section className="container text-center my-12 mx-auto flex flex-col gap-5">
      <h2 className='text-3xl'>Customer Reviews</h2>
      <ul className="flex justify-center flex-wrap gap-5">

        {reviews.map((review, index) => (
          <li key={index}>
            <Card className='w-full'>
              <CardTitle className='text-2xl my-3'>{review.name}</CardTitle>
              <CardContent>&quot;{review.message}&quot;</CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  </>
  )
}

export default page
