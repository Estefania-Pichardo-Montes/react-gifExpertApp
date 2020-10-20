import { renderHook } from '@testing-library/react-hooks';
import {useFetchGift} from '../../Hooks/useFetchGifs';

describe('Pruebas en el use fetchGifts', () => {
    
    test('debe de retornar el estado iniciañ', async() => {
        const {result, waitForNextUpdate}=renderHook(()=>useFetchGift('The 100'));
        const {data, loading}=result.current;

        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
        // const {data, loading}=useFetchGift('The 100');
        // console.log(data, loading);
    });
    test('debe de retornar un arreglo de imgs y el loading en false', async() => {
        const {result, waitForNextUpdate}=renderHook(()=>useFetchGift('The 100'));
        await waitForNextUpdate();

        const {data, loading}=result.current;
        
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })
    
    
})
