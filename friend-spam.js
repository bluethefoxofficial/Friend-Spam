 
  var Total = 0;
      var items = document.getElementsByTagName("*");                    
        for (var i = 0; i < items.length; ++i) {
        if (items[i].textContent.includes("Add Friend")) {
            items[i].click();
            Total++;
        }
    }
  alert("FS: Total of add friends clicked:" + Total);
