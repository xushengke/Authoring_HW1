(function() {
  var theImages = document.querySelectorAll('.image-holder'),
      theHeading = document.querySelector('.heading'),
      theSubhead = document.querySelector('.main-copy h2'),
      theSeasonText = document.querySelector('.main-copy p'),
      appliedClass;

  function changeElements() {
    //make sure event handling is working
    //debugger;
    let objectIndex = dynamicContent[this.id];//grab the object htat correspons to the Id of the element clicked on
    let subImages = document.querySelector('.subImagesContainer');

    //remove all subImages
    while(subImages.firstChild) {
      subImages.removeChild(subImages.firstChild);
    }


    //add some images at the bottom of the page
    objectIndex.images.forEach(function(image, index) {
      //create a new image element
      let newSubImg = document.createElement('img');
      //add a css calss to it
      newSubImg.classList.add('thumb');
      //add a source
      newSubImg.src = "images/" + objectIndex.images[index];
      //add it to the page

      //add some data to the thumbnail
      newSubImg.dataset.index = index;

      //add some event handling
      newSubImg.addEventListener('click', function() {popLightbox(index, objectIndex); }, false);

      subImages.appendChild(newSubImg);
    });




    //remove the last css class aoolied
    theSubhead.classList.remove(appliedClass);
    theHeading.classList.remove(appliedClass);

    //add css class
    theSubhead.classList.add(this.id);
    theHeading.classList.add(this.id);

    //change the content on the page
    //firstchild.nodeValue  is the same as innerHTML (kind of)
    theSubhead.firstChild.nodeValue = objectIndex.headline;
    theSeasonText.firstChild.nodeValue = objectIndex.text;

    appliedClass = this.id;
  }

  theImages.forEach(function(element, index) {
    // loop through the images and add event handling to each one
    element.addEventListener('click', changeElements, false);
  });

  //theSubhead.firstChild.nodeValue = dynamicContent['spring'].headline;
  //this is a good thing
//  theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
  //theHeading.classList.add('spring');

  function popLightbox(currentIndex, currentObject) {
    debugger;
    //quick scroll fix to make the lightbox cover everything
    window.scrollTo(0, 0);

    let lightbox = document.querySelector('.lightbox');
    let lightboxImg = lightbox.querySelector('img');
    let lightboxDesc = lightbox.querySelector('p');
    let lightboxclose = lightbox.querySelector('.close-lightbox');

    //put the data in the lightbox elements
    lightboxImg.src = "images/" + currentObject.images[currentIndex];
    lightboxDesc.innerHTML = currentObject.imageDescription[currentIndex];

    lightbox.style.display = "block";
    document.body.style.overflow = 'hidden';


    //wire up the close button
    lightboxclose.addEventListener('click', closeLightbox, false);
  }


    function closeLightbox(currentIndex, currentObject) {
      debugger;
      //reset and close the lightbox - empty the contents, reset the image src and
      //the description text to nothing
      let lightbox = document.querySelector('.lightbox');
      let lightboxImg = lightbox.querySelector('img');
      let lightboxDesc = lightbox.querySelector('p');
      lightbox.style.display = "none";
      lightboxImg.removeAttribute('src');
      lightboxDesc.innerHTML = "";
      document.body.style.overflow = "";

    }


  changeElements.call(document.querySelector('#spring'));
  //this is the change









})();
