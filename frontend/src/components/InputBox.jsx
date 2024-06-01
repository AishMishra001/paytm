function InputBox({label , placeholder}) {
  return (
    <div className="w-full">
      <div className="m-2 text-xl font-bold tracking-tighter">{label}</div>
       <input type="type" className="border-gray-200 border-2 py-2 pl-2 pr-28 rounded-md w-full" placeholder= {placeholder} />
    </div>  
  )
}

export default InputBox