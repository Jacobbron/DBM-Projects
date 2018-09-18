{
  "name": "closeticket",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "tzMQo",
  "actions": [
    {
      "server": "0",
      "varName": "",
      "info": "1",
      "storage": "1",
      "varName2": "server-id",
      "name": "Store Server Info"
    },
    {
      "channel": "0",
      "varName": "",
      "info": "2",
      "storage": "1",
      "varName2": "channel-name",
      "name": "Store Channel Info"
    },
    {
      "channel": "0",
      "varName": "",
      "info": "1",
      "storage": "1",
      "varName2": "channel-id",
      "name": "Store Channel Info"
    },
    {
      "channel": "0",
      "varName": "",
      "info": "0",
      "storage": "1",
      "varName2": "channel",
      "name": "Store Channel Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "3",
      "storage": "1",
      "varName2": "author-display",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "16",
      "storage": "1",
      "varName2": "author-avatar",
      "name": "Store Member Info"
    },
    {
      "slice": "${tempVars(\"channel-name\")}",
      "startingNumber": "7",
      "sliceLength": "10000",
      "storage": "1",
      "varName": "ticket-id",
      "name": "Slice"
    },
    {
      "storage": "1",
      "varName": "channel-name",
      "comparison": "5",
      "value": "ticket-",
      "iftrue": "3",
      "iftrueVal": "5",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "😖 Sorry about that, but you have to be in a ticket channel!",
      "storage": "1",
      "varName2": "no-alert",
      "name": "Send Message"
    },
    {
      "time": "5",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "storage": "1",
      "varName": "no-alert",
      "name": "Delete Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "${tempVars(\"channel-name\")}_full",
      "comparison": "1",
      "value": "1",
      "iftrue": "3",
      "iftrueVal": "5",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Member Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "👿 Are you trying to close this ticket without the correct permissions!? If you're a member of either the support or management roles, please use `forceclose`.",
      "storage": "1",
      "varName2": "perm-alert",
      "name": "Send Message"
    },
    {
      "time": "5",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "storage": "1",
      "varName": "perm-alert",
      "name": "Delete Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "title": "This Ticket is Pending Closure!",
      "author": "${tempVars(\"author-display\")}",
      "color": "RED",
      "timestamp": "true",
      "url": "",
      "authorIcon": "${tempVars(\"author-avatar\")}",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "This ticket will close in **15 minutes** if there is no signs of activity.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Initiated By",
      "message": "${member}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "channel": "0",
      "varName2": "",
      "varName3": "embed-old",
      "storage3": "1",
      "name": "Send Embed Message MOD"
    },
    {
      "storage": "0",
      "varName": "",
      "filter": "content.length > 0",
      "max": "1",
      "time": "900000",
      "storage2": "1",
      "varName2": "response-interrupt",
      "iftrue": "0",
      "iftrueVal": "12",
      "iffalse": "3",
      "iffalseVal": "8",
      "name": "Await Response Call Action"
    },
    {
      "message": "1",
      "varName": "response-interrupt",
      "info": "3",
      "storage": "1",
      "varName2": "response-author",
      "name": "Store Message Info"
    },
    {
      "title": "This Ticket is no longer closing...",
      "author": "${tempVars(\"author-display\")}",
      "color": "",
      "timestamp": "true",
      "url": "",
      "authorIcon": "${tempVars(\"author-avatar\")}",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "embed-new",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed-new",
      "message": "This ticket was set to close, but was interrupted due to prolonged activity.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embed-new",
      "fieldName": "Initiated By",
      "message": "${member}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed-new",
      "fieldName": "Interrupted By",
      "message": "${tempVars(\"response-author\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed-new",
      "channel": "5",
      "varName2": "nowhere",
      "name": "Send Embed Message"
    },
    {
      "behavior": "0",
      "interpretation": "0",
      "code": "tempVars(\"embed-old\").edit({ embed: tempVars(\"embed-new\") })",
      "storage": "0",
      "varName": "",
      "name": "Run Script"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "info": "1",
      "infoIndex": "1",
      "storage": "1",
      "varName": "close-reason",
      "name": "Store Command Params"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Channel"
    },
    {
      "time": "2",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "title": "A Ticket has been closed!",
      "author": "${tempVars(\"author-display\")}",
      "color": "RED",
      "timestamp": "true",
      "url": "",
      "authorIcon": "${tempVars(\"author-avatar\")}",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "log-embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "log-embed",
      "fieldName": "Closed By",
      "message": "${member}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "log-embed",
      "fieldName": "Ticket ID",
      "message": "ID: `${tempVars(\"ticket-id\")}`",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "condition": "0",
      "comparison": "2",
      "value": "0",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Parameters"
    },
    {
      "storage": "1",
      "varName": "log-embed",
      "fieldName": "Close Reason",
      "message": "No reason was specified.",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "count": "1",
      "name": "Skip Actions"
    },
    {
      "storage": "1",
      "varName": "log-embed",
      "fieldName": "Close Reason",
      "message": "${tempVars(\"close-reason\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "log-embed",
      "message": "Channel ID: ${tempVars(\"channel-id\")}",
      "footerIcon": "",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "log-embed",
      "channel": "6",
      "varName2": "ticket-log-channel",
      "name": "Send Embed Message"
    },
    {
      "time": "5",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "channel": "1",
      "varName": "ticket-file-log-channel",
      "file": "./resources/servers/${tempVars(\"server-id\")}/tickets/${tempVars(\"channel-name\")}.log",
      "message": "",
      "name": "Send File"
    },
    {
      "channel": "6",
      "varName": "ticket-file-log-channel",
      "file": "./resources/servers/${tempVars(\"server-id\")}/tickets/${tempVars(\"channel-name\")}.log",
      "message": "",
      "name": "Send File"
    }
  ],
  "_aliases": [
    "close"
  ]
}
