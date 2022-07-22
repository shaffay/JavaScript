const Complaint = () =>{


    let name =  document.complaint.yname.value;
    // let num =  document.complaint.num.value;
    let sex =  document.complaint.sex.value;
    // let complaint =  document.complaint.complaint.value;


    if(sex == "Male"){
        alert("Dear Sir, "+name+" your complaint has been registered");
    }else if(sex == "Female"){
        alert("Dear Maam, "+name+" your complaint has been registered");

    }



}