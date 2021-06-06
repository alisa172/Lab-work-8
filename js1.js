while (m!=5){
    var m = prompt("Оберіть функцію \n1 - оператор умови\n2 - цикл з лічильником\n3 - цикл while\n4 - введення з масиву\n5 - вихід",'')
    if (isNaN(m)==false){
        if (m<1 || m>5){
            alert("Некоректне число")
        }else {
            switch (m) {
                case "1":
                    alert("Перший випадок");
                    let x = prompt('Ввід X', '1.62');
                    if (isNaN(x)==false){
                        let y = prompt('Ввід Y', '0.75');
                        if (isNaN(y)==false){
                            let z = prompt('Ввід Z', '0.845');
                            if (isNaN(z)==false){
                                if (x<=z){
                                alert("x<z");
                                let a;
                                a=Math.pow(1+Math.pow(Math.abs(x+y)),3);
                                alert(a);
                          }
                        else{
                            alert("x>z");
                            if (isNaN(z)==false){
                            let b=Math.sqrt(Math.tan(z))+1;
                            alert(b);}
                            else alert('Ви ввели не число');}
                        }
                    else alert('Ви ввели не число');}
                    else alert('Ви ввели не число');}
                    else alert('Ви ввели не число');
            break
            case "2":
                alert("Другий випадок");
                let shag =+prompt('Введіть шаг циклу',0.5);
                if (isNaN(shag)==false){
                    let a2=+prompt('Введіть а',0.28);
                    if (isNaN(a2)==false){
                        let b2=+prompt('Введіть b',1.35);
                        if (isNaN(b2)==false){
                            let x2_1=+prompt('Введіть початкове значення x',1.2);
                                if (isNaN(x2_1)==false){
                                  let x2_2=+prompt('Введіть кінцеве значення x',7.5)
                                  if (isNaN(x2_1)==false){
                                      if (x2_1<x2_2){
                                        for (x2_1;x2_1 <=x2_2;){ 
                                            let y;
                                            y=(Math.pow(Math.sin(a2*x2_1)),3)/(a2*x2_1+b2);        
                                            alert("При х2="+x2_1+" y="+y);  
                                            x2_1=x2_1+shag;}
                                        }else alert('Кінцеве значення х менше початкового');
                                    }else alert('Ви ввели не число');  
                                }else alert('Ви ввели не число');  
                            }else alert('Ви ввели не число'); }
                        else alert('Ви ввели не число'); }
                    else alert('Ви ввели не число');   
                    break
                case "3":
                    var shag2 =+prompt('Введіть шаг циклу',0.5)
                    if (isNaN(shag2)==false){
                        var x3 =+prompt('Введіть початкове значення x',1.38)
                        if (isNaN(x3)==false){
                            var x4 =+prompt('Введіть кінцеве значення x',7.85)
                            if (isNaN(x4)==false){
                                var a3 =+prompt('Введіть а',0.28);
                                if (isNaN(a3)==false){
                                var b3 =+prompt('Введіть b',1.35);
                                    if (isNaN(b3)==false){
                                        if (x3<x4){
                                            while (x3<=x4){
                                            let y2;
                                            y2=(Math.pow(Math.sin(a3*x3)),3)/(a3*x3+b3);        
                                            alert("При х2="+x3+" y="+y2); 
                                            x3=x3+shag2;}
                                        }else alert('Кінцеве значення х менше початкового');
                                    }else alert('Ви ввели не число');
                                }else alert('Ви ввели не число');
                            }else alert('Ви ввели не число');
                    }else alert('Ви ввели не число');
                }else alert('Ви ввели не число');
            break
            case "4":
                var array=[];
                for (var i=0;i<4;i++) {
                    array[i]=prompt('Введіть '+(i+1)+' элемент масиву',1.38);
                }
                let a2 =0.28;
                let b2 =1.35;
                for (var i=0;i<4;i++){
                    let y3;
                    y3=(Math.pow(Math.sin(a2*array[i])),3)/(a2*array[i]+b2);
                    alert('При x = '+array[i]+',y ='+y3);
                }
                }
            };
}else alert('Ви ввели не число');
}
 