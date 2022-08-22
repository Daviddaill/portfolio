let project1= document.getElementById("project1");
let project1Picture= document.getElementById("project1-picture");

let project2= document.getElementById("project2");
let project2Picture= document.getElementById("project2-picture");

let project3= document.getElementById("project3");
let project3Picture= document.getElementById("project3-picture");

let projects= document.getElementsByClassName('projects');

let p1= document.getElementById("p1");
let p2= document.getElementById("p2");
let p3= document.getElementById("p3");
let p4= document.getElementById("p4");


/*let openproject1=()=>{
    project2Picture.style.display='';
    project3Picture.style.display='';
    p2.style.display='';
    p3.style.display='';
    //p4.style.display='';
    if( project1Picture.style.display==='block'){
        project1Picture.style.display='none'
        p1.style.display='block';
    } else{
        project1Picture.style.display='block';
        p1.style.display='none';
       }
};
*/
let openproject1=()=>{
    project2Picture.style.display='';
    project3Picture.style.display='';
    p2.style.display='';
    p3.style.display='';
    //p4.style.display='';
  
        project1Picture.style.display='block';
        p1.style.display='none';
       
};

let openproject2=()=>{
    project1Picture.style.display='';
    project3Picture.style.display='';
    p1.style.display='';
    p3.style.display='';
    //p4.style.display='';
  
    project2Picture.style.display='block';
    p2.style.display='none';
       
};

let openproject3=()=>{
    project1Picture.style.display='';
    project2Picture.style.display='';
    p1.style.display='';
    p2.style.display='';
    //p4.style.display='';
  
        project3Picture.style.display='block';
        p3.style.display='none';
       
};

let closeproject1=()=>{
    project2Picture.style.display='';
    project3Picture.style.display='';
    p2.style.display='';
    p3.style.display='';
    //p4.style.display='';
  
        project1Picture.style.display='none';
        p1.style.display='block';
       
};
let closeproject2=()=>{
    project1Picture.style.display='';
    project3Picture.style.display='';
    p1.style.display='';
    p3.style.display='';
    //p4.style.display='';
  
        project2Picture.style.display='none';
        p2.style.display='block';
       
};
let closeproject3=()=>{
    project1Picture.style.display='';
    project2Picture.style.display='';
    p1.style.display='';
    p2.style.display='';
    //p4.style.display='';
  
        project3Picture.style.display='none';
        p3.style.display='block';
       
};



project1.addEventListener('mouseover', openproject1);
project1.addEventListener('mouseout', closeproject1);

project2.addEventListener('mouseover', openproject2);
project2.addEventListener('mouseout', closeproject2);

project3.addEventListener('mouseover', openproject3);
project3.addEventListener('mouseout', closeproject3);

/*let openproject2=()=>{
    if(project2Picture.style.display==='block'){
        p2.style.display='block';
        project2Picture.style.display='none'}
    else{
        project2Picture.style.display='block';
        p2.style.display='none';
    }
    project3Picture.style.display='none';
    project1Picture.style.display='none';
    p1.style.display='';
    p3.style.display='';
    //p4.style.display='';

};

project2.addEventListener('click', openproject2);

let openproject3=()=>{
    project2Picture.style.display='none';
    project1Picture.style.display='none';
    if(project3Picture.style.display==='block'){
     project3Picture.style.display='none'
     p3.style.display='block';}
     else{
        project3Picture.style.display='block';
        p3.style.display='none';
    
     }
    p1.style.display='';
    p2.style.display='';
    //p4.style.display='';

};

project3.addEventListener('click', openproject3);
*/

