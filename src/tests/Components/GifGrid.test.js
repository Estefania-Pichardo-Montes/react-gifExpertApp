import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../Components/GifGrid';
import { useFetchGift } from '../../Hooks/useFetchGifs';
import '@testing-library/jest-dom';
jest.mock('../../Hooks/useFetchGifs') //Finje la llamada a este archivo para controlar la informacion que va a responder

describe('Pruebas en el gifGrid', () => {

    const category='Green Arrow';

    test('Debe hacer match con el snapshot', () => {
       useFetchGift.mockReturnValue({
           data:[],
           loading:true
       });

        const wrapper=shallow(<GifGrid Category={category}/>); 
       expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar items cuando se cargan imagenes  useFetchGifts', () => {
       const gifs=[{
           id:'ABC',
           url:'https://localhost/cualquier/cosa.jpg',
           title:'Cualquier cosa'
       },
       {
        id:'ABC',
        url:'https://localhost/cualquier/cosa.jpg',
        title:'Cualquier cosa'
       }
    
        ];

       useFetchGift.mockReturnValue({
            data:gifs,
            loading:false
        });

        const wrapper=shallow(<GifGrid Category={category}/>); 

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
    
    
})
