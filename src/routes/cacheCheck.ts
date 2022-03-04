//import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import express from 'express';

const filepath = path.resolve(__dirname, '../../images');

//To Add caching
const cacheImg = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> => {
  const fileName = `${req.query.fileName}`;
  const outputImg = `${filepath}\\thumb\\${path.parse(fileName).name}_${
    req.query.width
  }_${req.query.height}${path.parse(fileName).ext}`;
  const inputImg = `${filepath}\\full\\${fileName}`;
  const width = parseInt(`${req.query.width}` as unknown as string)
  const height = parseInt(`${req.query.height}` as unknown as string);

  if (!fs.existsSync(inputImg)) {
        res.send('Input file not found');
  } 
  else if(width <= 0 || height <= 0) {
      res.send("Values for height and width should be greater than 0")
  }
  else if(!width || !height){
      res.send("Values for height and/or width is missing. Please enter the values")
  }
  else if (!fs.existsSync(outputImg)) {
        res.send('Output file not found');
  }
  
  else if (fs.existsSync(outputImg)) {
    res.sendFile(outputImg);
    console.log('Caching image');
  } else {
    next();
  }
};

export default cacheImg;
