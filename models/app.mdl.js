'use strict';
/*jslint node: true */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AppSchema = new Schema({
    basics : {
        title: {type: String, trip: true, required: true},
        hours: {type: Number},
        days: {type: Number},
        slug: {type: String},
        type: {type: String, enum: ['trip', 'activity', 'list']},
        created_at : {type: Date, default: Date.now},
        tags: [{type: String}],
        categories: [{type: String}],
        thumbnail : {type: String}
    },
    meta: {
        rating: {type: Number},
        reviews: [{
            from: {type: String}, // TODO - Change to user
            text: {type: String}
        }]
    },
    details: {
        description: {type: String},
        itinerary: [
            {
                day_num: {type: String},
                details: {type: String}
            }
        ],
        flights: [
            {
                from: String,
                to: String
            }
        ],
        events: {type: String}, //TODO - Fixup - Dynamic data
        hotels: {
            name: String,
            id: String,
            rate: String
        } //TODO - Fixup
    }
});

AppSchema.pre('validate', function (next) {
    if (!this.basics.title) next();
    this.basics.slug = slugify(this.basics.title);
    next();
});

function slugify(created_outlet) {
    return created_outlet.toLowerCase().replace(/\s+/g, '').replace(/\W/g, '');
}

module.exports = mongoose.model('App', AppSchema);
