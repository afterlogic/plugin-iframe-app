
/**
 * @constructor
 */
function CIframeAppScreen()
{
	this.userId = ko.observable(0);
	this.userEmail = ko.observable('');
	this.userName = ko.observable('');
	this.token = ko.observable('');
	this.authToken = ko.observable('');
	
	this.init();
}

CIframeAppScreen.prototype.init = function ()
{
	var oCurrentAcountData = AfterLogicApi.getCurrentAccountData();
	
	if (oCurrentAcountData)
	{
		this.userId(oCurrentAcountData.Id);
		this.userEmail(oCurrentAcountData.Email);
		this.userName(oCurrentAcountData.FriendlyName);
	}
	
	this.token(AfterLogicApi.getAppDataItem('Token'));
	this.authToken(AfterLogicApi.getAuthToken());
};