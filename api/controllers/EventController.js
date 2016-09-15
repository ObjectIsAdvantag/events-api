/**
 * EventController
 *
 * @description :: Server-side logic for managing activities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	findNext: function (req, res) {
        var now = new Date(Date.now());

        // set limit
        var limit = req.param('limit');
        if (!limit) {
            limit = 10;
        }
       
        Event.find({ beginDate: { ">=" : now }, sort: "beginDate ASC", limit:limit }, function (err, found) {
            if (err) return res.json(500, { err: "could not retreive any events" });

            return res.json(200, found);
        });
    },

    findCurrent: function (req, res) {
        // check if there is a date specified
        var now = req.param('now');
        if (!now) {
            now = new Date(Date.now());
        }

        // set limit
        var limit = req.param('limit');
        if (!limit) {
            limit = 10;
        }
       
        Event.find().where({ endDate: { ">=" : now }}).where({ beginDate: { "<=" : now }}).sort("beginDate ASC").limit(limit).exec (function (err, found) {
            if (err) return res.json(500, { err: "could not retreive any events", details: err });

            return res.json(200, found);
        });
    }
};

