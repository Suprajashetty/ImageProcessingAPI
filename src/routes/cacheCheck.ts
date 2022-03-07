import path from 'path';
import fs from 'fs';
import express from 'express';
import resizeImg from './imageresize';

const filepath = path.resolve(__dirname, '../../images');

//To Add caching logic
const cacheImg = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
): Promise<void> => {
    const fileName = `${req.query.fileName}`;
    const outputFilePath = `${filepath}\\thumb\\${path.parse(fileName).name}_${
        req.query.width
    }_${req.query.height}${path.parse(fileName).ext}`;
    const inputFilePath = `${filepath}\\full\\${fileName}`;
    const width = parseInt(`${req.query.width}` as unknown as string);
    const height = parseInt(`${req.query.height}` as unknown as string);

    //send response when any errors found
    if (!fs.existsSync(inputFilePath)) {
        res.send('Input file not found');
    } else if (width <= 0 || height <= 0) {
        res.send('Values for height and width should be greater than 0');
    } else if (!width || !height) {
        res.send(
            'Values for height and/or width is missing. Please enter the values'
        );
    } else if (fs.existsSync(outputFilePath)) {
        res.sendFile(outputFilePath);
        } 
    else {
       await resizeImg(inputFilePath, width, height, outputFilePath);
       res.sendFile(outputFilePath);
        }
};

export default cacheImg;
