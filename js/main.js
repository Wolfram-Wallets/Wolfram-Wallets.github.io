var SHOWROOM, FORM,
    FORMS = {
        both: "https://docs.google.com/forms/d/e/1FAIpQLSddpZbokm_a3wQRXgZ4Ry_VKWNDS3IU_ZzJkfszNJ3SOZUDiQ/viewform?usp=pp_url&entry.1444555553=B%C3%A5da&entry.1125247720",
        regular: "https://docs.google.com/forms/d/e/1FAIpQLSddpZbokm_a3wQRXgZ4Ry_VKWNDS3IU_ZzJkfszNJ3SOZUDiQ/viewform?usp=pp_url&entry.1444555553=Normal&entry.1125247720",
        small: "https://docs.google.com/forms/d/e/1FAIpQLSddpZbokm_a3wQRXgZ4Ry_VKWNDS3IU_ZzJkfszNJ3SOZUDiQ/viewform?usp=pp_url&entry.1444555553=Lillen&entry.1125247720"
    };

addEventListener('load', function(){
    SHOWROOM = document.getElementById('showroom');
    FORM = document.getElementById('reserve');

    SHOWROOM.addEventListener('change', showroomChoice);
});

var showroomChoice = function(){
    FORM.src = FORMS[this.kind.value];
};

//showroom.addEventListener()
