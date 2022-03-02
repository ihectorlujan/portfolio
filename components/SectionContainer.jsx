const SectionContainer = (props) => {
  return (
    <div className="p-5 lg:p-10 lg:px-20 h-full flex flex-col justify-center items-start">
      {props.children}
    </div>
  )
}

export default SectionContainer
