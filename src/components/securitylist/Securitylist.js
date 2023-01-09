import React from 'react'

const Securitylist = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-24 space-y-4'>
        <h1>Having a proper security for your hosting is one of the main components.</h1>
        <p className='bg-indigo-500 text-white'>Thats why you can always choose HexaHost, because we offer 24/7 security for all of your hosts.</p>
      </div>
      <div className='text-center pt-8'>
          <h1 className='text-4xl'>How We do Security Checklist for Web Hosting Server?</h1>
          <ul className='text-2xl p-8 space-y-8'>
            <li>1. Avoid DDos Assaults</li>
            <li>2. Protection Against Brute Force Attacks</li>
            <li>3. Shield Against XSS Cross-Site Scripting</li>
            <li>4. Prevent SQL Injections</li>
            <li>5. Backup Your Data</li>
            <li>6. Secure an SSL Certificate</li>
            <li>7. Prevent spam</li>
            <li>8. ISO 27018 Compliance</li>
          </ul>
      </div>
    </div>
  )
}

export default Securitylist
