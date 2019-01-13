
const propertiesReader = require("properties-reader");
const prop = propertiesReader("app.properties");

module.exports = {
    port: prop.get("server-port"),
    totalSlides: prop.get("no-of-slides"),
    presentationRoot: prop.get("presentation-root"),
    audioFolder: prop.get("audio-folder"),
    audioFilePrefix: prop.get("audio-file-prefix"),
    audioFileType: prop.get("audio-file-type"),
    imageFolder: prop.get("image-folder"),
    imageFilePrefix: prop.get("image-file-prefix"),
    imageFileType: prop.get("image-file-type"),
    textFolder: prop.get("text-folder"),
    textFilePrefix: prop.get("text-file-prefix"),
    textFileType: prop.get("text-file-type")
}
