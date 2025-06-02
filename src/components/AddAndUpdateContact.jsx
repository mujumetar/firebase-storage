import React from 'react'

import Modal from './Modal'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import {addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import { toast } from 'react-toastify'
import * as Yup from "Yup"


const ContactValidation = Yup.object().shape({
    name:Yup.string().required("Name is Required"),
    email:Yup.string().email("Invalid").required("Email is Required")
})
const AddAndUpdateContact = ({open,setOpen,isUpdate,ele}) => {

    const addContact =async (contact)=>{
        try {
            const contactRef = collection(db,"contacts");
            await addDoc(contactRef,contact)
               toast.success("Contact Added Successfully")
            setOpen(false)

        } catch (error) {
            console.log(error)
        }
    }
    const updateContact =async (contact,id)=>{
        try {
            const contactRef = doc(db,"contacts",id);
            await updateDoc(contactRef,contact)
               toast.success("Contact Updated Successfully")
            setOpen(false)
        
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
    <Modal open={open} setOpen={setOpen} >

        <Formik validationSchema={ContactValidation}
        initialValues={
            isUpdate?{
            name:ele.name,
            email:ele.email
        }:
        {
            name:"",
            email:""
        }
    }
        onSubmit={(val)=> {
            
            isUpdate ?
            updateContact(val,ele.id)
            :
            addContact(val)
             console.log(val)
            
            }}
        >
            <Form className='flex flex-col gap-3'>
               <div className='flex flex-col gap-1'>
               <label htmlFor="name">Name</label>
               <Field name="name" className="border h-10 "/>
               <div className='text-red-500 text-xs'>
                <ErrorMessage name="name" />
               </div>
               </div>
               <div className='flex flex-col gap-1'>
               <label htmlFor="email">Email</label>
               <Field name="email" className="border h-10 "/>
               <div className='text-red-500 text-xs'>
                <ErrorMessage name="email" />
               </div>
               </div>

               <button className='bg-orange-500 rounded-xl px-3 py-1.5 self-end border'>{isUpdate ? "Update" : "Add Contact"}</button>
            </Form>
        </Formik>
    </Modal>
      
    </div>
  )
}

export default AddAndUpdateContact
