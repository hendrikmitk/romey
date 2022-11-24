const handler = async (event) => {
  try {
    const data = [
      {
        author: 'Mia Butler',
        author_image_alt: 'Mia Butler',
        author_image_src: '/img/team/mia-butler.jpg',
        date: {
          seconds: 1579516899,
        },
        id: 1,
        image: {
          alt: 'Horseshoe Bend',
          src: '/img/horseshoe-bend.jpg',
        },
        location: {
          city: 'Arizona',
          coordinates: {
            lat: 36.879,
            lng: -111.51,
          },
          country: 'United States',
        },
        text:
          'Horseshoe Bend is a horseshoe-shaped incised meander of the Colorado River located near the town of Page, Arizona, United States. It is also referred to as the "east rim of the Grand Canyon." Horseshoe Bend is located 5 miles downstream from the Glen Canyon Dam and Lake Powell within Glen Canyon National Recreation Area, about 4 miles southwest of Page. It is accessible via hiking a 1.5-mile round trip from a parking area just off U.S. Route 89 within southwestern Page. The land south of the Bend\'s parking area, trail, and overlook are on the Navajo Nation territory. Horseshoe Bend can be viewed from the steep cliff above. The overlook is 4,200 feet above sea level, and the Colorado River is at 3,200 feet above sea level, making it a 1,000-foot drop. Recently, the lookout has become a major tourist destination. By 2018, references to the location on social media had caused the number of visitors to increase significantly.',
        title: 'Horseshoe Bend',
      },
      {
        author: 'Eugene Flores',
        author_image_alt: 'Eugene Flores',
        author_image_src: '/img/team/eugene-flores.jpg',
        date: {
          seconds: 1584566254,
        },
        id: 2,
        image: {
          alt: 'Niagara Falls',
          src: '/img/niagara-falls.jpg',
        },
        location: {
          city: 'Ontario',
          coordinates: {
            lat: 43.082,
            lng: -79.075,
          },
          country: 'Canada',
        },
        text:
          'Niagara Falls is a group of three waterfalls at the southern end of Niagara Gorge, spanning the border between the province of Ontario in Canada and the state of New York in the United States. The largest of the three is Horseshoe Falls, also known as Canadian Falls, which straddles the international border of the two countries. The smaller American Falls and Bridal Veil Falls lie within the United States. Bridal Veil Falls is separated from Horseshoe Falls by Goat Island and from American Falls by Luna Island, with both islands situated in New York. Located on the Niagara River, which drains Lake Erie into Lake Ontario, the combined falls have the highest flow rate of any waterfall in North America that has a vertical drop of more than 50 m. During peak daytime tourist hours, more than 168,000 m³ of water goes over the crest of the falls every minute. Horseshoe Falls is the most powerful waterfall in North America, as measured by flow rate.',
        title: 'Niagara Falls',
      },
      {
        author: 'Mia Butler',
        author_image_alt: 'Mia Butler',
        author_image_src: '/img/team/mia-butler.jpg',
        date: {
          seconds: 1585211356,
        },
        id: 3,
        image: {
          alt: 'Grad Cenote',
          src: '/img/grand-cenote.jpg',
        },
        location: {
          city: 'Tulum',
          coordinates: {
            lat: 20.246,
            lng: -87.463,
          },
          country: 'Mexico',
        },
        text:
          'The Gran Cenote is one of the most famous cenotes in Mexico. Located just a few kilometres from Tulum on the way to Coba, this is one of the top diving spots in Riviera Maya. Although its name suggests it is only one big cenote, it really consists of several cenotes meandering along the verdant jungle floor and connected by wooden walkways. The color of the water is so clear that one can see fish swimming without even snorkeling. Gran Cenote is one of the most popular spots to snorkel. Its water is so crystal clear that a lot of the underwater life can be seen without going in a deep dive. Of course dives can also be arranged here.',
        title: 'Grad Cenote',
      },
      {
        author: 'Peter Nichols ',
        author_image_alt: 'Peter Nichols ',
        author_image_src: '/img/team/peter-nichols.jpg',
        date: {
          seconds: 1579801690,
        },
        id: 4,
        image: {
          alt: 'Machu Picchu',
          src: '/img/macchu-picchu.jpg',
        },
        location: {
          city: 'Aguas Calientes',
          coordinates: {
            lat: -13.163,
            lng: -72.545,
          },
          country: 'Peru',
        },
        text:
          'Machu Picchu is a 15th-century Inca citadel, located in the Eastern Cordillera of southern Peru, on a 2,430-metre mountain ridge. It is located in the Machupicchu District within Urubamba Province above the Sacred Valley, which is 80 kilometres northwest of Cuzco. The Urubamba River flows past it, cutting through the Cordillera and creating a canyon with a tropical mountain climate. For most speakers of English or Spanish, the first "c" in Picchu is silent. In English, the name is pronounced or, in Spanish as [ˈmatʃu ˈpitʃu] or [ˈmatʃu ˈpiktʃu], and in Quechua as [ˈmatʃʊ ˈpɪktʃʊ]. Most archaeologists believe that Machu Picchu was constructed as an estate for the Inca emperor Pachacuti. Often mistakenly referred to as the "Lost City of the Incas", it is the most familiar icon of Inca civilization. The Incas built the estate around 1450 but abandoned it a century later at the time of the Spanish conquest.',
        title: 'Machu Picchu',
      },
      {
        author: 'Eugene Flores',
        author_image_alt: 'Eugene Flores',
        author_image_src: '/img/team/eugene-flores.jpg',
        date: {
          seconds: 1581944863,
        },
        id: 5,
        image: {
          alt: 'Golden Gate Bridge',
          src: '/img/golden-gate-bridge.jpg',
        },
        location: {
          city: 'San Francisco',
          coordinates: {
            lat: 37.819,
            lng: -122.478,
          },
          country: 'United States',
        },
        text:
          'The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide strait connecting San Francisco Bay and the Pacific Ocean. The structure links the U.S. city of San Francisco, California—the northern tip of the San Francisco Peninsula—to Marin County, carrying both U.S. Route 101 and California State Route 1 across the strait. The bridge is one of the most internationally recognized symbols of San Francisco and California. It was initially designed by engineer Joseph Strauss in 1917. It has been declared one of the Wonders of the Modern World by the American Society of Civil Engineers. The Frommer\'s travel guide describes the Golden Gate Bridge as "possibly the most beautiful, certainly the most photographed, bridge in the world." At the time of its opening in 1937, it was both the longest and the tallest suspension bridge in the world, with a main span of 4,200 feet and a total height of 746 feet.',
        title: 'Golden Gate Bridge',
      },
      {
        author: 'Mia Butler',
        author_image_alt: 'Mia Butler',
        author_image_src: '/img/team/mia-butler.jpg',
        date: {
          seconds: 1580726554,
        },
        id: 6,
        image: {
          alt: 'Taj Mahal',
          src: '/img/taj-mahal.jpg',
        },
        location: {
          city: 'Agra',
          coordinates: {
            lat: 27.175,
            lng: 78.041,
          },
          country: 'India',
        },
        text:
          'The Taj Mahal is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall. Construction of the mausoleum was essentially completed in 1643, but work continued on other phases of the project for another 10 years. The Taj Mahal complex is believed to have been completed in its entirety in 1653 at a cost estimated at the time to be around 32 million rupees, which in 2020 would be approximately 70 billion rupees. The construction project employed some 20,000 artisans under the guidance of a board of architects led by the court architect to the emperor, Ustad Ahmad Lahauri.',
        title: 'Taj Mahal',
      },
      {
        author: 'Peter Nichols ',
        author_image_alt: 'Peter Nichols ',
        author_image_src: '/img/team/peter-nichols.jpg',
        date: {
          seconds: 1583394727,
        },
        id: 7,
        image: {
          alt: 'Rainbow Mountain',
          src: '/img/rainbow-mountain.jpg',
        },
        location: {
          city: 'Cusco',
          coordinates: {
            lat: -14.045,
            lng: -71.257,
          },
          country: 'Peru',
        },
        text:
          "Vinicunca, or Winikunka, also called Montaña de Siete Colores, Montaña de Colores or Rainbow Mountain, is a mountain in the Andes of Peru with an altitude of 5,200 metres above sea level. It is located on the road to the Ausangate mountain, in the Cusco region, between the districts of Cusipata, province of Quispicanchi, Pitumarca, and the province of Canchis. Tourist access requires a two-hour drive from Cusco and a walk of about 5 kilometers, or a three-and-a-half-hour drive through Pitumarca and a one-half-kilometre steep walk to the hill. As of 2019, no robust methods of transportation to Vinicunca have been developed to accommodate travelers, as it requires passage through a valley. In the middle of the 2010s, mass tourism came, attracted by the mountain's series of stripes of various colors due to its mineralogical composition on the slopes and summits. The mountain used to be covered by glacier caps, but these have melted due to global warming.",
        title: 'Rainbow Mountain',
      },
      {
        author: 'Peter Nichols ',
        author_image_alt: 'Peter Nichols ',
        author_image_src: '/img/team/peter-nichols.jpg',
        date: {
          seconds: 1582743162,
        },
        id: 8,
        image: {
          alt: 'Skógafoss',
          src: '/img/skogafoss.jpg',
        },
        location: {
          city: 'Evindarhólar',
          coordinates: {
            lat: 63.532,
            lng: -19.511,
          },
          country: 'Iceland',
        },
        text:
          'Skógafoss is a waterfall on the Skógá River in the south of Iceland at the cliff marking the former coastline. After the coastline had receded, the former sea cliffs remained, parallel to the coast over hundreds of kilometres, creating together with some mountains a clear border between the coastal lowlands and the Highlands of Iceland.',
        title: 'Skógafoss',
      },
      {
        author: 'Eugene Flores',
        author_image_alt: 'Eugene Flores',
        author_image_src: '/img/team/eugene-flores.jpg',
        date: {
          seconds: 1582121305,
        },
        id: 9,
        image: {
          alt: 'Copacabana',
          src: '/img/copacabana.jpg',
        },
        location: {
          city: 'Rio de Janeiro',
          coordinates: {
            lat: -22.971,
            lng: -43.182,
          },
          country: 'Brasil',
        },
        text:
          'Copacabana is a bairro located in the South Zone of the city of Rio de Janeiro, Brazil. It is known for its 4 km balneario beach, which is one of the most famous in the world.',
        title: 'Copacabana',
      },
      {
        author: 'Mia Butler',
        author_image_alt: 'Mia Butler',
        author_image_src: '/img/team/mia-butler.jpg',
        date: {
          seconds: 1581769024,
        },
        id: 10,
        image: {
          alt: 'Malecón',
          src: '/img/malecon.jpg',
        },
        location: {
          city: 'Havana',
          coordinates: {
            lat: 23.145,
            lng: -82.358,
          },
          country: 'Cuba',
        },
        text:
          'The Malecón is a broad esplanade, roadway, and seawall that stretches for 8 km along the coast in Havana, Cuba, from the mouth of Havana Harbor in Old Havana, along the north side of the Centro Habana neighborhood and the Vedado neighborhood, ending at the mouth of the Almendares River. New businesses are appearing on the esplanade due to economic reforms in Cuba that now allow Cubans to own private businesses.',
        title: 'Malecón',
      },
    ];

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Success', data: data }),
      headers: {
        'access-control-allow-origin': '*',
      },
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
