@isTest
public class ContactControllerTest {
    
    @isTest
    public static void Test1() {

        Account testAccount = new Account();
        testAccount.Name='Test Account' ;
        insert testAccount;
        ID actId=testAccount.Id;

        List<Contact> ctct = new List<Contact>();
        for (Integer i=0;i<10;i++){
            ctct.add(new Contact(LastName='test'+i,AccountId=actId));
        }
        insert ctct;

        List<Contact> getContacts = ContactController.getRelatedContacts(actId);

        System.assertEquals('test1', getContacts[0].Name);

    }
}
