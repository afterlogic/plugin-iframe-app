<?php

class_exists('CApi') or die();

class CCustomPlugin extends AApiPlugin
{
	public $mAllowOrigin = false;
	
	/**
	 * @param CApiPluginManager $oPluginManager
	 */
	public function __construct(CApiPluginManager $oPluginManager)
	{
		parent::__construct('1.0', $oPluginManager);
	}

	public function Init()
	{
		parent::Init();

		$this->AddJsFile('js/iframeAppScreen.js');
		$this->AddJsFile('js/include.js');
		
		$this->AddTemplate('IframeAppScreen', 'templates/iframeAppScreen.html', 'Layout', 'Screens-Middle');
        $this->AddJsonHook('AjaxAccountSettingsGet', 'AjaxAccountSettingsGet');
        $this->mAllowOrigin = \CApi::GetConf('plugins.iframe-app.allow-origin', false);
	}
	
    /**
     * @param $oServer
     * @return mixed
     */	
	public function AjaxAccountSettingsGet($oServer)
	{
		if ($this->mAllowOrigin)
		{
			@header('Access-Control-Allow-Origin: '. $this->mAllowOrigin);
		}
	}
}

return new CCustomPlugin($this);
