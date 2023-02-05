public with sharing class Result {
  public Result() {
    MyClass myClass = new MyClass();
    myClass.name = 'MyClass';
    myClass.description = 'MyClass description';
    myClass.id = 'MyClass id';
    String preety = JSON.serializePretty(myClass);
    System.debug(preety);
  }

  private with sharing class MyClass {
    public String name { get; set; }
    public String description { get; set; }
    public String id { get; set; }
  }
}
