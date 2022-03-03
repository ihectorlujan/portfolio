const ContactCard = (props) => {
  return (
    <div className="bg-columbia-blue dark:bg-slate-800 dark:text-black flex flex-col justify-end items-center relative pb-4 h-2/3 rounded-xl">
      <button className="bg-white w-2/3 rounded-md border border-columbia-blue p-1 flex flex-row justify-evenly">
        {props.icon} {props.children}
      </button>
    </div>
  )
}

export default ContactCard
