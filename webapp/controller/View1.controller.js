sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("btp.project1.controller.View1", {
        onInit() {
            var that = this;

        $.ajax({
            url: "./Northwind/V2/Northwind/Northwind.svc/Products?$format=json",
            method: "GET",
            dataType: "json",
            success: function (data) {
                const dashboardModel = new sap.ui.model.json.JSONModel(data.value);
                that.getView().setModel(dashboardModel, "Products");
                sap.m.MessageToast.show("Data coming successfully!");
            },
            error: function () {
                sap.m.MessageToast.show("Failed to load dashboard data.");
            }
        });

        }
    });
});