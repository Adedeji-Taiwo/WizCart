import React from 'react'
import AdminSideBar from '../../../components/adminSideBar/AdminSideBar'
import { Pages } from './style'

const AdminDashboard = () => {
  return (
    <>
    <AdminSideBar />
    <Pages>
      <h1>Admin Dashboard page</h1>
    </Pages>
    </>
  )
}

export default AdminDashboard