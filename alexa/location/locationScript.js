/* TODO: these locations from https://www.thoughtco.com/improv-locations-and-settings-2712996 */

var locations = `Art Gallery
Ambulance
Adoption Clinic
Amazon Rainforest
Antique Store
Attic
Barbershop
Balcony
Boat
Bird's Nest
Blacksmith
Bakery
Butterly Habitat
Beaver Dam
Bootcamp
Castle
Cat Lady's House
Chessboard
Cheese Factory
Classroom Cemetery
(Inside a) Comic Book
Chiropractor's Office
Circus
Dance Studio
Dragon's Lair
Desert
Deep Sea Diving
Department of Motor Vehicles
Detention
Drunk Tank
Egypt
Elephant Sanctuary
Elf's Forest
Execution Chamber
Earthquake Preparedness Class
Ferris Wheel
Fire Station
Fishing Pond
Football Stadium
Future
Fortune Teller's Shop
Grocery Store
Golf Course
Ghost Town
Gondola
Garbage Dump
Garage
Goldmine
Gypsy Camp
Grand Canyon
Hardware Store
Helicopter
Henhouse
Hogwarts
Hospital
Hawaii
Igloo
Island (Tropical)
Iceberg
Ice Cream Shop
Ice Age
Jungle
Jet Pilot's Cockpit
Judge's Chambers
Jury Box
Jewelry Store
Jurassic Age
Karate Class
Karaoke Bar
Knight's Training Grounds
King Kong's Cage
Knitting Circle
Kangaroo Farm
Lagoon
Lighthouse
Library
LOST - The TV Show
Lifeboat
Lumberjack Camp
London
Laundromat
Make-up Counter
Marathon Finish Line
Mechanic's Shop
Moon
Mousetrap
Mummy's Tomb
(Inside a) Microwave
Mountain Top
Nursing Home
News Station
Neverland
Nature Trail
Nightclub
Newspaper Office
Orchestra Pit
Office Cubicle
Orchard
Outback (Australia)
Open House (Real Estate)
Optometrist

Picnic Spot
Panda Exhibit
Prom
Pirate Ship
Pet Store
Post Office
Photography Class
Police Station
Queen Elizabeth's Court
Quiz Show
Quicksand
Radio Program
Restaurant Grand Opening
Red Carpet (Movie Premiere)
Riverboat
(Inside a) Romance Novel
Robber's Hideout
Safari
School Lunchroom
School Nurse's Office
Santa's Workshop
Ski Slope
Spider Web
Summer Camp
Smurf Village
Softball Game
Spaceship
Second Hand Store
Submarine
Stable
Treehouse
Travel Agency
Truckstop
Theater Audition
Tidepool
Tribal Ceremony
Tourist Trap
Ugly Princess' Birthday Party
Underground
Underwater
Unemployment Office
Utopian Society
Vampire's Home
Volleyball Court
Volcano
Voting Booth
Witch's Cavern
Warehouse
White House
Waterslide Park
Wrestling Ring
Wild West
Woodshop Class
Wedding Ceremony
X-Ray Lab
Yard Sale
Yoga Class
Yearbook Club
Zeppelin (Blimp)
Zombie Vacation Spot
Zoo`;

var lines = locations.split('\n');

var randomIndex = Math.round((Math.random() * lines.length));

console.log(lines[randomIndex]);
