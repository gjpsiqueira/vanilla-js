const $ = document.querySelector.bind(document)

class Tab {
    constructor() {
        this.navTabs = [...$('.nav-tabs').children];
        this.tabContents = [...$('.tab-content').children];
        this.listenClick()
    }

    listenClick() {
        this.navTabs.forEach((el,index) => el.addEventListener('click', (event) => this.setTab(event, index)))
    }

    setTab(event,index) {
        this.removeActiveTabs()
        this.removeShowContent()
        this.showContent(index)
        event.target.className += ' active '
    }

    showContent(index) {
        this.tabContents[index].classList.add('show')
    }

    removeActiveTabs() {
        this.navTabs.forEach(el => el.classList.remove('active'))
    }

    removeShowContent() {
        this.tabContents.forEach(el => el.classList.remove('show'))
    }


}

window.addEventListener('load', () => {
    new Tab()
})