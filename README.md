# Taiwan National Treasure Landing Page

Mock up
![alt text](image.png "Landing Page static")

## Requirement
- [Download](https://nodejs.org/dist/v6.9.2/) node.js 6.9.2

## To set up and contribute
- `git clone` this repo
- `npm install`
- `npm run dev`
- open up browser `localhost:8080`

Please help this page go up ASAP :)

## Resources
- [MUICSS](https://www.muicss.com/)
- [ReactJS](https://facebook.github.io/react/)

## API 

你可以使用國家寶藏的 API 下載檔案。你可以下載圖片、OCR 轉錄後或者翻譯後的文字、文件的 metadata。

 https://api.nationaltreasure.tw/v1/upload 會回傳檔案的目錄

目前有兩個 query parameter，`tag` 和 `uid`
- `tag`: https://api.nationaltreasure.tw/v1/upload?tag=primaryTag 會回傳該標籤的檔案目錄。
- `uid`:
    https://api.nationaltreasure.tw/v1/upload?uid=userId 會回傳一個檔案的細節，包括 OCR 過後、Google 翻譯後的文字。文字可能是英文跟中文。


## API 解說

這個 API 使用筆記可以配合[這個影片]()使用。主要適合的讀者為第一次或者不常用 API 的人。

因為這個 API 會回應 JSON 格式的檔案，我們推薦使用 [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa/related?hl=en) 或是其他類似 extension 讓回應的形式更好讀。


### 第一步：檔案目錄

你可以使用你電腦的瀏覽器到這個網址 https://api.nationaltreasure.tw/v1/upload

第一層會有 Items，每個 item 代表著一個文件圖案檔。 metadata 裡包含了原本檔案在圖書館或是檔案局的流水號。 resizedUrls 則有不同解析度的圖片。 userId 則是國家寶藏自己的檔案編號。

另外，你會發現所有的 primaryTag 都是中美斷交。這是因為我們預設的標籤就是中美斷交。


### 第二步：換類型（Tag）

如果你想瀏覽預設標籤以外的文字檔案，你要更換 tag。你可以在網址最後，加上用 `tag？=` 的 query parameter 來更換標籤。

舉例來說，你可以把網址改成  https://api.nationaltreasure.tw/v1/upload?tag=一般通訊系列 就可以看另一個標籤的檔案目錄了。

### 第三步：每個文件更詳細的內容

如果你想更進一步知道檔案 OCR 轉錄的文字，就需要用檔案的 userId 。比如說，我們從一般通訊系列裡面可以看到一個檔案的 userId 是
`d8f7d740-8828-11e7-868c-b52ec608c9f6`。所有的國家寶藏檔案都有這種類型的獨特檔案編號。

我們可以用 `uid?=` 來獲取檔案細部的資料，比如說
https://api.nationaltreasure.tw/v1/upload?uid=d8f7d740-8828-11e7-868c-b52ec608c9f6。

我們可以看到 Item 階層下，有 ocr, translate 兩個地方包含了英文原文 OCR 後的文字以及翻譯後的中文。
