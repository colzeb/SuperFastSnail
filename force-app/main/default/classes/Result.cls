public with sharing class Result {
  public Result() {
    MyClass myClass = new MyClass();
    myClass.name = 'MyClass';
    myClass.description = 'MyClass description';
    myClass.id = 'MyClass id';
    String preety = JSON.serializePretty(myClass);
    System.debug(preety);
    System.debug(LoggingLevel.DEBUG, myClass);
  }

  private with sharing class MyClass implements Comparable {
    public String name { get; set; }
    public String description { get; set; }
    public String id { get; set; }

    public Integer compareTo(Object o) {
      MyClass other = (MyClass) o;
      return this.name.compareTo(other.name);
    }

    public override String toString() {
      return 'MyClass: ' + name + ' ' + description + ' ' + id;
    }
  }
}
