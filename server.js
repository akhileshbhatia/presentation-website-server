const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const allowCrossDomain = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("Request received");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Cache-Control", "no-cache");
    next();
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(allowCrossDomain);

const prop = require("./property-loader");
const SlideInfo = require("./SlideInfo");


isValidSlideNum = (slideNum) => {
    let isValid = false;
    if (slideNum != undefined) {
        let slideNumInt = +slideNum;
        //1st expression i.e. slideNumInt != 0 returns false if slideNum contains only spaces or empty string
        //2nd is the regExp to check if its a valid integer
        //3rd is to verify if the slide number is within the range of available slides
        //4th and 5th verify if the slide is within valid range of slide numbers
        isValid = (slideNumInt != 0) && (/^\d+$/.test(slideNumInt)) && (slideNumInt >= 1)
            && (slideNumInt <= prop.totalSlides);
    }

    return isValid;
}

app.get("/api/slide/:id", (req, res) => {
    let response = {};
    if (isValidSlideNum(req.params.id))
        response = new SlideInfo(req.params.id);
    else
        response["err"] = "Incorrect request";
    res.send(response);
})

app.listen(prop.port, (err) => {
    if (err) console.log("Error in starting the server");
    else console.log("Server listening on port " + prop.port);
})