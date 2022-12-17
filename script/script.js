/* ATRIBUTOS */

/* Quantos pontos tem em cada status*/

let pontos_agilidade = parseInt(document.querySelector("div#agi div.agi").textContent);

let pontos_força = parseInt(document.querySelector("div#for div.for").textContent);

let pontos_inteligencia = parseInt(document.querySelector("div#int div.int").textContent);

let pontos_presença = parseInt(document.querySelector("div#pre div.pre").textContent);

let pontos_vigor = parseInt(document.querySelector("div#vig div.vig").textContent);

let pontos_resistencia = parseInt(document.querySelector("div#res div.res").textContent);

let pontos_restantes = parseInt(document.querySelector("div div.pontos").textContent);

/* Alterando pontos em Agilidade */

function somarAgi() {
    if (pontos_restantes <= 0) {
        alert(`[ERRO!] Você possuí ${pontos_restantes} pontos para aplicar nos seus status!`);
    } else {
        if  (pontos_agilidade >= 3) {
            alert("[ERRO!] Você atingiu o limite de pontos nesse atributo!");       
        } else {
            pontos_agilidade++;
            document.querySelector("div#agi div.agi").innerHTML = `${pontos_agilidade}`;
            
            pontos_restantes = pontos_restantes - 1;
            document.querySelector("div.pontos").innerHTML = `${pontos_restantes}`;
        }
    }
}

function diminuirAgi() {
    if (pontos_agilidade == 0) {
        alert("[ERRO!] Você já possui 0 pontos nesse atributo!")
    } else {
        pontos_agilidade = pontos_agilidade - 1;
        document.querySelector("div#agi div.agi").innerHTML = `${pontos_agilidade}`;

        pontos_restantes = pontos_restantes + 1;
            document.querySelector("div.pontos").innerHTML = `${pontos_restantes}`;
    }
}

/* Alterando pontos em Força */

function somarFor() {
    if (pontos_restantes <= 0) {
        alert(`[ERRO!] Você possuí ${pontos_restantes} pontos para aplicar nos seus status!`);
    } else {
        if  (pontos_força >= 3) {
            alert("[ERRO!] Você atingiu o limite de pontos nesse atributo!");       
        } else {
            pontos_força++;
            document.querySelector("div#for div.for").innerHTML = `${pontos_força}`;
            
            pontos_restantes = pontos_restantes - 1;
            document.querySelector("div.pontos").innerHTML = `${pontos_restantes}`;
        }
    }
}

function diminuirFor() {
    if (pontos_força == 0) {
        alert("[ERRO!] Você já possui 0 pontos nesse atributo!")
    } else {
        pontos_força = pontos_força - 1;
        document.querySelector("div#for div.for").innerHTML = `${pontos_força}`;

        pontos_restantes = pontos_restantes + 1;
            document.querySelector("div.pontos").innerHTML = `${pontos_restantes}`;
    }
}

/* Alterando pontos em Inteligência */

function somarInt() {
    if (pontos_restantes <= 0) {
        alert(`[ERRO!] Você possuí ${pontos_restantes} pontos para aplicar nos seus status!`);
    } else {
        if  (pontos_inteligencia >= 3) {
            alert("[ERRO!] Você atingiu o limite de pontos nesse atributo!");       
        } else {
            pontos_inteligencia++;
            document.querySelector("div#int div.int").innerHTML = `${pontos_inteligencia}`;
            
            pontos_restantes = pontos_restantes - 1;
            document.querySelector("div.pontos").innerHTML = `${pontos_restantes}`;
        }
    }
}

function diminuirInt() {
    if (pontos_inteligencia == 0) {
        alert("[ERRO!] Você já possui 0 pontos nesse atributo!")
    } else {
        pontos_inteligencia = pontos_inteligencia - 1;
        document.querySelector("div#int div.int").innerHTML = `${pontos_inteligencia}`;

        pontos_restantes = pontos_restantes + 1;
            document.querySelector("div.pontos").innerHTML = `${pontos_restantes}`;
    }
}

/* Alterando pontos em Presença */

function somarPre() {
    if (pontos_restantes <= 0) {
        alert(`[ERRO!] Você possuí ${pontos_restantes} pontos para aplicar nos seus status!`);
    } else {
        if  (pontos_presença >= 3) {
            alert("[ERRO!] Você atingiu o limite de pontos nesse atributo!");       
        } else {
            pontos_presença++;
            document.querySelector("div#pre div.pre").innerHTML = `${pontos_presença}`;
            
            pontos_restantes = pontos_restantes - 1;
            document.querySelector("div.pontos").innerHTML = `${pontos_restantes}`;
        }
    }
}

function diminuirPre() {
    if (pontos_presença == 0) {
        alert("[ERRO!] Você já possui 0 pontos nesse atributo!")
    } else {
        pontos_presença = pontos_presença - 1;
        document.querySelector("div#pre div.pre").innerHTML = `${pontos_presença}`;

        pontos_restantes = pontos_restantes + 1;
            document.querySelector("div.pontos").innerHTML = `${pontos_restantes}`;
    }
}

/* Alterando pontos em Vigor */

function somarVig() {
    if (pontos_restantes <= 0) {
        alert(`[ERRO!] Você possuí ${pontos_restantes} pontos para aplicar nos seus status!`);
    } else {
        if  (pontos_vigor >= 3) {
            alert("[ERRO!] Você atingiu o limite de pontos nesse atributo!");       
        } else {
            pontos_vigor++;
            document.querySelector("div#vig div.vig").innerHTML = `${pontos_vigor}`;
            
            pontos_restantes = pontos_restantes - 1;
            document.querySelector("div.pontos").innerHTML = `${pontos_restantes}`;
        }
    }
}

function diminuirVig() {
    if (pontos_vigor == 0) {
        alert("[ERRO!] Você já possui 0 pontos nesse atributo!")
    } else {
        pontos_vigor = pontos_vigor - 1;
        document.querySelector("div#vig div.vig").innerHTML = `${pontos_vigor}`;

        pontos_restantes = pontos_restantes + 1;
            document.querySelector("div.pontos").innerHTML = `${pontos_restantes}`;
    }
}

/* Alterando pontos em Resistência */

function somarRes() {
    if (pontos_restantes <= 0) {
        alert(`[ERRO!] Você possuí ${pontos_restantes} pontos para aplicar nos seus status!`);
    } else {
        if  (pontos_resistencia >= 3) {
            alert("[ERRO!] Você atingiu o limite de pontos nesse atributo!");       
        } else {
            pontos_resistencia++;
            document.querySelector("div#res div.res").innerHTML = `${pontos_resistencia}`;
            
            pontos_restantes = pontos_restantes - 1;
            document.querySelector("div.pontos").innerHTML = `${pontos_restantes}`;
        }
    }
}

function diminuirRes() {
    if (pontos_resistencia == 0) {
        alert("[ERRO!] Você já possui 0 pontos nesse atributo!")
    } else {
        pontos_resistencia = pontos_resistencia - 1;
        document.querySelector("div#res div.res").innerHTML = `${pontos_resistencia}`;

        pontos_restantes = pontos_restantes + 1;
            document.querySelector("div.pontos").innerHTML = `${pontos_restantes}`;
    }
}

/* PERÍCIAS */

let pontos_pericia = parseInt(document.querySelector("div#modificador-pontos").textContent);

let pontos_atletismo = parseInt(document.querySelector("div#atletismo div div.container div").textContent);
let pontos_atualidades = parseInt(document.querySelector("div#atualidades div div.container div").textContent);
let pontos_ciencia = parseInt(document.querySelector("div#ciencia div div.container div").textContent);
let pontos_diplomacia = parseInt(document.querySelector("div#diplomacia div div.container div").textContent);
let pontos_enganacao = parseInt(document.querySelector("div#enganacao div div.container div").textContent);
let pontos_fortitude = parseInt(document.querySelector("div#fortitude div div.container div").textContent);
let pontos_furtividade = parseInt(document.querySelector("div#furtividade div div.container div").textContent);
let pontos_intimidacao = parseInt(document.querySelector("div#intimidacao div div.container div").textContent);
let pontos_intuicao = parseInt(document.querySelector("div#intuicao div div.container div").textContent);
let pontos_investigacao = parseInt(document.querySelector("div#investigacao div div.container div").textContent);
let pontos_luta = parseInt(document.querySelector("div#luta div div.container div").textContent);
let pontos_medicina = parseInt(document.querySelector("div#medicina div div.container div").textContent);
let pontos_percepcao = parseInt(document.querySelector("div#percepcao div div.container div").textContent);
let pontos_pilotagem = parseInt(document.querySelector("div#pilotagem div div.container div").textContent);
let pontos_pontaria = parseInt(document.querySelector("div#pontaria div div.container div").textContent);
let pontos_prestidigitacao = parseInt(document.querySelector("div#prestidigitacao div div.container div").textContent);
let pontos_profissao = parseInt(document.querySelector("div#profissao div div.container div").textContent);
let pontos_psicologia = parseInt(document.querySelector("div#psicologia div div.container div").textContent);
let pontos_reflexos = parseInt(document.querySelector("div#reflexos div div.container div").textContent);
let pontos_religiao = parseInt(document.querySelector("div#religiao div div.container div").textContent);
let pontos_tatica = parseInt(document.querySelector("div#tatica div div.container div").textContent);
let pontos_tecnologia = parseInt(document.querySelector("div#tecnologia div div.container div").textContent);
let pontos_vontade = parseInt(document.querySelector("div#vontade div div.container div").textContent);

/* Aumentando Perícia Atletismo */

function aumentarAtl() {
    if (pontos_pericia == 0) {
        alert("[ERRO!] Você não possuí pontos de perícia para serem aplicados!");
    } else {
        if (pontos_atletismo >= 5) {
            alert("[ERRO!] Você já tem o limite de pontos nessa perícia!");
        } else {
            pontos_atletismo = pontos_atletismo + 5;
            document.querySelector("div#atletismo div div.container div").innerHTML = `+${pontos_atletismo}`;

            pontos_pericia = pontos_pericia - 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
        }
    }
}

function diminuirAtl() {
    if (pontos_atletismo == 0) {
        alert("[ERRO!] Essa perícia já está zerada!");
    } else {
        pontos_atletismo = pontos_atletismo - 5;
        document.querySelector("div#atletismo div div.container div").innerHTML = `${pontos_atletismo}`;

            pontos_pericia = pontos_pericia + 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
    }
}

/* Aumentando Perícia Atualidades */

function aumentarAtu() {
    if (pontos_pericia == 0) {
        alert("[ERRO!] Você não possuí pontos de perícia para serem aplicados!");
    } else {
        if (pontos_atualidades >= 5) {
            alert("[ERRO!] Você já tem o limite de pontos nessa perícia!");
        } else {
            pontos_atualidades = pontos_atualidades + 5;
            document.querySelector("div#atualidades div div.container div").innerHTML = `+${pontos_atualidades}`;

            pontos_pericia = pontos_pericia - 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
        }
    }
}

function diminuirAtu() {
    if (pontos_atualidades == 0) {
        alert("[ERRO!] Essa perícia já está zerada!");
    } else {
        pontos_atualidades = pontos_atualidades - 5;
        document.querySelector("div#atualidades div div.container div").innerHTML = `${pontos_atualidades}`;

            pontos_pericia = pontos_pericia + 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
    }
}

/* Aumentando Perícia Ciência */

function aumentarCien() {
    if (pontos_pericia == 0) {
        alert("[ERRO!] Você não possuí pontos de perícia para serem aplicados!");
    } else {
        if (pontos_ciencia >= 5) {
            alert("[ERRO!] Você já tem o limite de pontos nessa perícia!");
        } else {
            pontos_ciencia = pontos_ciencia + 5;
            document.querySelector("div#ciencia div div.container div").innerHTML = `+${pontos_ciencia}`;

            pontos_pericia = pontos_pericia - 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
        }
    }
}

function diminuirCien() {
    if (pontos_ciencia == 0) {
        alert("[ERRO!] Essa perícia já está zerada!");
    } else {
        pontos_ciencia = pontos_ciencia - 5;
        document.querySelector("div#ciencia div div.container div").innerHTML = `${pontos_ciencia}`;

            pontos_pericia = pontos_pericia + 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
    }
}

/* Aumentando Perícia Diplomacia */

function aumentarDiplo() {
    if (pontos_pericia == 0) {
        alert("[ERRO!] Você não possuí pontos de perícia para serem aplicados!");
    } else {
        if (pontos_diplomacia >= 5) {
            alert("[ERRO!] Você já tem o limite de pontos nessa perícia!");
        } else {
            pontos_diplomacia = pontos_diplomacia + 5;
            document.querySelector("div#diplomacia div div.container div").innerHTML = `+${pontos_diplomacia}`;

            pontos_pericia = pontos_pericia - 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
        }
    }
}

function diminuirDiplo() {
    if (pontos_diplomacia == 0) {
        alert("[ERRO!] Essa perícia já está zerada!");
    } else {
        pontos_diplomacia = pontos_diplomacia - 5;
        document.querySelector("div#diplomacia div div.container div").innerHTML = `${pontos_diplomacia}`;

            pontos_pericia = pontos_pericia + 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
    }
}

/* Aumentando Perícia Enganação */

function aumentarEng() {
    if (pontos_pericia == 0) {
        alert("[ERRO!] Você não possuí pontos de perícia para serem aplicados!");
    } else {
        if (pontos_enganacao >= 5) {
            alert("[ERRO!] Você já tem o limite de pontos nessa perícia!");
        } else {
            pontos_enganacao = pontos_enganacao + 5;
            document.querySelector("div#enganacao div div.container div").innerHTML = `+${pontos_enganacao}`;

            pontos_pericia = pontos_pericia - 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
        }
    }
}

function diminuirEng() {
    if (pontos_enganacao == 0) {
        alert("[ERRO!] Essa perícia já está zerada!");
    } else {
        pontos_enganacao = pontos_enganacao - 5;
        document.querySelector("div#enganacao div div.container div").innerHTML = `${pontos_enganacao}`;

            pontos_pericia = pontos_pericia + 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
    }
}

/* Aumentando Perícia Fortitude */

function aumentarFort() {
    if (pontos_pericia == 0) {
        alert("[ERRO!] Você não possuí pontos de perícia para serem aplicados!");
    } else {
        if (pontos_fortitude >= 5) {
            alert("[ERRO!] Você já tem o limite de pontos nessa perícia!");
        } else {
            pontos_fortitude = pontos_fortitude + 5;
            document.querySelector("div#fortitude div div.container div").innerHTML = `+${pontos_fortitude}`;

            pontos_pericia = pontos_pericia - 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
        }
    }
}

function diminuirFort() {
    if (pontos_fortitude == 0) {
        alert("[ERRO!] Essa perícia já está zerada!");
    } else {
        pontos_fortitude = pontos_fortitude - 5;
        document.querySelector("div#fortitude div div.container div").innerHTML = `${pontos_fortitude}`;

            pontos_pericia = pontos_pericia + 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
    }
}

/* Aumentando Perícia Furtividade */

function aumentarFurt() {
    if (pontos_pericia == 0) {
        alert("[ERRO!] Você não possuí pontos de perícia para serem aplicados!");
    } else {
        if (pontos_furtividade >= 5) {
            alert("[ERRO!] Você já tem o limite de pontos nessa perícia!");
        } else {
            pontos_furtividade = pontos_furtividade + 5;
            document.querySelector("div#furtividade div div.container div").innerHTML = `+${pontos_furtividade}`;

            pontos_pericia = pontos_pericia - 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
        }
    }
}

function diminuirFurt() {
    if (pontos_furtividade == 0) {
        alert("[ERRO!] Essa perícia já está zerada!");
    } else {
        pontos_furtividade = pontos_furtividade - 5;
        document.querySelector("div#furtividade div div.container div").innerHTML = `${pontos_furtividade}`;

            pontos_pericia = pontos_pericia + 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
    }
}

/* Aumentando Perícia Intimidação */

function aumentarIntim() {
    if (pontos_pericia == 0) {
        alert("[ERRO!] Você não possuí pontos de perícia para serem aplicados!");
    } else {
        if (pontos_intimidacao >= 5) {
            alert("[ERRO!] Você já tem o limite de pontos nessa perícia!");
        } else {
            pontos_intimidacao = pontos_intimidacao + 5;
            document.querySelector("div#intimidacao div div.container div").innerHTML = `+${pontos_intimidacao}`;

            pontos_pericia = pontos_pericia - 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
        }
    }
}

function diminuirIntim() {
    if (pontos_intimidacao == 0) {
        alert("[ERRO!] Essa perícia já está zerada!");
    } else {
        pontos_intimidacao = pontos_intimidacao - 5;
        document.querySelector("div#intimidacao div div.container div").innerHTML = `${pontos_intimidacao}`;

            pontos_pericia = pontos_pericia + 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
    }
}

/* Aumentando Perícia Intuição */

function aumentarIntu() {
    if (pontos_pericia == 0) {
        alert("[ERRO!] Você não possuí pontos de perícia para serem aplicados!");
    } else {
        if (pontos_intuicao >= 5) {
            alert("[ERRO!] Você já tem o limite de pontos nessa perícia!");
        } else {
            pontos_intuicao = pontos_intuicao + 5;
            document.querySelector("div#intuicao div div.container div").innerHTML = `+${pontos_intuicao}`;

            pontos_pericia = pontos_pericia - 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
        }
    }
}

function diminuirIntu() {
    if (pontos_intuicao == 0) {
        alert("[ERRO!] Essa perícia já está zerada!");
    } else {
        pontos_intuicao = pontos_intuicao - 5;
        document.querySelector("div#intuicao div div.container div").innerHTML = `${pontos_intuicao}`;

            pontos_pericia = pontos_pericia + 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
    }
}

/* Aumentando Perícia Investigação */

function aumentarInv() {
    if (pontos_pericia == 0) {
        alert("[ERRO!] Você não possuí pontos de perícia para serem aplicados!");
    } else {
        if (pontos_investigacao >= 5) {
            alert("[ERRO!] Você já tem o limite de pontos nessa perícia!");
        } else {
            pontos_investigacao = pontos_investigacao + 5;
            document.querySelector("div#investigacao div div.container div").innerHTML = `+${pontos_investigacao}`;

            pontos_pericia = pontos_pericia - 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
        }
    }
}

function diminuirInv() {
    if (pontos_investigacao == 0) {
        alert("[ERRO!] Essa perícia já está zerada!");
    } else {
        pontos_investigacao = pontos_investigacao - 5;
        document.querySelector("div#investigacao div div.container div").innerHTML = `${pontos_investigacao}`;

            pontos_pericia = pontos_pericia + 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
    }
}

/* Aumentando Perícia Luta */

function aumentarLuta() {
    if (pontos_pericia == 0) {
        alert("[ERRO!] Você não possuí pontos de perícia para serem aplicados!");
    } else {
        if (pontos_luta >= 5) {
            alert("[ERRO!] Você já tem o limite de pontos nessa perícia!");
        } else {
            pontos_luta = pontos_luta + 5;
            document.querySelector("div#luta div div.container div").innerHTML = `+${pontos_luta}`;

            pontos_pericia = pontos_pericia - 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
        }
    }
}

function diminuirLuta() {
    if (pontos_luta == 0) {
        alert("[ERRO!] Essa perícia já está zerada!");
    } else {
        pontos_luta = pontos_luta - 5;
        document.querySelector("div#luta div div.container div").innerHTML = `${pontos_luta}`;

            pontos_pericia = pontos_pericia + 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
    }
}

/* Aumentando Perícia Medicina */

function aumentarMed() {
    if (pontos_pericia == 0) {
        alert("[ERRO!] Você não possuí pontos de perícia para serem aplicados!");
    } else {
        if (pontos_medicina >= 5) {
            alert("[ERRO!] Você já tem o limite de pontos nessa perícia!");
        } else {
            pontos_medicina = pontos_medicina + 5;
            document.querySelector("div#medicina div div.container div").innerHTML = `+${pontos_medicina}`;

            pontos_pericia = pontos_pericia - 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
        }
    }
}

function diminuirMed() {
    if (pontos_medicina == 0) {
        alert("[ERRO!] Essa perícia já está zerada!");
    } else {
        pontos_medicina = pontos_medicina - 5;
        document.querySelector("div#medicina div div.container div").innerHTML = `${pontos_medicina}`;

            pontos_pericia = pontos_pericia + 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
    }
}

/* AUmentando Perícia Psicologia */

function aumentarPsic() {
    if (pontos_pericia == 0) {
        alert("[ERRO!] Você não possuí pontos de perícia para serem aplicados!");
    } else {
        if (pontos_psicologia >= 5) {
            alert("[ERRO!] Você já tem o limite de pontos nessa perícia!");
        } else {
            pontos_psicologia = pontos_psicologia + 5;
            document.querySelector("div#psicologia div div.container div").innerHTML = `+${pontos_psicologia}`;

            pontos_pericia = pontos_pericia - 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
        }
    }
}

function diminuirPsic() {
    if (pontos_psicologia == 0) {
        alert("[ERRO!] Essa perícia já está zerada!");
    } else {
        pontos_psicologia = pontos_psicologia - 5;
        document.querySelector("div#psicologia div div.container div").innerHTML = `${pontos_psicologia}`;

            pontos_pericia = pontos_pericia + 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
    }
}

/* AUmentando Perícia Percepção */

function aumentarPerc() {
    if (pontos_pericia == 0) {
        alert("[ERRO!] Você não possuí pontos de perícia para serem aplicados!");
    } else {
        if (pontos_percepcao >= 5) {
            alert("[ERRO!] Você já tem o limite de pontos nessa perícia!");
        } else {
            pontos_percepcao = pontos_percepcao + 5;
            document.querySelector("div#percepcao div div.container div").innerHTML = `+${pontos_percepcao}`;

            pontos_pericia = pontos_pericia - 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
        }
    }
}

function diminuirPerc() {
    if (pontos_percepcao == 0) {
        alert("[ERRO!] Essa perícia já está zerada!");
    } else {
        pontos_percepcao = pontos_percepcao - 5;
        document.querySelector("div#percepcao div div.container div").innerHTML = `${pontos_percepcao}`;

            pontos_pericia = pontos_pericia + 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
    }
}

/* Aumentando Perícia Pilotagem */

function aumentarPilo() {
    if (pontos_pericia == 0) {
        alert("[ERRO!] Você não possuí pontos de perícia para serem aplicados!");
    } else {
        if (pontos_pilotagem >= 5) {
            alert("[ERRO!] Você já tem o limite de pontos nessa perícia!");
        } else {
            pontos_pilotagem = pontos_pilotagem + 5;
            document.querySelector("div#pilotagem div div.container div").innerHTML = `+${pontos_pilotagem}`;

            pontos_pericia = pontos_pericia - 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
        }
    }
}

function diminuirPilo() {
    if (pontos_pilotagem == 0) {
        alert("[ERRO!] Essa perícia já está zerada!");
    } else {
        pontos_pilotagem = pontos_pilotagem - 5;
        document.querySelector("div#pilotagem div div.container div").innerHTML = `${pontos_pilotagem}`;

            pontos_pericia = pontos_pericia + 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
    }
}

/* Aumentando Perícia Pontaria */

function aumentarPont() {
    if (pontos_pericia == 0) {
        alert("[ERRO!] Você não possuí pontos de perícia para serem aplicados!");
    } else {
        if (pontos_pontaria >= 5) {
            alert("[ERRO!] Você já tem o limite de pontos nessa perícia!");
        } else {
            pontos_pontaria = pontos_pontaria + 5;
            document.querySelector("div#pontaria div div.container div").innerHTML = `+${pontos_pontaria}`;

            pontos_pericia = pontos_pericia - 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
        }
    }
}

function diminuirPont() {
    if (pontos_pontaria == 0) {
        alert("[ERRO!] Essa perícia já está zerada!");
    } else {
        pontos_pontaria = pontos_pontaria - 5;
        document.querySelector("div#pontaria div div.container div").innerHTML = `${pontos_pontaria}`;

            pontos_pericia = pontos_pericia + 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
    }
}

/* Aumentando Perícia Prestidigitação */

function aumentarPrest() {
    if (pontos_pericia == 0) {
        alert("[ERRO!] Você não possuí pontos de perícia para serem aplicados!");
    } else {
        if (pontos_prestidigitacao >= 5) {
            alert("[ERRO!] Você já tem o limite de pontos nessa perícia!");
        } else {
            pontos_prestidigitacao = pontos_prestidigitacao + 5;
            document.querySelector("div#prestidigitacao div div.container div").innerHTML = `+${pontos_prestidigitacao}`;

            pontos_pericia = pontos_pericia - 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
        }
    }
}

function diminuirPrest() {
    if (pontos_prestidigitacao == 0) {
        alert("[ERRO!] Essa perícia já está zerada!");
    } else {
        pontos_prestidigitacao = pontos_prestidigitacao - 5;
        document.querySelector("div#prestidigitacao div div.container div").innerHTML = `${pontos_prestidigitacao}`;

            pontos_pericia = pontos_pericia + 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
    }
}

/* Aumentando Perícia Profissao */

function aumentarProf() {
    if (pontos_pericia == 0) {
        alert("[ERRO!] Você não possuí pontos de perícia para serem aplicados!");
    } else {
        if (pontos_profissao >= 5) {
            alert("[ERRO!] Você já tem o limite de pontos nessa perícia!");
        } else {
            pontos_profissao = pontos_profissao + 5;
            document.querySelector("div#profissao div div.container div").innerHTML = `+${pontos_profissao}`;

            pontos_pericia = pontos_pericia - 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
        }
    }
}

function diminuirProf() {
    if (pontos_profissao == 0) {
        alert("[ERRO!] Essa perícia já está zerada!");
    } else {
        pontos_profissao = pontos_profissao - 5;
        document.querySelector("div#profissao div div.container div").innerHTML = `${pontos_profissao}`;

            pontos_pericia = pontos_pericia + 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
    }
}

/* Aumentando Perícia Relfexos */

function aumentarRef() {
    if (pontos_pericia == 0) {
        alert("[ERRO!] Você não possuí pontos de perícia para serem aplicados!");
    } else {
        if (pontos_reflexos >= 5) {
            alert("[ERRO!] Você já tem o limite de pontos nessa perícia!");
        } else {
            pontos_reflexos = pontos_reflexos + 5;
            document.querySelector("div#reflexos div div.container div").innerHTML = `+${pontos_reflexos}`;

            pontos_pericia = pontos_pericia - 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
        }
    }
}

function diminuirRef() {
    if (pontos_reflexos == 0) {
        alert("[ERRO!] Essa perícia já está zerada!");
    } else {
        pontos_reflexos = pontos_reflexos - 5;
        document.querySelector("div#reflexos div div.container div").innerHTML = `${pontos_reflexos}`;

            pontos_pericia = pontos_pericia + 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
    }
}

/* Aumentando Perícia Religião */

function aumentarRel() {
    if (pontos_pericia == 0) {
        alert("[ERRO!] Você não possuí pontos de perícia para serem aplicados!");
    } else {
        if (pontos_religiao >= 5) {
            alert("[ERRO!] Você já tem o limite de pontos nessa perícia!");
        } else {
            pontos_religiao = pontos_religiao + 5;
            document.querySelector("div#religiao div div.container div").innerHTML = `+${pontos_religiao}`;

            pontos_pericia = pontos_pericia - 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
        }
    }
}

function diminuirRel() {
    if (pontos_religiao == 0) {
        alert("[ERRO!] Essa perícia já está zerada!");
    } else {
        pontos_religiao = pontos_religiao - 5;
        document.querySelector("div#religiao div div.container div").innerHTML = `${pontos_religiao}`;

            pontos_pericia = pontos_pericia + 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
    }
}

/* Aumentando Perícia Tática */

function aumentarTat() {
    if (pontos_pericia == 0) {
        alert("[ERRO!] Você não possuí pontos de perícia para serem aplicados!");
    } else {
        if (pontos_tatica >= 5) {
            alert("[ERRO!] Você já tem o limite de pontos nessa perícia!");
        } else {
            pontos_tatica = pontos_tatica + 5;
            document.querySelector("div#tatica div div.container div").innerHTML = `+${pontos_tatica}`;

            pontos_pericia = pontos_pericia - 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
        }
    }
}

function diminuirTat() {
    if (pontos_tatica == 0) {
        alert("[ERRO!] Essa perícia já está zerada!");
    } else {
        pontos_tatica = pontos_tatica - 5;
        document.querySelector("div#tatica div div.container div").innerHTML = `${pontos_tatica}`;

            pontos_pericia = pontos_pericia + 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
    }
}

/* Aumentando Perícia Tecnologia */

function aumentarTec() {
    if (pontos_pericia == 0) {
        alert("[ERRO!] Você não possuí pontos de perícia para serem aplicados!");
    } else {
        if (pontos_tecnologia >= 5) {
            alert("[ERRO!] Você já tem o limite de pontos nessa perícia!");
        } else {
            pontos_tecnologia = pontos_tecnologia + 5;
            document.querySelector("div#tecnologia div div.container div").innerHTML = `+${pontos_tecnologia}`;

            pontos_pericia = pontos_pericia - 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
        }
    }
}

function diminuirTec() {
    if (pontos_tecnologia == 0) {
        alert("[ERRO!] Essa perícia já está zerada!");
    } else {
        pontos_tecnologia = pontos_tecnologia - 5;
        document.querySelector("div#tecnologia div div.container div").innerHTML = `${pontos_tecnologia}`;

            pontos_pericia = pontos_pericia + 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
    }
}

/* Aumentando Perícia Vontade */

function aumentarVont() {
    if (pontos_pericia == 0) {
        alert("[ERRO!] Você não possuí pontos de perícia para serem aplicados!");
    } else {
        if (pontos_vontade >= 5) {
            alert("[ERRO!] Você já tem o limite de pontos nessa perícia!");
        } else {
            pontos_vontade = pontos_vontade + 5;
            document.querySelector("div#vontade div div.container div").innerHTML = `+${pontos_vontade}`;

            pontos_pericia = pontos_pericia - 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
        }
    }
}

function diminuirVont() {
    if (pontos_vontade == 0) {
        alert("[ERRO!] Essa perícia já está zerada!");
    } else {
        pontos_vontade = pontos_vontade - 5;
        document.querySelector("div#vontade div div.container div").innerHTML = `${pontos_vontade}`;

            pontos_pericia = pontos_pericia + 1;
            document.querySelector("div#modificador-pontos").innerHTML = `${pontos_pericia}`;
    }
}

/* Adicionando Borda na parte inferior da ultima linha da tabela */

let inicio_borda_inferior = 0;

let input_esquerdo_ant;
let input_direito_ant;
let input_esquerdo;
let input_direito;

/*

function bordaInferiorArmas() {
    let linhasTabela_Armas = document.getElementsByClassName("armas-info");
    console.log(linhasTabela_Armas.length)
    if (inicio_borda_inferior == 0) {
        for (let i = 0; i < linhasTabela_Armas.length; i++) {
            if (i == linhasTabela_Armas.length - 1 ) {
                linhasTabela_Armas[i].classList.add("bordas-inferiores");
                linhasTabela_Armas[i].children[1].classList.add("borda-baixo-esquerda");
                linhasTabela_Armas[i].children[11].classList.add("borda-baixo-direita");
            
                input_direito_ant = document.getElementById(`tipo${i + 1}`);
                input_esquerdo_ant = document.getElementById(`tipo${i + 1}`);
            }
        }
        inicio_borda_inferior = 1;
    } else {
        for (let i = 0; i < linhasTabela_Armas.length; i++) {
            if (i == linhasTabela_Armas.length - 1 ) {
                
                input_esquerdo_ant.classList.remove("borda-baixo-esquerda");
                document.getElementById(`tipo${i}`).classList.remove("borda-baixo-esquerda")
                document.getElementById(`tipo${i + 1}`).classList.add("borda-baixo-esquerda");

                /*
                linhasTabela_Armas[i].classList.add("bordas-inferiores");
                linhasTabela_Armas[i].children[0].classList.add("borda-baixo-esquerda");
                linhasTabela_Armas[i].children[5].classList.add("borda-baixo-direita");
                
            } else {
                linhasTabela_Armas[i].classList.remove("bordas-inferiores");
                linhasTabela_Armas[i].children[1].classList.remove("borda-baixo-esquerda");
                linhasTabela_Armas[i].children[11].classList.remove("borda-baixo-direita");
            }
        }
    }
}

bordaInferiorArmas();

*/

/* Adicionar Nova Linha na Tabela Armas */

let tabela_armas = document.querySelector("div#tabela-armas");

function novaLinhaArmas() {
    let nova_linha_armas = document.createElement("div");
    tabela_armas.appendChild(nova_linha_armas);
    nova_linha_armas.classList.add("armas-info");

    let nova_linhas = document.getElementsByClassName("armas-info");

    let cont_classes_armas = nova_linhas.length;

    let linha_atual_armasInfo = nova_linhas.length - 1;

    for (let i = 1; i <= 6; i++) {
        let input =  document.createElement("input");

        nova_linha_armas.appendChild(input);

        switch (i) {
            case 1:
                input.setAttribute("id", `tipo${cont_classes_armas}`);
                input.classList.add("tipo")
                break;
            case 2:
                input.setAttribute("id", `arma${cont_classes_armas}`);
                input.classList.add("arma")
                break;
            case 3:
                input.setAttribute("id", `alcance${cont_classes_armas}`);
                input.classList.add("alcance")
                break;
            case 4:
                input.setAttribute("id", `dano${cont_classes_armas}`);
                input.classList.add("dano")
                break;
            case 5:
                input.setAttribute("type", "number");
                input.setAttribute("id" , `balas${cont_classes_armas}`);
                input.classList.add("balas")
                break;
            case 6:
                input.setAttribute("type", "number");
                input.setAttribute("max", "20");
                input.setAttribute("id", `critico${cont_classes_armas}`);
                input.classList.add("critico")
                break;
        }

        nova_linhas[linha_atual_armasInfo].appendChild(input);
    
    }

    //bordaInferiorArmas();
}

/* Adicionando Novas Linhas na Tabela Inventário */

let tabela_inventario = document.querySelector("div#tabela-inventario");

function novaLinhaInventario() {
    let nova_linha_inventario = document.createElement("div");
    tabela_inventario.appendChild(nova_linha_inventario);
    nova_linha_inventario.classList.add("inventario-detalhes");

    let nova_linhas = document.getElementsByClassName("inventario-detalhes");

    let cont_classes_inventario = nova_linhas.length;

    let linha_atual_inventarioInfo = nova_linhas.length - 1;

    for (let i = 1; i <= 2; i++) {
        let input =  document.createElement("input");

        nova_linha_inventario.appendChild(input);

        switch (i) {
            case 1:
                input.setAttribute("id", `inventario${cont_classes_inventario}`);
                input.classList.add("inventario")
                break;
            case 2:
                input.setAttribute("id", `detalhes${cont_classes_inventario}`);
                input.classList.add("detalhes")
                break;
        }

        nova_linhas[linha_atual_inventarioInfo].appendChild(input);
    
    }
}

/* Adicionando Nova Linha aos Traumas */

let tabela_traumas = document.querySelector("div#tabela-traumas");

function novaLinhaTraumas() {
    let nova_linha_traumas = document.createElement("div");
    tabela_traumas.appendChild(nova_linha_traumas);
    nova_linha_traumas.classList.add("traumas-info");

    let nova_linhas = document.getElementsByClassName("traumas-info");

    let cont_classes_traumas = nova_linhas.length;

    let linha_atual_traumasInfo = nova_linhas.length - 1;

    for (let i = 1; i <= 2; i++) {
        let input =  document.createElement("input");

        nova_linha_traumas.appendChild(input);

        switch (i) {
            case 1:
                input.setAttribute("id", `trauma${cont_classes_traumas}`);
                input.classList.add("trauma")
                break;
            case 2:
                input.setAttribute("id", `descricao${cont_classes_traumas}`);
                input.classList.add("descricao")
                break;
        }

        nova_linhas[linha_atual_traumasInfo].appendChild(input);
    
    }
}

/* Calculando os Pontos Principais */

let valor_pv_div = document.querySelector("div#pv div.pv");

let valor_pe_div = document.querySelector("div#pe div.pe");

let valor_sanidade_div = document.querySelector("div#san div.san");

let valor_sorte_div = document.querySelector("div#sorte div.sorte");
let d100_sorte;

let valor_dm_div = document.querySelector("div#dm div.dm");

let pp_cont = 0;

function calcPontosPrincipais() {
    if (pp_cont == 0) {
        if (pontos_restantes != 0) {
            alert("[ERRO!] Adicione todos os pontos disponíveis em seus atributos antes de calcular os Status Principais");
        } else {
            /* Pontos de Vida */
    
            /* Pontos de Esforço */
    
            /* Sanidade */
    
            /* Sorte */
            d100_sorte = Math.floor(Math.random() * 100);
            console.log(d100_sorte);
            valor_sorte_div.innerHTML = `${d100_sorte}`;
    
            /* DM */
        }
    } else {
        alert("[ERRO!] Você só pode Definir Status 1 vez")
    }

    pp_cont = 1;
}

/* Calculando os Pontos Adicionais */

let valor_desl_div = document.querySelector("div#desl div.desl");

let valor_inic_div = document.querySelector("div#inic div.inic");

let valor_def_div = document.querySelector("div#def div.def");

let pa_cont = 0;

function calcPontosAdicionais() {
    if (pa_cont == 0) {
        if (pontos_restantes != 0) {
            alert("[ERRO!] Adicione todos os pontos disponíveis em seus atributos antes de calcular os Status Adicionais");
        } else {
            /* Deslocamento */
    
            /* Iniciativa */
    
            /* Defesa */
        }
    } else {
        alert("[ERRO!] Você só pode Definir Status 1 vez")
    }
    
    pa_cont = 1;
}

/* Animação do Surgimento do Menu */

let menu = document.getElementById("div-menu-simbolo");
let div_menu = document.getElementById("menu-lateral");
let body = document.querySelector("body");

let cont_menu = 0;

function chamarMenu() {
    if (cont_menu % 2 == 0) {
        div_menu.style.left = "0px";
        div_menu.style.transition = "1s";

        menu.style.left = "150px";
        menu.style.transition = "1s";
        menu.style.transitionDelay = ".1s";

        body.style.overflowY = "hidden";
    } else {
        div_menu.style.left = "-250px";
        div_menu.style.transition = "1s";

        menu.style.left = "10px";
        menu.style.transition = ".5s";

        body.style.overflowY = "unset";
    }
    cont_menu++;
}