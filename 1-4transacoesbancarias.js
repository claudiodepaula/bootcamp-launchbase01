const user ={
    name:'Mariana',
    transactions:[],
    balance:0
};

function createTransaction(transacao){
    user.transactions.push(transacao)
    if(transacao.type=='credit') user.balance+=transacao.value;
    else if (transacao.type=='debit') user.balance-=transacao.value;
    else console.log('The type of the operation is invalid.');
}

function getHigherTransactionByType(typeTransaction){
    var higher=0;
    var higherTransaction='';
    for(trans of user.transactions){
        if(trans.type==typeTransaction && trans.value>higher) higher=trans.value, higherTransaction=trans;   
    }
    
    return higherTransaction;
}

function getAverageTransactionValue(){
    let averageTransactionsValue=0;

    for(transaction of user.transactions){
        averageTransactionsValue+=transaction.value/user.transactions.length;  
    }

    return (`The transactions average value is: ${averageTransactionsValue}`);
}

function transactionsCounter(transactions){
    let credit=0, debit=0;
    for (transaction of transactions){
        if(transaction.type=='credit'){
            credit++;
        }else{
            debit++;
        }
    }

    return (`Créditos: ${credit}, Débitos: ${debit}`);
}


const operation1 ={type:'debit', value:200}
const operation2 ={type:'debit', value:40}
const operation3 ={type:'credit',value:20}
const operation4 ={type:'credit', value:120}
const operation5 ={type:'credit', value:500}

createTransaction(operation1);
createTransaction(operation2);
createTransaction(operation3);
createTransaction(operation4);
createTransaction(operation5);

console.log(`The actual balance is ${user.balance}`);
console.log(getHigherTransactionByType('debit'));
console.log(getHigherTransactionByType('credit'));
console.log(getAverageTransactionValue());
console.log(transactionsCounter(user.transactions));

