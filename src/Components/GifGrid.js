import React from 'react'
import { useFetchGift } from '../Hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ({Category}) => {

    const { data:images, loading } = useFetchGift(Category);

    return (
        <>
            <h3 className="animate__animated fadeIn">{Category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
             <div className="cardGrid">
           
                {
                    images.map((img)=>
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    )
                }
             </div>
        </>

    )
}
GifGrid.propTypes={
    Category:PropTypes.string.isRequired
}