'use strict';

let router ;
let app ;
let wd = new WikiData() ;


$(document).ready ( function () {
	vue_components.toolname = 'picturesque' ;
	Promise.all ( [
		vue_components.loadComponents ( ['wd-link','tool-translate','tool-navbar','typeahead-search',
			'vue_components/main.html',
			'vue_components/create.html',
			'vue_components/wikiverse.html',
			'vue_components/third_party.html',
			'vue_components/missing.html',
			'vue_components/metadata.html',
			'vue_components/maintenance.html',
			'vue_components/glam.html',
			'vue_components/queries.html',
			'vue_components/sparql.html',
			] ) ,
	] )	.then ( () => {
			wd_link_wd = wd ;
			const routes = [
			  { path: '/', component: MainPage , props:true },
			  { path: '/create', component: CreateImages , props:true },
			  { path: '/wikiverse', component: FromWikiVerse , props:true },
			  { path: '/third-party', component: FromThirdParty , props:true },
			  { path: '/missing', component: Missing , props:true },
			  { path: '/metadata', component: Metadata , props:true },
			  { path: '/maintenance', component: Maintenance , props:true },
			  { path: '/glam', component: GLAM , props:true },
			  { path: '/queries', component: Queries , props:true },
			  { path: '/sparql', component: SPARQL , props:true },
			] ;
			router = new VueRouter({routes}) ;
			app = new Vue ( { router } ) .$mount('#app') ;
		} ) ;

	// Logging
	//$.getJSON ( 'https://tools.wmflabs.org/magnustools/logger.php?tool=picturesque&method=loaded&callback=?' , function(j){} ) ;

} ) ;
