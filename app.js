var owner_name_input_element = document.getElementById('ownerName');
var fixed_amount_input_element = document.getElementById('fixedAmount');
var add_fix_btn_element = document.getElementById('addFixBtn');
add_fix_btn_element.addEventListener('click', function () {
    var owner_name = owner_name_input_element.value;
    var fixed_amount = fixed_amount_input_element.value;
    console.log("owner= ".concat(owner_name, ", fixed amount= ").concat(fixed_amount));
});
