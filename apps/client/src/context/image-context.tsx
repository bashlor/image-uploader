import React, { useState } from 'react';
import { ImageContextInterface, ImageResource } from '../@types/@types.image';
import { UploadStatus } from '../@types/@types.image';

interface Props {
    children: React.ReactNode;
}


//@ts-expect-error dont know how to type this
export const ImageContext = React.createContext<ImageContextInterface>({});



const ImageContextProvider: React.FC<Props> = ({ children }) => {
    const [image,setImage] = useState<ImageResource | null>(null);
    const [response,setResponse] = useState<Response|null>(null)
    const [status,setStatus] = useState<UploadStatus>(UploadStatus.FileNotLoaded)
    const [aborted,setAborted] = useState<boolean>(false)

     async function uploadImage(){

      if(image?.file){

        const formData = new FormData();
        formData.append('file', image.file);

        setStatus(UploadStatus.Uploading)

        const apiUrl = new URL(`${import.meta.env.VITE_API_URL}/upload`)

        try {
          const responseFromFetch = await fetch(apiUrl.href,{ method: 'POST' , body:formData , signal: AbortSignal.timeout(8000)})
          const data = await responseFromFetch.json()

          if(responseFromFetch.status !== 201){
            setStatus(UploadStatus.Error)
            setResponse(responseFromFetch)
            return;
          }

          setResponse(data)
          setStatus(UploadStatus.Uploaded)

        }catch (error:any){
          if(error.name === 'AbortError'){
            setAborted(true)
          }

          setStatus(UploadStatus.Error)
        }
      }

    }

    function loadImage(image:ImageResource){
        setImage(image);
        setStatus(UploadStatus.ReadyToBeUploaded)
    }

    function clearData(){
        setStatus(UploadStatus.FileNotLoaded)
        setImage(null);
        setResponse(null)
    }
    
    return(
        <ImageContext.Provider value={{image,uploadImage,loadImage,clearData,response, aborted, status}}>
            {children}
        </ImageContext.Provider>
    )
}

export  default ImageContextProvider;