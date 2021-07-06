var library = [
{
author: 'Bill Gates',
title: 'The Road Ahead',
readingStatus: true
},
{
author: 'Steve Jobs',
title: 'Walter Isaacson',
readingStatus: true
},
{
author: 'Suzanne Collins',
title: 'Mockingjay: The Final Book of The Hunger Games',
readingStatus: false
}];
for (var i = 0; i < library.length; i++){
        if (library[i].readingStatus){
            console.log("You have already read \n Book name :"+library[i].title+"\n Author Name: "+library[i].author);
        } else {
            console.log("You still need to read \n Book name :"+library[i].title+"\n Author Name: "+library[i].author);
        }
    }

/*  OUTPUT

You have already read 
 Book name :The Road Ahead
 Author Name: Bill Gates
You have already read 
 Book name :Walter Isaacson
 Author Name: Steve Jobs
You still need to read 
 Book name :Mockingjay: The Final Book of The Hunger Games
 Author Name: Suzanne Collins

 */