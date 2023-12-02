let owner_name_input_element = document.getElementById('ownerName') as HTMLInputElement;
let fixed_amount_input_element = document.getElementById('fixedAmount') as HTMLInputElement;
let add_fix_btn_element = document.getElementById('addFixBtn');

/*
* owner_name
* fixed_amount
* interest_rate
* annual_interest
* */

class Account {
  owner_name: string;
  fixed_amount: number;
  interest_rate: number;
  annual_interest: number;

  constructor(owner_name: string, fixed_amount: number, rate: number, annual_interest: number) {
    this.owner_name = owner_name;
    this.fixed_amount = fixed_amount;
    this.interest_rate = rate;
    this.annual_interest = annual_interest;
  }
}

add_fix_btn_element.addEventListener('click', () => {

  let owner_name = owner_name_input_element.value;
  let fixed_amount = fixed_amount_input_element.value;

  console.log(`owner= ${owner_name}, fixed amount= ${fixed_amount}`);

});