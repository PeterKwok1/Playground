import './main.scss'
import $ from 'jquery'

const input_test = $("#input_test")

function readFile(file) {
    const reader = new FileReader();

    reader.onload = (e) => {
        fileContent = e.target.result;
    };

    reader.readAsText(file);
}

input_test.on('change', (e) => {
    const file_one = e.target.files[0]
    // const file_two = e.target.files[1]

    const file = readFile(file_one)
    console.log(file)
})
