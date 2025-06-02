'use client'

import React from 'react'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { createPortal } from 'react-dom'

const Modal = ({open,setOpen,children}) => {
  return createPortal(
    <Dialog open={open} onClose={setOpen} className="relative  z-10">
    <DialogBackdrop
      transition
      className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
    />

    <div className="fixed  inset-0 z-10 w-screen  overflow-y-auto">
      <div className="flex h-screen items-center justify-center p-4 text-center sm:items-center sm:p-0">
        <DialogPanel
          transition
          className="relative  transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
        >
          <div className="bg-white border-red-700    px-10 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex  sm:items-start">
       <div className="flex justify-end mb-2 ">
       <button
              type="button"
              onClick={() => setOpen(false)}
              className=""
            >
             ❌
            </button>
       </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                
                <DialogTitle as="h3" className="text-start  font-semibold text-gray-900">
                  {children}
                </DialogTitle>
            
              </div>
            </div>
          </div>
    
        </DialogPanel>
      </div>
    </div>
  </Dialog>
  ,document.getElementById("modal-root"))
}

export default Modal
