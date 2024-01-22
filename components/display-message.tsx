import { useState } from "react";

const DisplayMessage = ({ isSuccess, message, isVisible}) => {

    const messageType = isSuccess ? 'success' : 'error';

    return (
        <>
        {isVisible && (
            <div className="">
                <p>{message}</p>
            </div>
        )}
        </>
    )

}

export default DisplayMessage;