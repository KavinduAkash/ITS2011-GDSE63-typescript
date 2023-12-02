var owner_name_input_element = document.getElementById('ownerName');
var fixed_amount_input_element = document.getElementById('fixedAmount');
var add_fix_btn_element = document.getElementById('addFixBtn');
var tbl_body_element = document.getElementById('fixedDepositTableBody');
var update_interest_rate_btn_element = document.getElementById('updateInterestBtn');
var new_interest_rate_input_element = document.getElementById('newInterestRate');
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
    Account.prototype.updateRate = function (rate) {
        this.interest_rate = rate;
        this.annual_interest = (this.fixed_amount * rate) / 100;
    };
    Account.prototype.getInterestRate = function () {
        return this.interest_rate;
    };
    Account.prototype.getAnnualInterest = function () {
        return this.annual_interest;
    };
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
    updateTbl();
});
function updateTbl() {
    tbl_body_element.innerHTML = "";
    accounts.map(function (r) {
        var record_element = document.createElement('tr');
        var record_data = "<td>".concat(r.owner_name, "</td>\n                        <td>").concat(r.fixed_amount, "</td>\n                        <td>").concat(r.getInterestRate(), "</td>\n                        <td>").concat(r.getAnnualInterest(), "</td>");
        record_element.innerHTML = record_data;
        tbl_body_element.appendChild(record_element);
    });
}
update_interest_rate_btn_element.addEventListener('click', function () {
    var new_interest_rate = new_interest_rate_input_element.value;
    rate = +new_interest_rate;
    var newAccounts = [];
    accounts.map(function (r) {
        r.updateRate(rate);
        newAccounts.push(r);
    });
    accounts = newAccounts;
    updateTbl();
});
