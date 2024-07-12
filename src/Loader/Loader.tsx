import React from 'react';

const Loader = () => {
    return (
        <div className='text-center'>
            {/* <p>Loading....</p> */}
            <img src="/loader.avif" alt="" style={{height:"100px", width:"100px"}}/>
        </div>
    );
}

export default Loader;
