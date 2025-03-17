const editProfile = $("#editProfile")[0];
const profileName = $("#profileName")[0];
const profileIdElt = $("#profileId")[0];
const profileImgElt = $("#profileImg")[0];
const aPropos = $("#aPropos")[0];
const validateContainer = $("#validateContainer")[0];
const validateBtn = $("#validateBtn")[0];
const favoriteContent = $("#favoriteContent")[0];

const params = new URLSearchParams(document.location.search);
const idUser = parseInt(params.get("id"));

const user = data.users.find((user) => user.id === idUser);

if(!user) {
    window.location.replace("./../index.html");
}
console.log(user);

$(profileName).text(user.firstName);
$(profileIdElt).text(`#${user.id}`);
$(profileImgElt).prop("src", user.image)

$(editProfile).on("click", function() {
    ToggleEdit(true);
})

function ToggleEdit(toggleBool = null) {
    toggleBool = toggleBool ?? !$(profileName).prop("contenteditable");
    $(profileName).prop("contenteditable", toggleBool);

    if(toggleBool) {
        $(profileName).focus();
    }

    let p = $(aPropos).children("p")[0];
    $(p).prop("contenteditable", toggleBool)

    $(validateContainer).toggleClass("d-none", !toggleBool);
}


$(validateBtn).on("click", function() {
    ToggleEdit(false);
})

let max = data.content.length < 3 ? data.content.length : 3;

for(let i = 0; i < max; i++) {
    let elt = new Post(data.content[i]).CreateElement();

    favoriteContent.appendChild(elt);
}