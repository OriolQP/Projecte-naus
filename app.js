function initCanvas(){
    var ctx = document.getElementById('my_canvas').getContext('2d');
    var backgroundImage = new Image();
    var naveImage   = new Image();
    var enemiespic1  = new Image();
    var enemiespic2 = new Image();
    var enemiespic3 = new Image();
    var enemiespic4 = new Image();
    var enemiespic5 = new Image();

    backgroundImage.src = "images/background-pic.jpg";
    naveImage.src       = "images/spaceship-pic.png";
    enemiespic1.src     = "images/enemigo1.png";
    enemiespic2.src     = "images/enemigo2.png";
    enemiespic3.src     = "images/enemigo3.png";
    enemiespic4.src     = "images/enemigo4.png";
    enemiespic5.src     = "images/enemigo5.png";

    var cW = ctx.canvas.width;
    var cH = ctx.canvas.height;
    var enemyTemplate = function(options){
        return {
            id: options.id || '',
            x: options.x || '',
            y: options.y || '',
            w: options.w || '',
            h: options.h || '',
            image: options.image || enemiespic1
        }
    }
    var enemies = [
                   new enemyTemplate({id: "enemics1", x: 100, y: -20, w: 50, h: 30 }),
                   new enemyTemplate({id: "enemics2", x: 225, y: -20, w: 50, h: 30 }),
                   new enemyTemplate({id: "enemics3", x: 350, y: -20, w: 80, h: 30 }),
                   new enemyTemplate({id: "enemics4", x:100,  y:-70,  w:80,  h: 30}),
                   new enemyTemplate({id: "enemics5", x:225,  y:-70,  w:50,  h: 30}),
                   new enemyTemplate({id: "enemics6", x:350,  y:-70,  w:50,  h: 30}),
                   new enemyTemplate({id: "enemics7", x:475,  y:-70,  w:50,  h: 30}),
                   new enemyTemplate({id: "enemics8", x:600,  y:-70,  w:80,  h: 30}),
                   new enemyTemplate({id: "enemics9", x:475,  y:-20,  w:50,  h: 30}),
                   new enemyTemplate({id: "enemics10",x: 600, y: -20, w: 50, h: 30}),

                   new enemyTemplate({ id: "enemics11", x: 100, y: -220, w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemics12", x: 225, y: -220, w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemics13", x: 350, y: -220, w: 80, h: 50, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemics14", x: 100, y: -270, w: 80, h: 50, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemics15", x: 225, y: -270, w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemics16", x: 350, y: -270, w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemics17", x: 475, y: -270, w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemics18", x: 600, y: -270, w: 80, h: 50, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemics19", x: 475, y: -200, w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemics20", x: 600, y: -200, w: 50, h: 30, image: enemiespic2 }),

                   new enemyTemplate({ id: "enemics21", x: 100, y: -420, w: 50, h: 30, image: enemiespic3 }),
                   new enemyTemplate({ id: "enemics22", x: 225, y: -420, w: 50, h: 30, image: enemiespic3 }),
                   new enemyTemplate({ id: "enemics23", x: 350, y: -420, w: 80, h: 50, image: enemiespic3 }),
                   new enemyTemplate({ id: "enemics24", x: 100, y: -470, w: 80, h: 50, image: enemiespic3 }),
                   new enemyTemplate({ id: "enemics25", x: 225, y: -470, w: 50, h: 30, image: enemiespic3 }),
                   new enemyTemplate({ id: "enemics26", x: 350, y: -470, w: 50, h: 30, image: enemiespic3 }),
                   new enemyTemplate({ id: "enemics27", x: 475, y: -470, w: 50, h: 30, image: enemiespic3 }),
                   new enemyTemplate({ id: "enemics28", x: 600, y: -470, w: 80, h: 50, image: enemiespic3 }),
                   new enemyTemplate({ id: "enemics29", x: 475, y: -400, w: 50, h: 30, image: enemiespic3 }),
                   new enemyTemplate({ id: "enemics30", x: 600, y: -400, w: 50, h: 30, image: enemiespic3 }),

                   new enemyTemplate({ id: "enemics31", x: 100, y: -620, w: 50, h: 30, image: enemiespic4 }),
                   new enemyTemplate({ id: "enemics32", x: 225, y: -620, w: 50, h: 30, image: enemiespic4 }),
                   new enemyTemplate({ id: "enemics33", x: 350, y: -620, w: 80, h: 50, image: enemiespic4 }),
                   new enemyTemplate({ id: "enemics34", x: 100, y: -670, w: 80, h: 50, image: enemiespic4 }),
                   new enemyTemplate({ id: "enemics35", x: 225, y: -670, w: 50, h: 30, image: enemiespic4 }),
                   new enemyTemplate({ id: "enemics36", x: 350, y: -670, w: 50, h: 30, image: enemiespic4 }),
                   new enemyTemplate({ id: "enemics37", x: 475, y: -670, w: 50, h: 30, image: enemiespic4 }),
                   new enemyTemplate({ id: "enemics38", x: 600, y: -670, w: 80, h: 50, image: enemiespic4 }),
                   new enemyTemplate({ id: "enemics39", x: 475, y: -600, w: 50, h: 30, image: enemiespic4 }),
                   new enemyTemplate({ id: "enemics40", x: 600, y: -600, w: 50, h: 30, image: enemiespic4 }),

                   new enemyTemplate({ id: "enemics41", x: 100, y: -820, w: 50, h: 30, image: enemiespic5 }),
                   new enemyTemplate({ id: "enemics42", x: 225, y: -820, w: 50, h: 30, image: enemiespic5 }),
                   new enemyTemplate({ id: "enemics43", x: 350, y: -820, w: 80, h: 50, image: enemiespic5 }),
                   new enemyTemplate({ id: "enemics44", x: 100, y: -870, w: 80, h: 50, image: enemiespic5 }),
                   new enemyTemplate({ id: "enemics45", x: 225, y: -870, w: 50, h: 30, image: enemiespic5 }),
                   new enemyTemplate({ id: "enemics46", x: 350, y: -870, w: 50, h: 30, image: enemiespic5 }),
                   new enemyTemplate({ id: "enemics47", x: 475, y: -870, w: 50, h: 30, image: enemiespic5 }),
                   new enemyTemplate({ id: "enemics48", x: 600, y: -870, w: 80, h: 50, image: enemiespic5 }),
                   new enemyTemplate({ id: "enemics49", x: 475, y: -800, w: 50, h: 30, image: enemiespic5 }),
                   new enemyTemplate({ id: "enemics50", x: 600, y: -800, w: 50, h: 30, image: enemiespic5 })
                 ];

    var renderEnemies = function (enemyList) {
        for (var i = 0; i < enemyList.length; i++) {
            console.log(enemyList[i]);
            ctx.drawImage(enemyList[i].image, enemyList[i].x, enemyList[i].y += .5, enemyList[i].w, enemyList[i].h);
            launcher.hitDetectLowerLevel(enemyList[i]);
        }
    }

    function Launcher(){
        this.y = 500,
        this.x = cW*.5-25,
        this.w = 100,
        this.h = 100,
        this.direccion,
        this.bg="red",
        this.misiles = [];

         this.gameStatus = {
            over: false,
            message: "",
            fillStyle: 'red',
            font: 'italic bold 36px Arial, sans-serif',
        }

        this.render = function () {
            if(this.direccion === 'left'){
                this.x-=5;
            } else if(this.direccion === 'right'){
                this.x+=5;
            }else if(this.direccion === "downArrow"){
                this.y+=5;
            }else if(this.direccion === "upArrow"){
                this.y-=5;
            }
            ctx.fillStyle = this.bg;
            ctx.drawImage(backgroundImage, 10, 10);
            ctx.drawImage(naveImage,this.x,this.y, 100, 90);
            for(var i=0; i < this.misiles.length; i++){
                var m = this.misiles[i];
                ctx.fillRect(m.x, m.y-=5, m.w, m.h);
                this.hitDetect(this.misiles[i],i);
                if(m.y <= 0){
                    this.misiles.splice(i,1);
                }
            }
            if (enemies.length === 0) {
                clearInterval(animateInterval);
                ctx.fillStyle = 'yellow';
                ctx.font = this.gameStatus.font;
                ctx.fillText('Has Guanyat!', cW * .5 - 80, 50);
            }
        }
        this.hitDetect = function (m, mi) {
            console.log('crush');
            for (var i = 0; i < enemies.length; i++) {
                var e = enemies[i];
                if(m.x+m.w >= e.x &&
                   m.x <= e.x+e.w &&
                   m.y >= e.y &&
                   m.y <= e.y+e.h){
                    this.misiles.splice(this.misiles[mi],1);
                    enemies.splice(i, 1);
                    document.querySelector('.barra').innerHTML = "Destruit "+ e.id+ " ";
                }
            }
        }
        this.hitDetectLowerLevel = function(enemy){
            if(enemy.y > 550){
                this.gameStatus.over = true;
                this.gameStatus.message = 'Els enemics han passat!';
            }
            if(enemy.id === 'enemy3'){
                console.log(this.x);
            }
            if ((enemy.y < this.y + 25 && enemy.y > this.y - 25) &&
                (enemy.x < this.x + 45 && enemy.x > this.x - 45)) {
                    this.gameStatus.over = true;
                    this.gameStatus.message = 'Has Mort!'
                }

            if(this.gameStatus.over === true){
                clearInterval(animateInterval);
                ctx.fillStyle = this.gameStatus.fillStyle;
                ctx.font = this.gameStatus.font;
                ctx.fillText(this.gameStatus.message, cW * .5 - 80, 50);
            }
        }
    }

    var launcher = new Launcher();
    function animate(){
        ctx.clearRect(0, 0, cW, cH);
        launcher.render();
        renderEnemies(enemies);
    }
    var animateInterval = setInterval(animate, 6);

    var left_btn  = document.getElementById('left_btn');
    var right_btn = document.getElementById('right_btn');
    var fire_btn  = document.getElementById('fire_btn');

   document.addEventListener('keydown', function(event) {
        if(event.keyCode == 37)
        {
         launcher.direccion = 'left';
            if(launcher.x < cW*.2-130){
                launcher.x+=0;
                launcher.direccion = '';
            }
       }
    });

    document.addEventListener('keyup', function(event) {
        if(event.keyCode == 37)
        {
         launcher.x+=0;
         launcher.direccion = '';
        }
    });

    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 39)
        {
         launcher.direccion = 'right';
         if(launcher.x > cW-110){
            launcher.x-=0;
            launcher.direccion = '';
         }

        }
    });

    document.addEventListener('keyup', function(event) {
        if(event.keyCode == 39)
        {
         launcher.x-=0;
         launcher.direccion = '';
        }
    });

    document.addEventListener('keydown', function(event){
         if(event.keyCode == 38)
         {
           launcher.direccion = 'upArrow';
           if(launcher.y < cH*.2-80){
              launcher.y += 0;
              launcher.direccion = '';
            }
         }
    });

    document.addEventListener('keyup', function(event){
         if(event.keyCode == 38)
         {
           launcher.y -= 0;
           launcher.direccion = '';
         }
    });

    document.addEventListener('keydown', function(event){
         if(event.keyCode == 40)
         {
           launcher.direccion = 'downArrow';
          if(launcher.y > cH - 110){
            launcher.y -= 0;
            launcher.direccion = '';
           }
         }
    });
    document.addEventListener('keyup', function(event){
         if(event.keyCode == 40)
         {
           launcher.y += 0;
           launcher.direccion = '';
         }
    });

    document.addEventListener('keydown', function(event){
         if(event.keyCode == 80)
         {
          location.reload();
         }
    });

    left_btn.addEventListener('mousedown', function(event) {
        launcher.direccion = 'left';
    });

    left_btn.addEventListener('mouseup', function(event) {
        launcher.direccion = '';
    });

    right_btn.addEventListener('mousedown', function(event) {
        launcher.direccion = 'right';
    });

    right_btn.addEventListener('mouseup', function(event) {
        launcher.direccion = '';
    });
    fire_btn.addEventListener('mousedown', function(event) {
        launcher.misiles.push({x: launcher.x + launcher.w*.5, y: launcher.y, w: 3, h: 10});
    });
    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 32) {
           launcher.misiles.push({x: launcher.x + launcher.w*.5, y: launcher.y, w: 3,h: 10});
        }
    });
}

window.addEventListener('load', function(event) {
    initCanvas();
});
