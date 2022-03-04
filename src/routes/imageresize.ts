import express from 'express';
import sharp from 'sharp';
import path from 'path';

const filepath = path.resolve(__dirname, '../../images');

const resizeImg = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  const fileName = `${req.query.fileName}`;
  const inputImg = `${filepath}\\full\\${fileName}`;
  const outputImg = `${filepath}\\thumb\\${path.parse(fileName).name}_${
    req.query.width
  }_${req.query.height}${path.parse(fileName).ext}`;
  const width: number = parseInt(req.query.width as unknown as string);
  const height: number = parseInt(req.query.height as unknown as string);

  //To resize the image using sharp
  try {
    await sharp(inputImg).resize({ width, height }).toFile(outputImg);
    res.sendFile(outputImg);
    console.log('Resizing image...');
  } catch (error) {
    console.log(error);
  }
};

export default resizeImg;
