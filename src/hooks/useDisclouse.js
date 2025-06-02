
import { useState } from "react"
const useDisclouse = ()=>{


  const [open, setOpen] = useState(false)

  const onOpen =()=>{
    setOpen(true)
    
  }


    return {open ,setOpen,onOpen}
}

export default useDisclouse