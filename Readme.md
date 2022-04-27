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


Here is the url where i am hosting the website right now

    https://cjobs-3c223.firebaseapp.com/

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
        Added backend for  contact (using  mongoose)
        Created pages for jobs, internships and trainings and added nothing to them
        Maked the whole website responsive (i.e., for evry size device)
        add url to all of the links and created all the pages for internship and jobs and trainings
        modified data and added url to all of them

    ->Seventh Commit - 25-04-2022
        Create Profile with updator page fro employer and seeker (responsive)
        Add top and filter and job and internship card to the job and internshipt page (responsive)
        Created the template for the post
        Redesigned the post and used User_id a feature to view companies profiles

    ->Eight Commit - 26-04-2022
        Make employer to post a recruitment (job or internship)
        Jobs and internships can be viewed by employer itself and by every other people (tags not included)
        Added my recruitments page for employer where it can see his postings (jobs and internships both)

    ->Ninth Commit - 27-04-2022
        Add filters to the internship and the jobs page
        On clicking view details a person can view the details of the post (make that page)
        In the home search bar make searching available for companies and made other viewers profile page for other
        Restyle the card and make it smaller in size.

    ->tenth Commit - 28-04-2022
        A person can apply on that internship make that option. (create new collection or store data in previous is your option.)
        Onclick apply now first it willbe redirected towards profile component to check if user want to update or not
        Then it will redirected to the application page and after click on apply a confirm box opens to take last that are you sure to want to apply if yes then the 
        the application will be sent.
        And the applied bar will be appear on user my application internship or job section
        And also employer can see the data that is filled by the seeker