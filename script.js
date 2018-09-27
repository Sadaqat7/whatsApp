const contacts = [
    {
        name: "Shahid Afridi",
        image: "afridi.jpg",
        lastMsg: "blah blah blah blah blah blah",
        lastMsgTime: "Today",
        lastMsgStatus: "sent",
        number: "5638471",
        email: "afridi3@gmail.com",
        icon1: `<i class="fas fa-phone" ></i>`,
	    icon2: `<i class="far fa-envelope" id="mail"></i>`        

    },
    {
        name: "Ronaldo",
        image: "ronaldo2.jpg",
        lastMsg: "blah blah blah blah blah blah",
        lastMsgTime: "Today",
        lastMsgStatus: "sent",
        number: "4251365",
        email: "ronaldo7@gmail.com",
        icon1: `<i class="fas fa-phone" ></i>`,
	    icon2: `<i class="far fa-envelope" id="mail"></i>`        

    },    {
        name: "Amir Khan",
        image: "amir.jpg",
        lastMsg: "blah blah blah blah blah blah",
        lastMsgTime: "Yesterday",
        lastMsgStatus: "seen",
        number: "1237471",
        email: "amir3@gmail.com",
        icon1: `<i class="fas fa-phone" ></i>`,
	    icon2: `<i class="far fa-envelope" id="mail"></i>`        

    },    {
        name: "Waseem Akram",
        image: "",
        lastMsg: "blah blah blah blah blah blah",
        lastMsgTime: "Yesterday",
        lastMsgStatus: "not sent",
        number: "42569874",
        email: "waseem@gmail.com",
        icon1: `<i class="fas fa-phone" ></i>`,
	    icon2: `<i class="far fa-envelope" id="mail"></i>`        

    },    {
        name: "Mustafa Ali",
        image: "ali.jpg",
        lastMsg: "blah blah blah blah blah blah",
        lastMsgTime: "Yesterday",
        lastMsgStatus: "seen",
        number: "8625471",
        email: "ali@gmail.com",
        icon1: `<i class="fas fa-phone" ></i>`,
	    icon2: `<i class="far fa-envelope" id="mail"></i>`        

    },    {
        name: "KaleemuLLAH",
        image: "kaleem.jpg",
        lastMsg: "blah blah blah blah blah blah",
        lastMsgTime: "Yesterday",
        lastMsgStatus: "sent",
        number: "2338456",
        email: "kaleem4@gmail.com",
        icon1: `<i class="fas fa-phone" ></i>`,
	    icon2: `<i class="far fa-envelope" id="mail"></i>`        

    },    {
        name: "Aisam-Ul-Haq",
        image: "aisam2.jpg",
        lastMsg: "blah blah blah blah blah blah",
        lastMsgTime: "Yesterday",
        lastMsgStatus: "seen",
        number: "1038574",
        email: "aisam6@gmail.com",
        icon1: `<i class="fas fa-phone" ></i>`,
	    icon2: `<i class="far fa-envelope" id="mail"></i>`        

    },    {
        name: "Usain",
        image: "",
        lastMsg: "blah blah blah blah blah blah",
        lastMsgTime: "Yesterday",
        lastMsgStatus: "sent",
        number: "4635423",
        email: "usainbolt8@gmail.com",
        icon1: `<i class="fas fa-phone" ></i>`,
	    icon2: `<i class="far fa-envelope" id="mail"></i>`        

    },    {
        name: "Sohail Abbas",
        image: "sohail.jpg",
        lastMsg: "blah blah blah blah blah blah",
        lastMsgTime: "Yesterday",
        lastMsgStatus: "seen",
        number: "4568421",
        email: "aisam9@gmail.com",
        icon1: `<i class="fas fa-phone" ></i>`,
	    icon2: `<i class="far fa-envelope" id="mail"></i>`        

    },
];
function initialize(){
    const contactsListEl = document.querySelector("#contacts-list");
    for (let i = 0; i < contacts.length; i++ ){

        let icon;
        if (contacts[i].lastMsgStatus === "seen"){
            icon = "check-double";
        } else if (contacts[i].lastMsgStatus === "sent"){
            icon = "check";
        }
        else{
            icon = "clock"
        }
        contactsListEl.innerHTML += 

        `
            <section class="person-item" onclick="changePerson(${i})">
                <div class="person-img" style="background-image: url(images/${contacts[i].image})"></div>
                <div class="person-det">
                    <div class="content-center">
                        <h4 class="name">${contacts[i].name}</h4>
                        <div class="msg-con">
                            <i class="fas fa-${icon}"></i>
                            <p class="msg">${contacts[i].lastMsg}</p>
                        </div>
                    </div>
                    <p class="time">${contacts[i].lastMsgTime}</p>
                </div>
            </section>

        
        `
    }
}
function changePerson(personIndex){
	document.querySelector("#person-name").innerHTML = contacts[personIndex].name;
	document.querySelector("#person-num, #phone").innerHTML = contacts[personIndex].icon1 + contacts[personIndex].number;
	document.querySelector("#person-img").style["background-image"] = `url(images/${contacts[personIndex].image})`;
	document.querySelector("#email, #mail").innerHTML = contacts[personIndex].icon2 + contacts[personIndex].email;
	// document.querySelector("#last-msg").innerHTML = contacts[personIndex].lastMsg;
	document.querySelector(".hint").style.display = "none";
	
	
	
	
}