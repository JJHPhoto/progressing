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
    title: "Be more active",
    description: "I want to move more and be less sedantary",
    goalType: "event",
    // endDate: 2021-1-04,
    milestones: [
      {
      name: "create physical activity routine",
      actionItems: []
      },
      {
       name: "eat better",
       actionItems: [
          {
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
    milestones: [
      {
      name: "Improve skill with C#",
      actionItems: [
        {
          name: "Read about a C# topic every day"
          }, {
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
    milestones: [{
      name: "Learn to read guitar tabs",
        actionItems: [],
        complete: true
      }, 
      {
        name: "Establish a practice routine",
        actionItems: [{
          name: "something random 1",
          complete: true
            }, {
          name: "something random 2",
          complete: true
            },
            {
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
