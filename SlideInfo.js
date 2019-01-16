const path = require("path");
const fs = require("fs");
const prop = require("./property-loader");
const os = require("os");
class SlideInfo {
    constructor(slideNum) {
        this.slideNum = slideNum;
    }

    get isFirstSlide() {
        return this.slideNum === 1 ? true : false;
    }

    get isLastSlide() {
        return this.slideNum === prop.totalSlides ? true : false;
    }
    get imagePath() {
        return path.join(prop.presentationRoot, prop.imageFolder,
            (prop.imageFilePrefix + " " + (this.slideNum + prop.imageFileType)));
    }

    get audioPath() {
        return path.join(prop.presentationRoot, prop.audioFolder,
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

    get SlideResponse() {
        let slideResponse = {};
        slideResponse["slideNum"] = this.slideNum;
        slideResponse["isFirstSlide"] = this.isFirstSlide;
        slideResponse["isLastSlide"] = this.isLastSlide;
        slideResponse["imagePath"] = this.imagePath;
        slideResponse["audioPath"] = this.audioPath;
        slideResponse["text"] = this.textFromFile;

        return slideResponse;
    }
}

module.exports = SlideInfo;