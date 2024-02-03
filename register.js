const { execSync } = require('child_process');

exports.handler = async function(event, context) {
    try {
        const { name, phone, bloodGroup, location } = JSON.parse(event.body);
        const timestamp = new Date().toISOString();

        // Commit registration data to Git repository
        execSync(`git add -A && git commit -m "New registration (${timestamp}): ${name}"`);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Registration successful!" })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Error registering user" })
        };
    }
};
