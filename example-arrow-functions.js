var names = ['James', 'Olijah','Michael'];

names.forEach(function (name){
    console.log('forEach', name);
});

names.forEach((name) => {
    console.log('arrowFunc',name);
});

names.forEach((name) => console.log(name));