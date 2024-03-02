import ListBlogs from '../components/ListBlog'
import ListExps from '../components/ListExps'
import ListPorto from '../components/ListPorto'
import Navigation from '../components/Navigation'

export default function Home() {
  return (
   <div className='pl-0 lg:pl-10 w-full overflow-y-auto h-[100vh]'>
    <Navigation blogs={<ListBlogs/>} exps={<ListExps/>} porto={<ListPorto/>}/>
   </div>
  );
}
