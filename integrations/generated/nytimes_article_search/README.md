# @datafire/nytimes_article_search
With the Article Search API, you can search New York Times articles from Sept. 18, 1851 to today, retrieving headlines, abstracts, lead paragraphs, links to associated multimedia and other article metadata.  

 Note: In URI examples and field names, italics indicate placeholders for variables or values. Brackets [ ] indicate optional items. Parentheses ( ) are not a convention — when URIs include parentheses, interpret them literally.

## Operation: articlesearch.json.get
Article Search requests use the following URI structure:


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "q": {
      "type": "string",
      "description": "Search query term. Search is performed on the article body, headline and byline.\n"
    },
    "fq": {
      "type": "string",
      "description": "\"Filtered search query using standard Lucene syntax. \n\nThe filter query can be specified with or without a limiting field: label. \n\nSee Filtering Your Search for more information about filtering.\"\n"
    },
    "begin_date": {
      "type": "string",
      "description": "\"Format: YYYYMMDD \n\nRestricts responses to results with publication dates of the date specified or later.\"\n"
    },
    "end_date": {
      "type": "string",
      "description": "\"Format: YYYYMMDD \n\nRestricts responses to results with publication dates of the date specified or earlier.\"\n"
    },
    "sort": {
      "type": "string",
      "description": "\"By default, search results are sorted by their relevance to the query term (q). Use the sort parameter to sort by pub_date.\"\n",
      "enum": [
        "newest",
        "oldest"
      ]
    },
    "fl": {
      "type": "string",
      "description": "\"Comma-delimited list of fields (no limit)\n\n  Limits the fields returned in your search results. By default (unless you include an fl list in your request), the following fields are returned: \n  \n  web_url\n  \n  snippet\n  \n  lead_paragraph\n  \n  abstract\n  \n  print_page\n  \n  blog\n  \n  source\n  \n  multimedia\n  \n  headline\n  \n  keywords\n  \n  pub_date\n  \n  document_type\n  \n  news_desk\n  \n  byline\n  \n  type_of_material\n  \n  _id\n  \n  word_count\"\n"
    },
    "hl": {
      "type": "boolean",
      "description": "Enables highlighting in search results. When set to true, the query term (q) is highlighted in the headline and lead_paragraph fields.\n\nNote: If highlighting is enabled, snippet will be returned even if it is not specified in your fl list.\"\n"
    },
    "page": {
      "type": "integer",
      "description": "\"The value of page corresponds to a set of 10 results (it does not indicate the starting number of the result set). For example, page=0 corresponds to records 0-9. To return records 10-19, set page to 1, not 10.\"\n",
      "maximum": 10,
      "minimum": 0
    },
    "facet_field": {
      "type": "string",
      "description": "Comma-delimited list of facets\n\nSpecifies the sets of facet values to include in the facets array at the end of response, which collects the facet values from all the search results. By default no facet fields will be returned. Below is the list of valid facets:\n\nsection_name\n\ndocument_type\n\ntype_of_material\n\nsource\n\nday_of_week\n\nTo learn more about using facets, see Using Facets.\n"
    },
    "facet_filter": {
      "type": "boolean",
      "description": "When set to true, facet counts will respect any applied filters (fq, date range, etc.) in addition to the main query term. To filter facet counts, specifying at least one facet_field is required. To learn more about using facets, see Using Facets.\n"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "response": {
      "properties": {
        "docs": {
          "items": {
            "$ref": "#/definitions/Doc"
          },
          "type": "array"
        },
        "meta": {
          "properties": {
            "hits": {
              "type": "integer"
            },
            "offset": {
              "type": "integer"
            },
            "time": {
              "type": "integer"
            }
          },
          "type": "object"
        }
      },
      "type": "object"
    }
  },
  "type": "object"
}
```
