import { useState,useEffect } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { FiSearch } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";
import {collection, onSnapshot} from "firebase/firestore"
import { db } from './config/firebase';
import { ToastContainer } from 'react-toastify';
import ContactCard from './components/ContactCard';
import Modal from './components/Modal';
import AddAndUpdateContact from './components/AddAndUpdateContact';
import useDisclouse from './hooks/useDisclouse';
import NotFoundContact from './components/NotFoundContact';


function App() {

  const {open,onOpen, setOpen} = useDisclouse()
const [contacts,setContacts] = useState([])

 

  useEffect(()=>{
      const getContacts = async ()=>{

        try {
          
          const contactsRef = collection(db,"contacts")
          // const contactsSnapshot = await getDocs(contactsRef)
// for real time data
          onSnapshot(contactsRef,(snapshot)=>{
                  const contactList = snapshot.docs.map((doc)=> {
            return{
              id:doc.id,
              ...doc.data(),
            }
          })
        setContacts(contactList)
        return contactList
          })
    

        } catch (error) {
          console.log(error)
        }
      }

      getContacts()
  },[])


const filterContacts = (e)=>{
  const value = e.target.value
  const contactsRef = collection(db,"contacts")

  onSnapshot(contactsRef,(snapshot)=>{
    const contactList = snapshot.docs.map((doc)=> {
return{
id:doc.id,
...doc.data(),
}
})


  const filteredContact = contactList.filter((ele)=> ele.name.toLowerCase().includes(value.toLowerCase()))
// dfdfdf
setContacts(filteredContact)
return contactList
})


}

  return (
    <>
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar/>
    <div className='flex gap-2'>
    <div className='flex flex-grow relative items-center'>
      <FiSearch className='text-white absolute ml-1  text-3xl '/>
        <input type="text" className='bg-transparent border border-white rounded-md h-10 flex-grow text-white pl-9' onChange={filterContacts}/>
      </div>
  
      <FaCirclePlus onClick={onOpen} className='text-5xl cursor-pointer text-white'/>
      
    </div>
    <div className='mt-4 gap-3 flex flex-col'>
      {   contacts.length <= 0 ? <NotFoundContact/> :
     contacts.map((ele)=> (
         <ContactCard key={ele.id} ele={ele}/>
        ))
      }
    </div>

    </div>

      <AddAndUpdateContact open={open} setOpen={setOpen}/>
      <ToastContainer position='bottom-center'/>
    </>


  )
}


export default App
