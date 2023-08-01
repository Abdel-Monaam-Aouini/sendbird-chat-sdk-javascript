"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./lib/__bundle-2596e4e9.js"),t=require("./lib/__bundle-0e2baf5f.js");const s={channelUrl:"",scheduledMessageId:0};class r extends e.Module{constructor(){super(...arguments),this.name="message"}init(e,{sdkState:s,dispatcher:r,sessionManager:a,requestQueue:n,logger:i,onlineDetector:o,cacheContext:u}){super.init(e,{sdkState:s,dispatcher:r,sessionManager:a,requestQueue:n,logger:i,onlineDetector:o,cacheContext:u}),this._manager=new t.MessageManager(e,{sdkState:s,dispatcher:r,requestQueue:n,onlineDetector:o,cacheContext:u})}buildMessageFromSerializedData(e){return this._manager.buildMessageFromSerializedData(e)}buildSenderFromSerializedData(e){return this._manager.buildSenderFromSerializedData(e)}getMessage(s){return e.__awaiter(this,void 0,void 0,(function*(){const r=Object.assign(Object.assign({},t.MessageRetrievalParamsDefault),s);return e.unless(t.validateMessageRetrievalParams(r)).throw(e.SendbirdError.invalidParameters),this._manager.getMessage(r)}))}getScheduledMessage(t){return e.__awaiter(this,void 0,void 0,(function*(){const r=Object.assign(Object.assign({},s),t);return e.unless((t=>e.isTypeOf("string",t.channelUrl)&&""!==t.channelUrl&&e.isTypeOf("number",t.scheduledMessageId)&&t.scheduledMessageId>0)(r)).throw(e.SendbirdError.invalidParameters),this._manager.getScheduledMessage(r)}))}}Object.defineProperty(exports,"MentionType",{enumerable:!0,get:function(){return e.MentionType}}),Object.defineProperty(exports,"MessageType",{enumerable:!0,get:function(){return e.MessageType}}),Object.defineProperty(exports,"MessageTypeFilter",{enumerable:!0,get:function(){return e.MessageTypeFilter}}),Object.defineProperty(exports,"PushNotificationDeliveryOption",{enumerable:!0,get:function(){return e.PushNotificationDeliveryOption}}),Object.defineProperty(exports,"ReplyType",{enumerable:!0,get:function(){return e.ReplyType}}),Object.defineProperty(exports,"SendingStatus",{enumerable:!0,get:function(){return e.SendingStatus}}),exports.AdminMessage=t.AdminMessage,exports.AppleCriticalAlertOptions=t.AppleCriticalAlertOptions,exports.BaseMessage=t.BaseMessage,exports.FileMessage=t.FileMessage,exports.MessageMetaArray=t.MessageMetaArray,exports.MessageRequestHandler=t.MessageRequestHandler,Object.defineProperty(exports,"MessageSearchOrder",{enumerable:!0,get:function(){return t.MessageSearchOrder}}),exports.MessageSearchQuery=t.MessageSearchQuery,exports.MultipleFilesMessage=t.MultipleFilesMessage,exports.MultipleFilesMessageRequestHandler=t.MultipleFilesMessageRequestHandler,exports.OGImage=t.OGImage,exports.OGMetaData=t.OGMetaData,exports.PreviousMessageListQuery=t.PreviousMessageListQuery,exports.Reaction=t.Reaction,exports.ReactionEvent=t.ReactionEvent,Object.defineProperty(exports,"ReactionEventOperation",{enumerable:!0,get:function(){return t.ReactionEventOperation}}),exports.Sender=t.Sender,exports.ThreadInfo=t.ThreadInfo,exports.ThreadInfoUpdateEvent=t.ThreadInfoUpdateEvent,exports.Thumbnail=t.Thumbnail,exports.UploadedFileInfo=t.UploadedFileInfo,exports.UserMessage=t.UserMessage,exports.MessageModule=r;
