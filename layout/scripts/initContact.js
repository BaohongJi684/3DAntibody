  window.requestTypeSequencing = true;
  function initContactFunction() {
    //alert("window.requestTypeSequencing in contact page:"+window.requestTypeSequencing);
    requestTypeSequencing = sessionStorage.getItem("requestTypeSequencing");
    if (requestTypeSequencing == "false"){

      document.getElementById("request-type").value = "Humanization";
    } else {
      document.getElementById("request-type").value = "Sequencing";
    }
      const form = document.getElementById('messageForm');
    async function handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      fetch(event.target.action, {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          //alert("Thanks for your submission!");
          document.getElementById('emailConfirm').style.display = "block";
          form.reset();
        }
      });
    }
    form.addEventListener('submit', handleSubmit);
  };
  function initMainFunction() {
    requestTypeSequencing = true;
  }