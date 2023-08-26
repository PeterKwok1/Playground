$(document).ready(function () {

    // let div = $('div')
    // div.click((e) => {
    //     console.log(e.target)
    // })
    // let div2 = document.querySelectorAll('div')
    // for (let i = 0; i < div2.length; i++) {
    //     div2[i].addEventListener('click', (e) => { console.log(e.target) })
    // }

    // const b = $('<p></p>').text('before')
    // const a = $('<p></p>').text('after')
    // $('div').remove('#two, #four')
    $('.great-grandparent').css('height', '300px')
    $('.grandparent').css('height', '200px')
    $('.parent').css('height', '100px')
    $('.sibling').css('height', '50px')

    $('#one').load('README.md #p1', (responseTxt, statusTxt, xhr) => {
        if (statusTxt === 'success') {
            console.log(responseTxt)
        } else if (statusTxt === 'error') {
            console.log(xhr.status)
        }
        console.log($('p').eq(0).text('eeeee'))
    })
})
