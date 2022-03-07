import express from 'express';
import sharp from 'sharp';
import path from 'path';

const filepath = path.resolve(__dirname, '../../images');

const resizeImg = async (
   inputFilePath :string,
   width: number,
   height:number,
   outputFilePath: string
): Promise<void> => {

    //To resize the image using sharp
    try {
        await sharp(inputFilePath).resize({ width, height }).toFile(outputFilePath);
    } 
    catch (error) {
       throw(error);
    }
};

export default resizeImg;
