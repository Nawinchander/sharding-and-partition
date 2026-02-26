// Example concept
async function getUserProfile(userId) {
  const basicInfo = await db.query("SELECT name, email FROM users WHERE id = ?", [userId]);
  const securityInfo = await db.query("SELECT password FROM user_security WHERE user_id = ?", [userId]);

  return { ...basicInfo[0], ...securityInfo[0] };
}