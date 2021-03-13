Papa.parse("./作品列表.csv", {
    header: true,
    download: true,
    complete: function (result) {
        for (let i = 0; i < result.data.length; i++) {
            let year = `${result.data[i]["年代"]}`
            let work = `${result.data[i]["作品"]}`
            let author = `${result.data[i]["作者"]}`

            let node = document.createElement("div")
            nodeId = `${year}-${work}-${author}`
            node.id = nodeId
            node.className = `item ${(i+1).toString().padStart(2, '0')}`
            // 除了.item之外，依照順序給予純數字編號的class
            document.querySelector(".container").appendChild(node)
            // 建立一個包作品、年代、作者的<div>，並把此<div>加到<div class="container">中

            let aWork = document.createElement("a")
            // 建立作品<a>
            aWorkId = `${year}-${work}-${author}-${work}`
            aWork.id = aWorkId
            aWork.setAttribute("href", `https://www.google.com/search?q=${work}+${author}`);
            aWork.setAttribute("target", "_blank");
            // 處理長書名
            if (work.length > 4) {
                aWork.setAttribute("class", "long-title");
            }
            
            // 設定href與target
            document.getElementById(nodeId).appendChild(aWork)
            // 先把作品<a>加到<div>node裡面，才能新增<a>的內容
            // 並且對超過6個字的書名做換行處理
            if (work.length >= 6) {
                let workArray = work.split("")
                workArray.splice(4, 0, "<br>")
                work = workArray.join("")
                document.getElementById(aWorkId).innerHTML = work
            } else {
                document.getElementById(aWorkId).innerText = work
            }

            let spanYear = document.createElement("span")
            // 建立年代<span>
            spanYearId = `${year}-${work}-${author}-${year}`
            spanYear.id = spanYearId
            document.getElementById(nodeId).appendChild(spanYear)
            // 先把年代<span>加到<div>node裡面，才能新增<span>的內容
            document.getElementById(spanYearId).innerText = `西元${year}年`

            let spanAuthor = document.createElement("span")
            // 建立作者<span>
            spanAuthorId = `${year}-${work}-${author}-${author}`
            spanAuthor.id = spanAuthorId
            document.getElementById(nodeId).appendChild(spanAuthor)
            // 先把作者<span>加到<div>node裡面，才能新增<span>的內容
            document.getElementById(spanAuthorId).innerText = author
        }
    }
})