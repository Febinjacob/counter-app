import React, { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'

function Counter() {
    //state creation
    const [Counter,setCounter]=useState(0)//Apply 0 as initial state value 
    //function counter
    function incrementCounter(){
        //Increment by 1
        setCounter(Counter+1)
    }
    //function Decrement
    function decrementCounter(){
        if(Counter > 0) {
            setCounter(Counter - 1);
        }
    }
    //fuction Rset
    function resetCounter(){
        setCounter(0)
    }

    return (
        <div className='m-5 p-5 d-flex justify-content-center align-items-center'>
            <div className='container m-5 p-5 border-2 border-primary shadow rounded w-50 bg-info'>
                <h1 className='text-light text-center'>Counter App</h1>
                <h1 className='text-center'>{Counter}</h1><br />
                <div className='text-center'>
                    <MDBBtn className='mx-3' onClick={incrementCounter}>Increment</MDBBtn>
                    <MDBBtn className='mx-1'color='success'  onClick={decrementCounter} >Decrement</MDBBtn>
                    <MDBBtn className='mx-3' color='danger' onClick={resetCounter} >Reset</MDBBtn>

                </div>

                <div>
                   
                </div>

            </div>

        </div>
    )
}

export default Counter