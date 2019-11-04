/**
 * Mocking client-server processing
 */

const _countries = [
  {
    id: 0,
    name: 'Jakarta',
    intro: 'Jakarta, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel arcu erat. In ullamcorper turpis at odio lacinia, ac pulvinar mi.'
  },
  {
    id: 1,
    name: 'Netherlands',
    intro: 'The Netherlands is a country that is part of (a constituent country) of the Kingdom of the Netherlands. Most of it is in Western Europe, but there are also some parts in the Caribbean.'
  },
  {
    id: 2,
    name: 'France',
    intro: 'France, officially the French Republic, is a country in Western Europe. Its capital city is Paris. It is a member of the European Union.'
  },
  {
    id: 3,
    name: 'Germany',
    intro: 'The Republic of Germany, also called Germany, is a country in Central Europe. The country\'s full name is sometimes shortened to the FRG.'
  },
  {
    id: 4,
    name: 'Spain',
    intro: 'Spain is a country in Southern Europe. It is in the Iberian Peninsula near Portugal and Gibraltar. France and the country of Andorra are on its northeast side, where the Pyrenees mountains are.'
  }
]

const _attractions = [
  {
    id: 0,
    countryId: 0,
    name: 'Kota Tua',
    detail: 'Kota Tua Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel arcu erat. In ullamcorper turpis at odio lacinia, ac pulvinar mi.',
    favorite: false
  },
  {
    id: 1,
    countryId: 0,
    name: 'Pantai Ancol',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel arcu erat. In ullamcorper turpis at odio lacinia, ac pulvinar mi.',
    favorite: false
  },
  {
    id: 2,
    countryId: 0,
    name: 'Grotten van Han',
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel arcu erat. In ullamcorper turpis at odio lacinia, ac pulvinar mi ',
    favorite: false
  },
  {
    id: 3,
    countryId: 1,
    name: 'Efteling',
    detail: 'De Efteling is een attractiepark in de plaats Kaatsheuvel in de Nederlandse provincie Noord-Brabant. Het is qua bezoekersaantallen en oppervlakte het grootste attractiepark van de Benelux. De Efteling is ook een van de 25 meest bezochte themaparken in de wereld en na Disneyland Parijs, Europa-Park en Tivoli Gardens het meest bezochte pretpark van Europa.',
    favorite: false
  }
]

export default {
  getCountries (cb) {
    setTimeout(() => cb(_countries), 100)
  },
  getAttractionsFromCountry (cb, countryId) {
    setTimeout(() => cb(_attractions.filter(attraction => attraction.countryId === countryId)), 100)
  }
}
