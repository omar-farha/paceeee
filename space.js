var image = [
  "url(../Images/space-8381874_1280.jpg)",
  "url(../Images/pikaso_texttoimage_Candid-image-photography-natural-textures-highly-r.jpeg)",
  "url(../Images/wallpaperflare.com_wallpaper.jpg)",
  "url(../Images/vecteezy_view-from-space-from-above-on-a-hurricane-tornado-swirl.jpg)",
  "url(../Images/turtle-underwater-coral-nature-animal-4k-wallpaper-uhdpaper.com-937@0@i.jpg)",
];
var i = 0;

document.getElementById("mybtn").addEventListener("click", function () {
  if (image.length - 2) {
    i = ++i;
  } else {
    i = 0;
  }
  document.body.style.backgroundImage = image[I];
});
