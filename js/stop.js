document.addEventListener('DOMContentLoaded', function() {
    // 元素选择
    var earthy = document.getElementById('earthy');
    var earthworms = document.getElementById('earthworms');
    var seed = document.getElementById('seed');
    var flower = document.getElementById('flower');
    var greenfly = document.getElementById('greenfly');
    var nectar = document.getElementById('nectar');
    var grass2 = document.getElementById('grass2');
    var mammal = document.getElementById('mammal');
    var cloud_cloud2 = document.getElementById('cloud_cloud2');
    var smallbirds = document.getElementById('smallbirds');
    var trees1 = document.getElementById('trees1');
    var berry = document.getElementById('berry');
    var pond = document.querySelector('.pond');
    var frog = document.getElementById('frog');
    var fish = document.querySelector('.fish');
    var aquaticPlant = document.querySelector('.aquatic_plant');
    
    // 初始状态变量
    var earthwormsShown = false;
    var seedShown = false;
    var greenflyShown = false;
    var nectarShown = false;
    var mammalShown = false;
    var smallbirdsShown = false;
    var berryShown = false;
    var frogShown = false;
    var fishShown = false;
    var aquaticPlantShown = false;

    // 页面加载时为 Earthy、Flower 添加晃动动画
    earthy.classList.add('shake');
    flower.classList.add('shake');
    grass2.classList.add('shake');
    cloud_cloud2.classList.add('shake');
    trees1.classList.add('shake');
    pond.classList.add('shake');

    // 土壤点击事件，显示 earthworms 和 seed
    earthy.addEventListener('click', function() {
        toggleItem(earthworms, 'show-earthworms', earthwormsShown);
        earthwormsShown = !earthwormsShown; // 更新状态
        toggleItem(seed, 'show-seed', seedShown);
        seedShown = !seedShown; // 更新状态

        checkEarthyItemsShown(); // 检查 Earthy 的内容是否都显示
    });

    // 花朵点击事件，显示 nectar
    flower.addEventListener('click', function() {
        toggleItem(greenfly, 'show-greenfly', greenflyShown);
        greenflyShown = !greenflyShown; // 更新状态
        toggleItem(nectar, 'show-nectar', nectarShown);
        nectarShown = !nectarShown; // 更新状态

        checkFlowerItemsShown(); // 检查 Flower 的内容是否都显示
    });

    // grass2点击事件
    grass2.addEventListener('click', function() {
        toggleItem(mammal, 'show-mammal', mammalShown);
        mammalShown = !mammalShown; // 更新状态

        checkGrass2ItemsShown(); 
    });

    // cloud_cloud2点击事件
    cloud_cloud2.addEventListener('click', function() {
        toggleItem(smallbirds, 'show-smallbirds', smallbirdsShown);
        smallbirdsShown = !smallbirdsShown; // 更新状态

        checkCloud_cloud2ItemsShown(); 
    });

    // trees1点击事件
    trees1.addEventListener('click', function() {
        toggleItem(berry, 'show-berry', berryShown);
        berryShown = !berryShown; // 更新状态

        checkTrees1ItemsShown(); 
    });

    // pond点击事件
    pond.addEventListener('click', function() {
        toggleItem(frog, 'show-frog', frogShown);
        frogShown = !frogShown; // 更新状态
        toggleItem(fish, 'show-fish', fishShown);
        fishShown = !fishShown; // 更新状态
        toggleItem(aquaticPlant, 'show-aquaticPlant', aquaticPlantShown);
        aquaticPlantShown = !aquaticPlantShown; // 更新状态

        checkPondItemsShown(); 
    });

    // 切换项目显示状态
    function toggleItem(item, className, shown) {
        if (!shown) {
            item.classList.remove('hidden');
            item.classList.add(className);
        } else {
            item.classList.remove(className);
            item.classList.add('hidden');
        }
    }

    // 检查 Earthy 的内容是否都已显示，停止 Earthy 的晃动动画
    function checkEarthyItemsShown() {
        if (earthwormsShown && seedShown) { // 只检查 Earthy 相关内容
            earthy.classList.remove('shake'); // 停止 Earthy 的晃动
        }
    }

    // 检查 Flower 的内容是否都已显示，停止 Flower 的晃动动画
    function checkFlowerItemsShown() {
        if (nectarShown && greenfly) { // 只检查 Flower 相关内容
            flower.classList.remove('shake'); // 停止 Flower 的晃动
        }
    }

    // 检查 grass2 的内容是否都已显示
    function checkGrass2ItemsShown() {
        if (mammal) { 
            grass2.classList.remove('shake'); 
        }
    }

    // 检查 grass2 的内容是否都已显示
    function checkCloud_cloud2ItemsShown() {
        if (smallbirds) { 
            cloud_cloud2.classList.remove('shake'); 
        }
    }

    // 检查 trees1 的内容是否都已显示
    function checkTrees1ItemsShown() {
        if (berry) { 
            trees1.classList.remove('shake'); 
        }
    }

    // 检查 pond 的内容是否都已显示
    function checkPondItemsShown() {
        if (frog && fish && aquaticPlant) { 
            pond.classList.remove('shake'); 
        }
    }

});
