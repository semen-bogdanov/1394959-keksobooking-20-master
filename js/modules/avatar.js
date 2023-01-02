 const FILE_TYPES = [`gif`, `jpg`, `jpeg`, `png`];
 const avatar = document.querySelectorAll(`.foto__avatar`); // фотография для аватарки
 const fotoRooms = document.querySelectorAll(`.foto__avatar2`); // фотография комнаты

 let Img_loading = {
     fileChooser: document.querySelectorAll(`.upload input[type=file]`),
     sayHi: function (argument3) {
         this.fileChooser.forEach((element, item, arr) => {
             element.addEventListener(`change`, function () {
                 let file = element.files[0];
                 let fileName = file.name.toLowerCase();
                 let matches = FILE_TYPES.some(function (it) {
                     return fileName.endsWith(it);
                 });
                 if (matches) {
                     let reader = new FileReader();
                     reader.addEventListener(`load`, function () {
                         argument3[item].src = reader.result;
                         console.log(argument3[item])
                     });
                     reader.readAsDataURL(file);
                 }
             });
         });
     }
 };

 let Img_loading2 = {
     fileChooser: document.querySelectorAll(`.upload2 input[type=file]`),
     sayHi2: function (argument2) {
         this.fileChooser.forEach((element, item, arr) => {
             element.addEventListener(`change`, function () {
                 let file = element.files[0];
                 let fileName = file.name.toLowerCase();
                 let matches = FILE_TYPES.some(function (it) {
                     return fileName.endsWith(it);
                 });
                 if (matches) {
                     let reader = new FileReader();
                     reader.addEventListener(`load`, function () {
                         argument2[item].src = reader.result;
                         console.log(argument2[item])
                     });
                     reader.readAsDataURL(file);
                 }
             });
         });
     }
 };


 Img_loading.sayHi(avatar);
 Img_loading2.sayHi2(fotoRooms);