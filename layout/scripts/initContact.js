  window.requestTypeSequencing = true;
  function initContactFunction() {
    //alert("window.requestTypeSequencing in contact page:"+window.requestTypeSequencing);
    requestTypeSequencing = sessionStorage.getItem("requestTypeSequencing");
    if (requestTypeSequencing == "false"){

      document.getElementById("request-type").value = "Humanization";
    } else {
      document.getElementById("request-type").value = "Sequencing";
    }
  };
  function initMainFunction() {
    requestTypeSequencing = true;
  }