let questions = [
                {
                    question:'¿Como se llama la hermana de Phoebe?',
                    a:'Ursula',
                    b:'Penelope',
                    c: 'Karen',
                    d:'Christy',
                    correct: 'c'
                },
                {
                    question:'¿Como se llaman la madre de Monica y Ross? ',
                    a:'Judy',
                    b:'Christine',
                    c:'Lenny',
                    d:'Susie',
                    correct:'a'
                },
                {
                    question:'¿Como se llama la cafeteria donde siempre se juntan los protagonistas?',
                    a:'',
                    b:'',
                    c:'',
                    d:'',
                    correct:''
                },
                {
                    question:'¿Como se llamaba el mono que tenia Ross?',
                    a:'Central Park',
                    b:'Central Perk',
                    c:'Luigi´s',
                    d:'Moe´s',
                    correct:'b'
                },
                {
                    question:'¿Con quien se estuvo a punto de casar Rachel en el primer capitulo?',
                    a:'Barry',
                    b:'Larry',
                    c:'George',
                    d:'Peter',
                    correct:'a'
                },
                {
                    question:'¿En que año (ej:1996) se estreno la serie? ',
                    a:'1990',
                    b:'1992',
                    c:'1994',
                    d:'1998',
                    correct:'c'
                },
                {
                    question:'¿En que año fue la temporada final? ',
                    a:'2003',
                    b:'2002',
                    c:'2001',
                    d:'2008',
                    correct:'a'
                },
                {

                    question:'¿Como se llama el esposo de Phoebe en la temporada final?',
                    a:'Joey',
                    b:'David',
                    c:'Mike',
                    d:'Sheldon',
                    correct:'c'
                },
                {
                    question:'¿Cual es el nombre del hijo de Ross? ',
                    a:'Ben',
                    b:'Clark',
                    c:'Mark',
                    d:'Toby',
                    correct:'a'
                },
                {
                    question:'¿¿En que temporada se casaron Monica y Chandler  ',
                    a:'7',
                    b:'10',
                    c:'8',
                    d:'5',
                    correct:'a'
                },
                {
                    question:'¿Cual es el segundo nombre de Chandler? ',
                    a:'Murriel',
                    b:'Manny',
                    c:'Moe',
                    d:'Muriel',
                    correct:'d'
                },
                {
                    question:'¿Quien fue el primer beso de Monica?',
                    a:'Joey',
                    b:'Chandler',
                    c:'Gunther',
                    d:'Ross',
                    correct:'d'
                },
                {
                    question:'¿Quien es Princesa Consuela Banana Hammock?',
                    a:'Phoebe',
                    b:'Amy',
                    c:'Monica',
                    d:'Rachel',
                    correct:'a'
                },
                {
                    question:'¿Cuantas hermanas tiene Joey?',
                    a:'No tiene',
                    b:'2',
                    c:'7',
                    d:'5',
                    correct:'c'
                },
                {
                    question:'¿En que temporada Rachel tiene a su hija?',
                    a:'10',
                    b:'6',
                    c:'9',
                    d:'8',
                    correct:'d'
                },

],

question,answer,
form=0, // preguntas hechas
ok=0; // preguntas contestadas ok

makeQuestion(); // funcion hacer preguntas

document.getElementById('but').addEventListener('click', function(){
let entry = document.getElementById('dato').value;

  if (entry == '' || entry == null ) 
    {
        alert("ingrese una respuesta");
        return;   
    } 

    if(entry.toLowerCase() == answer || entry.toUpperCase() == answer) 
    {
        ok++;
    }
    
    if(form < 15)
    {
        makeQuestion();
    }
    else
    {
        showResult();
    }


});



function makeQuestion()
{
    let aux;

    aux= questions.splice(AleatoryNumber(0,questions.length -1), 1);
    question= aux[0][0];
    answer = aux[0][1];

    document.getElementById('ques').innerHTML= question.fontcolor("pink").fontsize(25);
    document.getElementById('dato').value='';
    

    form++;
};

function showPictureIncorrect()
{
    let image = new Image(); 
    image.src = "imagenes/gifs/incorrecto.gif";
    image.style.width='400px';
    image.style.height = 'auto';
    const juegoDiv = document.querySelector('.juego');
    juegoDiv.appendChild(image);
};

function showPictureCorrect()
{
    let image = new Image(); 
    image.src = "imagenes/gifs/imagen2.gif";
    image.style.width='400px';
    image.style.height = 'auto';
    const juegoDiv = document.querySelector('.juego');
    juegoDiv.appendChild(image);
};

function showResult()
{
    let result;
   

    switch(ok)
    {
        case 0:
            result= "No acertase ninguna, hay que reveer la serie!!";
            showPictureIncorrect();
            alert(result);
            break;
        case 1:
            result= "ACERTASTE 1/15 hay que reveer la serie!!";
            showPictureIncorrect();
            alert(result);
            break;
        case 2:
            result= "ACERTASTE 2/15 hay que reveer la serie!!";
            showPictureIncorrect();
            alert(result);
            break;
        case 3:
            result= "ACERTASTE 3/15 hay que reveer la serie!!";
            showPictureIncorrect();
            alert(result);
            break;
        case 4:
            result= "ACERTASTE 4/15 hay que reveer la serie!!";
            showPictureIncorrect();
            alert(result);
            break;
        case 5:
            result= "ACERTASTE 5/15 hay que reveer la serie!!";
            showPictureIncorrect();
            alert(result);
            break;
        case 6:
            result= "ACERTASTE 6/15";
            showPictureCorrect();
            alert(result);
            break;
        case 7:
            result= "ACERTASTE 7/15";
            showPictureCorrect();
            alert(result);
            break;
        case 8:
            result= "ACERTASTE 8/15";
            showPictureCorrect();
            alert(result);
            break;
        case 9:
            result= "ACERTASTE 9/15";
            showPictureCorrect();
            alert(result);
            break;
        case 10:
            result= "ACERTASTE 10/15";
            showPictureCorrect();
            alert(result);
            break;
            case 11:
            result= "ACERTASTE 11/15";
            showPictureCorrect();
            alert(result);
            break;
            case 12:
            result= "ACERTASTE 12/15";
            showPictureCorrect();
            alert(result);
            break;
            case 13:
            result= "ACERTASTE 13/15";
            showPictureCorrect();
            alert(result);
            break;
            case 14:
            result= "ACERTASTE 14/15 CASI PERFECTO";
            showPictureCorrect();
            alert(result);
            break;
            case 15:
            result= "Felicitaciones!! contestaste TODAS BIEN!";
            showPictureCorrect();
            alert(result);
            break;    


        }

    document.getElementById('resolution').innerHTML = result.bold().fontsize(25);
       
};


function AleatoryNumber(min , max)
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};



