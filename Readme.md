This is website I am creating for applying for jobs and internships.
I am using MERN technology to create it.

To create server (backend) i used

    -> npm init

// installing the required packages

    -> npm i body-parser cors twilio dotenv express node-fetch nodemon mongoose

Why i use these packages:

    body-parser - for parsing the data
    cors - for removing cross origin errors
    dotenv - for saving static data at one point and use it in all backend
    mongoose - to connect with MongoDB database
    node-fetch - for fetching the web APIs
    twilio - for sending verification otp on the phone numbers
    nodemon - to make server restart automatically whenever a change is made
    express - for routing

In backend, there is a challenge because i have to create two api one for the employees and other employers.

The contact has separate collection for employee and employers because if we combine them then it make data to load slower and we can't service them properly
The Login has separate collection for employee and employers because it makes data to load faster
The Register or Sign up has separate collection for employee and employers because it makes data to store & load faster and make it categorized

To create client (frontend) i used

    -> npx create-react-app client

// installing the required packages

    -> npm i "@emotion/react @emotion/styled @mui/icons-material @mui/material axios crypto-js react-router-dom uuid

Why i use these packages:

    @mui/material - to use the material ui framework
    @emotion/react @emotion/styled - these packages are used to install the styling library for material ui framework
    @mui/icons-material - to use the material ui icons
    axios - to make api to the server (backend) calls from the client (frontend) side. axios make it easy to do it
    crypto-js - to encrypt the data we get from the server (backend) due to sefcurity reasons
    uuid - to create a new unique id for every element
    react-router-dom - to use the route feature in react-js.

// ------------

    I use useParams() instead of creating different pages for jobs and internships because they have same styling and if we create several
    components then the website becomes slow.

---------------//

// ------------

    To simplyfiy the code I divided the components inside the folders which do work as their names.

---------------//

// ------------

The theme of the website is

    --- without hover -----
    background - rgb(156, 39, 176)
    color - white

    --- with hover -----
    background - white
    color - rgb(156, 39, 176)

    ---Font Family-----
    ->Fredoka (from google fonts)
    ->Mui font (it is font provided by mui 'Typography' component)

---------------//

The changes in the commits. ( Here i store what changes i made for every commit)

    ->First Commit - 19-04-2022
        Created the template

    ->Second Commit - 20-04-2022
        Created the responsive navbar (using mui components)

    ->Third Commit - 21-04-2022
        Redesigned the navbar and added data to it.
        Created the Searchbar

    ->Fourth Commit - 22-04-2022
        Created page for  register
        Added backend for  register (using twilio and mongoose)
        Created pages for jobs, internships and trainings and but added nothing to them

    ->Fifth Commit - 23-04-2022
        Created page for  login
        Added backend for  login (using twilio and mongoose)
        Change Header also
        Add things to homepage 
        Added firebase hosting

    ->Sixth Commit - 24-04-2022
        Created page for  contact
        Added backend for  contact (using twilio and mongoose)
        Created pages for jobs, internships and trainings and add some things
        Change responsive Header also
        Add things to homepage (popular cities, advantages,etc.)
