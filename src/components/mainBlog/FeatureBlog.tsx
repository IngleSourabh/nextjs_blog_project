import React from "react";
import Image from "next/image";
import Link from 'next/link';
import style from "./featureBlog.module.css";

interface prop {
  bg_classname: any;
  cartData:any;
}

const FeatureBlog = (props: prop) => {
   const classname:any=props.bg_classname?props.bg_classname:'';
   console.log(classname,"classname");
  return (
    <>
      {props.cartData.map((data: any, i: number) => {
        return (
          <div key={i} className={`${style.classname}`} >
            {/* <div className={`${style['featureBlog_img']} `}>
              <Image src={data.blog_img} alt={data.blog_img_alt} className={style.blog_image} fill/>
            </div> */}
            <div className={style.featureBlog_cart}>
              <h2 className={style.featureBlog_cart_title}>
                {data.blog_title}
              </h2>
              <p className={style.featureBlog_cart_desc}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci animi delectus vero quisquam quia. Eveniet reiciendis
                illum cum repellendus dignissimos.
              </p>
              <Link className={style.Cp_button} href="#">Read more</Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FeatureBlog;
