(()=>{var Di="1.0.2",Un={relaxed:{name:"Scenic route",cash:1e3,debt:1700,patience:1.5,wear:.75,description:"More breathing room. $1,700 debt and patient travelers."},standard:{name:"The long week",cash:750,debt:2300,patience:1,wear:1,description:"The intended campaign. $2,300 debt and a motel to rebuild."},hard:{name:"Against the odds",cash:650,debt:2900,patience:.8,wear:1.25,description:"A tight budget, harder wear, and a $2,900 debt."}},Oo=[{id:"driver",title:"Long-haul driver",icon:"TR",budget:120,comfort:0,quiet:!1,tip:8,text:"A hot shower and a bed. That\u2019s all I need.",color:14065760},{id:"couple",title:"Road-trip couple",icon:"RT",budget:165,comfort:1,quiet:!1,tip:15,text:"We took the scenic route. Is there a nice room left?",color:13340052},{id:"family",title:"Traveling family",icon:"FA",budget:165,comfort:1,quiet:!0,tip:12,text:"The kids are finally asleep. Somewhere quiet, please.",color:8894126},{id:"worker",title:"Utility worker",icon:"UW",budget:135,comfort:0,quiet:!1,tip:5,text:"Early start tomorrow. I won\u2019t be any trouble.",color:14792764},{id:"writer",title:"Travel writer",icon:"TW",budget:210,comfort:2,quiet:!0,tip:22,text:"I\u2019m looking for a place with a little character.",color:10268372},{id:"biker",title:"Solo rider",icon:"SR",budget:140,comfort:0,quiet:!1,tip:10,text:"Keep an eye on the bike for me?",color:12478556},{id:"musician",title:"Touring musician",icon:"TM",budget:180,comfort:1,quiet:!1,tip:16,text:"The last show ran late. You\u2019re a lifesaver.",color:10915769},{id:"hiker",title:"Trail walker",icon:"HW",budget:130,comfort:0,quiet:!0,tip:9,text:"My feet have officially given up for the day.",color:8432250},{id:"sales",title:"Sales representative",icon:"SP",budget:195,comfort:2,quiet:!1,tip:18,text:"I practically live on this highway. Surprise me.",color:7441327},{id:"regular",title:"Returning local",icon:"RL",budget:150,comfort:1,quiet:!0,tip:20,text:"Your dad always kept a light on. Good to see it still lit.",color:13080939}],Ic=["Alex Morgan","Robin Hayes","Sam Rivera","Jamie Wells","Taylor Reed","Casey Brooks","Jordan Ellis","Avery Stone","Drew Bennett","Charlie West","Blake Santos","Riley Park","Morgan Lane","Quinn Foster","Jess Harper","Lee Carter","Chris Bell","Parker Young","Skyler Cole","Dakota Mills","Frank Russo","Mae Collins","Bill Turner","Nina Patel"],Pc=[{title:"Keep the light on",weather:"Clear skies",blurb:"The keys are yours. Six rooms, a tired neon sign, and one week to settle the debt. Open the office. Someone will need a place to sleep.",demand:8,events:["welcome","lost"],color:"#eea879"},{title:"A little word of mouth",weather:"Desert wind",blurb:"People are talking about the lights being back on. A few improvements could turn a stopover into somewhere people remember.",demand:9,events:["supplier","noise"],color:"#e1a570"},{title:"Rain on the highway",weather:"Heavy rain",blurb:"The forecast is ugly. Check your rooms before opening; stranded travelers will be looking for dry beds.",demand:11,events:["storm","stranded"],color:"#86b5c9"},{title:"The road remembers",weather:"Clear skies",blurb:"A travel column mentioned Route 86. Tonight\u2019s guests may expect a little more than a working lightbulb.",demand:10,events:["reviewer","water"],color:"#c99bb4"},{title:"Full house country",weather:"Warm night",blurb:"The county fair is over and every room in town is booked. Put your best rooms to work.",demand:13,events:["fair","wallet"],color:"#edb46d"},{title:"One more long night",weather:"Desert wind",blurb:"You can almost see the finish. Protect your cash, look after your people, and get through the rush.",demand:12,events:["staff","sign"],color:"#d89a85"},{title:"A place worth keeping",weather:"Clear skies",blurb:"At sunrise the bank will call. Tonight is your last chance to make this place your own.",demand:14,events:["return","offer"],color:"#f3b66e"}],li={welcome:{title:"Coffee from next door",body:"Mara from the diner drops off a pot of coffee. \u201CYour dad helped me get started. Let me return the favor.\u201D",choices:[{label:"Put it out for the guests",detail:"+3 reputation",rep:3},{label:"Take a quiet break with Mara",detail:"Restore 25 team energy",energy:25}]},lost:{title:"Wrong turn, empty tank",body:"An older traveler has lost the way home. They don\u2019t need a room, just some gas money and a little kindness.",choices:[{label:"Help them get home",detail:"$30 \xB7 +5 reputation",cost:30,rep:5},{label:"Call the roadside service",detail:"+1 reputation",rep:1}]},supplier:{title:"A favor on the delivery route",body:"The linen supplier has a canceled order. You can buy the spare boxes at a discount tonight.",choices:[{label:"Buy six linen bundles",detail:"$32 \xB7 +6 supplies",cost:32,supplies:6},{label:"Keep the cash for now",detail:"No change"}]},noise:{title:"A parking-lot jam session",body:"Someone has brought out a guitar. A few guests are gathering; a few others are trying to sleep.",choices:[{label:"Move the music to the diner",detail:"$20 \xB7 +3 reputation \xB7 +5 guest happiness",cost:20,rep:3,happiness:5},{label:"Call it a night",detail:"+2 reputation",rep:2},{label:"Let them keep playing",detail:"+$35 in tips \xB7 \u22128 guest happiness",cash:35,happiness:-8}]},storm:{title:"The lights go out",body:"Rain knocks out the road\u2019s power line. The emergency generator works, but its fuel tank is nearly empty.",choices:[{label:"Buy emergency fuel",detail:"$55 \xB7 keep everyone comfortable",cost:55,rep:2},{label:"Bring out lanterns and blankets",detail:"2 supplies \xB7 \u22125 guest happiness",supplies:-2,happiness:-5},{label:"Wait for the line crew",detail:"\u221215 guest happiness",happiness:-15}]},stranded:{title:"The last bus broke down",body:"The bus driver asks if the passengers can wait in your office until a replacement arrives.",choices:[{label:"Make room and serve coffee",detail:"$25 \xB7 +6 reputation",cost:25,rep:6},{label:"Offer shelter on the porch",detail:"+2 reputation",rep:2}]},reviewer:{title:"A notebook at the front desk",body:"A writer is putting together a guide to roadside places. \u201CWhat should people know about yours?\u201D",choices:[{label:"Let the hospitality speak",detail:"+6 reputation if average room quality is at least 1; otherwise +2",special:"review"},{label:"Sponsor a spot in the guide",detail:"$85 \xB7 +7 reputation",cost:85,rep:7}]},water:{title:"A pipe behind the laundry",body:"The old pipe has started to seep. A proper repair costs money, but a quick patch will hold for tonight.",choices:[{label:"Replace the fitting",detail:"$45 \xB7 restore 8 condition to every room",cost:45,condition:8},{label:"Patch it carefully",detail:"1 supply \xB7 restore 2 condition to every room",supplies:-1,condition:2},{label:"Put a bucket under it",detail:"\u22126 condition to every room",condition:-6}]},fair:{title:"A table for the fair",body:"The fair organizer wants to send visitors your way. A small donation gets your motel on the evening announcement.",choices:[{label:"Sponsor the announcement",detail:"$50 \xB7 +5 reputation \xB7 +1 traveler",cost:50,rep:5,extra:1},{label:"Wish them a good evening",detail:"+1 reputation",rep:1}]},wallet:{title:"Cash under the dresser",body:"A cleaner finds an envelope with $100 and a guest\u2019s name. Their phone number is still in the register.",choices:[{label:"Call and return it",detail:"+7 reputation \xB7 $20 thank-you tip",rep:7,cash:20},{label:"Hold it safely at the office",detail:"+3 reputation",rep:3}]},staff:{title:"Dinner for the night crew",body:"It has been a long week. Mara can send over dinner for everyone working tonight.",choices:[{label:"Dinner is on the house",detail:"$35 \xB7 restore 40 team energy",cost:35,energy:40},{label:"Take turns having a break",detail:"Restore 15 team energy",energy:15}]},sign:{title:"The sign starts buzzing",body:"The neon transformer is hot again. You can get an electrician tonight, or dim the sign and finish the shift.",choices:[{label:"Call the electrician",detail:"$45 \xB7 +3 reputation",cost:45,rep:3},{label:"Dim the sign until morning",detail:"\u22122 reputation",rep:-2}]},return:{title:"A familiar face",body:"Mara comes by again. \u201CWhatever happens with the bank, this place feels alive. You did that.\u201D",choices:[{label:"Put on another pot of coffee",detail:"$20 \xB7 +5 reputation \xB7 +8 guest happiness",cost:20,rep:5,happiness:8},{label:"Thank everyone on the team",detail:"Restore 30 team energy \xB7 +2 reputation",energy:30,rep:2}]},offer:{title:"An offer from the bank",body:"The loan officer calls before closing. A local heritage fund will cover part of the debt if your reputation is at least 70.",choices:[{label:"Apply for the heritage grant",detail:"If reputation \u226570: debt reduced by $250; otherwise no change",special:"grant"},{label:"Make it on your own",detail:"+3 reputation",rep:3}]}},Bs=[{id:"coffee",name:"Coffee station",cost:110,description:"+6 happiness for every new guest. A warm welcome goes a long way."},{id:"sign",name:"Restore the neon",cost:150,description:"+1 traveler each night, +4 reputation, and a brighter roadside sign."},{id:"laundry",name:"Laundry overhaul",cost:190,description:"Cleaning takes 35% less time."},{id:"garden",name:"Courtyard garden",cost:130,description:"+4 happiness for new guests and +4 reputation."},{id:"tools",name:"Maintenance bench",cost:180,description:"Repairs take 35% less time."},{id:"insulation",name:"Soundproof windows",cost:220,description:"Every room becomes quiet. No roadside noise penalty."}],Ui=[{id:"first",name:"The light is on",description:"Check in your first traveler."},{id:"full",name:"No vacancy",description:"Host six travelers at the same time."},{id:"kind",name:"A familiar stop",description:"Reach 80 reputation."},{id:"luxury",name:"Roadside luxury",description:"Upgrade a room to quality 3."},{id:"expand",name:"Room to grow",description:"Reopen all four west-wing rooms."},{id:"team",name:"All hands",description:"Employ three staff members."},{id:"care",name:"Above and beyond",description:"Resolve ten guest requests."},{id:"fifty",name:"Miles of stories",description:"Host fifty travelers in one game."},{id:"finish",name:"A place worth keeping",description:"Pay the debt and finish the campaign."},{id:"hard",name:"Against the odds",description:"Finish the hardest campaign."},{id:"perfect",name:"Five-star roadside",description:"Finish with at least 85 reputation."},{id:"honest",name:"On your own two feet",description:"Finish without taking the emergency loan."}],bn=[{id:"rosa",name:"Rosa",role:"Housekeeper",hire:90,wage:26,speed:1.45,description:"An experienced cleaner. Works through dirty rooms automatically."},{id:"eli",name:"Eli",role:"Maintenance",hire:100,wage:30,speed:1.5,description:"Repairs rooms below 65 condition when parts are available."},{id:"june",name:"June",role:"Guest services",hire:110,wage:28,speed:1.2,description:"Handles guest requests automatically when supplies are available."}],Bo=[{id:"towels",name:"Fresh towels",text:"Could we get a couple of extra towels?",supplies:1,duration:12},{id:"lamp",name:"A flickering lamp",text:"The bedside light keeps flickering.",supplies:0,duration:16},{id:"blanket",name:"An extra blanket",text:"It\u2019s colder out here than we expected.",supplies:1,duration:12},{id:"directions",name:"Morning directions",text:"Which road gets us to the canyon?",supplies:0,duration:8}];var je=(n,e,t)=>Math.max(e,Math.min(t,n)),Fi=n=>Math.round(n*100)/100;function ss(n){return n.seed=Math.imul(n.seed,1664525)+1013904223>>>0,n.seed/4294967296}var ko=(n,e)=>e[Math.floor(ss(n)*e.length)];function Ar(n="standard",e=Date.now()){let t=Object.hasOwn(Un,n)?Un[n]:Un.standard,i={version:Di,schema:1,difficulty:Object.hasOwn(Un,n)?n:"standard",seed:e>>>0,night:1,phase:"prep",minute:0,cash:t.cash,debt:t.debt,rep:50,supplies:12,rate:"standard",rooms:[],upgrades:[],staff:[],energy:100,playerJob:null,queue:[],arrivals:[],eventIndex:0,event:null,eventHistory:[],history:[],log:[],notifications:[],achievements:[],stats:{hosted:0,turned:0,requests:0,earned:0,spent:0,cleaned:0,repaired:0,upgraded:0},ledger:{income:0,expenses:0,tips:0,guests:0},endless:!1,loan:!1,emergencyDelivery:!1,lastReport:null,seenIntro:!1,outcome:null,nextId:1};for(let s=0;s<10;s++)i.rooms.push({id:s+1,number:101+s,open:s<6,quality:s===3?1:0,clean:s===1?35:s===4?50:100,condition:s===4?48:82,guest:null,job:null,request:null,quiet:s>=3});return Mn(i,"The keys are yours. Welcome to Last Stop Motel."),i}function Mn(n,e){n.log.unshift({night:n.night,time:Math.floor(n.minute),message:e}),n.log=n.log.slice(0,50)}function is(n,e,t="info"){n.notifications.push({id:n.nextId++,message:e,type:t}),n.notifications=n.notifications.slice(-10)}function gn(n,e){n.achievements.includes(e)||(n.achievements.push(e),is(n,`Achievement: ${e}`,"achievement"))}function ci(n,e){return n.cash<e?!1:(n.cash=Fi(n.cash-e),n.ledger.expenses+=e,n.stats.spent+=e,!0)}function Cr(n,e,t=!1){n.cash=Fi(n.cash+e),n.stats.earned+=e,t?n.ledger.tips+=e:n.ledger.income+=e}function Fn(n){return Pc[Math.min(n.night-1,6)]}function Oi(n,e){return({value:75,standard:100,premium:130}[n.rate]||100)+e.quality*25}function Ut(n){return n.open?n.job?{clean:"Cleaning",repair:"Repairing",service:"Guest service"}[n.job.type]||"Working":n.guest?"Occupied":n.clean<75?"Needs cleaning":n.condition<35?"Needs repair":"Ready":"Closed"}function Bi(n,e,t){let i=Oi(n,e),s=88;return s-=Math.max(0,t.comfort-e.quality)*14,s+=Math.max(0,e.quality-t.comfort)*4,s-=Math.max(0,80-e.condition)*.35,t.quiet&&!e.quiet&&!n.upgrades.includes("insulation")&&(s-=12),n.upgrades.includes("coffee")&&(s+=6),n.upgrades.includes("garden")&&(s+=4),n.rate==="value"&&(s+=5),{price:i,happiness:je(Math.round(s),10,100),affordable:i<=t.budget}}function Lc(n,e){let t=ko(n,Oo.filter(i=>n.night>2||i.comfort<2));return{...t,id:"g"+n.nextId++,name:ko(n,Ic),budget:t.budget+(n.night>4?10:0),arrive:20+e*29+Math.floor(ss(n)*12),patience:Math.round(80*Un[n.difficulty].patience),wait:0}}function Nc(n){if(n.phase!=="prep")return Pe("This night has already opened.");if(n.playerJob||n.rooms.some(i=>i.job))return Pe("Finish the current work before opening.");n.phase="night",n.minute=0,n.queue=[],n.event=null,n.eventIndex=0,n.emergencyDelivery=!1,n.ledger={income:0,expenses:0,tips:0,guests:0};let e=Fn(n).demand+(n.upgrades.includes("sign")?1:0)+(n.rep>=80?1:0)+(n.endless?Math.min(4,Math.floor((n.night-7)/3)):0);n.arrivals=Array.from({length:e},(i,s)=>Lc(n,s));let t=390/Math.max(1,e-1);return n.arrivals.forEach((i,s)=>i.arrive=Math.round(8+s*t)),n.energy=je(n.energy+20,0,100),Mn(n,`Night ${n.night}: ${Fn(n).title}. The office is open.`),Ft("The vacancy light is on.")}var Ft=n=>({ok:!0,message:n}),Pe=n=>({ok:!1,message:n});function ki(n){return["prep","night"].includes(n.phase)&&!n.event}function Dc(n,e,t){if(n.phase!=="night"||n.event)return Pe("The office is not taking check-ins right now.");let i=n.queue.find(a=>a.id===e),s=n.rooms.find(a=>a.id===Number(t));if(!i||!s)return Pe("Select a waiting guest and a room.");if(Ut(s)!=="Ready")return Pe("That room is not ready.");let r=Bi(n,s,i);return r.affordable?(s.guest={...i,happiness:r.happiness,paid:r.price,requestAt:n.minute+45+Math.floor(ss(n)*100),requestMade:!1},s.request=null,n.queue=n.queue.filter(a=>a.id!==e),Cr(n,r.price),n.stats.hosted++,n.ledger.guests++,Mn(n,`${i.name} checked into ${s.number} for $${r.price}.`),gn(n,"first"),n.rooms.filter(a=>a.guest).length>=6&&gn(n,"full"),n.stats.hosted>=50&&gn(n,"fifty"),Ft(`${i.name} \u2192 Room ${s.number} \xB7 +$${r.price}`)):Pe("That room costs more than this guest\u2019s budget. Lower the rate or choose another room.")}function Uc(n,e){if(!ki(n)||n.phase!=="night")return Pe("The desk is closed.");let t=n.queue.find(i=>i.id===e);return t?(n.queue=n.queue.filter(i=>i.id!==e),n.stats.turned++,Mn(n,`${t.name} was referred to another motel.`),Ft("You gave them directions to the next motel.")):Pe("That guest has left.")}function id(n,e){return n==="clean"?{cash:0,supplies:1,duration:26}:n==="repair"?{cash:18,supplies:1,duration:34}:{cash:0,supplies:e.request?.supplies||0,duration:e.request?.duration||12}}function zo(n,e,t,i="player"){if(!ki(n))return Pe("Finish the current decision first.");let s=n.rooms.find(h=>h.id===Number(e));if(!s?.open||s.job)return Pe("That room is unavailable or already being worked on.");if(t==="clean"&&(s.guest||s.clean>=100))return Pe("Only empty rooms that need cleaning can be cleaned.");if(t==="repair"&&s.condition>=100)return Pe("This room is already in good repair.");if(t==="service"&&(!s.guest||!s.request))return Pe("There is no request in this room.");if(!["clean","repair","service"].includes(t))return Pe("Unknown task.");if(i==="player"&&n.playerJob)return Pe("You are already working. Let the current task finish.");let r=i==="player"?null:n.staff.find(h=>h.id===i);if(i!=="player"&&(!r||r.job||!r.active))return Pe("That staff member is unavailable.");let a=id(t,s);if(n.supplies<a.supplies)return Pe("You need more supplies. Order them from the office.");if(n.cash<a.cash)return Pe("You need $18 for replacement parts.");ci(n,a.cash),n.supplies-=a.supplies;let o=r&&bn.find(h=>h.id===r.id)?.speed||1,c=n.energy<25?1.3:1,l=a.duration*c/o;return t==="clean"&&n.upgrades.includes("laundry")&&(l*=.65),t==="repair"&&n.upgrades.includes("tools")&&(l*=.65),s.job={type:t,worker:i,remaining:l,total:l},r?r.job=s.id:n.playerJob=s.id,n.energy=je(n.energy-3,0,100),Ft(`${t==="clean"?"Cleaning":t==="repair"?"Repairing":"Helping"} room ${s.number}.`)}function sd(n,e){let{type:t,worker:i}=e.job;if(t==="clean"&&(e.clean=100,n.stats.cleaned++),t==="repair"&&(e.condition=100,n.stats.repaired++,e.guest&&(e.guest.happiness=je(e.guest.happiness+5,0,100))),t==="service"&&(e.guest&&(e.guest.happiness=je(e.guest.happiness+12,0,100),n.stats.requests++,Cr(n,4,!0),n.stats.requests>=10&&gn(n,"care")),e.request=null),i==="player")n.playerJob=null;else{let s=n.staff.find(r=>r.id===i);s&&(s.job=null)}e.job=null,is(n,`Room ${e.number}: ${t==="clean"?"clean and ready":t==="repair"?"repairs complete":"request resolved"}.`,"success")}function rd(n){for(let e of n.staff){if(!e.active||e.job)continue;let t,i;e.id==="rosa"&&(i="clean",t=n.rooms.find(s=>s.open&&!s.guest&&!s.job&&s.clean<75)),e.id==="eli"&&(i="repair",t=n.rooms.find(s=>s.open&&!s.job&&s.condition<65)),e.id==="june"&&(i="service",t=n.rooms.find(s=>s.open&&!s.job&&s.request)),t&&zo(n,t.id,i,e.id)}}function Fc(n,e){if(!["prep","night"].includes(n.phase)||n.event)return;let t=je(Number(e)||0,0,60);for(;t>0&&!n.event&&["prep","night"].includes(n.phase);){let i=Math.min(1,t);t-=i,rd(n);for(let a of n.rooms)a.job&&(a.job.remaining-=i,a.job.remaining<=0&&sd(n,a));if(n.phase==="prep")continue;n.minute=Math.min(480,n.minute+i);let s=n.arrivals.filter(a=>a.arrive<=n.minute);n.arrivals=n.arrivals.filter(a=>a.arrive>n.minute);for(let a of s)n.queue.push(a),is(n,`${a.name} is waiting at the office.`);for(let a of[...n.queue])a.wait+=i,a.wait>=a.patience&&(n.queue=n.queue.filter(o=>o.id!==a.id),n.rep=je(n.rep-1,0,100),n.stats.turned++,Mn(n,`${a.name} left after waiting too long.`),is(n,"A traveler left the queue. \u22121 reputation.","warning"));for(let a of n.rooms){if(!a.guest)continue;let o=a.guest;!o.requestMade&&n.minute>=o.requestAt&&n.minute<440&&(o.requestMade=!0,ss(n)<.7&&(a.request={...ko(n,Bo),remaining:95,total:95},is(n,`Room ${a.number} has a guest request.`))),a.request&&!a.job&&(a.request.remaining-=i,a.request.remaining<=0&&(o.happiness=je(o.happiness-18,0,100),a.request=null,Mn(n,`Room ${a.number}'s request was left unanswered.`)))}let r=[115,300];if(n.eventIndex<2&&n.minute>=r[n.eventIndex]){let a=Fn(n).events[n.eventIndex];n.event=a,n.eventIndex++,Mn(n,li[a].title);break}if(n.minute>=480){ad(n);break}}rs(n)}function rs(n){n.rep>=80&&gn(n,"kind"),n.rooms.some(e=>e.quality===3)&&gn(n,"luxury"),n.rooms.every(e=>e.open)&&gn(n,"expand"),n.staff.length===3&&gn(n,"team")}function Oc(n,e){if(!n.event)return Pe("There is no decision waiting.");let t=li[n.event]?.choices[e];if(!t)return Pe("Choose an available response.");if(n.cash<(t.cost||0))return Pe("You do not have enough cash.");if(n.supplies+Math.min(0,t.supplies||0)<0)return Pe("You do not have enough supplies.");t.cost&&ci(n,t.cost),t.cash&&Cr(n,t.cash,!0),t.rep&&(n.rep=je(n.rep+t.rep,0,100)),t.energy&&(n.energy=je(n.energy+t.energy,0,100)),t.supplies&&(n.supplies+=t.supplies);for(let i of n.rooms.filter(s=>s.open))t.happiness&&i.guest&&(i.guest.happiness=je(i.guest.happiness+t.happiness,0,100)),t.condition&&(i.condition=je(i.condition+t.condition,0,100));if(t.special==="review"){let i=n.rooms.filter(s=>s.open);n.rep=je(n.rep+(i.reduce((s,r)=>s+r.quality,0)/i.length>=1?6:2),0,100)}if(t.special==="grant"&&n.rep>=70&&(n.debt=Math.max(0,n.debt-250),is(n,"Heritage grant approved. Your debt fell by $250.","success")),t.extra){let i=Lc(n,0);i.arrive=n.minute+10,n.arrivals.push(i)}return n.eventHistory.push({night:n.night,event:n.event,choice:e}),Mn(n,t.label),n.event=null,rs(n),Ft(t.label)}function Bc(n,e=6){if(!ki(n))return Pe("Finish the current decision first.");if(![6,12].includes(e))return Pe("Choose six or twelve supplies.");let t=e===12?82:45;return ci(n,t)?(n.supplies+=e,Ft(`${e} supplies delivered.`)):Pe(`You need $${t} for this delivery.`)}function kc(n){return ki(n)?n.emergencyDelivery?Pe("The supplier can only extend credit once per night."):(n.supplies+=4,n.debt+=45,n.emergencyDelivery=!0,Mn(n,"Four supplies ordered on credit. $45 added to the debt."),Ft("4 supplies delivered. $45 added to your debt.")):Pe("Finish the current decision first.")}function zc(n,e){return!ki(n)||!["value","standard","premium"].includes(e)?Pe("Choose an available room rate."):(n.rate=e,Ft("Room rates updated. Existing bookings keep their price."))}function Vc(n,e){if(n.phase!=="prep")return Pe("Renovations happen between nights.");let t=n.rooms.find(s=>s.id===Number(e));if(!t?.open||t.job||t.quality>=3)return Pe("This room cannot be upgraded right now.");let i=[130,190,270][t.quality];return ci(n,i)?(t.quality++,t.clean=100,t.condition=100,n.stats.upgraded++,rs(n),Ft(`Room ${t.number} is now quality ${t.quality}.`)):Pe(`You need $${i} for this renovation.`)}function Gc(n,e){if(n.phase!=="prep")return Pe("Reopen rooms between nights.");let t=n.rooms.find(s=>s.id===Number(e));if(!t||t.open)return Pe("This room is already open.");let i=280+(n.rooms.filter(s=>s.open).length-6)*60;return ci(n,i)?(t.open=!0,t.clean=100,t.condition=100,t.quality=0,rs(n),Ft(`Room ${t.number} is open for business.`)):Pe(`You need $${i} to reopen the next room.`)}function Hc(n,e){if(n.phase!=="prep")return Pe("Install improvements between nights.");let t=Bs.find(i=>i.id===e);return!t||n.upgrades.includes(e)?Pe("That improvement is already installed."):ci(n,t.cost)?(n.upgrades.push(e),["sign","garden"].includes(e)&&(n.rep=je(n.rep+4,0,100)),Ft(`${t.name} installed.`)):Pe(`You need $${t.cost} for this improvement.`)}function Wc(n,e){if(n.phase!=="prep")return Pe("Hire your team between nights.");let t=bn.find(i=>i.id===e);return!t||n.staff.some(i=>i.id===e)?Pe("That person is already on the team."):ci(n,t.hire)?(n.staff.push({id:e,active:!0,job:null}),rs(n),Ft(`${t.name} joined the team.`)):Pe(`You need $${t.hire} to hire ${t.name}.`)}function $c(n,e){if(n.phase!=="prep")return Pe("Set shifts before opening.");let t=n.staff.find(i=>i.id===e);return!t||t.job?Pe("Wait until this task is finished."):(t.active=!t.active,Ft(`${bn.find(i=>i.id===e).name} is ${t.active?"working":"off"} tonight.`))}function qc(n){return!ki(n)||n.playerJob?Pe("Finish your current task first."):ci(n,12)?(n.energy=je(n.energy+35,0,100),Ft("A hot meal. Team energy restored by 35.")):Pe("You need $12 for a meal break.")}function Xc(n){return!ki(n)||n.loan||n.endless?Pe("The emergency loan is unavailable."):(n.cash+=350,n.debt+=450,n.loan=!0,Mn(n,"Emergency loan accepted: $350 now, $450 due at the end."),Ft("$350 received. $450 added to the debt."))}function ad(n){let e=0,t=0,i=0;for(let l of n.rooms){if(l.job){if(l.job.worker==="player")n.playerJob=null;else{let u=n.staff.find(m=>m.id===l.job.worker);u&&(u.job=null)}l.job=null}if(!l.guest)continue;let h=l.guest;t++,l.request&&(h.happiness=je(h.happiness-12,0,100)),e+=h.happiness;let d=h.happiness>=75?Math.round(h.tip*(h.happiness/100)):0;d&&Cr(n,d,!0),i+=h.happiness>=85?1.5:h.happiness>=65?.4:h.happiness>=45?-1:-3,l.clean=je(l.clean-50-Math.floor(ss(n)*25),0,100),l.condition=je(l.condition-(7+ss(n)*8)*Un[n.difficulty].wear,0,100),l.guest=null,l.request=null}n.rep=je(Fi(n.rep+i),0,100);let s=n.staff.filter(l=>l.active).reduce((l,h)=>l+bn.find(d=>d.id===h.id).wage,0),r=45+n.rooms.filter(l=>l.open).length*5,a=n.endless?n.debt:0,o=s+r+a;n.endless&&(n.debt=0),n.cash=Fi(n.cash-o),n.ledger.expenses+=o,n.stats.spent+=o;let c={night:n.night,...n.ledger,wages:s,utilities:r,credit:a,profit:Fi(n.ledger.income+n.ledger.tips-n.ledger.expenses),happiness:t?Math.round(e/t):0,repChange:Fi(i),rep:n.rep,cash:n.cash};if(n.lastReport=c,n.history.push(c),n.queue=[],n.arrivals=[],n.playerJob=null,n.energy=je(n.energy+35,0,100),n.phase="report",rs(n),Mn(n,`Sunrise. ${t} guests; net $${c.profit}.`),n.cash<0)n.outcome={won:!1,title:"The light goes quiet",text:"The bills overtook the register. The motel closes, but every traveler you helped will remember the stop.",reason:"insolvent"},n.phase="ending";else if(n.night===7&&!n.endless){let l=n.cash>=n.debt&&n.rep>=40;l&&(n.stats.spent+=n.debt,n.cash=Fi(n.cash-n.debt),n.debt=0,gn(n,"finish"),n.difficulty==="hard"&&gn(n,"hard"),n.rep>=85&&gn(n,"perfect"),n.loan||gn(n,"honest")),n.outcome={won:l,title:l?n.rep>=85?"A roadside landmark":"A place worth keeping":n.cash<n.debt?"One week wasn\u2019t enough":"An empty reputation",text:l?n.rep>=85?"The debt is gone. The rooms are full. People are taking the long way just to stay here. Your dad\u2019s little motel has become a destination.":"At sunrise, you settle the last of the debt. The keys are yours for good. Somewhere out on Route 86, another traveler is looking for your light.":n.cash<n.debt?"You kept the doors open, but the final balance falls short. Next time, weigh every renovation against the cash you need at sunrise.":"The debt is covered, but too many guests left unhappy. A motel is more than its rooms. Next time, make room for the people.",reason:l?"paid":n.cash<n.debt?"debt":"reputation"},n.phase="ending"}}function Yc(n){return n.phase!=="report"?Pe("Finish the current night first."):(n.night++,n.phase="prep",n.minute=0,n.eventIndex=0,n.event=null,n.emergencyDelivery=!1,Ft(`Prepare for night ${n.night}.`))}function Zc(n){return n.phase!=="ending"||!n.outcome?.won?Pe("Finish the campaign successfully to unlock endless mode."):(n.endless=!0,n.phase="prep",n.night++,n.minute=0,n.outcome=null,n.eventIndex=0,n.event=null,Ft("The road goes on. Welcome to endless mode."))}function Vo(n){return Math.max(0,Math.round(n.stats.hosted*40+n.rep*25+n.rooms.filter(e=>e.open).reduce((e,t)=>e+t.quality*100,0)+Math.max(0,n.cash-n.debt)+(n.outcome?.won?2e3:0)))}function Go(n){return JSON.stringify({format:"last-stop-motel",schema:1,savedAt:new Date().toISOString(),state:n})}function ks(n){let e=JSON.parse(n);if(e?.format!=="last-stop-motel"||e.schema!==1)throw new Error("This is not a compatible Last Stop Motel save.");let t=e.state;if(!t||!Object.hasOwn(Un,t.difficulty)||!Number.isInteger(t.night)||t.night<1||t.night>1e5||!["prep","night","report","ending"].includes(t.phase))throw new Error("The save contains invalid game data.");let i=Ar(t.difficulty,t.seed),s=(h,d,u)=>typeof h=="number"&&Number.isFinite(h)&&h>=d&&h<=u;for(let h of["cash","debt","rep","supplies","energy","minute","nextId","seed"])if(!s(t[h],h==="cash"?-1e5:0,h==="rep"||h==="energy"?100:h==="minute"?480:4294967295))throw new Error(`Invalid ${h} in save.`);if(!Array.isArray(t.rooms)||t.rooms.length!==10||!Array.isArray(t.queue)||!Array.isArray(t.arrivals)||!Array.isArray(t.staff)||!Array.isArray(t.history)||!Array.isArray(t.upgrades)||!Array.isArray(t.achievements))throw new Error("The save is incomplete.");let r=h=>h===null||h&&typeof h.id=="string"&&h.id.length<80&&typeof h.name=="string"&&h.name.length<100&&Oo.some(d=>d.title===h.title)&&s(h.budget,0,1e4)&&s(h.wait,0,1e3)&&s(h.patience,1,1e3)&&s(h.comfort,0,3)&&typeof h.quiet=="boolean"&&s(h.tip,0,1e3)&&s(h.arrive,0,1e5)&&s(h.color,0,16777215),a=h=>h===null||h&&Bo.some(d=>d.id===h.id)&&s(h.remaining,0,1e3)&&s(h.total,1,1e3)&&s(h.supplies,0,5)&&s(h.duration,1,1e3),o=h=>h===null||h&&["clean","repair","service"].includes(h.type)&&["player",...bn.map(d=>d.id)].includes(h.worker)&&s(h.remaining,0,1e3)&&s(h.total,1,1e3);for(let h=0;h<10;h++){let d=t.rooms[h];if(!d||d.id!==h+1||d.number!==101+h||typeof d.open!="boolean"||typeof d.quiet!="boolean"||!Number.isInteger(d.quality)||!s(d.quality,0,3)||!s(d.clean,0,100)||!s(d.condition,0,100)||!r(d.guest)||!a(d.request)||!o(d.job))throw new Error("A room in the save is invalid.");if(d.guest&&(!s(d.guest.happiness,0,100)||!s(d.guest.paid,0,1e4)||!s(d.guest.requestAt,0,1e4)||typeof d.guest.requestMade!="boolean"))throw new Error("Invalid guest data.")}if(!t.queue.every(h=>h!==null&&r(h))||!t.arrivals.every(h=>h!==null&&r(h))||t.queue.length>100||t.arrivals.length>100||!t.upgrades.every(h=>Bs.some(d=>d.id===h))||new Set(t.upgrades).size!==t.upgrades.length||t.staff.length>3)throw new Error("Invalid bookings or improvements.");if(!t.staff.every(h=>bn.some(d=>d.id===h.id)&&typeof h.active=="boolean"&&(h.job===null||Number.isInteger(h.job)&&h.job>=1&&h.job<=10))||new Set(t.staff.map(h=>h.id)).size!==t.staff.length)throw new Error("Invalid staff data.");if(!["value","standard","premium"].includes(t.rate)||t.event!==null&&!Object.hasOwn(li,t.event)||!Number.isInteger(t.eventIndex)||!s(t.eventIndex,0,2))throw new Error("Invalid campaign state.");for(let h of Object.keys(i.stats))if(!s(t.stats?.[h],0,1e10))throw new Error("Invalid statistics.");for(let h of Object.keys(i.ledger))if(!s(t.ledger?.[h],0,1e10))throw new Error("Invalid ledger.");if(!t.history.every(h=>h&&["night","income","expenses","tips","guests","wages","utilities","profit","happiness","repChange","rep","cash"].every(d=>s(h[d],-1e10,1e10))))throw new Error("Invalid night history.");let c=new Set;for(let h of t.rooms.filter(d=>d.job)){let d=h.job.worker;if(c.has(d)||d==="player"&&t.playerJob!==h.id||d!=="player"&&!t.staff.some(u=>u.id===d&&u.job===h.id))throw new Error("Invalid job assignment.");c.add(d)}if(t.playerJob!==null&&!t.rooms.some(h=>h.id===t.playerJob&&h.job?.worker==="player"))throw new Error("Invalid player assignment.");for(let h of t.staff)if(h.job!==null&&!t.rooms.some(d=>d.id===h.job&&d.job?.worker===h.id))throw new Error("Invalid staff assignment.");for(let h of["endless","loan","emergencyDelivery","seenIntro"])if(typeof t[h]!="boolean")throw new Error("Invalid game flags.");if(t.phase==="ending"&&(!t.outcome||typeof t.outcome.won!="boolean"||typeof t.outcome.title!="string"||typeof t.outcome.text!="string"))throw new Error("Invalid ending.");if(t.phase==="report"&&(!t.lastReport||!t.history.some(h=>h.night===t.night&&h.night===t.lastReport.night)))throw new Error("Missing nightly report.");let l={};for(let h of Object.keys(i))l[h]=t[h]??i[h];return l.playerJob=t.playerJob,l.event=t.event,l.outcome=t.outcome,l.notifications=[],l.log=Array.isArray(t.log)?t.log.slice(0,50).filter(h=>h&&typeof h.message=="string"&&h.message.length<500&&s(h.night,0,1e5)&&s(h.time,0,480)):[],l.eventHistory=Array.isArray(t.eventHistory)?t.eventHistory.filter(h=>h&&Object.hasOwn(li,h.event)&&Number.isInteger(h.choice)&&li[h.event].choices[h.choice]):[],l.lastReport=t.lastReport&&t.history.some(h=>h.night===t.lastReport.night)?t.history.find(h=>h.night===t.lastReport.night):null,l}var yh=0,El=1,bh=2;var cr=1,Na=2,Ps=3,ei=0,Qt=1,xn=2,Hn=0,qi=1,Tl=2,Al=3,Cl=4,Mh=5;var _i=100,Sh=101,wh=102,Eh=103,Th=104,Ah=200,Ch=201,Rh=202,Ih=203,jr=204,Qr=205,Ph=206,Lh=207,Nh=208,Dh=209,Uh=210,Fh=211,Oh=212,Bh=213,kh=214,ea=0,ta=1,na=2,Xi=3,ia=4,sa=5,ra=6,aa=7,Rl=0,zh=1,Vh=2,An=0,Il=1,Pl=2,Ll=3,hr=4,Nl=5,Dl=6,Ul=7;var Fl=300,wi=301,ji=302,Da=303,Ua=304,ur=306,oa=1e3,kn=1001,la=1002,Lt=1003,Gh=1004;var dr=1005;var Bt=1006,Fa=1007;var Ei=1008;var sn=1009,Ol=1010,Bl=1011,Ls=1012,Oa=1013,Cn=1014,Rn=1015,Wn=1016,Ba=1017,ka=1018,Ns=1020,kl=35902,zl=35899,Vl=1021,Gl=1022,vn=1023,zn=1026,Ti=1027,Hl=1028,za=1029,Ai=1030,Va=1031;var Ga=1033,fr=33776,pr=33777,mr=33778,gr=33779,Ha=35840,Wa=35841,$a=35842,qa=35843,Xa=36196,Ya=37492,Za=37496,Ja=37488,Ka=37489,_r=37490,ja=37491,Qa=37808,eo=37809,to=37810,no=37811,io=37812,so=37813,ro=37814,ao=37815,oo=37816,lo=37817,co=37818,ho=37819,uo=37820,fo=37821,po=36492,mo=36494,go=36495,_o=36283,xo=36284,xr=36285,vo=36286;var $s=2300,ca=2301,Kr=2302,fl=2303,pl=2400,ml=2401,gl=2402;var Hh=3200;var yo=0,Wh=1,si="",qt="srgb",qs="srgb-linear",Xs="linear",Qe="srgb";var Wi=7680;var _l=519,$h=512,qh=513,Xh=514,bo=515,Yh=516,Zh=517,Mo=518,Jh=519,xl=35044;var Wl="300 es",Tn=2e3,vs=2001;function ld(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function cd(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ys(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kh(){let n=Ys("canvas");return n.style.display="block",n}var Jc={},ys=null;function $l(...n){let e="THREE."+n.shift();ys?ys("log",e,...n):console.log(e,...n)}function jh(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ie(...n){n=jh(n);let e="THREE."+n.shift();if(ys)ys("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Re(...n){n=jh(n);let e="THREE."+n.shift();if(ys)ys("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function $i(...n){let e=n.join(" ");e in Jc||(Jc[e]=!0,Ie(...n))}function Qh(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var eu={[ea]:ta,[na]:ra,[ia]:aa,[Xi]:sa,[ta]:ea,[ra]:na,[aa]:ia,[sa]:Xi},Vn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ho=Math.PI/180,ha=180/Math.PI;function vr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function hd(n,e){return(n%e+e)%e}function Wo(n,e,t){return(1-t)*n+t*e}function zs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Jl=class Jl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Jl.prototype.isVector2=!0;var Ve=Jl,Gn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],m=r[a+1],x=r[a+2],b=r[a+3];if(d!==b||c!==u||l!==m||h!==x){let g=c*u+l*m+h*x+d*b;g<0&&(u=-u,m=-m,x=-x,b=-b,g=-g);let f=1-o;if(g<.9995){let T=Math.acos(g),C=Math.sin(T);f=Math.sin(f*T)/C,o=Math.sin(o*T)/C,c=c*f+u*o,l=l*f+m*o,h=h*f+x*o,d=d*f+b*o}else{c=c*f+u*o,l=l*f+m*o,h=h*f+x*o,d=d*f+b*o;let T=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=T,l*=T,h*=T,d*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],d=r[a],u=r[a+1],m=r[a+2],x=r[a+3];return e[t]=o*x+h*d+c*m-l*u,e[t+1]=c*x+h*u+l*d-o*m,e[t+2]=l*x+h*m+o*u-c*d,e[t+3]=h*x-o*d-c*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),d=o(r/2),u=c(i/2),m=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*m*x,this._y=l*m*d-u*h*x,this._z=l*h*x+u*m*d,this._w=l*h*d-u*m*x;break;case"YXZ":this._x=u*h*d+l*m*x,this._y=l*m*d-u*h*x,this._z=l*h*x-u*m*d,this._w=l*h*d+u*m*x;break;case"ZXY":this._x=u*h*d-l*m*x,this._y=l*m*d+u*h*x,this._z=l*h*x+u*m*d,this._w=l*h*d-u*m*x;break;case"ZYX":this._x=u*h*d-l*m*x,this._y=l*m*d+u*h*x,this._z=l*h*x-u*m*d,this._w=l*h*d+u*m*x;break;case"YZX":this._x=u*h*d+l*m*x,this._y=l*m*d+u*h*x,this._z=l*h*x-u*m*d,this._w=l*h*d-u*m*x;break;case"XZY":this._x=u*h*d-l*m*x,this._y=l*m*d-u*h*x,this._z=l*h*x+u*m*d,this._w=l*h*d+u*m*x;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(i>o&&i>d){let m=2*Math.sqrt(1+i-o-d);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>d){let m=2*Math.sqrt(1+o-i-d);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+d-i-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Kl=class Kl{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+c*l+a*d-o*h,this.y=i+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $o.copy(this).projectOnVector(e),this.sub($o)}reflect(e){return this.sub($o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kl.prototype.isVector3=!0;var O=Kl,$o=new O,Kc=new Gn,jl=class jl{constructor(e,t,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],m=i[5],x=i[8],b=s[0],g=s[3],f=s[6],T=s[1],C=s[4],y=s[7],E=s[2],w=s[5],A=s[8];return r[0]=a*b+o*T+c*E,r[3]=a*g+o*C+c*w,r[6]=a*f+o*y+c*A,r[1]=l*b+h*T+d*E,r[4]=l*g+h*C+d*w,r[7]=l*f+h*y+d*A,r[2]=u*b+m*T+x*E,r[5]=u*g+m*C+x*w,r[8]=u*f+m*y+x*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,m=l*r-a*c,x=t*d+i*u+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/x;return e[0]=d*b,e[1]=(s*l-h*i)*b,e[2]=(o*i-s*a)*b,e[3]=u*b,e[4]=(h*t-s*c)*b,e[5]=(s*r-o*t)*b,e[6]=m*b,e[7]=(i*c-l*t)*b,e[8]=(a*t-i*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return $i("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qo.makeScale(e,t)),this}rotate(e){return $i("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qo.makeRotation(-e)),this}translate(e,t){return $i("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};jl.prototype.isMatrix3=!0;var Ne=jl,qo=new Ne,jc=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qc=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ud(){let n={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qe&&(s.r=Qn(s.r),s.g=Qn(s.g),s.b=Qn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===si?Xs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $i("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $i("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[qs]:{primaries:e,whitePoint:i,transfer:Xs,toXYZ:jc,fromXYZ:Qc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:i,transfer:Qe,toXYZ:jc,fromXYZ:Qc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),n}var He=ud();function Qn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var as,ua=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{as===void 0&&(as=Ys("canvas")),as.width=e.width,as.height=e.height;let s=as.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=as}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ys("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Qn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Qn(t[i]/255)*255):t[i]=Qn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},dd=0,bs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=vr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xo(s[a].image)):r.push(Xo(s[a]))}else r=Xo(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Xo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ua.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var fd=0,Yo=new O,Kt=class n extends Vn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=kn,s=kn,r=Bt,a=Ei,o=vn,c=sn,l=n.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=vr(),this.name="",this.source=new bs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yo).x}get height(){return this.source.getSize(Yo).y}get depth(){return this.source.getSize(Yo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oa:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case la:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oa:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case la:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Fl;Kt.DEFAULT_ANISOTROPY=1;var Ql=class Ql{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],m=c[5],x=c[9],b=c[2],g=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-b)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+b)<.1&&Math.abs(x+g)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(l+1)/2,y=(m+1)/2,E=(f+1)/2,w=(h+u)/4,A=(d+b)/4,_=(x+g)/4;return C>y&&C>E?C<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(C),s=w/i,r=A/i):y>E?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=w/s,r=_/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=A/r,s=_/r),this.set(i,s,r,t),this}let T=Math.sqrt((g-x)*(g-x)+(d-b)*(d-b)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(g-x)/T,this.y=(d-b)/T,this.z=(u-h)/T,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ql.prototype.isVector4=!0;var ut=Ql,da=class extends Vn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new Kt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new bs(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},un=class extends da{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Zs=class extends Kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var fa=class extends Kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var La=class La{constructor(e,t,i,s,r,a,o,c,l,h,d,u,m,x,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,h,d,u,m,x,b,g)}set(e,t,i,s,r,a,o,c,l,h,d,u,m,x,b,g){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=m,f[7]=x,f[11]=b,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new La().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/os.setFromMatrixColumn(e,0).length(),r=1/os.setFromMatrixColumn(e,1).length(),a=1/os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,m=a*d,x=o*h,b=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=m+x*l,t[5]=u-b*l,t[9]=-o*c,t[2]=b-u*l,t[6]=x+m*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,m=c*d,x=l*h,b=l*d;t[0]=u+b*o,t[4]=x*o-m,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=m*o-x,t[6]=b+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,m=c*d,x=l*h,b=l*d;t[0]=u-b*o,t[4]=-a*d,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*h,t[9]=b-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,m=a*d,x=o*h,b=o*d;t[0]=c*h,t[4]=x*l-m,t[8]=u*l+b,t[1]=c*d,t[5]=b*l+u,t[9]=m*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,m=a*l,x=o*c,b=o*l;t[0]=c*h,t[4]=b-u*d,t[8]=x*d+m,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*d+x,t[10]=u-b*d}else if(e.order==="XZY"){let u=a*c,m=a*l,x=o*c,b=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+b,t[5]=a*h,t[9]=m*d-x,t[2]=x*d-m,t[6]=o*h,t[10]=b*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pd,e,md)}lookAt(e,t,i){let s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),hi.crossVectors(i,cn),hi.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),hi.crossVectors(i,cn)),hi.normalize(),Rr.crossVectors(cn,hi),s[0]=hi.x,s[4]=Rr.x,s[8]=cn.x,s[1]=hi.y,s[5]=Rr.y,s[9]=cn.y,s[2]=hi.z,s[6]=Rr.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],m=i[13],x=i[2],b=i[6],g=i[10],f=i[14],T=i[3],C=i[7],y=i[11],E=i[15],w=s[0],A=s[4],_=s[8],S=s[12],P=s[1],I=s[5],U=s[9],$=s[13],X=s[2],B=s[6],W=s[10],H=s[14],j=s[3],ee=s[7],de=s[11],ge=s[15];return r[0]=a*w+o*P+c*X+l*j,r[4]=a*A+o*I+c*B+l*ee,r[8]=a*_+o*U+c*W+l*de,r[12]=a*S+o*$+c*H+l*ge,r[1]=h*w+d*P+u*X+m*j,r[5]=h*A+d*I+u*B+m*ee,r[9]=h*_+d*U+u*W+m*de,r[13]=h*S+d*$+u*H+m*ge,r[2]=x*w+b*P+g*X+f*j,r[6]=x*A+b*I+g*B+f*ee,r[10]=x*_+b*U+g*W+f*de,r[14]=x*S+b*$+g*H+f*ge,r[3]=T*w+C*P+y*X+E*j,r[7]=T*A+C*I+y*B+E*ee,r[11]=T*_+C*U+y*W+E*de,r[15]=T*S+C*$+y*H+E*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],m=e[14],x=e[3],b=e[7],g=e[11],f=e[15],T=c*m-l*u,C=o*m-l*d,y=o*u-c*d,E=a*m-l*h,w=a*u-c*h,A=a*d-o*h;return t*(b*T-g*C+f*y)-i*(x*T-g*E+f*w)+s*(x*C-b*E+f*A)-r*(x*y-b*w+g*A)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],m=e[11],x=e[12],b=e[13],g=e[14],f=e[15],T=t*o-i*a,C=t*c-s*a,y=t*l-r*a,E=i*c-s*o,w=i*l-r*o,A=s*l-r*c,_=h*b-d*x,S=h*g-u*x,P=h*f-m*x,I=d*g-u*b,U=d*f-m*b,$=u*f-m*g,X=T*$-C*U+y*I+E*P-w*S+A*_;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/X;return e[0]=(o*$-c*U+l*I)*B,e[1]=(s*U-i*$-r*I)*B,e[2]=(b*A-g*w+f*E)*B,e[3]=(u*w-d*A-m*E)*B,e[4]=(c*P-a*$-l*S)*B,e[5]=(t*$-s*P+r*S)*B,e[6]=(g*y-x*A-f*C)*B,e[7]=(h*A-u*y+m*C)*B,e[8]=(a*U-o*P+l*_)*B,e[9]=(i*P-t*U-r*_)*B,e[10]=(x*w-b*y+f*T)*B,e[11]=(d*y-h*w-m*T)*B,e[12]=(o*S-a*I-c*_)*B,e[13]=(t*I-i*S+s*_)*B,e[14]=(b*C-x*E-g*T)*B,e[15]=(h*E-d*C+u*T)*B,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,m=r*h,x=r*d,b=a*h,g=a*d,f=o*d,T=c*l,C=c*h,y=c*d,E=i.x,w=i.y,A=i.z;return s[0]=(1-(b+f))*E,s[1]=(m+y)*E,s[2]=(x-C)*E,s[3]=0,s[4]=(m-y)*w,s[5]=(1-(u+f))*w,s[6]=(g+T)*w,s[7]=0,s[8]=(x+C)*A,s[9]=(g-T)*A,s[10]=(1-(u+b))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=os.set(s[0],s[1],s[2]).length(),o=os.set(s[4],s[5],s[6]).length(),c=os.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Sn.copy(this);let l=1/a,h=1/o,d=1/c;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=d,Sn.elements[9]*=d,Sn.elements[10]*=d,t.setFromRotationMatrix(Sn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=Tn,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),m=(i+s)/(i-s),x,b;if(c)x=r/(a-r),b=a*r/(a-r);else if(o===Tn)x=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===vs)x=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Tn,c=!1){let l=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),m=-(i+s)/(i-s),x,b;if(c)x=1/(a-r),b=a/(a-r);else if(o===Tn)x=-2/(a-r),b=-(a+r)/(a-r);else if(o===vs)x=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=x,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};La.prototype.isMatrix4=!0;var ht=La,os=new O,Sn=new ht,pd=new O(0,0,0),md=new O(1,1,1),hi=new O,Rr=new O,cn=new O,eh=new ht,th=new Gn,ti=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return eh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return th.setFromEuler(this),this.setFromQuaternion(th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ti.DEFAULT_ORDER="XYZ";var Ms=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gd=0,nh=new O,ls=new Gn,Yn=new ht,Ir=new O,Vs=new O,_d=new O,xd=new Gn,ih=new O(1,0,0),sh=new O(0,1,0),rh=new O(0,0,1),ah={type:"added"},vd={type:"removed"},cs={type:"childadded",child:null},Zo={type:"childremoved",child:null},kt=class n extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new O,t=new ti,i=new Gn,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ne}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ms,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(ih,e)}rotateY(e){return this.rotateOnAxis(sh,e)}rotateZ(e){return this.rotateOnAxis(rh,e)}translateOnAxis(e,t){return nh.copy(e).applyQuaternion(this.quaternion),this.position.add(nh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ih,e)}translateY(e){return this.translateOnAxis(sh,e)}translateZ(e){return this.translateOnAxis(rh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ir.copy(e):Ir.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Vs,Ir,this.up):Yn.lookAt(Ir,Vs,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(Yn),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Re("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ah),cs.child=e,this.dispatchEvent(cs),cs.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vd),Zo.child=e,this.dispatchEvent(Zo),Zo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ah),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,_d),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,xd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};kt.DEFAULT_UP=new O(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tt=class extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},yd={type:"move"},Ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,i),f=this._getHandJoint(l,b);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,x=.005;l.inputState.pinching&&u>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Tt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function Jo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Oe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=He.workingColorSpace){return this.r=e,this.g=t,this.b=i,He.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=He.workingColorSpace){if(e=hd(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Jo(a,r,e+1/3),this.g=Jo(a,r,e),this.b=Jo(a,r,e-1/3)}return He.colorSpaceToWorking(this,s),this}setStyle(e,t=qt){function i(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){let i=tu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return He.workingToColorSpace($t.copy(this),e),Math.round(We($t.r*255,0,255))*65536+Math.round(We($t.g*255,0,255))*256+Math.round(We($t.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace($t.copy(this),t);let i=$t.r,s=$t.g,r=$t.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=qt){He.workingToColorSpace($t.copy(this),e);let t=$t.r,i=$t.g,s=$t.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Pr);let i=Wo(ui.h,Pr.h,t),s=Wo(ui.s,Pr.s,t),r=Wo(ui.l,Pr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$t=new Oe;Oe.NAMES=tu;var Js=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Oe(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ks=class extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},wn=new O,Zn=new O,Ko=new O,Jn=new O,hs=new O,us=new O,oh=new O,jo=new O,Qo=new O,el=new O,tl=new ut,nl=new ut,il=new ut,gi=class n{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),wn.subVectors(e,t),s.cross(wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){wn.subVectors(s,t),Zn.subVectors(i,t),Ko.subVectors(e,t);let a=wn.dot(wn),o=wn.dot(Zn),c=wn.dot(Ko),l=Zn.dot(Zn),h=Zn.dot(Ko),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,m=(l*c-o*h)*u,x=(a*h-o*c)*u;return r.set(1-m-x,x,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Jn.x),c.addScaledVector(a,Jn.y),c.addScaledVector(o,Jn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return tl.setScalar(0),nl.setScalar(0),il.setScalar(0),tl.fromBufferAttribute(e,t),nl.fromBufferAttribute(e,i),il.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(tl,r.x),a.addScaledVector(nl,r.y),a.addScaledVector(il,r.z),a}static isFrontFacing(e,t,i,s){return wn.subVectors(i,t),Zn.subVectors(e,t),wn.cross(Zn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),wn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;hs.subVectors(s,i),us.subVectors(r,i),jo.subVectors(e,i);let c=hs.dot(jo),l=us.dot(jo);if(c<=0&&l<=0)return t.copy(i);Qo.subVectors(e,s);let h=hs.dot(Qo),d=us.dot(Qo);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(hs,a);el.subVectors(e,r);let m=hs.dot(el),x=us.dot(el);if(x>=0&&m<=x)return t.copy(r);let b=m*l-c*x;if(b<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(i).addScaledVector(us,o);let g=h*x-m*d;if(g<=0&&d-h>=0&&m-x>=0)return oh.subVectors(r,s),o=(d-h)/(d-h+(m-x)),t.copy(s).addScaledVector(oh,o);let f=1/(g+b+u);return a=b*f,o=u*f,t.copy(i).addScaledVector(hs,a).addScaledVector(us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xi=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,En):En.fromBufferAttribute(r,a),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Lr.copy(i.boundingBox)),Lr.applyMatrix4(e.matrixWorld),this.union(Lr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),Nr.subVectors(this.max,Gs),ds.subVectors(e.a,Gs),fs.subVectors(e.b,Gs),ps.subVectors(e.c,Gs),di.subVectors(fs,ds),fi.subVectors(ps,fs),zi.subVectors(ds,ps);let t=[0,-di.z,di.y,0,-fi.z,fi.y,0,-zi.z,zi.y,di.z,0,-di.x,fi.z,0,-fi.x,zi.z,0,-zi.x,-di.y,di.x,0,-fi.y,fi.x,0,-zi.y,zi.x,0];return!sl(t,ds,fs,ps,Nr)||(t=[1,0,0,0,1,0,0,0,1],!sl(t,ds,fs,ps,Nr))?!1:(Dr.crossVectors(di,fi),t=[Dr.x,Dr.y,Dr.z],sl(t,ds,fs,ps,Nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Kn=[new O,new O,new O,new O,new O,new O,new O,new O],En=new O,Lr=new xi,ds=new O,fs=new O,ps=new O,di=new O,fi=new O,zi=new O,Gs=new O,Nr=new O,Dr=new O,Vi=new O;function sl(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Vi.fromArray(n,r);let o=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),c=e.dot(Vi),l=t.dot(Vi),h=i.dot(Vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var wt=new O,Ur=new Ve,bd=0,Jt=class extends Vn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=xl,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=zs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zs(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zs(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zs(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var js=class extends Jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Qs=class extends Jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ot=class extends Jt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Md=new xi,Hs=new O,rl=new O,Yi=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Md.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);let t=Hs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Hs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(rl)),this.expandByPoint(Hs.copy(e.center).sub(rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Sd=0,_n=new ht,al=new kt,ms=new O,hn=new xi,Ws=new xi,Pt=new O,jt=class n extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ld(e)?Qs:js)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ne().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,i){return _n.makeTranslation(e,t,i),this.applyMatrix4(_n),this}scale(e,t,i){return _n.makeScale(e,t,i),this.applyMatrix4(_n),this}lookAt(e){return al.lookAt(e),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ot(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ws.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(hn.min,Ws.min),hn.expandByPoint(Pt),Pt.addVectors(hn.max,Ws.max),hn.expandByPoint(Pt)):(hn.expandByPoint(Ws.min),hn.expandByPoint(Ws.max))}hn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Pt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Pt.fromBufferAttribute(o,l),c&&(ms.fromBufferAttribute(e,l),Pt.add(ms)),s=Math.max(s,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Jt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let _=0;_<i.count;_++)o[_]=new O,c[_]=new O;let l=new O,h=new O,d=new O,u=new Ve,m=new Ve,x=new Ve,b=new O,g=new O;function f(_,S,P){l.fromBufferAttribute(i,_),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,P),u.fromBufferAttribute(r,_),m.fromBufferAttribute(r,S),x.fromBufferAttribute(r,P),h.sub(l),d.sub(l),m.sub(u),x.sub(u);let I=1/(m.x*x.y-x.x*m.y);isFinite(I)&&(b.copy(h).multiplyScalar(x.y).addScaledVector(d,-m.y).multiplyScalar(I),g.copy(d).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(I),o[_].add(b),o[S].add(b),o[P].add(b),c[_].add(g),c[S].add(g),c[P].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let _=0,S=T.length;_<S;++_){let P=T[_],I=P.start,U=P.count;for(let $=I,X=I+U;$<X;$+=3)f(e.getX($+0),e.getX($+1),e.getX($+2))}let C=new O,y=new O,E=new O,w=new O;function A(_){E.fromBufferAttribute(s,_),w.copy(E);let S=o[_];C.copy(S),C.sub(E.multiplyScalar(E.dot(S))).normalize(),y.crossVectors(w,S);let I=y.dot(c[_])<0?-1:1;a.setXYZW(_,C.x,C.y,C.z,I)}for(let _=0,S=T.length;_<S;++_){let P=T[_],I=P.start,U=P.count;for(let $=I,X=I+U;$<X;$+=3)A(e.getX($+0)),A(e.getX($+1)),A(e.getX($+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);let s=new O,r=new O,a=new O,o=new O,c=new O,l=new O,h=new O,d=new O;if(e)for(let u=0,m=e.count;u<m;u+=3){let x=e.getX(u+0),b=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,x),c.fromBufferAttribute(i,b),l.fromBufferAttribute(i,g),o.add(h),c.add(h),l.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(b,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),m=0,x=0;for(let b=0,g=c.length;b<g;b++){o.isInterleavedBufferAttribute?m=c[b]*o.data.stride+o.offset:m=c[b]*h;for(let f=0;f<h;f++)u[x++]=l[m++]}return new Jt(u,h,d)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],m=e(u,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let m=l[d];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var wd=0,ni=class extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=vr(),this.name="",this.type="Material",this.blending=qi,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jr,this.blendDst=Qr,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(i.blending=this.blending),this.side!==ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jr&&(i.blendSrc=this.blendSrc),this.blendDst!==Qr&&(i.blendDst=this.blendDst),this.blendEquation!==_i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_l&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ve().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ve().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var jn=new O,ol=new O,Fr=new O,pi=new O,ll=new O,Or=new O,cl=new O,ws=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ol.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(ol);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Fr),o=pi.dot(this.direction),c=-pi.dot(Fr),l=pi.lengthSq(),h=Math.abs(1-a*a),d,u,m,x;if(h>0)if(d=a*c-o,u=a*o-c,x=r*h,d>=0)if(u>=-x)if(u<=x){let b=1/h;d*=b,u*=b,m=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*c)+l;else u<=-x?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+u*(u+2*c)+l):u<=x?(d=0,u=Math.min(Math.max(-r,-c),r),m=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ol).addScaledVector(Fr,u),m}intersectSphere(e,t){jn.subVectors(e.center,this.origin);let i=jn.dot(this.direction),s=jn.dot(jn)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,i,s,r){ll.subVectors(t,e),Or.subVectors(i,e),cl.crossVectors(ll,Or);let a=this.direction.dot(cl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pi.subVectors(this.origin,e);let c=o*this.direction.dot(Or.crossVectors(pi,Or));if(c<0)return null;let l=o*this.direction.dot(ll.cross(pi));if(l<0||c+l>a)return null;let h=-o*pi.dot(cl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zi=class extends ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},lh=new ht,Gi=new ws,Br=new Yi,ch=new O,kr=new O,zr=new O,Vr=new O,hl=new O,Gr=new O,hh=new O,Hr=new O,zt=class extends kt{constructor(e=new jt,t=new Zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Gr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(hl.fromBufferAttribute(d,e),a?Gr.addScaledVector(hl,h):Gr.addScaledVector(hl.sub(t),h))}t.add(Gr)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Br.copy(i.boundingSphere),Br.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(Br.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Br,ch)===null||Gi.origin.distanceToSquared(ch)>(e.far-e.near)**2))&&(lh.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(lh),!(i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,b=u.length;x<b;x++){let g=u[x],f=a[g.materialIndex],T=Math.max(g.start,m.start),C=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let y=T,E=C;y<E;y+=3){let w=o.getX(y),A=o.getX(y+1),_=o.getX(y+2);s=Wr(this,f,e,i,l,h,d,w,A,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),b=Math.min(o.count,m.start+m.count);for(let g=x,f=b;g<f;g+=3){let T=o.getX(g),C=o.getX(g+1),y=o.getX(g+2);s=Wr(this,a,e,i,l,h,d,T,C,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,b=u.length;x<b;x++){let g=u[x],f=a[g.materialIndex],T=Math.max(g.start,m.start),C=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let y=T,E=C;y<E;y+=3){let w=y,A=y+1,_=y+2;s=Wr(this,f,e,i,l,h,d,w,A,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),b=Math.min(c.count,m.start+m.count);for(let g=x,f=b;g<f;g+=3){let T=g,C=g+1,y=g+2;s=Wr(this,a,e,i,l,h,d,T,C,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Ed(n,e,t,i,s,r,a,o){let c;if(e.side===Qt?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===ei,o),c===null)return null;Hr.copy(o),Hr.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Hr);return l<t.near||l>t.far?null:{distance:l,point:Hr.clone(),object:n}}function Wr(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,kr),n.getVertexPosition(c,zr),n.getVertexPosition(l,Vr);let h=Ed(n,e,t,i,kr,zr,Vr,hh);if(h){let d=new O;gi.getBarycoord(hh,kr,zr,Vr,d),s&&(h.uv=gi.getInterpolatedAttribute(s,o,c,l,d,new Ve)),r&&(h.uv1=gi.getInterpolatedAttribute(r,o,c,l,d,new Ve)),a&&(h.normal=gi.getInterpolatedAttribute(a,o,c,l,d,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new O,materialIndex:0};gi.getNormal(kr,zr,Vr,u.normal),h.face=u,h.barycoord=d}return h}var pa=class extends Kt{constructor(e=null,t=1,i=1,s,r,a,o,c,l=Lt,h=Lt,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ul=new O,Td=new O,Ad=new Ne,Bn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ul.subVectors(i,t).cross(Td.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(ul),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Ad.getNormalMatrix(e),s=this.coplanarPoint(ul).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hi=new Yi,Cd=new Ve(.5,.5),$r=new O,Es=class{constructor(e=new Bn,t=new Bn,i=new Bn,s=new Bn,r=new Bn,a=new Bn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Tn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],m=r[7],x=r[8],b=r[9],g=r[10],f=r[11],T=r[12],C=r[13],y=r[14],E=r[15];if(s[0].setComponents(l-a,m-h,f-x,E-T).normalize(),s[1].setComponents(l+a,m+h,f+x,E+T).normalize(),s[2].setComponents(l+o,m+d,f+b,E+C).normalize(),s[3].setComponents(l-o,m-d,f-b,E-C).normalize(),i)s[4].setComponents(c,u,g,y).normalize(),s[5].setComponents(l-c,m-u,f-g,E-y).normalize();else if(s[4].setComponents(l-c,m-u,f-g,E-y).normalize(),t===Tn)s[5].setComponents(l+c,m+u,f+g,E+y).normalize();else if(t===vs)s[5].setComponents(c,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){Hi.center.set(0,0,0);let t=Cd.distanceTo(e.center);return Hi.radius=.7071067811865476+t,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if($r.x=s.normal.x>0?e.max.x:e.min.x,$r.y=s.normal.y>0?e.max.y:e.min.y,$r.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint($r)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ji=class extends ni{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},uh=new ht,vl=new ws,qr=new Yi,Xr=new O,Ts=class extends kt{constructor(e=new jt,t=new Ji){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere),qr.applyMatrix4(s),qr.radius+=r,e.ray.intersectsSphere(qr)===!1)return;uh.copy(s).invert(),vl.copy(e.ray).applyMatrix4(uh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,d=i.attributes.position;if(l!==null){let u=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let x=u,b=m;x<b;x++){let g=l.getX(x);Xr.fromBufferAttribute(d,g),dh(Xr,g,c,s,e,t,this)}}else{let u=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=u,b=m;x<b;x++)Xr.fromBufferAttribute(d,x),dh(Xr,x,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function dh(n,e,t,i,s,r,a){let o=vl.distanceSqToPoint(n);if(o<t){let c=new O;vl.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var er=class extends Kt{constructor(e=[],t=wi,i,s,r,a,o,c,l,h){super(e,t,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},tr=class extends Kt{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ii=class extends Kt{constructor(e,t,i=Cn,s,r,a,o=Lt,c=Lt,l,h=zn,d=1){if(h!==zn&&h!==Ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ma=class extends ii{constructor(e,t=Cn,i=wi,s,r,a=Lt,o=Lt,c,l=zn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},nr=class extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},vi=class n extends jt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,m=0;x("z","y","x",-1,-1,i,t,e,a,r,0),x("z","y","x",1,-1,i,t,-e,a,r,1),x("x","z","y",1,1,e,i,t,s,a,2),x("x","z","y",1,-1,e,i,-t,s,a,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(d,2));function x(b,g,f,T,C,y,E,w,A,_,S){let P=y/A,I=E/_,U=y/2,$=E/2,X=w/2,B=A+1,W=_+1,H=0,j=0,ee=new O;for(let de=0;de<W;de++){let ge=de*I-$;for(let ve=0;ve<B;ve++){let Ze=ve*P-U;ee[b]=Ze*T,ee[g]=ge*C,ee[f]=X,l.push(ee.x,ee.y,ee.z),ee[b]=0,ee[g]=0,ee[f]=w>0?1:-1,h.push(ee.x,ee.y,ee.z),d.push(ve/A),d.push(1-de/_),H+=1}}for(let de=0;de<_;de++)for(let ge=0;ge<A;ge++){let ve=u+ge+B*de,Ze=u+ge+B*(de+1),mt=u+(ge+1)+B*(de+1),Je=u+(ge+1)+B*de;c.push(ve,Ze,Je),c.push(Ze,mt,Je),j+=6}o.addGroup(m,j,S),m+=j,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var As=class n extends jt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],m=[],x=0,b=[],g=i/2,f=0;T(),a===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new Ot(d,3)),this.setAttribute("normal",new Ot(u,3)),this.setAttribute("uv",new Ot(m,2));function T(){let y=new O,E=new O,w=0,A=(t-e)/i;for(let _=0;_<=r;_++){let S=[],P=_/r,I=P*(t-e)+e;for(let U=0;U<=s;U++){let $=U/s,X=$*c+o,B=Math.sin(X),W=Math.cos(X);E.x=I*B,E.y=-P*i+g,E.z=I*W,d.push(E.x,E.y,E.z),y.set(B,A,W).normalize(),u.push(y.x,y.y,y.z),m.push($,1-P),S.push(x++)}b.push(S)}for(let _=0;_<s;_++)for(let S=0;S<r;S++){let P=b[S][_],I=b[S+1][_],U=b[S+1][_+1],$=b[S][_+1];(e>0||S!==0)&&(h.push(P,I,$),w+=3),(t>0||S!==r-1)&&(h.push(I,U,$),w+=3)}l.addGroup(f,w,0),f+=w}function C(y){let E=x,w=new Ve,A=new O,_=0,S=y===!0?e:t,P=y===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,g*P,0),u.push(0,P,0),m.push(.5,.5),x++;let I=x;for(let U=0;U<=s;U++){let X=U/s*c+o,B=Math.cos(X),W=Math.sin(X);A.x=S*W,A.y=g*P,A.z=S*B,d.push(A.x,A.y,A.z),u.push(0,P,0),w.x=B*.5+.5,w.y=W*.5*P+.5,m.push(w.x,w.y),x++}for(let U=0;U<s;U++){let $=E+U,X=I+U;y===!0?h.push(X,X+1,$):h.push(X+1,X,$),_+=3}l.addGroup(f,_,y===!0?1:2),f+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ir=class n extends As{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ki=class n extends jt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,d=e/o,u=t/c,m=[],x=[],b=[],g=[];for(let f=0;f<h;f++){let T=f*u-a;for(let C=0;C<l;C++){let y=C*d-r;x.push(y,-T,0),b.push(0,0,1),g.push(C/o),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let T=0;T<o;T++){let C=T+l*f,y=T+l*(f+1),E=T+1+l*(f+1),w=T+1+l*f;m.push(C,y,w),m.push(y,E,w)}this.setIndex(m),this.setAttribute("position",new Ot(x,3)),this.setAttribute("normal",new Ot(b,3)),this.setAttribute("uv",new Ot(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};function Qi(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(fh(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(fh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Xt(n){let e={};for(let t=0;t<n.length;t++){let i=Qi(n[t]);for(let s in i)e[s]=i[s]}return e}function fh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Rd(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ql(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}var nu={clone:Qi,merge:Xt},Id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Id,this.fragmentShader=Pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.uniformsGroups=Rd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Oe().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ve().fromArray(s.value);break;case"v3":this.uniforms[i].value=new O().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ut().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ne().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ht().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ga=class extends dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},sr=class extends ni{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yo,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var _a=class extends ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xa=class extends ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Yr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var yi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},va=class extends yi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pl,endingEnd:pl}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ml:r=e,o=2*t-i;break;case gl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case ml:a=e,c=2*i-t;break;case gl:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,m=this._weightNext,x=(i-t)/(s-t),b=x*x,g=b*x,f=-u*g+2*u*b-u*x,T=(1+u)*g+(-1.5-2*u)*b+(-.5+u)*x+1,C=(-1-m)*g+(1.5+m)*b+.5*x,y=m*g-m*b;for(let E=0;E!==o;++E)r[E]=f*a[h+E]+T*a[l+E]+C*a[c+E]+y*a[d+E];return r}},ya=class extends yi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},ba=class extends yi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ma=class extends yi{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let x=(i-t)/(s-t),b=1-x;for(let g=0;g!==o;++g)r[g]=a[l+g]*b+a[c+g]*x;return r}let u=o*2,m=e-1;for(let x=0;x!==o;++x){let b=a[l+x],g=a[c+x],f=m*u+x*2,T=d[f],C=d[f+1],y=e*u+x*2,E=h[y],w=h[y+1],A=(i-t)/(s-t),_,S,P,I,U;for(let $=0;$<8;$++){_=A*A,S=_*A,P=1-A,I=P*P,U=I*P;let B=U*t+3*I*A*T+3*P*_*E+S*s-i;if(Math.abs(B)<1e-10)break;let W=3*I*(T-t)+6*P*A*(E-T)+3*_*(s-E);if(Math.abs(W)<1e-10)break;A=A-B/W,A=Math.max(0,Math.min(1,A))}r[x]=U*b+3*I*A*C+3*P*_*w+S*g}return r}},fn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Yr(t,this.TimeBufferType),this.values=Yr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Yr(e.times,Array),values:Yr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ba(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ma(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case $s:t=this.InterpolantFactoryMethodDiscrete;break;case ca:t=this.InterpolantFactoryMethodLinear;break;case Kr:t=this.InterpolantFactoryMethodSmooth;break;case fl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ie("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $s;case this.InterpolantFactoryMethodLinear:return ca;case this.InterpolantFactoryMethodSmooth:return Kr;case this.InterpolantFactoryMethodBezier:return fl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Re("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Re("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Re("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Re("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&cd(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Re("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Kr,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*i,u=d-i,m=d+i;for(let x=0;x!==i;++x){let b=t[d+x];if(b!==t[u+x]||b!==t[m+x]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*i,u=a*i;for(let m=0;m!==i;++m)t[u+m]=t[d+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=ca;var bi=class extends fn{constructor(e,t,i){super(e,t,i)}};bi.prototype.ValueTypeName="bool";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=$s;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Sa=class extends fn{constructor(e,t,i,s){super(e,t,i,s)}};Sa.prototype.ValueTypeName="color";var wa=class extends fn{constructor(e,t,i,s){super(e,t,i,s)}};wa.prototype.ValueTypeName="number";var Ea=class extends yi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Gn.slerpFlat(r,0,a,l-o,a,l,c);return r}},rr=class extends fn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Ea(this.times,this.values,this.getValueSize(),e)}};rr.prototype.ValueTypeName="quaternion";rr.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends fn{constructor(e,t,i){super(e,t,i)}};Mi.prototype.ValueTypeName="string";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=$s;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ta=class extends fn{constructor(e,t,i,s){super(e,t,i,s)}};Ta.prototype.ValueTypeName="vector";var Aa=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let m=l[d],x=l[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},iu=new Aa,Ca=class{constructor(e){this.manager=e!==void 0?e:iu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ca.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cs=class extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ar=class extends Cs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},dl=new ht,ph=new O,mh=new O,Ra=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Es,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;ph.setFromMatrixPosition(e.matrixWorld),t.position.copy(ph),mh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mh),t.updateMatrixWorld(),dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===vs||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zr=new O,Jr=new Gn,On=new O,or=class extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zr,Jr,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,Jr,On.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Zr,Jr,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,Jr,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},mi=new O,gh=new Ve,_h=new Ve,Zt=class extends or{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ha*2*Math.atan(Math.tan(Ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,gh,_h),t.subVectors(_h,gh)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ho*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var yl=class extends Ra{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0}},Rs=class extends Cs{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new yl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Si=class extends or{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bl=class extends Ra{constructor(){super(new Si(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Is=class extends Cs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new bl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var gs=-90,_s=1,Ia=class extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Zt(gs,_s,e,t);s.layers=this.layers,this.add(s);let r=new Zt(gs,_s,e,t);r.layers=this.layers,this.add(r);let a=new Zt(gs,_s,e,t);a.layers=this.layers,this.add(a);let o=new Zt(gs,_s,e,t);o.layers=this.layers,this.add(o);let c=new Zt(gs,_s,e,t);c.layers=this.layers,this.add(c);let l=new Zt(gs,_s,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Tn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===vs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Pa=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Xl="\\[\\]\\.:\\/",Ld=new RegExp("["+Xl+"]","g"),Yl="[^"+Xl+"]",Nd="[^"+Xl.replace("\\.","")+"]",Dd=/((?:WC+[\/:])*)/.source.replace("WC",Yl),Ud=/(WCOD+)?/.source.replace("WCOD",Nd),Fd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yl),Od=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yl),Bd=new RegExp("^"+Dd+Ud+Fd+Od+"$"),kd=["material","materials","bones","map"],Ml=class{constructor(e,t,i){let s=i||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ct=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ld,"")}static parseTrackName(e){let t=Bd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);kd.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Re("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Re("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Re("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Re("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Re("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Re("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=Ml;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var X0=new Float32Array(1);var xh=new ht,lr=class{constructor(e,t,i=0,s=1/0){this.ray=new ws(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ms,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Re("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return xh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xh),this}intersectObject(e,t=!0,i=[]){return Sl(e,this,i,t),i.sort(vh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Sl(e[s],this,i,t);return i.sort(vh),i}};function vh(n,e){return n.distance-e.distance}function Sl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Sl(r[a],e,t,!0)}}var ec=class ec{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};ec.prototype.isMatrix2=!0;var wl=ec;function Zl(n,e,t,i){let s=zd(i);switch(t){case Vl:return n*e;case Hl:return n*e/s.components*s.byteLength;case za:return n*e/s.components*s.byteLength;case Ai:return n*e*2/s.components*s.byteLength;case Va:return n*e*2/s.components*s.byteLength;case Gl:return n*e*3/s.components*s.byteLength;case vn:return n*e*4/s.components*s.byteLength;case Ga:return n*e*4/s.components*s.byteLength;case fr:case pr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mr:case gr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wa:case qa:return Math.max(n,16)*Math.max(e,8)/4;case Ha:case $a:return Math.max(n,8)*Math.max(e,8)/2;case Xa:case Ya:case Ja:case Ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Za:case _r:case ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case eo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case to:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case no:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case io:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case so:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ro:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ao:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case oo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case lo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case co:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ho:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case uo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case fo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case po:case mo:case go:return Math.ceil(n/4)*Math.ceil(e/4)*16;case _o:case xo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case xr:case vo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zd(n){switch(n){case sn:case Ol:return{byteLength:1,components:1};case Ls:case Bl:case Wn:return{byteLength:2,components:1};case Ba:case ka:return{byteLength:2,components:4};case Cn:case Oa:case Rn:return{byteLength:4,components:1};case kl:case zl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Tu(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Gd(n){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){let h=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,h);else{d.sort((m,x)=>m.start-x.start);let u=0;for(let m=1;m<d.length;m++){let x=d[u],b=d[m];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++u,d[u]=b)}d.length=u+1;for(let m=0,x=d.length;m<x;m++){let b=d[m];n.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$d=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ff=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yf="gl_FragColor = linearToOutputTexel( gl_FragColor );",bf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Sf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Af=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,If=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Df=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ff=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Of=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$f=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Xf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ep=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ap=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,op=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_p=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ip=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Np=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Op=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$p=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,om=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,um=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_m=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ym=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:Hd,alphahash_pars_fragment:Wd,alphamap_fragment:$d,alphamap_pars_fragment:qd,alphatest_fragment:Xd,alphatest_pars_fragment:Yd,aomap_fragment:Zd,aomap_pars_fragment:Jd,batching_pars_vertex:Kd,batching_vertex:jd,begin_vertex:Qd,beginnormal_vertex:ef,bsdfs:tf,iridescence_fragment:nf,bumpmap_pars_fragment:sf,clipping_planes_fragment:rf,clipping_planes_pars_fragment:af,clipping_planes_pars_vertex:of,clipping_planes_vertex:lf,color_fragment:cf,color_pars_fragment:hf,color_pars_vertex:uf,color_vertex:df,common:ff,cube_uv_reflection_fragment:pf,defaultnormal_vertex:mf,displacementmap_pars_vertex:gf,displacementmap_vertex:_f,emissivemap_fragment:xf,emissivemap_pars_fragment:vf,colorspace_fragment:yf,colorspace_pars_fragment:bf,envmap_fragment:Mf,envmap_common_pars_fragment:Sf,envmap_pars_fragment:wf,envmap_pars_vertex:Ef,envmap_physical_pars_fragment:Ff,envmap_vertex:Tf,fog_vertex:Af,fog_pars_vertex:Cf,fog_fragment:Rf,fog_pars_fragment:If,gradientmap_pars_fragment:Pf,lightmap_pars_fragment:Lf,lights_lambert_fragment:Nf,lights_lambert_pars_fragment:Df,lights_pars_begin:Uf,lights_toon_fragment:Of,lights_toon_pars_fragment:Bf,lights_phong_fragment:kf,lights_phong_pars_fragment:zf,lights_physical_fragment:Vf,lights_physical_pars_fragment:Gf,lights_fragment_begin:Hf,lights_fragment_maps:Wf,lights_fragment_end:$f,lightprobes_pars_fragment:qf,logdepthbuf_fragment:Xf,logdepthbuf_pars_fragment:Yf,logdepthbuf_pars_vertex:Zf,logdepthbuf_vertex:Jf,map_fragment:Kf,map_pars_fragment:jf,map_particle_fragment:Qf,map_particle_pars_fragment:ep,metalnessmap_fragment:tp,metalnessmap_pars_fragment:np,morphinstance_vertex:ip,morphcolor_vertex:sp,morphnormal_vertex:rp,morphtarget_pars_vertex:ap,morphtarget_vertex:op,normal_fragment_begin:lp,normal_fragment_maps:cp,normal_pars_fragment:hp,normal_pars_vertex:up,normal_vertex:dp,normalmap_pars_fragment:fp,clearcoat_normal_fragment_begin:pp,clearcoat_normal_fragment_maps:mp,clearcoat_pars_fragment:gp,iridescence_pars_fragment:_p,opaque_fragment:xp,packing:vp,premultiplied_alpha_fragment:yp,project_vertex:bp,dithering_fragment:Mp,dithering_pars_fragment:Sp,roughnessmap_fragment:wp,roughnessmap_pars_fragment:Ep,shadowmap_pars_fragment:Tp,shadowmap_pars_vertex:Ap,shadowmap_vertex:Cp,shadowmask_pars_fragment:Rp,skinbase_vertex:Ip,skinning_pars_vertex:Pp,skinning_vertex:Lp,skinnormal_vertex:Np,specularmap_fragment:Dp,specularmap_pars_fragment:Up,tonemapping_fragment:Fp,tonemapping_pars_fragment:Op,transmission_fragment:Bp,transmission_pars_fragment:kp,uv_pars_fragment:zp,uv_pars_vertex:Vp,uv_vertex:Gp,worldpos_vertex:Hp,background_vert:Wp,background_frag:$p,backgroundCube_vert:qp,backgroundCube_frag:Xp,cube_vert:Yp,cube_frag:Zp,depth_vert:Jp,depth_frag:Kp,distance_vert:jp,distance_frag:Qp,equirect_vert:em,equirect_frag:tm,linedashed_vert:nm,linedashed_frag:im,meshbasic_vert:sm,meshbasic_frag:rm,meshlambert_vert:am,meshlambert_frag:om,meshmatcap_vert:lm,meshmatcap_frag:cm,meshnormal_vert:hm,meshnormal_frag:um,meshphong_vert:dm,meshphong_frag:fm,meshphysical_vert:pm,meshphysical_frag:mm,meshtoon_vert:gm,meshtoon_frag:_m,points_vert:xm,points_frag:vm,shadow_vert:ym,shadow_frag:bm,sprite_vert:Mm,sprite_frag:Sm},ue={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},qn={basic:{uniforms:Xt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Xt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Xt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Xt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Xt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Xt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Xt([ue.points,ue.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Xt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Xt([ue.common,ue.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Xt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Xt([ue.sprite,ue.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:Xt([ue.common,ue.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:Xt([ue.lights,ue.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};qn.physical={uniforms:Xt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var So={r:0,b:0,g:0},wm=new ht,Au=new Ne;Au.set(-1,0,0,0,1,0,0,0,1);function Em(n,e,t,i,s,r){let a=new Oe(0),o=s===!0?0:1,c,l,h=null,d=0,u=null;function m(T){let C=T.isScene===!0?T.background:null;if(C&&C.isTexture){let y=T.backgroundBlurriness>0;C=e.get(C,y)}return C}function x(T){let C=!1,y=m(T);y===null?g(a,o):y&&y.isColor&&(g(y,1),C=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(T,C){let y=m(C);y&&(y.isCubeTexture||y.mapping===ur)?(l===void 0&&(l=new zt(new vi(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:Qi(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(wm.makeRotationFromEuler(C.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Au),l.material.toneMapped=He.getTransfer(y.colorSpace)!==Qe,(h!==y||d!==y.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new zt(new Ki(2,2),new dn({name:"BackgroundMaterial",uniforms:Qi(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=He.getTransfer(y.colorSpace)!==Qe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function g(T,C){T.getRGB(So,ql(n)),t.buffers.color.setClear(So.r,So.g,So.b,C,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,C=1){a.set(T),o=C,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,g(a,o)},render:x,addToRenderList:b,dispose:f}}function Tm(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(I,U,$,X,B){let W=!1,H=d(I,X,$,U);r!==H&&(r=H,l(r.object)),W=m(I,X,$,B),W&&x(I,X,$,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,y(I,U,$,X),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return n.createVertexArray()}function l(I){return n.bindVertexArray(I)}function h(I){return n.deleteVertexArray(I)}function d(I,U,$,X){let B=X.wireframe===!0,W=i[U.id];W===void 0&&(W={},i[U.id]=W);let H=I.isInstancedMesh===!0?I.id:0,j=W[H];j===void 0&&(j={},W[H]=j);let ee=j[$.id];ee===void 0&&(ee={},j[$.id]=ee);let de=ee[B];return de===void 0&&(de=u(c()),ee[B]=de),de}function u(I){let U=[],$=[],X=[];for(let B=0;B<t;B++)U[B]=0,$[B]=0,X[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:$,attributeDivisors:X,object:I,attributes:{},index:null}}function m(I,U,$,X){let B=r.attributes,W=U.attributes,H=0,j=$.getAttributes();for(let ee in j)if(j[ee].location>=0){let ge=B[ee],ve=W[ee];if(ve===void 0&&(ee==="instanceMatrix"&&I.instanceMatrix&&(ve=I.instanceMatrix),ee==="instanceColor"&&I.instanceColor&&(ve=I.instanceColor)),ge===void 0||ge.attribute!==ve||ve&&ge.data!==ve.data)return!0;H++}return r.attributesNum!==H||r.index!==X}function x(I,U,$,X){let B={},W=U.attributes,H=0,j=$.getAttributes();for(let ee in j)if(j[ee].location>=0){let ge=W[ee];ge===void 0&&(ee==="instanceMatrix"&&I.instanceMatrix&&(ge=I.instanceMatrix),ee==="instanceColor"&&I.instanceColor&&(ge=I.instanceColor));let ve={};ve.attribute=ge,ge&&ge.data&&(ve.data=ge.data),B[ee]=ve,H++}r.attributes=B,r.attributesNum=H,r.index=X}function b(){let I=r.newAttributes;for(let U=0,$=I.length;U<$;U++)I[U]=0}function g(I){f(I,0)}function f(I,U){let $=r.newAttributes,X=r.enabledAttributes,B=r.attributeDivisors;$[I]=1,X[I]===0&&(n.enableVertexAttribArray(I),X[I]=1),B[I]!==U&&(n.vertexAttribDivisor(I,U),B[I]=U)}function T(){let I=r.newAttributes,U=r.enabledAttributes;for(let $=0,X=U.length;$<X;$++)U[$]!==I[$]&&(n.disableVertexAttribArray($),U[$]=0)}function C(I,U,$,X,B,W,H){H===!0?n.vertexAttribIPointer(I,U,$,B,W):n.vertexAttribPointer(I,U,$,X,B,W)}function y(I,U,$,X){b();let B=X.attributes,W=$.getAttributes(),H=U.defaultAttributeValues;for(let j in W){let ee=W[j];if(ee.location>=0){let de=B[j];if(de===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(de=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(de=I.instanceColor)),de!==void 0){let ge=de.normalized,ve=de.itemSize,Ze=e.get(de);if(Ze===void 0)continue;let mt=Ze.buffer,Je=Ze.type,K=Ze.bytesPerElement,re=Je===n.INT||Je===n.UNSIGNED_INT||de.gpuType===Oa;if(de.isInterleavedBufferAttribute){let te=de.data,Le=te.stride,De=de.offset;if(te.isInstancedInterleavedBuffer){for(let Ae=0;Ae<ee.locationSize;Ae++)f(ee.location+Ae,te.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ae=0;Ae<ee.locationSize;Ae++)g(ee.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,mt);for(let Ae=0;Ae<ee.locationSize;Ae++)C(ee.location+Ae,ve/ee.locationSize,Je,ge,Le*K,(De+ve/ee.locationSize*Ae)*K,re)}else{if(de.isInstancedBufferAttribute){for(let te=0;te<ee.locationSize;te++)f(ee.location+te,de.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let te=0;te<ee.locationSize;te++)g(ee.location+te);n.bindBuffer(n.ARRAY_BUFFER,mt);for(let te=0;te<ee.locationSize;te++)C(ee.location+te,ve/ee.locationSize,Je,ge,ve*K,ve/ee.locationSize*te*K,re)}}else if(H!==void 0){let ge=H[j];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(ee.location,ge);break;case 3:n.vertexAttrib3fv(ee.location,ge);break;case 4:n.vertexAttrib4fv(ee.location,ge);break;default:n.vertexAttrib1fv(ee.location,ge)}}}}T()}function E(){S();for(let I in i){let U=i[I];for(let $ in U){let X=U[$];for(let B in X){let W=X[B];for(let H in W)h(W[H].object),delete W[H];delete X[B]}}delete i[I]}}function w(I){if(i[I.id]===void 0)return;let U=i[I.id];for(let $ in U){let X=U[$];for(let B in X){let W=X[B];for(let H in W)h(W[H].object),delete W[H];delete X[B]}}delete i[I.id]}function A(I){for(let U in i){let $=i[U];for(let X in $){let B=$[X];if(B[I.id]===void 0)continue;let W=B[I.id];for(let H in W)h(W[H].object),delete W[H];delete B[I.id]}}}function _(I){for(let U in i){let $=i[U],X=I.isInstancedMesh===!0?I.id:0,B=$[X];if(B!==void 0){for(let W in B){let H=B[W];for(let j in H)h(H[j].object),delete H[j];delete B[W]}delete $[X],Object.keys($).length===0&&delete i[U]}}}function S(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:S,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:g,disableUnusedAttributes:T}}function Am(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let m=0;m<h;m++)u+=l[m];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Cm(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==vn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let _=A===Wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==sn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Rn&&!_)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ie("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:y,maxSamples:E,samples:w}}function Rm(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Bn,o=new Ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let m=d.length!==0||u||i!==0||s;return s=u,i=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,m){let x=d.clippingPlanes,b=d.clipIntersection,g=d.clipShadows,f=n.get(d);if(!s||x===null||x.length===0||r&&!g)r?h(null):l();else{let T=r?0:i,C=T*4,y=f.clippingState||null;c.value=y,y=h(x,u,C,m);for(let E=0;E!==C;++E)y[E]=t[E];f.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,m,x){let b=d!==null?d.length:0,g=null;if(b!==0){if(g=c.value,x!==!0||g===null){let f=m+b*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<f)&&(g=new Float32Array(f));for(let C=0,y=m;C!==b;++C,y+=4)a.copy(d[C]).applyMatrix4(T,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}var Ci=4,su=[.125,.215,.35,.446,.526,.582],es=20,Im=256,yr=new Si,ru=new Oe,tc=null,nc=0,ic=0,sc=!1,Pm=new O,Eo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=Pm}=r;tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(tc,nc,ic),this._renderer.xr.enabled=sc,e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wi||e.mapping===ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Wn,format:vn,colorSpace:qs,depthBuffer:!1},s=au(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=au(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Lm(r)),this._blurMaterial=Dm(r,e,t),this._ggxMaterial=Nm(r,e,t)}return s}_compileMaterial(e){let t=new zt(new jt,e);this._renderer.compile(t,yr)}_sceneToCubeUV(e,t,i,s,r){let c=new Zt(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,m=d.toneMapping;d.getClearColor(ru),d.toneMapping=An,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zt(new vi,new Zi({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,f=!1,T=e.background;T?T.isColor&&(g.color.copy(T),e.background=null,f=!0):(g.color.copy(ru),f=!0);for(let C=0;C<6;C++){let y=C%3;y===0?(c.up.set(0,l[C],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[C],r.y,r.z)):y===1?(c.up.set(0,0,l[C]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[C],r.z)):(c.up.set(0,l[C],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[C]));let E=this._cubeSize;Ds(s,y*E,C>2?E:0,E,E),d.setRenderTarget(s),f&&d.render(b,c),d.render(e,c)}d.toneMapping=m,d.autoClear=u,e.background=T}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===wi||e.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ou());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Ds(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,yr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=0+l*1.25,m=d*u,{_lodMax:x}=this,b=this._sizeLods[i],g=3*b*(i>x-Ci?i-x+Ci:0),f=4*(this._cubeSize-b);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=x-t,Ds(r,g,f,3*b,2*b),s.setRenderTarget(r),s.render(o,yr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-i,Ds(e,g,f,3*b,2*b),s.setRenderTarget(e),s.render(o,yr)}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");let h=3,d=this._lodMeshes[s];d.material=l;let u=l.uniforms,m=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*es-1),b=r/x,g=isFinite(r)?1+Math.floor(h*b):es;g>es&&Ie(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${es}`);let f=[],T=0;for(let A=0;A<es;++A){let _=A/b,S=Math.exp(-_*_/2);f.push(S),A===0?T+=S:A<g&&(T+=2*S)}for(let A=0;A<f.length;A++)f[A]=f[A]/T;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:C}=this;u.dTheta.value=x,u.mipInt.value=C-i;let y=this._sizeLods[s],E=3*y*(s>C-Ci?s-C+Ci:0),w=4*(this._cubeSize-y);Ds(t,E,w,3*y,2*y),c.setRenderTarget(t),c.render(d,yr)}};function Lm(n){let e=[],t=[],i=[],s=n,r=n-Ci+1+su.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>n-Ci?c=su[a-n+Ci-1]:a===0&&(c=0),t.push(c);let l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,x=6,b=3,g=2,f=1,T=new Float32Array(b*x*m),C=new Float32Array(g*x*m),y=new Float32Array(f*x*m);for(let w=0;w<m;w++){let A=w%3*2/3-1,_=w>2?0:-1,S=[A,_,0,A+2/3,_,0,A+2/3,_+1,0,A,_,0,A+2/3,_+1,0,A,_+1,0];T.set(S,b*x*w),C.set(u,g*x*w);let P=[w,w,w,w,w,w];y.set(P,f*x*w)}let E=new jt;E.setAttribute("position",new Jt(T,b)),E.setAttribute("uv",new Jt(C,g)),E.setAttribute("faceIndex",new Jt(y,f)),i.push(new zt(E,null)),s>Ci&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function au(n,e,t){let i=new un(n,e,t);return i.texture.mapping=ur,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ds(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Nm(n,e,t){return new dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Im,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Co(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Dm(n,e,t){let i=new Float32Array(es),s=new O(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function ou(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function lu(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Co(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var To=class extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new er(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new vi(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:Qi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:Hn});r.uniforms.tEquirect.value=t;let a=new zt(s,r),o=t.minFilter;return t.minFilter===Ei&&(t.minFilter=Bt),new Ia(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function Um(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===Da||m===Ua)if(e.has(u)){let x=e.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let b=new To(x.height);return b.fromEquirectangularTexture(n,u),e.set(u,b),u.addEventListener("dispose",l),o(b.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let m=u.mapping,x=m===Da||m===Ua,b=m===wi||m===ji;if(x||b){let g=t.get(u),f=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new Eo(n)),g=x?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let T=u.image;return x&&T&&T.height>0||b&&T&&c(T)?(i===null&&(i=new Eo(n)),g=x?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,m){return m===Da?u.mapping=wi:m===Ua&&(u.mapping=ji),u}function c(u){let m=0,x=6;for(let b=0;b<x;b++)u[b]!==void 0&&m++;return m===x}function l(u){let m=u.target;m.removeEventListener("dispose",l);let x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Fm(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&$i("WebGLRenderer: "+i+" extension not supported."),s}}}function Om(n,e,t,i){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete s[u.id];let m=r.get(u);m&&(e.remove(m),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(d){let u=d.attributes;for(let m in u)e.update(u[m],n.ARRAY_BUFFER)}function l(d){let u=[],m=d.index,x=d.attributes.position,b=0;if(x===void 0)return;if(m!==null){let T=m.array;b=m.version;for(let C=0,y=T.length;C<y;C+=3){let E=T[C+0],w=T[C+1],A=T[C+2];u.push(E,w,w,A,A,E)}}else{let T=x.array;b=x.version;for(let C=0,y=T.length/3-1;C<y;C+=3){let E=C+0,w=C+1,A=C+2;u.push(E,w,w,A,A,E)}}let g=new(x.count>=65535?Qs:js)(u,1);g.version=b;let f=r.get(d);f&&e.remove(f),r.set(d,g)}function h(d){let u=r.get(d);if(u){let m=d.index;m!==null&&u.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Bm(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){n.drawElements(i,u,r,d*a),t.update(u,i,1)}function l(d,u,m){m!==0&&(n.drawElementsInstanced(i,u,r,d*a,m),t.update(u,i,m))}function h(d,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,m);let b=0;for(let g=0;g<m;g++)b+=u[g];t.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function km(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Re("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function zm(n,e,t){let i=new WeakMap,s=new ut;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let S=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],C=0;m===!0&&(C=1),x===!0&&(C=2),b===!0&&(C=3);let y=o.attributes.position.count*C,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*E*4*d),A=new Zs(w,y,E,d);A.type=Rn,A.needsUpdate=!0;let _=C*4;for(let P=0;P<d;P++){let I=g[P],U=f[P],$=T[P],X=y*E*4*P;for(let B=0;B<I.count;B++){let W=B*_;m===!0&&(s.fromBufferAttribute(I,B),w[X+W+0]=s.x,w[X+W+1]=s.y,w[X+W+2]=s.z,w[X+W+3]=0),x===!0&&(s.fromBufferAttribute(U,B),w[X+W+4]=s.x,w[X+W+5]=s.y,w[X+W+6]=s.z,w[X+W+7]=0),b===!0&&(s.fromBufferAttribute($,B),w[X+W+8]=s.x,w[X+W+9]=s.y,w[X+W+10]=s.z,w[X+W+11]=$.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new Ve(y,E)},i.set(o,u),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let b=0;b<l.length;b++)m+=l[b];let x=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Vm(n,e,t,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let m=l.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Gm={[Il]:"LINEAR_TONE_MAPPING",[Pl]:"REINHARD_TONE_MAPPING",[Ll]:"CINEON_TONE_MAPPING",[hr]:"ACES_FILMIC_TONE_MAPPING",[Dl]:"AGX_TONE_MAPPING",[Ul]:"NEUTRAL_TONE_MAPPING",[Nl]:"CUSTOM_TONE_MAPPING"};function Hm(n,e,t,i,s,r){let a=new un(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new ii(e,t):void 0}),o=new un(e,t,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),c=new jt;c.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ot([0,2,0,0,2,0],2));let l=new ga({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new zt(c,l),d=new Si(-1,1,1,-1,0,1),u=null,m=null,x=!1,b,g=null,f=[],T=!1;this.setSize=function(C,y){a.setSize(C,y),o.setSize(C,y);for(let E=0;E<f.length;E++){let w=f[E];w.setSize&&w.setSize(C,y)}},this.setEffects=function(C){f=C,T=f.length>0&&f[0].isRenderPass===!0;let y=a.width,E=a.height;for(let w=0;w<f.length;w++){let A=f[w];A.setSize&&A.setSize(y,E)}},this.begin=function(C,y){if(x||C.toneMapping===An&&f.length===0)return!1;if(g=y,y!==null){let E=y.width,w=y.height;(a.width!==E||a.height!==w)&&this.setSize(E,w)}return T===!1&&C.setRenderTarget(a),b=C.toneMapping,C.toneMapping=An,!0},this.hasRenderPass=function(){return T},this.end=function(C,y){C.toneMapping=b,x=!0;let E=a,w=o;for(let A=0;A<f.length;A++){let _=f[A];if(_.enabled!==!1&&(_.render(C,w,E,y),_.needsSwap!==!1)){let S=E;E=w,w=S}}if(u!==C.outputColorSpace||m!==C.toneMapping){u=C.outputColorSpace,m=C.toneMapping,l.defines={},He.getTransfer(u)===Qe&&(l.defines.SRGB_TRANSFER="");let A=Gm[m];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,C.setRenderTarget(g),C.render(h,d),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}var Cu=new Kt,oc=new ii(1,1),Ru=new Zs,Iu=new fa,Pu=new er,cu=[],hu=[],uu=new Float32Array(16),du=new Float32Array(9),fu=new Float32Array(4);function Fs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=cu[s];if(r===void 0&&(r=new Float32Array(s),cu[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ro(n,e){let t=hu[e];t===void 0&&(t=new Int32Array(e),hu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Wm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $m(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function qm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function Xm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function Ym(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,i))return;fu.set(i),n.uniformMatrix2fv(this.addr,!1,fu),Ct(t,i)}}function Zm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,i))return;du.set(i),n.uniformMatrix3fv(this.addr,!1,du),Ct(t,i)}}function Jm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,i))return;uu.set(i),n.uniformMatrix4fv(this.addr,!1,uu),Ct(t,i)}}function Km(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function jm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function Qm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function eg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function tg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ng(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function ig(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function sg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function rg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(oc.compareFunction=t.isReversedDepthBuffer()?Mo:bo,r=oc):r=Cu,t.setTexture2D(e||r,s)}function ag(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Iu,s)}function og(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Pu,s)}function lg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ru,s)}function cg(n){switch(n){case 5126:return Wm;case 35664:return $m;case 35665:return qm;case 35666:return Xm;case 35674:return Ym;case 35675:return Zm;case 35676:return Jm;case 5124:case 35670:return Km;case 35667:case 35671:return jm;case 35668:case 35672:return Qm;case 35669:case 35673:return eg;case 5125:return tg;case 36294:return ng;case 36295:return ig;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return lg}}function hg(n,e){n.uniform1fv(this.addr,e)}function ug(n,e){let t=Fs(e,this.size,2);n.uniform2fv(this.addr,t)}function dg(n,e){let t=Fs(e,this.size,3);n.uniform3fv(this.addr,t)}function fg(n,e){let t=Fs(e,this.size,4);n.uniform4fv(this.addr,t)}function pg(n,e){let t=Fs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function mg(n,e){let t=Fs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function gg(n,e){let t=Fs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function _g(n,e){n.uniform1iv(this.addr,e)}function xg(n,e){n.uniform2iv(this.addr,e)}function vg(n,e){n.uniform3iv(this.addr,e)}function yg(n,e){n.uniform4iv(this.addr,e)}function bg(n,e){n.uniform1uiv(this.addr,e)}function Mg(n,e){n.uniform2uiv(this.addr,e)}function Sg(n,e){n.uniform3uiv(this.addr,e)}function wg(n,e){n.uniform4uiv(this.addr,e)}function Eg(n,e,t){let i=this.cache,s=e.length,r=Ro(t,s);At(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=oc:a=Cu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Tg(n,e,t){let i=this.cache,s=e.length,r=Ro(t,s);At(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Iu,r[a])}function Ag(n,e,t){let i=this.cache,s=e.length,r=Ro(t,s);At(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Pu,r[a])}function Cg(n,e,t){let i=this.cache,s=e.length,r=Ro(t,s);At(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ru,r[a])}function Rg(n){switch(n){case 5126:return hg;case 35664:return ug;case 35665:return dg;case 35666:return fg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return _g;case 35667:case 35671:return xg;case 35668:case 35672:return vg;case 35669:case 35673:return yg;case 5125:return bg;case 36294:return Mg;case 36295:return Sg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Cg}}var lc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=cg(t.type)}},cc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rg(t.type)}},hc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},rc=/(\w+)(\])?(\[|\.)?/g;function pu(n,e){n.seq.push(e),n.map[e.id]=e}function Ig(n,e,t){let i=n.name,s=i.length;for(rc.lastIndex=0;;){let r=rc.exec(i),a=rc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){pu(t,l===void 0?new lc(o,n,e):new cc(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new hc(o),pu(t,d)),t=d}}}var Us=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Ig(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function mu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Pg=37297,Lg=0;function Ng(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var gu=new Ne;function Dg(n){He._getMatrix(gu,He.workingColorSpace,n);let e=`mat3( ${gu.elements.map(t=>t.toFixed(4))} )`;switch(He.getTransfer(n)){case Xs:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function _u(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Ng(n.getShaderSource(e),o)}else return r}function Ug(n,e){let t=Dg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Fg={[Il]:"Linear",[Pl]:"Reinhard",[Ll]:"Cineon",[hr]:"ACESFilmic",[Dl]:"AgX",[Ul]:"Neutral",[Nl]:"Custom"};function Og(n,e){let t=Fg[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var wo=new O;function Bg(){He.getLuminanceCoefficients(wo);let n=wo.x.toFixed(4),e=wo.y.toFixed(4),t=wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function zg(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Vg(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Mr(n){return n!==""}function xu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Gg=/^[ \t]*#include +<([\w\d./]+)>/gm;function uc(n){return n.replace(Gg,Wg)}var Hg=new Map;function Wg(n,e){let t=Be[e];if(t===void 0){let i=Hg.get(e);if(i!==void 0)t=Be[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return uc(t)}var $g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yu(n){return n.replace($g,qg)}function qg(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Xg={[cr]:"SHADOWMAP_TYPE_PCF",[Ps]:"SHADOWMAP_TYPE_VSM"};function Yg(n){return Xg[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Zg={[wi]:"ENVMAP_TYPE_CUBE",[ji]:"ENVMAP_TYPE_CUBE",[ur]:"ENVMAP_TYPE_CUBE_UV"};function Jg(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Zg[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Kg={[ji]:"ENVMAP_MODE_REFRACTION"};function jg(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Kg[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Qg={[Rl]:"ENVMAP_BLENDING_MULTIPLY",[zh]:"ENVMAP_BLENDING_MIX",[Vh]:"ENVMAP_BLENDING_ADD"};function e0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Qg[n.combine]||"ENVMAP_BLENDING_NONE"}function t0(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function n0(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Yg(t),l=Jg(t),h=jg(t),d=e0(t),u=t0(t),m=kg(t),x=zg(r),b=s.createProgram(),g,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Mr).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Mr).join(`
`),f.length>0&&(f+=`
`)):(g=[bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),f=[bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==An?"#define TONE_MAPPING":"",t.toneMapping!==An?Be.tonemapping_pars_fragment:"",t.toneMapping!==An?Og("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Ug("linearToOutputTexel",t.outputColorSpace),Bg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mr).join(`
`)),a=uc(a),a=xu(a,t),a=vu(a,t),o=uc(o),o=xu(o,t),o=vu(o,t),a=yu(a),o=yu(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===Wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let C=T+g+a,y=T+f+o,E=mu(s,s.VERTEX_SHADER,C),w=mu(s,s.FRAGMENT_SHADER,y);s.attachShader(b,E),s.attachShader(b,w),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function A(I){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(b)||"",$=s.getShaderInfoLog(E)||"",X=s.getShaderInfoLog(w)||"",B=U.trim(),W=$.trim(),H=X.trim(),j=!0,ee=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,b,E,w);else{let de=_u(s,E,"vertex"),ge=_u(s,w,"fragment");Re("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+de+`
`+ge)}else B!==""?Ie("WebGLProgram: Program Info Log:",B):(W===""||H==="")&&(ee=!1);ee&&(I.diagnostics={runnable:j,programLog:B,vertexShader:{log:W,prefix:g},fragmentShader:{log:H,prefix:f}})}s.deleteShader(E),s.deleteShader(w),_=new Us(s,b),S=Vg(s,b)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(b,Pg)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lg++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=E,this.fragmentShader=w,this}var i0=0,dc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new fc(e),t.set(e,i)),i}},fc=class{constructor(e){this.id=i0++,this.code=e,this.usedTimes=0}};function s0(n){return n===Ai||n===_r||n===xr}function r0(n,e,t,i,s,r){let a=new Ms,o=new dc,c=new Set,l=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function b(_,S,P,I,U,$){let X=I.fog,B=U.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,j=e.get(_.envMap||W,H),ee=j&&j.mapping===ur?j.image.height:null,de=m[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&Ie("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let ge=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ve=ge!==void 0?ge.length:0,Ze=0;B.morphAttributes.position!==void 0&&(Ze=1),B.morphAttributes.normal!==void 0&&(Ze=2),B.morphAttributes.color!==void 0&&(Ze=3);let mt,Je,K,re;if(de){let ye=qn[de];mt=ye.vertexShader,Je=ye.fragmentShader}else{mt=_.vertexShader,Je=_.fragmentShader;let ye=o.getVertexShaderStage(_),_t=o.getFragmentShaderStage(_);o.update(_,ye,_t),K=ye.id,re=_t.id}let te=n.getRenderTarget(),Le=n.state.buffers.depth.getReversed(),De=U.isInstancedMesh===!0,Ae=U.isBatchedMesh===!0,vt=!!_.map,Ge=!!_.matcap,st=!!j,Ke=!!_.aoMap,qe=!!_.lightMap,Mt=!!_.bumpMap&&_.wireframe===!1,Et=!!_.normalMap,It=!!_.displacementMap,Dt=!!_.emissiveMap,gt=!!_.metalnessMap,St=!!_.roughnessMap,N=_.anisotropy>0,tn=_.clearcoat>0,nt=_.dispersion>0,M=_.iridescence>0,p=_.sheen>0,F=_.transmission>0,V=N&&!!_.anisotropyMap,q=tn&&!!_.clearcoatMap,ne=tn&&!!_.clearcoatNormalMap,ae=tn&&!!_.clearcoatRoughnessMap,Y=M&&!!_.iridescenceMap,J=M&&!!_.iridescenceThicknessMap,oe=p&&!!_.sheenColorMap,Se=p&&!!_.sheenRoughnessMap,he=!!_.specularMap,le=!!_.specularColorMap,Te=!!_.specularIntensityMap,Ce=F&&!!_.transmissionMap,Ue=F&&!!_.thicknessMap,L=!!_.gradientMap,se=!!_.alphaMap,Z=_.alphaTest>0,ce=!!_.alphaHash,me=!!_.extensions,Q=An;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Q=n.toneMapping);let Me={shaderID:de,shaderType:_.type,shaderName:_.name,vertexShader:mt,fragmentShader:Je,defines:_.defines,customVertexShaderID:K,customFragmentShaderID:re,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Ae,batchingColor:Ae&&U._colorsTexture!==null,instancing:De,instancingColor:De&&U.instanceColor!==null,instancingMorph:De&&U.morphTexture!==null,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:He.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:vt,matcap:Ge,envMap:st,envMapMode:st&&j.mapping,envMapCubeUVHeight:ee,aoMap:Ke,lightMap:qe,bumpMap:Mt,normalMap:Et,displacementMap:It,emissiveMap:Dt,normalMapObjectSpace:Et&&_.normalMapType===Wh,normalMapTangentSpace:Et&&_.normalMapType===yo,packedNormalMap:Et&&_.normalMapType===yo&&s0(_.normalMap.format),metalnessMap:gt,roughnessMap:St,anisotropy:N,anisotropyMap:V,clearcoat:tn,clearcoatMap:q,clearcoatNormalMap:ne,clearcoatRoughnessMap:ae,dispersion:nt,iridescence:M,iridescenceMap:Y,iridescenceThicknessMap:J,sheen:p,sheenColorMap:oe,sheenRoughnessMap:Se,specularMap:he,specularColorMap:le,specularIntensityMap:Te,transmission:F,transmissionMap:Ce,thicknessMap:Ue,gradientMap:L,opaque:_.transparent===!1&&_.blending===qi&&_.alphaToCoverage===!1,alphaMap:se,alphaTest:Z,alphaHash:ce,combine:_.combine,mapUv:vt&&x(_.map.channel),aoMapUv:Ke&&x(_.aoMap.channel),lightMapUv:qe&&x(_.lightMap.channel),bumpMapUv:Mt&&x(_.bumpMap.channel),normalMapUv:Et&&x(_.normalMap.channel),displacementMapUv:It&&x(_.displacementMap.channel),emissiveMapUv:Dt&&x(_.emissiveMap.channel),metalnessMapUv:gt&&x(_.metalnessMap.channel),roughnessMapUv:St&&x(_.roughnessMap.channel),anisotropyMapUv:V&&x(_.anisotropyMap.channel),clearcoatMapUv:q&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:ne&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:J&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Se&&x(_.sheenRoughnessMap.channel),specularMapUv:he&&x(_.specularMap.channel),specularColorMapUv:le&&x(_.specularColorMap.channel),specularIntensityMapUv:Te&&x(_.specularIntensityMap.channel),transmissionMapUv:Ce&&x(_.transmissionMap.channel),thicknessMapUv:Ue&&x(_.thicknessMap.channel),alphaMapUv:se&&x(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Et||N),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(vt||se),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&Et===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Le,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ze,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Q,decodeVideoTexture:vt&&_.map.isVideoTexture===!0&&He.getTransfer(_.map.colorSpace)===Qe,decodeVideoTextureEmissive:Dt&&_.emissiveMap.isVideoTexture===!0&&He.getTransfer(_.emissiveMap.colorSpace)===Qe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===xn,flipSided:_.side===Qt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:me&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&_.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function g(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)S.push(P),S.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(f(S,_),T(S,_),S.push(n.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function f(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function T(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function C(_){let S=m[_.type],P;if(S){let I=qn[S];P=nu.clone(I.uniforms)}else P=_.uniforms;return P}function y(_,S){let P=h.get(S);return P!==void 0?++P.usedTimes:(P=new n0(n,S,_,s),l.push(P),h.set(S,P)),P}function E(_){if(--_.usedTimes===0){let S=l.indexOf(_);l[S]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function A(){o.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:C,acquireProgram:y,releaseProgram:E,releaseShaderCache:w,programs:l,dispose:A}}function a0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function o0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Mu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Su(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,x,b,g,f){let T=n[e];return T===void 0?(T={id:u.id,object:u,geometry:m,material:x,materialVariant:a(u),groupOrder:b,renderOrder:u.renderOrder,z:g,group:f},n[e]=T):(T.id=u.id,T.object=u,T.geometry=m,T.material=x,T.materialVariant=a(u),T.groupOrder=b,T.renderOrder=u.renderOrder,T.z=g,T.group=f),e++,T}function c(u,m,x,b,g,f){let T=o(u,m,x,b,g,f);x.transmission>0?i.push(T):x.transparent===!0?s.push(T):t.push(T)}function l(u,m,x,b,g,f){let T=o(u,m,x,b,g,f);x.transmission>0?i.unshift(T):x.transparent===!0?s.unshift(T):t.unshift(T)}function h(u,m,x){t.length>1&&t.sort(u||o0),i.length>1&&i.sort(m||Mu),s.length>1&&s.sort(m||Mu),x&&(t.reverse(),i.reverse(),s.reverse())}function d(){for(let u=e,m=n.length;u<m;u++){let x=n[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function l0(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Su,n.set(i,[a])):s>=r.length?(a=new Su,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function c0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Oe};break;case"SpotLight":t={position:new O,direction:new O,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function h0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var u0=0;function d0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function f0(n){let e=new c0,t=h0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);let s=new O,r=new ht,a=new ht;function o(l){let h=0,d=0,u=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let m=0,x=0,b=0,g=0,f=0,T=0,C=0,y=0,E=0,w=0,A=0;l.sort(d0);for(let S=0,P=l.length;S<P;S++){let I=l[S],U=I.color,$=I.intensity,X=I.distance,B=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ai?B=I.shadow.map.texture:B=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=U.r*$,d+=U.g*$,u+=U.b*$;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],$);A++}else if(I.isDirectionalLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let H=I.shadow,j=t.get(I);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,i.directionalShadow[m]=j,i.directionalShadowMap[m]=B,i.directionalShadowMatrix[m]=I.shadow.matrix,T++}i.directional[m]=W,m++}else if(I.isSpotLight){let W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(U).multiplyScalar($),W.distance=X,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[b]=W;let H=I.shadow;if(I.map&&(i.spotLightMap[E]=I.map,E++,H.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[b]=H.matrix,I.castShadow){let j=t.get(I);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,i.spotShadow[b]=j,i.spotShadowMap[b]=B,y++}b++}else if(I.isRectAreaLight){let W=e.get(I);W.color.copy(U).multiplyScalar($),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=W,g++}else if(I.isPointLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let H=I.shadow,j=t.get(I);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,j.shadowCameraNear=H.camera.near,j.shadowCameraFar=H.camera.far,i.pointShadow[x]=j,i.pointShadowMap[x]=B,i.pointShadowMatrix[x]=I.shadow.matrix,C++}i.point[x]=W,x++}else if(I.isHemisphereLight){let W=e.get(I);W.skyColor.copy(I.color).multiplyScalar($),W.groundColor.copy(I.groundColor).multiplyScalar($),i.hemi[f]=W,f++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let _=i.hash;(_.directionalLength!==m||_.pointLength!==x||_.spotLength!==b||_.rectAreaLength!==g||_.hemiLength!==f||_.numDirectionalShadows!==T||_.numPointShadows!==C||_.numSpotShadows!==y||_.numSpotMaps!==E||_.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=b,i.rectArea.length=g,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=y+E-w,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,_.directionalLength=m,_.pointLength=x,_.spotLength=b,_.rectAreaLength=g,_.hemiLength=f,_.numDirectionalShadows=T,_.numPointShadows=C,_.numSpotShadows=y,_.numSpotMaps=E,_.numLightProbes=A,i.version=u0++)}function c(l,h){let d=0,u=0,m=0,x=0,b=0,g=h.matrixWorldInverse;for(let f=0,T=l.length;f<T;f++){let C=l[f];if(C.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(C.isSpotLight){let y=i.spot[m];y.position.setFromMatrixPosition(C.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),m++}else if(C.isRectAreaLight){let y=i.rectArea[x];y.position.setFromMatrixPosition(C.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(C.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(C.width*.5,0,0),y.halfHeight.set(0,C.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(C.isPointLight){let y=i.point[u];y.position.setFromMatrixPosition(C.matrixWorld),y.position.applyMatrix4(g),u++}else if(C.isHemisphereLight){let y=i.hemi[b];y.direction.setFromMatrixPosition(C.matrixWorld),y.direction.transformDirection(g),b++}}}return{setup:o,setupView:c,state:i}}function wu(n){let e=new f0(n),t=[],i=[],s=[];function r(u){d.camera=u,t.length=0,i.length=0,s.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function c(u){s.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function p0(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new wu(n),e.set(s,[o])):r>=a.length?(o=new wu(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var m0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_0=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],x0=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Eu=new ht,br=new O,ac=new O;function v0(n,e,t){let i=new Es,s=new Ve,r=new Ve,a=new ut,o=new _a,c=new xa,l={},h=t.maxTextureSize,d={[ei]:Qt,[Qt]:ei,[xn]:xn},u=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:m0,fragmentShader:g0}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let x=new jt;x.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new zt(x,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cr;let f=this.type;this.render=function(w,A,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Na&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=cr);let S=n.getRenderTarget(),P=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Hn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let $=f!==this.type;$&&A.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(B=>B.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,B=w.length;X<B;X++){let W=w[X],H=W.shadow;if(H===void 0){Ie("WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let j=H.getFrameExtents();s.multiply(j),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,H.mapSize.y=r.y));let ee=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ee,H.map===null||$===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ps){if(W.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new un(s.x,s.y,{format:Ai,type:Wn,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),H.map.texture.name=W.name+".shadowMap",H.map.depthTexture=new ii(s.x,s.y,Rn),H.map.depthTexture.name=W.name+".shadowMapDepth",H.map.depthTexture.format=zn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Lt,H.map.depthTexture.magFilter=Lt}else W.isPointLight?(H.map=new To(s.x),H.map.depthTexture=new ma(s.x,Cn)):(H.map=new un(s.x,s.y),H.map.depthTexture=new ii(s.x,s.y,Cn)),H.map.depthTexture.name=W.name+".shadowMap",H.map.depthTexture.format=zn,this.type===cr?(H.map.depthTexture.compareFunction=ee?Mo:bo,H.map.depthTexture.minFilter=Bt,H.map.depthTexture.magFilter=Bt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Lt,H.map.depthTexture.magFilter=Lt);H.camera.updateProjectionMatrix()}let de=H.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<de;ge++){if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,ge),n.clear();else{ge===0&&(n.setRenderTarget(H.map),n.clear());let ve=H.getViewport(ge);a.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),U.viewport(a)}if(W.isPointLight){let ve=H.camera,Ze=H.matrix,mt=W.distance||ve.far;mt!==ve.far&&(ve.far=mt,ve.updateProjectionMatrix()),br.setFromMatrixPosition(W.matrixWorld),ve.position.copy(br),ac.copy(ve.position),ac.add(_0[ge]),ve.up.copy(x0[ge]),ve.lookAt(ac),ve.updateMatrixWorld(),Ze.makeTranslation(-br.x,-br.y,-br.z),Eu.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Eu,ve.coordinateSystem,ve.reversedDepth)}else H.updateMatrices(W);i=H.getFrustum(),y(A,_,H.camera,W,this.type)}H.isPointLightShadow!==!0&&this.type===Ps&&T(H,_),H.needsUpdate=!1}f=this.type,g.needsUpdate=!1,n.setRenderTarget(S,P,I)};function T(w,A){let _=e.update(b);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new un(s.x,s.y,{format:Ai,type:Wn})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,_,u,b,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,_,m,b,null)}function C(w,A,_,S){let P=null,I=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)P=I;else if(P=_.isPointLight===!0?c:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let U=P.uuid,$=A.uuid,X=l[U];X===void 0&&(X={},l[U]=X);let B=X[$];B===void 0&&(B=P.clone(),X[$]=B,A.addEventListener("dispose",E)),P=B}if(P.visible=A.visible,P.wireframe=A.wireframe,S===Ps?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:d[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let U=n.properties.get(P);U.light=_}return P}function y(w,A,_,S,P){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===Ps)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let $=e.update(w),X=w.material;if(Array.isArray(X)){let B=$.groups;for(let W=0,H=B.length;W<H;W++){let j=B[W],ee=X[j.materialIndex];if(ee&&ee.visible){let de=C(w,ee,S,P);w.onBeforeShadow(n,w,A,_,$,de,j),n.renderBufferDirect(_,null,$,de,w,j),w.onAfterShadow(n,w,A,_,$,de,j)}}}else if(X.visible){let B=C(w,X,S,P);w.onBeforeShadow(n,w,A,_,$,B,null),n.renderBufferDirect(_,null,$,B,w,null),w.onAfterShadow(n,w,A,_,$,B,null)}}let U=w.children;for(let $=0,X=U.length;$<X;$++)y(U[$],A,_,S,P)}function E(w){w.target.removeEventListener("dispose",E);for(let _ in l){let S=l[_],P=w.target.uuid;P in S&&(S[P].dispose(),delete S[P])}}}function y0(n,e){function t(){let L=!1,se=new ut,Z=null,ce=new ut(0,0,0,0);return{setMask:function(me){Z!==me&&!L&&(n.colorMask(me,me,me,me),Z=me)},setLocked:function(me){L=me},setClear:function(me,Q,Me,ye,_t){_t===!0&&(me*=ye,Q*=ye,Me*=ye),se.set(me,Q,Me,ye),ce.equals(se)===!1&&(n.clearColor(me,Q,Me,ye),ce.copy(se))},reset:function(){L=!1,Z=null,ce.set(-1,0,0,0)}}}function i(){let L=!1,se=!1,Z=null,ce=null,me=null;return{setReversed:function(Q){if(se!==Q){let Me=e.get("EXT_clip_control");Q?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),se=Q;let ye=me;me=null,this.setClear(ye)}},getReversed:function(){return se},setTest:function(Q){Q?te(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(Q){Z!==Q&&!L&&(n.depthMask(Q),Z=Q)},setFunc:function(Q){if(se&&(Q=eu[Q]),ce!==Q){switch(Q){case ea:n.depthFunc(n.NEVER);break;case ta:n.depthFunc(n.ALWAYS);break;case na:n.depthFunc(n.LESS);break;case Xi:n.depthFunc(n.LEQUAL);break;case ia:n.depthFunc(n.EQUAL);break;case sa:n.depthFunc(n.GEQUAL);break;case ra:n.depthFunc(n.GREATER);break;case aa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=Q}},setLocked:function(Q){L=Q},setClear:function(Q){me!==Q&&(me=Q,se&&(Q=1-Q),n.clearDepth(Q))},reset:function(){L=!1,Z=null,ce=null,me=null,se=!1}}}function s(){let L=!1,se=null,Z=null,ce=null,me=null,Q=null,Me=null,ye=null,_t=null;return{setTest:function(ot){L||(ot?te(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(ot){se!==ot&&!L&&(n.stencilMask(ot),se=ot)},setFunc:function(ot,Ln,Nn){(Z!==ot||ce!==Ln||me!==Nn)&&(n.stencilFunc(ot,Ln,Nn),Z=ot,ce=Ln,me=Nn)},setOp:function(ot,Ln,Nn){(Q!==ot||Me!==Ln||ye!==Nn)&&(n.stencilOp(ot,Ln,Nn),Q=ot,Me=Ln,ye=Nn)},setLocked:function(ot){L=ot},setClear:function(ot){_t!==ot&&(n.clearStencil(ot),_t=ot)},reset:function(){L=!1,se=null,Z=null,ce=null,me=null,Q=null,Me=null,ye=null,_t=null}}}let r=new t,a=new i,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},u={},m=new WeakMap,x=[],b=null,g=!1,f=null,T=null,C=null,y=null,E=null,w=null,A=null,_=new Oe(0,0,0),S=0,P=!1,I=null,U=null,$=null,X=null,B=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,j=0,ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ee)[1]),H=j>=1):ee.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),H=j>=2);let de=null,ge={},ve=n.getParameter(n.SCISSOR_BOX),Ze=n.getParameter(n.VIEWPORT),mt=new ut().fromArray(ve),Je=new ut().fromArray(Ze);function K(L,se,Z,ce){let me=new Uint8Array(4),Q=n.createTexture();n.bindTexture(L,Q),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Me=0;Me<Z;Me++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(se+Me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return Q}let re={};re[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(n.DEPTH_TEST),a.setFunc(Xi),Mt(!1),Et(El),te(n.CULL_FACE),Ke(Hn);function te(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function Le(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function De(L,se){return u[L]!==se?(n.bindFramebuffer(L,se),u[L]=se,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=se),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=se),!0):!1}function Ae(L,se){let Z=x,ce=!1;if(L){Z=m.get(se),Z===void 0&&(Z=[],m.set(se,Z));let me=L.textures;if(Z.length!==me.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let Q=0,Me=me.length;Q<Me;Q++)Z[Q]=n.COLOR_ATTACHMENT0+Q;Z.length=me.length,ce=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,ce=!0);ce&&n.drawBuffers(Z)}function vt(L){return b!==L?(n.useProgram(L),b=L,!0):!1}let Ge={[_i]:n.FUNC_ADD,[Sh]:n.FUNC_SUBTRACT,[wh]:n.FUNC_REVERSE_SUBTRACT};Ge[Eh]=n.MIN,Ge[Th]=n.MAX;let st={[Ah]:n.ZERO,[Ch]:n.ONE,[Rh]:n.SRC_COLOR,[jr]:n.SRC_ALPHA,[Uh]:n.SRC_ALPHA_SATURATE,[Nh]:n.DST_COLOR,[Ph]:n.DST_ALPHA,[Ih]:n.ONE_MINUS_SRC_COLOR,[Qr]:n.ONE_MINUS_SRC_ALPHA,[Dh]:n.ONE_MINUS_DST_COLOR,[Lh]:n.ONE_MINUS_DST_ALPHA,[Fh]:n.CONSTANT_COLOR,[Oh]:n.ONE_MINUS_CONSTANT_COLOR,[Bh]:n.CONSTANT_ALPHA,[kh]:n.ONE_MINUS_CONSTANT_ALPHA};function Ke(L,se,Z,ce,me,Q,Me,ye,_t,ot){if(L===Hn){g===!0&&(Le(n.BLEND),g=!1);return}if(g===!1&&(te(n.BLEND),g=!0),L!==Mh){if(L!==f||ot!==P){if((T!==_i||E!==_i)&&(n.blendEquation(n.FUNC_ADD),T=_i,E=_i),ot)switch(L){case qi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tl:n.blendFunc(n.ONE,n.ONE);break;case Al:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Re("WebGLState: Invalid blending: ",L);break}else switch(L){case qi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Al:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cl:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",L);break}C=null,y=null,w=null,A=null,_.set(0,0,0),S=0,f=L,P=ot}return}me=me||se,Q=Q||Z,Me=Me||ce,(se!==T||me!==E)&&(n.blendEquationSeparate(Ge[se],Ge[me]),T=se,E=me),(Z!==C||ce!==y||Q!==w||Me!==A)&&(n.blendFuncSeparate(st[Z],st[ce],st[Q],st[Me]),C=Z,y=ce,w=Q,A=Me),(ye.equals(_)===!1||_t!==S)&&(n.blendColor(ye.r,ye.g,ye.b,_t),_.copy(ye),S=_t),f=L,P=!1}function qe(L,se){L.side===xn?Le(n.CULL_FACE):te(n.CULL_FACE);let Z=L.side===Qt;se&&(Z=!Z),Mt(Z),L.blending===qi&&L.transparent===!1?Ke(Hn):Ke(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let ce=L.stencilWrite;o.setTest(ce),ce&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Dt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(L){I!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),I=L)}function Et(L){L!==yh?(te(n.CULL_FACE),L!==U&&(L===El?n.cullFace(n.BACK):L===bh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),U=L}function It(L){L!==$&&(H&&n.lineWidth(L),$=L)}function Dt(L,se,Z){L?(te(n.POLYGON_OFFSET_FILL),(X!==se||B!==Z)&&(X=se,B=Z,a.getReversed()&&(se=-se),n.polygonOffset(se,Z))):Le(n.POLYGON_OFFSET_FILL)}function gt(L){L?te(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function St(L){L===void 0&&(L=n.TEXTURE0+W-1),de!==L&&(n.activeTexture(L),de=L)}function N(L,se,Z){Z===void 0&&(de===null?Z=n.TEXTURE0+W-1:Z=de);let ce=ge[Z];ce===void 0&&(ce={type:void 0,texture:void 0},ge[Z]=ce),(ce.type!==L||ce.texture!==se)&&(de!==Z&&(n.activeTexture(Z),de=Z),n.bindTexture(L,se||re[L]),ce.type=L,ce.texture=se)}function tn(){let L=ge[de];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function nt(){try{n.compressedTexImage2D(...arguments)}catch(L){Re("WebGLState:",L)}}function M(){try{n.compressedTexImage3D(...arguments)}catch(L){Re("WebGLState:",L)}}function p(){try{n.texSubImage2D(...arguments)}catch(L){Re("WebGLState:",L)}}function F(){try{n.texSubImage3D(...arguments)}catch(L){Re("WebGLState:",L)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Re("WebGLState:",L)}}function q(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Re("WebGLState:",L)}}function ne(){try{n.texStorage2D(...arguments)}catch(L){Re("WebGLState:",L)}}function ae(){try{n.texStorage3D(...arguments)}catch(L){Re("WebGLState:",L)}}function Y(){try{n.texImage2D(...arguments)}catch(L){Re("WebGLState:",L)}}function J(){try{n.texImage3D(...arguments)}catch(L){Re("WebGLState:",L)}}function oe(L){return d[L]!==void 0?d[L]:n.getParameter(L)}function Se(L,se){d[L]!==se&&(n.pixelStorei(L,se),d[L]=se)}function he(L){mt.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),mt.copy(L))}function le(L){Je.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Je.copy(L))}function Te(L,se){let Z=l.get(se);Z===void 0&&(Z=new WeakMap,l.set(se,Z));let ce=Z.get(L);ce===void 0&&(ce=n.getUniformBlockIndex(se,L.name),Z.set(L,ce))}function Ce(L,se){let ce=l.get(se).get(L);c.get(se)!==ce&&(n.uniformBlockBinding(se,ce,L.__bindingPointIndex),c.set(se,ce))}function Ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},de=null,ge={},u={},m=new WeakMap,x=[],b=null,g=!1,f=null,T=null,C=null,y=null,E=null,w=null,A=null,_=new Oe(0,0,0),S=0,P=!1,I=null,U=null,$=null,X=null,B=null,mt.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:Le,bindFramebuffer:De,drawBuffers:Ae,useProgram:vt,setBlending:Ke,setMaterial:qe,setFlipSided:Mt,setCullFace:Et,setLineWidth:It,setPolygonOffset:Dt,setScissorTest:gt,activeTexture:St,bindTexture:N,unbindTexture:tn,compressedTexImage2D:nt,compressedTexImage3D:M,texImage2D:Y,texImage3D:J,pixelStorei:Se,getParameter:oe,updateUBOMapping:Te,uniformBlockBinding:Ce,texStorage2D:ne,texStorage3D:ae,texSubImage2D:p,texSubImage3D:F,compressedTexSubImage2D:V,compressedTexSubImage3D:q,scissor:he,viewport:le,reset:Ue}}function b0(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ve,h=new WeakMap,d=new Set,u,m=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(M,p){return x?new OffscreenCanvas(M,p):Ys("canvas")}function g(M,p,F){let V=1,q=nt(M);if((q.width>F||q.height>F)&&(V=F/Math.max(q.width,q.height)),V<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let ne=Math.floor(V*q.width),ae=Math.floor(V*q.height);u===void 0&&(u=b(ne,ae));let Y=p?b(ne,ae):u;return Y.width=ne,Y.height=ae,Y.getContext("2d").drawImage(M,0,0,ne,ae),Ie("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+ne+"x"+ae+")."),Y}else return"data"in M&&Ie("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),M;return M}function f(M){return M.generateMipmaps}function T(M){n.generateMipmap(M)}function C(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(M,p,F,V,q,ne=!1){if(M!==null){if(n[M]!==void 0)return n[M];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ae;V&&(ae=e.get("EXT_texture_norm16"),ae||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=p;if(p===n.RED&&(F===n.FLOAT&&(Y=n.R32F),F===n.HALF_FLOAT&&(Y=n.R16F),F===n.UNSIGNED_BYTE&&(Y=n.R8),F===n.UNSIGNED_SHORT&&ae&&(Y=ae.R16_EXT),F===n.SHORT&&ae&&(Y=ae.R16_SNORM_EXT)),p===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.R8UI),F===n.UNSIGNED_SHORT&&(Y=n.R16UI),F===n.UNSIGNED_INT&&(Y=n.R32UI),F===n.BYTE&&(Y=n.R8I),F===n.SHORT&&(Y=n.R16I),F===n.INT&&(Y=n.R32I)),p===n.RG&&(F===n.FLOAT&&(Y=n.RG32F),F===n.HALF_FLOAT&&(Y=n.RG16F),F===n.UNSIGNED_BYTE&&(Y=n.RG8),F===n.UNSIGNED_SHORT&&ae&&(Y=ae.RG16_EXT),F===n.SHORT&&ae&&(Y=ae.RG16_SNORM_EXT)),p===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RG8UI),F===n.UNSIGNED_SHORT&&(Y=n.RG16UI),F===n.UNSIGNED_INT&&(Y=n.RG32UI),F===n.BYTE&&(Y=n.RG8I),F===n.SHORT&&(Y=n.RG16I),F===n.INT&&(Y=n.RG32I)),p===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),F===n.UNSIGNED_INT&&(Y=n.RGB32UI),F===n.BYTE&&(Y=n.RGB8I),F===n.SHORT&&(Y=n.RGB16I),F===n.INT&&(Y=n.RGB32I)),p===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),F===n.UNSIGNED_INT&&(Y=n.RGBA32UI),F===n.BYTE&&(Y=n.RGBA8I),F===n.SHORT&&(Y=n.RGBA16I),F===n.INT&&(Y=n.RGBA32I)),p===n.RGB&&(F===n.UNSIGNED_SHORT&&ae&&(Y=ae.RGB16_EXT),F===n.SHORT&&ae&&(Y=ae.RGB16_SNORM_EXT),F===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),p===n.RGBA){let J=ne?Xs:He.getTransfer(q);F===n.FLOAT&&(Y=n.RGBA32F),F===n.HALF_FLOAT&&(Y=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Y=J===Qe?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT&&ae&&(Y=ae.RGBA16_EXT),F===n.SHORT&&ae&&(Y=ae.RGBA16_SNORM_EXT),F===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function E(M,p){let F;return M?p===null||p===Cn||p===Ns?F=n.DEPTH24_STENCIL8:p===Rn?F=n.DEPTH32F_STENCIL8:p===Ls&&(F=n.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===Cn||p===Ns?F=n.DEPTH_COMPONENT24:p===Rn?F=n.DEPTH_COMPONENT32F:p===Ls&&(F=n.DEPTH_COMPONENT16),F}function w(M,p){return f(M)===!0||M.isFramebufferTexture&&M.minFilter!==Lt&&M.minFilter!==Bt?Math.log2(Math.max(p.width,p.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?p.mipmaps.length:1}function A(M){let p=M.target;p.removeEventListener("dispose",A),S(p),p.isVideoTexture&&h.delete(p),p.isHTMLTexture&&d.delete(p)}function _(M){let p=M.target;p.removeEventListener("dispose",_),I(p)}function S(M){let p=i.get(M);if(p.__webglInit===void 0)return;let F=M.source,V=m.get(F);if(V){let q=V[p.__cacheKey];q.usedTimes--,q.usedTimes===0&&P(M),Object.keys(V).length===0&&m.delete(F)}i.remove(M)}function P(M){let p=i.get(M);n.deleteTexture(p.__webglTexture);let F=M.source,V=m.get(F);delete V[p.__cacheKey],a.memory.textures--}function I(M){let p=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(p.__webglFramebuffer[V]))for(let q=0;q<p.__webglFramebuffer[V].length;q++)n.deleteFramebuffer(p.__webglFramebuffer[V][q]);else n.deleteFramebuffer(p.__webglFramebuffer[V]);p.__webglDepthbuffer&&n.deleteRenderbuffer(p.__webglDepthbuffer[V])}else{if(Array.isArray(p.__webglFramebuffer))for(let V=0;V<p.__webglFramebuffer.length;V++)n.deleteFramebuffer(p.__webglFramebuffer[V]);else n.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&n.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&n.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let V=0;V<p.__webglColorRenderbuffer.length;V++)p.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(p.__webglColorRenderbuffer[V]);p.__webglDepthRenderbuffer&&n.deleteRenderbuffer(p.__webglDepthRenderbuffer)}let F=M.textures;for(let V=0,q=F.length;V<q;V++){let ne=i.get(F[V]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),a.memory.textures--),i.remove(F[V])}i.remove(M)}let U=0;function $(){U=0}function X(){return U}function B(M){U=M}function W(){let M=U;return M>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),U+=1,M}function H(M){let p=[];return p.push(M.wrapS),p.push(M.wrapT),p.push(M.wrapR||0),p.push(M.magFilter),p.push(M.minFilter),p.push(M.anisotropy),p.push(M.internalFormat),p.push(M.format),p.push(M.type),p.push(M.generateMipmaps),p.push(M.premultiplyAlpha),p.push(M.flipY),p.push(M.unpackAlignment),p.push(M.colorSpace),p.join()}function j(M,p){let F=i.get(M);if(M.isVideoTexture&&N(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&F.__version!==M.version){let V=M.image;if(V===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(F,M,p);return}}else M.isExternalTexture&&(F.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+p)}function ee(M,p){let F=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){Le(F,M,p);return}else M.isExternalTexture&&(F.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+p)}function de(M,p){let F=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){Le(F,M,p);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+p)}function ge(M,p){let F=i.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&F.__version!==M.version){De(F,M,p);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+p)}let ve={[oa]:n.REPEAT,[kn]:n.CLAMP_TO_EDGE,[la]:n.MIRRORED_REPEAT},Ze={[Lt]:n.NEAREST,[Gh]:n.NEAREST_MIPMAP_NEAREST,[dr]:n.NEAREST_MIPMAP_LINEAR,[Bt]:n.LINEAR,[Fa]:n.LINEAR_MIPMAP_NEAREST,[Ei]:n.LINEAR_MIPMAP_LINEAR},mt={[$h]:n.NEVER,[Jh]:n.ALWAYS,[qh]:n.LESS,[bo]:n.LEQUAL,[Xh]:n.EQUAL,[Mo]:n.GEQUAL,[Yh]:n.GREATER,[Zh]:n.NOTEQUAL};function Je(M,p){if(p.type===Rn&&e.has("OES_texture_float_linear")===!1&&(p.magFilter===Bt||p.magFilter===Fa||p.magFilter===dr||p.magFilter===Ei||p.minFilter===Bt||p.minFilter===Fa||p.minFilter===dr||p.minFilter===Ei)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,ve[p.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,ve[p.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,ve[p.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,Ze[p.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,Ze[p.minFilter]),p.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,mt[p.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===Lt||p.minFilter!==dr&&p.minFilter!==Ei||p.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||i.get(p).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,s.getMaxAnisotropy())),i.get(p).__currentAnisotropy=p.anisotropy}}}function K(M,p){let F=!1;M.__webglInit===void 0&&(M.__webglInit=!0,p.addEventListener("dispose",A));let V=p.source,q=m.get(V);q===void 0&&(q={},m.set(V,q));let ne=H(p);if(ne!==M.__cacheKey){q[ne]===void 0&&(q[ne]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),q[ne].usedTimes++;let ae=q[M.__cacheKey];ae!==void 0&&(q[M.__cacheKey].usedTimes--,ae.usedTimes===0&&P(p)),M.__cacheKey=ne,M.__webglTexture=q[ne].texture}return F}function re(M,p,F){return Math.floor(Math.floor(M/F)/p)}function te(M,p,F,V){let ne=M.updateRanges;if(ne.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,p.width,p.height,F,V,p.data);else{ne.sort((Se,he)=>Se.start-he.start);let ae=0;for(let Se=1;Se<ne.length;Se++){let he=ne[ae],le=ne[Se],Te=he.start+he.count,Ce=re(le.start,p.width,4),Ue=re(he.start,p.width,4);le.start<=Te+1&&Ce===Ue&&re(le.start+le.count-1,p.width,4)===Ce?he.count=Math.max(he.count,le.start+le.count-he.start):(++ae,ne[ae]=le)}ne.length=ae+1;let Y=t.getParameter(n.UNPACK_ROW_LENGTH),J=t.getParameter(n.UNPACK_SKIP_PIXELS),oe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,p.width);for(let Se=0,he=ne.length;Se<he;Se++){let le=ne[Se],Te=Math.floor(le.start/4),Ce=Math.ceil(le.count/4),Ue=Te%p.width,L=Math.floor(Te/p.width),se=Ce,Z=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Ue,L,se,Z,F,V,p.data)}M.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Y),t.pixelStorei(n.UNPACK_SKIP_PIXELS,J),t.pixelStorei(n.UNPACK_SKIP_ROWS,oe)}}function Le(M,p,F){let V=n.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),p.isData3DTexture&&(V=n.TEXTURE_3D);let q=K(M,p),ne=p.source;t.bindTexture(V,M.__webglTexture,n.TEXTURE0+F);let ae=i.get(ne);if(ne.version!==ae.__version||q===!0){if(t.activeTexture(n.TEXTURE0+F),(typeof ImageBitmap<"u"&&p.image instanceof ImageBitmap)===!1){let Z=He.getPrimaries(He.workingColorSpace),ce=p.colorSpace===si?null:He.getPrimaries(p.colorSpace),me=p.colorSpace===si||Z===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(n.UNPACK_ALIGNMENT,p.unpackAlignment);let J=g(p.image,!1,s.maxTextureSize);J=tn(p,J);let oe=r.convert(p.format,p.colorSpace),Se=r.convert(p.type),he=y(p.internalFormat,oe,Se,p.normalized,p.colorSpace,p.isVideoTexture);Je(V,p);let le,Te=p.mipmaps,Ce=p.isVideoTexture!==!0,Ue=ae.__version===void 0||q===!0,L=ne.dataReady,se=w(p,J);if(p.isDepthTexture)he=E(p.format===Ti,p.type),Ue&&(Ce?t.texStorage2D(n.TEXTURE_2D,1,he,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,he,J.width,J.height,0,oe,Se,null));else if(p.isDataTexture)if(Te.length>0){Ce&&Ue&&t.texStorage2D(n.TEXTURE_2D,se,he,Te[0].width,Te[0].height);for(let Z=0,ce=Te.length;Z<ce;Z++)le=Te[Z],Ce?L&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,le.width,le.height,oe,Se,le.data):t.texImage2D(n.TEXTURE_2D,Z,he,le.width,le.height,0,oe,Se,le.data);p.generateMipmaps=!1}else Ce?(Ue&&t.texStorage2D(n.TEXTURE_2D,se,he,J.width,J.height),L&&te(p,J,oe,Se)):t.texImage2D(n.TEXTURE_2D,0,he,J.width,J.height,0,oe,Se,J.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){Ce&&Ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,he,Te[0].width,Te[0].height,J.depth);for(let Z=0,ce=Te.length;Z<ce;Z++)if(le=Te[Z],p.format!==vn)if(oe!==null)if(Ce){if(L)if(p.layerUpdates.size>0){let me=Zl(le.width,le.height,p.format,p.type);for(let Q of p.layerUpdates){let Me=le.data.subarray(Q*me/le.data.BYTES_PER_ELEMENT,(Q+1)*me/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,Q,le.width,le.height,1,oe,Me)}p.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,le.width,le.height,J.depth,oe,le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,he,le.width,le.height,J.depth,0,le.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,le.width,le.height,J.depth,oe,Se,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,he,le.width,le.height,J.depth,0,oe,Se,le.data)}else{Ce&&Ue&&t.texStorage2D(n.TEXTURE_2D,se,he,Te[0].width,Te[0].height);for(let Z=0,ce=Te.length;Z<ce;Z++)le=Te[Z],p.format!==vn?oe!==null?Ce?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,le.width,le.height,oe,le.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,he,le.width,le.height,0,le.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?L&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,le.width,le.height,oe,Se,le.data):t.texImage2D(n.TEXTURE_2D,Z,he,le.width,le.height,0,oe,Se,le.data)}else if(p.isDataArrayTexture)if(Ce){if(Ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,he,J.width,J.height,J.depth),L)if(p.layerUpdates.size>0){let Z=Zl(J.width,J.height,p.format,p.type);for(let ce of p.layerUpdates){let me=J.data.subarray(ce*Z/J.data.BYTES_PER_ELEMENT,(ce+1)*Z/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,J.width,J.height,1,oe,Se,me)}p.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,oe,Se,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,he,J.width,J.height,J.depth,0,oe,Se,J.data);else if(p.isData3DTexture)Ce?(Ue&&t.texStorage3D(n.TEXTURE_3D,se,he,J.width,J.height,J.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,oe,Se,J.data)):t.texImage3D(n.TEXTURE_3D,0,he,J.width,J.height,J.depth,0,oe,Se,J.data);else if(p.isFramebufferTexture){if(Ue)if(Ce)t.texStorage2D(n.TEXTURE_2D,se,he,J.width,J.height);else{let Z=J.width,ce=J.height;for(let me=0;me<se;me++)t.texImage2D(n.TEXTURE_2D,me,he,Z,ce,0,oe,Se,null),Z>>=1,ce>>=1}}else if(p.isHTMLTexture){if("texElementImage2D"in n){let Z=n.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),J.parentNode!==Z){Z.appendChild(J),d.add(p),Z.onpaint=ce=>{let me=ce.changedElements;for(let Q of d)me.includes(Q.image)&&(Q.needsUpdate=!0)},Z.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,J);else{let me=n.RGBA,Q=n.RGBA,Me=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,me,Q,Me,J)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Te.length>0){if(Ce&&Ue){let Z=nt(Te[0]);t.texStorage2D(n.TEXTURE_2D,se,he,Z.width,Z.height)}for(let Z=0,ce=Te.length;Z<ce;Z++)le=Te[Z],Ce?L&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,oe,Se,le):t.texImage2D(n.TEXTURE_2D,Z,he,oe,Se,le);p.generateMipmaps=!1}else if(Ce){if(Ue){let Z=nt(J);t.texStorage2D(n.TEXTURE_2D,se,he,Z.width,Z.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe,Se,J)}else t.texImage2D(n.TEXTURE_2D,0,he,oe,Se,J);f(p)&&T(V),ae.__version=ne.version,p.onUpdate&&p.onUpdate(p)}M.__version=p.version}function De(M,p,F){if(p.image.length!==6)return;let V=K(M,p),q=p.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+F);let ne=i.get(q);if(q.version!==ne.__version||V===!0){t.activeTexture(n.TEXTURE0+F);let ae=He.getPrimaries(He.workingColorSpace),Y=p.colorSpace===si?null:He.getPrimaries(p.colorSpace),J=p.colorSpace===si||ae===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,p.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let oe=p.isCompressedTexture||p.image[0].isCompressedTexture,Se=p.image[0]&&p.image[0].isDataTexture,he=[];for(let Q=0;Q<6;Q++)!oe&&!Se?he[Q]=g(p.image[Q],!0,s.maxCubemapSize):he[Q]=Se?p.image[Q].image:p.image[Q],he[Q]=tn(p,he[Q]);let le=he[0],Te=r.convert(p.format,p.colorSpace),Ce=r.convert(p.type),Ue=y(p.internalFormat,Te,Ce,p.normalized,p.colorSpace),L=p.isVideoTexture!==!0,se=ne.__version===void 0||V===!0,Z=q.dataReady,ce=w(p,le);Je(n.TEXTURE_CUBE_MAP,p);let me;if(oe){L&&se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Ue,le.width,le.height);for(let Q=0;Q<6;Q++){me=he[Q].mipmaps;for(let Me=0;Me<me.length;Me++){let ye=me[Me];p.format!==vn?Te!==null?L?Z&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,0,0,ye.width,ye.height,Te,ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,Ue,ye.width,ye.height,0,ye.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,0,0,ye.width,ye.height,Te,Ce,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,Ue,ye.width,ye.height,0,Te,Ce,ye.data)}}}else{if(me=p.mipmaps,L&&se){me.length>0&&ce++;let Q=nt(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Ue,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(Se){L?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,he[Q].width,he[Q].height,Te,Ce,he[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ue,he[Q].width,he[Q].height,0,Te,Ce,he[Q].data);for(let Me=0;Me<me.length;Me++){let _t=me[Me].image[Q].image;L?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,0,0,_t.width,_t.height,Te,Ce,_t.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,Ue,_t.width,_t.height,0,Te,Ce,_t.data)}}else{L?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Te,Ce,he[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ue,Te,Ce,he[Q]);for(let Me=0;Me<me.length;Me++){let ye=me[Me];L?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,0,0,Te,Ce,ye.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,Ue,Te,Ce,ye.image[Q])}}}f(p)&&T(n.TEXTURE_CUBE_MAP),ne.__version=q.version,p.onUpdate&&p.onUpdate(p)}M.__version=p.version}function Ae(M,p,F,V,q,ne){let ae=r.convert(F.format,F.colorSpace),Y=r.convert(F.type),J=y(F.internalFormat,ae,Y,F.normalized,F.colorSpace),oe=i.get(p),Se=i.get(F);if(Se.__renderTarget=p,!oe.__hasExternalTextures){let he=Math.max(1,p.width>>ne),le=Math.max(1,p.height>>ne);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?t.texImage3D(q,ne,J,he,le,p.depth,0,ae,Y,null):t.texImage2D(q,ne,J,he,le,0,ae,Y,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),St(p)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,q,Se.__webglTexture,0,gt(p)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,q,Se.__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(M,p,F){if(n.bindRenderbuffer(n.RENDERBUFFER,M),p.depthBuffer){let V=p.depthTexture,q=V&&V.isDepthTexture?V.type:null,ne=E(p.stencilBuffer,q),ae=p.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;St(p)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,gt(p),ne,p.width,p.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,gt(p),ne,p.width,p.height):n.renderbufferStorage(n.RENDERBUFFER,ne,p.width,p.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,M)}else{let V=p.textures;for(let q=0;q<V.length;q++){let ne=V[q],ae=r.convert(ne.format,ne.colorSpace),Y=r.convert(ne.type),J=y(ne.internalFormat,ae,Y,ne.normalized,ne.colorSpace);St(p)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,gt(p),J,p.width,p.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,gt(p),J,p.width,p.height):n.renderbufferStorage(n.RENDERBUFFER,J,p.width,p.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ge(M,p,F){let V=p.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=i.get(p.depthTexture);if(q.__renderTarget=p,(!q.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),V){if(q.__webglInit===void 0&&(q.__webglInit=!0,p.depthTexture.addEventListener("dispose",A)),q.__webglTexture===void 0){q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Je(n.TEXTURE_CUBE_MAP,p.depthTexture);let oe=r.convert(p.depthTexture.format),Se=r.convert(p.depthTexture.type),he;p.depthTexture.format===zn?he=n.DEPTH_COMPONENT24:p.depthTexture.format===Ti&&(he=n.DEPTH24_STENCIL8);for(let le=0;le<6;le++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,he,p.width,p.height,0,oe,Se,null)}}else j(p.depthTexture,0);let ne=q.__webglTexture,ae=gt(p),Y=V?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,J=p.depthTexture.format===Ti?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(p.depthTexture.format===zn)St(p)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,Y,ne,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,J,Y,ne,0);else if(p.depthTexture.format===Ti)St(p)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,Y,ne,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,J,Y,ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(M){let p=i.get(M),F=M.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==M.depthTexture){let V=M.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),V){let q=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,V.removeEventListener("dispose",q)};V.addEventListener("dispose",q),p.__depthDisposeCallback=q}p.__boundDepthTexture=V}if(M.depthTexture&&!p.__autoAllocateDepthBuffer)if(F)for(let V=0;V<6;V++)Ge(p.__webglFramebuffer[V],M,V);else{let V=M.texture.mipmaps;V&&V.length>0?Ge(p.__webglFramebuffer[0],M,0):Ge(p.__webglFramebuffer,M,0)}else if(F){p.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer[V]),p.__webglDepthbuffer[V]===void 0)p.__webglDepthbuffer[V]=n.createRenderbuffer(),vt(p.__webglDepthbuffer[V],M,!1);else{let q=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=p.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,ne)}}else{let V=M.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=n.createRenderbuffer(),vt(p.__webglDepthbuffer,M,!1);else{let q=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=p.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,ne)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(M,p,F){let V=i.get(M);p!==void 0&&Ae(V.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&st(M)}function qe(M){let p=M.texture,F=i.get(M),V=i.get(p);M.addEventListener("dispose",_);let q=M.textures,ne=M.isWebGLCubeRenderTarget===!0,ae=q.length>1;if(ae||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=p.version,a.memory.textures++),ne){F.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(p.mipmaps&&p.mipmaps.length>0){F.__webglFramebuffer[Y]=[];for(let J=0;J<p.mipmaps.length;J++)F.__webglFramebuffer[Y][J]=n.createFramebuffer()}else F.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){F.__webglFramebuffer=[];for(let Y=0;Y<p.mipmaps.length;Y++)F.__webglFramebuffer[Y]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(ae)for(let Y=0,J=q.length;Y<J;Y++){let oe=i.get(q[Y]);oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture(),a.memory.textures++)}if(M.samples>0&&St(M)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Y=0;Y<q.length;Y++){let J=q[Y];F.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[Y]);let oe=r.convert(J.format,J.colorSpace),Se=r.convert(J.type),he=y(J.internalFormat,oe,Se,J.normalized,J.colorSpace,M.isXRRenderTarget===!0),le=gt(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,le,he,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,F.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),vt(F.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),Je(n.TEXTURE_CUBE_MAP,p);for(let Y=0;Y<6;Y++)if(p.mipmaps&&p.mipmaps.length>0)for(let J=0;J<p.mipmaps.length;J++)Ae(F.__webglFramebuffer[Y][J],M,p,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else Ae(F.__webglFramebuffer[Y],M,p,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);f(p)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let Y=0,J=q.length;Y<J;Y++){let oe=q[Y],Se=i.get(oe),he=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(he=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,Se.__webglTexture),Je(he,oe),Ae(F.__webglFramebuffer,M,oe,n.COLOR_ATTACHMENT0+Y,he,0),f(oe)&&T(he)}t.unbindTexture()}else{let Y=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(Y=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Y,V.__webglTexture),Je(Y,p),p.mipmaps&&p.mipmaps.length>0)for(let J=0;J<p.mipmaps.length;J++)Ae(F.__webglFramebuffer[J],M,p,n.COLOR_ATTACHMENT0,Y,J);else Ae(F.__webglFramebuffer,M,p,n.COLOR_ATTACHMENT0,Y,0);f(p)&&T(Y),t.unbindTexture()}M.depthBuffer&&st(M)}function Mt(M){let p=M.textures;for(let F=0,V=p.length;F<V;F++){let q=p[F];if(f(q)){let ne=C(M),ae=i.get(q).__webglTexture;t.bindTexture(ne,ae),T(ne),t.unbindTexture()}}}let Et=[],It=[];function Dt(M){if(M.samples>0){if(St(M)===!1){let p=M.textures,F=M.width,V=M.height,q=n.COLOR_BUFFER_BIT,ne=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(M),Y=p.length>1;if(Y)for(let oe=0;oe<p.length;oe++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);let J=M.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let oe=0;oe<p.length;oe++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);let Se=i.get(p[oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Se,0)}n.blitFramebuffer(0,0,F,V,0,0,F,V,q,n.NEAREST),c===!0&&(Et.length=0,It.length=0,Et.push(n.COLOR_ATTACHMENT0+oe),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Et.push(ne),It.push(ne),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,It)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Et))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let oe=0;oe<p.length;oe++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);let Se=i.get(p[oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,Se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){let p=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[p])}}}function gt(M){return Math.min(s.maxSamples,M.samples)}function St(M){let p=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function N(M){let p=a.render.frame;h.get(M)!==p&&(h.set(M,p),M.update())}function tn(M,p){let F=M.colorSpace,V=M.format,q=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||F!==qs&&F!==si&&(He.getTransfer(F)===Qe?(V!==vn||q!==sn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",F)),p}function nt(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=$,this.getTextureUnits=X,this.setTextureUnits=B,this.setTexture2D=j,this.setTexture2DArray=ee,this.setTexture3D=de,this.setTextureCube=ge,this.rebindTextures=Ke,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function M0(n,e){function t(i,s=si){let r,a=He.getTransfer(s);if(i===sn)return n.UNSIGNED_BYTE;if(i===Ba)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ka)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ol)return n.BYTE;if(i===Bl)return n.SHORT;if(i===Ls)return n.UNSIGNED_SHORT;if(i===Oa)return n.INT;if(i===Cn)return n.UNSIGNED_INT;if(i===Rn)return n.FLOAT;if(i===Wn)return n.HALF_FLOAT;if(i===Vl)return n.ALPHA;if(i===Gl)return n.RGB;if(i===vn)return n.RGBA;if(i===zn)return n.DEPTH_COMPONENT;if(i===Ti)return n.DEPTH_STENCIL;if(i===Hl)return n.RED;if(i===za)return n.RED_INTEGER;if(i===Ai)return n.RG;if(i===Va)return n.RG_INTEGER;if(i===Ga)return n.RGBA_INTEGER;if(i===fr||i===pr||i===mr||i===gr)if(a===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ha||i===Wa||i===$a||i===qa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xa||i===Ya||i===Za||i===Ja||i===Ka||i===_r||i===ja)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Xa||i===Ya)return a===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Za)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ja)return r.COMPRESSED_R11_EAC;if(i===Ka)return r.COMPRESSED_SIGNED_R11_EAC;if(i===_r)return r.COMPRESSED_RG11_EAC;if(i===ja)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Qa||i===eo||i===to||i===no||i===io||i===so||i===ro||i===ao||i===oo||i===lo||i===co||i===ho||i===uo||i===fo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Qa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===eo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===to)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===no)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===io)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===so)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ro)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ao)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===oo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===co)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ho)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===po||i===mo||i===go)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===po)return a===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_o||i===xo||i===xr||i===vo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===_o)return r.COMPRESSED_RED_RGTC1_EXT;if(i===xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ns?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var S0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,pc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new nr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new dn({vertexShader:S0,fragmentShader:w0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zt(new Ki(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mc=class extends Vn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,m=null,x=null,b=typeof XRWebGLBinding<"u",g=new pc,f={},T=t.getContextAttributes(),C=null,y=null,E=[],w=[],A=new Ve,_=null,S=new Zt;S.viewport=new ut;let P=new Zt;P.viewport=new ut;let I=[S,P],U=new Pa,$=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let re=E[K];return re===void 0&&(re=new Ss,E[K]=re),re.getTargetRaySpace()},this.getControllerGrip=function(K){let re=E[K];return re===void 0&&(re=new Ss,E[K]=re),re.getGripSpace()},this.getHand=function(K){let re=E[K];return re===void 0&&(re=new Ss,E[K]=re),re.getHandSpace()};function B(K){let re=w.indexOf(K.inputSource);if(re===-1)return;let te=E[re];te!==void 0&&(te.update(K.inputSource,K.frame,l||a),te.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",H);for(let K=0;K<E.length;K++){let re=w[K];re!==null&&(w[K]=null,E[K].disconnect(re))}$=null,X=null,g.reset();for(let K in f)delete f[K];e.setRenderTarget(C),m=null,u=null,d=null,s=null,y=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",H),T.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Le=null,De=null;T.depth&&(De=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=T.stencil?Ti:zn,Le=T.stencil?Ns:Cn);let Ae={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ae),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new un(u.textureWidth,u.textureHeight,{format:vn,type:sn,depthTexture:new ii(u.textureWidth,u.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let te={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new un(m.framebufferWidth,m.framebufferHeight,{format:vn,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Je.setContext(s),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(K){for(let re=0;re<K.removed.length;re++){let te=K.removed[re],Le=w.indexOf(te);Le>=0&&(w[Le]=null,E[Le].disconnect(te))}for(let re=0;re<K.added.length;re++){let te=K.added[re],Le=w.indexOf(te);if(Le===-1){for(let Ae=0;Ae<E.length;Ae++)if(Ae>=w.length){w.push(te),Le=Ae;break}else if(w[Ae]===null){w[Ae]=te,Le=Ae;break}if(Le===-1)break}let De=E[Le];De&&De.connect(te)}}let j=new O,ee=new O;function de(K,re,te){j.setFromMatrixPosition(re.matrixWorld),ee.setFromMatrixPosition(te.matrixWorld);let Le=j.distanceTo(ee),De=re.projectionMatrix.elements,Ae=te.projectionMatrix.elements,vt=De[14]/(De[10]-1),Ge=De[14]/(De[10]+1),st=(De[9]+1)/De[5],Ke=(De[9]-1)/De[5],qe=(De[8]-1)/De[0],Mt=(Ae[8]+1)/Ae[0],Et=vt*qe,It=vt*Mt,Dt=Le/(-qe+Mt),gt=Dt*-qe;if(re.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(gt),K.translateZ(Dt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),De[10]===-1)K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let St=vt+Dt,N=Ge+Dt,tn=Et-gt,nt=It+(Le-gt),M=st*Ge/N*St,p=Ke*Ge/N*St;K.projectionMatrix.makePerspective(tn,nt,M,p,St,N),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ge(K,re){re===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(re.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let re=K.near,te=K.far;g.texture!==null&&(g.depthNear>0&&(re=g.depthNear),g.depthFar>0&&(te=g.depthFar)),U.near=P.near=S.near=re,U.far=P.far=S.far=te,($!==U.near||X!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),$=U.near,X=U.far),U.layers.mask=K.layers.mask|6,S.layers.mask=U.layers.mask&-5,P.layers.mask=U.layers.mask&-3;let Le=K.parent,De=U.cameras;ge(U,Le);for(let Ae=0;Ae<De.length;Ae++)ge(De[Ae],Le);De.length===2?de(U,S,P):U.projectionMatrix.copy(S.projectionMatrix),ve(K,U,Le)};function ve(K,re,te){te===null?K.matrix.copy(re.matrixWorld):(K.matrix.copy(te.matrixWorld),K.matrix.invert(),K.matrix.multiply(re.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ha*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(K){return f[K]};let Ze=null;function mt(K,re){if(h=re.getViewerPose(l||a),x=re,h!==null){let te=h.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let Le=!1;te.length!==U.cameras.length&&(U.cameras.length=0,Le=!0);for(let Ge=0;Ge<te.length;Ge++){let st=te[Ge],Ke=null;if(m!==null)Ke=m.getViewport(st);else{let Mt=d.getViewSubImage(u,st);Ke=Mt.viewport,Ge===0&&(e.setRenderTargetTextures(y,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(y))}let qe=I[Ge];qe===void 0&&(qe=new Zt,qe.layers.enable(Ge),qe.viewport=new ut,I[Ge]=qe),qe.matrix.fromArray(st.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(st.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Ge===0&&(U.matrix.copy(qe.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Le===!0&&U.cameras.push(qe)}let De=s.enabledFeatures;if(De&&De.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){d=i.getBinding();let Ge=d.getDepthInformation(te[0]);Ge&&Ge.isValid&&Ge.texture&&g.init(Ge,s.renderState)}if(De&&De.includes("camera-access")&&b){e.state.unbindTexture(),d=i.getBinding();for(let Ge=0;Ge<te.length;Ge++){let st=te[Ge].camera;if(st){let Ke=f[st];Ke||(Ke=new nr,f[st]=Ke);let qe=d.getCameraImage(st);Ke.sourceTexture=qe}}}}for(let te=0;te<E.length;te++){let Le=w[te],De=E[te];Le!==null&&De!==void 0&&De.update(Le,re,l||a)}Ze&&Ze(K,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),x=null}let Je=new Tu;Je.setAnimationLoop(mt),this.setAnimationLoop=function(K){Ze=K},this.dispose=function(){}}},E0=new ht,Lu=new Ne;Lu.set(-1,0,0,0,1,0,0,0,1);function T0(n,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,ql(n)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,T,C,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(g,f):f.isMeshLambertMaterial?(r(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(g,f),d(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(g,f),u(g,f),f.isMeshPhysicalMaterial&&m(g,f,y)):f.isMeshMatcapMaterial?(r(g,f),x(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),b(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?c(g,f,T,C):f.isSpriteMaterial?l(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Qt&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Qt&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let T=e.get(f),C=T.envMap,y=T.envMapRotation;C&&(g.envMap.value=C,g.envMapRotation.value.setFromMatrix4(E0.makeRotationFromEuler(y)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Lu),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,T,C){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*T,g.scale.value=C*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function l(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function m(g,f,T){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Qt&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,f){f.matcap&&(g.matcap.value=f.matcap)}function b(g,f){let T=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function A0(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,E){let w=E.program;i.uniformBlockBinding(y,w)}function l(y,E){let w=s[y.id];w===void 0&&(g(y),w=h(y),s[y.id]=w,y.addEventListener("dispose",T));let A=E.program;i.updateUBOMapping(y,A);let _=e.render.frame;r[y.id]!==_&&(u(y),r[y.id]=_)}function h(y){let E=d();y.__bindingPointIndex=E;let w=n.createBuffer(),A=y.__size,_=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,A,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,w),w}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let E=s[y.id],w=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let _=0,S=w.length;_<S;_++){let P=w[_];if(Array.isArray(P))for(let I=0,U=P.length;I<U;I++)m(P[I],_,I,A);else m(P,_,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,E,w,A){if(b(y,E,w,A)===!0){let _=y.__offset,S=y.value;if(Array.isArray(S)){let P=0;for(let I=0;I<S.length;I++){let U=S[I],$=f(U);x(U,y.__data,P),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(P+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(S,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,y.__data)}}function x(y,E,w){typeof y=="number"||typeof y=="boolean"?E[0]=y:y.isMatrix3?(E[0]=y.elements[0],E[1]=y.elements[1],E[2]=y.elements[2],E[3]=0,E[4]=y.elements[3],E[5]=y.elements[4],E[6]=y.elements[5],E[7]=0,E[8]=y.elements[6],E[9]=y.elements[7],E[10]=y.elements[8],E[11]=0):ArrayBuffer.isView(y)?E.set(new y.constructor(y.buffer,y.byteOffset,E.length)):y.toArray(E,w)}function b(y,E,w,A){let _=y.value,S=E+"_"+w;if(A[S]===void 0)return typeof _=="number"||typeof _=="boolean"?A[S]=_:ArrayBuffer.isView(_)?A[S]=_.slice():A[S]=_.clone(),!0;{let P=A[S];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return A[S]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function g(y){let E=y.uniforms,w=0,A=16;for(let S=0,P=E.length;S<P;S++){let I=Array.isArray(E[S])?E[S]:[E[S]];for(let U=0,$=I.length;U<$;U++){let X=I[U],B=Array.isArray(X.value)?X.value:[X.value];for(let W=0,H=B.length;W<H;W++){let j=B[W],ee=f(j),de=w%A,ge=de%ee.boundary,ve=de+ge;w+=ge,ve!==0&&A-ve<ee.storage&&(w+=A-ve),X.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=w,w+=ee.storage}}}let _=w%A;return _>0&&(w+=A-_),y.__size=w,y.__cache={},this}function f(y){let E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",y),E}function T(y){let E=y.target;E.removeEventListener("dispose",T);let w=a.indexOf(E.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function C(){for(let y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:C}}var C0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$n=null;function R0(){return $n===null&&($n=new pa(C0,16,16,Ai,Wn),$n.name="DFG_LUT",$n.minFilter=Bt,$n.magFilter=Bt,$n.wrapS=kn,$n.wrapT=kn,$n.generateMipmaps=!1,$n.needsUpdate=!0),$n}var Ao=class{constructor(e={}){let{canvas:t=Kh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:m=sn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;let b=m,g=new Set([Ga,Va,za]),f=new Set([sn,Cn,Ls,Ns,Ba,ka]),T=new Uint32Array(4),C=new Int32Array(4),y=new O,E=null,w=null,A=[],_=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=An,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,I=!1,U=null,$=null,X=null,B=null;this._outputColorSpace=qt;let W=0,H=0,j=null,ee=-1,de=null,ge=new ut,ve=new ut,Ze=null,mt=new Oe(0),Je=0,K=t.width,re=t.height,te=1,Le=null,De=null,Ae=new ut(0,0,K,re),vt=new ut(0,0,K,re),Ge=!1,st=new Es,Ke=!1,qe=!1,Mt=new ht,Et=new O,It=new ut,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gt=!1;function St(){return j===null?te:1}let N=i;function tn(v,D){return t.getContext(v,D)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",_t,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",Ln,!1),N===null){let D="webgl2";if(N=tn(D,v),N===null)throw tn(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(v){throw Re("WebGLRenderer: "+v.message),v}let nt,M,p,F,V,q,ne,ae,Y,J,oe,Se,he,le,Te,Ce,Ue,L,se,Z,ce,me,Q;function Me(){nt=new Fm(N),nt.init(),ce=new M0(N,nt),M=new Cm(N,nt,e,ce),p=new y0(N,nt),M.reversedDepthBuffer&&u&&p.buffers.depth.setReversed(!0),$=N.createFramebuffer(),X=N.createFramebuffer(),B=N.createFramebuffer(),F=new km(N),V=new a0,q=new b0(N,nt,p,V,M,ce,F),ne=new Um(P),ae=new Gd(N),me=new Tm(N,ae),Y=new Om(N,ae,F,me),J=new Vm(N,Y,ae,me,F),L=new zm(N,M,q),Te=new Rm(V),oe=new r0(P,ne,nt,M,me,Te),Se=new T0(P,V),he=new l0,le=new p0(nt),Ue=new Em(P,ne,p,J,x,c),Ce=new v0(P,J,M),Q=new A0(N,F,M,p),se=new Am(N,nt,F),Z=new Bm(N,nt,F),F.programs=oe.programs,P.capabilities=M,P.extensions=nt,P.properties=V,P.renderLists=he,P.shadowMap=Ce,P.state=p,P.info=F}Me(),b!==sn&&(S=new Hm(b,t.width,t.height,o,s,r));let ye=new mc(P,N);this.xr=ye,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let v=nt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=nt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(v){v!==void 0&&(te=v,this.setSize(K,re,!1))},this.getSize=function(v){return v.set(K,re)},this.setSize=function(v,D,G=!0){if(ye.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}K=v,re=D,t.width=Math.floor(v*te),t.height=Math.floor(D*te),G===!0&&(t.style.width=v+"px",t.style.height=D+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(K*te,re*te).floor()},this.setDrawingBufferSize=function(v,D,G){K=v,re=D,te=G,t.width=Math.floor(v*G),t.height=Math.floor(D*G),this.setViewport(0,0,v,D)},this.setEffects=function(v){if(b===sn){Re("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let D=0;D<v.length;D++)if(v[D].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ge)},this.getViewport=function(v){return v.copy(Ae)},this.setViewport=function(v,D,G,k){v.isVector4?Ae.set(v.x,v.y,v.z,v.w):Ae.set(v,D,G,k),p.viewport(ge.copy(Ae).multiplyScalar(te).round())},this.getScissor=function(v){return v.copy(vt)},this.setScissor=function(v,D,G,k){v.isVector4?vt.set(v.x,v.y,v.z,v.w):vt.set(v,D,G,k),p.scissor(ve.copy(vt).multiplyScalar(te).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(v){p.setScissorTest(Ge=v)},this.setOpaqueSort=function(v){Le=v},this.setTransparentSort=function(v){De=v},this.getClearColor=function(v){return v.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,G=!0){let k=0;if(v){let z=!1;if(j!==null){let pe=j.texture.format;z=g.has(pe)}if(z){let pe=j.texture.type,xe=f.has(pe),fe=Ue.getClearColor(),be=Ue.getClearAlpha(),we=fe.r,Fe=fe.g,ke=fe.b;xe?(T[0]=we,T[1]=Fe,T[2]=ke,T[3]=be,N.clearBufferuiv(N.COLOR,0,T)):(C[0]=we,C[1]=Fe,C[2]=ke,C[3]=be,N.clearBufferiv(N.COLOR,0,C))}else k|=N.COLOR_BUFFER_BIT}D&&(k|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Ln,!1),Ue.dispose(),he.dispose(),le.dispose(),V.dispose(),ne.dispose(),J.dispose(),me.dispose(),Q.dispose(),oe.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Mc),ye.removeEventListener("sessionend",Sc),Ni.stop()};function _t(v){v.preventDefault(),$l("WebGLRenderer: Context Lost."),I=!0}function ot(){$l("WebGLRenderer: Context Restored."),I=!1;let v=F.autoReset,D=Ce.enabled,G=Ce.autoUpdate,k=Ce.needsUpdate,z=Ce.type;Me(),F.autoReset=v,Ce.enabled=D,Ce.autoUpdate=G,Ce.needsUpdate=k,Ce.type=z}function Ln(v){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Nn(v){let D=v.target;D.removeEventListener("dispose",Nn),Ju(D)}function Ju(v){Ku(v),V.remove(v)}function Ku(v){let D=V.get(v).programs;D!==void 0&&(D.forEach(function(G){oe.releaseProgram(G)}),v.isShaderMaterial&&oe.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,G,k,z,pe){D===null&&(D=Dt);let xe=z.isMesh&&z.matrixWorld.determinantAffine()<0,fe=ed(v,D,G,k,z);p.setMaterial(k,xe);let be=G.index,we=1;if(k.wireframe===!0){if(be=Y.getWireframeAttribute(G),be===void 0)return;we=2}let Fe=G.drawRange,ke=G.attributes.position,Ee=Fe.start*we,it=(Fe.start+Fe.count)*we;pe!==null&&(Ee=Math.max(Ee,pe.start*we),it=Math.min(it,(pe.start+pe.count)*we)),be!==null?(Ee=Math.max(Ee,0),it=Math.min(it,be.count)):ke!=null&&(Ee=Math.max(Ee,0),it=Math.min(it,ke.count));let yt=it-Ee;if(yt<0||yt===1/0)return;me.setup(z,k,fe,G,be);let xt,rt=se;if(be!==null&&(xt=ae.get(be),rt=Z,rt.setIndex(xt)),z.isMesh)k.wireframe===!0?(p.setLineWidth(k.wireframeLinewidth*St()),rt.setMode(N.LINES)):rt.setMode(N.TRIANGLES);else if(z.isLine){let Ht=k.linewidth;Ht===void 0&&(Ht=1),p.setLineWidth(Ht*St()),z.isLineSegments?rt.setMode(N.LINES):z.isLineLoop?rt.setMode(N.LINE_LOOP):rt.setMode(N.LINE_STRIP)}else z.isPoints?rt.setMode(N.POINTS):z.isSprite&&rt.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))rt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ht=z._multiDrawStarts,_e=z._multiDrawCounts,ln=z._multiDrawCount,Xe=be?ae.get(be).bytesPerElement:1,mn=V.get(k).currentProgram.getUniforms();for(let Dn=0;Dn<ln;Dn++)mn.setValue(N,"_gl_DrawID",Dn),rt.render(Ht[Dn]/Xe,_e[Dn])}else if(z.isInstancedMesh)rt.renderInstances(Ee,yt,z.count);else if(G.isInstancedBufferGeometry){let Ht=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,_e=Math.min(G.instanceCount,Ht);rt.renderInstances(Ee,yt,_e)}else rt.render(Ee,yt)};function bc(v,D,G){v.transparent===!0&&v.side===xn&&v.forceSinglePass===!1?(v.side=Qt,v.needsUpdate=!0,Tr(v,D,G),v.side=ei,v.needsUpdate=!0,Tr(v,D,G),v.side=xn):Tr(v,D,G)}this.compile=function(v,D,G=null){G===null&&(G=v),w=le.get(G),w.init(D),_.push(w),G.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),v!==G&&v.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),w.setupLights();let k=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let pe=z.material;if(pe)if(Array.isArray(pe))for(let xe=0;xe<pe.length;xe++){let fe=pe[xe];bc(fe,G,z),k.add(fe)}else bc(pe,G,z),k.add(pe)}),w=_.pop(),k},this.compileAsync=function(v,D,G=null){let k=this.compile(v,D,G);return new Promise(z=>{function pe(){if(k.forEach(function(xe){V.get(xe).currentProgram.isReady()&&k.delete(xe)}),k.size===0){z(v);return}setTimeout(pe,10)}nt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Uo=null;function ju(v){Uo&&Uo(v)}function Mc(){Ni.stop()}function Sc(){Ni.start()}let Ni=new Tu;Ni.setAnimationLoop(ju),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(v){Uo=v,ye.setAnimationLoop(v),v===null?Ni.stop():Ni.start()},ye.addEventListener("sessionstart",Mc),ye.addEventListener("sessionend",Sc),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;U!==null&&U.renderStart(v,D);let G=ye.enabled===!0&&ye.isPresenting===!0,k=S!==null&&(j===null||G)&&S.begin(P,j);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(D),D=ye.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,D,j),w=le.get(v,_.length),w.init(D),w.state.textureUnits=q.getTextureUnits(),_.push(w),Mt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),st.setFromProjectionMatrix(Mt,Tn,D.reversedDepth),qe=this.localClippingEnabled,Ke=Te.init(this.clippingPlanes,qe),E=he.get(v,A.length),E.init(),A.push(E),ye.enabled===!0&&ye.isPresenting===!0){let xe=P.xr.getDepthSensingMesh();xe!==null&&Fo(xe,D,-1/0,P.sortObjects)}Fo(v,D,0,P.sortObjects),E.finish(),P.sortObjects===!0&&E.sort(Le,De,D.reversedDepth),gt=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,gt&&Ue.addToRenderList(E,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ke===!0&&Te.beginShadows();let z=w.state.shadowsArray;if(Ce.render(z,v,D),Ke===!0&&Te.endShadows(),(k&&S.hasRenderPass())===!1){let xe=E.opaque,fe=E.transmissive;if(w.setupLights(),D.isArrayCamera){let be=D.cameras;if(fe.length>0)for(let we=0,Fe=be.length;we<Fe;we++){let ke=be[we];Ec(xe,fe,v,ke)}gt&&Ue.render(v);for(let we=0,Fe=be.length;we<Fe;we++){let ke=be[we];wc(E,v,ke,ke.viewport)}}else fe.length>0&&Ec(xe,fe,v,D),gt&&Ue.render(v),wc(E,v,D)}j!==null&&H===0&&(q.updateMultisampleRenderTarget(j),q.updateRenderTargetMipmap(j)),k&&S.end(P),v.isScene===!0&&v.onAfterRender(P,v,D),me.resetDefaultState(),ee=-1,de=null,_.pop(),_.length>0?(w=_[_.length-1],q.setTextureUnits(w.state.textureUnits),Ke===!0&&Te.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?E=A[A.length-1]:E=null,U!==null&&U.renderEnd()};function Fo(v,D,G,k){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)G=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLightProbeGrid)w.pushLightProbeGrid(v);else if(v.isLight)w.pushLight(v),v.castShadow&&w.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||st.intersectsSprite(v)){k&&It.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Mt);let xe=J.update(v),fe=v.material;fe.visible&&E.push(v,xe,fe,G,It.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||st.intersectsObject(v))){let xe=J.update(v),fe=v.material;if(k&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),It.copy(v.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),It.copy(xe.boundingSphere.center)),It.applyMatrix4(v.matrixWorld).applyMatrix4(Mt)),Array.isArray(fe)){let be=xe.groups;for(let we=0,Fe=be.length;we<Fe;we++){let ke=be[we],Ee=fe[ke.materialIndex];Ee&&Ee.visible&&E.push(v,xe,Ee,G,It.z,ke)}}else fe.visible&&E.push(v,xe,fe,G,It.z,null)}}let pe=v.children;for(let xe=0,fe=pe.length;xe<fe;xe++)Fo(pe[xe],D,G,k)}function wc(v,D,G,k){let{opaque:z,transmissive:pe,transparent:xe}=v;w.setupLightsView(G),Ke===!0&&Te.setGlobalState(P.clippingPlanes,G),k&&p.viewport(ge.copy(k)),z.length>0&&Er(z,D,G),pe.length>0&&Er(pe,D,G),xe.length>0&&Er(xe,D,G),p.buffers.depth.setTest(!0),p.buffers.depth.setMask(!0),p.buffers.color.setMask(!0),p.setPolygonOffset(!1)}function Ec(v,D,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){let Ee=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new un(1,1,{generateMipmaps:!0,type:Ee?Wn:sn,minFilter:Ei,samples:Math.max(4,M.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace})}let pe=w.state.transmissionRenderTarget[k.id],xe=k.viewport||ge;pe.setSize(xe.z*P.transmissionResolutionScale,xe.w*P.transmissionResolutionScale);let fe=P.getRenderTarget(),be=P.getActiveCubeFace(),we=P.getActiveMipmapLevel();P.setRenderTarget(pe),P.getClearColor(mt),Je=P.getClearAlpha(),Je<1&&P.setClearColor(16777215,.5),P.clear(),gt&&Ue.render(G);let Fe=P.toneMapping;P.toneMapping=An;let ke=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),Ke===!0&&Te.setGlobalState(P.clippingPlanes,k),Er(v,G,k),q.updateMultisampleRenderTarget(pe),q.updateRenderTargetMipmap(pe),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let it=0,yt=D.length;it<yt;it++){let xt=D[it],{object:rt,geometry:Ht,material:_e,group:ln}=xt;if(_e.side===xn&&rt.layers.test(k.layers)){let Xe=_e.side;_e.side=Qt,_e.needsUpdate=!0,Tc(rt,G,k,Ht,_e,ln),_e.side=Xe,_e.needsUpdate=!0,Ee=!0}}Ee===!0&&(q.updateMultisampleRenderTarget(pe),q.updateRenderTargetMipmap(pe))}P.setRenderTarget(fe,be,we),P.setClearColor(mt,Je),ke!==void 0&&(k.viewport=ke),P.toneMapping=Fe}function Er(v,D,G){let k=D.isScene===!0?D.overrideMaterial:null;for(let z=0,pe=v.length;z<pe;z++){let xe=v[z],{object:fe,geometry:be,group:we}=xe,Fe=xe.material;Fe.allowOverride===!0&&k!==null&&(Fe=k),fe.layers.test(G.layers)&&Tc(fe,D,G,be,Fe,we)}}function Tc(v,D,G,k,z,pe){v.onBeforeRender(P,D,G,k,z,pe),v.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(P,D,G,k,v,pe),z.transparent===!0&&z.side===xn&&z.forceSinglePass===!1?(z.side=Qt,z.needsUpdate=!0,P.renderBufferDirect(G,D,k,z,v,pe),z.side=ei,z.needsUpdate=!0,P.renderBufferDirect(G,D,k,z,v,pe),z.side=xn):P.renderBufferDirect(G,D,k,z,v,pe),v.onAfterRender(P,D,G,k,z,pe)}function Tr(v,D,G){D.isScene!==!0&&(D=Dt);let k=V.get(v),z=w.state.lights,pe=w.state.shadowsArray,xe=z.state.version,fe=oe.getParameters(v,z.state,pe,D,G,w.state.lightProbeGridArray),be=oe.getProgramCacheKey(fe),we=k.programs;k.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,k.fog=D.fog;let Fe=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;k.envMap=ne.get(v.envMap||k.environment,Fe),k.envMapRotation=k.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,we===void 0&&(v.addEventListener("dispose",Nn),we=new Map,k.programs=we);let ke=we.get(be);if(ke!==void 0){if(k.currentProgram===ke&&k.lightsStateVersion===xe)return Cc(v,fe),ke}else fe.uniforms=oe.getUniforms(v),U!==null&&v.isNodeMaterial&&U.build(v,G,fe),v.onBeforeCompile(fe,P),ke=oe.acquireProgram(fe,be),we.set(be,ke),k.uniforms=fe.uniforms;let Ee=k.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ee.clippingPlanes=Te.uniform),Cc(v,fe),k.needsLights=nd(v),k.lightsStateVersion=xe,k.needsLights&&(Ee.ambientLightColor.value=z.state.ambient,Ee.lightProbe.value=z.state.probe,Ee.directionalLights.value=z.state.directional,Ee.directionalLightShadows.value=z.state.directionalShadow,Ee.spotLights.value=z.state.spot,Ee.spotLightShadows.value=z.state.spotShadow,Ee.rectAreaLights.value=z.state.rectArea,Ee.ltc_1.value=z.state.rectAreaLTC1,Ee.ltc_2.value=z.state.rectAreaLTC2,Ee.pointLights.value=z.state.point,Ee.pointLightShadows.value=z.state.pointShadow,Ee.hemisphereLights.value=z.state.hemi,Ee.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ee.spotLightMatrix.value=z.state.spotLightMatrix,Ee.spotLightMap.value=z.state.spotLightMap,Ee.pointShadowMatrix.value=z.state.pointShadowMatrix),k.lightProbeGrid=w.state.lightProbeGridArray.length>0,k.currentProgram=ke,k.uniformsList=null,ke}function Ac(v){if(v.uniformsList===null){let D=v.currentProgram.getUniforms();v.uniformsList=Us.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function Cc(v,D){let G=V.get(v);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function Qu(v,D){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;y.setFromMatrixPosition(D.matrixWorld);for(let G=0,k=v.length;G<k;G++){let z=v[G];if(z.texture!==null&&z.boundingBox.containsPoint(y))return z}return null}function ed(v,D,G,k,z){D.isScene!==!0&&(D=Dt),q.resetTextureUnits();let pe=D.fog,xe=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?D.environment:null,fe=j===null?P.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:He.workingColorSpace,be=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,we=ne.get(k.envMap||xe,be),Fe=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ke=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ee=!!G.morphAttributes.position,it=!!G.morphAttributes.normal,yt=!!G.morphAttributes.color,xt=An;k.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(xt=P.toneMapping);let rt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ht=rt!==void 0?rt.length:0,_e=V.get(k),ln=w.state.lights;if(Ke===!0&&(qe===!0||v!==de)){let lt=v===de&&k.id===ee;Te.setState(k,v,lt)}let Xe=!1;k.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==ln.state.version||_e.outputColorSpace!==fe||z.isBatchedMesh&&_e.batching===!1||!z.isBatchedMesh&&_e.batching===!0||z.isBatchedMesh&&_e.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&_e.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&_e.instancing===!1||!z.isInstancedMesh&&_e.instancing===!0||z.isSkinnedMesh&&_e.skinning===!1||!z.isSkinnedMesh&&_e.skinning===!0||z.isInstancedMesh&&_e.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&_e.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&_e.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&_e.instancingMorph===!1&&z.morphTexture!==null||_e.envMap!==we||k.fog===!0&&_e.fog!==pe||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Te.numPlanes||_e.numIntersection!==Te.numIntersection)||_e.vertexAlphas!==Fe||_e.vertexTangents!==ke||_e.morphTargets!==Ee||_e.morphNormals!==it||_e.morphColors!==yt||_e.toneMapping!==xt||_e.morphTargetsCount!==Ht||!!_e.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Xe=!0):(Xe=!0,_e.__version=k.version);let mn=_e.currentProgram;Xe===!0&&(mn=Tr(k,D,z),U&&k.isNodeMaterial&&U.onUpdateProgram(k,mn,_e));let Dn=!1,ri=!1,ts=!1,at=mn.getUniforms(),bt=_e.uniforms;if(p.useProgram(mn.program)&&(Dn=!0,ri=!0,ts=!0),k.id!==ee&&(ee=k.id,ri=!0),_e.needsLights){let lt=Qu(w.state.lightProbeGridArray,z);_e.lightProbeGrid!==lt&&(_e.lightProbeGrid=lt,ri=!0)}if(Dn||de!==v){p.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),at.setValue(N,"projectionMatrix",v.projectionMatrix),at.setValue(N,"viewMatrix",v.matrixWorldInverse);let oi=at.map.cameraPosition;oi!==void 0&&oi.setValue(N,Et.setFromMatrixPosition(v.matrixWorld)),M.logarithmicDepthBuffer&&at.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&at.setValue(N,"isOrthographic",v.isOrthographicCamera===!0),de!==v&&(de=v,ri=!0,ts=!0)}if(_e.needsLights&&(ln.state.directionalShadowMap.length>0&&at.setValue(N,"directionalShadowMap",ln.state.directionalShadowMap,q),ln.state.spotShadowMap.length>0&&at.setValue(N,"spotShadowMap",ln.state.spotShadowMap,q),ln.state.pointShadowMap.length>0&&at.setValue(N,"pointShadowMap",ln.state.pointShadowMap,q)),z.isSkinnedMesh){at.setOptional(N,z,"bindMatrix"),at.setOptional(N,z,"bindMatrixInverse");let lt=z.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),at.setValue(N,"boneTexture",lt.boneTexture,q))}z.isBatchedMesh&&(at.setOptional(N,z,"batchingTexture"),at.setValue(N,"batchingTexture",z._matricesTexture,q),at.setOptional(N,z,"batchingIdTexture"),at.setValue(N,"batchingIdTexture",z._indirectTexture,q),at.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&at.setValue(N,"batchingColorTexture",z._colorsTexture,q));let ai=G.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&L.update(z,G,mn),(ri||_e.receiveShadow!==z.receiveShadow)&&(_e.receiveShadow=z.receiveShadow,at.setValue(N,"receiveShadow",z.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&D.environment!==null&&(bt.envMapIntensity.value=D.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=R0()),ri){if(at.setValue(N,"toneMappingExposure",P.toneMappingExposure),_e.needsLights&&td(bt,ts),pe&&k.fog===!0&&Se.refreshFogUniforms(bt,pe),Se.refreshMaterialUniforms(bt,k,te,re,w.state.transmissionRenderTarget[v.id]),_e.needsLights&&_e.lightProbeGrid){let lt=_e.lightProbeGrid;bt.probesSH.value=lt.texture,bt.probesMin.value.copy(lt.boundingBox.min),bt.probesMax.value.copy(lt.boundingBox.max),bt.probesResolution.value.copy(lt.resolution)}Us.upload(N,Ac(_e),bt,q)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Us.upload(N,Ac(_e),bt,q),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&at.setValue(N,"center",z.center),at.setValue(N,"modelViewMatrix",z.modelViewMatrix),at.setValue(N,"normalMatrix",z.normalMatrix),at.setValue(N,"modelMatrix",z.matrixWorld),k.uniformsGroups!==void 0){let lt=k.uniformsGroups;for(let oi=0,ns=lt.length;oi<ns;oi++){let Rc=lt[oi];Q.update(Rc,mn),Q.bind(Rc,mn)}}return mn}function td(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function nd(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(v,D,G){let k=V.get(v);k.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),V.get(v.texture).__webglTexture=D,V.get(v.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:G,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){let G=V.get(v);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,G=0){j=v,W=D,H=G;let k=null,z=!1,pe=!1;if(v){let fe=V.get(v);if(fe.__useDefaultFramebuffer!==void 0){p.bindFramebuffer(N.FRAMEBUFFER,fe.__webglFramebuffer),ge.copy(v.viewport),ve.copy(v.scissor),Ze=v.scissorTest,p.viewport(ge),p.scissor(ve),p.setScissorTest(Ze),ee=-1;return}else if(fe.__webglFramebuffer===void 0)q.setupRenderTarget(v);else if(fe.__hasExternalTextures)q.rebindTextures(v,V.get(v.texture).__webglTexture,V.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Fe=v.depthTexture;if(fe.__boundDepthTexture!==Fe){if(Fe!==null&&V.has(Fe)&&(v.width!==Fe.image.width||v.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(v)}}let be=v.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(pe=!0);let we=V.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(we[D])?k=we[D][G]:k=we[D],z=!0):v.samples>0&&q.useMultisampledRTT(v)===!1?k=V.get(v).__webglMultisampledFramebuffer:Array.isArray(we)?k=we[G]:k=we,ge.copy(v.viewport),ve.copy(v.scissor),Ze=v.scissorTest}else ge.copy(Ae).multiplyScalar(te).floor(),ve.copy(vt).multiplyScalar(te).floor(),Ze=Ge;if(G!==0&&(k=$),p.bindFramebuffer(N.FRAMEBUFFER,k)&&p.drawBuffers(v,k),p.viewport(ge),p.scissor(ve),p.setScissorTest(Ze),z){let fe=V.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,fe.__webglTexture,G)}else if(pe){let fe=D;for(let be=0;be<v.textures.length;be++){let we=V.get(v.textures[be]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+be,we.__webglTexture,G,fe)}}else if(v!==null&&G!==0){let fe=V.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,fe.__webglTexture,G)}ee=-1},this.readRenderTargetPixels=function(v,D,G,k,z,pe,xe,fe=0){if(!(v&&v.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=V.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be){p.bindFramebuffer(N.FRAMEBUFFER,be);try{let we=v.textures[fe],Fe=we.format,ke=we.type;if(v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+fe),!M.textureFormatReadable(Fe)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!M.textureTypeReadable(ke)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-k&&G>=0&&G<=v.height-z&&N.readPixels(D,G,k,z,ce.convert(Fe),ce.convert(ke),pe)}finally{let we=j!==null?V.get(j).__webglFramebuffer:null;p.bindFramebuffer(N.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(v,D,G,k,z,pe,xe,fe=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=V.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be)if(D>=0&&D<=v.width-k&&G>=0&&G<=v.height-z){p.bindFramebuffer(N.FRAMEBUFFER,be);let we=v.textures[fe],Fe=we.format,ke=we.type;if(v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+fe),!M.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!M.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ee=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ee),N.bufferData(N.PIXEL_PACK_BUFFER,pe.byteLength,N.STREAM_READ),N.readPixels(D,G,k,z,ce.convert(Fe),ce.convert(ke),0);let it=j!==null?V.get(j).__webglFramebuffer:null;p.bindFramebuffer(N.FRAMEBUFFER,it);let yt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Qh(N,yt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ee),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,pe),N.deleteBuffer(Ee),N.deleteSync(yt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,G=0){let k=Math.pow(2,-G),z=Math.floor(v.image.width*k),pe=Math.floor(v.image.height*k),xe=D!==null?D.x:0,fe=D!==null?D.y:0;q.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,xe,fe,z,pe),p.unbindTexture()},this.copyTextureToTexture=function(v,D,G=null,k=null,z=0,pe=0){let xe,fe,be,we,Fe,ke,Ee,it,yt,xt=v.isCompressedTexture?v.mipmaps[pe]:v.image;if(G!==null)xe=G.max.x-G.min.x,fe=G.max.y-G.min.y,be=G.isBox3?G.max.z-G.min.z:1,we=G.min.x,Fe=G.min.y,ke=G.isBox3?G.min.z:0;else{let bt=Math.pow(2,-z);xe=Math.floor(xt.width*bt),fe=Math.floor(xt.height*bt),v.isDataArrayTexture?be=xt.depth:v.isData3DTexture?be=Math.floor(xt.depth*bt):be=1,we=0,Fe=0,ke=0}k!==null?(Ee=k.x,it=k.y,yt=k.z):(Ee=0,it=0,yt=0);let rt=ce.convert(D.format),Ht=ce.convert(D.type),_e;D.isData3DTexture?(q.setTexture3D(D,0),_e=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(q.setTexture2DArray(D,0),_e=N.TEXTURE_2D_ARRAY):(q.setTexture2D(D,0),_e=N.TEXTURE_2D),p.activeTexture(N.TEXTURE0),p.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),p.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),p.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let ln=p.getParameter(N.UNPACK_ROW_LENGTH),Xe=p.getParameter(N.UNPACK_IMAGE_HEIGHT),mn=p.getParameter(N.UNPACK_SKIP_PIXELS),Dn=p.getParameter(N.UNPACK_SKIP_ROWS),ri=p.getParameter(N.UNPACK_SKIP_IMAGES);p.pixelStorei(N.UNPACK_ROW_LENGTH,xt.width),p.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xt.height),p.pixelStorei(N.UNPACK_SKIP_PIXELS,we),p.pixelStorei(N.UNPACK_SKIP_ROWS,Fe),p.pixelStorei(N.UNPACK_SKIP_IMAGES,ke);let ts=v.isDataArrayTexture||v.isData3DTexture,at=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){let bt=V.get(v),ai=V.get(D),lt=V.get(bt.__renderTarget),oi=V.get(ai.__renderTarget);p.bindFramebuffer(N.READ_FRAMEBUFFER,lt.__webglFramebuffer),p.bindFramebuffer(N.DRAW_FRAMEBUFFER,oi.__webglFramebuffer);for(let ns=0;ns<be;ns++)ts&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(v).__webglTexture,z,ke+ns),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(D).__webglTexture,pe,yt+ns)),N.blitFramebuffer(we,Fe,xe,fe,Ee,it,xe,fe,N.DEPTH_BUFFER_BIT,N.NEAREST);p.bindFramebuffer(N.READ_FRAMEBUFFER,null),p.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||V.has(v)){let bt=V.get(v),ai=V.get(D);p.bindFramebuffer(N.READ_FRAMEBUFFER,X),p.bindFramebuffer(N.DRAW_FRAMEBUFFER,B);for(let lt=0;lt<be;lt++)ts?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,bt.__webglTexture,z,ke+lt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,bt.__webglTexture,z),at?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ai.__webglTexture,pe,yt+lt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ai.__webglTexture,pe),z!==0?N.blitFramebuffer(we,Fe,xe,fe,Ee,it,xe,fe,N.COLOR_BUFFER_BIT,N.NEAREST):at?N.copyTexSubImage3D(_e,pe,Ee,it,yt+lt,we,Fe,xe,fe):N.copyTexSubImage2D(_e,pe,Ee,it,we,Fe,xe,fe);p.bindFramebuffer(N.READ_FRAMEBUFFER,null),p.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else at?v.isDataTexture||v.isData3DTexture?N.texSubImage3D(_e,pe,Ee,it,yt,xe,fe,be,rt,Ht,xt.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(_e,pe,Ee,it,yt,xe,fe,be,rt,xt.data):N.texSubImage3D(_e,pe,Ee,it,yt,xe,fe,be,rt,Ht,xt):v.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,pe,Ee,it,xe,fe,rt,Ht,xt.data):v.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,pe,Ee,it,xt.width,xt.height,rt,xt.data):N.texSubImage2D(N.TEXTURE_2D,pe,Ee,it,xe,fe,rt,Ht,xt);p.pixelStorei(N.UNPACK_ROW_LENGTH,ln),p.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Xe),p.pixelStorei(N.UNPACK_SKIP_PIXELS,mn),p.pixelStorei(N.UNPACK_SKIP_ROWS,Dn),p.pixelStorei(N.UNPACK_SKIP_IMAGES,ri),pe===0&&D.generateMipmaps&&N.generateMipmap(_e),p.unbindTexture()},this.initRenderTarget=function(v){V.get(v).__webglFramebuffer===void 0&&q.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?q.setTextureCube(v,0):v.isData3DTexture?q.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?q.setTexture2DArray(v,0):q.setTexture2D(v,0),p.unbindTexture()},this.resetState=function(){W=0,H=0,j=null,p.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}};var Vt={wall:14205860,trim:3373945,roof:2706261,wood:7361860,linen:15653821,blanket:13330505,asphalt:2505539,sand:7954511},Io=class{constructor(e,t,i){this.canvas=e,this.onSelect=t,this.settings=i,this.selected=null,this.time=0,this.yaw=.19,this.pitch=.82,this.zoom=1,this.target=new O(0,0,0),this.roomGroups=[],this.materials=new Map,this.people=[],this.cars=[],this.disposed=!1,this.scene=new Ks,this.scene.background=new Oe(1255734),this.scene.fog=new Js(1518646,.011),this.camera=new Si(-25,25,20,-20,.1,180),this.renderer=new Ao({canvas:e,antialias:!0,alpha:!1,powerPreference:"low-power"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,i.compact||i.quality==="low"?1:1.6)),this.renderer.shadowMap.enabled=!i.compact&&i.quality!=="low",this.renderer.shadowMap.type=Na,this.renderer.outputColorSpace=qt,this.renderer.toneMapping=hr,this.renderer.toneMappingExposure=1.35,this.scene.add(new ar(11065830,9790017,2.4)),this.sun=new Is(16764832,3.3),this.sun.position.set(-18,35,12),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024),Object.assign(this.sun.shadow.camera,{left:-32,right:32,top:28,bottom:-28,near:.5,far:95}),this.sun.shadow.bias=-.001,this.scene.add(this.sun),this.fill=new Is(7187392,1.2),this.fill.position.set(20,10,-15),this.scene.add(this.fill),this.buildGround(),this.buildMotel(),this.buildProps(),this.buildActors(),this.buildWeather(),this.scene.traverse(s=>{s.isPointLight&&(s.visible=!i.compact)}),this.raycaster=new lr,this.pointer=new Ve,this.bindControls(),this.resize(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e)}mat(e,t={}){let i=e+JSON.stringify(t);return this.materials.has(i)||this.materials.set(i,new sr({color:e,roughness:.86,...t})),this.materials.get(i)}box(e,t,i,s,r=0,a=0,o=0,c=this.scene,l={}){let h=new zt(new vi(e,t,i),this.mat(s,l));return h.position.set(r,a,o),h.castShadow=!0,h.receiveShadow=!0,c.add(h),h}cylinder(e,t,i,s,r,a,o,c=this.scene,l=8){let h=new zt(new As(e,t,i,l),this.mat(s));return h.position.set(r,a,o),h.castShadow=!0,c.add(h),h}text(e,t,i,s,r,a,o=this.scene,c="#ffe2a7",l="#253e43",h=70){let d=document.createElement("canvas");d.width=768,d.height=256;let u=d.getContext("2d");u.fillStyle=l,u.fillRect(0,0,d.width,d.height),u.fillStyle=c,u.textAlign="center",u.textBaseline="middle",u.font=`bold ${h}px Arial, sans-serif`,u.fillText(e,384,128,720);let m=new tr(d);m.colorSpace=qt;let x=new zt(new Ki(t,i),new Zi({map:m,side:xn}));return x.position.set(s,r,a),o.add(x),x}buildGround(){this.box(140,.3,130,Vt.sand,0,-.48,0),this.box(47,.22,20,3426122,0,-.18,2),this.box(45,.16,4,9600355,0,-.06,-5),this.box(150,.04,7,Vt.asphalt,0,-.28,19);for(let i=-70;i<75;i+=8)this.box(3,.02,.14,12626549,i,-.245,19);for(let i=0;i<8;i++){let s=-12+i*4;this.box(.09,.025,5,12828064,s,0,9)}this.box(34,.16,.25,12298634,1,0,12),this.box(46,.14,.25,12298634,0,.02,-9);for(let i=0;i<17;i++){let s=-65+i*8,r=new zt(new ir(9+i%3*3,9+i%5*3,5),this.mat(i%2?4937568:5464939));r.position.set(s,2,-39-i%3*6),r.rotation.y=i*.7,this.scene.add(r)}for(let i=0;i<15;i++){let s=i<8?-34-i%3*6:29+i%4*7,r=-20+i*11%51;this.cactus(s,r,1+i%3*.3)}let e=new jt,t=[];for(let i=0;i<120;i++){let s=i*2.399;t.push(Math.cos(s)*70,28+i%13*3,-25-Math.abs(Math.sin(s))*55)}e.setAttribute("position",new Ot(t,3)),this.scene.add(new Ts(e,new Ji({color:15850685,size:.1,transparent:!0,opacity:.7})))}cactus(e,t,i=1){let s=new Tt;s.position.set(e,0,t),s.scale.setScalar(i),this.scene.add(s),this.cylinder(.23,.28,2.8,4814950,0,1.3,0,s),this.box(.9,.35,.35,4814950,.45,1.5,0,s),this.cylinder(.16,.18,1.1,4814950,.85,1.95,0,s),this.box(.7,.32,.32,4814950,-.42,.85,0,s),this.cylinder(.15,.17,.8,4814950,-.7,1.1,0,s)}buildMotel(){for(let t=0;t<10;t++){let i=new Tt,s=t>=6;i.position.set(s?-19:-12.5+t*5,0,s?-4+(t-6)*5:-4),this.scene.add(i);let r={group:i,objects:[],id:t+1};i.userData.room=t+1,this.box(4.8,.28,5,12365459,0,.13,0,i),this.box(4.65,.04,4.8,t%2?12226680:11967874,0,.3,0,i),this.box(4.8,2.9,.18,Vt.wall,0,1.65,-2.45,i),this.box(.14,1.15,5,Vt.wall,-2.33,.87,0,i),this.box(.14,1.15,5,Vt.wall,2.33,.87,0,i),this.box(4.9,.2,.3,Vt.trim,0,3.1,-2.45,i),this.box(1.85,.4,2.55,Vt.wood,-.75,.53,-.25,i),this.box(1.78,.3,2.48,Vt.linen,-.75,.86,-.25,i),r.blanket=this.box(1.81,.07,1.5,Vt.blanket,-.75,1.05,.24,i),this.box(1.55,.17,.55,16772562,-.75,1.11,-1.15,i),this.box(1.95,1.1,.15,Vt.wood,-.75,.83,-1.65,i),this.box(.55,.62,.6,Vt.wood,.65,.59,-1.43,i),this.cylinder(.15,.2,.45,14402446,.65,1.1,-1.43,i),this.cylinder(.27,.37,.4,16306330,.65,1.51,-1.43,i),this.box(1.12,.75,.55,Vt.wood,1.46,.65,.92,i),this.box(.95,.63,.08,2111812,1.46,1.34,.85,i),this.box(.75,.45,.035,6720923,1.46,1.34,.9,i,{emissive:4418937,emissiveIntensity:.2}),this.box(1.18,.1,.95,4948091,-.7,.38,1.55,i),r.frame=this.box(.9,.6,.06,3702662,.5,2.3,-2.32,i),this.box(.65,.37,.025,14069103,.5,2.3,-2.28,i),r.plant=new Tt,r.plant.position.set(1.6,.35,-1.72),i.add(r.plant),this.cylinder(.24,.18,.35,12018243,0,.17,0,r.plant),this.cylinder(0,.4,.65,7181425,0,.66,0,r.plant,5),r.plant.visible=!1,r.luxury=this.box(1.05,.15,1.05,13868867,1.35,.35,-.6,i),r.luxury.visible=!1,r.dirt=new Tt,i.add(r.dirt);for(let o=0;o<4;o++){let c=this.box(.28,.035,.22,15721421,.5+o*.3,.36,1.3-o*.35,r.dirt);c.rotation.y=o*.8}r.dirt.visible=!1,r.damage=this.box(.12,.08,.65,5281968,1.8,.4,1.7,i),r.damage.visible=!1,r.closed=this.box(4.7,.1,4.7,4281177,0,.38,0,i),r.closed.visible=!1,r.label=this.text(String(101+t),1.12,.36,0,1.1,2.58,i,"#ffebc8","#245b5d",90),r.label.rotation.x=-.18,r.status=this.cylinder(.17,.17,.09,8639933,1.82,.5,2.2,i,12),r.status.material=this.mat(8639933,{emissive:8639933,emissiveIntensity:.8}).clone(),r.request=new Tt,r.request.position.set(0,3.8,0),i.add(r.request),this.cylinder(.3,.3,.6,16039254,0,0,0,r.request,5),this.cylinder(.1,.1,.14,16039254,0,-.55,0,r.request,8),r.request.visible=!1,r.highlight=this.box(4.98,.04,5.2,16368748,0,.01,0,i,{emissive:16368748,emissiveIntensity:.6}),r.highlight.visible=!1;let a=new Rs(16762253,8,6,2);a.position.set(.65,1.9,-1.43),i.add(a),r.light=a,this.roomGroups.push(r)}let e=new Tt;e.position.set(19,0,-4),this.scene.add(e),this.box(5,.3,5.5,10324850,0,.1,0,e),this.box(5,3.2,.2,Vt.trim,0,1.7,-2.7,e),this.box(.2,3.2,5.5,Vt.trim,2.4,1.7,0,e),this.box(5.3,.3,5.8,Vt.roof,0,3.4,0,e),this.box(2.7,1.2,.6,12086343,0,.9,1.4,e),this.box(.75,.45,.06,14073221,0,1.74,1.4,e),this.text("OFFICE",3.2,.7,0,2.62,2.85,e),this.text("ROUTE 86",2.5,.5,0,2.05,-2.56,e,"#e2bf87","#245b5d"),this.box(35,.1,1.3,11838085,2,.13,-.7)}buildProps(){this.sign=new Tt,this.sign.position.set(17,0,10.5),this.scene.add(this.sign),this.box(.25,6,.25,7770508,-1.5,3,0,this.sign),this.box(.25,6,.25,7770508,1.5,3,0,this.sign),this.box(5.7,2.9,.38,2974306,0,5.7,0,this.sign),this.text("LAST STOP",5.2,1.05,0,6.33,.21,this.sign,"#ffcb86","#244e51",88),this.text("M O T E L",4.9,.83,0,5.33,.21,this.sign,"#f58b6e","#244e51",78),this.vacancy=this.text("VACANCY",3.2,.65,0,4.08,.22,this.sign,"#9cdad0","#1e3d42",84),this.neon=this.box(5.75,.09,.44,15304546,0,7.15,0,this.sign,{emissive:16024665,emissiveIntensity:2}),this.garden=new Tt,this.scene.add(this.garden);for(let e=0;e<4;e++){let t=-7+e*3;this.cylinder(.65,.5,.5,12020813,t,.25,4,this.garden),this.cylinder(0,.9,1.5,7052152,t,1.2,4,this.garden,6)}this.garden.visible=!1;for(let e of[-14,10]){this.cylinder(.1,.13,4.8,7505280,e,2.4,4),this.box(.8,.2,.55,15188634,e,4.8,4,this.scene,{emissive:16761477,emissiveIntensity:1.5});let t=new Rs(16763276,22,13,2);t.position.set(e,4.5,4),this.scene.add(t)}this.coffee=new Tt,this.coffee.position.set(16,.3,.4),this.scene.add(this.coffee),this.box(1.3,.7,.75,Vt.wood,0,.35,0,this.coffee),this.box(.5,.65,.45,14201982,0,1,0,this.coffee),this.coffee.visible=!1;for(let e of[-6,5])this.box(2,.18,.6,9465682,e,.6,3),this.box(2,.6,.15,9465682,e,.96,2.74),this.box(.15,.55,.5,3821907,e-.8,.3,3),this.box(.15,.55,.5,3821907,e+.8,.3,3)}person(e){let t=new Tt;this.box(.4,.65,.27,e,0,.72,0,t),this.cylinder(.18,.18,.33,13673084,0,1.24,0,t,8);let i=[];for(let s of[-.11,.11])i.push(this.box(.14,.42,.17,3361364,s,.23,0,t));return t.userData.legs=i,this.scene.add(t),t}car(e){let t=new Tt;this.box(1.65,.5,3,e,0,.57,0,t),this.box(1.4,.5,1.55,e,0,1.02,-.05,t),this.box(1.22,.35,.06,7774381,0,1.04,.75,t),this.box(1.22,.35,.06,7774381,0,1.04,-.85,t);for(let i of[-.8,.8])for(let s of[-.94,.94]){let r=this.cylinder(.31,.31,.18,1912888,i,.35,s,t,10);r.rotation.z=Math.PI/2}for(let i of[-.55,.55])this.box(.34,.15,.05,16768432,i,.65,1.54,t,{emissive:16765860,emissiveIntensity:.6});return this.scene.add(t),t}buildActors(){for(let e=0;e<10;e++){let t=this.person([13336667,7645338,11772090,14597238][e%4]);t.visible=!1,this.people.push(t);let i=this.car([10310467,6590345,13020799,5600650,12698029][e%5]);i.position.set(-10+e*3.35,0,8),i.visible=!1,this.cars.push(i)}this.workerActors=[this.person(15449704),this.person(8765104),this.person(7442350),this.person(11769776)]}buildWeather(){let e=new Float32Array(1800);for(let i=0;i<600;i++)e[i*3]=(Math.sin(i*8.17)*.5+.5)*60-30,e[i*3+1]=i%57/57*30,e[i*3+2]=Math.cos(i*6.19)*25;let t=new jt;t.setAttribute("position",new Jt(e,3)),this.rain=new Ts(t,new Ji({color:10865112,size:.055,transparent:!0,opacity:.55})),this.scene.add(this.rain),this.rain.visible=!1}bindControls(){this.pointers=new Map,this.dragged=!1,this.lastDistance=null,this.canvas.addEventListener("pointerdown",e=>{this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.canvas.setPointerCapture(e.pointerId),this.start={x:e.clientX,y:e.clientY},this.pointers.size===1?this.dragged=!1:this.dragged=!0}),this.canvas.addEventListener("pointermove",e=>{let t=this.pointers.get(e.pointerId);if(!t)return;let i=e.clientX-t.x,s=e.clientY-t.y;if(this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),Math.abs(e.clientX-this.start.x)+Math.abs(e.clientY-this.start.y)>8&&(this.dragged=!0),this.pointers.size===2){let[r,a]=[...this.pointers.values()],o=Math.hypot(r.x-a.x,r.y-a.y);this.lastDistance&&(this.zoom=je(this.zoom*o/this.lastDistance,.65,2.3)),this.lastDistance=o}else this.yaw-=i*.004,this.pitch=je(this.pitch+s*.003,.5,1.35);this.updateCamera()}),this.canvas.addEventListener("pointerup",e=>{!this.dragged&&this.pointers.size===1&&this.pick(e.clientX,e.clientY),this.pointers.delete(e.pointerId),this.lastDistance=null}),this.canvas.addEventListener("pointercancel",e=>{this.pointers.delete(e.pointerId),this.lastDistance=null}),this.canvas.addEventListener("wheel",e=>{e.preventDefault(),this.zoom=je(this.zoom*Math.exp(-e.deltaY*.001),.65,2.3),this.updateCamera()},{passive:!1}),this.canvas.addEventListener("webglcontextlost",e=>{e.preventDefault(),this.disposed=!0,window.dispatchEvent(new Event("motel-context-lost"))})}pick(e,t){let i=this.canvas.getBoundingClientRect();this.pointer.set((e-i.left)/i.width*2-1,-(t-i.top)/i.height*2+1),this.raycaster.setFromCamera(this.pointer,this.camera);let s=this.raycaster.intersectObjects(this.roomGroups.map(r=>r.group),!0);if(s.length){let r=s[0].object;for(;r&&!r.userData.room;)r=r.parent;r&&this.onSelect(r.userData.room)}}resize(){let e=this.canvas.clientWidth,t=this.canvas.clientHeight;!e||!t||(this.renderer.setSize(e,t,!1),this.aspect=e/t,this.updateCamera())}updateCamera(){let e=this.aspect||1,t=e<1?25/e:23;this.camera.left=-t*e,this.camera.right=t*e,this.camera.top=t*(this.settings.compact?.74:1),this.camera.bottom=-t*(this.settings.compact?1.26:1),this.camera.zoom=this.zoom,this.camera.position.set(Math.sin(this.yaw)*48*Math.cos(this.pitch),Math.sin(this.pitch)*48,Math.cos(this.yaw)*48*Math.cos(this.pitch)),this.camera.lookAt(this.target),this.camera.updateProjectionMatrix()}select(e){this.selected=e}control(e){e==="reset"&&(this.yaw=.19,this.pitch=.82,this.zoom=1),e==="left"&&(this.yaw-=.2),e==="right"&&(this.yaw+=.2),e==="in"&&(this.zoom=je(this.zoom*1.18,.65,2.3)),e==="out"&&(this.zoom=je(this.zoom/1.18,.65,2.3)),this.updateCamera()}setQuality(e){this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.settings.compact||e==="low"?1:1.6)),this.renderer.shadowMap.enabled=!this.settings.compact&&e!=="low",this.scene.traverse(t=>{t.isPointLight&&(t.visible=!this.settings.compact)}),this.resize()}update(e,t){if(this.disposed)return;this.time+=t;let i=this.settings.compact||this.settings.reducedMotion;for(let o=0;o<this.roomGroups.length;o++){let c=this.roomGroups[o],l=e.rooms[o];c.closed.visible=!l.open,c.dirt.visible=l.open&&l.clean<75,c.damage.visible=l.open&&l.condition<55,c.plant.visible=l.open&&l.quality>=1,c.luxury.visible=l.open&&l.quality>=2,c.frame.visible=l.quality>=2,c.highlight.visible=this.selected===l.id,c.request.visible=!!l.request,l.request&&(c.request.position.y=3.8+(i?0:Math.sin(this.time*3)*.14));let d={Ready:8771770,Occupied:15118188,"Needs cleaning":13138277,"Needs repair":14969177,Closed:5993081,Cleaning:8961744,Repairing:8961744,"Guest service":8961744}[Ut(l)]||7829367;c.status.material.color.setHex(d),c.status.material.emissive.setHex(d),c.light.intensity=l.open?l.guest?9:4:0,c.blanket.material=this.mat(l.quality===3?3440523:l.quality===2?5798025:l.quality===1?11174504:Vt.blanket);let u=this.people[o];if(u.visible=!!l.guest,l.guest){let x=c.group.position;u.position.set(x.x+1.1,.31,x.z+.8),u.rotation.y=Math.sin(this.time*.2+o)*.3}let m=this.cars[o];m.visible=!!l.guest,m.position.x=-12+o*3.1}let s=[e.playerJob,...["rosa","eli","june"].map(o=>e.staff.find(c=>c.id===o)?.job||null)];this.workerActors.forEach((o,c)=>{let l=s[c];o.visible=c===0||e.staff.some(u=>u.id===["rosa","eli","june"][c-1]&&u.active);let h=l?this.roomGroups[l-1]:null,d=new O(h?h.group.position.x+1.5:17+c*.55,.12,h?h.group.position.z+1.8:1.5);if(i)o.position.copy(d);else{o.position.lerp(d,Math.min(1,t*2));let u=o.position.distanceTo(d)>.2;o.userData.legs.forEach((m,x)=>m.rotation.x=u?Math.sin(this.time*10+x*Math.PI)*.45:0)}o.rotation.y=l?Math.PI:0}),this.garden.visible=e.upgrades.includes("garden"),this.coffee.visible=e.upgrades.includes("coffee"),this.neon.material.emissiveIntensity=e.upgrades.includes("sign")?3:1.3;let r=Fn(e).weather==="Heavy rain"&&e.phase==="night";if(this.rain.visible=r&&!i&&!this.settings.compact,this.rain.visible){let o=this.rain.geometry.attributes.position;for(let c=0;c<o.count;c++)o.array[c*3+1]-=t*13,o.array[c*3+1]<0&&(o.array[c*3+1]=30);o.needsUpdate=!0}let a=e.phase==="night"?Math.sin(Math.PI*e.minute/480):.05;this.sun.intensity=3.3-a*2.8,this.fill.intensity=.9+a*.4,this.scene.background.setRGB(.075-a*.035,.15-a*.07,.19-a*.07),this.scene.fog.color.copy(this.scene.background),this.vacancy.visible=e.rooms.some(o=>Ut(o)==="Ready"),this.renderer.render(this.scene,this.camera)}};var Po=class{constructor(e){this.settings=e,this.context=null,this.timer=null,this.step=0}start(){if(!this.context){let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.context=new e,this.master=this.context.createGain(),this.master.connect(this.context.destination),this.musicGain=this.context.createGain(),this.musicGain.connect(this.master),this.fxGain=this.context.createGain(),this.fxGain.connect(this.master),this.update()}this.context.state==="suspended"&&this.context.resume().catch(()=>{}),this.timer||(this.timer=setInterval(()=>this.music(),1800))}update(){this.context&&(this.master.gain.setTargetAtTime(this.settings.mute?0:this.settings.volume/100,this.context.currentTime,.1),this.musicGain.gain.value=this.settings.music?.28:0,this.fxGain.gain.value=.5)}tone(e,t=.2,i="sine",s=.15,r=0,a=this.fxGain){if(!this.context||!a)return;let o=this.context.currentTime+r,c=this.context.createOscillator(),l=this.context.createGain();c.type=i,c.frequency.value=e,l.gain.setValueAtTime(0,o),l.gain.linearRampToValueAtTime(s,o+.015),l.gain.exponentialRampToValueAtTime(1e-4,o+t),c.connect(l),l.connect(a),c.start(o),c.stop(o+t+.05),c.onended=()=>{c.disconnect(),l.disconnect()}}effect(e){this.start(),e==="success"?(this.tone(523,.28),this.tone(659,.4,"sine",.13,.1)):e==="bell"?(this.tone(880,1,"sine",.12),this.tone(1320,.65,"sine",.06,.06)):e==="warning"?this.tone(220,.25,"triangle",.13):e==="win"?[261,329,392,523,659].forEach((t,i)=>this.tone(t,1.4,"sine",.17,i*.18)):this.tone(380,.09,"sine",.06)}music(){if(!this.context||this.context.state!=="running"||!this.settings.music||this.settings.mute)return;let t=[[130.81,164.81,196],[110,130.81,164.81],[87.31,130.81,174.61],[98,146.83,196]][Math.floor(this.step/4)%4];t.forEach((i,s)=>this.tone(i,3,"sine",.1,s*.12,this.musicGain)),this.tone(t[this.step%3]*2,1.7,"triangle",.08,.3,this.musicGain),this.step++}suspend(){this.context?.state==="running"&&this.context.suspend().catch(()=>{})}};var Ye=n=>document.getElementById(n),tt=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),ze=n=>`${n<0?"\u2212":""}$${Math.abs(Math.round(n)).toLocaleString("en-US")}`,Sr="last-stop-motel.save.v1",ku="last-stop-motel.backup.v1",zu="last-stop-motel.settings.v1",Vu="last-stop-motel.meta.v1",_c={volume:45,music:!0,mute:!1,quality:"high",reducedMotion:window.matchMedia("(prefers-reduced-motion: reduce)").matches,autoPause:!0,compact:!1},$e={..._c},Rt={achievements:[],best:0,wins:0},Pi=!1,Nu=!1;try{let n=JSON.parse(localStorage.getItem(zu)||"{}");for(let t of Object.keys(_c))typeof n[t]==typeof _c[t]&&($e[t]=n[t]);$e.volume=je($e.volume,0,100),$e.quality=$e.quality==="low"?"low":"high";let e=JSON.parse(localStorage.getItem(Vu)||"{}");Array.isArray(e.achievements)&&(Rt.achievements=e.achievements.filter(t=>Ui.some(i=>i.id===t))),Number.isFinite(e.best)&&(Rt.best=e.best),Number.isInteger(e.wins)&&(Rt.wins=e.wins),Pi=!!localStorage.getItem(Sr)}catch{}var R=Ar(),Li=null,pt=!1,dt=!1,Ri=1,ft=null,Yt=null,Pn="reception",on=null,Du=0,Uu=0,Ii="prep",Os=null,No="standard",wr=!1,rn=!1,gc=0,pn=new Po($e);function ie(n,e,t="",i=""){return`<button type="button" data-action="${n}" ${t} class="${i}">${e}</button>`}function yn(n){let e={room:"M3 21V4h14v17M7 8h2m-2 4h2m4 5h1m3 4h4M1 21h20",desk:"M3 21v-9h18v9M1 12h22M6 12V8a6 6 0 0 1 12 0v4",office:"M3 21V8l9-5 9 5v13M8 21v-6h8v6M8 10h1m6 0h1",staff:"M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 10v-3a7 7 0 0 1 14 0v3m1-16a4 4 0 0 1 0 8m2 3a6 6 0 0 1 3 5",upgrade:"m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5m-18 5 9 5 9-5",ledger:"M5 3h15v18H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm2 5h9M7 12h9m-9 4h5",settings:"M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-6v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2",help:"M9 8a3 3 0 0 1 6 0c0 2-3 2-3 5m0 4v1M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z",play:"m8 4 12 8-12 8V4Z",pause:"M8 4v16m8-16v16",sun:"M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-7v3m0 16v3M1 12h3m16 0h3M4 4l3 3m10 10 3 3M4 20l3-3M17 7l3-3",close:"m6 6 12 12M6 18 18 6",save:"M4 3h14l3 3v15H3V3Zm3 0v6h10V3M7 21v-8h10v8"};return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${(e[n]||e.room).split("|").map(t=>`<path d="${t}"/>`).join("")}</svg>`}var Fu=new WeakMap;function an(n,e){if(Fu.get(n)===e)return;Fu.set(n,e);let t=n.contains(document.activeElement)?document.activeElement:null,i=t?.dataset.action,s=t?.dataset.id,r=t?.dataset.guest,a=n.scrollTop;n.innerHTML=e,n.scrollTop=a,i&&[...n.querySelectorAll("[data-action]")].find(l=>l.dataset.action===i&&l.dataset.id===s&&l.dataset.guest===r)?.focus({preventScroll:!0})}function Nt(n,e="info"){let t=document.createElement("div");for(t.className=`toast ${e}`,t.textContent=n,Ye("toasts").appendChild(t);Ye("toasts").children.length>3;)Ye("toasts").firstChild.remove();setTimeout(()=>t.remove(),4500)}function en(n=!1){if(pt)try{let e=Go(R),t=localStorage.getItem(Sr);if(t)try{ks(t),localStorage.setItem(ku,t)}catch{}localStorage.setItem(Sr,e),localStorage.setItem(Vu,JSON.stringify(Rt)),Pi=!0,n&&Nt("Game saved on this device.","success")}catch{(!Nu||n)&&(Nt("Browser saving is unavailable. Use Export save in Settings to keep your progress.","warning"),Nu=!0)}}function vc(){try{localStorage.setItem(zu,JSON.stringify($e))}catch{}pn.update(),Li?.setQuality($e.quality),document.body.classList.toggle("reduced-motion",$e.compact||$e.reducedMotion),document.body.classList.toggle("mobile-compact",$e.compact)}function Gu(){if(R.phase==="prep")return"BEFORE OPENING";let n=(1080+Math.floor(R.minute))%1440;return`${String(Math.floor(n/60)).padStart(2,"0")}:${String(n%60).padStart(2,"0")}`}function Gt(n,e={}){return n&&(Nt(n.message,n.ok?"success":"warning"),pn.effect(n.ok?"click":"warning"),n.ok&&en()),e.close&&n?.ok&&In(),et(),on&&!["event","report","ending","intro","confirm-new"].includes(on)&&Do(),n?.ok}function P0(){rn=!1,R=Ar(No),pt=!0,dt=!1,Ri=1,ft=null,Yt=null,Pn="reception",wr=!1,Ii="prep",Os=null,In(),Ye("start-screen").hidden=!0,pn.start(),et(),Xn("intro"),en()}function L0(){rn=!1;try{R=ks(localStorage.getItem(Sr))}catch{try{R=ks(localStorage.getItem(ku)),Nt("Recovered your previous automatic save.","warning")}catch{Nt("The saved game could not be read. You can import a backup from Settings.","warning");return}}pt=!0,dt=R.phase==="night",ft=null,Yt=null,wr=R.achievements.includes("finish"),Ye("start-screen").hidden=!0,pn.start(),Ii=R.phase,Os=R.event,et(),yc()}function N0(){an(Ye("start-screen"),`<div class="start-copy"><div class="route-tag"><span>ROUTE</span><strong>86</strong></div><p class="eyebrow">MOBILE COMPACT \xB7 30 FPS</p><h1>Last Stop<br><em>Motel.</em></h1><p class="start-desc">Seven nights. Pocket-sized controls.</p><div class="start-actions">${Pi?ie("continue","Continue your stay","","primary wide"):""}${ie("new","New campaign","",Pi?"secondary wide":"primary wide")}</div><p class="start-meta">THREE DIFFICULTIES <span>\xB7</span> OFFLINE PLAY <span>\xB7</span> ENDLESS MODE</p><div class="start-links">${ie("help","How to play")}${ie("settings","Settings")}${ie("credits","Credits")}</div><p class="version">VERSION ${Di} \xB7 LAST STOP MOTEL</p></div><div class="start-postcard"><span>TONIGHT\u2019S FORECAST</span><strong>Clear skies.<br>A few late arrivals.</strong><small>There\u2019s always someone<br>looking for a place to stop.</small></div>`)}function D0(){if(document.body.classList.toggle("playing",pt),document.body.classList.toggle("room-open",pt&&ft!==null),document.body.classList.toggle("panel-collapsed",rn),!pt){Xu();return}let n=R.rooms.filter(r=>r.open),e=n.filter(r=>r.guest).length,t=n.filter(r=>r.request).length,i=n.filter(r=>Ut(r)==="Ready").length,s=R.rooms.some(r=>r.job);an(Ye("topbar"),`<div class="mobile-stats"><strong class="mobile-night">N${R.night}${R.endless?"":"/7"}</strong><strong class="mobile-cash">${ze(R.cash)}</strong><span title="Reputation">Rep <b>${Math.round(R.rep)}</b></span><span title="Supplies">Linen <b>${R.supplies}</b></span><span title="Occupied rooms">Beds <b>${e}/${n.length}</b></span></div><div class="mobile-clock"><span>${R.phase==="prep"?"Prepare rooms":Gu()}${R.phase==="night"&&dt?" \xB7 PAUSED":""}</span><div>${R.phase==="prep"?ie("open",s?"Working\u2026":"Open night",s?"disabled":"","primary"):ie("pause",dt?"Resume":"Pause",`aria-label="${dt?"Resume":"Pause"} game"`,"primary")}${ie("speed",`${Ri}\xD7`,'aria-label="Change game speed"',"secondary")}${ie("settings",yn("settings"),'aria-label="Settings"',"square")}</div></div>`),Pn==="rooms"?Hu():Yu(),Zu(),an(Ye("toolbar"),`<div class="dock-main">${[["reception","desk","Guests",R.queue.length],["rooms","room","Rooms",t],["office","office","Office",0],["more","settings","More",0]].map(([r,a,o,c])=>ie(r,`${yn(a)}<span>${o}</span>${c?`<b class="nav-count">${c}</b>`:""}`,"",Pn===r&&!on?"dock-item active":"dock-item")).join("")}</div>`),an(Ye("world-controls"),`<div class="camera-buttons">${ie("camera-out","\u2212",'aria-label="Zoom out"')}${ie("camera-in","+",'aria-label="Zoom in"')}${ie("camera-reset","\u21BA",'aria-label="Reset camera"')}${ie("toggle-panel",rn?"Show panel":"Hide panel",`aria-expanded="${!rn}"`,"panel-toggle")}</div>`),Li?.select(ft);for(let r of R.notifications.splice(0))if(r.type==="achievement"){let a=r.message.replace("Achievement: ",""),o=Ui.find(c=>c.id===a);o&&Nt(`Achievement unlocked \xB7 ${o.name}`,"achievement"),Rt.achievements.includes(a)||Rt.achievements.push(a)}else Nt(r.message,r.type),r.message.includes("waiting")&&pn.effect("bell")}function U0(){R.queue.some(t=>t.id===Yt)||(Yt=R.queue[0]?.id||null);let n=R.queue.find(t=>t.id===Yt),e=R.rooms.filter(t=>Ut(t)==="Ready").length;an(Ye("left-panel"),`<div class="panel-heading"><h2>${R.phase==="prep"?"Before opening":`Guests \xB7 ${R.queue.length} waiting`}</h2>${ie("toggle-panel","Hide",'aria-label="Hide panel"',"text-button")}</div>${R.phase==="prep"?`<div class="compact-prep"><strong>${tt(Fn(R).title)}</strong><p>${e} ready rooms \xB7 ${ze(R.debt)} debt</p><div class="inline-actions">${ie("rooms","Prepare rooms","","primary")}${ie("staff","Team","","secondary")}${ie("upgrades","Improve","","secondary")}</div></div>`:n?`<div class="compact-guest"><div class="guest-tabs">${R.queue.map(t=>ie("guest",tt(t.name.split(" ")[0]),`data-id="${tt(t.id)}" aria-pressed="${t.id===n.id}"`,t.id===n.id?"selected":"")).join("")}</div><div class="compact-guest-info"><strong>${tt(n.name)}</strong><span>${tt(n.title)}</span></div><p>Budget <b>${ze(n.budget)}</b> \xB7 Quality ${n.comfort}${n.quiet?" \xB7 Quiet":""}</p><div class="patience" aria-label="Patience remaining"><i style="width:${je(1-n.wait/n.patience,0,1)*100}%"></i></div><div class="inline-actions">${ie("assign-best","Find room",`data-id="${tt(n.id)}"`,"primary")}${ie("turn-away","Refer elsewhere",`data-id="${tt(n.id)}"`,"secondary")}</div></div>`:`<div class="compact-prep"><strong>${R.arrivals.length?"Waiting for travelers.":"All arrivals complete."}</strong><p>${e} ready \xB7 ${R.arrivals.length} arrivals left${R.playerJob?" \xB7 You are working":""}</p>${ie("rooms","Check rooms","","secondary")}</div>`}`)}function Hu(){an(Ye("left-panel"),`<div class="panel-heading"><div><p class="eyebrow">PROPERTY REGISTER</p><h2>Your rooms</h2></div><span class="counter">${R.rooms.filter(n=>n.open).length}</span></div><div class="room-list">${R.rooms.map(n=>ie("select-room",`<span class="room-number">${n.number}</span><span class="room-list-info"><strong>${n.request?"Guest request":Ut(n)}</strong><small>${n.open?`Quality ${n.quality}${n.guest?" \xB7 "+tt(n.guest.name):" \xB7 "+ze(Oi(R,n))}`:"West wing \xB7 reopen between nights"}</small></span><span class="status-dot status-${Wu(n)}"></span>`,`data-id="${n.id}"`,ft===n.id?"room-row selected":"room-row")).join("")}</div><p class="panel-tip">Green: ready \xB7 Gold: occupied<br>Coral: attention \xB7 Blue: work in progress</p>`)}function Wu(n){return n.open?n.job?"working":n.request?"request":n.guest?"occupied":n.clean<75||n.condition<35?"dirty":"ready":"closed"}function Lo(n,e,t=""){return`<div class="meter"><div><span>${n}</span><strong>${Math.round(e)}<small>/100</small></strong></div><div class="meter-track ${t}"><i style="width:${je(e,0,100)}%"></i></div></div>`}function F0(){let n=Ye("room-panel");if(n.hidden=ft===null,ft===null)return;let e=R.rooms[ft-1],t=R.queue.find(r=>r.id===Yt),i=t?Bi(R,e,t):null,s=!!(e.job||R.playerJob);an(n,`<div class="panel-heading"><h2>Room ${e.number} <small>${Ut(e)}</small></h2>${ie("close-room","Back",'aria-label="Back to room list"',"secondary")}</div><div class="compact-room">${e.open?`<div class="room-readout"><span>Clean <b>${Math.round(e.clean)}</b></span><span>Condition <b>${Math.round(e.condition)}</b></span><span>Quality <b>${e.quality}/3</b></span><strong>${ze(Oi(R,e))}</strong></div>${t&&Ut(e)==="Ready"?`<div class="compact-booking"><p>${tt(t.name)} \xB7 Happiness ${i.happiness}/100</p>${ie("check-in",i.affordable?`Check in \xB7 ${ze(i.price)}`:"Above guest budget",`data-id="${e.id}" data-guest="${tt(t.id)}" ${i.affordable?"":"disabled"}`,"primary wide")}</div>`:""}${e.guest?`<p class="compact-occupant">${tt(e.guest.name)} \xB7 Happiness <b>${Math.round(e.guest.happiness)}/100</b></p>`:""}${e.request?`<div class="compact-request"><p>${tt(e.request.name)} \xB7 ${Math.ceil(e.request.remaining)} min left</p>${ie("service",`Help guest${e.request.supplies?" \xB7 1 linen":""}`,`data-id="${e.id}" ${s?"disabled":""}`,"primary wide")}</div>`:""}${e.job?`<div class="job-card"><span>${e.job.worker==="player"?"You":bn.find(r=>r.id===e.job.worker)?.name} \xB7 ${Math.ceil(e.job.remaining)} min left</span><div class="meter-track"><i style="width:${(1-e.job.remaining/e.job.total)*100}%"></i></div></div>`:`<div class="inline-actions">${!e.guest&&e.clean<100?ie("clean","Clean \xB7 1 linen",`data-id="${e.id}" ${s?"disabled":""}`,"primary"):""}${e.condition<100?ie("repair","Repair \xB7 $18 + 1 linen",`data-id="${e.id}" ${s?"disabled":""}`,"secondary"):""}</div>`}${R.phase==="prep"&&e.quality<3?ie("upgrade-room",`Quality ${e.quality+1} \xB7 ${ze([130,190,270][e.quality])}`,`data-id="${e.id}" ${e.job?"disabled":""}`,"secondary wide"):""}`:`<p>Reopen this west-wing room between nights.</p>${ie("expand",`Reopen \xB7 ${ze(280+(R.rooms.filter(r=>r.open).length-6)*60)}`,`data-id="${e.id}" ${R.phase!=="prep"?"disabled":""}`,"primary wide")}`}</div>`)}function Xn(n){on=n,Do();let e=Ye("modal");e.open||e.showModal(),pn.effect("click")}function In(){on=null,Ye("modal").open&&Ye("modal").close()}function O0(n,e,t,i=!1,s=!0){return`<div class="modal-shell ${i?"large":""}"><header class="modal-head"><div><p class="eyebrow">${e}</p><h2 id="modal-title">${n}</h2></div>${s?ie("close-modal",yn("close"),'aria-label="Close dialog"',"square"):""}</header><div class="modal-body">${t}</div>${["event","ending","report","intro","new","confirm-new"].includes(on)?"":'<footer class="modal-foot">Time pauses while this window is open.</footer>'}</div>`}function Do(){let n="",e="LAST STOP MOTEL",t="",i=!1,s=!0;switch(on){case"more":n="Motel menu",e="MOBILE COMPACT \xB7 "+Di,t=`<div class="mobile-menu">${[["staff","Team & shifts"],["upgrades","Improvements"],["ledger","Ledger & debt"],["achievements","Achievements"],["help","How to play"],["settings","Settings & saves"],["home","Save & return to title"]].map(([r,a])=>ie(r,a,"","secondary wide")).join("")}</div>`;break;case"new":n="Choose your road",e="A COMPLETE SEVEN-NIGHT CAMPAIGN",t=`<p>Pay the debt by the final sunrise and finish with at least 40 reputation. A successful campaign unlocks endless play.</p><div class="difficulty-list">${Object.entries(Un).map(([r,a])=>ie("difficulty",`<strong>${a.name}</strong><span>${a.description}</span>`,`data-id="${r}" aria-pressed="${No===r}"`,No===r?"difficulty selected":"difficulty")).join("")}</div>${Pi?'<p class="warning-text">Starting a new campaign replaces your current automatic save. Export it in Settings first if you want to keep it.</p>':""}${ie("start-new","Begin your stay","","primary wide")}`;break;case"confirm-new":n="Leave this campaign?",t=`<p>Your current progress is saved. You can return to the title screen and continue later.</p>${ie("confirm-home","Save and return to title","","primary wide")}${ie("close-modal","Keep playing","","secondary wide")}`;break;case"intro":n="The keys are yours.",e="NIGHT ONE \xB7 KEEP THE LIGHT ON",s=!1,t=`<p class="story-text">The motel has seen better days. Your dad left you the keys, a stack of bills, and a note: <em>\u201CKeep a light on. Someone will need it.\u201D</em></p><div class="objective-card"><span>YOUR GOAL</span><strong>${ze(R.debt)} by sunrise after night 7</strong><p>Finish with at least 40 reputation. You start with ${ze(R.cash)} and six rooms.</p></div><ol class="help-steps"><li><strong>Prepare.</strong> Clean rooms 102 and 105. Repair worn rooms. One supply is used per task.</li><li><strong>Open the office.</strong> Select a traveler, then choose a ready room within their budget.</li><li><strong>Look after people.</strong> Resolve requests and nightly decisions. Happy guests leave tips and build your reputation.</li><li><strong>Make it yours.</strong> Use the mornings to hire staff, renovate, and reopen the west wing.</li></ol><p class="subtle">The game pauses when a traveler arrives. Press Space or the play button to resume. Change this in Settings.</p>${ie("intro-done","Switch on the vacancy light","","primary wide")}`;break;case"office":n="The front office",e="SUPPLIES & ROOM RATES",i=!0,t=`<div class="modal-grid"><section><h3>Set tonight\u2019s rates</h3><p>Rates include an extra $25 per room quality level. Existing bookings keep their original price.</p><div class="segmented">${[["value","Value","$75"],["standard","Standard","$100"],["premium","Premium","$130"]].map(([r,a,o])=>ie("rate",`<strong>${a}</strong><span>${o} base</span>`,`data-id="${r}" aria-pressed="${R.rate===r}"`,R.rate===r?"selected":"")).join("")}</div><div class="objective-card"><span>${R.endless?"CREDIT DUE AT NEXT SUNRISE":"DEBT DUE AFTER NIGHT 7"}</span><strong>${ze(R.debt)}</strong><p>Cash currently available: ${ze(R.cash)}</p></div></section><section><h3>Linen & supplies <span class="pill">${R.supplies} available</span></h3><p>Cleaning, repairs, and some guest requests consume supplies. Deliveries arrive immediately.</p>${ie("supplies","6 supplies \xB7 $45",'data-id="6"',"secondary wide")}${ie("supplies","12 supplies \xB7 $82",'data-id="12"',"secondary wide")}${ie("credit-supplies","4 supplies on credit \xB7 $45 due later",R.emergencyDelivery?"disabled":"","text-button wide")}<h3 class="spaced">Take care of the team</h3>${Lo("Team energy",R.energy)}<p>Below 25 energy, tasks take 30% longer.</p>${ie("rest","Meal break \xB7 $12","","secondary wide")}${!R.loan&&!R.endless?`<details><summary>Emergency financing</summary><p>Receive $350 now. Add $450 to the final debt. Available once per campaign.</p>${ie("loan","Accept emergency loan","","secondary wide")}</details>`:""}</section></div>`;break;case"staff":n="A good crew",e="STAFF & SHIFTS",i=!0,t=`<p>Staff handle tasks automatically when time is running. Keep cash and supplies available. Wages are paid at sunrise for each active shift.</p><div class="cards-three">${bn.map(r=>{let a=R.staff.find(o=>o.id===r.id);return`<article class="shop-card"><div class="staff-avatar">${r.name[0]}</div><p class="eyebrow">${r.role}</p><h3>${r.name}</h3><p>${r.description}</p><div class="shop-price">${ze(r.wage)}<small> per night</small></div>${a?ie("staff-toggle",a.active?"On shift \xB7 give night off":"Off duty \xB7 schedule shift",`data-id="${r.id}" ${R.phase!=="prep"||a.job?"disabled":""}`,"secondary wide"):ie("hire",`Hire \xB7 ${ze(r.hire)}`,`data-id="${r.id}" ${R.phase!=="prep"?"disabled":""}`,"primary wide")}</article>`}).join("")}</div><p class="subtle">Hiring and shift changes are available between nights. You can always do tasks yourself.</p>`;break;case"upgrades":n="Make yourself at home",e="PROPERTY IMPROVEMENTS",i=!0,t=`<p>Install improvements between nights. Every purchase comes out of the cash you need for the debt.</p><div class="shop-grid">${Bs.map(r=>`<article class="shop-card"><div class="shop-top"><span>${yn("upgrade")}</span><strong>${ze(r.cost)}</strong></div><h3>${r.name}</h3><p>${r.description}</p>${ie("buy-upgrade",R.upgrades.includes(r.id)?"Installed":"Install improvement",`data-id="${r.id}" ${R.upgrades.includes(r.id)||R.phase!=="prep"?"disabled":""}`,"secondary wide")}</article>`).join("")}</div><div class="callout">Select individual rooms to renovate their interiors or reopen the four west-wing rooms.</div>`;break;case"ledger":n="The night register",e="INCOME, EXPENSES & PROGRESS",i=!0,t=`<div class="summary-stats"><div><span>Total guests</span><strong>${R.stats.hosted}</strong></div><div><span>Cash on hand</span><strong>${ze(R.cash)}</strong></div><div><span>Debt remaining</span><strong>${ze(R.debt)}</strong></div><div><span>Requests resolved</span><strong>${R.stats.requests}</strong></div></div>${R.history.length?`<div class="table-wrap"><table><thead><tr><th>Night</th><th>Guests</th><th>Rooms</th><th>Tips</th><th>Costs</th><th>Net</th></tr></thead><tbody>${R.history.map(r=>`<tr><td>${r.night}</td><td>${r.guests}</td><td>${ze(r.income)}</td><td>${ze(r.tips)}</td><td>${ze(r.expenses)}</td><td class="${r.profit>=0?"positive":"negative"}">${ze(r.profit)}</td></tr>`).join("")}</tbody></table></div>`:'<div class="callout">Your first nightly report will appear here at sunrise.</div>'}<p class="subtle">Nightly costs include work and purchases made after opening, utilities, and wages. Morning investments are reflected in cash and lifetime spending.</p><div class="ledger-foot"><span>Lifetime income: ${ze(R.stats.earned)}</span><span>Lifetime spending: ${ze(R.stats.spent)}</span></div><h3 class="spaced">Recent entries</h3><div class="log-list">${R.log.slice(0,12).map(r=>`<div><span>N${r.night}</span><p>${tt(r.message)}</p></div>`).join("")}</div>${ie("achievements","View achievements","","secondary wide")}`;break;case"achievements":n="Stories from the road",e=`${Rt.achievements.length} OF ${Ui.length} ACHIEVEMENTS`,i=!0,t=`<div class="achievement-grid">${Ui.map(r=>`<article class="achievement ${Rt.achievements.includes(r.id)?"unlocked":""}"><span>${Rt.achievements.includes(r.id)?"\u2605":"\u25C7"}</span><div><h3>${r.name}</h3><p>${r.description}</p></div></article>`).join("")}</div><p class="subtle">Achievements are remembered on this browser. Best recorded score: ${Rt.best.toLocaleString()}.</p>`;break;case"settings":n="Settle in",e="SETTINGS & SAVED GAME",t=`<div class="setting-row"><label for="compact">Compact mobile layout</label><input id="compact" type="checkbox" data-setting="compact" ${$e.compact?"checked":""}></div><p class="subtle">Switch instantly between the full layout and the compact mobile controls. Compact mode uses one panel, lighter graphics and a 30 FPS cap. Your game and other settings are kept.</p><div class="setting-row"><label for="volume">Sound volume</label><output id="volume-value">${$e.volume}%</output></div><input id="volume" type="range" min="0" max="100" value="${$e.volume}" aria-label="Sound volume"><div class="setting-row"><label for="mute">Mute all sound</label><input id="mute" type="checkbox" data-setting="mute" ${$e.mute?"checked":""}></div><div class="setting-row"><label for="music">Original ambient music</label><input id="music" type="checkbox" data-setting="music" ${$e.music?"checked":""}></div><div class="setting-row"><label for="autoPause">Pause on guest arrival</label><input id="autoPause" type="checkbox" data-setting="autoPause" ${$e.autoPause?"checked":""}></div><div class="setting-row"><label for="reducedMotion">Reduce motion</label><input id="reducedMotion" type="checkbox" data-setting="reducedMotion" ${$e.reducedMotion?"checked":""}></div><div class="setting-row"><label for="quality">Full-layout graphics quality</label><select id="quality" data-setting="quality"><option value="high" ${$e.quality==="high"?"selected":""}>Sharper image</option><option value="low" ${$e.quality==="low"?"selected":""}>Battery saver</option></select></div><div class="save-actions">${ie("save",`${yn("save")} Save now`,pt?"":"disabled","secondary")}${ie("export","Export save",!pt&&!Pi?"disabled":"","secondary")}${ie("import","Import save","","secondary")}</div><p class="subtle">Automatic saves stay on this browser and device. Export a save before changing browsers, clearing browsing data, or moving the game. The clock pauses when you leave the tab.</p>${pt?ie("home","Return to title","","text-button wide"):""}`;break;case"help":n="A good night\u2019s work",e="HOW TO PLAY",i=!0,t='<div class="modal-grid"><section><h3>Seven nights to save the motel</h3><p>Finish night seven with enough cash to pay your debt and at least 40 reputation. The debt is paid automatically at the final sunrise. A successful campaign unlocks endless mode.</p><h3>Prepare before opening</h3><p>A ready room needs at least 75 cleanliness and 35 condition. Cleaning uses one supply. Repairs cost $18 and one supply. You can do one task at a time; the team can work alongside you.</p><h3>Match people to rooms</h3><p>Select a waiting guest, then select a ready room. The price must fit their budget. Quality and quiet-room preferences affect happiness. \u201CFind best room\u201D selects the happiest affordable option; confirm the booking in the room panel.</p><h3>Look after your guests</h3><p>Tap rooms with a gold request marker. Resolve the request before its timer expires. Happy guests leave tips and improve reputation at checkout. Ignored requests and low-quality rooms hurt reviews.</p></section><section><h3>Invest carefully</h3><p>Renovations improve quality, restore the room, and raise its rate by $25. The west wing adds four rooms. Staff save you time but earn a nightly wage. Keep enough money for the final debt.</p><h3>Control the clock</h3><p>A night runs from 18:00 to 02:00, then jumps to sunrise. At normal speed, one real second equals three game minutes. Switch between 1\xD7, 3\xD7 and 6\xD7. Menus and decisions pause time. In preparation, time only advances work on rooms.</p><h3>Mouse, touch & keyboard</h3><p>Tap a room or use the Rooms list. Drag the scene to rotate; pinch or scroll to zoom. Camera buttons also work with a keyboard.</p><dl class="shortcuts"><div><dt>Space</dt><dd>Pause / resume</dd></div><div><dt>1 / 2 / 3</dt><dd>Normal / fast / fastest</dd></div><div><dt>R</dt><dd>Room register</dd></div><div><dt>H</dt><dd>This guide</dd></div><div><dt>Escape</dt><dd>Close a menu or room panel</dd></div></dl></section></div><div class="callout">Rooms 104\u2013110 face away from the road. Soundproof windows make every room quiet. Refer travelers elsewhere if you cannot house them; making them wait until they leave costs reputation.</div>';break;case"credits":n="Made for the long road",e="LAST STOP MOTEL \xB7 VERSION "+Di,t=`<p>A complete single-player motel management game, created for Johnny.</p><p>Game design, writing, interface, procedural 3D scenery, and synthesized music were created for this release. Rendering uses Three.js, distributed under the MIT license.</p><p>No accounts, analytics, advertisements, external fonts, or online services. All game assets are included.</p><p class="subtle">Three.js notices and the editable game source are included in the compact download.</p>${ie("achievements","View achievements","","secondary wide")}`;break;case"event":{let r=li[R.event];if(!r){In();return}n=r.title,e=`NIGHT ${R.night} \xB7 SOMETHING AT THE DESK`,s=!1,t=`<p class="story-text">${r.body}</p><div class="event-choices">${r.choices.map((a,o)=>ie("event-choice",`<strong>${a.label}</strong><span>${a.detail}</span>`,`data-id="${o}" ${R.cash<(a.cost||0)||R.supplies+Math.min(0,a.supplies||0)<0?"disabled":""}`,"event-choice")).join("")}</div><p class="subtle">Cash ${ze(R.cash)} \xB7 Supplies ${R.supplies} \xB7 Reputation ${Math.round(R.rep)}</p>`;break}case"report":{let r=R.lastReport;n="Another sunrise.",e=`NIGHT ${R.night} COMPLETE`,s=!1,t=Ou(r)+`<p class="story-text">${r.happiness>=80?"The guests left rested, grateful, and with stories to tell.":r.happiness>=60?"Not every stay was perfect. A little care will make tomorrow better.":"A difficult night. Clean the rooms, take a breath, and make a fresh start."}</p>${ie("next-night",`Prepare for night ${R.night+1}`,"","primary wide")}`;break}case"ending":{let r=R.outcome;if(!r){In();return}n=tt(r.title),e=r.won?"CAMPAIGN COMPLETE":"THE END OF THE ROAD",s=!1,t=`<div class="ending-badge">${r.won?"\u2605":"\u25C7"}</div><p class="story-text">${tt(r.text)}</p><div class="summary-stats"><div><span>Guests welcomed</span><strong>${R.stats.hosted}</strong></div><div><span>Reputation</span><strong>${Math.round(R.rep)}</strong></div><div><span>Final cash</span><strong>${ze(R.cash)}</strong></div><div><span>Final score</span><strong>${Vo(R).toLocaleString()}</strong></div></div>${!r.won&&R.debt>0?`<p class="subtle">Debt due: ${ze(R.debt)} \xB7 Required reputation: 40</p>`:""}${R.lastReport?`<details><summary>Final night\u2019s accounts</summary>${Ou(R.lastReport)}</details>`:""}${r.won?ie("endless","Keep the lights on \xB7 Endless mode","","primary wide"):ie("replay","Try a new campaign","","primary wide")}${ie("ending-export","Export this campaign","","secondary wide")}${ie("confirm-home","Return to title","","text-button wide")}`;break}default:return}an(Ye("modal"),O0(n,e,t,i,s))}function Ou(n){return`<div class="report-lines"><div><span>Guests welcomed</span><strong>${n.guests}</strong></div><div><span>Room income</span><strong>${ze(n.income)}</strong></div><div><span>Tips & other income</span><strong>${ze(n.tips)}</strong></div><div><span>Supplies, work & credit</span><strong>\u2212${ze(n.expenses-n.wages-n.utilities)}</strong></div><div><span>Utilities</span><strong>\u2212${ze(n.utilities)}</strong></div><div><span>Staff wages</span><strong>\u2212${ze(n.wages)}</strong></div><div class="total"><span>Tonight\u2019s net</span><strong>${ze(n.profit)}</strong></div><div><span>Average happiness</span><strong>${n.happiness}/100</strong></div><div><span>Reputation from stays</span><strong>${n.repChange>=0?"+":""}${n.repChange}</strong></div></div>`}function yc(){R.event?Xn("event"):R.phase==="report"?Xn("report"):R.phase==="ending"&&(B0(),Xn("ending"))}function B0(){Rt.best=Math.max(Rt.best,Vo(R));for(let n of R.achievements)Rt.achievements.includes(n)||Rt.achievements.push(n);R.outcome?.won&&!wr&&(wr=!0,Rt.wins++,pn.effect("win")),en()}function k0(){try{let n=pt?Go(R):localStorage.getItem(Sr);if(!n){Nt("There is no saved campaign yet.","warning");return}let e=new Blob([n],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download=`Last-Stop-Motel-Night-${pt?R.night:"Save"}.json`,i.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3),Nt("Save exported. Keep it somewhere safe.","success")}catch{Nt("Could not export the save.","warning")}}function xc(n){ft=Number(n),rn=!1,Li?.select(ft),et()}function z0(n,e){let t=e?.dataset.id;switch(n){case"new":case"replay":Xn("new");break;case"difficulty":No=t,Do();break;case"start-new":P0();break;case"continue":L0();break;case"intro-done":R.seenIntro=!0,In(),en();break;case"open":Gt(Nc(R))&&(dt=!1,Ii=R.phase,et());break;case"pause":dt=!dt,pn.start(),et();break;case"speed":Ri=Ri===1?3:Ri===3?6:1,et();break;case"reception":case"rooms":ft=null,rn=!1,Pn=n,et();break;case"toggle-panel":rn=!rn,rn&&(ft=null),et();break;case"more":Xn("more");break;case"guest":Yt=t,et();break;case"select-room":xc(t);break;case"close-room":ft=null,rn=!1,Pn=R.queue.length?"reception":"rooms",et();break;case"assign-best":{let i=R.queue.find(r=>r.id===t),s=R.rooms.filter(r=>Ut(r)==="Ready"&&Bi(R,r,i).affordable).sort((r,a)=>Bi(R,a,i).happiness-Bi(R,r,i).happiness||Oi(R,a)-Oi(R,r));s.length?(Yt=t,xc(s[0].id),Nt("Best available room selected. Confirm the check-in.")):Nt("No ready room fits this budget. Clean a room or adjust rates.","warning");break}case"check-in":Gt(Dc(R,e.dataset.guest,t))&&(ft=null,Pn="reception",Yt=R.queue[0]?.id||null,pn.effect("success"),!R.queue.length&&$e.autoPause&&(dt=!1),et());break;case"turn-away":Gt(Uc(R,t))&&!R.queue.length&&$e.autoPause&&(dt=!1,et());break;case"clean":case"repair":case"service":Gt(zo(R,t,n))&&R.phase==="prep"&&(dt=!1);break;case"supplies":Gt(Bc(R,Number(t)));break;case"credit-supplies":Gt(kc(R));break;case"rate":Gt(zc(R,t));break;case"upgrade-room":Gt(Vc(R,t));break;case"expand":Gt(Gc(R,t));break;case"buy-upgrade":Gt(Hc(R,t));break;case"hire":Gt(Wc(R,t));break;case"staff-toggle":Gt($c(R,t));break;case"rest":Gt(qc(R));break;case"loan":Gt(Xc(R));break;case"event-choice":Gt(Oc(R,Number(t)))&&(Os=null,In(),en(),et());break;case"next-night":Gt(Yc(R))&&(Ii=R.phase,dt=!1,ft=null,Pn="reception",In(),et(),en());break;case"endless":Gt(Zc(R))&&(Ii=R.phase,dt=!1,ft=null,In(),et(),en());break;case"home":Xn("confirm-new");break;case"confirm-home":en(),pt=!1,In(),Ye("start-screen").hidden=!1,et();break;case"close-modal":In(),et();break;case"save":en(!0);break;case"export":case"ending-export":k0();break;case"import":Ye("import-save").click();break;case"office":case"staff":case"upgrades":case"ledger":case"settings":case"help":case"credits":case"achievements":Xn(n);break;default:n.startsWith("camera-")&&Li?.control(n.slice(7))}}document.addEventListener("click",n=>{let e=n.target.closest("button[data-action]");if(!(!e||e.disabled))try{z0(e.dataset.action,e)}catch(t){console.error(t),Nt("That action could not finish. Your last automatic save is still available.","warning")}});Ye("modal").addEventListener("cancel",n=>{["event","report","ending","intro"].includes(on)?n.preventDefault():(on=null,et())});document.addEventListener("input",n=>{n.target.id==="volume"&&($e.volume=Number(n.target.value),Ye("volume-value").textContent=$e.volume+"%",pn.start(),vc())});document.addEventListener("change",n=>{let e=n.target.dataset.setting;e&&($e[e]=n.target.type==="checkbox"?n.target.checked:n.target.value,pn.start(),vc(),e==="compact"&&(rn=!1,et(),Do(),Ye("compact")?.focus()))});Ye("import-save").addEventListener("change",async n=>{let e=n.target.files[0];if(n.target.value="",!!e){if(e.size>2e6){Nt("That save is too large. Choose a Last Stop Motel JSON save.","warning");return}try{R=ks(await e.text()),pt=!0,dt=R.phase==="night",Ii=R.phase,Os=R.event,wr=R.achievements.includes("finish"),ft=null,Yt=null;for(let i of R.achievements)Ui.some(s=>s.id===i)&&!Rt.achievements.includes(i)&&Rt.achievements.push(i);In(),Ye("start-screen").hidden=!0,en(),et(),yc(),Nt("Campaign imported successfully.","success")}catch(t){Nt(t.message||"That save could not be imported.","warning")}}});document.addEventListener("keydown",n=>{if(!["INPUT","SELECT","TEXTAREA","BUTTON"].includes(document.activeElement?.tagName)&&!(n.ctrlKey||n.metaKey||n.altKey)){if(n.key==="Escape"&&!on){ft=null,et();return}if(!on){if(n.key.toLowerCase()==="h"){Xn("help");return}pt&&(n.code==="Space"&&(n.preventDefault(),dt=!dt,et()),["1","2","3"].includes(n.key)&&(Ri={1:1,2:3,3:6}[n.key],et()),n.key.toLowerCase()==="r"&&(Pn="rooms",et()))}}});document.addEventListener("visibilitychange",()=>{document.hidden&&(en(),pn.suspend(),pt&&R.phase==="night"&&(dt=!0,et()))});window.addEventListener("pagehide",()=>en());function $u(){document.body.classList.add("scene-unavailable"),Li=null,Ye("scene-error").hidden=!1,Ye("scene-error").innerHTML="<strong>The 3D view is unavailable on this browser.</strong><span>You can still play every part of the game with the Rooms list. Try a browser with WebGL 2 enabled for the motel view.</span>",pt&&(Pn="rooms",et())}window.addEventListener("motel-context-lost",$u);try{Li=new Io(Ye("world"),n=>{pt&&!on&&xc(n)},$e)}catch(n){console.warn("Three.js scene unavailable:",n),$u()}vc();et();var Bu=performance.now();function qu(n){let e=Math.min((n-Bu)/1e3,.12);if(Bu=n,!document.hidden){if(pt&&!dt&&!on){let t=R.queue.length;Fc(R,e*3*Ri),$e.autoPause&&R.queue.length>t&&(dt=!0,rn=!1),R.event&&R.event!==Os&&(Os=R.event,Xn("event"),en()),R.phase!==Ii&&(Ii=R.phase,et(),yc(),en())}n-gc>=1e3/($e.compact?30:60)&&(Li?.update(R,Math.min((n-gc)/1e3,.12)),gc=n),pt&&n-Du>($e.compact?650:400)&&(et(),Du=n),pt&&n-Uu>8e3&&(en(),Uu=n)}requestAnimationFrame(qu)}requestAnimationFrame(qu);function V0(){an(Ye("start-screen"),`<div class="start-copy"><div class="route-tag"><span>ROUTE</span><strong>86</strong></div><p class="eyebrow">A ROADSIDE MANAGEMENT GAME</p><h1>Last Stop<br><em>Motel.</em></h1><p class="start-desc">Seven nights. One last chance.<br>Keep a light on for the people passing through.</p><div class="start-actions">${Pi?ie("continue","Continue your stay","","primary wide"):""}${ie("new","New campaign","",Pi?"secondary wide":"primary wide")}</div><p class="start-meta">THREE DIFFICULTIES <span>\xB7</span> OFFLINE PLAY <span>\xB7</span> ENDLESS MODE</p><div class="start-links">${ie("help","How to play")}${ie("settings","Settings")}${ie("credits","Credits")}</div><p class="version">VERSION ${Di} \xB7 LAST STOP MOTEL</p></div><div class="start-postcard"><span>TONIGHT\u2019S FORECAST</span><strong>Clear skies.<br>A few late arrivals.</strong><small>There\u2019s always someone<br>looking for a place to stop.</small></div>`)}function G0(){if(document.body.classList.toggle("playing",pt),!pt){Xu();return}let n=R.rooms.filter(r=>r.open),e=n.filter(r=>r.guest).length,t=n.filter(r=>r.request).length,i=n.filter(r=>Ut(r)==="Ready").length,s=R.rooms.some(r=>r.job);an(Ye("topbar"),`<button class="brand" data-action="home" aria-label="Save and return to title"><span>LAST STOP</span><strong>MOTEL</strong></button><div class="night-clock"><span class="eyebrow">${R.endless?"ENDLESS \xB7 ":""}NIGHT ${R.night}${R.endless?"":" / 7"}</span><strong>${Gu()}</strong><div class="time-track"><i style="width:${R.minute/480*100}%"></i></div></div><div class="top-stat cash-stat"><span>CASH ON HAND</span><strong>${ze(R.cash)}</strong></div><div class="top-stat"><span>REPUTATION</span><strong>${Math.round(R.rep)}<small>/100</small></strong></div><div class="top-stat occupancy-stat"><span>ROOMS TAKEN</span><strong>${e}<small>/${n.length}</small></strong></div><div class="top-stat supplies-stat"><span>SUPPLIES</span><strong>${R.supplies}</strong></div><div class="time-controls">${R.phase==="prep"?ie("open",s?"Finishing work\u2026":"Open for the night",s?"disabled":"","primary"):ie("pause",yn(dt?"play":"pause"),`aria-label="${dt?"Resume":"Pause"} game" aria-pressed="${dt}"`,"square")} ${R.phase==="night"?ie("speed",`${Ri}\xD7`,'aria-label="Change game speed"',"speed-button"):""}${ie("settings",yn("settings"),'aria-label="Settings"',"square")}</div>`),Pn==="rooms"?Hu():Yu(),Zu(),an(Ye("toolbar"),`<div class="dock-main">${[["reception","desk","Reception",R.queue.length],["rooms","room","Rooms",t],["office","office","Office",0],["staff","staff","Team",0],["upgrades","upgrade","Improve",0],["ledger","ledger","Ledger",0]].map(([r,a,o,c])=>ie(r,`${yn(a)}<span>${o}</span>${c?`<b class="nav-count">${c}</b>`:""}`,"",Pn===r&&!on?"dock-item active":"dock-item")).join("")}</div><div class="dock-end"><span class="weather">${yn("sun")}${Fn(R).weather}</span>${ie("help",yn("help"),'aria-label="How to play"',"square")}</div>`),an(Ye("world-controls"),`<div class="camera-buttons">${ie("camera-left","\u21B6",'aria-label="Rotate view left"')}${ie("camera-right","\u21B7",'aria-label="Rotate view right"')}${ie("camera-out","\u2212",'aria-label="Zoom out"')}${ie("camera-in","+",'aria-label="Zoom in"')}${ie("camera-reset","Reset view")}</div><span>${dt?"PAUSED \xB7 RESUME WHEN READY":R.phase==="prep"?"Prepare your rooms, then open the office.":"Tap a room to manage it. Drag to look around."}</span>`),Li?.select(ft);for(let r of R.notifications.splice(0))if(r.type==="achievement"){let a=r.message.replace("Achievement: ",""),o=Ui.find(c=>c.id===a);o&&Nt(`Achievement unlocked \xB7 ${o.name}`,"achievement"),Rt.achievements.includes(a)||Rt.achievements.push(a)}else Nt(r.message,r.type),r.message.includes("waiting")&&pn.effect("bell")}function H0(){let n=!R.rooms.some(t=>t.open&&!t.guest);R.queue.find(t=>t.id===Yt)||(Yt=R.queue[0]?.id||null),an(Ye("left-panel"),`<div class="panel-heading"><div><p class="eyebrow">FRONT DESK</p><h2>${R.phase==="prep"?"Before the rush":"Late arrivals"}</h2></div><span class="counter">${R.queue.length}</span></div>${R.phase==="prep"?`<div class="night-note"><span class="chapter">CHAPTER ${Math.min(R.night,7)}</span><h3>${tt(Fn(R).title)}</h3><p>${tt(Fn(R).blurb)}</p></div><div class="prep-check"><h3>Opening checklist</h3><div><span>Rooms ready</span><strong>${R.rooms.filter(t=>Ut(t)==="Ready").length} / ${R.rooms.filter(t=>t.open).length}</strong></div><div><span>Linen & supplies</span><strong>${R.supplies}</strong></div><div><span>Team on shift</span><strong>${1+R.staff.filter(t=>t.active).length}</strong></div><div><span>Due after night seven</span><strong>${ze(R.debt)}</strong></div></div><p class="panel-tip">Select a room to clean, repair, or renovate it. Staff work automatically while time is running.</p>`:R.queue.length?`<div class="guest-list">${R.queue.map(t=>`<article class="guest-card ${t.id===Yt?"selected":""}"><button class="guest-select" data-action="guest" data-id="${tt(t.id)}" aria-pressed="${t.id===Yt}"><div class="guest-top"><span class="guest-avatar">${tt(t.icon)}</span><div><strong>${tt(t.name)}</strong><span>${tt(t.title)}</span></div></div><p>\u201C${tt(t.text)}\u201D</p><div class="guest-needs"><span>Budget <b>${ze(t.budget)}</b></span><span>${t.comfort?"Quality "+t.comfort+" preferred":"Any quality"}${t.quiet?" \xB7 Quiet":""}</span></div><div class="patience" aria-label="Patience remaining ${Math.round((1-t.wait/t.patience)*100)} percent"><i style="width:${je(1-t.wait/t.patience,0,1)*100}%"></i></div></button>${t.id===Yt?`<div class="guest-actions">${ie("assign-best","Find best room",`data-id="${tt(t.id)}"`,"primary compact")}${ie("turn-away","Refer elsewhere",`data-id="${tt(t.id)}"`,"text-button")}</div>`:""}</article>`).join("")}</div>`:`<div class="desk-empty"><span class="empty-symbol">${yn("desk")}</span><h3>${n?"No vacancy. Nicely done.":"The road is quiet."}</h3><p>${n?"Look after your guests and handle any requests before sunrise.":"Travelers will arrive throughout the night. Use this time to look after the rooms."}</p>${R.arrivals.length?`<span class="subtle">${R.arrivals.length} more traveler${R.arrivals.length===1?"":"s"} expected</span>`:'<span class="subtle">No more arrivals tonight</span>'}</div>`}<div class="panel-footer"><span>YOUR NEXT TASK</span><strong>${R.playerJob?`${Ut(R.rooms[R.playerJob-1])} room ${R.rooms[R.playerJob-1].number}`:R.rooms.some(t=>t.request)?"A guest needs a hand.":R.queue.length?"Choose a traveler and a ready room.":"Keep an eye on the vacancy light."}</strong></div>`)}function W0(){let n=Ye("room-panel");if(n.hidden=ft===null,ft===null)return;let e=R.rooms[ft-1],t=R.queue.find(s=>s.id===Yt),i=t?Bi(R,e,t):null;an(n,`<div class="panel-heading room-heading"><div><p class="eyebrow">${e.quiet?"COURTYARD ROOM":"ROADSIDE ROOM"}</p><h2>Room ${e.number}</h2></div>${ie("close-room",yn("close"),'aria-label="Close room details"',"square")}</div><div class="room-detail"><div class="room-status"><span class="status-dot status-${Wu(e)}"></span><strong>${Ut(e)}</strong><span>${e.open?"Quality "+e.quality+"/3":"West wing"}</span></div>${e.open?`${Lo("Cleanliness",e.clean,e.clean<75?"coral":"")}${Lo("Condition",e.condition,e.condition<55?"coral":"")}<div class="room-rate"><span>Nightly rate</span><strong>${ze(Oi(R,e))}</strong></div>${e.guest?`<div class="occupant"><span class="eyebrow">STAYING TONIGHT</span><strong>${tt(e.guest.name)}</strong><span>${tt(e.guest.title)}</span>${Lo("Guest happiness",e.guest.happiness,e.guest.happiness<65?"coral":"")}</div>`:""}${e.request?`<div class="request-card"><span class="eyebrow">GUEST REQUEST</span><h3>${tt(e.request.name)}</h3><p>\u201C${tt(e.request.text)}\u201D</p>${ie("service",`Help guest${e.request.supplies?" \xB7 1 supply":""}`,`data-id="${e.id}" ${e.job||R.playerJob?"disabled":""}`,"primary wide")}<small>${Math.ceil(e.request.remaining)} game minutes left</small></div>`:""}${e.job?`<div class="job-card"><span>${e.job.worker==="player"?"You":bn.find(s=>s.id===e.job.worker)?.name} \xB7 ${Ut(e)}</span><div class="meter-track"><i style="width:${(1-e.job.remaining/e.job.total)*100}%"></i></div><small>${Math.ceil(e.job.remaining)} game minutes remaining</small></div>`:`<div class="room-actions">${!e.guest&&e.clean<100?ie("clean","Clean \xB7 1 supply",`data-id="${e.id}" ${R.playerJob?"disabled":""}`,"secondary wide"):""}${e.condition<100?ie("repair","Repair \xB7 $18 + 1 supply",`data-id="${e.id}" ${R.playerJob?"disabled":""}`,"secondary wide"):""}</div>`}${t&&Ut(e)==="Ready"?`<div class="booking"><span class="eyebrow">CHECK IN ${tt(t.name.split(" ")[0].toUpperCase())}</span><p>Expected happiness <strong>${i.happiness}/100</strong></p>${ie("check-in",i.affordable?`Check in \xB7 ${ze(i.price)}`:"Above guest\u2019s budget",`data-id="${e.id}" data-guest="${tt(t.id)}" ${i.affordable?"":"disabled"}`,"primary wide")}</div>`:""}${R.phase==="prep"&&e.quality<3?`<div class="renovation"><span class="eyebrow">MAKE IT A LITTLE NICER</span><p>Quality ${e.quality+1} \xB7 +$25 nightly rate<br>Fresh linens and full repairs included.</p>${ie("upgrade-room",`Renovate \xB7 ${ze([130,190,270][e.quality])}`,`data-id="${e.id}" ${e.job?"disabled":""}`,"secondary wide")}</div>`:""}`:`<p class="description">A room waiting for its second chance. Reopen it to welcome another guest each night.</p>${ie("expand",`Reopen \xB7 ${ze(280+(R.rooms.filter(s=>s.open).length-6)*60)}`,`data-id="${e.id}" ${R.phase!=="prep"?"disabled":""}`,"primary wide")}<p class="subtle">Available between nights.</p>`}</div>`)}function Xu(){return $e.compact?N0():V0()}function Yu(){return $e.compact?U0():H0()}function Zu(){return $e.compact?F0():W0()}function et(){return document.body.classList.toggle("mobile-compact",$e.compact),document.body.classList.toggle("room-open",pt&&ft!==null),document.body.classList.toggle("panel-collapsed",rn),$e.compact?D0():G0()}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
