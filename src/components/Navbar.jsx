import React from 'react'

const Navbar = () => {
    return (
        <nav className='shadow-sm '>
            <div className="container">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className='text-xl font-bold'>Sama Car</h1>
                    </div>
                    <div >
                        <ul className='flex items-center gap-6'>
                            <li>
                                <a className='inline-block py-4' href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
