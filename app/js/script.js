// issue was that v was not in event listener so it wasn't updated

$("input").on("keyup", () => {
    const v = $('input').val().toLowerCase();
    $("tbody tr").filter((i, e) => {
        const tr = $('tbody tr').eq(i)
        tr.toggle(tr.text().toLowerCase().indexOf(v) > -1)
    });
});

// .keyup?
