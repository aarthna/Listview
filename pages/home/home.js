(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            
            var dataArray = new Array();
            var openpicker = Windows.Storage.Pickers.FileOpenPicker();
            openpicker.viewMode = Windows.Storage.Pickers.PickerViewMode.thumbnail;
            openpicker.suggestedStartLocation = Windows.Storage.Pickers.PickerLocationId.documentsLibrary;
            openpicker.fileTypeFilter.replaceAll([".txt"]);
            openpicker.pickMultipleFilesAsync().then(function (files) {
                if(files.size>0)
                {
                    for(var i=0;i<files.size;i++)
                    {
                        var file = files[i].name;
                        var path = files[i].path;
                        dataArray.push({ fname: file, fpath: path });
                    }
                }
                var dataList = new WinJS.Binding.List(dataArray);
                var listControlDiv = document.getElementById("basicListView");
                var listControl = listControlDiv.winControl;
                listControl.itemDataSource = dataList.dataSource;
            });
        }
        
    });
    function initialize() {
        var b = document.getElementById("rootElement");
        WinJS.UI.processAll();
    }
})();
