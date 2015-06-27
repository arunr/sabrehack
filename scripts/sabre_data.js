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
        categories: ['Single', 'Romantic']
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
        ],
        flights: [{
            from: 'ORD',
            to: 'NYC'
        }]
    }
});



db.apps.insert({
    basics : {
        title: 'Amritsar Pilgrimage',
        hours: null,
        days: 2,
        slug: 'amritsar_pilgrimage',
        type: 'trip',
        created_at : new Date(),
        tags: ['Amritsar', 'India'],
        categories: ['Family', 'Pilgrimage']
    },
    meta: {
        rating: 3
    },
    details: {
        description: "Find spirituality in Amritsar in our specially designed trip.",
        itinerary: [
            {
                day_num: 1,
                details: "Arrive at Amritsar airport and check-in to the hotel. Afternoon drive to the Wagah border passing by Khalsa college. View the change of guards ceremony at the India Pakistan border. Evening to the Golden Temple offer your prayers and take in the tranquility."
            },
            {
                day_num: 2,
                details: "Morning Punjabi chole-kulche breakfast followed by visit to Jallianwala Bagh. Afternoon take in the sights of the shopping areas."
            },
            {
                day_num: 3,
                details: "Departure."
            }
        ]
    }
});


db.apps.insert({
    basics : {
        title: 'Paris Art Trip',
        hours: null,
        days: 5,
        slug: 'paris_art',
        type: 'trip',
        created_at : new Date(),
        tags: ['Amritsar', 'India'],
        categories: ['Single', 'Art']
    },
    meta: {
        rating: 5
    },
    details: {
        description: "Experience the artists life at the Montmartre hill in Paris.",
        itinerary: [
            {
                day_num: 1,
                details: "Arrive at Paris and check-in to the hotel. Afternoon walk up the Montmartre Hill to the Sacre Couer and view the sunset over Paris."
            },
            {
                day_num: 2,
                details: "After breakfast go to the Musee de Montmartre and explore lives of the artists. Afternoon walk around the hill to the places where the likes of Van Gogh and Renoir worked."
            },
            {
                day_num: 3,
                details: "Visit the Museum of Art. Special evening at Cafe Van Gogh."
            },
            {
                day_num: 4,
                details: "Visit the various Windmills in Montmartre and the old village. Evening at the Moulin Rouge - dining and cabaret."
            },
            {
                day_num: 5,
                details: "A special screening of the Life of Renoir, Impressionist Painters followed by lunch and discussion with the artists meet-up group."
            }
        ]
    }
});


db.apps.insert({
    basics : {
        title: 'Amsterdam Canal Cruise with dinner',
        hours: 3,
        days: null,
        slug: 'amsterdam_canal',
        type: 'activity',
        created_at : new Date(),
        tags: ['Amsterdam', 'Netherlands'],
        categories: ['Single', 'Food']
    },
    meta: {
        rating: 5
    },
    details: {
        description: "Float down the canals as the sunsets and dinner right by the water.",
        itinerary: [
            {
                start_hour: 18,
                start_min: 30,
                end_hour: 21,
                end_min: 30,
                details: "We start the evening with a tour of the canals where you can view all the landmarks. Our charming guide will talk to you about the significance of the points of interest. Later in the evening we offer a 3 course dinner specially prepared by our chef."
            }

        ]
    }
});


db.apps.insert({
    basics : {
        title: 'Bruges cycling tour',
        hours: 6,
        days: null,
        slug: 'bruges_cycling',
        type: 'activity',
        created_at : new Date(),
        tags: ['Bruges', 'Belgium'],
        categories: ['Single', 'Soft adventure']
    },
    meta: {
        rating: 5
    },
    details: {
        description: "Cycle by the river and visit many old villages.",
        itinerary: [
            {
                start_hour: 13,
                start_min: 30,
                end_hour: 19,
                end_min: 30,
                details: "We start the tour with a short ride to get you used to the cycles we provide. We then start our 20 km ride first going along the river and then venturing into the villages. We stop for a beer at a local cafe (included) and a picnic evening snack."
            }

        ]
    }
});

db.apps.insert({
    basics : {
        title: 'Rural England Tour',
        hours: null,
        days: 4,
        slug: 'rural_england',
        type: 'trip',
        created_at : new Date(),
        tags: ['England', 'Countryside'],
        categories: ['Group', 'Outdoors']
    },
    meta: {
        rating: 3
    },
    details: {
        description: "Discover Bill Brysons Rural England",
        itinerary: [
            {
                day_num: 1,
                details: "Arrive at London and drive down to the Peak District village of Eyre. Afternoon short walk through the village ending at the village pub."
            },
            {
                day_num: 2,
                details: "Morning after breakfast at your bnb walk to the Cavern and explore the Cavern. View beautiful stalactites and stalagmites and hear stories of the lead mines from your guide. Afternoon drive to the nearby town and explore the town center."
            },
            {
                day_num: 3,
                details: "Today is a day for a long walk through the neighbouring countryside across meadows, crossing streams and glades, and through sheep farms. Picnic lunch by a stream. Evening at the village of Leadenbrow pub."
            },
            {
                day_num: 4,
                details: "Walk to the peak hill and get a wonderful view of the countryside. Visit the needlework factory. Afternoon drive back to London."
            }
        ]
    }
});



db.apps.insert({
    basics : {
        title: 'Amsterdam by cycle',
        hours: null,
        days: 2,
        slug: 'amsterdam_cycle',
        type: 'trip',
        created_at : new Date(),
        tags: ['Amsterdam', 'Netherlands'],
        categories: ['Family', 'Outdoors']
    },
    meta: {
        rating: 4
    },
    details: {
        description: "Find spirituality in Amritsar in our specially designed trip.",
        itinerary: [
            {
                day_num: 1,
                details: "Meet your cycling tour guide and ride to the center where you can see the old harbour. Follow the canal route and understand the city. Lunch at the Jordan neighbourhood."
            },
            {
                day_num: 2,
                details: "Today we ride out of town into the villages near Amsterdam where we get to view age old windmills. Lunch at a village cafe and back to Amsterdam."
            }

        ]
    }
});


db.apps.insert({
    basics : {
        title: 'Understanding ancient Rome',
        hours: null,
        days: 2,
        slug: 'rome_history',
        type: 'trip',
        created_at : new Date(),
        tags: ['Rome', 'Italy'],
        categories: ['Group', 'History']
    },
    meta: {
        rating: 5
    },
    details: {
        description: "View the monuments of ancient Rome and understand Roman history.",
        itinerary: [
            {
                day_num: 1,
                details: "Arrival in Rome and check-in to your hotel. Late morning visit the Colosseum and the Roman columns. Evening dinner at an Italian restaurant."
            },
            {
                day_num: 2,
                details: "After breakfast visit the Roman baths and aqueducts on the outskirts of Rome."
            }

        ]
    }
});


db.apps.insert({
    basics : {
        title: 'Walking in Dover',
        hours: 3,
        days: null,
        slug: 'dover_walk',
        type: 'activity',
        created_at : new Date(),
        tags: ['Dover', 'England'],
        categories: ['Family', 'Outdoors']
    },
    meta: {
        rating: 5
    },
    details: {
        description: "A bracing half day guided walk along the Dover cliffs.",
        itinerary: [
            {
                start_hour: 18,
                start_min: 30,
                end_hour: 21,
                end_min: 30,
                details: "Start your walk on the pebble beach and walk up the white chalk cliffs into the National Park. Our guide will talk to you about the historical significance of the various spots."
            }

        ]
    }
});


db.apps.insert({
    basics : {
        title: 'Wine tasting in Tuscany',
        hours: 6,
        days: null,
        slug: 'Tuscany_winetasting',
        type: 'activity',
        created_at : new Date(),
        tags: ['Wine', 'Italy'],
        categories: ['Single', 'Food']
    },
    meta: {
        rating: 5
    },
    details: {
        description: "A wine tasting tour that takes you through some of the finest vineyards in Tuscany",
        itinerary: [
            {
                start_hour: 13,
                start_min: 30,
                end_hour: 19,
                end_min: 30,
                details: "We start the tour from the Podere Fraggina, an agritourismo. From here, we move onto San Giovvani where we taste the Chianti followed by the wonderful wine of the Tutto vineyard."
            },

        ]
    }
});


