sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("btp.project1.controller.View1", {
        onInit: function () {
            var that = this;
            $.ajax({
                url: "./Northwind/V2/Northwind/Northwind.svc/Products?$format=json",
                method: "GET",
                dataType: "json",
                success: function (data) {
                    var oModel = new JSONModel(data);
                    that.getView().setModel(oModel, "Products");
                    // MessageToast.show("Data loaded successfully!");
                },
                error: function () {
                   // MessageToast.show("Failed to load dashboard data.");
                }
            });


            var myKeyVals = { 
                    "current_status": "available",
                    "room_category": "Suite ",
                    "room_feature": "Sea Facing",
                    "room_no": 850
               
            };
            
            $.ajax({
                method: "POST",
                url: "./API/api/rooms",
                data: JSON.stringify(myKeyVals),
                contentType: "application/json",   
                dataType: "json",             
                success: function (_data) {
                    MessageToast.show("Data created successfully!");
                },
                error: function () {
                    MessageToast.show("Failed to load dashboard data.");
                }
            });
            
        }
    });
});
