 if (document.all !== undefined)
    {
      var items = document.all;
    }
    else
    {
      var items = document.getElementsByTagName("*");
    };                    
        for (var i = 0; i < items.length; ++i) {
        if (items[i].textContent.includes("Add Friend")) {
            items[i].click();
        }
    }
