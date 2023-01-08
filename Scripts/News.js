function art_cont_hover() {
    document.getElementById('art_img').style.border = 'solid 2px #fff';
    document.getElementById('art_img').style.boxShadow = '0px 0px 15px #cccccc';
    document.getElementById('art_cont_text').style.height = '300px'
    document.getElementById('art_cont_text').style.marginTop = '-306px'
    document.getElementById('art_cont_text').style.opacity = '90%';
    document.getElementById('container').style.opacity = '100%';
    document.getElementById('art_text').style.display = 'inline-block'
    document.getElementById('art_cont_text').style.overflowY = 'auto';
    document.getElementById('container').style.transition = '0.5s';
    document.getElementById('art_img').style.transition = '0.5s';
    document.getElementById('art_cont_text').style.transition = '0.5s';
}

function art_cont_hover_2() {
    document.getElementById('art_img_2').style.border = 'solid 2px #fff';
    document.getElementById('art_img_2').style.boxShadow = '0px 0px 15px #cccccc';
    document.getElementById('art_cont_text_2').style.height = '300px'
    document.getElementById('art_cont_text_2').style.marginTop = '-306px'
    document.getElementById('art_cont_text_2').style.opacity = '90%';
    document.getElementById('container').style.opacity = '100%';
    document.getElementById('art_text_2').style.display = 'inline-block'
    document.getElementById('art_cont_text_2').style.overflowY = 'auto';
    document.getElementById('container').style.transition = '0.5s';
    document.getElementById('art_img_2').style.transition = '0.5s';
    document.getElementById('art_cont_text_2').style.transition = '0.5s';
}

function art_cont_no_hover() {
    document.getElementById('art_img').style.border = 'solid 2px #000';
    document.getElementById('art_img').style.boxShadow = '';
    document.getElementById('art_cont_text').style.height = '10%'
    document.getElementById('art_cont_text').style.marginTop = '-99px'
    document.getElementById('art_text').style.display = 'none';
    document.getElementById('art_cont_text').style.overflowY = 'hidden';
    document.getElementById('art_cont_text').style.opacity = '100%';
    document.getElementById('container').style.opacity = '90%';
}

function art_cont_no_hover_2() {
    document.getElementById('art_img_2').style.border = 'solid 2px #000';
    document.getElementById('art_img_2').style.boxShadow = '';
    document.getElementById('art_cont_text_2').style.height = '10%'
    document.getElementById('art_cont_text_2').style.marginTop = '-99px'
    document.getElementById('art_text_2').style.display = 'none';
    document.getElementById('art_cont_text_2').style.overflowY = 'hidden';
    document.getElementById('art_cont_text_2').style.opacity = '100%';
    document.getElementById('container').style.opacity = '90%';
}