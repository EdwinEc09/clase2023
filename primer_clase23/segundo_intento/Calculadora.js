function operador (op){
  //-- Segun el estado hacemos una cosa u otra
  if (estado == ESTADO.OP1){
    display.innerHTML += op;
    estado = ESTADO.OPERATION;
  }else if(estado == ESTADO.OP2_INIT){
    display.innerHTML += op;
    estado = ESTADO.OP2;
  }else if (estado == ESTADO.OP2){
    display.innerHTML += op;
    estado = ESTADO.OP2;
  }
}

op = document.getElementsByClassName("operador")
//-- Insertar simbolo de operador
for (i=0; i<operador.length; i++) {
  op[i].onclick = (ev) => {
    operador(ev.target.value)
  }
}