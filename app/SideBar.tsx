"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default  function SideBar() {

  const pathname = usePathname()


    return (
      <div>
          <div className={` fixed h-full w-fit pl-5 sm:pl-6 lg:pl-12 xl:pl-16 text-left hidden lg:flex flex-col gap-8 pr-3 py-12 font-semibold overflow-scroll  z-50`}>
              <div className="flex flex-col gap-2">
                <SideBarItem bgColor={ pathname ==="/" ? '#fddde8' : ''} textColor={pathname ==="/" ? '#000' : ''} icon="/popular.svg" text="DogePound Nfts" link="/"/>
                <SideBarItem bgColor={ pathname ==="/Text-to-meme" ? '#fddde8' : ''} textColor={pathname ==="/Text-to-meme" ? '#000' : ''} icon="/pen.svg" text="Text-to-meme" link="/Text-to-meme"/>
                <SideBarItem bgColor={ pathname ==="/" ? '' : ''} textColor={pathname ==="/" ? '' : ''} icon="/star.svg" text="Meme Gallery" link="/"/>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className=" pl-5 text-base text-[#524A4E]">Account</h1>
                <div className="flex flex-col gap-2">
                    <SideBarItem bgColor={ pathname ==="/" ? '' : ''} textColor={pathname ==="/" ? '' : ''} icon="/popular.svg" text="Subscription" link="/"/>
                    <SideBarItem bgColor={ pathname ==="/" ? '' : ''} textColor={pathname ==="/" ? '' : ''} icon="/Pen.svg" text="Custom Watermark" link="/"/>
                    <SideBarItem bgColor={ pathname ==="/" ? '' : ''} textColor={pathname ==="/" ? '' : ''} icon="/star.svg" text="Profile" link="/"/>
                    <SideBarItem bgColor={ pathname ==="/" ? '' : ''} textColor={pathname ==="/" ? '' : ''} icon="/dogieHead.svg" text="Saved Memes" link="/AiMeme"/>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <SideBarItem bgColor={ pathname ==="/" ? '' : ''} textColor={pathname ==="/" ? '' : ''} icon="/star.svg" text="Upgrade to Pro" link="/"/>
                <SideBarItem bgColor={ pathname ==="/" ? '' : ''} textColor={pathname ==="/" ? '' : ''} icon="/star.svg" text="Give feedback" link="/"/>
                <SideBarItem bgColor={ pathname ==="/" ? '' : ''} textColor={pathname ==="/" ? '' : ''} icon="/star.svg" text="Give more feedback" link="/"/>
              </div>
          </div>
      </div>
    )
  }

 function SideBarItem({icon, text, link, textColor, bgColor}: {icon : string, text:string, link:string, textColor: string, bgColor: string}){
      return(
        <div style={{backgroundColor: bgColor, color: textColor}} className="flex cursor-pointer hover:bg-[#fddde8] text-[#524A4E] hover:text-[#000] p-2 rounded-lg items-center gap-2 pr-20">
          <div className="w-[20px] h-auto"><Image src={icon} width={20} height={20} alt="popular"/></div>
          <Link href={link}><h1>{text}</h1></Link>
        </div>
      )
  }
  

 
  