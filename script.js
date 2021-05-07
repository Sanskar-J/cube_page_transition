const btn1a=document.querySelector('.btn1a');
const btn1b=document.querySelector('.btn1b');
const btn1c=document.querySelector('.btn1c');
const btn1d=document.querySelector('.btn1d');
const btn2a=document.querySelector('.btn2a');
const btn2b=document.querySelector('.btn2b');
const btn2c=document.querySelector('.btn2c');
const btn2d=document.querySelector('.btn2d');
const btn3a=document.querySelector('.btn3a');
const btn3b=document.querySelector('.btn3b');
const btn3c=document.querySelector('.btn3c');
const btn3d=document.querySelector('.btn3d');
const btn4a=document.querySelector('.btn4a');
const btn4b=document.querySelector('.btn4b');
const btn4c=document.querySelector('.btn4c');
const btn4d=document.querySelector('.btn4d');
const btn5a=document.querySelector('.btn5a');
const btn5b=document.querySelector('.btn5b');
const btn5c=document.querySelector('.btn5c');
const btn5d=document.querySelector('.btn5d');
const btn6a=document.querySelector('.btn6a');
const btn6b=document.querySelector('.btn6b');
const btn6c=document.querySelector('.btn6c');
const btn6d=document.querySelector('.btn6d');
const screen_bot=document.querySelector('.screen-bot');
const screen_front=document.querySelector('.screen-front');
const screen_back=document.querySelector('.screen-back');
const screen_left=document.querySelector('.screen-left');
const screen_right=document.querySelector('.screen-right');
const screen_top=document.querySelector('.screen-top');


//bot all screen change
btn6a.addEventListener('click',()=>{
    screen_bot.style.transition='transform 0.4s ease-in-out';
    screen_bot.style.transform='translateY(100%)';
    screen_front.style.transition='transform 0.4s ease-in-out';
    screen_front.style.transform='translateY(0%)';
    screen_back.style.transition='';
    screen_back.style.transform='translateY(-100%)';
    screen_top.style.transform='translateY(-100%)';
})
btn6b.addEventListener('click',()=>{
    screen_bot.style.transition='transform 0.4s ease-in-out';
    screen_bot.style.transform='translateY(-100%)';
    screen_back.style.transition='transform 0.4s ease-in-out';
    screen_back.style.transform='translateY(0%)';
    screen_front.style.transition='';
    screen_front.style.transform='translateY(100%)';
    screen_top.style.transform='translateY(100%)';
})
btn6c.addEventListener('click',()=>{
    screen_bot.style.transition='transform 0.4s ease-in-out';
    screen_bot.style.transform='translateX(100%)';
    screen_left.style.transition='transform 0.4s ease-in-out';
    screen_left.style.transform='translateX(0%)';
    screen_right.style.transition='';
    screen_right.style.transform='translateX(-100%)';
    screen_top.style.transform='translateX(-100%)';
})
btn6d.addEventListener('click',()=>{
    screen_bot.style.transition='transform 0.4s ease-in-out';
    screen_bot.style.transform='translateX(-100%)';
    screen_right.style.transition='transform 0.4s ease-in-out';
    screen_right.style.transform='translateX(0%)';
    screen_left.style.transition='';
    screen_left.style.transform='translateX(100%)';
    screen_top.style.transform='translateX(100%)';
})
//front all screen change
btn1a.addEventListener('click',()=>{
    
    screen_front.style.transform='translateY(100%)';
    screen_top.style.transition='transform 0.4s ease-in-out';
    screen_top.style.transform='translateY(0%)';
    screen_bot.style.transition='';
    screen_bot.style.transform='translateY(-100%)';
    screen_back.style.transform='translateY(-100%)';
})
btn1b.addEventListener('click',()=>{
    screen_front.style.transition='transform 0.4s ease-in-out';
    screen_front.style.transform='translateY(-100%)';
    screen_bot.style.transition='transform 0.4s ease-in-out';
    screen_bot.style.transform='translateY(0%)';
    screen_top.style.transition='';
    screen_top.style.transform='translateY(100%)';
    screen_back.style.transform='translateY(100%)';
})
btn1c.addEventListener('click',()=>{
    screen_front.style.transition='transform 0.4s ease-in-out';
    screen_front.style.transform='translateX(100%)';
    screen_left.style.transition='transform 0.4s ease-in-out';
    screen_left.style.transform='translateX(0%)';
    screen_right.style.transition='';
    screen_right.style.transform='translateX(-100%)';
    screen_back.style.transform='translateX(-100%)';
})
btn1d.addEventListener('click',()=>{
    screen_front.style.transition='transform 0.4s ease-in-out';
    screen_front.style.transform='translateX(-100%)';
    screen_right.style.transition='transform 0.4s ease-in-out';
    screen_right.style.transform='translateX(0%)';
    screen_left.style.transition='';
    screen_left.style.transform='translateX(100%)';
    screen_back.style.transform='translateX(100%)';
})
//back all screen changes
btn2a.addEventListener('click',()=>{
    screen_back.style.transform='translateY(100%)';
    screen_bot.style.transition='transform 0.4s ease-in-out';
    screen_bot.style.transform='translateY(0%)';
    screen_top.style.transition='';
    screen_top.style.transform='translateY(-100%)';
    screen_front.style.transform='translateY(-100%)';

})
btn2b.addEventListener('click',()=>{
    screen_back.style.transition='transform 0.4s ease-in-out';
    screen_back.style.transform='translateY(-100%)';
    screen_top.style.transition='transform 0.4s ease-in-out';
    screen_top.style.transform='translateY(0%)';
    screen_bot.style.transition='';
    screen_bot.style.transform='translateY(100%)';
    screen_front.style.transform='translateY(100%)';
})
btn2c.addEventListener('click',()=>{
    screen_back.style.transition='transform 0.4s ease-in-out';
    screen_back.style.transform='translateX(100%)';
    screen_right.style.transition='transform 0.4s ease-in-out';
    screen_right.style.transform='translateX(0%)';
    screen_left.style.transition='';
    screen_left.style.transform='translateX(-100%)';
    screen_front.style.transform='translateX(-100%)';
})
btn2d.addEventListener('click',()=>{
    screen_back.style.transition='transform 0.4s ease-in-out';
    screen_back.style.transform='translateX(-100%)';
    screen_right.style.transition='transform 0.4s ease-in-out';
    screen_right.style.transform='translateX(0%)';
    screen_left.style.transition='';
    screen_left.style.transform='translateX(100%)';
    screen_front.style.transform='translateX(100%)';
})

//right all screen changes
btn4a.addEventListener('click',()=>{
    screen_right.style.transition='transform 0.4s ease-in-out';
    screen_right.style.transform='translateY(100%)';
    screen_top.style.transition='transform 0.4s ease-in-out';
    screen_top.style.transform='translateY(0%)';
    screen_bot.style.transition='';
    screen_bot.style.transform='translateY(-100%)';
    screen_left.style.transform='translateY(-100%)';
})
btn4b.addEventListener('click',()=>{
    screen_right.style.transition='transform 0.4s ease-in-out';
    screen_right.style.transform='translateY(-100%)';
    screen_bot.style.transition='transform 0.4s ease-in-out';
    screen_bot.style.transform='translateY(0%)';
    screen_top.style.transition='';
    screen_top.style.transform='translateY(100%)';
    screen_left.style.transform='translateY(100%)';
})
btn4c.addEventListener('click',()=>{
    screen_right.style.transition='transform 0.4s ease-in-out';
    screen_right.style.transform='translateX(100%)';
    screen_bot.style.transition='transform 0.4s ease-in-out';
    screen_bot.style.transform='translateX(0%)';
    screen_top.style.transition='';
    screen_top.style.transform='translateX(-100%)';
    screen_left.style.transform='translateX(-100%)';
})
btn4d.addEventListener('click',()=>{
    screen_right.style.transition='transform 0.4s ease-in-out';
    screen_right.style.transform='translateX(-100%)';
    screen_top.style.transition='transform 0.4s ease-in-out';
    screen_top.style.transform='translateX(0%)';
    screen_bot.style.transition='';
    screen_bot.style.transform='translateX(100%)';
    screen_left.style.transform='translateX(100%)';
})

//left all screen change
btn3a.addEventListener('click',()=>{
    screen_left.style.transition='transform 0.4s ease-in-out';
    screen_left.style.transform='translateY(100%)';
    screen_top.style.transition='transform 0.4s ease-in-out';
    screen_top.style.transform='translateY(0%)';
    screen_bot.style.transition='';
    screen_bot.style.transform='translateY(-100%)';
    screen_right.style.transform='translateY(-100%)';
})
btn3b.addEventListener('click',()=>{
    screen_left.style.transition='transform 0.4s ease-in-out';
    screen_left.style.transform='translateY(-100%)';
    screen_bot.style.transition='transform 0.4s ease-in-out';
    screen_bot.style.transform='translateY(0%)';
    screen_top.style.transition='';
    screen_top.style.transform='translateY(100%)';
    screen_right.style.transform='translateY(100%)';
})
btn3c.addEventListener('click',()=>{
    screen_left.style.transition='transform 0.4s ease-in-out';
    screen_left.style.transform='translateX(100%)';
    screen_top.style.transition='transform 0.4s ease-in-out';
    screen_top.style.transform='translateX(0%)';
    screen_bot.style.transition='';
    screen_bot.style.transform='translateX(-100%)';
    screen_right.style.transform='translateX(-100%)';
})
btn3d.addEventListener('click',()=>{
    screen_left.style.transition='transform 0.4s ease-in-out';
    screen_left.style.transform='translateY(-100%)';
    screen_bot.style.transition='transform 0.4s ease-in-out';
    screen_bot.style.transform='translateY(0%)';
    screen_top.style.transition='';
    screen_top.style.transform='translateY(100%)';
    screen_right.style.transform='translateY(100%)';
})

//top screen all changes
btn5a.addEventListener('click',()=>{
    screen_top.style.transform='translateY(100%)';
    screen_back.style.transition='transform 0.4s ease-in-out';
    screen_back.style.transform='translateY(0%)';
    screen_front.style.transition='';
    screen_front.style.transform='translateY(-100%)';
    screen_bot.style.transform='translateY(-100%)';
})
btn5b.addEventListener('click',()=>{
    screen_top.style.transition='transform 0.4s ease-in-out';
    screen_top.style.transform='translateY(-100%)';
    screen_front.style.transition='transform 0.4s ease-in-out';
    screen_front.style.transform='translateY(0%)';
    screen_back.style.transition='';
    screen_back.style.transform='translateY(100%)';
    screen_bot.style.transform='translateY(100%)';
})
btn5c.addEventListener('click',()=>{
    screen_top.style.transition='transform 0.4s ease-in-out';
    screen_top.style.transform='translateX(100%)';
    screen_right.style.transition='transform 0.4s ease-in-out';
    screen_right.style.transform='translateX(0%)';
    screen_left.style.transition='';
    screen_left.style.transform='translateX(-100%)';
    screen_bot.style.transform='translateX(-100%)';
})
btn5d.addEventListener('click',()=>{
    screen_top.style.transition='transform 0.4s ease-in-out';
    screen_top.style.transform='translateX(-100%)';
    screen_left.style.transition='transform 0.4s ease-in-out';
    screen_left.style.transform='translateX(0%)';
    screen_right.style.transition='';
    screen_right.style.transform='translateX(100%)';
    screen_bot.style.transform='translateX(100%)';
})
