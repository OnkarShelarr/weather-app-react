import React, { useEffect, useState } from 'react';
import Input from './Input';
import Toggle from './Toggle';
import Time from './Time';

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);



    return (
    
        <nav className="pb-10 md:pb-0">
            <div className="px-4 flex items-center justify-between h-16">


                {/* dark mode  */}
                <Toggle />

                {/* Hamburger menu for mobile */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </button>
                </div>

                {/* Links */}
                <div
                    className={`${isOpen ? 'block' : 'hidden'
                        } md:flex md:items-center space-y-2 md:space-y-0 md:space-x-4 absolute md:relative top-16 md:top-0 left-0 w-full justify-center  md:bg-transparent px-4 md:px-0`}
                >

                    <Input onClick={props.onClick}/>
                </div>

                {/* time */}
<Time/>
            </div>
        </nav>
    );
}

export default Navbar
