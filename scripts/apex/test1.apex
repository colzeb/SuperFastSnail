(1)
list<Account> accountList = [SELECT Name, Website FROM Account WHERE Type = 'Customer'];
for(Account acc : accountList){
    // Some Logic.
} 

(2)        
for(Account acc : [SELECT Name, Website FROM Account WHERE Type = 'Customer']){
    // Some Logic.
} 


List<Account> accList = new List<Account>();
for(Integer i=0;i<50000;i++){
Account a = new Account();
a.Name = 'Test'+i;
accList.add(a);
}
// limit of insert in single transaction 1000
insert accList; // 500001


String str1;
null;
If(null.length()>0){
System.debug('String has some value');
}
else{
System.debug('String has no value');
}

// null pointer exception


Applicant app = new
// insert application 
// Application 
// send email should not fire