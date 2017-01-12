!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){e.exports=r(33)},function(e,t){e.exports=common_library},function(e,t,r){e.exports=r(3)(6)},function(e,t){e.exports=react_library},function(e,t,r){e.exports=r(3)(229)},function(e,t,r){e.exports=r(1)(3)},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.resetErrorMessage=t.RESET_ERROR_MESSAGE=t.loadStargazers=t.STARGAZERS_FAILURE=t.STARGAZERS_SUCCESS=t.STARGAZERS_REQUEST=t.loadStarred=t.STARRED_FAILURE=t.STARRED_SUCCESS=t.STARRED_REQUEST=t.loadRepo=t.REPO_FAILURE=t.REPO_SUCCESS=t.REPO_REQUEST=t.loadUser=t.USER_FAILURE=t.USER_SUCCESS=t.USER_REQUEST=void 0;var o=r(16),u=t.USER_REQUEST="USER_REQUEST",i=t.USER_SUCCESS="USER_SUCCESS",a=t.USER_FAILURE="USER_FAILURE",s=function(e){return n({},o.CALL_API,{types:[u,i,a],endpoint:"users/"+e,schema:o.Schemas.USER})},l=(t.loadUser=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return function(r,n){var o=n().entities.users[e];return o&&t.every(function(e){return o.hasOwnProperty(e)})?null:r(s(e))}},t.REPO_REQUEST="REPO_REQUEST"),c=t.REPO_SUCCESS="REPO_SUCCESS",f=t.REPO_FAILURE="REPO_FAILURE",p=function(e){return n({},o.CALL_API,{types:[l,c,f],endpoint:"repos/"+e,schema:o.Schemas.REPO})},d=(t.loadRepo=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return function(r,n){var o=n().entities.repos[e];return o&&t.every(function(e){return o.hasOwnProperty(e)})?null:r(p(e))}},t.STARRED_REQUEST="STARRED_REQUEST"),y=t.STARRED_SUCCESS="STARRED_SUCCESS",v=t.STARRED_FAILURE="STARRED_FAILURE",h=function(e,t){return n({login:e},o.CALL_API,{types:[d,y,v],endpoint:t,schema:o.Schemas.REPO_ARRAY})},E=(t.loadStarred=function(e,t){return function(r,n){var o=n().pagination.starredByUser[e]||{},u=o.nextPageUrl,i=void 0===u?"users/"+e+"/starred":u,a=o.pageCount,s=void 0===a?0:a;return s>0&&!t?null:r(h(e,i))}},t.STARGAZERS_REQUEST="STARGAZERS_REQUEST"),g=t.STARGAZERS_SUCCESS="STARGAZERS_SUCCESS",R=t.STARGAZERS_FAILURE="STARGAZERS_FAILURE",b=function(e,t){return n({fullName:e},o.CALL_API,{types:[E,g,R],endpoint:t,schema:o.Schemas.USER_ARRAY})},m=(t.loadStargazers=function(e,t){return function(r,n){var o=n().pagination.stargazersByRepo[e]||{},u=o.nextPageUrl,i=void 0===u?"repos/"+e+"/stargazers":u,a=o.pageCount,s=void 0===a?0:a;return s>0&&!t?null:r(b(e,i))}},t.RESET_ERROR_MESSAGE="RESET_ERROR_MESSAGE");t.resetErrorMessage=function(){return{type:m}}},function(e,t,r){e.exports=r(3)(207)},function(e,t,r){function n(e,t,r){"__proto__"==t&&o?o(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var o=r(18);e.exports=n},function(e,t,r){function n(e,t){return i(u(e,t,o),e+"")}var o=r(19),u=r(68),i=r(69);e.exports=n},function(e,t,r){function n(e){return u(e)&&o(e)}var o=r(12),u=r(102);e.exports=n},function(e,t,r){e.exports=r(1)(18)},function(e,t,r){e.exports=r(1)(88)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(2),l=n(s),c=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"renderLoadMore",value:function(){var e=this.props,t=e.isFetching,r=e.onLoadMoreClick;return l.default.createElement("button",{style:{fontSize:"150%"},onClick:r,disabled:t},t?"Loading...":"Load More")}},{key:"render",value:function(){var e=this.props,t=e.isFetching,r=e.nextPageUrl,n=e.pageCount,o=e.items,u=e.renderItem,i=e.loadingLabel,a=0===o.length;if(a&&t)return l.default.createElement("h2",null,l.default.createElement("i",null,i));var s=!r;return a&&s?l.default.createElement("h1",null,l.default.createElement("i",null,"Nothing here!")):l.default.createElement("div",null,o.map(u),n>0&&!s&&this.renderLoadMore())}}]),t}(s.Component);c.propTypes={loadingLabel:s.PropTypes.string.isRequired,pageCount:s.PropTypes.number,renderItem:s.PropTypes.func.isRequired,items:s.PropTypes.array.isRequired,isFetching:s.PropTypes.bool.isRequired,onLoadMoreClick:s.PropTypes.func.isRequired,nextPageUrl:s.PropTypes.string},c.defaultProps={isFetching:!0,loadingLabel:"Loading..."},t.default=c},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),u=n(o),i=r(4),a=function(e){var t=e.repo,r=e.owner,n=r.login,o=t.name,a=t.description;return u.default.createElement("div",{className:"Repo"},u.default.createElement("h3",null,u.default.createElement(i.Link,{to:"/"+n+"/"+o},o)," by ",u.default.createElement(i.Link,{to:"/"+n},n)),a&&u.default.createElement("p",null,a))};a.propTypes={repo:o.PropTypes.shape({name:o.PropTypes.string.isRequired,description:o.PropTypes.string}).isRequired,owner:o.PropTypes.shape({login:o.PropTypes.string.isRequired}).isRequired},t.default=a},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),u=n(o),i=r(4),a=function(e){var t=e.user,r=t.login,n=t.avatarUrl,o=t.name;return u.default.createElement("div",{className:"User"},u.default.createElement(i.Link,{to:"/"+r},u.default.createElement("img",{src:n,alt:r,width:"72",height:"72"}),u.default.createElement("h3",null,r," ",o&&u.default.createElement("span",null,"(",o,")"))))};a.propTypes={user:o.PropTypes.shape({login:o.PropTypes.string.isRequired,avatarUrl:o.PropTypes.string.isRequired,name:o.PropTypes.string}).isRequired},t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CALL_API=t.Schemas=void 0;var n=function(){function e(e,t){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw u}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=r(103),u=r(89),i=function(e){var t=e.headers.get("link");if(!t)return null;var r=t.split(",").find(function(e){return e.indexOf('rel="next"')>-1});return r?r.split(";")[0].slice(1,-1):null},a="https://api.github.com/",s=function(e,t){var r=e.indexOf(a)===-1?a+e:e;return fetch(r).then(function(e){return e.json().then(function(r){if(!e.ok)return Promise.reject(r);var n=(0,u.camelizeKeys)(r),a=i(e);return Object.assign({},(0,o.normalize)(n,t),{nextPageUrl:a})})})},l=new o.Schema("users",{idAttribute:function(e){return e.login.toLowerCase()}}),c=new o.Schema("repos",{idAttribute:function(e){return e.fullName.toLowerCase()}});c.define({owner:l});var f=(t.Schemas={USER:l,USER_ARRAY:(0,o.arrayOf)(l),REPO:c,REPO_ARRAY:(0,o.arrayOf)(c)},t.CALL_API=Symbol("Call API"));t.default=function(e){return function(t){return function(r){var o=r[f];if("undefined"==typeof o)return t(r);var u=o.endpoint,i=o.schema,a=o.types;if("function"==typeof u&&(u=u(e.getState())),"string"!=typeof u)throw new Error("Specify a string endpoint URL.");if(!i)throw new Error("Specify one of the exported Schemas.");if(!Array.isArray(a)||3!==a.length)throw new Error("Expected an array of three action types.");if(!a.every(function(e){return"string"==typeof e}))throw new Error("Expected action types to be strings.");var l=function(e){var t=Object.assign({},r,e);return delete t[f],t},c=n(a,3),p=c[0],d=c[1],y=c[2];return t(l({type:p})),s(u,i).then(function(e){return t(l({response:e,type:d}))},function(e){return t(l({type:y,error:e.message||"Something bad happened"}))})}}}},function(e,t,r){function n(e,t,r){(void 0===r||u(e[t],r))&&(void 0!==r||t in e)||o(e,t,r)}var o=r(8),u=r(11);e.exports=n},function(e,t,r){var n=r(86),o=function(){try{var e=n(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=o},function(e,t){function r(e){return e}e.exports=r},function(e,t,r){function n(e){return i(e)?o(e,!0):u(e)}var o=r(96),u=r(50),i=r(12);e.exports=n},function(e,t,r){e.exports=r(3)(116)},function(e,t,r){e.exports=r(1)(12)},function(e,t,r){e.exports=r(3)(210)},function(e,t,r){e.exports=r(1)(63)},function(e,t,r){e.exports=r(1)(81)},function(e,t,r){e.exports=r(1)(87)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(2),l=n(s),c="https://github.com/reactjs/redux",f=function(e){function t(){var e,r,n,i;o(this,t);for(var a=arguments.length,s=Array(a),l=0;l<a;l++)s[l]=arguments[l];return r=n=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.getInputValue=function(){return n.refs.input.value},n.setInputValue=function(e){n.refs.input.value=e},n.handleKeyUp=function(e){13===e.keyCode&&n.handleGoClick()},n.handleGoClick=function(){n.props.onChange(n.getInputValue())},i=r,u(n,i)}return i(t,e),a(t,[{key:"componentWillReceiveProps",value:function(e){e.value!==this.props.value&&this.setInputValue(e.value)}},{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement("p",null,"Type a username or repo full name and hit 'Go':"),l.default.createElement("input",{size:"45",ref:"input",defaultValue:this.props.value,onKeyUp:this.handleKeyUp}),l.default.createElement("button",{onClick:this.handleGoClick},"Go!"),l.default.createElement("p",null,"Code on ",l.default.createElement("a",{href:c,target:"_blank"},"Github"),"."),l.default.createElement("p",null,"Move the DevTools with Ctrl+W or hide them with Ctrl+H."))}}]),t}(s.Component);f.propTypes={value:s.PropTypes.string.isRequired,onChange:s.PropTypes.func.isRequired},t.default=f},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(2),l=n(s),c=r(7),f=r(4),p=r(27),d=n(p),y=r(6),v=function(e){function t(){var e,r,n,i;o(this,t);for(var a=arguments.length,s=Array(a),l=0;l<a;l++)s[l]=arguments[l];return r=n=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.handleDismissClick=function(e){n.props.resetErrorMessage(),e.preventDefault()},n.handleChange=function(e){f.browserHistory.push("/"+e)},i=r,u(n,i)}return i(t,e),a(t,[{key:"componentDidMount",value:function(){}},{key:"renderErrorMessage",value:function(){var e=this.props.errorMessage;return e?l.default.createElement("p",{style:{backgroundColor:"#e99",padding:10}},l.default.createElement("b",null,e)," ","(",l.default.createElement("a",{href:"#",onClick:this.handleDismissClick},"Dismiss"),")"):null}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.inputValue;return l.default.createElement("div",null,l.default.createElement(d.default,{value:r,onChange:this.handleChange}),l.default.createElement("hr",null),this.renderErrorMessage(),t)}}]),t}(s.Component);v.propTypes={errorMessage:s.PropTypes.string,resetErrorMessage:s.PropTypes.func.isRequired,inputValue:s.PropTypes.string.isRequired,children:s.PropTypes.node};var h=function(e,t){return{errorMessage:e.errorMessage,inputValue:t.location.pathname.substring(1)}};t.default=(0,c.connect)(h,{resetErrorMessage:y.resetErrorMessage})(v)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(2),c=n(l),f=r(7),p=r(6),d=r(14),y=n(d),v=r(15),h=n(v),E=r(13),g=n(E),R=function(e){var t=e.fullName;e.loadRepo(t,["description"]),e.loadStargazers(t)},b=function(e){function t(){var e,r,n,i;o(this,t);for(var a=arguments.length,s=Array(a),l=0;l<a;l++)s[l]=arguments[l];return r=n=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.handleLoadMoreClick=function(){n.props.loadStargazers(n.props.fullName,!0)},i=r,u(n,i)}return i(t,e),s(t,[{key:"componentWillMount",value:function(){R(this.props)}},{key:"componentWillReceiveProps",value:function(e){e.fullName!==this.props.fullName&&R(e)}},{key:"renderUser",value:function(e){return c.default.createElement(h.default,{user:e,key:e.login})}},{key:"render",value:function(){var e=this.props,t=e.repo,r=e.owner,n=e.name;if(!t||!r)return c.default.createElement("h1",null,c.default.createElement("i",null,"Loading ",n," details..."));var o=this.props,u=o.stargazers,i=o.stargazersPagination;return c.default.createElement("div",null,c.default.createElement(y.default,{repo:t,owner:r}),c.default.createElement("hr",null),c.default.createElement(g.default,a({renderItem:this.renderUser,items:u,onLoadMoreClick:this.handleLoadMoreClick,loadingLabel:"Loading stargazers of "+n+"..."},i)))}}]),t}(l.Component);b.propTypes={repo:l.PropTypes.object,fullName:l.PropTypes.string.isRequired,name:l.PropTypes.string.isRequired,owner:l.PropTypes.object,stargazers:l.PropTypes.array.isRequired,stargazersPagination:l.PropTypes.object,loadRepo:l.PropTypes.func.isRequired,loadStargazers:l.PropTypes.func.isRequired};var m=function(e,t){var r=t.params.login.toLowerCase(),n=t.params.name.toLowerCase(),o=e.pagination.stargazersByRepo,u=e.entities,i=u.users,a=u.repos,s=r+"/"+n,l=o[s]||{ids:[]},c=l.ids.map(function(e){return i[e]});return{fullName:s,name:n,stargazers:c,stargazersPagination:l,repo:a[s],owner:i[r]}};t.default=(0,f.connect)(m,{loadRepo:p.loadRepo,loadStargazers:p.loadStargazers})(b)},function(e,t,r){"use strict";e.exports=r(31)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),u=n(o),i=r(7),a=r(36),s=n(a),l=r(4),c=function(e){var t=e.store,r=e.history;return u.default.createElement(i.Provider,{store:t},u.default.createElement(l.Router,{history:r,routes:s.default}))};c.propTypes={store:o.PropTypes.object.isRequired,history:o.PropTypes.object.isRequired},t.default=c},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw u}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(2),f=n(c),p=r(7),d=r(6),y=r(15),v=n(y),h=r(14),E=n(h),g=r(13),R=n(g),b=r(78),m=n(b),_=function(e){var t=e.login,r=e.loadUser,n=e.loadStarred;r(t,["name"]),n(t)},S=function(e){function t(){var e,r,n,i;o(this,t);for(var a=arguments.length,s=Array(a),l=0;l<a;l++)s[l]=arguments[l];return r=n=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.handleLoadMoreClick=function(){n.props.loadStarred(n.props.login,!0)},i=r,u(n,i)}return i(t,e),l(t,[{key:"componentWillMount",value:function(){_(this.props)}},{key:"componentWillReceiveProps",value:function(e){e.login!==this.props.login&&_(e)}},{key:"renderRepo",value:function(e){var t=s(e,2),r=t[0],n=t[1];return f.default.createElement(E.default,{repo:r,owner:n,key:r.fullName})}},{key:"render",value:function(){var e=this.props,t=e.user,r=e.login;if(!t)return f.default.createElement("h1",null,f.default.createElement("i",null,"Loading ",r,"'s profile..."));var n=this.props,o=n.starredRepos,u=n.starredRepoOwners,i=n.starredPagination;return f.default.createElement("div",null,f.default.createElement(v.default,{user:t}),f.default.createElement("hr",null),f.default.createElement(R.default,a({renderItem:this.renderRepo,items:(0,m.default)(o,u),onLoadMoreClick:this.handleLoadMoreClick,loadingLabel:"Loading "+r+"'s starred..."},i)))}}]),t}(c.Component);S.propTypes={login:c.PropTypes.string.isRequired,user:c.PropTypes.object,starredPagination:c.PropTypes.object,starredRepos:c.PropTypes.array.isRequired,starredRepoOwners:c.PropTypes.array.isRequired,loadUser:c.PropTypes.func.isRequired,loadStarred:c.PropTypes.func.isRequired};var x=function(e,t){var r=t.params.login.toLowerCase(),n=e.pagination.starredByUser,o=e.entities,u=o.users,i=o.repos,a=n[r]||{ids:[]},s=a.ids.map(function(e){return i[e]}),l=s.map(function(e){return u[e.owner]});return{login:r,starredRepos:s,starredRepoOwners:l,starredPagination:a,user:u[r]}};t.default=(0,p.connect)(x,{loadUser:d.loadUser,loadStarred:d.loadStarred})(S)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}r(81);var o=r(2),u=n(o),i=r(84),a=n(i),s=r(4),l=r(23),c=r(37),f=n(c),p=(0,f.default)(),d=(0,l.syncHistoryWithStore)(s.browserHistory,p),y=document.getElementById("root"),v=function(){var e=r(30).default;a.default.render(u.default.createElement(e,{store:p,history:d}),y)};v()},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var u=r(6),i=o(u),a=r(73),s=n(a),l=r(35),c=n(l),f=r(23),p=r(21),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{users:{},repos:{}},t=arguments[1];return t.response&&t.response.entities?(0,s.default)({},e,t.response.entities):e},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1],r=t.type,n=t.error;return r===i.RESET_ERROR_MESSAGE?null:n?t.error:e},v=(0,p.combineReducers)({starredByUser:(0,c.default)({mapActionToKey:function(e){return e.login},types:[i.STARRED_REQUEST,i.STARRED_SUCCESS,i.STARRED_FAILURE]}),stargazersByRepo:(0,c.default)({mapActionToKey:function(e){return e.fullName},types:[i.STARGAZERS_REQUEST,i.STARGAZERS_SUCCESS,i.STARGAZERS_FAILURE]})}),h=(0,p.combineReducers)({entities:d,pagination:v,errorMessage:y,routing:f.routerReducer});t.default=h},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(){function e(e,t){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw u}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=r(76),s=n(a),l=function(e){var t=e.types,r=e.mapActionToKey;if(!Array.isArray(t)||3!==t.length)throw new Error("Expected types to be an array of three elements.");if(!t.every(function(e){return"string"==typeof e}))throw new Error("Expected types to be strings.");if("function"!=typeof r)throw new Error("Expected mapActionToKey to be a function.");var n=i(t,3),a=n[0],l=n[1],c=n[2],f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,nextPageUrl:void 0,pageCount:0,ids:[]},t=arguments[1];switch(t.type){case a:return u({},e,{isFetching:!0});case l:return u({},e,{isFetching:!1,ids:(0,s.default)(e.ids,t.response.result),nextPageUrl:t.response.nextPageUrl,pageCount:e.pageCount+1});case c:return u({},e,{isFetching:!1});default:return e}};return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case a:case l:case c:var n=r(t);if("string"!=typeof n)throw new Error("Expected key to be a string.");return u({},e,o({},n,f(e[n],t)));default:return e}}};t.default=l},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),u=n(o),i=r(4),a=r(28),s=n(a),l=r(32),c=n(l),f=r(29),p=n(f);t.default=u.default.createElement(i.Route,{path:"/",component:s.default},u.default.createElement(i.Route,{path:"/:login/:name",component:p.default}),u.default.createElement(i.Route,{path:"/:login",component:c.default}))},function(e,t,r){"use strict";e.exports=r(38)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(21),u=r(90),i=n(u),a=r(16),s=n(a),l=r(34),c=n(l),f=function(e){return(0,o.createStore)(c.default,e,(0,o.applyMiddleware)(i.default,s.default))};t.default=f},function(e,t){function r(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}e.exports=r},function(e,t,r){function n(e,t){var r=null==e?0:e.length;return!!r&&o(e,t,0)>-1}var o=r(48);e.exports=n},function(e,t){function r(e,t,r){for(var n=-1,o=null==e?0:e.length;++n<o;)if(r(t,e[n]))return!0;return!1}e.exports=r},function(e,t){function r(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}e.exports=r},function(e,t,r){function n(e,t,r){var n=e[t];a.call(e,t)&&u(n,r)&&(void 0!==r||t in e)||o(e,t,r)}var o=r(8),u=r(11),i=Object.prototype,a=i.hasOwnProperty;e.exports=n},function(e,t,r){var n=r(5),o=Object.create,u=function(){function e(){}return function(t){if(!n(t))return{};if(o)return o(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();e.exports=u},function(e,t){function r(e,t,r,n){for(var o=e.length,u=r+(n?1:-1);n?u--:++u<o;)if(t(e[u],u,e))return u;return-1}e.exports=r},function(e,t,r){function n(e,t,r,i,a){var s=-1,l=e.length;for(r||(r=u),a||(a=[]);++s<l;){var c=e[s];t>0&&r(c)?t>1?n(c,t-1,r,i,a):o(a,c):i||(a[a.length]=c)}return a}var o=r(97),u=r(65);e.exports=n},function(e,t,r){var n=r(62),o=n();e.exports=o},function(e,t,r){function n(e,t,r){return t===t?i(e,t,r):o(e,u,r)}var o=r(45),u=r(49),i=r(71);e.exports=n},function(e,t){function r(e){return e!==e}e.exports=r},function(e,t,r){function n(e){if(!o(e))return i(e);var t=u(e),r=[];for(var n in e)("constructor"!=n||!t&&s.call(e,n))&&r.push(n);return r}var o=r(5),u=r(24),i=r(67),a=Object.prototype,s=a.hasOwnProperty;e.exports=n},function(e,t,r){function n(e,t,r,c,f){e!==t&&i(t,function(i,l){if(s(i))f||(f=new o),a(e,t,l,r,n,c,f);else{var p=c?c(e[l],i,l+"",e,t,f):void 0;void 0===p&&(p=i),u(e,l,p)}},l)}var o=r(93),u=r(17),i=r(47),a=r(52),s=r(5),l=r(20);e.exports=n},function(e,t,r){function n(e,t,r,n,g,R,b){var m=e[r],_=t[r],S=b.get(_);if(S)return void o(e,r,S);var x=R?R(m,_,r+"",e,t,b):void 0,P=void 0===x;if(P){var w=c(_),T=!w&&p(_),O=!w&&!T&&h(_);x=_,w||T||O?c(m)?x=m:f(m)?x=a(m):T?(P=!1,x=u(_,!0)):O?(P=!1,x=i(_,!0)):x=[]:v(_)||l(_)?(x=m,l(m)?x=E(m):(!y(m)||n&&d(m))&&(x=s(_))):P=!1}P&&(b.set(_,x),g(x,_,n,R,b),b.delete(_)),o(e,r,x)}var o=r(17),u=r(57),i=r(58),a=r(59),s=r(64),l=r(26),c=r(22),f=r(10),p=r(85),d=r(87),y=r(5),v=r(100),h=r(88),E=r(75);e.exports=n},function(e,t){function r(e){return function(t){return null==t?void 0:t[e]}}e.exports=r},function(e,t,r){var n=r(72),o=r(18),u=r(19),i=o?function(e,t){return o(e,"toString",{configurable:!0,enumerable:!1,value:n(t),writable:!0})}:u;e.exports=i},function(e,t,r){function n(e,t,r){var n=-1,f=u,p=e.length,d=!0,y=[],v=y;if(r)d=!1,f=i;else if(p>=c){var h=t?null:s(e);if(h)return l(h);d=!1,f=a,v=new o}else v=t?[]:y;e:for(;++n<p;){var E=e[n],g=t?t(E):E;if(E=r||0!==E?E:0,d&&g===g){for(var R=v.length;R--;)if(v[R]===g)continue e;t&&v.push(g),y.push(E)}else f(v,g,r)||(v!==y&&v.push(g),y.push(E))}return y}var o=r(92),u=r(40),i=r(41),a=r(99),s=r(63),l=r(25),c=200;e.exports=n},function(e,t,r){function n(e){var t=new e.constructor(e.byteLength);return new o(t).set(new o(e)),t}var o=r(94);e.exports=n},function(e,t,r){(function(e){function n(e,t){if(t)return e.slice();var r=e.length,n=l?l(r):new e.constructor(r);return e.copy(n),n}var o=r(79),u="object"==typeof t&&t&&!t.nodeType&&t,i=u&&"object"==typeof e&&e&&!e.nodeType&&e,a=i&&i.exports===u,s=a?o.Buffer:void 0,l=s?s.allocUnsafe:void 0;e.exports=n}).call(t,r(82)(e))},function(e,t,r){function n(e,t){var r=t?o(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var o=r(56);e.exports=n},function(e,t){function r(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}e.exports=r},function(e,t,r){function n(e,t,r,n){var i=!r;r||(r={});for(var a=-1,s=t.length;++a<s;){var l=t[a],c=n?n(r[l],e[l],l,r,e):void 0;void 0===c&&(c=e[l]),i?u(r,l,c):o(r,l,c)}return r}var o=r(43),u=r(8);e.exports=n},function(e,t,r){function n(e){return o(function(t,r){var n=-1,o=r.length,i=o>1?r[o-1]:void 0,a=o>2?r[2]:void 0;for(i=e.length>3&&"function"==typeof i?(o--,i):void 0,a&&u(r[0],r[1],a)&&(i=o<3?void 0:i,o=1),t=Object(t);++n<o;){var s=r[n];s&&e(t,s,n,i)}return t})}var o=r(9),u=r(66);e.exports=n},function(e,t){function r(e){return function(t,r,n){for(var o=-1,u=Object(t),i=n(t),a=i.length;a--;){var s=i[e?a:++o];if(r(u[s],s,u)===!1)break}return t}}e.exports=r},function(e,t,r){var n=r(91),o=r(74),u=r(25),i=1/0,a=n&&1/u(new n([,-0]))[1]==i?function(e){return new n(e)}:o;e.exports=a},function(e,t,r){function n(e){return"function"!=typeof e.constructor||i(e)?{}:o(u(e))}var o=r(44),u=r(83),i=r(24);e.exports=n},function(e,t,r){function n(e){return i(e)||u(e)||!!(a&&e&&e[a])}var o=r(80),u=r(26),i=r(22),a=o?o.isConcatSpreadable:void 0;e.exports=n},function(e,t,r){function n(e,t,r){if(!a(r))return!1;var n=typeof t;return!!("number"==n?u(r)&&i(t,r.length):"string"==n&&t in r)&&o(r[t],e)}var o=r(11),u=r(12),i=r(101),a=r(5);e.exports=n},function(e,t){function r(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}e.exports=r},function(e,t,r){function n(e,t,r){return t=u(void 0===t?e.length-1:t,0),function(){for(var n=arguments,i=-1,a=u(n.length-t,0),s=Array(a);++i<a;)s[i]=n[t+i];i=-1;for(var l=Array(t+1);++i<t;)l[i]=n[i];return l[t]=r(s),o(e,this,l)}}var o=r(39),u=Math.max;e.exports=n},function(e,t,r){var n=r(54),o=r(70),u=o(n);e.exports=u},function(e,t){function r(e){var t=0,r=0;return function(){var i=u(),a=o-(i-r);if(r=i,a>0){if(++t>=n)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var n=800,o=16,u=Date.now;e.exports=r},function(e,t){function r(e,t,r){for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}e.exports=r},function(e,t){function r(e){return function(){return e}}e.exports=r},function(e,t,r){var n=r(51),o=r(61),u=o(function(e,t,r){n(e,t,r)});e.exports=u},function(e,t){function r(){}e.exports=r},function(e,t,r){function n(e){return o(e,u(e))}var o=r(60),u=r(20);e.exports=n},function(e,t,r){var n=r(46),o=r(9),u=r(55),i=r(10),a=o(function(e){return u(n(e,1,i,!0))});e.exports=a},function(e,t,r){function n(e){if(!e||!e.length)return[];var t=0;return e=o(e,function(e){if(s(e))return t=l(e.length,t),!0}),a(t,function(t){return u(e,i(t))})}var o=r(95),u=r(42),i=r(53),a=r(98),s=r(10),l=Math.max;e.exports=n},function(e,t,r){var n=r(9),o=r(77),u=n(o);e.exports=u},function(e,t,r){e.exports=r(1)(1)},function(e,t,r){e.exports=r(1)(11)},function(e,t,r){e.exports=r(104)(114)},function(e,t,r){e.exports=r(1)(13)},function(e,t,r){e.exports=r(3)(138)},function(e,t,r){e.exports=r(3)(140)},function(e,t,r){e.exports=r(1)(19)},function(e,t,r){e.exports=r(1)(2)},function(e,t,r){e.exports=r(1)(20)},function(e,t,r){e.exports=r(1)(22)},function(e,t,r){e.exports=r(1)(24)},function(e,t,r){e.exports=r(3)(246)},function(e,t,r){e.exports=r(1)(28)},function(e,t,r){e.exports=r(1)(29)},function(e,t,r){e.exports=r(1)(30)},function(e,t,r){e.exports=r(1)(31)},function(e,t,r){
e.exports=r(1)(33)},function(e,t,r){e.exports=r(1)(34)},function(e,t,r){e.exports=r(1)(35)},function(e,t,r){e.exports=r(1)(44)},function(e,t,r){e.exports=r(1)(46)},function(e,t,r){e.exports=r(3)(47)},function(e,t,r){e.exports=r(1)(60)},function(e,t,r){e.exports=r(1)(9)},function(e,t,r){e.exports=r(1)(96)},function(e,t){e.exports=polyfill_library}]);