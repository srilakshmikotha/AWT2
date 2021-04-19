const firebaseConfig = {
    apiKey: "AIzaSyCzQNFISuAoWb8Mqkr_dvWpO6H-JeNoaa0",
    authDomain: "firstproject-2f686.firebaseapp.com",
    projectId: "firstproject-2f686",
    storageBucket: "firstproject-2f686.appspot.com",
    messagingSenderId: "994862867988",
    appId: "1:994862867988:web:7fcb004a47dd122f41e901",
    measurementId: "G-JW09WFGQCK"
  };
  firebase.initializeApp(firebaseConfig);
  var ref=firebase.database().ref().child("friends")

  function insertData(){
      
      var name=document.getElementById("name").value
      var age=document.getElementById("age").value

      ref.child(name).set({
            name:name,
            age:age
      })
      console.log("Inserting data ....")
  }

  function deleteData(){
      var name=window.prompt("Enter the person to be deleted");
      ref.child(name).remove()
      console.log("Entry deleted")
  }

  function updateData(){
      var newAge = document.getElementById("age").value
      var name=document.getElementById("name").value
      ref.child(name).update({age:newAge})
      console.log("Entry Updated")
  }

  
  function retrieveData(){
    var table=document.createElement("TABLE")
    table.border="1"
    row=table.insertRow(-1)
        h1=row.insertCell(-1)
        h2=row.insertCell(-1)
        h1.innerHTML="<b>NAME</b>"
        h2.innerHTML="<b>AGE</b>"
        ref.on("value",(snap)=>{
            snap.forEach((data)=>{
                r1=table.insertRow(-1)
                c1=r1.insertCell(-1)
                c1.innerHTML=data.val().name
                c2=r1.insertCell(-1)
                c2.innerHTML=data.val().age
            })
        })
    var div=document.getElementById("table");
    div.append(table);
  }