Image Processing API

Image processing API will take an image from the ‘full’ folder inside the images directory and resize it according to the user specifications. Also, rather than needing to resize and upload multiple copies of the same image to be used throughout the site, the API will handle resizing and serving stored images for you.

Requirements

To resize an image, it must first be present in the ‘full’ folder inside the images folder of the root directory.
You must also have the following dependencies installed:
* TypeScript
* Express for backend
* Jasmine for unit testing
* Eslint for linting
* Prettier for formatting
* Sharp for image resizing 
* Supertest to help Jasmine with unit testing.

Usage

Build the API with npm run build and then execute it with npm run start. Go to browser, http://localhost:3000/, enter endpoint as /resize followed by your query as mentioned below - `/resize?fileName=<name_of_image>&height=<desired_height>&width=<desired_width>
Example: `http://localhost:3000/resize?fileName=smile.jpg&height=200&width=200

Below fileName’s are present in ‘full’ folder inside images folder –
* smile.jpg
* road.jpg
* robot.jpg
* rose.jpg
After execution of npm commands resized images will be stored in ‘thumb’ folder inside the ‘images’ folder of root directory.

Testing

Execute unit tests with the command npm run test.
To run prettier and eslint use below commands,
npm run prettier
npm run lint

