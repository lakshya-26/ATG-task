function global(){
    mobileViewGroup();
    mobileViewCreateAccount();
    toggleMobileModalContent()
    desktopViewGroup();
}

function mobileViewGroup(){
    const group = document.querySelector(".join-group");

    group.addEventListener("click", () => {
        if (group.textContent === 'Join Group') {
            group.textContent = 'Leave Group';
        } else {
            group.textContent = 'Join Group';
        }
    })
}

function mobileViewCreateAccount(){
    const writePost = document.querySelector(".circle-write-post");
    const close = document.querySelector(".close-btn");
    const mobileViewAccountDetails = document.querySelector(".mobile-view");

    writePost.addEventListener("click", () => {
        mobileViewAccountDetails.classList.add("active");
    })

    close.addEventListener("click", () => {
        mobileViewAccountDetails.classList.remove("active");
    })
}

function desktopViewGroup(){
    const group = document.querySelector(".leave-btn");

    group.addEventListener("click", () => {
        if(group.textContent === "Join Group"){
            group.textContent = "Leave Group"
            group.classList.remove("btn-primary");
            group.classList.add("btn-white");
        }else{
            group.textContent = "Join Group"
            group.classList.remove("btn-white");
            group.classList.add("btn-primary");
        }
    })
}

function toggleDesktopModalContent(){
    const desktopSignin = document.querySelector(".desktopSignin");
    const head = document.querySelector(".head");
    const fname = document.querySelector(".fname");
    const lname = document.querySelector(".lname");
    const accountBtn = document.querySelector(".create-btn");
    const forgot = document.querySelector(".forgot");

    if(head.textContent === "Create Account"){
        head.textContent = "Sign In";
        desktopSignin.innerHTML = 'Don’t have an account yet? <span class="text-primary">Create new for free!</span>';
        accountBtn.textContent = "Sign in";
        fname.classList.add("d-none");
        lname.classList.add("d-none");
        forgot.classList.remove("d-none");
    } else {
        head.textContent = "Create Account";
        desktopSignin.innerHTML = 'Already have an account? <span class="text-primary">Sign In</span>';
        accountBtn.textContent = "Create Account";
        fname.classList.remove("d-none");
        lname.classList.remove("d-none");
        forgot.classList.add("d-none");
    }

}

function toggleMobileModalContent(){
    const mobileSignin = document.querySelector(".mobileSignin");
    const head = document.querySelector(".head1");
    const fname = document.querySelector(".fname1");
    const lname = document.querySelector(".lname1");
    const accountBtn = document.querySelector(".create-btn1");
    const forgot = document.querySelector(".forgot1");
    const info = document.querySelector(".details");

    mobileSignin.addEventListener("click", () => {
        
        if(head.textContent === "Create Account"){
            head.textContent = "Welcome Back";
            mobileSignin.textContent = 'or, Create Account';
            accountBtn.textContent = "Sign in";
            fname.classList.add("d-none");
            lname.classList.add("d-none");
            forgot.classList.remove("d-none");
            info.classList.add("d-none");
        } else {
            head.textContent = "Create Account";
            mobileSignin.textContent = 'or, Sign In';
            accountBtn.textContent = "Create Account";
            fname.classList.remove("d-none");
            lname.classList.remove("d-none");
            forgot.classList.add("d-none");
            info.classList.remove("d-none");
        }
    })

}
global();