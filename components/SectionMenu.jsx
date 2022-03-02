const SectionMenu = (props) => {
  return (
    <div className="hidden sm:flex sm:flex-row sm:justify-evenly sm:items-center sm:w-1/3">
      {props.children}
    </div>
  )
}

export default SectionMenu
