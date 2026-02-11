export interface Stockist {
  name: string;
  type: "bar" | "restaurant" | "shop" | "bottle-shop";
  address: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
}

export const stockists: Stockist[] = [
  // Belgium - Ghent (home base)
  { name: "Bar Mirwaar", type: "bar", address: "Onderbergen 4", city: "Ghent", country: "BE", lat: 51.0538, lng: 3.7200 },
  { name: "Café Commerce", type: "bar", address: "Kouter 22", city: "Ghent", country: "BE", lat: 51.0497, lng: 3.7250 },
  { name: "Holy Food Market", type: "restaurant", address: "Beverhoutplein 1", city: "Ghent", country: "BE", lat: 51.0554, lng: 3.7235 },
  { name: "Drankencentrale", type: "bottle-shop", address: "Groentenmarkt 7", city: "Ghent", country: "BE", lat: 51.0558, lng: 3.7198 },
  { name: "Tartine", type: "restaurant", address: "Corduwaniersstraat 15", city: "Ghent", country: "BE", lat: 51.0535, lng: 3.7230 },

  // Belgium - Antwerp
  { name: "Bar Paniek", type: "bar", address: "Marnixplaats 20", city: "Antwerp", country: "BE", lat: 51.2116, lng: 4.3950 },
  { name: "De Koninck", type: "bar", address: "Mechelsesteenweg 291", city: "Antwerp", country: "BE", lat: 51.2060, lng: 4.4160 },
  { name: "Dierenuin Drinks", type: "bottle-shop", address: "Lange Kievitstraat 88", city: "Antwerp", country: "BE", lat: 51.2173, lng: 4.4216 },
  { name: "Fiskebar", type: "restaurant", address: "Marnixplaats 12", city: "Antwerp", country: "BE", lat: 51.2115, lng: 4.3945 },

  // Belgium - Brussels
  { name: "Bar du Canal", type: "bar", address: "Rue Antoine Dansaert 57", city: "Brussels", country: "BE", lat: 50.8507, lng: 4.3441 },
  { name: "Moeder Lambic Original", type: "bar", address: "Rue de Savoie 68", city: "Brussels", country: "BE", lat: 50.8268, lng: 4.3441 },
  { name: "Nüetnigenansen", type: "bar", address: "Rue du Lombard 25", city: "Brussels", country: "BE", lat: 50.8441, lng: 4.3501 },
  { name: "Bio Planet Saint-Gilles", type: "shop", address: "Chaussée de Waterloo 25", city: "Brussels", country: "BE", lat: 50.8324, lng: 4.3497 },

  // Belgium - Other cities
  { name: "Bierhalle Leuven", type: "bar", address: "Oude Markt 33", city: "Leuven", country: "BE", lat: 50.8774, lng: 4.7007 },
  { name: "Café Vlissinghe", type: "bar", address: "Blekersstraat 2", city: "Bruges", country: "BE", lat: 51.2124, lng: 3.2283 },
  { name: "De Werf", type: "bar", address: "Werfstraat 108", city: "Bruges", country: "BE", lat: 51.2043, lng: 3.2210 },
  { name: "Café Belge", type: "bar", address: "Grote Markt 8", city: "Mechelen", country: "BE", lat: 51.0275, lng: 4.4792 },

  // Netherlands
  { name: "Bar Kantoor", type: "bar", address: "Linnaeusstraat 11", city: "Amsterdam", country: "NL", lat: 52.3612, lng: 4.9255 },
  { name: "Café de Ceuvel", type: "bar", address: "Korte Papaverweg 4", city: "Amsterdam", country: "NL", lat: 52.3908, lng: 4.9218 },
  { name: "Stelling van Amsterdam", type: "bottle-shop", address: "Spaarndammerdijk 59", city: "Amsterdam", country: "NL", lat: 52.3919, lng: 4.8789 },
  { name: "Kaapse Brouwers", type: "bar", address: "Fenixloods 54", city: "Rotterdam", country: "NL", lat: 51.9001, lng: 4.4871 },
  { name: "Witte de Withstraat Bar", type: "bar", address: "Witte de Withstraat 65", city: "Rotterdam", country: "NL", lat: 51.9143, lng: 4.4753 },
  { name: "De Prael Utrecht", type: "bar", address: "Twijnstraat 1", city: "Utrecht", country: "NL", lat: 52.0881, lng: 5.1208 },
  { name: "Olivier Utrecht", type: "restaurant", address: "Achter Clarenburg 6", city: "Utrecht", country: "NL", lat: 52.0875, lng: 5.1163 },
  { name: "Brix Food 'n Drink", type: "bar", address: "Wolfstraat 12", city: "The Hague", country: "NL", lat: 52.0762, lng: 4.3117 },

  // Germany
  { name: "Prater Garten", type: "bar", address: "Kastanienallee 7-9", city: "Berlin", country: "DE", lat: 52.5388, lng: 13.4134 },
  { name: "Markthalle Neun", type: "shop", address: "Eisenbahnstraße 42", city: "Berlin", country: "DE", lat: 52.5009, lng: 13.4324 },
  { name: "Drink syndikat", type: "bottle-shop", address: "Weserstraße 211", city: "Berlin", country: "DE", lat: 52.4852, lng: 13.4394 },
  { name: "Schankhalle Pfefferberg", type: "bar", address: "Schönhauser Allee 176", city: "Berlin", country: "DE", lat: 52.5338, lng: 13.4136 },
  { name: "Naiv", type: "bar", address: "Sandweg 67", city: "Frankfurt", country: "DE", lat: 50.1145, lng: 8.6967 },
  { name: "Getränke Oase", type: "shop", address: "Zülpicher Str. 26", city: "Cologne", country: "DE", lat: 50.9296, lng: 6.9371 },

  // France
  { name: "Le Syndicat", type: "bar", address: "51 Rue du Faubourg Saint-Denis", city: "Paris", country: "FR", lat: 48.8720, lng: 2.3540 },
  { name: "La Fine Mousse", type: "bar", address: "6 Avenue Jean Aicard", city: "Paris", country: "FR", lat: 48.8638, lng: 2.3838 },
  { name: "Cave Apicole", type: "bottle-shop", address: "18 Rue Mouffetard", city: "Paris", country: "FR", lat: 48.8461, lng: 2.3498 },
  { name: "La Capsule", type: "bar", address: "19 Rue des Trois Mollettes", city: "Lille", country: "FR", lat: 50.6368, lng: 3.0637 },
];
