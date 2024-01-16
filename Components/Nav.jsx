import React from 'react'
import DropdownLink from './DropdownLink'




const Link = ({ href, name }) => {

    return (

        <a href={href} className=" hover:text-blue-800 m-2">{name}</a>
    )
}






const Nav = () => {

    const examinationBoards = [
        {
          name: "CBSE",
          href: "https://cbse.nic.in/"
        },
        {
          name: "CISCE",
          href: "https://www.cisce.org/"
        },
        {
          name: "UP Board",
          href: "https://upmsp.edu.in/"
        },
        {
          name: "Maharashtra Board",
          href: "https://mahahsscboard.maharashtra.gov.in/"
        },
        {
          name: "CBSE",
          href: "https://cbse.nic.in/"
        },
        {
          name: "CISCE",
          href: "https://www.cisce.org/"
        },
        {
          name: "UP Board",
          href: "https://upmsp.edu.in/"
        },
        {
          name: "Maharashtra Board",
          href: "https://mahahsscboard.maharashtra.gov.in/"
        },
        {
          name: "CBSE",
          href: "https://cbse.nic.in/"
        },
        {
          name: "CISCE",
          href: "https://www.cisce.org/"
        },
        {
          name: "UP Board",
          href: "https://upmsp.edu.in/"
        },
        {
          name: "Maharashtra Board",
          href: "https://mahahsscboard.maharashtra.gov.in/"
        },
        // Add more boards as needed
      ];

      const universities = [
        {
          name: "IIT Delhi",
          href: "http://www.iitd.ac.in/"
        },
        {
          name: "IIT Bombay",
          href: "http://www.iitb.ac.in/"
        },
        {
          name: "IIT Madras",
          href: "https://www.iitm.ac.in/"
        },
        {
          name: "IISc Bangalore",
          href: "https://www.iisc.ac.in/"
        },
        // Add more universities as needed
      ];



    return (
        <nav className="flex flex-row justify-between mx-32		">
            <div className="">
                MADARIS
            </div>

            <div className="quick-links flex flex-col justify-center items-end ">
                {/* login link */}
                <div className="login-link mx-2">
                    <a href="/login">Log in</a>
                </div>

                {/* quick links */}
                <div className="quick-links flex flex-row">
                    <DropdownLink name="Board" links={examinationBoards} />
                    <DropdownLink name="University" links={universities} />
                    
                    <Link href="/contact" name="Library" />
                    <Link href="/contact" name="Donation" />
                </div>

            </div>
        </nav>
    )
}

export default Nav