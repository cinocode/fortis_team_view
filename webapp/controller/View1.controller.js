sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("fortis_team_view.controller.View1", {
		/**
		 *@memberOf fortis_team_view.controller.View1
		 */
		button_clicked: function (oEvent) {
			alert("Hello World");
		}
	});
});