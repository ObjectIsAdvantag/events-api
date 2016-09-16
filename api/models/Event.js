/**
 * event.js
 *
 * @description :: Events advertized by Cisco DevNet
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoPK: false,
  schema: true,

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

    beginDay: {
      type: 'string',  // calendar format, ex Sept 16 
      required: true
    },

    beginDayInWeek: {
      type: 'string', // local time
      enum: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
      required: true
    },

    beginTime: {
      type: 'string',  // local time 
      required: true
    },

    endDate: {
      type: 'datetime', // local time format
      required: true
    },

    endDay: {
      type: 'string',  // calendar format, ex Sept 16 
      required: true
    },

    endDayInWeek: {
      type: 'string', // local time
      enum: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
      required: true
    },

    endTime: {
      type: 'string',  // local time 
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
      required: true
    },

    city: {
      type: 'string',
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

