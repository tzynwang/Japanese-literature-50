Papa.parse("./作品列表.csv", {
    header: true,
    download: true,
    complete: function (result) {
        for (let i = 0; i < result.data.length; i++) {
            let year = `${result.data[i]["年代"]}`
            let work = `${result.data[i]["作品"]}`
            let author = `${result.data[i]["作者"]}`

            let aWork = document.createElement("a")
            // 建立作品<a>
            aWorkId = `${work}`
            aWork.id = aWorkId
            aWork.setAttribute("href", `https://www.google.com/search?q=${work}+${author}`);
            aWork.setAttribute("target", "_blank");
            // 處理長書名
            if (work.length > 4) {
                aWork.setAttribute("class", "long-title");
            }
            
            // 設定href與target
            document.getElementsByClassName(`item c-${(i+1)}`)[0].appendChild(aWork)
            // 先把作品<a>加到<div>node裡面，才能新增<a>的內容
            // getElementsByClassName回傳的是array，故要加上[0]來取第一個元件
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
            spanYearId = `${year}-${work}`
            spanYear.id = spanYearId
            document.getElementsByClassName(`item c-${(i + 1)}`)[0].appendChild(spanYear)
            // 先把年代<span>加到<div>node裡面，才能新增<span>的內容
            document.getElementById(spanYearId).innerText = `西元${year}年`

            let spanAuthor = document.createElement("span")
            // 建立作者<span>
            spanAuthorId = `${work}-${author}`
            spanAuthor.id = spanAuthorId
            document.getElementsByClassName(`item c-${(i + 1)}`)[0].appendChild(spanAuthor)
            // 先把作者<span>加到<div>node裡面，才能新增<span>的內容
            document.getElementById(spanAuthorId).innerText = author
        }
    }
})