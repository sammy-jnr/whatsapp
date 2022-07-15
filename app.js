let chats_selector = document.getElementById("chats_selector");
let status_selector = document.getElementById("status_selector");
let calls_selector = document.getElementById("calls_selector");

let active_chats = document.getElementById("active_chats");
let status_section = document.getElementById("status_section");
let calls_section = document.getElementById("calls_section");

let container = document.getElementById("container")
let for_chats_section = document.getElementById("for_chats_section")
let for_status_section = document.getElementById("for_status_section")
let for_calls_section = document.getElementById("for_calls_section")
let settings_selector = document.getElementById("settings_selector")
let for_archived_section = document.getElementById("for_archived_section")
let secondary_navigation = document.getElementById("secondary_navigation")
let settings_page = document.getElementById("settings_page")
let settings_account_selector = document.getElementById("settings_account_selector")
let account_page = document.getElementById("account_page")
let privacy_selector = document.getElementById("privacy_selector")
let privacy_page = document.getElementById("privacy_page")
let lastseen_page = document.getElementById("lastseen_page")
let privacy_profile_photo_page = document.getElementById("privacy_profile_photo_page")
let privacy_about_page = document.getElementById("privacy_about_page")
let status_privacy_page = document.getElementById("status_privacy_page")
let default_message_timer_page = document.getElementById("default_message_timer_page")
let privacy_groups_page = document.getElementById("privacy_groups_page")
let blocked_contacts_page = document.getElementById("blocked_contacts_page")
let security_selector = document.getElementById("security_selector")
let security_page = document.getElementById("security_page")
let twostep_verification_page = document.getElementById("twostep_verification_page")
let change_number_page = document.getElementById("change_number_page")
let request_account_info_page = document.getElementById("request_account_info_page")
let delete_my_account_page = document.getElementById("delete_my_account_page")
let chat_page = document.getElementById("chat_page")
let new_group_page = document.getElementById("new_group_page")
let linked_devices_page = document.getElementById("linked_devices_page")
let starredMessages_page = document.getElementById("starredMessages_page")
let storage_and_data_page = document.getElementById("storage_and_data_page")
let contact_us_page = document.getElementById("contact_us_page")
let help_page = document.getElementById("help_page")
let invite_page = document.getElementById("invite_page")
let profile_page = document.getElementById("profile_page")
let write_status_page = document.getElementById("write_status_page")
let view_status_page = document.getElementById("view_status_page")
let new_contact_page = document.getElementById("new_contact_page")
let show_video_page = document.getElementById("show_video_page")
let show_image_page = document.getElementById("show_image_page")




let mainpage_nav_ellipses_icon = document.getElementById("mainpage_nav_ellipses_icon")
mainpage_nav_ellipses_icon.addEventListener("click", ()=>{
    secondary_navigation.style.display = "block"
})

function removeAllSecondaryNavItems(){
    for_chats_section.style.display = "none"
    for_status_section.style.display = "none"
    for_calls_section.style.display = "none"
    settings_selector.style.display = "none"
    for_archived_section.style.display = "none"
}

function closeAllMainPageTabs(){
    active_chats.style.display = "none";
    status_section.style.display = "none";
    calls_section.style.display = "none";

    chats_selector.classList.remove("active");
    status_selector.classList.remove("active");
    calls_selector.classList.remove("active");
}

chats_selector.addEventListener("click", ()=>{
    if(document.getElementById("mainpage_iconsline").style.display == "flex"){checkWindow()}
    closeAllMainPageTabs();
    removeAllSecondaryNavItems();
    active_chats.style.display = "block";
    chats_selector.classList.add("active");
    settings_selector.style.display = "block";
    for_chats_section.style.display = "block";
})
status_selector.addEventListener("click", ()=>{
    if(document.getElementById("mainpage_iconsline").style.display == "flex"){checkWindow()}
    closeAllMainPageTabs();
    removeAllSecondaryNavItems();
    status_section.style.display = "block";
    status_selector.classList.add("active");
    settings_selector.style.display = "block";
    for_status_section.style.display = "block"
})
calls_selector.addEventListener("click", ()=>{
    if(document.getElementById("mainpage_iconsline").style.display == "flex"){checkWindow()}
    closeAllMainPageTabs();
    removeAllSecondaryNavItems();
    calls_section.style.display = "block";
    calls_selector.classList.add("active");
    settings_selector.style.display = "block";
    for_calls_section.style.display = "block";
})

let mainpage = document.getElementById("mainpage")
let archived_page = document.getElementById("archived_page")
let selectcontact_page = document.getElementById("selectcontact_page")
let active_chats_firstline = document.getElementById("active_chats_firstline")

function CloseAllPages(){
    mainpage.style.display = "none"
    archived_page.style.display = "none"
    selectcontact_page.style.display = "none"
    account_page.style.display = "none"
    privacy_page.style.display = "none"
    security_page.style.display = "none"
    settings_page.style.display = "none"
    lastseen_page.style.display = "none"
    privacy_profile_photo_page.style.display = "none"
    privacy_about_page.style.display = "none"
    status_privacy_page.style.display = "none"
    default_message_timer_page.style.display = "none"
    privacy_groups_page.style.display = "none"
    blocked_contacts_page.style.display = "none"
    twostep_verification_page.style.display = "none"
    change_number_page.style.display = "none"
    request_account_info_page.style.display = "none"
    delete_my_account_page.style.display = "none"
    contact_info_page.style.display = "none"
    chat_page.style.display = "none"
    new_group_page.style.display = "none"
    invite_page.style.display = "none"
    linked_devices_page.style.display = "none"
    starredMessages_page.style.display = "none"
    help_page.style.display = "none"
    contact_us_page.style.display = "none"
    storage_and_data_page.style.display = "none"
    profile_page.style.display = "none"
    write_status_page.style.display = "none"
    view_status_page.style.display = "none"
    new_contact_page.style.display = "none"
    show_video_page.style.display = "none"
    show_image_page.style.display = "none"
    
}

// status page

let statusArray = ["Hi","my name is sammy","i am new here","i am a new user","wisdom"];

let view_status_page_bottomsection = document.getElementById("view_status_page_bottomsection")
let view_status_page_barsection = document.getElementById("view_status_page_barsection")
let statusviewed = false
let statusClicked = false

let view_status_page_arrowback_icon = document.getElementById("view_status_page_arrowback_icon")
view_status_page_arrowback_icon.addEventListener("click", ()=>{
    CloseAllPages();
    mainpage.style.display = "block"
    view_status_page_barsection.innerHTML = ""
    document.getElementById("if_new_status").style.display = "none"
})


// FOR STATUS PAGE (STOPPED THO)
let a;
// let my_status_text_div = document.getElementById("my_status_text_div")
// my_status_text_div.addEventListener("click", ()=>{
//     CloseAllPages();
//     view_status_page.style.display = "block"

//     statusArray.forEach(function(status,index){
//         let a = window.innerWidth- 4* statusArray.length
//         let b = a/statusArray.length
//         let statusBarOuter = document.createElement("div")
//         statusBarOuter.classList.add("statusBarOuter")
//         statusBarOuter.style.width = `${b}px`
//         let c = b/0.5
        
//         console.log(b)
//         view_status_page_barsection.appendChild(statusBarOuter)
        
//         setTimeout(function(){view_status_page_bottomsection.innerHTML = status;
//             if(statusviewed == true){return}
//             let statusBar = document.createElement("div")
//             statusBar.classList.add("statusBar")
//             statusBarOuter.appendChild(statusBar)
//             let width = 0
//             let statusBarinterval = setInterval(function(){
//                 width = width + 0.5
//                 statusBar.style.width = `${width}px`
//                 statusBar.style.maxWidth = `${b}px`
//             }, 4000/c)
        
//         }, index*4000)
//     })
//     statusClicked = true
//     setTimeout(function(){CloseAllPages(); mainpage.style.display = "block";
//     view_status_page_barsection.innerHTML = ""
//     document.getElementById("if_new_status").style.display = "none"
//     },4000*statusArray.length)
// })

// CREATE NEW STATUS PAGE


let write_newstatus_div = document.getElementById("write_newstatus_div")
write_newstatus_div.addEventListener("click", ()=>{
    CloseAllPages();
    write_status_page.style.display = "block"
})
let write_status_page_textarea = document.getElementById("write_status_page_textarea")
let write_status_page_send_div = document.getElementById("write_status_page_send_div")
write_status_page_send_div.addEventListener("click", ()=>{
    statusArray.push(write_status_page_textarea.value)
    write_status_page_textarea.value = ""
    CloseAllPages();
    mainpage.style.display = "block"
})
// check_viewed
let check_viewed = document.getElementById("check_viewed")
let view_status_page_viewedBy = document.getElementById("view_status_page_viewedBy")
check_viewed.addEventListener("click", ()=>{
    view_status_page_viewedBy.style.display = "block"
})
window.addEventListener("click", (e)=>{
    if(view_status_page.style.display == "block"){
    if(e.target != view_status_page_viewedBy && e.target.parentNode != view_status_page_viewedBy && e.target != check_viewed){
        alert(e.target)
        console.log(e.target)
        
        view_status_page_viewedBy.style.display = "none"}
    }
});









// capture page
// let capture_page = document.getElementById("capture_page")
// navigator.mediaDevices.getUserMedia({
//     video: {
//         width: { min: 640, ideal: 1280, max: 1920 },
//         height: { min: 480, ideal: 720, max: 1080 }
//     }
// })

// .then(stream => {
//     let newvid = document.getElementById("newvid")
//     newvid.srcObject = stream
//     newvid.play()

// })

// show video page
let show_video_page_arrowback_icon = document.getElementById("show_video_page_arrowback_icon")
show_video_page_arrowback_icon.addEventListener("click", ()=>{
    CloseAllPages()
    chat_page.style.display = "block"
})
let show_image_page_arrowback_icon = document.getElementById("show_image_page_arrowback_icon")
show_image_page_arrowback_icon.addEventListener("click", ()=>{
    CloseAllPages()
    chat_page.style.display = "block"
})



// settings page account privacy ish
let lastPageStatusPrivacy = ""
let status_privacy_selector = document.getElementById("status_privacy_selector")
status_privacy_selector.addEventListener("click", ()=>{
    CloseAllPages();
    lastPageStatusPrivacy = "home"
    status_privacy_page.style.display = "block"
})

settings_selector.addEventListener("click", ()=>{
    CloseAllPages()
    settings_page.style.display = "block"
    secondary_navigation.style.display = "none"
})
let settings_page_arrowback_icon = document.getElementById("settings_page_arrowback_icon")
settings_page_arrowback_icon.addEventListener("click", ()=>{
    CloseAllPages()
    mainpage.style.display = "block"
})

settings_account_selector.addEventListener("click", ()=>{
    CloseAllPages()
    account_page.style.display = "block"
})
let account_page_arrowback_icon = document.getElementById("account_page_arrowback_icon")
account_page_arrowback_icon.addEventListener("click", ()=>{
    CloseAllPages()
    settings_page.style.display = "block"
})

privacy_selector.addEventListener("click", ()=>{
    CloseAllPages()
    privacy_page.style.display = "block"
})
let privacy_page_arrowback_icon = document.getElementById("privacy_page_arrowback_icon")
privacy_page_arrowback_icon.addEventListener("click", ()=>{
    CloseAllPages()
    account_page.style.display = "block"
})

// profile page
let settings_profile_textdiv = document.getElementById("settings_profile_textdiv")
let profile_page_arrowback_icon = document.getElementById("profile_page_arrowback_icon")
profile_page_arrowback_icon.addEventListener("click", ()=>{
    CloseAllPages()
    settings_page.style.display = "block"
})
settings_profile_textdiv.addEventListener("click", ()=>{
    CloseAllPages()
    profile_page.style.display = "block"
})
let profile_page_input_div_pencil_icon1 = document.getElementById("profile_page_input_div_pencil_icon1")
let profile_page_input_div_pencil_icon2 = document.getElementById("profile_page_input_div_pencil_icon2")
let change_profilename_div = document.getElementById("change_profilename_div")
let profile_character_counter = document.getElementById("profile_character_counter")
let change_profilename_div_secondline_input = document.getElementById("change_profilename_div_secondline_input")

profile_page_input_div_pencil_icon1.addEventListener("click", ()=>{
    change_profilename_div.style.display = "block"
})

let profileName = "";

change_profilename_div_secondline_input.addEventListener("keyup", ()=>{
    profileName = change_profilename_div_secondline_input.value;
    profile_character_counter.innerHTML = 25 - profileName.length;
})

let profile_okbtn = document.getElementById("profile_okbtn")
let profile_display_name = document.getElementById("profile_display_name")
profile_okbtn.addEventListener("click", ()=>{
    if(change_profilename_div_secondline_input.value == ""){return}
    profile_display_name.innerHTML = profileName;
    change_profilename_div.style.display = "none"
})
let profile_cancelbtn = document.getElementById("profile_cancelbtn")
profile_cancelbtn.addEventListener("click", ()=>{
    profileName = "";
    change_profilename_div.style.display = "none"
    change_profilename_div_secondline_input.value = ""
})

let profile_page_bottomsection_image_camera_div = document.getElementById("profile_page_bottomsection_image_camera_div")
let profile_photo_selection_div = document.getElementById("profile_photo_selection_div")
profile_page_bottomsection_image_camera_div.addEventListener("click", ()=>{
    profile_photo_selection_div.style.display = "block"
})

//last seen
let check_last_seen = document.getElementById("check_last_seen")
let lastseen_page_arrowback_icon = document.getElementById("lastseen_page_arrowback_icon")

check_last_seen.addEventListener("click", ()=>{
    CloseAllPages()
    lastseen_page.style.display = "block"
})
lastseen_page_arrowback_icon.addEventListener("click", ()=>{
    CloseAllPages()
    privacy_page.style.display = "block"
})

let lastseen_donebtn = document.getElementById("lastseen_donebtn")
lastseen_donebtn.addEventListener("click", ()=>{
    CloseAllPages()
    privacy_page.style.display = "block"
})

let lastseen_everyone = document.getElementById("lastseen_everyone")
let lastseen_my_contacts = document.getElementById("lastseen_my_contacts")
let lastseen_my_contacts_except = document.getElementById("lastseen_my_contacts_except")
let lastseen_nobody = document.getElementById("lastseen_nobody")

let lastseen_everyone_inner = document.getElementById("lastseen_everyone_inner")
let lastseen_my_contacts_inner = document.getElementById("lastseen_my_contacts_inner")
let lastseen_my_contacts_except_inner = document.getElementById("lastseen_my_contacts_except_inner")
let lastseen_nobody_inner = document.getElementById("lastseen_nobody_inner")

let last_seen_result = document.getElementById("last_seen_result")

function uncheckAllLastseenRadio(){
    lastseen_everyone_inner.style.display = "none"
    lastseen_my_contacts_inner.style.display = "none"
    lastseen_my_contacts_except_inner.style.display = "none"
    lastseen_nobody_inner.style.display = "none"
}

lastseen_everyone.addEventListener("click", ()=>{
    uncheckAllLastseenRadio()
    lastseen_everyone_inner.style.display = "block"
    last_seen_result.innerHTML = "Everyone"
})
lastseen_my_contacts.addEventListener("click", ()=>{
    uncheckAllLastseenRadio()
    lastseen_my_contacts_inner.style.display = "block"
    last_seen_result.innerHTML = "My contacts"
})
lastseen_my_contacts_except.addEventListener("click", ()=>{
    uncheckAllLastseenRadio()
    lastseen_my_contacts_except_inner.style.display = "block"
    last_seen_result.innerHTML = "My contacts except..."
})
lastseen_nobody.addEventListener("click", ()=>{
    uncheckAllLastseenRadio()
    lastseen_nobody_inner.style.display = "block"
    last_seen_result.innerHTML = "Nobody"
})

//profile photo

let check_profile_photo = document.getElementById("check_profile_photo")
let privacy_profile_photo_page_arrowback_icon = document.getElementById("privacy_profile_photo_page_arrowback_icon")

check_profile_photo.addEventListener("click", ()=>{
    CloseAllPages()
    privacy_profile_photo_page.style.display = "block"
})
privacy_profile_photo_page_arrowback_icon.addEventListener("click", ()=>{
    CloseAllPages()
    privacy_page.style.display = "block"
})

let privacy_profile_photo_donebtn = document.getElementById("privacy_profile_photo_donebtn")
privacy_profile_photo_donebtn.addEventListener("click", ()=>{
    CloseAllPages()
    privacy_page.style.display = "block"
})

let privacy_profile_photo_everyone = document.getElementById("privacy_profile_photo_everyone")
let privacy_profile_photo_my_contacts = document.getElementById("privacy_profile_photo_my_contacts")
let privacy_profile_photo_my_contacts_except = document.getElementById("privacy_profile_photo_my_contacts_except")
let privacy_profile_photo_nobody = document.getElementById("privacy_profile_photo_nobody")

let privacy_profile_photo_everyone_inner = document.getElementById("privacy_profile_photo_everyone_inner")
let privacy_profile_photo_my_contacts_inner = document.getElementById("privacy_profile_photo_my_contacts_inner")
let privacy_profile_photo_my_contacts_except_inner = document.getElementById("privacy_profile_photo_my_contacts_except_inner")
let privacy_profile_photo_nobody_inner = document.getElementById("privacy_profile_photo_nobody_inner")

let profile_photo_result = document.getElementById("profile_photo_result")

function uncheckAllprivacy_profile_photoRadio(){
    privacy_profile_photo_everyone_inner.style.display = "none"
    privacy_profile_photo_my_contacts_inner.style.display = "none"
    privacy_profile_photo_my_contacts_except_inner.style.display = "none"
    privacy_profile_photo_nobody_inner.style.display = "none"
}

privacy_profile_photo_everyone.addEventListener("click", ()=>{
    uncheckAllprivacy_profile_photoRadio()
    privacy_profile_photo_everyone_inner.style.display = "block"
    profile_photo_result.innerHTML = "Everyone"
})
privacy_profile_photo_my_contacts.addEventListener("click", ()=>{
    uncheckAllprivacy_profile_photoRadio()
    privacy_profile_photo_my_contacts_inner.style.display = "block"
    profile_photo_result.innerHTML = "My contacts"
})
privacy_profile_photo_my_contacts_except.addEventListener("click", ()=>{
    uncheckAllprivacy_profile_photoRadio()
    privacy_profile_photo_my_contacts_except_inner.style.display = "block"
    profile_photo_result.innerHTML = "My contacts except..."
})
privacy_profile_photo_nobody.addEventListener("click", ()=>{
    uncheckAllprivacy_profile_photoRadio()
    privacy_profile_photo_nobody_inner.style.display = "block"
    profile_photo_result.innerHTML = "Nobody"
})

// about
let check_about = document.getElementById("check_about")
let privacy_about_page_arrowback_icon = document.getElementById("privacy_about_page_arrowback_icon")

check_about.addEventListener("click", ()=>{
    CloseAllPages()
    privacy_about_page.style.display = "block"
})
privacy_about_page_arrowback_icon.addEventListener("click", ()=>{
    CloseAllPages()
    privacy_page.style.display = "block"
})

let privacy_about_donebtn = document.getElementById("privacy_about_donebtn")
privacy_about_donebtn.addEventListener("click", ()=>{
    CloseAllPages()
    privacy_page.style.display = "block"
})

let privacy_about_everyone = document.getElementById("privacy_about_everyone")
let privacy_about_my_contacts = document.getElementById("privacy_about_my_contacts")
let privacy_about_my_contacts_except = document.getElementById("privacy_about_my_contacts_except")
let privacy_about_nobody = document.getElementById("privacy_about_nobody")

let privacy_about_everyone_inner = document.getElementById("privacy_about_everyone_inner")
let privacy_about_my_contacts_inner = document.getElementById("privacy_about_my_contacts_inner")
let privacy_about_my_contacts_except_inner = document.getElementById("privacy_about_my_contacts_except_inner")
let privacy_about_nobody_inner = document.getElementById("privacy_about_nobody_inner")

let about_result = document.getElementById("about_result")

function uncheckAllprivacy_aboutRadio(){
    privacy_about_everyone_inner.style.display = "none"
    privacy_about_my_contacts_inner.style.display = "none"
    privacy_about_my_contacts_except_inner.style.display = "none"
    privacy_about_nobody_inner.style.display = "none"
}

privacy_about_everyone.addEventListener("click", ()=>{
    uncheckAllprivacy_aboutRadio()
    privacy_about_everyone_inner.style.display = "block"
    about_result.innerHTML = "Everyone"
})
privacy_about_my_contacts.addEventListener("click", ()=>{
    uncheckAllprivacy_aboutRadio()
    privacy_about_my_contacts_inner.style.display = "block"
    about_result.innerHTML = "My contacts"
})
privacy_about_my_contacts_except.addEventListener("click", ()=>{
    uncheckAllprivacy_aboutRadio()
    privacy_about_my_contacts_except_inner.style.display = "block"
    about_result.innerHTML = "My contacts except..."
})
privacy_about_nobody.addEventListener("click", ()=>{
    uncheckAllprivacy_aboutRadio()
    privacy_about_nobody_inner.style.display = "block"
    about_result.innerHTML = "Nobody"
})

// status privacy
let check_status = document.getElementById("check_status")
let status_privacy_page_arrowback_icon = document.getElementById("status_privacy_page_arrowback_icon")

check_status.addEventListener("click", ()=>{
    CloseAllPages()
    status_privacy_page.style.display = "block"
})
status_privacy_page_arrowback_icon.addEventListener("click", ()=>{
    if(lastPageStatusPrivacy == "home"){
        CloseAllPages();
        lastPageStatusPrivacy = ""
        mainpage.style.display = "block";
        return;
    }
    CloseAllPages()
    privacy_page.style.display = "block"
})

let status_privacy_donebtn = document.getElementById("status_privacy_donebtn")
status_privacy_donebtn.addEventListener("click", ()=>{
    CloseAllPages()
    mainpage.style.display = "block"
})

let status_privacy_my_contacts = document.getElementById("status_privacy_my_contacts")
let status_privacy_my_contacts_except = document.getElementById("status_privacy_my_contacts_except")
let status_privacy_only_share_with = document.getElementById("status_privacy_only_share_with")

let status_privacy_my_contacts_inner = document.getElementById("status_privacy_my_contacts_inner")
let status_privacy_my_contacts_except_inner = document.getElementById("status_privacy_my_contacts_except_inner")
let status_privacy_only_share_with_inner = document.getElementById("status_privacy_only_share_with_inner")

let status_result = document.getElementById("status_result")

function uncheckAllstatus_privacyRadio(){
    status_privacy_my_contacts_inner.style.display = "none"
    status_privacy_my_contacts_except_inner.style.display = "none"
    status_privacy_only_share_with_inner.style.display = "none"
}
status_privacy_my_contacts.addEventListener("click", ()=>{
    uncheckAllstatus_privacyRadio()
    status_privacy_my_contacts_inner.style.display = "block"
    status_result.innerHTML = "My contacts"
})
status_privacy_my_contacts_except.addEventListener("click", ()=>{
    uncheckAllstatus_privacyRadio()
    status_privacy_my_contacts_except_inner.style.display = "block"
    status_result.innerHTML = "My contacts except..."
})
status_privacy_only_share_with.addEventListener("click", ()=>{
    uncheckAllstatus_privacyRadio()
    status_privacy_only_share_with_inner.style.display = "block"
    status_result.innerHTML = "Only share with..."
})


//read receipts
let read_receipt_icon_div = document.getElementById("read_receipt_icon_div")
let read_receipt_icon_1 = document.getElementById("read_receipt_icon_1")
let read_receipt_icon_2 = document.getElementById("read_receipt_icon_2")

read_receipt_icon_div.addEventListener("click", ()=>{
    if(read_receipt_icon_2.classList.contains("switch_on")){
        read_receipt_icon_2.classList.remove("switch_on")
        read_receipt_icon_2.setAttribute("style", "left: -10px;")
        read_receipt_icon_1.setAttribute("style", "background-color: grey;")
        read_receipt_icon_2.setAttribute("style", "background-color: rgb(155, 155, 155);")
    }else{
        read_receipt_icon_2.classList.add("switch_on")
        read_receipt_icon_1.setAttribute("style", "background-color: #1EBEA5;")
        read_receipt_icon_2.setAttribute("style", "background-color: #1EBEA5;")
        read_receipt_icon_2.style.left = "10px"
    }
})


//dissapearing messages
let disappearing_messages_section = document.getElementById("disappearing_messages_section")
let default_message_timer_page_arrowback_icon = document.getElementById("default_message_timer_page_arrowback_icon")

disappearing_messages_section.addEventListener("click", ()=>{
    CloseAllPages()
    default_message_timer_page.style.display = "block"
})
default_message_timer_page_arrowback_icon.addEventListener("click", ()=>{
    CloseAllPages()
    privacy_page.style.display = "block"
})

let default_message_timer_24hours = document.getElementById("default_message_timer_24hours")
let default_message_timer_7days = document.getElementById("default_message_timer_7days")
let default_message_timer_90days = document.getElementById("default_message_timer_90days")
let default_message_timer_off = document.getElementById("default_message_timer_off")

let default_message_timer_24hours_inner = document.getElementById("default_message_timer_24hours_inner")
let default_message_timer_7days_inner = document.getElementById("default_message_timer_7days_inner")
let default_message_timer_90days_inner = document.getElementById("default_message_timer_90days_inner")
let default_message_timer_off_inner = document.getElementById("default_message_timer_off_inner")

let disappearing_messages_icon = document.getElementById("disappearing_messages_icon")

function uncheckAllprivacy_aboutRadio(){
    default_message_timer_24hours_inner.style.display = "none"
    default_message_timer_7days_inner.style.display = "none"
    default_message_timer_90days_inner.style.display = "none"
    default_message_timer_off_inner.style.display = "none"
}

default_message_timer_24hours.addEventListener("click", ()=>{
    uncheckAllprivacy_aboutRadio()
    default_message_timer_24hours_inner.style.display = "block"
    disappearing_messages_icon.innerHTML = "24 hours"
})
default_message_timer_7days.addEventListener("click", ()=>{
    uncheckAllprivacy_aboutRadio()
    default_message_timer_7days_inner.style.display = "block"
    disappearing_messages_icon.innerHTML = "7 days"
})
default_message_timer_90days.addEventListener("click", ()=>{
    uncheckAllprivacy_aboutRadio()
    default_message_timer_90days_inner.style.display = "block"
    disappearing_messages_icon.innerHTML = "90 days"
})
default_message_timer_off.addEventListener("click", ()=>{
    uncheckAllprivacy_aboutRadio()
    default_message_timer_off_inner.style.display = "block"
    disappearing_messages_icon.innerHTML = "Off"
})

//who can add me to groups
let privacy_groups_Selector = document.getElementById("privacy_groups_Selector")
let privacy_groups_page_arrowback_icon = document.getElementById("privacy_groups_page_arrowback_icon")

privacy_groups_Selector.addEventListener("click", ()=>{
    CloseAllPages()
    privacy_groups_page.style.display = "block"
})
privacy_groups_page_arrowback_icon.addEventListener("click", ()=>{
    CloseAllPages()
    privacy_page.style.display = "block"
})

let privacy_groups_donebtn = document.getElementById("privacy_groups_donebtn")
privacy_groups_donebtn.addEventListener("click", ()=>{
    CloseAllPages()
    privacy_page.style.display = "block"
})

let privacy_groups_everyone = document.getElementById("privacy_groups_everyone")
let privacy_groups_my_contacts = document.getElementById("privacy_groups_my_contacts")
let privacy_groups_my_contacts_except = document.getElementById("privacy_groups_my_contacts_except")

let privacy_groups_everyone_inner = document.getElementById("privacy_groups_everyone_inner")
let privacy_groups_my_contacts_inner = document.getElementById("privacy_groups_my_contacts_inner")
let privacy_groups_my_contacts_except_inner = document.getElementById("privacy_groups_my_contacts_except_inner")

let groups_result = document.getElementById("groups_result")

function uncheckAllprivacy_groupsRadio(){
    privacy_groups_everyone_inner.style.display = "none"
    privacy_groups_my_contacts_inner.style.display = "none"
    privacy_groups_my_contacts_except_inner.style.display = "none"
}

privacy_groups_everyone.addEventListener("click", ()=>{
    uncheckAllprivacy_groupsRadio()
    privacy_groups_everyone_inner.style.display = "block"
    groups_result.innerHTML = "Everyone"
})
privacy_groups_my_contacts.addEventListener("click", ()=>{
    uncheckAllprivacy_groupsRadio()
    privacy_groups_my_contacts_inner.style.display = "block"
    groups_result.innerHTML = "My contacts"
})
privacy_groups_my_contacts_except.addEventListener("click", ()=>{
    uncheckAllprivacy_groupsRadio()
    privacy_groups_my_contacts_except_inner.style.display = "block"
    groups_result.innerHTML = "My contacts except..."
})

// blocked contacts
let blocked_contacts_page_arrowback_icon = document.getElementById("blocked_contacts_page_arrowback_icon")
let privacy_blocked_contacts = document.getElementById("privacy_blocked_contacts")
privacy_blocked_contacts.addEventListener("click", ()=>{
    CloseAllPages()
    blocked_contacts_page.style.display = "block"
})
blocked_contacts_page_arrowback_icon.addEventListener("click", ()=>{
    CloseAllPages()
    privacy_page.style.display = "block"
})

//security page
security_selector.addEventListener("click", ()=>{
    CloseAllPages()
    security_page.style.display = "block"
})
let security_page_arrowback_icon = document.getElementById("security_page_arrowback_icon")
security_page_arrowback_icon.addEventListener("click", ()=>{
    CloseAllPages()
    account_page.style.display = "block"
})

let security_notification_switch = document.getElementById("security_notification_switch")
let security_notification_switch_ball = document.getElementById("security_notification_switch_ball")
let security_notification_switch_div = document.getElementById("security_notification_switch_div")
security_notification_switch_div.addEventListener("click", ()=>{

    if(!security_notification_switch_ball.classList.contains("switch_on")){
        security_notification_switch_ball.classList.add("switch_on")
        security_notification_switch_ball.setAttribute("style", "left : 10px;")
        security_notification_switch.setAttribute("style", "background-color: #00bcd4")

    }else{
        security_notification_switch_ball.setAttribute("style", "left : -10px;")
        security_notification_switch_ball.classList.remove("switch_on")
        security_notification_switch.setAttribute("style", "background-color: rgb(158, 159, 167)")
    }
})

// TWO STEP VERIFICATION PAGE
let twostep_verification_page_arrowback_icon = document.getElementById("twostep_verification_page_arrowback_icon")
let twostep_verification_selector = document.getElementById("twostep_verification_selector")
twostep_verification_selector.addEventListener("click", ()=>{
    CloseAllPages()
    twostep_verification_page.style.display = "block"
})
twostep_verification_page_arrowback_icon.addEventListener("click", ()=>{
    CloseAllPages()
    account_page.style.display = "block"
})

//change number page
let change_number_page_arrowback_icon = document.getElementById("change_number_page_arrowback_icon")
let change_number_selector = document.getElementById("change_number_selector")
change_number_selector.addEventListener("click", ()=>{
    CloseAllPages()
    change_number_page.style.display = "block"
})

let change_number_one_button = document.getElementById("change_number_one_button")
let change_number_one = document.getElementById("change_number_one")
let change_number_two = document.getElementById("change_number_two")
change_number_one_button.addEventListener("click", ()=>{
    change_number_one.style.display = "none"
    change_number_two.style.display = "block"
})
change_number_page_arrowback_icon.addEventListener("click", ()=>{

    if(change_number_one.style.display == "none"){
        change_number_one.style.display = "block"
        change_number_two.style.display = "none"
        return
    }
    CloseAllPages()
    account_page.style.display = "block"
})

// request account info page
let request_account_info_page_arrowback_icon = document.getElementById("request_account_info_page_arrowback_icon")
let request_account_info_selector = document.getElementById("request_account_info_selector")
request_account_info_selector.addEventListener("click", ()=>{
    CloseAllPages()
    request_account_info_page.style.display = "block"
})
request_account_info_page_arrowback_icon.addEventListener("click", ()=>{
    CloseAllPages()
    account_page.style.display = "block"
})

// delete my account page
let delete_my_account_page_arrowback_icon = document.getElementById("delete_my_account_page_arrowback_icon")
let delete_my_account_selector = document.getElementById("delete_my_account_selector")
delete_my_account_selector.addEventListener("click", ()=>{
    CloseAllPages()
    delete_my_account_page.style.display = "block"
})
delete_my_account_page_arrowback_icon.addEventListener("click", ()=>{
    CloseAllPages()
    account_page.style.display = "block"
})

// linked devices
let linked_devices_page_arrowback_icon = document.getElementById("linked_devices_page_arrowback_icon")
linked_devices_page_arrowback_icon.addEventListener("click", ()=>{
    CloseAllPages()
    mainpage.style.display = "block"
})
let linked_devices_selector = document.getElementById("linked_devices_selector")
linked_devices_selector.addEventListener("click", ()=>{
    CloseAllPages()
    linked_devices_page.style.display = "block"
})

// starredMessages page
let starredMessages_page_arrowback_icon = document.getElementById("starredMessages_page_arrowback_icon")
starredMessages_page_arrowback_icon.addEventListener("click", ()=>{
    CloseAllPages()
    mainpage.style.display = "block"
})
let starred_message_selector = document.getElementById("starred_message_selector")
starred_message_selector.addEventListener("click", ()=>{
    CloseAllPages()
    starredMessages_page.style.display = "block"
})
let starredMessagesArray = []
function showstarredMessages(){
    console.log(starredMessagesArray)
    for(let i=0; i<starredMessagesArray.length; i++) {
        let newstarred = document.createElement("div")
        newstarred.classList.add("newstarred")
        newstarred.innerHTML = starredMessagesArray[i]
    }
}


//
active_chats_firstline.addEventListener("click", ()=>{
    CloseAllPages()
    archived_page.style.display = "block"
})



let archived_page_arrowback_icon = document.getElementById("archived_page_arrowback_icon")
archived_page_arrowback_icon.addEventListener("click", ()=>{
    CloseAllPages()
    mainpage.style.display = "block"
})
let archived_page_ellipses = document.getElementById("archived_page_ellipses")
archived_page_ellipses.addEventListener("click", ()=>{
    removeAllSecondaryNavItems();
    for_archived_section.style.display = "block"
    secondary_navigation.style.display = "block"
})


//selectcontacts page   

let chatdiv_icon = document.getElementById("chatdiv_icon")
chatdiv_icon.addEventListener("click", ()=>{
    CloseAllPages()
    selectcontact_page.style.display = "block"
})
let selectcontact_page_arrowback_icon = document.getElementById("selectcontact_page_arrowback_icon")
selectcontact_page_arrowback_icon.addEventListener("click", ()=>{
    CloseAllPages()
    mainpage.style.display = "block"
})
let select_contact_newGroup = document.getElementById("select_contact_newGroup")
select_contact_newGroup.addEventListener("click", ()=>{
    CloseAllPages()
    new_group_page.style.display = "block"
})
let new_group_selector = document.getElementById("new_group_selector")
new_group_selector.addEventListener("click", ()=>{
    CloseAllPages()
    lastPageNewgroup = "home"
    new_group_page.style.display = "block"
})

// selectcontact page new group
let lastPageNewgroup = ""

let no_of_selected_contacts_section = document.getElementById("no_of_selected_contacts_section")
let new_group_page_arrowback_icon = document.getElementById("new_group_page_arrowback_icon")
new_group_page_arrowback_icon.addEventListener("click", ()=>{
    if(new_group_page_groupInfoSection.style.display == "block"){
        new_group_page_groupInfoSection.style.display = "none"
        new_group_page_bottomsection.style.display = "block"
        if(newGroupParticipantArray.length == 0){
            new_group_page_bottomsection.style.paddingTop = "90px";
            no_of_selected_contacts_section.innerHTML = "Add participants"
        }else{
            new_group_selected_participants.style.display = "flex"
            new_group_page_bottomsection.style.paddingTop = "190px"
            no_of_selected_contacts_section.innerHTML = `${newGroupParticipantArray.length} of ${contacts.length} selected`
        }
        return
    }
    new_group_selected_participants.style.display = "none"
    new_group_page_bottomsection.style.paddingTop = "90px"
    newGroupParticipantArray = []
    no_of_selected_contacts_section.innerHTML = "Add participants"
    if(lastPageNewgroup == "home"){
        CloseAllPages()
        lastPageNewgroup = ""
        mainpage.style.display = "block"
        return;
    }
    CloseAllPages()
    selectcontact_page.style.display = "block"
})


let newGroupParticipantArray = []

let new_group_page_bottomsection = document.getElementById("new_group_page_bottomsection")
function loadNewGroupContacts(){
    for(let i = 0; i<sorted.length; i++){
        let contact = sorted[i]
        let individual_contacts = document.createElement("div")
        individual_contacts.classList.add("individual_contacts")
        new_group_page_bottomsection.appendChild(individual_contacts)
        let individual_contacts_image_section = document.createElement("div")
        individual_contacts_image_section.classList.add("individual_contacts_image_section")
        individual_contacts.appendChild(individual_contacts_image_section)
        let individual_contacts_image_div = document.createElement("div")
        individual_contacts_image_div.classList.add("individual_contacts_image_div")
        individual_contacts_image_section.appendChild(individual_contacts_image_div)
        let individual_contacts_checked_div = document.createElement("div")
        individual_contacts_checked_div.classList.add("individual_contacts_checked_div")
        individual_contacts_image_div.appendChild(individual_contacts_checked_div)
        let individual_contacts_checked_icon = document.createElement("img")
        individual_contacts_checked_icon.src = "icons\\checkmark_black.svg"
        individual_contacts_checked_icon.style.width = "15px"
        individual_contacts_checked_div.appendChild(individual_contacts_checked_icon)
        let individual_contacts_text_section = document.createElement("div")
        individual_contacts_text_section.classList.add("individual_contacts_text_section")
        individual_contacts.appendChild(individual_contacts_text_section)
        let individual_contacts_name = document.createElement("div")
        individual_contacts_name.classList.add("individual_contacts_name")
        individual_contacts_name.innerHTML = contact.name
        individual_contacts_text_section.appendChild(individual_contacts_name)
        let individual_contacts_tagline = document.createElement("div")
        individual_contacts_tagline.classList.add("individual_contacts_tagline")
        individual_contacts_tagline.innerHTML = contact.tagline
        individual_contacts_text_section.appendChild(individual_contacts_tagline)
        
        new_group_page_arrowback_icon.addEventListener("click", ()=>{
            if(new_group_page_groupInfoSection.style.display == "none"){
                individual_contacts_checked_div.style.display = "none"
            }
        })


        individual_contacts.addEventListener("click", ()=>{
            for(let k = 0; k<newGroupParticipantArray.length; k++){
                if(newGroupParticipantArray[k].name == contact.name){
                    newGroupParticipantArray.splice(newGroupParticipantArray.indexOf(newGroupParticipantArray[k]), 1)
                    new_group_selected_participants.innerHTML = ""
                    no_of_selected_contacts_section.innerHTML = `${newGroupParticipantArray.length} of ${contacts.length} selected`
                    individual_contacts_checked_div.style.display = "none"
                    if(newGroupParticipantArray.length == 0){
                        new_group_page_bottomsection.style.paddingTop = "90px";
                        no_of_selected_contacts_section.innerHTML = "Add participants"
                    }
                    addParticipantToGroup()
                    return
                }
            }
            if(newGroupParticipantArray.length > 0){
                newGroupParticipantArray.push(contact)
                new_group_selected_participants.innerHTML = ""
                individual_contacts_checked_div.style.display = "flex"
                no_of_selected_contacts_section.innerHTML = `${newGroupParticipantArray.length} of ${contacts.length} selected`
                console.log("yes")
                addParticipantToGroup()
                return
            }
            CloseAllPages()
            chat_page.style.display = "block"
            chat_page_name.innerHTML = contact.name
            contact_info_name.innerHTML = contact.name
            contact_info_number.innerHTML = contact.phoneNo
            contact_info_tagline.innerHTML = contact.tagline
            chat_page_bottomsection.innerHTML = ""
            current_contact_index = i
            showMessages(current_contact_index)
            
            
        })


        individual_contacts.addEventListener("touchstart", start);
        individual_contacts.addEventListener("touchend", end);
        let new_group_selected_participants = document.getElementById("new_group_selected_participants")
        let timeout;
        function displaySelectedParticipants(){
            for(let k = 0; k<newGroupParticipantArray.length; k++){
                if(newGroupParticipantArray[k].name == contact.name){
                    return
                }
            }
            new_group_selected_participants.style.display = "flex"
            new_group_page_bottomsection.style.paddingTop = "190px"
            newGroupParticipantArray.push(contact)
            new_group_selected_participants.innerHTML = ""
            individual_contacts_checked_div.style.display = "flex"
            no_of_selected_contacts_section.innerHTML = `${newGroupParticipantArray.length} of ${contacts.length} selected`
            addParticipantToGroup()
        }
        function start(){
           timeout = setTimeout(displaySelectedParticipants, 1000);
        }
        function end(){
            clearTimeout(timeout);
        }

        



        function addParticipantToGroup(){
            for(let j = 0; j<newGroupParticipantArray.length; j++){
                let participants_div = document.createElement("div")
                participants_div.classList.add("participants_div")
                new_group_selected_participants.appendChild(participants_div)
                let participants_inner_div = document.createElement("div")
                participants_inner_div.classList.add("participants_inner_div")
                participants_div.appendChild(participants_inner_div)
                let participants_cancel_div = document.createElement("div")
                participants_cancel_div.classList.add("participants_cancel_div")
                participants_inner_div.appendChild(participants_cancel_div)
                participants_cancel_div.addEventListener("click", (e)=>{
                    individual_contacts_checked_div.style.display = "none"
                    newGroupParticipantArray.splice(newGroupParticipantArray.indexOf(newGroupParticipantArray[j]),1)
                    no_of_selected_contacts_section.innerHTML = `${newGroupParticipantArray.length} of ${contacts.length} selected`
                    e.target.parentNode.parentNode.style.display = "none"
                })
                let participants_names = document.createElement("div")
                participants_names.classList.add("participants_names")
                participants_names.innerHTML = newGroupParticipantArray[j].name
                participants_div.appendChild(participants_names)
            }
        }
        
            
        
    }
}
window.addEventListener("load", loadNewGroupContacts)


let new_group_page_groupInfoSection = document.getElementById("new_group_page_groupInfoSection")
let showParticipants = document.getElementById("showParticipants")
let new_group_nextbtn_div = document.getElementById("new_group_nextbtn_div")
let participantsNo = document.getElementById("participantsNo")

new_group_nextbtn_div.addEventListener("click", ()=>{
    if(new_group_page_groupInfoSection.style.display == "none"){
        new_group_selected_participants.style.display = "none"
        new_group_page_bottomsection.style.paddingTop = "90px"
        new_group_page_groupInfoSection.style.display = "block"
        new_group_page_bottomsection.style.display = "none"
        showParticipants.innerHTML = ""
        no_of_selected_contacts_section.innerHTML = "Add subject"
        for(let j = 0; j<newGroupParticipantArray.length; j++){
            let participants_div = document.createElement("div")
            participants_div.classList.add("participants_div")
            showParticipants.appendChild(participants_div)
            let participants_inner_div = document.createElement("div")
            participants_inner_div.classList.add("participants_inner_div")
            participants_div.appendChild(participants_inner_div)
            let participants_names = document.createElement("div")
            participants_names.classList.add("participants_names")
            participants_names.innerHTML = newGroupParticipantArray[j].name
            participants_div.appendChild(participants_names)
        }   
        participantsNo.innerHTML = `Participants: ${newGroupParticipantArray.length}` 
        console.log("yes")
    }
    else{
        CloseAllPages()
        mainpage.style.display = "block"
    }
}); 



let contacts =[
    Amanda = {
        name: "Amanda",
        status: "online",
        image: "icons\\user_whitish.svg",
        tagline: "available",
        groups: "",
        phoneNo:"+234 808 080 8080",
        sentMessages:["txthey","txthow are you doing?","txtmy name is Amanda"],
        muteNotification: "unmute",
    },
    Augusta = {
        name: "Augusta",
        status: "online",
        image: "",
        tagline: "innovative",
        groups: "",
        phoneNo:"+234 808 080 8080",
        sentMessages:["txthey","txthow are you doing?","txtmy name is Augusta"],
        muteNotification: "unmute",
    },
    Benita = {
        name: "benita",
        status: "online",
        image: "",
        tagline: ".",
        groups: "",
        phoneNo:"+234 808 080 8080",
        sentMessages:["txthey","txthow are you doing?","txtmy name is benita"],
        muteNotification: "unmute"
    },
    Choko = {
        name: "Choko",
        status: "online",
        image: "",
        tagline: "emoji",
        groups: "",
        phoneNo:"+234 808 080 8080",
        sentMessages:["txthey","txthow are you doing?","txtmy name is Choko"],
        muteNotification: "unmute"
    },
    kamdi = {
        name: "kamdi",
        status: "online",
        image: "",
        tagline: "beyond the heavens and the earth i",
        groups: "",
        phoneNo:"+234 808 080 8080",
        sentMessages:["txthey","txthow are you doing?","txtmy name is kamdi"],
        muteNotification: "unmute"
    }
]
let current_contact_index = 0

// let maiAarchivedChatsArray = []

//contact navigation section

let contact_navigation_section = document.getElementById("contact_navigation_section")
let contact_nav_firstpage = document.getElementById("contact_nav_firstpage")
let contact_nav_secondpage = document.getElementById("contact_nav_secondpage")
let contact_nav_view_contact = document.getElementById("contact_nav_view_contact")
let contact_nav_media_links = document.getElementById("contact_nav_media_links")
let contact_nav_search = document.getElementById("contact_nav_search")
let contact_nav_mute_notifications = document.getElementById("contact_nav_mute_notifications")
let contact_nav_disappearing_messages = document.getElementById("contact_nav_disappearing_messages")
let contact_nav_wallpaper = document.getElementById("contact_nav_wallpaper")
let contact_nav_more = document.getElementById("contact_nav_more")
let contact_nav_report = document.getElementById("contact_nav_report")
let contact_nav_block = document.getElementById("contact_nav_block")
let contact_nav_clear_chat = document.getElementById("contact_nav_clear_chat")
let contact_nav_export_chat = document.getElementById("contact_nav_export_chat")
let contact_nav_add_shortcut = document.getElementById("contact_nav_add_shortcut")

contact_nav_more.addEventListener("click", ()=>{
    contact_nav_firstpage.style.display = "none"
    contact_navigation_section.style.display = "block"
    contact_nav_secondpage.style.display = "block"
})

//contact info page
let contact_info_page = document.getElementById("contact_info_page")
let contact_info_name = document.getElementById("contact_info_name")
let contact_info_number = document.getElementById("contact_info_number")
let contact_info_tagline = document.getElementById("contact_info_tagline")
let contact_info_page_arrowback_icon = document.getElementById("contact_info_page_arrowback_icon")
let contact_info_mute_notification_switch = document.getElementById("contact_info_mute_notification_switch")
let contact_info_div1 = document.getElementById("contact_info_div1")
let contact_info_div2 = document.getElementById("contact_info_div2")
let reportContactText = document.getElementById("reportContactText")
let blockContactText = document.getElementById("blockContactText")
let block_popup_firstline = document.getElementById("block_popup_firstline")
let contact_info_topsection_name = document.getElementById("contact_info_topsection_name")


let contact_info_create_group_text = document.getElementById("contact_info_create_group_text")
contact_info_mute_notification_switch.addEventListener("click", ()=>{
    if(contact_info_mute_notification_switch.classList.contains("switch_onn")){
        contact_info_div1.style.backgroundColor = "#303d46"
        contact_info_div2.style.backgroundColor = "#969ea3"
        contact_info_div2.style.left = "0px"
        contact_info_mute_notification_switch.classList.remove("switch_onn")
    }else{
        contact_info_div1.style.backgroundColor = "#739b95"
        contact_info_div2.style.backgroundColor = "#1EBEA5"
        contact_info_div2.style.left = "17px"
        contact_info_mute_notification_switch.classList.add("switch_onn")
    }
})
let contact_info_media_links_docs_div = document.getElementById("contact_info_media_links_docs_div")
contact_info_media_links_docs_div.addEventListener("click", ()=>{
    CloseAllPages()
    chat_page.style.display = "block"
    chat_page_input_section.style.display = "none"
    chat_page_bottomsection.style.display = "none"
    chat_page_media_links_docs_page.style.display = "block"
})

//chat page

//chat page bottom section
let lastPageChatpage = ""
let chat_page_bottomsection = document.getElementById("chat_page_bottomsection")
arrowandimg_div.addEventListener("click", ()=>{
    if(chat_page_media_links_docs_page.style.display == "block"){
        chat_page_media_links_docs_page.style.display = "none"
        chat_page_input_section.style.display = "flex"
        chat_page_bottomsection.style.display = "block"
        return
    }
    if(lastPageChatpage == "active"){
        CloseAllPages();
        lastPageChatpage = "";
        mainpage.style.display = "block";
        return;
    }
    if(lastPageChatpage == "contact"){
        CloseAllPages();
        lastPageChatpage = "";
        selectcontact_page.style.display = "block";
        return;
    }
    if(lastPageChatpage == "archive"){
        CloseAllPages();
        lastPageChatpage = "";
        archived_page.style.display = "block";
        return;
    }
    if(lastPageChatpage == "newGroup"){
        CloseAllPages();
        lastPageChatpage = "";
        new_group_page.style.display = "block";
        return;
    }
    CloseAllPages()
    mainpage.style.display = "block"
})

chat_page_name.addEventListener("click", ()=>{
    CloseAllPages()
    chat_page.style.display = "none"
    contact_info_page.style.display = "block"
    contact_info_name.innerHTML = contacts[current_contact_index].name
    contact_info_number.innerHTML = contacts[current_contact_index].phoneNo
    contact_info_tagline.innerHTML = contacts[current_contact_index].tagline
    blockContactText.innerHTML = `Block ${contacts[current_contact_index].name}`
    reportContactText.innerHTML = `Report ${contacts[current_contact_index].name}`
    contact_info_create_group_text.innerHTML = `Create group with ${contacts[current_contact_index].name}`
    contact_info_topsection_name.innerHTML = contacts[current_contact_index].name
})
contact_info_page_arrowback_icon.addEventListener("click", ()=>{
    CloseAllPages()
    chat_page.style.display = "block"
})

chat_page_ellipses_icon.addEventListener("click", ()=>{
    contact_navigation_section.style.display = "block"
})

let chat_page_media_links_docs_page = document.getElementById("chat_page_media_links_docs_page")
contact_nav_media_links.addEventListener("click", ()=>{
    chat_page_input_section.style.display = "none"
    chat_page_bottomsection.style.display = "none"
    chat_page_media_links_docs_page.style.display = "block"
})

contact_nav_view_contact.addEventListener("click", ()=>{
    CloseAllPages()
    contact_info_page.style.display = "block"
})

contact_nav_search.addEventListener("click", ()=>{
    let chat_page_topsection = document.getElementById("chat_page_topsection")
    let chat_page_search_section = document.getElementById("chat_page_search_section")
    chat_page_topsection.style.display = "none"
    chat_page_search_section.style.display = "flex"
})
let chat_page_search_icon = document.getElementById("chat_page_search_icon")
chat_page_search_icon.addEventListener("click", ()=>{
    chat_page_topsection.style.display = "flex"
    chat_page_search_section.style.display = "none"
})

// chatpage input section
let chat_page_input = document.getElementById("chat_page_input")
let chat_page_camera_icon = document.getElementById("chat_page_camera_icon")
let audio_icon_div = document.getElementById("audio_icon_div")
let send_icon_div = document.getElementById("send_icon_div")
let chat_page_input_section_icons_div = document.getElementById("chat_page_input_section_icons_div")
chat_page_input.addEventListener("keyup", revertInputSection) 
function revertInputSection(){
    if(chat_page_input.value == ""){
        send_icon_div.style.display = "none"
        audio_icon_div.style.display = "flex"
        chat_page_camera_icon.style.display = "flex"
        chat_page_input.style.width =  "60%"
        chat_page_input_section_icons_div.style.width = "30%"
    }else{
        send_icon_div.style.display = "flex"
        audio_icon_div.style.display = "none"
        chat_page_camera_icon.style.display = "none"
        chat_page_input.style.width =  "75%"
        chat_page_input_section_icons_div.style.width = "20%"
    }
    chat_page_input.style.height ="30px"
    chat_page_input.style.height = `${chat_page_input.scrollHeight}px`;
    if(chat_page_input_section.clientHeight > 60){
        // chat_page_input_section.style.display = "none"
    }
    chat_page_bottomsection.style.height = `${window.innerHeight - 0.1*window.innerHeight - chat_page_input_section.clientHeight}px`

}
  
// chat page media links docs section
let media_links_docs_page_mediasection = document.getElementById("media_links_docs_page_mediasection")
let media_links_docs_page_linkssection = document.getElementById("media_links_docs_page_linkssection")
let media_links_docs_page_docssection = document.getElementById("media_links_docs_page_docssection")

let chat_page_media_links_docs_page_media_section = document.getElementById("chat_page_media_links_docs_page_media_section")
let chat_page_media_links_docs_page_links_section = document.getElementById("chat_page_media_links_docs_page_links_section")
let chat_page_media_links_docs_page_docs_section = document.getElementById("chat_page_media_links_docs_page_docs_section")


media_links_docs_page_mediasection.addEventListener("click", ()=>{
    chat_page_media_links_docs_page_media_section.style.display = "block"
    chat_page_media_links_docs_page_links_section.style.display = "none"
    chat_page_media_links_docs_page_docs_section.style.display = "none"
    media_links_docs_page_mediasection.classList.add("media_links_docs_active")
    media_links_docs_page_linkssection.classList.remove("media_links_docs_active")
    media_links_docs_page_docssection.classList.remove("media_links_docs_active")
})
media_links_docs_page_linkssection.addEventListener("click", ()=>{ 
    chat_page_media_links_docs_page_media_section.style.display = "none"
    chat_page_media_links_docs_page_links_section.style.display = "block"
    chat_page_media_links_docs_page_docs_section.style.display = "none"
    media_links_docs_page_mediasection.classList.remove("media_links_docs_active")
    media_links_docs_page_linkssection.classList.add("media_links_docs_active")
    media_links_docs_page_docssection.classList.remove("media_links_docs_active")
})
media_links_docs_page_docssection.addEventListener("click", ()=>{
    chat_page_media_links_docs_page_media_section.style.display = "none"
    chat_page_media_links_docs_page_links_section.style.display = "none"
    chat_page_media_links_docs_page_docs_section.style.display = "block"
    media_links_docs_page_mediasection.classList.remove("media_links_docs_active")
    media_links_docs_page_linkssection.classList.remove("media_links_docs_active")
    media_links_docs_page_docssection.classList.add("media_links_docs_active")
})

// chat page mute notification popup

let eightHrsvalue = false
let oneWeekvalue = false
let Alwaysvalue = true

let formereightHrsvalue = false
let formeroneWeekvalue = false
let formerAlwaysvalue = true


let mute_notification_popup = document.getElementById("mute_notification_popup")
contact_nav_mute_notifications.addEventListener("click", ()=>{
    mute_notification_popup.style.display = "block"
})
let mute_notification_cancel_btn = document.getElementById("mute_notification_cancel_btn")
mute_notification_cancel_btn.addEventListener("click", ()=>{
    mute_notification_popup.style.display = "none"
    if(formereightHrsvalue == true){
        muteNotification8hrs()
    }
    if(formeroneWeekvalue == true){
        muteNotification1week()
    }
    if(formerAlwaysvalue == true){
        muteNotificationAlways()
    }
})
/***/
let mute_notification_ok_btn = document.getElementById("mute_notification_ok_btn")
mute_notification_ok_btn.addEventListener("click", ()=>{
    mute_notification_popup.style.display = "none"
    if(eightHrsvalue == true){
        contacts[current_contact_index].muteNotification = "8hrs"
        formereightHrsvalue = true
    }
    if(oneWeekvalue == true){
        contacts[current_contact_index].muteNotification = "1week"
        formeroneWeekvalue = true
    }
    if(Alwaysvalue == true){
        contacts[current_contact_index].muteNotification = "1week"
        formerAlwaysvalue = true
    }
})

let mute_notification_eight_hrs = document.getElementById("mute_notification_eight_hrs")
let mute_notification_one_week = document.getElementById("mute_notification_one_week")
let mute_notification_always = document.getElementById("mute_notification_always")

let mute_notification_eight_hrs_outer = document.getElementById("mute_notification_eight_hrs_outer")
let mute_notification_one_week_outer = document.getElementById("mute_notification_one_week_outer")
let mute_notification_always_outer = document.getElementById("mute_notification_always_outer")

let mute_notification_eight_hrs_inner = document.getElementById("mute_notification_eight_hrs_inner")
let mute_notification_one_week_inner = document.getElementById("mute_notification_one_week_inner")
let mute_notification_always_inner = document.getElementById("mute_notification_always_inner")

mute_notification_eight_hrs.addEventListener("click", muteNotification8hrs)
function muteNotification8hrs(){
    mute_notification_eight_hrs.classList.add("mute_notification_active")
    mute_notification_one_week.classList.remove("mute_notification_active")
    mute_notification_always.classList.remove("mute_notification_active")
    mute_notification_eight_hrs_inner.style.display = "block"
    mute_notification_one_week_inner.style.display = "none"
    mute_notification_always_inner.style.display = "none"
    mute_notification_eight_hrs_outer.style.border = "2px solid #1EBEA5"
    mute_notification_one_week_outer.style.border = "2px solid grey"
    mute_notification_always_outer.style.border = "2px solid grey"
    eightHrsvalue = true
    oneWeekvalue = false
    Alwaysvalue = false
}
mute_notification_one_week.addEventListener("click", muteNotification1week)
function muteNotification1week(){
    mute_notification_eight_hrs.classList.remove("mute_notification_active")
    mute_notification_one_week.classList.add("mute_notification_active")
    mute_notification_always.classList.remove("mute_notification_active")
    mute_notification_eight_hrs_inner.style.display = "none"
    mute_notification_one_week_inner.style.display = "block"
    mute_notification_always_inner.style.display = "none"
    mute_notification_eight_hrs_outer.style.border = "2px solid grey"
    mute_notification_one_week_outer.style.border = "2px solid #1EBEA5"
    mute_notification_always_outer.style.border = "2px solid grey"
    eightHrsvalue = false
    oneWeekvalue = true
    Alwaysvalue = false
}
mute_notification_always.addEventListener("click", muteNotificationAlways)
function muteNotificationAlways(){
    mute_notification_eight_hrs.classList.remove("mute_notification_active")
    mute_notification_one_week.classList.remove("mute_notification_active")
    mute_notification_always.classList.add("mute_notification_active")
    mute_notification_eight_hrs_inner.style.display = "none"
    mute_notification_one_week_inner.style.display = "none"
    mute_notification_always_inner.style.display = "block"
    mute_notification_eight_hrs_outer.style.border = "2px solid grey"
    mute_notification_one_week_outer.style.border = "2px solid grey"
    mute_notification_always_outer.style.border = "2px solid #1EBEA5"
    eightHrsvalue = false
    oneWeekvalue = false
    Alwaysvalue = true
}
let mute_notification_popup_thirdline = document.getElementById("mute_notification_popup_thirdline")
let mute_notification_popup_checkbox = document.getElementById("mute_notification_popup_checkbox")
let mute_notification_popup_checkmark = document.getElementById("mute_notification_popup_checkmark")
mute_notification_popup_thirdline.addEventListener("click", ()=>{
    if(mute_notification_popup_thirdline.classList.contains("mute_notification_popup_thirdline_active")){
        mute_notification_popup_checkbox.style.backgroundColor = "transparent"
        mute_notification_popup_checkbox.style.border = "1px solid #929ea1"
        mute_notification_popup_checkmark.style.display = "none"
        mute_notification_popup_thirdline.classList.remove("mute_notification_popup_thirdline_active")
    }else{
        mute_notification_popup_checkbox.style.backgroundColor = "#3aa087"
        mute_notification_popup_checkbox.style.border = "none"
        mute_notification_popup_checkmark.style.display = "block"
        mute_notification_popup_thirdline.classList.add("mute_notification_popup_thirdline_active")
    }
})

// chat page report popup
let report_popup = document.getElementById("report_popup")
let report_popup_firstline = document.getElementById("report_popup_firstline")
report_popup_firstline.innerHTML = `Report ${contacts[current_contact_index].name}?`
contact_nav_report.addEventListener("click", ()=>{
    report_popup.style.display = "block"
})
let report_popup_cancel_btn = document.getElementById("report_popup_cancel_btn")
report_popup_cancel_btn.addEventListener("click", ()=>{
    report_popup.style.display = "none"
})
let report_checkmark = document.getElementById("report_checkmark")
let report_checkbox = document.getElementById("report_checkbox")
let report_popup_report_btn = document.getElementById("report_popup_report_btn")
report_popup_report_btn.addEventListener("click", ()=>{})

let report_popup_fourtline = document.getElementById("report_popup_fourtline")
report_popup_fourtline.addEventListener("click", ()=>{
    if(report_popup_fourtline.classList.contains("report_popup_fourtline_active")){
        report_checkbox.style.backgroundColor = "transparent"
        report_checkbox.style.border = "1px solid #929ea1"
        report_checkmark.style.display = "none"
        report_popup_fourtline.classList.remove("report_popup_fourtline_active")
    }else{
        report_checkbox.style.backgroundColor = "#3aa087"
        report_checkbox.style.border = "none"
        report_checkmark.style.display = "block"
        report_popup_fourtline.classList.add("report_popup_fourtline_active")
    }
})




// chat page block popup
let block_popup = document.getElementById("block_popup")

contact_nav_block.addEventListener("click", ()=>{
    block_popup.style.display = "block"
})
let block_popup_cancel_btn = document.getElementById("block_popup_cancel_btn")
block_popup_cancel_btn.addEventListener("click", ()=>{
    block_popup.style.display = "none"
})
let block_popup_block_btn = document.getElementById("block_popup_block_btn")
block_popup_block_btn.addEventListener("click", ()=>{})

let block_popup_thirdline = document.getElementById("block_popup_thirdline")
block_popup_thirdline.addEventListener("click", ()=>{
    if(block_popup_thirdline.classList.contains("block_popup_thirdline_active")){
        block_checkbox.style.backgroundColor = "transparent"
        block_checkbox.style.border = "1px solid #929ea1"
        block_checkmark.style.display = "none"
        block_popup_thirdline.classList.remove("block_popup_thirdline_active")
    }else{
        block_checkbox.style.backgroundColor = "#3aa087"
        block_checkbox.style.border = "none"
        block_checkmark.style.display = "block"
        block_popup_thirdline.classList.add("block_popup_thirdline_active")
    }
})

// chat page clear chat popup
let clear_chat_popup = document.getElementById("clear_chat_popup")
contact_nav_clear_chat.addEventListener("click", ()=>{
    clear_chat_popup.style.display = "block"
})
let clear_chat_popup_btn = document.getElementById("clear_chat_popup_btn")
clear_chat_popup_btn.addEventListener("click", ()=>{
    clear_chat_popup.style.display = "none"
    contacts[current_contact_index].sentMessages = []
    for(let i=0; i<activeChatArray.length; i++) {
        if (activeChatArray[i].name == contacts[current_contact_index].name) {
            activeChatArray[i].sentMessages = []
        }
    }
    chat_page_bottomsection.innerHTML = ""
    showMessages(current_contact_index)
})

// chat page more items popup
let more_items_popup = document.getElementById("more_items_popup")
let chat_page_more_items_icon = document.getElementById("chat_page_more_items_icon")
chat_page_more_items_icon.addEventListener("click", ()=>{
    more_items_popup.style.display = "grid"
})
let gallery_selector = document.getElementById("gallery_selector")
gallery_selector.addEventListener("change", (e)=>{
    let reader = new FileReader()
    reader.addEventListener("load", ()=>{
        more_items_popup.style.display = "none"
        contacts[current_contact_index].sentMessages.push(`img${reader.result}`)
        chat_page_bottomsection.innerHTML = ""
        showMessages(current_contact_index)
        
    });
    reader.readAsDataURL(e.target.files[0])
})


// media visibility popup
let contact_info_media_visibility = document.getElementById("contact_info_media_visibility")
let media_visibility_popup = document.getElementById("media_visibility_popup")
let media_visibility_popup_cancel_btn = document.getElementById("media_visibility_popup_cancel_btn")
let media_visibility_popup_ok_btn = document.getElementById("media_visibility_popup_ok_btn")


contact_info_media_visibility.addEventListener("click", ()=>{
    media_visibility_popup.style.display = "block"
})
let mediaVisibilityDefault = false
let mediaVisibilityYes = false
let mediaVisibilityNo = false

media_visibility_popup_cancel_btn.addEventListener("click", ()=>{
    if(mediaVisibilityDefault == true){
        mediaVisibilityDefaultFunction()
    }else if(mediaVisibilityYes == true){
        mediaVisibilityYesFunction()
    }else{
        mediaVisibilityNoFunction()
    }
    media_visibility_popup.style.display = "none"
})
media_visibility_popup_ok_btn.addEventListener("click", ()=>{
    if( media_visibility_popup_default_inner.style.display == "block"){
        mediaVisibilityDefault = true
        mediaVisibilityYes = false
        mediaVisibilityNo = false
    }else if(media_visibility_popup_yes_inner.style.display == "block"){
        mediaVisibilityDefault = false
        mediaVisibilityYes = true
        mediaVisibilityNo = false
    }else{
        mediaVisibilityDefault = false
        mediaVisibilityYes = false
        mediaVisibilityNo = true
    }
    media_visibility_popup.style.display = "none"
})


let media_visibility_popup_default = document.getElementById("media_visibility_popup_default")
let media_visibility_popup_yes = document.getElementById("media_visibility_popup_yes")
let media_visibility_popup_no = document.getElementById("media_visibility_popup_no")
let media_visibility_popup_default_outer = document.getElementById("media_visibility_popup_default_outer")
let media_visibility_popup_yes_outer = document.getElementById("media_visibility_popup_yes_outer")
let media_visibility_popup_no_outer = document.getElementById("media_visibility_popup_no_outer")
let media_visibility_popup_default_inner = document.getElementById("media_visibility_popup_default_inner")
let media_visibility_popup_yes_inner = document.getElementById("media_visibility_popup_yes_inner")
let media_visibility_popup_no_inner = document.getElementById("media_visibility_popup_no_inner")

function mediaVisibilityUnselect(){
    media_visibility_popup_default.classList.remove("media_visibility_popup_active")
    media_visibility_popup_yes.classList.remove("media_visibility_popup_active")    
    media_visibility_popup_no.classList.remove("media_visibility_popup_active")
    media_visibility_popup_default_outer.style.border = "2px solid grey"
    media_visibility_popup_yes_outer.style.border = "2px solid grey"
    media_visibility_popup_no_outer.style.border = "2px solid grey"
    media_visibility_popup_default_inner.style.display = "none"
    media_visibility_popup_yes_inner.style.display = "none"
    media_visibility_popup_no_inner.style.display = "none"
}
media_visibility_popup_default.addEventListener("click", mediaVisibilityDefaultFunction)
    function mediaVisibilityDefaultFunction(){
    mediaVisibilityUnselect()
    media_visibility_popup_default.classList.add("media_visibility_popup_active")
    media_visibility_popup_default_outer.style.border = "2px solid #1EBEA5"
    media_visibility_popup_default_inner.style.display = "block"
}
media_visibility_popup_yes.addEventListener("click", mediaVisibilityYesFunction)
    function mediaVisibilityYesFunction(){
    mediaVisibilityUnselect()
    media_visibility_popup_yes.classList.add("media_visibility_popup_active")
    media_visibility_popup_yes_outer.style.border = "2px solid #1EBEA5"
    media_visibility_popup_yes_inner.style.display = "block"
}
media_visibility_popup_no.addEventListener("click", mediaVisibilityNoFunction)
    function mediaVisibilityNoFunction(){
    mediaVisibilityUnselect()
    media_visibility_popup_no.classList.add("media_visibility_popup_active")
    media_visibility_popup_no_outer.style.border = "2px solid #1EBEA5"
    media_visibility_popup_no_inner.style.display = "block"
}



let new_contact_name = document.getElementById("new_contact_name")
let new_contact_number = document.getElementById("new_contact_number")
let new_contact_tagline = document.getElementById("new_contact_tagline")
// let new_contact_btn = document.getElementById("new_contact_btn")
let new_contact_btn = document.getElementById("new_contact_btn")
new_contact_btn.addEventListener("click", CreateNewContact)

function CreateNewContact(){
let newobj = new Object()
newobj.name = new_contact_name.value
newobj.phoneNo = new_contact_number.value
newobj.tagline = new_contact_tagline.value
newobj.sentMessages = []
newobj.image = ""
newobj.groups = ""
newobj.status = "offline"
contacts.push(newobj)
new_contact_name.value = ""
new_contact_number.value = ""
new_contact_tagline.value = ""
select_contact_AllContacts.innerHTML = ""
showContacts()
}
let new_contact_page_arrowback_icon = document.getElementById("new_contact_page_arrowback_icon")
new_contact_page_arrowback_icon.addEventListener("click", ()=>{
    CloseAllPages()
    selectcontact_page.style.display = "block"
})
let select_contact_newContact = document.getElementById("select_contact_newContact")
select_contact_newContact.addEventListener("click", ()=>{
    CloseAllPages()
    new_contact_page.style.display = "block"
})













//contact page block popup
let contact_page_block_popup = document.getElementById("contact_page_block_popup")
let contact_page_block_popup_cancel_btn = document.getElementById("contact_page_block_popup_cancel_btn")
contact_page_block_popup_cancel_btn.addEventListener("click", ()=>{
    contact_page_block_popup.style.display = "none"
})
let contact_page_block_popup_block_btn = document.getElementById("contact_page_block_popup_block_btn")
contact_page_block_popup_block_btn.addEventListener("click", ()=>{})
let contact_info_block_div = document.getElementById("contact_info_block_div")
contact_info_block_div.addEventListener("click", ()=>{
    contact_page_block_popup.style.display = "block"
})
let contact_page_block_popup_firstline = document.getElementById("contact_page_block_popup_firstline")
//contact page report popup
let contact_info_report_div = document.getElementById("contact_info_report_div")
contact_info_report_div.addEventListener("click", ()=>{
    report_popup.style.display = "block"
})







let select_contact_AllContacts = document.getElementById("select_contact_AllContacts")
let sorted = contacts.sort((a,b)=>a.name.localeCompare(b.name))

let no_of_contacts_div = document.getElementById("no_of_contacts_div")
no_of_contacts_div.innerHTML = contacts.length


let contactsNameArray = [];

function showContacts(){
    for(let i =0; i<sorted.length; i++){
        let contact = sorted[i]
        let contact_div = document.createElement("div")
        contact_div.classList.add("contact_div")
        contact_div.setAttribute("id", contact.name)
        let contact_div_image_section = document.createElement("div")
        contact_div_image_section.classList.add("contact_div_image_section")
        let contact_image = document.createElement("div")
        contact_image.backgroundImage = `url(${contact.image})`
        contact_image.classList.add("contact_image")
        contact_div_image_section.appendChild(contact_image)
        contact_div.appendChild(contact_div_image_section)
        let contact_div_name_section = document.createElement("div")
        contact_div_name_section.classList.add("contact_div_name_section")
        contact_div.appendChild(contact_div_name_section)
        let contact_name = document.createElement("p")
        contact_name.classList.add("contact_name")
        contact_name.innerHTML = contact.name
        contact_div_name_section.appendChild(contact_name)
        let contact_tagline = document.createElement("p")
        contact_tagline.classList.add("contact_tagline")
        contact_tagline.innerHTML = contact.tagline
        contact_div_name_section.appendChild(contact_tagline) 
        contact_div.addEventListener("click", ()=>{
            CloseAllPages()
            lastPageChatpage = "contact"
            chat_page.style.display = "block"
            chat_page_name.innerHTML = contact.name
            contact_info_name.innerHTML = contact.name
            contact_info_number.innerHTML = contact.phoneNo
            contact_info_tagline.innerHTML = contact.tagline
            chat_page_bottomsection.innerHTML = ""
            current_contact_index = i
            block_popup_firstline.innerHTML = `Block ${contacts[current_contact_index].name}?`
            report_popup_firstline.innerHTML = `Report ${contacts[current_contact_index].name}?`
            contact_page_block_popup_firstline.innerHTML = `Block ${contact_info_name.innerHTML}?`

            showMessages(current_contact_index)
            if(contact.muteNotification == "8hrs"){muteNotification8hrs()}
            else if(contact.muteNotification == "1week"){muteNotification1week()}
            else{muteNotificationAlways()}
        })
        
        
        select_contact_AllContacts.appendChild(contact_div)
        contactsNameArray.push(contact.name)
    }
    
}
showContacts()


function checkWindow(){
    selectedContactsArray = []
    document.getElementById("mainpage_iconsline").style.display = "none"
    document.getElementById("mainpage_nav_firstline").style.display = "flex"
}    




let selectedContactsArray = []
let selected_contact_no =document.getElementById("selected_contact_no")
let iconsline_arrowback_icon =document.getElementById("iconsline_arrowback_icon")
let temparray = []

let activeChatArray = []


let pin_to_top = document.getElementById("pin_to_top")

function appendToActiveChats(){
    activechat_chats.innerHTML = ""
    for(let i = 0; i<activeChatArray.length; i++){
        if(activeChatArray[i].sentMessages.length > 3){
            temparray.push(activeChatArray[i].name)
            let contact_div = document.createElement("div")
            contact_div.classList.add("contact_div")
            activechat_chats.appendChild(contact_div)
            let contact_div_image_section = document.createElement("div")
            contact_div_image_section.classList.add("contact_div_image_section")
            let contact_image = document.createElement("div")
            contact_image.backgroundImage = activeChatArray[i].image
            contact_image.classList.add("contact_image")
            contact_div_image_section.appendChild(contact_image)
            let contact_div_name_section = document.createElement("div")
            contact_div_name_section.classList.add("contact_div_name_section")
            contact_div.appendChild(contact_div_image_section)
            contact_div.appendChild(contact_div_name_section)
            let contact_name = document.createElement("p")
            contact_name.classList.add("contact_name")
            contact_name.innerHTML = activeChatArray[i].name
            contact_div_name_section.appendChild(contact_name)
            let contact_last_message = document.createElement("p")
            contact_last_message.classList.add("contact_last_message")
            activeChatArray[i].sentMessages.forEach(message=>{
                if(message.substring(0,3) == "img"){
                    contact_last_message.innerHTML = "Image"
                }else{
                    if(message.length > 20){
                        contact_last_message.innerHTML =  message.substring(3,20) + " ..."
                    }
                    else{contact_last_message.innerHTML = activeChatArray[i].sentMessages[activeChatArray[i].sentMessages.length-1].substring(3)}
                }
            })
            contact_div_name_section.appendChild(contact_last_message)
            contact_div.addEventListener("click", ()=>{
                if(document.getElementById("mainpage_iconsline").style.display == "flex"){
                    if(selectedContactsArray.includes(activeChatArray[i].name)){
                        console.log(selectedContactsArray)
                        contact_div.style.backgroundColor = "transparent"
                        selectedContactsArray.splice(selectedContactsArray.indexOf(activeChatArray[i].name), 1)
                        selected_contact_no.innerHTML = selectedContactsArray.length
                        console.log(selectedContactsArray)
                        if(selectedContactsArray.length == 0){
                            document.getElementById("mainpage_iconsline").style.display = "none"
                            document.getElementById("mainpage_nav_firstline").style.display = "flex"
                        }
                        console.log(selectedContactsArray)
                        return
                    }
                    selectedContactsArray.push(activeChatArray[i].name)
                    selected_contact_no.innerHTML = selectedContactsArray.length
                    contact_div.style.backgroundColor = "#121920"
                    return
                }
                CloseAllPages()
                chat_page.style.display = "block"
                lastPageChatpage = "active"
                chat_page_name.innerHTML = activeChatArray[i].name
                contact_info_name.innerHTML = activeChatArray[i].name
                contact_info_number.innerHTML = activeChatArray[i].phoneNo
                contact_info_tagline.innerHTML = activeChatArray[i].tagline
                chat_page_bottomsection.innerHTML = ""
                block_popup_firstline.innerHTML = `Block ${contacts[current_contact_index].name}?`
                report_popup_firstline.innerHTML = `Report ${contacts[current_contact_index].name}?`
                contact_page_block_popup_firstline.innerHTML = `Block ${contact_info_name.innerHTML}?`
                console.log(activeChatArray[i].name)
                current_contact_index =  contactsNameArray.indexOf(activeChatArray[i].name)
                showMessages(current_contact_index)
            })
            contact_div.addEventListener("touchstart", start)
            contact_div.addEventListener("touchend", end)

            let newtimeout;
            function start(){newtimeout = setTimeout(touched,1000)}
            function end(){clearTimeout(newtimeout)}

            function touched(){
                document.getElementById("mainpage_iconsline").style.display = "flex"
                document.getElementById("mainpage_nav_firstline").style.display = "none"
                console.log(selectedContactsArray)
                selectedContactsArray.push(activeChatArray[i].name)
                console.log(selectedContactsArray)
                contact_div.style.backgroundColor = "#121920"
                selected_contact_no.innerHTML = selectedContactsArray.length
            }
            if(document.getElementById("mainpage_nav_firstline").style.display == "none"){
                contact_div.style.backgroundColor = "none"
            }
            iconsline_arrowback_icon.addEventListener("click",()=>{
                selectedContactsArray = []
                document.getElementById("mainpage_iconsline").style.display = "none"
                document.getElementById("mainpage_nav_firstline").style.display = "flex"
                contact_div.style.backgroundColor = "transparent"
            })
            calls_selector.addEventListener("click", ()=>{
                contact_div.style.backgroundColor = "transparent"
            })
            status_selector.addEventListener("click", ()=>{
                contact_div.style.backgroundColor = "transparent"
            })
            chats_selector.addEventListener("click", ()=>{
                contact_div.style.backgroundColor = "transparent"
            })

            // mute notification home page
            let mute_notification_homePage = document.getElementById("mute_notification_homePage")
            mute_notification_homePage.addEventListener("click", ()=>{
                mute_notification_popup.style.display = "block"
                selectedContactsArray = []
                document.getElementById("mainpage_iconsline").style.display = "none"
                document.getElementById("mainpage_nav_firstline").style.display = "flex"
                contact_div.style.backgroundColor = "transparent"
            })

            
        }
    }
    
}
// homepage delete chat icon
let delete_homepage = document.getElementById("delete_homepage")
delete_homepage.addEventListener("click", ()=>{
    for(let i = 0; i<activeChatArray.length; i++){
        if(selectedContactsArray.includes(activeChatArray[i].name)){
            selectedContactsArray.splice(selectedContactsArray.indexOf(activeChatArray[i].name),1)
            activeChatArray.splice(activeChatArray.indexOf(activeChatArray[i]), 1)
        }
    }
    document.getElementById("mainpage_iconsline").style.display = "none"
    document.getElementById("mainpage_nav_firstline").style.display = "flex"
    appendToActiveChats()
})

// archiving chat



let archivedArray = []
let number_of_archived = document.getElementById("number_of_archived")
let archive_this_chat = document.getElementById("archive_this_chat")
archive_this_chat.addEventListener("click", ()=>{
    for(let i = 0; i<activeChatArray.length; i++){
        if(selectedContactsArray.includes(activeChatArray[i].name)){
            archivedArray.push(activeChatArray[i])
            activeChatArray.splice(activeChatArray.indexOf(activeChatArray[i]),1)
        }
    }
    number_of_archived.innerHTML = archivedArray.length
    checkWindow()
    appendToActiveChats()
    appendToArchivedChats()
})

let archived_page_bottomsection = document.getElementById("archived_page_bottomsection")
function appendToArchivedChats(){
    archived_page_bottomsection.innerHTML = ""
    for(let i = 0; i<archivedArray.length; i++){
        if(archivedArray[i].sentMessages.length > 3){
            let contact_div = document.createElement("div")
            contact_div.classList.add("contact_div")
            archived_page_bottomsection.appendChild(contact_div)
            let contact_div_image_section = document.createElement("div")
            contact_div_image_section.classList.add("contact_div_image_section")
            let contact_image = document.createElement("div")
            contact_image.backgroundImage = archivedArray[i].image
            contact_image.classList.add("contact_image")
            contact_div_image_section.appendChild(contact_image)
            let contact_div_name_section = document.createElement("div")
            contact_div_name_section.classList.add("contact_div_name_section")
            contact_div.appendChild(contact_div_image_section)
            contact_div.appendChild(contact_div_name_section)
            let contact_name = document.createElement("p")
            contact_name.classList.add("contact_name")
            contact_name.innerHTML = archivedArray[i].name
            contact_div_name_section.appendChild(contact_name)
            let contact_last_message = document.createElement("p")
            contact_last_message.classList.add("contact_last_message")
            archivedArray[i].sentMessages.forEach(message=>{
                if(message.substring(0,3) == "img"){
                    contact_last_message.innerHTML = "Image"
                }else{
                    if(message.length > 20){
                        contact_last_message.innerHTML =  message.substring(3,20) + " ..."
                    }
                    else{contact_last_message.innerHTML = archivedArray[i].sentMessages[archivedArray[i].sentMessages.length-1].substring(3)}
                }
            })
            contact_div_name_section.appendChild(contact_last_message)
            contact_div.addEventListener("click", ()=>{
                CloseAllPages()
                chat_page.style.display = "block"
                lastPageChatpage = "archive"
                chat_page_name.innerHTML = archivedArray[i].name
                contact_info_name.innerHTML = archivedArray[i].name
                contact_info_number.innerHTML = archivedArray[i].phoneNo
                contact_info_tagline.innerHTML = archivedArray[i].tagline
                chat_page_bottomsection.innerHTML = ""
                current_contact_index = i
                block_popup_firstline.innerHTML = `Block ${contacts[current_contact_index].name}?`
                report_popup_firstline.innerHTML = `Report ${contacts[current_contact_index].name}?`
                contact_page_block_popup_firstline.innerHTML = `Block ${contact_info_name.innerHTML}?`
                showMessages(current_contact_index)
            })
        }
    }
    
}

function showMessages(a){
    let selesctedMessagesArray = [];
    let messageHoldOption = document.getElementById("messageHoldOption")
    let noOfSelectedChatMessages = document.getElementById("noOfSelectedChatMessages")
    let messageHoldOption_backarrow_icon = document.getElementById("messageHoldOption_backarrow_icon")
    let messageHoldOption_replyIcon = document.getElementById("messageHoldOption_replyIcon")
    let messageHoldOption_starredIcon = document.getElementById("messageHoldOption_starredIcon")
    let messageHoldOption_trashIcon = document.getElementById("messageHoldOption_trashIcon")
    contacts[a].sentMessages.forEach(message=>{
        if(message.substring(0,3) == "txt"){
            let newmessage = message.substring(3)
            let messagediv_outer = document.createElement("div")
            messagediv_outer.classList.add("messagediv_outer")
            messagediv_outer.addEventListener("touchstart", started)
            messagediv_outer.addEventListener("touchend", ended)
            let newtimeout;
            function started() {
                newtimeout = setTimeout(openTempOptions, 1000)
            }
            function ended() {
                clearTimeout(newtimeout)
            }
            function openTempOptions(){
                messageHoldOption.style.display = "flex"
                selesctedMessagesArray.push(message)
                noOfSelectedChatMessages.innerHTML = selesctedMessagesArray.length
                messagediv_outer.style.backgroundColor = "#02775a41"

            }
            messagediv_outer.addEventListener("click", ()=>{
                if(selesctedMessagesArray.length > 0 && !selesctedMessagesArray.includes(message)){
                    selesctedMessagesArray.push(message)
                    messagediv_outer.style.backgroundColor = "#02775a41"
                    if(selesctedMessagesArray.length > 1){messageHoldOption_replyIcon.style.display = "none"}
                }else if(selesctedMessagesArray.length > 0 && selesctedMessagesArray.includes(message)){
                    selesctedMessagesArray.splice(selesctedMessagesArray.indexOf(message),1)
                    messagediv_outer.style.backgroundColor = "transparent"
                    if(selesctedMessagesArray.length == 0){
                        messageHoldOption.style.display ="none"
                    }
                    if(selesctedMessagesArray.length == 1){messageHoldOption_replyIcon.style.display = "block"}
                }else{return}
                noOfSelectedChatMessages.innerHTML = selesctedMessagesArray.length
            })
            messageHoldOption_backarrow_icon.addEventListener("click", ()=>{
                messageHoldOption.style.display = "none"
                selesctedMessagesArray = []
                messagediv_outer.style.backgroundColor = "transparent"
            });
            messageHoldOption_starredIcon.addEventListener("click", ()=>{
                selesctedMessagesArray.forEach(item=>{
                    if(!starredMessagesArray.includes(item)){
                        starredMessagesArray.push(item)
                    }
                })
                showstarredMessages()
                messageHoldOption.style.display = "none"
                selesctedMessagesArray = []
                messagediv_outer.style.backgroundColor = "transparent"
            });
            
            chat_page_bottomsection.appendChild(messagediv_outer)
            let message_div = document.createElement("div")
            message_div.classList.add("message_div")
            message_div.innerHTML = newmessage
            messagediv_outer.appendChild(message_div)
        }
        if(message.substring(8,13) == "image"){
            console.log("img")
            let newimg = message.substring(3)
            let messagediv_outer = document.createElement("div")
            messagediv_outer.classList.add("messagediv_outer")
            chat_page_bottomsection.appendChild(messagediv_outer)
            let message_div = document.createElement("div")
            message_div.classList.add("image_div")
            let message_image = document.createElement("img")
            message_image.setAttribute("src", newimg)
            message_image.setAttribute("alt", "")
            message_image.addEventListener("click", ()=>{
                CloseAllPages()
                show_image_page.style.display = "block"
                let show_image_page_imagesection = document.getElementById("show_image_page_imagesection")
                if(message_image.height > screen.innerHeight){
                    show_image_page_imagesection.style.height = "100%"
                    show_image_page_imagesection.style.width = "auto"
                }
                show_image_page_imagesection.src = newimg
            })
            message_image.style.maxWidth = `${window.innerWidth*0.8}px`
            message_image.setAttribute("height", "auto")
            message_div.appendChild(message_image)
            messagediv_outer.appendChild(message_div)
            console.log(message_image.style.height)
        }
        if(message.substring(8,13) == "video"){
            let newvideo = message.substring(3)
            let messagediv_outer = document.createElement("div")
            messagediv_outer.classList.add("messagediv_outer")
            chat_page_bottomsection.appendChild(messagediv_outer)
            let message_div = document.createElement("div")
            message_div.classList.add("image_div")
            let message_video = document.createElement("video")
            message_video.setAttribute("src", newvideo)
            message_video.setAttribute("alt", "")
            message_video.style.maxWidth = `${window.innerWidth*0.8}px`
            message_video.setAttribute("height", "auto")
            let playbtnthumbnail = document.createElement("img")
            playbtnthumbnail.id = "playbtnthumbnail"
            playbtnthumbnail.src = "icons\\play_grey.svg"
            message_div.appendChild(playbtnthumbnail)
            message_video.addEventListener("click", ()=>{
                CloseAllPages()
                show_video_page.style.display = "block"
                let show_video_page_videosection = document.getElementById("show_video_page_videosection")
                show_video_page_videosection.src = newvideo
            })
            playbtnthumbnail.addEventListener("click",()=>{
                CloseAllPages()
                show_video_page.style.display = "block"
                let show_video_page_videosection = document.getElementById("show_video_page_videosection")
                show_video_page_videosection.src = newvideo
            })
            message_div.appendChild(message_video)
            messagediv_outer.appendChild(message_div)
            console.log(message_video.style.height)
        }
        if(message.substring(0,4) == "blob"){
            // let audiodiv_outer = document.createElement("div")
            // audiodiv_outer.classList.add("messagediv_outer")
            // chat_page_bottomsection.appendChild(audiodiv_outer)
            // let audio_div = document.createElement("div")
            // audio_div.classList.add("chat_page_audio_div")
            // audiodiv_outer.appendChild(audio_div)
            // let audiodivImage = document.createElement("div")
            // audiodivImage.classList.add("chat_page_audio_image_div")
            // audio_div.appendChild(audiodivImage)
            // let audioOtherSection = document.createElement("div")
            // audioOtherSection.classList.add("chat_page_audio_other_div")
            // audio_div.appendChild(audioOtherSection)
            // let audio_div_mini1 = document.createElement("audio")
            // audio_div_mini1.classList.add("chat_page_audio_other_div1")
            // audioOtherSection.appendChild(audio_div_mini1)
            // audio_div_mini1.controls = true;
            // console.log(message)
            // let temp = URL.createObjectURL("blob:http://127.0.0.1:5500/5b099f3f-7be3-4103-8ec6-ca6d5517cf50")
            // console.log(srcObject) 

        }
    })
}
showMessages(current_contact_index)

send_icon_div.addEventListener("click", ()=>{
    contacts[current_contact_index].sentMessages.push(`txt${chat_page_input.value}`)
    chat_page_bottomsection.innerHTML = ""
    showMessages(current_contact_index)
    chat_page_input.value = ""
    chat_page_input.style.height ="30px"
    revertInputSection()
    if(!temparray.includes(sorted[current_contact_index].name)){
        activeChatArray.unshift(sorted[current_contact_index])
    }else{
        activeChatArray.splice(activeChatArray.indexOf(sorted[current_contact_index]), 1)
        activeChatArray.unshift(sorted[current_contact_index])
    }
    if(contacts[current_contact_index].sentMessages.length > 3){
        activechat_chats.innerHTML = ""
        appendToActiveChats()
    }
}) 

// voice input area

let audiobtnTimeout;
let lock_audio_div = document.getElementById("lock_audio_div")
let chat_page_input_div = document.getElementById("chat_page_input_div")
let chat_page_input_div2 = document.getElementById("chat_page_input_div2")
let audio_input_section = document.getElementById("audio_input_section")

let touchStartX = 0
let touchendX = 0
let touchendY = 0
let touchStartY = 0

let audioActivated = false;
let stopcounting = false;

let audioMinutesNo = 0;
let audioSecondsNo = 0;

let audiocount = 0
let deleteAudioOne = false;
let show_timer = document.getElementById("show_timer")
let audio_recording_timer = document.getElementById("audio_recording_timer")


function CheckDirectionAudioSwipe(){
    if (touchendX +50 < touchstartX && audioActivated == true){
        alert('swiped left!')
        audio_icon_div.style.transform = "scale(1)"
        lock_audio_div.style.display = "none"
        chat_page_input_div.style.display = "flex"
        chat_page_input_div2.style.display = "none"
        deleteAudioOne = true;
    } 
    if (touchendY+40 < touchstartY && audioActivated == true){
        alert('swiped up!')
        audio_input_section.style.display = "grid"
    } 
}

audio_icon_div.addEventListener("touchstart",(e)=>{
    touchstartX = e.changedTouches[0].screenX
    touchstartY = e.changedTouches[0].screenY
    audiobtnTimeout = setTimeout(()=>{
        audio_icon_div.style.transform = "scale(2)"
        lock_audio_div.style.display = "flex"
        chat_page_input_div.style.display = "none"
        chat_page_input_div2.style.display = "flex"
        audioActivated = true
    },1000)
})
audio_icon_div.addEventListener("touchend", (e)=>{
    if(audio_input_section.style.display == "grid"){return}
    clearTimeout(audiobtnTimeout)
    audio_icon_div.style.transform = "scale(1)"
    lock_audio_div.style.display = "none"
    chat_page_input_div.style.display = "flex"
    chat_page_input_div2.style.display = "none"
    touchendX = e.changedTouches[0].screenX
    touchendY = e.changedTouches[0].screenY
    CheckDirectionAudioSwipe()
    audioActivated = false
})

let audioFilesArray = [];

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia(
        {
            audio:true,
        }
    )
    .then((stream)=>{
        let mediaRecorder = new MediaRecorder(stream)
        audio_icon_div.addEventListener("touchstart", AudioRecordReady)
        let temptimeout;
        let newinterval;
        function AudioRecordReady(){
            temptimeout = setTimeout(AudioRecordStart,1000)
        }
        function AudioRecordStart(){
            mediaRecorder.start();
            stopcounting = false
            audiocount = 0;
            audio_recording_timer.innerHTML = `0:00`
            show_timer.innerHTML = `0:00`
            audioMinutesNo = 0
            audioSecondsNo = 0
            newinterval = setInterval(countingAudioTime,1000)
            countingAudioTime() 
        }
        
        function countingAudioTime(){
            if(stopcounting == true){
                clearInterval(newinterval)
                return;
            }
            audiocount += 1;
            console.log(audiocount)
            audioSecondsNo = Math.floor( (audiocount) % 60 );
            audioMinutesNo = Math.floor( (audiocount/60) % 60 );
            let audioTimer;
            if(audioSecondsNo.toString().length < 2){
                audioTimer =`${audioMinutesNo}:0${audioSecondsNo}`
            }else{
                audioTimer =`${audioMinutesNo}:${audioSecondsNo}`
            }
            audio_recording_timer.innerHTML = audioTimer
            show_timer.innerHTML = audioTimer
        }


        audio_icon_div.addEventListener("touchend",AudioRecordStop)
        function AudioRecordStop(){
            clearTimeout(temptimeout)
            if(audio_input_section.style.display == "grid"){return}
            if (mediaRecorder.state === "inactive"){return}
            if(deleteAudioOne === true){
                stopcounting = true
                deleteAudioOne = false;
                mediaRecorder.stop();
                return;
            }
            
            let data = mediaRecorder.requestData()
            audioFilesArray.push(data)
            const blob = new Blob(audioFilesArray, { type: "audio/ogg; codecs=opus" });
            audioFilesArray = [];
            console.log(blob)
            let audioURL = window.URL.createObjectURL(blob)
            console.log(audioURL)
            contacts[current_contact_index].sentMessages.push(audioURL)
            chat_page_bottomsection.innerHTML = ""
            showMessages(current_contact_index)
            if(!temparray.includes(sorted[current_contact_index].name)){
                activeChatArray.unshift(sorted[current_contact_index])
            }
            if(contacts[current_contact_index].sentMessages.length > 3){
                activechat_chats.innerHTML = ""
                appendToActiveChats()
            }
            stopcounting = true
            mediaRecorder.stop();
            console.log("now")
            

        }
        let delete_recorded_audio = document.getElementById("delete_recorded_audio")
        delete_recorded_audio.addEventListener("click",()=>{
            if(mediaRecorder.state === "inactive"){return}
            mediaRecorder.stop();
            audioFilesArray = []
            audio_input_section.style.display = "none"
            stopcounting = true
        })
        let pause_and_play_main_div = document.getElementById("pause_and_play_main_div")
        let main_playicon = document.getElementById("main_playicon")
        let main_pauseicon = document.getElementById("main_pauseicon")
        pause_and_play_main_div.addEventListener("click", ()=>{
            if(main_pauseicon.style.display == "block"){
                main_playicon.style.display = "block"
                main_pauseicon.style.display = "none"
                mediaRecorder.pause()
                console.log("paused");
                clearInterval(newinterval)
            }else{
                main_playicon.style.display = "none"
                main_pauseicon.style.display = "block"
                mediaRecorder.resume()
                console.log("played")
                newinterval = setInterval(countingAudioTime,1000)
            }
        })

       
        let audio_send_div = document.getElementById("audio_send_div")
        audio_send_div.addEventListener("click",()=>{
            let data = mediaRecorder.requestData()
            audioFilesArray.push(data)
            const blob = new Blob(audioFilesArray, { type: "audio/ogg; codecs=opus" });
            audioFilesArray = [];
            console.log(blob)
            let audioURL = window.URL.createObjectURL(blob)
            console.log(audioURL)
            contacts[current_contact_index].sentMessages.push(audioURL)
            chat_page_bottomsection.innerHTML = ""
            showMessages(current_contact_index)
            if(!temparray.includes(sorted[current_contact_index].name)){
                activeChatArray.unshift(sorted[current_contact_index])
            }
            if(contacts[current_contact_index].sentMessages.length > 3){
                activechat_chats.innerHTML = ""
                appendToActiveChats()
            }
            stopcounting = true
            mediaRecorder.stop();
            audio_input_section.style.display = "none"
        })
    })
    .catch((err)=>{
        console.log(err)
    })
}else{
    alert("your browser does not support media devices")
}
   


// storage and data page
let storage_and_data_page_arrowback_icon = document.getElementById("storage_and_data_page_arrowback_icon")
let settings_storage_data_selector = document.getElementById("settings_storage_data_selector")
settings_storage_data_selector.addEventListener("click", ()=>{
    CloseAllPages()
    storage_and_data_page.style.display = "block"
})
storage_and_data_page_arrowback_icon.addEventListener("click", ()=>{
    CloseAllPages()
    settings_page.style.display = "block"
})
let storage_and_data_secondline_textDiv2_switch = document.getElementById("storage_and_data_secondline_textDiv2_switch")
let storage_and_data_switch_div1 = document.getElementById("storage_and_data_switch_div1")
let storage_and_data_switch_div2 = document.getElementById("storage_and_data_switch_div2")
storage_and_data_secondline_textDiv2_switch.addEventListener("click", ()=>{
    if(storage_and_data_switch_div2.classList.contains("switch_on")){
        storage_and_data_switch_div2.classList.remove("switch_on")
        storage_and_data_switch_div2.setAttribute("style", "left: -10px;")
        storage_and_data_switch_div1.setAttribute("style", "background-color: grey;")
        storage_and_data_switch_div2.setAttribute("style", "background-color: rgb(155, 155, 155);")
    }else{
        storage_and_data_switch_div2.classList.add("switch_on")
        storage_and_data_switch_div1.setAttribute("style", "background-color: #1EBEA5;")
        storage_and_data_switch_div2.setAttribute("style", "background-color: #1EBEA5;")
        storage_and_data_switch_div2.style.left = "15px"
    }
})
let storage_and_data_fourthline1 = document.getElementById("storage_and_data_fourthline1")
let storage_and_data_fourthline2 = document.getElementById("storage_and_data_fourthline2")
let storage_and_data_fourthline3 = document.getElementById("storage_and_data_fourthline3")
let storage_data_popups_cancelbtn = document.getElementById("storage_data_popups_cancelbtn")
let storage_data_popups_okbtn = document.getElementById("storage_data_popups_okbtn")
let when_using_mb_popup = document.getElementById("when_using_mb_popup")
let storage_data_popups_okbtn2 = document.getElementById("storage_data_popups_okbtn2")
let when_using_mb_popup2 = document.getElementById("when_using_mb_popup2")
let storage_data_popups_okbtn3 = document.getElementById("storage_data_popups_okbtn3")
let when_using_mb_popup3 = document.getElementById("when_using_mb_popup3")
let when_using_wifi_popup = document.getElementById("when_using_wifi_popup")
let when_roaming_popup = document.getElementById("when_roaming_popup")
let storage_data_popups_cancelbtn2 = document.getElementById("storage_data_popups_cancelbtn2")
let storage_data_popups_cancelbtn3 = document.getElementById("storage_data_popups_cancelbtn3")

storage_and_data_fourthline1.addEventListener("click", ()=>{
    when_using_mb_popup.style.display = "block"
})
storage_and_data_fourthline2.addEventListener("click", ()=>{
    when_using_wifi_popup.style.display = "block"
})
storage_data_popups_okbtn2.addEventListener("click", ()=>{
    when_using_wifi_popup.style.display = "none"
})
storage_and_data_fourthline3.addEventListener("click", ()=>{
    when_roaming_popup.style.display = "block"
})
storage_data_popups_okbtn3.addEventListener("click", ()=>{
    when_roaming_popup.style.display = "none"
})

let whenUsingMobileobject = {
    photo: false,
    video: false,
    audio: false,
    files: false,
}

let using_mb_display = document.getElementById("using_mb_display")
let whenUsingMobileArray = []

let storage_data_popups_photos1 = document.getElementById("storage_data_popups_photos1")
let storage_data_popups_audio1 = document.getElementById("storage_data_popups_audio1")
let storage_data_popups_videos1 = document.getElementById("storage_data_popups_videos1")
let storage_data_popups_documents1 = document.getElementById("storage_data_popups_documents1")

let storage_data_popups_photos1_cb  = document.getElementById("storage_data_popups_photos1_cb")
let storage_data_popups_audio1_cb = document.getElementById("storage_data_popups_audio1_cb")
let storage_data_popups_videos1_cb = document.getElementById("storage_data_popups_videos1_cb")
let storage_data_popups_documents1_cb = document.getElementById("storage_data_popups_documents1_cb")

storage_data_popups_photos1.addEventListener("click", ()=>{
    if(storage_data_popups_photos1.classList.contains("checked")){
        storage_data_popups_photos1.classList.remove("checked")
        storage_data_popups_photos1_cb.style.backgroundColor = "transparent"
        storage_data_popups_photos1_cb.style.border = "#929ea1 2.5px solid"
        whenUsingMobileArray.splice(whenUsingMobileArray.indexOf("Photos"),1)
    }else{
        storage_data_popups_photos1.classList.add("checked")
        storage_data_popups_photos1_cb.style.backgroundColor = "#3aa087"
        storage_data_popups_photos1_cb.style.border = "none"
        whenUsingMobileArray.push("Photos")
    }
   
})
storage_data_popups_audio1.addEventListener("click", ()=>{
    if(storage_data_popups_audio1.classList.contains("checked")){
        storage_data_popups_audio1.classList.remove("checked")
        storage_data_popups_audio1_cb.style.backgroundColor = "transparent"
        storage_data_popups_audio1_cb.style.border = "#929ea1 2.5px solid"
        whenUsingMobileArray.splice(whenUsingMobileArray.indexOf("Audio"),1)  
    }else{
        storage_data_popups_audio1.classList.add("checked")
        storage_data_popups_audio1_cb.style.backgroundColor = "#3aa087"
        storage_data_popups_audio1_cb.style.border = "none"
        whenUsingMobileArray.push("Audio")
    }
})
storage_data_popups_videos1.addEventListener("click", ()=>{
    if(storage_data_popups_videos1.classList.contains("checked")){
        storage_data_popups_videos1.classList.remove("checked")
        storage_data_popups_videos1_cb.style.backgroundColor = "transparent"
        storage_data_popups_videos1_cb.style.border = "#929ea1 2.5px solid"
        whenUsingMobileArray.splice(whenUsingMobileArray.indexOf("Video"),1)
    }else{
        storage_data_popups_videos1.classList.add("checked")
        storage_data_popups_videos1_cb.style.backgroundColor = "#3aa087"
        storage_data_popups_videos1_cb.style.border = "none"
        whenUsingMobileArray.push("Video")
    }
})
storage_data_popups_documents1.addEventListener("click", ()=>{
    if(storage_data_popups_documents1.classList.contains("checked")){
        storage_data_popups_documents1.classList.remove("checked")
        storage_data_popups_documents1_cb.style.backgroundColor = "transparent"
        storage_data_popups_documents1_cb.style.border = "#929ea1 2.5px solid"
        whenUsingMobileArray.splice(whenUsingMobileArray.indexOf("Documents"),1)
    }else{
        storage_data_popups_documents1.classList.add("checked")
        storage_data_popups_documents1_cb.style.backgroundColor = "#3aa087"
        storage_data_popups_documents1_cb.style.border = "none"
        whenUsingMobileArray.push("Documents")
    }
})

storage_data_popups_okbtn.addEventListener("click", ()=>{
    when_using_mb_popup.style.display = "none"
    if(storage_data_popups_documents1.classList.contains("checked") &&
    storage_data_popups_videos1.classList.contains("checked") &&
    storage_data_popups_audio1.classList.contains("checked") &&
    storage_data_popups_photos1.classList.contains("checked")){
        using_mb_display.innerHTML = "All media"
        return
    }
    if(!storage_data_popups_documents1.classList.contains("checked") &&
    !storage_data_popups_videos1.classList.contains("checked") &&
    !storage_data_popups_audio1.classList.contains("checked") &&
    !storage_data_popups_photos1.classList.contains("checked")){
        using_mb_display.innerHTML = "No media"
        return
    }
    using_mb_display.innerHTML = `${whenUsingMobileArray.toString()}`
    if(storage_data_popups_documents1.classList.contains("checked")){
        whenUsingMobileobject.files = true
    }
    if(storage_data_popups_videos1.classList.contains("checked")){
        whenUsingMobileobject.video = true
    }
    if(storage_data_popups_audio1.classList.contains("checked")){
        whenUsingMobileobject.audio = true
    }
    if(storage_data_popups_photos1.classList.contains("checked")){
        whenUsingMobileobject.photo = true
    }
})

storage_data_popups_cancelbtn.addEventListener("click", ()=>{
    if(whenUsingMobileobject.photo == true){
        storage_data_popups_photos1.classList.add("checked")
        storage_data_popups_photos1_cb.style.backgroundColor = "#3aa087"
        storage_data_popups_photos1_cb.style.border = "none"
        if(!whenUsingMobileArray.includes("Photos")){
        whenUsingMobileArray.push("Photos")}
    }
    if(whenUsingMobileobject.photo == false){
        storage_data_popups_photos1.classList.remove("checked")
        storage_data_popups_photos1_cb.style.backgroundColor = "transparent"
        storage_data_popups_photos1_cb.style.border = "#929ea1 2.5px solid"
        if(whenUsingMobileArray.includes("Photos")){
        whenUsingMobileArray.splice(whenUsingMobileArray.indexOf("Photos"),1)}
    }
    if(whenUsingMobileobject.audio == true){
        storage_data_popups_audio1.classList.add("checked")
        storage_data_popups_audio1_cb.style.backgroundColor = "#3aa087"
        storage_data_popups_audio1_cb.style.border = "none"
        if(!whenUsingMobileArray.includes("Audio")){
        whenUsingMobileArray.push("Audio")}
    }
    if(whenUsingMobileobject.audio == false){
        storage_data_popups_audio1.classList.remove("checked")
        storage_data_popups_audio1_cb.style.backgroundColor = "transparent"
        storage_data_popups_audio1_cb.style.border = "#929ea1 2.5px solid"
        if(whenUsingMobileArray.includes("Audio")){
        whenUsingMobileArray.splice(whenUsingMobileArray.indexOf("Audio"),1)}
    }
    if(whenUsingMobileobject.video == true){
        storage_data_popups_videos1.classList.add("checked")
        storage_data_popups_videos1_cb.style.backgroundColor = "#3aa087"
        storage_data_popups_videos1_cb.style.border = "none"
        if(!whenUsingMobileArray.includes("Video")){
        whenUsingMobileArray.push("Video")}
    }
    if(whenUsingMobileobject.video == false){
        storage_data_popups_videos1.classList.remove("checked")
        storage_data_popups_videos1_cb.style.backgroundColor = "transparent"
        storage_data_popups_videos1_cb.style.border = "#929ea1 2.5px solid"
        if(whenUsingMobileArray.includes("Video")){
        whenUsingMobileArray.splice(whenUsingMobileArray.indexOf("Video"),1)}
    }
    if(whenUsingMobileobject.files == true){
        storage_data_popups_documents1.classList.add("checked")
        storage_data_popups_documents1_cb.style.backgroundColor = "#3aa087"
        storage_data_popups_documents1_cb.style.border = "none"
        if(!whenUsingMobileArray.includes("Documents")){
        whenUsingMobileArray.push("Documents")}
    }
    if(whenUsingMobileobject.files == false){
        storage_data_popups_documents1.classList.remove("checked")
        storage_data_popups_documents1_cb.style.backgroundColor = "transparent"
        storage_data_popups_documents1_cb.style.border = "#929ea1 2.5px solid"
        if(whenUsingMobileArray.includes("Documents")){
        whenUsingMobileArray.splice(whenUsingMobileArray.indexOf("Documents"),1)}
    }
    when_using_mb_popup.style.display = "none"
})

let storage_data_popups_photos2 = document.getElementById("storage_data_popups_photos2")
let storage_data_popups_audio2 = document.getElementById("storage_data_popups_audio2")
let storage_data_popups_videos2 = document.getElementById("storage_data_popups_videos2")
let storage_data_popups_documents2 = document.getElementById("storage_data_popups_documents2")

let storage_data_popups_photos2_cb  = document.getElementById("storage_data_popups_photos2_cb")
let storage_data_popups_audio2_cb = document.getElementById("storage_data_popups_audio2_cb")
let storage_data_popups_videos2_cb = document.getElementById("storage_data_popups_videos2_cb")
let storage_data_popups_documents2_cb = document.getElementById("storage_data_popups_documents2_cb")

let usingWifiDisplayObject = {
    photo: false,
    video: false,
    audio: false,
    files: false,
}

let using_wifi_display = document.getElementById("using_wifi_display")
let usingWifiDisplayArray = []

storage_data_popups_photos2.addEventListener("click", ()=>{
    if(storage_data_popups_photos2.classList.contains("checked")){
        storage_data_popups_photos2.classList.remove("checked")
        storage_data_popups_photos2_cb.style.backgroundColor = "transparent"
        storage_data_popups_photos2_cb.style.border = "#929ea2 2.5px solid"
        usingWifiDisplayArray.splice(usingWifiDisplayArray.indexOf("Photos"),1)
    }else{
        storage_data_popups_photos2.classList.add("checked")
        storage_data_popups_photos2_cb.style.backgroundColor = "#3aa087"
        storage_data_popups_photos2_cb.style.border = "none"
        usingWifiDisplayArray.push("Photos")
    }
   
})
storage_data_popups_audio2.addEventListener("click", ()=>{
    if(storage_data_popups_audio2.classList.contains("checked")){
        storage_data_popups_audio2.classList.remove("checked")
        storage_data_popups_audio2_cb.style.backgroundColor = "transparent"
        storage_data_popups_audio2_cb.style.border = "#929ea2 2.5px solid"
        usingWifiDisplayArray.splice(usingWifiDisplayArray.indexOf("Audio"),1)  
    }else{
        storage_data_popups_audio2.classList.add("checked")
        storage_data_popups_audio2_cb.style.backgroundColor = "#3aa087"
        storage_data_popups_audio2_cb.style.border = "none"
        usingWifiDisplayArray.push("Audio")
    }
})
storage_data_popups_videos2.addEventListener("click", ()=>{
    if(storage_data_popups_videos2.classList.contains("checked")){
        storage_data_popups_videos2.classList.remove("checked")
        storage_data_popups_videos2_cb.style.backgroundColor = "transparent"
        storage_data_popups_videos2_cb.style.border = "#929ea2 2.5px solid"
        usingWifiDisplayArray.splice(usingWifiDisplayArray.indexOf("Video"),1)
    }else{
        storage_data_popups_videos2.classList.add("checked")
        storage_data_popups_videos2_cb.style.backgroundColor = "#3aa087"
        storage_data_popups_videos2_cb.style.border = "none"
        usingWifiDisplayArray.push("Video")
    }
})
storage_data_popups_documents2.addEventListener("click", ()=>{
    if(storage_data_popups_documents2.classList.contains("checked")){
        storage_data_popups_documents2.classList.remove("checked")
        storage_data_popups_documents2_cb.style.backgroundColor = "transparent"
        storage_data_popups_documents2_cb.style.border = "#929ea2 2.5px solid"
        usingWifiDisplayArray.splice(usingWifiDisplayArray.indexOf("Documents"),1)
    }else{
        storage_data_popups_documents2.classList.add("checked")
        storage_data_popups_documents2_cb.style.backgroundColor = "#3aa087"
        storage_data_popups_documents2_cb.style.border = "none"
        usingWifiDisplayArray.push("Documents")
    }
})


storage_data_popups_okbtn2.addEventListener("click", ()=>{
    when_using_mb_popup.style.display = "none"
    if(storage_data_popups_documents2.classList.contains("checked") &&
    storage_data_popups_videos2.classList.contains("checked") &&
    storage_data_popups_audio2.classList.contains("checked") &&
    storage_data_popups_photos2.classList.contains("checked")){
        using_wifi_display.innerHTML = "All media"
        return
    }
    if(!storage_data_popups_documents2.classList.contains("checked") &&
    !storage_data_popups_videos2.classList.contains("checked") &&
    !storage_data_popups_audio2.classList.contains("checked") &&
    !storage_data_popups_photos2.classList.contains("checked")){
        using_wifi_display.innerHTML = "No media"
        return
    }
    using_wifi_display.innerHTML = `${usingWifiDisplayArray.toString()}`
    if(storage_data_popups_documents2.classList.contains("checked")){
        usingWifiDisplayObject.files = true
    }
    if(storage_data_popups_videos2.classList.contains("checked")){
        usingWifiDisplayObject.video = true
    }
    if(storage_data_popups_audio2.classList.contains("checked")){
        usingWifiDisplayObject.audio = true
    }
    if(storage_data_popups_photos2.classList.contains("checked")){
        usingWifiDisplayObject.photo = true
    }
})


storage_data_popups_cancelbtn2.addEventListener("click", ()=>{
    if(usingWifiDisplayObject.photo == true){
        storage_data_popups_photos2.classList.add("checked")
        storage_data_popups_photos2_cb.style.backgroundColor = "#3aa087"
        storage_data_popups_photos2_cb.style.border = "none"
        if(!usingWifiDisplayArray.includes("Photos")){
        usingWifiDisplayArray.push("Photos")}
    }
    if(usingWifiDisplayObject.photo == false){
        storage_data_popups_photos2.classList.remove("checked")
        storage_data_popups_photos2_cb.style.backgroundColor = "transparent"
        storage_data_popups_photos2_cb.style.border = "#929ea2 2.5px solid"
        if(usingWifiDisplayArray.includes("Photos")){
        usingWifiDisplayArray.splice(usingWifiDisplayArray.indexOf("Photos"),1)}
    }
    if(usingWifiDisplayObject.audio == true){
        storage_data_popups_audio2.classList.add("checked")
        storage_data_popups_audio2_cb.style.backgroundColor = "#3aa087"
        storage_data_popups_audio2_cb.style.border = "none"
        if(!usingWifiDisplayArray.includes("Audio")){
        usingWifiDisplayArray.push("Audio")}
    }
    if(usingWifiDisplayObject.audio == false){
        storage_data_popups_audio2.classList.remove("checked")
        storage_data_popups_audio2_cb.style.backgroundColor = "transparent"
        storage_data_popups_audio2_cb.style.border = "#929ea2 2.5px solid"
        if(usingWifiDisplayArray.includes("Audio")){
        usingWifiDisplayArray.splice(usingWifiDisplayArray.indexOf("Audio"),1)}
    }
    if(usingWifiDisplayObject.video == true){
        storage_data_popups_videos2.classList.add("checked")
        storage_data_popups_videos2_cb.style.backgroundColor = "#3aa087"
        storage_data_popups_videos2_cb.style.border = "none"
        if(!usingWifiDisplayArray.includes("Video")){
        usingWifiDisplayArray.push("Video")}
    }
    if(usingWifiDisplayObject.video == false){
        storage_data_popups_videos2.classList.remove("checked")
        storage_data_popups_videos2_cb.style.backgroundColor = "transparent"
        storage_data_popups_videos2_cb.style.border = "#929ea2 2.5px solid"
        if(usingWifiDisplayArray.includes("Video")){
        usingWifiDisplayArray.splice(usingWifiDisplayArray.indexOf("Video"),1)}
    }
    if(usingWifiDisplayObject.files == true){
        storage_data_popups_documents2.classList.add("checked")
        storage_data_popups_documents2_cb.style.backgroundColor = "#3aa087"
        storage_data_popups_documents2_cb.style.border = "none"
        if(!usingWifiDisplayArray.includes("Documents")){
        usingWifiDisplayArray.push("Documents")}
    }
    if(usingWifiDisplayObject.files == false){
        storage_data_popups_documents2.classList.remove("checked")
        storage_data_popups_documents2_cb.style.backgroundColor = "transparent"
        storage_data_popups_documents2_cb.style.border = "#929ea2 2.5px solid"
        if(usingWifiDisplayArray.includes("Documents")){
        usingWifiDisplayArray.splice(usingWifiDisplayArray.indexOf("Documents"),1)}
    }
    when_using_wifi_popup.style.display = "none"
})




let storage_data_popups_photos3 = document.getElementById("storage_data_popups_photos3")
let storage_data_popups_audio3 = document.getElementById("storage_data_popups_audio3")
let storage_data_popups_videos3 = document.getElementById("storage_data_popups_videos3")
let storage_data_popups_documents3 = document.getElementById("storage_data_popups_documents3")

let storage_data_popups_photos3_cb  = document.getElementById("storage_data_popups_photos3_cb")
let storage_data_popups_audio3_cb = document.getElementById("storage_data_popups_audio3_cb")
let storage_data_popups_videos3_cb = document.getElementById("storage_data_popups_videos3_cb")
let storage_data_popups_documents3_cb = document.getElementById("storage_data_popups_documents3_cb")


let usingRoamingObject = {
    photo: false,
    video: false,
    audio: false,
    files: false,
}

let using_roaming_display = document.getElementById("using_roaming_display")
let usingroamingArray = []

storage_data_popups_photos3.addEventListener("click", ()=>{
    if(storage_data_popups_photos3.classList.contains("checked")){
        storage_data_popups_photos3.classList.remove("checked")
        storage_data_popups_photos3_cb.style.backgroundColor = "transparent"
        storage_data_popups_photos3_cb.style.border = "#929ea2 2.5px solid"
        usingroamingArray.splice(usingroamingArray.indexOf("Photos"),1)
    }else{
        storage_data_popups_photos3.classList.add("checked")
        storage_data_popups_photos3_cb.style.backgroundColor = "#3aa087"
        storage_data_popups_photos3_cb.style.border = "none"
        usingroamingArray.push("Photos")
    }   
})
storage_data_popups_audio3.addEventListener("click", ()=>{
    if(storage_data_popups_audio3.classList.contains("checked")){
        storage_data_popups_audio3.classList.remove("checked")
        storage_data_popups_audio3_cb.style.backgroundColor = "transparent"
        storage_data_popups_audio3_cb.style.border = "#929ea2 2.5px solid"
        usingroamingArray.splice(usingroamingArray.indexOf("Audio"),1)  
    }else{
        storage_data_popups_audio3.classList.add("checked")
        storage_data_popups_audio3_cb.style.backgroundColor = "#3aa087"
        storage_data_popups_audio3_cb.style.border = "none"
        usingroamingArray.push("Audio")
    }
})
storage_data_popups_videos3.addEventListener("click", ()=>{
    if(storage_data_popups_videos3.classList.contains("checked")){
        storage_data_popups_videos3.classList.remove("checked")
        storage_data_popups_videos3_cb.style.backgroundColor = "transparent"
        storage_data_popups_videos3_cb.style.border = "#929ea2 2.5px solid"
        usingroamingArray.splice(usingroamingArray.indexOf("Video"),1)
    }else{
        storage_data_popups_videos3.classList.add("checked")
        storage_data_popups_videos3_cb.style.backgroundColor = "#3aa087"
        storage_data_popups_videos3_cb.style.border = "none"
        usingroamingArray.push("Video")
    }
})
storage_data_popups_documents3.addEventListener("click", ()=>{
    if(storage_data_popups_documents3.classList.contains("checked")){
        storage_data_popups_documents3.classList.remove("checked")
        storage_data_popups_documents3_cb.style.backgroundColor = "transparent"
        storage_data_popups_documents3_cb.style.border = "#929ea2 2.5px solid"
        usingroamingArray.splice(usingroamingArray.indexOf("Documents"),1)
    }else{
        storage_data_popups_documents3.classList.add("checked")
        storage_data_popups_documents3_cb.style.backgroundColor = "#3aa087"
        storage_data_popups_documents3_cb.style.border = "none"
        usingroamingArray.push("Documents")
    }
})


storage_data_popups_okbtn3.addEventListener("click", ()=>{
    when_roaming_popup.style.display = "none"
    if(storage_data_popups_documents3.classList.contains("checked") &&
    storage_data_popups_videos3.classList.contains("checked") &&
    storage_data_popups_audio3.classList.contains("checked") &&
    storage_data_popups_photos3.classList.contains("checked")){
        using_roaming_display.innerHTML = "All media"
        return
    }
    if(!storage_data_popups_documents3.classList.contains("checked") &&
    !storage_data_popups_videos3.classList.contains("checked") &&
    !storage_data_popups_audio3.classList.contains("checked") &&
    !storage_data_popups_photos3.classList.contains("checked")){
        using_roaming_display.innerHTML = "No media"
        return
    }
    using_roaming_display.innerHTML = `${usingroamingArray.toString()}`
    if(storage_data_popups_documents3.classList.contains("checked")){
        usingRoamingObject.files = true
    }
    if(storage_data_popups_videos3.classList.contains("checked")){
        usingRoamingObject.video = true
    }
    if(storage_data_popups_audio3.classList.contains("checked")){
        usingRoamingObject.audio = true
    }
    if(storage_data_popups_photos3.classList.contains("checked")){
        usingRoamingObject.photo = true
    }
})


storage_data_popups_cancelbtn3.addEventListener("click", ()=>{
    if(usingRoamingObject.photo == true){
        storage_data_popups_photos3.classList.add("checked")
        storage_data_popups_photos3_cb.style.backgroundColor = "#3aa087"
        storage_data_popups_photos3_cb.style.border = "none"
        if(!usingroamingArray.includes("Photos")){
        usingroamingArray.push("Photos")}
    }
    if(usingRoamingObject.photo == false){
        storage_data_popups_photos3.classList.remove("checked")
        storage_data_popups_photos3_cb.style.backgroundColor = "transparent"
        storage_data_popups_photos3_cb.style.border = "#929ea2 2.5px solid"
        if(usingroamingArray.includes("Photos")){
        usingroamingArray.splice(usingroamingArray.indexOf("Photos"),1)}
    }
    if(usingRoamingObject.audio == true){
        storage_data_popups_audio3.classList.add("checked")
        storage_data_popups_audio3_cb.style.backgroundColor = "#3aa087"
        storage_data_popups_audio3_cb.style.border = "none"
        if(!usingroamingArray.includes("Audio")){
        usingroamingArray.push("Audio")}
    }
    if(usingRoamingObject.audio == false){
        storage_data_popups_audio3.classList.remove("checked")
        storage_data_popups_audio3_cb.style.backgroundColor = "transparent"
        storage_data_popups_audio3_cb.style.border = "#929ea2 2.5px solid"
        if(usingroamingArray.includes("Audio")){
        usingroamingArray.splice(usingroamingArray.indexOf("Audio"),1)}
    }
    if(usingRoamingObject.video == true){
        storage_data_popups_videos3.classList.add("checked")
        storage_data_popups_videos3_cb.style.backgroundColor = "#3aa087"
        storage_data_popups_videos3_cb.style.border = "none"
        if(!usingroamingArray.includes("Video")){
        usingroamingArray.push("Video")}
    }
    if(usingRoamingObject.video == false){
        storage_data_popups_videos3.classList.remove("checked")
        storage_data_popups_videos3_cb.style.backgroundColor = "transparent"
        storage_data_popups_videos3_cb.style.border = "#929ea2 2.5px solid"
        if(usingroamingArray.includes("Video")){
        usingroamingArray.splice(usingroamingArray.indexOf("Video"),1)}
    }
    if(usingRoamingObject.files == true){
        storage_data_popups_documents3.classList.add("checked")
        storage_data_popups_documents3_cb.style.backgroundColor = "#3aa087"
        storage_data_popups_documents3_cb.style.border = "none"
        if(!usingroamingArray.includes("Documents")){
        usingroamingArray.push("Documents")}
    }
    if(usingRoamingObject.files == false){
        storage_data_popups_documents3.classList.remove("checked")
        storage_data_popups_documents3_cb.style.backgroundColor = "transparent"
        storage_data_popups_documents3_cb.style.border = "#929ea2 2.5px solid"
        if(usingroamingArray.includes("Documents")){
        usingroamingArray.splice(usingroamingArray.indexOf("Documents"),1)}
    }
    when_roaming_popup.style.display = "none"
})



// help page
let settings_help_selector = document.getElementById("settings_help_selector")
let help_page_arrowback_icon = document.getElementById("help_page_arrowback_icon")
settings_help_selector.addEventListener("click", ()=>{
    CloseAllPages()
    help_page.style.display = "block"
})
help_page_arrowback_icon.addEventListener("click", ()=>{
    CloseAllPages()
    settings_page.style.display = "block"
})

// contact us page
let contact_us_selector = document.getElementById("contact_us_selector")
let contact_us_page_arrowback_icon = document.getElementById("contact_us_page_arrowback_icon")
contact_us_selector.addEventListener("click", ()=>{
    CloseAllPages()
    contact_us_page.style.display = "block"
})
contact_us_page_arrowback_icon.addEventListener("click", ()=>{
    CloseAllPages()
    help_page.style.display = "block"
})


// invite page
let invite_page_arrowback_icon = document.getElementById("invite_page_arrowback_icon")
invite_page_arrowback_icon.addEventListener("click",()=>{
    CloseAllPages()
    settings_page.style.display = "block"
})
let invite_page_selector = document.getElementById("invite_page_selector")
invite_page_selector.addEventListener("click", ()=>{
    CloseAllPages()
    invite_page.style.display = "block"
})





window.addEventListener("mouseup",(e)=>{
    if (e.target != secondary_navigation && e.target.parentNode != secondary_navigation){
        secondary_navigation.style.display = "none"
    }
    if (e.target != contact_navigation_section && e.target != contact_nav_more){
        contact_navigation_section.style.display = "none"
        contact_nav_firstpage.style.display = "block"
        contact_nav_secondpage.style.display = "none"
    }
    if(e.target != more_items_popup && e.target.parentNode != more_items_popup && e.target.parentNode.parentNode != more_items_popup && e.target.parentNode.parentNode.parentNode != more_items_popup){
        more_items_popup.style.display = "none"
    }
    if(e.target != profile_photo_selection_div && e.target.parentNode != profile_photo_selection_div && e.target.parentNode.parentNode != profile_photo_selection_div && e.target.parentNode.parentNode.parentNode != profile_photo_selection_div){
        profile_photo_selection_div.style.display = "none"
    }
})
