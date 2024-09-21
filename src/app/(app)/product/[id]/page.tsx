import NotFound from "@/app/not-found";
import ProductPage from "@/components/pages/product";
import { fetchProduct } from "@/lib/data";
import Head from "next/head";

interface Props {
  params: {
    id: string;
  }
}

const page = async ({ params }: Props) => {

  const data = await fetchProduct(params.id);
  const product = data?.product;

  if (!product) return NotFound();

  return (<>
    <Head>
      <title>{product.name} - Be Bold</title>
      <meta name="description" content={`Buy ${product.name} from ${product.brand} at the best price. Check product details, stock availability, and user reviews on Be Bold.`} />
      <meta name="keywords" content={`${product.name}, ${product.brand}, buy ${product.name}, online shopping, Be Bold`} />
    </Head>

    <ProductPage product={product} />
  </>)
}

export default page;
