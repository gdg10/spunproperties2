import Property from "./Property";
import bushkillImages from "./bushkill";
import barnsdaleImages from "./barnsdale";
import riverImages from "./river";
import martinsImages from "./martins";
import bobalewImgages from "./bobalew";
import northImages from "./north";
import arbImages from './arb';
import texasImages from './texas';

const SpunProperties = [
  {
    route: "1508Bushkill",
    active: false,
    archived: true,
    featured: false,
    address: "1508 Bushkill St, Easton, PA 18042",
    price: "$250,000",
    details: "3 bd | 1.5 ba | 1,734 sqft",
    listingAgent: "Brendan Grube",
    listingAgentsPhone: "9083295619",
    description:
      "Move-in ready, this newly renovated and updated classic colonial is located on a highly desirable, tree-lined side street. Some of the outstanding finishes include a totally new kitchen, updated bathrooms, refinished hardwood floors, new central air system, furnace and water heater. Large bedrooms, brick fireplace, first floor laundry room, den and a freshly painted basement makes this an attractive home. The property has off-street parking, a covered patio and a large back yard for pets or gardening. Owner may help with closing costs.",
    cardImage: bushkillImages[12],
    imageGallery: bushkillImages
  },
  {
    route: "805Barnsdale",
    active: false,
    archived: true,
    featured: true,
    address: "805 Barnsdale Rd, Bethlehem, PA 18017",
    price: "$379,000",
    details: "4 bd | 3 ba | 2,314 sqft",
    listingAgent: "Michael Volpone",
    listingAgentsPhone: "5702691930",
    description: "Completely renovated 4 bedroom home located in desirable area. New kitchen features quartz counter tops and all new appliances, All bathrooms are new, new flooring throughout, New heating system, central air and hot water heater. Corner lot in beautiful Bethlehem. Must see!",
    cardImage: barnsdaleImages[1],
    imageGallery: barnsdaleImages
  },
  {
    route: "3480River",
    active: true,
    archived: false,
    featured: false,
    address: "3480 River Rd, Mount Bethel, PA 18343",
    price: "$429,900",
    details: "3 bd | 2 ba | 1,200 sqft",
    listingAgent: "Alexis Geleta-Oakley",
    listingAgentsPhone: "610428-2952",
    description:
      "Living is easy along the river with all this home has to offer! You can enjoy an open floor plan with sun filled rooms, remarkable views of the Delaware River, and rights to use the boat launch. Tastefully done, this home offers a wall of Anderson thermopane windowsand doors, leading out to a 50' wrap around deck. A warm and inviting interior boasts beautiful vaulted cedar ceilings, a custom kitchen, hardwood floors, plus a 3 seasons room. The master bedroom has a full bath and sliding doors to the deck. Two additional bedrooms, a modern bath, and loft space can be perfect for guests. The decorative lattice slides open to a 2 car garage and entrance to the basement. Included is 146' river lot, geo thermal heat, and back up generator. Convenient to RT 80. Flood ins. not required.",
    cardImage: riverImages[10],
    imageGallery: riverImages
  },
  {
    route: "641Martins",
    active: true,
    archived: false,
    featured: false,
    address: "641 Martins Ln, Bethlehem, PA 18018",
    price: "$125,000",
    details: "3 bd | 1 ba | 820 sqft",
    listingAgent: "Eric Huber",
    listingAgentsPhone: "4843757592",
    description:
      "Completely renovated 2-3 bedroom West Bethlehem twin less than 1/2 mile from historic downtown Bethlehem. This home features a modern kitchen with granite counters, shaker-style cabinets, stainless steel appliances and luxury plank flooring. Updated bathroom with a subway tile shower/tub combo, new vanity and flooring. All carpeting is brand new, windows are new, and the entire home has been freshly painted. 3rd floor is fully finished and could be used as a 3rd bedroom or office, studio, playroom, etc. The home is in a quiet neighborhood with a nice sized yard, private covered patio and large storage shed. Economic gas heat and taxes under $2000/yr make this home even more of a catch! Own this home for less than you're paying in rent and be within walking distance of all that downtown Bethlehem has to offer. Nothing to do but move right in so don't miss out - schedule your showing today!",
    cardImage: martinsImages[0],
    imageGallery: martinsImages
  },
  {
    route: "1660Bobalew",
    active: false,
    archived: true,
    featured: false,
    address: "1660 Bobalew Trail Allentown, PA 18103",
    price: "$529,000",
    details: "4 bd | 2.5 ba | 5,764 sqft",
    listingAgent: "Eric Huber",
    listingAgentsPhone: "4843757592",
    description: "SOUTH MOUNTAIN hideaway on 1.66 ac. This 3300+sf custom-built contemporary offers privacy galore & beautiful views of nature from every room. This slice of paradise wouldn't be complete without a wooden deck that spans the width of the home and runs at least 24 feet deep into the woods (enhanced by exterior lighting). Home is accented w/soaring ceilings, new skylights, flr-to-ceiling windows & new modern lighting. Freshly painted, natural cherry-stained trim, 6-panel solid wood doors, hrdwd flrs, marble & ceramic tile flrs, & new neutral carptng. Spac 1st flr master suite w/inviting, relaxing jacuzzi overlooking the tranquility of wildlife. 2nd bdrm/in-home office is found on this level.",
    cardImage: bobalewImgages[0],
    imageGallery: bobalewImgages
  },
  {
    route: "1150North",
    active: false,
    archived: true,
    featured: false,
    address: "1150 North 28th Street Allentown, PA 18104",
    price: "$309,900",
    details: "4 bd | 2 ba | 2,737 sqft",
    listingAgent: "Lynn Zegalia",
    listingAgentsPhone: "4847882394",
    description:
      "Beautiful Single Home in Parkland School District! This 4 Bedroom, 2 ½ Bath Colonial is located on a great corner lot. Huge sunken Living Room with fireplace open to Dining Room. Spacious eat-in kitchen has granite countertops and new stainless appliances. Family room/den has access to rear yard. Hardwood floors throughout! Master Bedroom suite has sitting area with a fireplace, walk-in closet and full bath. Three other large bedrooms and full bath complete the second floor. Basement is partially finished. Entire house is freshly painted, new Light fixtures and new faucets in kitchen and baths. Great location close to shopping center, restaurants and major highways. This is a must see!",
    cardImage: northImages[0],
    imageGallery: northImages
  },
  {
    route: "6719Arb",
    active: true,
    archived: false,
    featured: false,
    address: "6719 Arbordeau Ln, Macungie, PA 18062",
    price: "$499,500",
    details: "4 bd | 2.5 ba |3,363 sqft",
    listingAgent: "",
    listingAgentsPhone: "",
    description:
      "Welcome to desirable Beaumont at Brookside. This beauty is ready for its new owner. It has over 3300 sqft of living space with 4 bedrooms 2.5 baths. The first floor features a large cathedral ceiling family room that opens into a nice size kitchen which would be great for family get-togethers or for entertaining guests. This bright and airy open concept also let the dining room, living room and office/den connect and flow into the family room. Upstairs you will find a spacious master suite with a sitting area along with a master bath and a walk-in closet, three additional nice size bedrooms and a full bath. The full basement could be turned into a super man cave, family room, home gym or an inlaw suite. This home shows well and is ready for your personal touch to make it your own; also conveniently located near schools, parks, shops, restaurants and major highways.",
    cardImage: arbImages[0],
    imageGallery: arbImages
  },
  {
    route: "5015Texas",
    active: true,
    archived: false,
    featured: false,
    address: "5015 E. Texas Rd, Macungie, PA 18062",
    price: "$549,900",
    details: "5 bd | 4 ba | 3, 678 sqft",
    listingAgent: "",
    listingAgentsPhone: "",
    description:
      "Welcome to desirable Beaumont at Brookside. This beauty is ready for its new owner. It has over 3300 sqft of living space with 4 bedrooms 2.5 baths. The first floor features a large cathedral ceiling family room that opens into a nice size kitchen which would be great for family get-togethers or for entertaining guests. This bright and airy open concept also let the dining room, living room and office/den connect and flow into the family room. Upstairs you will find a spacious master suite with a sitting area along with a master bath and a walk-in closet, three additional nice size bedrooms and a full bath. The full basement could be turned into a super man cave, family room, home gym or an inlaw suite. This home shows well and is ready for your personal touch to make it your own; also conveniently located near schools, parks, shops, restaurants and major highways.",
    cardImage: texasImages[0],
    imageGallery: texasImages
  }
];

export { Property };
export { SpunProperties };
