const { createConnection } = require("../helpers/db");

const getLastIds = async () => {
  const connection = await createConnection();

  const queries = {
    maxAddressId: "SELECT MAX(address_id) as maxAddressId FROM cid_addresses",
    maxCidId: "SELECT MAX(cid_id) as maxCidId FROM cid_addresses",
    maxEmailId: "SELECT MAX(email_id) as maxEmailId FROM cid_emails",
    maxSchoolId: "SELECT MAX(school_id) as maxSchoolId FROM idex_schools",
    maxProMembershipId:
      "SELECT MAX(pro_membership_id) as maxProMembershipId FROM cid_pro_assoc_memberships",
    maxCeuId: "SELECT MAX(ceu_id) as maxCeuId FROM cid_ceus",
    maxNationalExamId: "SELECT MAX(national_exam_id) as maxNationalExamId FROM cid_national_exams",
    maxExperienceId: "SELECT MAX(experience_id) as maxExperienceId FROM idex_experience",
    maxIdexOtherId: "SELECT MAX(idex_other_id) as maxIdexOtherId FROM idex_other",
    maxPhoneId: "SELECT MAX(phone_id) as maxPhoneId FROM cid_phones",
  };

  const results = {};

  for (const [key, query] of Object.entries(queries)) {
    console.log(`Executing query for ${key}: ${query}`);
    if (!query) {
      console.error(`Query for ${key} is empty!`);
      continue;
    }
    try {
      const [rows] = await connection.execute(query);
      if (rows.length > 0) {
        const columnKey = Object.keys(rows[0])[0];
        results[key] = rows[0][columnKey];
      } else {
        results[key] = null;
      }
    } catch (err) {
      console.error(`Error executing query for ${key}: ${err.message}`);
      throw err;
    }
  }

  await connection.end(); // Ensure the connection is closed after execution

  return results;
};

module.exports = getLastIds;
