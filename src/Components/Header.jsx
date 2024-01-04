import React from 'react'

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
    return (
        <div>
            <MDBNavbar light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'className='text-primary'>
                        <img
                            src='https://rlh.wfu.edu/files/2022/05/ezgif.com-gif-maker.gif'
                            height='40'
                            alt=''
                            loading='lazy'
                        />
                         Counter App
                    </MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default Header