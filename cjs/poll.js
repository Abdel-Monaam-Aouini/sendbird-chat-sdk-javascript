"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./lib/__bundle-debc9ccd.js"),t=require("./lib/__bundle-f6d4722d.js");class r extends e.Module{constructor(){super(...arguments),this.name="poll"}init(t,{sdkState:r,dispatcher:a,sessionManager:o,requestQueue:l,logger:s,onlineDetector:i,cacheContext:n}){super.init(t,{sdkState:r,dispatcher:a,sessionManager:o,requestQueue:l,logger:s,onlineDetector:i,cacheContext:n}),this._manager=new e.PollManager(t,{sdkState:r,dispatcher:a,sessionManager:o,requestQueue:l,logger:s,onlineDetector:i,cacheContext:n})}create(t){return e.__awaiter(this,void 0,void 0,(function*(){const r=Object.assign(Object.assign({},e.PollCreateParamsDefault),t);return e.unless(e.validatePollCreateParams(r)).throw(e.SendbirdError.invalidParameters),this._manager.create(r)}))}get(t){return e.__awaiter(this,void 0,void 0,(function*(){const r=Object.assign(Object.assign({},e.PollRetrievalParamsDefault),t);return e.unless(e.validatePollRetrievalParams(r)).throw(e.SendbirdError.invalidParameters),this._manager.get(r)}))}getOption(t){return e.__awaiter(this,void 0,void 0,(function*(){const r=Object.assign(Object.assign({},e.PollOptionRetrievalParamsDefault),t);return e.unless(e.validatePollOptionRetrievalParams(r)).throw(e.SendbirdError.invalidParameters),this._manager.getOption(r)}))}buildPollFromSerializedData(e){return this._manager.buildPollFromSerializedData(e)}}exports.Poll=e.Poll,exports.PollListQuery=e.PollListQuery,exports.PollOption=e.PollOption,Object.defineProperty(exports,"PollStatus",{enumerable:!0,get:function(){return e.PollStatus}}),exports.PollVoteEvent=e.PollVoteEvent,exports.PollVoterListQuery=e.PollVoterListQuery,exports.PollUpdateEvent=t.PollUpdateEvent,exports.PollModule=r;
