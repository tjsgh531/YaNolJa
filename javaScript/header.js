export class Header{
    constructor(){  
        this.headerSec = document.querySelector('.header');
        this.subNav = document.querySelectorAll('.subnav');

        // header_mouseEvent
        this.headerSec.addEventListener('mouseenter',this.mouseEnter.bind(this));
        this.headerSec.addEventListener('mouseleave', this.mouseLeave.bind(this));

        // subnav_MouseEvent
        this.subNavBtn = document.querySelectorAll('.subnav_btn');
        this.subNavBtn.forEach(element => {
            element.addEventListener('mouseenter',this.subNavMouseEnter.bind(this));
            element.addEventListener('mouseleave',this.subNavMouseLeave.bind(this));
        });
    }

    //#region Header_MouseEvent
    subNavHeight(){
        let cur =0;
        this.subNav.forEach(element => {
            if(element.offsetHeight > cur) cur = element.offsetHeight;
        });
        return cur;
    }

    offHidden(){
        setTimeout(()=>{
            this.subNav.forEach(element => {
                element.classList.toggle('hidden',false);
            });    
            
        },300);
    }

    mouseEnter(){
        const preheight = this.headerSec.offsetHeight;
        
        this.subNav.forEach(element => {
            element.classList.toggle('hide',false);
            element.classList.toggle('hidden',true);
        });    

        const addheight = this.subNavHeight();

        const height = preheight + addheight;
        
        const background = document.querySelector('.header_background');
        background.style.height = `${height}px`;

        this.offHidden();
    }

    mouseLeave(){
        const background = document.querySelector('.header_background');
        this.subNav.forEach(element => {
            element.classList.toggle('hidden',true);
            element.classList.toggle('hide',true);
        });
        setTimeout(()=>{background.style.height = '0';},100);
    }
    //#endregion

    //#region subNav_MouseEvent
    subNavMouseEnter(event){
        event.target.style.textShadow='-0.1px 0 black, 0 0.1px black, 0.1px 0 black, -0.1px 0 black';
        event.target.style.marginLeft = '10px';
    }
    subNavMouseLeave(event){
        event.target.style.textShadow='';
        event.target.style.marginLeft = '0';
    }
    //#endregion
}