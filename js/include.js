
function initialize()
{
	var
		sName = 'iframe_app',
		sHeaderTitle = 'IFrame App',
		sDocumentTitle = 'IFrame App',
		sTemplateName = 'Plugin_IframeAppScreen',
		oViewModelClass = CIframeAppScreen
	;
	
	window.AfterLogicApi.addScreenToHeader(sName, sHeaderTitle, sDocumentTitle, sTemplateName, oViewModelClass);
}

initialize();