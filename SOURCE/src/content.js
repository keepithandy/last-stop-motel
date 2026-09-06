const VERSION = "1.0.2";
const DIFFICULTIES = {
  relaxed: { name: "Scenic route", cash: 1e3, debt: 1700, patience: 1.5, wear: 0.75, description: "More breathing room. $1,700 debt and patient travelers." },
  standard: { name: "The long week", cash: 750, debt: 2300, patience: 1, wear: 1, description: "The intended campaign. $2,300 debt and a motel to rebuild." },
  hard: { name: "Against the odds", cash: 650, debt: 2900, patience: 0.8, wear: 1.25, description: "A tight budget, harder wear, and a $2,900 debt." }
};
const GUESTS = [
  { id: "driver", title: "Long-haul driver", icon: "TR", budget: 120, comfort: 0, quiet: false, tip: 8, text: "A hot shower and a bed. That\u2019s all I need.", color: 14065760 },
  { id: "couple", title: "Road-trip couple", icon: "RT", budget: 165, comfort: 1, quiet: false, tip: 15, text: "We took the scenic route. Is there a nice room left?", color: 13340052 },
  { id: "family", title: "Traveling family", icon: "FA", budget: 165, comfort: 1, quiet: true, tip: 12, text: "The kids are finally asleep. Somewhere quiet, please.", color: 8894126 },
  { id: "worker", title: "Utility worker", icon: "UW", budget: 135, comfort: 0, quiet: false, tip: 5, text: "Early start tomorrow. I won\u2019t be any trouble.", color: 14792764 },
  { id: "writer", title: "Travel writer", icon: "TW", budget: 210, comfort: 2, quiet: true, tip: 22, text: "I\u2019m looking for a place with a little character.", color: 10268372 },
  { id: "biker", title: "Solo rider", icon: "SR", budget: 140, comfort: 0, quiet: false, tip: 10, text: "Keep an eye on the bike for me?", color: 12478556 },
  { id: "musician", title: "Touring musician", icon: "TM", budget: 180, comfort: 1, quiet: false, tip: 16, text: "The last show ran late. You\u2019re a lifesaver.", color: 10915769 },
  { id: "hiker", title: "Trail walker", icon: "HW", budget: 130, comfort: 0, quiet: true, tip: 9, text: "My feet have officially given up for the day.", color: 8432250 },
  { id: "sales", title: "Sales representative", icon: "SP", budget: 195, comfort: 2, quiet: false, tip: 18, text: "I practically live on this highway. Surprise me.", color: 7441327 },
  { id: "regular", title: "Returning local", icon: "RL", budget: 150, comfort: 1, quiet: true, tip: 20, text: "Your dad always kept a light on. Good to see it still lit.", color: 13080939 }
];
const NAMES = ["Alex Morgan", "Robin Hayes", "Sam Rivera", "Jamie Wells", "Taylor Reed", "Casey Brooks", "Jordan Ellis", "Avery Stone", "Drew Bennett", "Charlie West", "Blake Santos", "Riley Park", "Morgan Lane", "Quinn Foster", "Jess Harper", "Lee Carter", "Chris Bell", "Parker Young", "Skyler Cole", "Dakota Mills", "Frank Russo", "Mae Collins", "Bill Turner", "Nina Patel"];
const NIGHTS = [
  { title: "Keep the light on", weather: "Clear skies", blurb: "The keys are yours. Six rooms, a tired neon sign, and one week to settle the debt. Open the office. Someone will need a place to sleep.", demand: 8, events: ["welcome", "lost"], color: "#eea879" },
  { title: "A little word of mouth", weather: "Desert wind", blurb: "People are talking about the lights being back on. A few improvements could turn a stopover into somewhere people remember.", demand: 9, events: ["supplier", "noise"], color: "#e1a570" },
  { title: "Rain on the highway", weather: "Heavy rain", blurb: "The forecast is ugly. Check your rooms before opening; stranded travelers will be looking for dry beds.", demand: 11, events: ["storm", "stranded"], color: "#86b5c9" },
  { title: "The road remembers", weather: "Clear skies", blurb: "A travel column mentioned Route 86. Tonight\u2019s guests may expect a little more than a working lightbulb.", demand: 10, events: ["reviewer", "water"], color: "#c99bb4" },
  { title: "Full house country", weather: "Warm night", blurb: "The county fair is over and every room in town is booked. Put your best rooms to work.", demand: 13, events: ["fair", "wallet"], color: "#edb46d" },
  { title: "One more long night", weather: "Desert wind", blurb: "You can almost see the finish. Protect your cash, look after your people, and get through the rush.", demand: 12, events: ["staff", "sign"], color: "#d89a85" },
  { title: "A place worth keeping", weather: "Clear skies", blurb: "At sunrise the bank will call. Tonight is your last chance to make this place your own.", demand: 14, events: ["return", "offer"], color: "#f3b66e" }
];
const EVENTS = {
  welcome: { title: "Coffee from next door", body: "Mara from the diner drops off a pot of coffee. \u201CYour dad helped me get started. Let me return the favor.\u201D", choices: [{ label: "Put it out for the guests", detail: "+3 reputation", rep: 3 }, { label: "Take a quiet break with Mara", detail: "Restore 25 team energy", energy: 25 }] },
  lost: { title: "Wrong turn, empty tank", body: "An older traveler has lost the way home. They don\u2019t need a room, just some gas money and a little kindness.", choices: [{ label: "Help them get home", detail: "$30 \xB7 +5 reputation", cost: 30, rep: 5 }, { label: "Call the roadside service", detail: "+1 reputation", rep: 1 }] },
  supplier: { title: "A favor on the delivery route", body: "The linen supplier has a canceled order. You can buy the spare boxes at a discount tonight.", choices: [{ label: "Buy six linen bundles", detail: "$32 \xB7 +6 supplies", cost: 32, supplies: 6 }, { label: "Keep the cash for now", detail: "No change" }] },
  noise: { title: "A parking-lot jam session", body: "Someone has brought out a guitar. A few guests are gathering; a few others are trying to sleep.", choices: [{ label: "Move the music to the diner", detail: "$20 \xB7 +3 reputation \xB7 +5 guest happiness", cost: 20, rep: 3, happiness: 5 }, { label: "Call it a night", detail: "+2 reputation", rep: 2 }, { label: "Let them keep playing", detail: "+$35 in tips \xB7 \u22128 guest happiness", cash: 35, happiness: -8 }] },
  storm: { title: "The lights go out", body: "Rain knocks out the road\u2019s power line. The emergency generator works, but its fuel tank is nearly empty.", choices: [{ label: "Buy emergency fuel", detail: "$55 \xB7 keep everyone comfortable", cost: 55, rep: 2 }, { label: "Bring out lanterns and blankets", detail: "2 supplies \xB7 \u22125 guest happiness", supplies: -2, happiness: -5 }, { label: "Wait for the line crew", detail: "\u221215 guest happiness", happiness: -15 }] },
  stranded: { title: "The last bus broke down", body: "The bus driver asks if the passengers can wait in your office until a replacement arrives.", choices: [{ label: "Make room and serve coffee", detail: "$25 \xB7 +6 reputation", cost: 25, rep: 6 }, { label: "Offer shelter on the porch", detail: "+2 reputation", rep: 2 }] },
  reviewer: { title: "A notebook at the front desk", body: "A writer is putting together a guide to roadside places. \u201CWhat should people know about yours?\u201D", choices: [{ label: "Let the hospitality speak", detail: "+6 reputation if average room quality is at least 1; otherwise +2", special: "review" }, { label: "Sponsor a spot in the guide", detail: "$85 \xB7 +7 reputation", cost: 85, rep: 7 }] },
  water: { title: "A pipe behind the laundry", body: "The old pipe has started to seep. A proper repair costs money, but a quick patch will hold for tonight.", choices: [{ label: "Replace the fitting", detail: "$45 \xB7 restore 8 condition to every room", cost: 45, condition: 8 }, { label: "Patch it carefully", detail: "1 supply \xB7 restore 2 condition to every room", supplies: -1, condition: 2 }, { label: "Put a bucket under it", detail: "\u22126 condition to every room", condition: -6 }] },
  fair: { title: "A table for the fair", body: "The fair organizer wants to send visitors your way. A small donation gets your motel on the evening announcement.", choices: [{ label: "Sponsor the announcement", detail: "$50 \xB7 +5 reputation \xB7 +1 traveler", cost: 50, rep: 5, extra: 1 }, { label: "Wish them a good evening", detail: "+1 reputation", rep: 1 }] },
  wallet: { title: "Cash under the dresser", body: "A cleaner finds an envelope with $100 and a guest\u2019s name. Their phone number is still in the register.", choices: [{ label: "Call and return it", detail: "+7 reputation \xB7 $20 thank-you tip", rep: 7, cash: 20 }, { label: "Hold it safely at the office", detail: "+3 reputation", rep: 3 }] },
  staff: { title: "Dinner for the night crew", body: "It has been a long week. Mara can send over dinner for everyone working tonight.", choices: [{ label: "Dinner is on the house", detail: "$35 \xB7 restore 40 team energy", cost: 35, energy: 40 }, { label: "Take turns having a break", detail: "Restore 15 team energy", energy: 15 }] },
  sign: { title: "The sign starts buzzing", body: "The neon transformer is hot again. You can get an electrician tonight, or dim the sign and finish the shift.", choices: [{ label: "Call the electrician", detail: "$45 \xB7 +3 reputation", cost: 45, rep: 3 }, { label: "Dim the sign until morning", detail: "\u22122 reputation", rep: -2 }] },
  return: { title: "A familiar face", body: "Mara comes by again. \u201CWhatever happens with the bank, this place feels alive. You did that.\u201D", choices: [{ label: "Put on another pot of coffee", detail: "$20 \xB7 +5 reputation \xB7 +8 guest happiness", cost: 20, rep: 5, happiness: 8 }, { label: "Thank everyone on the team", detail: "Restore 30 team energy \xB7 +2 reputation", energy: 30, rep: 2 }] },
  offer: { title: "An offer from the bank", body: "The loan officer calls before closing. A local heritage fund will cover part of the debt if your reputation is at least 70.", choices: [{ label: "Apply for the heritage grant", detail: "If reputation \u226570: debt reduced by $250; otherwise no change", special: "grant" }, { label: "Make it on your own", detail: "+3 reputation", rep: 3 }] }
};
const UPGRADES = [
  { id: "coffee", name: "Coffee station", cost: 110, description: "+6 happiness for every new guest. A warm welcome goes a long way." },
  { id: "sign", name: "Restore the neon", cost: 150, description: "+1 traveler each night, +4 reputation, and a brighter roadside sign." },
  { id: "laundry", name: "Laundry overhaul", cost: 190, description: "Cleaning takes 35% less time." },
  { id: "garden", name: "Courtyard garden", cost: 130, description: "+4 happiness for new guests and +4 reputation." },
  { id: "tools", name: "Maintenance bench", cost: 180, description: "Repairs take 35% less time." },
  { id: "insulation", name: "Soundproof windows", cost: 220, description: "Every room becomes quiet. No roadside noise penalty." }
];
const ACHIEVEMENTS = [
  { id: "first", name: "The light is on", description: "Check in your first traveler." },
  { id: "full", name: "No vacancy", description: "Host six travelers at the same time." },
  { id: "kind", name: "A familiar stop", description: "Reach 80 reputation." },
  { id: "luxury", name: "Roadside luxury", description: "Upgrade a room to quality 3." },
  { id: "expand", name: "Room to grow", description: "Reopen all four west-wing rooms." },
  { id: "team", name: "All hands", description: "Employ three staff members." },
  { id: "care", name: "Above and beyond", description: "Resolve ten guest requests." },
  { id: "fifty", name: "Miles of stories", description: "Host fifty travelers in one game." },
  { id: "finish", name: "A place worth keeping", description: "Pay the debt and finish the campaign." },
  { id: "hard", name: "Against the odds", description: "Finish the hardest campaign." },
  { id: "perfect", name: "Five-star roadside", description: "Finish with at least 85 reputation." },
  { id: "honest", name: "On your own two feet", description: "Finish without taking the emergency loan." }
];
const STAFF = [
  { id: "rosa", name: "Rosa", role: "Housekeeper", hire: 90, wage: 26, speed: 1.45, description: "An experienced cleaner. Works through dirty rooms automatically." },
  { id: "eli", name: "Eli", role: "Maintenance", hire: 100, wage: 30, speed: 1.5, description: "Repairs rooms below 65 condition when parts are available." },
  { id: "june", name: "June", role: "Guest services", hire: 110, wage: 28, speed: 1.2, description: "Handles guest requests automatically when supplies are available." }
];
const REQUESTS = [
  { id: "towels", name: "Fresh towels", text: "Could we get a couple of extra towels?", supplies: 1, duration: 12 },
  { id: "lamp", name: "A flickering lamp", text: "The bedside light keeps flickering.", supplies: 0, duration: 16 },
  { id: "blanket", name: "An extra blanket", text: "It\u2019s colder out here than we expected.", supplies: 1, duration: 12 },
  { id: "directions", name: "Morning directions", text: "Which road gets us to the canyon?", supplies: 0, duration: 8 }
];
export {
  ACHIEVEMENTS,
  DIFFICULTIES,
  EVENTS,
  GUESTS,
  NAMES,
  NIGHTS,
  REQUESTS,
  STAFF,
  UPGRADES,
  VERSION
};
