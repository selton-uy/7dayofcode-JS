let area = prompt('Qual area vc quer dar semento?(1) para Front-end (2) para Back-end');

if(area == 1){
    prompt('Que incrivel! Dentre esses assuntos quais você que aprender?(1)React (2)Vue');
}

if (area == 2){
    prompt('Quanto  bom gosto! Dentre esses assuntos quais você que aprender?(1)C# (2)Java');
}

let foco = prompt('Otimo conhecer esse seu lado! você prefere se (1)especializar em alguma area ou (2) se desenvolver até full-stack?');

if (foco == 1){
    foco = 'Especialista';
    area = prompt(`Parece que teremos um ${foco} entre nós, em qual area vc quer se especializar?`);
    alert(`Que magnifico, teremos um ${foco} em ${area}! Continue seus estudos e não desista.`);
}if (foco == 2){
    foco = 'Full-Stack';
    let jornada = prompt(`Seu caminho para ${foco} será grande, mas não desista! A recompensa é maior que a luta. Quais areas você pretende iniciar sua jornada?`);
    if(jornada){
        while(jornada){
            jornada = prompt(`${jornada.toLocaleUpperCase()} é super interessante de se aprender! Qual outra area de interesse? Digite abaixo, caso queira parar deixe a caixa em branco.`)
        }if(jornada == ''){
            alert('Obridado por jogar, continue com seus estudos.');
        }
    }
}
