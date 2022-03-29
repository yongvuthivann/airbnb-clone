import React from 'react'

function Footer() {
  return (
    <div className="text-gray-166 grid grid-cols-1 gap-y-10 bg-gray-100 px-32 py-14 md:grid-cols-4">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p className="cursor-pointer hover:underline">How Airbnb works?</p>
        <p className="cursor-pointer hover:underline">Newsroom</p>
        <p className="cursor-pointer hover:underline">Investors</p>
        <p className="cursor-pointer hover:underline">Airbnb Plus</p>
        <p className="cursor-pointer hover:underline">Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p className="cursor-pointer hover:underline">Airbnb.org: disaster relief housing</p>
        <p className="cursor-pointer hover:underline">Support Afghan refugees</p>
        <p className="cursor-pointer hover:underline">Combating discrimination</p>
        <p className="cursor-pointer hover:underline">Clone site</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p className="cursor-pointer hover:underline">Clone Airbnb</p>
        <p className="cursor-pointer hover:underline">Presents</p>
        <p className="cursor-pointer hover:underline">Kirirom Institute of Technology</p>
        <p className="cursor-pointer hover:underline">Software Engineer</p>
        <p className="cursor-pointer hover:underline">Join Now</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p className="cursor-pointer hover:underline">Help Center</p>
        <p className="cursor-pointer hover:underline">Safety information</p>
        <p className="cursor-pointer hover:underline">Cancellation options</p>
        <p className="cursor-pointer hover:underline">Our COVID-19 Response</p>
        <p className="cursor-pointer hover:underline">Supporting people with disabilities</p>
        <p className="cursor-pointer hover:underline">Report a neighborhood concern</p>
      </div>

      <div></div>
    </div>
  )
}

export default Footer
