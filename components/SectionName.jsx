const SectionName = (props) => {
  return (
    <h2 className="mx-3 hover:font-extrabold w-1/4 text-center cursor-pointer">
      <a {...props}>{props.children}</a>
    </h2>
  )
}

export default SectionName
