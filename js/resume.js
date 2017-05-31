(function ($) {
    //初始化pagepiling插件
    $(function () {
        $('#pagepiling').pagepiling();
    });

    //首页下箭头上下浮动
    var t = parseInt($('.down i').css('top'));
    setInterval(function () {
        if(t<=40){
            t++;
            $('.down i').css('top',t);
        }else if(t>=40){
            t=30;
            $('.down i').css('top',t);
        }
    },90);

    //自我介绍页，绘制canvas
    var w = s1.width;
    var h = s1.height;
    // console.log(w, h);
    var ctx1 = s1.getContext('2d');

    //绘制圆形
    ctx1.beginPath();
    ctx1.arc(w / 2, h / 2, 110, 0, 360 * Math.PI / 180);
    ctx1.fillStyle = '#ddd';
    ctx1.fill();

    //绘制头像
    var photo = new Image();
    photo.src = 'img/photo.jpg';
    ctx1.beginPath();
    photo.onload = function () {
        ctx1.drawImage(photo, w / 2 - 100, h / 2 - 120, 200, 260);
    };
    ctx1.arc(w / 2, h / 2, 100, 0, 360 * Math.PI / 180);
    ctx1.closePath();
    ctx1.clip();

    //点击弹出菜单
    $('.popup_tag').click(function () {
        var left = $(this).parent().css('left');
        if (parseInt(left) < 0) {
            $('.popup').css('left', '0');
            $('.popup i').removeClass('fa-angle-right').addClass('fa-angle-left');
        } else {
            $('.popup').css('left', '-350px');
            $('.popup i').removeClass('fa-angle-left').addClass('fa-angle-right');
        }
    });

    //绘制技能栈
    var skill = {
        angular: 'Angular',
        react: 'React',
        nodeJs: 'Node.js',
        jQuery: 'jQuery',
        ionic: 'Ionic',
        phoneGap: 'phoneGap',
        es6: 'ES6',
        bootstrap: 'Bootstrap',
        php: 'PHP',
        html5: 'HTML5',
        css3: 'CSS3',
        echarts: "Echarts.js"
    };
    var ctx = s.getContext('2d');
    //绘制函数
    function draw() {
        //绘制背景
        rect();
        var r1 = 150, r2 = 70, r3 = 35, r4 = 25;
        //绘制外层轨迹
        track(s.width / 2, s.height / 2, r1);
        //绘制内层轨迹
        track(s.width / 2, s.height / 2, r2);
        //绘制外层圆形
        //东
        circle(s.width / 2 + r1, s.height / 2, r3);
        drawText(skill.angular, s.width / 2 + r1, s.height / 2);
        //南
        circle(s.width / 2, s.height / 2 + r1, r3);
        drawText(skill.react, s.width / 2, s.height / 2 + r1);
        //西
        circle(s.width / 2 - r1, s.height / 2, r3);
        drawText(skill.nodeJs, s.width / 2 - r1, s.height / 2);
        //北
        circle(s.width / 2, s.height / 2 - r1, r3);
        drawText(skill.jQuery, s.width / 2, s.height / 2 - r1);
        //东北
        circle(s.width / 2 + r1 * Math.sin(45 * Math.PI / 180), s.height / 2 - r1 * Math.sin(45 * Math.PI / 180), r3);
        drawText(skill.ionic, s.width / 2 + r1 * Math.sin(45 * Math.PI / 180), s.height / 2 - r1 * Math.sin(45 * Math.PI / 180));
        //东南
        circle(s.width / 2 + r1 * Math.sin(45 * Math.PI / 180), s.height / 2 + r1 * Math.sin(45 * Math.PI / 180), r3);
        drawText(skill.phoneGap, s.width / 2 + r1 * Math.sin(45 * Math.PI / 180), s.height / 2 + r1 * Math.sin(45 * Math.PI / 180));
        //西南
        circle(s.width / 2 - r1 * Math.sin(45 * Math.PI / 180), s.height / 2 + r1 * Math.sin(45 * Math.PI / 180), r3);
        drawText(skill.es6, s.width / 2 - r1 * Math.sin(45 * Math.PI / 180), s.height / 2 + r1 * Math.sin(45 * Math.PI / 180));
        //西北
        circle(s.width / 2 - r1 * Math.sin(45 * Math.PI / 180), s.height / 2 - r1 * Math.sin(45 * Math.PI / 180), r3);
        drawText(skill.bootstrap, s.width / 2 - r1 * Math.sin(45 * Math.PI / 180), s.height / 2 - r1 * Math.sin(45 * Math.PI / 180));
        //绘制内层圆形
        //东
        circle(s.width / 2 + r2, s.height / 2, r3);
        drawText(skill.php, s.width / 2 + r2, s.height / 2, r4);
        //南
        circle(s.width / 2, s.height / 2 + r2, r3);
        drawText(skill.html5, s.width / 2, s.height / 2 + r2, r4);
        //西
        circle(s.width / 2 - r2, s.height / 2, r3);
        drawText(skill.css3, s.width / 2 - r2, s.height / 2, r4);
        //北
        circle(s.width / 2, s.height / 2 - r2, r3);
        drawText(skill.echarts, s.width / 2, s.height / 2 - r2, r4);
    }

    draw();

    //绘制背景
    function rect() {
        ctx.fillStyle = '#4d5e8f';
        ctx.fillRect(0, 0, s.width, s.height);
        var img = new Image();
        img.src = 'img/bg.png';
        img.onload = function () {
            ctx.drawImage(img, 0, 0, s.width, s.height);
        }
    }

    //绘制轨迹
    function track(x, y, r) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.strokeStyle = '#ddd';
        ctx.stroke();
    }

    //绘制圆形,颜色随机
    function circle(x, y, r) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fillStyle = rc();
        ctx.fill();
    }

    //绘制文字函数
    function drawText(text, x, y) {
        ctx.fillStyle = 'white';
        ctx.fontSize = '1.2em';
        ctx.textBaseline = 'center';
        var size = ctx.measureText(text);
        ctx.fillText(text, x - size.width / 2, y);
    }

    //随机颜色函数
    function rc() {
        var r = Math.floor(Math.random() * 200);
        var g = Math.floor(Math.random() * 200);
        var b = Math.floor(Math.random() * 200);
        return `rgb(${r},${g},${b})`;
    }
})(jQuery);