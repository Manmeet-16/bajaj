fetch("https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount",{
  method:"POST",
  "header":{"Content-Type": "application/json"
},
     body:JSON.stringify({
       "name": "Manmeet Kaur",
       "email": "manmeet1117.be21@chitkarauniversity.edu.in",
       "rollNumber": "2111981117", 
       "phone": "9779513426"
     })
 
}).then(response=>response.json()).then(data=>{
  console.log("account created");
  fetch("https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks",{
     method:"POST",
      "header":{"Content-Type": "application/json",
      "bfhl-auth": data.rollNumber
    },
         body:JSON.stringify({
           "company": "Bajaj",
           "currentPrice": 1571.70,
           "accountNumber":data.accountNumber,
           "githubRepoLink" : "https://github.com/Manmeet-16/bajaj.git"
         })
  })
})
  
