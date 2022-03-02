const Card = (props) => {
  return (
    <div className="bg-antique-white dark:bg-slate-900 p-5 rounded-md">
      <img src={props.src} width={120} height={120} className="pb-4" />
      <label className="dark:text-white block text-center">{props.label}</label>
    </div>
  )
}

export default Card
