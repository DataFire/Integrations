let datafire = require('datafire');
//https://www.npmjs.com/package/hubspot
//run: npm install hubspot
const hub = require('hubspot');

// OAuth 2.0 Authorization Code Grant Type
// Code url: "https://app.hubspot.com/oauth/authorize"
// access Token/refresh token url: "https://api.hubapi.com/oauth/v1/token"
hubspot.security = {
  hubspot: {
    fields: {
      access_token: 'An OAuth access token',
      refresh_token: 'An OAuth refresh token (optional)',
      client_id: 'An OAuth client ID (optional)',
      client_secret: 'An OAuth client secret (optional)',
      redirect_uri: 'The callback URL for your application',
    },
  }
}

let hubspot = module.exports = new Integration({
  id: "hubspot",
  title: "hubspot",
  description: "Integrate with Hubspot",
});


hub.addAction('getAllCompanies', new datafire.Action({
  inputs: [{
    name: "limit",
    description: "The number of records to return. Defaults to 100, has a maximum value of 250.",
    type: "Integer",
    default: 100,
  }, {
    name: "offset",
    description: "Used to page through the results. If there are more records in your portal than the limit= parameter, you will need to use the offset returned in the first request to get the next set of results.",
    type: "string",
    default: ""
  }],
  handler: input => {
    let options = {
      limit: input.limit,
      offset: input.offset,
      properties: ["name", "website"] // all avaiable properties to display
    };
    return hub.companies.get(companyOptions);
  }
}));

hub.addAction('getCompanyById', new datafire.Action({
  inputs: [{
    name: "id",
    description: "company Id",
    type: "Integer",
  }],
  handler: input => {
    return hub.companies.getById(input.id);
  }
}));

hub.addAction('getRecentlyCreatedCompanies', new datafire.Action({
  inputs: [{
    name: "offset",
    description: "Used to page through the results. If there are more records in your portal than the limit= parameter, you will need to use the offset returned in the first request to get the next set of results.",
    type: "string",
    default: ""
  }, {
    name: "count",
    description: "Specifies the number of companies to be returned. Default: 100",
    default: 100,
  }],
  handler: input => {
    let options = {
      count: input.count,
      offset: input.offset,
    };
    return hub.companies.getRecentlyCreated(options);
  }
}));

hub.addAction('getRecentlyModifiedCompanies', new datafire.Action({
  inputs: [{
    name: "offset",
    description: "Used to page through the results. If there are more records in your portal than the limit= parameter, you will need to use the offset returned in the first request to get the next set of results.",
    type: "string",
    default: ""
  }, {
    name: "count",
    description: "Specifies the number of companies to be returned. Default: 100",
    type: "string",
    default: 100,
  }],
  handler: input => {
    let options = {
      count: input.count,
      offset: input.offset,
    };
    return hub.companies.getRecentlyModified(options);
  }
}));


hub.addAction('getCompanyByDomain', new datafire.Action({
  inputs: [{
    name: "domain",
    description: "domain of the company",
    type: "string",
  }, ],
  handler: input => {
    return hub.companies.getByDomain(input.domain);
  }
}));

hub.addAction('getComapnyContacts', new datafire.Action({
  inputs: [{
    name: "company_Id",
    description: "your company id",
    type: "Integer",
  }, {
    name: "vidOffset",
    description: "The vid to offset the query by.",
    type: 'Integer',
    default: ""
  }, {
    name: "count",
    description: "Specifies the number of contacts to be returned. Supports a maximum value of 600.",
    type: "Integer"
  }],
  handler: input => {
    let options = {
      Count: input.count,
      VidOffset: input.vidOffset
    }
    return hub.companies.getContacts(input.company_Id, options);
  }
}));

hub.addAction('getContactIds', new datafire.Action({
  inputs: [{
    name: "company_Id",
    description: "your company id",
    type: "Integer",
  }, {
    name: "vidOffset",
    description: "The vid to offset the query by.",
    type: 'Integer',
    default: ""
  }, {
    name: "count",
    description: "Specifies the number of contacts to be returned. Supports a maximum value of 600.",
    type: "Integer"
  }],
  handler: input => {
    let options = {
      Count: input.count,
      VidOffset: input.vidOffset
    }
    return hub.companies.getContactIds(input.company_Id, options);
  }
}));

// Company Properties API


hub.addAction('getAllCompanyProperties', new datafire.Action({
  handler: input => {
    return hub.companies.properties.get();
  }
}));

hub.addAction('getCompanyPropertyByName', new datafire.Action({
  inputs: [{
    name: "property_name",
    description: "The API name of the property that you wish to see metadata for.",
    type: "string",
  }, ],
  handler: input => {
    return hub.companies.properties.getByName(input.property_name);
  }
}));

hub.addAction('getCompanyPropertyGroups', new datafire.Action({
  inputs: [{
    name: "include_properties",
    description: "True or False, Returns all of the properties for each company property group.",
    type: "boolean",
  }, ],
  handler: input => {
    return hub.companies.properties.groups.get(input.include_properties);
  }
}));

// Contacts API  ** All properties to display are selected by default ** this can be changed by adding property array to specfic which feild you want to see. i.e. property: ["firstname", "lastmodifieddate"]

hub.addAction('getAllContacts', new datafire.Action({
  inputs: [{
    name: "count",
    description: "This parameter lets you specify the amount of contacts to return in your API call. The default for this parameter (if it isn't specified) is 20 contacts. The maximum amount of contacts you can have returned to you via this parameter is 100.",
    default: 20,
    type: "Integer",
  }, {
    name: "contact_offset",
    description: "Used to page through the contacts. Every call to this endpoint will return a vid-offset value. This value is used in the vidOffset parameter of the next call to get the next page of contacts.",
    type: "Integer",
    default: ""
  }, {
    name: "property_mode",
    description: "One of “value_only” or “value_and_history” to specify if the current value for a property should be fetched, or the value and all the historical values for that property. Default is “value_only”",
    default: "value_only",
    type: "string",
  }, {
    name: "form_submission_mode",
    description: "One of “all”, “none”, “newest”, “oldest” to specify which form submissions should be fetched. Default is “newest",
    default: "newest",
    type: "string",
  }, {
    name: "list_memberships",
    description: "	Boolean true or false to indicate whether current list memberships should be fetched for the contact. Default is false",
    default: "false",
    type: "boolean",
  }],
  handler: input => {
    let options = {
      count: input.count,
      vidOffset: input.contact_offset,
      propertyMode: input.propertyMode,
      formSubmissionMode: input.form_submission_mode,
      showListMemberships: input.list_memberships
    }
    return hub.contacts.get(options);
  }
}));


hub.addAction('getContactByEmail', new datafire.Action({
  inputs: [{
    name: "email",
    description: "The email address for the contact that you're searching for.",
    type: "string",
  }],
  handler: input => {
    return hub.contacts.getByEmail(input.email);
  }
}));

hub.addAction('getContactById', new datafire.Action({
  inputs: [{
    name: "id",
    description: "Unique identifier for a particular contact. In HubSpot's contact system, contact ID's are called vid",
    type: "string",
  }],
  handler: input => {
    return hub.contacts.getById(input.id);
  }
}));

hub.addAction('getContactByToken', new datafire.Action({
  inputs: [{
    name: "utk",
    description: "The user token (HubSpot cookie) for the contact that you're searching for.",
    type: "string",
  }],
  handler: input => {
    return hub.contacts.getByToken(input.utk);
  }
}));

hub.addAction('getRecentlyCreatedContact', new datafire.Action({
  inputs: [{
    name: "property_mode",
    description: "One of “value_only” or “value_and_history” to specify if the current value for a property should be fetched, or the value and all the historical values for that property. Default is value_and_history",
    default: "value_and_history",
    type: "string",
  }, {
    name: "form_submission_mode",
    description: "One of “all”, “none”, “newest”, “oldest” to specify which form submissions should be fetched. Default is all",
    default: "all",
    type: "string",
  }, {
    name: "list_memberships",
    description: "	Boolean true or false to indicate whether current list memberships should be fetched for the contact. Default is true",
    default: true,
    type: "boolean",
  }],
  handler: input => {
    let options = {
      propertyMode: input.property_mode,
      formSubmissionMode: input.form_submission_mode,
      showListMemberships: input.list_memberships,
    };
    return hub.contacts.getRecentlyCreated(options);
  }
}));

hub.addAction('getRecentlyModifiedContacts', new datafire.Action({
  inputs: [{
    name: "count",
    description: "This parameter lets you specify the amount of contacts to return in your API call. The default for this parameter (if it isn't specified) is 20 contacts. The maximum amount of contacts you can have returned to you via this parameter is 100.",
    default: 20,
    type: "Integer",
  }, {
    name: "time_offset",
    description: "Used in conjunction with the vidOffset paramter to page through the recent contacts. Every call to this endpoint will return a time-offset value. This value is used in the timeOffset parameter of the next call to get the next page of contacts.",
    type: "Integer",
    default: ""
  }, {
    name: "contact_offset",
    description: "Used in conjunction with the timeOffset paramter to page through the recent contacts. Every call to this endpoint will return a vid-offset value. This value is used in the vidOffset parameter of the next call to get the next page of contacts.",
    type: "Integer",
    default: ""
  }, {
    name: "property_mode",
    description: "One of “value_only” or “value_and_history” to specify if the current value for a property should be fetched, or the value and all the historical values for that property. Default is “value_only”",
    default: "value_only",
    type: "string",
  }, {
    name: "form_submission_mode",
    description: "One of “all”, “none”, “newest”, “oldest” to specify which form submissions should be fetched. Default is “newest",
    default: "newest",
    type: "string",
  }, {
    name: "list_memberships",
    description: "	Boolean true or false to indicate whether current list memberships should be fetched for the contact. Default is false",
    default: false,
    type: "boolean",
  }],
  handler: input => {
    let options = {
      count: input.count,
      timeOffset: input.time_offset,
      vidOffset: input.contact_offset,
      propertyMode: input.propertyMode,
      formSubmissionMode: input.form_submission_mode,
      showListMemberships: input.list_memberships
    }
    return hub.contacts.getRecentlyModified(options);
  }
}));

hub.addAction('getContactById', new datafire.Action({
  inputs: [{
    name: "id",
    description: "Unique identifier for a particular contact. In HubSpot's contact system, contact ID's are called vid",
    type: "string",
  }],
  handler: input => {
    return hub.contacts.getById(input.id);
  }
}));

hub.addAction('getAllContactProperties', new datafire.Action({
  handler: input => {
    return hub.contacts.properties.get(cb);
  }
}));

hub.addAction('getContactPropertiesByName', new datafire.Action({
  inputs: [{
    name: "name",
    description: "Contact property name",
    type: "string",
  }],
  handler: input => {
    return hub.contacts.properties.get(input.name);
  }
}));