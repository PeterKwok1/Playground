$(document).ready(function () {

    $('input').keyup(() => {

        const v = $('input').val().toLowerCase()

        let elems = $('#myDIV *')
        elems.filter((i) => {
            elems.eq(i).toggle(elems.eq(i).text().toLowerCase().includes(v))
        })

        console.log(
            elems
        )
    })

})


// js loop
// html textcontent of children 