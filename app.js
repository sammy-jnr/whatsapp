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
    closeAllMainPageTabs();
    removeAllSecondaryNavItems();
    active_chats.style.display = "block";
    chats_selector.classList.add("active");
    settings_selector.style.display = "block";
    for_chats_section.style.display = "block";
})
status_selector.addEventListener("click", ()=>{
    closeAllMainPageTabs();
    removeAllSecondaryNavItems();
    status_section.style.display = "block";
    status_selector.classList.add("active");
    settings_selector.style.display = "block";
    for_status_section.style.display = "block"
})
calls_selector.addEventListener("click", ()=>{
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
}



let status_privacy_selector = document.getElementById("status_privacy_selector")
status_privacy_selector.addEventListener("click", ()=>{
    CloseAllPages();
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












let contacts =[
    Amanda = {
        name: "Amanda",
        status: "online",
        image: "icons\\ellipses_grey.svg",
        tagline: "available",
        groups: "",
        phoneNo:"+234 808 080 8080",
    },
    Augusta = {
        name: "Augusta",
        status: "online",
        image: "",
        tagline: "innovative",
        groups: "",
        phoneNo:"+234 808 080 8080",
    },
    Benita = {
        name: "benita",
        status: "online",
        image: "",
        tagline: ".",
        groups: "",
        phoneNo:"+234 808 080 8080",
    },
    Choko = {
        name: "Choko",
        status: "online",
        image: "",
        tagline: "emoji",
        groups: "",
        phoneNo:"+234 808 080 8080",
    },
    kamdi = {
        name: "kamdi",
        status: "online",
        image: "",
        tagline: "beyond the heavens and the earth i",
        groups: "",
        phoneNo:"+234 808 080 8080",
    }
]

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

let contact_info_mute_notification_switch = document.getElementById("contact_info_mute_notification_switch")
let contact_info_div1 = document.getElementById("contact_info_div1")
let contact_info_div2 = document.getElementById("contact_info_div2")
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



let selectcontact_page_bottomsection = document.getElementById("selectcontact_page_bottomsection")
let sorted = contacts.sort((a,b)=>a.name.localeCompare(b.name))

function showContacts(){
    for(let i =0; i<sorted.length; i++){
        let contact = sorted[i]
        let contact_div = document.createElement("div")
        contact_div.classList.add("contact_div")
        contact_div.setAttribute("id", contact.name)
        let contact_div_image_section = document.createElement("div")
        contact_div_image_section.classList.add("contact_div_image_section")
        let contact_image = document.createElement("img")
        contact_image.setAttribute("src", contact.image)
        contact_image.setAttribute("alt", "")
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
            let chat_page = document.createElement("div")
            chat_page.classList.add("chat_page")
            container.appendChild(chat_page)
            let chat_page_topsection = document.createElement("div")
            chat_page_topsection.classList.add("chat_page_topsection")
            chat_page.appendChild(chat_page_topsection)
            let name_backarrow_group = document.createElement("div")
            name_backarrow_group.classList.add("name_backarrow_group")
            chat_page_topsection.appendChild(name_backarrow_group)
            let arrowandimg_div = document.createElement("div")
            arrowandimg_div.classList.add("arrowandimg_div")
            name_backarrow_group.appendChild(arrowandimg_div)
            let chat_page_backarrow_icon = document.createElement("img")
            chat_page_backarrow_icon.setAttribute("src", "icons\\arrowback_white.svg")
            chat_page_backarrow_icon.setAttribute("alt", "")
            arrowandimg_div.appendChild(chat_page_backarrow_icon)
            let chat_page_img = document.createElement("img")
            chat_page_img.setAttribute("src", contact.image)
            chat_page_img.setAttribute("alt", "")
            arrowandimg_div.appendChild(chat_page_img)
            arrowandimg_div.addEventListener("click", ()=>{
                CloseAllPages()
                mainpage.style.display = "block"
            })
            let chat_page_name = document.createElement("p")
            chat_page_name.classList.add("chat_page_name")
            chat_page_name.innerHTML = contact.name
            name_backarrow_group.appendChild(chat_page_name)
            let chat_page_icons = document.createElement("div")
            chat_page_icons.classList.add("chat_page_icons")
            chat_page_topsection.appendChild(chat_page_icons)
            let chat_page_video_icon = document.createElement("img")
            chat_page_video_icon.setAttribute("src", "icons\\video_icon.svg")
            chat_page_video_icon.setAttribute("alt", "")
            chat_page_icons.appendChild(chat_page_video_icon)
            let chat_page_call_icon = document.createElement("img")
            chat_page_call_icon.setAttribute("src", "icons\\ordinary_phone_white.svg")
            chat_page_call_icon.setAttribute("width", "20px")
            chat_page_call_icon.setAttribute("alt", "")
            chat_page_icons.appendChild(chat_page_call_icon)
            let chat_page_ellipses_icon = document.createElement("img")
            chat_page_ellipses_icon.setAttribute("src", "icons\\ellipses_grey.svg")
            chat_page_ellipses_icon.setAttribute("alt", "")
            chat_page_ellipses_icon.addEventListener("click", ()=>{
                contact_navigation_section.style.display = "block"
            })
            chat_page_icons.appendChild(chat_page_ellipses_icon)


            let chat_page_input_section = document.createElement("div")
            chat_page_input_section.classList.add("chat_page_input_section")
            chat_page.appendChild(chat_page_input_section)
            let chat_page_inut_div = document.createElement("div")
            chat_page_inut_div.classList.add("chat_page_inut_div")
            chat_page_input_section.appendChild(chat_page_inut_div)
            let chat_page_emoji_icon_div = document.createElement("div")
            chat_page_emoji_icon_div.classList.add("chat_page_emoji_icon_div")
            chat_page_inut_div.appendChild(chat_page_emoji_icon_div)
            let chat_page_emoji_icon = document.createElement("img")
            chat_page_emoji_icon.setAttribute("src", "icons\\emoji_icon.svg")
            chat_page_emoji_icon.setAttribute("alt", "")
            chat_page_emoji_icon_div.appendChild(chat_page_emoji_icon)
            let chat_page_input = document.createElement("input")
            chat_page_input.classList.add("chat_page_input")
            chat_page_input.setAttribute("type", "text")
            chat_page_input.setAttribute("placeholder", "Message")
            chat_page_inut_div.appendChild(chat_page_input)
            let chat_page_input_section_icons_div = document.createElement("div")
            chat_page_input_section_icons_div.classList.add("chat_page_input_section_icons_div")
            chat_page_inut_div.appendChild(chat_page_input_section_icons_div)
            let chat_page_attach_icon = document.createElement("img")
            chat_page_attach_icon.setAttribute("src", "icons\\attach_icon.svg")
            chat_page_attach_icon.setAttribute("alt", "")
            chat_page_input_section_icons_div.appendChild(chat_page_attach_icon)
            let chat_page_camera_icon = document.createElement("img")
            chat_page_camera_icon.setAttribute("src", "icons\\camera_grey.svg")
            chat_page_camera_icon.setAttribute("alt", "")
            chat_page_input_section_icons_div.appendChild(chat_page_camera_icon)

            let audio_icon_div = document.createElement("div")
            audio_icon_div.classList.add("audio_icon_div")
            chat_page_input_section.appendChild(audio_icon_div)




            
        })
        selectcontact_page_bottomsection.appendChild(contact_div)
    }
}
showContacts()



window.addEventListener("mouseup",(e)=>{
    if (e.target != secondary_navigation && e.target.parentNode != secondary_navigation){
        secondary_navigation.style.display = "none"
    }
    if (e.target != contact_navigation_section && e.target != contact_nav_more){
        contact_navigation_section.style.display = "none"
        contact_nav_firstpage.style.display = "block"
        contact_nav_secondpage.style.display = "none"
    }
})
