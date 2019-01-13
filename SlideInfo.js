const path = require("path");
const fs = require("fs");
const prop = require("./property-loader");

class SlideInfo {
    constructor(slideNum) {
        this.slideNum = slideNum;
        this.isFirstSlide = +slideNum === 1 ? true : false;
        this.imageFilePath = this.imagePath;
        this.audioFilePath = this.audioPath;
        this.textData = this.textFromFile;
        this.isLastSlide = +slideNum === prop.totalSlides ? true : false;
    }
    get imagePath() {
        return path.join(__dirname, prop.presentationRoot, prop.imageFolder,
            (prop.imageFilePrefix + " " + this.slideNum + prop.imageFileType));
    }

    get audioPath() {
        return path.join(__dirname, prop.presentationRoot, prop.audioFolder,
            (prop.audioFilePrefix + " " + this.slideNum + prop.audioFileType));
    }

    get textFromFile() {
        const textFilePath = path.join(__dirname, prop.presentationRoot, prop.textFolder,
            (prop.textFilePrefix + " " + this.slideNum + prop.textFileType));
        try {
            const data = fs.readFileSync(textFilePath, "utf-8");
            return data;
        }
        catch (err) {
            return ("Error in reading file " + err);
        }
    }
}

module.exports = SlideInfo;