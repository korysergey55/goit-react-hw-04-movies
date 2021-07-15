(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{42:function(e,t,n){e.exports={MoviesPageContainer:"MoviesPageStyled_MoviesPageContainer__E0I7-"}},48:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a,c,r,i,o,s,p=n(0),l=n(38),h=n.n(l),m=(n(48),n(5)),u=n(6),d=n(8),b=n(7),f=n(4),g=n.n(f),v=n(27),j=n(16),x=n(12),O=n(13),w=O.a.div(a||(a=Object(x.a)(["\n .trandingTodayTitle {\n  margin-top: 0;\n  margin-bottom: 25px;\n  color: #b8d3f8;\n  font-size: 35px;\n  font-weight: 700;\n  text-align: center;\n  text-shadow: 2px 2px 3px rgba(71, 76, 64, 1);\n }\n .trandingTodayFilmContainer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n\n  .trandingTodayFilmLi {\n   margin-bottom: 20px;\n   box-shadow: 0px 1px 1px rgba(255, 255, 255, 0.12),\n    0px 4px 4px rgba(255, 252, 252, 0.06), 1px 4px 6px rgba(255, 251, 251, 0.16);\n   border-radius: 5px;\n\n   .filmTrandingTodayImg {\n    border-radius: 5px;\n   }\n  }\n }\n .showMore {\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 0px;\n  width: 150px;\n  height: 40px;\n  border-radius: 15px;\n  font-size: 20px;\n  font-weight: 700;\n\n  &:hover {\n   cursor: pointer;\n   background-color: #5e76fa;\n  }\n }\n"]))),y=n(17),k=n.n(y),N=n(15),S=n(2),A=n.p+"static/media/defaultfoto.d2a6f0eb.jpg",C=n(1),I=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={muvies:[],page:1},e.getTrandingMuvieApi=Object(j.a)(g.a.mark((function t(){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"6e40e6f870b3f7c3f9fcc54179d0bae2","https://api.themoviedb.org/3/",t.prev=2,t.next=5,k.a.get("".concat("https://api.themoviedb.org/3/","movie/popular?api_key=").concat("6e40e6f870b3f7c3f9fcc54179d0bae2","&language=en-US&page=").concat(e.state.page));case 5:n=t.sent,e.setState((function(e){var t=e.muvies;return{muvies:[].concat(Object(v.a)(t),Object(v.a)(n.data.results))}})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])}))),e.getShowMore=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getTrandingMuvieApi()}},{key:"componentDidUpdate",value:function(e,t){this.state.page!==t.page&&this.getTrandingMuvieApi()}},{key:"render",value:function(){var e=this;return Object(C.jsxs)(w,{children:[Object(C.jsx)("h2",{className:"trandingTodayTitle",children:"Tranding today"}),Object(C.jsx)("ul",{className:"trandingTodayFilmContainer",children:this.state.muvies.map((function(t){return Object(C.jsx)(N.b,{to:{pathname:"/movies/".concat(t.id),from:e.props.location.pathname},children:Object(C.jsx)("li",{className:"trandingTodayFilmLi",children:Object(C.jsx)("img",{className:"filmTrandingTodayImg",src:t.poster_path?"https://image.tmdb.org/t/p/w300".concat(t.poster_path):A,alt:t.title})},t.id)})}))}),Object(C.jsx)("button",{type:"button",className:"showMore",onClick:this.getShowMore,children:"Show more"})]})}}]),n}(p.Component),M=Object(S.f)(I),F=function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(M,{})})},D=n(22),_=O.a.div(c||(c=Object(x.a)(["\n .SearchFormInput {\n  display: inline-block;\n  margin-top: 15px;\n  margin-left: 35%;\n  margin-right: 10px;\n  width: 300px;\n  height: 40px;\n  padding-left: 30px;\n  border-radius: 15px;\n  outline: none;\n  font-size: 20px;\n  font-weight: 500;\n }\n .SearchFormButton {\n  width: 150px;\n  height: 40px;\n  border-radius: 15px;\n  font-size: 20px;\n  font-weight: 700;\n\n  &:hover {\n   cursor: pointer;\n   background-color: springgreen;\n  }\n }\n .searchFilmContainer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n\n  .searchFilmLi {\n   margin-bottom: 20px;\n   box-shadow: 0px 1px 1px rgba(255, 255, 255, 0.12),\n    0px 4px 4px rgba(255, 252, 252, 0.06), 1px 4px 6px rgba(255, 251, 251, 0.16);\n   border-radius: 5px;\n\n   .filmSearchImg {\n    border-radius: 5px;\n   }\n  }\n }\n"]))),L=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={muvies:[],searchWord:""},e.getSearchMuvieApi=Object(j.a)(g.a.mark((function t(){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"6e40e6f870b3f7c3f9fcc54179d0bae2","https://api.themoviedb.org/3/",t.prev=2,t.next=5,k.a.get("".concat("https://api.themoviedb.org/3/","search/movie?api_key=").concat("6e40e6f870b3f7c3f9fcc54179d0bae2","&query=").concat(e.state.searchWord,"&language=en-US&page=1&include_adult=false"));case 5:n=t.sent,e.setState({muvies:n.data.results}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])}))),e.hadleSubmit=function(t){t.preventDefault(),e.getSearchMuvieApi()},e.seveInputValue=function(t){e.setState(Object(D.a)({},t.target.name,t.target.value))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=new URLSearchParams(this.props.location.search).get("query");e&&this.setState({searchWord:e})}},{key:"componentDidUpdate",value:function(e,t){this.state.searchWord!==t.searchWord&&this.getSearchMuvieApi()}},{key:"render",value:function(){var e=this;return Object(C.jsxs)(_,{children:[Object(C.jsxs)("form",{className:"SearchForm",onSubmit:this.hadleSubmit,children:[Object(C.jsx)("input",{onChange:this.seveInputValue,className:"SearchFormInput",type:"text",name:"searchWord",autocomplete:"off",autofocus:!0,placeholder:" Enter movie heare"}),Object(C.jsx)("button",{type:"submit",className:"SearchFormButton",children:Object(C.jsx)("span",{className:"SearchForm-button-label",children:"Search"})})]}),Object(C.jsx)("ul",{className:"searchFilmContainer",children:this.state.muvies.map((function(t){return Object(C.jsx)(N.b,{to:{pathname:"/movies/".concat(t.id),from:e.props.location.pathname,search:"?query=".concat(e.state.searchWord)},children:Object(C.jsx)("li",{className:"searchFilmLi",children:Object(C.jsx)("img",{className:"filmSearchImg",src:t.poster_path?"https://image.tmdb.org/t/p/w300".concat(t.poster_path," "):A,alt:t.title})},t.id)})}))})]})}}]),n}(p.Component),T=Object(S.f)(L),U=n(42),W=n.n(U),z=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:W.a.MoviesPageContainer,children:Object(C.jsx)(T,{})}),";"]})},P=n(43),B=O.a.div(r||(r=Object(x.a)(["\n .movieDetailsImg {\n  display: inline-block;\n  border-radius: 5px;\n  margin-left: 20px;\n  margin-right: 20px;\n }\n .movieDetailsLi {\n  color: white;\n  display: inline-block;\n  width: 700px;\n\n  .userScore {\n   font-weight: 500;\n  }\n }\n .genrItem {\n  list-style: none;\n\n  .genrName {\n   font-weight: 500;\n   color: green;\n  }\n }\n .movieDetailsAdditionalInformation {\n  display: block;\n  margin-left: 20px;\n  color: white;\n }\n"]))),R=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={muvies:{},genres:[],from:"",search:""},e.getMovieDetailsApi=Object(j.a)(g.a.mark((function t(){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"6e40e6f870b3f7c3f9fcc54179d0bae2","https://api.themoviedb.org/3/",t.prev=2,t.next=5,k.a.get("".concat("https://api.themoviedb.org/3/","movie/").concat(e.props.match.params.movieId,"?api_key=").concat("6e40e6f870b3f7c3f9fcc54179d0bae2","&language=en-US"));case 5:n=t.sent,e.setState({muvies:n.data,genres:n.data.genres}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])}))),e.goBack=function(){e.props.history.push({pathname:e.props.location.from,search:e.props.location.search})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getMovieDetailsApi(),this.props.location.from&&this.setState({from:this.props.location.from,search:this.props.location.search})}},{key:"render",value:function(){return Object(C.jsxs)(B,{children:[Object(C.jsx)("button",{type:"button",className:"buttonGoback",onClick:this.goBack,disabled:!this.state.from,children:"Go back"}),Object(C.jsx)("img",{className:"movieDetailsImg",src:this.state.muvies.poster_path?"https://image.tmdb.org/t/p/w300".concat(this.state.muvies.poster_path," "):A,alt:this.state.muvies.title}),Object(C.jsxs)("li",{className:"movieDetailsLi",children:[Object(C.jsxs)("h2",{children:[this.state.muvies.title," (",this.state.muvies.release_date,")"]}),Object(C.jsxs)("p",{className:"userScore",children:["User score: ",10*this.state.muvies.vote_average," %"]}),Object(C.jsx)("h2",{children:"Overview"}),Object(C.jsx)("p",{children:this.state.muvies.overview}),Object(C.jsx)("h2",{children:"Genres"}),this.state.genres.map((function(e){return Object(C.jsx)("li",{className:"genrItem",children:Object(C.jsx)("p",{className:"genrName",children:e.name})},e.id)}))]}),Object(C.jsx)("h2",{className:"movieDetailsAdditionalInformation",children:"Additional information"})]})}}]),n}(p.Component),q=O.a.ul(i||(i=Object(x.a)(["\n\n .castItem {\n  justify-content: space-between;\n  list-style: none;\n  font-weight: 500;\n }\n"]))),E=n.p+"static/media/InkedcastDefaultFoto.670820f8.jpg",G=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={casts:[]},e.getCastApi=Object(j.a)(g.a.mark((function t(){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"6e40e6f870b3f7c3f9fcc54179d0bae2","https://api.themoviedb.org/3/",t.prev=2,t.next=5,k.a.get("".concat("https://api.themoviedb.org/3/","movie/").concat(e.props.match.params.movieId,"/credits?api_key=").concat("6e40e6f870b3f7c3f9fcc54179d0bae2","&language=en-US"));case 5:n=t.sent,e.setState({casts:n.data.cast}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])}))),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getCastApi()}},{key:"render",value:function(){return Object(C.jsx)(q,{children:this.state.casts.map((function(e){return Object(C.jsxs)("li",{className:"castItem",children:[Object(C.jsx)("p",{className:"casActor",children:e.character?e.character:"Actor"}),Object(C.jsx)("img",{src:e.profile_path?"https://image.tmdb.org/t/p/w92/".concat(e.profile_path):E,alt:"castFoto",className:"castFoto"})]},e.id)}))})}}]),n}(p.Component),J=O.a.ul(o||(o=Object(x.a)(["\n .reviewAuthor {\n     font-size: 20px;\n     font-weight: 500;\n }\n"]))),V=[{name:"Cast",path:"/cast",exact:!0,component:G},{name:"Reviews",path:"/reviews",exact:!0,component:function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={reviews:[]},e.getReviewsApi=Object(j.a)(g.a.mark((function t(){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"6e40e6f870b3f7c3f9fcc54179d0bae2","https://api.themoviedb.org/3/",t.prev=2,t.next=5,k.a.get("".concat("https://api.themoviedb.org/3/","movie/").concat(e.props.match.params.movieId,"/reviews?api_key=").concat("6e40e6f870b3f7c3f9fcc54179d0bae2","&language=en-US&page=1"));case 5:n=t.sent,e.setState({reviews:n.data.results}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])}))),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getReviewsApi()}},{key:"render",value:function(){return Object(C.jsx)(J,{children:this.state.reviews.map((function(e){return e?Object(C.jsxs)("li",{className:"reviewItem",children:[Object(C.jsxs)("p",{className:"reviewAuthor",children:["Author: ",e.author]}),Object(C.jsx)("p",{children:e.content})]},e.id):"We dont hawe any reviws for this muvie"}))})}}]),n}(p.Component)}],H=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={from:""},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(R,Object(P.a)({},this.props)),Object(C.jsx)("ul",{children:V.map((function(t){var n=t.name,a=t.exact,c=t.path;return Object(C.jsx)("li",{children:Object(C.jsx)(N.c,{className:"linkDetails",activeClassName:"linkDetailActiv",to:e.props.match.url+c,exact:a,children:n})},c)}))}),Object(C.jsx)(S.c,{children:V.map((function(t){var n=t.component,a=t.exact,c=t.path;return Object(C.jsx)(S.a,{to:e.props.match.url+c,path:e.props.match.path+c,exact:a,component:n},c)}))})]})}}]),n}(p.Component),K=[{name:"Home",path:"/",exact:!0,component:F,isLink:!0},{name:"Movies",path:"/movies",exact:!0,component:z,isLink:!0},{name:"MoviesDetailsPage",path:"/movies/:movieId",exact:!1,component:Object(S.f)(H),isLink:!1}],Q=O.a.nav(s||(s=Object(x.a)(["\n padding: 7px;\n border-bottom: 3px solid black;\n background-color: rgb(175, 114, 86);\n\n .NavLinkContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin:0;\n }\n .NavLink {\n  margin-right: 30px;\n  font-size: 30px;\n  font-weight: 700;\n  text-decoration: none;\n  text-shadow: 2px 2px 3px #ecffd1;\n }\n .NavLinkActiv {\n  color: red;\n }\n"]))),X=Object(S.f)((function(e){var t=e.location;return Object(C.jsx)(Q,{children:Object(C.jsx)("ul",{className:"NavLinkContainer",children:K.map((function(e){var n=e.path,a=e.name,c=e.exact;return e.isLink&&Object(C.jsx)("li",{children:Object(C.jsx)(N.c,{to:{pathname:n,state:{from:t.pathname}},exact:c,className:"NavLink",activeClassName:"NavLinkActiv",children:a})},n)}))})})})),Y=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(X,{}),K.map((function(e){return Object(C.jsx)(S.a,{path:e.path,exact:e.exact,component:e.component},e.path)}))]})}}]),n}(p.Component);h.a.render(Object(C.jsx)(N.a,{children:Object(C.jsx)(Y,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.c3aeaddd.chunk.js.map