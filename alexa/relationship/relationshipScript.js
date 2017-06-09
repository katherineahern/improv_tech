/* TODO: these relationships from https://www.quora.com/What-are-common-character-relationships-in-improv */

var relationships = `Husband-wife
Boyfriend-girlfriend (or girlfriend-girlfriend or boyfriend-boyfriend)
Father-son (or Father-daughter)
Mother-son (or Mother-daughter)
Grandfather-grandson (or Grandfather-granddaugher)Grandmother-grandson (or Grandmother-granddaugther)
Bride-Groom
Groom-Best Man
Bride-Maid of Honor
College Roomates
Friends (Old Friends, Kids, Girls, Guys)
Neighbors
Officer-Soldier
Admiral-Sailor
President-Aide
Senator-Senator
Clerk-Customer
Waiter-Diner
Chef-Assistant
Master-Dog
Dog-Dog
Cat-Cat
Dog-Cat
Chief-Indian
Kung Fu Master-Student
Teacher-Student
King-Queen
Driver-Passenger
Bartender-Customer
Boss-Employee
Co-Workers
Artist-Model
Mad Scientist-Assistant
Cowboy-Indian
Cowboys
Coach-Player (Football, Baseball, Basketball, Hockey)
Boxer-Trainer
Boxer-Boxer
Fellow Soldiers
Sergeant-Private
President-First Lady
Brothers (or Sisters or Brother-Sister)
Priest-Parishoner
Bandmates
Lawyer-Judge
Lawyer-Client
Knight-Lady
Cops (Partners)
Cop-Captain
Detective-Dame
Robber-Victim
Fellow Witches (or Ghosts, Vampires, Werewolves)
Blind Dates
Fellow Politicians
Rival Generals
Captor-Prisoner
Fellow Gods
God-Devil
Jesus-Apostle
Fellow Coal Miners
Pilot-Flight Attendant
Flight Attendant-Passenger
Passenger-Passenger
Ship Captain-First Mate
Knight-Dragon
Wizard-Apprentice
Magician-Assistant
Landlord-Tenant
Mafia Godfather-Henchman
Fellow Assembly Line Workers
Car Salesman-Customer
Mechanic-Customer
Barber-Customer
Yoga Master-Yoga Doer (?)
Trainer-Trainee
Carpenter-Assistant
Doctor-Patient
Doctor-Doctor
Doctor-Nurse
Missionary-Potential Convertee
Catchter-Batter
Salesman-Prospect
Actor-Director
Santa Claus-Easter Bunny
Transformers
Creator-Creation
Billionaire-Servant (Maid, Butler, Chauffer, Assistant)
Boss-Secretary
Fire Chief-Fireman
Co-Pilots
Guards
Warden-Prisoner
Cop-Criminal
Mentor-Mentee
Genie-Wisher
Fellow Explorers
Loanshark-Victim
 Fellow Astronauts
1Lovers
1Winner-Loser`;

var lines = relationships.split('\n');

var randomIndex = Math.round((Math.random() * lines.length));

console.log(lines[randomIndex]);
