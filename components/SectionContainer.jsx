const SectionContainer = (props) => {
  return (
    <div className="hidden sm:flex sm:flex-row sm:justify-evenly sm:items-center sm:w-1/2">
      {props.children}
    </div>
  )
}

export default SectionContainer
