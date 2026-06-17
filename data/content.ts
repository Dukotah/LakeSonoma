/**
 * Long-form page content mirrored verbatim from lakesonoma.com (verified).
 * Kept separate from marina.ts (products) and site.ts (business basics).
 * Builders read from here so copy stays centralized and editable.
 */

/* -------------------------------------------------------------- CONTACT */
export const CONTACT = {
  message:
    "Please email, call or fill out the adjacent form if you wish to contact Lake Sonoma Marina. We look forward to speaking with you. Thanks!",
  directionsUrl: "https://goo.gl/maps/tUt9sKYpwy9Z7yJm8",
  formFields: [
    { name: "firstName", label: "First Name", type: "text", required: true },
    { name: "lastName", label: "Last Name", type: "text", required: true },
    { name: "phone", label: "Phone Number", type: "tel", required: true },
    { name: "email", label: "Email Address", type: "email", required: true },
    { name: "message", label: "How can we help today?", type: "textarea", required: true },
  ],
};

/* ----------------------------------------------- READ ON SONOMA (rewards) */
export const READ_ON_SONOMA = {
  heading: "Read On Sonoma",
  intro:
    "Congratulations on completing your Read on Sonoma goals! As a reward for your hard work and dedication to reading, Lake Sonoma Marina is proud to host you for a day of fun on the water.",
  tiers: [
    {
      level: "Level 1",
      name: "The Explorer Reward",
      description: "A 2-hour paddle rental — choose a kayak, stand-up paddleboard, or canoe.",
    },
    {
      level: "Level 2",
      name: "The Captain's Reward",
      description: "A 2-hour premium pontoon rental accommodating up to 10 people.",
    },
  ],
  redemptionNote:
    "Rewards are redeemed by form: parent/driver name, email, phone, student info, school/library branch, preferred reward tier, requested visit time, and date of visit (weekdays only, excluding major holidays).",
};

/* ------------------------------------------------------- POLICIES & RULES */
export interface PolicyGroup {
  title: string;
  intro?: string;
  items: string[];
}

export const POLICY_GROUPS: PolicyGroup[] = [
  {
    title: "Slip Holder Policies",
    items: [
      "Smoking at the Marina is prohibited.",
      "Fishing from the docks is prohibited.",
      "Swimming off of the dock or launch ramp is prohibited.",
      "Feeding wildlife of any type is prohibited.",
      "Charcoal BBQ-type cooking is allowed only in authorized areas. Propane BBQ cooking is allowed on boats.",
      "Slip holders are asked to participate in dock security whenever present.",
      "Motorized vehicles, bicycles, roller skates, skateboards & similar items must not be ridden on the docks, walkways, sidewalks or bridges (bicycles may be walked in these areas).",
      "No live-aboard allowed on Lake Sonoma.",
      "Members are responsible for their guests' safety, actions and adherence to all Rules & Regulations.",
      "Children are defined as dependents under the age of 18; slip holders are responsible for their children.",
      "Children under the age of 12 must be accompanied by an adult at all times.",
    ],
  },
  {
    title: "Membership",
    intro:
      "A one-time, non-transferable slip membership fee is charged to all slip holders, unless a Lifetime Membership has been purchased. Rates are subject to change without notice.",
    items: [
      "All boat storage fees are charged in full; a monthly billing option is available for an additional billing fee.",
      "Monthly slip rental charges are billed in advance. All payments are due prior to the 10th of each month.",
      "Accounts not paid in full incur a late fee of 1.5% of the amount due. Accounts 45+ days overdue are subject to termination, collections, or lock-up.",
      "Use of any berth other than the one assigned to you is prohibited; boats found out of place will be moved without notice.",
      "Lifetime Membership: exemption from any future membership fees for life. Specific to the individual, not the boat, and non-transferable if the boat is sold.",
      "Annual Membership: minimum of 12 consecutive months; requires a Lifetime Membership. Includes a 10% store discount and lakeside slip-holder / dry-storage parking.",
      "Seasonal Membership: minimum of 6 consecutive months. Includes a 10% store discount and lakeside parking. Returning members have first right to their prior slip.",
      "Short-Term (month-to-month) Membership: paid in full upon signing; placement based on availability; no store discount, no parking/membership passes (a temporary parking pass is issued on the first day).",
    ],
  },
  {
    title: "Member Passes",
    items: [
      "Each member is issued one Parking Pass and one Membership Pass per slip, valid only for the term of the agreement.",
      "Additional passes can be purchased with manager authorization for $20 per pass.",
      "Parking passes must be displayed in the vehicle while on Lake Sonoma Resort Area property, or a Day-Use ticket may be issued.",
      "The parking pass allows unlimited use of the private launch ramp while the agreement is valid. One car per slip is included; additional vehicles are charged a day-use fee.",
    ],
  },
  {
    title: "Dock Use",
    items: [
      "Personal gear left on the dock or head walks (other than as authorized by the berthing agreement) will be removed at the owner's expense.",
      "Plastic tarps are prohibited; all boat covers must be canvas or other marine-approved material.",
      "Boarding steps may be no more than ½ the width of the dock finger, must be lightweight, and are subject to approval.",
      "Paint, cleaning supplies, fuel and other volatile items may not be stored on the docks — store them on the boat.",
      "Fueling or fuel transfers in the Marina are prohibited by law; all fueling must be done at the fuel docks.",
    ],
  },
  {
    title: "Boat Maintenance",
    items: [
      "Slip holders may perform maintenance and repairs dockside; large-scale work is restricted to the boat service area.",
      "Outside contractors require Marina-management approval and may work only 8:30am–5:30pm, Monday–Friday, unless authorized in advance.",
      "All outside contractors must carry insurance; work performed by contractors is the member's responsibility.",
      "Pump-out facilities are at the Marina. Emptying portable toilets in marina restrooms is prohibited and subject to a fine.",
      "In-water hull cleaning is prohibited — only hand washing is authorized. Cleaning products must be phosphate-free and biodegradable; no ammonia, chlorinated solvents, petroleum distillates, or lye.",
    ],
  },
  {
    title: "Registration & Insurance",
    items: [
      "Registration must be kept current or members may receive a citation from the Sheriff.",
      "Proof of insurance as required by the Berthing Agreement must be provided at initial berth rental and at each insurance renewal.",
    ],
  },
  {
    title: "Quiet Hours, Restrooms & Trash",
    items: [
      "Quiet hours are 10:00pm to 8:30am. Loud or disturbing noise will not be tolerated at any time.",
      "Restrooms are for members and guests; sinks are not for washing clothes, dishes, or personal property. Dispose of feminine products in the trash, not the septic system.",
      "Trash containers are provided throughout the marina; no household dumping. Batteries, paint, petroleum products and toxic chemicals must be disposed of as required by law and removed from Marina property by the member.",
    ],
  },
  {
    title: "Environmental Best Management Practices",
    intro:
      "Lake Sonoma Marina follows best management practices to protect the lake. Highlights below; ask the Marina office for full guidance.",
    items: [
      "Fuel containers should be filled on land; avoid overfilling tanks and use petroleum-absorption pads while fueling.",
      "Do not pump oily or sheened bilge water; use oil-absorbing materials and dispose of them per petroleum-disposal guidelines.",
      "Report oil and fuel spills to the Marina Office and the National Response Center immediately.",
      "Perform only small topside maintenance in the slip; drape tarps to catch waste and use phosphate-free, biodegradable cleaners.",
      "Wait 90 days after applying new bottom paint before underwater cleaning; use non-abrasive methods and environmentally friendly services.",
      "Return all trash to shore for disposal; never dump plastic or trash in the water. There is no on-site fish cleaning — dispose of unwanted bait offshore.",
      "Use marine sanitation holding tanks properly; never pump out within three nautical miles of land. Dispose of used oil, filters and household hazardous waste at approved collection stations.",
    ],
  },
];
