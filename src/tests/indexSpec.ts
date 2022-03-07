import path from 'path';
import supertest from 'supertest';
import app from '../index';
import resizeImg from '../routes/imageresize';

const request = supertest(app);
const filepath = path.resolve(__dirname, '../../images');

describe('Test endpoint responses', () => {
    it('Gets the resize endpoint', async () => {
        const response = await request.get('/resize');
        expect(response.status).toBe(200);
    });
});

it('Test wrong endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).not.toBe(200);
});

describe('Test Image processing scenarios', () => {
    it('Test input file found or not', async () => {
        const response = await request.get(
            '/resize?fileName=abc&width=20&height=20'
        );
        expect(response.text).toEqual('Input file not found');
    });

    it('Test values of height and width should be non negative and non zero', async () => {
        const response = await request.get(
            '/resize?fileName=smile.jpg&width=-20&height=-20'
        );
        expect(response.text).toContain(
            'Values for height and width should be greater than 0'
        );
    });

   });

// test image processing function in isolation without sending a request to server.
    it('Image processing test', async () => {
    expect(async () => {
        await  resizeImg("images\\full\\smile.jpg", 200, 200, "images\\thumb\\smile_200_200.jpg");
    }).not.toThrow();
});
