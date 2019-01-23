
const propertiesReader = require("properties-reader");
const prop = propertiesReader("app.properties");

module.exports = {
    PORT: prop.get("server-port"),
    TOTALSLIDES: prop.get("no-of-slides"),
    PRESENTATIONROOT: prop.get("presentation-root"),
    AUDIOFOLDER: prop.get("audio-folder"),
    AUDIOFILEPREFIX: prop.get("audio-file-prefix"),
    AUDIOFILETYPE: prop.get("audio-file-type"),
    IMAGEFOLDER: prop.get("image-folder"),
    IMAGEFILEPREFIX: prop.get("image-file-prefix"),
    IMAGEFILETYPE: prop.get("image-file-type"),
    TEXTFOLDER: prop.get("text-folder"),
    TEXTFILEPREFIX: prop.get("text-file-prefix"),
    TEXTFILETYPE: prop.get("text-file-type")
}
