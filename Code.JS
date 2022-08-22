`use strict`
// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Your Code Here.
//const baseUrl= "https://flickr.com/services/rest/"
//const ProxyURL = "https://shrouded-mountain-15003.herokuapp.com/"
//const callBack= (position)=> {
//const params = new URLSearchParams({
//api_key
//y })
///}

const API_KEY = `ec39718acc1eff35cd6310eed3cd7c0f`
let Lat = 38.10832
let Lon = -121.58933
let nextButton = document.querySelector("button")
let container = document.getElementById("container")
let index = 0
let imgArray = []
let img = document.querySelector("img")
img.innerHTML = id = "img "
navigator.geolocation.getCurrentPosition(function (position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    fetch(`https://shrouded-mountain-15003.herokuapp.com/https://flickr.com/services/rest/?api_key=${API_KEY}&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=${latitude}&lon=${longitude}&text=cars`)
        .then((response) => response.json())
        .then((data) => {
            imgArray = data.photos.photo
            let imgUrl = constructImageUrl(imgArray[index])
            console.log(imgUrl)
            img.src=imgUrl
            document.body.append(img)
            console.log(img.src)
            console.log(imgArray)
            //nextButton.addEventListener("click",() => nextPicture(imgArray))
            nextButton.addEventListener("click",nextPicture)
        })
});


//nextButton.addEventListener("click", nextPicture)
let nextPicture = function () {
    if (index < imgArray.length - 1) {
    index += 1}
   else{index = 0}
    let imgUrl = constructImageUrl(imgArray[index])
    img.src = imgUrl
    }
//let nextPicture = function () {
    //console.log(imgArray)
  //  switch (index) {
    //    case 0:
      //     index ++
        //   imgUrl = constructImageUrl(imgArray[index])
          // img.src = imgUrl
            //document.body.append(img)
            //console.log(img)
            //index++ ;
//            break;
  //      case 1:
    //        index++
      //      imgUrl = constructImageUrl(imgArray[index])
        //    img.src = imgUrl
          //  document.body.append(img)
            //console.log(img);
//            console.log(index)
  //          break;
    //   case 2:
      //      index++
        //    img.src = constructImageUrl(imgArray[index])
          //  document.body.append(img)
            //console.log(img);
 //           break;
   //     case 3:
     //     index++
       //     img.src = constructImageUrl(imgArray[index])
         // document.body.append(img)
           // console.log(img);
//     break;
  //     case 4:
    //        index++
      //      img.src = constructImageUrl(imgArray[index])
        //    document.body.append(img)
      //console.log(img)
 //       index = 0;
   //         break;
     //   default:
       //   break;
  //}
  //  console.log(imgArray)
//}
function constructImageUrl(photoobj) {
    
  return (
        "https://farm" +
        photoobj.farm +
        ".staticflickr.com/" +
        photoobj.server +
        "/" +
        photoobj.id +
        "_" +
        photoobj.secret +
        ".jpg"
    )
  }
