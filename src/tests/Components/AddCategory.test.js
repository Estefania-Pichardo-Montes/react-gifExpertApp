import React from 'react';
import {shallow} from 'enzyme';
import { AddCategory } from '../../Components/AddCategory';
import '@testing-library/jest-dom';

describe('Pruebas en AddCategory', () => {

    
    const setCategories=jest.fn();
    let wrapper=shallow(<AddCategory setCategorias={setCategories}/>);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper=shallow(<AddCategory setCategorias={setCategories}/>);

    });

    test('debe mostrarse Correctamente', () => {
      
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de cambiar la caja de texto', () => {
        
        const input=wrapper.find('input');
        const value='Hola Mundo';

        input.simulate('change',{target:{value}});
        expect(wrapper.find('p').text().trim()).toBe(value);   
    });

    test('No debe de postear la informacion onSubmit', () => {
        
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe de llamar el ser categories y limpiar la caja de texto', () => {
        //1.-Simular el inputChange
        const value='Hola Mundo';
        wrapper.find('input').simulate('change',{target:{value}});

        //2.-Simular el submit
        wrapper.find('form').simulate('submit',{preventDefault(){}});

        //3.-Set categories debe de haberse llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));


        //4.-El valor del input debe estar ''
        expect(wrapper.find('input').prop('value')).toBe('');
    })
    
    
    
    
})
