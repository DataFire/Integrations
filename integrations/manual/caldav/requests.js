const requests = module.exports = {};

requests.getEvents = function(args) {
  return `
<c:calendar-query xmlns:d="DAV:" xmlns:c="urn:ietf:params:xml:ns:caldav">
    <d:prop>
        <d:getetag />
        <c:calendar-data />
    </d:prop>
    <c:filter>
        <c:comp-filter name="VCALENDAR" />
    </c:filter>
</c:calendar-query>
  `.trim();
}

requests.createCalendar = function(args) {
  return `
   <?xml version="1.0" encoding="utf-8" ?>
   <C:mkcalendar xmlns:D="DAV:"
                 xmlns:C="urn:ietf:params:xml:ns:caldav">
     <D:set>
       <D:prop>
         <D:displayname>${args.name}</D:displayname>
         <C:calendar-description xml:lang="en">${args.description}</C:calendar-description>
         <C:supported-calendar-component-set>
           <C:comp name="VEVENT"/>
         </C:supported-calendar-component-set>
         <C:calendar-timezone><![CDATA[${args.data}]]></C:calendar-timezone>
       </D:prop>
     </D:set>
   </C:mkcalendar>
  `.trim();
}

requests.principal = function(args) {
  return `
<d:propfind xmlns:d="DAV:">
  <d:prop>
     <d:current-user-principal />
  </d:prop>
</d:propfind>
  `.trim();
}

requests.calendarHome = function(args) {
  return `
<d:propfind xmlns:d="DAV:" xmlns:c="urn:ietf:params:xml:ns:caldav">
  <d:prop>
     <c:calendar-home-set />
  </d:prop>
</d:propfind>
  `.trim();
}

requests.calendarList = function(args) {
  return `
<d:propfind xmlns:d="DAV:" xmlns:cs="http://calendarserver.org/ns/" xmlns:c="urn:ietf:params:xml:ns:caldav">
  <d:prop>
     <d:resourcetype />
     <d:displayname />
     <cs:getctag />
     <c:supported-calendar-component-set />
  </d:prop>
</d:propfind>
  `.trim();
}
