"use strict";var e=require("./__bundle-2596e4e9.js");class t extends e.APIRequestCommand{constructor({title:t,optionTexts:s,data:o,allowUserSuggestion:n,allowMultipleVotes:l,closeAt:i}){super(),this.method=e.APIRequestMethod.POST,this.path=e.API_PATH_POLLS,this.params={title:t,options:s,data:o,allow_user_suggestion:n,allow_multiple_votes:l,close_at:i}}}class s extends e.APIResponseCommand{constructor(t,s){super(t,s),this.poll=new e.Poll(t,s)}}class o extends e.APIRequestCommand{constructor({channelUrl:t,channelType:s,pollId:o}){super(),this.method=e.APIRequestMethod.GET,this.path=`${e.API_PATH_POLLS}/${encodeURIComponent(o)}`,this.params={channel_url:t,channel_type:s}}}class n extends e.APIResponseCommand{constructor(t,s){super(t,s),this.poll=new e.Poll(t,s)}}class l extends e.APIRequestCommand{constructor({channelUrl:t,channelType:s,pollId:o,pollOptionId:n}){super(),this.method=e.APIRequestMethod.GET,this.path=`${e.API_PATH_POLLS}/${encodeURIComponent(o)}/options/${encodeURIComponent(n)}`,this.params={channel_url:t,channel_type:s}}}class i extends e.APIResponseCommand{constructor(t,s){super(t,s),this.pollOption=new e.PollOption(t,s)}}class a extends e.APIRequestCommand{constructor({channelType:t,channelUrl:s,timestamp:o,token:n}){super(),this.method=e.APIRequestMethod.GET,this.path=`${e.getChannelApiPathByType(t)}/${encodeURIComponent(s)}/polls/changelogs`,this.params=e.deundefined({change_ts:o,token:n})}}class r extends e.APIResponseCommand{constructor(t,s){super(t,s),this.updatedPolls=s.updated.map((s=>((t,s)=>new e.Poll(t,s))(t,s))),this.deletedPollIds=s.deleted.map((e=>e)),this.hasMore=s.has_more,this.nextToken=s.next}}const d={title:"",optionTexts:[],data:void 0,allowUserSuggestion:void 0,allowMultipleVotes:void 0,closeAt:-1},h=t=>e.isTypeOf("string",t.title)&&e.validateOptionTexts(t.optionTexts)&&e.validatePollData(t.data)&&e.isTypeOf("boolean",t.allowUserSuggestion,!0)&&e.isTypeOf("boolean",t.allowMultipleVotes,!0)&&e.isTypeOf("number",t.closeAt,!0),p={};class u extends e.APIRequestCommand{constructor({channelUrl:t,channelType:s,token:o,limit:n}){super(),this.method=e.APIRequestMethod.GET,this.path=e.API_PATH_POLLS,this.params={channel_url:t,channel_type:s,token:o,limit:n}}}class c extends e.APIResponseCommand{constructor(t,s){var o;super(t,s),this.polls=(null!==(o=s.polls)&&void 0!==o?o:[]).map((s=>new e.Poll(t,s))),this.token=s.next}}class _ extends e.ChannelDataListQuery{constructor(e,t){super(e,t.channelUrl,t.channelType,t)}next(){return e.__awaiter(this,void 0,void 0,(function*(){if(this._validate()){if(this._isLoading)throw e.SendbirdError.queryInProgress;if(this._hasNext){this._isLoading=!0;const{requestQueue:t}=e.Vault.of(this._iid),s=new u(Object.assign(Object.assign({},this),{token:this._token})),o=yield t.send(s),{polls:n,token:l}=o.as(c);return this._token=l,this._hasNext=!!l,this._isLoading=!1,n}return[]}throw e.SendbirdError.invalidParameters}))}}class m extends e.APIRequestCommand{constructor({channelUrl:t,channelType:s,pollId:o,pollOptionId:n,token:l,limit:i}){super(),this.method=e.APIRequestMethod.GET,this.path=`${e.API_PATH_POLLS}/${encodeURIComponent(o)}/options/${encodeURIComponent(n)}/voters`,this.params={channel_url:t,channel_type:s,token:l,limit:i}}}class P extends e.APIResponseCommand{constructor(t,s){var o;super(t,s),this.voters=(null!==(o=s.voters)&&void 0!==o?o:[]).map((s=>new e.User(t,s))),this.token=s.next}}class I extends e.ChannelDataListQuery{constructor(e,t){super(e,t.channelUrl,t.channelType,t),this.pollId=t.pollId,this.pollOptionId=t.pollOptionId}_validate(){return super._validate()&&e.isTypeOf("number",this.pollId)&&e.isTypeOf("number",this.pollOptionId)}next(){return e.__awaiter(this,void 0,void 0,(function*(){if(this._validate()){if(this._isLoading)throw e.SendbirdError.queryInProgress;if(this._hasNext){this._isLoading=!0;const{requestQueue:t}=e.Vault.of(this._iid),s=new m(Object.assign(Object.assign({},this),{pollId:this.pollId,pollOptionId:this.pollOptionId,token:this._token})),o=yield t.send(s),{voters:n,token:l}=o.as(P);return this._token=l,this._hasNext=!!l,this._isLoading=!1,n}return[]}throw e.SendbirdError.invalidParameters}))}}exports.PollCreateParamsDefault=d,exports.PollListQuery=_,exports.PollManager=class{constructor(e,{sdkState:t,dispatcher:s,sessionManager:o,requestQueue:n,logger:l}){this._iid=e,this._sdkState=t,this._sessionManager=o,this._requestQueue=n,this._dispatcher=s,this._logger=l,p[e]=this}static of(e){return p[e]}buildPollFromSerializedData(t){const s=e.deserialize(t);return new e.Poll(this._iid,e.Poll.payloadify(s))}get(t){return e.__awaiter(this,void 0,void 0,(function*(){e.unless(e.validatePollRetrievalParams(t)).throw(e.SendbirdError.invalidParameters);const s=new o(Object.assign({},t)),l=yield this._requestQueue.send(s),{poll:i}=l.as(n);return i}))}create(o){return e.__awaiter(this,void 0,void 0,(function*(){e.unless(h(o)).throw(e.SendbirdError.invalidParameters);const n=new t(Object.assign({},o)),l=yield this._requestQueue.send(n),{poll:i}=l.as(s);return i}))}getOption(t){return e.__awaiter(this,void 0,void 0,(function*(){e.unless(e.validatePollOptionRetrievalParams(t)).throw(e.SendbirdError.invalidParameters);const s=new l(Object.assign({},t)),o=yield this._requestQueue.send(s),{pollOption:n}=o.as(i);return n}))}getPollChangeLogs(t,s,o,n=e.CollectionEventSource.SYNC_POLL_CHANGELOGS){return e.__awaiter(this,void 0,void 0,(function*(){const l=new a(e.undefineNullProps({channelType:s,channelUrl:t,timestamp:"number"==typeof o?o:null,token:"string"==typeof o?o:null})),i=yield this._requestQueue.send(l),{updatedPolls:d,deletedPollIds:h,hasMore:p,nextToken:u}=i.as(r);return d.length>0&&this._dispatcher.dispatch(new e.PollChangeLogEventCommand({polls:d,source:n})),{updatedPolls:d,deletedPollIds:h,hasMore:p,token:u}}))}},exports.PollUpdateEvent=class{constructor(e,t){this.pollId=0,this.messageId=0,this.pollId=t.poll.id,this.messageId=t.poll.message_id,this._iid=e,this._payload=t}},exports.PollVoteEvent=class{constructor(e){this.pollId=0,this.messageId=0,this.pollId=e.poll_id,this.messageId=e.message_id,this._payload=e}},exports.PollVoterListQuery=I,exports.validatePollCreateParams=h;
