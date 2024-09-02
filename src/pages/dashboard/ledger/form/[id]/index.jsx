import { useRouter } from 'next/router';
import React from 'react'

function EditForm() {
    const router = useRouter()
    const id = router.query.id;
  return (
    <div>EditForm {id}</div>
  )
}

export default EditForm