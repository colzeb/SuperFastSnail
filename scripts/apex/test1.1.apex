public class batchA implements Database.Bathcable<Sobject> {

    public static List<Sobject>| queryLocator start(){

    }

    public static void execute(List<sobject> a, batchContext){

    }

    public static void finish(){

    }
}

Trigger.new = list userinter/ user updated

tirgger.od = list value in db

Trigger.newMap = insert null 
// update 
id = new value which going to update

Trigger.oldMap = 
old value db vales before change


In Account, we have one custom field TotalContact__c(Number Type).
that will store the total contact associated with an account.
so we need to write trigger to count the number of contacts associated with an account.


Trigger on Contact(After insert, after update, after delete){
List<id> accIds = new List<id>();
for(Contact con : Trigger.new){
    accIds.add(con.AccountId);

    }

    List<Account> accToUpdate = new List<Account>();
    //Map<id, List<Contact>> mapCount = Map([select id, (select id from Contacts where AccountId : accIds) from Account where id: accIds]);
    Map<id, List<Contact> > mapAccToc = new Map<id, List<Contact> >
    for(contact c : [select id, accountId from Contact where AccountId : accIds]){

        if(mapAccToc.get(c.accountId) != null){
            mapAccToc.put(c.accountId, mapAccToc.get(c.accountId).add(c));
        }else{
            List<contact> tmp = new List<contact>();
            mapAccToc.put(c.accountId, tmp.add(c));
        }
    }


    for(Id accId : mapCount.keySet()){
        account acc = new account();
        acc.id = accId;
        acc.TotalContact__c = mapCount.get(accId).size();
        accToUpdate.add(acc);
    }

    update acc;
    
}