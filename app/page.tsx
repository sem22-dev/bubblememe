import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[1000px] flex flex-col gap-3 px-5 sm:mx-15 lg:ml-[329px] xl:ml-[346px] lg:pr-12 xl:pr-16 pb-20">
       <div className="flex mt-3 gap-4 justify-center items-center">
          {/* nft id  */}
          <div className=" flex border border-transparent focus-within:border-blue-500 rounded-s-lg rounded-e-lg ">
            <input type="number" min={0} placeholder="Enter Doge ID" className=" bg-transparent focus-within:border-transparent outline-none border w-36 px-2 py-2 rounded-s-lg" />
            <button className="bg-blue-500 text-white font-semibold rounded-e-lg px-3">Submit</button>
          </div>
          {/* nft img */}
          <div>
            <Image src={"/4083.png"} width={70} height={70} alt="doge" className=" rounded-lg"/>
          </div>
       </div>
       <div className="pl-16">
          {/* Doge meme image display here  */}
          <div className=" w-full h-[380px] border border-black rounded-lg border-dashed">
              <h1 className="text-center py-12 text-gray-400">Enter prompt and hit Generate...</h1>
          </div>
        </div>
       {/* prompt input */}
       <div className="px-24">
          <div className="  border border-transparent focus-within:border-blue-500 rounded-s-lg rounded-e-lg flex">
              <input type="text" placeholder="Type something..." className=" bg-transparent focus-within:border-transparent outline-none w-full border px-3 py-2 rounded-s-lg" />
              <button className="bg-blue-500 flex items-center justify-center gap-2 text-white font-semibold px-4 rounded-e-lg"> Generate</button>
          </div>
          <div className="flex px-24 mt-1 text-[#82868d] justify-between">
              <p className=" underline  cursor-pointer">Use random text</p>
              <p>0/300</p>
          </div>
       </div>
    </div>
  );
}
