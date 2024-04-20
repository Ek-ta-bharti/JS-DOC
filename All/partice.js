        function calculate() {
            var num1 = parseFloat(document.getElementById('num1Input').value);
            var num2 = parseFloat(document.getElementById('num2Input').value);

            if (isNaN(num1) || isNaN(num2)) {
                alert('Please enter valid numeric values.');
            } else {
                var result = num1 + num2;
                alert('The result is: ' + result);
            }
        }

