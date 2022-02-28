const SectionContainer = (props) => {
  return (
    <div className="flex flex-row justify-evenly items-center w-1/2">
      {props.children}
    </div>
  )
}

export default SectionContainer
