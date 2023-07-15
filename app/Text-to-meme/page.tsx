"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
 

export default  function TextToMeme() {

  const [image, setImage] = useState(true)
  console.log(image)

  return (
  <main className=" h-[1000px] px-5 sm:mx-15 lg:ml-[329px] xl:ml-[346px] lg:pr-12 xl:pr-16 pb-20">
    <div className="pt-16 text-center flex flex-col gap-5">
      <h1 className="text-4xl font-extrabold mb-3">Convert any text to a meme or GIF</h1>
      <p className=" text-lg font-medium">Enter any text(tweet, blogpost intro, etc.) and hit "Generate" to get relevant memes.</p>
      <div className=" w-full px-16">
        {/* input */}
        <div className=" rounded-t-lg rounded-b-lg flex">
          <input type="text" placeholder="Type something..." className=" border rounded-s-lg outline-none w-full px-3 py-2"/>
          <button className="bg-blue-500 flex items-center justify-center gap-2 text-white font-semibold px-4 rounded-e-lg"> <PenSvg /> Generate</button>
        </div>
        <div className="flex justify-between mt-2 text-[#82868d] text-sm font-medium">
          <div className="flex gap-1  items-center">
            <p onClick={() => setImage(true)} className="cursor-pointer">Images</p>
            <div onClick={() => setImage(!image)} className={` cursor-pointer w-12 h-6 bg-blue-500 rounded-full flex   items-center px-1`}>
              <div className={`w-5 h-5 rounded-full bg-white ${image ? " " : "translate-x-5"} transition-all duration-300`}></div>
            </div>
            <p onClick={() => setImage(false)} className="cursor-pointer">GIFs</p>
          </div>
          <div className="flex gap-24">
            <p className=" underline text-[#82868d] cursor-pointer">Use random text</p>
            <p>0/300</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[500px] rounded-lg border border-black border-dashed">
        <h1 className="py-24 text-[#82868d]">Meme Images here...</h1>
      </div>
    </div>
  </main>
  )
}

function PenSvg(){
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20} height={20} fill="#fff"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
  )
}

