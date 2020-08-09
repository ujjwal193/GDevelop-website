const users = {
    "4ian": {
        forum: "4ian",
        name: "Florian Rival",
        picture: "4ian.webp",
    },
    "arthuro555": {
        forum: "arthuro555",
        name: "Arthur Pacaud",
        picture: "arthuro555.webp",
    },
    "bouh": {
        forum: "Bouh",
        name: "Aurélien Vivet",
        picture: "bouh.webp",
    }
};

export default function(id) {
    return users[id] || {
        name: "Anonym",
        picture: "anonym.png",
    };
}
