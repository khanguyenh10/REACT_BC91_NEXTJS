// "use client"
import Image from 'next/image'
import Goto from '../(component)/Goto';
import Link from 'next/link';
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