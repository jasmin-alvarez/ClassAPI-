//worked with house hayden and alumni andy 


const express = require("express");
const app = express();
const PORT = 2021;
const cors = require("cors");
const http = require("http");

// app.use(cors())
app.use(express.static('public'))

let houses = [{
        houseName: 'cass',
        houseDetails: {
            origin: "Melnea Cass",
            cohort: [
                "Juan",
                "Tamika",
                "Khorally",
                "Kev",
                "Jerry",
                "Rodas",
                "Miggie",
                "Milan"
            ]
        }
    },
    {
        houseName: 'gardner',
        houseDetails: {
            origin: "Elizabeth Gardner",
            cohort: [
                "Asianna", "Dashlin", "Wade", "Brian", "Ziya", "Tanecia", "Julie"

            ]
        }
    },
    {
        houseName: 'hayden',
        houseDetails: {
            origin: "Lewis Hayden",
            cohort: [
                "Kiany",
                "Guthemberg",
                "Kevin C.",
                "Davida",
                "Alief",
                "Jasmin",
                "Eden"
            ]
        }
    },
    {
        houseName: 'moses',
        houseDetails: {
            origin: "Robert Moses",
            cohort: ["Jey", "Anvy", "Zrybea", "V", "Zuri", "Danstan", "Monica"]


        }
    }
];
app.get("/", (request, response) => {
    console.log('HELLO')
    response.sendFile(__dirname + "/index.html");
});



app.get('/api/houses/:housesName', (request, response) => {
    const housesName = request.params.housesName.toLowerCase()
    for (i = 0; i < houses.length; i++) {
        // console.log(houses[i].houseName === housesName)
        if (houses[i].houseName === housesName) {
            houses[i].houseDetails
            response.json(houses[i].houseDetails)
            // console.log(houses[i].houseDetails)
        }

    }
    // console.log(housesName)
    // console.log(houses)
    // if (houses[housesName]) {
    //     response.json(houses[housesName])
    // } else {
    //     response.json(houses)
    // }

})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
// if (houses[housesName]) {
//     response.json(houses[housesName])
// } else {
//     response.json(houses)
// }
// let houses = {
//     Cass: {
//       origin: "Melnea Cass",
//       cohort: {
//         "2021":{
//           A: [
//             "Juan",
//             "Tamika",
//             "Khorally",
//             "Kev",
//             "Jerry",
//             "Rodas",
//             "Miggie",
//             "Milan"
//           ]
//         }
//       }
//     },
//     Gardner: {
//       origin: "Elizabeth Gardner",
//       cohort: {
//         "2021": {
//           A: ["Asianna", "Dashlin", "Wade", "Brian", "Ziya", "Tanecia", "Julie"]
//         }
//       }
//     },
//     Hayden: {
//       origin: "Lewis Hayden",
//       cohort: {
//         "2021": {
//           A: [
//             "Kiany",
//             "Guthemberg",
//             "Kevin C.",
//             "Davida",
//             "Alief",
//             "Jasmin",
//             "Eden"
//           ]
//         }
//       }
//     },
//     Moses: {
//       origin: "Robert Moses",
//       cohort: {
//         "2021": {
//           A: ["Jey", "Anvy", "Zrybea", "V", "Zuri", "Danstan", "Monica"]
//         }
//       }
//     }
//   };