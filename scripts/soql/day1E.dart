Trigger on Contact (after insert, after update){

    if(Trigger.isAfter && Trigger.isInsert || Trigger.isUpdate){


// list<contact> clist=  [select id form contact where condinton]

Trigger.oldM(ap(clist[0].id) == sobject if it exits other wishe null
@AuraEnabled(catchable=true)
apexMehtod(){
    insert account;
    return account;
}
List<Account> accToUpdate  = new List<Account>();
        for(Contact c : Trigger.new){
            double sum3Field = c.field1__c + c.field2 + c.field3;
            account acc = new account();
            if( sum3Field> 0  && sum3Field <= 1){
                
                if(c.AccountId == null ){
                    countinue;
                }
                acc.id = c.AccountId;
                acc.Rating = 'Cold';
                accToUpdate.add(acc);
            }
            else if(sum3Field> 1  && sum3Field <= 2){
                acc.id = c.AccountId;
                acc.Rating = 'Warm';
                accToUpdate.add(acc);
            }
            else {
                acc.id = c.AccountId;
                acc.Rating = 'Hot';
                accToUpdate.add(acc);
            }
        }
        update account;
    }
}
{(
    doInt: function(){

    },

)}