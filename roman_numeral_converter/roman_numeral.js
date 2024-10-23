let output = document.getElementById('output')
let send = document.getElementById('convert')
send.addEventListener("click", run_program);

function run_program() {

    let textbox = document.getElementById('input')
    let input_val = textbox.value

    const decimal_roman = {
        "1": "I",
        "2": "II",
        "3": "III",
        "4": "IV",
        "5": "V",
        "6": "VI",
        "7": "VII",
        "8": "VIII",
        "9": "IX",
        "10": "X",
        "20": "XX",
        "30": "XXX",
        "40": "XL",
        "50": "L",
        "60": "LX",
        "70": "LXX",
        "80": "LXXX",
        "90": "XC",
        "100": "C",
        "200": "CC",
        "300": "CCC",
        "400": "CD",
        "500": "D",
        "600": "DC",
        "700": "DCC",
        "800": "DCCC",
        "900": "CM",
        "1000": "M",
        "2000": "MM",
        "3000": "MMM"
    }

    function convert_to_roman() {
        let result = ""
        let zeros_str = ""
        for (let i = 0; i < input_val.length; i++) {
            zeros_str += "0"
        }
        let list_digits = input_val.split('')
        list_digits.unshift("0")
        let first_digit = list_digits[0]
        let msg = ""
        let list_zeros = zeros_str.split('')
        for (let i = 0; i < input_val.length; i++) {
            list_zeros.pop()
            zeros_str = list_zeros.join("")
            list_digits.splice(0, 1)
            first_digit = list_digits[0]
            let num = first_digit + zeros_str
            let roman_num = decimal_roman[num]
            msg += roman_num
        }
        let list_result = msg.split('undefined')
        let result_str = list_result.join('')
        output.innerText = result_str
    }

    let error_code = false
    let int_input = 0

    if (input_val.trim() === "") {
        output.innerText = "Empty strings are not processable."
        error_code = true
    } else {
        if (input_val[0] === "0" && input_val.length !== 1) {
            output.innerText = "Leading zeros are not allowed."
            error_code = true
        } else {
            int_input = Number(input_val)
            if (isNaN(int_input)) {
                output.innerText = "Oops! Looks like the value you entered is not a valid integer."
                error_code = true
            }
        }
    }

    if (error_code === false) {
        if (int_input >= 1 && int_input <= 3999) {
            convert_to_roman()
        } else {
            output.innerText = "The value you entered is outside the allowed range for this roman numeral converter. Try entering an integer between 1 and 3999."
        }
    }
}