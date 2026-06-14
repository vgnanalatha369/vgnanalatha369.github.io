document.getElementById("details")
.addEventListener("submit", function(event)
{
    event.preventDefault();
    let Name = document.getElementById("name").value; 
    let Age = document.querySelector('input[name="gender"]:checked').value;
    let Gender = document.getElementById("gender").value;
    let Phone = document.getElementById("phone").value;
    let Address = document.getElementById("address").value;
    let PolicyType = document.getElementById("policyType").value;
    document.getElementById("p1").innerText="Name:"+Name;
    document.getElementById("p2").innerText="Age:"+Age;
    document.getElementById("p3").innerText="Gender:"+Gender;
    document.getElementById("p4").innerText="Phone:"+Phone;
    document.getElementById("p5").innerText="Address:"+Address;
    document.getElementById("p6").innerText="PolicyType:"+PolicyType;

    let image = document.getElementById("image").files[0];
    if(image)
    {
        let read = new FileReader();
        read.onload = function(e)
        {
            document.getElementById("dp").src=e.target.result;
        };
        read.readAsDataURL(image);
    }
});