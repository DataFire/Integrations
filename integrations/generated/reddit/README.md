# @datafire/reddit
Reddit API

## Operation: oauthCallback


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "code": {
      "title": "code",
      "type": "string"
    }
  },
  "required": [
    "code"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: oauthRefresh


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: sort.get
This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 100)"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    },
    "t": {
      "type": "string",
      "description": "one of (hour, day, week, month, year, all)"
    },
    "sort": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: wiki.page.get
Return the content of a wiki page

If v is given, show the wiki page as it was at that version
If both v and v2 are given, show a diff of the two

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "string",
      "description": "the name of an existing wiki page"
    },
    "v": {
      "type": "string",
      "description": "a wiki revision ID"
    },
    "v2": {
      "type": "string",
      "description": "a wiki revision ID"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: wiki.settings.page.post
Update the permissions and visibility of wiki page

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "listed": {
      "type": "string",
      "description": "boolean value"
    },
    "page": {
      "type": "string",
      "description": "the name of an existing wiki page"
    },
    "permlevel": {
      "type": "string",
      "description": "an integer"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: wiki.settings.page.get
Retrieve the current permission settings for page

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "string",
      "description": "the name of an existing wiki page"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: wiki.revisions.page.get
Retrieve a list of revisions of this wiki page

This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 100)"
    },
    "page": {
      "type": "string",
      "description": "the name of an existing wiki page"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: wiki.revisions.get
Retrieve a list of recently changed wiki pages in this subreddit

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 100)"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: wiki.pages.get
Retrieve a list of wiki pages in this subreddit

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: wiki.discussions.page.get
Retrieve a list of discussions about this wiki page

This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 100)"
    },
    "page": {
      "type": "string",
      "description": "the name of an existing wiki page"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: user.username.where.get
This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 100)"
    },
    "show": {
      "type": "string",
      "description": "one of (given)"
    },
    "sort": {
      "type": "string",
      "description": "one of (hot, new, top, controversial)"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    },
    "t": {
      "type": "string",
      "description": "one of (hour, day, week, month, year, all)"
    },
    "username": {
      "type": "string",
      "description": "the name of an existing user"
    },
    "where": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: user.username.about.get
Return information about the user, including karma and gold status.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "username": {
      "type": "string",
      "description": "the name of an existing user"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: subreddits.where.get
Get all subreddits.

The where parameter chooses the order in which the subreddits are
displayed.  popular sorts on the activity of the subreddit and the
position of the subreddits can shift around. new sorts the subreddits
based on their creation date, newest first.

This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 100)"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    },
    "where": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: subreddits.search.get
Search subreddits by title and description.

This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 100)"
    },
    "q": {
      "type": "string",
      "description": "a search query"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sort": {
      "type": "string",
      "description": "one of (relevance, activity)"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: subreddits.mine.where.get
Get subreddits the user has a relationship with.

The where parameter chooses which subreddits are returned as follows:


subscriber - subreddits the user is subscribed to
contributor - subreddits the user is an approved submitter in
moderator - subreddits the user is a moderator of


See also: /api/subscribe,
/api/friend, and
/api/accept_moderator_invite.

This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 100)"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    },
    "where": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: stylesheet.get
Redirect to the subreddit's stylesheet if one exists.

See also: /api/subreddit_stylesheet.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: sticky.get
Redirect to one of the posts stickied in the current subreddit

The "num" argument can be used to select a specific sticky, and will
default to 1 (the top sticky) if not specified.
Will 404 if there is not currently a sticky post in this subreddit.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "num": {
      "type": "string",
      "description": "an integer between 1 and 2 (default: 1)"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: sidebar.get
Get the sidebar for the current subreddit

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: search.get
Search links page.

This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "include_facets": {
      "type": "string",
      "description": "boolean value"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 100)"
    },
    "q": {
      "type": "string",
      "description": "a string no longer than 512 characters"
    },
    "restrict_sr": {
      "type": "string",
      "description": "boolean value"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sort": {
      "type": "string",
      "description": "one of (relevance, hot, top, new, comments)"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    },
    "syntax": {
      "type": "string",
      "description": "one of (cloudsearch, lucene, plain)"
    },
    "t": {
      "type": "string",
      "description": "one of (hour, day, week, month, year, all)"
    },
    "type": {
      "type": "string",
      "description": "(optional) comma-delimited list of result types (sr, link)"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: rules.get
Get the rules for the current subreddit

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: related.article.get
Related page: performs a search using title of article as
the search query.

This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "article": {
      "type": "string",
      "description": "The base 36 ID of a Link"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 100)"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: random.get
The Serendipity button

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.sort.get
This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 100)"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    },
    "t": {
      "type": "string",
      "description": "one of (hour, day, week, month, year, all)"
    },
    "subreddit": {
      "type": "string"
    },
    "sort": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.wiki.page.get
Return the content of a wiki page

If v is given, show the wiki page as it was at that version
If both v and v2 are given, show a diff of the two

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "string",
      "description": "the name of an existing wiki page"
    },
    "v": {
      "type": "string",
      "description": "a wiki revision ID"
    },
    "v2": {
      "type": "string",
      "description": "a wiki revision ID"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.wiki.settings.page.post
Update the permissions and visibility of wiki page

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "listed": {
      "type": "string",
      "description": "boolean value"
    },
    "page": {
      "type": "string",
      "description": "the name of an existing wiki page"
    },
    "permlevel": {
      "type": "string",
      "description": "an integer"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.wiki.settings.page.get
Retrieve the current permission settings for page

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "string",
      "description": "the name of an existing wiki page"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.wiki.revisions.page.get
Retrieve a list of revisions of this wiki page

This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 100)"
    },
    "page": {
      "type": "string",
      "description": "the name of an existing wiki page"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.wiki.revisions.get
Retrieve a list of recently changed wiki pages in this subreddit

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 100)"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.wiki.pages.get
Retrieve a list of wiki pages in this subreddit

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.wiki.discussions.page.get
Retrieve a list of discussions about this wiki page

This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 100)"
    },
    "page": {
      "type": "string",
      "description": "the name of an existing wiki page"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.stylesheet.get
Redirect to the subreddit's stylesheet if one exists.

See also: /api/subreddit_stylesheet.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.sticky.get
Redirect to one of the posts stickied in the current subreddit

The "num" argument can be used to select a specific sticky, and will
default to 1 (the top sticky) if not specified.
Will 404 if there is not currently a sticky post in this subreddit.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "num": {
      "type": "string",
      "description": "an integer between 1 and 2 (default: 1)"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.sidebar.get
Get the sidebar for the current subreddit

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.search.get
Search links page.

This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "include_facets": {
      "type": "string",
      "description": "boolean value"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 100)"
    },
    "q": {
      "type": "string",
      "description": "a string no longer than 512 characters"
    },
    "restrict_sr": {
      "type": "string",
      "description": "boolean value"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sort": {
      "type": "string",
      "description": "one of (relevance, hot, top, new, comments)"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    },
    "syntax": {
      "type": "string",
      "description": "one of (cloudsearch, lucene, plain)"
    },
    "t": {
      "type": "string",
      "description": "one of (hour, day, week, month, year, all)"
    },
    "type": {
      "type": "string",
      "description": "(optional) comma-delimited list of result types (sr, link)"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.rules.get
Get the rules for the current subreddit

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.random.get
The Serendipity button

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.new.get
This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 100)"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.hot.get
This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 100)"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.comments.article.get
Get the comment tree for a given Link article.

If supplied, comment is the ID36 of a comment in the comment tree for
article. This comment will be the (highlighted) focal point of the
returned view and context will be the number of parents shown.

depth is the maximum depth of subtrees in the thread.

limit is the maximum number of comments to return.

See also: /api/morechildren and
/api/comment.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "article": {
      "type": "string",
      "description": "ID36 of a link"
    },
    "comment": {
      "type": "string",
      "description": "(optional) ID36 of a comment"
    },
    "context": {
      "type": "string",
      "description": "an integer between 0 and 8"
    },
    "depth": {
      "type": "string",
      "description": "(optional) an integer"
    },
    "limit": {
      "type": "string",
      "description": "(optional) an integer"
    },
    "showedits": {
      "type": "string",
      "description": "boolean value"
    },
    "showmore": {
      "type": "string",
      "description": "boolean value"
    },
    "sort": {
      "type": "string",
      "description": "one of (confidence, top, new, hot, controversial, old, random, qa)"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.api.wiki.revert.post
Revert a wiki page to revision

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "string",
      "description": "the name of an existing wiki page"
    },
    "revision": {
      "type": "string",
      "description": "a wiki revision ID"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.api.wiki.hide.post
Toggle the public visibility of a wiki page revision

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "string",
      "description": "the name of an existing wiki page"
    },
    "revision": {
      "type": "string",
      "description": "a wiki revision ID"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.api.wiki.edit.post
Edit a wiki page

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "content": {
      "type": "string"
    },
    "page": {
      "type": "string",
      "description": "the name of an existing page or a new page to create"
    },
    "previous": {
      "type": "string",
      "description": "the starting point revision for this edit"
    },
    "reason": {
      "type": "string",
      "description": "a string up to 256 characters long, consisting of printable characters."
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.api.wiki.alloweditor.act.post
Allow/deny username to edit this wiki page

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "act": {
      "type": "string",
      "description": "one of (del, add)"
    },
    "page": {
      "type": "string",
      "description": "the name of an existing wiki page"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "username": {
      "type": "string",
      "description": "the name of an existing user"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.api.upload_sr_img.post
Add or replace a subreddit image, custom header logo, custom mobile
icon, or custom mobile banner.


If the upload_type value is img, an image for use in the
subreddit stylesheet is uploaded with the name specified in name.
If the upload_type value is header then the image uploaded will
be the subreddit's new logo and name will be ignored.
If the upload_type value is icon then the image uploaded will be
the subreddit's new mobile icon and name will be ignored.
If the upload_type value is banner then the image uploaded will
be the subreddit's new mobile banner and name will be ignored.


For backwards compatibility, if upload_type is not specified, the
header field will be used instead:


If the header field has value 0, then upload_type is img.
If the header field has value 1, then upload_type is header.


The img_type field specifies whether to store the uploaded image as a
PNG or JPEG.

Subreddits have a limited number of images that can be in use at any
given time. If no image with the specified name already exists, one of
the slots will be consumed.

If an image with the specified name already exists, it will be
replaced.  This does not affect the stylesheet immediately, but will
take effect the next time the stylesheet is saved.

See also: /api/delete_sr_img,
/api/delete_sr_header,
/api/delete_sr_icon, and
/api/delete_sr_banner.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "file": {
      "type": "string",
      "description": "file upload with maximum size of 500 KiB"
    },
    "formid": {
      "type": "string",
      "description": "(optional) can be ignored"
    },
    "header": {
      "type": "string",
      "description": "an integer between 0 and 1"
    },
    "img_type": {
      "type": "string",
      "description": "one of png or jpg (default: png)"
    },
    "name": {
      "type": "string",
      "description": "a valid subreddit image name"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "upload_type": {
      "type": "string",
      "description": "one of (img, header, icon, banner)"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.api.unfriend.post
Remove a relationship between a user and another user or subreddit

The user can either be passed in by name (nuser)
or by fullname (iuser).  If type is friend or enemy,
'container' MUST be the current user's fullname;
for other types, the subreddit must be set
via URL (e.g., /r/funny/api/unfriend)

OAuth2 use requires appropriate scope based
on the 'type' of the relationship:


moderator: modothers
moderator_invite: modothers
contributor: modcontributors
banned: modcontributors
muted: modcontributors
wikibanned: modcontributors and modwiki
wikicontributor: modcontributors and modwiki
friend: Use /api/v1/me/friends/{username}
enemy: privatemessages


Complement to POST_friend

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "container": {
      "type": "string"
    },
    "id": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "name": {
      "type": "string",
      "description": "the name of an existing user"
    },
    "type": {
      "type": "string",
      "description": "one of (friend, enemy, moderator, moderator_invite, contributor, banned, muted, wikibanned, wikicontributor)"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.api.subreddit_stylesheet.post
Update a subreddit's stylesheet.

op should be save to update the contents of the stylesheet.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "op": {
      "type": "string",
      "description": "one of (save, preview)"
    },
    "reason": {
      "type": "string",
      "description": "a string up to 256 characters long, consisting of printable characters."
    },
    "stylesheet_contents": {
      "type": "string",
      "description": "the new stylesheet content"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.api.submit_text.get
Get the submission text for the subreddit.

This text is set by the subreddit moderators and intended to be
displayed on the submission form.

See also: /api/site_admin.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.api.setpermissions.post


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "name": {
      "type": "string",
      "description": "the name of an existing user"
    },
    "permissions": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.api.setflairenabled.post


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "flair_enabled": {
      "type": "string",
      "description": "boolean value"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.api.selectflair.post


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "flair_template_id": {
      "type": "string"
    },
    "link": {
      "type": "string",
      "description": "a fullname of a link"
    },
    "name": {
      "type": "string",
      "description": "a user by name"
    },
    "text": {
      "type": "string",
      "description": "a string no longer than 64 characters"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.api.info.get
Return a listing of things specified by their fullnames.

Only Links, Comments, and Subreddits are allowed.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "A comma-separated list of thing fullnames"
    },
    "url": {
      "type": "string",
      "description": "a valid URL"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.api.friend.post
Create a relationship between a user and another user or subreddit

OAuth2 use requires appropriate scope based
on the 'type' of the relationship:


moderator: Use "moderator_invite"
moderator_invite: modothers
contributor: modcontributors
banned: modcontributors
muted: modcontributors
wikibanned: modcontributors and modwiki
wikicontributor: modcontributors and modwiki
friend: Use /api/v1/me/friends/{username}
enemy: Use /api/block


Complement to POST_unfriend

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "ban_message": {
      "type": "string",
      "description": "raw markdown text"
    },
    "ban_reason": {
      "type": "string",
      "description": "a string no longer than 100 characters"
    },
    "container": {
      "type": "string"
    },
    "duration": {
      "type": "string",
      "description": "an integer between 1 and 999"
    },
    "name": {
      "type": "string",
      "description": "the name of an existing user"
    },
    "note": {
      "type": "string",
      "description": "a string no longer than 300 characters"
    },
    "permissions": {
      "type": "string"
    },
    "type": {
      "type": "string",
      "description": "one of (friend, moderator, moderator_invite, contributor, banned, muted, wikibanned, wikicontributor)"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.api.flairtemplate.post


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "css_class": {
      "type": "string",
      "description": "a valid subreddit image name"
    },
    "flair_template_id": {
      "type": "string"
    },
    "flair_type": {
      "type": "string",
      "description": "one of (USER_FLAIR, LINK_FLAIR)"
    },
    "text": {
      "type": "string",
      "description": "a string no longer than 64 characters"
    },
    "text_editable": {
      "type": "string",
      "description": "boolean value"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.api.flairselector.post
Return information about a users's flair options.

If link is given, return link flair options.
Otherwise, return user flair options for this subreddit.

The logged in user's flair is also returned.
Subreddit moderators may give a user by name to instead
retrieve that user's flair.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "link": {
      "type": "string",
      "description": "a fullname of a link"
    },
    "name": {
      "type": "string",
      "description": "a user by name"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.api.flairlist.get
This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 1000)"
    },
    "name": {
      "type": "string",
      "description": "a user by name"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.api.flaircsv.post
Change the flair of multiple users in the same subreddit with a
single API call.

Requires a string 'flair_csv' which has up to 100 lines of the form
'user,flairtext,cssclass' (Lines beyond the 100th are ignored).

If both cssclass and flairtext are the empty string for a given
user, instead clears that user's flair.

Returns an array of objects indicating if each flair setting was 
applied, or a reason for the failure.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "flair_csv": {
      "type": "string",
      "description": "comma-seperated flair information"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.api.flairconfig.post


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "flair_enabled": {
      "type": "string",
      "description": "boolean value"
    },
    "flair_position": {
      "type": "string",
      "description": "one of (left, right)"
    },
    "flair_self_assign_enabled": {
      "type": "string",
      "description": "boolean value"
    },
    "link_flair_position": {
      "type": "string",
      "description": "one of (`,left,right`)"
    },
    "link_flair_self_assign_enabled": {
      "type": "string",
      "description": "boolean value"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.api.flair.post


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "css_class": {
      "type": "string",
      "description": "a valid subreddit image name"
    },
    "link": {
      "type": "string",
      "description": "a fullname of a link"
    },
    "name": {
      "type": "string",
      "description": "a user by name"
    },
    "text": {
      "type": "string",
      "description": "a string no longer than 64 characters"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.api.deleteflairtemplate.post


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "flair_template_id": {
      "type": "string"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.api.deleteflair.post


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "name": {
      "type": "string",
      "description": "a user by name"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.api.delete_sr_img.post
Remove an image from the subreddit's custom image set.

The image will no longer count against the subreddit's image limit.
However, the actual image data may still be accessible for an
unspecified amount of time. If the image is currently referenced by the
subreddit's stylesheet, that stylesheet will no longer validate and
won't be editable until the image reference is removed.

See also: /api/upload_sr_img.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "img_name": {
      "type": "string",
      "description": "a valid subreddit image name"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.api.delete_sr_icon.post
Remove the subreddit's custom mobile icon.

See also: /api/upload_sr_img.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.api.delete_sr_header.post
Remove the subreddit's custom header image.

The sitewide-default header image will be shown again after this call.

See also: /api/upload_sr_img.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.api.delete_sr_banner.post
Remove the subreddit's custom mobile banner.

See also: /api/upload_sr_img.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.api.clearflairtemplates.post


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "flair_type": {
      "type": "string",
      "description": "one of (USER_FLAIR, LINK_FLAIR)"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.api.accept_moderator_invite.post
Accept an invite to moderate the specified subreddit.

The authenticated user must have been invited to moderate the subreddit
by one of its current moderators.

See also: /api/friend and
/subreddits/mine.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.about.where.get
This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 100)"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    },
    "user": {
      "type": "string",
      "description": "A valid, existing reddit username"
    },
    "subreddit": {
      "type": "string"
    },
    "where": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.about.location.get
Return a listing of posts relevant to moderators.


reports: Things that have been reported.
spam: Things that have been marked as spam or otherwise removed.
modqueue: Things requiring moderator review, such as reported things
and items caught by the spam filter.
unmoderated: Things that have yet to be approved/removed by a mod.
edited: Things that have been edited recently.


Requires the "posts" moderator permission for the subreddit.

This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 100)"
    },
    "location": {
      "type": "string"
    },
    "only": {
      "type": "string",
      "description": "one of (links, comments)"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.about.log.get
Get a list of recent moderation actions.

Moderator actions taken within a subreddit are logged. This listing is
a view of that log with various filters to aid in analyzing the
information.

The optional mod parameter can be a comma-delimited list of moderator
names to restrict the results to, or the string a to restrict the
results to admin actions taken within the subreddit.

The type parameter is optional and if sent limits the log entries
returned to only those of the type specified.

This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 500)"
    },
    "mod": {
      "type": "string",
      "description": "(optional) a moderator filter"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    },
    "type": {
      "type": "string",
      "description": "one of (banuser, unbanuser, removelink, approvelink, removecomment, approvecomment, addmoderator, invitemoderator, uninvitemoderator, acceptmoderatorinvite, removemoderator, addcontributor, removecontributor, editsettings, editflair, distinguish, marknsfw, wikibanned, wikicontributor, wikiunbanned, wikipagelisted, removewikicontributor, wikirevise, wikipermlevel, ignorereports, unignorereports, setpermissions, setsuggestedsort, sticky, unsticky, setcontestmode, unsetcontestmode, lock, unlock, muteuser, unmuteuser, createrule, editrule, deleterule)"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.about.edit.get
Get the current settings of a subreddit.

In the API, this returns the current settings of the subreddit as used
by /api/site_admin.  On the HTML site, it will
display a form for editing the subreddit.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "created": {
      "type": "string",
      "description": "one of (true, false)"
    },
    "location": {
      "type": "string"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: r.subreddit.about.get
Return information about the subreddit.

Data includes the subscriber count, description, and header image.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: prefs.where.get
This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 100)"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    },
    "where": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: new.get
This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 100)"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: message.where.get
This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 100)"
    },
    "mark": {
      "type": "string",
      "description": "one of (true, false)"
    },
    "mid": {
      "type": "string"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    },
    "where": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: live.thread.discussions.get
Get a list of reddit submissions linking to this thread.

This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 100)"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    },
    "thread": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: live.thread.contributors.get
Get a list of users that contribute to this thread.

See also: /api/live/thread/invite_contributor, and
/api/live/thread/rm_contributor.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "thread": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: live.thread.about.get
Get some basic information about the live thread.

See also: /api/live/thread/edit.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "thread": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: live.thread.get
Get a list of updates posted in this thread.

See also: /api/live/thread/update.

This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "the ID of a single update. e.g. LiveUpdate_ff87068e-a126-11e3-9f93-12313b0b3603"
    },
    "before": {
      "type": "string",
      "description": "the ID of a single update. e.g. LiveUpdate_ff87068e-a126-11e3-9f93-12313b0b3603"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "is_embed": {
      "type": "string",
      "description": "(internal use only)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 100)"
    },
    "stylesr": {
      "type": "string",
      "description": "subreddit name"
    },
    "thread": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: hot.get
This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 100)"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: duplicates.article.get
Return a list of other submissions of the same URL

This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "article": {
      "type": "string",
      "description": "The base 36 ID of a Link"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 100)"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: comments.article.get
Get the comment tree for a given Link article.

If supplied, comment is the ID36 of a comment in the comment tree for
article. This comment will be the (highlighted) focal point of the
returned view and context will be the number of parents shown.

depth is the maximum depth of subtrees in the thread.

limit is the maximum number of comments to return.

See also: /api/morechildren and
/api/comment.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "article": {
      "type": "string",
      "description": "ID36 of a link"
    },
    "comment": {
      "type": "string",
      "description": "(optional) ID36 of a comment"
    },
    "context": {
      "type": "string",
      "description": "an integer between 0 and 8"
    },
    "depth": {
      "type": "string",
      "description": "(optional) an integer"
    },
    "limit": {
      "type": "string",
      "description": "(optional) an integer"
    },
    "showedits": {
      "type": "string",
      "description": "boolean value"
    },
    "showmore": {
      "type": "string",
      "description": "boolean value"
    },
    "sort": {
      "type": "string",
      "description": "one of (confidence, top, new, hot, controversial, old, random, qa)"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: captcha.iden.get
Request a CAPTCHA image given an iden.

An iden is given as the captcha field with a BAD_CAPTCHA
error, you should use this endpoint if you get a
BAD_CAPTCHA error response.

Responds with a 120x50 image/png which should be displayed
to the user.

The user's response to the CAPTCHA should be sent as captcha
along with your request.

To request a new CAPTCHA,
use /api/new_captcha.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "iden": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: by_id.names.get
Get a listing of links by fullname.

names is a list of fullnames for links separated by commas or spaces.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "names": {
      "type": "string",
      "description": "A comma-separated list of link fullnames"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.subreddit_stylesheet.post
Update a subreddit's stylesheet.

op should be save to update the contents of the stylesheet.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "op": {
      "type": "string",
      "description": "one of (save, preview)"
    },
    "reason": {
      "type": "string",
      "description": "a string up to 256 characters long, consisting of printable characters."
    },
    "stylesheet_contents": {
      "type": "string",
      "description": "the new stylesheet content"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "subreddit": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.wiki.revert.post
Revert a wiki page to revision

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "string",
      "description": "the name of an existing wiki page"
    },
    "revision": {
      "type": "string",
      "description": "a wiki revision ID"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.wiki.hide.post
Toggle the public visibility of a wiki page revision

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "string",
      "description": "the name of an existing wiki page"
    },
    "revision": {
      "type": "string",
      "description": "a wiki revision ID"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.wiki.edit.post
Edit a wiki page

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "content": {
      "type": "string"
    },
    "page": {
      "type": "string",
      "description": "the name of an existing page or a new page to create"
    },
    "previous": {
      "type": "string",
      "description": "the starting point revision for this edit"
    },
    "reason": {
      "type": "string",
      "description": "a string up to 256 characters long, consisting of printable characters."
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.wiki.alloweditor.act.post
Allow/deny username to edit this wiki page

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "act": {
      "type": "string",
      "description": "one of (del, add)"
    },
    "page": {
      "type": "string",
      "description": "the name of an existing wiki page"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "username": {
      "type": "string",
      "description": "the name of an existing user"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.vote.post
Cast a vote on a thing.

id should be the fullname of the Link or Comment to vote on.

dir indicates the direction of the vote. Voting 1 is an upvote,
-1 is a downvote, and 0 is equivalent to "un-voting" by clicking
again on a highlighted arrow.

Note: votes must be cast by humans. That is, API clients proxying a
human's action one-for-one are OK, but bots deciding how to vote on
content or amplifying a human's vote are not. See the reddit
rules for more details on what constitutes vote cheating.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "dir": {
      "type": "string",
      "description": "vote direction. one of (1, 0, -1)"
    },
    "id": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.user.username.trophies.get
Return a list of trophies for the a given user.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "A valid, existing reddit username"
    },
    "username": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.scopes.get
Retrieve descriptions of reddit's OAuth2 scopes.

If no scopes are given, information on all scopes are returned.

Invalid scope(s) will result in a 400 error with body that indicates
the invalid scope(s).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "scopes": {
      "type": "string",
      "description": "(optional) An OAuth2 scope string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.me.trophies.get
Return a list of trophies for the current user.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: api.v1.me.prefs.patch


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "This": {
      "type": "string",
      "description": "{\n  \"beta\": boolean value,\n  \"clickgadget\": boolean value,\n  \"collapse_read_messages\": boolean value,\n  \"compress\": boolean value,\n  \"creddit_autorenew\": boolean value,\n  \"default_comment_sort\": one of (`confidence`, `old`, `top`, `qa`, `controversial`, `new`),\n  \"domain_details\": boolean value,\n  \"email_messages\": boolean value,\n  \"enable_default_themes\": boolean value,\n  \"hide_ads\": boolean value,\n  \"hide_downs\": boolean value,\n  \"hide_from_robots\": boolean value,\n  \"hide_locationbar\": boolean value,\n  \"hide_ups\": boolean value,\n  \"highlight_controversial\": boolean value,\n  \"highlight_new_comments\": boolean value,\n  \"ignore_suggested_sort\": boolean value,\n  \"label_nsfw\": boolean value,\n  \"lang\": a valid IETF language tag (underscore separated),\n  \"legacy_search\": boolean value,\n  \"mark_messages_read\": boolean value,\n  \"media\": one of (`on`, `off`, `subreddit`),\n  \"min_comment_score\": an integer between -100 and 100,\n  \"min_link_score\": an integer between -100 and 100,\n  \"monitor_mentions\": boolean value,\n  \"newwindow\": boolean value,\n  \"no_profanity\": boolean value,\n  \"num_comments\": an integer between 1 and 500,\n  \"numsites\": an integer between 1 and 100,\n  \"organic\": boolean value,\n  \"other_theme\": subreddit name,\n  \"over_18\": boolean value,\n  \"private_feeds\": boolean value,\n  \"public_votes\": boolean value,\n  \"research\": boolean value,\n  \"show_flair\": boolean value,\n  \"show_gold_expiration\": boolean value,\n  \"show_link_flair\": boolean value,\n  \"show_promote\": boolean value,\n  \"show_stylesheets\": boolean value,\n  \"show_trending\": boolean value,\n  \"store_visits\": boolean value,\n  \"theme_selector\": subreddit name,\n  \"threaded_messages\": boolean value,\n  \"threaded_modmail\": boolean value,\n  \"use_global_defaults\": boolean value,\n}"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.me.prefs.get
Return the preference settings of the logged in user

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "fields": {
      "type": "string",
      "description": "A comma-separated list of items from this set:\n\nthreaded_messages\nhide_downs\nemail_messages\nshow_link_flair\ncreddit_autorenew\nshow_trending\nprivate_feeds\nmonitor_mentions\nresearch\nignore_suggested_sort\nmedia\nclickgadget\nuse_global_defaults\nlabel_nsfw\ndomain_details\nshow_stylesheets\nhighlight_controversial\nno_profanity\ndefault_theme_sr\nlang\nhide_ups\nhide_from_robots\ncompress\nstore_visits\nthreaded_modmail\nbeta\nother_theme\nshow_gold_expiration\nover_18\nenable_default_themes\nshow_promote\nmin_comment_score\npublic_votes\norganic\ncollapse_read_messages\nshow_flair\nmark_messages_read\nhide_ads\nmin_link_score\nnewwindow\nnumsites\nlegacy_search\nnum_comments\nhighlight_new_comments\ndefault_comment_sort\nhide_locationbar"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.me.notifications.id.patch


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "This": {
      "type": "string",
      "description": "{\n  \"read\": boolean value,\n}"
    },
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.me.notifications.get
Get my notifications.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "count": {
      "type": "string",
      "description": "an integer between 0 and 1000 (default: 30)"
    },
    "end_date": {
      "type": "string"
    },
    "sort": {
      "type": "string",
      "description": "one of (new, old, None)"
    },
    "start_date": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.me.karma.get
Return a breakdown of subreddit karma.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: api.v1.me.friends.username.put
Create or update a "friend" relationship.

This operation is idempotent. It can be used to add a new
friend, or update an existing friend (e.g., add/change the
note on that friend)

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "This": {
      "type": "string",
      "description": "{\n  \"name\": A valid, existing reddit username,\n  \"note\": a string no longer than 300 characters,\n}"
    },
    "username": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.me.friends.username.get
Get information about a specific 'friend', such as notes.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "A valid, existing reddit username"
    },
    "username": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.me.friends.username.delete
Stop being friends with a user.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "A valid, existing reddit username"
    },
    "username": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.me.get
Returns the identity of the user currently authenticated via OAuth.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: api.v1.gold.give.username.post


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "months": {
      "type": "string",
      "description": "an integer between 1 and 36"
    },
    "username": {
      "type": "string",
      "description": "A valid, existing reddit username"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.gold.gild.fullname.post


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "fullname": {
      "type": "string",
      "description": "fullname of a thing"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.username_available.get
Check whether a username is available for registration.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "user": {
      "type": "string",
      "description": "a valid, unused, username"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.upload_sr_img.post
Add or replace a subreddit image, custom header logo, custom mobile
icon, or custom mobile banner.


If the upload_type value is img, an image for use in the
subreddit stylesheet is uploaded with the name specified in name.
If the upload_type value is header then the image uploaded will
be the subreddit's new logo and name will be ignored.
If the upload_type value is icon then the image uploaded will be
the subreddit's new mobile icon and name will be ignored.
If the upload_type value is banner then the image uploaded will
be the subreddit's new mobile banner and name will be ignored.


For backwards compatibility, if upload_type is not specified, the
header field will be used instead:


If the header field has value 0, then upload_type is img.
If the header field has value 1, then upload_type is header.


The img_type field specifies whether to store the uploaded image as a
PNG or JPEG.

Subreddits have a limited number of images that can be in use at any
given time. If no image with the specified name already exists, one of
the slots will be consumed.

If an image with the specified name already exists, it will be
replaced.  This does not affect the stylesheet immediately, but will
take effect the next time the stylesheet is saved.

See also: /api/delete_sr_img,
/api/delete_sr_header,
/api/delete_sr_icon, and
/api/delete_sr_banner.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "file": {
      "type": "string",
      "description": "file upload with maximum size of 500 KiB"
    },
    "formid": {
      "type": "string",
      "description": "(optional) can be ignored"
    },
    "header": {
      "type": "string",
      "description": "an integer between 0 and 1"
    },
    "img_type": {
      "type": "string",
      "description": "one of png or jpg (default: png)"
    },
    "name": {
      "type": "string",
      "description": "a valid subreddit image name"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "upload_type": {
      "type": "string",
      "description": "one of (img, header, icon, banner)"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.unsave.post
Unsave a link or comment.

This removes the thing from the user's saved listings as well.

See also: /api/save.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.unread_message.post


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "A comma-separated list of thing fullnames"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.unmute_message_author.post
For unmuting user via modmail.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.unmarknsfw.post
Remove the NSFW marking from a link.

See also: /api/marknsfw.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.unlock.post
Unlock a link.

Allow a post to receive new comments.

See also: /api/lock.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "fullname of a link"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.unignore_reports.post
Allow future reports on a thing to cause notifications.

See also: /api/ignore_reports.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.unhide.post
Unhide a link.

See also: /api/hide.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "A comma-separated list of link fullnames"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.unfriend.post
Remove a relationship between a user and another user or subreddit

The user can either be passed in by name (nuser)
or by fullname (iuser).  If type is friend or enemy,
'container' MUST be the current user's fullname;
for other types, the subreddit must be set
via URL (e.g., /r/funny/api/unfriend)

OAuth2 use requires appropriate scope based
on the 'type' of the relationship:


moderator: modothers
moderator_invite: modothers
contributor: modcontributors
banned: modcontributors
muted: modcontributors
wikibanned: modcontributors and modwiki
wikicontributor: modcontributors and modwiki
friend: Use /api/v1/me/friends/{username}
enemy: privatemessages


Complement to POST_friend

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "container": {
      "type": "string"
    },
    "id": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "name": {
      "type": "string",
      "description": "the name of an existing user"
    },
    "type": {
      "type": "string",
      "description": "one of (friend, enemy, moderator, moderator_invite, contributor, banned, muted, wikibanned, wikicontributor)"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.uncollapse_message.post
Uncollapse a message

See also: /api/collapse_message

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "A comma-separated list of thing fullnames"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.unblock_subreddit.post


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.subscribe.post
Subscribe to or unsubscribe from a subreddit.

To subscribe, action should be sub. To unsubscribe, action should
be unsub. The user must have access to the subreddit to be able to
subscribe to it.

See also: /subreddits/mine/.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "action": {
      "type": "string",
      "description": "one of (sub, unsub)"
    },
    "sr": {
      "type": "string",
      "description": "the name of a subreddit"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.subreddits_by_topic.get
Return a list of subreddits that are relevant to a search query.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "query": {
      "type": "string",
      "description": "a string no longer than 50 characters"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.submit_text.get
Get the submission text for the subreddit.

This text is set by the subreddit moderators and intended to be
displayed on the submission form.

See also: /api/site_admin.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: api.submit.post
Submit a link to a subreddit.

Submit will create a link or self-post in the subreddit sr with the
title title. If kind is "link", then url is expected to be a
valid URL to link to. Otherwise, text, if present, will be the
body of the self-post.

If a link with the same URL has already been submitted to the specified
subreddit an error will be returned unless resubmit is true.
extension is used for determining which view-type (e.g. json,
compact etc.) to use for the redirect that is generated if the
resubmit error occurs.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "captcha": {
      "type": "string",
      "description": "the user's response to the CAPTCHA challenge"
    },
    "extension": {
      "type": "string",
      "description": "extension used for redirects"
    },
    "iden": {
      "type": "string",
      "description": "the identifier of the CAPTCHA challenge"
    },
    "kind": {
      "type": "string",
      "description": "one of (link, self)"
    },
    "resubmit": {
      "type": "string",
      "description": "boolean value"
    },
    "sendreplies": {
      "type": "string",
      "description": "boolean value"
    },
    "sr": {
      "type": "string",
      "description": "name of a subreddit"
    },
    "text": {
      "type": "string",
      "description": "raw markdown text"
    },
    "title": {
      "type": "string",
      "description": "title of the submission. up to 300 characters long"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "url": {
      "type": "string",
      "description": "a valid URL"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.store_visits.post
Requires a subscription to reddit gold

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "links": {
      "type": "string",
      "description": "A comma-separated list of link fullnames"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.site_admin.post
Create or configure a subreddit.

If sr is specified, the request will attempt to modify the specified
subreddit. If not, a subreddit with name name will be created.

This endpoint expects all values to be supplied on every request.  If
modifying a subset of options, it may be useful to get the current
settings from /about/edit.json
first.

For backwards compatibility, description is the sidebar text and
public_description is the publicly visible subreddit description.

Most of the parameters for this endpoint are identical to options
visible in the user interface and their meanings are best explained
there.

See also: /about/edit.json.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "allow_top": {
      "type": "string",
      "description": "boolean value"
    },
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "captcha": {
      "type": "string",
      "description": "the user's response to the CAPTCHA challenge"
    },
    "collapse_deleted_comments": {
      "type": "string",
      "description": "boolean value"
    },
    "comment_score_hide_mins": {
      "type": "string",
      "description": "an integer between 0 and 1440 (default: 0)"
    },
    "description": {
      "type": "string",
      "description": "raw markdown text"
    },
    "exclude_banned_modqueue": {
      "type": "string",
      "description": "boolean value"
    },
    "header-title": {
      "type": "string",
      "description": "a string no longer than 500 characters"
    },
    "hide_ads": {
      "type": "string",
      "description": "boolean value"
    },
    "iden": {
      "type": "string",
      "description": "the identifier of the CAPTCHA challenge"
    },
    "lang": {
      "type": "string",
      "description": "a valid IETF language tag (underscore separated)"
    },
    "link_type": {
      "type": "string",
      "description": "one of (any, link, self)"
    },
    "modmail_email_address": {
      "type": "string"
    },
    "modmail_email_enabled": {
      "type": "string",
      "description": "boolean value"
    },
    "name": {
      "type": "string",
      "description": "subreddit name"
    },
    "over_18": {
      "type": "string",
      "description": "boolean value"
    },
    "public_description": {
      "type": "string",
      "description": "raw markdown text"
    },
    "public_traffic": {
      "type": "string",
      "description": "boolean value"
    },
    "show_media": {
      "type": "string",
      "description": "boolean value"
    },
    "spam_comments": {
      "type": "string",
      "description": "one of (low, high, all)"
    },
    "spam_links": {
      "type": "string",
      "description": "one of (low, high, all)"
    },
    "spam_selfposts": {
      "type": "string",
      "description": "one of (low, high, all)"
    },
    "sr": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "submit_link_label": {
      "type": "string",
      "description": "a string no longer than 60 characters"
    },
    "submit_text": {
      "type": "string",
      "description": "raw markdown text"
    },
    "submit_text_label": {
      "type": "string",
      "description": "a string no longer than 60 characters"
    },
    "suggested_comment_sort": {
      "type": "string",
      "description": "one of (confidence, top, new, hot, controversial, old, random, qa)"
    },
    "title": {
      "type": "string",
      "description": "a string no longer than 100 characters"
    },
    "type": {
      "type": "string",
      "description": "one of (gold_restricted, archived, restricted, gold_only, employees_only, private, public)"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "wiki_edit_age": {
      "type": "string",
      "description": "an integer greater than 0 (default: 0)"
    },
    "wiki_edit_karma": {
      "type": "string",
      "description": "an integer greater than 0 (default: 0)"
    },
    "wikimode": {
      "type": "string",
      "description": "one of (disabled, modonly, anyone)"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.setpermissions.post


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "name": {
      "type": "string",
      "description": "the name of an existing user"
    },
    "permissions": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.setflairenabled.post


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "flair_enabled": {
      "type": "string",
      "description": "boolean value"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.set_suggested_sort.post
Set a suggested sort for a link.

Suggested sorts are useful to display comments in a certain preferred way
for posts. For example, casual conversation may be better sorted by new
by default, or AMAs may be sorted by Q&A. A sort of an empty string
clears the default sort.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "id": {
      "type": "string"
    },
    "sort": {
      "type": "string",
      "description": "one of (confidence, top, new, hot, controversial, old, random, qa, blank)"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.set_subreddit_sticky.post
Set or unset a Link as the sticky in its subreddit.

state is a boolean that indicates whether to sticky or unsticky
this post - true to sticky, false to unsticky.

The num argument is optional, and only used when stickying a post.
It allows specifying a particular "slot" to sticky the post into, and
if there is already a post stickied in that slot it will be replaced.
If there is no post in the specified slot to replace, or num is None,
the bottom-most slot will be used.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "id": {
      "type": "string"
    },
    "num": {
      "type": "string",
      "description": "an integer between 1 and 2"
    },
    "state": {
      "type": "string",
      "description": "boolean value"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.set_contest_mode.post
Set or unset "contest mode" for a link's comments.

state is a boolean that indicates whether you are enabling or
disabling contest mode - true to enable, false to disable.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "id": {
      "type": "string"
    },
    "state": {
      "type": "string",
      "description": "boolean value"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.sendreplies.post
Enable or disable inbox replies for a link or comment.

state is a boolean that indicates whether you are enabling or
disabling inbox replies - true to enable, false to disable.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "fullname of a thing created by the user"
    },
    "state": {
      "type": "string",
      "description": "boolean value"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.selectflair.post


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "flair_template_id": {
      "type": "string"
    },
    "link": {
      "type": "string",
      "description": "a fullname of a link"
    },
    "name": {
      "type": "string",
      "description": "a user by name"
    },
    "text": {
      "type": "string",
      "description": "a string no longer than 64 characters"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.search_reddit_names.post
List subreddit names that begin with a query string.

Subreddits whose names begin with query will be returned. If
include_over_18 is false, subreddits with over-18 content
restrictions will be filtered from the results.

If exact is true, only an exact match will be returned.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "exact": {
      "type": "string",
      "description": "boolean value"
    },
    "include_over_18": {
      "type": "string",
      "description": "boolean value"
    },
    "query": {
      "type": "string",
      "description": "a string up to 50 characters long, consisting of printable characters."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.saved_categories.get
Get a list of categories in which things are currently saved.

See also: /api/save.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: api.save.post
Save a link or comment.

Saved things are kept in the user's saved listing for later perusal.

See also: /api/unsave.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "category": {
      "type": "string",
      "description": "a category name"
    },
    "id": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.report.post
Report a link, comment or message.

Reporting a thing brings it to the attention of the subreddit's
moderators. Reporting a message sends it to a system for admin review.

For links and comments, the thing is implicitly hidden as well (see
/api/hide for details).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "other_reason": {
      "type": "string",
      "description": "a string no longer than 100 characters"
    },
    "reason": {
      "type": "string",
      "description": "a string no longer than 100 characters"
    },
    "site_reason": {
      "type": "string",
      "description": "a string no longer than 100 characters"
    },
    "thing_id": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.remove.post
Remove a link, comment, or modmail message.

If the thing is a link, it will be removed from all subreddit listings.
If the thing is a comment, it will be redacted and removed from all
subreddit comment listings.

See also: /api/approve.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "spam": {
      "type": "string",
      "description": "boolean value"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.recommend.sr.srnames.get
Return subreddits recommended for the given subreddit(s).

Gets a list of subreddits recommended for srnames, filtering out any
that appear in the optional omit param.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "omit": {
      "type": "string",
      "description": "comma-delimited list of subreddit names"
    },
    "srnames": {
      "type": "string",
      "description": "comma-delimited list of subreddit names"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.read_message.post


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "A comma-separated list of thing fullnames"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.read_all_messages.post
Queue up marking all messages for a user as read.

This may take some time, and returns 202 to acknowledge acceptance of
the request.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.new_captcha.post
Responds with an iden of a new CAPTCHA.

Use this endpoint if a user cannot read a given CAPTCHA,
and wishes to receive a new CAPTCHA.

To request the CAPTCHA image for an iden, use
/captcha/iden.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.needs_captcha.get
Check whether CAPTCHAs are needed for API methods that define the
"captcha" and "iden" parameters.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: api.mute_message_author.post
For muting user via modmail.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.multi.multipath.r.srname.put
Add a subreddit to a multi.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "model": {
      "type": "string",
      "description": "json data:\n\n{\n  \"name\": subreddit name,\n}"
    },
    "multipath": {
      "type": "string",
      "description": "multireddit url path"
    },
    "srname": {
      "type": "string",
      "description": "subreddit name"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.multi.multipath.r.srname.get
Get data about a subreddit in a multi.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "multipath": {
      "type": "string",
      "description": "multireddit url path"
    },
    "srname": {
      "type": "string",
      "description": "subreddit name"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.multi.multipath.r.srname.delete
Remove a subreddit from a multi.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "multipath": {
      "type": "string",
      "description": "multireddit url path"
    },
    "srname": {
      "type": "string",
      "description": "subreddit name"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.multi.multipath.description.put
Change a multi's markdown description.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "model": {
      "type": "string",
      "description": "json data:\n\n{\n  \"body_md\": raw markdown text,\n}"
    },
    "multipath": {
      "type": "string",
      "description": "multireddit url path"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.multi.multipath.description.get
Get a multi's description.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "multipath": {
      "type": "string",
      "description": "multireddit url path"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.multi.multipath.put
Create or update a multi.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "expand_srs": {
      "type": "string",
      "description": "boolean value"
    },
    "model": {
      "type": "string",
      "description": "json data:\n\n{\n  \"description_md\": raw markdown text,\n  \"display_name\": a string no longer than 50 characters,\n  \"icon_name\": one of (`art and design`, `ask`, `books`, `business`, `cars`, `comics`, `cute animals`, `diy`, `entertainment`, `food and drink`, `funny`, `games`, `grooming`, `health`, `life advice`, `military`, `models pinup`, `music`, `news`, `philosophy`, `pictures and gifs`, `science`, `shopping`, `sports`, `style`, `tech`, `travel`, `unusual stories`, `video`, ``, `None`),\n  \"key_color\": a 6-digit rgb hex color, e.g. `#AABBCC`,\n  \"subreddits\": [\n    {\n      \"name\": subreddit name,\n    },\n    ...\n  ],\n  \"visibility\": one of (`private`, `public`, `hidden`),\n  \"weighting_scheme\": one of (`classic`, `fresh`),\n}"
    },
    "multipath": {
      "type": "string",
      "description": "multireddit url path"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.multi.multipath.post
Create a multi. Responds with 409 Conflict if it already exists.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "expand_srs": {
      "type": "string",
      "description": "boolean value"
    },
    "model": {
      "type": "string",
      "description": "json data:\n\n{\n  \"description_md\": raw markdown text,\n  \"display_name\": a string no longer than 50 characters,\n  \"icon_name\": one of (`art and design`, `ask`, `books`, `business`, `cars`, `comics`, `cute animals`, `diy`, `entertainment`, `food and drink`, `funny`, `games`, `grooming`, `health`, `life advice`, `military`, `models pinup`, `music`, `news`, `philosophy`, `pictures and gifs`, `science`, `shopping`, `sports`, `style`, `tech`, `travel`, `unusual stories`, `video`, ``, `None`),\n  \"key_color\": a 6-digit rgb hex color, e.g. `#AABBCC`,\n  \"subreddits\": [\n    {\n      \"name\": subreddit name,\n    },\n    ...\n  ],\n  \"visibility\": one of (`private`, `public`, `hidden`),\n  \"weighting_scheme\": one of (`classic`, `fresh`),\n}"
    },
    "multipath": {
      "type": "string",
      "description": "multireddit url path"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.multi.multipath.get
Fetch a multi's data and subreddit list by name.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "expand_srs": {
      "type": "string",
      "description": "boolean value"
    },
    "multipath": {
      "type": "string",
      "description": "multireddit url path"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.multi.multipath.delete
Delete a multi.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "expand_srs": {
      "type": "string",
      "description": "boolean value"
    },
    "multipath": {
      "type": "string",
      "description": "multireddit url path"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.multi.user.username.get
Fetch a list of public multis belonging to username

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "expand_srs": {
      "type": "string",
      "description": "boolean value"
    },
    "username": {
      "type": "string",
      "description": "A valid, existing reddit username"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.multi.rename.post
Rename a multi.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "display_name": {
      "type": "string",
      "description": "a string no longer than 50 characters"
    },
    "from": {
      "type": "string",
      "description": "multireddit url path"
    },
    "to": {
      "type": "string",
      "description": "destination multireddit url path"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.multi.mine.get
Fetch a list of multis belonging to the current user.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "expand_srs": {
      "type": "string",
      "description": "boolean value"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.multi.copy.post
Copy a multi.

Responds with 409 Conflict if the target already exists.

A "copied from ..." line will automatically be appended to the
description.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "display_name": {
      "type": "string",
      "description": "a string no longer than 50 characters"
    },
    "from": {
      "type": "string",
      "description": "multireddit url path"
    },
    "to": {
      "type": "string",
      "description": "destination multireddit url path"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.morechildren.get
Retrieve additional comments omitted from a base comment tree.

When a comment tree is rendered, the most relevant comments are
selected for display first. Remaining comments are stubbed out with
"MoreComments" links. This API call is used to retrieve the additional
comments represented by those stubs, up to 20 at a time.

The two core parameters required are link and children.  link is
the fullname of the link whose comments are being fetched. children
is a comma-delimited list of comment ID36s that need to be fetched.

If id is passed, it should be the ID of the MoreComments object this
call is replacing. This is needed only for the HTML UI's purposes and
is optional otherwise.

NOTE: you may only make one request at a time to this API endpoint.
Higher concurrency will result in an error being returned.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "children": {
      "type": "string",
      "description": "a comma-delimited list of comment ID36s"
    },
    "id": {
      "type": "string",
      "description": "(optional) id of the associated MoreChildren object"
    },
    "link_id": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "sort": {
      "type": "string",
      "description": "one of (confidence, top, new, hot, controversial, old, random, qa)"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.marknsfw.post
Mark a link NSFW.

See also: /api/unmarknsfw.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.lock.post
Lock a link.

Prevents a post from receiving new comments.

See also: /api/unlock.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "fullname of a link"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.live.thread.update.post
Post an update to the thread.

Requires the update permission for this thread.

See also: /api/live/thread/strike_update, and
/api/live/thread/delete_update.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "body": {
      "type": "string",
      "description": "raw markdown text"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "thread": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.live.thread.strike_update.post
Strike (mark incorrect and cross out) the content of an update.

Requires that specified update must have been authored by the user or
that you have the edit permission for this thread.

See also: /api/live/thread/update.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "id": {
      "type": "string",
      "description": "the ID of a single update. e.g. LiveUpdate_ff87068e-a126-11e3-9f93-12313b0b3603"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "thread": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.live.thread.set_contributor_permissions.post
Change a contributor or contributor invite's permissions.

Requires the manage permission for this thread.

See also: /api/live/thread/invite_contributor and
/api/live/thread/rm_contributor.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "name": {
      "type": "string",
      "description": "the name of an existing user"
    },
    "permissions": {
      "type": "string",
      "description": "permission description e.g. +update,+edit,-manage"
    },
    "type": {
      "type": "string",
      "description": "one of (liveupdate_contributor_invite, liveupdate_contributor)"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "thread": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.live.thread.rm_contributor_invite.post
Revoke an outstanding contributor invite.

Requires the manage permission for this thread.

See also: /api/live/thread/invite_contributor.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "id": {
      "type": "string",
      "description": "fullname of a account"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "thread": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.live.thread.rm_contributor.post
Revoke another user's contributorship.

Requires the manage permission for this thread.

See also: /api/live/thread/invite_contributor.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "id": {
      "type": "string",
      "description": "fullname of a account"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "thread": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.live.thread.report.post
Report the thread for violating the rules of reddit.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "type": {
      "type": "string",
      "description": "one of (spam, vote-manipulation, personal-information, sexualizing-minors, site-breaking)"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "thread": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.live.thread.leave_contributor.post
Abdicate contributorship of the thread.

See also: /api/live/thread/accept_contributor_invite, and
/api/live/thread/invite_contributor.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "thread": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.live.thread.invite_contributor.post
Invite another user to contribute to the thread.

Requires the manage permission for this thread.  If the recipient
accepts the invite, they will be granted the permissions specified.

See also: /api/live/thread/accept_contributor_invite, and
/api/live/thread/rm_contributor_invite.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "name": {
      "type": "string",
      "description": "the name of an existing user"
    },
    "permissions": {
      "type": "string",
      "description": "permission description e.g. +update,+edit,-manage"
    },
    "type": {
      "type": "string",
      "description": "one of (liveupdate_contributor_invite, liveupdate_contributor)"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "thread": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.live.thread.edit.post
Configure the thread.

Requires the settings permission for this thread.

See also: /live/thread/about.json.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "description": {
      "type": "string",
      "description": "raw markdown text"
    },
    "nsfw": {
      "type": "string",
      "description": "boolean value"
    },
    "resources": {
      "type": "string",
      "description": "raw markdown text"
    },
    "title": {
      "type": "string",
      "description": "a string no longer than 120 characters"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "thread": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.live.thread.delete_update.post
Delete an update from the thread.

Requires that specified update must have been authored by the user or
that you have the edit permission for this thread.

See also: /api/live/thread/update.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "id": {
      "type": "string",
      "description": "the ID of a single update. e.g. LiveUpdate_ff87068e-a126-11e3-9f93-12313b0b3603"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "thread": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.live.thread.close_thread.post
Permanently close the thread, disallowing future updates.

Requires the close permission for this thread.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "thread": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.live.thread.accept_contributor_invite.post
Accept a pending invitation to contribute to the thread.

See also: /api/live/thread/leave_contributor.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    },
    "thread": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.live.create.post
Create a new live thread.

Once created, the initial settings can be modified with
/api/live/thread/edit and new updates
can be posted with
/api/live/thread/update.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "description": {
      "type": "string",
      "description": "raw markdown text"
    },
    "nsfw": {
      "type": "string",
      "description": "boolean value"
    },
    "resources": {
      "type": "string",
      "description": "raw markdown text"
    },
    "title": {
      "type": "string",
      "description": "a string no longer than 120 characters"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.leavemoderator.post
Abdicate moderator status in a subreddit.

See also: /api/friend.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.leavecontributor.post
Abdicate approved submitter status in a subreddit.

See also: /api/friend.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.info.get
Return a listing of things specified by their fullnames.

Only Links, Comments, and Subreddits are allowed.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "A comma-separated list of thing fullnames"
    },
    "url": {
      "type": "string",
      "description": "a valid URL"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.ignore_reports.post
Prevent future reports on a thing from causing notifications.

Any reports made about a thing after this flag is set on it will not
cause notifications or make the thing show up in the various moderation
listings.

See also: /api/unignore_reports.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.hide.post
Hide a link.

This removes it from the user's default view of subreddit listings.

See also: /api/unhide.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "A comma-separated list of link fullnames"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.friend.post
Create a relationship between a user and another user or subreddit

OAuth2 use requires appropriate scope based
on the 'type' of the relationship:


moderator: Use "moderator_invite"
moderator_invite: modothers
contributor: modcontributors
banned: modcontributors
muted: modcontributors
wikibanned: modcontributors and modwiki
wikicontributor: modcontributors and modwiki
friend: Use /api/v1/me/friends/{username}
enemy: Use /api/block


Complement to POST_unfriend

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "ban_message": {
      "type": "string",
      "description": "raw markdown text"
    },
    "ban_reason": {
      "type": "string",
      "description": "a string no longer than 100 characters"
    },
    "container": {
      "type": "string"
    },
    "duration": {
      "type": "string",
      "description": "an integer between 1 and 999"
    },
    "name": {
      "type": "string",
      "description": "the name of an existing user"
    },
    "note": {
      "type": "string",
      "description": "a string no longer than 300 characters"
    },
    "permissions": {
      "type": "string"
    },
    "type": {
      "type": "string",
      "description": "one of (friend, moderator, moderator_invite, contributor, banned, muted, wikibanned, wikicontributor)"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.flairtemplate.post


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "css_class": {
      "type": "string",
      "description": "a valid subreddit image name"
    },
    "flair_template_id": {
      "type": "string"
    },
    "flair_type": {
      "type": "string",
      "description": "one of (USER_FLAIR, LINK_FLAIR)"
    },
    "text": {
      "type": "string",
      "description": "a string no longer than 64 characters"
    },
    "text_editable": {
      "type": "string",
      "description": "boolean value"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.flairselector.post
Return information about a users's flair options.

If link is given, return link flair options.
Otherwise, return user flair options for this subreddit.

The logged in user's flair is also returned.
Subreddit moderators may give a user by name to instead
retrieve that user's flair.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "link": {
      "type": "string",
      "description": "a fullname of a link"
    },
    "name": {
      "type": "string",
      "description": "a user by name"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.flairlist.get
This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 1000)"
    },
    "name": {
      "type": "string",
      "description": "a user by name"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.flaircsv.post
Change the flair of multiple users in the same subreddit with a
single API call.

Requires a string 'flair_csv' which has up to 100 lines of the form
'user,flairtext,cssclass' (Lines beyond the 100th are ignored).

If both cssclass and flairtext are the empty string for a given
user, instead clears that user's flair.

Returns an array of objects indicating if each flair setting was 
applied, or a reason for the failure.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "flair_csv": {
      "type": "string",
      "description": "comma-seperated flair information"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.flairconfig.post


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "flair_enabled": {
      "type": "string",
      "description": "boolean value"
    },
    "flair_position": {
      "type": "string",
      "description": "one of (left, right)"
    },
    "flair_self_assign_enabled": {
      "type": "string",
      "description": "boolean value"
    },
    "link_flair_position": {
      "type": "string",
      "description": "one of (`,left,right`)"
    },
    "link_flair_self_assign_enabled": {
      "type": "string",
      "description": "boolean value"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.flair.post


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "css_class": {
      "type": "string",
      "description": "a valid subreddit image name"
    },
    "link": {
      "type": "string",
      "description": "a fullname of a link"
    },
    "name": {
      "type": "string",
      "description": "a user by name"
    },
    "text": {
      "type": "string",
      "description": "a string no longer than 64 characters"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.editusertext.post
Edit the body text of a comment or self-post.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "text": {
      "type": "string",
      "description": "raw markdown text"
    },
    "thing_id": {
      "type": "string",
      "description": "fullname of a thing created by the user"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.distinguish.post
Distinguish a thing's author with a sigil.

This can be useful to draw attention to and confirm the identity of the
user in the context of a link or comment of theirs. The options for
distinguish are as follows:


yes - add a moderator distinguish ([M]). only if the user is a
      moderator of the subreddit the thing is in.
no - remove any distinguishes.
admin - add an admin distinguish ([A]). admin accounts only.
special - add a user-specific distinguish. depends on user.


The first time a top-level comment is moderator distinguished, the
author of the link the comment is in reply to will get a notification
in their inbox.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "how": {
      "type": "string",
      "description": "one of (yes, no, admin, special)"
    },
    "id": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.deleteflairtemplate.post


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "flair_template_id": {
      "type": "string"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.deleteflair.post


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "name": {
      "type": "string",
      "description": "a user by name"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.delete_sr_img.post
Remove an image from the subreddit's custom image set.

The image will no longer count against the subreddit's image limit.
However, the actual image data may still be accessible for an
unspecified amount of time. If the image is currently referenced by the
subreddit's stylesheet, that stylesheet will no longer validate and
won't be editable until the image reference is removed.

See also: /api/upload_sr_img.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "img_name": {
      "type": "string",
      "description": "a valid subreddit image name"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.delete_sr_icon.post
Remove the subreddit's custom mobile icon.

See also: /api/upload_sr_img.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.delete_sr_header.post
Remove the subreddit's custom header image.

The sitewide-default header image will be shown again after this call.

See also: /api/upload_sr_img.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.delete_sr_banner.post
Remove the subreddit's custom mobile banner.

See also: /api/upload_sr_img.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.del.post
Delete a Link or Comment.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "fullname of a thing created by the user"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.compose.post
Handles message composition under /message/compose.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "captcha": {
      "type": "string",
      "description": "the user's response to the CAPTCHA challenge"
    },
    "from_sr": {
      "type": "string",
      "description": "subreddit name"
    },
    "iden": {
      "type": "string",
      "description": "the identifier of the CAPTCHA challenge"
    },
    "subject": {
      "type": "string",
      "description": "a string no longer than 100 characters"
    },
    "text": {
      "type": "string",
      "description": "raw markdown text"
    },
    "to": {
      "type": "string",
      "description": "the name of an existing user"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.comment.post
Submit a new comment or reply to a message.

parent is the fullname of the thing being replied to. Its value
changes the kind of object created by this request:


the fullname of a Link: a top-level comment in that Link's thread. (requires submit scope)
the fullname of a Comment: a comment reply to that comment. (requires submit scope)
the fullname of a Message: a message reply to that message. (requires privatemessages scope)


text should be the raw markdown body of the comment or message.

To start a new message thread, use /api/compose.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "text": {
      "type": "string",
      "description": "raw markdown text"
    },
    "thing_id": {
      "type": "string",
      "description": "fullname of parent thing"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.collapse_message.post
Collapse a message

See also: /api/uncollapse_message

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "A comma-separated list of thing fullnames"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.clearflairtemplates.post


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "flair_type": {
      "type": "string",
      "description": "one of (USER_FLAIR, LINK_FLAIR)"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.block.post
For blocking via inbox.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.approve.post
Approve a link or comment.

If the thing was removed, it will be re-inserted into appropriate
listings. Any reports on the approved thing will be discarded.

See also: /api/remove.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: api.accept_moderator_invite.post
Accept an invite to moderate the specified subreddit.

The authenticated user must have been invited to moderate the subreddit
by one of its current moderators.

See also: /api/friend and
/subreddits/mine.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "api_type": {
      "type": "string",
      "description": "the string json"
    },
    "uh": {
      "type": "string",
      "description": "a modhash"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: about.where.get
This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 100)"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    },
    "user": {
      "type": "string",
      "description": "A valid, existing reddit username"
    },
    "where": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: about.location.get
Return a listing of posts relevant to moderators.


reports: Things that have been reported.
spam: Things that have been marked as spam or otherwise removed.
modqueue: Things requiring moderator review, such as reported things
and items caught by the spam filter.
unmoderated: Things that have yet to be approved/removed by a mod.
edited: Things that have been edited recently.


Requires the "posts" moderator permission for the subreddit.

This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 100)"
    },
    "location": {
      "type": "string"
    },
    "only": {
      "type": "string",
      "description": "one of (links, comments)"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: about.log.get
Get a list of recent moderation actions.

Moderator actions taken within a subreddit are logged. This listing is
a view of that log with various filters to aid in analyzing the
information.

The optional mod parameter can be a comma-delimited list of moderator
names to restrict the results to, or the string a to restrict the
results to admin actions taken within the subreddit.

The type parameter is optional and if sent limits the log entries
returned to only those of the type specified.

This endpoint is a listing.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "after": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "before": {
      "type": "string",
      "description": "fullname of a thing"
    },
    "count": {
      "type": "string",
      "description": "a positive integer (default: 0)"
    },
    "limit": {
      "type": "string",
      "description": "the maximum number of items desired (default: 25, maximum: 500)"
    },
    "mod": {
      "type": "string",
      "description": "(optional) a moderator filter"
    },
    "show": {
      "type": "string",
      "description": "(optional) the string all"
    },
    "sr_detail": {
      "type": "string",
      "description": "(optional) expand subreddits"
    },
    "type": {
      "type": "string",
      "description": "one of (banuser, unbanuser, removelink, approvelink, removecomment, approvecomment, addmoderator, invitemoderator, uninvitemoderator, acceptmoderatorinvite, removemoderator, addcontributor, removecontributor, editsettings, editflair, distinguish, marknsfw, wikibanned, wikicontributor, wikiunbanned, wikipagelisted, removewikicontributor, wikirevise, wikipermlevel, ignorereports, unignorereports, setpermissions, setsuggestedsort, sticky, unsticky, setcontestmode, unsetcontestmode, lock, unlock, muteuser, unmuteuser, createrule, editrule, deleterule)"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
