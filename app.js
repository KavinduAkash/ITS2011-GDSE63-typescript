var owner_name_input_element = document.getElementById('ownerName');
var fixed_amount_input_element = document.getElementById('fixedAmount');
var add_fix_btn_element = document.getElementById('addFixBtn');
/*
* owner_name
* fixed_amount
* interest_rate
* annual_interest
* */
var Account = /** @class */ (function () {
    function Account(owner_name, fixed_amount, rate, annual_interest) {
        this.owner_name = owner_name;
        this.fixed_amount = fixed_amount;
        this.interest_rate = rate;
        this.annual_interest = annual_interest;
    }
    return Account;
}());
var rate = 12.5;
var accounts = [];
add_fix_btn_element.addEventListener('click', function () {
    var owner_name = owner_name_input_element.value;
    var fixed_amount = fixed_amount_input_element.value;
    var annual_interest = (+fixed_amount * rate) / 100;
    var account = new Account(owner_name, +fixed_amount, rate, annual_interest);
    accounts.push(account);
    console.log(accounts);
});
function updateTbl() {
    accounts.map(function (r) {
        var record_element = document.createElement('tr');
        var record_data = "<td>".concat(r.owner_name, "</td>\n                        <td>").concat(r.fixed_amount, "</td>\n                        <td>").concat(r.interest_rate, "</td>\n                        <td>").concat(r.annual_interest, "</td>");
        record_element.innerHTML = record_data;
    });
}
