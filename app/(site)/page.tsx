// "use client"
import Image from 'next/image'
import Goto from '../(component)/Goto';
import Link from 'next/link';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Kha Bootcampe FE 91',
  description: 'Khám phá bộ sưu tập giày thời trang chất lượng cao với giá cạnh tranh. Từ giày thể thao đến giày lười, tất cả các loại giày bạn cần được tìm thấy tại Shoes Store.',
  keywords: ['giày', 'shoes', 'thời trang', 'bootcamp', 'fe91'],
  authors: [{ name: 'Shoes Store Bootcamp FE 91' }],
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://yoursite.com',
    siteName: 'Shoes Store Bootcamp FE 91',
    title: 'Kha Bootcampe FE 91',
    description: 'Khám phá bộ sưu tập giày thời trang chất lượng cao với giá cạnh tranh. Từ giày thể thao đến giày lười, tất cả các loại giày bạn cần được tìm thấy tại Shoes Store.',
    images: [
      {
        url: 'https://apistore.cybersoft.edu.vn/images/van-old-school.png',
        width: 1200,
        height: 630,
        alt: 'Shoes Store Bootcamp FE 91',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kha Bootcampe FE 91',
    description: 'Khám phá bộ sưu tập giày thời trang chất lượng cao với giá cạnh tranh.',
    images: ['https://apistore.cybersoft.edu.vn/images/van-old-school.png'],
  },
}



type Props = {
  children?: React.ReactNode
}

//Lấy danh sách sản phẩm action server
const getAllProductApi = async () => {
  try {
    const res = await fetch("https://apistore.cybersoft.edu.vn/api/Product");
    const data = await res.json();
    return data.content;

  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}





const page = async (props: Props) => {
  // const router = useRouter();
  const arrProduct: any = await getAllProductApi();
  console.log("arrproduct", arrProduct)
  // const [arrProduct, setArrProduct] = useState([]);

  // const getAllProduct = async () => {
  //   try {
  //     const res = await fetch("https://apistore.cybersoft.edu.vn/api/Product");
  //     const data = await res.json();
  //     setArrProduct(data.content);
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   }
  // };

  // React.useEffect(() => {
  //   getAllProduct();
  // }, []);

  return (
    <div>
      <div className='container'>

        <h1>Home page</h1>
        {/* <Image src={'https://apistore.cybersoft.edu.vn/images/van-old-school.png'} width={500} height={500} quality={75} alt='...' style={{width:"300px" , height:"auto"}} /> */}
        <div className='row'>
          {arrProduct.map((item: any, index: number) => {
            return <div className='col-3 my-2' key={index}>
              <div className="card">
                <Image src={item.image} width={500} height={500} quality={75} alt='...' style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.price}</p>
                  <Link href={`detail/${item.id}`} className='btn btn-primary'>View detail</Link>
                </div>
              </div>
            </div>
          })
          }
        </div>

      </div>
      <Goto />
      {/* 
      <button className='btn btn-success' onClick={()=>{
        router.push("/about")
      }}>Go to about</button> */}
    </div>
  )
}

export default page