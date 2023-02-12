const host = 'http://localhost:5000';

fetch(`${host}/getCharacters`).then((response) => {
    response.json().then((data) => {
        data.map((item) => {

            let id_ch = item.character_id;
            let id_ch_id = "ch_" + item.character_id;
            let id_ch_img = "ch_img_" + item.character_id;
            let id_ch_sh_desc = "ch_sh_desc_" + item.character_id;
            let id_ch_desc = "ch_desc_" + item.character_id;
            let id_ch_name = "ch_text_" + item.character_id;
            let id_ch_close = "ch_close_" + item.character_id;

            let ch_name = item.character_name;
            let ch_sh_desc = item.character_sh_desc;
            let ch_desc = item.character_desc;
            let ch_img = item.character_img;

            let element_ch = '  <div id="' + id_ch_id + '" class="character" onmouseover="elm_hover(' + id_ch + ')" onmouseout="elm_no_hover(' + id_ch + ')"\n' +
                '                     onclick="ch_show_full(' + id_ch + ')">\n' +
                '                    <img id="' + id_ch_img + '" class="ch-img" src="' + ch_img + '" alt="NoImage">\n' +
                '                    <div id="' + id_ch_sh_desc + '" class="ch-sh-desc">' + ch_sh_desc + '</div>\n' +
                '                    <div id="' + id_ch_desc + '" class="ch-desc">' + ch_desc + '</div>\n' +
                '                    <h3 id="' + id_ch_name + '" class="ch-text">' + ch_name + '</h3>\n' +
                '                </div>\n' +
                '                <div id="' + id_ch_close + '" onmouseover="elm_hover(' + id_ch + ')" onmouseout="elm_no_hover(' + id_ch + ')"\n' +
                '                     onclick="ch_close(' + id_ch + ')" class="ch-close"><img class="ch-close-img"\n' +
                '                                                                    src="../Characters/close.png"\n' +
                '                                                                    alt="NoImage"></div>\n'

            document.getElementById('ch_cont').innerHTML += element_ch;

        })
    })
})


fetch(`${host}/getLocations`).then((response) => {
    response.json().then((data) => {
        data.map((item) => {

            let id_loc = item.location_id;
            let id_loc_id = "loc_" + item.location_id;
            let id_loc_img = "loc_img_" + item.location_id;
            let id_loc_desc = "loc_desc_" + item.location_id;
            let id_loc_name = "loc_text_" + item.location_id;
            let id_loc_close = "loc_close_" + item.location_id;

            let loc_name = item.location_name;
            let loc_desc = item.location_desc;
            let loc_img = item.location_img;

            let element_loc = '  <div id="' + id_loc_id + '" class="location" onmouseover="elm_hover(' + id_loc + ')" onmouseout="elm_no_hover(' + id_loc + ')"\n' +
                '                     onclick="loc_show_full(' + id_loc + ')">\n' +
                '                    <img id="' + id_loc_img + '" class="loc-img" src="' + loc_img + '" alt="NoImage">\n' +
                '                    <div id="' + id_loc_desc + '" class="loc-desc">' + loc_desc + '</div>\n' +
                '                    <h3 id="' + id_loc_name + '" class="loc-text">' + loc_name + '</h3>\n' +
                '                </div>\n' +
                '                <div id="' + id_loc_close + '" onmouseover="elm_hover(' + id_loc + ')" onmouseout="elm_no_hover(' + id_loc + ')"\n' +
                '                     onclick="loc_close(' + id_loc + ')" class="loc-close"><img class="loc-close-img"\n' +
                '                                                                    src="/Locations/close.png"\n' +
                '                                                                    alt="NoImage"></div>'
            document.getElementById('loc_cont').innerHTML += element_loc;

        })
    })
})

fetch(`${host}/getEvents`).then((response) => {
    response.json().then((data) => {
        data.map((item) => {

            let id_ev = item.event_id;
            let id_ev_id = "ev_" + item.event_id;
            let id_ev_img = "ev_img_" + item.event_id;
            let id_ev_desc = "ev_desc_" + item.event_id;
            let id_ev_name = "ev_text_" + item.event_id;
            let id_ev_close = "ev_close_" + item.event_id;

            let ev_name = item.event_name;
            let ev_desc = item.event_desc;
            let ev_img = item.event_img;

            let element_ev = '  <div id="' + id_ev_id + '" class="event" onmouseover="elm_hover(' + id_ev + ')" onmouseout="elm_no_hover(' + id_ev + ')"\n' +
                '                     onclick="ev_show_full(' + id_ev + ')">\n' +
                '                    <img id="' + id_ev_img + '" class="ev-img" src="' + ev_img + '" alt="NoImage">\n' +
                '                    <div id="' + id_ev_desc + '" class="ev-desc">' + ev_desc + '</div>\n' +
                '                    <h3 id="' + id_ev_name + '" class="ev-text">' + ev_name + '</h3>\n' +
                '                </div>\n' +
                '                <div id="' + id_ev_close + '" onmouseover="elm_hover(' + id_ev + ')" onmouseout="elm_no_hover(' + id_ev + ')"\n' +
                '                     onclick="ev_close(' + id_ev + ')" class="ev-close"><img class="ev-close-img"\n' +
                '                                                                    src="../Events/close.png"\n' +
                '                                                                    alt="NoImage"></div>'
            document.getElementById('ev_cont').innerHTML += element_ev;

        })
    })
})