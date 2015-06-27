var db = db.getSiblingDB('sabrehack');

db.apps.insert({
    basics : {
        title: 'London Thumakda',
        hours: null,
        days: 3,
        slug: 'london_thumakda',
        type: 'trip',
        created_at : new Date(),
        tags: ['London', 'India'],
        categories: ['Single', 'Romantic'],
        publisher: ObjectId('558eb7bb6e1cf0e11cf18dfc')
    },
    meta: {
        rating: 2
    },
    details: {
        description: "Find love in London in our 3 day trip.",
        itinerary: [
            {
                day_num: 1,
                details: "Arrive and check-in to the hotel. Afternoon walk along the Thames followed by London Eye Sunset."
            },
            {
                day_num: 2,
                details: "Morning walk in Hyde Park and Kensington Gardens. Picnic breakfast by the lake. Afternoon walk in Notting Hill, followed by English Tea."
            },
            {
                day_num: 3,
                details: "Morning river cruise, followed by the National Gallery and a Pub Crawl in the evening."
            }
        ]
    }
});