import React, { useEffect } from 'react'

function AdminPanel() {
  useEffect(() => {
    window.location.assign(
      'https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/r/maximo/trip-n-taxi/login?session=102507406698753'
    )
  }, [])
  return (
    <div className='py-5 my-5' style={{ height: '30vw' }}>
      <h1>Redirecting...</h1>
    </div>
  )
}

export default AdminPanel
