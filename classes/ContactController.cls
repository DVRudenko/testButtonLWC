public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getRelatedContacts(Id accountId) {
        
        if (!String.isBlank(accountId)){

        return [
            SELECT FirstName, LastName, CreatedDate, LastModifiedDate
            FROM Contact
            WHERE AccountId = :accountId
            WITH SECURITY_ENFORCED
        ];
        } else {
            return new List<Contact> ();
        }
    }
}
