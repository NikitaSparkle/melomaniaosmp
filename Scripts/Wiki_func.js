function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

// loc_cont
// ch_cont
function show_characters() {
    document.getElementById('ev_cont').style.marginLeft = '-4290px';
    document.getElementById('loc_cont').style.marginLeft = '-4290px';
    document.getElementById('ev_cont').style.opacity = '0%';
    document.getElementById('loc_cont').style.opacity = '0%';
    document.getElementById('ch_cont').style.opacity = '100%';
    delay(120).then(() => document.getElementById('ch_cont').style.display = 'inline-block');
    delay(500).then(() => {
        document.getElementById('ev_cont').style.display = 'none';
        document.getElementById('loc_cont').style.display = 'none';
        document.getElementById('ch_cont').style.marginLeft = '0px';
        document.getElementById('ch_cont').style.marginTop = '0px';
        document.getElementById('ev_cont').style.marginTop = '4000px';
        document.getElementById('loc_cont').style.marginTop = '4000px';
        document.getElementById('ev_cont').style.marginLeft = '0px';
        document.getElementById('loc_cont').style.marginLeft = '0px';
    });
}

function show_locations() {
    document.getElementById('ev_cont').style.marginLeft = '-4290px';
    document.getElementById('ch_cont').style.marginLeft = '-4290px';
    document.getElementById('ev_cont').style.opacity = '0%';
    document.getElementById('ch_cont').style.opacity = '0%';
    document.getElementById('loc_cont').style.opacity = '100%';
    delay(120).then(() => document.getElementById('loc_cont').style.display = 'inline-block');
    delay(500).then(() => {
        document.getElementById('ev_cont').style.display = 'none';
        document.getElementById('ch_cont').style.display = 'none';
        document.getElementById('loc_cont').style.marginLeft = '0px';
        document.getElementById('loc_cont').style.marginTop = '0px';
        document.getElementById('ev_cont').style.marginTop = '4000px';
        document.getElementById('ch_cont').style.marginTop = '4000px';
        document.getElementById('ev_cont').style.marginLeft = '0px';
        document.getElementById('ch_cont').style.marginLeft = '0px';
    });
}

function show_events() {
    document.getElementById('loc_cont').style.marginLeft = '-4290px';
    document.getElementById('ch_cont').style.marginLeft = '-4290px';
    document.getElementById('loc_cont').style.opacity = '0%';
    document.getElementById('ch_cont').style.opacity = '0%';
    document.getElementById('ev_cont').style.opacity = '100%';
    delay(120).then(() => document.getElementById('ev_cont').style.display = 'inline-block');
    delay(500).then(() => {
        document.getElementById('loc_cont').style.display = 'none';
        document.getElementById('ch_cont').style.display = 'none';
        document.getElementById('ev_cont').style.marginLeft = '0px';
        document.getElementById('ev_cont').style.marginTop = '0px';
        document.getElementById('loc_cont').style.marginTop = '4000px';
        document.getElementById('ch_cont').style.marginTop = '4000px';
        document.getElementById('loc_cont').style.marginLeft = '0px';
        document.getElementById('ch_cont').style.marginLeft = '0px';
    });
}

function elm_hover(id) {
    let ch = 'ch_' + id;
    let ch_close = 'ch_close_' + id;
    let loc = 'loc_' + id;
    let loc_close = 'loc_close_' + id;
    let ev = 'ev_' + id;
    let ev_close = 'ev_close_' + id;

    document.getElementById(ch).style.border = '2px solid #fff';
    document.getElementById(ch).style.boxShadow = '0px 0px 15px #cccccc';
    document.getElementById(ch).style.cursor = 'pointer';
    document.getElementById(ch_close).style.border = '2px solid #fff';
    document.getElementById(ch_close).style.boxShadow = '0px 0px 15px #cccccc';
    document.getElementById(ch).style.transition = '0.5s';

    document.getElementById(loc).style.border = '2px solid #fff';
    document.getElementById(loc).style.boxShadow = '0px 0px 15px #cccccc';
    document.getElementById(loc).style.cursor = 'pointer';
    document.getElementById(loc_close).style.border = '2px solid #fff';
    document.getElementById(loc_close).style.boxShadow = '0px 0px 15px #cccccc';
    document.getElementById(loc).style.transition = '0.5s';

    document.getElementById(ev).style.boxShadow = '0px 0px 15px #cccccc';
    document.getElementById(ev).style.border = '2px solid #fff';
    document.getElementById(ev).style.cursor = 'pointer';
    document.getElementById(ev_close).style.border = '2px solid #fff';
    document.getElementById(ev_close).style.boxShadow = '0px 0px 15px #cccccc';
    document.getElementById(ev).style.transition = '0.5s';
}

function elm_no_hover(id) {
    let ch = 'ch_' + id;
    let ch_close = 'ch_close_' + id;
    let loc = 'loc_' + id;
    let loc_close = 'loc_close_' + id;
    let ev = 'ev_' + id;
    let ev_close = 'ev_close_' + id;

    document.getElementById(ch).style.border = '2px solid #000';
    document.getElementById(ch).style.boxShadow = '';
    document.getElementById(ch_close).style.border = '2px solid #000';
    document.getElementById(ch_close).style.boxShadow = '';
    document.getElementById(ch).style.transition = '0.5s';

    document.getElementById(loc).style.border = '2px solid #000';
    document.getElementById(loc).style.boxShadow = '';
    document.getElementById(loc_close).style.border = '2px solid #000';
    document.getElementById(loc_close).style.boxShadow = '';
    document.getElementById(loc).style.transition = '0.5s';

    document.getElementById(ev).style.border = '2px solid #000';
    document.getElementById(ev).style.boxShadow = '';
    document.getElementById(ev_close).style.border = '2px solid #000';
    document.getElementById(ev_close).style.boxShadow = '';
    document.getElementById(ev).style.transition = '0.5s';
}

function ch_show_full(id) {
    let ch = 'ch_' + id;
    let ch_img = 'ch_img_' + id;
    let ch_sh_desc = 'ch_sh_desc_' + id;
    let ch_desc = 'ch_desc_' + id;
    let ch_text = 'ch_text_' + id;
    let ch_close_btn = 'ch_close_' + id;

    document.getElementById(ch).style.cursor = '';
    document.getElementById(ch).style.width = '566px';
    document.getElementById(ch).style.textAlign = 'left';
    document.getElementById(ch_text).style.textAlign = 'center';
    document.getElementById(ch_sh_desc).style.display = 'inline-block';
    delay(500).then(() => {
        document.getElementById(ch_sh_desc).style.opacity = '100%';
        document.getElementById(ch).style.height = '690px';
        document.getElementById(ch_desc).style.display = 'inline-block';
        delay(500).then(() => {
            document.getElementById(ch_desc).style.opacity = '100%';
            document.getElementById(ch_close_btn).style.display = 'inline-block';
        })
    })
}

function loc_show_full(id) {
    let loc = 'loc_' + id;
    let loc_img = 'loc_img_' + id;
    let loc_desc = 'loc_desc_' + id;
    let loc_text = 'loc_text_' + id;
    let loc_close_btn = 'loc_close_' + id;

    document.getElementById(loc).style.cursor = '';
    document.getElementById(loc).style.width = '566px';
    document.getElementById(loc).style.height = '400px';
    document.getElementById(loc).style.textAlign = 'left';
    document.getElementById(loc_text).style.textAlign = 'center';
    document.getElementById(loc_img).style.maxWidth = "550px";
    delay(500).then(() => {
        document.getElementById(loc).style.height = '700px';
        document.getElementById(loc_desc).style.display = 'inline-block';
        delay(500).then(() => {
            document.getElementById(loc_desc).style.opacity = '100%';
            document.getElementById(loc_close_btn).style.display = 'inline-block';
        })
    })
}

function ev_show_full(id) {
    let ev = 'ev_' + id;
    let ev_img = 'ev_img_' + id;
    let ev_desc = 'ev_desc_' + id;
    let ev_text = 'ev_text_' + id;
    let ev_close_btn = 'ev_close_' + id;

    document.getElementById(ev).style.cursor = '';
    document.getElementById(ev).style.width = '566px';
    document.getElementById(ev).style.height = '400px';
    document.getElementById(ev).style.textAlign = 'left';
    document.getElementById(ev_text).style.textAlign = 'center';
    document.getElementById(ev_img).style.maxWidth = "550px";
    delay(500).then(() => {
        document.getElementById(ev).style.height = '700px';
        document.getElementById(ev_desc).style.display = 'inline-block';
        delay(500).then(() => {
            document.getElementById(ev_desc).style.opacity = '100%';
            document.getElementById(ev_close_btn).style.display = 'inline-block';
        })
    })
}

function ch_close(id) {
    let ch = 'ch_' + id;
    let ch_img = 'ch_img_' + id;
    let ch_sh_desc = 'ch_sh_desc_' + id;
    let ch_desc = 'ch_desc_' + id;
    let ch_text = 'ch_text_' + id;
    let ch_close = 'ch_close_' + id;

    document.getElementById(ch_desc).style.opacity = "0%";
    delay(500).then(() => {
        document.getElementById(ch_desc).style.display = "none";
        document.getElementById(ch).style.height = "335px";
        document.getElementById(ch_sh_desc).style.opacity = "0%";
        delay(500).then(() => {
            document.getElementById(ch_sh_desc).style.display = "none";
            document.getElementById(ch).style.width = "250px";
        })
    })
    document.getElementById(ch_close).style.display = "none";
}

function loc_close(id) {
    let loc = 'loc_' + id;
    let loc_img = 'loc_img_' + id;
    let loc_desc = 'loc_desc_' + id;
    let loc_close = 'loc_close_' + id;


    document.getElementById(loc_desc).style.opacity = "0%";
    delay(500).then(() => {
        document.getElementById(loc_desc).style.display = "none";
        document.getElementById(loc).style.height = '400px';
        delay(500).then(() => {
            document.getElementById(loc_img).style.maxWidth = "250px";
            document.getElementById(loc).style.width = "250px";
            document.getElementById(loc).style.height = '180px';
        })
    })
    document.getElementById(loc_close).style.display = "none";
}

function ev_close(id) {
    let ev = 'ev_' + id;
    let ev_img = 'ev_img_' + id;
    let ev_desc = 'ev_desc_' + id;
    let ev_close = 'ev_close_' + id;

    document.getElementById(ev_desc).style.opacity = "0%";
    delay(500).then(() => {
        document.getElementById(ev_desc).style.display = "none";
        document.getElementById(ev).style.height = '400px';
        delay(500).then(() => {
            document.getElementById(ev_img).style.maxWidth = "250px";
            document.getElementById(ev).style.width = "250px";
            document.getElementById(ev).style.height = '180px';
        })
    })
    document.getElementById(ev_close).style.display = "none";
}
