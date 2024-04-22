export const InteractWithWLClick = async (address) => {
  // Array to store the whitelist levels found
  const whitelistLevels = [];

  // Loop through each whitelist level
  for (let i = 1; i <= 7; i++) {
    // Check if the address is in the corresponding whitelist file
    const whitelistFile = `Lvl_${i}_Allowlist.txt`;
    const isWhitelisted = await checkWhitelist(whitelistFile, address);

    // If whitelisted, add the level to the whitelistLevels array
    if (isWhitelisted) {
      whitelistLevels.push(i);
    }
  }

  // If no whitelist levels found, return "NOT WHITELISTED"
  if (whitelistLevels.length === 0) {
    return "NOT WHITELISTED";
  }

  // If whitelisted, return the levels found
  const levelText = whitelistLevels.map(level => `LEVEL ${level}`).join(', ');
  return `${levelText} WHITELISTED WOO HOO`;
};

// Function to check if the address is in the whitelist file
const checkWhitelist = async (whitelistFile, address) => {
  try {
    // Fetch the whitelist file content
    const response = await fetch(`./${whitelistFile}`);
    const whitelistContent = await response.text();

    // Check if the address is in the whitelist content
    return whitelistContent.includes(address);
  } catch (error) {
    console.error("Error fetching whitelist file:", error);
    return false;
  }
};
