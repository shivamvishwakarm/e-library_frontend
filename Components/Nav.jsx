import React from 'react'



const Link = ({href, name}) => {

    return (

        <a href={href}  className=" hover:text-blue-800 m-2">{name}</a>
    )
}

       

const Nav = () => {
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
                <Link href="/" name="Board"/>
                <Link href="/about" name="University"/>
                <Link href="/contact" name="Library"/>
                <Link href="/contact" name="Donation"/>
            </div>

        </div>
    </nav>
  )
}

export default Nav