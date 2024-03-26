import Experimenate from "@/components/Experimenate/Experimenate";
import FeatureBlog from "@/components/mainBlog/FeatureBlog";
import Feature_blogData from "@/components/mainBlog/Feature_blogData";
import './globals.css';
import {lusitana}  from './ui/font';

export default function Home() {

  
  return (
    <main className="container">

      <h1 className={lusitana.className}>Hello World</h1>
      <FeatureBlog  
       bg_classname="feature_blog"
       cartData={Feature_blogData()}
       />

<div
  className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
></div>

  <Experimenate />
  
    </main>
  );
}
