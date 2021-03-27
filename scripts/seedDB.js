require('dotenv').config()

const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/progressing"
);

const goalSeed = [
  {
    title: "Project 3 with React",
    description: "This is our final group project for the UW Bootcamp",
    goalType: "event",
    // endDate: 2021-1-04,
    steps: [
      {
        _id: "dasd",
        name: "Presentation",
        steps: [
          // { id: 1,
          //   name: "Present to class"
          // },
          // { id: 2,
          //   name: "Think of content for slideshow"
          // },
          // { id: 3,
          //   name: "Create slideshow"
          // },
          // { id: 4,
          //   name: "Update final styling"
          // }
        ]
        },
      { 
        _id: "sdfsd",
        name: "Style page",
        steps: [
          // { id: 1,
          //   name: "Set up carousel to display goals"
          // },
          // { id: 2,
          //   name: "Configure custom colors"
          // },
          // { id: 3,
          //   name: "Use custom logos and images"
          // },
          // { id: 4,
          //   name: "Create mocks"
          // }
        ]
        },
      {
        _id: "dssdgasd",
        name: "Develop functionility of page",
        steps: [
          // { 
          //   id: 1,
          //   name: "Set up form and push to database"
          // },
          // {
          //   id: 2,
          //   name: "Render listed data onto goal component"
          // },
          // {
          //   id: 3,
          //   name: "Develop progress bar with algorithm"
          // },
          // {
          //   id: 4,
          //   name: "Apply update api's for toggle features"
          // },
          // {
          //   id: 5,
          //   name: "Find a way to keep track of time left (moment js?)"
          // },
        ]
        },
      {
        _id: "lksldfk",
        name: "Set up login and sign up page",
        steps: [
          // { id: 1,
          //   name: "Handle error messages"
          // },
          // { id: 2,
          //   name: "Establish routes with react-router-dom"
          // },
          // { id: 3,
          //   name: "Establish authorization with passport"
          // },
          // { id: 4,
          //   name: "Create schema and set up MongoDB"
          // },
        ]
        },
      {
      _id: "kljdslf",  
      name: "Develop initial page",
      steps: [
        // {
        //   id: 1,
        //   name: "Create login component"
        // },
        // {
        //   id: 2,
        //   name: "Create sign up component"
        // },
        // {
        //   id: 3,
        //   name: "Create home component"
        // },
        // {
        //   id: 4,
        //   name: "Create other pages/components"
        // },
      ]
      }
    ],
    user_id: process.env.USER_ID,
    notes: null
  },
  {
    title: "Be more active",
    description: "I want to move more and be less sedantary",
    goalType: "event",
    // endDate: 2021-1-04,
    steps: [
      {
      _id: 1,
      name: "create physical activity routine",
      steps: []
      },
      {
        _id: 2, 
       name: "eat better",
       steps: [
          {
            id: 1,
            name: "eat veggies"
          }
        ], 
      }
    ],
    user_id: process.env.USER_ID,
    notes: "hope it doesn't rain too often when I want to walk"
  }, {
    title: "Brush up on C#",
    description: "I haven't worked with C# in years and want familiarize myself with it",
    goalType: "event",
    // endDate: 2021-12-04,
    steps: [
      {
        _id: 1,
      name: "Improve skill with C#",
      steps: [
        {
          // id: 1,
          name: "Read about a C# topic every day"
          }, {
            // id: 2,
          name: "Do a C# programming exercise every day",
          complete: true
          }
        ]
      }
    ],
    user_id: process.env.USER_ID,
  }, {
    title: "Learn to play guitar",
    description: "I want to learn to play guitar as a creative outlet",
    goaltype: "event",
    // endDate: 2021-5-04,
    steps: [{
      _id: 1,
      name: "Learn to read guitar tabs",
        steps: [],
        complete: true
      }, 
      {
        _id: 2,
        name: "Establish a practice routine",
        steps: [{
          // id: 1,
          name: "something random 1",
          complete: true
            }, {
          // id: 2,    
          name: "something random 2",
          complete: true
            },
            {
          // id: 3,    
          name: "something random 3"  
            }  
          ]
      }
    ],
    user_id: process.env.USER_ID,
  }
];

db.Goals
  .remove({})
  .then(() => db.Goals.collection.insertMany(goalSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
