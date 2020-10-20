import {getGifs} from '../../helpers/getGifts';

describe('Pruebas con getGifs Fetch', () => {
    test('debe tener 10 elementos ', async() => {
        const gifs=await getGifs('Green Arrow');
        expect(gifs.length).toBe(10);
    });
    test('debe tener 0 elementos ', async() => {
        const gifs=await getGifs('');
        expect(gifs.length).toBe(0);
    })
    
})
