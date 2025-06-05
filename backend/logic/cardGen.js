import rolesData from '../data/roles.json' assert { type: 'json' };

function randomFromArray(arr) {      //  picks a random item from any array. like martial status, and all
  return arr[Math.floor(Math.random() * arr.length)];
}


function generateCard(fullname, username, roles) {
  const selectedRoles = roles.map(role => rolesData[role] || { summary: "Mysterious persona." });     
// maps over each role sent by the user.
//	for each role, it fetches the corresponding object from roles.json.
//	if a role doesn’t exist in roles.json,it gives a default summary.


const summary = selectedRoles
  .map(r => Array.isArray(r.summary) ? randomFromArray(r.summary) : r.summary)
  .join(' ');  	// extracts just the .summary text from each role object and joins em in a string to make a whole parah maybe

  const fakeBirthday = `${Math.floor(Math.random() * 28 + 1)}-${Math.floor(Math.random() * 12 + 1)}-${Math.floor(Math.random() * 30 + 1970)}`;
  const maritalStatus = randomFromArray([
    'Single',
    'Married',
    'Divorced',
    'It’s Complicated',
    'Taken by a Bug',
    'Married to the Terminal',
    'Engaged to the Cloud',
    '404: Status Not Found',
    'Rebooting Relationship',
    'Single But Caffeinated',
    'Git Committed',
    'In a Relationship with Open Source',
    'Paired via Bluetooth',
    'Emotionally Forked',
    'Wedlocked in a Merge Conflict',
    'Loves in Alpha',
    'In a Polyfill',
    'Beta Testing Relationships',
    'Patch Pending',
    'Bound by Dependencies',
    'Unmarried but Authenticated',
    'Single-Threaded',
    'Married in Production',
    'Hardcoded Heartbreak',
    'Shipped and Deployed',
    'On Cooldown',
    'Compiling Feelings',
    'Hooked on Someone',
    'Under Maintenance',
    'Waiting for Review'
  ]);

  return {
    fullname,
    username,
    birthday: fakeBirthday,
    maritalStatus,
    summary,
    career: `Known for excellence in ${roles.join(', ')}. Rumored to have worked with secret guilds.`,
    xp: `${Math.floor(Math.random() * 10 + 1)} years of mythical experience.`,
  };
}

export default generateCard;