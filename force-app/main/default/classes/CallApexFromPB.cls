public with sharing class CallApexFromPB {
  public CallApexFromPB() {
  }

  /**
   * The invocable method must be static and public or global, and its class must be an outer class.
   * Only one method in a class can have the InvocableMethod annotation.
   * Other annotations can’t be used with the InvocableMethod annotation.
   */

  /****************************************************************
   * Invocable methods are called with REST API and used to invoke a single Apex method.
   * Invocable methods have dynamic input and output values and support describe calls.
   */

  /****************************************************************
   * There can be at most one input parameter and its data type must be one of the following:
   * A list of a primitive data type or a list of lists of a primitive data type – List<string> lIST<LIST<string>>
   * the generic Object type is not supported.
   * A list of an sObject type or a list of lists of an sObject type.
   * A list of the generic sObject type (List<sObject>) or a list of lists of the generic sObject type (List<List<sObject>>).
   * A list of a user-defined type, containing variables of the supported types or user-defined Apex types, with the InvocableVariable annotation. Create a custom global or public Apex class to implement your data type, and make sure that your class contains at least one member variable with the invocable variable annotation.
   */

  /*----------------------------------------------------------------
   * Return type should be one of the following:
   * same as input type,
   * you cant return null
   */

  @InvocableMethod(
    label='Get Account Names'
    description='Returns the list of account names corresponding to the specified account IDs.'
    category='Account'
    callout=true
  )
  public static List<Integer> getDiscount(List<wrapper> accounts) {
    List<Integer> result = new List<Integer>();
    HttpRequest request = new HttpRequest();
    // get url from metadata
    // https://63c2559eb0c286fbe5ec70ae.mockapi.io/api/user
    request.setMethod('GET');
    request.setHeader('Accept', 'application/json');
    request.setEndPoint('https://63c2559eb0c286fbe5ec70ae.mockapi.io/api/user');

    HttpResponse response = new http().send(request);
    if (response.getStatusCode() == 200) {
      System.debug(response.getBody());
    }

    return result;
  }

  public class wrapper {
    @InvocableVariable(label='age' required=true)
    public Integer age;

    @InvocableVariable
    public Integer notRequired;
  }
}
