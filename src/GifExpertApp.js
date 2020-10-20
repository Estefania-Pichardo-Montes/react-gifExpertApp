import React, {useState} from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = ({defaultCategories=[]}) => {


    // const [categorias, setCategorias] = useState(['The 100']);
    const [categorias, setCategorias] = useState(defaultCategories);

    return (
        <div>
               <h2>GifExpertApp</h2>         
               <AddCategory setCategorias={setCategorias}></AddCategory>
               <hr/>

               <ol>
                  {
                      categorias.map(category=>(

                        <GifGrid 
                            key={category}
                            Category={category}>

                        </GifGrid>
                      ))
                  }
               </ol>
        </div>

    )
}
