const MobileElement = (props) => {
  return (
    <h2 className="m-3 hover:font-extrabold w-1/4 text-center cursor-pointer">
      {props.children}
    </h2>
  )
}

export default MobileElement
