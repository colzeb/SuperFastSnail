public with sharing class AccountListControllerLwc {
  @AuraEnabled(cacheable=true)
  public static List<Account> queryAccounts(Integer numberOfEmployees) {
    return [
      // Return whatever the component needs
      SELECT Name
      FROM Account
      WHERE NumberOfEmployees >= :numberOfEmployees
      WITH SECURITY_ENFORCED
    ];
  }

  @AuraEnabled(cacheable=true)
  public static List<Account> queryAccountsByRevenue(Decimal annualRevenue) {
    //Integer aVar = System.Limits.getLimitCpuTime()
    // check access
    final Boolean hasAccessAnnualRevenue = Schema.SObjectType.Account.fields.AnnualRevenue.isAccessible();
    final Boolean hasAccessName = Schema.SObjectType.Account.fields.Name.isAccessible();
    final Boolean hasAccountAccess = Schema.SObjectType.Account.isAccessible();
    if (!hasAccessAnnualRevenue || !hasAccessName) {
      throw new AuraHandledException('Access denied');
    }
    return [
      SELECT id, name
      FROM account
      WHERE annualRevenue >= :annualRevenue
      WITH security_enforced
    ];
  }
}
