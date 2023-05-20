import React, { useContext } from 'react';
import { ImageContext } from '../context/image-context';
import { MdOutlineClose } from 'react-icons/md';


function is40XError(response: Response) {
  return response.status >= 400 && response.status < 500;
}

export const UploadFailureModal = () => {
    const { clearData , response , aborted } = useContext(ImageContext)

    return <div className="modal failure-modal">
        <div className="header">
            <div className="icon">
                <MdOutlineClose/>
            </div>
            <h3>Uploaded Failed!</h3>
        </div>
        <div className="message-section">
            {
                aborted ? <p>Upload was aborted. Failed to get a response from the server.</p> : null
            }
            {
                is40XError(response as Response)  ?  <p>Please ensure that your file is an image and it matches criteria.</p> : <p>Something went wrong with the server. Please try again.</p>
            }
            <button className='btn' onClick={clearData}>Try again</button>
        </div>
    </div>
}
