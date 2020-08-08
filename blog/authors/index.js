import arthuro555 from "./arthuro555.webp";
import picture_4ian from "./4ian.webp";
import bouh from "./bouh.webp";
import anonym from "./anonym.png";

const users = {
    "4ian": {
        forum: "4ian",
        name: "Florian Rival",
        picture: picture_4ian,
    },
    "arthuro555": {
        forum: "arthuro555",
        name: "Arthur Pacaud",
        picture: arthuro555,
    },
    "bouh": {
        forum: "Bouh",
        name: "Aurélien Vivet",
        picture: bouh,
    }
};

export default function(id) {
    return users[id] || {
        forum: "anonym",
        name: "Anonym",
        picture: anonym,
    };
}
