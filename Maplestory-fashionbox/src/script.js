//element
const buyBtn = document.getElementById("buyBtn"),
    goldboxBtn = document.getElementById("goldboxBtn"),
    openBtn = document.getElementById("openBtn"),
    openboxBtn = document.getElementById("openboxBtn"),
    blackchipBtn = document.getElementById("blackchipBtn"),
    resetBtn = document.getElementById("resetBtn"),
    drawallBtn = document.getElementById("drawallBtn"),
    /* --Props Label-- */
    applesText = document.getElementById("apples"),
    applechipsText = document.getElementById("appleChips"),
    blackchipsText = document.getElementById("blackChips"),
    goldboxText = document.getElementById("goldBox"),
    frenzytotemText = document.getElementById("FrenzyTotem"),
    gourdText = document.getElementById("gourd"),
    countText = document.getElementById("count"),
    boxcountText = document.getElementById("boxCount"),
    blackchips1Text = document.getElementById("blackchips1"),
    blackchips2Text = document.getElementById("blackchips2"),
    blackchips3Text = document.getElementById("blackchips3"),
    blackchips4Text = document.getElementById("blackchips4"),
    blackchips5Text = document.getElementById("blackchips5"),
    blackchips6Text = document.getElementById("blackchips6"),
    blackchips9Text = document.getElementById("blackchips9"),
    spendText = document.getElementById("spend"),
    /* --廣頻-- */
    prizeText = document.getElementById("prize");

//variable
let apples = 0,
    appleChips = 0,
    blackChips = 0,
    goldBox = 0,
    frenzyTotem = 0,
    gourd = 0,
    count = 0,
    boxCount = 0,
    textId = 0,//移除捲軸溢出標籤的id
    spend = 0,//蘋果購買花費
    /* --漆黑飾品數-- */
    blackchips1 = 0,
    blackchips2 = 0,
    blackchips3 = 0,
    blackchips4 = 0,
    blackchips5 = 0,
    blackchips6 = 0,
    blackchips9 = 0,
    tableData = {};


//載入後優先取得json
window.onload = () => {
    getJSON();
    alert("小技巧提醒：當點擊『開抽時尚隨機箱』按鈕後，可以長按Enter高速水溝。\n ＃另外補充了『重置』及『一鍵水溝』，請小心服用。");
}
//fetch取得本地json
let getJSON = () => {
    fetch("./public/data/prizeData.json").then((res) => {
        return res.json();
    }).then((data) => {
        tableData = data;
    }).catch((err) => {
        console.log("getJSON error");
    })
}

//使滾動條焦點在底部
function scrollBar(){
    prizeText.scrollTop = prizeText.scrollHeight;
    // console.log("prizeText.scrollHeight : "+prizeText.scrollHeight)
    // console.log("prizeText.scrollTop : "+prizeText.scrollTop)
}

buyBtn.addEventListener("click", () => {
    apples += 10;
    spend += 270;
    // console.log("買了 "+apples+" 個蘋果");
    applesText.innerHTML = apples;
    spendText.innerHTML = spend;
});
//重置
resetBtn.addEventListener("click", () => {
    prizeText.innerHTML = "";
    apples = 0;
    frenzyTotem = 0;
    count = 0;
    spend = 0;


    applesText.innerHTML = apples;
    frenzytotemText.innerHTML = frenzyTotem;
    countText.innerHTML = count;
    spendText.innerHTML = spend;
 

});

openBtn.addEventListener("click", () => {
    if(apples === 0){
        alert("時尚隨機箱數量不足，請確認數量是否足夠。");
    }else{
        prizeText.focus;
        prizeDraw(0);
        console.log("抽獎進行"+count+"次，剩"+apples);
        applesText.innerHTML = apples;
        frenzytotemText.innerHTML = frenzyTotem;
        countText.innerHTML = count;
        removeText();
        scrollBar();
    }
});

//抽蘋果開獎
function prizeDraw(dontshow){
    apples -= 1;
    count += 1;
    //100.00%
    let probability = Math.random();
    let total = 0;
    for (let i = 0; i < tableData.apple.length; i++) {
        let prize = tableData.apple[i];
        if (probability >= total && probability <= total + prize.p) {
            // yes, it's in range!
            let showWithColor = 1;
            switch (prize.name) {
                case "蒼空的貝雷帽":
                    alert("恭喜從時尚隨機箱獲得【蒼空的貝雷帽】！ 第"+count+"抽");
                    frenzyTotem += 1;
                    break;
                case "蒼空的君主":
                    alert("恭喜從時尚隨機箱獲得【蒼空的君主】！ 第"+count+"抽");
                    frenzyTotem += 1;
                    break;
                case "蒼空的領主":
                    alert("恭喜從時尚隨機箱獲得【蒼空的領主】！ 第"+count+"抽");
                    frenzyTotem += 1;
                    break;
                case "蒼空之靴":
                    alert("恭喜從時尚隨機箱獲得【蒼空之靴】！ 第"+count+"抽");
                    frenzyTotem += 1;
                    break;
                case "蒼空之光":
                    alert("恭喜從時尚隨機箱獲得【蒼空之光】！ 第"+count+"抽");
                    frenzyTotem += 1;
                    break;
                case "蒼空羽毛筆":
                    alert("恭喜從時尚隨機箱獲得【蒼空羽毛筆】！ 第"+count+"抽");
                    frenzyTotem += 1;
                    break;
                case "天空之城天使翅膀":
                    alert("恭喜從時尚隨機箱獲得【天空之城天使翅膀】！ 第"+count+"抽");
                    frenzyTotem += 1;
                    break;
                case "天空之城的遨遊":
                    alert("恭喜從時尚隨機箱獲得【天空之城的遨遊】！ 第"+count+"抽");
                    frenzyTotem += 1;
                    break;
                case "天空之城的翱翔":
                    alert("恭喜從時尚隨機箱獲得【天空之城的翱翔】！ 第"+count+"抽");
                    frenzyTotem += 1;
                    break;
                case "天空之城的悸動":
                    alert("恭喜從時尚隨機箱獲得【天空之城的悸動】！ 第"+count+"抽");
                    frenzyTotem += 1;
                    break;
                case "天空之城的自由":
                    alert("恭喜從時尚隨機箱獲得【天空之城的自由】！ 第"+count+"抽");
                    frenzyTotem += 1;
                    break;    
                case "天空之城邱比特":
                    alert("恭喜從時尚隨機箱獲得【天空之城邱比特】！ 第"+count+"抽");
                    frenzyTotem += 1;
                    break;
                case "天空之城天使鞋":
                    alert("恭喜從時尚隨機箱獲得【天空之城天使鞋】！ 第"+count+"抽");
                    frenzyTotem += 1;
                    break;
                case "天空之城天使高跟鞋":
                    alert("恭喜從時尚隨機箱獲得【天空之城天使高跟鞋】！ 第"+count+"抽");
                    frenzyTotem += 1;
                    break;
                case "純真的邪惡翅膀":
                    alert("恭喜從時尚隨機箱獲得【純真的邪惡翅膀】！ 第"+count+"抽");
                    frenzyTotem += 1;
                    break;
                case "邪惡的天使翅膀":
                    alert("恭喜從時尚隨機箱獲得【邪惡的天使翅膀】！ 第"+count+"抽");
                    frenzyTotem += 1;
                    break;
                case "白色SF科幻劍":
                    alert("恭喜從時尚隨機箱獲得【白色SF科幻劍】！ 第"+count+"抽");
                    frenzyTotem += 1;
                    break;
                case "迷宮支配者科幻劍":
                    alert("恭喜從時尚隨機箱獲得【迷宮支配者科幻劍】！ 第"+count+"抽");
                    frenzyTotem += 1;
                    break;
                case "夢境操控者科幻劍劍":
                    alert("恭喜從時尚隨機箱獲得【夢境操控者科幻劍劍】！ 第"+count+"抽");
                    frenzyTotem += 1;
                    showWithColor = 0;
                    break;
                    
                default:
                    showWithColor = 0;
                    break;
            }
            if(dontshow == 0) {
                if(showWithColor) {
                    prizeText.innerHTML += `<h6 class="appleBigprizeText" id="Id${textId+=1}">恭喜"你"從時尚隨機箱機獲得<span class="textPrize">${prize.name}</span>。</h6>`;
                } else {
                    prizeText.innerHTML += `<h6 class="appleText" id="Id${textId+=1}">已獲得<span class="textPrize">${prize.name}</span>道具 1 個。</h6>`;
                }
            }
            break;
        } else {
            // not in range, going to next loop
            total = total + prize.p;
        }
        
    }
        removeText();
        scrollBar();
}

//一鍵抽
drawallBtn.addEventListener("click", () => {
    let maxShowLines = 100;
    if(apples === 0){
        alert("時尚隨機箱數量不足，請確認數量是否足夠。");
    }else{
        alert("抽取較大的量需要時間計算，請稍等一下『廣頻』及『道具欄』更新。");
        let k = apples;
        for (let j=0; j<k; j++){
            if(k - j <= maxShowLines) {
                prizeDraw(0);
            } else {
                prizeDraw(1);				
            }
            removeText();
        }
        applesText.innerHTML = apples;
        applechipsText.innerHTML = appleChips;
        blackchipsText.innerHTML = blackChips;
        gourdText.innerHTML = gourd;
        frenzytotemText.innerHTML = frenzyTotem;
        countText.innerHTML = count;
        scrollBar();
    }
});


//捲軸範圍超過scrollHeight時移除溢出的標籤
function removeText(){
    if(prizeText.scrollHeight > 1921){
        let removeId = textId-100
        document.getElementById("Id"+removeId).remove();
    }
}
