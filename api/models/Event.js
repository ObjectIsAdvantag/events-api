/**
 * event.js
 *
 * @description :: Events advertized by Cisco DevNet
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoPK:false,
  schema:true,

  attributes: {
    id: {
      type: 'string', // alias to access the event
      primaryKey: true
    },

    name: {
      type: 'string',
      required: true
    },

     url: {
       type: 'string', // where to get details about the event
       required: true
     },

     description: {
       type: 'string', // summary of what's happening
       size: 2048,
       required: false
     },

    beginDate: {
      type: 'datetime',  // UTC format
      required: true
    },

    beginTime: {
      type: 'string',  // local time 
      required: true
    },

    beginDay: {
      type: 'string', // local time
      enum: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
      required: true
    },    

    endDate: {
      type: 'datetime', // local time format
       required: true
    },

  endTime: {
      type: 'string',  // local time 
     required: true
   },

    endDay: {
      type: 'string', // local time
      enum: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
      required: true
   }, 

    category: { 
      type: 'string',
      enum: ['conference', 'hackathon', 'workshop', 'training'],
      defaultsTo: 'session',
      required: true
    },

  
    country: {
      type: 'string', 
      //enum: ['ClassRoom1', 'ClassRoom2', 'DemoPods', 'LearningLab', 'Theater', 'WorkBench1', 'WorkBench2', 'WorkBench3', 'WorkBench4', 'DevNetZone'],
      required: true
    },

    city: {
      type: 'string', 
      //enum: ['ClassRoom1', 'ClassRoom2', 'DemoPods', 'LearningLab', 'Theater', 'WorkBench1', 'WorkBench2', 'WorkBench3', 'WorkBench4', 'DevNetZone'],
      required: true
    },

    location_url: {
      type: 'url',
      defaultsTo: 'https://developer.cisco.com/site/DevNetZone/',
      required: true
    },

    // Hide internal structure
    toJSON: function () {
      var obj = this.toObject();
      delete obj.createdAt;
      delete obj.updatedAt;
      return obj;
    }

  }
};

