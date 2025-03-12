document.addEventListener('DOMContentLoaded', function() {
    // 元素选择
    var earthy = document.getElementById('earthy');
    var earthworms = document.getElementById('earthworms');
    var seed = document.getElementById('seed');
    var flower = document.getElementById('flower');
    var nectar = document.getElementById('nectar');
    var greenfly = document.getElementById('greenfly');
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
    var boxes = document.querySelectorAll('.box.collectible');
    var feedsBox = document.querySelector('.box.feeds');
    
    var earthwormsShown = false;
    var seedShown = false;
    var berryShown = false;
    var nectarShown = false;
    var greenflyShown = false;
    var mammalShown = false;
    var smallbirdsShown = false;
    var frogShown = false;
    var fishShown = false;
    var aquaticPlantShown = false;
    var berryCollected = false;
    var collectedFeeds = 0;

    // 土壤点击事件
    earthy.addEventListener('click', function() {
        toggleItem(earthworms, 'show-earthworms', earthwormsShown);
        earthwormsShown = !earthwormsShown; // 更新显示状态
        toggleItem(seed, 'show-seed', seedShown);
        seedShown = !seedShown; // 更新显示状态
    });

    // 土壤虫点击事件
    earthworms.addEventListener('click', function() {
        moveItemToBox(earthworms, '.earthworms');
    });

    // 种子点击事件
    seed.addEventListener('click', function() {
        moveItemToBox(seed, '.seed');
    });

    // flower点击事件
    flower.addEventListener('click', function() {
        toggleItem(nectar, 'show-nectar', nectarShown);
        nectarShown = !nectarShown; // 更新显示状态
        toggleItem(greenfly, 'show-greenfly', greenflyShown);
        greenflyShown = !greenflyShown; // 更新显示状态
    });

    // nectar点击事件
    nectar.addEventListener('click', function() {
        moveItemToBox(nectar, '.nectar');
    });

    // greenfly点击事件
    greenfly.addEventListener('click', function() {
        moveItemToBox(greenfly, '.greenfly');
    });

    // grass2点击事件
    grass2.addEventListener('click', function() {
        toggleItem(mammal, 'show-mammal', mammalShown);
        mammalShown = !mammalShown; // 更新显示状态
    });

    // mammal点击事件
    mammal.addEventListener('click', function() {
        console.log('mammal clicked');
        moveItemToBox(mammal, '.mammal');
    });

    // cloud_cloud2 click event
    if (cloud_cloud2) {
        cloud_cloud2.addEventListener('click', function() {
            toggleItem(smallbirds, 'show-smallbirds', smallbirdsShown);
            smallbirdsShown = !smallbirdsShown; // Update display status
            });
        } else {
            console.error('Element cloud_cloud2 not found');
        }

        // smallbirds click event
        if (smallbirds) {
            smallbirds.addEventListener('click', function() {
                console.log('smallbirds clicked');
                moveItemToBox(smallbirds, '.smallbirds');
                smallbirdsShown = false; // Update display status
                });
            } else {
                console.error('Element smallbirds not found');
            }

            if (pond) {
                pond.addEventListener('click', function() {
                    console.log('Pond clicked');
                    // Toggle frog visibility
                    toggleItem(frog, 'show-frog', frogShown);
                    frogShown = !frogShown;
            
                    // Toggle fish visibility
                    toggleItem(fish, 'show-fish', fishShown);
                    fishShown = !fishShown;
            
                    // Toggle aquatic plant visibility
                    toggleItem(aquaticPlant, 'show-aquaticPlant', aquaticPlantShown);
                    aquaticPlantShown = !aquaticPlantShown;
                });
            } else {
                console.error('Element pond not found');
            }
        
        // frog click event
        if (frog) {
            frog.addEventListener('click', function() {
                console.log('frog clicked');
                moveItemToBox(frog, '.frog');
                frogShown = false; // Update display status
                });
            } else {
                console.error('Element frog not found');
            }

            // fish click event
        if (fish) {
            fish.addEventListener('click', function() {
                console.log('fish clicked');
                moveItemToBox(fish, '.fish');
                fishShown = false; // Update display status
                });
            } else {
                console.error('Element frog not found');
            }

               // aquaticPlant click event
        if (aquaticPlant) {
            aquaticPlant.addEventListener('click', function() {
                console.log('aquaticPlant clicked');
                moveItemToBox(aquaticPlant, '.aquaticPlant');
                aquaticPlantShown = false; // Update display status
                });
            } else {
                console.error('Element frog not found');
            }

    // 树点击事件
    trees1.addEventListener('click', function() {
        if (!berryShown) {
            berry.classList.remove('hidden');
            berry.classList.add('show-berry');
            berryShown = true;
        }
    });

    // 树莓点击事件
    berry.addEventListener('click', function() {
        if (berryShown) {
            moveItemToBox(berry, '.berry');
            berryShown = false;     // 更新显示状态
            berryCollected = true;  // 设置为已收集
            // 将 berry 从场景中移除
            berry.parentNode.removeChild(berry);
        }
    });
    
    // 收集项目并移动到箱子
    function collectItem(item, className) {
        if (collectedFeeds < boxes.length) {
            var targetBox = boxes[collectedFeeds];
            var clone = item.cloneNode(true);
            clone.removeAttribute('id');
            // clone.style.width = ''; // CSS 控制
            // clone.style.height = '';
            clone.style.position = 'static';
            clone.style.margin = '0';
            clone.classList.remove(className.substring(1)); // 移除类名
            clone.onclick = null; // 移除点击事件

            targetBox.appendChild(clone);
            item.style.display = 'none';
            feedsBox.textContent = 'Feeds ' + (++collectedFeeds) + '/10';
        }
    }

    // 切换项目显示状态
    function toggleItem(item, className, shown) {
        if (!shown) {
            item.classList.remove('hidden');
            item.classList.add(className);
            shown = true;
        } else {
            item.classList.remove(className);
            item.classList.add('hidden');
        }
        checkAllItemsShown(); // 在每次切换状态后检查
    }

    // 检查是否所有内容都已显示，停止晃动动画
    function checkAllItemsShown() {
        if (earthwormsShown && seedShown) {
            // 当所有内容都显示后，停止晃动
            earthy.style.animation = 'none'; // 停止晃动动画
        }
    }

    // 将项目移动到箱子
    function moveItemToBox(item, className) {
        if (collectedFeeds < boxes.length) {
            var targetBox = boxes[collectedFeeds];
            var clone = item.cloneNode(true);
            clone.removeAttribute('id');
            clone.style.width = ''; // CSS 控制
            clone.style.height = '';
            clone.style.position = 'static';
            clone.style.margin = '0';
            clone.classList.remove(className.substring(1)); // 移除类名
            clone.onclick = null; // 移除点击事件

            targetBox.appendChild(clone);
            item.style.display = 'none';
            feedsBox.textContent = 'Feeds: ' + (++collectedFeeds) + '/10';
            // shown = false;
        }
    }
});

// 绑定事件
bindClickEvent(elements.earthy, function() {
    toggleItem('earthworms', 'show-earthworms');
    toggleItem('seed', 'show-seed');
});

bindClickEvent(elements.earthworms, function() {
    moveItemToBox('earthworms', '.earthworms');
});

bindClickEvent(elements.seed, function() {
    moveItemToBox('seed', '.seed');
});

bindClickEvent(elements.flower, function() {
    toggleItem('nectar', 'show-nectar');
    toggleItem('greenfly', 'show-greenfly');
});

bindClickEvent(elements.nectar, function() {
    moveItemToBox('nectar', '.nectar');
});

bindClickEvent(elements.greenfly, function() {
    moveItemToBox('greenfly', '.greenfly');
});

bindClickEvent(elements.grass2, function() {
    toggleItem('mammal', 'show-mammal');
});

bindClickEvent(elements.mammal, function() {
    moveItemToBox('mammal', '.mammal');
});

bindClickEvent(elements.cloud_cloud2, function() {
    toggleItem('smallbirds', 'show-smallbirds');
});

bindClickEvent(elements.smallbirds, function() {
    moveItemToBox('smallbirds', '.smallbirds');
});

bindClickEvent(elements.pond, function() {
    toggleItem('frog', 'show-frog');
    toggleItem('fish', 'show-fish');
    toggleItem('aquaticPlant', 'show-aquaticPlant');
});

bindClickEvent(elements.frog, function() {
    moveItemToBox('frog', '.frog');
});

bindClickEvent(elements.fish, function() {
    moveItemToBox('fish', '.fish');
});

bindClickEvent(elements.aquaticPlant, function() {
    moveItemToBox('aquaticPlant', '.aquaticPlant');
});

bindClickEvent(elements.trees1, function() {
    if (!itemStates.berry) {
        elements.berry.classList.remove('hidden');
        elements.berry.classList.add('show-berry');
        itemStates.berry = true;
    }
});

bindClickEvent(elements.berry, function() {
    if (itemStates.berry) {
        moveItemToBox('berry', '.berry');
        elements.berry.parentNode.removeChild(elements.berry);
        itemStates.berry = false;
    }
});
