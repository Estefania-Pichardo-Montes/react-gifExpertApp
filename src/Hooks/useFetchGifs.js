import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifts";

//Este es un custom hook
//Funcionan como si fueran functional components

export const useFetchGift=(Category)=>{
    const [state, setstate] = useState({
            data:[],
            loading:true
     });

    useEffect(()=>{
        getGifs(Category).then(imgs=>{

            setstate({
              data:imgs,
              loading:false
          })       
        });
    },[Category])

    return state;
}