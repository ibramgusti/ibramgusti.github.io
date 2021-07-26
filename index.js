const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLink = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
    });

    navLink.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease-in ${index / 7 + 1.5}s`;
        }
    });
}

const refreshscroll = () => {
    const scroll = document.querySelector("#upbutton");
    if (document.documentElement.scrollTop <= 50) {
        scroll.style.display = "none"
    } else {
        scroll.style.display = "flex"
    }
}
const scrollUp = () => {
    document.addEventListener("scroll", () => {
        refreshscroll()
    })
}

const slideImage = () => {
    const dots = document.querySelectorAll(".btn")
    const image = document.querySelector("#landingImg")

    dots[0].onclick = function () {
        image.src = "assets/img/malang-kota.jpg"
        animation()
        this.classList.add("active")
    }
    dots[1].onclick = function () {
        image.src = "assets/img/malang_wisata.jpg"
        animation()
        this.classList.add("active")
    }
    dots[2].onclick = function () {
        image.src = "assets/img/malang2.jpg"
        animation()
        this.classList.add("active")
    }

    const animation = () => {
        image.classList.add("zoom")
        setTimeout(() => {
            image.classList.remove("zoom")
        }, 500);
        for (b of dots) {
            b.classList.remove("active")
        }
    }
}

const instagram = () => {
    window.open("https://www.instagram.com/bramm65/")
}

const github = () => {
    window.open("https://github.com/ibramgusti?tab=repositories")
}

const App = () => {
    refreshscroll()
    navSlide()
    scrollUp()
    slideImage()
    // onclickEvent()
}

App()