## Hubspot Integraiton

## Description
able to retrive data from Company API and Contacts API
``` 
npm install hubspot
```

## Action:
## Company
  - **`getAllCompanies`**: Parameters
    -  **limit**: `Required`: The number of records to return. Defaults to 100, has a maximum value of 250.
    -  **offset**: `Optional`: Used to page through the results. If there are more records in your portal than the limit= parameter, you will need to use the offset returned in the first request to get the next set of results.
    
  - **`getCompanyById`**: Parameters
    -  **Id**: `Required`: company Id
    
  - **`getRecentlyCreatedCompanies`**: Parameters
    -  **count**: `Required`: Specifies the number of companies to be returned. Default: 100
    -  **offset**: `Optional`: Used to page through the results. If there are more records in your portal than the limit= parameter, you will need to use the offset returned in the first request to get the next set of results.

  - **`getRecentlyModifiedCompanies`**: Parameters
    -  **count**: `Required`: Specifies the number of companies to be returned. Default: 100
    -  **offset**: `Optional`: Used to page through the results. If there are more records in your portal than the limit= parameter, you will need to use the offset returned in the first request to get the next set of results.
    
  - **`getCompanyByDomain`**: Parameters
    -  **domain**: `Required`: company domain
    
  - **`getComapnyContacts`**: Parameters
    -  **company_Id**: `Required`: company id
    -  **vidOffset**: `Optional`: The vid to offset the query by
    -  **count**: "Required: Specifies the number of contacts to be returned. Supports a maximum value of 600.
    
  - **`getContactIds`**: Parameters
    -  **company_Id**: `Required`: company id
    -  **vidOffset**: `Optional`: The vid to offset the query by
    -  **count**: "Required: Specifies the number of contacts to be returned. Supports a maximum value of 600.

  - **`getAllCompanyProperties`**: Parameters
    - **None**
    
  - **`getCompanyPropertyByName`**: Parameters
    -  **property_name**: `Required`: property name

  - **`getCompanyPropertyGroups`**: Parameters
    -  **include_properties**: `Required`: True or False, Returns all of the properties for each company property group.
    
## Contacts
  - **`getAllContacts`**: Parameters
     - **count**: `Optional` This parameter lets you specify the amount of contacts to return in your API call. The default for this parameter (if it isn't specified) is 20 contacts. The maximum amount of contacts you can have returned to you via this parameter is 100.The number of records to return. Defaults to 100, has a maximum value of 250.
    -  **contact_offset**: `Optional`: Used to page through the contacts. Every call to this endpoint will return a vid-offset value. This value is used in the vidOffset parameter of the next call to get the next page of contacts.
    -  **property_mode**: `Optional` :One of “value_only” or “value_and_history” to specify if the current value for a property should be fetched, or the value and all the historical values for that property. Default is value_only
    -  **form_submission_mode**: `Optional` One of “all”, “none”, “newest”, “oldest” to specify which form submissions should be fetched. Default is “newest
    -  **list_memberships** `Optional`: 	Boolean true or false to indicate whether current list memberships should be fetched for the contact. Default is false

  - **`getContactByEmail`**: Parameters
    -  **email**: `Required`: The email address for the contact that you're searching for.
    
  - **`getContactByEmail`**: Parameters
    -  **id**: `Required`: Unique identifier for a particular contact. In HubSpot's contact system, contact ID's are called vid

  - **`getContactByToken`**: Parameters
    -  **utk**: `Required`: The user token (HubSpot cookie) for the contact that you're searching for


  - **`getRecentlyCreatedContact`**: Parameters
    -  **property_mode**: `Optional` :One of “value_only” or “value_and_history” to specify if the current value for a property should be fetched, or the value and all the historical values for that property. Default is value_and_history
    -  **form_submission_mode**: `Optional` One of “all”, “none”, “newest”, “oldest” to specify which form submissions should be fetched. Default is all
    -  **list_memberships** `Optional`: Boolean true or false to indicate whether current list memberships should be fetched for the contact. Default is true
    
  - **`getRecentlyModifiedContacts`**: Parameters
     - **count**: `Optional` This parameter lets you specify the amount of contacts to return in your API call. The default for this parameter (if it isn't specified) is 20 contacts. The maximum amount of contacts you can have returned to you via this parameter is 100
    -  **time_offset**: `Optional`: Used in conjunction with the vidOffset paramter to page through the recent contacts. Every call to this endpoint will return a time-offset value. This value is used in the timeOffset parameter of the next call to get the next page of contacts.
    -  **contact_offset**: `Optional`: Used in conjunction with the timeOffset paramter to page through the recent contacts. Every call to this endpoint will return a vid-offset value. This value is used in the vidOffset parameter of the next call to get the next page of contacts.
    -  **property_mode**: `Optional` :One of “value_only” or “value_and_history” to specify if the current value for a property should be fetched, or the value and all the historical values for that property. Default is “value_only”
    -  **form_submission_mode**: `Optional` One of “all”, “none”, “newest”, “oldest” to specify which form submissions should be fetched. Default is “newest"
    -  **list_memberships** `Optional`: Boolean true or false to indicate whether current list memberships should be fetched for the contact. Default is false

  - **`getContactById`**: Parameters
    -  **id**: `Required`: Unique identifier for a particular contact. In HubSpot's contact system, contact ID's are called vid

  - **`getAllContactProperties`**: Parameters
    -  **None**
    
  - **`getContactPropertiesByName`**: Parameters
    -  **name**: `Required`: Contact property name