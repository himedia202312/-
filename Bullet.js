class Bullet extends GameObject{
    
    constructor(container, src, x, y, width, height, velX, velY){
        super(container, src, x, y, width, height, velX, velY);
    }

    //총알만의 움직임 정의
    move(){
        console.log("자식인 총알의 move() 호출");
        this.x += this.velX; //x 물리량 변화 
        this.img.style.left=this.x+"px"; 
    }
}