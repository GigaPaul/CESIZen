const params = new URLSearchParams(document.location.search);
console.log(params)

const isEditing = params.get("edit")

if(isEditing === "true") {
    const editables = document.querySelectorAll(".editable");

    editables.forEach(element => {
        element.setAttribute("contenteditable", true);
    });
}