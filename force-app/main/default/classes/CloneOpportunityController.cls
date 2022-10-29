public with sharing class CloneOpportunityController {

    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getAccountRelatedOpportunity(id accountId){
        
        final String Query = 'SELECT ID, name from '
                              + 'Opportunity ' 
                              + 'where '
                              + 'accountId = :accountId';
        List<Opportunity> opportunityList = Database.query(Query);
        return opportunityList;
    }
}
