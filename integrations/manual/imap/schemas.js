const schemas = module.exports = {};

schemas.Box = {
  type: 'object',
  properties: {
    id: {type: 'string'},
    attribs: {type: 'array', items: {type: 'string'}},
    delimiter: {type: 'string'},
    children: {
      type: 'array',
      items: {$ref: '#/definitions/Box'},
    }
  }
}

schemas.MessageSource = {
  title: 'messages',
  type: ['array', 'string'],
  description: 'A message UID, a range of UIDs (e.g. "2504:2507"), or an array of UIDs and ranges',
  items: {type: 'string'},
}

schemas.IsSequence = {
  title: 'isSequence',
  type: 'boolean',
  description: "If true, treat the message IDs/ranges as indexes in the specified box, rather than as UIDs",
  default: false,
}

schemas.Message = {
  type: 'object',
  properties: {
    body: {type: 'string'},
    attributes: {
      type: 'object',
      additionalProperties: true,
      properties: {
        date: {type: 'string', format: 'date-time'},
        flags: {type: 'array', items: {type: 'string'}},
        uid: {type: 'integer'},
      }
    }
  }
}
schemas.BoxInput = {title: 'box', type: 'string', default: 'INBOX'};

schemas.SearchCriteria = {
  type: 'object',
  title: 'query',
  properties: {
    bcc: {type: 'string'},
    cc: {type: 'string'},
    from: {type: 'string'},
    to: {type: 'string'},
    subject: {type: 'string'},
    body: {type: 'string'},
    text: {type: 'string'},
    keyword: {type: 'string'},
    header: {
      type: 'object',
      properties: {
        name: {type: 'string'},
        value: {type: 'string'},
      }
    },
    before: {type: 'string', format: 'date-time'},
    on: {type: 'string', format: 'date-time'},
    since: {type: 'string', format: 'date-time'},
    sentBefore: {type: 'string', format: 'date-time'},
    sentOn: {type: 'string', format: 'date-time'},
    sentSince: {type: 'string', format: 'date-time'},
    flags: {
      type: 'array',
      description: "A list of flags to search for",
      items: {
        type: 'string',
        enum: [
          'ALL',
          'ANSWERED',
          'DELETED',
          'DRAFT',
          'FLAGGED',
          'NEW',
          'SEEN',
          'RECENT',
          'OLD',
          'UNANSWERED',
          'UNDELETED',
          'UNDRAFT',
          'UNFLAGGED',
          'UNSEEN',
        ]
      }
    }
  }
}
