public with sharing class loggedInUserController {
    public loggedInUserController() {

    }

    @AuraEnabled(cacheable=true)
    public static User getUserInfo(){
        try {
            Id userId = UserInfo.getUserId();
            return [select id, Name, UserName from User where id = :userId limit 1];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}