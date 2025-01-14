import Image from "next/image"
import React from "react"
import MenuNavigate from "../MenuNavigate/MenuNavigate"
import Link from "next/link"

const SecondView = () => {
  return (
    <div className="flex justify-center items-center bg-stone-900">
      <div className="flex flex-col w-[794px] h-[1098px] bg-stone-800 mt-4 rounded-lg">
        <div className="flex items-center mt-5 ml-5 justify-between">
          <Link href="/Home">
          <button className="hover:bg-stone-600 w-16 h-16 text-center text-white text-4xl bg-stone-700 rounded-full">
            &#8592;
          </button>
          </Link>
          <p className="text-white text-2xl font-bold text-center flex-grow mr-16">
            A-Bomb (HAS)
          </p>
        </div>
        <div className="flex items-center justify-center mt-6">
          <Image
            className="rounded-lg"
            src="https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg"
            alt="A-Bomb (HAS)"
            width={400}
            height={400}
          />
        </div>
        <div className="flex justify-center items-center p-8 text-white">
          <p>
            {" "}
            Rick Jones has been Hulks best bud since day one, but now hes more
            than a friend...hes a teammate! Transformed by a Gamma energy
            explosion, A-Bombs thick, armored skin is just as strong and
            powerful as it is blue. And when he curls into action, he uses it
            like a giant bowling ball of destruction!
          </p>
        </div>
        <div className="">
          <MenuNavigate />
        </div>
      </div>
    </div>
  )
}

export default SecondView
