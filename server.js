const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const allowCrossDomain = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    // console.log("Request received");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Cache-Control", "no-cache");
    next();
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(allowCrossDomain);


const PROP = require("./property-loader");
const SlideInfo = require("./SlideInfo");

app.use(express.static(PROP.PRESENTATIONROOT));

isValid = (slideNum) => {
    //verify if slide is within range
    return (slideNum >= 1) && (slideNum <= PROP.TOTALSLIDES);
}

app.get("/api/slide/:id", (req, res) => {
    let slideNum = +req.params.id;
    if (isValid(slideNum)) {
        let slideInfo = new SlideInfo(slideNum);
        res.status(200);
        res.send(slideInfo.SlideResponse);
    }
    else {
        res.status(404);
        res.send();
    }

})

app.listen(PROP.PORT, (err) => {
    if (err) console.log("Error in starting the server");
    else console.log("Server listening on port " + PROP.PORT);
})