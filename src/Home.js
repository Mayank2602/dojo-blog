
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');
    return (   
        <div className='home'>
            {error&&<div> {error}</div>}
            {isPending&& <div>Loading.......</div>}
            {blogs&&<BlogList blogs={blogs} />}
        </div>
        
        
    );
}
 
export default Home;
// useEffect(()=>{
//     setTimeout(()=>{
//       fetch('http://localhost:8000/blogs')
//       .then(res=>{
//           return res.json();
//       }).then(data=>{
//           setIsPending(false);
//           setBlogs(data);
//       },1000);
//     })
// },[])

// useEffect(() => {
//     setTimeout(() => {
//       fetch('http://localhost:8000/blogs')
//       .then(res => {
//         return res.json();
//       })
//       .then(data => {
//         setIsPending(false);
//         setBlogs(data);
//       })
//     }, 1000);
//   }, []);