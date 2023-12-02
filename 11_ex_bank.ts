let owner_name_input_element = document.getElementById('ownerName') as HTMLInputElement;
let fixed_amount_input_element = document.getElementById('fixedAmount') as HTMLInputElement;
let add_fix_btn_element = document.getElementById('addFixBtn');
let tbl_body_element = document.getElementById('fixedDepositTableBody');
let update_interest_rate_btn_element = document.getElementById('updateInterestBtn');
let new_interest_rate_input_element = document.getElementById('newInterestRate') as HTMLInputElement;

/*
* owner_name
* fixed_amount
* interest_rate
* annual_interest
* */

class Account {
  owner_name: string;
  fixed_amount: number;
  private interest_rate: number;
  private annual_interest: number;

  constructor(owner_name: string, fixed_amount: number, rate: number, annual_interest: number) {
    this.owner_name = owner_name;
    this.fixed_amount = fixed_amount;
    this.interest_rate = rate;
    this.annual_interest = annual_interest;
  }

  updateRate(rate: number): void {
    this.interest_rate = rate;
    this.annual_interest = (this.fixed_amount * rate)/100;
  }

  getInterestRate(): number {
    return this.interest_rate;
  }

  getAnnualInterest(): number {
    return this.annual_interest;
  }
}

let rate:number = 12.5;
let accounts: Account[] = [];

add_fix_btn_element.addEventListener('click', () => {

  let owner_name = owner_name_input_element.value;
  let fixed_amount = fixed_amount_input_element.value;

  let annual_interest = (+fixed_amount * rate)/100;

  let account = new Account(owner_name, +fixed_amount, rate, annual_interest);
  accounts.push(account);
  updateTbl();

});


function updateTbl() {

  tbl_body_element.innerHTML = "";

  accounts.map(r => {

    let record_element = document.createElement('tr');
    let record_data = `<td>${r.owner_name}</td>
                        <td>${r.fixed_amount}</td>
                        <td>${r.getInterestRate()}</td>
                        <td>${r.getAnnualInterest()}</td>`;
    record_element.innerHTML = record_data;

    tbl_body_element.appendChild(record_element);

  });
}

update_interest_rate_btn_element.addEventListener('click', () => {
  let new_interest_rate = new_interest_rate_input_element.value;
  rate = +new_interest_rate;
  let newAccounts: Account[] = [];
  accounts.map(r => {
    r.updateRate(rate);
    newAccounts.push(r);
  });
  accounts = newAccounts;
  updateTbl();
});