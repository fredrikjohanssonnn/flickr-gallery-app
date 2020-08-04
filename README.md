This is an application that fetches data from the Flickr API. You can either search for your desired image, or use any of the three buttons which has prefetched images of some certain tags.

To run this project locally on your machine. Download the repository, either through git or download the zip file. Then you need to run either yarn/npm install, this will install the required dependencies to run the project.

The Flickr API requires an API key to fetch data from their servers. You can get a free api key from their website: https://www.flickr.com/services/api/

Then you need to add a file to the /src folder in this project. If you don't change the imports, you need to name the file "config.js". The file can be structured has described below:

const apiKey = '80qwe0d9s9s9ew9ew';
export default apiKey;

Save the file and after that you can just type "yarn/npm start" to start the project locally. The project will run on http://localhost:3000, in case it's available.

To create a production build, simply run the command "yarn/npm build". This will create a build folder within the project.
