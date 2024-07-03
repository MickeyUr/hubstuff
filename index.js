// const Hubstaff from '@app-masters/hubstaff-node-client';

const Hubstaff = require("@app-masters/hubstaff-node-client");

const refreshTokenCallback = (accessToken, refreshToken) => {
    console.log("A new token has received");
    console.log("access token", accessToken);
    console.log("refresh token", refreshToken);
};

//  const tokenObj = Hubstaff.getAccessToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImRlZmF1bHQifQ.eyJqdGkiOiJVRktlZzRZQyIsImlzcyI6Imh0dHBzOi8vYWNjb3VudC5odWJzdGFmZi5jb20iLCJleHAiOjE3Mjc4MTY4ODQsImlhdCI6MTcyMDA0MDg4NCwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBodWJzdGFmZjpyZWFkIGh1YnN0YWZmOndyaXRlIn0.pRQ1E0FHrDotxgU5GEXwkHAVS89-Qm18SNSYL8LsXLFO2pFveqhjRL_ZnpYsHiZbVxId4hxEJrEuLfOiaw7MD1CPFFJHAi6rweU_WDOEHv5yBHVJTc1lX8DslGIUj0k4VxGG9RmLunj7ceXPaRK6dBJzNTYbFiQkQSJTlObrPbFfCZctPxyTXH_vO3MePCSg2QBdgMGX2Uc9aXn2rJ5YispTr2PX2dHmjAbAttlZRQiDUVmqeEQN0J-U-p4r-llz8i6pfeHPvwDjYv6A9hX8lbv3C50E-j9Rfth4dPTTRiUG7Q_IF2G7cnZ-rWDnqJWPXd5V6F87qLhaH5dFpl5r3w');
// tokenObj.then(async (tokenObj) => {
//     console.log(tokenObj)
// })
// console.log(tokenObj); // Output: 'your-access-token'
// console.log(tokenObj.accessToken); // Output: 'your-access-token'
// console.log(tokenObj.refreshToken); // Output: 'your-refresh-token'

const hubstaff = new Hubstaff({ accessToken: "" +
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImRlZmF1bHQifQ.eyJqdGkiOiJRMEdCa3FLSkxRPT0iLCJpc3MiOiJodHRwczovL2FjY291bnQuaHVic3RhZmYuY29tIiwiZXhwIjoxNzIwMzAxODIxLCJpYXQiOjE3MjAwNDI2MjEsInNjb3BlIjoiaHVic3RhZmY6d3JpdGUgaHVic3RhZmY6cmVhZCIsImF1ZCI6InN3YWdnZXJVSSIsInN1YiI6IlBqS0ZxUjJYcG1kbTJ5aXhUNWlfWHBTWEtyS2EzbEdnMDN5UExmeEJ3dzYxLTR4bTE4T2NEN1ZkNzU4TWpxc1phX3FNTWgwTDZydjQ0dlRFc2R0ZjVBPT0ifQ.ShKsuaVwNmpoS2gaixTaae2JxIPgeshk-FgmeTCKu4TKSe4rRYOah6HQJovVCkcz1TtYCvIww4uRNRUqxWs7KwOTrSW3jR4U9YAe7lKIE5iq-ZjIw9R1r4J67ZsUAykmo8jG6mOsbJ6p1KTy8BQk9CKBsMyCijx1Z8OPySLiqCqmX7sk4B8Lsccrz6B0OkCCzRKrkILgIMxZEq4KjOzM213n67_GmD-1lFJTwI7WTopc7OI-NDNiOw-6Ak8dwKqFJ0Xn5StEUo5GM6MglD9Mt5yeFiTCcInQqS5Pu1rqL4R8KBVobZAl1jGpDMmNKMGo4nwvjor2G1kXYv8EmiGx7w", refreshToken: "your-refresh-token" }, refreshTokenCallback);
//
// // Get organizations
const orgs = hubstaff.getOrganizations();

orgs.then(async (organizations) => {
    console.log(organizations)
})

// /* Output:
// [
//   {
//     id: 55426,
//     name: 'App Masters',
//     status: 'active',
//     created_at: '2017-06-05T12:21:08.432670Z',
//     updated_at: '2020-12-07T17:00:04.712558Z',
//     metadata: {},
//     invite_url: 'https://app.hubstaff.com/organizations/invite/exfImdk6Skl213g'
//   }
// ]
// */
// const orgs=[{id:585030,}]
// // Get projects
// const projects = hubstaff.getProjects(orgs[0].id);
const projects = hubstaff.getProjects(585030);
// console.log(projects); // Output: Project[]
projects.then(async (projects) => {
        console.log(projects)
    })
//
// // Get tasks
// const tasks = hubstaff.getTasks(orgs[0].id);
// // console.log(tasks); // Output: Task[]
// tasks.then(async (Tasks) => {
//     console.log(Tasks)
// })
//
// // Get activities
// const activities = hubstaff.getActivities(orgs[0].id);
// // console.log(activities); // Output: Activity[]
// activities.then(async (activities) => {
//     console.log(activities)
// })