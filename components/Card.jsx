import Image from "next/image"

const Card = (props) => {
  return (
    <div>
      <div className="w-full h-full border-2 border-columbia-blue dark:bg-slate-900 p-5 rounded-md flex flex-col justify-center">
        <Image src={props.src} width={120} height={120} className="" />
      </div>
      <label className="text-xs sm:text-base font-bold dark:text-white block text-center rounded-lg w-full pt-2">
        {props.label}
      </label>
    </div>
  )
}

export default Card
