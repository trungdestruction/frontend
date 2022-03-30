//concept
document.getElementById('Concept').onmouseover = function() {
    document.querySelector('.concept').style.display = 'block';
    document.querySelector('.stock').style.display = 'none';
    document.querySelector('.mkt').style.display = 'none';
    document.querySelector('.building').style.display = 'none';
    document.querySelector('.bo').style.display = 'none';
    document.querySelector('.business').style.display = 'none';
    document.querySelector('.it').style.display = 'none';
    document.querySelector('.landing').style.display = 'none';
    document.querySelector('.manager').style.display = 'none';
}

document.querySelector('.concept .remove-btn').onclick = function() {
    document.querySelector('.concept').style.display = 'none';
}

//stock
document.getElementById('Chung_khoan').onmouseover = function() {
    document.querySelector('.concept').style.display = 'none';
    document.querySelector('.stock').style.display = 'block';
    document.querySelector('.mkt').style.display = 'none';
    document.querySelector('.building').style.display = 'none';
    document.querySelector('.bo').style.display = 'none';
    document.querySelector('.business').style.display = 'none';
    document.querySelector('.it').style.display = 'none';
    document.querySelector('.landing').style.display = 'none';
    document.querySelector('.manager').style.display = 'none';
}

document.querySelector('.stock .remove-btn').onclick = function() {
    document.querySelector('.stock').style.display = 'none';
}

//mkt
document.getElementById('marketing').onmouseover = function() {
    document.querySelector('.concept').style.display = 'none';
    document.querySelector('.stock').style.display = 'none';
    document.querySelector('.mkt').style.display = 'block';
    document.querySelector('.building').style.display = 'none';
    document.querySelector('.bo').style.display = 'none';
    document.querySelector('.business').style.display = 'none';
    document.querySelector('.it').style.display = 'none';
    document.querySelector('.landing').style.display = 'none';
    document.querySelector('.manager').style.display = 'none';
}

document.querySelector('.mkt .remove-btn').onclick = function() {
    document.querySelector('.mkt').style.display = 'none';
}

//building
document.getElementById('Xay_dung').onmouseover = function() {
    document.querySelector('.concept').style.display = 'none';
    document.querySelector('.stock').style.display = 'none';
    document.querySelector('.mkt').style.display = 'none';
    document.querySelector('.building').style.display = 'block';
    document.querySelector('.bo').style.display = 'none';
    document.querySelector('.business').style.display = 'none';
    document.querySelector('.it').style.display = 'none';
    document.querySelector('.landing').style.display = 'none';
    document.querySelector('.manager').style.display = 'none';
}

document.querySelector('.building .remove-btn').onclick = function() {
    document.querySelector('.building').style.display = 'none';
}

//bo
document.getElementById('BO').onmouseover = function() {
    document.querySelector('.concept').style.display = 'none';
    document.querySelector('.stock').style.display = 'none';
    document.querySelector('.mkt').style.display = 'none';
    document.querySelector('.building').style.display = 'none';
    document.querySelector('.bo').style.display = 'block';
    document.querySelector('.business').style.display = 'none';
    document.querySelector('.it').style.display = 'none';
    document.querySelector('.landing').style.display = 'none';
    document.querySelector('.manager').style.display = 'none';
}

document.querySelector('.bo .remove-btn').onclick = function() {
    document.querySelector('.bo').style.display = 'none';
}

//business
document.getElementById('Kinh_doanh').onmouseover = function() {
    document.querySelector('.concept').style.display = 'none';
    document.querySelector('.stock').style.display = 'none';
    document.querySelector('.mkt').style.display = 'none';
    document.querySelector('.building').style.display = 'none';
    document.querySelector('.bo').style.display = 'none';
    document.querySelector('.business').style.display = 'block';
    document.querySelector('.it').style.display = 'none';
    document.querySelector('.landing').style.display = 'none';
    document.querySelector('.manager').style.display = 'none';
}

document.querySelector('.business .remove-btn').onclick = function() {
    document.querySelector('.business').style.display = 'none';
}

//it
document.getElementById('IT').onmouseover = function() {
    document.querySelector('.concept').style.display = 'none';
    document.querySelector('.stock').style.display = 'none';
    document.querySelector('.mkt').style.display = 'none';
    document.querySelector('.building').style.display = 'none';
    document.querySelector('.bo').style.display = 'none';
    document.querySelector('.business').style.display = 'none';
    document.querySelector('.it').style.display = 'block';
    document.querySelector('.landing').style.display = 'none';
    document.querySelector('.manager').style.display = 'none';
}

document.querySelector('.it .remove-btn').onclick = function() {
    document.querySelector('.it').style.display = 'none';
}

//landing
document.getElementById('Chua_khai_pha').onmouseover = function() {
    document.querySelector('.concept').style.display = 'none';
    document.querySelector('.stock').style.display = 'none';
    document.querySelector('.mkt').style.display = 'none';
    document.querySelector('.building').style.display = 'none';
    document.querySelector('.bo').style.display = 'none';
    document.querySelector('.business').style.display = 'none';
    document.querySelector('.it').style.display = 'none';
    document.querySelector('.landing').style.display = 'block';
    document.querySelector('.manager').style.display = 'none';
}

document.querySelector('.landing .remove-btn').onclick = function() {
    document.querySelector('.landing').style.display = 'none';
}

//manager
document.getElementById('Khach_san').onmouseover = function() {
    document.querySelector('.concept').style.display = 'none';
    document.querySelector('.stock').style.display = 'none';
    document.querySelector('.mkt').style.display = 'none';
    document.querySelector('.building').style.display = 'none';
    document.querySelector('.bo').style.display = 'none';
    document.querySelector('.business').style.display = 'none';
    document.querySelector('.it').style.display = 'none';
    document.querySelector('.landing').style.display = 'none';
    document.querySelector('.manager').style.display = 'block';
}

document.querySelector('.manager .remove-btn').onclick = function() {
    document.querySelector('.manager').style.display = 'none';
}