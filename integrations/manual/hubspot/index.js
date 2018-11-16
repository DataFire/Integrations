let datafire = require('datafire');
//https://www.npmjs.com/package/hubspot
//run: npm install hubspot
const Hubspot = require('hubspot');
let hubspot = module.exports = new datafire.Integration({
    id: "hubspot",
    title: "hubspot",
    description: "Integrate with Hubspot",
});

function getClient(context) {
  return new Hubspot({
    accessToken: context.accounts.hubspot.access_token,
    apiKey: context.accounts.hubspot.api_key,
  })
}

// OAuth 2.0 Authorization Code Grant Type
// Code url: "https://app.hubspot.com/oauth/authorize"
// access Token/refresh token url: "https://api.hubapi.com/oauth/v1/token"
hubspot.security = {
    hubspot: {
        oauth: {
          type: 'oauth2',
          authorizationUrl: 'https://app.hubspot.com/oauth/authorize',
          tokenUrl: 'https://api.hubapi.com/oauth/v1/token',
          scopes: {
            "automation": "Workflows API",
            "business-intelligence": "Analytics APINote: There will be limited functionality with the Analytics API without a paid Marketing subscription.",
            "contacts": "Contacts, Companies, and Deals, along with the associated property APIs, Engagements API, Owners API",
            "content": "All COS APIs, Calendar API, Email and Email Events APIs",
            "e-commerce": "Products API and Line Items API",
            "files": "File Manager API",
            "forms": "Forms API - Note: Forms access also requires the contacts scope.",
            "hubdb": "HubDB API",
            "integration-sync": "Ecommerce Bridge API",
            "reports": "Keywords API",
            "social": "Social Media API",
            "tickets": "Tickets API",
            "timeline": "Timelines API",
            "transactional-email": "Transactional Email API"
          },
        },
        fields: {
            api_key: "Your HubSpot API Key",
            access_token: 'An OAuth access token',
            refresh_token: 'An OAuth refresh token (optional)',
            client_id: 'An OAuth client ID (optional)',
            client_secret: 'An OAuth client secret (optional)',
            redirect_uri: 'The callback URL for your application',
        },
    }
}
hubspot.addAction('getAllCompanies', new datafire.Action({
    inputs: [{
        title: "limit",
        description: "The number of records to return. Defaults to 100, has a maximum value of 250.",
        type: "integer",
        default: 100,
    }, {
        title: "offset",
        description: "Used to page through the results. If there are more records in your portal than the limit= parameter, you will need to use the offset returned in the first request to get the next set of results.",
        type: "string",
        default: ""
    }],
    handler: (input, context) => {
        let companyOptions = {
            limit: input.limit,
            offset: input.offset,
            properties: ["name", "website"] // all avaiable properties to display
        };
        return getClient(context).companies.get(companyOptions);
    }
}));
hubspot.addAction('getCompanyById', new datafire.Action({
    inputs: [{
        title: "id",
        description: "company Id",
        type: "integer",
    }],
    handler: (input, context) => {
        return getClient(context).companies.getById(input.id);
    }
}));
hubspot.addAction('getRecentlyCreatedCompanies', new datafire.Action({
    inputs: [{
        title: "offset",
        description: "Used to page through the results. If there are more records in your portal than the limit= parameter, you will need to use the offset returned in the first request to get the next set of results.",
        type: "string",
        default: ""
    }, {
        title: "count",
        description: "Specifies the number of companies to be returned. Default: 100",
        default: 100,
    }],
    handler: (input, context) => {
        let options = {
            count: input.count,
            offset: input.offset,
        };
        return getClient(context).companies.getRecentlyCreated(options);
    }
}));
hubspot.addAction('getRecentlyModifiedCompanies', new datafire.Action({
    inputs: [{
        title: "offset",
        description: "Used to page through the results. If there are more records in your portal than the limit= parameter, you will need to use the offset returned in the first request to get the next set of results.",
        type: "string",
        default: ""
    }, {
        title: "count",
        description: "Specifies the number of companies to be returned. Default: 100",
        type: "integer",
        default: 100,
    }],
    handler: (input, context) => {
        let options = {
            count: input.count,
            offset: input.offset,
        };
        return getClient(context).companies.getRecentlyModified(options);
    }
}));
hubspot.addAction('getCompanyByDomain', new datafire.Action({
    inputs: [{
        title: "domain",
        description: "domain of the company",
        type: "string",
    },],
    handler: (input, context) => {
        return getClient(context).companies.getByDomain(input.domain);
    }
}));
hubspot.addAction('getComapnyContactsByCompanyId', new datafire.Action({
    inputs: [{
        title: "id",
        description: "your company id",
        type: "integer",
    }, {
        title: "vidOffset",
        description: "The vid to offset the query by.",
        type: 'string',
        default: ""
    }, {
        title: "count",
        description: "Specifies the number of contacts to be returned. Supports a maximum value of 600. Default is 600",
        maximum: 600,
        type: "integer",
        default: 600
    }],
    handler: (input, context) => {
        let options = {
            Count: input.count,
            VidOffset: input.vidOffset
        }
        return getClient(context).companies.getContacts(input.id, options);
    }
}));
hubspot.addAction('getContactIdsByCompanyId', new datafire.Action({
    inputs: [{
        title: "id",
        description: "your company id",
        type: "integer",
    }, {
        title: "vidOffset",
        description: "The vid to offset the query by.",
        type: 'string',
        default: "",
    }, {
        title: "count",
        description: "Specifies the number of contacts to be returned. Supports a maximum value of 600. Default is 600",
        type: "integer",
        default: 600
    }],
    handler: (input, context) => {
        let options = {
            Count: input.count,
            VidOffset: input.vidOffset
        }
        return getClient(context).companies.getContactIds(input.id, options);
    }
}));
 // Company Properties API
hubspot.addAction('getAllCompanyProperties', new datafire.Action({
    handler: (input, context) => {
        return getClient(context).companies.properties.get();
    }
}));
hubspot.addAction('getCompanyPropertyByName', new datafire.Action({
    inputs: [{
        title: "property_name",
        description: "The API name of the property that you wish to see metadata for.",
        type: "string",
    },],
    handler: (input, context) => {
        return getClient(context).companies.properties.getByName(input.property_name);
    }
}));
hubspot.addAction('getCompanyPropertyGroups', new datafire.Action({
    inputs: [{
        title: "include_properties",
        description: "True or False, Returns all of the properties for each company property group.Default is true",
        type: "boolean",
        default: true,
    },],
    handler: (input, context) => {
        return getClient(context).companies.properties.groups.get(input.include_properties);
    }
}));
 // Contacts API  ** All properties to display are selected by default ** this can be changed by adding property array to specfic which feild you want to see. i.e. property: ["firstname", "lastmodifieddate"]
hubspot.addAction('getAllContacts', new datafire.Action({
    inputs: [{
        title: "count",
        description: "This parameter lets you specify the amount of contacts to return in your API call. The default for this parameter (if it isn't specified) is 20 contacts. The maximum amount of contacts you can have returned to you via this parameter is 100.",
        default: 20,
        type: "integer",
    }, {
        title: "contact_offset",
        description: "Used to page through the contacts. Every call to this endpoint will return a vid-offset value. This value is used in the vidOffset parameter of the next call to get the next page of contacts.",
        type: "integer",
        default: 0
    }, {
        title: "property_mode",
        description: "One of “value_only” or “value_and_history” to specify if the current value for a property should be fetched, or the value and all the historical values for that property. Default is “value_only”",
        default: "value_only",
        type: "string",
    }, {
        title: "form_submission_mode",
        description: "One of “all”, “none”, “newest”, “oldest” to specify which form submissions should be fetched. Default is “newest",
        enum: ['all', 'none', 'newest', 'oldest'],
        default: "newest",
        type: "string",
    }, {
        title: "list_memberships",
        description: "	Boolean true or false to indicate whether current list memberships should be fetched for the contact. Default is false",
        default: false,
        type: "boolean",
    }],
    handler: (input, context) => {
        let options = {
            count: input.count,
            vidOffset: input.contact_offset,
            propertyMode: input.propertyMode,
            formSubmissionMode: input.form_submission_mode,
            showListMemberships: input.list_memberships
        }
        return getClient(context).contacts.get(options);
    }
}));
hubspot.addAction('getContactByEmail', new datafire.Action({
    inputs: [{
        title: "email",
        description: "The email address for the contact that you're searching for.",
        type: "string",
    }],
    handler: (input, context) => {
        return getClient(context).contacts.getByEmail(input.email);
    }
}));
hubspot.addAction('getContactById', new datafire.Action({
    inputs: [{
        title: "id",
        description: "Unique identifier for a particular contact. In HubSpot's contact system, contact ID's are called vid",
        type: 'integer',
    }],
    handler: (input, context) => {
        return getClient(context).contacts.getById(input.id);
    }
}));
hubspot.addAction('getContactByToken', new datafire.Action({
    inputs: [{
        title: "utk",
        description: "The user token (HubSpot cookie) for the contact that you're searching for.",
        type: "string",
    }],
    handler: (input, context) => {
        return getClient(context).contacts.getByToken(input.utk);
    }
}));
hubspot.addAction('getRecentlyCreatedContact', new datafire.Action({
    inputs: [{
        title: "property_mode",
        description: "One of “value_only” or “value_and_history” to specify if the current value for a property should be fetched, or the value and all the historical values for that property. Default is value_and_history",
        default: "value_and_history",
        type: "string",
    }, {
        title: "form_submission_mode",
        description: "One of “all”, “none”, “newest”, “oldest” to specify which form submissions should be fetched. Default is all",
        default: "all",
        type: "string",
    }, {
        title: "list_memberships",
        description: "	Boolean true or false to indicate whether current list memberships should be fetched for the contact. Default is true",
        default: true,
        type: "boolean",
    }],
    handler: (input, context) => {
        let options = {
            propertyMode: input.property_mode,
            formSubmissionMode: input.form_submission_mode,
            showListMemberships: input.list_memberships,
        };
        return getClient(context).contacts.getRecentlyCreated(options);
    }
}));
hubspot.addAction('getRecentlyModifiedContacts', new datafire.Action({
    inputs: [{
        title: "count",
        description: "This parameter lets you specify the amount of contacts to return in your API call. The default for this parameter (if it isn't specified) is 20 contacts. The maximum amount of contacts you can have returned to you via this parameter is 100.",
        default: 20,
        type: "integer",
    }, {
        title: "time_offset",
        description: "Used in conjunction with the vidOffset paramter to page through the recent contacts. Every call to this endpoint will return a time-offset value. This value is used in the timeOffset parameter of the next call to get the next page of contacts.",
        type: "string",
        default: ""
    }, {
        title: "contact_offset",
        description: "Used in conjunction with the timeOffset paramter to page through the recent contacts. Every call to this endpoint will return a vid-offset value. This value is used in the vidOffset parameter of the next call to get the next page of contacts.",
        type: "string",
        default: ""
    }, {
        title: "property_mode",
        description: "One of “value_only” or “value_and_history” to specify if the current value for a property should be fetched, or the value and all the historical values for that property. Default is “value_only”",
        default: "value_only",
        type: "string",
    }, {
        title: "form_submission_mode",
        description: "One of “all”, “none”, “newest”, “oldest” to specify which form submissions should be fetched. Default is “newest",
        default: "newest",
        type: "string",
    }, {
        title: "list_memberships",
        description: "	Boolean true or false to indicate whether current list memberships should be fetched for the contact. Default is false",
        default: false,
        type: "boolean",
    }],
    handler: (input, context) => {
        let options = {
            count: input.count,
            timeOffset: input.time_offset,
            vidOffset: input.contact_offset,
            propertyMode: input.propertyMode,
            formSubmissionMode: input.form_submission_mode,
            showListMemberships: input.list_memberships
        }
        return getClient(context).contacts.getRecentlyModified(options);
    }
}));
hubspot.addAction('getAllContactProperties', new datafire.Action({
    handler: (input, context) => {
        return getClient(context).contacts.properties.get();
    }
}));
hubspot.addAction('getContactPropertiesByName', new datafire.Action({
    inputs: [{
        title: "property_name",
        description: "Contact property name",
        type: "string",
    }],
    handler: (input, context) => {
        return getClient(context).contacts.properties.get(input.name);
    }
}));
