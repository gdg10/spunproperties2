import Property from "./Property";
import bushkillImages from "./bushkill";
import barnsdaleImages from "./barnsdale";
import riverImages from "./river";
import martinsImages from "./martins";
import bobalewImgages from "./bobalew";
import northImages from "./north";
import texasImages from "./texas";
import pineImages from "./pine";
import birchImages from "./birch";
import pattenImages from "./patten";
import sycImages from "./syc";
import nevilleImages from './neville';
import polkImages from './polk';

const SpunProperties = [
  {
    route: "272Patten",
    active: true,
    archived: false,
    featured: false,
    address: "272 Patten Circle, Albrightsville, PA 18210",
    price: "$385,000",
    details: "5 bd | 4.5 ba | 4,544 sqft",
    listingAgent: "Jim Christman",
    listingAgentsPhone: "",
    description:
      "A Gorgeous 4500 Square Foot, Custom Built, Executive Home on 8 private Acres!! This home is a 5 bedroom, 5.5 Bathroom includes 4 Master Suites with private bathrooms! A TRUE Chef's dream kitchen with burner gas range with 2 grills and dbl oven, center island, pantry and pull out shelving. Every room in the home is generously sized to entertain/enjoy with Family/Friends. The home is very efficient with 3 zoned, Radiant Heat Throughout and Brand New Solar Panels. Beautiful deck to enjoy that morning cup of coffee! Huge walk out basement is a blank canvas for a Home Gym or Theater. A 3 Car Detached Garage with a 2nd floor. This home is move in ready and very comfortable and solid home!! Minutes from Rtes. 209, 248, and turnpike.",
    cardImage: pattenImages[10],
    imageGallery: pattenImages
  },
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
    featured: false,
    address: "805 Barnsdale Rd, Bethlehem, PA 18017",
    price: "$379,000",
    details: "4 bd | 3 ba | 2,314 sqft",
    listingAgent: "Michael Volpone",
    listingAgentsPhone: "5702691930",
    description:
      "Completely renovated 4 bedroom home located in desirable area. New kitchen features quartz counter tops and all new appliances, All bathrooms are new, new flooring throughout, New heating system, central air and hot water heater. Corner lot in beautiful Bethlehem. Must see!",
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
    active: false,
    archived: true,
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
    listingAgent: "Beth Anne Cannon",
    listingAgentsPhone: "4843757592",
    description:
      "SOUTH MOUNTAIN hideaway on 1.66 ac. This 3300+sf custom-built contemporary offers privacy galore & beautiful views of nature from every room. This slice of paradise wouldn't be complete without a wooden deck that spans the width of the home and runs at least 24 feet deep into the woods (enhanced by exterior lighting). Home is accented w/soaring ceilings, new skylights, flr-to-ceiling windows & new modern lighting. Freshly painted, natural cherry-stained trim, 6-panel solid wood doors, hrdwd flrs, marble & ceramic tile flrs, & new neutral carptng. Spac 1st flr master suite w/inviting, relaxing jacuzzi overlooking the tranquility of wildlife. 2nd bdrm/in-home office is found on this level.",
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
    route: "5015Texas",
    active: false,
    archived: true,
    featured: false,
    address: "5015 E. Texas Rd, Macungie, PA 18062",
    price: "$549,900",
    details: "5 bd | 4 ba | 3,678 sqft",
    listingAgent: "Dale Wallace",
    listingAgentsPhone: "6106571000",
    description:
      "Decorated Model Home for Sale ~ Brand-new, Elegant 3, 592 SF 5 Bedroom, 4 Bath Colonial in East Penn Schools. Chef~s Dream Open Concept Gourmet Kitchen with Oversized Island and Granite Countertops and a walkout Eating Area. Gorgeous stone fireplace in the family room adjoins kitchen. Exquisite tile work throughout the home. An inviting front porch for relaxation. Plenty of accent lighting throughout home. Beautiful 1st floor master with a luxurious en-suite and 4 more bedrooms (2nd floor Master also and 3 additional bedrooms. Possible multi-generational area with 1st floor bedroom suite.) Hardwood floors throughout first floor, staircase and upstairs hallway. Full basement with 2 egress windows. Oversized 2 car garage with an additional 7~8~ x 12' storage area. Convenient to all major shopping. This beautiful home will sell quickly. Grading, seeding and driveway to be completed within 30 days. 2nd Lot available to build your dream home.",
    cardImage: texasImages[0],
    imageGallery: texasImages
  },
  {
    route: "1205Pine",
    active: false,
    archived: true,
    featured: false,
    address: "1205 Pine Grove Dr, Easton, PA 18045",
    price: "$329,500",
    details: "4 bd | 2 ba | 2,188 sqft",
    listingAgent: "Janice Steckel",
    listingAgentsPhone: "",
    description:
      "A spacious 4 Bedroom, 2.5 Bath Bi-level home, in a desirable, quiet Palmer Township location, situated on a nice-sized lot with mature trees and private fenced in backyard! Convenient location for commuting and close to shopping, schools, restaurants and entertainment. 1st level has eat-in-kitchen, dining room, large living room and 3 ample-sized bedrooms. Master has its own bathroom, and there is a 2nd full bathroom on this floor. Downstairs, enjoy the huge Family Room with Brick Wood-burning Fireplace, wonderful for family & friend gatherings and parties. Also on this level is a large 4th bedroom and a 1/2 bath, for possible extended family living. Off the family room is a 3 season room, which opens to a deck and private backyard. Side entry Large 2-car garage & utility shed. Lots of room for the growing family in this one! Schedule your showing today!",
    cardImage: pineImages[0],
    imageGallery: pineImages
  },
  {
    route: "790Birch",
    active: true,
    archived: false,
    featured: false,
    address: "790 Birch Ave, Pen Argyl, PA 18072",
    price: "$425,000",
    details: "5 bd | 5 ba | 3,386 sqft",
    listingAgent: "Michael Volpone",
    listingAgentsPhone: "",
    description:
      "Remodeled Center Hall Colonial in Upscale neighborhood features spacious kitchen with Island, 42' cabinets, granite counters and new stainless appliances. 9' Ceilings throughout first floor. Floor to ceiling stone fireplace in Family room. Master Suite with 3 walk-in Closets and large bath with soaking tub. Spacious bedrooms all have walk-in closets. Lower level has lots of room for entertaining, with full wet bar and 2 Baths. Also has possibilities for extended living quarters with 5th bedroom. 2 walk outs lead to expansive multi level decking. Make your apt today!",
    cardImage: birchImages[0],
    imageGallery: birchImages
  },
  {
    route: "1824Syc",
    active: true,
    archived: false,
    featured: true,
    address: "1824 Sycamore Street, Bethlehem, PA 18017",
    price: "$414,900",
    details: "4 bd | 3 ba | 2,862 sqft",
    listingAgent: "Meryl Cooper",
    listingAgentsPhone: "",
    description:
      "Welcome to 1824 Sycamore Street. This elegant home in the premier neighborhood of Edgeboro and located on a beautiful street, lined with Sycamore trees. The classic 1925 all brick home has been meticulously maintained to the era as well as updated for modern convenience. On the first floor an updated kitchen is a cooks delight, with cherry cabinets ,SS appliances, granite, back splash and breakfast bar. You will enjoy entertaining your family and friends in your large DR. On those chilly nights unwind in the living room with wood a burning fireplace. There is also a FR that opens up to a large deck with hot tub and courtyard. On the 2nd floor find 3 nice sized bedrooms and updated gorgeous bath. Walk upstairs to the 3rd floor and find a 4th bedroom with ensuite bath. This home is only minutes away from historic downtown Bethlehem.",
    cardImage: sycImages[0],
    imageGallery: sycImages
  },
  {
    route: "3547nev",
    active: true,
    archived: false,
    featured: false,
    address: "3547 Neville Way, Upper Nazareth Twp, PA 18064",
    price: "$269,900",
    details: "3 bd | 2.5 ba | 1,923 sqft",
    listingAgent: "Noelle Seaton",
    listingAgentsPhone: "",
    description:
      "Gorgeous Upper Nazareth end unit townhouse adjacent to the community park! First floor boasts beautiful cherry hardwood floors and custom wood wainscoting in the dining room, crown molding, and new trim through out, granite with custom designed peninsula and counter overhang, stainless appliances with dual fuel Bosch stove/range, and new half bathroom with luxury finishes. Off of the kitchen is a 10 x 20 Trex deck (2018) that overlooks the park. The second floor has 3 nice sized bedrooms, 2 full baths, and laundry room. The master has been upgraded with crown molding, an extra large walk-in closet, walk in tile shower, and double vanity. The basement is fully finished with 3 large closets and a separate room that can be used as a office or bedroom. This home has been freshly painted, renovated, and greatly cared for! HOA covers landscaping, grass, and trash. Close to highways and shopping - it's a MUST SEE!",
    cardImage: nevilleImages[0],
    imageGallery: nevilleImages
  },
  {
    route: "polk2354",
    active: true,
    archived: false,
    featured: false,
    address: "2354 Polk Valley Rd, Hellertown, PA 18055",
    price: "$215,000",
    details: "3 bd | 1 ba | 1,188 sqft",
    listingAgent: "Scott Moyer",
    listingAgentsPhone: "",
    description:
      "Cute bungalow ranch home in the desirable Saucon Valley School District. New roof, windows and exterior doors, siding and electrical panel. The interior is gutted and awaits your design ideas. Set up for 3 bedrooms and 1 bath, but two of the bedrooms could easily be converted to a master suite. After renovation, this would be a great starter home or perfect for retirees looking for one floor living. Home being sold as is.",
    cardImage: polkImages[0],
    imageGallery: polkImages
  }
];

export { Property };
export { SpunProperties };
