const SectionName = (props) => {
  return (
    <h2 className="mx-3 hover:font-extrabold w-1/4 text-center cursor-pointer">
      {props.children}
    </h2>
  )
}

export default SectionName
