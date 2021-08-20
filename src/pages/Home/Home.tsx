import Banner from 'components/home/Banner';
import Blogs from 'components/home/Blogs';
import Footer from 'components/home/Footer';
import Products from 'components/home/Products';
import useAsync from 'hooks/useAsync';
import ProductService from 'services/ProductService';
// import ProductService from 'services/ProductService';

const Home = () => {
  // const [products, setProducts] = useState<IProduct[]>([]);

  // useEffect(() => {
  //   ProductService.getProducts()
  //     .then(res => setProducts(res))
  // }, [])

  const { data, isLoading } = useAsync(ProductService.getProducts)
  // console.log(data)

  return (
    <div>
      <Banner />
      <Products isLoading={isLoading} products={data} />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
