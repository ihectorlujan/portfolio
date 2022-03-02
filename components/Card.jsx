const Card = (props) => {
  return (
    <div className="w-full h-full bg-antique-white dark:bg-slate-900 p-5 rounded-md flex flex-col justify-between">
      <img src={props.src} width={120} height={120} className="pb-2" />
      <label className="text-xs sm:text-base font-bold dark:text-white block text-center rounded-lg w-full">
        {props.label}
      </label>
    </div>
  )
}

export default Card
