const items = document.querySelectorAll('.img-item');

items.forEach((item, index) => {
    const keyframes = {
        filter: ['blur(20px)', 'blur(0)'],
        // opacity: [0, 1],
        // rotate: ['10deg', 0],
        // scale: [2, 1],
        // translate: ['0 100px', 0],
    };
    const options = {
        duration: 600,
        fill: 'forwards',
        delay: index * 300,
    };

    item.animate(keyframes, options);
});

//準備完了
console.log('-STANDBY-')