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
    const [response,setResponse] = useState<unknown|null>(null)
    const [status,setStatus] = useState<UploadStatus>(UploadStatus.FileNotLoaded)

     async function uploadImage(){

      if(image?.file){

        const controller = new AbortController();
        setTimeout(() => controller.abort(), 8_000);

        const formData = new FormData();
        formData.append('file', image.file);

        setStatus(UploadStatus.Uploading)

        const apiUrl = new URL(`${import.meta.env.VITE_API_URL}/upload`)

        try {
          const response = await fetch(apiUrl.href,{ method: 'POST' , body:formData , signal: controller.signal})
          const data = await response.json()

          setStatus(UploadStatus.Uploaded)
          setResponse(data)

        }catch (error){
          console.log(error)
          setStatus(UploadStatus.Error)
          setResponse(error)
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
        <ImageContext.Provider value={{image,uploadImage,loadImage,clearData,response, status}}>
            {children}
        </ImageContext.Provider>
    )
}

export  default ImageContextProvider;