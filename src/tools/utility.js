import { TXT_COD_ACTION_CREATE, TXT_COD_ACTION_DETAIL, TXT_COD_ACTION_EDIT } from "./constants";


//COMMON
const filterBy = (items=[{}], key="", value) => {
  return items.filter(item => item[key] === value);
};

const findBy = (items=[{}], key="", value) => {
  return items.find(item => item[key] === value);
};

const sortBy = (items = [], key = "") => {
  return items.sort((a, b) => {
    const valueA = typeof a[key] === 'string' ? a[key].toLowerCase() : a[key];
    const valueB = typeof b[key] === 'string' ? b[key].toLowerCase() : b[key];

    if (valueA < valueB) {
      return -1;
    }
    if (valueA > valueB) {
      return 1;
    }
    return 0;
  });
};

const distinct = (array=[]) => {
  return [...new Set(array)];
};

const proper = (string = "") => {
  return string
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}


// LABEL
const labelModal = (table = "", codAction = "", success) => {
  const labelTable = proper(table);
  const labelForm = {
    [TXT_COD_ACTION_DETAIL]: [labelTable, "Detail"],
    [TXT_COD_ACTION_CREATE]: ["New", labelTable],
    [TXT_COD_ACTION_EDIT]: ["Edit", labelTable]
  };
  let label = '';

  switch (success) {
    case '':
      label = labelForm[codAction]?.join(" ");
      break;
    case true:
      label = "Confirmation Message";
      break;
    case true:
      label = "Error Message";
      break;
    default:
      label = "Error Message";
      break;
  };
  return label;
};

const labelButtonSave = (success, codAction = TXT_COD_ACTION_CREATE) => {
  const labelConfirmAction = codAction === TXT_COD_ACTION_DETAIL ? 'CLOSE' : 'SAVE';
  const label = success === '' ? labelConfirmAction : 'CONTINUE';
  return label;
};


// CUSTOM
const calcTotalValue = (items=[{}]) => {
  return items.map(item => item.value).reduce((acc, val) => acc + val, 0);
}

function calcBalanceTransactions(transactions=[{owner: "", value: 0}]) {
  const balances = {};

  // Calculate the balance for each person
  for (const transaction of transactions) {
    const { owner, value } = transaction;
    if (!(owner in balances)) {
      balances[owner] = 0;
    }
    balances[owner] += value;
  }

  // Calculate the average balance
  const persons = Object.keys(balances);
  const totalBalance = persons.reduce((total, person) => total + balances[person], 0);
  const averageBalance = totalBalance / persons.length;

  // Perform transactions to balance the accounts
  const transactionsToBalance = [];

  for (const personA of persons) {
    for (const personB of persons) {
      if (personA !== personB) {
        const balanceA = balances[personA];
        const balanceB = balances[personB];

        if (balanceA > averageBalance && balanceB < averageBalance) {
          const amount = Math.min(balanceA - averageBalance, averageBalance - balanceB);
          transactionsToBalance.push({
            from: personB,
            to: personA,
            amount: amount
          });
          balances[personA] -= amount;
          balances[personB] += amount;
        }
      }
    }
  }

  return transactionsToBalance;
}



export {
  filterBy,
  findBy,
  sortBy,
  distinct,
  proper,
    
  labelModal,
  labelButtonSave,

  calcTotalValue,
  calcBalanceTransactions
};