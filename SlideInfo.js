const path = require("path");
const fs = require("fs");
const PROP = require("./property-loader");
class SlideInfo {
    constructor(slideNum) {
        this.slideNum = slideNum;
    }

    get isFirstSlide() {
        return this.slideNum === 1 ? true : false;
    }

    get isLastSlide() {
        return this.slideNum === PROP.TOTALSLIDES ? true : false;
    }
    get imagePath() {
        return path.join(PROP.PRESENTATIONROOT, PROP.IMAGEFOLDER,
            (PROP.IMAGEFILEPREFIX + " " + (this.slideNum + PROP.IMAGEFILETYPE)));
    }

    get audioPath() {
        return path.join(PROP.PRESENTATIONROOT, PROP.AUDIOFOLDER,
            (PROP.AUDIOFILEPREFIX + " " + this.slideNum + PROP.AUDIOFILETYPE));
    }

    get textFromFile() {
        const textFilePath = path.join(__dirname, PROP.PRESENTATIONROOT, PROP.TEXTFOLDER,
            (PROP.TEXTFILEPREFIX + " " + this.slideNum + PROP.TEXTFILETYPE));
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